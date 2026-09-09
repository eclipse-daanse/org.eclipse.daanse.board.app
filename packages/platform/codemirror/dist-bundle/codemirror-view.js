import { StateEffect as ot, Facet as C, RangeValue as xi, RangeSet as E, EditorState as It, Transaction as _n, Annotation as Yn, EditorSelection as S, Prec as vi, RangeSetBuilder as jn, ChangeSet as As, findClusterBreak as mt, Text as j, StateField as Si, MapMode as Dt, combineConfig as Ci, codePointAt as Ts, countColumn as Ds, codePointSize as Xn, findColumn as Ue, CharCategory as Gn } from "@codemirror/state";
import { S as Bt } from "./style-mod-C6yElynz.js";
import { c as kt } from "./index-CNXpFeEX.js";
var ct = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Xt = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, $n = typeof navigator < "u" && /Mac/.test(navigator.platform), Un = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var V = 0; V < 10; V++) ct[48 + V] = ct[96 + V] = String(V);
for (var V = 1; V <= 24; V++) ct[V + 111] = "F" + V;
for (var V = 65; V <= 90; V++)
  ct[V] = String.fromCharCode(V + 32), Xt[V] = String.fromCharCode(V);
for (var Ve in ct) Xt.hasOwnProperty(Ve) || (Xt[Ve] = ct[Ve]);
function Qn(n) {
  var t = $n && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Un && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", e = !t && n.key || (n.shiftKey ? Xt : ct)[n.keyCode] || n.key || "Unidentified";
  return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
let I = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Qe = typeof document < "u" ? document : { documentElement: { style: {} } };
const Je = /* @__PURE__ */ /Edge\/(\d+)/.exec(I.userAgent), Os = /* @__PURE__ */ /MSIE \d/.test(I.userAgent), Ze = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(I.userAgent), Oe = !!(Os || Ze || Je), Fi = !Oe && /* @__PURE__ */ /gecko\/(\d+)/i.test(I.userAgent), Fe = !Oe && /* @__PURE__ */ /Chrome\/(\d+)/.exec(I.userAgent), Ii = "webkitFontSmoothing" in Qe.documentElement.style, ti = !Oe && /* @__PURE__ */ /Apple Computer/.test(I.vendor), zi = ti && (/* @__PURE__ */ /Mobile\/\w+/.test(I.userAgent) || I.maxTouchPoints > 2);
var w = {
  mac: zi || /* @__PURE__ */ /Mac/.test(I.platform),
  windows: /* @__PURE__ */ /Win/.test(I.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(I.platform),
  ie: Oe,
  ie_version: Os ? Qe.documentMode || 6 : Ze ? +Ze[1] : Je ? +Je[1] : 0,
  gecko: Fi,
  gecko_version: Fi ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(I.userAgent) || [0, 0])[1] : 0,
  chrome: !!Fe,
  chrome_version: Fe ? +Fe[1] : 0,
  ios: zi,
  android: /* @__PURE__ */ /Android\b/.test(I.userAgent),
  webkit: Ii,
  webkit_version: Ii ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(I.userAgent) || [0, 0])[1] : 0,
  safari: ti,
  safari_version: ti ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(I.userAgent) || [0, 0])[1] : 0,
  tabSize: Qe.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function ki(n, t) {
  for (let e in n)
    e == "class" && t.class ? t.class += " " + n.class : e == "style" && t.style ? t.style += ";" + n.style : t[e] = n[e];
  return t;
}
const ve = /* @__PURE__ */ Object.create(null);
function Mi(n, t, e) {
  if (n == t)
    return !0;
  n || (n = ve), t || (t = ve);
  let i = Object.keys(n), s = Object.keys(t);
  if (i.length - 0 != s.length - 0)
    return !1;
  for (let o of i)
    if (o != e && (s.indexOf(o) == -1 || n[o] !== t[o]))
      return !1;
  return !0;
}
function Jn(n, t) {
  for (let e = n.attributes.length - 1; e >= 0; e--) {
    let i = n.attributes[e].name;
    t[i] == null && n.removeAttribute(i);
  }
  for (let e in t) {
    let i = t[e];
    e == "style" ? n.style.cssText = i : n.getAttribute(e) != i && n.setAttribute(e, i);
  }
}
function Ki(n, t, e) {
  let i = !1;
  if (t)
    for (let s in t)
      e && s in e || (i = !0, s == "style" ? n.style.cssText = "" : n.removeAttribute(s));
  if (e)
    for (let s in e)
      t && t[s] == e[s] || (i = !0, s == "style" ? n.style.cssText = e[s] : n.setAttribute(s, e[s]));
  return i;
}
function Zn(n) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e = 0; e < n.attributes.length; e++) {
    let i = n.attributes[e];
    t[i.name] = i.value;
  }
  return t;
}
class dt {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(t) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(t, e, i) {
    return !1;
  }
  /**
  @internal
  */
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(t) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(t, e, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(t) {
  }
}
var P = /* @__PURE__ */ (function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
})(P || (P = {}));
class L extends xi {
  constructor(t, e, i, s) {
    super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = s;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(t) {
    return new Zt(t);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(t) {
    let e = Math.max(-1e4, Math.min(1e4, t.side || 0)), i = !!t.block;
    return e += i && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new wt(t, e, e, i, t.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(t) {
    let e = !!t.block, i, s;
    if (t.isBlockGap)
      i = -5e8, s = 4e8;
    else {
      let { start: o, end: r } = Ls(t, e);
      i = (o ? e ? -3e8 : -1 : 5e8) - 1, s = (r ? e ? 2e8 : 1 : -6e8) + 1;
    }
    return new wt(t, i, s, e, t.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(t) {
    return new te(t);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(t, e = !1) {
    return E.of(t, e);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
L.none = E.empty;
class Zt extends L {
  constructor(t) {
    let { start: e, end: i } = Ls(t);
    super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.attrs = t.class && t.attributes ? ki(t.attributes, { class: t.class }) : t.class ? { class: t.class } : t.attributes || ve;
  }
  eq(t) {
    return this == t || t instanceof Zt && this.tagName == t.tagName && Mi(this.attrs, t.attrs);
  }
  range(t, e = t) {
    if (t >= e)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(t, e);
  }
}
Zt.prototype.point = !1;
class te extends L {
  constructor(t) {
    super(-2e8, -2e8, null, t);
  }
  eq(t) {
    return t instanceof te && this.spec.class == t.spec.class && Mi(this.spec.attributes, t.spec.attributes);
  }
  range(t, e = t) {
    if (e != t)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(t, e);
  }
}
te.prototype.mapMode = Dt.TrackBefore;
te.prototype.point = !0;
class wt extends L {
  constructor(t, e, i, s, o, r) {
    super(e, i, o, t), this.block = s, this.isReplace = r, this.mapMode = s ? e <= 0 ? Dt.TrackBefore : Dt.TrackAfter : Dt.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? P.WidgetRange : this.startSide <= 0 ? P.WidgetBefore : P.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t) {
    return t instanceof wt && to(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
  }
  range(t, e = t) {
    if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e != t)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t, e);
  }
}
wt.prototype.point = !0;
function Ls(n, t = !1) {
  let { inclusiveStart: e, inclusiveEnd: i } = n;
  return e == null && (e = n.inclusive), i == null && (i = n.inclusive), { start: e ?? t, end: i ?? t };
}
function to(n, t) {
  return n == t || !!(n && t && n.compare(t));
}
function Ot(n, t, e, i = 0) {
  let s = e.length - 1;
  s >= 0 && e[s] + i >= n ? e[s] = Math.max(e[s], t) : e.push(n, t);
}
class Et extends xi {
  constructor(t, e, i) {
    super(), this.tagName = t, this.attributes = e, this.rank = i;
  }
  eq(t) {
    return t == this || t instanceof Et && this.tagName == t.tagName && Mi(this.attributes, t.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(t) {
    return new Et(t.tagName, t.attributes || ve, t.rank == null ? 50 : Math.max(0, Math.min(t.rank, 100)));
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(t, e = !1) {
    return E.of(t, e);
  }
}
Et.prototype.startSide = Et.prototype.endSide = -1;
function Gt(n) {
  let t;
  return n.nodeType == 11 ? t = n.getSelection ? n : n.ownerDocument : t = n, t.getSelection();
}
function ei(n, t) {
  return t ? n == t || n.contains(t.nodeType != 1 ? t.parentNode : t) : !1;
}
function zt(n, t) {
  if (!t.anchorNode)
    return !1;
  try {
    return ei(n, t.anchorNode);
  } catch {
    return !1;
  }
}
function Kt(n) {
  return n.nodeType == 3 ? Ut(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function qt(n, t, e, i) {
  return e ? qi(n, t, e, i, -1) || qi(n, t, e, i, 1) : !1;
}
function ft(n) {
  for (var t = 0; ; t++)
    if (n = n.previousSibling, !n)
      return t;
}
function Se(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function qi(n, t, e, i, s) {
  for (; ; ) {
    if (n == e && t == i)
      return !0;
    if (t == (s < 0 ? 0 : st(n))) {
      if (n.nodeName == "DIV")
        return !1;
      let o = n.parentNode;
      if (!o || o.nodeType != 1)
        return !1;
      t = ft(n) + (s < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[t + (s < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false")
        return !1;
      t = s < 0 ? st(n) : 0;
    } else
      return !1;
  }
}
function st(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function $t(n, t) {
  let { left: e, right: i } = n;
  if (e == i)
    return n;
  let s = t ? e : i;
  return { left: s, right: s, top: n.top, bottom: n.bottom };
}
function eo(n) {
  let t = n.visualViewport;
  return t ? {
    left: 0,
    right: t.width,
    top: 0,
    bottom: t.height
  } : {
    left: 0,
    right: n.innerWidth,
    top: 0,
    bottom: n.innerHeight
  };
}
function Rs(n, t) {
  let e = t.width / n.offsetWidth, i = t.height / n.offsetHeight;
  return (e > 0.995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - n.offsetWidth) < 1) && (e = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(t.height - n.offsetHeight) < 1) && (i = 1), { scaleX: e, scaleY: i };
}
function io(n, t, e, i, s, o, r, l) {
  let a = n.ownerDocument, h = a.defaultView || window;
  for (let c = n, f = !1; c && !f; )
    if (c.nodeType == 1) {
      let d, u = c == a.body, p = 1, g = 1;
      if (u)
        d = eo(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let y = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = Rs(c, y)), d = {
          left: y.left,
          right: y.left + c.clientWidth * p,
          top: y.top,
          bottom: y.top + c.clientHeight * g
        };
      }
      let m = 0, b = 0;
      if (s == "nearest")
        t.top < d.top + r ? (b = t.top - (d.top + r), e > 0 && t.bottom > d.bottom + b && (b = t.bottom - d.bottom + r)) : t.bottom > d.bottom - r && (b = t.bottom - d.bottom + r, e < 0 && t.top - b < d.top && (b = t.top - (d.top + r)));
      else {
        let y = t.bottom - t.top, x = d.bottom - d.top;
        b = (s == "center" && y <= x ? t.top + y / 2 - x / 2 : s == "start" || s == "center" && e < 0 ? t.top - r : t.bottom - x + r) - d.top;
      }
      if (i == "nearest" ? t.left < d.left + o ? (m = t.left - (d.left + o), e > 0 && t.right > d.right + m && (m = t.right - d.right + o)) : t.right > d.right - o && (m = t.right - d.right + o, e < 0 && t.left < d.left + m && (m = t.left - (d.left + o))) : m = (i == "center" ? t.left + (t.right - t.left) / 2 - (d.right - d.left) / 2 : i == "start" == l ? t.left - o : t.right - (d.right - d.left) + o) - d.left, m || b)
        if (u)
          h.scrollBy(m, b);
        else {
          let y = 0, x = 0;
          if (b) {
            let A = c.scrollTop;
            c.scrollTop += b / g, x = (c.scrollTop - A) * g;
          }
          if (m) {
            let A = c.scrollLeft;
            c.scrollLeft += m / p, y = (c.scrollLeft - A) * p;
          }
          t = {
            left: t.left - y,
            top: t.top - x,
            right: t.right - y,
            bottom: t.bottom - x
          }, y && Math.abs(y - m) < 1 && (i = "nearest"), x && Math.abs(x - b) < 1 && (s = "nearest");
        }
      if (u)
        break;
      (t.top < d.top || t.bottom > d.bottom || t.left < d.left || t.right > d.right) && (t = {
        left: Math.max(t.left, d.left),
        right: Math.min(t.right, d.right),
        top: Math.max(t.top, d.top),
        bottom: Math.min(t.bottom, d.bottom)
      }), c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function Bs(n, t = !0) {
  let e = n.ownerDocument, i = null, s = null;
  for (let o = n.parentNode; o && !(o == e.body || (!t || i) && s); )
    if (o.nodeType == 1)
      !s && o.scrollHeight > o.clientHeight && (s = o), t && !i && o.scrollWidth > o.clientWidth && (i = o), o = o.assignedSlot || o.parentNode;
    else if (o.nodeType == 11)
      o = o.host;
    else
      break;
  return { x: i, y: s };
}
class so {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t) {
    return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
  }
  setRange(t) {
    let { anchorNode: e, focusNode: i } = t;
    this.set(e, Math.min(t.anchorOffset, e ? st(e) : 0), i, Math.min(t.focusOffset, i ? st(i) : 0));
  }
  set(t, e, i, s) {
    this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = s;
  }
}
function Es(n) {
  let t = [];
  for (let e = n; e; e = e.nodeType == 11 ? e.host : e.parentNode)
    e.nodeType == 1 && t.push({ node: e, left: e.scrollLeft, top: e.scrollTop });
  return t;
}
function Hs(n, t = !0) {
  for (let { node: e, left: i, top: s } of n)
    t && e.scrollTop != s && (e.scrollTop = s), e.scrollLeft != i && (e.scrollLeft = i);
}
let gt = null;
w.safari && w.safari_version >= 26 && (gt = !1);
function Ps(n) {
  if (n.setActive)
    return n.setActive();
  if (gt)
    return n.focus(gt);
  let t = Es(n);
  n.focus(gt == null ? {
    get preventScroll() {
      return gt = { preventScroll: !0 }, !0;
    }
  } : void 0), gt || (gt = !1, Hs(t));
}
let _i;
function Ut(n, t, e = t) {
  let i = _i || (_i = document.createRange());
  return i.setEnd(n, e), i.setStart(n, t), i;
}
function Lt(n, t, e, i) {
  let s = { key: t, code: t, keyCode: e, which: e, cancelable: !0 };
  i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
  let o = new KeyboardEvent("keydown", s);
  o.synthetic = !0, n.dispatchEvent(o);
  let r = new KeyboardEvent("keyup", s);
  return r.synthetic = !0, n.dispatchEvent(r), o.defaultPrevented || r.defaultPrevented;
}
function no(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host))
      return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function oo(n, t) {
  let e = t.focusNode, i = t.focusOffset;
  if (!e || t.anchorNode != e || t.anchorOffset != i)
    return !1;
  for (i = Math.min(i, st(e)); ; )
    if (i) {
      if (e.nodeType != 1)
        return !1;
      let s = e.childNodes[i - 1];
      s.contentEditable == "false" ? i-- : (e = s, i = st(e));
    } else {
      if (e == n)
        return !0;
      i = ft(e), e = e.parentNode;
    }
}
function Ws(n) {
  return n instanceof Window ? n.pageYOffset > Math.max(0, n.document.documentElement.scrollHeight - n.innerHeight - 4) : n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function Ns(n, t) {
  for (let e = n, i = t; ; ) {
    if (e.nodeType == 3 && i > 0)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i > 0) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i - 1], i = st(e);
    } else if (e.parentNode && !Se(e))
      i = ft(e), e = e.parentNode;
    else
      return null;
  }
}
function Vs(n, t) {
  for (let e = n, i = t; ; ) {
    if (e.nodeType == 3 && i < e.nodeValue.length)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i < e.childNodes.length) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i], i = 0;
    } else if (e.parentNode && !Se(e))
      i = ft(e) + 1, e = e.parentNode;
    else
      return null;
  }
}
class X {
  constructor(t, e, i = !0) {
    this.node = t, this.offset = e, this.precise = i;
  }
  static before(t, e) {
    return new X(t.parentNode, ft(t), e);
  }
  static after(t, e) {
    return new X(t.parentNode, ft(t) + 1, e);
  }
}
var R = /* @__PURE__ */ (function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
})(R || (R = {}));
const yt = R.LTR, Ai = R.RTL;
function Fs(n) {
  let t = [];
  for (let e = 0; e < n.length; e++)
    t.push(1 << +n[e]);
  return t;
}
const ro = /* @__PURE__ */ Fs("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), lo = /* @__PURE__ */ Fs("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), ii = /* @__PURE__ */ Object.create(null), Q = [];
for (let n of ["()", "[]", "{}"]) {
  let t = /* @__PURE__ */ n.charCodeAt(0), e = /* @__PURE__ */ n.charCodeAt(1);
  ii[t] = e, ii[e] = -t;
}
function Is(n) {
  return n <= 247 ? ro[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? lo[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1;
}
const ao = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class G {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Ai : yt;
  }
  /**
  @internal
  */
  constructor(t, e, i) {
    this.from = t, this.to = e, this.level = i;
  }
  /**
  @internal
  */
  side(t, e) {
    return this.dir == e == t ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(t, e) {
    return t == (this.dir == e);
  }
  /**
  @internal
  */
  static find(t, e, i, s) {
    let o = -1;
    for (let r = 0; r < t.length; r++) {
      let l = t[r];
      if (l.from <= e && l.to >= e) {
        if (l.level == i)
          return r;
        (o < 0 || (s != 0 ? s < 0 ? l.from < e : l.to > e : t[o].level > l.level)) && (o = r);
      }
    }
    if (o < 0)
      throw new RangeError("Index out of range");
    return o;
  }
}
function zs(n, t) {
  if (n.length != t.length)
    return !1;
  for (let e = 0; e < n.length; e++) {
    let i = n[e], s = t[e];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !zs(i.inner, s.inner))
      return !1;
  }
  return !0;
}
const O = [];
function ho(n, t, e, i, s) {
  for (let o = 0; o <= i.length; o++) {
    let r = o ? i[o - 1].to : t, l = o < i.length ? i[o].from : e, a = o ? 256 : s;
    for (let h = r, c = a, f = a; h < l; h++) {
      let d = Is(n.charCodeAt(h));
      d == 512 ? d = c : d == 8 && f == 4 && (d = 16), O[h] = d == 4 ? 2 : d, d & 7 && (f = d), c = d;
    }
    for (let h = r, c = a, f = a; h < l; h++) {
      let d = O[h];
      if (d == 128)
        h < l - 1 && c == O[h + 1] && c & 24 ? d = O[h] = c : O[h] = 256;
      else if (d == 64) {
        let u = h + 1;
        for (; u < l && O[u] == 64; )
          u++;
        let p = h && c == 8 || u < e && O[u] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let g = h; g < u; g++)
          O[g] = p;
        h = u - 1;
      } else d == 8 && f == 1 && (O[h] = 1);
      c = d, d & 7 && (f = d);
    }
  }
}
function co(n, t, e, i, s) {
  let o = s == 1 ? 2 : 1;
  for (let r = 0, l = 0, a = 0; r <= i.length; r++) {
    let h = r ? i[r - 1].to : t, c = r < i.length ? i[r].from : e;
    for (let f = h, d, u, p; f < c; f++)
      if (u = ii[d = n.charCodeAt(f)])
        if (u < 0) {
          for (let g = l - 3; g >= 0; g -= 3)
            if (Q[g + 1] == -u) {
              let m = Q[g + 2], b = m & 2 ? s : m & 4 ? m & 1 ? o : s : 0;
              b && (O[f] = O[Q[g]] = b), l = g;
              break;
            }
        } else {
          if (Q.length == 189)
            break;
          Q[l++] = f, Q[l++] = d, Q[l++] = a;
        }
      else if ((p = O[f]) == 2 || p == 1) {
        let g = p == s;
        a = g ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let b = Q[m + 2];
          if (b & 2)
            break;
          if (g)
            Q[m + 2] |= 2;
          else {
            if (b & 4)
              break;
            Q[m + 2] |= 4;
          }
        }
      }
  }
}
function fo(n, t, e, i) {
  for (let s = 0, o = i; s <= e.length; s++) {
    let r = s ? e[s - 1].to : n, l = s < e.length ? e[s].from : t;
    for (let a = r; a < l; ) {
      let h = O[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (s == e.length)
              break;
            c = e[s++].to, l = s < e.length ? e[s].from : t;
          } else if (O[c] == 256)
            c++;
          else
            break;
        let f = o == 1, d = (c < t ? O[c] : i) == 1, u = f == d ? f ? 1 : 2 : i;
        for (let p = c, g = s, m = g ? e[g - 1].to : n; p > a; )
          p == m && (p = e[--g].from, m = g ? e[g - 1].to : n), O[--p] = u;
        a = c;
      } else
        o = h, a++;
    }
  }
}
function si(n, t, e, i, s, o, r) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
    for (let a = t, h = 0; a < e; ) {
      let c = !0, f = !1;
      if (h == o.length || a < o[h].from) {
        let g = O[a];
        g != l && (c = !1, f = g == 16);
      }
      let d = !c && l == 1 ? [] : null, u = c ? i : i + 1, p = a;
      t: for (; ; )
        if (h < o.length && p == o[h].from) {
          if (f)
            break t;
          let g = o[h];
          if (!c)
            for (let m = g.to, b = h + 1; ; ) {
              if (m == e)
                break t;
              if (b < o.length && o[b].from == m)
                m = o[b++].to;
              else {
                if (O[m] == l)
                  break t;
                break;
              }
            }
          if (h++, d)
            d.push(g);
          else {
            g.from > a && r.push(new G(a, g.from, u));
            let m = g.direction == yt != !(u % 2);
            ni(n, m ? i + 1 : i, s, g.inner, g.from, g.to, r), a = g.to;
          }
          p = g.to;
        } else {
          if (p == e || (c ? O[p] != l : O[p] == l))
            break;
          p++;
        }
      d ? si(n, a, p, i + 1, s, d, r) : a < p && r.push(new G(a, p, u)), a = p;
    }
  else
    for (let a = e, h = o.length; a > t; ) {
      let c = !0, f = !1;
      if (!h || a > o[h - 1].to) {
        let g = O[a - 1];
        g != l && (c = !1, f = g == 16);
      }
      let d = !c && l == 1 ? [] : null, u = c ? i : i + 1, p = a;
      t: for (; ; )
        if (h && p == o[h - 1].to) {
          if (f)
            break t;
          let g = o[--h];
          if (!c)
            for (let m = g.from, b = h; ; ) {
              if (m == t)
                break t;
              if (b && o[b - 1].to == m)
                m = o[--b].from;
              else {
                if (O[m - 1] == l)
                  break t;
                break;
              }
            }
          if (d)
            d.push(g);
          else {
            g.to < a && r.push(new G(g.to, a, u));
            let m = g.direction == yt != !(u % 2);
            ni(n, m ? i + 1 : i, s, g.inner, g.from, g.to, r), a = g.from;
          }
          p = g.from;
        } else {
          if (p == t || (c ? O[p - 1] != l : O[p - 1] == l))
            break;
          p--;
        }
      d ? si(n, p, a, i + 1, s, d, r) : p < a && r.push(new G(p, a, u)), a = p;
    }
}
function ni(n, t, e, i, s, o, r) {
  let l = t % 2 ? 2 : 1;
  ho(n, s, o, i, l), co(n, s, o, i, l), fo(s, o, i, l), si(n, s, o, t, e, i, r);
}
function Ks(n, t, e) {
  if (!n)
    return [new G(0, 0, t == Ai ? 1 : 0)];
  if (t == yt && !e.length && !ao.test(n))
    return qs(n.length);
  if (e.length)
    for (; n.length > O.length; )
      O[O.length] = 256;
  let i = [], s = t == yt ? 0 : 1;
  return ni(n, s, s, e, 0, n.length, i), i;
}
function qs(n) {
  return [new G(0, n, 0)];
}
let _s = "";
function Ys(n, t, e, i, s) {
  var o;
  let r = i.head - n.from, l = G.find(t, r, (o = i.bidiLevel) !== null && o !== void 0 ? o : -1, i.assoc), a = t[l], h = a.side(s, e);
  if (r == h) {
    let d = l += s ? 1 : -1;
    if (d < 0 || d >= t.length)
      return null;
    a = t[l = d], r = a.side(!s, e), h = a.side(s, e);
  }
  let c = mt(n.text, r, a.forward(s, e));
  (c < a.from || c > a.to) && (c = h), _s = n.text.slice(Math.min(r, c), Math.max(r, c));
  let f = l == (s ? t.length - 1 : 0) ? null : t[l + (s ? 1 : -1)];
  return f && c == h && f.level + (s ? 0 : 1) < a.level ? S.cursor(f.side(!s, e) + n.from, f.forward(s, e) ? 1 : -1, f.level) : S.cursor(c + n.from, a.forward(s, e) ? -1 : 1, a.level);
}
function uo(n, t, e) {
  for (let i = t; i < e; i++) {
    let s = Is(n.charCodeAt(i));
    if (s == 1)
      return yt;
    if (s == 2 || s == 4)
      return Ai;
  }
  return yt;
}
const js = /* @__PURE__ */ C.define(), Xs = /* @__PURE__ */ C.define(), Gs = /* @__PURE__ */ C.define(), $s = /* @__PURE__ */ C.define(), oi = /* @__PURE__ */ C.define(), Us = /* @__PURE__ */ C.define(), Qs = /* @__PURE__ */ C.define(), Ti = /* @__PURE__ */ C.define(), Di = /* @__PURE__ */ C.define(), Js = /* @__PURE__ */ C.define({
  combine: (n) => n.some((t) => t)
}), Zs = /* @__PURE__ */ C.define({
  combine: (n) => n.some((t) => t)
}), tn = /* @__PURE__ */ C.define();
class Rt {
  constructor(t, e, i, s, o, r = !1) {
    this.range = t, this.y = e, this.x = i, this.yMargin = s, this.xMargin = o, this.isSnapshot = r;
  }
  map(t) {
    return t.empty ? this : new Rt(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t) {
    return this.range.to <= t.doc.length ? this : new Rt(S.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const oe = /* @__PURE__ */ ot.define({ map: (n, t) => n.map(t) }), en = /* @__PURE__ */ ot.define();
function $(n, t, e) {
  let i = n.facet($s);
  i.length ? i[0](t) : window.onerror && window.onerror(String(t), e, void 0, void 0, t) || (e ? console.error(e + ":", t) : console.error(t));
}
const et = /* @__PURE__ */ C.define({ combine: (n) => n.length ? n[0] : !0 });
let po = 0;
const At = /* @__PURE__ */ C.define({
  combine(n) {
    return n.filter((t, e) => {
      for (let i = 0; i < e; i++)
        if (n[i].plugin == t.plugin)
          return !1;
      return !0;
    });
  }
});
class W {
  constructor(t, e, i, s, o) {
    this.id = t, this.create = e, this.domEventHandlers = i, this.domEventObservers = s, this.baseExtensions = o(this), this.extension = this.baseExtensions.concat(At.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(t) {
    return this.baseExtensions.concat(At.of({ plugin: this, arg: t }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(t, e) {
    const { eventHandlers: i, eventObservers: s, provide: o, decorations: r } = e || {};
    return new W(po++, t, i, s, (l) => {
      let a = [];
      return r && a.push(Re.of((h) => {
        let c = h.plugin(l);
        return c ? r(c) : L.none;
      })), o && a.push(o(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(t, e) {
    return W.define((i, s) => new t(i, s), e);
  }
}
class Ie {
  constructor(t) {
    this.spec = t, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(t) {
    if (this.value) {
      if (this.mustUpdate) {
        let e = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(e);
          } catch (i) {
            if ($(e.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(t, this.spec.arg);
      } catch (e) {
        $(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(t) {
    var e;
    if (!((e = this.value) === null || e === void 0) && e.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        $(t.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const sn = /* @__PURE__ */ C.define(), Le = /* @__PURE__ */ C.define(), Re = /* @__PURE__ */ C.define(), nn = /* @__PURE__ */ C.define(), Oi = /* @__PURE__ */ C.define(), ee = /* @__PURE__ */ C.define(), on = /* @__PURE__ */ C.define();
function Yi(n, t) {
  let e = n.state.facet(on);
  if (!e.length)
    return e;
  let i = e.map((o) => o instanceof Function ? o(n) : o), s = [];
  return E.spans(i, t.from, t.to, {
    point() {
    },
    span(o, r, l, a) {
      let h = o - t.from, c = r - t.from, f = s;
      for (let d = l.length - 1; d >= 0; d--, a--) {
        let u = l[d].spec.bidiIsolate, p;
        if (u == null && (u = uo(t.text, h, c)), a > 0 && f.length && (p = f[f.length - 1]).to == h && p.direction == u)
          p.to = c, f = p.inner;
        else {
          let g = { from: h, to: c, direction: u, inner: [] };
          f.push(g), f = g.inner;
        }
      }
    }
  }), s;
}
const rn = /* @__PURE__ */ C.define();
function Li(n) {
  let t = 0, e = 0, i = 0, s = 0;
  for (let o of n.state.facet(rn)) {
    let r = o(n);
    r && (r.left != null && (t = Math.max(t, r.left)), r.right != null && (e = Math.max(e, r.right)), r.top != null && (i = Math.max(i, r.top)), r.bottom != null && (s = Math.max(s, r.bottom)));
  }
  return { left: t, right: e, top: i, bottom: s };
}
const Nt = /* @__PURE__ */ C.define();
class _ {
  constructor(t, e, i, s) {
    this.fromA = t, this.toA = e, this.fromB = i, this.toB = s;
  }
  join(t) {
    return new _(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
  }
  addToSet(t) {
    let e = t.length, i = this;
    for (; e > 0; e--) {
      let s = t[e - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA)
          break;
        i = i.join(s), t.splice(e - 1, 1);
      }
    }
    return t.splice(e, 0, i), t;
  }
  // Extend a set to cover all the content in `ranges`, which is a
  // flat array with each pair of numbers representing fromB/toB
  // positions. These pairs are generated in unchanged ranges, so the
  // offset between doc A and doc B is the same for their start and
  // end points.
  static extendWithRanges(t, e) {
    if (e.length == 0)
      return t;
    let i = [];
    for (let s = 0, o = 0, r = 0; ; ) {
      let l = s < t.length ? t[s].fromB : 1e9, a = o < e.length ? e[o] : 1e9, h = Math.min(l, a);
      if (h == 1e9)
        break;
      let c = h + r, f = h, d = c;
      for (; ; )
        if (o < e.length && e[o] <= f) {
          let u = e[o + 1];
          o += 2, f = Math.max(f, u);
          for (let p = s; p < t.length && t[p].fromB <= f; p++)
            r = t[p].toA - t[p].toB;
          d = Math.max(d, u + r);
        } else if (s < t.length && t[s].fromB <= f) {
          let u = t[s++];
          f = Math.max(f, u.toB), d = Math.max(d, u.toA), r = u.toA - u.toB;
        } else
          break;
      i.push(new _(c, d, h, f));
    }
    return i;
  }
}
class Qt {
  constructor(t, e, i) {
    this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = As.empty(this.startState.doc.length);
    for (let o of i)
      this.changes = this.changes.compose(o.changes);
    let s = [];
    this.changes.iterChangedRanges((o, r, l, a) => s.push(new _(o, r, l, a))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Qt(t, e, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((t) => t.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const go = [];
class B {
  constructor(t, e, i = 0) {
    this.dom = t, this.length = e, this.flags = i, this.parent = null, t.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return go;
  }
  isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  isComposite() {
    return !1;
  }
  isLine() {
    return !1;
  }
  isText() {
    return !1;
  }
  isBlock() {
    return !1;
  }
  get domAttrs() {
    return null;
  }
  sync(t) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let e = this.domAttrs;
      e && Jn(this.dom, e);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(t) {
    this.dom = t, t.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(t, e = this.posAtStart) {
    let i = e;
    for (let s of this.children) {
      if (s == t)
        return i;
      i += s.length + s.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(t) {
    return this.posBefore(t) + t.length;
  }
  covers(t) {
    return !0;
  }
  coordsIn(t, e, i) {
    return null;
  }
  domPosFor(t, e) {
    let i = ft(this.dom), s = this.length ? t > 0 : e > 0;
    return new X(this.parent.dom, i + (s ? 1 : 0), t == 0 || t == this.length);
  }
  markDirty(t) {
    this.flags &= -3, t && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let t = this; t; t = t.parent)
      if (t instanceof Ee)
        return t;
    return null;
  }
  static get(t) {
    return t.cmTile;
  }
}
class Be extends B {
  constructor(t) {
    super(t, 0), this._children = [];
  }
  isComposite() {
    return !0;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(t) {
    this.children.push(t), t.parent = this;
  }
  sync(t) {
    if (this.flags & 2)
      return;
    super.sync(t);
    let e = this.dom, i = null, s, o = t?.node == e ? t : null, r = 0;
    for (let l of this.children) {
      if (l.sync(t), r += l.length + l.breakAfter, s = i ? i.nextSibling : e.firstChild, o && s != l.dom && (o.written = !0), l.dom.parentNode == e)
        for (; s && s != l.dom; )
          s = ji(s);
      else
        e.insertBefore(l.dom, s);
      i = l.dom;
    }
    for (s = i ? i.nextSibling : e.firstChild, o && s && (o.written = !0); s; )
      s = ji(s);
    this.length = r;
  }
}
function ji(n) {
  let t = n.nextSibling;
  return n.parentNode.removeChild(n), t;
}
class Ee extends Be {
  constructor(t, e) {
    super(e), this.view = t;
  }
  owns(t) {
    for (; t; t = t.parent)
      if (t == this)
        return !0;
    return !1;
  }
  isBlock() {
    return !0;
  }
  nearest(t) {
    for (; ; ) {
      if (!t)
        return null;
      let e = B.get(t);
      if (e && this.owns(e))
        return e;
      t = t.parentNode;
    }
  }
  blockTiles(t) {
    for (let e = [], i = this, s = 0, o = 0; ; )
      if (s == i.children.length) {
        if (!e.length)
          return;
        i = i.parent, i.breakAfter && o++, s = e.pop();
      } else {
        let r = i.children[s++];
        if (r instanceof it)
          e.push(s), i = r, s = 0;
        else {
          let l = o + r.length, a = t(r, o);
          if (a !== void 0)
            return a;
          o = l + r.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(t, e) {
    let i, s = -1, o, r = -1;
    if (this.blockTiles((l, a) => {
      let h = a + l.length;
      if (t >= a && t <= h) {
        if (l.isWidget() && e >= -1 && e <= 1) {
          if (l.flags & 32)
            return !0;
          l.flags & 16 && (i = void 0);
        }
        (a < t || t == h && (e < -1 ? l.length : l.covers(1))) && (!i || !l.isWidget() && i.isWidget()) && (i = l, s = t - a), (h > t || t == a && (e > 1 ? l.length : l.covers(-1))) && (!o || !l.isWidget() && o.isWidget()) && (o = l, r = t - a);
      }
    }), !i && !o)
      throw new Error("No tile at position " + t);
    return i && e < 0 || !o ? { tile: i, offset: s } : { tile: o, offset: r };
  }
}
class it extends Be {
  constructor(t, e) {
    super(t), this.wrapper = e;
  }
  isBlock() {
    return !0;
  }
  covers(t) {
    return this.children.length ? t < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(t, e) {
    let i = new it(e || document.createElement(t.tagName), t);
    return e || (i.flags |= 4), i;
  }
}
class Ht extends Be {
  constructor(t, e) {
    super(t), this.attrs = e;
  }
  isLine() {
    return !0;
  }
  static start(t, e, i) {
    let s = new Ht(e || document.createElement("div"), t);
    return (!e || !i) && (s.flags |= 4), s;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  // Side -2/2 is handled specially, in that it allows the position
  // returned to be before (-2) or after (2) widgets that would always
  // be after/before a cursor position.
  resolveInline(t, e, i) {
    let s = null, o = -1, r = null, l = -1;
    function a(c, f) {
      for (let d = 0, u = 0; d < c.children.length && u <= f; d++) {
        let p = c.children[d], g = u + p.length;
        g >= f && (p.isComposite() ? a(p, f - u) : (!r || r.isHidden && (e > 0 && !(r.flags & 32) || i && bo(r, p))) && (g > f || p.flags & 32 && e <= 1) ? (r = p, l = f - u) : (u < f || p.flags & 16 && !p.isHidden && e >= -1) && (s = p, o = f - u)), u = g;
      }
    }
    a(this, t);
    let h = (e < 0 ? s : r) || s || r;
    return h ? { tile: h, offset: h == s ? o : l } : null;
  }
  coordsIn(t, e, i) {
    let s = this.resolveInline(t, e, !0);
    return s ? s.tile.coordsIn(Math.max(0, s.offset), e, i) : mo(this);
  }
  domIn(t, e) {
    let i = this.resolveInline(t, e);
    if (i) {
      let { tile: s, offset: o } = i;
      if (this.dom.contains(s.dom))
        return s.isText() ? new X(s.dom, Math.min(s.dom.nodeValue.length, o)) : s.domPosFor(o, s.flags & 16 ? 1 : s.flags & 32 ? -1 : e);
      let r = i.tile.parent, l = !1;
      for (let a of r.children) {
        if (l)
          return new X(a.dom, 0);
        a == i.tile && (l = !0);
      }
    }
    return new X(this.dom, 0);
  }
}
function mo(n) {
  let t = n.dom.lastChild;
  if (!t)
    return n.dom.getBoundingClientRect();
  let e = Kt(t);
  return e[e.length - 1] || null;
}
function bo(n, t) {
  let e = n.coordsIn(0, 1), i = t.coordsIn(0, 1);
  return e && i && i.top < e.bottom;
}
class K extends Be {
  constructor(t, e) {
    super(t), this.mark = e;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(t, e) {
    let i = new K(e || document.createElement(t.tagName), t);
    return e || (i.flags |= 4), i;
  }
}
class bt extends B {
  constructor(t, e) {
    super(t, e.length), this.text = e;
  }
  sync(t) {
    this.flags & 2 || (super.sync(t), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text));
  }
  isText() {
    return !0;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(t, e, i) {
    let s = this.dom.nodeValue.length;
    t > s && (t = s);
    let o = t, r = t, l = 0;
    t == 0 && e < 0 || t == s && e >= 0 ? w.chrome || w.gecko || (t ? (o--, l = 1) : r < s && (r++, l = -1)) : e < 0 ? o-- : r < s && r++;
    let a = Ut(this.dom, o, r).getClientRects();
    if (!a.length)
      return null;
    let h = a[(l ? l < 0 : e >= 0) ? 0 : a.length - 1];
    return w.safari && !l && h.width == 0 && (h = Array.prototype.find.call(a, (c) => c.width) || h), i == null ? h : $t(h, (l ? l > 0 : e < 0) == i);
  }
  static of(t, e) {
    let i = new bt(e || document.createTextNode(t), t);
    return e || (i.flags |= 2), i;
  }
}
class xt extends B {
  constructor(t, e, i, s) {
    super(t, e, s), this.widget = i;
  }
  isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(t) {
    return this.flags & 48 ? !1 : (this.flags & (t < 0 ? 64 : 128)) > 0;
  }
  coordsIn(t, e) {
    return this.coordsInWidget(t, e, !1);
  }
  coordsInWidget(t, e, i) {
    let s = this.widget.coordsAt(this.dom, t, e);
    if (s)
      return s;
    if (i)
      return $t(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0);
    {
      let o = this.dom.getClientRects(), r = null;
      if (!o.length)
        return null;
      let l = this.flags & 16 ? !0 : this.flags & 32 ? !1 : t > 0;
      for (let a = l ? o.length - 1 : 0; r = o[a], !(t > 0 ? a == 0 : a == o.length - 1 || r.top < r.bottom); a += l ? -1 : 1)
        ;
      return $t(r, !l);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return j.empty;
    let { root: t } = this;
    if (!t)
      return j.empty;
    let e = this.posAtStart;
    return t.view.state.doc.slice(e, e + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(t, e, i, s, o) {
    return o || (o = t.toDOM(e), t.editable || (o.contentEditable = "false")), new xt(o, i, t, s);
  }
}
class Ce extends B {
  constructor(t) {
    let e = document.createElement("img");
    e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), super(e, 0, t);
  }
  get isHidden() {
    return !0;
  }
  get overrideDOMText() {
    return j.empty;
  }
  coordsIn(t, e, i) {
    let s = this.dom.getBoundingClientRect();
    return i == null ? s : $t(s, e > 0 == i);
  }
}
class wo {
  constructor(t) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = t;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(t, e, i) {
    let { tile: s, index: o, beforeBreak: r, parents: l } = this;
    for (; t || e > 0; )
      if (s.isComposite())
        if (r) {
          if (!t)
            break;
          i && i.break(), t--, r = !1;
        } else if (o == s.children.length) {
          if (!t && !l.length)
            break;
          i && i.leave(s), r = !!s.breakAfter, { tile: s, index: o } = l.pop(), o++;
        } else {
          let a = s.children[o], h = a.breakAfter;
          (e > 0 ? a.length <= t : a.length < t) && (!i || i.skip(a, 0, a.length) !== !1 || !a.isComposite) ? (r = !!h, o++, t -= a.length) : (l.push({ tile: s, index: o }), s = a, o = 0, i && a.isComposite() && i.enter(a));
        }
      else {
        let a = s.length;
        if (o < a && t) {
          let h = Math.min(t, a - o);
          i && i.skip(s, o, o + h), t -= h, o += h;
        }
        if (o == a)
          r = !!s.breakAfter, { tile: s, index: o } = l.pop(), o++;
        else if (!t)
          break;
      }
    return this.tile = s, this.index = o, this.beforeBreak = r, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class yo {
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.wrapper = i, this.rank = s;
  }
}
class xo {
  constructor(t, e, i) {
    this.cache = t, this.root = e, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(t, e, i, s) {
    var o;
    this.flushBuffer();
    let r = this.ensureMarks(e, i), l = r.lastChild;
    if (l && l.isText() && !(l.flags & 8) && l.length + t.length < 512) {
      this.cache.reused.set(
        l,
        2
        /* Reused.DOM */
      );
      let a = r.children[r.children.length - 1] = new bt(l.dom, l.text + t);
      a.parent = r;
    } else
      r.append(s || bt.of(t, (o = this.cache.find(bt)) === null || o === void 0 ? void 0 : o.dom));
    this.pos += t.length, this.afterWidget = null;
  }
  addComposition(t, e) {
    let i = this.curLine;
    i.dom != e.line.dom && (i.setDOM(this.cache.reused.has(e.line) ? ze(e.line.dom) : e.line.dom), this.cache.reused.set(
      e.line,
      2
      /* Reused.DOM */
    ));
    let s = i;
    for (let l = e.marks.length - 1; l >= 0; l--) {
      let a = e.marks[l], h = s.lastChild;
      if (h instanceof K && h.mark.eq(a.mark))
        h.dom != a.dom && h.setDOM(ze(a.dom)), s = h;
      else {
        if (this.cache.reused.get(a)) {
          let f = B.get(a.dom);
          f && f.setDOM(ze(a.dom));
        }
        let c = K.of(a.mark, a.dom);
        s.append(c), s = c;
      }
      this.cache.reused.set(
        a,
        2
        /* Reused.DOM */
      );
    }
    let o = B.get(t.text);
    o && this.cache.reused.set(
      o,
      2
      /* Reused.DOM */
    );
    let r = new bt(t.text, t.text.nodeValue);
    r.flags |= 8, this.pos = t.range.toB, s.append(r);
  }
  addInlineWidget(t, e, i) {
    let s = this.afterWidget && t.flags & 48 && (this.afterWidget.flags & 48) == (t.flags & 48);
    s || this.flushBuffer();
    let o = this.ensureMarks(e, i);
    !s && !(t.flags & 16) && o.append(this.getBuffer(1)), o.append(t), this.pos += t.length, this.afterWidget = t;
  }
  addMark(t, e, i) {
    this.flushBuffer(), this.ensureMarks(e, i).append(t), this.pos += t.length, this.afterWidget = null;
  }
  addBlockWidget(t) {
    this.getBlockPos().append(t), this.pos += t.length, this.lastBlock = t, this.endLine();
  }
  continueWidget(t) {
    let e = this.afterWidget || this.lastBlock;
    e.length += t, this.pos += t;
  }
  addLineStart(t, e) {
    var i;
    t || (t = ln);
    let s = Ht.start(t, e || ((i = this.cache.find(Ht)) === null || i === void 0 ? void 0 : i.dom), !!e);
    this.getBlockPos().append(this.lastBlock = this.curLine = s);
  }
  addLine(t) {
    this.getBlockPos().append(t), this.pos += t.length, this.lastBlock = t, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(t) {
    this.blockPosCovered() || this.addLineStart(t);
  }
  ensureLine(t) {
    this.curLine || this.addLineStart(t);
  }
  ensureMarks(t, e) {
    var i;
    let s = this.curLine;
    for (let o = t.length - 1; o >= 0; o--) {
      let r = t[o], l;
      if (e > 0 && (l = s.lastChild) && l instanceof K && l.mark.eq(r))
        s = l, e--;
      else {
        let a = K.of(r, (i = this.cache.find(K, (h) => h.mark.eq(r))) === null || i === void 0 ? void 0 : i.dom);
        s.append(a), s = a, e = 0;
      }
    }
    return s;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let t = this.curLine.lastChild;
      (!t || !Xi(this.curLine, !1) || t.dom.nodeName != "BR" && t.isWidget() && !(w.ios && Xi(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        Ke,
        0,
        32
        /* TileFlag.After */
      ) || new xt(
        Ke.toDOM(),
        0,
        Ke,
        32
        /* TileFlag.After */
      )), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let t = this.wrappers.length - 1; t >= 0; t--)
      this.wrappers[t].to < this.pos && this.wrappers.splice(t, 1);
    for (let t = this.blockWrappers; t.value && t.from <= this.pos; t.next())
      if (t.to >= this.pos) {
        let e = t.rank * 102 + t.value.rank, i = new yo(t.from, t.to, t.value, e), s = this.wrappers.length;
        for (; s > 0 && (this.wrappers[s - 1].rank - i.rank || this.wrappers[s - 1].to - i.to) < 0; )
          s--;
        this.wrappers.splice(s, 0, i);
      }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var t;
    this.updateBlockWrappers();
    let e = this.root;
    for (let i of this.wrappers) {
      let s = e.lastChild;
      if (i.from < this.pos && s instanceof it && s.wrapper.eq(i.wrapper))
        e = s;
      else {
        let o = it.of(i.wrapper, (t = this.cache.find(it, (r) => r.wrapper.eq(i.wrapper))) === null || t === void 0 ? void 0 : t.dom);
        e.append(o), e = o;
      }
    }
    return e;
  }
  blockPosCovered() {
    let t = this.lastBlock;
    return t != null && !t.breakAfter && (!t.isWidget() || (t.flags & 160) > 0);
  }
  getBuffer(t) {
    let e = 2 | (t < 0 ? 16 : 32), i = this.cache.find(
      Ce,
      void 0,
      1
      /* Reused.Full */
    );
    return i && (i.flags = e), i || new Ce(e);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class vo {
  constructor(t) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = t.iter();
  }
  skip(t) {
    this.textOff + t <= this.text.length ? this.textOff += t : (this.skipCount += t - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(t) {
    if (this.textOff == this.text.length) {
      let { value: s, lineBreak: o, done: r } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, r)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = s;
      let l = this.textOff = Math.min(t, s.length);
      return o ? null : s.slice(0, l);
    }
    let e = Math.min(this.text.length, this.textOff + t), i = this.text.slice(this.textOff, e);
    return this.textOff = e, i;
  }
}
const ke = [xt, Ht, bt, K, Ce, it, Ee];
for (let n = 0; n < ke.length; n++)
  ke[n].bucket = n;
class So {
  constructor(t) {
    this.view = t, this.buckets = ke.map(() => []), this.index = ke.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  // Put a tile in the cache.
  add(t) {
    let e = t.constructor.bucket, i = this.buckets[e];
    i.length < 6 ? i.push(t) : i[
      this.index[e] = (this.index[e] + 1) % 6
      /* C.Bucket */
    ] = t;
  }
  find(t, e, i = 2) {
    let s = t.bucket, o = this.buckets[s], r = this.index[s];
    for (let l = 0; l < o.length; l++) {
      let a = (l + r) % o.length, h = o[a];
      if ((!e || e(h)) && !this.reused.has(h))
        return o.splice(a, 1), a < r && this.index[s]--, this.reused.set(h, i), h;
    }
    return null;
  }
  findWidget(t, e, i) {
    let s = this.buckets[0];
    if (s.length)
      for (let o = 0, r = 0; ; o++) {
        if (o == s.length) {
          if (r)
            return null;
          r = 1, o = 0;
        }
        let l = s[o];
        if (!this.reused.has(l) && (r == 0 ? l.widget.compare(t) : l.widget.constructor == t.constructor && t.updateDOM(l.dom, this.view, l.widget)))
          return s.splice(o, 1), o < this.index[0] && this.index[0]--, l.widget == t && l.length == e && (l.flags & 497) == i ? (this.reused.set(
            l,
            1
            /* Reused.Full */
          ), l) : (this.reused.set(
            l,
            2
            /* Reused.DOM */
          ), new xt(l.dom, e, t, l.flags & -498 | i));
      }
  }
  reuse(t) {
    return this.reused.set(
      t,
      1
      /* Reused.Full */
    ), t;
  }
  maybeReuse(t, e = 2) {
    if (!this.reused.has(t))
      return this.reused.set(t, e), t.dom;
  }
  clear() {
    for (let t = 0; t < this.buckets.length; t++)
      this.buckets[t].length = this.index[t] = 0;
  }
}
class Co {
  constructor(t, e, i, s, o) {
    this.view = t, this.decorations = s, this.disallowBlockEffectsFor = o, this.openWidget = !1, this.openMarks = 0, this.cache = new So(t), this.text = new vo(t.state.doc), this.builder = new xo(this.cache, new Ee(t, t.contentDOM), E.iter(i)), this.cache.reused.set(
      e,
      2
      /* Reused.DOM */
    ), this.old = new wo(e), this.reuseWalker = {
      skip: (r, l, a) => {
        if (this.cache.add(r), r.isComposite())
          return !1;
      },
      enter: (r) => this.cache.add(r),
      leave: () => {
      },
      break: () => {
      }
    };
  }
  run(t, e) {
    let i = e && this.getCompositionContext(e.text);
    for (let s = 0, o = 0, r = 0; ; ) {
      let l = r < t.length ? t[r++] : null, a = l ? l.fromA : this.old.root.length;
      if (a > s) {
        let h = a - s;
        this.preserve(h, !r, !l), s = a, o += h;
      }
      if (!l)
        break;
      e && l.fromA <= e.range.fromA && l.toA >= e.range.toA ? (this.forward(l.fromA, e.range.fromA, e.range.fromA < e.range.toA ? 1 : -1), this.emit(o, e.range.fromB), this.builder.flushBuffer(), this.cache.clear(), this.builder.addComposition(e, i), this.text.skip(e.range.toB - e.range.fromB), this.forward(e.range.fromA, l.toA), this.emit(e.range.toB, l.toB)) : (this.forward(l.fromA, l.toA), this.emit(o, l.toB)), o = l.toB, s = l.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(t, e, i) {
    let s = Ao(this.old), o = this.openMarks;
    this.old.advance(t, i ? 1 : -1, {
      skip: (r, l, a) => {
        if (r.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(a - l);
          else {
            let h = a > 0 || l < r.length ? xt.of(r.widget, this.view, a - l, r.flags & 496, this.cache.maybeReuse(r)) : this.cache.reuse(r);
            h.flags & 256 ? (h.flags &= -2, this.builder.addBlockWidget(h)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(h, s, o), o = s.length);
          }
        else if (r.isText())
          this.builder.ensureLine(null), !l && a == r.length && !this.cache.reused.has(r) ? this.builder.addText(r.text, s, o, this.cache.reuse(r)) : (this.cache.add(r), this.builder.addText(r.text.slice(l, a), s, o)), o = s.length;
        else if (r.isLine())
          r.flags &= -2, this.cache.reused.set(
            r,
            1
            /* Reused.Full */
          ), this.builder.addLine(r);
        else if (r instanceof Ce)
          this.cache.add(r);
        else if (r instanceof K)
          this.builder.ensureLine(null), this.builder.addMark(r, s, o), this.cache.reused.set(
            r,
            1
            /* Reused.Full */
          ), o = s.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (r) => {
        r.isLine() ? this.builder.addLineStart(r.attrs, this.cache.maybeReuse(r)) : (this.cache.add(r), r instanceof K && s.unshift(r.mark)), this.openWidget = !1;
      },
      leave: (r) => {
        r.isLine() ? s.length && (s.length = o = 0) : r instanceof K && (s.shift(), o = Math.min(o, s.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(t);
  }
  emit(t, e) {
    let i = null, s = this.builder, o = -1, r = E.spans(this.decorations, t, e, {
      point: (l, a, h, c, f, d) => {
        if (h instanceof wt) {
          if (this.disallowBlockEffectsFor[d]) {
            if (h.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (a > this.view.state.doc.lineAt(l).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (o = c.length, f > c.length)
            s.continueWidget(a - l);
          else {
            let u = h.widget || (h.block ? Pt.block : Pt.inline), p = ko(h), g = this.cache.findWidget(u, a - l, p) || xt.of(u, this.view, a - l, p);
            h.block ? (h.startSide > 0 && s.addLineStartIfNotCovered(i), s.addBlockWidget(g)) : (s.ensureLine(i), s.addInlineWidget(g, c, f));
          }
          i = null;
        } else
          i = Mo(i, h);
        a > l && this.text.skip(a - l);
      },
      span: (l, a, h, c) => {
        for (let f = l; f < a; ) {
          let d = this.text.next(Math.min(512, a - f));
          d == null ? (s.addLineStartIfNotCovered(i), s.addBreak(), f++) : (s.ensureLine(i), s.addText(d, h, f == l ? c : h.length), f += d.length), i = null;
        }
        o = h.length;
      }
    });
    o > -1 && (this.openWidget = r > o), this.openWidget || s.addLineStartIfNotCovered(i), this.openMarks = r;
  }
  forward(t, e, i = 1) {
    e - t <= 10 ? this.old.advance(e - t, i, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(e - t - 10, -1), this.old.advance(5, i, this.reuseWalker));
  }
  getCompositionContext(t) {
    let e = [], i = null;
    for (let s = t.parentNode; ; s = s.parentNode) {
      let o = B.get(s);
      if (s == this.view.contentDOM)
        break;
      o instanceof K ? e.push(o) : o?.isLine() ? i = o : o instanceof it || (s.nodeName == "DIV" && !i && s != this.view.contentDOM ? i = new Ht(s, ln) : i || e.push(K.of(new Zt({ tagName: s.nodeName.toLowerCase(), attributes: Zn(s) }), s)));
    }
    return { line: i, marks: e };
  }
}
function Xi(n, t) {
  let e = (i) => {
    for (let s of i.children)
      if ((t ? s.isText() : s.length) || e(s))
        return !0;
    return !1;
  };
  return e(n);
}
function ko(n) {
  let t = n.isReplace ? (n.startSide < 0 ? 64 : 0) | (n.endSide > 0 ? 128 : 0) : n.startSide > 0 ? 32 : 16;
  return n.block && (t |= 256), t;
}
const ln = { class: "cm-line" };
function Mo(n, t) {
  let e = t.spec.attributes, i = t.spec.class;
  return !e && !i || (n || (n = { class: "cm-line" }), e && ki(e, n), i && (n.class += " " + i)), n;
}
function Ao(n) {
  let t = [];
  for (let e = n.parents.length; e > 1; e--) {
    let i = e == n.parents.length ? n.tile : n.parents[e].tile;
    i instanceof K && t.push(i.mark);
  }
  return t;
}
function ze(n) {
  let t = B.get(n);
  return t && t.setDOM(n.cloneNode()), n;
}
class Pt extends dt {
  constructor(t) {
    super(), this.tag = t;
  }
  eq(t) {
    return t.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t) {
    return t.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
Pt.inline = /* @__PURE__ */ new Pt("span");
Pt.block = /* @__PURE__ */ new Pt("div");
const Ke = /* @__PURE__ */ new class extends dt {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return !0;
  }
  get editable() {
    return !0;
  }
}();
class Gi {
  constructor(t) {
    this.view = t, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = L.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Ee(t, t.contentDOM), this.updateInner([new _(0, 0, 0, t.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(t) {
    var e;
    let i = t.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: c, toA: f }) => f < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? s = this.domChanged.newSel.head : !Po(t.changes, this.hasComposition) && !t.selectionSet && (s = t.state.selection.main.head));
    let o = s > -1 ? Do(this.view, t.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: c, to: f } = this.hasComposition;
      i = new _(c, f, t.changes.mapPos(c, -1), t.changes.mapPos(f, 1)).addToSet(i.slice());
    }
    this.hasComposition = o ? { from: o.range.fromB, to: o.range.toB } : null, (w.ie || w.chrome) && !o && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
    let r = this.decorations, l = this.blockWrappers;
    this.updateDeco();
    let a = Ro(r, this.decorations, t.changes);
    a.length && (i = _.extendWithRanges(i, a));
    let h = Eo(l, this.blockWrappers, t.changes);
    return h.length && (i = _.extendWithRanges(i, h)), o && !i.some((c) => c.fromA <= o.range.fromA && c.toA >= o.range.toA) && (i = o.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? !1 : (this.updateInner(i, o), t.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(t, e) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (e || t.length) {
        let r = this.tile, l = new Co(this.view, r, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        e && B.get(e.text) && l.cache.reused.set(
          B.get(e.text),
          2
          /* Reused.DOM */
        ), this.tile = l.run(t, e), ri(r, l.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = w.chrome || w.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(o), o && (o.written || i.selectionRange.focusNode != o.node || !this.tile.dom.contains(o.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.tile.children)
        o.isWidget() && o.widget instanceof qe && s.push(o.dom);
    i.updateGaps(s);
  }
  updateEditContextFormatting(t) {
    this.editContextFormatting = this.editContextFormatting.map(t.changes);
    for (let e of t.transactions)
      for (let i of e.effects)
        i.is(en) && (this.editContextFormatting = i.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(t = !1, e = !1) {
    (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, s = this.view.root.activeElement, o = s == i, r = !o && !(this.view.state.facet(et) || i.tabIndex > -1) && zt(i, this.view.observer.selectionRange) && !(s && i.contains(s));
    if (!(o || e || r))
      return;
    let l = this.forceSelection;
    this.forceSelection = !1;
    let a = this.view.state.selection.main, h, c;
    if (a.empty ? c = h = this.inlineDOMNearPos(a.anchor, a.assoc || 1) : (c = this.inlineDOMNearPos(a.head, a.head == a.from ? 1 : -1), h = this.inlineDOMNearPos(a.anchor, a.anchor == a.from ? 1 : -1)), w.gecko && a.empty && !this.hasComposition && To(h)) {
      let d = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(d, h.node.childNodes[h.offset] || null)), h = c = new X(d, 0), l = !0;
    }
    let f = this.view.observer.selectionRange;
    (l || !f.focusNode || (!qt(h.node, h.offset, f.anchorNode, f.anchorOffset) || !qt(c.node, c.offset, f.focusNode, f.focusOffset)) && !this.suppressWidgetCursorChange(f, a)) && (this.view.observer.ignore(() => {
      w.android && w.chrome && i.contains(f.focusNode) && Ho(f.focusNode, i) && (i.blur(), i.focus({ preventScroll: !0 }));
      let d = Gt(this.view.root);
      if (d) if (a.empty) {
        if (w.gecko) {
          let u = Oo(h.node, h.offset);
          if (u && u != 3) {
            let p = (u == 1 ? Ns : Vs)(h.node, h.offset);
            p && (h = new X(p.node, p.offset));
          }
        }
        d.collapse(h.node, h.offset), a.bidiLevel != null && d.caretBidiLevel !== void 0 && (d.caretBidiLevel = a.bidiLevel);
      } else if (d.extend) {
        d.collapse(h.node, h.offset);
        try {
          d.extend(c.node, c.offset);
        } catch {
        }
      } else {
        let u = document.createRange();
        a.anchor > a.head && ([h, c] = [c, h]), u.setEnd(c.node, c.offset), u.setStart(h.node, h.offset), d.removeAllRanges(), d.addRange(u);
      }
      r && this.view.root.activeElement == i && (i.blur(), s && s.focus());
    }), this.view.observer.setSelectionRange(h, c)), this.impreciseAnchor = h.precise ? null : new X(f.anchorNode, f.anchorOffset), this.impreciseHead = c.precise ? null : new X(f.focusNode, f.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(t, e) {
    return this.hasComposition && e.empty && qt(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: t } = this, e = t.state.selection.main, i = Gt(t.root), { anchorNode: s, anchorOffset: o } = t.observer.selectionRange;
    if (!i || !e.empty || !e.assoc || !i.modify)
      return;
    let r = this.lineAt(e.head, e.assoc);
    if (!r)
      return;
    let l = r.posAtStart;
    if (e.head == l || e.head == l + r.length)
      return;
    let a = this.coordsAt(e.head, -1), h = this.coordsAt(e.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let c = this.domAtPos(e.head + e.assoc, e.assoc);
    i.collapse(c.node, c.offset), i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
    let f = t.observer.selectionRange;
    t.docView.posFromDOM(f.anchorNode, f.anchorOffset) != e.from && i.collapse(s, o);
  }
  posFromDOM(t, e) {
    let i = this.tile.nearest(t);
    if (!i)
      return this.tile.dom.compareDocumentPosition(t) & 2 ? 0 : this.view.state.doc.length;
    let s = i.posAtStart;
    if (i.isComposite()) {
      let o;
      if (t == i.dom)
        o = i.dom.childNodes[e];
      else {
        let r = st(t) == 0 ? 0 : e == 0 ? -1 : 1;
        for (; ; ) {
          let l = t.parentNode;
          if (l == i.dom)
            break;
          r == 0 && l.firstChild != l.lastChild && (t == l.firstChild ? r = -1 : r = 1), t = l;
        }
        r < 0 ? o = t : o = t.nextSibling;
      }
      if (o == i.dom.firstChild)
        return s;
      for (; o && !B.get(o); )
        o = o.nextSibling;
      if (!o)
        return s + i.length;
      for (let r = 0, l = s; ; r++) {
        let a = i.children[r];
        if (a.dom == o)
          return l;
        l += a.length + a.breakAfter;
      }
    } else return i.isText() ? t == i.dom ? s + e : s + (e ? i.length : 0) : s;
  }
  domAtPos(t, e) {
    let { tile: i, offset: s } = this.tile.resolveBlock(t, e);
    return i.isWidget() ? i.domPosFor(s, e) : i.domIn(s, e);
  }
  inlineDOMNearPos(t, e) {
    let i, s = -1, o = !1, r, l = -1, a = !1;
    return this.tile.blockTiles((h, c) => {
      if (h.isWidget()) {
        if (h.flags & 32 && c >= t)
          return !0;
        h.flags & 16 && (o = !0);
      } else {
        let f = c + h.length;
        if (c <= t && (i = h, s = t - c, o = f < t), f >= t && !r && (r = h, l = t - c, a = c > t), c > t && r)
          return !0;
      }
    }), !i && !r ? this.domAtPos(t, e) : (o && r ? i = null : a && i && (r = null), i && e < 0 || !r ? i.domIn(s, e) : r.domIn(l, e));
  }
  // Get the coord of the element at the given side of the given
  // position. If rtl is given, flatten it using that text direction.
  coordsAt(t, e, i) {
    let { tile: s, offset: o } = this.tile.resolveBlock(t, e);
    return s.isWidget() ? s.widget instanceof qe ? null : s.coordsInWidget(o, e, !0) : s.coordsIn(o, e, i);
  }
  lineAt(t, e) {
    let { tile: i } = this.tile.resolveBlock(t, e);
    return i.isLine() ? i : null;
  }
  coordsForChar(t) {
    let { tile: e, offset: i } = this.tile.resolveBlock(t, 1);
    if (!e.isLine())
      return null;
    function s(o, r) {
      if (o.isComposite())
        for (let l of o.children) {
          if (l.length >= r) {
            let a = s(l, r);
            if (a)
              return a;
          }
          if (r -= l.length, r < 0)
            break;
        }
      else if (o.isText() && r < o.length) {
        let l = mt(o.text, r);
        if (l == r)
          return null;
        let a = Ut(o.dom, r, l).getClientRects();
        for (let h = 0; h < a.length; h++) {
          let c = a[h];
          if (h == a.length - 1 || c.top < c.bottom && c.left < c.right)
            return c;
        }
      }
      return null;
    }
    return s(e, i);
  }
  measureVisibleLineHeights(t) {
    let e = [], { from: i, to: s } = t, o = this.view.contentDOM.clientWidth, r = o > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == R.LTR, h = 0, c = (f, d, u) => {
      for (let p = 0; p < f.children.length && !(d > s); p++) {
        let g = f.children[p], m = d + g.length, b = g.dom.getBoundingClientRect(), { height: y } = b;
        if (u && !p && (h += b.top - u.top), g instanceof it)
          m > i && c(g, d, b);
        else if (d >= i && (h > 0 && e.push(-h), e.push(y + h), h = 0, r)) {
          let x = g.dom.lastChild, A = x ? Kt(x) : [];
          if (A.length) {
            let k = A[A.length - 1], v = a ? k.right - b.left : b.right - k.left;
            v > l && (l = v, this.minWidth = o, this.minWidthFrom = d, this.minWidthTo = m);
          }
        }
        u && p == f.children.length - 1 && (h += u.bottom - b.bottom), d = m + g.breakAfter;
      }
    };
    return c(this.tile, 0, null), e;
  }
  textDirectionAt(t) {
    let { tile: e } = this.tile.resolveBlock(t, 1);
    return getComputedStyle(e.dom).direction == "rtl" ? R.RTL : R.LTR;
  }
  measureTextSize() {
    let t = this.tile.blockTiles((r) => {
      if (r.isLine() && r.children.length && r.length <= 20) {
        let l = 0, a;
        for (let h of r.children) {
          if (!h.isText() || /[^ -~]/.test(h.text))
            return;
          let c = Kt(h.dom);
          if (c.length != 1)
            return;
          l += c[0].width, a = c[0].height;
        }
        if (l)
          return {
            lineHeight: r.dom.getBoundingClientRect().height,
            charWidth: l / r.length,
            textHeight: a
          };
      }
    });
    if (t)
      return t;
    let e = document.createElement("div"), i, s, o;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(e);
      let r = Kt(e.firstChild)[0];
      i = e.getBoundingClientRect().height, s = r && r.width ? r.width / 27 : 7, o = r && r.height ? r.height : i, e.remove();
    }), { lineHeight: i, charWidth: s, textHeight: o };
  }
  computeBlockGapDeco() {
    let t = [], e = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let o = s == e.viewports.length ? null : e.viewports[s], r = o ? o.from - 1 : this.view.state.doc.length;
      if (r > i) {
        let l = (e.lineBlockAt(r).bottom - e.lineBlockAt(i).top) / this.view.scaleY;
        t.push(L.replace({
          widget: new qe(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, r));
      }
      if (!o)
        break;
      i = o.to + 1;
    }
    return L.set(t);
  }
  updateDeco() {
    let t = 1, e = this.view.state.facet(Re).map((o) => (this.dynamicDecorationMap[t++] = typeof o == "function") ? o(this.view) : o), i = !1, s = this.view.state.facet(Oi).map((o, r) => {
      let l = typeof o == "function";
      return l && (i = !0), l ? o(this.view) : o;
    });
    for (s.length && (this.dynamicDecorationMap[t++] = i, e.push(E.join(s))), this.decorations = [
      this.editContextFormatting,
      ...e,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; t < this.decorations.length; )
      this.dynamicDecorationMap[t++] = !1;
    this.blockWrappers = this.view.state.facet(nn).map((o) => typeof o == "function" ? o(this.view) : o);
  }
  scrollIntoView(t) {
    if (t.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(t.range.head);
      this.view.scrollDOM.scrollTop = h.top - t.yMargin, this.view.scrollDOM.scrollLeft = t.xMargin;
      return;
    }
    for (let h of this.view.state.facet(tn))
      try {
        if (h(this.view, t.range, t))
          return !0;
      } catch (c) {
        $(this.view.state, c, "scroll handler");
      }
    let { range: e } = t, i = this.coordsAt(e.head, e.assoc || (e.head > e.anchor ? -1 : 1)), s;
    if (!i)
      return;
    !e.empty && (s = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, s.left),
      top: Math.min(i.top, s.top),
      right: Math.max(i.right, s.right),
      bottom: Math.max(i.bottom, s.bottom)
    });
    let o = Li(this.view), r = {
      left: i.left - o.left,
      top: i.top - o.top,
      right: i.right + o.right,
      bottom: i.bottom + o.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    if (io(this.view.scrollDOM, r, e.head < e.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, l), -l), Math.max(Math.min(t.yMargin, a), -a), this.view.textDirection == R.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (i.top > window.visualViewport.offsetTop + window.visualViewport.height || i.bottom < window.visualViewport.offsetTop)) {
      let h = this.view.docView.lineAt(e.head, 1);
      if (h) {
        let c = Es(h.dom);
        h.dom.scrollIntoView({ block: "nearest" }), Hs(c, !1);
      }
    }
  }
  lineHasWidget(t) {
    let e = (i) => i.isWidget() || i.children.some(e);
    return e(this.tile.resolveBlock(t, 1).tile);
  }
  destroy() {
    ri(this.tile);
  }
}
function ri(n, t) {
  let e = t?.get(n);
  if (e != 1) {
    e == null && n.destroy();
    for (let i of n.children)
      ri(i, t);
  }
}
function To(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
function an(n, t) {
  let e = n.observer.selectionRange;
  if (!e.focusNode)
    return null;
  let i = Ns(e.focusNode, e.focusOffset), s = Vs(e.focusNode, e.focusOffset), o = i || s;
  if (s && i && s.node != i.node) {
    let l = B.get(s.node);
    if (!l || l.isText() && l.text != s.node.nodeValue)
      o = s;
    else if (n.docView.lastCompositionAfterCursor) {
      let a = B.get(i.node);
      !a || a.isText() && a.text != i.node.nodeValue || (o = s);
    }
  }
  if (n.docView.lastCompositionAfterCursor = o != i, !o)
    return null;
  let r = t - o.offset;
  return { from: r, to: r + o.node.nodeValue.length, node: o.node };
}
function Do(n, t, e) {
  let i = an(n, e);
  if (!i)
    return null;
  let { node: s, from: o, to: r } = i, l = s.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = t.invertedDesc;
  return { range: new _(a.mapPos(o), a.mapPos(r), o, r), text: s };
}
function Oo(n, t) {
  return n.nodeType != 1 ? 0 : (t && n.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < n.childNodes.length && n.childNodes[t].contentEditable == "false" ? 2 : 0);
}
let Lo = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t, e) {
    Ot(t, e, this.changes);
  }
  comparePoint(t, e) {
    Ot(t, e, this.changes);
  }
  boundChange(t) {
    Ot(t, t, this.changes);
  }
};
function Ro(n, t, e) {
  let i = new Lo();
  return E.compare(n, t, e, i), i.changes;
}
class Bo {
  constructor() {
    this.changes = [];
  }
  compareRange(t, e) {
    Ot(t, e, this.changes);
  }
  comparePoint() {
  }
  boundChange(t) {
    Ot(t, t, this.changes);
  }
}
function Eo(n, t, e) {
  let i = new Bo();
  return E.compare(n, t, e, i), i.changes;
}
function Ho(n, t) {
  for (let e = n; e && e != t; e = e.assignedSlot || e.parentNode)
    if (e.nodeType == 1 && e.contentEditable == "false")
      return !0;
  return !1;
}
function Po(n, t) {
  let e = !1;
  return t && n.iterChangedRanges((i, s) => {
    i < t.to && s > t.from && (e = !0);
  }), e;
}
class qe extends dt {
  constructor(t) {
    super(), this.height = t;
  }
  toDOM() {
    let t = document.createElement("div");
    return t.className = "cm-gap", this.updateDOM(t), t;
  }
  eq(t) {
    return t.height == this.height;
  }
  updateDOM(t) {
    return t.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function Wo(n, t, e = 1) {
  let i = n.charCategorizer(t), s = n.doc.lineAt(t), o = t - s.from;
  if (s.length == 0)
    return S.cursor(t);
  o == 0 ? e = 1 : o == s.length && (e = -1);
  let r = o, l = o;
  e < 0 ? r = mt(s.text, o, !1) : l = mt(s.text, o);
  let a = i(s.text.slice(r, l));
  for (; r > 0; ) {
    let h = mt(s.text, r, !1);
    if (i(s.text.slice(h, r)) != a)
      break;
    r = h;
  }
  for (; l < s.length; ) {
    let h = mt(s.text, l);
    if (i(s.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return S.undirectionalRange(r + s.from, l + s.from);
}
function No(n, t, e, i, s) {
  let o = Math.round((i - t.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && e.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight, a = Math.floor((s - e.top - (n.defaultLineHeight - l) * 0.5) / l);
    o += a * n.viewState.heightOracle.lineLength;
  }
  let r = n.state.sliceDoc(e.from, e.to);
  return e.from + Ue(r, o, n.state.tabSize);
}
function li(n, t, e) {
  let i = n.lineBlockAt(t);
  if (Array.isArray(i.type)) {
    let s;
    for (let o of i.type) {
      if (o.from > t)
        break;
      if (!(o.to < t)) {
        if (o.from < t && o.to > t)
          return o;
        (!s || o.type == P.Text && (s.type != o.type || (e < 0 ? o.from < t : o.to > t))) && (s = o);
      }
    }
    return s || i;
  }
  return i;
}
function Vo(n, t, e, i) {
  let s = li(n, t.head, t.assoc || -1), o = !i || s.type != P.Text || !(n.lineWrapping || s.widgetLineBreaks) ? null : n.coordsAtPos(t.assoc < 0 && t.head > s.from ? t.head - 1 : t.head);
  if (o) {
    let r = n.dom.getBoundingClientRect(), l = n.textDirectionAt(s.from), a = n.posAtCoords({
      x: e == (l == R.LTR) ? r.right - 1 : r.left + 1,
      y: (o.top + o.bottom) / 2
    });
    if (a != null)
      return S.cursor(a, e ? -1 : 1);
  }
  return S.cursor(e ? s.to : s.from, e ? -1 : 1);
}
function $i(n, t, e, i) {
  let s = n.state.doc.lineAt(t.head), o = n.bidiSpans(s), r = n.textDirectionAt(s.from);
  for (let l = t, a = null; ; ) {
    let h = Ys(s, o, r, l, e), c = _s;
    if (!h) {
      if (s.number == (e ? n.state.doc.lines : 1))
        return l;
      c = `
`, s = n.state.doc.line(s.number + (e ? 1 : -1)), o = n.bidiSpans(s), h = n.visualLineSide(s, !e);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!i)
        return h;
      a = i(c);
    }
    l = h;
  }
}
function Fo(n, t, e) {
  let i = n.state.charCategorizer(t), s = i(e);
  return (o) => {
    let r = i(o);
    return s == Gn.Space && (s = r), s == r;
  };
}
function Io(n, t, e, i) {
  let s = t.head, o = e ? 1 : -1;
  if (s == (e ? n.state.doc.length : 0))
    return S.cursor(s, t.assoc);
  let r = t.goalColumn, l, a = n.contentDOM.getBoundingClientRect(), h = n.coordsAtPos(s, t.assoc || ((t.empty ? e : t.head == t.from) ? 1 : -1)), c = n.documentTop;
  if (h)
    r == null && (r = h.left - a.left), l = o < 0 ? h.top : h.bottom;
  else {
    let p = n.viewState.lineBlockAt(s);
    r == null && (r = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - p.from))), l = (o < 0 ? p.top : p.bottom) + c;
  }
  let f = a.left + r, d = n.viewState.heightOracle.textHeight >> 1, u = i ?? d;
  for (let p = 0; ; p += d) {
    let g = l + (u + p) * o, m = ai(n, { x: f, y: g }, !1, o);
    if (e ? g > a.bottom : g < a.top)
      return S.cursor(m.pos, m.assoc);
    let b = n.coordsAtPos(m.pos, m.assoc), y = b ? (b.top + b.bottom) / 2 : 0;
    if (!b || (e ? y > l : y < l))
      return S.cursor(m.pos, m.assoc, void 0, r);
  }
}
function _t(n, t, e) {
  for (; ; ) {
    let i = 0;
    for (let s of n)
      s.between(t - 1, t + 1, (o, r, l) => {
        if (t > o && t < r) {
          let a = i || e || (t - o < r - t ? -1 : 1);
          t = a < 0 ? o : r, i = a;
        }
      });
    if (!i)
      return t;
  }
}
function hn(n, t) {
  let e = null;
  for (let i = 0; i < t.ranges.length; i++) {
    let s = t.ranges[i], o = null;
    if (s.empty) {
      let r = _t(n, s.from, 0);
      r != s.from && (o = S.cursor(r, -1));
    } else {
      let r = _t(n, s.from, -1), l = _t(n, s.to, 1);
      (r != s.from || l != s.to) && (s.undirectional ? o = S.undirectionalRange(s.from, s.to) : o = S.range(s.from == s.anchor ? r : l, s.from == s.head ? r : l));
    }
    o && (e || (e = t.ranges.slice()), e[i] = o);
  }
  return e ? S.create(e, t.mainIndex) : t;
}
function _e(n, t, e) {
  let i = _t(n.state.facet(ee).map((s) => s(n)), e.from, t.head > e.from ? -1 : 1);
  return i == e.from ? e : S.cursor(i, i < e.from ? 1 : -1);
}
class J {
  constructor(t, e) {
    this.pos = t, this.assoc = e;
  }
}
function ai(n, t, e, i) {
  let s = n.contentDOM.getBoundingClientRect(), o = s.top + n.viewState.paddingTop, { x: r, y: l } = t, a = l - o, h;
  for (; ; ) {
    if (a < 0)
      return new J(0, 1);
    if (a > n.viewState.docHeight)
      return new J(n.state.doc.length, -1);
    if (h = n.elementAtHeight(a), i == null)
      break;
    if (h.type == P.Text) {
      if (i < 0 ? h.to < n.viewport.from : h.from > n.viewport.to)
        break;
      let d = n.docView.coordsAt(i < 0 ? h.from : h.to, i > 0 ? -1 : 1);
      if (d && (i < 0 ? d.top <= a + o : d.bottom >= a + o))
        break;
    }
    let f = n.viewState.heightOracle.textHeight / 2;
    a = i > 0 ? h.bottom + f : h.top - f;
  }
  if (n.viewport.from >= h.to || n.viewport.to <= h.from) {
    if (e)
      return null;
    if (h.type == P.Text) {
      let f = No(n, s, h, r, l);
      return new J(f, f == h.from ? 1 : -1);
    }
  }
  if (h.type != P.Text)
    return a < (h.top + h.bottom) / 2 ? new J(h.from, 1) : new J(h.to, -1);
  let c = n.docView.lineAt(h.from, 2);
  return (!c || c.length != h.length) && (c = n.docView.lineAt(h.from, -2)), new zo(n, r, l, n.textDirectionAt(h.from)).scanTile(c, h.from);
}
class zo {
  constructor(t, e, i, s) {
    this.view = t, this.x = e, this.y = i, this.baseDir = s, this.line = null, this.spans = null;
  }
  bidiSpansAt(t) {
    return (!this.line || this.line.from > t || this.line.to < t) && (this.line = this.view.state.doc.lineAt(t), this.spans = this.view.bidiSpans(this.line)), this;
  }
  baseDirAt(t, e) {
    let { line: i, spans: s } = this.bidiSpansAt(t);
    return s[G.find(s, t - i.from, -1, e)].level == this.baseDir;
  }
  dirAt(t, e) {
    let { line: i, spans: s } = this.bidiSpansAt(t);
    return s[G.find(s, t - i.from, -1, e)].dir;
  }
  // Used to short-circuit bidi tests for content with a uniform direction
  bidiIn(t, e) {
    let { spans: i, line: s } = this.bidiSpansAt(t);
    return i.length > 1 || i.length && (i[0].level != this.baseDir || i[0].to + s.from < e);
  }
  // Scan through the rectangles for the content of a tile with inline
  // content, looking for one that overlaps the queried position
  // vertically and is closest horizontally. The caller is responsible
  // for dividing its content into N pieces, and pass an array with
  // N+1 positions (including the position after the last piece). For
  // a text tile, these will be character clusters, for a composite
  // tile, these will be child tiles.
  scan(t, e, i = !1) {
    let s = 0, o = t.length - 1, r = /* @__PURE__ */ new Set(), l = this.bidiIn(t[0], t[o]), a, h, c = -1, f = 1e9, d;
    t: for (; s < o; ) {
      let p = o - s, g = s + o >> 1;
      e: if (r.has(g)) {
        for (let y = 1; y < p; y++) {
          let x = g + y;
          if (x >= o && (x -= p), !r.has(x)) {
            g = x;
            break e;
          }
        }
        break t;
      }
      r.add(g);
      let m = e(g), b = 0;
      if (m)
        for (let y = 0; y < m.length; y++) {
          let x = m[y];
          if (!(x.width == 0 && m.length > 1))
            if (x.bottom < this.y)
              (!a || a.bottom < x.bottom) && (a = x), b = 1;
            else if (x.top > this.y)
              (!h || h.top > x.top) && (h = x), b = -1;
            else {
              let A = x.left > this.x ? this.x - x.left : x.right < this.x ? this.x - x.right : 0, k = Math.abs(A);
              k < f && (c = g, f = k, d = x), A && (b = A < 0 == (this.baseDir == R.LTR) ? -1 : 1);
            }
        }
      b == -1 && (!l || this.baseDirAt(t[g], 1)) ? o = g : b == 1 && (!l || this.baseDirAt(t[g + 1], -1)) && (s = g + 1);
    }
    if (!d) {
      if (!h && !a)
        return { i: 0, after: !1 };
      let p = a && (!h || this.y - a.bottom < h.top - this.y) ? a : h;
      return this.y = (p.top + p.bottom) / 2, this.scan(t, e, !0);
    }
    if (f && !i) {
      let { top: p, bottom: g } = d;
      if (a && a.bottom > (p + p + g) / 3)
        return this.y = a.bottom - 1, this.scan(t, e, !0);
      if (h && h.top < (p + g + g) / 3)
        return this.y = h.top + 1, this.scan(t, e, !0);
    }
    let u = (l ? this.dirAt(t[c], 1) : this.baseDir) == R.LTR;
    return {
      i: c,
      // Test whether x is closes to the start or end of this element
      after: this.x > (d.left + d.right) / 2 == u
    };
  }
  scanText(t, e) {
    let i = [];
    for (let o = 0; o < t.length; o = mt(t.text, o))
      i.push(e + o);
    i.push(e + t.length);
    let s = this.scan(i, (o) => {
      let r = i[o] - e, l = i[o + 1] - e;
      return Ut(t.dom, r, l).getClientRects();
    });
    return s.after ? new J(i[s.i + 1], -1) : new J(i[s.i], 1);
  }
  scanTile(t, e) {
    if (!t.length)
      return new J(e, 1);
    if (t.children.length == 1) {
      let l = t.children[0];
      if (l.isText())
        return this.scanText(l, e);
      if (l.isComposite())
        return this.scanTile(l, e);
    }
    let i = [e];
    for (let l = 0, a = e; l < t.children.length; l++)
      i.push(a += t.children[l].length);
    let s = this.scan(i, (l) => {
      let a = t.children[l];
      return a.flags & 48 ? null : (a.dom.nodeType == 1 ? a.dom : Ut(a.dom, 0, a.length)).getClientRects();
    }), o = t.children[s.i], r = i[s.i];
    return o.isText() ? this.scanText(o, r) : o.isComposite() ? this.scanTile(o, r) : s.after ? new J(i[s.i + 1], -1) : new J(r, 1);
  }
}
const Mt = "￿";
class Ko {
  constructor(t, e) {
    this.points = t, this.view = e, this.text = "", this.lineSeparator = e.state.facet(It.lineSeparator);
  }
  append(t) {
    this.text += t;
  }
  lineBreak() {
    this.text += Mt;
  }
  readRange(t, e) {
    if (!t)
      return this;
    let i = t.parentNode;
    for (let s = t; ; ) {
      this.findPointBefore(i, s);
      let o = this.text.length;
      this.readNode(s);
      let r = B.get(s), l = s.nextSibling;
      if (l == e) {
        r?.breakAfter && !l && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let a = B.get(l);
      (r && a ? r.breakAfter : (r ? r.breakAfter : Se(s)) || Se(l) && (s.nodeName != "BR" || r?.isWidget()) && this.text.length > o) && !_o(l, e) && this.lineBreak(), s = l;
    }
    return this.findPointBefore(i, e), this;
  }
  readTextNode(t) {
    let e = t.nodeValue;
    for (let i of this.points)
      i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let o = -1, r = 1, l;
      if (this.lineSeparator ? (o = e.indexOf(this.lineSeparator, i), r = this.lineSeparator.length) : (l = s.exec(e)) && (o = l.index, r = l[0].length), this.append(e.slice(i, o < 0 ? e.length : o)), o < 0)
        break;
      if (this.lineBreak(), r > 1)
        for (let a of this.points)
          a.node == t && a.pos > this.text.length && (a.pos -= r - 1);
      i = o + r;
    }
  }
  readNode(t) {
    let e = B.get(t), i = e && e.overrideDOMText;
    if (i != null) {
      this.findPointInside(t, i.length);
      for (let s = i.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else t.nodeType == 3 ? this.readTextNode(t) : t.nodeName == "BR" ? t.nextSibling && this.lineBreak() : t.nodeType == 1 && this.readRange(t.firstChild, null);
  }
  findPointBefore(t, e) {
    for (let i of this.points)
      i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length);
  }
  findPointInside(t, e) {
    for (let i of this.points)
      (t.nodeType == 3 ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + (qo(t, i.node, i.offset) ? e : 0));
  }
}
function qo(n, t, e) {
  for (; ; ) {
    if (!t || e < st(t))
      return !1;
    if (t == n)
      return !0;
    e = ft(t) + 1, t = t.parentNode;
  }
}
function _o(n, t) {
  let e;
  for (; !(n == t || !n); n = n.nextSibling) {
    let i = B.get(n);
    if (!i?.isWidget())
      return !1;
    i && (e || (e = [])).push(i);
  }
  if (e)
    for (let i of e) {
      let s = i.overrideDOMText;
      if (s?.length)
        return !1;
    }
  return !0;
}
class Ui {
  constructor(t, e) {
    this.node = t, this.offset = e, this.pos = -1;
  }
}
class Yo {
  constructor(t, e, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = e > -1;
    let { impreciseHead: o, impreciseAnchor: r } = t.docView, l = t.state.selection;
    if (t.state.readOnly && e > -1)
      this.newSel = null;
    else if (e > -1 && (this.bounds = cn(t.docView.tile, e, i, 0))) {
      let a = o || r ? [] : Xo(t), h = new Ko(a, t);
      h.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = h.text, this.newSel = Go(a, this.bounds.from);
    } else {
      let a = t.observer.selectionRange, h = o && o.node == a.focusNode && o.offset == a.focusOffset || !ei(t.contentDOM, a.focusNode) ? l.main.head : t.docView.posFromDOM(a.focusNode, a.focusOffset), c = r && r.node == a.anchorNode && r.offset == a.anchorOffset || !ei(t.contentDOM, a.anchorNode) ? l.main.anchor : t.docView.posFromDOM(a.anchorNode, a.anchorOffset), f = t.viewport;
      if ((w.ios || w.chrome) && h != c && Math.min(h, c) <= l.main.from && Math.max(h, c) >= l.main.to && (f.from > 0 || f.to < t.state.doc.length)) {
        let d = Math.min(h, c), u = Math.max(h, c), p = f.from - d, g = f.to - u;
        (p == 0 || p == 1 || d == 0) && (g == 0 || g == -1 || u == t.state.doc.length) && (h = 0, c = t.state.doc.length);
      }
      if (t.inputState.composing > -1 && l.ranges.length > 1)
        this.newSel = l.replaceRange(S.range(c, h));
      else if (t.lineWrapping && c == h && !(l.main.empty && l.main.head == h) && t.inputState.lastTouchTime > Date.now() - 100) {
        let d = t.coordsAtPos(h, -1), u = 0;
        d && (u = t.inputState.lastTouchY <= d.bottom ? -1 : 1), this.newSel = S.create([S.cursor(h, u)]);
      } else
        this.newSel = S.single(c, h);
    }
  }
}
function cn(n, t, e, i) {
  if (n.isComposite()) {
    let s = -1, o = -1, r = -1, l = -1;
    for (let a = 0, h = i, c = i; a < n.children.length; a++) {
      let f = n.children[a], d = h + f.length;
      if (h < t && d > e)
        return cn(f, t, e, h);
      if (d >= t && s == -1 && (s = a, o = h), h > e && f.dom.parentNode == n.dom) {
        r = a, l = c;
        break;
      }
      c = d, h = d + f.breakAfter;
    }
    return {
      from: o,
      to: l < 0 ? i + n.length : l,
      startDOM: (s ? n.children[s - 1].dom.nextSibling : null) || n.dom.firstChild,
      endDOM: r < n.children.length && r >= 0 ? n.children[r].dom : null
    };
  } else return n.isText() ? { from: i, to: i + n.length, startDOM: n.dom, endDOM: n.dom.nextSibling } : null;
}
function fn(n, t) {
  let e, { newSel: i } = t, { state: s } = n, o = s.selection.main, r = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (t.bounds) {
    let { from: l, to: a } = t.bounds, h = o.from, c = null;
    (r === 8 || w.android && t.text.length < a - l) && (h = o.to, c = "end");
    let f = s.doc.sliceString(l, a, Mt), d, u;
    !o.empty && o.from >= l && o.to <= a && (t.typeOver || f != t.text) && f.slice(0, o.from - l) == t.text.slice(0, o.from - l) && f.slice(o.to - l) == t.text.slice(d = t.text.length - (f.length - (o.to - l))) ? e = {
      from: o.from,
      to: o.to,
      insert: j.of(t.text.slice(o.from - l, d).split(Mt))
    } : (u = dn(f, t.text, h - l, c)) && (w.chrome && r == 13 && u.toB == u.from + 2 && t.text.slice(u.from, u.toB) == Mt + Mt && u.toB--, e = {
      from: l + u.from,
      to: l + u.toA,
      insert: j.of(t.text.slice(u.from, u.toB).split(Mt))
    });
  } else i && (!n.hasFocus && s.facet(et) || Me(i, o)) && (i = null);
  if (!e && !i)
    return !1;
  if ((w.mac || w.android) && e && e.from == e.to && e.from == o.head - 1 && /^\. ?$/.test(e.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && e.insert.length == 2 && (i = S.single(i.main.anchor - 1, i.main.head - 1)), e = { from: e.from, to: e.to, insert: j.of([e.insert.toString().replace(".", " ")]) }) : s.doc.lineAt(o.from).to < o.to && n.docView.lineHasWidget(o.to) && n.inputState.insertingTextAt > Date.now() - 50 ? e = {
    from: o.from,
    to: o.to,
    insert: s.toText(n.inputState.insertingText)
  } : w.chrome && e && e.from == e.to && e.from == o.head && e.insert.toString() == `
 ` && n.lineWrapping && (i && (i = S.single(i.main.anchor - 1, i.main.head - 1)), e = { from: o.from, to: o.to, insert: j.of([" "]) }), e)
    return Ri(n, e, i, r);
  if (i && !Me(i, o)) {
    let l = !1, a = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (l = !0), a = n.inputState.lastSelectionOrigin, a == "select.pointer" && (i = hn(s.facet(ee).map((h) => h(n)), i))), n.dispatch({ selection: i, scrollIntoView: l, userEvent: a }), !0;
  } else
    return !1;
}
function Ri(n, t, e, i = -1) {
  if (w.ios && n.inputState.flushIOSKey(t))
    return !0;
  let s = n.state.selection.main;
  if (w.android && (t.to == s.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (t.from == s.from || t.from == s.from - 1 && n.state.sliceDoc(t.from, s.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && Lt(n.contentDOM, "Enter", 13) || (t.from == s.from - 1 && t.to == s.to && t.insert.length == 0 || i == 8 && t.insert.length < t.to - t.from && t.to > s.head) && Lt(n.contentDOM, "Backspace", 8) || t.from == s.from && t.to == s.to + 1 && t.insert.length == 0 && Lt(n.contentDOM, "Delete", 46)))
    return !0;
  let o = t.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let r, l = () => r || (r = jo(n, t, e));
  return n.state.facet(Us).some((a) => a(n, t.from, t.to, o, l)) || n.dispatch(l()), !0;
}
function jo(n, t, e) {
  let i, s = n.state, o = s.selection.main, r = -1;
  if (t.from == t.to && t.from < o.from || t.from > o.to) {
    let a = t.from < o.from ? -1 : 1, h = a < 0 ? o.from : o.to, c = _t(s.facet(ee).map((f) => f(n)), h, a);
    t.from == c && (r = c);
  }
  if (r > -1)
    i = {
      changes: t,
      selection: S.cursor(t.from + t.insert.length, -1)
    };
  else if (t.from >= o.from && t.to <= o.to && t.to - t.from >= (o.to - o.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && n.inputState.composing < 0) {
    let a = o.from < t.from ? s.sliceDoc(o.from, t.from) : "", h = o.to > t.to ? s.sliceDoc(t.to, o.to) : "";
    i = s.replaceSelection(n.state.toText(a + t.insert.sliceString(0, void 0, n.state.lineBreak) + h));
  } else {
    let a = s.changes(t), h = e && e.main.to <= a.newLength ? e.main : void 0;
    if (s.selection.ranges.length > 1 && (n.inputState.composing >= 0 || n.inputState.compositionPendingChange) && t.to <= o.to + 10 && t.to >= o.to - 10) {
      let c = n.state.sliceDoc(t.from, t.to), f, d = e && an(n, e.main.head);
      if (d) {
        let p = t.insert.length - (t.to - t.from);
        f = { from: d.from, to: d.to - p };
      } else
        f = n.state.doc.lineAt(o.head);
      let u = o.to - t.to;
      i = s.changeByRange((p) => {
        if (p.from == o.from && p.to == o.to)
          return { changes: a, range: h || p.map(a) };
        let g = p.to - u, m = g - c.length;
        if (n.state.sliceDoc(m, g) != c || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        g >= f.from && m <= f.to)
          return { range: p };
        let b = s.changes({ from: m, to: g, insert: t.insert }), y = p.to - o.to;
        return {
          changes: b,
          range: h ? S.range(Math.max(0, h.anchor + y), Math.max(0, h.head + y)) : p.map(b)
        };
      });
    } else
      i = {
        changes: a,
        selection: h && s.selection.replaceRange(h)
      };
  }
  let l = "input.type";
  return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = !1, l += ".compose", n.inputState.compositionFirstChange && (l += ".start", n.inputState.compositionFirstChange = !1)), s.update(i, { userEvent: l, scrollIntoView: !0 });
}
function dn(n, t, e, i) {
  let s = Math.min(n.length, t.length), o = 0;
  for (; o < s && n.charCodeAt(o) == t.charCodeAt(o); )
    o++;
  if (o == s && n.length == t.length)
    return null;
  let r = n.length, l = t.length;
  for (; r > 0 && l > 0 && n.charCodeAt(r - 1) == t.charCodeAt(l - 1); )
    r--, l--;
  if (i == "end") {
    let a = Math.max(0, o - Math.min(r, l));
    e -= r + a - o;
  }
  if (r < o && n.length < t.length) {
    let a = e <= o && e >= r ? o - e : 0;
    o -= a, l = o + (l - r), r = o;
  } else if (l < o) {
    let a = e <= o && e >= l ? o - e : 0;
    o -= a, r = o + (r - l), l = o;
  }
  return { from: o, toA: r, toB: l };
}
function Xo(n) {
  let t = [];
  if (n.root.activeElement != n.contentDOM)
    return t;
  let { anchorNode: e, anchorOffset: i, focusNode: s, focusOffset: o } = n.observer.selectionRange;
  return e && (t.push(new Ui(e, i)), (s != e || o != i) && t.push(new Ui(s, o))), t;
}
function Go(n, t) {
  if (n.length == 0)
    return null;
  let e = n[0].pos, i = n.length == 2 ? n[1].pos : e;
  return e > -1 && i > -1 ? S.single(e + t, i + t) : null;
}
function Me(n, t) {
  return t.head == n.main.head && t.anchor == n.main.anchor;
}
class $o {
  setSelectionOrigin(t) {
    this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
  }
  constructor(t) {
    this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.touchActive = !1, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.lastIOSMomentumScroll = 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, w.safari && t.contentDOM.addEventListener("input", () => null), w.gecko && fr(t.contentDOM.ownerDocument);
  }
  handleEvent(t) {
    !nr(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(t.type, t)) : this.runHandlers(t.type, t));
  }
  runHandlers(t, e) {
    let i = this.handlers[t];
    if (i) {
      for (let s of i.observers)
        s(this.view, e);
      for (let s of i.handlers) {
        if (e.defaultPrevented)
          break;
        if (s(this.view, e)) {
          e.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t) {
    let e = Qo(t), i = this.handlers, s = this.view.contentDOM;
    for (let o in e)
      if (o != "scroll") {
        let r = !e[o].handlers.length, l = i[o];
        l && r != !l.handlers.length && (s.removeEventListener(o, this.handleEvent), l = null), l || s.addEventListener(o, this.handleEvent, { passive: r });
      }
    for (let o in i)
      o != "scroll" && !e[o] && s.removeEventListener(o, this.handleEvent);
    this.handlers = e;
  }
  keydown(t) {
    if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && t.keyCode != 27 && pn.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), w.android && w.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8))
      return this.view.observer.delayAndroidKey(t.key, t.keyCode), !0;
    if (w.ios && !t.synthetic && !t.altKey && !t.metaKey && (un.some((e) => e.keyCode == t.keyCode) && !t.ctrlKey || Jo.indexOf(t.key) > -1 && t.ctrlKey)) {
      let e = { ctrlKey: t.ctrlKey, altKey: t.altKey, metaKey: t.metaKey, shiftKey: t.shiftKey };
      return e.shiftKey && w.ios && !/^(off|none)$/.test(this.view.contentDOM.autocapitalize) && Uo(this.view.win) && (e.shiftKey = !1), this.pendingIOSKey = { key: t.key, keyCode: t.keyCode, mods: e }, setTimeout(() => this.flushIOSKey(), 50), !0;
    }
    return t.keyCode != 229 && this.view.observer.forceFlush(), !1;
  }
  flushIOSKey(t) {
    let e = this.pendingIOSKey;
    return !e || this.view.observer.pendingRecords().length || e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Lt(this.view.contentDOM, e.key, e.keyCode, e.mods));
  }
  ignoreDuringComposition(t) {
    return !/^key/.test(t.type) || t.synthetic ? !1 : this.composing > 0 ? !0 : w.safari && !w.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
  }
  startMouseSelection(t) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t;
  }
  update(t) {
    this.view.observer.update(t), this.mouseSelection && this.mouseSelection.update(t), this.draggedContent && t.docChanged && (this.draggedContent = this.draggedContent.map(t.changes)), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Uo(n) {
  return n.visualViewport ? n.visualViewport.height * n.visualViewport.scale / n.document.documentElement.clientHeight < 0.85 : !1;
}
function Qi(n, t) {
  return (e, i) => {
    try {
      return t.call(n, i, e);
    } catch (s) {
      $(e.state, s);
    }
  };
}
function Qo(n) {
  let t = /* @__PURE__ */ Object.create(null);
  function e(i) {
    return t[i] || (t[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let s = i.spec, o = s && s.plugin.domEventHandlers, r = s && s.plugin.domEventObservers;
    if (o)
      for (let l in o) {
        let a = o[l];
        a && e(l).handlers.push(Qi(i.value, a));
      }
    if (r)
      for (let l in r) {
        let a = r[l];
        a && e(l).observers.push(Qi(i.value, a));
      }
  }
  for (let i in U)
    e(i).handlers.push(U[i]);
  for (let i in z)
    e(i).observers.push(z[i]);
  return t;
}
const un = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Jo = "dthko", pn = [16, 17, 18, 20, 91, 92, 224, 225], re = 6;
function le(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function Zo(n, t) {
  return Math.max(Math.abs(n.clientX - t.clientX), Math.abs(n.clientY - t.clientY));
}
class tr {
  constructor(t, e, i, s) {
    this.view = t, this.startEvent = e, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = Bs(t.contentDOM), this.atoms = t.state.facet(ee).map((r) => r(t));
    let o = t.contentDOM.ownerDocument;
    o.addEventListener("mousemove", this.move = this.move.bind(this)), o.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(It.allowMultipleSelections) && er(t, e), this.dragging = sr(t, e) && bn(e) == 1 ? null : !1;
  }
  start(t) {
    this.dragging === !1 && this.select(t);
  }
  move(t) {
    if (t.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Zo(this.startEvent, t) < 10)
      return;
    this.select(this.lastEvent = t);
    let e = 0, i = 0, s = 0, o = 0, r = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: r } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: o, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Li(this.view);
    t.clientX - a.left <= s + re ? e = -le(s - t.clientX) : t.clientX + a.right >= r - re && (e = le(t.clientX - r)), t.clientY - a.top <= o + re ? i = -le(o - t.clientY) : t.clientY + a.bottom >= l - re && (i = le(t.clientY - l)), this.setScrollSpeed(e, i);
  }
  up(t) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t = this.view.contentDOM.ownerDocument;
    t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t, e) {
    this.scrollSpeed = { x: t, y: e }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: t, y: e } = this.scrollSpeed;
    t && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t, t = 0), e && this.scrollParents.y && (this.scrollParents.y.scrollTop += e, e = 0), (t || e) && this.view.win.scrollBy(t, e), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(t) {
    let { view: e } = this, i = hn(this.atoms, this.style.get(t, this.extend, this.multiple));
    (this.mustSelect || !i.eq(e.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(t) {
    t.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function er(n, t) {
  let e = n.state.facet(js);
  return e.length ? e[0](t) : w.mac ? t.metaKey : t.ctrlKey;
}
function ir(n, t) {
  let e = n.state.facet(Xs);
  return e.length ? e[0](t) : w.mac ? !t.altKey : !t.ctrlKey;
}
function sr(n, t) {
  let { main: e } = n.state.selection;
  if (e.empty)
    return !1;
  let i = Gt(n.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let s = i.getRangeAt(0).getClientRects();
  for (let o = 0; o < s.length; o++) {
    let r = s[o];
    if (r.left <= t.clientX && r.right >= t.clientX && r.top <= t.clientY && r.bottom >= t.clientY)
      return !0;
  }
  return !1;
}
function nr(n, t) {
  if (!t.bubbles)
    return !0;
  if (t.defaultPrevented)
    return !1;
  for (let e = t.target, i; e != n.contentDOM; e = e.parentNode)
    if (!e || e.nodeType == 11 || (i = B.get(e)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(t))
      return !1;
  return !0;
}
const U = /* @__PURE__ */ Object.create(null), z = /* @__PURE__ */ Object.create(null), gn = w.ie && w.ie_version < 15 || w.ios && w.webkit_version < 604;
function or(n) {
  let t = n.dom.parentNode;
  if (!t)
    return;
  let e = t.appendChild(document.createElement("textarea"));
  e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
    n.focus(), e.remove(), mn(n, e.value);
  }, 50);
}
function He(n, t, e) {
  for (let i of n.facet(t))
    e = i(e, n);
  return e;
}
function mn(n, t) {
  t = He(n.state, Ti, t);
  let { state: e } = n, i, s = 1, o = e.toText(t), r = o.lines == e.selection.ranges.length;
  if (hi != null && e.selection.ranges.every((a) => a.empty) && hi == o.toString()) {
    let a = -1;
    i = e.changeByRange((h) => {
      let c = e.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let f = e.toText((r ? o.line(s++).text : t) + e.lineBreak);
      return {
        changes: { from: c.from, insert: f },
        range: S.cursor(h.from + f.length)
      };
    });
  } else r ? i = e.changeByRange((a) => {
    let h = o.line(s++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: S.cursor(a.from + h.length)
    };
  }) : i = e.replaceSelection(o);
  n.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
z.scroll = (n) => {
  let t = n.inputState;
  t.lastScrollTop = n.scrollDOM.scrollTop, t.lastScrollLeft = n.scrollDOM.scrollLeft, w.ios && !t.touchActive && (t.lastIOSMomentumScroll = Date.now());
};
z.wheel = z.mousewheel = (n) => {
  n.inputState.lastWheelEvent = Date.now();
};
U.keydown = (n, t) => (n.inputState.setSelectionOrigin("select"), t.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3), !1);
z.touchstart = (n, t) => {
  let e = n.inputState, i = t.targetTouches[0];
  e.touchActive = !0, e.lastTouchTime = Date.now(), i && (e.lastTouchX = i.clientX, e.lastTouchY = i.clientY), e.setSelectionOrigin("select.pointer");
};
z.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
z.touchend = (n, t) => {
  n.inputState.touchActive = !1;
};
U.mousedown = (n, t) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let e = null;
  for (let i of n.state.facet(Gs))
    if (e = i(n, t), e)
      break;
  if (!e && t.button == 0 && (e = lr(n, t)), e) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new tr(n, t, e, i)), i && n.observer.ignore(() => {
      Ps(n.contentDOM);
      let o = n.root.activeElement;
      o && !o.contains(n.contentDOM) && o.blur();
    });
    let s = n.inputState.mouseSelection;
    if (s)
      return s.start(t), s.dragging === !1;
  } else
    n.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function Ji(n, t, e, i) {
  if (i == 1)
    return S.cursor(t, e);
  if (i == 2)
    return Wo(n.state, t, e);
  {
    let s = n.docView.lineAt(t, e), o = n.state.doc.lineAt(s ? s.posAtEnd : t), r = s ? s.posAtStart : o.from, l = s ? s.posAtEnd : o.to;
    return l < n.state.doc.length && l == o.to && l++, S.undirectionalRange(r, l);
  }
}
const rr = w.ie && w.ie_version <= 11;
let Zi = null, ts = 0, es = 0;
function bn(n) {
  if (!rr)
    return n.detail;
  let t = Zi, e = es;
  return Zi = n, es = Date.now(), ts = !t || e > Date.now() - 400 && Math.abs(t.clientX - n.clientX) < 2 && Math.abs(t.clientY - n.clientY) < 2 ? (ts + 1) % 3 : 1;
}
function lr(n, t) {
  let e = n.posAndSideAtCoords({ x: t.clientX, y: t.clientY }, !1), i = bn(t), s = n.state.selection;
  return {
    update(o) {
      o.docChanged && (e.pos = o.changes.mapPos(e.pos), s = s.map(o.changes));
    },
    get(o, r, l) {
      let a = n.posAndSideAtCoords({ x: o.clientX, y: o.clientY }, !1), h, c = Ji(n, a.pos, a.assoc, i);
      if (e.pos != a.pos && !r) {
        let f = Ji(n, e.pos, e.assoc, i), d = Math.min(f.from, c.from), u = Math.max(f.to, c.to);
        c = d < c.from ? S.range(d, u, c.assoc) : S.range(u, d, c.assoc);
      }
      return r ? s.replaceRange(s.main.extend(c.from, c.to, c.assoc)) : l && i == 1 && s.ranges.length > 1 && (h = ar(s, a.pos)) ? h : l ? s.addRange(c) : S.create([c]);
    }
  };
}
function ar(n, t) {
  for (let e = 0; e < n.ranges.length; e++) {
    let { from: i, to: s } = n.ranges[e];
    if (i <= t && s >= t)
      return S.create(n.ranges.slice(0, e).concat(n.ranges.slice(e + 1)), n.mainIndex == e ? 0 : n.mainIndex - (n.mainIndex > e ? 1 : 0));
  }
  return null;
}
U.dragstart = (n, t) => {
  let { selection: { main: e } } = n.state;
  if (t.target.draggable) {
    let s = n.docView.tile.nearest(t.target);
    if (s && s.isWidget()) {
      let o = s.posAtStart, r = o + s.length;
      (o >= e.to || r <= e.from) && (e = S.undirectionalRange(o, r));
    }
  }
  let { inputState: i } = n;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", He(n.state, Di, n.state.sliceDoc(e.from, e.to))), t.dataTransfer.effectAllowed = "copyMove"), !1;
};
U.dragend = (n) => (n.inputState.draggedContent = null, !1);
function is(n, t, e, i) {
  if (e = He(n.state, Ti, e), !e)
    return;
  let s = n.posAtCoords({ x: t.clientX, y: t.clientY }, !1), { draggedContent: o } = n.inputState, r = i && o && ir(n, t) ? { from: o.from, to: o.to } : null, l = { from: s, insert: e }, a = n.state.changes(r ? [r, l] : l);
  n.focus(), n.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
    userEvent: r ? "move.drop" : "input.drop"
  }), n.inputState.draggedContent = null;
}
U.drop = (n, t) => {
  if (!t.dataTransfer)
    return !1;
  if (n.state.readOnly)
    return !0;
  let e = t.dataTransfer.files;
  if (e && e.length) {
    let i = Array(e.length), s = 0, o = () => {
      ++s == e.length && is(n, t, i.filter((r) => r != null).join(n.state.lineBreak), !1);
    };
    for (let r = 0; r < e.length; r++) {
      let l = new FileReader();
      l.onerror = o, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[r] = l.result), o();
      }, l.readAsText(e[r]);
    }
    return !0;
  } else {
    let i = t.dataTransfer.getData("Text");
    if (i)
      return is(n, t, i, !0), !0;
  }
  return !1;
};
U.paste = (n, t) => {
  if (n.state.readOnly)
    return !0;
  n.observer.flush();
  let e = gn ? null : t.clipboardData;
  return e ? (mn(n, e.getData("text/plain") || e.getData("text/uri-list")), !0) : (or(n), !1);
};
function hr(n, t) {
  let e = n.dom.parentNode;
  if (!e)
    return;
  let i = e.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = t, i.focus(), i.selectionEnd = t.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function cr(n) {
  let t = [], e = [], i = !1;
  for (let s of n.selection.ranges)
    s.empty || (t.push(n.sliceDoc(s.from, s.to)), e.push(s));
  if (!t.length) {
    let s = -1;
    for (let { from: o } of n.selection.ranges) {
      let r = n.doc.lineAt(o);
      r.number > s && (t.push(r.text), e.push({ from: r.from, to: Math.min(n.doc.length, r.to + 1) })), s = r.number;
    }
    i = !0;
  }
  return { text: He(n, Di, t.join(n.lineBreak)), ranges: e, linewise: i };
}
let hi = null;
U.copy = U.cut = (n, t) => {
  if (!zt(n.contentDOM, n.observer.selectionRange))
    return !1;
  let { text: e, ranges: i, linewise: s } = cr(n.state);
  if (!e && !s)
    return !1;
  hi = s ? e : null, t.type == "cut" && !n.state.readOnly && n.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let o = gn ? null : t.clipboardData;
  return o ? (o.clearData(), o.setData("text/plain", e), !0) : (hr(n, e), !1);
};
const wn = /* @__PURE__ */ Yn.define();
function yn(n, t) {
  let e = [];
  for (let i of n.facet(Qs)) {
    let s = i(n, t);
    s && e.push(s);
  }
  return e.length ? n.update({ effects: e, annotations: wn.of(!0) }) : null;
}
function xn(n) {
  setTimeout(() => {
    let t = n.hasFocus;
    if (t != n.inputState.notifiedFocused) {
      let e = yn(n.state, t);
      e ? n.dispatch(e) : n.update([]);
    }
  }, 10);
}
z.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), xn(n);
};
z.blur = (n) => {
  n.observer.clearSelectionRange(), xn(n);
};
z.compositionstart = z.compositionupdate = (n) => {
  n.observer.editContext || (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0), n.inputState.composing < 0 && (n.inputState.composing = 0));
};
z.compositionend = (n) => {
  n.observer.editContext || (n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = !0, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, w.chrome && w.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50));
};
z.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
U.beforeinput = (n, t) => {
  var e, i;
  if ((t.inputType == "insertText" || t.inputType == "insertCompositionText") && (n.inputState.insertingText = t.data, n.inputState.insertingTextAt = Date.now()), t.inputType == "insertReplacementText" && n.observer.editContext) {
    let o = (e = t.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain"), r = t.getTargetRanges();
    if (o && r.length) {
      let l = r[0], a = n.posAtDOM(l.startContainer, l.startOffset), h = n.posAtDOM(l.endContainer, l.endOffset);
      return Ri(n, { from: a, to: h, insert: n.state.toText(o) }, null), !0;
    }
  }
  let s;
  if (w.chrome && w.android && (s = un.find((o) => o.inputType == t.inputType)) && (n.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let o = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var r;
      (((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > o + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return w.ios && t.inputType == "deleteContentForward" && n.observer.flushSoon(), w.safari && t.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => z.compositionend(n, t), 20), !1;
};
const ss = /* @__PURE__ */ new Set();
function fr(n) {
  ss.has(n) || (ss.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const ns = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let vt = !1;
function ci() {
  vt = !1;
}
class vn {
  constructor(t) {
    this.lineWrapping = t, this.doc = j.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(t, e) {
    let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((e - t - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(t) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t) {
    return this.doc = t, this;
  }
  mustRefreshForWrapping(t) {
    return ns.indexOf(t) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t) {
    let e = !1;
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (e = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return e;
  }
  refresh(t, e, i, s, o, r) {
    let l = ns.indexOf(t) > -1, a = Math.abs(e - this.lineHeight) > 0.3 || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = e, this.charWidth = i, this.textHeight = s, this.lineLength = o, a) {
      this.heightSamples = {};
      for (let h = 0; h < r.length; h++) {
        let c = r[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return a;
  }
}
class Sn {
  constructor(t, e) {
    this.from = t, this.heights = e, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Y {
  /**
  @internal
  */
  constructor(t, e, i, s, o) {
    this.from = t, this.length = e, this.top = i, this.height = s, this._content = o;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? P.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof wt ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(t) {
    let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
    return new Y(this.from, this.length + t.length, this.top, this.height + t.height, e);
  }
}
var D = /* @__PURE__ */ (function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
})(D || (D = {}));
const me = 1e-3;
class F {
  constructor(t, e, i = 2) {
    this.length = t, this.height = e, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(t) {
    this.flags = (t ? 2 : 0) | this.flags & -3;
  }
  setHeight(t) {
    this.height != t && (Math.abs(this.height - t) > me && (vt = !0), this.height = t);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(t, e, i) {
    return F.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(t, e) {
    e.push(this);
  }
  decomposeRight(t, e) {
    e.push(this);
  }
  applyChanges(t, e, i, s) {
    let o = this, r = i.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = s[l], d = o.lineAt(a, D.ByPosNoHeight, i.setDoc(e), 0, 0), u = d.to >= h ? d : o.lineAt(h, D.ByPosNoHeight, i, 0, 0);
      for (f += u.to - h, h = u.to; l > 0 && d.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, c = s[l - 1].fromB, l--, a < d.from && (d = o.lineAt(a, D.ByPosNoHeight, i, 0, 0));
      c += d.from - a, a = d.from;
      let p = Bi.build(i.setDoc(r), t, c, f);
      o = Ae(o, o.replace(a, h, p));
    }
    return o.updateHeight(i, 0);
  }
  static empty() {
    return new q(0, 0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(t) {
    if (t.length == 1)
      return t[0];
    let e = 0, i = t.length, s = 0, o = 0;
    for (; ; )
      if (e == i)
        if (s > o * 2) {
          let l = t[e - 1];
          l.break ? t.splice(--e, 1, l.left, null, l.right) : t.splice(--e, 1, l.left, l.right), i += 1 + l.break, s -= l.size;
        } else if (o > s * 2) {
          let l = t[i];
          l.break ? t.splice(i, 1, l.left, null, l.right) : t.splice(i, 1, l.left, l.right), i += 2 + l.break, o -= l.size;
        } else
          break;
      else if (s < o) {
        let l = t[e++];
        l && (s += l.size);
      } else {
        let l = t[--i];
        l && (o += l.size);
      }
    let r = 0;
    return t[e - 1] == null ? (r = 1, e--) : t[e] == null && (r = 1, i++), new ur(F.of(t.slice(0, e)), r, F.of(t.slice(i)));
  }
}
function Ae(n, t) {
  return n == t ? n : (n.constructor != t.constructor && (vt = !0), t);
}
F.prototype.size = 1;
const dr = /* @__PURE__ */ L.replace({});
class Cn extends F {
  constructor(t, e, i) {
    super(t, e), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(t, e) {
    return new Y(e, this.length, t + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(t, e, i, s) {
    return this.spaceAbove && t < i + this.spaceAbove ? new Y(s, 0, i, this.spaceAbove, dr) : this.mainBlock(i, s);
  }
  lineAt(t, e, i, s, o) {
    let r = this.mainBlock(s, o);
    return this.spaceAbove ? this.blockAt(0, i, s, o).join(r) : r;
  }
  forEachLine(t, e, i, s, o, r) {
    t <= o + this.length && e >= o && r(this.lineAt(0, D.ByPos, i, s, o));
  }
  setMeasuredHeight(t) {
    let e = t.heights[t.index++];
    e < 0 ? (this.spaceAbove = -e, e = t.heights[t.index++]) : this.spaceAbove = 0, this.setHeight(e);
  }
  updateHeight(t, e = 0, i = !1, s) {
    return s && s.from <= e && s.more && this.setMeasuredHeight(s), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class q extends Cn {
  constructor(t, e, i) {
    super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = i;
  }
  mainBlock(t, e) {
    return new Y(e, this.length, t + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(t, e, i) {
    let s = i[0];
    return i.length == 1 && (s instanceof q || s instanceof N && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof N ? s = new q(s.length, this.height, this.spaceAbove) : s.height = this.height, this.outdated || (s.outdated = !1), s) : F.of(i);
  }
  updateHeight(t, e = 0, i = !1, s) {
    return s && s.from <= e && s.more ? this.setMeasuredHeight(s) : (i || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight)), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class N extends F {
  constructor(t) {
    super(t, 0);
  }
  heightMetrics(t, e) {
    let i = t.doc.lineAt(e).number, s = t.doc.lineAt(e + this.length).number, o = s - i + 1, r, l = 0;
    if (t.lineWrapping) {
      let a = Math.min(this.height, t.lineHeight * o);
      r = a / o, this.length > o + 1 && (l = (this.height - a) / (this.length - o - 1));
    } else
      r = this.height / o;
    return { firstLine: i, lastLine: s, perLine: r, perChar: l };
  }
  blockAt(t, e, i, s) {
    let { firstLine: o, lastLine: r, perLine: l, perChar: a } = this.heightMetrics(e, s);
    if (e.lineWrapping) {
      let h = s + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length)), c = e.doc.lineAt(h), f = l + c.length * a, d = Math.max(i, t - f / 2);
      return new Y(c.from, c.length, d, f, 0);
    } else {
      let h = Math.max(0, Math.min(r - o, Math.floor((t - i) / l))), { from: c, length: f } = e.doc.line(o + h);
      return new Y(c, f, i + l * h, l, 0);
    }
  }
  lineAt(t, e, i, s, o) {
    if (e == D.ByHeight)
      return this.blockAt(t, i, s, o);
    if (e == D.ByPosNoHeight) {
      let { from: u, to: p } = i.doc.lineAt(t);
      return new Y(u, p - u, 0, 0, 0);
    }
    let { firstLine: r, perLine: l, perChar: a } = this.heightMetrics(i, o), h = i.doc.lineAt(t), c = l + h.length * a, f = h.number - r, d = s + l * f + a * (h.from - o - f);
    return new Y(h.from, h.length, Math.max(s, Math.min(d, s + this.height - c)), c, 0);
  }
  forEachLine(t, e, i, s, o, r) {
    t = Math.max(t, o), e = Math.min(e, o + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, o);
    for (let c = t, f = s; c <= e; ) {
      let d = i.doc.lineAt(c);
      if (c == t) {
        let p = d.number - l;
        f += a * p + h * (t - o - p);
      }
      let u = a + h * d.length;
      r(new Y(d.from, d.length, f, u, 0)), f += u, c = d.to + 1;
    }
  }
  replace(t, e, i) {
    let s = this.length - e;
    if (s > 0) {
      let o = i[i.length - 1];
      o instanceof N ? i[i.length - 1] = new N(o.length + s) : i.push(null, new N(s - 1));
    }
    if (t > 0) {
      let o = i[0];
      o instanceof N ? i[0] = new N(t + o.length) : i.unshift(new N(t - 1), null);
    }
    return F.of(i);
  }
  decomposeLeft(t, e) {
    e.push(new N(t - 1), null);
  }
  decomposeRight(t, e) {
    e.push(null, new N(this.length - t - 1));
  }
  updateHeight(t, e = 0, i = !1, s) {
    let o = e + this.length;
    if (s && s.from <= e + this.length && s.more) {
      let r = [], l = Math.max(e, s.from), a = -1;
      for (s.from > e && r.push(new N(s.from - e - 1).updateHeight(t, e)); l <= o && s.more; ) {
        let c = t.doc.lineAt(l).length;
        r.length && r.push(null);
        let f = s.heights[s.index++], d = 0;
        f < 0 && (d = -f, f = s.heights[s.index++]), a == -1 ? a = f : Math.abs(f - a) >= me && (a = -2);
        let u = new q(c, f, d);
        u.outdated = !1, r.push(u), l += c + 1;
      }
      l <= o && r.push(null, new N(o - l).updateHeight(t, l));
      let h = F.of(r);
      return (a < 0 || Math.abs(h.height - this.height) >= me || Math.abs(a - this.heightMetrics(t, e).perLine) >= me) && (vt = !0), Ae(this, h);
    } else (i || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class ur extends F {
  constructor(t, e, i) {
    super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(t, e, i, s) {
    let o = i + this.left.height;
    return t < o ? this.left.blockAt(t, e, i, s) : this.right.blockAt(t, e, o, s + this.left.length + this.break);
  }
  lineAt(t, e, i, s, o) {
    let r = s + this.left.height, l = o + this.left.length + this.break, a = e == D.ByHeight ? t < r : t < l, h = a ? this.left.lineAt(t, e, i, s, o) : this.right.lineAt(t, e, i, r, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = e == D.ByPosNoHeight ? D.ByPosNoHeight : D.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, r, l)) : this.left.lineAt(l, c, i, s, o).join(h);
  }
  forEachLine(t, e, i, s, o, r) {
    let l = s + this.left.height, a = o + this.left.length + this.break;
    if (this.break)
      t < a && this.left.forEachLine(t, e, i, s, o, r), e >= a && this.right.forEachLine(t, e, i, l, a, r);
    else {
      let h = this.lineAt(a, D.ByPos, i, s, o);
      t < h.from && this.left.forEachLine(t, h.from - 1, i, s, o, r), h.to >= t && h.from <= e && r(h), e > h.to && this.right.forEachLine(h.to + 1, e, i, l, a, r);
    }
  }
  replace(t, e, i) {
    let s = this.left.length + this.break;
    if (e < s)
      return this.balanced(this.left.replace(t, e, i), this.right);
    if (t > this.left.length)
      return this.balanced(this.left, this.right.replace(t - s, e - s, i));
    let o = [];
    t > 0 && this.decomposeLeft(t, o);
    let r = o.length;
    for (let l of i)
      o.push(l);
    if (t > 0 && os(o, r - 1), e < this.length) {
      let l = o.length;
      this.decomposeRight(e, o), os(o, l);
    }
    return F.of(o);
  }
  decomposeLeft(t, e) {
    let i = this.left.length;
    if (t <= i)
      return this.left.decomposeLeft(t, e);
    e.push(this.left), this.break && (i++, t >= i && e.push(null)), t > i && this.right.decomposeLeft(t - i, e);
  }
  decomposeRight(t, e) {
    let i = this.left.length, s = i + this.break;
    if (t >= s)
      return this.right.decomposeRight(t - s, e);
    t < i && this.left.decomposeRight(t, e), this.break && t < s && e.push(null), e.push(this.right);
  }
  balanced(t, e) {
    return t.size > 2 * e.size || e.size > 2 * t.size ? F.of(this.break ? [t, null, e] : [t, e]) : (this.left = Ae(this.left, t), this.right = Ae(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
  }
  updateHeight(t, e = 0, i = !1, s) {
    let { left: o, right: r } = this, l = e + o.length + this.break, a = null;
    return s && s.from <= e + o.length && s.more ? a = o = o.updateHeight(t, e, i, s) : o.updateHeight(t, e, i), s && s.from <= l + r.length && s.more ? a = r = r.updateHeight(t, l, i, s) : r.updateHeight(t, l, i), a ? this.balanced(o, r) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function os(n, t) {
  let e, i;
  n[t] == null && (e = n[t - 1]) instanceof N && (i = n[t + 1]) instanceof N && n.splice(t - 1, 3, new N(e.length + 1 + i.length));
}
const pr = 5;
class Bi {
  constructor(t, e) {
    this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t, e) {
    if (this.lineStart > -1) {
      let i = Math.min(e, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof q ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new q(i - this.pos, -1, 0)), this.writtenTo = i, e > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e;
  }
  point(t, e, i) {
    if (t < e || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0, o = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let r = e - t;
      i.block ? this.addBlock(new Cn(r, s, i)) : (r || o || s >= pr) && this.addLineDeco(s, o, r);
    } else e > t && this.span(t, e);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new q(this.pos - t, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(t, e) {
    let i = new N(e - t);
    return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t instanceof q)
      return t;
    let e = new q(0, -1, 0);
    return this.nodes.push(e), e;
  }
  addBlock(t) {
    this.enterLine();
    let e = t.deco;
    e && e.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, e && e.endSide > 0 && (this.covering = t);
  }
  addLineDeco(t, e, i) {
    let s = this.ensureLine();
    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, t), s.breaks += e, this.writtenTo = this.pos = this.pos + i;
  }
  finish(t) {
    let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(e instanceof q) && !this.isCovered ? this.nodes.push(new q(0, -1, 0)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = t;
    for (let s of this.nodes)
      s instanceof q && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(t, e, i, s) {
    let o = new Bi(i, t);
    return E.spans(e, i, s, o, 0), o.finish(i);
  }
}
function gr(n, t, e) {
  let i = new mr();
  return E.compare(n, t, e, i, 0), i.changes;
}
class mr {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t, e, i, s) {
    (t < e || i && i.heightRelevant || s && s.heightRelevant) && Ot(t, e, this.changes, 5);
  }
}
function br(n, t) {
  let e = n.getBoundingClientRect(), i = n.ownerDocument, s = i.defaultView || window, o = Math.max(0, e.left), r = Math.min(s.innerWidth, e.right), l = Math.max(0, e.top), a = Math.min(s.innerHeight, e.bottom);
  for (let h = n.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h, f = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
        let d = c.getBoundingClientRect();
        o = Math.max(o, d.left), r = Math.min(r, d.right), l = Math.max(l, d.top), a = Math.min(h == n.parentNode ? s.innerHeight : a, d.bottom);
      }
      h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: o - e.left,
    right: Math.max(o, r) - e.left,
    top: l - (e.top + t),
    bottom: Math.max(l, a) - (e.top + t)
  };
}
function wr(n) {
  let t = n.getBoundingClientRect(), e = n.ownerDocument.defaultView || window;
  return t.left < e.innerWidth && t.right > 0 && t.top < e.innerHeight && t.bottom > 0;
}
function yr(n, t) {
  let e = n.getBoundingClientRect();
  return {
    left: 0,
    right: e.right - e.left,
    top: t,
    bottom: e.bottom - (e.top + t)
  };
}
class Ye {
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.size = i, this.displaySize = s;
  }
  static same(t, e) {
    if (t.length != e.length)
      return !1;
    for (let i = 0; i < t.length; i++) {
      let s = t[i], o = e[i];
      if (s.from != o.from || s.to != o.to || s.size != o.size)
        return !1;
    }
    return !0;
  }
  draw(t, e) {
    return L.replace({
      widget: new xr(this.displaySize * (e ? t.scaleY : t.scaleX), e)
    }).range(this.from, this.to);
  }
}
class xr extends dt {
  constructor(t, e) {
    super(), this.size = t, this.vertical = e;
  }
  eq(t) {
    return t.size == this.size && t.vertical == this.vertical;
  }
  toDOM() {
    let t = document.createElement("div");
    return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class rs {
  constructor(t, e) {
    this.view = t, this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = ls, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = R.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let i = e.facet(Le).some((s) => typeof s != "function" && s.class == "cm-lineWrapping");
    this.heightOracle = new vn(i), this.stateDeco = as(e), this.heightMap = F.empty().applyChanges(this.stateDeco, j.empty, this.heightOracle.setDoc(e.doc), [new _(0, 0, 0, e.doc.length)]);
    for (let s = 0; s < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); s++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = L.set(this.lineGaps.map((s) => s.draw(this, !1))), this.scrollParent = t.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let t = [this.viewport], { main: e } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? e.head : e.anchor;
      if (!t.some(({ from: o, to: r }) => s >= o && s <= r)) {
        let { from: o, to: r } = this.lineBlockAt(s);
        t.push(new ae(o, r));
      }
    }
    return this.viewports = t.sort((i, s) => i.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let t = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? ls : new Ei(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
      this.viewportLines.push(Vt(t, this.scaler));
    });
  }
  update(t, e = null) {
    this.state = t.state;
    let i = this.stateDeco;
    this.stateDeco = as(this.state);
    let s = t.changedRanges, o = _.extendWithRanges(s, gr(i, this.stateDeco, t ? t.changes : As.empty(this.state.doc.length))), r = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    ci(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), o), (this.heightMap.height != r || vt) && (t.flags |= 2), l ? (this.scrollAnchorPos = t.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = r);
    let a = o.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
    (e && (e.range.head < a.from || e.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, e));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, t.flags |= this.updateForViewport(), (h || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(t.changes), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && (t.selectionSet || t.focusChanged) && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(Zs) && (this.mustEnforceCursorAssoc = !0);
  }
  measure() {
    let { view: t } = this, e = t.contentDOM, i = window.getComputedStyle(e), s = this.heightOracle, o = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? R.RTL : R.LTR;
    let r = this.heightOracle.mustRefreshForWrapping(o) || this.mustMeasureContent === "refresh", l = e.getBoundingClientRect(), a = r || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: k, scaleY: v } = Rs(e, l);
      (k > 5e-3 && Math.abs(this.scaleX - k) > 5e-3 || v > 5e-3 && Math.abs(this.scaleY - v) > 5e-3) && (this.scaleX = k, this.scaleY = v, h |= 16, r = a = !0);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, d = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != d) && (this.paddingTop = f, this.paddingBottom = d, h |= 18), this.editorWidth != t.scrollDOM.clientWidth && (s.lineWrapping && (a = !0), this.editorWidth = t.scrollDOM.clientWidth, h |= 16);
    let u = Bs(this.view.contentDOM, !1).y;
    u != this.scrollParent && (this.scrollParent = u, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let p = this.getScrollOffset();
    this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = Ws(this.scrollParent || t.win);
    let g = (this.printing ? yr : br)(e, this.paddingTop), m = g.top - this.pixelViewport.top, b = g.bottom - this.pixelViewport.bottom;
    this.pixelViewport = g;
    let y = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (y != this.inView && (this.inView = y, y && (a = !0)), !this.inView && !this.scrollTarget && !wr(t.dom))
      return 0;
    let x = l.width;
    if ((this.contentDOMWidth != x || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = t.scrollDOM.clientHeight, h |= 16), a) {
      let k = t.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(k) && (r = !0), r || s.lineWrapping && Math.abs(x - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: v, charWidth: T, textHeight: H } = t.docView.measureTextSize();
        r = v > 0 && s.refresh(o, v, T, H, Math.max(5, x / T), k), r && (t.docView.minWidth = 0, h |= 16);
      }
      m > 0 && b > 0 ? c = Math.max(m, b) : m < 0 && b < 0 && (c = Math.min(m, b)), ci();
      for (let v of this.viewports) {
        let T = v.from == this.viewport.from ? k : t.docView.measureVisibleLineHeights(v);
        this.heightMap = (r ? F.empty().applyChanges(this.stateDeco, j.empty, this.heightOracle, [new _(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(s, 0, r, new Sn(v.from, T));
      }
      vt && (h |= 2);
    }
    let A = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return A && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || A) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(r ? [] : this.lineGaps, t)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t, e) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), s = this.heightMap, o = this.heightOracle, { visibleTop: r, visibleBottom: l } = this, a = new ae(s.lineAt(r - i * 1e3, D.ByHeight, o, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, D.ByHeight, o, 0, 0).to);
    if (e) {
      let { head: h } = e.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(h, D.ByPos, o, 0, 0), d;
        e.y == "center" ? d = (f.top + f.bottom) / 2 - c / 2 : e.y == "start" || e.y == "nearest" && h < a.from ? d = f.top : d = f.bottom - c, a = new ae(s.lineAt(d - 1e3 / 2, D.ByHeight, o, 0, 0).from, s.lineAt(d + c + 1e3 / 2, D.ByHeight, o, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(t, e) {
    let i = e.mapPos(t.from, -1), s = e.mapPos(t.to, 1);
    return new ae(this.heightMap.lineAt(i, D.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, D.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: t, to: e }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(t, D.ByPos, this.heightOracle, 0, 0), { bottom: o } = this.heightMap.lineAt(e, D.ByPos, this.heightOracle, 0, 0), { visibleTop: r, visibleBottom: l } = this;
    return (t == 0 || s <= r - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (e == this.state.doc.length || o >= l + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && s > r - 2 * 1e3 && o < l + 2 * 1e3;
  }
  mapLineGaps(t, e) {
    if (!t.length || e.empty)
      return t;
    let i = [];
    for (let s of t)
      e.touchesRange(s.from, s.to) || i.push(new Ye(e.mapPos(s.from), e.mapPos(s.to), s.size, s.displaySize));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(t, e) {
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, o = s >> 1, r = s << 1;
    if (this.defaultTextDirection != R.LTR && !i)
      return [];
    let l = [], a = (c, f, d, u) => {
      if (f - c < o)
        return;
      let p = this.state.selection.main, g = [p.from];
      p.empty || g.push(p.to);
      for (let b of g)
        if (b > c && b < f) {
          a(c, b - 10, d, u), a(b + 10, f, d, u);
          return;
        }
      let m = Sr(t, (b) => b.from >= d.from && b.to <= d.to && Math.abs(b.from - c) < o && Math.abs(b.to - f) < o && !g.some((y) => b.from < y && b.to > y));
      if (!m) {
        if (f < d.to && e && i && e.visibleRanges.some((x) => x.from <= f && x.to >= f)) {
          let x = e.moveToLineBoundary(S.cursor(f), !1, !0).head;
          x > c && (f = x);
        }
        let b = this.gapSize(d, c, f, u), y = i || b < 2e6 ? b : 2e6;
        m = new Ye(c, f, b, y);
      }
      l.push(m);
    }, h = (c) => {
      if (c.length < r || c.type != P.Text)
        return;
      let f = vr(c.from, c.to, this.stateDeco);
      if (f.total < r)
        return;
      let d = this.scrollTarget ? this.scrollTarget.range.head : null, u, p;
      if (i) {
        let g = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, b;
        if (d != null) {
          let y = ce(f, d), x = ((this.visibleBottom - this.visibleTop) / 2 + g) / c.height;
          m = y - x, b = y + x;
        } else
          m = (this.visibleTop - c.top - g) / c.height, b = (this.visibleBottom - c.top + g) / c.height;
        u = he(f, m), p = he(f, b);
      } else {
        let g = f.total * this.heightOracle.charWidth, m = s * this.heightOracle.charWidth, b = 0;
        if (g > 2e6)
          for (let v of t)
            v.from >= c.from && v.from < c.to && v.size != v.displaySize && v.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = v.size - v.displaySize);
        let y = this.pixelViewport.left + b, x = this.pixelViewport.right + b, A, k;
        if (d != null) {
          let v = ce(f, d), T = ((x - y) / 2 + m) / g;
          A = v - T, k = v + T;
        } else
          A = (y - m) / g, k = (x + m) / g;
        u = he(f, A), p = he(f, k);
      }
      u > c.from && a(c.from, u, c, f), p < c.to && a(p, c.to, c, f);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(t, e, i, s) {
    let o = ce(s, i) - ce(s, e);
    return this.heightOracle.lineWrapping ? t.height * o : s.total * this.heightOracle.charWidth * o;
  }
  updateLineGaps(t) {
    Ye.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = L.set(t.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(t) {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let i = [];
    E.spans(e, this.viewport.from, this.viewport.to, {
      span(o, r) {
        i.push({ from: o, to: r });
      },
      point() {
      }
    }, 20);
    let s = 0;
    if (i.length != this.visibleRanges.length)
      s = 12;
    else
      for (let o = 0; o < i.length && !(s & 8); o++) {
        let r = this.visibleRanges[o], l = i[o];
        (r.from != l.from || r.to != l.to) && (s |= 4, t && t.mapPos(r.from, -1) == l.from && t.mapPos(r.to, 1) == l.to || (s |= 8));
      }
    return this.visibleRanges = i, s;
  }
  lineBlockAt(t) {
    return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || Vt(this.heightMap.lineAt(t, D.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t) {
    return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e) => e.top <= t && e.bottom >= t) || Vt(this.heightMap.lineAt(this.scaler.fromDOM(t), D.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop * this.scaleY : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top;
  }
  scrollAnchorAt(t) {
    let e = this.lineBlockAtHeight(t + 8);
    return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
  }
  elementAtHeight(t) {
    return Vt(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class ae {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
function vr(n, t, e) {
  let i = [], s = n, o = 0;
  return E.spans(e, n, t, {
    span() {
    },
    point(r, l) {
      r > s && (i.push({ from: s, to: r }), o += r - s), s = l;
    }
  }, 20), s < t && (i.push({ from: s, to: t }), o += t - s), { total: o, ranges: i };
}
function he({ total: n, ranges: t }, e) {
  if (e <= 0)
    return t[0].from;
  if (e >= 1)
    return t[t.length - 1].to;
  let i = Math.floor(n * e);
  for (let s = 0; ; s++) {
    let { from: o, to: r } = t[s], l = r - o;
    if (i <= l)
      return o + i;
    i -= l;
  }
}
function ce(n, t) {
  let e = 0;
  for (let { from: i, to: s } of n.ranges) {
    if (t <= s) {
      e += t - i;
      break;
    }
    e += s - i;
  }
  return e / n.total;
}
function Sr(n, t) {
  for (let e of n)
    if (t(e))
      return e;
}
const ls = {
  toDOM(n) {
    return n;
  },
  fromDOM(n) {
    return n;
  },
  scale: 1,
  eq(n) {
    return n == this;
  }
};
function as(n) {
  let t = n.facet(Re).filter((i) => typeof i != "function"), e = n.facet(Oi).filter((i) => typeof i != "function");
  return e.length && t.push(E.join(e)), t;
}
class Ei {
  constructor(t, e, i) {
    let s = 0, o = 0, r = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = e.lineAt(l, D.ByPos, t, 0, 0).top, c = e.lineAt(a, D.ByPos, t, 0, 0).bottom;
      return s += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (e.height - s);
    for (let l of this.viewports)
      l.domTop = r + (l.top - o) * this.scale, r = l.domBottom = l.domTop + (l.bottom - l.top), o = l.bottom;
  }
  toDOM(t) {
    for (let e = 0, i = 0, s = 0; ; e++) {
      let o = e < this.viewports.length ? this.viewports[e] : null;
      if (!o || t < o.top)
        return s + (t - i) * this.scale;
      if (t <= o.bottom)
        return o.domTop + (t - o.top);
      i = o.bottom, s = o.domBottom;
    }
  }
  fromDOM(t) {
    for (let e = 0, i = 0, s = 0; ; e++) {
      let o = e < this.viewports.length ? this.viewports[e] : null;
      if (!o || t < o.domTop)
        return i + (t - s) / this.scale;
      if (t <= o.domBottom)
        return o.top + (t - o.domTop);
      i = o.bottom, s = o.domBottom;
    }
  }
  eq(t) {
    return t instanceof Ei ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, i) => e.from == t.viewports[i].from && e.to == t.viewports[i].to) : !1;
  }
}
function Vt(n, t) {
  if (t.scale == 1)
    return n;
  let e = t.toDOM(n.top), i = t.toDOM(n.bottom);
  return new Y(n.from, n.length, e, i - e, Array.isArray(n._content) ? n._content.map((s) => Vt(s, t)) : n._content);
}
const fe = /* @__PURE__ */ C.define({ combine: (n) => n.join(" ") }), fi = /* @__PURE__ */ C.define({ combine: (n) => n.indexOf(!0) > -1 }), di = /* @__PURE__ */ Bt.newName(), kn = /* @__PURE__ */ Bt.newName(), Mn = /* @__PURE__ */ Bt.newName(), An = { "&light": "." + kn, "&dark": "." + Mn };
function ui(n, t, e) {
  return new Bt(t, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (s) => {
        if (s == "&")
          return n;
        if (!e || !e[s])
          throw new RangeError(`Unsupported selector: ${s}`);
        return e[s];
      }) : n + " " + i;
    }
  });
}
const Cr = /* @__PURE__ */ ui("." + di, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // Issue #456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    userSelect: "none",
    // #1708
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-selectionHandle": {
    backgroundColor: "currentColor",
    width: "1.5px"
  },
  ".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
    content: '""',
    backgroundColor: "inherit",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    position: "absolute",
    left: "-3.25px"
  },
  ".cm-selectionHandle-start::before": { top: "-8px" },
  ".cm-selectionHandle-end::before": { bottom: "-8px" },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": { insetInlineStart: 0 },
  ".cm-gutters-after": { insetInlineEnd: 0 },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": { borderRightWidth: "1px" },
    "&.cm-gutters-after": { borderLeftWidth: "1px" }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  ".cm-panels-top": { top: "0" },
  ".cm-panels-bottom": { bottom: "0" },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    background: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 0) no-repeat",
    backgroundSize: ".4em",
    backgroundPosition: "calc(min(50%, 0px)) center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, An), kr = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, je = w.ie && w.ie_version <= 11;
class Mr {
  constructor(t) {
    this.view = t, this.active = !1, this.editContext = null, this.selectionRange = new so(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
      for (let i of e)
        this.queue.push(i);
      (w.ie && w.ie_version <= 11 || w.ios && t.composing) && e.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && w.android && t.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(w.chrome && w.chrome_version < 126) && (this.editContext = new Tr(t), t.state.facet(et) && (t.contentDOM.editContext = this.editContext.editContext)), je && (this.onCharData = (e) => {
      this.queue.push({
        target: e.target,
        type: "characterData",
        oldValue: e.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var e;
      ((e = this.view.docView) === null || e === void 0 ? void 0 : e.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t.scrollDOM)), this.addWindowListeners(this.win = t.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
      e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t) {
    this.view.inputState.runHandlers("scroll", t), this.intersecting && this.view.measure();
  }
  onScroll(t) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(t);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t) {
    (t.type == "change" || !t.type) && !t.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t) {
    if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i) => e != t[i]))) {
      this.gapIntersection.disconnect();
      for (let e of t)
        this.gapIntersection.observe(e);
      this.gaps = t;
    }
  }
  onSelectionChange(t) {
    let e = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, s = this.selectionRange;
    if (i.state.facet(et) ? i.root.activeElement != this.dom : !zt(this.dom, s))
      return;
    let o = s.anchorNode && i.docView.tile.nearest(s.anchorNode);
    if (o && o.isWidget() && o.widget.ignoreEvent(t)) {
      e || (this.selectionChanged = !1);
      return;
    }
    (w.ie && w.ie_version <= 11 || w.android && w.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && qt(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: t } = this, e = Gt(t.root);
    if (!e)
      return !1;
    let i = w.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && Ar(this.view, e) || e;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let s = zt(this.dom, i);
    return s && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && oo(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), s && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(t, e) {
    this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t = 0, e = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = e)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t) {
    if (!this.active)
      return t();
    try {
      return this.stop(), t();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, kr), je && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), je && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(t, e) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let o = this.delayedAndroidKey;
        o && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = o.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && o.force && Lt(this.dom, o.key, o.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = {
      key: t,
      keyCode: e,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let t of this.observer.takeRecords())
      this.queue.push(t);
    return this.queue;
  }
  processRecords() {
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let e = -1, i = -1, s = !1;
    for (let o of t) {
      let r = this.readMutation(o);
      r && (r.typeOver && (s = !0), e == -1 ? { from: e, to: i } = r : (e = Math.min(r.from, e), i = Math.max(r.to, i)));
    }
    return { from: e, to: i, typeOver: s };
  }
  readChange() {
    let { from: t, to: e, typeOver: i } = this.processRecords(), s = this.selectionChanged && zt(this.dom, this.selectionRange);
    if (t < 0 && !s)
      return null;
    t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let o = new Yo(this.view, t, e, i);
    return this.view.docView.domChanged = { newSel: o.newSel ? o.newSel.main : null }, o;
  }
  // Apply pending changes, if any
  flush(t = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    t && this.readSelectionRange();
    let e = this.readChange();
    if (!e)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, s = fn(this.view, e);
    return this.view.state == i && (e.domChanged || e.newSel && !Me(this.view.state.selection, e.newSel.main)) && this.view.update([]), s;
  }
  readMutation(t) {
    let e = this.view.docView.tile.nearest(t.target);
    if (!e || e.isWidget())
      return null;
    if (e.markDirty(t.type == "attributes"), t.type == "childList") {
      let i = hs(e, t.previousSibling || t.target.previousSibling, -1), s = hs(e, t.nextSibling || t.target.nextSibling, 1);
      return {
        from: i ? e.posAfter(i) : e.posAtStart,
        to: s ? e.posBefore(s) : e.posAtEnd,
        typeOver: !1
      };
    } else return t.type == "characterData" ? { from: e.posAtStart, to: e.posAtEnd, typeOver: t.target.nodeValue == t.oldValue } : null;
  }
  setWindow(t) {
    t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win));
  }
  addWindowListeners(t) {
    t.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t) {
    t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(t) {
    this.editContext && (this.editContext.update(t), t.startState.facet(et) != t.state.facet(et) && (t.view.contentDOM.editContext = t.state.facet(et) ? this.editContext.editContext : null));
  }
  destroy() {
    var t, e, i;
    this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function hs(n, t, e) {
  for (; t; ) {
    let i = B.get(t);
    if (i && i.parent == n)
      return i;
    let s = t.parentNode;
    t = s != n.dom ? s : e > 0 ? t.nextSibling : t.previousSibling;
  }
  return null;
}
function cs(n, t) {
  let e = t.startContainer, i = t.startOffset, s = t.endContainer, o = t.endOffset, r = n.docView.domAtPos(n.state.selection.main.anchor, 1);
  return qt(r.node, r.offset, s, o) && ([e, i, s, o] = [s, o, e, i]), { anchorNode: e, anchorOffset: i, focusNode: s, focusOffset: o };
}
function Ar(n, t) {
  if (t.getComposedRanges) {
    let s = t.getComposedRanges(n.root)[0];
    if (s)
      return cs(n, s);
  }
  let e = null;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), e = s.getTargetRanges()[0];
  }
  return n.contentDOM.addEventListener("beforeinput", i, !0), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, !0), e ? cs(n, e) : null;
}
class Tr {
  constructor(t) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t.state);
    let e = this.editContext = new window.EditContext({
      text: t.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(t.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let s = t.state.selection.main, { anchor: o, head: r } = s, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      t.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: !1 });
      let h = a - l > i.text.length;
      l == this.from && o < this.from ? l = o : a == this.to && o > this.to && (a = o);
      let c = dn(t.state.sliceDoc(l, a), i.text, (h ? s.from : s.to) - l, h ? "end" : null);
      if (!c) {
        let d = S.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        Me(d, s) || t.dispatch({ selection: d, userEvent: "select" });
        return;
      }
      let f = {
        from: c.from + l,
        to: c.toA + l,
        insert: j.of(i.text.slice(c.from, c.toB).split(`
`))
      };
      if ((w.mac || w.android) && f.from == r - 1 && /^\. ?$/.test(i.text) && t.contentDOM.getAttribute("autocorrect") == "off" && (f = { from: l, to: a, insert: j.of([i.text.replace(".", " ")]) }), this.pendingContextChange = f, !t.state.readOnly) {
        let d = this.to - this.from + (f.to - f.from + f.insert.length);
        Ri(t, f, S.single(this.toEditorPos(i.selectionStart, d), this.toEditorPos(i.selectionEnd, d)));
      }
      this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state)), f.from < f.to && !f.insert.length && t.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(e.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(e.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let s = [], o = null;
      for (let r = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); r < l; r++) {
        let a = t.coordsForChar(r);
        o = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || o || new DOMRect(), s.push(o);
      }
      e.updateCharacterBounds(i.rangeStart, s);
    }, this.handlers.textformatupdate = (i) => {
      let s = [];
      for (let o of i.getTextFormats()) {
        let r = o.underlineStyle, l = o.underlineThickness;
        if (!/none/i.test(r) && !/none/i.test(l)) {
          let a = this.toEditorPos(o.rangeStart), h = this.toEditorPos(o.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${/^[a-z]/.test(r) ? r + " " : r == "Dashed" ? "dashed " : r == "Squiggle" ? "wavy " : ""}${/thin/i.test(l) ? 1 : 2}px`;
            s.push(L.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      t.dispatch({ effects: en.of(L.set(s)) });
    }, this.handlers.compositionstart = () => {
      t.inputState.composing < 0 && (t.inputState.composing = 0, t.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (t.inputState.composing = -1, t.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(t.state);
      }
    };
    for (let i in this.handlers)
      e.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      let s = Gt(i.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(t) {
    let e = 0, i = !1, s = this.pendingContextChange;
    return t.changes.iterChanges((o, r, l, a, h) => {
      if (i)
        return;
      let c = h.length - (r - o);
      if (s && r >= s.to)
        if (s.from == o && s.to == r && s.insert.eq(h)) {
          s = this.pendingContextChange = null, e += c, this.to += c;
          return;
        } else
          s = null, this.revertPending(t.state);
      if (o += e, r += e, r <= this.from)
        this.from += c, this.to += c;
      else if (o < this.to) {
        if (o < this.from || r > this.to || this.to - this.from + h.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(o), this.toContextPos(r), h.toString()), this.to += c;
      }
      e += c;
    }), s && !i && this.revertPending(t.state), !i;
  }
  update(t) {
    let e = this.pendingContextChange, i = t.startState.selection.main;
    this.composing && (this.composing.drifted || !t.changes.touchesRange(i.from, i.to) && t.transactions.some((s) => !s.isUserEvent("input.type") && s.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = t.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(t) || !this.rangeIsValid(t.state) ? (this.pendingContextChange = null, this.reset(t.state)) : (t.docChanged || t.selectionSet || e) && this.setSelection(t.state), (t.geometryChanged || t.docChanged || t.selectionSet) && t.view.requestMeasure(this.measureReq);
  }
  resetRange(t) {
    let { head: e } = t.selection.main;
    this.from = Math.max(
      0,
      e - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      t.doc.length,
      e + 1e4
      /* CxVp.Margin */
    );
  }
  reset(t) {
    this.resetRange(t), this.editContext.updateText(0, this.editContext.text.length, t.doc.sliceString(this.from, this.to)), this.setSelection(t);
  }
  revertPending(t) {
    let e = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(e.from), this.toContextPos(e.from + e.insert.length), t.doc.sliceString(e.from, e.to));
  }
  setSelection(t) {
    let { main: e } = t.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, e.anchor))), s = this.toContextPos(e.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != s) && this.editContext.updateSelection(i, s);
  }
  rangeIsValid(t) {
    let { head: e } = t.selection.main;
    return !(this.from > 0 && e - this.from < 500 || this.to < t.doc.length && this.to - e < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(t, e = this.to - this.from) {
    t = Math.min(t, e);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (t - i.contextBase) : t + this.from;
  }
  toContextPos(t) {
    let e = this.composing;
    return e && e.drifted ? e.contextBase + (t - e.editorBase) : t - this.from;
  }
  destroy() {
    for (let t in this.handlers)
      this.editContext.removeEventListener(t, this.handlers[t]);
  }
}
class M {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(t = {}) {
    var e;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t.parent && t.parent.appendChild(this.dom);
    let { dispatch: i } = t;
    this.dispatchTransactions = t.dispatchTransactions || i && ((s) => s.forEach((o) => i(o, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = t.root || no(t.parent) || document, this.viewState = new rs(this, t.state || It.create(t)), t.scrollTo && t.scrollTo.is(oe) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(At).map((s) => new Ie(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new Mr(this), this.inputState = new $o(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Gi(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e = document.fonts) === null || e === void 0) && e.ready && document.fonts.ready.then(() => {
      this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
    });
  }
  dispatch(...t) {
    let e = t.length == 1 && t[0] instanceof _n ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
    this.dispatchTransactions(e, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e = !1, i = !1, s, o = this.state;
    for (let d of t) {
      if (d.startState != o)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      o = d.state;
    }
    if (this.destroyed) {
      this.viewState.state = o;
      return;
    }
    let r = this.hasFocus, l = 0, a = null;
    t.some((d) => d.annotation(wn)) ? (this.inputState.notifiedFocused = r, l = 1) : r != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = r, a = yn(o, r), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(o.doc) || !this.state.selection.eq(o.selection)) && (c = null)) : this.observer.clear(), o.facet(It.phrases) != this.state.facet(It.phrases))
      return this.setState(o);
    s = Qt.create(this, o, t), s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let d of t) {
        if (f && (f = f.map(d.changes)), d.scrollIntoView) {
          let { main: u } = d.state.selection, { x: p, y: g } = this.state.facet(M.cursorScrollMargin);
          f = new Rt(u.empty ? u : S.cursor(u.head, u.head > u.anchor ? -1 : 1), "nearest", "nearest", g, p);
        }
        for (let u of d.effects)
          u.is(oe) && (f = u.value.clip(this.state));
      }
      this.viewState.update(s, f), this.bidiCache = Te.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), e = this.docView.update(s), this.state.facet(Nt) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((d) => d.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(fe) != s.state.facet(fe) && (this.viewState.mustMeasureContent = !0), (e || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !s.empty)
      for (let d of this.state.facet(oi))
        try {
          d(s);
        } catch (u) {
          $(this.state, u, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !fn(this, c) && h.force && Lt(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t;
      return;
    }
    this.updateState = 2;
    let e = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new rs(this, t), this.plugins = t.facet(At).map((i) => new Ie(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Gi(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e && this.focus(), this.requestMeasure();
  }
  updatePlugins(t) {
    let e = t.startState.facet(At), i = t.state.facet(At);
    if (e != i) {
      let s = [];
      for (let o of i) {
        let r = e.indexOf(o);
        if (r < 0)
          s.push(new Ie(o));
        else {
          let l = this.plugins[r];
          l.mustUpdate = t, s.push(l);
        }
      }
      for (let o of this.plugins)
        o.mustUpdate != t && o.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else
      for (let s of this.plugins)
        s.mustUpdate = t;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
    e != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t of this.plugins) {
      let e = t.value;
      if (e && e.docViewUpdate)
        try {
          e.docViewUpdate(this);
        } catch (i) {
          $(this.state, i, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(t = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t && this.observer.forceFlush();
    let e = null, i = this.viewState.scrollParent, s = this.viewState.getScrollOffset(), { scrollAnchorPos: o, scrollAnchorHeight: r, scaleY: l } = this.viewState;
    Math.abs(s - this.viewState.scrollOffset) > 1 && (r = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let a = 0; ; a++) {
        if (r < 0) {
          if (Ws(i || this.win))
            o = -1, r = this.viewState.heightMap.height / this.viewState.scaleY;
          else {
            let p = this.viewState.scrollAnchorAt(s);
            o = p.from, r = p.top;
          }
          l = this.viewState.scaleY;
        }
        this.updateState = 1;
        let h = this.viewState.measure();
        if (!h && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (a > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let c = [];
        h & 4 || ([this.measureRequests, c] = [c, this.measureRequests]);
        let f = c.map((p) => {
          try {
            return p.read(this);
          } catch (g) {
            return $(this.state, g), fs;
          }
        }), d = Qt.create(this, this.state, []), u = !1;
        d.flags |= h, e ? e.flags |= h : e = d, this.updateState = 2, d.empty || (this.updatePlugins(d), this.inputState.update(d), this.updateAttrs(), u = this.docView.update(d), u && this.docViewUpdate());
        for (let p = 0; p < c.length; p++)
          if (f[p] != fs)
            try {
              let g = c[p];
              g.write && g.write(f[p], this);
            } catch (g) {
              $(this.state, g);
            }
        if (u && this.docView.updateSelection(!0), !d.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, r = -1;
              continue;
            } else {
              let g = (o < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(o).top) / this.viewState.scaleY - r / l;
              if ((g > 1 || g < -1) && !(w.ios && this.inputState.lastIOSMomentumScroll > Date.now() - 100) && (i == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                s = s + g, i ? o < 0 ? i.scrollTop = i.scrollHeight : i.scrollTop += g : this.win.scrollBy(0, g), r = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (e && !e.empty)
      for (let a of this.state.facet(oi))
        a(e);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return di + " " + (this.state.facet(fi) ? Mn : kn) + " " + this.state.facet(fe);
  }
  updateAttrs() {
    let t = ds(this, sn, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), e = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(et) ? "true" : "false",
      class: "cm-content",
      style: `${w.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (e["aria-readonly"] = "true"), ds(this, Le, e);
    let i = this.observer.ignore(() => {
      let s = Ki(this.contentDOM, this.contentAttrs, e), o = Ki(this.dom, this.editorAttrs, t);
      return s || o;
    });
    return this.editorAttrs = t, this.contentAttrs = e, i;
  }
  showAnnouncements(t) {
    let e = !0;
    for (let i of t)
      for (let s of i.effects)
        if (s.is(M.announce)) {
          e && (this.announceDOM.textContent = ""), e = !1;
          let o = this.announceDOM.appendChild(document.createElement("div"));
          o.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Nt);
    let t = this.state.facet(M.cspNonce);
    Bt.mount(this.root, this.styleModules.concat(Cr).reverse(), t ? { nonce: t } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(t) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t) {
      if (this.measureRequests.indexOf(t) > -1)
        return;
      if (t.key != null) {
        for (let e = 0; e < this.measureRequests.length; e++)
          if (this.measureRequests[e].key === t.key) {
            this.measureRequests[e] = t;
            return;
          }
      }
      this.measureRequests.push(t);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(t) {
    let e = this.pluginMap.get(t);
    return (e === void 0 || e && e.plugin != t) && this.pluginMap.set(t, e = this.plugins.find((i) => i.plugin == t) || null), e && e.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(t) {
    return this.readMeasured(), this.viewState.elementAtHeight(t);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(t) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(t) {
    return this.viewState.lineBlockAt(t);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(t, e, i) {
    return _e(this, t, $i(this, t, e, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(t, e) {
    return _e(this, t, $i(this, t, e, (i) => Fo(this, t.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(t, e) {
    let i = this.bidiSpans(t), s = this.textDirectionAt(t.from), o = i[e ? i.length - 1 : 0];
    return S.cursor(o.side(e, s) + t.from, o.forward(!e, s) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(t, e, i = !0) {
    return Vo(this, t, e, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(t, e, i) {
    return _e(this, t, Io(this, t, e, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(t, e = 1) {
    return this.docView.domAtPos(t, e);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(t, e = 0) {
    return this.docView.posFromDOM(t, e);
  }
  posAtCoords(t, e = !0) {
    this.readMeasured();
    let i = ai(this, t, e);
    return i && i.pos;
  }
  posAndSideAtCoords(t, e = !0) {
    return this.readMeasured(), ai(this, t, e);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(t, e = 1) {
    this.readMeasured();
    let i = this.state.doc.lineAt(t), s = this.bidiSpans(i), o = s[G.find(s, t - i.from, -1, e)];
    return this.docView.coordsAt(t, e, o.dir == R.RTL);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(t) {
    return this.readMeasured(), this.docView.coordsForChar(t);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(t) {
    return !this.state.facet(Js) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(t) {
    if (t.length > Dr)
      return qs(t.length);
    let e = this.textDirectionAt(t.from), i;
    for (let o of this.bidiCache)
      if (o.from == t.from && o.dir == e && (o.fresh || zs(o.isolates, i = Yi(this, t))))
        return o.order;
    i || (i = Yi(this, t));
    let s = Ks(t.text, e, i);
    return this.bidiCache.push(new Te(t.from, t.to, e, i, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var t;
    return (this.dom.ownerDocument.hasFocus() || w.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      Ps(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(t) {
    this._root != t && (this._root = t, this.observer.setWindow((t.nodeType == 9 ? t : t.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let t of this.plugins)
      t.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(t, e = {}) {
    var i, s, o, r;
    return oe.of(new Rt(typeof t == "number" ? S.cursor(t) : t, (i = e.y) !== null && i !== void 0 ? i : "nearest", (s = e.x) !== null && s !== void 0 ? s : "nearest", (o = e.yMargin) !== null && o !== void 0 ? o : 5, (r = e.xMargin) !== null && r !== void 0 ? r : 5));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: t, scrollLeft: e } = this.scrollDOM, i = this.viewState.scrollAnchorAt(t);
    return oe.of(new Rt(S.cursor(i.from), "start", "start", i.top - t, e, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(t) {
    t == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t == "boolean" ? this.inputState.tabFocusMode = t ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(t) {
    return W.define(() => ({}), { eventHandlers: t });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(t) {
    return W.define(() => ({}), { eventObservers: t });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://code.haverbeke.berlin/marijn/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(t, e) {
    let i = Bt.newName(), s = [fe.of(i), Nt.of(ui(`.${i}`, t))];
    return e && e.dark && s.push(fi.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(t) {
    return vi.lowest(Nt.of(ui("." + di, t, An)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(t) {
    var e;
    let i = t.querySelector(".cm-content"), s = i && B.get(i) || B.get(t);
    return ((e = s?.root) === null || e === void 0 ? void 0 : e.view) || null;
  }
}
M.styleModule = Nt;
M.inputHandler = Us;
M.clipboardInputFilter = Ti;
M.clipboardOutputFilter = Di;
M.scrollHandler = tn;
M.focusChangeEffect = Qs;
M.perLineTextDirection = Js;
M.exceptionSink = $s;
M.updateListener = oi;
M.editable = et;
M.mouseSelectionStyle = Gs;
M.dragMovesSelection = Xs;
M.clickAddsSelectionRange = js;
M.decorations = Re;
M.blockWrappers = nn;
M.outerDecorations = Oi;
M.atomicRanges = ee;
M.bidiIsolatedRanges = on;
M.cursorScrollMargin = /* @__PURE__ */ C.define({
  combine: (n) => {
    let t = 5, e = 5;
    for (let i of n)
      typeof i == "number" ? t = e = i : { x: t, y: e } = i;
    return { x: t, y: e };
  }
});
M.scrollMargins = rn;
M.darkTheme = fi;
M.cspNonce = /* @__PURE__ */ C.define({ combine: (n) => n.length ? n[0] : "" });
M.contentAttributes = Le;
M.editorAttributes = sn;
M.lineWrapping = /* @__PURE__ */ M.contentAttributes.of({ class: "cm-lineWrapping" });
M.announce = /* @__PURE__ */ ot.define();
const Dr = 4096, fs = {};
class Te {
  constructor(t, e, i, s, o, r) {
    this.from = t, this.to = e, this.dir = i, this.isolates = s, this.fresh = o, this.order = r;
  }
  static update(t, e) {
    if (e.empty && !t.some((o) => o.fresh))
      return t;
    let i = [], s = t.length ? t[t.length - 1].dir : R.LTR;
    for (let o = Math.max(0, t.length - 10); o < t.length; o++) {
      let r = t[o];
      r.dir == s && !e.touchesRange(r.from, r.to) && i.push(new Te(e.mapPos(r.from, 1), e.mapPos(r.to, -1), r.dir, r.isolates, !1, r.order));
    }
    return i;
  }
}
function ds(n, t, e) {
  for (let i = n.state.facet(t), s = i.length - 1; s >= 0; s--) {
    let o = i[s], r = typeof o == "function" ? o(n) : o;
    r && ki(r, e);
  }
  return e;
}
const Or = w.mac ? "mac" : w.windows ? "win" : w.linux ? "linux" : "key";
function Lr(n, t) {
  const e = n.split(/-(?!$)/);
  let i = e[e.length - 1];
  i == "Space" && (i = " ");
  let s, o, r, l;
  for (let a = 0; a < e.length - 1; ++a) {
    const h = e[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = !0;
    else if (/^a(lt)?$/i.test(h))
      s = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      o = !0;
    else if (/^s(hift)?$/i.test(h))
      r = !0;
    else if (/^mod$/i.test(h))
      t == "mac" ? l = !0 : o = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return s && (i = "Alt-" + i), o && (i = "Ctrl-" + i), l && (i = "Meta-" + i), r && (i = "Shift-" + i), i;
}
function de(n, t, e) {
  return t.altKey && (n = "Alt-" + n), t.ctrlKey && (n = "Ctrl-" + n), t.metaKey && (n = "Meta-" + n), e !== !1 && t.shiftKey && (n = "Shift-" + n), n;
}
const Rr = /* @__PURE__ */ vi.default(/* @__PURE__ */ M.domEventHandlers({
  keydown(n, t) {
    return On(Dn(t.state), n, t, "editor");
  }
})), Tn = /* @__PURE__ */ C.define({ enables: Rr }), us = /* @__PURE__ */ new WeakMap();
function Dn(n) {
  let t = n.facet(Tn), e = us.get(t);
  return e || us.set(t, e = Hr(t.reduce((i, s) => i.concat(s), []))), e;
}
function Br(n, t, e) {
  return On(Dn(n.state), t, n, e);
}
let at = null;
const Er = 4e3;
function Hr(n, t = Or) {
  let e = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (r, l) => {
    let a = i[r];
    if (a == null)
      i[r] = l;
    else if (a != l)
      throw new Error("Key binding " + r + " is used both as a regular binding and as a multi-stroke prefix");
  }, o = (r, l, a, h, c) => {
    var f, d;
    let u = e[r] || (e[r] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((b) => Lr(b, t));
    for (let b = 1; b < p.length; b++) {
      let y = p.slice(0, b).join(" ");
      s(y, !0), u[y] || (u[y] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(x) => {
          let A = at = { view: x, prefix: y, scope: r };
          return setTimeout(() => {
            at == A && (at = null);
          }, Er), !0;
        }]
      });
    }
    let g = p.join(" ");
    s(g, !1);
    let m = u[g] || (u[g] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((d = (f = u._any) === null || f === void 0 ? void 0 : f.run) === null || d === void 0 ? void 0 : d.slice()) || []
    });
    a && m.run.push(a), h && (m.preventDefault = !0), c && (m.stopPropagation = !0);
  };
  for (let r of n) {
    let l = r.scope ? r.scope.split(" ") : ["editor"];
    if (r.any)
      for (let h of l) {
        let c = e[h] || (e[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = r;
        for (let d in c)
          c[d].run.push((u) => f(u, pi));
      }
    let a = r[t] || r.key;
    if (a)
      for (let h of l)
        o(h, a, r.run, r.preventDefault, r.stopPropagation), r.shift && o(h, "Shift-" + a, r.shift, r.preventDefault, r.stopPropagation);
  }
  return e;
}
let pi = null;
function On(n, t, e, i) {
  pi = t;
  let s = Qn(t), o = Ts(s, 0), r = Xn(o) == s.length && s != " ", l = "", a = !1, h = !1, c = !1;
  at && at.view == e && at.scope == i && (l = at.prefix + " ", pn.indexOf(t.keyCode) < 0 && (h = !0, at = null));
  let f = /* @__PURE__ */ new Set(), d = (m) => {
    if (m) {
      for (let b of m.run)
        if (!f.has(b) && (f.add(b), b(e)))
          return m.stopPropagation && (c = !0), !0;
      m.preventDefault && (m.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, u = n[i], p, g;
  return u && (d(u[l + de(s, t, !r)]) ? a = !0 : r && (t.altKey || t.metaKey || t.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(w.windows && t.ctrlKey && t.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(w.mac && t.altKey && !(t.ctrlKey || t.metaKey)) && (p = ct[t.keyCode]) && p != s ? (d(u[l + de(p, t, !0)]) || t.shiftKey && (g = Xt[t.keyCode]) != s && g != p && d(u[l + de(g, t, !1)])) && (a = !0) : r && t.shiftKey && d(u[l + de(s, t, !0)]) && (a = !0), !a && d(u._any) && (a = !0)), h && (a = !0), a && c && t.stopPropagation(), pi = null, a;
}
class ht {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(t, e, i, s, o) {
    this.className = t, this.left = e, this.top = i, this.width = s, this.height = o;
  }
  draw() {
    let t = document.createElement("div");
    return t.className = this.className, this.adjust(t), t;
  }
  update(t, e) {
    return e.className != this.className ? !1 : (this.adjust(t), !0);
  }
  adjust(t) {
    t.style.left = this.left + "px", t.style.top = this.top + "px", this.width != null && (t.style.width = this.width + "px"), t.style.height = this.height + "px";
  }
  eq(t) {
    return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(t, e, i) {
    if (i.empty) {
      let s = t.coordsAtPos(i.head, i.assoc || 1);
      if (!s)
        return [];
      let o = Ln(t);
      return [new ht(e, s.left - o.left, s.top - o.top, null, s.bottom - s.top)];
    } else
      return Pr(t, e, i);
  }
}
function Ln(n) {
  let t = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == R.LTR ? t.left : t.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: t.top - n.scrollDOM.scrollTop * n.scaleY };
}
function ps(n, t, e, i) {
  let s = n.coordsAtPos(t, e * 2);
  if (!s)
    return i;
  let o = n.dom.getBoundingClientRect(), r = (s.top + s.bottom) / 2, l = n.posAtCoords({ x: o.left + 1, y: r }), a = n.posAtCoords({ x: o.right - 1, y: r });
  return l == null || a == null ? i : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function Pr(n, t, e) {
  if (e.to <= n.viewport.from || e.from >= n.viewport.to)
    return [];
  let i = Math.max(e.from, n.viewport.from), s = Math.min(e.to, n.viewport.to), o = n.textDirection == R.LTR, r = n.contentDOM, l = r.getBoundingClientRect(), a = Ln(n), h = r.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), d = l.right - (c ? parseInt(c.paddingRight) : 0), u = li(n, i, 1), p = li(n, s, -1), g = u.type == P.Text ? u : null, m = p.type == P.Text ? p : null;
  if (g && (n.lineWrapping || u.widgetLineBreaks) && (g = ps(n, i, 1, g)), m && (n.lineWrapping || p.widgetLineBreaks) && (m = ps(n, s, -1, m)), g && m && g.from == m.from && g.to == m.to)
    return y(x(e.from, e.to, g));
  {
    let k = g ? x(e.from, null, g) : A(u, !1), v = m ? x(null, e.to, m) : A(p, !0), T = [];
    return (g || u).to < (m || p).from - (g && m ? 1 : 0) || u.widgetLineBreaks > 1 && k.bottom + n.defaultLineHeight / 2 < v.top ? T.push(b(f, k.bottom, d, v.top)) : k.bottom < v.top && n.elementAtHeight((k.bottom + v.top) / 2).type == P.Text && (k.bottom = v.top = (k.bottom + v.top) / 2), y(k).concat(T).concat(y(v));
  }
  function b(k, v, T, H) {
    return new ht(t, k - a.left, v - a.top, Math.max(0, T - k), H - v);
  }
  function y({ top: k, bottom: v, horizontal: T }) {
    let H = [];
    for (let rt = 0; rt < T.length; rt += 2)
      H.push(b(T[rt], k, T[rt + 1], v));
    return H;
  }
  function x(k, v, T) {
    let H = 1e9, rt = -1e9, ie = [];
    function Vi(ut, lt, Ct, pt, Wt) {
      let Z = n.coordsAtPos(ut, ut == T.to ? -2 : 2), tt = n.coordsAtPos(Ct, Ct == T.from ? 2 : -2);
      !Z || !tt || (H = Math.min(Z.top, tt.top, H), rt = Math.max(Z.bottom, tt.bottom, rt), Wt == R.LTR ? ie.push(o && lt ? f : Z.left, o && pt ? d : tt.right) : ie.push(!o && pt ? f : tt.left, !o && lt ? d : Z.right));
    }
    let se = k ?? T.from, ne = v ?? T.to;
    for (let ut of n.visibleRanges)
      if (ut.to > se && ut.from < ne)
        for (let lt = Math.max(ut.from, se), Ct = Math.min(ut.to, ne); ; ) {
          let pt = n.state.doc.lineAt(lt);
          for (let Wt of n.bidiSpans(pt)) {
            let Z = Wt.from + pt.from, tt = Wt.to + pt.from;
            if (Z >= Ct)
              break;
            tt > lt && Vi(Math.max(Z, lt), k == null && Z <= se, Math.min(tt, Ct), v == null && tt >= ne, Wt.dir);
          }
          if (lt = pt.to + 1, lt >= Ct)
            break;
        }
    return ie.length == 0 && Vi(se, k == null, ne, v == null, n.textDirection), { top: H, bottom: rt, horizontal: ie };
  }
  function A(k, v) {
    let T = l.top + (v ? k.top : k.bottom);
    return { top: T, bottom: T, horizontal: [] };
  }
}
function Wr(n, t) {
  return n.constructor == t.constructor && n.eq(t);
}
class Nr {
  constructor(t, e) {
    this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t);
  }
  update(t) {
    t.startState.facet(be) != t.state.facet(be) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(t) {
    this.layer.updateOnDocViewUpdate !== !1 && t.requestMeasure(this.measureReq);
  }
  setOrder(t) {
    let e = 0, i = t.facet(be);
    for (; e < i.length && i[e] != this.layer; )
      e++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: t, scaleY: e } = this.view;
    (t != this.scaleX || e != this.scaleY) && (this.scaleX = t, this.scaleY = e, this.dom.style.transform = `scale(${1 / t}, ${1 / e})`);
  }
  draw(t) {
    if (t.length != this.drawn.length || t.some((e, i) => !Wr(e, this.drawn[i]))) {
      let e = this.dom.firstChild, i = 0;
      for (let s of t)
        s.update && e && s.constructor && this.drawn[i].constructor && s.update(e, this.drawn[i]) ? (e = e.nextSibling, i++) : this.dom.insertBefore(s.draw(), e);
      for (; e; ) {
        let s = e.nextSibling;
        e.remove(), e = s;
      }
      this.drawn = t, w.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const be = /* @__PURE__ */ C.define();
function Hi(n) {
  return [
    W.define((t) => new Nr(t, n)),
    be.of(n)
  ];
}
const St = /* @__PURE__ */ C.define({
  combine(n) {
    return Ci(n, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0,
      iosSelectionHandles: !0
    }, {
      cursorBlinkRate: (t, e) => Math.min(t, e),
      drawRangeCursor: (t, e) => t || e
    });
  }
});
function Vr(n = {}) {
  return [
    St.of(n),
    Ir,
    zr,
    qr,
    Zs.of(!0)
  ];
}
function Fr(n) {
  return n.facet(St);
}
function Rn(n) {
  return n.startState.facet(St) != n.state.facet(St);
}
const Ir = /* @__PURE__ */ Hi({
  above: !0,
  markers(n) {
    let { state: t } = n, e = t.facet(St), i = [];
    for (let s of t.selection.ranges) {
      let o = s == t.selection.main;
      if (s.empty || e.drawRangeCursor && !(o && w.ios && e.iosSelectionHandles)) {
        let r = o ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : S.cursor(s.head, s.assoc);
        for (let a of ht.forRange(n, r, l))
          i.push(a);
      }
    }
    return i;
  },
  update(n, t) {
    n.transactions.some((i) => i.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let e = Rn(n);
    return e && gs(n.state, t), n.docChanged || n.selectionSet || e;
  },
  mount(n, t) {
    gs(t.state, n);
  },
  class: "cm-cursorLayer"
});
function gs(n, t) {
  t.style.animationDuration = n.facet(St).cursorBlinkRate + "ms";
}
const zr = /* @__PURE__ */ Hi({
  above: !1,
  markers(n) {
    let t = [], { main: e, ranges: i } = n.state.selection;
    for (let s of i)
      if (!s.empty)
        for (let o of ht.forRange(n, "cm-selectionBackground", s))
          t.push(o);
    if (w.ios && !e.empty && n.state.facet(St).iosSelectionHandles) {
      for (let s of ht.forRange(n, "cm-selectionHandle cm-selectionHandle-start", S.cursor(e.from, 1)))
        t.push(s);
      for (let s of ht.forRange(n, "cm-selectionHandle cm-selectionHandle-end", S.cursor(e.to, 1)))
        t.push(s);
    }
    return t;
  },
  update(n, t) {
    return n.docChanged || n.selectionSet || n.viewportChanged || Rn(n);
  },
  class: "cm-selectionLayer"
}), Kr = w.gecko && w.gecko_version == 153 ? "#ffffff01" : "transparent", qr = /* @__PURE__ */ vi.highest(/* @__PURE__ */ M.theme({
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: `${Kr} !important` },
    caretColor: "transparent !important"
  },
  ".cm-content": {
    caretColor: "transparent !important",
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
})), Bn = /* @__PURE__ */ ot.define({
  map(n, t) {
    return n == null ? null : t.mapPos(n);
  }
}), Ft = /* @__PURE__ */ Si.define({
  create() {
    return null;
  },
  update(n, t) {
    return n != null && (n = t.changes.mapPos(n)), t.effects.reduce((e, i) => i.is(Bn) ? i.value : e, n);
  }
}), _r = /* @__PURE__ */ W.fromClass(class {
  constructor(n) {
    this.view = n, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(n) {
    var t;
    let e = n.state.field(Ft);
    e == null ? this.cursor != null && ((t = this.cursor) === null || t === void 0 || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(Ft) != e || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: n } = this, t = n.state.field(Ft), e = t != null && n.coordsAtPos(t);
    if (!e)
      return null;
    let i = n.scrollDOM.getBoundingClientRect();
    return {
      left: e.left - i.left + n.scrollDOM.scrollLeft * n.scaleX,
      top: e.top - i.top + n.scrollDOM.scrollTop * n.scaleY,
      height: e.bottom - e.top
    };
  }
  drawCursor(n) {
    if (this.cursor) {
      let { scaleX: t, scaleY: e } = this.view;
      n ? (this.cursor.style.left = n.left / t + "px", this.cursor.style.top = n.top / e + "px", this.cursor.style.height = n.height / e + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(n) {
    this.view.state.field(Ft) != n && this.view.dispatch({ effects: Bn.of(n) });
  }
}, {
  eventObservers: {
    dragover(n) {
      this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
    },
    dragleave(n) {
      (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function Yr() {
  return [Ft, _r];
}
function ms(n, t, e, i, s) {
  t.lastIndex = 0;
  for (let o = n.iterRange(e, i), r = e, l; !o.next().done; r += o.value.length)
    if (!o.lineBreak)
      for (; l = t.exec(o.value); )
        s(r + l.index, l);
}
function jr(n, t) {
  let e = n.visibleRanges;
  if (e.length == 1 && e[0].from == n.viewport.from && e[0].to == n.viewport.to)
    return e;
  let i = [];
  for (let { from: s, to: o } of e)
    s = Math.max(n.state.doc.lineAt(s).from, s - t), o = Math.min(n.state.doc.lineAt(o).to, o + t), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = o : i.push({ from: s, to: o });
  return i;
}
class Pe {
  /**
  Create a decorator.
  */
  constructor(t) {
    const { regexp: e, decoration: i, decorate: s, boundary: o, maxLength: r = 1e3 } = t;
    if (!e.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = e, s)
      this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
    else if (typeof i == "function")
      this.addMatch = (l, a, h, c) => {
        let f = i(l, a, h);
        f && c(h, h + l[0].length, f);
      };
    else if (i)
      this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = o, this.maxLength = r;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(t) {
    let e = new jn(), i = e.add.bind(e);
    for (let { from: s, to: o } of jr(t, this.maxLength))
      ms(t.state.doc, this.regexp, s, o, (r, l) => this.addMatch(l, t, r, i));
    return e.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(t, e) {
    let i = 1e9, s = -1;
    return t.docChanged && t.changes.iterChanges((o, r, l, a) => {
      a >= t.view.viewport.from && l <= t.view.viewport.to && (i = Math.min(l, i), s = Math.max(a, s));
    }), t.viewportMoved || s - i > 1e3 ? this.createDeco(t.view) : s > -1 ? this.updateRange(t.view, e.map(t.changes), i, s) : e;
  }
  updateRange(t, e, i, s) {
    for (let o of t.visibleRanges) {
      let r = Math.max(o.from, i), l = Math.min(o.to, s);
      if (l >= r) {
        let a = t.state.doc.lineAt(r), h = a.to < l ? t.state.doc.lineAt(l) : a, c = Math.max(o.from, a.from), f = Math.min(o.to, h.to);
        if (this.boundary) {
          for (; r > a.from; r--)
            if (this.boundary.test(a.text[r - 1 - a.from])) {
              c = r;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              f = l;
              break;
            }
        }
        let d = [], u, p = (g, m, b) => d.push(b.range(g, m));
        if (a == h)
          for (this.regexp.lastIndex = c - a.from; (u = this.regexp.exec(a.text)) && u.index < f - a.from; )
            this.addMatch(u, t, u.index + a.from, p);
        else
          ms(t.state.doc, this.regexp, c, f, (g, m) => this.addMatch(m, t, g, p));
        e = e.update({ filterFrom: c, filterTo: f, filter: (g, m) => g < c || m > f, add: d });
      }
    }
    return e;
  }
}
const gi = /x/.unicode != null ? "gu" : "g", Xr = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, gi), Gr = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let Xe = null;
function $r() {
  var n;
  if (Xe == null && typeof document < "u" && document.body) {
    let t = document.body.style;
    Xe = ((n = t.tabSize) !== null && n !== void 0 ? n : t.MozTabSize) != null;
  }
  return Xe || !1;
}
const we = /* @__PURE__ */ C.define({
  combine(n) {
    let t = Ci(n, {
      render: null,
      specialChars: Xr,
      addSpecialChars: null
    });
    return (t.replaceTabs = !$r()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, gi)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, gi)), t;
  }
});
function Ur(n = {}) {
  return [we.of(n), Qr()];
}
let bs = null;
function Qr() {
  return bs || (bs = W.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = L.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(we)), this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new Pe({
        regexp: n.specialChars,
        decoration: (t, e, i) => {
          let { doc: s } = e.state, o = Ts(t[0], 0);
          if (o == 9) {
            let r = s.lineAt(i), l = e.state.tabSize, a = Ds(r.text, l, i - r.from);
            return L.replace({
              widget: new el((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[o] || (this.decorationCache[o] = L.replace({ widget: new tl(n, o) }));
        },
        boundary: n.replaceTabs ? void 0 : /[^]/
      });
    }
    update(n) {
      let t = n.state.facet(we);
      n.startState.facet(we) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
    }
  }, {
    decorations: (n) => n.decorations
  }));
}
const Jr = "•";
function Zr(n) {
  return n >= 32 ? Jr : n == 10 ? "␤" : String.fromCharCode(9216 + n);
}
class tl extends dt {
  constructor(t, e) {
    super(), this.options = t, this.code = e;
  }
  eq(t) {
    return t.code == this.code;
  }
  toDOM(t) {
    let e = Zr(this.code), i = t.state.phrase("Control character") + " " + (Gr[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, e);
    if (s)
      return s;
    let o = document.createElement("span");
    return o.textContent = e, o.title = i, o.setAttribute("aria-label", i), o.className = "cm-specialChar", o;
  }
  ignoreEvent() {
    return !1;
  }
}
class el extends dt {
  constructor(t) {
    super(), this.width = t;
  }
  eq(t) {
    return t.width == this.width;
  }
  toDOM() {
    let t = document.createElement("span");
    return t.textContent = "	", t.className = "cm-tab", t.style.width = this.width + "px", t;
  }
  ignoreEvent() {
    return !1;
  }
}
const ws = /* @__PURE__ */ W.fromClass(class {
  constructor() {
    this.height = 1e3, this.attrs = { style: "padding-bottom: 1000px" };
  }
  update(n) {
    let { view: t } = n, e = t.viewState.editorHeight - t.defaultLineHeight - t.documentPadding.top - 0.5;
    e >= 0 && e != this.height && (this.height = e, this.attrs = { style: `padding-bottom: ${e}px` });
  }
});
function il() {
  return [ws, Le.of((n) => {
    var t;
    return ((t = n.plugin(ws)) === null || t === void 0 ? void 0 : t.attrs) || null;
  })];
}
function sl() {
  return ol;
}
const nl = /* @__PURE__ */ L.line({ class: "cm-activeLine" }), ol = /* @__PURE__ */ W.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let t = -1, e = [];
    for (let i of n.state.selection.ranges) {
      let s = n.lineBlockAt(i.head);
      s.from > t && (e.push(nl.range(s.from)), t = s.from);
    }
    return L.set(e);
  }
}, {
  decorations: (n) => n.decorations
});
class rl extends dt {
  constructor(t) {
    super(), this.content = t;
  }
  toDOM(t) {
    let e = document.createElement("span");
    return e.className = "cm-placeholder", e.style.pointerEvents = "none", e.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(t) : this.content.cloneNode(!0)), e.setAttribute("aria-hidden", "true"), e;
  }
  coordsAt(t) {
    let e = t.firstChild ? Kt(t.firstChild) : [];
    if (!e.length)
      return null;
    let i = window.getComputedStyle(t.parentNode), s = $t(e[0], i.direction != "rtl"), o = parseInt(i.lineHeight);
    return s.bottom - s.top > o * 1.5 ? { left: s.left, right: s.right, top: s.top, bottom: s.top + o } : s;
  }
  ignoreEvent() {
    return !1;
  }
}
function ll(n) {
  let t = W.fromClass(class {
    constructor(e) {
      this.view = e, this.placeholder = n ? L.set([L.widget({ widget: new rl(n), side: 1 }).range(0)]) : L.none;
    }
    get decorations() {
      return this.view.state.doc.length ? L.none : this.placeholder;
    }
  }, { decorations: (e) => e.decorations });
  return typeof n == "string" ? [
    t,
    M.contentAttributes.of({ "aria-placeholder": n })
  ] : t;
}
const mi = 2e3;
function al(n, t, e) {
  let i = Math.min(t.line, e.line), s = Math.max(t.line, e.line), o = [];
  if (t.off > mi || e.off > mi || t.col < 0 || e.col < 0) {
    let r = Math.min(t.off, e.off), l = Math.max(t.off, e.off);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a);
      h.length <= l && o.push(S.range(h.from + r, h.to + l));
    }
  } else {
    let r = Math.min(t.col, e.col), l = Math.max(t.col, e.col);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a), c = Ue(h.text, r, n.tabSize, !0);
      if (c < 0)
        o.push(S.cursor(h.to));
      else {
        let f = Ue(h.text, l, n.tabSize);
        o.push(S.range(h.from + c, h.from + f));
      }
    }
  }
  return o;
}
function hl(n, t) {
  let e = n.coordsAtPos(n.viewport.from);
  return e ? Math.round(Math.abs((e.left - t) / n.defaultCharacterWidth)) : -1;
}
function ys(n, t) {
  let e = n.posAtCoords({ x: t.clientX, y: t.clientY }, !1), i = n.state.doc.lineAt(e), s = e - i.from, o = s > mi ? -1 : s == i.length ? hl(n, t.clientX) : Ds(i.text, n.state.tabSize, e - i.from);
  return { line: i.number, col: o, off: s };
}
function cl(n, t) {
  let e = ys(n, t), i = n.state.selection;
  return e ? {
    update(s) {
      if (s.docChanged) {
        let o = s.changes.mapPos(s.startState.doc.line(e.line).from), r = s.state.doc.lineAt(o);
        e = { line: r.number, col: e.col, off: Math.min(e.off, r.length) }, i = i.map(s.changes);
      }
    },
    get(s, o, r) {
      let l = ys(n, s);
      if (!l)
        return i;
      let a = al(n.state, e, l);
      return a.length ? r ? S.create(a.concat(i.ranges)) : S.create(a) : i;
    }
  } : null;
}
function fl(n) {
  let t = n?.eventFilter || ((e) => e.altKey && e.button == 0);
  return M.mouseSelectionStyle.of((e, i) => t(i) ? cl(e, i) : null);
}
const dl = {
  Alt: [18, (n) => !!n.altKey],
  Control: [17, (n) => !!n.ctrlKey],
  Shift: [16, (n) => !!n.shiftKey],
  Meta: [91, (n) => !!n.metaKey]
}, ul = { style: "cursor: crosshair" };
function pl(n = {}) {
  let [t, e] = dl[n.key || "Alt"], i = W.fromClass(class {
    constructor(s) {
      this.view = s, this.isDown = !1;
    }
    set(s) {
      this.isDown != s && (this.isDown = s, this.view.update([]));
    }
  }, {
    eventObservers: {
      keydown(s) {
        this.set(s.keyCode == t || e(s));
      },
      keyup(s) {
        (s.keyCode == t || !e(s)) && this.set(!1);
      },
      mousemove(s) {
        this.set(e(s));
      }
    }
  });
  return [
    i,
    M.contentAttributes.of((s) => {
      var o;
      return !((o = s.plugin(i)) === null || o === void 0) && o.isDown ? ul : null;
    })
  ];
}
const ue = "-10000px";
class En {
  constructor(t, e, i, s) {
    this.facet = e, this.createTooltipView = i, this.removeTooltipView = s, this.input = t.state.facet(e), this.tooltips = this.input.filter((r) => r);
    let o = null;
    this.tooltipViews = this.tooltips.map((r) => o = i(r, o));
  }
  update(t, e) {
    var i;
    let s = t.state.facet(this.facet), o = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(t);
      return !1;
    }
    let r = [], l = e ? [] : null;
    for (let a = 0; a < o.length; a++) {
      let h = o[a], c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let d = this.tooltips[f];
          d && d.create == h.create && (c = f);
        }
        if (c < 0)
          r[a] = this.createTooltipView(h, a ? r[a - 1] : null), l && (l[a] = !!h.above);
        else {
          let f = r[a] = this.tooltipViews[c];
          l && (l[a] = e[c]), f.update && f.update(t);
        }
      }
    }
    for (let a of this.tooltipViews)
      r.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return e && (l.forEach((a, h) => e[h] = a), e.length = l.length), this.input = s, this.tooltips = o, this.tooltipViews = r, !0;
  }
}
function gl(n = {}) {
  return ye.of(n);
}
function ml(n) {
  let t = n.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: t.clientHeight, right: t.clientWidth };
}
const ye = /* @__PURE__ */ C.define({
  combine: (n) => {
    var t, e, i;
    return {
      position: w.ios ? "absolute" : ((t = n.find((s) => s.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
      parent: ((e = n.find((s) => s.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
      tooltipSpace: ((i = n.find((s) => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || ml
    };
  }
}), xs = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ W.fromClass(class {
  constructor(n) {
    this.view = n, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let t = n.state.facet(ye);
    this.position = t.position, this.parent = t.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new En(n, Pi, (e, i) => this.createTooltip(e, i), (e) => {
      this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
    }), this.above = this.manager.tooltips.map((e) => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
      Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let n of this.manager.tooltipViews)
        this.intersectionObserver.observe(n.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(n) {
    n.transactions.length && (this.lastTransaction = Date.now());
    let t = this.manager.update(n, this.above);
    t && this.observeIntersection();
    let e = t || n.geometryChanged, i = n.state.facet(ye);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let s of this.manager.tooltipViews)
        s.dom.style.position = this.position;
      e = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let s of this.manager.tooltipViews)
        this.container.appendChild(s.dom);
      e = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    e && this.maybeMeasure();
  }
  createTooltip(n, t) {
    let e = n.create(this.view), i = t ? t.dom : null;
    if (e.dom.classList.add("cm-tooltip"), n.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let s = document.createElement("div");
      s.className = "cm-tooltip-arrow", e.dom.appendChild(s);
    }
    return e.dom.style.position = this.position, e.dom.style.top = ue, e.dom.style.left = "0px", this.container.insertBefore(e.dom, i), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e;
  }
  destroy() {
    var n, t, e;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (n = i.destroy) === null || n === void 0 || n.call(i);
    this.parent && this.container.remove(), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let n = 1, t = 1, e = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: o } = this.manager.tooltipViews[0];
      if (w.safari) {
        let r = o.getBoundingClientRect();
        e = Math.abs(r.top + 1e4) > 1 || Math.abs(r.left) > 1;
      } else
        e = !!o.offsetParent && o.offsetParent != this.container.ownerDocument.body;
    }
    if (e || this.position == "absolute")
      if (this.parent) {
        let o = this.parent.getBoundingClientRect();
        o.width && o.height && (n = o.width / this.parent.offsetWidth, t = o.height / this.parent.offsetHeight);
      } else
        ({ scaleX: n, scaleY: t } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), s = Li(this.view);
    return {
      visible: {
        left: i.left + s.left,
        top: i.top + s.top,
        right: i.right - s.right,
        bottom: i.bottom - s.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((o, r) => {
        let l = this.manager.tooltipViews[r];
        return l.getCoords ? l.getCoords(o.pos) : this.view.coordsAtPos(o.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: o }) => o.getBoundingClientRect()),
      space: this.view.state.facet(ye).tooltipSpace(this.view),
      scaleX: n,
      scaleY: t,
      makeAbsolute: e
    };
  }
  writeMeasure(n) {
    var t;
    if (n.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: e, space: i, scaleX: s, scaleY: o } = n, r = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, f = n.pos[l], d = n.size[l];
      if (!f || a.clip !== !1 && (f.bottom <= Math.max(e.top, i.top) || f.top >= Math.min(e.bottom, i.bottom) || f.right < Math.max(e.left, i.left) - 0.1 || f.left > Math.min(e.right, i.right) + 0.1)) {
        c.style.top = ue;
        continue;
      }
      let u = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = u ? 7 : 0, g = d.right - d.left, m = (t = xs.get(h)) !== null && t !== void 0 ? t : d.bottom - d.top, b = h.offset || wl, y = this.view.textDirection == R.LTR, x = d.width > i.right - i.left ? y ? i.left : i.right - d.width : y ? Math.max(i.left, Math.min(f.left - (u ? 14 : 0) + b.x, i.right - g)) : Math.min(Math.max(i.left, f.left - g + (u ? 14 : 0) - b.x), i.right - g), A = this.above[l];
      !a.strictSide && (A ? f.top - m - p - b.y < i.top : f.bottom + m + p + b.y > i.bottom) && A == i.bottom - f.bottom > f.top - i.top && (A = this.above[l] = !A);
      let k = (A ? f.top - i.top : i.bottom - f.bottom) - p;
      if (k < m && h.resize !== !1) {
        if (k < this.view.defaultLineHeight) {
          c.style.top = ue;
          continue;
        }
        xs.set(h, m), c.style.height = (m = k) / o + "px";
      } else c.style.height && (c.style.height = "");
      let v = A ? f.top - m - p - b.y : f.bottom + p + b.y, T = x + g;
      if (h.overlap !== !0)
        for (let H of r)
          H.left < T && H.right > x && H.top < v + m && H.bottom > v && (v = A ? H.top - m - 2 - p : H.bottom + p + 2);
      if (this.position == "absolute" ? (c.style.top = (v - n.parent.top) / o + "px", vs(c, (x - n.parent.left) / s)) : (c.style.top = v / o + "px", vs(c, x / s)), u) {
        let H = f.left + (y ? b.x : -b.x) - (x + 14 - 7);
        u.style.left = H / s + "px";
      }
      h.overlap !== !0 && r.push({ left: x, top: v, right: T, bottom: v + m }), c.classList.toggle("cm-tooltip-above", A), c.classList.toggle("cm-tooltip-below", !A), h.positioned && h.positioned(n.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let n of this.manager.tooltipViews)
        n.dom.style.top = ue;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function vs(n, t) {
  let e = parseInt(n.style.left, 10);
  (isNaN(e) || Math.abs(t - e) > 1) && (n.style.left = t + "px");
}
const bl = /* @__PURE__ */ M.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: "14px",
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), wl = { x: 0, y: 0 }, Pi = /* @__PURE__ */ C.define({
  enables: [We, bl]
}), Jt = /* @__PURE__ */ C.define({
  combine: (n) => n.reduce((t, e) => t.concat(e), [])
});
class Ne {
  // Needs to be static so that host tooltip instances always match
  static create(t) {
    return new Ne(t);
  }
  constructor(t) {
    this.view = t, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new En(t, Jt, (e, i) => this.createHostedView(e, i), (e) => e.dom.remove());
  }
  createHostedView(t, e) {
    let i = t.create(this.view);
    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, e ? e.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i;
  }
  mount(t) {
    for (let e of this.manager.tooltipViews)
      e.mount && e.mount(t);
    this.mounted = !0;
  }
  positioned(t) {
    for (let e of this.manager.tooltipViews)
      e.positioned && e.positioned(t);
  }
  update(t) {
    this.manager.update(t);
  }
  destroy() {
    var t;
    for (let e of this.manager.tooltipViews)
      (t = e.destroy) === null || t === void 0 || t.call(e);
  }
  passProp(t) {
    let e;
    for (let i of this.manager.tooltipViews) {
      let s = i[t];
      if (s !== void 0) {
        if (e === void 0)
          e = s;
        else if (e !== s)
          return;
      }
    }
    return e;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const yl = /* @__PURE__ */ Pi.compute([Jt], (n) => {
  let t = n.facet(Jt);
  return t.length === 0 ? null : {
    pos: Math.min(...t.map((e) => e.pos)),
    end: Math.max(...t.map((e) => {
      var i;
      return (i = e.end) !== null && i !== void 0 ? i : e.pos;
    })),
    create: Ne.create,
    above: t[0].above,
    arrow: t.some((e) => e.arrow)
  };
}), Hn = /* @__PURE__ */ C.define();
class xl {
  constructor(t, e, i, s, o, r) {
    this.view = t, this.source = e, this.field = i, this.locked = s, this.setHover = o, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: t.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update(t) {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let t = Date.now() - this.lastMove.time;
    t < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: t, lastMove: e } = this, i = t.docView.tile.nearest(e.target);
    if (!i)
      return;
    let s, o = 1;
    if (i.isWidget())
      s = i.posAtStart;
    else {
      if (s = t.posAtCoords(e), s == null)
        return;
      let r = t.coordsAtPos(s);
      if (!r || e.y < r.top || e.y > r.bottom || e.x < r.left - t.defaultCharacterWidth || e.x > r.right + t.defaultCharacterWidth)
        return;
      let l = t.bidiSpans(t.state.doc.lineAt(s)).find((h) => h.from <= s && h.to >= s), a = l && l.dir == R.RTL ? -1 : 1;
      o = e.x < r.left ? -a : a;
    }
    this.activateHover(t, s, o);
  }
  activateHover(t, e, i, s) {
    let o = this.source(t, e, i), r = (l) => {
      if (l && !(Array.isArray(l) && !l.length)) {
        let a = Array.isArray(l) ? l : [l];
        s && this.locked.set(a, s), t.dispatch({ effects: this.setHover.of(a) });
      }
    };
    if (o && "then" in o) {
      let l = this.pending = { pos: e };
      o.then((a) => {
        this.pending == l && (this.pending = null, r(a));
      }, (a) => $(t.state, a, "hover tooltip"));
    } else
      r(o);
  }
  get tooltip() {
    let t = this.view.plugin(We), e = t ? t.manager.tooltips.findIndex((i) => i.create == Ne.create) : -1;
    return e > -1 ? t.manager.tooltipViews[e] : null;
  }
  mousemove(t) {
    var e, i;
    this.lastMove = { x: t.clientX, y: t.clientY, target: t.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: o } = this;
    if (s.length && !this.locked.has(s) && o && !vl(o.dom, t) || this.pending) {
      let { pos: r } = s[0] || this.pending, l = (i = (e = s[0]) === null || e === void 0 ? void 0 : e.end) !== null && i !== void 0 ? i : r;
      (r == l ? this.view.posAtCoords(this.lastMove) != r : !Sl(this.view, r, l, t.clientX, t.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(t) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: e } = this;
    if (e.length && !this.locked.has(e)) {
      let { tooltip: i } = this;
      i && i.dom.contains(t.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(t) {
    let e = (i) => {
      t.removeEventListener("mouseleave", e);
      let { active: s } = this;
      s.length && !this.locked.has(s) && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    t.addEventListener("mouseleave", e);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const pe = 4;
function vl(n, t) {
  let { left: e, right: i, top: s, bottom: o } = n.getBoundingClientRect(), r;
  if (r = n.querySelector(".cm-tooltip-arrow")) {
    let l = r.getBoundingClientRect();
    s = Math.min(l.top, s), o = Math.max(l.bottom, o);
  }
  return t.clientX >= e - pe && t.clientX <= i + pe && t.clientY >= s - pe && t.clientY <= o + pe;
}
function Sl(n, t, e, i, s, o) {
  let r = n.scrollDOM.getBoundingClientRect(), l = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (r.left > i || r.right < i || r.top > s || Math.min(r.bottom, l) < s)
    return !1;
  let a = n.posAtCoords({ x: i, y: s }, !1);
  return a >= t && a <= e;
}
function Cl(n, t = {}) {
  let e = ot.define(), i = /* @__PURE__ */ new WeakMap(), s = Si.define({
    create() {
      return [];
    },
    update(r, l) {
      let a = i.get(r);
      if (r.length && (t.hideOnChange && (l.docChanged || l.selection) ? r = [] : a && a(l) ? r = [] : t.hideOn && (r = r.filter((h) => !t.hideOn(l, h)))), l.docChanged && r.length) {
        let h = [];
        for (let c of r) {
          let f = l.changes.mapPos(c.pos, -1, Dt.TrackDel);
          if (f != null) {
            let d = Object.assign(/* @__PURE__ */ Object.create(null), c);
            d.pos = f, d.end != null && (d.end = l.changes.mapPos(d.end)), h.push(d);
          }
        }
        r = h;
      }
      for (let h of l.effects)
        h.is(e) && (r = h.value, a = void 0), (h.is(Wi) && !h.value || h.value == s) && (r = []);
      return r.length && a && i.set(r, a), r;
    },
    provide: (r) => Jt.from(r)
  });
  const o = W.define((r) => new xl(
    r,
    n,
    s,
    i,
    e,
    t.hoverTime || 300
    /* Hover.Time */
  ));
  return {
    active: s,
    extension: [
      s,
      o,
      Hn.of(o),
      yl
    ]
  };
}
function kl(n, t, e, i = {}) {
  var s;
  let o = n.state.facet(Hn).map((r) => n.plugin(r)).filter((r) => !!r);
  if (i.tooltip && i.tooltip.active) {
    let r = o.find((l) => l.field == i.tooltip.active);
    r && (o = [r]);
  }
  for (let r of o)
    r.activateHover(n, t, e, (s = i.until) !== null && s !== void 0 ? s : (() => !1));
}
function Ml(n, t) {
  let e = n.plugin(We);
  if (!e)
    return null;
  let i = e.manager.tooltips.indexOf(t);
  return i < 0 ? null : e.manager.tooltipViews[i];
}
function Al(n) {
  return n.facet(Jt).some((t) => t);
}
const Wi = /* @__PURE__ */ ot.define(), Tl = /* @__PURE__ */ Wi.of(null);
function Dl(n) {
  return Wi.of(n.active);
}
function Ol(n) {
  let t = n.plugin(We);
  t && t.maybeMeasure();
}
const bi = /* @__PURE__ */ C.define({
  combine(n) {
    let t, e;
    for (let i of n)
      t = t || i.topContainer, e = e || i.bottomContainer;
    return { topContainer: t, bottomContainer: e };
  }
});
function Ll(n) {
  return n ? [bi.of(n)] : [];
}
function Pn(n, t) {
  let e = n.plugin(Wn), i = e ? e.specs.indexOf(t) : -1;
  return i > -1 ? e.panels[i] : null;
}
const Wn = /* @__PURE__ */ W.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(De), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((e) => e(n));
    let t = n.state.facet(bi);
    this.top = new ge(n, !0, t.topContainer), this.bottom = new ge(n, !1, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
    for (let e of this.panels)
      e.dom.classList.add("cm-panel"), e.mount && e.mount();
  }
  update(n) {
    let t = n.state.facet(bi);
    this.top.container != t.topContainer && (this.top.sync([]), this.top = new ge(n.view, !0, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new ge(n.view, !1, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let e = n.state.facet(De);
    if (e != this.input) {
      let i = e.filter((a) => a), s = [], o = [], r = [], l = [];
      for (let a of i) {
        let h = this.specs.indexOf(a), c;
        h < 0 ? (c = a(n.view), l.push(c)) : (c = this.panels[h], c.update && c.update(n)), s.push(c), (c.top ? o : r).push(c);
      }
      this.specs = i, this.panels = s, this.top.sync(o), this.bottom.sync(r);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(n);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (n) => M.scrollMargins.of((t) => {
    let e = t.plugin(n);
    return e && { top: e.top.scrollMargin(), bottom: e.bottom.scrollMargin() };
  })
});
class ge {
  constructor(t, e, i) {
    this.view = t, this.top = e, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(t) {
    for (let e of this.panels)
      e.destroy && t.indexOf(e) < 0 && e.destroy();
    this.panels = t, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom";
      let e = this.container || this.view.dom;
      e.insertBefore(this.dom, this.top ? e.firstChild : null);
    }
    let t = this.dom.firstChild;
    for (let e of this.panels)
      if (e.dom.parentNode == this.dom) {
        for (; t != e.dom; )
          t = Ss(t);
        t = t.nextSibling;
      } else
        this.dom.insertBefore(e.dom, t);
    for (; t; )
      t = Ss(t);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let t of this.classes.split(" "))
        t && this.container.classList.remove(t);
      for (let t of (this.classes = this.view.themeClasses).split(" "))
        t && this.container.classList.add(t);
    }
  }
}
function Ss(n) {
  let t = n.nextSibling;
  return n.remove(), t;
}
const De = /* @__PURE__ */ C.define({
  enables: Wn
});
function Rl(n, t) {
  let e, i = new Promise((r) => e = r), s = (r) => El(r, t, e);
  n.state.field(xe, !1) ? n.dispatch({ effects: Nn.of(s) }) : n.dispatch({ effects: ot.appendConfig.of(xe.init(() => [s])) });
  let o = Vn.of(s);
  return { close: o, result: i.then((r) => ((n.win.queueMicrotask || ((a) => n.win.setTimeout(a, 10)))(() => {
    n.state.field(xe).indexOf(s) > -1 && n.dispatch({ effects: o });
  }), r)) };
}
function Bl(n, t) {
  let e = n.state.field(xe, !1) || [];
  for (let i of e) {
    let s = Pn(n, i);
    if (s && s.dom.classList.contains(t))
      return s;
  }
  return null;
}
const xe = /* @__PURE__ */ Si.define({
  create() {
    return [];
  },
  update(n, t) {
    for (let e of t.effects)
      e.is(Nn) ? n = [e.value].concat(n) : e.is(Vn) && (n = n.filter((i) => i != e.value));
    return n;
  },
  provide: (n) => De.computeN([n], (t) => t.field(n))
}), Nn = /* @__PURE__ */ ot.define(), Vn = /* @__PURE__ */ ot.define();
function El(n, t, e) {
  let i = t.content ? t.content(n, () => r(null)) : null;
  if (!i) {
    if (i = kt("form"), t.input) {
      let l = kt("input", t.input);
      /^(text|password|number|email|tel|url)$/.test(l.type) && l.classList.add("cm-textfield"), l.name || (l.name = "input"), i.appendChild(kt("label", (t.label || "") + ": ", l));
    } else
      i.appendChild(document.createTextNode(t.label || ""));
    i.appendChild(document.createTextNode(" ")), i.appendChild(kt("button", { class: "cm-button", type: "submit" }, t.submitLabel || "OK"));
  }
  let s = i.nodeName == "FORM" ? [i] : i.querySelectorAll("form");
  for (let l = 0; l < s.length; l++) {
    let a = s[l];
    a.addEventListener("keydown", (h) => {
      h.keyCode == 27 ? (h.preventDefault(), r(null)) : h.keyCode == 13 && (h.preventDefault(), r(a));
    }), a.addEventListener("submit", (h) => {
      h.preventDefault(), r(a);
    });
  }
  let o = kt("div", i, kt("button", {
    onclick: () => r(null),
    "aria-label": n.state.phrase("close"),
    class: "cm-dialog-close",
    type: "button"
  }, ["×"]));
  t.class && (o.className = t.class), o.classList.add("cm-dialog");
  function r(l) {
    o.contains(o.ownerDocument.activeElement) && n.focus(), e(l);
  }
  return {
    dom: o,
    top: t.top,
    mount: () => {
      if (t.focus) {
        let l;
        typeof t.focus == "string" ? l = i.querySelector(t.focus) : l = i.querySelector("input") || i.querySelector("button"), l && "select" in l ? l.select() : l && "focus" in l && l.focus();
      }
    }
  };
}
class nt extends xi {
  /**
  @internal
  */
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(t) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(t) {
  }
}
nt.prototype.elementClass = "";
nt.prototype.toDOM = void 0;
nt.prototype.mapMode = Dt.TrackBefore;
nt.prototype.startSide = nt.prototype.endSide = -1;
nt.prototype.point = !0;
const Yt = /* @__PURE__ */ C.define(), Fn = /* @__PURE__ */ C.define(), Hl = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => E.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {},
  side: "before"
}, jt = /* @__PURE__ */ C.define();
function Pl(n) {
  return [Ni(), jt.of({ ...Hl, ...n })];
}
const wi = /* @__PURE__ */ C.define({
  combine: (n) => n.some((t) => t)
});
function Ni(n) {
  let t = [
    Wl
  ];
  return n && n.fixed === !1 && t.push(wi.of(!0)), t;
}
const Wl = /* @__PURE__ */ W.fromClass(class {
  constructor(n) {
    this.view = n, this.domAfter = null, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(jt).map((t) => new ks(n, t)), this.fixed = !n.state.facet(wi);
    for (let t of this.gutters)
      t.config.side == "after" ? this.getDOMAfter().appendChild(t.dom) : this.dom.appendChild(t.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(n) {
    if (this.updateGutters(n)) {
      let t = this.prevViewport, e = n.view.viewport, i = Math.min(t.to, e.to) - Math.max(t.from, e.from);
      this.syncGutters(i < (e.to - e.from) * 0.8);
    }
    if (n.geometryChanged) {
      let t = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = t, this.domAfter && (this.domAfter.style.minHeight = t);
    }
    this.view.state.facet(wi) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let t = this.dom.nextSibling;
    n && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let e = E.iter(this.view.state.facet(Yt), this.view.viewport.from), i = [], s = this.gutters.map((o) => new Nl(o, this.view.viewport, -this.view.documentPadding.top));
    for (let o of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(o.type)) {
        let r = !0;
        for (let l of o.type)
          if (l.type == P.Text && r) {
            yi(e, i, l.from);
            for (let a of s)
              a.line(this.view, l, i);
            r = !1;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (o.type == P.Text) {
        yi(e, i, o.from);
        for (let r of s)
          r.line(this.view, o, i);
      } else if (o.widget)
        for (let r of s)
          r.widget(this.view, o);
    for (let o of s)
      o.finish();
    n && (this.view.scrollDOM.insertBefore(this.dom, t), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(n) {
    let t = n.startState.facet(jt), e = n.state.facet(jt), i = n.docChanged || n.heightChanged || n.viewportChanged || !E.eq(n.startState.facet(Yt), n.state.facet(Yt), n.view.viewport.from, n.view.viewport.to);
    if (t == e)
      for (let s of this.gutters)
        s.update(n) && (i = !0);
    else {
      i = !0;
      let s = [];
      for (let o of e) {
        let r = t.indexOf(o);
        r < 0 ? s.push(new ks(this.view, o)) : (this.gutters[r].update(n), s.push(this.gutters[r]));
      }
      for (let o of this.gutters)
        o.dom.remove(), s.indexOf(o) < 0 && o.destroy();
      for (let o of s)
        o.config.side == "after" ? this.getDOMAfter().appendChild(o.dom) : this.dom.appendChild(o.dom);
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let n of this.gutters)
      n.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, {
  provide: (n) => M.scrollMargins.of((t) => {
    let e = t.plugin(n);
    if (!e || e.gutters.length == 0 || !e.fixed)
      return null;
    let i = e.dom.offsetWidth * t.scaleX, s = e.domAfter ? e.domAfter.offsetWidth * t.scaleX : 0;
    return t.textDirection == R.LTR ? { left: i, right: s } : { right: i, left: s };
  })
});
function Cs(n) {
  return Array.isArray(n) ? n : [n];
}
function yi(n, t, e) {
  for (; n.value && n.from <= e; )
    n.from == e && t.push(n.value), n.next();
}
class Nl {
  constructor(t, e, i) {
    this.gutter = t, this.height = i, this.i = 0, this.cursor = E.iter(t.markers, e.from);
  }
  addElement(t, e, i) {
    let { gutter: s } = this, o = (e.top - this.height) / t.scaleY, r = e.height / t.scaleY;
    if (this.i == s.elements.length) {
      let l = new In(t, r, o, i);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else
      s.elements[this.i].update(t, r, o, i);
    this.height = e.bottom, this.i++;
  }
  line(t, e, i) {
    let s = [];
    yi(this.cursor, s, e.from), i.length && (s = s.concat(i));
    let o = this.gutter.config.lineMarker(t, e, s);
    o && s.unshift(o);
    let r = this.gutter;
    s.length == 0 && !r.config.renderEmptyElements || this.addElement(t, e, s);
  }
  widget(t, e) {
    let i = this.gutter.config.widgetMarker(t, e.widget, e), s = i ? [i] : null;
    for (let o of t.state.facet(Fn)) {
      let r = o(t, e.widget, e);
      r && (s || (s = [])).push(r);
    }
    s && this.addElement(t, e, s);
  }
  finish() {
    let t = this.gutter;
    for (; t.elements.length > this.i; ) {
      let e = t.elements.pop();
      t.dom.removeChild(e.dom), e.destroy();
    }
  }
}
class ks {
  constructor(t, e) {
    this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in e.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let o = s.target, r;
        if (o != this.dom && this.dom.contains(o)) {
          for (; o.parentNode != this.dom; )
            o = o.parentNode;
          let a = o.getBoundingClientRect();
          r = (a.top + a.bottom) / 2;
        } else
          r = s.clientY;
        let l = t.lineBlockAtHeight(r - t.documentTop);
        e.domEventHandlers[i](t, l, s) && s.preventDefault();
      });
    this.markers = Cs(e.markers(t)), e.initialSpacer && (this.spacer = new In(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t) {
    let e = this.markers;
    if (this.markers = Cs(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], t);
      s != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [s]);
    }
    let i = t.view.viewport;
    return !E.eq(this.markers, e, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : !1);
  }
  destroy() {
    for (let t of this.elements)
      t.destroy();
  }
}
class In {
  constructor(t, e, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, s);
  }
  update(t, e, i, s) {
    this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), Vl(this.markers, s) || this.setMarkers(t, s);
  }
  setMarkers(t, e) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
    for (let o = 0, r = 0; ; ) {
      let l = r, a = o < e.length ? e[o++] : null, h = !1;
      if (a) {
        let c = a.elementClass;
        c && (i += " " + c);
        for (let f = r; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, h = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; r < l; ) {
        let c = this.markers[r++];
        if (c.toDOM) {
          c.destroy(s);
          let f = s.nextSibling;
          s.remove(), s = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(t), s)), h && r++;
    }
    this.dom.className = i, this.markers = e;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Vl(n, t) {
  if (n.length != t.length)
    return !1;
  for (let e = 0; e < n.length; e++)
    if (!n[e].compare(t[e]))
      return !1;
  return !0;
}
const zn = /* @__PURE__ */ C.define(), Kn = /* @__PURE__ */ C.define(), Tt = /* @__PURE__ */ C.define({
  combine(n) {
    return Ci(n, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(t, e) {
        let i = Object.assign({}, t);
        for (let s in e) {
          let o = i[s], r = e[s];
          i[s] = o ? (l, a, h) => o(l, a, h) || r(l, a, h) : r;
        }
        return i;
      }
    });
  }
});
class Ge extends nt {
  constructor(t) {
    super(), this.number = t;
  }
  eq(t) {
    return this.number == t.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function $e(n, t) {
  return n.state.facet(Tt).formatNumber(t, n.state);
}
const Fl = /* @__PURE__ */ jt.compute([Tt], (n) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(t) {
    return t.state.facet(zn);
  },
  lineMarker(t, e, i) {
    return i.some((s) => s.toDOM) ? null : new Ge($e(t, t.state.doc.lineAt(e.from).number));
  },
  widgetMarker: (t, e, i) => {
    for (let s of t.state.facet(Kn)) {
      let o = s(t, e, i);
      if (o)
        return o;
    }
    return null;
  },
  lineMarkerChange: (t) => t.startState.facet(Tt) != t.state.facet(Tt),
  initialSpacer(t) {
    return new Ge($e(t, Ms(t.state.doc.lines)));
  },
  updateSpacer(t, e) {
    let i = $e(e.view, Ms(e.view.state.doc.lines));
    return i == t.number ? t : new Ge(i);
  },
  domEventHandlers: n.facet(Tt).domEventHandlers,
  side: "before"
}));
function Il(n = {}) {
  return [
    Tt.of(n),
    Ni(),
    Fl
  ];
}
function Ms(n) {
  let t = 9;
  for (; t < n; )
    t = t * 10 + 9;
  return t;
}
const zl = /* @__PURE__ */ new class extends nt {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), Kl = /* @__PURE__ */ Yt.compute(["selection"], (n) => {
  let t = [], e = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.head).from;
    s > e && (e = s, t.push(zl.range(s)));
  }
  return E.of(t);
});
function ql() {
  return Kl;
}
function qn(n) {
  return W.define((t) => ({
    decorations: n.createDeco(t),
    update(e) {
      this.decorations = n.updateDeco(e, this.decorations);
    }
  }), {
    decorations: (t) => t.decorations
  });
}
const _l = /* @__PURE__ */ L.mark({ class: "cm-highlightTab" }), Yl = /* @__PURE__ */ L.mark({ class: "cm-highlightSpace" }), jl = /* @__PURE__ */ qn(/* @__PURE__ */ new Pe({
  regexp: /\t| /g,
  decoration: (n) => n[0] == "	" ? _l : Yl,
  boundary: /\S/
}));
function Xl() {
  return jl;
}
const Gl = /* @__PURE__ */ qn(/* @__PURE__ */ new Pe({
  regexp: /\s+$/g,
  decoration: /* @__PURE__ */ L.mark({ class: "cm-trailingSpace" })
}));
function $l() {
  return Gl;
}
const Ul = {
  HeightMap: F,
  HeightOracle: vn,
  MeasuredHeights: Sn,
  QueryType: D,
  ChangedRange: _,
  computeOrder: Ks,
  moveVisually: Ys,
  clearHeightChangeFlag: ci,
  getHeightChangeFlag: () => vt
}, ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BidiSpan: G,
  BlockInfo: Y,
  get BlockType() {
    return P;
  },
  BlockWrapper: Et,
  Decoration: L,
  get Direction() {
    return R;
  },
  EditorView: M,
  GutterMarker: nt,
  MatchDecorator: Pe,
  RectangleMarker: ht,
  ViewPlugin: W,
  ViewUpdate: Qt,
  WidgetType: dt,
  __test: Ul,
  activateHover: kl,
  closeHoverTooltip: Dl,
  closeHoverTooltips: Tl,
  crosshairCursor: pl,
  drawSelection: Vr,
  dropCursor: Yr,
  getDialog: Bl,
  getDrawSelectionConfig: Fr,
  getPanel: Pn,
  getTooltip: Ml,
  gutter: Pl,
  gutterLineClass: Yt,
  gutterWidgetClass: Fn,
  gutters: Ni,
  hasHoverTooltips: Al,
  highlightActiveLine: sl,
  highlightActiveLineGutter: ql,
  highlightSpecialChars: Ur,
  highlightTrailingWhitespace: $l,
  highlightWhitespace: Xl,
  hoverTooltip: Cl,
  keymap: Tn,
  layer: Hi,
  lineNumberMarkers: zn,
  lineNumberWidgetMarker: Kn,
  lineNumbers: Il,
  logException: $,
  panels: Ll,
  placeholder: ll,
  rectangularSelection: fl,
  repositionTooltips: Ol,
  runScopeHandlers: Br,
  scrollPastEnd: il,
  showDialog: Rl,
  showPanel: De,
  showTooltip: Pi,
  tooltips: gl
}, Symbol.toStringTag, { value: "Module" }));
export {
  G as BidiSpan,
  Y as BlockInfo,
  P as BlockType,
  Et as BlockWrapper,
  L as Decoration,
  R as Direction,
  M as EditorView,
  nt as GutterMarker,
  Pe as MatchDecorator,
  ht as RectangleMarker,
  W as ViewPlugin,
  Qt as ViewUpdate,
  dt as WidgetType,
  Ul as __test,
  kl as activateHover,
  Dl as closeHoverTooltip,
  Tl as closeHoverTooltips,
  pl as crosshairCursor,
  ea as default,
  Vr as drawSelection,
  Yr as dropCursor,
  Bl as getDialog,
  Fr as getDrawSelectionConfig,
  Pn as getPanel,
  Ml as getTooltip,
  Pl as gutter,
  Yt as gutterLineClass,
  Fn as gutterWidgetClass,
  Ni as gutters,
  Al as hasHoverTooltips,
  sl as highlightActiveLine,
  ql as highlightActiveLineGutter,
  Ur as highlightSpecialChars,
  $l as highlightTrailingWhitespace,
  Xl as highlightWhitespace,
  Cl as hoverTooltip,
  Tn as keymap,
  Hi as layer,
  zn as lineNumberMarkers,
  Kn as lineNumberWidgetMarker,
  Il as lineNumbers,
  $ as logException,
  Ll as panels,
  ll as placeholder,
  fl as rectangularSelection,
  Ol as repositionTooltips,
  Br as runScopeHandlers,
  il as scrollPastEnd,
  Rl as showDialog,
  De as showPanel,
  Pi as showTooltip,
  gl as tooltips
};
