(function(){var i="ui.vue.variable.components",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".variable-input{width:100%;align-items:flex-end}.variable-input .toggle{margin-bottom:10px}.variable-input .input-block{flex-grow:1}.v-popper__popper{z-index:10000000000!important}.complex-input-item{padding:5px 10px;cursor:pointer}.complex-input-item:hover{background-color:#efefef}.mention-selected{background-color:#f0f0f0}.complex-input-wrapper{display:flex;flex-direction:column;gap:4px}.complex-input-wrapper .tip{font-size:12px;color:#666}\n";})();
import { defineComponent as de, mergeModels as Pt, ref as G, useModel as Ct, watch as Ie, onMounted as Ye, inject as fe, computed as Ve, resolveComponent as he, createElementBlock as W, createCommentVNode as Fe, openBlock as B, unref as At, Fragment as Ae, createElementVNode as D, createVNode as ce, renderSlot as U, isRef as nt, withCtx as ie, toDisplayString as le, createTextVNode as Xe, pushScopeId as Gt, popScopeId as Ut, nextTick as Oe, normalizeClass as ke, normalizeProps as Yt, guardReactiveProps as Xt, createBlock as Ze, mergeProps as Ot, withScopeId as Zt, withKeys as Qt, normalizeStyle as Pe, onUpdated as Jt, onUnmounted as eo, renderList as to } from "vue";
import { identifier as me } from "org.eclipse.daanse.board.app.lib.api.variable";
const oo = {
  key: 0,
  class: "flex items-end justify-between gap-2 variable-input"
}, no = { class: "input-block" }, io = ["onClick"], so = /* @__PURE__ */ de({
  __name: "VariableInput",
  props: /* @__PURE__ */ Pt({
    label: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = G([]), o = Ct(e, "modelValue"), n = e;
    console.log(o.value);
    let i = G(!1);
    Ie(() => o.value?.isSet, (l) => {
      l && (i.value = !0);
    }, { immediate: !0 }), Ye(() => {
      const l = fe(me);
      t.value = l.getAllVariables().map(([u, c]) => {
        const h = l.getVariable(u);
        return {
          label: h.name,
          value: h.value
        };
      });
    });
    const s = (l) => {
      const c = fe(me).getVariable(l);
      return c ? c.value : null;
    }, r = (l) => {
      console.log("onChange triggered", l), o.value && (o.value.value = l.target.value);
    }, a = (l) => {
      if (!o.value) return;
      const u = l.label, h = fe(me).getVariable(u);
      o.value.setTo(h);
    }, d = Ve(() => {
      const l = o.value?.variable || "";
      let u = null;
      return l && (u = fe(me).getVariable(l)), {
        label: l,
        value: u?.value || null
      };
    });
    return (l, u) => {
      const c = he("VaIcon"), h = he("VaSelect");
      return o.value ? (B(), W("div", oo, [
        At(i) ? (B(), W(Ae, { key: 1 }, [
          ce(h, {
            "model-value": d.value,
            options: t.value,
            "text-by": "label",
            placeholder: "Select an variable to bind",
            class: "input-block",
            label: n.label,
            "onUpdate:modelValue": a
          }, {
            content: ie(({ value: p }) => [
              Xe(le(p.label) + " (" + le(s(p.label)) + ") ", 1)
            ]),
            option: ie(({ option: p, selectOption: f }) => [
              D("div", {
                class: "flex items-center justify-between",
                onClick: (g) => f(p)
              }, le(p.label) + " (" + le(p.value) + ") ", 9, io)
            ]),
            _: 1
          }, 8, ["model-value", "options", "label"]),
          ce(c, {
            name: "code",
            color: "#E19840",
            class: "toggle",
            onClick: u[1] || (u[1] = (p) => nt(i) ? i.value = !1 : i = !1)
          })
        ], 64)) : (B(), W(Ae, { key: 0 }, [
          D("div", no, [
            U(l.$slots, "default", {
              value: o.value.value,
              change: r
            })
          ]),
          ce(c, {
            name: "code",
            class: "toggle",
            onClick: u[0] || (u[0] = (p) => nt(i) ? i.value = !0 : i = !0)
          })
        ], 64))
      ])) : Fe("", !0);
    };
  }
}), ro = ["top", "right", "bottom", "left"], it = ["start", "end"], st = /* @__PURE__ */ ro.reduce((e, t) => e.concat(t, t + "-" + it[0], t + "-" + it[1]), []), be = Math.min, ae = Math.max, ao = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, lo = {
  start: "end",
  end: "start"
};
function We(e, t, o) {
  return ae(e, be(t, o));
}
function ue(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Z(e) {
  return e.split("-")[0];
}
function j(e) {
  return e.split("-")[1];
}
function kt(e) {
  return e === "x" ? "y" : "x";
}
function Qe(e) {
  return e === "y" ? "height" : "width";
}
const uo = /* @__PURE__ */ new Set(["top", "bottom"]);
function Q(e) {
  return uo.has(Z(e)) ? "y" : "x";
}
function Je(e) {
  return kt(Q(e));
}
function Nt(e, t, o) {
  o === void 0 && (o = !1);
  const n = j(e), i = Je(e), s = Qe(i);
  let r = i === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (r = Re(r)), [r, Re(r)];
}
function co(e) {
  const t = Re(e);
  return [Ne(e), t, Ne(t)];
}
function Ne(e) {
  return e.replace(/start|end/g, (t) => lo[t]);
}
const rt = ["left", "right"], at = ["right", "left"], po = ["top", "bottom"], ho = ["bottom", "top"];
function fo(e, t, o) {
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? at : rt : t ? rt : at;
    case "left":
    case "right":
      return t ? po : ho;
    default:
      return [];
  }
}
function mo(e, t, o, n) {
  const i = j(e);
  let s = fo(Z(e), o === "start", n);
  return i && (s = s.map((r) => r + "-" + i), t && (s = s.concat(s.map(Ne)))), s;
}
function Re(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ao[t]);
}
function go(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Rt(e) {
  return typeof e != "number" ? go(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ge(e) {
  const {
    x: t,
    y: o,
    width: n,
    height: i
  } = e;
  return {
    width: n,
    height: i,
    top: o,
    left: t,
    right: t + n,
    bottom: o + i,
    x: t,
    y: o
  };
}
function lt(e, t, o) {
  let {
    reference: n,
    floating: i
  } = e;
  const s = Q(t), r = Je(t), a = Qe(r), d = Z(t), l = s === "y", u = n.x + n.width / 2 - i.width / 2, c = n.y + n.height / 2 - i.height / 2, h = n[a] / 2 - i[a] / 2;
  let p;
  switch (d) {
    case "top":
      p = {
        x: u,
        y: n.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      p = {
        x: n.x + n.width,
        y: c
      };
      break;
    case "left":
      p = {
        x: n.x - i.width,
        y: c
      };
      break;
    default:
      p = {
        x: n.x,
        y: n.y
      };
  }
  switch (j(t)) {
    case "start":
      p[r] -= h * (o && l ? -1 : 1);
      break;
    case "end":
      p[r] += h * (o && l ? -1 : 1);
      break;
  }
  return p;
}
async function vo(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: s,
    rects: r,
    elements: a,
    strategy: d
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: c = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = ue(t, e), f = Rt(p), w = a[h ? c === "floating" ? "reference" : "floating" : c], v = ge(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(w))) == null || o ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: d
  })), y = c === "floating" ? {
    x: n,
    y: i,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), S = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = ge(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: b,
    strategy: d
  }) : y);
  return {
    top: (v.top - A.top + f.top) / S.y,
    bottom: (A.bottom - v.bottom + f.bottom) / S.y,
    left: (v.left - A.left + f.left) / S.x,
    right: (A.right - v.right + f.right) / S.x
  };
}
const wo = async (e, t, o) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: r
  } = o, a = s.filter(Boolean), d = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let l = await r.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: u,
    y: c
  } = lt(l, n, d), h = n, p = {}, f = 0;
  for (let w = 0; w < a.length; w++) {
    var g;
    const {
      name: v,
      fn: y
    } = a[w], {
      x: b,
      y: S,
      data: A,
      reset: C
    } = await y({
      x: u,
      y: c,
      initialPlacement: n,
      placement: h,
      strategy: i,
      middlewareData: p,
      rects: l,
      platform: {
        ...r,
        detectOverflow: (g = r.detectOverflow) != null ? g : vo
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    u = b ?? u, c = S ?? c, p = {
      ...p,
      [v]: {
        ...p[v],
        ...A
      }
    }, C && f <= 50 && (f++, typeof C == "object" && (C.placement && (h = C.placement), C.rects && (l = C.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : C.rects), {
      x: u,
      y: c
    } = lt(l, h, d)), w = -1);
  }
  return {
    x: u,
    y: c,
    placement: h,
    strategy: i,
    middlewareData: p
  };
}, yo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: n,
      placement: i,
      rects: s,
      platform: r,
      elements: a,
      middlewareData: d
    } = t, {
      element: l,
      padding: u = 0
    } = ue(e, t) || {};
    if (l == null)
      return {};
    const c = Rt(u), h = {
      x: o,
      y: n
    }, p = Je(i), f = Qe(p), g = await r.getDimensions(l), w = p === "y", v = w ? "top" : "left", y = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", S = s.reference[f] + s.reference[p] - h[p] - s.floating[f], A = h[p] - s.reference[p], C = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
    let O = C ? C[b] : 0;
    (!O || !await (r.isElement == null ? void 0 : r.isElement(C))) && (O = a.floating[b] || s.floating[f]);
    const H = S / 2 - A / 2, N = O / 2 - g[f] / 2 - 1, $ = be(c[v], N), R = be(c[y], N), E = $, M = O - g[f] - R, P = O / 2 - g[f] / 2 + H, q = We(E, P, M), V = !d.arrow && j(i) != null && P !== q && s.reference[f] / 2 - (P < E ? $ : R) - g[f] / 2 < 0, z = V ? P < E ? P - E : P - M : 0;
    return {
      [p]: h[p] + z,
      data: {
        [p]: q,
        centerOffset: P - q - z,
        ...V && {
          alignmentOffset: z
        }
      },
      reset: V
    };
  }
});
function bo(e, t, o) {
  return (e ? [...o.filter((i) => j(i) === e), ...o.filter((i) => j(i) !== e)] : o.filter((i) => Z(i) === i)).filter((i) => e ? j(i) === e || (t ? Ne(i) !== i : !1) : !0);
}
const xo = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var o, n, i;
      const {
        rects: s,
        middlewareData: r,
        placement: a,
        platform: d,
        elements: l
      } = t, {
        crossAxis: u = !1,
        alignment: c,
        allowedPlacements: h = st,
        autoAlignment: p = !0,
        ...f
      } = ue(e, t), g = c !== void 0 || h === st ? bo(c || null, p, h) : h, w = await d.detectOverflow(t, f), v = ((o = r.autoPlacement) == null ? void 0 : o.index) || 0, y = g[v];
      if (y == null)
        return {};
      const b = Nt(y, s, await (d.isRTL == null ? void 0 : d.isRTL(l.floating)));
      if (a !== y)
        return {
          reset: {
            placement: g[0]
          }
        };
      const S = [w[Z(y)], w[b[0]], w[b[1]]], A = [...((n = r.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: y,
        overflows: S
      }], C = g[v + 1];
      if (C)
        return {
          data: {
            index: v + 1,
            overflows: A
          },
          reset: {
            placement: C
          }
        };
      const O = A.map(($) => {
        const R = j($.placement);
        return [$.placement, R && u ? (
          // Check along the mainAxis and main crossAxis side.
          $.overflows.slice(0, 2).reduce((E, M) => E + M, 0)
        ) : (
          // Check only the mainAxis.
          $.overflows[0]
        ), $.overflows];
      }).sort(($, R) => $[1] - R[1]), N = ((i = O.filter(($) => $[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        j($[0]) ? 2 : 3
      ).every((R) => R <= 0))[0]) == null ? void 0 : i[0]) || O[0][0];
      return N !== a ? {
        data: {
          index: v + 1,
          overflows: A
        },
        reset: {
          placement: N
        }
      } : {};
    }
  };
}, _o = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: i,
        middlewareData: s,
        rects: r,
        initialPlacement: a,
        platform: d,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: c = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: g = !0,
        ...w
      } = ue(e, t);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const v = Z(i), y = Q(a), b = Z(a) === a, S = await (d.isRTL == null ? void 0 : d.isRTL(l.floating)), A = h || (b || !g ? [Re(a)] : co(a)), C = f !== "none";
      !h && C && A.push(...mo(a, g, f, S));
      const O = [a, ...A], H = await d.detectOverflow(t, w), N = [];
      let $ = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (u && N.push(H[v]), c) {
        const P = Nt(i, r, S);
        N.push(H[P[0]], H[P[1]]);
      }
      if ($ = [...$, {
        placement: i,
        overflows: N
      }], !N.every((P) => P <= 0)) {
        var R, E;
        const P = (((R = s.flip) == null ? void 0 : R.index) || 0) + 1, q = O[P];
        if (q && (!(c === "alignment" ? y !== Q(q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((L) => Q(L.placement) === y ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: $
            },
            reset: {
              placement: q
            }
          };
        let V = (E = $.filter((z) => z.overflows[0] <= 0).sort((z, L) => z.overflows[1] - L.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!V)
          switch (p) {
            case "bestFit": {
              var M;
              const z = (M = $.filter((L) => {
                if (C) {
                  const K = Q(L.placement);
                  return K === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((K) => K > 0).reduce((K, m) => K + m, 0)]).sort((L, K) => L[1] - K[1])[0]) == null ? void 0 : M[0];
              z && (V = z);
              break;
            }
            case "initialPlacement":
              V = a;
              break;
          }
        if (i !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
}, $o = /* @__PURE__ */ new Set(["left", "top"]);
async function So(e, t) {
  const {
    placement: o,
    platform: n,
    elements: i
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), r = Z(o), a = j(o), d = Q(o) === "y", l = $o.has(r) ? -1 : 1, u = s && d ? -1 : 1, c = ue(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: f
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: c.mainAxis || 0,
    crossAxis: c.crossAxis || 0,
    alignmentAxis: c.alignmentAxis
  };
  return a && typeof f == "number" && (p = a === "end" ? f * -1 : f), d ? {
    x: p * u,
    y: h * l
  } : {
    x: h * l,
    y: p * u
  };
}
const To = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, n;
      const {
        x: i,
        y: s,
        placement: r,
        middlewareData: a
      } = t, d = await So(t, e);
      return r === ((o = a.offset) == null ? void 0 : o.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: i + d.x,
        y: s + d.y,
        data: {
          ...d,
          placement: r
        }
      };
    }
  };
}, Po = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: n,
        placement: i,
        platform: s
      } = t, {
        mainAxis: r = !0,
        crossAxis: a = !1,
        limiter: d = {
          fn: (v) => {
            let {
              x: y,
              y: b
            } = v;
            return {
              x: y,
              y: b
            };
          }
        },
        ...l
      } = ue(e, t), u = {
        x: o,
        y: n
      }, c = await s.detectOverflow(t, l), h = Q(Z(i)), p = kt(h);
      let f = u[p], g = u[h];
      if (r) {
        const v = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = f + c[v], S = f - c[y];
        f = We(b, f, S);
      }
      if (a) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", b = g + c[v], S = g - c[y];
        g = We(b, g, S);
      }
      const w = d.fn({
        ...t,
        [p]: f,
        [h]: g
      });
      return {
        ...w,
        data: {
          x: w.x - o,
          y: w.y - n,
          enabled: {
            [p]: r,
            [h]: a
          }
        }
      };
    }
  };
}, Co = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: i,
        rects: s,
        platform: r,
        elements: a
      } = t, {
        apply: d = () => {
        },
        ...l
      } = ue(e, t), u = await r.detectOverflow(t, l), c = Z(i), h = j(i), p = Q(i) === "y", {
        width: f,
        height: g
      } = s.floating;
      let w, v;
      c === "top" || c === "bottom" ? (w = c, v = h === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = c, w = h === "end" ? "top" : "bottom");
      const y = g - u.top - u.bottom, b = f - u.left - u.right, S = be(g - u[w], y), A = be(f - u[v], b), C = !t.middlewareData.shift;
      let O = S, H = A;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (H = b), (n = t.middlewareData.shift) != null && n.enabled.y && (O = y), C && !h) {
        const $ = ae(u.left, 0), R = ae(u.right, 0), E = ae(u.top, 0), M = ae(u.bottom, 0);
        p ? H = f - 2 * ($ !== 0 || R !== 0 ? $ + R : ae(u.left, u.right)) : O = g - 2 * (E !== 0 || M !== 0 ? E + M : ae(u.top, u.bottom));
      }
      await d({
        ...t,
        availableWidth: H,
        availableHeight: O
      });
      const N = await r.getDimensions(a.floating);
      return f !== N.width || g !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function I(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Y(e) {
  return I(e).getComputedStyle(e);
}
const dt = Math.min, ve = Math.max, ze = Math.round;
function zt(e) {
  const t = Y(e);
  let o = parseFloat(t.width), n = parseFloat(t.height);
  const i = e.offsetWidth, s = e.offsetHeight, r = ze(o) !== i || ze(n) !== s;
  return r && (o = i, n = s), { width: o, height: n, fallback: r };
}
function se(e) {
  return Lt(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Se;
function Et() {
  if (Se) return Se;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Se = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Se) : navigator.userAgent;
}
function X(e) {
  return e instanceof I(e).HTMLElement;
}
function te(e) {
  return e instanceof I(e).Element;
}
function Lt(e) {
  return e instanceof I(e).Node;
}
function ut(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof I(e).ShadowRoot || e instanceof ShadowRoot;
}
function Le(e) {
  const { overflow: t, overflowX: o, overflowY: n, display: i } = Y(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(i);
}
function Ao(e) {
  return ["table", "td", "th"].includes(se(e));
}
function je(e) {
  const t = /firefox/i.test(Et()), o = Y(e), n = o.backdropFilter || o.WebkitBackdropFilter;
  return o.transform !== "none" || o.perspective !== "none" || !!n && n !== "none" || t && o.willChange === "filter" || t && !!o.filter && o.filter !== "none" || ["transform", "perspective"].some(((i) => o.willChange.includes(i))) || ["paint", "layout", "strict", "content"].some(((i) => {
    const s = o.contain;
    return s != null && s.includes(i);
  }));
}
function Dt() {
  return !/^((?!chrome|android).)*safari/i.test(Et());
}
function et(e) {
  return ["html", "body", "#document"].includes(se(e));
}
function Bt(e) {
  return te(e) ? e : e.contextElement;
}
const Ht = { x: 1, y: 1 };
function pe(e) {
  const t = Bt(e);
  if (!X(t)) return Ht;
  const o = t.getBoundingClientRect(), { width: n, height: i, fallback: s } = zt(t);
  let r = (s ? ze(o.width) : o.width) / n, a = (s ? ze(o.height) : o.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
function xe(e, t, o, n) {
  var i, s;
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const r = e.getBoundingClientRect(), a = Bt(e);
  let d = Ht;
  t && (n ? te(n) && (d = pe(n)) : d = pe(e));
  const l = a ? I(a) : window, u = !Dt() && o;
  let c = (r.left + (u && ((i = l.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / d.x, h = (r.top + (u && ((s = l.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / d.y, p = r.width / d.x, f = r.height / d.y;
  if (a) {
    const g = I(a), w = n && te(n) ? I(n) : n;
    let v = g.frameElement;
    for (; v && n && w !== g; ) {
      const y = pe(v), b = v.getBoundingClientRect(), S = getComputedStyle(v);
      b.x += (v.clientLeft + parseFloat(S.paddingLeft)) * y.x, b.y += (v.clientTop + parseFloat(S.paddingTop)) * y.y, c *= y.x, h *= y.y, p *= y.x, f *= y.y, c += b.x, h += b.y, v = I(v).frameElement;
    }
  }
  return { width: p, height: f, top: h, right: c + p, bottom: h + f, left: c, x: c, y: h };
}
function oe(e) {
  return ((Lt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function De(e) {
  return te(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Mt(e) {
  return xe(oe(e)).left + De(e).scrollLeft;
}
function _e(e) {
  if (se(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || ut(e) && e.host || oe(e);
  return ut(t) ? t.host : t;
}
function It(e) {
  const t = _e(e);
  return et(t) ? t.ownerDocument.body : X(t) && Le(t) ? t : It(t);
}
function Ee(e, t) {
  var o;
  t === void 0 && (t = []);
  const n = It(e), i = n === ((o = e.ownerDocument) == null ? void 0 : o.body), s = I(n);
  return i ? t.concat(s, s.visualViewport || [], Le(n) ? n : []) : t.concat(n, Ee(n));
}
function ct(e, t, o) {
  return t === "viewport" ? ge((function(n, i) {
    const s = I(n), r = oe(n), a = s.visualViewport;
    let d = r.clientWidth, l = r.clientHeight, u = 0, c = 0;
    if (a) {
      d = a.width, l = a.height;
      const h = Dt();
      (h || !h && i === "fixed") && (u = a.offsetLeft, c = a.offsetTop);
    }
    return { width: d, height: l, x: u, y: c };
  })(e, o)) : te(t) ? ge((function(n, i) {
    const s = xe(n, !0, i === "fixed"), r = s.top + n.clientTop, a = s.left + n.clientLeft, d = X(n) ? pe(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * d.x, height: n.clientHeight * d.y, x: a * d.x, y: r * d.y };
  })(t, o)) : ge((function(n) {
    const i = oe(n), s = De(n), r = n.ownerDocument.body, a = ve(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth), d = ve(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
    let l = -s.scrollLeft + Mt(n);
    const u = -s.scrollTop;
    return Y(r).direction === "rtl" && (l += ve(i.clientWidth, r.clientWidth) - a), { width: a, height: d, x: l, y: u };
  })(oe(e)));
}
function pt(e) {
  return X(e) && Y(e).position !== "fixed" ? e.offsetParent : null;
}
function ht(e) {
  const t = I(e);
  let o = pt(e);
  for (; o && Ao(o) && Y(o).position === "static"; ) o = pt(o);
  return o && (se(o) === "html" || se(o) === "body" && Y(o).position === "static" && !je(o)) ? t : o || (function(n) {
    let i = _e(n);
    for (; X(i) && !et(i); ) {
      if (je(i)) return i;
      i = _e(i);
    }
    return null;
  })(e) || t;
}
function Oo(e, t, o) {
  const n = X(t), i = oe(t), s = xe(e, !0, o === "fixed", t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (n || !n && o !== "fixed") if ((se(t) !== "body" || Le(i)) && (r = De(t)), X(t)) {
    const d = xe(t, !0);
    a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
  } else i && (a.x = Mt(i));
  return { x: s.left + r.scrollLeft - a.x, y: s.top + r.scrollTop - a.y, width: s.width, height: s.height };
}
const ko = { getClippingRect: function(e) {
  let { element: t, boundary: o, rootBoundary: n, strategy: i } = e;
  const s = o === "clippingAncestors" ? (function(l, u) {
    const c = u.get(l);
    if (c) return c;
    let h = Ee(l).filter(((w) => te(w) && se(w) !== "body")), p = null;
    const f = Y(l).position === "fixed";
    let g = f ? _e(l) : l;
    for (; te(g) && !et(g); ) {
      const w = Y(g), v = je(g);
      (f ? v || p : v || w.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = w : h = h.filter(((y) => y !== g)), g = _e(g);
    }
    return u.set(l, h), h;
  })(t, this._c) : [].concat(o), r = [...s, n], a = r[0], d = r.reduce(((l, u) => {
    const c = ct(t, u, i);
    return l.top = ve(c.top, l.top), l.right = dt(c.right, l.right), l.bottom = dt(c.bottom, l.bottom), l.left = ve(c.left, l.left), l;
  }), ct(t, a, i));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: o, strategy: n } = e;
  const i = X(o), s = oe(o);
  if (o === s) return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((i || !i && n !== "fixed") && ((se(o) !== "body" || Le(s)) && (r = De(o)), X(o))) {
    const l = xe(o);
    a = pe(o), d.x = l.x + o.clientLeft, d.y = l.y + o.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + d.x, y: t.y * a.y - r.scrollTop * a.y + d.y };
}, isElement: te, getDimensions: function(e) {
  return X(e) ? zt(e) : e.getBoundingClientRect();
}, getOffsetParent: ht, getDocumentElement: oe, getScale: pe, async getElementRects(e) {
  let { reference: t, floating: o, strategy: n } = e;
  const i = this.getOffsetParent || ht, s = this.getDimensions;
  return { reference: Oo(t, await i(o), n), floating: { x: 0, y: 0, ...await s(o) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Y(e).direction === "rtl" }, No = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), i = { platform: ko, ...o }, s = { ...i.platform, _c: n };
  return wo(e, t, { ...i, platform: s });
}, ne = {
  // Disable popper components
  disabled: !1,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 150,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Prevent overflow
  preventOverflow: !0,
  // Flip to the opposite placement if needed
  flip: !0,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: !0,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: !0,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: !1,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: !1,
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: !0,
      // Hide on clock outside
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function qe(e, t) {
  let o = ne.themes[e] || {}, n;
  do
    n = o[t], typeof n > "u" ? o.$extend ? o = ne.themes[o.$extend] || {} : (o = null, n = ne[t]) : o = null;
  while (o);
  return n;
}
function Ro(e) {
  const t = [e];
  let o = ne.themes[e] || {};
  do
    o.$extend && !o.$resetCss ? (t.push(o.$extend), o = ne.themes[o.$extend] || {}) : o = null;
  while (o);
  return t.map((n) => `v-popper--theme-${n}`);
}
function ft(e) {
  const t = [e];
  let o = ne.themes[e] || {};
  do
    o.$extend ? (t.push(o.$extend), o = ne.themes[o.$extend] || {}) : o = null;
  while (o);
  return t;
}
let $e = !1;
if (typeof window < "u") {
  $e = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        $e = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Vt = !1;
typeof window < "u" && typeof navigator < "u" && (Vt = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const zo = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), mt = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, gt = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function vt(e, t) {
  const o = e.indexOf(t);
  o !== -1 && e.splice(o, 1);
}
function He() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const F = [];
let re = null;
const wt = {};
function yt(e) {
  let t = wt[e];
  return t || (t = wt[e] = []), t;
}
let Ke = function() {
};
typeof window < "u" && (Ke = window.Element);
function x(e) {
  return function(t) {
    return qe(t.theme, e);
  };
}
const Me = "__floating-vue__popper", Ft = () => de({
  name: "VPopper",
  provide() {
    return {
      [Me]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Me]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: x("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: x("positioningDisabled")
    },
    placement: {
      type: String,
      default: x("placement"),
      validator: (e) => zo.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: x("delay")
    },
    distance: {
      type: [Number, String],
      default: x("distance")
    },
    skidding: {
      type: [Number, String],
      default: x("skidding")
    },
    triggers: {
      type: Array,
      default: x("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: x("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: x("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: x("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: x("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: x("popperHideTriggers")
    },
    container: {
      type: [String, Object, Ke, Boolean],
      default: x("container")
    },
    boundary: {
      type: [String, Ke],
      default: x("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: x("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: x("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: x("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: x("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: x("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: x("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: x("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: x("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: x("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: x("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: x("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: x("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: x("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: x("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: x("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: x("flip")
    },
    shift: {
      type: Boolean,
      default: x("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: x("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: x("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: x("disposeTimeout")
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0,
      pendingHide: !1,
      containsGlobalTarget: !1,
      isDisposed: !0,
      mouseDownContains: !1
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[Me]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    triggers: {
      handler: "$_refreshListeners",
      deep: !0
    },
    positioningDisabled: "$_refreshListeners",
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
  },
  created() {
    this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = !1, force: o = !1 } = {}) {
      var n, i;
      (n = this.parentPopper) != null && n.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (o || !this.disabled) && (((i = this.parentPopper) == null ? void 0 : i.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var o;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e;
      this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(To({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(xo({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Po({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(_o({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(yo({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: n, rects: i, middlewareData: s }) => {
          let r;
          const { centerOffset: a } = s.arrow;
          return n.startsWith("top") || n.startsWith("bottom") ? r = Math.abs(a) > i.reference.width / 2 : r = Math.abs(a) > i.reference.height / 2, {
            data: {
              overflow: r
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const n = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: i, placement: s, middlewareData: r }) => {
            var a;
            if ((a = r.autoSize) != null && a.skip)
              return {};
            let d, l;
            return s.startsWith("top") || s.startsWith("bottom") ? d = i.reference.width : l = i.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = d != null ? `${d}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = l != null ? `${l}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Co({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: i }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null;
        }
      })));
      const o = await No(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: o.x,
        y: o.y,
        placement: o.placement,
        strategy: o.strategy,
        arrow: {
          ...o.middlewareData.arrow,
          ...o.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), re && this.instantMove && re.instantMove && re !== this.parentPopper) {
        re.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (re = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await He(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Ee(this.$_referenceNode),
        ...Ee(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), o = this.$_popperNode.querySelector(".v-popper__wrapper"), n = o.parentNode.getBoundingClientRect(), i = t.x + t.width / 2 - (n.left + o.offsetLeft), s = t.y + t.height / 2 - (n.top + o.offsetTop);
        this.result.transformOrigin = `${i}px ${s}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let o = 0; o < F.length; o++)
          t = F[o], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      F.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of ft(this.theme))
        yt(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await He(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, vt(F, this), F.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const o of ft(this.theme)) {
        const n = yt(o);
        vt(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${o}`);
      }
      re === this && (re = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await He(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const e = (o) => {
        this.isShown && !this.$_hideInProgress || (o.usedByTooltip = !0, !this.$_preventShow && this.show({ event: o }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, mt, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], mt, this.popperTriggers, this.popperShowTriggers, e);
      const t = (o) => {
        o.usedByTooltip || this.hide({ event: o });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, gt, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], gt, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, o) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: o }), e.forEach((n) => n.addEventListener(t, o, $e ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, o, n, i) {
      let s = o;
      n != null && (s = typeof n == "function" ? n(s) : n), s.forEach((r) => {
        const a = t[r];
        a && this.$_registerEventListeners(e, a, i);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((o) => {
        const { targetNodes: n, eventType: i, handler: s } = o;
        !e || e === i ? n.forEach((r) => r.removeEventListener(i, s)) : t.push(o);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = !1) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const o of this.$_targetNodes) {
        const n = o.getAttribute(e);
        n && (o.removeAttribute(e), o.setAttribute(t, n));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const o in e) {
          const n = e[o];
          n == null ? t.removeAttribute(o) : t.setAttribute(o, n);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (we >= e.left && we <= e.right && ye >= e.top && ye <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), o = we - J, n = ye - ee, i = t.left + t.width / 2 - J + (t.top + t.height / 2) - ee + t.width + t.height, s = J + o * i, r = ee + n * i;
        return Te(J, ee, s, r, t.left, t.top, t.left, t.bottom) || // Left edge
        Te(J, ee, s, r, t.left, t.top, t.right, t.top) || // Top edge
        Te(J, ee, s, r, t.right, t.top, t.right, t.bottom) || // Right edge
        Te(J, ee, s, r, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Vt) {
    const e = $e ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => bt(t), e), document.addEventListener("touchend", (t) => xt(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => bt(e), !0), window.addEventListener("click", (e) => xt(e, !1), !0);
  window.addEventListener("resize", Do);
}
function bt(e, t) {
  for (let o = 0; o < F.length; o++) {
    const n = F[o];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function xt(e, t) {
  Eo(e, t);
}
function Eo(e, t) {
  const o = {};
  for (let n = F.length - 1; n >= 0; n--) {
    const i = F[n];
    try {
      const s = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
      i.pendingHide = !1, requestAnimationFrame(() => {
        if (i.pendingHide = !1, !o[i.randomId] && _t(i, s, e)) {
          if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
            let a = i.parentPopper;
            for (; a; )
              o[a.randomId] = !0, a = a.parentPopper;
            return;
          }
          let r = i.parentPopper;
          for (; r && _t(r, r.containsGlobalTarget, e); )
            r.$_handleGlobalClose(e, t), r = r.parentPopper;
        }
      });
    } catch {
    }
  }
}
function _t(e, t, o) {
  return o.closeAllPopover || o.closePopover && t || Lo(e, o) && !t;
}
function Lo(e, t) {
  if (typeof e.autoHide == "function") {
    const o = e.autoHide(t);
    return e.lastAutoHide = o, o;
  }
  return e.autoHide;
}
function Do() {
  for (let e = 0; e < F.length; e++)
    F[e].$_computePosition();
}
let J = 0, ee = 0, we = 0, ye = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  J = we, ee = ye, we = e.clientX, ye = e.clientY;
}, $e ? {
  passive: !0
} : void 0);
function Te(e, t, o, n, i, s, r, a) {
  const d = ((r - i) * (t - s) - (a - s) * (e - i)) / ((a - s) * (o - e) - (r - i) * (n - t)), l = ((o - e) * (t - s) - (n - t) * (e - i)) / ((a - s) * (o - e) - (r - i) * (n - t));
  return d >= 0 && d <= 1 && l >= 0 && l <= 1;
}
const Bo = {
  extends: Ft()
}, tt = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, i] of t)
    o[n] = i;
  return o;
};
function Ho(e, t, o, n, i, s) {
  return B(), W("div", {
    ref: "reference",
    class: ke(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    U(e.$slots, "default", Yt(Xt(e.slotData)))
  ], 2);
}
const Mo = /* @__PURE__ */ tt(Bo, [["render", Ho]]);
function Io() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var o = e.indexOf("Trident/");
  if (o > 0) {
    var n = e.indexOf("rv:");
    return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
  }
  var i = e.indexOf("Edge/");
  return i > 0 ? parseInt(e.substring(i + 5, e.indexOf(".", i)), 10) : -1;
}
let Ce;
function Ge() {
  Ge.init || (Ge.init = !0, Ce = Io() !== -1);
}
var Be = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    Ge(), Oe(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ce && this.$el.appendChild(e), e.data = "about:blank", Ce || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!Ce && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Vo = /* @__PURE__ */ Zt("data-v-b329ee4c");
Gt("data-v-b329ee4c");
const Fo = {
  class: "resize-observer",
  tabindex: "-1"
};
Ut();
const Wo = /* @__PURE__ */ Vo((e, t, o, n, i, s) => (B(), Ze("div", Fo)));
Be.render = Wo;
Be.__scopeId = "data-v-b329ee4c";
Be.__file = "src/components/ResizeObserver.vue";
const Wt = (e = "theme") => ({
  computed: {
    themeClass() {
      return Ro(this[e]);
    }
  }
}), jo = de({
  name: "VPopperContent",
  components: {
    ResizeObserver: Be
  },
  mixins: [
    Wt()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), qo = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Ko = {
  ref: "inner",
  class: "v-popper__inner"
}, Go = /* @__PURE__ */ D("div", { class: "v-popper__arrow-outer" }, null, -1), Uo = /* @__PURE__ */ D("div", { class: "v-popper__arrow-inner" }, null, -1), Yo = [
  Go,
  Uo
];
function Xo(e, t, o, n, i, s) {
  const r = he("ResizeObserver");
  return B(), W("div", {
    id: e.popperId,
    ref: "popover",
    class: ke(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: Pe(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Qt((a) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    D("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide"))
    }),
    D("div", {
      class: "v-popper__wrapper",
      style: Pe(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      D("div", Ko, [
        e.mounted ? (B(), W(Ae, { key: 0 }, [
          D("div", null, [
            U(e.$slots, "default")
          ]),
          e.handleResize ? (B(), Ze(r, {
            key: 0,
            onNotify: t[1] || (t[1] = (a) => e.$emit("resize", a))
          })) : Fe("", !0)
        ], 64)) : Fe("", !0)
      ], 512),
      D("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Pe(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Yo, 4)
    ], 4)
  ], 46, qo);
}
const jt = /* @__PURE__ */ tt(jo, [["render", Xo]]), qt = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
};
let Ue = function() {
};
typeof window < "u" && (Ue = window.Element);
const Zo = de({
  name: "VPopperWrapper",
  components: {
    Popper: Mo,
    PopperContent: jt
  },
  mixins: [
    qt,
    Wt("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    },
    referenceNode: {
      type: Function,
      default: null
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    positioningDisabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: void 0
    },
    delay: {
      type: [String, Number, Object],
      default: void 0
    },
    distance: {
      type: [Number, String],
      default: void 0
    },
    skidding: {
      type: [Number, String],
      default: void 0
    },
    triggers: {
      type: Array,
      default: void 0
    },
    showTriggers: {
      type: [Array, Function],
      default: void 0
    },
    hideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperTriggers: {
      type: Array,
      default: void 0
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    container: {
      type: [String, Object, Ue, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Ue],
      default: void 0
    },
    strategy: {
      type: String,
      default: void 0
    },
    autoHide: {
      type: [Boolean, Function],
      default: void 0
    },
    handleResize: {
      type: Boolean,
      default: void 0
    },
    instantMove: {
      type: Boolean,
      default: void 0
    },
    eagerMount: {
      type: Boolean,
      default: void 0
    },
    popperClass: {
      type: [String, Array, Object],
      default: void 0
    },
    computeTransformOrigin: {
      type: Boolean,
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: void 0
    },
    autoSize: {
      type: [Boolean, String],
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: void 0
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: void 0
    },
    preventOverflow: {
      type: Boolean,
      default: void 0
    },
    overflowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowOverflow: {
      type: Boolean,
      default: void 0
    },
    flip: {
      type: Boolean,
      default: void 0
    },
    shift: {
      type: Boolean,
      default: void 0
    },
    shiftCrossAxis: {
      type: Boolean,
      default: void 0
    },
    noAutoFocus: {
      type: Boolean,
      default: void 0
    },
    disposeTimeout: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function Qo(e, t, o, n, i, s) {
  const r = he("PopperContent"), a = he("Popper");
  return B(), Ze(a, Ot({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (d) => e.$emit("update:shown", d)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: ie(({
      popperId: d,
      isShown: l,
      shouldMountContent: u,
      skipTransition: c,
      autoHide: h,
      show: p,
      hide: f,
      handleResize: g,
      onResize: w,
      classes: v,
      result: y
    }) => [
      U(e.$slots, "default", {
        shown: l,
        show: p,
        hide: f
      }),
      ce(r, {
        ref: "popperContent",
        "popper-id": d,
        theme: e.finalTheme,
        shown: l,
        mounted: u,
        "skip-transition": c,
        "auto-hide": h,
        "handle-resize": g,
        classes: v,
        result: y,
        onHide: f,
        onResize: w
      }, {
        default: ie(() => [
          U(e.$slots, "popper", {
            shown: l,
            hide: f
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const ot = /* @__PURE__ */ tt(Zo, [["render", Qo]]), Jo = {
  ...ot,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...ot
});
({
  ...ot
});
de({
  name: "VTooltipDirective",
  components: {
    Popper: Ft(),
    PopperContent: jt
  },
  mixins: [
    qt
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => qe(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => qe(e.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const t = ++this.$_fetchId, o = this.content(this);
        o.then ? o.then((n) => this.onResult(t, n)) : this.onResult(t, o);
      }
    },
    onResult(e, t) {
      e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
});
const en = ne, tn = Jo;
var on = Object.defineProperty, nn = Object.defineProperties, sn = Object.getOwnPropertyDescriptors, $t = Object.getOwnPropertySymbols, rn = Object.prototype.hasOwnProperty, an = Object.prototype.propertyIsEnumerable, St = (e, t, o) => t in e ? on(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, ln = (e, t) => {
  for (var o in t || (t = {}))
    rn.call(t, o) && St(e, o, t[o]);
  if ($t)
    for (var o of $t(t))
      an.call(t, o) && St(e, o, t[o]);
  return e;
}, dn = (e, t) => nn(e, sn(t)), Kt = { exports: {} };
(function(e) {
  (function() {
    var t = [
      "direction",
      "boxSizing",
      "width",
      "height",
      "overflowX",
      "overflowY",
      "borderTopWidth",
      "borderRightWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "borderStyle",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "fontStyle",
      "fontVariant",
      "fontWeight",
      "fontStretch",
      "fontSize",
      "fontSizeAdjust",
      "lineHeight",
      "fontFamily",
      "textAlign",
      "textTransform",
      "textIndent",
      "textDecoration",
      "letterSpacing",
      "wordSpacing",
      "tabSize",
      "MozTabSize"
    ], o = typeof window < "u", n = o && window.mozInnerScreenX != null;
    function i(s, r, a) {
      if (!o)
        throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");
      var d = a && a.debug || !1;
      if (d) {
        var l = document.querySelector("#input-textarea-caret-position-mirror-div");
        l && l.parentNode.removeChild(l);
      }
      var u = document.createElement("div");
      u.id = "input-textarea-caret-position-mirror-div", document.body.appendChild(u);
      var c = u.style, h = window.getComputedStyle ? window.getComputedStyle(s) : s.currentStyle, p = s.nodeName === "INPUT";
      c.whiteSpace = "pre-wrap", p || (c.wordWrap = "break-word"), c.position = "absolute", d || (c.visibility = "hidden"), t.forEach(function(w) {
        p && w === "lineHeight" ? c.lineHeight = h.height : c[w] = h[w];
      }), n ? s.scrollHeight > parseInt(h.height) && (c.overflowY = "scroll") : c.overflow = "hidden", u.textContent = s.value.substring(0, r), p && (u.textContent = u.textContent.replace(/\s/g, " "));
      var f = document.createElement("span");
      f.textContent = s.value.substring(r) || ".", u.appendChild(f);
      var g = {
        top: f.offsetTop + parseInt(h.borderTopWidth),
        left: f.offsetLeft + parseInt(h.borderLeftWidth),
        height: parseInt(h.lineHeight)
      };
      return d ? f.style.backgroundColor = "#aaa" : document.body.removeChild(u), g;
    }
    e.exports = i;
  })();
})(Kt);
var un = Kt.exports, cn = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, i] of t)
    o[n] = i;
  return o;
};
en.themes.mentionable = {
  $extend: "dropdown",
  placement: "top-start",
  arrowPadding: 6,
  arrowOverflow: !1
};
const pn = de({
  components: {
    VDropdown: tn
  },
  inheritAttrs: !1,
  props: {
    keys: {
      type: Array,
      required: !0
    },
    items: {
      type: Array,
      default: () => []
    },
    omitKey: {
      type: Boolean,
      default: !1
    },
    filteringDisabled: {
      type: Boolean,
      default: !1
    },
    insertSpace: {
      type: Boolean,
      default: !1
    },
    mapInsert: {
      type: Function,
      default: null
    },
    limit: {
      type: Number,
      default: 8
    },
    theme: {
      type: String,
      default: "mentionable"
    },
    caretHeight: {
      type: Number,
      default: 0
    }
  },
  emits: ["search", "open", "close", "apply"],
  setup(e, { emit: t }) {
    const o = G(null);
    let n;
    const i = G(null), s = G(null);
    Ie(s, (m, _) => {
      m && t("search", m, _);
    });
    const r = Ve(() => {
      if (!s.value || e.filteringDisabled)
        return e.items;
      const m = s.value.toLowerCase();
      return e.items.filter((_) => {
        let T;
        if (_.searchText)
          T = _.searchText;
        else if (_.label)
          T = _.label;
        else {
          T = "";
          for (const k in _)
            T += _[k];
        }
        return T.toLowerCase().includes(m);
      });
    }), a = Ve(() => r.value.slice(0, e.limit)), d = G(0);
    Ie(a, () => {
      d.value = 0;
    }, {
      deep: !0
    });
    let l;
    const u = G(null);
    function c() {
      var m, _;
      return (_ = (m = u.value.querySelector("input")) != null ? m : u.value.querySelector("textarea")) != null ? _ : u.value.querySelector('[contenteditable="true"]');
    }
    Ye(() => {
      l = c(), h();
    }), Jt(() => {
      const m = c();
      m !== l && (p(), l = m, h());
    }), eo(() => {
      p();
    });
    function h() {
      l && (l.addEventListener("input", f), l.addEventListener("keydown", w), l.addEventListener("keyup", y), l.addEventListener("scroll", S), l.addEventListener("blur", g));
    }
    function p() {
      l && (l.removeEventListener("input", f), l.removeEventListener("keydown", w), l.removeEventListener("keyup", y), l.removeEventListener("scroll", S), l.removeEventListener("blur", g));
    }
    function f() {
      R();
    }
    function g() {
      z();
    }
    function w(m) {
      o.value && (m.key === "ArrowDown" && (d.value++, d.value >= a.value.length && (d.value = 0), b(m)), m.key === "ArrowUp" && (d.value--, d.value < 0 && (d.value = a.value.length - 1), b(m)), (m.key === "Enter" || m.key === "Tab") && a.value.length > 0 && (L(d.value), b(m)), m.key === "Escape" && (z(), b(m)));
    }
    let v = null;
    function y(m) {
      v && m.key === v && b(m), v = null;
    }
    function b(m) {
      m.preventDefault(), m.stopPropagation(), v = m.key;
    }
    function S() {
      q();
    }
    function A() {
      return l.isContentEditable ? window.getSelection().anchorOffset : l.selectionStart;
    }
    function C(m) {
      Oe(() => {
        l.selectionEnd = m;
      });
    }
    function O() {
      return l.isContentEditable ? window.getSelection().anchorNode.textContent : l.value;
    }
    function H(m) {
      l.value = m, N("input");
    }
    function N(m) {
      l.dispatchEvent(new Event(m));
    }
    let $ = null;
    function R() {
      const m = A();
      if (m >= 0) {
        const { key: _, keyIndex: T } = E(m), k = $ = M(m, T);
        if (!(T < 1 || /\s/.test(O()[T - 1])))
          return !1;
        if (k != null)
          return V(_, T), s.value = k, !0;
      }
      return z(), !1;
    }
    function E(m) {
      const [_] = e.keys.map((T) => ({
        key: T,
        keyIndex: O().lastIndexOf(T, m - 1)
      })).sort((T, k) => k.keyIndex - T.keyIndex);
      return _;
    }
    function M(m, _) {
      if (_ !== -1) {
        const T = O().substring(_ + 1, m);
        if (!/\s/.test(T))
          return T;
      }
      return null;
    }
    const P = G(null);
    function q() {
      if (o.value) {
        if (l.isContentEditable) {
          const m = window.getSelection().getRangeAt(0).getBoundingClientRect(), _ = l.getBoundingClientRect();
          P.value = {
            left: m.left - _.left,
            top: m.top - _.top,
            height: m.height
          };
        } else
          P.value = un(l, n);
        P.value.top -= l.scrollTop, e.caretHeight ? P.value.height = e.caretHeight : isNaN(P.value.height) && (P.value.height = 16);
      }
    }
    function V(m, _) {
      o.value !== m && (o.value = m, n = _, q(), d.value = 0, t("open", o.value));
    }
    function z() {
      o.value != null && (i.value = o.value, o.value = null, t("close", i.value));
    }
    function L(m) {
      const _ = a.value[m], T = (e.omitKey ? "" : o.value) + String(e.mapInsert ? e.mapInsert(_, o.value) : _.value) + (e.insertSpace ? " " : "");
      if (l.isContentEditable) {
        const k = window.getSelection().getRangeAt(0);
        k.setStart(k.startContainer, k.startOffset - o.value.length - ($ ? $.length : 0)), k.deleteContents(), k.insertNode(document.createTextNode(T)), k.setStart(k.endContainer, k.endOffset), N("input");
      } else
        H(K(O(), s.value, T, n)), C(n + T.length);
      t("apply", _, o.value, T), z();
    }
    function K(m, _, T, k) {
      return m.slice(0, k) + T + m.slice(k + _.length + 1, m.length);
    }
    return {
      el: u,
      currentKey: o,
      oldKey: i,
      caretPosition: P,
      displayedItems: a,
      selectedIndex: d,
      applyMention: L
    };
  }
}), hn = { key: 0 }, fn = /* @__PURE__ */ Xe(" No result "), mn = ["onMouseover", "onMousedown"];
function gn(e, t, o, n, i, s) {
  const r = he("VDropdown");
  return B(), W("div", {
    ref: "el",
    class: ke(["mentionable", e.$attrs.class]),
    style: { position: "relative" }
  }, [
    U(e.$slots, "default"),
    ce(r, Ot({ ref: "popper" }, dn(ln({}, e.$attrs), { class: void 0 }), {
      shown: !!e.currentKey,
      triggers: [],
      "auto-hide": !1,
      theme: e.theme,
      class: "popper",
      style: [{ position: "absolute" }, e.caretPosition ? {
        top: `${e.caretPosition.top}px`,
        left: `${e.caretPosition.left}px`
      } : {}]
    }), {
      popper: ie(() => [
        e.displayedItems.length ? (B(!0), W(Ae, { key: 1 }, to(e.displayedItems, (a, d) => (B(), W("div", {
          key: d,
          class: ke(["mention-item", {
            "mention-selected": e.selectedIndex === d
          }]),
          onMouseover: (l) => e.selectedIndex = d,
          onMousedown: (l) => e.applyMention(d)
        }, [
          U(e.$slots, `item-${e.currentKey || e.oldKey}`, {
            item: a,
            index: d
          }, () => [
            U(e.$slots, "item", {
              item: a,
              index: d
            }, () => [
              Xe(le(a.label || a.value), 1)
            ])
          ])
        ], 42, mn))), 128)) : (B(), W("div", hn, [
          U(e.$slots, "no-result", {}, () => [
            fn
          ])
        ]))
      ]),
      default: ie(() => [
        D("div", {
          style: Pe(e.caretPosition ? {
            height: `${e.caretPosition.height}px`
          } : {})
        }, null, 4)
      ]),
      _: 3
    }, 16, ["shown", "theme", "style"])
  ], 2);
}
var vn = /* @__PURE__ */ cn(pn, [["render", gn]]);
const wn = { class: "complex-input-wrapper w-full" }, yn = { class: "complex-input w-full" }, bn = { class: "complex-input-item" }, xn = /* @__PURE__ */ de({
  __name: "ComplexTextInput",
  props: /* @__PURE__ */ Pt({
    label: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Ct(e, "modelValue"), o = G([]), n = G();
    Ye(() => {
      const r = fe(me);
      o.value = r.getAllVariables().map(([a]) => {
        const d = r.getVariable(a);
        return {
          value: d.name,
          currentValue: d.value
        };
      });
    });
    const i = () => {
      Oe(() => {
        const r = n.value?.querySelector("input, textarea");
        if (!r) return;
        const a = r.selectionStart, d = r.value;
        d.charAt(a) !== "}" && (t.value.value = d.slice(0, a) + "}" + d.slice(a), Oe(() => {
          r.setSelectionRange(a + 1, a + 1);
        }));
      });
    }, s = (r) => {
      t.value.value = r.target.value;
    };
    return (r, a) => (B(), W("div", wn, [
      D("div", yn, [
        ce(At(vn), {
          keys: ["{"],
          items: o.value,
          offset: "6",
          onApply: i
        }, {
          item: ie(({ item: d }) => [
            D("div", bn, le(d.value) + " (" + le(d.currentValue) + ") ", 1)
          ]),
          default: ie(() => [
            D("div", {
              class: "w-full",
              ref_key: "inputRef",
              ref: n
            }, [
              U(r.$slots, "default", {
                value: t.value.original,
                change: s
              })
            ], 512)
          ]),
          _: 3
        }, 8, ["items"])
      ]),
      a[0] || (a[0] = D("div", { class: "tip" }, " Tip: format for variables is {variableName}. ", -1))
    ]));
  }
}), _n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComplexTextInput: xn,
  VariableInput: so
}, Symbol.toStringTag, { value: "Module" })), Tt = "org.eclipse.daanse.board.app.ui.vue.variable.components", $n = "0.0.1-next.1";
async function Pn(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${Tt}: tsm runtime is not initialized`);
  t.register(Tt, _n, $n, "ui.vue.variable.components"), await void 0;
}
async function Cn(e) {
  await void 0;
}
export {
  xn as ComplexTextInput,
  so as VariableInput,
  Pn as activate,
  Cn as deactivate
};
