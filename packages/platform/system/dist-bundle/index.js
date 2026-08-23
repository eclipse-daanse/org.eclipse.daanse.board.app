const { TINY_EMITTER: a } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var f = { exports: {} }, u;
function p() {
  if (u) return f.exports;
  u = 1;
  function s() {
  }
  return s.prototype = {
    on: function(e, i, r) {
      var t = this.e || (this.e = {});
      return (t[e] || (t[e] = [])).push({
        fn: i,
        ctx: r
      }), this;
    },
    once: function(e, i, r) {
      var t = this;
      function n() {
        t.off(e, n), i.apply(r, arguments);
      }
      return n._ = i, this.on(e, n, r);
    },
    emit: function(e) {
      var i = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), t = 0, n = r.length;
      for (t; t < n; t++)
        r[t].fn.apply(r[t].ctx, i);
      return this;
    },
    off: function(e, i) {
      var r = this.e || (this.e = {}), t = r[e], n = [];
      if (t && i)
        for (var o = 0, v = t.length; o < v; o++)
          t[o].fn !== i && t[o].fn._ !== i && n.push(t[o]);
      return n.length ? r[e] = n : delete r[e], this;
    }
  }, f.exports = s, f.exports.TinyEmitter = s, f.exports;
}
var h = p();
function E({ services: s, log: e }) {
  s.register(a, new h.TinyEmitter()), e.info("system services ready: TINY_EMITTER");
}
export {
  E as activate
};
