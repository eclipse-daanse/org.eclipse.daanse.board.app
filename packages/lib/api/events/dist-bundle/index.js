const { serviceId: ye } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ot = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2024 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
-->
<ecore:EPackage xmi:version="2.0"
                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="Events"
                nsURI="http://org.eclipse.daanse.board.app.lib.events" nsPrefix="Events">

    <!-- Abstract Base Payload -->
    <eClassifiers xsi:type="ecore:EClass" name="Payload" abstract="true">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all event payloads."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="eventType" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Type of the event (e.g., 'click_on_thing', 'click_on_datastream')."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="widgetId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="ID of the widget that emitted this event."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="timestamp" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//ELong">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Unix timestamp when the event was emitted."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="metadata" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional metadata object for additional context."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <!-- Abstract Widget Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="WidgetActionInterface" abstract="true">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all widget action interfaces. Widget-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

    <!-- Abstract System Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="SystemActionInterface" abstract="true" eSuperTypes="#//WidgetActionInterface">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all system-level action interfaces. System-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

    <!-- Abstract Page Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="PageActionInterface" abstract="true" eSuperTypes="#//WidgetActionInterface">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all page-level action interfaces. Page-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

</ecore:EPackage>`;
function Z(g) {
  return g && typeof g.eProxyURI == "function" && typeof g.eSetProxyURI == "function";
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
}, ke = -1, wt = -1;
class de {
  constructor(e, t, s, r, n, a = ke, u = !0) {
    this.notifier = e, this.eventType = t, this.feature = s, this.featureID = wt, this.oldValue = r, this.newValue = n, this.position = a, this.wasSetFlag = u;
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
const Pe = /^(?:0|[1-9]\d*)$/, at = Symbol.for("emfts.indexedList"), ot = {
  get(g, e, t) {
    if (e === at)
      return !0;
    if (typeof e == "string" && Pe.test(e)) {
      const s = Number(e), r = g.data;
      return r !== void 0 ? r[s] : s < g.size() ? g.get(s) : void 0;
    }
    return Reflect.get(g, e, t);
  },
  set(g, e, t, s) {
    if (e === "length") {
      const r = typeof t == "number" ? t : parseInt(t, 10);
      if (isNaN(r) || r < 0)
        throw new RangeError(`Invalid list length: ${String(t)}`);
      if (r === 0)
        g.clear();
      else
        for (; g.size() > r; )
          g.removeAt(g.size() - 1);
      return !0;
    }
    if (typeof e == "string" && Pe.test(e)) {
      const r = Number(e), n = g.size();
      if (r < n)
        g.set(r, t);
      else if (r === n)
        g.add(t);
      else
        throw new RangeError(`Index ${r} out of bounds for list of size ${n}. ELists do not support sparse assignment - use add() or push().`);
      return !0;
    }
    return Reflect.set(g, e, t, s);
  },
  has(g, e) {
    return typeof e == "string" && Pe.test(e) ? Number(e) < g.size() : Reflect.has(g, e);
  }
};
class te {
  constructor(e = null, t = null) {
    return this.data = [], this.owner = e, this.feature = t, new Proxy(this, ot);
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
    const r = e < 0 ? Math.max(this.data.length + e, 0) : Math.min(e, this.data.length), n = t === void 0 ? this.data.length - r : Math.min(Math.max(t, 0), this.data.length - r), a = [];
    for (let u = 0; u < n; u++)
      r < this.data.length && a.push(this.removeAt(r));
    for (let u = 0; u < s.length; u++)
      this.addAt(r + u, s[u]);
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
      Array.isArray(s) ? t.push(...s) : s instanceof te ? t.push(...s.data) : t.push(s);
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
    e.length === 1 ? this.dispatchNotification(N.REMOVE, e[0], null, 0) : this.dispatchNotification(N.REMOVE_MANY, e, null, ke);
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
    const a = new de(this.owner, e, n, t, s, r);
    "eNotify" in this.owner && this.owner.eNotify(a);
  }
}
class Be extends te {
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
class kt extends Be {
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
class Bt extends te {
  constructor(e, t) {
    super(e, t);
  }
  get(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    let t = this.data[e];
    if (t && Z(t) && t.eIsProxy() && this.owner && "eResolveProxy" in this.owner) {
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
function j(g) {
  return g && typeof g.add == "function" && typeof g.size == "function" && typeof g.get == "function";
}
function ee(g) {
  return g[at] ? g : new Proxy(g, ot);
}
function Mt(g, e) {
  return ee(new Be(g, e));
}
function Lt(g, e) {
  return ee(new Bt(g, e));
}
function Ut(g, e) {
  return ee(new te(g, e));
}
class jt extends te {
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
    e.length === 1 ? this.dispatchResourceNotification(N.REMOVE, e[0], null, 0) : e.length > 1 && this.dispatchResourceNotification(N.REMOVE_MANY, e, null, ke);
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
    const n = { getName: () => "contents" }, a = new de(this.resource, e, n, t, s, r);
    "eNotify" in this.resource && this.resource.eNotify(a);
  }
}
function Gt(g) {
  return ee(new jt(g));
}
var Q;
(function(g) {
  g.INSTANCE = Xt();
})(Q || (Q = {}));
function ut(g, e) {
  for (const t of e.getESubpackages()) {
    const s = t.getNsURI();
    s && g.set(s, t), ut(g, t);
  }
}
function $t(g) {
  const e = g.getNsURI();
  if (!e)
    throw new Error(`Cannot register package '${g.getName() ?? "<unnamed>"}': it has no nsURI.`);
  return e;
}
function Xt() {
  const g = /* @__PURE__ */ new Map();
  return {
    getEPackage(e) {
      const t = g.get(e);
      return t ? "getEPackage" in t ? t.getEPackage() : t : null;
    },
    getEFactory(e) {
      const t = g.get(e);
      return t ? "getEFactory" in t ? t.getEFactory() : t.getEFactoryInstance() : null;
    },
    get(e) {
      return g.get(e) || null;
    },
    set(e, t) {
      g.set(e, t), "getEPackage" in t || ut(g, t);
    },
    registerPackage(e) {
      this.set($t(e), e);
    },
    delete(e) {
      return g.delete(e);
    },
    has(e) {
      return g.has(e);
    },
    keys() {
      return g.keys();
    },
    values() {
      return g.values();
    }
  };
}
class C {
  constructor(e, t, s, r, n) {
    this._scheme = e, this._authority = t, this._path = s, this._query = r, this._fragment = n;
  }
  /**
   * Creates a URI from a string.
   */
  static createURI(e) {
    if (!e)
      return new C(null, null, "", null, null);
    let t = null, s = null, r = null, n = null, a = null, u = 0;
    e.length;
    const c = e.indexOf("#");
    c >= 0 && (a = e.substring(c + 1), e = e.substring(0, c));
    const l = e.indexOf("?");
    l >= 0 && (n = e.substring(l + 1), e = e.substring(0, l));
    const m = e.indexOf(":");
    if (m > 0) {
      let p = !0;
      for (let E = 0; E < m; E++)
        if (e.charAt(E) === "/") {
          p = !1;
          break;
        }
      p && (t = e.substring(0, m), u = m + 1);
    }
    if (e.startsWith("//", u)) {
      const p = u + 2;
      let E = p;
      for (; E < e.length && e.charAt(E) !== "/"; )
        E++;
      s = e.substring(p, E), u = E;
    }
    return u < e.length ? r = e.substring(u) : s !== null && (r = ""), new C(t, s, r, n, a);
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
    const t = this._path.split("/").filter((n) => n.length > 0), s = t.slice(0, Math.max(0, t.length - e));
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
    let t = e._scheme, s = this._authority, r = this._path, n = this._query;
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
      n = this._query !== null ? this._query : e._query;
    } else
      r.startsWith("/") || (r = this.mergePaths(e._path, r), r = this.removeDotSegments(r));
    return new C(t, s, r, n, this._fragment);
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
    const r = t.split("/"), n = s.split("/");
    let a = 0;
    const u = Math.min(r.length, n.length);
    for (let E = 0; E < u - 1 && r[E] === n[E]; E++)
      a++;
    const c = n.length - a - 1, l = t.includes("/./") || t.includes("/../") || t.endsWith("/.") || t.endsWith("/..");
    if (t.startsWith("/") && (c >= 3 || l && c > 0))
      return new C(null, null, t, this._query, this._fragment);
    const m = [];
    for (let E = 0; E < c; E++)
      m.push("..");
    for (let E = a; E < r.length; E++)
      m.push(r[E]);
    let p = m.join("/");
    return p === "" && t.endsWith("/") && (p = "./"), new C(null, null, p, this._query, this._fragment);
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
      const a = s[n];
      a === ".." ? t.length > 0 && t[t.length - 1] !== "" && t.pop() : a !== "." && !(a === "" && n > 0 && n < s.length - 1) && t.push(a);
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
function Yt(g) {
  return "unsetTarget" in g && typeof g.unsetTarget == "function";
}
class W {
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
        if (Array.isArray(n) || j(n))
          for (const a of n)
            e.push(a);
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
    const n = t.toString(), a = n.indexOf("#");
    if (a > 0) {
      const u = n.substring(0, a), c = n.substring(a + 1);
      let l;
      const m = s.getURI();
      m && !u.includes("://") ? l = m.resolve(C.createURI(u)) : l = C.createURI(u);
      const p = r.getResource(l, !0);
      if (p) {
        const S = p.getEObject(c);
        if (S)
          return S;
      }
      const E = r.getPackageRegistry(), T = this.resolveFragmentViaPackageRegistry(E, u, c, r);
      if (T)
        return T;
    } else if (a === 0) {
      const u = n.substring(1), c = s.getEObject(u);
      if (c)
        return c;
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
      const l = this.resolveFragmentInPackage(n, s);
      if (l)
        return l;
    }
    let a = t;
    const u = a.lastIndexOf("/");
    u >= 0 && (a = a.substring(u + 1));
    const c = a.indexOf(".");
    if (c > 0 && (a = a.substring(0, c)), a)
      for (const l of e.keys()) {
        const m = e.getEPackage(l);
        if (m && m.getName() === a) {
          const p = this.resolveFragmentInPackage(m, s);
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
    for (let c = 0; c < r.length - 1; c++) {
      const l = n.getESubpackages();
      let m = null;
      for (let p = 0; p < l.length; p++)
        if (l.get(p).getName() === r[c]) {
          m = l.get(p);
          break;
        }
      if (!m)
        return null;
      n = m;
    }
    const a = r[r.length - 1];
    return n.getEClassifier(a) ?? null;
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
        const s = new de(this, N.REMOVING_ADAPTER, null, e, null);
        e.notifyChanged(s);
      }
      return this._eAdapters.splice(t, 1), Yt(e) ? e.unsetTarget(this) : e.setTarget(null), !0;
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
          if (Array.isArray(n) || j(n))
            for (const a of n)
              e.push(a);
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
          for (const a of t)
            a && "eSetContainer" in a && a.eSetContainer(this, n);
        else
          t.eSetContainer(this, n);
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const n = new de(this, N.SET, e, r, t);
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
      const r = new de(this, N.UNSET, e, s, e.getDefaultValue());
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
class ct extends W {
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
      if (!e.isMany() && r && Z(r) && r.eIsProxy()) {
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
        n.isContainment() ? r = Mt(this, n) : r = Lt(this, n);
      } else
        r = Ut(this, e);
      return this.eSettings.set(t, r), r;
    }
    const s = e.getDefaultValue();
    return s !== void 0 ? s : null;
  }
}
class Wt extends Be {
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
class zt {
  constructor(e, t, s) {
    this.mapIndex = null, this._owner = e, this.entryEClass = s, this.delegateList = new Wt(e, t, this);
    const r = s.getEStructuralFeature("key"), n = s.getEStructuralFeature("value");
    if (!r || !n)
      throw new Error(`Entry EClass '${s.getName()}' must have 'key' and 'value' features`);
    return this.keyFeature = r, this.valueFeature = n, ee(this);
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
    let a;
    n && n.getEFactoryInstance() ? a = n.getEFactoryInstance().create(this.entryEClass) : a = new ct(this.entryEClass), a.eSet(this.keyFeature, e), a.eSet(this.valueFeature, t), this.delegateList.add(a);
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
function qt(g, e, t) {
  return new zt(g, e, t);
}
var Te;
(function(g) {
  g.INSTANCE_FACTORY_REGISTRY = Kt();
})(Te || (Te = {}));
function Kt() {
  const g = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return {
    getFactory(s) {
      const r = s.scheme();
      if (r && e.has(r))
        return e.get(r);
      const n = s.fileExtension();
      return n && g.has(n) ? g.get(n) : null;
    },
    getExtensionToFactoryMap() {
      return g;
    },
    getProtocolToFactoryMap() {
      return e;
    },
    getContentTypeToFactoryMap() {
      return t;
    }
  };
}
class lt {
  constructor(e) {
    this.resourceSet = null, this.loaded = !1, this.modified = !1, this.errors = [], this.warnings = [], this._eAdapters = [], this._eDeliver = !0, this.uri = e || null, this.contents = Gt(this);
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
      let n = null, a = 0;
      if (s && (n = this.contents.size() > 0 ? this.contents.get(0) : null, !n || (r[0].startsWith("@") ? n = this.eObjectForURIFragmentSegment(n, r[0]) : n = this.findByNameInContents(n, r[0]), a = 1, !n)))
        return null;
      for (let u = a; u < r.length; u++) {
        const c = r[u], l = parseInt(c, 10);
        if (n === null ? isNaN(l) ? (n = this.findByName(this.contents.toArray(), c), !n && this.contents.size() > 0 && (n = this.findByNameInContents(this.contents.get(0), c))) : n = l < this.contents.size() ? this.contents.get(l) : null : isNaN(l) ? n = this.navigateByNameOrFeature(n, c) : n = n.eContents()[l] || null, !n)
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
    const a = e.eClass().getEStructuralFeature(t);
    if (a) {
      const u = e.eGet(a);
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
    let a, u = -1;
    if (n >= "0" && n <= "9") {
      const m = s.lastIndexOf(".");
      if (m > 0) {
        const p = parseInt(s.substring(m + 1), 10);
        isNaN(p) ? a = s : (a = s.substring(0, m), u = p);
      } else
        a = s;
    } else
      a = s;
    const c = r.getEStructuralFeature(a);
    if (!c)
      return null;
    const l = e.eGet(c);
    return l == null ? null : u >= 0 ? Array.isArray(l) ? l[u] ?? null : typeof l == "object" && "get" in l && typeof l.get == "function" ? l.get(u) ?? null : null : typeof l == "object" && "eClass" in l ? l : null;
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
      const n = e.eGet(r);
      n != null && (r.isMany() && Array.isArray(n) ? s[r.getName()] = n.map((a) => typeof a == "object" && "eClass" in a ? this.serializeObject(a) : a) : s[r.getName()] = typeof n == "object" && "eClass" in n ? this.serializeObject(n) : n);
    }
    return s;
  }
}
function Ht(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function Qt(g) {
  if (Object.prototype.hasOwnProperty.call(g, "__esModule")) return g;
  var e = g.default;
  if (typeof e == "function") {
    var t = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(g).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(g, s);
    Object.defineProperty(t, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return g[s];
      }
    });
  }), t;
}
var Fe = {};
const Jt = {}, Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jt
}, Symbol.toStringTag, { value: "Module" })), Zt = /* @__PURE__ */ Qt(Vt);
var ze;
function es() {
  return ze || (ze = 1, (function(g) {
    (function(e) {
      e.parser = function(o, i) {
        return new s(o, i);
      }, e.SAXParser = s, e.SAXStream = p, e.createStream = l, e.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function s(o, i) {
        if (!(this instanceof s))
          return new s(o, i);
        var d = this;
        n(d), d.q = d.c = "", d.bufferCheckPosition = e.MAX_BUFFER_LENGTH, d.encoding = null, d.opt = i || {}, d.opt.lowercase = d.opt.lowercase || d.opt.lowercasetags, d.looseCase = d.opt.lowercase ? "toLowerCase" : "toUpperCase", d.opt.maxEntityCount = d.opt.maxEntityCount || 512, d.opt.maxEntityDepth = d.opt.maxEntityDepth || 4, d.entityCount = d.entityDepth = 0, d.tags = [], d.closed = d.closedRoot = d.sawRoot = !1, d.tag = d.error = null, d.strict = !!o, d.noscript = !!(o || d.opt.noscript), d.state = f.BEGIN, d.strictEntities = d.opt.strictEntities, d.ENTITIES = d.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), d.attribList = [], d.opt.xmlns && (d.ns = Object.create(U)), d.opt.unquotedAttributeValues === void 0 && (d.opt.unquotedAttributeValues = !o), d.trackPosition = d.opt.position !== !1, d.trackPosition && (d.position = d.line = d.column = 0), he(d, "onready");
      }
      Object.create || (Object.create = function(o) {
        function i() {
        }
        i.prototype = o;
        var d = new i();
        return d;
      }), Object.keys || (Object.keys = function(o) {
        var i = [];
        for (var d in o) o.hasOwnProperty(d) && i.push(d);
        return i;
      });
      function r(o) {
        for (var i = Math.max(e.MAX_BUFFER_LENGTH, 10), d = 0, h = 0, A = t.length; h < A; h++) {
          var w = o[t[h]].length;
          if (w > i)
            switch (t[h]) {
              case "textNode":
                ge(o);
                break;
              case "cdata":
                k(o, "oncdata", o.cdata), o.cdata = "";
                break;
              case "script":
                k(o, "onscript", o.script), o.script = "";
                break;
              default:
                se(o, "Max buffer length exceeded: " + t[h]);
            }
          d = Math.max(d, w);
        }
        var M = e.MAX_BUFFER_LENGTH - d;
        o.bufferCheckPosition = M + o.position;
      }
      function n(o) {
        for (var i = 0, d = t.length; i < d; i++)
          o[t[i]] = "";
      }
      function a(o) {
        ge(o), o.cdata !== "" && (k(o, "oncdata", o.cdata), o.cdata = ""), o.script !== "" && (k(o, "onscript", o.script), o.script = "");
      }
      s.prototype = {
        end: function() {
          $e(this);
        },
        write: xt,
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
      var u;
      try {
        u = Zt.Stream;
      } catch {
        u = function() {
        };
      }
      u || (u = function() {
      });
      var c = e.EVENTS.filter(function(o) {
        return o !== "error" && o !== "end";
      });
      function l(o, i) {
        return new p(o, i);
      }
      function m(o, i) {
        if (o.length >= 2) {
          if (o[0] === 255 && o[1] === 254)
            return "utf-16le";
          if (o[0] === 254 && o[1] === 255)
            return "utf-16be";
        }
        return o.length >= 3 && o[0] === 239 && o[1] === 187 && o[2] === 191 ? "utf8" : o.length >= 4 ? o[0] === 60 && o[1] === 0 && o[2] === 63 && o[3] === 0 ? "utf-16le" : o[0] === 0 && o[1] === 60 && o[2] === 0 && o[3] === 63 ? "utf-16be" : "utf8" : i ? "utf8" : null;
      }
      function p(o, i) {
        if (!(this instanceof p))
          return new p(o, i);
        u.apply(this), this._parser = new s(o, i), this.writable = !0, this.readable = !0;
        var d = this;
        this._parser.onend = function() {
          d.emit("end");
        }, this._parser.onerror = function(h) {
          d.emit("error", h), d._parser.error = null;
        }, this._decoder = null, this._decoderBuffer = null, c.forEach(function(h) {
          Object.defineProperty(d, "on" + h, {
            get: function() {
              return d._parser["on" + h];
            },
            set: function(A) {
              if (!A)
                return d.removeAllListeners(h), d._parser["on" + h] = A, A;
              d.on(h, A);
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
      }), p.prototype._decodeBuffer = function(o, i) {
        if (this._decoderBuffer && (o = Buffer.concat([this._decoderBuffer, o]), this._decoderBuffer = null), !this._decoder) {
          var d = m(o, i);
          if (!d)
            return this._decoderBuffer = o, "";
          this._parser.encoding = d, this._decoder = new TextDecoder(d);
        }
        return this._decoder.decode(o, { stream: !i });
      }, p.prototype.write = function(o) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(o))
          o = this._decodeBuffer(o, !1);
        else if (this._decoderBuffer) {
          var i = this._decodeBuffer(Buffer.alloc(0), !0);
          i && (this._parser.write(i), this.emit("data", i));
        }
        return this._parser.write(o.toString()), this.emit("data", o), !0;
      }, p.prototype.end = function(o) {
        if (o && o.length && this.write(o), this._decoderBuffer) {
          var i = this._decodeBuffer(Buffer.alloc(0), !0);
          i && (this._parser.write(i), this.emit("data", i));
        } else if (this._decoder) {
          var d = this._decoder.decode();
          d && (this._parser.write(d), this.emit("data", d));
        }
        return this._parser.end(), !0;
      }, p.prototype.on = function(o, i) {
        var d = this;
        return !d._parser["on" + o] && c.indexOf(o) !== -1 && (d._parser["on" + o] = function() {
          var h = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          h.splice(0, 0, o), d.emit.apply(d, h);
        }), u.prototype.on.call(d, o, i);
      };
      var E = /^\[CDATA\[$/i, T = /^DOCTYPE$/i, S = "http://www.w3.org/XML/1998/namespace", O = "http://www.w3.org/2000/xmlns/", U = { xml: S, xmlns: O }, B = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, z = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, K = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, q = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function F(o) {
        return o === " " || o === `
