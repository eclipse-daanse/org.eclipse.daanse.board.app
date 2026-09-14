import { i as In, b as us, K as hs, c as De, d as en, E as fs, e as gs, f as Ke, h as sr, j as ar, k as cn, B as tn, t as Ge, s as ps, U as nt, p as ms, o as zn, l as ws, w as bs, m as ys, D as pt, n as dn, q as lr, r as Cs, u as _t, v as r, x as ks, y as vs, z as Ss, L as Ls, I as _s, R as nn, P as Ae } from "./index-BAbG-YZ_.js";
function Ds(n, e) {
  const t = n;
  typeof t.vscodeWindowId != "number" && Object.defineProperty(t, "vscodeWindowId", {
    get: () => e
  });
}
const se = window;
class Oi {
  constructor() {
    this.mapWindowIdToZoomFactor = /* @__PURE__ */ new Map();
  }
  static {
    this.INSTANCE = new Oi();
  }
  getZoomFactor(e) {
    return this.mapWindowIdToZoomFactor.get(this.getWindowId(e)) ?? 1;
  }
  getWindowId(e) {
    return e.vscodeWindowId;
  }
}
function Ts(n, e, t) {
  typeof e == "string" && (e = n.matchMedia(e)), e.addEventListener("change", t);
}
function Fc(n) {
  return Oi.INSTANCE.getZoomFactor(n);
}
const Wt = navigator.userAgent, On = Wt.indexOf("Firefox") >= 0, Ri = Wt.indexOf("AppleWebKit") >= 0, Mi = Wt.indexOf("Chrome") >= 0, xi = !Mi && Wt.indexOf("Safari") >= 0, Ic = !Mi && !xi && Ri;
Wt.indexOf("Electron/") >= 0;
const Oc = Wt.indexOf("Android") >= 0;
let ti = !1;
if (typeof se.matchMedia == "function") {
  const n = se.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"), e = se.matchMedia("(display-mode: fullscreen)");
  ti = n.matches, Ts(se, n, ({ matches: t }) => {
    ti && e.matches || (ti = t);
  });
}
const Es = {
  clipboard: {
    writeText: In || document.queryCommandSupported && document.queryCommandSupported("copy") || !!(navigator && navigator.clipboard && navigator.clipboard.writeText),
    readText: In || !!(navigator && navigator.clipboard && navigator.clipboard.readText)
  },
  pointerEvents: se.PointerEvent && ("ontouchstart" in se || navigator.maxTouchPoints > 0)
};
function Rc(n, e) {
  if (typeof n == "number") {
    if (n === 0)
      return null;
    const t = (n & 65535) >>> 0, i = (n & 4294901760) >>> 16;
    return i !== 0 ? new ni([
      bn(t, e),
      bn(i, e)
    ]) : new ni([bn(t, e)]);
  } else {
    const t = [];
    for (let i = 0; i < n.length; i++)
      t.push(bn(n[i], e));
    return new ni(t);
  }
}
function bn(n, e) {
  const t = !!(n & 2048), i = !!(n & 256), o = e === 2 ? i : t, s = !!(n & 1024), a = !!(n & 512), l = e === 2 ? t : i, d = n & 255;
  return new Un(o, s, a, l, d);
}
class Un {
  constructor(e, t, i, o, s) {
    this.ctrlKey = e, this.shiftKey = t, this.altKey = i, this.metaKey = o, this.keyCode = s;
  }
  equals(e) {
    return e instanceof Un && this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.metaKey === e.metaKey && this.keyCode === e.keyCode;
  }
  isModifierKey() {
    return this.keyCode === 0 || this.keyCode === 5 || this.keyCode === 57 || this.keyCode === 6 || this.keyCode === 4;
  }
  /**
   * Does this keybinding refer to the key code of a modifier and it also has the modifier flag?
   */
  isDuplicateModifierCase() {
    return this.ctrlKey && this.keyCode === 5 || this.shiftKey && this.keyCode === 4 || this.altKey && this.keyCode === 6 || this.metaKey && this.keyCode === 57;
  }
}
class ni {
  constructor(e) {
    if (e.length === 0)
      throw us("chords");
    this.chords = e;
  }
}
class Mc {
  constructor(e, t, i, o, s, a) {
    this.ctrlKey = e, this.shiftKey = t, this.altKey = i, this.metaKey = o, this.keyLabel = s, this.keyAriaLabel = a;
  }
}
class xc {
}
function As(n) {
  if (n.charCode) {
    const t = String.fromCharCode(n.charCode).toUpperCase();
    return hs.fromString(t);
  }
  const e = n.keyCode;
  if (e === 3)
    return 7;
  if (On)
    switch (e) {
      case 59:
        return 85;
      case 60:
        if (en)
          return 97;
        break;
      case 61:
        return 86;
      // based on: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#numpad_keys
      case 107:
        return 109;
      case 109:
        return 111;
      case 173:
        return 88;
      case 224:
        if (De)
          return 57;
        break;
    }
  else if (Ri) {
    if (De && e === 93)
      return 57;
    if (!De && e === 92)
      return 57;
  }
  return fs[e] || 0;
}
const Fs = De ? 256 : 2048, Is = 512, Os = 1024, Rs = De ? 2048 : 256;
class cr {
  constructor(e) {
    this._standardKeyboardEventBrand = !0;
    const t = e;
    this.browserEvent = t, this.target = t.target, this.ctrlKey = t.ctrlKey, this.shiftKey = t.shiftKey, this.altKey = t.altKey, this.metaKey = t.metaKey, this.altGraphKey = t.getModifierState?.("AltGraph"), this.keyCode = As(t), this.code = t.code, this.ctrlKey = this.ctrlKey || this.keyCode === 5, this.altKey = this.altKey || this.keyCode === 6, this.shiftKey = this.shiftKey || this.keyCode === 4, this.metaKey = this.metaKey || this.keyCode === 57, this._asKeybinding = this._computeKeybinding(), this._asKeyCodeChord = this._computeKeyCodeChord();
  }
  preventDefault() {
    this.browserEvent && this.browserEvent.preventDefault && this.browserEvent.preventDefault();
  }
  stopPropagation() {
    this.browserEvent && this.browserEvent.stopPropagation && this.browserEvent.stopPropagation();
  }
  toKeyCodeChord() {
    return this._asKeyCodeChord;
  }
  equals(e) {
    return this._asKeybinding === e;
  }
  _computeKeybinding() {
    let e = 0;
    this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (e = this.keyCode);
    let t = 0;
    return this.ctrlKey && (t |= Fs), this.altKey && (t |= Is), this.shiftKey && (t |= Os), this.metaKey && (t |= Rs), t |= e, t;
  }
  _computeKeyCodeChord() {
    let e = 0;
    return this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (e = this.keyCode), new Un(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, e);
  }
}
const So = /* @__PURE__ */ new WeakMap();
function Ms(n) {
  if (!n.parent || n.parent === n)
    return null;
  try {
    const e = n.location, t = n.parent.location;
    if (e.origin !== "null" && t.origin !== "null" && e.origin !== t.origin)
      return null;
  } catch {
    return null;
  }
  return n.parent;
}
class xs {
  /**
   * Returns a chain of embedded windows with the same origin (which can be accessed programmatically).
   * Having a chain of length 1 might mean that the current execution environment is running outside of an iframe or inside an iframe embedded in a window with a different origin.
   */
  static getSameOriginWindowChain(e) {
    let t = So.get(e);
    if (!t) {
      t = [], So.set(e, t);
      let i = e, o;
      do
        o = Ms(i), o ? t.push({
          window: new WeakRef(i),
          iframeElement: i.frameElement || null
        }) : t.push({
          window: new WeakRef(i),
          iframeElement: null
        }), i = o;
      while (i);
    }
    return t.slice(0);
  }
  /**
   * Returns the position of `childWindow` relative to `ancestorWindow`
   */
  static getPositionOfChildWindowRelativeToAncestorWindow(e, t) {
    if (!t || e === t)
      return {
        top: 0,
        left: 0
      };
    let i = 0, o = 0;
    const s = this.getSameOriginWindowChain(e);
    for (const a of s) {
      const l = a.window.deref();
      if (i += l?.scrollY ?? 0, o += l?.scrollX ?? 0, l === t || !a.iframeElement)
        break;
      const d = a.iframeElement.getBoundingClientRect();
      i += d.top, o += d.left;
    }
    return {
      top: i,
      left: o
    };
  }
}
class dr {
  constructor(e, t) {
    this.timestamp = Date.now(), this.browserEvent = t, this.leftButton = t.button === 0, this.middleButton = t.button === 1, this.rightButton = t.button === 2, this.buttons = t.buttons, this.target = t.target, this.detail = t.detail || 1, t.type === "dblclick" && (this.detail = 2), this.ctrlKey = t.ctrlKey, this.shiftKey = t.shiftKey, this.altKey = t.altKey, this.metaKey = t.metaKey, typeof t.pageX == "number" ? (this.posx = t.pageX, this.posy = t.pageY) : (this.posx = t.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft, this.posy = t.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop);
    const i = xs.getPositionOfChildWindowRelativeToAncestorWindow(e, t.view);
    this.posx -= i.left, this.posy -= i.top;
  }
  preventDefault() {
    this.browserEvent.preventDefault();
  }
  stopPropagation() {
    this.browserEvent.stopPropagation();
  }
}
class Bc {
  constructor(e, t = 0, i = 0) {
    this.browserEvent = e || null, this.target = e ? e.target || e.targetNode || e.srcElement : null, this.deltaY = i, this.deltaX = t;
    let o = !1;
    if (Mi) {
      const s = navigator.userAgent.match(/Chrome\/(\d+)/);
      o = (s ? parseInt(s[1]) : 123) <= 122;
    }
    if (e) {
      const s = e, a = e, l = e.view?.devicePixelRatio || 1;
      if (typeof s.wheelDeltaY < "u")
        o ? this.deltaY = s.wheelDeltaY / (120 * l) : this.deltaY = s.wheelDeltaY / 120;
      else if (typeof a.VERTICAL_AXIS < "u" && a.axis === a.VERTICAL_AXIS)
        this.deltaY = -a.detail / 3;
      else if (e.type === "wheel") {
        const d = e;
        d.deltaMode === d.DOM_DELTA_LINE ? On && !De ? this.deltaY = -e.deltaY / 3 : this.deltaY = -e.deltaY : this.deltaY = -e.deltaY / 40;
      }
      if (typeof s.wheelDeltaX < "u")
        xi && gs ? this.deltaX = -(s.wheelDeltaX / 120) : o ? this.deltaX = s.wheelDeltaX / (120 * l) : this.deltaX = s.wheelDeltaX / 120;
      else if (typeof a.HORIZONTAL_AXIS < "u" && a.axis === a.HORIZONTAL_AXIS)
        this.deltaX = -e.detail / 3;
      else if (e.type === "wheel") {
        const d = e;
        d.deltaMode === d.DOM_DELTA_LINE ? On && !De ? this.deltaX = -e.deltaX / 3 : this.deltaX = -e.deltaX : this.deltaX = -e.deltaX / 40;
      }
      this.deltaY === 0 && this.deltaX === 0 && e.wheelDelta && (o ? this.deltaY = e.wheelDelta / (120 * l) : this.deltaY = e.wheelDelta / 120);
    }
  }
  preventDefault() {
    this.browserEvent?.preventDefault();
  }
  stopPropagation() {
    this.browserEvent?.stopPropagation();
  }
}
const Bs = Symbol("MicrotaskDelay");
function Wc(n) {
  return !!n && typeof n.then == "function";
}
function Ws(n) {
  const e = new ar(), t = n(e.token), i = new Promise((o, s) => {
    const a = e.token.onCancellationRequested(() => {
      a.dispose(), s(new cn());
    });
    Promise.resolve(t).then((l) => {
      a.dispose(), e.dispose(), o(l);
    }, (l) => {
      a.dispose(), e.dispose(), s(l);
    });
  });
  return new class {
    cancel() {
      e.cancel(), e.dispose();
    }
    then(o, s) {
      return i.then(o, s);
    }
    catch(o) {
      return this.then(void 0, o);
    }
    finally(o) {
      return i.finally(o);
    }
  }();
}
function Pc(n, e, t) {
  return new Promise((i, o) => {
    const s = e.onCancellationRequested(() => {
      s.dispose(), i(t);
    });
    n.then(i, o).finally(() => s.dispose());
  });
}
class Ps {
  constructor() {
    this.isDisposed = !1, this.activePromise = null, this.queuedPromise = null, this.queuedPromiseFactory = null;
  }
  queue(e) {
    if (this.isDisposed)
      return Promise.reject(new Error("Throttler is disposed"));
    if (this.activePromise) {
      if (this.queuedPromiseFactory = e, !this.queuedPromise) {
        const t = () => {
          if (this.queuedPromise = null, this.isDisposed)
            return;
          const i = this.queue(this.queuedPromiseFactory);
          return this.queuedPromiseFactory = null, i;
        };
        this.queuedPromise = new Promise((i) => {
          this.activePromise.then(t, t).then(i);
        });
      }
      return new Promise((t, i) => {
        this.queuedPromise.then(t, i);
      });
    }
    return this.activePromise = e(), new Promise((t, i) => {
      this.activePromise.then((o) => {
        this.activePromise = null, t(o);
      }, (o) => {
        this.activePromise = null, i(o);
      });
    });
  }
  dispose() {
    this.isDisposed = !0;
  }
}
const Ns = (n, e) => {
  let t = !0;
  const i = setTimeout(() => {
    t = !1, e();
  }, n);
  return {
    isTriggered: () => t,
    dispose: () => {
      clearTimeout(i), t = !1;
    }
  };
}, Hs = (n) => {
  let e = !0;
  return queueMicrotask(() => {
    e && (e = !1, n());
  }), {
    isTriggered: () => e,
    dispose: () => {
      e = !1;
    }
  };
};
class Vs {
  constructor(e) {
    this.defaultDelay = e, this.deferred = null, this.completionPromise = null, this.doResolve = null, this.doReject = null, this.task = null;
  }
  trigger(e, t = this.defaultDelay) {
    this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((o, s) => {
      this.doResolve = o, this.doReject = s;
    }).then(() => {
      if (this.completionPromise = null, this.doResolve = null, this.task) {
        const o = this.task;
        return this.task = null, o();
      }
    }));
    const i = () => {
      this.deferred = null, this.doResolve?.(null);
    };
    return this.deferred = t === Bs ? Hs(i) : Ns(t, i), this.completionPromise;
  }
  isTriggered() {
    return !!this.deferred?.isTriggered();
  }
  cancel() {
    this.cancelTimeout(), this.completionPromise && (this.doReject?.(new cn()), this.completionPromise = null);
  }
  cancelTimeout() {
    this.deferred?.dispose(), this.deferred = null;
  }
  dispose() {
    this.cancel();
  }
}
class Nc {
  constructor(e) {
    this.delayer = new Vs(e), this.throttler = new Ps();
  }
  trigger(e, t) {
    return this.delayer.trigger(() => this.throttler.queue(e), t);
  }
  cancel() {
    this.delayer.cancel();
  }
  dispose() {
    this.delayer.dispose(), this.throttler.dispose();
  }
}
function zs(n, e) {
  return e ? new Promise((t, i) => {
    const o = setTimeout(() => {
      s.dispose(), t();
    }, n), s = e.onCancellationRequested(() => {
      clearTimeout(o), s.dispose(), i(new cn());
    });
  }) : Ws((t) => zs(n, t));
}
function Hc(n, e = 0, t) {
  const i = setTimeout(() => {
    n(), t && o.dispose();
  }, e), o = Ge(() => {
    clearTimeout(i), t?.deleteAndLeak(o);
  });
  return t?.add(o), o;
}
function Vc(n, e = (i) => !!i, t = null) {
  let i = 0;
  const o = n.length, s = () => {
    if (i >= o)
      return Promise.resolve(t);
    const a = n[i++];
    return Promise.resolve(a()).then((d) => e(d) ? Promise.resolve(d) : s());
  };
  return s();
}
class zc {
  constructor(e, t) {
    this._isDisposed = !1, this._token = -1, typeof e == "function" && typeof t == "number" && this.setIfNotSet(e, t);
  }
  dispose() {
    this.cancel(), this._isDisposed = !0;
  }
  cancel() {
    this._token !== -1 && (clearTimeout(this._token), this._token = -1);
  }
  cancelAndSet(e, t) {
    if (this._isDisposed)
      throw new tn("Calling 'cancelAndSet' on a disposed TimeoutTimer");
    this.cancel(), this._token = setTimeout(() => {
      this._token = -1, e();
    }, t);
  }
  setIfNotSet(e, t) {
    if (this._isDisposed)
      throw new tn("Calling 'setIfNotSet' on a disposed TimeoutTimer");
    this._token === -1 && (this._token = setTimeout(() => {
      this._token = -1, e();
    }, t));
  }
}
class Us {
  constructor() {
    this.disposable = void 0, this.isDisposed = !1;
  }
  cancel() {
    this.disposable?.dispose(), this.disposable = void 0;
  }
  cancelAndSet(e, t, i = globalThis) {
    if (this.isDisposed)
      throw new tn("Calling 'cancelAndSet' on a disposed IntervalTimer");
    this.cancel();
    const o = i.setInterval(() => {
      e();
    }, t);
    this.disposable = Ge(() => {
      i.clearInterval(o), this.disposable = void 0;
    });
  }
  dispose() {
    this.cancel(), this.isDisposed = !0;
  }
}
class ur {
  constructor(e, t) {
    this.timeoutToken = -1, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this);
  }
  /**
   * Dispose RunOnceScheduler
   */
  dispose() {
    this.cancel(), this.runner = null;
  }
  /**
   * Cancel current scheduled runner (if any).
   */
  cancel() {
    this.isScheduled() && (clearTimeout(this.timeoutToken), this.timeoutToken = -1);
  }
  /**
   * Cancel previous runner (if any) & schedule a new runner.
   */
  schedule(e = this.timeout) {
    this.cancel(), this.timeoutToken = setTimeout(this.timeoutHandler, e);
  }
  get delay() {
    return this.timeout;
  }
  set delay(e) {
    this.timeout = e;
  }
  /**
   * Returns true if scheduled.
   */
  isScheduled() {
    return this.timeoutToken !== -1;
  }
  onTimeout() {
    this.timeoutToken = -1, this.runner && this.doRun();
  }
  doRun() {
    this.runner?.();
  }
}
let Ks, Xt;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? Xt = (n, e) => {
    ps(() => {
      if (t)
        return;
      const i = Date.now() + 15;
      e(Object.freeze({
        didTimeout: !0,
        timeRemaining() {
          return Math.max(0, i - Date.now());
        }
      }));
    });
    let t = !1;
    return {
      dispose() {
        t || (t = !0);
      }
    };
  } : Xt = (n, e, t) => {
    const i = n.requestIdleCallback(e, typeof t == "number" ? { timeout: t } : void 0);
    let o = !1;
    return {
      dispose() {
        o || (o = !0, n.cancelIdleCallback(i));
      }
    };
  }, Ks = (n) => Xt(globalThis, n);
})();
class hr {
  constructor(e, t) {
    this._didRun = !1, this._executor = () => {
      try {
        this._value = t();
      } catch (i) {
        this._error = i;
      } finally {
        this._didRun = !0;
      }
    }, this._handle = Xt(e, () => this._executor());
  }
  dispose() {
    this._handle.dispose();
  }
  get value() {
    if (this._didRun || (this._handle.dispose(), this._executor()), this._error)
      throw this._error;
    return this._value;
  }
  get isInitialized() {
    return this._didRun;
  }
}
class Uc extends hr {
  constructor(e) {
    super(globalThis, e);
  }
}
class Kc {
  get isRejected() {
    return this.outcome?.outcome === 1;
  }
  get isSettled() {
    return !!this.outcome;
  }
  constructor() {
    this.p = new Promise((e, t) => {
      this.completeCallback = e, this.errorCallback = t;
    });
  }
  complete(e) {
    return new Promise((t) => {
      this.completeCallback(e), this.outcome = { outcome: 0, value: e }, t();
    });
  }
  error(e) {
    return new Promise((t) => {
      this.errorCallback(e), this.outcome = { outcome: 1, value: e }, t();
    });
  }
  cancel() {
    return this.error(new cn());
  }
}
var Lo;
(function(n) {
  async function e(i) {
    let o;
    const s = await Promise.all(i.map((a) => a.then((l) => l, (l) => {
      o || (o = l);
    })));
    if (typeof o < "u")
      throw o;
    return s;
  }
  n.settled = e;
  function t(i) {
    return new Promise(async (o, s) => {
      try {
        await i(o, s);
      } catch (a) {
        s(a);
      }
    });
  }
  n.withAsyncBody = t;
})(Lo || (Lo = {}));
class Le {
  static fromArray(e) {
    return new Le((t) => {
      t.emitMany(e);
    });
  }
  static fromPromise(e) {
    return new Le(async (t) => {
      t.emitMany(await e);
    });
  }
  static fromPromises(e) {
    return new Le(async (t) => {
      await Promise.all(e.map(async (i) => t.emitOne(await i)));
    });
  }
  static merge(e) {
    return new Le(async (t) => {
      await Promise.all(e.map(async (i) => {
        for await (const o of i)
          t.emitOne(o);
      }));
    });
  }
  static {
    this.EMPTY = Le.fromArray([]);
  }
  constructor(e, t) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = t, this._onStateChanged = new Ke(), queueMicrotask(async () => {
      const i = {
        emitOne: (o) => this.emitOne(o),
        emitMany: (o) => this.emitMany(o),
        reject: (o) => this.reject(o)
      };
      try {
        await Promise.resolve(e(i)), this.resolve();
      } catch (o) {
        this.reject(o);
      } finally {
        i.emitOne = void 0, i.emitMany = void 0, i.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let e = 0;
    return {
      next: async () => {
        do {
          if (this._state === 2)
            throw this._error;
          if (e < this._results.length)
            return { done: !1, value: this._results[e++] };
          if (this._state === 1)
            return { done: !0, value: void 0 };
          await sr.toPromise(this._onStateChanged.event);
        } while (!0);
      },
      return: async () => (this._onReturn?.(), { done: !0, value: void 0 })
    };
  }
  static map(e, t) {
    return new Le(async (i) => {
      for await (const o of e)
        i.emitOne(t(o));
    });
  }
  map(e) {
    return Le.map(this, e);
  }
  static filter(e, t) {
    return new Le(async (i) => {
      for await (const o of e)
        t(o) && i.emitOne(o);
    });
  }
  filter(e) {
    return Le.filter(this, e);
  }
  static coalesce(e) {
    return Le.filter(e, (t) => !!t);
  }
  coalesce() {
    return Le.coalesce(this);
  }
  static async toPromise(e) {
    const t = [];
    for await (const i of e)
      t.push(i);
    return t;
  }
  toPromise() {
    return Le.toPromise(this);
  }
  /**
   * The value will be appended at the end.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  emitOne(e) {
    this._state === 0 && (this._results.push(e), this._onStateChanged.fire());
  }
  /**
   * The values will be appended at the end.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  emitMany(e) {
    this._state === 0 && (this._results = this._results.concat(e), this._onStateChanged.fire());
  }
  /**
   * Calling `resolve()` will mark the result array as complete.
   *
   * **NOTE** `resolve()` must be called, otherwise all consumers of this iterable will hang indefinitely, similar to a non-resolved promise.
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  resolve() {
    this._state === 0 && (this._state = 1, this._onStateChanged.fire());
  }
  /**
   * Writing an error will permanently invalidate this iterable.
   * The current users will receive an error thrown, as will all future users.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  reject(e) {
    this._state === 0 && (this._state = 2, this._error = e, this._onStateChanged.fire());
  }
}
class Gs extends Le {
  constructor(e, t) {
    super(t), this._source = e;
  }
  cancel() {
    this._source.cancel();
  }
}
function Gc(n) {
  const e = new ar(), t = n(e.token);
  return new Gs(e, async (i) => {
    const o = e.token.onCancellationRequested(() => {
      o.dispose(), e.dispose(), i.reject(new cn());
    });
    try {
      for await (const s of t) {
        if (e.token.isCancellationRequested)
          return;
        i.emitOne(s);
      }
      o.dispose(), e.dispose();
    } catch (s) {
      o.dispose(), e.dispose(), i.reject(s);
    }
  });
}
/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
const {
  entries: fr,
  setPrototypeOf: _o,
  isFrozen: $s,
  getPrototypeOf: js,
  getOwnPropertyDescriptor: qs
} = Object;
let {
  freeze: Ce,
  seal: Fe,
  create: gr
} = Object, {
  apply: Ci,
  construct: ki
} = typeof Reflect < "u" && Reflect;
Ce || (Ce = function(e) {
  return e;
});
Fe || (Fe = function(e) {
  return e;
});
Ci || (Ci = function(e, t, i) {
  return e.apply(t, i);
});
ki || (ki = function(e, t) {
  return new e(...t);
});
const yn = Ee(Array.prototype.forEach), Do = Ee(Array.prototype.pop), zt = Ee(Array.prototype.push), Dn = Ee(String.prototype.toLowerCase), ii = Ee(String.prototype.toString), To = Ee(String.prototype.match), Ut = Ee(String.prototype.replace), Ys = Ee(String.prototype.indexOf), Xs = Ee(String.prototype.trim), Me = Ee(Object.prototype.hasOwnProperty), ye = Ee(RegExp.prototype.test), Kt = Zs(TypeError);
function Ee(n) {
  return function(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      i[o - 1] = arguments[o];
    return Ci(n, e, i);
  };
}
function Zs(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return ki(n, t);
  };
}
function O(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Dn;
  _o && _o(n, null);
  let i = e.length;
  for (; i--; ) {
    let o = e[i];
    if (typeof o == "string") {
      const s = t(o);
      s !== o && ($s(e) || (e[i] = s), o = s);
    }
    n[o] = !0;
  }
  return n;
}
function Qs(n) {
  for (let e = 0; e < n.length; e++)
    Me(n, e) || (n[e] = null);
  return n;
}
function lt(n) {
  const e = gr(null);
  for (const [t, i] of fr(n))
    Me(n, t) && (Array.isArray(i) ? e[t] = Qs(i) : i && typeof i == "object" && i.constructor === Object ? e[t] = lt(i) : e[t] = i);
  return e;
}
function Gt(n, e) {
  for (; n !== null; ) {
    const i = qs(n, e);
    if (i) {
      if (i.get)
        return Ee(i.get);
      if (typeof i.value == "function")
        return Ee(i.value);
    }
    n = js(n);
  }
  function t() {
    return null;
  }
  return t;
}
const Eo = Ce(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), oi = Ce(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ri = Ce(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Js = Ce(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), si = Ce(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ea = Ce(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ao = Ce(["#text"]), Fo = Ce(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ai = Ce(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Io = Ce(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Cn = Ce(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ta = Fe(/\{\{[\w\W]*|[\w\W]*\}\}/gm), na = Fe(/<%[\w\W]*|[\w\W]*%>/gm), ia = Fe(/\${[\w\W]*}/gm), oa = Fe(/^data-[\-\w.\u00B7-\uFFFF]/), ra = Fe(/^aria-[\-\w]+$/), pr = Fe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), sa = Fe(/^(?:\w+script|data):/i), aa = Fe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), mr = Fe(/^html$/i), la = Fe(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Oo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: ta,
  ERB_EXPR: na,
  TMPLIT_EXPR: ia,
  DATA_ATTR: oa,
  ARIA_ATTR: ra,
  IS_ALLOWED_URI: pr,
  IS_SCRIPT_OR_DATA: sa,
  ATTR_WHITESPACE: aa,
  DOCTYPE_NAME: mr,
  CUSTOM_ELEMENT: la
});
const $t = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, ca = function() {
  return typeof window > "u" ? null : window;
}, da = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const o = "data-tt-policy-suffix";
  t && t.hasAttribute(o) && (i = t.getAttribute(o));
  const s = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(s, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function wr() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ca();
  const e = (L) => wr(L);
  if (e.version = "3.1.7", e.removed = [], !n || !n.document || n.document.nodeType !== $t.document)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const i = t, o = i.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: a,
    Node: l,
    Element: d,
    NodeFilter: u,
    NamedNodeMap: g = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: w,
    DOMParser: b,
    trustedTypes: p
  } = n, k = d.prototype, v = Gt(k, "cloneNode"), T = Gt(k, "remove"), _ = Gt(k, "nextSibling"), A = Gt(k, "childNodes"), z = Gt(k, "parentNode");
  if (typeof a == "function") {
    const L = t.createElement("template");
    L.content && L.content.ownerDocument && (t = L.content.ownerDocument);
  }
  let F, $ = "";
  const {
    implementation: Y,
    createNodeIterator: Q,
    createDocumentFragment: ue,
    getElementsByTagName: J
  } = t, {
    importNode: oe
  } = i;
  let j = {};
  e.isSupported = typeof fr == "function" && typeof z == "function" && Y && Y.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: B,
    ERB_EXPR: q,
    TMPLIT_EXPR: N,
    DATA_ATTR: ge,
    ARIA_ATTR: ve,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: re,
    CUSTOM_ELEMENT: ne
  } = Oo;
  let {
    IS_ALLOWED_URI: ee
  } = Oo, W = null;
  const pe = O({}, [...Eo, ...oi, ...ri, ...si, ...Ao]);
  let Z = null;
  const we = O({}, [...Fo, ...ai, ...Io, ...Cn]);
  let U = Object.seal(gr(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Te = null, bt = null, hn = !0, $n = !0, Ji = !1, eo = !0, yt = !1, jn = !0, st = !1, qn = !1, Yn = !1, Ct = !1, fn = !1, gn = !1, to = !0, no = !1;
  const is = "user-content-";
  let Xn = !0, Nt = !1, kt = {}, vt = null;
  const io = O({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let oo = null;
  const ro = O({}, ["audio", "video", "img", "source", "image", "track"]);
  let Zn = null;
  const so = O({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pn = "http://www.w3.org/1998/Math/MathML", mn = "http://www.w3.org/2000/svg", qe = "http://www.w3.org/1999/xhtml";
  let St = qe, Qn = !1, Jn = null;
  const os = O({}, [pn, mn, qe], ii);
  let Ht = null;
  const rs = ["application/xhtml+xml", "text/html"], ss = "text/html";
  let le = null, Lt = null;
  const as = t.createElement("form"), ao = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, ei = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Lt && Lt === h)) {
      if ((!h || typeof h != "object") && (h = {}), h = lt(h), Ht = // eslint-disable-next-line unicorn/prefer-includes
      rs.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? ss : h.PARSER_MEDIA_TYPE, le = Ht === "application/xhtml+xml" ? ii : Dn, W = Me(h, "ALLOWED_TAGS") ? O({}, h.ALLOWED_TAGS, le) : pe, Z = Me(h, "ALLOWED_ATTR") ? O({}, h.ALLOWED_ATTR, le) : we, Jn = Me(h, "ALLOWED_NAMESPACES") ? O({}, h.ALLOWED_NAMESPACES, ii) : os, Zn = Me(h, "ADD_URI_SAFE_ATTR") ? O(
        lt(so),
        // eslint-disable-line indent
        h.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        le
        // eslint-disable-line indent
      ) : so, oo = Me(h, "ADD_DATA_URI_TAGS") ? O(
        lt(ro),
        // eslint-disable-line indent
        h.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        le
        // eslint-disable-line indent
      ) : ro, vt = Me(h, "FORBID_CONTENTS") ? O({}, h.FORBID_CONTENTS, le) : io, Te = Me(h, "FORBID_TAGS") ? O({}, h.FORBID_TAGS, le) : {}, bt = Me(h, "FORBID_ATTR") ? O({}, h.FORBID_ATTR, le) : {}, kt = Me(h, "USE_PROFILES") ? h.USE_PROFILES : !1, hn = h.ALLOW_ARIA_ATTR !== !1, $n = h.ALLOW_DATA_ATTR !== !1, Ji = h.ALLOW_UNKNOWN_PROTOCOLS || !1, eo = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, yt = h.SAFE_FOR_TEMPLATES || !1, jn = h.SAFE_FOR_XML !== !1, st = h.WHOLE_DOCUMENT || !1, Ct = h.RETURN_DOM || !1, fn = h.RETURN_DOM_FRAGMENT || !1, gn = h.RETURN_TRUSTED_TYPE || !1, Yn = h.FORCE_BODY || !1, to = h.SANITIZE_DOM !== !1, no = h.SANITIZE_NAMED_PROPS || !1, Xn = h.KEEP_CONTENT !== !1, Nt = h.IN_PLACE || !1, ee = h.ALLOWED_URI_REGEXP || pr, St = h.NAMESPACE || qe, U = h.CUSTOM_ELEMENT_HANDLING || {}, h.CUSTOM_ELEMENT_HANDLING && ao(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (U.tagNameCheck = h.CUSTOM_ELEMENT_HANDLING.tagNameCheck), h.CUSTOM_ELEMENT_HANDLING && ao(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (U.attributeNameCheck = h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (U.allowCustomizedBuiltInElements = h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), yt && ($n = !1), fn && (Ct = !0), kt && (W = O({}, Ao), Z = [], kt.html === !0 && (O(W, Eo), O(Z, Fo)), kt.svg === !0 && (O(W, oi), O(Z, ai), O(Z, Cn)), kt.svgFilters === !0 && (O(W, ri), O(Z, ai), O(Z, Cn)), kt.mathMl === !0 && (O(W, si), O(Z, Io), O(Z, Cn))), h.ADD_TAGS && (W === pe && (W = lt(W)), O(W, h.ADD_TAGS, le)), h.ADD_ATTR && (Z === we && (Z = lt(Z)), O(Z, h.ADD_ATTR, le)), h.ADD_URI_SAFE_ATTR && O(Zn, h.ADD_URI_SAFE_ATTR, le), h.FORBID_CONTENTS && (vt === io && (vt = lt(vt)), O(vt, h.FORBID_CONTENTS, le)), Xn && (W["#text"] = !0), st && O(W, ["html", "head", "body"]), W.table && (O(W, ["tbody"]), delete Te.tbody), h.TRUSTED_TYPES_POLICY) {
        if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Kt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Kt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        F = h.TRUSTED_TYPES_POLICY, $ = F.createHTML("");
      } else
        F === void 0 && (F = da(p, o)), F !== null && typeof $ == "string" && ($ = F.createHTML(""));
      Ce && Ce(h), Lt = h;
    }
  }, lo = O({}, ["mi", "mo", "mn", "ms", "mtext"]), co = O({}, ["annotation-xml"]), ls = O({}, ["title", "style", "font", "a", "script"]), uo = O({}, [...oi, ...ri, ...Js]), ho = O({}, [...si, ...ea]), cs = function(h) {
    let y = z(h);
    (!y || !y.tagName) && (y = {
      namespaceURI: St,
      tagName: "template"
    });
    const S = Dn(h.tagName), X = Dn(y.tagName);
    return Jn[h.namespaceURI] ? h.namespaceURI === mn ? y.namespaceURI === qe ? S === "svg" : y.namespaceURI === pn ? S === "svg" && (X === "annotation-xml" || lo[X]) : !!uo[S] : h.namespaceURI === pn ? y.namespaceURI === qe ? S === "math" : y.namespaceURI === mn ? S === "math" && co[X] : !!ho[S] : h.namespaceURI === qe ? y.namespaceURI === mn && !co[X] || y.namespaceURI === pn && !lo[X] ? !1 : !ho[S] && (ls[S] || !uo[S]) : !!(Ht === "application/xhtml+xml" && Jn[h.namespaceURI]) : !1;
  }, Pe = function(h) {
    zt(e.removed, {
      element: h
    });
    try {
      z(h).removeChild(h);
    } catch {
      T(h);
    }
  }, wn = function(h, y) {
    try {
      zt(e.removed, {
        attribute: y.getAttributeNode(h),
        from: y
      });
    } catch {
      zt(e.removed, {
        attribute: null,
        from: y
      });
    }
    if (y.removeAttribute(h), h === "is" && !Z[h])
      if (Ct || fn)
        try {
          Pe(y);
        } catch {
        }
      else
        try {
          y.setAttribute(h, "");
        } catch {
        }
  }, fo = function(h) {
    let y = null, S = null;
    if (Yn)
      h = "<remove></remove>" + h;
    else {
      const he = To(h, /^[\r\n\t ]+/);
      S = he && he[0];
    }
    Ht === "application/xhtml+xml" && St === qe && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const X = F ? F.createHTML(h) : h;
    if (St === qe)
      try {
        y = new b().parseFromString(X, Ht);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = Y.createDocument(St, "template", null);
      try {
        y.documentElement.innerHTML = Qn ? $ : X;
      } catch {
      }
    }
    const me = y.body || y.documentElement;
    return h && S && me.insertBefore(t.createTextNode(S), me.childNodes[0] || null), St === qe ? J.call(y, st ? "html" : "body")[0] : st ? y.documentElement : me;
  }, go = function(h) {
    return Q.call(
      h.ownerDocument || h,
      h,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, po = function(h) {
    return h instanceof w && (typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || !(h.attributes instanceof g) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function");
  }, mo = function(h) {
    return typeof l == "function" && h instanceof l;
  }, Ye = function(h, y, S) {
    j[h] && yn(j[h], (X) => {
      X.call(e, y, S, Lt);
    });
  }, wo = function(h) {
    let y = null;
    if (Ye("beforeSanitizeElements", h, null), po(h))
      return Pe(h), !0;
    const S = le(h.nodeName);
    if (Ye("uponSanitizeElement", h, {
      tagName: S,
      allowedTags: W
    }), h.hasChildNodes() && !mo(h.firstElementChild) && ye(/<[/\w]/g, h.innerHTML) && ye(/<[/\w]/g, h.textContent) || h.nodeType === $t.progressingInstruction || jn && h.nodeType === $t.comment && ye(/<[/\w]/g, h.data))
      return Pe(h), !0;
    if (!W[S] || Te[S]) {
      if (!Te[S] && yo(S) && (U.tagNameCheck instanceof RegExp && ye(U.tagNameCheck, S) || U.tagNameCheck instanceof Function && U.tagNameCheck(S)))
        return !1;
      if (Xn && !vt[S]) {
        const X = z(h) || h.parentNode, me = A(h) || h.childNodes;
        if (me && X) {
          const he = me.length;
          for (let Se = he - 1; Se >= 0; --Se) {
            const Ne = v(me[Se], !0);
            Ne.__removalCount = (h.__removalCount || 0) + 1, X.insertBefore(Ne, _(h));
          }
        }
      }
      return Pe(h), !0;
    }
    return h instanceof d && !cs(h) || (S === "noscript" || S === "noembed" || S === "noframes") && ye(/<\/no(script|embed|frames)/i, h.innerHTML) ? (Pe(h), !0) : (yt && h.nodeType === $t.text && (y = h.textContent, yn([B, q, N], (X) => {
      y = Ut(y, X, " ");
    }), h.textContent !== y && (zt(e.removed, {
      element: h.cloneNode()
    }), h.textContent = y)), Ye("afterSanitizeElements", h, null), !1);
  }, bo = function(h, y, S) {
    if (to && (y === "id" || y === "name") && (S in t || S in as))
      return !1;
    if (!($n && !bt[y] && ye(ge, y))) {
      if (!(hn && ye(ve, y))) {
        if (!Z[y] || bt[y]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(yo(h) && (U.tagNameCheck instanceof RegExp && ye(U.tagNameCheck, h) || U.tagNameCheck instanceof Function && U.tagNameCheck(h)) && (U.attributeNameCheck instanceof RegExp && ye(U.attributeNameCheck, y) || U.attributeNameCheck instanceof Function && U.attributeNameCheck(y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            y === "is" && U.allowCustomizedBuiltInElements && (U.tagNameCheck instanceof RegExp && ye(U.tagNameCheck, S) || U.tagNameCheck instanceof Function && U.tagNameCheck(S)))
          ) return !1;
        } else if (!Zn[y]) {
          if (!ye(ee, Ut(S, re, ""))) {
            if (!((y === "src" || y === "xlink:href" || y === "href") && h !== "script" && Ys(S, "data:") === 0 && oo[h])) {
              if (!(Ji && !ye(je, Ut(S, re, "")))) {
                if (S)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, yo = function(h) {
    return h !== "annotation-xml" && To(h, ne);
  }, Co = function(h) {
    Ye("beforeSanitizeAttributes", h, null);
    const {
      attributes: y
    } = h;
    if (!y)
      return;
    const S = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Z
    };
    let X = y.length;
    for (; X--; ) {
      const me = y[X], {
        name: he,
        namespaceURI: Se,
        value: Ne
      } = me, Vt = le(he);
      let be = he === "value" ? Ne : Xs(Ne);
      if (S.attrName = Vt, S.attrValue = be, S.keepAttr = !0, S.forceKeepAttr = void 0, Ye("uponSanitizeAttribute", h, S), be = S.attrValue, S.forceKeepAttr || (wn(he, h), !S.keepAttr))
        continue;
      if (!eo && ye(/\/>/i, be)) {
        wn(he, h);
        continue;
      }
      yt && yn([B, q, N], (vo) => {
        be = Ut(be, vo, " ");
      });
      const ko = le(h.nodeName);
      if (bo(ko, Vt, be)) {
        if (no && (Vt === "id" || Vt === "name") && (wn(he, h), be = is + be), jn && ye(/((--!?|])>)|<\/(style|title)/i, be)) {
          wn(he, h);
          continue;
        }
        if (F && typeof p == "object" && typeof p.getAttributeType == "function" && !Se)
          switch (p.getAttributeType(ko, Vt)) {
            case "TrustedHTML": {
              be = F.createHTML(be);
              break;
            }
            case "TrustedScriptURL": {
              be = F.createScriptURL(be);
              break;
            }
          }
        try {
          Se ? h.setAttributeNS(Se, he, be) : h.setAttribute(he, be), po(h) ? Pe(h) : Do(e.removed);
        } catch {
        }
      }
    }
    Ye("afterSanitizeAttributes", h, null);
  }, ds = function L(h) {
    let y = null;
    const S = go(h);
    for (Ye("beforeSanitizeShadowDOM", h, null); y = S.nextNode(); )
      Ye("uponSanitizeShadowNode", y, null), !wo(y) && (y.content instanceof s && L(y.content), Co(y));
    Ye("afterSanitizeShadowDOM", h, null);
  };
  return e.sanitize = function(L) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, S = null, X = null, me = null;
    if (Qn = !L, Qn && (L = "<!-->"), typeof L != "string" && !mo(L))
      if (typeof L.toString == "function") {
        if (L = L.toString(), typeof L != "string")
          throw Kt("dirty is not a string, aborting");
      } else
        throw Kt("toString is not a function");
    if (!e.isSupported)
      return L;
    if (qn || ei(h), e.removed = [], typeof L == "string" && (Nt = !1), Nt) {
      if (L.nodeName) {
        const Ne = le(L.nodeName);
        if (!W[Ne] || Te[Ne])
          throw Kt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (L instanceof l)
      y = fo("<!---->"), S = y.ownerDocument.importNode(L, !0), S.nodeType === $t.element && S.nodeName === "BODY" || S.nodeName === "HTML" ? y = S : y.appendChild(S);
    else {
      if (!Ct && !yt && !st && // eslint-disable-next-line unicorn/prefer-includes
      L.indexOf("<") === -1)
        return F && gn ? F.createHTML(L) : L;
      if (y = fo(L), !y)
        return Ct ? null : gn ? $ : "";
    }
    y && Yn && Pe(y.firstChild);
    const he = go(Nt ? L : y);
    for (; X = he.nextNode(); )
      wo(X) || (X.content instanceof s && ds(X.content), Co(X));
    if (Nt)
      return L;
    if (Ct) {
      if (fn)
        for (me = ue.call(y.ownerDocument); y.firstChild; )
          me.appendChild(y.firstChild);
      else
        me = y;
      return (Z.shadowroot || Z.shadowrootmode) && (me = oe.call(i, me, !0)), me;
    }
    let Se = st ? y.outerHTML : y.innerHTML;
    return st && W["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && ye(mr, y.ownerDocument.doctype.name) && (Se = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + Se), yt && yn([B, q, N], (Ne) => {
      Se = Ut(Se, Ne, " ");
    }), F && gn ? F.createHTML(Se) : Se;
  }, e.setConfig = function() {
    let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ei(L), qn = !0;
  }, e.clearConfig = function() {
    Lt = null, qn = !1;
  }, e.isValidAttribute = function(L, h, y) {
    Lt || ei({});
    const S = le(L), X = le(h);
    return bo(S, X, y);
  }, e.addHook = function(L, h) {
    typeof h == "function" && (j[L] = j[L] || [], zt(j[L], h));
  }, e.removeHook = function(L) {
    if (j[L])
      return Do(j[L]);
  }, e.removeHooks = function(L) {
    j[L] && (j[L] = []);
  }, e.removeAllHooks = function() {
    j = {};
  }, e;
}
var $e = wr();
$e.version;
$e.isSupported;
const $c = $e.sanitize;
$e.setConfig;
$e.clearConfig;
$e.isValidAttribute;
const ua = $e.addHook, ha = $e.removeHook;
$e.removeHooks;
$e.removeAllHooks;
function br(n) {
  return n;
}
class fa {
  constructor(e, t) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = br) : (this._fn = t, this._computeKey = e.getCacheKey);
  }
  get(e) {
    const t = this._computeKey(e);
    return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
  }
}
class jc {
  get cachedValues() {
    return this._map;
  }
  constructor(e, t) {
    this._map = /* @__PURE__ */ new Map(), this._map2 = /* @__PURE__ */ new Map(), typeof e == "function" ? (this._fn = e, this._computeKey = br) : (this._fn = t, this._computeKey = e.getCacheKey);
  }
  get(e) {
    const t = this._computeKey(e);
    if (this._map2.has(t))
      return this._map2.get(t);
    const i = this._fn(e);
    return this._map.set(e, i), this._map2.set(t, i), i;
  }
}
class vi {
  constructor(e) {
    this.executor = e, this._didRun = !1;
  }
  /**
   * Get the wrapped value.
   *
   * This will force evaluation of the lazy value if it has not been resolved yet. Lazy values are only
   * resolved once. `getValue` will re-throw exceptions that are hit while resolving the value
   */
  get value() {
    if (!this._didRun)
      try {
        this._value = this.executor();
      } catch (e) {
        this._error = e;
      } finally {
        this._didRun = !0;
      }
    if (this._error)
      throw this._error;
    return this._value;
  }
  /**
   * Get the wrapped value without forcing evaluation.
   */
  get rawValue() {
    return this._value;
  }
}
function qc(n) {
  return !n || typeof n != "string" ? !0 : n.trim().length === 0;
}
const ga = /{(\d+)}/g;
function Yc(n, ...e) {
  return e.length === 0 ? n : n.replace(ga, function(t, i) {
    const o = parseInt(i, 10);
    return isNaN(o) || o < 0 || o >= e.length ? t : e[o];
  });
}
function Xc(n) {
  return n.replace(/[<>"'&]/g, (e) => {
    switch (e) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&apos;";
      case "&":
        return "&amp;";
    }
    return e;
  });
}
function Zc(n) {
  return n.replace(/[<>&]/g, function(e) {
    switch (e) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      default:
        return e;
    }
  });
}
function pa(n) {
  return n.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function Qc(n, e = " ") {
  const t = ma(n, e);
  return wa(t, e);
}
function ma(n, e) {
  if (!n || !e)
    return n;
  const t = e.length;
  if (t === 0 || n.length === 0)
    return n;
  let i = 0;
  for (; n.indexOf(e, i) === i; )
    i = i + t;
  return n.substring(i);
}
function wa(n, e) {
  if (!n || !e)
    return n;
  const t = e.length, i = n.length;
  if (t === 0 || i === 0)
    return n;
  let o = i, s = -1;
  for (; s = n.lastIndexOf(e, o - 1), !(s === -1 || s + t !== o); ) {
    if (s === 0)
      return "";
    o = s;
  }
  return n.substring(0, o);
}
function Jc(n) {
  return n.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*");
}
function ed(n) {
  return n.replace(/\*/g, "");
}
function td(n, e, t = {}) {
  if (!n)
    throw new Error("Cannot create regex from empty string");
  e || (n = pa(n)), t.wholeWord && (/\B/.test(n.charAt(0)) || (n = "\\b" + n), /\B/.test(n.charAt(n.length - 1)) || (n = n + "\\b"));
  let i = "";
  return t.global && (i += "g"), t.matchCase || (i += "i"), t.multiline && (i += "m"), t.unicode && (i += "u"), new RegExp(n, i);
}
function nd(n) {
  return n.source === "^" || n.source === "^$" || n.source === "$" || n.source === "^\\s*$" ? !1 : !!(n.exec("") && n.lastIndex === 0);
}
function id(n) {
  return n.split(/\r\n|\r|\n/);
}
function od(n) {
  const e = [], t = n.split(/(\r\n|\r|\n)/);
  for (let i = 0; i < Math.ceil(t.length / 2); i++)
    e.push(t[2 * i] + (t[2 * i + 1] ?? ""));
  return e;
}
function ba(n) {
  for (let e = 0, t = n.length; e < t; e++) {
    const i = n.charCodeAt(e);
    if (i !== 32 && i !== 9)
      return e;
  }
  return -1;
}
function rd(n, e = 0, t = n.length) {
  for (let i = e; i < t; i++) {
    const o = n.charCodeAt(i);
    if (o !== 32 && o !== 9)
      return n.substring(e, i);
  }
  return n.substring(e, t);
}
function ya(n, e = n.length - 1) {
  for (let t = e; t >= 0; t--) {
    const i = n.charCodeAt(t);
    if (i !== 32 && i !== 9)
      return t;
  }
  return -1;
}
function sd(n, e) {
  return n < e ? -1 : n > e ? 1 : 0;
}
function Ca(n, e, t = 0, i = n.length, o = 0, s = e.length) {
  for (; t < i && o < s; t++, o++) {
    const d = n.charCodeAt(t), u = e.charCodeAt(o);
    if (d < u)
      return -1;
    if (d > u)
      return 1;
  }
  const a = i - t, l = s - o;
  return a < l ? -1 : a > l ? 1 : 0;
}
function ad(n, e) {
  return Bi(n, e, 0, n.length, 0, e.length);
}
function Bi(n, e, t = 0, i = n.length, o = 0, s = e.length) {
  for (; t < i && o < s; t++, o++) {
    let d = n.charCodeAt(t), u = e.charCodeAt(o);
    if (d === u)
      continue;
    if (d >= 128 || u >= 128)
      return Ca(n.toLowerCase(), e.toLowerCase(), t, i, o, s);
    Ro(d) && (d -= 32), Ro(u) && (u -= 32);
    const g = d - u;
    if (g !== 0)
      return g;
  }
  const a = i - t, l = s - o;
  return a < l ? -1 : a > l ? 1 : 0;
}
function ld(n) {
  return n >= 48 && n <= 57;
}
function Ro(n) {
  return n >= 97 && n <= 122;
}
function cd(n) {
  return n >= 65 && n <= 90;
}
function ka(n, e) {
  return n.length === e.length && Bi(n, e) === 0;
}
function va(n, e) {
  const t = e.length;
  return e.length > n.length ? !1 : Bi(n, e, 0, t) === 0;
}
function dd(n, e) {
  const t = Math.min(n.length, e.length);
  let i;
  for (i = 0; i < t; i++)
    if (n.charCodeAt(i) !== e.charCodeAt(i))
      return i;
  return t;
}
function ud(n, e) {
  const t = Math.min(n.length, e.length);
  let i;
  const o = n.length - 1, s = e.length - 1;
  for (i = 0; i < t; i++)
    if (n.charCodeAt(o - i) !== e.charCodeAt(s - i))
      return i;
  return t;
}
function Rt(n) {
  return 55296 <= n && n <= 56319;
}
function on(n) {
  return 56320 <= n && n <= 57343;
}
function Wi(n, e) {
  return (n - 55296 << 10) + (e - 56320) + 65536;
}
function Si(n, e, t) {
  const i = n.charCodeAt(t);
  if (Rt(i) && t + 1 < e) {
    const o = n.charCodeAt(t + 1);
    if (on(o))
      return Wi(i, o);
  }
  return i;
}
function Sa(n, e) {
  const t = n.charCodeAt(e - 1);
  if (on(t) && e > 1) {
    const i = n.charCodeAt(e - 2);
    if (Rt(i))
      return Wi(i, t);
  }
  return t;
}
class Pi {
  get offset() {
    return this._offset;
  }
  constructor(e, t = 0) {
    this._str = e, this._len = e.length, this._offset = t;
  }
  setOffset(e) {
    this._offset = e;
  }
  prevCodePoint() {
    const e = Sa(this._str, this._offset);
    return this._offset -= e >= 65536 ? 2 : 1, e;
  }
  nextCodePoint() {
    const e = Si(this._str, this._len, this._offset);
    return this._offset += e >= 65536 ? 2 : 1, e;
  }
  eol() {
    return this._offset >= this._len;
  }
}
class Rn {
  get offset() {
    return this._iterator.offset;
  }
  constructor(e, t = 0) {
    this._iterator = new Pi(e, t);
  }
  nextGraphemeLength() {
    const e = ft.getInstance(), t = this._iterator, i = t.offset;
    let o = e.getGraphemeBreakType(t.nextCodePoint());
    for (; !t.eol(); ) {
      const s = t.offset, a = e.getGraphemeBreakType(t.nextCodePoint());
      if (xo(o, a)) {
        t.setOffset(s);
        break;
      }
      o = a;
    }
    return t.offset - i;
  }
  prevGraphemeLength() {
    const e = ft.getInstance(), t = this._iterator, i = t.offset;
    let o = e.getGraphemeBreakType(t.prevCodePoint());
    for (; t.offset > 0; ) {
      const s = t.offset, a = e.getGraphemeBreakType(t.prevCodePoint());
      if (xo(a, o)) {
        t.setOffset(s);
        break;
      }
      o = a;
    }
    return i - t.offset;
  }
  eol() {
    return this._iterator.eol();
  }
}
function La(n, e) {
  return new Rn(n, e).nextGraphemeLength();
}
function _a(n, e) {
  return new Rn(n, e).prevGraphemeLength();
}
function hd(n, e) {
  e > 0 && on(n.charCodeAt(e)) && e--;
  const t = e + La(n, e);
  return [t - _a(n, t), t];
}
let li;
function Da() {
  return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
}
function Mo(n) {
  return li || (li = Da()), li.test(n);
}
const Ta = /^[\t\n\r\x20-\x7E]*$/;
function fd(n) {
  return Ta.test(n);
}
const Ea = /[\u2028\u2029]/;
function gd(n) {
  return Ea.test(n);
}
function Ni(n) {
  return n >= 11904 && n <= 55215 || n >= 63744 && n <= 64255 || n >= 65281 && n <= 65374;
}
function yr(n) {
  return n >= 127462 && n <= 127487 || n === 8986 || n === 8987 || n === 9200 || n === 9203 || n >= 9728 && n <= 10175 || n === 11088 || n === 11093 || n >= 127744 && n <= 128591 || n >= 128640 && n <= 128764 || n >= 128992 && n <= 129008 || n >= 129280 && n <= 129535 || n >= 129648 && n <= 129782;
}
const pd = "\uFEFF";
function md(n) {
  return !!(n && n.length > 0 && n.charCodeAt(0) === 65279);
}
function wd(n, e = !1) {
  return n ? (e && (n = n.replace(/\\./g, "")), n.toLowerCase() !== n) : !1;
}
function bd(n) {
  return n = n % 52, n < 26 ? String.fromCharCode(97 + n) : String.fromCharCode(65 + n - 26);
}
function xo(n, e) {
  return n === 0 ? e !== 5 && e !== 7 : n === 2 && e === 3 ? !1 : n === 4 || n === 2 || n === 3 || e === 4 || e === 2 || e === 3 ? !0 : !(n === 8 && (e === 8 || e === 9 || e === 11 || e === 12) || (n === 11 || n === 9) && (e === 9 || e === 10) || (n === 12 || n === 10) && e === 10 || e === 5 || e === 13 || e === 7 || n === 1 || n === 13 && e === 14 || n === 6 && e === 6);
}
class ft {
  static {
    this._INSTANCE = null;
  }
  static getInstance() {
    return ft._INSTANCE || (ft._INSTANCE = new ft()), ft._INSTANCE;
  }
  constructor() {
    this._data = Aa();
  }
  getGraphemeBreakType(e) {
    if (e < 32)
      return e === 10 ? 3 : e === 13 ? 2 : 4;
    if (e < 127)
      return 0;
    const t = this._data, i = t.length / 3;
    let o = 1;
    for (; o <= i; )
      if (e < t[3 * o])
        o = 2 * o;
      else if (e > t[3 * o + 1])
        o = 2 * o + 1;
      else
        return t[3 * o + 2];
    return 0;
  }
}
function Aa() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
function yd(n, e) {
  if (n === 0)
    return 0;
  const t = Fa(n, e);
  if (t !== void 0)
    return t;
  const i = new Pi(e, n);
  return i.prevCodePoint(), i.offset;
}
function Fa(n, e) {
  const t = new Pi(e, n);
  let i = t.prevCodePoint();
  for (; Ia(i) || i === 65039 || i === 8419; ) {
    if (t.offset === 0)
      return;
    i = t.prevCodePoint();
  }
  if (!yr(i))
    return;
  let o = t.offset;
  return o > 0 && t.prevCodePoint() === 8205 && (o = t.offset), o;
}
function Ia(n) {
  return 127995 <= n && n <= 127999;
}
const Cd = " ";
class qt {
  static {
    this.ambiguousCharacterData = new vi(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}'));
  }
  static {
    this.cache = new fa({ getCacheKey: JSON.stringify }, (e) => {
      function t(g) {
        const w = /* @__PURE__ */ new Map();
        for (let b = 0; b < g.length; b += 2)
          w.set(g[b], g[b + 1]);
        return w;
      }
      function i(g, w) {
        const b = new Map(g);
        for (const [p, k] of w)
          b.set(p, k);
        return b;
      }
      function o(g, w) {
        if (!g)
          return w;
        const b = /* @__PURE__ */ new Map();
        for (const [p, k] of g)
          w.has(p) && b.set(p, k);
        return b;
      }
      const s = this.ambiguousCharacterData.value;
      let a = e.filter((g) => !g.startsWith("_") && g in s);
      a.length === 0 && (a = ["_default"]);
      let l;
      for (const g of a) {
        const w = t(s[g]);
        l = o(l, w);
      }
      const d = t(s._common), u = i(d, l);
      return new qt(u);
    });
  }
  static getInstance(e) {
    return qt.cache.get(Array.from(e));
  }
  static {
    this._locales = new vi(() => Object.keys(qt.ambiguousCharacterData.value).filter((e) => !e.startsWith("_")));
  }
  static getLocales() {
    return qt._locales.value;
  }
  constructor(e) {
    this.confusableDictionary = e;
  }
  isAmbiguous(e) {
    return this.confusableDictionary.has(e);
  }
  /**
   * Returns the non basic ASCII code point that the given code point can be confused,
   * or undefined if such code point does note exist.
   */
  getPrimaryConfusable(e) {
    return this.confusableDictionary.get(e);
  }
  getConfusableCodePoints() {
    return new Set(this.confusableDictionary.keys());
  }
}
class Tn {
  static getRawData() {
    return JSON.parse("[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]");
  }
  static {
    this._data = void 0;
  }
  static getData() {
    return this._data || (this._data = new Set(Tn.getRawData())), this._data;
  }
  static isInvisibleCharacter(e) {
    return Tn.getData().has(e);
  }
  static get codePoints() {
    return Tn.getData();
  }
}
var ot;
(function(n) {
  n.inMemory = "inmemory", n.vscode = "vscode", n.internal = "private", n.walkThrough = "walkThrough", n.walkThroughSnippet = "walkThroughSnippet", n.http = "http", n.https = "https", n.file = "file", n.mailto = "mailto", n.untitled = "untitled", n.data = "data", n.command = "command", n.vscodeRemote = "vscode-remote", n.vscodeRemoteResource = "vscode-remote-resource", n.vscodeManagedRemoteResource = "vscode-managed-remote-resource", n.vscodeUserData = "vscode-userdata", n.vscodeCustomEditor = "vscode-custom-editor", n.vscodeNotebookCell = "vscode-notebook-cell", n.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", n.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", n.vscodeNotebookCellOutput = "vscode-notebook-cell-output", n.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", n.vscodeNotebookMetadata = "vscode-notebook-metadata", n.vscodeInteractiveInput = "vscode-interactive-input", n.vscodeSettings = "vscode-settings", n.vscodeWorkspaceTrust = "vscode-workspace-trust", n.vscodeTerminal = "vscode-terminal", n.vscodeChatCodeBlock = "vscode-chat-code-block", n.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", n.vscodeChatSesssion = "vscode-chat-editor", n.webviewPanel = "webview-panel", n.vscodeWebview = "vscode-webview", n.extension = "extension", n.vscodeFileResource = "vscode-file", n.tmp = "tmp", n.vsls = "vsls", n.vscodeSourceControl = "vscode-scm", n.commentsInput = "comment", n.codeSetting = "code-setting", n.outputChannel = "output";
})(ot || (ot = {}));
function Oa(n, e) {
  return nt.isUri(n) ? ka(n.scheme, e) : va(n, e + ":");
}
function kd(n, ...e) {
  return e.some((t) => Oa(n, t));
}
const Ra = "tkn";
class Ma {
  constructor() {
    this._hosts = /* @__PURE__ */ Object.create(null), this._ports = /* @__PURE__ */ Object.create(null), this._connectionTokens = /* @__PURE__ */ Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
  }
  setPreferredWebSchema(e) {
    this._preferredWebSchema = e;
  }
  get _remoteResourcesPath() {
    return ms.join(this._serverRootPath, ot.vscodeRemoteResource);
  }
  rewrite(e) {
    if (this._delegate)
      try {
        return this._delegate(e);
      } catch (l) {
        return zn(l), e;
      }
    const t = e.authority;
    let i = this._hosts[t];
    i && i.indexOf(":") !== -1 && i.indexOf("[") === -1 && (i = `[${i}]`);
    const o = this._ports[t], s = this._connectionTokens[t];
    let a = `path=${encodeURIComponent(e.path)}`;
    return typeof s == "string" && (a += `&${Ra}=${encodeURIComponent(s)}`), nt.from({
      scheme: ws ? this._preferredWebSchema : ot.vscodeRemoteResource,
      authority: `${i}:${o}`,
      path: this._remoteResourcesPath,
      query: a
    });
  }
}
const Cr = new Ma(), xa = "vscode-app";
class Mn {
  static {
    this.FALLBACK_AUTHORITY = xa;
  }
  /**
   * Returns a URI to use in contexts where the browser is responsible
   * for loading (e.g. fetch()) or when used within the DOM.
   *
   * **Note:** use `dom.ts#asCSSUrl` whenever the URL is to be used in CSS context.
   */
  asBrowserUri(e) {
    const t = this.toUri(e);
    return this.uriToBrowserUri(t);
  }
  /**
   * Returns a URI to use in contexts where the browser is responsible
   * for loading (e.g. fetch()) or when used within the DOM.
   *
   * **Note:** use `dom.ts#asCSSUrl` whenever the URL is to be used in CSS context.
   */
  uriToBrowserUri(e) {
    return e.scheme === ot.vscodeRemote ? Cr.rewrite(e) : (
      // ...only ever for `file` resources
      e.scheme === ot.file && // ...and we run in native environments
      (In || // ...or web worker extensions on desktop
      bs === `${ot.vscodeFileResource}://${Mn.FALLBACK_AUTHORITY}`) ? e.with({
        scheme: ot.vscodeFileResource,
        // We need to provide an authority here so that it can serve
        // as origin for network and loading matters in chromium.
        // If the URI is not coming with an authority already, we
        // add our own
        authority: e.authority || Mn.FALLBACK_AUTHORITY,
        query: null,
        fragment: null
      }) : e
    );
  }
  toUri(e, t) {
    if (nt.isUri(e))
      return e;
    if (globalThis._VSCODE_FILE_ROOT) {
      const i = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(i))
        return nt.joinPath(nt.parse(i, !0), e);
      const o = ys(i, e);
      return nt.file(o);
    }
    return nt.parse(t.toUrl(e));
  }
}
const Ba = new Mn();
var Bo;
(function(n) {
  const e = /* @__PURE__ */ new Map([
    ["1", { "Cross-Origin-Opener-Policy": "same-origin" }],
    ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }],
    ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]
  ]);
  n.CoopAndCoep = Object.freeze(e.get("3"));
  const t = "vscode-coi";
  function i(s) {
    let a;
    typeof s == "string" ? a = new URL(s).searchParams : s instanceof URL ? a = s.searchParams : nt.isUri(s) && (a = new URL(s.toString(!0)).searchParams);
    const l = a?.get(t);
    if (l)
      return e.get(l);
  }
  n.getHeadersFromQuery = i;
  function o(s, a, l) {
    if (!globalThis.crossOriginIsolated)
      return;
    const d = a && l ? "3" : l ? "2" : "1";
    s instanceof URLSearchParams ? s.set(t, d) : s[t] = d;
  }
  n.addSearchParam = o;
})(Bo || (Bo = {}));
function Wa(n) {
  return Hi(n, 0);
}
function Hi(n, e) {
  switch (typeof n) {
    case "object":
      return n === null ? Qe(349, e) : Array.isArray(n) ? Na(n, e) : Ha(n, e);
    case "string":
      return kr(n, e);
    case "boolean":
      return Pa(n, e);
    case "number":
      return Qe(n, e);
    case "undefined":
      return Qe(937, e);
    default:
      return Qe(617, e);
  }
}
function Qe(n, e) {
  return (e << 5) - e + n | 0;
}
function Pa(n, e) {
  return Qe(n ? 433 : 863, e);
}
function kr(n, e) {
  e = Qe(149417, e);
  for (let t = 0, i = n.length; t < i; t++)
    e = Qe(n.charCodeAt(t), e);
  return e;
}
function Na(n, e) {
  return e = Qe(104579, e), n.reduce((t, i) => Hi(i, t), e);
}
function Ha(n, e) {
  return e = Qe(181387, e), Object.keys(n).sort().reduce((t, i) => (t = kr(i, t), Hi(n[i], t)), e);
}
function ci(n, e, t = 32) {
  const i = t - e, o = ~((1 << i) - 1);
  return (n << e | (o & n) >>> i) >>> 0;
}
function Wo(n, e = 0, t = n.byteLength, i = 0) {
  for (let o = 0; o < t; o++)
    n[e + o] = i;
}
function Va(n, e, t = "0") {
  for (; n.length < e; )
    n = t + n;
  return n;
}
function jt(n, e = 32) {
  return n instanceof ArrayBuffer ? Array.from(new Uint8Array(n)).map((t) => t.toString(16).padStart(2, "0")).join("") : Va((n >>> 0).toString(16), e / 4);
}
class vr {
  static {
    this._bigBlock32 = new DataView(new ArrayBuffer(320));
  }
  // 80 * 4 = 320
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(
      67
      /* to fit any utf-8 */
    ), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1;
  }
  update(e) {
    const t = e.length;
    if (t === 0)
      return;
    const i = this._buff;
    let o = this._buffLen, s = this._leftoverHighSurrogate, a, l;
    for (s !== 0 ? (a = s, l = -1, s = 0) : (a = e.charCodeAt(0), l = 0); ; ) {
      let d = a;
      if (Rt(a))
        if (l + 1 < t) {
          const u = e.charCodeAt(l + 1);
          on(u) ? (l++, d = Wi(a, u)) : d = 65533;
        } else {
          s = a;
          break;
        }
      else on(a) && (d = 65533);
      if (o = this._push(i, o, d), l++, l < t)
        a = e.charCodeAt(l);
      else
        break;
    }
    this._buffLen = o, this._leftoverHighSurrogate = s;
  }
  _push(e, t, i) {
    return i < 128 ? e[t++] = i : i < 2048 ? (e[t++] = 192 | (i & 1984) >>> 6, e[t++] = 128 | (i & 63) >>> 0) : i < 65536 ? (e[t++] = 224 | (i & 61440) >>> 12, e[t++] = 128 | (i & 4032) >>> 6, e[t++] = 128 | (i & 63) >>> 0) : (e[t++] = 240 | (i & 1835008) >>> 18, e[t++] = 128 | (i & 258048) >>> 12, e[t++] = 128 | (i & 4032) >>> 6, e[t++] = 128 | (i & 63) >>> 0), t >= 64 && (this._step(), t -= 64, this._totalLen += 64, e[0] = e[64], e[1] = e[65], e[2] = e[66]), t;
  }
  digest() {
    return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(
      this._buff,
      this._buffLen,
      65533
      /* SHA1Constant.UNICODE_REPLACEMENT */
    )), this._totalLen += this._buffLen, this._wrapUp()), jt(this._h0) + jt(this._h1) + jt(this._h2) + jt(this._h3) + jt(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, Wo(this._buff, this._buffLen), this._buffLen > 56 && (this._step(), Wo(this._buff));
    const e = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(e / 4294967296), !1), this._buffDV.setUint32(60, e % 4294967296, !1), this._step();
  }
  _step() {
    const e = vr._bigBlock32, t = this._buffDV;
    for (let w = 0; w < 64; w += 4)
      e.setUint32(w, t.getUint32(w, !1), !1);
    for (let w = 64; w < 320; w += 4)
      e.setUint32(w, ci(e.getUint32(w - 12, !1) ^ e.getUint32(w - 32, !1) ^ e.getUint32(w - 56, !1) ^ e.getUint32(w - 64, !1), 1), !1);
    let i = this._h0, o = this._h1, s = this._h2, a = this._h3, l = this._h4, d, u, g;
    for (let w = 0; w < 80; w++)
      w < 20 ? (d = o & s | ~o & a, u = 1518500249) : w < 40 ? (d = o ^ s ^ a, u = 1859775393) : w < 60 ? (d = o & s | o & a | s & a, u = 2400959708) : (d = o ^ s ^ a, u = 3395469782), g = ci(i, 5) + d + l + u + e.getUint32(w * 4, !1) & 4294967295, l = a, a = s, s = ci(o, 30), o = i, i = g;
    this._h0 = this._h0 + i & 4294967295, this._h1 = this._h1 + o & 4294967295, this._h2 = this._h2 + s & 4294967295, this._h3 = this._h3 + a & 4294967295, this._h4 = this._h4 + l & 4294967295;
  }
}
const { getWindow: ae, getWindows: Sr, getWindowsCount: za, getWindowId: Po, getWindowById: vd, onDidRegisterWindow: Ua, onWillUnregisterWindow: Sd, onDidUnregisterWindow: Ld } = (function() {
  const n = /* @__PURE__ */ new Map();
  Ds(se, 1);
  const e = { window: se, disposables: new pt() };
  n.set(se.vscodeWindowId, e);
  const t = new Ke(), i = new Ke(), o = new Ke();
  function s(a, l) {
    return (typeof a == "number" ? n.get(a) : void 0) ?? (l ? e : void 0);
  }
  return {
    onDidRegisterWindow: t.event,
    onWillUnregisterWindow: o.event,
    onDidUnregisterWindow: i.event,
    registerWindow(a) {
      if (n.has(a.vscodeWindowId))
        return dn.None;
      const l = new pt(), d = {
        window: a,
        disposables: l.add(new pt())
      };
      return n.set(a.vscodeWindowId, d), l.add(Ge(() => {
        n.delete(a.vscodeWindowId), i.fire(a);
      })), l.add(H(a, ie.BEFORE_UNLOAD, () => {
        o.fire(a);
      })), t.fire(d), l;
    },
    getWindows() {
      return n.values();
    },
    getWindowsCount() {
      return n.size;
    },
    getWindowId(a) {
      return a.vscodeWindowId;
    },
    hasWindow(a) {
      return n.has(a);
    },
    getWindowById: s,
    getWindow(a) {
      const l = a;
      if (l?.ownerDocument?.defaultView)
        return l.ownerDocument.defaultView.window;
      const d = a;
      return d?.view ? d.view.window : se;
    },
    getDocument(a) {
      return ae(a).document;
    }
  };
})();
function _d(n) {
  for (; n.firstChild; )
    n.firstChild.remove();
}
class Ka {
  constructor(e, t, i, o) {
    this._node = e, this._type = t, this._handler = i, this._options = o || !1, this._node.addEventListener(this._type, this._handler, this._options);
  }
  dispose() {
    this._handler && (this._node.removeEventListener(this._type, this._handler, this._options), this._node = null, this._handler = null);
  }
}
function H(n, e, t, i) {
  return new Ka(n, e, t, i);
}
function Lr(n, e) {
  return function(t) {
    return e(new dr(n, t));
  };
}
function Ga(n) {
  return function(e) {
    return n(new cr(e));
  };
}
const $a = function(e, t, i, o) {
  let s = i;
  return t === "click" || t === "mousedown" || t === "contextmenu" ? s = Lr(ae(e), i) : (t === "keydown" || t === "keypress" || t === "keyup") && (s = Ga(i)), H(e, t, s, o);
}, Dd = function(e, t, i) {
  const o = Lr(ae(e), t);
  return ja(e, o, i);
};
function ja(n, e, t) {
  return H(n, lr && Es.pointerEvents ? ie.POINTER_DOWN : ie.MOUSE_DOWN, e, t);
}
function Td(n, e, t) {
  return Xt(n, e, t);
}
class Ed extends hr {
  constructor(e, t) {
    super(e, t);
  }
}
let qa, xn;
class Ad extends Us {
  /**
   *
   * @param node The optional node from which the target window is determined
   */
  constructor(e) {
    super(), this.defaultTarget = e && ae(e);
  }
  cancelAndSet(e, t, i) {
    return super.cancelAndSet(e, t, i ?? this.defaultTarget);
  }
}
class di {
  constructor(e, t = 0) {
    this._runner = e, this.priority = t, this._canceled = !1;
  }
  dispose() {
    this._canceled = !0;
  }
  execute() {
    if (!this._canceled)
      try {
        this._runner();
      } catch (e) {
        zn(e);
      }
  }
  // Sort by priority (largest to lowest)
  static sort(e, t) {
    return t.priority - e.priority;
  }
}
(function() {
  const n = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = (s) => {
    t.set(s, !1);
    const a = n.get(s) ?? [];
    for (e.set(s, a), n.set(s, []), i.set(s, !0); a.length > 0; )
      a.sort(di.sort), a.shift().execute();
    i.set(s, !1);
  };
  xn = (s, a, l = 0) => {
    const d = Po(s), u = new di(a, l);
    let g = n.get(d);
    return g || (g = [], n.set(d, g)), g.push(u), t.get(d) || (t.set(d, !0), s.requestAnimationFrame(() => o(d))), u;
  }, qa = (s, a, l) => {
    const d = Po(s);
    if (i.get(d)) {
      const u = new di(a, l);
      let g = e.get(d);
      return g || (g = [], e.set(d, g)), g.push(u), u;
    } else
      return xn(s, a, l);
  };
})();
function Vi(n) {
  return ae(n).getComputedStyle(n, null);
}
function Fd(n, e) {
  const t = ae(n), i = t.document;
  if (n !== i.body)
    return new ze(n.clientWidth, n.clientHeight);
  if (lr && t?.visualViewport)
    return new ze(t.visualViewport.width, t.visualViewport.height);
  if (t?.innerWidth && t.innerHeight)
    return new ze(t.innerWidth, t.innerHeight);
  if (i.body && i.body.clientWidth && i.body.clientHeight)
    return new ze(i.body.clientWidth, i.body.clientHeight);
  if (i.documentElement && i.documentElement.clientWidth && i.documentElement.clientHeight)
    return new ze(i.documentElement.clientWidth, i.documentElement.clientHeight);
  throw new Error("Unable to figure out browser width and height");
}
class K {
  // Adapted from WinJS
  // Converts a CSS positioning string for the specified element to pixels.
  static convertToPixels(e, t) {
    return parseFloat(t) || 0;
  }
  static getDimension(e, t, i) {
    const o = Vi(e), s = o ? o.getPropertyValue(t) : "0";
    return K.convertToPixels(e, s);
  }
  static getBorderLeftWidth(e) {
    return K.getDimension(e, "border-left-width", "borderLeftWidth");
  }
  static getBorderRightWidth(e) {
    return K.getDimension(e, "border-right-width", "borderRightWidth");
  }
  static getBorderTopWidth(e) {
    return K.getDimension(e, "border-top-width", "borderTopWidth");
  }
  static getBorderBottomWidth(e) {
    return K.getDimension(e, "border-bottom-width", "borderBottomWidth");
  }
  static getPaddingLeft(e) {
    return K.getDimension(e, "padding-left", "paddingLeft");
  }
  static getPaddingRight(e) {
    return K.getDimension(e, "padding-right", "paddingRight");
  }
  static getPaddingTop(e) {
    return K.getDimension(e, "padding-top", "paddingTop");
  }
  static getPaddingBottom(e) {
    return K.getDimension(e, "padding-bottom", "paddingBottom");
  }
  static getMarginLeft(e) {
    return K.getDimension(e, "margin-left", "marginLeft");
  }
  static getMarginTop(e) {
    return K.getDimension(e, "margin-top", "marginTop");
  }
  static getMarginRight(e) {
    return K.getDimension(e, "margin-right", "marginRight");
  }
  static getMarginBottom(e) {
    return K.getDimension(e, "margin-bottom", "marginBottom");
  }
}
class ze {
  static {
    this.None = new ze(0, 0);
  }
  constructor(e, t) {
    this.width = e, this.height = t;
  }
  with(e = this.width, t = this.height) {
    return e !== this.width || t !== this.height ? new ze(e, t) : this;
  }
  static is(e) {
    return typeof e == "object" && typeof e.height == "number" && typeof e.width == "number";
  }
  static lift(e) {
    return e instanceof ze ? e : new ze(e.width, e.height);
  }
  static equals(e, t) {
    return e === t ? !0 : !e || !t ? !1 : e.width === t.width && e.height === t.height;
  }
}
function Id(n) {
  let e = n.offsetParent, t = n.offsetTop, i = n.offsetLeft;
  for (; (n = n.parentNode) !== null && n !== n.ownerDocument.body && n !== n.ownerDocument.documentElement; ) {
    t -= n.scrollTop;
    const o = _r(n) ? null : Vi(n);
    o && (i -= o.direction !== "rtl" ? n.scrollLeft : -n.scrollLeft), n === e && (i += K.getBorderLeftWidth(n), t += K.getBorderTopWidth(n), t += n.offsetTop, i += n.offsetLeft, e = n.offsetParent);
  }
  return {
    left: i,
    top: t
  };
}
function Od(n, e, t) {
  typeof e == "number" && (n.style.width = `${e}px`), typeof t == "number" && (n.style.height = `${t}px`);
}
function Ya(n) {
  const e = n.getBoundingClientRect(), t = ae(n);
  return {
    left: e.left + t.scrollX,
    top: e.top + t.scrollY,
    width: e.width,
    height: e.height
  };
}
function Rd(n) {
  let e = n, t = 1;
  do {
    const i = Vi(e).zoom;
    i != null && i !== "1" && (t *= i), e = e.parentElement;
  } while (e !== null && e !== e.ownerDocument.documentElement);
  return t;
}
function Md(n) {
  const e = K.getMarginLeft(n) + K.getMarginRight(n);
  return n.offsetWidth + e;
}
function xd(n) {
  const e = K.getBorderLeftWidth(n) + K.getBorderRightWidth(n), t = K.getPaddingLeft(n) + K.getPaddingRight(n);
  return n.offsetWidth - e - t;
}
function Bd(n) {
  const e = K.getBorderTopWidth(n) + K.getBorderBottomWidth(n), t = K.getPaddingTop(n) + K.getPaddingBottom(n);
  return n.offsetHeight - e - t;
}
function Wd(n) {
  const e = K.getMarginTop(n) + K.getMarginBottom(n);
  return n.offsetHeight + e;
}
function Li(n, e) {
  return !!e?.contains(n);
}
function Xa(n, e, t) {
  for (; n && n.nodeType === n.ELEMENT_NODE; ) {
    if (n.classList.contains(e))
      return n;
    if (t) {
      if (typeof t == "string") {
        if (n.classList.contains(t))
          return null;
      } else if (n === t)
        return null;
    }
    n = n.parentNode;
  }
  return null;
}
function Pd(n, e, t) {
  return !!Xa(n, e, t);
}
function _r(n) {
  return n && !!n.host && !!n.mode;
}
function Za(n) {
  return !!zi(n);
}
function zi(n) {
  for (; n.parentNode; ) {
    if (n === n.ownerDocument?.body)
      return null;
    n = n.parentNode;
  }
  return _r(n) ? n : null;
}
function Dr() {
  let n = Tr().activeElement;
  for (; n?.shadowRoot; )
    n = n.shadowRoot.activeElement;
  return n;
}
function Nd(n) {
  return Dr() === n;
}
function Hd(n) {
  return Li(Dr(), n);
}
function Tr() {
  return za() <= 1 ? se.document : Array.from(Sr()).map(({ window: e }) => e.document).find((e) => e.hasFocus()) ?? se.document;
}
function Vd() {
  return Tr().defaultView?.window ?? se;
}
const Ui = /* @__PURE__ */ new Map();
function zd() {
  return new Qa();
}
class Qa {
  constructor() {
    this._currentCssStyle = "", this._styleSheet = void 0;
  }
  setStyle(e) {
    e !== this._currentCssStyle && (this._currentCssStyle = e, this._styleSheet ? this._styleSheet.innerText = e : this._styleSheet = Ki(se.document.head, (t) => t.innerText = e));
  }
  dispose() {
    this._styleSheet && (this._styleSheet.remove(), this._styleSheet = void 0);
  }
}
function Ki(n = se.document.head, e, t) {
  const i = document.createElement("style");
  if (i.type = "text/css", i.media = "screen", e?.(i), n.appendChild(i), t && t.add(Ge(() => i.remove())), n === se.document.head) {
    const o = /* @__PURE__ */ new Set();
    Ui.set(i, o);
    for (const { window: s, disposables: a } of Sr()) {
      if (s === se)
        continue;
      const l = a.add(Ja(i, o, s));
      t?.add(l);
    }
  }
  return i;
}
function Ja(n, e, t) {
  const i = new pt(), o = n.cloneNode(!0);
  t.document.head.appendChild(o), i.add(Ge(() => o.remove()));
  for (const s of Ar(n))
    o.sheet?.insertRule(s.cssText, o.sheet?.cssRules.length);
  return i.add(el.observe(n, i, { childList: !0 })(() => {
    o.textContent = n.textContent;
  })), e.add(o), i.add(Ge(() => e.delete(o))), i;
}
const el = new class {
  constructor() {
    this.mutationObservers = /* @__PURE__ */ new Map();
  }
  observe(n, e, t) {
    let i = this.mutationObservers.get(n);
    i || (i = /* @__PURE__ */ new Map(), this.mutationObservers.set(n, i));
    const o = Wa(t);
    let s = i.get(o);
    if (s)
      s.users += 1;
    else {
      const a = new Ke(), l = new MutationObserver((u) => a.fire(u));
      l.observe(n, t);
      const d = s = {
        users: 1,
        observer: l,
        onDidMutate: a.event
      };
      e.add(Ge(() => {
        d.users -= 1, d.users === 0 && (a.dispose(), l.disconnect(), i?.delete(o), i?.size === 0 && this.mutationObservers.delete(n));
      })), i.set(o, s);
    }
    return s.onDidMutate;
  }
}();
let ui = null;
function Er() {
  return ui || (ui = Ki()), ui;
}
function Ar(n) {
  return n?.sheet?.rules ? n.sheet.rules : n?.sheet?.cssRules ? n.sheet.cssRules : [];
}
function tl(n, e, t = Er()) {
  if (!(!t || !e)) {
    t.sheet?.insertRule(`${n} {${e}}`, 0);
    for (const i of Ui.get(t) ?? [])
      tl(n, e, i);
  }
}
function nl(n, e = Er()) {
  if (!e)
    return;
  const t = Ar(e), i = [];
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    il(s) && s.selectorText.indexOf(n) !== -1 && i.push(o);
  }
  for (let o = i.length - 1; o >= 0; o--)
    e.sheet?.deleteRule(i[o]);
  for (const o of Ui.get(e) ?? [])
    nl(n, o);
}
function il(n) {
  return typeof n.selectorText == "string";
}
function Zt(n) {
  return n instanceof HTMLElement || n instanceof ae(n).HTMLElement;
}
function Ud(n) {
  return n instanceof HTMLAnchorElement || n instanceof ae(n).HTMLAnchorElement;
}
function Kd(n) {
  return n instanceof SVGElement || n instanceof ae(n).SVGElement;
}
function Gd(n) {
  return n instanceof MouseEvent || n instanceof ae(n).MouseEvent;
}
function $d(n) {
  return n instanceof KeyboardEvent || n instanceof ae(n).KeyboardEvent;
}
const ie = {
  // Mouse
  CLICK: "click",
  AUXCLICK: "auxclick",
  DBLCLICK: "dblclick",
  MOUSE_UP: "mouseup",
  MOUSE_DOWN: "mousedown",
  MOUSE_OVER: "mouseover",
  MOUSE_MOVE: "mousemove",
  MOUSE_OUT: "mouseout",
  MOUSE_ENTER: "mouseenter",
  MOUSE_LEAVE: "mouseleave",
  MOUSE_WHEEL: "wheel",
  POINTER_UP: "pointerup",
  POINTER_DOWN: "pointerdown",
  POINTER_MOVE: "pointermove",
  POINTER_LEAVE: "pointerleave",
  CONTEXT_MENU: "contextmenu",
  // Keyboard
  KEY_DOWN: "keydown",
  KEY_UP: "keyup",
  BEFORE_UNLOAD: "beforeunload",
  CHANGE: "change",
  FOCUS: "focus",
  FOCUS_IN: "focusin",
  FOCUS_OUT: "focusout",
  BLUR: "blur",
  INPUT: "input",
  // Drag
  DRAG_START: "dragstart",
  DRAG: "drag",
  DRAG_ENTER: "dragenter",
  DRAG_LEAVE: "dragleave",
  DRAG_OVER: "dragover",
  DROP: "drop",
  DRAG_END: "dragend"
};
function jd(n) {
  const e = n;
  return !!(e && typeof e.preventDefault == "function" && typeof e.stopPropagation == "function");
}
const qd = {
  stop: (n, e) => (n.preventDefault(), e && n.stopPropagation(), n)
};
function Yd(n) {
  const e = [];
  for (let t = 0; n && n.nodeType === n.ELEMENT_NODE; t++)
    e[t] = n.scrollTop, n = n.parentNode;
  return e;
}
function Xd(n, e) {
  for (let t = 0; n && n.nodeType === n.ELEMENT_NODE; t++)
    n.scrollTop !== e[t] && (n.scrollTop = e[t]), n = n.parentNode;
}
class Bn extends dn {
  static hasFocusWithin(e) {
    if (Zt(e)) {
      const t = zi(e), i = t ? t.activeElement : e.ownerDocument.activeElement;
      return Li(i, e);
    } else {
      const t = e;
      return Li(t.document.activeElement, t.document);
    }
  }
  constructor(e) {
    super(), this._onDidFocus = this._register(new Ke()), this.onDidFocus = this._onDidFocus.event, this._onDidBlur = this._register(new Ke()), this.onDidBlur = this._onDidBlur.event;
    let t = Bn.hasFocusWithin(e), i = !1;
    const o = () => {
      i = !1, t || (t = !0, this._onDidFocus.fire());
    }, s = () => {
      t && (i = !0, (Zt(e) ? ae(e) : e).setTimeout(() => {
        i && (i = !1, t = !1, this._onDidBlur.fire());
      }, 0));
    };
    this._refreshStateHandler = () => {
      Bn.hasFocusWithin(e) !== t && (t ? s() : o());
    }, this._register(H(e, ie.FOCUS, o, !0)), this._register(H(e, ie.BLUR, s, !0)), Zt(e) && (this._register(H(e, ie.FOCUS_IN, () => this._refreshStateHandler())), this._register(H(e, ie.FOCUS_OUT, () => this._refreshStateHandler())));
  }
}
function Zd(n) {
  return new Bn(n);
}
function Qd(n, e) {
  return n.after(e), e;
}
function ol(n, ...e) {
  if (n.append(...e), e.length === 1 && typeof e[0] != "string")
    return e[0];
}
function Jd(n, e) {
  return n.insertBefore(e, n.firstChild), e;
}
function eu(n, ...e) {
  n.innerText = "", ol(n, ...e);
}
const rl = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;
var rn;
(function(n) {
  n.HTML = "http://www.w3.org/1999/xhtml", n.SVG = "http://www.w3.org/2000/svg";
})(rn || (rn = {}));
function Fr(n, e, t, ...i) {
  const o = rl.exec(e);
  if (!o)
    throw new Error("Bad use of emmet");
  const s = o[1] || "div";
  let a;
  return n !== rn.HTML ? a = document.createElementNS(n, s) : a = document.createElement(s), o[3] && (a.id = o[3]), o[4] && (a.className = o[4].replace(/\./g, " ").trim()), t && Object.entries(t).forEach(([l, d]) => {
    typeof d > "u" || (/^on\w+$/.test(l) ? a[l] = d : l === "selected" ? d && a.setAttribute(l, "true") : a.setAttribute(l, d));
  }), a.append(...i), a;
}
function sl(n, e, ...t) {
  return Fr(rn.HTML, n, e, ...t);
}
sl.SVG = function(n, e, ...t) {
  return Fr(rn.SVG, n, e, ...t);
};
function tu(n, ...e) {
  n ? al(...e) : ll(...e);
}
function al(...n) {
  for (const e of n)
    e.style.display = "", e.removeAttribute("aria-hidden");
}
function ll(...n) {
  for (const e of n)
    e.style.display = "none", e.setAttribute("aria-hidden", "true");
}
function nu(n, e) {
  const t = n.devicePixelRatio * e;
  return Math.max(1, Math.floor(t)) / n.devicePixelRatio;
}
function iu(n) {
  se.open(n, "_blank", "noopener");
}
function ou(n, e) {
  const t = () => {
    e(), i = xn(n, t);
  };
  let i = xn(n, t);
  return Ge(() => i.dispose());
}
Cr.setPreferredWebSchema(/^https:/.test(se.location.href) ? "https" : "http");
function ru(n) {
  return n ? `url('${Ba.uriToBrowserUri(n).toString(!0).replace(/'/g, "%27")}')` : "url('')";
}
function su(n) {
  return `'${n.replace(/'/g, "%27")}'`;
}
function cl(n, e) {
  if (n !== void 0) {
    const t = n.match(/^\s*var\((.+)\)$/);
    if (t) {
      const i = t[1].split(",", 2);
      return i.length === 2 && (e = cl(i[1].trim(), e)), `var(${i[0]}, ${e})`;
    }
    return n;
  }
  return e;
}
function au(n, e = !1) {
  const t = document.createElement("a");
  return ua("afterSanitizeAttributes", (i) => {
    for (const o of ["href", "src"])
      if (i.hasAttribute(o)) {
        const s = i.getAttribute(o);
        if (o === "href" && s.startsWith("#"))
          continue;
        if (t.href = s, !n.includes(t.protocol.replace(/:$/, ""))) {
          if (e && o === "src" && t.href.startsWith("data:"))
            continue;
          i.removeAttribute(o);
        }
      }
  }), Ge(() => {
    ha("afterSanitizeAttributes");
  });
}
const lu = Object.freeze([
  "a",
  "abbr",
  "b",
  "bdo",
  "blockquote",
  "br",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "figcaption",
  "figure",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "li",
  "mark",
  "ol",
  "p",
  "pre",
  "q",
  "rp",
  "rt",
  "ruby",
  "samp",
  "small",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]);
class Yt extends Ke {
  constructor() {
    super(), this._subscriptions = new pt(), this._keyStatus = {
      altKey: !1,
      shiftKey: !1,
      ctrlKey: !1,
      metaKey: !1
    }, this._subscriptions.add(sr.runAndSubscribe(Ua, ({ window: e, disposables: t }) => this.registerListeners(e, t), { window: se, disposables: this._subscriptions }));
  }
  registerListeners(e, t) {
    t.add(H(e, "keydown", (i) => {
      if (i.defaultPrevented)
        return;
      const o = new cr(i);
      if (!(o.keyCode === 6 && i.repeat)) {
        if (i.altKey && !this._keyStatus.altKey)
          this._keyStatus.lastKeyPressed = "alt";
        else if (i.ctrlKey && !this._keyStatus.ctrlKey)
          this._keyStatus.lastKeyPressed = "ctrl";
        else if (i.metaKey && !this._keyStatus.metaKey)
          this._keyStatus.lastKeyPressed = "meta";
        else if (i.shiftKey && !this._keyStatus.shiftKey)
          this._keyStatus.lastKeyPressed = "shift";
        else if (o.keyCode !== 6)
          this._keyStatus.lastKeyPressed = void 0;
        else
          return;
        this._keyStatus.altKey = i.altKey, this._keyStatus.ctrlKey = i.ctrlKey, this._keyStatus.metaKey = i.metaKey, this._keyStatus.shiftKey = i.shiftKey, this._keyStatus.lastKeyPressed && (this._keyStatus.event = i, this.fire(this._keyStatus));
      }
    }, !0)), t.add(H(e, "keyup", (i) => {
      i.defaultPrevented || (!i.altKey && this._keyStatus.altKey ? this._keyStatus.lastKeyReleased = "alt" : !i.ctrlKey && this._keyStatus.ctrlKey ? this._keyStatus.lastKeyReleased = "ctrl" : !i.metaKey && this._keyStatus.metaKey ? this._keyStatus.lastKeyReleased = "meta" : !i.shiftKey && this._keyStatus.shiftKey ? this._keyStatus.lastKeyReleased = "shift" : this._keyStatus.lastKeyReleased = void 0, this._keyStatus.lastKeyPressed !== this._keyStatus.lastKeyReleased && (this._keyStatus.lastKeyPressed = void 0), this._keyStatus.altKey = i.altKey, this._keyStatus.ctrlKey = i.ctrlKey, this._keyStatus.metaKey = i.metaKey, this._keyStatus.shiftKey = i.shiftKey, this._keyStatus.lastKeyReleased && (this._keyStatus.event = i, this.fire(this._keyStatus)));
    }, !0)), t.add(H(e.document.body, "mousedown", () => {
      this._keyStatus.lastKeyPressed = void 0;
    }, !0)), t.add(H(e.document.body, "mouseup", () => {
      this._keyStatus.lastKeyPressed = void 0;
    }, !0)), t.add(H(e.document.body, "mousemove", (i) => {
      i.buttons && (this._keyStatus.lastKeyPressed = void 0);
    }, !0)), t.add(H(e, "blur", () => {
      this.resetKeyStatus();
    }));
  }
  get keyStatus() {
    return this._keyStatus;
  }
  /**
   * Allows to explicitly reset the key status based on more knowledge (#109062)
   */
  resetKeyStatus() {
    this.doResetKeyStatus(), this.fire(this._keyStatus);
  }
  doResetKeyStatus() {
    this._keyStatus = {
      altKey: !1,
      shiftKey: !1,
      ctrlKey: !1,
      metaKey: !1
    };
  }
  static getInstance() {
    return Yt.instance || (Yt.instance = new Yt()), Yt.instance;
  }
  dispose() {
    super.dispose(), this._subscriptions.dispose();
  }
}
class cu extends dn {
  constructor(e, t) {
    super(), this.element = e, this.callbacks = t, this.counter = 0, this.dragStartTime = 0, this.registerListeners();
  }
  registerListeners() {
    this.callbacks.onDragStart && this._register(H(this.element, ie.DRAG_START, (e) => {
      this.callbacks.onDragStart?.(e);
    })), this.callbacks.onDrag && this._register(H(this.element, ie.DRAG, (e) => {
      this.callbacks.onDrag?.(e);
    })), this._register(H(this.element, ie.DRAG_ENTER, (e) => {
      this.counter++, this.dragStartTime = e.timeStamp, this.callbacks.onDragEnter?.(e);
    })), this._register(H(this.element, ie.DRAG_OVER, (e) => {
      e.preventDefault(), this.callbacks.onDragOver?.(e, e.timeStamp - this.dragStartTime);
    })), this._register(H(this.element, ie.DRAG_LEAVE, (e) => {
      this.counter--, this.counter === 0 && (this.dragStartTime = 0, this.callbacks.onDragLeave?.(e));
    })), this._register(H(this.element, ie.DRAG_END, (e) => {
      this.counter = 0, this.dragStartTime = 0, this.callbacks.onDragEnd?.(e);
    })), this._register(H(this.element, ie.DROP, (e) => {
      this.counter = 0, this.dragStartTime = 0, this.callbacks.onDrop?.(e);
    }));
  }
}
const Ir = /(?<tag>[\w\-]+)?(?:#(?<id>[\w\-]+))?(?<class>(?:\.(?:[\w\-]+))*)(?:@(?<name>(?:[\w\_])+))?/;
function du(n, ...e) {
  let t, i;
  Array.isArray(e[0]) ? (t = {}, i = e[0]) : (t = e[0] || {}, i = e[1]);
  const o = Ir.exec(n);
  if (!o || !o.groups)
    throw new Error("Bad use of h");
  const s = o.groups.tag || "div", a = document.createElement(s);
  o.groups.id && (a.id = o.groups.id);
  const l = [];
  if (o.groups.class)
    for (const u of o.groups.class.split("."))
      u !== "" && l.push(u);
  if (t.className !== void 0)
    for (const u of t.className.split("."))
      u !== "" && l.push(u);
  l.length > 0 && (a.className = l.join(" "));
  const d = {};
  if (o.groups.name && (d[o.groups.name] = a), i)
    for (const u of i)
      Zt(u) ? a.appendChild(u) : typeof u == "string" ? a.append(u) : "root" in u && (Object.assign(d, u), a.appendChild(u.root));
  for (const [u, g] of Object.entries(t))
    if (u !== "className")
      if (u === "style")
        for (const [w, b] of Object.entries(g))
          a.style.setProperty(Wn(w), typeof b == "number" ? b + "px" : "" + b);
      else u === "tabIndex" ? a.tabIndex = g : a.setAttribute(Wn(u), g.toString());
  return d.root = a, d;
}
function uu(n, ...e) {
  let t, i;
  Array.isArray(e[0]) ? (t = {}, i = e[0]) : (t = e[0] || {}, i = e[1]);
  const o = Ir.exec(n);
  if (!o || !o.groups)
    throw new Error("Bad use of h");
  const s = o.groups.tag || "div", a = document.createElementNS("http://www.w3.org/2000/svg", s);
  o.groups.id && (a.id = o.groups.id);
  const l = [];
  if (o.groups.class)
    for (const u of o.groups.class.split("."))
      u !== "" && l.push(u);
  if (t.className !== void 0)
    for (const u of t.className.split("."))
      u !== "" && l.push(u);
  l.length > 0 && (a.className = l.join(" "));
  const d = {};
  if (o.groups.name && (d[o.groups.name] = a), i)
    for (const u of i)
      Zt(u) ? a.appendChild(u) : typeof u == "string" ? a.append(u) : "root" in u && (Object.assign(d, u), a.appendChild(u.root));
  for (const [u, g] of Object.entries(t))
    if (u !== "className")
      if (u === "style")
        for (const [w, b] of Object.entries(g))
          a.style.setProperty(Wn(w), typeof b == "number" ? b + "px" : "" + b);
      else u === "tabIndex" ? a.tabIndex = g : a.setAttribute(Wn(u), g.toString());
  return d.root = a, d;
}
function Wn(n) {
  return n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
class dl {
  constructor() {
    this._hooks = new pt(), this._pointerMoveCallback = null, this._onStopCallback = null;
  }
  dispose() {
    this.stopMonitoring(!1), this._hooks.dispose();
  }
  stopMonitoring(e, t) {
    if (!this.isMonitoring())
      return;
    this._hooks.clear(), this._pointerMoveCallback = null;
    const i = this._onStopCallback;
    this._onStopCallback = null, e && i && i(t);
  }
  isMonitoring() {
    return !!this._pointerMoveCallback;
  }
  startMonitoring(e, t, i, o, s) {
    this.isMonitoring() && this.stopMonitoring(!1), this._pointerMoveCallback = o, this._onStopCallback = s;
    let a = e;
    try {
      e.setPointerCapture(t), this._hooks.add(Ge(() => {
        try {
          e.releasePointerCapture(t);
        } catch {
        }
      }));
    } catch {
      a = ae(e);
    }
    this._hooks.add(H(a, ie.POINTER_MOVE, (l) => {
      if (l.buttons !== i) {
        this.stopMonitoring(!0);
        return;
      }
      l.preventDefault(), this._pointerMoveCallback(l);
    })), this._hooks.add(H(a, ie.POINTER_UP, (l) => this.stopMonitoring(!0)));
  }
}
function hi(n, e) {
  if (!n)
    throw new Error(e ? `Assertion failed (${e})` : "Assertion Failed");
}
function ul(n, e = "Unreachable") {
  throw new Error(e);
}
function hu(n) {
  n || zn(new tn("Soft Assertion Failed"));
}
function fu(n) {
  if (!n()) {
    debugger;
    n(), zn(new tn("Assertion Failed"));
  }
}
function gu(n, e) {
  let t = 0;
  for (; t < n.length - 1; ) {
    const i = n[t], o = n[t + 1];
    if (!e(i, o))
      return !1;
    t++;
  }
  return !0;
}
function rt(n, e) {
  const t = Math.pow(10, e);
  return Math.round(n * t) / t;
}
class I {
  constructor(e, t, i, o = 1) {
    this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, e)) | 0, this.g = Math.min(255, Math.max(0, t)) | 0, this.b = Math.min(255, Math.max(0, i)) | 0, this.a = rt(Math.max(Math.min(1, o), 0), 3);
  }
  static equals(e, t) {
    return e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a;
  }
}
class xe {
  constructor(e, t, i, o) {
    this._hslaBrand = void 0, this.h = Math.max(Math.min(360, e), 0) | 0, this.s = rt(Math.max(Math.min(1, t), 0), 3), this.l = rt(Math.max(Math.min(1, i), 0), 3), this.a = rt(Math.max(Math.min(1, o), 0), 3);
  }
  static equals(e, t) {
    return e.h === t.h && e.s === t.s && e.l === t.l && e.a === t.a;
  }
  /**
   * Converts an RGB color value to HSL. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes r, g, and b are contained in the set [0, 255] and
   * returns h in the set [0, 360], s, and l in the set [0, 1].
   */
  static fromRGBA(e) {
    const t = e.r / 255, i = e.g / 255, o = e.b / 255, s = e.a, a = Math.max(t, i, o), l = Math.min(t, i, o);
    let d = 0, u = 0;
    const g = (l + a) / 2, w = a - l;
    if (w > 0) {
      switch (u = Math.min(g <= 0.5 ? w / (2 * g) : w / (2 - 2 * g), 1), a) {
        case t:
          d = (i - o) / w + (i < o ? 6 : 0);
          break;
        case i:
          d = (o - t) / w + 2;
          break;
        case o:
          d = (t - i) / w + 4;
          break;
      }
      d *= 60, d = Math.round(d);
    }
    return new xe(d, u, g, s);
  }
  static _hue2rgb(e, t, i) {
    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (t - e) * 6 * i : i < 1 / 2 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e;
  }
  /**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes h in the set [0, 360] s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   */
  static toRGBA(e) {
    const t = e.h / 360, { s: i, l: o, a: s } = e;
    let a, l, d;
    if (i === 0)
      a = l = d = o;
    else {
      const u = o < 0.5 ? o * (1 + i) : o + i - o * i, g = 2 * o - u;
      a = xe._hue2rgb(g, u, t + 1 / 3), l = xe._hue2rgb(g, u, t), d = xe._hue2rgb(g, u, t - 1 / 3);
    }
    return new I(Math.round(a * 255), Math.round(l * 255), Math.round(d * 255), s);
  }
}
class Dt {
  constructor(e, t, i, o) {
    this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, e), 0) | 0, this.s = rt(Math.max(Math.min(1, t), 0), 3), this.v = rt(Math.max(Math.min(1, i), 0), 3), this.a = rt(Math.max(Math.min(1, o), 0), 3);
  }
  static equals(e, t) {
    return e.h === t.h && e.s === t.s && e.v === t.v && e.a === t.a;
  }
  // from http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
  static fromRGBA(e) {
    const t = e.r / 255, i = e.g / 255, o = e.b / 255, s = Math.max(t, i, o), a = Math.min(t, i, o), l = s - a, d = s === 0 ? 0 : l / s;
    let u;
    return l === 0 ? u = 0 : s === t ? u = ((i - o) / l % 6 + 6) % 6 : s === i ? u = (o - t) / l + 2 : u = (t - i) / l + 4, new Dt(Math.round(u * 60), d, s, e.a);
  }
  // from http://www.rapidtables.com/convert/color/hsv-to-rgb.htm
  static toRGBA(e) {
    const { h: t, s: i, v: o, a: s } = e, a = o * i, l = a * (1 - Math.abs(t / 60 % 2 - 1)), d = o - a;
    let [u, g, w] = [0, 0, 0];
    return t < 60 ? (u = a, g = l) : t < 120 ? (u = l, g = a) : t < 180 ? (g = a, w = l) : t < 240 ? (g = l, w = a) : t < 300 ? (u = l, w = a) : t <= 360 && (u = a, w = l), u = Math.round((u + d) * 255), g = Math.round((g + d) * 255), w = Math.round((w + d) * 255), new I(u, g, w, s);
  }
}
class m {
  static fromHex(e) {
    return m.Format.CSS.parseHex(e) || m.red;
  }
  static equals(e, t) {
    return !e && !t ? !0 : !e || !t ? !1 : e.equals(t);
  }
  get hsla() {
    return this._hsla ? this._hsla : xe.fromRGBA(this.rgba);
  }
  get hsva() {
    return this._hsva ? this._hsva : Dt.fromRGBA(this.rgba);
  }
  constructor(e) {
    if (e)
      if (e instanceof I)
        this.rgba = e;
      else if (e instanceof xe)
        this._hsla = e, this.rgba = xe.toRGBA(e);
      else if (e instanceof Dt)
        this._hsva = e, this.rgba = Dt.toRGBA(e);
      else
        throw new Error("Invalid color ctor argument");
    else throw new Error("Color needs a value");
  }
  equals(e) {
    return !!e && I.equals(this.rgba, e.rgba) && xe.equals(this.hsla, e.hsla) && Dt.equals(this.hsva, e.hsva);
  }
  /**
   * http://www.w3.org/TR/WCAG20/#relativeluminancedef
   * Returns the number in the set [0, 1]. O => Darkest Black. 1 => Lightest white.
   */
  getRelativeLuminance() {
    const e = m._relativeLuminanceForComponent(this.rgba.r), t = m._relativeLuminanceForComponent(this.rgba.g), i = m._relativeLuminanceForComponent(this.rgba.b), o = 0.2126 * e + 0.7152 * t + 0.0722 * i;
    return rt(o, 4);
  }
  static _relativeLuminanceForComponent(e) {
    const t = e / 255;
    return t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
  }
  /**
   *	http://24ways.org/2010/calculating-color-contrast
   *  Return 'true' if lighter color otherwise 'false'
   */
  isLighter() {
    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
  }
  isLighterThan(e) {
    const t = this.getRelativeLuminance(), i = e.getRelativeLuminance();
    return t > i;
  }
  isDarkerThan(e) {
    const t = this.getRelativeLuminance(), i = e.getRelativeLuminance();
    return t < i;
  }
  lighten(e) {
    return new m(new xe(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * e, this.hsla.a));
  }
  darken(e) {
    return new m(new xe(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * e, this.hsla.a));
  }
  transparent(e) {
    const { r: t, g: i, b: o, a: s } = this.rgba;
    return new m(new I(t, i, o, s * e));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new m(new I(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  makeOpaque(e) {
    if (this.isOpaque() || e.rgba.a !== 1)
      return this;
    const { r: t, g: i, b: o, a: s } = this.rgba;
    return new m(new I(e.rgba.r - s * (e.rgba.r - t), e.rgba.g - s * (e.rgba.g - i), e.rgba.b - s * (e.rgba.b - o), 1));
  }
  toString() {
    return this._toString || (this._toString = m.Format.CSS.format(this)), this._toString;
  }
  static getLighterColor(e, t, i) {
    if (e.isLighterThan(t))
      return e;
    i = i || 0.5;
    const o = e.getRelativeLuminance(), s = t.getRelativeLuminance();
    return i = i * (s - o) / s, e.lighten(i);
  }
  static getDarkerColor(e, t, i) {
    if (e.isDarkerThan(t))
      return e;
    i = i || 0.5;
    const o = e.getRelativeLuminance(), s = t.getRelativeLuminance();
    return i = i * (o - s) / o, e.darken(i);
  }
  static {
    this.white = new m(new I(255, 255, 255, 1));
  }
  static {
    this.black = new m(new I(0, 0, 0, 1));
  }
  static {
    this.red = new m(new I(255, 0, 0, 1));
  }
  static {
    this.blue = new m(new I(0, 0, 255, 1));
  }
  static {
    this.green = new m(new I(0, 255, 0, 1));
  }
  static {
    this.cyan = new m(new I(0, 255, 255, 1));
  }
  static {
    this.lightgrey = new m(new I(211, 211, 211, 1));
  }
  static {
    this.transparent = new m(new I(0, 0, 0, 0));
  }
}
(function(n) {
  (function(e) {
    (function(t) {
      function i(p) {
        return p.rgba.a === 1 ? `rgb(${p.rgba.r}, ${p.rgba.g}, ${p.rgba.b})` : n.Format.CSS.formatRGBA(p);
      }
      t.formatRGB = i;
      function o(p) {
        return `rgba(${p.rgba.r}, ${p.rgba.g}, ${p.rgba.b}, ${+p.rgba.a.toFixed(2)})`;
      }
      t.formatRGBA = o;
      function s(p) {
        return p.hsla.a === 1 ? `hsl(${p.hsla.h}, ${(p.hsla.s * 100).toFixed(2)}%, ${(p.hsla.l * 100).toFixed(2)}%)` : n.Format.CSS.formatHSLA(p);
      }
      t.formatHSL = s;
      function a(p) {
        return `hsla(${p.hsla.h}, ${(p.hsla.s * 100).toFixed(2)}%, ${(p.hsla.l * 100).toFixed(2)}%, ${p.hsla.a.toFixed(2)})`;
      }
      t.formatHSLA = a;
      function l(p) {
        const k = p.toString(16);
        return k.length !== 2 ? "0" + k : k;
      }
      function d(p) {
        return `#${l(p.rgba.r)}${l(p.rgba.g)}${l(p.rgba.b)}`;
      }
      t.formatHex = d;
      function u(p, k = !1) {
        return k && p.rgba.a === 1 ? n.Format.CSS.formatHex(p) : `#${l(p.rgba.r)}${l(p.rgba.g)}${l(p.rgba.b)}${l(Math.round(p.rgba.a * 255))}`;
      }
      t.formatHexA = u;
      function g(p) {
        return p.isOpaque() ? n.Format.CSS.formatHex(p) : n.Format.CSS.formatRGBA(p);
      }
      t.format = g;
      function w(p) {
        const k = p.length;
        if (k === 0 || p.charCodeAt(0) !== 35)
          return null;
        if (k === 7) {
          const v = 16 * b(p.charCodeAt(1)) + b(p.charCodeAt(2)), T = 16 * b(p.charCodeAt(3)) + b(p.charCodeAt(4)), _ = 16 * b(p.charCodeAt(5)) + b(p.charCodeAt(6));
          return new n(new I(v, T, _, 1));
        }
        if (k === 9) {
          const v = 16 * b(p.charCodeAt(1)) + b(p.charCodeAt(2)), T = 16 * b(p.charCodeAt(3)) + b(p.charCodeAt(4)), _ = 16 * b(p.charCodeAt(5)) + b(p.charCodeAt(6)), A = 16 * b(p.charCodeAt(7)) + b(p.charCodeAt(8));
          return new n(new I(v, T, _, A / 255));
        }
        if (k === 4) {
          const v = b(p.charCodeAt(1)), T = b(p.charCodeAt(2)), _ = b(p.charCodeAt(3));
          return new n(new I(16 * v + v, 16 * T + T, 16 * _ + _));
        }
        if (k === 5) {
          const v = b(p.charCodeAt(1)), T = b(p.charCodeAt(2)), _ = b(p.charCodeAt(3)), A = b(p.charCodeAt(4));
          return new n(new I(16 * v + v, 16 * T + T, 16 * _ + _, (16 * A + A) / 255));
        }
        return null;
      }
      t.parseHex = w;
      function b(p) {
        switch (p) {
          case 48:
            return 0;
          case 49:
            return 1;
          case 50:
            return 2;
          case 51:
            return 3;
          case 52:
            return 4;
          case 53:
            return 5;
          case 54:
            return 6;
          case 55:
            return 7;
          case 56:
            return 8;
          case 57:
            return 9;
          case 97:
            return 10;
          case 65:
            return 10;
          case 98:
            return 11;
          case 66:
            return 11;
          case 99:
            return 12;
          case 67:
            return 12;
          case 100:
            return 13;
          case 68:
            return 13;
          case 101:
            return 14;
          case 69:
            return 14;
          case 102:
            return 15;
          case 70:
            return 15;
        }
        return 0;
      }
    })(e.CSS || (e.CSS = {}));
  })(n.Format || (n.Format = {}));
})(m || (m = {}));
class hl {
  constructor() {
    this.data = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    hi(Cs(e)), hi(_t(t)), hi(!this.data.has(e), "There is already an extension with this id"), this.data.set(e, t);
  }
  as(e) {
    return this.data.get(e) || null;
  }
}
const Gi = new hl(), Or = {
  JSONContribution: "base.contributions.json"
};
function fl(n) {
  return n.length > 0 && n.charAt(n.length - 1) === "#" ? n.substring(0, n.length - 1) : n;
}
class gl {
  constructor() {
    this._onDidChangeSchema = new Ke(), this.schemasById = {};
  }
  registerSchema(e, t) {
    this.schemasById[fl(e)] = t, this._onDidChangeSchema.fire(e);
  }
  notifySchemaChanged(e) {
    this._onDidChangeSchema.fire(e);
  }
}
const pl = new gl();
Gi.add(Or.JSONContribution, pl);
function Rr(n) {
  return `--vscode-${n.replace(/\./g, "-")}`;
}
function ml(n) {
  return `var(${Rr(n)})`;
}
function pu(n, e) {
  return `var(${Rr(n)}, ${e})`;
}
function wl(n) {
  return n !== null && typeof n == "object" && "light" in n && "dark" in n;
}
const bl = {
  ColorContribution: "base.contributions.colors"
}, yl = "default";
class Cl {
  constructor() {
    this._onDidChangeSchema = new Ke(), this.onDidChangeSchema = this._onDidChangeSchema.event, this.colorSchema = { type: "object", properties: {} }, this.colorReferenceSchema = { type: "string", enum: [], enumDescriptions: [] }, this.colorsById = {};
  }
  registerColor(e, t, i, o = !1, s) {
    const a = { id: e, description: i, defaults: t, needsTransparency: o, deprecationMessage: s };
    this.colorsById[e] = a;
    const l = { type: "string", format: "color-hex", defaultSnippets: [{ body: "${1:#ff0000}" }] };
    return s && (l.deprecationMessage = s), o && (l.pattern = "^#(?:(?<rgba>[0-9a-fA-f]{3}[0-9a-eA-E])|(?:[0-9a-fA-F]{6}(?:(?![fF]{2})(?:[0-9a-fA-F]{2}))))?$", l.patternErrorMessage = r("transparecyRequired", "This color must be transparent or it will obscure content")), this.colorSchema.properties[e] = {
      description: i,
      oneOf: [
        l,
        { type: "string", const: yl, description: r("useDefault", "Use the default color.") }
      ]
    }, this.colorReferenceSchema.enum.push(e), this.colorReferenceSchema.enumDescriptions.push(i), this._onDidChangeSchema.fire(), e;
  }
  getColors() {
    return Object.keys(this.colorsById).map((e) => this.colorsById[e]);
  }
  resolveDefaultColor(e, t) {
    const i = this.colorsById[e];
    if (i?.defaults) {
      const o = wl(i.defaults) ? i.defaults[t.type] : i.defaults;
      return Re(o, t);
    }
  }
  getColorSchema() {
    return this.colorSchema;
  }
  toString() {
    const e = (t, i) => {
      const o = t.indexOf(".") === -1 ? 0 : 1, s = i.indexOf(".") === -1 ? 0 : 1;
      return o !== s ? o - s : t.localeCompare(i);
    };
    return Object.keys(this.colorsById).sort(e).map((t) => `- \`${t}\`: ${this.colorsById[t].description}`).join(`
`);
  }
}
const Kn = new Cl();
Gi.add(bl.ColorContribution, Kn);
function c(n, e, t, i, o) {
  return Kn.registerColor(n, e, t, i, o);
}
function kl(n, e) {
  switch (n.op) {
    case 0:
      return Re(n.value, e)?.darken(n.factor);
    case 1:
      return Re(n.value, e)?.lighten(n.factor);
    case 2:
      return Re(n.value, e)?.transparent(n.factor);
    case 3: {
      const t = Re(n.background, e);
      return t ? Re(n.value, e)?.makeOpaque(t) : Re(n.value, e);
    }
    case 4:
      for (const t of n.values) {
        const i = Re(t, e);
        if (i)
          return i;
      }
      return;
    case 6:
      return Re(e.defines(n.if) ? n.then : n.else, e);
    case 5: {
      const t = Re(n.value, e);
      if (!t)
        return;
      const i = Re(n.background, e);
      return i ? t.isDarkerThan(i) ? m.getLighterColor(t, i, n.factor).transparent(n.transparency) : m.getDarkerColor(t, i, n.factor).transparent(n.transparency) : t.transparent(n.factor * n.transparency);
    }
    default:
      throw ul();
  }
}
function wt(n, e) {
  return { op: 0, value: n, factor: e };
}
function We(n, e) {
  return { op: 1, value: n, factor: e };
}
function D(n, e) {
  return { op: 2, value: n, factor: e };
}
function No(...n) {
  return { op: 4, values: n };
}
function vl(n, e, t) {
  return { op: 6, if: n, then: e, else: t };
}
function Ho(n, e, t, i) {
  return { op: 5, value: n, background: e, factor: t, transparency: i };
}
function Re(n, e) {
  if (n !== null) {
    if (typeof n == "string")
      return n[0] === "#" ? m.fromHex(n) : e.getColor(n);
    if (n instanceof m)
      return n;
    if (typeof n == "object")
      return kl(n, e);
  }
}
const Mr = "vscode://schemas/workbench-colors", xr = Gi.as(Or.JSONContribution);
xr.registerSchema(Mr, Kn.getColorSchema());
const Vo = new ur(() => xr.notifySchemaChanged(Mr), 200);
Kn.onDidChangeSchema(() => {
  Vo.isScheduled() || Vo.schedule();
});
const M = c("foreground", { dark: "#CCCCCC", light: "#616161", hcDark: "#FFFFFF", hcLight: "#292929" }, r("foreground", "Overall foreground color. This color is only used if not overridden by a component."));
c("disabledForeground", { dark: "#CCCCCC80", light: "#61616180", hcDark: "#A5A5A5", hcLight: "#7F7F7F" }, r("disabledForeground", "Overall foreground for disabled elements. This color is only used if not overridden by a component."));
c("errorForeground", { dark: "#F48771", light: "#A1260D", hcDark: "#F48771", hcLight: "#B5200D" }, r("errorForeground", "Overall foreground color for error messages. This color is only used if not overridden by a component."));
c("descriptionForeground", { light: "#717171", dark: D(M, 0.7), hcDark: D(M, 0.7), hcLight: D(M, 0.7) }, r("descriptionForeground", "Foreground color for description text providing additional information, for example for a label."));
const _i = c("icon.foreground", { dark: "#C5C5C5", light: "#424242", hcDark: "#FFFFFF", hcLight: "#292929" }, r("iconForeground", "The default color for icons in the workbench.")), et = c("focusBorder", { dark: "#007FD4", light: "#0090F1", hcDark: "#F38518", hcLight: "#006BBD" }, r("focusBorder", "Overall border color for focused elements. This color is only used if not overridden by a component.")), x = c("contrastBorder", { light: null, dark: null, hcDark: "#6FC3DF", hcLight: "#0F4A85" }, r("contrastBorder", "An extra border around elements to separate them from others for greater contrast.")), ke = c("contrastActiveBorder", { light: null, dark: null, hcDark: et, hcLight: et }, r("activeContrastBorder", "An extra border around active elements to separate them from others for greater contrast."));
c("selection.background", null, r("selectionBackground", "The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor."));
const mu = c("textLink.foreground", { light: "#006AB1", dark: "#3794FF", hcDark: "#21A6FF", hcLight: "#0F4A85" }, r("textLinkForeground", "Foreground color for links in text."));
c("textLink.activeForeground", { light: "#006AB1", dark: "#3794FF", hcDark: "#21A6FF", hcLight: "#0F4A85" }, r("textLinkActiveForeground", "Foreground color for links in text when clicked on and on mouse hover."));
c("textSeparator.foreground", { light: "#0000002e", dark: "#ffffff2e", hcDark: m.black, hcLight: "#292929" }, r("textSeparatorForeground", "Color for text separators."));
c("textPreformat.foreground", { light: "#A31515", dark: "#D7BA7D", hcDark: "#000000", hcLight: "#FFFFFF" }, r("textPreformatForeground", "Foreground color for preformatted text segments."));
c("textPreformat.background", { light: "#0000001A", dark: "#FFFFFF1A", hcDark: "#FFFFFF", hcLight: "#09345f" }, r("textPreformatBackground", "Background color for preformatted text segments."));
c("textBlockQuote.background", { light: "#f2f2f2", dark: "#222222", hcDark: null, hcLight: "#F2F2F2" }, r("textBlockQuoteBackground", "Background color for block quotes in text."));
c("textBlockQuote.border", { light: "#007acc80", dark: "#007acc80", hcDark: m.white, hcLight: "#292929" }, r("textBlockQuoteBorder", "Border color for block quotes in text."));
c("textCodeBlock.background", { light: "#dcdcdc66", dark: "#0a0a0a66", hcDark: m.black, hcLight: "#F2F2F2" }, r("textCodeBlockBackground", "Background color for code blocks in text."));
c("sash.hoverBorder", et, r("sashActiveBorder", "Border color of active sashes."));
const fi = c("badge.background", { dark: "#4D4D4D", light: "#C4C4C4", hcDark: m.black, hcLight: "#0F4A85" }, r("badgeBackground", "Badge background color. Badges are small information labels, e.g. for search results count.")), wu = c("badge.foreground", { dark: m.white, light: "#333", hcDark: m.white, hcLight: m.white }, r("badgeForeground", "Badge foreground color. Badges are small information labels, e.g. for search results count.")), Sl = c("scrollbar.shadow", { dark: "#000000", light: "#DDDDDD", hcDark: null, hcLight: null }, r("scrollbarShadow", "Scrollbar shadow to indicate that the view is scrolled.")), Ll = c("scrollbarSlider.background", { dark: m.fromHex("#797979").transparent(0.4), light: m.fromHex("#646464").transparent(0.4), hcDark: D(x, 0.6), hcLight: D(x, 0.4) }, r("scrollbarSliderBackground", "Scrollbar slider background color.")), _l = c("scrollbarSlider.hoverBackground", { dark: m.fromHex("#646464").transparent(0.7), light: m.fromHex("#646464").transparent(0.7), hcDark: D(x, 0.8), hcLight: D(x, 0.8) }, r("scrollbarSliderHoverBackground", "Scrollbar slider background color when hovering.")), Dl = c("scrollbarSlider.activeBackground", { dark: m.fromHex("#BFBFBF").transparent(0.4), light: m.fromHex("#000000").transparent(0.6), hcDark: x, hcLight: x }, r("scrollbarSliderActiveBackground", "Scrollbar slider background color when clicked on.")), bu = c("progressBar.background", { dark: m.fromHex("#0E70C0"), light: m.fromHex("#0E70C0"), hcDark: x, hcLight: x }, r("progressBarBackground", "Background color of the progress bar that can show for long running operations.")), Pn = c("editor.background", { light: "#ffffff", dark: "#1E1E1E", hcDark: m.black, hcLight: m.white }, r("editorBackground", "Editor background color.")), yu = c("editor.foreground", { light: "#333333", dark: "#BBBBBB", hcDark: m.white, hcLight: M }, r("editorForeground", "Editor default foreground color."));
c("editorStickyScroll.background", Pn, r("editorStickyScrollBackground", "Background color of sticky scroll in the editor"));
c("editorStickyScrollHover.background", { dark: "#2A2D2E", light: "#F0F0F0", hcDark: null, hcLight: m.fromHex("#0F4A85").transparent(0.1) }, r("editorStickyScrollHoverBackground", "Background color of sticky scroll on hover in the editor"));
c("editorStickyScroll.border", { dark: null, light: null, hcDark: x, hcLight: x }, r("editorStickyScrollBorder", "Border color of sticky scroll in the editor"));
c("editorStickyScroll.shadow", Sl, r("editorStickyScrollShadow", " Shadow color of sticky scroll in the editor"));
const Be = c("editorWidget.background", { dark: "#252526", light: "#F3F3F3", hcDark: "#0C141F", hcLight: m.white }, r("editorWidgetBackground", "Background color of editor widgets, such as find/replace.")), $i = c("editorWidget.foreground", M, r("editorWidgetForeground", "Foreground color of editor widgets, such as find/replace.")), Tl = c("editorWidget.border", { dark: "#454545", light: "#C8C8C8", hcDark: x, hcLight: x }, r("editorWidgetBorder", "Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget."));
c("editorWidget.resizeBorder", null, r("editorWidgetResizeBorder", "Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget."));
c("editorError.background", null, r("editorError.background", "Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations."), !0);
const Br = c("editorError.foreground", { dark: "#F14C4C", light: "#E51400", hcDark: "#F48771", hcLight: "#B5200D" }, r("editorError.foreground", "Foreground color of error squigglies in the editor.")), Cu = c("editorError.border", { dark: null, light: null, hcDark: m.fromHex("#E47777").transparent(0.8), hcLight: "#B5200D" }, r("errorBorder", "If set, color of double underlines for errors in the editor.")), ku = c("editorWarning.background", null, r("editorWarning.background", "Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations."), !0), Nn = c("editorWarning.foreground", { dark: "#CCA700", light: "#BF8803", hcDark: "#FFD370", hcLight: "#895503" }, r("editorWarning.foreground", "Foreground color of warning squigglies in the editor.")), zo = c("editorWarning.border", { dark: null, light: null, hcDark: m.fromHex("#FFCC00").transparent(0.8), hcLight: m.fromHex("#FFCC00").transparent(0.8) }, r("warningBorder", "If set, color of double underlines for warnings in the editor."));
c("editorInfo.background", null, r("editorInfo.background", "Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations."), !0);
const Hn = c("editorInfo.foreground", { dark: "#3794FF", light: "#1a85ff", hcDark: "#3794FF", hcLight: "#1a85ff" }, r("editorInfo.foreground", "Foreground color of info squigglies in the editor.")), Uo = c("editorInfo.border", { dark: null, light: null, hcDark: m.fromHex("#3794FF").transparent(0.8), hcLight: "#292929" }, r("infoBorder", "If set, color of double underlines for infos in the editor.")), vu = c("editorHint.foreground", { dark: m.fromHex("#eeeeee").transparent(0.7), light: "#6c6c6c", hcDark: null, hcLight: null }, r("editorHint.foreground", "Foreground color of hint squigglies in the editor."));
c("editorHint.border", { dark: null, light: null, hcDark: m.fromHex("#eeeeee").transparent(0.8), hcLight: "#292929" }, r("hintBorder", "If set, color of double underlines for hints in the editor."));
const Su = c("editorLink.activeForeground", { dark: "#4E94CE", light: m.blue, hcDark: m.cyan, hcLight: "#292929" }, r("activeLinkForeground", "Color of active links.")), Tt = c("editor.selectionBackground", { light: "#ADD6FF", dark: "#264F78", hcDark: "#f3f518", hcLight: "#0F4A85" }, r("editorSelectionBackground", "Color of the editor selection.")), Lu = c("editor.selectionForeground", { light: null, dark: null, hcDark: "#000000", hcLight: m.white }, r("editorSelectionForeground", "Color of the selected text for high contrast.")), _u = c("editor.inactiveSelectionBackground", { light: D(Tt, 0.5), dark: D(Tt, 0.5), hcDark: D(Tt, 0.7), hcLight: D(Tt, 0.5) }, r("editorInactiveSelection", "Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations."), !0), Du = c("editor.selectionHighlightBackground", { light: Ho(Tt, Pn, 0.3, 0.6), dark: Ho(Tt, Pn, 0.3, 0.6), hcDark: null, hcLight: null }, r("editorSelectionHighlight", "Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations."), !0);
c("editor.selectionHighlightBorder", { light: null, dark: null, hcDark: ke, hcLight: ke }, r("editorSelectionHighlightBorder", "Border color for regions with the same content as the selection."));
c("editor.findMatchBackground", { light: "#A8AC94", dark: "#515C6A", hcDark: null, hcLight: null }, r("editorFindMatch", "Color of the current search match."));
const Tu = c("editor.findMatchForeground", null, r("editorFindMatchForeground", "Text color of the current search match.")), Et = c("editor.findMatchHighlightBackground", { light: "#EA5C0055", dark: "#EA5C0055", hcDark: null, hcLight: null }, r("findMatchHighlight", "Color of the other search matches. The color must not be opaque so as not to hide underlying decorations."), !0), Eu = c("editor.findMatchHighlightForeground", null, r("findMatchHighlightForeground", "Foreground color of the other search matches."), !0);
c("editor.findRangeHighlightBackground", { dark: "#3a3d4166", light: "#b4b4b44d", hcDark: null, hcLight: null }, r("findRangeHighlight", "Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), !0);
c("editor.findMatchBorder", { light: null, dark: null, hcDark: ke, hcLight: ke }, r("editorFindMatchBorder", "Border color of the current search match."));
const At = c("editor.findMatchHighlightBorder", { light: null, dark: null, hcDark: ke, hcLight: ke }, r("findMatchHighlightBorder", "Border color of the other search matches.")), Au = c("editor.findRangeHighlightBorder", { dark: null, light: null, hcDark: D(ke, 0.4), hcLight: D(ke, 0.4) }, r("findRangeHighlightBorder", "Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), !0);
c("editor.hoverHighlightBackground", { light: "#ADD6FF26", dark: "#264f7840", hcDark: "#ADD6FF26", hcLight: null }, r("hoverHighlight", "Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations."), !0);
const Ko = c("editorHoverWidget.background", Be, r("hoverBackground", "Background color of the editor hover."));
c("editorHoverWidget.foreground", $i, r("hoverForeground", "Foreground color of the editor hover."));
const Fu = c("editorHoverWidget.border", Tl, r("hoverBorder", "Border color of the editor hover."));
c("editorHoverWidget.statusBarBackground", { dark: We(Ko, 0.2), light: wt(Ko, 0.05), hcDark: Be, hcLight: Be }, r("statusBarBackground", "Background color of the editor hover status bar."));
const Wr = c("editorInlayHint.foreground", { dark: "#969696", light: "#969696", hcDark: m.white, hcLight: m.black }, r("editorInlayHintForeground", "Foreground color of inline hints")), Pr = c("editorInlayHint.background", { dark: D(fi, 0.1), light: D(fi, 0.1), hcDark: D(m.white, 0.1), hcLight: D(fi, 0.1) }, r("editorInlayHintBackground", "Background color of inline hints")), Iu = c("editorInlayHint.typeForeground", Wr, r("editorInlayHintForegroundTypes", "Foreground color of inline hints for types")), Ou = c("editorInlayHint.typeBackground", Pr, r("editorInlayHintBackgroundTypes", "Background color of inline hints for types")), Ru = c("editorInlayHint.parameterForeground", Wr, r("editorInlayHintForegroundParameter", "Foreground color of inline hints for parameters")), Mu = c("editorInlayHint.parameterBackground", Pr, r("editorInlayHintBackgroundParameter", "Background color of inline hints for parameters")), El = c("editorLightBulb.foreground", { dark: "#FFCC00", light: "#DDB100", hcDark: "#FFCC00", hcLight: "#007ACC" }, r("editorLightBulbForeground", "The color used for the lightbulb actions icon."));
c("editorLightBulbAutoFix.foreground", { dark: "#75BEFF", light: "#007ACC", hcDark: "#75BEFF", hcLight: "#007ACC" }, r("editorLightBulbAutoFixForeground", "The color used for the lightbulb auto fix actions icon."));
c("editorLightBulbAi.foreground", El, r("editorLightBulbAiForeground", "The color used for the lightbulb AI icon."));
c("editor.snippetTabstopHighlightBackground", { dark: new m(new I(124, 124, 124, 0.3)), light: new m(new I(10, 50, 100, 0.2)), hcDark: new m(new I(124, 124, 124, 0.3)), hcLight: new m(new I(10, 50, 100, 0.2)) }, r("snippetTabstopHighlightBackground", "Highlight background color of a snippet tabstop."));
c("editor.snippetTabstopHighlightBorder", null, r("snippetTabstopHighlightBorder", "Highlight border color of a snippet tabstop."));
c("editor.snippetFinalTabstopHighlightBackground", null, r("snippetFinalTabstopHighlightBackground", "Highlight background color of the final tabstop of a snippet."));
c("editor.snippetFinalTabstopHighlightBorder", { dark: "#525252", light: new m(new I(10, 50, 100, 0.5)), hcDark: "#525252", hcLight: "#292929" }, r("snippetFinalTabstopHighlightBorder", "Highlight border color of the final tabstop of a snippet."));
const Go = new m(new I(155, 185, 85, 0.2)), $o = new m(new I(255, 0, 0, 0.2)), xu = c("diffEditor.insertedTextBackground", { dark: "#9ccc2c33", light: "#9ccc2c40", hcDark: null, hcLight: null }, r("diffEditorInserted", "Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations."), !0), Bu = c("diffEditor.removedTextBackground", { dark: "#ff000033", light: "#ff000033", hcDark: null, hcLight: null }, r("diffEditorRemoved", "Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations."), !0);
c("diffEditor.insertedLineBackground", { dark: Go, light: Go, hcDark: null, hcLight: null }, r("diffEditorInsertedLines", "Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations."), !0);
c("diffEditor.removedLineBackground", { dark: $o, light: $o, hcDark: null, hcLight: null }, r("diffEditorRemovedLines", "Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations."), !0);
c("diffEditorGutter.insertedLineBackground", null, r("diffEditorInsertedLineGutter", "Background color for the margin where lines got inserted."));
c("diffEditorGutter.removedLineBackground", null, r("diffEditorRemovedLineGutter", "Background color for the margin where lines got removed."));
const Wu = c("diffEditorOverview.insertedForeground", null, r("diffEditorOverviewInserted", "Diff overview ruler foreground for inserted content.")), Pu = c("diffEditorOverview.removedForeground", null, r("diffEditorOverviewRemoved", "Diff overview ruler foreground for removed content."));
c("diffEditor.insertedTextBorder", { dark: null, light: null, hcDark: "#33ff2eff", hcLight: "#374E06" }, r("diffEditorInsertedOutline", "Outline color for the text that got inserted."));
c("diffEditor.removedTextBorder", { dark: null, light: null, hcDark: "#FF008F", hcLight: "#AD0707" }, r("diffEditorRemovedOutline", "Outline color for text that got removed."));
c("diffEditor.border", { dark: null, light: null, hcDark: x, hcLight: x }, r("diffEditorBorder", "Border color between the two text editors."));
c("diffEditor.diagonalFill", { dark: "#cccccc33", light: "#22222233", hcDark: null, hcLight: null }, r("diffDiagonalFill", "Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views."));
c("diffEditor.unchangedRegionBackground", "sideBar.background", r("diffEditor.unchangedRegionBackground", "The background color of unchanged blocks in the diff editor."));
c("diffEditor.unchangedRegionForeground", "foreground", r("diffEditor.unchangedRegionForeground", "The foreground color of unchanged blocks in the diff editor."));
c("diffEditor.unchangedCodeBackground", { dark: "#74747429", light: "#b8b8b829", hcDark: null, hcLight: null }, r("diffEditor.unchangedCodeBackground", "The background color of unchanged code in the diff editor."));
const Al = c("widget.shadow", { dark: D(m.black, 0.36), light: D(m.black, 0.16), hcDark: null, hcLight: null }, r("widgetShadow", "Shadow color of widgets such as find/replace inside the editor.")), Nu = c("widget.border", { dark: null, light: null, hcDark: x, hcLight: x }, r("widgetBorder", "Border color of widgets such as find/replace inside the editor.")), jo = c("toolbar.hoverBackground", { dark: "#5a5d5e50", light: "#b8b8b850", hcDark: null, hcLight: null }, r("toolbarHoverBackground", "Toolbar background when hovering over actions using the mouse"));
c("toolbar.hoverOutline", { dark: null, light: null, hcDark: ke, hcLight: ke }, r("toolbarHoverOutline", "Toolbar outline when hovering over actions using the mouse"));
c("toolbar.activeBackground", { dark: We(jo, 0.1), light: wt(jo, 0.1), hcDark: null, hcLight: null }, r("toolbarActiveBackground", "Toolbar background when holding the mouse over actions"));
const Hu = c("breadcrumb.foreground", D(M, 0.8), r("breadcrumbsFocusForeground", "Color of focused breadcrumb items.")), Vu = c("breadcrumb.background", Pn, r("breadcrumbsBackground", "Background color of breadcrumb items.")), zu = c("breadcrumb.focusForeground", { light: wt(M, 0.2), dark: We(M, 0.1), hcDark: We(M, 0.1), hcLight: We(M, 0.1) }, r("breadcrumbsFocusForeground", "Color of focused breadcrumb items.")), Uu = c("breadcrumb.activeSelectionForeground", { light: wt(M, 0.2), dark: We(M, 0.1), hcDark: We(M, 0.1), hcLight: We(M, 0.1) }, r("breadcrumbsSelectedForeground", "Color of selected breadcrumb items."));
c("breadcrumbPicker.background", Be, r("breadcrumbsSelectedBackground", "Background color of breadcrumb item picker."));
const Nr = 0.5, qo = m.fromHex("#40C8AE").transparent(Nr), Yo = m.fromHex("#40A6FF").transparent(Nr), Xo = m.fromHex("#606060").transparent(0.4), ji = 0.4, Mt = 1, Di = c("merge.currentHeaderBackground", { dark: qo, light: qo, hcDark: null, hcLight: null }, r("mergeCurrentHeaderBackground", "Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), !0);
c("merge.currentContentBackground", D(Di, ji), r("mergeCurrentContentBackground", "Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), !0);
const Ti = c("merge.incomingHeaderBackground", { dark: Yo, light: Yo, hcDark: null, hcLight: null }, r("mergeIncomingHeaderBackground", "Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), !0);
c("merge.incomingContentBackground", D(Ti, ji), r("mergeIncomingContentBackground", "Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), !0);
const Ei = c("merge.commonHeaderBackground", { dark: Xo, light: Xo, hcDark: null, hcLight: null }, r("mergeCommonHeaderBackground", "Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), !0);
c("merge.commonContentBackground", D(Ei, ji), r("mergeCommonContentBackground", "Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), !0);
const xt = c("merge.border", { dark: null, light: null, hcDark: "#C3DF6F", hcLight: "#007ACC" }, r("mergeBorder", "Border color on headers and the splitter in inline merge-conflicts."));
c("editorOverviewRuler.currentContentForeground", { dark: D(Di, Mt), light: D(Di, Mt), hcDark: xt, hcLight: xt }, r("overviewRulerCurrentContentForeground", "Current overview ruler foreground for inline merge-conflicts."));
c("editorOverviewRuler.incomingContentForeground", { dark: D(Ti, Mt), light: D(Ti, Mt), hcDark: xt, hcLight: xt }, r("overviewRulerIncomingContentForeground", "Incoming overview ruler foreground for inline merge-conflicts."));
c("editorOverviewRuler.commonContentForeground", { dark: D(Ei, Mt), light: D(Ei, Mt), hcDark: xt, hcLight: xt }, r("overviewRulerCommonContentForeground", "Common ancestor overview ruler foreground for inline merge-conflicts."));
const Ku = c("editorOverviewRuler.findMatchForeground", { dark: "#d186167e", light: "#d186167e", hcDark: "#AB5A00", hcLight: "#AB5A00" }, r("overviewRulerFindMatchForeground", "Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations."), !0), Gu = c("editorOverviewRuler.selectionHighlightForeground", "#A0A0A0CC", r("overviewRulerSelectionHighlightForeground", "Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations."), !0), $u = c("problemsErrorIcon.foreground", Br, r("problemsErrorIconForeground", "The color used for the problems error icon.")), ju = c("problemsWarningIcon.foreground", Nn, r("problemsWarningIconForeground", "The color used for the problems warning icon.")), qu = c("problemsInfoIcon.foreground", Hn, r("problemsInfoIconForeground", "The color used for the problems info icon.")), Fl = c("minimap.findMatchHighlight", { light: "#d18616", dark: "#d18616", hcDark: "#AB5A00", hcLight: "#0F4A85" }, r("minimapFindMatchHighlight", "Minimap marker color for find matches."), !0), Yu = c("minimap.selectionOccurrenceHighlight", { light: "#c9c9c9", dark: "#676767", hcDark: "#ffffff", hcLight: "#0F4A85" }, r("minimapSelectionOccurrenceHighlight", "Minimap marker color for repeating editor selections."), !0), Xu = c("minimap.selectionHighlight", { light: "#ADD6FF", dark: "#264F78", hcDark: "#ffffff", hcLight: "#0F4A85" }, r("minimapSelectionHighlight", "Minimap marker color for the editor selection."), !0), Zu = c("minimap.infoHighlight", { dark: Hn, light: Hn, hcDark: Uo, hcLight: Uo }, r("minimapInfo", "Minimap marker color for infos.")), Qu = c("minimap.warningHighlight", { dark: Nn, light: Nn, hcDark: zo, hcLight: zo }, r("overviewRuleWarning", "Minimap marker color for warnings.")), Ju = c("minimap.errorHighlight", { dark: new m(new I(255, 18, 18, 0.7)), light: new m(new I(255, 18, 18, 0.7)), hcDark: new m(new I(255, 50, 50, 1)), hcLight: "#B5200D" }, r("minimapError", "Minimap marker color for errors.")), eh = c("minimap.background", null, r("minimapBackground", "Minimap background color.")), th = c("minimap.foregroundOpacity", m.fromHex("#000f"), r("minimapForegroundOpacity", 'Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.'));
c("minimapSlider.background", D(Ll, 0.5), r("minimapSliderBackground", "Minimap slider background color."));
c("minimapSlider.hoverBackground", D(_l, 0.5), r("minimapSliderHoverBackground", "Minimap slider background color when hovering."));
c("minimapSlider.activeBackground", D(Dl, 0.5), r("minimapSliderActiveBackground", "Minimap slider background color when clicked on."));
c("charts.foreground", M, r("chartsForeground", "The foreground color used in charts."));
c("charts.lines", D(M, 0.5), r("chartsLines", "The color used for horizontal lines in charts."));
c("charts.red", Br, r("chartsRed", "The red color used in chart visualizations."));
c("charts.blue", Hn, r("chartsBlue", "The blue color used in chart visualizations."));
c("charts.yellow", Nn, r("chartsYellow", "The yellow color used in chart visualizations."));
c("charts.orange", Fl, r("chartsOrange", "The orange color used in chart visualizations."));
c("charts.green", { dark: "#89D185", light: "#388A34", hcDark: "#89D185", hcLight: "#374e06" }, r("chartsGreen", "The green color used in chart visualizations."));
c("charts.purple", { dark: "#B180D7", light: "#652D90", hcDark: "#B180D7", hcLight: "#652D90" }, r("chartsPurple", "The purple color used in chart visualizations."));
const nh = c("input.background", { dark: "#3C3C3C", light: m.white, hcDark: m.black, hcLight: m.white }, r("inputBoxBackground", "Input box background.")), ih = c("input.foreground", M, r("inputBoxForeground", "Input box foreground.")), oh = c("input.border", { dark: null, light: null, hcDark: x, hcLight: x }, r("inputBoxBorder", "Input box border.")), Il = c("inputOption.activeBorder", { dark: "#007ACC", light: "#007ACC", hcDark: x, hcLight: x }, r("inputBoxActiveOptionBorder", "Border color of activated options in input fields.")), Ol = c("inputOption.hoverBackground", { dark: "#5a5d5e80", light: "#b8b8b850", hcDark: null, hcLight: null }, r("inputOption.hoverBackground", "Background color of activated options in input fields.")), Rl = c("inputOption.activeBackground", { dark: D(et, 0.4), light: D(et, 0.2), hcDark: m.transparent, hcLight: m.transparent }, r("inputOption.activeBackground", "Background hover color of options in input fields.")), Ml = c("inputOption.activeForeground", { dark: m.white, light: m.black, hcDark: M, hcLight: M }, r("inputOption.activeForeground", "Foreground color of activated options in input fields."));
c("input.placeholderForeground", { light: D(M, 0.5), dark: D(M, 0.5), hcDark: D(M, 0.7), hcLight: D(M, 0.7) }, r("inputPlaceholderForeground", "Input box foreground color for placeholder text."));
const rh = c("inputValidation.infoBackground", { dark: "#063B49", light: "#D6ECF2", hcDark: m.black, hcLight: m.white }, r("inputValidationInfoBackground", "Input validation background color for information severity.")), sh = c("inputValidation.infoForeground", { dark: null, light: null, hcDark: null, hcLight: M }, r("inputValidationInfoForeground", "Input validation foreground color for information severity.")), ah = c("inputValidation.infoBorder", { dark: "#007acc", light: "#007acc", hcDark: x, hcLight: x }, r("inputValidationInfoBorder", "Input validation border color for information severity.")), lh = c("inputValidation.warningBackground", { dark: "#352A05", light: "#F6F5D2", hcDark: m.black, hcLight: m.white }, r("inputValidationWarningBackground", "Input validation background color for warning severity.")), ch = c("inputValidation.warningForeground", { dark: null, light: null, hcDark: null, hcLight: M }, r("inputValidationWarningForeground", "Input validation foreground color for warning severity.")), dh = c("inputValidation.warningBorder", { dark: "#B89500", light: "#B89500", hcDark: x, hcLight: x }, r("inputValidationWarningBorder", "Input validation border color for warning severity.")), uh = c("inputValidation.errorBackground", { dark: "#5A1D1D", light: "#F2DEDE", hcDark: m.black, hcLight: m.white }, r("inputValidationErrorBackground", "Input validation background color for error severity.")), hh = c("inputValidation.errorForeground", { dark: null, light: null, hcDark: null, hcLight: M }, r("inputValidationErrorForeground", "Input validation foreground color for error severity.")), fh = c("inputValidation.errorBorder", { dark: "#BE1100", light: "#BE1100", hcDark: x, hcLight: x }, r("inputValidationErrorBorder", "Input validation border color for error severity.")), qi = c("dropdown.background", { dark: "#3C3C3C", light: m.white, hcDark: m.black, hcLight: m.white }, r("dropdownBackground", "Dropdown background.")), gh = c("dropdown.listBackground", { dark: null, light: null, hcDark: m.black, hcLight: m.white }, r("dropdownListBackground", "Dropdown list background.")), Hr = c("dropdown.foreground", { dark: "#F0F0F0", light: M, hcDark: m.white, hcLight: M }, r("dropdownForeground", "Dropdown foreground.")), xl = c("dropdown.border", { dark: qi, light: "#CECECE", hcDark: x, hcLight: x }, r("dropdownBorder", "Dropdown border.")), Bl = c("button.foreground", m.white, r("buttonForeground", "Button foreground color.")), ph = c("button.separator", D(Bl, 0.4), r("buttonSeparator", "Button separator color.")), kn = c("button.background", { dark: "#0E639C", light: "#007ACC", hcDark: null, hcLight: "#0F4A85" }, r("buttonBackground", "Button background color.")), mh = c("button.hoverBackground", { dark: We(kn, 0.2), light: wt(kn, 0.2), hcDark: kn, hcLight: kn }, r("buttonHoverBackground", "Button background color when hovering.")), wh = c("button.border", x, r("buttonBorder", "Button border color.")), bh = c("button.secondaryForeground", { dark: m.white, light: m.white, hcDark: m.white, hcLight: M }, r("buttonSecondaryForeground", "Secondary button foreground color.")), Zo = c("button.secondaryBackground", { dark: "#3A3D41", light: "#5F6A79", hcDark: null, hcLight: m.white }, r("buttonSecondaryBackground", "Secondary button background color.")), yh = c("button.secondaryHoverBackground", { dark: We(Zo, 0.2), light: wt(Zo, 0.2), hcDark: null, hcLight: null }, r("buttonSecondaryHoverBackground", "Secondary button background color when hovering.")), vn = c("radio.activeForeground", Ml, r("radioActiveForeground", "Foreground color of active radio option.")), Ch = c("radio.activeBackground", Rl, r("radioBackground", "Background color of active radio option.")), kh = c("radio.activeBorder", Il, r("radioActiveBorder", "Border color of the active radio option.")), vh = c("radio.inactiveForeground", null, r("radioInactiveForeground", "Foreground color of inactive radio option.")), Sh = c("radio.inactiveBackground", null, r("radioInactiveBackground", "Background color of inactive radio option.")), Lh = c("radio.inactiveBorder", { light: D(vn, 0.2), dark: D(vn, 0.2), hcDark: D(vn, 0.4), hcLight: D(vn, 0.2) }, r("radioInactiveBorder", "Border color of the inactive radio option.")), _h = c("radio.inactiveHoverBackground", Ol, r("radioHoverBackground", "Background color of inactive active radio option when hovering.")), Dh = c("checkbox.background", qi, r("checkbox.background", "Background color of checkbox widget."));
c("checkbox.selectBackground", Be, r("checkbox.select.background", "Background color of checkbox widget when the element it's in is selected."));
const Th = c("checkbox.foreground", Hr, r("checkbox.foreground", "Foreground color of checkbox widget.")), Eh = c("checkbox.border", xl, r("checkbox.border", "Border color of checkbox widget."));
c("checkbox.selectBorder", _i, r("checkbox.select.border", "Border color of checkbox widget when the element it's in is selected."));
const Ah = c("keybindingLabel.background", { dark: new m(new I(128, 128, 128, 0.17)), light: new m(new I(221, 221, 221, 0.4)), hcDark: m.transparent, hcLight: m.transparent }, r("keybindingLabelBackground", "Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.")), Fh = c("keybindingLabel.foreground", { dark: m.fromHex("#CCCCCC"), light: m.fromHex("#555555"), hcDark: m.white, hcLight: M }, r("keybindingLabelForeground", "Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.")), Ih = c("keybindingLabel.border", { dark: new m(new I(51, 51, 51, 0.6)), light: new m(new I(204, 204, 204, 0.4)), hcDark: new m(new I(111, 195, 223)), hcLight: x }, r("keybindingLabelBorder", "Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.")), Oh = c("keybindingLabel.bottomBorder", { dark: new m(new I(68, 68, 68, 0.6)), light: new m(new I(187, 187, 187, 0.4)), hcDark: new m(new I(111, 195, 223)), hcLight: M }, r("keybindingLabelBottomBorder", "Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.")), Rh = c("list.focusBackground", null, r("listFocusBackground", "List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")), Mh = c("list.focusForeground", null, r("listFocusForeground", "List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")), xh = c("list.focusOutline", { dark: et, light: et, hcDark: ke, hcLight: ke }, r("listFocusOutline", "List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")), Bh = c("list.focusAndSelectionOutline", null, r("listFocusAndSelectionOutline", "List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.")), sn = c("list.activeSelectionBackground", { dark: "#04395E", light: "#0060C0", hcDark: null, hcLight: m.fromHex("#0F4A85").transparent(0.1) }, r("listActiveSelectionBackground", "List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")), Yi = c("list.activeSelectionForeground", { dark: m.white, light: m.white, hcDark: null, hcLight: null }, r("listActiveSelectionForeground", "List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")), Wl = c("list.activeSelectionIconForeground", null, r("listActiveSelectionIconForeground", "List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")), Wh = c("list.inactiveSelectionBackground", { dark: "#37373D", light: "#E4E6F1", hcDark: null, hcLight: m.fromHex("#0F4A85").transparent(0.1) }, r("listInactiveSelectionBackground", "List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.")), Ph = c("list.inactiveSelectionForeground", null, r("listInactiveSelectionForeground", "List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.")), Nh = c("list.inactiveSelectionIconForeground", null, r("listInactiveSelectionIconForeground", "List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.")), Hh = c("list.inactiveFocusBackground", null, r("listInactiveFocusBackground", "List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.")), Vh = c("list.inactiveFocusOutline", null, r("listInactiveFocusOutline", "List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.")), zh = c("list.hoverBackground", { dark: "#2A2D2E", light: "#F0F0F0", hcDark: m.white.transparent(0.1), hcLight: m.fromHex("#0F4A85").transparent(0.1) }, r("listHoverBackground", "List/Tree background when hovering over items using the mouse.")), Uh = c("list.hoverForeground", null, r("listHoverForeground", "List/Tree foreground when hovering over items using the mouse.")), Kh = c("list.dropBackground", { dark: "#062F4A", light: "#D6EBFF", hcDark: null, hcLight: null }, r("listDropBackground", "List/Tree drag and drop background when moving items over other items when using the mouse.")), Gh = c("list.dropBetweenBackground", { dark: _i, light: _i, hcDark: null, hcLight: null }, r("listDropBetweenBackground", "List/Tree drag and drop border color when moving items between items when using the mouse.")), Sn = c("list.highlightForeground", { dark: "#2AAAFF", light: "#0066BF", hcDark: et, hcLight: et }, r("highlight", "List/Tree foreground color of the match highlights when searching inside the list/tree.")), $h = c("list.focusHighlightForeground", { dark: Sn, light: vl(sn, Sn, "#BBE7FF"), hcDark: Sn, hcLight: Sn }, r("listFocusHighlightForeground", "List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree."));
c("list.invalidItemForeground", { dark: "#B89500", light: "#B89500", hcDark: "#B89500", hcLight: "#B5200D" }, r("invalidItemForeground", "List/Tree foreground color for invalid items, for example an unresolved root in explorer."));
c("list.errorForeground", { dark: "#F88070", light: "#B01011", hcDark: null, hcLight: null }, r("listErrorForeground", "Foreground color of list items containing errors."));
c("list.warningForeground", { dark: "#CCA700", light: "#855F00", hcDark: null, hcLight: null }, r("listWarningForeground", "Foreground color of list items containing warnings."));
const jh = c("listFilterWidget.background", { light: wt(Be, 0), dark: We(Be, 0), hcDark: Be, hcLight: Be }, r("listFilterWidgetBackground", "Background color of the type filter widget in lists and trees.")), qh = c("listFilterWidget.outline", { dark: m.transparent, light: m.transparent, hcDark: "#f38518", hcLight: "#007ACC" }, r("listFilterWidgetOutline", "Outline color of the type filter widget in lists and trees.")), Yh = c("listFilterWidget.noMatchesOutline", { dark: "#BE1100", light: "#BE1100", hcDark: x, hcLight: x }, r("listFilterWidgetNoMatchesOutline", "Outline color of the type filter widget in lists and trees, when there are no matches.")), Xh = c("listFilterWidget.shadow", Al, r("listFilterWidgetShadow", "Shadow color of the type filter widget in lists and trees."));
c("list.filterMatchBackground", { dark: Et, light: Et, hcDark: null, hcLight: null }, r("listFilterMatchHighlight", "Background color of the filtered match."));
c("list.filterMatchBorder", { dark: At, light: At, hcDark: x, hcLight: ke }, r("listFilterMatchHighlightBorder", "Border color of the filtered match."));
c("list.deemphasizedForeground", { dark: "#8C8C8C", light: "#8E8E90", hcDark: "#A7A8A9", hcLight: "#666666" }, r("listDeemphasizedForeground", "List/Tree foreground color for items that are deemphasized."));
const Pl = c("tree.indentGuidesStroke", { dark: "#585858", light: "#a9a9a9", hcDark: "#a9a9a9", hcLight: "#a5a5a5" }, r("treeIndentGuidesStroke", "Tree stroke color for the indentation guides.")), Zh = c("tree.inactiveIndentGuidesStroke", D(Pl, 0.4), r("treeInactiveIndentGuidesStroke", "Tree stroke color for the indentation guides that are not active.")), Qh = c("tree.tableColumnsBorder", { dark: "#CCCCCC20", light: "#61616120", hcDark: null, hcLight: null }, r("tableColumnsBorder", "Table border color between columns.")), Jh = c("tree.tableOddRowsBackground", { dark: D(M, 0.04), light: D(M, 0.04), hcDark: null, hcLight: null }, r("tableOddRowsBackgroundColor", "Background color for odd table rows."));
c("editorActionList.background", Be, r("editorActionListBackground", "Action List background color."));
c("editorActionList.foreground", $i, r("editorActionListForeground", "Action List foreground color."));
c("editorActionList.focusForeground", Yi, r("editorActionListFocusForeground", "Action List foreground color for the focused item."));
c("editorActionList.focusBackground", sn, r("editorActionListFocusBackground", "Action List background color for the focused item."));
const e0 = c("menu.border", { dark: null, light: null, hcDark: x, hcLight: x }, r("menuBorder", "Border color of menus.")), t0 = c("menu.foreground", Hr, r("menuForeground", "Foreground color of menu items.")), n0 = c("menu.background", qi, r("menuBackground", "Background color of menu items.")), i0 = c("menu.selectionForeground", Yi, r("menuSelectionForeground", "Foreground color of the selected menu item in menus.")), o0 = c("menu.selectionBackground", sn, r("menuSelectionBackground", "Background color of the selected menu item in menus.")), r0 = c("menu.selectionBorder", { dark: null, light: null, hcDark: ke, hcLight: ke }, r("menuSelectionBorder", "Border color of the selected menu item in menus.")), s0 = c("menu.separatorBackground", { dark: "#606060", light: "#D4D4D4", hcDark: x, hcLight: x }, r("menuSeparatorBackground", "Color of a separator menu item in menus.")), a0 = c("quickInput.background", Be, r("pickerBackground", "Quick picker background color. The quick picker widget is the container for pickers like the command palette.")), l0 = c("quickInput.foreground", $i, r("pickerForeground", "Quick picker foreground color. The quick picker widget is the container for pickers like the command palette.")), c0 = c("quickInputTitle.background", { dark: new m(new I(255, 255, 255, 0.105)), light: new m(new I(0, 0, 0, 0.06)), hcDark: "#000000", hcLight: m.white }, r("pickerTitleBackground", "Quick picker title background color. The quick picker widget is the container for pickers like the command palette.")), d0 = c("pickerGroup.foreground", { dark: "#3794FF", light: "#0066BF", hcDark: m.white, hcLight: "#0F4A85" }, r("pickerGroupForeground", "Quick picker color for grouping labels.")), u0 = c("pickerGroup.border", { dark: "#3F3F46", light: "#CCCEDB", hcDark: m.white, hcLight: "#0F4A85" }, r("pickerGroupBorder", "Quick picker color for grouping borders.")), Qo = c("quickInput.list.focusBackground", null, "", void 0, r("quickInput.list.focusBackground deprecation", "Please use quickInputList.focusBackground instead")), h0 = c("quickInputList.focusForeground", Yi, r("quickInput.listFocusForeground", "Quick picker foreground color for the focused item.")), f0 = c("quickInputList.focusIconForeground", Wl, r("quickInput.listFocusIconForeground", "Quick picker icon foreground color for the focused item.")), g0 = c("quickInputList.focusBackground", { dark: No(Qo, sn), light: No(Qo, sn), hcDark: null, hcLight: null }, r("quickInput.listFocusBackground", "Quick picker background color for the focused item."));
c("search.resultsInfoForeground", { light: M, dark: D(M, 0.65), hcDark: M, hcLight: M }, r("search.resultsInfoForeground", "Color of the text in the search viewlet's completion message."));
c("searchEditor.findMatchBackground", { light: D(Et, 0.66), dark: D(Et, 0.66), hcDark: Et, hcLight: Et }, r("searchEditor.queryMatch", "Color of the Search Editor query matches."));
c("searchEditor.findMatchBorder", { light: D(At, 0.66), dark: D(At, 0.66), hcDark: At, hcLight: At }, r("searchEditor.editorFindMatchBorder", "Border color of the Search Editor query matches."));
class Xi {
  constructor(e, t) {
    this.x = e, this.y = t, this._pageCoordinatesBrand = void 0;
  }
  toClientCoordinates(e) {
    return new Nl(this.x - e.scrollX, this.y - e.scrollY);
  }
}
class Nl {
  constructor(e, t) {
    this.clientX = e, this.clientY = t, this._clientCoordinatesBrand = void 0;
  }
  toPageCoordinates(e) {
    return new Xi(this.clientX + e.scrollX, this.clientY + e.scrollY);
  }
}
class Hl {
  constructor(e, t, i, o) {
    this.x = e, this.y = t, this.width = i, this.height = o, this._editorPagePositionBrand = void 0;
  }
}
class Vl {
  constructor(e, t) {
    this.x = e, this.y = t, this._positionRelativeToEditorBrand = void 0;
  }
}
function zl(n) {
  const e = Ya(n);
  return new Hl(e.left, e.top, e.width, e.height);
}
function Ul(n, e, t) {
  const i = e.width / n.offsetWidth, o = e.height / n.offsetHeight, s = (t.x - e.x) / i, a = (t.y - e.y) / o;
  return new Vl(s, a);
}
class Zi extends dr {
  constructor(e, t, i) {
    super(ae(i), e), this._editorMouseEventBrand = void 0, this.isFromPointerCapture = t, this.pos = new Xi(this.posx, this.posy), this.editorPos = zl(i), this.relativePos = Ul(i, this.editorPos, this.pos);
  }
}
class p0 {
  constructor(e) {
    this._editorViewDomNode = e;
  }
  _create(e) {
    return new Zi(e, !1, this._editorViewDomNode);
  }
  onContextMenu(e, t) {
    return H(e, "contextmenu", (i) => {
      t(this._create(i));
    });
  }
  onMouseUp(e, t) {
    return H(e, "mouseup", (i) => {
      t(this._create(i));
    });
  }
  onMouseDown(e, t) {
    return H(e, ie.MOUSE_DOWN, (i) => {
      t(this._create(i));
    });
  }
  onPointerDown(e, t) {
    return H(e, ie.POINTER_DOWN, (i) => {
      t(this._create(i), i.pointerId);
    });
  }
  onMouseLeave(e, t) {
    return H(e, ie.MOUSE_LEAVE, (i) => {
      t(this._create(i));
    });
  }
  onMouseMove(e, t) {
    return H(e, "mousemove", (i) => t(this._create(i)));
  }
}
class m0 {
  constructor(e) {
    this._editorViewDomNode = e;
  }
  _create(e) {
    return new Zi(e, !1, this._editorViewDomNode);
  }
  onPointerUp(e, t) {
    return H(e, "pointerup", (i) => {
      t(this._create(i));
    });
  }
  onPointerDown(e, t) {
    return H(e, ie.POINTER_DOWN, (i) => {
      t(this._create(i), i.pointerId);
    });
  }
  onPointerLeave(e, t) {
    return H(e, ie.POINTER_LEAVE, (i) => {
      t(this._create(i));
    });
  }
  onPointerMove(e, t) {
    return H(e, "pointermove", (i) => t(this._create(i)));
  }
}
class w0 extends dn {
  constructor(e) {
    super(), this._editorViewDomNode = e, this._globalPointerMoveMonitor = this._register(new dl()), this._keydownListener = null;
  }
  startMonitoring(e, t, i, o, s) {
    this._keydownListener = $a(e.ownerDocument, "keydown", (a) => {
      a.toKeyCodeChord().isModifierKey() || this._globalPointerMoveMonitor.stopMonitoring(!0, a.browserEvent);
    }, !0), this._globalPointerMoveMonitor.startMonitoring(e, t, i, (a) => {
      o(new Zi(a, !0, this._editorViewDomNode));
    }, (a) => {
      this._keydownListener.dispose(), s(a);
    });
  }
  stopMonitoring() {
    this._globalPointerMoveMonitor.stopMonitoring(!0);
  }
}
class Vr {
  static {
    this._idPool = 0;
  }
  constructor(e) {
    this._editor = e, this._instanceId = ++Vr._idPool, this._counter = 0, this._rules = /* @__PURE__ */ new Map(), this._garbageCollectionScheduler = new ur(() => this.garbageCollect(), 1e3);
  }
  createClassNameRef(e) {
    const t = this.getOrCreateRule(e);
    return t.increaseRefCount(), {
      className: t.className,
      dispose: () => {
        t.decreaseRefCount(), this._garbageCollectionScheduler.schedule();
      }
    };
  }
  getOrCreateRule(e) {
    const t = this.computeUniqueKey(e);
    let i = this._rules.get(t);
    if (!i) {
      const o = this._counter++;
      i = new Kl(t, `dyn-rule-${this._instanceId}-${o}`, Za(this._editor.getContainerDomNode()) ? this._editor.getContainerDomNode() : void 0, e), this._rules.set(t, i);
    }
    return i;
  }
  computeUniqueKey(e) {
    return JSON.stringify(e);
  }
  garbageCollect() {
    for (const e of this._rules.values())
      e.hasReferences() || (this._rules.delete(e.key), e.dispose());
  }
}
class Kl {
  constructor(e, t, i, o) {
    this.key = e, this.className = t, this.properties = o, this._referenceCount = 0, this._styleElementDisposables = new pt(), this._styleElement = Ki(i, void 0, this._styleElementDisposables), this._styleElement.textContent = this.getCssText(this.className, this.properties);
  }
  getCssText(e, t) {
    let i = `.${e} {`;
    for (const o in t) {
      const s = t[o];
      let a;
      typeof s == "object" ? a = ml(s.id) : a = s;
      const l = Gl(o);
      i += `
	${l}: ${a};`;
    }
    return i += `
}`, i;
  }
  dispose() {
    this._styleElementDisposables.dispose(), this._styleElement = void 0;
  }
  increaseRefCount() {
    this._referenceCount++;
  }
  decreaseRefCount() {
    this._referenceCount--;
  }
  hasReferences() {
    return this._referenceCount > 0;
  }
}
function Gl(n) {
  return n.replace(/(^[A-Z])/, ([e]) => e.toLowerCase()).replace(/([A-Z])/g, ([e]) => `-${e.toLowerCase()}`);
}
class $l extends dn {
  constructor() {
    super(), this._shouldRender = !0;
  }
  shouldRender() {
    return this._shouldRender;
  }
  forceShouldRender() {
    this._shouldRender = !0;
  }
  setShouldRender() {
    this._shouldRender = !0;
  }
  onDidRender() {
    this._shouldRender = !1;
  }
  // --- begin event handlers
  onCompositionStart(e) {
    return !1;
  }
  onCompositionEnd(e) {
    return !1;
  }
  onConfigurationChanged(e) {
    return !1;
  }
  onCursorStateChanged(e) {
    return !1;
  }
  onDecorationsChanged(e) {
    return !1;
  }
  onFlushed(e) {
    return !1;
  }
  onFocusChanged(e) {
    return !1;
  }
  onLanguageConfigurationChanged(e) {
    return !1;
  }
  onLineMappingChanged(e) {
    return !1;
  }
  onLinesChanged(e) {
    return !1;
  }
  onLinesDeleted(e) {
    return !1;
  }
  onLinesInserted(e) {
    return !1;
  }
  onRevealRangeRequest(e) {
    return !1;
  }
  onScrollChanged(e) {
    return !1;
  }
  onThemeChanged(e) {
    return !1;
  }
  onTokensChanged(e) {
    return !1;
  }
  onTokensColorsChanged(e) {
    return !1;
  }
  onZonesChanged(e) {
    return !1;
  }
  // --- end event handlers
  handleEvents(e) {
    let t = !1;
    for (let i = 0, o = e.length; i < o; i++) {
      const s = e[i];
      switch (s.type) {
        case 0:
          this.onCompositionStart(s) && (t = !0);
          break;
        case 1:
          this.onCompositionEnd(s) && (t = !0);
          break;
        case 2:
          this.onConfigurationChanged(s) && (t = !0);
          break;
        case 3:
          this.onCursorStateChanged(s) && (t = !0);
          break;
        case 4:
          this.onDecorationsChanged(s) && (t = !0);
          break;
        case 5:
          this.onFlushed(s) && (t = !0);
          break;
        case 6:
          this.onFocusChanged(s) && (t = !0);
          break;
        case 7:
          this.onLanguageConfigurationChanged(s) && (t = !0);
          break;
        case 8:
          this.onLineMappingChanged(s) && (t = !0);
          break;
        case 9:
          this.onLinesChanged(s) && (t = !0);
          break;
        case 10:
          this.onLinesDeleted(s) && (t = !0);
          break;
        case 11:
          this.onLinesInserted(s) && (t = !0);
          break;
        case 12:
          this.onRevealRangeRequest(s) && (t = !0);
          break;
        case 13:
          this.onScrollChanged(s) && (t = !0);
          break;
        case 15:
          this.onTokensChanged(s) && (t = !0);
          break;
        case 14:
          this.onThemeChanged(s) && (t = !0);
          break;
        case 16:
          this.onTokensColorsChanged(s) && (t = !0);
          break;
        case 17:
          this.onZonesChanged(s) && (t = !0);
          break;
        default:
          console.info("View received unknown event: "), console.info(s);
      }
    }
    t && (this._shouldRender = !0);
  }
}
class b0 extends $l {
  constructor(e) {
    super(), this._context = e, this._context.addEventHandler(this);
  }
  dispose() {
    this._context.removeEventHandler(this), super.dispose();
  }
}
class zr {
  static write(e, t) {
    e.setAttribute("data-mprt", String(t));
  }
  static read(e) {
    const t = e.getAttribute("data-mprt");
    return t === null ? 0 : parseInt(t, 10);
  }
  static collect(e, t) {
    const i = [];
    let o = 0;
    for (; e && e !== e.ownerDocument.body && e !== t; )
      e.nodeType === e.ELEMENT_NODE && (i[o++] = this.read(e)), e = e.parentElement;
    const s = new Uint8Array(o);
    for (let a = 0; a < o; a++)
      s[a] = i[o - a - 1];
    return s;
  }
}
class jl {
  constructor(e) {
    this.domNode = e, this._maxWidth = "", this._width = "", this._height = "", this._top = "", this._left = "", this._bottom = "", this._right = "", this._paddingLeft = "", this._fontFamily = "", this._fontWeight = "", this._fontSize = "", this._fontStyle = "", this._fontFeatureSettings = "", this._fontVariationSettings = "", this._textDecoration = "", this._lineHeight = "", this._letterSpacing = "", this._className = "", this._display = "", this._position = "", this._visibility = "", this._color = "", this._backgroundColor = "", this._layerHint = !1, this._contain = "none", this._boxShadow = "";
  }
  setMaxWidth(e) {
    const t = Ie(e);
    this._maxWidth !== t && (this._maxWidth = t, this.domNode.style.maxWidth = this._maxWidth);
  }
  setWidth(e) {
    const t = Ie(e);
    this._width !== t && (this._width = t, this.domNode.style.width = this._width);
  }
  setHeight(e) {
    const t = Ie(e);
    this._height !== t && (this._height = t, this.domNode.style.height = this._height);
  }
  setTop(e) {
    const t = Ie(e);
    this._top !== t && (this._top = t, this.domNode.style.top = this._top);
  }
  setLeft(e) {
    const t = Ie(e);
    this._left !== t && (this._left = t, this.domNode.style.left = this._left);
  }
  setBottom(e) {
    const t = Ie(e);
    this._bottom !== t && (this._bottom = t, this.domNode.style.bottom = this._bottom);
  }
  setRight(e) {
    const t = Ie(e);
    this._right !== t && (this._right = t, this.domNode.style.right = this._right);
  }
  setPaddingLeft(e) {
    const t = Ie(e);
    this._paddingLeft !== t && (this._paddingLeft = t, this.domNode.style.paddingLeft = this._paddingLeft);
  }
  setFontFamily(e) {
    this._fontFamily !== e && (this._fontFamily = e, this.domNode.style.fontFamily = this._fontFamily);
  }
  setFontWeight(e) {
    this._fontWeight !== e && (this._fontWeight = e, this.domNode.style.fontWeight = this._fontWeight);
  }
  setFontSize(e) {
    const t = Ie(e);
    this._fontSize !== t && (this._fontSize = t, this.domNode.style.fontSize = this._fontSize);
  }
  setFontStyle(e) {
    this._fontStyle !== e && (this._fontStyle = e, this.domNode.style.fontStyle = this._fontStyle);
  }
  setFontFeatureSettings(e) {
    this._fontFeatureSettings !== e && (this._fontFeatureSettings = e, this.domNode.style.fontFeatureSettings = this._fontFeatureSettings);
  }
  setFontVariationSettings(e) {
    this._fontVariationSettings !== e && (this._fontVariationSettings = e, this.domNode.style.fontVariationSettings = this._fontVariationSettings);
  }
  setTextDecoration(e) {
    this._textDecoration !== e && (this._textDecoration = e, this.domNode.style.textDecoration = this._textDecoration);
  }
  setLineHeight(e) {
    const t = Ie(e);
    this._lineHeight !== t && (this._lineHeight = t, this.domNode.style.lineHeight = this._lineHeight);
  }
  setLetterSpacing(e) {
    const t = Ie(e);
    this._letterSpacing !== t && (this._letterSpacing = t, this.domNode.style.letterSpacing = this._letterSpacing);
  }
  setClassName(e) {
    this._className !== e && (this._className = e, this.domNode.className = this._className);
  }
  toggleClassName(e, t) {
    this.domNode.classList.toggle(e, t), this._className = this.domNode.className;
  }
  setDisplay(e) {
    this._display !== e && (this._display = e, this.domNode.style.display = this._display);
  }
  setPosition(e) {
    this._position !== e && (this._position = e, this.domNode.style.position = this._position);
  }
  setVisibility(e) {
    this._visibility !== e && (this._visibility = e, this.domNode.style.visibility = this._visibility);
  }
  setColor(e) {
    this._color !== e && (this._color = e, this.domNode.style.color = this._color);
  }
  setBackgroundColor(e) {
    this._backgroundColor !== e && (this._backgroundColor = e, this.domNode.style.backgroundColor = this._backgroundColor);
  }
  setLayerHinting(e) {
    this._layerHint !== e && (this._layerHint = e, this.domNode.style.transform = this._layerHint ? "translate3d(0px, 0px, 0px)" : "");
  }
  setBoxShadow(e) {
    this._boxShadow !== e && (this._boxShadow = e, this.domNode.style.boxShadow = e);
  }
  setContain(e) {
    this._contain !== e && (this._contain = e, this.domNode.style.contain = this._contain);
  }
  setAttribute(e, t) {
    this.domNode.setAttribute(e, t);
  }
  removeAttribute(e) {
    this.domNode.removeAttribute(e);
  }
  appendChild(e) {
    this.domNode.appendChild(e.domNode);
  }
  removeChild(e) {
    this.domNode.removeChild(e.domNode);
  }
}
function Ie(n) {
  return typeof n == "number" ? `${n}px` : n;
}
function ql(n) {
  return new jl(n);
}
class Yl {
  constructor(e, t) {
    this._restrictedRenderingContextBrand = void 0, this._viewLayout = e, this.viewportData = t, this.scrollWidth = this._viewLayout.getScrollWidth(), this.scrollHeight = this._viewLayout.getScrollHeight(), this.visibleRange = this.viewportData.visibleRange, this.bigNumbersDelta = this.viewportData.bigNumbersDelta;
    const i = this._viewLayout.getCurrentViewport();
    this.scrollTop = i.top, this.scrollLeft = i.left, this.viewportWidth = i.width, this.viewportHeight = i.height;
  }
  getScrolledTopFromAbsoluteTop(e) {
    return e - this.scrollTop;
  }
  getVerticalOffsetForLineNumber(e, t) {
    return this._viewLayout.getVerticalOffsetForLineNumber(e, t);
  }
  getVerticalOffsetAfterLineNumber(e, t) {
    return this._viewLayout.getVerticalOffsetAfterLineNumber(e, t);
  }
  getDecorationsInViewport() {
    return this.viewportData.getDecorationsInViewport();
  }
}
class y0 extends Yl {
  constructor(e, t, i) {
    super(e, t), this._renderingContextBrand = void 0, this._viewLines = i;
  }
  linesVisibleRangesForRange(e, t) {
    return this._viewLines.linesVisibleRangesForRange(e, t);
  }
  visibleRangeForPosition(e) {
    return this._viewLines.visibleRangeForPosition(e);
  }
}
class C0 {
  constructor(e, t, i, o) {
    this.outsideRenderedLine = e, this.lineNumber = t, this.ranges = i, this.continuesOnNextLine = o;
  }
}
class Ur {
  static from(e) {
    const t = new Array(e.length);
    for (let i = 0, o = e.length; i < o; i++) {
      const s = e[i];
      t[i] = new Ur(s.left, s.width);
    }
    return t;
  }
  constructor(e, t) {
    this._horizontalRangeBrand = void 0, this.left = Math.round(e), this.width = Math.round(t);
  }
  toString() {
    return `[${this.left},${this.width}]`;
  }
}
class mt {
  constructor(e, t) {
    this._floatHorizontalRangeBrand = void 0, this.left = e, this.width = t;
  }
  toString() {
    return `[${this.left},${this.width}]`;
  }
  static compare(e, t) {
    return e.left - t.left;
  }
}
class k0 {
  constructor(e, t) {
    this.outsideRenderedLine = e, this.originalLeft = t, this.left = Math.round(this.originalLeft);
  }
}
class Jo {
  constructor(e, t) {
    this.outsideRenderedLine = e, this.ranges = t;
  }
}
class En {
  static _createRange() {
    return this._handyReadyRange || (this._handyReadyRange = document.createRange()), this._handyReadyRange;
  }
  static _detachRange(e, t) {
    e.selectNodeContents(t);
  }
  static _readClientRects(e, t, i, o, s) {
    const a = this._createRange();
    try {
      return a.setStart(e, t), a.setEnd(i, o), a.getClientRects();
    } catch {
      return null;
    } finally {
      this._detachRange(a, s);
    }
  }
  static _mergeAdjacentRanges(e) {
    if (e.length === 1)
      return e;
    e.sort(mt.compare);
    const t = [];
    let i = 0, o = e[0];
    for (let s = 1, a = e.length; s < a; s++) {
      const l = e[s];
      o.left + o.width + 0.9 >= l.left ? o.width = Math.max(o.width, l.left + l.width - o.left) : (t[i++] = o, o = l);
    }
    return t[i++] = o, t;
  }
  static _createHorizontalRangesFromClientRects(e, t, i) {
    if (!e || e.length === 0)
      return null;
    const o = [];
    for (let s = 0, a = e.length; s < a; s++) {
      const l = e[s];
      o[s] = new mt(Math.max(0, (l.left - t) / i), l.width / i);
    }
    return this._mergeAdjacentRanges(o);
  }
  static readHorizontalRanges(e, t, i, o, s, a) {
    const d = e.children.length - 1;
    if (0 > d)
      return null;
    if (t = Math.min(d, Math.max(0, t)), o = Math.min(d, Math.max(0, o)), t === o && i === s && i === 0 && !e.children[t].firstChild) {
      const b = e.children[t].getClientRects();
      return a.markDidDomLayout(), this._createHorizontalRangesFromClientRects(b, a.clientRectDeltaLeft, a.clientRectScale);
    }
    t !== o && o > 0 && s === 0 && (o--, s = 1073741824);
    let u = e.children[t].firstChild, g = e.children[o].firstChild;
    if ((!u || !g) && (!u && i === 0 && t > 0 && (u = e.children[t - 1].firstChild, i = 1073741824), !g && s === 0 && o > 0 && (g = e.children[o - 1].firstChild, s = 1073741824)), !u || !g)
      return null;
    i = Math.min(u.textContent.length, Math.max(0, i)), s = Math.min(g.textContent.length, Math.max(0, s));
    const w = this._readClientRects(u, i, g, s, a.endNode);
    return a.markDidDomLayout(), this._createHorizontalRangesFromClientRects(w, a.clientRectDeltaLeft, a.clientRectScale);
  }
}
class Ue {
  constructor(e, t, i, o) {
    this.startColumn = e, this.endColumn = t, this.className = i, this.type = o, this._lineDecorationBrand = void 0;
  }
  static _equals(e, t) {
    return e.startColumn === t.startColumn && e.endColumn === t.endColumn && e.className === t.className && e.type === t.type;
  }
  static equalsArr(e, t) {
    const i = e.length, o = t.length;
    if (i !== o)
      return !1;
    for (let s = 0; s < i; s++)
      if (!Ue._equals(e[s], t[s]))
        return !1;
    return !0;
  }
  static extractWrapped(e, t, i) {
    if (e.length === 0)
      return e;
    const o = t + 1, s = i + 1, a = i - t, l = [];
    let d = 0;
    for (const u of e)
      u.endColumn <= o || u.startColumn >= s || (l[d++] = new Ue(Math.max(1, u.startColumn - o + 1), Math.min(a + 1, u.endColumn - o + 1), u.className, u.type));
    return l;
  }
  static filter(e, t, i, o) {
    if (e.length === 0)
      return [];
    const s = [];
    let a = 0;
    for (let l = 0, d = e.length; l < d; l++) {
      const u = e[l], g = u.range;
      if (g.endLineNumber < t || g.startLineNumber > t || g.isEmpty() && (u.type === 0 || u.type === 3))
        continue;
      const w = g.startLineNumber === t ? g.startColumn : i, b = g.endLineNumber === t ? g.endColumn : o;
      s[a++] = new Ue(w, b, u.inlineClassName, u.type);
    }
    return s;
  }
  static _typeCompare(e, t) {
    const i = [2, 0, 1, 3];
    return i[e] - i[t];
  }
  static compare(e, t) {
    if (e.startColumn !== t.startColumn)
      return e.startColumn - t.startColumn;
    if (e.endColumn !== t.endColumn)
      return e.endColumn - t.endColumn;
    const i = Ue._typeCompare(e.type, t.type);
    return i !== 0 ? i : e.className !== t.className ? e.className < t.className ? -1 : 1 : 0;
  }
}
class er {
  constructor(e, t, i, o) {
    this.startOffset = e, this.endOffset = t, this.className = i, this.metadata = o;
  }
}
class Vn {
  constructor() {
    this.stopOffsets = [], this.classNames = [], this.metadata = [], this.count = 0;
  }
  static _metadata(e) {
    let t = 0;
    for (let i = 0, o = e.length; i < o; i++)
      t |= e[i];
    return t;
  }
  consumeLowerThan(e, t, i) {
    for (; this.count > 0 && this.stopOffsets[0] < e; ) {
      let o = 0;
      for (; o + 1 < this.count && this.stopOffsets[o] === this.stopOffsets[o + 1]; )
        o++;
      i.push(new er(t, this.stopOffsets[o], this.classNames.join(" "), Vn._metadata(this.metadata))), t = this.stopOffsets[o] + 1, this.stopOffsets.splice(0, o + 1), this.classNames.splice(0, o + 1), this.metadata.splice(0, o + 1), this.count -= o + 1;
    }
    return this.count > 0 && t < e && (i.push(new er(t, e - 1, this.classNames.join(" "), Vn._metadata(this.metadata))), t = e), t;
  }
  insert(e, t, i) {
    if (this.count === 0 || this.stopOffsets[this.count - 1] <= e)
      this.stopOffsets.push(e), this.classNames.push(t), this.metadata.push(i);
    else
      for (let o = 0; o < this.count; o++)
        if (this.stopOffsets[o] >= e) {
          this.stopOffsets.splice(o, 0, e), this.classNames.splice(o, 0, t), this.metadata.splice(o, 0, i);
          break;
        }
    this.count++;
  }
}
class Xl {
  /**
   * Normalize line decorations. Overlapping decorations will generate multiple segments
   */
  static normalize(e, t) {
    if (t.length === 0)
      return [];
    const i = [], o = new Vn();
    let s = 0;
    for (let a = 0, l = t.length; a < l; a++) {
      const d = t[a];
      let u = d.startColumn, g = d.endColumn;
      const w = d.className, b = d.type === 1 ? 2 : d.type === 2 ? 4 : 0;
      if (u > 1) {
        const v = e.charCodeAt(u - 2);
        Rt(v) && u--;
      }
      if (g > 1) {
        const v = e.charCodeAt(g - 2);
        Rt(v) && g--;
      }
      const p = u - 1, k = g - 2;
      s = o.consumeLowerThan(p, s, i), o.count === 0 && (s = p), o.insert(k, w, b);
    }
    return o.consumeLowerThan(1073741824, s, i), i;
  }
}
const tr = typeof Buffer < "u";
let gi;
class Kr {
  /**
   * When running in a nodejs context, if `actual` is not a nodejs Buffer, the backing store for
   * the returned `VSBuffer` instance might use a nodejs Buffer allocated from node's Buffer pool,
   * which is not transferrable.
   */
  static wrap(e) {
    return tr && !Buffer.isBuffer(e) && (e = Buffer.from(e.buffer, e.byteOffset, e.byteLength)), new Kr(e);
  }
  constructor(e) {
    this.buffer = e, this.byteLength = this.buffer.byteLength;
  }
  toString() {
    return tr ? this.buffer.toString() : (gi || (gi = new TextDecoder()), gi.decode(this.buffer));
  }
}
function Zl(n, e) {
  return n[e + 0] << 0 >>> 0 | n[e + 1] << 8 >>> 0;
}
function v0(n, e, t) {
  n[t + 0] = e & 255, e = e >>> 8, n[t + 1] = e & 255;
}
function S0(n, e) {
  return n[e] * 2 ** 24 + n[e + 1] * 2 ** 16 + n[e + 2] * 2 ** 8 + n[e + 3];
}
function L0(n, e, t) {
  n[t + 3] = e, e = e >>> 8, n[t + 2] = e, e = e >>> 8, n[t + 1] = e, e = e >>> 8, n[t] = e;
}
function _0(n, e) {
  return n[e];
}
function D0(n, e, t) {
  n[t] = e;
}
let pi;
function Gr() {
  return pi || (pi = new TextDecoder("UTF-16LE")), pi;
}
let mi;
function Ql() {
  return mi || (mi = new TextDecoder("UTF-16BE")), mi;
}
let wi;
function Jl() {
  return wi || (wi = ks() ? Gr() : Ql()), wi;
}
function T0(n, e, t) {
  const i = new Uint16Array(n.buffer, e, t);
  return t > 0 && (i[0] === 65279 || i[0] === 65534) ? e1(n, e, t) : Gr().decode(i);
}
function e1(n, e, t) {
  const i = [];
  let o = 0;
  for (let s = 0; s < t; s++) {
    const a = Zl(n, e);
    e += 2, i[o++] = String.fromCharCode(a);
  }
  return i.join("");
}
class t1 {
  constructor(e) {
    this._capacity = e | 0, this._buffer = new Uint16Array(this._capacity), this._completedStrings = null, this._bufferLength = 0;
  }
  reset() {
    this._completedStrings = null, this._bufferLength = 0;
  }
  build() {
    return this._completedStrings !== null ? (this._flushBuffer(), this._completedStrings.join("")) : this._buildBuffer();
  }
  _buildBuffer() {
    if (this._bufferLength === 0)
      return "";
    const e = new Uint16Array(this._buffer.buffer, 0, this._bufferLength);
    return Jl().decode(e);
  }
  _flushBuffer() {
    const e = this._buildBuffer();
    this._bufferLength = 0, this._completedStrings === null ? this._completedStrings = [e] : this._completedStrings[this._completedStrings.length] = e;
  }
  /**
   * Append a char code (<2^16)
   */
  appendCharCode(e) {
    const t = this._capacity - this._bufferLength;
    t <= 1 && (t === 0 || Rt(e)) && this._flushBuffer(), this._buffer[this._bufferLength++] = e;
  }
  /**
   * Append an ASCII char code (<2^8)
   */
  appendASCIICharCode(e) {
    this._bufferLength === this._capacity && this._flushBuffer(), this._buffer[this._bufferLength++] = e;
  }
  appendString(e) {
    const t = e.length;
    if (this._bufferLength + t >= this._capacity) {
      this._flushBuffer(), this._completedStrings[this._completedStrings.length] = e;
      return;
    }
    for (let i = 0; i < t; i++)
      this._buffer[this._bufferLength++] = e.charCodeAt(i);
  }
}
class te {
  constructor(e, t, i, o) {
    this.endIndex = e, this.type = t, this.metadata = i, this.containsRTL = o, this._linePartBrand = void 0;
  }
  isWhitespace() {
    return !!(this.metadata & 1);
  }
  isPseudoAfter() {
    return !!(this.metadata & 4);
  }
}
class n1 {
  constructor(e, t) {
    this.startOffset = e, this.endOffset = t;
  }
  equals(e) {
    return this.startOffset === e.startOffset && this.endOffset === e.endOffset;
  }
}
class i1 {
  constructor(e, t, i, o, s, a, l, d, u, g, w, b, p, k, v, T, _, A, z) {
    this.useMonospaceOptimizations = e, this.canUseHalfwidthRightwardsArrow = t, this.lineContent = i, this.continuesWithWrappedLine = o, this.isBasicASCII = s, this.containsRTL = a, this.fauxIndentLength = l, this.lineTokens = d, this.lineDecorations = u.sort(Ue.compare), this.tabSize = g, this.startVisibleColumn = w, this.spaceWidth = b, this.stopRenderingLineAfter = v, this.renderWhitespace = T === "all" ? 4 : T === "boundary" ? 1 : T === "selection" ? 2 : T === "trailing" ? 3 : 0, this.renderControlCharacters = _, this.fontLigatures = A, this.selectionsOnLine = z && z.sort((Y, Q) => Y.startOffset < Q.startOffset ? -1 : 1);
    const F = Math.abs(k - b), $ = Math.abs(p - b);
    F < $ ? (this.renderSpaceWidth = k, this.renderSpaceCharCode = 11825) : (this.renderSpaceWidth = p, this.renderSpaceCharCode = 183);
  }
  sameSelection(e) {
    if (this.selectionsOnLine === null)
      return e === null;
    if (e === null || e.length !== this.selectionsOnLine.length)
      return !1;
    for (let t = 0; t < this.selectionsOnLine.length; t++)
      if (!this.selectionsOnLine[t].equals(e[t]))
        return !1;
    return !0;
  }
  equals(e) {
    return this.useMonospaceOptimizations === e.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === e.canUseHalfwidthRightwardsArrow && this.lineContent === e.lineContent && this.continuesWithWrappedLine === e.continuesWithWrappedLine && this.isBasicASCII === e.isBasicASCII && this.containsRTL === e.containsRTL && this.fauxIndentLength === e.fauxIndentLength && this.tabSize === e.tabSize && this.startVisibleColumn === e.startVisibleColumn && this.spaceWidth === e.spaceWidth && this.renderSpaceWidth === e.renderSpaceWidth && this.renderSpaceCharCode === e.renderSpaceCharCode && this.stopRenderingLineAfter === e.stopRenderingLineAfter && this.renderWhitespace === e.renderWhitespace && this.renderControlCharacters === e.renderControlCharacters && this.fontLigatures === e.fontLigatures && Ue.equalsArr(this.lineDecorations, e.lineDecorations) && this.lineTokens.equals(e.lineTokens) && this.sameSelection(e.selectionsOnLine);
  }
}
class $r {
  constructor(e, t) {
    this.partIndex = e, this.charIndex = t;
  }
}
class Ve {
  static getPartIndex(e) {
    return (e & 4294901760) >>> 16;
  }
  static getCharIndex(e) {
    return (e & 65535) >>> 0;
  }
  constructor(e, t) {
    this.length = e, this._data = new Uint32Array(this.length), this._horizontalOffset = new Uint32Array(this.length);
  }
  setColumnInfo(e, t, i, o) {
    const s = (t << 16 | i << 0) >>> 0;
    this._data[e - 1] = s, this._horizontalOffset[e - 1] = o;
  }
  getHorizontalOffset(e) {
    return this._horizontalOffset.length === 0 ? 0 : this._horizontalOffset[e - 1];
  }
  charOffsetToPartData(e) {
    return this.length === 0 ? 0 : e < 0 ? this._data[0] : e >= this.length ? this._data[this.length - 1] : this._data[e];
  }
  getDomPosition(e) {
    const t = this.charOffsetToPartData(e - 1), i = Ve.getPartIndex(t), o = Ve.getCharIndex(t);
    return new $r(i, o);
  }
  getColumn(e, t) {
    return this.partDataToCharOffset(e.partIndex, t, e.charIndex) + 1;
  }
  partDataToCharOffset(e, t, i) {
    if (this.length === 0)
      return 0;
    const o = (e << 16 | i << 0) >>> 0;
    let s = 0, a = this.length - 1;
    for (; s + 1 < a; ) {
      const v = s + a >>> 1, T = this._data[v];
      if (T === o)
        return v;
      T > o ? a = v : s = v;
    }
    if (s === a)
      return s;
    const l = this._data[s], d = this._data[a];
    if (l === o)
      return s;
    if (d === o)
      return a;
    const u = Ve.getPartIndex(l), g = Ve.getCharIndex(l), w = Ve.getPartIndex(d);
    let b;
    u !== w ? b = t : b = Ve.getCharIndex(d);
    const p = i - g, k = b - i;
    return p <= k ? s : a;
  }
}
class Ai {
  constructor(e, t, i) {
    this._renderLineOutputBrand = void 0, this.characterMapping = e, this.containsRTL = t, this.containsForeignElements = i;
  }
}
function jr(n, e) {
  if (n.lineContent.length === 0) {
    if (n.lineDecorations.length > 0) {
      e.appendString("<span>");
      let t = 0, i = 0, o = 0;
      for (const a of n.lineDecorations)
        (a.type === 1 || a.type === 2) && (e.appendString('<span class="'), e.appendString(a.className), e.appendString('"></span>'), a.type === 1 && (o |= 1, t++), a.type === 2 && (o |= 2, i++));
      e.appendString("</span>");
      const s = new Ve(1, t + i);
      return s.setColumnInfo(1, t, 0, 0), new Ai(s, !1, o);
    }
    return e.appendString("<span><span></span></span>"), new Ai(
      new Ve(0, 0),
      !1,
      0
      /* ForeignElementType.None */
    );
  }
  return h1(s1(n), e);
}
class o1 {
  constructor(e, t, i, o) {
    this.characterMapping = e, this.html = t, this.containsRTL = i, this.containsForeignElements = o;
  }
}
function E0(n) {
  const e = new t1(1e4), t = jr(n, e);
  return new o1(t.characterMapping, e.build(), t.containsRTL, t.containsForeignElements);
}
class r1 {
  constructor(e, t, i, o, s, a, l, d, u, g, w, b, p, k, v, T) {
    this.fontIsMonospace = e, this.canUseHalfwidthRightwardsArrow = t, this.lineContent = i, this.len = o, this.isOverflowing = s, this.overflowingCharCount = a, this.parts = l, this.containsForeignElements = d, this.fauxIndentLength = u, this.tabSize = g, this.startVisibleColumn = w, this.containsRTL = b, this.spaceWidth = p, this.renderSpaceCharCode = k, this.renderWhitespace = v, this.renderControlCharacters = T;
  }
}
function s1(n) {
  const e = n.lineContent;
  let t, i, o;
  n.stopRenderingLineAfter !== -1 && n.stopRenderingLineAfter < e.length ? (t = !0, i = e.length - n.stopRenderingLineAfter, o = n.stopRenderingLineAfter) : (t = !1, i = 0, o = e.length);
  let s = a1(e, n.containsRTL, n.lineTokens, n.fauxIndentLength, o);
  n.renderControlCharacters && !n.isBasicASCII && (s = c1(e, s)), (n.renderWhitespace === 4 || n.renderWhitespace === 1 || n.renderWhitespace === 2 && n.selectionsOnLine || n.renderWhitespace === 3 && !n.continuesWithWrappedLine) && (s = d1(n, e, o, s));
  let a = 0;
  if (n.lineDecorations.length > 0) {
    for (let l = 0, d = n.lineDecorations.length; l < d; l++) {
      const u = n.lineDecorations[l];
      u.type === 3 || u.type === 1 ? a |= 1 : u.type === 2 && (a |= 2);
    }
    s = u1(e, o, s, n.lineDecorations);
  }
  return n.containsRTL || (s = l1(e, s, !n.isBasicASCII || n.fontLigatures)), new r1(n.useMonospaceOptimizations, n.canUseHalfwidthRightwardsArrow, e, o, t, i, s, a, n.fauxIndentLength, n.tabSize, n.startVisibleColumn, n.containsRTL, n.spaceWidth, n.renderSpaceCharCode, n.renderWhitespace, n.renderControlCharacters);
}
function a1(n, e, t, i, o) {
  const s = [];
  let a = 0;
  i > 0 && (s[a++] = new te(i, "", 0, !1));
  let l = i;
  for (let d = 0, u = t.getCount(); d < u; d++) {
    const g = t.getEndOffset(d);
    if (g <= i)
      continue;
    const w = t.getClassName(d);
    if (g >= o) {
      const p = e ? Mo(n.substring(l, o)) : !1;
      s[a++] = new te(o, w, 0, p);
      break;
    }
    const b = e ? Mo(n.substring(l, g)) : !1;
    s[a++] = new te(g, w, 0, b), l = g;
  }
  return s;
}
function l1(n, e, t) {
  let i = 0;
  const o = [];
  let s = 0;
  if (t)
    for (let a = 0, l = e.length; a < l; a++) {
      const d = e[a], u = d.endIndex;
      if (i + 50 < u) {
        const g = d.type, w = d.metadata, b = d.containsRTL;
        let p = -1, k = i;
        for (let v = i; v < u; v++)
          n.charCodeAt(v) === 32 && (p = v), p !== -1 && v - k >= 50 && (o[s++] = new te(p + 1, g, w, b), k = p + 1, p = -1);
        k !== u && (o[s++] = new te(u, g, w, b));
      } else
        o[s++] = d;
      i = u;
    }
  else
    for (let a = 0, l = e.length; a < l; a++) {
      const d = e[a], u = d.endIndex, g = u - i;
      if (g > 50) {
        const w = d.type, b = d.metadata, p = d.containsRTL, k = Math.ceil(
          g / 50
          /* Constants.LongToken */
        );
        for (let v = 1; v < k; v++) {
          const T = i + v * 50;
          o[s++] = new te(T, w, b, p);
        }
        o[s++] = new te(u, w, b, p);
      } else
        o[s++] = d;
      i = u;
    }
  return o;
}
function qr(n) {
  return n < 32 ? n !== 9 : n === 127 || n >= 8234 && n <= 8238 || n >= 8294 && n <= 8297 || n >= 8206 && n <= 8207 || n === 1564;
}
function c1(n, e) {
  const t = [];
  let i = new te(0, "", 0, !1), o = 0;
  for (const s of e) {
    const a = s.endIndex;
    for (; o < a; o++) {
      const l = n.charCodeAt(o);
      qr(l) && (o > i.endIndex && (i = new te(o, s.type, s.metadata, s.containsRTL), t.push(i)), i = new te(o + 1, "mtkcontrol", s.metadata, !1), t.push(i));
    }
    o > i.endIndex && (i = new te(a, s.type, s.metadata, s.containsRTL), t.push(i));
  }
  return t;
}
function d1(n, e, t, i) {
  const o = n.continuesWithWrappedLine, s = n.fauxIndentLength, a = n.tabSize, l = n.startVisibleColumn, d = n.useMonospaceOptimizations, u = n.selectionsOnLine, g = n.renderWhitespace === 1, w = n.renderWhitespace === 3, b = n.renderSpaceWidth !== n.spaceWidth, p = [];
  let k = 0, v = 0, T = i[v].type, _ = i[v].containsRTL, A = i[v].endIndex;
  const z = i.length;
  let F = !1, $ = ba(e), Y;
  $ === -1 ? (F = !0, $ = t, Y = t) : Y = ya(e);
  let Q = !1, ue = 0, J = u && u[ue], oe = l % a;
  for (let B = s; B < t; B++) {
    const q = e.charCodeAt(B);
    J && B >= J.endOffset && (ue++, J = u && u[ue]);
    let N;
    if (B < $ || B > Y)
      N = !0;
    else if (q === 9)
      N = !0;
    else if (q === 32)
      if (g)
        if (Q)
          N = !0;
        else {
          const ge = B + 1 < t ? e.charCodeAt(B + 1) : 0;
          N = ge === 32 || ge === 9;
        }
      else
        N = !0;
    else
      N = !1;
    if (N && u && (N = !!J && J.startOffset <= B && J.endOffset > B), N && w && (N = F || B > Y), N && _ && B >= $ && B <= Y && (N = !1), Q) {
      if (!N || !d && oe >= a) {
        if (b) {
          const ge = k > 0 ? p[k - 1].endIndex : s;
          for (let ve = ge + 1; ve <= B; ve++)
            p[k++] = new te(ve, "mtkw", 1, !1);
        } else
          p[k++] = new te(B, "mtkw", 1, !1);
        oe = oe % a;
      }
    } else
      (B === A || N && B > s) && (p[k++] = new te(B, T, 0, _), oe = oe % a);
    for (q === 9 ? oe = a : Ni(q) ? oe += 2 : oe++, Q = N; B === A && (v++, v < z); )
      T = i[v].type, _ = i[v].containsRTL, A = i[v].endIndex;
  }
  let j = !1;
  if (Q)
    if (o && g) {
      const B = t > 0 ? e.charCodeAt(t - 1) : 0, q = t > 1 ? e.charCodeAt(t - 2) : 0;
      B === 32 && q !== 32 && q !== 9 || (j = !0);
    } else
      j = !0;
  if (j)
    if (b) {
      const B = k > 0 ? p[k - 1].endIndex : s;
      for (let q = B + 1; q <= t; q++)
        p[k++] = new te(q, "mtkw", 1, !1);
    } else
      p[k++] = new te(t, "mtkw", 1, !1);
  else
    p[k++] = new te(t, T, 0, _);
  return p;
}
function u1(n, e, t, i) {
  i.sort(Ue.compare);
  const o = Xl.normalize(n, i), s = o.length;
  let a = 0;
  const l = [];
  let d = 0, u = 0;
  for (let w = 0, b = t.length; w < b; w++) {
    const p = t[w], k = p.endIndex, v = p.type, T = p.metadata, _ = p.containsRTL;
    for (; a < s && o[a].startOffset < k; ) {
      const A = o[a];
      if (A.startOffset > u && (u = A.startOffset, l[d++] = new te(u, v, T, _)), A.endOffset + 1 <= k)
        u = A.endOffset + 1, l[d++] = new te(u, v + " " + A.className, T | A.metadata, _), a++;
      else {
        u = k, l[d++] = new te(u, v + " " + A.className, T | A.metadata, _);
        break;
      }
    }
    k > u && (u = k, l[d++] = new te(u, v, T, _));
  }
  const g = t[t.length - 1].endIndex;
  if (a < s && o[a].startOffset === g)
    for (; a < s && o[a].startOffset === g; ) {
      const w = o[a];
      l[d++] = new te(u, w.className, w.metadata, !1), a++;
    }
  return l;
}
function h1(n, e) {
  const t = n.fontIsMonospace, i = n.canUseHalfwidthRightwardsArrow, o = n.containsForeignElements, s = n.lineContent, a = n.len, l = n.isOverflowing, d = n.overflowingCharCount, u = n.parts, g = n.fauxIndentLength, w = n.tabSize, b = n.startVisibleColumn, p = n.containsRTL, k = n.spaceWidth, v = n.renderSpaceCharCode, T = n.renderWhitespace, _ = n.renderControlCharacters, A = new Ve(a + 1, u.length);
  let z = !1, F = 0, $ = b, Y = 0, Q = 0, ue = 0;
  p ? e.appendString('<span dir="ltr">') : e.appendString("<span>");
  for (let J = 0, oe = u.length; J < oe; J++) {
    const j = u[J], B = j.endIndex, q = j.type, N = j.containsRTL, ge = T !== 0 && j.isWhitespace(), ve = ge && !t && (q === "mtkw" || !o), je = F === B && j.isPseudoAfter();
    if (Y = 0, e.appendString("<span "), N && e.appendString('style="unicode-bidi:isolate" '), e.appendString('class="'), e.appendString(ve ? "mtkz" : q), e.appendASCIICharCode(
      34
      /* CharCode.DoubleQuote */
    ), ge) {
      let re = 0;
      {
        let ne = F, ee = $;
        for (; ne < B; ne++) {
          const pe = (s.charCodeAt(ne) === 9 ? w - ee % w : 1) | 0;
          re += pe, ne >= g && (ee += pe);
        }
      }
      for (ve && (e.appendString(' style="width:'), e.appendString(String(k * re)), e.appendString('px"')), e.appendASCIICharCode(
        62
        /* CharCode.GreaterThan */
      ); F < B; F++) {
        A.setColumnInfo(F + 1, J - ue, Y, Q), ue = 0;
        const ne = s.charCodeAt(F);
        let ee, W;
        if (ne === 9) {
          ee = w - $ % w | 0, W = ee, !i || W > 1 ? e.appendCharCode(8594) : e.appendCharCode(65515);
          for (let pe = 2; pe <= W; pe++)
            e.appendCharCode(160);
        } else
          ee = 2, W = 1, e.appendCharCode(v), e.appendCharCode(8204);
        Y += ee, Q += W, F >= g && ($ += W);
      }
    } else
      for (e.appendASCIICharCode(
        62
        /* CharCode.GreaterThan */
      ); F < B; F++) {
        A.setColumnInfo(F + 1, J - ue, Y, Q), ue = 0;
        const re = s.charCodeAt(F);
        let ne = 1, ee = 1;
        switch (re) {
          case 9:
            ne = w - $ % w, ee = ne;
            for (let W = 1; W <= ne; W++)
              e.appendCharCode(160);
            break;
          case 32:
            e.appendCharCode(160);
            break;
          case 60:
            e.appendString("&lt;");
            break;
          case 62:
            e.appendString("&gt;");
            break;
          case 38:
            e.appendString("&amp;");
            break;
          case 0:
            _ ? e.appendCharCode(9216) : e.appendString("&#00;");
            break;
          case 65279:
          case 8232:
          case 8233:
          case 133:
            e.appendCharCode(65533);
            break;
          default:
            Ni(re) && ee++, _ && re < 32 ? e.appendCharCode(9216 + re) : _ && re === 127 ? e.appendCharCode(9249) : _ && qr(re) ? (e.appendString("[U+"), e.appendString(f1(re)), e.appendString("]"), ne = 8, ee = ne) : e.appendCharCode(re);
        }
        Y += ne, Q += ee, F >= g && ($ += ee);
      }
    je ? ue++ : ue = 0, F >= a && !z && j.isPseudoAfter() && (z = !0, A.setColumnInfo(F + 1, J, Y, Q)), e.appendString("</span>");
  }
  return z || A.setColumnInfo(a + 1, u.length - 1, Y, Q), l && (e.appendString('<span class="mtkoverflow">'), e.appendString(r("showMore", "Show more ({0})", g1(d))), e.appendString("</span>")), e.appendString("</span>"), new Ai(A, p, o);
}
function f1(n) {
  return n.toString(16).toUpperCase().padStart(4, "0");
}
function g1(n) {
  return n < 1024 ? r("overflow.chars", "{0} chars", n) : n < 1024 * 1024 ? `${(n / 1024).toFixed(1)} KB` : `${(n / 1024 / 1024).toFixed(1)} MB`;
}
var Bt;
(function(n) {
  n.DARK = "dark", n.LIGHT = "light", n.HIGH_CONTRAST_DARK = "hcDark", n.HIGH_CONTRAST_LIGHT = "hcLight";
})(Bt || (Bt = {}));
function bi(n) {
  return n === Bt.HIGH_CONTRAST_DARK || n === Bt.HIGH_CONTRAST_LIGHT;
}
function A0(n) {
  return n === Bt.DARK || n === Bt.HIGH_CONTRAST_DARK;
}
function F0(n, e = 0) {
  return n[n.length - (1 + e)];
}
function I0(n) {
  if (n.length === 0)
    throw new Error("Invalid tail call");
  return [n.slice(0, n.length - 1), n[n.length - 1]];
}
function p1(n, e, t = (i, o) => i === o) {
  if (n === e)
    return !0;
  if (!n || !e || n.length !== e.length)
    return !1;
  for (let i = 0, o = n.length; i < o; i++)
    if (!t(n[i], e[i]))
      return !1;
  return !0;
}
function O0(n, e) {
  const t = n.length - 1;
  e < t && (n[e] = n[t]), n.pop();
}
function R0(n, e, t) {
  return m1(n.length, (i) => t(n[i], e));
}
function m1(n, e) {
  let t = 0, i = n - 1;
  for (; t <= i; ) {
    const o = (t + i) / 2 | 0, s = e(o);
    if (s < 0)
      t = o + 1;
    else if (s > 0)
      i = o - 1;
    else
      return o;
  }
  return -(t + 1);
}
function nr(n, e, t) {
  if (n = n | 0, n >= e.length)
    throw new TypeError("invalid index");
  const i = e[Math.floor(e.length * Math.random())], o = [], s = [], a = [];
  for (const l of e) {
    const d = t(l, i);
    d < 0 ? o.push(l) : d > 0 ? s.push(l) : a.push(l);
  }
  return n < o.length ? nr(n, o, t) : n < o.length + a.length ? a[0] : nr(n - (o.length + a.length), s, t);
}
function M0(n, e) {
  const t = [];
  let i;
  for (const o of n.slice(0).sort(e))
    !i || e(i[0], o) !== 0 ? (i = [o], t.push(i)) : i.push(o);
  return t;
}
function* x0(n, e) {
  let t, i;
  for (const o of n)
    i !== void 0 && e(i, o) ? t.push(o) : (t && (yield t), t = [o]), i = o;
  t && (yield t);
}
function B0(n, e) {
  for (let t = 0; t <= n.length; t++)
    e(t === 0 ? void 0 : n[t - 1], t === n.length ? void 0 : n[t]);
}
function W0(n, e) {
  for (let t = 0; t < n.length; t++)
    e(t === 0 ? void 0 : n[t - 1], n[t], t + 1 === n.length ? void 0 : n[t + 1]);
}
function P0(n) {
  return n.filter((e) => !!e);
}
function N0(n) {
  let e = 0;
  for (let t = 0; t < n.length; t++)
    n[t] && (n[e] = n[t], e += 1);
  n.length = e;
}
function H0(n) {
  return !Array.isArray(n) || n.length === 0;
}
function V0(n) {
  return Array.isArray(n) && n.length > 0;
}
function z0(n, e = (t) => t) {
  const t = /* @__PURE__ */ new Set();
  return n.filter((i) => {
    const o = e(i);
    return t.has(o) ? !1 : (t.add(o), !0);
  });
}
function U0(n, e) {
  return n.length > 0 ? n[0] : e;
}
function K0(n, e) {
  let t = typeof e == "number" ? n : 0;
  typeof e == "number" ? t = n : (t = 0, e = n);
  const i = [];
  if (t <= e)
    for (let o = t; o < e; o++)
      i.push(o);
  else
    for (let o = t; o > e; o--)
      i.push(o);
  return i;
}
function G0(n, e, t) {
  const i = n.slice(0, e), o = n.slice(e);
  return i.concat(t, o);
}
function $0(n, e) {
  const t = n.indexOf(e);
  t > -1 && (n.splice(t, 1), n.unshift(e));
}
function j0(n, e) {
  const t = n.indexOf(e);
  t > -1 && (n.splice(t, 1), n.push(e));
}
function q0(n, e) {
  for (const t of e)
    n.push(t);
}
function Y0(n) {
  return Array.isArray(n) ? n : [n];
}
function w1(n, e, t) {
  const i = Yr(n, e), o = n.length, s = t.length;
  n.length = o + s;
  for (let a = o - 1; a >= i; a--)
    n[a + s] = n[a];
  for (let a = 0; a < s; a++)
    n[a + i] = t[a];
}
function X0(n, e, t, i) {
  const o = Yr(n, e);
  let s = n.splice(o, t);
  return s === void 0 && (s = []), w1(n, o, i), s;
}
function Yr(n, e) {
  return e < 0 ? Math.max(e + n.length, 0) : Math.min(e, n.length);
}
var an;
(function(n) {
  function e(s) {
    return s < 0;
  }
  n.isLessThan = e;
  function t(s) {
    return s <= 0;
  }
  n.isLessThanOrEqual = t;
  function i(s) {
    return s > 0;
  }
  n.isGreaterThan = i;
  function o(s) {
    return s === 0;
  }
  n.isNeitherLessOrGreaterThan = o, n.greaterThan = 1, n.lessThan = -1, n.neitherLessOrGreaterThan = 0;
})(an || (an = {}));
function Z0(n, e) {
  return (t, i) => e(n(t), n(i));
}
function Q0(...n) {
  return (e, t) => {
    for (const i of n) {
      const o = i(e, t);
      if (!an.isNeitherLessOrGreaterThan(o))
        return o;
    }
    return an.neitherLessOrGreaterThan;
  };
}
const b1 = (n, e) => n - e, J0 = (n, e) => b1(n ? 1 : 0, e ? 1 : 0);
function ef(n) {
  return (e, t) => -n(e, t);
}
class tf {
  /**
   * Constructs a queue that is backed by the given array. Runtime is O(1).
  */
  constructor(e) {
    this.items = e, this.firstIdx = 0, this.lastIdx = this.items.length - 1;
  }
  get length() {
    return this.lastIdx - this.firstIdx + 1;
  }
  /**
   * Consumes elements from the beginning of the queue as long as the predicate returns true.
   * If no elements were consumed, `null` is returned. Has a runtime of O(result.length).
  */
  takeWhile(e) {
    let t = this.firstIdx;
    for (; t < this.items.length && e(this.items[t]); )
      t++;
    const i = t === this.firstIdx ? null : this.items.slice(this.firstIdx, t);
    return this.firstIdx = t, i;
  }
  /**
   * Consumes elements from the end of the queue as long as the predicate returns true.
   * If no elements were consumed, `null` is returned.
   * The result has the same order as the underlying array!
  */
  takeFromEndWhile(e) {
    let t = this.lastIdx;
    for (; t >= 0 && e(this.items[t]); )
      t--;
    const i = t === this.lastIdx ? null : this.items.slice(t + 1, this.lastIdx + 1);
    return this.lastIdx = t, i;
  }
  peek() {
    if (this.length !== 0)
      return this.items[this.firstIdx];
  }
  dequeue() {
    const e = this.items[this.firstIdx];
    return this.firstIdx++, e;
  }
  takeCount(e) {
    const t = this.items.slice(this.firstIdx, this.firstIdx + e);
    return this.firstIdx += e, t;
  }
}
class An {
  static {
    this.empty = new An((e) => {
    });
  }
  constructor(e) {
    this.iterate = e;
  }
  toArray() {
    const e = [];
    return this.iterate((t) => (e.push(t), !0)), e;
  }
  filter(e) {
    return new An((t) => this.iterate((i) => e(i) ? t(i) : !0));
  }
  map(e) {
    return new An((t) => this.iterate((i) => t(e(i))));
  }
  findLast(e) {
    let t;
    return this.iterate((i) => (e(i) && (t = i), !0)), t;
  }
  findLastMaxBy(e) {
    let t, i = !0;
    return this.iterate((o) => ((i || an.isGreaterThan(e(o, t))) && (i = !1, t = o), !0)), t;
  }
}
class Fi {
  constructor(e) {
    this._indexMap = e;
  }
  /**
   * Returns a permutation that sorts the given array according to the given compare function.
   */
  static createSortPermutation(e, t) {
    const i = Array.from(e.keys()).sort((o, s) => t(e[o], e[s]));
    return new Fi(i);
  }
  /**
   * Returns a new array with the elements of the given array re-arranged according to this permutation.
   */
  apply(e) {
    return e.map((t, i) => e[this._indexMap[i]]);
  }
  /**
   * Returns a new permutation that undoes the re-arrangement of this permutation.
  */
  inverse() {
    const e = this._indexMap.slice();
    for (let t = 0; t < this._indexMap.length; t++)
      e[this._indexMap[t]] = t;
    return new Fi(e);
  }
}
function y1(n) {
  if (!n || typeof n != "object" || n instanceof RegExp)
    return n;
  const e = Array.isArray(n) ? [] : {};
  return Object.entries(n).forEach(([t, i]) => {
    e[t] = i && typeof i == "object" ? y1(i) : i;
  }), e;
}
function nf(n) {
  if (!n || typeof n != "object")
    return n;
  const e = [n];
  for (; e.length > 0; ) {
    const t = e.shift();
    Object.freeze(t);
    for (const i in t)
      if (Xr.call(t, i)) {
        const o = t[i];
        typeof o == "object" && !Object.isFrozen(o) && !Ss(o) && e.push(o);
      }
  }
  return n;
}
const Xr = Object.prototype.hasOwnProperty;
function of(n, e) {
  return Ii(n, e, /* @__PURE__ */ new Set());
}
function Ii(n, e, t) {
  if (vs(n))
    return n;
  const i = e(n);
  if (typeof i < "u")
    return i;
  if (Array.isArray(n)) {
    const o = [];
    for (const s of n)
      o.push(Ii(s, e, t));
    return o;
  }
  if (_t(n)) {
    if (t.has(n))
      throw new Error("Cannot clone recursive data-structure");
    t.add(n);
    const o = {};
    for (const s in n)
      Xr.call(n, s) && (o[s] = Ii(n[s], e, t));
    return t.delete(n), o;
  }
  return n;
}
function C1(n, e, t = !0) {
  return _t(n) ? (_t(e) && Object.keys(e).forEach((i) => {
    i in n ? t && (_t(n[i]) && _t(e[i]) ? C1(n[i], e[i], t) : n[i] = e[i]) : n[i] = e[i];
  }), n) : e;
}
function Qt(n, e) {
  if (n === e)
    return !0;
  if (n == null || e === null || e === void 0 || typeof n != typeof e || typeof n != "object" || Array.isArray(n) !== Array.isArray(e))
    return !1;
  let t, i;
  if (Array.isArray(n)) {
    if (n.length !== e.length)
      return !1;
    for (t = 0; t < n.length; t++)
      if (!Qt(n[t], e[t]))
        return !1;
  } else {
    const o = [];
    for (i in n)
      o.push(i);
    o.sort();
    const s = [];
    for (i in e)
      s.push(i);
    if (s.sort(), !Qt(o, s))
      return !1;
    for (t = 0; t < o.length; t++)
      if (!Qt(n[o[t]], e[o[t]]))
        return !1;
  }
  return !0;
}
function k1(n) {
  let e = [];
  for (; Object.prototype !== n; )
    e = e.concat(Object.getOwnPropertyNames(n)), n = Object.getPrototypeOf(n);
  return e;
}
function rf(n) {
  const e = [];
  for (const t of k1(n))
    typeof n[t] == "function" && e.push(t);
  return e;
}
function sf(n, e) {
  const t = (o) => function() {
    const s = Array.prototype.slice.call(arguments, 0);
    return e(o, s);
  }, i = {};
  for (const o of n)
    i[o] = t(o);
  return i;
}
const ir = {
  tabSize: 4,
  indentSize: 4,
  insertSpaces: !0,
  detectIndentation: !0,
  trimAutoWhitespace: !0,
  largeFileOptimizations: !0,
  bracketPairColorizationOptions: {
    enabled: !0,
    independentColorPoolPerBracketType: !1
  }
}, Zr = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function v1(n = "") {
  let e = "(-?\\d*\\.\\d\\w*)|([^";
  for (const t of Zr)
    n.indexOf(t) >= 0 || (e += "\\" + t);
  return e += "\\s]+)", new RegExp(e, "g");
}
const S1 = v1();
function L1(n) {
  let e = S1;
  if (n && n instanceof RegExp)
    if (n.global)
      e = n;
    else {
      let t = "g";
      n.ignoreCase && (t += "i"), n.multiline && (t += "m"), n.unicode && (t += "u"), e = new RegExp(n.source, t);
    }
  return e.lastIndex = 0, e;
}
const Qr = new Ls();
Qr.unshift({
  maxLen: 1e3,
  windowSize: 15,
  timeBudget: 150
});
function _1(n, e, t, i, o) {
  if (e = L1(e), o || (o = _s.first(Qr)), t.length > o.maxLen) {
    let u = n - o.maxLen / 2;
    return u < 0 ? u = 0 : i += u, t = t.substring(u, n + o.maxLen / 2), _1(n, e, t, i, o);
  }
  const s = Date.now(), a = n - 1 - i;
  let l = -1, d = null;
  for (let u = 1; !(Date.now() - s >= o.timeBudget); u++) {
    const g = a - o.windowSize * u;
    e.lastIndex = Math.max(0, g);
    const w = D1(e, t, a, l);
    if (!w && d || (d = w, g <= 0))
      break;
    l = g;
  }
  if (d) {
    const u = {
      word: d[0],
      startColumn: i + 1 + d.index,
      endColumn: i + 1 + d.index + d[0].length
    };
    return e.lastIndex = 0, u;
  }
  return null;
}
function D1(n, e, t, i) {
  let o;
  for (; o = n.exec(e); ) {
    const s = o.index || 0;
    if (s <= t && n.lastIndex >= t)
      return o;
    if (i > 0 && s > i)
      return null;
  }
  return null;
}
const T1 = 8;
class af {
  /**
   * @internal
   */
  constructor(e) {
    this._values = e;
  }
  hasChanged(e) {
    return this._values[e];
  }
}
class E1 {
  constructor() {
    this.stableMinimapLayoutInput = null, this.stableFitMaxMinimapScale = 0, this.stableFitRemainingWidth = 0;
  }
}
class P {
  constructor(e, t, i, o) {
    this.id = e, this.name = t, this.defaultValue = i, this.schema = o;
  }
  applyUpdate(e, t) {
    return Gn(e, t);
  }
  compute(e, t, i) {
    return i;
  }
}
class Fn {
  constructor(e, t) {
    this.newValue = e, this.didChange = t;
  }
}
function Gn(n, e) {
  if (typeof n != "object" || typeof e != "object" || !n || !e)
    return new Fn(e, n !== e);
  if (Array.isArray(n) || Array.isArray(e)) {
    const i = Array.isArray(n) && Array.isArray(e) && p1(n, e);
    return new Fn(e, !i);
  }
  let t = !1;
  for (const i in e)
    if (e.hasOwnProperty(i)) {
      const o = Gn(n[i], e[i]);
      o.didChange && (n[i] = o.newValue, t = !0);
    }
  return new Fn(n, t);
}
class un {
  constructor(e) {
    this.schema = void 0, this.id = e, this.name = "_never_", this.defaultValue = void 0;
  }
  applyUpdate(e, t) {
    return Gn(e, t);
  }
  validate(e) {
    return this.defaultValue;
  }
}
class Pt {
  constructor(e, t, i, o) {
    this.id = e, this.name = t, this.defaultValue = i, this.schema = o;
  }
  applyUpdate(e, t) {
    return Gn(e, t);
  }
  validate(e) {
    return typeof e > "u" ? this.defaultValue : e;
  }
  compute(e, t, i) {
    return i;
  }
}
function C(n, e) {
  return typeof n > "u" ? e : n === "false" ? !1 : !!n;
}
class E extends Pt {
  constructor(e, t, i, o = void 0) {
    typeof o < "u" && (o.type = "boolean", o.default = i), super(e, t, i, o);
  }
  validate(e) {
    return C(e, this.defaultValue);
  }
}
function A1(n, e, t, i) {
  if (typeof n > "u")
    return e;
  let o = parseInt(n, 10);
  return isNaN(o) ? e : (o = Math.max(t, o), o = Math.min(i, o), o | 0);
}
class R extends Pt {
  static clampedInt(e, t, i, o) {
    return A1(e, t, i, o);
  }
  constructor(e, t, i, o, s, a = void 0) {
    typeof a < "u" && (a.type = "integer", a.default = i, a.minimum = o, a.maximum = s), super(e, t, i, a), this.minimum = o, this.maximum = s;
  }
  validate(e) {
    return R.clampedInt(e, this.defaultValue, this.minimum, this.maximum);
  }
}
function lf(n, e, t, i) {
  if (typeof n > "u")
    return e;
  const o = _e.float(n, e);
  return _e.clamp(o, t, i);
}
class _e extends Pt {
  static clamp(e, t, i) {
    return e < t ? t : e > i ? i : e;
  }
  static float(e, t) {
    if (typeof e == "number")
      return e;
    if (typeof e > "u")
      return t;
    const i = parseFloat(e);
    return isNaN(i) ? t : i;
  }
  constructor(e, t, i, o, s) {
    typeof s < "u" && (s.type = "number", s.default = i), super(e, t, i, s), this.validationFn = o;
  }
  validate(e) {
    return this.validationFn(_e.float(e, this.defaultValue));
  }
}
class de extends Pt {
  static string(e, t) {
    return typeof e != "string" ? t : e;
  }
  constructor(e, t, i, o = void 0) {
    typeof o < "u" && (o.type = "string", o.default = i), super(e, t, i, o);
  }
  validate(e) {
    return de.string(e, this.defaultValue);
  }
}
function G(n, e, t, i) {
  return typeof n != "string" ? e : i && n in i ? i[n] : t.indexOf(n) === -1 ? e : n;
}
class V extends Pt {
  constructor(e, t, i, o, s = void 0) {
    typeof s < "u" && (s.type = "string", s.enum = o, s.default = i), super(e, t, i, s), this._allowedValues = o;
  }
  validate(e) {
    return G(e, this.defaultValue, this._allowedValues);
  }
}
class Ln extends P {
  constructor(e, t, i, o, s, a, l = void 0) {
    typeof l < "u" && (l.type = "string", l.enum = s, l.default = o), super(e, t, i, l), this._allowedValues = s, this._convert = a;
  }
  validate(e) {
    return typeof e != "string" ? this.defaultValue : this._allowedValues.indexOf(e) === -1 ? this.defaultValue : this._convert(e);
  }
}
function F1(n) {
  switch (n) {
    case "none":
      return 0;
    case "keep":
      return 1;
    case "brackets":
      return 2;
    case "advanced":
      return 3;
    case "full":
      return 4;
  }
}
class I1 extends P {
  constructor() {
    super(2, "accessibilitySupport", 0, {
      type: "string",
      enum: ["auto", "on", "off"],
      enumDescriptions: [
        r("accessibilitySupport.auto", "Use platform APIs to detect when a Screen Reader is attached."),
        r("accessibilitySupport.on", "Optimize for usage with a Screen Reader."),
        r("accessibilitySupport.off", "Assume a screen reader is not attached.")
      ],
      default: "auto",
      tags: ["accessibility"],
      description: r("accessibilitySupport", "Controls if the UI should run in a mode where it is optimized for screen readers.")
    });
  }
  validate(e) {
    switch (e) {
      case "auto":
        return 0;
      case "off":
        return 1;
      case "on":
        return 2;
    }
    return this.defaultValue;
  }
  compute(e, t, i) {
    return i === 0 ? e.accessibilitySupport : i;
  }
}
class O1 extends P {
  constructor() {
    const e = {
      insertSpace: !0,
      ignoreEmptyLines: !0
    };
    super(23, "comments", e, {
      "editor.comments.insertSpace": {
        type: "boolean",
        default: e.insertSpace,
        description: r("comments.insertSpace", "Controls whether a space character is inserted when commenting.")
      },
      "editor.comments.ignoreEmptyLines": {
        type: "boolean",
        default: e.ignoreEmptyLines,
        description: r("comments.ignoreEmptyLines", "Controls if empty lines should be ignored with toggle, add or remove actions for line comments.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      insertSpace: C(t.insertSpace, this.defaultValue.insertSpace),
      ignoreEmptyLines: C(t.ignoreEmptyLines, this.defaultValue.ignoreEmptyLines)
    };
  }
}
function R1(n) {
  switch (n) {
    case "blink":
      return 1;
    case "smooth":
      return 2;
    case "phase":
      return 3;
    case "expand":
      return 4;
    case "solid":
      return 5;
  }
}
var Ze;
(function(n) {
  n[n.Line = 1] = "Line", n[n.Block = 2] = "Block", n[n.Underline = 3] = "Underline", n[n.LineThin = 4] = "LineThin", n[n.BlockOutline = 5] = "BlockOutline", n[n.UnderlineThin = 6] = "UnderlineThin";
})(Ze || (Ze = {}));
function M1(n) {
  switch (n) {
    case "line":
      return Ze.Line;
    case "block":
      return Ze.Block;
    case "underline":
      return Ze.Underline;
    case "line-thin":
      return Ze.LineThin;
    case "block-outline":
      return Ze.BlockOutline;
    case "underline-thin":
      return Ze.UnderlineThin;
  }
}
class x1 extends un {
  constructor() {
    super(
      143
      /* EditorOption.editorClassName */
    );
  }
  compute(e, t, i) {
    const o = ["monaco-editor"];
    return t.get(
      39
      /* EditorOption.extraEditorClassName */
    ) && o.push(t.get(
      39
      /* EditorOption.extraEditorClassName */
    )), e.extraEditorClassName && o.push(e.extraEditorClassName), t.get(
      74
      /* EditorOption.mouseStyle */
    ) === "default" ? o.push("mouse-default") : t.get(
      74
      /* EditorOption.mouseStyle */
    ) === "copy" && o.push("mouse-copy"), t.get(
      112
      /* EditorOption.showUnused */
    ) && o.push("showUnused"), t.get(
      141
      /* EditorOption.showDeprecated */
    ) && o.push("showDeprecated"), o.join(" ");
  }
}
class B1 extends E {
  constructor() {
    super(37, "emptySelectionClipboard", !0, { description: r("emptySelectionClipboard", "Controls whether copying without a selection copies the current line.") });
  }
  compute(e, t, i) {
    return i && e.emptySelectionClipboard;
  }
}
class W1 extends P {
  constructor() {
    const e = {
      cursorMoveOnType: !0,
      seedSearchStringFromSelection: "always",
      autoFindInSelection: "never",
      globalFindClipboard: !1,
      addExtraSpaceOnTop: !0,
      loop: !0
    };
    super(41, "find", e, {
      "editor.find.cursorMoveOnType": {
        type: "boolean",
        default: e.cursorMoveOnType,
        description: r("find.cursorMoveOnType", "Controls whether the cursor should jump to find matches while typing.")
      },
      "editor.find.seedSearchStringFromSelection": {
        type: "string",
        enum: ["never", "always", "selection"],
        default: e.seedSearchStringFromSelection,
        enumDescriptions: [
          r("editor.find.seedSearchStringFromSelection.never", "Never seed search string from the editor selection."),
          r("editor.find.seedSearchStringFromSelection.always", "Always seed search string from the editor selection, including word at cursor position."),
          r("editor.find.seedSearchStringFromSelection.selection", "Only seed search string from the editor selection.")
        ],
        description: r("find.seedSearchStringFromSelection", "Controls whether the search string in the Find Widget is seeded from the editor selection.")
      },
      "editor.find.autoFindInSelection": {
        type: "string",
        enum: ["never", "always", "multiline"],
        default: e.autoFindInSelection,
        enumDescriptions: [
          r("editor.find.autoFindInSelection.never", "Never turn on Find in Selection automatically (default)."),
          r("editor.find.autoFindInSelection.always", "Always turn on Find in Selection automatically."),
          r("editor.find.autoFindInSelection.multiline", "Turn on Find in Selection automatically when multiple lines of content are selected.")
        ],
        description: r("find.autoFindInSelection", "Controls the condition for turning on Find in Selection automatically.")
      },
      "editor.find.globalFindClipboard": {
        type: "boolean",
        default: e.globalFindClipboard,
        description: r("find.globalFindClipboard", "Controls whether the Find Widget should read or modify the shared find clipboard on macOS."),
        included: De
      },
      "editor.find.addExtraSpaceOnTop": {
        type: "boolean",
        default: e.addExtraSpaceOnTop,
        description: r("find.addExtraSpaceOnTop", "Controls whether the Find Widget should add extra lines on top of the editor. When true, you can scroll beyond the first line when the Find Widget is visible.")
      },
      "editor.find.loop": {
        type: "boolean",
        default: e.loop,
        description: r("find.loop", "Controls whether the search automatically restarts from the beginning (or the end) when no further matches can be found.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      cursorMoveOnType: C(t.cursorMoveOnType, this.defaultValue.cursorMoveOnType),
      seedSearchStringFromSelection: typeof e.seedSearchStringFromSelection == "boolean" ? e.seedSearchStringFromSelection ? "always" : "never" : G(t.seedSearchStringFromSelection, this.defaultValue.seedSearchStringFromSelection, ["never", "always", "selection"]),
      autoFindInSelection: typeof e.autoFindInSelection == "boolean" ? e.autoFindInSelection ? "always" : "never" : G(t.autoFindInSelection, this.defaultValue.autoFindInSelection, ["never", "always", "multiline"]),
      globalFindClipboard: C(t.globalFindClipboard, this.defaultValue.globalFindClipboard),
      addExtraSpaceOnTop: C(t.addExtraSpaceOnTop, this.defaultValue.addExtraSpaceOnTop),
      loop: C(t.loop, this.defaultValue.loop)
    };
  }
}
class it extends P {
  static {
    this.OFF = '"liga" off, "calt" off';
  }
  static {
    this.ON = '"liga" on, "calt" on';
  }
  constructor() {
    super(51, "fontLigatures", it.OFF, {
      anyOf: [
        {
          type: "boolean",
          description: r("fontLigatures", "Enables/Disables font ligatures ('calt' and 'liga' font features). Change this to a string for fine-grained control of the 'font-feature-settings' CSS property.")
        },
        {
          type: "string",
          description: r("fontFeatureSettings", "Explicit 'font-feature-settings' CSS property. A boolean can be passed instead if one only needs to turn on/off ligatures.")
        }
      ],
      description: r("fontLigaturesGeneral", "Configures font ligatures or font features. Can be either a boolean to enable/disable ligatures or a string for the value of the CSS 'font-feature-settings' property."),
      default: !1
    });
  }
  validate(e) {
    return typeof e > "u" ? this.defaultValue : typeof e == "string" ? e === "false" || e.length === 0 ? it.OFF : e === "true" ? it.ON : e : e ? it.ON : it.OFF;
  }
}
class ct extends P {
  static {
    this.OFF = "normal";
  }
  static {
    this.TRANSLATE = "translate";
  }
  constructor() {
    super(54, "fontVariations", ct.OFF, {
      anyOf: [
        {
          type: "boolean",
          description: r("fontVariations", "Enables/Disables the translation from font-weight to font-variation-settings. Change this to a string for fine-grained control of the 'font-variation-settings' CSS property.")
        },
        {
          type: "string",
          description: r("fontVariationSettings", "Explicit 'font-variation-settings' CSS property. A boolean can be passed instead if one only needs to translate font-weight to font-variation-settings.")
        }
      ],
      description: r("fontVariationsGeneral", "Configures font variations. Can be either a boolean to enable/disable the translation from font-weight to font-variation-settings or a string for the value of the CSS 'font-variation-settings' property."),
      default: !1
    });
  }
  validate(e) {
    return typeof e > "u" ? this.defaultValue : typeof e == "string" ? e === "false" ? ct.OFF : e === "true" ? ct.TRANSLATE : e : e ? ct.TRANSLATE : ct.OFF;
  }
  compute(e, t, i) {
    return e.fontInfo.fontVariationSettings;
  }
}
class P1 extends un {
  constructor() {
    super(
      50
      /* EditorOption.fontInfo */
    );
  }
  compute(e, t, i) {
    return e.fontInfo;
  }
}
class N1 extends Pt {
  constructor() {
    super(52, "fontSize", Je.fontSize, {
      type: "number",
      minimum: 6,
      maximum: 100,
      default: Je.fontSize,
      description: r("fontSize", "Controls the font size in pixels.")
    });
  }
  validate(e) {
    const t = _e.float(e, this.defaultValue);
    return t === 0 ? Je.fontSize : _e.clamp(t, 6, 100);
  }
  compute(e, t, i) {
    return e.fontInfo.fontSize;
  }
}
class dt extends P {
  static {
    this.SUGGESTION_VALUES = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
  }
  static {
    this.MINIMUM_VALUE = 1;
  }
  static {
    this.MAXIMUM_VALUE = 1e3;
  }
  constructor() {
    super(53, "fontWeight", Je.fontWeight, {
      anyOf: [
        {
          type: "number",
          minimum: dt.MINIMUM_VALUE,
          maximum: dt.MAXIMUM_VALUE,
          errorMessage: r("fontWeightErrorMessage", 'Only "normal" and "bold" keywords or numbers between 1 and 1000 are allowed.')
        },
        {
          type: "string",
          pattern: "^(normal|bold|1000|[1-9][0-9]{0,2})$"
        },
        {
          enum: dt.SUGGESTION_VALUES
        }
      ],
      default: Je.fontWeight,
      description: r("fontWeight", 'Controls the font weight. Accepts "normal" and "bold" keywords or numbers between 1 and 1000.')
    });
  }
  validate(e) {
    return e === "normal" || e === "bold" ? e : String(R.clampedInt(e, Je.fontWeight, dt.MINIMUM_VALUE, dt.MAXIMUM_VALUE));
  }
}
class H1 extends P {
  constructor() {
    const e = {
      multiple: "peek",
      multipleDefinitions: "peek",
      multipleTypeDefinitions: "peek",
      multipleDeclarations: "peek",
      multipleImplementations: "peek",
      multipleReferences: "peek",
      multipleTests: "peek",
      alternativeDefinitionCommand: "editor.action.goToReferences",
      alternativeTypeDefinitionCommand: "editor.action.goToReferences",
      alternativeDeclarationCommand: "editor.action.goToReferences",
      alternativeImplementationCommand: "",
      alternativeReferenceCommand: "",
      alternativeTestsCommand: ""
    }, t = {
      type: "string",
      enum: ["peek", "gotoAndPeek", "goto"],
      default: e.multiple,
      enumDescriptions: [
        r("editor.gotoLocation.multiple.peek", "Show Peek view of the results (default)"),
        r("editor.gotoLocation.multiple.gotoAndPeek", "Go to the primary result and show a Peek view"),
        r("editor.gotoLocation.multiple.goto", "Go to the primary result and enable Peek-less navigation to others")
      ]
    }, i = ["", "editor.action.referenceSearch.trigger", "editor.action.goToReferences", "editor.action.peekImplementation", "editor.action.goToImplementation", "editor.action.peekTypeDefinition", "editor.action.goToTypeDefinition", "editor.action.peekDeclaration", "editor.action.revealDeclaration", "editor.action.peekDefinition", "editor.action.revealDefinitionAside", "editor.action.revealDefinition"];
    super(58, "gotoLocation", e, {
      "editor.gotoLocation.multiple": {
        deprecationMessage: r("editor.gotoLocation.multiple.deprecated", "This setting is deprecated, please use separate settings like 'editor.editor.gotoLocation.multipleDefinitions' or 'editor.editor.gotoLocation.multipleImplementations' instead.")
      },
      "editor.gotoLocation.multipleDefinitions": {
        description: r("editor.editor.gotoLocation.multipleDefinitions", "Controls the behavior the 'Go to Definition'-command when multiple target locations exist."),
        ...t
      },
      "editor.gotoLocation.multipleTypeDefinitions": {
        description: r("editor.editor.gotoLocation.multipleTypeDefinitions", "Controls the behavior the 'Go to Type Definition'-command when multiple target locations exist."),
        ...t
      },
      "editor.gotoLocation.multipleDeclarations": {
        description: r("editor.editor.gotoLocation.multipleDeclarations", "Controls the behavior the 'Go to Declaration'-command when multiple target locations exist."),
        ...t
      },
      "editor.gotoLocation.multipleImplementations": {
        description: r("editor.editor.gotoLocation.multipleImplemenattions", "Controls the behavior the 'Go to Implementations'-command when multiple target locations exist."),
        ...t
      },
      "editor.gotoLocation.multipleReferences": {
        description: r("editor.editor.gotoLocation.multipleReferences", "Controls the behavior the 'Go to References'-command when multiple target locations exist."),
        ...t
      },
      "editor.gotoLocation.alternativeDefinitionCommand": {
        type: "string",
        default: e.alternativeDefinitionCommand,
        enum: i,
        description: r("alternativeDefinitionCommand", "Alternative command id that is being executed when the result of 'Go to Definition' is the current location.")
      },
      "editor.gotoLocation.alternativeTypeDefinitionCommand": {
        type: "string",
        default: e.alternativeTypeDefinitionCommand,
        enum: i,
        description: r("alternativeTypeDefinitionCommand", "Alternative command id that is being executed when the result of 'Go to Type Definition' is the current location.")
      },
      "editor.gotoLocation.alternativeDeclarationCommand": {
        type: "string",
        default: e.alternativeDeclarationCommand,
        enum: i,
        description: r("alternativeDeclarationCommand", "Alternative command id that is being executed when the result of 'Go to Declaration' is the current location.")
      },
      "editor.gotoLocation.alternativeImplementationCommand": {
        type: "string",
        default: e.alternativeImplementationCommand,
        enum: i,
        description: r("alternativeImplementationCommand", "Alternative command id that is being executed when the result of 'Go to Implementation' is the current location.")
      },
      "editor.gotoLocation.alternativeReferenceCommand": {
        type: "string",
        default: e.alternativeReferenceCommand,
        enum: i,
        description: r("alternativeReferenceCommand", "Alternative command id that is being executed when the result of 'Go to Reference' is the current location.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      multiple: G(t.multiple, this.defaultValue.multiple, ["peek", "gotoAndPeek", "goto"]),
      multipleDefinitions: t.multipleDefinitions ?? G(t.multipleDefinitions, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleTypeDefinitions: t.multipleTypeDefinitions ?? G(t.multipleTypeDefinitions, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleDeclarations: t.multipleDeclarations ?? G(t.multipleDeclarations, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleImplementations: t.multipleImplementations ?? G(t.multipleImplementations, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleReferences: t.multipleReferences ?? G(t.multipleReferences, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleTests: t.multipleTests ?? G(t.multipleTests, "peek", ["peek", "gotoAndPeek", "goto"]),
      alternativeDefinitionCommand: de.string(t.alternativeDefinitionCommand, this.defaultValue.alternativeDefinitionCommand),
      alternativeTypeDefinitionCommand: de.string(t.alternativeTypeDefinitionCommand, this.defaultValue.alternativeTypeDefinitionCommand),
      alternativeDeclarationCommand: de.string(t.alternativeDeclarationCommand, this.defaultValue.alternativeDeclarationCommand),
      alternativeImplementationCommand: de.string(t.alternativeImplementationCommand, this.defaultValue.alternativeImplementationCommand),
      alternativeReferenceCommand: de.string(t.alternativeReferenceCommand, this.defaultValue.alternativeReferenceCommand),
      alternativeTestsCommand: de.string(t.alternativeTestsCommand, this.defaultValue.alternativeTestsCommand)
    };
  }
}
class V1 extends P {
  constructor() {
    const e = {
      enabled: !0,
      delay: 300,
      hidingDelay: 300,
      sticky: !0,
      above: !0
    };
    super(60, "hover", e, {
      "editor.hover.enabled": {
        type: "boolean",
        default: e.enabled,
        description: r("hover.enabled", "Controls whether the hover is shown.")
      },
      "editor.hover.delay": {
        type: "number",
        default: e.delay,
        minimum: 0,
        maximum: 1e4,
        description: r("hover.delay", "Controls the delay in milliseconds after which the hover is shown.")
      },
      "editor.hover.sticky": {
        type: "boolean",
        default: e.sticky,
        description: r("hover.sticky", "Controls whether the hover should remain visible when mouse is moved over it.")
      },
      "editor.hover.hidingDelay": {
        type: "integer",
        minimum: 0,
        default: e.hidingDelay,
        description: r("hover.hidingDelay", "Controls the delay in milliseconds after which the hover is hidden. Requires `editor.hover.sticky` to be enabled.")
      },
      "editor.hover.above": {
        type: "boolean",
        default: e.above,
        description: r("hover.above", "Prefer showing hovers above the line, if there's space.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      enabled: C(t.enabled, this.defaultValue.enabled),
      delay: R.clampedInt(t.delay, this.defaultValue.delay, 0, 1e4),
      sticky: C(t.sticky, this.defaultValue.sticky),
      hidingDelay: R.clampedInt(t.hidingDelay, this.defaultValue.hidingDelay, 0, 6e5),
      above: C(t.above, this.defaultValue.above)
    };
  }
}
class Jt extends un {
  constructor() {
    super(
      146
      /* EditorOption.layoutInfo */
    );
  }
  compute(e, t, i) {
    return Jt.computeLayout(t, {
      memory: e.memory,
      outerWidth: e.outerWidth,
      outerHeight: e.outerHeight,
      isDominatedByLongLines: e.isDominatedByLongLines,
      lineHeight: e.fontInfo.lineHeight,
      viewLineCount: e.viewLineCount,
      lineNumbersDigitCount: e.lineNumbersDigitCount,
      typicalHalfwidthCharacterWidth: e.fontInfo.typicalHalfwidthCharacterWidth,
      maxDigitWidth: e.fontInfo.maxDigitWidth,
      pixelRatio: e.pixelRatio,
      glyphMarginDecorationLaneCount: e.glyphMarginDecorationLaneCount
    });
  }
  static computeContainedMinimapLineCount(e) {
    const t = e.height / e.lineHeight, i = Math.floor(e.paddingTop / e.lineHeight);
    let o = Math.floor(e.paddingBottom / e.lineHeight);
    e.scrollBeyondLastLine && (o = Math.max(o, t - 1));
    const s = (i + e.viewLineCount + o) / (e.pixelRatio * e.height), a = Math.floor(e.viewLineCount / s);
    return { typicalViewportLineCount: t, extraLinesBeforeFirstLine: i, extraLinesBeyondLastLine: o, desiredRatio: s, minimapLineCount: a };
  }
  static _computeMinimapLayout(e, t) {
    const i = e.outerWidth, o = e.outerHeight, s = e.pixelRatio;
    if (!e.minimap.enabled)
      return {
        renderMinimap: 0,
        minimapLeft: 0,
        minimapWidth: 0,
        minimapHeightIsEditorHeight: !1,
        minimapIsSampling: !1,
        minimapScale: 1,
        minimapLineHeight: 1,
        minimapCanvasInnerWidth: 0,
        minimapCanvasInnerHeight: Math.floor(s * o),
        minimapCanvasOuterWidth: 0,
        minimapCanvasOuterHeight: o
      };
    const a = t.stableMinimapLayoutInput, l = a && e.outerHeight === a.outerHeight && e.lineHeight === a.lineHeight && e.typicalHalfwidthCharacterWidth === a.typicalHalfwidthCharacterWidth && e.pixelRatio === a.pixelRatio && e.scrollBeyondLastLine === a.scrollBeyondLastLine && e.paddingTop === a.paddingTop && e.paddingBottom === a.paddingBottom && e.minimap.enabled === a.minimap.enabled && e.minimap.side === a.minimap.side && e.minimap.size === a.minimap.size && e.minimap.showSlider === a.minimap.showSlider && e.minimap.renderCharacters === a.minimap.renderCharacters && e.minimap.maxColumn === a.minimap.maxColumn && e.minimap.scale === a.minimap.scale && e.verticalScrollbarWidth === a.verticalScrollbarWidth && e.isViewportWrapping === a.isViewportWrapping, d = e.lineHeight, u = e.typicalHalfwidthCharacterWidth, g = e.scrollBeyondLastLine, w = e.minimap.renderCharacters;
    let b = s >= 2 ? Math.round(e.minimap.scale * 2) : e.minimap.scale;
    const p = e.minimap.maxColumn, k = e.minimap.size, v = e.minimap.side, T = e.verticalScrollbarWidth, _ = e.viewLineCount, A = e.remainingWidth, z = e.isViewportWrapping, F = w ? 2 : 3;
    let $ = Math.floor(s * o);
    const Y = $ / s;
    let Q = !1, ue = !1, J = F * b, oe = b / s, j = 1;
    if (k === "fill" || k === "fit") {
      const { typicalViewportLineCount: re, extraLinesBeforeFirstLine: ne, extraLinesBeyondLastLine: ee, desiredRatio: W, minimapLineCount: pe } = Jt.computeContainedMinimapLineCount({
        viewLineCount: _,
        scrollBeyondLastLine: g,
        paddingTop: e.paddingTop,
        paddingBottom: e.paddingBottom,
        height: o,
        lineHeight: d,
        pixelRatio: s
      });
      if (_ / pe > 1)
        Q = !0, ue = !0, b = 1, J = 1, oe = b / s;
      else {
        let we = !1, U = b + 1;
        if (k === "fit") {
          const Te = Math.ceil((ne + _ + ee) * J);
          z && l && A <= t.stableFitRemainingWidth ? (we = !0, U = t.stableFitMaxMinimapScale) : we = Te > $;
        }
        if (k === "fill" || we) {
          Q = !0;
          const Te = b;
          J = Math.min(d * s, Math.max(1, Math.floor(1 / W))), z && l && A <= t.stableFitRemainingWidth && (U = t.stableFitMaxMinimapScale), b = Math.min(U, Math.max(1, Math.floor(J / F))), b > Te && (j = Math.min(2, b / Te)), oe = b / s / j, $ = Math.ceil(Math.max(re, ne + _ + ee) * J), z ? (t.stableMinimapLayoutInput = e, t.stableFitRemainingWidth = A, t.stableFitMaxMinimapScale = b) : (t.stableMinimapLayoutInput = null, t.stableFitRemainingWidth = 0);
        }
      }
    }
    const B = Math.floor(p * oe), q = Math.min(B, Math.max(0, Math.floor((A - T - 2) * oe / (u + oe))) + T1);
    let N = Math.floor(s * q);
    const ge = N / s;
    N = Math.floor(N * j);
    const ve = w ? 1 : 2, je = v === "left" ? 0 : i - q - T;
    return {
      renderMinimap: ve,
      minimapLeft: je,
      minimapWidth: q,
      minimapHeightIsEditorHeight: Q,
      minimapIsSampling: ue,
      minimapScale: b,
      minimapLineHeight: J,
      minimapCanvasInnerWidth: N,
      minimapCanvasInnerHeight: $,
      minimapCanvasOuterWidth: ge,
      minimapCanvasOuterHeight: Y
    };
  }
  static computeLayout(e, t) {
    const i = t.outerWidth | 0, o = t.outerHeight | 0, s = t.lineHeight | 0, a = t.lineNumbersDigitCount | 0, l = t.typicalHalfwidthCharacterWidth, d = t.maxDigitWidth, u = t.pixelRatio, g = t.viewLineCount, w = e.get(
      138
      /* EditorOption.wordWrapOverride2 */
    ), b = w === "inherit" ? e.get(
      137
      /* EditorOption.wordWrapOverride1 */
    ) : w, p = b === "inherit" ? e.get(
      133
      /* EditorOption.wordWrap */
    ) : b, k = e.get(
      136
      /* EditorOption.wordWrapColumn */
    ), v = t.isDominatedByLongLines, T = e.get(
      57
      /* EditorOption.glyphMargin */
    ), _ = e.get(
      68
      /* EditorOption.lineNumbers */
    ).renderType !== 0, A = e.get(
      69
      /* EditorOption.lineNumbersMinChars */
    ), z = e.get(
      106
      /* EditorOption.scrollBeyondLastLine */
    ), F = e.get(
      84
      /* EditorOption.padding */
    ), $ = e.get(
      73
      /* EditorOption.minimap */
    ), Y = e.get(
      104
      /* EditorOption.scrollbar */
    ), Q = Y.verticalScrollbarSize, ue = Y.verticalHasArrows, J = Y.arrowSize, oe = Y.horizontalScrollbarSize, j = e.get(
      43
      /* EditorOption.folding */
    ), B = e.get(
      111
      /* EditorOption.showFoldingControls */
    ) !== "never";
    let q = e.get(
      66
      /* EditorOption.lineDecorationsWidth */
    );
    j && B && (q += 16);
    let N = 0;
    if (_) {
      const hn = Math.max(a, A);
      N = Math.round(hn * d);
    }
    let ge = 0;
    T && (ge = s * t.glyphMarginDecorationLaneCount);
    let ve = 0, je = ve + ge, re = je + N, ne = re + q;
    const ee = i - ge - N - q;
    let W = !1, pe = !1, Z = -1;
    b === "inherit" && v ? (W = !0, pe = !0) : p === "on" || p === "bounded" ? pe = !0 : p === "wordWrapColumn" && (Z = k);
    const we = Jt._computeMinimapLayout({
      outerWidth: i,
      outerHeight: o,
      lineHeight: s,
      typicalHalfwidthCharacterWidth: l,
      pixelRatio: u,
      scrollBeyondLastLine: z,
      paddingTop: F.top,
      paddingBottom: F.bottom,
      minimap: $,
      verticalScrollbarWidth: Q,
      viewLineCount: g,
      remainingWidth: ee,
      isViewportWrapping: pe
    }, t.memory || new E1());
    we.renderMinimap !== 0 && we.minimapLeft === 0 && (ve += we.minimapWidth, je += we.minimapWidth, re += we.minimapWidth, ne += we.minimapWidth);
    const U = ee - we.minimapWidth, Te = Math.max(1, Math.floor((U - Q - 2) / l)), bt = ue ? J : 0;
    return pe && (Z = Math.max(1, Te), p === "bounded" && (Z = Math.min(Z, k))), {
      width: i,
      height: o,
      glyphMarginLeft: ve,
      glyphMarginWidth: ge,
      glyphMarginDecorationLaneCount: t.glyphMarginDecorationLaneCount,
      lineNumbersLeft: je,
      lineNumbersWidth: N,
      decorationsLeft: re,
      decorationsWidth: q,
      contentLeft: ne,
      contentWidth: U,
      minimap: we,
      viewportColumn: Te,
      isWordWrapMinified: W,
      isViewportWrapping: pe,
      wrappingColumn: Z,
      verticalScrollbarWidth: Q,
      horizontalScrollbarHeight: oe,
      overviewRuler: {
        top: bt,
        width: Q,
        height: o - 2 * bt,
        right: 0
      }
    };
  }
}
class z1 extends P {
  constructor() {
    super(140, "wrappingStrategy", "simple", {
      "editor.wrappingStrategy": {
        enumDescriptions: [
          r("wrappingStrategy.simple", "Assumes that all characters are of the same width. This is a fast algorithm that works correctly for monospace fonts and certain scripts (like Latin characters) where glyphs are of equal width."),
          r("wrappingStrategy.advanced", "Delegates wrapping points computation to the browser. This is a slow algorithm, that might cause freezes for large files, but it works correctly in all cases.")
        ],
        type: "string",
        enum: ["simple", "advanced"],
        default: "simple",
        description: r("wrappingStrategy", "Controls the algorithm that computes wrapping points. Note that when in accessibility mode, advanced will be used for the best experience.")
      }
    });
  }
  validate(e) {
    return G(e, "simple", ["simple", "advanced"]);
  }
  compute(e, t, i) {
    return t.get(
      2
      /* EditorOption.accessibilitySupport */
    ) === 2 ? "advanced" : i;
  }
}
var Xe;
(function(n) {
  n.Off = "off", n.OnCode = "onCode", n.On = "on";
})(Xe || (Xe = {}));
class U1 extends P {
  constructor() {
    const e = { enabled: Xe.OnCode };
    super(65, "lightbulb", e, {
      "editor.lightbulb.enabled": {
        type: "string",
        tags: ["experimental"],
        enum: [Xe.Off, Xe.OnCode, Xe.On],
        default: e.enabled,
        enumDescriptions: [
          r("editor.lightbulb.enabled.off", "Disable the code action menu."),
          r("editor.lightbulb.enabled.onCode", "Show the code action menu when the cursor is on lines with code."),
          r("editor.lightbulb.enabled.on", "Show the code action menu when the cursor is on lines with code or on empty lines.")
        ],
        description: r("enabled", "Enables the Code Action lightbulb in the editor.")
      }
    });
  }
  validate(e) {
    return !e || typeof e != "object" ? this.defaultValue : {
      enabled: G(e.enabled, this.defaultValue.enabled, [Xe.Off, Xe.OnCode, Xe.On])
    };
  }
}
class K1 extends P {
  constructor() {
    const e = { enabled: !0, maxLineCount: 5, defaultModel: "outlineModel", scrollWithEditor: !0 };
    super(116, "stickyScroll", e, {
      "editor.stickyScroll.enabled": {
        type: "boolean",
        default: e.enabled,
        description: r("editor.stickyScroll.enabled", "Shows the nested current scopes during the scroll at the top of the editor."),
        tags: ["experimental"]
      },
      "editor.stickyScroll.maxLineCount": {
        type: "number",
        default: e.maxLineCount,
        minimum: 1,
        maximum: 20,
        description: r("editor.stickyScroll.maxLineCount", "Defines the maximum number of sticky lines to show.")
      },
      "editor.stickyScroll.defaultModel": {
        type: "string",
        enum: ["outlineModel", "foldingProviderModel", "indentationModel"],
        default: e.defaultModel,
        description: r("editor.stickyScroll.defaultModel", "Defines the model to use for determining which lines to stick. If the outline model does not exist, it will fall back on the folding provider model which falls back on the indentation model. This order is respected in all three cases.")
      },
      "editor.stickyScroll.scrollWithEditor": {
        type: "boolean",
        default: e.scrollWithEditor,
        description: r("editor.stickyScroll.scrollWithEditor", "Enable scrolling of Sticky Scroll with the editor's horizontal scrollbar.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      enabled: C(t.enabled, this.defaultValue.enabled),
      maxLineCount: R.clampedInt(t.maxLineCount, this.defaultValue.maxLineCount, 1, 20),
      defaultModel: G(t.defaultModel, this.defaultValue.defaultModel, ["outlineModel", "foldingProviderModel", "indentationModel"]),
      scrollWithEditor: C(t.scrollWithEditor, this.defaultValue.scrollWithEditor)
    };
  }
}
class G1 extends P {
  constructor() {
    const e = { enabled: "on", fontSize: 0, fontFamily: "", padding: !1 };
    super(142, "inlayHints", e, {
      "editor.inlayHints.enabled": {
        type: "string",
        default: e.enabled,
        description: r("inlayHints.enable", "Enables the inlay hints in the editor."),
        enum: ["on", "onUnlessPressed", "offUnlessPressed", "off"],
        markdownEnumDescriptions: [
          r("editor.inlayHints.on", "Inlay hints are enabled"),
          r("editor.inlayHints.onUnlessPressed", "Inlay hints are showing by default and hide when holding {0}", De ? "Ctrl+Option" : "Ctrl+Alt"),
          r("editor.inlayHints.offUnlessPressed", "Inlay hints are hidden by default and show when holding {0}", De ? "Ctrl+Option" : "Ctrl+Alt"),
          r("editor.inlayHints.off", "Inlay hints are disabled")
        ]
      },
      "editor.inlayHints.fontSize": {
        type: "number",
        default: e.fontSize,
        markdownDescription: r("inlayHints.fontSize", "Controls font size of inlay hints in the editor. As default the {0} is used when the configured value is less than {1} or greater than the editor font size.", "`#editor.fontSize#`", "`5`")
      },
      "editor.inlayHints.fontFamily": {
        type: "string",
        default: e.fontFamily,
        markdownDescription: r("inlayHints.fontFamily", "Controls font family of inlay hints in the editor. When set to empty, the {0} is used.", "`#editor.fontFamily#`")
      },
      "editor.inlayHints.padding": {
        type: "boolean",
        default: e.padding,
        description: r("inlayHints.padding", "Enables the padding around the inlay hints in the editor.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return typeof t.enabled == "boolean" && (t.enabled = t.enabled ? "on" : "off"), {
      enabled: G(t.enabled, this.defaultValue.enabled, ["on", "off", "offUnlessPressed", "onUnlessPressed"]),
      fontSize: R.clampedInt(t.fontSize, this.defaultValue.fontSize, 0, 100),
      fontFamily: de.string(t.fontFamily, this.defaultValue.fontFamily),
      padding: C(t.padding, this.defaultValue.padding)
    };
  }
}
class $1 extends P {
  constructor() {
    super(66, "lineDecorationsWidth", 10);
  }
  validate(e) {
    return typeof e == "string" && /^\d+(\.\d+)?ch$/.test(e) ? -parseFloat(e.substring(0, e.length - 2)) : R.clampedInt(e, this.defaultValue, 0, 1e3);
  }
  compute(e, t, i) {
    return i < 0 ? R.clampedInt(-i * e.fontInfo.typicalHalfwidthCharacterWidth, this.defaultValue, 0, 1e3) : i;
  }
}
class j1 extends _e {
  constructor() {
    super(67, "lineHeight", Je.lineHeight, (e) => _e.clamp(e, 0, 150), { markdownDescription: r("lineHeight", `Controls the line height. 
 - Use 0 to automatically compute the line height from the font size.
 - Values between 0 and 8 will be used as a multiplier with the font size.
 - Values greater than or equal to 8 will be used as effective values.`) });
  }
  compute(e, t, i) {
    return e.fontInfo.lineHeight;
  }
}
class q1 extends P {
  constructor() {
    const e = {
      enabled: !0,
      size: "proportional",
      side: "right",
      showSlider: "mouseover",
      autohide: !1,
      renderCharacters: !0,
      maxColumn: 120,
      scale: 1,
      showRegionSectionHeaders: !0,
      showMarkSectionHeaders: !0,
      sectionHeaderFontSize: 9,
      sectionHeaderLetterSpacing: 1
    };
    super(73, "minimap", e, {
      "editor.minimap.enabled": {
        type: "boolean",
        default: e.enabled,
        description: r("minimap.enabled", "Controls whether the minimap is shown.")
      },
      "editor.minimap.autohide": {
        type: "boolean",
        default: e.autohide,
        description: r("minimap.autohide", "Controls whether the minimap is hidden automatically.")
      },
      "editor.minimap.size": {
        type: "string",
        enum: ["proportional", "fill", "fit"],
        enumDescriptions: [
          r("minimap.size.proportional", "The minimap has the same size as the editor contents (and might scroll)."),
          r("minimap.size.fill", "The minimap will stretch or shrink as necessary to fill the height of the editor (no scrolling)."),
          r("minimap.size.fit", "The minimap will shrink as necessary to never be larger than the editor (no scrolling).")
        ],
        default: e.size,
        description: r("minimap.size", "Controls the size of the minimap.")
      },
      "editor.minimap.side": {
        type: "string",
        enum: ["left", "right"],
        default: e.side,
        description: r("minimap.side", "Controls the side where to render the minimap.")
      },
      "editor.minimap.showSlider": {
        type: "string",
        enum: ["always", "mouseover"],
        default: e.showSlider,
        description: r("minimap.showSlider", "Controls when the minimap slider is shown.")
      },
      "editor.minimap.scale": {
        type: "number",
        default: e.scale,
        minimum: 1,
        maximum: 3,
        enum: [1, 2, 3],
        description: r("minimap.scale", "Scale of content drawn in the minimap: 1, 2 or 3.")
      },
      "editor.minimap.renderCharacters": {
        type: "boolean",
        default: e.renderCharacters,
        description: r("minimap.renderCharacters", "Render the actual characters on a line as opposed to color blocks.")
      },
      "editor.minimap.maxColumn": {
        type: "number",
        default: e.maxColumn,
        description: r("minimap.maxColumn", "Limit the width of the minimap to render at most a certain number of columns.")
      },
      "editor.minimap.showRegionSectionHeaders": {
        type: "boolean",
        default: e.showRegionSectionHeaders,
        description: r("minimap.showRegionSectionHeaders", "Controls whether named regions are shown as section headers in the minimap.")
      },
      "editor.minimap.showMarkSectionHeaders": {
        type: "boolean",
        default: e.showMarkSectionHeaders,
        description: r("minimap.showMarkSectionHeaders", "Controls whether MARK: comments are shown as section headers in the minimap.")
      },
      "editor.minimap.sectionHeaderFontSize": {
        type: "number",
        default: e.sectionHeaderFontSize,
        description: r("minimap.sectionHeaderFontSize", "Controls the font size of section headers in the minimap.")
      },
      "editor.minimap.sectionHeaderLetterSpacing": {
        type: "number",
        default: e.sectionHeaderLetterSpacing,
        description: r("minimap.sectionHeaderLetterSpacing", "Controls the amount of space (in pixels) between characters of section header. This helps the readability of the header in small font sizes.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      enabled: C(t.enabled, this.defaultValue.enabled),
      autohide: C(t.autohide, this.defaultValue.autohide),
      size: G(t.size, this.defaultValue.size, ["proportional", "fill", "fit"]),
      side: G(t.side, this.defaultValue.side, ["right", "left"]),
      showSlider: G(t.showSlider, this.defaultValue.showSlider, ["always", "mouseover"]),
      renderCharacters: C(t.renderCharacters, this.defaultValue.renderCharacters),
      scale: R.clampedInt(t.scale, 1, 1, 3),
      maxColumn: R.clampedInt(t.maxColumn, this.defaultValue.maxColumn, 1, 1e4),
      showRegionSectionHeaders: C(t.showRegionSectionHeaders, this.defaultValue.showRegionSectionHeaders),
      showMarkSectionHeaders: C(t.showMarkSectionHeaders, this.defaultValue.showMarkSectionHeaders),
      sectionHeaderFontSize: _e.clamp(t.sectionHeaderFontSize ?? this.defaultValue.sectionHeaderFontSize, 4, 32),
      sectionHeaderLetterSpacing: _e.clamp(t.sectionHeaderLetterSpacing ?? this.defaultValue.sectionHeaderLetterSpacing, 0, 5)
    };
  }
}
function Y1(n) {
  return n === "ctrlCmd" ? De ? "metaKey" : "ctrlKey" : "altKey";
}
class X1 extends P {
  constructor() {
    super(84, "padding", { top: 0, bottom: 0 }, {
      "editor.padding.top": {
        type: "number",
        default: 0,
        minimum: 0,
        maximum: 1e3,
        description: r("padding.top", "Controls the amount of space between the top edge of the editor and the first line.")
      },
      "editor.padding.bottom": {
        type: "number",
        default: 0,
        minimum: 0,
        maximum: 1e3,
        description: r("padding.bottom", "Controls the amount of space between the bottom edge of the editor and the last line.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      top: R.clampedInt(t.top, 0, 0, 1e3),
      bottom: R.clampedInt(t.bottom, 0, 0, 1e3)
    };
  }
}
class Z1 extends P {
  constructor() {
    const e = {
      enabled: !0,
      cycle: !0
    };
    super(86, "parameterHints", e, {
      "editor.parameterHints.enabled": {
        type: "boolean",
        default: e.enabled,
        description: r("parameterHints.enabled", "Enables a pop-up that shows parameter documentation and type information as you type.")
      },
      "editor.parameterHints.cycle": {
        type: "boolean",
        default: e.cycle,
        description: r("parameterHints.cycle", "Controls whether the parameter hints menu cycles or closes when reaching the end of the list.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      enabled: C(t.enabled, this.defaultValue.enabled),
      cycle: C(t.cycle, this.defaultValue.cycle)
    };
  }
}
class Q1 extends un {
  constructor() {
    super(
      144
      /* EditorOption.pixelRatio */
    );
  }
  compute(e, t, i) {
    return e.pixelRatio;
  }
}
class J1 extends P {
  constructor() {
    super(88, "placeholder", void 0);
  }
  validate(e) {
    return typeof e > "u" ? this.defaultValue : typeof e == "string" ? e : this.defaultValue;
  }
}
class ec extends P {
  constructor() {
    const e = {
      other: "on",
      comments: "off",
      strings: "off"
    }, t = [
      { type: "boolean" },
      {
        type: "string",
        enum: ["on", "inline", "off"],
        enumDescriptions: [r("on", "Quick suggestions show inside the suggest widget"), r("inline", "Quick suggestions show as ghost text"), r("off", "Quick suggestions are disabled")]
      }
    ];
    super(90, "quickSuggestions", e, {
      type: "object",
      additionalProperties: !1,
      properties: {
        strings: {
          anyOf: t,
          default: e.strings,
          description: r("quickSuggestions.strings", "Enable quick suggestions inside strings.")
        },
        comments: {
          anyOf: t,
          default: e.comments,
          description: r("quickSuggestions.comments", "Enable quick suggestions inside comments.")
        },
        other: {
          anyOf: t,
          default: e.other,
          description: r("quickSuggestions.other", "Enable quick suggestions outside of strings and comments.")
        }
      },
      default: e,
      markdownDescription: r("quickSuggestions", "Controls whether suggestions should automatically show up while typing. This can be controlled for typing in comments, strings, and other code. Quick suggestion can be configured to show as ghost text or with the suggest widget. Also be aware of the {0}-setting which controls if suggestions are triggered by special characters.", "`#editor.suggestOnTriggerCharacters#`")
    }), this.defaultValue = e;
  }
  validate(e) {
    if (typeof e == "boolean") {
      const u = e ? "on" : "off";
      return { comments: u, strings: u, other: u };
    }
    if (!e || typeof e != "object")
      return this.defaultValue;
    const { other: t, comments: i, strings: o } = e, s = ["on", "inline", "off"];
    let a, l, d;
    return typeof t == "boolean" ? a = t ? "on" : "off" : a = G(t, this.defaultValue.other, s), typeof i == "boolean" ? l = i ? "on" : "off" : l = G(i, this.defaultValue.comments, s), typeof o == "boolean" ? d = o ? "on" : "off" : d = G(o, this.defaultValue.strings, s), {
      other: a,
      comments: l,
      strings: d
    };
  }
}
class tc extends P {
  constructor() {
    super(68, "lineNumbers", { renderType: 1, renderFn: null }, {
      type: "string",
      enum: ["off", "on", "relative", "interval"],
      enumDescriptions: [
        r("lineNumbers.off", "Line numbers are not rendered."),
        r("lineNumbers.on", "Line numbers are rendered as absolute number."),
        r("lineNumbers.relative", "Line numbers are rendered as distance in lines to cursor position."),
        r("lineNumbers.interval", "Line numbers are rendered every 10 lines.")
      ],
      default: "on",
      description: r("lineNumbers", "Controls the display of line numbers.")
    });
  }
  validate(e) {
    let t = this.defaultValue.renderType, i = this.defaultValue.renderFn;
    return typeof e < "u" && (typeof e == "function" ? (t = 4, i = e) : e === "interval" ? t = 3 : e === "relative" ? t = 2 : e === "on" ? t = 1 : t = 0), {
      renderType: t,
      renderFn: i
    };
  }
}
function cf(n) {
  const e = n.get(
    99
    /* EditorOption.renderValidationDecorations */
  );
  return e === "editable" ? n.get(
    92
    /* EditorOption.readOnly */
  ) : e !== "on";
}
class nc extends P {
  constructor() {
    const e = [], t = { type: "number", description: r("rulers.size", "Number of monospace characters at which this editor ruler will render.") };
    super(103, "rulers", e, {
      type: "array",
      items: {
        anyOf: [
          t,
          {
            type: [
              "object"
            ],
            properties: {
              column: t,
              color: {
                type: "string",
                description: r("rulers.color", "Color of this editor ruler."),
                format: "color-hex"
              }
            }
          }
        ]
      },
      default: e,
      description: r("rulers", "Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers. No rulers are drawn if array is empty.")
    });
  }
  validate(e) {
    if (Array.isArray(e)) {
      const t = [];
      for (const i of e)
        if (typeof i == "number")
          t.push({
            column: R.clampedInt(i, 0, 0, 1e4),
            color: null
          });
        else if (i && typeof i == "object") {
          const o = i;
          t.push({
            column: R.clampedInt(o.column, 0, 0, 1e4),
            color: o.color
          });
        }
      return t.sort((i, o) => i.column - o.column), t;
    }
    return this.defaultValue;
  }
}
class ic extends P {
  constructor() {
    super(93, "readOnlyMessage", void 0);
  }
  validate(e) {
    return !e || typeof e != "object" ? this.defaultValue : e;
  }
}
function or(n, e) {
  if (typeof n != "string")
    return e;
  switch (n) {
    case "hidden":
      return 2;
    case "visible":
      return 3;
    default:
      return 1;
  }
}
class oc extends P {
  constructor() {
    const e = {
      vertical: 1,
      horizontal: 1,
      arrowSize: 11,
      useShadows: !0,
      verticalHasArrows: !1,
      horizontalHasArrows: !1,
      horizontalScrollbarSize: 12,
      horizontalSliderSize: 12,
      verticalScrollbarSize: 14,
      verticalSliderSize: 14,
      handleMouseWheel: !0,
      alwaysConsumeMouseWheel: !0,
      scrollByPage: !1,
      ignoreHorizontalScrollbarInContentHeight: !1
    };
    super(104, "scrollbar", e, {
      "editor.scrollbar.vertical": {
        type: "string",
        enum: ["auto", "visible", "hidden"],
        enumDescriptions: [
          r("scrollbar.vertical.auto", "The vertical scrollbar will be visible only when necessary."),
          r("scrollbar.vertical.visible", "The vertical scrollbar will always be visible."),
          r("scrollbar.vertical.fit", "The vertical scrollbar will always be hidden.")
        ],
        default: "auto",
        description: r("scrollbar.vertical", "Controls the visibility of the vertical scrollbar.")
      },
      "editor.scrollbar.horizontal": {
        type: "string",
        enum: ["auto", "visible", "hidden"],
        enumDescriptions: [
          r("scrollbar.horizontal.auto", "The horizontal scrollbar will be visible only when necessary."),
          r("scrollbar.horizontal.visible", "The horizontal scrollbar will always be visible."),
          r("scrollbar.horizontal.fit", "The horizontal scrollbar will always be hidden.")
        ],
        default: "auto",
        description: r("scrollbar.horizontal", "Controls the visibility of the horizontal scrollbar.")
      },
      "editor.scrollbar.verticalScrollbarSize": {
        type: "number",
        default: e.verticalScrollbarSize,
        description: r("scrollbar.verticalScrollbarSize", "The width of the vertical scrollbar.")
      },
      "editor.scrollbar.horizontalScrollbarSize": {
        type: "number",
        default: e.horizontalScrollbarSize,
        description: r("scrollbar.horizontalScrollbarSize", "The height of the horizontal scrollbar.")
      },
      "editor.scrollbar.scrollByPage": {
        type: "boolean",
        default: e.scrollByPage,
        description: r("scrollbar.scrollByPage", "Controls whether clicks scroll by page or jump to click position.")
      },
      "editor.scrollbar.ignoreHorizontalScrollbarInContentHeight": {
        type: "boolean",
        default: e.ignoreHorizontalScrollbarInContentHeight,
        description: r("scrollbar.ignoreHorizontalScrollbarInContentHeight", "When set, the horizontal scrollbar will not increase the size of the editor's content.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e, i = R.clampedInt(t.horizontalScrollbarSize, this.defaultValue.horizontalScrollbarSize, 0, 1e3), o = R.clampedInt(t.verticalScrollbarSize, this.defaultValue.verticalScrollbarSize, 0, 1e3);
    return {
      arrowSize: R.clampedInt(t.arrowSize, this.defaultValue.arrowSize, 0, 1e3),
      vertical: or(t.vertical, this.defaultValue.vertical),
      horizontal: or(t.horizontal, this.defaultValue.horizontal),
      useShadows: C(t.useShadows, this.defaultValue.useShadows),
      verticalHasArrows: C(t.verticalHasArrows, this.defaultValue.verticalHasArrows),
      horizontalHasArrows: C(t.horizontalHasArrows, this.defaultValue.horizontalHasArrows),
      handleMouseWheel: C(t.handleMouseWheel, this.defaultValue.handleMouseWheel),
      alwaysConsumeMouseWheel: C(t.alwaysConsumeMouseWheel, this.defaultValue.alwaysConsumeMouseWheel),
      horizontalScrollbarSize: i,
      horizontalSliderSize: R.clampedInt(t.horizontalSliderSize, i, 0, 1e3),
      verticalScrollbarSize: o,
      verticalSliderSize: R.clampedInt(t.verticalSliderSize, o, 0, 1e3),
      scrollByPage: C(t.scrollByPage, this.defaultValue.scrollByPage),
      ignoreHorizontalScrollbarInContentHeight: C(t.ignoreHorizontalScrollbarInContentHeight, this.defaultValue.ignoreHorizontalScrollbarInContentHeight)
    };
  }
}
const Oe = "inUntrustedWorkspace", at = {
  allowedCharacters: "editor.unicodeHighlight.allowedCharacters",
  invisibleCharacters: "editor.unicodeHighlight.invisibleCharacters",
  nonBasicASCII: "editor.unicodeHighlight.nonBasicASCII",
  ambiguousCharacters: "editor.unicodeHighlight.ambiguousCharacters",
  includeComments: "editor.unicodeHighlight.includeComments",
  includeStrings: "editor.unicodeHighlight.includeStrings",
  allowedLocales: "editor.unicodeHighlight.allowedLocales"
};
class rc extends P {
  constructor() {
    const e = {
      nonBasicASCII: Oe,
      invisibleCharacters: !0,
      ambiguousCharacters: !0,
      includeComments: Oe,
      includeStrings: !0,
      allowedCharacters: {},
      allowedLocales: { _os: !0, _vscode: !0 }
    };
    super(126, "unicodeHighlight", e, {
      [at.nonBasicASCII]: {
        restricted: !0,
        type: ["boolean", "string"],
        enum: [!0, !1, Oe],
        default: e.nonBasicASCII,
        description: r("unicodeHighlight.nonBasicASCII", "Controls whether all non-basic ASCII characters are highlighted. Only characters between U+0020 and U+007E, tab, line-feed and carriage-return are considered basic ASCII.")
      },
      [at.invisibleCharacters]: {
        restricted: !0,
        type: "boolean",
        default: e.invisibleCharacters,
        description: r("unicodeHighlight.invisibleCharacters", "Controls whether characters that just reserve space or have no width at all are highlighted.")
      },
      [at.ambiguousCharacters]: {
        restricted: !0,
        type: "boolean",
        default: e.ambiguousCharacters,
        description: r("unicodeHighlight.ambiguousCharacters", "Controls whether characters are highlighted that can be confused with basic ASCII characters, except those that are common in the current user locale.")
      },
      [at.includeComments]: {
        restricted: !0,
        type: ["boolean", "string"],
        enum: [!0, !1, Oe],
        default: e.includeComments,
        description: r("unicodeHighlight.includeComments", "Controls whether characters in comments should also be subject to Unicode highlighting.")
      },
      [at.includeStrings]: {
        restricted: !0,
        type: ["boolean", "string"],
        enum: [!0, !1, Oe],
        default: e.includeStrings,
        description: r("unicodeHighlight.includeStrings", "Controls whether characters in strings should also be subject to Unicode highlighting.")
      },
      [at.allowedCharacters]: {
        restricted: !0,
        type: "object",
        default: e.allowedCharacters,
        description: r("unicodeHighlight.allowedCharacters", "Defines allowed characters that are not being highlighted."),
        additionalProperties: {
          type: "boolean"
        }
      },
      [at.allowedLocales]: {
        restricted: !0,
        type: "object",
        additionalProperties: {
          type: "boolean"
        },
        default: e.allowedLocales,
        description: r("unicodeHighlight.allowedLocales", "Unicode characters that are common in allowed locales are not being highlighted.")
      }
    });
  }
  applyUpdate(e, t) {
    let i = !1;
    t.allowedCharacters && e && (Qt(e.allowedCharacters, t.allowedCharacters) || (e = { ...e, allowedCharacters: t.allowedCharacters }, i = !0)), t.allowedLocales && e && (Qt(e.allowedLocales, t.allowedLocales) || (e = { ...e, allowedLocales: t.allowedLocales }, i = !0));
    const o = super.applyUpdate(e, t);
    return i ? new Fn(o.newValue, !0) : o;
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      nonBasicASCII: It(t.nonBasicASCII, Oe, [!0, !1, Oe]),
      invisibleCharacters: C(t.invisibleCharacters, this.defaultValue.invisibleCharacters),
      ambiguousCharacters: C(t.ambiguousCharacters, this.defaultValue.ambiguousCharacters),
      includeComments: It(t.includeComments, Oe, [!0, !1, Oe]),
      includeStrings: It(t.includeStrings, Oe, [!0, !1, Oe]),
      allowedCharacters: this.validateBooleanMap(e.allowedCharacters, this.defaultValue.allowedCharacters),
      allowedLocales: this.validateBooleanMap(e.allowedLocales, this.defaultValue.allowedLocales)
    };
  }
  validateBooleanMap(e, t) {
    if (typeof e != "object" || !e)
      return t;
    const i = {};
    for (const [o, s] of Object.entries(e))
      s === !0 && (i[o] = !0);
    return i;
  }
}
class sc extends P {
  constructor() {
    const e = {
      enabled: !0,
      mode: "subwordSmart",
      showToolbar: "onHover",
      suppressSuggestions: !1,
      keepOnBlur: !1,
      fontFamily: "default"
    };
    super(62, "inlineSuggest", e, {
      "editor.inlineSuggest.enabled": {
        type: "boolean",
        default: e.enabled,
        description: r("inlineSuggest.enabled", "Controls whether to automatically show inline suggestions in the editor.")
      },
      "editor.inlineSuggest.showToolbar": {
        type: "string",
        default: e.showToolbar,
        enum: ["always", "onHover", "never"],
        enumDescriptions: [
          r("inlineSuggest.showToolbar.always", "Show the inline suggestion toolbar whenever an inline suggestion is shown."),
          r("inlineSuggest.showToolbar.onHover", "Show the inline suggestion toolbar when hovering over an inline suggestion."),
          r("inlineSuggest.showToolbar.never", "Never show the inline suggestion toolbar.")
        ],
        description: r("inlineSuggest.showToolbar", "Controls when to show the inline suggestion toolbar.")
      },
      "editor.inlineSuggest.suppressSuggestions": {
        type: "boolean",
        default: e.suppressSuggestions,
        description: r("inlineSuggest.suppressSuggestions", "Controls how inline suggestions interact with the suggest widget. If enabled, the suggest widget is not shown automatically when inline suggestions are available.")
      },
      "editor.inlineSuggest.fontFamily": {
        type: "string",
        default: e.fontFamily,
        description: r("inlineSuggest.fontFamily", "Controls the font family of the inline suggestions.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      enabled: C(t.enabled, this.defaultValue.enabled),
      mode: G(t.mode, this.defaultValue.mode, ["prefix", "subword", "subwordSmart"]),
      showToolbar: G(t.showToolbar, this.defaultValue.showToolbar, ["always", "onHover", "never"]),
      suppressSuggestions: C(t.suppressSuggestions, this.defaultValue.suppressSuggestions),
      keepOnBlur: C(t.keepOnBlur, this.defaultValue.keepOnBlur),
      fontFamily: de.string(t.fontFamily, this.defaultValue.fontFamily)
    };
  }
}
class ac extends P {
  constructor() {
    const e = {
      enabled: !1,
      showToolbar: "onHover",
      fontFamily: "default",
      keepOnBlur: !1
    };
    super(63, "experimentalInlineEdit", e, {
      "editor.experimentalInlineEdit.enabled": {
        type: "boolean",
        default: e.enabled,
        description: r("inlineEdit.enabled", "Controls whether to show inline edits in the editor.")
      },
      "editor.experimentalInlineEdit.showToolbar": {
        type: "string",
        default: e.showToolbar,
        enum: ["always", "onHover", "never"],
        enumDescriptions: [
          r("inlineEdit.showToolbar.always", "Show the inline edit toolbar whenever an inline suggestion is shown."),
          r("inlineEdit.showToolbar.onHover", "Show the inline edit toolbar when hovering over an inline suggestion."),
          r("inlineEdit.showToolbar.never", "Never show the inline edit toolbar.")
        ],
        description: r("inlineEdit.showToolbar", "Controls when to show the inline edit toolbar.")
      },
      "editor.experimentalInlineEdit.fontFamily": {
        type: "string",
        default: e.fontFamily,
        description: r("inlineEdit.fontFamily", "Controls the font family of the inline edit.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      enabled: C(t.enabled, this.defaultValue.enabled),
      showToolbar: G(t.showToolbar, this.defaultValue.showToolbar, ["always", "onHover", "never"]),
      fontFamily: de.string(t.fontFamily, this.defaultValue.fontFamily),
      keepOnBlur: C(t.keepOnBlur, this.defaultValue.keepOnBlur)
    };
  }
}
class lc extends P {
  constructor() {
    const e = {
      enabled: ir.bracketPairColorizationOptions.enabled,
      independentColorPoolPerBracketType: ir.bracketPairColorizationOptions.independentColorPoolPerBracketType
    };
    super(15, "bracketPairColorization", e, {
      "editor.bracketPairColorization.enabled": {
        type: "boolean",
        default: e.enabled,
        markdownDescription: r("bracketPairColorization.enabled", "Controls whether bracket pair colorization is enabled or not. Use {0} to override the bracket highlight colors.", "`#workbench.colorCustomizations#`")
      },
      "editor.bracketPairColorization.independentColorPoolPerBracketType": {
        type: "boolean",
        default: e.independentColorPoolPerBracketType,
        description: r("bracketPairColorization.independentColorPoolPerBracketType", "Controls whether each bracket type has its own independent color pool.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      enabled: C(t.enabled, this.defaultValue.enabled),
      independentColorPoolPerBracketType: C(t.independentColorPoolPerBracketType, this.defaultValue.independentColorPoolPerBracketType)
    };
  }
}
class cc extends P {
  constructor() {
    const e = {
      bracketPairs: !1,
      bracketPairsHorizontal: "active",
      highlightActiveBracketPair: !0,
      indentation: !0,
      highlightActiveIndentation: !0
    };
    super(16, "guides", e, {
      "editor.guides.bracketPairs": {
        type: ["boolean", "string"],
        enum: [!0, "active", !1],
        enumDescriptions: [
          r("editor.guides.bracketPairs.true", "Enables bracket pair guides."),
          r("editor.guides.bracketPairs.active", "Enables bracket pair guides only for the active bracket pair."),
          r("editor.guides.bracketPairs.false", "Disables bracket pair guides.")
        ],
        default: e.bracketPairs,
        description: r("editor.guides.bracketPairs", "Controls whether bracket pair guides are enabled or not.")
      },
      "editor.guides.bracketPairsHorizontal": {
        type: ["boolean", "string"],
        enum: [!0, "active", !1],
        enumDescriptions: [
          r("editor.guides.bracketPairsHorizontal.true", "Enables horizontal guides as addition to vertical bracket pair guides."),
          r("editor.guides.bracketPairsHorizontal.active", "Enables horizontal guides only for the active bracket pair."),
          r("editor.guides.bracketPairsHorizontal.false", "Disables horizontal bracket pair guides.")
        ],
        default: e.bracketPairsHorizontal,
        description: r("editor.guides.bracketPairsHorizontal", "Controls whether horizontal bracket pair guides are enabled or not.")
      },
      "editor.guides.highlightActiveBracketPair": {
        type: "boolean",
        default: e.highlightActiveBracketPair,
        description: r("editor.guides.highlightActiveBracketPair", "Controls whether the editor should highlight the active bracket pair.")
      },
      "editor.guides.indentation": {
        type: "boolean",
        default: e.indentation,
        description: r("editor.guides.indentation", "Controls whether the editor should render indent guides.")
      },
      "editor.guides.highlightActiveIndentation": {
        type: ["boolean", "string"],
        enum: [!0, "always", !1],
        enumDescriptions: [
          r("editor.guides.highlightActiveIndentation.true", "Highlights the active indent guide."),
          r("editor.guides.highlightActiveIndentation.always", "Highlights the active indent guide even if bracket guides are highlighted."),
          r("editor.guides.highlightActiveIndentation.false", "Do not highlight the active indent guide.")
        ],
        default: e.highlightActiveIndentation,
        description: r("editor.guides.highlightActiveIndentation", "Controls whether the editor should highlight the active indent guide.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      bracketPairs: It(t.bracketPairs, this.defaultValue.bracketPairs, [!0, !1, "active"]),
      bracketPairsHorizontal: It(t.bracketPairsHorizontal, this.defaultValue.bracketPairsHorizontal, [!0, !1, "active"]),
      highlightActiveBracketPair: C(t.highlightActiveBracketPair, this.defaultValue.highlightActiveBracketPair),
      indentation: C(t.indentation, this.defaultValue.indentation),
      highlightActiveIndentation: It(t.highlightActiveIndentation, this.defaultValue.highlightActiveIndentation, [!0, !1, "always"])
    };
  }
}
function It(n, e, t) {
  const i = t.indexOf(n);
  return i === -1 ? e : t[i];
}
class dc extends P {
  constructor() {
    const e = {
      insertMode: "insert",
      filterGraceful: !0,
      snippetsPreventQuickSuggestions: !1,
      localityBonus: !1,
      shareSuggestSelections: !1,
      selectionMode: "always",
      showIcons: !0,
      showStatusBar: !1,
      preview: !1,
      previewMode: "subwordSmart",
      showInlineDetails: !0,
      showMethods: !0,
      showFunctions: !0,
      showConstructors: !0,
      showDeprecated: !0,
      matchOnWordStartOnly: !0,
      showFields: !0,
      showVariables: !0,
      showClasses: !0,
      showStructs: !0,
      showInterfaces: !0,
      showModules: !0,
      showProperties: !0,
      showEvents: !0,
      showOperators: !0,
      showUnits: !0,
      showValues: !0,
      showConstants: !0,
      showEnums: !0,
      showEnumMembers: !0,
      showKeywords: !0,
      showWords: !0,
      showColors: !0,
      showFiles: !0,
      showReferences: !0,
      showFolders: !0,
      showTypeParameters: !0,
      showSnippets: !0,
      showUsers: !0,
      showIssues: !0
    };
    super(119, "suggest", e, {
      "editor.suggest.insertMode": {
        type: "string",
        enum: ["insert", "replace"],
        enumDescriptions: [
          r("suggest.insertMode.insert", "Insert suggestion without overwriting text right of the cursor."),
          r("suggest.insertMode.replace", "Insert suggestion and overwrite text right of the cursor.")
        ],
        default: e.insertMode,
        description: r("suggest.insertMode", "Controls whether words are overwritten when accepting completions. Note that this depends on extensions opting into this feature.")
      },
      "editor.suggest.filterGraceful": {
        type: "boolean",
        default: e.filterGraceful,
        description: r("suggest.filterGraceful", "Controls whether filtering and sorting suggestions accounts for small typos.")
      },
      "editor.suggest.localityBonus": {
        type: "boolean",
        default: e.localityBonus,
        description: r("suggest.localityBonus", "Controls whether sorting favors words that appear close to the cursor.")
      },
      "editor.suggest.shareSuggestSelections": {
        type: "boolean",
        default: e.shareSuggestSelections,
        markdownDescription: r("suggest.shareSuggestSelections", "Controls whether remembered suggestion selections are shared between multiple workspaces and windows (needs `#editor.suggestSelection#`).")
      },
      "editor.suggest.selectionMode": {
        type: "string",
        enum: ["always", "never", "whenTriggerCharacter", "whenQuickSuggestion"],
        enumDescriptions: [
          r("suggest.insertMode.always", "Always select a suggestion when automatically triggering IntelliSense."),
          r("suggest.insertMode.never", "Never select a suggestion when automatically triggering IntelliSense."),
          r("suggest.insertMode.whenTriggerCharacter", "Select a suggestion only when triggering IntelliSense from a trigger character."),
          r("suggest.insertMode.whenQuickSuggestion", "Select a suggestion only when triggering IntelliSense as you type.")
        ],
        default: e.selectionMode,
        markdownDescription: r("suggest.selectionMode", "Controls whether a suggestion is selected when the widget shows. Note that this only applies to automatically triggered suggestions ({0} and {1}) and that a suggestion is always selected when explicitly invoked, e.g via `Ctrl+Space`.", "`#editor.quickSuggestions#`", "`#editor.suggestOnTriggerCharacters#`")
      },
      "editor.suggest.snippetsPreventQuickSuggestions": {
        type: "boolean",
        default: e.snippetsPreventQuickSuggestions,
        description: r("suggest.snippetsPreventQuickSuggestions", "Controls whether an active snippet prevents quick suggestions.")
      },
      "editor.suggest.showIcons": {
        type: "boolean",
        default: e.showIcons,
        description: r("suggest.showIcons", "Controls whether to show or hide icons in suggestions.")
      },
      "editor.suggest.showStatusBar": {
        type: "boolean",
        default: e.showStatusBar,
        description: r("suggest.showStatusBar", "Controls the visibility of the status bar at the bottom of the suggest widget.")
      },
      "editor.suggest.preview": {
        type: "boolean",
        default: e.preview,
        description: r("suggest.preview", "Controls whether to preview the suggestion outcome in the editor.")
      },
      "editor.suggest.showInlineDetails": {
        type: "boolean",
        default: e.showInlineDetails,
        description: r("suggest.showInlineDetails", "Controls whether suggest details show inline with the label or only in the details widget.")
      },
      "editor.suggest.maxVisibleSuggestions": {
        type: "number",
        deprecationMessage: r("suggest.maxVisibleSuggestions.dep", "This setting is deprecated. The suggest widget can now be resized.")
      },
      "editor.suggest.filteredTypes": {
        type: "object",
        deprecationMessage: r("deprecated", "This setting is deprecated, please use separate settings like 'editor.suggest.showKeywords' or 'editor.suggest.showSnippets' instead.")
      },
      "editor.suggest.showMethods": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showMethods", "When enabled IntelliSense shows `method`-suggestions.")
      },
      "editor.suggest.showFunctions": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showFunctions", "When enabled IntelliSense shows `function`-suggestions.")
      },
      "editor.suggest.showConstructors": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showConstructors", "When enabled IntelliSense shows `constructor`-suggestions.")
      },
      "editor.suggest.showDeprecated": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showDeprecated", "When enabled IntelliSense shows `deprecated`-suggestions.")
      },
      "editor.suggest.matchOnWordStartOnly": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.matchOnWordStartOnly", "When enabled IntelliSense filtering requires that the first character matches on a word start. For example, `c` on `Console` or `WebContext` but _not_ on `description`. When disabled IntelliSense will show more results but still sorts them by match quality.")
      },
      "editor.suggest.showFields": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showFields", "When enabled IntelliSense shows `field`-suggestions.")
      },
      "editor.suggest.showVariables": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showVariables", "When enabled IntelliSense shows `variable`-suggestions.")
      },
      "editor.suggest.showClasses": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showClasss", "When enabled IntelliSense shows `class`-suggestions.")
      },
      "editor.suggest.showStructs": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showStructs", "When enabled IntelliSense shows `struct`-suggestions.")
      },
      "editor.suggest.showInterfaces": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showInterfaces", "When enabled IntelliSense shows `interface`-suggestions.")
      },
      "editor.suggest.showModules": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showModules", "When enabled IntelliSense shows `module`-suggestions.")
      },
      "editor.suggest.showProperties": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showPropertys", "When enabled IntelliSense shows `property`-suggestions.")
      },
      "editor.suggest.showEvents": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showEvents", "When enabled IntelliSense shows `event`-suggestions.")
      },
      "editor.suggest.showOperators": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showOperators", "When enabled IntelliSense shows `operator`-suggestions.")
      },
      "editor.suggest.showUnits": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showUnits", "When enabled IntelliSense shows `unit`-suggestions.")
      },
      "editor.suggest.showValues": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showValues", "When enabled IntelliSense shows `value`-suggestions.")
      },
      "editor.suggest.showConstants": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showConstants", "When enabled IntelliSense shows `constant`-suggestions.")
      },
      "editor.suggest.showEnums": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showEnums", "When enabled IntelliSense shows `enum`-suggestions.")
      },
      "editor.suggest.showEnumMembers": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showEnumMembers", "When enabled IntelliSense shows `enumMember`-suggestions.")
      },
      "editor.suggest.showKeywords": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showKeywords", "When enabled IntelliSense shows `keyword`-suggestions.")
      },
      "editor.suggest.showWords": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showTexts", "When enabled IntelliSense shows `text`-suggestions.")
      },
      "editor.suggest.showColors": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showColors", "When enabled IntelliSense shows `color`-suggestions.")
      },
      "editor.suggest.showFiles": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showFiles", "When enabled IntelliSense shows `file`-suggestions.")
      },
      "editor.suggest.showReferences": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showReferences", "When enabled IntelliSense shows `reference`-suggestions.")
      },
      "editor.suggest.showCustomcolors": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showCustomcolors", "When enabled IntelliSense shows `customcolor`-suggestions.")
      },
      "editor.suggest.showFolders": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showFolders", "When enabled IntelliSense shows `folder`-suggestions.")
      },
      "editor.suggest.showTypeParameters": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showTypeParameters", "When enabled IntelliSense shows `typeParameter`-suggestions.")
      },
      "editor.suggest.showSnippets": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showSnippets", "When enabled IntelliSense shows `snippet`-suggestions.")
      },
      "editor.suggest.showUsers": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showUsers", "When enabled IntelliSense shows `user`-suggestions.")
      },
      "editor.suggest.showIssues": {
        type: "boolean",
        default: !0,
        markdownDescription: r("editor.suggest.showIssues", "When enabled IntelliSense shows `issues`-suggestions.")
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      insertMode: G(t.insertMode, this.defaultValue.insertMode, ["insert", "replace"]),
      filterGraceful: C(t.filterGraceful, this.defaultValue.filterGraceful),
      snippetsPreventQuickSuggestions: C(t.snippetsPreventQuickSuggestions, this.defaultValue.filterGraceful),
      localityBonus: C(t.localityBonus, this.defaultValue.localityBonus),
      shareSuggestSelections: C(t.shareSuggestSelections, this.defaultValue.shareSuggestSelections),
      selectionMode: G(t.selectionMode, this.defaultValue.selectionMode, ["always", "never", "whenQuickSuggestion", "whenTriggerCharacter"]),
      showIcons: C(t.showIcons, this.defaultValue.showIcons),
      showStatusBar: C(t.showStatusBar, this.defaultValue.showStatusBar),
      preview: C(t.preview, this.defaultValue.preview),
      previewMode: G(t.previewMode, this.defaultValue.previewMode, ["prefix", "subword", "subwordSmart"]),
      showInlineDetails: C(t.showInlineDetails, this.defaultValue.showInlineDetails),
      showMethods: C(t.showMethods, this.defaultValue.showMethods),
      showFunctions: C(t.showFunctions, this.defaultValue.showFunctions),
      showConstructors: C(t.showConstructors, this.defaultValue.showConstructors),
      showDeprecated: C(t.showDeprecated, this.defaultValue.showDeprecated),
      matchOnWordStartOnly: C(t.matchOnWordStartOnly, this.defaultValue.matchOnWordStartOnly),
      showFields: C(t.showFields, this.defaultValue.showFields),
      showVariables: C(t.showVariables, this.defaultValue.showVariables),
      showClasses: C(t.showClasses, this.defaultValue.showClasses),
      showStructs: C(t.showStructs, this.defaultValue.showStructs),
      showInterfaces: C(t.showInterfaces, this.defaultValue.showInterfaces),
      showModules: C(t.showModules, this.defaultValue.showModules),
      showProperties: C(t.showProperties, this.defaultValue.showProperties),
      showEvents: C(t.showEvents, this.defaultValue.showEvents),
      showOperators: C(t.showOperators, this.defaultValue.showOperators),
      showUnits: C(t.showUnits, this.defaultValue.showUnits),
      showValues: C(t.showValues, this.defaultValue.showValues),
      showConstants: C(t.showConstants, this.defaultValue.showConstants),
      showEnums: C(t.showEnums, this.defaultValue.showEnums),
      showEnumMembers: C(t.showEnumMembers, this.defaultValue.showEnumMembers),
      showKeywords: C(t.showKeywords, this.defaultValue.showKeywords),
      showWords: C(t.showWords, this.defaultValue.showWords),
      showColors: C(t.showColors, this.defaultValue.showColors),
      showFiles: C(t.showFiles, this.defaultValue.showFiles),
      showReferences: C(t.showReferences, this.defaultValue.showReferences),
      showFolders: C(t.showFolders, this.defaultValue.showFolders),
      showTypeParameters: C(t.showTypeParameters, this.defaultValue.showTypeParameters),
      showSnippets: C(t.showSnippets, this.defaultValue.showSnippets),
      showUsers: C(t.showUsers, this.defaultValue.showUsers),
      showIssues: C(t.showIssues, this.defaultValue.showIssues)
    };
  }
}
class uc extends P {
  constructor() {
    super(114, "smartSelect", {
      selectLeadingAndTrailingWhitespace: !0,
      selectSubwords: !0
    }, {
      "editor.smartSelect.selectLeadingAndTrailingWhitespace": {
        description: r("selectLeadingAndTrailingWhitespace", "Whether leading and trailing whitespace should always be selected."),
        default: !0,
        type: "boolean"
      },
      "editor.smartSelect.selectSubwords": {
        description: r("selectSubwords", "Whether subwords (like 'foo' in 'fooBar' or 'foo_bar') should be selected."),
        default: !0,
        type: "boolean"
      }
    });
  }
  validate(e) {
    return !e || typeof e != "object" ? this.defaultValue : {
      selectLeadingAndTrailingWhitespace: C(e.selectLeadingAndTrailingWhitespace, this.defaultValue.selectLeadingAndTrailingWhitespace),
      selectSubwords: C(e.selectSubwords, this.defaultValue.selectSubwords)
    };
  }
}
class hc extends P {
  constructor() {
    const e = [];
    super(131, "wordSegmenterLocales", e, {
      anyOf: [
        {
          description: r("wordSegmenterLocales", "Locales to be used for word segmentation when doing word related navigations or operations. Specify the BCP 47 language tag of the word you wish to recognize (e.g., ja, zh-CN, zh-Hant-TW, etc.)."),
          type: "string"
        },
        {
          description: r("wordSegmenterLocales", "Locales to be used for word segmentation when doing word related navigations or operations. Specify the BCP 47 language tag of the word you wish to recognize (e.g., ja, zh-CN, zh-Hant-TW, etc.)."),
          type: "array",
          items: {
            type: "string"
          }
        }
      ]
    });
  }
  validate(e) {
    if (typeof e == "string" && (e = [e]), Array.isArray(e)) {
      const t = [];
      for (const i of e)
        if (typeof i == "string")
          try {
            Intl.Segmenter.supportedLocalesOf(i).length > 0 && t.push(i);
          } catch {
          }
      return t;
    }
    return this.defaultValue;
  }
}
class fc extends P {
  constructor() {
    super(139, "wrappingIndent", 1, {
      "editor.wrappingIndent": {
        type: "string",
        enum: ["none", "same", "indent", "deepIndent"],
        enumDescriptions: [
          r("wrappingIndent.none", "No indentation. Wrapped lines begin at column 1."),
          r("wrappingIndent.same", "Wrapped lines get the same indentation as the parent."),
          r("wrappingIndent.indent", "Wrapped lines get +1 indentation toward the parent."),
          r("wrappingIndent.deepIndent", "Wrapped lines get +2 indentation toward the parent.")
        ],
        description: r("wrappingIndent", "Controls the indentation of wrapped lines."),
        default: "same"
      }
    });
  }
  validate(e) {
    switch (e) {
      case "none":
        return 0;
      case "same":
        return 1;
      case "indent":
        return 2;
      case "deepIndent":
        return 3;
    }
    return 1;
  }
  compute(e, t, i) {
    return t.get(
      2
      /* EditorOption.accessibilitySupport */
    ) === 2 ? 0 : i;
  }
}
class gc extends un {
  constructor() {
    super(
      147
      /* EditorOption.wrappingInfo */
    );
  }
  compute(e, t, i) {
    const o = t.get(
      146
      /* EditorOption.layoutInfo */
    );
    return {
      isDominatedByLongLines: e.isDominatedByLongLines,
      isWordWrapMinified: o.isWordWrapMinified,
      isViewportWrapping: o.isViewportWrapping,
      wrappingColumn: o.wrappingColumn
    };
  }
}
class pc extends P {
  constructor() {
    const e = { enabled: !0, showDropSelector: "afterDrop" };
    super(36, "dropIntoEditor", e, {
      "editor.dropIntoEditor.enabled": {
        type: "boolean",
        default: e.enabled,
        markdownDescription: r("dropIntoEditor.enabled", "Controls whether you can drag and drop a file into a text editor by holding down the `Shift` key (instead of opening the file in an editor).")
      },
      "editor.dropIntoEditor.showDropSelector": {
        type: "string",
        markdownDescription: r("dropIntoEditor.showDropSelector", "Controls if a widget is shown when dropping files into the editor. This widget lets you control how the file is dropped."),
        enum: [
          "afterDrop",
          "never"
        ],
        enumDescriptions: [
          r("dropIntoEditor.showDropSelector.afterDrop", "Show the drop selector widget after a file is dropped into the editor."),
          r("dropIntoEditor.showDropSelector.never", "Never show the drop selector widget. Instead the default drop provider is always used.")
        ],
        default: "afterDrop"
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      enabled: C(t.enabled, this.defaultValue.enabled),
      showDropSelector: G(t.showDropSelector, this.defaultValue.showDropSelector, ["afterDrop", "never"])
    };
  }
}
class mc extends P {
  constructor() {
    const e = { enabled: !0, showPasteSelector: "afterPaste" };
    super(85, "pasteAs", e, {
      "editor.pasteAs.enabled": {
        type: "boolean",
        default: e.enabled,
        markdownDescription: r("pasteAs.enabled", "Controls whether you can paste content in different ways.")
      },
      "editor.pasteAs.showPasteSelector": {
        type: "string",
        markdownDescription: r("pasteAs.showPasteSelector", "Controls if a widget is shown when pasting content in to the editor. This widget lets you control how the file is pasted."),
        enum: [
          "afterPaste",
          "never"
        ],
        enumDescriptions: [
          r("pasteAs.showPasteSelector.afterPaste", "Show the paste selector widget after content is pasted into the editor."),
          r("pasteAs.showPasteSelector.never", "Never show the paste selector widget. Instead the default pasting behavior is always used.")
        ],
        default: "afterPaste"
      }
    });
  }
  validate(e) {
    if (!e || typeof e != "object")
      return this.defaultValue;
    const t = e;
    return {
      enabled: C(t.enabled, this.defaultValue.enabled),
      showPasteSelector: G(t.showPasteSelector, this.defaultValue.showPasteSelector, ["afterPaste", "never"])
    };
  }
}
const wc = "Consolas, 'Courier New', monospace", bc = "Menlo, Monaco, 'Courier New', monospace", yc = "'Droid Sans Mono', 'monospace', monospace", Je = {
  fontFamily: De ? bc : en ? yc : wc,
  fontWeight: "normal",
  fontSize: De ? 12 : 14,
  lineHeight: 0,
  letterSpacing: 0
}, Cc = [];
function f(n) {
  return Cc[n.id] = n, n;
}
const df = {
  acceptSuggestionOnCommitCharacter: f(new E(0, "acceptSuggestionOnCommitCharacter", !0, { markdownDescription: r("acceptSuggestionOnCommitCharacter", "Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`;`) can be a commit character that accepts a suggestion and types that character.") })),
  acceptSuggestionOnEnter: f(new V(1, "acceptSuggestionOnEnter", "on", ["on", "smart", "off"], {
    markdownEnumDescriptions: [
      "",
      r("acceptSuggestionOnEnterSmart", "Only accept a suggestion with `Enter` when it makes a textual change."),
      ""
    ],
    markdownDescription: r("acceptSuggestionOnEnter", "Controls whether suggestions should be accepted on `Enter`, in addition to `Tab`. Helps to avoid ambiguity between inserting new lines or accepting suggestions.")
  })),
  accessibilitySupport: f(new I1()),
  accessibilityPageSize: f(new R(3, "accessibilityPageSize", 10, 1, 1073741824, {
    description: r("accessibilityPageSize", "Controls the number of lines in the editor that can be read out by a screen reader at once. When we detect a screen reader we automatically set the default to be 500. Warning: this has a performance implication for numbers larger than the default."),
    tags: ["accessibility"]
  })),
  ariaLabel: f(new de(4, "ariaLabel", r("editorViewAccessibleLabel", "Editor content"))),
  ariaRequired: f(new E(5, "ariaRequired", !1, void 0)),
  screenReaderAnnounceInlineSuggestion: f(new E(8, "screenReaderAnnounceInlineSuggestion", !0, {
    description: r("screenReaderAnnounceInlineSuggestion", "Control whether inline suggestions are announced by a screen reader."),
    tags: ["accessibility"]
  })),
  autoClosingBrackets: f(new V(6, "autoClosingBrackets", "languageDefined", ["always", "languageDefined", "beforeWhitespace", "never"], {
    enumDescriptions: [
      "",
      r("editor.autoClosingBrackets.languageDefined", "Use language configurations to determine when to autoclose brackets."),
      r("editor.autoClosingBrackets.beforeWhitespace", "Autoclose brackets only when the cursor is to the left of whitespace."),
      ""
    ],
    description: r("autoClosingBrackets", "Controls whether the editor should automatically close brackets after the user adds an opening bracket.")
  })),
  autoClosingComments: f(new V(7, "autoClosingComments", "languageDefined", ["always", "languageDefined", "beforeWhitespace", "never"], {
    enumDescriptions: [
      "",
      r("editor.autoClosingComments.languageDefined", "Use language configurations to determine when to autoclose comments."),
      r("editor.autoClosingComments.beforeWhitespace", "Autoclose comments only when the cursor is to the left of whitespace."),
      ""
    ],
    description: r("autoClosingComments", "Controls whether the editor should automatically close comments after the user adds an opening comment.")
  })),
  autoClosingDelete: f(new V(9, "autoClosingDelete", "auto", ["always", "auto", "never"], {
    enumDescriptions: [
      "",
      r("editor.autoClosingDelete.auto", "Remove adjacent closing quotes or brackets only if they were automatically inserted."),
      ""
    ],
    description: r("autoClosingDelete", "Controls whether the editor should remove adjacent closing quotes or brackets when deleting.")
  })),
  autoClosingOvertype: f(new V(10, "autoClosingOvertype", "auto", ["always", "auto", "never"], {
    enumDescriptions: [
      "",
      r("editor.autoClosingOvertype.auto", "Type over closing quotes or brackets only if they were automatically inserted."),
      ""
    ],
    description: r("autoClosingOvertype", "Controls whether the editor should type over closing quotes or brackets.")
  })),
  autoClosingQuotes: f(new V(11, "autoClosingQuotes", "languageDefined", ["always", "languageDefined", "beforeWhitespace", "never"], {
    enumDescriptions: [
      "",
      r("editor.autoClosingQuotes.languageDefined", "Use language configurations to determine when to autoclose quotes."),
      r("editor.autoClosingQuotes.beforeWhitespace", "Autoclose quotes only when the cursor is to the left of whitespace."),
      ""
    ],
    description: r("autoClosingQuotes", "Controls whether the editor should automatically close quotes after the user adds an opening quote.")
  })),
  autoIndent: f(new Ln(12, "autoIndent", 4, "full", ["none", "keep", "brackets", "advanced", "full"], F1, {
    enumDescriptions: [
      r("editor.autoIndent.none", "The editor will not insert indentation automatically."),
      r("editor.autoIndent.keep", "The editor will keep the current line's indentation."),
      r("editor.autoIndent.brackets", "The editor will keep the current line's indentation and honor language defined brackets."),
      r("editor.autoIndent.advanced", "The editor will keep the current line's indentation, honor language defined brackets and invoke special onEnterRules defined by languages."),
      r("editor.autoIndent.full", "The editor will keep the current line's indentation, honor language defined brackets, invoke special onEnterRules defined by languages, and honor indentationRules defined by languages.")
    ],
    description: r("autoIndent", "Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.")
  })),
  automaticLayout: f(new E(13, "automaticLayout", !1)),
  autoSurround: f(new V(14, "autoSurround", "languageDefined", ["languageDefined", "quotes", "brackets", "never"], {
    enumDescriptions: [
      r("editor.autoSurround.languageDefined", "Use language configurations to determine when to automatically surround selections."),
      r("editor.autoSurround.quotes", "Surround with quotes but not brackets."),
      r("editor.autoSurround.brackets", "Surround with brackets but not quotes."),
      ""
    ],
    description: r("autoSurround", "Controls whether the editor should automatically surround selections when typing quotes or brackets.")
  })),
  bracketPairColorization: f(new lc()),
  bracketPairGuides: f(new cc()),
  stickyTabStops: f(new E(117, "stickyTabStops", !1, { description: r("stickyTabStops", "Emulate selection behavior of tab characters when using spaces for indentation. Selection will stick to tab stops.") })),
  codeLens: f(new E(17, "codeLens", !0, { description: r("codeLens", "Controls whether the editor shows CodeLens.") })),
  codeLensFontFamily: f(new de(18, "codeLensFontFamily", "", { description: r("codeLensFontFamily", "Controls the font family for CodeLens.") })),
  codeLensFontSize: f(new R(19, "codeLensFontSize", 0, 0, 100, {
    type: "number",
    default: 0,
    minimum: 0,
    maximum: 100,
    markdownDescription: r("codeLensFontSize", "Controls the font size in pixels for CodeLens. When set to 0, 90% of `#editor.fontSize#` is used.")
  })),
  colorDecorators: f(new E(20, "colorDecorators", !0, { description: r("colorDecorators", "Controls whether the editor should render the inline color decorators and color picker.") })),
  colorDecoratorActivatedOn: f(new V(149, "colorDecoratorsActivatedOn", "clickAndHover", ["clickAndHover", "hover", "click"], {
    enumDescriptions: [
      r("editor.colorDecoratorActivatedOn.clickAndHover", "Make the color picker appear both on click and hover of the color decorator"),
      r("editor.colorDecoratorActivatedOn.hover", "Make the color picker appear on hover of the color decorator"),
      r("editor.colorDecoratorActivatedOn.click", "Make the color picker appear on click of the color decorator")
    ],
    description: r("colorDecoratorActivatedOn", "Controls the condition to make a color picker appear from a color decorator")
  })),
  colorDecoratorsLimit: f(new R(21, "colorDecoratorsLimit", 500, 1, 1e6, {
    markdownDescription: r("colorDecoratorsLimit", "Controls the max number of color decorators that can be rendered in an editor at once.")
  })),
  columnSelection: f(new E(22, "columnSelection", !1, { description: r("columnSelection", "Enable that the selection with the mouse and keys is doing column selection.") })),
  comments: f(new O1()),
  contextmenu: f(new E(24, "contextmenu", !0)),
  copyWithSyntaxHighlighting: f(new E(25, "copyWithSyntaxHighlighting", !0, { description: r("copyWithSyntaxHighlighting", "Controls whether syntax highlighting should be copied into the clipboard.") })),
  cursorBlinking: f(new Ln(26, "cursorBlinking", 1, "blink", ["blink", "smooth", "phase", "expand", "solid"], R1, { description: r("cursorBlinking", "Control the cursor animation style.") })),
  cursorSmoothCaretAnimation: f(new V(27, "cursorSmoothCaretAnimation", "off", ["off", "explicit", "on"], {
    enumDescriptions: [
      r("cursorSmoothCaretAnimation.off", "Smooth caret animation is disabled."),
      r("cursorSmoothCaretAnimation.explicit", "Smooth caret animation is enabled only when the user moves the cursor with an explicit gesture."),
      r("cursorSmoothCaretAnimation.on", "Smooth caret animation is always enabled.")
    ],
    description: r("cursorSmoothCaretAnimation", "Controls whether the smooth caret animation should be enabled.")
  })),
  cursorStyle: f(new Ln(28, "cursorStyle", Ze.Line, "line", ["line", "block", "underline", "line-thin", "block-outline", "underline-thin"], M1, { description: r("cursorStyle", "Controls the cursor style.") })),
  cursorSurroundingLines: f(new R(29, "cursorSurroundingLines", 0, 0, 1073741824, { description: r("cursorSurroundingLines", "Controls the minimal number of visible leading lines (minimum 0) and trailing lines (minimum 1) surrounding the cursor. Known as 'scrollOff' or 'scrollOffset' in some other editors.") })),
  cursorSurroundingLinesStyle: f(new V(30, "cursorSurroundingLinesStyle", "default", ["default", "all"], {
    enumDescriptions: [
      r("cursorSurroundingLinesStyle.default", "`cursorSurroundingLines` is enforced only when triggered via the keyboard or API."),
      r("cursorSurroundingLinesStyle.all", "`cursorSurroundingLines` is enforced always.")
    ],
    markdownDescription: r("cursorSurroundingLinesStyle", "Controls when `#editor.cursorSurroundingLines#` should be enforced.")
  })),
  cursorWidth: f(new R(31, "cursorWidth", 0, 0, 1073741824, { markdownDescription: r("cursorWidth", "Controls the width of the cursor when `#editor.cursorStyle#` is set to `line`.") })),
  disableLayerHinting: f(new E(32, "disableLayerHinting", !1)),
  disableMonospaceOptimizations: f(new E(33, "disableMonospaceOptimizations", !1)),
  domReadOnly: f(new E(34, "domReadOnly", !1)),
  dragAndDrop: f(new E(35, "dragAndDrop", !0, { description: r("dragAndDrop", "Controls whether the editor should allow moving selections via drag and drop.") })),
  emptySelectionClipboard: f(new B1()),
  dropIntoEditor: f(new pc()),
  stickyScroll: f(new K1()),
  experimentalWhitespaceRendering: f(new V(38, "experimentalWhitespaceRendering", "svg", ["svg", "font", "off"], {
    enumDescriptions: [
      r("experimentalWhitespaceRendering.svg", "Use a new rendering method with svgs."),
      r("experimentalWhitespaceRendering.font", "Use a new rendering method with font characters."),
      r("experimentalWhitespaceRendering.off", "Use the stable rendering method.")
    ],
    description: r("experimentalWhitespaceRendering", "Controls whether whitespace is rendered with a new, experimental method.")
  })),
  extraEditorClassName: f(new de(39, "extraEditorClassName", "")),
  fastScrollSensitivity: f(new _e(40, "fastScrollSensitivity", 5, (n) => n <= 0 ? 5 : n, { markdownDescription: r("fastScrollSensitivity", "Scrolling speed multiplier when pressing `Alt`.") })),
  find: f(new W1()),
  fixedOverflowWidgets: f(new E(42, "fixedOverflowWidgets", !1)),
  folding: f(new E(43, "folding", !0, { description: r("folding", "Controls whether the editor has code folding enabled.") })),
  foldingStrategy: f(new V(44, "foldingStrategy", "auto", ["auto", "indentation"], {
    enumDescriptions: [
      r("foldingStrategy.auto", "Use a language-specific folding strategy if available, else the indentation-based one."),
      r("foldingStrategy.indentation", "Use the indentation-based folding strategy.")
    ],
    description: r("foldingStrategy", "Controls the strategy for computing folding ranges.")
  })),
  foldingHighlight: f(new E(45, "foldingHighlight", !0, { description: r("foldingHighlight", "Controls whether the editor should highlight folded ranges.") })),
  foldingImportsByDefault: f(new E(46, "foldingImportsByDefault", !1, { description: r("foldingImportsByDefault", "Controls whether the editor automatically collapses import ranges.") })),
  foldingMaximumRegions: f(new R(
    47,
    "foldingMaximumRegions",
    5e3,
    10,
    65e3,
    // limit must be less than foldingRanges MAX_FOLDING_REGIONS
    { description: r("foldingMaximumRegions", "The maximum number of foldable regions. Increasing this value may result in the editor becoming less responsive when the current source has a large number of foldable regions.") }
  )),
  unfoldOnClickAfterEndOfLine: f(new E(48, "unfoldOnClickAfterEndOfLine", !1, { description: r("unfoldOnClickAfterEndOfLine", "Controls whether clicking on the empty content after a folded line will unfold the line.") })),
  fontFamily: f(new de(49, "fontFamily", Je.fontFamily, { description: r("fontFamily", "Controls the font family.") })),
  fontInfo: f(new P1()),
  fontLigatures2: f(new it()),
  fontSize: f(new N1()),
  fontWeight: f(new dt()),
  fontVariations: f(new ct()),
  formatOnPaste: f(new E(55, "formatOnPaste", !1, { description: r("formatOnPaste", "Controls whether the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.") })),
  formatOnType: f(new E(56, "formatOnType", !1, { description: r("formatOnType", "Controls whether the editor should automatically format the line after typing.") })),
  glyphMargin: f(new E(57, "glyphMargin", !0, { description: r("glyphMargin", "Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.") })),
  gotoLocation: f(new H1()),
  hideCursorInOverviewRuler: f(new E(59, "hideCursorInOverviewRuler", !1, { description: r("hideCursorInOverviewRuler", "Controls whether the cursor should be hidden in the overview ruler.") })),
  hover: f(new V1()),
  inDiffEditor: f(new E(61, "inDiffEditor", !1)),
  letterSpacing: f(new _e(64, "letterSpacing", Je.letterSpacing, (n) => _e.clamp(n, -5, 20), { description: r("letterSpacing", "Controls the letter spacing in pixels.") })),
  lightbulb: f(new U1()),
  lineDecorationsWidth: f(new $1()),
  lineHeight: f(new j1()),
  lineNumbers: f(new tc()),
  lineNumbersMinChars: f(new R(69, "lineNumbersMinChars", 5, 1, 300)),
  linkedEditing: f(new E(70, "linkedEditing", !1, { description: r("linkedEditing", "Controls whether the editor has linked editing enabled. Depending on the language, related symbols such as HTML tags, are updated while editing.") })),
  links: f(new E(71, "links", !0, { description: r("links", "Controls whether the editor should detect links and make them clickable.") })),
  matchBrackets: f(new V(72, "matchBrackets", "always", ["always", "near", "never"], { description: r("matchBrackets", "Highlight matching brackets.") })),
  minimap: f(new q1()),
  mouseStyle: f(new V(74, "mouseStyle", "text", ["text", "default", "copy"])),
  mouseWheelScrollSensitivity: f(new _e(75, "mouseWheelScrollSensitivity", 1, (n) => n === 0 ? 1 : n, { markdownDescription: r("mouseWheelScrollSensitivity", "A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.") })),
  mouseWheelZoom: f(new E(76, "mouseWheelZoom", !1, {
    markdownDescription: De ? r("mouseWheelZoom.mac", "Zoom the font of the editor when using mouse wheel and holding `Cmd`.") : r("mouseWheelZoom", "Zoom the font of the editor when using mouse wheel and holding `Ctrl`.")
  })),
  multiCursorMergeOverlapping: f(new E(77, "multiCursorMergeOverlapping", !0, { description: r("multiCursorMergeOverlapping", "Merge multiple cursors when they are overlapping.") })),
  multiCursorModifier: f(new Ln(78, "multiCursorModifier", "altKey", "alt", ["ctrlCmd", "alt"], Y1, {
    markdownEnumDescriptions: [
      r("multiCursorModifier.ctrlCmd", "Maps to `Control` on Windows and Linux and to `Command` on macOS."),
      r("multiCursorModifier.alt", "Maps to `Alt` on Windows and Linux and to `Option` on macOS.")
    ],
    markdownDescription: r({
      key: "multiCursorModifier",
      comment: [
        "- `ctrlCmd` refers to a value the setting can take and should not be localized.",
        "- `Control` and `Command` refer to the modifier keys Ctrl or Cmd on the keyboard and can be localized."
      ]
    }, "The modifier to be used to add multiple cursors with the mouse. The Go to Definition and Open Link mouse gestures will adapt such that they do not conflict with the [multicursor modifier](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier).")
  })),
  multiCursorPaste: f(new V(79, "multiCursorPaste", "spread", ["spread", "full"], {
    markdownEnumDescriptions: [
      r("multiCursorPaste.spread", "Each cursor pastes a single line of the text."),
      r("multiCursorPaste.full", "Each cursor pastes the full text.")
    ],
    markdownDescription: r("multiCursorPaste", "Controls pasting when the line count of the pasted text matches the cursor count.")
  })),
  multiCursorLimit: f(new R(80, "multiCursorLimit", 1e4, 1, 1e5, {
    markdownDescription: r("multiCursorLimit", "Controls the max number of cursors that can be in an active editor at once.")
  })),
  occurrencesHighlight: f(new V(81, "occurrencesHighlight", "singleFile", ["off", "singleFile", "multiFile"], {
    markdownEnumDescriptions: [
      r("occurrencesHighlight.off", "Does not highlight occurrences."),
      r("occurrencesHighlight.singleFile", "Highlights occurrences only in the current file."),
      r("occurrencesHighlight.multiFile", "Experimental: Highlights occurrences across all valid open files.")
    ],
    markdownDescription: r("occurrencesHighlight", "Controls whether occurrences should be highlighted across open files.")
  })),
  overviewRulerBorder: f(new E(82, "overviewRulerBorder", !0, { description: r("overviewRulerBorder", "Controls whether a border should be drawn around the overview ruler.") })),
  overviewRulerLanes: f(new R(83, "overviewRulerLanes", 3, 0, 3)),
  padding: f(new X1()),
  pasteAs: f(new mc()),
  parameterHints: f(new Z1()),
  peekWidgetDefaultFocus: f(new V(87, "peekWidgetDefaultFocus", "tree", ["tree", "editor"], {
    enumDescriptions: [
      r("peekWidgetDefaultFocus.tree", "Focus the tree when opening peek"),
      r("peekWidgetDefaultFocus.editor", "Focus the editor when opening peek")
    ],
    description: r("peekWidgetDefaultFocus", "Controls whether to focus the inline editor or the tree in the peek widget.")
  })),
  placeholder: f(new J1()),
  definitionLinkOpensInPeek: f(new E(89, "definitionLinkOpensInPeek", !1, { description: r("definitionLinkOpensInPeek", "Controls whether the Go to Definition mouse gesture always opens the peek widget.") })),
  quickSuggestions: f(new ec()),
  quickSuggestionsDelay: f(new R(91, "quickSuggestionsDelay", 10, 0, 1073741824, { description: r("quickSuggestionsDelay", "Controls the delay in milliseconds after which quick suggestions will show up.") })),
  readOnly: f(new E(92, "readOnly", !1)),
  readOnlyMessage: f(new ic()),
  renameOnType: f(new E(94, "renameOnType", !1, { description: r("renameOnType", "Controls whether the editor auto renames on type."), markdownDeprecationMessage: r("renameOnTypeDeprecate", "Deprecated, use `editor.linkedEditing` instead.") })),
  renderControlCharacters: f(new E(95, "renderControlCharacters", !0, { description: r("renderControlCharacters", "Controls whether the editor should render control characters."), restricted: !0 })),
  renderFinalNewline: f(new V(96, "renderFinalNewline", en ? "dimmed" : "on", ["off", "on", "dimmed"], { description: r("renderFinalNewline", "Render last line number when the file ends with a newline.") })),
  renderLineHighlight: f(new V(97, "renderLineHighlight", "line", ["none", "gutter", "line", "all"], {
    enumDescriptions: [
      "",
      "",
      "",
      r("renderLineHighlight.all", "Highlights both the gutter and the current line.")
    ],
    description: r("renderLineHighlight", "Controls how the editor should render the current line highlight.")
  })),
  renderLineHighlightOnlyWhenFocus: f(new E(98, "renderLineHighlightOnlyWhenFocus", !1, { description: r("renderLineHighlightOnlyWhenFocus", "Controls if the editor should render the current line highlight only when the editor is focused.") })),
  renderValidationDecorations: f(new V(99, "renderValidationDecorations", "editable", ["editable", "on", "off"])),
  renderWhitespace: f(new V(100, "renderWhitespace", "selection", ["none", "boundary", "selection", "trailing", "all"], {
    enumDescriptions: [
      "",
      r("renderWhitespace.boundary", "Render whitespace characters except for single spaces between words."),
      r("renderWhitespace.selection", "Render whitespace characters only on selected text."),
      r("renderWhitespace.trailing", "Render only trailing whitespace characters."),
      ""
    ],
    description: r("renderWhitespace", "Controls how the editor should render whitespace characters.")
  })),
  revealHorizontalRightPadding: f(new R(101, "revealHorizontalRightPadding", 15, 0, 1e3)),
  roundedSelection: f(new E(102, "roundedSelection", !0, { description: r("roundedSelection", "Controls whether selections should have rounded corners.") })),
  rulers: f(new nc()),
  scrollbar: f(new oc()),
  scrollBeyondLastColumn: f(new R(105, "scrollBeyondLastColumn", 4, 0, 1073741824, { description: r("scrollBeyondLastColumn", "Controls the number of extra characters beyond which the editor will scroll horizontally.") })),
  scrollBeyondLastLine: f(new E(106, "scrollBeyondLastLine", !0, { description: r("scrollBeyondLastLine", "Controls whether the editor will scroll beyond the last line.") })),
  scrollPredominantAxis: f(new E(107, "scrollPredominantAxis", !0, { description: r("scrollPredominantAxis", "Scroll only along the predominant axis when scrolling both vertically and horizontally at the same time. Prevents horizontal drift when scrolling vertically on a trackpad.") })),
  selectionClipboard: f(new E(108, "selectionClipboard", !0, {
    description: r("selectionClipboard", "Controls whether the Linux primary clipboard should be supported."),
    included: en
  })),
  selectionHighlight: f(new E(109, "selectionHighlight", !0, { description: r("selectionHighlight", "Controls whether the editor should highlight matches similar to the selection.") })),
  selectOnLineNumbers: f(new E(110, "selectOnLineNumbers", !0)),
  showFoldingControls: f(new V(111, "showFoldingControls", "mouseover", ["always", "never", "mouseover"], {
    enumDescriptions: [
      r("showFoldingControls.always", "Always show the folding controls."),
      r("showFoldingControls.never", "Never show the folding controls and reduce the gutter size."),
      r("showFoldingControls.mouseover", "Only show the folding controls when the mouse is over the gutter.")
    ],
    description: r("showFoldingControls", "Controls when the folding controls on the gutter are shown.")
  })),
  showUnused: f(new E(112, "showUnused", !0, { description: r("showUnused", "Controls fading out of unused code.") })),
  showDeprecated: f(new E(141, "showDeprecated", !0, { description: r("showDeprecated", "Controls strikethrough deprecated variables.") })),
  inlayHints: f(new G1()),
  snippetSuggestions: f(new V(113, "snippetSuggestions", "inline", ["top", "bottom", "inline", "none"], {
    enumDescriptions: [
      r("snippetSuggestions.top", "Show snippet suggestions on top of other suggestions."),
      r("snippetSuggestions.bottom", "Show snippet suggestions below other suggestions."),
      r("snippetSuggestions.inline", "Show snippets suggestions with other suggestions."),
      r("snippetSuggestions.none", "Do not show snippet suggestions.")
    ],
    description: r("snippetSuggestions", "Controls whether snippets are shown with other suggestions and how they are sorted.")
  })),
  smartSelect: f(new uc()),
  smoothScrolling: f(new E(115, "smoothScrolling", !1, { description: r("smoothScrolling", "Controls whether the editor will scroll using an animation.") })),
  stopRenderingLineAfter: f(new R(
    118,
    "stopRenderingLineAfter",
    1e4,
    -1,
    1073741824
    /* Constants.MAX_SAFE_SMALL_INTEGER */
  )),
  suggest: f(new dc()),
  inlineSuggest: f(new sc()),
  inlineEdit: f(new ac()),
  inlineCompletionsAccessibilityVerbose: f(new E(150, "inlineCompletionsAccessibilityVerbose", !1, { description: r("inlineCompletionsAccessibilityVerbose", "Controls whether the accessibility hint should be provided to screen reader users when an inline completion is shown.") })),
  suggestFontSize: f(new R(120, "suggestFontSize", 0, 0, 1e3, { markdownDescription: r("suggestFontSize", "Font size for the suggest widget. When set to {0}, the value of {1} is used.", "`0`", "`#editor.fontSize#`") })),
  suggestLineHeight: f(new R(121, "suggestLineHeight", 0, 0, 1e3, { markdownDescription: r("suggestLineHeight", "Line height for the suggest widget. When set to {0}, the value of {1} is used. The minimum value is 8.", "`0`", "`#editor.lineHeight#`") })),
  suggestOnTriggerCharacters: f(new E(122, "suggestOnTriggerCharacters", !0, { description: r("suggestOnTriggerCharacters", "Controls whether suggestions should automatically show up when typing trigger characters.") })),
  suggestSelection: f(new V(123, "suggestSelection", "first", ["first", "recentlyUsed", "recentlyUsedByPrefix"], {
    markdownEnumDescriptions: [
      r("suggestSelection.first", "Always select the first suggestion."),
      r("suggestSelection.recentlyUsed", "Select recent suggestions unless further typing selects one, e.g. `console.| -> console.log` because `log` has been completed recently."),
      r("suggestSelection.recentlyUsedByPrefix", "Select suggestions based on previous prefixes that have completed those suggestions, e.g. `co -> console` and `con -> const`.")
    ],
    description: r("suggestSelection", "Controls how suggestions are pre-selected when showing the suggest list.")
  })),
  tabCompletion: f(new V(124, "tabCompletion", "off", ["on", "off", "onlySnippets"], {
    enumDescriptions: [
      r("tabCompletion.on", "Tab complete will insert the best matching suggestion when pressing tab."),
      r("tabCompletion.off", "Disable tab completions."),
      r("tabCompletion.onlySnippets", "Tab complete snippets when their prefix match. Works best when 'quickSuggestions' aren't enabled.")
    ],
    description: r("tabCompletion", "Enables tab completions.")
  })),
  tabIndex: f(new R(
    125,
    "tabIndex",
    0,
    -1,
    1073741824
    /* Constants.MAX_SAFE_SMALL_INTEGER */
  )),
  unicodeHighlight: f(new rc()),
  unusualLineTerminators: f(new V(127, "unusualLineTerminators", "prompt", ["auto", "off", "prompt"], {
    enumDescriptions: [
      r("unusualLineTerminators.auto", "Unusual line terminators are automatically removed."),
      r("unusualLineTerminators.off", "Unusual line terminators are ignored."),
      r("unusualLineTerminators.prompt", "Unusual line terminators prompt to be removed.")
    ],
    description: r("unusualLineTerminators", "Remove unusual line terminators that might cause problems.")
  })),
  useShadowDOM: f(new E(128, "useShadowDOM", !0)),
  useTabStops: f(new E(129, "useTabStops", !0, { description: r("useTabStops", "Spaces and tabs are inserted and deleted in alignment with tab stops.") })),
  wordBreak: f(new V(130, "wordBreak", "normal", ["normal", "keepAll"], {
    markdownEnumDescriptions: [
      r("wordBreak.normal", "Use the default line break rule."),
      r("wordBreak.keepAll", "Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for normal.")
    ],
    description: r("wordBreak", "Controls the word break rules used for Chinese/Japanese/Korean (CJK) text.")
  })),
  wordSegmenterLocales: f(new hc()),
  wordSeparators: f(new de(132, "wordSeparators", Zr, { description: r("wordSeparators", "Characters that will be used as word separators when doing word related navigations or operations.") })),
  wordWrap: f(new V(133, "wordWrap", "off", ["off", "on", "wordWrapColumn", "bounded"], {
    markdownEnumDescriptions: [
      r("wordWrap.off", "Lines will never wrap."),
      r("wordWrap.on", "Lines will wrap at the viewport width."),
      r({
        key: "wordWrap.wordWrapColumn",
        comment: [
          "- `editor.wordWrapColumn` refers to a different setting and should not be localized."
        ]
      }, "Lines will wrap at `#editor.wordWrapColumn#`."),
      r({
        key: "wordWrap.bounded",
        comment: [
          "- viewport means the edge of the visible window size.",
          "- `editor.wordWrapColumn` refers to a different setting and should not be localized."
        ]
      }, "Lines will wrap at the minimum of viewport and `#editor.wordWrapColumn#`.")
    ],
    description: r({
      key: "wordWrap",
      comment: [
        "- 'off', 'on', 'wordWrapColumn' and 'bounded' refer to values the setting can take and should not be localized.",
        "- `editor.wordWrapColumn` refers to a different setting and should not be localized."
      ]
    }, "Controls how lines should wrap.")
  })),
  wordWrapBreakAfterCharacters: f(new de(
    134,
    "wordWrapBreakAfterCharacters",
    // allow-any-unicode-next-line
    " 	})]?|/&.,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ”〉》」』】〕）］｝｣"
  )),
  wordWrapBreakBeforeCharacters: f(new de(
    135,
    "wordWrapBreakBeforeCharacters",
    // allow-any-unicode-next-line
    "([{‘“〈《「『【〔（［｛｢£¥＄￡￥+＋"
  )),
  wordWrapColumn: f(new R(136, "wordWrapColumn", 80, 1, 1073741824, {
    markdownDescription: r({
      key: "wordWrapColumn",
      comment: [
        "- `editor.wordWrap` refers to a different setting and should not be localized.",
        "- 'wordWrapColumn' and 'bounded' refer to values the different setting can take and should not be localized."
      ]
    }, "Controls the wrapping column of the editor when `#editor.wordWrap#` is `wordWrapColumn` or `bounded`.")
  })),
  wordWrapOverride1: f(new V(137, "wordWrapOverride1", "inherit", ["off", "on", "inherit"])),
  wordWrapOverride2: f(new V(138, "wordWrapOverride2", "inherit", ["off", "on", "inherit"])),
  // Leave these at the end (because they have dependencies!)
  editorClassName: f(new x1()),
  defaultColorDecorators: f(new E(148, "defaultColorDecorators", !1, { markdownDescription: r("defaultColorDecorators", "Controls whether inline color decorations should be shown using the default document color provider") })),
  pixelRatio: f(new Q1()),
  tabFocusMode: f(new E(145, "tabFocusMode", !1, { markdownDescription: r("tabFocusMode", "Controls whether the editor receives tabs or defers them to the workbench for navigation.") })),
  layoutInfo: f(new Jt()),
  wrappingInfo: f(new gc()),
  wrappingIndent: f(new fc()),
  wrappingStrategy: f(new z1())
}, kc = /* @__PURE__ */ (function() {
  return In ? !0 : !(en || On || xi);
})();
let Ot = !0;
class uf {
  constructor(e, t) {
    this.themeType = t;
    const i = e.options, o = i.get(
      50
      /* EditorOption.fontInfo */
    );
    i.get(
      38
      /* EditorOption.experimentalWhitespaceRendering */
    ) === "off" ? this.renderWhitespace = i.get(
      100
      /* EditorOption.renderWhitespace */
    ) : this.renderWhitespace = "none", this.renderControlCharacters = i.get(
      95
      /* EditorOption.renderControlCharacters */
    ), this.spaceWidth = o.spaceWidth, this.middotWidth = o.middotWidth, this.wsmiddotWidth = o.wsmiddotWidth, this.useMonospaceOptimizations = o.isMonospace && !i.get(
      33
      /* EditorOption.disableMonospaceOptimizations */
    ), this.canUseHalfwidthRightwardsArrow = o.canUseHalfwidthRightwardsArrow, this.lineHeight = i.get(
      67
      /* EditorOption.lineHeight */
    ), this.stopRenderingLineAfter = i.get(
      118
      /* EditorOption.stopRenderingLineAfter */
    ), this.fontLigatures = i.get(
      51
      /* EditorOption.fontLigatures */
    );
  }
  equals(e) {
    return this.themeType === e.themeType && this.renderWhitespace === e.renderWhitespace && this.renderControlCharacters === e.renderControlCharacters && this.spaceWidth === e.spaceWidth && this.middotWidth === e.middotWidth && this.wsmiddotWidth === e.wsmiddotWidth && this.useMonospaceOptimizations === e.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === e.canUseHalfwidthRightwardsArrow && this.lineHeight === e.lineHeight && this.stopRenderingLineAfter === e.stopRenderingLineAfter && this.fontLigatures === e.fontLigatures;
  }
}
class ut {
  static {
    this.CLASS_NAME = "view-line";
  }
  constructor(e) {
    this._options = e, this._isMaybeInvalid = !0, this._renderedViewLine = null;
  }
  // --- begin IVisibleLineData
  getDomNode() {
    return this._renderedViewLine && this._renderedViewLine.domNode ? this._renderedViewLine.domNode.domNode : null;
  }
  setDomNode(e) {
    if (this._renderedViewLine)
      this._renderedViewLine.domNode = ql(e);
    else
      throw new Error("I have no rendered view line to set the dom node to...");
  }
  onContentChanged() {
    this._isMaybeInvalid = !0;
  }
  onTokensChanged() {
    this._isMaybeInvalid = !0;
  }
  onDecorationsChanged() {
    this._isMaybeInvalid = !0;
  }
  onOptionsChanged(e) {
    this._isMaybeInvalid = !0, this._options = e;
  }
  onSelectionChanged() {
    return bi(this._options.themeType) || this._options.renderWhitespace === "selection" ? (this._isMaybeInvalid = !0, !0) : !1;
  }
  renderLine(e, t, i, o, s) {
    if (this._isMaybeInvalid === !1)
      return !1;
    this._isMaybeInvalid = !1;
    const a = o.getViewLineRenderingData(e), l = this._options, d = Ue.filter(a.inlineDecorations, e, a.minColumn, a.maxColumn);
    let u = null;
    if (bi(l.themeType) || this._options.renderWhitespace === "selection") {
      const p = o.selections;
      for (const k of p) {
        if (k.endLineNumber < e || k.startLineNumber > e)
          continue;
        const v = k.startLineNumber === e ? k.startColumn : a.minColumn, T = k.endLineNumber === e ? k.endColumn : a.maxColumn;
        v < T && (bi(l.themeType) && d.push(new Ue(
          v,
          T,
          "inline-selected-text",
          0
          /* InlineDecorationType.Regular */
        )), this._options.renderWhitespace === "selection" && (u || (u = []), u.push(new n1(v - 1, T - 1))));
      }
    }
    const g = new i1(l.useMonospaceOptimizations, l.canUseHalfwidthRightwardsArrow, a.content, a.continuesWithWrappedLine, a.isBasicASCII, a.containsRTL, a.minColumn - 1, a.tokens, d, a.tabSize, a.startVisibleColumn, l.spaceWidth, l.middotWidth, l.wsmiddotWidth, l.stopRenderingLineAfter, l.renderWhitespace, l.renderControlCharacters, l.fontLigatures !== it.OFF, u);
    if (this._renderedViewLine && this._renderedViewLine.input.equals(g))
      return !1;
    s.appendString('<div style="top:'), s.appendString(String(t)), s.appendString("px;height:"), s.appendString(String(i)), s.appendString('px;" class="'), s.appendString(ut.CLASS_NAME), s.appendString('">');
    const w = jr(g, s);
    s.appendString("</div>");
    let b = null;
    return Ot && kc && a.isBasicASCII && l.useMonospaceOptimizations && w.containsForeignElements === 0 && (b = new _n(this._renderedViewLine ? this._renderedViewLine.domNode : null, g, w.characterMapping)), b || (b = es(this._renderedViewLine ? this._renderedViewLine.domNode : null, g, w.characterMapping, w.containsRTL, w.containsForeignElements)), this._renderedViewLine = b, !0;
  }
  layoutLine(e, t, i) {
    this._renderedViewLine && this._renderedViewLine.domNode && (this._renderedViewLine.domNode.setTop(t), this._renderedViewLine.domNode.setHeight(i));
  }
  // --- end IVisibleLineData
  getWidth(e) {
    return this._renderedViewLine ? this._renderedViewLine.getWidth(e) : 0;
  }
  getWidthIsFast() {
    return this._renderedViewLine ? this._renderedViewLine.getWidthIsFast() : !0;
  }
  needsMonospaceFontCheck() {
    return this._renderedViewLine ? this._renderedViewLine instanceof _n : !1;
  }
  monospaceAssumptionsAreValid() {
    return this._renderedViewLine && this._renderedViewLine instanceof _n ? this._renderedViewLine.monospaceAssumptionsAreValid() : Ot;
  }
  onMonospaceAssumptionsInvalidated() {
    this._renderedViewLine && this._renderedViewLine instanceof _n && (this._renderedViewLine = this._renderedViewLine.toSlowRenderedLine());
  }
  getVisibleRangesForRange(e, t, i, o) {
    if (!this._renderedViewLine)
      return null;
    t = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, t)), i = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, i));
    const s = this._renderedViewLine.input.stopRenderingLineAfter;
    if (s !== -1 && t > s + 1 && i > s + 1)
      return new Jo(!0, [new mt(this.getWidth(o), 0)]);
    s !== -1 && t > s + 1 && (t = s + 1), s !== -1 && i > s + 1 && (i = s + 1);
    const a = this._renderedViewLine.getVisibleRangesForRange(e, t, i, o);
    return a && a.length > 0 ? new Jo(!1, a) : null;
  }
  getColumnOfNodeOffset(e, t) {
    return this._renderedViewLine ? this._renderedViewLine.getColumnOfNodeOffset(e, t) : 1;
  }
}
class _n {
  constructor(e, t, i) {
    this._cachedWidth = -1, this.domNode = e, this.input = t;
    const o = Math.floor(
      t.lineContent.length / 300
      /* Constants.MaxMonospaceDistance */
    );
    if (o > 0) {
      this._keyColumnPixelOffsetCache = new Float32Array(o);
      for (let s = 0; s < o; s++)
        this._keyColumnPixelOffsetCache[s] = -1;
    } else
      this._keyColumnPixelOffsetCache = null;
    this._characterMapping = i, this._charWidth = t.spaceWidth;
  }
  getWidth(e) {
    if (!this.domNode || this.input.lineContent.length < 300) {
      const t = this._characterMapping.getHorizontalOffset(this._characterMapping.length);
      return Math.round(this._charWidth * t);
    }
    return this._cachedWidth === -1 && (this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth, e?.markDidDomLayout()), this._cachedWidth;
  }
  getWidthIsFast() {
    return this.input.lineContent.length < 300 || this._cachedWidth !== -1;
  }
  monospaceAssumptionsAreValid() {
    if (!this.domNode)
      return Ot;
    if (this.input.lineContent.length < 300) {
      const e = this.getWidth(null), t = this.domNode.domNode.firstChild.offsetWidth;
      Math.abs(e - t) >= 2 && (console.warn("monospace assumptions have been violated, therefore disabling monospace optimizations!"), Ot = !1);
    }
    return Ot;
  }
  toSlowRenderedLine() {
    return es(
      this.domNode,
      this.input,
      this._characterMapping,
      !1,
      0
      /* ForeignElementType.None */
    );
  }
  getVisibleRangesForRange(e, t, i, o) {
    const s = this._getColumnPixelOffset(e, t, o), a = this._getColumnPixelOffset(e, i, o);
    return [new mt(s, a - s)];
  }
  _getColumnPixelOffset(e, t, i) {
    if (t <= 300) {
      const u = this._characterMapping.getHorizontalOffset(t);
      return this._charWidth * u;
    }
    const o = Math.floor(
      (t - 1) / 300
      /* Constants.MaxMonospaceDistance */
    ) - 1, s = (o + 1) * 300 + 1;
    let a = -1;
    if (this._keyColumnPixelOffsetCache && (a = this._keyColumnPixelOffsetCache[o], a === -1 && (a = this._actualReadPixelOffset(e, s, i), this._keyColumnPixelOffsetCache[o] = a)), a === -1) {
      const u = this._characterMapping.getHorizontalOffset(t);
      return this._charWidth * u;
    }
    const l = this._characterMapping.getHorizontalOffset(s), d = this._characterMapping.getHorizontalOffset(t);
    return a + this._charWidth * (d - l);
  }
  _getReadingTarget(e) {
    return e.domNode.firstChild;
  }
  _actualReadPixelOffset(e, t, i) {
    if (!this.domNode)
      return -1;
    const o = this._characterMapping.getDomPosition(t), s = En.readHorizontalRanges(this._getReadingTarget(this.domNode), o.partIndex, o.charIndex, o.partIndex, o.charIndex, i);
    return !s || s.length === 0 ? -1 : s[0].left;
  }
  getColumnOfNodeOffset(e, t) {
    return ts(this._characterMapping, e, t);
  }
}
class Jr {
  constructor(e, t, i, o, s) {
    if (this.domNode = e, this.input = t, this._characterMapping = i, this._isWhitespaceOnly = /^\s*$/.test(t.lineContent), this._containsForeignElements = s, this._cachedWidth = -1, this._pixelOffsetCache = null, !o || this._characterMapping.length === 0) {
      this._pixelOffsetCache = new Float32Array(Math.max(2, this._characterMapping.length + 1));
      for (let a = 0, l = this._characterMapping.length; a <= l; a++)
        this._pixelOffsetCache[a] = -1;
    }
  }
  // --- Reading from the DOM methods
  _getReadingTarget(e) {
    return e.domNode.firstChild;
  }
  /**
   * Width of the line in pixels
   */
  getWidth(e) {
    return this.domNode ? (this._cachedWidth === -1 && (this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth, e?.markDidDomLayout()), this._cachedWidth) : 0;
  }
  getWidthIsFast() {
    return this._cachedWidth !== -1;
  }
  /**
   * Visible ranges for a model range
   */
  getVisibleRangesForRange(e, t, i, o) {
    if (!this.domNode)
      return null;
    if (this._pixelOffsetCache !== null) {
      const s = this._readPixelOffset(this.domNode, e, t, o);
      if (s === -1)
        return null;
      const a = this._readPixelOffset(this.domNode, e, i, o);
      return a === -1 ? null : [new mt(s, a - s)];
    }
    return this._readVisibleRangesForRange(this.domNode, e, t, i, o);
  }
  _readVisibleRangesForRange(e, t, i, o, s) {
    if (i === o) {
      const a = this._readPixelOffset(e, t, i, s);
      return a === -1 ? null : [new mt(a, 0)];
    } else
      return this._readRawVisibleRangesForRange(e, i, o, s);
  }
  _readPixelOffset(e, t, i, o) {
    if (this._characterMapping.length === 0) {
      if (this._containsForeignElements === 0 || this._containsForeignElements === 2)
        return 0;
      if (this._containsForeignElements === 1)
        return this.getWidth(o);
      const s = this._getReadingTarget(e);
      return s.firstChild ? (o.markDidDomLayout(), s.firstChild.offsetWidth) : 0;
    }
    if (this._pixelOffsetCache !== null) {
      const s = this._pixelOffsetCache[i];
      if (s !== -1)
        return s;
      const a = this._actualReadPixelOffset(e, t, i, o);
      return this._pixelOffsetCache[i] = a, a;
    }
    return this._actualReadPixelOffset(e, t, i, o);
  }
  _actualReadPixelOffset(e, t, i, o) {
    if (this._characterMapping.length === 0) {
      const d = En.readHorizontalRanges(this._getReadingTarget(e), 0, 0, 0, 0, o);
      return !d || d.length === 0 ? -1 : d[0].left;
    }
    if (i === this._characterMapping.length && this._isWhitespaceOnly && this._containsForeignElements === 0)
      return this.getWidth(o);
    const s = this._characterMapping.getDomPosition(i), a = En.readHorizontalRanges(this._getReadingTarget(e), s.partIndex, s.charIndex, s.partIndex, s.charIndex, o);
    if (!a || a.length === 0)
      return -1;
    const l = a[0].left;
    if (this.input.isBasicASCII) {
      const d = this._characterMapping.getHorizontalOffset(i), u = Math.round(this.input.spaceWidth * d);
      if (Math.abs(u - l) <= 1)
        return u;
    }
    return l;
  }
  _readRawVisibleRangesForRange(e, t, i, o) {
    if (t === 1 && i === this._characterMapping.length)
      return [new mt(0, this.getWidth(o))];
    const s = this._characterMapping.getDomPosition(t), a = this._characterMapping.getDomPosition(i);
    return En.readHorizontalRanges(this._getReadingTarget(e), s.partIndex, s.charIndex, a.partIndex, a.charIndex, o);
  }
  /**
   * Returns the column for the text found at a specific offset inside a rendered dom node
   */
  getColumnOfNodeOffset(e, t) {
    return ts(this._characterMapping, e, t);
  }
}
class vc extends Jr {
  _readVisibleRangesForRange(e, t, i, o, s) {
    const a = super._readVisibleRangesForRange(e, t, i, o, s);
    if (!a || a.length === 0 || i === o || i === 1 && o === this._characterMapping.length)
      return a;
    if (!this.input.containsRTL) {
      const l = this._readPixelOffset(e, t, o, s);
      if (l !== -1) {
        const d = a[a.length - 1];
        d.left < l && (d.width = l - d.left);
      }
    }
    return a;
  }
}
const es = /* @__PURE__ */ (function() {
  return Ri ? Sc : Lc;
})();
function Sc(n, e, t, i, o) {
  return new vc(n, e, t, i, o);
}
function Lc(n, e, t, i, o) {
  return new Jr(n, e, t, i, o);
}
function ts(n, e, t) {
  const i = e.textContent.length;
  let o = -1;
  for (; e; )
    e = e.previousSibling, o++;
  return n.getColumn(new $r(o, t), i);
}
class gt {
  static _nextVisibleColumn(e, t, i) {
    return e === 9 ? gt.nextRenderTabStop(t, i) : Ni(e) || yr(e) ? t + 2 : t + 1;
  }
  /**
   * Returns a visible column from a column.
   * @see {@link CursorColumns}
   */
  static visibleColumnFromColumn(e, t, i) {
    const o = Math.min(t - 1, e.length), s = e.substring(0, o), a = new Rn(s);
    let l = 0;
    for (; !a.eol(); ) {
      const d = Si(s, o, a.offset);
      a.nextGraphemeLength(), l = this._nextVisibleColumn(d, l, i);
    }
    return l;
  }
  /**
   * Returns a column from a visible column.
   * @see {@link CursorColumns}
   */
  static columnFromVisibleColumn(e, t, i) {
    if (t <= 0)
      return 1;
    const o = e.length, s = new Rn(e);
    let a = 0, l = 1;
    for (; !s.eol(); ) {
      const d = Si(e, o, s.offset);
      s.nextGraphemeLength();
      const u = this._nextVisibleColumn(d, a, i), g = s.offset + 1;
      if (u >= t) {
        const w = t - a;
        return u - t < w ? g : l;
      }
      a = u, l = g;
    }
    return o + 1;
  }
  /**
   * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
   * @see {@link CursorColumns}
   */
  static nextRenderTabStop(e, t) {
    return e + t - e % t;
  }
  /**
   * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
   * @see {@link CursorColumns}
   */
  static nextIndentTabStop(e, t) {
    return e + t - e % t;
  }
  /**
   * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
   * @see {@link CursorColumns}
   */
  static prevRenderTabStop(e, t) {
    return Math.max(0, e - 1 - (e - 1) % t);
  }
  /**
   * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
   * @see {@link CursorColumns}
   */
  static prevIndentTabStop(e, t) {
    return Math.max(0, e - 1 - (e - 1) % t);
  }
}
class Qi {
  /**
   * Get the visible column at the position. If we get to a non-whitespace character first
   * or past the end of string then return -1.
   *
   * **Note** `position` and the return value are 0-based.
   */
  static whitespaceVisibleColumn(e, t, i) {
    const o = e.length;
    let s = 0, a = -1, l = -1;
    for (let d = 0; d < o; d++) {
      if (d === t)
        return [a, l, s];
      switch (s % i === 0 && (a = d, l = s), e.charCodeAt(d)) {
        case 32:
          s += 1;
          break;
        case 9:
          s = gt.nextRenderTabStop(s, i);
          break;
        default:
          return [-1, -1, -1];
      }
    }
    return t === o ? [a, l, s] : [-1, -1, -1];
  }
  /**
   * Return the position that should result from a move left, right or to the
   * nearest tab, if atomic tabs are enabled. Left and right are used for the
   * arrow key movements, nearest is used for mouse selection. It returns
   * -1 if atomic tabs are not relevant and you should fall back to normal
   * behaviour.
   *
   * **Note**: `position` and the return value are 0-based.
   */
  static atomicPosition(e, t, i, o) {
    const s = e.length, [a, l, d] = Qi.whitespaceVisibleColumn(e, t, i);
    if (d === -1)
      return -1;
    let u;
    switch (o) {
      case 0:
        u = !0;
        break;
      case 1:
        u = !1;
        break;
      case 2:
        if (d % i === 0)
          return t;
        u = d % i <= i / 2;
        break;
    }
    if (u) {
      if (a === -1)
        return -1;
      let b = l;
      for (let p = a; p < s; ++p) {
        if (b === l + i)
          return a;
        switch (e.charCodeAt(p)) {
          case 32:
            b += 1;
            break;
          case 9:
            b = gt.nextRenderTabStop(b, i);
            break;
          default:
            return -1;
        }
      }
      return b === l + i ? a : -1;
    }
    const g = gt.nextRenderTabStop(d, i);
    let w = d;
    for (let b = t; b < s; b++) {
      if (w === g)
        return b;
      switch (e.charCodeAt(b)) {
        case 32:
          w += 1;
          break;
        case 9:
          w = gt.nextRenderTabStop(w, i);
          break;
        default:
          return -1;
      }
    }
    return w === g ? s : -1;
  }
}
class tt {
  constructor(e = null) {
    this.hitTarget = e, this.type = 0;
  }
}
class ns {
  get hitTarget() {
    return this.spanNode;
  }
  constructor(e, t, i) {
    this.position = e, this.spanNode = t, this.injectedText = i, this.type = 1;
  }
}
var ht;
(function(n) {
  function e(t, i, o) {
    const s = t.getPositionFromDOMInfo(i, o);
    return s ? new ns(s, i, null) : new tt(i);
  }
  n.createFromDOMInfo = e;
})(ht || (ht = {}));
class _c {
  constructor(e, t) {
    this.lastViewCursorsRenderData = e, this.lastTextareaPosition = t;
  }
}
class He {
  static _deduceRage(e, t = null) {
    return !t && e ? new nn(e.lineNumber, e.column, e.lineNumber, e.column) : t ?? null;
  }
  static createUnknown(e, t, i) {
    return { type: 0, element: e, mouseColumn: t, position: i, range: this._deduceRage(i) };
  }
  static createTextarea(e, t) {
    return { type: 1, element: e, mouseColumn: t, position: null, range: null };
  }
  static createMargin(e, t, i, o, s, a) {
    return { type: e, element: t, mouseColumn: i, position: o, range: s, detail: a };
  }
  static createViewZone(e, t, i, o, s) {
    return { type: e, element: t, mouseColumn: i, position: o, range: this._deduceRage(o), detail: s };
  }
  static createContentText(e, t, i, o, s) {
    return { type: 6, element: e, mouseColumn: t, position: i, range: this._deduceRage(i, o), detail: s };
  }
  static createContentEmpty(e, t, i, o) {
    return { type: 7, element: e, mouseColumn: t, position: i, range: this._deduceRage(i), detail: o };
  }
  static createContentWidget(e, t, i) {
    return { type: 9, element: e, mouseColumn: t, position: null, range: null, detail: i };
  }
  static createScrollbar(e, t, i) {
    return { type: 11, element: e, mouseColumn: t, position: i, range: this._deduceRage(i) };
  }
  static createOverlayWidget(e, t, i) {
    return { type: 12, element: e, mouseColumn: t, position: null, range: null, detail: i };
  }
  static createOutsideEditor(e, t, i, o) {
    return { type: 13, element: null, mouseColumn: e, position: t, range: this._deduceRage(t), outsidePosition: i, outsideDistance: o };
  }
  static _typeToString(e) {
    return e === 1 ? "TEXTAREA" : e === 2 ? "GUTTER_GLYPH_MARGIN" : e === 3 ? "GUTTER_LINE_NUMBERS" : e === 4 ? "GUTTER_LINE_DECORATIONS" : e === 5 ? "GUTTER_VIEW_ZONE" : e === 6 ? "CONTENT_TEXT" : e === 7 ? "CONTENT_EMPTY" : e === 8 ? "CONTENT_VIEW_ZONE" : e === 9 ? "CONTENT_WIDGET" : e === 10 ? "OVERVIEW_RULER" : e === 11 ? "SCROLLBAR" : e === 12 ? "OVERLAY_WIDGET" : "UNKNOWN";
  }
  static toString(e) {
    return this._typeToString(e.type) + ": " + e.position + " - " + e.range + " - " + JSON.stringify(e.detail);
  }
}
class fe {
  static isTextArea(e) {
    return e.length === 2 && e[0] === 3 && e[1] === 7;
  }
  static isChildOfViewLines(e) {
    return e.length >= 4 && e[0] === 3 && e[3] === 8;
  }
  static isStrictChildOfViewLines(e) {
    return e.length > 4 && e[0] === 3 && e[3] === 8;
  }
  static isChildOfScrollableElement(e) {
    return e.length >= 2 && e[0] === 3 && e[1] === 6;
  }
  static isChildOfMinimap(e) {
    return e.length >= 2 && e[0] === 3 && e[1] === 9;
  }
  static isChildOfContentWidgets(e) {
    return e.length >= 4 && e[0] === 3 && e[3] === 1;
  }
  static isChildOfOverflowGuard(e) {
    return e.length >= 1 && e[0] === 3;
  }
  static isChildOfOverflowingContentWidgets(e) {
    return e.length >= 1 && e[0] === 2;
  }
  static isChildOfOverlayWidgets(e) {
    return e.length >= 2 && e[0] === 3 && e[1] === 4;
  }
  static isChildOfOverflowingOverlayWidgets(e) {
    return e.length >= 1 && e[0] === 5;
  }
}
class ln {
  constructor(e, t, i) {
    this.viewModel = e.viewModel;
    const o = e.configuration.options;
    this.layoutInfo = o.get(
      146
      /* EditorOption.layoutInfo */
    ), this.viewDomNode = t.viewDomNode, this.lineHeight = o.get(
      67
      /* EditorOption.lineHeight */
    ), this.stickyTabStops = o.get(
      117
      /* EditorOption.stickyTabStops */
    ), this.typicalHalfwidthCharacterWidth = o.get(
      50
      /* EditorOption.fontInfo */
    ).typicalHalfwidthCharacterWidth, this.lastRenderData = i, this._context = e, this._viewHelper = t;
  }
  getZoneAtCoord(e) {
    return ln.getZoneAtCoord(this._context, e);
  }
  static getZoneAtCoord(e, t) {
    const i = e.viewLayout.getWhitespaceAtVerticalOffset(t);
    if (i) {
      const o = i.verticalOffset + i.height / 2, s = e.viewModel.getLineCount();
      let a = null, l, d = null;
      return i.afterLineNumber !== s && (d = new Ae(i.afterLineNumber + 1, 1)), i.afterLineNumber > 0 && (a = new Ae(i.afterLineNumber, e.viewModel.getLineMaxColumn(i.afterLineNumber))), d === null ? l = a : a === null ? l = d : t < o ? l = a : l = d, {
        viewZoneId: i.id,
        afterLineNumber: i.afterLineNumber,
        positionBefore: a,
        positionAfter: d,
        position: l
      };
    }
    return null;
  }
  getFullLineRangeAtCoord(e) {
    if (this._context.viewLayout.isAfterLines(e)) {
      const o = this._context.viewModel.getLineCount(), s = this._context.viewModel.getLineMaxColumn(o);
      return {
        range: new nn(o, s, o, s),
        isAfterLines: !0
      };
    }
    const t = this._context.viewLayout.getLineNumberAtVerticalOffset(e), i = this._context.viewModel.getLineMaxColumn(t);
    return {
      range: new nn(t, 1, t, i),
      isAfterLines: !1
    };
  }
  getLineNumberAtVerticalOffset(e) {
    return this._context.viewLayout.getLineNumberAtVerticalOffset(e);
  }
  isAfterLines(e) {
    return this._context.viewLayout.isAfterLines(e);
  }
  isInTopPadding(e) {
    return this._context.viewLayout.isInTopPadding(e);
  }
  isInBottomPadding(e) {
    return this._context.viewLayout.isInBottomPadding(e);
  }
  getVerticalOffsetForLineNumber(e) {
    return this._context.viewLayout.getVerticalOffsetForLineNumber(e);
  }
  findAttribute(e, t) {
    return ln._findAttribute(e, t, this._viewHelper.viewDomNode);
  }
  static _findAttribute(e, t, i) {
    for (; e && e !== e.ownerDocument.body; ) {
      if (e.hasAttribute && e.hasAttribute(t))
        return e.getAttribute(t);
      if (e === i)
        return null;
      e = e.parentNode;
    }
    return null;
  }
  getLineWidth(e) {
    return this._viewHelper.getLineWidth(e);
  }
  visibleRangeForPosition(e, t) {
    return this._viewHelper.visibleRangeForPosition(e, t);
  }
  getPositionFromDOMInfo(e, t) {
    return this._viewHelper.getPositionFromDOMInfo(e, t);
  }
  getCurrentScrollTop() {
    return this._context.viewLayout.getCurrentScrollTop();
  }
  getCurrentScrollLeft() {
    return this._context.viewLayout.getCurrentScrollLeft();
  }
}
class Dc {
  constructor(e, t, i, o) {
    this.editorPos = t, this.pos = i, this.relativePos = o, this.mouseVerticalOffset = Math.max(0, e.getCurrentScrollTop() + this.relativePos.y), this.mouseContentHorizontalOffset = e.getCurrentScrollLeft() + this.relativePos.x - e.layoutInfo.contentLeft, this.isInMarginArea = this.relativePos.x < e.layoutInfo.contentLeft && this.relativePos.x >= e.layoutInfo.glyphMarginLeft, this.isInContentArea = !this.isInMarginArea, this.mouseColumn = Math.max(0, ce._getMouseColumn(this.mouseContentHorizontalOffset, e.typicalHalfwidthCharacterWidth));
  }
}
class Tc extends Dc {
  get target() {
    return this._useHitTestTarget ? this.hitTestResult.value.hitTarget : this._eventTarget;
  }
  get targetPath() {
    return this._targetPathCacheElement !== this.target && (this._targetPathCacheElement = this.target, this._targetPathCacheValue = zr.collect(this.target, this._ctx.viewDomNode)), this._targetPathCacheValue;
  }
  constructor(e, t, i, o, s) {
    super(e, t, i, o), this.hitTestResult = new vi(() => ce.doHitTest(this._ctx, this)), this._targetPathCacheElement = null, this._targetPathCacheValue = new Uint8Array(0), this._ctx = e, this._eventTarget = s;
    const a = !!this._eventTarget;
    this._useHitTestTarget = !a;
  }
  toString() {
    return `pos(${this.pos.x},${this.pos.y}), editorPos(${this.editorPos.x},${this.editorPos.y}), relativePos(${this.relativePos.x},${this.relativePos.y}), mouseVerticalOffset: ${this.mouseVerticalOffset}, mouseContentHorizontalOffset: ${this.mouseContentHorizontalOffset}
	target: ${this.target ? this.target.outerHTML : null}`;
  }
  get wouldBenefitFromHitTestTargetSwitch() {
    return !this._useHitTestTarget && this.hitTestResult.value.hitTarget !== null && this.target !== this.hitTestResult.value.hitTarget;
  }
  switchToHitTestTarget() {
    this._useHitTestTarget = !0;
  }
  _getMouseColumn(e = null) {
    return e && e.column < this._ctx.viewModel.getLineMaxColumn(e.lineNumber) ? gt.visibleColumnFromColumn(this._ctx.viewModel.getLineContent(e.lineNumber), e.column, this._ctx.viewModel.model.getOptions().tabSize) + 1 : this.mouseColumn;
  }
  fulfillUnknown(e = null) {
    return He.createUnknown(this.target, this._getMouseColumn(e), e);
  }
  fulfillTextarea() {
    return He.createTextarea(this.target, this._getMouseColumn());
  }
  fulfillMargin(e, t, i, o) {
    return He.createMargin(e, this.target, this._getMouseColumn(t), t, i, o);
  }
  fulfillViewZone(e, t, i) {
    return He.createViewZone(e, this.target, this._getMouseColumn(t), t, i);
  }
  fulfillContentText(e, t, i) {
    return He.createContentText(this.target, this._getMouseColumn(e), e, t, i);
  }
  fulfillContentEmpty(e, t) {
    return He.createContentEmpty(this.target, this._getMouseColumn(e), e, t);
  }
  fulfillContentWidget(e) {
    return He.createContentWidget(this.target, this._getMouseColumn(), e);
  }
  fulfillScrollbar(e) {
    return He.createScrollbar(this.target, this._getMouseColumn(e), e);
  }
  fulfillOverlayWidget(e) {
    return He.createOverlayWidget(this.target, this._getMouseColumn(), e);
  }
}
const rr = { isAfterLines: !0 };
function yi(n) {
  return {
    isAfterLines: !1,
    horizontalDistanceToText: n
  };
}
class ce {
  constructor(e, t) {
    this._context = e, this._viewHelper = t;
  }
  mouseTargetIsWidget(e) {
    const t = e.target, i = zr.collect(t, this._viewHelper.viewDomNode);
    return !!(fe.isChildOfContentWidgets(i) || fe.isChildOfOverflowingContentWidgets(i) || fe.isChildOfOverlayWidgets(i) || fe.isChildOfOverflowingOverlayWidgets(i));
  }
  createMouseTarget(e, t, i, o, s) {
    const a = new ln(this._context, this._viewHelper, e), l = new Tc(a, t, i, o, s);
    try {
      const d = ce._createMouseTarget(a, l);
      if (d.type === 6 && a.stickyTabStops && d.position !== null) {
        const u = ce._snapToSoftTabBoundary(d.position, a.viewModel), g = nn.fromPositions(u, u).plusRange(d.range);
        return l.fulfillContentText(u, g, d.detail);
      }
      return d;
    } catch {
      return l.fulfillUnknown();
    }
  }
  static _createMouseTarget(e, t) {
    if (t.target === null)
      return t.fulfillUnknown();
    const i = t;
    let o = null;
    return !fe.isChildOfOverflowGuard(t.targetPath) && !fe.isChildOfOverflowingContentWidgets(t.targetPath) && !fe.isChildOfOverflowingOverlayWidgets(t.targetPath) && (o = o || t.fulfillUnknown()), o = o || ce._hitTestContentWidget(e, i), o = o || ce._hitTestOverlayWidget(e, i), o = o || ce._hitTestMinimap(e, i), o = o || ce._hitTestScrollbarSlider(e, i), o = o || ce._hitTestViewZone(e, i), o = o || ce._hitTestMargin(e, i), o = o || ce._hitTestViewCursor(e, i), o = o || ce._hitTestTextArea(e, i), o = o || ce._hitTestViewLines(e, i), o = o || ce._hitTestScrollbar(e, i), o || t.fulfillUnknown();
  }
  static _hitTestContentWidget(e, t) {
    if (fe.isChildOfContentWidgets(t.targetPath) || fe.isChildOfOverflowingContentWidgets(t.targetPath)) {
      const i = e.findAttribute(t.target, "widgetId");
      return i ? t.fulfillContentWidget(i) : t.fulfillUnknown();
    }
    return null;
  }
  static _hitTestOverlayWidget(e, t) {
    if (fe.isChildOfOverlayWidgets(t.targetPath) || fe.isChildOfOverflowingOverlayWidgets(t.targetPath)) {
      const i = e.findAttribute(t.target, "widgetId");
      return i ? t.fulfillOverlayWidget(i) : t.fulfillUnknown();
    }
    return null;
  }
  static _hitTestViewCursor(e, t) {
    if (t.target) {
      const i = e.lastRenderData.lastViewCursorsRenderData;
      for (const o of i)
        if (t.target === o.domNode)
          return t.fulfillContentText(o.position, null, { mightBeForeignElement: !1, injectedText: null });
    }
    if (t.isInContentArea) {
      const i = e.lastRenderData.lastViewCursorsRenderData, o = t.mouseContentHorizontalOffset, s = t.mouseVerticalOffset;
      for (const a of i) {
        if (o < a.contentLeft || o > a.contentLeft + a.width)
          continue;
        const l = e.getVerticalOffsetForLineNumber(a.position.lineNumber);
        if (l <= s && s <= l + a.height)
          return t.fulfillContentText(a.position, null, { mightBeForeignElement: !1, injectedText: null });
      }
    }
    return null;
  }
  static _hitTestViewZone(e, t) {
    const i = e.getZoneAtCoord(t.mouseVerticalOffset);
    if (i) {
      const o = t.isInContentArea ? 8 : 5;
      return t.fulfillViewZone(o, i.position, i);
    }
    return null;
  }
  static _hitTestTextArea(e, t) {
    return fe.isTextArea(t.targetPath) ? e.lastRenderData.lastTextareaPosition ? t.fulfillContentText(e.lastRenderData.lastTextareaPosition, null, { mightBeForeignElement: !1, injectedText: null }) : t.fulfillTextarea() : null;
  }
  static _hitTestMargin(e, t) {
    if (t.isInMarginArea) {
      const i = e.getFullLineRangeAtCoord(t.mouseVerticalOffset), o = i.range.getStartPosition();
      let s = Math.abs(t.relativePos.x);
      const a = {
        isAfterLines: i.isAfterLines,
        glyphMarginLeft: e.layoutInfo.glyphMarginLeft,
        glyphMarginWidth: e.layoutInfo.glyphMarginWidth,
        lineNumbersWidth: e.layoutInfo.lineNumbersWidth,
        offsetX: s
      };
      if (s -= e.layoutInfo.glyphMarginLeft, s <= e.layoutInfo.glyphMarginWidth) {
        const l = e.viewModel.coordinatesConverter.convertViewPositionToModelPosition(i.range.getStartPosition()), d = e.viewModel.glyphLanes.getLanesAtLine(l.lineNumber);
        return a.glyphMarginLane = d[Math.floor(s / e.lineHeight)], t.fulfillMargin(2, o, i.range, a);
      }
      return s -= e.layoutInfo.glyphMarginWidth, s <= e.layoutInfo.lineNumbersWidth ? t.fulfillMargin(3, o, i.range, a) : (s -= e.layoutInfo.lineNumbersWidth, t.fulfillMargin(4, o, i.range, a));
    }
    return null;
  }
  static _hitTestViewLines(e, t) {
    if (!fe.isChildOfViewLines(t.targetPath))
      return null;
    if (e.isInTopPadding(t.mouseVerticalOffset))
      return t.fulfillContentEmpty(new Ae(1, 1), rr);
    if (e.isAfterLines(t.mouseVerticalOffset) || e.isInBottomPadding(t.mouseVerticalOffset)) {
      const o = e.viewModel.getLineCount(), s = e.viewModel.getLineMaxColumn(o);
      return t.fulfillContentEmpty(new Ae(o, s), rr);
    }
    if (fe.isStrictChildOfViewLines(t.targetPath)) {
      const o = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset);
      if (e.viewModel.getLineLength(o) === 0) {
        const a = e.getLineWidth(o), l = yi(t.mouseContentHorizontalOffset - a);
        return t.fulfillContentEmpty(new Ae(o, 1), l);
      }
      const s = e.getLineWidth(o);
      if (t.mouseContentHorizontalOffset >= s) {
        const a = yi(t.mouseContentHorizontalOffset - s), l = new Ae(o, e.viewModel.getLineMaxColumn(o));
        return t.fulfillContentEmpty(l, a);
      }
    }
    const i = t.hitTestResult.value;
    return i.type === 1 ? ce.createMouseTargetFromHitTestPosition(e, t, i.spanNode, i.position, i.injectedText) : t.wouldBenefitFromHitTestTargetSwitch ? (t.switchToHitTestTarget(), this._createMouseTarget(e, t)) : t.fulfillUnknown();
  }
  static _hitTestMinimap(e, t) {
    if (fe.isChildOfMinimap(t.targetPath)) {
      const i = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset), o = e.viewModel.getLineMaxColumn(i);
      return t.fulfillScrollbar(new Ae(i, o));
    }
    return null;
  }
  static _hitTestScrollbarSlider(e, t) {
    if (fe.isChildOfScrollableElement(t.targetPath) && t.target && t.target.nodeType === 1) {
      const i = t.target.className;
      if (i && /\b(slider|scrollbar)\b/.test(i)) {
        const o = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset), s = e.viewModel.getLineMaxColumn(o);
        return t.fulfillScrollbar(new Ae(o, s));
      }
    }
    return null;
  }
  static _hitTestScrollbar(e, t) {
    if (fe.isChildOfScrollableElement(t.targetPath)) {
      const i = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset), o = e.viewModel.getLineMaxColumn(i);
      return t.fulfillScrollbar(new Ae(i, o));
    }
    return null;
  }
  getMouseColumn(e) {
    const t = this._context.configuration.options, i = t.get(
      146
      /* EditorOption.layoutInfo */
    ), o = this._context.viewLayout.getCurrentScrollLeft() + e.x - i.contentLeft;
    return ce._getMouseColumn(o, t.get(
      50
      /* EditorOption.fontInfo */
    ).typicalHalfwidthCharacterWidth);
  }
  static _getMouseColumn(e, t) {
    return e < 0 ? 1 : Math.round(e / t) + 1;
  }
  static createMouseTargetFromHitTestPosition(e, t, i, o, s) {
    const a = o.lineNumber, l = o.column, d = e.getLineWidth(a);
    if (t.mouseContentHorizontalOffset > d) {
      const _ = yi(t.mouseContentHorizontalOffset - d);
      return t.fulfillContentEmpty(o, _);
    }
    const u = e.visibleRangeForPosition(a, l);
    if (!u)
      return t.fulfillUnknown(o);
    const g = u.left;
    if (Math.abs(t.mouseContentHorizontalOffset - g) < 1)
      return t.fulfillContentText(o, null, { mightBeForeignElement: !!s, injectedText: s });
    const w = [];
    if (w.push({ offset: u.left, column: l }), l > 1) {
      const _ = e.visibleRangeForPosition(a, l - 1);
      _ && w.push({ offset: _.left, column: l - 1 });
    }
    const b = e.viewModel.getLineMaxColumn(a);
    if (l < b) {
      const _ = e.visibleRangeForPosition(a, l + 1);
      _ && w.push({ offset: _.left, column: l + 1 });
    }
    w.sort((_, A) => _.offset - A.offset);
    const p = t.pos.toClientCoordinates(ae(e.viewDomNode)), k = i.getBoundingClientRect(), v = k.left <= p.clientX && p.clientX <= k.right;
    let T = null;
    for (let _ = 1; _ < w.length; _++) {
      const A = w[_ - 1], z = w[_];
      if (A.offset <= t.mouseContentHorizontalOffset && t.mouseContentHorizontalOffset <= z.offset) {
        T = new nn(a, A.column, a, z.column);
        const F = Math.abs(A.offset - t.mouseContentHorizontalOffset), $ = Math.abs(z.offset - t.mouseContentHorizontalOffset);
        o = F < $ ? new Ae(a, A.column) : new Ae(a, z.column);
        break;
      }
    }
    return t.fulfillContentText(o, T, { mightBeForeignElement: !v || !!s, injectedText: s });
  }
  /**
   * Most probably WebKit browsers and Edge
   */
  static _doHitTestWithCaretRangeFromPoint(e, t) {
    const i = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset), o = e.getVerticalOffsetForLineNumber(i), s = o + e.lineHeight;
    if (!(i === e.viewModel.getLineCount() && t.mouseVerticalOffset > s)) {
      const l = Math.floor((o + s) / 2);
      let d = t.pos.y + (l - t.mouseVerticalOffset);
      d <= t.editorPos.y && (d = t.editorPos.y + 1), d >= t.editorPos.y + t.editorPos.height && (d = t.editorPos.y + t.editorPos.height - 1);
      const u = new Xi(t.pos.x, d), g = this._actualDoHitTestWithCaretRangeFromPoint(e, u.toClientCoordinates(ae(e.viewDomNode)));
      if (g.type === 1)
        return g;
    }
    return this._actualDoHitTestWithCaretRangeFromPoint(e, t.pos.toClientCoordinates(ae(e.viewDomNode)));
  }
  static _actualDoHitTestWithCaretRangeFromPoint(e, t) {
    const i = zi(e.viewDomNode);
    let o;
    if (i ? typeof i.caretRangeFromPoint > "u" ? o = Ec(i, t.clientX, t.clientY) : o = i.caretRangeFromPoint(t.clientX, t.clientY) : o = e.viewDomNode.ownerDocument.caretRangeFromPoint(t.clientX, t.clientY), !o || !o.startContainer)
      return new tt();
    const s = o.startContainer;
    if (s.nodeType === s.TEXT_NODE) {
      const a = s.parentNode, l = a ? a.parentNode : null, d = l ? l.parentNode : null;
      return (d && d.nodeType === d.ELEMENT_NODE ? d.className : null) === ut.CLASS_NAME ? ht.createFromDOMInfo(e, a, o.startOffset) : new tt(s.parentNode);
    } else if (s.nodeType === s.ELEMENT_NODE) {
      const a = s.parentNode, l = a ? a.parentNode : null;
      return (l && l.nodeType === l.ELEMENT_NODE ? l.className : null) === ut.CLASS_NAME ? ht.createFromDOMInfo(e, s, s.textContent.length) : new tt(s);
    }
    return new tt();
  }
  /**
   * Most probably Gecko
   */
  static _doHitTestWithCaretPositionFromPoint(e, t) {
    const i = e.viewDomNode.ownerDocument.caretPositionFromPoint(t.clientX, t.clientY);
    if (i.offsetNode.nodeType === i.offsetNode.TEXT_NODE) {
      const o = i.offsetNode.parentNode, s = o ? o.parentNode : null, a = s ? s.parentNode : null;
      return (a && a.nodeType === a.ELEMENT_NODE ? a.className : null) === ut.CLASS_NAME ? ht.createFromDOMInfo(e, i.offsetNode.parentNode, i.offset) : new tt(i.offsetNode.parentNode);
    }
    if (i.offsetNode.nodeType === i.offsetNode.ELEMENT_NODE) {
      const o = i.offsetNode.parentNode, s = o && o.nodeType === o.ELEMENT_NODE ? o.className : null, a = o ? o.parentNode : null, l = a && a.nodeType === a.ELEMENT_NODE ? a.className : null;
      if (s === ut.CLASS_NAME) {
        const d = i.offsetNode.childNodes[Math.min(i.offset, i.offsetNode.childNodes.length - 1)];
        if (d)
          return ht.createFromDOMInfo(e, d, 0);
      } else if (l === ut.CLASS_NAME)
        return ht.createFromDOMInfo(e, i.offsetNode, 0);
    }
    return new tt(i.offsetNode);
  }
  static _snapToSoftTabBoundary(e, t) {
    const i = t.getLineContent(e.lineNumber), { tabSize: o } = t.model.getOptions(), s = Qi.atomicPosition(
      i,
      e.column - 1,
      o,
      2
      /* Direction.Nearest */
    );
    return s !== -1 ? new Ae(e.lineNumber, s + 1) : e;
  }
  static doHitTest(e, t) {
    let i = new tt();
    if (typeof e.viewDomNode.ownerDocument.caretRangeFromPoint == "function" ? i = this._doHitTestWithCaretRangeFromPoint(e, t) : e.viewDomNode.ownerDocument.caretPositionFromPoint && (i = this._doHitTestWithCaretPositionFromPoint(e, t.pos.toClientCoordinates(ae(e.viewDomNode)))), i.type === 1) {
      const o = e.viewModel.getInjectedTextAt(i.position), s = e.viewModel.normalizePosition(
        i.position,
        2
        /* PositionAffinity.None */
      );
      (o || !s.equals(i.position)) && (i = new ns(s, i.spanNode, o));
    }
    return i;
  }
}
function Ec(n, e, t) {
  const i = document.createRange();
  let o = n.elementFromPoint(e, t);
  if (o !== null) {
    for (; o && o.firstChild && o.firstChild.nodeType !== o.firstChild.TEXT_NODE && o.lastChild && o.lastChild.firstChild; )
      o = o.lastChild;
    const s = o.getBoundingClientRect(), a = ae(o), l = a.getComputedStyle(o, null).getPropertyValue("font-style"), d = a.getComputedStyle(o, null).getPropertyValue("font-variant"), u = a.getComputedStyle(o, null).getPropertyValue("font-weight"), g = a.getComputedStyle(o, null).getPropertyValue("font-size"), w = a.getComputedStyle(o, null).getPropertyValue("line-height"), b = a.getComputedStyle(o, null).getPropertyValue("font-family"), p = `${l} ${d} ${u} ${g}/${w} ${b}`, k = o.innerText;
    let v = s.left, T = 0, _;
    if (e > s.left + s.width)
      T = k.length;
    else {
      const A = Ft.getInstance();
      for (let z = 0; z < k.length + 1; z++) {
        if (_ = A.getCharWidth(k.charAt(z), p) / 2, v += _, e < v) {
          T = z;
          break;
        }
        v += _;
      }
    }
    i.setStart(o.firstChild, T), i.setEnd(o.firstChild, T);
  }
  return i;
}
class Ft {
  static {
    this._INSTANCE = null;
  }
  static getInstance() {
    return Ft._INSTANCE || (Ft._INSTANCE = new Ft()), Ft._INSTANCE;
  }
  constructor() {
    this._cache = {}, this._canvas = document.createElement("canvas");
  }
  getCharWidth(e, t) {
    const i = e + t;
    if (this._cache[i])
      return this._cache[i];
    const o = this._canvas.getContext("2d");
    o.font = t;
    const a = o.measureText(e).width;
    return this._cache[i] = a, a;
  }
}
const hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HitTestContext: ln,
  MouseTarget: He,
  MouseTargetFactory: ce,
  PointerHandlerLastRenderData: _c
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ad as $,
  qt as A,
  gu as B,
  Bo as C,
  S1 as D,
  Je as E,
  jl as F,
  ba as G,
  ya as H,
  Tn as I,
  B0 as J,
  q0 as K,
  Z0 as L,
  ef as M,
  b1 as N,
  W0 as O,
  p1 as P,
  x0 as Q,
  Gi as R,
  m as S,
  xe as T,
  G0 as U,
  id as V,
  Us as W,
  sf as X,
  rf as Y,
  V0 as Z,
  zs as _,
  ct as a,
  ad as a$,
  se as a0,
  Bt as a1,
  ot as a2,
  iu as a3,
  U0 as a4,
  Fd as a5,
  ka as a6,
  Hi as a7,
  Oa as a8,
  va as a9,
  eu as aA,
  au as aB,
  $c as aC,
  lu as aD,
  ua as aE,
  of as aF,
  vi as aG,
  ha as aH,
  _d as aI,
  Jd as aJ,
  Rd as aK,
  ll as aL,
  al as aM,
  Es as aN,
  Md as aO,
  Wd as aP,
  Vd as aQ,
  Li as aR,
  Hd as aS,
  Fu as aT,
  Cc as aU,
  ir as aV,
  y1 as aW,
  nf as aX,
  xc as aY,
  Mc as aZ,
  Un as a_,
  Wc as aa,
  ma as ab,
  Zt as ac,
  $a as ad,
  Ua as ae,
  H as af,
  F0 as ag,
  xn as ah,
  dr as ai,
  ae as aj,
  ie as ak,
  cr as al,
  dl as am,
  zc as an,
  ql as ao,
  Ya as ap,
  Bc as aq,
  Mi as ar,
  Fc as as,
  ol as at,
  sl as au,
  yr as av,
  Jc as aw,
  sd as ax,
  Kr as ay,
  Zc as az,
  it as b,
  rh as b$,
  Ca as b0,
  Bi as b1,
  md as b2,
  nd as b3,
  xd as b4,
  Vs as b5,
  Bd as b6,
  Hc as b7,
  Id as b8,
  ou as b9,
  Rl as bA,
  Ml as bB,
  Il as bC,
  _h as bD,
  Lh as bE,
  Sh as bF,
  vh as bG,
  kh as bH,
  Ch as bI,
  vn as bJ,
  Th as bK,
  Eh as bL,
  Dh as bM,
  mu as bN,
  qu as bO,
  ju as bP,
  $u as bQ,
  x as bR,
  $i as bS,
  Be as bT,
  hh as bU,
  uh as bV,
  fh as bW,
  ch as bX,
  lh as bY,
  dh as bZ,
  sh as b_,
  Kd as ba,
  R0 as bb,
  K0 as bc,
  qd as bd,
  Ki as be,
  cl as bf,
  Gd as bg,
  On as bh,
  Nc as bi,
  ml as bj,
  pu as bk,
  ke as bl,
  Al as bm,
  Oh as bn,
  Ih as bo,
  Fh as bp,
  Ah as bq,
  wh as br,
  yh as bs,
  Zo as bt,
  bh as bu,
  mh as bv,
  kn as bw,
  ph as bx,
  Bl as by,
  bu as bz,
  Dr as c,
  kd as c$,
  ah as c0,
  oh as c1,
  ih as c2,
  nh as c3,
  Xh as c4,
  Yh as c5,
  qh as c6,
  jh as c7,
  wu as c8,
  fi as c9,
  h0 as cA,
  f0 as cB,
  g0 as cC,
  et as cD,
  xl as cE,
  d0 as cF,
  Hr as cG,
  gh as cH,
  qi as cI,
  Dl as cJ,
  _l as cK,
  Ll as cL,
  s0 as cM,
  r0 as cN,
  o0 as cO,
  i0 as cP,
  n0 as cQ,
  t0 as cR,
  e0 as cS,
  Yt as cT,
  ru as cU,
  A0 as cV,
  Zd as cW,
  Za as cX,
  ur as cY,
  ze as cZ,
  wa as c_,
  Uu as ca,
  zu as cb,
  Hu as cc,
  Vu as cd,
  Jh as ce,
  Qh as cf,
  Sl as cg,
  Zh as ch,
  Pl as ci,
  Gh as cj,
  Kh as ck,
  Uh as cl,
  zh as cm,
  Vh as cn,
  Hh as co,
  Ph as cp,
  Nh as cq,
  Wh as cr,
  Yi as cs,
  sn as ct,
  Bh as cu,
  Wl as cv,
  xh as cw,
  Mh as cx,
  Rh as cy,
  Tl as cz,
  Rc as d,
  Tr as d$,
  c as d0,
  Et as d1,
  Pn as d2,
  I as d3,
  zo as d4,
  Nn as d5,
  Uo as d6,
  Hn as d7,
  ku as d8,
  Ju as d9,
  j0 as dA,
  Bs as dB,
  X0 as dC,
  I0 as dD,
  $d as dE,
  Pd as dF,
  Lo as dG,
  Ws as dH,
  Qd as dI,
  Ud as dJ,
  Sd as dK,
  u0 as dL,
  a0 as dM,
  Nu as dN,
  c0 as dO,
  l0 as dP,
  yu as dQ,
  Du as dR,
  _u as dS,
  su as dT,
  bl as dU,
  Ts as dV,
  bi as dW,
  Rr as dX,
  O0 as dY,
  xi as dZ,
  Ic as d_,
  Qu as da,
  Zu as db,
  gt as dc,
  tf as dd,
  An as de,
  L0 as df,
  v0 as dg,
  S0 as dh,
  T0 as di,
  D0 as dj,
  _0 as dk,
  Mo as dl,
  gd as dm,
  pd as dn,
  Ks as dp,
  bd as dq,
  Ea as dr,
  Xc as ds,
  vr as dt,
  Kc as du,
  tl as dv,
  jd as dw,
  Yc as dx,
  Nd as dy,
  $0 as dz,
  cd as e,
  Ue as e$,
  Wa as e0,
  Uc as e1,
  H0 as e2,
  E0 as e3,
  i1 as e4,
  E1 as e5,
  Ri as e6,
  vd as e7,
  af as e8,
  $l as e9,
  t1 as eA,
  Ur as eB,
  uf as eC,
  ut as eD,
  C0 as eE,
  k0 as eF,
  eh as eG,
  th as eH,
  Jt as eI,
  Xu as eJ,
  T1 as eK,
  Ni as eL,
  Lu as eM,
  hd as eN,
  Ze as eO,
  nu as eP,
  n1 as eQ,
  qa as eR,
  _c as eS,
  y0 as eT,
  Td as eU,
  on as eV,
  cf as eW,
  cu as eX,
  Br as eY,
  vu as eZ,
  hu as e_,
  ce as ea,
  p0 as eb,
  Zi as ec,
  Nl as ed,
  zl as ee,
  Ul as ef,
  zi as eg,
  w0 as eh,
  ln as ei,
  He as ej,
  Xi as ek,
  dd as el,
  ud as em,
  Yd as en,
  Xd as eo,
  m0 as ep,
  b0 as eq,
  zr as er,
  Oc as es,
  df as et,
  _a as eu,
  Qi as ev,
  La as ew,
  yd as ex,
  Ro as ey,
  ld as ez,
  Ba as f,
  ts as f$,
  jr as f0,
  Q0 as f1,
  du as f2,
  J0 as f3,
  N0 as f4,
  Wu as f5,
  Go as f6,
  xu as f7,
  Pu as f8,
  $o as f9,
  Pr as fA,
  Wr as fB,
  Fl as fC,
  Ku as fD,
  wd as fE,
  Vi as fF,
  Au as fG,
  Tu as fH,
  Eu as fI,
  D as fJ,
  Tt as fK,
  _i as fL,
  zd as fM,
  M0 as fN,
  Fi as fO,
  od as fP,
  nr as fQ,
  Od as fR,
  Sn as fS,
  $h as fT,
  Ed as fU,
  No as fV,
  Cu as fW,
  Vc as fX,
  Gu as fY,
  Yu as fZ,
  uu as f_,
  Bu as fa,
  C as fb,
  A1 as fc,
  G as fd,
  lf as fe,
  Fn as ff,
  Y0 as fg,
  Cd as fh,
  Pc as fi,
  M as fj,
  Dd as fk,
  tu as fl,
  Xe as fm,
  At as fn,
  Vr as fo,
  Ko as fp,
  Dt as fq,
  Le as fr,
  Gc as fs,
  C1 as ft,
  nl as fu,
  Su as fv,
  Mu as fw,
  Ru as fx,
  Ou as fy,
  Iu as fz,
  Po as g,
  Oe as g0,
  at as g1,
  Zr as g2,
  ed as g3,
  Qc as g4,
  hf as g5,
  P0 as h,
  qc as i,
  td as j,
  pa as k,
  Jl as l,
  z0 as m,
  Or as n,
  Ld as o,
  jc as p,
  L1 as q,
  rd as r,
  kr as s,
  Qt as t,
  Si as u,
  Rt as v,
  _1 as w,
  ul as x,
  fd as y,
  fu as z
};
