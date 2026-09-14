import { i as isNative, b as illegalArgument, K as KeyCodeUtils, c as isMacintosh, d as isLinux, E as EVENT_KEY_CODE_MAP, e as isWindows, f as Emitter, h as Event, j as CancellationTokenSource, k as CancellationError, B as BugIndicatingError, t as toDisposable, s as setTimeout0, U as URI, p as posix, o as onUnexpectedError, l as isWeb, w as webWorkerOrigin, m as join, D as DisposableStore, n as Disposable, q as isIOS, r as isString, u as isObject, v as localize, x as isLittleEndian, y as isUndefinedOrNull, z as isTypedArray, L as LinkedList, I as Iterable, R as Range, P as Position } from "./index-CMIQd0YI.js";
function ensureCodeWindow(targetWindow, fallbackWindowId) {
  const codeWindow = targetWindow;
  if (typeof codeWindow.vscodeWindowId !== "number") {
    Object.defineProperty(codeWindow, "vscodeWindowId", {
      get: () => fallbackWindowId
    });
  }
}
const mainWindow = window;
class WindowManager {
  constructor() {
    this.mapWindowIdToZoomFactor = /* @__PURE__ */ new Map();
  }
  static {
    this.INSTANCE = new WindowManager();
  }
  getZoomFactor(targetWindow) {
    return this.mapWindowIdToZoomFactor.get(this.getWindowId(targetWindow)) ?? 1;
  }
  getWindowId(targetWindow) {
    return targetWindow.vscodeWindowId;
  }
}
function addMatchMediaChangeListener(targetWindow, query, callback) {
  if (typeof query === "string") {
    query = targetWindow.matchMedia(query);
  }
  query.addEventListener("change", callback);
}
function getZoomFactor(targetWindow) {
  return WindowManager.INSTANCE.getZoomFactor(targetWindow);
}
const userAgent = navigator.userAgent;
const isFirefox = userAgent.indexOf("Firefox") >= 0;
const isWebKit = userAgent.indexOf("AppleWebKit") >= 0;
const isChrome = userAgent.indexOf("Chrome") >= 0;
const isSafari = !isChrome && userAgent.indexOf("Safari") >= 0;
const isWebkitWebView = !isChrome && !isSafari && isWebKit;
userAgent.indexOf("Electron/") >= 0;
const isAndroid = userAgent.indexOf("Android") >= 0;
let standalone = false;
if (typeof mainWindow.matchMedia === "function") {
  const standaloneMatchMedia = mainWindow.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)");
  const fullScreenMatchMedia = mainWindow.matchMedia("(display-mode: fullscreen)");
  standalone = standaloneMatchMedia.matches;
  addMatchMediaChangeListener(mainWindow, standaloneMatchMedia, ({ matches }) => {
    if (standalone && fullScreenMatchMedia.matches) {
      return;
    }
    standalone = matches;
  });
}
const BrowserFeatures = {
  clipboard: {
    writeText: isNative || document.queryCommandSupported && document.queryCommandSupported("copy") || !!(navigator && navigator.clipboard && navigator.clipboard.writeText),
    readText: isNative || !!(navigator && navigator.clipboard && navigator.clipboard.readText)
  },
  pointerEvents: mainWindow.PointerEvent && ("ontouchstart" in mainWindow || navigator.maxTouchPoints > 0)
};
function decodeKeybinding(keybinding, OS) {
  if (typeof keybinding === "number") {
    if (keybinding === 0) {
      return null;
    }
    const firstChord = (keybinding & 65535) >>> 0;
    const secondChord = (keybinding & 4294901760) >>> 16;
    if (secondChord !== 0) {
      return new Keybinding([
        createSimpleKeybinding(firstChord, OS),
        createSimpleKeybinding(secondChord, OS)
      ]);
    }
    return new Keybinding([createSimpleKeybinding(firstChord, OS)]);
  } else {
    const chords = [];
    for (let i = 0; i < keybinding.length; i++) {
      chords.push(createSimpleKeybinding(keybinding[i], OS));
    }
    return new Keybinding(chords);
  }
}
function createSimpleKeybinding(keybinding, OS) {
  const ctrlCmd = keybinding & 2048 ? true : false;
  const winCtrl = keybinding & 256 ? true : false;
  const ctrlKey = OS === 2 ? winCtrl : ctrlCmd;
  const shiftKey = keybinding & 1024 ? true : false;
  const altKey = keybinding & 512 ? true : false;
  const metaKey = OS === 2 ? ctrlCmd : winCtrl;
  const keyCode = keybinding & 255;
  return new KeyCodeChord(ctrlKey, shiftKey, altKey, metaKey, keyCode);
}
class KeyCodeChord {
  constructor(ctrlKey, shiftKey, altKey, metaKey, keyCode) {
    this.ctrlKey = ctrlKey;
    this.shiftKey = shiftKey;
    this.altKey = altKey;
    this.metaKey = metaKey;
    this.keyCode = keyCode;
  }
  equals(other) {
    return other instanceof KeyCodeChord && this.ctrlKey === other.ctrlKey && this.shiftKey === other.shiftKey && this.altKey === other.altKey && this.metaKey === other.metaKey && this.keyCode === other.keyCode;
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
class Keybinding {
  constructor(chords) {
    if (chords.length === 0) {
      throw illegalArgument(`chords`);
    }
    this.chords = chords;
  }
}
class ResolvedChord {
  constructor(ctrlKey, shiftKey, altKey, metaKey, keyLabel, keyAriaLabel) {
    this.ctrlKey = ctrlKey;
    this.shiftKey = shiftKey;
    this.altKey = altKey;
    this.metaKey = metaKey;
    this.keyLabel = keyLabel;
    this.keyAriaLabel = keyAriaLabel;
  }
}
class ResolvedKeybinding {
}
function extractKeyCode(e) {
  if (e.charCode) {
    const char = String.fromCharCode(e.charCode).toUpperCase();
    return KeyCodeUtils.fromString(char);
  }
  const keyCode = e.keyCode;
  if (keyCode === 3) {
    return 7;
  } else if (isFirefox) {
    switch (keyCode) {
      case 59:
        return 85;
      case 60:
        if (isLinux) {
          return 97;
        }
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
        if (isMacintosh) {
          return 57;
        }
        break;
    }
  } else if (isWebKit) {
    if (isMacintosh && keyCode === 93) {
      return 57;
    } else if (!isMacintosh && keyCode === 92) {
      return 57;
    }
  }
  return EVENT_KEY_CODE_MAP[keyCode] || 0;
}
const ctrlKeyMod = isMacintosh ? 256 : 2048;
const altKeyMod = 512;
const shiftKeyMod = 1024;
const metaKeyMod = isMacintosh ? 2048 : 256;
class StandardKeyboardEvent {
  constructor(source) {
    this._standardKeyboardEventBrand = true;
    const e = source;
    this.browserEvent = e;
    this.target = e.target;
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.metaKey = e.metaKey;
    this.altGraphKey = e.getModifierState?.("AltGraph");
    this.keyCode = extractKeyCode(e);
    this.code = e.code;
    this.ctrlKey = this.ctrlKey || this.keyCode === 5;
    this.altKey = this.altKey || this.keyCode === 6;
    this.shiftKey = this.shiftKey || this.keyCode === 4;
    this.metaKey = this.metaKey || this.keyCode === 57;
    this._asKeybinding = this._computeKeybinding();
    this._asKeyCodeChord = this._computeKeyCodeChord();
  }
  preventDefault() {
    if (this.browserEvent && this.browserEvent.preventDefault) {
      this.browserEvent.preventDefault();
    }
  }
  stopPropagation() {
    if (this.browserEvent && this.browserEvent.stopPropagation) {
      this.browserEvent.stopPropagation();
    }
  }
  toKeyCodeChord() {
    return this._asKeyCodeChord;
  }
  equals(other) {
    return this._asKeybinding === other;
  }
  _computeKeybinding() {
    let key = 0;
    if (this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57) {
      key = this.keyCode;
    }
    let result = 0;
    if (this.ctrlKey) {
      result |= ctrlKeyMod;
    }
    if (this.altKey) {
      result |= altKeyMod;
    }
    if (this.shiftKey) {
      result |= shiftKeyMod;
    }
    if (this.metaKey) {
      result |= metaKeyMod;
    }
    result |= key;
    return result;
  }
  _computeKeyCodeChord() {
    let key = 0;
    if (this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57) {
      key = this.keyCode;
    }
    return new KeyCodeChord(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, key);
  }
}
const sameOriginWindowChainCache = /* @__PURE__ */ new WeakMap();
function getParentWindowIfSameOrigin(w) {
  if (!w.parent || w.parent === w) {
    return null;
  }
  try {
    const location = w.location;
    const parentLocation = w.parent.location;
    if (location.origin !== "null" && parentLocation.origin !== "null" && location.origin !== parentLocation.origin) {
      return null;
    }
  } catch (e) {
    return null;
  }
  return w.parent;
}
class IframeUtils {
  /**
   * Returns a chain of embedded windows with the same origin (which can be accessed programmatically).
   * Having a chain of length 1 might mean that the current execution environment is running outside of an iframe or inside an iframe embedded in a window with a different origin.
   */
  static getSameOriginWindowChain(targetWindow) {
    let windowChainCache = sameOriginWindowChainCache.get(targetWindow);
    if (!windowChainCache) {
      windowChainCache = [];
      sameOriginWindowChainCache.set(targetWindow, windowChainCache);
      let w = targetWindow;
      let parent;
      do {
        parent = getParentWindowIfSameOrigin(w);
        if (parent) {
          windowChainCache.push({
            window: new WeakRef(w),
            iframeElement: w.frameElement || null
          });
        } else {
          windowChainCache.push({
            window: new WeakRef(w),
            iframeElement: null
          });
        }
        w = parent;
      } while (w);
    }
    return windowChainCache.slice(0);
  }
  /**
   * Returns the position of `childWindow` relative to `ancestorWindow`
   */
  static getPositionOfChildWindowRelativeToAncestorWindow(childWindow, ancestorWindow) {
    if (!ancestorWindow || childWindow === ancestorWindow) {
      return {
        top: 0,
        left: 0
      };
    }
    let top = 0, left = 0;
    const windowChain = this.getSameOriginWindowChain(childWindow);
    for (const windowChainEl of windowChain) {
      const windowInChain = windowChainEl.window.deref();
      top += windowInChain?.scrollY ?? 0;
      left += windowInChain?.scrollX ?? 0;
      if (windowInChain === ancestorWindow) {
        break;
      }
      if (!windowChainEl.iframeElement) {
        break;
      }
      const boundingRect = windowChainEl.iframeElement.getBoundingClientRect();
      top += boundingRect.top;
      left += boundingRect.left;
    }
    return {
      top,
      left
    };
  }
}
class StandardMouseEvent {
  constructor(targetWindow, e) {
    this.timestamp = Date.now();
    this.browserEvent = e;
    this.leftButton = e.button === 0;
    this.middleButton = e.button === 1;
    this.rightButton = e.button === 2;
    this.buttons = e.buttons;
    this.target = e.target;
    this.detail = e.detail || 1;
    if (e.type === "dblclick") {
      this.detail = 2;
    }
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.metaKey = e.metaKey;
    if (typeof e.pageX === "number") {
      this.posx = e.pageX;
      this.posy = e.pageY;
    } else {
      this.posx = e.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft;
      this.posy = e.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop;
    }
    const iframeOffsets = IframeUtils.getPositionOfChildWindowRelativeToAncestorWindow(targetWindow, e.view);
    this.posx -= iframeOffsets.left;
    this.posy -= iframeOffsets.top;
  }
  preventDefault() {
    this.browserEvent.preventDefault();
  }
  stopPropagation() {
    this.browserEvent.stopPropagation();
  }
}
class StandardWheelEvent {
  constructor(e, deltaX = 0, deltaY = 0) {
    this.browserEvent = e || null;
    this.target = e ? e.target || e.targetNode || e.srcElement : null;
    this.deltaY = deltaY;
    this.deltaX = deltaX;
    let shouldFactorDPR = false;
    if (isChrome) {
      const chromeVersionMatch = navigator.userAgent.match(/Chrome\/(\d+)/);
      const chromeMajorVersion = chromeVersionMatch ? parseInt(chromeVersionMatch[1]) : 123;
      shouldFactorDPR = chromeMajorVersion <= 122;
    }
    if (e) {
      const e1 = e;
      const e2 = e;
      const devicePixelRatio = e.view?.devicePixelRatio || 1;
      if (typeof e1.wheelDeltaY !== "undefined") {
        if (shouldFactorDPR) {
          this.deltaY = e1.wheelDeltaY / (120 * devicePixelRatio);
        } else {
          this.deltaY = e1.wheelDeltaY / 120;
        }
      } else if (typeof e2.VERTICAL_AXIS !== "undefined" && e2.axis === e2.VERTICAL_AXIS) {
        this.deltaY = -e2.detail / 3;
      } else if (e.type === "wheel") {
        const ev = e;
        if (ev.deltaMode === ev.DOM_DELTA_LINE) {
          if (isFirefox && !isMacintosh) {
            this.deltaY = -e.deltaY / 3;
          } else {
            this.deltaY = -e.deltaY;
          }
        } else {
          this.deltaY = -e.deltaY / 40;
        }
      }
      if (typeof e1.wheelDeltaX !== "undefined") {
        if (isSafari && isWindows) {
          this.deltaX = -(e1.wheelDeltaX / 120);
        } else if (shouldFactorDPR) {
          this.deltaX = e1.wheelDeltaX / (120 * devicePixelRatio);
        } else {
          this.deltaX = e1.wheelDeltaX / 120;
        }
      } else if (typeof e2.HORIZONTAL_AXIS !== "undefined" && e2.axis === e2.HORIZONTAL_AXIS) {
        this.deltaX = -e.detail / 3;
      } else if (e.type === "wheel") {
        const ev = e;
        if (ev.deltaMode === ev.DOM_DELTA_LINE) {
          if (isFirefox && !isMacintosh) {
            this.deltaX = -e.deltaX / 3;
          } else {
            this.deltaX = -e.deltaX;
          }
        } else {
          this.deltaX = -e.deltaX / 40;
        }
      }
      if (this.deltaY === 0 && this.deltaX === 0 && e.wheelDelta) {
        if (shouldFactorDPR) {
          this.deltaY = e.wheelDelta / (120 * devicePixelRatio);
        } else {
          this.deltaY = e.wheelDelta / 120;
        }
      }
    }
  }
  preventDefault() {
    this.browserEvent?.preventDefault();
  }
  stopPropagation() {
    this.browserEvent?.stopPropagation();
  }
}
const MicrotaskDelay = Symbol("MicrotaskDelay");
function isThenable(obj) {
  return !!obj && typeof obj.then === "function";
}
function createCancelablePromise(callback) {
  const source = new CancellationTokenSource();
  const thenable = callback(source.token);
  const promise = new Promise((resolve, reject) => {
    const subscription = source.token.onCancellationRequested(() => {
      subscription.dispose();
      reject(new CancellationError());
    });
    Promise.resolve(thenable).then((value) => {
      subscription.dispose();
      source.dispose();
      resolve(value);
    }, (err) => {
      subscription.dispose();
      source.dispose();
      reject(err);
    });
  });
  return new class {
    cancel() {
      source.cancel();
      source.dispose();
    }
    then(resolve, reject) {
      return promise.then(resolve, reject);
    }
    catch(reject) {
      return this.then(void 0, reject);
    }
    finally(onfinally) {
      return promise.finally(onfinally);
    }
  }();
}
function raceCancellation(promise, token, defaultValue) {
  return new Promise((resolve, reject) => {
    const ref = token.onCancellationRequested(() => {
      ref.dispose();
      resolve(defaultValue);
    });
    promise.then(resolve, reject).finally(() => ref.dispose());
  });
}
class Throttler {
  constructor() {
    this.isDisposed = false;
    this.activePromise = null;
    this.queuedPromise = null;
    this.queuedPromiseFactory = null;
  }
  queue(promiseFactory) {
    if (this.isDisposed) {
      return Promise.reject(new Error("Throttler is disposed"));
    }
    if (this.activePromise) {
      this.queuedPromiseFactory = promiseFactory;
      if (!this.queuedPromise) {
        const onComplete = () => {
          this.queuedPromise = null;
          if (this.isDisposed) {
            return;
          }
          const result = this.queue(this.queuedPromiseFactory);
          this.queuedPromiseFactory = null;
          return result;
        };
        this.queuedPromise = new Promise((resolve) => {
          this.activePromise.then(onComplete, onComplete).then(resolve);
        });
      }
      return new Promise((resolve, reject) => {
        this.queuedPromise.then(resolve, reject);
      });
    }
    this.activePromise = promiseFactory();
    return new Promise((resolve, reject) => {
      this.activePromise.then((result) => {
        this.activePromise = null;
        resolve(result);
      }, (err) => {
        this.activePromise = null;
        reject(err);
      });
    });
  }
  dispose() {
    this.isDisposed = true;
  }
}
const timeoutDeferred = (timeout2, fn) => {
  let scheduled = true;
  const handle = setTimeout(() => {
    scheduled = false;
    fn();
  }, timeout2);
  return {
    isTriggered: () => scheduled,
    dispose: () => {
      clearTimeout(handle);
      scheduled = false;
    }
  };
};
const microtaskDeferred = (fn) => {
  let scheduled = true;
  queueMicrotask(() => {
    if (scheduled) {
      scheduled = false;
      fn();
    }
  });
  return {
    isTriggered: () => scheduled,
    dispose: () => {
      scheduled = false;
    }
  };
};
class Delayer {
  constructor(defaultDelay) {
    this.defaultDelay = defaultDelay;
    this.deferred = null;
    this.completionPromise = null;
    this.doResolve = null;
    this.doReject = null;
    this.task = null;
  }
  trigger(task, delay = this.defaultDelay) {
    this.task = task;
    this.cancelTimeout();
    if (!this.completionPromise) {
      this.completionPromise = new Promise((resolve, reject) => {
        this.doResolve = resolve;
        this.doReject = reject;
      }).then(() => {
        this.completionPromise = null;
        this.doResolve = null;
        if (this.task) {
          const task2 = this.task;
          this.task = null;
          return task2();
        }
        return void 0;
      });
    }
    const fn = () => {
      this.deferred = null;
      this.doResolve?.(null);
    };
    this.deferred = delay === MicrotaskDelay ? microtaskDeferred(fn) : timeoutDeferred(delay, fn);
    return this.completionPromise;
  }
  isTriggered() {
    return !!this.deferred?.isTriggered();
  }
  cancel() {
    this.cancelTimeout();
    if (this.completionPromise) {
      this.doReject?.(new CancellationError());
      this.completionPromise = null;
    }
  }
  cancelTimeout() {
    this.deferred?.dispose();
    this.deferred = null;
  }
  dispose() {
    this.cancel();
  }
}
class ThrottledDelayer {
  constructor(defaultDelay) {
    this.delayer = new Delayer(defaultDelay);
    this.throttler = new Throttler();
  }
  trigger(promiseFactory, delay) {
    return this.delayer.trigger(() => this.throttler.queue(promiseFactory), delay);
  }
  cancel() {
    this.delayer.cancel();
  }
  dispose() {
    this.delayer.dispose();
    this.throttler.dispose();
  }
}
function timeout(millis, token) {
  if (!token) {
    return createCancelablePromise((token2) => timeout(millis, token2));
  }
  return new Promise((resolve, reject) => {
    const handle = setTimeout(() => {
      disposable.dispose();
      resolve();
    }, millis);
    const disposable = token.onCancellationRequested(() => {
      clearTimeout(handle);
      disposable.dispose();
      reject(new CancellationError());
    });
  });
}
function disposableTimeout(handler, timeout2 = 0, store) {
  const timer = setTimeout(() => {
    handler();
    if (store) {
      disposable.dispose();
    }
  }, timeout2);
  const disposable = toDisposable(() => {
    clearTimeout(timer);
    store?.deleteAndLeak(disposable);
  });
  store?.add(disposable);
  return disposable;
}
function first(promiseFactories, shouldStop = (t) => !!t, defaultValue = null) {
  let index = 0;
  const len = promiseFactories.length;
  const loop = () => {
    if (index >= len) {
      return Promise.resolve(defaultValue);
    }
    const factory = promiseFactories[index++];
    const promise = Promise.resolve(factory());
    return promise.then((result) => {
      if (shouldStop(result)) {
        return Promise.resolve(result);
      }
      return loop();
    });
  };
  return loop();
}
class TimeoutTimer {
  constructor(runner, timeout2) {
    this._isDisposed = false;
    this._token = -1;
    if (typeof runner === "function" && typeof timeout2 === "number") {
      this.setIfNotSet(runner, timeout2);
    }
  }
  dispose() {
    this.cancel();
    this._isDisposed = true;
  }
  cancel() {
    if (this._token !== -1) {
      clearTimeout(this._token);
      this._token = -1;
    }
  }
  cancelAndSet(runner, timeout2) {
    if (this._isDisposed) {
      throw new BugIndicatingError(`Calling 'cancelAndSet' on a disposed TimeoutTimer`);
    }
    this.cancel();
    this._token = setTimeout(() => {
      this._token = -1;
      runner();
    }, timeout2);
  }
  setIfNotSet(runner, timeout2) {
    if (this._isDisposed) {
      throw new BugIndicatingError(`Calling 'setIfNotSet' on a disposed TimeoutTimer`);
    }
    if (this._token !== -1) {
      return;
    }
    this._token = setTimeout(() => {
      this._token = -1;
      runner();
    }, timeout2);
  }
}
class IntervalTimer {
  constructor() {
    this.disposable = void 0;
    this.isDisposed = false;
  }
  cancel() {
    this.disposable?.dispose();
    this.disposable = void 0;
  }
  cancelAndSet(runner, interval, context = globalThis) {
    if (this.isDisposed) {
      throw new BugIndicatingError(`Calling 'cancelAndSet' on a disposed IntervalTimer`);
    }
    this.cancel();
    const handle = context.setInterval(() => {
      runner();
    }, interval);
    this.disposable = toDisposable(() => {
      context.clearInterval(handle);
      this.disposable = void 0;
    });
  }
  dispose() {
    this.cancel();
    this.isDisposed = true;
  }
}
class RunOnceScheduler {
  constructor(runner, delay) {
    this.timeoutToken = -1;
    this.runner = runner;
    this.timeout = delay;
    this.timeoutHandler = this.onTimeout.bind(this);
  }
  /**
   * Dispose RunOnceScheduler
   */
  dispose() {
    this.cancel();
    this.runner = null;
  }
  /**
   * Cancel current scheduled runner (if any).
   */
  cancel() {
    if (this.isScheduled()) {
      clearTimeout(this.timeoutToken);
      this.timeoutToken = -1;
    }
  }
  /**
   * Cancel previous runner (if any) & schedule a new runner.
   */
  schedule(delay = this.timeout) {
    this.cancel();
    this.timeoutToken = setTimeout(this.timeoutHandler, delay);
  }
  get delay() {
    return this.timeout;
  }
  set delay(value) {
    this.timeout = value;
  }
  /**
   * Returns true if scheduled.
   */
  isScheduled() {
    return this.timeoutToken !== -1;
  }
  onTimeout() {
    this.timeoutToken = -1;
    if (this.runner) {
      this.doRun();
    }
  }
  doRun() {
    this.runner?.();
  }
}
let runWhenGlobalIdle;
let _runWhenIdle;
(function() {
  if (typeof globalThis.requestIdleCallback !== "function" || typeof globalThis.cancelIdleCallback !== "function") {
    _runWhenIdle = (_targetWindow, runner) => {
      setTimeout0(() => {
        if (disposed) {
          return;
        }
        const end = Date.now() + 15;
        const deadline = {
          didTimeout: true,
          timeRemaining() {
            return Math.max(0, end - Date.now());
          }
        };
        runner(Object.freeze(deadline));
      });
      let disposed = false;
      return {
        dispose() {
          if (disposed) {
            return;
          }
          disposed = true;
        }
      };
    };
  } else {
    _runWhenIdle = (targetWindow, runner, timeout2) => {
      const handle = targetWindow.requestIdleCallback(runner, typeof timeout2 === "number" ? { timeout: timeout2 } : void 0);
      let disposed = false;
      return {
        dispose() {
          if (disposed) {
            return;
          }
          disposed = true;
          targetWindow.cancelIdleCallback(handle);
        }
      };
    };
  }
  runWhenGlobalIdle = (runner) => _runWhenIdle(globalThis, runner);
})();
class AbstractIdleValue {
  constructor(targetWindow, executor) {
    this._didRun = false;
    this._executor = () => {
      try {
        this._value = executor();
      } catch (err) {
        this._error = err;
      } finally {
        this._didRun = true;
      }
    };
    this._handle = _runWhenIdle(targetWindow, () => this._executor());
  }
  dispose() {
    this._handle.dispose();
  }
  get value() {
    if (!this._didRun) {
      this._handle.dispose();
      this._executor();
    }
    if (this._error) {
      throw this._error;
    }
    return this._value;
  }
  get isInitialized() {
    return this._didRun;
  }
}
class GlobalIdleValue extends AbstractIdleValue {
  constructor(executor) {
    super(globalThis, executor);
  }
}
class DeferredPromise {
  get isRejected() {
    return this.outcome?.outcome === 1;
  }
  get isSettled() {
    return !!this.outcome;
  }
  constructor() {
    this.p = new Promise((c, e) => {
      this.completeCallback = c;
      this.errorCallback = e;
    });
  }
  complete(value) {
    return new Promise((resolve) => {
      this.completeCallback(value);
      this.outcome = { outcome: 0, value };
      resolve();
    });
  }
  error(err) {
    return new Promise((resolve) => {
      this.errorCallback(err);
      this.outcome = { outcome: 1, value: err };
      resolve();
    });
  }
  cancel() {
    return this.error(new CancellationError());
  }
}
var Promises;
(function(Promises2) {
  async function settled(promises) {
    let firstError = void 0;
    const result = await Promise.all(promises.map((promise) => promise.then((value) => value, (error) => {
      if (!firstError) {
        firstError = error;
      }
      return void 0;
    })));
    if (typeof firstError !== "undefined") {
      throw firstError;
    }
    return result;
  }
  Promises2.settled = settled;
  function withAsyncBody(bodyFn) {
    return new Promise(async (resolve, reject) => {
      try {
        await bodyFn(resolve, reject);
      } catch (error) {
        reject(error);
      }
    });
  }
  Promises2.withAsyncBody = withAsyncBody;
})(Promises || (Promises = {}));
class AsyncIterableObject {
  static fromArray(items) {
    return new AsyncIterableObject((writer) => {
      writer.emitMany(items);
    });
  }
  static fromPromise(promise) {
    return new AsyncIterableObject(async (emitter) => {
      emitter.emitMany(await promise);
    });
  }
  static fromPromises(promises) {
    return new AsyncIterableObject(async (emitter) => {
      await Promise.all(promises.map(async (p) => emitter.emitOne(await p)));
    });
  }
  static merge(iterables) {
    return new AsyncIterableObject(async (emitter) => {
      await Promise.all(iterables.map(async (iterable) => {
        for await (const item of iterable) {
          emitter.emitOne(item);
        }
      }));
    });
  }
  static {
    this.EMPTY = AsyncIterableObject.fromArray([]);
  }
  constructor(executor, onReturn) {
    this._state = 0;
    this._results = [];
    this._error = null;
    this._onReturn = onReturn;
    this._onStateChanged = new Emitter();
    queueMicrotask(async () => {
      const writer = {
        emitOne: (item) => this.emitOne(item),
        emitMany: (items) => this.emitMany(items),
        reject: (error) => this.reject(error)
      };
      try {
        await Promise.resolve(executor(writer));
        this.resolve();
      } catch (err) {
        this.reject(err);
      } finally {
        writer.emitOne = void 0;
        writer.emitMany = void 0;
        writer.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next: async () => {
        do {
          if (this._state === 2) {
            throw this._error;
          }
          if (i < this._results.length) {
            return { done: false, value: this._results[i++] };
          }
          if (this._state === 1) {
            return { done: true, value: void 0 };
          }
          await Event.toPromise(this._onStateChanged.event);
        } while (true);
      },
      return: async () => {
        this._onReturn?.();
        return { done: true, value: void 0 };
      }
    };
  }
  static map(iterable, mapFn) {
    return new AsyncIterableObject(async (emitter) => {
      for await (const item of iterable) {
        emitter.emitOne(mapFn(item));
      }
    });
  }
  map(mapFn) {
    return AsyncIterableObject.map(this, mapFn);
  }
  static filter(iterable, filterFn) {
    return new AsyncIterableObject(async (emitter) => {
      for await (const item of iterable) {
        if (filterFn(item)) {
          emitter.emitOne(item);
        }
      }
    });
  }
  filter(filterFn) {
    return AsyncIterableObject.filter(this, filterFn);
  }
  static coalesce(iterable) {
    return AsyncIterableObject.filter(iterable, (item) => !!item);
  }
  coalesce() {
    return AsyncIterableObject.coalesce(this);
  }
  static async toPromise(iterable) {
    const result = [];
    for await (const item of iterable) {
      result.push(item);
    }
    return result;
  }
  toPromise() {
    return AsyncIterableObject.toPromise(this);
  }
  /**
   * The value will be appended at the end.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  emitOne(value) {
    if (this._state !== 0) {
      return;
    }
    this._results.push(value);
    this._onStateChanged.fire();
  }
  /**
   * The values will be appended at the end.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  emitMany(values) {
    if (this._state !== 0) {
      return;
    }
    this._results = this._results.concat(values);
    this._onStateChanged.fire();
  }
  /**
   * Calling `resolve()` will mark the result array as complete.
   *
   * **NOTE** `resolve()` must be called, otherwise all consumers of this iterable will hang indefinitely, similar to a non-resolved promise.
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  resolve() {
    if (this._state !== 0) {
      return;
    }
    this._state = 1;
    this._onStateChanged.fire();
  }
  /**
   * Writing an error will permanently invalidate this iterable.
   * The current users will receive an error thrown, as will all future users.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  reject(error) {
    if (this._state !== 0) {
      return;
    }
    this._state = 2;
    this._error = error;
    this._onStateChanged.fire();
  }
}
class CancelableAsyncIterableObject extends AsyncIterableObject {
  constructor(_source, executor) {
    super(executor);
    this._source = _source;
  }
  cancel() {
    this._source.cancel();
  }
}
function createCancelableAsyncIterable(callback) {
  const source = new CancellationTokenSource();
  const innerIterable = callback(source.token);
  return new CancelableAsyncIterableObject(source, async (emitter) => {
    const subscription = source.token.onCancellationRequested(() => {
      subscription.dispose();
      source.dispose();
      emitter.reject(new CancellationError());
    });
    try {
      for await (const item of innerIterable) {
        if (source.token.isCancellationRequested) {
          return;
        }
        emitter.emitOne(item);
      }
      subscription.dispose();
      source.dispose();
    } catch (err) {
      subscription.dispose();
      source.dispose();
      emitter.reject(err);
    }
  });
}
/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
const {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor
} = Object;
let {
  freeze,
  seal,
  create
} = Object;
let {
  apply,
  construct
} = typeof Reflect !== "undefined" && Reflect;
if (!freeze) {
  freeze = function freeze2(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal2(x) {
    return x;
  };
}
if (!apply) {
  apply = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return new Func(...args);
  };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set, null);
  }
  let l = array.length;
  while (l--) {
    let element = array[l];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) {
    const isPropertyExist = objectHasOwnProperty(array, index);
    if (!isPropertyExist) {
      array[index] = null;
    }
  }
  return array;
}
function clone(object) {
  const newObject = create(null);
  for (const [property, value] of entries(object)) {
    const isPropertyExist = objectHasOwnProperty(object, property);
    if (isPropertyExist) {
      if (Array.isArray(value)) {
        newObject[property] = cleanArray(value);
      } else if (value && typeof value === "object" && value.constructor === Object) {
        newObject[property] = clone(value);
      } else {
        newObject[property] = value;
      }
    }
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
const html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
const svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
const svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
const svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
const mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
const mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
const text = freeze(["#text"]);
const html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
const svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
const mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
const xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
const IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR,
  ERB_EXPR,
  TMPLIT_EXPR,
  DATA_ATTR,
  ARIA_ATTR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  ATTR_WHITESPACE,
  DOCTYPE_NAME,
  CUSTOM_ELEMENT
});
const NODE_TYPE = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
};
const getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.1.7";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let {
    document: document2
  } = window2;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node,
    Element,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes
  } = window2;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName
  } = document2;
  const {
    importNode
  } = originalDocument;
  let hooks = {};
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT2
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(
      clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      transformCaseFunc
      // eslint-disable-line indent
    ) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(
      clone(DEFAULT_DATA_URI_TAGS),
      // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      transformCaseFunc
      // eslint-disable-line indent
    ) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
    FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      emptyHTML = trustedTypesPolicy.createHTML("");
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
        emptyHTML = trustedTypesPolicy.createHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  const HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      getParentNode(node).removeChild(node);
    } catch (_) {
      remove(node);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, node) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: node
      });
    }
    node.removeAttribute(name);
    if (name === "is" && !ALLOWED_ATTR[name]) {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(node);
        } catch (_) {
        }
      } else {
        try {
          node.setAttribute(name, "");
        } catch (_) {
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    return createNodeIterator.call(
      root.ownerDocument || root,
      root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _isClobbered = function _isClobbered2(elm) {
    return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
  };
  const _isNode = function _isNode2(object) {
    return typeof Node === "function" && object instanceof Node;
  };
  const _executeHook = function _executeHook2(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }
    arrayForEach(hooks[entryPoint], (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content = null;
    _executeHook("beforeSanitizeElements", currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(currentNode.nodeName);
    _executeHook("uponSanitizeElement", currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
          return false;
        }
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
          return false;
        }
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i = childCount - 1; i >= 0; --i) {
            const childClone = cloneNode(childNodes[i], true);
            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
            parentNode.insertBefore(childClone, getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      content = currentNode.textContent;
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        content = stringReplace(content, expr, " ");
      });
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHook("afterSanitizeElements", currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName)) ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName)) ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      ) ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if (value) {
      return false;
    } else ;
    return true;
  };
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHook("beforeSanitizeAttributes", currentNode, null);
    const {
      attributes
    } = currentNode;
    if (!attributes) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    let l = attributes.length;
    while (l--) {
      const attr = attributes[l];
      const {
        name,
        namespaceURI,
        value: attrValue
      } = attr;
      const lcName = transformCaseFunc(name);
      let value = name === "value" ? attrValue : stringTrim(attrValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      _removeAttribute(name, currentNode);
      if (!hookEvent.keepAttr) {
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          value = stringReplace(value, expr, " ");
        });
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI) ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value = trustedTypesPolicy.createHTML(value);
              break;
            }
            case "TrustedScriptURL": {
              value = trustedTypesPolicy.createScriptURL(value);
              break;
            }
          }
        }
      }
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          currentNode.setAttribute(name, value);
        }
        if (_isClobbered(currentNode)) {
          _forceRemove(currentNode);
        } else {
          arrayPop(DOMPurify.removed);
        }
      } catch (_) {
      }
    }
    _executeHook("afterSanitizeAttributes", currentNode, null);
  };
  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHook("beforeSanitizeShadowDOM", fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHook("uponSanitizeShadowNode", shadowNode, null);
      if (_sanitizeElements(shadowNode)) {
        continue;
      }
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
      _sanitizeAttributes(shadowNode);
    }
    _executeHook("afterSanitizeShadowDOM", fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString === "function") {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      } else {
        throw typeErrorCreate("toString is not a function");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        const tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      if (_sanitizeElements(currentNode)) {
        continue;
      }
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
      _sanitizeAttributes(currentNode);
    }
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        serializedHTML = stringReplace(serializedHTML, expr, " ");
      });
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    hooks[entryPoint] = hooks[entryPoint] || [];
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint) {
    if (hooks[entryPoint]) {
      return arrayPop(hooks[entryPoint]);
    }
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };
  DOMPurify.removeAllHooks = function() {
    hooks = {};
  };
  return DOMPurify;
}
var purify = createDOMPurify();
purify.version;
purify.isSupported;
const sanitize = purify.sanitize;
purify.setConfig;
purify.clearConfig;
purify.isValidAttribute;
const addHook = purify.addHook;
const removeHook = purify.removeHook;
purify.removeHooks;
purify.removeAllHooks;
function identity(t) {
  return t;
}
class LRUCachedFunction {
  constructor(arg1, arg2) {
    this.lastCache = void 0;
    this.lastArgKey = void 0;
    if (typeof arg1 === "function") {
      this._fn = arg1;
      this._computeKey = identity;
    } else {
      this._fn = arg2;
      this._computeKey = arg1.getCacheKey;
    }
  }
  get(arg) {
    const key = this._computeKey(arg);
    if (this.lastArgKey !== key) {
      this.lastArgKey = key;
      this.lastCache = this._fn(arg);
    }
    return this.lastCache;
  }
}
class CachedFunction {
  get cachedValues() {
    return this._map;
  }
  constructor(arg1, arg2) {
    this._map = /* @__PURE__ */ new Map();
    this._map2 = /* @__PURE__ */ new Map();
    if (typeof arg1 === "function") {
      this._fn = arg1;
      this._computeKey = identity;
    } else {
      this._fn = arg2;
      this._computeKey = arg1.getCacheKey;
    }
  }
  get(arg) {
    const key = this._computeKey(arg);
    if (this._map2.has(key)) {
      return this._map2.get(key);
    }
    const value = this._fn(arg);
    this._map.set(arg, value);
    this._map2.set(key, value);
    return value;
  }
}
class Lazy {
  constructor(executor) {
    this.executor = executor;
    this._didRun = false;
  }
  /**
   * Get the wrapped value.
   *
   * This will force evaluation of the lazy value if it has not been resolved yet. Lazy values are only
   * resolved once. `getValue` will re-throw exceptions that are hit while resolving the value
   */
  get value() {
    if (!this._didRun) {
      try {
        this._value = this.executor();
      } catch (err) {
        this._error = err;
      } finally {
        this._didRun = true;
      }
    }
    if (this._error) {
      throw this._error;
    }
    return this._value;
  }
  /**
   * Get the wrapped value without forcing evaluation.
   */
  get rawValue() {
    return this._value;
  }
}
function isFalsyOrWhitespace(str) {
  if (!str || typeof str !== "string") {
    return true;
  }
  return str.trim().length === 0;
}
const _formatRegexp = /{(\d+)}/g;
function format(value, ...args) {
  if (args.length === 0) {
    return value;
  }
  return value.replace(_formatRegexp, function(match, group) {
    const idx = parseInt(group, 10);
    return isNaN(idx) || idx < 0 || idx >= args.length ? match : args[idx];
  });
}
function htmlAttributeEncodeValue(value) {
  return value.replace(/[<>"'&]/g, (ch) => {
    switch (ch) {
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
    return ch;
  });
}
function escape(html2) {
  return html2.replace(/[<>&]/g, function(match) {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      default:
        return match;
    }
  });
}
function escapeRegExpCharacters(value) {
  return value.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function trim(haystack, needle = " ") {
  const trimmed = ltrim(haystack, needle);
  return rtrim(trimmed, needle);
}
function ltrim(haystack, needle) {
  if (!haystack || !needle) {
    return haystack;
  }
  const needleLen = needle.length;
  if (needleLen === 0 || haystack.length === 0) {
    return haystack;
  }
  let offset = 0;
  while (haystack.indexOf(needle, offset) === offset) {
    offset = offset + needleLen;
  }
  return haystack.substring(offset);
}
function rtrim(haystack, needle) {
  if (!haystack || !needle) {
    return haystack;
  }
  const needleLen = needle.length, haystackLen = haystack.length;
  if (needleLen === 0 || haystackLen === 0) {
    return haystack;
  }
  let offset = haystackLen, idx = -1;
  while (true) {
    idx = haystack.lastIndexOf(needle, offset - 1);
    if (idx === -1 || idx + needleLen !== offset) {
      break;
    }
    if (idx === 0) {
      return "";
    }
    offset = idx;
  }
  return haystack.substring(0, offset);
}
function convertSimple2RegExpPattern(pattern) {
  return pattern.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*");
}
function stripWildcards(pattern) {
  return pattern.replace(/\*/g, "");
}
function createRegExp(searchString, isRegex, options = {}) {
  if (!searchString) {
    throw new Error("Cannot create regex from empty string");
  }
  if (!isRegex) {
    searchString = escapeRegExpCharacters(searchString);
  }
  if (options.wholeWord) {
    if (!/\B/.test(searchString.charAt(0))) {
      searchString = "\\b" + searchString;
    }
    if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
      searchString = searchString + "\\b";
    }
  }
  let modifiers = "";
  if (options.global) {
    modifiers += "g";
  }
  if (!options.matchCase) {
    modifiers += "i";
  }
  if (options.multiline) {
    modifiers += "m";
  }
  if (options.unicode) {
    modifiers += "u";
  }
  return new RegExp(searchString, modifiers);
}
function regExpLeadsToEndlessLoop(regexp) {
  if (regexp.source === "^" || regexp.source === "^$" || regexp.source === "$" || regexp.source === "^\\s*$") {
    return false;
  }
  const match = regexp.exec("");
  return !!(match && regexp.lastIndex === 0);
}
function splitLines(str) {
  return str.split(/\r\n|\r|\n/);
}
function splitLinesIncludeSeparators(str) {
  const linesWithSeparators = [];
  const splitLinesAndSeparators = str.split(/(\r\n|\r|\n)/);
  for (let i = 0; i < Math.ceil(splitLinesAndSeparators.length / 2); i++) {
    linesWithSeparators.push(splitLinesAndSeparators[2 * i] + (splitLinesAndSeparators[2 * i + 1] ?? ""));
  }
  return linesWithSeparators;
}
function firstNonWhitespaceIndex(str) {
  for (let i = 0, len = str.length; i < len; i++) {
    const chCode = str.charCodeAt(i);
    if (chCode !== 32 && chCode !== 9) {
      return i;
    }
  }
  return -1;
}
function getLeadingWhitespace(str, start = 0, end = str.length) {
  for (let i = start; i < end; i++) {
    const chCode = str.charCodeAt(i);
    if (chCode !== 32 && chCode !== 9) {
      return str.substring(start, i);
    }
  }
  return str.substring(start, end);
}
function lastNonWhitespaceIndex(str, startIndex = str.length - 1) {
  for (let i = startIndex; i >= 0; i--) {
    const chCode = str.charCodeAt(i);
    if (chCode !== 32 && chCode !== 9) {
      return i;
    }
  }
  return -1;
}
function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
function compareSubstring(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    const codeA = a.charCodeAt(aStart);
    const codeB = b.charCodeAt(bStart);
    if (codeA < codeB) {
      return -1;
    } else if (codeA > codeB) {
      return 1;
    }
  }
  const aLen = aEnd - aStart;
  const bLen = bEnd - bStart;
  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }
  return 0;
}
function compareIgnoreCase(a, b) {
  return compareSubstringIgnoreCase(a, b, 0, a.length, 0, b.length);
}
function compareSubstringIgnoreCase(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    let codeA = a.charCodeAt(aStart);
    let codeB = b.charCodeAt(bStart);
    if (codeA === codeB) {
      continue;
    }
    if (codeA >= 128 || codeB >= 128) {
      return compareSubstring(a.toLowerCase(), b.toLowerCase(), aStart, aEnd, bStart, bEnd);
    }
    if (isLowerAsciiLetter(codeA)) {
      codeA -= 32;
    }
    if (isLowerAsciiLetter(codeB)) {
      codeB -= 32;
    }
    const diff = codeA - codeB;
    if (diff === 0) {
      continue;
    }
    return diff;
  }
  const aLen = aEnd - aStart;
  const bLen = bEnd - bStart;
  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }
  return 0;
}
function isAsciiDigit(code) {
  return code >= 48 && code <= 57;
}
function isLowerAsciiLetter(code) {
  return code >= 97 && code <= 122;
}
function isUpperAsciiLetter(code) {
  return code >= 65 && code <= 90;
}
function equalsIgnoreCase(a, b) {
  return a.length === b.length && compareSubstringIgnoreCase(a, b) === 0;
}
function startsWithIgnoreCase(str, candidate) {
  const candidateLength = candidate.length;
  if (candidate.length > str.length) {
    return false;
  }
  return compareSubstringIgnoreCase(str, candidate, 0, candidateLength) === 0;
}
function commonPrefixLength(a, b) {
  const len = Math.min(a.length, b.length);
  let i;
  for (i = 0; i < len; i++) {
    if (a.charCodeAt(i) !== b.charCodeAt(i)) {
      return i;
    }
  }
  return len;
}
function commonSuffixLength(a, b) {
  const len = Math.min(a.length, b.length);
  let i;
  const aLastIndex = a.length - 1;
  const bLastIndex = b.length - 1;
  for (i = 0; i < len; i++) {
    if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
      return i;
    }
  }
  return len;
}
function isHighSurrogate(charCode) {
  return 55296 <= charCode && charCode <= 56319;
}
function isLowSurrogate(charCode) {
  return 56320 <= charCode && charCode <= 57343;
}
function computeCodePoint(highSurrogate, lowSurrogate) {
  return (highSurrogate - 55296 << 10) + (lowSurrogate - 56320) + 65536;
}
function getNextCodePoint(str, len, offset) {
  const charCode = str.charCodeAt(offset);
  if (isHighSurrogate(charCode) && offset + 1 < len) {
    const nextCharCode = str.charCodeAt(offset + 1);
    if (isLowSurrogate(nextCharCode)) {
      return computeCodePoint(charCode, nextCharCode);
    }
  }
  return charCode;
}
function getPrevCodePoint(str, offset) {
  const charCode = str.charCodeAt(offset - 1);
  if (isLowSurrogate(charCode) && offset > 1) {
    const prevCharCode = str.charCodeAt(offset - 2);
    if (isHighSurrogate(prevCharCode)) {
      return computeCodePoint(prevCharCode, charCode);
    }
  }
  return charCode;
}
class CodePointIterator {
  get offset() {
    return this._offset;
  }
  constructor(str, offset = 0) {
    this._str = str;
    this._len = str.length;
    this._offset = offset;
  }
  setOffset(offset) {
    this._offset = offset;
  }
  prevCodePoint() {
    const codePoint = getPrevCodePoint(this._str, this._offset);
    this._offset -= codePoint >= 65536 ? 2 : 1;
    return codePoint;
  }
  nextCodePoint() {
    const codePoint = getNextCodePoint(this._str, this._len, this._offset);
    this._offset += codePoint >= 65536 ? 2 : 1;
    return codePoint;
  }
  eol() {
    return this._offset >= this._len;
  }
}
class GraphemeIterator {
  get offset() {
    return this._iterator.offset;
  }
  constructor(str, offset = 0) {
    this._iterator = new CodePointIterator(str, offset);
  }
  nextGraphemeLength() {
    const graphemeBreakTree = GraphemeBreakTree.getInstance();
    const iterator = this._iterator;
    const initialOffset = iterator.offset;
    let graphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.nextCodePoint());
    while (!iterator.eol()) {
      const offset = iterator.offset;
      const nextGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.nextCodePoint());
      if (breakBetweenGraphemeBreakType(graphemeBreakType, nextGraphemeBreakType)) {
        iterator.setOffset(offset);
        break;
      }
      graphemeBreakType = nextGraphemeBreakType;
    }
    return iterator.offset - initialOffset;
  }
  prevGraphemeLength() {
    const graphemeBreakTree = GraphemeBreakTree.getInstance();
    const iterator = this._iterator;
    const initialOffset = iterator.offset;
    let graphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.prevCodePoint());
    while (iterator.offset > 0) {
      const offset = iterator.offset;
      const prevGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.prevCodePoint());
      if (breakBetweenGraphemeBreakType(prevGraphemeBreakType, graphemeBreakType)) {
        iterator.setOffset(offset);
        break;
      }
      graphemeBreakType = prevGraphemeBreakType;
    }
    return initialOffset - iterator.offset;
  }
  eol() {
    return this._iterator.eol();
  }
}
function nextCharLength(str, initialOffset) {
  const iterator = new GraphemeIterator(str, initialOffset);
  return iterator.nextGraphemeLength();
}
function prevCharLength(str, initialOffset) {
  const iterator = new GraphemeIterator(str, initialOffset);
  return iterator.prevGraphemeLength();
}
function getCharContainingOffset(str, offset) {
  if (offset > 0 && isLowSurrogate(str.charCodeAt(offset))) {
    offset--;
  }
  const endOffset = offset + nextCharLength(str, offset);
  const startOffset = endOffset - prevCharLength(str, endOffset);
  return [startOffset, endOffset];
}
let CONTAINS_RTL = void 0;
function makeContainsRtl() {
  return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
}
function containsRTL(str) {
  if (!CONTAINS_RTL) {
    CONTAINS_RTL = makeContainsRtl();
  }
  return CONTAINS_RTL.test(str);
}
const IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
function isBasicASCII(str) {
  return IS_BASIC_ASCII.test(str);
}
const UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/;
function containsUnusualLineTerminators(str) {
  return UNUSUAL_LINE_TERMINATORS.test(str);
}
function isFullWidthCharacter(charCode) {
  return charCode >= 11904 && charCode <= 55215 || charCode >= 63744 && charCode <= 64255 || charCode >= 65281 && charCode <= 65374;
}
function isEmojiImprecise(x) {
  return x >= 127462 && x <= 127487 || x === 8986 || x === 8987 || x === 9200 || x === 9203 || x >= 9728 && x <= 10175 || x === 11088 || x === 11093 || x >= 127744 && x <= 128591 || x >= 128640 && x <= 128764 || x >= 128992 && x <= 129008 || x >= 129280 && x <= 129535 || x >= 129648 && x <= 129782;
}
const UTF8_BOM_CHARACTER = String.fromCharCode(
  65279
  /* CharCode.UTF8_BOM */
);
function startsWithUTF8BOM(str) {
  return !!(str && str.length > 0 && str.charCodeAt(0) === 65279);
}
function containsUppercaseCharacter(target, ignoreEscapedChars = false) {
  if (!target) {
    return false;
  }
  if (ignoreEscapedChars) {
    target = target.replace(/\\./g, "");
  }
  return target.toLowerCase() !== target;
}
function singleLetterHash(n) {
  const LETTERS_CNT = 90 - 65 + 1;
  n = n % (2 * LETTERS_CNT);
  if (n < LETTERS_CNT) {
    return String.fromCharCode(97 + n);
  }
  return String.fromCharCode(65 + n - LETTERS_CNT);
}
function breakBetweenGraphemeBreakType(breakTypeA, breakTypeB) {
  if (breakTypeA === 0) {
    return breakTypeB !== 5 && breakTypeB !== 7;
  }
  if (breakTypeA === 2) {
    if (breakTypeB === 3) {
      return false;
    }
  }
  if (breakTypeA === 4 || breakTypeA === 2 || breakTypeA === 3) {
    return true;
  }
  if (breakTypeB === 4 || breakTypeB === 2 || breakTypeB === 3) {
    return true;
  }
  if (breakTypeA === 8) {
    if (breakTypeB === 8 || breakTypeB === 9 || breakTypeB === 11 || breakTypeB === 12) {
      return false;
    }
  }
  if (breakTypeA === 11 || breakTypeA === 9) {
    if (breakTypeB === 9 || breakTypeB === 10) {
      return false;
    }
  }
  if (breakTypeA === 12 || breakTypeA === 10) {
    if (breakTypeB === 10) {
      return false;
    }
  }
  if (breakTypeB === 5 || breakTypeB === 13) {
    return false;
  }
  if (breakTypeB === 7) {
    return false;
  }
  if (breakTypeA === 1) {
    return false;
  }
  if (breakTypeA === 13 && breakTypeB === 14) {
    return false;
  }
  if (breakTypeA === 6 && breakTypeB === 6) {
    return false;
  }
  return true;
}
class GraphemeBreakTree {
  static {
    this._INSTANCE = null;
  }
  static getInstance() {
    if (!GraphemeBreakTree._INSTANCE) {
      GraphemeBreakTree._INSTANCE = new GraphemeBreakTree();
    }
    return GraphemeBreakTree._INSTANCE;
  }
  constructor() {
    this._data = getGraphemeBreakRawData();
  }
  getGraphemeBreakType(codePoint) {
    if (codePoint < 32) {
      if (codePoint === 10) {
        return 3;
      }
      if (codePoint === 13) {
        return 2;
      }
      return 4;
    }
    if (codePoint < 127) {
      return 0;
    }
    const data = this._data;
    const nodeCount = data.length / 3;
    let nodeIndex = 1;
    while (nodeIndex <= nodeCount) {
      if (codePoint < data[3 * nodeIndex]) {
        nodeIndex = 2 * nodeIndex;
      } else if (codePoint > data[3 * nodeIndex + 1]) {
        nodeIndex = 2 * nodeIndex + 1;
      } else {
        return data[3 * nodeIndex + 2];
      }
    }
    return 0;
  }
}
function getGraphemeBreakRawData() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
function getLeftDeleteOffset(offset, str) {
  if (offset === 0) {
    return 0;
  }
  const emojiOffset = getOffsetBeforeLastEmojiComponent(offset, str);
  if (emojiOffset !== void 0) {
    return emojiOffset;
  }
  const iterator = new CodePointIterator(str, offset);
  iterator.prevCodePoint();
  return iterator.offset;
}
function getOffsetBeforeLastEmojiComponent(initialOffset, str) {
  const iterator = new CodePointIterator(str, initialOffset);
  let codePoint = iterator.prevCodePoint();
  while (isEmojiModifier(codePoint) || codePoint === 65039 || codePoint === 8419) {
    if (iterator.offset === 0) {
      return void 0;
    }
    codePoint = iterator.prevCodePoint();
  }
  if (!isEmojiImprecise(codePoint)) {
    return void 0;
  }
  let resultOffset = iterator.offset;
  if (resultOffset > 0) {
    const optionalZwjCodePoint = iterator.prevCodePoint();
    if (optionalZwjCodePoint === 8205) {
      resultOffset = iterator.offset;
    }
  }
  return resultOffset;
}
function isEmojiModifier(codePoint) {
  return 127995 <= codePoint && codePoint <= 127999;
}
const noBreakWhitespace = " ";
class AmbiguousCharacters {
  static {
    this.ambiguousCharacterData = new Lazy(() => {
      return JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}');
    });
  }
  static {
    this.cache = new LRUCachedFunction({ getCacheKey: JSON.stringify }, (locales) => {
      function arrayToMap(arr) {
        const result = /* @__PURE__ */ new Map();
        for (let i = 0; i < arr.length; i += 2) {
          result.set(arr[i], arr[i + 1]);
        }
        return result;
      }
      function mergeMaps(map1, map2) {
        const result = new Map(map1);
        for (const [key, value] of map2) {
          result.set(key, value);
        }
        return result;
      }
      function intersectMaps(map1, map2) {
        if (!map1) {
          return map2;
        }
        const result = /* @__PURE__ */ new Map();
        for (const [key, value] of map1) {
          if (map2.has(key)) {
            result.set(key, value);
          }
        }
        return result;
      }
      const data = this.ambiguousCharacterData.value;
      let filteredLocales = locales.filter((l) => !l.startsWith("_") && l in data);
      if (filteredLocales.length === 0) {
        filteredLocales = ["_default"];
      }
      let languageSpecificMap = void 0;
      for (const locale of filteredLocales) {
        const map2 = arrayToMap(data[locale]);
        languageSpecificMap = intersectMaps(languageSpecificMap, map2);
      }
      const commonMap = arrayToMap(data["_common"]);
      const map = mergeMaps(commonMap, languageSpecificMap);
      return new AmbiguousCharacters(map);
    });
  }
  static getInstance(locales) {
    return AmbiguousCharacters.cache.get(Array.from(locales));
  }
  static {
    this._locales = new Lazy(() => Object.keys(AmbiguousCharacters.ambiguousCharacterData.value).filter((k) => !k.startsWith("_")));
  }
  static getLocales() {
    return AmbiguousCharacters._locales.value;
  }
  constructor(confusableDictionary) {
    this.confusableDictionary = confusableDictionary;
  }
  isAmbiguous(codePoint) {
    return this.confusableDictionary.has(codePoint);
  }
  /**
   * Returns the non basic ASCII code point that the given code point can be confused,
   * or undefined if such code point does note exist.
   */
  getPrimaryConfusable(codePoint) {
    return this.confusableDictionary.get(codePoint);
  }
  getConfusableCodePoints() {
    return new Set(this.confusableDictionary.keys());
  }
}
class InvisibleCharacters {
  static getRawData() {
    return JSON.parse("[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]");
  }
  static {
    this._data = void 0;
  }
  static getData() {
    if (!this._data) {
      this._data = new Set(InvisibleCharacters.getRawData());
    }
    return this._data;
  }
  static isInvisibleCharacter(codePoint) {
    return InvisibleCharacters.getData().has(codePoint);
  }
  static get codePoints() {
    return InvisibleCharacters.getData();
  }
}
var Schemas;
(function(Schemas2) {
  Schemas2.inMemory = "inmemory";
  Schemas2.vscode = "vscode";
  Schemas2.internal = "private";
  Schemas2.walkThrough = "walkThrough";
  Schemas2.walkThroughSnippet = "walkThroughSnippet";
  Schemas2.http = "http";
  Schemas2.https = "https";
  Schemas2.file = "file";
  Schemas2.mailto = "mailto";
  Schemas2.untitled = "untitled";
  Schemas2.data = "data";
  Schemas2.command = "command";
  Schemas2.vscodeRemote = "vscode-remote";
  Schemas2.vscodeRemoteResource = "vscode-remote-resource";
  Schemas2.vscodeManagedRemoteResource = "vscode-managed-remote-resource";
  Schemas2.vscodeUserData = "vscode-userdata";
  Schemas2.vscodeCustomEditor = "vscode-custom-editor";
  Schemas2.vscodeNotebookCell = "vscode-notebook-cell";
  Schemas2.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata";
  Schemas2.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff";
  Schemas2.vscodeNotebookCellOutput = "vscode-notebook-cell-output";
  Schemas2.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff";
  Schemas2.vscodeNotebookMetadata = "vscode-notebook-metadata";
  Schemas2.vscodeInteractiveInput = "vscode-interactive-input";
  Schemas2.vscodeSettings = "vscode-settings";
  Schemas2.vscodeWorkspaceTrust = "vscode-workspace-trust";
  Schemas2.vscodeTerminal = "vscode-terminal";
  Schemas2.vscodeChatCodeBlock = "vscode-chat-code-block";
  Schemas2.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block";
  Schemas2.vscodeChatSesssion = "vscode-chat-editor";
  Schemas2.webviewPanel = "webview-panel";
  Schemas2.vscodeWebview = "vscode-webview";
  Schemas2.extension = "extension";
  Schemas2.vscodeFileResource = "vscode-file";
  Schemas2.tmp = "tmp";
  Schemas2.vsls = "vsls";
  Schemas2.vscodeSourceControl = "vscode-scm";
  Schemas2.commentsInput = "comment";
  Schemas2.codeSetting = "code-setting";
  Schemas2.outputChannel = "output";
})(Schemas || (Schemas = {}));
function matchesScheme(target, scheme) {
  if (URI.isUri(target)) {
    return equalsIgnoreCase(target.scheme, scheme);
  } else {
    return startsWithIgnoreCase(target, scheme + ":");
  }
}
function matchesSomeScheme(target, ...schemes) {
  return schemes.some((scheme) => matchesScheme(target, scheme));
}
const connectionTokenQueryName = "tkn";
class RemoteAuthoritiesImpl {
  constructor() {
    this._hosts = /* @__PURE__ */ Object.create(null);
    this._ports = /* @__PURE__ */ Object.create(null);
    this._connectionTokens = /* @__PURE__ */ Object.create(null);
    this._preferredWebSchema = "http";
    this._delegate = null;
    this._serverRootPath = "/";
  }
  setPreferredWebSchema(schema) {
    this._preferredWebSchema = schema;
  }
  get _remoteResourcesPath() {
    return posix.join(this._serverRootPath, Schemas.vscodeRemoteResource);
  }
  rewrite(uri) {
    if (this._delegate) {
      try {
        return this._delegate(uri);
      } catch (err) {
        onUnexpectedError(err);
        return uri;
      }
    }
    const authority = uri.authority;
    let host = this._hosts[authority];
    if (host && host.indexOf(":") !== -1 && host.indexOf("[") === -1) {
      host = `[${host}]`;
    }
    const port = this._ports[authority];
    const connectionToken = this._connectionTokens[authority];
    let query = `path=${encodeURIComponent(uri.path)}`;
    if (typeof connectionToken === "string") {
      query += `&${connectionTokenQueryName}=${encodeURIComponent(connectionToken)}`;
    }
    return URI.from({
      scheme: isWeb ? this._preferredWebSchema : Schemas.vscodeRemoteResource,
      authority: `${host}:${port}`,
      path: this._remoteResourcesPath,
      query
    });
  }
}
const RemoteAuthorities = new RemoteAuthoritiesImpl();
const VSCODE_AUTHORITY = "vscode-app";
class FileAccessImpl {
  static {
    this.FALLBACK_AUTHORITY = VSCODE_AUTHORITY;
  }
  /**
   * Returns a URI to use in contexts where the browser is responsible
   * for loading (e.g. fetch()) or when used within the DOM.
   *
   * **Note:** use `dom.ts#asCSSUrl` whenever the URL is to be used in CSS context.
   */
  asBrowserUri(resourcePath) {
    const uri = this.toUri(resourcePath);
    return this.uriToBrowserUri(uri);
  }
  /**
   * Returns a URI to use in contexts where the browser is responsible
   * for loading (e.g. fetch()) or when used within the DOM.
   *
   * **Note:** use `dom.ts#asCSSUrl` whenever the URL is to be used in CSS context.
   */
  uriToBrowserUri(uri) {
    if (uri.scheme === Schemas.vscodeRemote) {
      return RemoteAuthorities.rewrite(uri);
    }
    if (
      // ...only ever for `file` resources
      uri.scheme === Schemas.file && // ...and we run in native environments
      (isNative || // ...or web worker extensions on desktop
      webWorkerOrigin === `${Schemas.vscodeFileResource}://${FileAccessImpl.FALLBACK_AUTHORITY}`)
    ) {
      return uri.with({
        scheme: Schemas.vscodeFileResource,
        // We need to provide an authority here so that it can serve
        // as origin for network and loading matters in chromium.
        // If the URI is not coming with an authority already, we
        // add our own
        authority: uri.authority || FileAccessImpl.FALLBACK_AUTHORITY,
        query: null,
        fragment: null
      });
    }
    return uri;
  }
  toUri(uriOrModule, moduleIdToUrl) {
    if (URI.isUri(uriOrModule)) {
      return uriOrModule;
    }
    if (globalThis._VSCODE_FILE_ROOT) {
      const rootUriOrPath = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(rootUriOrPath)) {
        return URI.joinPath(URI.parse(rootUriOrPath, true), uriOrModule);
      }
      const modulePath = join(rootUriOrPath, uriOrModule);
      return URI.file(modulePath);
    }
    return URI.parse(moduleIdToUrl.toUrl(uriOrModule));
  }
}
const FileAccess = new FileAccessImpl();
var COI;
(function(COI2) {
  const coiHeaders = /* @__PURE__ */ new Map([
    ["1", { "Cross-Origin-Opener-Policy": "same-origin" }],
    ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }],
    ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]
  ]);
  COI2.CoopAndCoep = Object.freeze(coiHeaders.get("3"));
  const coiSearchParamName = "vscode-coi";
  function getHeadersFromQuery(url) {
    let params;
    if (typeof url === "string") {
      params = new URL(url).searchParams;
    } else if (url instanceof URL) {
      params = url.searchParams;
    } else if (URI.isUri(url)) {
      params = new URL(url.toString(true)).searchParams;
    }
    const value = params?.get(coiSearchParamName);
    if (!value) {
      return void 0;
    }
    return coiHeaders.get(value);
  }
  COI2.getHeadersFromQuery = getHeadersFromQuery;
  function addSearchParam(urlOrSearch, coop, coep) {
    if (!globalThis.crossOriginIsolated) {
      return;
    }
    const value = coop && coep ? "3" : coep ? "2" : "1";
    if (urlOrSearch instanceof URLSearchParams) {
      urlOrSearch.set(coiSearchParamName, value);
    } else {
      urlOrSearch[coiSearchParamName] = value;
    }
  }
  COI2.addSearchParam = addSearchParam;
})(COI || (COI = {}));
function hash(obj) {
  return doHash(obj, 0);
}
function doHash(obj, hashVal) {
  switch (typeof obj) {
    case "object":
      if (obj === null) {
        return numberHash(349, hashVal);
      } else if (Array.isArray(obj)) {
        return arrayHash(obj, hashVal);
      }
      return objectHash(obj, hashVal);
    case "string":
      return stringHash(obj, hashVal);
    case "boolean":
      return booleanHash(obj, hashVal);
    case "number":
      return numberHash(obj, hashVal);
    case "undefined":
      return numberHash(937, hashVal);
    default:
      return numberHash(617, hashVal);
  }
}
function numberHash(val, initialHashVal) {
  return (initialHashVal << 5) - initialHashVal + val | 0;
}
function booleanHash(b, initialHashVal) {
  return numberHash(b ? 433 : 863, initialHashVal);
}
function stringHash(s, hashVal) {
  hashVal = numberHash(149417, hashVal);
  for (let i = 0, length = s.length; i < length; i++) {
    hashVal = numberHash(s.charCodeAt(i), hashVal);
  }
  return hashVal;
}
function arrayHash(arr, initialHashVal) {
  initialHashVal = numberHash(104579, initialHashVal);
  return arr.reduce((hashVal, item) => doHash(item, hashVal), initialHashVal);
}
function objectHash(obj, initialHashVal) {
  initialHashVal = numberHash(181387, initialHashVal);
  return Object.keys(obj).sort().reduce((hashVal, key) => {
    hashVal = stringHash(key, hashVal);
    return doHash(obj[key], hashVal);
  }, initialHashVal);
}
function leftRotate(value, bits, totalBits = 32) {
  const delta = totalBits - bits;
  const mask = ~((1 << delta) - 1);
  return (value << bits | (mask & value) >>> delta) >>> 0;
}
function fill(dest, index = 0, count = dest.byteLength, value = 0) {
  for (let i = 0; i < count; i++) {
    dest[index + i] = value;
  }
}
function leftPad(value, length, char = "0") {
  while (value.length < length) {
    value = char + value;
  }
  return value;
}
function toHexString(bufferOrValue, bitsize = 32) {
  if (bufferOrValue instanceof ArrayBuffer) {
    return Array.from(new Uint8Array(bufferOrValue)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return leftPad((bufferOrValue >>> 0).toString(16), bitsize / 4);
}
class StringSHA1 {
  static {
    this._bigBlock32 = new DataView(new ArrayBuffer(320));
  }
  // 80 * 4 = 320
  constructor() {
    this._h0 = 1732584193;
    this._h1 = 4023233417;
    this._h2 = 2562383102;
    this._h3 = 271733878;
    this._h4 = 3285377520;
    this._buff = new Uint8Array(
      64 + 3
      /* to fit any utf-8 */
    );
    this._buffDV = new DataView(this._buff.buffer);
    this._buffLen = 0;
    this._totalLen = 0;
    this._leftoverHighSurrogate = 0;
    this._finished = false;
  }
  update(str) {
    const strLen = str.length;
    if (strLen === 0) {
      return;
    }
    const buff = this._buff;
    let buffLen = this._buffLen;
    let leftoverHighSurrogate = this._leftoverHighSurrogate;
    let charCode;
    let offset;
    if (leftoverHighSurrogate !== 0) {
      charCode = leftoverHighSurrogate;
      offset = -1;
      leftoverHighSurrogate = 0;
    } else {
      charCode = str.charCodeAt(0);
      offset = 0;
    }
    while (true) {
      let codePoint = charCode;
      if (isHighSurrogate(charCode)) {
        if (offset + 1 < strLen) {
          const nextCharCode = str.charCodeAt(offset + 1);
          if (isLowSurrogate(nextCharCode)) {
            offset++;
            codePoint = computeCodePoint(charCode, nextCharCode);
          } else {
            codePoint = 65533;
          }
        } else {
          leftoverHighSurrogate = charCode;
          break;
        }
      } else if (isLowSurrogate(charCode)) {
        codePoint = 65533;
      }
      buffLen = this._push(buff, buffLen, codePoint);
      offset++;
      if (offset < strLen) {
        charCode = str.charCodeAt(offset);
      } else {
        break;
      }
    }
    this._buffLen = buffLen;
    this._leftoverHighSurrogate = leftoverHighSurrogate;
  }
  _push(buff, buffLen, codePoint) {
    if (codePoint < 128) {
      buff[buffLen++] = codePoint;
    } else if (codePoint < 2048) {
      buff[buffLen++] = 192 | (codePoint & 1984) >>> 6;
      buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
    } else if (codePoint < 65536) {
      buff[buffLen++] = 224 | (codePoint & 61440) >>> 12;
      buff[buffLen++] = 128 | (codePoint & 4032) >>> 6;
      buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
    } else {
      buff[buffLen++] = 240 | (codePoint & 1835008) >>> 18;
      buff[buffLen++] = 128 | (codePoint & 258048) >>> 12;
      buff[buffLen++] = 128 | (codePoint & 4032) >>> 6;
      buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
    }
    if (buffLen >= 64) {
      this._step();
      buffLen -= 64;
      this._totalLen += 64;
      buff[0] = buff[64 + 0];
      buff[1] = buff[64 + 1];
      buff[2] = buff[64 + 2];
    }
    return buffLen;
  }
  digest() {
    if (!this._finished) {
      this._finished = true;
      if (this._leftoverHighSurrogate) {
        this._leftoverHighSurrogate = 0;
        this._buffLen = this._push(
          this._buff,
          this._buffLen,
          65533
          /* SHA1Constant.UNICODE_REPLACEMENT */
        );
      }
      this._totalLen += this._buffLen;
      this._wrapUp();
    }
    return toHexString(this._h0) + toHexString(this._h1) + toHexString(this._h2) + toHexString(this._h3) + toHexString(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128;
    fill(this._buff, this._buffLen);
    if (this._buffLen > 56) {
      this._step();
      fill(this._buff);
    }
    const ml = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(ml / 4294967296), false);
    this._buffDV.setUint32(60, ml % 4294967296, false);
    this._step();
  }
  _step() {
    const bigBlock32 = StringSHA1._bigBlock32;
    const data = this._buffDV;
    for (let j = 0; j < 64; j += 4) {
      bigBlock32.setUint32(j, data.getUint32(j, false), false);
    }
    for (let j = 64; j < 320; j += 4) {
      bigBlock32.setUint32(j, leftRotate(bigBlock32.getUint32(j - 12, false) ^ bigBlock32.getUint32(j - 32, false) ^ bigBlock32.getUint32(j - 56, false) ^ bigBlock32.getUint32(j - 64, false), 1), false);
    }
    let a = this._h0;
    let b = this._h1;
    let c = this._h2;
    let d = this._h3;
    let e = this._h4;
    let f, k;
    let temp;
    for (let j = 0; j < 80; j++) {
      if (j < 20) {
        f = b & c | ~b & d;
        k = 1518500249;
      } else if (j < 40) {
        f = b ^ c ^ d;
        k = 1859775393;
      } else if (j < 60) {
        f = b & c | b & d | c & d;
        k = 2400959708;
      } else {
        f = b ^ c ^ d;
        k = 3395469782;
      }
      temp = leftRotate(a, 5) + f + e + k + bigBlock32.getUint32(j * 4, false) & 4294967295;
      e = d;
      d = c;
      c = leftRotate(b, 30);
      b = a;
      a = temp;
    }
    this._h0 = this._h0 + a & 4294967295;
    this._h1 = this._h1 + b & 4294967295;
    this._h2 = this._h2 + c & 4294967295;
    this._h3 = this._h3 + d & 4294967295;
    this._h4 = this._h4 + e & 4294967295;
  }
}
const { getWindow, getWindows, getWindowsCount, getWindowId, getWindowById, onDidRegisterWindow, onWillUnregisterWindow, onDidUnregisterWindow } = (function() {
  const windows = /* @__PURE__ */ new Map();
  ensureCodeWindow(mainWindow, 1);
  const mainWindowRegistration = { window: mainWindow, disposables: new DisposableStore() };
  windows.set(mainWindow.vscodeWindowId, mainWindowRegistration);
  const onDidRegisterWindow2 = new Emitter();
  const onDidUnregisterWindow2 = new Emitter();
  const onWillUnregisterWindow2 = new Emitter();
  function getWindowById2(windowId, fallbackToMain) {
    const window2 = typeof windowId === "number" ? windows.get(windowId) : void 0;
    return window2 ?? (fallbackToMain ? mainWindowRegistration : void 0);
  }
  return {
    onDidRegisterWindow: onDidRegisterWindow2.event,
    onWillUnregisterWindow: onWillUnregisterWindow2.event,
    onDidUnregisterWindow: onDidUnregisterWindow2.event,
    registerWindow(window2) {
      if (windows.has(window2.vscodeWindowId)) {
        return Disposable.None;
      }
      const disposables = new DisposableStore();
      const registeredWindow = {
        window: window2,
        disposables: disposables.add(new DisposableStore())
      };
      windows.set(window2.vscodeWindowId, registeredWindow);
      disposables.add(toDisposable(() => {
        windows.delete(window2.vscodeWindowId);
        onDidUnregisterWindow2.fire(window2);
      }));
      disposables.add(addDisposableListener(window2, EventType.BEFORE_UNLOAD, () => {
        onWillUnregisterWindow2.fire(window2);
      }));
      onDidRegisterWindow2.fire(registeredWindow);
      return disposables;
    },
    getWindows() {
      return windows.values();
    },
    getWindowsCount() {
      return windows.size;
    },
    getWindowId(targetWindow) {
      return targetWindow.vscodeWindowId;
    },
    hasWindow(windowId) {
      return windows.has(windowId);
    },
    getWindowById: getWindowById2,
    getWindow(e) {
      const candidateNode = e;
      if (candidateNode?.ownerDocument?.defaultView) {
        return candidateNode.ownerDocument.defaultView.window;
      }
      const candidateEvent = e;
      if (candidateEvent?.view) {
        return candidateEvent.view.window;
      }
      return mainWindow;
    },
    getDocument(e) {
      const candidateNode = e;
      return getWindow(candidateNode).document;
    }
  };
})();
function clearNode(node) {
  while (node.firstChild) {
    node.firstChild.remove();
  }
}
class DomListener {
  constructor(node, type, handler, options) {
    this._node = node;
    this._type = type;
    this._handler = handler;
    this._options = options || false;
    this._node.addEventListener(this._type, this._handler, this._options);
  }
  dispose() {
    if (!this._handler) {
      return;
    }
    this._node.removeEventListener(this._type, this._handler, this._options);
    this._node = null;
    this._handler = null;
  }
}
function addDisposableListener(node, type, handler, useCaptureOrOptions) {
  return new DomListener(node, type, handler, useCaptureOrOptions);
}
function _wrapAsStandardMouseEvent(targetWindow, handler) {
  return function(e) {
    return handler(new StandardMouseEvent(targetWindow, e));
  };
}
function _wrapAsStandardKeyboardEvent(handler) {
  return function(e) {
    return handler(new StandardKeyboardEvent(e));
  };
}
const addStandardDisposableListener = function addStandardDisposableListener2(node, type, handler, useCapture) {
  let wrapHandler = handler;
  if (type === "click" || type === "mousedown" || type === "contextmenu") {
    wrapHandler = _wrapAsStandardMouseEvent(getWindow(node), handler);
  } else if (type === "keydown" || type === "keypress" || type === "keyup") {
    wrapHandler = _wrapAsStandardKeyboardEvent(handler);
  }
  return addDisposableListener(node, type, wrapHandler, useCapture);
};
const addStandardDisposableGenericMouseDownListener = function addStandardDisposableListener3(node, handler, useCapture) {
  const wrapHandler = _wrapAsStandardMouseEvent(getWindow(node), handler);
  return addDisposableGenericMouseDownListener(node, wrapHandler, useCapture);
};
function addDisposableGenericMouseDownListener(node, handler, useCapture) {
  return addDisposableListener(node, isIOS && BrowserFeatures.pointerEvents ? EventType.POINTER_DOWN : EventType.MOUSE_DOWN, handler, useCapture);
}
function runWhenWindowIdle(targetWindow, callback, timeout2) {
  return _runWhenIdle(targetWindow, callback, timeout2);
}
class WindowIdleValue extends AbstractIdleValue {
  constructor(targetWindow, executor) {
    super(targetWindow, executor);
  }
}
let runAtThisOrScheduleAtNextAnimationFrame;
let scheduleAtNextAnimationFrame;
class WindowIntervalTimer extends IntervalTimer {
  /**
   *
   * @param node The optional node from which the target window is determined
   */
  constructor(node) {
    super();
    this.defaultTarget = node && getWindow(node);
  }
  cancelAndSet(runner, interval, targetWindow) {
    return super.cancelAndSet(runner, interval, targetWindow ?? this.defaultTarget);
  }
}
class AnimationFrameQueueItem {
  constructor(runner, priority = 0) {
    this._runner = runner;
    this.priority = priority;
    this._canceled = false;
  }
  dispose() {
    this._canceled = true;
  }
  execute() {
    if (this._canceled) {
      return;
    }
    try {
      this._runner();
    } catch (e) {
      onUnexpectedError(e);
    }
  }
  // Sort by priority (largest to lowest)
  static sort(a, b) {
    return b.priority - a.priority;
  }
}
(function() {
  const NEXT_QUEUE = /* @__PURE__ */ new Map();
  const CURRENT_QUEUE = /* @__PURE__ */ new Map();
  const animFrameRequested = /* @__PURE__ */ new Map();
  const inAnimationFrameRunner = /* @__PURE__ */ new Map();
  const animationFrameRunner = (targetWindowId) => {
    animFrameRequested.set(targetWindowId, false);
    const currentQueue = NEXT_QUEUE.get(targetWindowId) ?? [];
    CURRENT_QUEUE.set(targetWindowId, currentQueue);
    NEXT_QUEUE.set(targetWindowId, []);
    inAnimationFrameRunner.set(targetWindowId, true);
    while (currentQueue.length > 0) {
      currentQueue.sort(AnimationFrameQueueItem.sort);
      const top = currentQueue.shift();
      top.execute();
    }
    inAnimationFrameRunner.set(targetWindowId, false);
  };
  scheduleAtNextAnimationFrame = (targetWindow, runner, priority = 0) => {
    const targetWindowId = getWindowId(targetWindow);
    const item = new AnimationFrameQueueItem(runner, priority);
    let nextQueue = NEXT_QUEUE.get(targetWindowId);
    if (!nextQueue) {
      nextQueue = [];
      NEXT_QUEUE.set(targetWindowId, nextQueue);
    }
    nextQueue.push(item);
    if (!animFrameRequested.get(targetWindowId)) {
      animFrameRequested.set(targetWindowId, true);
      targetWindow.requestAnimationFrame(() => animationFrameRunner(targetWindowId));
    }
    return item;
  };
  runAtThisOrScheduleAtNextAnimationFrame = (targetWindow, runner, priority) => {
    const targetWindowId = getWindowId(targetWindow);
    if (inAnimationFrameRunner.get(targetWindowId)) {
      const item = new AnimationFrameQueueItem(runner, priority);
      let currentQueue = CURRENT_QUEUE.get(targetWindowId);
      if (!currentQueue) {
        currentQueue = [];
        CURRENT_QUEUE.set(targetWindowId, currentQueue);
      }
      currentQueue.push(item);
      return item;
    } else {
      return scheduleAtNextAnimationFrame(targetWindow, runner, priority);
    }
  };
})();
function getComputedStyle(el) {
  return getWindow(el).getComputedStyle(el, null);
}
function getClientArea(element, fallback) {
  const elWindow = getWindow(element);
  const elDocument = elWindow.document;
  if (element !== elDocument.body) {
    return new Dimension(element.clientWidth, element.clientHeight);
  }
  if (isIOS && elWindow?.visualViewport) {
    return new Dimension(elWindow.visualViewport.width, elWindow.visualViewport.height);
  }
  if (elWindow?.innerWidth && elWindow.innerHeight) {
    return new Dimension(elWindow.innerWidth, elWindow.innerHeight);
  }
  if (elDocument.body && elDocument.body.clientWidth && elDocument.body.clientHeight) {
    return new Dimension(elDocument.body.clientWidth, elDocument.body.clientHeight);
  }
  if (elDocument.documentElement && elDocument.documentElement.clientWidth && elDocument.documentElement.clientHeight) {
    return new Dimension(elDocument.documentElement.clientWidth, elDocument.documentElement.clientHeight);
  }
  throw new Error("Unable to figure out browser width and height");
}
class SizeUtils {
  // Adapted from WinJS
  // Converts a CSS positioning string for the specified element to pixels.
  static convertToPixels(element, value) {
    return parseFloat(value) || 0;
  }
  static getDimension(element, cssPropertyName, jsPropertyName) {
    const computedStyle = getComputedStyle(element);
    const value = computedStyle ? computedStyle.getPropertyValue(cssPropertyName) : "0";
    return SizeUtils.convertToPixels(element, value);
  }
  static getBorderLeftWidth(element) {
    return SizeUtils.getDimension(element, "border-left-width", "borderLeftWidth");
  }
  static getBorderRightWidth(element) {
    return SizeUtils.getDimension(element, "border-right-width", "borderRightWidth");
  }
  static getBorderTopWidth(element) {
    return SizeUtils.getDimension(element, "border-top-width", "borderTopWidth");
  }
  static getBorderBottomWidth(element) {
    return SizeUtils.getDimension(element, "border-bottom-width", "borderBottomWidth");
  }
  static getPaddingLeft(element) {
    return SizeUtils.getDimension(element, "padding-left", "paddingLeft");
  }
  static getPaddingRight(element) {
    return SizeUtils.getDimension(element, "padding-right", "paddingRight");
  }
  static getPaddingTop(element) {
    return SizeUtils.getDimension(element, "padding-top", "paddingTop");
  }
  static getPaddingBottom(element) {
    return SizeUtils.getDimension(element, "padding-bottom", "paddingBottom");
  }
  static getMarginLeft(element) {
    return SizeUtils.getDimension(element, "margin-left", "marginLeft");
  }
  static getMarginTop(element) {
    return SizeUtils.getDimension(element, "margin-top", "marginTop");
  }
  static getMarginRight(element) {
    return SizeUtils.getDimension(element, "margin-right", "marginRight");
  }
  static getMarginBottom(element) {
    return SizeUtils.getDimension(element, "margin-bottom", "marginBottom");
  }
}
class Dimension {
  static {
    this.None = new Dimension(0, 0);
  }
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  with(width = this.width, height = this.height) {
    if (width !== this.width || height !== this.height) {
      return new Dimension(width, height);
    } else {
      return this;
    }
  }
  static is(obj) {
    return typeof obj === "object" && typeof obj.height === "number" && typeof obj.width === "number";
  }
  static lift(obj) {
    if (obj instanceof Dimension) {
      return obj;
    } else {
      return new Dimension(obj.width, obj.height);
    }
  }
  static equals(a, b) {
    if (a === b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    return a.width === b.width && a.height === b.height;
  }
}
function getTopLeftOffset(element) {
  let offsetParent = element.offsetParent;
  let top = element.offsetTop;
  let left = element.offsetLeft;
  while ((element = element.parentNode) !== null && element !== element.ownerDocument.body && element !== element.ownerDocument.documentElement) {
    top -= element.scrollTop;
    const c = isShadowRoot(element) ? null : getComputedStyle(element);
    if (c) {
      left -= c.direction !== "rtl" ? element.scrollLeft : -element.scrollLeft;
    }
    if (element === offsetParent) {
      left += SizeUtils.getBorderLeftWidth(element);
      top += SizeUtils.getBorderTopWidth(element);
      top += element.offsetTop;
      left += element.offsetLeft;
      offsetParent = element.offsetParent;
    }
  }
  return {
    left,
    top
  };
}
function size(element, width, height) {
  if (typeof width === "number") {
    element.style.width = `${width}px`;
  }
  if (typeof height === "number") {
    element.style.height = `${height}px`;
  }
}
function getDomNodePagePosition(domNode) {
  const bb = domNode.getBoundingClientRect();
  const window2 = getWindow(domNode);
  return {
    left: bb.left + window2.scrollX,
    top: bb.top + window2.scrollY,
    width: bb.width,
    height: bb.height
  };
}
function getDomNodeZoomLevel(domNode) {
  let testElement = domNode;
  let zoom = 1;
  do {
    const elementZoomLevel = getComputedStyle(testElement).zoom;
    if (elementZoomLevel !== null && elementZoomLevel !== void 0 && elementZoomLevel !== "1") {
      zoom *= elementZoomLevel;
    }
    testElement = testElement.parentElement;
  } while (testElement !== null && testElement !== testElement.ownerDocument.documentElement);
  return zoom;
}
function getTotalWidth(element) {
  const margin = SizeUtils.getMarginLeft(element) + SizeUtils.getMarginRight(element);
  return element.offsetWidth + margin;
}
function getContentWidth(element) {
  const border = SizeUtils.getBorderLeftWidth(element) + SizeUtils.getBorderRightWidth(element);
  const padding = SizeUtils.getPaddingLeft(element) + SizeUtils.getPaddingRight(element);
  return element.offsetWidth - border - padding;
}
function getContentHeight(element) {
  const border = SizeUtils.getBorderTopWidth(element) + SizeUtils.getBorderBottomWidth(element);
  const padding = SizeUtils.getPaddingTop(element) + SizeUtils.getPaddingBottom(element);
  return element.offsetHeight - border - padding;
}
function getTotalHeight(element) {
  const margin = SizeUtils.getMarginTop(element) + SizeUtils.getMarginBottom(element);
  return element.offsetHeight + margin;
}
function isAncestor(testChild, testAncestor) {
  return Boolean(testAncestor?.contains(testChild));
}
function findParentWithClass(node, clazz, stopAtClazzOrNode) {
  while (node && node.nodeType === node.ELEMENT_NODE) {
    if (node.classList.contains(clazz)) {
      return node;
    }
    if (stopAtClazzOrNode) {
      if (typeof stopAtClazzOrNode === "string") {
        if (node.classList.contains(stopAtClazzOrNode)) {
          return null;
        }
      } else {
        if (node === stopAtClazzOrNode) {
          return null;
        }
      }
    }
    node = node.parentNode;
  }
  return null;
}
function hasParentWithClass(node, clazz, stopAtClazzOrNode) {
  return !!findParentWithClass(node, clazz, stopAtClazzOrNode);
}
function isShadowRoot(node) {
  return node && !!node.host && !!node.mode;
}
function isInShadowDOM(domNode) {
  return !!getShadowRoot(domNode);
}
function getShadowRoot(domNode) {
  while (domNode.parentNode) {
    if (domNode === domNode.ownerDocument?.body) {
      return null;
    }
    domNode = domNode.parentNode;
  }
  return isShadowRoot(domNode) ? domNode : null;
}
function getActiveElement() {
  let result = getActiveDocument().activeElement;
  while (result?.shadowRoot) {
    result = result.shadowRoot.activeElement;
  }
  return result;
}
function isActiveElement(element) {
  return getActiveElement() === element;
}
function isAncestorOfActiveElement(ancestor) {
  return isAncestor(getActiveElement(), ancestor);
}
function getActiveDocument() {
  if (getWindowsCount() <= 1) {
    return mainWindow.document;
  }
  const documents = Array.from(getWindows()).map(({ window: window2 }) => window2.document);
  return documents.find((doc) => doc.hasFocus()) ?? mainWindow.document;
}
function getActiveWindow() {
  const document2 = getActiveDocument();
  return document2.defaultView?.window ?? mainWindow;
}
const globalStylesheets = /* @__PURE__ */ new Map();
function createStyleSheet2() {
  return new WrappedStyleElement();
}
class WrappedStyleElement {
  constructor() {
    this._currentCssStyle = "";
    this._styleSheet = void 0;
  }
  setStyle(cssStyle) {
    if (cssStyle === this._currentCssStyle) {
      return;
    }
    this._currentCssStyle = cssStyle;
    if (!this._styleSheet) {
      this._styleSheet = createStyleSheet(mainWindow.document.head, (s) => s.innerText = cssStyle);
    } else {
      this._styleSheet.innerText = cssStyle;
    }
  }
  dispose() {
    if (this._styleSheet) {
      this._styleSheet.remove();
      this._styleSheet = void 0;
    }
  }
}
function createStyleSheet(container = mainWindow.document.head, beforeAppend, disposableStore) {
  const style = document.createElement("style");
  style.type = "text/css";
  style.media = "screen";
  beforeAppend?.(style);
  container.appendChild(style);
  if (disposableStore) {
    disposableStore.add(toDisposable(() => style.remove()));
  }
  if (container === mainWindow.document.head) {
    const globalStylesheetClones = /* @__PURE__ */ new Set();
    globalStylesheets.set(style, globalStylesheetClones);
    for (const { window: targetWindow, disposables } of getWindows()) {
      if (targetWindow === mainWindow) {
        continue;
      }
      const cloneDisposable = disposables.add(cloneGlobalStyleSheet(style, globalStylesheetClones, targetWindow));
      disposableStore?.add(cloneDisposable);
    }
  }
  return style;
}
function cloneGlobalStyleSheet(globalStylesheet, globalStylesheetClones, targetWindow) {
  const disposables = new DisposableStore();
  const clone2 = globalStylesheet.cloneNode(true);
  targetWindow.document.head.appendChild(clone2);
  disposables.add(toDisposable(() => clone2.remove()));
  for (const rule of getDynamicStyleSheetRules(globalStylesheet)) {
    clone2.sheet?.insertRule(rule.cssText, clone2.sheet?.cssRules.length);
  }
  disposables.add(sharedMutationObserver.observe(globalStylesheet, disposables, { childList: true })(() => {
    clone2.textContent = globalStylesheet.textContent;
  }));
  globalStylesheetClones.add(clone2);
  disposables.add(toDisposable(() => globalStylesheetClones.delete(clone2)));
  return disposables;
}
const sharedMutationObserver = new class {
  constructor() {
    this.mutationObservers = /* @__PURE__ */ new Map();
  }
  observe(target, disposables, options) {
    let mutationObserversPerTarget = this.mutationObservers.get(target);
    if (!mutationObserversPerTarget) {
      mutationObserversPerTarget = /* @__PURE__ */ new Map();
      this.mutationObservers.set(target, mutationObserversPerTarget);
    }
    const optionsHash = hash(options);
    let mutationObserverPerOptions = mutationObserversPerTarget.get(optionsHash);
    if (!mutationObserverPerOptions) {
      const onDidMutate = new Emitter();
      const observer = new MutationObserver((mutations) => onDidMutate.fire(mutations));
      observer.observe(target, options);
      const resolvedMutationObserverPerOptions = mutationObserverPerOptions = {
        users: 1,
        observer,
        onDidMutate: onDidMutate.event
      };
      disposables.add(toDisposable(() => {
        resolvedMutationObserverPerOptions.users -= 1;
        if (resolvedMutationObserverPerOptions.users === 0) {
          onDidMutate.dispose();
          observer.disconnect();
          mutationObserversPerTarget?.delete(optionsHash);
          if (mutationObserversPerTarget?.size === 0) {
            this.mutationObservers.delete(target);
          }
        }
      }));
      mutationObserversPerTarget.set(optionsHash, mutationObserverPerOptions);
    } else {
      mutationObserverPerOptions.users += 1;
    }
    return mutationObserverPerOptions.onDidMutate;
  }
}();
let _sharedStyleSheet = null;
function getSharedStyleSheet() {
  if (!_sharedStyleSheet) {
    _sharedStyleSheet = createStyleSheet();
  }
  return _sharedStyleSheet;
}
function getDynamicStyleSheetRules(style) {
  if (style?.sheet?.rules) {
    return style.sheet.rules;
  }
  if (style?.sheet?.cssRules) {
    return style.sheet.cssRules;
  }
  return [];
}
function createCSSRule(selector, cssText, style = getSharedStyleSheet()) {
  if (!style || !cssText) {
    return;
  }
  style.sheet?.insertRule(`${selector} {${cssText}}`, 0);
  for (const clonedGlobalStylesheet of globalStylesheets.get(style) ?? []) {
    createCSSRule(selector, cssText, clonedGlobalStylesheet);
  }
}
function removeCSSRulesContainingSelector(ruleName, style = getSharedStyleSheet()) {
  if (!style) {
    return;
  }
  const rules = getDynamicStyleSheetRules(style);
  const toDelete = [];
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    if (isCSSStyleRule(rule) && rule.selectorText.indexOf(ruleName) !== -1) {
      toDelete.push(i);
    }
  }
  for (let i = toDelete.length - 1; i >= 0; i--) {
    style.sheet?.deleteRule(toDelete[i]);
  }
  for (const clonedGlobalStylesheet of globalStylesheets.get(style) ?? []) {
    removeCSSRulesContainingSelector(ruleName, clonedGlobalStylesheet);
  }
}
function isCSSStyleRule(rule) {
  return typeof rule.selectorText === "string";
}
function isHTMLElement(e) {
  return e instanceof HTMLElement || e instanceof getWindow(e).HTMLElement;
}
function isHTMLAnchorElement(e) {
  return e instanceof HTMLAnchorElement || e instanceof getWindow(e).HTMLAnchorElement;
}
function isSVGElement(e) {
  return e instanceof SVGElement || e instanceof getWindow(e).SVGElement;
}
function isMouseEvent(e) {
  return e instanceof MouseEvent || e instanceof getWindow(e).MouseEvent;
}
function isKeyboardEvent(e) {
  return e instanceof KeyboardEvent || e instanceof getWindow(e).KeyboardEvent;
}
const EventType = {
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
function isEventLike(obj) {
  const candidate = obj;
  return !!(candidate && typeof candidate.preventDefault === "function" && typeof candidate.stopPropagation === "function");
}
const EventHelper = {
  stop: (e, cancelBubble) => {
    e.preventDefault();
    if (cancelBubble) {
      e.stopPropagation();
    }
    return e;
  }
};
function saveParentsScrollTop(node) {
  const r = [];
  for (let i = 0; node && node.nodeType === node.ELEMENT_NODE; i++) {
    r[i] = node.scrollTop;
    node = node.parentNode;
  }
  return r;
}
function restoreParentsScrollTop(node, state) {
  for (let i = 0; node && node.nodeType === node.ELEMENT_NODE; i++) {
    if (node.scrollTop !== state[i]) {
      node.scrollTop = state[i];
    }
    node = node.parentNode;
  }
}
class FocusTracker extends Disposable {
  static hasFocusWithin(element) {
    if (isHTMLElement(element)) {
      const shadowRoot = getShadowRoot(element);
      const activeElement = shadowRoot ? shadowRoot.activeElement : element.ownerDocument.activeElement;
      return isAncestor(activeElement, element);
    } else {
      const window2 = element;
      return isAncestor(window2.document.activeElement, window2.document);
    }
  }
  constructor(element) {
    super();
    this._onDidFocus = this._register(new Emitter());
    this.onDidFocus = this._onDidFocus.event;
    this._onDidBlur = this._register(new Emitter());
    this.onDidBlur = this._onDidBlur.event;
    let hasFocus = FocusTracker.hasFocusWithin(element);
    let loosingFocus = false;
    const onFocus = () => {
      loosingFocus = false;
      if (!hasFocus) {
        hasFocus = true;
        this._onDidFocus.fire();
      }
    };
    const onBlur = () => {
      if (hasFocus) {
        loosingFocus = true;
        (isHTMLElement(element) ? getWindow(element) : element).setTimeout(() => {
          if (loosingFocus) {
            loosingFocus = false;
            hasFocus = false;
            this._onDidBlur.fire();
          }
        }, 0);
      }
    };
    this._refreshStateHandler = () => {
      const currentNodeHasFocus = FocusTracker.hasFocusWithin(element);
      if (currentNodeHasFocus !== hasFocus) {
        if (hasFocus) {
          onBlur();
        } else {
          onFocus();
        }
      }
    };
    this._register(addDisposableListener(element, EventType.FOCUS, onFocus, true));
    this._register(addDisposableListener(element, EventType.BLUR, onBlur, true));
    if (isHTMLElement(element)) {
      this._register(addDisposableListener(element, EventType.FOCUS_IN, () => this._refreshStateHandler()));
      this._register(addDisposableListener(element, EventType.FOCUS_OUT, () => this._refreshStateHandler()));
    }
  }
}
function trackFocus(element) {
  return new FocusTracker(element);
}
function after(sibling, child) {
  sibling.after(child);
  return child;
}
function append(parent, ...children) {
  parent.append(...children);
  if (children.length === 1 && typeof children[0] !== "string") {
    return children[0];
  }
}
function prepend(parent, child) {
  parent.insertBefore(child, parent.firstChild);
  return child;
}
function reset(parent, ...children) {
  parent.innerText = "";
  append(parent, ...children);
}
const SELECTOR_REGEX = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;
var Namespace;
(function(Namespace2) {
  Namespace2["HTML"] = "http://www.w3.org/1999/xhtml";
  Namespace2["SVG"] = "http://www.w3.org/2000/svg";
})(Namespace || (Namespace = {}));
function _$(namespace, description, attrs, ...children) {
  const match = SELECTOR_REGEX.exec(description);
  if (!match) {
    throw new Error("Bad use of emmet");
  }
  const tagName = match[1] || "div";
  let result;
  if (namespace !== Namespace.HTML) {
    result = document.createElementNS(namespace, tagName);
  } else {
    result = document.createElement(tagName);
  }
  if (match[3]) {
    result.id = match[3];
  }
  if (match[4]) {
    result.className = match[4].replace(/\./g, " ").trim();
  }
  if (attrs) {
    Object.entries(attrs).forEach(([name, value]) => {
      if (typeof value === "undefined") {
        return;
      }
      if (/^on\w+$/.test(name)) {
        result[name] = value;
      } else if (name === "selected") {
        if (value) {
          result.setAttribute(name, "true");
        }
      } else {
        result.setAttribute(name, value);
      }
    });
  }
  result.append(...children);
  return result;
}
function $(description, attrs, ...children) {
  return _$(Namespace.HTML, description, attrs, ...children);
}
$.SVG = function(description, attrs, ...children) {
  return _$(Namespace.SVG, description, attrs, ...children);
};
function setVisibility(visible, ...elements) {
  if (visible) {
    show(...elements);
  } else {
    hide(...elements);
  }
}
function show(...elements) {
  for (const element of elements) {
    element.style.display = "";
    element.removeAttribute("aria-hidden");
  }
}
function hide(...elements) {
  for (const element of elements) {
    element.style.display = "none";
    element.setAttribute("aria-hidden", "true");
  }
}
function computeScreenAwareSize(window2, cssPx) {
  const screenPx = window2.devicePixelRatio * cssPx;
  return Math.max(1, Math.floor(screenPx)) / window2.devicePixelRatio;
}
function windowOpenNoOpener(url) {
  mainWindow.open(url, "_blank", "noopener");
}
function animate(targetWindow, fn) {
  const step = () => {
    fn();
    stepDisposable = scheduleAtNextAnimationFrame(targetWindow, step);
  };
  let stepDisposable = scheduleAtNextAnimationFrame(targetWindow, step);
  return toDisposable(() => stepDisposable.dispose());
}
RemoteAuthorities.setPreferredWebSchema(/^https:/.test(mainWindow.location.href) ? "https" : "http");
function asCSSUrl(uri) {
  if (!uri) {
    return `url('')`;
  }
  return `url('${FileAccess.uriToBrowserUri(uri).toString(true).replace(/'/g, "%27")}')`;
}
function asCSSPropertyValue(value) {
  return `'${value.replace(/'/g, "%27")}'`;
}
function asCssValueWithDefault(cssPropertyValue, dflt) {
  if (cssPropertyValue !== void 0) {
    const variableMatch = cssPropertyValue.match(/^\s*var\((.+)\)$/);
    if (variableMatch) {
      const varArguments = variableMatch[1].split(",", 2);
      if (varArguments.length === 2) {
        dflt = asCssValueWithDefault(varArguments[1].trim(), dflt);
      }
      return `var(${varArguments[0]}, ${dflt})`;
    }
    return cssPropertyValue;
  }
  return dflt;
}
function hookDomPurifyHrefAndSrcSanitizer(allowedProtocols, allowDataImages = false) {
  const anchor = document.createElement("a");
  addHook("afterSanitizeAttributes", (node) => {
    for (const attr of ["href", "src"]) {
      if (node.hasAttribute(attr)) {
        const attrValue = node.getAttribute(attr);
        if (attr === "href" && attrValue.startsWith("#")) {
          continue;
        }
        anchor.href = attrValue;
        if (!allowedProtocols.includes(anchor.protocol.replace(/:$/, ""))) {
          if (allowDataImages && attr === "src" && anchor.href.startsWith("data:")) {
            continue;
          }
          node.removeAttribute(attr);
        }
      }
    }
  });
  return toDisposable(() => {
    removeHook("afterSanitizeAttributes");
  });
}
const basicMarkupHtmlTags = Object.freeze([
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
class ModifierKeyEmitter extends Emitter {
  constructor() {
    super();
    this._subscriptions = new DisposableStore();
    this._keyStatus = {
      altKey: false,
      shiftKey: false,
      ctrlKey: false,
      metaKey: false
    };
    this._subscriptions.add(Event.runAndSubscribe(onDidRegisterWindow, ({ window: window2, disposables }) => this.registerListeners(window2, disposables), { window: mainWindow, disposables: this._subscriptions }));
  }
  registerListeners(window2, disposables) {
    disposables.add(addDisposableListener(window2, "keydown", (e) => {
      if (e.defaultPrevented) {
        return;
      }
      const event = new StandardKeyboardEvent(e);
      if (event.keyCode === 6 && e.repeat) {
        return;
      }
      if (e.altKey && !this._keyStatus.altKey) {
        this._keyStatus.lastKeyPressed = "alt";
      } else if (e.ctrlKey && !this._keyStatus.ctrlKey) {
        this._keyStatus.lastKeyPressed = "ctrl";
      } else if (e.metaKey && !this._keyStatus.metaKey) {
        this._keyStatus.lastKeyPressed = "meta";
      } else if (e.shiftKey && !this._keyStatus.shiftKey) {
        this._keyStatus.lastKeyPressed = "shift";
      } else if (event.keyCode !== 6) {
        this._keyStatus.lastKeyPressed = void 0;
      } else {
        return;
      }
      this._keyStatus.altKey = e.altKey;
      this._keyStatus.ctrlKey = e.ctrlKey;
      this._keyStatus.metaKey = e.metaKey;
      this._keyStatus.shiftKey = e.shiftKey;
      if (this._keyStatus.lastKeyPressed) {
        this._keyStatus.event = e;
        this.fire(this._keyStatus);
      }
    }, true));
    disposables.add(addDisposableListener(window2, "keyup", (e) => {
      if (e.defaultPrevented) {
        return;
      }
      if (!e.altKey && this._keyStatus.altKey) {
        this._keyStatus.lastKeyReleased = "alt";
      } else if (!e.ctrlKey && this._keyStatus.ctrlKey) {
        this._keyStatus.lastKeyReleased = "ctrl";
      } else if (!e.metaKey && this._keyStatus.metaKey) {
        this._keyStatus.lastKeyReleased = "meta";
      } else if (!e.shiftKey && this._keyStatus.shiftKey) {
        this._keyStatus.lastKeyReleased = "shift";
      } else {
        this._keyStatus.lastKeyReleased = void 0;
      }
      if (this._keyStatus.lastKeyPressed !== this._keyStatus.lastKeyReleased) {
        this._keyStatus.lastKeyPressed = void 0;
      }
      this._keyStatus.altKey = e.altKey;
      this._keyStatus.ctrlKey = e.ctrlKey;
      this._keyStatus.metaKey = e.metaKey;
      this._keyStatus.shiftKey = e.shiftKey;
      if (this._keyStatus.lastKeyReleased) {
        this._keyStatus.event = e;
        this.fire(this._keyStatus);
      }
    }, true));
    disposables.add(addDisposableListener(window2.document.body, "mousedown", () => {
      this._keyStatus.lastKeyPressed = void 0;
    }, true));
    disposables.add(addDisposableListener(window2.document.body, "mouseup", () => {
      this._keyStatus.lastKeyPressed = void 0;
    }, true));
    disposables.add(addDisposableListener(window2.document.body, "mousemove", (e) => {
      if (e.buttons) {
        this._keyStatus.lastKeyPressed = void 0;
      }
    }, true));
    disposables.add(addDisposableListener(window2, "blur", () => {
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
    this.doResetKeyStatus();
    this.fire(this._keyStatus);
  }
  doResetKeyStatus() {
    this._keyStatus = {
      altKey: false,
      shiftKey: false,
      ctrlKey: false,
      metaKey: false
    };
  }
  static getInstance() {
    if (!ModifierKeyEmitter.instance) {
      ModifierKeyEmitter.instance = new ModifierKeyEmitter();
    }
    return ModifierKeyEmitter.instance;
  }
  dispose() {
    super.dispose();
    this._subscriptions.dispose();
  }
}
class DragAndDropObserver extends Disposable {
  constructor(element, callbacks) {
    super();
    this.element = element;
    this.callbacks = callbacks;
    this.counter = 0;
    this.dragStartTime = 0;
    this.registerListeners();
  }
  registerListeners() {
    if (this.callbacks.onDragStart) {
      this._register(addDisposableListener(this.element, EventType.DRAG_START, (e) => {
        this.callbacks.onDragStart?.(e);
      }));
    }
    if (this.callbacks.onDrag) {
      this._register(addDisposableListener(this.element, EventType.DRAG, (e) => {
        this.callbacks.onDrag?.(e);
      }));
    }
    this._register(addDisposableListener(this.element, EventType.DRAG_ENTER, (e) => {
      this.counter++;
      this.dragStartTime = e.timeStamp;
      this.callbacks.onDragEnter?.(e);
    }));
    this._register(addDisposableListener(this.element, EventType.DRAG_OVER, (e) => {
      e.preventDefault();
      this.callbacks.onDragOver?.(e, e.timeStamp - this.dragStartTime);
    }));
    this._register(addDisposableListener(this.element, EventType.DRAG_LEAVE, (e) => {
      this.counter--;
      if (this.counter === 0) {
        this.dragStartTime = 0;
        this.callbacks.onDragLeave?.(e);
      }
    }));
    this._register(addDisposableListener(this.element, EventType.DRAG_END, (e) => {
      this.counter = 0;
      this.dragStartTime = 0;
      this.callbacks.onDragEnd?.(e);
    }));
    this._register(addDisposableListener(this.element, EventType.DROP, (e) => {
      this.counter = 0;
      this.dragStartTime = 0;
      this.callbacks.onDrop?.(e);
    }));
  }
}
const H_REGEX = /(?<tag>[\w\-]+)?(?:#(?<id>[\w\-]+))?(?<class>(?:\.(?:[\w\-]+))*)(?:@(?<name>(?:[\w\_])+))?/;
function h(tag, ...args) {
  let attributes;
  let children;
  if (Array.isArray(args[0])) {
    attributes = {};
    children = args[0];
  } else {
    attributes = args[0] || {};
    children = args[1];
  }
  const match = H_REGEX.exec(tag);
  if (!match || !match.groups) {
    throw new Error("Bad use of h");
  }
  const tagName = match.groups["tag"] || "div";
  const el = document.createElement(tagName);
  if (match.groups["id"]) {
    el.id = match.groups["id"];
  }
  const classNames = [];
  if (match.groups["class"]) {
    for (const className of match.groups["class"].split(".")) {
      if (className !== "") {
        classNames.push(className);
      }
    }
  }
  if (attributes.className !== void 0) {
    for (const className of attributes.className.split(".")) {
      if (className !== "") {
        classNames.push(className);
      }
    }
  }
  if (classNames.length > 0) {
    el.className = classNames.join(" ");
  }
  const result = {};
  if (match.groups["name"]) {
    result[match.groups["name"]] = el;
  }
  if (children) {
    for (const c of children) {
      if (isHTMLElement(c)) {
        el.appendChild(c);
      } else if (typeof c === "string") {
        el.append(c);
      } else if ("root" in c) {
        Object.assign(result, c);
        el.appendChild(c.root);
      }
    }
  }
  for (const [key, value] of Object.entries(attributes)) {
    if (key === "className") {
      continue;
    } else if (key === "style") {
      for (const [cssKey, cssValue] of Object.entries(value)) {
        el.style.setProperty(camelCaseToHyphenCase(cssKey), typeof cssValue === "number" ? cssValue + "px" : "" + cssValue);
      }
    } else if (key === "tabIndex") {
      el.tabIndex = value;
    } else {
      el.setAttribute(camelCaseToHyphenCase(key), value.toString());
    }
  }
  result["root"] = el;
  return result;
}
function svgElem(tag, ...args) {
  let attributes;
  let children;
  if (Array.isArray(args[0])) {
    attributes = {};
    children = args[0];
  } else {
    attributes = args[0] || {};
    children = args[1];
  }
  const match = H_REGEX.exec(tag);
  if (!match || !match.groups) {
    throw new Error("Bad use of h");
  }
  const tagName = match.groups["tag"] || "div";
  const el = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  if (match.groups["id"]) {
    el.id = match.groups["id"];
  }
  const classNames = [];
  if (match.groups["class"]) {
    for (const className of match.groups["class"].split(".")) {
      if (className !== "") {
        classNames.push(className);
      }
    }
  }
  if (attributes.className !== void 0) {
    for (const className of attributes.className.split(".")) {
      if (className !== "") {
        classNames.push(className);
      }
    }
  }
  if (classNames.length > 0) {
    el.className = classNames.join(" ");
  }
  const result = {};
  if (match.groups["name"]) {
    result[match.groups["name"]] = el;
  }
  if (children) {
    for (const c of children) {
      if (isHTMLElement(c)) {
        el.appendChild(c);
      } else if (typeof c === "string") {
        el.append(c);
      } else if ("root" in c) {
        Object.assign(result, c);
        el.appendChild(c.root);
      }
    }
  }
  for (const [key, value] of Object.entries(attributes)) {
    if (key === "className") {
      continue;
    } else if (key === "style") {
      for (const [cssKey, cssValue] of Object.entries(value)) {
        el.style.setProperty(camelCaseToHyphenCase(cssKey), typeof cssValue === "number" ? cssValue + "px" : "" + cssValue);
      }
    } else if (key === "tabIndex") {
      el.tabIndex = value;
    } else {
      el.setAttribute(camelCaseToHyphenCase(key), value.toString());
    }
  }
  result["root"] = el;
  return result;
}
function camelCaseToHyphenCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
class GlobalPointerMoveMonitor {
  constructor() {
    this._hooks = new DisposableStore();
    this._pointerMoveCallback = null;
    this._onStopCallback = null;
  }
  dispose() {
    this.stopMonitoring(false);
    this._hooks.dispose();
  }
  stopMonitoring(invokeStopCallback, browserEvent) {
    if (!this.isMonitoring()) {
      return;
    }
    this._hooks.clear();
    this._pointerMoveCallback = null;
    const onStopCallback = this._onStopCallback;
    this._onStopCallback = null;
    if (invokeStopCallback && onStopCallback) {
      onStopCallback(browserEvent);
    }
  }
  isMonitoring() {
    return !!this._pointerMoveCallback;
  }
  startMonitoring(initialElement, pointerId, initialButtons, pointerMoveCallback, onStopCallback) {
    if (this.isMonitoring()) {
      this.stopMonitoring(false);
    }
    this._pointerMoveCallback = pointerMoveCallback;
    this._onStopCallback = onStopCallback;
    let eventSource = initialElement;
    try {
      initialElement.setPointerCapture(pointerId);
      this._hooks.add(toDisposable(() => {
        try {
          initialElement.releasePointerCapture(pointerId);
        } catch (err) {
        }
      }));
    } catch (err) {
      eventSource = getWindow(initialElement);
    }
    this._hooks.add(addDisposableListener(eventSource, EventType.POINTER_MOVE, (e) => {
      if (e.buttons !== initialButtons) {
        this.stopMonitoring(true);
        return;
      }
      e.preventDefault();
      this._pointerMoveCallback(e);
    }));
    this._hooks.add(addDisposableListener(eventSource, EventType.POINTER_UP, (e) => this.stopMonitoring(true)));
  }
}
function ok(value, message) {
  if (!value) {
    throw new Error(message ? `Assertion failed (${message})` : "Assertion Failed");
  }
}
function assertNever(value, message = "Unreachable") {
  throw new Error(message);
}
function softAssert(condition) {
  if (!condition) {
    onUnexpectedError(new BugIndicatingError("Soft Assertion Failed"));
  }
}
function assertFn(condition) {
  if (!condition()) {
    debugger;
    condition();
    onUnexpectedError(new BugIndicatingError("Assertion Failed"));
  }
}
function checkAdjacentItems(items, predicate) {
  let i = 0;
  while (i < items.length - 1) {
    const a = items[i];
    const b = items[i + 1];
    if (!predicate(a, b)) {
      return false;
    }
    i++;
  }
  return true;
}
function roundFloat(number, decimalPoints) {
  const decimal = Math.pow(10, decimalPoints);
  return Math.round(number * decimal) / decimal;
}
class RGBA {
  constructor(r, g, b, a = 1) {
    this._rgbaBrand = void 0;
    this.r = Math.min(255, Math.max(0, r)) | 0;
    this.g = Math.min(255, Math.max(0, g)) | 0;
    this.b = Math.min(255, Math.max(0, b)) | 0;
    this.a = roundFloat(Math.max(Math.min(1, a), 0), 3);
  }
  static equals(a, b) {
    return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
  }
}
class HSLA {
  constructor(h2, s, l, a) {
    this._hslaBrand = void 0;
    this.h = Math.max(Math.min(360, h2), 0) | 0;
    this.s = roundFloat(Math.max(Math.min(1, s), 0), 3);
    this.l = roundFloat(Math.max(Math.min(1, l), 0), 3);
    this.a = roundFloat(Math.max(Math.min(1, a), 0), 3);
  }
  static equals(a, b) {
    return a.h === b.h && a.s === b.s && a.l === b.l && a.a === b.a;
  }
  /**
   * Converts an RGB color value to HSL. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes r, g, and b are contained in the set [0, 255] and
   * returns h in the set [0, 360], s, and l in the set [0, 1].
   */
  static fromRGBA(rgba) {
    const r = rgba.r / 255;
    const g = rgba.g / 255;
    const b = rgba.b / 255;
    const a = rgba.a;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h2 = 0;
    let s = 0;
    const l = (min + max) / 2;
    const chroma = max - min;
    if (chroma > 0) {
      s = Math.min(l <= 0.5 ? chroma / (2 * l) : chroma / (2 - 2 * l), 1);
      switch (max) {
        case r:
          h2 = (g - b) / chroma + (g < b ? 6 : 0);
          break;
        case g:
          h2 = (b - r) / chroma + 2;
          break;
        case b:
          h2 = (r - g) / chroma + 4;
          break;
      }
      h2 *= 60;
      h2 = Math.round(h2);
    }
    return new HSLA(h2, s, l, a);
  }
  static _hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }
  /**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes h in the set [0, 360] s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   */
  static toRGBA(hsla) {
    const h2 = hsla.h / 360;
    const { s, l, a } = hsla;
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = HSLA._hue2rgb(p, q, h2 + 1 / 3);
      g = HSLA._hue2rgb(p, q, h2);
      b = HSLA._hue2rgb(p, q, h2 - 1 / 3);
    }
    return new RGBA(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a);
  }
}
class HSVA {
  constructor(h2, s, v, a) {
    this._hsvaBrand = void 0;
    this.h = Math.max(Math.min(360, h2), 0) | 0;
    this.s = roundFloat(Math.max(Math.min(1, s), 0), 3);
    this.v = roundFloat(Math.max(Math.min(1, v), 0), 3);
    this.a = roundFloat(Math.max(Math.min(1, a), 0), 3);
  }
  static equals(a, b) {
    return a.h === b.h && a.s === b.s && a.v === b.v && a.a === b.a;
  }
  // from http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
  static fromRGBA(rgba) {
    const r = rgba.r / 255;
    const g = rgba.g / 255;
    const b = rgba.b / 255;
    const cmax = Math.max(r, g, b);
    const cmin = Math.min(r, g, b);
    const delta = cmax - cmin;
    const s = cmax === 0 ? 0 : delta / cmax;
    let m;
    if (delta === 0) {
      m = 0;
    } else if (cmax === r) {
      m = ((g - b) / delta % 6 + 6) % 6;
    } else if (cmax === g) {
      m = (b - r) / delta + 2;
    } else {
      m = (r - g) / delta + 4;
    }
    return new HSVA(Math.round(m * 60), s, cmax, rgba.a);
  }
  // from http://www.rapidtables.com/convert/color/hsv-to-rgb.htm
  static toRGBA(hsva) {
    const { h: h2, s, v, a } = hsva;
    const c = v * s;
    const x = c * (1 - Math.abs(h2 / 60 % 2 - 1));
    const m = v - c;
    let [r, g, b] = [0, 0, 0];
    if (h2 < 60) {
      r = c;
      g = x;
    } else if (h2 < 120) {
      r = x;
      g = c;
    } else if (h2 < 180) {
      g = c;
      b = x;
    } else if (h2 < 240) {
      g = x;
      b = c;
    } else if (h2 < 300) {
      r = x;
      b = c;
    } else if (h2 <= 360) {
      r = c;
      b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return new RGBA(r, g, b, a);
  }
}
class Color {
  static fromHex(hex) {
    return Color.Format.CSS.parseHex(hex) || Color.red;
  }
  static equals(a, b) {
    if (!a && !b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    return a.equals(b);
  }
  get hsla() {
    if (this._hsla) {
      return this._hsla;
    } else {
      return HSLA.fromRGBA(this.rgba);
    }
  }
  get hsva() {
    if (this._hsva) {
      return this._hsva;
    }
    return HSVA.fromRGBA(this.rgba);
  }
  constructor(arg) {
    if (!arg) {
      throw new Error("Color needs a value");
    } else if (arg instanceof RGBA) {
      this.rgba = arg;
    } else if (arg instanceof HSLA) {
      this._hsla = arg;
      this.rgba = HSLA.toRGBA(arg);
    } else if (arg instanceof HSVA) {
      this._hsva = arg;
      this.rgba = HSVA.toRGBA(arg);
    } else {
      throw new Error("Invalid color ctor argument");
    }
  }
  equals(other) {
    return !!other && RGBA.equals(this.rgba, other.rgba) && HSLA.equals(this.hsla, other.hsla) && HSVA.equals(this.hsva, other.hsva);
  }
  /**
   * http://www.w3.org/TR/WCAG20/#relativeluminancedef
   * Returns the number in the set [0, 1]. O => Darkest Black. 1 => Lightest white.
   */
  getRelativeLuminance() {
    const R = Color._relativeLuminanceForComponent(this.rgba.r);
    const G = Color._relativeLuminanceForComponent(this.rgba.g);
    const B = Color._relativeLuminanceForComponent(this.rgba.b);
    const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    return roundFloat(luminance, 4);
  }
  static _relativeLuminanceForComponent(color) {
    const c = color / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  /**
   *	http://24ways.org/2010/calculating-color-contrast
   *  Return 'true' if lighter color otherwise 'false'
   */
  isLighter() {
    const yiq = (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3;
    return yiq >= 128;
  }
  isLighterThan(another) {
    const lum1 = this.getRelativeLuminance();
    const lum2 = another.getRelativeLuminance();
    return lum1 > lum2;
  }
  isDarkerThan(another) {
    const lum1 = this.getRelativeLuminance();
    const lum2 = another.getRelativeLuminance();
    return lum1 < lum2;
  }
  lighten(factor) {
    return new Color(new HSLA(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * factor, this.hsla.a));
  }
  darken(factor) {
    return new Color(new HSLA(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * factor, this.hsla.a));
  }
  transparent(factor) {
    const { r, g, b, a } = this.rgba;
    return new Color(new RGBA(r, g, b, a * factor));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new Color(new RGBA(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  makeOpaque(opaqueBackground) {
    if (this.isOpaque() || opaqueBackground.rgba.a !== 1) {
      return this;
    }
    const { r, g, b, a } = this.rgba;
    return new Color(new RGBA(opaqueBackground.rgba.r - a * (opaqueBackground.rgba.r - r), opaqueBackground.rgba.g - a * (opaqueBackground.rgba.g - g), opaqueBackground.rgba.b - a * (opaqueBackground.rgba.b - b), 1));
  }
  toString() {
    if (!this._toString) {
      this._toString = Color.Format.CSS.format(this);
    }
    return this._toString;
  }
  static getLighterColor(of, relative, factor) {
    if (of.isLighterThan(relative)) {
      return of;
    }
    factor = factor ? factor : 0.5;
    const lum1 = of.getRelativeLuminance();
    const lum2 = relative.getRelativeLuminance();
    factor = factor * (lum2 - lum1) / lum2;
    return of.lighten(factor);
  }
  static getDarkerColor(of, relative, factor) {
    if (of.isDarkerThan(relative)) {
      return of;
    }
    factor = factor ? factor : 0.5;
    const lum1 = of.getRelativeLuminance();
    const lum2 = relative.getRelativeLuminance();
    factor = factor * (lum1 - lum2) / lum1;
    return of.darken(factor);
  }
  static {
    this.white = new Color(new RGBA(255, 255, 255, 1));
  }
  static {
    this.black = new Color(new RGBA(0, 0, 0, 1));
  }
  static {
    this.red = new Color(new RGBA(255, 0, 0, 1));
  }
  static {
    this.blue = new Color(new RGBA(0, 0, 255, 1));
  }
  static {
    this.green = new Color(new RGBA(0, 255, 0, 1));
  }
  static {
    this.cyan = new Color(new RGBA(0, 255, 255, 1));
  }
  static {
    this.lightgrey = new Color(new RGBA(211, 211, 211, 1));
  }
  static {
    this.transparent = new Color(new RGBA(0, 0, 0, 0));
  }
}
(function(Color2) {
  (function(Format) {
    (function(CSS) {
      function formatRGB(color) {
        if (color.rgba.a === 1) {
          return `rgb(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b})`;
        }
        return Color2.Format.CSS.formatRGBA(color);
      }
      CSS.formatRGB = formatRGB;
      function formatRGBA(color) {
        return `rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${+color.rgba.a.toFixed(2)})`;
      }
      CSS.formatRGBA = formatRGBA;
      function formatHSL(color) {
        if (color.hsla.a === 1) {
          return `hsl(${color.hsla.h}, ${(color.hsla.s * 100).toFixed(2)}%, ${(color.hsla.l * 100).toFixed(2)}%)`;
        }
        return Color2.Format.CSS.formatHSLA(color);
      }
      CSS.formatHSL = formatHSL;
      function formatHSLA(color) {
        return `hsla(${color.hsla.h}, ${(color.hsla.s * 100).toFixed(2)}%, ${(color.hsla.l * 100).toFixed(2)}%, ${color.hsla.a.toFixed(2)})`;
      }
      CSS.formatHSLA = formatHSLA;
      function _toTwoDigitHex(n) {
        const r = n.toString(16);
        return r.length !== 2 ? "0" + r : r;
      }
      function formatHex(color) {
        return `#${_toTwoDigitHex(color.rgba.r)}${_toTwoDigitHex(color.rgba.g)}${_toTwoDigitHex(color.rgba.b)}`;
      }
      CSS.formatHex = formatHex;
      function formatHexA(color, compact = false) {
        if (compact && color.rgba.a === 1) {
          return Color2.Format.CSS.formatHex(color);
        }
        return `#${_toTwoDigitHex(color.rgba.r)}${_toTwoDigitHex(color.rgba.g)}${_toTwoDigitHex(color.rgba.b)}${_toTwoDigitHex(Math.round(color.rgba.a * 255))}`;
      }
      CSS.formatHexA = formatHexA;
      function format2(color) {
        if (color.isOpaque()) {
          return Color2.Format.CSS.formatHex(color);
        }
        return Color2.Format.CSS.formatRGBA(color);
      }
      CSS.format = format2;
      function parseHex(hex) {
        const length = hex.length;
        if (length === 0) {
          return null;
        }
        if (hex.charCodeAt(0) !== 35) {
          return null;
        }
        if (length === 7) {
          const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2));
          const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4));
          const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6));
          return new Color2(new RGBA(r, g, b, 1));
        }
        if (length === 9) {
          const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2));
          const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4));
          const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6));
          const a = 16 * _parseHexDigit(hex.charCodeAt(7)) + _parseHexDigit(hex.charCodeAt(8));
          return new Color2(new RGBA(r, g, b, a / 255));
        }
        if (length === 4) {
          const r = _parseHexDigit(hex.charCodeAt(1));
          const g = _parseHexDigit(hex.charCodeAt(2));
          const b = _parseHexDigit(hex.charCodeAt(3));
          return new Color2(new RGBA(16 * r + r, 16 * g + g, 16 * b + b));
        }
        if (length === 5) {
          const r = _parseHexDigit(hex.charCodeAt(1));
          const g = _parseHexDigit(hex.charCodeAt(2));
          const b = _parseHexDigit(hex.charCodeAt(3));
          const a = _parseHexDigit(hex.charCodeAt(4));
          return new Color2(new RGBA(16 * r + r, 16 * g + g, 16 * b + b, (16 * a + a) / 255));
        }
        return null;
      }
      CSS.parseHex = parseHex;
      function _parseHexDigit(charCode) {
        switch (charCode) {
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
    })(Format.CSS || (Format.CSS = {}));
  })(Color2.Format || (Color2.Format = {}));
})(Color || (Color = {}));
class RegistryImpl {
  constructor() {
    this.data = /* @__PURE__ */ new Map();
  }
  add(id, data) {
    ok(isString(id));
    ok(isObject(data));
    ok(!this.data.has(id), "There is already an extension with this id");
    this.data.set(id, data);
  }
  as(id) {
    return this.data.get(id) || null;
  }
}
const Registry = new RegistryImpl();
const Extensions$1 = {
  JSONContribution: "base.contributions.json"
};
function normalizeId(id) {
  if (id.length > 0 && id.charAt(id.length - 1) === "#") {
    return id.substring(0, id.length - 1);
  }
  return id;
}
class JSONContributionRegistry {
  constructor() {
    this._onDidChangeSchema = new Emitter();
    this.schemasById = {};
  }
  registerSchema(uri, unresolvedSchemaContent) {
    this.schemasById[normalizeId(uri)] = unresolvedSchemaContent;
    this._onDidChangeSchema.fire(uri);
  }
  notifySchemaChanged(uri) {
    this._onDidChangeSchema.fire(uri);
  }
}
const jsonContributionRegistry = new JSONContributionRegistry();
Registry.add(Extensions$1.JSONContribution, jsonContributionRegistry);
function asCssVariableName(colorIdent) {
  return `--vscode-${colorIdent.replace(/\./g, "-")}`;
}
function asCssVariable(color) {
  return `var(${asCssVariableName(color)})`;
}
function asCssVariableWithDefault(color, defaultCssValue) {
  return `var(${asCssVariableName(color)}, ${defaultCssValue})`;
}
function isColorDefaults(value) {
  return value !== null && typeof value === "object" && "light" in value && "dark" in value;
}
const Extensions = {
  ColorContribution: "base.contributions.colors"
};
const DEFAULT_COLOR_CONFIG_VALUE = "default";
class ColorRegistry {
  constructor() {
    this._onDidChangeSchema = new Emitter();
    this.onDidChangeSchema = this._onDidChangeSchema.event;
    this.colorSchema = { type: "object", properties: {} };
    this.colorReferenceSchema = { type: "string", enum: [], enumDescriptions: [] };
    this.colorsById = {};
  }
  registerColor(id, defaults, description, needsTransparency = false, deprecationMessage) {
    const colorContribution = { id, description, defaults, needsTransparency, deprecationMessage };
    this.colorsById[id] = colorContribution;
    const propertySchema = { type: "string", format: "color-hex", defaultSnippets: [{ body: "${1:#ff0000}" }] };
    if (deprecationMessage) {
      propertySchema.deprecationMessage = deprecationMessage;
    }
    if (needsTransparency) {
      propertySchema.pattern = "^#(?:(?<rgba>[0-9a-fA-f]{3}[0-9a-eA-E])|(?:[0-9a-fA-F]{6}(?:(?![fF]{2})(?:[0-9a-fA-F]{2}))))?$";
      propertySchema.patternErrorMessage = localize("transparecyRequired", "This color must be transparent or it will obscure content");
    }
    this.colorSchema.properties[id] = {
      description,
      oneOf: [
        propertySchema,
        { type: "string", const: DEFAULT_COLOR_CONFIG_VALUE, description: localize("useDefault", "Use the default color.") }
      ]
    };
    this.colorReferenceSchema.enum.push(id);
    this.colorReferenceSchema.enumDescriptions.push(description);
    this._onDidChangeSchema.fire();
    return id;
  }
  getColors() {
    return Object.keys(this.colorsById).map((id) => this.colorsById[id]);
  }
  resolveDefaultColor(id, theme) {
    const colorDesc = this.colorsById[id];
    if (colorDesc?.defaults) {
      const colorValue = isColorDefaults(colorDesc.defaults) ? colorDesc.defaults[theme.type] : colorDesc.defaults;
      return resolveColorValue(colorValue, theme);
    }
    return void 0;
  }
  getColorSchema() {
    return this.colorSchema;
  }
  toString() {
    const sorter = (a, b) => {
      const cat1 = a.indexOf(".") === -1 ? 0 : 1;
      const cat2 = b.indexOf(".") === -1 ? 0 : 1;
      if (cat1 !== cat2) {
        return cat1 - cat2;
      }
      return a.localeCompare(b);
    };
    return Object.keys(this.colorsById).sort(sorter).map((k) => `- \`${k}\`: ${this.colorsById[k].description}`).join("\n");
  }
}
const colorRegistry = new ColorRegistry();
Registry.add(Extensions.ColorContribution, colorRegistry);
function registerColor(id, defaults, description, needsTransparency, deprecationMessage) {
  return colorRegistry.registerColor(id, defaults, description, needsTransparency, deprecationMessage);
}
function executeTransform(transform, theme) {
  switch (transform.op) {
    case 0:
      return resolveColorValue(transform.value, theme)?.darken(transform.factor);
    case 1:
      return resolveColorValue(transform.value, theme)?.lighten(transform.factor);
    case 2:
      return resolveColorValue(transform.value, theme)?.transparent(transform.factor);
    case 3: {
      const backgroundColor = resolveColorValue(transform.background, theme);
      if (!backgroundColor) {
        return resolveColorValue(transform.value, theme);
      }
      return resolveColorValue(transform.value, theme)?.makeOpaque(backgroundColor);
    }
    case 4:
      for (const candidate of transform.values) {
        const color = resolveColorValue(candidate, theme);
        if (color) {
          return color;
        }
      }
      return void 0;
    case 6:
      return resolveColorValue(theme.defines(transform.if) ? transform.then : transform.else, theme);
    case 5: {
      const from = resolveColorValue(transform.value, theme);
      if (!from) {
        return void 0;
      }
      const backgroundColor = resolveColorValue(transform.background, theme);
      if (!backgroundColor) {
        return from.transparent(transform.factor * transform.transparency);
      }
      return from.isDarkerThan(backgroundColor) ? Color.getLighterColor(from, backgroundColor, transform.factor).transparent(transform.transparency) : Color.getDarkerColor(from, backgroundColor, transform.factor).transparent(transform.transparency);
    }
    default:
      throw assertNever();
  }
}
function darken(colorValue, factor) {
  return { op: 0, value: colorValue, factor };
}
function lighten(colorValue, factor) {
  return { op: 1, value: colorValue, factor };
}
function transparent(colorValue, factor) {
  return { op: 2, value: colorValue, factor };
}
function oneOf(...colorValues) {
  return { op: 4, values: colorValues };
}
function ifDefinedThenElse(ifArg, thenArg, elseArg) {
  return { op: 6, if: ifArg, then: thenArg, else: elseArg };
}
function lessProminent(colorValue, backgroundColorValue, factor, transparency) {
  return { op: 5, value: colorValue, background: backgroundColorValue, factor, transparency };
}
function resolveColorValue(colorValue, theme) {
  if (colorValue === null) {
    return void 0;
  } else if (typeof colorValue === "string") {
    if (colorValue[0] === "#") {
      return Color.fromHex(colorValue);
    }
    return theme.getColor(colorValue);
  } else if (colorValue instanceof Color) {
    return colorValue;
  } else if (typeof colorValue === "object") {
    return executeTransform(colorValue, theme);
  }
  return void 0;
}
const workbenchColorsSchemaId = "vscode://schemas/workbench-colors";
const schemaRegistry = Registry.as(Extensions$1.JSONContribution);
schemaRegistry.registerSchema(workbenchColorsSchemaId, colorRegistry.getColorSchema());
const delayer = new RunOnceScheduler(() => schemaRegistry.notifySchemaChanged(workbenchColorsSchemaId), 200);
colorRegistry.onDidChangeSchema(() => {
  if (!delayer.isScheduled()) {
    delayer.schedule();
  }
});
const foreground = registerColor("foreground", { dark: "#CCCCCC", light: "#616161", hcDark: "#FFFFFF", hcLight: "#292929" }, localize("foreground", "Overall foreground color. This color is only used if not overridden by a component."));
registerColor("disabledForeground", { dark: "#CCCCCC80", light: "#61616180", hcDark: "#A5A5A5", hcLight: "#7F7F7F" }, localize("disabledForeground", "Overall foreground for disabled elements. This color is only used if not overridden by a component."));
registerColor("errorForeground", { dark: "#F48771", light: "#A1260D", hcDark: "#F48771", hcLight: "#B5200D" }, localize("errorForeground", "Overall foreground color for error messages. This color is only used if not overridden by a component."));
registerColor("descriptionForeground", { light: "#717171", dark: transparent(foreground, 0.7), hcDark: transparent(foreground, 0.7), hcLight: transparent(foreground, 0.7) }, localize("descriptionForeground", "Foreground color for description text providing additional information, for example for a label."));
const iconForeground = registerColor("icon.foreground", { dark: "#C5C5C5", light: "#424242", hcDark: "#FFFFFF", hcLight: "#292929" }, localize("iconForeground", "The default color for icons in the workbench."));
const focusBorder = registerColor("focusBorder", { dark: "#007FD4", light: "#0090F1", hcDark: "#F38518", hcLight: "#006BBD" }, localize("focusBorder", "Overall border color for focused elements. This color is only used if not overridden by a component."));
const contrastBorder = registerColor("contrastBorder", { light: null, dark: null, hcDark: "#6FC3DF", hcLight: "#0F4A85" }, localize("contrastBorder", "An extra border around elements to separate them from others for greater contrast."));
const activeContrastBorder = registerColor("contrastActiveBorder", { light: null, dark: null, hcDark: focusBorder, hcLight: focusBorder }, localize("activeContrastBorder", "An extra border around active elements to separate them from others for greater contrast."));
registerColor("selection.background", null, localize("selectionBackground", "The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor."));
const textLinkForeground = registerColor("textLink.foreground", { light: "#006AB1", dark: "#3794FF", hcDark: "#21A6FF", hcLight: "#0F4A85" }, localize("textLinkForeground", "Foreground color for links in text."));
registerColor("textLink.activeForeground", { light: "#006AB1", dark: "#3794FF", hcDark: "#21A6FF", hcLight: "#0F4A85" }, localize("textLinkActiveForeground", "Foreground color for links in text when clicked on and on mouse hover."));
registerColor("textSeparator.foreground", { light: "#0000002e", dark: "#ffffff2e", hcDark: Color.black, hcLight: "#292929" }, localize("textSeparatorForeground", "Color for text separators."));
registerColor("textPreformat.foreground", { light: "#A31515", dark: "#D7BA7D", hcDark: "#000000", hcLight: "#FFFFFF" }, localize("textPreformatForeground", "Foreground color for preformatted text segments."));
registerColor("textPreformat.background", { light: "#0000001A", dark: "#FFFFFF1A", hcDark: "#FFFFFF", hcLight: "#09345f" }, localize("textPreformatBackground", "Background color for preformatted text segments."));
registerColor("textBlockQuote.background", { light: "#f2f2f2", dark: "#222222", hcDark: null, hcLight: "#F2F2F2" }, localize("textBlockQuoteBackground", "Background color for block quotes in text."));
registerColor("textBlockQuote.border", { light: "#007acc80", dark: "#007acc80", hcDark: Color.white, hcLight: "#292929" }, localize("textBlockQuoteBorder", "Border color for block quotes in text."));
registerColor("textCodeBlock.background", { light: "#dcdcdc66", dark: "#0a0a0a66", hcDark: Color.black, hcLight: "#F2F2F2" }, localize("textCodeBlockBackground", "Background color for code blocks in text."));
registerColor("sash.hoverBorder", focusBorder, localize("sashActiveBorder", "Border color of active sashes."));
const badgeBackground = registerColor("badge.background", { dark: "#4D4D4D", light: "#C4C4C4", hcDark: Color.black, hcLight: "#0F4A85" }, localize("badgeBackground", "Badge background color. Badges are small information labels, e.g. for search results count."));
const badgeForeground = registerColor("badge.foreground", { dark: Color.white, light: "#333", hcDark: Color.white, hcLight: Color.white }, localize("badgeForeground", "Badge foreground color. Badges are small information labels, e.g. for search results count."));
const scrollbarShadow = registerColor("scrollbar.shadow", { dark: "#000000", light: "#DDDDDD", hcDark: null, hcLight: null }, localize("scrollbarShadow", "Scrollbar shadow to indicate that the view is scrolled."));
const scrollbarSliderBackground = registerColor("scrollbarSlider.background", { dark: Color.fromHex("#797979").transparent(0.4), light: Color.fromHex("#646464").transparent(0.4), hcDark: transparent(contrastBorder, 0.6), hcLight: transparent(contrastBorder, 0.4) }, localize("scrollbarSliderBackground", "Scrollbar slider background color."));
const scrollbarSliderHoverBackground = registerColor("scrollbarSlider.hoverBackground", { dark: Color.fromHex("#646464").transparent(0.7), light: Color.fromHex("#646464").transparent(0.7), hcDark: transparent(contrastBorder, 0.8), hcLight: transparent(contrastBorder, 0.8) }, localize("scrollbarSliderHoverBackground", "Scrollbar slider background color when hovering."));
const scrollbarSliderActiveBackground = registerColor("scrollbarSlider.activeBackground", { dark: Color.fromHex("#BFBFBF").transparent(0.4), light: Color.fromHex("#000000").transparent(0.6), hcDark: contrastBorder, hcLight: contrastBorder }, localize("scrollbarSliderActiveBackground", "Scrollbar slider background color when clicked on."));
const progressBarBackground = registerColor("progressBar.background", { dark: Color.fromHex("#0E70C0"), light: Color.fromHex("#0E70C0"), hcDark: contrastBorder, hcLight: contrastBorder }, localize("progressBarBackground", "Background color of the progress bar that can show for long running operations."));
const editorBackground = registerColor("editor.background", { light: "#ffffff", dark: "#1E1E1E", hcDark: Color.black, hcLight: Color.white }, localize("editorBackground", "Editor background color."));
const editorForeground = registerColor("editor.foreground", { light: "#333333", dark: "#BBBBBB", hcDark: Color.white, hcLight: foreground }, localize("editorForeground", "Editor default foreground color."));
registerColor("editorStickyScroll.background", editorBackground, localize("editorStickyScrollBackground", "Background color of sticky scroll in the editor"));
registerColor("editorStickyScrollHover.background", { dark: "#2A2D2E", light: "#F0F0F0", hcDark: null, hcLight: Color.fromHex("#0F4A85").transparent(0.1) }, localize("editorStickyScrollHoverBackground", "Background color of sticky scroll on hover in the editor"));
registerColor("editorStickyScroll.border", { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize("editorStickyScrollBorder", "Border color of sticky scroll in the editor"));
registerColor("editorStickyScroll.shadow", scrollbarShadow, localize("editorStickyScrollShadow", " Shadow color of sticky scroll in the editor"));
const editorWidgetBackground = registerColor("editorWidget.background", { dark: "#252526", light: "#F3F3F3", hcDark: "#0C141F", hcLight: Color.white }, localize("editorWidgetBackground", "Background color of editor widgets, such as find/replace."));
const editorWidgetForeground = registerColor("editorWidget.foreground", foreground, localize("editorWidgetForeground", "Foreground color of editor widgets, such as find/replace."));
const editorWidgetBorder = registerColor("editorWidget.border", { dark: "#454545", light: "#C8C8C8", hcDark: contrastBorder, hcLight: contrastBorder }, localize("editorWidgetBorder", "Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget."));
registerColor("editorWidget.resizeBorder", null, localize("editorWidgetResizeBorder", "Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget."));
registerColor("editorError.background", null, localize("editorError.background", "Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations."), true);
const editorErrorForeground = registerColor("editorError.foreground", { dark: "#F14C4C", light: "#E51400", hcDark: "#F48771", hcLight: "#B5200D" }, localize("editorError.foreground", "Foreground color of error squigglies in the editor."));
const editorErrorBorder = registerColor("editorError.border", { dark: null, light: null, hcDark: Color.fromHex("#E47777").transparent(0.8), hcLight: "#B5200D" }, localize("errorBorder", "If set, color of double underlines for errors in the editor."));
const editorWarningBackground = registerColor("editorWarning.background", null, localize("editorWarning.background", "Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations."), true);
const editorWarningForeground = registerColor("editorWarning.foreground", { dark: "#CCA700", light: "#BF8803", hcDark: "#FFD370", hcLight: "#895503" }, localize("editorWarning.foreground", "Foreground color of warning squigglies in the editor."));
const editorWarningBorder = registerColor("editorWarning.border", { dark: null, light: null, hcDark: Color.fromHex("#FFCC00").transparent(0.8), hcLight: Color.fromHex("#FFCC00").transparent(0.8) }, localize("warningBorder", "If set, color of double underlines for warnings in the editor."));
registerColor("editorInfo.background", null, localize("editorInfo.background", "Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations."), true);
const editorInfoForeground = registerColor("editorInfo.foreground", { dark: "#3794FF", light: "#1a85ff", hcDark: "#3794FF", hcLight: "#1a85ff" }, localize("editorInfo.foreground", "Foreground color of info squigglies in the editor."));
const editorInfoBorder = registerColor("editorInfo.border", { dark: null, light: null, hcDark: Color.fromHex("#3794FF").transparent(0.8), hcLight: "#292929" }, localize("infoBorder", "If set, color of double underlines for infos in the editor."));
const editorHintForeground = registerColor("editorHint.foreground", { dark: Color.fromHex("#eeeeee").transparent(0.7), light: "#6c6c6c", hcDark: null, hcLight: null }, localize("editorHint.foreground", "Foreground color of hint squigglies in the editor."));
registerColor("editorHint.border", { dark: null, light: null, hcDark: Color.fromHex("#eeeeee").transparent(0.8), hcLight: "#292929" }, localize("hintBorder", "If set, color of double underlines for hints in the editor."));
const editorActiveLinkForeground = registerColor("editorLink.activeForeground", { dark: "#4E94CE", light: Color.blue, hcDark: Color.cyan, hcLight: "#292929" }, localize("activeLinkForeground", "Color of active links."));
const editorSelectionBackground = registerColor("editor.selectionBackground", { light: "#ADD6FF", dark: "#264F78", hcDark: "#f3f518", hcLight: "#0F4A85" }, localize("editorSelectionBackground", "Color of the editor selection."));
const editorSelectionForeground = registerColor("editor.selectionForeground", { light: null, dark: null, hcDark: "#000000", hcLight: Color.white }, localize("editorSelectionForeground", "Color of the selected text for high contrast."));
const editorInactiveSelection = registerColor("editor.inactiveSelectionBackground", { light: transparent(editorSelectionBackground, 0.5), dark: transparent(editorSelectionBackground, 0.5), hcDark: transparent(editorSelectionBackground, 0.7), hcLight: transparent(editorSelectionBackground, 0.5) }, localize("editorInactiveSelection", "Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations."), true);
const editorSelectionHighlight = registerColor("editor.selectionHighlightBackground", { light: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), dark: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), hcDark: null, hcLight: null }, localize("editorSelectionHighlight", "Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor("editor.selectionHighlightBorder", { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize("editorSelectionHighlightBorder", "Border color for regions with the same content as the selection."));
registerColor("editor.findMatchBackground", { light: "#A8AC94", dark: "#515C6A", hcDark: null, hcLight: null }, localize("editorFindMatch", "Color of the current search match."));
const editorFindMatchForeground = registerColor("editor.findMatchForeground", null, localize("editorFindMatchForeground", "Text color of the current search match."));
const editorFindMatchHighlight = registerColor("editor.findMatchHighlightBackground", { light: "#EA5C0055", dark: "#EA5C0055", hcDark: null, hcLight: null }, localize("findMatchHighlight", "Color of the other search matches. The color must not be opaque so as not to hide underlying decorations."), true);
const editorFindMatchHighlightForeground = registerColor("editor.findMatchHighlightForeground", null, localize("findMatchHighlightForeground", "Foreground color of the other search matches."), true);
registerColor("editor.findRangeHighlightBackground", { dark: "#3a3d4166", light: "#b4b4b44d", hcDark: null, hcLight: null }, localize("findRangeHighlight", "Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor("editor.findMatchBorder", { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize("editorFindMatchBorder", "Border color of the current search match."));
const editorFindMatchHighlightBorder = registerColor("editor.findMatchHighlightBorder", { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize("findMatchHighlightBorder", "Border color of the other search matches."));
const editorFindRangeHighlightBorder = registerColor("editor.findRangeHighlightBorder", { dark: null, light: null, hcDark: transparent(activeContrastBorder, 0.4), hcLight: transparent(activeContrastBorder, 0.4) }, localize("findRangeHighlightBorder", "Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor("editor.hoverHighlightBackground", { light: "#ADD6FF26", dark: "#264f7840", hcDark: "#ADD6FF26", hcLight: null }, localize("hoverHighlight", "Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations."), true);
const editorHoverBackground = registerColor("editorHoverWidget.background", editorWidgetBackground, localize("hoverBackground", "Background color of the editor hover."));
registerColor("editorHoverWidget.foreground", editorWidgetForeground, localize("hoverForeground", "Foreground color of the editor hover."));
const editorHoverBorder = registerColor("editorHoverWidget.border", editorWidgetBorder, localize("hoverBorder", "Border color of the editor hover."));
registerColor("editorHoverWidget.statusBarBackground", { dark: lighten(editorHoverBackground, 0.2), light: darken(editorHoverBackground, 0.05), hcDark: editorWidgetBackground, hcLight: editorWidgetBackground }, localize("statusBarBackground", "Background color of the editor hover status bar."));
const editorInlayHintForeground = registerColor("editorInlayHint.foreground", { dark: "#969696", light: "#969696", hcDark: Color.white, hcLight: Color.black }, localize("editorInlayHintForeground", "Foreground color of inline hints"));
const editorInlayHintBackground = registerColor("editorInlayHint.background", { dark: transparent(badgeBackground, 0.1), light: transparent(badgeBackground, 0.1), hcDark: transparent(Color.white, 0.1), hcLight: transparent(badgeBackground, 0.1) }, localize("editorInlayHintBackground", "Background color of inline hints"));
const editorInlayHintTypeForeground = registerColor("editorInlayHint.typeForeground", editorInlayHintForeground, localize("editorInlayHintForegroundTypes", "Foreground color of inline hints for types"));
const editorInlayHintTypeBackground = registerColor("editorInlayHint.typeBackground", editorInlayHintBackground, localize("editorInlayHintBackgroundTypes", "Background color of inline hints for types"));
const editorInlayHintParameterForeground = registerColor("editorInlayHint.parameterForeground", editorInlayHintForeground, localize("editorInlayHintForegroundParameter", "Foreground color of inline hints for parameters"));
const editorInlayHintParameterBackground = registerColor("editorInlayHint.parameterBackground", editorInlayHintBackground, localize("editorInlayHintBackgroundParameter", "Background color of inline hints for parameters"));
const editorLightBulbForeground = registerColor("editorLightBulb.foreground", { dark: "#FFCC00", light: "#DDB100", hcDark: "#FFCC00", hcLight: "#007ACC" }, localize("editorLightBulbForeground", "The color used for the lightbulb actions icon."));
registerColor("editorLightBulbAutoFix.foreground", { dark: "#75BEFF", light: "#007ACC", hcDark: "#75BEFF", hcLight: "#007ACC" }, localize("editorLightBulbAutoFixForeground", "The color used for the lightbulb auto fix actions icon."));
registerColor("editorLightBulbAi.foreground", editorLightBulbForeground, localize("editorLightBulbAiForeground", "The color used for the lightbulb AI icon."));
registerColor("editor.snippetTabstopHighlightBackground", { dark: new Color(new RGBA(124, 124, 124, 0.3)), light: new Color(new RGBA(10, 50, 100, 0.2)), hcDark: new Color(new RGBA(124, 124, 124, 0.3)), hcLight: new Color(new RGBA(10, 50, 100, 0.2)) }, localize("snippetTabstopHighlightBackground", "Highlight background color of a snippet tabstop."));
registerColor("editor.snippetTabstopHighlightBorder", null, localize("snippetTabstopHighlightBorder", "Highlight border color of a snippet tabstop."));
registerColor("editor.snippetFinalTabstopHighlightBackground", null, localize("snippetFinalTabstopHighlightBackground", "Highlight background color of the final tabstop of a snippet."));
registerColor("editor.snippetFinalTabstopHighlightBorder", { dark: "#525252", light: new Color(new RGBA(10, 50, 100, 0.5)), hcDark: "#525252", hcLight: "#292929" }, localize("snippetFinalTabstopHighlightBorder", "Highlight border color of the final tabstop of a snippet."));
const defaultInsertColor = new Color(new RGBA(155, 185, 85, 0.2));
const defaultRemoveColor = new Color(new RGBA(255, 0, 0, 0.2));
const diffInserted = registerColor("diffEditor.insertedTextBackground", { dark: "#9ccc2c33", light: "#9ccc2c40", hcDark: null, hcLight: null }, localize("diffEditorInserted", "Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations."), true);
const diffRemoved = registerColor("diffEditor.removedTextBackground", { dark: "#ff000033", light: "#ff000033", hcDark: null, hcLight: null }, localize("diffEditorRemoved", "Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor("diffEditor.insertedLineBackground", { dark: defaultInsertColor, light: defaultInsertColor, hcDark: null, hcLight: null }, localize("diffEditorInsertedLines", "Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor("diffEditor.removedLineBackground", { dark: defaultRemoveColor, light: defaultRemoveColor, hcDark: null, hcLight: null }, localize("diffEditorRemovedLines", "Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor("diffEditorGutter.insertedLineBackground", null, localize("diffEditorInsertedLineGutter", "Background color for the margin where lines got inserted."));
registerColor("diffEditorGutter.removedLineBackground", null, localize("diffEditorRemovedLineGutter", "Background color for the margin where lines got removed."));
const diffOverviewRulerInserted = registerColor("diffEditorOverview.insertedForeground", null, localize("diffEditorOverviewInserted", "Diff overview ruler foreground for inserted content."));
const diffOverviewRulerRemoved = registerColor("diffEditorOverview.removedForeground", null, localize("diffEditorOverviewRemoved", "Diff overview ruler foreground for removed content."));
registerColor("diffEditor.insertedTextBorder", { dark: null, light: null, hcDark: "#33ff2eff", hcLight: "#374E06" }, localize("diffEditorInsertedOutline", "Outline color for the text that got inserted."));
registerColor("diffEditor.removedTextBorder", { dark: null, light: null, hcDark: "#FF008F", hcLight: "#AD0707" }, localize("diffEditorRemovedOutline", "Outline color for text that got removed."));
registerColor("diffEditor.border", { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize("diffEditorBorder", "Border color between the two text editors."));
registerColor("diffEditor.diagonalFill", { dark: "#cccccc33", light: "#22222233", hcDark: null, hcLight: null }, localize("diffDiagonalFill", "Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views."));
registerColor("diffEditor.unchangedRegionBackground", "sideBar.background", localize("diffEditor.unchangedRegionBackground", "The background color of unchanged blocks in the diff editor."));
registerColor("diffEditor.unchangedRegionForeground", "foreground", localize("diffEditor.unchangedRegionForeground", "The foreground color of unchanged blocks in the diff editor."));
registerColor("diffEditor.unchangedCodeBackground", { dark: "#74747429", light: "#b8b8b829", hcDark: null, hcLight: null }, localize("diffEditor.unchangedCodeBackground", "The background color of unchanged code in the diff editor."));
const widgetShadow = registerColor("widget.shadow", { dark: transparent(Color.black, 0.36), light: transparent(Color.black, 0.16), hcDark: null, hcLight: null }, localize("widgetShadow", "Shadow color of widgets such as find/replace inside the editor."));
const widgetBorder = registerColor("widget.border", { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize("widgetBorder", "Border color of widgets such as find/replace inside the editor."));
const toolbarHoverBackground = registerColor("toolbar.hoverBackground", { dark: "#5a5d5e50", light: "#b8b8b850", hcDark: null, hcLight: null }, localize("toolbarHoverBackground", "Toolbar background when hovering over actions using the mouse"));
registerColor("toolbar.hoverOutline", { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize("toolbarHoverOutline", "Toolbar outline when hovering over actions using the mouse"));
registerColor("toolbar.activeBackground", { dark: lighten(toolbarHoverBackground, 0.1), light: darken(toolbarHoverBackground, 0.1), hcDark: null, hcLight: null }, localize("toolbarActiveBackground", "Toolbar background when holding the mouse over actions"));
const breadcrumbsForeground = registerColor("breadcrumb.foreground", transparent(foreground, 0.8), localize("breadcrumbsFocusForeground", "Color of focused breadcrumb items."));
const breadcrumbsBackground = registerColor("breadcrumb.background", editorBackground, localize("breadcrumbsBackground", "Background color of breadcrumb items."));
const breadcrumbsFocusForeground = registerColor("breadcrumb.focusForeground", { light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hcDark: lighten(foreground, 0.1), hcLight: lighten(foreground, 0.1) }, localize("breadcrumbsFocusForeground", "Color of focused breadcrumb items."));
const breadcrumbsActiveSelectionForeground = registerColor("breadcrumb.activeSelectionForeground", { light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hcDark: lighten(foreground, 0.1), hcLight: lighten(foreground, 0.1) }, localize("breadcrumbsSelectedForeground", "Color of selected breadcrumb items."));
registerColor("breadcrumbPicker.background", editorWidgetBackground, localize("breadcrumbsSelectedBackground", "Background color of breadcrumb item picker."));
const headerTransparency = 0.5;
const currentBaseColor = Color.fromHex("#40C8AE").transparent(headerTransparency);
const incomingBaseColor = Color.fromHex("#40A6FF").transparent(headerTransparency);
const commonBaseColor = Color.fromHex("#606060").transparent(0.4);
const contentTransparency = 0.4;
const rulerTransparency = 1;
const mergeCurrentHeaderBackground = registerColor("merge.currentHeaderBackground", { dark: currentBaseColor, light: currentBaseColor, hcDark: null, hcLight: null }, localize("mergeCurrentHeaderBackground", "Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor("merge.currentContentBackground", transparent(mergeCurrentHeaderBackground, contentTransparency), localize("mergeCurrentContentBackground", "Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), true);
const mergeIncomingHeaderBackground = registerColor("merge.incomingHeaderBackground", { dark: incomingBaseColor, light: incomingBaseColor, hcDark: null, hcLight: null }, localize("mergeIncomingHeaderBackground", "Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor("merge.incomingContentBackground", transparent(mergeIncomingHeaderBackground, contentTransparency), localize("mergeIncomingContentBackground", "Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), true);
const mergeCommonHeaderBackground = registerColor("merge.commonHeaderBackground", { dark: commonBaseColor, light: commonBaseColor, hcDark: null, hcLight: null }, localize("mergeCommonHeaderBackground", "Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor("merge.commonContentBackground", transparent(mergeCommonHeaderBackground, contentTransparency), localize("mergeCommonContentBackground", "Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."), true);
const mergeBorder = registerColor("merge.border", { dark: null, light: null, hcDark: "#C3DF6F", hcLight: "#007ACC" }, localize("mergeBorder", "Border color on headers and the splitter in inline merge-conflicts."));
registerColor("editorOverviewRuler.currentContentForeground", { dark: transparent(mergeCurrentHeaderBackground, rulerTransparency), light: transparent(mergeCurrentHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, localize("overviewRulerCurrentContentForeground", "Current overview ruler foreground for inline merge-conflicts."));
registerColor("editorOverviewRuler.incomingContentForeground", { dark: transparent(mergeIncomingHeaderBackground, rulerTransparency), light: transparent(mergeIncomingHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, localize("overviewRulerIncomingContentForeground", "Incoming overview ruler foreground for inline merge-conflicts."));
registerColor("editorOverviewRuler.commonContentForeground", { dark: transparent(mergeCommonHeaderBackground, rulerTransparency), light: transparent(mergeCommonHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, localize("overviewRulerCommonContentForeground", "Common ancestor overview ruler foreground for inline merge-conflicts."));
const overviewRulerFindMatchForeground = registerColor("editorOverviewRuler.findMatchForeground", { dark: "#d186167e", light: "#d186167e", hcDark: "#AB5A00", hcLight: "#AB5A00" }, localize("overviewRulerFindMatchForeground", "Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations."), true);
const overviewRulerSelectionHighlightForeground = registerColor("editorOverviewRuler.selectionHighlightForeground", "#A0A0A0CC", localize("overviewRulerSelectionHighlightForeground", "Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations."), true);
const problemsErrorIconForeground = registerColor("problemsErrorIcon.foreground", editorErrorForeground, localize("problemsErrorIconForeground", "The color used for the problems error icon."));
const problemsWarningIconForeground = registerColor("problemsWarningIcon.foreground", editorWarningForeground, localize("problemsWarningIconForeground", "The color used for the problems warning icon."));
const problemsInfoIconForeground = registerColor("problemsInfoIcon.foreground", editorInfoForeground, localize("problemsInfoIconForeground", "The color used for the problems info icon."));
const minimapFindMatch = registerColor("minimap.findMatchHighlight", { light: "#d18616", dark: "#d18616", hcDark: "#AB5A00", hcLight: "#0F4A85" }, localize("minimapFindMatchHighlight", "Minimap marker color for find matches."), true);
const minimapSelectionOccurrenceHighlight = registerColor("minimap.selectionOccurrenceHighlight", { light: "#c9c9c9", dark: "#676767", hcDark: "#ffffff", hcLight: "#0F4A85" }, localize("minimapSelectionOccurrenceHighlight", "Minimap marker color for repeating editor selections."), true);
const minimapSelection = registerColor("minimap.selectionHighlight", { light: "#ADD6FF", dark: "#264F78", hcDark: "#ffffff", hcLight: "#0F4A85" }, localize("minimapSelectionHighlight", "Minimap marker color for the editor selection."), true);
const minimapInfo = registerColor("minimap.infoHighlight", { dark: editorInfoForeground, light: editorInfoForeground, hcDark: editorInfoBorder, hcLight: editorInfoBorder }, localize("minimapInfo", "Minimap marker color for infos."));
const minimapWarning = registerColor("minimap.warningHighlight", { dark: editorWarningForeground, light: editorWarningForeground, hcDark: editorWarningBorder, hcLight: editorWarningBorder }, localize("overviewRuleWarning", "Minimap marker color for warnings."));
const minimapError = registerColor("minimap.errorHighlight", { dark: new Color(new RGBA(255, 18, 18, 0.7)), light: new Color(new RGBA(255, 18, 18, 0.7)), hcDark: new Color(new RGBA(255, 50, 50, 1)), hcLight: "#B5200D" }, localize("minimapError", "Minimap marker color for errors."));
const minimapBackground = registerColor("minimap.background", null, localize("minimapBackground", "Minimap background color."));
const minimapForegroundOpacity = registerColor("minimap.foregroundOpacity", Color.fromHex("#000f"), localize("minimapForegroundOpacity", 'Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.'));
registerColor("minimapSlider.background", transparent(scrollbarSliderBackground, 0.5), localize("minimapSliderBackground", "Minimap slider background color."));
registerColor("minimapSlider.hoverBackground", transparent(scrollbarSliderHoverBackground, 0.5), localize("minimapSliderHoverBackground", "Minimap slider background color when hovering."));
registerColor("minimapSlider.activeBackground", transparent(scrollbarSliderActiveBackground, 0.5), localize("minimapSliderActiveBackground", "Minimap slider background color when clicked on."));
registerColor("charts.foreground", foreground, localize("chartsForeground", "The foreground color used in charts."));
registerColor("charts.lines", transparent(foreground, 0.5), localize("chartsLines", "The color used for horizontal lines in charts."));
registerColor("charts.red", editorErrorForeground, localize("chartsRed", "The red color used in chart visualizations."));
registerColor("charts.blue", editorInfoForeground, localize("chartsBlue", "The blue color used in chart visualizations."));
registerColor("charts.yellow", editorWarningForeground, localize("chartsYellow", "The yellow color used in chart visualizations."));
registerColor("charts.orange", minimapFindMatch, localize("chartsOrange", "The orange color used in chart visualizations."));
registerColor("charts.green", { dark: "#89D185", light: "#388A34", hcDark: "#89D185", hcLight: "#374e06" }, localize("chartsGreen", "The green color used in chart visualizations."));
registerColor("charts.purple", { dark: "#B180D7", light: "#652D90", hcDark: "#B180D7", hcLight: "#652D90" }, localize("chartsPurple", "The purple color used in chart visualizations."));
const inputBackground = registerColor("input.background", { dark: "#3C3C3C", light: Color.white, hcDark: Color.black, hcLight: Color.white }, localize("inputBoxBackground", "Input box background."));
const inputForeground = registerColor("input.foreground", foreground, localize("inputBoxForeground", "Input box foreground."));
const inputBorder = registerColor("input.border", { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize("inputBoxBorder", "Input box border."));
const inputActiveOptionBorder = registerColor("inputOption.activeBorder", { dark: "#007ACC", light: "#007ACC", hcDark: contrastBorder, hcLight: contrastBorder }, localize("inputBoxActiveOptionBorder", "Border color of activated options in input fields."));
const inputActiveOptionHoverBackground = registerColor("inputOption.hoverBackground", { dark: "#5a5d5e80", light: "#b8b8b850", hcDark: null, hcLight: null }, localize("inputOption.hoverBackground", "Background color of activated options in input fields."));
const inputActiveOptionBackground = registerColor("inputOption.activeBackground", { dark: transparent(focusBorder, 0.4), light: transparent(focusBorder, 0.2), hcDark: Color.transparent, hcLight: Color.transparent }, localize("inputOption.activeBackground", "Background hover color of options in input fields."));
const inputActiveOptionForeground = registerColor("inputOption.activeForeground", { dark: Color.white, light: Color.black, hcDark: foreground, hcLight: foreground }, localize("inputOption.activeForeground", "Foreground color of activated options in input fields."));
registerColor("input.placeholderForeground", { light: transparent(foreground, 0.5), dark: transparent(foreground, 0.5), hcDark: transparent(foreground, 0.7), hcLight: transparent(foreground, 0.7) }, localize("inputPlaceholderForeground", "Input box foreground color for placeholder text."));
const inputValidationInfoBackground = registerColor("inputValidation.infoBackground", { dark: "#063B49", light: "#D6ECF2", hcDark: Color.black, hcLight: Color.white }, localize("inputValidationInfoBackground", "Input validation background color for information severity."));
const inputValidationInfoForeground = registerColor("inputValidation.infoForeground", { dark: null, light: null, hcDark: null, hcLight: foreground }, localize("inputValidationInfoForeground", "Input validation foreground color for information severity."));
const inputValidationInfoBorder = registerColor("inputValidation.infoBorder", { dark: "#007acc", light: "#007acc", hcDark: contrastBorder, hcLight: contrastBorder }, localize("inputValidationInfoBorder", "Input validation border color for information severity."));
const inputValidationWarningBackground = registerColor("inputValidation.warningBackground", { dark: "#352A05", light: "#F6F5D2", hcDark: Color.black, hcLight: Color.white }, localize("inputValidationWarningBackground", "Input validation background color for warning severity."));
const inputValidationWarningForeground = registerColor("inputValidation.warningForeground", { dark: null, light: null, hcDark: null, hcLight: foreground }, localize("inputValidationWarningForeground", "Input validation foreground color for warning severity."));
const inputValidationWarningBorder = registerColor("inputValidation.warningBorder", { dark: "#B89500", light: "#B89500", hcDark: contrastBorder, hcLight: contrastBorder }, localize("inputValidationWarningBorder", "Input validation border color for warning severity."));
const inputValidationErrorBackground = registerColor("inputValidation.errorBackground", { dark: "#5A1D1D", light: "#F2DEDE", hcDark: Color.black, hcLight: Color.white }, localize("inputValidationErrorBackground", "Input validation background color for error severity."));
const inputValidationErrorForeground = registerColor("inputValidation.errorForeground", { dark: null, light: null, hcDark: null, hcLight: foreground }, localize("inputValidationErrorForeground", "Input validation foreground color for error severity."));
const inputValidationErrorBorder = registerColor("inputValidation.errorBorder", { dark: "#BE1100", light: "#BE1100", hcDark: contrastBorder, hcLight: contrastBorder }, localize("inputValidationErrorBorder", "Input validation border color for error severity."));
const selectBackground = registerColor("dropdown.background", { dark: "#3C3C3C", light: Color.white, hcDark: Color.black, hcLight: Color.white }, localize("dropdownBackground", "Dropdown background."));
const selectListBackground = registerColor("dropdown.listBackground", { dark: null, light: null, hcDark: Color.black, hcLight: Color.white }, localize("dropdownListBackground", "Dropdown list background."));
const selectForeground = registerColor("dropdown.foreground", { dark: "#F0F0F0", light: foreground, hcDark: Color.white, hcLight: foreground }, localize("dropdownForeground", "Dropdown foreground."));
const selectBorder = registerColor("dropdown.border", { dark: selectBackground, light: "#CECECE", hcDark: contrastBorder, hcLight: contrastBorder }, localize("dropdownBorder", "Dropdown border."));
const buttonForeground = registerColor("button.foreground", Color.white, localize("buttonForeground", "Button foreground color."));
const buttonSeparator = registerColor("button.separator", transparent(buttonForeground, 0.4), localize("buttonSeparator", "Button separator color."));
const buttonBackground = registerColor("button.background", { dark: "#0E639C", light: "#007ACC", hcDark: null, hcLight: "#0F4A85" }, localize("buttonBackground", "Button background color."));
const buttonHoverBackground = registerColor("button.hoverBackground", { dark: lighten(buttonBackground, 0.2), light: darken(buttonBackground, 0.2), hcDark: buttonBackground, hcLight: buttonBackground }, localize("buttonHoverBackground", "Button background color when hovering."));
const buttonBorder = registerColor("button.border", contrastBorder, localize("buttonBorder", "Button border color."));
const buttonSecondaryForeground = registerColor("button.secondaryForeground", { dark: Color.white, light: Color.white, hcDark: Color.white, hcLight: foreground }, localize("buttonSecondaryForeground", "Secondary button foreground color."));
const buttonSecondaryBackground = registerColor("button.secondaryBackground", { dark: "#3A3D41", light: "#5F6A79", hcDark: null, hcLight: Color.white }, localize("buttonSecondaryBackground", "Secondary button background color."));
const buttonSecondaryHoverBackground = registerColor("button.secondaryHoverBackground", { dark: lighten(buttonSecondaryBackground, 0.2), light: darken(buttonSecondaryBackground, 0.2), hcDark: null, hcLight: null }, localize("buttonSecondaryHoverBackground", "Secondary button background color when hovering."));
const radioActiveForeground = registerColor("radio.activeForeground", inputActiveOptionForeground, localize("radioActiveForeground", "Foreground color of active radio option."));
const radioActiveBackground = registerColor("radio.activeBackground", inputActiveOptionBackground, localize("radioBackground", "Background color of active radio option."));
const radioActiveBorder = registerColor("radio.activeBorder", inputActiveOptionBorder, localize("radioActiveBorder", "Border color of the active radio option."));
const radioInactiveForeground = registerColor("radio.inactiveForeground", null, localize("radioInactiveForeground", "Foreground color of inactive radio option."));
const radioInactiveBackground = registerColor("radio.inactiveBackground", null, localize("radioInactiveBackground", "Background color of inactive radio option."));
const radioInactiveBorder = registerColor("radio.inactiveBorder", { light: transparent(radioActiveForeground, 0.2), dark: transparent(radioActiveForeground, 0.2), hcDark: transparent(radioActiveForeground, 0.4), hcLight: transparent(radioActiveForeground, 0.2) }, localize("radioInactiveBorder", "Border color of the inactive radio option."));
const radioInactiveHoverBackground = registerColor("radio.inactiveHoverBackground", inputActiveOptionHoverBackground, localize("radioHoverBackground", "Background color of inactive active radio option when hovering."));
const checkboxBackground = registerColor("checkbox.background", selectBackground, localize("checkbox.background", "Background color of checkbox widget."));
registerColor("checkbox.selectBackground", editorWidgetBackground, localize("checkbox.select.background", "Background color of checkbox widget when the element it's in is selected."));
const checkboxForeground = registerColor("checkbox.foreground", selectForeground, localize("checkbox.foreground", "Foreground color of checkbox widget."));
const checkboxBorder = registerColor("checkbox.border", selectBorder, localize("checkbox.border", "Border color of checkbox widget."));
registerColor("checkbox.selectBorder", iconForeground, localize("checkbox.select.border", "Border color of checkbox widget when the element it's in is selected."));
const keybindingLabelBackground = registerColor("keybindingLabel.background", { dark: new Color(new RGBA(128, 128, 128, 0.17)), light: new Color(new RGBA(221, 221, 221, 0.4)), hcDark: Color.transparent, hcLight: Color.transparent }, localize("keybindingLabelBackground", "Keybinding label background color. The keybinding label is used to represent a keyboard shortcut."));
const keybindingLabelForeground = registerColor("keybindingLabel.foreground", { dark: Color.fromHex("#CCCCCC"), light: Color.fromHex("#555555"), hcDark: Color.white, hcLight: foreground }, localize("keybindingLabelForeground", "Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut."));
const keybindingLabelBorder = registerColor("keybindingLabel.border", { dark: new Color(new RGBA(51, 51, 51, 0.6)), light: new Color(new RGBA(204, 204, 204, 0.4)), hcDark: new Color(new RGBA(111, 195, 223)), hcLight: contrastBorder }, localize("keybindingLabelBorder", "Keybinding label border color. The keybinding label is used to represent a keyboard shortcut."));
const keybindingLabelBottomBorder = registerColor("keybindingLabel.bottomBorder", { dark: new Color(new RGBA(68, 68, 68, 0.6)), light: new Color(new RGBA(187, 187, 187, 0.4)), hcDark: new Color(new RGBA(111, 195, 223)), hcLight: foreground }, localize("keybindingLabelBottomBorder", "Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut."));
const listFocusBackground = registerColor("list.focusBackground", null, localize("listFocusBackground", "List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listFocusForeground = registerColor("list.focusForeground", null, localize("listFocusForeground", "List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listFocusOutline = registerColor("list.focusOutline", { dark: focusBorder, light: focusBorder, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize("listFocusOutline", "List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listFocusAndSelectionOutline = registerColor("list.focusAndSelectionOutline", null, localize("listFocusAndSelectionOutline", "List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not."));
const listActiveSelectionBackground = registerColor("list.activeSelectionBackground", { dark: "#04395E", light: "#0060C0", hcDark: null, hcLight: Color.fromHex("#0F4A85").transparent(0.1) }, localize("listActiveSelectionBackground", "List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listActiveSelectionForeground = registerColor("list.activeSelectionForeground", { dark: Color.white, light: Color.white, hcDark: null, hcLight: null }, localize("listActiveSelectionForeground", "List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listActiveSelectionIconForeground = registerColor("list.activeSelectionIconForeground", null, localize("listActiveSelectionIconForeground", "List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listInactiveSelectionBackground = registerColor("list.inactiveSelectionBackground", { dark: "#37373D", light: "#E4E6F1", hcDark: null, hcLight: Color.fromHex("#0F4A85").transparent(0.1) }, localize("listInactiveSelectionBackground", "List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."));
const listInactiveSelectionForeground = registerColor("list.inactiveSelectionForeground", null, localize("listInactiveSelectionForeground", "List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."));
const listInactiveSelectionIconForeground = registerColor("list.inactiveSelectionIconForeground", null, localize("listInactiveSelectionIconForeground", "List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."));
const listInactiveFocusBackground = registerColor("list.inactiveFocusBackground", null, localize("listInactiveFocusBackground", "List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."));
const listInactiveFocusOutline = registerColor("list.inactiveFocusOutline", null, localize("listInactiveFocusOutline", "List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."));
const listHoverBackground = registerColor("list.hoverBackground", { dark: "#2A2D2E", light: "#F0F0F0", hcDark: Color.white.transparent(0.1), hcLight: Color.fromHex("#0F4A85").transparent(0.1) }, localize("listHoverBackground", "List/Tree background when hovering over items using the mouse."));
const listHoverForeground = registerColor("list.hoverForeground", null, localize("listHoverForeground", "List/Tree foreground when hovering over items using the mouse."));
const listDropOverBackground = registerColor("list.dropBackground", { dark: "#062F4A", light: "#D6EBFF", hcDark: null, hcLight: null }, localize("listDropBackground", "List/Tree drag and drop background when moving items over other items when using the mouse."));
const listDropBetweenBackground = registerColor("list.dropBetweenBackground", { dark: iconForeground, light: iconForeground, hcDark: null, hcLight: null }, localize("listDropBetweenBackground", "List/Tree drag and drop border color when moving items between items when using the mouse."));
const listHighlightForeground = registerColor("list.highlightForeground", { dark: "#2AAAFF", light: "#0066BF", hcDark: focusBorder, hcLight: focusBorder }, localize("highlight", "List/Tree foreground color of the match highlights when searching inside the list/tree."));
const listFocusHighlightForeground = registerColor("list.focusHighlightForeground", { dark: listHighlightForeground, light: ifDefinedThenElse(listActiveSelectionBackground, listHighlightForeground, "#BBE7FF"), hcDark: listHighlightForeground, hcLight: listHighlightForeground }, localize("listFocusHighlightForeground", "List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree."));
registerColor("list.invalidItemForeground", { dark: "#B89500", light: "#B89500", hcDark: "#B89500", hcLight: "#B5200D" }, localize("invalidItemForeground", "List/Tree foreground color for invalid items, for example an unresolved root in explorer."));
registerColor("list.errorForeground", { dark: "#F88070", light: "#B01011", hcDark: null, hcLight: null }, localize("listErrorForeground", "Foreground color of list items containing errors."));
registerColor("list.warningForeground", { dark: "#CCA700", light: "#855F00", hcDark: null, hcLight: null }, localize("listWarningForeground", "Foreground color of list items containing warnings."));
const listFilterWidgetBackground = registerColor("listFilterWidget.background", { light: darken(editorWidgetBackground, 0), dark: lighten(editorWidgetBackground, 0), hcDark: editorWidgetBackground, hcLight: editorWidgetBackground }, localize("listFilterWidgetBackground", "Background color of the type filter widget in lists and trees."));
const listFilterWidgetOutline = registerColor("listFilterWidget.outline", { dark: Color.transparent, light: Color.transparent, hcDark: "#f38518", hcLight: "#007ACC" }, localize("listFilterWidgetOutline", "Outline color of the type filter widget in lists and trees."));
const listFilterWidgetNoMatchesOutline = registerColor("listFilterWidget.noMatchesOutline", { dark: "#BE1100", light: "#BE1100", hcDark: contrastBorder, hcLight: contrastBorder }, localize("listFilterWidgetNoMatchesOutline", "Outline color of the type filter widget in lists and trees, when there are no matches."));
const listFilterWidgetShadow = registerColor("listFilterWidget.shadow", widgetShadow, localize("listFilterWidgetShadow", "Shadow color of the type filter widget in lists and trees."));
registerColor("list.filterMatchBackground", { dark: editorFindMatchHighlight, light: editorFindMatchHighlight, hcDark: null, hcLight: null }, localize("listFilterMatchHighlight", "Background color of the filtered match."));
registerColor("list.filterMatchBorder", { dark: editorFindMatchHighlightBorder, light: editorFindMatchHighlightBorder, hcDark: contrastBorder, hcLight: activeContrastBorder }, localize("listFilterMatchHighlightBorder", "Border color of the filtered match."));
registerColor("list.deemphasizedForeground", { dark: "#8C8C8C", light: "#8E8E90", hcDark: "#A7A8A9", hcLight: "#666666" }, localize("listDeemphasizedForeground", "List/Tree foreground color for items that are deemphasized."));
const treeIndentGuidesStroke = registerColor("tree.indentGuidesStroke", { dark: "#585858", light: "#a9a9a9", hcDark: "#a9a9a9", hcLight: "#a5a5a5" }, localize("treeIndentGuidesStroke", "Tree stroke color for the indentation guides."));
const treeInactiveIndentGuidesStroke = registerColor("tree.inactiveIndentGuidesStroke", transparent(treeIndentGuidesStroke, 0.4), localize("treeInactiveIndentGuidesStroke", "Tree stroke color for the indentation guides that are not active."));
const tableColumnsBorder = registerColor("tree.tableColumnsBorder", { dark: "#CCCCCC20", light: "#61616120", hcDark: null, hcLight: null }, localize("tableColumnsBorder", "Table border color between columns."));
const tableOddRowsBackgroundColor = registerColor("tree.tableOddRowsBackground", { dark: transparent(foreground, 0.04), light: transparent(foreground, 0.04), hcDark: null, hcLight: null }, localize("tableOddRowsBackgroundColor", "Background color for odd table rows."));
registerColor("editorActionList.background", editorWidgetBackground, localize("editorActionListBackground", "Action List background color."));
registerColor("editorActionList.foreground", editorWidgetForeground, localize("editorActionListForeground", "Action List foreground color."));
registerColor("editorActionList.focusForeground", listActiveSelectionForeground, localize("editorActionListFocusForeground", "Action List foreground color for the focused item."));
registerColor("editorActionList.focusBackground", listActiveSelectionBackground, localize("editorActionListFocusBackground", "Action List background color for the focused item."));
const menuBorder = registerColor("menu.border", { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize("menuBorder", "Border color of menus."));
const menuForeground = registerColor("menu.foreground", selectForeground, localize("menuForeground", "Foreground color of menu items."));
const menuBackground = registerColor("menu.background", selectBackground, localize("menuBackground", "Background color of menu items."));
const menuSelectionForeground = registerColor("menu.selectionForeground", listActiveSelectionForeground, localize("menuSelectionForeground", "Foreground color of the selected menu item in menus."));
const menuSelectionBackground = registerColor("menu.selectionBackground", listActiveSelectionBackground, localize("menuSelectionBackground", "Background color of the selected menu item in menus."));
const menuSelectionBorder = registerColor("menu.selectionBorder", { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize("menuSelectionBorder", "Border color of the selected menu item in menus."));
const menuSeparatorBackground = registerColor("menu.separatorBackground", { dark: "#606060", light: "#D4D4D4", hcDark: contrastBorder, hcLight: contrastBorder }, localize("menuSeparatorBackground", "Color of a separator menu item in menus."));
const quickInputBackground = registerColor("quickInput.background", editorWidgetBackground, localize("pickerBackground", "Quick picker background color. The quick picker widget is the container for pickers like the command palette."));
const quickInputForeground = registerColor("quickInput.foreground", editorWidgetForeground, localize("pickerForeground", "Quick picker foreground color. The quick picker widget is the container for pickers like the command palette."));
const quickInputTitleBackground = registerColor("quickInputTitle.background", { dark: new Color(new RGBA(255, 255, 255, 0.105)), light: new Color(new RGBA(0, 0, 0, 0.06)), hcDark: "#000000", hcLight: Color.white }, localize("pickerTitleBackground", "Quick picker title background color. The quick picker widget is the container for pickers like the command palette."));
const pickerGroupForeground = registerColor("pickerGroup.foreground", { dark: "#3794FF", light: "#0066BF", hcDark: Color.white, hcLight: "#0F4A85" }, localize("pickerGroupForeground", "Quick picker color for grouping labels."));
const pickerGroupBorder = registerColor("pickerGroup.border", { dark: "#3F3F46", light: "#CCCEDB", hcDark: Color.white, hcLight: "#0F4A85" }, localize("pickerGroupBorder", "Quick picker color for grouping borders."));
const _deprecatedQuickInputListFocusBackground = registerColor("quickInput.list.focusBackground", null, "", void 0, localize("quickInput.list.focusBackground deprecation", "Please use quickInputList.focusBackground instead"));
const quickInputListFocusForeground = registerColor("quickInputList.focusForeground", listActiveSelectionForeground, localize("quickInput.listFocusForeground", "Quick picker foreground color for the focused item."));
const quickInputListFocusIconForeground = registerColor("quickInputList.focusIconForeground", listActiveSelectionIconForeground, localize("quickInput.listFocusIconForeground", "Quick picker icon foreground color for the focused item."));
const quickInputListFocusBackground = registerColor("quickInputList.focusBackground", { dark: oneOf(_deprecatedQuickInputListFocusBackground, listActiveSelectionBackground), light: oneOf(_deprecatedQuickInputListFocusBackground, listActiveSelectionBackground), hcDark: null, hcLight: null }, localize("quickInput.listFocusBackground", "Quick picker background color for the focused item."));
registerColor("search.resultsInfoForeground", { light: foreground, dark: transparent(foreground, 0.65), hcDark: foreground, hcLight: foreground }, localize("search.resultsInfoForeground", "Color of the text in the search viewlet's completion message."));
registerColor("searchEditor.findMatchBackground", { light: transparent(editorFindMatchHighlight, 0.66), dark: transparent(editorFindMatchHighlight, 0.66), hcDark: editorFindMatchHighlight, hcLight: editorFindMatchHighlight }, localize("searchEditor.queryMatch", "Color of the Search Editor query matches."));
registerColor("searchEditor.findMatchBorder", { light: transparent(editorFindMatchHighlightBorder, 0.66), dark: transparent(editorFindMatchHighlightBorder, 0.66), hcDark: editorFindMatchHighlightBorder, hcLight: editorFindMatchHighlightBorder }, localize("searchEditor.editorFindMatchBorder", "Border color of the Search Editor query matches."));
class PageCoordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this._pageCoordinatesBrand = void 0;
  }
  toClientCoordinates(targetWindow) {
    return new ClientCoordinates(this.x - targetWindow.scrollX, this.y - targetWindow.scrollY);
  }
}
class ClientCoordinates {
  constructor(clientX, clientY) {
    this.clientX = clientX;
    this.clientY = clientY;
    this._clientCoordinatesBrand = void 0;
  }
  toPageCoordinates(targetWindow) {
    return new PageCoordinates(this.clientX + targetWindow.scrollX, this.clientY + targetWindow.scrollY);
  }
}
class EditorPagePosition {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this._editorPagePositionBrand = void 0;
  }
}
class CoordinatesRelativeToEditor {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this._positionRelativeToEditorBrand = void 0;
  }
}
function createEditorPagePosition(editorViewDomNode) {
  const editorPos = getDomNodePagePosition(editorViewDomNode);
  return new EditorPagePosition(editorPos.left, editorPos.top, editorPos.width, editorPos.height);
}
function createCoordinatesRelativeToEditor(editorViewDomNode, editorPagePosition, pos) {
  const scaleX = editorPagePosition.width / editorViewDomNode.offsetWidth;
  const scaleY = editorPagePosition.height / editorViewDomNode.offsetHeight;
  const relativeX = (pos.x - editorPagePosition.x) / scaleX;
  const relativeY = (pos.y - editorPagePosition.y) / scaleY;
  return new CoordinatesRelativeToEditor(relativeX, relativeY);
}
class EditorMouseEvent extends StandardMouseEvent {
  constructor(e, isFromPointerCapture, editorViewDomNode) {
    super(getWindow(editorViewDomNode), e);
    this._editorMouseEventBrand = void 0;
    this.isFromPointerCapture = isFromPointerCapture;
    this.pos = new PageCoordinates(this.posx, this.posy);
    this.editorPos = createEditorPagePosition(editorViewDomNode);
    this.relativePos = createCoordinatesRelativeToEditor(editorViewDomNode, this.editorPos, this.pos);
  }
}
class EditorMouseEventFactory {
  constructor(editorViewDomNode) {
    this._editorViewDomNode = editorViewDomNode;
  }
  _create(e) {
    return new EditorMouseEvent(e, false, this._editorViewDomNode);
  }
  onContextMenu(target, callback) {
    return addDisposableListener(target, "contextmenu", (e) => {
      callback(this._create(e));
    });
  }
  onMouseUp(target, callback) {
    return addDisposableListener(target, "mouseup", (e) => {
      callback(this._create(e));
    });
  }
  onMouseDown(target, callback) {
    return addDisposableListener(target, EventType.MOUSE_DOWN, (e) => {
      callback(this._create(e));
    });
  }
  onPointerDown(target, callback) {
    return addDisposableListener(target, EventType.POINTER_DOWN, (e) => {
      callback(this._create(e), e.pointerId);
    });
  }
  onMouseLeave(target, callback) {
    return addDisposableListener(target, EventType.MOUSE_LEAVE, (e) => {
      callback(this._create(e));
    });
  }
  onMouseMove(target, callback) {
    return addDisposableListener(target, "mousemove", (e) => callback(this._create(e)));
  }
}
class EditorPointerEventFactory {
  constructor(editorViewDomNode) {
    this._editorViewDomNode = editorViewDomNode;
  }
  _create(e) {
    return new EditorMouseEvent(e, false, this._editorViewDomNode);
  }
  onPointerUp(target, callback) {
    return addDisposableListener(target, "pointerup", (e) => {
      callback(this._create(e));
    });
  }
  onPointerDown(target, callback) {
    return addDisposableListener(target, EventType.POINTER_DOWN, (e) => {
      callback(this._create(e), e.pointerId);
    });
  }
  onPointerLeave(target, callback) {
    return addDisposableListener(target, EventType.POINTER_LEAVE, (e) => {
      callback(this._create(e));
    });
  }
  onPointerMove(target, callback) {
    return addDisposableListener(target, "pointermove", (e) => callback(this._create(e)));
  }
}
class GlobalEditorPointerMoveMonitor extends Disposable {
  constructor(editorViewDomNode) {
    super();
    this._editorViewDomNode = editorViewDomNode;
    this._globalPointerMoveMonitor = this._register(new GlobalPointerMoveMonitor());
    this._keydownListener = null;
  }
  startMonitoring(initialElement, pointerId, initialButtons, pointerMoveCallback, onStopCallback) {
    this._keydownListener = addStandardDisposableListener(initialElement.ownerDocument, "keydown", (e) => {
      const chord = e.toKeyCodeChord();
      if (chord.isModifierKey()) {
        return;
      }
      this._globalPointerMoveMonitor.stopMonitoring(true, e.browserEvent);
    }, true);
    this._globalPointerMoveMonitor.startMonitoring(initialElement, pointerId, initialButtons, (e) => {
      pointerMoveCallback(new EditorMouseEvent(e, true, this._editorViewDomNode));
    }, (e) => {
      this._keydownListener.dispose();
      onStopCallback(e);
    });
  }
  stopMonitoring() {
    this._globalPointerMoveMonitor.stopMonitoring(true);
  }
}
class DynamicCssRules {
  static {
    this._idPool = 0;
  }
  constructor(_editor) {
    this._editor = _editor;
    this._instanceId = ++DynamicCssRules._idPool;
    this._counter = 0;
    this._rules = /* @__PURE__ */ new Map();
    this._garbageCollectionScheduler = new RunOnceScheduler(() => this.garbageCollect(), 1e3);
  }
  createClassNameRef(options) {
    const rule = this.getOrCreateRule(options);
    rule.increaseRefCount();
    return {
      className: rule.className,
      dispose: () => {
        rule.decreaseRefCount();
        this._garbageCollectionScheduler.schedule();
      }
    };
  }
  getOrCreateRule(properties) {
    const key = this.computeUniqueKey(properties);
    let existingRule = this._rules.get(key);
    if (!existingRule) {
      const counter = this._counter++;
      existingRule = new RefCountedCssRule(key, `dyn-rule-${this._instanceId}-${counter}`, isInShadowDOM(this._editor.getContainerDomNode()) ? this._editor.getContainerDomNode() : void 0, properties);
      this._rules.set(key, existingRule);
    }
    return existingRule;
  }
  computeUniqueKey(properties) {
    return JSON.stringify(properties);
  }
  garbageCollect() {
    for (const rule of this._rules.values()) {
      if (!rule.hasReferences()) {
        this._rules.delete(rule.key);
        rule.dispose();
      }
    }
  }
}
class RefCountedCssRule {
  constructor(key, className, _containerElement, properties) {
    this.key = key;
    this.className = className;
    this.properties = properties;
    this._referenceCount = 0;
    this._styleElementDisposables = new DisposableStore();
    this._styleElement = createStyleSheet(_containerElement, void 0, this._styleElementDisposables);
    this._styleElement.textContent = this.getCssText(this.className, this.properties);
  }
  getCssText(className, properties) {
    let str = `.${className} {`;
    for (const prop in properties) {
      const value = properties[prop];
      let cssValue;
      if (typeof value === "object") {
        cssValue = asCssVariable(value.id);
      } else {
        cssValue = value;
      }
      const cssPropName = camelToDashes(prop);
      str += `
	${cssPropName}: ${cssValue};`;
    }
    str += `
}`;
    return str;
  }
  dispose() {
    this._styleElementDisposables.dispose();
    this._styleElement = void 0;
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
function camelToDashes(str) {
  return str.replace(/(^[A-Z])/, ([first2]) => first2.toLowerCase()).replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
}
class ViewEventHandler extends Disposable {
  constructor() {
    super();
    this._shouldRender = true;
  }
  shouldRender() {
    return this._shouldRender;
  }
  forceShouldRender() {
    this._shouldRender = true;
  }
  setShouldRender() {
    this._shouldRender = true;
  }
  onDidRender() {
    this._shouldRender = false;
  }
  // --- begin event handlers
  onCompositionStart(e) {
    return false;
  }
  onCompositionEnd(e) {
    return false;
  }
  onConfigurationChanged(e) {
    return false;
  }
  onCursorStateChanged(e) {
    return false;
  }
  onDecorationsChanged(e) {
    return false;
  }
  onFlushed(e) {
    return false;
  }
  onFocusChanged(e) {
    return false;
  }
  onLanguageConfigurationChanged(e) {
    return false;
  }
  onLineMappingChanged(e) {
    return false;
  }
  onLinesChanged(e) {
    return false;
  }
  onLinesDeleted(e) {
    return false;
  }
  onLinesInserted(e) {
    return false;
  }
  onRevealRangeRequest(e) {
    return false;
  }
  onScrollChanged(e) {
    return false;
  }
  onThemeChanged(e) {
    return false;
  }
  onTokensChanged(e) {
    return false;
  }
  onTokensColorsChanged(e) {
    return false;
  }
  onZonesChanged(e) {
    return false;
  }
  // --- end event handlers
  handleEvents(events) {
    let shouldRender = false;
    for (let i = 0, len = events.length; i < len; i++) {
      const e = events[i];
      switch (e.type) {
        case 0:
          if (this.onCompositionStart(e)) {
            shouldRender = true;
          }
          break;
        case 1:
          if (this.onCompositionEnd(e)) {
            shouldRender = true;
          }
          break;
        case 2:
          if (this.onConfigurationChanged(e)) {
            shouldRender = true;
          }
          break;
        case 3:
          if (this.onCursorStateChanged(e)) {
            shouldRender = true;
          }
          break;
        case 4:
          if (this.onDecorationsChanged(e)) {
            shouldRender = true;
          }
          break;
        case 5:
          if (this.onFlushed(e)) {
            shouldRender = true;
          }
          break;
        case 6:
          if (this.onFocusChanged(e)) {
            shouldRender = true;
          }
          break;
        case 7:
          if (this.onLanguageConfigurationChanged(e)) {
            shouldRender = true;
          }
          break;
        case 8:
          if (this.onLineMappingChanged(e)) {
            shouldRender = true;
          }
          break;
        case 9:
          if (this.onLinesChanged(e)) {
            shouldRender = true;
          }
          break;
        case 10:
          if (this.onLinesDeleted(e)) {
            shouldRender = true;
          }
          break;
        case 11:
          if (this.onLinesInserted(e)) {
            shouldRender = true;
          }
          break;
        case 12:
          if (this.onRevealRangeRequest(e)) {
            shouldRender = true;
          }
          break;
        case 13:
          if (this.onScrollChanged(e)) {
            shouldRender = true;
          }
          break;
        case 15:
          if (this.onTokensChanged(e)) {
            shouldRender = true;
          }
          break;
        case 14:
          if (this.onThemeChanged(e)) {
            shouldRender = true;
          }
          break;
        case 16:
          if (this.onTokensColorsChanged(e)) {
            shouldRender = true;
          }
          break;
        case 17:
          if (this.onZonesChanged(e)) {
            shouldRender = true;
          }
          break;
        default:
          console.info("View received unknown event: ");
          console.info(e);
      }
    }
    if (shouldRender) {
      this._shouldRender = true;
    }
  }
}
class ViewPart extends ViewEventHandler {
  constructor(context) {
    super();
    this._context = context;
    this._context.addEventHandler(this);
  }
  dispose() {
    this._context.removeEventHandler(this);
    super.dispose();
  }
}
class PartFingerprints {
  static write(target, partId) {
    target.setAttribute("data-mprt", String(partId));
  }
  static read(target) {
    const r = target.getAttribute("data-mprt");
    if (r === null) {
      return 0;
    }
    return parseInt(r, 10);
  }
  static collect(child, stopAt) {
    const result = [];
    let resultLen = 0;
    while (child && child !== child.ownerDocument.body) {
      if (child === stopAt) {
        break;
      }
      if (child.nodeType === child.ELEMENT_NODE) {
        result[resultLen++] = this.read(child);
      }
      child = child.parentElement;
    }
    const r = new Uint8Array(resultLen);
    for (let i = 0; i < resultLen; i++) {
      r[i] = result[resultLen - i - 1];
    }
    return r;
  }
}
class FastDomNode {
  constructor(domNode) {
    this.domNode = domNode;
    this._maxWidth = "";
    this._width = "";
    this._height = "";
    this._top = "";
    this._left = "";
    this._bottom = "";
    this._right = "";
    this._paddingLeft = "";
    this._fontFamily = "";
    this._fontWeight = "";
    this._fontSize = "";
    this._fontStyle = "";
    this._fontFeatureSettings = "";
    this._fontVariationSettings = "";
    this._textDecoration = "";
    this._lineHeight = "";
    this._letterSpacing = "";
    this._className = "";
    this._display = "";
    this._position = "";
    this._visibility = "";
    this._color = "";
    this._backgroundColor = "";
    this._layerHint = false;
    this._contain = "none";
    this._boxShadow = "";
  }
  setMaxWidth(_maxWidth) {
    const maxWidth = numberAsPixels(_maxWidth);
    if (this._maxWidth === maxWidth) {
      return;
    }
    this._maxWidth = maxWidth;
    this.domNode.style.maxWidth = this._maxWidth;
  }
  setWidth(_width) {
    const width = numberAsPixels(_width);
    if (this._width === width) {
      return;
    }
    this._width = width;
    this.domNode.style.width = this._width;
  }
  setHeight(_height) {
    const height = numberAsPixels(_height);
    if (this._height === height) {
      return;
    }
    this._height = height;
    this.domNode.style.height = this._height;
  }
  setTop(_top) {
    const top = numberAsPixels(_top);
    if (this._top === top) {
      return;
    }
    this._top = top;
    this.domNode.style.top = this._top;
  }
  setLeft(_left) {
    const left = numberAsPixels(_left);
    if (this._left === left) {
      return;
    }
    this._left = left;
    this.domNode.style.left = this._left;
  }
  setBottom(_bottom) {
    const bottom = numberAsPixels(_bottom);
    if (this._bottom === bottom) {
      return;
    }
    this._bottom = bottom;
    this.domNode.style.bottom = this._bottom;
  }
  setRight(_right) {
    const right = numberAsPixels(_right);
    if (this._right === right) {
      return;
    }
    this._right = right;
    this.domNode.style.right = this._right;
  }
  setPaddingLeft(_paddingLeft) {
    const paddingLeft = numberAsPixels(_paddingLeft);
    if (this._paddingLeft === paddingLeft) {
      return;
    }
    this._paddingLeft = paddingLeft;
    this.domNode.style.paddingLeft = this._paddingLeft;
  }
  setFontFamily(fontFamily) {
    if (this._fontFamily === fontFamily) {
      return;
    }
    this._fontFamily = fontFamily;
    this.domNode.style.fontFamily = this._fontFamily;
  }
  setFontWeight(fontWeight) {
    if (this._fontWeight === fontWeight) {
      return;
    }
    this._fontWeight = fontWeight;
    this.domNode.style.fontWeight = this._fontWeight;
  }
  setFontSize(_fontSize) {
    const fontSize = numberAsPixels(_fontSize);
    if (this._fontSize === fontSize) {
      return;
    }
    this._fontSize = fontSize;
    this.domNode.style.fontSize = this._fontSize;
  }
  setFontStyle(fontStyle) {
    if (this._fontStyle === fontStyle) {
      return;
    }
    this._fontStyle = fontStyle;
    this.domNode.style.fontStyle = this._fontStyle;
  }
  setFontFeatureSettings(fontFeatureSettings) {
    if (this._fontFeatureSettings === fontFeatureSettings) {
      return;
    }
    this._fontFeatureSettings = fontFeatureSettings;
    this.domNode.style.fontFeatureSettings = this._fontFeatureSettings;
  }
  setFontVariationSettings(fontVariationSettings) {
    if (this._fontVariationSettings === fontVariationSettings) {
      return;
    }
    this._fontVariationSettings = fontVariationSettings;
    this.domNode.style.fontVariationSettings = this._fontVariationSettings;
  }
  setTextDecoration(textDecoration) {
    if (this._textDecoration === textDecoration) {
      return;
    }
    this._textDecoration = textDecoration;
    this.domNode.style.textDecoration = this._textDecoration;
  }
  setLineHeight(_lineHeight) {
    const lineHeight = numberAsPixels(_lineHeight);
    if (this._lineHeight === lineHeight) {
      return;
    }
    this._lineHeight = lineHeight;
    this.domNode.style.lineHeight = this._lineHeight;
  }
  setLetterSpacing(_letterSpacing) {
    const letterSpacing = numberAsPixels(_letterSpacing);
    if (this._letterSpacing === letterSpacing) {
      return;
    }
    this._letterSpacing = letterSpacing;
    this.domNode.style.letterSpacing = this._letterSpacing;
  }
  setClassName(className) {
    if (this._className === className) {
      return;
    }
    this._className = className;
    this.domNode.className = this._className;
  }
  toggleClassName(className, shouldHaveIt) {
    this.domNode.classList.toggle(className, shouldHaveIt);
    this._className = this.domNode.className;
  }
  setDisplay(display) {
    if (this._display === display) {
      return;
    }
    this._display = display;
    this.domNode.style.display = this._display;
  }
  setPosition(position) {
    if (this._position === position) {
      return;
    }
    this._position = position;
    this.domNode.style.position = this._position;
  }
  setVisibility(visibility) {
    if (this._visibility === visibility) {
      return;
    }
    this._visibility = visibility;
    this.domNode.style.visibility = this._visibility;
  }
  setColor(color) {
    if (this._color === color) {
      return;
    }
    this._color = color;
    this.domNode.style.color = this._color;
  }
  setBackgroundColor(backgroundColor) {
    if (this._backgroundColor === backgroundColor) {
      return;
    }
    this._backgroundColor = backgroundColor;
    this.domNode.style.backgroundColor = this._backgroundColor;
  }
  setLayerHinting(layerHint) {
    if (this._layerHint === layerHint) {
      return;
    }
    this._layerHint = layerHint;
    this.domNode.style.transform = this._layerHint ? "translate3d(0px, 0px, 0px)" : "";
  }
  setBoxShadow(boxShadow) {
    if (this._boxShadow === boxShadow) {
      return;
    }
    this._boxShadow = boxShadow;
    this.domNode.style.boxShadow = boxShadow;
  }
  setContain(contain) {
    if (this._contain === contain) {
      return;
    }
    this._contain = contain;
    this.domNode.style.contain = this._contain;
  }
  setAttribute(name, value) {
    this.domNode.setAttribute(name, value);
  }
  removeAttribute(name) {
    this.domNode.removeAttribute(name);
  }
  appendChild(child) {
    this.domNode.appendChild(child.domNode);
  }
  removeChild(child) {
    this.domNode.removeChild(child.domNode);
  }
}
function numberAsPixels(value) {
  return typeof value === "number" ? `${value}px` : value;
}
function createFastDomNode(domNode) {
  return new FastDomNode(domNode);
}
class RestrictedRenderingContext {
  constructor(viewLayout, viewportData) {
    this._restrictedRenderingContextBrand = void 0;
    this._viewLayout = viewLayout;
    this.viewportData = viewportData;
    this.scrollWidth = this._viewLayout.getScrollWidth();
    this.scrollHeight = this._viewLayout.getScrollHeight();
    this.visibleRange = this.viewportData.visibleRange;
    this.bigNumbersDelta = this.viewportData.bigNumbersDelta;
    const vInfo = this._viewLayout.getCurrentViewport();
    this.scrollTop = vInfo.top;
    this.scrollLeft = vInfo.left;
    this.viewportWidth = vInfo.width;
    this.viewportHeight = vInfo.height;
  }
  getScrolledTopFromAbsoluteTop(absoluteTop) {
    return absoluteTop - this.scrollTop;
  }
  getVerticalOffsetForLineNumber(lineNumber, includeViewZones) {
    return this._viewLayout.getVerticalOffsetForLineNumber(lineNumber, includeViewZones);
  }
  getVerticalOffsetAfterLineNumber(lineNumber, includeViewZones) {
    return this._viewLayout.getVerticalOffsetAfterLineNumber(lineNumber, includeViewZones);
  }
  getDecorationsInViewport() {
    return this.viewportData.getDecorationsInViewport();
  }
}
class RenderingContext extends RestrictedRenderingContext {
  constructor(viewLayout, viewportData, viewLines) {
    super(viewLayout, viewportData);
    this._renderingContextBrand = void 0;
    this._viewLines = viewLines;
  }
  linesVisibleRangesForRange(range2, includeNewLines) {
    return this._viewLines.linesVisibleRangesForRange(range2, includeNewLines);
  }
  visibleRangeForPosition(position) {
    return this._viewLines.visibleRangeForPosition(position);
  }
}
class LineVisibleRanges {
  constructor(outsideRenderedLine, lineNumber, ranges, continuesOnNextLine) {
    this.outsideRenderedLine = outsideRenderedLine;
    this.lineNumber = lineNumber;
    this.ranges = ranges;
    this.continuesOnNextLine = continuesOnNextLine;
  }
}
class HorizontalRange {
  static from(ranges) {
    const result = new Array(ranges.length);
    for (let i = 0, len = ranges.length; i < len; i++) {
      const range2 = ranges[i];
      result[i] = new HorizontalRange(range2.left, range2.width);
    }
    return result;
  }
  constructor(left, width) {
    this._horizontalRangeBrand = void 0;
    this.left = Math.round(left);
    this.width = Math.round(width);
  }
  toString() {
    return `[${this.left},${this.width}]`;
  }
}
class FloatHorizontalRange {
  constructor(left, width) {
    this._floatHorizontalRangeBrand = void 0;
    this.left = left;
    this.width = width;
  }
  toString() {
    return `[${this.left},${this.width}]`;
  }
  static compare(a, b) {
    return a.left - b.left;
  }
}
class HorizontalPosition {
  constructor(outsideRenderedLine, left) {
    this.outsideRenderedLine = outsideRenderedLine;
    this.originalLeft = left;
    this.left = Math.round(this.originalLeft);
  }
}
class VisibleRanges {
  constructor(outsideRenderedLine, ranges) {
    this.outsideRenderedLine = outsideRenderedLine;
    this.ranges = ranges;
  }
}
class RangeUtil {
  static _createRange() {
    if (!this._handyReadyRange) {
      this._handyReadyRange = document.createRange();
    }
    return this._handyReadyRange;
  }
  static _detachRange(range2, endNode) {
    range2.selectNodeContents(endNode);
  }
  static _readClientRects(startElement, startOffset, endElement, endOffset, endNode) {
    const range2 = this._createRange();
    try {
      range2.setStart(startElement, startOffset);
      range2.setEnd(endElement, endOffset);
      return range2.getClientRects();
    } catch (e) {
      return null;
    } finally {
      this._detachRange(range2, endNode);
    }
  }
  static _mergeAdjacentRanges(ranges) {
    if (ranges.length === 1) {
      return ranges;
    }
    ranges.sort(FloatHorizontalRange.compare);
    const result = [];
    let resultLen = 0;
    let prev = ranges[0];
    for (let i = 1, len = ranges.length; i < len; i++) {
      const range2 = ranges[i];
      if (prev.left + prev.width + 0.9 >= range2.left) {
        prev.width = Math.max(prev.width, range2.left + range2.width - prev.left);
      } else {
        result[resultLen++] = prev;
        prev = range2;
      }
    }
    result[resultLen++] = prev;
    return result;
  }
  static _createHorizontalRangesFromClientRects(clientRects, clientRectDeltaLeft, clientRectScale) {
    if (!clientRects || clientRects.length === 0) {
      return null;
    }
    const result = [];
    for (let i = 0, len = clientRects.length; i < len; i++) {
      const clientRect = clientRects[i];
      result[i] = new FloatHorizontalRange(Math.max(0, (clientRect.left - clientRectDeltaLeft) / clientRectScale), clientRect.width / clientRectScale);
    }
    return this._mergeAdjacentRanges(result);
  }
  static readHorizontalRanges(domNode, startChildIndex, startOffset, endChildIndex, endOffset, context) {
    const min = 0;
    const max = domNode.children.length - 1;
    if (min > max) {
      return null;
    }
    startChildIndex = Math.min(max, Math.max(min, startChildIndex));
    endChildIndex = Math.min(max, Math.max(min, endChildIndex));
    if (startChildIndex === endChildIndex && startOffset === endOffset && startOffset === 0 && !domNode.children[startChildIndex].firstChild) {
      const clientRects2 = domNode.children[startChildIndex].getClientRects();
      context.markDidDomLayout();
      return this._createHorizontalRangesFromClientRects(clientRects2, context.clientRectDeltaLeft, context.clientRectScale);
    }
    if (startChildIndex !== endChildIndex) {
      if (endChildIndex > 0 && endOffset === 0) {
        endChildIndex--;
        endOffset = 1073741824;
      }
    }
    let startElement = domNode.children[startChildIndex].firstChild;
    let endElement = domNode.children[endChildIndex].firstChild;
    if (!startElement || !endElement) {
      if (!startElement && startOffset === 0 && startChildIndex > 0) {
        startElement = domNode.children[startChildIndex - 1].firstChild;
        startOffset = 1073741824;
      }
      if (!endElement && endOffset === 0 && endChildIndex > 0) {
        endElement = domNode.children[endChildIndex - 1].firstChild;
        endOffset = 1073741824;
      }
    }
    if (!startElement || !endElement) {
      return null;
    }
    startOffset = Math.min(startElement.textContent.length, Math.max(0, startOffset));
    endOffset = Math.min(endElement.textContent.length, Math.max(0, endOffset));
    const clientRects = this._readClientRects(startElement, startOffset, endElement, endOffset, context.endNode);
    context.markDidDomLayout();
    return this._createHorizontalRangesFromClientRects(clientRects, context.clientRectDeltaLeft, context.clientRectScale);
  }
}
class LineDecoration {
  constructor(startColumn, endColumn, className, type) {
    this.startColumn = startColumn;
    this.endColumn = endColumn;
    this.className = className;
    this.type = type;
    this._lineDecorationBrand = void 0;
  }
  static _equals(a, b) {
    return a.startColumn === b.startColumn && a.endColumn === b.endColumn && a.className === b.className && a.type === b.type;
  }
  static equalsArr(a, b) {
    const aLen = a.length;
    const bLen = b.length;
    if (aLen !== bLen) {
      return false;
    }
    for (let i = 0; i < aLen; i++) {
      if (!LineDecoration._equals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  static extractWrapped(arr, startOffset, endOffset) {
    if (arr.length === 0) {
      return arr;
    }
    const startColumn = startOffset + 1;
    const endColumn = endOffset + 1;
    const lineLength = endOffset - startOffset;
    const r = [];
    let rLength = 0;
    for (const dec of arr) {
      if (dec.endColumn <= startColumn || dec.startColumn >= endColumn) {
        continue;
      }
      r[rLength++] = new LineDecoration(Math.max(1, dec.startColumn - startColumn + 1), Math.min(lineLength + 1, dec.endColumn - startColumn + 1), dec.className, dec.type);
    }
    return r;
  }
  static filter(lineDecorations, lineNumber, minLineColumn, maxLineColumn) {
    if (lineDecorations.length === 0) {
      return [];
    }
    const result = [];
    let resultLen = 0;
    for (let i = 0, len = lineDecorations.length; i < len; i++) {
      const d = lineDecorations[i];
      const range2 = d.range;
      if (range2.endLineNumber < lineNumber || range2.startLineNumber > lineNumber) {
        continue;
      }
      if (range2.isEmpty() && (d.type === 0 || d.type === 3)) {
        continue;
      }
      const startColumn = range2.startLineNumber === lineNumber ? range2.startColumn : minLineColumn;
      const endColumn = range2.endLineNumber === lineNumber ? range2.endColumn : maxLineColumn;
      result[resultLen++] = new LineDecoration(startColumn, endColumn, d.inlineClassName, d.type);
    }
    return result;
  }
  static _typeCompare(a, b) {
    const ORDER = [2, 0, 1, 3];
    return ORDER[a] - ORDER[b];
  }
  static compare(a, b) {
    if (a.startColumn !== b.startColumn) {
      return a.startColumn - b.startColumn;
    }
    if (a.endColumn !== b.endColumn) {
      return a.endColumn - b.endColumn;
    }
    const typeCmp = LineDecoration._typeCompare(a.type, b.type);
    if (typeCmp !== 0) {
      return typeCmp;
    }
    if (a.className !== b.className) {
      return a.className < b.className ? -1 : 1;
    }
    return 0;
  }
}
class DecorationSegment {
  constructor(startOffset, endOffset, className, metadata) {
    this.startOffset = startOffset;
    this.endOffset = endOffset;
    this.className = className;
    this.metadata = metadata;
  }
}
class Stack {
  constructor() {
    this.stopOffsets = [];
    this.classNames = [];
    this.metadata = [];
    this.count = 0;
  }
  static _metadata(metadata) {
    let result = 0;
    for (let i = 0, len = metadata.length; i < len; i++) {
      result |= metadata[i];
    }
    return result;
  }
  consumeLowerThan(maxStopOffset, nextStartOffset, result) {
    while (this.count > 0 && this.stopOffsets[0] < maxStopOffset) {
      let i = 0;
      while (i + 1 < this.count && this.stopOffsets[i] === this.stopOffsets[i + 1]) {
        i++;
      }
      result.push(new DecorationSegment(nextStartOffset, this.stopOffsets[i], this.classNames.join(" "), Stack._metadata(this.metadata)));
      nextStartOffset = this.stopOffsets[i] + 1;
      this.stopOffsets.splice(0, i + 1);
      this.classNames.splice(0, i + 1);
      this.metadata.splice(0, i + 1);
      this.count -= i + 1;
    }
    if (this.count > 0 && nextStartOffset < maxStopOffset) {
      result.push(new DecorationSegment(nextStartOffset, maxStopOffset - 1, this.classNames.join(" "), Stack._metadata(this.metadata)));
      nextStartOffset = maxStopOffset;
    }
    return nextStartOffset;
  }
  insert(stopOffset, className, metadata) {
    if (this.count === 0 || this.stopOffsets[this.count - 1] <= stopOffset) {
      this.stopOffsets.push(stopOffset);
      this.classNames.push(className);
      this.metadata.push(metadata);
    } else {
      for (let i = 0; i < this.count; i++) {
        if (this.stopOffsets[i] >= stopOffset) {
          this.stopOffsets.splice(i, 0, stopOffset);
          this.classNames.splice(i, 0, className);
          this.metadata.splice(i, 0, metadata);
          break;
        }
      }
    }
    this.count++;
    return;
  }
}
class LineDecorationsNormalizer {
  /**
   * Normalize line decorations. Overlapping decorations will generate multiple segments
   */
  static normalize(lineContent, lineDecorations) {
    if (lineDecorations.length === 0) {
      return [];
    }
    const result = [];
    const stack = new Stack();
    let nextStartOffset = 0;
    for (let i = 0, len = lineDecorations.length; i < len; i++) {
      const d = lineDecorations[i];
      let startColumn = d.startColumn;
      let endColumn = d.endColumn;
      const className = d.className;
      const metadata = d.type === 1 ? 2 : d.type === 2 ? 4 : 0;
      if (startColumn > 1) {
        const charCodeBefore = lineContent.charCodeAt(startColumn - 2);
        if (isHighSurrogate(charCodeBefore)) {
          startColumn--;
        }
      }
      if (endColumn > 1) {
        const charCodeBefore = lineContent.charCodeAt(endColumn - 2);
        if (isHighSurrogate(charCodeBefore)) {
          endColumn--;
        }
      }
      const currentStartOffset = startColumn - 1;
      const currentEndOffset = endColumn - 2;
      nextStartOffset = stack.consumeLowerThan(currentStartOffset, nextStartOffset, result);
      if (stack.count === 0) {
        nextStartOffset = currentStartOffset;
      }
      stack.insert(currentEndOffset, className, metadata);
    }
    stack.consumeLowerThan(1073741824, nextStartOffset, result);
    return result;
  }
}
const hasBuffer = typeof Buffer !== "undefined";
let textDecoder;
class VSBuffer {
  /**
   * When running in a nodejs context, if `actual` is not a nodejs Buffer, the backing store for
   * the returned `VSBuffer` instance might use a nodejs Buffer allocated from node's Buffer pool,
   * which is not transferrable.
   */
  static wrap(actual) {
    if (hasBuffer && !Buffer.isBuffer(actual)) {
      actual = Buffer.from(actual.buffer, actual.byteOffset, actual.byteLength);
    }
    return new VSBuffer(actual);
  }
  constructor(buffer) {
    this.buffer = buffer;
    this.byteLength = this.buffer.byteLength;
  }
  toString() {
    if (hasBuffer) {
      return this.buffer.toString();
    } else {
      if (!textDecoder) {
        textDecoder = new TextDecoder();
      }
      return textDecoder.decode(this.buffer);
    }
  }
}
function readUInt16LE(source, offset) {
  return source[offset + 0] << 0 >>> 0 | source[offset + 1] << 8 >>> 0;
}
function writeUInt16LE(destination, value, offset) {
  destination[offset + 0] = value & 255;
  value = value >>> 8;
  destination[offset + 1] = value & 255;
}
function readUInt32BE(source, offset) {
  return source[offset] * 2 ** 24 + source[offset + 1] * 2 ** 16 + source[offset + 2] * 2 ** 8 + source[offset + 3];
}
function writeUInt32BE(destination, value, offset) {
  destination[offset + 3] = value;
  value = value >>> 8;
  destination[offset + 2] = value;
  value = value >>> 8;
  destination[offset + 1] = value;
  value = value >>> 8;
  destination[offset] = value;
}
function readUInt8(source, offset) {
  return source[offset];
}
function writeUInt8(destination, value, offset) {
  destination[offset] = value;
}
let _utf16LE_TextDecoder;
function getUTF16LE_TextDecoder() {
  if (!_utf16LE_TextDecoder) {
    _utf16LE_TextDecoder = new TextDecoder("UTF-16LE");
  }
  return _utf16LE_TextDecoder;
}
let _utf16BE_TextDecoder;
function getUTF16BE_TextDecoder() {
  if (!_utf16BE_TextDecoder) {
    _utf16BE_TextDecoder = new TextDecoder("UTF-16BE");
  }
  return _utf16BE_TextDecoder;
}
let _platformTextDecoder;
function getPlatformTextDecoder() {
  if (!_platformTextDecoder) {
    _platformTextDecoder = isLittleEndian() ? getUTF16LE_TextDecoder() : getUTF16BE_TextDecoder();
  }
  return _platformTextDecoder;
}
function decodeUTF16LE(source, offset, len) {
  const view = new Uint16Array(source.buffer, offset, len);
  if (len > 0 && (view[0] === 65279 || view[0] === 65534)) {
    return compatDecodeUTF16LE(source, offset, len);
  }
  return getUTF16LE_TextDecoder().decode(view);
}
function compatDecodeUTF16LE(source, offset, len) {
  const result = [];
  let resultLen = 0;
  for (let i = 0; i < len; i++) {
    const charCode = readUInt16LE(source, offset);
    offset += 2;
    result[resultLen++] = String.fromCharCode(charCode);
  }
  return result.join("");
}
class StringBuilder {
  constructor(capacity) {
    this._capacity = capacity | 0;
    this._buffer = new Uint16Array(this._capacity);
    this._completedStrings = null;
    this._bufferLength = 0;
  }
  reset() {
    this._completedStrings = null;
    this._bufferLength = 0;
  }
  build() {
    if (this._completedStrings !== null) {
      this._flushBuffer();
      return this._completedStrings.join("");
    }
    return this._buildBuffer();
  }
  _buildBuffer() {
    if (this._bufferLength === 0) {
      return "";
    }
    const view = new Uint16Array(this._buffer.buffer, 0, this._bufferLength);
    return getPlatformTextDecoder().decode(view);
  }
  _flushBuffer() {
    const bufferString = this._buildBuffer();
    this._bufferLength = 0;
    if (this._completedStrings === null) {
      this._completedStrings = [bufferString];
    } else {
      this._completedStrings[this._completedStrings.length] = bufferString;
    }
  }
  /**
   * Append a char code (<2^16)
   */
  appendCharCode(charCode) {
    const remainingSpace = this._capacity - this._bufferLength;
    if (remainingSpace <= 1) {
      if (remainingSpace === 0 || isHighSurrogate(charCode)) {
        this._flushBuffer();
      }
    }
    this._buffer[this._bufferLength++] = charCode;
  }
  /**
   * Append an ASCII char code (<2^8)
   */
  appendASCIICharCode(charCode) {
    if (this._bufferLength === this._capacity) {
      this._flushBuffer();
    }
    this._buffer[this._bufferLength++] = charCode;
  }
  appendString(str) {
    const strLen = str.length;
    if (this._bufferLength + strLen >= this._capacity) {
      this._flushBuffer();
      this._completedStrings[this._completedStrings.length] = str;
      return;
    }
    for (let i = 0; i < strLen; i++) {
      this._buffer[this._bufferLength++] = str.charCodeAt(i);
    }
  }
}
class LinePart {
  constructor(endIndex, type, metadata, containsRTL2) {
    this.endIndex = endIndex;
    this.type = type;
    this.metadata = metadata;
    this.containsRTL = containsRTL2;
    this._linePartBrand = void 0;
  }
  isWhitespace() {
    return this.metadata & 1 ? true : false;
  }
  isPseudoAfter() {
    return this.metadata & 4 ? true : false;
  }
}
class LineRange {
  constructor(startIndex, endIndex) {
    this.startOffset = startIndex;
    this.endOffset = endIndex;
  }
  equals(otherLineRange) {
    return this.startOffset === otherLineRange.startOffset && this.endOffset === otherLineRange.endOffset;
  }
}
class RenderLineInput {
  constructor(useMonospaceOptimizations, canUseHalfwidthRightwardsArrow, lineContent, continuesWithWrappedLine, isBasicASCII2, containsRTL2, fauxIndentLength, lineTokens, lineDecorations, tabSize, startVisibleColumn, spaceWidth, middotWidth, wsmiddotWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, fontLigatures, selectionsOnLine) {
    this.useMonospaceOptimizations = useMonospaceOptimizations;
    this.canUseHalfwidthRightwardsArrow = canUseHalfwidthRightwardsArrow;
    this.lineContent = lineContent;
    this.continuesWithWrappedLine = continuesWithWrappedLine;
    this.isBasicASCII = isBasicASCII2;
    this.containsRTL = containsRTL2;
    this.fauxIndentLength = fauxIndentLength;
    this.lineTokens = lineTokens;
    this.lineDecorations = lineDecorations.sort(LineDecoration.compare);
    this.tabSize = tabSize;
    this.startVisibleColumn = startVisibleColumn;
    this.spaceWidth = spaceWidth;
    this.stopRenderingLineAfter = stopRenderingLineAfter;
    this.renderWhitespace = renderWhitespace === "all" ? 4 : renderWhitespace === "boundary" ? 1 : renderWhitespace === "selection" ? 2 : renderWhitespace === "trailing" ? 3 : 0;
    this.renderControlCharacters = renderControlCharacters;
    this.fontLigatures = fontLigatures;
    this.selectionsOnLine = selectionsOnLine && selectionsOnLine.sort((a, b) => a.startOffset < b.startOffset ? -1 : 1);
    const wsmiddotDiff = Math.abs(wsmiddotWidth - spaceWidth);
    const middotDiff = Math.abs(middotWidth - spaceWidth);
    if (wsmiddotDiff < middotDiff) {
      this.renderSpaceWidth = wsmiddotWidth;
      this.renderSpaceCharCode = 11825;
    } else {
      this.renderSpaceWidth = middotWidth;
      this.renderSpaceCharCode = 183;
    }
  }
  sameSelection(otherSelections) {
    if (this.selectionsOnLine === null) {
      return otherSelections === null;
    }
    if (otherSelections === null) {
      return false;
    }
    if (otherSelections.length !== this.selectionsOnLine.length) {
      return false;
    }
    for (let i = 0; i < this.selectionsOnLine.length; i++) {
      if (!this.selectionsOnLine[i].equals(otherSelections[i])) {
        return false;
      }
    }
    return true;
  }
  equals(other) {
    return this.useMonospaceOptimizations === other.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === other.canUseHalfwidthRightwardsArrow && this.lineContent === other.lineContent && this.continuesWithWrappedLine === other.continuesWithWrappedLine && this.isBasicASCII === other.isBasicASCII && this.containsRTL === other.containsRTL && this.fauxIndentLength === other.fauxIndentLength && this.tabSize === other.tabSize && this.startVisibleColumn === other.startVisibleColumn && this.spaceWidth === other.spaceWidth && this.renderSpaceWidth === other.renderSpaceWidth && this.renderSpaceCharCode === other.renderSpaceCharCode && this.stopRenderingLineAfter === other.stopRenderingLineAfter && this.renderWhitespace === other.renderWhitespace && this.renderControlCharacters === other.renderControlCharacters && this.fontLigatures === other.fontLigatures && LineDecoration.equalsArr(this.lineDecorations, other.lineDecorations) && this.lineTokens.equals(other.lineTokens) && this.sameSelection(other.selectionsOnLine);
  }
}
class DomPosition {
  constructor(partIndex, charIndex) {
    this.partIndex = partIndex;
    this.charIndex = charIndex;
  }
}
class CharacterMapping {
  static getPartIndex(partData) {
    return (partData & 4294901760) >>> 16;
  }
  static getCharIndex(partData) {
    return (partData & 65535) >>> 0;
  }
  constructor(length, partCount) {
    this.length = length;
    this._data = new Uint32Array(this.length);
    this._horizontalOffset = new Uint32Array(this.length);
  }
  setColumnInfo(column, partIndex, charIndex, horizontalOffset) {
    const partData = (partIndex << 16 | charIndex << 0) >>> 0;
    this._data[column - 1] = partData;
    this._horizontalOffset[column - 1] = horizontalOffset;
  }
  getHorizontalOffset(column) {
    if (this._horizontalOffset.length === 0) {
      return 0;
    }
    return this._horizontalOffset[column - 1];
  }
  charOffsetToPartData(charOffset) {
    if (this.length === 0) {
      return 0;
    }
    if (charOffset < 0) {
      return this._data[0];
    }
    if (charOffset >= this.length) {
      return this._data[this.length - 1];
    }
    return this._data[charOffset];
  }
  getDomPosition(column) {
    const partData = this.charOffsetToPartData(column - 1);
    const partIndex = CharacterMapping.getPartIndex(partData);
    const charIndex = CharacterMapping.getCharIndex(partData);
    return new DomPosition(partIndex, charIndex);
  }
  getColumn(domPosition, partLength) {
    const charOffset = this.partDataToCharOffset(domPosition.partIndex, partLength, domPosition.charIndex);
    return charOffset + 1;
  }
  partDataToCharOffset(partIndex, partLength, charIndex) {
    if (this.length === 0) {
      return 0;
    }
    const searchEntry = (partIndex << 16 | charIndex << 0) >>> 0;
    let min = 0;
    let max = this.length - 1;
    while (min + 1 < max) {
      const mid = min + max >>> 1;
      const midEntry = this._data[mid];
      if (midEntry === searchEntry) {
        return mid;
      } else if (midEntry > searchEntry) {
        max = mid;
      } else {
        min = mid;
      }
    }
    if (min === max) {
      return min;
    }
    const minEntry = this._data[min];
    const maxEntry = this._data[max];
    if (minEntry === searchEntry) {
      return min;
    }
    if (maxEntry === searchEntry) {
      return max;
    }
    const minPartIndex = CharacterMapping.getPartIndex(minEntry);
    const minCharIndex = CharacterMapping.getCharIndex(minEntry);
    const maxPartIndex = CharacterMapping.getPartIndex(maxEntry);
    let maxCharIndex;
    if (minPartIndex !== maxPartIndex) {
      maxCharIndex = partLength;
    } else {
      maxCharIndex = CharacterMapping.getCharIndex(maxEntry);
    }
    const minEntryDistance = charIndex - minCharIndex;
    const maxEntryDistance = maxCharIndex - charIndex;
    if (minEntryDistance <= maxEntryDistance) {
      return min;
    }
    return max;
  }
}
class RenderLineOutput {
  constructor(characterMapping, containsRTL2, containsForeignElements) {
    this._renderLineOutputBrand = void 0;
    this.characterMapping = characterMapping;
    this.containsRTL = containsRTL2;
    this.containsForeignElements = containsForeignElements;
  }
}
function renderViewLine(input, sb) {
  if (input.lineContent.length === 0) {
    if (input.lineDecorations.length > 0) {
      sb.appendString(`<span>`);
      let beforeCount = 0;
      let afterCount = 0;
      let containsForeignElements = 0;
      for (const lineDecoration of input.lineDecorations) {
        if (lineDecoration.type === 1 || lineDecoration.type === 2) {
          sb.appendString(`<span class="`);
          sb.appendString(lineDecoration.className);
          sb.appendString(`"></span>`);
          if (lineDecoration.type === 1) {
            containsForeignElements |= 1;
            beforeCount++;
          }
          if (lineDecoration.type === 2) {
            containsForeignElements |= 2;
            afterCount++;
          }
        }
      }
      sb.appendString(`</span>`);
      const characterMapping = new CharacterMapping(1, beforeCount + afterCount);
      characterMapping.setColumnInfo(1, beforeCount, 0, 0);
      return new RenderLineOutput(characterMapping, false, containsForeignElements);
    }
    sb.appendString("<span><span></span></span>");
    return new RenderLineOutput(
      new CharacterMapping(0, 0),
      false,
      0
      /* ForeignElementType.None */
    );
  }
  return _renderLine(resolveRenderLineInput(input), sb);
}
class RenderLineOutput2 {
  constructor(characterMapping, html2, containsRTL2, containsForeignElements) {
    this.characterMapping = characterMapping;
    this.html = html2;
    this.containsRTL = containsRTL2;
    this.containsForeignElements = containsForeignElements;
  }
}
function renderViewLine2(input) {
  const sb = new StringBuilder(1e4);
  const out = renderViewLine(input, sb);
  return new RenderLineOutput2(out.characterMapping, sb.build(), out.containsRTL, out.containsForeignElements);
}
class ResolvedRenderLineInput {
  constructor(fontIsMonospace, canUseHalfwidthRightwardsArrow, lineContent, len, isOverflowing, overflowingCharCount, parts, containsForeignElements, fauxIndentLength, tabSize, startVisibleColumn, containsRTL2, spaceWidth, renderSpaceCharCode, renderWhitespace, renderControlCharacters) {
    this.fontIsMonospace = fontIsMonospace;
    this.canUseHalfwidthRightwardsArrow = canUseHalfwidthRightwardsArrow;
    this.lineContent = lineContent;
    this.len = len;
    this.isOverflowing = isOverflowing;
    this.overflowingCharCount = overflowingCharCount;
    this.parts = parts;
    this.containsForeignElements = containsForeignElements;
    this.fauxIndentLength = fauxIndentLength;
    this.tabSize = tabSize;
    this.startVisibleColumn = startVisibleColumn;
    this.containsRTL = containsRTL2;
    this.spaceWidth = spaceWidth;
    this.renderSpaceCharCode = renderSpaceCharCode;
    this.renderWhitespace = renderWhitespace;
    this.renderControlCharacters = renderControlCharacters;
  }
}
function resolveRenderLineInput(input) {
  const lineContent = input.lineContent;
  let isOverflowing;
  let overflowingCharCount;
  let len;
  if (input.stopRenderingLineAfter !== -1 && input.stopRenderingLineAfter < lineContent.length) {
    isOverflowing = true;
    overflowingCharCount = lineContent.length - input.stopRenderingLineAfter;
    len = input.stopRenderingLineAfter;
  } else {
    isOverflowing = false;
    overflowingCharCount = 0;
    len = lineContent.length;
  }
  let tokens = transformAndRemoveOverflowing(lineContent, input.containsRTL, input.lineTokens, input.fauxIndentLength, len);
  if (input.renderControlCharacters && !input.isBasicASCII) {
    tokens = extractControlCharacters(lineContent, tokens);
  }
  if (input.renderWhitespace === 4 || input.renderWhitespace === 1 || input.renderWhitespace === 2 && !!input.selectionsOnLine || input.renderWhitespace === 3 && !input.continuesWithWrappedLine) {
    tokens = _applyRenderWhitespace(input, lineContent, len, tokens);
  }
  let containsForeignElements = 0;
  if (input.lineDecorations.length > 0) {
    for (let i = 0, len2 = input.lineDecorations.length; i < len2; i++) {
      const lineDecoration = input.lineDecorations[i];
      if (lineDecoration.type === 3) {
        containsForeignElements |= 1;
      } else if (lineDecoration.type === 1) {
        containsForeignElements |= 1;
      } else if (lineDecoration.type === 2) {
        containsForeignElements |= 2;
      }
    }
    tokens = _applyInlineDecorations(lineContent, len, tokens, input.lineDecorations);
  }
  if (!input.containsRTL) {
    tokens = splitLargeTokens(lineContent, tokens, !input.isBasicASCII || input.fontLigatures);
  }
  return new ResolvedRenderLineInput(input.useMonospaceOptimizations, input.canUseHalfwidthRightwardsArrow, lineContent, len, isOverflowing, overflowingCharCount, tokens, containsForeignElements, input.fauxIndentLength, input.tabSize, input.startVisibleColumn, input.containsRTL, input.spaceWidth, input.renderSpaceCharCode, input.renderWhitespace, input.renderControlCharacters);
}
function transformAndRemoveOverflowing(lineContent, lineContainsRTL, tokens, fauxIndentLength, len) {
  const result = [];
  let resultLen = 0;
  if (fauxIndentLength > 0) {
    result[resultLen++] = new LinePart(fauxIndentLength, "", 0, false);
  }
  let startOffset = fauxIndentLength;
  for (let tokenIndex = 0, tokensLen = tokens.getCount(); tokenIndex < tokensLen; tokenIndex++) {
    const endIndex = tokens.getEndOffset(tokenIndex);
    if (endIndex <= fauxIndentLength) {
      continue;
    }
    const type = tokens.getClassName(tokenIndex);
    if (endIndex >= len) {
      const tokenContainsRTL2 = lineContainsRTL ? containsRTL(lineContent.substring(startOffset, len)) : false;
      result[resultLen++] = new LinePart(len, type, 0, tokenContainsRTL2);
      break;
    }
    const tokenContainsRTL = lineContainsRTL ? containsRTL(lineContent.substring(startOffset, endIndex)) : false;
    result[resultLen++] = new LinePart(endIndex, type, 0, tokenContainsRTL);
    startOffset = endIndex;
  }
  return result;
}
function splitLargeTokens(lineContent, tokens, onlyAtSpaces) {
  let lastTokenEndIndex = 0;
  const result = [];
  let resultLen = 0;
  if (onlyAtSpaces) {
    for (let i = 0, len = tokens.length; i < len; i++) {
      const token = tokens[i];
      const tokenEndIndex = token.endIndex;
      if (lastTokenEndIndex + 50 < tokenEndIndex) {
        const tokenType = token.type;
        const tokenMetadata = token.metadata;
        const tokenContainsRTL = token.containsRTL;
        let lastSpaceOffset = -1;
        let currTokenStart = lastTokenEndIndex;
        for (let j = lastTokenEndIndex; j < tokenEndIndex; j++) {
          if (lineContent.charCodeAt(j) === 32) {
            lastSpaceOffset = j;
          }
          if (lastSpaceOffset !== -1 && j - currTokenStart >= 50) {
            result[resultLen++] = new LinePart(lastSpaceOffset + 1, tokenType, tokenMetadata, tokenContainsRTL);
            currTokenStart = lastSpaceOffset + 1;
            lastSpaceOffset = -1;
          }
        }
        if (currTokenStart !== tokenEndIndex) {
          result[resultLen++] = new LinePart(tokenEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
        }
      } else {
        result[resultLen++] = token;
      }
      lastTokenEndIndex = tokenEndIndex;
    }
  } else {
    for (let i = 0, len = tokens.length; i < len; i++) {
      const token = tokens[i];
      const tokenEndIndex = token.endIndex;
      const diff = tokenEndIndex - lastTokenEndIndex;
      if (diff > 50) {
        const tokenType = token.type;
        const tokenMetadata = token.metadata;
        const tokenContainsRTL = token.containsRTL;
        const piecesCount = Math.ceil(
          diff / 50
          /* Constants.LongToken */
        );
        for (let j = 1; j < piecesCount; j++) {
          const pieceEndIndex = lastTokenEndIndex + j * 50;
          result[resultLen++] = new LinePart(pieceEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
        }
        result[resultLen++] = new LinePart(tokenEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
      } else {
        result[resultLen++] = token;
      }
      lastTokenEndIndex = tokenEndIndex;
    }
  }
  return result;
}
function isControlCharacter(charCode) {
  if (charCode < 32) {
    return charCode !== 9;
  }
  if (charCode === 127) {
    return true;
  }
  if (charCode >= 8234 && charCode <= 8238 || charCode >= 8294 && charCode <= 8297 || charCode >= 8206 && charCode <= 8207 || charCode === 1564) {
    return true;
  }
  return false;
}
function extractControlCharacters(lineContent, tokens) {
  const result = [];
  let lastLinePart = new LinePart(0, "", 0, false);
  let charOffset = 0;
  for (const token of tokens) {
    const tokenEndIndex = token.endIndex;
    for (; charOffset < tokenEndIndex; charOffset++) {
      const charCode = lineContent.charCodeAt(charOffset);
      if (isControlCharacter(charCode)) {
        if (charOffset > lastLinePart.endIndex) {
          lastLinePart = new LinePart(charOffset, token.type, token.metadata, token.containsRTL);
          result.push(lastLinePart);
        }
        lastLinePart = new LinePart(charOffset + 1, "mtkcontrol", token.metadata, false);
        result.push(lastLinePart);
      }
    }
    if (charOffset > lastLinePart.endIndex) {
      lastLinePart = new LinePart(tokenEndIndex, token.type, token.metadata, token.containsRTL);
      result.push(lastLinePart);
    }
  }
  return result;
}
function _applyRenderWhitespace(input, lineContent, len, tokens) {
  const continuesWithWrappedLine = input.continuesWithWrappedLine;
  const fauxIndentLength = input.fauxIndentLength;
  const tabSize = input.tabSize;
  const startVisibleColumn = input.startVisibleColumn;
  const useMonospaceOptimizations = input.useMonospaceOptimizations;
  const selections = input.selectionsOnLine;
  const onlyBoundary = input.renderWhitespace === 1;
  const onlyTrailing = input.renderWhitespace === 3;
  const generateLinePartForEachWhitespace = input.renderSpaceWidth !== input.spaceWidth;
  const result = [];
  let resultLen = 0;
  let tokenIndex = 0;
  let tokenType = tokens[tokenIndex].type;
  let tokenContainsRTL = tokens[tokenIndex].containsRTL;
  let tokenEndIndex = tokens[tokenIndex].endIndex;
  const tokensLength = tokens.length;
  let lineIsEmptyOrWhitespace = false;
  let firstNonWhitespaceIndex$1 = firstNonWhitespaceIndex(lineContent);
  let lastNonWhitespaceIndex$1;
  if (firstNonWhitespaceIndex$1 === -1) {
    lineIsEmptyOrWhitespace = true;
    firstNonWhitespaceIndex$1 = len;
    lastNonWhitespaceIndex$1 = len;
  } else {
    lastNonWhitespaceIndex$1 = lastNonWhitespaceIndex(lineContent);
  }
  let wasInWhitespace = false;
  let currentSelectionIndex = 0;
  let currentSelection = selections && selections[currentSelectionIndex];
  let tmpIndent = startVisibleColumn % tabSize;
  for (let charIndex = fauxIndentLength; charIndex < len; charIndex++) {
    const chCode = lineContent.charCodeAt(charIndex);
    if (currentSelection && charIndex >= currentSelection.endOffset) {
      currentSelectionIndex++;
      currentSelection = selections && selections[currentSelectionIndex];
    }
    let isInWhitespace;
    if (charIndex < firstNonWhitespaceIndex$1 || charIndex > lastNonWhitespaceIndex$1) {
      isInWhitespace = true;
    } else if (chCode === 9) {
      isInWhitespace = true;
    } else if (chCode === 32) {
      if (onlyBoundary) {
        if (wasInWhitespace) {
          isInWhitespace = true;
        } else {
          const nextChCode = charIndex + 1 < len ? lineContent.charCodeAt(charIndex + 1) : 0;
          isInWhitespace = nextChCode === 32 || nextChCode === 9;
        }
      } else {
        isInWhitespace = true;
      }
    } else {
      isInWhitespace = false;
    }
    if (isInWhitespace && selections) {
      isInWhitespace = !!currentSelection && currentSelection.startOffset <= charIndex && currentSelection.endOffset > charIndex;
    }
    if (isInWhitespace && onlyTrailing) {
      isInWhitespace = lineIsEmptyOrWhitespace || charIndex > lastNonWhitespaceIndex$1;
    }
    if (isInWhitespace && tokenContainsRTL) {
      if (charIndex >= firstNonWhitespaceIndex$1 && charIndex <= lastNonWhitespaceIndex$1) {
        isInWhitespace = false;
      }
    }
    if (wasInWhitespace) {
      if (!isInWhitespace || !useMonospaceOptimizations && tmpIndent >= tabSize) {
        if (generateLinePartForEachWhitespace) {
          const lastEndIndex = resultLen > 0 ? result[resultLen - 1].endIndex : fauxIndentLength;
          for (let i = lastEndIndex + 1; i <= charIndex; i++) {
            result[resultLen++] = new LinePart(i, "mtkw", 1, false);
          }
        } else {
          result[resultLen++] = new LinePart(charIndex, "mtkw", 1, false);
        }
        tmpIndent = tmpIndent % tabSize;
      }
    } else {
      if (charIndex === tokenEndIndex || isInWhitespace && charIndex > fauxIndentLength) {
        result[resultLen++] = new LinePart(charIndex, tokenType, 0, tokenContainsRTL);
        tmpIndent = tmpIndent % tabSize;
      }
    }
    if (chCode === 9) {
      tmpIndent = tabSize;
    } else if (isFullWidthCharacter(chCode)) {
      tmpIndent += 2;
    } else {
      tmpIndent++;
    }
    wasInWhitespace = isInWhitespace;
    while (charIndex === tokenEndIndex) {
      tokenIndex++;
      if (tokenIndex < tokensLength) {
        tokenType = tokens[tokenIndex].type;
        tokenContainsRTL = tokens[tokenIndex].containsRTL;
        tokenEndIndex = tokens[tokenIndex].endIndex;
      } else {
        break;
      }
    }
  }
  let generateWhitespace = false;
  if (wasInWhitespace) {
    if (continuesWithWrappedLine && onlyBoundary) {
      const lastCharCode = len > 0 ? lineContent.charCodeAt(len - 1) : 0;
      const prevCharCode = len > 1 ? lineContent.charCodeAt(len - 2) : 0;
      const isSingleTrailingSpace = lastCharCode === 32 && (prevCharCode !== 32 && prevCharCode !== 9);
      if (!isSingleTrailingSpace) {
        generateWhitespace = true;
      }
    } else {
      generateWhitespace = true;
    }
  }
  if (generateWhitespace) {
    if (generateLinePartForEachWhitespace) {
      const lastEndIndex = resultLen > 0 ? result[resultLen - 1].endIndex : fauxIndentLength;
      for (let i = lastEndIndex + 1; i <= len; i++) {
        result[resultLen++] = new LinePart(i, "mtkw", 1, false);
      }
    } else {
      result[resultLen++] = new LinePart(len, "mtkw", 1, false);
    }
  } else {
    result[resultLen++] = new LinePart(len, tokenType, 0, tokenContainsRTL);
  }
  return result;
}
function _applyInlineDecorations(lineContent, len, tokens, _lineDecorations) {
  _lineDecorations.sort(LineDecoration.compare);
  const lineDecorations = LineDecorationsNormalizer.normalize(lineContent, _lineDecorations);
  const lineDecorationsLen = lineDecorations.length;
  let lineDecorationIndex = 0;
  const result = [];
  let resultLen = 0;
  let lastResultEndIndex = 0;
  for (let tokenIndex = 0, len2 = tokens.length; tokenIndex < len2; tokenIndex++) {
    const token = tokens[tokenIndex];
    const tokenEndIndex = token.endIndex;
    const tokenType = token.type;
    const tokenMetadata = token.metadata;
    const tokenContainsRTL = token.containsRTL;
    while (lineDecorationIndex < lineDecorationsLen && lineDecorations[lineDecorationIndex].startOffset < tokenEndIndex) {
      const lineDecoration = lineDecorations[lineDecorationIndex];
      if (lineDecoration.startOffset > lastResultEndIndex) {
        lastResultEndIndex = lineDecoration.startOffset;
        result[resultLen++] = new LinePart(lastResultEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
      }
      if (lineDecoration.endOffset + 1 <= tokenEndIndex) {
        lastResultEndIndex = lineDecoration.endOffset + 1;
        result[resultLen++] = new LinePart(lastResultEndIndex, tokenType + " " + lineDecoration.className, tokenMetadata | lineDecoration.metadata, tokenContainsRTL);
        lineDecorationIndex++;
      } else {
        lastResultEndIndex = tokenEndIndex;
        result[resultLen++] = new LinePart(lastResultEndIndex, tokenType + " " + lineDecoration.className, tokenMetadata | lineDecoration.metadata, tokenContainsRTL);
        break;
      }
    }
    if (tokenEndIndex > lastResultEndIndex) {
      lastResultEndIndex = tokenEndIndex;
      result[resultLen++] = new LinePart(lastResultEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
    }
  }
  const lastTokenEndIndex = tokens[tokens.length - 1].endIndex;
  if (lineDecorationIndex < lineDecorationsLen && lineDecorations[lineDecorationIndex].startOffset === lastTokenEndIndex) {
    while (lineDecorationIndex < lineDecorationsLen && lineDecorations[lineDecorationIndex].startOffset === lastTokenEndIndex) {
      const lineDecoration = lineDecorations[lineDecorationIndex];
      result[resultLen++] = new LinePart(lastResultEndIndex, lineDecoration.className, lineDecoration.metadata, false);
      lineDecorationIndex++;
    }
  }
  return result;
}
function _renderLine(input, sb) {
  const fontIsMonospace = input.fontIsMonospace;
  const canUseHalfwidthRightwardsArrow = input.canUseHalfwidthRightwardsArrow;
  const containsForeignElements = input.containsForeignElements;
  const lineContent = input.lineContent;
  const len = input.len;
  const isOverflowing = input.isOverflowing;
  const overflowingCharCount = input.overflowingCharCount;
  const parts = input.parts;
  const fauxIndentLength = input.fauxIndentLength;
  const tabSize = input.tabSize;
  const startVisibleColumn = input.startVisibleColumn;
  const containsRTL2 = input.containsRTL;
  const spaceWidth = input.spaceWidth;
  const renderSpaceCharCode = input.renderSpaceCharCode;
  const renderWhitespace = input.renderWhitespace;
  const renderControlCharacters = input.renderControlCharacters;
  const characterMapping = new CharacterMapping(len + 1, parts.length);
  let lastCharacterMappingDefined = false;
  let charIndex = 0;
  let visibleColumn = startVisibleColumn;
  let charOffsetInPart = 0;
  let charHorizontalOffset = 0;
  let partDisplacement = 0;
  if (containsRTL2) {
    sb.appendString('<span dir="ltr">');
  } else {
    sb.appendString("<span>");
  }
  for (let partIndex = 0, tokensLen = parts.length; partIndex < tokensLen; partIndex++) {
    const part = parts[partIndex];
    const partEndIndex = part.endIndex;
    const partType = part.type;
    const partContainsRTL = part.containsRTL;
    const partRendersWhitespace = renderWhitespace !== 0 && part.isWhitespace();
    const partRendersWhitespaceWithWidth = partRendersWhitespace && !fontIsMonospace && (partType === "mtkw" || !containsForeignElements);
    const partIsEmptyAndHasPseudoAfter = charIndex === partEndIndex && part.isPseudoAfter();
    charOffsetInPart = 0;
    sb.appendString("<span ");
    if (partContainsRTL) {
      sb.appendString('style="unicode-bidi:isolate" ');
    }
    sb.appendString('class="');
    sb.appendString(partRendersWhitespaceWithWidth ? "mtkz" : partType);
    sb.appendASCIICharCode(
      34
      /* CharCode.DoubleQuote */
    );
    if (partRendersWhitespace) {
      let partWidth = 0;
      {
        let _charIndex = charIndex;
        let _visibleColumn = visibleColumn;
        for (; _charIndex < partEndIndex; _charIndex++) {
          const charCode = lineContent.charCodeAt(_charIndex);
          const charWidth = (charCode === 9 ? tabSize - _visibleColumn % tabSize : 1) | 0;
          partWidth += charWidth;
          if (_charIndex >= fauxIndentLength) {
            _visibleColumn += charWidth;
          }
        }
      }
      if (partRendersWhitespaceWithWidth) {
        sb.appendString(' style="width:');
        sb.appendString(String(spaceWidth * partWidth));
        sb.appendString('px"');
      }
      sb.appendASCIICharCode(
        62
        /* CharCode.GreaterThan */
      );
      for (; charIndex < partEndIndex; charIndex++) {
        characterMapping.setColumnInfo(charIndex + 1, partIndex - partDisplacement, charOffsetInPart, charHorizontalOffset);
        partDisplacement = 0;
        const charCode = lineContent.charCodeAt(charIndex);
        let producedCharacters;
        let charWidth;
        if (charCode === 9) {
          producedCharacters = tabSize - visibleColumn % tabSize | 0;
          charWidth = producedCharacters;
          if (!canUseHalfwidthRightwardsArrow || charWidth > 1) {
            sb.appendCharCode(8594);
          } else {
            sb.appendCharCode(65515);
          }
          for (let space = 2; space <= charWidth; space++) {
            sb.appendCharCode(160);
          }
        } else {
          producedCharacters = 2;
          charWidth = 1;
          sb.appendCharCode(renderSpaceCharCode);
          sb.appendCharCode(8204);
        }
        charOffsetInPart += producedCharacters;
        charHorizontalOffset += charWidth;
        if (charIndex >= fauxIndentLength) {
          visibleColumn += charWidth;
        }
      }
    } else {
      sb.appendASCIICharCode(
        62
        /* CharCode.GreaterThan */
      );
      for (; charIndex < partEndIndex; charIndex++) {
        characterMapping.setColumnInfo(charIndex + 1, partIndex - partDisplacement, charOffsetInPart, charHorizontalOffset);
        partDisplacement = 0;
        const charCode = lineContent.charCodeAt(charIndex);
        let producedCharacters = 1;
        let charWidth = 1;
        switch (charCode) {
          case 9:
            producedCharacters = tabSize - visibleColumn % tabSize;
            charWidth = producedCharacters;
            for (let space = 1; space <= producedCharacters; space++) {
              sb.appendCharCode(160);
            }
            break;
          case 32:
            sb.appendCharCode(160);
            break;
          case 60:
            sb.appendString("&lt;");
            break;
          case 62:
            sb.appendString("&gt;");
            break;
          case 38:
            sb.appendString("&amp;");
            break;
          case 0:
            if (renderControlCharacters) {
              sb.appendCharCode(9216);
            } else {
              sb.appendString("&#00;");
            }
            break;
          case 65279:
          case 8232:
          case 8233:
          case 133:
            sb.appendCharCode(65533);
            break;
          default:
            if (isFullWidthCharacter(charCode)) {
              charWidth++;
            }
            if (renderControlCharacters && charCode < 32) {
              sb.appendCharCode(9216 + charCode);
            } else if (renderControlCharacters && charCode === 127) {
              sb.appendCharCode(9249);
            } else if (renderControlCharacters && isControlCharacter(charCode)) {
              sb.appendString("[U+");
              sb.appendString(to4CharHex(charCode));
              sb.appendString("]");
              producedCharacters = 8;
              charWidth = producedCharacters;
            } else {
              sb.appendCharCode(charCode);
            }
        }
        charOffsetInPart += producedCharacters;
        charHorizontalOffset += charWidth;
        if (charIndex >= fauxIndentLength) {
          visibleColumn += charWidth;
        }
      }
    }
    if (partIsEmptyAndHasPseudoAfter) {
      partDisplacement++;
    } else {
      partDisplacement = 0;
    }
    if (charIndex >= len && !lastCharacterMappingDefined && part.isPseudoAfter()) {
      lastCharacterMappingDefined = true;
      characterMapping.setColumnInfo(charIndex + 1, partIndex, charOffsetInPart, charHorizontalOffset);
    }
    sb.appendString("</span>");
  }
  if (!lastCharacterMappingDefined) {
    characterMapping.setColumnInfo(len + 1, parts.length - 1, charOffsetInPart, charHorizontalOffset);
  }
  if (isOverflowing) {
    sb.appendString('<span class="mtkoverflow">');
    sb.appendString(localize("showMore", "Show more ({0})", renderOverflowingCharCount(overflowingCharCount)));
    sb.appendString("</span>");
  }
  sb.appendString("</span>");
  return new RenderLineOutput(characterMapping, containsRTL2, containsForeignElements);
}
function to4CharHex(n) {
  return n.toString(16).toUpperCase().padStart(4, "0");
}
function renderOverflowingCharCount(n) {
  if (n < 1024) {
    return localize("overflow.chars", "{0} chars", n);
  }
  if (n < 1024 * 1024) {
    return `${(n / 1024).toFixed(1)} KB`;
  }
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}
var ColorScheme;
(function(ColorScheme2) {
  ColorScheme2["DARK"] = "dark";
  ColorScheme2["LIGHT"] = "light";
  ColorScheme2["HIGH_CONTRAST_DARK"] = "hcDark";
  ColorScheme2["HIGH_CONTRAST_LIGHT"] = "hcLight";
})(ColorScheme || (ColorScheme = {}));
function isHighContrast(scheme) {
  return scheme === ColorScheme.HIGH_CONTRAST_DARK || scheme === ColorScheme.HIGH_CONTRAST_LIGHT;
}
function isDark(scheme) {
  return scheme === ColorScheme.DARK || scheme === ColorScheme.HIGH_CONTRAST_DARK;
}
function tail(array, n = 0) {
  return array[array.length - (1 + n)];
}
function tail2(arr) {
  if (arr.length === 0) {
    throw new Error("Invalid tail call");
  }
  return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}
function equals$1(one, other, itemEquals = (a, b) => a === b) {
  if (one === other) {
    return true;
  }
  if (!one || !other) {
    return false;
  }
  if (one.length !== other.length) {
    return false;
  }
  for (let i = 0, len = one.length; i < len; i++) {
    if (!itemEquals(one[i], other[i])) {
      return false;
    }
  }
  return true;
}
function removeFastWithoutKeepingOrder(array, index) {
  const last = array.length - 1;
  if (index < last) {
    array[index] = array[last];
  }
  array.pop();
}
function binarySearch(array, key, comparator) {
  return binarySearch2(array.length, (i) => comparator(array[i], key));
}
function binarySearch2(length, compareToKey) {
  let low = 0, high = length - 1;
  while (low <= high) {
    const mid = (low + high) / 2 | 0;
    const comp = compareToKey(mid);
    if (comp < 0) {
      low = mid + 1;
    } else if (comp > 0) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -(low + 1);
}
function quickSelect(nth, data, compare2) {
  nth = nth | 0;
  if (nth >= data.length) {
    throw new TypeError("invalid index");
  }
  const pivotValue = data[Math.floor(data.length * Math.random())];
  const lower = [];
  const higher = [];
  const pivots = [];
  for (const value of data) {
    const val = compare2(value, pivotValue);
    if (val < 0) {
      lower.push(value);
    } else if (val > 0) {
      higher.push(value);
    } else {
      pivots.push(value);
    }
  }
  if (nth < lower.length) {
    return quickSelect(nth, lower, compare2);
  } else if (nth < lower.length + pivots.length) {
    return pivots[0];
  } else {
    return quickSelect(nth - (lower.length + pivots.length), higher, compare2);
  }
}
function groupBy(data, compare2) {
  const result = [];
  let currentGroup = void 0;
  for (const element of data.slice(0).sort(compare2)) {
    if (!currentGroup || compare2(currentGroup[0], element) !== 0) {
      currentGroup = [element];
      result.push(currentGroup);
    } else {
      currentGroup.push(element);
    }
  }
  return result;
}
function* groupAdjacentBy(items, shouldBeGrouped) {
  let currentGroup;
  let last;
  for (const item of items) {
    if (last !== void 0 && shouldBeGrouped(last, item)) {
      currentGroup.push(item);
    } else {
      if (currentGroup) {
        yield currentGroup;
      }
      currentGroup = [item];
    }
    last = item;
  }
  if (currentGroup) {
    yield currentGroup;
  }
}
function forEachAdjacent(arr, f) {
  for (let i = 0; i <= arr.length; i++) {
    f(i === 0 ? void 0 : arr[i - 1], i === arr.length ? void 0 : arr[i]);
  }
}
function forEachWithNeighbors(arr, f) {
  for (let i = 0; i < arr.length; i++) {
    f(i === 0 ? void 0 : arr[i - 1], arr[i], i + 1 === arr.length ? void 0 : arr[i + 1]);
  }
}
function coalesce(array) {
  return array.filter((e) => !!e);
}
function coalesceInPlace(array) {
  let to = 0;
  for (let i = 0; i < array.length; i++) {
    if (!!array[i]) {
      array[to] = array[i];
      to += 1;
    }
  }
  array.length = to;
}
function isFalsyOrEmpty(obj) {
  return !Array.isArray(obj) || obj.length === 0;
}
function isNonEmptyArray(obj) {
  return Array.isArray(obj) && obj.length > 0;
}
function distinct(array, keyFn = (value) => value) {
  const seen = /* @__PURE__ */ new Set();
  return array.filter((element) => {
    const key = keyFn(element);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}
function firstOrDefault(array, notFoundValue) {
  return array.length > 0 ? array[0] : notFoundValue;
}
function range(arg, to) {
  let from = typeof to === "number" ? arg : 0;
  if (typeof to === "number") {
    from = arg;
  } else {
    from = 0;
    to = arg;
  }
  const result = [];
  if (from <= to) {
    for (let i = from; i < to; i++) {
      result.push(i);
    }
  } else {
    for (let i = from; i > to; i--) {
      result.push(i);
    }
  }
  return result;
}
function arrayInsert(target, insertIndex, insertArr) {
  const before = target.slice(0, insertIndex);
  const after2 = target.slice(insertIndex);
  return before.concat(insertArr, after2);
}
function pushToStart(arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
    arr.unshift(value);
  }
}
function pushToEnd(arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
    arr.push(value);
  }
}
function pushMany(arr, items) {
  for (const item of items) {
    arr.push(item);
  }
}
function asArray(x) {
  return Array.isArray(x) ? x : [x];
}
function insertInto(array, start, newItems) {
  const startIdx = getActualStartIndex(array, start);
  const originalLength = array.length;
  const newItemsLength = newItems.length;
  array.length = originalLength + newItemsLength;
  for (let i = originalLength - 1; i >= startIdx; i--) {
    array[i + newItemsLength] = array[i];
  }
  for (let i = 0; i < newItemsLength; i++) {
    array[i + startIdx] = newItems[i];
  }
}
function splice(array, start, deleteCount, newItems) {
  const index = getActualStartIndex(array, start);
  let result = array.splice(index, deleteCount);
  if (result === void 0) {
    result = [];
  }
  insertInto(array, index, newItems);
  return result;
}
function getActualStartIndex(array, start) {
  return start < 0 ? Math.max(start + array.length, 0) : Math.min(start, array.length);
}
var CompareResult;
(function(CompareResult2) {
  function isLessThan(result) {
    return result < 0;
  }
  CompareResult2.isLessThan = isLessThan;
  function isLessThanOrEqual(result) {
    return result <= 0;
  }
  CompareResult2.isLessThanOrEqual = isLessThanOrEqual;
  function isGreaterThan(result) {
    return result > 0;
  }
  CompareResult2.isGreaterThan = isGreaterThan;
  function isNeitherLessOrGreaterThan(result) {
    return result === 0;
  }
  CompareResult2.isNeitherLessOrGreaterThan = isNeitherLessOrGreaterThan;
  CompareResult2.greaterThan = 1;
  CompareResult2.lessThan = -1;
  CompareResult2.neitherLessOrGreaterThan = 0;
})(CompareResult || (CompareResult = {}));
function compareBy(selector, comparator) {
  return (a, b) => comparator(selector(a), selector(b));
}
function tieBreakComparators(...comparators) {
  return (item1, item2) => {
    for (const comparator of comparators) {
      const result = comparator(item1, item2);
      if (!CompareResult.isNeitherLessOrGreaterThan(result)) {
        return result;
      }
    }
    return CompareResult.neitherLessOrGreaterThan;
  };
}
const numberComparator = (a, b) => a - b;
const booleanComparator = (a, b) => numberComparator(a ? 1 : 0, b ? 1 : 0);
function reverseOrder(comparator) {
  return (a, b) => -comparator(a, b);
}
class ArrayQueue {
  /**
   * Constructs a queue that is backed by the given array. Runtime is O(1).
  */
  constructor(items) {
    this.items = items;
    this.firstIdx = 0;
    this.lastIdx = this.items.length - 1;
  }
  get length() {
    return this.lastIdx - this.firstIdx + 1;
  }
  /**
   * Consumes elements from the beginning of the queue as long as the predicate returns true.
   * If no elements were consumed, `null` is returned. Has a runtime of O(result.length).
  */
  takeWhile(predicate) {
    let startIdx = this.firstIdx;
    while (startIdx < this.items.length && predicate(this.items[startIdx])) {
      startIdx++;
    }
    const result = startIdx === this.firstIdx ? null : this.items.slice(this.firstIdx, startIdx);
    this.firstIdx = startIdx;
    return result;
  }
  /**
   * Consumes elements from the end of the queue as long as the predicate returns true.
   * If no elements were consumed, `null` is returned.
   * The result has the same order as the underlying array!
  */
  takeFromEndWhile(predicate) {
    let endIdx = this.lastIdx;
    while (endIdx >= 0 && predicate(this.items[endIdx])) {
      endIdx--;
    }
    const result = endIdx === this.lastIdx ? null : this.items.slice(endIdx + 1, this.lastIdx + 1);
    this.lastIdx = endIdx;
    return result;
  }
  peek() {
    if (this.length === 0) {
      return void 0;
    }
    return this.items[this.firstIdx];
  }
  dequeue() {
    const result = this.items[this.firstIdx];
    this.firstIdx++;
    return result;
  }
  takeCount(count) {
    const result = this.items.slice(this.firstIdx, this.firstIdx + count);
    this.firstIdx += count;
    return result;
  }
}
class CallbackIterable {
  static {
    this.empty = new CallbackIterable((_callback) => {
    });
  }
  constructor(iterate) {
    this.iterate = iterate;
  }
  toArray() {
    const result = [];
    this.iterate((item) => {
      result.push(item);
      return true;
    });
    return result;
  }
  filter(predicate) {
    return new CallbackIterable((cb) => this.iterate((item) => predicate(item) ? cb(item) : true));
  }
  map(mapFn) {
    return new CallbackIterable((cb) => this.iterate((item) => cb(mapFn(item))));
  }
  findLast(predicate) {
    let result;
    this.iterate((item) => {
      if (predicate(item)) {
        result = item;
      }
      return true;
    });
    return result;
  }
  findLastMaxBy(comparator) {
    let result;
    let first2 = true;
    this.iterate((item) => {
      if (first2 || CompareResult.isGreaterThan(comparator(item, result))) {
        first2 = false;
        result = item;
      }
      return true;
    });
    return result;
  }
}
class Permutation {
  constructor(_indexMap) {
    this._indexMap = _indexMap;
  }
  /**
   * Returns a permutation that sorts the given array according to the given compare function.
   */
  static createSortPermutation(arr, compareFn) {
    const sortIndices = Array.from(arr.keys()).sort((index1, index2) => compareFn(arr[index1], arr[index2]));
    return new Permutation(sortIndices);
  }
  /**
   * Returns a new array with the elements of the given array re-arranged according to this permutation.
   */
  apply(arr) {
    return arr.map((_, index) => arr[this._indexMap[index]]);
  }
  /**
   * Returns a new permutation that undoes the re-arrangement of this permutation.
  */
  inverse() {
    const inverseIndexMap = this._indexMap.slice();
    for (let i = 0; i < this._indexMap.length; i++) {
      inverseIndexMap[this._indexMap[i]] = i;
    }
    return new Permutation(inverseIndexMap);
  }
}
function deepClone(obj) {
  if (!obj || typeof obj !== "object") {
    return obj;
  }
  if (obj instanceof RegExp) {
    return obj;
  }
  const result = Array.isArray(obj) ? [] : {};
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = value && typeof value === "object" ? deepClone(value) : value;
  });
  return result;
}
function deepFreeze(obj) {
  if (!obj || typeof obj !== "object") {
    return obj;
  }
  const stack = [obj];
  while (stack.length > 0) {
    const obj2 = stack.shift();
    Object.freeze(obj2);
    for (const key in obj2) {
      if (_hasOwnProperty.call(obj2, key)) {
        const prop = obj2[key];
        if (typeof prop === "object" && !Object.isFrozen(prop) && !isTypedArray(prop)) {
          stack.push(prop);
        }
      }
    }
  }
  return obj;
}
const _hasOwnProperty = Object.prototype.hasOwnProperty;
function cloneAndChange(obj, changer) {
  return _cloneAndChange(obj, changer, /* @__PURE__ */ new Set());
}
function _cloneAndChange(obj, changer, seen) {
  if (isUndefinedOrNull(obj)) {
    return obj;
  }
  const changed = changer(obj);
  if (typeof changed !== "undefined") {
    return changed;
  }
  if (Array.isArray(obj)) {
    const r1 = [];
    for (const e of obj) {
      r1.push(_cloneAndChange(e, changer, seen));
    }
    return r1;
  }
  if (isObject(obj)) {
    if (seen.has(obj)) {
      throw new Error("Cannot clone recursive data-structure");
    }
    seen.add(obj);
    const r2 = {};
    for (const i2 in obj) {
      if (_hasOwnProperty.call(obj, i2)) {
        r2[i2] = _cloneAndChange(obj[i2], changer, seen);
      }
    }
    seen.delete(obj);
    return r2;
  }
  return obj;
}
function mixin(destination, source, overwrite = true) {
  if (!isObject(destination)) {
    return source;
  }
  if (isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key in destination) {
        if (overwrite) {
          if (isObject(destination[key]) && isObject(source[key])) {
            mixin(destination[key], source[key], overwrite);
          } else {
            destination[key] = source[key];
          }
        }
      } else {
        destination[key] = source[key];
      }
    });
  }
  return destination;
}
function equals(one, other) {
  if (one === other) {
    return true;
  }
  if (one === null || one === void 0 || other === null || other === void 0) {
    return false;
  }
  if (typeof one !== typeof other) {
    return false;
  }
  if (typeof one !== "object") {
    return false;
  }
  if (Array.isArray(one) !== Array.isArray(other)) {
    return false;
  }
  let i;
  let key;
  if (Array.isArray(one)) {
    if (one.length !== other.length) {
      return false;
    }
    for (i = 0; i < one.length; i++) {
      if (!equals(one[i], other[i])) {
        return false;
      }
    }
  } else {
    const oneKeys = [];
    for (key in one) {
      oneKeys.push(key);
    }
    oneKeys.sort();
    const otherKeys = [];
    for (key in other) {
      otherKeys.push(key);
    }
    otherKeys.sort();
    if (!equals(oneKeys, otherKeys)) {
      return false;
    }
    for (i = 0; i < oneKeys.length; i++) {
      if (!equals(one[oneKeys[i]], other[oneKeys[i]])) {
        return false;
      }
    }
  }
  return true;
}
function getAllPropertyNames(obj) {
  let res = [];
  while (Object.prototype !== obj) {
    res = res.concat(Object.getOwnPropertyNames(obj));
    obj = Object.getPrototypeOf(obj);
  }
  return res;
}
function getAllMethodNames(obj) {
  const methods = [];
  for (const prop of getAllPropertyNames(obj)) {
    if (typeof obj[prop] === "function") {
      methods.push(prop);
    }
  }
  return methods;
}
function createProxyObject(methodNames, invoke) {
  const createProxyMethod = (method) => {
    return function() {
      const args = Array.prototype.slice.call(arguments, 0);
      return invoke(method, args);
    };
  };
  const result = {};
  for (const methodName of methodNames) {
    result[methodName] = createProxyMethod(methodName);
  }
  return result;
}
const EDITOR_MODEL_DEFAULTS = {
  tabSize: 4,
  indentSize: 4,
  insertSpaces: true,
  detectIndentation: true,
  trimAutoWhitespace: true,
  largeFileOptimizations: true,
  bracketPairColorizationOptions: {
    enabled: true,
    independentColorPoolPerBracketType: false
  }
};
const USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function createWordRegExp(allowInWords = "") {
  let source = "(-?\\d*\\.\\d\\w*)|([^";
  for (const sep of USUAL_WORD_SEPARATORS) {
    if (allowInWords.indexOf(sep) >= 0) {
      continue;
    }
    source += "\\" + sep;
  }
  source += "\\s]+)";
  return new RegExp(source, "g");
}
const DEFAULT_WORD_REGEXP = createWordRegExp();
function ensureValidWordDefinition(wordDefinition) {
  let result = DEFAULT_WORD_REGEXP;
  if (wordDefinition && wordDefinition instanceof RegExp) {
    if (!wordDefinition.global) {
      let flags = "g";
      if (wordDefinition.ignoreCase) {
        flags += "i";
      }
      if (wordDefinition.multiline) {
        flags += "m";
      }
      if (wordDefinition.unicode) {
        flags += "u";
      }
      result = new RegExp(wordDefinition.source, flags);
    } else {
      result = wordDefinition;
    }
  }
  result.lastIndex = 0;
  return result;
}
const _defaultConfig = new LinkedList();
_defaultConfig.unshift({
  maxLen: 1e3,
  windowSize: 15,
  timeBudget: 150
});
function getWordAtText(column, wordDefinition, text2, textOffset, config) {
  wordDefinition = ensureValidWordDefinition(wordDefinition);
  if (!config) {
    config = Iterable.first(_defaultConfig);
  }
  if (text2.length > config.maxLen) {
    let start = column - config.maxLen / 2;
    if (start < 0) {
      start = 0;
    } else {
      textOffset += start;
    }
    text2 = text2.substring(start, column + config.maxLen / 2);
    return getWordAtText(column, wordDefinition, text2, textOffset, config);
  }
  const t1 = Date.now();
  const pos = column - 1 - textOffset;
  let prevRegexIndex = -1;
  let match = null;
  for (let i = 1; ; i++) {
    if (Date.now() - t1 >= config.timeBudget) {
      break;
    }
    const regexIndex = pos - config.windowSize * i;
    wordDefinition.lastIndex = Math.max(0, regexIndex);
    const thisMatch = _findRegexMatchEnclosingPosition(wordDefinition, text2, pos, prevRegexIndex);
    if (!thisMatch && match) {
      break;
    }
    match = thisMatch;
    if (regexIndex <= 0) {
      break;
    }
    prevRegexIndex = regexIndex;
  }
  if (match) {
    const result = {
      word: match[0],
      startColumn: textOffset + 1 + match.index,
      endColumn: textOffset + 1 + match.index + match[0].length
    };
    wordDefinition.lastIndex = 0;
    return result;
  }
  return null;
}
function _findRegexMatchEnclosingPosition(wordDefinition, text2, pos, stopPos) {
  let match;
  while (match = wordDefinition.exec(text2)) {
    const matchIndex = match.index || 0;
    if (matchIndex <= pos && wordDefinition.lastIndex >= pos) {
      return match;
    } else if (stopPos > 0 && matchIndex > stopPos) {
      return null;
    }
  }
  return null;
}
const MINIMAP_GUTTER_WIDTH = 8;
class ConfigurationChangedEvent {
  /**
   * @internal
   */
  constructor(values) {
    this._values = values;
  }
  hasChanged(id) {
    return this._values[id];
  }
}
class ComputeOptionsMemory {
  constructor() {
    this.stableMinimapLayoutInput = null;
    this.stableFitMaxMinimapScale = 0;
    this.stableFitRemainingWidth = 0;
  }
}
class BaseEditorOption {
  constructor(id, name, defaultValue, schema) {
    this.id = id;
    this.name = name;
    this.defaultValue = defaultValue;
    this.schema = schema;
  }
  applyUpdate(value, update) {
    return applyUpdate(value, update);
  }
  compute(env, options, value) {
    return value;
  }
}
class ApplyUpdateResult {
  constructor(newValue, didChange) {
    this.newValue = newValue;
    this.didChange = didChange;
  }
}
function applyUpdate(value, update) {
  if (typeof value !== "object" || typeof update !== "object" || !value || !update) {
    return new ApplyUpdateResult(update, value !== update);
  }
  if (Array.isArray(value) || Array.isArray(update)) {
    const arrayEquals = Array.isArray(value) && Array.isArray(update) && equals$1(value, update);
    return new ApplyUpdateResult(update, !arrayEquals);
  }
  let didChange = false;
  for (const key in update) {
    if (update.hasOwnProperty(key)) {
      const result = applyUpdate(value[key], update[key]);
      if (result.didChange) {
        value[key] = result.newValue;
        didChange = true;
      }
    }
  }
  return new ApplyUpdateResult(value, didChange);
}
class ComputedEditorOption {
  constructor(id) {
    this.schema = void 0;
    this.id = id;
    this.name = "_never_";
    this.defaultValue = void 0;
  }
  applyUpdate(value, update) {
    return applyUpdate(value, update);
  }
  validate(input) {
    return this.defaultValue;
  }
}
class SimpleEditorOption {
  constructor(id, name, defaultValue, schema) {
    this.id = id;
    this.name = name;
    this.defaultValue = defaultValue;
    this.schema = schema;
  }
  applyUpdate(value, update) {
    return applyUpdate(value, update);
  }
  validate(input) {
    if (typeof input === "undefined") {
      return this.defaultValue;
    }
    return input;
  }
  compute(env, options, value) {
    return value;
  }
}
function boolean(value, defaultValue) {
  if (typeof value === "undefined") {
    return defaultValue;
  }
  if (value === "false") {
    return false;
  }
  return Boolean(value);
}
class EditorBooleanOption extends SimpleEditorOption {
  constructor(id, name, defaultValue, schema = void 0) {
    if (typeof schema !== "undefined") {
      schema.type = "boolean";
      schema.default = defaultValue;
    }
    super(id, name, defaultValue, schema);
  }
  validate(input) {
    return boolean(input, this.defaultValue);
  }
}
function clampedInt(value, defaultValue, minimum, maximum) {
  if (typeof value === "undefined") {
    return defaultValue;
  }
  let r = parseInt(value, 10);
  if (isNaN(r)) {
    return defaultValue;
  }
  r = Math.max(minimum, r);
  r = Math.min(maximum, r);
  return r | 0;
}
class EditorIntOption extends SimpleEditorOption {
  static clampedInt(value, defaultValue, minimum, maximum) {
    return clampedInt(value, defaultValue, minimum, maximum);
  }
  constructor(id, name, defaultValue, minimum, maximum, schema = void 0) {
    if (typeof schema !== "undefined") {
      schema.type = "integer";
      schema.default = defaultValue;
      schema.minimum = minimum;
      schema.maximum = maximum;
    }
    super(id, name, defaultValue, schema);
    this.minimum = minimum;
    this.maximum = maximum;
  }
  validate(input) {
    return EditorIntOption.clampedInt(input, this.defaultValue, this.minimum, this.maximum);
  }
}
function clampedFloat(value, defaultValue, minimum, maximum) {
  if (typeof value === "undefined") {
    return defaultValue;
  }
  const r = EditorFloatOption.float(value, defaultValue);
  return EditorFloatOption.clamp(r, minimum, maximum);
}
class EditorFloatOption extends SimpleEditorOption {
  static clamp(n, min, max) {
    if (n < min) {
      return min;
    }
    if (n > max) {
      return max;
    }
    return n;
  }
  static float(value, defaultValue) {
    if (typeof value === "number") {
      return value;
    }
    if (typeof value === "undefined") {
      return defaultValue;
    }
    const r = parseFloat(value);
    return isNaN(r) ? defaultValue : r;
  }
  constructor(id, name, defaultValue, validationFn, schema) {
    if (typeof schema !== "undefined") {
      schema.type = "number";
      schema.default = defaultValue;
    }
    super(id, name, defaultValue, schema);
    this.validationFn = validationFn;
  }
  validate(input) {
    return this.validationFn(EditorFloatOption.float(input, this.defaultValue));
  }
}
class EditorStringOption extends SimpleEditorOption {
  static string(value, defaultValue) {
    if (typeof value !== "string") {
      return defaultValue;
    }
    return value;
  }
  constructor(id, name, defaultValue, schema = void 0) {
    if (typeof schema !== "undefined") {
      schema.type = "string";
      schema.default = defaultValue;
    }
    super(id, name, defaultValue, schema);
  }
  validate(input) {
    return EditorStringOption.string(input, this.defaultValue);
  }
}
function stringSet(value, defaultValue, allowedValues, renamedValues) {
  if (typeof value !== "string") {
    return defaultValue;
  }
  if (renamedValues && value in renamedValues) {
    return renamedValues[value];
  }
  if (allowedValues.indexOf(value) === -1) {
    return defaultValue;
  }
  return value;
}
class EditorStringEnumOption extends SimpleEditorOption {
  constructor(id, name, defaultValue, allowedValues, schema = void 0) {
    if (typeof schema !== "undefined") {
      schema.type = "string";
      schema.enum = allowedValues;
      schema.default = defaultValue;
    }
    super(id, name, defaultValue, schema);
    this._allowedValues = allowedValues;
  }
  validate(input) {
    return stringSet(input, this.defaultValue, this._allowedValues);
  }
}
class EditorEnumOption extends BaseEditorOption {
  constructor(id, name, defaultValue, defaultStringValue, allowedValues, convert, schema = void 0) {
    if (typeof schema !== "undefined") {
      schema.type = "string";
      schema.enum = allowedValues;
      schema.default = defaultStringValue;
    }
    super(id, name, defaultValue, schema);
    this._allowedValues = allowedValues;
    this._convert = convert;
  }
  validate(input) {
    if (typeof input !== "string") {
      return this.defaultValue;
    }
    if (this._allowedValues.indexOf(input) === -1) {
      return this.defaultValue;
    }
    return this._convert(input);
  }
}
function _autoIndentFromString(autoIndent) {
  switch (autoIndent) {
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
class EditorAccessibilitySupport extends BaseEditorOption {
  constructor() {
    super(2, "accessibilitySupport", 0, {
      type: "string",
      enum: ["auto", "on", "off"],
      enumDescriptions: [
        localize("accessibilitySupport.auto", "Use platform APIs to detect when a Screen Reader is attached."),
        localize("accessibilitySupport.on", "Optimize for usage with a Screen Reader."),
        localize("accessibilitySupport.off", "Assume a screen reader is not attached.")
      ],
      default: "auto",
      tags: ["accessibility"],
      description: localize("accessibilitySupport", "Controls if the UI should run in a mode where it is optimized for screen readers.")
    });
  }
  validate(input) {
    switch (input) {
      case "auto":
        return 0;
      case "off":
        return 1;
      case "on":
        return 2;
    }
    return this.defaultValue;
  }
  compute(env, options, value) {
    if (value === 0) {
      return env.accessibilitySupport;
    }
    return value;
  }
}
class EditorComments extends BaseEditorOption {
  constructor() {
    const defaults = {
      insertSpace: true,
      ignoreEmptyLines: true
    };
    super(23, "comments", defaults, {
      "editor.comments.insertSpace": {
        type: "boolean",
        default: defaults.insertSpace,
        description: localize("comments.insertSpace", "Controls whether a space character is inserted when commenting.")
      },
      "editor.comments.ignoreEmptyLines": {
        type: "boolean",
        default: defaults.ignoreEmptyLines,
        description: localize("comments.ignoreEmptyLines", "Controls if empty lines should be ignored with toggle, add or remove actions for line comments.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      insertSpace: boolean(input.insertSpace, this.defaultValue.insertSpace),
      ignoreEmptyLines: boolean(input.ignoreEmptyLines, this.defaultValue.ignoreEmptyLines)
    };
  }
}
function _cursorBlinkingStyleFromString(cursorBlinkingStyle) {
  switch (cursorBlinkingStyle) {
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
var TextEditorCursorStyle;
(function(TextEditorCursorStyle2) {
  TextEditorCursorStyle2[TextEditorCursorStyle2["Line"] = 1] = "Line";
  TextEditorCursorStyle2[TextEditorCursorStyle2["Block"] = 2] = "Block";
  TextEditorCursorStyle2[TextEditorCursorStyle2["Underline"] = 3] = "Underline";
  TextEditorCursorStyle2[TextEditorCursorStyle2["LineThin"] = 4] = "LineThin";
  TextEditorCursorStyle2[TextEditorCursorStyle2["BlockOutline"] = 5] = "BlockOutline";
  TextEditorCursorStyle2[TextEditorCursorStyle2["UnderlineThin"] = 6] = "UnderlineThin";
})(TextEditorCursorStyle || (TextEditorCursorStyle = {}));
function _cursorStyleFromString(cursorStyle) {
  switch (cursorStyle) {
    case "line":
      return TextEditorCursorStyle.Line;
    case "block":
      return TextEditorCursorStyle.Block;
    case "underline":
      return TextEditorCursorStyle.Underline;
    case "line-thin":
      return TextEditorCursorStyle.LineThin;
    case "block-outline":
      return TextEditorCursorStyle.BlockOutline;
    case "underline-thin":
      return TextEditorCursorStyle.UnderlineThin;
  }
}
class EditorClassName extends ComputedEditorOption {
  constructor() {
    super(
      143
      /* EditorOption.editorClassName */
    );
  }
  compute(env, options, _) {
    const classNames = ["monaco-editor"];
    if (options.get(
      39
      /* EditorOption.extraEditorClassName */
    )) {
      classNames.push(options.get(
        39
        /* EditorOption.extraEditorClassName */
      ));
    }
    if (env.extraEditorClassName) {
      classNames.push(env.extraEditorClassName);
    }
    if (options.get(
      74
      /* EditorOption.mouseStyle */
    ) === "default") {
      classNames.push("mouse-default");
    } else if (options.get(
      74
      /* EditorOption.mouseStyle */
    ) === "copy") {
      classNames.push("mouse-copy");
    }
    if (options.get(
      112
      /* EditorOption.showUnused */
    )) {
      classNames.push("showUnused");
    }
    if (options.get(
      141
      /* EditorOption.showDeprecated */
    )) {
      classNames.push("showDeprecated");
    }
    return classNames.join(" ");
  }
}
class EditorEmptySelectionClipboard extends EditorBooleanOption {
  constructor() {
    super(37, "emptySelectionClipboard", true, { description: localize("emptySelectionClipboard", "Controls whether copying without a selection copies the current line.") });
  }
  compute(env, options, value) {
    return value && env.emptySelectionClipboard;
  }
}
class EditorFind extends BaseEditorOption {
  constructor() {
    const defaults = {
      cursorMoveOnType: true,
      seedSearchStringFromSelection: "always",
      autoFindInSelection: "never",
      globalFindClipboard: false,
      addExtraSpaceOnTop: true,
      loop: true
    };
    super(41, "find", defaults, {
      "editor.find.cursorMoveOnType": {
        type: "boolean",
        default: defaults.cursorMoveOnType,
        description: localize("find.cursorMoveOnType", "Controls whether the cursor should jump to find matches while typing.")
      },
      "editor.find.seedSearchStringFromSelection": {
        type: "string",
        enum: ["never", "always", "selection"],
        default: defaults.seedSearchStringFromSelection,
        enumDescriptions: [
          localize("editor.find.seedSearchStringFromSelection.never", "Never seed search string from the editor selection."),
          localize("editor.find.seedSearchStringFromSelection.always", "Always seed search string from the editor selection, including word at cursor position."),
          localize("editor.find.seedSearchStringFromSelection.selection", "Only seed search string from the editor selection.")
        ],
        description: localize("find.seedSearchStringFromSelection", "Controls whether the search string in the Find Widget is seeded from the editor selection.")
      },
      "editor.find.autoFindInSelection": {
        type: "string",
        enum: ["never", "always", "multiline"],
        default: defaults.autoFindInSelection,
        enumDescriptions: [
          localize("editor.find.autoFindInSelection.never", "Never turn on Find in Selection automatically (default)."),
          localize("editor.find.autoFindInSelection.always", "Always turn on Find in Selection automatically."),
          localize("editor.find.autoFindInSelection.multiline", "Turn on Find in Selection automatically when multiple lines of content are selected.")
        ],
        description: localize("find.autoFindInSelection", "Controls the condition for turning on Find in Selection automatically.")
      },
      "editor.find.globalFindClipboard": {
        type: "boolean",
        default: defaults.globalFindClipboard,
        description: localize("find.globalFindClipboard", "Controls whether the Find Widget should read or modify the shared find clipboard on macOS."),
        included: isMacintosh
      },
      "editor.find.addExtraSpaceOnTop": {
        type: "boolean",
        default: defaults.addExtraSpaceOnTop,
        description: localize("find.addExtraSpaceOnTop", "Controls whether the Find Widget should add extra lines on top of the editor. When true, you can scroll beyond the first line when the Find Widget is visible.")
      },
      "editor.find.loop": {
        type: "boolean",
        default: defaults.loop,
        description: localize("find.loop", "Controls whether the search automatically restarts from the beginning (or the end) when no further matches can be found.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      cursorMoveOnType: boolean(input.cursorMoveOnType, this.defaultValue.cursorMoveOnType),
      seedSearchStringFromSelection: typeof _input.seedSearchStringFromSelection === "boolean" ? _input.seedSearchStringFromSelection ? "always" : "never" : stringSet(input.seedSearchStringFromSelection, this.defaultValue.seedSearchStringFromSelection, ["never", "always", "selection"]),
      autoFindInSelection: typeof _input.autoFindInSelection === "boolean" ? _input.autoFindInSelection ? "always" : "never" : stringSet(input.autoFindInSelection, this.defaultValue.autoFindInSelection, ["never", "always", "multiline"]),
      globalFindClipboard: boolean(input.globalFindClipboard, this.defaultValue.globalFindClipboard),
      addExtraSpaceOnTop: boolean(input.addExtraSpaceOnTop, this.defaultValue.addExtraSpaceOnTop),
      loop: boolean(input.loop, this.defaultValue.loop)
    };
  }
}
class EditorFontLigatures extends BaseEditorOption {
  static {
    this.OFF = '"liga" off, "calt" off';
  }
  static {
    this.ON = '"liga" on, "calt" on';
  }
  constructor() {
    super(51, "fontLigatures", EditorFontLigatures.OFF, {
      anyOf: [
        {
          type: "boolean",
          description: localize("fontLigatures", "Enables/Disables font ligatures ('calt' and 'liga' font features). Change this to a string for fine-grained control of the 'font-feature-settings' CSS property.")
        },
        {
          type: "string",
          description: localize("fontFeatureSettings", "Explicit 'font-feature-settings' CSS property. A boolean can be passed instead if one only needs to turn on/off ligatures.")
        }
      ],
      description: localize("fontLigaturesGeneral", "Configures font ligatures or font features. Can be either a boolean to enable/disable ligatures or a string for the value of the CSS 'font-feature-settings' property."),
      default: false
    });
  }
  validate(input) {
    if (typeof input === "undefined") {
      return this.defaultValue;
    }
    if (typeof input === "string") {
      if (input === "false" || input.length === 0) {
        return EditorFontLigatures.OFF;
      }
      if (input === "true") {
        return EditorFontLigatures.ON;
      }
      return input;
    }
    if (Boolean(input)) {
      return EditorFontLigatures.ON;
    }
    return EditorFontLigatures.OFF;
  }
}
class EditorFontVariations extends BaseEditorOption {
  static {
    this.OFF = "normal";
  }
  static {
    this.TRANSLATE = "translate";
  }
  constructor() {
    super(54, "fontVariations", EditorFontVariations.OFF, {
      anyOf: [
        {
          type: "boolean",
          description: localize("fontVariations", "Enables/Disables the translation from font-weight to font-variation-settings. Change this to a string for fine-grained control of the 'font-variation-settings' CSS property.")
        },
        {
          type: "string",
          description: localize("fontVariationSettings", "Explicit 'font-variation-settings' CSS property. A boolean can be passed instead if one only needs to translate font-weight to font-variation-settings.")
        }
      ],
      description: localize("fontVariationsGeneral", "Configures font variations. Can be either a boolean to enable/disable the translation from font-weight to font-variation-settings or a string for the value of the CSS 'font-variation-settings' property."),
      default: false
    });
  }
  validate(input) {
    if (typeof input === "undefined") {
      return this.defaultValue;
    }
    if (typeof input === "string") {
      if (input === "false") {
        return EditorFontVariations.OFF;
      }
      if (input === "true") {
        return EditorFontVariations.TRANSLATE;
      }
      return input;
    }
    if (Boolean(input)) {
      return EditorFontVariations.TRANSLATE;
    }
    return EditorFontVariations.OFF;
  }
  compute(env, options, value) {
    return env.fontInfo.fontVariationSettings;
  }
}
class EditorFontInfo extends ComputedEditorOption {
  constructor() {
    super(
      50
      /* EditorOption.fontInfo */
    );
  }
  compute(env, options, _) {
    return env.fontInfo;
  }
}
class EditorFontSize extends SimpleEditorOption {
  constructor() {
    super(52, "fontSize", EDITOR_FONT_DEFAULTS.fontSize, {
      type: "number",
      minimum: 6,
      maximum: 100,
      default: EDITOR_FONT_DEFAULTS.fontSize,
      description: localize("fontSize", "Controls the font size in pixels.")
    });
  }
  validate(input) {
    const r = EditorFloatOption.float(input, this.defaultValue);
    if (r === 0) {
      return EDITOR_FONT_DEFAULTS.fontSize;
    }
    return EditorFloatOption.clamp(r, 6, 100);
  }
  compute(env, options, value) {
    return env.fontInfo.fontSize;
  }
}
class EditorFontWeight extends BaseEditorOption {
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
    super(53, "fontWeight", EDITOR_FONT_DEFAULTS.fontWeight, {
      anyOf: [
        {
          type: "number",
          minimum: EditorFontWeight.MINIMUM_VALUE,
          maximum: EditorFontWeight.MAXIMUM_VALUE,
          errorMessage: localize("fontWeightErrorMessage", 'Only "normal" and "bold" keywords or numbers between 1 and 1000 are allowed.')
        },
        {
          type: "string",
          pattern: "^(normal|bold|1000|[1-9][0-9]{0,2})$"
        },
        {
          enum: EditorFontWeight.SUGGESTION_VALUES
        }
      ],
      default: EDITOR_FONT_DEFAULTS.fontWeight,
      description: localize("fontWeight", 'Controls the font weight. Accepts "normal" and "bold" keywords or numbers between 1 and 1000.')
    });
  }
  validate(input) {
    if (input === "normal" || input === "bold") {
      return input;
    }
    return String(EditorIntOption.clampedInt(input, EDITOR_FONT_DEFAULTS.fontWeight, EditorFontWeight.MINIMUM_VALUE, EditorFontWeight.MAXIMUM_VALUE));
  }
}
class EditorGoToLocation extends BaseEditorOption {
  constructor() {
    const defaults = {
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
    };
    const jsonSubset = {
      type: "string",
      enum: ["peek", "gotoAndPeek", "goto"],
      default: defaults.multiple,
      enumDescriptions: [
        localize("editor.gotoLocation.multiple.peek", "Show Peek view of the results (default)"),
        localize("editor.gotoLocation.multiple.gotoAndPeek", "Go to the primary result and show a Peek view"),
        localize("editor.gotoLocation.multiple.goto", "Go to the primary result and enable Peek-less navigation to others")
      ]
    };
    const alternativeCommandOptions = ["", "editor.action.referenceSearch.trigger", "editor.action.goToReferences", "editor.action.peekImplementation", "editor.action.goToImplementation", "editor.action.peekTypeDefinition", "editor.action.goToTypeDefinition", "editor.action.peekDeclaration", "editor.action.revealDeclaration", "editor.action.peekDefinition", "editor.action.revealDefinitionAside", "editor.action.revealDefinition"];
    super(58, "gotoLocation", defaults, {
      "editor.gotoLocation.multiple": {
        deprecationMessage: localize("editor.gotoLocation.multiple.deprecated", "This setting is deprecated, please use separate settings like 'editor.editor.gotoLocation.multipleDefinitions' or 'editor.editor.gotoLocation.multipleImplementations' instead.")
      },
      "editor.gotoLocation.multipleDefinitions": {
        description: localize("editor.editor.gotoLocation.multipleDefinitions", "Controls the behavior the 'Go to Definition'-command when multiple target locations exist."),
        ...jsonSubset
      },
      "editor.gotoLocation.multipleTypeDefinitions": {
        description: localize("editor.editor.gotoLocation.multipleTypeDefinitions", "Controls the behavior the 'Go to Type Definition'-command when multiple target locations exist."),
        ...jsonSubset
      },
      "editor.gotoLocation.multipleDeclarations": {
        description: localize("editor.editor.gotoLocation.multipleDeclarations", "Controls the behavior the 'Go to Declaration'-command when multiple target locations exist."),
        ...jsonSubset
      },
      "editor.gotoLocation.multipleImplementations": {
        description: localize("editor.editor.gotoLocation.multipleImplemenattions", "Controls the behavior the 'Go to Implementations'-command when multiple target locations exist."),
        ...jsonSubset
      },
      "editor.gotoLocation.multipleReferences": {
        description: localize("editor.editor.gotoLocation.multipleReferences", "Controls the behavior the 'Go to References'-command when multiple target locations exist."),
        ...jsonSubset
      },
      "editor.gotoLocation.alternativeDefinitionCommand": {
        type: "string",
        default: defaults.alternativeDefinitionCommand,
        enum: alternativeCommandOptions,
        description: localize("alternativeDefinitionCommand", "Alternative command id that is being executed when the result of 'Go to Definition' is the current location.")
      },
      "editor.gotoLocation.alternativeTypeDefinitionCommand": {
        type: "string",
        default: defaults.alternativeTypeDefinitionCommand,
        enum: alternativeCommandOptions,
        description: localize("alternativeTypeDefinitionCommand", "Alternative command id that is being executed when the result of 'Go to Type Definition' is the current location.")
      },
      "editor.gotoLocation.alternativeDeclarationCommand": {
        type: "string",
        default: defaults.alternativeDeclarationCommand,
        enum: alternativeCommandOptions,
        description: localize("alternativeDeclarationCommand", "Alternative command id that is being executed when the result of 'Go to Declaration' is the current location.")
      },
      "editor.gotoLocation.alternativeImplementationCommand": {
        type: "string",
        default: defaults.alternativeImplementationCommand,
        enum: alternativeCommandOptions,
        description: localize("alternativeImplementationCommand", "Alternative command id that is being executed when the result of 'Go to Implementation' is the current location.")
      },
      "editor.gotoLocation.alternativeReferenceCommand": {
        type: "string",
        default: defaults.alternativeReferenceCommand,
        enum: alternativeCommandOptions,
        description: localize("alternativeReferenceCommand", "Alternative command id that is being executed when the result of 'Go to Reference' is the current location.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      multiple: stringSet(input.multiple, this.defaultValue.multiple, ["peek", "gotoAndPeek", "goto"]),
      multipleDefinitions: input.multipleDefinitions ?? stringSet(input.multipleDefinitions, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleTypeDefinitions: input.multipleTypeDefinitions ?? stringSet(input.multipleTypeDefinitions, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleDeclarations: input.multipleDeclarations ?? stringSet(input.multipleDeclarations, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleImplementations: input.multipleImplementations ?? stringSet(input.multipleImplementations, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleReferences: input.multipleReferences ?? stringSet(input.multipleReferences, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleTests: input.multipleTests ?? stringSet(input.multipleTests, "peek", ["peek", "gotoAndPeek", "goto"]),
      alternativeDefinitionCommand: EditorStringOption.string(input.alternativeDefinitionCommand, this.defaultValue.alternativeDefinitionCommand),
      alternativeTypeDefinitionCommand: EditorStringOption.string(input.alternativeTypeDefinitionCommand, this.defaultValue.alternativeTypeDefinitionCommand),
      alternativeDeclarationCommand: EditorStringOption.string(input.alternativeDeclarationCommand, this.defaultValue.alternativeDeclarationCommand),
      alternativeImplementationCommand: EditorStringOption.string(input.alternativeImplementationCommand, this.defaultValue.alternativeImplementationCommand),
      alternativeReferenceCommand: EditorStringOption.string(input.alternativeReferenceCommand, this.defaultValue.alternativeReferenceCommand),
      alternativeTestsCommand: EditorStringOption.string(input.alternativeTestsCommand, this.defaultValue.alternativeTestsCommand)
    };
  }
}
class EditorHover extends BaseEditorOption {
  constructor() {
    const defaults = {
      enabled: true,
      delay: 300,
      hidingDelay: 300,
      sticky: true,
      above: true
    };
    super(60, "hover", defaults, {
      "editor.hover.enabled": {
        type: "boolean",
        default: defaults.enabled,
        description: localize("hover.enabled", "Controls whether the hover is shown.")
      },
      "editor.hover.delay": {
        type: "number",
        default: defaults.delay,
        minimum: 0,
        maximum: 1e4,
        description: localize("hover.delay", "Controls the delay in milliseconds after which the hover is shown.")
      },
      "editor.hover.sticky": {
        type: "boolean",
        default: defaults.sticky,
        description: localize("hover.sticky", "Controls whether the hover should remain visible when mouse is moved over it.")
      },
      "editor.hover.hidingDelay": {
        type: "integer",
        minimum: 0,
        default: defaults.hidingDelay,
        description: localize("hover.hidingDelay", "Controls the delay in milliseconds after which the hover is hidden. Requires `editor.hover.sticky` to be enabled.")
      },
      "editor.hover.above": {
        type: "boolean",
        default: defaults.above,
        description: localize("hover.above", "Prefer showing hovers above the line, if there's space.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      enabled: boolean(input.enabled, this.defaultValue.enabled),
      delay: EditorIntOption.clampedInt(input.delay, this.defaultValue.delay, 0, 1e4),
      sticky: boolean(input.sticky, this.defaultValue.sticky),
      hidingDelay: EditorIntOption.clampedInt(input.hidingDelay, this.defaultValue.hidingDelay, 0, 6e5),
      above: boolean(input.above, this.defaultValue.above)
    };
  }
}
class EditorLayoutInfoComputer extends ComputedEditorOption {
  constructor() {
    super(
      146
      /* EditorOption.layoutInfo */
    );
  }
  compute(env, options, _) {
    return EditorLayoutInfoComputer.computeLayout(options, {
      memory: env.memory,
      outerWidth: env.outerWidth,
      outerHeight: env.outerHeight,
      isDominatedByLongLines: env.isDominatedByLongLines,
      lineHeight: env.fontInfo.lineHeight,
      viewLineCount: env.viewLineCount,
      lineNumbersDigitCount: env.lineNumbersDigitCount,
      typicalHalfwidthCharacterWidth: env.fontInfo.typicalHalfwidthCharacterWidth,
      maxDigitWidth: env.fontInfo.maxDigitWidth,
      pixelRatio: env.pixelRatio,
      glyphMarginDecorationLaneCount: env.glyphMarginDecorationLaneCount
    });
  }
  static computeContainedMinimapLineCount(input) {
    const typicalViewportLineCount = input.height / input.lineHeight;
    const extraLinesBeforeFirstLine = Math.floor(input.paddingTop / input.lineHeight);
    let extraLinesBeyondLastLine = Math.floor(input.paddingBottom / input.lineHeight);
    if (input.scrollBeyondLastLine) {
      extraLinesBeyondLastLine = Math.max(extraLinesBeyondLastLine, typicalViewportLineCount - 1);
    }
    const desiredRatio = (extraLinesBeforeFirstLine + input.viewLineCount + extraLinesBeyondLastLine) / (input.pixelRatio * input.height);
    const minimapLineCount = Math.floor(input.viewLineCount / desiredRatio);
    return { typicalViewportLineCount, extraLinesBeforeFirstLine, extraLinesBeyondLastLine, desiredRatio, minimapLineCount };
  }
  static _computeMinimapLayout(input, memory) {
    const outerWidth = input.outerWidth;
    const outerHeight = input.outerHeight;
    const pixelRatio = input.pixelRatio;
    if (!input.minimap.enabled) {
      return {
        renderMinimap: 0,
        minimapLeft: 0,
        minimapWidth: 0,
        minimapHeightIsEditorHeight: false,
        minimapIsSampling: false,
        minimapScale: 1,
        minimapLineHeight: 1,
        minimapCanvasInnerWidth: 0,
        minimapCanvasInnerHeight: Math.floor(pixelRatio * outerHeight),
        minimapCanvasOuterWidth: 0,
        minimapCanvasOuterHeight: outerHeight
      };
    }
    const stableMinimapLayoutInput = memory.stableMinimapLayoutInput;
    const couldUseMemory = stableMinimapLayoutInput && input.outerHeight === stableMinimapLayoutInput.outerHeight && input.lineHeight === stableMinimapLayoutInput.lineHeight && input.typicalHalfwidthCharacterWidth === stableMinimapLayoutInput.typicalHalfwidthCharacterWidth && input.pixelRatio === stableMinimapLayoutInput.pixelRatio && input.scrollBeyondLastLine === stableMinimapLayoutInput.scrollBeyondLastLine && input.paddingTop === stableMinimapLayoutInput.paddingTop && input.paddingBottom === stableMinimapLayoutInput.paddingBottom && input.minimap.enabled === stableMinimapLayoutInput.minimap.enabled && input.minimap.side === stableMinimapLayoutInput.minimap.side && input.minimap.size === stableMinimapLayoutInput.minimap.size && input.minimap.showSlider === stableMinimapLayoutInput.minimap.showSlider && input.minimap.renderCharacters === stableMinimapLayoutInput.minimap.renderCharacters && input.minimap.maxColumn === stableMinimapLayoutInput.minimap.maxColumn && input.minimap.scale === stableMinimapLayoutInput.minimap.scale && input.verticalScrollbarWidth === stableMinimapLayoutInput.verticalScrollbarWidth && input.isViewportWrapping === stableMinimapLayoutInput.isViewportWrapping;
    const lineHeight = input.lineHeight;
    const typicalHalfwidthCharacterWidth = input.typicalHalfwidthCharacterWidth;
    const scrollBeyondLastLine = input.scrollBeyondLastLine;
    const minimapRenderCharacters = input.minimap.renderCharacters;
    let minimapScale = pixelRatio >= 2 ? Math.round(input.minimap.scale * 2) : input.minimap.scale;
    const minimapMaxColumn = input.minimap.maxColumn;
    const minimapSize = input.minimap.size;
    const minimapSide = input.minimap.side;
    const verticalScrollbarWidth = input.verticalScrollbarWidth;
    const viewLineCount = input.viewLineCount;
    const remainingWidth = input.remainingWidth;
    const isViewportWrapping = input.isViewportWrapping;
    const baseCharHeight = minimapRenderCharacters ? 2 : 3;
    let minimapCanvasInnerHeight = Math.floor(pixelRatio * outerHeight);
    const minimapCanvasOuterHeight = minimapCanvasInnerHeight / pixelRatio;
    let minimapHeightIsEditorHeight = false;
    let minimapIsSampling = false;
    let minimapLineHeight = baseCharHeight * minimapScale;
    let minimapCharWidth = minimapScale / pixelRatio;
    let minimapWidthMultiplier = 1;
    if (minimapSize === "fill" || minimapSize === "fit") {
      const { typicalViewportLineCount, extraLinesBeforeFirstLine, extraLinesBeyondLastLine, desiredRatio, minimapLineCount } = EditorLayoutInfoComputer.computeContainedMinimapLineCount({
        viewLineCount,
        scrollBeyondLastLine,
        paddingTop: input.paddingTop,
        paddingBottom: input.paddingBottom,
        height: outerHeight,
        lineHeight,
        pixelRatio
      });
      const ratio = viewLineCount / minimapLineCount;
      if (ratio > 1) {
        minimapHeightIsEditorHeight = true;
        minimapIsSampling = true;
        minimapScale = 1;
        minimapLineHeight = 1;
        minimapCharWidth = minimapScale / pixelRatio;
      } else {
        let fitBecomesFill = false;
        let maxMinimapScale = minimapScale + 1;
        if (minimapSize === "fit") {
          const effectiveMinimapHeight = Math.ceil((extraLinesBeforeFirstLine + viewLineCount + extraLinesBeyondLastLine) * minimapLineHeight);
          if (isViewportWrapping && couldUseMemory && remainingWidth <= memory.stableFitRemainingWidth) {
            fitBecomesFill = true;
            maxMinimapScale = memory.stableFitMaxMinimapScale;
          } else {
            fitBecomesFill = effectiveMinimapHeight > minimapCanvasInnerHeight;
          }
        }
        if (minimapSize === "fill" || fitBecomesFill) {
          minimapHeightIsEditorHeight = true;
          const configuredMinimapScale = minimapScale;
          minimapLineHeight = Math.min(lineHeight * pixelRatio, Math.max(1, Math.floor(1 / desiredRatio)));
          if (isViewportWrapping && couldUseMemory && remainingWidth <= memory.stableFitRemainingWidth) {
            maxMinimapScale = memory.stableFitMaxMinimapScale;
          }
          minimapScale = Math.min(maxMinimapScale, Math.max(1, Math.floor(minimapLineHeight / baseCharHeight)));
          if (minimapScale > configuredMinimapScale) {
            minimapWidthMultiplier = Math.min(2, minimapScale / configuredMinimapScale);
          }
          minimapCharWidth = minimapScale / pixelRatio / minimapWidthMultiplier;
          minimapCanvasInnerHeight = Math.ceil(Math.max(typicalViewportLineCount, extraLinesBeforeFirstLine + viewLineCount + extraLinesBeyondLastLine) * minimapLineHeight);
          if (isViewportWrapping) {
            memory.stableMinimapLayoutInput = input;
            memory.stableFitRemainingWidth = remainingWidth;
            memory.stableFitMaxMinimapScale = minimapScale;
          } else {
            memory.stableMinimapLayoutInput = null;
            memory.stableFitRemainingWidth = 0;
          }
        }
      }
    }
    const minimapMaxWidth = Math.floor(minimapMaxColumn * minimapCharWidth);
    const minimapWidth = Math.min(minimapMaxWidth, Math.max(0, Math.floor((remainingWidth - verticalScrollbarWidth - 2) * minimapCharWidth / (typicalHalfwidthCharacterWidth + minimapCharWidth))) + MINIMAP_GUTTER_WIDTH);
    let minimapCanvasInnerWidth = Math.floor(pixelRatio * minimapWidth);
    const minimapCanvasOuterWidth = minimapCanvasInnerWidth / pixelRatio;
    minimapCanvasInnerWidth = Math.floor(minimapCanvasInnerWidth * minimapWidthMultiplier);
    const renderMinimap = minimapRenderCharacters ? 1 : 2;
    const minimapLeft = minimapSide === "left" ? 0 : outerWidth - minimapWidth - verticalScrollbarWidth;
    return {
      renderMinimap,
      minimapLeft,
      minimapWidth,
      minimapHeightIsEditorHeight,
      minimapIsSampling,
      minimapScale,
      minimapLineHeight,
      minimapCanvasInnerWidth,
      minimapCanvasInnerHeight,
      minimapCanvasOuterWidth,
      minimapCanvasOuterHeight
    };
  }
  static computeLayout(options, env) {
    const outerWidth = env.outerWidth | 0;
    const outerHeight = env.outerHeight | 0;
    const lineHeight = env.lineHeight | 0;
    const lineNumbersDigitCount = env.lineNumbersDigitCount | 0;
    const typicalHalfwidthCharacterWidth = env.typicalHalfwidthCharacterWidth;
    const maxDigitWidth = env.maxDigitWidth;
    const pixelRatio = env.pixelRatio;
    const viewLineCount = env.viewLineCount;
    const wordWrapOverride2 = options.get(
      138
      /* EditorOption.wordWrapOverride2 */
    );
    const wordWrapOverride1 = wordWrapOverride2 === "inherit" ? options.get(
      137
      /* EditorOption.wordWrapOverride1 */
    ) : wordWrapOverride2;
    const wordWrap = wordWrapOverride1 === "inherit" ? options.get(
      133
      /* EditorOption.wordWrap */
    ) : wordWrapOverride1;
    const wordWrapColumn = options.get(
      136
      /* EditorOption.wordWrapColumn */
    );
    const isDominatedByLongLines = env.isDominatedByLongLines;
    const showGlyphMargin = options.get(
      57
      /* EditorOption.glyphMargin */
    );
    const showLineNumbers = options.get(
      68
      /* EditorOption.lineNumbers */
    ).renderType !== 0;
    const lineNumbersMinChars = options.get(
      69
      /* EditorOption.lineNumbersMinChars */
    );
    const scrollBeyondLastLine = options.get(
      106
      /* EditorOption.scrollBeyondLastLine */
    );
    const padding = options.get(
      84
      /* EditorOption.padding */
    );
    const minimap = options.get(
      73
      /* EditorOption.minimap */
    );
    const scrollbar = options.get(
      104
      /* EditorOption.scrollbar */
    );
    const verticalScrollbarWidth = scrollbar.verticalScrollbarSize;
    const verticalScrollbarHasArrows = scrollbar.verticalHasArrows;
    const scrollbarArrowSize = scrollbar.arrowSize;
    const horizontalScrollbarHeight = scrollbar.horizontalScrollbarSize;
    const folding = options.get(
      43
      /* EditorOption.folding */
    );
    const showFoldingDecoration = options.get(
      111
      /* EditorOption.showFoldingControls */
    ) !== "never";
    let lineDecorationsWidth = options.get(
      66
      /* EditorOption.lineDecorationsWidth */
    );
    if (folding && showFoldingDecoration) {
      lineDecorationsWidth += 16;
    }
    let lineNumbersWidth = 0;
    if (showLineNumbers) {
      const digitCount = Math.max(lineNumbersDigitCount, lineNumbersMinChars);
      lineNumbersWidth = Math.round(digitCount * maxDigitWidth);
    }
    let glyphMarginWidth = 0;
    if (showGlyphMargin) {
      glyphMarginWidth = lineHeight * env.glyphMarginDecorationLaneCount;
    }
    let glyphMarginLeft = 0;
    let lineNumbersLeft = glyphMarginLeft + glyphMarginWidth;
    let decorationsLeft = lineNumbersLeft + lineNumbersWidth;
    let contentLeft = decorationsLeft + lineDecorationsWidth;
    const remainingWidth = outerWidth - glyphMarginWidth - lineNumbersWidth - lineDecorationsWidth;
    let isWordWrapMinified = false;
    let isViewportWrapping = false;
    let wrappingColumn = -1;
    if (wordWrapOverride1 === "inherit" && isDominatedByLongLines) {
      isWordWrapMinified = true;
      isViewportWrapping = true;
    } else if (wordWrap === "on" || wordWrap === "bounded") {
      isViewportWrapping = true;
    } else if (wordWrap === "wordWrapColumn") {
      wrappingColumn = wordWrapColumn;
    }
    const minimapLayout = EditorLayoutInfoComputer._computeMinimapLayout({
      outerWidth,
      outerHeight,
      lineHeight,
      typicalHalfwidthCharacterWidth,
      pixelRatio,
      scrollBeyondLastLine,
      paddingTop: padding.top,
      paddingBottom: padding.bottom,
      minimap,
      verticalScrollbarWidth,
      viewLineCount,
      remainingWidth,
      isViewportWrapping
    }, env.memory || new ComputeOptionsMemory());
    if (minimapLayout.renderMinimap !== 0 && minimapLayout.minimapLeft === 0) {
      glyphMarginLeft += minimapLayout.minimapWidth;
      lineNumbersLeft += minimapLayout.minimapWidth;
      decorationsLeft += minimapLayout.minimapWidth;
      contentLeft += minimapLayout.minimapWidth;
    }
    const contentWidth = remainingWidth - minimapLayout.minimapWidth;
    const viewportColumn = Math.max(1, Math.floor((contentWidth - verticalScrollbarWidth - 2) / typicalHalfwidthCharacterWidth));
    const verticalArrowSize = verticalScrollbarHasArrows ? scrollbarArrowSize : 0;
    if (isViewportWrapping) {
      wrappingColumn = Math.max(1, viewportColumn);
      if (wordWrap === "bounded") {
        wrappingColumn = Math.min(wrappingColumn, wordWrapColumn);
      }
    }
    return {
      width: outerWidth,
      height: outerHeight,
      glyphMarginLeft,
      glyphMarginWidth,
      glyphMarginDecorationLaneCount: env.glyphMarginDecorationLaneCount,
      lineNumbersLeft,
      lineNumbersWidth,
      decorationsLeft,
      decorationsWidth: lineDecorationsWidth,
      contentLeft,
      contentWidth,
      minimap: minimapLayout,
      viewportColumn,
      isWordWrapMinified,
      isViewportWrapping,
      wrappingColumn,
      verticalScrollbarWidth,
      horizontalScrollbarHeight,
      overviewRuler: {
        top: verticalArrowSize,
        width: verticalScrollbarWidth,
        height: outerHeight - 2 * verticalArrowSize,
        right: 0
      }
    };
  }
}
class WrappingStrategy extends BaseEditorOption {
  constructor() {
    super(140, "wrappingStrategy", "simple", {
      "editor.wrappingStrategy": {
        enumDescriptions: [
          localize("wrappingStrategy.simple", "Assumes that all characters are of the same width. This is a fast algorithm that works correctly for monospace fonts and certain scripts (like Latin characters) where glyphs are of equal width."),
          localize("wrappingStrategy.advanced", "Delegates wrapping points computation to the browser. This is a slow algorithm, that might cause freezes for large files, but it works correctly in all cases.")
        ],
        type: "string",
        enum: ["simple", "advanced"],
        default: "simple",
        description: localize("wrappingStrategy", "Controls the algorithm that computes wrapping points. Note that when in accessibility mode, advanced will be used for the best experience.")
      }
    });
  }
  validate(input) {
    return stringSet(input, "simple", ["simple", "advanced"]);
  }
  compute(env, options, value) {
    const accessibilitySupport = options.get(
      2
      /* EditorOption.accessibilitySupport */
    );
    if (accessibilitySupport === 2) {
      return "advanced";
    }
    return value;
  }
}
var ShowLightbulbIconMode;
(function(ShowLightbulbIconMode2) {
  ShowLightbulbIconMode2["Off"] = "off";
  ShowLightbulbIconMode2["OnCode"] = "onCode";
  ShowLightbulbIconMode2["On"] = "on";
})(ShowLightbulbIconMode || (ShowLightbulbIconMode = {}));
class EditorLightbulb extends BaseEditorOption {
  constructor() {
    const defaults = { enabled: ShowLightbulbIconMode.OnCode };
    super(65, "lightbulb", defaults, {
      "editor.lightbulb.enabled": {
        type: "string",
        tags: ["experimental"],
        enum: [ShowLightbulbIconMode.Off, ShowLightbulbIconMode.OnCode, ShowLightbulbIconMode.On],
        default: defaults.enabled,
        enumDescriptions: [
          localize("editor.lightbulb.enabled.off", "Disable the code action menu."),
          localize("editor.lightbulb.enabled.onCode", "Show the code action menu when the cursor is on lines with code."),
          localize("editor.lightbulb.enabled.on", "Show the code action menu when the cursor is on lines with code or on empty lines.")
        ],
        description: localize("enabled", "Enables the Code Action lightbulb in the editor.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      enabled: stringSet(input.enabled, this.defaultValue.enabled, [ShowLightbulbIconMode.Off, ShowLightbulbIconMode.OnCode, ShowLightbulbIconMode.On])
    };
  }
}
class EditorStickyScroll extends BaseEditorOption {
  constructor() {
    const defaults = { enabled: true, maxLineCount: 5, defaultModel: "outlineModel", scrollWithEditor: true };
    super(116, "stickyScroll", defaults, {
      "editor.stickyScroll.enabled": {
        type: "boolean",
        default: defaults.enabled,
        description: localize("editor.stickyScroll.enabled", "Shows the nested current scopes during the scroll at the top of the editor."),
        tags: ["experimental"]
      },
      "editor.stickyScroll.maxLineCount": {
        type: "number",
        default: defaults.maxLineCount,
        minimum: 1,
        maximum: 20,
        description: localize("editor.stickyScroll.maxLineCount", "Defines the maximum number of sticky lines to show.")
      },
      "editor.stickyScroll.defaultModel": {
        type: "string",
        enum: ["outlineModel", "foldingProviderModel", "indentationModel"],
        default: defaults.defaultModel,
        description: localize("editor.stickyScroll.defaultModel", "Defines the model to use for determining which lines to stick. If the outline model does not exist, it will fall back on the folding provider model which falls back on the indentation model. This order is respected in all three cases.")
      },
      "editor.stickyScroll.scrollWithEditor": {
        type: "boolean",
        default: defaults.scrollWithEditor,
        description: localize("editor.stickyScroll.scrollWithEditor", "Enable scrolling of Sticky Scroll with the editor's horizontal scrollbar.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      enabled: boolean(input.enabled, this.defaultValue.enabled),
      maxLineCount: EditorIntOption.clampedInt(input.maxLineCount, this.defaultValue.maxLineCount, 1, 20),
      defaultModel: stringSet(input.defaultModel, this.defaultValue.defaultModel, ["outlineModel", "foldingProviderModel", "indentationModel"]),
      scrollWithEditor: boolean(input.scrollWithEditor, this.defaultValue.scrollWithEditor)
    };
  }
}
class EditorInlayHints extends BaseEditorOption {
  constructor() {
    const defaults = { enabled: "on", fontSize: 0, fontFamily: "", padding: false };
    super(142, "inlayHints", defaults, {
      "editor.inlayHints.enabled": {
        type: "string",
        default: defaults.enabled,
        description: localize("inlayHints.enable", "Enables the inlay hints in the editor."),
        enum: ["on", "onUnlessPressed", "offUnlessPressed", "off"],
        markdownEnumDescriptions: [
          localize("editor.inlayHints.on", "Inlay hints are enabled"),
          localize("editor.inlayHints.onUnlessPressed", "Inlay hints are showing by default and hide when holding {0}", isMacintosh ? `Ctrl+Option` : `Ctrl+Alt`),
          localize("editor.inlayHints.offUnlessPressed", "Inlay hints are hidden by default and show when holding {0}", isMacintosh ? `Ctrl+Option` : `Ctrl+Alt`),
          localize("editor.inlayHints.off", "Inlay hints are disabled")
        ]
      },
      "editor.inlayHints.fontSize": {
        type: "number",
        default: defaults.fontSize,
        markdownDescription: localize("inlayHints.fontSize", "Controls font size of inlay hints in the editor. As default the {0} is used when the configured value is less than {1} or greater than the editor font size.", "`#editor.fontSize#`", "`5`")
      },
      "editor.inlayHints.fontFamily": {
        type: "string",
        default: defaults.fontFamily,
        markdownDescription: localize("inlayHints.fontFamily", "Controls font family of inlay hints in the editor. When set to empty, the {0} is used.", "`#editor.fontFamily#`")
      },
      "editor.inlayHints.padding": {
        type: "boolean",
        default: defaults.padding,
        description: localize("inlayHints.padding", "Enables the padding around the inlay hints in the editor.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    if (typeof input.enabled === "boolean") {
      input.enabled = input.enabled ? "on" : "off";
    }
    return {
      enabled: stringSet(input.enabled, this.defaultValue.enabled, ["on", "off", "offUnlessPressed", "onUnlessPressed"]),
      fontSize: EditorIntOption.clampedInt(input.fontSize, this.defaultValue.fontSize, 0, 100),
      fontFamily: EditorStringOption.string(input.fontFamily, this.defaultValue.fontFamily),
      padding: boolean(input.padding, this.defaultValue.padding)
    };
  }
}
class EditorLineDecorationsWidth extends BaseEditorOption {
  constructor() {
    super(66, "lineDecorationsWidth", 10);
  }
  validate(input) {
    if (typeof input === "string" && /^\d+(\.\d+)?ch$/.test(input)) {
      const multiple = parseFloat(input.substring(0, input.length - 2));
      return -multiple;
    } else {
      return EditorIntOption.clampedInt(input, this.defaultValue, 0, 1e3);
    }
  }
  compute(env, options, value) {
    if (value < 0) {
      return EditorIntOption.clampedInt(-value * env.fontInfo.typicalHalfwidthCharacterWidth, this.defaultValue, 0, 1e3);
    } else {
      return value;
    }
  }
}
class EditorLineHeight extends EditorFloatOption {
  constructor() {
    super(67, "lineHeight", EDITOR_FONT_DEFAULTS.lineHeight, (x) => EditorFloatOption.clamp(x, 0, 150), { markdownDescription: localize("lineHeight", "Controls the line height. \n - Use 0 to automatically compute the line height from the font size.\n - Values between 0 and 8 will be used as a multiplier with the font size.\n - Values greater than or equal to 8 will be used as effective values.") });
  }
  compute(env, options, value) {
    return env.fontInfo.lineHeight;
  }
}
class EditorMinimap extends BaseEditorOption {
  constructor() {
    const defaults = {
      enabled: true,
      size: "proportional",
      side: "right",
      showSlider: "mouseover",
      autohide: false,
      renderCharacters: true,
      maxColumn: 120,
      scale: 1,
      showRegionSectionHeaders: true,
      showMarkSectionHeaders: true,
      sectionHeaderFontSize: 9,
      sectionHeaderLetterSpacing: 1
    };
    super(73, "minimap", defaults, {
      "editor.minimap.enabled": {
        type: "boolean",
        default: defaults.enabled,
        description: localize("minimap.enabled", "Controls whether the minimap is shown.")
      },
      "editor.minimap.autohide": {
        type: "boolean",
        default: defaults.autohide,
        description: localize("minimap.autohide", "Controls whether the minimap is hidden automatically.")
      },
      "editor.minimap.size": {
        type: "string",
        enum: ["proportional", "fill", "fit"],
        enumDescriptions: [
          localize("minimap.size.proportional", "The minimap has the same size as the editor contents (and might scroll)."),
          localize("minimap.size.fill", "The minimap will stretch or shrink as necessary to fill the height of the editor (no scrolling)."),
          localize("minimap.size.fit", "The minimap will shrink as necessary to never be larger than the editor (no scrolling).")
        ],
        default: defaults.size,
        description: localize("minimap.size", "Controls the size of the minimap.")
      },
      "editor.minimap.side": {
        type: "string",
        enum: ["left", "right"],
        default: defaults.side,
        description: localize("minimap.side", "Controls the side where to render the minimap.")
      },
      "editor.minimap.showSlider": {
        type: "string",
        enum: ["always", "mouseover"],
        default: defaults.showSlider,
        description: localize("minimap.showSlider", "Controls when the minimap slider is shown.")
      },
      "editor.minimap.scale": {
        type: "number",
        default: defaults.scale,
        minimum: 1,
        maximum: 3,
        enum: [1, 2, 3],
        description: localize("minimap.scale", "Scale of content drawn in the minimap: 1, 2 or 3.")
      },
      "editor.minimap.renderCharacters": {
        type: "boolean",
        default: defaults.renderCharacters,
        description: localize("minimap.renderCharacters", "Render the actual characters on a line as opposed to color blocks.")
      },
      "editor.minimap.maxColumn": {
        type: "number",
        default: defaults.maxColumn,
        description: localize("minimap.maxColumn", "Limit the width of the minimap to render at most a certain number of columns.")
      },
      "editor.minimap.showRegionSectionHeaders": {
        type: "boolean",
        default: defaults.showRegionSectionHeaders,
        description: localize("minimap.showRegionSectionHeaders", "Controls whether named regions are shown as section headers in the minimap.")
      },
      "editor.minimap.showMarkSectionHeaders": {
        type: "boolean",
        default: defaults.showMarkSectionHeaders,
        description: localize("minimap.showMarkSectionHeaders", "Controls whether MARK: comments are shown as section headers in the minimap.")
      },
      "editor.minimap.sectionHeaderFontSize": {
        type: "number",
        default: defaults.sectionHeaderFontSize,
        description: localize("minimap.sectionHeaderFontSize", "Controls the font size of section headers in the minimap.")
      },
      "editor.minimap.sectionHeaderLetterSpacing": {
        type: "number",
        default: defaults.sectionHeaderLetterSpacing,
        description: localize("minimap.sectionHeaderLetterSpacing", "Controls the amount of space (in pixels) between characters of section header. This helps the readability of the header in small font sizes.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      enabled: boolean(input.enabled, this.defaultValue.enabled),
      autohide: boolean(input.autohide, this.defaultValue.autohide),
      size: stringSet(input.size, this.defaultValue.size, ["proportional", "fill", "fit"]),
      side: stringSet(input.side, this.defaultValue.side, ["right", "left"]),
      showSlider: stringSet(input.showSlider, this.defaultValue.showSlider, ["always", "mouseover"]),
      renderCharacters: boolean(input.renderCharacters, this.defaultValue.renderCharacters),
      scale: EditorIntOption.clampedInt(input.scale, 1, 1, 3),
      maxColumn: EditorIntOption.clampedInt(input.maxColumn, this.defaultValue.maxColumn, 1, 1e4),
      showRegionSectionHeaders: boolean(input.showRegionSectionHeaders, this.defaultValue.showRegionSectionHeaders),
      showMarkSectionHeaders: boolean(input.showMarkSectionHeaders, this.defaultValue.showMarkSectionHeaders),
      sectionHeaderFontSize: EditorFloatOption.clamp(input.sectionHeaderFontSize ?? this.defaultValue.sectionHeaderFontSize, 4, 32),
      sectionHeaderLetterSpacing: EditorFloatOption.clamp(input.sectionHeaderLetterSpacing ?? this.defaultValue.sectionHeaderLetterSpacing, 0, 5)
    };
  }
}
function _multiCursorModifierFromString(multiCursorModifier) {
  if (multiCursorModifier === "ctrlCmd") {
    return isMacintosh ? "metaKey" : "ctrlKey";
  }
  return "altKey";
}
class EditorPadding extends BaseEditorOption {
  constructor() {
    super(84, "padding", { top: 0, bottom: 0 }, {
      "editor.padding.top": {
        type: "number",
        default: 0,
        minimum: 0,
        maximum: 1e3,
        description: localize("padding.top", "Controls the amount of space between the top edge of the editor and the first line.")
      },
      "editor.padding.bottom": {
        type: "number",
        default: 0,
        minimum: 0,
        maximum: 1e3,
        description: localize("padding.bottom", "Controls the amount of space between the bottom edge of the editor and the last line.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      top: EditorIntOption.clampedInt(input.top, 0, 0, 1e3),
      bottom: EditorIntOption.clampedInt(input.bottom, 0, 0, 1e3)
    };
  }
}
class EditorParameterHints extends BaseEditorOption {
  constructor() {
    const defaults = {
      enabled: true,
      cycle: true
    };
    super(86, "parameterHints", defaults, {
      "editor.parameterHints.enabled": {
        type: "boolean",
        default: defaults.enabled,
        description: localize("parameterHints.enabled", "Enables a pop-up that shows parameter documentation and type information as you type.")
      },
      "editor.parameterHints.cycle": {
        type: "boolean",
        default: defaults.cycle,
        description: localize("parameterHints.cycle", "Controls whether the parameter hints menu cycles or closes when reaching the end of the list.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      enabled: boolean(input.enabled, this.defaultValue.enabled),
      cycle: boolean(input.cycle, this.defaultValue.cycle)
    };
  }
}
class EditorPixelRatio extends ComputedEditorOption {
  constructor() {
    super(
      144
      /* EditorOption.pixelRatio */
    );
  }
  compute(env, options, _) {
    return env.pixelRatio;
  }
}
class PlaceholderOption extends BaseEditorOption {
  constructor() {
    super(88, "placeholder", void 0);
  }
  validate(input) {
    if (typeof input === "undefined") {
      return this.defaultValue;
    }
    if (typeof input === "string") {
      return input;
    }
    return this.defaultValue;
  }
}
class EditorQuickSuggestions extends BaseEditorOption {
  constructor() {
    const defaults = {
      other: "on",
      comments: "off",
      strings: "off"
    };
    const types = [
      { type: "boolean" },
      {
        type: "string",
        enum: ["on", "inline", "off"],
        enumDescriptions: [localize("on", "Quick suggestions show inside the suggest widget"), localize("inline", "Quick suggestions show as ghost text"), localize("off", "Quick suggestions are disabled")]
      }
    ];
    super(90, "quickSuggestions", defaults, {
      type: "object",
      additionalProperties: false,
      properties: {
        strings: {
          anyOf: types,
          default: defaults.strings,
          description: localize("quickSuggestions.strings", "Enable quick suggestions inside strings.")
        },
        comments: {
          anyOf: types,
          default: defaults.comments,
          description: localize("quickSuggestions.comments", "Enable quick suggestions inside comments.")
        },
        other: {
          anyOf: types,
          default: defaults.other,
          description: localize("quickSuggestions.other", "Enable quick suggestions outside of strings and comments.")
        }
      },
      default: defaults,
      markdownDescription: localize("quickSuggestions", "Controls whether suggestions should automatically show up while typing. This can be controlled for typing in comments, strings, and other code. Quick suggestion can be configured to show as ghost text or with the suggest widget. Also be aware of the {0}-setting which controls if suggestions are triggered by special characters.", "`#editor.suggestOnTriggerCharacters#`")
    });
    this.defaultValue = defaults;
  }
  validate(input) {
    if (typeof input === "boolean") {
      const value = input ? "on" : "off";
      return { comments: value, strings: value, other: value };
    }
    if (!input || typeof input !== "object") {
      return this.defaultValue;
    }
    const { other, comments, strings } = input;
    const allowedValues = ["on", "inline", "off"];
    let validatedOther;
    let validatedComments;
    let validatedStrings;
    if (typeof other === "boolean") {
      validatedOther = other ? "on" : "off";
    } else {
      validatedOther = stringSet(other, this.defaultValue.other, allowedValues);
    }
    if (typeof comments === "boolean") {
      validatedComments = comments ? "on" : "off";
    } else {
      validatedComments = stringSet(comments, this.defaultValue.comments, allowedValues);
    }
    if (typeof strings === "boolean") {
      validatedStrings = strings ? "on" : "off";
    } else {
      validatedStrings = stringSet(strings, this.defaultValue.strings, allowedValues);
    }
    return {
      other: validatedOther,
      comments: validatedComments,
      strings: validatedStrings
    };
  }
}
class EditorRenderLineNumbersOption extends BaseEditorOption {
  constructor() {
    super(68, "lineNumbers", { renderType: 1, renderFn: null }, {
      type: "string",
      enum: ["off", "on", "relative", "interval"],
      enumDescriptions: [
        localize("lineNumbers.off", "Line numbers are not rendered."),
        localize("lineNumbers.on", "Line numbers are rendered as absolute number."),
        localize("lineNumbers.relative", "Line numbers are rendered as distance in lines to cursor position."),
        localize("lineNumbers.interval", "Line numbers are rendered every 10 lines.")
      ],
      default: "on",
      description: localize("lineNumbers", "Controls the display of line numbers.")
    });
  }
  validate(lineNumbers) {
    let renderType = this.defaultValue.renderType;
    let renderFn = this.defaultValue.renderFn;
    if (typeof lineNumbers !== "undefined") {
      if (typeof lineNumbers === "function") {
        renderType = 4;
        renderFn = lineNumbers;
      } else if (lineNumbers === "interval") {
        renderType = 3;
      } else if (lineNumbers === "relative") {
        renderType = 2;
      } else if (lineNumbers === "on") {
        renderType = 1;
      } else {
        renderType = 0;
      }
    }
    return {
      renderType,
      renderFn
    };
  }
}
function filterValidationDecorations(options) {
  const renderValidationDecorations = options.get(
    99
    /* EditorOption.renderValidationDecorations */
  );
  if (renderValidationDecorations === "editable") {
    return options.get(
      92
      /* EditorOption.readOnly */
    );
  }
  return renderValidationDecorations === "on" ? false : true;
}
class EditorRulers extends BaseEditorOption {
  constructor() {
    const defaults = [];
    const columnSchema = { type: "number", description: localize("rulers.size", "Number of monospace characters at which this editor ruler will render.") };
    super(103, "rulers", defaults, {
      type: "array",
      items: {
        anyOf: [
          columnSchema,
          {
            type: [
              "object"
            ],
            properties: {
              column: columnSchema,
              color: {
                type: "string",
                description: localize("rulers.color", "Color of this editor ruler."),
                format: "color-hex"
              }
            }
          }
        ]
      },
      default: defaults,
      description: localize("rulers", "Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers. No rulers are drawn if array is empty.")
    });
  }
  validate(input) {
    if (Array.isArray(input)) {
      const rulers = [];
      for (const _element of input) {
        if (typeof _element === "number") {
          rulers.push({
            column: EditorIntOption.clampedInt(_element, 0, 0, 1e4),
            color: null
          });
        } else if (_element && typeof _element === "object") {
          const element = _element;
          rulers.push({
            column: EditorIntOption.clampedInt(element.column, 0, 0, 1e4),
            color: element.color
          });
        }
      }
      rulers.sort((a, b) => a.column - b.column);
      return rulers;
    }
    return this.defaultValue;
  }
}
class ReadonlyMessage extends BaseEditorOption {
  constructor() {
    const defaults = void 0;
    super(93, "readOnlyMessage", defaults);
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    return _input;
  }
}
function _scrollbarVisibilityFromString(visibility, defaultValue) {
  if (typeof visibility !== "string") {
    return defaultValue;
  }
  switch (visibility) {
    case "hidden":
      return 2;
    case "visible":
      return 3;
    default:
      return 1;
  }
}
class EditorScrollbar extends BaseEditorOption {
  constructor() {
    const defaults = {
      vertical: 1,
      horizontal: 1,
      arrowSize: 11,
      useShadows: true,
      verticalHasArrows: false,
      horizontalHasArrows: false,
      horizontalScrollbarSize: 12,
      horizontalSliderSize: 12,
      verticalScrollbarSize: 14,
      verticalSliderSize: 14,
      handleMouseWheel: true,
      alwaysConsumeMouseWheel: true,
      scrollByPage: false,
      ignoreHorizontalScrollbarInContentHeight: false
    };
    super(104, "scrollbar", defaults, {
      "editor.scrollbar.vertical": {
        type: "string",
        enum: ["auto", "visible", "hidden"],
        enumDescriptions: [
          localize("scrollbar.vertical.auto", "The vertical scrollbar will be visible only when necessary."),
          localize("scrollbar.vertical.visible", "The vertical scrollbar will always be visible."),
          localize("scrollbar.vertical.fit", "The vertical scrollbar will always be hidden.")
        ],
        default: "auto",
        description: localize("scrollbar.vertical", "Controls the visibility of the vertical scrollbar.")
      },
      "editor.scrollbar.horizontal": {
        type: "string",
        enum: ["auto", "visible", "hidden"],
        enumDescriptions: [
          localize("scrollbar.horizontal.auto", "The horizontal scrollbar will be visible only when necessary."),
          localize("scrollbar.horizontal.visible", "The horizontal scrollbar will always be visible."),
          localize("scrollbar.horizontal.fit", "The horizontal scrollbar will always be hidden.")
        ],
        default: "auto",
        description: localize("scrollbar.horizontal", "Controls the visibility of the horizontal scrollbar.")
      },
      "editor.scrollbar.verticalScrollbarSize": {
        type: "number",
        default: defaults.verticalScrollbarSize,
        description: localize("scrollbar.verticalScrollbarSize", "The width of the vertical scrollbar.")
      },
      "editor.scrollbar.horizontalScrollbarSize": {
        type: "number",
        default: defaults.horizontalScrollbarSize,
        description: localize("scrollbar.horizontalScrollbarSize", "The height of the horizontal scrollbar.")
      },
      "editor.scrollbar.scrollByPage": {
        type: "boolean",
        default: defaults.scrollByPage,
        description: localize("scrollbar.scrollByPage", "Controls whether clicks scroll by page or jump to click position.")
      },
      "editor.scrollbar.ignoreHorizontalScrollbarInContentHeight": {
        type: "boolean",
        default: defaults.ignoreHorizontalScrollbarInContentHeight,
        description: localize("scrollbar.ignoreHorizontalScrollbarInContentHeight", "When set, the horizontal scrollbar will not increase the size of the editor's content.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    const horizontalScrollbarSize = EditorIntOption.clampedInt(input.horizontalScrollbarSize, this.defaultValue.horizontalScrollbarSize, 0, 1e3);
    const verticalScrollbarSize = EditorIntOption.clampedInt(input.verticalScrollbarSize, this.defaultValue.verticalScrollbarSize, 0, 1e3);
    return {
      arrowSize: EditorIntOption.clampedInt(input.arrowSize, this.defaultValue.arrowSize, 0, 1e3),
      vertical: _scrollbarVisibilityFromString(input.vertical, this.defaultValue.vertical),
      horizontal: _scrollbarVisibilityFromString(input.horizontal, this.defaultValue.horizontal),
      useShadows: boolean(input.useShadows, this.defaultValue.useShadows),
      verticalHasArrows: boolean(input.verticalHasArrows, this.defaultValue.verticalHasArrows),
      horizontalHasArrows: boolean(input.horizontalHasArrows, this.defaultValue.horizontalHasArrows),
      handleMouseWheel: boolean(input.handleMouseWheel, this.defaultValue.handleMouseWheel),
      alwaysConsumeMouseWheel: boolean(input.alwaysConsumeMouseWheel, this.defaultValue.alwaysConsumeMouseWheel),
      horizontalScrollbarSize,
      horizontalSliderSize: EditorIntOption.clampedInt(input.horizontalSliderSize, horizontalScrollbarSize, 0, 1e3),
      verticalScrollbarSize,
      verticalSliderSize: EditorIntOption.clampedInt(input.verticalSliderSize, verticalScrollbarSize, 0, 1e3),
      scrollByPage: boolean(input.scrollByPage, this.defaultValue.scrollByPage),
      ignoreHorizontalScrollbarInContentHeight: boolean(input.ignoreHorizontalScrollbarInContentHeight, this.defaultValue.ignoreHorizontalScrollbarInContentHeight)
    };
  }
}
const inUntrustedWorkspace = "inUntrustedWorkspace";
const unicodeHighlightConfigKeys = {
  allowedCharacters: "editor.unicodeHighlight.allowedCharacters",
  invisibleCharacters: "editor.unicodeHighlight.invisibleCharacters",
  nonBasicASCII: "editor.unicodeHighlight.nonBasicASCII",
  ambiguousCharacters: "editor.unicodeHighlight.ambiguousCharacters",
  includeComments: "editor.unicodeHighlight.includeComments",
  includeStrings: "editor.unicodeHighlight.includeStrings",
  allowedLocales: "editor.unicodeHighlight.allowedLocales"
};
class UnicodeHighlight extends BaseEditorOption {
  constructor() {
    const defaults = {
      nonBasicASCII: inUntrustedWorkspace,
      invisibleCharacters: true,
      ambiguousCharacters: true,
      includeComments: inUntrustedWorkspace,
      includeStrings: true,
      allowedCharacters: {},
      allowedLocales: { _os: true, _vscode: true }
    };
    super(126, "unicodeHighlight", defaults, {
      [unicodeHighlightConfigKeys.nonBasicASCII]: {
        restricted: true,
        type: ["boolean", "string"],
        enum: [true, false, inUntrustedWorkspace],
        default: defaults.nonBasicASCII,
        description: localize("unicodeHighlight.nonBasicASCII", "Controls whether all non-basic ASCII characters are highlighted. Only characters between U+0020 and U+007E, tab, line-feed and carriage-return are considered basic ASCII.")
      },
      [unicodeHighlightConfigKeys.invisibleCharacters]: {
        restricted: true,
        type: "boolean",
        default: defaults.invisibleCharacters,
        description: localize("unicodeHighlight.invisibleCharacters", "Controls whether characters that just reserve space or have no width at all are highlighted.")
      },
      [unicodeHighlightConfigKeys.ambiguousCharacters]: {
        restricted: true,
        type: "boolean",
        default: defaults.ambiguousCharacters,
        description: localize("unicodeHighlight.ambiguousCharacters", "Controls whether characters are highlighted that can be confused with basic ASCII characters, except those that are common in the current user locale.")
      },
      [unicodeHighlightConfigKeys.includeComments]: {
        restricted: true,
        type: ["boolean", "string"],
        enum: [true, false, inUntrustedWorkspace],
        default: defaults.includeComments,
        description: localize("unicodeHighlight.includeComments", "Controls whether characters in comments should also be subject to Unicode highlighting.")
      },
      [unicodeHighlightConfigKeys.includeStrings]: {
        restricted: true,
        type: ["boolean", "string"],
        enum: [true, false, inUntrustedWorkspace],
        default: defaults.includeStrings,
        description: localize("unicodeHighlight.includeStrings", "Controls whether characters in strings should also be subject to Unicode highlighting.")
      },
      [unicodeHighlightConfigKeys.allowedCharacters]: {
        restricted: true,
        type: "object",
        default: defaults.allowedCharacters,
        description: localize("unicodeHighlight.allowedCharacters", "Defines allowed characters that are not being highlighted."),
        additionalProperties: {
          type: "boolean"
        }
      },
      [unicodeHighlightConfigKeys.allowedLocales]: {
        restricted: true,
        type: "object",
        additionalProperties: {
          type: "boolean"
        },
        default: defaults.allowedLocales,
        description: localize("unicodeHighlight.allowedLocales", "Unicode characters that are common in allowed locales are not being highlighted.")
      }
    });
  }
  applyUpdate(value, update) {
    let didChange = false;
    if (update.allowedCharacters && value) {
      if (!equals(value.allowedCharacters, update.allowedCharacters)) {
        value = { ...value, allowedCharacters: update.allowedCharacters };
        didChange = true;
      }
    }
    if (update.allowedLocales && value) {
      if (!equals(value.allowedLocales, update.allowedLocales)) {
        value = { ...value, allowedLocales: update.allowedLocales };
        didChange = true;
      }
    }
    const result = super.applyUpdate(value, update);
    if (didChange) {
      return new ApplyUpdateResult(result.newValue, true);
    }
    return result;
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      nonBasicASCII: primitiveSet(input.nonBasicASCII, inUntrustedWorkspace, [true, false, inUntrustedWorkspace]),
      invisibleCharacters: boolean(input.invisibleCharacters, this.defaultValue.invisibleCharacters),
      ambiguousCharacters: boolean(input.ambiguousCharacters, this.defaultValue.ambiguousCharacters),
      includeComments: primitiveSet(input.includeComments, inUntrustedWorkspace, [true, false, inUntrustedWorkspace]),
      includeStrings: primitiveSet(input.includeStrings, inUntrustedWorkspace, [true, false, inUntrustedWorkspace]),
      allowedCharacters: this.validateBooleanMap(_input.allowedCharacters, this.defaultValue.allowedCharacters),
      allowedLocales: this.validateBooleanMap(_input.allowedLocales, this.defaultValue.allowedLocales)
    };
  }
  validateBooleanMap(map, defaultValue) {
    if (typeof map !== "object" || !map) {
      return defaultValue;
    }
    const result = {};
    for (const [key, value] of Object.entries(map)) {
      if (value === true) {
        result[key] = true;
      }
    }
    return result;
  }
}
class InlineEditorSuggest extends BaseEditorOption {
  constructor() {
    const defaults = {
      enabled: true,
      mode: "subwordSmart",
      showToolbar: "onHover",
      suppressSuggestions: false,
      keepOnBlur: false,
      fontFamily: "default"
    };
    super(62, "inlineSuggest", defaults, {
      "editor.inlineSuggest.enabled": {
        type: "boolean",
        default: defaults.enabled,
        description: localize("inlineSuggest.enabled", "Controls whether to automatically show inline suggestions in the editor.")
      },
      "editor.inlineSuggest.showToolbar": {
        type: "string",
        default: defaults.showToolbar,
        enum: ["always", "onHover", "never"],
        enumDescriptions: [
          localize("inlineSuggest.showToolbar.always", "Show the inline suggestion toolbar whenever an inline suggestion is shown."),
          localize("inlineSuggest.showToolbar.onHover", "Show the inline suggestion toolbar when hovering over an inline suggestion."),
          localize("inlineSuggest.showToolbar.never", "Never show the inline suggestion toolbar.")
        ],
        description: localize("inlineSuggest.showToolbar", "Controls when to show the inline suggestion toolbar.")
      },
      "editor.inlineSuggest.suppressSuggestions": {
        type: "boolean",
        default: defaults.suppressSuggestions,
        description: localize("inlineSuggest.suppressSuggestions", "Controls how inline suggestions interact with the suggest widget. If enabled, the suggest widget is not shown automatically when inline suggestions are available.")
      },
      "editor.inlineSuggest.fontFamily": {
        type: "string",
        default: defaults.fontFamily,
        description: localize("inlineSuggest.fontFamily", "Controls the font family of the inline suggestions.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      enabled: boolean(input.enabled, this.defaultValue.enabled),
      mode: stringSet(input.mode, this.defaultValue.mode, ["prefix", "subword", "subwordSmart"]),
      showToolbar: stringSet(input.showToolbar, this.defaultValue.showToolbar, ["always", "onHover", "never"]),
      suppressSuggestions: boolean(input.suppressSuggestions, this.defaultValue.suppressSuggestions),
      keepOnBlur: boolean(input.keepOnBlur, this.defaultValue.keepOnBlur),
      fontFamily: EditorStringOption.string(input.fontFamily, this.defaultValue.fontFamily)
    };
  }
}
class InlineEditorEdit extends BaseEditorOption {
  constructor() {
    const defaults = {
      enabled: false,
      showToolbar: "onHover",
      fontFamily: "default",
      keepOnBlur: false
    };
    super(63, "experimentalInlineEdit", defaults, {
      "editor.experimentalInlineEdit.enabled": {
        type: "boolean",
        default: defaults.enabled,
        description: localize("inlineEdit.enabled", "Controls whether to show inline edits in the editor.")
      },
      "editor.experimentalInlineEdit.showToolbar": {
        type: "string",
        default: defaults.showToolbar,
        enum: ["always", "onHover", "never"],
        enumDescriptions: [
          localize("inlineEdit.showToolbar.always", "Show the inline edit toolbar whenever an inline suggestion is shown."),
          localize("inlineEdit.showToolbar.onHover", "Show the inline edit toolbar when hovering over an inline suggestion."),
          localize("inlineEdit.showToolbar.never", "Never show the inline edit toolbar.")
        ],
        description: localize("inlineEdit.showToolbar", "Controls when to show the inline edit toolbar.")
      },
      "editor.experimentalInlineEdit.fontFamily": {
        type: "string",
        default: defaults.fontFamily,
        description: localize("inlineEdit.fontFamily", "Controls the font family of the inline edit.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      enabled: boolean(input.enabled, this.defaultValue.enabled),
      showToolbar: stringSet(input.showToolbar, this.defaultValue.showToolbar, ["always", "onHover", "never"]),
      fontFamily: EditorStringOption.string(input.fontFamily, this.defaultValue.fontFamily),
      keepOnBlur: boolean(input.keepOnBlur, this.defaultValue.keepOnBlur)
    };
  }
}
class BracketPairColorization extends BaseEditorOption {
  constructor() {
    const defaults = {
      enabled: EDITOR_MODEL_DEFAULTS.bracketPairColorizationOptions.enabled,
      independentColorPoolPerBracketType: EDITOR_MODEL_DEFAULTS.bracketPairColorizationOptions.independentColorPoolPerBracketType
    };
    super(15, "bracketPairColorization", defaults, {
      "editor.bracketPairColorization.enabled": {
        type: "boolean",
        default: defaults.enabled,
        markdownDescription: localize("bracketPairColorization.enabled", "Controls whether bracket pair colorization is enabled or not. Use {0} to override the bracket highlight colors.", "`#workbench.colorCustomizations#`")
      },
      "editor.bracketPairColorization.independentColorPoolPerBracketType": {
        type: "boolean",
        default: defaults.independentColorPoolPerBracketType,
        description: localize("bracketPairColorization.independentColorPoolPerBracketType", "Controls whether each bracket type has its own independent color pool.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      enabled: boolean(input.enabled, this.defaultValue.enabled),
      independentColorPoolPerBracketType: boolean(input.independentColorPoolPerBracketType, this.defaultValue.independentColorPoolPerBracketType)
    };
  }
}
class GuideOptions extends BaseEditorOption {
  constructor() {
    const defaults = {
      bracketPairs: false,
      bracketPairsHorizontal: "active",
      highlightActiveBracketPair: true,
      indentation: true,
      highlightActiveIndentation: true
    };
    super(16, "guides", defaults, {
      "editor.guides.bracketPairs": {
        type: ["boolean", "string"],
        enum: [true, "active", false],
        enumDescriptions: [
          localize("editor.guides.bracketPairs.true", "Enables bracket pair guides."),
          localize("editor.guides.bracketPairs.active", "Enables bracket pair guides only for the active bracket pair."),
          localize("editor.guides.bracketPairs.false", "Disables bracket pair guides.")
        ],
        default: defaults.bracketPairs,
        description: localize("editor.guides.bracketPairs", "Controls whether bracket pair guides are enabled or not.")
      },
      "editor.guides.bracketPairsHorizontal": {
        type: ["boolean", "string"],
        enum: [true, "active", false],
        enumDescriptions: [
          localize("editor.guides.bracketPairsHorizontal.true", "Enables horizontal guides as addition to vertical bracket pair guides."),
          localize("editor.guides.bracketPairsHorizontal.active", "Enables horizontal guides only for the active bracket pair."),
          localize("editor.guides.bracketPairsHorizontal.false", "Disables horizontal bracket pair guides.")
        ],
        default: defaults.bracketPairsHorizontal,
        description: localize("editor.guides.bracketPairsHorizontal", "Controls whether horizontal bracket pair guides are enabled or not.")
      },
      "editor.guides.highlightActiveBracketPair": {
        type: "boolean",
        default: defaults.highlightActiveBracketPair,
        description: localize("editor.guides.highlightActiveBracketPair", "Controls whether the editor should highlight the active bracket pair.")
      },
      "editor.guides.indentation": {
        type: "boolean",
        default: defaults.indentation,
        description: localize("editor.guides.indentation", "Controls whether the editor should render indent guides.")
      },
      "editor.guides.highlightActiveIndentation": {
        type: ["boolean", "string"],
        enum: [true, "always", false],
        enumDescriptions: [
          localize("editor.guides.highlightActiveIndentation.true", "Highlights the active indent guide."),
          localize("editor.guides.highlightActiveIndentation.always", "Highlights the active indent guide even if bracket guides are highlighted."),
          localize("editor.guides.highlightActiveIndentation.false", "Do not highlight the active indent guide.")
        ],
        default: defaults.highlightActiveIndentation,
        description: localize("editor.guides.highlightActiveIndentation", "Controls whether the editor should highlight the active indent guide.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      bracketPairs: primitiveSet(input.bracketPairs, this.defaultValue.bracketPairs, [true, false, "active"]),
      bracketPairsHorizontal: primitiveSet(input.bracketPairsHorizontal, this.defaultValue.bracketPairsHorizontal, [true, false, "active"]),
      highlightActiveBracketPair: boolean(input.highlightActiveBracketPair, this.defaultValue.highlightActiveBracketPair),
      indentation: boolean(input.indentation, this.defaultValue.indentation),
      highlightActiveIndentation: primitiveSet(input.highlightActiveIndentation, this.defaultValue.highlightActiveIndentation, [true, false, "always"])
    };
  }
}
function primitiveSet(value, defaultValue, allowedValues) {
  const idx = allowedValues.indexOf(value);
  if (idx === -1) {
    return defaultValue;
  }
  return allowedValues[idx];
}
class EditorSuggest extends BaseEditorOption {
  constructor() {
    const defaults = {
      insertMode: "insert",
      filterGraceful: true,
      snippetsPreventQuickSuggestions: false,
      localityBonus: false,
      shareSuggestSelections: false,
      selectionMode: "always",
      showIcons: true,
      showStatusBar: false,
      preview: false,
      previewMode: "subwordSmart",
      showInlineDetails: true,
      showMethods: true,
      showFunctions: true,
      showConstructors: true,
      showDeprecated: true,
      matchOnWordStartOnly: true,
      showFields: true,
      showVariables: true,
      showClasses: true,
      showStructs: true,
      showInterfaces: true,
      showModules: true,
      showProperties: true,
      showEvents: true,
      showOperators: true,
      showUnits: true,
      showValues: true,
      showConstants: true,
      showEnums: true,
      showEnumMembers: true,
      showKeywords: true,
      showWords: true,
      showColors: true,
      showFiles: true,
      showReferences: true,
      showFolders: true,
      showTypeParameters: true,
      showSnippets: true,
      showUsers: true,
      showIssues: true
    };
    super(119, "suggest", defaults, {
      "editor.suggest.insertMode": {
        type: "string",
        enum: ["insert", "replace"],
        enumDescriptions: [
          localize("suggest.insertMode.insert", "Insert suggestion without overwriting text right of the cursor."),
          localize("suggest.insertMode.replace", "Insert suggestion and overwrite text right of the cursor.")
        ],
        default: defaults.insertMode,
        description: localize("suggest.insertMode", "Controls whether words are overwritten when accepting completions. Note that this depends on extensions opting into this feature.")
      },
      "editor.suggest.filterGraceful": {
        type: "boolean",
        default: defaults.filterGraceful,
        description: localize("suggest.filterGraceful", "Controls whether filtering and sorting suggestions accounts for small typos.")
      },
      "editor.suggest.localityBonus": {
        type: "boolean",
        default: defaults.localityBonus,
        description: localize("suggest.localityBonus", "Controls whether sorting favors words that appear close to the cursor.")
      },
      "editor.suggest.shareSuggestSelections": {
        type: "boolean",
        default: defaults.shareSuggestSelections,
        markdownDescription: localize("suggest.shareSuggestSelections", "Controls whether remembered suggestion selections are shared between multiple workspaces and windows (needs `#editor.suggestSelection#`).")
      },
      "editor.suggest.selectionMode": {
        type: "string",
        enum: ["always", "never", "whenTriggerCharacter", "whenQuickSuggestion"],
        enumDescriptions: [
          localize("suggest.insertMode.always", "Always select a suggestion when automatically triggering IntelliSense."),
          localize("suggest.insertMode.never", "Never select a suggestion when automatically triggering IntelliSense."),
          localize("suggest.insertMode.whenTriggerCharacter", "Select a suggestion only when triggering IntelliSense from a trigger character."),
          localize("suggest.insertMode.whenQuickSuggestion", "Select a suggestion only when triggering IntelliSense as you type.")
        ],
        default: defaults.selectionMode,
        markdownDescription: localize("suggest.selectionMode", "Controls whether a suggestion is selected when the widget shows. Note that this only applies to automatically triggered suggestions ({0} and {1}) and that a suggestion is always selected when explicitly invoked, e.g via `Ctrl+Space`.", "`#editor.quickSuggestions#`", "`#editor.suggestOnTriggerCharacters#`")
      },
      "editor.suggest.snippetsPreventQuickSuggestions": {
        type: "boolean",
        default: defaults.snippetsPreventQuickSuggestions,
        description: localize("suggest.snippetsPreventQuickSuggestions", "Controls whether an active snippet prevents quick suggestions.")
      },
      "editor.suggest.showIcons": {
        type: "boolean",
        default: defaults.showIcons,
        description: localize("suggest.showIcons", "Controls whether to show or hide icons in suggestions.")
      },
      "editor.suggest.showStatusBar": {
        type: "boolean",
        default: defaults.showStatusBar,
        description: localize("suggest.showStatusBar", "Controls the visibility of the status bar at the bottom of the suggest widget.")
      },
      "editor.suggest.preview": {
        type: "boolean",
        default: defaults.preview,
        description: localize("suggest.preview", "Controls whether to preview the suggestion outcome in the editor.")
      },
      "editor.suggest.showInlineDetails": {
        type: "boolean",
        default: defaults.showInlineDetails,
        description: localize("suggest.showInlineDetails", "Controls whether suggest details show inline with the label or only in the details widget.")
      },
      "editor.suggest.maxVisibleSuggestions": {
        type: "number",
        deprecationMessage: localize("suggest.maxVisibleSuggestions.dep", "This setting is deprecated. The suggest widget can now be resized.")
      },
      "editor.suggest.filteredTypes": {
        type: "object",
        deprecationMessage: localize("deprecated", "This setting is deprecated, please use separate settings like 'editor.suggest.showKeywords' or 'editor.suggest.showSnippets' instead.")
      },
      "editor.suggest.showMethods": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showMethods", "When enabled IntelliSense shows `method`-suggestions.")
      },
      "editor.suggest.showFunctions": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showFunctions", "When enabled IntelliSense shows `function`-suggestions.")
      },
      "editor.suggest.showConstructors": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showConstructors", "When enabled IntelliSense shows `constructor`-suggestions.")
      },
      "editor.suggest.showDeprecated": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showDeprecated", "When enabled IntelliSense shows `deprecated`-suggestions.")
      },
      "editor.suggest.matchOnWordStartOnly": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.matchOnWordStartOnly", "When enabled IntelliSense filtering requires that the first character matches on a word start. For example, `c` on `Console` or `WebContext` but _not_ on `description`. When disabled IntelliSense will show more results but still sorts them by match quality.")
      },
      "editor.suggest.showFields": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showFields", "When enabled IntelliSense shows `field`-suggestions.")
      },
      "editor.suggest.showVariables": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showVariables", "When enabled IntelliSense shows `variable`-suggestions.")
      },
      "editor.suggest.showClasses": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showClasss", "When enabled IntelliSense shows `class`-suggestions.")
      },
      "editor.suggest.showStructs": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showStructs", "When enabled IntelliSense shows `struct`-suggestions.")
      },
      "editor.suggest.showInterfaces": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showInterfaces", "When enabled IntelliSense shows `interface`-suggestions.")
      },
      "editor.suggest.showModules": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showModules", "When enabled IntelliSense shows `module`-suggestions.")
      },
      "editor.suggest.showProperties": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showPropertys", "When enabled IntelliSense shows `property`-suggestions.")
      },
      "editor.suggest.showEvents": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showEvents", "When enabled IntelliSense shows `event`-suggestions.")
      },
      "editor.suggest.showOperators": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showOperators", "When enabled IntelliSense shows `operator`-suggestions.")
      },
      "editor.suggest.showUnits": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showUnits", "When enabled IntelliSense shows `unit`-suggestions.")
      },
      "editor.suggest.showValues": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showValues", "When enabled IntelliSense shows `value`-suggestions.")
      },
      "editor.suggest.showConstants": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showConstants", "When enabled IntelliSense shows `constant`-suggestions.")
      },
      "editor.suggest.showEnums": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showEnums", "When enabled IntelliSense shows `enum`-suggestions.")
      },
      "editor.suggest.showEnumMembers": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showEnumMembers", "When enabled IntelliSense shows `enumMember`-suggestions.")
      },
      "editor.suggest.showKeywords": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showKeywords", "When enabled IntelliSense shows `keyword`-suggestions.")
      },
      "editor.suggest.showWords": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showTexts", "When enabled IntelliSense shows `text`-suggestions.")
      },
      "editor.suggest.showColors": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showColors", "When enabled IntelliSense shows `color`-suggestions.")
      },
      "editor.suggest.showFiles": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showFiles", "When enabled IntelliSense shows `file`-suggestions.")
      },
      "editor.suggest.showReferences": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showReferences", "When enabled IntelliSense shows `reference`-suggestions.")
      },
      "editor.suggest.showCustomcolors": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showCustomcolors", "When enabled IntelliSense shows `customcolor`-suggestions.")
      },
      "editor.suggest.showFolders": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showFolders", "When enabled IntelliSense shows `folder`-suggestions.")
      },
      "editor.suggest.showTypeParameters": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showTypeParameters", "When enabled IntelliSense shows `typeParameter`-suggestions.")
      },
      "editor.suggest.showSnippets": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showSnippets", "When enabled IntelliSense shows `snippet`-suggestions.")
      },
      "editor.suggest.showUsers": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showUsers", "When enabled IntelliSense shows `user`-suggestions.")
      },
      "editor.suggest.showIssues": {
        type: "boolean",
        default: true,
        markdownDescription: localize("editor.suggest.showIssues", "When enabled IntelliSense shows `issues`-suggestions.")
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      insertMode: stringSet(input.insertMode, this.defaultValue.insertMode, ["insert", "replace"]),
      filterGraceful: boolean(input.filterGraceful, this.defaultValue.filterGraceful),
      snippetsPreventQuickSuggestions: boolean(input.snippetsPreventQuickSuggestions, this.defaultValue.filterGraceful),
      localityBonus: boolean(input.localityBonus, this.defaultValue.localityBonus),
      shareSuggestSelections: boolean(input.shareSuggestSelections, this.defaultValue.shareSuggestSelections),
      selectionMode: stringSet(input.selectionMode, this.defaultValue.selectionMode, ["always", "never", "whenQuickSuggestion", "whenTriggerCharacter"]),
      showIcons: boolean(input.showIcons, this.defaultValue.showIcons),
      showStatusBar: boolean(input.showStatusBar, this.defaultValue.showStatusBar),
      preview: boolean(input.preview, this.defaultValue.preview),
      previewMode: stringSet(input.previewMode, this.defaultValue.previewMode, ["prefix", "subword", "subwordSmart"]),
      showInlineDetails: boolean(input.showInlineDetails, this.defaultValue.showInlineDetails),
      showMethods: boolean(input.showMethods, this.defaultValue.showMethods),
      showFunctions: boolean(input.showFunctions, this.defaultValue.showFunctions),
      showConstructors: boolean(input.showConstructors, this.defaultValue.showConstructors),
      showDeprecated: boolean(input.showDeprecated, this.defaultValue.showDeprecated),
      matchOnWordStartOnly: boolean(input.matchOnWordStartOnly, this.defaultValue.matchOnWordStartOnly),
      showFields: boolean(input.showFields, this.defaultValue.showFields),
      showVariables: boolean(input.showVariables, this.defaultValue.showVariables),
      showClasses: boolean(input.showClasses, this.defaultValue.showClasses),
      showStructs: boolean(input.showStructs, this.defaultValue.showStructs),
      showInterfaces: boolean(input.showInterfaces, this.defaultValue.showInterfaces),
      showModules: boolean(input.showModules, this.defaultValue.showModules),
      showProperties: boolean(input.showProperties, this.defaultValue.showProperties),
      showEvents: boolean(input.showEvents, this.defaultValue.showEvents),
      showOperators: boolean(input.showOperators, this.defaultValue.showOperators),
      showUnits: boolean(input.showUnits, this.defaultValue.showUnits),
      showValues: boolean(input.showValues, this.defaultValue.showValues),
      showConstants: boolean(input.showConstants, this.defaultValue.showConstants),
      showEnums: boolean(input.showEnums, this.defaultValue.showEnums),
      showEnumMembers: boolean(input.showEnumMembers, this.defaultValue.showEnumMembers),
      showKeywords: boolean(input.showKeywords, this.defaultValue.showKeywords),
      showWords: boolean(input.showWords, this.defaultValue.showWords),
      showColors: boolean(input.showColors, this.defaultValue.showColors),
      showFiles: boolean(input.showFiles, this.defaultValue.showFiles),
      showReferences: boolean(input.showReferences, this.defaultValue.showReferences),
      showFolders: boolean(input.showFolders, this.defaultValue.showFolders),
      showTypeParameters: boolean(input.showTypeParameters, this.defaultValue.showTypeParameters),
      showSnippets: boolean(input.showSnippets, this.defaultValue.showSnippets),
      showUsers: boolean(input.showUsers, this.defaultValue.showUsers),
      showIssues: boolean(input.showIssues, this.defaultValue.showIssues)
    };
  }
}
class SmartSelect extends BaseEditorOption {
  constructor() {
    super(114, "smartSelect", {
      selectLeadingAndTrailingWhitespace: true,
      selectSubwords: true
    }, {
      "editor.smartSelect.selectLeadingAndTrailingWhitespace": {
        description: localize("selectLeadingAndTrailingWhitespace", "Whether leading and trailing whitespace should always be selected."),
        default: true,
        type: "boolean"
      },
      "editor.smartSelect.selectSubwords": {
        description: localize("selectSubwords", "Whether subwords (like 'foo' in 'fooBar' or 'foo_bar') should be selected."),
        default: true,
        type: "boolean"
      }
    });
  }
  validate(input) {
    if (!input || typeof input !== "object") {
      return this.defaultValue;
    }
    return {
      selectLeadingAndTrailingWhitespace: boolean(input.selectLeadingAndTrailingWhitespace, this.defaultValue.selectLeadingAndTrailingWhitespace),
      selectSubwords: boolean(input.selectSubwords, this.defaultValue.selectSubwords)
    };
  }
}
class WordSegmenterLocales extends BaseEditorOption {
  constructor() {
    const defaults = [];
    super(131, "wordSegmenterLocales", defaults, {
      anyOf: [
        {
          description: localize("wordSegmenterLocales", "Locales to be used for word segmentation when doing word related navigations or operations. Specify the BCP 47 language tag of the word you wish to recognize (e.g., ja, zh-CN, zh-Hant-TW, etc.)."),
          type: "string"
        },
        {
          description: localize("wordSegmenterLocales", "Locales to be used for word segmentation when doing word related navigations or operations. Specify the BCP 47 language tag of the word you wish to recognize (e.g., ja, zh-CN, zh-Hant-TW, etc.)."),
          type: "array",
          items: {
            type: "string"
          }
        }
      ]
    });
  }
  validate(input) {
    if (typeof input === "string") {
      input = [input];
    }
    if (Array.isArray(input)) {
      const validLocales = [];
      for (const locale of input) {
        if (typeof locale === "string") {
          try {
            if (Intl.Segmenter.supportedLocalesOf(locale).length > 0) {
              validLocales.push(locale);
            }
          } catch {
          }
        }
      }
      return validLocales;
    }
    return this.defaultValue;
  }
}
class WrappingIndentOption extends BaseEditorOption {
  constructor() {
    super(139, "wrappingIndent", 1, {
      "editor.wrappingIndent": {
        type: "string",
        enum: ["none", "same", "indent", "deepIndent"],
        enumDescriptions: [
          localize("wrappingIndent.none", "No indentation. Wrapped lines begin at column 1."),
          localize("wrappingIndent.same", "Wrapped lines get the same indentation as the parent."),
          localize("wrappingIndent.indent", "Wrapped lines get +1 indentation toward the parent."),
          localize("wrappingIndent.deepIndent", "Wrapped lines get +2 indentation toward the parent.")
        ],
        description: localize("wrappingIndent", "Controls the indentation of wrapped lines."),
        default: "same"
      }
    });
  }
  validate(input) {
    switch (input) {
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
  compute(env, options, value) {
    const accessibilitySupport = options.get(
      2
      /* EditorOption.accessibilitySupport */
    );
    if (accessibilitySupport === 2) {
      return 0;
    }
    return value;
  }
}
class EditorWrappingInfoComputer extends ComputedEditorOption {
  constructor() {
    super(
      147
      /* EditorOption.wrappingInfo */
    );
  }
  compute(env, options, _) {
    const layoutInfo = options.get(
      146
      /* EditorOption.layoutInfo */
    );
    return {
      isDominatedByLongLines: env.isDominatedByLongLines,
      isWordWrapMinified: layoutInfo.isWordWrapMinified,
      isViewportWrapping: layoutInfo.isViewportWrapping,
      wrappingColumn: layoutInfo.wrappingColumn
    };
  }
}
class EditorDropIntoEditor extends BaseEditorOption {
  constructor() {
    const defaults = { enabled: true, showDropSelector: "afterDrop" };
    super(36, "dropIntoEditor", defaults, {
      "editor.dropIntoEditor.enabled": {
        type: "boolean",
        default: defaults.enabled,
        markdownDescription: localize("dropIntoEditor.enabled", "Controls whether you can drag and drop a file into a text editor by holding down the `Shift` key (instead of opening the file in an editor).")
      },
      "editor.dropIntoEditor.showDropSelector": {
        type: "string",
        markdownDescription: localize("dropIntoEditor.showDropSelector", "Controls if a widget is shown when dropping files into the editor. This widget lets you control how the file is dropped."),
        enum: [
          "afterDrop",
          "never"
        ],
        enumDescriptions: [
          localize("dropIntoEditor.showDropSelector.afterDrop", "Show the drop selector widget after a file is dropped into the editor."),
          localize("dropIntoEditor.showDropSelector.never", "Never show the drop selector widget. Instead the default drop provider is always used.")
        ],
        default: "afterDrop"
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      enabled: boolean(input.enabled, this.defaultValue.enabled),
      showDropSelector: stringSet(input.showDropSelector, this.defaultValue.showDropSelector, ["afterDrop", "never"])
    };
  }
}
class EditorPasteAs extends BaseEditorOption {
  constructor() {
    const defaults = { enabled: true, showPasteSelector: "afterPaste" };
    super(85, "pasteAs", defaults, {
      "editor.pasteAs.enabled": {
        type: "boolean",
        default: defaults.enabled,
        markdownDescription: localize("pasteAs.enabled", "Controls whether you can paste content in different ways.")
      },
      "editor.pasteAs.showPasteSelector": {
        type: "string",
        markdownDescription: localize("pasteAs.showPasteSelector", "Controls if a widget is shown when pasting content in to the editor. This widget lets you control how the file is pasted."),
        enum: [
          "afterPaste",
          "never"
        ],
        enumDescriptions: [
          localize("pasteAs.showPasteSelector.afterPaste", "Show the paste selector widget after content is pasted into the editor."),
          localize("pasteAs.showPasteSelector.never", "Never show the paste selector widget. Instead the default pasting behavior is always used.")
        ],
        default: "afterPaste"
      }
    });
  }
  validate(_input) {
    if (!_input || typeof _input !== "object") {
      return this.defaultValue;
    }
    const input = _input;
    return {
      enabled: boolean(input.enabled, this.defaultValue.enabled),
      showPasteSelector: stringSet(input.showPasteSelector, this.defaultValue.showPasteSelector, ["afterPaste", "never"])
    };
  }
}
const DEFAULT_WINDOWS_FONT_FAMILY = "Consolas, 'Courier New', monospace";
const DEFAULT_MAC_FONT_FAMILY = "Menlo, Monaco, 'Courier New', monospace";
const DEFAULT_LINUX_FONT_FAMILY = "'Droid Sans Mono', 'monospace', monospace";
const EDITOR_FONT_DEFAULTS = {
  fontFamily: isMacintosh ? DEFAULT_MAC_FONT_FAMILY : isLinux ? DEFAULT_LINUX_FONT_FAMILY : DEFAULT_WINDOWS_FONT_FAMILY,
  fontWeight: "normal",
  fontSize: isMacintosh ? 12 : 14,
  lineHeight: 0,
  letterSpacing: 0
};
const editorOptionsRegistry = [];
function register(option) {
  editorOptionsRegistry[option.id] = option;
  return option;
}
const EditorOptions = {
  acceptSuggestionOnCommitCharacter: register(new EditorBooleanOption(0, "acceptSuggestionOnCommitCharacter", true, { markdownDescription: localize("acceptSuggestionOnCommitCharacter", "Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`;`) can be a commit character that accepts a suggestion and types that character.") })),
  acceptSuggestionOnEnter: register(new EditorStringEnumOption(1, "acceptSuggestionOnEnter", "on", ["on", "smart", "off"], {
    markdownEnumDescriptions: [
      "",
      localize("acceptSuggestionOnEnterSmart", "Only accept a suggestion with `Enter` when it makes a textual change."),
      ""
    ],
    markdownDescription: localize("acceptSuggestionOnEnter", "Controls whether suggestions should be accepted on `Enter`, in addition to `Tab`. Helps to avoid ambiguity between inserting new lines or accepting suggestions.")
  })),
  accessibilitySupport: register(new EditorAccessibilitySupport()),
  accessibilityPageSize: register(new EditorIntOption(3, "accessibilityPageSize", 10, 1, 1073741824, {
    description: localize("accessibilityPageSize", "Controls the number of lines in the editor that can be read out by a screen reader at once. When we detect a screen reader we automatically set the default to be 500. Warning: this has a performance implication for numbers larger than the default."),
    tags: ["accessibility"]
  })),
  ariaLabel: register(new EditorStringOption(4, "ariaLabel", localize("editorViewAccessibleLabel", "Editor content"))),
  ariaRequired: register(new EditorBooleanOption(5, "ariaRequired", false, void 0)),
  screenReaderAnnounceInlineSuggestion: register(new EditorBooleanOption(8, "screenReaderAnnounceInlineSuggestion", true, {
    description: localize("screenReaderAnnounceInlineSuggestion", "Control whether inline suggestions are announced by a screen reader."),
    tags: ["accessibility"]
  })),
  autoClosingBrackets: register(new EditorStringEnumOption(6, "autoClosingBrackets", "languageDefined", ["always", "languageDefined", "beforeWhitespace", "never"], {
    enumDescriptions: [
      "",
      localize("editor.autoClosingBrackets.languageDefined", "Use language configurations to determine when to autoclose brackets."),
      localize("editor.autoClosingBrackets.beforeWhitespace", "Autoclose brackets only when the cursor is to the left of whitespace."),
      ""
    ],
    description: localize("autoClosingBrackets", "Controls whether the editor should automatically close brackets after the user adds an opening bracket.")
  })),
  autoClosingComments: register(new EditorStringEnumOption(7, "autoClosingComments", "languageDefined", ["always", "languageDefined", "beforeWhitespace", "never"], {
    enumDescriptions: [
      "",
      localize("editor.autoClosingComments.languageDefined", "Use language configurations to determine when to autoclose comments."),
      localize("editor.autoClosingComments.beforeWhitespace", "Autoclose comments only when the cursor is to the left of whitespace."),
      ""
    ],
    description: localize("autoClosingComments", "Controls whether the editor should automatically close comments after the user adds an opening comment.")
  })),
  autoClosingDelete: register(new EditorStringEnumOption(9, "autoClosingDelete", "auto", ["always", "auto", "never"], {
    enumDescriptions: [
      "",
      localize("editor.autoClosingDelete.auto", "Remove adjacent closing quotes or brackets only if they were automatically inserted."),
      ""
    ],
    description: localize("autoClosingDelete", "Controls whether the editor should remove adjacent closing quotes or brackets when deleting.")
  })),
  autoClosingOvertype: register(new EditorStringEnumOption(10, "autoClosingOvertype", "auto", ["always", "auto", "never"], {
    enumDescriptions: [
      "",
      localize("editor.autoClosingOvertype.auto", "Type over closing quotes or brackets only if they were automatically inserted."),
      ""
    ],
    description: localize("autoClosingOvertype", "Controls whether the editor should type over closing quotes or brackets.")
  })),
  autoClosingQuotes: register(new EditorStringEnumOption(11, "autoClosingQuotes", "languageDefined", ["always", "languageDefined", "beforeWhitespace", "never"], {
    enumDescriptions: [
      "",
      localize("editor.autoClosingQuotes.languageDefined", "Use language configurations to determine when to autoclose quotes."),
      localize("editor.autoClosingQuotes.beforeWhitespace", "Autoclose quotes only when the cursor is to the left of whitespace."),
      ""
    ],
    description: localize("autoClosingQuotes", "Controls whether the editor should automatically close quotes after the user adds an opening quote.")
  })),
  autoIndent: register(new EditorEnumOption(12, "autoIndent", 4, "full", ["none", "keep", "brackets", "advanced", "full"], _autoIndentFromString, {
    enumDescriptions: [
      localize("editor.autoIndent.none", "The editor will not insert indentation automatically."),
      localize("editor.autoIndent.keep", "The editor will keep the current line's indentation."),
      localize("editor.autoIndent.brackets", "The editor will keep the current line's indentation and honor language defined brackets."),
      localize("editor.autoIndent.advanced", "The editor will keep the current line's indentation, honor language defined brackets and invoke special onEnterRules defined by languages."),
      localize("editor.autoIndent.full", "The editor will keep the current line's indentation, honor language defined brackets, invoke special onEnterRules defined by languages, and honor indentationRules defined by languages.")
    ],
    description: localize("autoIndent", "Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.")
  })),
  automaticLayout: register(new EditorBooleanOption(13, "automaticLayout", false)),
  autoSurround: register(new EditorStringEnumOption(14, "autoSurround", "languageDefined", ["languageDefined", "quotes", "brackets", "never"], {
    enumDescriptions: [
      localize("editor.autoSurround.languageDefined", "Use language configurations to determine when to automatically surround selections."),
      localize("editor.autoSurround.quotes", "Surround with quotes but not brackets."),
      localize("editor.autoSurround.brackets", "Surround with brackets but not quotes."),
      ""
    ],
    description: localize("autoSurround", "Controls whether the editor should automatically surround selections when typing quotes or brackets.")
  })),
  bracketPairColorization: register(new BracketPairColorization()),
  bracketPairGuides: register(new GuideOptions()),
  stickyTabStops: register(new EditorBooleanOption(117, "stickyTabStops", false, { description: localize("stickyTabStops", "Emulate selection behavior of tab characters when using spaces for indentation. Selection will stick to tab stops.") })),
  codeLens: register(new EditorBooleanOption(17, "codeLens", true, { description: localize("codeLens", "Controls whether the editor shows CodeLens.") })),
  codeLensFontFamily: register(new EditorStringOption(18, "codeLensFontFamily", "", { description: localize("codeLensFontFamily", "Controls the font family for CodeLens.") })),
  codeLensFontSize: register(new EditorIntOption(19, "codeLensFontSize", 0, 0, 100, {
    type: "number",
    default: 0,
    minimum: 0,
    maximum: 100,
    markdownDescription: localize("codeLensFontSize", "Controls the font size in pixels for CodeLens. When set to 0, 90% of `#editor.fontSize#` is used.")
  })),
  colorDecorators: register(new EditorBooleanOption(20, "colorDecorators", true, { description: localize("colorDecorators", "Controls whether the editor should render the inline color decorators and color picker.") })),
  colorDecoratorActivatedOn: register(new EditorStringEnumOption(149, "colorDecoratorsActivatedOn", "clickAndHover", ["clickAndHover", "hover", "click"], {
    enumDescriptions: [
      localize("editor.colorDecoratorActivatedOn.clickAndHover", "Make the color picker appear both on click and hover of the color decorator"),
      localize("editor.colorDecoratorActivatedOn.hover", "Make the color picker appear on hover of the color decorator"),
      localize("editor.colorDecoratorActivatedOn.click", "Make the color picker appear on click of the color decorator")
    ],
    description: localize("colorDecoratorActivatedOn", "Controls the condition to make a color picker appear from a color decorator")
  })),
  colorDecoratorsLimit: register(new EditorIntOption(21, "colorDecoratorsLimit", 500, 1, 1e6, {
    markdownDescription: localize("colorDecoratorsLimit", "Controls the max number of color decorators that can be rendered in an editor at once.")
  })),
  columnSelection: register(new EditorBooleanOption(22, "columnSelection", false, { description: localize("columnSelection", "Enable that the selection with the mouse and keys is doing column selection.") })),
  comments: register(new EditorComments()),
  contextmenu: register(new EditorBooleanOption(24, "contextmenu", true)),
  copyWithSyntaxHighlighting: register(new EditorBooleanOption(25, "copyWithSyntaxHighlighting", true, { description: localize("copyWithSyntaxHighlighting", "Controls whether syntax highlighting should be copied into the clipboard.") })),
  cursorBlinking: register(new EditorEnumOption(26, "cursorBlinking", 1, "blink", ["blink", "smooth", "phase", "expand", "solid"], _cursorBlinkingStyleFromString, { description: localize("cursorBlinking", "Control the cursor animation style.") })),
  cursorSmoothCaretAnimation: register(new EditorStringEnumOption(27, "cursorSmoothCaretAnimation", "off", ["off", "explicit", "on"], {
    enumDescriptions: [
      localize("cursorSmoothCaretAnimation.off", "Smooth caret animation is disabled."),
      localize("cursorSmoothCaretAnimation.explicit", "Smooth caret animation is enabled only when the user moves the cursor with an explicit gesture."),
      localize("cursorSmoothCaretAnimation.on", "Smooth caret animation is always enabled.")
    ],
    description: localize("cursorSmoothCaretAnimation", "Controls whether the smooth caret animation should be enabled.")
  })),
  cursorStyle: register(new EditorEnumOption(28, "cursorStyle", TextEditorCursorStyle.Line, "line", ["line", "block", "underline", "line-thin", "block-outline", "underline-thin"], _cursorStyleFromString, { description: localize("cursorStyle", "Controls the cursor style.") })),
  cursorSurroundingLines: register(new EditorIntOption(29, "cursorSurroundingLines", 0, 0, 1073741824, { description: localize("cursorSurroundingLines", "Controls the minimal number of visible leading lines (minimum 0) and trailing lines (minimum 1) surrounding the cursor. Known as 'scrollOff' or 'scrollOffset' in some other editors.") })),
  cursorSurroundingLinesStyle: register(new EditorStringEnumOption(30, "cursorSurroundingLinesStyle", "default", ["default", "all"], {
    enumDescriptions: [
      localize("cursorSurroundingLinesStyle.default", "`cursorSurroundingLines` is enforced only when triggered via the keyboard or API."),
      localize("cursorSurroundingLinesStyle.all", "`cursorSurroundingLines` is enforced always.")
    ],
    markdownDescription: localize("cursorSurroundingLinesStyle", "Controls when `#editor.cursorSurroundingLines#` should be enforced.")
  })),
  cursorWidth: register(new EditorIntOption(31, "cursorWidth", 0, 0, 1073741824, { markdownDescription: localize("cursorWidth", "Controls the width of the cursor when `#editor.cursorStyle#` is set to `line`.") })),
  disableLayerHinting: register(new EditorBooleanOption(32, "disableLayerHinting", false)),
  disableMonospaceOptimizations: register(new EditorBooleanOption(33, "disableMonospaceOptimizations", false)),
  domReadOnly: register(new EditorBooleanOption(34, "domReadOnly", false)),
  dragAndDrop: register(new EditorBooleanOption(35, "dragAndDrop", true, { description: localize("dragAndDrop", "Controls whether the editor should allow moving selections via drag and drop.") })),
  emptySelectionClipboard: register(new EditorEmptySelectionClipboard()),
  dropIntoEditor: register(new EditorDropIntoEditor()),
  stickyScroll: register(new EditorStickyScroll()),
  experimentalWhitespaceRendering: register(new EditorStringEnumOption(38, "experimentalWhitespaceRendering", "svg", ["svg", "font", "off"], {
    enumDescriptions: [
      localize("experimentalWhitespaceRendering.svg", "Use a new rendering method with svgs."),
      localize("experimentalWhitespaceRendering.font", "Use a new rendering method with font characters."),
      localize("experimentalWhitespaceRendering.off", "Use the stable rendering method.")
    ],
    description: localize("experimentalWhitespaceRendering", "Controls whether whitespace is rendered with a new, experimental method.")
  })),
  extraEditorClassName: register(new EditorStringOption(39, "extraEditorClassName", "")),
  fastScrollSensitivity: register(new EditorFloatOption(40, "fastScrollSensitivity", 5, (x) => x <= 0 ? 5 : x, { markdownDescription: localize("fastScrollSensitivity", "Scrolling speed multiplier when pressing `Alt`.") })),
  find: register(new EditorFind()),
  fixedOverflowWidgets: register(new EditorBooleanOption(42, "fixedOverflowWidgets", false)),
  folding: register(new EditorBooleanOption(43, "folding", true, { description: localize("folding", "Controls whether the editor has code folding enabled.") })),
  foldingStrategy: register(new EditorStringEnumOption(44, "foldingStrategy", "auto", ["auto", "indentation"], {
    enumDescriptions: [
      localize("foldingStrategy.auto", "Use a language-specific folding strategy if available, else the indentation-based one."),
      localize("foldingStrategy.indentation", "Use the indentation-based folding strategy.")
    ],
    description: localize("foldingStrategy", "Controls the strategy for computing folding ranges.")
  })),
  foldingHighlight: register(new EditorBooleanOption(45, "foldingHighlight", true, { description: localize("foldingHighlight", "Controls whether the editor should highlight folded ranges.") })),
  foldingImportsByDefault: register(new EditorBooleanOption(46, "foldingImportsByDefault", false, { description: localize("foldingImportsByDefault", "Controls whether the editor automatically collapses import ranges.") })),
  foldingMaximumRegions: register(new EditorIntOption(
    47,
    "foldingMaximumRegions",
    5e3,
    10,
    65e3,
    // limit must be less than foldingRanges MAX_FOLDING_REGIONS
    { description: localize("foldingMaximumRegions", "The maximum number of foldable regions. Increasing this value may result in the editor becoming less responsive when the current source has a large number of foldable regions.") }
  )),
  unfoldOnClickAfterEndOfLine: register(new EditorBooleanOption(48, "unfoldOnClickAfterEndOfLine", false, { description: localize("unfoldOnClickAfterEndOfLine", "Controls whether clicking on the empty content after a folded line will unfold the line.") })),
  fontFamily: register(new EditorStringOption(49, "fontFamily", EDITOR_FONT_DEFAULTS.fontFamily, { description: localize("fontFamily", "Controls the font family.") })),
  fontInfo: register(new EditorFontInfo()),
  fontLigatures2: register(new EditorFontLigatures()),
  fontSize: register(new EditorFontSize()),
  fontWeight: register(new EditorFontWeight()),
  fontVariations: register(new EditorFontVariations()),
  formatOnPaste: register(new EditorBooleanOption(55, "formatOnPaste", false, { description: localize("formatOnPaste", "Controls whether the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.") })),
  formatOnType: register(new EditorBooleanOption(56, "formatOnType", false, { description: localize("formatOnType", "Controls whether the editor should automatically format the line after typing.") })),
  glyphMargin: register(new EditorBooleanOption(57, "glyphMargin", true, { description: localize("glyphMargin", "Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.") })),
  gotoLocation: register(new EditorGoToLocation()),
  hideCursorInOverviewRuler: register(new EditorBooleanOption(59, "hideCursorInOverviewRuler", false, { description: localize("hideCursorInOverviewRuler", "Controls whether the cursor should be hidden in the overview ruler.") })),
  hover: register(new EditorHover()),
  inDiffEditor: register(new EditorBooleanOption(61, "inDiffEditor", false)),
  letterSpacing: register(new EditorFloatOption(64, "letterSpacing", EDITOR_FONT_DEFAULTS.letterSpacing, (x) => EditorFloatOption.clamp(x, -5, 20), { description: localize("letterSpacing", "Controls the letter spacing in pixels.") })),
  lightbulb: register(new EditorLightbulb()),
  lineDecorationsWidth: register(new EditorLineDecorationsWidth()),
  lineHeight: register(new EditorLineHeight()),
  lineNumbers: register(new EditorRenderLineNumbersOption()),
  lineNumbersMinChars: register(new EditorIntOption(69, "lineNumbersMinChars", 5, 1, 300)),
  linkedEditing: register(new EditorBooleanOption(70, "linkedEditing", false, { description: localize("linkedEditing", "Controls whether the editor has linked editing enabled. Depending on the language, related symbols such as HTML tags, are updated while editing.") })),
  links: register(new EditorBooleanOption(71, "links", true, { description: localize("links", "Controls whether the editor should detect links and make them clickable.") })),
  matchBrackets: register(new EditorStringEnumOption(72, "matchBrackets", "always", ["always", "near", "never"], { description: localize("matchBrackets", "Highlight matching brackets.") })),
  minimap: register(new EditorMinimap()),
  mouseStyle: register(new EditorStringEnumOption(74, "mouseStyle", "text", ["text", "default", "copy"])),
  mouseWheelScrollSensitivity: register(new EditorFloatOption(75, "mouseWheelScrollSensitivity", 1, (x) => x === 0 ? 1 : x, { markdownDescription: localize("mouseWheelScrollSensitivity", "A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.") })),
  mouseWheelZoom: register(new EditorBooleanOption(76, "mouseWheelZoom", false, {
    markdownDescription: isMacintosh ? localize("mouseWheelZoom.mac", "Zoom the font of the editor when using mouse wheel and holding `Cmd`.") : localize("mouseWheelZoom", "Zoom the font of the editor when using mouse wheel and holding `Ctrl`.")
  })),
  multiCursorMergeOverlapping: register(new EditorBooleanOption(77, "multiCursorMergeOverlapping", true, { description: localize("multiCursorMergeOverlapping", "Merge multiple cursors when they are overlapping.") })),
  multiCursorModifier: register(new EditorEnumOption(78, "multiCursorModifier", "altKey", "alt", ["ctrlCmd", "alt"], _multiCursorModifierFromString, {
    markdownEnumDescriptions: [
      localize("multiCursorModifier.ctrlCmd", "Maps to `Control` on Windows and Linux and to `Command` on macOS."),
      localize("multiCursorModifier.alt", "Maps to `Alt` on Windows and Linux and to `Option` on macOS.")
    ],
    markdownDescription: localize({
      key: "multiCursorModifier",
      comment: [
        "- `ctrlCmd` refers to a value the setting can take and should not be localized.",
        "- `Control` and `Command` refer to the modifier keys Ctrl or Cmd on the keyboard and can be localized."
      ]
    }, "The modifier to be used to add multiple cursors with the mouse. The Go to Definition and Open Link mouse gestures will adapt such that they do not conflict with the [multicursor modifier](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier).")
  })),
  multiCursorPaste: register(new EditorStringEnumOption(79, "multiCursorPaste", "spread", ["spread", "full"], {
    markdownEnumDescriptions: [
      localize("multiCursorPaste.spread", "Each cursor pastes a single line of the text."),
      localize("multiCursorPaste.full", "Each cursor pastes the full text.")
    ],
    markdownDescription: localize("multiCursorPaste", "Controls pasting when the line count of the pasted text matches the cursor count.")
  })),
  multiCursorLimit: register(new EditorIntOption(80, "multiCursorLimit", 1e4, 1, 1e5, {
    markdownDescription: localize("multiCursorLimit", "Controls the max number of cursors that can be in an active editor at once.")
  })),
  occurrencesHighlight: register(new EditorStringEnumOption(81, "occurrencesHighlight", "singleFile", ["off", "singleFile", "multiFile"], {
    markdownEnumDescriptions: [
      localize("occurrencesHighlight.off", "Does not highlight occurrences."),
      localize("occurrencesHighlight.singleFile", "Highlights occurrences only in the current file."),
      localize("occurrencesHighlight.multiFile", "Experimental: Highlights occurrences across all valid open files.")
    ],
    markdownDescription: localize("occurrencesHighlight", "Controls whether occurrences should be highlighted across open files.")
  })),
  overviewRulerBorder: register(new EditorBooleanOption(82, "overviewRulerBorder", true, { description: localize("overviewRulerBorder", "Controls whether a border should be drawn around the overview ruler.") })),
  overviewRulerLanes: register(new EditorIntOption(83, "overviewRulerLanes", 3, 0, 3)),
  padding: register(new EditorPadding()),
  pasteAs: register(new EditorPasteAs()),
  parameterHints: register(new EditorParameterHints()),
  peekWidgetDefaultFocus: register(new EditorStringEnumOption(87, "peekWidgetDefaultFocus", "tree", ["tree", "editor"], {
    enumDescriptions: [
      localize("peekWidgetDefaultFocus.tree", "Focus the tree when opening peek"),
      localize("peekWidgetDefaultFocus.editor", "Focus the editor when opening peek")
    ],
    description: localize("peekWidgetDefaultFocus", "Controls whether to focus the inline editor or the tree in the peek widget.")
  })),
  placeholder: register(new PlaceholderOption()),
  definitionLinkOpensInPeek: register(new EditorBooleanOption(89, "definitionLinkOpensInPeek", false, { description: localize("definitionLinkOpensInPeek", "Controls whether the Go to Definition mouse gesture always opens the peek widget.") })),
  quickSuggestions: register(new EditorQuickSuggestions()),
  quickSuggestionsDelay: register(new EditorIntOption(91, "quickSuggestionsDelay", 10, 0, 1073741824, { description: localize("quickSuggestionsDelay", "Controls the delay in milliseconds after which quick suggestions will show up.") })),
  readOnly: register(new EditorBooleanOption(92, "readOnly", false)),
  readOnlyMessage: register(new ReadonlyMessage()),
  renameOnType: register(new EditorBooleanOption(94, "renameOnType", false, { description: localize("renameOnType", "Controls whether the editor auto renames on type."), markdownDeprecationMessage: localize("renameOnTypeDeprecate", "Deprecated, use `editor.linkedEditing` instead.") })),
  renderControlCharacters: register(new EditorBooleanOption(95, "renderControlCharacters", true, { description: localize("renderControlCharacters", "Controls whether the editor should render control characters."), restricted: true })),
  renderFinalNewline: register(new EditorStringEnumOption(96, "renderFinalNewline", isLinux ? "dimmed" : "on", ["off", "on", "dimmed"], { description: localize("renderFinalNewline", "Render last line number when the file ends with a newline.") })),
  renderLineHighlight: register(new EditorStringEnumOption(97, "renderLineHighlight", "line", ["none", "gutter", "line", "all"], {
    enumDescriptions: [
      "",
      "",
      "",
      localize("renderLineHighlight.all", "Highlights both the gutter and the current line.")
    ],
    description: localize("renderLineHighlight", "Controls how the editor should render the current line highlight.")
  })),
  renderLineHighlightOnlyWhenFocus: register(new EditorBooleanOption(98, "renderLineHighlightOnlyWhenFocus", false, { description: localize("renderLineHighlightOnlyWhenFocus", "Controls if the editor should render the current line highlight only when the editor is focused.") })),
  renderValidationDecorations: register(new EditorStringEnumOption(99, "renderValidationDecorations", "editable", ["editable", "on", "off"])),
  renderWhitespace: register(new EditorStringEnumOption(100, "renderWhitespace", "selection", ["none", "boundary", "selection", "trailing", "all"], {
    enumDescriptions: [
      "",
      localize("renderWhitespace.boundary", "Render whitespace characters except for single spaces between words."),
      localize("renderWhitespace.selection", "Render whitespace characters only on selected text."),
      localize("renderWhitespace.trailing", "Render only trailing whitespace characters."),
      ""
    ],
    description: localize("renderWhitespace", "Controls how the editor should render whitespace characters.")
  })),
  revealHorizontalRightPadding: register(new EditorIntOption(101, "revealHorizontalRightPadding", 15, 0, 1e3)),
  roundedSelection: register(new EditorBooleanOption(102, "roundedSelection", true, { description: localize("roundedSelection", "Controls whether selections should have rounded corners.") })),
  rulers: register(new EditorRulers()),
  scrollbar: register(new EditorScrollbar()),
  scrollBeyondLastColumn: register(new EditorIntOption(105, "scrollBeyondLastColumn", 4, 0, 1073741824, { description: localize("scrollBeyondLastColumn", "Controls the number of extra characters beyond which the editor will scroll horizontally.") })),
  scrollBeyondLastLine: register(new EditorBooleanOption(106, "scrollBeyondLastLine", true, { description: localize("scrollBeyondLastLine", "Controls whether the editor will scroll beyond the last line.") })),
  scrollPredominantAxis: register(new EditorBooleanOption(107, "scrollPredominantAxis", true, { description: localize("scrollPredominantAxis", "Scroll only along the predominant axis when scrolling both vertically and horizontally at the same time. Prevents horizontal drift when scrolling vertically on a trackpad.") })),
  selectionClipboard: register(new EditorBooleanOption(108, "selectionClipboard", true, {
    description: localize("selectionClipboard", "Controls whether the Linux primary clipboard should be supported."),
    included: isLinux
  })),
  selectionHighlight: register(new EditorBooleanOption(109, "selectionHighlight", true, { description: localize("selectionHighlight", "Controls whether the editor should highlight matches similar to the selection.") })),
  selectOnLineNumbers: register(new EditorBooleanOption(110, "selectOnLineNumbers", true)),
  showFoldingControls: register(new EditorStringEnumOption(111, "showFoldingControls", "mouseover", ["always", "never", "mouseover"], {
    enumDescriptions: [
      localize("showFoldingControls.always", "Always show the folding controls."),
      localize("showFoldingControls.never", "Never show the folding controls and reduce the gutter size."),
      localize("showFoldingControls.mouseover", "Only show the folding controls when the mouse is over the gutter.")
    ],
    description: localize("showFoldingControls", "Controls when the folding controls on the gutter are shown.")
  })),
  showUnused: register(new EditorBooleanOption(112, "showUnused", true, { description: localize("showUnused", "Controls fading out of unused code.") })),
  showDeprecated: register(new EditorBooleanOption(141, "showDeprecated", true, { description: localize("showDeprecated", "Controls strikethrough deprecated variables.") })),
  inlayHints: register(new EditorInlayHints()),
  snippetSuggestions: register(new EditorStringEnumOption(113, "snippetSuggestions", "inline", ["top", "bottom", "inline", "none"], {
    enumDescriptions: [
      localize("snippetSuggestions.top", "Show snippet suggestions on top of other suggestions."),
      localize("snippetSuggestions.bottom", "Show snippet suggestions below other suggestions."),
      localize("snippetSuggestions.inline", "Show snippets suggestions with other suggestions."),
      localize("snippetSuggestions.none", "Do not show snippet suggestions.")
    ],
    description: localize("snippetSuggestions", "Controls whether snippets are shown with other suggestions and how they are sorted.")
  })),
  smartSelect: register(new SmartSelect()),
  smoothScrolling: register(new EditorBooleanOption(115, "smoothScrolling", false, { description: localize("smoothScrolling", "Controls whether the editor will scroll using an animation.") })),
  stopRenderingLineAfter: register(new EditorIntOption(
    118,
    "stopRenderingLineAfter",
    1e4,
    -1,
    1073741824
    /* Constants.MAX_SAFE_SMALL_INTEGER */
  )),
  suggest: register(new EditorSuggest()),
  inlineSuggest: register(new InlineEditorSuggest()),
  inlineEdit: register(new InlineEditorEdit()),
  inlineCompletionsAccessibilityVerbose: register(new EditorBooleanOption(150, "inlineCompletionsAccessibilityVerbose", false, { description: localize("inlineCompletionsAccessibilityVerbose", "Controls whether the accessibility hint should be provided to screen reader users when an inline completion is shown.") })),
  suggestFontSize: register(new EditorIntOption(120, "suggestFontSize", 0, 0, 1e3, { markdownDescription: localize("suggestFontSize", "Font size for the suggest widget. When set to {0}, the value of {1} is used.", "`0`", "`#editor.fontSize#`") })),
  suggestLineHeight: register(new EditorIntOption(121, "suggestLineHeight", 0, 0, 1e3, { markdownDescription: localize("suggestLineHeight", "Line height for the suggest widget. When set to {0}, the value of {1} is used. The minimum value is 8.", "`0`", "`#editor.lineHeight#`") })),
  suggestOnTriggerCharacters: register(new EditorBooleanOption(122, "suggestOnTriggerCharacters", true, { description: localize("suggestOnTriggerCharacters", "Controls whether suggestions should automatically show up when typing trigger characters.") })),
  suggestSelection: register(new EditorStringEnumOption(123, "suggestSelection", "first", ["first", "recentlyUsed", "recentlyUsedByPrefix"], {
    markdownEnumDescriptions: [
      localize("suggestSelection.first", "Always select the first suggestion."),
      localize("suggestSelection.recentlyUsed", "Select recent suggestions unless further typing selects one, e.g. `console.| -> console.log` because `log` has been completed recently."),
      localize("suggestSelection.recentlyUsedByPrefix", "Select suggestions based on previous prefixes that have completed those suggestions, e.g. `co -> console` and `con -> const`.")
    ],
    description: localize("suggestSelection", "Controls how suggestions are pre-selected when showing the suggest list.")
  })),
  tabCompletion: register(new EditorStringEnumOption(124, "tabCompletion", "off", ["on", "off", "onlySnippets"], {
    enumDescriptions: [
      localize("tabCompletion.on", "Tab complete will insert the best matching suggestion when pressing tab."),
      localize("tabCompletion.off", "Disable tab completions."),
      localize("tabCompletion.onlySnippets", "Tab complete snippets when their prefix match. Works best when 'quickSuggestions' aren't enabled.")
    ],
    description: localize("tabCompletion", "Enables tab completions.")
  })),
  tabIndex: register(new EditorIntOption(
    125,
    "tabIndex",
    0,
    -1,
    1073741824
    /* Constants.MAX_SAFE_SMALL_INTEGER */
  )),
  unicodeHighlight: register(new UnicodeHighlight()),
  unusualLineTerminators: register(new EditorStringEnumOption(127, "unusualLineTerminators", "prompt", ["auto", "off", "prompt"], {
    enumDescriptions: [
      localize("unusualLineTerminators.auto", "Unusual line terminators are automatically removed."),
      localize("unusualLineTerminators.off", "Unusual line terminators are ignored."),
      localize("unusualLineTerminators.prompt", "Unusual line terminators prompt to be removed.")
    ],
    description: localize("unusualLineTerminators", "Remove unusual line terminators that might cause problems.")
  })),
  useShadowDOM: register(new EditorBooleanOption(128, "useShadowDOM", true)),
  useTabStops: register(new EditorBooleanOption(129, "useTabStops", true, { description: localize("useTabStops", "Spaces and tabs are inserted and deleted in alignment with tab stops.") })),
  wordBreak: register(new EditorStringEnumOption(130, "wordBreak", "normal", ["normal", "keepAll"], {
    markdownEnumDescriptions: [
      localize("wordBreak.normal", "Use the default line break rule."),
      localize("wordBreak.keepAll", "Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for normal.")
    ],
    description: localize("wordBreak", "Controls the word break rules used for Chinese/Japanese/Korean (CJK) text.")
  })),
  wordSegmenterLocales: register(new WordSegmenterLocales()),
  wordSeparators: register(new EditorStringOption(132, "wordSeparators", USUAL_WORD_SEPARATORS, { description: localize("wordSeparators", "Characters that will be used as word separators when doing word related navigations or operations.") })),
  wordWrap: register(new EditorStringEnumOption(133, "wordWrap", "off", ["off", "on", "wordWrapColumn", "bounded"], {
    markdownEnumDescriptions: [
      localize("wordWrap.off", "Lines will never wrap."),
      localize("wordWrap.on", "Lines will wrap at the viewport width."),
      localize({
        key: "wordWrap.wordWrapColumn",
        comment: [
          "- `editor.wordWrapColumn` refers to a different setting and should not be localized."
        ]
      }, "Lines will wrap at `#editor.wordWrapColumn#`."),
      localize({
        key: "wordWrap.bounded",
        comment: [
          "- viewport means the edge of the visible window size.",
          "- `editor.wordWrapColumn` refers to a different setting and should not be localized."
        ]
      }, "Lines will wrap at the minimum of viewport and `#editor.wordWrapColumn#`.")
    ],
    description: localize({
      key: "wordWrap",
      comment: [
        "- 'off', 'on', 'wordWrapColumn' and 'bounded' refer to values the setting can take and should not be localized.",
        "- `editor.wordWrapColumn` refers to a different setting and should not be localized."
      ]
    }, "Controls how lines should wrap.")
  })),
  wordWrapBreakAfterCharacters: register(new EditorStringOption(
    134,
    "wordWrapBreakAfterCharacters",
    // allow-any-unicode-next-line
    " 	})]?|/&.,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ”〉》」』】〕）］｝｣"
  )),
  wordWrapBreakBeforeCharacters: register(new EditorStringOption(
    135,
    "wordWrapBreakBeforeCharacters",
    // allow-any-unicode-next-line
    "([{‘“〈《「『【〔（［｛｢£¥＄￡￥+＋"
  )),
  wordWrapColumn: register(new EditorIntOption(136, "wordWrapColumn", 80, 1, 1073741824, {
    markdownDescription: localize({
      key: "wordWrapColumn",
      comment: [
        "- `editor.wordWrap` refers to a different setting and should not be localized.",
        "- 'wordWrapColumn' and 'bounded' refer to values the different setting can take and should not be localized."
      ]
    }, "Controls the wrapping column of the editor when `#editor.wordWrap#` is `wordWrapColumn` or `bounded`.")
  })),
  wordWrapOverride1: register(new EditorStringEnumOption(137, "wordWrapOverride1", "inherit", ["off", "on", "inherit"])),
  wordWrapOverride2: register(new EditorStringEnumOption(138, "wordWrapOverride2", "inherit", ["off", "on", "inherit"])),
  // Leave these at the end (because they have dependencies!)
  editorClassName: register(new EditorClassName()),
  defaultColorDecorators: register(new EditorBooleanOption(148, "defaultColorDecorators", false, { markdownDescription: localize("defaultColorDecorators", "Controls whether inline color decorations should be shown using the default document color provider") })),
  pixelRatio: register(new EditorPixelRatio()),
  tabFocusMode: register(new EditorBooleanOption(145, "tabFocusMode", false, { markdownDescription: localize("tabFocusMode", "Controls whether the editor receives tabs or defers them to the workbench for navigation.") })),
  layoutInfo: register(new EditorLayoutInfoComputer()),
  wrappingInfo: register(new EditorWrappingInfoComputer()),
  wrappingIndent: register(new WrappingIndentOption()),
  wrappingStrategy: register(new WrappingStrategy())
};
const canUseFastRenderedViewLine = (function() {
  if (isNative) {
    return true;
  }
  if (isLinux || isFirefox || isSafari) {
    return false;
  }
  return true;
})();
let monospaceAssumptionsAreValid = true;
class ViewLineOptions {
  constructor(config, themeType) {
    this.themeType = themeType;
    const options = config.options;
    const fontInfo = options.get(
      50
      /* EditorOption.fontInfo */
    );
    const experimentalWhitespaceRendering = options.get(
      38
      /* EditorOption.experimentalWhitespaceRendering */
    );
    if (experimentalWhitespaceRendering === "off") {
      this.renderWhitespace = options.get(
        100
        /* EditorOption.renderWhitespace */
      );
    } else {
      this.renderWhitespace = "none";
    }
    this.renderControlCharacters = options.get(
      95
      /* EditorOption.renderControlCharacters */
    );
    this.spaceWidth = fontInfo.spaceWidth;
    this.middotWidth = fontInfo.middotWidth;
    this.wsmiddotWidth = fontInfo.wsmiddotWidth;
    this.useMonospaceOptimizations = fontInfo.isMonospace && !options.get(
      33
      /* EditorOption.disableMonospaceOptimizations */
    );
    this.canUseHalfwidthRightwardsArrow = fontInfo.canUseHalfwidthRightwardsArrow;
    this.lineHeight = options.get(
      67
      /* EditorOption.lineHeight */
    );
    this.stopRenderingLineAfter = options.get(
      118
      /* EditorOption.stopRenderingLineAfter */
    );
    this.fontLigatures = options.get(
      51
      /* EditorOption.fontLigatures */
    );
  }
  equals(other) {
    return this.themeType === other.themeType && this.renderWhitespace === other.renderWhitespace && this.renderControlCharacters === other.renderControlCharacters && this.spaceWidth === other.spaceWidth && this.middotWidth === other.middotWidth && this.wsmiddotWidth === other.wsmiddotWidth && this.useMonospaceOptimizations === other.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === other.canUseHalfwidthRightwardsArrow && this.lineHeight === other.lineHeight && this.stopRenderingLineAfter === other.stopRenderingLineAfter && this.fontLigatures === other.fontLigatures;
  }
}
class ViewLine {
  static {
    this.CLASS_NAME = "view-line";
  }
  constructor(options) {
    this._options = options;
    this._isMaybeInvalid = true;
    this._renderedViewLine = null;
  }
  // --- begin IVisibleLineData
  getDomNode() {
    if (this._renderedViewLine && this._renderedViewLine.domNode) {
      return this._renderedViewLine.domNode.domNode;
    }
    return null;
  }
  setDomNode(domNode) {
    if (this._renderedViewLine) {
      this._renderedViewLine.domNode = createFastDomNode(domNode);
    } else {
      throw new Error("I have no rendered view line to set the dom node to...");
    }
  }
  onContentChanged() {
    this._isMaybeInvalid = true;
  }
  onTokensChanged() {
    this._isMaybeInvalid = true;
  }
  onDecorationsChanged() {
    this._isMaybeInvalid = true;
  }
  onOptionsChanged(newOptions) {
    this._isMaybeInvalid = true;
    this._options = newOptions;
  }
  onSelectionChanged() {
    if (isHighContrast(this._options.themeType) || this._options.renderWhitespace === "selection") {
      this._isMaybeInvalid = true;
      return true;
    }
    return false;
  }
  renderLine(lineNumber, deltaTop, lineHeight, viewportData, sb) {
    if (this._isMaybeInvalid === false) {
      return false;
    }
    this._isMaybeInvalid = false;
    const lineData = viewportData.getViewLineRenderingData(lineNumber);
    const options = this._options;
    const actualInlineDecorations = LineDecoration.filter(lineData.inlineDecorations, lineNumber, lineData.minColumn, lineData.maxColumn);
    let selectionsOnLine = null;
    if (isHighContrast(options.themeType) || this._options.renderWhitespace === "selection") {
      const selections = viewportData.selections;
      for (const selection of selections) {
        if (selection.endLineNumber < lineNumber || selection.startLineNumber > lineNumber) {
          continue;
        }
        const startColumn = selection.startLineNumber === lineNumber ? selection.startColumn : lineData.minColumn;
        const endColumn = selection.endLineNumber === lineNumber ? selection.endColumn : lineData.maxColumn;
        if (startColumn < endColumn) {
          if (isHighContrast(options.themeType)) {
            actualInlineDecorations.push(new LineDecoration(
              startColumn,
              endColumn,
              "inline-selected-text",
              0
              /* InlineDecorationType.Regular */
            ));
          }
          if (this._options.renderWhitespace === "selection") {
            if (!selectionsOnLine) {
              selectionsOnLine = [];
            }
            selectionsOnLine.push(new LineRange(startColumn - 1, endColumn - 1));
          }
        }
      }
    }
    const renderLineInput = new RenderLineInput(options.useMonospaceOptimizations, options.canUseHalfwidthRightwardsArrow, lineData.content, lineData.continuesWithWrappedLine, lineData.isBasicASCII, lineData.containsRTL, lineData.minColumn - 1, lineData.tokens, actualInlineDecorations, lineData.tabSize, lineData.startVisibleColumn, options.spaceWidth, options.middotWidth, options.wsmiddotWidth, options.stopRenderingLineAfter, options.renderWhitespace, options.renderControlCharacters, options.fontLigatures !== EditorFontLigatures.OFF, selectionsOnLine);
    if (this._renderedViewLine && this._renderedViewLine.input.equals(renderLineInput)) {
      return false;
    }
    sb.appendString('<div style="top:');
    sb.appendString(String(deltaTop));
    sb.appendString("px;height:");
    sb.appendString(String(lineHeight));
    sb.appendString('px;" class="');
    sb.appendString(ViewLine.CLASS_NAME);
    sb.appendString('">');
    const output = renderViewLine(renderLineInput, sb);
    sb.appendString("</div>");
    let renderedViewLine = null;
    if (monospaceAssumptionsAreValid && canUseFastRenderedViewLine && lineData.isBasicASCII && options.useMonospaceOptimizations && output.containsForeignElements === 0) {
      renderedViewLine = new FastRenderedViewLine(this._renderedViewLine ? this._renderedViewLine.domNode : null, renderLineInput, output.characterMapping);
    }
    if (!renderedViewLine) {
      renderedViewLine = createRenderedLine(this._renderedViewLine ? this._renderedViewLine.domNode : null, renderLineInput, output.characterMapping, output.containsRTL, output.containsForeignElements);
    }
    this._renderedViewLine = renderedViewLine;
    return true;
  }
  layoutLine(lineNumber, deltaTop, lineHeight) {
    if (this._renderedViewLine && this._renderedViewLine.domNode) {
      this._renderedViewLine.domNode.setTop(deltaTop);
      this._renderedViewLine.domNode.setHeight(lineHeight);
    }
  }
  // --- end IVisibleLineData
  getWidth(context) {
    if (!this._renderedViewLine) {
      return 0;
    }
    return this._renderedViewLine.getWidth(context);
  }
  getWidthIsFast() {
    if (!this._renderedViewLine) {
      return true;
    }
    return this._renderedViewLine.getWidthIsFast();
  }
  needsMonospaceFontCheck() {
    if (!this._renderedViewLine) {
      return false;
    }
    return this._renderedViewLine instanceof FastRenderedViewLine;
  }
  monospaceAssumptionsAreValid() {
    if (!this._renderedViewLine) {
      return monospaceAssumptionsAreValid;
    }
    if (this._renderedViewLine instanceof FastRenderedViewLine) {
      return this._renderedViewLine.monospaceAssumptionsAreValid();
    }
    return monospaceAssumptionsAreValid;
  }
  onMonospaceAssumptionsInvalidated() {
    if (this._renderedViewLine && this._renderedViewLine instanceof FastRenderedViewLine) {
      this._renderedViewLine = this._renderedViewLine.toSlowRenderedLine();
    }
  }
  getVisibleRangesForRange(lineNumber, startColumn, endColumn, context) {
    if (!this._renderedViewLine) {
      return null;
    }
    startColumn = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, startColumn));
    endColumn = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, endColumn));
    const stopRenderingLineAfter = this._renderedViewLine.input.stopRenderingLineAfter;
    if (stopRenderingLineAfter !== -1 && startColumn > stopRenderingLineAfter + 1 && endColumn > stopRenderingLineAfter + 1) {
      return new VisibleRanges(true, [new FloatHorizontalRange(this.getWidth(context), 0)]);
    }
    if (stopRenderingLineAfter !== -1 && startColumn > stopRenderingLineAfter + 1) {
      startColumn = stopRenderingLineAfter + 1;
    }
    if (stopRenderingLineAfter !== -1 && endColumn > stopRenderingLineAfter + 1) {
      endColumn = stopRenderingLineAfter + 1;
    }
    const horizontalRanges = this._renderedViewLine.getVisibleRangesForRange(lineNumber, startColumn, endColumn, context);
    if (horizontalRanges && horizontalRanges.length > 0) {
      return new VisibleRanges(false, horizontalRanges);
    }
    return null;
  }
  getColumnOfNodeOffset(spanNode, offset) {
    if (!this._renderedViewLine) {
      return 1;
    }
    return this._renderedViewLine.getColumnOfNodeOffset(spanNode, offset);
  }
}
class FastRenderedViewLine {
  constructor(domNode, renderLineInput, characterMapping) {
    this._cachedWidth = -1;
    this.domNode = domNode;
    this.input = renderLineInput;
    const keyColumnCount = Math.floor(
      renderLineInput.lineContent.length / 300
      /* Constants.MaxMonospaceDistance */
    );
    if (keyColumnCount > 0) {
      this._keyColumnPixelOffsetCache = new Float32Array(keyColumnCount);
      for (let i = 0; i < keyColumnCount; i++) {
        this._keyColumnPixelOffsetCache[i] = -1;
      }
    } else {
      this._keyColumnPixelOffsetCache = null;
    }
    this._characterMapping = characterMapping;
    this._charWidth = renderLineInput.spaceWidth;
  }
  getWidth(context) {
    if (!this.domNode || this.input.lineContent.length < 300) {
      const horizontalOffset = this._characterMapping.getHorizontalOffset(this._characterMapping.length);
      return Math.round(this._charWidth * horizontalOffset);
    }
    if (this._cachedWidth === -1) {
      this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth;
      context?.markDidDomLayout();
    }
    return this._cachedWidth;
  }
  getWidthIsFast() {
    return this.input.lineContent.length < 300 || this._cachedWidth !== -1;
  }
  monospaceAssumptionsAreValid() {
    if (!this.domNode) {
      return monospaceAssumptionsAreValid;
    }
    if (this.input.lineContent.length < 300) {
      const expectedWidth = this.getWidth(null);
      const actualWidth = this.domNode.domNode.firstChild.offsetWidth;
      if (Math.abs(expectedWidth - actualWidth) >= 2) {
        console.warn(`monospace assumptions have been violated, therefore disabling monospace optimizations!`);
        monospaceAssumptionsAreValid = false;
      }
    }
    return monospaceAssumptionsAreValid;
  }
  toSlowRenderedLine() {
    return createRenderedLine(
      this.domNode,
      this.input,
      this._characterMapping,
      false,
      0
      /* ForeignElementType.None */
    );
  }
  getVisibleRangesForRange(lineNumber, startColumn, endColumn, context) {
    const startPosition = this._getColumnPixelOffset(lineNumber, startColumn, context);
    const endPosition = this._getColumnPixelOffset(lineNumber, endColumn, context);
    return [new FloatHorizontalRange(startPosition, endPosition - startPosition)];
  }
  _getColumnPixelOffset(lineNumber, column, context) {
    if (column <= 300) {
      const horizontalOffset2 = this._characterMapping.getHorizontalOffset(column);
      return this._charWidth * horizontalOffset2;
    }
    const keyColumnOrdinal = Math.floor(
      (column - 1) / 300
      /* Constants.MaxMonospaceDistance */
    ) - 1;
    const keyColumn = (keyColumnOrdinal + 1) * 300 + 1;
    let keyColumnPixelOffset = -1;
    if (this._keyColumnPixelOffsetCache) {
      keyColumnPixelOffset = this._keyColumnPixelOffsetCache[keyColumnOrdinal];
      if (keyColumnPixelOffset === -1) {
        keyColumnPixelOffset = this._actualReadPixelOffset(lineNumber, keyColumn, context);
        this._keyColumnPixelOffsetCache[keyColumnOrdinal] = keyColumnPixelOffset;
      }
    }
    if (keyColumnPixelOffset === -1) {
      const horizontalOffset2 = this._characterMapping.getHorizontalOffset(column);
      return this._charWidth * horizontalOffset2;
    }
    const keyColumnHorizontalOffset = this._characterMapping.getHorizontalOffset(keyColumn);
    const horizontalOffset = this._characterMapping.getHorizontalOffset(column);
    return keyColumnPixelOffset + this._charWidth * (horizontalOffset - keyColumnHorizontalOffset);
  }
  _getReadingTarget(myDomNode) {
    return myDomNode.domNode.firstChild;
  }
  _actualReadPixelOffset(lineNumber, column, context) {
    if (!this.domNode) {
      return -1;
    }
    const domPosition = this._characterMapping.getDomPosition(column);
    const r = RangeUtil.readHorizontalRanges(this._getReadingTarget(this.domNode), domPosition.partIndex, domPosition.charIndex, domPosition.partIndex, domPosition.charIndex, context);
    if (!r || r.length === 0) {
      return -1;
    }
    return r[0].left;
  }
  getColumnOfNodeOffset(spanNode, offset) {
    return getColumnOfNodeOffset(this._characterMapping, spanNode, offset);
  }
}
class RenderedViewLine {
  constructor(domNode, renderLineInput, characterMapping, containsRTL2, containsForeignElements) {
    this.domNode = domNode;
    this.input = renderLineInput;
    this._characterMapping = characterMapping;
    this._isWhitespaceOnly = /^\s*$/.test(renderLineInput.lineContent);
    this._containsForeignElements = containsForeignElements;
    this._cachedWidth = -1;
    this._pixelOffsetCache = null;
    if (!containsRTL2 || this._characterMapping.length === 0) {
      this._pixelOffsetCache = new Float32Array(Math.max(2, this._characterMapping.length + 1));
      for (let column = 0, len = this._characterMapping.length; column <= len; column++) {
        this._pixelOffsetCache[column] = -1;
      }
    }
  }
  // --- Reading from the DOM methods
  _getReadingTarget(myDomNode) {
    return myDomNode.domNode.firstChild;
  }
  /**
   * Width of the line in pixels
   */
  getWidth(context) {
    if (!this.domNode) {
      return 0;
    }
    if (this._cachedWidth === -1) {
      this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth;
      context?.markDidDomLayout();
    }
    return this._cachedWidth;
  }
  getWidthIsFast() {
    if (this._cachedWidth === -1) {
      return false;
    }
    return true;
  }
  /**
   * Visible ranges for a model range
   */
  getVisibleRangesForRange(lineNumber, startColumn, endColumn, context) {
    if (!this.domNode) {
      return null;
    }
    if (this._pixelOffsetCache !== null) {
      const startOffset = this._readPixelOffset(this.domNode, lineNumber, startColumn, context);
      if (startOffset === -1) {
        return null;
      }
      const endOffset = this._readPixelOffset(this.domNode, lineNumber, endColumn, context);
      if (endOffset === -1) {
        return null;
      }
      return [new FloatHorizontalRange(startOffset, endOffset - startOffset)];
    }
    return this._readVisibleRangesForRange(this.domNode, lineNumber, startColumn, endColumn, context);
  }
  _readVisibleRangesForRange(domNode, lineNumber, startColumn, endColumn, context) {
    if (startColumn === endColumn) {
      const pixelOffset = this._readPixelOffset(domNode, lineNumber, startColumn, context);
      if (pixelOffset === -1) {
        return null;
      } else {
        return [new FloatHorizontalRange(pixelOffset, 0)];
      }
    } else {
      return this._readRawVisibleRangesForRange(domNode, startColumn, endColumn, context);
    }
  }
  _readPixelOffset(domNode, lineNumber, column, context) {
    if (this._characterMapping.length === 0) {
      if (this._containsForeignElements === 0) {
        return 0;
      }
      if (this._containsForeignElements === 2) {
        return 0;
      }
      if (this._containsForeignElements === 1) {
        return this.getWidth(context);
      }
      const readingTarget = this._getReadingTarget(domNode);
      if (readingTarget.firstChild) {
        context.markDidDomLayout();
        return readingTarget.firstChild.offsetWidth;
      } else {
        return 0;
      }
    }
    if (this._pixelOffsetCache !== null) {
      const cachedPixelOffset = this._pixelOffsetCache[column];
      if (cachedPixelOffset !== -1) {
        return cachedPixelOffset;
      }
      const result = this._actualReadPixelOffset(domNode, lineNumber, column, context);
      this._pixelOffsetCache[column] = result;
      return result;
    }
    return this._actualReadPixelOffset(domNode, lineNumber, column, context);
  }
  _actualReadPixelOffset(domNode, lineNumber, column, context) {
    if (this._characterMapping.length === 0) {
      const r2 = RangeUtil.readHorizontalRanges(this._getReadingTarget(domNode), 0, 0, 0, 0, context);
      if (!r2 || r2.length === 0) {
        return -1;
      }
      return r2[0].left;
    }
    if (column === this._characterMapping.length && this._isWhitespaceOnly && this._containsForeignElements === 0) {
      return this.getWidth(context);
    }
    const domPosition = this._characterMapping.getDomPosition(column);
    const r = RangeUtil.readHorizontalRanges(this._getReadingTarget(domNode), domPosition.partIndex, domPosition.charIndex, domPosition.partIndex, domPosition.charIndex, context);
    if (!r || r.length === 0) {
      return -1;
    }
    const result = r[0].left;
    if (this.input.isBasicASCII) {
      const horizontalOffset = this._characterMapping.getHorizontalOffset(column);
      const expectedResult = Math.round(this.input.spaceWidth * horizontalOffset);
      if (Math.abs(expectedResult - result) <= 1) {
        return expectedResult;
      }
    }
    return result;
  }
  _readRawVisibleRangesForRange(domNode, startColumn, endColumn, context) {
    if (startColumn === 1 && endColumn === this._characterMapping.length) {
      return [new FloatHorizontalRange(0, this.getWidth(context))];
    }
    const startDomPosition = this._characterMapping.getDomPosition(startColumn);
    const endDomPosition = this._characterMapping.getDomPosition(endColumn);
    return RangeUtil.readHorizontalRanges(this._getReadingTarget(domNode), startDomPosition.partIndex, startDomPosition.charIndex, endDomPosition.partIndex, endDomPosition.charIndex, context);
  }
  /**
   * Returns the column for the text found at a specific offset inside a rendered dom node
   */
  getColumnOfNodeOffset(spanNode, offset) {
    return getColumnOfNodeOffset(this._characterMapping, spanNode, offset);
  }
}
class WebKitRenderedViewLine extends RenderedViewLine {
  _readVisibleRangesForRange(domNode, lineNumber, startColumn, endColumn, context) {
    const output = super._readVisibleRangesForRange(domNode, lineNumber, startColumn, endColumn, context);
    if (!output || output.length === 0 || startColumn === endColumn || startColumn === 1 && endColumn === this._characterMapping.length) {
      return output;
    }
    if (!this.input.containsRTL) {
      const endPixelOffset = this._readPixelOffset(domNode, lineNumber, endColumn, context);
      if (endPixelOffset !== -1) {
        const lastRange = output[output.length - 1];
        if (lastRange.left < endPixelOffset) {
          lastRange.width = endPixelOffset - lastRange.left;
        }
      }
    }
    return output;
  }
}
const createRenderedLine = (function() {
  if (isWebKit) {
    return createWebKitRenderedLine;
  }
  return createNormalRenderedLine;
})();
function createWebKitRenderedLine(domNode, renderLineInput, characterMapping, containsRTL2, containsForeignElements) {
  return new WebKitRenderedViewLine(domNode, renderLineInput, characterMapping, containsRTL2, containsForeignElements);
}
function createNormalRenderedLine(domNode, renderLineInput, characterMapping, containsRTL2, containsForeignElements) {
  return new RenderedViewLine(domNode, renderLineInput, characterMapping, containsRTL2, containsForeignElements);
}
function getColumnOfNodeOffset(characterMapping, spanNode, offset) {
  const spanNodeTextContentLength = spanNode.textContent.length;
  let spanIndex = -1;
  while (spanNode) {
    spanNode = spanNode.previousSibling;
    spanIndex++;
  }
  return characterMapping.getColumn(new DomPosition(spanIndex, offset), spanNodeTextContentLength);
}
class CursorColumns {
  static _nextVisibleColumn(codePoint, visibleColumn, tabSize) {
    if (codePoint === 9) {
      return CursorColumns.nextRenderTabStop(visibleColumn, tabSize);
    }
    if (isFullWidthCharacter(codePoint) || isEmojiImprecise(codePoint)) {
      return visibleColumn + 2;
    }
    return visibleColumn + 1;
  }
  /**
   * Returns a visible column from a column.
   * @see {@link CursorColumns}
   */
  static visibleColumnFromColumn(lineContent, column, tabSize) {
    const textLen = Math.min(column - 1, lineContent.length);
    const text2 = lineContent.substring(0, textLen);
    const iterator = new GraphemeIterator(text2);
    let result = 0;
    while (!iterator.eol()) {
      const codePoint = getNextCodePoint(text2, textLen, iterator.offset);
      iterator.nextGraphemeLength();
      result = this._nextVisibleColumn(codePoint, result, tabSize);
    }
    return result;
  }
  /**
   * Returns a column from a visible column.
   * @see {@link CursorColumns}
   */
  static columnFromVisibleColumn(lineContent, visibleColumn, tabSize) {
    if (visibleColumn <= 0) {
      return 1;
    }
    const lineContentLength = lineContent.length;
    const iterator = new GraphemeIterator(lineContent);
    let beforeVisibleColumn = 0;
    let beforeColumn = 1;
    while (!iterator.eol()) {
      const codePoint = getNextCodePoint(lineContent, lineContentLength, iterator.offset);
      iterator.nextGraphemeLength();
      const afterVisibleColumn = this._nextVisibleColumn(codePoint, beforeVisibleColumn, tabSize);
      const afterColumn = iterator.offset + 1;
      if (afterVisibleColumn >= visibleColumn) {
        const beforeDelta = visibleColumn - beforeVisibleColumn;
        const afterDelta = afterVisibleColumn - visibleColumn;
        if (afterDelta < beforeDelta) {
          return afterColumn;
        } else {
          return beforeColumn;
        }
      }
      beforeVisibleColumn = afterVisibleColumn;
      beforeColumn = afterColumn;
    }
    return lineContentLength + 1;
  }
  /**
   * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
   * @see {@link CursorColumns}
   */
  static nextRenderTabStop(visibleColumn, tabSize) {
    return visibleColumn + tabSize - visibleColumn % tabSize;
  }
  /**
   * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
   * @see {@link CursorColumns}
   */
  static nextIndentTabStop(visibleColumn, indentSize) {
    return visibleColumn + indentSize - visibleColumn % indentSize;
  }
  /**
   * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
   * @see {@link CursorColumns}
   */
  static prevRenderTabStop(column, tabSize) {
    return Math.max(0, column - 1 - (column - 1) % tabSize);
  }
  /**
   * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
   * @see {@link CursorColumns}
   */
  static prevIndentTabStop(column, indentSize) {
    return Math.max(0, column - 1 - (column - 1) % indentSize);
  }
}
class AtomicTabMoveOperations {
  /**
   * Get the visible column at the position. If we get to a non-whitespace character first
   * or past the end of string then return -1.
   *
   * **Note** `position` and the return value are 0-based.
   */
  static whitespaceVisibleColumn(lineContent, position, tabSize) {
    const lineLength = lineContent.length;
    let visibleColumn = 0;
    let prevTabStopPosition = -1;
    let prevTabStopVisibleColumn = -1;
    for (let i = 0; i < lineLength; i++) {
      if (i === position) {
        return [prevTabStopPosition, prevTabStopVisibleColumn, visibleColumn];
      }
      if (visibleColumn % tabSize === 0) {
        prevTabStopPosition = i;
        prevTabStopVisibleColumn = visibleColumn;
      }
      const chCode = lineContent.charCodeAt(i);
      switch (chCode) {
        case 32:
          visibleColumn += 1;
          break;
        case 9:
          visibleColumn = CursorColumns.nextRenderTabStop(visibleColumn, tabSize);
          break;
        default:
          return [-1, -1, -1];
      }
    }
    if (position === lineLength) {
      return [prevTabStopPosition, prevTabStopVisibleColumn, visibleColumn];
    }
    return [-1, -1, -1];
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
  static atomicPosition(lineContent, position, tabSize, direction) {
    const lineLength = lineContent.length;
    const [prevTabStopPosition, prevTabStopVisibleColumn, visibleColumn] = AtomicTabMoveOperations.whitespaceVisibleColumn(lineContent, position, tabSize);
    if (visibleColumn === -1) {
      return -1;
    }
    let left;
    switch (direction) {
      case 0:
        left = true;
        break;
      case 1:
        left = false;
        break;
      case 2:
        if (visibleColumn % tabSize === 0) {
          return position;
        }
        left = visibleColumn % tabSize <= tabSize / 2;
        break;
    }
    if (left) {
      if (prevTabStopPosition === -1) {
        return -1;
      }
      let currentVisibleColumn2 = prevTabStopVisibleColumn;
      for (let i = prevTabStopPosition; i < lineLength; ++i) {
        if (currentVisibleColumn2 === prevTabStopVisibleColumn + tabSize) {
          return prevTabStopPosition;
        }
        const chCode = lineContent.charCodeAt(i);
        switch (chCode) {
          case 32:
            currentVisibleColumn2 += 1;
            break;
          case 9:
            currentVisibleColumn2 = CursorColumns.nextRenderTabStop(currentVisibleColumn2, tabSize);
            break;
          default:
            return -1;
        }
      }
      if (currentVisibleColumn2 === prevTabStopVisibleColumn + tabSize) {
        return prevTabStopPosition;
      }
      return -1;
    }
    const targetVisibleColumn = CursorColumns.nextRenderTabStop(visibleColumn, tabSize);
    let currentVisibleColumn = visibleColumn;
    for (let i = position; i < lineLength; i++) {
      if (currentVisibleColumn === targetVisibleColumn) {
        return i;
      }
      const chCode = lineContent.charCodeAt(i);
      switch (chCode) {
        case 32:
          currentVisibleColumn += 1;
          break;
        case 9:
          currentVisibleColumn = CursorColumns.nextRenderTabStop(currentVisibleColumn, tabSize);
          break;
        default:
          return -1;
      }
    }
    if (currentVisibleColumn === targetVisibleColumn) {
      return lineLength;
    }
    return -1;
  }
}
class UnknownHitTestResult {
  constructor(hitTarget = null) {
    this.hitTarget = hitTarget;
    this.type = 0;
  }
}
class ContentHitTestResult {
  get hitTarget() {
    return this.spanNode;
  }
  constructor(position, spanNode, injectedText) {
    this.position = position;
    this.spanNode = spanNode;
    this.injectedText = injectedText;
    this.type = 1;
  }
}
var HitTestResult;
(function(HitTestResult2) {
  function createFromDOMInfo(ctx, spanNode, offset) {
    const position = ctx.getPositionFromDOMInfo(spanNode, offset);
    if (position) {
      return new ContentHitTestResult(position, spanNode, null);
    }
    return new UnknownHitTestResult(spanNode);
  }
  HitTestResult2.createFromDOMInfo = createFromDOMInfo;
})(HitTestResult || (HitTestResult = {}));
class PointerHandlerLastRenderData {
  constructor(lastViewCursorsRenderData, lastTextareaPosition) {
    this.lastViewCursorsRenderData = lastViewCursorsRenderData;
    this.lastTextareaPosition = lastTextareaPosition;
  }
}
class MouseTarget {
  static _deduceRage(position, range2 = null) {
    if (!range2 && position) {
      return new Range(position.lineNumber, position.column, position.lineNumber, position.column);
    }
    return range2 ?? null;
  }
  static createUnknown(element, mouseColumn, position) {
    return { type: 0, element, mouseColumn, position, range: this._deduceRage(position) };
  }
  static createTextarea(element, mouseColumn) {
    return { type: 1, element, mouseColumn, position: null, range: null };
  }
  static createMargin(type, element, mouseColumn, position, range2, detail) {
    return { type, element, mouseColumn, position, range: range2, detail };
  }
  static createViewZone(type, element, mouseColumn, position, detail) {
    return { type, element, mouseColumn, position, range: this._deduceRage(position), detail };
  }
  static createContentText(element, mouseColumn, position, range2, detail) {
    return { type: 6, element, mouseColumn, position, range: this._deduceRage(position, range2), detail };
  }
  static createContentEmpty(element, mouseColumn, position, detail) {
    return { type: 7, element, mouseColumn, position, range: this._deduceRage(position), detail };
  }
  static createContentWidget(element, mouseColumn, detail) {
    return { type: 9, element, mouseColumn, position: null, range: null, detail };
  }
  static createScrollbar(element, mouseColumn, position) {
    return { type: 11, element, mouseColumn, position, range: this._deduceRage(position) };
  }
  static createOverlayWidget(element, mouseColumn, detail) {
    return { type: 12, element, mouseColumn, position: null, range: null, detail };
  }
  static createOutsideEditor(mouseColumn, position, outsidePosition, outsideDistance) {
    return { type: 13, element: null, mouseColumn, position, range: this._deduceRage(position), outsidePosition, outsideDistance };
  }
  static _typeToString(type) {
    if (type === 1) {
      return "TEXTAREA";
    }
    if (type === 2) {
      return "GUTTER_GLYPH_MARGIN";
    }
    if (type === 3) {
      return "GUTTER_LINE_NUMBERS";
    }
    if (type === 4) {
      return "GUTTER_LINE_DECORATIONS";
    }
    if (type === 5) {
      return "GUTTER_VIEW_ZONE";
    }
    if (type === 6) {
      return "CONTENT_TEXT";
    }
    if (type === 7) {
      return "CONTENT_EMPTY";
    }
    if (type === 8) {
      return "CONTENT_VIEW_ZONE";
    }
    if (type === 9) {
      return "CONTENT_WIDGET";
    }
    if (type === 10) {
      return "OVERVIEW_RULER";
    }
    if (type === 11) {
      return "SCROLLBAR";
    }
    if (type === 12) {
      return "OVERLAY_WIDGET";
    }
    return "UNKNOWN";
  }
  static toString(target) {
    return this._typeToString(target.type) + ": " + target.position + " - " + target.range + " - " + JSON.stringify(target.detail);
  }
}
class ElementPath {
  static isTextArea(path) {
    return path.length === 2 && path[0] === 3 && path[1] === 7;
  }
  static isChildOfViewLines(path) {
    return path.length >= 4 && path[0] === 3 && path[3] === 8;
  }
  static isStrictChildOfViewLines(path) {
    return path.length > 4 && path[0] === 3 && path[3] === 8;
  }
  static isChildOfScrollableElement(path) {
    return path.length >= 2 && path[0] === 3 && path[1] === 6;
  }
  static isChildOfMinimap(path) {
    return path.length >= 2 && path[0] === 3 && path[1] === 9;
  }
  static isChildOfContentWidgets(path) {
    return path.length >= 4 && path[0] === 3 && path[3] === 1;
  }
  static isChildOfOverflowGuard(path) {
    return path.length >= 1 && path[0] === 3;
  }
  static isChildOfOverflowingContentWidgets(path) {
    return path.length >= 1 && path[0] === 2;
  }
  static isChildOfOverlayWidgets(path) {
    return path.length >= 2 && path[0] === 3 && path[1] === 4;
  }
  static isChildOfOverflowingOverlayWidgets(path) {
    return path.length >= 1 && path[0] === 5;
  }
}
class HitTestContext {
  constructor(context, viewHelper, lastRenderData) {
    this.viewModel = context.viewModel;
    const options = context.configuration.options;
    this.layoutInfo = options.get(
      146
      /* EditorOption.layoutInfo */
    );
    this.viewDomNode = viewHelper.viewDomNode;
    this.lineHeight = options.get(
      67
      /* EditorOption.lineHeight */
    );
    this.stickyTabStops = options.get(
      117
      /* EditorOption.stickyTabStops */
    );
    this.typicalHalfwidthCharacterWidth = options.get(
      50
      /* EditorOption.fontInfo */
    ).typicalHalfwidthCharacterWidth;
    this.lastRenderData = lastRenderData;
    this._context = context;
    this._viewHelper = viewHelper;
  }
  getZoneAtCoord(mouseVerticalOffset) {
    return HitTestContext.getZoneAtCoord(this._context, mouseVerticalOffset);
  }
  static getZoneAtCoord(context, mouseVerticalOffset) {
    const viewZoneWhitespace = context.viewLayout.getWhitespaceAtVerticalOffset(mouseVerticalOffset);
    if (viewZoneWhitespace) {
      const viewZoneMiddle = viewZoneWhitespace.verticalOffset + viewZoneWhitespace.height / 2;
      const lineCount = context.viewModel.getLineCount();
      let positionBefore = null;
      let position;
      let positionAfter = null;
      if (viewZoneWhitespace.afterLineNumber !== lineCount) {
        positionAfter = new Position(viewZoneWhitespace.afterLineNumber + 1, 1);
      }
      if (viewZoneWhitespace.afterLineNumber > 0) {
        positionBefore = new Position(viewZoneWhitespace.afterLineNumber, context.viewModel.getLineMaxColumn(viewZoneWhitespace.afterLineNumber));
      }
      if (positionAfter === null) {
        position = positionBefore;
      } else if (positionBefore === null) {
        position = positionAfter;
      } else if (mouseVerticalOffset < viewZoneMiddle) {
        position = positionBefore;
      } else {
        position = positionAfter;
      }
      return {
        viewZoneId: viewZoneWhitespace.id,
        afterLineNumber: viewZoneWhitespace.afterLineNumber,
        positionBefore,
        positionAfter,
        position
      };
    }
    return null;
  }
  getFullLineRangeAtCoord(mouseVerticalOffset) {
    if (this._context.viewLayout.isAfterLines(mouseVerticalOffset)) {
      const lineNumber2 = this._context.viewModel.getLineCount();
      const maxLineColumn2 = this._context.viewModel.getLineMaxColumn(lineNumber2);
      return {
        range: new Range(lineNumber2, maxLineColumn2, lineNumber2, maxLineColumn2),
        isAfterLines: true
      };
    }
    const lineNumber = this._context.viewLayout.getLineNumberAtVerticalOffset(mouseVerticalOffset);
    const maxLineColumn = this._context.viewModel.getLineMaxColumn(lineNumber);
    return {
      range: new Range(lineNumber, 1, lineNumber, maxLineColumn),
      isAfterLines: false
    };
  }
  getLineNumberAtVerticalOffset(mouseVerticalOffset) {
    return this._context.viewLayout.getLineNumberAtVerticalOffset(mouseVerticalOffset);
  }
  isAfterLines(mouseVerticalOffset) {
    return this._context.viewLayout.isAfterLines(mouseVerticalOffset);
  }
  isInTopPadding(mouseVerticalOffset) {
    return this._context.viewLayout.isInTopPadding(mouseVerticalOffset);
  }
  isInBottomPadding(mouseVerticalOffset) {
    return this._context.viewLayout.isInBottomPadding(mouseVerticalOffset);
  }
  getVerticalOffsetForLineNumber(lineNumber) {
    return this._context.viewLayout.getVerticalOffsetForLineNumber(lineNumber);
  }
  findAttribute(element, attr) {
    return HitTestContext._findAttribute(element, attr, this._viewHelper.viewDomNode);
  }
  static _findAttribute(element, attr, stopAt) {
    while (element && element !== element.ownerDocument.body) {
      if (element.hasAttribute && element.hasAttribute(attr)) {
        return element.getAttribute(attr);
      }
      if (element === stopAt) {
        return null;
      }
      element = element.parentNode;
    }
    return null;
  }
  getLineWidth(lineNumber) {
    return this._viewHelper.getLineWidth(lineNumber);
  }
  visibleRangeForPosition(lineNumber, column) {
    return this._viewHelper.visibleRangeForPosition(lineNumber, column);
  }
  getPositionFromDOMInfo(spanNode, offset) {
    return this._viewHelper.getPositionFromDOMInfo(spanNode, offset);
  }
  getCurrentScrollTop() {
    return this._context.viewLayout.getCurrentScrollTop();
  }
  getCurrentScrollLeft() {
    return this._context.viewLayout.getCurrentScrollLeft();
  }
}
class BareHitTestRequest {
  constructor(ctx, editorPos, pos, relativePos) {
    this.editorPos = editorPos;
    this.pos = pos;
    this.relativePos = relativePos;
    this.mouseVerticalOffset = Math.max(0, ctx.getCurrentScrollTop() + this.relativePos.y);
    this.mouseContentHorizontalOffset = ctx.getCurrentScrollLeft() + this.relativePos.x - ctx.layoutInfo.contentLeft;
    this.isInMarginArea = this.relativePos.x < ctx.layoutInfo.contentLeft && this.relativePos.x >= ctx.layoutInfo.glyphMarginLeft;
    this.isInContentArea = !this.isInMarginArea;
    this.mouseColumn = Math.max(0, MouseTargetFactory._getMouseColumn(this.mouseContentHorizontalOffset, ctx.typicalHalfwidthCharacterWidth));
  }
}
class HitTestRequest extends BareHitTestRequest {
  get target() {
    if (this._useHitTestTarget) {
      return this.hitTestResult.value.hitTarget;
    }
    return this._eventTarget;
  }
  get targetPath() {
    if (this._targetPathCacheElement !== this.target) {
      this._targetPathCacheElement = this.target;
      this._targetPathCacheValue = PartFingerprints.collect(this.target, this._ctx.viewDomNode);
    }
    return this._targetPathCacheValue;
  }
  constructor(ctx, editorPos, pos, relativePos, eventTarget) {
    super(ctx, editorPos, pos, relativePos);
    this.hitTestResult = new Lazy(() => MouseTargetFactory.doHitTest(this._ctx, this));
    this._targetPathCacheElement = null;
    this._targetPathCacheValue = new Uint8Array(0);
    this._ctx = ctx;
    this._eventTarget = eventTarget;
    const hasEventTarget = Boolean(this._eventTarget);
    this._useHitTestTarget = !hasEventTarget;
  }
  toString() {
    return `pos(${this.pos.x},${this.pos.y}), editorPos(${this.editorPos.x},${this.editorPos.y}), relativePos(${this.relativePos.x},${this.relativePos.y}), mouseVerticalOffset: ${this.mouseVerticalOffset}, mouseContentHorizontalOffset: ${this.mouseContentHorizontalOffset}
	target: ${this.target ? this.target.outerHTML : null}`;
  }
  get wouldBenefitFromHitTestTargetSwitch() {
    return !this._useHitTestTarget && this.hitTestResult.value.hitTarget !== null && this.target !== this.hitTestResult.value.hitTarget;
  }
  switchToHitTestTarget() {
    this._useHitTestTarget = true;
  }
  _getMouseColumn(position = null) {
    if (position && position.column < this._ctx.viewModel.getLineMaxColumn(position.lineNumber)) {
      return CursorColumns.visibleColumnFromColumn(this._ctx.viewModel.getLineContent(position.lineNumber), position.column, this._ctx.viewModel.model.getOptions().tabSize) + 1;
    }
    return this.mouseColumn;
  }
  fulfillUnknown(position = null) {
    return MouseTarget.createUnknown(this.target, this._getMouseColumn(position), position);
  }
  fulfillTextarea() {
    return MouseTarget.createTextarea(this.target, this._getMouseColumn());
  }
  fulfillMargin(type, position, range2, detail) {
    return MouseTarget.createMargin(type, this.target, this._getMouseColumn(position), position, range2, detail);
  }
  fulfillViewZone(type, position, detail) {
    return MouseTarget.createViewZone(type, this.target, this._getMouseColumn(position), position, detail);
  }
  fulfillContentText(position, range2, detail) {
    return MouseTarget.createContentText(this.target, this._getMouseColumn(position), position, range2, detail);
  }
  fulfillContentEmpty(position, detail) {
    return MouseTarget.createContentEmpty(this.target, this._getMouseColumn(position), position, detail);
  }
  fulfillContentWidget(detail) {
    return MouseTarget.createContentWidget(this.target, this._getMouseColumn(), detail);
  }
  fulfillScrollbar(position) {
    return MouseTarget.createScrollbar(this.target, this._getMouseColumn(position), position);
  }
  fulfillOverlayWidget(detail) {
    return MouseTarget.createOverlayWidget(this.target, this._getMouseColumn(), detail);
  }
}
const EMPTY_CONTENT_AFTER_LINES = { isAfterLines: true };
function createEmptyContentDataInLines(horizontalDistanceToText) {
  return {
    isAfterLines: false,
    horizontalDistanceToText
  };
}
class MouseTargetFactory {
  constructor(context, viewHelper) {
    this._context = context;
    this._viewHelper = viewHelper;
  }
  mouseTargetIsWidget(e) {
    const t = e.target;
    const path = PartFingerprints.collect(t, this._viewHelper.viewDomNode);
    if (ElementPath.isChildOfContentWidgets(path) || ElementPath.isChildOfOverflowingContentWidgets(path)) {
      return true;
    }
    if (ElementPath.isChildOfOverlayWidgets(path) || ElementPath.isChildOfOverflowingOverlayWidgets(path)) {
      return true;
    }
    return false;
  }
  createMouseTarget(lastRenderData, editorPos, pos, relativePos, target) {
    const ctx = new HitTestContext(this._context, this._viewHelper, lastRenderData);
    const request = new HitTestRequest(ctx, editorPos, pos, relativePos, target);
    try {
      const r = MouseTargetFactory._createMouseTarget(ctx, request);
      if (r.type === 6) {
        if (ctx.stickyTabStops && r.position !== null) {
          const position = MouseTargetFactory._snapToSoftTabBoundary(r.position, ctx.viewModel);
          const range2 = Range.fromPositions(position, position).plusRange(r.range);
          return request.fulfillContentText(position, range2, r.detail);
        }
      }
      return r;
    } catch (err) {
      return request.fulfillUnknown();
    }
  }
  static _createMouseTarget(ctx, request) {
    if (request.target === null) {
      return request.fulfillUnknown();
    }
    const resolvedRequest = request;
    let result = null;
    if (!ElementPath.isChildOfOverflowGuard(request.targetPath) && !ElementPath.isChildOfOverflowingContentWidgets(request.targetPath) && !ElementPath.isChildOfOverflowingOverlayWidgets(request.targetPath)) {
      result = result || request.fulfillUnknown();
    }
    result = result || MouseTargetFactory._hitTestContentWidget(ctx, resolvedRequest);
    result = result || MouseTargetFactory._hitTestOverlayWidget(ctx, resolvedRequest);
    result = result || MouseTargetFactory._hitTestMinimap(ctx, resolvedRequest);
    result = result || MouseTargetFactory._hitTestScrollbarSlider(ctx, resolvedRequest);
    result = result || MouseTargetFactory._hitTestViewZone(ctx, resolvedRequest);
    result = result || MouseTargetFactory._hitTestMargin(ctx, resolvedRequest);
    result = result || MouseTargetFactory._hitTestViewCursor(ctx, resolvedRequest);
    result = result || MouseTargetFactory._hitTestTextArea(ctx, resolvedRequest);
    result = result || MouseTargetFactory._hitTestViewLines(ctx, resolvedRequest);
    result = result || MouseTargetFactory._hitTestScrollbar(ctx, resolvedRequest);
    return result || request.fulfillUnknown();
  }
  static _hitTestContentWidget(ctx, request) {
    if (ElementPath.isChildOfContentWidgets(request.targetPath) || ElementPath.isChildOfOverflowingContentWidgets(request.targetPath)) {
      const widgetId = ctx.findAttribute(request.target, "widgetId");
      if (widgetId) {
        return request.fulfillContentWidget(widgetId);
      } else {
        return request.fulfillUnknown();
      }
    }
    return null;
  }
  static _hitTestOverlayWidget(ctx, request) {
    if (ElementPath.isChildOfOverlayWidgets(request.targetPath) || ElementPath.isChildOfOverflowingOverlayWidgets(request.targetPath)) {
      const widgetId = ctx.findAttribute(request.target, "widgetId");
      if (widgetId) {
        return request.fulfillOverlayWidget(widgetId);
      } else {
        return request.fulfillUnknown();
      }
    }
    return null;
  }
  static _hitTestViewCursor(ctx, request) {
    if (request.target) {
      const lastViewCursorsRenderData = ctx.lastRenderData.lastViewCursorsRenderData;
      for (const d of lastViewCursorsRenderData) {
        if (request.target === d.domNode) {
          return request.fulfillContentText(d.position, null, { mightBeForeignElement: false, injectedText: null });
        }
      }
    }
    if (request.isInContentArea) {
      const lastViewCursorsRenderData = ctx.lastRenderData.lastViewCursorsRenderData;
      const mouseContentHorizontalOffset = request.mouseContentHorizontalOffset;
      const mouseVerticalOffset = request.mouseVerticalOffset;
      for (const d of lastViewCursorsRenderData) {
        if (mouseContentHorizontalOffset < d.contentLeft) {
          continue;
        }
        if (mouseContentHorizontalOffset > d.contentLeft + d.width) {
          continue;
        }
        const cursorVerticalOffset = ctx.getVerticalOffsetForLineNumber(d.position.lineNumber);
        if (cursorVerticalOffset <= mouseVerticalOffset && mouseVerticalOffset <= cursorVerticalOffset + d.height) {
          return request.fulfillContentText(d.position, null, { mightBeForeignElement: false, injectedText: null });
        }
      }
    }
    return null;
  }
  static _hitTestViewZone(ctx, request) {
    const viewZoneData = ctx.getZoneAtCoord(request.mouseVerticalOffset);
    if (viewZoneData) {
      const mouseTargetType = request.isInContentArea ? 8 : 5;
      return request.fulfillViewZone(mouseTargetType, viewZoneData.position, viewZoneData);
    }
    return null;
  }
  static _hitTestTextArea(ctx, request) {
    if (ElementPath.isTextArea(request.targetPath)) {
      if (ctx.lastRenderData.lastTextareaPosition) {
        return request.fulfillContentText(ctx.lastRenderData.lastTextareaPosition, null, { mightBeForeignElement: false, injectedText: null });
      }
      return request.fulfillTextarea();
    }
    return null;
  }
  static _hitTestMargin(ctx, request) {
    if (request.isInMarginArea) {
      const res = ctx.getFullLineRangeAtCoord(request.mouseVerticalOffset);
      const pos = res.range.getStartPosition();
      let offset = Math.abs(request.relativePos.x);
      const detail = {
        isAfterLines: res.isAfterLines,
        glyphMarginLeft: ctx.layoutInfo.glyphMarginLeft,
        glyphMarginWidth: ctx.layoutInfo.glyphMarginWidth,
        lineNumbersWidth: ctx.layoutInfo.lineNumbersWidth,
        offsetX: offset
      };
      offset -= ctx.layoutInfo.glyphMarginLeft;
      if (offset <= ctx.layoutInfo.glyphMarginWidth) {
        const modelCoordinate = ctx.viewModel.coordinatesConverter.convertViewPositionToModelPosition(res.range.getStartPosition());
        const lanes = ctx.viewModel.glyphLanes.getLanesAtLine(modelCoordinate.lineNumber);
        detail.glyphMarginLane = lanes[Math.floor(offset / ctx.lineHeight)];
        return request.fulfillMargin(2, pos, res.range, detail);
      }
      offset -= ctx.layoutInfo.glyphMarginWidth;
      if (offset <= ctx.layoutInfo.lineNumbersWidth) {
        return request.fulfillMargin(3, pos, res.range, detail);
      }
      offset -= ctx.layoutInfo.lineNumbersWidth;
      return request.fulfillMargin(4, pos, res.range, detail);
    }
    return null;
  }
  static _hitTestViewLines(ctx, request) {
    if (!ElementPath.isChildOfViewLines(request.targetPath)) {
      return null;
    }
    if (ctx.isInTopPadding(request.mouseVerticalOffset)) {
      return request.fulfillContentEmpty(new Position(1, 1), EMPTY_CONTENT_AFTER_LINES);
    }
    if (ctx.isAfterLines(request.mouseVerticalOffset) || ctx.isInBottomPadding(request.mouseVerticalOffset)) {
      const lineCount = ctx.viewModel.getLineCount();
      const maxLineColumn = ctx.viewModel.getLineMaxColumn(lineCount);
      return request.fulfillContentEmpty(new Position(lineCount, maxLineColumn), EMPTY_CONTENT_AFTER_LINES);
    }
    if (ElementPath.isStrictChildOfViewLines(request.targetPath)) {
      const lineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
      if (ctx.viewModel.getLineLength(lineNumber) === 0) {
        const lineWidth2 = ctx.getLineWidth(lineNumber);
        const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth2);
        return request.fulfillContentEmpty(new Position(lineNumber, 1), detail);
      }
      const lineWidth = ctx.getLineWidth(lineNumber);
      if (request.mouseContentHorizontalOffset >= lineWidth) {
        const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
        const pos = new Position(lineNumber, ctx.viewModel.getLineMaxColumn(lineNumber));
        return request.fulfillContentEmpty(pos, detail);
      }
    }
    const hitTestResult = request.hitTestResult.value;
    if (hitTestResult.type === 1) {
      return MouseTargetFactory.createMouseTargetFromHitTestPosition(ctx, request, hitTestResult.spanNode, hitTestResult.position, hitTestResult.injectedText);
    }
    if (request.wouldBenefitFromHitTestTargetSwitch) {
      request.switchToHitTestTarget();
      return this._createMouseTarget(ctx, request);
    }
    return request.fulfillUnknown();
  }
  static _hitTestMinimap(ctx, request) {
    if (ElementPath.isChildOfMinimap(request.targetPath)) {
      const possibleLineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
      const maxColumn = ctx.viewModel.getLineMaxColumn(possibleLineNumber);
      return request.fulfillScrollbar(new Position(possibleLineNumber, maxColumn));
    }
    return null;
  }
  static _hitTestScrollbarSlider(ctx, request) {
    if (ElementPath.isChildOfScrollableElement(request.targetPath)) {
      if (request.target && request.target.nodeType === 1) {
        const className = request.target.className;
        if (className && /\b(slider|scrollbar)\b/.test(className)) {
          const possibleLineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
          const maxColumn = ctx.viewModel.getLineMaxColumn(possibleLineNumber);
          return request.fulfillScrollbar(new Position(possibleLineNumber, maxColumn));
        }
      }
    }
    return null;
  }
  static _hitTestScrollbar(ctx, request) {
    if (ElementPath.isChildOfScrollableElement(request.targetPath)) {
      const possibleLineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
      const maxColumn = ctx.viewModel.getLineMaxColumn(possibleLineNumber);
      return request.fulfillScrollbar(new Position(possibleLineNumber, maxColumn));
    }
    return null;
  }
  getMouseColumn(relativePos) {
    const options = this._context.configuration.options;
    const layoutInfo = options.get(
      146
      /* EditorOption.layoutInfo */
    );
    const mouseContentHorizontalOffset = this._context.viewLayout.getCurrentScrollLeft() + relativePos.x - layoutInfo.contentLeft;
    return MouseTargetFactory._getMouseColumn(mouseContentHorizontalOffset, options.get(
      50
      /* EditorOption.fontInfo */
    ).typicalHalfwidthCharacterWidth);
  }
  static _getMouseColumn(mouseContentHorizontalOffset, typicalHalfwidthCharacterWidth) {
    if (mouseContentHorizontalOffset < 0) {
      return 1;
    }
    const chars = Math.round(mouseContentHorizontalOffset / typicalHalfwidthCharacterWidth);
    return chars + 1;
  }
  static createMouseTargetFromHitTestPosition(ctx, request, spanNode, pos, injectedText) {
    const lineNumber = pos.lineNumber;
    const column = pos.column;
    const lineWidth = ctx.getLineWidth(lineNumber);
    if (request.mouseContentHorizontalOffset > lineWidth) {
      const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
      return request.fulfillContentEmpty(pos, detail);
    }
    const visibleRange = ctx.visibleRangeForPosition(lineNumber, column);
    if (!visibleRange) {
      return request.fulfillUnknown(pos);
    }
    const columnHorizontalOffset = visibleRange.left;
    if (Math.abs(request.mouseContentHorizontalOffset - columnHorizontalOffset) < 1) {
      return request.fulfillContentText(pos, null, { mightBeForeignElement: !!injectedText, injectedText });
    }
    const points = [];
    points.push({ offset: visibleRange.left, column });
    if (column > 1) {
      const visibleRange2 = ctx.visibleRangeForPosition(lineNumber, column - 1);
      if (visibleRange2) {
        points.push({ offset: visibleRange2.left, column: column - 1 });
      }
    }
    const lineMaxColumn = ctx.viewModel.getLineMaxColumn(lineNumber);
    if (column < lineMaxColumn) {
      const visibleRange2 = ctx.visibleRangeForPosition(lineNumber, column + 1);
      if (visibleRange2) {
        points.push({ offset: visibleRange2.left, column: column + 1 });
      }
    }
    points.sort((a, b) => a.offset - b.offset);
    const mouseCoordinates = request.pos.toClientCoordinates(getWindow(ctx.viewDomNode));
    const spanNodeClientRect = spanNode.getBoundingClientRect();
    const mouseIsOverSpanNode = spanNodeClientRect.left <= mouseCoordinates.clientX && mouseCoordinates.clientX <= spanNodeClientRect.right;
    let rng = null;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      if (prev.offset <= request.mouseContentHorizontalOffset && request.mouseContentHorizontalOffset <= curr.offset) {
        rng = new Range(lineNumber, prev.column, lineNumber, curr.column);
        const prevDelta = Math.abs(prev.offset - request.mouseContentHorizontalOffset);
        const nextDelta = Math.abs(curr.offset - request.mouseContentHorizontalOffset);
        pos = prevDelta < nextDelta ? new Position(lineNumber, prev.column) : new Position(lineNumber, curr.column);
        break;
      }
    }
    return request.fulfillContentText(pos, rng, { mightBeForeignElement: !mouseIsOverSpanNode || !!injectedText, injectedText });
  }
  /**
   * Most probably WebKit browsers and Edge
   */
  static _doHitTestWithCaretRangeFromPoint(ctx, request) {
    const lineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
    const lineStartVerticalOffset = ctx.getVerticalOffsetForLineNumber(lineNumber);
    const lineEndVerticalOffset = lineStartVerticalOffset + ctx.lineHeight;
    const isBelowLastLine = lineNumber === ctx.viewModel.getLineCount() && request.mouseVerticalOffset > lineEndVerticalOffset;
    if (!isBelowLastLine) {
      const lineCenteredVerticalOffset = Math.floor((lineStartVerticalOffset + lineEndVerticalOffset) / 2);
      let adjustedPageY = request.pos.y + (lineCenteredVerticalOffset - request.mouseVerticalOffset);
      if (adjustedPageY <= request.editorPos.y) {
        adjustedPageY = request.editorPos.y + 1;
      }
      if (adjustedPageY >= request.editorPos.y + request.editorPos.height) {
        adjustedPageY = request.editorPos.y + request.editorPos.height - 1;
      }
      const adjustedPage = new PageCoordinates(request.pos.x, adjustedPageY);
      const r = this._actualDoHitTestWithCaretRangeFromPoint(ctx, adjustedPage.toClientCoordinates(getWindow(ctx.viewDomNode)));
      if (r.type === 1) {
        return r;
      }
    }
    return this._actualDoHitTestWithCaretRangeFromPoint(ctx, request.pos.toClientCoordinates(getWindow(ctx.viewDomNode)));
  }
  static _actualDoHitTestWithCaretRangeFromPoint(ctx, coords) {
    const shadowRoot = getShadowRoot(ctx.viewDomNode);
    let range2;
    if (shadowRoot) {
      if (typeof shadowRoot.caretRangeFromPoint === "undefined") {
        range2 = shadowCaretRangeFromPoint(shadowRoot, coords.clientX, coords.clientY);
      } else {
        range2 = shadowRoot.caretRangeFromPoint(coords.clientX, coords.clientY);
      }
    } else {
      range2 = ctx.viewDomNode.ownerDocument.caretRangeFromPoint(coords.clientX, coords.clientY);
    }
    if (!range2 || !range2.startContainer) {
      return new UnknownHitTestResult();
    }
    const startContainer = range2.startContainer;
    if (startContainer.nodeType === startContainer.TEXT_NODE) {
      const parent1 = startContainer.parentNode;
      const parent2 = parent1 ? parent1.parentNode : null;
      const parent3 = parent2 ? parent2.parentNode : null;
      const parent3ClassName = parent3 && parent3.nodeType === parent3.ELEMENT_NODE ? parent3.className : null;
      if (parent3ClassName === ViewLine.CLASS_NAME) {
        return HitTestResult.createFromDOMInfo(ctx, parent1, range2.startOffset);
      } else {
        return new UnknownHitTestResult(startContainer.parentNode);
      }
    } else if (startContainer.nodeType === startContainer.ELEMENT_NODE) {
      const parent1 = startContainer.parentNode;
      const parent2 = parent1 ? parent1.parentNode : null;
      const parent2ClassName = parent2 && parent2.nodeType === parent2.ELEMENT_NODE ? parent2.className : null;
      if (parent2ClassName === ViewLine.CLASS_NAME) {
        return HitTestResult.createFromDOMInfo(ctx, startContainer, startContainer.textContent.length);
      } else {
        return new UnknownHitTestResult(startContainer);
      }
    }
    return new UnknownHitTestResult();
  }
  /**
   * Most probably Gecko
   */
  static _doHitTestWithCaretPositionFromPoint(ctx, coords) {
    const hitResult = ctx.viewDomNode.ownerDocument.caretPositionFromPoint(coords.clientX, coords.clientY);
    if (hitResult.offsetNode.nodeType === hitResult.offsetNode.TEXT_NODE) {
      const parent1 = hitResult.offsetNode.parentNode;
      const parent2 = parent1 ? parent1.parentNode : null;
      const parent3 = parent2 ? parent2.parentNode : null;
      const parent3ClassName = parent3 && parent3.nodeType === parent3.ELEMENT_NODE ? parent3.className : null;
      if (parent3ClassName === ViewLine.CLASS_NAME) {
        return HitTestResult.createFromDOMInfo(ctx, hitResult.offsetNode.parentNode, hitResult.offset);
      } else {
        return new UnknownHitTestResult(hitResult.offsetNode.parentNode);
      }
    }
    if (hitResult.offsetNode.nodeType === hitResult.offsetNode.ELEMENT_NODE) {
      const parent1 = hitResult.offsetNode.parentNode;
      const parent1ClassName = parent1 && parent1.nodeType === parent1.ELEMENT_NODE ? parent1.className : null;
      const parent2 = parent1 ? parent1.parentNode : null;
      const parent2ClassName = parent2 && parent2.nodeType === parent2.ELEMENT_NODE ? parent2.className : null;
      if (parent1ClassName === ViewLine.CLASS_NAME) {
        const tokenSpan = hitResult.offsetNode.childNodes[Math.min(hitResult.offset, hitResult.offsetNode.childNodes.length - 1)];
        if (tokenSpan) {
          return HitTestResult.createFromDOMInfo(ctx, tokenSpan, 0);
        }
      } else if (parent2ClassName === ViewLine.CLASS_NAME) {
        return HitTestResult.createFromDOMInfo(ctx, hitResult.offsetNode, 0);
      }
    }
    return new UnknownHitTestResult(hitResult.offsetNode);
  }
  static _snapToSoftTabBoundary(position, viewModel) {
    const lineContent = viewModel.getLineContent(position.lineNumber);
    const { tabSize } = viewModel.model.getOptions();
    const newPosition = AtomicTabMoveOperations.atomicPosition(
      lineContent,
      position.column - 1,
      tabSize,
      2
      /* Direction.Nearest */
    );
    if (newPosition !== -1) {
      return new Position(position.lineNumber, newPosition + 1);
    }
    return position;
  }
  static doHitTest(ctx, request) {
    let result = new UnknownHitTestResult();
    if (typeof ctx.viewDomNode.ownerDocument.caretRangeFromPoint === "function") {
      result = this._doHitTestWithCaretRangeFromPoint(ctx, request);
    } else if (ctx.viewDomNode.ownerDocument.caretPositionFromPoint) {
      result = this._doHitTestWithCaretPositionFromPoint(ctx, request.pos.toClientCoordinates(getWindow(ctx.viewDomNode)));
    }
    if (result.type === 1) {
      const injectedText = ctx.viewModel.getInjectedTextAt(result.position);
      const normalizedPosition = ctx.viewModel.normalizePosition(
        result.position,
        2
        /* PositionAffinity.None */
      );
      if (injectedText || !normalizedPosition.equals(result.position)) {
        result = new ContentHitTestResult(normalizedPosition, result.spanNode, injectedText);
      }
    }
    return result;
  }
}
function shadowCaretRangeFromPoint(shadowRoot, x, y) {
  const range2 = document.createRange();
  let el = shadowRoot.elementFromPoint(x, y);
  if (el !== null) {
    while (el && el.firstChild && el.firstChild.nodeType !== el.firstChild.TEXT_NODE && el.lastChild && el.lastChild.firstChild) {
      el = el.lastChild;
    }
    const rect = el.getBoundingClientRect();
    const elWindow = getWindow(el);
    const fontStyle = elWindow.getComputedStyle(el, null).getPropertyValue("font-style");
    const fontVariant = elWindow.getComputedStyle(el, null).getPropertyValue("font-variant");
    const fontWeight = elWindow.getComputedStyle(el, null).getPropertyValue("font-weight");
    const fontSize = elWindow.getComputedStyle(el, null).getPropertyValue("font-size");
    const lineHeight = elWindow.getComputedStyle(el, null).getPropertyValue("line-height");
    const fontFamily = elWindow.getComputedStyle(el, null).getPropertyValue("font-family");
    const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
    const text2 = el.innerText;
    let pixelCursor = rect.left;
    let offset = 0;
    let step;
    if (x > rect.left + rect.width) {
      offset = text2.length;
    } else {
      const charWidthReader = CharWidthReader.getInstance();
      for (let i = 0; i < text2.length + 1; i++) {
        step = charWidthReader.getCharWidth(text2.charAt(i), font) / 2;
        pixelCursor += step;
        if (x < pixelCursor) {
          offset = i;
          break;
        }
        pixelCursor += step;
      }
    }
    range2.setStart(el.firstChild, offset);
    range2.setEnd(el.firstChild, offset);
  }
  return range2;
}
class CharWidthReader {
  static {
    this._INSTANCE = null;
  }
  static getInstance() {
    if (!CharWidthReader._INSTANCE) {
      CharWidthReader._INSTANCE = new CharWidthReader();
    }
    return CharWidthReader._INSTANCE;
  }
  constructor() {
    this._cache = {};
    this._canvas = document.createElement("canvas");
  }
  getCharWidth(char, font) {
    const cacheKey = char + font;
    if (this._cache[cacheKey]) {
      return this._cache[cacheKey];
    }
    const context = this._canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(char);
    const width = metrics.width;
    this._cache[cacheKey] = width;
    return width;
  }
}
const mouseTarget = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HitTestContext,
  MouseTarget,
  MouseTargetFactory,
  PointerHandlerLastRenderData
}, Symbol.toStringTag, { value: "Module" }));
export {
  WindowIntervalTimer as $,
  AmbiguousCharacters as A,
  checkAdjacentItems as B,
  COI as C,
  DEFAULT_WORD_REGEXP as D,
  EDITOR_FONT_DEFAULTS as E,
  FastDomNode as F,
  firstNonWhitespaceIndex as G,
  lastNonWhitespaceIndex as H,
  InvisibleCharacters as I,
  forEachAdjacent as J,
  pushMany as K,
  compareBy as L,
  reverseOrder as M,
  numberComparator as N,
  forEachWithNeighbors as O,
  equals$1 as P,
  groupAdjacentBy as Q,
  Registry as R,
  Color as S,
  HSLA as T,
  arrayInsert as U,
  splitLines as V,
  IntervalTimer as W,
  createProxyObject as X,
  getAllMethodNames as Y,
  isNonEmptyArray as Z,
  timeout as _,
  EditorFontVariations as a,
  compareIgnoreCase as a$,
  mainWindow as a0,
  ColorScheme as a1,
  Schemas as a2,
  windowOpenNoOpener as a3,
  firstOrDefault as a4,
  getClientArea as a5,
  equalsIgnoreCase as a6,
  doHash as a7,
  matchesScheme as a8,
  startsWithIgnoreCase as a9,
  reset as aA,
  hookDomPurifyHrefAndSrcSanitizer as aB,
  sanitize as aC,
  basicMarkupHtmlTags as aD,
  addHook as aE,
  cloneAndChange as aF,
  Lazy as aG,
  removeHook as aH,
  clearNode as aI,
  prepend as aJ,
  getDomNodeZoomLevel as aK,
  hide as aL,
  show as aM,
  BrowserFeatures as aN,
  getTotalWidth as aO,
  getTotalHeight as aP,
  getActiveWindow as aQ,
  isAncestor as aR,
  isAncestorOfActiveElement as aS,
  editorHoverBorder as aT,
  editorOptionsRegistry as aU,
  EDITOR_MODEL_DEFAULTS as aV,
  deepClone as aW,
  deepFreeze as aX,
  ResolvedKeybinding as aY,
  ResolvedChord as aZ,
  KeyCodeChord as a_,
  isThenable as aa,
  ltrim as ab,
  isHTMLElement as ac,
  addStandardDisposableListener as ad,
  onDidRegisterWindow as ae,
  addDisposableListener as af,
  tail as ag,
  scheduleAtNextAnimationFrame as ah,
  StandardMouseEvent as ai,
  getWindow as aj,
  EventType as ak,
  StandardKeyboardEvent as al,
  GlobalPointerMoveMonitor as am,
  TimeoutTimer as an,
  createFastDomNode as ao,
  getDomNodePagePosition as ap,
  StandardWheelEvent as aq,
  isChrome as ar,
  getZoomFactor as as,
  append as at,
  $ as au,
  isEmojiImprecise as av,
  convertSimple2RegExpPattern as aw,
  compare as ax,
  VSBuffer as ay,
  escape as az,
  EditorFontLigatures as b,
  inputValidationInfoBackground as b$,
  compareSubstring as b0,
  compareSubstringIgnoreCase as b1,
  startsWithUTF8BOM as b2,
  regExpLeadsToEndlessLoop as b3,
  getContentWidth as b4,
  Delayer as b5,
  getContentHeight as b6,
  disposableTimeout as b7,
  getTopLeftOffset as b8,
  animate as b9,
  inputActiveOptionBackground as bA,
  inputActiveOptionForeground as bB,
  inputActiveOptionBorder as bC,
  radioInactiveHoverBackground as bD,
  radioInactiveBorder as bE,
  radioInactiveBackground as bF,
  radioInactiveForeground as bG,
  radioActiveBorder as bH,
  radioActiveBackground as bI,
  radioActiveForeground as bJ,
  checkboxForeground as bK,
  checkboxBorder as bL,
  checkboxBackground as bM,
  textLinkForeground as bN,
  problemsInfoIconForeground as bO,
  problemsWarningIconForeground as bP,
  problemsErrorIconForeground as bQ,
  contrastBorder as bR,
  editorWidgetForeground as bS,
  editorWidgetBackground as bT,
  inputValidationErrorForeground as bU,
  inputValidationErrorBackground as bV,
  inputValidationErrorBorder as bW,
  inputValidationWarningForeground as bX,
  inputValidationWarningBackground as bY,
  inputValidationWarningBorder as bZ,
  inputValidationInfoForeground as b_,
  isSVGElement as ba,
  binarySearch as bb,
  range as bc,
  EventHelper as bd,
  createStyleSheet as be,
  asCssValueWithDefault as bf,
  isMouseEvent as bg,
  isFirefox as bh,
  ThrottledDelayer as bi,
  asCssVariable as bj,
  asCssVariableWithDefault as bk,
  activeContrastBorder as bl,
  widgetShadow as bm,
  keybindingLabelBottomBorder as bn,
  keybindingLabelBorder as bo,
  keybindingLabelForeground as bp,
  keybindingLabelBackground as bq,
  buttonBorder as br,
  buttonSecondaryHoverBackground as bs,
  buttonSecondaryBackground as bt,
  buttonSecondaryForeground as bu,
  buttonHoverBackground as bv,
  buttonBackground as bw,
  buttonSeparator as bx,
  buttonForeground as by,
  progressBarBackground as bz,
  getActiveElement as c,
  matchesSomeScheme as c$,
  inputValidationInfoBorder as c0,
  inputBorder as c1,
  inputForeground as c2,
  inputBackground as c3,
  listFilterWidgetShadow as c4,
  listFilterWidgetNoMatchesOutline as c5,
  listFilterWidgetOutline as c6,
  listFilterWidgetBackground as c7,
  badgeForeground as c8,
  badgeBackground as c9,
  quickInputListFocusForeground as cA,
  quickInputListFocusIconForeground as cB,
  quickInputListFocusBackground as cC,
  focusBorder as cD,
  selectBorder as cE,
  pickerGroupForeground as cF,
  selectForeground as cG,
  selectListBackground as cH,
  selectBackground as cI,
  scrollbarSliderActiveBackground as cJ,
  scrollbarSliderHoverBackground as cK,
  scrollbarSliderBackground as cL,
  menuSeparatorBackground as cM,
  menuSelectionBorder as cN,
  menuSelectionBackground as cO,
  menuSelectionForeground as cP,
  menuBackground as cQ,
  menuForeground as cR,
  menuBorder as cS,
  ModifierKeyEmitter as cT,
  asCSSUrl as cU,
  isDark as cV,
  trackFocus as cW,
  isInShadowDOM as cX,
  RunOnceScheduler as cY,
  Dimension as cZ,
  rtrim as c_,
  breadcrumbsActiveSelectionForeground as ca,
  breadcrumbsFocusForeground as cb,
  breadcrumbsForeground as cc,
  breadcrumbsBackground as cd,
  tableOddRowsBackgroundColor as ce,
  tableColumnsBorder as cf,
  scrollbarShadow as cg,
  treeInactiveIndentGuidesStroke as ch,
  treeIndentGuidesStroke as ci,
  listDropBetweenBackground as cj,
  listDropOverBackground as ck,
  listHoverForeground as cl,
  listHoverBackground as cm,
  listInactiveFocusOutline as cn,
  listInactiveFocusBackground as co,
  listInactiveSelectionForeground as cp,
  listInactiveSelectionIconForeground as cq,
  listInactiveSelectionBackground as cr,
  listActiveSelectionForeground as cs,
  listActiveSelectionBackground as ct,
  listFocusAndSelectionOutline as cu,
  listActiveSelectionIconForeground as cv,
  listFocusOutline as cw,
  listFocusForeground as cx,
  listFocusBackground as cy,
  editorWidgetBorder as cz,
  decodeKeybinding as d,
  getActiveDocument as d$,
  registerColor as d0,
  editorFindMatchHighlight as d1,
  editorBackground as d2,
  RGBA as d3,
  editorWarningBorder as d4,
  editorWarningForeground as d5,
  editorInfoBorder as d6,
  editorInfoForeground as d7,
  editorWarningBackground as d8,
  minimapError as d9,
  pushToEnd as dA,
  MicrotaskDelay as dB,
  splice as dC,
  tail2 as dD,
  isKeyboardEvent as dE,
  hasParentWithClass as dF,
  Promises as dG,
  createCancelablePromise as dH,
  after as dI,
  isHTMLAnchorElement as dJ,
  onWillUnregisterWindow as dK,
  pickerGroupBorder as dL,
  quickInputBackground as dM,
  widgetBorder as dN,
  quickInputTitleBackground as dO,
  quickInputForeground as dP,
  editorForeground as dQ,
  editorSelectionHighlight as dR,
  editorInactiveSelection as dS,
  asCSSPropertyValue as dT,
  Extensions as dU,
  addMatchMediaChangeListener as dV,
  isHighContrast as dW,
  asCssVariableName as dX,
  removeFastWithoutKeepingOrder as dY,
  isSafari as dZ,
  isWebkitWebView as d_,
  minimapWarning as da,
  minimapInfo as db,
  CursorColumns as dc,
  ArrayQueue as dd,
  CallbackIterable as de,
  writeUInt32BE as df,
  writeUInt16LE as dg,
  readUInt32BE as dh,
  decodeUTF16LE as di,
  writeUInt8 as dj,
  readUInt8 as dk,
  containsRTL as dl,
  containsUnusualLineTerminators as dm,
  UTF8_BOM_CHARACTER as dn,
  runWhenGlobalIdle as dp,
  singleLetterHash as dq,
  UNUSUAL_LINE_TERMINATORS as dr,
  htmlAttributeEncodeValue as ds,
  StringSHA1 as dt,
  DeferredPromise as du,
  createCSSRule as dv,
  isEventLike as dw,
  format as dx,
  isActiveElement as dy,
  pushToStart as dz,
  isUpperAsciiLetter as e,
  LineDecoration as e$,
  hash as e0,
  GlobalIdleValue as e1,
  isFalsyOrEmpty as e2,
  renderViewLine2 as e3,
  RenderLineInput as e4,
  ComputeOptionsMemory as e5,
  isWebKit as e6,
  getWindowById as e7,
  ConfigurationChangedEvent as e8,
  ViewEventHandler as e9,
  StringBuilder as eA,
  HorizontalRange as eB,
  ViewLineOptions as eC,
  ViewLine as eD,
  LineVisibleRanges as eE,
  HorizontalPosition as eF,
  minimapBackground as eG,
  minimapForegroundOpacity as eH,
  EditorLayoutInfoComputer as eI,
  minimapSelection as eJ,
  MINIMAP_GUTTER_WIDTH as eK,
  isFullWidthCharacter as eL,
  editorSelectionForeground as eM,
  getCharContainingOffset as eN,
  TextEditorCursorStyle as eO,
  computeScreenAwareSize as eP,
  LineRange as eQ,
  runAtThisOrScheduleAtNextAnimationFrame as eR,
  PointerHandlerLastRenderData as eS,
  RenderingContext as eT,
  runWhenWindowIdle as eU,
  isLowSurrogate as eV,
  filterValidationDecorations as eW,
  DragAndDropObserver as eX,
  editorErrorForeground as eY,
  editorHintForeground as eZ,
  softAssert as e_,
  MouseTargetFactory as ea,
  EditorMouseEventFactory as eb,
  EditorMouseEvent as ec,
  ClientCoordinates as ed,
  createEditorPagePosition as ee,
  createCoordinatesRelativeToEditor as ef,
  getShadowRoot as eg,
  GlobalEditorPointerMoveMonitor as eh,
  HitTestContext as ei,
  MouseTarget as ej,
  PageCoordinates as ek,
  commonPrefixLength as el,
  commonSuffixLength as em,
  saveParentsScrollTop as en,
  restoreParentsScrollTop as eo,
  EditorPointerEventFactory as ep,
  ViewPart as eq,
  PartFingerprints as er,
  isAndroid as es,
  EditorOptions as et,
  prevCharLength as eu,
  AtomicTabMoveOperations as ev,
  nextCharLength as ew,
  getLeftDeleteOffset as ex,
  isLowerAsciiLetter as ey,
  isAsciiDigit as ez,
  FileAccess as f,
  getColumnOfNodeOffset as f$,
  renderViewLine as f0,
  tieBreakComparators as f1,
  h as f2,
  booleanComparator as f3,
  coalesceInPlace as f4,
  diffOverviewRulerInserted as f5,
  defaultInsertColor as f6,
  diffInserted as f7,
  diffOverviewRulerRemoved as f8,
  defaultRemoveColor as f9,
  editorInlayHintBackground as fA,
  editorInlayHintForeground as fB,
  minimapFindMatch as fC,
  overviewRulerFindMatchForeground as fD,
  containsUppercaseCharacter as fE,
  getComputedStyle as fF,
  editorFindRangeHighlightBorder as fG,
  editorFindMatchForeground as fH,
  editorFindMatchHighlightForeground as fI,
  transparent as fJ,
  editorSelectionBackground as fK,
  iconForeground as fL,
  createStyleSheet2 as fM,
  groupBy as fN,
  Permutation as fO,
  splitLinesIncludeSeparators as fP,
  quickSelect as fQ,
  size as fR,
  listHighlightForeground as fS,
  listFocusHighlightForeground as fT,
  WindowIdleValue as fU,
  oneOf as fV,
  editorErrorBorder as fW,
  first as fX,
  overviewRulerSelectionHighlightForeground as fY,
  minimapSelectionOccurrenceHighlight as fZ,
  svgElem as f_,
  diffRemoved as fa,
  boolean as fb,
  clampedInt as fc,
  stringSet as fd,
  clampedFloat as fe,
  ApplyUpdateResult as ff,
  asArray as fg,
  noBreakWhitespace as fh,
  raceCancellation as fi,
  foreground as fj,
  addStandardDisposableGenericMouseDownListener as fk,
  setVisibility as fl,
  ShowLightbulbIconMode as fm,
  editorFindMatchHighlightBorder as fn,
  DynamicCssRules as fo,
  editorHoverBackground as fp,
  HSVA as fq,
  AsyncIterableObject as fr,
  createCancelableAsyncIterable as fs,
  mixin as ft,
  removeCSSRulesContainingSelector as fu,
  editorActiveLinkForeground as fv,
  editorInlayHintParameterBackground as fw,
  editorInlayHintParameterForeground as fx,
  editorInlayHintTypeBackground as fy,
  editorInlayHintTypeForeground as fz,
  getWindowId as g,
  inUntrustedWorkspace as g0,
  unicodeHighlightConfigKeys as g1,
  USUAL_WORD_SEPARATORS as g2,
  stripWildcards as g3,
  trim as g4,
  mouseTarget as g5,
  coalesce as h,
  isFalsyOrWhitespace as i,
  createRegExp as j,
  escapeRegExpCharacters as k,
  getPlatformTextDecoder as l,
  distinct as m,
  Extensions$1 as n,
  onDidUnregisterWindow as o,
  CachedFunction as p,
  ensureValidWordDefinition as q,
  getLeadingWhitespace as r,
  stringHash as s,
  equals as t,
  getNextCodePoint as u,
  isHighSurrogate as v,
  getWordAtText as w,
  assertNever as x,
  isBasicASCII as y,
  assertFn as z
};