` || o === "\r" || o === "	";
      }
      function X(o) {
        return o === '"' || o === "'";
      }
      function le(o) {
        return o === ">" || F(o);
      }
      function Y(o, i) {
        return o.test(i);
      }
      function ne(o, i) {
        return !Y(o, i);
      }
      var f = 0;
      e.STATE = {
        BEGIN: f++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: f++,
        // leading whitespace
        TEXT: f++,
        // general stuff
        TEXT_ENTITY: f++,
        // &amp and such.
        OPEN_WAKA: f++,
        // <
        SGML_DECL: f++,
        // <!BLARG
        SGML_DECL_QUOTED: f++,
        // <!BLARG foo "bar
        DOCTYPE: f++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: f++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: f++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: f++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: f++,
        // <!-
        COMMENT: f++,
        // <!--
        COMMENT_ENDING: f++,
        // <!-- blah -
        COMMENT_ENDED: f++,
        // <!-- blah --
        CDATA: f++,
        // <![CDATA[ something
        CDATA_ENDING: f++,
        // ]
        CDATA_ENDING_2: f++,
        // ]]
        PROC_INST: f++,
        // <?hi
        PROC_INST_BODY: f++,
        // <?hi there
        PROC_INST_ENDING: f++,
        // <?hi "there" ?
        OPEN_TAG: f++,
        // <strong
        OPEN_TAG_SLASH: f++,
        // <strong /
        ATTRIB: f++,
        // <a
        ATTRIB_NAME: f++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: f++,
        // <a foo _
        ATTRIB_VALUE: f++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: f++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: f++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: f++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: f++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: f++,
        // <foo bar=&quot
        CLOSE_TAG: f++,
        // </a
        CLOSE_TAG_SAW_WHITE: f++,
        // </a   >
        SCRIPT: f++,
        // <script> ...
        SCRIPT_ENDING: f++
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
        var i = e.ENTITIES[o], d = typeof i == "number" ? String.fromCharCode(i) : i;
        e.ENTITIES[o] = d;
      });
      for (var Ue in e.STATE)
        e.STATE[e.STATE[Ue]] = Ue;
      f = e.STATE;
      function he(o, i, d) {
        o[i] && o[i](d);
      }
      function It(o) {
        var i = o && o.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
        return i ? i[2] : null;
      }
      function je(o) {
        return o ? o.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
      }
      function bt(o, i) {
        const d = je(o), h = je(i);
        return !d || !h ? !0 : h === "utf16" ? d === "utf16le" || d === "utf16be" : d === h;
      }
      function Dt(o, i) {
        if (!(!o.strict || !o.encoding || !i || i.name !== "xml")) {
          var d = It(i.body);
          d && !bt(o.encoding, d) && I(
            o,
            "XML declaration encoding " + d + " does not match detected stream encoding " + o.encoding.toUpperCase()
          );
        }
      }
      function k(o, i, d) {
        o.textNode && ge(o), he(o, i, d);
      }
      function ge(o) {
        o.textNode = Ge(o.opt, o.textNode), o.textNode && he(o, "ontext", o.textNode), o.textNode = "";
      }
      function Ge(o, i) {
        return o.trim && (i = i.trim()), o.normalize && (i = i.replace(/\s+/g, " ")), i;
      }
      function se(o, i) {
        return ge(o), o.trackPosition && (i += `
Line: ` + o.line + `
Column: ` + o.column + `
Char: ` + o.c), i = new Error(i), o.error = i, he(o, "onerror", i), o;
      }
      function $e(o) {
        return o.sawRoot && !o.closedRoot && I(o, "Unclosed root tag"), o.state !== f.BEGIN && o.state !== f.BEGIN_WHITESPACE && o.state !== f.TEXT && se(o, "Unexpected end"), ge(o), o.c = "", o.closed = !0, he(o, "onend"), s.call(o, o.strict, o.opt), o;
      }
      function I(o, i) {
        if (typeof o != "object" || !(o instanceof s))
          throw new Error("bad call to strictFail");
        o.strict && se(o, i);
      }
      function Rt(o) {
        o.strict || (o.tagName = o.tagName[o.looseCase]());
        var i = o.tags[o.tags.length - 1] || o, d = o.tag = { name: o.tagName, attributes: {} };
        o.opt.xmlns && (d.ns = i.ns), o.attribList.length = 0, k(o, "onopentagstart", d);
      }
      function Ae(o, i) {
        var d = o.indexOf(":"), h = d < 0 ? ["", o] : o.split(":"), A = h[0], w = h[1];
        return i && o === "xmlns" && (A = "xmlns", w = ""), { prefix: A, local: w };
      }
      function Ie(o) {
        if (o.strict || (o.attribName = o.attribName[o.looseCase]()), o.attribList.indexOf(o.attribName) !== -1 || o.tag.attributes.hasOwnProperty(o.attribName)) {
          o.attribName = o.attribValue = "";
          return;
        }
        if (o.opt.xmlns) {
          var i = Ae(o.attribName, !0), d = i.prefix, h = i.local;
          if (d === "xmlns")
            if (h === "xml" && o.attribValue !== S)
              I(
                o,
                "xml: prefix must be bound to " + S + `
Actual: ` + o.attribValue
              );
            else if (h === "xmlns" && o.attribValue !== O)
              I(
                o,
                "xmlns: prefix must be bound to " + O + `
