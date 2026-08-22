var tinyEmitter = { exports: {} };
var hasRequiredTinyEmitter;
function requireTinyEmitter() {
  if (hasRequiredTinyEmitter) return tinyEmitter.exports;
  hasRequiredTinyEmitter = 1;
  function E() {
  }
  E.prototype = {
    on: function(name, callback, ctx) {
      var e = this.e || (this.e = {});
      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx
      });
      return this;
    },
    once: function(name, callback, ctx) {
      var self = this;
      function listener() {
        self.off(name, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name, listener, ctx);
    },
    emit: function(name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i = 0;
      var len = evtArr.length;
      for (i; i < len; i++) {
        evtArr[i].fn.apply(evtArr[i].ctx, data);
      }
      return this;
    },
    off: function(name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];
      if (evts && callback) {
        for (var i = 0, len = evts.length; i < len; i++) {
          if (evts[i].fn !== callback && evts[i].fn._ !== callback)
            liveEvents.push(evts[i]);
        }
      }
      liveEvents.length ? e[name] = liveEvents : delete e[name];
      return this;
    }
  };
  tinyEmitter.exports = E;
  tinyEmitter.exports.TinyEmitter = E;
  return tinyEmitter.exports;
}
var tinyEmitterExports = requireTinyEmitter();
function activate$1({ services, log }) {
  services.register("TINY_EMITTER", new tinyEmitterExports.TinyEmitter());
  log.info("system services ready: TINY_EMITTER");
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.platform.system";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "platform.system");
  await activate$1?.(context);
}
async function deactivate(context) {
  await void 0;
}
export {
  activate,
  deactivate
};
