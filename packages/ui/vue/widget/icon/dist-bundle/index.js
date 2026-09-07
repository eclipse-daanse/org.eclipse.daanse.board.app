(function(){var i="ui.vue.widget.icon",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".icon[data-v-fe4fcc41]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.material-symbols-outlined[data-v-fe4fcc41]{font-family:Material Symbols Outlined;font-weight:400;font-style:normal;font-size:var(--v16176ccf);color:var(--baa14a34);display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr}.settings-container[data-v-53b4981a]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-53b4981a]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-53b4981a]{font-family:Material Symbols Outlined;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-53b4981a]:hover{transform:scale(1.1)}.active-icon[data-v-53b4981a]{border:2px solid rgb(0,121,0)}.slider[data-v-53b4981a]{padding:0 10px}\n";})();
import { PayloadImpl as Nt, EVENT_REGISTRY_ID as Qt } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Jt, deactivate as es, component as ts, inject as ss, initTsmRuntime as rs } from "@eclipse-daanse/tsm";
import { defineComponent as Tt, mergeModels as is, useCssVars as as, unref as $e, toRefs as ns, useModel as vt, inject as wt, onMounted as St, computed as he, createElementBlock as Se, openBlock as Ie, Fragment as qe, createElementVNode as de, withModifiers as os, mergeProps as ls, toDisplayString as It, ref as we, watch as cs, markRaw as us, resolveComponent as ye, createVNode as Z, withCtx as Ue, normalizeStyle as _s, renderList as hs, normalizeClass as ds } from "vue";
import { useVariableRepository as gs, VariableWrapper as Ce } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { VariableInput as ps } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as ms } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: fs } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), ys = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M39.9389%2066.162C39.4109%2066.162%2039.0029%2066.018%2038.7149%2065.73C38.4269%2065.43%2038.2829%2065.01%2038.2829%2064.47V54.84C38.2829%2054.288%2038.4269%2053.868%2038.7149%2053.58C39.0029%2053.292%2039.4109%2053.148%2039.9389%2053.148C40.4789%2053.148%2040.8869%2053.292%2041.1629%2053.58C41.4509%2053.868%2041.5949%2054.288%2041.5949%2054.84V64.47C41.5949%2065.01%2041.4569%2065.43%2041.1809%2065.73C40.9049%2066.018%2040.4909%2066.162%2039.9389%2066.162Z'%20fill='%23606060'/%3e%3cpath%20d='M50.2983%2066.198C48.8943%2066.198%2047.6883%2065.928%2046.6803%2065.388C45.6723%2064.848%2044.8983%2064.086%2044.3583%2063.102C43.8303%2062.118%2043.5663%2060.966%2043.5663%2059.646C43.5663%2058.662%2043.7163%2057.768%2044.0163%2056.964C44.3283%2056.16%2044.7723%2055.47%2045.3483%2054.894C45.9363%2054.318%2046.6443%2053.88%2047.4723%2053.58C48.3123%2053.268%2049.2543%2053.112%2050.2983%2053.112C50.8503%2053.112%2051.4203%2053.178%2052.0083%2053.31C52.6083%2053.43%2053.1363%2053.616%2053.5923%2053.868C53.9283%2054.048%2054.1623%2054.276%2054.2943%2054.552C54.4263%2054.828%2054.4683%2055.11%2054.4203%2055.398C54.3843%2055.686%2054.2823%2055.944%2054.1143%2056.172C53.9463%2056.4%2053.7303%2056.556%2053.4663%2056.64C53.2023%2056.712%2052.9143%2056.67%2052.6023%2056.514C52.2423%2056.346%2051.8823%2056.22%2051.5223%2056.136C51.1743%2056.04%2050.8083%2055.992%2050.4243%2055.992C49.6803%2055.992%2049.0563%2056.136%2048.5523%2056.424C48.0603%2056.7%2047.6883%2057.108%2047.4363%2057.648C47.1843%2058.188%2047.0583%2058.854%2047.0583%2059.646C47.0583%2060.438%2047.1843%2061.11%2047.4363%2061.662C47.6883%2062.202%2048.0603%2062.616%2048.5523%2062.904C49.0563%2063.18%2049.6803%2063.318%2050.4243%2063.318C50.7363%2063.318%2051.0723%2063.282%2051.4323%2063.21C51.7923%2063.126%2052.1463%2063%2052.4943%2062.832C52.8543%2062.676%2053.1723%2062.634%2053.4483%2062.706C53.7363%2062.778%2053.9643%2062.922%2054.1323%2063.138C54.3123%2063.354%2054.4263%2063.606%2054.4743%2063.894C54.5223%2064.17%2054.4803%2064.446%2054.3483%2064.722C54.2283%2064.998%2054.0123%2065.22%2053.7003%2065.388C53.2803%2065.64%2052.7583%2065.838%2052.1343%2065.982C51.5223%2066.126%2050.9103%2066.198%2050.2983%2066.198Z'%20fill='%23606060'/%3e%3cpath%20d='M61.981%2066.198C60.697%2066.198%2059.569%2065.928%2058.597%2065.388C57.625%2064.836%2056.869%2064.068%2056.329%2063.084C55.801%2062.1%2055.537%2060.954%2055.537%2059.646C55.537%2058.662%2055.687%2057.768%2055.987%2056.964C56.299%2056.16%2056.737%2055.47%2057.301%2054.894C57.877%2054.318%2058.561%2053.88%2059.353%2053.58C60.145%2053.268%2061.021%2053.112%2061.981%2053.112C63.265%2053.112%2064.387%2053.382%2065.347%2053.922C66.319%2054.462%2067.075%2055.224%2067.615%2056.208C68.155%2057.18%2068.425%2058.326%2068.425%2059.646C68.425%2060.63%2068.269%2061.524%2067.957%2062.328C67.657%2063.132%2067.219%2063.828%2066.643%2064.416C66.079%2064.992%2065.401%2065.436%2064.609%2065.748C63.817%2066.048%2062.941%2066.198%2061.981%2066.198ZM61.981%2063.426C62.617%2063.426%2063.157%2063.276%2063.601%2062.976C64.045%2062.676%2064.387%2062.244%2064.627%2061.68C64.867%2061.116%2064.987%2060.438%2064.987%2059.646C64.987%2058.458%2064.723%2057.534%2064.195%2056.874C63.667%2056.214%2062.929%2055.884%2061.981%2055.884C61.357%2055.884%2060.817%2056.034%2060.361%2056.334C59.917%2056.622%2059.575%2057.048%2059.335%2057.612C59.095%2058.164%2058.975%2058.842%2058.975%2059.646C58.975%2060.834%2059.239%2061.764%2059.767%2062.436C60.295%2063.096%2061.033%2063.426%2061.981%2063.426Z'%20fill='%23606060'/%3e%3cpath%20d='M71.9285%2066.162C71.4245%2066.162%2071.0405%2066.03%2070.7765%2065.766C70.5125%2065.502%2070.3805%2065.112%2070.3805%2064.596V54.786C70.3805%2054.258%2070.5125%2053.856%2070.7765%2053.58C71.0405%2053.292%2071.3885%2053.148%2071.8205%2053.148C72.2045%2053.148%2072.5045%2053.22%2072.7205%2053.364C72.9365%2053.508%2073.1765%2053.748%2073.4405%2054.084L79.1465%2061.212H78.6425V54.696C78.6425%2054.192%2078.7685%2053.808%2079.0205%2053.544C79.2845%2053.28%2079.6685%2053.148%2080.1725%2053.148C80.6765%2053.148%2081.0545%2053.28%2081.3065%2053.544C81.5705%2053.808%2081.7025%2054.192%2081.7025%2054.696V64.668C81.7025%2065.124%2081.5825%2065.49%2081.3425%2065.766C81.1025%2066.03%2080.7785%2066.162%2080.3705%2066.162C79.9625%2066.162%2079.6385%2066.09%2079.3985%2065.946C79.1705%2065.79%2078.9245%2065.55%2078.6605%2065.226L72.9545%2058.08H73.4585V64.596C73.4585%2065.112%2073.3265%2065.502%2073.0625%2065.766C72.8105%2066.03%2072.4325%2066.162%2071.9285%2066.162Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2043.5C22.5%2042.6716%2023.1716%2042%2024%2042H96C96.8284%2042%2097.5%2042.6716%2097.5%2043.5C97.5%2044.3284%2096.8284%2045%2096%2045H24C23.1716%2045%2022.5%2044.3284%2022.5%2043.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2076.5C22.5%2075.6716%2023.1716%2075%2024%2075H96C96.8284%2075%2097.5%2075.6716%2097.5%2076.5C97.5%2077.3284%2096.8284%2078%2096%2078H24C23.1716%2078%2022.5%2077.3284%2022.5%2076.5Z'%20fill='%23606060'/%3e%3c/svg%3e";
function re(_) {
  return _ && typeof _.eProxyURI == "function" && typeof _.eSetProxyURI == "function";
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
}, Ke = -1, Es = -1;
class Ne {
  constructor(e, t, s, r, i, a = Ke, l = !0) {
    this.notifier = e, this.eventType = t, this.feature = s, this.featureID = Es, this.oldValue = r, this.newValue = i, this.position = a, this.wasSetFlag = l;
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
const je = /^(?:0|[1-9]\d*)$/, kt = Symbol.for("emfts.indexedList"), At = {
  get(_, e, t) {
    if (e === kt)
      return !0;
    if (typeof e == "string" && je.test(e)) {
      const s = Number(e), r = _.data;
      return r !== void 0 ? r[s] : s < _.size() ? _.get(s) : void 0;
    }
    return Reflect.get(_, e, t);
  },
  set(_, e, t, s) {
    if (e === "length") {
      const r = typeof t == "number" ? t : parseInt(t, 10);
      if (isNaN(r) || r < 0)
        throw new RangeError(`Invalid list length: ${String(t)}`);
      if (r === 0)
        _.clear();
      else
        for (; _.size() > r; )
          _.removeAt(_.size() - 1);
      return !0;
    }
    if (typeof e == "string" && je.test(e)) {
      const r = Number(e), i = _.size();
      if (r < i)
        _.set(r, t);
      else if (r === i)
        _.add(t);
      else
        throw new RangeError(`Index ${r} out of bounds for list of size ${i}. ELists do not support sparse assignment - use add() or push().`);
      return !0;
    }
    return Reflect.set(_, e, t, s);
  },
  has(_, e) {
    return typeof e == "string" && je.test(e) ? Number(e) < _.size() : Reflect.has(_, e);
  }
};
class ae {
  constructor(e = null, t = null) {
    return this.data = [], this.owner = e, this.feature = t, new Proxy(this, At);
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
    const r = e < 0 ? Math.max(this.data.length + e, 0) : Math.min(e, this.data.length), i = t === void 0 ? this.data.length - r : Math.min(Math.max(t, 0), this.data.length - r), a = [];
    for (let l = 0; l < i; l++)
      r < this.data.length && a.push(this.removeAt(r));
    for (let l = 0; l < s.length; l++)
      this.addAt(r + l, s[l]);
    return a;
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
      Array.isArray(s) ? t.push(...s) : s instanceof ae ? t.push(...s.data) : t.push(s);
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
    e.length === 1 ? this.dispatchNotification(v.REMOVE, e[0], null, 0) : this.dispatchNotification(v.REMOVE_MANY, e, null, Ke);
  }
  didSet(e, t, s) {
    this.dispatchNotification(v.SET, s, t, e);
  }
  didMove(e, t, s) {
    this.dispatchNotification(v.MOVE, s, t, e);
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
    const a = new Ne(this.owner, e, i, t, s, r);
    "eNotify" in this.owner && this.owner.eNotify(a);
  }
}
class He extends ae {
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
class bs extends He {
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
class Cs extends ae {
  constructor(e, t) {
    super(e, t);
  }
  get(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    let t = this.data[e];
    if (t && re(t) && t.eIsProxy() && this.owner && "eResolveProxy" in this.owner) {
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
function z(_) {
  return _ && typeof _.add == "function" && typeof _.size == "function" && typeof _.get == "function";
}
function ie(_) {
  return _[kt] ? _ : new Proxy(_, At);
}
function Ns(_, e) {
  return ie(new He(_, e));
}
function Ts(_, e) {
  return ie(new Cs(_, e));
}
function vs(_, e) {
  return ie(new ae(_, e));
}
class ws extends ae {
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
    e.length === 1 ? this.dispatchResourceNotification(v.REMOVE, e[0], null, 0) : e.length > 1 && this.dispatchResourceNotification(v.REMOVE_MANY, e, null, Ke);
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
      const l = this.resource.eAdapters();
      if (!l || l.length === 0)
        return;
    } else
      return;
    const i = { getName: () => "contents" }, a = new Ne(this.resource, e, i, t, s, r);
    "eNotify" in this.resource && this.resource.eNotify(a);
  }
}
function Ss(_) {
  return ie(new ws(_));
}
var V;
(function(_) {
  _.INSTANCE = ks();
})(V || (V = {}));
function xt(_, e) {
  for (const t of e.getESubpackages()) {
    const s = t.getNsURI();
    s && _.set(s, t), xt(_, t);
  }
}
function Is(_) {
  const e = _.getNsURI();
  if (!e)
    throw new Error(`Cannot register package '${_.getName() ?? "<unnamed>"}': it has no nsURI.`);
  return e;
}
function ks() {
  const _ = /* @__PURE__ */ new Map();
  return {
    getEPackage(e) {
      const t = _.get(e);
      return t ? "getEPackage" in t ? t.getEPackage() : t : null;
    },
    getEFactory(e) {
      const t = _.get(e);
      return t ? "getEFactory" in t ? t.getEFactory() : t.getEFactoryInstance() : null;
    },
    get(e) {
      return _.get(e) || null;
    },
    set(e, t) {
      _.set(e, t), "getEPackage" in t || xt(_, t);
    },
    registerPackage(e) {
      this.set(Is(e), e);
    },
    delete(e) {
      return _.delete(e);
    },
    has(e) {
      return _.has(e);
    },
    keys() {
      return _.keys();
    },
    values() {
      return _.values();
    }
  };
}
class C {
  constructor(e, t, s, r, i) {
    this._scheme = e, this._authority = t, this._path = s, this._query = r, this._fragment = i;
  }
  /**
   * Creates a URI from a string.
   */
  static createURI(e) {
    if (!e)
      return new C(null, null, "", null, null);
    let t = null, s = null, r = null, i = null, a = null, l = 0;
    e.length;
    const c = e.indexOf("#");
    c >= 0 && (a = e.substring(c + 1), e = e.substring(0, c));
    const u = e.indexOf("?");
    u >= 0 && (i = e.substring(u + 1), e = e.substring(0, u));
    const p = e.indexOf(":");
    if (p > 0) {
      let g = !0;
      for (let m = 0; m < p; m++)
        if (e.charAt(m) === "/") {
          g = !1;
          break;
        }
      g && (t = e.substring(0, p), l = p + 1);
    }
    if (e.startsWith("//", l)) {
      const g = l + 2;
      let m = g;
      for (; m < e.length && e.charAt(m) !== "/"; )
        m++;
      s = e.substring(g, m), l = m;
    }
    return l < e.length ? r = e.substring(l) : s !== null && (r = ""), new C(t, s, r, i, a);
  }
  /**
   * Creates a file URI.
   */
  static createFileURI(e) {
    return new C("file", null, e, null, null);
  }
  /**
   * Creates a platform resource URI.
   */
  static createPlatformResourceURI(e, t = !0) {
    return new C("platform", null, "/resource" + e, null, null);
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
    return new C(this._scheme, this._authority, this._path, this._query, e);
  }
  /**
   * Returns a new URI with the given path segment appended.
   */
  appendSegment(e) {
    let t = this._path || "";
    return !t && this._authority && (t = "/"), t && !t.endsWith("/") && (t += "/"), t += e, new C(this._scheme, this._authority, t, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the specified number of segments trimmed from the end.
   */
  trimSegments(e) {
    if (!this._path || e <= 0)
      return this;
    const t = this._path.split("/").filter((i) => i.length > 0), s = t.slice(0, Math.max(0, t.length - e));
    let r = this._path.startsWith("/") ? "/" : "";
    return r += s.join("/"), this._path.endsWith("/") && r.length > 0 && (r += "/"), new C(this._scheme, this._authority, r, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the query removed.
   */
  trimQuery() {
    return new C(this._scheme, this._authority, this._path, null, this._fragment);
  }
  /**
   * Returns a new URI with the fragment removed.
   */
  trimFragment() {
    return new C(this._scheme, this._authority, this._path, this._query, null);
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
          const a = r.lastIndexOf("/");
          a >= 0 && (r = r.substring(0, a + 1));
        }
      } else
        r = e._path;
      i = this._query !== null ? this._query : e._query;
    } else
      r.startsWith("/") || (r = this.mergePaths(e._path, r), r = this.removeDotSegments(r));
    return new C(t, s, r, i, this._fragment);
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
      return new C(null, this._authority, this._path, this._query, this._fragment);
    const t = this._path || "", s = e._path || "";
    if (t === s)
      return this._query === e._query ? new C(null, null, null, null, this._fragment) : new C(null, null, "", this._query, this._fragment);
    const r = t.split("/"), i = s.split("/");
    let a = 0;
    const l = Math.min(r.length, i.length);
    for (let m = 0; m < l - 1 && r[m] === i[m]; m++)
      a++;
    const c = i.length - a - 1, u = t.includes("/./") || t.includes("/../") || t.endsWith("/.") || t.endsWith("/..");
    if (t.startsWith("/") && (c >= 3 || u && c > 0))
      return new C(null, null, t, this._query, this._fragment);
    const p = [];
    for (let m = 0; m < c; m++)
      p.push("..");
    for (let m = a; m < r.length; m++)
      p.push(r[m]);
    let g = p.join("/");
    return g === "" && t.endsWith("/") && (g = "./"), new C(null, null, g, this._query, this._fragment);
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
      const a = s[i];
      a === ".." ? t.length > 0 && t[t.length - 1] !== "" && t.pop() : a !== "." && !(a === "" && i > 0 && i < s.length - 1) && t.push(a);
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
function As(_) {
  return "unsetTarget" in _ && typeof _.unsetTarget == "function";
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
        if (Array.isArray(i) || z(i))
          for (const a of i)
            e.push(a);
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
    const i = t.toString(), a = i.indexOf("#");
    if (a > 0) {
      const l = i.substring(0, a), c = i.substring(a + 1);
      let u;
      const p = s.getURI();
      p && !l.includes("://") ? u = p.resolve(C.createURI(l)) : u = C.createURI(l);
      const g = r.getResource(u, !0);
      if (g) {
        const S = g.getEObject(c);
        if (S)
          return S;
      }
      const m = r.getPackageRegistry(), y = this.resolveFragmentViaPackageRegistry(m, l, c, r);
      if (y)
        return y;
    } else if (a === 0) {
      const l = i.substring(1), c = s.getEObject(l);
      if (c)
        return c;
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
      const u = this.resolveFragmentInPackage(i, s);
      if (u)
        return u;
    }
    let a = t;
    const l = a.lastIndexOf("/");
    l >= 0 && (a = a.substring(l + 1));
    const c = a.indexOf(".");
    if (c > 0 && (a = a.substring(0, c)), a)
      for (const u of e.keys()) {
        const p = e.getEPackage(u);
        if (p && p.getName() === a) {
          const g = this.resolveFragmentInPackage(p, s);
          if (g)
            return g;
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
    for (let c = 0; c < r.length - 1; c++) {
      const u = i.getESubpackages();
      let p = null;
      for (let g = 0; g < u.length; g++)
        if (u.get(g).getName() === r[c]) {
          p = u.get(g);
          break;
        }
      if (!p)
        return null;
      i = p;
    }
    const a = r[r.length - 1];
    return i.getEClassifier(a) ?? null;
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
        const s = new Ne(this, v.REMOVING_ADAPTER, null, e, null);
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
          if (Array.isArray(i) || z(i))
            for (const a of i)
              e.push(a);
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
          for (const a of t)
            a && "eSetContainer" in a && a.eSetContainer(this, i);
        else
          t.eSetContainer(this, i);
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const i = new Ne(this, v.SET, e, r, t);
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
      const r = new Ne(this, v.UNSET, e, s, e.getDefaultValue());
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
class Rt extends K {
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
      if (!e.isMany() && r && re(r) && r.eIsProxy()) {
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
        i.isContainment() ? r = Ns(this, i) : r = Ts(this, i);
      } else
        r = vs(this, e);
      return this.eSettings.set(t, r), r;
    }
    const s = e.getDefaultValue();
    return s !== void 0 ? s : null;
  }
}
class xs extends He {
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
class Rs {
  constructor(e, t, s) {
    this.mapIndex = null, this._owner = e, this.entryEClass = s, this.delegateList = new xs(e, t, this);
    const r = s.getEStructuralFeature("key"), i = s.getEStructuralFeature("value");
    if (!r || !i)
      throw new Error(`Entry EClass '${s.getName()}' must have 'key' and 'value' features`);
    return this.keyFeature = r, this.valueFeature = i, ie(this);
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
    let a;
    i && i.getEFactoryInstance() ? a = i.getEFactoryInstance().create(this.entryEClass) : a = new Rt(this.entryEClass), a.eSet(this.keyFeature, e), a.eSet(this.valueFeature, t), this.delegateList.add(a);
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
function Os(_, e, t) {
  return new Rs(_, e, t);
}
var Ae;
(function(_) {
  _.INSTANCE_FACTORY_REGISTRY = Ds();
})(Ae || (Ae = {}));
function Ds() {
  const _ = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return {
    getFactory(s) {
      const r = s.scheme();
      if (r && e.has(r))
        return e.get(r);
      const i = s.fileExtension();
      return i && _.has(i) ? _.get(i) : null;
    },
    getExtensionToFactoryMap() {
      return _;
    },
    getProtocolToFactoryMap() {
      return e;
    },
    getContentTypeToFactoryMap() {
      return t;
    }
  };
}
class Ot {
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
      const t = e.split("/"), s = t.length >= 2 && t[0] === "" && t[1] === "", r = t.filter((l) => l.length > 0);
      if (r.length === 0)
        return this.contents.size() > 0 ? this.contents.get(0) : null;
      let i = null, a = 0;
      if (s && (i = this.contents.size() > 0 ? this.contents.get(0) : null, !i || (r[0].startsWith("@") ? i = this.eObjectForURIFragmentSegment(i, r[0]) : i = this.findByNameInContents(i, r[0]), a = 1, !i)))
        return null;
      for (let l = a; l < r.length; l++) {
        const c = r[l], u = parseInt(c, 10);
        if (i === null ? isNaN(u) ? (i = this.findByName(this.contents.toArray(), c), !i && this.contents.size() > 0 && (i = this.findByNameInContents(this.contents.get(0), c))) : i = u < this.contents.size() ? this.contents.get(u) : null : isNaN(u) ? i = this.navigateByNameOrFeature(i, c) : i = i.eContents()[u] || null, !i)
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
    const a = e.eClass().getEStructuralFeature(t);
    if (a) {
      const l = e.eGet(a);
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
    let a, l = -1;
    if (i >= "0" && i <= "9") {
      const p = s.lastIndexOf(".");
      if (p > 0) {
        const g = parseInt(s.substring(p + 1), 10);
        isNaN(g) ? a = s : (a = s.substring(0, p), l = g);
      } else
        a = s;
    } else
      a = s;
    const c = r.getEStructuralFeature(a);
    if (!c)
      return null;
    const u = e.eGet(c);
    return u == null ? null : l >= 0 ? Array.isArray(u) ? u[l] ?? null : typeof u == "object" && "get" in u && typeof u.get == "function" ? u.get(l) ?? null : null : typeof u == "object" && "eClass" in u ? u : null;
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
      const a = r.eContents().indexOf(s);
      a >= 0 && t.unshift(a), s = r;
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
      const r = s.value, a = r.eClass().getEIDAttribute();
      if (a && r.eGet(a) === e)
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
      i != null && (r.isMany() && Array.isArray(i) ? s[r.getName()] = i.map((a) => typeof a == "object" && "eClass" in a ? this.serializeObject(a) : a) : s[r.getName()] = typeof i == "object" && "eClass" in i ? this.serializeObject(i) : i);
    }
    return s;
  }
}
function Ps(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
function Fs(_) {
  if (Object.prototype.hasOwnProperty.call(_, "__esModule")) return _;
  var e = _.default;
  if (typeof e == "function") {
    var t = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(_).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(_, s);
    Object.defineProperty(t, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return _[s];
      }
    });
  }), t;
}
var Ge = {};
const Bs = {}, Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bs
}, Symbol.toStringTag, { value: "Module" })), Ms = /* @__PURE__ */ Fs(Ls);
var nt;
function Us() {
  return nt || (nt = 1, (function(_) {
    (function(e) {
      e.parser = function(o, n) {
        return new s(o, n);
      }, e.SAXParser = s, e.SAXStream = g, e.createStream = u, e.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function s(o, n) {
        if (!(this instanceof s))
          return new s(o, n);
        var f = this;
        i(f), f.q = f.c = "", f.bufferCheckPosition = e.MAX_BUFFER_LENGTH, f.encoding = null, f.opt = n || {}, f.opt.lowercase = f.opt.lowercase || f.opt.lowercasetags, f.looseCase = f.opt.lowercase ? "toLowerCase" : "toUpperCase", f.opt.maxEntityCount = f.opt.maxEntityCount || 512, f.opt.maxEntityDepth = f.opt.maxEntityDepth || 4, f.entityCount = f.entityDepth = 0, f.tags = [], f.closed = f.closedRoot = f.sawRoot = !1, f.tag = f.error = null, f.strict = !!o, f.noscript = !!(o || f.opt.noscript), f.state = d.BEGIN, f.strictEntities = f.opt.strictEntities, f.ENTITIES = f.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), f.attribList = [], f.opt.xmlns && (f.ns = Object.create(U)), f.opt.unquotedAttributeValues === void 0 && (f.opt.unquotedAttributeValues = !o), f.trackPosition = f.opt.position !== !1, f.trackPosition && (f.position = f.line = f.column = 0), pe(f, "onready");
      }
      Object.create || (Object.create = function(o) {
        function n() {
        }
        n.prototype = o;
        var f = new n();
        return f;
      }), Object.keys || (Object.keys = function(o) {
        var n = [];
        for (var f in o) o.hasOwnProperty(f) && n.push(f);
        return n;
      });
      function r(o) {
        for (var n = Math.max(e.MAX_BUFFER_LENGTH, 10), f = 0, h = 0, I = t.length; h < I; h++) {
          var B = o[t[h]].length;
          if (B > n)
            switch (t[h]) {
              case "textNode":
                me(o);
                break;
              case "cdata":
                L(o, "oncdata", o.cdata), o.cdata = "";
                break;
              case "script":
                L(o, "onscript", o.script), o.script = "";
                break;
              default:
                ne(o, "Max buffer length exceeded: " + t[h]);
            }
          f = Math.max(f, B);
        }
        var M = e.MAX_BUFFER_LENGTH - f;
        o.bufferCheckPosition = M + o.position;
      }
      function i(o) {
        for (var n = 0, f = t.length; n < f; n++)
          o[t[n]] = "";
      }
      function a(o) {
        me(o), o.cdata !== "" && (L(o, "oncdata", o.cdata), o.cdata = ""), o.script !== "" && (L(o, "onscript", o.script), o.script = "");
      }
      s.prototype = {
        end: function() {
          st(this);
        },
        write: Vt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          a(this);
        }
      };
      var l;
      try {
        l = Ms.Stream;
      } catch {
        l = function() {
        };
      }
      l || (l = function() {
      });
      var c = e.EVENTS.filter(function(o) {
        return o !== "error" && o !== "end";
      });
      function u(o, n) {
        return new g(o, n);
      }
      function p(o, n) {
        if (o.length >= 2) {
          if (o[0] === 255 && o[1] === 254)
            return "utf-16le";
          if (o[0] === 254 && o[1] === 255)
            return "utf-16be";
        }
        return o.length >= 3 && o[0] === 239 && o[1] === 187 && o[2] === 191 ? "utf8" : o.length >= 4 ? o[0] === 60 && o[1] === 0 && o[2] === 63 && o[3] === 0 ? "utf-16le" : o[0] === 0 && o[1] === 60 && o[2] === 0 && o[3] === 63 ? "utf-16be" : "utf8" : n ? "utf8" : null;
      }
      function g(o, n) {
        if (!(this instanceof g))
          return new g(o, n);
        l.apply(this), this._parser = new s(o, n), this.writable = !0, this.readable = !0;
        var f = this;
        this._parser.onend = function() {
          f.emit("end");
        }, this._parser.onerror = function(h) {
          f.emit("error", h), f._parser.error = null;
        }, this._decoder = null, this._decoderBuffer = null, c.forEach(function(h) {
          Object.defineProperty(f, "on" + h, {
            get: function() {
              return f._parser["on" + h];
            },
            set: function(I) {
              if (!I)
                return f.removeAllListeners(h), f._parser["on" + h] = I, I;
              f.on(h, I);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      g.prototype = Object.create(l.prototype, {
        constructor: {
          value: g
        }
      }), g.prototype._decodeBuffer = function(o, n) {
        if (this._decoderBuffer && (o = Buffer.concat([this._decoderBuffer, o]), this._decoderBuffer = null), !this._decoder) {
          var f = p(o, n);
          if (!f)
            return this._decoderBuffer = o, "";
          this._parser.encoding = f, this._decoder = new TextDecoder(f);
        }
        return this._decoder.decode(o, { stream: !n });
      }, g.prototype.write = function(o) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(o))
          o = this._decodeBuffer(o, !1);
        else if (this._decoderBuffer) {
          var n = this._decodeBuffer(Buffer.alloc(0), !0);
          n && (this._parser.write(n), this.emit("data", n));
        }
        return this._parser.write(o.toString()), this.emit("data", o), !0;
      }, g.prototype.end = function(o) {
        if (o && o.length && this.write(o), this._decoderBuffer) {
          var n = this._decodeBuffer(Buffer.alloc(0), !0);
          n && (this._parser.write(n), this.emit("data", n));
        } else if (this._decoder) {
          var f = this._decoder.decode();
          f && (this._parser.write(f), this.emit("data", f));
        }
        return this._parser.end(), !0;
      }, g.prototype.on = function(o, n) {
        var f = this;
        return !f._parser["on" + o] && c.indexOf(o) !== -1 && (f._parser["on" + o] = function() {
          var h = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          h.splice(0, 0, o), f.emit.apply(f, h);
        }), l.prototype.on.call(f, o, n);
      };
      var m = /^\[CDATA\[$/i, y = /^DOCTYPE$/i, S = "http://www.w3.org/XML/1998/namespace", R = "http://www.w3.org/2000/xmlns/", U = { xml: S, xmlns: R }, F = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, j = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, N = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, $ = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function O(o) {
        return o === " " || o === `
` || o === "\r" || o === "	";
      }
      function X(o) {
        return o === '"' || o === "'";
      }
      function fe(o) {
        return o === ">" || O(o);
      }
      function Y(o, n) {
        return o.test(n);
      }
      function le(o, n) {
        return !Y(o, n);
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
        var n = e.ENTITIES[o], f = typeof n == "number" ? String.fromCharCode(n) : n;
        e.ENTITIES[o] = f;
      });
      for (var Je in e.STATE)
        e.STATE[e.STATE[Je]] = Je;
      d = e.STATE;
      function pe(o, n, f) {
        o[n] && o[n](f);
      }
      function qt(o) {
        var n = o && o.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
        return n ? n[2] : null;
      }
      function et(o) {
        return o ? o.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
      }
      function Wt(o, n) {
        const f = et(o), h = et(n);
        return !f || !h ? !0 : h === "utf16" ? f === "utf16le" || f === "utf16be" : f === h;
      }
      function Xt(o, n) {
        if (!(!o.strict || !o.encoding || !n || n.name !== "xml")) {
          var f = qt(n.body);
          f && !Wt(o.encoding, f) && k(
            o,
            "XML declaration encoding " + f + " does not match detected stream encoding " + o.encoding.toUpperCase()
          );
        }
      }
      function L(o, n, f) {
        o.textNode && me(o), pe(o, n, f);
      }
      function me(o) {
        o.textNode = tt(o.opt, o.textNode), o.textNode && pe(o, "ontext", o.textNode), o.textNode = "";
      }
      function tt(o, n) {
        return o.trim && (n = n.trim()), o.normalize && (n = n.replace(/\s+/g, " ")), n;
      }
      function ne(o, n) {
        return me(o), o.trackPosition && (n += `
Line: ` + o.line + `
Column: ` + o.column + `
Char: ` + o.c), n = new Error(n), o.error = n, pe(o, "onerror", n), o;
      }
      function st(o) {
        return o.sawRoot && !o.closedRoot && k(o, "Unclosed root tag"), o.state !== d.BEGIN && o.state !== d.BEGIN_WHITESPACE && o.state !== d.TEXT && ne(o, "Unexpected end"), me(o), o.c = "", o.closed = !0, pe(o, "onend"), s.call(o, o.strict, o.opt), o;
      }
      function k(o, n) {
        if (typeof o != "object" || !(o instanceof s))
          throw new Error("bad call to strictFail");
        o.strict && ne(o, n);
      }
      function Yt(o) {
        o.strict || (o.tagName = o.tagName[o.looseCase]());
        var n = o.tags[o.tags.length - 1] || o, f = o.tag = { name: o.tagName, attributes: {} };
        o.opt.xmlns && (f.ns = n.ns), o.attribList.length = 0, L(o, "onopentagstart", f);
      }
      function Pe(o, n) {
        var f = o.indexOf(":"), h = f < 0 ? ["", o] : o.split(":"), I = h[0], B = h[1];
        return n && o === "xmlns" && (I = "xmlns", B = ""), { prefix: I, local: B };
      }
      function Fe(o) {
        if (o.strict || (o.attribName = o.attribName[o.looseCase]()), o.attribList.indexOf(o.attribName) !== -1 || o.tag.attributes.hasOwnProperty(o.attribName)) {
          o.attribName = o.attribValue = "";
          return;
        }
        if (o.opt.xmlns) {
          var n = Pe(o.attribName, !0), f = n.prefix, h = n.local;
          if (f === "xmlns")
            if (h === "xml" && o.attribValue !== S)
              k(
                o,
                "xml: prefix must be bound to " + S + `
Actual: ` + o.attribValue
              );
            else if (h === "xmlns" && o.attribValue !== R)
              k(
                o,
                "xmlns: prefix must be bound to " + R + `
Actual: ` + o.attribValue
              );
            else {
              var I = o.tag, B = o.tags[o.tags.length - 1] || o;
              I.ns === B.ns && (I.ns = Object.create(B.ns)), I.ns[h] = o.attribValue;
            }
          o.attribList.push([o.attribName, o.attribValue]);
        } else
          o.tag.attributes[o.attribName] = o.attribValue, L(o, "onattribute", {
            name: o.attribName,
            value: o.attribValue
          });
        o.attribName = o.attribValue = "";
      }
      function oe(o, n) {
        if (o.opt.xmlns) {
          var f = o.tag, h = Pe(o.tagName);
          f.prefix = h.prefix, f.local = h.local, f.uri = f.ns[h.prefix] || "", f.prefix && !f.uri && (k(
            o,
            "Unbound namespace prefix: " + JSON.stringify(o.tagName)
          ), f.uri = h.prefix);
          var I = o.tags[o.tags.length - 1] || o;
          f.ns && I.ns !== f.ns && Object.keys(f.ns).forEach(function(at) {
            L(o, "onopennamespace", {
              prefix: at,
              uri: f.ns[at]
            });
          });
          for (var B = 0, M = o.attribList.length; B < M; B++) {
            var q = o.attribList[B], W = q[0], J = q[1], G = Pe(W, !0), ee = G.prefix, Zt = G.local, it = ee === "" ? "" : f.ns[ee] || "", Me = {
              name: W,
              value: J,
              prefix: ee,
              local: Zt,
              uri: it
            };
            ee && ee !== "xmlns" && !it && (k(
              o,
              "Unbound namespace prefix: " + JSON.stringify(ee)
            ), Me.uri = ee), o.tag.attributes[W] = Me, L(o, "onattribute", Me);
          }
          o.attribList.length = 0;
        }
        o.tag.isSelfClosing = !!n, o.sawRoot = !0, o.tags.push(o.tag), L(o, "onopentag", o.tag), n || (!o.noscript && o.tagName.toLowerCase() === "script" ? o.state = d.SCRIPT : o.state = d.TEXT, o.tag = null, o.tagName = ""), o.attribName = o.attribValue = "", o.attribList.length = 0;
      }
      function Be(o) {
        if (!o.tagName) {
          k(o, "Weird empty close tag."), o.textNode += "</>", o.state = d.TEXT;
          return;
        }
        if (o.script) {
          if (o.tagName !== "script") {
            o.script += "</" + o.tagName + ">", o.tagName = "", o.state = d.SCRIPT;
            return;
          }
          L(o, "onscript", o.script), o.script = "";
        }
        var n = o.tags.length, f = o.tagName;
        o.strict || (f = f[o.looseCase]());
        for (var h = f; n--; ) {
          var I = o.tags[n];
          if (I.name !== h)
            k(o, "Unexpected close tag");
          else
            break;
        }
        if (n < 0) {
          k(o, "Unmatched closing tag: " + o.tagName), o.textNode += "</" + o.tagName + ">", o.state = d.TEXT;
          return;
        }
        o.tagName = f;
        for (var B = o.tags.length; B-- > n; ) {
          var M = o.tag = o.tags.pop();
          o.tagName = o.tag.name, L(o, "onclosetag", o.tagName);
          var q = {};
          for (var W in M.ns)
            q[W] = M.ns[W];
          var J = o.tags[o.tags.length - 1] || o;
          o.opt.xmlns && M.ns !== J.ns && Object.keys(M.ns).forEach(function(G) {
            var ee = M.ns[G];
            L(o, "onclosenamespace", { prefix: G, uri: ee });
          });
        }
        n === 0 && (o.closedRoot = !0), o.tagName = o.attribValue = o.attribName = "", o.attribList.length = 0, o.state = d.TEXT;
      }
      function Kt(o) {
        var n = o.entity, f = n.toLowerCase(), h, I = "";
        return o.ENTITIES[n] ? o.ENTITIES[n] : o.ENTITIES[f] ? o.ENTITIES[f] : (n = f, n.charAt(0) === "#" && (n.charAt(1) === "x" ? (n = n.slice(2), h = parseInt(n, 16), I = h.toString(16)) : (n = n.slice(1), h = parseInt(n, 10), I = h.toString(10))), n = n.replace(/^0+/, ""), isNaN(h) || I.toLowerCase() !== n || h < 0 || h > 1114111 || !Ht(h) ? (k(o, "Invalid character entity"), "&" + o.entity + ";") : String.fromCodePoint(h));
      }
      function Ht(o) {
        return o === 9 || o === 10 || o === 13 || o >= 32 && o <= 55295 || o >= 57344 && o <= 65533 || o >= 65536 && o <= 1114111;
      }
      function rt(o, n) {
        n === "<" ? (o.state = d.OPEN_WAKA, o.startTagPosition = o.position) : O(n) || (k(o, "Non-whitespace before first tag."), o.textNode = n, o.state = d.TEXT);
      }
      function Le(o, n) {
        var f = "";
        return n < o.length && (f = o.charAt(n)), f;
      }
      function Vt(o) {
        var n = this;
        if (this.error)
          throw this.error;
        if (n.closed)
          return ne(
            n,
            "Cannot write after close. Assign an onready handler."
          );
        if (o === null)
          return st(n);
        typeof o == "object" && (o = o.toString());
        for (var f = 0, h = ""; h = Le(o, f++), n.c = h, !!h; )
          switch (n.trackPosition && (n.position++, h === `
` ? (n.line++, n.column = 0) : n.column++), n.state) {
            case d.BEGIN:
              if (n.state = d.BEGIN_WHITESPACE, h === "\uFEFF")
                continue;
              rt(n, h);
              continue;
            case d.BEGIN_WHITESPACE:
              rt(n, h);
              continue;
            case d.TEXT:
              if (n.sawRoot && !n.closedRoot) {
                for (var B = f - 1; h && h !== "<" && h !== "&"; )
                  h = Le(o, f++), h && n.trackPosition && (n.position++, h === `
` ? (n.line++, n.column = 0) : n.column++);
                n.textNode += o.substring(B, f - 1);
              }
              h === "<" && !(n.sawRoot && n.closedRoot && !n.strict) ? (n.state = d.OPEN_WAKA, n.startTagPosition = n.position) : (!O(h) && (!n.sawRoot || n.closedRoot) && k(n, "Text data outside of root node."), h === "&" ? n.state = d.TEXT_ENTITY : n.textNode += h);
              continue;
            case d.SCRIPT:
              h === "<" ? n.state = d.SCRIPT_ENDING : n.script += h;
              continue;
            case d.SCRIPT_ENDING:
              h === "/" ? n.state = d.CLOSE_TAG : (n.script += "<" + h, n.state = d.SCRIPT);
              continue;
            case d.OPEN_WAKA:
              if (h === "!")
                n.state = d.SGML_DECL, n.sgmlDecl = "";
              else if (!O(h)) if (Y(F, h))
                n.state = d.OPEN_TAG, n.tagName = h;
              else if (h === "/")
                n.state = d.CLOSE_TAG, n.tagName = "";
              else if (h === "?")
                n.state = d.PROC_INST, n.procInstName = n.procInstBody = "";
              else {
                if (k(n, "Unencoded <"), n.startTagPosition + 1 < n.position) {
                  var I = n.position - n.startTagPosition;
                  h = new Array(I).join(" ") + h;
                }
                n.textNode += "<" + h, n.state = d.TEXT;
              }
              continue;
            case d.SGML_DECL:
              if (n.sgmlDecl + h === "--") {
                n.state = d.COMMENT, n.comment = "", n.sgmlDecl = "";
                continue;
              }
              n.doctype && n.doctype !== !0 && n.sgmlDecl ? (n.state = d.DOCTYPE_DTD, n.doctype += "<!" + n.sgmlDecl + h, n.sgmlDecl = "") : m.test(n.sgmlDecl + h) ? (L(n, "onopencdata"), n.state = d.CDATA, n.sgmlDecl = "", n.cdata = "") : y.test(n.sgmlDecl + h) ? (n.state = d.DOCTYPE, (n.doctype || n.sawRoot) && k(
                n,
                "Inappropriately located doctype declaration"
              ), n.doctype = "", n.sgmlDecl = "") : h === ">" ? (L(n, "onsgmldeclaration", n.sgmlDecl), n.sgmlDecl = "", n.state = d.TEXT) : (X(h) && (n.state = d.SGML_DECL_QUOTED), n.sgmlDecl += h);
              continue;
            case d.SGML_DECL_QUOTED:
              h === n.q && (n.state = d.SGML_DECL, n.q = ""), n.sgmlDecl += h;
              continue;
            case d.DOCTYPE:
              h === ">" ? (n.state = d.TEXT, L(n, "ondoctype", n.doctype), n.doctype = !0) : (n.doctype += h, h === "[" ? n.state = d.DOCTYPE_DTD : X(h) && (n.state = d.DOCTYPE_QUOTED, n.q = h));
              continue;
            case d.DOCTYPE_QUOTED:
              n.doctype += h, h === n.q && (n.q = "", n.state = d.DOCTYPE);
              continue;
            case d.DOCTYPE_DTD:
              h === "]" ? (n.doctype += h, n.state = d.DOCTYPE) : h === "<" ? (n.state = d.OPEN_WAKA, n.startTagPosition = n.position) : X(h) ? (n.doctype += h, n.state = d.DOCTYPE_DTD_QUOTED, n.q = h) : n.doctype += h;
              continue;
            case d.DOCTYPE_DTD_QUOTED:
              n.doctype += h, h === n.q && (n.state = d.DOCTYPE_DTD, n.q = "");
              continue;
            case d.COMMENT:
              h === "-" ? n.state = d.COMMENT_ENDING : n.comment += h;
              continue;
            case d.COMMENT_ENDING:
              h === "-" ? (n.state = d.COMMENT_ENDED, n.comment = tt(n.opt, n.comment), n.comment && L(n, "oncomment", n.comment), n.comment = "") : (n.comment += "-" + h, n.state = d.COMMENT);
              continue;
            case d.COMMENT_ENDED:
              h !== ">" ? (k(n, "Malformed comment"), n.comment += "--" + h, n.state = d.COMMENT) : n.doctype && n.doctype !== !0 ? n.state = d.DOCTYPE_DTD : n.state = d.TEXT;
              continue;
            case d.CDATA:
              for (var B = f - 1; h && h !== "]"; )
                h = Le(o, f++), h && n.trackPosition && (n.position++, h === `
` ? (n.line++, n.column = 0) : n.column++);
              n.cdata += o.substring(B, f - 1), h === "]" && (n.state = d.CDATA_ENDING);
              continue;
            case d.CDATA_ENDING:
              h === "]" ? n.state = d.CDATA_ENDING_2 : (n.cdata += "]" + h, n.state = d.CDATA);
              continue;
            case d.CDATA_ENDING_2:
              h === ">" ? (n.cdata && L(n, "oncdata", n.cdata), L(n, "onclosecdata"), n.cdata = "", n.state = d.TEXT) : h === "]" ? n.cdata += "]" : (n.cdata += "]]" + h, n.state = d.CDATA);
              continue;
            case d.PROC_INST:
              h === "?" ? n.state = d.PROC_INST_ENDING : O(h) ? n.state = d.PROC_INST_BODY : n.procInstName += h;
              continue;
            case d.PROC_INST_BODY:
              if (!n.procInstBody && O(h))
                continue;
              h === "?" ? n.state = d.PROC_INST_ENDING : n.procInstBody += h;
              continue;
            case d.PROC_INST_ENDING:
              if (h === ">") {
                const J = {
                  name: n.procInstName,
                  body: n.procInstBody
                };
                Xt(n, J), L(n, "onprocessinginstruction", J), n.procInstName = n.procInstBody = "", n.state = d.TEXT;
              } else
                n.procInstBody += "?" + h, n.state = d.PROC_INST_BODY;
              continue;
            case d.OPEN_TAG:
              Y(j, h) ? n.tagName += h : (Yt(n), h === ">" ? oe(n) : h === "/" ? n.state = d.OPEN_TAG_SLASH : (O(h) || k(n, "Invalid character in tag name"), n.state = d.ATTRIB));
              continue;
            case d.OPEN_TAG_SLASH:
              h === ">" ? (oe(n, !0), Be(n)) : (k(
                n,
                "Forward-slash in opening tag not followed by >"
              ), n.state = d.ATTRIB);
              continue;
            case d.ATTRIB:
              if (O(h))
                continue;
              h === ">" ? oe(n) : h === "/" ? n.state = d.OPEN_TAG_SLASH : Y(F, h) ? (n.attribName = h, n.attribValue = "", n.state = d.ATTRIB_NAME) : k(n, "Invalid attribute name");
              continue;
            case d.ATTRIB_NAME:
              h === "=" ? n.state = d.ATTRIB_VALUE : h === ">" ? (k(n, "Attribute without value"), n.attribValue = n.attribName, Fe(n), oe(n)) : O(h) ? n.state = d.ATTRIB_NAME_SAW_WHITE : Y(j, h) ? n.attribName += h : k(n, "Invalid attribute name");
              continue;
            case d.ATTRIB_NAME_SAW_WHITE:
              if (h === "=")
                n.state = d.ATTRIB_VALUE;
              else {
                if (O(h))
                  continue;
                k(n, "Attribute without value"), n.tag.attributes[n.attribName] = "", n.attribValue = "", L(n, "onattribute", {
                  name: n.attribName,
                  value: ""
                }), n.attribName = "", h === ">" ? oe(n) : Y(F, h) ? (n.attribName = h, n.state = d.ATTRIB_NAME) : (k(n, "Invalid attribute name"), n.state = d.ATTRIB);
              }
              continue;
            case d.ATTRIB_VALUE:
              if (O(h))
                continue;
              X(h) ? (n.q = h, n.state = d.ATTRIB_VALUE_QUOTED) : (n.opt.unquotedAttributeValues || ne(n, "Unquoted attribute value"), n.state = d.ATTRIB_VALUE_UNQUOTED, n.attribValue = h);
              continue;
            case d.ATTRIB_VALUE_QUOTED:
              if (h !== n.q) {
                h === "&" ? n.state = d.ATTRIB_VALUE_ENTITY_Q : n.attribValue += h;
                continue;
              }
              Fe(n), n.q = "", n.state = d.ATTRIB_VALUE_CLOSED;
              continue;
            case d.ATTRIB_VALUE_CLOSED:
              O(h) ? n.state = d.ATTRIB : h === ">" ? oe(n) : h === "/" ? n.state = d.OPEN_TAG_SLASH : Y(F, h) ? (k(n, "No whitespace between attributes"), n.attribName = h, n.attribValue = "", n.state = d.ATTRIB_NAME) : k(n, "Invalid attribute name");
              continue;
            case d.ATTRIB_VALUE_UNQUOTED:
              if (!fe(h)) {
                h === "&" ? n.state = d.ATTRIB_VALUE_ENTITY_U : n.attribValue += h;
                continue;
              }
              Fe(n), h === ">" ? oe(n) : n.state = d.ATTRIB;
              continue;
            case d.CLOSE_TAG:
              if (n.tagName)
                h === ">" ? Be(n) : Y(j, h) ? n.tagName += h : n.script ? (n.script += "</" + n.tagName + h, n.tagName = "", n.state = d.SCRIPT) : (O(h) || k(n, "Invalid tagname in closing tag"), n.state = d.CLOSE_TAG_SAW_WHITE);
              else {
                if (O(h))
                  continue;
                le(F, h) ? n.script ? (n.script += "</" + h, n.state = d.SCRIPT) : k(n, "Invalid tagname in closing tag.") : n.tagName = h;
              }
              continue;
            case d.CLOSE_TAG_SAW_WHITE:
              if (O(h))
                continue;
              h === ">" ? Be(n) : k(n, "Invalid characters in closing tag");
              continue;
            case d.TEXT_ENTITY:
            case d.ATTRIB_VALUE_ENTITY_Q:
            case d.ATTRIB_VALUE_ENTITY_U:
              var M, q;
              switch (n.state) {
                case d.TEXT_ENTITY:
                  M = d.TEXT, q = "textNode";
                  break;
                case d.ATTRIB_VALUE_ENTITY_Q:
                  M = d.ATTRIB_VALUE_QUOTED, q = "attribValue";
                  break;
                case d.ATTRIB_VALUE_ENTITY_U:
                  M = d.ATTRIB_VALUE_UNQUOTED, q = "attribValue";
                  break;
              }
              if (h === ";") {
                var W = Kt(n);
                n.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(W) ? ((n.entityCount += 1) > n.opt.maxEntityCount && ne(
                  n,
                  "Parsed entity count exceeds max entity count"
                ), (n.entityDepth += 1) > n.opt.maxEntityDepth && ne(
                  n,
                  "Parsed entity depth exceeds max entity depth"
                ), n.entity = "", n.state = M, n.write(W), n.entityDepth -= 1) : (n[q] += W, n.entity = "", n.state = M);
              } else Y(n.entity.length ? $ : N, h) ? n.entity += h : (k(n, "Invalid character in entity name"), n[q] += "&" + n.entity + h, n.entity = "", n.state = M);
              continue;
            default:
              throw new Error(n, "Unknown state: " + n.state);
          }
        return n.position >= n.bufferCheckPosition && r(n), n;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var o = String.fromCharCode, n = Math.floor, f = function() {
          var h = 16384, I = [], B, M, q = -1, W = arguments.length;
          if (!W)
            return "";
          for (var J = ""; ++q < W; ) {
            var G = Number(arguments[q]);
            if (!isFinite(G) || // `NaN`, `+Infinity`, or `-Infinity`
            G < 0 || // not a valid Unicode code point
            G > 1114111 || // not a valid Unicode code point
            n(G) !== G)
              throw RangeError("Invalid code point: " + G);
            G <= 65535 ? I.push(G) : (G -= 65536, B = (G >> 10) + 55296, M = G % 1024 + 56320, I.push(B, M)), (q + 1 === W || I.length > h) && (J += o.apply(null, I), I.length = 0);
          }
          return J;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: f,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = f;
      })();
    })(_);
  })(Ge)), Ge;
}
var js = Us();
const Gs = /* @__PURE__ */ Ps(js), ot = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData", zs = 0, $s = 1, Ve = 2, qs = 3, Ws = 4, Xs = 0, Ys = 1, Te = 2, lt = 3, Ks = 4, Hs = 5, Vs = 6;
class ct {
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
    t = zs;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = Ve;
          break;
        case "mixed":
          t = qs;
          break;
        case "empty":
          t = $s;
          break;
        case "elementOnly":
          t = Ws;
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
    t = Xs;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = Ys;
          break;
        case "element":
          t = Te;
          break;
        case "attribute":
          t = lt;
          break;
        case "elementWildcard":
          t = Ks;
          break;
        case "attributeWildcard":
          t = Hs;
          break;
        case "group":
          t = Vs;
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
      if (this.getFeatureKind(r) !== Te)
        continue;
      const a = this.getName(r) ?? r.getName();
      if (a !== s)
        continue;
      const l = this.getNamespace(r);
      if (t && l && l === t || !t && !l || !l && a === s)
        return r;
    }
    return null;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "attribute".
   */
  getAttributeFeature(e, t, s) {
    for (const r of e.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(r) !== lt)
        continue;
      const a = this.getName(r) ?? r.getName();
      if (a !== s)
        continue;
      const l = this.getNamespace(r);
      if (t && l && l === t || !t && !l || !l && a === s)
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
    const s = e.getEAnnotation(ot);
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
    const t = e.getEAnnotation(ot);
    if (!t)
      return null;
    const s = t.getDetails();
    return s && typeof s.getByKey == "function" ? s.toMap() : null;
  }
}
const Zs = "FEATURE_NAME_MAP", Qs = "EXTENDED_META_DATA", We = 1, Xe = 2, ut = 3, Js = 4, _t = 5;
class er {
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
    this.noNamespacePackage = null, this.resource = null, this.xmlResource = null, this.resourceURI = null, this.packageRegistry = V.INSTANCE, this.packages = /* @__PURE__ */ new Map(), this.featuresToKinds = /* @__PURE__ */ new Map(), this.prefixesToURIs = /* @__PURE__ */ new Map(), this.urisToPrefixes = /* @__PURE__ */ new Map(), this.namespaceSupport = new er(), this.allPrefixToURI = [], this.featureNameMap = /* @__PURE__ */ new Map(), this.reverseFeatureNameMap = /* @__PURE__ */ new Map(), this.extendedMetaData = null, e && this.setResource(e);
  }
  setResource(e) {
    if (this.resource = e, this.xmlResource = e && "getID" in e ? e : null, e) {
      this.resourceURI = e.getURI();
      const t = e.getResourceSet();
      t ? this.packageRegistry = t.getPackageRegistry() : this.packageRegistry = V.INSTANCE;
    }
  }
  setOptions(e) {
    const t = e.get(Zs);
    if (t) {
      this.featureNameMap = new Map(t), this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
      for (const [r, i] of t)
        this.reverseFeatureNameMap.set(i, r);
    }
    const s = e.get(Qs);
    s instanceof ct ? this.extendedMetaData = s : s === !0 && (this.extendedMetaData = new ct());
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
    return t === void 0 && (this.computeFeatureKind(e), t = this.featuresToKinds.get(e)), t ?? _t;
  }
  computeFeatureKind(e) {
    const t = e.getEType();
    if (!("isContainment" in e && typeof e.isContainment == "function") && (!t || !("getESuperTypes" in t)))
      e.isMany() ? this.featuresToKinds.set(e, Xe) : this.featuresToKinds.set(e, We);
    else if (e.isMany())
      if ("getEOpposite" in e && typeof e.getEOpposite == "function") {
        const i = e.getEOpposite();
        !i || typeof i.isTransient != "function" || i.isTransient() || !i.isMany() ? this.featuresToKinds.set(e, ut) : this.featuresToKinds.set(e, Js);
      } else
        this.featuresToKinds.set(e, ut);
    else
      this.featuresToKinds.set(e, _t);
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
    const s = [], r = e.getObject(), i = e.getFeature(), a = e.getValues(), l = e.getPositions();
    for (let c = 0; c < a.length; c++) {
      const u = a[c], p = l[c];
      try {
        this.setValue(r, i, u, p);
      } catch (g) {
        s.push(g instanceof Error ? g : new Error(String(g)));
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
class Dt {
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
        const i = e.eProxyURI().toString(), a = i.indexOf("#");
        if (a > 0) {
          const l = C.createURI(i.substring(0, a)), c = i.substring(a + 1), u = s.getResource(l, !0);
          if (u) {
            const p = u.getEObject(c);
            if (p)
              return p;
          }
        } else if (a === 0) {
          const l = i.substring(1), c = t.getEObject(l);
          if (c)
            return c;
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
function ve(_, e) {
  let t = e;
  for (; t.startsWith("/"); )
    t = t.substring(1);
  if (!t)
    return null;
  const s = t.split("/");
  if (s.length === 1)
    return _.getEClassifier(s[0]);
  const r = s[s.length - 1];
  let i = _;
  for (let a = 0; a < s.length - 1; a++) {
    const l = s[a], c = i.getESubpackages();
    i = null;
    for (let u = 0; u < c.length; u++) {
      const p = c.get(u);
      if (p.getName() === l) {
        i = p;
        break;
      }
    }
    if (!i)
      return null;
  }
  return i.getEClassifier(r);
}
const Ee = "error", ce = "object", ht = "reference", ze = "xmiWrapper", dt = "deferredType";
class tr {
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
const ue = "http://www.w3.org/2001/XMLSchema-instance", Ye = "http://www.omg.org/XMI", gt = "xmlns", sr = "type", rr = "nil", ir = "schemaLocation", ft = "href", ar = "id";
class Pt {
  constructor(e, t, s) {
    this.elements = [], this.objects = [], this.types = [], this.prefixesToFactories = /* @__PURE__ */ new Map(), this.urisToLocations = /* @__PURE__ */ new Map(), this.forwardSingleReferences = [], this.sameDocumentProxies = [], this.attribs = null, this.text = null, this.isRoot = !0, this.isNamespaceAware = !1, this.needsPushContext = !1, this.deferredFeature = null, this.deferredParent = null, this.deferredExtent = null, this.resolve = !0, this.useNewMethods = !0, this.errors = [], this.lineNumber = 0, this.columnNumber = 0, this.resource = e, this.helper = t, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || V.INSTANCE, this.extent = e.getContents(), s && this.processOptions(s);
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
      this.objects.push(null), this.types.push(ze);
      return;
    }
    this.objects.length === 0 || this.objects.length === 1 && this.types[0] === ze ? this.createTopObject(t, s) : this.handleFeature(t, s);
  }
  /**
   * Handle end of element
   */
  endElement(e, t, s) {
    this.elements.pop();
    const r = this.types.pop();
    if (r === ce) {
      const i = this.objects.pop();
      if (this.text !== null && this.text.length > 0 && i) {
        const a = this.text.trim();
        if (a.length > 0) {
          const l = this.helper.getExtendedMetaData();
          if (l) {
            const c = i.eClass();
            if (l.getContentKind(c) === Ve) {
              const u = l.getSimpleContentFeature(c);
              u && this.setFeatureValue(i, u, a);
            }
          }
          this.handleProxy(i, a);
        }
      }
      this.text = null;
    } else if (r === Ee)
      this.objects.pop(), this.text = null;
    else if (r === ht)
      this.objects.pop(), this.text = null;
    else if (r === dt)
      this.objects.pop(), this.deferredParent = null, this.deferredFeature = null, this.text = null;
    else if (r === ze)
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
        if (t.startsWith(gt)) {
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
    const e = this.attribs.getValueByName(ue, ir);
    e && this.handleXSISchemaLocation(e);
  }
  handleXSISchemaLocation(e) {
    const t = e.trim().split(/\s+/);
    for (let s = 0; s + 1 < t.length; s += 2) {
      const r = t[s], i = t[s + 1];
      this.urisToLocations.set(r, C.createURI(i));
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
      const a = this.helper.getType(s, t);
      a && (i = this.helper.createObject(s, a));
    }
    i ? (this.processTopObject(i), this.handleObjectAttribs(i)) : (this.error(`Cannot create object for '${t}'`), this.processObject(null));
  }
  /**
   * Get xsi:type attribute value
   */
  getXSIType() {
    return this.attribs ? this.attribs.getValueByName(ue, sr) : null;
  }
  /**
   * Create object based on xsi:type
   */
  createObjectByType(e, t, s) {
    let r = e, i = t;
    const a = t.indexOf(":");
    a !== -1 && (r = t.substring(0, a), i = t.substring(a + 1));
    const l = this.getFactoryForPrefix(r);
    if (!l)
      return this.error(`Factory not found for type '${t}'`), null;
    const c = this.helper.getType(l, i);
    return c ? this.helper.createObject(l, c) : (this.error(`Type '${i}' not found`), null);
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
    this.objects.push(e), this.types.push(e ? ce : Ee);
  }
  /**
   * Handle object attributes
   */
  handleObjectAttribs(e) {
    if (this.attribs)
      for (let t = 0; t < this.attribs.getLength(); t++) {
        const s = this.attribs.getQName(t), r = this.attribs.getValue(t), i = this.attribs.getURI(t), a = this.attribs.getLocalName(t);
        if (!s.startsWith(gt) && i !== ue) {
          if (i === Ye) {
            a === ar && this.handleId(e, r);
            continue;
          }
          this.setAttribValue(e, a || s, r, i || null);
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
    const i = e.eClass(), a = this.helper.getFeature(i, r ?? null, t);
    a && this.setFeatureValue(e, a, s, -2);
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
      this.objects.push(null), this.types.push(Ee), this.error(`Feature '${t}' has no parent object`);
      return;
    }
    const r = s.eClass(), i = e && this.helper.getURI(e) || null, a = this.helper.getFeatureWithElement(r, i, t, !0);
    if (a) {
      const l = this.helper.getFeatureKind(a);
      l === We || l === Xe ? (this.objects.push(null), this.types.push(a), this.isNull() || (this.text = "")) : this.createObject(s, a);
    } else
      this.handleUnknownFeature(e, t, s);
  }
  /**
   * Check if xsi:nil="true"
   */
  isNull() {
    return this.attribs ? this.attribs.getValueByName(ue, rr) === "true" : !1;
  }
  /**
   * Create child object for reference
   */
  createObject(e, t) {
    const s = this.attribs?.getValueByQName(ft) || this.attribs?.getValueByName("", ft);
    if (s) {
      this.setValueFromId(e, t, s, -1), this.objects.push(null), this.types.push(ht);
      return;
    }
    const r = this.getXSIType();
    let i = null;
    if (r)
      i = this.createObjectByType("", r, !1);
    else {
      let a = t.getEType();
      if (a && !("getESuperTypes" in a) && typeof a.eIsProxy == "function" && a.eIsProxy()) {
        const l = a.eProxyURI();
        if (l) {
          const c = l.toString(), u = c.indexOf("#");
          if (u > 0) {
            const p = c.substring(0, u), g = c.substring(u + 1), m = this.packageRegistry.getEPackage(p);
            if (m) {
              const y = ve(m, g);
              y && (a = y, typeof t.setEType == "function" && t.setEType(y));
            }
          }
        }
      }
      if (a && "getESuperTypes" in a) {
        const l = a;
        if (l.isAbstract()) {
          this.deferredParent = e, this.deferredFeature = t, this.objects.push(null), this.types.push(dt);
          return;
        } else {
          const c = l.getEPackage()?.getEFactoryInstance();
          c && (i = c.create(l));
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
      const a = s.eClass(), l = i.getElementFeature(a, r, t);
      if (l) {
        const c = this.helper.getFeatureKind(l);
        c === We || c === Xe ? (this.objects.push(null), this.types.push(l), this.isNull() || (this.text = "")) : this.createObject(s, l);
        return;
      }
    }
    if (r) {
      const a = this.packageRegistry.getEPackage(r);
      if (a) {
        const l = a.getEClassifier(t);
        if (l && "getESuperTypes" in l) {
          const c = l, u = s.eClass();
          if (c === u) {
            this.handleObjectAttribs(s), this.objects.push(s), this.types.push(ce);
            return;
          }
          if (u.isSuperTypeOf(c) && !c.isAbstract()) {
            const p = c.getEPackage()?.getEFactoryInstance();
            if (p) {
              const g = p.create(c);
              for (const y of u.getEAllStructuralFeatures()) {
                if (y.isTransient() || y.isDerived())
                  continue;
                const S = s.eGet(y);
                if (S != null)
                  try {
                    g.eSet(y, S);
                  } catch {
                  }
              }
              this.replaceInParentContainment(s, g);
              const m = this.objects.length - 1;
              this.objects[m] = g, this.handleObjectAttribs(g), this.objects.push(g), this.types.push(ce);
              return;
            }
          }
        }
      }
    }
    this.objects.push(null), this.types.push(Ee), this.error(`Unknown feature '${t}' for type '${s.eClass().getName()}'`);
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
    for (const a of i.getEAllStructuralFeatures()) {
      if (!("isContainment" in a))
        continue;
      const l = a;
      if (l.isContainment()) {
        if (l.isMany()) {
          const c = r.eGet(l);
          if (c) {
            for (let u = c.length - 1; u >= 0; u--)
              if (c[u] === e) {
                c[u] = t;
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
    let a = null;
    if (i) {
      const l = this.packageRegistry.getEPackage(i);
      if (l) {
        const c = l.getEClassifier(t);
        if (c && "getESuperTypes" in c) {
          const u = c;
          if (!u.isAbstract()) {
            const p = u.getEPackage()?.getEFactoryInstance();
            p && (a = p.create(u));
          }
        }
      }
    }
    a ? (this.helper.setValue(s, r, a, -1), this.handleObjectAttribs(a), this.objects[this.objects.length - 1] = a, this.types[this.types.length - 1] = ce, this.objects.push(a), this.types.push(ce)) : (this.objects.push(null), this.types.push(Ee), this.error(`Cannot resolve type '${t}' for deferred containment`));
  }
  /**
   * Set feature value
   */
  setFeatureValue(e, t, s, r = -1) {
    if (s == null)
      return;
    if ("isContainment" in t)
      if (t.isMany()) {
        const a = s.trim().split(/\s+/);
        for (const l of a)
          l && this.setValueFromId(e, t, l, -1);
      } else
        this.setValueFromId(e, t, s, r);
    else {
      const l = t.getEType();
      let c = null;
      if (l && typeof l.getEPackage == "function")
        c = l.getEPackage()?.getEFactoryInstance() ?? null;
      else if (l && typeof l.eGet == "function" && typeof l.eClass == "function") {
        const u = l.eClass();
        if (u) {
          const p = u.getEStructuralFeature?.("ePackage");
          if (p) {
            const g = l.eGet(p);
            g?.getEFactoryInstance && (c = g.getEFactoryInstance());
          }
        }
      }
      try {
        if (c && l) {
          const u = c.createFromString(l, s);
          this.helper.setValue(e, t, u, r);
        } else
          this.helper.setValue(e, t, s, r);
      } catch (u) {
        const p = u instanceof Error ? u.message : String(u);
        this.error(`Invalid value for feature '${t.getName()}': ${p}`);
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
    const a = t.indexOf("#");
    if (a > 0) {
      const p = t.substring(0, a), g = t.substring(a + 1);
      if (r && !p.includes("://")) {
        const m = r.toString();
        if (p === m || m.endsWith(p) || m.endsWith("/" + p))
          s = C.createURI(m + "#" + g);
        else {
          const y = C.createURI(p).resolve(r);
          s = C.createURI(y.toString() + "#" + g);
        }
      } else
        s = C.createURI(t);
    } else a === 0 ? r ? s = C.createURI(r.toString() + t) : s = C.createURI(t) : (t.startsWith("/"), r ? s = C.createURI(r.toString() + "#" + t) : s = C.createURI("#" + t));
    const l = e.getEType(), c = l && "getESuperTypes" in l ? l : null, u = new Dt(s, c || void 0);
    return u.eSetResource(this.resource), u;
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
      const c = this.packageRegistry.getEPackage(r);
      if (c)
        return this.resolveFragmentInPackage(c, i);
      const u = this.resource.getContents();
      for (let g = 0; g < u.length; g++) {
        const m = u.get(g);
        if (m && typeof m.getNsURI == "function") {
          const y = m;
          if (y.getNsURI() === r)
            return this.resolveFragmentInPackage(y, i);
        }
      }
      const p = this.resource.getResourceSet();
      if (p) {
        const g = C.createURI(r), m = p.getResource(g, !0);
        if (m)
          return m.getEObject(i);
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
      let a = e;
      for (let u = 0; u < r.length - 2; u++) {
        const p = a.getESubpackages();
        let g = null;
        for (let m = 0; m < p.length; m++)
          if (p.get(m).getName() === r[u]) {
            g = p.get(m);
            break;
          }
        if (!g)
          return null;
        a = g;
      }
      const l = r[r.length - 2], c = a.getEClassifier(l);
      if (c && "getEStructuralFeature" in c) {
        const u = c.getEStructuralFeature(r[r.length - 1]);
        if (u)
          return u;
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
class Ft {
  constructor(e) {
    this.helper = e || new Oe();
  }
  /**
   * Load resource from string
   */
  load(e, t, s) {
    const r = s || /* @__PURE__ */ new Map(), i = this.makeDefaultHandler(e, r), a = Gs.parser(!0, {
      xmlns: !0,
      position: !0,
      trim: !1
    }), l = new tr();
    a.onprocessinginstruction = (u) => {
      u.name;
    }, a.onopentag = (u) => {
      l.clear();
      const p = u;
      for (const [g, m] of Object.entries(p.attributes)) {
        const y = m, S = y.prefix ? `${y.prefix}:${y.local}` : y.local;
        if (y.prefix === "xmlns" || y.name === "xmlns") {
          const R = y.prefix === "xmlns" ? y.local : "";
          i.startPrefixMapping(R, y.value);
        }
        l.add(S, y.local, y.uri, y.value);
      }
      i.lineNumber = a.line, i.columnNumber = a.column, i.startElement(p.uri, p.local, p.name, l);
    }, a.onclosetag = (u) => {
      const p = u.indexOf(":"), g = p >= 0 ? u.substring(p + 1) : u;
      i.endElement("", g, u);
    }, a.ontext = (u) => {
      u.trim() && i.characters(u);
    }, a.oncdata = (u) => {
      i.characters(u);
    }, a.onerror = (u) => {
      console.error("XML Parse Error:", u.message), i.error(u.message);
    }, a.write(t).close(), i.endDocument();
    const c = i.getErrors();
    if (c.length > 0 && e.getErrors) {
      const u = e.getErrors();
      for (const p of c) {
        const g = p.message.match(/\[Line\s*(\d+),?\s*Col\s*(\d+)\]\s*(.*)/i);
        g ? u.push({
          message: g[3] || p.message,
          line: parseInt(g[1], 10),
          column: parseInt(g[2], 10)
        }) : u.push({ message: p.message });
      }
    }
  }
  /**
   * Create the default handler for loading
   */
  makeDefaultHandler(e, t) {
    return new Pt(e, this.helper, t);
  }
}
class nr extends Ft {
  constructor(e) {
    super(e || new or());
  }
  makeDefaultHandler(e, t) {
    return new lr(e, this.helper, t);
  }
}
class or extends Oe {
}
class lr extends Pt {
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
function xe(_) {
  return _ != null && typeof _.getELiterals == "function" && typeof _.getEEnumLiteral == "function";
}
class Bt {
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
    this.output.push("<xmi:XMI"), this.output.push(` xmlns:xmi="${Ye}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${ue}"`);
    const s = /* @__PURE__ */ new Set();
    for (const r of t) {
      const i = r.getNsURI(), a = this.getPrefix(r);
      i && a && !s.has(a) && (this.output.push(` xmlns:${a}="${i}"`), this.declaredNamespaces.set(i, a), s.add(a));
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
    const s = e.eClass(), r = s.getEPackage(), i = r ? this.getPrefix(r) : "", a = s.getName() || "Object", l = i ? `${i}:${a}` : a;
    this.writeIndent(), this.output.push(`<${l}`), t && this.writeNamespaces(e), t || this.writeTypeAttribute(e), this.saveID(e), this.writeAttributes(e);
    const c = this.helper.getExtendedMetaData(), u = this.getSimpleContentText(e, c), p = this.hasElementContent(e);
    u !== null ? (this.output.push(`>${this.escapeXml(u)}`), p && (this.output.push(`
`), this.indent++, this.writeElements(e), this.indent--, this.writeIndent()), this.output.push(`</${l}>
`)) : p ? (this.output.push(`>
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
    this.output.push(` xmlns:xmi="${Ye}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${ue}"`);
    const s = /* @__PURE__ */ new Set();
    for (const i of t) {
      const a = i.getNsURI(), l = this.getPrefix(i);
      a && l && !s.has(l) && (this.output.push(` xmlns:${l}="${a}"`), this.declaredNamespaces.set(a, l), s.add(l));
    }
    const r = this.helper.getExtendedMetaData();
    r && this.collectEMDNamespaces(e, r, s);
  }
  /**
   * Collect and declare additional namespaces from EMD annotations.
   */
  collectEMDNamespaces(e, t, s) {
    const r = (i) => {
      const a = i.eClass();
      for (const l of a.getEAllStructuralFeatures()) {
        const c = t.getNamespace(l);
        if (c && !this.declaredNamespaces.has(c) && c !== "http://www.w3.org/XML/1998/namespace") {
          const u = this.generatePrefix(c, s);
          u && (this.output.push(` xmlns:${u}="${c}"`), this.declaredNamespaces.set(c, u), s.add(u));
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
      const a = `${r}${i}`;
      if (!t.has(a))
        return a;
    }
    return null;
  }
  /**
   * Collect all packages used by object tree
   */
  collectPackages(e) {
    const t = /* @__PURE__ */ new Set(), s = (r) => {
      const a = r.eClass().getEPackage();
      a && t.add(a);
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
          if (s && s.getFeatureKind(r) === Te)
            continue;
          const i = r;
          let a = e.eGet(i);
          if (a != null && (a = this.resolveValue(a, e), a != null)) {
            let l = null;
            try {
              l = i.getDefaultValue();
            } catch {
            }
            if (a !== l) {
              const c = this.convertToString(i, a), u = this.getSerializedAttributeName(i, s);
              this.output.push(` ${u}="${this.escapeXml(c)}"`);
            }
          }
        } else if ("isContainment" in r) {
          const i = r;
          if (!i.isContainment()) {
            let a = e.eGet(i);
            if (a != null) {
              const l = this.helper.getSerializedFeatureName(i);
              if (r.isMany()) {
                if (Array.isArray(a) || z(a)) {
                  const c = [];
                  for (const u of a) {
                    const p = this.resolveValue(u, e);
                    if (p == null || typeof p == "string")
                      continue;
                    const g = p.eResource?.();
                    if (g && g === this.resource) {
                      const m = this.getHref(p);
                      m && c.push(m);
                    }
                  }
                  c.length > 0 && this.output.push(` ${l}="${this.escapeXml(c.join(" "))}"`);
                }
              } else if (a = this.resolveValue(a, e), a != null)
                if (typeof a == "string")
                  this.output.push(` ${l}="${this.escapeXml(a)}"`);
                else if (typeof a == "boolean")
                  this.output.push(` ${l}="${a ? "true" : "false"}"`);
                else if (typeof a == "number")
                  this.output.push(` ${l}="${String(a)}"`);
                else {
                  const c = this.getTypePrefixedHref(i, a);
                  c && this.output.push(` ${l}="${this.escapeXml(c)}"`);
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
    if (re(e) && e.eIsProxy()) {
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
        const i = r.getEPackage?.(), a = r.getName?.(), l = e.getName?.();
        if (i && a && l) {
          const c = i.getNsURI?.();
          if (c)
            return `${c}#//${a}/${l}`;
        }
      }
    }
    if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const r = e.getEPackage();
      if (r) {
        const i = r.getNsURI?.(), a = e.getName?.();
        if (i && a)
          return `${i}#//${a}`;
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
      const a = e.getName?.(), l = i.getName?.();
      if (!a || !l)
        return null;
      t.push(l, a), s = i.getEPackage?.() ?? null;
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
      const a = s.getName?.();
      a && t.unshift(a), s = i;
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
    const i = e.getEType(), a = t.eClass();
    if (i && a && a !== i && "isAbstract" in i && i.isAbstract()) {
      const l = a.getEPackage();
      if (l) {
        const c = this.getPrefix(l), u = a.getName();
        if (c && u)
          return `${c}:${u} ${s}`;
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
        if (i.isTransient() || i.isDerived() || !this.isAttribute(i) || r.getFeatureKind(i) !== Te)
          continue;
        const a = e.eGet(i);
        if (a != null)
          return !0;
      }
    for (const i of s)
      if ("isContainment" in i) {
        const a = i;
        if (i.isTransient())
          continue;
        const l = e.eGet(a);
        if (l == null)
          continue;
        if (a.isContainment()) {
          if ((Array.isArray(l) || z(l)) && l.length > 0 || !Array.isArray(l) && !z(l))
            return !0;
        } else if (i.isMany() && (Array.isArray(l) || z(l)) && l.length > 0)
          for (const c of l) {
            const u = c.eResource?.();
            if (!u || u !== this.resource)
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
        if (r.isTransient() || r.isDerived() || !this.isAttribute(r) || s.getFeatureKind(r) !== Te)
          continue;
        const a = e.eGet(r);
        if (a == null)
          continue;
        const l = this.getSerializedElementName(r, s), c = r;
        if (r.isMany() && (Array.isArray(a) || z(a))) {
          for (const u of a)
            if (u != null) {
              this.writeIndent();
              const p = this.convertSingleValueToString(c, u);
              this.output.push(`<${l}>${this.escapeXml(p)}</${l}>
`);
            }
        } else {
          this.writeIndent();
          const u = this.convertToString(c, a);
          this.output.push(`<${l}>${this.escapeXml(u)}</${l}>
`);
        }
      }
    for (const r of t.getEAllStructuralFeatures())
      if ("isContainment" in r) {
        const i = r;
        if (r.isTransient())
          continue;
        const a = e.eGet(i);
        if (a == null)
          continue;
        if (i.isContainment())
          if (Array.isArray(a) || z(a))
            for (const l of a)
              this.writeElement(i, l);
          else
            this.writeElement(i, a);
        else if (r.isMany() && (Array.isArray(a) || z(a)) && a.length > 0)
          for (const l of a) {
            const c = this.resolveValue(l, e);
            if (c == null)
              continue;
            const u = typeof c != "string" ? c.eResource?.() : null;
            if (u && u === this.resource)
              continue;
            const p = typeof c == "string" ? c : this.getHref(c);
            p && (this.writeIndent(), this.output.push(`<${this.helper.getSerializedFeatureName(i)} href="${this.escapeXml(p)}"/>
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
    const i = e.getEType(), a = t.eClass();
    if (i && a && a !== i) {
      const u = a.getEPackage(), p = u ? this.getPrefix(u) : "", g = p ? `${p}:${a.getName()}` : a.getName();
      this.output.push(` xsi:type="${g}"`);
    }
    this.saveID(t), this.writeAttributes(t);
    const l = this.getSimpleContentText(t, s), c = this.hasElementContent(t);
    l !== null ? (this.output.push(`>${this.escapeXml(l)}`), c && (this.output.push(`
`), this.indent++, this.writeElements(t), this.indent--, this.writeIndent()), this.output.push(`</${r}>
`)) : c ? (this.output.push(`>
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
    if (re(e) && e.eIsProxy()) {
      if ("eResolveProxy" in t && typeof t.eResolveProxy == "function") {
        const r = t.eResolveProxy(e);
        if (r !== e && !(re(r) && r.eIsProxy()))
          return r;
      }
      const s = e.eProxyURI();
      if (s && this.resource) {
        const r = this.resource.getResourceSet();
        if (r) {
          const i = s.toString(), a = i.indexOf("#");
          if (a >= 0) {
            const l = i.substring(a + 1);
            let c = this.resource;
            if (a > 0) {
              const u = C.createURI(i.substring(0, a));
              c = r.getResource(u, !0) || this.resource;
            }
            if (c) {
              const u = c.getEObject(l);
              if (u)
                return u;
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
    if (Array.isArray(t) || z(t)) {
      const r = [];
      for (const i of t)
        i != null && r.push(this.convertSingleValueToString(e, i));
      return r.join(" ");
    }
    if (xe(e.getEType()))
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
    if (!xe(e.getEType())) {
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
        const a = i.getEFactoryInstance();
        if (a)
          return a.convertToString(r, t);
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
    if (t.getContentKind(s) !== Ve)
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
class cr extends Bt {
  constructor(e) {
    super(e), this.idAttributeName = "xmi:id";
  }
  writeNamespaces(e) {
    super.writeNamespaces(e);
  }
}
class Lt extends Ot {
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
        const i = await s.createInputStream(r), a = await _r(i);
        this.loadFromString(a, e);
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
    return new Ft(this.xmlHelper);
  }
  /**
   * Create the XML saver
   */
  createXMLSave() {
    return new Bt(this.xmlHelper);
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
class ur extends Lt {
  createXMLLoad() {
    return new nr(this.xmlHelper);
  }
  createXMLSave() {
    return new cr(this.xmlHelper);
  }
}
async function _r(_) {
  const e = _.getReader(), t = new TextDecoder();
  let s = "";
  for (; ; ) {
    const { done: r, value: i } = await e.read();
    if (r)
      break;
    s += t.decode(i, { stream: !0 });
  }
  return s += t.decode(), s;
}
class hr {
  createResource(e) {
    return new Lt(e);
  }
}
class Mt {
  createResource(e) {
    return new ur(e);
  }
}
const ge = Ae.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
ge.has("xml") || ge.set("xml", new hr());
ge.has("xmi") || ge.set("xmi", new Mt());
ge.has("ecore") || ge.set("ecore", new Mt());
class dr {
  constructor() {
    this.forwardReferences = [], this.errors = [];
  }
  /**
   * Load a JSON string into the resource.
   */
  load(e, t, s) {
    this.resource = e, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || V.INSTANCE, this.forwardReferences = [], this.errors = [];
    let r;
    try {
      r = JSON.parse(t);
    } catch (i) {
      this.error(`Invalid JSON: ${i instanceof Error ? i.message : String(i)}`);
      return;
    }
    if (Array.isArray(r))
      for (const i of r) {
        const a = this.loadObject(i);
        a && e.getContents().push(a);
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
    const a = r.getEFactoryInstance().create(s);
    for (const [l, c] of Object.entries(e)) {
      if (l === "eClass" || c == null)
        continue;
      const u = s.getEStructuralFeature(l);
      if (!u) {
        this.error(`Unknown feature '${l}' for type '${s.getName()}'`);
        continue;
      }
      if (this.isAttribute(u))
        this.loadAttribute(a, u, c);
      else {
        const p = u;
        p.isContainment() ? this.loadContainment(a, p, c) : this.loadCrossReference(a, p, c);
      }
    }
    return a;
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
    const a = i.getEClassifier(r);
    return a ? "getESuperTypes" in a ? a : (this.error(`'${r}' is not an EClass`), null) : (this.error(`Classifier '${r}' not found in package '${s}'`), null);
  }
  /**
   * Load an attribute value.
   */
  loadAttribute(e, t, s) {
    if (t.isMany()) {
      const r = Array.isArray(s) ? s : [s], i = e.eGet(t);
      if (i && (Array.isArray(i) || z(i)))
        for (const a of r)
          i.push(this.convertAttributeValue(t, a));
      else
        e.eSet(t, r.map((a) => this.convertAttributeValue(t, a)));
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
      const i = Array.isArray(s) ? s : [s], a = e.eGet(t);
      for (const l of i)
        if (l && typeof l == "object") {
          const c = this.loadObject(l, r);
          c && a && (Array.isArray(a) || z(a)) && a.push(c);
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
      r && (Array.isArray(r) || z(r)) && r.push(s);
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
      const a = this.packageRegistry.getEPackage(s);
      if (a)
        return this.resolveFragmentInPackage(a, r);
      const l = this.resource.getResourceSet();
      if (l) {
        const c = C.createURI(s), u = l.getResource(c, !0);
        if (u)
          return u.getEObject(r);
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
      let a = e;
      for (let u = 0; u < r.length - 2; u++) {
        const p = a.getESubpackages();
        let g = null;
        for (let m = 0; m < p.length; m++)
          if (p.get(m).getName() === r[u]) {
            g = p.get(m);
            break;
          }
        if (!g)
          return null;
        a = g;
      }
      const l = r[r.length - 2], c = a.getEClassifier(l);
      if (c && "getEStructuralFeature" in c) {
        const u = c.getEStructuralFeature(r[r.length - 1]);
        if (u)
          return u;
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
      s = C.createURI(t);
    else if (r === 0) {
      const c = this.resource.getURI();
      c ? s = C.createURI(c.toString() + t) : s = C.createURI(t);
    } else {
      const c = this.resource.getURI();
      c ? s = C.createURI(c.toString() + "#" + t) : s = C.createURI("#" + t);
    }
    const i = e.getEType(), a = i && "getESuperTypes" in i ? i : null, l = new Dt(s, a || void 0);
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
const pt = "SERIALIZE_TYPE", mt = "INDENT", gr = "always", fr = "polymorphic";
class pr {
  constructor() {
    this.serializeType = fr, this.indent = 2;
  }
  /**
   * Serialize resource contents to JSON string.
   */
  save(e, t) {
    this.resource = e, t && (t.has(pt) && (this.serializeType = t.get(pt)), t.has(mt) && (this.indent = t.get(mt)));
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
    for (const a of i.getEAllStructuralFeatures()) {
      if (a.isTransient() || a.isDerived())
        continue;
      const l = e.eGet(a);
      if (l != null)
        if (this.isAttribute(a))
          this.saveAttribute(r, e, a, l);
        else {
          const c = a;
          c.isContainment() ? this.saveContainment(r, e, c, l) : this.saveCrossReference(r, e, c, l);
        }
    }
    return r;
  }
  /**
   * Serialize an attribute value.
   */
  saveAttribute(e, t, s, r) {
    try {
      const a = s.getDefaultValue();
      if (r === a)
        return;
    } catch {
    }
    const i = s.getName();
    if (s.isMany()) {
      const a = Array.isArray(r) || z(r) ? [...r] : [r];
      if (a.length === 0)
        return;
      e[i] = a.map((l) => this.convertAttributeValue(s, l));
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
      const a = Array.isArray(r) || z(r) ? [...r] : [r];
      if (a.length === 0)
        return;
      e[i] = a.map((l) => this.saveContainedChild(l, s));
    } else
      e[i] = this.saveContainedChild(r, s);
  }
  /**
   * Serialize a single contained child. Proxies become `{ "$ref": "..." }`.
   */
  saveContainedChild(e, t) {
    if (re(e) && e.eIsProxy()) {
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
      const a = Array.isArray(r) || z(r) ? [...r] : [r];
      if (a.length === 0)
        return;
      const l = [];
      for (const c of a) {
        const u = this.getHref(c);
        u && l.push({ $ref: u });
      }
      l.length > 0 && (e[i] = l);
    } else {
      const a = this.getHref(r);
      a && (e[i] = { $ref: a });
    }
  }
  /**
   * Determine whether the eClass type URI should be written.
   */
  shouldSaveType(e, t, s = !1) {
    if (this.serializeType === gr || s)
      return !0;
    if (t && "isContainment" in t) {
      const i = t.getEType(), a = e.eClass();
      return !!(i && a && i !== a);
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
    if (re(e) && e.eIsProxy())
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
        const r = s.getEPackage?.(), i = s.getName?.(), a = e.getName?.();
        if (r && i && a) {
          const l = r.getNsURI?.();
          if (l)
            return `${l}#//${i}/${a}`;
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
class mr extends Ot {
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
      const a = this.getErrors();
      for (const l of i)
        a.push({ message: l.message });
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
    return new dr();
  }
  /**
   * Create the JSON saver.
   */
  createJSONSave() {
    return new pr();
  }
  /**
   * Unload resource.
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class yr {
  createResource(e) {
    return new mr(e);
  }
}
const yt = Ae.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
yt.has("json") || yt.set("json", new yr());
class Er {
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
const D = new Er();
class A extends K {
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
      const e = this, t = new bs(this, () => {
        if (D.isRegistered())
          try {
            const s = D.getEClassClass();
            if (s !== e && s instanceof A && s._eStructuralFeatures !== null)
              return s.getEStructuralFeature("eStructuralFeatures");
          } catch {
          }
        return null;
      }, (s, r) => {
        "setEContainingClass" in s && s.setEContainingClass(r), r && "setFeatureID" in s && s.setFeatureID(this.featureID++);
      });
      this._eStructuralFeatures = ie(t);
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
        if (r instanceof A) {
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
    return D.getEClassClass();
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
class br {
  constructor() {
    this.convertersByClassName = /* @__PURE__ */ new Map(), this.convertersByName = /* @__PURE__ */ new Map(), this.registerDefaultConverters();
  }
  /**
   * Register default converters for standard EMF types
   */
  registerDefaultConverters() {
    const e = {
      fromString: (g) => g.toLowerCase() === "true",
      toString: (g) => String(g)
    };
    this.registerByClassName("boolean", e), this.registerByClassName("java.lang.Boolean", e), this.registerByName("EBoolean", e), this.registerByName("EBooleanObject", e);
    const t = {
      fromString: (g) => parseInt(g, 10),
      toString: (g) => String(g)
    };
    this.registerByClassName("int", t), this.registerByClassName("java.lang.Integer", t), this.registerByClassName("short", t), this.registerByClassName("java.lang.Short", t), this.registerByClassName("byte", t), this.registerByClassName("java.lang.Byte", t), this.registerByName("EInt", t), this.registerByName("EIntegerObject", t), this.registerByName("EShort", t), this.registerByName("EShortObject", t), this.registerByName("EByte", t), this.registerByName("EByteObject", t);
    const s = {
      fromString: (g) => {
        const m = parseInt(g, 10);
        return Math.abs(m) > Number.MAX_SAFE_INTEGER ? BigInt(g) : m;
      },
      toString: (g) => String(g)
    };
    this.registerByClassName("long", s), this.registerByClassName("java.lang.Long", s), this.registerByName("ELong", s), this.registerByName("ELongObject", s);
    const r = {
      fromString: (g) => parseFloat(g),
      toString: (g) => String(g)
    };
    this.registerByClassName("float", r), this.registerByClassName("java.lang.Float", r), this.registerByClassName("double", r), this.registerByClassName("java.lang.Double", r), this.registerByName("EFloat", r), this.registerByName("EFloatObject", r), this.registerByName("EDouble", r), this.registerByName("EDoubleObject", r);
    const i = {
      fromString: (g) => g,
      toString: (g) => g ?? ""
    };
    this.registerByClassName("java.lang.String", i), this.registerByClassName("java.lang.Object", i), this.registerByName("EString", i);
    const a = {
      fromString: (g) => g.charAt(0) || "",
      toString: (g) => g ?? ""
    };
    this.registerByClassName("char", a), this.registerByClassName("java.lang.Character", a), this.registerByName("EChar", a), this.registerByName("ECharacterObject", a);
    const l = {
      fromString: (g) => new Date(g),
      toString: (g) => g?.toISOString() ?? ""
    };
    this.registerByClassName("java.util.Date", l), this.registerByName("EDate", l);
    const c = {
      fromString: (g) => g,
      // Keep as string to preserve precision
      toString: (g) => g ?? "0"
    };
    this.registerByClassName("java.math.BigDecimal", c), this.registerByClassName("java.math.BigInteger", c), this.registerByName("EBigDecimal", c), this.registerByName("EBigInteger", c);
    const u = {
      fromString: (g) => {
        if (typeof atob == "function") {
          const m = atob(g), y = new Uint8Array(m.length);
          for (let S = 0; S < m.length; S++)
            y[S] = m.charCodeAt(S);
          return y;
        }
        return new Uint8Array(Buffer.from(g, "base64"));
      },
      toString: (g) => typeof btoa == "function" ? btoa(String.fromCharCode(...g)) : Buffer.from(g).toString("base64")
    };
    this.registerByClassName("byte[]", u), this.registerByName("EByteArray", u);
    const p = {
      fromString: (g) => g,
      toString: (g) => String(g ?? "")
    };
    this.registerByName("EFeatureMapEntry", p);
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
    if (xe(e)) {
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
    if (xe(e)) {
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
const E = new br();
class De {
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
    return new Rt(e);
  }
  createFromString(e, t) {
    return E.createFromString(e, t);
  }
  convertToString(e, t) {
    return E.convertToString(e, t);
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
    return D.getEFactoryClass();
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
class Cr extends ae {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eClassifiers feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && D.isRegistered()) {
      const t = D.getEPackageClass();
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
class Nr extends ae {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eSubpackages feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && D.isRegistered()) {
      const e = D.getEPackageClass();
      this.feature = e.getEStructuralFeature("eSubpackages");
    }
    return this.feature;
  }
  didAdd(e, t) {
    t instanceof Q && (t.eSuperPackage = this.pkg), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      s instanceof Q && (s.eSuperPackage = this.pkg);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    t instanceof Q && (t.eSuperPackage = null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      t instanceof Q && (t.eSuperPackage = null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    s instanceof Q && (s.eSuperPackage = null), t instanceof Q && (t.eSuperPackage = this.pkg), super.didSet(e, t, s);
  }
}
class Q extends K {
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
      const e = new De();
      e.setEPackage(this), this.eFactoryInstance = e;
    }
    return this.eFactoryInstance;
  }
  setEFactoryInstance(e) {
    this.eFactoryInstance = e;
  }
  getEClassifiers() {
    return this._eClassifiers || (this._eClassifiers = ie(new Cr(this))), this._eClassifiers;
  }
  getESubpackages() {
    return this._eSubpackages || (this._eSubpackages = ie(new Nr(this))), this._eSubpackages;
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
    return D.getEPackageClass();
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
class Ut extends K {
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
    if (this.eType && re(this.eType) && this.eType.eIsProxy()) {
      const e = this.eType, t = e.eProxyURI();
      if (t) {
        const s = this.eResolveProxy(e);
        if (s !== e)
          return this.eType = s, this.eType;
        const r = t.toString(), i = r.indexOf("#");
        if (i > 0) {
          const a = r.substring(0, i), l = r.substring(i + 1), c = [V.INSTANCE];
          let u = this.eResource()?.getResourceSet();
          if (!u) {
            let p = this.eContainingClass;
            for (; p; ) {
              if (typeof p.eResource == "function") {
                const g = p.eResource();
                if (g) {
                  u = g.getResourceSet();
                  break;
                }
              }
              p = p.getEPackage?.() ?? p.getESuperPackage?.() ?? p.eContainer?.();
            }
          }
          u && c.push(u.getPackageRegistry());
          for (const p of c) {
            const g = p.getEPackage(a);
            if (g) {
              const R = ve(g, l);
              if (R)
                return this.eType = R, this.eType;
            }
            let m = a;
            const y = m.lastIndexOf("/");
            y >= 0 && (m = m.substring(y + 1));
            const S = m.indexOf(".");
            if (S > 0 && (m = m.substring(0, S)), m)
              for (const R of p.keys()) {
                const U = p.getEPackage(R);
                if (U && U.getName() === m) {
                  const F = ve(U, l);
                  if (F)
                    return this.eType = F, this.eType;
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
    return D.getEStructuralFeatureClass();
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
class T extends Ut {
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
    return D.getEAttributeClass();
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
class P extends Ut {
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
    return D.getEReferenceClass();
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
    return D.getEDataTypeClass();
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
  const _ = new x();
  return _.setName("EString"), _.setInstanceClassName("java.lang.String"), _;
})();
(() => {
  const _ = new x();
  return _.setName("EInt"), _.setInstanceClassName("int"), _;
})();
(() => {
  const _ = new x();
  return _.setName("EBoolean"), _.setInstanceClassName("boolean"), _;
})();
(() => {
  const _ = new x();
  return _.setName("EFloat"), _.setInstanceClassName("float"), _;
})();
(() => {
  const _ = new x();
  return _.setName("EDouble"), _.setInstanceClassName("double"), _;
})();
(() => {
  const _ = new x();
  return _.setName("ELong"), _.setInstanceClassName("long"), _;
})();
(() => {
  const _ = new x();
  return _.setName("EDate"), _.setInstanceClassName("java.util.Date"), _;
})();
class Tr extends K {
  constructor() {
    super(...arguments), this.source = null, this._detailsMap = null, this.eModelElement = null, this.contents = [], this.references = [];
  }
  getOrCreateDetailsMap() {
    if (!this._detailsMap) {
      const t = D.getEAnnotationClass().getEStructuralFeature("details"), s = D.getEStringToStringMapEntryClass();
      this._detailsMap = Os(this, t, s);
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
    return D.getEAnnotationClass();
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
          for (const [i, a] of t)
            r.putByKey(i, a);
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
class jt extends K {
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
    return D.getEEnumLiteralClass();
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
class vr extends x {
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
    return D.getEEnumClass();
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
            r instanceof jt && r.setEEnum(this);
        }
        super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class wr extends K {
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
      const i = t[r].getEType(), a = s[r].getEType();
      if (i !== a)
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
    return D.getEOperationClass();
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
    return D.getEParameterClass();
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
class Ir extends K {
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
    return this.eUpperBound ? this.eUpperBound.getERawType() : D.getEObjectClass();
  }
  eClass() {
    return D.getEGenericTypeClass();
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
class kr extends K {
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
    return D.getETypeParameterClass();
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
let be = null;
function xr() {
  return be || (be = new Or(), be.initialize(), V.INSTANCE.set(zt, be)), be;
}
const Rr = [
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
class Or extends Q {
  constructor() {
    super(), this._dataTypes = /* @__PURE__ */ new Map(), this._initialized = !1, this.setName("type"), this.setNsURI(zt), this.setNsPrefix(Ar);
  }
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0;
    for (const [t, s] of Rr) {
      const r = new x();
      r.setName(t), r.setInstanceClassName(s), this.getEClassifiers().push(r), this._dataTypes.set(t, r);
    }
    for (const t of this.getEClassifiers())
      "setEPackage" in t && t.setEPackage(this);
    const e = new Dr(this);
    this.setEFactoryInstance(e), this.registerConverters();
  }
  registerConverters() {
    const e = { fromString: (l) => l.toLowerCase() === "true" || l === "1", toString: (l) => String(l) };
    E.registerByName("Boolean", e), E.registerByName("BooleanObject", e);
    const t = { fromString: (l) => parseInt(l, 10), toString: (l) => String(l) };
    E.registerByName("Int", t), E.registerByName("IntObject", t), E.registerByName("Short", t), E.registerByName("ShortObject", t), E.registerByName("Byte", t), E.registerByName("ByteObject", t), E.registerByName("UnsignedByte", t), E.registerByName("UnsignedByteObject", t), E.registerByName("UnsignedShort", t), E.registerByName("UnsignedShortObject", t), E.registerByName("UnsignedInt", t), E.registerByName("UnsignedIntObject", t);
    const s = {
      fromString: (l) => {
        const c = parseInt(l, 10);
        return Math.abs(c) > Number.MAX_SAFE_INTEGER ? BigInt(l) : c;
      },
      toString: (l) => String(l)
    };
    E.registerByName("Long", s), E.registerByName("LongObject", s);
    const r = { fromString: (l) => parseFloat(l), toString: (l) => String(l) };
    E.registerByName("Float", r), E.registerByName("FloatObject", r), E.registerByName("Double", r), E.registerByName("DoubleObject", r);
    const i = { fromString: (l) => l, toString: (l) => l ?? "0" };
    E.registerByName("Decimal", i), E.registerByName("Integer", i), E.registerByName("NonNegativeInteger", i), E.registerByName("NonPositiveInteger", i), E.registerByName("NegativeInteger", i), E.registerByName("PositiveInteger", i), E.registerByName("UnsignedLong", i);
    const a = { fromString: (l) => l, toString: (l) => l ?? "" };
    E.registerByName("String", a), E.registerByName("AnySimpleType", a), E.registerByName("AnyURI", a), E.registerByName("NormalizedString", a), E.registerByName("Token", a), E.registerByName("Name", a), E.registerByName("NCName", a), E.registerByName("Language", a), E.registerByName("ID", a), E.registerByName("IDREF", a), E.registerByName("ENTITY", a), E.registerByName("NMTOKEN", a), E.registerByName("Date", a), E.registerByName("DateTime", a), E.registerByName("Time", a), E.registerByName("Duration", a), E.registerByName("GDay", a), E.registerByName("GMonth", a), E.registerByName("GMonthDay", a), E.registerByName("GYear", a), E.registerByName("GYearMonth", a), E.registerByName("QName", a), E.registerByName("NOTATION", a);
  }
  getDataType(e) {
    return this._dataTypes.get(e) ?? null;
  }
}
class Dr extends De {
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
const Gt = "http://www.eclipse.org/emf/2002/Ecore", Pr = "ecore", zt = "http://www.eclipse.org/emf/2003/XMLType";
let _e = null;
function H() {
  return _e || (_e = new Br(), _e.initialize(), Fr(), D.register(H)), _e;
}
function Fr() {
  _e && (V.INSTANCE.set(Gt, _e), xr());
}
class Br extends Q {
  constructor() {
    super(), this._initialized = !1, this.setName("ecore"), this.setNsURI(Gt), this.setNsPrefix(Pr);
  }
  /**
   * Initialize the package (called once)
   */
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0, this.createDataTypes(), this.createClasses(), this.createAttributes(), this.createReferences(), this.initializeClassifierPackages();
    const e = new Lr(this);
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
    this._eObjectClass = new A(), this._eObjectClass.setName("EObject"), this.getEClassifiers().push(this._eObjectClass), this._eModelElementClass = new A(), this._eModelElementClass.setName("EModelElement"), this._eModelElementClass.setAbstract(!0), this._eModelElementClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eModelElementClass), this._eNamedElementClass = new A(), this._eNamedElementClass.setName("ENamedElement"), this._eNamedElementClass.setAbstract(!0), this._eNamedElementClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eNamedElementClass), this._eTypedElementClass = new A(), this._eTypedElementClass.setName("ETypedElement"), this._eTypedElementClass.setAbstract(!0), this._eTypedElementClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypedElementClass), this._eClassifierClass = new A(), this._eClassifierClass.setName("EClassifier"), this._eClassifierClass.setAbstract(!0), this._eClassifierClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eClassifierClass), this._eClassClass = new A(), this._eClassClass.setName("EClass"), this._eClassClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eClassClass), this._eDataTypeClass = new A(), this._eDataTypeClass.setName("EDataType"), this._eDataTypeClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eDataTypeClass), this._eEnumClass = new A(), this._eEnumClass.setName("EEnum"), this._eEnumClass.getESuperTypes().push(this._eDataTypeClass), this.getEClassifiers().push(this._eEnumClass), this._eEnumLiteralClass = new A(), this._eEnumLiteralClass.setName("EEnumLiteral"), this._eEnumLiteralClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eEnumLiteralClass), this._ePackageClass = new A(), this._ePackageClass.setName("EPackage"), this._ePackageClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._ePackageClass), this._eFactoryClass = new A(), this._eFactoryClass.setName("EFactory"), this._eFactoryClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eFactoryClass), this._eStructuralFeatureClass = new A(), this._eStructuralFeatureClass.setName("EStructuralFeature"), this._eStructuralFeatureClass.setAbstract(!0), this._eStructuralFeatureClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eStructuralFeatureClass), this._eAttributeClass = new A(), this._eAttributeClass.setName("EAttribute"), this._eAttributeClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eAttributeClass), this._eReferenceClass = new A(), this._eReferenceClass.setName("EReference"), this._eReferenceClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eReferenceClass), this._eOperationClass = new A(), this._eOperationClass.setName("EOperation"), this._eOperationClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eOperationClass), this._eParameterClass = new A(), this._eParameterClass.setName("EParameter"), this._eParameterClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eParameterClass), this._eAnnotationClass = new A(), this._eAnnotationClass.setName("EAnnotation"), this._eAnnotationClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eAnnotationClass), this._eTypeParameterClass = new A(), this._eTypeParameterClass.setName("ETypeParameter"), this._eTypeParameterClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypeParameterClass), this._eGenericTypeClass = new A(), this._eGenericTypeClass.setName("EGenericType"), this._eGenericTypeClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eGenericTypeClass), this._eStringToStringMapEntryClass = new A(), this._eStringToStringMapEntryClass.setName("EStringToStringMapEntry"), this._eStringToStringMapEntryClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eStringToStringMapEntryClass);
  }
  createAttributes() {
    const e = new T();
    e.setName("name"), e.setEType(this._eStringDataType), this._eNamedElementClass.getEStructuralFeatures().push(e);
    const t = new T();
    t.setName("ordered"), t.setEType(this._eBooleanDataType), t.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new T();
    s.setName("unique"), s.setEType(this._eBooleanDataType), s.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(s);
    const r = new T();
    r.setName("lowerBound"), r.setEType(this._eIntDataType), r.setDefaultValueLiteral("0"), this._eTypedElementClass.getEStructuralFeatures().push(r);
    const i = new T();
    i.setName("upperBound"), i.setEType(this._eIntDataType), i.setDefaultValueLiteral("1"), this._eTypedElementClass.getEStructuralFeatures().push(i);
    const a = new T();
    a.setName("instanceClassName"), a.setEType(this._eStringDataType), this._eClassifierClass.getEStructuralFeatures().push(a);
    const l = new T();
    l.setName("abstract"), l.setEType(this._eBooleanDataType), l.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(l);
    const c = new T();
    c.setName("interface"), c.setEType(this._eBooleanDataType), c.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(c);
    const u = new T();
    u.setName("nsURI"), u.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(u);
    const p = new T();
    p.setName("nsPrefix"), p.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(p);
    const g = new T();
    g.setName("changeable"), g.setEType(this._eBooleanDataType), g.setDefaultValueLiteral("true"), this._eStructuralFeatureClass.getEStructuralFeatures().push(g);
    const m = new T();
    m.setName("volatile"), m.setEType(this._eBooleanDataType), m.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(m);
    const y = new T();
    y.setName("transient"), y.setEType(this._eBooleanDataType), y.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(y);
    const S = new T();
    S.setName("defaultValueLiteral"), S.setEType(this._eStringDataType), this._eStructuralFeatureClass.getEStructuralFeatures().push(S);
    const R = new T();
    R.setName("unsettable"), R.setEType(this._eBooleanDataType), R.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(R);
    const U = new T();
    U.setName("derived"), U.setEType(this._eBooleanDataType), U.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(U);
    const F = new T();
    F.setName("iD"), F.setEType(this._eBooleanDataType), F.setDefaultValueLiteral("false"), this._eAttributeClass.getEStructuralFeatures().push(F);
    const j = new T();
    j.setName("containment"), j.setEType(this._eBooleanDataType), j.setDefaultValueLiteral("false"), this._eReferenceClass.getEStructuralFeatures().push(j);
    const N = new T();
    N.setName("resolveProxies"), N.setEType(this._eBooleanDataType), N.setDefaultValueLiteral("true"), this._eReferenceClass.getEStructuralFeatures().push(N);
    const $ = new T();
    $.setName("value"), $.setEType(this._eIntDataType), $.setDefaultValueLiteral("0"), this._eEnumLiteralClass.getEStructuralFeatures().push($);
    const O = new T();
    O.setName("literal"), O.setEType(this._eStringDataType), this._eEnumLiteralClass.getEStructuralFeatures().push(O);
    const X = new T();
    X.setName("source"), X.setEType(this._eStringDataType), this._eAnnotationClass.getEStructuralFeatures().push(X);
    const fe = new T();
    fe.setName("key"), fe.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(fe);
    const Y = new T();
    Y.setName("value"), Y.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(Y);
    const le = new T();
    le.setName("serializable"), le.setEType(this._eBooleanDataType), le.setDefaultValueLiteral("true"), this._eDataTypeClass.getEStructuralFeatures().push(le);
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
    const i = new P();
    i.setName("eOperations"), i.setEType(this._eOperationClass), i.setContainment(!0), i.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(i);
    const a = new P();
    a.setName("eClassifiers"), a.setEType(this._eClassifierClass), a.setContainment(!0), a.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(a);
    const l = new P();
    l.setName("eSubpackages"), l.setEType(this._ePackageClass), l.setContainment(!0), l.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(l);
    const c = new P();
    c.setName("eFactoryInstance"), c.setEType(this._eFactoryClass), this._ePackageClass.getEStructuralFeatures().push(c);
    const u = new P();
    u.setName("eLiterals"), u.setEType(this._eEnumLiteralClass), u.setContainment(!0), u.setUpperBound(-1), this._eEnumClass.getEStructuralFeatures().push(u);
    const p = new P();
    p.setName("eOpposite"), p.setEType(this._eReferenceClass), this._eReferenceClass.getEStructuralFeatures().push(p);
    const g = new P();
    g.setName("eParameters"), g.setEType(this._eParameterClass), g.setContainment(!0), g.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(g);
    const m = new P();
    m.setName("details"), m.setEType(this._eStringToStringMapEntryClass), m.setContainment(!0), m.setUpperBound(-1), this._eAnnotationClass.getEStructuralFeatures().push(m);
    const y = new P();
    y.setName("eGenericType"), y.setEType(this._eGenericTypeClass), y.setContainment(!0), this._eTypedElementClass.getEStructuralFeatures().push(y);
    const S = new P();
    S.setName("eTypeParameters"), S.setEType(this._eTypeParameterClass), S.setContainment(!0), S.setUpperBound(-1), this._eClassifierClass.getEStructuralFeatures().push(S);
    const R = new P();
    R.setName("eGenericSuperTypes"), R.setEType(this._eGenericTypeClass), R.setContainment(!0), R.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(R);
    const U = new P();
    U.setName("eTypeParameters"), U.setEType(this._eTypeParameterClass), U.setContainment(!0), U.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(U);
    const F = new P();
    F.setName("eBounds"), F.setEType(this._eGenericTypeClass), F.setContainment(!0), F.setUpperBound(-1), this._eTypeParameterClass.getEStructuralFeatures().push(F);
    const j = new P();
    j.setName("eClassifier"), j.setEType(this._eClassifierClass), this._eGenericTypeClass.getEStructuralFeatures().push(j);
    const N = new P();
    N.setName("eTypeParameter"), N.setEType(this._eTypeParameterClass), this._eGenericTypeClass.getEStructuralFeatures().push(N);
    const $ = new P();
    $.setName("eTypeArguments"), $.setEType(this._eGenericTypeClass), $.setContainment(!0), $.setUpperBound(-1), this._eGenericTypeClass.getEStructuralFeatures().push($);
    const O = new P();
    O.setName("eUpperBound"), O.setEType(this._eGenericTypeClass), O.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(O);
    const X = new P();
    X.setName("eLowerBound"), X.setEType(this._eGenericTypeClass), X.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(X);
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
class Lr extends De {
  constructor(e) {
    super(), this._ePackage = e;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(e) {
    switch (e.getName()) {
      case "EClass":
        return new A();
      case "EAttribute":
        return new T();
      case "EReference":
        return new P();
      case "EDataType":
        return new x();
      case "EEnum":
        return new vr();
      case "EEnumLiteral":
        return new jt();
      case "EAnnotation":
        return new Tr();
      case "EPackage":
        return new Q();
      case "EOperation":
        return new wr();
      case "EParameter":
        return new Sr();
      case "EGenericType":
        return new Ir();
      case "ETypeParameter":
        return new kr();
      default:
        return super.create(e);
    }
  }
}
H();
class te extends Nt {
  // Feature ID Constants (eLiterals)
  static ICON_NAME = 4;
  // Private fields
  _iconName;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.ICON_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get iconName() {
    return this._iconName;
  }
  set iconName(e) {
    const t = this._iconName;
    this._iconName = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(te.ICON_NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => te.ICON_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case te.ICON_NAME:
        return this.iconName;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case te.ICON_NAME:
        this.iconName = t, super.eSet(e, t);
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
      case te.ICON_NAME:
        return this._iconName !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case te.ICON_NAME:
        this._iconName = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class se extends Nt {
  // Feature ID Constants (eLiterals)
  static ICON_NAME = 4;
  // Private fields
  _iconName;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.ICON_RIGHT_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get iconName() {
    return this._iconName;
  }
  set iconName(e) {
    const t = this._iconName;
    this._iconName = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(se.ICON_NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => se.ICON_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case se.ICON_NAME:
        return this.iconName;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case se.ICON_NAME:
        this.iconName = t, super.eSet(e, t);
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
      case se.ICON_NAME:
        return this._iconName !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case se.ICON_NAME:
        this._iconName = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class Ze extends De {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new Ze()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(w.eINSTANCE);
  }
  /**
   * Create a new IconSettings instance
   */
  createIconSettings() {
    return new b();
  }
  /**
   * Create a new IconClickPayload instance
   */
  createIconClickPayload() {
    return new te();
  }
  /**
   * Create a new IconRightClickPayload instance
   */
  createIconRightClickPayload() {
    return new se();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "IconSettings":
        return this.createIconSettings();
      case "IconClickPayload":
        return this.createIconClickPayload();
      case "IconRightClickPayload":
        return this.createIconRightClickPayload();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function Et(_) {
  const e = V.INSTANCE.getEPackage(_);
  if (!e)
    throw new Error(`EPackage '${_}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing IconSettingsPackage.`);
  return e;
}
class w extends Q {
  static eNAME = "IconSettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.icon";
  static eNS_PREFIX = "IconSettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new w(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    ICON_SETTINGS: null,
    ICON_SETTINGS__ICON_COLOR: null,
    ICON_SETTINGS__ICON_SIZE: null,
    ICON_SETTINGS__IS_ICON_FILLED: null,
    ICON_SETTINGS__STROKE_WEIGHT: null,
    ICON_SETTINGS__OPTIC_SIZE: null,
    ICON_SETTINGS__GRADE: null,
    ICON_SETTINGS__CURRENT_ICON: null,
    ICON_CLICK_PAYLOAD: null,
    ICON_CLICK_PAYLOAD__ICON_NAME: null,
    ICON_RIGHT_CLICK_PAYLOAD: null,
    ICON_RIGHT_CLICK_PAYLOAD__ICON_NAME: null
  };
  constructor() {
    super(), this.setName(w.eNAME), this.setNsURI(w.eNS_URI), this.setNsPrefix(w.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    V.INSTANCE.set(w.eNS_URI, this), this.setEFactoryInstance(Ze.eINSTANCE);
    const e = new A();
    e.setName("IconSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), w.Literals.ICON_SETTINGS = e;
    const t = new T();
    t.setName("iconColor"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), w.Literals.ICON_SETTINGS__ICON_COLOR = t;
    const s = new T();
    s.setName("iconSize"), s.setLowerBound(0), s.setUpperBound(1), e.getEStructuralFeatures().push(s), w.Literals.ICON_SETTINGS__ICON_SIZE = s;
    const r = new T();
    r.setName("isIconFilled"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), w.Literals.ICON_SETTINGS__IS_ICON_FILLED = r;
    const i = new T();
    i.setName("strokeWeight"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), w.Literals.ICON_SETTINGS__STROKE_WEIGHT = i;
    const a = new T();
    a.setName("opticSize"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), w.Literals.ICON_SETTINGS__OPTIC_SIZE = a;
    const l = new T();
    l.setName("grade"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), w.Literals.ICON_SETTINGS__GRADE = l;
    const c = new T();
    c.setName("currentIcon"), c.setLowerBound(0), c.setUpperBound(1), e.getEStructuralFeatures().push(c), w.Literals.ICON_SETTINGS__CURRENT_ICON = c;
    const u = new A();
    u.setName("IconClickPayload"), u.setAbstract(!1), u.setInterface(!1), this.getEClassifiers().push(u), u.setEPackage(this), w.Literals.ICON_CLICK_PAYLOAD = u;
    const p = new T();
    p.setName("iconName"), p.setLowerBound(0), p.setUpperBound(1), u.getEStructuralFeatures().push(p), w.Literals.ICON_CLICK_PAYLOAD__ICON_NAME = p;
    const g = new A();
    g.setName("IconRightClickPayload"), g.setAbstract(!1), g.setInterface(!1), this.getEClassifiers().push(g), g.setEPackage(this), w.Literals.ICON_RIGHT_CLICK_PAYLOAD = g;
    const m = new T();
    m.setName("iconName"), m.setLowerBound(0), m.setUpperBound(1), g.getEStructuralFeatures().push(m), w.Literals.ICON_RIGHT_CLICK_PAYLOAD__ICON_NAME = m, w.Literals.ICON_CLICK_PAYLOAD.getESuperTypes().push(Et("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), w.Literals.ICON_RIGHT_CLICK_PAYLOAD.getESuperTypes().push(Et("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), w.Literals.ICON_SETTINGS__ICON_COLOR.setEType(H().getEClassifier("EString")), w.Literals.ICON_SETTINGS__ICON_SIZE.setEType(H().getEClassifier("EInt")), w.Literals.ICON_SETTINGS__IS_ICON_FILLED.setEType(H().getEClassifier("EBoolean")), w.Literals.ICON_SETTINGS__STROKE_WEIGHT.setEType(H().getEClassifier("EInt")), w.Literals.ICON_SETTINGS__OPTIC_SIZE.setEType(H().getEClassifier("EInt")), w.Literals.ICON_SETTINGS__GRADE.setEType(H().getEClassifier("EInt")), w.Literals.ICON_SETTINGS__CURRENT_ICON.setEType(H().getEClassifier("EString")), w.Literals.ICON_CLICK_PAYLOAD__ICON_NAME.setEType(H().getEClassifier("EString")), w.Literals.ICON_RIGHT_CLICK_PAYLOAD__ICON_NAME.setEType(H().getEClassifier("EString"));
  }
}
class b extends K {
  // Feature ID Constants (eLiterals)
  static ICON_COLOR = 0;
  static ICON_SIZE = 1;
  static IS_ICON_FILLED = 2;
  static STROKE_WEIGHT = 3;
  static OPTIC_SIZE = 4;
  static GRADE = 5;
  static CURRENT_ICON = 6;
  // Private fields
  _iconColor;
  _iconSize;
  _isIconFilled;
  _strokeWeight;
  _opticSize;
  _grade;
  _currentIcon;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.ICON_SETTINGS;
  }
  // Getters and Setters
  get iconColor() {
    return this._iconColor;
  }
  set iconColor(e) {
    const t = this._iconColor;
    this._iconColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.ICON_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.ICON_COLOR,
      merge: () => !1
    });
  }
  get iconSize() {
    return this._iconSize;
  }
  set iconSize(e) {
    const t = this._iconSize;
    this._iconSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.ICON_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.ICON_SIZE,
      merge: () => !1
    });
  }
  get isIconFilled() {
    return this._isIconFilled;
  }
  set isIconFilled(e) {
    const t = this._isIconFilled;
    this._isIconFilled = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.IS_ICON_FILLED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.IS_ICON_FILLED,
      merge: () => !1
    });
  }
  get strokeWeight() {
    return this._strokeWeight;
  }
  set strokeWeight(e) {
    const t = this._strokeWeight;
    this._strokeWeight = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.STROKE_WEIGHT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.STROKE_WEIGHT,
      merge: () => !1
    });
  }
  get opticSize() {
    return this._opticSize;
  }
  set opticSize(e) {
    const t = this._opticSize;
    this._opticSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.OPTIC_SIZE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.OPTIC_SIZE,
      merge: () => !1
    });
  }
  get grade() {
    return this._grade;
  }
  set grade(e) {
    const t = this._grade;
    this._grade = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.GRADE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.GRADE,
      merge: () => !1
    });
  }
  get currentIcon() {
    return this._currentIcon;
  }
  set currentIcon(e) {
    const t = this._currentIcon;
    this._currentIcon = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.CURRENT_ICON),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.CURRENT_ICON,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case b.ICON_COLOR:
        return this.iconColor;
      case b.ICON_SIZE:
        return this.iconSize;
      case b.IS_ICON_FILLED:
        return this.isIconFilled;
      case b.STROKE_WEIGHT:
        return this.strokeWeight;
      case b.OPTIC_SIZE:
        return this.opticSize;
      case b.GRADE:
        return this.grade;
      case b.CURRENT_ICON:
        return this.currentIcon;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case b.ICON_COLOR:
        this.iconColor = t, super.eSet(e, t);
        break;
      case b.ICON_SIZE:
        this.iconSize = t, super.eSet(e, t);
        break;
      case b.IS_ICON_FILLED:
        this.isIconFilled = t, super.eSet(e, t);
        break;
      case b.STROKE_WEIGHT:
        this.strokeWeight = t, super.eSet(e, t);
        break;
      case b.OPTIC_SIZE:
        this.opticSize = t, super.eSet(e, t);
        break;
      case b.GRADE:
        this.grade = t, super.eSet(e, t);
        break;
      case b.CURRENT_ICON:
        this.currentIcon = t, super.eSet(e, t);
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
      case b.ICON_COLOR:
        return this._iconColor !== void 0;
      case b.ICON_SIZE:
        return this._iconSize !== void 0;
      case b.IS_ICON_FILLED:
        return this._isIconFilled !== void 0;
      case b.STROKE_WEIGHT:
        return this._strokeWeight !== void 0;
      case b.OPTIC_SIZE:
        return this._opticSize !== void 0;
      case b.GRADE:
        return this._grade !== void 0;
      case b.CURRENT_ICON:
        return this._currentIcon !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case b.ICON_COLOR:
        this._iconColor = void 0;
        return;
      case b.ICON_SIZE:
        this._iconSize = void 0;
        return;
      case b.IS_ICON_FILLED:
        this._isIconFilled = void 0;
        return;
      case b.STROKE_WEIGHT:
        this._strokeWeight = void 0;
        return;
      case b.OPTIC_SIZE:
        this._opticSize = void 0;
        return;
      case b.GRADE:
        this._grade = void 0;
        return;
      case b.CURRENT_ICON:
        this._currentIcon = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
const Mr = /* @__PURE__ */ Tt({
  __name: "IconWidget",
  props: /* @__PURE__ */ is({
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(_) {
    as((m) => ({
      v16176ccf: $e(p) + "px",
      baa14a34: $e(u)
    }));
    const e = _, { id: t } = ns(e), { wrapParameters: s } = gs(), r = vt(_, "configv"), i = new b(), a = wt(fs.TINY_EMITTER);
    St(() => {
      if (r.value && (Object.assign(r.value, { ...i, ...r.value }), !(r.value.iconColor instanceof Ce))) {
        const m = r.value.iconColor;
        if (typeof m == "object" && m !== null && "value" in m) {
          const y = new Ce(m.value);
          "variable" in m && (y.variable = m.variable), r.value.iconColor = y;
        } else
          r.value.iconColor = new Ce(m || "var(--color-fg)");
      }
    });
    const l = () => {
      if (!t.value) return;
      const m = {
        iconName: r.value?.currentIcon || "",
        widgetId: t.value,
        timestamp: Date.now()
      };
      console.log("🖱️ Icon Widget: Emitting click event", m), a.emit("widget:IconWidget:click", {
        type: "widget:IconWidget:click",
        widgetId: t.value,
        payload: m
      });
    }, c = () => {
      if (!t.value) return;
      const m = {
        iconName: r.value?.currentIcon || "",
        widgetId: t.value,
        timestamp: Date.now()
      };
      console.log("🖱️ Icon Widget: Emitting right-click event", m), a.emit("widget:IconWidget:right_click", {
        type: "widget:IconWidget:right_click",
        widgetId: t.value,
        payload: m
      });
    }, {
      iconColor: u,
      iconSize: p
    } = s({
      iconColor: he(() => r.value.iconColor?.value || "var(--color-fg)"),
      iconSize: he(() => r.value.iconSize)
    }), g = he(() => {
      if (r.value)
        return `
        font-variation-settings:
            'FILL' ${r.value.isIconFilled ? 1 : 0},
            'wght' ${r.value.strokeWeight},
            'GRAD' ${r.value.grade},
            'opsz' ${r.value.opticSize};
        `;
    });
    return (m, y) => (Ie(), Se(qe, null, [
      y[0] || (y[0] = de("link", {
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        rel: "stylesheet"
      }, null, -1)),
      de("div", {
        class: "icon",
        onClick: l,
        onContextmenu: os(c, ["prevent"]),
        style: { cursor: "pointer" }
      }, [
        de("span", ls(m.$attrs, {
          style: g.value,
          class: "material-symbols-outlined"
        }), It(r.value.currentIcon), 17)
      ], 32)
    ], 64));
  }
}), $t = (_, e) => {
  const t = _.__vccOpts || _;
  for (const [s, r] of e)
    t[s] = r;
  return t;
}, bt = /* @__PURE__ */ $t(Mr, [["__scopeId", "data-v-fe4fcc41"]]), Ur = /* @__PURE__ */ JSON.parse('["10k","10mp","11mp","123","12mp","13mp","14mp","15mp","16mp","17mp","18_up_rating","18mp","19mp","1k","1k_plus","1x_mobiledata","1x_mobiledata_badge","20mp","21mp","22mp","23mp","24mp","2d","2k","2k_plus","2mp","30fps","30fps_select","360","3d_rotation","3g_mobiledata","3g_mobiledata_badge","3k","3k_plus","3mp","3p","4g_mobiledata","4g_mobiledata_badge","4g_plus_mobiledata","4k","4k_plus","4mp","50mp","5g","5g_mobiledata_badge","5k","5k_plus","5mp","60fps","60fps_select","6_ft_apart","6k","6k_plus","6mp","7k","7k_plus","7mp","8k","8k_plus","8mp","9k","9k_plus","9mp","abc","ac_unit","access_alarm","access_alarms","access_time","access_time_filled","accessibility","accessibility_new","accessible","accessible_forward","account_balance","account_balance_wallet","account_box","account_child","account_child_invert","account_circle","account_circle_off","account_tree","action_key","activity_zone","acute","ad","ad_group","ad_group_off","ad_off","ad_units","adb","add","add_a_photo","add_ad","add_alarm","add_alert","add_box","add_business","add_call","add_card","add_chart","add_circle","add_circle_outline","add_comment","add_home","add_home_work","add_ic_call","add_link","add_location","add_location_alt","add_moderator","add_notes","add_photo_alternate","add_reaction","add_road","add_shopping_cart","add_task","add_to_drive","add_to_home_screen","add_to_photos","add_to_queue","addchart","adf_scanner","adjust","admin_meds","admin_panel_settings","ads_click","agender","agriculture","air","air_freshener","air_purifier","air_purifier_gen","airline_seat_flat","airline_seat_flat_angled","airline_seat_individual_suite","airline_seat_legroom_extra","airline_seat_legroom_normal","airline_seat_legroom_reduced","airline_seat_recline_extra","airline_seat_recline_normal","airline_stops","airlines","airplane_ticket","airplanemode_active","airplanemode_inactive","airplay","airport_shuttle","airware","airwave","alarm","alarm_add","alarm_off","alarm_on","alarm_smart_wake","album","align_center","align_end","align_flex_center","align_flex_end","align_flex_start","align_horizontal_center","align_horizontal_left","align_horizontal_right","align_items_stretch","align_justify_center","align_justify_flex_end","align_justify_flex_start","align_justify_space_around","align_justify_space_between","align_justify_space_even","align_justify_stretch","align_self_stretch","align_space_around","align_space_between","align_space_even","align_start","align_stretch","align_vertical_bottom","align_vertical_center","align_vertical_top","all_inbox","all_inclusive","all_match","all_out","allergies","allergy","alt_route","alternate_email","altitude","ambulance","amend","amp_stories","analytics","anchor","android","animation","announcement","aod","aod_tablet","aod_watch","apartment","api","apk_document","apk_install","app_badging","app_blocking","app_promo","app_registration","app_settings_alt","app_shortcut","apparel","approval","approval_delegation","apps","apps_outage","aq","aq_indoor","ar_on_you","ar_stickers","architecture","archive","area_chart","arming_countdown","arrow_and_edge","arrow_back","arrow_back_ios","arrow_back_ios_new","arrow_circle_down","arrow_circle_left","arrow_circle_right","arrow_circle_up","arrow_downward","arrow_downward_alt","arrow_drop_down","arrow_drop_down_circle","arrow_drop_up","arrow_forward","arrow_forward_ios","arrow_insert","arrow_left","arrow_left_alt","arrow_or_edge","arrow_outward","arrow_range","arrow_right","arrow_right_alt","arrow_selector_tool","arrow_split","arrow_top_left","arrow_top_right","arrow_upward","arrow_upward_alt","arrows_more_down","arrows_more_up","arrows_outward","art_track","article","article_shortcut","artist","aspect_ratio","assessment","assignment","assignment_add","assignment_ind","assignment_late","assignment_return","assignment_returned","assignment_turned_in","assist_walker","assistant","assistant_device","assistant_direction","assistant_navigation","assistant_on_hub","assistant_photo","assured_workload","asterisk","atm","atr","attach_email","attach_file","attach_file_add","attach_file_off","attach_money","attachment","attractions","attribution","audio_description","audio_file","audio_video_receiver","audiotrack","auto_awesome","auto_awesome_mosaic","auto_awesome_motion","auto_delete","auto_fix_high","auto_fix_normal","auto_fix_off","auto_graph","auto_mode","auto_read_pause","auto_read_play","auto_stories","auto_towing","auto_transmission","autofps_select","autopause","autoplay","autorenew","autostop","av_timer","avg_pace","avg_time","award_star","azm","baby_changing_station","back_hand","back_to_tab","background_dot_large","background_dot_small","background_grid_small","background_replace","backlight_high","backlight_high_off","backlight_low","backpack","backspace","backup","backup_table","badge","badge_critical_battery","bakery_dining","balance","balcony","ballot","bar_chart","bar_chart_4_bars","barcode","barcode_reader","barcode_scanner","barefoot","batch_prediction","bath_outdoor","bath_private","bath_public_large","bathroom","bathtub","battery_0_bar","battery_1_bar","battery_20","battery_2_bar","battery_30","battery_3_bar","battery_4_bar","battery_50","battery_5_bar","battery_60","battery_6_bar","battery_80","battery_90","battery_alert","battery_change","battery_charging_20","battery_charging_30","battery_charging_50","battery_charging_60","battery_charging_80","battery_charging_90","battery_charging_full","battery_error","battery_full","battery_full_alt","battery_horiz_000","battery_horiz_050","battery_horiz_075","battery_low","battery_plus","battery_profile","battery_saver","battery_share","battery_status_good","battery_std","battery_unknown","battery_very_low","beach_access","bed","bedroom_baby","bedroom_child","bedroom_parent","bedtime","bedtime_off","beenhere","bento","bia","bid_landscape","bid_landscape_disabled","bigtop_updates","bike_scooter","biotech","blanket","blender","blind","blinds","blinds_closed","block","block_flipped","blood_pressure","bloodtype","bluetooth","bluetooth_audio","bluetooth_connected","bluetooth_disabled","bluetooth_drive","bluetooth_searching","blur_circular","blur_linear","blur_medium","blur_off","blur_on","blur_short","body_fat","body_system","bolt","bomb","book","book_2","book_3","book_4","book_5","book_online","bookmark","bookmark_add","bookmark_added","bookmark_border","bookmark_manager","bookmark_remove","bookmarks","border_all","border_bottom","border_clear","border_color","border_horizontal","border_inner","border_left","border_outer","border_right","border_style","border_top","border_vertical","bottom_app_bar","bottom_drawer","bottom_navigation","bottom_panel_close","bottom_panel_open","bottom_right_click","bottom_sheets","box","box_add","box_edit","boy","brand_awareness","brand_family","branding_watermark","breakfast_dining","breaking_news","breaking_news_alt_1","breastfeeding","brightness_1","brightness_2","brightness_3","brightness_4","brightness_5","brightness_6","brightness_7","brightness_alert","brightness_auto","brightness_empty","brightness_high","brightness_low","brightness_medium","bring_your_own_ip","broadcast_on_home","broadcast_on_personal","broken_image","browse","browse_activity","browse_gallery","browser_not_supported","browser_updated","brunch_dining","brush","bubble","bubble_chart","bubbles","bug_report","build","build_circle","bungalow","burst_mode","bus_alert","business","business_center","business_chip","business_messages","buttons_alt","cabin","cable","cached","cake","cake_add","calculate","calendar_add_on","calendar_apps_script","calendar_clock","calendar_month","calendar_today","calendar_view_day","calendar_view_month","calendar_view_week","call","call_end","call_log","call_made","call_merge","call_missed","call_missed_outgoing","call_quality","call_received","call_split","call_to_action","camera","camera_alt","camera_enhance","camera_front","camera_indoor","camera_outdoor","camera_rear","camera_roll","camera_video","cameraswitch","campaign","camping","cancel","cancel_presentation","cancel_schedule_send","candle","candlestick_chart","captive_portal","capture","car_crash","car_rental","car_repair","car_tag","card_giftcard","card_membership","card_travel","cardiology","cards","carpenter","carry_on_bag","carry_on_bag_checked","carry_on_bag_inactive","carry_on_bag_question","cases","casino","cast","cast_connected","cast_for_education","cast_pause","cast_warning","castle","catching_pokemon","category","celebration","cell_merge","cell_tower","cell_wifi","center_focus_strong","center_focus_weak","chair","chair_alt","chalet","change_circle","change_history","charger","charging_station","chart_data","chat","chat_add_on","chat_apps_script","chat_bubble","chat_bubble_outline","chat_error","chat_info","chat_paste_go","check","check_box","check_box_outline_blank","check_circle","check_circle_outline","check_in_out","check_indeterminate_small","check_small","checkbook","checked_bag","checked_bag_question","checklist","checklist_rtl","checkroom","cheer","chess","chevron_left","chevron_right","child_care","child_friendly","chip_extraction","chips","chrome_reader_mode","chromecast_2","chromecast_device","chronic","church","cinematic_blur","circle","circle_notifications","circles","circles_ext","clarify","class","clean_hands","cleaning","cleaning_bucket","cleaning_services","clear","clear_all","clear_day","clear_night","climate_mini_split","clinical_notes","clock_loader_10","clock_loader_20","clock_loader_40","clock_loader_60","clock_loader_80","clock_loader_90","close","close_fullscreen","close_small","closed_caption","closed_caption_disabled","closed_caption_off","cloud","cloud_circle","cloud_done","cloud_download","cloud_off","cloud_queue","cloud_sync","cloud_upload","cloudy_snowing","co2","co_present","code","code_blocks","code_off","coffee","coffee_maker","cognition","collapse_all","collapse_content","collections","collections_bookmark","color_lens","colorize","colors","comedy_mask","comic_bubble","comment","comment_bank","comments_disabled","commit","communication","communities","commute","compare","compare_arrows","compass_calibration","component_exchange","compost","compress","computer","concierge","conditions","confirmation_number","congenital","connect_without_contact","connected_tv","connecting_airports","construction","contact_emergency","contact_mail","contact_page","contact_phone","contact_support","contactless","contactless_off","contacts","contacts_product","content_copy","content_cut","content_paste","content_paste_go","content_paste_off","content_paste_search","contract","contract_delete","contract_edit","contrast","contrast_rtl_off","control_camera","control_point","control_point_duplicate","controller_gen","conversion_path","conversion_path_off","conveyor_belt","cookie","cookie_off","cooking","cool_to_dry","copy_all","copyright","coronavirus","corporate_fare","cottage","counter_0","counter_1","counter_2","counter_3","counter_4","counter_5","counter_6","counter_7","counter_8","counter_9","countertops","create","create_new_folder","credit_card","credit_card_gear","credit_card_heart","credit_card_off","credit_score","crib","crisis_alert","crop","crop_16_9","crop_3_2","crop_5_4","crop_7_5","crop_9_16","crop_din","crop_free","crop_landscape","crop_original","crop_portrait","crop_rotate","crop_square","crossword","crowdsource","cruelty_free","css","csv","currency_bitcoin","currency_exchange","currency_franc","currency_lira","currency_pound","currency_ruble","currency_rupee","currency_yen","currency_yuan","curtains","curtains_closed","custom_typography","cut","cycle","cyclone","dangerous","dark_mode","dashboard","dashboard_customize","data_alert","data_array","data_check","data_exploration","data_info_alert","data_loss_prevention","data_object","data_saver_off","data_saver_on","data_table","data_thresholding","data_usage","database","dataset","dataset_linked","date_range","deblur","deceased","decimal_decrease","decimal_increase","deck","dehaze","delete","delete_forever","delete_history","delete_outline","delete_sweep","delivery_dining","demography","density_large","density_medium","density_small","dentistry","departure_board","deployed_code","deployed_code_account","deployed_code_alert","deployed_code_history","deployed_code_update","dermatology","description","deselect","design_services","desk","deskphone","desktop_access_disabled","desktop_mac","desktop_windows","destruction","details","detection_and_zone","detector","detector_alarm","detector_battery","detector_co","detector_offline","detector_smoke","detector_status","developer_board","developer_board_off","developer_guide","developer_mode","developer_mode_tv","device_hub","device_reset","device_thermostat","device_unknown","devices","devices_fold","devices_off","devices_other","devices_wearables","dew_point","diagnosis","dialer_sip","dialogs","dialpad","diamond","dictionary","difference","digital_out_of_home","digital_wellbeing","dining","dinner_dining","directions","directions_alt","directions_alt_off","directions_bike","directions_boat","directions_boat_filled","directions_bus","directions_bus_filled","directions_car","directions_car_filled","directions_off","directions_railway","directions_railway_filled","directions_run","directions_subway","directions_subway_filled","directions_transit","directions_transit_filled","directions_walk","directory_sync","dirty_lens","disabled_by_default","disabled_visible","disc_full","discount","discover_tune","dishwasher","dishwasher_gen","display_external_input","display_settings","distance","diversity_1","diversity_2","diversity_3","diversity_4","dns","do_disturb","do_disturb_alt","do_disturb_off","do_disturb_on","do_not_disturb","do_not_disturb_alt","do_not_disturb_off","do_not_disturb_on","do_not_disturb_on_total_silence","do_not_step","do_not_touch","dock","dock_to_bottom","dock_to_left","dock_to_right","docs_add_on","docs_apps_script","document_scanner","domain","domain_add","domain_disabled","domain_verification","domain_verification_off","domino_mask","done","done_all","done_outline","donut_large","donut_small","door_back","door_front","door_open","door_sensor","door_sliding","doorbell","doorbell_3p","doorbell_chime","double_arrow","downhill_skiing","download","download_2","download_done","download_for_offline","downloading","draft","draft_orders","drafts","drag_click","drag_handle","drag_indicator","drag_pan","draw","draw_abstract","draw_collage","dresser","drive_eta","drive_file_move","drive_file_move_outline","drive_file_move_rtl","drive_file_rename_outline","drive_folder_upload","dropdown","dry","dry_cleaning","dual_screen","duo","dvr","dynamic_feed","dynamic_form","e911_avatar","e911_emergency","e_mobiledata","e_mobiledata_badge","earbuds","earbuds_battery","early_on","earthquake","east","ecg","ecg_heart","eco","eda","edgesensor_high","edgesensor_low","edit","edit_attributes","edit_calendar","edit_document","edit_location","edit_location_alt","edit_note","edit_notifications","edit_off","edit_road","edit_square","editor_choice","egg","egg_alt","eject","elderly","elderly_woman","electric_bike","electric_bolt","electric_car","electric_meter","electric_moped","electric_rickshaw","electric_scooter","electrical_services","elevation","elevator","email","emergency","emergency_heat","emergency_heat_2","emergency_home","emergency_recording","emergency_share","emergency_share_off","emoji_emotions","emoji_events","emoji_flags","emoji_food_beverage","emoji_nature","emoji_objects","emoji_people","emoji_symbols","emoji_transportation","emoticon","empty_dashboard","enable","encrypted","endocrinology","energy","energy_program_saving","energy_program_time_used","energy_savings_leaf","engineering","enhanced_encryption","ent","enterprise","enterprise_off","equal","equalizer","error","error_med","error_outline","escalator","escalator_warning","euro","euro_symbol","ev_charger","ev_mobiledata_badge","ev_shadow","ev_shadow_add","ev_shadow_minus","ev_station","event","event_available","event_busy","event_list","event_note","event_repeat","event_seat","event_upcoming","exclamation","exercise","exit_to_app","expand","expand_all","expand_circle_down","expand_circle_right","expand_circle_up","expand_content","expand_less","expand_more","experiment","explicit","explore","explore_nearby","explore_off","explosion","export_notes","exposure","exposure_neg_1","exposure_neg_2","exposure_plus_1","exposure_plus_2","exposure_zero","extension","extension_off","eyeglasses","face","face_2","face_3","face_4","face_5","face_6","face_retouching_natural","face_retouching_off","face_unlock","fact_check","factory","falling","familiar_face_and_zone","family_history","family_home","family_link","family_restroom","family_star","farsight_digital","fast_forward","fast_rewind","fastfood","faucet","favorite","favorite_border","fax","feature_search","featured_play_list","featured_seasonal_and_gifts","featured_video","feed","feedback","female","femur","femur_alt","fence","fertile","festival","fiber_dvr","fiber_manual_record","fiber_new","fiber_pin","fiber_smart_record","file_copy","file_copy_off","file_download","file_download_done","file_download_off","file_map","file_open","file_present","file_save","file_save_off","file_upload","file_upload_off","filter","filter_1","filter_2","filter_3","filter_4","filter_5","filter_6","filter_7","filter_8","filter_9","filter_9_plus","filter_alt","filter_alt_off","filter_b_and_w","filter_center_focus","filter_drama","filter_frames","filter_hdr","filter_list","filter_list_alt","filter_list_off","filter_none","filter_retrolux","filter_tilt_shift","filter_vintage","finance","finance_chip","finance_mode","find_in_page","find_replace","fingerprint","fire_extinguisher","fire_hydrant","fire_hydrant_alt","fire_truck","fireplace","first_page","fit_page","fit_screen","fit_width","fitbit","fitness_center","flag","flag_circle","flaky","flare","flash_auto","flash_off","flash_on","flashlight_off","flashlight_on","flatware","flex_direction","flex_no_wrap","flex_wrap","flight","flight_class","flight_land","flight_takeoff","flights_and_hotels","flightsmode","flip","flip_camera_android","flip_camera_ios","flip_to_back","flip_to_front","flood","floor","floor_lamp","flowsheet","fluid","fluid_balance","fluid_med","fluorescent","flutter","flutter_dash","fmd_bad","fmd_good","foggy","folded_hands","folder","folder_copy","folder_data","folder_delete","folder_limited","folder_managed","folder_off","folder_open","folder_shared","folder_special","folder_supervised","folder_zip","follow_the_signs","font_download","font_download_off","food_bank","foot_bones","footprint","for_you","forest","fork_left","fork_right","forklift","format_align_center","format_align_justify","format_align_left","format_align_right","format_bold","format_clear","format_color_fill","format_color_reset","format_color_text","format_h1","format_h2","format_h3","format_h4","format_h5","format_h6","format_image_left","format_image_right","format_indent_decrease","format_indent_increase","format_ink_highlighter","format_italic","format_letter_spacing","format_letter_spacing_2","format_letter_spacing_standard","format_letter_spacing_wide","format_letter_spacing_wider","format_line_spacing","format_list_bulleted","format_list_bulleted_add","format_list_numbered","format_list_numbered_rtl","format_overline","format_paint","format_paragraph","format_quote","format_shapes","format_size","format_strikethrough","format_text_clip","format_text_overflow","format_text_wrap","format_textdirection_l_to_r","format_textdirection_r_to_l","format_underlined","format_underlined_squiggle","forms_add_on","forms_apps_script","fort","forum","forward","forward_10","forward_30","forward_5","forward_circle","forward_media","forward_to_inbox","foundation","frame_inspect","frame_person","frame_person_off","frame_reload","frame_source","free_breakfast","free_cancellation","front_hand","front_loader","full_coverage","full_hd","full_stacked_bar_chart","fullscreen","fullscreen_exit","function","functions","g_mobiledata","g_mobiledata_badge","g_translate","gallery_thumbnail","gamepad","games","garage","garage_door","garage_home","garden_cart","gas_meter","gastroenterology","gate","gavel","general_device","generating_tokens","genetics","genres","gesture","gesture_select","get_app","gif","gif_box","girl","gite","glass_cup","globe","globe_asia","globe_uk","glucose","glyphs","go_to_line","golf_course","google_home_devices","google_tv_remote","google_wifi","gpp_bad","gpp_good","gpp_maybe","gps_fixed","gps_not_fixed","gps_off","grade","gradient","grading","grain","graphic_eq","grass","grid_3x3","grid_3x3_off","grid_4x4","grid_goldenratio","grid_guides","grid_off","grid_on","grid_view","grocery","group","group_add","group_off","group_remove","group_work","grouped_bar_chart","groups","groups_2","groups_3","gynecology","h_mobiledata","h_mobiledata_badge","h_plus_mobiledata","h_plus_mobiledata_badge","hail","hallway","hand_bones","hand_gesture","handshake","handyman","hangout_video","hangout_video_off","hard_drive","hard_drive_2","hardware","hd","hdr_auto","hdr_auto_select","hdr_enhanced_select","hdr_off","hdr_off_select","hdr_on","hdr_on_select","hdr_plus","hdr_plus_off","hdr_strong","hdr_weak","headphones","headphones_battery","headset","headset_mic","headset_off","healing","health_and_beauty","health_and_safety","health_metrics","heap_snapshot_large","heap_snapshot_multiple","heap_snapshot_thumbnail","hearing","hearing_disabled","heart_broken","heart_check","heart_minus","heart_plus","heat","heat_pump","heat_pump_balance","height","helicopter","help","help_center","help_clinic","help_outline","hematology","hevc","hexagon","hide","hide_image","hide_source","high_density","high_quality","high_res","highlight","highlight_alt","highlight_keyboard_focus","highlight_mouse_cursor","highlight_off","highlight_text_cursor","highlighter_size_1","highlighter_size_2","highlighter_size_3","highlighter_size_4","highlighter_size_5","hiking","history","history_edu","history_off","history_toggle_off","hive","hls","hls_off","holiday_village","home","home_and_garden","home_app_logo","home_filled","home_health","home_improvement_and_tools","home_iot_device","home_max","home_max_dots","home_mini","home_pin","home_repair_service","home_speaker","home_storage","home_work","horizontal_distribute","horizontal_rule","horizontal_split","hot_tub","hotel","hotel_class","hourglass","hourglass_bottom","hourglass_disabled","hourglass_empty","hourglass_full","hourglass_top","house","house_siding","house_with_shield","houseboat","household_supplies","how_to_reg","how_to_vote","hr_resting","html","http","https","hub","humerus","humerus_alt","humidity_high","humidity_indoor","humidity_low","humidity_mid","humidity_percentage","hvac","ice_skating","icecream","ifl","iframe","iframe_off","image","image_aspect_ratio","image_not_supported","image_search","imagesearch_roller","imagesmode","immunology","import_contacts","import_export","important_devices","in_home_mode","inactive_order","inbox","inbox_customize","incomplete_circle","indeterminate_check_box","indeterminate_question_box","info","info_i","info_outline","infrared","ink_eraser","ink_eraser_off","ink_highlighter","ink_highlighter_move","ink_marker","ink_pen","inpatient","input","input_circle","insert_chart","insert_chart_outlined","insert_comment","insert_drive_file","insert_emoticon","insert_invitation","insert_link","insert_page_break","insert_photo","insert_text","insights","install_desktop","install_mobile","instant_mix","integration_instructions","interactive_space","interests","interpreter_mode","inventory","inventory_2","invert_colors","invert_colors_off","ios","ios_share","iron","iso","jamboard_kiosk","javascript","join","join_full","join_inner","join_left","join_right","joystick","jump_to_element","kayaking","kebab_dining","kettle","key","key_off","key_vertical","key_visualizer","keyboard","keyboard_alt","keyboard_arrow_down","keyboard_arrow_left","keyboard_arrow_right","keyboard_arrow_up","keyboard_backspace","keyboard_capslock","keyboard_capslock_badge","keyboard_command_key","keyboard_control_key","keyboard_double_arrow_down","keyboard_double_arrow_left","keyboard_double_arrow_right","keyboard_double_arrow_up","keyboard_external_input","keyboard_full","keyboard_hide","keyboard_keys","keyboard_off","keyboard_onscreen","keyboard_option_key","keyboard_previous_language","keyboard_return","keyboard_tab","keyboard_tab_rtl","keyboard_voice","kid_star","king_bed","kitchen","kitesurfing","lab_panel","lab_profile","lab_research","label","label_important","label_important_outline","label_off","labs","lan","landscape","landslide","language","language_chinese_array","language_chinese_cangjie","language_chinese_dayi","language_chinese_pinyin","language_chinese_quick","language_chinese_wubi","language_french","language_gb_english","language_international","language_japanese_kana","language_korean_latin","language_pinyin","language_spanish","language_us","language_us_colemak","language_us_dvorak","laps","laptop","laptop_chromebook","laptop_mac","laptop_windows","lasso_select","last_page","launch","laundry","layers","layers_clear","lda","leaderboard","leak_add","leak_remove","left_click","left_panel_close","left_panel_open","legend_toggle","lens","lens_blur","letter_switch","library_add","library_add_check","library_books","library_music","license","lift_to_talk","light","light_group","light_mode","light_off","lightbulb","lightbulb_circle","lightbulb_outline","lightning_stand","line_axis","line_curve","line_end","line_end_arrow","line_end_arrow_notch","line_end_circle","line_end_diamond","line_end_square","line_start","line_start_arrow","line_start_arrow_notch","line_start_circle","line_start_diamond","line_start_square","line_style","line_weight","linear_scale","link","link_off","linked_camera","linked_services","liquor","list","list_alt","list_alt_add","lists","live_help","live_tv","living","local_activity","local_airport","local_atm","local_bar","local_cafe","local_car_wash","local_convenience_store","local_dining","local_drink","local_fire_department","local_florist","local_gas_station","local_grocery_store","local_hospital","local_hotel","local_laundry_service","local_library","local_mall","local_movies","local_offer","local_parking","local_pharmacy","local_phone","local_pizza","local_play","local_police","local_post_office","local_printshop","local_see","local_shipping","local_taxi","location_away","location_chip","location_city","location_disabled","location_home","location_off","location_on","location_pin","location_searching","lock","lock_clock","lock_open","lock_open_right","lock_outline","lock_person","lock_reset","login","logo_dev","logout","looks","looks_3","looks_4","looks_5","looks_6","looks_one","looks_two","loop","loupe","low_density","low_priority","loyalty","lte_mobiledata","lte_mobiledata_badge","lte_plus_mobiledata","lte_plus_mobiledata_badge","luggage","lunch_dining","lyrics","macro_auto","macro_off","magnification_large","magnification_small","magnify_docked","magnify_fullscreen","mail","mail_lock","mail_outline","male","man","man_2","man_3","man_4","manage_accounts","manage_history","manage_search","manga","manufacturing","map","maps_home_work","maps_ugc","margin","mark_as_unread","mark_chat_read","mark_chat_unread","mark_email_read","mark_email_unread","mark_unread_chat_alt","markdown","markdown_copy","markdown_paste","markunread","markunread_mailbox","masked_transitions","masks","match_case","match_word","matter","maximize","measuring_tape","media_bluetooth_off","media_bluetooth_on","media_link","media_output","media_output_off","mediation","medical_information","medical_mask","medical_services","medication","medication_liquid","meeting_room","memory","memory_alt","menstrual_health","menu","menu_book","menu_open","merge","merge_type","message","metabolism","mfg_nest_yale_lock","mic","mic_double","mic_external_off","mic_external_on","mic_none","mic_off","microbiology","microwave","microwave_gen","military_tech","mimo","mimo_disconnect","mindfulness","minimize","minor_crash","mintmark","miscellaneous_services","missed_video_call","missing_controller","mist","mitre","mixture_med","mms","mobile_friendly","mobile_off","mobile_screen_share","mobiledata_off","mode","mode_comment","mode_cool","mode_cool_off","mode_dual","mode_edit","mode_edit_outline","mode_fan","mode_fan_off","mode_heat","mode_heat_cool","mode_heat_off","mode_night","mode_of_travel","mode_off_on","mode_standby","model_training","monetization_on","money","money_off","money_off_csred","monitor","monitor_heart","monitor_weight","monitor_weight_gain","monitor_weight_loss","monitoring","monochrome_photos","mood","mood_bad","mop","moped","more","more_down","more_horiz","more_time","more_up","more_vert","mosque","motion_blur","motion_mode","motion_photos_auto","motion_photos_off","motion_photos_on","motion_photos_pause","motion_photos_paused","motion_sensor_active","motion_sensor_alert","motion_sensor_idle","motion_sensor_urgent","motorcycle","mountain_flag","mouse","move","move_down","move_group","move_item","move_location","move_selection_down","move_selection_left","move_selection_right","move_selection_up","move_to_inbox","move_up","moved_location","movie","movie_creation","movie_edit","movie_filter","movie_info","moving","moving_beds","moving_ministry","mp","multicooker","multiline_chart","multiple_stop","museum","music_cast","music_note","music_off","music_video","my_location","mystery","nat","nature","nature_people","navigate_before","navigate_next","navigation","near_me","near_me_disabled","nearby","nearby_error","nearby_off","nephrology","nest_audio","nest_cam_floodlight","nest_cam_indoor","nest_cam_iq","nest_cam_iq_outdoor","nest_cam_magnet_mount","nest_cam_outdoor","nest_cam_stand","nest_cam_wall_mount","nest_cam_wired_stand","nest_clock_farsight_analog","nest_clock_farsight_digital","nest_connect","nest_detect","nest_display","nest_display_max","nest_doorbell_visitor","nest_eco_leaf","nest_farsight_weather","nest_found_savings","nest_gale_wifi","nest_heat_link_e","nest_heat_link_gen_3","nest_hello_doorbell","nest_mini","nest_multi_room","nest_protect","nest_remote","nest_remote_comfort_sensor","nest_secure_alarm","nest_sunblock","nest_tag","nest_thermostat","nest_thermostat_e_eu","nest_thermostat_gen_3","nest_thermostat_sensor","nest_thermostat_sensor_eu","nest_thermostat_zirconium_eu","nest_true_radiant","nest_wake_on_approach","nest_wake_on_press","nest_wifi_point","nest_wifi_pro","nest_wifi_pro_2","nest_wifi_router","network_cell","network_check","network_intelligence_history","network_intelligence_update","network_locked","network_manage","network_node","network_ping","network_wifi","network_wifi_1_bar","network_wifi_1_bar_locked","network_wifi_2_bar","network_wifi_2_bar_locked","network_wifi_3_bar","network_wifi_3_bar_locked","network_wifi_locked","neurology","new_label","new_releases","new_window","news","newsmode","newspaper","newsstand","next_plan","next_week","nfc","night_shelter","night_sight_auto","night_sight_auto_off","night_sight_max","nightlife","nightlight","nightlight_round","nights_stay","no_accounts","no_adult_content","no_backpack","no_cell","no_crash","no_drinks","no_encryption","no_encryption_gmailerrorred","no_flash","no_food","no_luggage","no_meals","no_meals_ouline","no_meeting_room","no_photography","no_sim","no_sound","no_stroller","no_transfer","noise_aware","noise_control_off","noise_control_on","nordic_walking","north","north_east","north_west","not_accessible","not_accessible_forward","not_interested","not_listed_location","not_started","note","note_add","note_alt","note_stack","note_stack_add","notes","notification_add","notification_important","notification_multiple","notifications","notifications_active","notifications_none","notifications_off","notifications_paused","notifications_unread","numbers","nutrition","ods","odt","offline_bolt","offline_pin","offline_share","oil_barrel","on_device_training","on_hub_device","oncology","ondemand_video","online_prediction","onsen","opacity","open_in_browser","open_in_full","open_in_new","open_in_new_down","open_in_new_off","open_in_phone","open_jam","open_with","ophthalmology","oral_disease","order_approve","order_play","orders","orthopedics","other_admission","other_houses","outbound","outbox","outbox_alt","outdoor_garden","outdoor_grill","outgoing_mail","outlet","outlined_flag","outpatient","outpatient_med","output","output_circle","oven","oven_gen","overview","overview_key","oxygen_saturation","p2p","pace","pacemaker","package","package_2","padding","page_control","page_info","pageless","pages","pageview","paid","palette","pallet","pan_tool","pan_tool_alt","pan_zoom","panorama","panorama_fish_eye","panorama_horizontal","panorama_horizontal_select","panorama_photosphere","panorama_photosphere_select","panorama_vertical","panorama_vertical_select","panorama_wide_angle","panorama_wide_angle_select","paragliding","park","partly_cloudy_day","partly_cloudy_night","partner_exchange","partner_reports","party_mode","passkey","password","patient_list","pattern","pause","pause_circle","pause_circle_filled","pause_circle_outline","pause_presentation","payment","payments","pedal_bike","pediatrics","pen_size_1","pen_size_2","pen_size_3","pen_size_4","pen_size_5","pending","pending_actions","pentagon","people","people_alt","people_outline","percent","pergola","perm_camera_mic","perm_contact_calendar","perm_data_setting","perm_device_information","perm_identity","perm_media","perm_phone_msg","perm_scan_wifi","person","person_2","person_3","person_4","person_add","person_add_alt","person_add_alt_1","person_add_disabled","person_alert","person_apron","person_book","person_cancel","person_celebrate","person_check","person_edit","person_off","person_outline","person_pin","person_pin_circle","person_play","person_raised_hand","person_remove","person_remove_alt_1","person_search","personal_bag","personal_bag_off","personal_bag_question","personal_injury","personal_places","personal_video","pest_control","pest_control_rodent","pet_supplies","pets","phishing","phone","phone_android","phone_bluetooth_speaker","phone_callback","phone_disabled","phone_enabled","phone_forwarded","phone_in_talk","phone_iphone","phone_locked","phone_missed","phone_paused","phonelink","phonelink_erase","phonelink_lock","phonelink_off","phonelink_ring","phonelink_ring_off","phonelink_setup","photo","photo_album","photo_auto_merge","photo_camera","photo_camera_back","photo_camera_front","photo_filter","photo_frame","photo_library","photo_prints","photo_size_select_actual","photo_size_select_large","photo_size_select_small","php","physical_therapy","piano","piano_off","picture_as_pdf","picture_in_picture","picture_in_picture_alt","picture_in_picture_center","picture_in_picture_large","picture_in_picture_medium","picture_in_picture_mobile","picture_in_picture_off","picture_in_picture_small","pie_chart","pie_chart_outline","pie_chart_outlined","pill","pill_off","pin","pin_drop","pin_end","pin_invoke","pinch","pinch_zoom_in","pinch_zoom_out","pip","pip_exit","pivot_table_chart","pix","place","place_item","plagiarism","planner_banner_ad_pt","planner_review","play_arrow","play_circle","play_circle_filled","play_circle_outline","play_disabled","play_for_work","play_lesson","play_pause","play_shapes","playing_cards","playlist_add","playlist_add_check","playlist_add_check_circle","playlist_add_circle","playlist_play","playlist_remove","plumbing","plus_one","podcasts","podiatry","podium","point_of_sale","point_scan","policy","poll","polyline","polymer","pool","portable_wifi_off","portrait","position_bottom_left","position_bottom_right","position_top_right","post","post_add","potted_plant","power","power_input","power_off","power_settings_new","prayer_times","precision_manufacturing","pregnancy","pregnant_woman","preliminary","prescriptions","present_to_all","preview","preview_off","price_change","price_check","print","print_add","print_connect","print_disabled","print_error","print_lock","priority","priority_high","privacy","privacy_tip","private_connectivity","problem","procedure","process_chart","production_quantity_limits","productivity","progress_activity","prompt_suggestion","propane","propane_tank","psychiatry","psychology","psychology_alt","public","public_off","publish","published_with_changes","pulmonology","pulse_alert","punch_clock","push_pin","qr_code","qr_code_2","qr_code_2_add","qr_code_scanner","query_builder","query_stats","question_answer","question_exchange","question_mark","queue","queue_music","queue_play_next","quick_phrases","quick_reference","quick_reference_all","quick_reorder","quickreply","quiet_time","quiet_time_active","quiz","r_mobiledata","radar","radio","radio_button_checked","radio_button_partial","radio_button_unchecked","radiology","railway_alert","rainy","rainy_heavy","rainy_light","rainy_snow","ramen_dining","ramp_left","ramp_right","range_hood","rate_review","raven","raw_off","raw_on","read_more","readiness_score","real_estate_agent","rear_camera","rebase","rebase_edit","receipt","receipt_long","recent_actors","recent_patient","recommend","record_voice_over","rectangle","recycling","redeem","redo","reduce_capacity","refresh","regular_expression","relax","release_alert","remember_me","reminder","remote_gen","remove","remove_circle","remove_circle_outline","remove_done","remove_from_queue","remove_moderator","remove_red_eye","remove_road","remove_selection","remove_shopping_cart","reopen_window","reorder","repartition","repeat","repeat_on","repeat_one","repeat_one_on","replay","replay_10","replay_30","replay_5","replay_circle_filled","reply","reply_all","report","report_gmailerrorred","report_off","report_problem","request_page","request_quote","reset_image","reset_tv","reset_wrench","resize","respiratory_rate","responsive_layout","restart_alt","restaurant","restaurant_menu","restore","restore_from_trash","restore_page","resume","reviews","rewarded_ads","rheumatology","rib_cage","rice_bowl","right_click","right_panel_close","right_panel_open","ring_volume","ripples","robot","robot_2","rocket","rocket_launch","roller_shades","roller_shades_closed","roller_skating","roofing","room","room_preferences","room_service","rotate_90_degrees_ccw","rotate_90_degrees_cw","rotate_left","rotate_right","roundabout_left","roundabout_right","rounded_corner","route","router","routine","rowing","rss_feed","rsvp","rtt","rubric","rule","rule_folder","rule_settings","run_circle","running_with_errors","rv_hookup","safety_check","safety_check_off","safety_divider","sailing","salinity","sanitizer","satellite","satellite_alt","sauna","save","save_alt","save_as","saved_search","savings","scale","scan","scan_delete","scanner","scatter_plot","scene","schedule","schedule_send","schema","school","science","science_off","score","scoreboard","screen_lock_landscape","screen_lock_portrait","screen_lock_rotation","screen_record","screen_rotation","screen_rotation_alt","screen_rotation_up","screen_search_desktop","screen_share","screenshot","screenshot_frame","screenshot_keyboard","screenshot_monitor","screenshot_region","screenshot_tablet","scrollable_header","scuba_diving","sd","sd_card","sd_card_alert","sd_storage","sdk","search","search_check","search_hands_free","search_off","security","security_key","security_update","security_update_good","security_update_warning","segment","select","select_all","select_check_box","select_to_speak","select_window","select_window_off","self_care","self_improvement","sell","send","send_and_archive","send_money","send_time_extension","send_to_mobile","sensor_door","sensor_occupied","sensor_window","sensors","sensors_krx","sensors_krx_off","sensors_off","sentiment_calm","sentiment_content","sentiment_dissatisfied","sentiment_excited","sentiment_extremely_dissatisfied","sentiment_frustrated","sentiment_neutral","sentiment_sad","sentiment_satisfied","sentiment_satisfied_alt","sentiment_stressed","sentiment_very_dissatisfied","sentiment_very_satisfied","sentiment_worried","service_toolbox","set_meal","settings","settings_accessibility","settings_account_box","settings_alert","settings_applications","settings_b_roll","settings_backup_restore","settings_bluetooth","settings_brightness","settings_cell","settings_cinematic_blur","settings_ethernet","settings_heart","settings_input_antenna","settings_input_component","settings_input_composite","settings_input_hdmi","settings_input_svideo","settings_motion_mode","settings_night_sight","settings_overscan","settings_panorama","settings_phone","settings_photo_camera","settings_power","settings_remote","settings_slow_motion","settings_suggest","settings_system_daydream","settings_timelapse","settings_video_camera","settings_voice","settop_component","severe_cold","shadow","shadow_add","shadow_minus","shape_line","shapes","share","share_location","share_off","share_reviews","share_windows","sheets_rtl","shelf_auto_hide","shelf_position","shelves","shield","shield_lock","shield_locked","shield_moon","shield_person","shield_question","shield_with_heart","shield_with_house","shift","shift_lock","shop","shop_2","shop_two","shopping_bag","shopping_basket","shopping_cart","shopping_cart_checkout","shopping_cart_off","shoppingmode","short_stay","short_text","shortcut","show_chart","shower","shuffle","shuffle_on","shutter_speed","shutter_speed_add","shutter_speed_minus","sick","side_navigation","sign_language","signal_cellular_0_bar","signal_cellular_1_bar","signal_cellular_2_bar","signal_cellular_3_bar","signal_cellular_4_bar","signal_cellular_add","signal_cellular_alt","signal_cellular_alt_1_bar","signal_cellular_alt_2_bar","signal_cellular_connected_no_internet_0_bar","signal_cellular_connected_no_internet_1_bar","signal_cellular_connected_no_internet_2_bar","signal_cellular_connected_no_internet_3_bar","signal_cellular_connected_no_internet_4_bar","signal_cellular_no_sim","signal_cellular_nodata","signal_cellular_null","signal_cellular_off","signal_cellular_pause","signal_disconnected","signal_wifi_0_bar","signal_wifi_1_bar","signal_wifi_1_bar_lock","signal_wifi_2_bar","signal_wifi_2_bar_lock","signal_wifi_3_bar","signal_wifi_3_bar_lock","signal_wifi_4_bar","signal_wifi_4_bar_lock","signal_wifi_bad","signal_wifi_connected_no_internet_0","signal_wifi_connected_no_internet_1","signal_wifi_connected_no_internet_2","signal_wifi_connected_no_internet_3","signal_wifi_connected_no_internet_4","signal_wifi_off","signal_wifi_statusbar_1_bar","signal_wifi_statusbar_2_bar","signal_wifi_statusbar_3_bar","signal_wifi_statusbar_4_bar","signal_wifi_statusbar_connected_no_internet","signal_wifi_statusbar_connected_no_internet_1","signal_wifi_statusbar_connected_no_internet_2","signal_wifi_statusbar_connected_no_internet_3","signal_wifi_statusbar_connected_no_internet_4","signal_wifi_statusbar_not_connected","signal_wifi_statusbar_null","signature","signpost","sim_card","sim_card_alert","sim_card_download","single_bed","sip","skateboarding","skeleton","skillet","skillet_cooktop","skip_next","skip_previous","skull","sledding","sleep_score","slide_library","sliders","slideshow","slow_motion_video","smart_button","smart_display","smart_outlet","smart_screen","smart_toy","smartphone","smb_share","smoke_free","smoking_rooms","sms","sms_failed","snippet_folder","snooze","snowboarding","snowing","snowing_heavy","snowmobile","snowshoeing","soap","social_distance","social_leaderboard","solar_power","sort","sort_by_alpha","sos","sound_detection_dog_barking","sound_detection_glass_break","sound_detection_loud_sound","sound_sampler","soup_kitchen","source","source_environment","source_notes","south","south_america","south_east","south_west","spa","space_bar","space_dashboard","spatial_audio","spatial_audio_off","spatial_tracking","speaker","speaker_group","speaker_notes","speaker_notes_off","speaker_phone","special_character","specific_gravity","speech_to_text","speed","speed_0_5","speed_1_2","speed_1_5","speed_2x","spellcheck","splitscreen","splitscreen_add","splitscreen_bottom","splitscreen_left","splitscreen_right","splitscreen_top","splitscreen_vertical_add","spo2","spoke","sports","sports_and_outdoors","sports_bar","sports_baseball","sports_basketball","sports_cricket","sports_esports","sports_football","sports_golf","sports_gymnastics","sports_handball","sports_hockey","sports_kabaddi","sports_martial_arts","sports_mma","sports_motorsports","sports_rugby","sports_score","sports_soccer","sports_tennis","sports_volleyball","sprinkler","sprint","square","square_foot","ssid_chart","stack","stack_off","stack_star","stacked_bar_chart","stacked_email","stacked_inbox","stacked_line_chart","stacks","stadia_controller","stadium","stairs","star","star_border","star_border_purple500","star_half","star_outline","star_purple500","star_rate","star_rate_half","stars","start","stat_0","stat_1","stat_2","stat_3","stat_minus_1","stat_minus_2","stat_minus_3","stay_current_landscape","stay_current_portrait","stay_primary_landscape","stay_primary_portrait","step","step_into","step_out","step_over","steppers","steps","stethoscope","stethoscope_arrow","stethoscope_check","sticky_note","sticky_note_2","stock_media","stockpot","stop","stop_circle","stop_screen_share","storage","store","store_mall_directory","storefront","storm","straight","straighten","strategy","stream","stream_apps","streetview","stress_management","strikethrough_s","stroke_full","stroke_partial","stroller","style","styler","stylus","stylus_laser_pointer","stylus_note","subdirectory_arrow_left","subdirectory_arrow_right","subheader","subject","subscript","subscriptions","subtitles","subtitles_off","subway","summarize","sunny","sunny_snowing","superscript","supervised_user_circle","supervised_user_circle_off","supervisor_account","support","support_agent","surfing","surgical","surround_sound","swap_calls","swap_driving_apps","swap_driving_apps_wheel","swap_horiz","swap_horizontal_circle","swap_vert","swap_vertical_circle","sweep","swipe","swipe_down","swipe_down_alt","swipe_left","swipe_left_alt","swipe_right","swipe_right_alt","swipe_up","swipe_up_alt","swipe_vertical","switch","switch_access","switch_access_2","switch_access_shortcut","switch_access_shortcut_add","switch_account","switch_camera","switch_left","switch_right","switch_video","switches","sword_rose","swords","symptoms","synagogue","sync","sync_alt","sync_disabled","sync_lock","sync_problem","sync_saved_locally","syringe","system_security_update","system_security_update_good","system_security_update_warning","system_update","system_update_alt","tab","tab_close","tab_close_right","tab_duplicate","tab_group","tab_move","tab_new_right","tab_recent","tab_unselected","table","table_bar","table_chart","table_chart_view","table_lamp","table_restaurant","table_rows","table_rows_narrow","table_view","tablet","tablet_android","tablet_mac","tabs","tactic","tag","tag_faces","takeout_dining","tamper_detection_off","tamper_detection_on","tap_and_play","tapas","target","task","task_alt","taunt","taxi_alert","team_dashboard","temp_preferences_eco","temple_buddhist","temple_hindu","tenancy","terminal","terrain","text_ad","text_decrease","text_fields","text_fields_alt","text_format","text_increase","text_rotate_up","text_rotate_vertical","text_rotation_angledown","text_rotation_angleup","text_rotation_down","text_rotation_none","text_select_end","text_select_jump_to_beginning","text_select_jump_to_end","text_select_move_back_character","text_select_move_back_word","text_select_move_down","text_select_move_forward_character","text_select_move_forward_word","text_select_move_up","text_select_start","text_snippet","text_to_speech","textsms","texture","texture_add","texture_minus","theater_comedy","theaters","thermometer","thermometer_add","thermometer_gain","thermometer_loss","thermometer_minus","thermostat","thermostat_auto","thermostat_carbon","things_to_do","thread_unread","thumb_down","thumb_down_alt","thumb_down_off_alt","thumb_up","thumb_up_alt","thumb_up_off_alt","thumbnail_bar","thumbs_up_down","thunderstorm","tibia","tibia_alt","time_auto","time_to_leave","timelapse","timeline","timer","timer_10","timer_10_alt_1","timer_10_select","timer_3","timer_3_alt_1","timer_3_select","timer_off","tips_and_updates","tire_repair","title","toast","toc","today","toggle_off","toggle_on","token","toll","tonality","toolbar","tools_flat_head","tools_installation_kit","tools_ladder","tools_level","tools_phillips","tools_pliers_wire_stripper","tools_power_drill","tooltip","top_panel_close","top_panel_open","topic","tornado","total_dissolved_solids","touch_app","touchpad_mouse","touchpad_mouse_off","tour","toys","toys_and_games","toys_fan","track_changes","traffic","trail_length","trail_length_medium","trail_length_short","train","tram","transcribe","transfer_within_a_station","transform","transgender","transit_enterexit","transition_chop","transition_dissolve","transition_fade","transition_push","transition_slide","translate","transportation","travel","travel_explore","travel_luggage_and_bags","trending_down","trending_flat","trending_up","trip","trip_origin","trolley","trophy","troubleshoot","try","tsunami","tsv","tty","tune","tungsten","turn_left","turn_right","turn_sharp_left","turn_sharp_right","turn_slight_left","turn_slight_right","turned_in","turned_in_not","tv","tv_gen","tv_guide","tv_off","tv_options_edit_channels","tv_options_input_settings","tv_remote","tv_signin","tv_with_assistant","two_pager","two_wheeler","type_specimen","u_turn_left","u_turn_right","ulna_radius","ulna_radius_alt","umbrella","unarchive","undo","unfold_less","unfold_less_double","unfold_more","unfold_more_double","ungroup","universal_currency","universal_currency_alt","universal_local","unknown_2","unknown_5","unknown_document","unknown_med","unlicense","unpublished","unsubscribe","upcoming","update","update_disabled","upgrade","upload","upload_2","upload_file","urology","usb","usb_off","user_attributes","vaccines","vacuum","valve","vape_free","vaping_rooms","variable_add","variable_insert","variable_remove","variables","ventilator","verified","verified_user","vertical_align_bottom","vertical_align_center","vertical_align_top","vertical_distribute","vertical_shades","vertical_shades_closed","vertical_split","vibration","video_call","video_camera_back","video_camera_front","video_camera_front_off","video_chat","video_file","video_label","video_library","video_search","video_settings","video_stable","videocam","videocam_off","videogame_asset","videogame_asset_off","view_agenda","view_array","view_carousel","view_column","view_column_2","view_comfy","view_comfy_alt","view_compact","view_compact_alt","view_cozy","view_day","view_headline","view_in_ar","view_in_ar_off","view_kanban","view_list","view_module","view_quilt","view_sidebar","view_stream","view_timeline","view_week","vignette","villa","visibility","visibility_lock","visibility_off","vital_signs","voice_chat","voice_over_off","voice_selection","voicemail","volcano","volume_down","volume_down_alt","volume_mute","volume_off","volume_up","volunteer_activism","voting_chip","vpn_key","vpn_key_alert","vpn_key_off","vpn_lock","vr180_create2d","vr180_create2d_off","vrpano","wall_art","wall_lamp","wallet","wallpaper","wallpaper_slideshow","ward","warehouse","warning","warning_amber","warning_off","wash","watch","watch_button_press","watch_later","watch_off","watch_screentime","watch_wake","water","water_bottle","water_bottle_large","water_damage","water_do","water_drop","water_ec","water_full","water_heater","water_lock","water_loss","water_lux","water_medium","water_orp","water_ph","water_pump","water_voc","waterfall_chart","waves","waving_hand","wb_auto","wb_cloudy","wb_incandescent","wb_iridescent","wb_shade","wb_sunny","wb_twighlight","wb_twilight","wc","weather_hail","weather_mix","weather_snowy","web","web_asset","web_asset_off","web_stories","web_traffic","webhook","weekend","weight","west","whatshot","wheelchair_pickup","where_to_vote","widgets","width","width_full","width_normal","width_wide","wifi","wifi_1_bar","wifi_2_bar","wifi_add","wifi_calling","wifi_calling_1","wifi_calling_2","wifi_calling_3","wifi_channel","wifi_find","wifi_home","wifi_lock","wifi_notification","wifi_off","wifi_password","wifi_protected_setup","wifi_proxy","wifi_tethering","wifi_tethering_error","wifi_tethering_off","wind_power","window","window_closed","window_open","window_sensor","wine_bar","woman","woman_2","work","work_alert","work_history","work_off","work_outline","work_update","workspace_premium","workspaces","workspaces_filled","workspaces_outline","wounds_injuries","wrap_text","wrist","wrong_location","wysiwyg","yard","your_trips","youtube_activity","youtube_searched_for","zone_person_alert","zone_person_idle","zone_person_urgent","zoom_in","zoom_in_map","zoom_out","zoom_out_map"]'), jr = { class: "settings-container" }, Gr = ["onClick"], zr = { class: "settings-container" }, $r = /* @__PURE__ */ Tt({
  __name: "IconWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(_) {
    const e = wt("i18n"), t = (m) => e ? e.t(m) : m, s = we({
      /* The picker opens first: choosing the symbol is what you came for */
      pickerSection: !0,
      widgetSection: !1,
      storeSection: !1
    }), r = vt(_, "modelValue"), i = we(
      JSON.parse(localStorage.getItem("isDarkTheme") || "false")
    ), a = we([]), l = we(""), c = he(() => a.value.filter(
      (m) => m.toLowerCase().includes(l.value.toLowerCase())
    )), u = (m) => {
      m && (r.value.currentIcon = m);
    };
    St(() => {
      a.value = Ur;
    }), cs(() => r.value, (m) => {
      m && (m.iconColor instanceof Ce || (m.iconColor = us(new Ce(m.iconColor || "#000000"))));
    }, { immediate: !0, deep: !0 });
    const p = he(() => i.value ? "#ffffff" : ""), g = he(() => 'font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 100, "opsz" 48;');
    return (m, y) => {
      const S = ye("va-input"), R = ye("va-collapse"), U = ye("va-checkbox"), F = ye("va-color-input"), j = ye("va-slider");
      return Ie(), Se(qe, null, [
        Z(R, {
          modelValue: s.value.pickerSection,
          "onUpdate:modelValue": y[1] || (y[1] = (N) => s.value.pickerSection = N),
          icon: "search",
          header: "Symbol wählen"
        }, {
          default: Ue(() => [
            de("div", jr, [
              Z(S, {
                modelValue: l.value,
                "onUpdate:modelValue": y[0] || (y[0] = (N) => l.value = N),
                placeholder: "Search icon...",
                label: t("icon:IconWidget.iconSearch")
              }, null, 8, ["modelValue", "label"]),
              de("div", {
                class: "icons-container",
                style: _s(g.value)
              }, [
                (Ie(!0), Se(qe, null, hs(c.value, (N) => (Ie(), Se("span", {
                  key: N,
                  onClick: ($) => u(N),
                  class: ds(["material-symbols-outlined", { "active-icon": N === r.value.currentIcon }])
                }, It(N), 11, Gr))), 128))
              ], 4)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        Z(R, {
          modelValue: s.value.widgetSection,
          "onUpdate:modelValue": y[8] || (y[8] = (N) => s.value.widgetSection = N),
          icon: "settings",
          header: t("IconWidget.title")
        }, {
          default: Ue(() => [
            de("div", zr, [
              Z(U, {
                modelValue: r.value.isIconFilled,
                "onUpdate:modelValue": y[2] || (y[2] = (N) => r.value.isIconFilled = N),
                label: t("icon:IconWidget.iconFilled")
              }, null, 8, ["modelValue", "label"]),
              Z($e(ps), {
                modelValue: r.value.iconColor,
                "onUpdate:modelValue": y[3] || (y[3] = (N) => r.value.iconColor = N),
                label: t("icon:IconWidget.iconColor")
              }, {
                default: Ue(({ value: N, change: $ }) => [
                  Z(F, {
                    "model-value": N,
                    onInput: $,
                    label: t("icon:IconWidget.iconColor")
                  }, null, 8, ["model-value", "onInput", "label"])
                ]),
                _: 1
              }, 8, ["modelValue", "label"]),
              Z(j, {
                class: "slider",
                modelValue: r.value.iconSize,
                "onUpdate:modelValue": y[4] || (y[4] = (N) => r.value.iconSize = N),
                "label-color": p.value,
                "track-label-visible": "",
                min: 10,
                max: 1e3,
                step: 10,
                label: t("icon:IconWidget.iconSize")
              }, null, 8, ["modelValue", "label-color", "label"]),
              Z(j, {
                class: "slider",
                modelValue: r.value.strokeWeight,
                "onUpdate:modelValue": y[5] || (y[5] = (N) => r.value.strokeWeight = N),
                "label-color": p.value,
                "track-label-visible": "",
                min: 100,
                max: 700,
                step: 100,
                label: t("icon:IconWidget.strokeWeight")
              }, null, 8, ["modelValue", "label-color", "label"]),
              Z(j, {
                class: "slider",
                modelValue: r.value.opticSize,
                "onUpdate:modelValue": y[6] || (y[6] = (N) => r.value.opticSize = N),
                "label-color": p.value,
                "track-label-visible": "",
                min: 20,
                max: 48,
                label: t("icon:IconWidget.opticSize")
              }, null, 8, ["modelValue", "label-color", "label"]),
              Z(j, {
                class: "slider",
                modelValue: r.value.grade,
                "onUpdate:modelValue": y[7] || (y[7] = (N) => r.value.grade = N),
                "label-color": p.value,
                "track-label-visible": "",
                min: -25,
                max: 200,
                step: 15,
                label: t("icon:IconWidget.grade")
              }, null, 8, ["modelValue", "label-color", "label"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "header"])
      ], 64);
    };
  }
}), Ct = /* @__PURE__ */ $t($r, [["__scopeId", "data-v-53b4981a"]]), qr = [
  {
    name: "Icon Clicked",
    type: "click",
    description: "Triggered when the icon is clicked",
    payloadType: te
  },
  {
    name: "Icon Right Clicked",
    type: "right_click",
    description: "Triggered when the icon is right-clicked",
    payloadType: se
  }
];
var Wr = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, Qe = (_, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Xr(e, t) : e, i = _.length - 1, a; i >= 0; i--)
    (a = _[i]) && (r = (s ? a(e, t, r) : a(r)) || r);
  return s && r && Wr(e, t, r), r;
}, Yr = (_, e) => (t, s) => e(t, s, _);
const ke = "IconWidget";
let Re = class {
  constructor(_) {
    this.events = _;
  }
  type = ke;
  component = bt;
  settingsComponent = Ct;
  supportedDSTypes = [];
  icon = ys;
  name = "Icon";
  register() {
    this.events.registerWidget(ke, qr), rs().register(
      "org.eclipse.daanse.board.app.ui.vue.widget.icon",
      { IconWidget: bt, IconWidgetSettings: Ct },
      "0.0.1-next.1",
      "ui.vue.widget.icon"
    );
  }
  unregister() {
    this.events.unregisterWidget(ke);
  }
};
Qe([
  Jt()
], Re.prototype, "register", 1);
Qe([
  es()
], Re.prototype, "unregister", 1);
Re = Qe([
  ts({
    service: [ms],
    properties: { "widget.type": ke }
  }),
  Yr(0, ss(Qt))
], Re);
export {
  bt as IconWidget,
  Re as IconWidgetProvider,
  Ct as IconWidgetSettings
};