Actual: ` + o.attribValue
              );
            else {
              var A = o.tag, w = o.tags[o.tags.length - 1] || o;
              A.ns === w.ns && (A.ns = Object.create(w.ns)), A.ns[h] = o.attribValue;
            }
          o.attribList.push([o.attribName, o.attribValue]);
        } else
          o.tag.attributes[o.attribName] = o.attribValue, k(o, "onattribute", {
            name: o.attribName,
            value: o.attribValue
          });
        o.attribName = o.attribValue = "";
      }
      function re(o, i) {
        if (o.opt.xmlns) {
          var d = o.tag, h = Ae(o.tagName);
          d.prefix = h.prefix, d.local = h.local, d.uri = d.ns[h.prefix] || "", d.prefix && !d.uri && (I(
            o,
            "Unbound namespace prefix: " + JSON.stringify(o.tagName)
          ), d.uri = h.prefix);
          var A = o.tags[o.tags.length - 1] || o;
          d.ns && A.ns !== d.ns && Object.keys(d.ns).forEach(function(We) {
            k(o, "onopennamespace", {
              prefix: We,
              uri: d.ns[We]
            });
          });
          for (var w = 0, M = o.attribList.length; w < M; w++) {
            var G = o.attribList[w], $ = G[0], J = G[1], L = Ae($, !0), V = L.prefix, vt = L.local, Ye = V === "" ? "" : d.ns[V] || "", Re = {
              name: $,
              value: J,
              prefix: V,
              local: vt,
              uri: Ye
            };
            V && V !== "xmlns" && !Ye && (I(
              o,
              "Unbound namespace prefix: " + JSON.stringify(V)
            ), Re.uri = V), o.tag.attributes[$] = Re, k(o, "onattribute", Re);
          }
          o.attribList.length = 0;
        }
        o.tag.isSelfClosing = !!i, o.sawRoot = !0, o.tags.push(o.tag), k(o, "onopentag", o.tag), i || (!o.noscript && o.tagName.toLowerCase() === "script" ? o.state = f.SCRIPT : o.state = f.TEXT, o.tag = null, o.tagName = ""), o.attribName = o.attribValue = "", o.attribList.length = 0;
      }
      function be(o) {
        if (!o.tagName) {
          I(o, "Weird empty close tag."), o.textNode += "</>", o.state = f.TEXT;
          return;
        }
        if (o.script) {
          if (o.tagName !== "script") {
            o.script += "</" + o.tagName + ">", o.tagName = "", o.state = f.SCRIPT;
            return;
          }
          k(o, "onscript", o.script), o.script = "";
        }
        var i = o.tags.length, d = o.tagName;
        o.strict || (d = d[o.looseCase]());
        for (var h = d; i--; ) {
          var A = o.tags[i];
          if (A.name !== h)
            I(o, "Unexpected close tag");
          else
            break;
        }
        if (i < 0) {
          I(o, "Unmatched closing tag: " + o.tagName), o.textNode += "</" + o.tagName + ">", o.state = f.TEXT;
          return;
        }
        o.tagName = d;
        for (var w = o.tags.length; w-- > i; ) {
          var M = o.tag = o.tags.pop();
          o.tagName = o.tag.name, k(o, "onclosetag", o.tagName);
          var G = {};
          for (var $ in M.ns)
            G[$] = M.ns[$];
          var J = o.tags[o.tags.length - 1] || o;
          o.opt.xmlns && M.ns !== J.ns && Object.keys(M.ns).forEach(function(L) {
            var V = M.ns[L];
            k(o, "onclosenamespace", { prefix: L, uri: V });
          });
        }
        i === 0 && (o.closedRoot = !0), o.tagName = o.attribValue = o.attribName = "", o.attribList.length = 0, o.state = f.TEXT;
      }
      function Pt(o) {
        var i = o.entity, d = i.toLowerCase(), h, A = "";
        return o.ENTITIES[i] ? o.ENTITIES[i] : o.ENTITIES[d] ? o.ENTITIES[d] : (i = d, i.charAt(0) === "#" && (i.charAt(1) === "x" ? (i = i.slice(2), h = parseInt(i, 16), A = h.toString(16)) : (i = i.slice(1), h = parseInt(i, 10), A = h.toString(10))), i = i.replace(/^0+/, ""), isNaN(h) || A.toLowerCase() !== i || h < 0 || h > 1114111 || !Ft(h) ? (I(o, "Invalid character entity"), "&" + o.entity + ";") : String.fromCodePoint(h));
      }
      function Ft(o) {
        return o === 9 || o === 10 || o === 13 || o >= 32 && o <= 55295 || o >= 57344 && o <= 65533 || o >= 65536 && o <= 1114111;
      }
      function Xe(o, i) {
        i === "<" ? (o.state = f.OPEN_WAKA, o.startTagPosition = o.position) : F(i) || (I(o, "Non-whitespace before first tag."), o.textNode = i, o.state = f.TEXT);
      }
      function De(o, i) {
        var d = "";
        return i < o.length && (d = o.charAt(i)), d;
      }
      function xt(o) {
        var i = this;
        if (this.error)
          throw this.error;
        if (i.closed)
          return se(
            i,
            "Cannot write after close. Assign an onready handler."
          );
        if (o === null)
          return $e(i);
        typeof o == "object" && (o = o.toString());
        for (var d = 0, h = ""; h = De(o, d++), i.c = h, !!h; )
          switch (i.trackPosition && (i.position++, h === `
` ? (i.line++, i.column = 0) : i.column++), i.state) {
            case f.BEGIN:
              if (i.state = f.BEGIN_WHITESPACE, h === "\uFEFF")
                continue;
              Xe(i, h);
              continue;
            case f.BEGIN_WHITESPACE:
              Xe(i, h);
              continue;
            case f.TEXT:
              if (i.sawRoot && !i.closedRoot) {
                for (var w = d - 1; h && h !== "<" && h !== "&"; )
                  h = De(o, d++), h && i.trackPosition && (i.position++, h === `
` ? (i.line++, i.column = 0) : i.column++);
                i.textNode += o.substring(w, d - 1);
              }
              h === "<" && !(i.sawRoot && i.closedRoot && !i.strict) ? (i.state = f.OPEN_WAKA, i.startTagPosition = i.position) : (!F(h) && (!i.sawRoot || i.closedRoot) && I(i, "Text data outside of root node."), h === "&" ? i.state = f.TEXT_ENTITY : i.textNode += h);
              continue;
            case f.SCRIPT:
              h === "<" ? i.state = f.SCRIPT_ENDING : i.script += h;
              continue;
            case f.SCRIPT_ENDING:
              h === "/" ? i.state = f.CLOSE_TAG : (i.script += "<" + h, i.state = f.SCRIPT);
              continue;
            case f.OPEN_WAKA:
              if (h === "!")
                i.state = f.SGML_DECL, i.sgmlDecl = "";
              else if (!F(h)) if (Y(B, h))
                i.state = f.OPEN_TAG, i.tagName = h;
              else if (h === "/")
                i.state = f.CLOSE_TAG, i.tagName = "";
              else if (h === "?")
                i.state = f.PROC_INST, i.procInstName = i.procInstBody = "";
              else {
                if (I(i, "Unencoded <"), i.startTagPosition + 1 < i.position) {
                  var A = i.position - i.startTagPosition;
                  h = new Array(A).join(" ") + h;
                }
                i.textNode += "<" + h, i.state = f.TEXT;
              }
              continue;
            case f.SGML_DECL:
              if (i.sgmlDecl + h === "--") {
                i.state = f.COMMENT, i.comment = "", i.sgmlDecl = "";
                continue;
              }
              i.doctype && i.doctype !== !0 && i.sgmlDecl ? (i.state = f.DOCTYPE_DTD, i.doctype += "<!" + i.sgmlDecl + h, i.sgmlDecl = "") : E.test(i.sgmlDecl + h) ? (k(i, "onopencdata"), i.state = f.CDATA, i.sgmlDecl = "", i.cdata = "") : T.test(i.sgmlDecl + h) ? (i.state = f.DOCTYPE, (i.doctype || i.sawRoot) && I(
                i,
                "Inappropriately located doctype declaration"
              ), i.doctype = "", i.sgmlDecl = "") : h === ">" ? (k(i, "onsgmldeclaration", i.sgmlDecl), i.sgmlDecl = "", i.state = f.TEXT) : (X(h) && (i.state = f.SGML_DECL_QUOTED), i.sgmlDecl += h);
              continue;
            case f.SGML_DECL_QUOTED:
              h === i.q && (i.state = f.SGML_DECL, i.q = ""), i.sgmlDecl += h;
              continue;
            case f.DOCTYPE:
              h === ">" ? (i.state = f.TEXT, k(i, "ondoctype", i.doctype), i.doctype = !0) : (i.doctype += h, h === "[" ? i.state = f.DOCTYPE_DTD : X(h) && (i.state = f.DOCTYPE_QUOTED, i.q = h));
              continue;
            case f.DOCTYPE_QUOTED:
              i.doctype += h, h === i.q && (i.q = "", i.state = f.DOCTYPE);
              continue;
            case f.DOCTYPE_DTD:
              h === "]" ? (i.doctype += h, i.state = f.DOCTYPE) : h === "<" ? (i.state = f.OPEN_WAKA, i.startTagPosition = i.position) : X(h) ? (i.doctype += h, i.state = f.DOCTYPE_DTD_QUOTED, i.q = h) : i.doctype += h;
              continue;
            case f.DOCTYPE_DTD_QUOTED:
              i.doctype += h, h === i.q && (i.state = f.DOCTYPE_DTD, i.q = "");
              continue;
            case f.COMMENT:
              h === "-" ? i.state = f.COMMENT_ENDING : i.comment += h;
              continue;
            case f.COMMENT_ENDING:
              h === "-" ? (i.state = f.COMMENT_ENDED, i.comment = Ge(i.opt, i.comment), i.comment && k(i, "oncomment", i.comment), i.comment = "") : (i.comment += "-" + h, i.state = f.COMMENT);
              continue;
            case f.COMMENT_ENDED:
              h !== ">" ? (I(i, "Malformed comment"), i.comment += "--" + h, i.state = f.COMMENT) : i.doctype && i.doctype !== !0 ? i.state = f.DOCTYPE_DTD : i.state = f.TEXT;
              continue;
            case f.CDATA:
              for (var w = d - 1; h && h !== "]"; )
                h = De(o, d++), h && i.trackPosition && (i.position++, h === `
