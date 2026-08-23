(function(){var i="ui.vue.persistence.git",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=":root,:host{--va-icon-vertical-align: middle;--va-icon-user-select: none}.va-icon{vertical-align:var(--va-icon-vertical-align);-webkit-user-select:var(--va-icon-user-select);-moz-user-select:var(--va-icon-user-select);user-select:var(--va-icon-user-select)}.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]){cursor:pointer}.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]):focus-visible{outline:2px solid var(--va-focus)!important;border-radius:2px}.va-icon.va-icon{font-style:normal}.va-icon--spin{animation:va-icon--spin-animation 1.5s linear infinite}.va-icon--spin-reverse{animation:va-icon--spin-animation 1.5s linear infinite;animation-direction:reverse}@keyframes va-icon--spin-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.va-icon svg{fill:currentColor;height:100%}:root,:host{--va-toast-display: flex;--va-toast-width: 330px;--va-toast-padding: 14px 1.25rem 14px 1.25rem;--va-toast-border-radius: 8px;--va-toast-border-color: transparent;--va-toast-border: 1px solid var(--va-toast-border-color);--va-toast-background-color: var(--va-background-secondary);--va-toast-box-shadow: 0 2px 12px 0 var(--va-shadow);--va-toast-transition: opacity .3s, transform .3s, left .3s, right .3s, top .4s, bottom .3s;--va-toast-z-index: calc(var(--va-z-index-teleport-overlay) + 100);--va-toast-title-font-weight: bold;--va-toast-title-font-size: 1rem;--va-toast-title-color: #303133;--va-toast-title-margin: 0 0 6px;--va-toast-content-font-size: 1rem;--va-toast-content-line-height: 1.3125;--va-toast-content-padding-right: 20px;--va-toast-icon-height: 24px;--va-toast-icon-width: 24px;--va-toast-icon-font-size: 24px;--va-toast-close-icon-top: 18px;--va-toast-close-icon-right: 15px;--va-toast-close-icon-font-size: 1rem}.va-toast{--va-toast-x-shift: 0px;--va-toast-animation-x-shift: 0px;--va-toast-animation-y-shift: 100%;position:fixed;box-sizing:border-box;width:var(--va-toast-width);padding:var(--va-toast-padding);display:flex;align-items:center;border-radius:var(--va-toast-border-radius);border:var(--va-toast-border);background-color:var(--va-toast-background-color);box-shadow:var(--va-toast-box-shadow);transition:var(--va-toast-transition);overflow:hidden;z-index:var(--va-toast-z-index);font-family:var(--va-font-family);transform:translate(var(--va-toast-x-shift))}.va-toast--top-right,.va-toast--bottom-right{--va-toast-animation-x-shift: 100%}.va-toast--top-left,.va-toast--bottom-left{--va-toast-animation-x-shift: -100%}.va-toast--top-left,.va-toast--top-center,.va-toast--top-right{--va-toast-animation-y-shift: -100%}.va-toast--inline{position:static}.va-toast--multiline{min-height:70px}.va-toast__title{font-weight:var(--va-toast-title-font-weight);font-size:var(--va-toast-title-font-size);margin:var(--va-toast-title-margin);font-size:.625rem;letter-spacing:.6px;line-height:1.2;font-weight:700;text-transform:uppercase}.va-toast__content{font-size:var(--va-toast-content-font-size);line-height:var(--va-toast-content-line-height);padding-right:var(--va-toast-content-padding-right)}.va-toast__content p,.va-toast__content div{margin:0}.va-toast__icon{height:var(--va-toast-icon-height);width:var(--va-toast-icon-width);font-size:var(--va-toast-icon-font-size)}.va-toast__close-icon{position:absolute;top:50%;right:var(--va-toast-close-icon-right);cursor:pointer;transform:translateY(-50%);font-size:var(--va-toast-close-icon-font-siz);opacity:.7}.va-toast__close-icon:hover{opacity:1}.va-toast-fade-enter-from{transform:translate(calc(var(--va-toast-animation-x-shift) + var(--va-toast-x-shift)))}.va-toast-fade-leave-to{transform:translateY(var(--va-toast-animation-y-shift));opacity:0}.table[data-v-9cab5c48]{min-height:100px}.table[data-v-9cab5c48] tr{border-bottom:1px solid var(--va-background-border)}.table[data-v-9cab5c48] tr td{white-space:normal}[data-v-9cab5c48] .additional-class{font-weight:bolder}.space[data-v-9cab5c48]{width:25px}.flex-nowrap[data-v-9cab5c48]{display:flex;flex-direction:row;flex-wrap:nowrap;align-content:center;align-items:center}.minwidth100[data-v-9cab5c48]{min-width:100%}[data-v-9cab5c48] .selected{font-weight:bolder;background-color:var(--va-css-variables-hover-color)!important}.va-inner-loading--active{height:auto!important}\n";})();
import { REPOSITORY_REGISTRY as vt } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { AuthentificationError as mt, type as gt } from "org.eclipse.daanse.board.app.lib.persistence.git";
import { isRef as Q, shallowRef as le, ref as $, watchEffect as ht, computed as p, withCtx as T, h as yt, Text as bt, createBlock as A, isVNode as Ct, getCurrentInstance as R, inject as he, normalizeClass as je, normalizeStyle as He, shallowReadonly as wt, unref as E, reactive as St, capitalize as xt, defineComponent as Y, useAttrs as _t, openBlock as I, resolveDynamicComponent as Pt, mergeProps as Tt, renderSlot as Ft, createElementBlock as M, createCommentVNode as J, Fragment as Ke, createTextVNode as G, toDisplayString as ce, onMounted as ye, onBeforeUnmount as $t, Transition as It, withDirectives as Fe, createElementVNode as F, vShow as $e, createVNode as x, withKeys as Et, withModifiers as Ie, render as ue, resolveComponent as z, Teleport as de, watch as ne } from "vue";
import { usePromisifiedModal as Ot } from "org.eclipse.daanse.board.app.ui.vue.composables";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Vt = () => {
};
function Rt(e, t, o) {
  var s;
  let r;
  Q(o) ? r = { evaluating: o } : r = o || {};
  const { lazy: n = !1, flush: i = "sync", evaluating: a = void 0, shallow: u = !0, onError: d = (s = globalThis.reportError) !== null && s !== void 0 ? s : Vt } = r, v = le(!n), g = u ? le(t) : $(t);
  let f = 0;
  return ht(async (m) => {
    if (!v.value) return;
    f++;
    const C = f;
    let y = !1;
    a && Promise.resolve().then(() => {
      a.value = !0;
    });
    try {
      const l = await e((S) => {
        m(() => {
          a && (a.value = !1), y || S();
        });
      });
      C === f && (g.value = l);
    } catch (l) {
      d(l);
    } finally {
      a && C === f && (a.value = !1), y = !0;
    }
  }, { flush: i }), n ? p(() => (v.value = !0, g.value)) : g;
}
const Ee = Rt, Oe = {
  light: {
    // Accent
    primary: "#154EC1",
    secondary: "#767C88",
    success: "#3D9209",
    info: "#158DE3",
    danger: "#E42222",
    warning: "#FFD43A",
    // Background Colors
    backgroundPrimary: "#f6f6f6",
    backgroundSecondary: "#FFFFFF",
    backgroundElement: "#ECF0F1",
    backgroundBorder: "#DEE5F2",
    // Text Colors
    textPrimary: "#262824",
    textInverted: "#FFFFFF",
    // Misc
    shadow: "rgba(0, 0, 0, 0.12)",
    focus: "#49A8FF",
    transparent: "rgba(0, 0, 0, 0)"
  },
  dark: {
    // Accent
    primary: "#3472F0",
    secondary: "#767C88",
    success: "#66BE33",
    info: "#3EAAF8",
    danger: "#F34030",
    warning: "#FFD952",
    // Background Colors
    backgroundPrimary: "#050A10",
    backgroundSecondary: "#1F262F",
    backgroundElement: "#131A22",
    backgroundBorder: "#3D4C58",
    // Text Colors
    textPrimary: "#F1F1F1",
    textInverted: "#0B121A",
    // Misc
    shadow: "rgba(255, 255, 255, 0.12)",
    focus: "#49A8FF",
    transparent: "rgba(0, 0, 0, 0)"
  }
}, kt = {
  xs: 0,
  sm: 640,
  md: 1024,
  lg: 1440,
  xl: 1920
}, zt = () => ({
  enabled: !0,
  bodyClass: !0,
  thresholds: kt
}), fe = (e, t = null) => T(() => [e], t), Ve = (e) => typeof e == "string" ? yt(bt, e) : Ct(e) ? e : A(e), At = (e, t = null) => Object.keys(e).reduce((o, s) => {
  const r = e[s];
  return o[s] = typeof r == "function" ? r : fe(r, t), o;
}, {}), Bt = (e) => {
  const t = e.render || e.ssrRender;
  if (!t)
    return;
  const o = t.name === "_sfc_render" || t.name === "_sfc_ssrRender";
  return function(...s) {
    const r = s[0], n = r.$.slots, i = new Proxy(r, {
      get(u, d) {
        return d === "$slots" ? At(n) : u[d];
      }
    }), a = o ? void 0 : i;
    return t.call(a, i, ...s.slice(1));
  };
}, Ue = (e, t) => Object.keys(e).filter((o) => !t.includes(o)).reduce((o, s) => (o[s] = e[s], o), {}), Nt = "$va:childComponents", be = () => {
  var e;
  const t = (e = R()) == null ? void 0 : e.attrs["va-child"];
  if (!t)
    return null;
  const o = he(Nt);
  return o?.value ? p(() => o.value[t]) : null;
}, Dt = /([a-z0-9])([A-Z])/g, Mt = (e) => e.replace(Dt, "$1-$2").toLowerCase(), Lt = (e, t) => t in e ? e[t] : e[Mt(t)], Gt = (e, t) => {
  const o = e.props, s = be();
  return new Proxy(o, {
    get: (r, n) => {
      var i, a;
      if (typeof n != "string")
        return r[n];
      const u = (i = s?.value) == null ? void 0 : i[n];
      if (u !== void 0)
        return u;
      const d = e.vnode.props || {}, v = r[n];
      if (Lt(d, n) !== void 0)
        return v;
      const f = (a = t.value) == null ? void 0 : a[n];
      return f !== void 0 ? f : v;
    }
  });
}, jt = (e, t) => {
  const o = e.attrs;
  return new Proxy(o, {
    get: (s, r) => {
      var n;
      if (typeof r != "string")
        return s[r];
      if (r === "class")
        return je([t.value.class, o.class]);
      if (r === "style")
        return He([t.value.style, o.style]);
      const i = (n = t.value) == null ? void 0 : n[r];
      return i !== void 0 ? i : s[r];
    },
    ownKeys(s) {
      return [.../* @__PURE__ */ new Set([...Object.keys(o), ...Object.keys(t.value)])];
    },
    getOwnPropertyDescriptor(s, r) {
      return Reflect.getOwnPropertyDescriptor(t.value, r) ?? Reflect.getOwnPropertyDescriptor(o, r);
    }
  });
}, re = "slot:", Ht = (e, t) => {
  const o = e.slots, s = be(), r = p(() => Object.keys(t.value).reduce((n, i) => (i.startsWith(re) && (n[i.slice(re.length)] = t.value[i]), n), {}));
  return new Proxy(o, {
    get: (n, i) => {
      var a, u;
      if (typeof i != "string")
        return n[i];
      const d = `${re}${i}`, v = (a = s?.value) == null ? void 0 : a[d];
      if (v !== void 0)
        return fe(Ve(v));
      const g = n[i];
      if (g !== void 0)
        return g;
      const f = (u = r.value) == null ? void 0 : u[i];
      return f !== void 0 ? fe(Ve(f)) : g;
    },
    ownKeys(n) {
      return [.../* @__PURE__ */ new Set([...Object.keys(o), ...Object.keys(r.value)])];
    },
    getOwnPropertyDescriptor(n, i) {
      return Reflect.getOwnPropertyDescriptor(r.value, i) ?? Reflect.getOwnPropertyDescriptor(o, i);
    }
  });
}, Kt = "VaLocalConfig", Ut = p(() => []);
function Yt() {
  return he(Kt, Ut);
}
const Xt = [null, void 0, ""], Wt = (e) => Xt.includes(e), Re = (e) => !Wt(e), Zt = typeof process < "u" ? process : {}, qt = Zt.env || {}, Jt = qt.NODE_ENV || "", Qt = typeof __DEV__ < "u" ? __DEV__ : !["prod", "production"].includes(Jt), pe = (...e) => (Qt && console.warn(...e), !1), eo = (e) => {
  throw new Error(`[Vuestic] ${e}`);
};
let to = null;
const Ce = () => to, Ye = (e, t = void 0) => {
  var o;
  const s = (o = Ce()) == null ? void 0 : o._context.provides[e];
  return R() ? he(e, t) : s ?? eo("You're using Vuestic composable outside Vue app. Since you registered Vuestic in multiple apps, composables can not be used outside setup function anymore.");
}, oo = (e) => e !== null && typeof e == "object", L = (e) => e === null || typeof e != "object" ? e : Array.isArray(e) ? e.map(L) : e instanceof Date ? new Date(e.getTime()) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Map ? new Map(Array.from(e.entries()).map(([t, o]) => [t, L(o)])) : e instanceof Set ? new Set(Array.from(e.values()).map(L)) : oo(e) ? Object.keys(e).reduce((t, o) => (t[o] = L(e[o]), t), {}) : e, se = (e) => e && typeof e == "object" && !Array.isArray(e), X = (e, t) => (se(e) || (e = {}), Object.keys(t).forEach((o) => {
  const s = e[o], r = t[o];
  r instanceof RegExp || r instanceof Date ? e[o] = r : se(s) && se(r) ? e[o] = X(Object.create(
    Object.getPrototypeOf(s),
    Object.getOwnPropertyDescriptors(s)
  ), r) : e[o] = r;
}), e), no = [
  {
    prefix: "bg",
    property: "background-color"
  },
  {
    prefix: "text",
    property: ["color", "fill"]
  }
], ro = () => no, so = (e) => ({
  ...e,
  get variables() {
    return this.presets[this.currentPresetName];
  },
  set variables(t) {
    this.presets[this.currentPresetName] = t;
  }
}), ao = () => so({
  threshold: 150,
  presets: {
    light: Oe.light,
    dark: Oe.dark
  },
  currentPresetName: "light"
}), io = (e) => e, lo = io([
  {
    name: "va-unsorted",
    to: "swap_vert"
  },
  {
    name: "va-sort-asc",
    to: "va-arrow-up"
  },
  {
    name: "va-sort-desc",
    to: "va-arrow-down"
  },
  {
    name: "va-arrow-first",
    to: "mi-first_page"
  },
  {
    name: "va-arrow-last",
    to: "mi-last_page"
  },
  {
    name: "va-arrow-right",
    to: "mi-chevron_right"
  },
  {
    name: "va-arrow-left",
    to: "mi-chevron_left"
  },
  {
    name: "va-arrow-down",
    to: "mi-expand_more"
  },
  {
    name: "va-arrow-up",
    to: "mi-expand_less"
  },
  {
    name: "va-calendar",
    to: "mi-calendar_today"
  },
  {
    name: "va-delete",
    to: "mi-delete_outline"
  },
  {
    name: "va-check",
    to: "mi-check"
  },
  {
    name: "va-check-circle",
    to: "mi-check_circle"
  },
  {
    name: "va-warning",
    to: "mi-warning"
  },
  {
    name: "va-clear",
    to: "mi-highlight_off"
  },
  {
    name: "va-close",
    to: "mi-close"
  },
  {
    name: "va-loading",
    to: "mi-loop"
  },
  {
    name: "va-plus",
    to: "mi-add"
  },
  {
    name: "va-minus",
    to: "mi-remove"
  }
]), co = [
  {
    name: "mi-{icon}",
    class: "material-icons",
    resolve: ({ icon: e }) => ({ content: e })
  },
  // Fallback
  {
    name: "{icon}",
    class: "material-icons",
    resolve: ({ icon: e }) => ({ content: e })
  }
], uo = (e) => (e.aliases = e.aliases || [], e.fonts = e.fonts || [], [
  ...e.aliases,
  ...lo,
  ...e.fonts,
  ...co
]), fo = () => uo({}), po = () => (
  // TODO: Should be handled in size service
  {
    VaIcon: {
      sizesConfig: {
        defaultSize: 18,
        sizes: {
          small: 14,
          medium: 18,
          large: 24
        }
      }
    },
    VaRating: {
      sizesConfig: {
        defaultSize: 18,
        sizes: {
          small: 14,
          medium: 18,
          large: 24
        }
      }
    },
    all: {},
    presets: {
      VaButton: {
        default: {
          backgroundOpacity: 1,
          hoverBehavior: "mask",
          hoverOpacity: 0.15,
          pressedBehavior: "mask",
          pressedOpacity: 0.13
        },
        primary: {
          backgroundOpacity: 0.1,
          hoverBehavior: "opacity",
          hoverOpacity: 0.07,
          pressedBehavior: "opacity",
          pressedOpacity: 0.13
        },
        secondary: {
          backgroundOpacity: 0,
          hoverBehavior: "opacity",
          hoverOpacity: 0.07,
          pressedBehavior: "opacity",
          pressedOpacity: 0.13
        },
        plain: {
          plain: !0,
          hoverBehavior: "mask",
          hoverOpacity: 0.15,
          pressedBehavior: "mask",
          pressedOpacity: 0.13
        },
        plainOpacity: {
          plain: !0,
          textOpacity: 0.6,
          hoverBehavior: "opacity",
          hoverOpacity: 1,
          pressedBehavior: "opacity",
          pressedOpacity: 0.9
        }
      },
      VaInputWrapper: {
        solid: {
          background: "backgroundElement"
        },
        bordered: {
          class: "va-input-wrapper--bordered",
          background: "backgroundElement"
        }
      },
      VaCheckbox: {
        solid: {
          style: "--va-checkbox-background: var(--va-background-element)"
        }
      },
      VaRadio: {
        solid: {
          style: "--va-radio-background: var(--va-background-element)"
        }
      },
      VaMenu: {
        context: {
          cursor: !0,
          placement: "right-start",
          trigger: "right-click"
        }
      }
    }
  }
), vo = () => ({
  // PROPS
  /** Select search field default text */
  search: "Search",
  /** Select no options text */
  noOptions: "Items not found",
  /** Modal Ok button default text */
  ok: "OK",
  /** Modal Cancel button default text */
  cancel: "Cancel",
  /** FileUpload default button text */
  uploadFile: "Upload file",
  /** FileUpload default undo button text */
  undo: "Undo",
  /** FileUpload default dropzone text */
  dropzone: "Drop files here to upload",
  /** FileUpload default file deleted alert text */
  fileDeleted: "File deleted",
  // Aria attributes
  /** Alert close button aria-label */
  closeAlert: "close alert",
  backToTop: "back to top",
  toggleDropdown: "toggle dropdown",
  carousel: "carousel",
  goPreviousSlide: "go previous slide",
  goNextSlide: "go next slide",
  goSlide: "go slide {index}",
  slideOf: "slide {index} of {length}",
  close: "close",
  openColorPicker: "open color picker",
  colorSelection: "color selection",
  colorName: "color {color}",
  decreaseCounter: "decrease counter",
  increaseCounter: "increase counter",
  selectAllRows: "select all rows",
  sortColumnBy: "sort column by {name}",
  selectRowByIndex: "select row {index}",
  resetDate: "reset date",
  nextPeriod: "next period",
  switchView: "switch view",
  previousPeriod: "previous period",
  removeFile: "remove file",
  reset: "reset",
  pagination: "pagination",
  goToTheFirstPage: "go to the first page",
  goToPreviousPage: "go to the previous page",
  goToSpecificPage: "go to the {page} page",
  goToSpecificPageInput: "enter the page number to go",
  goNextPage: "go next page",
  goLastPage: "go last page",
  /** Rating aria-label */
  currentRating: "current rating {value} of {max}",
  /** Rating item aria-label */
  voteRating: "vote rating {value} of {max}",
  /** Select search input aria-label */
  optionsFilter: "options filter",
  splitPanels: "split panels",
  movePaginationLeft: "move pagination left",
  movePaginationRight: "move pagination right",
  resetTime: "reset time",
  closeToast: "close toast",
  /**
   * Select aria-label selected option prefix
   *
   * @example
   *
   * `Selected option: {option}` or `Selected option: Animal`
   */
  selectedOption: "Selected option",
  /** Select aria-label if no option is selected */
  noSelectedOption: "Option is not selected",
  breadcrumbs: "breadcrumbs",
  counterValue: "counter value",
  selectedDate: "selected date",
  selectedTime: "selected time",
  progressState: "progress state",
  color: "color",
  /** Stepper next button text */
  next: "Next",
  /** Stepper previous button text */
  back: "Previous",
  /** Stepper finish button text */
  finish: "Finish",
  step: "step",
  progress: "progress",
  /** Skeleton aria label */
  loading: "Loading",
  /** Slider aria label */
  sliderValue: "Current slider value is {value}",
  /** Switch aria label */
  switch: "Switch",
  /** Input aria label */
  inputField: "Input field",
  /** File Input message when file type is incorrect */
  fileTypeIncorrect: "File type is incorrect",
  /** Select aria label */
  select: "Select an option"
}), Xe = Symbol("GLOBAL_CONFIG"), mo = () => ({
  colors: ao(),
  icons: fo(),
  components: po(),
  breakpoint: zt(),
  i18n: vo(),
  colorsClasses: ro(),
  /**
   * global config variable to pass nuxt-link component to vuestic-ui via @vuestic/nuxt
   * TODO: give a try to integrate inertia js router components via this option
   * TODO: if this try won't be success, may be remake to provide/inject
   */
  routerComponent: void 0
}), go = (e = {}) => {
  const t = $(X(mo(), e));
  return {
    getGlobalConfig: () => t.value,
    setGlobalConfig: (n) => {
      const i = typeof n == "function" ? n(t.value) : n;
      t.value = L(i);
    },
    mergeGlobalConfig: (n) => {
      const i = typeof n == "function" ? n(t.value) : n;
      t.value = X(L(t.value), i);
    },
    globalConfig: t
  };
}, ho = (e) => {
  var t, o;
  const s = ((t = R()) == null ? void 0 : t.appContext.provides) || ((o = Ce()) == null ? void 0 : o._context.provides);
  if (!s)
    throw new Error("Vue app not found for provide");
  return s[Xe] = e, e;
};
function Z() {
  let e = Ye(Xe);
  return e || (e = go(), ho(e)), e;
}
const yo = (e) => "preset" in e, ke = (e) => yo(e) ? e.preset : void 0, bo = (e, t) => {
  const o = Yt(), { globalConfig: s } = Z(), r = e.name, n = (a) => (a instanceof Array ? a : [a]).reduce((u, d) => {
    var v, g, f;
    const m = (f = (g = (v = s.value.components) == null ? void 0 : v.presets) == null ? void 0 : g[r]) == null ? void 0 : f[d];
    if (!m)
      return u;
    const C = ke(m);
    return {
      ...u,
      ...C ? n(C) : void 0,
      ...m
    };
  }, {}), i = be();
  return p(() => {
    var a, u;
    const d = {
      ...(a = s.value.components) == null ? void 0 : a.all,
      ...(u = s.value.components) == null ? void 0 : u[r]
    }, v = o.value.reduce((m, C) => {
      const y = C[r];
      return y ? { ...m, ...y } : m;
    }, {}), g = [
      t,
      i?.value,
      v,
      d
    ].filter(Re).map(ke).filter(Re).at(0), f = g ? n(g) : void 0;
    return { ...d, ...v, ...f };
  });
}, Co = (e) => (t, o) => {
  var s;
  const r = R(), n = bo(e, t), i = p(() => Ue(n.value, Object.keys(t))), a = Gt(r, n), u = jt(r, i), d = Ht(r, n);
  r.props = a, r.attrs = u, r.slots = d;
  const v = (s = e.setup) == null ? void 0 : s.call(e, wt(a), {
    ...o,
    attrs: u,
    slots: d
  });
  return typeof v == "object" && !r.exposed && o.expose(v), v;
}, ve = (e) => {
  const t = Co(e), o = Bt(e);
  return new Proxy(e, {
    get(s, r) {
      return r in e ? r === "setup" ? t : r === "render" || r === "ssrRender" ? o : Reflect.get(s, r) : Reflect.get(s, r);
    }
  });
}, me = "__c", wo = (e) => (e[me] = ve(e[me]), e), So = (e) => "setup" in e ? ve(e) : me in e ? wo(e) : (e.setup = () => ({
  /* Fake setup function */
}), ve(e)), xo = {
  defaultSize: 48,
  sizes: {
    small: 32,
    medium: 48,
    large: 64
  }
}, _o = {
  defaultSize: 1,
  sizes: {
    small: 0.75,
    medium: 1,
    large: 1.25
  }
}, Po = {
  size: {
    type: [String, Number],
    default: "",
    validator: (e) => typeof e == "string" || typeof e == "number"
  },
  sizesConfig: {
    type: Object,
    default: () => xo
  },
  fontSizesConfig: {
    type: Object,
    default: () => _o
  }
}, To = /(?<fontSize>\d+)(?<extension>px|rem)/i, ze = (e) => e / 16 - 0.5, Fo = (e, t = ((o) => (o = R()) == null ? void 0 : o.type.name)()) => {
  const { getGlobalConfig: o } = Z(), s = p(() => {
    var a, u;
    return t ? (u = (a = o().components) == null ? void 0 : a[t]) == null ? void 0 : u.sizesConfig : void 0;
  }), r = p(() => {
    var a, u, d;
    const { defaultSize: v, sizes: g } = e.sizesConfig, f = (a = s.value) == null ? void 0 : a.defaultSize;
    if (!e.size)
      return `${v || f}px`;
    if (typeof e.size == "string") {
      const m = (d = (u = s.value) == null ? void 0 : u.sizes) == null ? void 0 : d[e.size], C = g[e.size];
      return C ? `${C}px` : m ? `${m}px` : e.size;
    }
    return `${e.size}px`;
  }), n = p(() => {
    const { defaultSize: a, sizes: u } = e.fontSizesConfig;
    if (!e.size)
      return a;
    if (typeof e.size == "string") {
      if (e.size in u)
        return u[e.size];
      const d = e.size.match(To);
      if (!d || !d.groups)
        throw new Error("Size prop should be either valid string or number");
      const { extension: v, fontSize: g } = d.groups;
      return v === "rem" ? +g : ze(+g);
    }
    return ze(e.size);
  }), i = p(() => `${n.value}rem`);
  return {
    sizeComputed: r,
    fontSizeComputed: i,
    fontSizeInRem: n
  };
}, We = {
  preset: {
    type: [String, Array],
    default: void 0
  }
}, $o = (e, t) => t.test(e), Ze = (e, t) => {
  if (typeof t != "string" && t.global)
    return [...e.matchAll(t)].map((s) => s.slice(1));
  const o = e.match(t) || [];
  return o ? o.length > 1 ? o.slice(1) : o : [];
}, qe = /{[^}]*}/g, Je = (e) => e.replace(qe, "(.*)"), Io = (e) => (e.match(qe) || []).map((t) => t.replace(/{|}/g, "")), Eo = (e, t) => Ze(e, Je(t)), Oo = (e, t) => {
  const o = Io(t), s = Eo(e, t);
  return o.reduce((r, n, i) => ({ ...r, [n]: s[i] }), {});
}, Vo = (e, t) => (e.match(t) || [])[0] === e, Ro = (e, t) => {
  const o = Je(t);
  return Vo(e, new RegExp(o));
}, Qe = (e) => typeof e.name == "string", et = (e) => e.name instanceof RegExp, ko = (e, t) => Qe(t) ? Ro(e, t.name) : et(t) ? $o(e, t.name) : !1, zo = (e, t) => {
  const o = Oo(e, t.name);
  return t.resolve && t.resolve(o);
}, Ao = (e, t) => {
  if (t.name.global)
    throw new Error(`Bad icon config with name ${t.name}. Please, don't use global regex as name.`);
  const o = Ze(e, t.name);
  return t.resolveFromRegex && t.resolveFromRegex(...o);
}, Bo = (e, t) => {
  if (Qe(t))
    return zo(e, t);
  if (et(t))
    return Ao(e, t);
  throw Error("Unknown icon config");
}, No = (e, t, o = []) => {
  const s = t.find((r) => o.includes(r.name.toString()) ? !1 : ko(e, r));
  if (!s)
    throw new Error(`Can not find icon config from ${e}. Please provide default config.`);
  return s;
}, tt = (e, t, o = []) => {
  if (!e)
    return;
  const s = No(e, t, o), r = X(Bo(e, s), s);
  return o = [...o, s.name.toString()], X(
    tt(r.to, t, o),
    r
  );
}, Do = (e) => {
  const t = ["name", "to", "resolve", "resolveFromRegex"], o = e;
  return t.forEach((s) => {
    delete o[s];
  }), o;
}, Mo = (e, t) => {
  const o = tt(e, t);
  return o === void 0 ? {} : Do(o);
}, Lo = () => {
  const { globalConfig: e } = Z();
  return {
    getIcon: (t) => Mo(t, e.value.icons)
  };
}, Go = Symbol("VaAppCachePlugin"), jo = () => {
  const e = Ye(Go);
  return e || {
    colorContrast: {}
  };
}, Ho = (e) => {
  const t = typeof e == "function" ? p(e) : p(e), o = new Proxy(t, {
    get(s, r, n) {
      if (typeof t.value == "object")
        return E(Reflect.get(t.value, r, n));
    },
    set(s, r, n) {
      return Q(t.value[r]) && !Q(n) ? t.value[r].value = n : t.value[r] = n, !0;
    },
    deleteProperty(s, r) {
      return Reflect.deleteProperty(t.value, r);
    },
    has(s, r) {
      return typeof t.value != "object" ? !1 : Reflect.has(t.value, r);
    },
    ownKeys() {
      return typeof t.value != "object" ? [] : Object.keys(t.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return St(o);
}, Ko = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), Uo = /[A-Z0-9]*(?:[^\-_|A-Z|\s.])*/gm, ot = (e) => {
  var t;
  return ((t = e.match(Uo)) == null ? void 0 : t.map((o) => o.trim().split(/([0-9]+)|([a-zA-Z]+)/g)).flat().filter(Boolean)) || [];
}, ge = (e) => ot(e).map((t) => t.toLowerCase()).join("-"), Yo = (e) => ot(e).map((t, o) => o === 0 ? t.toLowerCase() : Ko(t)).join(""), nt = /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6,8})$/, rt = /^rgba?\(([\d.]+, ?){2}[\d.]+(, ?[\d.]+)?\)$/, st = /hsla?\([\d.]+(deg|rad|turn|grad)?(,?\s?[\d.]+%?){2}(,?\s?(\/\s?)?[\d.]+%?)?\)/, Xo = (e) => nt.test(e) || rt.test(e) || st.test(e), we = (e) => typeof e != "object" || e === null ? !1 : "h" in e && "s" in e && "l" in e, Se = (e) => typeof e != "object" || e === null ? !1 : "r" in e && "g" in e && "b" in e, at = (e) => {
  if (!nt.test(e))
    return null;
  const t = e.replace("#", ""), o = t.length < 6, [s, r, n, i] = o ? t.split("").map((a) => parseInt(a + a, 16)) : t.match(/.{2}/g).map((a) => parseInt(a, 16));
  return { r: s, g: r, b: n, a: i ?? 1 };
}, it = (e) => {
  if (!rt.test(e))
    return null;
  const [t, o, s, r = 1] = e.match(/[\d.]+/g).map(Number);
  return { r: t, g: o, b: s, a: r };
}, lt = (e) => {
  if (!st.test(e))
    return null;
  const [t, o, s, r = "1"] = e.match(/[\d.]+%?/g);
  return {
    h: Number(t),
    s: Number(o.replace("%", "")),
    l: Number(s.replace("%", "")),
    a: r.endsWith("%") ? Number(r.replace("%", "")) / 100 : Number(r)
  };
}, Ae = (e) => {
  const t = e.r / 255, o = e.g / 255, s = e.b / 255, r = Math.max(t, o, s), n = Math.min(t, o, s);
  let i = 0, a = 0;
  const u = (r + n) / 2;
  if (r !== n) {
    const d = r - n;
    switch (a = u > 0.5 ? d / (2 - r - n) : d / (r + n), r) {
      case t:
        i = (o - s) / d + (o < s ? 6 : 0);
        break;
      case o:
        i = (s - t) / d + 2;
        break;
      case s:
        i = (t - o) / d + 4;
        break;
    }
    i *= 60;
  }
  return { h: Math.round(i), s: Math.round(a * 100), l: Math.round(u * 100), a: e.a };
}, ae = (e, t, o) => (o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? e + (t - e) * 6 * o : o < 1 / 2 ? t : o < 2 / 3 ? e + (t - e) * (2 / 3 - o) * 6 : e), Be = (e) => {
  const t = e.h / 360, o = e.s / 100, s = e.l / 100, r = s < 0.5 ? s * (1 + o) : s + o - s * o, n = 2 * s - r, i = ae(n, r, t + 1 / 3), a = ae(n, r, t), u = ae(n, r, t - 1 / 3);
  return { r: Math.round(i * 255), g: Math.round(a * 255), b: Math.round(u * 255), a: e.a };
}, q = (e) => {
  if (we(e))
    return { ...e };
  if (Se(e))
    return Ae(e);
  const t = at(e) ?? it(e);
  if (t)
    return Ae(t);
  const o = lt(e);
  if (o)
    return o;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, xe = ({ h: e, s: t, l: o, a: s }) => `hsla(${e},${t}%,${o}%,${s ?? 1})`, _e = (e) => {
  if (Se(e))
    return { ...e };
  if (we(e))
    return Be(e);
  const t = lt(e);
  if (t)
    return Be(t);
  const o = at(e) ?? it(e);
  if (o)
    return o;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, ct = ({ r: e, g: t, b: o, a: s }) => s === 1 ? `rgb(${e},${t},${o})` : `rgba(${e},${t},${o},${s ?? 1})`, Wo = (e) => {
  if (we(e))
    return xe(e);
  if (Se(e))
    return ct(e);
  if (typeof e == "string")
    return e;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, Zo = (e, { h: t, s: o, l: s, a: r }) => {
  const n = q(e);
  return n.a = n.a ?? 1, n.h = t ?? n.h, n.s = o ?? n.s, n.l = s ?? n.l, n.a = r ?? n.a, n.h < 0 && (n.h = 360 + n.h), n.h > 360 && (n.h = n.h - 360), n.s = Math.max(0, Math.min(100, n.s)), n.l = Math.max(0, Math.min(100, n.l)), n.a = Math.max(0, Math.min(1, n.a)), n;
}, qo = (e, { h: t, s: o, l: s, a: r }) => {
  const n = q(e);
  return n.a = n.a ?? 1, n.h += t ?? 0, n.s += o ?? 0, n.l += s ?? 0, n.a += r ?? 0, n.h < 0 && (n.h = 360 + n.h), n.h > 360 && (n.h = n.h - 360), n.s = Math.max(0, Math.min(100, n.s)), n.l = Math.max(0, Math.min(100, n.l)), n.a = Math.max(0, Math.min(1, n.a)), n;
}, Jo = (e) => /var\(--.+\)/.test(e), Qo = (e) => `--va-${ge(e)}`, Ne = (e) => Yo(e), j = (e, t) => {
  const { r: o, g: s, b: r } = _e(e);
  return ct({ r: o, g: s, b: r, a: t });
}, De = (e) => {
  const { r: t, g: o, b: s } = _e(e);
  return Math.sqrt(t * t * 0.241 + o * o * 0.691 + s * s * 0.068);
}, en = (e, t = 0.4) => j(e, t), tn = (e, t = 0.4) => j(e, t), on = (e, t = 0.2) => j(e, t), nn = (e, t = 0.3) => j(e, t), D = (e, t) => xe(qo(q(e), t)), rn = (e, t) => xe(Zo(q(e), t)), sn = (e) => {
  const t = q(e);
  if (t.s < 10)
    return D(t, { h: 2, s: 5, l: 10 });
  if (t.s < 30)
    return D(t, { s: -14, l: 11 });
  if (t.h >= 0 && t.h < 44 || t.h >= 285)
    return D(t, { h: 11, s: 27, l: 8 });
  if (t.h >= 44 && t.h < 85)
    return D(t, { h: 3, l: 9 });
  if (t.h >= 85 && t.h < 165)
    return D(t, { h: 16, l: 14 });
  if (t.h >= 165 && t.h < 285)
    return D(t, { h: -15, s: 3, l: 2 });
  throw new Error("This method should handle all colors. But it didn't for some reason.");
}, an = (e) => `linear-gradient(to right, ${sn(e)}, ${Wo(e)})`, ln = (e, t, o) => {
  const s = j(t, o);
  return `linear-gradient(0deg, ${s}, ${s}), ${e}`;
}, cn = (e) => e ? e === "transparent" ? !0 : _e(e).a <= 0.1 : !1, Pe = () => {
  const e = Z();
  if (!e)
    throw new Error("useColors must be used in setup function or Vuestic GlobalConfigPlugin is not registered!");
  const { globalConfig: t } = e, o = Ho({
    get: () => t.value.colors.presets[t.value.colors.currentPresetName],
    set: (l) => {
      s(l);
    }
  }), s = (l) => {
    t.value.colors.presets[t.value.colors.currentPresetName] = {
      ...t.value.colors.variables,
      ...l
    };
  }, r = () => o, n = (l, S, w) => {
    if (S || (S = o.primary), l === "transparent")
      return "#ffffff00";
    if (l === "currentColor")
      return l;
    if (l?.startsWith("on")) {
      const B = l.slice(2);
      if (o[Ne(B)])
        return n(f(n(B)), void 0, w);
    }
    l || (l = n(S));
    const _ = o[l] || o[Ne(l)];
    return _ ? w ? `var(${Qo(l)})` : _ : Xo(l) || w && Jo(l) ? l : (pe(`'${l}' is not a proper color! Use HEX or default color themes
      names (https://vuestic.dev/en/styles/colors#default-color-themes)`), n(S));
  }, i = (l) => p({
    get() {
      return n(l);
    },
    set(S) {
      s({ [l]: S });
    }
  }), a = (l, S = "va") => Object.keys(l).filter((w) => l[w] !== void 0).reduce((w, _) => (w[`--${S}-${ge(_)}`] = n(l[_], void 0, !0), w[`--${S}-on-${ge(_)}`] = n(f(n(l[_])), void 0, !0), w), {}), u = jo(), d = (l) => typeof l != "string" ? De(l) : (u.colorContrast[l] || (u.colorContrast[l] = De(l)), u.colorContrast[l]), v = p(() => d(n("textPrimary")) > 255 / 2 ? "textInverted" : "textPrimary"), g = p(() => d(n("textPrimary")) > 255 / 2 ? "textPrimary" : "textInverted"), f = (l, S, w) => {
    const _ = `on${xt(String(l))}`;
    return o[_] ? o[_] : (S = S || v.value, w = w || g.value, d(l) > t.value.colors.threshold ? S : w);
  }, m = p({
    get: () => t.value.colors.currentPresetName,
    set: (l) => {
      y(l);
    }
  }), C = p(() => t.value.colors.presets), y = (l) => {
    if (t.value.colors.currentPresetName = l, !t.value.colors.presets[l])
      return pe(`Preset ${l} does not exist`);
  };
  return {
    colors: o,
    currentPresetName: m,
    presets: C,
    applyPreset: y,
    setColors: s,
    getColors: r,
    getColor: n,
    getComputedColor: i,
    getBoxShadowColor: en,
    getBoxShadowColorFromBg: tn,
    getHoverColor: on,
    getFocusColor: nn,
    getGradientBackground: an,
    getTextColor: f,
    shiftHSLAColor: D,
    setHSLAColor: rn,
    colorsToCSSVariable: a,
    colorToRgba: j,
    getStateMaskGradientBackground: ln
  };
}, un = /* @__PURE__ */ Y({
  name: "VaIcon",
  __name: "VaIcon",
  props: {
    ...Po,
    ...We,
    name: { type: String, default: "" },
    tag: { type: String },
    component: { type: Object },
    color: { type: String },
    rotation: { type: [String, Number] },
    spin: { type: [String, Boolean] },
    flip: {
      type: String,
      default: "off",
      validator: (e) => ["off", "horizontal", "vertical", "both"].includes(e)
    }
  },
  setup(e) {
    const t = e, { getColor: o } = Pe(), { sizeComputed: s } = Fo(t), { getIcon: r } = Lo(), n = p(() => r(t.name)), i = p(() => t.component || t.tag || n.value.component || n.value.tag || "i"), a = _t(), u = p(() => ({ ...n.value.attrs, ...Ue(a, ["class"]) })), d = (y) => {
      if (!(y === void 0 || y === !1))
        return y === "counter-clockwise" ? "va-icon--spin-reverse" : "va-icon--spin";
    }, v = p(() => [
      n.value.class,
      d(t.spin ?? n.value.spin)
    ]), g = p(() => {
      const y = t.rotation ? `rotate(${t.rotation}deg)` : "", l = t.flip === "vertical" || t.flip === "both" ? -1 : 1, S = t.flip === "horizontal" || t.flip === "both" ? -1 : 1;
      return `${t.flip === "off" ? "" : `scale(${l}, ${S})`} ${y}`.trim();
    }), f = p(() => ({
      transform: g.value,
      cursor: a.onClick ? "pointer" : null,
      color: t.color ? o(t.color, void 0, !0) : n.value.color,
      fontSize: s.value,
      height: s.value,
      lineHeight: s.value
    })), m = p(() => a.tabindex ?? -1), C = p(() => a.role !== "button" || m.value < 0);
    return (y, l) => (I(), A(Pt(i.value), Tt({
      class: ["va-icon", v.value],
      style: f.value,
      "aria-hidden": C.value,
      notranslate: ""
    }, u.value), {
      default: T(() => [
        Ft(y.$slots, "default", {}, () => [
          n.value.content ? (I(), M(Ke, { key: 0 }, [
            G(ce(n.value.content), 1)
          ], 64)) : J("", !0)
        ])
      ]),
      _: 3
    }, 16, ["class", "style", "aria-hidden"]));
  }
}), ie = (e) => {
  const t = R().props;
  return p(() => {
    const s = t?.[e];
    return s === void 0 ? s : Number(s);
  });
}, dn = () => typeof window > "u", fn = {}, V = () => dn() ? typeof globalThis > "u" ? fn : globalThis : window, pn = 5, N = $([]), vn = (e) => {
  var t;
  return ((t = e.component) == null ? void 0 : t.props) || {};
}, mn = (e) => e.el ? e.el.offsetHeight + pn : 0, gn = (e) => {
  const t = R(), o = p(() => {
    const s = N.value.findIndex((r) => r === t.vnode);
    return s === -1 ? 0 : N.value.slice(s + 1).reduce((r, n) => {
      const {
        position: i
      } = vn(n), { position: a } = e;
      return a === i ? mn(n) + r : r;
    }, 0);
  });
  return ye(() => {
    N.value.unshift(t.vnode);
  }), $t(() => {
    N.value = N.value.filter((s) => s !== t.vnode);
  }), {
    yOffset: o,
    updateYOffset: () => {
      N.value = N.value.filter((s) => s !== t.vnode);
    }
  };
}, hn = () => {
  let e;
  return {
    start: (...s) => (e = window.setTimeout(...s), e),
    clear: () => e && window.clearTimeout(e)
  };
}, yn = (e) => e.startsWith("$t:"), bn = (e) => ({ type: String, default: e }), Me = (e, t) => (t && Object.keys(t).forEach((o) => {
  e = e.replace(`{${o}}`, String(t[o]));
}), e), Cn = () => {
  const { globalConfig: e } = Z(), t = p(() => e.value.i18n);
  function o(r, n) {
    var i;
    const a = (i = R()) == null ? void 0 : i.appContext.config.globalProperties.$t;
    if (typeof a == "function") {
      const d = a(`vuestic.${r}`, n);
      if (d)
        return d;
    }
    const u = t.value[r];
    return u ? Me(u, n) || r : (pe(`${r} not found in VuesticUI i18n config`), r);
  }
  function s(r, n) {
    return r ? yn(r) ? o(r.slice(3), n) : Me(r, n) || r : "";
  }
  return {
    tp: s,
    t: o
  };
}, wn = (e, t = !1) => {
  const { props: o } = R(), { getColor: s, getTextColor: r } = Pe();
  return { textColorComputed: p(() => {
    if (o.textColor)
      return s(o.textColor);
    const i = e ? E(e) : o.color;
    if (!i)
      return "currentColor";
    const a = s(i);
    return cn(a) ? "currentColor" : E(t) ? a : s(r(a));
  }) };
}, Sn = ["role", "aria-live"], xn = { class: "va-toast__group" }, _n = ["textContent"], Pn = { class: "va-toast__content" }, Tn = ["innerHTML"], Fn = ["textContent"], $n = {
  key: 1,
  class: "va-toast__content"
}, In = /* @__PURE__ */ Y({
  name: "VaToast",
  __name: "VaToast",
  props: {
    ...We,
    title: { type: String, default: "" },
    offsetY: { type: [Number, String], default: 16 },
    offsetX: { type: [Number, String], default: 16 },
    message: { type: [String, Function], default: "" },
    dangerouslyUseHtmlString: { type: Boolean, default: !1 },
    icon: { type: String, default: "close" },
    customClass: { type: String, default: "" },
    duration: { type: [Number, String], default: 5e3 },
    color: { type: String, default: "primary" },
    closeable: { type: Boolean, default: !0 },
    onClose: { type: Function },
    onClick: { type: Function },
    multiLine: { type: Boolean, default: !1 },
    position: {
      type: String,
      default: "top-right",
      validator: (e) => ["top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left"].includes(e)
    },
    render: { type: Function },
    ariaCloseLabel: bn("$t:close"),
    role: { type: String, default: void 0 },
    inline: { type: Boolean, default: !1 }
  },
  emits: ["on-click", "on-close"],
  setup(e, { emit: t }) {
    const o = Y({
      name: "VaToastRenderer",
      props: {
        render: { type: Function, required: !0 }
      },
      setup: (b) => () => b.render()
    }), { tp: s } = Cn(), r = e, n = t, i = le(), { getColor: a } = Pe(), { textColorComputed: u } = wn(p(() => a(r.color))), d = ie("offsetY"), v = ie("offsetX"), g = ie("duration"), f = $(!1), {
      yOffset: m,
      updateYOffset: C
    } = gn(r), y = p(() => ({
      vertical: r.position.includes("top") ? "top" : "bottom",
      horizontal: r.position.includes("center") ? "center" : r.position.includes("right") ? "right" : "left"
    })), l = () => {
      const b = y.value.vertical, O = y.value.horizontal;
      return O === "center" ? {
        [b]: `${d.value + m.value}px`,
        left: "50%",
        "--va-toast-x-shift": "-50%"
      } : {
        [b]: `${d.value + m.value}px`,
        [O]: `${v.value}px`
      };
    }, S = p(() => [
      r.customClass,
      r.multiLine ? "va-toast--multiline" : "",
      r.inline ? "va-toast--inline" : "",
      [`va-toast--${r.position}`]
    ]), w = p(() => ({
      ...l(),
      backgroundColor: a(r.color),
      color: u.value
    })), _ = p(() => r.role === "status" ? "polite" : "assertive"), B = p(() => typeof r.message == "function" ? r.message() : r.message), H = () => {
      var b, O;
      (b = i.value) == null || b.removeEventListener("transitionend", H), (O = i.value) == null || O.remove();
    }, ee = () => {
      typeof r.onClick == "function" ? r.onClick() : n("on-click");
    }, K = () => {
      f.value = !1, C();
    }, h = () => {
      typeof r.onClose == "function" ? r.onClose() : n("on-close"), H();
    }, c = hn(), P = c.clear, U = () => {
      g.value > 0 && c.start(() => f.value && K(), g.value);
    };
    return ye(() => {
      f.value = !0, U();
    }), (b, O) => (I(), A(It, {
      name: "va-toast-fade",
      onAfterLeave: h
    }, {
      default: T(() => [
        Fe(F("div", {
          ref_key: "rootElement",
          ref: i,
          role: b.$props.role ?? b.$props.closeable ? "alertdialog" : "alert",
          "aria-live": _.value,
          "aria-atomic": "true",
          class: je(["va-toast", S.value]),
          style: He(w.value),
          onMouseenter: O[0] || (O[0] = //@ts-ignore
          (...te) => E(P) && E(P)(...te)),
          onMouseleave: U,
          onClick: ee
        }, [
          F("div", xn, [
            b.$props.title ? (I(), M("h2", {
              key: 0,
              class: "va-toast__title",
              textContent: ce(b.$props.title)
            }, null, 8, _n)) : J("", !0),
            Fe(F("div", Pn, [
              b.$props.dangerouslyUseHtmlString ? (I(), M("div", {
                key: 0,
                innerHTML: B.value
              }, null, 8, Tn)) : (I(), M("p", {
                key: 1,
                textContent: ce(B.value)
              }, null, 8, Fn))
            ], 512), [
              [$e, b.$props.message]
            ]),
            b.$props.render ? (I(), M("div", $n, [
              x(E(o), {
                render: b.$props.render
              }, null, 8, ["render"])
            ])) : J("", !0),
            b.$props.closeable ? (I(), A(un, {
              key: 2,
              class: "va-toast__close-icon",
              role: "button",
              "aria-label": E(s)(b.$props.ariaCloseLabel),
              tabindex: "0",
              size: "1rem",
              name: b.$props.icon,
              onClick: Ie(K, ["stop"]),
              onKeydown: Et(Ie(K, ["stop"]), ["enter"])
            }, null, 8, ["aria-label", "name", "onKeydown"])) : J("", !0)
          ])
        ], 46, Sn), [
          [$e, f.value]
        ])
      ]),
      _: 1
    }));
  }
}), En = So(In);
let W = 1;
V().vaToastInstances = [];
const Te = (e) => {
  var t;
  return ((t = e.component) == null ? void 0 : t.props) || {};
}, On = (e, t) => {
  if (!e)
    return;
  if (!V().vaToastInstances.length) {
    W = 1;
    return;
  }
  V().vaToastInstances.findIndex((s) => s === e) < 0 || (t(), V().vaToastInstances = V().vaToastInstances.reduce((s, r, n) => r === e ? s : [...s, r], []), V().vaToastInstances.length || (W = 1));
}, Vn = (e, t) => {
  e && (ue(null, e), e.remove()), e = null;
}, Rn = (e, {
  props: t,
  children: o,
  element: s,
  appContext: r
} = {}) => {
  let n = s, i;
  return i = x(e, { ...t, onClose: () => {
    On(i, () => Vn(n)), t?.onClose && t.onClose();
  } }, o), r && (i.appContext = r), n ? ue(i, n) : typeof document < "u" && ue(i, n = document.createElement("div")), { vNode: i, el: n };
}, kn = (e) => {
  if (!V().vaToastInstances.length) {
    W = 1;
    return;
  }
  V().vaToastInstances.forEach((t) => {
    e && t.appContext !== e || Te(t).onClose();
  });
}, Le = (e) => {
  const t = V().vaToastInstances.find((o) => {
    var s;
    return ((s = o.el) == null ? void 0 : s.id) === e;
  });
  t && Te(t).onClose();
}, zn = (e) => typeof e == "string" ? {
  message: e
} : e, An = (e, t) => {
  const { vNode: o, el: s } = Rn(En, { appContext: t, props: zn(e) }), r = Te(o);
  return s && o.el && r ? (document.body.appendChild(s.childNodes[0]), o.el.id = "notification_" + W, W += 1, V().vaToastInstances.push(o), o.el.id) : null;
}, Bn = () => {
  const e = R();
  return p(() => {
    var t;
    return ((t = Ce()) == null ? void 0 : t._context) || e?.appContext;
  });
}, Nn = () => {
  const e = Bn(), t = [], o = (a) => {
    const u = An(a, e.value);
    return u && t.push(u), u;
  };
  return {
    init: (a) => o(a),
    notify: o,
    close: (a) => Le(a),
    closeAll: (a = !1) => kn(a ? void 0 : e.value),
    closeAllCreatedInThisHook: () => {
      t.forEach((a) => Le(a));
    }
  };
}, Dn = { class: "flex-nowrap" }, Mn = /* @__PURE__ */ Y({
  __name: "SaveInputGit",
  props: {
    repo: {}
  },
  emits: ["save", "override"],
  setup(e, { expose: t, emit: o }) {
    const s = o, r = e, n = $("newFile"), i = p(() => n.value == "");
    ye(async () => {
      a.value = await r.repo.findAll();
    });
    const a = $(), u = p(() => a.value == null ? !1 : a.value.find((f) => f.name == n.value) != null), d = () => {
      const f = new URL(r.repo.uri);
      f.pathname = n.value + ".json", s("save", {
        name: n.value,
        uri: f
      });
    }, v = () => {
      const f = a.value.find((m) => m.name == n.value);
      s("override", f);
    };
    return t({ setNameSuggestion: (f) => {
      n.value = f;
    } }), (f, m) => {
      const C = z("VaInput"), y = z("VaButton");
      return I(), A(de, {
        defer: "",
        to: "#loadSaveModalFooter"
      }, [
        F("div", Dn, [
          m[1] || (m[1] = F("span", { class: "va-title" }, "Name: ", -1)),
          x(C, {
            modelValue: n.value,
            "onUpdate:modelValue": m[0] || (m[0] = (l) => n.value = l),
            placeholder: "Name"
          }, null, 8, ["modelValue"])
        ]),
        u.value ? (I(), A(y, {
          key: 0,
          color: "danger",
          onClick: v,
          disabled: i.value,
          "border-color": "primary",
          preset: "secondary",
          icon: "save"
        }, {
          default: T(() => [...m[2] || (m[2] = [
            G(" override ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : (I(), A(y, {
          key: 1,
          onClick: d,
          disabled: i.value,
          "border-color": "primary",
          preset: "secondary",
          icon: "save"
        }, {
          default: T(() => [...m[3] || (m[3] = [
            G(" save", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]))
      ]);
    };
  }
}), Ln = { class: "flex-nowrap" }, Gn = { class: "commit" }, jn = { class: "deleteDailog" }, Hn = /* @__PURE__ */ Y({
  __name: "GitRepositoryV",
  props: {
    repo: {},
    context: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, s = t, r = $([
      { key: "icon", label: "icon" },
      { key: "name", label: "file" },
      { key: "date", label: "date" },
      { key: "size", label: "size" },
      { key: "options", label: "options" }
    ]), n = $([]), i = $("main"), a = $(""), u = $(!1);
    $(!1);
    const d = $(void 0), v = $(null);
    ne(() => o.repo, async (h) => {
      await C();
    }, { immediate: !0 }), ne(i, async (h) => {
      const c = (await o.repo.getBranches()).find((P) => P.name == h);
      c && (o.repo.setBranch(c), o.repo.getCommits(), C());
    }), ne(a, async (h) => {
      const c = (await o.repo.getCommits()).find((P) => P.creation_date == h);
      c && (o.repo.setCommit(c), C());
    });
    const g = async (h) => {
      v.value = h;
    }, f = Ee(async () => (await o.repo.getBranches()).map((h) => h.name)), m = Ee(async () => (console.log("updated"), (await o.repo.getCommits()).map((h) => h.creation_date)));
    async function C() {
      if (console.log("update"), o.repo != null)
        try {
          u.value = !0, n.value = await o.repo.findAll();
        } catch {
          n.value = [];
        } finally {
          u.value = !1;
        }
      else n.value = [];
    }
    const y = async (h) => {
      if (!o.context?.state)
        return console.log("no context"), !1;
      h.data = o.context.state;
      try {
        await o.repo.update(h), w({ message: "File saved", color: "#dee5f2", position: "bottom-right", duration: 2e3 });
      } catch (c) {
        let P = await B(null);
        P ? (await o.repo.auth({ auth: P }), y(h)) : w({ title: "Error on saving File", message: c, color: "#d23a1f", position: "bottom-right", duration: 2e3 });
      } finally {
      }
    }, l = async (h) => {
      if (!o.context?.state)
        return console.log("no context"), !1;
      h.data = o.context.state;
      try {
        await o.repo.create(h), w({ message: "File saved", color: "#dee5f2", position: "bottom-right", duration: 2e3 });
      } catch (c) {
        if (c instanceof mt) {
          let P = await B(null);
          P ? (await o.repo.auth({ auth: P }), await l(h)) : w({ title: "Error on saving File", message: c, color: "#d23a1f", position: "bottom-right", duration: 2e3 });
        } else
          w({ title: "Error on saving File", message: c, color: "#d23a1f", position: "bottom-right", duration: 2e3 }), console.log(h);
      } finally {
        await C();
      }
    }, S = () => d.value, { notify: w } = Nn(), { isOpened: _, run: B, close: H } = Ot(S), ee = (h) => v.value && h.name === v.value.item.name ? { class: ["selected bg-gray-200"] } : "", K = async () => {
      const h = v.value;
      try {
        let c = await o.repo.getEntityByUri(h.item.uri);
        c && c.data && s("close", c?.data), w({
          message: "File loaded",
          color: "#dee5f2",
          position: "bottom-right",
          duration: 2e3
        });
      } catch (c) {
        console.log(c);
      }
    };
    return (h, c) => {
      const P = z("VaMenuList"), U = z("VaButtonDropdown"), b = z("VaButton"), O = z("VaIcon"), te = z("VaDataTable"), dt = z("VaInput"), ft = z("VaModal");
      return I(), M(Ke, null, [
        F("div", Ln, [
          (I(), A(de, {
            defer: "",
            to: "#loadSaveModalFooter"
          }, [
            c[9] || (c[9] = F("span", { class: "va-title" }, "Branch: ", -1)),
            x(U, {
              label: i.value,
              preset: "secondary",
              "border-color": "primary"
            }, {
              default: T(() => [
                x(P, {
                  options: E(f),
                  onSelected: c[0] || (c[0] = (k) => {
                    i.value = k;
                  })
                }, null, 8, ["options"])
              ]),
              _: 1
            }, 8, ["label"]),
            c[10] || (c[10] = F("div", { class: "space" }, null, -1)),
            F("div", Gn, [
              c[8] || (c[8] = F("span", { class: "va-title" }, "Commit: ", -1)),
              x(U, {
                label: a.value,
                preset: "secondary",
                "border-color": "primary"
              }, {
                default: T(() => [
                  x(P, {
                    options: E(m),
                    onSelected: c[1] || (c[1] = (k) => {
                      a.value = k;
                    })
                  }, null, 8, ["options"])
                ]),
                _: 1
              }, 8, ["label"])
            ])
          ])),
          x(Mn, {
            repo: e.repo,
            onSave: l,
            onOverride: y
          }, null, 8, ["repo"]),
          (I(), A(de, {
            defer: "",
            to: "#loadSaveModalFooter"
          }, [
            x(b, {
              onClick: K,
              disabled: !v.value,
              icon: "task",
              "border-color": "primary",
              preset: "secondary"
            }, {
              default: T(() => [...c[11] || (c[11] = [
                G(" load", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ]))
        ]),
        x(te, {
          class: "table",
          striped: "",
          "virtual-scroller": "",
          loading: u.value,
          items: n.value,
          columns: r.value,
          hoverable: "",
          "onRow:click": g,
          "row-bind": ee
        }, {
          "cell(options)": T(({ rowIndex: k, row: pt }) => [
            x(b, {
              preset: "plain",
              icon: "download",
              class: "ml-3",
              onClick: c[2] || (c[2] = (oe) => {
                oe.stopImmediatePropagation();
              })
            }),
            x(b, {
              preset: "plain",
              icon: "delete",
              class: "ml-3",
              onClick: c[3] || (c[3] = (oe) => {
                oe.stopImmediatePropagation();
              })
            })
          ]),
          "cell(icon)": T(({ rowIndex: k, row: pt }) => [
            x(O, { name: "newspaper" })
          ]),
          _: 1
        }, 8, ["loading", "items", "columns"]),
        x(ft, {
          size: "auto",
          "hide-default-actions": "",
          modelValue: E(_),
          "onUpdate:modelValue": c[7] || (c[7] = (k) => Q(_) ? _.value = k : null)
        }, {
          footer: T(() => [
            x(b, {
              preset: "secondary",
              onClick: c[5] || (c[5] = () => {
                d.value = void 0, E(H)(null);
              })
            }, {
              default: T(() => [...c[15] || (c[15] = [
                G(" cancel ", -1)
              ])]),
              _: 1
            }),
            x(b, {
              preset: "secondary",
              onClick: c[6] || (c[6] = () => {
                E(H)(d.value);
              })
            }, {
              default: T(() => [...c[16] || (c[16] = [
                G(" ok", -1)
              ])]),
              _: 1
            })
          ]),
          default: T(() => [
            F("div", jn, [
              c[12] || (c[12] = F("span", { class: "va-h5" }, " Please provide a token to access the Repo: ", -1)),
              c[13] || (c[13] = F("br", null, null, -1)),
              c[14] || (c[14] = F("br", null, null, -1)),
              x(dt, {
                modelValue: d.value,
                "onUpdate:modelValue": c[4] || (c[4] = (k) => d.value = k),
                class: "minwidth100",
                placeholder: "Token"
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), Kn = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, r] of t)
    o[s] = r;
  return o;
}, Un = /* @__PURE__ */ Kn(Hn, [["__scopeId", "data-v-9cab5c48"]]);
function ut({ services: e }) {
  e.getRequired(vt).registerViewForRepoType(gt, Un);
}
const Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: ut
}, Symbol.toStringTag, { value: "Module" })), Ge = "org.eclipse.daanse.board.app.ui.vue.persistence.git", Xn = "0.0.1-next.1";
async function Qn(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${Ge}: tsm runtime is not initialized`);
  t.register(Ge, Yn, Xn, "ui.vue.persistence.git"), await ut?.(e);
}
async function er(e) {
  await void 0;
}
export {
  Qn as activate,
  er as deactivate
};
