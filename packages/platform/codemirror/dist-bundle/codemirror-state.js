let le = [], Oe = [];
(() => {
  let l = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,1n,9,16,o,,x,1i,3,,i,,7,a,2,t,3,1k,,,7,2,2,2,3,9,,a,2,q,,2,3,1k,,,5,4,2,2,3,3,,u,2,3,,b,3,1k,,,8,,3,,3,k,2,m,6,,3,1k,,,7,2,2,2,3,7,3,a,2,u,,1n,5,3,3,,4,9,,14,5,1j,,,7,,3,,4,7,2,b,2,t,3,1k,,,7,,3,,4,7,2,b,2,f,,c,4,1j,2,,7,,3,,4,9,,a,2,t,3,1y,,4,6,,,,8,i,2,1p,,,8,c,8,2q,,,a,b,7,21,2,r,,,,,,4,2,1d,k,,2,5,b,,10,9,,2u,b,,6,n,4,4,3,g,4,d,,,3,6,,f,,jj,3,qa,4,s,3,t,2,u,2,1s,w,9,,19,3,,,39,2,y,,3a,c,4,c,63,5,1l,a,,,,,2,o,2,,1c,1a,2,c,k,5,1b,h,12,9,c,3,u,d,1k,e,1c,k,48,3,,l,4,,6,,2,3,5i,1s,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,n,5,4,,2b,2,1e,i,q,i,d,,12,8,p,d,18,4,1b,e,10,,1v,e,c,,8,2,1a,,1f,,,3,2,2,5,2,,,15,5,5,2,6k,8,,2,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,1t,5,8t,2,25,6,1y,b,1d,4,3e,3,1h,f,15,,2,2,a,4,19,b,7,,1p,3,10,e,g,2,18,,c,3,1c,e,8,4,,2,2k,c,6,,2,,4d,c,l,4,1j,2,,7,2,2,2,3,9,,a,2,2,7,3,5,1v,9,,,2,,,4,,5,,,e,2,2a,i,n,,29,k,6j,7,2,9,r,2,2a,h,2y,d,2t,3,2,a,74,f,6t,6,,2,2,4,,,,2,3x,7,2,7,3,,s,a,14,7,,4,8,,9,b,1a,g,5i,8,5j,8,,8,2a,m,,e,3e,6,3,,,2,,7,,,1u,5,,2,,5,9n,4,9,2,,,1c,7,3,5,n,,44l,,6,f,8ug,i,1xc,5,1n,7,t4,,,1j,7,4,29,,b,2,f57,2,3mp,1a,2,n,f2,5,3,6,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,2s,,4g,7,af,,1p,4,e4,4,72,2,6r,,2,,7,2,5,,d6,7,31,7,240,5".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < l.length; e++)
    (e % 2 ? Oe : le).push(t = t + l[e]);
})();
function Qe(l) {
  if (l < 768) return !1;
  for (let e = 0, t = le.length; ; ) {
    let n = e + t >> 1;
    if (l < le[n]) t = n;
    else if (l >= Oe[n]) e = n + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function ye(l) {
  return l >= 127462 && l <= 127487;
}
const Se = 8205;
function Xe(l, e, t = !0, n = !0) {
  return (t ? Me : Ye)(l, e, n);
}
function Me(l, e, t) {
  if (e == l.length) return e;
  e && Re(l.charCodeAt(e)) && Te(l.charCodeAt(e - 1)) && e--;
  let n = se(l, e);
  for (e += Ie(n); e < l.length; ) {
    let i = se(l, e);
    if (n == Se || i == Se || t && Qe(i))
      e += Ie(i), n = i;
    else if (ye(i)) {
      let s = 0, r = e - 2;
      for (; r >= 0 && ye(se(l, r)); )
        s++, r -= 2;
      if (s % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function Ye(l, e, t) {
  for (; e > 1; ) {
    let n = Me(l, e - 2, t);
    if (n < e) return n;
    e--;
  }
  return 0;
}
function se(l, e) {
  let t = l.charCodeAt(e);
  if (!Te(t) || e + 1 == l.length) return t;
  let n = l.charCodeAt(e + 1);
  return Re(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function Re(l) {
  return l >= 56320 && l < 57344;
}
function Te(l) {
  return l >= 55296 && l < 56320;
}
function Ie(l) {
  return l < 65536 ? 1 : 2;
}
class k {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, n) {
    [e, t] = N(this, e, t);
    let i = [];
    return this.decompose(
      0,
      e,
      i,
      2
      /* Open.To */
    ), n.length && n.decompose(
      0,
      n.length,
      i,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      i,
      1
      /* Open.From */
    ), E.from(i, this.length - (t - e) + n.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    [e, t] = N(this, e, t);
    let n = [];
    return this.decompose(e, t, n, 0), E.from(n, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), n = this.length - this.scanIdentical(e, -1), i = new j(this), s = new j(e);
    for (let r = t, h = t; ; ) {
      if (i.next(r), s.next(r), r = 0, i.lineBreak != s.lineBreak || i.done != s.done || i.value != s.value)
        return !1;
      if (h += i.value.length, i.done || h >= n)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new j(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new Be(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let n;
    if (e == null)
      n = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let i = this.line(e).from;
      n = this.iterRange(i, Math.max(i, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new Fe(n);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? k.empty : e.length <= 32 ? new x(e) : E.from(x.split(e, []));
  }
}
class x extends k {
  constructor(e, t = _e(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, n, i) {
    for (let s = 0; ; s++) {
      let r = this.text[s], h = i + r.length;
      if ((t ? n : h) >= e)
        return new Le(i, h, n, r);
      i = h + 1, n++;
    }
  }
  decompose(e, t, n, i) {
    let s = e <= 0 && t >= this.length ? this : new x(Pe(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (i & 1) {
      let r = n.pop(), h = ee(s.text, r.text.slice(), 0, s.length);
      if (h.length <= 32)
        n.push(new x(h, r.length + s.length));
      else {
        let o = h.length >> 1;
        n.push(new x(h.slice(0, o)), new x(h.slice(o)));
      }
    } else
      n.push(s);
  }
  replace(e, t, n) {
    if (!(n instanceof x))
      return super.replace(e, t, n);
    [e, t] = N(this, e, t);
    let i = ee(this.text, ee(n.text, Pe(this.text, 0, e)), t), s = this.length + n.length - (t - e);
    return i.length <= 32 ? new x(i, s) : E.from(x.split(i, []), s);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = N(this, e, t);
    let i = "";
    for (let s = 0, r = 0; s <= t && r < this.text.length; r++) {
      let h = this.text[r], o = s + h.length;
      s > e && r && (i += n), e < o && t > s && (i += h.slice(Math.max(0, e - s), t - s)), s = o + 1;
    }
    return i;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let n = [], i = -1;
    for (let s of e)
      n.push(s), i += s.length + 1, n.length == 32 && (t.push(new x(n, i)), n = [], i = -1);
    return i > -1 && t.push(new x(n, i)), t;
  }
}
class E extends k {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let n of e)
      this.lines += n.lines;
  }
  lineInner(e, t, n, i) {
    for (let s = 0; ; s++) {
      let r = this.children[s], h = i + r.length, o = n + r.lines - 1;
      if ((t ? o : h) >= e)
        return r.lineInner(e, t, n, i);
      i = h + 1, n = o + 1;
    }
  }
  decompose(e, t, n, i) {
    for (let s = 0, r = 0; r <= t && s < this.children.length; s++) {
      let h = this.children[s], o = r + h.length;
      if (e <= o && t >= r) {
        let a = i & ((r <= e ? 1 : 0) | (o >= t ? 2 : 0));
        r >= e && o <= t && !a ? n.push(h) : h.decompose(e - r, t - r, n, a);
      }
      r = o + 1;
    }
  }
  replace(e, t, n) {
    if ([e, t] = N(this, e, t), n.lines < this.lines)
      for (let i = 0, s = 0; i < this.children.length; i++) {
        let r = this.children[i], h = s + r.length;
        if (e >= s && t <= h) {
          let o = r.replace(e - s, t - s, n), a = this.lines - r.lines + o.lines;
          if (o.lines < a >> 4 && o.lines > a >> 6) {
            let u = this.children.slice();
            return u[i] = o, new E(u, this.length - (t - e) + n.length);
          }
          return super.replace(s, h, o);
        }
        s = h + 1;
      }
    return super.replace(e, t, n);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = N(this, e, t);
    let i = "";
    for (let s = 0, r = 0; s < this.children.length && r <= t; s++) {
      let h = this.children[s], o = r + h.length;
      r > e && s && (i += n), e < o && t > r && (i += h.sliceString(e - r, t - r, n)), r = o + 1;
    }
    return i;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof E))
      return 0;
    let n = 0, [i, s, r, h] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; i += t, s += t) {
      if (i == r || s == h)
        return n;
      let o = this.children[i], a = e.children[s];
      if (o != a)
        return n + o.scanIdentical(a, t);
      n += o.length + 1;
    }
  }
  static from(e, t = e.reduce((n, i) => n + i.length + 1, -1)) {
    let n = 0;
    for (let d of e)
      n += d.lines;
    if (n < 32) {
      let d = [];
      for (let g of e)
        g.flatten(d);
      return new x(d, t);
    }
    let i = Math.max(
      32,
      n >> 5
      /* Tree.BranchShift */
    ), s = i << 1, r = i >> 1, h = [], o = 0, a = -1, u = [];
    function f(d) {
      let g;
      if (d.lines > s && d instanceof E)
        for (let m of d.children)
          f(m);
      else d.lines > r && (o > r || !o) ? (c(), h.push(d)) : d instanceof x && o && (g = u[u.length - 1]) instanceof x && d.lines + g.lines <= 32 ? (o += d.lines, a += d.length + 1, u[u.length - 1] = new x(g.text.concat(d.text), g.length + 1 + d.length)) : (o + d.lines > i && c(), o += d.lines, a += d.length + 1, u.push(d));
    }
    function c() {
      o != 0 && (h.push(u.length == 1 ? u[0] : E.from(u, a)), a = -1, o = u.length = 0);
    }
    for (let d of e)
      f(d);
    return c(), h.length == 1 ? h[0] : new E(h, t);
  }
}
k.empty = /* @__PURE__ */ new x([""], 0);
function _e(l) {
  let e = -1;
  for (let t of l)
    e += t.length + 1;
  return e;
}
function ee(l, e, t = 0, n = 1e9) {
  for (let i = 0, s = 0, r = !0; s < l.length && i <= n; s++) {
    let h = l[s], o = i + h.length;
    o >= t && (o > n && (h = h.slice(0, n - i)), i < t && (h = h.slice(t - i)), r ? (e[e.length - 1] += h, r = !1) : e.push(h)), i = o + 1;
  }
  return e;
}
function Pe(l, e, t) {
  return ee(l, [""], e, t);
}
class j {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof x ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let n = this.nodes.length - 1, i = this.nodes[n], s = this.offsets[n], r = s >> 1, h = i instanceof x ? i.text.length : i.children.length;
      if (r == (t > 0 ? h : 0)) {
        if (n == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[n] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (i instanceof x) {
        let o = i.text[r + (t < 0 ? -1 : 0)];
        if (this.offsets[n] += t, o.length > Math.max(0, e))
          return this.value = e == 0 ? o : t > 0 ? o.slice(e) : o.slice(0, o.length - e), this;
        e -= o.length;
      } else {
        let o = i.children[r + (t < 0 ? -1 : 0)];
        e > o.length ? (e -= o.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(o), this.offsets.push(t > 0 ? 1 : (o instanceof x ? o.text.length : o.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Be {
  constructor(e, t, n) {
    this.value = "", this.done = !1, this.cursor = new j(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let n = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > n && (e = n), n -= e;
    let { value: i } = this.cursor.next(e);
    return this.pos += (i.length + e) * t, this.value = i.length <= n ? i : t < 0 ? i.slice(i.length - n) : i.slice(0, n), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Fe {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: n, value: i } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = i, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (k.prototype[Symbol.iterator] = function() {
  return this.iter();
}, j.prototype[Symbol.iterator] = Be.prototype[Symbol.iterator] = Fe.prototype[Symbol.iterator] = function() {
  return this;
});
class Le {
  /**
  @internal
  */
  constructor(e, t, n, i) {
    this.from = e, this.to = t, this.number = n, this.text = i;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function N(l, e, t) {
  return e = Math.max(0, Math.min(l.length, e)), [e, Math.max(e, Math.min(l.length, t))];
}
function H(l, e, t = !0, n = !0) {
  return Xe(l, e, t, n);
}
function et(l) {
  return l >= 56320 && l < 57344;
}
function tt(l) {
  return l >= 55296 && l < 56320;
}
function nt(l, e) {
  let t = l.charCodeAt(e);
  if (!tt(t) || e + 1 == l.length)
    return t;
  let n = l.charCodeAt(e + 1);
  return et(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function it(l) {
  return l <= 65535 ? String.fromCharCode(l) : (l -= 65536, String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320));
}
function st(l) {
  return l < 65536 ? 1 : 2;
}
const he = /\r\n?|\n/;
var M = /* @__PURE__ */ (function(l) {
  return l[l.Simple = 0] = "Simple", l[l.TrackDel = 1] = "TrackDel", l[l.TrackBefore = 2] = "TrackBefore", l[l.TrackAfter = 3] = "TrackAfter", l;
})(M || (M = {}));
class O {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t + 1];
      e += n < 0 ? this.sections[t] : n;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, n = 0, i = 0; t < this.sections.length; ) {
      let s = this.sections[t++], r = this.sections[t++];
      r < 0 ? (e(n, i, s), i += s) : i += r, n += s;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    oe(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], i = this.sections[t++];
      i < 0 ? e.push(n, i) : e.push(i, n);
    }
    return new O(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Je(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : ae(this, e, t);
  }
  mapPos(e, t = -1, n = M.Simple) {
    let i = 0, s = 0;
    for (let r = 0; r < this.sections.length; ) {
      let h = this.sections[r++], o = this.sections[r++], a = i + h;
      if (o < 0) {
        if (a > e)
          return s + (e - i);
        s += h;
      } else {
        if (n != M.Simple && a >= e && (n == M.TrackDel && i < e && a > e || n == M.TrackBefore && i < e || n == M.TrackAfter && a > e))
          return null;
        if (a > e || a == e && t < 0 && !h)
          return e == i || t < 0 ? s : s + o;
        s += o;
      }
      i = a;
    }
    if (e > i)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${i}`);
    return s;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let n = 0, i = 0; n < this.sections.length && i <= t; ) {
      let s = this.sections[n++], r = this.sections[n++], h = i + s;
      if (r >= 0 && i <= t && h >= e)
        return i < e && h > t ? "cover" : !0;
      i = h;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], i = this.sections[t++];
      e += (e ? " " : "") + n + (i >= 0 ? ":" + i : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new O(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new O(e);
  }
}
class y extends O {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return oe(this, (t, n, i, s, r) => e = e.replace(i, i + (n - t), r), !1), e;
  }
  mapDesc(e, t = !1) {
    return ae(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), n = [];
    for (let i = 0, s = 0; i < t.length; i += 2) {
      let r = t[i], h = t[i + 1];
      if (h >= 0) {
        t[i] = h, t[i + 1] = r;
        let o = i >> 1;
        for (; n.length < o; )
          n.push(k.empty);
        n.push(r ? e.slice(s, s + r) : k.empty);
      }
      s += r;
    }
    return new y(t, n);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Je(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : ae(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    oe(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return O.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], n = [], i = [], s = new G(this);
    e: for (let r = 0, h = 0; ; ) {
      let o = r == e.length ? 1e9 : e[r++];
      for (; h < o || h == o && s.len == 0; ) {
        if (s.done)
          break e;
        let u = Math.min(s.len, o - h);
        P(i, u, -1);
        let f = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
        P(t, u, f), f > 0 && B(n, t, s.text), s.forward(u), h += u;
      }
      let a = e[r++];
      for (; h < a; ) {
        if (s.done)
          break e;
        let u = Math.min(s.len, a - h);
        P(t, u, -1), P(i, u, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(u), h += u;
      }
    }
    return {
      changes: new y(t, n),
      filtered: O.create(i)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t], i = this.sections[t + 1];
      i < 0 ? e.push(n) : i == 0 ? e.push([n]) : e.push([n].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, n) {
    let i = [], s = [], r = 0, h = null;
    function o(u = !1) {
      if (!u && !i.length)
        return;
      r < t && P(i, t - r, -1);
      let f = new y(i, s);
      h = h ? h.compose(f.map(h)) : f, i = [], s = [], r = 0;
    }
    function a(u) {
      if (Array.isArray(u))
        for (let f of u)
          a(f);
      else if (u instanceof y) {
        if (u.length != t)
          throw new RangeError(`Mismatched change set length (got ${u.length}, expected ${t})`);
        o(), h = h ? h.compose(u.map(h)) : u;
      } else {
        let { from: f, to: c = f, insert: d } = u;
        if (f > c || f < 0 || c > t)
          throw new RangeError(`Invalid change range ${f} to ${c} (in doc of length ${t})`);
        let g = d ? typeof d == "string" ? k.of(d.split(n || he)) : d : k.empty, m = g.length;
        if (f == c && m == 0)
          return;
        f < r && o(), f > r && P(i, f - r, -1), P(i, c - f, m), B(s, i, g), r = c;
      }
    }
    return a(e), o(!h), h;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new y(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], n = [];
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (typeof s == "number")
        t.push(s, -1);
      else {
        if (!Array.isArray(s) || typeof s[0] != "number" || s.some((r, h) => h && typeof r != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (s.length == 1)
          t.push(s[0], 0);
        else {
          for (; n.length < i; )
            n.push(k.empty);
          n[i] = k.of(s.slice(1)), t.push(s[0], n[i].length);
        }
      }
    }
    return new y(t, n);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new y(e, t);
  }
}
function P(l, e, t, n = !1) {
  if (e == 0 && t <= 0)
    return;
  let i = l.length - 2;
  i >= 0 && t <= 0 && t == l[i + 1] ? l[i] += e : i >= 0 && e == 0 && l[i] == 0 ? l[i + 1] += t : n ? (l[i] += e, l[i + 1] += t) : l.push(e, t);
}
function B(l, e, t) {
  if (t.length == 0)
    return;
  let n = e.length - 2 >> 1;
  if (n < l.length)
    l[l.length - 1] = l[l.length - 1].append(t);
  else {
    for (; l.length < n; )
      l.push(k.empty);
    l.push(t);
  }
}
function oe(l, e, t) {
  let n = l.inserted;
  for (let i = 0, s = 0, r = 0; r < l.sections.length; ) {
    let h = l.sections[r++], o = l.sections[r++];
    if (o < 0)
      i += h, s += h;
    else {
      let a = i, u = s, f = k.empty;
      for (; a += h, u += o, o && n && (f = f.append(n[r - 2 >> 1])), !(t || r == l.sections.length || l.sections[r + 1] < 0); )
        h = l.sections[r++], o = l.sections[r++];
      e(i, a, s, u, f), i = a, s = u;
    }
  }
}
function ae(l, e, t, n = !1) {
  let i = [], s = n ? [] : null, r = new G(l), h = new G(e);
  for (let o = -1; ; ) {
    if (r.done && h.len || h.done && r.len)
      throw new Error("Mismatched change set lengths");
    if (r.ins == -1 && h.ins == -1) {
      let a = Math.min(r.len, h.len);
      P(i, a, -1), r.forward(a), h.forward(a);
    } else if (h.ins >= 0 && (r.ins < 0 || o == r.i || r.off == 0 && (h.len < r.len || h.len == r.len && !t))) {
      let a = h.len;
      for (P(i, h.ins, -1); a; ) {
        let u = Math.min(r.len, a);
        r.ins >= 0 && o < r.i && r.len <= u && (P(i, 0, r.ins), s && B(s, i, r.text), o = r.i), r.forward(u), a -= u;
      }
      h.next();
    } else if (r.ins >= 0) {
      let a = 0, u = r.len;
      for (; u; )
        if (h.ins == -1) {
          let f = Math.min(u, h.len);
          a += f, u -= f, h.forward(f);
        } else if (h.ins == 0 && h.len < u)
          u -= h.len, h.next();
        else
          break;
      P(i, a, o < r.i ? r.ins : 0), s && o < r.i && B(s, i, r.text), o = r.i, r.forward(r.len - u);
    } else {
      if (r.done && h.done)
        return s ? y.createSet(i, s) : O.create(i);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Je(l, e, t = !1) {
  let n = [], i = t ? [] : null, s = new G(l), r = new G(e);
  for (let h = !1; ; ) {
    if (s.done && r.done)
      return i ? y.createSet(n, i) : O.create(n);
    if (s.ins == 0)
      P(n, s.len, 0, h), s.next();
    else if (r.len == 0 && !r.done)
      P(n, 0, r.ins, h), i && B(i, n, r.text), r.next();
    else {
      if (s.done || r.done)
        throw new Error("Mismatched change set lengths");
      {
        let o = Math.min(s.len2, r.len), a = n.length;
        if (s.ins == -1) {
          let u = r.ins == -1 ? -1 : r.off ? 0 : r.ins;
          P(n, o, u, h), i && u && B(i, n, r.text);
        } else r.ins == -1 ? (P(n, s.off ? 0 : s.len, o, h), i && B(i, n, s.textBit(o))) : (P(n, s.off ? 0 : s.len, r.off ? 0 : r.ins, h), i && !r.off && B(i, n, r.text));
        h = (s.ins > o || r.ins >= 0 && r.len > o) && (h || n.length > a), s.forward2(o), r.forward(o);
      }
    }
  }
}
class G {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? k.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, n = this.i - 2 >> 1;
    return n >= t.length && !e ? k.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class R {
  constructor(e, t, n, i) {
    this.from = e, this.to = t, this.flags = n, this.goalColumn = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  A flag that, when set, makes some selection-extending commands
  treat the range's head and anchor as exchangeable, so that for
  example Shift-ArrowUp will make the lower side of the selection
  the anchor, even if that was the head before. Used to implement
  MacOS-style undirectional selections.
  */
  get undirectional() {
    return (this.flags & 64) > 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let n, i;
    return this.empty ? n = i = e.mapPos(this.from, t) : (n = e.mapPos(this.from, 1), i = e.mapPos(this.to, -1)), n == this.from && i == this.to ? this : new R(n, i, this.flags, this.goalColumn);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e, n = 0) {
    if (e <= this.anchor && t >= this.anchor)
      return w.range(e, t, void 0, void 0, n);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return w.range(this.anchor, i, void 0, void 0, n);
  }
  /**
  Compare this range to another range.
  */
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && this.goalColumn == e.goalColumn && (!t || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return w.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, n, i) {
    return new R(e, t, n, i);
  }
}
class w {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : w.create(this.ranges.map((n) => n.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let n = 0; n < this.ranges.length; n++)
      if (!this.ranges[n].eq(e.ranges[n], t))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new w([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return w.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let n = this.ranges.slice();
    return n[t] = e, w.create(n, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new w(e.ranges.map((t) => R.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new w([w.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let n = 0, i = 0; i < e.length; i++) {
      let s = e[i];
      if (s.empty ? s.from <= n : s.from < n)
        return w.normalized(e.slice(), t);
      n = s.to;
    }
    return new w(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, n, i) {
    return R.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)), i);
  }
  /**
  Create a selection range.
  */
  static range(e, t, n, i, s) {
    let r = i == null ? 7 : Math.min(6, i);
    return !s && e != t && (s = t < e ? 1 : -1), s && (r |= s < 0 ? 8 : 16), t < e ? R.create(t, e, r | 32, n) : R.create(e, t, r, n);
  }
  /**
  Create an [undirectional](https://codemirror.net/6/docs/ref/#state.SelectionRange.undirectional)
  selection range.
  */
  static undirectionalRange(e, t) {
    return R.create(e, t, 64, void 0);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let n = e[t];
    e.sort((i, s) => i.from - s.from), t = e.indexOf(n);
    for (let i = 1; i < e.length; i++) {
      let s = e[i], r = e[i - 1];
      if (s.empty ? s.from <= r.to : s.from < r.to) {
        let h = r.from, o = Math.max(s.to, r.to);
        i <= t && t--, e.splice(--i, 2, s.anchor > s.head ? w.range(o, h) : w.range(h, o));
      }
    }
    return new w(e, t);
  }
}
function De(l, e) {
  for (let t of l.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let we = 0;
class C {
  constructor(e, t, n, i, s) {
    this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = i, this.id = we++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new C(e.combine || ((t) => t), e.compareInput || ((t, n) => t === n), e.compare || (e.combine ? (t, n) => t === n : ve), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new te([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new te(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new te(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (n) => n), this.compute([e], (n) => t(n.field(e)));
  }
}
function ve(l, e) {
  return l == e || l.length == e.length && l.every((t, n) => t === e[n]);
}
class te {
  constructor(e, t, n, i) {
    this.dependencies = e, this.facet = t, this.type = n, this.value = i, this.id = we++;
  }
  dynamicSlot(e) {
    var t;
    let n = this.value, i = this.facet.compareInput, s = this.id, r = e[s] >> 1, h = this.type == 2, o = !1, a = !1, u = [];
    for (let f of this.dependencies)
      f == "doc" ? o = !0 : f == "selection" ? a = !0 : (((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && u.push(e[f.id]);
    return {
      create(f) {
        return f.values[r] = n(f), 1;
      },
      update(f, c) {
        if (o && c.docChanged || a && (c.docChanged || c.selection) || ue(f, u)) {
          let d = n(f);
          if (h ? !Ae(d, f.values[r], i) : !i(d, f.values[r]))
            return f.values[r] = d, 1;
        }
        return 0;
      },
      reconfigure: (f, c) => {
        let d, g = c.config.address[s];
        if (g != null) {
          let m = ie(c, g);
          if (this.dependencies.every((p) => p instanceof C ? c.facet(p) === f.facet(p) : p instanceof L ? c.field(p, !1) == f.field(p, !1) : !0) || (h ? Ae(d = n(f), m, i) : i(d = n(f), m)))
            return f.values[r] = m, 0;
        } else
          d = n(f);
        return f.values[r] = d, 1;
      }
    };
  }
  get extension() {
    return this;
  }
}
function Ae(l, e, t) {
  if (l.length != e.length)
    return !1;
  for (let n = 0; n < l.length; n++)
    if (!t(l[n], e[n]))
      return !1;
  return !0;
}
function ue(l, e) {
  let t = !1;
  for (let n of e)
    U(l, n) & 1 && (t = !0);
  return t;
}
function rt(l, e, t) {
  let n = t.map((o) => l[o.id]), i = t.map((o) => o.type), s = n.filter((o) => !(o & 1)), r = l[e.id] >> 1;
  function h(o) {
    let a = [];
    for (let u = 0; u < n.length; u++) {
      let f = ie(o, n[u]);
      if (i[u] == 2)
        for (let c of f)
          a.push(c);
      else
        a.push(f);
    }
    return e.combine(a);
  }
  return {
    create(o) {
      for (let a of n)
        U(o, a);
      return o.values[r] = h(o), 1;
    },
    update(o, a) {
      if (!ue(o, s))
        return 0;
      let u = h(o);
      return e.compare(u, o.values[r]) ? 0 : (o.values[r] = u, 1);
    },
    reconfigure(o, a) {
      let u = ue(o, n), f = a.config.facets[e.id], c = a.facet(e);
      if (f && !u && ve(t, f))
        return o.values[r] = c, 0;
      let d = h(o);
      return e.compare(d, c) ? (o.values[r] = c, 0) : (o.values[r] = d, 1);
    }
  };
}
const X = /* @__PURE__ */ C.define({ static: !0 });
class L {
  constructor(e, t, n, i, s) {
    this.id = e, this.createF = t, this.updateF = n, this.compareF = i, this.spec = s, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new L(we++, e.create, e.update, e.compare || ((n, i) => n === i), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(X).find((n) => n.field == this);
    return (t?.create || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (n) => (n.values[t] = this.create(n), 1),
      update: (n, i) => {
        let s = n.values[t], r = this.updateF(s, i);
        return this.compareF(s, r) ? 0 : (n.values[t] = r, 1);
      },
      reconfigure: (n, i) => {
        let s = n.facet(X), r = i.facet(X), h;
        return (h = s.find((o) => o.field == this)) && h != r.find((o) => o.field == this) ? (n.values[t] = h.create(n), 1) : i.config.address[this.id] != null ? (n.values[t] = i.field(this), 0) : (n.values[t] = this.create(n), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, X.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const F = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function q(l) {
  return (e) => new Ve(e, l);
}
const lt = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ q(F.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ q(F.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ q(F.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ q(F.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ q(F.lowest)
};
class Ve {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
  get extension() {
    return this;
  }
}
class Q {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new fe(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return Q.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class fe {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
  get extension() {
    return this;
  }
}
class ne {
  constructor(e, t, n, i, s, r) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = i, this.staticValues = s, this.facets = r, this.statusTemplate = []; this.statusTemplate.length < n.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, n) {
    let i = [], s = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Map();
    for (let c of ht(e, t, r))
      c instanceof L ? i.push(c) : (s[c.facet.id] || (s[c.facet.id] = [])).push(c);
    let h = /* @__PURE__ */ Object.create(null), o = [], a = [];
    for (let c of i)
      h[c.id] = a.length << 1, a.push((d) => c.slot(d));
    let u = n?.config.facets;
    for (let c in s) {
      let d = s[c], g = d[0].facet, m = u && u[c] || [];
      if (d.every(
        (p) => p.type == 0
        /* Provider.Static */
      ))
        if (h[g.id] = o.length << 1 | 1, ve(m, d))
          o.push(n.facet(g));
        else {
          let p = g.combine(d.map((S) => S.value));
          o.push(n && g.compare(p, n.facet(g)) ? n.facet(g) : p);
        }
      else {
        for (let p of d)
          p.type == 0 ? (h[p.id] = o.length << 1 | 1, o.push(p.value)) : (h[p.id] = a.length << 1, a.push((S) => p.dynamicSlot(S)));
        h[g.id] = a.length << 1, a.push((p) => rt(p, g, d));
      }
    }
    let f = a.map((c) => c(h));
    return new ne(e, r, f, h, o, s);
  }
}
function ht(l, e, t) {
  let n = [[], [], [], [], []], i = /* @__PURE__ */ new Map();
  function s(r, h) {
    let o = i.get(r);
    if (o != null) {
      if (o <= h)
        return;
      let a = n[o].indexOf(r);
      a > -1 && n[o].splice(a, 1), r instanceof fe && t.delete(r.compartment);
    }
    if (i.set(r, h), Array.isArray(r))
      for (let a of r)
        s(a, h);
    else if (r instanceof fe) {
      if (t.has(r.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let a = e.get(r.compartment) || r.inner;
      t.set(r.compartment, a), s(a, h);
    } else if (r instanceof Ve)
      s(r.inner, r.prec);
    else if (r instanceof L)
      n[h].push(r), r.provides && s(r.provides, h);
    else if (r instanceof te)
      n[h].push(r), r.facet.extensions && s(r.facet.extensions, F.default);
    else {
      let a = r.extension;
      if (!a)
        throw new Error(`Unrecognized extension value in extension set (${r}).`);
      if (a == r)
        throw new Error(`Unrecognized extension value in extension set (${r}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(a, h);
    }
  }
  return s(l, F.default), n.reduce((r, h) => r.concat(h));
}
function U(l, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, n = l.status[t];
  if (n == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (n & 2)
    return n;
  l.status[t] = 4;
  let i = l.computeSlot(l, l.config.dynamicSlots[t]);
  return l.status[t] = 2 | i;
}
function ie(l, e) {
  return e & 1 ? l.config.staticValues[e >> 1] : l.values[e >> 1];
}
const Ne = /* @__PURE__ */ C.define(), ce = /* @__PURE__ */ C.define({
  combine: (l) => l.some((e) => e),
  static: !0
}), $e = /* @__PURE__ */ C.define({
  combine: (l) => l.length ? l[0] : void 0,
  static: !0
}), ze = /* @__PURE__ */ C.define(), qe = /* @__PURE__ */ C.define(), We = /* @__PURE__ */ C.define(), je = /* @__PURE__ */ C.define({
  combine: (l) => l.length ? l[0] : !1
});
class z {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new Ue();
  }
}
class Ue {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new z(this, e);
  }
}
class He {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new A(this, e);
  }
}
class A {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new A(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new He(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let n = [];
    for (let i of e) {
      let s = i.map(t);
      s && n.push(s);
    }
    return n;
  }
}
A.reconfigure = /* @__PURE__ */ A.define();
A.appendConfig = /* @__PURE__ */ A.define();
class b {
  constructor(e, t, n, i, s, r) {
    this.startState = e, this.changes = t, this.selection = n, this.effects = i, this.annotations = s, this.scrollIntoView = r, this._doc = null, this._state = null, n && De(n, t.newLength), s.some((h) => h.type == b.time) || (this.annotations = s.concat(b.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, n, i, s, r) {
    return new b(e, t, n, i, s, r);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(b.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
b.time = /* @__PURE__ */ z.define();
b.userEvent = /* @__PURE__ */ z.define();
b.addToHistory = /* @__PURE__ */ z.define();
b.remote = /* @__PURE__ */ z.define();
function ot(l, e) {
  let t = [];
  for (let n = 0, i = 0; ; ) {
    let s, r;
    if (n < l.length && (i == e.length || e[i] >= l[n]))
      s = l[n++], r = l[n++];
    else if (i < e.length)
      s = e[i++], r = e[i++];
    else
      return t;
    !t.length || t[t.length - 1] < s ? t.push(s, r) : t[t.length - 1] < r && (t[t.length - 1] = r);
  }
}
function Ge(l, e, t) {
  var n;
  let i, s, r;
  return t ? (i = e.changes, s = y.empty(e.changes.length), r = l.changes.compose(e.changes)) : (i = e.changes.map(l.changes), s = l.changes.mapDesc(e.changes, !0), r = l.changes.compose(i)), {
    changes: r,
    selection: e.selection ? e.selection.map(s) : (n = l.selection) === null || n === void 0 ? void 0 : n.map(i),
    effects: A.mapEffects(l.effects, i).concat(A.mapEffects(e.effects, s)),
    annotations: l.annotations.length ? l.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: l.scrollIntoView || e.scrollIntoView
  };
}
function de(l, e, t) {
  let n = e.selection, i = D(e.annotations);
  return e.userEvent && (i = i.concat(b.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof y ? e.changes : y.of(e.changes || [], t, l.facet($e)),
    selection: n && (n instanceof w ? n : w.single(n.anchor, n.head)),
    effects: D(e.effects),
    annotations: i,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Ze(l, e, t) {
  let n = de(l, e.length ? e[0] : {}, l.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (t = !1);
    let r = !!e[s].sequential;
    n = Ge(n, de(l, e[s], r ? n.changes.newLength : l.doc.length), r);
  }
  let i = b.create(l, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
  return ut(t ? at(i) : i);
}
function at(l) {
  let e = l.startState, t = !0;
  for (let i of e.facet(ze)) {
    let s = i(l);
    if (s === !1) {
      t = !1;
      break;
    }
    Array.isArray(s) && (t = t === !0 ? s : ot(t, s));
  }
  if (t !== !0) {
    let i, s;
    if (t === !1)
      s = l.changes.invertedDesc, i = y.empty(e.doc.length);
    else {
      let r = l.changes.filter(t);
      i = r.changes, s = r.filtered.mapDesc(r.changes).invertedDesc;
    }
    l = b.create(e, i, l.selection && l.selection.map(s), A.mapEffects(l.effects, s), l.annotations, l.scrollIntoView);
  }
  let n = e.facet(qe);
  for (let i = n.length - 1; i >= 0; i--) {
    let s = n[i](l);
    s instanceof b ? l = s : Array.isArray(s) && s.length == 1 && s[0] instanceof b ? l = s[0] : l = Ze(e, D(s), !1);
  }
  return l;
}
function ut(l) {
  let e = l.startState, t = e.facet(We), n = l;
  for (let i = t.length - 1; i >= 0; i--) {
    let s = t[i](l);
    s && Object.keys(s).length && (n = Ge(n, de(e, s, l.changes.newLength), !0));
  }
  return n == l ? l : b.create(e, l.changes, l.selection, n.effects, n.annotations, n.scrollIntoView);
}
const ft = [];
function D(l) {
  return l == null ? ft : Array.isArray(l) ? l : [l];
}
var T = /* @__PURE__ */ (function(l) {
  return l[l.Word = 0] = "Word", l[l.Space = 1] = "Space", l[l.Other = 2] = "Other", l;
})(T || (T = {}));
const ct = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let ge;
try {
  ge = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function dt(l) {
  if (ge)
    return ge.test(l);
  for (let e = 0; e < l.length; e++) {
    let t = l[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || ct.test(t)))
      return !0;
  }
  return !1;
}
function gt(l) {
  return (e) => {
    if (!/\S/.test(e))
      return T.Space;
    if (dt(e))
      return T.Word;
    for (let t = 0; t < l.length; t++)
      if (e.indexOf(l[t]) > -1)
        return T.Word;
    return T.Other;
  };
}
class v {
  constructor(e, t, n, i, s, r) {
    this.config = e, this.doc = t, this.selection = n, this.values = i, this.status = e.statusTemplate.slice(), this.computeSlot = s, r && (r._state = this);
    for (let h = 0; h < this.config.dynamicSlots.length; h++)
      U(this, h << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let n = this.config.address[e.id];
    if (n == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return U(this, n), ie(this, n);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return Ze(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: n, compartments: i } = t;
    for (let h of e.effects)
      h.is(Q.reconfigure) ? (t && (i = /* @__PURE__ */ new Map(), t.compartments.forEach((o, a) => i.set(a, o)), t = null), i.set(h.value.compartment, h.value.extension)) : h.is(A.reconfigure) ? (t = null, n = h.value) : h.is(A.appendConfig) && (t = null, n = D(n).concat(h.value));
    let s;
    t ? s = e.startState.values.slice() : (t = ne.resolve(n, i, this), s = new v(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (o, a) => a.reconfigure(o, this), null).values);
    let r = e.startState.facet(ce) ? e.newSelection : e.newSelection.asSingle();
    new v(t, e.newDoc, r, s, (h, o) => o.update(h, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: w.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, n = e(t.ranges[0]), i = this.changes(n.changes), s = [n.range], r = D(n.effects);
    for (let h = 1; h < t.ranges.length; h++) {
      let o = e(t.ranges[h]), a = this.changes(o.changes), u = a.map(i);
      for (let c = 0; c < h; c++)
        s[c] = s[c].map(u);
      let f = i.mapDesc(a, !0);
      s.push(o.range.map(f)), i = i.compose(u), r = A.mapEffects(r, u).concat(A.mapEffects(D(o.effects), f));
    }
    return {
      changes: i,
      selection: w.create(s, t.mainIndex),
      effects: r
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof y ? e : y.of(e, this.doc.length, this.facet(v.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return k.of(e.split(this.facet(v.lineSeparator) || he));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (U(this, t), ie(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let n in e) {
        let i = e[n];
        i instanceof L && this.config.address[i.id] != null && (t[n] = i.spec.toJSON(this.field(e[n]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, n) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let i = [];
    if (n) {
      for (let s in n)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          let r = n[s], h = e[s];
          i.push(r.init((o) => r.spec.fromJSON(h, o)));
        }
    }
    return v.create({
      doc: e.doc,
      selection: w.fromJSON(e.selection),
      extensions: t.extensions ? i.concat([t.extensions]) : i
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = ne.resolve(e.extensions || [], /* @__PURE__ */ new Map()), n = e.doc instanceof k ? e.doc : k.of((e.doc || "").split(t.staticFacet(v.lineSeparator) || he)), i = e.selection ? e.selection instanceof w ? e.selection : w.single(e.selection.anchor, e.selection.head) : w.single(0);
    return De(i, n.length), t.staticFacet(ce) || (i = i.asSingle()), new v(t, n, i, t.dynamicSlots.map(() => null), (s, r) => r.create(s), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(v.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(v.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(je);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let n of this.facet(v.phrases))
      if (Object.prototype.hasOwnProperty.call(n, e)) {
        e = n[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (n, i) => {
      if (i == "$")
        return "$";
      let s = +(i || 1);
      return !s || s > t.length ? n : t[s - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, n = -1) {
    let i = [];
    for (let s of this.facet(Ne))
      for (let r of s(this, t, n))
        Object.prototype.hasOwnProperty.call(r, e) && i.push(r[e]);
    return i;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    let t = this.languageDataAt("wordChars", e);
    return gt(t.length ? t[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: n, length: i } = this.doc.lineAt(e), s = this.charCategorizer(e), r = e - n, h = e - n;
    for (; r > 0; ) {
      let o = H(t, r, !1);
      if (s(t.slice(o, r)) != T.Word)
        break;
      r = o;
    }
    for (; h < i; ) {
      let o = H(t, h);
      if (s(t.slice(h, o)) != T.Word)
        break;
      h = o;
    }
    return r == h ? null : w.range(r + n, h + n);
  }
}
v.allowMultipleSelections = ce;
v.tabSize = /* @__PURE__ */ C.define({
  combine: (l) => l.length ? l[0] : 4
});
v.lineSeparator = $e;
v.readOnly = je;
v.phrases = /* @__PURE__ */ C.define({
  compare(l, e) {
    let t = Object.keys(l), n = Object.keys(e);
    return t.length == n.length && t.every((i) => l[i] == e[i]);
  }
});
v.languageData = Ne;
v.changeFilter = ze;
v.transactionFilter = qe;
v.transactionExtender = We;
Q.reconfigure = /* @__PURE__ */ A.define();
function pt(l, e, t = {}) {
  let n = {};
  for (let i of l)
    for (let s of Object.keys(i)) {
      let r = i[s], h = n[s];
      if (h === void 0)
        n[s] = r;
      else if (!(h === r || r === void 0)) if (Object.hasOwnProperty.call(t, s))
        n[s] = t[s](h, r);
      else
        throw new Error("Config merge conflict for field " + s);
    }
  for (let i in e)
    n[i] === void 0 && (n[i] = e[i]);
  return n;
}
class Z {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return $.create(e, t, this);
  }
}
Z.prototype.startSide = Z.prototype.endSide = 0;
Z.prototype.point = !1;
Z.prototype.mapMode = M.TrackDel;
function xe(l, e) {
  return l == e || l.constructor == e.constructor && l.eq(e);
}
class $ {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.value = n;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new $(e, t, n);
  }
}
function pe(l, e) {
  return l.from - e.from || l.value.startSide - e.value.startSide;
}
class ke {
  constructor(e, t, n, i) {
    this.from = e, this.to = t, this.value = n, this.maxPoint = i;
  }
  get length() {
    return J(this.to);
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, n, i = 0) {
    let s = n ? this.to : this.from;
    for (let r = i, h = s.length; ; ) {
      if (r == h)
        return r;
      let o = r + h >> 1, a = s[o] - e || (n ? this.value[o].endSide : this.value[o].startSide) - t;
      if (o == r)
        return a >= 0 ? r : h;
      a >= 0 ? h = o : r = o + 1;
    }
  }
  between(e, t, n, i) {
    for (let s = this.findIndex(t, -1e9, !0), r = this.findIndex(n, 1e9, !1, s); s < r; s++)
      if (i(this.from[s] + e, this.to[s] + e, this.value[s]) === !1)
        return !1;
  }
  map(e, t, n, i, s) {
    let r = [], h = [], o = [], a = -1, u = -1;
    e: for (let f = 0; f < this.value.length; f++) {
      let c = this.value[f], d = this.from[f] + e, g = this.to[f] + e, m, p;
      if (d == g) {
        let S = t.mapPos(d, c.startSide, c.mapMode);
        if (S == null || (m = p = S, c.startSide != c.endSide && (p = t.mapPos(d, c.endSide), p < m)))
          continue;
      } else if (m = t.mapPos(d, c.startSide), p = t.mapPos(g, c.endSide), m > p || m == p && c.startSide > 0 && c.endSide <= 0)
        continue;
      if (!((p - m || c.endSide - c.startSide) < 0))
        if (a < 0 && (a = m), c.point && (u = Math.max(u, p - m)), (m - n || c.startSide - i) >= 0)
          r.push(c), h.push(m - a), o.push(p - a), n = p, i = c.endSide;
        else {
          if (m == p)
            for (let S = r.length; S > 0; S--) {
              if ((m - (o[S - 1] + a) || c.startSide - r[S - 1].endSide) >= 0) {
                r.splice(S, 0, c), h.splice(S, 0, m - a), o.splice(S, 0, p - a);
                continue e;
              }
              if ((m - (h[S - 1] + a) || c.endSide - r[S - 1].startSide) > 0)
                break;
            }
          s(m, p, c);
        }
    }
    return { mapped: r.length ? new ke(h, o, r, u) : null, pos: a };
  }
}
class I {
  constructor(e, t, n, i) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = i;
  }
  /**
  @internal
  */
  static create(e, t, n, i) {
    return new I(e, t, n, i);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: n = !1, filterFrom: i = 0, filterTo: s = this.length } = e, r = e.filter;
    if (t.length == 0 && !r)
      return this;
    if (n && (t = t.slice().sort(pe)), this.isEmpty)
      return t.length ? I.of(t) : this;
    let h = new Ke(this, null, -1).goto(0), o = 0, a = [], u = new V();
    for (; h.value || o < t.length; )
      if (o < t.length && (h.from - t[o].from || h.startSide - t[o].value.startSide) >= 0) {
        let f = t[o++];
        u.addInner(f.from, f.to, f.value, !1) || a.push(f);
      } else h.rangeIndex == 1 && h.chunkIndex < this.chunk.length && (o == t.length || this.chunkEnd(h.chunkIndex) < t[o].from) && (!r || i > this.chunkEnd(h.chunkIndex) || s < this.chunkPos[h.chunkIndex]) && u.addChunk(this.chunkPos[h.chunkIndex], this.chunk[h.chunkIndex]) ? h.nextChunk() : ((!r || i > h.to || s < h.from || r(h.from, h.to, h.value)) && (u.addInner(h.from, h.to, h.value, !1) || a.push($.create(h.from, h.to, h.value))), h.next());
    return u.finishInner(this.nextLayer.isEmpty && !a.length ? I.empty : this.nextLayer.update({ add: a, filter: r, filterFrom: i, filterTo: s }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], n = [], i = -1, s, r = (o, a, u) => {
      s || (s = new V()), s.addRange(o, a, u, !1);
    };
    for (let o = 0; o < this.chunk.length; o++) {
      let a = this.chunkPos[o], u = this.chunk[o], f = e.touchesRange(a, a + u.length);
      if (f === !1)
        i = Math.max(i, u.maxPoint), t.push(u), n.push(e.mapPos(a));
      else if (f === !0) {
        let [c, d] = t.length ? [J(n) + J(t).length, J(J(t).value).endSide] : [-1, -1], { mapped: g, pos: m } = u.map(a, e, c, d, r);
        g && (i = Math.max(i, g.maxPoint), t.push(g), n.push(m));
      }
    }
    let h = this.nextLayer.map(e);
    return s && (h = s.finishInner(h)), t.length == 0 ? h : new I(n, t, h || I.empty, i);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, n) {
    if (!this.isEmpty) {
      for (let i = 0; i < this.chunk.length; i++) {
        let s = this.chunkPos[i], r = this.chunk[i];
        if (t >= s && e <= s + r.length && r.between(s, e - s, t - s, n) === !1)
          return;
      }
      this.nextLayer.between(e, t, n);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return K.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return K.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, n, i, s = -1) {
    let r = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= s), h = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= s), o = be(r, h, n), a = new W(r, o, s), u = new W(h, o, s);
    n.iterGaps((f, c, d) => Ce(a, f, u, c, d, i)), n.empty && n.length == 0 && Ce(a, 0, u, 0, 0, i);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, n = 0, i) {
    i == null && (i = 999999999);
    let s = e.filter((u) => !u.isEmpty && t.indexOf(u) < 0), r = t.filter((u) => !u.isEmpty && e.indexOf(u) < 0);
    if (s.length != r.length)
      return !1;
    if (!s.length)
      return !0;
    let h = be(s, r), o = new W(s, h, 0).goto(n), a = new W(r, h, 0).goto(n);
    for (; ; ) {
      if (o.to != a.to || !me(o.active, a.active) || o.point && (!a.point || !xe(o.point, a.point)))
        return !1;
      if (o.to > i)
        return !0;
      o.next(), a.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, n, i, s = -1) {
    let r = new W(e, null, s).goto(t), h = t, o = r.openStart;
    for (; ; ) {
      let a = Math.min(r.to, n);
      if (r.point) {
        let u = r.activeForPoint(r.to), f = r.pointFrom < t ? u.length + 1 : r.point.startSide < 0 ? u.length : Math.min(u.length, o);
        i.point(h, a, r.point, u, f, r.pointRank), o = Math.min(r.openEnd(a), u.length);
      } else a > h && (i.span(h, a, r.active, o), o = r.openEnd(a));
      if (r.to > n)
        return o + (r.point && r.to > n ? 1 : 0);
      h = r.to, r.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let n = new V();
    for (let i of e instanceof $ ? [e] : t ? mt(e) : e)
      n.add(i.from, i.to, i.value);
    return n.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return I.empty;
    let t = J(e);
    for (let n = e.length - 2; n >= 0; n--)
      for (let i = e[n]; i != I.empty; i = i.nextLayer)
        t = new I(i.chunkPos, i.chunk, t, Math.max(i.maxPoint, t.maxPoint));
    return t;
  }
}
I.empty = /* @__PURE__ */ new I([], [], null, -1);
function J(l) {
  return l[l.length - 1];
}
function mt(l) {
  if (l.length > 1)
    for (let e = l[0], t = 1; t < l.length; t++) {
      let n = l[t];
      if (pe(e, n) > 0)
        return l.slice().sort(pe);
      e = n;
    }
  return l;
}
I.empty.nextLayer = I.empty;
class V {
  finishChunk(e) {
    this.chunks.push(new ke(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, n) {
    this.addRange(e, t, n, !0);
  }
  /**
  @internal
  */
  addRange(e, t, n, i) {
    this.addInner(e, t, n, i) || (this.nextLayer || (this.nextLayer = new V())).addRange(e, t, n, i);
  }
  /**
  @internal
  */
  addInner(e, t, n, i) {
    let s = e - this.lastTo || n.startSide - this.last.endSide;
    if (i && s <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = t, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let n = t.value.length - 1;
    return this.last = t.value[n], this.lastFrom = t.from[n] + e, this.lastTo = t.to[n] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(I.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = I.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function be(l, e, t) {
  let n = /* @__PURE__ */ new Map();
  for (let s of l)
    for (let r = 0; r < s.chunk.length; r++)
      s.chunk[r].maxPoint <= 0 && n.set(s.chunk[r], s.chunkPos[r]);
  let i = /* @__PURE__ */ new Set();
  for (let s of e)
    for (let r = 0; r < s.chunk.length; r++) {
      let h = n.get(s.chunk[r]);
      h != null && (t ? t.mapPos(h) : h) == s.chunkPos[r] && !t?.touchesRange(h, h + s.chunk[r].length) && i.add(s.chunk[r]);
    }
  return i;
}
class Ke {
  constructor(e, t, n, i = 0) {
    this.layer = e, this.skip = t, this.minPoint = n, this.rank = i;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, n) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let i = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(i) || this.layer.chunkEnd(this.chunkIndex) < e || i.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, n = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let i = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!n || this.rangeIndex < i) && this.setRangeIndex(i);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], n = e + t.from[this.rangeIndex];
        if (this.from = n, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class K {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, n = -1) {
    let i = [];
    for (let s = 0; s < e.length; s++)
      for (let r = e[s]; !r.isEmpty; r = r.nextLayer)
        r.maxPoint >= n && i.push(new Ke(r, t, n, s));
    return i.length == 1 ? i[0] : new K(i);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let n of this.heap)
      n.goto(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      re(this.heap, n);
    return this.next(), this;
  }
  forward(e, t) {
    for (let n of this.heap)
      n.forward(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      re(this.heap, n);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), re(this.heap, 0);
    }
  }
}
function re(l, e) {
  for (let t = l[e]; ; ) {
    let n = (e << 1) + 1;
    if (n >= l.length)
      break;
    let i = l[n];
    if (n + 1 < l.length && i.compare(l[n + 1]) >= 0 && (i = l[n + 1], n++), t.compare(i) < 0)
      break;
    l[n] = t, l[e] = i, e = n;
  }
}
class W {
  constructor(e, t, n) {
    this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = K.from(e, t, n);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Y(this.active, e), Y(this.activeTo, e), Y(this.activeRank, e), this.minActive = Ee(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: n, to: i, rank: s } = this.cursor;
    for (; t < this.activeRank.length && (s - this.activeRank[t] || i - this.activeTo[t]) > 0; )
      t++;
    _(this.active, t, n), _(this.activeTo, t, i), _(this.activeRank, t, s), e && _(e, t, this.cursor.from), this.minActive = Ee(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let i = this.minActive;
      if (i > -1 && (this.activeTo[i] - this.cursor.from || this.active[i].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[i] > e) {
          this.to = this.activeTo[i], this.endSide = this.active[i].endSide;
          break;
        }
        this.removeActive(i), n && Y(n, i);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let s = this.cursor.value;
          if (!s.point)
            this.addActive(n), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = s, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = s.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n) {
      this.openStart = 0;
      for (let i = n.length - 1; i >= 0 && n[i] < e; i--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--)
      (this.activeTo[n] > e || this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide) && t.push(this.active[n]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--)
      t++;
    return t;
  }
}
function Ce(l, e, t, n, i, s) {
  l.goto(e), t.goto(n);
  let r = n + i, h = n, o = n - e, a = !!s.boundChange;
  for (let u = !1; ; ) {
    let f = l.to + o - t.to, c = f || l.endSide - t.endSide, d = c < 0 ? l.to + o : t.to, g = Math.min(d, r);
    if (l.point || t.point ? (l.point && t.point && xe(l.point, t.point) && me(l.activeForPoint(l.to), t.activeForPoint(t.to)) || s.comparePoint(h, g, l.point, t.point), u = !1) : (u && s.boundChange(h), g > h && !me(l.active, t.active) && s.compareRange(h, g, l.active, t.active), a && g < r && (f || l.openEnd(d) != t.openEnd(d)) && (u = !0)), d > r)
      break;
    h = d, c <= 0 && l.next(), c >= 0 && t.next();
  }
}
function me(l, e) {
  if (l.length != e.length)
    return !1;
  for (let t = 0; t < l.length; t++)
    if (l[t] != e[t] && !xe(l[t], e[t]))
      return !1;
  return !0;
}
function Y(l, e) {
  for (let t = e, n = l.length - 1; t < n; t++)
    l[t] = l[t + 1];
  l.pop();
}
function _(l, e, t) {
  for (let n = l.length - 1; n >= e; n--)
    l[n + 1] = l[n];
  l[e] = t;
}
function Ee(l, e) {
  let t = -1, n = 1e9;
  for (let i = 0; i < e.length; i++)
    (e[i] - n || l[i].endSide - l[t].endSide) < 0 && (t = i, n = e[i]);
  return t;
}
function wt(l, e, t = l.length) {
  let n = 0;
  for (let i = 0; i < t && i < l.length; )
    l.charCodeAt(i) == 9 ? (n += e - n % e, i++) : (n++, i = H(l, i));
  return n;
}
function vt(l, e, t, n) {
  for (let i = 0, s = 0; ; ) {
    if (s >= e)
      return i;
    if (i == l.length)
      break;
    s += l.charCodeAt(i) == 9 ? t - s % t : 1, i = H(l, i);
  }
  return n === !0 ? -1 : l.length;
}
const xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Annotation: z,
  AnnotationType: Ue,
  ChangeDesc: O,
  ChangeSet: y,
  get CharCategory() {
    return T;
  },
  Compartment: Q,
  EditorSelection: w,
  EditorState: v,
  Facet: C,
  Line: Le,
  get MapMode() {
    return M;
  },
  Prec: lt,
  Range: $,
  RangeSet: I,
  RangeSetBuilder: V,
  RangeValue: Z,
  SelectionRange: R,
  StateEffect: A,
  StateEffectType: He,
  StateField: L,
  Text: k,
  Transaction: b,
  codePointAt: nt,
  codePointSize: st,
  combineConfig: pt,
  countColumn: wt,
  findClusterBreak: H,
  findColumn: vt,
  fromCodePoint: it
}, Symbol.toStringTag, { value: "Module" }));
export {
  z as Annotation,
  Ue as AnnotationType,
  O as ChangeDesc,
  y as ChangeSet,
  T as CharCategory,
  Q as Compartment,
  w as EditorSelection,
  v as EditorState,
  C as Facet,
  Le as Line,
  M as MapMode,
  lt as Prec,
  $ as Range,
  I as RangeSet,
  V as RangeSetBuilder,
  Z as RangeValue,
  R as SelectionRange,
  A as StateEffect,
  He as StateEffectType,
  L as StateField,
  k as Text,
  b as Transaction,
  nt as codePointAt,
  st as codePointSize,
  pt as combineConfig,
  wt as countColumn,
  xt as default,
  H as findClusterBreak,
  vt as findColumn,
  it as fromCodePoint
};