` ? (i.line++, i.column = 0) : i.column++);
              i.cdata += o.substring(w, d - 1), h === "]" && (i.state = f.CDATA_ENDING);
              continue;
            case f.CDATA_ENDING:
              h === "]" ? i.state = f.CDATA_ENDING_2 : (i.cdata += "]" + h, i.state = f.CDATA);
              continue;
            case f.CDATA_ENDING_2:
              h === ">" ? (i.cdata && k(i, "oncdata", i.cdata), k(i, "onclosecdata"), i.cdata = "", i.state = f.TEXT) : h === "]" ? i.cdata += "]" : (i.cdata += "]]" + h, i.state = f.CDATA);
              continue;
            case f.PROC_INST:
              h === "?" ? i.state = f.PROC_INST_ENDING : F(h) ? i.state = f.PROC_INST_BODY : i.procInstName += h;
              continue;
            case f.PROC_INST_BODY:
              if (!i.procInstBody && F(h))
                continue;
              h === "?" ? i.state = f.PROC_INST_ENDING : i.procInstBody += h;
              continue;
            case f.PROC_INST_ENDING:
              if (h === ">") {
                const J = {
                  name: i.procInstName,
                  body: i.procInstBody
                };
                Dt(i, J), k(i, "onprocessinginstruction", J), i.procInstName = i.procInstBody = "", i.state = f.TEXT;
              } else
                i.procInstBody += "?" + h, i.state = f.PROC_INST_BODY;
              continue;
            case f.OPEN_TAG:
              Y(z, h) ? i.tagName += h : (Rt(i), h === ">" ? re(i) : h === "/" ? i.state = f.OPEN_TAG_SLASH : (F(h) || I(i, "Invalid character in tag name"), i.state = f.ATTRIB));
              continue;
            case f.OPEN_TAG_SLASH:
              h === ">" ? (re(i, !0), be(i)) : (I(
                i,
                "Forward-slash in opening tag not followed by >"
              ), i.state = f.ATTRIB);
              continue;
            case f.ATTRIB:
              if (F(h))
                continue;
              h === ">" ? re(i) : h === "/" ? i.state = f.OPEN_TAG_SLASH : Y(B, h) ? (i.attribName = h, i.attribValue = "", i.state = f.ATTRIB_NAME) : I(i, "Invalid attribute name");
              continue;
            case f.ATTRIB_NAME:
              h === "=" ? i.state = f.ATTRIB_VALUE : h === ">" ? (I(i, "Attribute without value"), i.attribValue = i.attribName, Ie(i), re(i)) : F(h) ? i.state = f.ATTRIB_NAME_SAW_WHITE : Y(z, h) ? i.attribName += h : I(i, "Invalid attribute name");
              continue;
            case f.ATTRIB_NAME_SAW_WHITE:
              if (h === "=")
                i.state = f.ATTRIB_VALUE;
              else {
                if (F(h))
                  continue;
                I(i, "Attribute without value"), i.tag.attributes[i.attribName] = "", i.attribValue = "", k(i, "onattribute", {
                  name: i.attribName,
                  value: ""
                }), i.attribName = "", h === ">" ? re(i) : Y(B, h) ? (i.attribName = h, i.state = f.ATTRIB_NAME) : (I(i, "Invalid attribute name"), i.state = f.ATTRIB);
              }
              continue;
            case f.ATTRIB_VALUE:
              if (F(h))
                continue;
              X(h) ? (i.q = h, i.state = f.ATTRIB_VALUE_QUOTED) : (i.opt.unquotedAttributeValues || se(i, "Unquoted attribute value"), i.state = f.ATTRIB_VALUE_UNQUOTED, i.attribValue = h);
              continue;
            case f.ATTRIB_VALUE_QUOTED:
              if (h !== i.q) {
                h === "&" ? i.state = f.ATTRIB_VALUE_ENTITY_Q : i.attribValue += h;
                continue;
              }
              Ie(i), i.q = "", i.state = f.ATTRIB_VALUE_CLOSED;
              continue;
            case f.ATTRIB_VALUE_CLOSED:
              F(h) ? i.state = f.ATTRIB : h === ">" ? re(i) : h === "/" ? i.state = f.OPEN_TAG_SLASH : Y(B, h) ? (I(i, "No whitespace between attributes"), i.attribName = h, i.attribValue = "", i.state = f.ATTRIB_NAME) : I(i, "Invalid attribute name");
              continue;
            case f.ATTRIB_VALUE_UNQUOTED:
              if (!le(h)) {
                h === "&" ? i.state = f.ATTRIB_VALUE_ENTITY_U : i.attribValue += h;
                continue;
              }
              Ie(i), h === ">" ? re(i) : i.state = f.ATTRIB;
              continue;
            case f.CLOSE_TAG:
              if (i.tagName)
                h === ">" ? be(i) : Y(z, h) ? i.tagName += h : i.script ? (i.script += "</" + i.tagName + h, i.tagName = "", i.state = f.SCRIPT) : (F(h) || I(i, "Invalid tagname in closing tag"), i.state = f.CLOSE_TAG_SAW_WHITE);
              else {
                if (F(h))
                  continue;
                ne(B, h) ? i.script ? (i.script += "</" + h, i.state = f.SCRIPT) : I(i, "Invalid tagname in closing tag.") : i.tagName = h;
              }
              continue;
            case f.CLOSE_TAG_SAW_WHITE:
              if (F(h))
                continue;
              h === ">" ? be(i) : I(i, "Invalid characters in closing tag");
              continue;
            case f.TEXT_ENTITY:
            case f.ATTRIB_VALUE_ENTITY_Q:
            case f.ATTRIB_VALUE_ENTITY_U:
              var M, G;
              switch (i.state) {
                case f.TEXT_ENTITY:
                  M = f.TEXT, G = "textNode";
                  break;
                case f.ATTRIB_VALUE_ENTITY_Q:
                  M = f.ATTRIB_VALUE_QUOTED, G = "attribValue";
                  break;
                case f.ATTRIB_VALUE_ENTITY_U:
                  M = f.ATTRIB_VALUE_UNQUOTED, G = "attribValue";
                  break;
              }
              if (h === ";") {
                var $ = Pt(i);
                i.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes($) ? ((i.entityCount += 1) > i.opt.maxEntityCount && se(
                  i,
                  "Parsed entity count exceeds max entity count"
                ), (i.entityDepth += 1) > i.opt.maxEntityDepth && se(
                  i,
                  "Parsed entity depth exceeds max entity depth"
                ), i.entity = "", i.state = M, i.write($), i.entityDepth -= 1) : (i[G] += $, i.entity = "", i.state = M);
              } else Y(i.entity.length ? q : K, h) ? i.entity += h : (I(i, "Invalid character in entity name"), i[G] += "&" + i.entity + h, i.entity = "", i.state = M);
              continue;
            default:
              throw new Error(i, "Unknown state: " + i.state);
          }
        return i.position >= i.bufferCheckPosition && r(i), i;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var o = String.fromCharCode, i = Math.floor, d = function() {
          var h = 16384, A = [], w, M, G = -1, $ = arguments.length;
          if (!$)
            return "";
          for (var J = ""; ++G < $; ) {
            var L = Number(arguments[G]);
            if (!isFinite(L) || // `NaN`, `+Infinity`, or `-Infinity`
            L < 0 || // not a valid Unicode code point
            L > 1114111 || // not a valid Unicode code point
            i(L) !== L)
              throw RangeError("Invalid code point: " + L);
            L <= 65535 ? A.push(L) : (L -= 65536, w = (L >> 10) + 55296, M = L % 1024 + 56320, A.push(w, M)), (G + 1 === $ || A.length > h) && (J += o.apply(null, A), A.length = 0);
          }
          return J;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: d,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = d;
      })();
    })(g);
  })(Fe)), Fe;
}
var ts = es();
const ss = /* @__PURE__ */ Ht(ts), qe = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData", rs = 0, ns = 1, Me = 2, is = 3, as = 4, os = 0, us = 1, me = 2, Ke = 3, cs = 4, ls = 5, hs = 6;
class He {
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
    t = rs;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = Me;
          break;
        case "mixed":
          t = is;
          break;
        case "empty":
          t = ns;
          break;
        case "elementOnly":
          t = as;
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
    t = os;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = us;
          break;
        case "element":
          t = me;
          break;
        case "attribute":
          t = Ke;
          break;
        case "elementWildcard":
          t = cs;
          break;
        case "attributeWildcard":
          t = ls;
          break;
        case "group":
          t = hs;
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
      if (this.getFeatureKind(r) !== me)
        continue;
      const a = this.getName(r) ?? r.getName();
      if (a !== s)
        continue;
      const u = this.getNamespace(r);
      if (t && u && u === t || !t && !u || !u && a === s)
        return r;
    }
    return null;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "attribute".
   */
  getAttributeFeature(e, t, s) {
    for (const r of e.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(r) !== Ke)
        continue;
      const a = this.getName(r) ?? r.getName();
      if (a !== s)
        continue;
      const u = this.getNamespace(r);
      if (t && u && u === t || !t && !u || !u && a === s)
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
    const s = e.getEAnnotation(qe);
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
    const t = e.getEAnnotation(qe);
    if (!t)
      return null;
    const s = t.getDetails();
    return s && typeof s.getByKey == "function" ? s.toMap() : null;
  }
}
const gs = "FEATURE_NAME_MAP", fs = "EXTENDED_META_DATA", ve = 1, Oe = 2, Qe = 3, ps = 4, Je = 5;
class ds {
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
class Ne {
  constructor(e) {
    this.noNamespacePackage = null, this.resource = null, this.xmlResource = null, this.resourceURI = null, this.packageRegistry = Q.INSTANCE, this.packages = /* @__PURE__ */ new Map(), this.featuresToKinds = /* @__PURE__ */ new Map(), this.prefixesToURIs = /* @__PURE__ */ new Map(), this.urisToPrefixes = /* @__PURE__ */ new Map(), this.namespaceSupport = new ds(), this.allPrefixToURI = [], this.featureNameMap = /* @__PURE__ */ new Map(), this.reverseFeatureNameMap = /* @__PURE__ */ new Map(), this.extendedMetaData = null, e && this.setResource(e);
  }
  setResource(e) {
    if (this.resource = e, this.xmlResource = e && "getID" in e ? e : null, e) {
      this.resourceURI = e.getURI();
      const t = e.getResourceSet();
      t ? this.packageRegistry = t.getPackageRegistry() : this.packageRegistry = Q.INSTANCE;
    }
  }
  setOptions(e) {
    const t = e.get(gs);
    if (t) {
      this.featureNameMap = new Map(t), this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
      for (const [r, n] of t)
        this.reverseFeatureNameMap.set(n, r);
    }
    const s = e.get(fs);
    s instanceof He ? this.extendedMetaData = s : s === !0 && (this.extendedMetaData = new He());
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
    return t === void 0 && (this.computeFeatureKind(e), t = this.featuresToKinds.get(e)), t ?? Je;
  }
  computeFeatureKind(e) {
    const t = e.getEType();
    if (!("isContainment" in e && typeof e.isContainment == "function") && (!t || !("getESuperTypes" in t)))
      e.isMany() ? this.featuresToKinds.set(e, Oe) : this.featuresToKinds.set(e, ve);
    else if (e.isMany())
      if ("getEOpposite" in e && typeof e.getEOpposite == "function") {
        const n = e.getEOpposite();
        !n || typeof n.isTransient != "function" || n.isTransient() || !n.isMany() ? this.featuresToKinds.set(e, Qe) : this.featuresToKinds.set(e, ps);
      } else
        this.featuresToKinds.set(e, Qe);
    else
      this.featuresToKinds.set(e, Je);
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
    const s = [], r = e.getObject(), n = e.getFeature(), a = e.getValues(), u = e.getPositions();
    for (let c = 0; c < a.length; c++) {
      const l = a[c], m = u[c];
      try {
        this.setValue(r, n, l, m);
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
class ht {
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
        const n = e.eProxyURI().toString(), a = n.indexOf("#");
        if (a > 0) {
          const u = C.createURI(n.substring(0, a)), c = n.substring(a + 1), l = s.getResource(u, !0);
          if (l) {
            const m = l.getEObject(c);
            if (m)
              return m;
          }
        } else if (a === 0) {
          const u = n.substring(1), c = t.getEObject(u);
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
function Ee(g, e) {
  let t = e;
  for (; t.startsWith("/"); )
    t = t.substring(1);
  if (!t)
    return null;
  const s = t.split("/");
  if (s.length === 1)
    return g.getEClassifier(s[0]);
  const r = s[s.length - 1];
  let n = g;
  for (let a = 0; a < s.length - 1; a++) {
    const u = s[a], c = n.getESubpackages();
    n = null;
    for (let l = 0; l < c.length; l++) {
      const m = c.get(l);
      if (m.getName() === u) {
        n = m;
        break;
      }
    }
    if (!n)
      return null;
  }
  return n.getEClassifier(r);
}
const fe = "error", ie = "object", Ve = "reference", xe = "xmiWrapper", Ze = "deferredType";
class ms {
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
const ae = "http://www.w3.org/2001/XMLSchema-instance", we = "http://www.omg.org/XMI", et = "xmlns", Es = "type", ys = "nil", Ts = "schemaLocation", tt = "href", Cs = "id";
class gt {
  constructor(e, t, s) {
    this.elements = [], this.objects = [], this.types = [], this.prefixesToFactories = /* @__PURE__ */ new Map(), this.urisToLocations = /* @__PURE__ */ new Map(), this.forwardSingleReferences = [], this.sameDocumentProxies = [], this.attribs = null, this.text = null, this.isRoot = !0, this.isNamespaceAware = !1, this.needsPushContext = !1, this.deferredFeature = null, this.deferredParent = null, this.deferredExtent = null, this.resolve = !0, this.useNewMethods = !0, this.errors = [], this.lineNumber = 0, this.columnNumber = 0, this.resource = e, this.helper = t, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || Q.INSTANCE, this.extent = e.getContents(), s && this.processOptions(s);
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
      this.objects.push(null), this.types.push(xe);
      return;
    }
    this.objects.length === 0 || this.objects.length === 1 && this.types[0] === xe ? this.createTopObject(t, s) : this.handleFeature(t, s);
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
        const a = this.text.trim();
        if (a.length > 0) {
          const u = this.helper.getExtendedMetaData();
          if (u) {
            const c = n.eClass();
            if (u.getContentKind(c) === Me) {
              const l = u.getSimpleContentFeature(c);
              l && this.setFeatureValue(n, l, a);
            }
          }
          this.handleProxy(n, a);
        }
      }
      this.text = null;
    } else if (r === fe)
      this.objects.pop(), this.text = null;
    else if (r === Ve)
      this.objects.pop(), this.text = null;
    else if (r === Ze)
      this.objects.pop(), this.deferredParent = null, this.deferredFeature = null, this.text = null;
    else if (r === xe)
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
        if (t.startsWith(et)) {
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
    const e = this.attribs.getValueByName(ae, Ts);
    e && this.handleXSISchemaLocation(e);
  }
  handleXSISchemaLocation(e) {
    const t = e.trim().split(/\s+/);
    for (let s = 0; s + 1 < t.length; s += 2) {
      const r = t[s], n = t[s + 1];
      this.urisToLocations.set(r, C.createURI(n));
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
      const a = this.helper.getType(s, t);
      a && (n = this.helper.createObject(s, a));
    }
    n ? (this.processTopObject(n), this.handleObjectAttribs(n)) : (this.error(`Cannot create object for '${t}'`), this.processObject(null));
  }
  /**
   * Get xsi:type attribute value
   */
  getXSIType() {
    return this.attribs ? this.attribs.getValueByName(ae, Es) : null;
  }
  /**
   * Create object based on xsi:type
   */
  createObjectByType(e, t, s) {
    let r = e, n = t;
    const a = t.indexOf(":");
    a !== -1 && (r = t.substring(0, a), n = t.substring(a + 1));
    const u = this.getFactoryForPrefix(r);
    if (!u)
      return this.error(`Factory not found for type '${t}'`), null;
    const c = this.helper.getType(u, n);
    return c ? this.helper.createObject(u, c) : (this.error(`Type '${n}' not found`), null);
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
    this.objects.push(e), this.types.push(e ? ie : fe);
  }
  /**
   * Handle object attributes
   */
  handleObjectAttribs(e) {
    if (this.attribs)
      for (let t = 0; t < this.attribs.getLength(); t++) {
        const s = this.attribs.getQName(t), r = this.attribs.getValue(t), n = this.attribs.getURI(t), a = this.attribs.getLocalName(t);
        if (!s.startsWith(et) && n !== ae) {
          if (n === we) {
            a === Cs && this.handleId(e, r);
            continue;
          }
          this.setAttribValue(e, a || s, r, n || null);
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
    const n = e.eClass(), a = this.helper.getFeature(n, r ?? null, t);
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
      this.objects.push(null), this.types.push(fe), this.error(`Feature '${t}' has no parent object`);
      return;
    }
    const r = s.eClass(), n = e && this.helper.getURI(e) || null, a = this.helper.getFeatureWithElement(r, n, t, !0);
    if (a) {
      const u = this.helper.getFeatureKind(a);
      u === ve || u === Oe ? (this.objects.push(null), this.types.push(a), this.isNull() || (this.text = "")) : this.createObject(s, a);
    } else
      this.handleUnknownFeature(e, t, s);
  }
  /**
   * Check if xsi:nil="true"
   */
  isNull() {
    return this.attribs ? this.attribs.getValueByName(ae, ys) === "true" : !1;
  }
  /**
   * Create child object for reference
   */
  createObject(e, t) {
    const s = this.attribs?.getValueByQName(tt) || this.attribs?.getValueByName("", tt);
    if (s) {
      this.setValueFromId(e, t, s, -1), this.objects.push(null), this.types.push(Ve);
      return;
    }
    const r = this.getXSIType();
    let n = null;
    if (r)
      n = this.createObjectByType("", r, !1);
    else {
      let a = t.getEType();
      if (a && !("getESuperTypes" in a) && typeof a.eIsProxy == "function" && a.eIsProxy()) {
        const u = a.eProxyURI();
        if (u) {
          const c = u.toString(), l = c.indexOf("#");
          if (l > 0) {
            const m = c.substring(0, l), p = c.substring(l + 1), E = this.packageRegistry.getEPackage(m);
            if (E) {
              const T = Ee(E, p);
              T && (a = T, typeof t.setEType == "function" && t.setEType(T));
            }
          }
        }
      }
      if (a && "getESuperTypes" in a) {
        const u = a;
        if (u.isAbstract()) {
          this.deferredParent = e, this.deferredFeature = t, this.objects.push(null), this.types.push(Ze);
          return;
        } else {
          const c = u.getEPackage()?.getEFactoryInstance();
          c && (n = c.create(u));
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
      const a = s.eClass(), u = n.getElementFeature(a, r, t);
      if (u) {
        const c = this.helper.getFeatureKind(u);
        c === ve || c === Oe ? (this.objects.push(null), this.types.push(u), this.isNull() || (this.text = "")) : this.createObject(s, u);
        return;
      }
    }
    if (r) {
      const a = this.packageRegistry.getEPackage(r);
      if (a) {
        const u = a.getEClassifier(t);
        if (u && "getESuperTypes" in u) {
          const c = u, l = s.eClass();
          if (c === l) {
            this.handleObjectAttribs(s), this.objects.push(s), this.types.push(ie);
            return;
          }
          if (l.isSuperTypeOf(c) && !c.isAbstract()) {
            const m = c.getEPackage()?.getEFactoryInstance();
            if (m) {
              const p = m.create(c);
              for (const T of l.getEAllStructuralFeatures()) {
                if (T.isTransient() || T.isDerived())
                  continue;
                const S = s.eGet(T);
                if (S != null)
                  try {
                    p.eSet(T, S);
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
    this.objects.push(null), this.types.push(fe), this.error(`Unknown feature '${t}' for type '${s.eClass().getName()}'`);
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
    for (const a of n.getEAllStructuralFeatures()) {
      if (!("isContainment" in a))
        continue;
      const u = a;
      if (u.isContainment()) {
        if (u.isMany()) {
          const c = r.eGet(u);
          if (c) {
            for (let l = c.length - 1; l >= 0; l--)
              if (c[l] === e) {
                c[l] = t;
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
    let a = null;
    if (n) {
      const u = this.packageRegistry.getEPackage(n);
      if (u) {
        const c = u.getEClassifier(t);
        if (c && "getESuperTypes" in c) {
          const l = c;
          if (!l.isAbstract()) {
            const m = l.getEPackage()?.getEFactoryInstance();
            m && (a = m.create(l));
          }
        }
      }
    }
    a ? (this.helper.setValue(s, r, a, -1), this.handleObjectAttribs(a), this.objects[this.objects.length - 1] = a, this.types[this.types.length - 1] = ie, this.objects.push(a), this.types.push(ie)) : (this.objects.push(null), this.types.push(fe), this.error(`Cannot resolve type '${t}' for deferred containment`));
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
        for (const u of a)
          u && this.setValueFromId(e, t, u, -1);
      } else
        this.setValueFromId(e, t, s, r);
    else {
      const u = t.getEType();
      let c = null;
      if (u && typeof u.getEPackage == "function")
        c = u.getEPackage()?.getEFactoryInstance() ?? null;
      else if (u && typeof u.eGet == "function" && typeof u.eClass == "function") {
        const l = u.eClass();
        if (l) {
          const m = l.getEStructuralFeature?.("ePackage");
          if (m) {
            const p = u.eGet(m);
            p?.getEFactoryInstance && (c = p.getEFactoryInstance());
          }
        }
      }
      try {
        if (c && u) {
          const l = c.createFromString(u, s);
          this.helper.setValue(e, t, l, r);
        } else
          this.helper.setValue(e, t, s, r);
      } catch (l) {
        const m = l instanceof Error ? l.message : String(l);
        this.error(`Invalid value for feature '${t.getName()}': ${m}`);
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
    const a = t.indexOf("#");
    if (a > 0) {
      const m = t.substring(0, a), p = t.substring(a + 1);
      if (r && !m.includes("://")) {
        const E = r.toString();
        if (m === E || E.endsWith(m) || E.endsWith("/" + m))
          s = C.createURI(E + "#" + p);
        else {
          const T = C.createURI(m).resolve(r);
          s = C.createURI(T.toString() + "#" + p);
        }
      } else
        s = C.createURI(t);
    } else a === 0 ? r ? s = C.createURI(r.toString() + t) : s = C.createURI(t) : (t.startsWith("/"), r ? s = C.createURI(r.toString() + "#" + t) : s = C.createURI("#" + t));
    const u = e.getEType(), c = u && "getESuperTypes" in u ? u : null, l = new ht(s, c || void 0);
    return l.eSetResource(this.resource), l;
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
      const c = this.packageRegistry.getEPackage(r);
      if (c)
        return this.resolveFragmentInPackage(c, n);
      const l = this.resource.getContents();
      for (let p = 0; p < l.length; p++) {
        const E = l.get(p);
        if (E && typeof E.getNsURI == "function") {
          const T = E;
          if (T.getNsURI() === r)
            return this.resolveFragmentInPackage(T, n);
        }
      }
      const m = this.resource.getResourceSet();
      if (m) {
        const p = C.createURI(r), E = m.getResource(p, !0);
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
    const r = s.split("/"), n = Ee(e, s);
    if (n)
      return n;
    if (r.length >= 2) {
      let a = e;
      for (let l = 0; l < r.length - 2; l++) {
        const m = a.getESubpackages();
        let p = null;
        for (let E = 0; E < m.length; E++)
          if (m.get(E).getName() === r[l]) {
            p = m.get(E);
            break;
          }
        if (!p)
          return null;
        a = p;
      }
      const u = r[r.length - 2], c = a.getEClassifier(u);
      if (c && "getEStructuralFeature" in c) {
        const l = c.getEStructuralFeature(r[r.length - 1]);
        if (l)
          return l;
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
class ft {
  constructor(e) {
    this.helper = e || new Ne();
  }
  /**
   * Load resource from string
   */
  load(e, t, s) {
    const r = s || /* @__PURE__ */ new Map(), n = this.makeDefaultHandler(e, r), a = ss.parser(!0, {
      xmlns: !0,
      position: !0,
      trim: !1
    }), u = new ms();
    a.onprocessinginstruction = (l) => {
      l.name;
    }, a.onopentag = (l) => {
      u.clear();
      const m = l;
      for (const [p, E] of Object.entries(m.attributes)) {
        const T = E, S = T.prefix ? `${T.prefix}:${T.local}` : T.local;
        if (T.prefix === "xmlns" || T.name === "xmlns") {
          const O = T.prefix === "xmlns" ? T.local : "";
          n.startPrefixMapping(O, T.value);
        }
        u.add(S, T.local, T.uri, T.value);
      }
      n.lineNumber = a.line, n.columnNumber = a.column, n.startElement(m.uri, m.local, m.name, u);
    }, a.onclosetag = (l) => {
      const m = l.indexOf(":"), p = m >= 0 ? l.substring(m + 1) : l;
      n.endElement("", p, l);
    }, a.ontext = (l) => {
      l.trim() && n.characters(l);
    }, a.oncdata = (l) => {
      n.characters(l);
    }, a.onerror = (l) => {
      console.error("XML Parse Error:", l.message), n.error(l.message);
    }, a.write(t).close(), n.endDocument();
    const c = n.getErrors();
    if (c.length > 0 && e.getErrors) {
      const l = e.getErrors();
      for (const m of c) {
        const p = m.message.match(/\[Line\s*(\d+),?\s*Col\s*(\d+)\]\s*(.*)/i);
        p ? l.push({
          message: p[3] || m.message,
          line: parseInt(p[1], 10),
          column: parseInt(p[2], 10)
        }) : l.push({ message: m.message });
      }
    }
  }
  /**
   * Create the default handler for loading
   */
  makeDefaultHandler(e, t) {
    return new gt(e, this.helper, t);
  }
}
class Ns extends ft {
  constructor(e) {
    super(e || new Ss());
  }
  makeDefaultHandler(e, t) {
    return new _s(e, this.helper, t);
  }
}
class Ss extends Ne {
}
class _s extends gt {
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
function Ce(g) {
  return g != null && typeof g.getELiterals == "function" && typeof g.getEEnumLiteral == "function";
}
class pt {
  constructor(e) {
    this.declaredNamespaces = /* @__PURE__ */ new Map(), this.output = [], this.indent = 0, this.indentString = "  ", this.idAttributeName = "id", this.helper = e || new Ne(), this.resource = null;
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
    this.output.push("<xmi:XMI"), this.output.push(` xmlns:xmi="${we}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${ae}"`);
    const s = /* @__PURE__ */ new Set();
    for (const r of t) {
      const n = r.getNsURI(), a = this.getPrefix(r);
      n && a && !s.has(a) && (this.output.push(` xmlns:${a}="${n}"`), this.declaredNamespaces.set(n, a), s.add(a));
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
    const s = e.eClass(), r = s.getEPackage(), n = r ? this.getPrefix(r) : "", a = s.getName() || "Object", u = n ? `${n}:${a}` : a;
    this.writeIndent(), this.output.push(`<${u}`), t && this.writeNamespaces(e), t || this.writeTypeAttribute(e), this.saveID(e), this.writeAttributes(e);
    const c = this.helper.getExtendedMetaData(), l = this.getSimpleContentText(e, c), m = this.hasElementContent(e);
    l !== null ? (this.output.push(`>${this.escapeXml(l)}`), m && (this.output.push(`
