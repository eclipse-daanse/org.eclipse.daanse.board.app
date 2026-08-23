/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var fo = "1.9.4";
function T(t) {
  var e, i, n, o;
  for (i = 1, n = arguments.length; i < n; i++) {
    o = arguments[i];
    for (e in o)
      t[e] = o[e];
  }
  return t;
}
var Wt = Object.create || /* @__PURE__ */ (function() {
  function t() {
  }
  return function(e) {
    return t.prototype = e, new t();
  };
})();
function M(t, e) {
  var i = Array.prototype.slice;
  if (t.bind)
    return t.bind.apply(t, i.call(arguments, 1));
  var n = i.call(arguments, 2);
  return function() {
    return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
  };
}
var oi = 0;
function w(t) {
  return "_leaflet_id" in t || (t._leaflet_id = ++oi), t._leaflet_id;
}
function si(t, e, i) {
  var n, o, s, r;
  return r = function() {
    n = !1, o && (s.apply(i, o), o = !1);
  }, s = function() {
    n ? o = arguments : (t.apply(i, arguments), setTimeout(r, e), n = !0);
  }, s;
}
function Ct(t, e, i) {
  var n = e[1], o = e[0], s = n - o;
  return t === n && i ? t : ((t - o) % s + s) % s + o;
}
function k() {
  return !1;
}
function K(t, e) {
  if (e === !1)
    return t;
  var i = Math.pow(10, e === void 0 ? 6 : e);
  return Math.round(t * i) / i;
}
function me(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function ut(t) {
  return me(t).split(/\s+/);
}
function S(t, e) {
  Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? Wt(t.options) : {});
  for (var i in e)
    t.options[i] = e[i];
  return t.options;
}
function ri(t, e, i) {
  var n = [];
  for (var o in t)
    n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
  return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
}
var un = /\{ *([\w_ -]+) *\}/g;
function ai(t, e) {
  return t.replace(un, function(i, n) {
    var o = e[n];
    if (o === void 0)
      throw new Error("No value provided for variable " + i);
    return typeof o == "function" && (o = o(e)), o;
  });
}
var j = Array.isArray || function(t) {
  return Object.prototype.toString.call(t) === "[object Array]";
};
function pe(t, e) {
  for (var i = 0; i < t.length; i++)
    if (t[i] === e)
      return i;
  return -1;
}
var Nt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
function se(t) {
  return window["webkit" + t] || window["moz" + t] || window["ms" + t];
}
var je = 0;
function hi(t) {
  var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - je));
  return je = e + i, window.setTimeout(t, i);
}
var re = window.requestAnimationFrame || se("RequestAnimationFrame") || hi, ui = window.cancelAnimationFrame || se("CancelAnimationFrame") || se("CancelRequestAnimationFrame") || function(t) {
  window.clearTimeout(t);
};
function D(t, e, i) {
  if (i && re === hi)
    t.call(e);
  else
    return re.call(window, M(t, e));
}
function V(t) {
  t && ui.call(window, t);
}
var _o = {
  __proto__: null,
  extend: T,
  create: Wt,
  bind: M,
  get lastId() {
    return oi;
  },
  stamp: w,
  throttle: si,
  wrapNum: Ct,
  falseFn: k,
  formatNum: K,
  trim: me,
  splitWords: ut,
  setOptions: S,
  getParamString: ri,
  template: ai,
  isArray: j,
  indexOf: pe,
  emptyImageUrl: Nt,
  requestFn: re,
  cancelFn: ui,
  requestAnimFrame: D,
  cancelAnimFrame: V
};
function st() {
}
st.extend = function(t) {
  var e = function() {
    S(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
  }, i = e.__super__ = this.prototype, n = Wt(i);
  n.constructor = e, e.prototype = n;
  for (var o in this)
    Object.prototype.hasOwnProperty.call(this, o) && o !== "prototype" && o !== "__super__" && (e[o] = this[o]);
  return t.statics && T(e, t.statics), t.includes && (ln(t.includes), T.apply(null, [n].concat(t.includes))), T(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? Wt(i.options) : {}, T(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
    if (!this._initHooksCalled) {
      i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
      for (var s = 0, r = n._initHooks.length; s < r; s++)
        n._initHooks[s].call(this);
    }
  }, e;
};
st.include = function(t) {
  var e = this.prototype.options;
  return T(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
};
st.mergeOptions = function(t) {
  return T(this.prototype.options, t), this;
};
st.addInitHook = function(t) {
  var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
    this[t].apply(this, e);
  };
  return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
};
function ln(t) {
  if (!(typeof L > "u" || !L || !L.Mixin)) {
    t = j(t) ? t : [t];
    for (var e = 0; e < t.length; e++)
      t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
  }
}
var W = {
  /* @method on(type: String, fn: Function, context?: Object): this
   * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
   *
   * @alternative
   * @method on(eventMap: Object): this
   * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
   */
  on: function(t, e, i) {
    if (typeof t == "object")
      for (var n in t)
        this._on(n, t[n], e);
    else {
      t = ut(t);
      for (var o = 0, s = t.length; o < s; o++)
        this._on(t[o], e, i);
    }
    return this;
  },
  /* @method off(type: String, fn?: Function, context?: Object): this
   * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
   *
   * @alternative
   * @method off(eventMap: Object): this
   * Removes a set of type/listener pairs.
   *
   * @alternative
   * @method off: this
   * Removes all listeners to all events on the object. This includes implicitly attached events.
   */
  off: function(t, e, i) {
    if (!arguments.length)
      delete this._events;
    else if (typeof t == "object")
      for (var n in t)
        this._off(n, t[n], e);
    else {
      t = ut(t);
      for (var o = arguments.length === 1, s = 0, r = t.length; s < r; s++)
        o ? this._off(t[s]) : this._off(t[s], e, i);
    }
    return this;
  },
  // attach listener (without syntactic sugar now)
  _on: function(t, e, i, n) {
    if (typeof e != "function") {
      console.warn("wrong listener type: " + typeof e);
      return;
    }
    if (this._listens(t, e, i) === !1) {
      i === this && (i = void 0);
      var o = { fn: e, ctx: i };
      n && (o.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(o);
    }
  },
  _off: function(t, e, i) {
    var n, o, s;
    if (this._events && (n = this._events[t], !!n)) {
      if (arguments.length === 1) {
        if (this._firingCount)
          for (o = 0, s = n.length; o < s; o++)
            n[o].fn = k;
        delete this._events[t];
        return;
      }
      if (typeof e != "function") {
        console.warn("wrong listener type: " + typeof e);
        return;
      }
      var r = this._listens(t, e, i);
      if (r !== !1) {
        var a = n[r];
        this._firingCount && (a.fn = k, this._events[t] = n = n.slice()), n.splice(r, 1);
      }
    }
  },
  // @method fire(type: String, data?: Object, propagate?: Boolean): this
  // Fires an event of the specified type. You can optionally provide a data
  // object — the first argument of the listener function will contain its
  // properties. The event can optionally be propagated to event parents.
  fire: function(t, e, i) {
    if (!this.listens(t, i))
      return this;
    var n = T({}, e, {
      type: t,
      target: this,
      sourceTarget: e && e.sourceTarget || this
    });
    if (this._events) {
      var o = this._events[t];
      if (o) {
        this._firingCount = this._firingCount + 1 || 1;
        for (var s = 0, r = o.length; s < r; s++) {
          var a = o[s], h = a.fn;
          a.once && this.off(t, h, a.ctx), h.call(a.ctx || this, n);
        }
        this._firingCount--;
      }
    }
    return i && this._propagateEvent(n), this;
  },
  // @method listens(type: String, propagate?: Boolean): Boolean
  // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
  // Returns `true` if a particular event type has any listeners attached to it.
  // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
  listens: function(t, e, i, n) {
    typeof t != "string" && console.warn('"string" type argument expected');
    var o = e;
    typeof e != "function" && (n = !!e, o = void 0, i = void 0);
    var s = this._events && this._events[t];
    if (s && s.length && this._listens(t, o, i) !== !1)
      return !0;
    if (n) {
      for (var r in this._eventParents)
        if (this._eventParents[r].listens(t, e, i, n))
          return !0;
    }
    return !1;
  },
  // returns the index (number) or false
  _listens: function(t, e, i) {
    if (!this._events)
      return !1;
    var n = this._events[t] || [];
    if (!e)
      return !!n.length;
    i === this && (i = void 0);
    for (var o = 0, s = n.length; o < s; o++)
      if (n[o].fn === e && n[o].ctx === i)
        return o;
    return !1;
  },
  // @method once(…): this
  // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
  once: function(t, e, i) {
    if (typeof t == "object")
      for (var n in t)
        this._on(n, t[n], e, !0);
    else {
      t = ut(t);
      for (var o = 0, s = t.length; o < s; o++)
        this._on(t[o], e, i, !0);
    }
    return this;
  },
  // @method addEventParent(obj: Evented): this
  // Adds an event parent - an `Evented` that will receive propagated events
  addEventParent: function(t) {
    return this._eventParents = this._eventParents || {}, this._eventParents[w(t)] = t, this;
  },
  // @method removeEventParent(obj: Evented): this
  // Removes an event parent, so it will stop receiving propagated events
  removeEventParent: function(t) {
    return this._eventParents && delete this._eventParents[w(t)], this;
  },
  _propagateEvent: function(t) {
    for (var e in this._eventParents)
      this._eventParents[e].fire(t.type, T({
        layer: t.target,
        propagatedFrom: t.target
      }, t), !0);
  }
};
W.addEventListener = W.on;
W.removeEventListener = W.clearAllEventListeners = W.off;
W.addOneTimeEventListener = W.once;
W.fireEvent = W.fire;
W.hasEventListeners = W.listens;
var Kt = st.extend(W);
function m(t, e, i) {
  this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
}
var Ke = Math.trunc || function(t) {
  return t > 0 ? Math.floor(t) : Math.ceil(t);
};
m.prototype = {
  // @method clone(): Point
  // Returns a copy of the current point.
  clone: function() {
    return new m(this.x, this.y);
  },
  // @method add(otherPoint: Point): Point
  // Returns the result of addition of the current and the given points.
  add: function(t) {
    return this.clone()._add(d(t));
  },
  _add: function(t) {
    return this.x += t.x, this.y += t.y, this;
  },
  // @method subtract(otherPoint: Point): Point
  // Returns the result of subtraction of the given point from the current.
  subtract: function(t) {
    return this.clone()._subtract(d(t));
  },
  _subtract: function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  },
  // @method divideBy(num: Number): Point
  // Returns the result of division of the current point by the given number.
  divideBy: function(t) {
    return this.clone()._divideBy(t);
  },
  _divideBy: function(t) {
    return this.x /= t, this.y /= t, this;
  },
  // @method multiplyBy(num: Number): Point
  // Returns the result of multiplication of the current point by the given number.
  multiplyBy: function(t) {
    return this.clone()._multiplyBy(t);
  },
  _multiplyBy: function(t) {
    return this.x *= t, this.y *= t, this;
  },
  // @method scaleBy(scale: Point): Point
  // Multiply each coordinate of the current point by each coordinate of
  // `scale`. In linear algebra terms, multiply the point by the
  // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
  // defined by `scale`.
  scaleBy: function(t) {
    return new m(this.x * t.x, this.y * t.y);
  },
  // @method unscaleBy(scale: Point): Point
  // Inverse of `scaleBy`. Divide each coordinate of the current point by
  // each coordinate of `scale`.
  unscaleBy: function(t) {
    return new m(this.x / t.x, this.y / t.y);
  },
  // @method round(): Point
  // Returns a copy of the current point with rounded coordinates.
  round: function() {
    return this.clone()._round();
  },
  _round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  },
  // @method floor(): Point
  // Returns a copy of the current point with floored coordinates (rounded down).
  floor: function() {
    return this.clone()._floor();
  },
  _floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  },
  // @method ceil(): Point
  // Returns a copy of the current point with ceiled coordinates (rounded up).
  ceil: function() {
    return this.clone()._ceil();
  },
  _ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  },
  // @method trunc(): Point
  // Returns a copy of the current point with truncated coordinates (rounded towards zero).
  trunc: function() {
    return this.clone()._trunc();
  },
  _trunc: function() {
    return this.x = Ke(this.x), this.y = Ke(this.y), this;
  },
  // @method distanceTo(otherPoint: Point): Number
  // Returns the cartesian distance between the current and the given points.
  distanceTo: function(t) {
    t = d(t);
    var e = t.x - this.x, i = t.y - this.y;
    return Math.sqrt(e * e + i * i);
  },
  // @method equals(otherPoint: Point): Boolean
  // Returns `true` if the given point has the same coordinates.
  equals: function(t) {
    return t = d(t), t.x === this.x && t.y === this.y;
  },
  // @method contains(otherPoint: Point): Boolean
  // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
  contains: function(t) {
    return t = d(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
  },
  // @method toString(): String
  // Returns a string representation of the point for debugging purposes.
  toString: function() {
    return "Point(" + K(this.x) + ", " + K(this.y) + ")";
  }
};
function d(t, e, i) {
  return t instanceof m ? t : j(t) ? new m(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new m(t.x, t.y) : new m(t, e, i);
}
function z(t, e) {
  if (t)
    for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
      this.extend(i[n]);
}
z.prototype = {
  // @method extend(point: Point): this
  // Extends the bounds to contain the given point.
  // @alternative
  // @method extend(otherBounds: Bounds): this
  // Extend the bounds to contain the given bounds
  extend: function(t) {
    var e, i;
    if (!t)
      return this;
    if (t instanceof m || typeof t[0] == "number" || "x" in t)
      e = i = d(t);
    else if (t = H(t), e = t.min, i = t.max, !e || !i)
      return this;
    return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
  },
  // @method getCenter(round?: Boolean): Point
  // Returns the center point of the bounds.
  getCenter: function(t) {
    return d(
      (this.min.x + this.max.x) / 2,
      (this.min.y + this.max.y) / 2,
      t
    );
  },
  // @method getBottomLeft(): Point
  // Returns the bottom-left point of the bounds.
  getBottomLeft: function() {
    return d(this.min.x, this.max.y);
  },
  // @method getTopRight(): Point
  // Returns the top-right point of the bounds.
  getTopRight: function() {
    return d(this.max.x, this.min.y);
  },
  // @method getTopLeft(): Point
  // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
  getTopLeft: function() {
    return this.min;
  },
  // @method getBottomRight(): Point
  // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
  getBottomRight: function() {
    return this.max;
  },
  // @method getSize(): Point
  // Returns the size of the given bounds
  getSize: function() {
    return this.max.subtract(this.min);
  },
  // @method contains(otherBounds: Bounds): Boolean
  // Returns `true` if the rectangle contains the given one.
  // @alternative
  // @method contains(point: Point): Boolean
  // Returns `true` if the rectangle contains the given point.
  contains: function(t) {
    var e, i;
    return typeof t[0] == "number" || t instanceof m ? t = d(t) : t = H(t), t instanceof z ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
  },
  // @method intersects(otherBounds: Bounds): Boolean
  // Returns `true` if the rectangle intersects the given bounds. Two bounds
  // intersect if they have at least one point in common.
  intersects: function(t) {
    t = H(t);
    var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x >= e.x && n.x <= i.x, r = o.y >= e.y && n.y <= i.y;
    return s && r;
  },
  // @method overlaps(otherBounds: Bounds): Boolean
  // Returns `true` if the rectangle overlaps the given bounds. Two bounds
  // overlap if their intersection is an area.
  overlaps: function(t) {
    t = H(t);
    var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x > e.x && n.x < i.x, r = o.y > e.y && n.y < i.y;
    return s && r;
  },
  // @method isValid(): Boolean
  // Returns `true` if the bounds are properly initialized.
  isValid: function() {
    return !!(this.min && this.max);
  },
  // @method pad(bufferRatio: Number): Bounds
  // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
  // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
  // Negative values will retract the bounds.
  pad: function(t) {
    var e = this.min, i = this.max, n = Math.abs(e.x - i.x) * t, o = Math.abs(e.y - i.y) * t;
    return H(
      d(e.x - n, e.y - o),
      d(i.x + n, i.y + o)
    );
  },
  // @method equals(otherBounds: Bounds): Boolean
  // Returns `true` if the rectangle is equivalent to the given bounds.
  equals: function(t) {
    return t ? (t = H(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
  }
};
function H(t, e) {
  return !t || t instanceof z ? t : new z(t, e);
}
function F(t, e) {
  if (t)
    for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
      this.extend(i[n]);
}
F.prototype = {
  // @method extend(latlng: LatLng): this
  // Extend the bounds to contain the given point
  // @alternative
  // @method extend(otherBounds: LatLngBounds): this
  // Extend the bounds to contain the given bounds
  extend: function(t) {
    var e = this._southWest, i = this._northEast, n, o;
    if (t instanceof P)
      n = t, o = t;
    else if (t instanceof F) {
      if (n = t._southWest, o = t._northEast, !n || !o)
        return this;
    } else
      return t ? this.extend(g(t) || I(t)) : this;
    return !e && !i ? (this._southWest = new P(n.lat, n.lng), this._northEast = new P(o.lat, o.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(o.lat, i.lat), i.lng = Math.max(o.lng, i.lng)), this;
  },
  // @method pad(bufferRatio: Number): LatLngBounds
  // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
  // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
  // Negative values will retract the bounds.
  pad: function(t) {
    var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, o = Math.abs(e.lng - i.lng) * t;
    return new F(
      new P(e.lat - n, e.lng - o),
      new P(i.lat + n, i.lng + o)
    );
  },
  // @method getCenter(): LatLng
  // Returns the center point of the bounds.
  getCenter: function() {
    return new P(
      (this._southWest.lat + this._northEast.lat) / 2,
      (this._southWest.lng + this._northEast.lng) / 2
    );
  },
  // @method getSouthWest(): LatLng
  // Returns the south-west point of the bounds.
  getSouthWest: function() {
    return this._southWest;
  },
  // @method getNorthEast(): LatLng
  // Returns the north-east point of the bounds.
  getNorthEast: function() {
    return this._northEast;
  },
  // @method getNorthWest(): LatLng
  // Returns the north-west point of the bounds.
  getNorthWest: function() {
    return new P(this.getNorth(), this.getWest());
  },
  // @method getSouthEast(): LatLng
  // Returns the south-east point of the bounds.
  getSouthEast: function() {
    return new P(this.getSouth(), this.getEast());
  },
  // @method getWest(): Number
  // Returns the west longitude of the bounds
  getWest: function() {
    return this._southWest.lng;
  },
  // @method getSouth(): Number
  // Returns the south latitude of the bounds
  getSouth: function() {
    return this._southWest.lat;
  },
  // @method getEast(): Number
  // Returns the east longitude of the bounds
  getEast: function() {
    return this._northEast.lng;
  },
  // @method getNorth(): Number
  // Returns the north latitude of the bounds
  getNorth: function() {
    return this._northEast.lat;
  },
  // @method contains(otherBounds: LatLngBounds): Boolean
  // Returns `true` if the rectangle contains the given one.
  // @alternative
  // @method contains (latlng: LatLng): Boolean
  // Returns `true` if the rectangle contains the given point.
  contains: function(t) {
    typeof t[0] == "number" || t instanceof P || "lat" in t ? t = g(t) : t = I(t);
    var e = this._southWest, i = this._northEast, n, o;
    return t instanceof F ? (n = t.getSouthWest(), o = t.getNorthEast()) : n = o = t, n.lat >= e.lat && o.lat <= i.lat && n.lng >= e.lng && o.lng <= i.lng;
  },
  // @method intersects(otherBounds: LatLngBounds): Boolean
  // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
  intersects: function(t) {
    t = I(t);
    var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat >= e.lat && n.lat <= i.lat, r = o.lng >= e.lng && n.lng <= i.lng;
    return s && r;
  },
  // @method overlaps(otherBounds: LatLngBounds): Boolean
  // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
  overlaps: function(t) {
    t = I(t);
    var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat > e.lat && n.lat < i.lat, r = o.lng > e.lng && n.lng < i.lng;
    return s && r;
  },
  // @method toBBoxString(): String
  // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
  toBBoxString: function() {
    return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
  },
  // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
  // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
  equals: function(t, e) {
    return t ? (t = I(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
  },
  // @method isValid(): Boolean
  // Returns `true` if the bounds are properly initialized.
  isValid: function() {
    return !!(this._southWest && this._northEast);
  }
};
function I(t, e) {
  return t instanceof F ? t : new F(t, e);
}
function P(t, e, i) {
  if (isNaN(t) || isNaN(e))
    throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
  this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i);
}
P.prototype = {
  // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
  // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
  equals: function(t, e) {
    if (!t)
      return !1;
    t = g(t);
    var i = Math.max(
      Math.abs(this.lat - t.lat),
      Math.abs(this.lng - t.lng)
    );
    return i <= (e === void 0 ? 1e-9 : e);
  },
  // @method toString(): String
  // Returns a string representation of the point (for debugging purposes).
  toString: function(t) {
    return "LatLng(" + K(this.lat, t) + ", " + K(this.lng, t) + ")";
  },
  // @method distanceTo(otherLatLng: LatLng): Number
  // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
  distanceTo: function(t) {
    return ot.distance(this, g(t));
  },
  // @method wrap(): LatLng
  // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
  wrap: function() {
    return ot.wrapLatLng(this);
  },
  // @method toBounds(sizeInMeters: Number): LatLngBounds
  // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
  toBounds: function(t) {
    var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
    return I(
      [this.lat - e, this.lng - i],
      [this.lat + e, this.lng + i]
    );
  },
  clone: function() {
    return new P(this.lat, this.lng, this.alt);
  }
};
function g(t, e, i) {
  return t instanceof P ? t : j(t) && typeof t[0] != "object" ? t.length === 3 ? new P(t[0], t[1], t[2]) : t.length === 2 ? new P(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new P(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new P(t, e, i);
}
var rt = {
  // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
  // Projects geographical coordinates into pixel coordinates for a given zoom.
  latLngToPoint: function(t, e) {
    var i = this.projection.project(t), n = this.scale(e);
    return this.transformation._transform(i, n);
  },
  // @method pointToLatLng(point: Point, zoom: Number): LatLng
  // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
  // zoom into geographical coordinates.
  pointToLatLng: function(t, e) {
    var i = this.scale(e), n = this.transformation.untransform(t, i);
    return this.projection.unproject(n);
  },
  // @method project(latlng: LatLng): Point
  // Projects geographical coordinates into coordinates in units accepted for
  // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
  project: function(t) {
    return this.projection.project(t);
  },
  // @method unproject(point: Point): LatLng
  // Given a projected coordinate returns the corresponding LatLng.
  // The inverse of `project`.
  unproject: function(t) {
    return this.projection.unproject(t);
  },
  // @method scale(zoom: Number): Number
  // Returns the scale used when transforming projected coordinates into
  // pixel coordinates for a particular zoom. For example, it returns
  // `256 * 2^zoom` for Mercator-based CRS.
  scale: function(t) {
    return 256 * Math.pow(2, t);
  },
  // @method zoom(scale: Number): Number
  // Inverse of `scale()`, returns the zoom level corresponding to a scale
  // factor of `scale`.
  zoom: function(t) {
    return Math.log(t / 256) / Math.LN2;
  },
  // @method getProjectedBounds(zoom: Number): Bounds
  // Returns the projection's bounds scaled and transformed for the provided `zoom`.
  getProjectedBounds: function(t) {
    if (this.infinite)
      return null;
    var e = this.projection.bounds, i = this.scale(t), n = this.transformation.transform(e.min, i), o = this.transformation.transform(e.max, i);
    return new z(n, o);
  },
  // @method distance(latlng1: LatLng, latlng2: LatLng): Number
  // Returns the distance between two geographical coordinates.
  // @property code: String
  // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
  //
  // @property wrapLng: Number[]
  // An array of two numbers defining whether the longitude (horizontal) coordinate
  // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
  // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
  //
  // @property wrapLat: Number[]
  // Like `wrapLng`, but for the latitude (vertical) axis.
  // wrapLng: [min, max],
  // wrapLat: [min, max],
  // @property infinite: Boolean
  // If true, the coordinate space will be unbounded (infinite in both axes)
  infinite: !1,
  // @method wrapLatLng(latlng: LatLng): LatLng
  // Returns a `LatLng` where lat and lng has been wrapped according to the
  // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
  wrapLatLng: function(t) {
    var e = this.wrapLng ? Ct(t.lng, this.wrapLng, !0) : t.lng, i = this.wrapLat ? Ct(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
    return new P(i, e, n);
  },
  // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
  // Returns a `LatLngBounds` with the same size as the given one, ensuring
  // that its center is within the CRS's bounds.
  // Only accepts actual `L.LatLngBounds` instances, not arrays.
  wrapLatLngBounds: function(t) {
    var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat, o = e.lng - i.lng;
    if (n === 0 && o === 0)
      return t;
    var s = t.getSouthWest(), r = t.getNorthEast(), a = new P(s.lat - n, s.lng - o), h = new P(r.lat - n, r.lng - o);
    return new F(a, h);
  }
}, ot = T({}, rt, {
  wrapLng: [-180, 180],
  // Mean Earth Radius, as recommended for use by
  // the International Union of Geodesy and Geophysics,
  // see https://rosettacode.org/wiki/Haversine_formula
  R: 6371e3,
  // distance between two geographical points using spherical law of cosines approximation
  distance: function(t, e) {
    var i = Math.PI / 180, n = t.lat * i, o = e.lat * i, s = Math.sin((e.lat - t.lat) * i / 2), r = Math.sin((e.lng - t.lng) * i / 2), a = s * s + Math.cos(n) * Math.cos(o) * r * r, h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return this.R * h;
  }
}), Ye = 6378137, ae = {
  R: Ye,
  MAX_LATITUDE: 85.0511287798,
  project: function(t) {
    var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), o = Math.sin(n * e);
    return new m(
      this.R * t.lng * e,
      this.R * Math.log((1 + o) / (1 - o)) / 2
    );
  },
  unproject: function(t) {
    var e = 180 / Math.PI;
    return new P(
      (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
      t.x * e / this.R
    );
  },
  bounds: (function() {
    var t = Ye * Math.PI;
    return new z([-t, -t], [t, t]);
  })()
};
function li(t, e, i, n) {
  if (j(t)) {
    this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
    return;
  }
  this._a = t, this._b = e, this._c = i, this._d = n;
}
li.prototype = {
  // @method transform(point: Point, scale?: Number): Point
  // Returns a transformed point, optionally multiplied by the given scale.
  // Only accepts actual `L.Point` instances, not arrays.
  transform: function(t, e) {
    return this._transform(t.clone(), e);
  },
  // destructive transform (faster)
  _transform: function(t, e) {
    return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
  },
  // @method untransform(point: Point, scale?: Number): Point
  // Returns the reverse transformation of the given point, optionally divided
  // by the given scale. Only accepts actual `L.Point` instances, not arrays.
  untransform: function(t, e) {
    return e = e || 1, new m(
      (t.x / e - this._b) / this._a,
      (t.y / e - this._d) / this._c
    );
  }
};
function Yt(t, e, i, n) {
  return new li(t, e, i, n);
}
var ve = T({}, ot, {
  code: "EPSG:3857",
  projection: ae,
  transformation: (function() {
    var t = 0.5 / (Math.PI * ae.R);
    return Yt(t, 0.5, -t, 0.5);
  })()
}), cn = T({}, ve, {
  code: "EPSG:900913"
});
function ci(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function fi(t, e) {
  var i = "", n, o, s, r, a, h;
  for (n = 0, s = t.length; n < s; n++) {
    for (a = t[n], o = 0, r = a.length; o < r; o++)
      h = a[o], i += (o ? "L" : "M") + h.x + " " + h.y;
    i += e ? c.svg ? "z" : "x" : "";
  }
  return i || "M0 0";
}
var ge = document.documentElement.style, Xt = "ActiveXObject" in window, fn = Xt && !document.addEventListener, di = "msLaunchUri" in navigator && !("documentMode" in document), ye = X("webkit"), _i = X("android"), mi = X("android 2") || X("android 3"), dn = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), _n = _i && X("Google") && dn < 537 && !("AudioNode" in window), xe = !!window.opera, pi = !di && X("chrome"), vi = X("gecko") && !ye && !xe && !Xt, mn = !pi && X("safari"), gi = X("phantom"), yi = "OTransition" in ge, pn = navigator.platform.indexOf("Win") === 0, xi = Xt && "transition" in ge, we = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !mi, wi = "MozPerspective" in ge, vn = !window.L_DISABLE_3D && (xi || we || wi) && !yi && !gi, Ot = typeof orientation < "u" || X("mobile"), gn = Ot && ye, yn = Ot && we, Pi = !window.PointerEvent && window.MSPointerEvent, Li = !!(window.PointerEvent || Pi), Ti = "ontouchstart" in window || !!window.TouchEvent, xn = !window.L_NO_TOUCH && (Ti || Li), wn = Ot && xe, Pn = Ot && vi, Ln = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Tn = (function() {
  var t = !1;
  try {
    var e = Object.defineProperty({}, "passive", {
      get: function() {
        t = !0;
      }
    });
    window.addEventListener("testPassiveEventSupport", k, e), window.removeEventListener("testPassiveEventSupport", k, e);
  } catch {
  }
  return t;
})(), bn = (function() {
  return !!document.createElement("canvas").getContext;
})(), Pe = !!(document.createElementNS && ci("svg").createSVGRect), Mn = !!Pe && (function() {
  var t = document.createElement("div");
  return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
})(), Cn = !Pe && (function() {
  try {
    var t = document.createElement("div");
    t.innerHTML = '<v:shape adj="1"/>';
    var e = t.firstChild;
    return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
  } catch {
    return !1;
  }
})(), Sn = navigator.platform.indexOf("Mac") === 0, zn = navigator.platform.indexOf("Linux") === 0;
function X(t) {
  return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
}
var c = {
  ie: Xt,
  ielt9: fn,
  edge: di,
  webkit: ye,
  android: _i,
  android23: mi,
  androidStock: _n,
  opera: xe,
  chrome: pi,
  gecko: vi,
  safari: mn,
  phantom: gi,
  opera12: yi,
  win: pn,
  ie3d: xi,
  webkit3d: we,
  gecko3d: wi,
  any3d: vn,
  mobile: Ot,
  mobileWebkit: gn,
  mobileWebkit3d: yn,
  msPointer: Pi,
  pointer: Li,
  touch: xn,
  touchNative: Ti,
  mobileOpera: wn,
  mobileGecko: Pn,
  retina: Ln,
  passiveEvents: Tn,
  canvas: bn,
  svg: Pe,
  vml: Cn,
  inlineSvg: Mn,
  mac: Sn,
  linux: zn
}, bi = c.msPointer ? "MSPointerDown" : "pointerdown", Mi = c.msPointer ? "MSPointerMove" : "pointermove", Ci = c.msPointer ? "MSPointerUp" : "pointerup", Si = c.msPointer ? "MSPointerCancel" : "pointercancel", he = {
  touchstart: bi,
  touchmove: Mi,
  touchend: Ci,
  touchcancel: Si
}, Xe = {
  touchstart: An,
  touchmove: Rt,
  touchend: Rt,
  touchcancel: Rt
}, vt = {}, Je = !1;
function kn(t, e, i) {
  return e === "touchstart" && In(), Xe[e] ? (i = Xe[e].bind(this, i), t.addEventListener(he[e], i, !1), i) : (console.warn("wrong event specified:", e), k);
}
function En(t, e, i) {
  if (!he[e]) {
    console.warn("wrong event specified:", e);
    return;
  }
  t.removeEventListener(he[e], i, !1);
}
function Zn(t) {
  vt[t.pointerId] = t;
}
function On(t) {
  vt[t.pointerId] && (vt[t.pointerId] = t);
}
function $e(t) {
  delete vt[t.pointerId];
}
function In() {
  Je || (document.addEventListener(bi, Zn, !0), document.addEventListener(Mi, On, !0), document.addEventListener(Ci, $e, !0), document.addEventListener(Si, $e, !0), Je = !0);
}
function Rt(t, e) {
  if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
    e.touches = [];
    for (var i in vt)
      e.touches.push(vt[i]);
    e.changedTouches = [e], t(e);
  }
}
function An(t, e) {
  e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && B(e), Rt(t, e);
}
function Bn(t) {
  var e = {}, i, n;
  for (n in t)
    i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
  return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
}
var Nn = 200;
function Rn(t, e) {
  t.addEventListener("dblclick", e);
  var i = 0, n;
  function o(s) {
    if (s.detail !== 1) {
      n = s.detail;
      return;
    }
    if (!(s.pointerType === "mouse" || s.sourceCapabilities && !s.sourceCapabilities.firesTouchEvents)) {
      var r = Zi(s);
      if (!(r.some(function(h) {
        return h instanceof HTMLLabelElement && h.attributes.for;
      }) && !r.some(function(h) {
        return h instanceof HTMLInputElement || h instanceof HTMLSelectElement;
      }))) {
        var a = Date.now();
        a - i <= Nn ? (n++, n === 2 && e(Bn(s))) : n = 1, i = a;
      }
    }
  }
  return t.addEventListener("click", o), {
    dblclick: e,
    simDblclick: o
  };
}
function Dn(t, e) {
  t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
}
var Le = $t(
  ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
), Lt = $t(
  ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
), zi = Lt === "webkitTransition" || Lt === "OTransition" ? Lt + "End" : "transitionend";
function ki(t) {
  return typeof t == "string" ? document.getElementById(t) : t;
}
function St(t, e) {
  var i = t.style[e] || t.currentStyle && t.currentStyle[e];
  if ((!i || i === "auto") && document.defaultView) {
    var n = document.defaultView.getComputedStyle(t, null);
    i = n ? n[e] : null;
  }
  return i === "auto" ? null : i;
}
function x(t, e, i) {
  var n = document.createElement(t);
  return n.className = e || "", i && i.appendChild(n), n;
}
function C(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ut(t) {
  for (; t.firstChild; )
    t.removeChild(t.firstChild);
}
function yt(t) {
  var e = t.parentNode;
  e && e.lastChild !== t && e.appendChild(t);
}
function xt(t) {
  var e = t.parentNode;
  e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
}
function Te(t, e) {
  if (t.classList !== void 0)
    return t.classList.contains(e);
  var i = Jt(t);
  return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
}
function p(t, e) {
  if (t.classList !== void 0)
    for (var i = ut(e), n = 0, o = i.length; n < o; n++)
      t.classList.add(i[n]);
  else if (!Te(t, e)) {
    var s = Jt(t);
    be(t, (s ? s + " " : "") + e);
  }
}
function E(t, e) {
  t.classList !== void 0 ? t.classList.remove(e) : be(t, me((" " + Jt(t) + " ").replace(" " + e + " ", " ")));
}
function be(t, e) {
  t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
}
function Jt(t) {
  return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
}
function q(t, e) {
  "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && Hn(t, e);
}
function Hn(t, e) {
  var i = !1, n = "DXImageTransform.Microsoft.Alpha";
  try {
    i = t.filters.item(n);
  } catch {
    if (e === 1)
      return;
  }
  e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
}
function $t(t) {
  for (var e = document.documentElement.style, i = 0; i < t.length; i++)
    if (t[i] in e)
      return t[i];
  return !1;
}
function ft(t, e, i) {
  var n = e || new m(0, 0);
  t.style[Le] = (c.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
}
function O(t, e) {
  t._leaflet_pos = e, c.any3d ? ft(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
}
function dt(t) {
  return t._leaflet_pos || new m(0, 0);
}
var zt, kt, oe;
if ("onselectstart" in document)
  zt = function() {
    _(window, "selectstart", B);
  }, kt = function() {
    b(window, "selectstart", B);
  };
else {
  var wt = $t(
    ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
  );
  zt = function() {
    if (wt) {
      var t = document.documentElement.style;
      oe = t[wt], t[wt] = "none";
    }
  }, kt = function() {
    wt && (document.documentElement.style[wt] = oe, oe = void 0);
  };
}
function Me() {
  _(window, "dragstart", B);
}
function Ce() {
  b(window, "dragstart", B);
}
var Dt, ue;
function Se(t) {
  for (; t.tabIndex === -1; )
    t = t.parentNode;
  t.style && (qt(), Dt = t, ue = t.style.outlineStyle, t.style.outlineStyle = "none", _(window, "keydown", qt));
}
function qt() {
  Dt && (Dt.style.outlineStyle = ue, Dt = void 0, ue = void 0, b(window, "keydown", qt));
}
function Ei(t) {
  do
    t = t.parentNode;
  while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
  return t;
}
function ze(t) {
  var e = t.getBoundingClientRect();
  return {
    x: e.width / t.offsetWidth || 1,
    y: e.height / t.offsetHeight || 1,
    boundingClientRect: e
  };
}
var mo = {
  __proto__: null,
  TRANSFORM: Le,
  TRANSITION: Lt,
  TRANSITION_END: zi,
  get: ki,
  getStyle: St,
  create: x,
  remove: C,
  empty: Ut,
  toFront: yt,
  toBack: xt,
  hasClass: Te,
  addClass: p,
  removeClass: E,
  setClass: be,
  getClass: Jt,
  setOpacity: q,
  testProp: $t,
  setTransform: ft,
  setPosition: O,
  getPosition: dt,
  get disableTextSelection() {
    return zt;
  },
  get enableTextSelection() {
    return kt;
  },
  disableImageDrag: Me,
  enableImageDrag: Ce,
  preventOutline: Se,
  restoreOutline: qt,
  getSizedParentNode: Ei,
  getScale: ze
};
function _(t, e, i, n) {
  if (e && typeof e == "object")
    for (var o in e)
      ce(t, o, e[o], i);
  else {
    e = ut(e);
    for (var s = 0, r = e.length; s < r; s++)
      ce(t, e[s], i, n);
  }
  return this;
}
var Y = "_leaflet_events";
function b(t, e, i, n) {
  if (arguments.length === 1)
    Qe(t), delete t[Y];
  else if (e && typeof e == "object")
    for (var o in e)
      fe(t, o, e[o], i);
  else if (e = ut(e), arguments.length === 2)
    Qe(t, function(a) {
      return pe(e, a) !== -1;
    });
  else
    for (var s = 0, r = e.length; s < r; s++)
      fe(t, e[s], i, n);
  return this;
}
function Qe(t, e) {
  for (var i in t[Y]) {
    var n = i.split(/\d/)[0];
    (!e || e(n)) && fe(t, n, null, null, i);
  }
}
var le = {
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  wheel: !("onwheel" in window) && "mousewheel"
};
function ce(t, e, i, n) {
  var o = e + w(i) + (n ? "_" + w(n) : "");
  if (t[Y] && t[Y][o])
    return this;
  var s = function(a) {
    return i.call(n || t, a || window.event);
  }, r = s;
  !c.touchNative && c.pointer && e.indexOf("touch") === 0 ? s = kn(t, e, s) : c.touch && e === "dblclick" ? s = Rn(t, s) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(le[e] || e, s, c.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (s = function(a) {
    a = a || window.event, Ee(t, a) && r(a);
  }, t.addEventListener(le[e], s, !1)) : t.addEventListener(e, r, !1) : t.attachEvent("on" + e, s), t[Y] = t[Y] || {}, t[Y][o] = s;
}
function fe(t, e, i, n, o) {
  o = o || e + w(i) + (n ? "_" + w(n) : "");
  var s = t[Y] && t[Y][o];
  if (!s)
    return this;
  !c.touchNative && c.pointer && e.indexOf("touch") === 0 ? En(t, e, s) : c.touch && e === "dblclick" ? Dn(t, s) : "removeEventListener" in t ? t.removeEventListener(le[e] || e, s, !1) : t.detachEvent("on" + e, s), t[Y][o] = null;
}
function lt(t) {
  return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
}
function ke(t) {
  return ce(t, "wheel", lt), this;
}
function It(t) {
  return _(t, "mousedown touchstart dblclick contextmenu", lt), t._leaflet_disable_click = !0, this;
}
function B(t) {
  return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
}
function _t(t) {
  return B(t), lt(t), this;
}
function Zi(t) {
  if (t.composedPath)
    return t.composedPath();
  for (var e = [], i = t.target; i; )
    e.push(i), i = i.parentNode;
  return e;
}
function Oi(t, e) {
  if (!e)
    return new m(t.clientX, t.clientY);
  var i = ze(e), n = i.boundingClientRect;
  return new m(
    // offset.left/top values are in page scale (like clientX/Y),
    // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
    (t.clientX - n.left) / i.x - e.clientLeft,
    (t.clientY - n.top) / i.y - e.clientTop
  );
}
var Fn = c.linux && c.chrome ? window.devicePixelRatio : c.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
function Ii(t) {
  return c.edge ? t.wheelDeltaY / 2 : (
    // Don't trust window-geometry-based delta
    t.deltaY && t.deltaMode === 0 ? -t.deltaY / Fn : (
      // Pixels
      t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
        // Lines
        t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
          // Pages
          t.deltaX || t.deltaZ ? 0 : (
            // Skip horizontal/depth wheel events
            t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
              // Legacy IE pixels
              t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                // Legacy Moz lines
                t.detail ? t.detail / -32765 * 60 : (
                  // Legacy Moz pages
                  0
                )
              )
            )
          )
        )
      )
    )
  );
}
function Ee(t, e) {
  var i = e.relatedTarget;
  if (!i)
    return !0;
  try {
    for (; i && i !== t; )
      i = i.parentNode;
  } catch {
    return !1;
  }
  return i !== t;
}
var po = {
  __proto__: null,
  on: _,
  off: b,
  stopPropagation: lt,
  disableScrollPropagation: ke,
  disableClickPropagation: It,
  preventDefault: B,
  stop: _t,
  getPropagationPath: Zi,
  getMousePosition: Oi,
  getWheelDelta: Ii,
  isExternalTarget: Ee,
  addListener: _,
  removeListener: b
}, Wn = Kt.extend({
  // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
  // Run an animation of a given element to a new position, optionally setting
  // duration in seconds (`0.25` by default) and easing linearity factor (3rd
  // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
  // `0.5` by default).
  run: function(t, e, i, n) {
    this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = dt(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
  },
  // @method stop()
  // Stops the animation (if currently running).
  stop: function() {
    this._inProgress && (this._step(!0), this._complete());
  },
  _animate: function() {
    this._animId = D(this._animate, this), this._step();
  },
  _step: function(t) {
    var e = +/* @__PURE__ */ new Date() - this._startTime, i = this._duration * 1e3;
    e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
  },
  _runFrame: function(t, e) {
    var i = this._startPos.add(this._offset.multiplyBy(t));
    e && i._round(), O(this._el, i), this.fire("step");
  },
  _complete: function() {
    V(this._animId), this._inProgress = !1, this.fire("end");
  },
  _easeOut: function(t) {
    return 1 - Math.pow(1 - t, this._easeOutPower);
  }
}), y = Kt.extend({
  options: {
    // @section Map State Options
    // @option crs: CRS = L.CRS.EPSG3857
    // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
    // sure what it means.
    crs: ve,
    // @option center: LatLng = undefined
    // Initial geographic center of the map
    center: void 0,
    // @option zoom: Number = undefined
    // Initial map zoom level
    zoom: void 0,
    // @option minZoom: Number = *
    // Minimum zoom level of the map.
    // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
    // the lowest of their `minZoom` options will be used instead.
    minZoom: void 0,
    // @option maxZoom: Number = *
    // Maximum zoom level of the map.
    // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
    // the highest of their `maxZoom` options will be used instead.
    maxZoom: void 0,
    // @option layers: Layer[] = []
    // Array of layers that will be added to the map initially
    layers: [],
    // @option maxBounds: LatLngBounds = null
    // When this option is set, the map restricts the view to the given
    // geographical bounds, bouncing the user back if the user tries to pan
    // outside the view. To set the restriction dynamically, use
    // [`setMaxBounds`](#map-setmaxbounds) method.
    maxBounds: void 0,
    // @option renderer: Renderer = *
    // The default method for drawing vector layers on the map. `L.SVG`
    // or `L.Canvas` by default depending on browser support.
    renderer: void 0,
    // @section Animation Options
    // @option zoomAnimation: Boolean = true
    // Whether the map zoom animation is enabled. By default it's enabled
    // in all browsers that support CSS3 Transitions except Android.
    zoomAnimation: !0,
    // @option zoomAnimationThreshold: Number = 4
    // Won't animate zoom if the zoom difference exceeds this value.
    zoomAnimationThreshold: 4,
    // @option fadeAnimation: Boolean = true
    // Whether the tile fade animation is enabled. By default it's enabled
    // in all browsers that support CSS3 Transitions except Android.
    fadeAnimation: !0,
    // @option markerZoomAnimation: Boolean = true
    // Whether markers animate their zoom with the zoom animation, if disabled
    // they will disappear for the length of the animation. By default it's
    // enabled in all browsers that support CSS3 Transitions except Android.
    markerZoomAnimation: !0,
    // @option transform3DLimit: Number = 2^23
    // Defines the maximum size of a CSS translation transform. The default
    // value should not be changed unless a web browser positions layers in
    // the wrong place after doing a large `panBy`.
    transform3DLimit: 8388608,
    // Precision limit of a 32-bit float
    // @section Interaction Options
    // @option zoomSnap: Number = 1
    // Forces the map's zoom level to always be a multiple of this, particularly
    // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
    // By default, the zoom level snaps to the nearest integer; lower values
    // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
    // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
    zoomSnap: 1,
    // @option zoomDelta: Number = 1
    // Controls how much the map's zoom level will change after a
    // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
    // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
    // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
    zoomDelta: 1,
    // @option trackResize: Boolean = true
    // Whether the map automatically handles browser window resize to update itself.
    trackResize: !0
  },
  initialize: function(t, e) {
    e = S(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = M(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(g(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Lt && c.any3d && !c.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), _(this._proxy, zi, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
  },
  // @section Methods for modifying map state
  // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
  // Sets the view of the map (geographical center and zoom) with the given
  // animation options.
  setView: function(t, e, i) {
    if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(g(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
      i.animate !== void 0 && (i.zoom = T({ animate: i.animate }, i.zoom), i.pan = T({ animate: i.animate, duration: i.duration }, i.pan));
      var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
      if (n)
        return clearTimeout(this._sizeTimer), this;
    }
    return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
  },
  // @method setZoom(zoom: Number, options?: Zoom/pan options): this
  // Sets the zoom of the map.
  setZoom: function(t, e) {
    return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
  },
  // @method zoomIn(delta?: Number, options?: Zoom options): this
  // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
  zoomIn: function(t, e) {
    return t = t || (c.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
  },
  // @method zoomOut(delta?: Number, options?: Zoom options): this
  // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
  zoomOut: function(t, e) {
    return t = t || (c.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
  },
  // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
  // Zooms the map while keeping a specified geographical point on the map
  // stationary (e.g. used internally for scroll zoom and double-click zoom).
  // @alternative
  // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
  // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
  setZoomAround: function(t, e, i) {
    var n = this.getZoomScale(e), o = this.getSize().divideBy(2), s = t instanceof m ? t : this.latLngToContainerPoint(t), r = s.subtract(o).multiplyBy(1 - 1 / n), a = this.containerPointToLatLng(o.add(r));
    return this.setView(a, e, { zoom: i });
  },
  _getBoundsCenterZoom: function(t, e) {
    e = e || {}, t = t.getBounds ? t.getBounds() : I(t);
    var i = d(e.paddingTopLeft || e.padding || [0, 0]), n = d(e.paddingBottomRight || e.padding || [0, 0]), o = this.getBoundsZoom(t, !1, i.add(n));
    if (o = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, o) : o, o === 1 / 0)
      return {
        center: t.getCenter(),
        zoom: o
      };
    var s = n.subtract(i).divideBy(2), r = this.project(t.getSouthWest(), o), a = this.project(t.getNorthEast(), o), h = this.unproject(r.add(a).divideBy(2).add(s), o);
    return {
      center: h,
      zoom: o
    };
  },
  // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
  // Sets a map view that contains the given geographical bounds with the
  // maximum zoom level possible.
  fitBounds: function(t, e) {
    if (t = I(t), !t.isValid())
      throw new Error("Bounds are not valid.");
    var i = this._getBoundsCenterZoom(t, e);
    return this.setView(i.center, i.zoom, e);
  },
  // @method fitWorld(options?: fitBounds options): this
  // Sets a map view that mostly contains the whole world with the maximum
  // zoom level possible.
  fitWorld: function(t) {
    return this.fitBounds([[-90, -180], [90, 180]], t);
  },
  // @method panTo(latlng: LatLng, options?: Pan options): this
  // Pans the map to a given center.
  panTo: function(t, e) {
    return this.setView(t, this._zoom, { pan: e });
  },
  // @method panBy(offset: Point, options?: Pan options): this
  // Pans the map by a given number of pixels (animated).
  panBy: function(t, e) {
    if (t = d(t).round(), e = e || {}, !t.x && !t.y)
      return this.fire("moveend");
    if (e.animate !== !0 && !this.getSize().contains(t))
      return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
    if (this._panAnim || (this._panAnim = new Wn(), this._panAnim.on({
      step: this._onPanTransitionStep,
      end: this._onPanTransitionEnd
    }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
      p(this._mapPane, "leaflet-pan-anim");
      var i = this._getMapPanePos().subtract(t).round();
      this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
    } else
      this._rawPanBy(t), this.fire("move").fire("moveend");
    return this;
  },
  // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
  // Sets the view of the map (geographical center and zoom) performing a smooth
  // pan-zoom animation.
  flyTo: function(t, e, i) {
    if (i = i || {}, i.animate === !1 || !c.any3d)
      return this.setView(t, e, i);
    this._stop();
    var n = this.project(this.getCenter()), o = this.project(t), s = this.getSize(), r = this._zoom;
    t = g(t), e = e === void 0 ? r : e;
    var a = Math.max(s.x, s.y), h = a * this.getZoomScale(r, e), u = o.distanceTo(n) || 1, l = 1.42, f = l * l;
    function v(Z) {
      var Bt = Z ? -1 : 1, sn = Z ? h : a, rn = h * h - a * a + Bt * f * f * u * u, an = 2 * sn * f * u, ne = rn / an, Ge = Math.sqrt(ne * ne + 1) - ne, hn = Ge < 1e-9 ? -18 : Math.log(Ge);
      return hn;
    }
    function N(Z) {
      return (Math.exp(Z) - Math.exp(-Z)) / 2;
    }
    function A(Z) {
      return (Math.exp(Z) + Math.exp(-Z)) / 2;
    }
    function U(Z) {
      return N(Z) / A(Z);
    }
    var R = v(0);
    function pt(Z) {
      return a * (A(R) / A(R + l * Z));
    }
    function tn(Z) {
      return a * (A(R) * U(R + l * Z) - N(R)) / f;
    }
    function en(Z) {
      return 1 - Math.pow(1 - Z, 1.5);
    }
    var nn = Date.now(), qe = (v(1) - R) / l, on = i.duration ? 1e3 * i.duration : 1e3 * qe * 0.8;
    function Ve() {
      var Z = (Date.now() - nn) / on, Bt = en(Z) * qe;
      Z <= 1 ? (this._flyToFrame = D(Ve, this), this._move(
        this.unproject(n.add(o.subtract(n).multiplyBy(tn(Bt) / u)), r),
        this.getScaleZoom(a / pt(Bt), r),
        { flyTo: !0 }
      )) : this._move(t, e)._moveEnd(!0);
    }
    return this._moveStart(!0, i.noMoveStart), Ve.call(this), this;
  },
  // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
  // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
  // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
  flyToBounds: function(t, e) {
    var i = this._getBoundsCenterZoom(t, e);
    return this.flyTo(i.center, i.zoom, e);
  },
  // @method setMaxBounds(bounds: LatLngBounds): this
  // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
  setMaxBounds: function(t) {
    return t = I(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
  },
  // @method setMinZoom(zoom: Number): this
  // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
  setMinZoom: function(t) {
    var e = this.options.minZoom;
    return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
  },
  // @method setMaxZoom(zoom: Number): this
  // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
  setMaxZoom: function(t) {
    var e = this.options.maxZoom;
    return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
  },
  // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
  // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
  panInsideBounds: function(t, e) {
    this._enforcingBounds = !0;
    var i = this.getCenter(), n = this._limitCenter(i, this._zoom, I(t));
    return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
  },
  // @method panInside(latlng: LatLng, options?: padding options): this
  // Pans the map the minimum amount to make the `latlng` visible. Use
  // padding options to fit the display to more restricted bounds.
  // If `latlng` is already within the (optionally padded) display bounds,
  // the map will not be panned.
  panInside: function(t, e) {
    e = e || {};
    var i = d(e.paddingTopLeft || e.padding || [0, 0]), n = d(e.paddingBottomRight || e.padding || [0, 0]), o = this.project(this.getCenter()), s = this.project(t), r = this.getPixelBounds(), a = H([r.min.add(i), r.max.subtract(n)]), h = a.getSize();
    if (!a.contains(s)) {
      this._enforcingBounds = !0;
      var u = s.subtract(a.getCenter()), l = a.extend(s).getSize().subtract(h);
      o.x += u.x < 0 ? -l.x : l.x, o.y += u.y < 0 ? -l.y : l.y, this.panTo(this.unproject(o), e), this._enforcingBounds = !1;
    }
    return this;
  },
  // @method invalidateSize(options: Zoom/pan options): this
  // Checks if the map container size changed and updates the map if so —
  // call it after you've changed the map size dynamically, also animating
  // pan by default. If `options.pan` is `false`, panning will not occur.
  // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
  // that it doesn't happen often even if the method is called many
  // times in a row.
  // @alternative
  // @method invalidateSize(animate: Boolean): this
  // Checks if the map container size changed and updates the map if so —
  // call it after you've changed the map size dynamically, also animating
  // pan by default.
  invalidateSize: function(t) {
    if (!this._loaded)
      return this;
    t = T({
      animate: !1,
      pan: !0
    }, t === !0 ? { animate: !0 } : t);
    var e = this.getSize();
    this._sizeChanged = !0, this._lastCenter = null;
    var i = this.getSize(), n = e.divideBy(2).round(), o = i.divideBy(2).round(), s = n.subtract(o);
    return !s.x && !s.y ? this : (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(M(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
      oldSize: e,
      newSize: i
    }));
  },
  // @section Methods for modifying map state
  // @method stop(): this
  // Stops the currently running `panTo` or `flyTo` animation, if any.
  stop: function() {
    return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
  },
  // @section Geolocation methods
  // @method locate(options?: Locate options): this
  // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
  // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
  // and optionally sets the map view to the user's location with respect to
  // detection accuracy (or to the world view if geolocation failed).
  // Note that, if your page doesn't use HTTPS, this method will fail in
  // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
  // See `Locate options` for more details.
  locate: function(t) {
    if (t = this._locateOptions = T({
      timeout: 1e4,
      watch: !1
      // setView: false
      // maxZoom: <Number>
      // maximumAge: 0
      // enableHighAccuracy: false
    }, t), !("geolocation" in navigator))
      return this._handleGeolocationError({
        code: 0,
        message: "Geolocation not supported."
      }), this;
    var e = M(this._handleGeolocationResponse, this), i = M(this._handleGeolocationError, this);
    return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
  },
  // @method stopLocate(): this
  // Stops watching location previously initiated by `map.locate({watch: true})`
  // and aborts resetting the map view if map.locate was called with
  // `{setView: true}`.
  stopLocate: function() {
    return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
  },
  _handleGeolocationError: function(t) {
    if (this._container._leaflet_id) {
      var e = t.code, i = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
      this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
        code: e,
        message: "Geolocation error: " + i + "."
      });
    }
  },
  _handleGeolocationResponse: function(t) {
    if (this._container._leaflet_id) {
      var e = t.coords.latitude, i = t.coords.longitude, n = new P(e, i), o = n.toBounds(t.coords.accuracy * 2), s = this._locateOptions;
      if (s.setView) {
        var r = this.getBoundsZoom(o);
        this.setView(n, s.maxZoom ? Math.min(r, s.maxZoom) : r);
      }
      var a = {
        latlng: n,
        bounds: o,
        timestamp: t.timestamp
      };
      for (var h in t.coords)
        typeof t.coords[h] == "number" && (a[h] = t.coords[h]);
      this.fire("locationfound", a);
    }
  },
  // TODO Appropriate docs section?
  // @section Other Methods
  // @method addHandler(name: String, HandlerClass: Function): this
  // Adds a new `Handler` to the map, given its name and constructor function.
  addHandler: function(t, e) {
    if (!e)
      return this;
    var i = this[t] = new e(this);
    return this._handlers.push(i), this.options[t] && i.enable(), this;
  },
  // @method remove(): this
  // Destroys the map and clears all related event listeners.
  remove: function() {
    if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
      throw new Error("Map container is being reused by another instance");
    try {
      delete this._container._leaflet_id, delete this._containerId;
    } catch {
      this._container._leaflet_id = void 0, this._containerId = void 0;
    }
    this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), C(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (V(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
    var t;
    for (t in this._layers)
      this._layers[t].remove();
    for (t in this._panes)
      C(this._panes[t]);
    return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
  },
  // @section Other Methods
  // @method createPane(name: String, container?: HTMLElement): HTMLElement
  // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
  // then returns it. The pane is created as a child of `container`, or
  // as a child of the main map pane if not set.
  createPane: function(t, e) {
    var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = x("div", i, e || this._mapPane);
    return t && (this._panes[t] = n), n;
  },
  // @section Methods for Getting Map State
  // @method getCenter(): LatLng
  // Returns the geographical center of the map view
  getCenter: function() {
    return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
  },
  // @method getZoom(): Number
  // Returns the current zoom level of the map view
  getZoom: function() {
    return this._zoom;
  },
  // @method getBounds(): LatLngBounds
  // Returns the geographical bounds visible in the current map view
  getBounds: function() {
    var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), i = this.unproject(t.getTopRight());
    return new F(e, i);
  },
  // @method getMinZoom(): Number
  // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
  getMinZoom: function() {
    return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
  },
  // @method getMaxZoom(): Number
  // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
  getMaxZoom: function() {
    return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
  },
  // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
  // Returns the maximum zoom level on which the given bounds fit to the map
  // view in its entirety. If `inside` (optional) is set to `true`, the method
  // instead returns the minimum zoom level on which the map view fits into
  // the given bounds in its entirety.
  getBoundsZoom: function(t, e, i) {
    t = I(t), i = d(i || [0, 0]);
    var n = this.getZoom() || 0, o = this.getMinZoom(), s = this.getMaxZoom(), r = t.getNorthWest(), a = t.getSouthEast(), h = this.getSize().subtract(i), u = H(this.project(a, n), this.project(r, n)).getSize(), l = c.any3d ? this.options.zoomSnap : 1, f = h.x / u.x, v = h.y / u.y, N = e ? Math.max(f, v) : Math.min(f, v);
    return n = this.getScaleZoom(N, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = e ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n));
  },
  // @method getSize(): Point
  // Returns the current size of the map container (in pixels).
  getSize: function() {
    return (!this._size || this._sizeChanged) && (this._size = new m(
      this._container.clientWidth || 0,
      this._container.clientHeight || 0
    ), this._sizeChanged = !1), this._size.clone();
  },
  // @method getPixelBounds(): Bounds
  // Returns the bounds of the current map view in projected pixel
  // coordinates (sometimes useful in layer and overlay implementations).
  getPixelBounds: function(t, e) {
    var i = this._getTopLeftPoint(t, e);
    return new z(i, i.add(this.getSize()));
  },
  // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
  // the map pane? "left point of the map layer" can be confusing, specially
  // since there can be negative offsets.
  // @method getPixelOrigin(): Point
  // Returns the projected pixel coordinates of the top left point of
  // the map layer (useful in custom layer and overlay implementations).
  getPixelOrigin: function() {
    return this._checkIfLoaded(), this._pixelOrigin;
  },
  // @method getPixelWorldBounds(zoom?: Number): Bounds
  // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
  // If `zoom` is omitted, the map's current zoom level is used.
  getPixelWorldBounds: function(t) {
    return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
  },
  // @section Other Methods
  // @method getPane(pane: String|HTMLElement): HTMLElement
  // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
  getPane: function(t) {
    return typeof t == "string" ? this._panes[t] : t;
  },
  // @method getPanes(): Object
  // Returns a plain object containing the names of all [panes](#map-pane) as keys and
  // the panes as values.
  getPanes: function() {
    return this._panes;
  },
  // @method getContainer: HTMLElement
  // Returns the HTML element that contains the map.
  getContainer: function() {
    return this._container;
  },
  // @section Conversion Methods
  // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
  // Returns the scale factor to be applied to a map transition from zoom level
  // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
  getZoomScale: function(t, e) {
    var i = this.options.crs;
    return e = e === void 0 ? this._zoom : e, i.scale(t) / i.scale(e);
  },
  // @method getScaleZoom(scale: Number, fromZoom: Number): Number
  // Returns the zoom level that the map would end up at, if it is at `fromZoom`
  // level and everything is scaled by a factor of `scale`. Inverse of
  // [`getZoomScale`](#map-getZoomScale).
  getScaleZoom: function(t, e) {
    var i = this.options.crs;
    e = e === void 0 ? this._zoom : e;
    var n = i.zoom(t * i.scale(e));
    return isNaN(n) ? 1 / 0 : n;
  },
  // @method project(latlng: LatLng, zoom: Number): Point
  // Projects a geographical coordinate `LatLng` according to the projection
  // of the map's CRS, then scales it according to `zoom` and the CRS's
  // `Transformation`. The result is pixel coordinate relative to
  // the CRS origin.
  project: function(t, e) {
    return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(g(t), e);
  },
  // @method unproject(point: Point, zoom: Number): LatLng
  // Inverse of [`project`](#map-project).
  unproject: function(t, e) {
    return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(d(t), e);
  },
  // @method layerPointToLatLng(point: Point): LatLng
  // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
  // returns the corresponding geographical coordinate (for the current zoom level).
  layerPointToLatLng: function(t) {
    var e = d(t).add(this.getPixelOrigin());
    return this.unproject(e);
  },
  // @method latLngToLayerPoint(latlng: LatLng): Point
  // Given a geographical coordinate, returns the corresponding pixel coordinate
  // relative to the [origin pixel](#map-getpixelorigin).
  latLngToLayerPoint: function(t) {
    var e = this.project(g(t))._round();
    return e._subtract(this.getPixelOrigin());
  },
  // @method wrapLatLng(latlng: LatLng): LatLng
  // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
  // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
  // CRS's bounds.
  // By default this means longitude is wrapped around the dateline so its
  // value is between -180 and +180 degrees.
  wrapLatLng: function(t) {
    return this.options.crs.wrapLatLng(g(t));
  },
  // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
  // Returns a `LatLngBounds` with the same size as the given one, ensuring that
  // its center is within the CRS's bounds.
  // By default this means the center longitude is wrapped around the dateline so its
  // value is between -180 and +180 degrees, and the majority of the bounds
  // overlaps the CRS's bounds.
  wrapLatLngBounds: function(t) {
    return this.options.crs.wrapLatLngBounds(I(t));
  },
  // @method distance(latlng1: LatLng, latlng2: LatLng): Number
  // Returns the distance between two geographical coordinates according to
  // the map's CRS. By default this measures distance in meters.
  distance: function(t, e) {
    return this.options.crs.distance(g(t), g(e));
  },
  // @method containerPointToLayerPoint(point: Point): Point
  // Given a pixel coordinate relative to the map container, returns the corresponding
  // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
  containerPointToLayerPoint: function(t) {
    return d(t).subtract(this._getMapPanePos());
  },
  // @method layerPointToContainerPoint(point: Point): Point
  // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
  // returns the corresponding pixel coordinate relative to the map container.
  layerPointToContainerPoint: function(t) {
    return d(t).add(this._getMapPanePos());
  },
  // @method containerPointToLatLng(point: Point): LatLng
  // Given a pixel coordinate relative to the map container, returns
  // the corresponding geographical coordinate (for the current zoom level).
  containerPointToLatLng: function(t) {
    var e = this.containerPointToLayerPoint(d(t));
    return this.layerPointToLatLng(e);
  },
  // @method latLngToContainerPoint(latlng: LatLng): Point
  // Given a geographical coordinate, returns the corresponding pixel coordinate
  // relative to the map container.
  latLngToContainerPoint: function(t) {
    return this.layerPointToContainerPoint(this.latLngToLayerPoint(g(t)));
  },
  // @method mouseEventToContainerPoint(ev: MouseEvent): Point
  // Given a MouseEvent object, returns the pixel coordinate relative to the
  // map container where the event took place.
  mouseEventToContainerPoint: function(t) {
    return Oi(t, this._container);
  },
  // @method mouseEventToLayerPoint(ev: MouseEvent): Point
  // Given a MouseEvent object, returns the pixel coordinate relative to
  // the [origin pixel](#map-getpixelorigin) where the event took place.
  mouseEventToLayerPoint: function(t) {
    return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
  },
  // @method mouseEventToLatLng(ev: MouseEvent): LatLng
  // Given a MouseEvent object, returns geographical coordinate where the
  // event took place.
  mouseEventToLatLng: function(t) {
    return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
  },
  // map initialization methods
  _initContainer: function(t) {
    var e = this._container = ki(t);
    if (e) {
      if (e._leaflet_id)
        throw new Error("Map container is already initialized.");
    } else throw new Error("Map container not found.");
    _(e, "scroll", this._onScroll, this), this._containerId = w(e);
  },
  _initLayout: function() {
    var t = this._container;
    this._fadeAnimated = this.options.fadeAnimation && c.any3d, p(t, "leaflet-container" + (c.touch ? " leaflet-touch" : "") + (c.retina ? " leaflet-retina" : "") + (c.ielt9 ? " leaflet-oldie" : "") + (c.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
    var e = St(t, "position");
    e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
  },
  _initPanes: function() {
    var t = this._panes = {};
    this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), O(this._mapPane, new m(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (p(t.markerPane, "leaflet-zoom-hide"), p(t.shadowPane, "leaflet-zoom-hide"));
  },
  // private methods that modify map state
  // @section Map state change events
  _resetView: function(t, e, i) {
    O(this._mapPane, new m(0, 0));
    var n = !this._loaded;
    this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
    var o = this._zoom !== e;
    this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
  },
  _moveStart: function(t, e) {
    return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
  },
  _move: function(t, e, i, n) {
    e === void 0 && (e = this._zoom);
    var o = this._zoom !== e;
    return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
  },
  _moveEnd: function(t) {
    return t && this.fire("zoomend"), this.fire("moveend");
  },
  _stop: function() {
    return V(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
  },
  _rawPanBy: function(t) {
    O(this._mapPane, this._getMapPanePos().subtract(t));
  },
  _getZoomSpan: function() {
    return this.getMaxZoom() - this.getMinZoom();
  },
  _panInsideMaxBounds: function() {
    this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
  },
  _checkIfLoaded: function() {
    if (!this._loaded)
      throw new Error("Set map center and zoom first.");
  },
  // DOM event handling
  // @section Interaction events
  _initEvents: function(t) {
    this._targets = {}, this._targets[w(this._container)] = this;
    var e = t ? b : _;
    e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), c.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
  },
  _onResize: function() {
    V(this._resizeRequest), this._resizeRequest = D(
      function() {
        this.invalidateSize({ debounceMoveend: !0 });
      },
      this
    );
  },
  _onScroll: function() {
    this._container.scrollTop = 0, this._container.scrollLeft = 0;
  },
  _onMoveEnd: function() {
    var t = this._getMapPanePos();
    Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
  },
  _findEventTargets: function(t, e) {
    for (var i = [], n, o = e === "mouseout" || e === "mouseover", s = t.target || t.srcElement, r = !1; s; ) {
      if (n = this._targets[w(s)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
        r = !0;
        break;
      }
      if (n && n.listens(e, !0) && (o && !Ee(s, t) || (i.push(n), o)) || s === this._container)
        break;
      s = s.parentNode;
    }
    return !i.length && !r && !o && this.listens(e, !0) && (i = [this]), i;
  },
  _isClickDisabled: function(t) {
    for (; t && t !== this._container; ) {
      if (t._leaflet_disable_click)
        return !0;
      t = t.parentNode;
    }
  },
  _handleDOMEvent: function(t) {
    var e = t.target || t.srcElement;
    if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
      var i = t.type;
      i === "mousedown" && Se(e), this._fireDOMEvent(t, i);
    }
  },
  _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
  _fireDOMEvent: function(t, e, i) {
    if (t.type === "click") {
      var n = T({}, t);
      n.type = "preclick", this._fireDOMEvent(n, n.type, i);
    }
    var o = this._findEventTargets(t, e);
    if (i) {
      for (var s = [], r = 0; r < i.length; r++)
        i[r].listens(e, !0) && s.push(i[r]);
      o = s.concat(o);
    }
    if (o.length) {
      e === "contextmenu" && B(t);
      var a = o[0], h = {
        originalEvent: t
      };
      if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
        var u = a.getLatLng && (!a._radius || a._radius <= 10);
        h.containerPoint = u ? this.latLngToContainerPoint(a.getLatLng()) : this.mouseEventToContainerPoint(t), h.layerPoint = this.containerPointToLayerPoint(h.containerPoint), h.latlng = u ? a.getLatLng() : this.layerPointToLatLng(h.layerPoint);
      }
      for (r = 0; r < o.length; r++)
        if (o[r].fire(e, h, !0), h.originalEvent._stopped || o[r].options.bubblingMouseEvents === !1 && pe(this._mouseEvents, e) !== -1)
          return;
    }
  },
  _draggableMoved: function(t) {
    return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
  },
  _clearHandlers: function() {
    for (var t = 0, e = this._handlers.length; t < e; t++)
      this._handlers[t].disable();
  },
  // @section Other Methods
  // @method whenReady(fn: Function, context?: Object): this
  // Runs the given function `fn` when the map gets initialized with
  // a view (center and zoom) and at least one layer, or immediately
  // if it's already initialized, optionally passing a function context.
  whenReady: function(t, e) {
    return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
  },
  // private methods for getting map state
  _getMapPanePos: function() {
    return dt(this._mapPane) || new m(0, 0);
  },
  _moved: function() {
    var t = this._getMapPanePos();
    return t && !t.equals([0, 0]);
  },
  _getTopLeftPoint: function(t, e) {
    var i = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
    return i.subtract(this._getMapPanePos());
  },
  _getNewPixelOrigin: function(t, e) {
    var i = this.getSize()._divideBy(2);
    return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
  },
  _latLngToNewLayerPoint: function(t, e, i) {
    var n = this._getNewPixelOrigin(i, e);
    return this.project(t, e)._subtract(n);
  },
  _latLngBoundsToNewLayerBounds: function(t, e, i) {
    var n = this._getNewPixelOrigin(i, e);
    return H([
      this.project(t.getSouthWest(), e)._subtract(n),
      this.project(t.getNorthWest(), e)._subtract(n),
      this.project(t.getSouthEast(), e)._subtract(n),
      this.project(t.getNorthEast(), e)._subtract(n)
    ]);
  },
  // layer point of the current center
  _getCenterLayerPoint: function() {
    return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
  },
  // offset of the specified place to the current center in pixels
  _getCenterOffset: function(t) {
    return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
  },
  // adjust center for view to get inside bounds
  _limitCenter: function(t, e, i) {
    if (!i)
      return t;
    var n = this.project(t, e), o = this.getSize().divideBy(2), s = new z(n.subtract(o), n.add(o)), r = this._getBoundsOffset(s, i, e);
    return Math.abs(r.x) <= 1 && Math.abs(r.y) <= 1 ? t : this.unproject(n.add(r), e);
  },
  // adjust offset for view to get inside bounds
  _limitOffset: function(t, e) {
    if (!e)
      return t;
    var i = this.getPixelBounds(), n = new z(i.min.add(t), i.max.add(t));
    return t.add(this._getBoundsOffset(n, e));
  },
  // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
  _getBoundsOffset: function(t, e, i) {
    var n = H(
      this.project(e.getNorthEast(), i),
      this.project(e.getSouthWest(), i)
    ), o = n.min.subtract(t.min), s = n.max.subtract(t.max), r = this._rebound(o.x, -s.x), a = this._rebound(o.y, -s.y);
    return new m(r, a);
  },
  _rebound: function(t, e) {
    return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
  },
  _limitZoom: function(t) {
    var e = this.getMinZoom(), i = this.getMaxZoom(), n = c.any3d ? this.options.zoomSnap : 1;
    return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
  },
  _onPanTransitionStep: function() {
    this.fire("move");
  },
  _onPanTransitionEnd: function() {
    E(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
  },
  _tryAnimatedPan: function(t, e) {
    var i = this._getCenterOffset(t)._trunc();
    return (e && e.animate) !== !0 && !this.getSize().contains(i) ? !1 : (this.panBy(i, e), !0);
  },
  _createAnimProxy: function() {
    var t = this._proxy = x("div", "leaflet-proxy leaflet-zoom-animated");
    this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
      var i = Le, n = this._proxy.style[i];
      ft(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
    }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
  },
  _destroyAnimProxy: function() {
    C(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
  },
  _animMoveEnd: function() {
    var t = this.getCenter(), e = this.getZoom();
    ft(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
  },
  _catchTransitionEnd: function(t) {
    this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
  },
  _nothingToAnimate: function() {
    return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
  },
  _tryAnimatedZoom: function(t, e, i) {
    if (this._animatingZoom)
      return !0;
    if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
      return !1;
    var n = this.getZoomScale(e), o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
    return i.animate !== !0 && !this.getSize().contains(o) ? !1 : (D(function() {
      this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
    }, this), !0);
  },
  _animateZoom: function(t, e, i, n) {
    this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, p(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
      center: t,
      zoom: e,
      noUpdate: n
    }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(M(this._onZoomTransitionEnd, this), 250));
  },
  _onZoomTransitionEnd: function() {
    this._animatingZoom && (this._mapPane && E(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
  }
});
function vo(t, e) {
  return new y(t, e);
}
var J = st.extend({
  // @section
  // @aka Control Options
  options: {
    // @option position: String = 'topright'
    // The position of the control (one of the map corners). Possible values are `'topleft'`,
    // `'topright'`, `'bottomleft'` or `'bottomright'`
    position: "topright"
  },
  initialize: function(t) {
    S(this, t);
  },
  /* @section
   * Classes extending L.Control will inherit the following methods:
   *
   * @method getPosition: string
   * Returns the position of the control.
   */
  getPosition: function() {
    return this.options.position;
  },
  // @method setPosition(position: string): this
  // Sets the position of the control.
  setPosition: function(t) {
    var e = this._map;
    return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
  },
  // @method getContainer: HTMLElement
  // Returns the HTMLElement that contains the control.
  getContainer: function() {
    return this._container;
  },
  // @method addTo(map: Map): this
  // Adds the control to the given map.
  addTo: function(t) {
    this.remove(), this._map = t;
    var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
    return p(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
  },
  // @method remove: this
  // Removes the control from the map it is currently active on.
  remove: function() {
    return this._map ? (C(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
  },
  _refocusOnMap: function(t) {
    this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
  }
}), Qt = function(t) {
  return new J(t);
};
y.include({
  // @method addControl(control: Control): this
  // Adds the given control to the map
  addControl: function(t) {
    return t.addTo(this), this;
  },
  // @method removeControl(control: Control): this
  // Removes the given control from the map
  removeControl: function(t) {
    return t.remove(), this;
  },
  _initControlPos: function() {
    var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = x("div", e + "control-container", this._container);
    function n(o, s) {
      var r = e + o + " " + e + s;
      t[o + s] = x("div", r, i);
    }
    n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
  },
  _clearControlPos: function() {
    for (var t in this._controlCorners)
      C(this._controlCorners[t]);
    C(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
  }
});
var Ai = J.extend({
  // @section
  // @aka Control.Layers options
  options: {
    // @option collapsed: Boolean = true
    // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
    collapsed: !0,
    position: "topright",
    // @option autoZIndex: Boolean = true
    // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
    autoZIndex: !0,
    // @option hideSingleBase: Boolean = false
    // If `true`, the base layers in the control will be hidden when there is only one.
    hideSingleBase: !1,
    // @option sortLayers: Boolean = false
    // Whether to sort the layers. When `false`, layers will keep the order
    // in which they were added to the control.
    sortLayers: !1,
    // @option sortFunction: Function = *
    // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    // that will be used for sorting the layers, when `sortLayers` is `true`.
    // The function receives both the `L.Layer` instances and their names, as in
    // `sortFunction(layerA, layerB, nameA, nameB)`.
    // By default, it sorts layers alphabetically by their name.
    sortFunction: function(t, e, i, n) {
      return i < n ? -1 : n < i ? 1 : 0;
    }
  },
  initialize: function(t, e, i) {
    S(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
    for (var n in t)
      this._addLayer(t[n], n);
    for (n in e)
      this._addLayer(e[n], n, !0);
  },
  onAdd: function(t) {
    this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
    for (var e = 0; e < this._layers.length; e++)
      this._layers[e].layer.on("add remove", this._onLayerChange, this);
    return this._container;
  },
  addTo: function(t) {
    return J.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
  },
  onRemove: function() {
    this._map.off("zoomend", this._checkDisabledLayers, this);
    for (var t = 0; t < this._layers.length; t++)
      this._layers[t].layer.off("add remove", this._onLayerChange, this);
  },
  // @method addBaseLayer(layer: Layer, name: String): this
  // Adds a base layer (radio button entry) with the given name to the control.
  addBaseLayer: function(t, e) {
    return this._addLayer(t, e), this._map ? this._update() : this;
  },
  // @method addOverlay(layer: Layer, name: String): this
  // Adds an overlay (checkbox entry) with the given name to the control.
  addOverlay: function(t, e) {
    return this._addLayer(t, e, !0), this._map ? this._update() : this;
  },
  // @method removeLayer(layer: Layer): this
  // Remove the given layer from the control.
  removeLayer: function(t) {
    t.off("add remove", this._onLayerChange, this);
    var e = this._getLayer(w(t));
    return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
  },
  // @method expand(): this
  // Expand the control container if collapsed.
  expand: function() {
    p(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
    var t = this._map.getSize().y - (this._container.offsetTop + 50);
    return t < this._section.clientHeight ? (p(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : E(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
  },
  // @method collapse(): this
  // Collapse the control container if expanded.
  collapse: function() {
    return E(this._container, "leaflet-control-layers-expanded"), this;
  },
  _initLayout: function() {
    var t = "leaflet-control-layers", e = this._container = x("div", t), i = this.options.collapsed;
    e.setAttribute("aria-haspopup", !0), It(e), ke(e);
    var n = this._section = x("section", t + "-list");
    i && (this._map.on("click", this.collapse, this), _(e, {
      mouseenter: this._expandSafely,
      mouseleave: this.collapse
    }, this));
    var o = this._layersLink = x("a", t + "-toggle", e);
    o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), _(o, {
      keydown: function(s) {
        s.keyCode === 13 && this._expandSafely();
      },
      // Certain screen readers intercept the key event and instead send a click event
      click: function(s) {
        B(s), this._expandSafely();
      }
    }, this), i || this.expand(), this._baseLayersList = x("div", t + "-base", n), this._separator = x("div", t + "-separator", n), this._overlaysList = x("div", t + "-overlays", n), e.appendChild(n);
  },
  _getLayer: function(t) {
    for (var e = 0; e < this._layers.length; e++)
      if (this._layers[e] && w(this._layers[e].layer) === t)
        return this._layers[e];
  },
  _addLayer: function(t, e, i) {
    this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
      layer: t,
      name: e,
      overlay: i
    }), this.options.sortLayers && this._layers.sort(M(function(n, o) {
      return this.options.sortFunction(n.layer, o.layer, n.name, o.name);
    }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
  },
  _update: function() {
    if (!this._container)
      return this;
    Ut(this._baseLayersList), Ut(this._overlaysList), this._layerControlInputs = [];
    var t, e, i, n, o = 0;
    for (i = 0; i < this._layers.length; i++)
      n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
    return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
  },
  _onLayerChange: function(t) {
    this._handlingClick || this._update();
    var e = this._getLayer(w(t.target)), i = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
    i && this._map.fire(i, e);
  },
  // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
  _createRadioElement: function(t, e) {
    var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", n = document.createElement("div");
    return n.innerHTML = i, n.firstChild;
  },
  _addItem: function(t) {
    var e = document.createElement("label"), i = this._map.hasLayer(t.layer), n;
    t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + w(this), i), this._layerControlInputs.push(n), n.layerId = w(t.layer), _(n, "click", this._onInputClick, this);
    var o = document.createElement("span");
    o.innerHTML = " " + t.name;
    var s = document.createElement("span");
    e.appendChild(s), s.appendChild(n), s.appendChild(o);
    var r = t.overlay ? this._overlaysList : this._baseLayersList;
    return r.appendChild(e), this._checkDisabledLayers(), e;
  },
  _onInputClick: function() {
    if (!this._preventClick) {
      var t = this._layerControlInputs, e, i, n = [], o = [];
      this._handlingClick = !0;
      for (var s = t.length - 1; s >= 0; s--)
        e = t[s], i = this._getLayer(e.layerId).layer, e.checked ? n.push(i) : e.checked || o.push(i);
      for (s = 0; s < o.length; s++)
        this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
      for (s = 0; s < n.length; s++)
        this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
      this._handlingClick = !1, this._refocusOnMap();
    }
  },
  _checkDisabledLayers: function() {
    for (var t = this._layerControlInputs, e, i, n = this._map.getZoom(), o = t.length - 1; o >= 0; o--)
      e = t[o], i = this._getLayer(e.layerId).layer, e.disabled = i.options.minZoom !== void 0 && n < i.options.minZoom || i.options.maxZoom !== void 0 && n > i.options.maxZoom;
  },
  _expandIfNotCollapsed: function() {
    return this._map && !this.options.collapsed && this.expand(), this;
  },
  _expandSafely: function() {
    var t = this._section;
    this._preventClick = !0, _(t, "click", B), this.expand();
    var e = this;
    setTimeout(function() {
      b(t, "click", B), e._preventClick = !1;
    });
  }
}), Un = function(t, e, i) {
  return new Ai(t, e, i);
}, Ze = J.extend({
  // @section
  // @aka Control.Zoom options
  options: {
    position: "topleft",
    // @option zoomInText: String = '<span aria-hidden="true">+</span>'
    // The text set on the 'zoom in' button.
    zoomInText: '<span aria-hidden="true">+</span>',
    // @option zoomInTitle: String = 'Zoom in'
    // The title set on the 'zoom in' button.
    zoomInTitle: "Zoom in",
    // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
    // The text set on the 'zoom out' button.
    zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
    // @option zoomOutTitle: String = 'Zoom out'
    // The title set on the 'zoom out' button.
    zoomOutTitle: "Zoom out"
  },
  onAdd: function(t) {
    var e = "leaflet-control-zoom", i = x("div", e + " leaflet-bar"), n = this.options;
    return this._zoomInButton = this._createButton(
      n.zoomInText,
      n.zoomInTitle,
      e + "-in",
      i,
      this._zoomIn
    ), this._zoomOutButton = this._createButton(
      n.zoomOutText,
      n.zoomOutTitle,
      e + "-out",
      i,
      this._zoomOut
    ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
  },
  onRemove: function(t) {
    t.off("zoomend zoomlevelschange", this._updateDisabled, this);
  },
  disable: function() {
    return this._disabled = !0, this._updateDisabled(), this;
  },
  enable: function() {
    return this._disabled = !1, this._updateDisabled(), this;
  },
  _zoomIn: function(t) {
    !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
  },
  _zoomOut: function(t) {
    !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
  },
  _createButton: function(t, e, i, n, o) {
    var s = x("a", i, n);
    return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), It(s), _(s, "click", _t), _(s, "click", o, this), _(s, "click", this._refocusOnMap, this), s;
  },
  _updateDisabled: function() {
    var t = this._map, e = "leaflet-disabled";
    E(this._zoomInButton, e), E(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (p(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (p(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
  }
});
y.mergeOptions({
  zoomControl: !0
});
y.addInitHook(function() {
  this.options.zoomControl && (this.zoomControl = new Ze(), this.addControl(this.zoomControl));
});
var qn = function(t) {
  return new Ze(t);
}, Bi = J.extend({
  // @section
  // @aka Control.Scale options
  options: {
    position: "bottomleft",
    // @option maxWidth: Number = 100
    // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
    maxWidth: 100,
    // @option metric: Boolean = True
    // Whether to show the metric scale line (m/km).
    metric: !0,
    // @option imperial: Boolean = True
    // Whether to show the imperial scale line (mi/ft).
    imperial: !0
    // @option updateWhenIdle: Boolean = false
    // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
  },
  onAdd: function(t) {
    var e = "leaflet-control-scale", i = x("div", e), n = this.options;
    return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
  },
  onRemove: function(t) {
    t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
  },
  _addScales: function(t, e, i) {
    t.metric && (this._mScale = x("div", e, i)), t.imperial && (this._iScale = x("div", e, i));
  },
  _update: function() {
    var t = this._map, e = t.getSize().y / 2, i = t.distance(
      t.containerPointToLatLng([0, e]),
      t.containerPointToLatLng([this.options.maxWidth, e])
    );
    this._updateScales(i);
  },
  _updateScales: function(t) {
    this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
  },
  _updateMetric: function(t) {
    var e = this._getRoundNum(t), i = e < 1e3 ? e + " m" : e / 1e3 + " km";
    this._updateScale(this._mScale, i, e / t);
  },
  _updateImperial: function(t) {
    var e = t * 3.2808399, i, n, o;
    e > 5280 ? (i = e / 5280, n = this._getRoundNum(i), this._updateScale(this._iScale, n + " mi", n / i)) : (o = this._getRoundNum(e), this._updateScale(this._iScale, o + " ft", o / e));
  },
  _updateScale: function(t, e, i) {
    t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
  },
  _getRoundNum: function(t) {
    var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
    return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
  }
}), Vn = function(t) {
  return new Bi(t);
}, Gn = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Oe = J.extend({
  // @section
  // @aka Control.Attribution options
  options: {
    position: "bottomright",
    // @option prefix: String|false = 'Leaflet'
    // The HTML text shown before the attributions. Pass `false` to disable.
    prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (c.inlineSvg ? Gn + " " : "") + "Leaflet</a>"
  },
  initialize: function(t) {
    S(this, t), this._attributions = {};
  },
  onAdd: function(t) {
    t.attributionControl = this, this._container = x("div", "leaflet-control-attribution"), It(this._container);
    for (var e in t._layers)
      t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
    return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
  },
  onRemove: function(t) {
    t.off("layeradd", this._addAttribution, this);
  },
  _addAttribution: function(t) {
    t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
      this.removeAttribution(t.layer.getAttribution());
    }, this));
  },
  // @method setPrefix(prefix: String|false): this
  // The HTML text shown before the attributions. Pass `false` to disable.
  setPrefix: function(t) {
    return this.options.prefix = t, this._update(), this;
  },
  // @method addAttribution(text: String): this
  // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
  addAttribution: function(t) {
    return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
  },
  // @method removeAttribution(text: String): this
  // Removes an attribution text.
  removeAttribution: function(t) {
    return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
  },
  _update: function() {
    if (this._map) {
      var t = [];
      for (var e in this._attributions)
        this._attributions[e] && t.push(e);
      var i = [];
      this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
    }
  }
});
y.mergeOptions({
  attributionControl: !0
});
y.addInitHook(function() {
  this.options.attributionControl && new Oe().addTo(this);
});
var jn = function(t) {
  return new Oe(t);
};
J.Layers = Ai;
J.Zoom = Ze;
J.Scale = Bi;
J.Attribution = Oe;
Qt.layers = Un;
Qt.zoom = qn;
Qt.scale = Vn;
Qt.attribution = jn;
var tt = st.extend({
  initialize: function(t) {
    this._map = t;
  },
  // @method enable(): this
  // Enables the handler
  enable: function() {
    return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
  },
  // @method disable(): this
  // Disables the handler
  disable: function() {
    return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
  },
  // @method enabled(): Boolean
  // Returns `true` if the handler is enabled
  enabled: function() {
    return !!this._enabled;
  }
  // @section Extension methods
  // Classes inheriting from `Handler` must implement the two following methods:
  // @method addHooks()
  // Called when the handler is enabled, should add event hooks.
  // @method removeHooks()
  // Called when the handler is disabled, should remove the event hooks added previously.
});
tt.addTo = function(t, e) {
  return t.addHandler(e, this), this;
};
var go = { Events: W }, ti = c.touch ? "touchstart mousedown" : "mousedown", ht = Kt.extend({
  options: {
    // @section
    // @aka Draggable options
    // @option clickTolerance: Number = 3
    // The max number of pixels a user can shift the mouse pointer during a click
    // for it to be considered a valid click (as opposed to a mouse drag).
    clickTolerance: 3
  },
  // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
  // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
  initialize: function(t, e, i, n) {
    S(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
  },
  // @method enable()
  // Enables the dragging ability
  enable: function() {
    this._enabled || (_(this._dragStartTarget, ti, this._onDown, this), this._enabled = !0);
  },
  // @method disable()
  // Disables the dragging ability
  disable: function() {
    this._enabled && (ht._dragging === this && this.finishDrag(!0), b(this._dragStartTarget, ti, this._onDown, this), this._enabled = !1, this._moved = !1);
  },
  _onDown: function(t) {
    if (this._enabled && (this._moved = !1, !Te(this._element, "leaflet-zoom-anim"))) {
      if (t.touches && t.touches.length !== 1) {
        ht._dragging === this && this.finishDrag();
        return;
      }
      if (!(ht._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (ht._dragging = this, this._preventOutline && Se(this._element), Me(), zt(), !this._moving)) {
        this.fire("down");
        var e = t.touches ? t.touches[0] : t, i = Ei(this._element);
        this._startPoint = new m(e.clientX, e.clientY), this._startPos = dt(this._element), this._parentScale = ze(i);
        var n = t.type === "mousedown";
        _(document, n ? "mousemove" : "touchmove", this._onMove, this), _(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
      }
    }
  },
  _onMove: function(t) {
    if (this._enabled) {
      if (t.touches && t.touches.length > 1) {
        this._moved = !0;
        return;
      }
      var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new m(e.clientX, e.clientY)._subtract(this._startPoint);
      !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, B(t), this._moved || (this.fire("dragstart"), this._moved = !0, p(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), p(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition());
    }
  },
  _updatePosition: function() {
    var t = { originalEvent: this._lastEvent };
    this.fire("predrag", t), O(this._element, this._newPos), this.fire("drag", t);
  },
  _onUp: function() {
    this._enabled && this.finishDrag();
  },
  finishDrag: function(t) {
    E(document.body, "leaflet-dragging"), this._lastTarget && (E(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), b(document, "mousemove touchmove", this._onMove, this), b(document, "mouseup touchend touchcancel", this._onUp, this), Ce(), kt();
    var e = this._moved && this._moving;
    this._moving = !1, ht._dragging = !1, e && this.fire("dragend", {
      noInertia: t,
      distance: this._newPos.distanceTo(this._startPos)
    });
  }
});
function Ni(t, e, i) {
  var n, o = [1, 4, 2, 8], s, r, a, h, u, l, f, v;
  for (s = 0, l = t.length; s < l; s++)
    t[s]._code = ct(t[s], e);
  for (a = 0; a < 4; a++) {
    for (f = o[a], n = [], s = 0, l = t.length, r = l - 1; s < l; r = s++)
      h = t[s], u = t[r], h._code & f ? u._code & f || (v = Vt(u, h, f, e, i), v._code = ct(v, e), n.push(v)) : (u._code & f && (v = Vt(u, h, f, e, i), v._code = ct(v, e), n.push(v)), n.push(h));
    t = n;
  }
  return t;
}
function Ri(t, e) {
  var i, n, o, s, r, a, h, u, l;
  if (!t || t.length === 0)
    throw new Error("latlngs not passed");
  G(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
  var f = g([0, 0]), v = I(t), N = v.getNorthWest().distanceTo(v.getSouthWest()) * v.getNorthEast().distanceTo(v.getNorthWest());
  N < 1700 && (f = Ie(t));
  var A = t.length, U = [];
  for (i = 0; i < A; i++) {
    var R = g(t[i]);
    U.push(e.project(g([R.lat - f.lat, R.lng - f.lng])));
  }
  for (a = h = u = 0, i = 0, n = A - 1; i < A; n = i++)
    o = U[i], s = U[n], r = o.y * s.x - s.y * o.x, h += (o.x + s.x) * r, u += (o.y + s.y) * r, a += r * 3;
  a === 0 ? l = U[0] : l = [h / a, u / a];
  var pt = e.unproject(d(l));
  return g([pt.lat + f.lat, pt.lng + f.lng]);
}
function Ie(t) {
  for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
    var s = g(t[o]);
    e += s.lat, i += s.lng, n++;
  }
  return g([e / n, i / n]);
}
var yo = {
  __proto__: null,
  clipPolygon: Ni,
  polygonCenter: Ri,
  centroid: Ie
};
function Di(t, e) {
  if (!e || !t.length)
    return t.slice();
  var i = e * e;
  return t = Xn(t, i), t = Yn(t, i), t;
}
function Hi(t, e, i) {
  return Math.sqrt(At(t, e, i, !0));
}
function Kn(t, e, i) {
  return At(t, e, i);
}
function Yn(t, e) {
  var i = t.length, n = typeof Uint8Array < "u" ? Uint8Array : Array, o = new n(i);
  o[0] = o[i - 1] = 1, de(t, o, e, 0, i - 1);
  var s, r = [];
  for (s = 0; s < i; s++)
    o[s] && r.push(t[s]);
  return r;
}
function de(t, e, i, n, o) {
  var s = 0, r, a, h;
  for (a = n + 1; a <= o - 1; a++)
    h = At(t[a], t[n], t[o], !0), h > s && (r = a, s = h);
  s > i && (e[r] = 1, de(t, e, i, n, r), de(t, e, i, r, o));
}
function Xn(t, e) {
  for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
    Jn(t[n], t[o]) > e && (i.push(t[n]), o = n);
  return o < s - 1 && i.push(t[s - 1]), i;
}
var ei;
function Fi(t, e, i, n, o) {
  var s = n ? ei : ct(t, i), r = ct(e, i), a, h, u;
  for (ei = r; ; ) {
    if (!(s | r))
      return [t, e];
    if (s & r)
      return !1;
    a = s || r, h = Vt(t, e, a, i, o), u = ct(h, i), a === s ? (t = h, s = u) : (e = h, r = u);
  }
}
function Vt(t, e, i, n, o) {
  var s = e.x - t.x, r = e.y - t.y, a = n.min, h = n.max, u, l;
  return i & 8 ? (u = t.x + s * (h.y - t.y) / r, l = h.y) : i & 4 ? (u = t.x + s * (a.y - t.y) / r, l = a.y) : i & 2 ? (u = h.x, l = t.y + r * (h.x - t.x) / s) : i & 1 && (u = a.x, l = t.y + r * (a.x - t.x) / s), new m(u, l, o);
}
function ct(t, e) {
  var i = 0;
  return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
}
function Jn(t, e) {
  var i = e.x - t.x, n = e.y - t.y;
  return i * i + n * n;
}
function At(t, e, i, n) {
  var o = e.x, s = e.y, r = i.x - o, a = i.y - s, h = r * r + a * a, u;
  return h > 0 && (u = ((t.x - o) * r + (t.y - s) * a) / h, u > 1 ? (o = i.x, s = i.y) : u > 0 && (o += r * u, s += a * u)), r = t.x - o, a = t.y - s, n ? r * r + a * a : new m(o, s);
}
function G(t) {
  return !j(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
}
function Wi(t) {
  return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), G(t);
}
function Ui(t, e) {
  var i, n, o, s, r, a, h, u;
  if (!t || t.length === 0)
    throw new Error("latlngs not passed");
  G(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
  var l = g([0, 0]), f = I(t), v = f.getNorthWest().distanceTo(f.getSouthWest()) * f.getNorthEast().distanceTo(f.getNorthWest());
  v < 1700 && (l = Ie(t));
  var N = t.length, A = [];
  for (i = 0; i < N; i++) {
    var U = g(t[i]);
    A.push(e.project(g([U.lat - l.lat, U.lng - l.lng])));
  }
  for (i = 0, n = 0; i < N - 1; i++)
    n += A[i].distanceTo(A[i + 1]) / 2;
  if (n === 0)
    u = A[0];
  else
    for (i = 0, s = 0; i < N - 1; i++)
      if (r = A[i], a = A[i + 1], o = r.distanceTo(a), s += o, s > n) {
        h = (s - n) / o, u = [
          a.x - h * (a.x - r.x),
          a.y - h * (a.y - r.y)
        ];
        break;
      }
  var R = e.unproject(d(u));
  return g([R.lat + l.lat, R.lng + l.lng]);
}
var xo = {
  __proto__: null,
  simplify: Di,
  pointToSegmentDistance: Hi,
  closestPointOnSegment: Kn,
  clipSegment: Fi,
  _getEdgeIntersection: Vt,
  _getBitCode: ct,
  _sqClosestPointOnSegment: At,
  isFlat: G,
  _flat: Wi,
  polylineCenter: Ui
}, Ae = {
  project: function(t) {
    return new m(t.lng, t.lat);
  },
  unproject: function(t) {
    return new P(t.y, t.x);
  },
  bounds: new z([-180, -90], [180, 90])
}, _e = {
  R: 6378137,
  R_MINOR: 6356752314245179e-9,
  bounds: new z([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
  project: function(t) {
    var e = Math.PI / 180, i = this.R, n = t.lat * e, o = this.R_MINOR / i, s = Math.sqrt(1 - o * o), r = s * Math.sin(n), a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
    return n = -i * Math.log(Math.max(a, 1e-10)), new m(t.lng * e * i, n);
  },
  unproject: function(t) {
    for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, o = Math.sqrt(1 - n * n), s = Math.exp(-t.y / i), r = Math.PI / 2 - 2 * Math.atan(s), a = 0, h = 0.1, u; a < 15 && Math.abs(h) > 1e-7; a++)
      u = o * Math.sin(r), u = Math.pow((1 - u) / (1 + u), o / 2), h = Math.PI / 2 - 2 * Math.atan(s * u) - r, r += h;
    return new P(r * e, t.x * e / i);
  }
}, wo = {
  __proto__: null,
  LonLat: Ae,
  Mercator: _e,
  SphericalMercator: ae
}, $n = T({}, ot, {
  code: "EPSG:3395",
  projection: _e,
  transformation: (function() {
    var t = 0.5 / (Math.PI * _e.R);
    return Yt(t, 0.5, -t, 0.5);
  })()
}), qi = T({}, ot, {
  code: "EPSG:4326",
  projection: Ae,
  transformation: Yt(1 / 180, 1, -1 / 180, 0.5)
}), Qn = T({}, rt, {
  projection: Ae,
  transformation: Yt(1, 0, -1, 0),
  scale: function(t) {
    return Math.pow(2, t);
  },
  zoom: function(t) {
    return Math.log(t) / Math.LN2;
  },
  distance: function(t, e) {
    var i = e.lng - t.lng, n = e.lat - t.lat;
    return Math.sqrt(i * i + n * n);
  },
  infinite: !0
});
rt.Earth = ot;
rt.EPSG3395 = $n;
rt.EPSG3857 = ve;
rt.EPSG900913 = cn;
rt.EPSG4326 = qi;
rt.Simple = Qn;
var $ = Kt.extend({
  // Classes extending `L.Layer` will inherit the following options:
  options: {
    // @option pane: String = 'overlayPane'
    // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
    pane: "overlayPane",
    // @option attribution: String = null
    // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
    attribution: null,
    bubblingMouseEvents: !0
  },
  /* @section
   * Classes extending `L.Layer` will inherit the following methods:
   *
   * @method addTo(map: Map|LayerGroup): this
   * Adds the layer to the given map or layer group.
   */
  addTo: function(t) {
    return t.addLayer(this), this;
  },
  // @method remove: this
  // Removes the layer from the map it is currently active on.
  remove: function() {
    return this.removeFrom(this._map || this._mapToAdd);
  },
  // @method removeFrom(map: Map): this
  // Removes the layer from the given map
  //
  // @alternative
  // @method removeFrom(group: LayerGroup): this
  // Removes the layer from the given `LayerGroup`
  removeFrom: function(t) {
    return t && t.removeLayer(this), this;
  },
  // @method getPane(name? : String): HTMLElement
  // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
  getPane: function(t) {
    return this._map.getPane(t ? this.options[t] || t : this.options.pane);
  },
  addInteractiveTarget: function(t) {
    return this._map._targets[w(t)] = this, this;
  },
  removeInteractiveTarget: function(t) {
    return delete this._map._targets[w(t)], this;
  },
  // @method getAttribution: String
  // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
  getAttribution: function() {
    return this.options.attribution;
  },
  _layerAdd: function(t) {
    var e = t.target;
    if (e.hasLayer(this)) {
      if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
        var i = this.getEvents();
        e.on(i, this), this.once("remove", function() {
          e.off(i, this);
        }, this);
      }
      this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
    }
  }
});
y.include({
  // @method addLayer(layer: Layer): this
  // Adds the given layer to the map
  addLayer: function(t) {
    if (!t._layerAdd)
      throw new Error("The provided object is not a Layer.");
    var e = w(t);
    return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
  },
  // @method removeLayer(layer: Layer): this
  // Removes the given layer from the map.
  removeLayer: function(t) {
    var e = w(t);
    return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
  },
  // @method hasLayer(layer: Layer): Boolean
  // Returns `true` if the given layer is currently added to the map
  hasLayer: function(t) {
    return w(t) in this._layers;
  },
  /* @method eachLayer(fn: Function, context?: Object): this
   * Iterates over the layers of the map, optionally specifying context of the iterator function.
   * ```
   * map.eachLayer(function(layer){
   *     layer.bindPopup('Hello');
   * });
   * ```
   */
  eachLayer: function(t, e) {
    for (var i in this._layers)
      t.call(e, this._layers[i]);
    return this;
  },
  _addLayers: function(t) {
    t = t ? j(t) ? t : [t] : [];
    for (var e = 0, i = t.length; e < i; e++)
      this.addLayer(t[e]);
  },
  _addZoomLimit: function(t) {
    (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[w(t)] = t, this._updateZoomLevels());
  },
  _removeZoomLimit: function(t) {
    var e = w(t);
    this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
  },
  _updateZoomLevels: function() {
    var t = 1 / 0, e = -1 / 0, i = this._getZoomSpan();
    for (var n in this._zoomBoundLayers) {
      var o = this._zoomBoundLayers[n].options;
      t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom), e = o.maxZoom === void 0 ? e : Math.max(e, o.maxZoom);
    }
    this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
  }
});
var Tt = $.extend({
  initialize: function(t, e) {
    S(this, e), this._layers = {};
    var i, n;
    if (t)
      for (i = 0, n = t.length; i < n; i++)
        this.addLayer(t[i]);
  },
  // @method addLayer(layer: Layer): this
  // Adds the given layer to the group.
  addLayer: function(t) {
    var e = this.getLayerId(t);
    return this._layers[e] = t, this._map && this._map.addLayer(t), this;
  },
  // @method removeLayer(layer: Layer): this
  // Removes the given layer from the group.
  // @alternative
  // @method removeLayer(id: Number): this
  // Removes the layer with the given internal ID from the group.
  removeLayer: function(t) {
    var e = t in this._layers ? t : this.getLayerId(t);
    return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
  },
  // @method hasLayer(layer: Layer): Boolean
  // Returns `true` if the given layer is currently added to the group.
  // @alternative
  // @method hasLayer(id: Number): Boolean
  // Returns `true` if the given internal ID is currently added to the group.
  hasLayer: function(t) {
    var e = typeof t == "number" ? t : this.getLayerId(t);
    return e in this._layers;
  },
  // @method clearLayers(): this
  // Removes all the layers from the group.
  clearLayers: function() {
    return this.eachLayer(this.removeLayer, this);
  },
  // @method invoke(methodName: String, …): this
  // Calls `methodName` on every layer contained in this group, passing any
  // additional parameters. Has no effect if the layers contained do not
  // implement `methodName`.
  invoke: function(t) {
    var e = Array.prototype.slice.call(arguments, 1), i, n;
    for (i in this._layers)
      n = this._layers[i], n[t] && n[t].apply(n, e);
    return this;
  },
  onAdd: function(t) {
    this.eachLayer(t.addLayer, t);
  },
  onRemove: function(t) {
    this.eachLayer(t.removeLayer, t);
  },
  // @method eachLayer(fn: Function, context?: Object): this
  // Iterates over the layers of the group, optionally specifying context of the iterator function.
  // ```js
  // group.eachLayer(function (layer) {
  // 	layer.bindPopup('Hello');
  // });
  // ```
  eachLayer: function(t, e) {
    for (var i in this._layers)
      t.call(e, this._layers[i]);
    return this;
  },
  // @method getLayer(id: Number): Layer
  // Returns the layer with the given internal ID.
  getLayer: function(t) {
    return this._layers[t];
  },
  // @method getLayers(): Layer[]
  // Returns an array of all the layers added to the group.
  getLayers: function() {
    var t = [];
    return this.eachLayer(t.push, t), t;
  },
  // @method setZIndex(zIndex: Number): this
  // Calls `setZIndex` on every layer contained in this group, passing the z-index.
  setZIndex: function(t) {
    return this.invoke("setZIndex", t);
  },
  // @method getLayerId(layer: Layer): Number
  // Returns the internal ID for a layer
  getLayerId: function(t) {
    return w(t);
  }
}), Po = function(t, e) {
  return new Tt(t, e);
}, nt = Tt.extend({
  addLayer: function(t) {
    return this.hasLayer(t) ? this : (t.addEventParent(this), Tt.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
  },
  removeLayer: function(t) {
    return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Tt.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
  },
  // @method setStyle(style: Path options): this
  // Sets the given path options to each layer of the group that has a `setStyle` method.
  setStyle: function(t) {
    return this.invoke("setStyle", t);
  },
  // @method bringToFront(): this
  // Brings the layer group to the top of all other layers
  bringToFront: function() {
    return this.invoke("bringToFront");
  },
  // @method bringToBack(): this
  // Brings the layer group to the back of all other layers
  bringToBack: function() {
    return this.invoke("bringToBack");
  },
  // @method getBounds(): LatLngBounds
  // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
  getBounds: function() {
    var t = new F();
    for (var e in this._layers) {
      var i = this._layers[e];
      t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
    }
    return t;
  }
}), Lo = function(t, e) {
  return new nt(t, e);
}, Et = st.extend({
  /* @section
   * @aka Icon options
   *
   * @option iconUrl: String = null
   * **(required)** The URL to the icon image (absolute or relative to your script path).
   *
   * @option iconRetinaUrl: String = null
   * The URL to a retina sized version of the icon image (absolute or relative to your
   * script path). Used for Retina screen devices.
   *
   * @option iconSize: Point = null
   * Size of the icon image in pixels.
   *
   * @option iconAnchor: Point = null
   * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
   * will be aligned so that this point is at the marker's geographical location. Centered
   * by default if size is specified, also can be set in CSS with negative margins.
   *
   * @option popupAnchor: Point = [0, 0]
   * The coordinates of the point from which popups will "open", relative to the icon anchor.
   *
   * @option tooltipAnchor: Point = [0, 0]
   * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
   *
   * @option shadowUrl: String = null
   * The URL to the icon shadow image. If not specified, no shadow image will be created.
   *
   * @option shadowRetinaUrl: String = null
   *
   * @option shadowSize: Point = null
   * Size of the shadow image in pixels.
   *
   * @option shadowAnchor: Point = null
   * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
   * as iconAnchor if not specified).
   *
   * @option className: String = ''
   * A custom class name to assign to both icon and shadow images. Empty by default.
   */
  options: {
    popupAnchor: [0, 0],
    tooltipAnchor: [0, 0],
    // @option crossOrigin: Boolean|String = false
    // Whether the crossOrigin attribute will be added to the tiles.
    // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
    // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
    crossOrigin: !1
  },
  initialize: function(t) {
    S(this, t);
  },
  // @method createIcon(oldIcon?: HTMLElement): HTMLElement
  // Called internally when the icon has to be shown, returns a `<img>` HTML element
  // styled according to the options.
  createIcon: function(t) {
    return this._createIcon("icon", t);
  },
  // @method createShadow(oldIcon?: HTMLElement): HTMLElement
  // As `createIcon`, but for the shadow beneath it.
  createShadow: function(t) {
    return this._createIcon("shadow", t);
  },
  _createIcon: function(t, e) {
    var i = this._getIconUrl(t);
    if (!i) {
      if (t === "icon")
        throw new Error("iconUrl not set in Icon options (see the docs).");
      return null;
    }
    var n = this._createImg(i, e && e.tagName === "IMG" ? e : null);
    return this._setIconStyles(n, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), n;
  },
  _setIconStyles: function(t, e) {
    var i = this.options, n = i[e + "Size"];
    typeof n == "number" && (n = [n, n]);
    var o = d(n), s = d(e === "shadow" && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
    t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
  },
  _createImg: function(t, e) {
    return e = e || document.createElement("img"), e.src = t, e;
  },
  _getIconUrl: function(t) {
    return c.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
  }
});
function To(t) {
  return new Et(t);
}
var bt = Et.extend({
  options: {
    iconUrl: "marker-icon.png",
    iconRetinaUrl: "marker-icon-2x.png",
    shadowUrl: "marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  },
  _getIconUrl: function(t) {
    return typeof bt.imagePath != "string" && (bt.imagePath = this._detectIconPath()), (this.options.imagePath || bt.imagePath) + Et.prototype._getIconUrl.call(this, t);
  },
  _stripUrl: function(t) {
    var e = function(i, n, o) {
      var s = n.exec(i);
      return s && s[o];
    };
    return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
  },
  _detectIconPath: function() {
    var t = x("div", "leaflet-default-icon-path", document.body), e = St(t, "background-image") || St(t, "backgroundImage");
    if (document.body.removeChild(t), e = this._stripUrl(e), e)
      return e;
    var i = document.querySelector('link[href$="leaflet.css"]');
    return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
  }
}), ii = tt.extend({
  initialize: function(t) {
    this._marker = t;
  },
  addHooks: function() {
    var t = this._marker._icon;
    this._draggable || (this._draggable = new ht(t, t, !0)), this._draggable.on({
      dragstart: this._onDragStart,
      predrag: this._onPreDrag,
      drag: this._onDrag,
      dragend: this._onDragEnd
    }, this).enable(), p(t, "leaflet-marker-draggable");
  },
  removeHooks: function() {
    this._draggable.off({
      dragstart: this._onDragStart,
      predrag: this._onPreDrag,
      drag: this._onDrag,
      dragend: this._onDragEnd
    }, this).disable(), this._marker._icon && E(this._marker._icon, "leaflet-marker-draggable");
  },
  moved: function() {
    return this._draggable && this._draggable._moved;
  },
  _adjustPan: function(t) {
    var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, o = this._marker.options.autoPanPadding, s = dt(e._icon), r = i.getPixelBounds(), a = i.getPixelOrigin(), h = H(
      r.min._subtract(a).add(o),
      r.max._subtract(a).subtract(o)
    );
    if (!h.contains(s)) {
      var u = d(
        (Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x),
        (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)
      ).multiplyBy(n);
      i.panBy(u, { animate: !1 }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), O(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = D(this._adjustPan.bind(this, t));
    }
  },
  _onDragStart: function() {
    this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
  },
  _onPreDrag: function(t) {
    this._marker.options.autoPan && (V(this._panRequest), this._panRequest = D(this._adjustPan.bind(this, t)));
  },
  _onDrag: function(t) {
    var e = this._marker, i = e._shadow, n = dt(e._icon), o = e._map.layerPointToLatLng(n);
    i && O(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
  },
  _onDragEnd: function(t) {
    V(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
  }
}), Be = $.extend({
  // @section
  // @aka Marker options
  options: {
    // @option icon: Icon = *
    // Icon instance to use for rendering the marker.
    // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
    // If not specified, a common instance of `L.Icon.Default` is used.
    icon: new bt(),
    // Option inherited from "Interactive layer" abstract class
    interactive: !0,
    // @option keyboard: Boolean = true
    // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
    keyboard: !0,
    // @option title: String = ''
    // Text for the browser tooltip that appear on marker hover (no tooltip by default).
    // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
    title: "",
    // @option alt: String = 'Marker'
    // Text for the `alt` attribute of the icon image.
    // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
    alt: "Marker",
    // @option zIndexOffset: Number = 0
    // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
    zIndexOffset: 0,
    // @option opacity: Number = 1.0
    // The opacity of the marker.
    opacity: 1,
    // @option riseOnHover: Boolean = false
    // If `true`, the marker will get on top of others when you hover the mouse over it.
    riseOnHover: !1,
    // @option riseOffset: Number = 250
    // The z-index offset used for the `riseOnHover` feature.
    riseOffset: 250,
    // @option pane: String = 'markerPane'
    // `Map pane` where the markers icon will be added.
    pane: "markerPane",
    // @option shadowPane: String = 'shadowPane'
    // `Map pane` where the markers shadow will be added.
    shadowPane: "shadowPane",
    // @option bubblingMouseEvents: Boolean = false
    // When `true`, a mouse event on this marker will trigger the same event on the map
    // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
    bubblingMouseEvents: !1,
    // @option autoPanOnFocus: Boolean = true
    // When `true`, the map will pan whenever the marker is focused (via
    // e.g. pressing `tab` on the keyboard) to ensure the marker is
    // visible within the map's bounds
    autoPanOnFocus: !0,
    // @section Draggable marker options
    // @option draggable: Boolean = false
    // Whether the marker is draggable with mouse/touch or not.
    draggable: !1,
    // @option autoPan: Boolean = false
    // Whether to pan the map when dragging this marker near its edge or not.
    autoPan: !1,
    // @option autoPanPadding: Point = Point(50, 50)
    // Distance (in pixels to the left/right and to the top/bottom) of the
    // map edge to start panning the map.
    autoPanPadding: [50, 50],
    // @option autoPanSpeed: Number = 10
    // Number of pixels the map should pan by.
    autoPanSpeed: 10
  },
  /* @section
   *
   * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
   */
  initialize: function(t, e) {
    S(this, e), this._latlng = g(t);
  },
  onAdd: function(t) {
    this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
  },
  onRemove: function(t) {
    this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
  },
  getEvents: function() {
    return {
      zoom: this.update,
      viewreset: this.update
    };
  },
  // @method getLatLng: LatLng
  // Returns the current geographical position of the marker.
  getLatLng: function() {
    return this._latlng;
  },
  // @method setLatLng(latlng: LatLng): this
  // Changes the marker position to the given point.
  setLatLng: function(t) {
    var e = this._latlng;
    return this._latlng = g(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
  },
  // @method setZIndexOffset(offset: Number): this
  // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
  setZIndexOffset: function(t) {
    return this.options.zIndexOffset = t, this.update();
  },
  // @method getIcon: Icon
  // Returns the current icon used by the marker
  getIcon: function() {
    return this.options.icon;
  },
  // @method setIcon(icon: Icon): this
  // Changes the marker icon.
  setIcon: function(t) {
    return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
  },
  getElement: function() {
    return this._icon;
  },
  update: function() {
    if (this._icon && this._map) {
      var t = this._map.latLngToLayerPoint(this._latlng).round();
      this._setPos(t);
    }
    return this;
  },
  _initIcon: function() {
    var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i = t.icon.createIcon(this._icon), n = !1;
    i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), p(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
      mouseover: this._bringToFront,
      mouseout: this._resetZIndex
    }), this.options.autoPanOnFocus && _(i, "focus", this._panOnFocus, this);
    var o = t.icon.createShadow(this._shadow), s = !1;
    o !== this._shadow && (this._removeShadow(), s = !0), o && (p(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
  },
  _removeIcon: function() {
    this.options.riseOnHover && this.off({
      mouseover: this._bringToFront,
      mouseout: this._resetZIndex
    }), this.options.autoPanOnFocus && b(this._icon, "focus", this._panOnFocus, this), C(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
  },
  _removeShadow: function() {
    this._shadow && C(this._shadow), this._shadow = null;
  },
  _setPos: function(t) {
    this._icon && O(this._icon, t), this._shadow && O(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
  },
  _updateZIndex: function(t) {
    this._icon && (this._icon.style.zIndex = this._zIndex + t);
  },
  _animateZoom: function(t) {
    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
    this._setPos(e);
  },
  _initInteraction: function() {
    if (this.options.interactive && (p(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), ii)) {
      var t = this.options.draggable;
      this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new ii(this), t && this.dragging.enable();
    }
  },
  // @method setOpacity(opacity: Number): this
  // Changes the opacity of the marker.
  setOpacity: function(t) {
    return this.options.opacity = t, this._map && this._updateOpacity(), this;
  },
  _updateOpacity: function() {
    var t = this.options.opacity;
    this._icon && q(this._icon, t), this._shadow && q(this._shadow, t);
  },
  _bringToFront: function() {
    this._updateZIndex(this.options.riseOffset);
  },
  _resetZIndex: function() {
    this._updateZIndex(0);
  },
  _panOnFocus: function() {
    var t = this._map;
    if (t) {
      var e = this.options.icon.options, i = e.iconSize ? d(e.iconSize) : d(0, 0), n = e.iconAnchor ? d(e.iconAnchor) : d(0, 0);
      t.panInside(this._latlng, {
        paddingTopLeft: n,
        paddingBottomRight: i.subtract(n)
      });
    }
  },
  _getPopupAnchor: function() {
    return this.options.icon.options.popupAnchor;
  },
  _getTooltipAnchor: function() {
    return this.options.icon.options.tooltipAnchor;
  }
});
function bo(t, e) {
  return new Be(t, e);
}
var mt = $.extend({
  // @section
  // @aka Path options
  options: {
    // @option stroke: Boolean = true
    // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
    stroke: !0,
    // @option color: String = '#3388ff'
    // Stroke color
    color: "#3388ff",
    // @option weight: Number = 3
    // Stroke width in pixels
    weight: 3,
    // @option opacity: Number = 1.0
    // Stroke opacity
    opacity: 1,
    // @option lineCap: String= 'round'
    // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
    lineCap: "round",
    // @option lineJoin: String = 'round'
    // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
    lineJoin: "round",
    // @option dashArray: String = null
    // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
    dashArray: null,
    // @option dashOffset: String = null
    // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
    dashOffset: null,
    // @option fill: Boolean = depends
    // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
    fill: !1,
    // @option fillColor: String = *
    // Fill color. Defaults to the value of the [`color`](#path-color) option
    fillColor: null,
    // @option fillOpacity: Number = 0.2
    // Fill opacity.
    fillOpacity: 0.2,
    // @option fillRule: String = 'evenodd'
    // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
    fillRule: "evenodd",
    // className: '',
    // Option inherited from "Interactive layer" abstract class
    interactive: !0,
    // @option bubblingMouseEvents: Boolean = true
    // When `true`, a mouse event on this path will trigger the same event on the map
    // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
    bubblingMouseEvents: !0
  },
  beforeAdd: function(t) {
    this._renderer = t.getRenderer(this);
  },
  onAdd: function() {
    this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
  },
  onRemove: function() {
    this._renderer._removePath(this);
  },
  // @method redraw(): this
  // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
  redraw: function() {
    return this._map && this._renderer._updatePath(this), this;
  },
  // @method setStyle(style: Path options): this
  // Changes the appearance of a Path based on the options in the `Path options` object.
  setStyle: function(t) {
    return S(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
  },
  // @method bringToFront(): this
  // Brings the layer to the top of all path layers.
  bringToFront: function() {
    return this._renderer && this._renderer._bringToFront(this), this;
  },
  // @method bringToBack(): this
  // Brings the layer to the bottom of all path layers.
  bringToBack: function() {
    return this._renderer && this._renderer._bringToBack(this), this;
  },
  getElement: function() {
    return this._path;
  },
  _reset: function() {
    this._project(), this._update();
  },
  _clickTolerance: function() {
    return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
  }
}), Ne = mt.extend({
  // @section
  // @aka CircleMarker options
  options: {
    fill: !0,
    // @option radius: Number = 10
    // Radius of the circle marker, in pixels
    radius: 10
  },
  initialize: function(t, e) {
    S(this, e), this._latlng = g(t), this._radius = this.options.radius;
  },
  // @method setLatLng(latLng: LatLng): this
  // Sets the position of a circle marker to a new location.
  setLatLng: function(t) {
    var e = this._latlng;
    return this._latlng = g(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
  },
  // @method getLatLng(): LatLng
  // Returns the current geographical position of the circle marker
  getLatLng: function() {
    return this._latlng;
  },
  // @method setRadius(radius: Number): this
  // Sets the radius of a circle marker. Units are in pixels.
  setRadius: function(t) {
    return this.options.radius = this._radius = t, this.redraw();
  },
  // @method getRadius(): Number
  // Returns the current radius of the circle
  getRadius: function() {
    return this._radius;
  },
  setStyle: function(t) {
    var e = t && t.radius || this._radius;
    return mt.prototype.setStyle.call(this, t), this.setRadius(e), this;
  },
  _project: function() {
    this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
  },
  _updateBounds: function() {
    var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
    this._pxBounds = new z(this._point.subtract(n), this._point.add(n));
  },
  _update: function() {
    this._map && this._updatePath();
  },
  _updatePath: function() {
    this._renderer._updateCircle(this);
  },
  _empty: function() {
    return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
  },
  // Needed by the `Canvas` renderer for interactivity
  _containsPoint: function(t) {
    return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
  }
});
function Mo(t, e) {
  return new Ne(t, e);
}
var Vi = Ne.extend({
  initialize: function(t, e, i) {
    if (typeof e == "number" && (e = T({}, i, { radius: e })), S(this, e), this._latlng = g(t), isNaN(this.options.radius))
      throw new Error("Circle radius cannot be NaN");
    this._mRadius = this.options.radius;
  },
  // @method setRadius(radius: Number): this
  // Sets the radius of a circle. Units are in meters.
  setRadius: function(t) {
    return this._mRadius = t, this.redraw();
  },
  // @method getRadius(): Number
  // Returns the current radius of a circle. Units are in meters.
  getRadius: function() {
    return this._mRadius;
  },
  // @method getBounds(): LatLngBounds
  // Returns the `LatLngBounds` of the path.
  getBounds: function() {
    var t = [this._radius, this._radiusY || this._radius];
    return new F(
      this._map.layerPointToLatLng(this._point.subtract(t)),
      this._map.layerPointToLatLng(this._point.add(t))
    );
  },
  setStyle: mt.prototype.setStyle,
  _project: function() {
    var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
    if (n.distance === ot.distance) {
      var o = Math.PI / 180, s = this._mRadius / ot.R / o, r = i.project([e + s, t]), a = i.project([e - s, t]), h = r.add(a).divideBy(2), u = i.unproject(h).lat, l = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(u * o)) / (Math.cos(e * o) * Math.cos(u * o))) / o;
      (isNaN(l) || l === 0) && (l = s / Math.cos(Math.PI / 180 * e)), this._point = h.subtract(i.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - i.project([u, t - l]).x, this._radiusY = h.y - r.y;
    } else {
      var f = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
      this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(f).x;
    }
    this._updateBounds();
  }
});
function Co(t, e, i) {
  return new Vi(t, e, i);
}
var it = mt.extend({
  // @section
  // @aka Polyline options
  options: {
    // @option smoothFactor: Number = 1.0
    // How much to simplify the polyline on each zoom level. More means
    // better performance and smoother look, and less means more accurate representation.
    smoothFactor: 1,
    // @option noClip: Boolean = false
    // Disable polyline clipping.
    noClip: !1
  },
  initialize: function(t, e) {
    S(this, e), this._setLatLngs(t);
  },
  // @method getLatLngs(): LatLng[]
  // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
  getLatLngs: function() {
    return this._latlngs;
  },
  // @method setLatLngs(latlngs: LatLng[]): this
  // Replaces all the points in the polyline with the given array of geographical points.
  setLatLngs: function(t) {
    return this._setLatLngs(t), this.redraw();
  },
  // @method isEmpty(): Boolean
  // Returns `true` if the Polyline has no LatLngs.
  isEmpty: function() {
    return !this._latlngs.length;
  },
  // @method closestLayerPoint(p: Point): Point
  // Returns the point closest to `p` on the Polyline.
  closestLayerPoint: function(t) {
    for (var e = 1 / 0, i = null, n = At, o, s, r = 0, a = this._parts.length; r < a; r++)
      for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
        o = h[u - 1], s = h[u];
        var f = n(t, o, s, !0);
        f < e && (e = f, i = n(t, o, s));
      }
    return i && (i.distance = Math.sqrt(e)), i;
  },
  // @method getCenter(): LatLng
  // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
  getCenter: function() {
    if (!this._map)
      throw new Error("Must add layer to map before using getCenter()");
    return Ui(this._defaultShape(), this._map.options.crs);
  },
  // @method getBounds(): LatLngBounds
  // Returns the `LatLngBounds` of the path.
  getBounds: function() {
    return this._bounds;
  },
  // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
  // Adds a given point to the polyline. By default, adds to the first ring of
  // the polyline in case of a multi-polyline, but can be overridden by passing
  // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
  addLatLng: function(t, e) {
    return e = e || this._defaultShape(), t = g(t), e.push(t), this._bounds.extend(t), this.redraw();
  },
  _setLatLngs: function(t) {
    this._bounds = new F(), this._latlngs = this._convertLatLngs(t);
  },
  _defaultShape: function() {
    return G(this._latlngs) ? this._latlngs : this._latlngs[0];
  },
  // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
  _convertLatLngs: function(t) {
    for (var e = [], i = G(t), n = 0, o = t.length; n < o; n++)
      i ? (e[n] = g(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
    return e;
  },
  _project: function() {
    var t = new z();
    this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
  },
  _updateBounds: function() {
    var t = this._clickTolerance(), e = new m(t, t);
    this._rawPxBounds && (this._pxBounds = new z([
      this._rawPxBounds.min.subtract(e),
      this._rawPxBounds.max.add(e)
    ]));
  },
  // recursively turns latlngs into a set of rings with projected coordinates
  _projectLatlngs: function(t, e, i) {
    var n = t[0] instanceof P, o = t.length, s, r;
    if (n) {
      for (r = [], s = 0; s < o; s++)
        r[s] = this._map.latLngToLayerPoint(t[s]), i.extend(r[s]);
      e.push(r);
    } else
      for (s = 0; s < o; s++)
        this._projectLatlngs(t[s], e, i);
  },
  // clip polyline by renderer bounds so that we have less to render for performance
  _clipPoints: function() {
    var t = this._renderer._bounds;
    if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }
      var e = this._parts, i, n, o, s, r, a, h;
      for (i = 0, o = 0, s = this._rings.length; i < s; i++)
        for (h = this._rings[i], n = 0, r = h.length; n < r - 1; n++)
          a = Fi(h[n], h[n + 1], t, n, !0), a && (e[o] = e[o] || [], e[o].push(a[0]), (a[1] !== h[n + 1] || n === r - 2) && (e[o].push(a[1]), o++));
    }
  },
  // simplify each clipped part of the polyline for performance
  _simplifyPoints: function() {
    for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
      t[i] = Di(t[i], e);
  },
  _update: function() {
    this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
  },
  _updatePath: function() {
    this._renderer._updatePoly(this);
  },
  // Needed by the `Canvas` renderer for interactivity
  _containsPoint: function(t, e) {
    var i, n, o, s, r, a, h = this._clickTolerance();
    if (!this._pxBounds || !this._pxBounds.contains(t))
      return !1;
    for (i = 0, s = this._parts.length; i < s; i++)
      for (a = this._parts[i], n = 0, r = a.length, o = r - 1; n < r; o = n++)
        if (!(!e && n === 0) && Hi(t, a[o], a[n]) <= h)
          return !0;
    return !1;
  }
});
function So(t, e) {
  return new it(t, e);
}
it._flat = Wi;
var Zt = it.extend({
  options: {
    fill: !0
  },
  isEmpty: function() {
    return !this._latlngs.length || !this._latlngs[0].length;
  },
  // @method getCenter(): LatLng
  // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
  getCenter: function() {
    if (!this._map)
      throw new Error("Must add layer to map before using getCenter()");
    return Ri(this._defaultShape(), this._map.options.crs);
  },
  _convertLatLngs: function(t) {
    var e = it.prototype._convertLatLngs.call(this, t), i = e.length;
    return i >= 2 && e[0] instanceof P && e[0].equals(e[i - 1]) && e.pop(), e;
  },
  _setLatLngs: function(t) {
    it.prototype._setLatLngs.call(this, t), G(this._latlngs) && (this._latlngs = [this._latlngs]);
  },
  _defaultShape: function() {
    return G(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
  },
  _clipPoints: function() {
    var t = this._renderer._bounds, e = this.options.weight, i = new m(e, e);
    if (t = new z(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }
      for (var n = 0, o = this._rings.length, s; n < o; n++)
        s = Ni(this._rings[n], t, !0), s.length && this._parts.push(s);
    }
  },
  _updatePath: function() {
    this._renderer._updatePoly(this, !0);
  },
  // Needed by the `Canvas` renderer for interactivity
  _containsPoint: function(t) {
    var e = !1, i, n, o, s, r, a, h, u;
    if (!this._pxBounds || !this._pxBounds.contains(t))
      return !1;
    for (s = 0, h = this._parts.length; s < h; s++)
      for (i = this._parts[s], r = 0, u = i.length, a = u - 1; r < u; a = r++)
        n = i[r], o = i[a], n.y > t.y != o.y > t.y && t.x < (o.x - n.x) * (t.y - n.y) / (o.y - n.y) + n.x && (e = !e);
    return e || it.prototype._containsPoint.call(this, t, !0);
  }
});
function zo(t, e) {
  return new Zt(t, e);
}
var at = nt.extend({
  /* @section
   * @aka GeoJSON options
   *
   * @option pointToLayer: Function = *
   * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
   * called when data is added, passing the GeoJSON point feature and its `LatLng`.
   * The default is to spawn a default `Marker`:
   * ```js
   * function(geoJsonPoint, latlng) {
   * 	return L.marker(latlng);
   * }
   * ```
   *
   * @option style: Function = *
   * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
   * called internally when data is added.
   * The default value is to not override any defaults:
   * ```js
   * function (geoJsonFeature) {
   * 	return {}
   * }
   * ```
   *
   * @option onEachFeature: Function = *
   * A `Function` that will be called once for each created `Feature`, after it has
   * been created and styled. Useful for attaching events and popups to features.
   * The default is to do nothing with the newly created layers:
   * ```js
   * function (feature, layer) {}
   * ```
   *
   * @option filter: Function = *
   * A `Function` that will be used to decide whether to include a feature or not.
   * The default is to include all features:
   * ```js
   * function (geoJsonFeature) {
   * 	return true;
   * }
   * ```
   * Note: dynamically changing the `filter` option will have effect only on newly
   * added data. It will _not_ re-evaluate already included features.
   *
   * @option coordsToLatLng: Function = *
   * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
   * The default is the `coordsToLatLng` static method.
   *
   * @option markersInheritOptions: Boolean = false
   * Whether default Markers for "Point" type Features inherit from group options.
   */
  initialize: function(t, e) {
    S(this, e), this._layers = {}, t && this.addData(t);
  },
  // @method addData( <GeoJSON> data ): this
  // Adds a GeoJSON object to the layer.
  addData: function(t) {
    var e = j(t) ? t : t.features, i, n, o;
    if (e) {
      for (i = 0, n = e.length; i < n; i++)
        o = e[i], (o.geometries || o.geometry || o.features || o.coordinates) && this.addData(o);
      return this;
    }
    var s = this.options;
    if (s.filter && !s.filter(t))
      return this;
    var r = Gt(t, s);
    return r ? (r.feature = ee(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this;
  },
  // @method resetStyle( <Path> layer? ): this
  // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
  // If `layer` is omitted, the style of all features in the current layer is reset.
  resetStyle: function(t) {
    return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = T({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
  },
  // @method setStyle( <Function> style ): this
  // Changes styles of GeoJSON vector layers with the given style function.
  setStyle: function(t) {
    return this.eachLayer(function(e) {
      this._setLayerStyle(e, t);
    }, this);
  },
  _setLayerStyle: function(t, e) {
    t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
  }
});
function Gt(t, e) {
  var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, o = [], s = e && e.pointToLayer, r = e && e.coordsToLatLng || Re, a, h, u, l;
  if (!n && !i)
    return null;
  switch (i.type) {
    case "Point":
      return a = r(n), ni(s, t, a, e);
    case "MultiPoint":
      for (u = 0, l = n.length; u < l; u++)
        a = r(n[u]), o.push(ni(s, t, a, e));
      return new nt(o);
    case "LineString":
    case "MultiLineString":
      return h = jt(n, i.type === "LineString" ? 0 : 1, r), new it(h, e);
    case "Polygon":
    case "MultiPolygon":
      return h = jt(n, i.type === "Polygon" ? 1 : 2, r), new Zt(h, e);
    case "GeometryCollection":
      for (u = 0, l = i.geometries.length; u < l; u++) {
        var f = Gt({
          geometry: i.geometries[u],
          type: "Feature",
          properties: t.properties
        }, e);
        f && o.push(f);
      }
      return new nt(o);
    case "FeatureCollection":
      for (u = 0, l = i.features.length; u < l; u++) {
        var v = Gt(i.features[u], e);
        v && o.push(v);
      }
      return new nt(o);
    default:
      throw new Error("Invalid GeoJSON object.");
  }
}
function ni(t, e, i, n) {
  return t ? t(e, i) : new Be(i, n && n.markersInheritOptions && n);
}
function Re(t) {
  return new P(t[1], t[0], t[2]);
}
function jt(t, e, i) {
  for (var n = [], o = 0, s = t.length, r; o < s; o++)
    r = e ? jt(t[o], e - 1, i) : (i || Re)(t[o]), n.push(r);
  return n;
}
function De(t, e) {
  return t = g(t), t.alt !== void 0 ? [K(t.lng, e), K(t.lat, e), K(t.alt, e)] : [K(t.lng, e), K(t.lat, e)];
}
function te(t, e, i, n) {
  for (var o = [], s = 0, r = t.length; s < r; s++)
    o.push(e ? te(t[s], G(t[s]) ? 0 : e - 1, i, n) : De(t[s], n));
  return !e && i && o.length > 0 && o.push(o[0].slice()), o;
}
function gt(t, e) {
  return t.feature ? T({}, t.feature, { geometry: e }) : ee(e);
}
function ee(t) {
  return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
    type: "Feature",
    properties: {},
    geometry: t
  };
}
var He = {
  toGeoJSON: function(t) {
    return gt(this, {
      type: "Point",
      coordinates: De(this.getLatLng(), t)
    });
  }
};
Be.include(He);
Vi.include(He);
Ne.include(He);
it.include({
  toGeoJSON: function(t) {
    var e = !G(this._latlngs), i = te(this._latlngs, e ? 1 : 0, !1, t);
    return gt(this, {
      type: (e ? "Multi" : "") + "LineString",
      coordinates: i
    });
  }
});
Zt.include({
  toGeoJSON: function(t) {
    var e = !G(this._latlngs), i = e && !G(this._latlngs[0]), n = te(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
    return e || (n = [n]), gt(this, {
      type: (i ? "Multi" : "") + "Polygon",
      coordinates: n
    });
  }
});
Tt.include({
  toMultiPoint: function(t) {
    var e = [];
    return this.eachLayer(function(i) {
      e.push(i.toGeoJSON(t).geometry.coordinates);
    }), gt(this, {
      type: "MultiPoint",
      coordinates: e
    });
  },
  // @method toGeoJSON(precision?: Number|false): Object
  // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
  // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
  toGeoJSON: function(t) {
    var e = this.feature && this.feature.geometry && this.feature.geometry.type;
    if (e === "MultiPoint")
      return this.toMultiPoint(t);
    var i = e === "GeometryCollection", n = [];
    return this.eachLayer(function(o) {
      if (o.toGeoJSON) {
        var s = o.toGeoJSON(t);
        if (i)
          n.push(s.geometry);
        else {
          var r = ee(s);
          r.type === "FeatureCollection" ? n.push.apply(n, r.features) : n.push(r);
        }
      }
    }), i ? gt(this, {
      geometries: n,
      type: "GeometryCollection"
    }) : {
      type: "FeatureCollection",
      features: n
    };
  }
});
function to(t, e) {
  return new at(t, e);
}
var ko = to, Fe = $.extend({
  // @section
  // @aka ImageOverlay options
  options: {
    // @option opacity: Number = 1.0
    // The opacity of the image overlay.
    opacity: 1,
    // @option alt: String = ''
    // Text for the `alt` attribute of the image (useful for accessibility).
    alt: "",
    // @option interactive: Boolean = false
    // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
    interactive: !1,
    // @option crossOrigin: Boolean|String = false
    // Whether the crossOrigin attribute will be added to the image.
    // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
    // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
    crossOrigin: !1,
    // @option errorOverlayUrl: String = ''
    // URL to the overlay image to show in place of the overlay that failed to load.
    errorOverlayUrl: "",
    // @option zIndex: Number = 1
    // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
    zIndex: 1,
    // @option className: String = ''
    // A custom class name to assign to the image. Empty by default.
    className: ""
  },
  initialize: function(t, e, i) {
    this._url = t, this._bounds = I(e), S(this, i);
  },
  onAdd: function() {
    this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (p(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
  },
  onRemove: function() {
    C(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
  },
  // @method setOpacity(opacity: Number): this
  // Sets the opacity of the overlay.
  setOpacity: function(t) {
    return this.options.opacity = t, this._image && this._updateOpacity(), this;
  },
  setStyle: function(t) {
    return t.opacity && this.setOpacity(t.opacity), this;
  },
  // @method bringToFront(): this
  // Brings the layer to the top of all overlays.
  bringToFront: function() {
    return this._map && yt(this._image), this;
  },
  // @method bringToBack(): this
  // Brings the layer to the bottom of all overlays.
  bringToBack: function() {
    return this._map && xt(this._image), this;
  },
  // @method setUrl(url: String): this
  // Changes the URL of the image.
  setUrl: function(t) {
    return this._url = t, this._image && (this._image.src = t), this;
  },
  // @method setBounds(bounds: LatLngBounds): this
  // Update the bounds that this ImageOverlay covers
  setBounds: function(t) {
    return this._bounds = I(t), this._map && this._reset(), this;
  },
  getEvents: function() {
    var t = {
      zoom: this._reset,
      viewreset: this._reset
    };
    return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
  },
  // @method setZIndex(value: Number): this
  // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
  setZIndex: function(t) {
    return this.options.zIndex = t, this._updateZIndex(), this;
  },
  // @method getBounds(): LatLngBounds
  // Get the bounds that this ImageOverlay covers
  getBounds: function() {
    return this._bounds;
  },
  // @method getElement(): HTMLElement
  // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
  // used by this overlay.
  getElement: function() {
    return this._image;
  },
  _initImage: function() {
    var t = this._url.tagName === "IMG", e = this._image = t ? this._url : x("img");
    if (p(e, "leaflet-image-layer"), this._zoomAnimated && p(e, "leaflet-zoom-animated"), this.options.className && p(e, this.options.className), e.onselectstart = k, e.onmousemove = k, e.onload = M(this.fire, this, "load"), e.onerror = M(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
      this._url = e.src;
      return;
    }
    e.src = this._url, e.alt = this.options.alt;
  },
  _animateZoom: function(t) {
    var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
    ft(this._image, i, e);
  },
  _reset: function() {
    var t = this._image, e = new z(
      this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
      this._map.latLngToLayerPoint(this._bounds.getSouthEast())
    ), i = e.getSize();
    O(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
  },
  _updateOpacity: function() {
    q(this._image, this.options.opacity);
  },
  _updateZIndex: function() {
    this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
  },
  _overlayOnError: function() {
    this.fire("error");
    var t = this.options.errorOverlayUrl;
    t && this._url !== t && (this._url = t, this._image.src = t);
  },
  // @method getCenter(): LatLng
  // Returns the center of the ImageOverlay.
  getCenter: function() {
    return this._bounds.getCenter();
  }
}), Eo = function(t, e, i) {
  return new Fe(t, e, i);
}, eo = Fe.extend({
  // @section
  // @aka VideoOverlay options
  options: {
    // @option autoplay: Boolean = true
    // Whether the video starts playing automatically when loaded.
    // On some browsers autoplay will only work with `muted: true`
    autoplay: !0,
    // @option loop: Boolean = true
    // Whether the video will loop back to the beginning when played.
    loop: !0,
    // @option keepAspectRatio: Boolean = true
    // Whether the video will save aspect ratio after the projection.
    // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
    keepAspectRatio: !0,
    // @option muted: Boolean = false
    // Whether the video starts on mute when loaded.
    muted: !1,
    // @option playsInline: Boolean = true
    // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
    playsInline: !0
  },
  _initImage: function() {
    var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : x("video");
    if (p(e, "leaflet-image-layer"), this._zoomAnimated && p(e, "leaflet-zoom-animated"), this.options.className && p(e, this.options.className), e.onselectstart = k, e.onmousemove = k, e.onloadeddata = M(this.fire, this, "load"), t) {
      for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++)
        n.push(i[o].src);
      this._url = i.length > 0 ? n : [e.src];
      return;
    }
    j(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
    for (var s = 0; s < this._url.length; s++) {
      var r = x("source");
      r.src = this._url[s], e.appendChild(r);
    }
  }
  // @method getElement(): HTMLVideoElement
  // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
  // used by this overlay.
});
function Zo(t, e, i) {
  return new eo(t, e, i);
}
var io = Fe.extend({
  _initImage: function() {
    var t = this._image = this._url;
    p(t, "leaflet-image-layer"), this._zoomAnimated && p(t, "leaflet-zoom-animated"), this.options.className && p(t, this.options.className), t.onselectstart = k, t.onmousemove = k;
  }
  // @method getElement(): SVGElement
  // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
  // used by this overlay.
});
function Oo(t, e, i) {
  return new io(t, e, i);
}
var Q = $.extend({
  // @section
  // @aka DivOverlay options
  options: {
    // @option interactive: Boolean = false
    // If true, the popup/tooltip will listen to the mouse events.
    interactive: !1,
    // @option offset: Point = Point(0, 0)
    // The offset of the overlay position.
    offset: [0, 0],
    // @option className: String = ''
    // A custom CSS class name to assign to the overlay.
    className: "",
    // @option pane: String = undefined
    // `Map pane` where the overlay will be added.
    pane: void 0,
    // @option content: String|HTMLElement|Function = ''
    // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
    // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
    content: ""
  },
  initialize: function(t, e) {
    t && (t instanceof P || j(t)) ? (this._latlng = g(t), S(this, e)) : (S(this, t), this._source = e), this.options.content && (this._content = this.options.content);
  },
  // @method openOn(map: Map): this
  // Adds the overlay to the map.
  // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
  openOn: function(t) {
    return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
  },
  // @method close(): this
  // Closes the overlay.
  // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
  // and `layer.closePopup()`/`.closeTooltip()`.
  close: function() {
    return this._map && this._map.removeLayer(this), this;
  },
  // @method toggle(layer?: Layer): this
  // Opens or closes the overlay bound to layer depending on its current state.
  // Argument may be omitted only for overlay bound to layer.
  // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
  toggle: function(t) {
    return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
  },
  onAdd: function(t) {
    this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && q(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && q(this._container, 1), this.bringToFront(), this.options.interactive && (p(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
  },
  onRemove: function(t) {
    t._fadeAnimated ? (q(this._container, 0), this._removeTimeout = setTimeout(M(C, void 0, this._container), 200)) : C(this._container), this.options.interactive && (E(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
  },
  // @namespace DivOverlay
  // @method getLatLng: LatLng
  // Returns the geographical point of the overlay.
  getLatLng: function() {
    return this._latlng;
  },
  // @method setLatLng(latlng: LatLng): this
  // Sets the geographical point where the overlay will open.
  setLatLng: function(t) {
    return this._latlng = g(t), this._map && (this._updatePosition(), this._adjustPan()), this;
  },
  // @method getContent: String|HTMLElement
  // Returns the content of the overlay.
  getContent: function() {
    return this._content;
  },
  // @method setContent(htmlContent: String|HTMLElement|Function): this
  // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
  // The function should return a `String` or `HTMLElement` to be used in the overlay.
  setContent: function(t) {
    return this._content = t, this.update(), this;
  },
  // @method getElement: String|HTMLElement
  // Returns the HTML container of the overlay.
  getElement: function() {
    return this._container;
  },
  // @method update: null
  // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
  update: function() {
    this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
  },
  getEvents: function() {
    var t = {
      zoom: this._updatePosition,
      viewreset: this._updatePosition
    };
    return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
  },
  // @method isOpen: Boolean
  // Returns `true` when the overlay is visible on the map.
  isOpen: function() {
    return !!this._map && this._map.hasLayer(this);
  },
  // @method bringToFront: this
  // Brings this overlay in front of other overlays (in the same map pane).
  bringToFront: function() {
    return this._map && yt(this._container), this;
  },
  // @method bringToBack: this
  // Brings this overlay to the back of other overlays (in the same map pane).
  bringToBack: function() {
    return this._map && xt(this._container), this;
  },
  // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
  _prepareOpen: function(t) {
    var e = this._source;
    if (!e._map)
      return !1;
    if (e instanceof nt) {
      e = null;
      var i = this._source._layers;
      for (var n in i)
        if (i[n]._map) {
          e = i[n];
          break;
        }
      if (!e)
        return !1;
      this._source = e;
    }
    if (!t)
      if (e.getCenter)
        t = e.getCenter();
      else if (e.getLatLng)
        t = e.getLatLng();
      else if (e.getBounds)
        t = e.getBounds().getCenter();
      else
        throw new Error("Unable to get source layer LatLng.");
    return this.setLatLng(t), this._map && this.update(), !0;
  },
  _updateContent: function() {
    if (this._content) {
      var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
      if (typeof e == "string")
        t.innerHTML = e;
      else {
        for (; t.hasChildNodes(); )
          t.removeChild(t.firstChild);
        t.appendChild(e);
      }
      this.fire("contentupdate");
    }
  },
  _updatePosition: function() {
    if (this._map) {
      var t = this._map.latLngToLayerPoint(this._latlng), e = d(this.options.offset), i = this._getAnchor();
      this._zoomAnimated ? O(this._container, t.add(i)) : e = e.add(t).add(i);
      var n = this._containerBottom = -e.y, o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
      this._container.style.bottom = n + "px", this._container.style.left = o + "px";
    }
  },
  _getAnchor: function() {
    return [0, 0];
  }
});
y.include({
  _initOverlay: function(t, e, i, n) {
    var o = e;
    return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
  }
});
$.include({
  _initOverlay: function(t, e, i, n) {
    var o = i;
    return o instanceof t ? (S(o, n), o._source = this) : (o = e && !n ? e : new t(n, this), o.setContent(i)), o;
  }
});
var We = Q.extend({
  // @section
  // @aka Popup options
  options: {
    // @option pane: String = 'popupPane'
    // `Map pane` where the popup will be added.
    pane: "popupPane",
    // @option offset: Point = Point(0, 7)
    // The offset of the popup position.
    offset: [0, 7],
    // @option maxWidth: Number = 300
    // Max width of the popup, in pixels.
    maxWidth: 300,
    // @option minWidth: Number = 50
    // Min width of the popup, in pixels.
    minWidth: 50,
    // @option maxHeight: Number = null
    // If set, creates a scrollable container of the given height
    // inside a popup if its content exceeds it.
    // The scrollable container can be styled using the
    // `leaflet-popup-scrolled` CSS class selector.
    maxHeight: null,
    // @option autoPan: Boolean = true
    // Set it to `false` if you don't want the map to do panning animation
    // to fit the opened popup.
    autoPan: !0,
    // @option autoPanPaddingTopLeft: Point = null
    // The margin between the popup and the top left corner of the map
    // view after autopanning was performed.
    autoPanPaddingTopLeft: null,
    // @option autoPanPaddingBottomRight: Point = null
    // The margin between the popup and the bottom right corner of the map
    // view after autopanning was performed.
    autoPanPaddingBottomRight: null,
    // @option autoPanPadding: Point = Point(5, 5)
    // Equivalent of setting both top left and bottom right autopan padding to the same value.
    autoPanPadding: [5, 5],
    // @option keepInView: Boolean = false
    // Set it to `true` if you want to prevent users from panning the popup
    // off of the screen while it is open.
    keepInView: !1,
    // @option closeButton: Boolean = true
    // Controls the presence of a close button in the popup.
    closeButton: !0,
    // @option autoClose: Boolean = true
    // Set it to `false` if you want to override the default behavior of
    // the popup closing when another popup is opened.
    autoClose: !0,
    // @option closeOnEscapeKey: Boolean = true
    // Set it to `false` if you want to override the default behavior of
    // the ESC key for closing of the popup.
    closeOnEscapeKey: !0,
    // @option closeOnClick: Boolean = *
    // Set it if you want to override the default behavior of the popup closing when user clicks
    // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
    // @option className: String = ''
    // A custom CSS class name to assign to the popup.
    className: ""
  },
  // @namespace Popup
  // @method openOn(map: Map): this
  // Alternative to `map.openPopup(popup)`.
  // Adds the popup to the map and closes the previous one.
  openOn: function(t) {
    return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, Q.prototype.openOn.call(this, t);
  },
  onAdd: function(t) {
    Q.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof mt || this._source.on("preclick", lt));
  },
  onRemove: function(t) {
    Q.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof mt || this._source.off("preclick", lt));
  },
  getEvents: function() {
    var t = Q.prototype.getEvents.call(this);
    return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
  },
  _initLayout: function() {
    var t = "leaflet-popup", e = this._container = x(
      "div",
      t + " " + (this.options.className || "") + " leaflet-zoom-animated"
    ), i = this._wrapper = x("div", t + "-content-wrapper", e);
    if (this._contentNode = x("div", t + "-content", i), It(e), ke(this._contentNode), _(e, "contextmenu", lt), this._tipContainer = x("div", t + "-tip-container", e), this._tip = x("div", t + "-tip", this._tipContainer), this.options.closeButton) {
      var n = this._closeButton = x("a", t + "-close-button", e);
      n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', _(n, "click", function(o) {
        B(o), this.close();
      }, this);
    }
  },
  _updateLayout: function() {
    var t = this._contentNode, e = t.style;
    e.width = "", e.whiteSpace = "nowrap";
    var i = t.offsetWidth;
    i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
    var n = t.offsetHeight, o = this.options.maxHeight, s = "leaflet-popup-scrolled";
    o && n > o ? (e.height = o + "px", p(t, s)) : E(t, s), this._containerWidth = this._container.offsetWidth;
  },
  _animateZoom: function(t) {
    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
    O(this._container, e.add(i));
  },
  _adjustPan: function() {
    if (this.options.autoPan) {
      if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
        this._autopanning = !1;
        return;
      }
      var t = this._map, e = parseInt(St(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, o = new m(this._containerLeft, -i - this._containerBottom);
      o._add(dt(this._container));
      var s = t.layerPointToContainerPoint(o), r = d(this.options.autoPanPadding), a = d(this.options.autoPanPaddingTopLeft || r), h = d(this.options.autoPanPaddingBottomRight || r), u = t.getSize(), l = 0, f = 0;
      s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + i + h.y > u.y && (f = s.y + i - u.y + h.y), s.y - f - a.y < 0 && (f = s.y - a.y), (l || f) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([l, f]));
    }
  },
  _getAnchor: function() {
    return d(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
  }
}), Io = function(t, e) {
  return new We(t, e);
};
y.mergeOptions({
  closePopupOnClick: !0
});
y.include({
  // @method openPopup(popup: Popup): this
  // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
  // @alternative
  // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
  // Creates a popup with the specified content and options and opens it in the given point on a map.
  openPopup: function(t, e, i) {
    return this._initOverlay(We, t, e, i).openOn(this), this;
  },
  // @method closePopup(popup?: Popup): this
  // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
  closePopup: function(t) {
    return t = arguments.length ? t : this._popup, t && t.close(), this;
  }
});
$.include({
  // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
  // Binds a popup to the layer with the passed `content` and sets up the
  // necessary event listeners. If a `Function` is passed it will receive
  // the layer as the first argument and should return a `String` or `HTMLElement`.
  bindPopup: function(t, e) {
    return this._popup = this._initOverlay(We, this._popup, t, e), this._popupHandlersAdded || (this.on({
      click: this._openPopup,
      keypress: this._onKeyPress,
      remove: this.closePopup,
      move: this._movePopup
    }), this._popupHandlersAdded = !0), this;
  },
  // @method unbindPopup(): this
  // Removes the popup previously bound with `bindPopup`.
  unbindPopup: function() {
    return this._popup && (this.off({
      click: this._openPopup,
      keypress: this._onKeyPress,
      remove: this.closePopup,
      move: this._movePopup
    }), this._popupHandlersAdded = !1, this._popup = null), this;
  },
  // @method openPopup(latlng?: LatLng): this
  // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
  openPopup: function(t) {
    return this._popup && (this instanceof nt || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
  },
  // @method closePopup(): this
  // Closes the popup bound to this layer if it is open.
  closePopup: function() {
    return this._popup && this._popup.close(), this;
  },
  // @method togglePopup(): this
  // Opens or closes the popup bound to this layer depending on its current state.
  togglePopup: function() {
    return this._popup && this._popup.toggle(this), this;
  },
  // @method isPopupOpen(): boolean
  // Returns `true` if the popup bound to this layer is currently open.
  isPopupOpen: function() {
    return this._popup ? this._popup.isOpen() : !1;
  },
  // @method setPopupContent(content: String|HTMLElement|Popup): this
  // Sets the content of the popup bound to this layer.
  setPopupContent: function(t) {
    return this._popup && this._popup.setContent(t), this;
  },
  // @method getPopup(): Popup
  // Returns the popup bound to this layer.
  getPopup: function() {
    return this._popup;
  },
  _openPopup: function(t) {
    if (!(!this._popup || !this._map)) {
      _t(t);
      var e = t.layer || t.target;
      if (this._popup._source === e && !(e instanceof mt)) {
        this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
        return;
      }
      this._popup._source = e, this.openPopup(t.latlng);
    }
  },
  _movePopup: function(t) {
    this._popup.setLatLng(t.latlng);
  },
  _onKeyPress: function(t) {
    t.originalEvent.keyCode === 13 && this._openPopup(t);
  }
});
var Ue = Q.extend({
  // @section
  // @aka Tooltip options
  options: {
    // @option pane: String = 'tooltipPane'
    // `Map pane` where the tooltip will be added.
    pane: "tooltipPane",
    // @option offset: Point = Point(0, 0)
    // Optional offset of the tooltip position.
    offset: [0, 0],
    // @option direction: String = 'auto'
    // Direction where to open the tooltip. Possible values are: `right`, `left`,
    // `top`, `bottom`, `center`, `auto`.
    // `auto` will dynamically switch between `right` and `left` according to the tooltip
    // position on the map.
    direction: "auto",
    // @option permanent: Boolean = false
    // Whether to open the tooltip permanently or only on mouseover.
    permanent: !1,
    // @option sticky: Boolean = false
    // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
    sticky: !1,
    // @option opacity: Number = 0.9
    // Tooltip container opacity.
    opacity: 0.9
  },
  onAdd: function(t) {
    Q.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
  },
  onRemove: function(t) {
    Q.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
  },
  getEvents: function() {
    var t = Q.prototype.getEvents.call(this);
    return this.options.permanent || (t.preclick = this.close), t;
  },
  _initLayout: function() {
    var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
    this._contentNode = this._container = x("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + w(this));
  },
  _updateLayout: function() {
  },
  _adjustPan: function() {
  },
  _setPosition: function(t) {
    var e, i, n = this._map, o = this._container, s = n.latLngToContainerPoint(n.getCenter()), r = n.layerPointToContainerPoint(t), a = this.options.direction, h = o.offsetWidth, u = o.offsetHeight, l = d(this.options.offset), f = this._getAnchor();
    a === "top" ? (e = h / 2, i = u) : a === "bottom" ? (e = h / 2, i = 0) : a === "center" ? (e = h / 2, i = u / 2) : a === "right" ? (e = 0, i = u / 2) : a === "left" ? (e = h, i = u / 2) : r.x < s.x ? (a = "right", e = 0, i = u / 2) : (a = "left", e = h + (l.x + f.x) * 2, i = u / 2), t = t.subtract(d(e, i, !0)).add(l).add(f), E(o, "leaflet-tooltip-right"), E(o, "leaflet-tooltip-left"), E(o, "leaflet-tooltip-top"), E(o, "leaflet-tooltip-bottom"), p(o, "leaflet-tooltip-" + a), O(o, t);
  },
  _updatePosition: function() {
    var t = this._map.latLngToLayerPoint(this._latlng);
    this._setPosition(t);
  },
  setOpacity: function(t) {
    this.options.opacity = t, this._container && q(this._container, t);
  },
  _animateZoom: function(t) {
    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
    this._setPosition(e);
  },
  _getAnchor: function() {
    return d(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
  }
}), Ao = function(t, e) {
  return new Ue(t, e);
};
y.include({
  // @method openTooltip(tooltip: Tooltip): this
  // Opens the specified tooltip.
  // @alternative
  // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
  // Creates a tooltip with the specified content and options and open it.
  openTooltip: function(t, e, i) {
    return this._initOverlay(Ue, t, e, i).openOn(this), this;
  },
  // @method closeTooltip(tooltip: Tooltip): this
  // Closes the tooltip given as parameter.
  closeTooltip: function(t) {
    return t.close(), this;
  }
});
$.include({
  // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
  // Binds a tooltip to the layer with the passed `content` and sets up the
  // necessary event listeners. If a `Function` is passed it will receive
  // the layer as the first argument and should return a `String` or `HTMLElement`.
  bindTooltip: function(t, e) {
    return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ue, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
  },
  // @method unbindTooltip(): this
  // Removes the tooltip previously bound with `bindTooltip`.
  unbindTooltip: function() {
    return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
  },
  _initTooltipInteractions: function(t) {
    if (!(!t && this._tooltipHandlersAdded)) {
      var e = t ? "off" : "on", i = {
        remove: this.closeTooltip,
        move: this._moveTooltip
      };
      this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t;
    }
  },
  // @method openTooltip(latlng?: LatLng): this
  // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
  openTooltip: function(t) {
    return this._tooltip && (this instanceof nt || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
  },
  // @method closeTooltip(): this
  // Closes the tooltip bound to this layer if it is open.
  closeTooltip: function() {
    if (this._tooltip)
      return this._tooltip.close();
  },
  // @method toggleTooltip(): this
  // Opens or closes the tooltip bound to this layer depending on its current state.
  toggleTooltip: function() {
    return this._tooltip && this._tooltip.toggle(this), this;
  },
  // @method isTooltipOpen(): boolean
  // Returns `true` if the tooltip bound to this layer is currently open.
  isTooltipOpen: function() {
    return this._tooltip.isOpen();
  },
  // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
  // Sets the content of the tooltip bound to this layer.
  setTooltipContent: function(t) {
    return this._tooltip && this._tooltip.setContent(t), this;
  },
  // @method getTooltip(): Tooltip
  // Returns the tooltip bound to this layer.
  getTooltip: function() {
    return this._tooltip;
  },
  _addFocusListeners: function() {
    this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
  },
  _addFocusListenersOnLayer: function(t) {
    var e = typeof t.getElement == "function" && t.getElement();
    e && (_(e, "focus", function() {
      this._tooltip._source = t, this.openTooltip();
    }, this), _(e, "blur", this.closeTooltip, this));
  },
  _setAriaDescribedByOnLayer: function(t) {
    var e = typeof t.getElement == "function" && t.getElement();
    e && e.setAttribute("aria-describedby", this._tooltip._container.id);
  },
  _openTooltip: function(t) {
    if (!(!this._tooltip || !this._map)) {
      if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
        this._openOnceFlag = !0;
        var e = this;
        this._map.once("moveend", function() {
          e._openOnceFlag = !1, e._openTooltip(t);
        });
        return;
      }
      this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
    }
  },
  _moveTooltip: function(t) {
    var e = t.latlng, i, n;
    this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(i), e = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(e);
  }
});
var no = Et.extend({
  options: {
    // @section
    // @aka DivIcon options
    iconSize: [12, 12],
    // also can be set through CSS
    // iconAnchor: (Point),
    // popupAnchor: (Point),
    // @option html: String|HTMLElement = ''
    // Custom HTML code to put inside the div element, empty by default. Alternatively,
    // an instance of `HTMLElement`.
    html: !1,
    // @option bgPos: Point = [0, 0]
    // Optional relative position of the background, in pixels
    bgPos: null,
    className: "leaflet-div-icon"
  },
  createIcon: function(t) {
    var e = t && t.tagName === "DIV" ? t : document.createElement("div"), i = this.options;
    if (i.html instanceof Element ? (Ut(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
      var n = d(i.bgPos);
      e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
    }
    return this._setIconStyles(e, "icon"), e;
  },
  createShadow: function() {
    return null;
  }
});
function Bo(t) {
  return new no(t);
}
Et.Default = bt;
var Ht = $.extend({
  // @section
  // @aka GridLayer options
  options: {
    // @option tileSize: Number|Point = 256
    // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
    tileSize: 256,
    // @option opacity: Number = 1.0
    // Opacity of the tiles. Can be used in the `createTile()` function.
    opacity: 1,
    // @option updateWhenIdle: Boolean = (depends)
    // Load new tiles only when panning ends.
    // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
    // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
    // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
    updateWhenIdle: c.mobile,
    // @option updateWhenZooming: Boolean = true
    // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
    updateWhenZooming: !0,
    // @option updateInterval: Number = 200
    // Tiles will not update more than once every `updateInterval` milliseconds when panning.
    updateInterval: 200,
    // @option zIndex: Number = 1
    // The explicit zIndex of the tile layer.
    zIndex: 1,
    // @option bounds: LatLngBounds = undefined
    // If set, tiles will only be loaded inside the set `LatLngBounds`.
    bounds: null,
    // @option minZoom: Number = 0
    // The minimum zoom level down to which this layer will be displayed (inclusive).
    minZoom: 0,
    // @option maxZoom: Number = undefined
    // The maximum zoom level up to which this layer will be displayed (inclusive).
    maxZoom: void 0,
    // @option maxNativeZoom: Number = undefined
    // Maximum zoom number the tile source has available. If it is specified,
    // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
    // from `maxNativeZoom` level and auto-scaled.
    maxNativeZoom: void 0,
    // @option minNativeZoom: Number = undefined
    // Minimum zoom number the tile source has available. If it is specified,
    // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
    // from `minNativeZoom` level and auto-scaled.
    minNativeZoom: void 0,
    // @option noWrap: Boolean = false
    // Whether the layer is wrapped around the antimeridian. If `true`, the
    // GridLayer will only be displayed once at low zoom levels. Has no
    // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
    // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
    // tiles outside the CRS limits.
    noWrap: !1,
    // @option pane: String = 'tilePane'
    // `Map pane` where the grid layer will be added.
    pane: "tilePane",
    // @option className: String = ''
    // A custom class name to assign to the tile layer. Empty by default.
    className: "",
    // @option keepBuffer: Number = 2
    // When panning the map, keep this many rows and columns of tiles before unloading them.
    keepBuffer: 2
  },
  initialize: function(t) {
    S(this, t);
  },
  onAdd: function() {
    this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
  },
  beforeAdd: function(t) {
    t._addZoomLimit(this);
  },
  onRemove: function(t) {
    this._removeAllTiles(), C(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
  },
  // @method bringToFront: this
  // Brings the tile layer to the top of all tile layers.
  bringToFront: function() {
    return this._map && (yt(this._container), this._setAutoZIndex(Math.max)), this;
  },
  // @method bringToBack: this
  // Brings the tile layer to the bottom of all tile layers.
  bringToBack: function() {
    return this._map && (xt(this._container), this._setAutoZIndex(Math.min)), this;
  },
  // @method getContainer: HTMLElement
  // Returns the HTML element that contains the tiles for this layer.
  getContainer: function() {
    return this._container;
  },
  // @method setOpacity(opacity: Number): this
  // Changes the [opacity](#gridlayer-opacity) of the grid layer.
  setOpacity: function(t) {
    return this.options.opacity = t, this._updateOpacity(), this;
  },
  // @method setZIndex(zIndex: Number): this
  // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
  setZIndex: function(t) {
    return this.options.zIndex = t, this._updateZIndex(), this;
  },
  // @method isLoading: Boolean
  // Returns `true` if any tile in the grid layer has not finished loading.
  isLoading: function() {
    return this._loading;
  },
  // @method redraw: this
  // Causes the layer to clear all the tiles and request them again.
  redraw: function() {
    if (this._map) {
      this._removeAllTiles();
      var t = this._clampZoom(this._map.getZoom());
      t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
    }
    return this;
  },
  getEvents: function() {
    var t = {
      viewprereset: this._invalidateAll,
      viewreset: this._resetView,
      zoom: this._resetView,
      moveend: this._onMoveEnd
    };
    return this.options.updateWhenIdle || (this._onMove || (this._onMove = si(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
  },
  // @section Extension methods
  // Layers extending `GridLayer` shall reimplement the following method.
  // @method createTile(coords: Object, done?: Function): HTMLElement
  // Called only internally, must be overridden by classes extending `GridLayer`.
  // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
  // is specified, it must be called when the tile has finished loading and drawing.
  createTile: function() {
    return document.createElement("div");
  },
  // @section
  // @method getTileSize: Point
  // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
  getTileSize: function() {
    var t = this.options.tileSize;
    return t instanceof m ? t : new m(t, t);
  },
  _updateZIndex: function() {
    this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
  },
  _setAutoZIndex: function(t) {
    for (var e = this.getPane().children, i = -t(-1 / 0, 1 / 0), n = 0, o = e.length, s; n < o; n++)
      s = e[n].style.zIndex, e[n] !== this._container && s && (i = t(i, +s));
    isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex());
  },
  _updateOpacity: function() {
    if (this._map && !c.ielt9) {
      q(this._container, this.options.opacity);
      var t = +/* @__PURE__ */ new Date(), e = !1, i = !1;
      for (var n in this._tiles) {
        var o = this._tiles[n];
        if (!(!o.current || !o.loaded)) {
          var s = Math.min(1, (t - o.loaded) / 200);
          q(o.el, s), s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0);
        }
      }
      i && !this._noPrune && this._pruneTiles(), e && (V(this._fadeFrame), this._fadeFrame = D(this._updateOpacity, this));
    }
  },
  _onOpaqueTile: k,
  _initContainer: function() {
    this._container || (this._container = x("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
  },
  _updateLevels: function() {
    var t = this._tileZoom, e = this.options.maxZoom;
    if (t !== void 0) {
      for (var i in this._levels)
        i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (C(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
      var n = this._levels[t], o = this._map;
      return n || (n = this._levels[t] = {}, n.el = x("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), k(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
    }
  },
  _onUpdateLevel: k,
  _onRemoveLevel: k,
  _onCreateLevel: k,
  _pruneTiles: function() {
    if (this._map) {
      var t, e, i = this._map.getZoom();
      if (i > this.options.maxZoom || i < this.options.minZoom) {
        this._removeAllTiles();
        return;
      }
      for (t in this._tiles)
        e = this._tiles[t], e.retain = e.current;
      for (t in this._tiles)
        if (e = this._tiles[t], e.current && !e.active) {
          var n = e.coords;
          this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
        }
      for (t in this._tiles)
        this._tiles[t].retain || this._removeTile(t);
    }
  },
  _removeTilesAtZoom: function(t) {
    for (var e in this._tiles)
      this._tiles[e].coords.z === t && this._removeTile(e);
  },
  _removeAllTiles: function() {
    for (var t in this._tiles)
      this._removeTile(t);
  },
  _invalidateAll: function() {
    for (var t in this._levels)
      C(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
    this._removeAllTiles(), this._tileZoom = void 0;
  },
  _retainParent: function(t, e, i, n) {
    var o = Math.floor(t / 2), s = Math.floor(e / 2), r = i - 1, a = new m(+o, +s);
    a.z = +r;
    var h = this._tileCoordsToKey(a), u = this._tiles[h];
    return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n ? this._retainParent(o, s, r, n) : !1);
  },
  _retainChildren: function(t, e, i, n) {
    for (var o = 2 * t; o < 2 * t + 2; o++)
      for (var s = 2 * e; s < 2 * e + 2; s++) {
        var r = new m(o, s);
        r.z = i + 1;
        var a = this._tileCoordsToKey(r), h = this._tiles[a];
        if (h && h.active) {
          h.retain = !0;
          continue;
        } else h && h.loaded && (h.retain = !0);
        i + 1 < n && this._retainChildren(o, s, i + 1, n);
      }
  },
  _resetView: function(t) {
    var e = t && (t.pinch || t.flyTo);
    this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
  },
  _animateZoom: function(t) {
    this._setView(t.center, t.zoom, !0, t.noUpdate);
  },
  _clampZoom: function(t) {
    var e = this.options;
    return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
  },
  _setView: function(t, e, i, n) {
    var o = Math.round(e);
    this.options.maxZoom !== void 0 && o > this.options.maxZoom || this.options.minZoom !== void 0 && o < this.options.minZoom ? o = void 0 : o = this._clampZoom(o);
    var s = this.options.updateWhenZooming && o !== this._tileZoom;
    (!n || s) && (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), o !== void 0 && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
  },
  _setZoomTransforms: function(t, e) {
    for (var i in this._levels)
      this._setZoomTransform(this._levels[i], t, e);
  },
  _setZoomTransform: function(t, e, i) {
    var n = this._map.getZoomScale(i, t.zoom), o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
    c.any3d ? ft(t.el, o, n) : O(t.el, o);
  },
  _resetGrid: function() {
    var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom, o = this._map.getPixelWorldBounds(this._tileZoom);
    o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [
      Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
      Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)
    ], this._wrapY = e.wrapLat && !this.options.noWrap && [
      Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
      Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)
    ];
  },
  _onMoveEnd: function() {
    !this._map || this._map._animatingZoom || this._update();
  },
  _getTiledPixelBounds: function(t) {
    var e = this._map, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), n = e.getZoomScale(i, this._tileZoom), o = e.project(t, this._tileZoom).floor(), s = e.getSize().divideBy(n * 2);
    return new z(o.subtract(s), o.add(s));
  },
  // Private method to load tiles in the grid's active zoom level according to map bounds
  _update: function(t) {
    var e = this._map;
    if (e) {
      var i = this._clampZoom(e.getZoom());
      if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
        var n = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(n), s = o.getCenter(), r = [], a = this.options.keepBuffer, h = new z(
          o.getBottomLeft().subtract([a, -a]),
          o.getTopRight().add([a, -a])
        );
        if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
          throw new Error("Attempted to load an infinite number of tiles");
        for (var u in this._tiles) {
          var l = this._tiles[u].coords;
          (l.z !== this._tileZoom || !h.contains(new m(l.x, l.y))) && (this._tiles[u].current = !1);
        }
        if (Math.abs(i - this._tileZoom) > 1) {
          this._setView(t, i);
          return;
        }
        for (var f = o.min.y; f <= o.max.y; f++)
          for (var v = o.min.x; v <= o.max.x; v++) {
            var N = new m(v, f);
            if (N.z = this._tileZoom, !!this._isValidTile(N)) {
              var A = this._tiles[this._tileCoordsToKey(N)];
              A ? A.current = !0 : r.push(N);
            }
          }
        if (r.sort(function(R, pt) {
          return R.distanceTo(s) - pt.distanceTo(s);
        }), r.length !== 0) {
          this._loading || (this._loading = !0, this.fire("loading"));
          var U = document.createDocumentFragment();
          for (v = 0; v < r.length; v++)
            this._addTile(r[v], U);
          this._level.el.appendChild(U);
        }
      }
    }
  },
  _isValidTile: function(t) {
    var e = this._map.options.crs;
    if (!e.infinite) {
      var i = this._globalTileRange;
      if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
        return !1;
    }
    if (!this.options.bounds)
      return !0;
    var n = this._tileCoordsToBounds(t);
    return I(this.options.bounds).overlaps(n);
  },
  _keyToBounds: function(t) {
    return this._tileCoordsToBounds(this._keyToTileCoords(t));
  },
  _tileCoordsToNwSe: function(t) {
    var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), o = n.add(i), s = e.unproject(n, t.z), r = e.unproject(o, t.z);
    return [s, r];
  },
  // converts tile coordinates to its geographical bounds
  _tileCoordsToBounds: function(t) {
    var e = this._tileCoordsToNwSe(t), i = new F(e[0], e[1]);
    return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
  },
  // converts tile coordinates to key for the tile cache
  _tileCoordsToKey: function(t) {
    return t.x + ":" + t.y + ":" + t.z;
  },
  // converts tile cache key to coordinates
  _keyToTileCoords: function(t) {
    var e = t.split(":"), i = new m(+e[0], +e[1]);
    return i.z = +e[2], i;
  },
  _removeTile: function(t) {
    var e = this._tiles[t];
    e && (C(e.el), delete this._tiles[t], this.fire("tileunload", {
      tile: e.el,
      coords: this._keyToTileCoords(t)
    }));
  },
  _initTile: function(t) {
    p(t, "leaflet-tile");
    var e = this.getTileSize();
    t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = k, t.onmousemove = k, c.ielt9 && this.options.opacity < 1 && q(t, this.options.opacity);
  },
  _addTile: function(t, e) {
    var i = this._getTilePos(t), n = this._tileCoordsToKey(t), o = this.createTile(this._wrapCoords(t), M(this._tileReady, this, t));
    this._initTile(o), this.createTile.length < 2 && D(M(this._tileReady, this, t, null, o)), O(o, i), this._tiles[n] = {
      el: o,
      coords: t,
      current: !0
    }, e.appendChild(o), this.fire("tileloadstart", {
      tile: o,
      coords: t
    });
  },
  _tileReady: function(t, e, i) {
    e && this.fire("tileerror", {
      error: e,
      tile: i,
      coords: t
    });
    var n = this._tileCoordsToKey(t);
    i = this._tiles[n], i && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (q(i.el, 0), V(this._fadeFrame), this._fadeFrame = D(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (p(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
      tile: i.el,
      coords: t
    })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), c.ielt9 || !this._map._fadeAnimated ? D(this._pruneTiles, this) : setTimeout(M(this._pruneTiles, this), 250)));
  },
  _getTilePos: function(t) {
    return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
  },
  _wrapCoords: function(t) {
    var e = new m(
      this._wrapX ? Ct(t.x, this._wrapX) : t.x,
      this._wrapY ? Ct(t.y, this._wrapY) : t.y
    );
    return e.z = t.z, e;
  },
  _pxBoundsToTileRange: function(t) {
    var e = this.getTileSize();
    return new z(
      t.min.unscaleBy(e).floor(),
      t.max.unscaleBy(e).ceil().subtract([1, 1])
    );
  },
  _noTilesToLoad: function() {
    for (var t in this._tiles)
      if (!this._tiles[t].loaded)
        return !1;
    return !0;
  }
});
function No(t) {
  return new Ht(t);
}
var Mt = Ht.extend({
  // @section
  // @aka TileLayer options
  options: {
    // @option minZoom: Number = 0
    // The minimum zoom level down to which this layer will be displayed (inclusive).
    minZoom: 0,
    // @option maxZoom: Number = 18
    // The maximum zoom level up to which this layer will be displayed (inclusive).
    maxZoom: 18,
    // @option subdomains: String|String[] = 'abc'
    // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
    subdomains: "abc",
    // @option errorTileUrl: String = ''
    // URL to the tile image to show in place of the tile that failed to load.
    errorTileUrl: "",
    // @option zoomOffset: Number = 0
    // The zoom number used in tile URLs will be offset with this value.
    zoomOffset: 0,
    // @option tms: Boolean = false
    // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
    tms: !1,
    // @option zoomReverse: Boolean = false
    // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
    zoomReverse: !1,
    // @option detectRetina: Boolean = false
    // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
    detectRetina: !1,
    // @option crossOrigin: Boolean|String = false
    // Whether the crossOrigin attribute will be added to the tiles.
    // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
    // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
    crossOrigin: !1,
    // @option referrerPolicy: Boolean|String = false
    // Whether the referrerPolicy attribute will be added to the tiles.
    // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
    // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
    // (e.g. to validate an API token).
    // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
    referrerPolicy: !1
  },
  initialize: function(t, e) {
    this._url = t, e = S(this, e), e.detectRetina && c.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
  },
  // @method setUrl(url: String, noRedraw?: Boolean): this
  // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
  // If the URL does not change, the layer will not be redrawn unless
  // the noRedraw parameter is set to false.
  setUrl: function(t, e) {
    return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
  },
  // @method createTile(coords: Object, done?: Function): HTMLElement
  // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
  // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
  // callback is called when the tile has been loaded.
  createTile: function(t, e) {
    var i = document.createElement("img");
    return _(i, "load", M(this._tileOnLoad, this, e, i)), _(i, "error", M(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
  },
  // @section Extension methods
  // @uninheritable
  // Layers extending `TileLayer` might reimplement the following method.
  // @method getTileUrl(coords: Object): String
  // Called only internally, returns the URL for a tile given its coordinates.
  // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
  getTileUrl: function(t) {
    var e = {
      r: c.retina ? "@2x" : "",
      s: this._getSubdomain(t),
      x: t.x,
      y: t.y,
      z: this._getZoomForUrl()
    };
    if (this._map && !this._map.options.crs.infinite) {
      var i = this._globalTileRange.max.y - t.y;
      this.options.tms && (e.y = i), e["-y"] = i;
    }
    return ai(this._url, T(e, this.options));
  },
  _tileOnLoad: function(t, e) {
    c.ielt9 ? setTimeout(M(t, this, null, e), 0) : t(null, e);
  },
  _tileOnError: function(t, e, i) {
    var n = this.options.errorTileUrl;
    n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
  },
  _onTileRemove: function(t) {
    t.tile.onload = null;
  },
  _getZoomForUrl: function() {
    var t = this._tileZoom, e = this.options.maxZoom, i = this.options.zoomReverse, n = this.options.zoomOffset;
    return i && (t = e - t), t + n;
  },
  _getSubdomain: function(t) {
    var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
    return this.options.subdomains[e];
  },
  // stops loading all tiles in the background layer
  _abortLoading: function() {
    var t, e;
    for (t in this._tiles)
      if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = k, e.onerror = k, !e.complete)) {
        e.src = Nt;
        var i = this._tiles[t].coords;
        C(e), delete this._tiles[t], this.fire("tileabort", {
          tile: e,
          coords: i
        });
      }
  },
  _removeTile: function(t) {
    var e = this._tiles[t];
    if (e)
      return e.el.setAttribute("src", Nt), Ht.prototype._removeTile.call(this, t);
  },
  _tileReady: function(t, e, i) {
    if (!(!this._map || i && i.getAttribute("src") === Nt))
      return Ht.prototype._tileReady.call(this, t, e, i);
  }
});
function oo(t, e) {
  return new Mt(t, e);
}
var Gi = Mt.extend({
  // @section
  // @aka TileLayer.WMS options
  // If any custom options not documented here are used, they will be sent to the
  // WMS server as extra parameters in each request URL. This can be useful for
  // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
  defaultWmsParams: {
    service: "WMS",
    request: "GetMap",
    // @option layers: String = ''
    // **(required)** Comma-separated list of WMS layers to show.
    layers: "",
    // @option styles: String = ''
    // Comma-separated list of WMS styles.
    styles: "",
    // @option format: String = 'image/jpeg'
    // WMS image format (use `'image/png'` for layers with transparency).
    format: "image/jpeg",
    // @option transparent: Boolean = false
    // If `true`, the WMS service will return images with transparency.
    transparent: !1,
    // @option version: String = '1.1.1'
    // Version of the WMS service to use
    version: "1.1.1"
  },
  options: {
    // @option crs: CRS = null
    // Coordinate Reference System to use for the WMS requests, defaults to
    // map CRS. Don't change this if you're not sure what it means.
    crs: null,
    // @option uppercase: Boolean = false
    // If `true`, WMS request parameter keys will be uppercase.
    uppercase: !1
  },
  initialize: function(t, e) {
    this._url = t;
    var i = T({}, this.defaultWmsParams);
    for (var n in e)
      n in this.options || (i[n] = e[n]);
    e = S(this, e);
    var o = e.detectRetina && c.retina ? 2 : 1, s = this.getTileSize();
    i.width = s.x * o, i.height = s.y * o, this.wmsParams = i;
  },
  onAdd: function(t) {
    this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
    var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
    this.wmsParams[e] = this._crs.code, Mt.prototype.onAdd.call(this, t);
  },
  getTileUrl: function(t) {
    var e = this._tileCoordsToNwSe(t), i = this._crs, n = H(i.project(e[0]), i.project(e[1])), o = n.min, s = n.max, r = (this._wmsVersion >= 1.3 && this._crs === qi ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","), a = Mt.prototype.getTileUrl.call(this, t);
    return a + ri(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r;
  },
  // @method setParams(params: Object, noRedraw?: Boolean): this
  // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
  setParams: function(t, e) {
    return T(this.wmsParams, t), e || this.redraw(), this;
  }
});
function so(t, e) {
  return new Gi(t, e);
}
Mt.WMS = Gi;
oo.wms = so;
var et = $.extend({
  // @section
  // @aka Renderer options
  options: {
    // @option padding: Number = 0.1
    // How much to extend the clip area around the map view (relative to its size)
    // e.g. 0.1 would be 10% of map view in each direction
    padding: 0.1
  },
  initialize: function(t) {
    S(this, t), w(this), this._layers = this._layers || {};
  },
  onAdd: function() {
    this._container || (this._initContainer(), p(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
  },
  onRemove: function() {
    this.off("update", this._updatePaths, this), this._destroyContainer();
  },
  getEvents: function() {
    var t = {
      viewreset: this._reset,
      zoom: this._onZoom,
      moveend: this._update,
      zoomend: this._onZoomEnd
    };
    return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
  },
  _onAnimZoom: function(t) {
    this._updateTransform(t.center, t.zoom);
  },
  _onZoom: function() {
    this._updateTransform(this._map.getCenter(), this._map.getZoom());
  },
  _updateTransform: function(t, e) {
    var i = this._map.getZoomScale(e, this._zoom), n = this._map.getSize().multiplyBy(0.5 + this.options.padding), o = this._map.project(this._center, e), s = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
    c.any3d ? ft(this._container, s, i) : O(this._container, s);
  },
  _reset: function() {
    this._update(), this._updateTransform(this._center, this._zoom);
    for (var t in this._layers)
      this._layers[t]._reset();
  },
  _onZoomEnd: function() {
    for (var t in this._layers)
      this._layers[t]._project();
  },
  _updatePaths: function() {
    for (var t in this._layers)
      this._layers[t]._update();
  },
  _update: function() {
    var t = this.options.padding, e = this._map.getSize(), i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
    this._bounds = new z(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
  }
}), ro = et.extend({
  // @section
  // @aka Canvas options
  options: {
    // @option tolerance: Number = 0
    // How much to extend the click tolerance around a path/object on the map.
    tolerance: 0
  },
  getEvents: function() {
    var t = et.prototype.getEvents.call(this);
    return t.viewprereset = this._onViewPreReset, t;
  },
  _onViewPreReset: function() {
    this._postponeUpdatePaths = !0;
  },
  onAdd: function() {
    et.prototype.onAdd.call(this), this._draw();
  },
  _initContainer: function() {
    var t = this._container = document.createElement("canvas");
    _(t, "mousemove", this._onMouseMove, this), _(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), _(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
  },
  _destroyContainer: function() {
    V(this._redrawRequest), delete this._ctx, C(this._container), b(this._container), delete this._container;
  },
  _updatePaths: function() {
    if (!this._postponeUpdatePaths) {
      var t;
      this._redrawBounds = null;
      for (var e in this._layers)
        t = this._layers[e], t._update();
      this._redraw();
    }
  },
  _update: function() {
    if (!(this._map._animatingZoom && this._bounds)) {
      et.prototype._update.call(this);
      var t = this._bounds, e = this._container, i = t.getSize(), n = c.retina ? 2 : 1;
      O(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", c.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
    }
  },
  _reset: function() {
    et.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
  },
  _initPath: function(t) {
    this._updateDashArray(t), this._layers[w(t)] = t;
    var e = t._order = {
      layer: t,
      prev: this._drawLast,
      next: null
    };
    this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
  },
  _addPath: function(t) {
    this._requestRedraw(t);
  },
  _removePath: function(t) {
    var e = t._order, i = e.next, n = e.prev;
    i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[w(t)], this._requestRedraw(t);
  },
  _updatePath: function(t) {
    this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
  },
  _updateStyle: function(t) {
    this._updateDashArray(t), this._requestRedraw(t);
  },
  _updateDashArray: function(t) {
    if (typeof t.options.dashArray == "string") {
      var e = t.options.dashArray.split(/[, ]+/), i = [], n, o;
      for (o = 0; o < e.length; o++) {
        if (n = Number(e[o]), isNaN(n))
          return;
        i.push(n);
      }
      t.options._dashArray = i;
    } else
      t.options._dashArray = t.options.dashArray;
  },
  _requestRedraw: function(t) {
    this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || D(this._redraw, this));
  },
  _extendRedrawBounds: function(t) {
    if (t._pxBounds) {
      var e = (t.options.weight || 0) + 1;
      this._redrawBounds = this._redrawBounds || new z(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
    }
  },
  _redraw: function() {
    this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
  },
  _clear: function() {
    var t = this._redrawBounds;
    if (t) {
      var e = t.getSize();
      this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
    } else
      this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
  },
  _draw: function() {
    var t, e = this._redrawBounds;
    if (this._ctx.save(), e) {
      var i = e.getSize();
      this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
    }
    this._drawing = !0;
    for (var n = this._drawFirst; n; n = n.next)
      t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
    this._drawing = !1, this._ctx.restore();
  },
  _updatePoly: function(t, e) {
    if (this._drawing) {
      var i, n, o, s, r = t._parts, a = r.length, h = this._ctx;
      if (a) {
        for (h.beginPath(), i = 0; i < a; i++) {
          for (n = 0, o = r[i].length; n < o; n++)
            s = r[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
          e && h.closePath();
        }
        this._fillStroke(h, t);
      }
    }
  },
  _updateCircle: function(t) {
    if (!(!this._drawing || t._empty())) {
      var e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
      o !== 1 && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, Math.PI * 2, !1), o !== 1 && i.restore(), this._fillStroke(i, t);
    }
  },
  _fillStroke: function(t, e) {
    var i = e.options;
    i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && i.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
  },
  // Canvas obviously doesn't have mouse events for individual drawn objects,
  // so we emulate that by calculating what's under the mouse on mousemove/click manually
  _onClick: function(t) {
    for (var e = this._map.mouseEventToLayerPoint(t), i, n, o = this._drawFirst; o; o = o.next)
      i = o.layer, i.options.interactive && i._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(i)) && (n = i);
    this._fireEvent(n ? [n] : !1, t);
  },
  _onMouseMove: function(t) {
    if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
      var e = this._map.mouseEventToLayerPoint(t);
      this._handleMouseHover(t, e);
    }
  },
  _handleMouseOut: function(t) {
    var e = this._hoveredLayer;
    e && (E(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
  },
  _handleMouseHover: function(t, e) {
    if (!this._mouseHoverThrottled) {
      for (var i, n, o = this._drawFirst; o; o = o.next)
        i = o.layer, i.options.interactive && i._containsPoint(e) && (n = i);
      n !== this._hoveredLayer && (this._handleMouseOut(t), n && (p(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(M(function() {
        this._mouseHoverThrottled = !1;
      }, this), 32);
    }
  },
  _fireEvent: function(t, e, i) {
    this._map._fireDOMEvent(e, i || e.type, t);
  },
  _bringToFront: function(t) {
    var e = t._order;
    if (e) {
      var i = e.next, n = e.prev;
      if (i)
        i.prev = n;
      else
        return;
      n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
    }
  },
  _bringToBack: function(t) {
    var e = t._order;
    if (e) {
      var i = e.next, n = e.prev;
      if (n)
        n.next = i;
      else
        return;
      i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
    }
  }
});
function ao(t) {
  return c.canvas ? new ro(t) : null;
}
var Pt = (function() {
  try {
    return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
      return document.createElement("<lvml:" + t + ' class="lvml">');
    };
  } catch {
  }
  return function(t) {
    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
  };
})(), ho = {
  _initContainer: function() {
    this._container = x("div", "leaflet-vml-container");
  },
  _update: function() {
    this._map._animatingZoom || (et.prototype._update.call(this), this.fire("update"));
  },
  _initPath: function(t) {
    var e = t._container = Pt("shape");
    p(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = Pt("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[w(t)] = t;
  },
  _addPath: function(t) {
    var e = t._container;
    this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
  },
  _removePath: function(t) {
    var e = t._container;
    C(e), t.removeInteractiveTarget(e), delete this._layers[w(t)];
  },
  _updateStyle: function(t) {
    var e = t._stroke, i = t._fill, n = t.options, o = t._container;
    o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = Pt("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = j(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = Pt("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null);
  },
  _updateCircle: function(t) {
    var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
    this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
  },
  _setPath: function(t, e) {
    t._path.v = e;
  },
  _bringToFront: function(t) {
    yt(t._container);
  },
  _bringToBack: function(t) {
    xt(t._container);
  }
}, Ft = c.vml ? Pt : ci, ie = et.extend({
  _initContainer: function() {
    this._container = Ft("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Ft("g"), this._container.appendChild(this._rootGroup);
  },
  _destroyContainer: function() {
    C(this._container), b(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
  },
  _update: function() {
    if (!(this._map._animatingZoom && this._bounds)) {
      et.prototype._update.call(this);
      var t = this._bounds, e = t.getSize(), i = this._container;
      (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), O(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
    }
  },
  // methods below are called by vector layers implementations
  _initPath: function(t) {
    var e = t._path = Ft("path");
    t.options.className && p(e, t.options.className), t.options.interactive && p(e, "leaflet-interactive"), this._updateStyle(t), this._layers[w(t)] = t;
  },
  _addPath: function(t) {
    this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
  },
  _removePath: function(t) {
    C(t._path), t.removeInteractiveTarget(t._path), delete this._layers[w(t)];
  },
  _updatePath: function(t) {
    t._project(), t._update();
  },
  _updateStyle: function(t) {
    var e = t._path, i = t.options;
    e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
  },
  _updatePoly: function(t, e) {
    this._setPath(t, fi(t._parts, e));
  },
  _updateCircle: function(t) {
    var e = t._point, i = Math.max(Math.round(t._radius), 1), n = Math.max(Math.round(t._radiusY), 1) || i, o = "a" + i + "," + n + " 0 1,0 ", s = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + i * 2 + ",0 " + o + -i * 2 + ",0 ";
    this._setPath(t, s);
  },
  _setPath: function(t, e) {
    t._path.setAttribute("d", e);
  },
  // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
  _bringToFront: function(t) {
    yt(t._path);
  },
  _bringToBack: function(t) {
    xt(t._path);
  }
});
c.vml && ie.include(ho);
function uo(t) {
  return c.svg || c.vml ? new ie(t) : null;
}
y.include({
  // @namespace Map; @method getRenderer(layer: Path): Renderer
  // Returns the instance of `Renderer` that should be used to render the given
  // `Path`. It will ensure that the `renderer` options of the map and paths
  // are respected, and that the renderers do exist on the map.
  getRenderer: function(t) {
    var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
    return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
  },
  _getPaneRenderer: function(t) {
    if (t === "overlayPane" || t === void 0)
      return !1;
    var e = this._paneRenderers[t];
    return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
  },
  _createRenderer: function(t) {
    return this.options.preferCanvas && ao(t) || uo(t);
  }
});
var lo = Zt.extend({
  initialize: function(t, e) {
    Zt.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
  },
  // @method setBounds(latLngBounds: LatLngBounds): this
  // Redraws the rectangle with the passed bounds.
  setBounds: function(t) {
    return this.setLatLngs(this._boundsToLatLngs(t));
  },
  _boundsToLatLngs: function(t) {
    return t = I(t), [
      t.getSouthWest(),
      t.getNorthWest(),
      t.getNorthEast(),
      t.getSouthEast()
    ];
  }
});
function Ro(t, e) {
  return new lo(t, e);
}
ie.create = Ft;
ie.pointsToPath = fi;
at.geometryToLayer = Gt;
at.coordsToLatLng = Re;
at.coordsToLatLngs = jt;
at.latLngToCoords = De;
at.latLngsToCoords = te;
at.getFeature = gt;
at.asFeature = ee;
y.mergeOptions({
  // @option boxZoom: Boolean = true
  // Whether the map can be zoomed to a rectangular area specified by
  // dragging the mouse while pressing the shift key.
  boxZoom: !0
});
var ji = tt.extend({
  initialize: function(t) {
    this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
  },
  addHooks: function() {
    _(this._container, "mousedown", this._onMouseDown, this);
  },
  removeHooks: function() {
    b(this._container, "mousedown", this._onMouseDown, this);
  },
  moved: function() {
    return this._moved;
  },
  _destroy: function() {
    C(this._pane), delete this._pane;
  },
  _resetState: function() {
    this._resetStateTimeout = 0, this._moved = !1;
  },
  _clearDeferredResetState: function() {
    this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
  },
  _onMouseDown: function(t) {
    if (!t.shiftKey || t.which !== 1 && t.button !== 1)
      return !1;
    this._clearDeferredResetState(), this._resetState(), zt(), Me(), this._startPoint = this._map.mouseEventToContainerPoint(t), _(document, {
      contextmenu: _t,
      mousemove: this._onMouseMove,
      mouseup: this._onMouseUp,
      keydown: this._onKeyDown
    }, this);
  },
  _onMouseMove: function(t) {
    this._moved || (this._moved = !0, this._box = x("div", "leaflet-zoom-box", this._container), p(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
    var e = new z(this._point, this._startPoint), i = e.getSize();
    O(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
  },
  _finish: function() {
    this._moved && (C(this._box), E(this._container, "leaflet-crosshair")), kt(), Ce(), b(document, {
      contextmenu: _t,
      mousemove: this._onMouseMove,
      mouseup: this._onMouseUp,
      keydown: this._onKeyDown
    }, this);
  },
  _onMouseUp: function(t) {
    if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
      this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(M(this._resetState, this), 0);
      var e = new F(
        this._map.containerPointToLatLng(this._startPoint),
        this._map.containerPointToLatLng(this._point)
      );
      this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
    }
  },
  _onKeyDown: function(t) {
    t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
  }
});
y.addInitHook("addHandler", "boxZoom", ji);
y.mergeOptions({
  // @option doubleClickZoom: Boolean|String = true
  // Whether the map can be zoomed in by double clicking on it and
  // zoomed out by double clicking while holding shift. If passed
  // `'center'`, double-click zoom will zoom to the center of the
  //  view regardless of where the mouse was.
  doubleClickZoom: !0
});
var Ki = tt.extend({
  addHooks: function() {
    this._map.on("dblclick", this._onDoubleClick, this);
  },
  removeHooks: function() {
    this._map.off("dblclick", this._onDoubleClick, this);
  },
  _onDoubleClick: function(t) {
    var e = this._map, i = e.getZoom(), n = e.options.zoomDelta, o = t.originalEvent.shiftKey ? i - n : i + n;
    e.options.doubleClickZoom === "center" ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
  }
});
y.addInitHook("addHandler", "doubleClickZoom", Ki);
y.mergeOptions({
  // @option dragging: Boolean = true
  // Whether the map is draggable with mouse/touch or not.
  dragging: !0,
  // @section Panning Inertia Options
  // @option inertia: Boolean = *
  // If enabled, panning of the map will have an inertia effect where
  // the map builds momentum while dragging and continues moving in
  // the same direction for some time. Feels especially nice on touch
  // devices. Enabled by default.
  inertia: !0,
  // @option inertiaDeceleration: Number = 3000
  // The rate with which the inertial movement slows down, in pixels/second².
  inertiaDeceleration: 3400,
  // px/s^2
  // @option inertiaMaxSpeed: Number = Infinity
  // Max speed of the inertial movement, in pixels/second.
  inertiaMaxSpeed: 1 / 0,
  // px/s
  // @option easeLinearity: Number = 0.2
  easeLinearity: 0.2,
  // TODO refactor, move to CRS
  // @option worldCopyJump: Boolean = false
  // With this option enabled, the map tracks when you pan to another "copy"
  // of the world and seamlessly jumps to the original one so that all overlays
  // like markers and vector layers are still visible.
  worldCopyJump: !1,
  // @option maxBoundsViscosity: Number = 0.0
  // If `maxBounds` is set, this option will control how solid the bounds
  // are when dragging the map around. The default value of `0.0` allows the
  // user to drag outside the bounds at normal speed, higher values will
  // slow down map dragging outside bounds, and `1.0` makes the bounds fully
  // solid, preventing the user from dragging outside the bounds.
  maxBoundsViscosity: 0
});
var Yi = tt.extend({
  addHooks: function() {
    if (!this._draggable) {
      var t = this._map;
      this._draggable = new ht(t._mapPane, t._container), this._draggable.on({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
    }
    p(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
  },
  removeHooks: function() {
    E(this._map._container, "leaflet-grab"), E(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
  },
  moved: function() {
    return this._draggable && this._draggable._moved;
  },
  moving: function() {
    return this._draggable && this._draggable._moving;
  },
  _onDragStart: function() {
    var t = this._map;
    if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
      var e = I(this._map.options.maxBounds);
      this._offsetLimit = H(
        this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
        this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
      ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
    } else
      this._offsetLimit = null;
    t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
  },
  _onDrag: function(t) {
    if (this._map.options.inertia) {
      var e = this._lastTime = +/* @__PURE__ */ new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
      this._positions.push(i), this._times.push(e), this._prunePositions(e);
    }
    this._map.fire("move", t).fire("drag", t);
  },
  _prunePositions: function(t) {
    for (; this._positions.length > 1 && t - this._times[0] > 50; )
      this._positions.shift(), this._times.shift();
  },
  _onZoomEnd: function() {
    var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
    this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
  },
  _viscousLimit: function(t, e) {
    return t - (t - e) * this._viscosity;
  },
  _onPreDragLimit: function() {
    if (!(!this._viscosity || !this._offsetLimit)) {
      var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
      t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
    }
  },
  _onPreDragWrap: function() {
    var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, o = (n - e + i) % t + e - i, s = (n + e + i) % t - e - i, r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
    this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r;
  },
  _onDragEnd: function(t) {
    var e = this._map, i = e.options, n = !i.inertia || t.noInertia || this._times.length < 2;
    if (e.fire("dragend", t), n)
      e.fire("moveend");
    else {
      this._prunePositions(+/* @__PURE__ */ new Date());
      var o = this._lastPos.subtract(this._positions[0]), s = (this._lastTime - this._times[0]) / 1e3, r = i.easeLinearity, a = o.multiplyBy(r / s), h = a.distanceTo([0, 0]), u = Math.min(i.inertiaMaxSpeed, h), l = a.multiplyBy(u / h), f = u / (i.inertiaDeceleration * r), v = l.multiplyBy(-f / 2).round();
      !v.x && !v.y ? e.fire("moveend") : (v = e._limitOffset(v, e.options.maxBounds), D(function() {
        e.panBy(v, {
          duration: f,
          easeLinearity: r,
          noMoveStart: !0,
          animate: !0
        });
      }));
    }
  }
});
y.addInitHook("addHandler", "dragging", Yi);
y.mergeOptions({
  // @option keyboard: Boolean = true
  // Makes the map focusable and allows users to navigate the map with keyboard
  // arrows and `+`/`-` keys.
  keyboard: !0,
  // @option keyboardPanDelta: Number = 80
  // Amount of pixels to pan when pressing an arrow key.
  keyboardPanDelta: 80
});
var Xi = tt.extend({
  keyCodes: {
    left: [37],
    right: [39],
    down: [40],
    up: [38],
    zoomIn: [187, 107, 61, 171],
    zoomOut: [189, 109, 54, 173]
  },
  initialize: function(t) {
    this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
  },
  addHooks: function() {
    var t = this._map._container;
    t.tabIndex <= 0 && (t.tabIndex = "0"), _(t, {
      focus: this._onFocus,
      blur: this._onBlur,
      mousedown: this._onMouseDown
    }, this), this._map.on({
      focus: this._addHooks,
      blur: this._removeHooks
    }, this);
  },
  removeHooks: function() {
    this._removeHooks(), b(this._map._container, {
      focus: this._onFocus,
      blur: this._onBlur,
      mousedown: this._onMouseDown
    }, this), this._map.off({
      focus: this._addHooks,
      blur: this._removeHooks
    }, this);
  },
  _onMouseDown: function() {
    if (!this._focused) {
      var t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, n = t.scrollLeft || e.scrollLeft;
      this._map._container.focus(), window.scrollTo(n, i);
    }
  },
  _onFocus: function() {
    this._focused = !0, this._map.fire("focus");
  },
  _onBlur: function() {
    this._focused = !1, this._map.fire("blur");
  },
  _setPanDelta: function(t) {
    var e = this._panKeys = {}, i = this.keyCodes, n, o;
    for (n = 0, o = i.left.length; n < o; n++)
      e[i.left[n]] = [-1 * t, 0];
    for (n = 0, o = i.right.length; n < o; n++)
      e[i.right[n]] = [t, 0];
    for (n = 0, o = i.down.length; n < o; n++)
      e[i.down[n]] = [0, t];
    for (n = 0, o = i.up.length; n < o; n++)
      e[i.up[n]] = [0, -1 * t];
  },
  _setZoomDelta: function(t) {
    var e = this._zoomKeys = {}, i = this.keyCodes, n, o;
    for (n = 0, o = i.zoomIn.length; n < o; n++)
      e[i.zoomIn[n]] = t;
    for (n = 0, o = i.zoomOut.length; n < o; n++)
      e[i.zoomOut[n]] = -t;
  },
  _addHooks: function() {
    _(document, "keydown", this._onKeyDown, this);
  },
  _removeHooks: function() {
    b(document, "keydown", this._onKeyDown, this);
  },
  _onKeyDown: function(t) {
    if (!(t.altKey || t.ctrlKey || t.metaKey)) {
      var e = t.keyCode, i = this._map, n;
      if (e in this._panKeys) {
        if (!i._panAnim || !i._panAnim._inProgress)
          if (n = this._panKeys[e], t.shiftKey && (n = d(n).multiplyBy(3)), i.options.maxBounds && (n = i._limitOffset(d(n), i.options.maxBounds)), i.options.worldCopyJump) {
            var o = i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));
            i.panTo(o);
          } else
            i.panBy(n);
      } else if (e in this._zoomKeys)
        i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
      else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey)
        i.closePopup();
      else
        return;
      _t(t);
    }
  }
});
y.addInitHook("addHandler", "keyboard", Xi);
y.mergeOptions({
  // @section Mouse wheel options
  // @option scrollWheelZoom: Boolean|String = true
  // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
  // it will zoom to the center of the view regardless of where the mouse was.
  scrollWheelZoom: !0,
  // @option wheelDebounceTime: Number = 40
  // Limits the rate at which a wheel can fire (in milliseconds). By default
  // user can't zoom via wheel more often than once per 40 ms.
  wheelDebounceTime: 40,
  // @option wheelPxPerZoomLevel: Number = 60
  // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
  // mean a change of one full zoom level. Smaller values will make wheel-zooming
  // faster (and vice versa).
  wheelPxPerZoomLevel: 60
});
var Ji = tt.extend({
  addHooks: function() {
    _(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
  },
  removeHooks: function() {
    b(this._map._container, "wheel", this._onWheelScroll, this);
  },
  _onWheelScroll: function(t) {
    var e = Ii(t), i = this._map.options.wheelDebounceTime;
    this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
    var n = Math.max(i - (+/* @__PURE__ */ new Date() - this._startTime), 0);
    clearTimeout(this._timer), this._timer = setTimeout(M(this._performZoom, this), n), _t(t);
  },
  _performZoom: function() {
    var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
    t._stop();
    var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, s = i ? Math.ceil(o / i) * i : o, r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
    this._delta = 0, this._startTime = null, r && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r));
  }
});
y.addInitHook("addHandler", "scrollWheelZoom", Ji);
var co = 600;
y.mergeOptions({
  // @section Touch interaction options
  // @option tapHold: Boolean
  // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
  tapHold: c.touchNative && c.safari && c.mobile,
  // @option tapTolerance: Number = 15
  // The max number of pixels a user can shift his finger during touch
  // for it to be considered a valid tap.
  tapTolerance: 15
});
var $i = tt.extend({
  addHooks: function() {
    _(this._map._container, "touchstart", this._onDown, this);
  },
  removeHooks: function() {
    b(this._map._container, "touchstart", this._onDown, this);
  },
  _onDown: function(t) {
    if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
      var e = t.touches[0];
      this._startPos = this._newPos = new m(e.clientX, e.clientY), this._holdTimeout = setTimeout(M(function() {
        this._cancel(), this._isTapValid() && (_(document, "touchend", B), _(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
      }, this), co), _(document, "touchend touchcancel contextmenu", this._cancel, this), _(document, "touchmove", this._onMove, this);
    }
  },
  _cancelClickPrevent: function t() {
    b(document, "touchend", B), b(document, "touchend touchcancel", t);
  },
  _cancel: function() {
    clearTimeout(this._holdTimeout), b(document, "touchend touchcancel contextmenu", this._cancel, this), b(document, "touchmove", this._onMove, this);
  },
  _onMove: function(t) {
    var e = t.touches[0];
    this._newPos = new m(e.clientX, e.clientY);
  },
  _isTapValid: function() {
    return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
  },
  _simulateEvent: function(t, e) {
    var i = new MouseEvent(t, {
      bubbles: !0,
      cancelable: !0,
      view: window,
      // detail: 1,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY
      // button: 2,
      // buttons: 2
    });
    i._simulated = !0, e.target.dispatchEvent(i);
  }
});
y.addInitHook("addHandler", "tapHold", $i);
y.mergeOptions({
  // @section Touch interaction options
  // @option touchZoom: Boolean|String = *
  // Whether the map can be zoomed by touch-dragging with two fingers. If
  // passed `'center'`, it will zoom to the center of the view regardless of
  // where the touch events (fingers) were. Enabled for touch-capable web
  // browsers.
  touchZoom: c.touch,
  // @option bounceAtZoomLimits: Boolean = true
  // Set it to false if you don't want the map to zoom beyond min/max zoom
  // and then bounce back when pinch-zooming.
  bounceAtZoomLimits: !0
});
var Qi = tt.extend({
  addHooks: function() {
    p(this._map._container, "leaflet-touch-zoom"), _(this._map._container, "touchstart", this._onTouchStart, this);
  },
  removeHooks: function() {
    E(this._map._container, "leaflet-touch-zoom"), b(this._map._container, "touchstart", this._onTouchStart, this);
  },
  _onTouchStart: function(t) {
    var e = this._map;
    if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
      var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
      this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), _(document, "touchmove", this._onTouchMove, this), _(document, "touchend touchcancel", this._onTouchEnd, this), B(t);
    }
  },
  _onTouchMove: function(t) {
    if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
      var e = this._map, i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]), o = i.distanceTo(n) / this._startDist;
      if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && o > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
        if (this._center = this._startLatLng, o === 1)
          return;
      } else {
        var s = i._add(n)._divideBy(2)._subtract(this._centerPoint);
        if (o === 1 && s.x === 0 && s.y === 0)
          return;
        this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom);
      }
      this._moved || (e._moveStart(!0, !1), this._moved = !0), V(this._animRequest);
      var r = M(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
      this._animRequest = D(r, this, !0), B(t);
    }
  },
  _onTouchEnd: function() {
    if (!this._moved || !this._zooming) {
      this._zooming = !1;
      return;
    }
    this._zooming = !1, V(this._animRequest), b(document, "touchmove", this._onTouchMove, this), b(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
  }
});
y.addInitHook("addHandler", "touchZoom", Qi);
y.BoxZoom = ji;
y.DoubleClickZoom = Ki;
y.Drag = Yi;
y.Keyboard = Xi;
y.ScrollWheelZoom = Ji;
y.TapHold = $i;
y.TouchZoom = Qi;
export {
  z as Bounds,
  c as Browser,
  rt as CRS,
  ro as Canvas,
  Vi as Circle,
  Ne as CircleMarker,
  st as Class,
  J as Control,
  no as DivIcon,
  Q as DivOverlay,
  po as DomEvent,
  mo as DomUtil,
  ht as Draggable,
  Kt as Evented,
  nt as FeatureGroup,
  at as GeoJSON,
  Ht as GridLayer,
  tt as Handler,
  Et as Icon,
  Fe as ImageOverlay,
  P as LatLng,
  F as LatLngBounds,
  $ as Layer,
  Tt as LayerGroup,
  xo as LineUtil,
  y as Map,
  Be as Marker,
  go as Mixin,
  mt as Path,
  m as Point,
  yo as PolyUtil,
  Zt as Polygon,
  it as Polyline,
  We as Popup,
  Wn as PosAnimation,
  wo as Projection,
  lo as Rectangle,
  et as Renderer,
  ie as SVG,
  io as SVGOverlay,
  Mt as TileLayer,
  Ue as Tooltip,
  li as Transformation,
  _o as Util,
  eo as VideoOverlay,
  M as bind,
  H as bounds,
  ao as canvas,
  Co as circle,
  Mo as circleMarker,
  Qt as control,
  Bo as divIcon,
  T as extend,
  Lo as featureGroup,
  to as geoJSON,
  ko as geoJson,
  No as gridLayer,
  To as icon,
  Eo as imageOverlay,
  g as latLng,
  I as latLngBounds,
  Po as layerGroup,
  vo as map,
  bo as marker,
  d as point,
  zo as polygon,
  So as polyline,
  Io as popup,
  Ro as rectangle,
  S as setOptions,
  w as stamp,
  uo as svg,
  Oo as svgOverlay,
  oo as tileLayer,
  Ao as tooltip,
  Yt as transformation,
  fo as version,
  Zo as videoOverlay
};
