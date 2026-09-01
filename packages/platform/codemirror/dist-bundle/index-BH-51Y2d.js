let ge = 0;
class Z {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class k {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = ge++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = e.combine || null;
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = O.match(e)), (t) => {
      let r = e(t);
      return r === void 0 ? null : [this, r];
    };
  }
}
k.closedBy = new k({ deserialize: (l) => l.split(" ") });
k.openedBy = new k({ deserialize: (l) => l.split(" ") });
k.group = new k({ deserialize: (l) => l.split(" ") });
k.isolate = new k({ deserialize: (l) => {
  if (l && l != "rtl" && l != "ltr" && l != "auto")
    throw new RangeError("Invalid value for isolate: " + l);
  return l || "auto";
} });
k.contextHash = new k({ perNode: !0 });
k.lookAhead = new k({ perNode: !0 });
k.mounted = new k({ perNode: !0 });
class G {
  constructor(e, t, r, n = !1) {
    this.tree = e, this.overlay = t, this.parser = r, this.bracketed = n;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[k.mounted.id];
  }
}
const xe = /* @__PURE__ */ Object.create(null);
class O {
  /**
  @internal
  */
  constructor(e, t, r, n = 0) {
    this.name = e, this.props = t, this.id = r, this.flags = n;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : xe, r = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), n = new O(e.name || "", t, e.id, r);
    if (e.props) {
      for (let i of e.props)
        if (Array.isArray(i) || (i = i(n)), i) {
          if (i[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[i[0].id] = i[1];
        }
    }
    return n;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(k.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let r in e)
      for (let n of r.split(" "))
        t[n] = e[r];
    return (r) => {
      for (let n = r.prop(k.group), i = -1; i < (n ? n.length : 0); i++) {
        let s = t[i < 0 ? r.name : n[i]];
        if (s)
          return s;
      }
    };
  }
}
O.none = new O(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class ae {
  /**
  Create a set with the given types. The `id` property of each
  type should correspond to its position within the array.
  */
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /**
  Create a copy of this set with some node properties added. The
  arguments to this method can be created with
  [`NodeProp.add`](#common.NodeProp.add).
  */
  extend(...e) {
    let t = [];
    for (let r of this.types) {
      let n = null;
      for (let i of e) {
        let s = i(r);
        if (s) {
          n || (n = Object.assign({}, r.props));
          let h = s[1], o = s[0];
          o.combine && o.id in n && (h = o.combine(n[o.id], h)), n[o.id] = h;
        }
      }
      t.push(n ? new O(r.name, n, r.id, r.flags) : r);
    }
    return new ae(t);
  }
}
const Q = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakMap();
var _;
(function(l) {
  l[l.ExcludeBuffers = 1] = "ExcludeBuffers", l[l.IncludeAnonymous = 2] = "IncludeAnonymous", l[l.IgnoreMounts = 4] = "IgnoreMounts", l[l.IgnoreOverlays = 8] = "IgnoreOverlays", l[l.EnterBracketed = 16] = "EnterBracketed";
})(_ || (_ = {}));
class P {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, r, n, i) {
    if (this.type = e, this.children = t, this.positions = r, this.length = n, this.props = null, i && i.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [s, h] of i)
        this.props[typeof s == "number" ? s : s.id] = h;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = G.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let r of this.children) {
      let n = r.toString();
      n && (t && (t += ","), t += n);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new te(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, r = 0) {
    let n = Q.get(this) || this.topNode, i = new te(n);
    return i.moveTo(e, t), Q.set(this, i._tree), i;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new I(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, t = 0) {
    let r = $(Q.get(this) || this.topNode, e, t, !1);
    return Q.set(this, r), r;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let r = $(fe.get(this) || this.topNode, e, t, !0);
    return fe.set(this, r), r;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return me(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: r, from: n = 0, to: i = this.length } = e, s = e.mode || 0, h = (s & _.IncludeAnonymous) > 0;
    for (let o = this.cursor(s | _.IncludeAnonymous); ; ) {
      let C = !1;
      if (o.from <= i && o.to >= n && (!h && o.type.isAnonymous || t(o) !== !1)) {
        if (o.firstChild())
          continue;
        C = !0;
      }
      for (; C && r && (h || !o.type.isAnonymous) && r(o), !o.nextSibling(); ) {
        if (!o.parent())
          return;
        C = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : se(O.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, r, n) => new P(this.type, t, r, n, this.propValues), e.makeTree || ((t, r, n) => new P(O.none, t, r, n)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return we(e);
  }
}
P.empty = new P(O.none, [], [], 0);
class ne {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new ne(this.buffer, this.index);
  }
}
class U {
  /**
  Create a tree buffer.
  */
  constructor(e, t, r) {
    this.buffer = e, this.length = t, this.set = r;
  }
  /**
  @internal
  */
  get type() {
    return O.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let t = this.buffer[e], r = this.buffer[e + 3], n = this.set.types[t], i = n.name;
    if (/\W/.test(i) && !n.isError && (i = JSON.stringify(i)), e += 4, r == e)
      return i;
    let s = [];
    for (; e < r; )
      s.push(this.childString(e)), e = this.buffer[e + 3];
    return i + "(" + s.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, r, n, i) {
    let { buffer: s } = this, h = -1;
    for (let o = e; o != t && !(de(i, n, s[o + 1], s[o + 2]) && (h = o, r > 0)); o = s[o + 3])
      ;
    return h;
  }
  /**
  @internal
  */
  slice(e, t, r) {
    let n = this.buffer, i = new Uint16Array(t - e), s = 0;
    for (let h = e, o = 0; h < t; ) {
      i[o++] = n[h++], i[o++] = n[h++] - r;
      let C = i[o++] = n[h++] - r;
      i[o++] = n[h++] - e, s = Math.max(s, C);
    }
    return new U(i, s, this.set);
  }
}
function de(l, e, t, r) {
  switch (l) {
    case -2:
      return t < e;
    case -1:
      return r >= e && t < e;
    case 0:
      return t < e && r > e;
    case 1:
      return t <= e && r > e;
    case 2:
      return r > e;
    case 4:
      return !0;
  }
}
function $(l, e, t, r) {
  for (var n; l.from == l.to || (t < 1 ? l.from >= e : l.from > e) || (t > -1 ? l.to <= e : l.to < e); ) {
    let s = !r && l instanceof I && l.index < 0 ? null : l.parent;
    if (!s)
      return l;
    l = s;
  }
  let i = r ? 0 : _.IgnoreOverlays;
  if (r)
    for (let s = l, h = s.parent; h; s = h, h = s.parent)
      s instanceof I && s.index < 0 && ((n = h.enter(e, t, i)) === null || n === void 0 ? void 0 : n.from) != s.from && (l = h);
  for (; ; ) {
    let s = l.enter(e, t, i);
    if (!s)
      return l;
    l = s;
  }
}
class pe {
  cursor(e = 0) {
    return new te(this, e);
  }
  getChild(e, t = null, r = null) {
    let n = ue(this, e, t, r);
    return n.length ? n[0] : null;
  }
  getChildren(e, t = null, r = null) {
    return ue(this, e, t, r);
  }
  resolve(e, t = 0) {
    return $(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return $(this, e, t, !0);
  }
  matchContext(e) {
    return ee(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), r = this;
    for (; t; ) {
      let n = t.lastChild;
      if (!n || n.to != t.to)
        break;
      n.type.isError && n.from == n.to ? (r = t, t = n.prevSibling) : t = n;
    }
    return r;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class I extends pe {
  constructor(e, t, r, n) {
    super(), this._tree = e, this.from = t, this.index = r, this._parent = n;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, r, n, i = 0) {
    for (let s = this; ; ) {
      for (let { children: h, positions: o } = s._tree, C = t > 0 ? h.length : -1; e != C; e += t) {
        let d = h[e], w = o[e] + s.from, A;
        if (!(!(i & _.EnterBracketed && d instanceof P && (A = G.get(d)) && !A.overlay && A.bracketed && r >= w && r <= w + d.length) && !de(n, r, w, w + d.length))) {
          if (d instanceof U) {
            if (i & _.ExcludeBuffers)
              continue;
            let z = d.findChild(0, d.buffer.length, t, r - w, n);
            if (z > -1)
              return new T(new ye(s, d, e, w), null, z);
          } else if (i & _.IncludeAnonymous || !d.type.isAnonymous || ie(d)) {
            let z;
            if (!(i & _.IgnoreMounts) && (z = G.get(d)) && !z.overlay)
              return new I(z.tree, w, e, s);
            let S = new I(d, w, e, s);
            return i & _.IncludeAnonymous || !S.type.isAnonymous ? S : S.nextChild(t < 0 ? d.children.length - 1 : 0, t, r, n, i);
          }
        }
      }
      if (i & _.IncludeAnonymous || !s.type.isAnonymous || (s.index >= 0 ? e = s.index + t : e = t < 0 ? -1 : s._parent._tree.children.length, s = s._parent, !s))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  prop(e) {
    return this._tree.prop(e);
  }
  enter(e, t, r = 0) {
    let n;
    if (!(r & _.IgnoreOverlays) && (n = G.get(this._tree)) && n.overlay) {
      let i = e - this.from, s = r & _.EnterBracketed && n.bracketed;
      for (let { from: h, to: o } of n.overlay)
        if ((t > 0 || s ? h <= i : h < i) && (t < 0 || s ? o >= i : o > i))
          return new I(n.tree, n.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, r);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function ue(l, e, t, r) {
  let n = l.cursor(), i = [];
  if (!n.firstChild())
    return i;
  if (t != null) {
    for (let s = !1; !s; )
      if (s = n.type.is(t), !n.nextSibling())
        return i;
  }
  for (; ; ) {
    if (r != null && n.type.is(r))
      return i;
    if (n.type.is(e) && i.push(n.node), !n.nextSibling())
      return r == null ? i : [];
  }
}
function ee(l, e, t = e.length - 1) {
  for (let r = l; t >= 0; r = r.parent) {
    if (!r)
      return !1;
    if (!r.type.isAnonymous) {
      if (e[t] && e[t] != r.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class ye {
  constructor(e, t, r, n) {
    this.parent = e, this.buffer = t, this.index = r, this.start = n;
  }
}
class T extends pe {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, r) {
    super(), this.context = e, this._parent = t, this.index = r, this.type = e.buffer.set.types[e.buffer.buffer[r]];
  }
  child(e, t, r) {
    let { buffer: n } = this.context, i = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.context.start, r);
    return i < 0 ? null : new T(this.context, this, i);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  prop(e) {
    return this.type.prop(e);
  }
  enter(e, t, r = 0) {
    if (r & _.ExcludeBuffers)
      return null;
    let { buffer: n } = this.context, i = n.findChild(this.index + 4, n.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return i < 0 ? null : new T(this.context, this, i);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new T(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new T(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: r } = this.context, n = this.index + 4, i = r.buffer[this.index + 3];
    if (i > n) {
      let s = r.buffer[this.index + 1];
      e.push(r.slice(n, i, s)), t.push(0);
    }
    return new P(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function ce(l) {
  if (!l.length)
    return null;
  let e = 0, t = l[0];
  for (let i = 1; i < l.length; i++) {
    let s = l[i];
    (s.from > t.from || s.to < t.to) && (t = s, e = i);
  }
  let r = t instanceof I && t.index < 0 ? null : t.parent, n = l.slice();
  return r ? n[e] = r : n.splice(e, 1), new be(n, t);
}
class be {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return ce(this.heads);
  }
}
function me(l, e, t) {
  let r = l.resolveInner(e, t), n = null;
  for (let i = r instanceof I ? r : r.context.parent; i; i = i.parent)
    if (i.index < 0) {
      let s = i.parent;
      (n || (n = [r])).push(s.resolve(e, t)), i = s;
    } else {
      let s = G.get(i.tree);
      if (s && s.overlay && s.overlay[0].from <= e && s.overlay[s.overlay.length - 1].to >= e) {
        let h = new I(s.tree, s.overlay[0].from + i.from, -1, i);
        (n || (n = [r])).push($(h, e, t, !1));
      }
    }
  return n ? ce(n) : r;
}
class te {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, t = 0) {
    if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = t & ~_.EnterBracketed, e instanceof I)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let r = e._parent; r; r = r._parent)
        this.stack.unshift(r.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: r, buffer: n } = this.buffer;
    return this.type = t || n.set.types[n.buffer[e]], this.from = r + n.buffer[e + 1], this.to = r + n.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof I ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, t, r) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, r, this.mode));
    let { buffer: n } = this.buffer, i = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.buffer.start, r);
    return i < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(i));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, t, r = this.mode) {
    return this.buffer ? r & _.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, r));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & _.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & _.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, r = this.stack.length - 1;
    if (e < 0) {
      let n = r < 0 ? 0 : this.stack[r] + 4;
      if (this.index != n)
        return this.yieldBuf(t.findChild(
          n,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let n = t.buffer[this.index + 3];
      if (n < (r < 0 ? t.buffer.length : t.buffer[this.stack[r] + 3]))
        return this.yieldBuf(n);
    }
    return r < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, r, { buffer: n } = this;
    if (n) {
      if (e > 0) {
        if (this.index < n.buffer.buffer.length)
          return !1;
      } else
        for (let i = 0; i < this.index; i++)
          if (n.buffer.buffer[i + 3] < this.index)
            return !1;
      ({ index: t, parent: r } = n);
    } else
      ({ index: t, _parent: r } = this._tree);
    for (; r; { index: t, _parent: r } = r)
      if (t > -1)
        for (let i = t + e, s = e < 0 ? -1 : r._tree.children.length; i != s; i += e) {
          let h = r._tree.children[i];
          if (this.mode & _.IncludeAnonymous || h instanceof U || !h.type.isAnonymous || ie(h))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, r = 0;
    if (e && e.context == this.buffer)
      e: for (let n = this.index, i = this.stack.length; i >= 0; ) {
        for (let s = e; s; s = s._parent)
          if (s.index == n) {
            if (n == this.index)
              return s;
            t = s, r = i + 1;
            break e;
          }
        n = this.stack[--i];
      }
    for (let n = r; n < this.stack.length; n++)
      t = new T(this.buffer, t, this.stack[n]);
    return this.bufferNode = new T(this.buffer, t, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, t) {
    for (let r = 0; ; ) {
      let n = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          r++;
          continue;
        }
        this.type.isAnonymous || (n = !0);
      }
      for (; ; ) {
        if (n && t && t(this), n = this.type.isAnonymous, !r)
          return;
        if (this.nextSibling())
          break;
        this.parent(), r--, n = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return ee(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: r } = t.set;
    for (let n = e.length - 1, i = this.stack.length - 1; n >= 0; i--) {
      if (i < 0)
        return ee(this._tree, e, n);
      let s = r[t.buffer[this.stack[i]]];
      if (!s.isAnonymous) {
        if (e[n] && e[n] != s.name)
          return !1;
        n--;
      }
    }
    return !0;
  }
}
function ie(l) {
  return l.children.some((e) => e instanceof U || !e.type.isAnonymous || ie(e));
}
function we(l) {
  var e;
  let { buffer: t, nodeSet: r, maxBufferLength: n = 1024, reused: i = [], minRepeatType: s = r.types.length } = l, h = Array.isArray(t) ? new ne(t, t.length) : t, o = r.types, C = 0, d = 0;
  function w(c, x, f, b, p, m) {
    let { id: a, start: u, end: g, size: y } = h, v = d, L = C;
    if (y < 0)
      if (h.next(), y == -1) {
        let j = i[a];
        f.push(j), b.push(u - c);
        return;
      } else if (y == -3) {
        C = a;
        return;
      } else if (y == -4) {
        d = a;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${y}`);
    let V = o[a], q, F, le = u - c;
    if (g - u <= n && (F = Y(h.pos - x, p))) {
      let j = new Uint16Array(F.size - F.skip), B = h.pos - F.size, E = j.length;
      for (; h.pos > B; )
        E = J(F.start, j, E);
      q = new U(j, g - F.start, r), le = F.start - c;
    } else {
      let j = h.pos - y;
      h.next();
      let B = [], E = [], H = a >= s ? a : -1, M = 0, K = g;
      for (; h.pos > j; )
        H >= 0 && h.id == H && h.size >= 0 ? (h.end <= K - n && (S(B, E, u, M, h.end, K, H, v, L), M = B.length, K = h.end), h.next()) : m > 2500 ? A(u, j, B, E) : w(u, j, B, E, H, m + 1);
      if (H >= 0 && M > 0 && M < B.length && S(B, E, u, M, u, K, H, v, L), B.reverse(), E.reverse(), H > -1 && M > 0) {
        let he = z(V, L);
        q = se(V, B, E, 0, B.length, 0, g - u, he, he);
      } else
        q = R(V, B, E, g - u, v - g, L);
    }
    f.push(q), b.push(le);
  }
  function A(c, x, f, b) {
    let p = [], m = 0, a = -1;
    for (; h.pos > x; ) {
      let { id: u, start: g, end: y, size: v } = h;
      if (v > 4)
        h.next();
      else {
        if (a > -1 && g < a)
          break;
        a < 0 && (a = y - n), p.push(u, g, y), m++, h.next();
      }
    }
    if (m) {
      let u = new Uint16Array(m * 4), g = p[p.length - 2];
      for (let y = p.length - 3, v = 0; y >= 0; y -= 3)
        u[v++] = p[y], u[v++] = p[y + 1] - g, u[v++] = p[y + 2] - g, u[v++] = v;
      f.push(new U(u, p[2] - g, r)), b.push(g - c);
    }
  }
  function z(c, x) {
    return (f, b, p) => {
      let m = 0, a = f.length - 1, u, g;
      if (a >= 0 && (u = f[a]) instanceof P) {
        if (!a && u.type == c && u.length == p)
          return u;
        (g = u.prop(k.lookAhead)) && (m = b[a] + u.length + g);
      }
      return R(c, f, b, p, m, x);
    };
  }
  function S(c, x, f, b, p, m, a, u, g) {
    let y = [], v = [];
    for (; c.length > b; )
      y.push(c.pop()), v.push(x.pop() + f - p);
    c.push(R(r.types[a], y, v, m - p, u - m, g)), x.push(p - f);
  }
  function R(c, x, f, b, p, m, a) {
    if (m) {
      let u = [k.contextHash, m];
      a = a ? [u].concat(a) : [u];
    }
    if (p > 25) {
      let u = [k.lookAhead, p];
      a = a ? [u].concat(a) : [u];
    }
    return new P(c, x, f, b, a);
  }
  function Y(c, x) {
    let f = h.fork(), b = 0, p = 0, m = 0, a = f.end - n, u = { size: 0, start: 0, skip: 0 };
    e: for (let g = f.pos - c; f.pos > g; ) {
      let y = f.size;
      if (f.id == x && y >= 0) {
        u.size = b, u.start = p, u.skip = m, m += 4, b += 4, f.next();
        continue;
      }
      let v = f.pos - y;
      if (y < 0 || v < g || f.start < a)
        break;
      let L = f.id >= s ? 4 : 0, V = f.start;
      for (f.next(); f.pos > v; ) {
        if (f.size < 0)
          if (f.size == -3 || f.size == -4)
            L += 4;
          else
            break e;
        else f.id >= s && (L += 4);
        f.next();
      }
      p = V, b += y, m += L;
    }
    return (x < 0 || b == c) && (u.size = b, u.start = p, u.skip = m), u.size > 4 ? u : void 0;
  }
  function J(c, x, f) {
    let { id: b, start: p, end: m, size: a } = h;
    if (h.next(), a >= 0 && b < s) {
      let u = f;
      if (a > 4) {
        let g = h.pos - (a - 4);
        for (; h.pos > g; )
          f = J(c, x, f);
      }
      x[--f] = u, x[--f] = m - c, x[--f] = p - c, x[--f] = b;
    } else a == -3 ? C = b : a == -4 && (d = b);
    return f;
  }
  let W = [], N = [];
  for (; h.pos > 0; )
    w(l.start || 0, l.bufferStart || 0, W, N, -1, 0);
  let D = (e = l.length) !== null && e !== void 0 ? e : W.length ? N[0] + W[0].length : 0;
  return new P(o[l.topID], W.reverse(), N.reverse(), D);
}
const oe = /* @__PURE__ */ new WeakMap();
function X(l, e) {
  if (!l.isAnonymous || e instanceof U || e.type != l)
    return 1;
  let t = oe.get(e);
  if (t == null) {
    t = 1;
    for (let r of e.children) {
      if (r.type != l || !(r instanceof P)) {
        t = 1;
        break;
      }
      t += X(l, r);
    }
    oe.set(e, t);
  }
  return t;
}
function se(l, e, t, r, n, i, s, h, o) {
  let C = 0;
  for (let S = r; S < n; S++)
    C += X(l, e[S]);
  let d = Math.ceil(
    C * 1.5 / 8
    /* Balance.BranchFactor */
  ), w = [], A = [];
  function z(S, R, Y, J, W) {
    for (let N = Y; N < J; ) {
      let D = N, c = R[N], x = X(l, S[N]);
      for (N++; N < J; N++) {
        let f = X(l, S[N]);
        if (x + f >= d)
          break;
        x += f;
      }
      if (N == D + 1) {
        if (x > d) {
          let f = S[D];
          z(f.children, f.positions, 0, f.children.length, R[D] + W);
          continue;
        }
        w.push(S[D]);
      } else {
        let f = R[N - 1] + S[N - 1].length - c;
        w.push(se(l, S, R, D, N, c, f, null, o));
      }
      A.push(c + W - i);
    }
  }
  return z(e, t, r, n, 0), (h || o)(w, A, s);
}
class re {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, t, r, n, i = !1, s = !1) {
    this.from = e, this.to = t, this.tree = r, this.offset = n, this.open = (i ? 1 : 0) | (s ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(e, t = [], r = !1) {
    let n = [new re(0, e.length, e, 0, !1, r)];
    for (let i of t)
      i.to > e.length && n.push(i);
    return n;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, r = 128) {
    if (!t.length)
      return e;
    let n = [], i = 1, s = e.length ? e[0] : null;
    for (let h = 0, o = 0, C = 0; ; h++) {
      let d = h < t.length ? t[h] : null, w = d ? d.fromA : 1e9;
      if (w - o >= r)
        for (; s && s.from < w; ) {
          let A = s;
          if (o >= A.from || w <= A.to || C) {
            let z = Math.max(A.from, o) - C, S = Math.min(A.to, w) - C;
            A = z >= S ? null : new re(z, S, A.tree, A.offset + C, h > 0, !!d);
          }
          if (A && n.push(A), s.to > w)
            break;
          s = i < e.length ? e[i++] : null;
        }
      if (!d)
        break;
      o = d.toA, C = d.toA - d.toB;
    }
    return n;
  }
}
class Ce {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, t, r) {
    return typeof e == "string" && (e = new ke(e)), r = r ? r.length ? r.map((n) => new Z(n.from, n.to)) : [new Z(0, 0)] : [new Z(0, e.length)], this.createParse(e, t || [], r);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, r) {
    let n = this.startParse(e, t, r);
    for (; ; ) {
      let i = n.advance();
      if (i)
        return i;
    }
  }
}
class ke {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new k({ perNode: !0 });
export {
  _ as I,
  k as N,
  Ce as P,
  P as T,
  re as a,
  O as b,
  ae as c
};