`), this.indent++, this.writeElements(e), this.indent--, this.writeIndent()), this.output.push(`</${u}>
`)) : m ? (this.output.push(`>
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
    this.output.push(` xmlns:xmi="${we}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${ae}"`);
    const s = /* @__PURE__ */ new Set();
    for (const n of t) {
      const a = n.getNsURI(), u = this.getPrefix(n);
      a && u && !s.has(u) && (this.output.push(` xmlns:${u}="${a}"`), this.declaredNamespaces.set(a, u), s.add(u));
    }
    const r = this.helper.getExtendedMetaData();
    r && this.collectEMDNamespaces(e, r, s);
  }
  /**
   * Collect and declare additional namespaces from EMD annotations.
   */
  collectEMDNamespaces(e, t, s) {
    const r = (n) => {
      const a = n.eClass();
      for (const u of a.getEAllStructuralFeatures()) {
        const c = t.getNamespace(u);
        if (c && !this.declaredNamespaces.has(c) && c !== "http://www.w3.org/XML/1998/namespace") {
          const l = this.generatePrefix(c, s);
          l && (this.output.push(` xmlns:${l}="${c}"`), this.declaredNamespaces.set(c, l), s.add(l));
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
      const a = `${r}${n}`;
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
          if (s && s.getFeatureKind(r) === me)
            continue;
          const n = r;
          let a = e.eGet(n);
          if (a != null && (a = this.resolveValue(a, e), a != null)) {
            let u = null;
            try {
              u = n.getDefaultValue();
            } catch {
            }
            if (a !== u) {
              const c = this.convertToString(n, a), l = this.getSerializedAttributeName(n, s);
              this.output.push(` ${l}="${this.escapeXml(c)}"`);
            }
          }
        } else if ("isContainment" in r) {
          const n = r;
          if (!n.isContainment()) {
            let a = e.eGet(n);
            if (a != null) {
              const u = this.helper.getSerializedFeatureName(n);
              if (r.isMany()) {
                if (Array.isArray(a) || j(a)) {
                  const c = [];
                  for (const l of a) {
                    const m = this.resolveValue(l, e);
                    if (m == null || typeof m == "string")
                      continue;
                    const p = m.eResource?.();
                    if (p && p === this.resource) {
                      const E = this.getHref(m);
                      E && c.push(E);
                    }
                  }
                  c.length > 0 && this.output.push(` ${u}="${this.escapeXml(c.join(" "))}"`);
                }
              } else if (a = this.resolveValue(a, e), a != null)
                if (typeof a == "string")
                  this.output.push(` ${u}="${this.escapeXml(a)}"`);
                else if (typeof a == "boolean")
                  this.output.push(` ${u}="${a ? "true" : "false"}"`);
                else if (typeof a == "number")
                  this.output.push(` ${u}="${String(a)}"`);
                else {
                  const c = this.getTypePrefixedHref(n, a);
                  c && this.output.push(` ${u}="${this.escapeXml(c)}"`);
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
    if (Z(e) && e.eIsProxy()) {
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
        const n = r.getEPackage?.(), a = r.getName?.(), u = e.getName?.();
        if (n && a && u) {
          const c = n.getNsURI?.();
          if (c)
            return `${c}#//${a}/${u}`;
        }
      }
    }
    if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const r = e.getEPackage();
      if (r) {
        const n = r.getNsURI?.(), a = e.getName?.();
        if (n && a)
          return `${n}#//${a}`;
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
      const a = e.getName?.(), u = n.getName?.();
      if (!a || !u)
        return null;
      t.push(u, a), s = n.getEPackage?.() ?? null;
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
      const a = s.getName?.();
      a && t.unshift(a), s = n;
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
    const n = e.getEType(), a = t.eClass();
    if (n && a && a !== n && "isAbstract" in n && n.isAbstract()) {
      const u = a.getEPackage();
      if (u) {
        const c = this.getPrefix(u), l = a.getName();
        if (c && l)
          return `${c}:${l} ${s}`;
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
        if (n.isTransient() || n.isDerived() || !this.isAttribute(n) || r.getFeatureKind(n) !== me)
          continue;
        const a = e.eGet(n);
        if (a != null)
          return !0;
      }
    for (const n of s)
      if ("isContainment" in n) {
        const a = n;
        if (n.isTransient())
          continue;
        const u = e.eGet(a);
        if (u == null)
          continue;
        if (a.isContainment()) {
          if ((Array.isArray(u) || j(u)) && u.length > 0 || !Array.isArray(u) && !j(u))
            return !0;
        } else if (n.isMany() && (Array.isArray(u) || j(u)) && u.length > 0)
          for (const c of u) {
            const l = c.eResource?.();
            if (!l || l !== this.resource)
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
        if (r.isTransient() || r.isDerived() || !this.isAttribute(r) || s.getFeatureKind(r) !== me)
          continue;
        const a = e.eGet(r);
        if (a == null)
          continue;
        const u = this.getSerializedElementName(r, s), c = r;
        if (r.isMany() && (Array.isArray(a) || j(a))) {
          for (const l of a)
            if (l != null) {
              this.writeIndent();
              const m = this.convertSingleValueToString(c, l);
              this.output.push(`<${u}>${this.escapeXml(m)}</${u}>
`);
            }
        } else {
          this.writeIndent();
          const l = this.convertToString(c, a);
          this.output.push(`<${u}>${this.escapeXml(l)}</${u}>
`);
        }
      }
    for (const r of t.getEAllStructuralFeatures())
      if ("isContainment" in r) {
        const n = r;
        if (r.isTransient())
          continue;
        const a = e.eGet(n);
        if (a == null)
          continue;
        if (n.isContainment())
          if (Array.isArray(a) || j(a))
            for (const u of a)
              this.writeElement(n, u);
          else
            this.writeElement(n, a);
        else if (r.isMany() && (Array.isArray(a) || j(a)) && a.length > 0)
          for (const u of a) {
            const c = this.resolveValue(u, e);
            if (c == null)
              continue;
            const l = typeof c != "string" ? c.eResource?.() : null;
            if (l && l === this.resource)
              continue;
            const m = typeof c == "string" ? c : this.getHref(c);
            m && (this.writeIndent(), this.output.push(`<${this.helper.getSerializedFeatureName(n)} href="${this.escapeXml(m)}"/>
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
    const n = e.getEType(), a = t.eClass();
    if (n && a && a !== n) {
      const l = a.getEPackage(), m = l ? this.getPrefix(l) : "", p = m ? `${m}:${a.getName()}` : a.getName();
      this.output.push(` xsi:type="${p}"`);
    }
    this.saveID(t), this.writeAttributes(t);
    const u = this.getSimpleContentText(t, s), c = this.hasElementContent(t);
    u !== null ? (this.output.push(`>${this.escapeXml(u)}`), c && (this.output.push(`
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
    if (Z(e) && e.eIsProxy()) {
      if ("eResolveProxy" in t && typeof t.eResolveProxy == "function") {
        const r = t.eResolveProxy(e);
        if (r !== e && !(Z(r) && r.eIsProxy()))
          return r;
      }
      const s = e.eProxyURI();
      if (s && this.resource) {
        const r = this.resource.getResourceSet();
        if (r) {
          const n = s.toString(), a = n.indexOf("#");
          if (a >= 0) {
            const u = n.substring(a + 1);
            let c = this.resource;
            if (a > 0) {
              const l = C.createURI(n.substring(0, a));
              c = r.getResource(l, !0) || this.resource;
            }
            if (c) {
              const l = c.getEObject(u);
              if (l)
                return l;
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
      for (const n of t)
        n != null && r.push(this.convertSingleValueToString(e, n));
      return r.join(" ");
    }
    if (Ce(e.getEType()))
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
    if (!Ce(e.getEType())) {
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
        const a = n.getEFactoryInstance();
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
    if (t.getContentKind(s) !== Me)
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
class As extends pt {
  constructor(e) {
    super(e), this.idAttributeName = "xmi:id";
  }
  writeNamespaces(e) {
    super.writeNamespaces(e);
  }
}
class dt extends lt {
  constructor(e) {
    super(e), this.idToEObjectMap = /* @__PURE__ */ new Map(), this.eObjectToIDMap = /* @__PURE__ */ new Map(), this.xmlHelper = this.createXMLHelper();
  }
  createXMLHelper() {
    return new Ne(this);
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
        const n = await s.createInputStream(r), a = await bs(n);
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
    return new ft(this.xmlHelper);
  }
  /**
   * Create the XML saver
   */
  createXMLSave() {
    return new pt(this.xmlHelper);
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
class Is extends dt {
  createXMLLoad() {
    return new Ns(this.xmlHelper);
  }
  createXMLSave() {
    return new As(this.xmlHelper);
  }
}
async function bs(g) {
  const e = g.getReader(), t = new TextDecoder();
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
    return new dt(e);
  }
}
class mt {
  createResource(e) {
    return new Is(e);
  }
}
const ce = Te.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
ce.has("xml") || ce.set("xml", new Ds());
ce.has("xmi") || ce.set("xmi", new mt());
ce.has("ecore") || ce.set("ecore", new mt());
class Rs {
  constructor() {
    this.forwardReferences = [], this.errors = [];
  }
  /**
   * Load a JSON string into the resource.
   */
  load(e, t, s) {
    this.resource = e, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || Q.INSTANCE, this.forwardReferences = [], this.errors = [];
    let r;
    try {
      r = JSON.parse(t);
    } catch (n) {
      this.error(`Invalid JSON: ${n instanceof Error ? n.message : String(n)}`);
      return;
    }
    if (Array.isArray(r))
      for (const n of r) {
        const a = this.loadObject(n);
        a && e.getContents().push(a);
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
    const a = r.getEFactoryInstance().create(s);
    for (const [u, c] of Object.entries(e)) {
      if (u === "eClass" || c == null)
        continue;
      const l = s.getEStructuralFeature(u);
      if (!l) {
        this.error(`Unknown feature '${u}' for type '${s.getName()}'`);
        continue;
      }
      if (this.isAttribute(l))
        this.loadAttribute(a, l, c);
      else {
        const m = l;
        m.isContainment() ? this.loadContainment(a, m, c) : this.loadCrossReference(a, m, c);
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
    const n = this.packageRegistry.getEPackage(s);
    if (!n)
      return this.error(`Package not found for nsURI: ${s}`), null;
    const a = n.getEClassifier(r);
    return a ? "getESuperTypes" in a ? a : (this.error(`'${r}' is not an EClass`), null) : (this.error(`Classifier '${r}' not found in package '${s}'`), null);
  }
  /**
   * Load an attribute value.
   */
  loadAttribute(e, t, s) {
    if (t.isMany()) {
      const r = Array.isArray(s) ? s : [s], n = e.eGet(t);
      if (n && (Array.isArray(n) || j(n)))
        for (const a of r)
          n.push(this.convertAttributeValue(t, a));
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
      const n = Array.isArray(s) ? s : [s], a = e.eGet(t);
      for (const u of n)
        if (u && typeof u == "object") {
          const c = this.loadObject(u, r);
          c && a && (Array.isArray(a) || j(a)) && a.push(c);
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
      const s = e.substring(0, t), r = e.substring(t + 1), n = this.resource.getURI();
      if (n && n.toString() === s)
        return this.resource.getEObject(r);
      const a = this.packageRegistry.getEPackage(s);
      if (a)
        return this.resolveFragmentInPackage(a, r);
      const u = this.resource.getResourceSet();
      if (u) {
        const c = C.createURI(s), l = u.getResource(c, !0);
        if (l)
          return l.getEObject(r);
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
    const r = s.split("/"), n = Ee(e, s);
    if (n)
      return n;
    if (r.length >= 2) {
      let a = e;
      for (let l = 0; l < r.length - 2; l++) {
        const m = a.getESubpackages();
        let p = null;
        for (let E = 0; E < m.length; E++)
          if (m.get(E).getName() === r[l]) {
            p = m.get(E);
            break;
          }
        if (!p)
          return null;
        a = p;
      }
      const u = r[r.length - 2], c = a.getEClassifier(u);
      if (c && "getEStructuralFeature" in c) {
        const l = c.getEStructuralFeature(r[r.length - 1]);
        if (l)
          return l;
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
    const n = e.getEType(), a = n && "getESuperTypes" in n ? n : null, u = new ht(s, a || void 0);
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
const st = "SERIALIZE_TYPE", rt = "INDENT", Ps = "always", Fs = "polymorphic";
class xs {
  constructor() {
    this.serializeType = Fs, this.indent = 2;
  }
  /**
   * Serialize resource contents to JSON string.
   */
  save(e, t) {
    this.resource = e, t && (t.has(st) && (this.serializeType = t.get(st)), t.has(rt) && (this.indent = t.get(rt)));
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
    for (const a of n.getEAllStructuralFeatures()) {
      if (a.isTransient() || a.isDerived())
        continue;
      const u = e.eGet(a);
      if (u != null)
        if (this.isAttribute(a))
          this.saveAttribute(r, e, a, u);
        else {
          const c = a;
          c.isContainment() ? this.saveContainment(r, e, c, u) : this.saveCrossReference(r, e, c, u);
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
    const n = s.getName();
    if (s.isMany()) {
      const a = Array.isArray(r) || j(r) ? [...r] : [r];
      if (a.length === 0)
        return;
      e[n] = a.map((u) => this.convertAttributeValue(s, u));
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
      const a = Array.isArray(r) || j(r) ? [...r] : [r];
      if (a.length === 0)
        return;
      e[n] = a.map((u) => this.saveContainedChild(u, s));
    } else
      e[n] = this.saveContainedChild(r, s);
  }
  /**
   * Serialize a single contained child. Proxies become `{ "$ref": "..." }`.
   */
  saveContainedChild(e, t) {
    if (Z(e) && e.eIsProxy()) {
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
      const a = Array.isArray(r) || j(r) ? [...r] : [r];
      if (a.length === 0)
        return;
      const u = [];
      for (const c of a) {
        const l = this.getHref(c);
        l && u.push({ $ref: l });
      }
      u.length > 0 && (e[n] = u);
    } else {
      const a = this.getHref(r);
      a && (e[n] = { $ref: a });
    }
  }
  /**
   * Determine whether the eClass type URI should be written.
   */
  shouldSaveType(e, t, s = !1) {
    if (this.serializeType === Ps || s)
      return !0;
    if (t && "isContainment" in t) {
      const n = t.getEType(), a = e.eClass();
      return !!(n && a && n !== a);
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
    if (Z(e) && e.eIsProxy())
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
        const r = s.getEPackage?.(), n = s.getName?.(), a = e.getName?.();
        if (r && n && a) {
          const u = r.getNsURI?.();
          if (u)
            return `${u}#//${n}/${a}`;
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
class vs extends lt {
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
      const a = this.getErrors();
      for (const u of n)
        a.push({ message: u.message });
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
    return new Rs();
  }
  /**
   * Create the JSON saver.
   */
  createJSONSave() {
    return new xs();
  }
  /**
   * Unload resource.
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class Os {
  createResource(e) {
    return new vs(e);
  }
}
const nt = Te.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
nt.has("json") || nt.set("json", new Os());
class ws {
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
const x = new ws();
class D extends W {
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
      const e = this, t = new kt(this, () => {
        if (x.isRegistered())
          try {
            const s = x.getEClassClass();
            if (s !== e && s instanceof D && s._eStructuralFeatures !== null)
              return s.getEStructuralFeature("eStructuralFeatures");
          } catch {
          }
        return null;
      }, (s, r) => {
        "setEContainingClass" in s && s.setEContainingClass(r), r && "setFeatureID" in s && s.setFeatureID(this.featureID++);
      });
      this._eStructuralFeatures = ee(t);
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
        if (r instanceof D) {
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
class ks {
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
    const a = {
      fromString: (p) => p.charAt(0) || "",
      toString: (p) => p ?? ""
    };
    this.registerByClassName("char", a), this.registerByClassName("java.lang.Character", a), this.registerByName("EChar", a), this.registerByName("ECharacterObject", a);
    const u = {
      fromString: (p) => new Date(p),
      toString: (p) => p?.toISOString() ?? ""
    };
    this.registerByClassName("java.util.Date", u), this.registerByName("EDate", u);
    const c = {
      fromString: (p) => p,
      // Keep as string to preserve precision
      toString: (p) => p ?? "0"
    };
    this.registerByClassName("java.math.BigDecimal", c), this.registerByClassName("java.math.BigInteger", c), this.registerByName("EBigDecimal", c), this.registerByName("EBigInteger", c);
    const l = {
      fromString: (p) => {
        if (typeof atob == "function") {
          const E = atob(p), T = new Uint8Array(E.length);
          for (let S = 0; S < E.length; S++)
            T[S] = E.charCodeAt(S);
          return T;
        }
        return new Uint8Array(Buffer.from(p, "base64"));
      },
      toString: (p) => typeof btoa == "function" ? btoa(String.fromCharCode(...p)) : Buffer.from(p).toString("base64")
    };
    this.registerByClassName("byte[]", l), this.registerByName("EByteArray", l);
    const m = {
      fromString: (p) => p,
      toString: (p) => String(p ?? "")
    };
    this.registerByName("EFeatureMapEntry", m);
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
    if (Ce(e)) {
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
    if (Ce(e)) {
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
const y = new ks();
class Se {
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
    return new ct(e);
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
class Bs extends te {
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
class Ms extends te {
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
class H extends W {
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
      const e = new Se();
      e.setEPackage(this), this.eFactoryInstance = e;
    }
    return this.eFactoryInstance;
  }
  setEFactoryInstance(e) {
    this.eFactoryInstance = e;
  }
  getEClassifiers() {
    return this._eClassifiers || (this._eClassifiers = ee(new Bs(this))), this._eClassifiers;
  }
  getESubpackages() {
    return this._eSubpackages || (this._eSubpackages = ee(new Ms(this))), this._eSubpackages;
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
class Et extends W {
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
    if (this.eType && Z(this.eType) && this.eType.eIsProxy()) {
      const e = this.eType, t = e.eProxyURI();
      if (t) {
        const s = this.eResolveProxy(e);
        if (s !== e)
          return this.eType = s, this.eType;
        const r = t.toString(), n = r.indexOf("#");
        if (n > 0) {
          const a = r.substring(0, n), u = r.substring(n + 1), c = [Q.INSTANCE];
          let l = this.eResource()?.getResourceSet();
          if (!l) {
            let m = this.eContainingClass;
            for (; m; ) {
              if (typeof m.eResource == "function") {
                const p = m.eResource();
                if (p) {
                  l = p.getResourceSet();
                  break;
                }
              }
              m = m.getEPackage?.() ?? m.getESuperPackage?.() ?? m.eContainer?.();
            }
          }
          l && c.push(l.getPackageRegistry());
          for (const m of c) {
            const p = m.getEPackage(a);
            if (p) {
              const O = Ee(p, u);
              if (O)
                return this.eType = O, this.eType;
            }
            let E = a;
            const T = E.lastIndexOf("/");
            T >= 0 && (E = E.substring(T + 1));
            const S = E.indexOf(".");
            if (S > 0 && (E = E.substring(0, S)), E)
              for (const O of m.keys()) {
                const U = m.getEPackage(O);
                if (U && U.getName() === E) {
                  const B = Ee(U, u);
                  if (B)
                    return this.eType = B, this.eType;
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
class _ extends Et {
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
class v extends Et {
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
class P extends W {
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
(() => {
  const g = new P();
  return g.setName("EString"), g.setInstanceClassName("java.lang.String"), g;
})();
(() => {
  const g = new P();
  return g.setName("EInt"), g.setInstanceClassName("int"), g;
})();
(() => {
  const g = new P();
  return g.setName("EBoolean"), g.setInstanceClassName("boolean"), g;
})();
(() => {
  const g = new P();
  return g.setName("EFloat"), g.setInstanceClassName("float"), g;
})();
(() => {
  const g = new P();
  return g.setName("EDouble"), g.setInstanceClassName("double"), g;
})();
(() => {
  const g = new P();
  return g.setName("ELong"), g.setInstanceClassName("long"), g;
})();
(() => {
  const g = new P();
  return g.setName("EDate"), g.setInstanceClassName("java.util.Date"), g;
})();
class Ls extends W {
  constructor() {
    super(...arguments), this.source = null, this._detailsMap = null, this.eModelElement = null, this.contents = [], this.references = [];
  }
  getOrCreateDetailsMap() {
    if (!this._detailsMap) {
      const t = x.getEAnnotationClass().getEStructuralFeature("details"), s = x.getEStringToStringMapEntryClass();
      this._detailsMap = qt(this, t, s);
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
          for (const [n, a] of t)
            r.putByKey(n, a);
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
class yt extends W {
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
class Us extends P {
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
            r instanceof yt && r.setEEnum(this);
        }
        super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class js extends W {
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
      const n = t[r].getEType(), a = s[r].getEType();
      if (n !== a)
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
class Gs extends W {
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
class $s extends W {
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
class Xs extends W {
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
const Ys = "ecore.xml.type";
let pe = null;
function Ws() {
  return pe || (pe = new qs(), pe.initialize(), Q.INSTANCE.set(Ct, pe)), pe;
}
const zs = [
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
class qs extends H {
  constructor() {
    super(), this._dataTypes = /* @__PURE__ */ new Map(), this._initialized = !1, this.setName("type"), this.setNsURI(Ct), this.setNsPrefix(Ys);
  }
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0;
    for (const [t, s] of zs) {
      const r = new P();
      r.setName(t), r.setInstanceClassName(s), this.getEClassifiers().push(r), this._dataTypes.set(t, r);
    }
    for (const t of this.getEClassifiers())
      "setEPackage" in t && t.setEPackage(this);
    const e = new Ks(this);
    this.setEFactoryInstance(e), this.registerConverters();
  }
  registerConverters() {
    const e = { fromString: (u) => u.toLowerCase() === "true" || u === "1", toString: (u) => String(u) };
    y.registerByName("Boolean", e), y.registerByName("BooleanObject", e);
    const t = { fromString: (u) => parseInt(u, 10), toString: (u) => String(u) };
    y.registerByName("Int", t), y.registerByName("IntObject", t), y.registerByName("Short", t), y.registerByName("ShortObject", t), y.registerByName("Byte", t), y.registerByName("ByteObject", t), y.registerByName("UnsignedByte", t), y.registerByName("UnsignedByteObject", t), y.registerByName("UnsignedShort", t), y.registerByName("UnsignedShortObject", t), y.registerByName("UnsignedInt", t), y.registerByName("UnsignedIntObject", t);
    const s = {
      fromString: (u) => {
        const c = parseInt(u, 10);
        return Math.abs(c) > Number.MAX_SAFE_INTEGER ? BigInt(u) : c;
      },
      toString: (u) => String(u)
    };
    y.registerByName("Long", s), y.registerByName("LongObject", s);
    const r = { fromString: (u) => parseFloat(u), toString: (u) => String(u) };
    y.registerByName("Float", r), y.registerByName("FloatObject", r), y.registerByName("Double", r), y.registerByName("DoubleObject", r);
    const n = { fromString: (u) => u, toString: (u) => u ?? "0" };
    y.registerByName("Decimal", n), y.registerByName("Integer", n), y.registerByName("NonNegativeInteger", n), y.registerByName("NonPositiveInteger", n), y.registerByName("NegativeInteger", n), y.registerByName("PositiveInteger", n), y.registerByName("UnsignedLong", n);
    const a = { fromString: (u) => u, toString: (u) => u ?? "" };
    y.registerByName("String", a), y.registerByName("AnySimpleType", a), y.registerByName("AnyURI", a), y.registerByName("NormalizedString", a), y.registerByName("Token", a), y.registerByName("Name", a), y.registerByName("NCName", a), y.registerByName("Language", a), y.registerByName("ID", a), y.registerByName("IDREF", a), y.registerByName("ENTITY", a), y.registerByName("NMTOKEN", a), y.registerByName("Date", a), y.registerByName("DateTime", a), y.registerByName("Time", a), y.registerByName("Duration", a), y.registerByName("GDay", a), y.registerByName("GMonth", a), y.registerByName("GMonthDay", a), y.registerByName("GYear", a), y.registerByName("GYearMonth", a), y.registerByName("QName", a), y.registerByName("NOTATION", a);
  }
  getDataType(e) {
    return this._dataTypes.get(e) ?? null;
  }
}
class Ks extends Se {
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
const Tt = "http://www.eclipse.org/emf/2002/Ecore", Hs = "ecore", Ct = "http://www.eclipse.org/emf/2003/XMLType";
let oe = null;
function ue() {
  return oe || (oe = new Js(), oe.initialize(), Qs(), x.register(ue)), oe;
}
function Qs() {
  oe && (Q.INSTANCE.set(Tt, oe), Ws());
}
class Js extends H {
  constructor() {
    super(), this._initialized = !1, this.setName("ecore"), this.setNsURI(Tt), this.setNsPrefix(Hs);
  }
  /**
   * Initialize the package (called once)
   */
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0, this.createDataTypes(), this.createClasses(), this.createAttributes(), this.createReferences(), this.initializeClassifierPackages();
    const e = new Vs(this);
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
    this._eBooleanDataType = new P(), this._eBooleanDataType.setName("EBoolean"), this._eBooleanDataType.setInstanceClassName("boolean"), this.getEClassifiers().push(this._eBooleanDataType), this._eIntDataType = new P(), this._eIntDataType.setName("EInt"), this._eIntDataType.setInstanceClassName("int"), this.getEClassifiers().push(this._eIntDataType), this._eStringDataType = new P(), this._eStringDataType.setName("EString"), this._eStringDataType.setInstanceClassName("java.lang.String"), this.getEClassifiers().push(this._eStringDataType), this._eDoubleDataType = new P(), this._eDoubleDataType.setName("EDouble"), this._eDoubleDataType.setInstanceClassName("double"), this.getEClassifiers().push(this._eDoubleDataType), this._eFloatDataType = new P(), this._eFloatDataType.setName("EFloat"), this._eFloatDataType.setInstanceClassName("float"), this.getEClassifiers().push(this._eFloatDataType), this._eLongDataType = new P(), this._eLongDataType.setName("ELong"), this._eLongDataType.setInstanceClassName("long"), this.getEClassifiers().push(this._eLongDataType), this._eShortDataType = new P(), this._eShortDataType.setName("EShort"), this._eShortDataType.setInstanceClassName("short"), this.getEClassifiers().push(this._eShortDataType), this._eByteDataType = new P(), this._eByteDataType.setName("EByte"), this._eByteDataType.setInstanceClassName("byte"), this.getEClassifiers().push(this._eByteDataType), this._eCharDataType = new P(), this._eCharDataType.setName("EChar"), this._eCharDataType.setInstanceClassName("char"), this.getEClassifiers().push(this._eCharDataType), this._eDateDataType = new P(), this._eDateDataType.setName("EDate"), this._eDateDataType.setInstanceClassName("java.util.Date"), this.getEClassifiers().push(this._eDateDataType), this._eBigIntegerDataType = new P(), this._eBigIntegerDataType.setName("EBigInteger"), this._eBigIntegerDataType.setInstanceClassName("java.math.BigInteger"), this.getEClassifiers().push(this._eBigIntegerDataType), this._eBigDecimalDataType = new P(), this._eBigDecimalDataType.setName("EBigDecimal"), this._eBigDecimalDataType.setInstanceClassName("java.math.BigDecimal"), this.getEClassifiers().push(this._eBigDecimalDataType), this._eFeatureMapEntryDataType = new P(), this._eFeatureMapEntryDataType.setName("EFeatureMapEntry"), this._eFeatureMapEntryDataType.setInstanceClassName("org.eclipse.emf.ecore.util.FeatureMap.Entry"), this.getEClassifiers().push(this._eFeatureMapEntryDataType), this._eJavaObjectDataType = new P(), this._eJavaObjectDataType.setName("EJavaObject"), this._eJavaObjectDataType.setInstanceClassName("java.lang.Object"), this.getEClassifiers().push(this._eJavaObjectDataType), this._eJavaClassDataType = new P(), this._eJavaClassDataType.setName("EJavaClass"), this._eJavaClassDataType.setInstanceClassName("java.lang.Class"), this.getEClassifiers().push(this._eJavaClassDataType);
  }
  createClasses() {
    this._eObjectClass = new D(), this._eObjectClass.setName("EObject"), this.getEClassifiers().push(this._eObjectClass), this._eModelElementClass = new D(), this._eModelElementClass.setName("EModelElement"), this._eModelElementClass.setAbstract(!0), this._eModelElementClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eModelElementClass), this._eNamedElementClass = new D(), this._eNamedElementClass.setName("ENamedElement"), this._eNamedElementClass.setAbstract(!0), this._eNamedElementClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eNamedElementClass), this._eTypedElementClass = new D(), this._eTypedElementClass.setName("ETypedElement"), this._eTypedElementClass.setAbstract(!0), this._eTypedElementClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypedElementClass), this._eClassifierClass = new D(), this._eClassifierClass.setName("EClassifier"), this._eClassifierClass.setAbstract(!0), this._eClassifierClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eClassifierClass), this._eClassClass = new D(), this._eClassClass.setName("EClass"), this._eClassClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eClassClass), this._eDataTypeClass = new D(), this._eDataTypeClass.setName("EDataType"), this._eDataTypeClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eDataTypeClass), this._eEnumClass = new D(), this._eEnumClass.setName("EEnum"), this._eEnumClass.getESuperTypes().push(this._eDataTypeClass), this.getEClassifiers().push(this._eEnumClass), this._eEnumLiteralClass = new D(), this._eEnumLiteralClass.setName("EEnumLiteral"), this._eEnumLiteralClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eEnumLiteralClass), this._ePackageClass = new D(), this._ePackageClass.setName("EPackage"), this._ePackageClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._ePackageClass), this._eFactoryClass = new D(), this._eFactoryClass.setName("EFactory"), this._eFactoryClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eFactoryClass), this._eStructuralFeatureClass = new D(), this._eStructuralFeatureClass.setName("EStructuralFeature"), this._eStructuralFeatureClass.setAbstract(!0), this._eStructuralFeatureClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eStructuralFeatureClass), this._eAttributeClass = new D(), this._eAttributeClass.setName("EAttribute"), this._eAttributeClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eAttributeClass), this._eReferenceClass = new D(), this._eReferenceClass.setName("EReference"), this._eReferenceClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eReferenceClass), this._eOperationClass = new D(), this._eOperationClass.setName("EOperation"), this._eOperationClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eOperationClass), this._eParameterClass = new D(), this._eParameterClass.setName("EParameter"), this._eParameterClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eParameterClass), this._eAnnotationClass = new D(), this._eAnnotationClass.setName("EAnnotation"), this._eAnnotationClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eAnnotationClass), this._eTypeParameterClass = new D(), this._eTypeParameterClass.setName("ETypeParameter"), this._eTypeParameterClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypeParameterClass), this._eGenericTypeClass = new D(), this._eGenericTypeClass.setName("EGenericType"), this._eGenericTypeClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eGenericTypeClass), this._eStringToStringMapEntryClass = new D(), this._eStringToStringMapEntryClass.setName("EStringToStringMapEntry"), this._eStringToStringMapEntryClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eStringToStringMapEntryClass);
  }
  createAttributes() {
    const e = new _();
    e.setName("name"), e.setEType(this._eStringDataType), this._eNamedElementClass.getEStructuralFeatures().push(e);
    const t = new _();
    t.setName("ordered"), t.setEType(this._eBooleanDataType), t.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new _();
    s.setName("unique"), s.setEType(this._eBooleanDataType), s.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(s);
    const r = new _();
    r.setName("lowerBound"), r.setEType(this._eIntDataType), r.setDefaultValueLiteral("0"), this._eTypedElementClass.getEStructuralFeatures().push(r);
    const n = new _();
    n.setName("upperBound"), n.setEType(this._eIntDataType), n.setDefaultValueLiteral("1"), this._eTypedElementClass.getEStructuralFeatures().push(n);
    const a = new _();
    a.setName("instanceClassName"), a.setEType(this._eStringDataType), this._eClassifierClass.getEStructuralFeatures().push(a);
    const u = new _();
    u.setName("abstract"), u.setEType(this._eBooleanDataType), u.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(u);
    const c = new _();
    c.setName("interface"), c.setEType(this._eBooleanDataType), c.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(c);
    const l = new _();
    l.setName("nsURI"), l.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(l);
    const m = new _();
    m.setName("nsPrefix"), m.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(m);
    const p = new _();
    p.setName("changeable"), p.setEType(this._eBooleanDataType), p.setDefaultValueLiteral("true"), this._eStructuralFeatureClass.getEStructuralFeatures().push(p);
    const E = new _();
    E.setName("volatile"), E.setEType(this._eBooleanDataType), E.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(E);
    const T = new _();
    T.setName("transient"), T.setEType(this._eBooleanDataType), T.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(T);
    const S = new _();
    S.setName("defaultValueLiteral"), S.setEType(this._eStringDataType), this._eStructuralFeatureClass.getEStructuralFeatures().push(S);
    const O = new _();
    O.setName("unsettable"), O.setEType(this._eBooleanDataType), O.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(O);
    const U = new _();
    U.setName("derived"), U.setEType(this._eBooleanDataType), U.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(U);
    const B = new _();
    B.setName("iD"), B.setEType(this._eBooleanDataType), B.setDefaultValueLiteral("false"), this._eAttributeClass.getEStructuralFeatures().push(B);
    const z = new _();
    z.setName("containment"), z.setEType(this._eBooleanDataType), z.setDefaultValueLiteral("false"), this._eReferenceClass.getEStructuralFeatures().push(z);
    const K = new _();
    K.setName("resolveProxies"), K.setEType(this._eBooleanDataType), K.setDefaultValueLiteral("true"), this._eReferenceClass.getEStructuralFeatures().push(K);
    const q = new _();
    q.setName("value"), q.setEType(this._eIntDataType), q.setDefaultValueLiteral("0"), this._eEnumLiteralClass.getEStructuralFeatures().push(q);
    const F = new _();
    F.setName("literal"), F.setEType(this._eStringDataType), this._eEnumLiteralClass.getEStructuralFeatures().push(F);
    const X = new _();
    X.setName("source"), X.setEType(this._eStringDataType), this._eAnnotationClass.getEStructuralFeatures().push(X);
    const le = new _();
    le.setName("key"), le.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(le);
    const Y = new _();
    Y.setName("value"), Y.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(Y);
    const ne = new _();
    ne.setName("serializable"), ne.setEType(this._eBooleanDataType), ne.setDefaultValueLiteral("true"), this._eDataTypeClass.getEStructuralFeatures().push(ne);
  }
  createReferences() {
    const e = new v();
    e.setName("eAnnotations"), e.setEType(this._eAnnotationClass), e.setContainment(!0), e.setUpperBound(-1), this._eModelElementClass.getEStructuralFeatures().push(e);
    const t = new v();
    t.setName("eType"), t.setEType(this._eClassifierClass), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new v();
    s.setName("eSuperTypes"), s.setEType(this._eClassClass), s.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(s);
    const r = new v();
    r.setName("eStructuralFeatures"), r.setEType(this._eStructuralFeatureClass), r.setContainment(!0), r.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(r);
    const n = new v();
    n.setName("eOperations"), n.setEType(this._eOperationClass), n.setContainment(!0), n.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(n);
    const a = new v();
    a.setName("eClassifiers"), a.setEType(this._eClassifierClass), a.setContainment(!0), a.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(a);
    const u = new v();
    u.setName("eSubpackages"), u.setEType(this._ePackageClass), u.setContainment(!0), u.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(u);
    const c = new v();
    c.setName("eFactoryInstance"), c.setEType(this._eFactoryClass), this._ePackageClass.getEStructuralFeatures().push(c);
    const l = new v();
    l.setName("eLiterals"), l.setEType(this._eEnumLiteralClass), l.setContainment(!0), l.setUpperBound(-1), this._eEnumClass.getEStructuralFeatures().push(l);
    const m = new v();
    m.setName("eOpposite"), m.setEType(this._eReferenceClass), this._eReferenceClass.getEStructuralFeatures().push(m);
    const p = new v();
    p.setName("eParameters"), p.setEType(this._eParameterClass), p.setContainment(!0), p.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(p);
    const E = new v();
    E.setName("details"), E.setEType(this._eStringToStringMapEntryClass), E.setContainment(!0), E.setUpperBound(-1), this._eAnnotationClass.getEStructuralFeatures().push(E);
    const T = new v();
    T.setName("eGenericType"), T.setEType(this._eGenericTypeClass), T.setContainment(!0), this._eTypedElementClass.getEStructuralFeatures().push(T);
    const S = new v();
    S.setName("eTypeParameters"), S.setEType(this._eTypeParameterClass), S.setContainment(!0), S.setUpperBound(-1), this._eClassifierClass.getEStructuralFeatures().push(S);
    const O = new v();
    O.setName("eGenericSuperTypes"), O.setEType(this._eGenericTypeClass), O.setContainment(!0), O.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(O);
    const U = new v();
    U.setName("eTypeParameters"), U.setEType(this._eTypeParameterClass), U.setContainment(!0), U.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(U);
    const B = new v();
    B.setName("eBounds"), B.setEType(this._eGenericTypeClass), B.setContainment(!0), B.setUpperBound(-1), this._eTypeParameterClass.getEStructuralFeatures().push(B);
    const z = new v();
    z.setName("eClassifier"), z.setEType(this._eClassifierClass), this._eGenericTypeClass.getEStructuralFeatures().push(z);
    const K = new v();
    K.setName("eTypeParameter"), K.setEType(this._eTypeParameterClass), this._eGenericTypeClass.getEStructuralFeatures().push(K);
    const q = new v();
    q.setName("eTypeArguments"), q.setEType(this._eGenericTypeClass), q.setContainment(!0), q.setUpperBound(-1), this._eGenericTypeClass.getEStructuralFeatures().push(q);
    const F = new v();
    F.setName("eUpperBound"), F.setEType(this._eGenericTypeClass), F.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(F);
    const X = new v();
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
class Vs extends Se {
  constructor(e) {
    super(), this._ePackage = e;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(e) {
    switch (e.getName()) {
      case "EClass":
        return new D();
      case "EAttribute":
        return new _();
      case "EReference":
        return new v();
      case "EDataType":
        return new P();
      case "EEnum":
        return new Us();
      case "EEnumLiteral":
        return new yt();
      case "EAnnotation":
        return new Ls();
      case "EPackage":
        return new H();
      case "EOperation":
        return new js();
      case "EParameter":
        return new Gs();
      case "EGenericType":
        return new $s();
      case "ETypeParameter":
        return new Xs();
      default:
        return super.create(e);
    }
  }
}
ue();
class _e extends Se {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new _e()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(b.eINSTANCE);
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class b extends H {
  static eNAME = "Events";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.events";
  static eNS_PREFIX = "Events";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new b(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    PAYLOAD: null,
    PAYLOAD__EVENT_TYPE: null,
    PAYLOAD__WIDGET_ID: null,
    PAYLOAD__TIMESTAMP: null,
    PAYLOAD__METADATA: null,
    WIDGET_ACTION_INTERFACE: null,
    SYSTEM_ACTION_INTERFACE: null,
    PAGE_ACTION_INTERFACE: null
  };
  constructor() {
    super(), this.setName(b.eNAME), this.setNsURI(b.eNS_URI), this.setNsPrefix(b.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    Q.INSTANCE.set(b.eNS_URI, this), this.setEFactoryInstance(_e.eINSTANCE);
    const e = new D();
    e.setName("Payload"), e.setAbstract(!0), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), b.Literals.PAYLOAD = e;
    const t = new _();
    t.setName("eventType"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), b.Literals.PAYLOAD__EVENT_TYPE = t;
    const s = new _();
    s.setName("widgetId"), s.setLowerBound(0), s.setUpperBound(1), e.getEStructuralFeatures().push(s), b.Literals.PAYLOAD__WIDGET_ID = s;
    const r = new _();
    r.setName("timestamp"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), b.Literals.PAYLOAD__TIMESTAMP = r;
    const n = new _();
    n.setName("metadata"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), b.Literals.PAYLOAD__METADATA = n;
    const a = new D();
    a.setName("WidgetActionInterface"), a.setAbstract(!0), a.setInterface(!1), this.getEClassifiers().push(a), a.setEPackage(this), b.Literals.WIDGET_ACTION_INTERFACE = a;
    const u = new D();
    u.setName("SystemActionInterface"), u.setAbstract(!0), u.setInterface(!1), this.getEClassifiers().push(u), u.setEPackage(this), b.Literals.SYSTEM_ACTION_INTERFACE = u;
    const c = new D();
    c.setName("PageActionInterface"), c.setAbstract(!0), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), b.Literals.PAGE_ACTION_INTERFACE = c, b.Literals.SYSTEM_ACTION_INTERFACE.getESuperTypes().push(b.Literals.WIDGET_ACTION_INTERFACE), b.Literals.PAGE_ACTION_INTERFACE.getESuperTypes().push(b.Literals.WIDGET_ACTION_INTERFACE), b.Literals.PAYLOAD__EVENT_TYPE.setEType(ue().getEClassifier("EString")), b.Literals.PAYLOAD__WIDGET_ID.setEType(ue().getEClassifier("EString")), b.Literals.PAYLOAD__TIMESTAMP.setEType(ue().getEClassifier("ELong")), b.Literals.PAYLOAD__METADATA.setEType(ue().getEClassifier("EJavaObject"));
  }
}
class R extends W {
  // Feature ID Constants (eLiterals)
  static EVENT_TYPE = 0;
  static WIDGET_ID = 1;
  static TIMESTAMP = 2;
  static METADATA = 3;
  // Private fields
  _eventType;
  _widgetId;
  _timestamp;
  _metadata;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return b.Literals.PAYLOAD;
  }
  // Getters and Setters
  get eventType() {
    return this._eventType;
  }
  set eventType(e) {
    const t = this._eventType;
    this._eventType = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(R.EVENT_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.EVENT_TYPE,
      merge: () => !1
    });
  }
  get widgetId() {
    return this._widgetId;
  }
  set widgetId(e) {
    const t = this._widgetId;
    this._widgetId = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(R.WIDGET_ID),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.WIDGET_ID,
      merge: () => !1
    });
  }
  get timestamp() {
    return this._timestamp;
  }
  set timestamp(e) {
    const t = this._timestamp;
    this._timestamp = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(R.TIMESTAMP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.TIMESTAMP,
      merge: () => !1
    });
  }
  get metadata() {
    return this._metadata;
  }
  set metadata(e) {
    const t = this._metadata;
    this._metadata = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(R.METADATA),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.METADATA,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case R.EVENT_TYPE:
        return this.eventType;
      case R.WIDGET_ID:
        return this.widgetId;
      case R.TIMESTAMP:
        return this.timestamp;
      case R.METADATA:
        return this.metadata;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case R.EVENT_TYPE:
        this.eventType = t, super.eSet(e, t);
        break;
      case R.WIDGET_ID:
        this.widgetId = t, super.eSet(e, t);
        break;
      case R.TIMESTAMP:
        this.timestamp = t, super.eSet(e, t);
        break;
      case R.METADATA:
        this.metadata = t, super.eSet(e, t);
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
      case R.EVENT_TYPE:
        return this._eventType !== void 0;
      case R.WIDGET_ID:
        return this._widgetId !== void 0;
      case R.TIMESTAMP:
        return this._timestamp !== void 0;
      case R.METADATA:
        return this._metadata !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case R.EVENT_TYPE:
        this._eventType = void 0;
        return;
      case R.WIDGET_ID:
        this._widgetId = void 0;
        return;
      case R.TIMESTAMP:
        this._timestamp = void 0;
        return;
      case R.METADATA:
        this._metadata = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class Le extends W {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return b.Literals.WIDGET_ACTION_INTERFACE;
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
}
class Zs extends Le {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return b.Literals.SYSTEM_ACTION_INTERFACE;
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
}
class er extends Le {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return b.Literals.PAGE_ACTION_INTERFACE;
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
}
const Nt = ye("EventRegistry"), tr = Symbol.for(Nt), St = ye("EventActionsRegistry"), sr = Symbol.for(St), _t = ye("EventManager"), rr = Symbol.for(_t), At = ye("EventBusBridge"), nr = Symbol.for(At), ir = ye("EcoreMetadataService"), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ECORE_METADATA_SERVICE_ID: ir,
  EVENT_ACTIONS_REGISTRY: sr,
  EVENT_ACTIONS_REGISTRY_ID: St,
  EVENT_BUS_BRIDGE: nr,
  EVENT_BUS_BRIDGE_ID: At,
  EVENT_MANAGER: rr,
  EVENT_MANAGER_ID: _t,
  EVENT_MODEL_ECORE: Ot,
  EVENT_REGISTRY: tr,
  EVENT_REGISTRY_ID: Nt,
  EventsFactory: _e,
  EventsPackage: b,
  PageActionInterfaceImpl: er,
  PayloadImpl: R,
  SystemActionInterfaceImpl: Zs,
  WidgetActionInterfaceImpl: Le
}, Symbol.toStringTag, { value: "Module" })), it = "org.eclipse.daanse.board.app.lib.api.events", or = "0.0.1-next.1";
async function ur(g) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${it}: tsm runtime is not initialized`);
  e.register(it, ar, or, "lib.api.events"), await void 0;
}
async function cr(g) {
  await void 0;
}
export {
  ir as ECORE_METADATA_SERVICE_ID,
  sr as EVENT_ACTIONS_REGISTRY,
  St as EVENT_ACTIONS_REGISTRY_ID,
  nr as EVENT_BUS_BRIDGE,
  At as EVENT_BUS_BRIDGE_ID,
  rr as EVENT_MANAGER,
  _t as EVENT_MANAGER_ID,
  Ot as EVENT_MODEL_ECORE,
  tr as EVENT_REGISTRY,
  Nt as EVENT_REGISTRY_ID,
  _e as EventsFactory,
  b as EventsPackage,
  er as PageActionInterfaceImpl,
  R as PayloadImpl,
  Zs as SystemActionInterfaceImpl,
  Le as WidgetActionInterfaceImpl,
  ur as activate,
  cr as deactivate
};
