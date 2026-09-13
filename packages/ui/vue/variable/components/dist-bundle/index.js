(function(){var i="ui.vue.variable.components",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".variable-input[data-v-fd2bf607]{display:flex;align-items:flex-end;justify-content:space-between;gap:6px;width:100%}.input-block[data-v-fd2bf607]{flex-grow:1;min-width:0}.toggle[data-v-fd2bf607]{display:flex;align-items:center;margin-bottom:6px;padding:3px;border:0;border-radius:var(--radius-xs);background:none;cursor:pointer}.toggle[data-v-fd2bf607]:hover{background-color:color-mix(in srgb,var(--color-pane) 70%,transparent)}.toggle[data-v-fd2bf607]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.v-popper__popper{z-index:10000000000!important}.complex-input-item{padding:5px 10px;cursor:pointer}.complex-input-item:hover{background-color:#efefef}.mention-selected{background-color:#f0f0f0}.complex-input-wrapper{display:flex;flex-direction:column;gap:4px}.complex-input-wrapper .tip{font-size:12px;color:#666}\n";})();
import { defineComponent as ae, mergeModels as _t, inject as $t, useModel as St, ref as K, watch as Be, onMounted as Ue, computed as He, createElementBlock as Z, createCommentVNode as Me, openBlock as B, createElementVNode as D, renderSlot as G, createBlock as ke, unref as Ie, createVNode as Ne, pushScopeId as Kt, popScopeId as Gt, nextTick as $e, normalizeClass as Se, normalizeProps as Ut, guardReactiveProps as Yt, resolveComponent as Te, mergeProps as Tt, withCtx as ue, withScopeId as Xt, withKeys as Zt, normalizeStyle as xe, Fragment as Pt, onUpdated as Qt, onUnmounted as Jt, createTextVNode as Ct, renderList as eo, toDisplayString as Fe } from "vue";
import { identifier as At } from "org.eclipse.daanse.board.app.lib.api.variable";
import { DSelect as to, DIcon as oo } from "org.eclipse.daanse.board.app.ui.vue.controls";
const no = {
  key: 0,
  class: "variable-input"
}, io = { class: "input-block" }, so = ["aria-pressed", "title"], ro = /* @__PURE__ */ ae({
  __name: "VariableInput",
  props: /* @__PURE__ */ _t({
    label: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = $t(At), o = St(e, "modelValue"), n = e, i = K([]), s = K(!1);
    Be(
      () => o.value?.isSet,
      (u) => {
        u && (s.value = !0);
      },
      { immediate: !0 }
    );
    function a(u) {
      const p = t?.getVariable(u)?.value;
      return { name: u, text: p == null ? u : `${u} (${p})` };
    }
    Ue(() => {
      i.value = (t?.getAllVariables() ?? []).map(([u]) => a(u));
    });
    const r = He({
      get: () => o.value?.variable ?? "",
      set(u) {
        if (!o.value) return;
        const c = t?.getVariable(u);
        c && o.value.setTo(c);
      }
    });
    function l(u) {
      const c = u;
      return c && typeof c == "object" && c.target && "value" in c.target ? String(c.target.value ?? "") : u == null ? "" : String(u);
    }
    const d = (u) => {
      o.value && (o.value.value = l(u));
    };
    return (u, c) => o.value ? (B(), Z("div", no, [
      D("div", io, [
        s.value ? (B(), ke(Ie(to), {
          key: 1,
          modelValue: r.value,
          "onUpdate:modelValue": c[0] || (c[0] = (p) => r.value = p),
          label: n.label,
          options: i.value,
          "label-key": "text",
          "value-key": "name",
          placeholder: "Variable wählen"
        }, null, 8, ["modelValue", "label", "options"])) : G(u.$slots, "default", {
          key: 0,
          value: o.value.value,
          change: d
        }, void 0, !0)
      ]),
      D("button", {
        type: "button",
        class: "toggle",
        "aria-pressed": s.value,
        title: s.value ? "Wert selbst eingeben" : "An eine Variable binden",
        onClick: c[1] || (c[1] = (p) => s.value = !s.value)
      }, [
        Ne(Ie(oo), {
          name: "code",
          size: "sm",
          tone: s.value ? "color-accent" : "color-dim"
        }, null, 8, ["tone"])
      ], 8, so)
    ])) : Me("", !0);
  }
}), ao = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, i] of t)
    o[n] = i;
  return o;
}, lo = /* @__PURE__ */ ao(ro, [["__scopeId", "data-v-fd2bf607"]]), uo = ["top", "right", "bottom", "left"], et = ["start", "end"], tt = /* @__PURE__ */ uo.reduce((e, t) => e.concat(t, t + "-" + et[0], t + "-" + et[1]), []), me = Math.min, re = Math.max, co = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, po = {
  start: "end",
  end: "start"
};
function Ve(e, t, o) {
  return re(e, me(t, o));
}
function le(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function X(e) {
  return e.split("-")[0];
}
function W(e) {
  return e.split("-")[1];
}
function Ot(e) {
  return e === "x" ? "y" : "x";
}
function Ye(e) {
  return e === "y" ? "height" : "width";
}
const ho = /* @__PURE__ */ new Set(["top", "bottom"]);
function Q(e) {
  return ho.has(X(e)) ? "y" : "x";
}
function Xe(e) {
  return Ot(Q(e));
}
function kt(e, t, o) {
  o === void 0 && (o = !1);
  const n = W(e), i = Xe(e), s = Ye(i);
  let a = i === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = Ce(a)), [a, Ce(a)];
}
function fo(e) {
  const t = Ce(e);
  return [Pe(e), t, Pe(t)];
}
function Pe(e) {
  return e.replace(/start|end/g, (t) => po[t]);
}
const ot = ["left", "right"], nt = ["right", "left"], mo = ["top", "bottom"], go = ["bottom", "top"];
function vo(e, t, o) {
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? nt : ot : t ? ot : nt;
    case "left":
    case "right":
      return t ? mo : go;
    default:
      return [];
  }
}
function wo(e, t, o, n) {
  const i = W(e);
  let s = vo(X(e), o === "start", n);
  return i && (s = s.map((a) => a + "-" + i), t && (s = s.concat(s.map(Pe)))), s;
}
function Ce(e) {
  return e.replace(/left|right|bottom|top/g, (t) => co[t]);
}
function yo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Nt(e) {
  return typeof e != "number" ? yo(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ce(e) {
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
function it(e, t, o) {
  let {
    reference: n,
    floating: i
  } = e;
  const s = Q(t), a = Xe(t), r = Ye(a), l = X(t), d = s === "y", u = n.x + n.width / 2 - i.width / 2, c = n.y + n.height / 2 - i.height / 2, p = n[r] / 2 - i[r] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: u,
        y: n.y - i.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      h = {
        x: n.x + n.width,
        y: c
      };
      break;
    case "left":
      h = {
        x: n.x - i.width,
        y: c
      };
      break;
    default:
      h = {
        x: n.x,
        y: n.y
      };
  }
  switch (W(t)) {
    case "start":
      h[a] -= p * (o && d ? -1 : 1);
      break;
    case "end":
      h[a] += p * (o && d ? -1 : 1);
      break;
  }
  return h;
}
async function bo(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: s,
    rects: a,
    elements: r,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: c = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = le(t, e), f = Nt(h), w = r[p ? c === "floating" ? "reference" : "floating" : c], g = ce(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(w))) == null || o ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(r.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), y = c === "floating" ? {
    x: n,
    y: i,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(r.floating)), S = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = ce(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: r,
    rect: y,
    offsetParent: b,
    strategy: l
  }) : y);
  return {
    top: (g.top - A.top + f.top) / S.y,
    bottom: (A.bottom - g.bottom + f.bottom) / S.y,
    left: (g.left - A.left + f.left) / S.x,
    right: (A.right - g.right + f.right) / S.x
  };
}
const xo = async (e, t, o) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: a
  } = o, r = s.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: u,
    y: c
  } = it(d, n, l), p = n, h = {}, f = 0;
  for (let w = 0; w < r.length; w++) {
    var v;
    const {
      name: g,
      fn: y
    } = r[w], {
      x: b,
      y: S,
      data: A,
      reset: C
    } = await y({
      x: u,
      y: c,
      initialPlacement: n,
      placement: p,
      strategy: i,
      middlewareData: h,
      rects: d,
      platform: {
        ...a,
        detectOverflow: (v = a.detectOverflow) != null ? v : bo
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    u = b ?? u, c = S ?? c, h = {
      ...h,
      [g]: {
        ...h[g],
        ...A
      }
    }, C && f <= 50 && (f++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : C.rects), {
      x: u,
      y: c
    } = it(d, p, l)), w = -1);
  }
  return {
    x: u,
    y: c,
    placement: p,
    strategy: i,
    middlewareData: h
  };
}, _o = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: n,
      placement: i,
      rects: s,
      platform: a,
      elements: r,
      middlewareData: l
    } = t, {
      element: d,
      padding: u = 0
    } = le(e, t) || {};
    if (d == null)
      return {};
    const c = Nt(u), p = {
      x: o,
      y: n
    }, h = Xe(i), f = Ye(h), v = await a.getDimensions(d), w = h === "y", g = w ? "top" : "left", y = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", S = s.reference[f] + s.reference[h] - p[h] - s.floating[f], A = p[h] - s.reference[h], C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let O = C ? C[b] : 0;
    (!O || !await (a.isElement == null ? void 0 : a.isElement(C))) && (O = r.floating[b] || s.floating[f]);
    const H = S / 2 - A / 2, N = O / 2 - v[f] / 2 - 1, $ = me(c[g], N), z = me(c[y], N), R = $, M = O - v[f] - z, P = O / 2 - v[f] / 2 + H, j = Ve(R, P, M), F = !l.arrow && W(i) != null && P !== j && s.reference[f] / 2 - (P < R ? $ : z) - v[f] / 2 < 0, E = F ? P < R ? P - R : P - M : 0;
    return {
      [h]: p[h] + E,
      data: {
        [h]: j,
        centerOffset: P - j - E,
        ...F && {
          alignmentOffset: E
        }
      },
      reset: F
    };
  }
});
function $o(e, t, o) {
  return (e ? [...o.filter((i) => W(i) === e), ...o.filter((i) => W(i) !== e)] : o.filter((i) => X(i) === i)).filter((i) => e ? W(i) === e || (t ? Pe(i) !== i : !1) : !0);
}
const So = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var o, n, i;
      const {
        rects: s,
        middlewareData: a,
        placement: r,
        platform: l,
        elements: d
      } = t, {
        crossAxis: u = !1,
        alignment: c,
        allowedPlacements: p = tt,
        autoAlignment: h = !0,
        ...f
      } = le(e, t), v = c !== void 0 || p === tt ? $o(c || null, h, p) : p, w = await l.detectOverflow(t, f), g = ((o = a.autoPlacement) == null ? void 0 : o.index) || 0, y = v[g];
      if (y == null)
        return {};
      const b = kt(y, s, await (l.isRTL == null ? void 0 : l.isRTL(d.floating)));
      if (r !== y)
        return {
          reset: {
            placement: v[0]
          }
        };
      const S = [w[X(y)], w[b[0]], w[b[1]]], A = [...((n = a.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: y,
        overflows: S
      }], C = v[g + 1];
      if (C)
        return {
          data: {
            index: g + 1,
            overflows: A
          },
          reset: {
            placement: C
          }
        };
      const O = A.map(($) => {
        const z = W($.placement);
        return [$.placement, z && u ? (
          // Check along the mainAxis and main crossAxis side.
          $.overflows.slice(0, 2).reduce((R, M) => R + M, 0)
        ) : (
          // Check only the mainAxis.
          $.overflows[0]
        ), $.overflows];
      }).sort(($, z) => $[1] - z[1]), N = ((i = O.filter(($) => $[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        W($[0]) ? 2 : 3
      ).every((z) => z <= 0))[0]) == null ? void 0 : i[0]) || O[0][0];
      return N !== r ? {
        data: {
          index: g + 1,
          overflows: A
        },
        reset: {
          placement: N
        }
      } : {};
    }
  };
}, To = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: i,
        middlewareData: s,
        rects: a,
        initialPlacement: r,
        platform: l,
        elements: d
      } = t, {
        mainAxis: u = !0,
        crossAxis: c = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: v = !0,
        ...w
      } = le(e, t);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const g = X(i), y = Q(r), b = X(r) === r, S = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), A = p || (b || !v ? [Ce(r)] : fo(r)), C = f !== "none";
      !p && C && A.push(...wo(r, v, f, S));
      const O = [r, ...A], H = await l.detectOverflow(t, w), N = [];
      let $ = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (u && N.push(H[g]), c) {
        const P = kt(i, a, S);
        N.push(H[P[0]], H[P[1]]);
      }
      if ($ = [...$, {
        placement: i,
        overflows: N
      }], !N.every((P) => P <= 0)) {
        var z, R;
        const P = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1, j = O[P];
        if (j && (!(c === "alignment" ? y !== Q(j) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((L) => Q(L.placement) === y ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: $
            },
            reset: {
              placement: j
            }
          };
        let F = (R = $.filter((E) => E.overflows[0] <= 0).sort((E, L) => E.overflows[1] - L.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!F)
          switch (h) {
            case "bestFit": {
              var M;
              const E = (M = $.filter((L) => {
                if (C) {
                  const q = Q(L.placement);
                  return q === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((q) => q > 0).reduce((q, m) => q + m, 0)]).sort((L, q) => L[1] - q[1])[0]) == null ? void 0 : M[0];
              E && (F = E);
              break;
            }
            case "initialPlacement":
              F = r;
              break;
          }
        if (i !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
}, Po = /* @__PURE__ */ new Set(["left", "top"]);
async function Co(e, t) {
  const {
    placement: o,
    platform: n,
    elements: i
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), a = X(o), r = W(o), l = Q(o) === "y", d = Po.has(a) ? -1 : 1, u = s && l ? -1 : 1, c = le(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
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
  return r && typeof f == "number" && (h = r === "end" ? f * -1 : f), l ? {
    x: h * u,
    y: p * d
  } : {
    x: p * d,
    y: h * u
  };
}
const Ao = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, n;
      const {
        x: i,
        y: s,
        placement: a,
        middlewareData: r
      } = t, l = await Co(t, e);
      return a === ((o = r.offset) == null ? void 0 : o.placement) && (n = r.arrow) != null && n.alignmentOffset ? {} : {
        x: i + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, Oo = function(e) {
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
        mainAxis: a = !0,
        crossAxis: r = !1,
        limiter: l = {
          fn: (g) => {
            let {
              x: y,
              y: b
            } = g;
            return {
              x: y,
              y: b
            };
          }
        },
        ...d
      } = le(e, t), u = {
        x: o,
        y: n
      }, c = await s.detectOverflow(t, d), p = Q(X(i)), h = Ot(p);
      let f = u[h], v = u[p];
      if (a) {
        const g = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", b = f + c[g], S = f - c[y];
        f = Ve(b, f, S);
      }
      if (r) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = v + c[g], S = v - c[y];
        v = Ve(b, v, S);
      }
      const w = l.fn({
        ...t,
        [h]: f,
        [p]: v
      });
      return {
        ...w,
        data: {
          x: w.x - o,
          y: w.y - n,
          enabled: {
            [h]: a,
            [p]: r
          }
        }
      };
    }
  };
}, ko = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: i,
        rects: s,
        platform: a,
        elements: r
      } = t, {
        apply: l = () => {
        },
        ...d
      } = le(e, t), u = await a.detectOverflow(t, d), c = X(i), p = W(i), h = Q(i) === "y", {
        width: f,
        height: v
      } = s.floating;
      let w, g;
      c === "top" || c === "bottom" ? (w = c, g = p === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (g = c, w = p === "end" ? "top" : "bottom");
      const y = v - u.top - u.bottom, b = f - u.left - u.right, S = me(v - u[w], y), A = me(f - u[g], b), C = !t.middlewareData.shift;
      let O = S, H = A;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (H = b), (n = t.middlewareData.shift) != null && n.enabled.y && (O = y), C && !p) {
        const $ = re(u.left, 0), z = re(u.right, 0), R = re(u.top, 0), M = re(u.bottom, 0);
        h ? H = f - 2 * ($ !== 0 || z !== 0 ? $ + z : re(u.left, u.right)) : O = v - 2 * (R !== 0 || M !== 0 ? R + M : re(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: H,
        availableHeight: O
      });
      const N = await a.getDimensions(r.floating);
      return f !== N.width || v !== N.height ? {
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
function U(e) {
  return I(e).getComputedStyle(e);
}
const st = Math.min, pe = Math.max, Ae = Math.round;
function zt(e) {
  const t = U(e);
  let o = parseFloat(t.width), n = parseFloat(t.height);
  const i = e.offsetWidth, s = e.offsetHeight, a = Ae(o) !== i || Ae(n) !== s;
  return a && (o = i, n = s), { width: o, height: n, fallback: a };
}
function ie(e) {
  return Rt(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ye;
function Et() {
  if (ye) return ye;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ye = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), ye) : navigator.userAgent;
}
function Y(e) {
  return e instanceof I(e).HTMLElement;
}
function te(e) {
  return e instanceof I(e).Element;
}
function Rt(e) {
  return e instanceof I(e).Node;
}
function rt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof I(e).ShadowRoot || e instanceof ShadowRoot;
}
function ze(e) {
  const { overflow: t, overflowX: o, overflowY: n, display: i } = U(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(i);
}
function No(e) {
  return ["table", "td", "th"].includes(ie(e));
}
function We(e) {
  const t = /firefox/i.test(Et()), o = U(e), n = o.backdropFilter || o.WebkitBackdropFilter;
  return o.transform !== "none" || o.perspective !== "none" || !!n && n !== "none" || t && o.willChange === "filter" || t && !!o.filter && o.filter !== "none" || ["transform", "perspective"].some(((i) => o.willChange.includes(i))) || ["paint", "layout", "strict", "content"].some(((i) => {
    const s = o.contain;
    return s != null && s.includes(i);
  }));
}
function Lt() {
  return !/^((?!chrome|android).)*safari/i.test(Et());
}
function Ze(e) {
  return ["html", "body", "#document"].includes(ie(e));
}
function Dt(e) {
  return te(e) ? e : e.contextElement;
}
const Bt = { x: 1, y: 1 };
function de(e) {
  const t = Dt(e);
  if (!Y(t)) return Bt;
  const o = t.getBoundingClientRect(), { width: n, height: i, fallback: s } = zt(t);
  let a = (s ? Ae(o.width) : o.width) / n, r = (s ? Ae(o.height) : o.height) / i;
  return a && Number.isFinite(a) || (a = 1), r && Number.isFinite(r) || (r = 1), { x: a, y: r };
}
function ge(e, t, o, n) {
  var i, s;
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const a = e.getBoundingClientRect(), r = Dt(e);
  let l = Bt;
  t && (n ? te(n) && (l = de(n)) : l = de(e));
  const d = r ? I(r) : window, u = !Lt() && o;
  let c = (a.left + (u && ((i = d.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, p = (a.top + (u && ((s = d.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / l.y, h = a.width / l.x, f = a.height / l.y;
  if (r) {
    const v = I(r), w = n && te(n) ? I(n) : n;
    let g = v.frameElement;
    for (; g && n && w !== v; ) {
      const y = de(g), b = g.getBoundingClientRect(), S = getComputedStyle(g);
      b.x += (g.clientLeft + parseFloat(S.paddingLeft)) * y.x, b.y += (g.clientTop + parseFloat(S.paddingTop)) * y.y, c *= y.x, p *= y.y, h *= y.x, f *= y.y, c += b.x, p += b.y, g = I(g).frameElement;
    }
  }
  return { width: h, height: f, top: p, right: c + h, bottom: p + f, left: c, x: c, y: p };
}
function oe(e) {
  return ((Rt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ee(e) {
  return te(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ht(e) {
  return ge(oe(e)).left + Ee(e).scrollLeft;
}
function ve(e) {
  if (ie(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || rt(e) && e.host || oe(e);
  return rt(t) ? t.host : t;
}
function Mt(e) {
  const t = ve(e);
  return Ze(t) ? t.ownerDocument.body : Y(t) && ze(t) ? t : Mt(t);
}
function Oe(e, t) {
  var o;
  t === void 0 && (t = []);
  const n = Mt(e), i = n === ((o = e.ownerDocument) == null ? void 0 : o.body), s = I(n);
  return i ? t.concat(s, s.visualViewport || [], ze(n) ? n : []) : t.concat(n, Oe(n));
}
function at(e, t, o) {
  return t === "viewport" ? ce((function(n, i) {
    const s = I(n), a = oe(n), r = s.visualViewport;
    let l = a.clientWidth, d = a.clientHeight, u = 0, c = 0;
    if (r) {
      l = r.width, d = r.height;
      const p = Lt();
      (p || !p && i === "fixed") && (u = r.offsetLeft, c = r.offsetTop);
    }
    return { width: l, height: d, x: u, y: c };
  })(e, o)) : te(t) ? ce((function(n, i) {
    const s = ge(n, !0, i === "fixed"), a = s.top + n.clientTop, r = s.left + n.clientLeft, l = Y(n) ? de(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * l.x, height: n.clientHeight * l.y, x: r * l.x, y: a * l.y };
  })(t, o)) : ce((function(n) {
    const i = oe(n), s = Ee(n), a = n.ownerDocument.body, r = pe(i.scrollWidth, i.clientWidth, a.scrollWidth, a.clientWidth), l = pe(i.scrollHeight, i.clientHeight, a.scrollHeight, a.clientHeight);
    let d = -s.scrollLeft + Ht(n);
    const u = -s.scrollTop;
    return U(a).direction === "rtl" && (d += pe(i.clientWidth, a.clientWidth) - r), { width: r, height: l, x: d, y: u };
  })(oe(e)));
}
function lt(e) {
  return Y(e) && U(e).position !== "fixed" ? e.offsetParent : null;
}
function dt(e) {
  const t = I(e);
  let o = lt(e);
  for (; o && No(o) && U(o).position === "static"; ) o = lt(o);
  return o && (ie(o) === "html" || ie(o) === "body" && U(o).position === "static" && !We(o)) ? t : o || (function(n) {
    let i = ve(n);
    for (; Y(i) && !Ze(i); ) {
      if (We(i)) return i;
      i = ve(i);
    }
    return null;
  })(e) || t;
}
function zo(e, t, o) {
  const n = Y(t), i = oe(t), s = ge(e, !0, o === "fixed", t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const r = { x: 0, y: 0 };
  if (n || !n && o !== "fixed") if ((ie(t) !== "body" || ze(i)) && (a = Ee(t)), Y(t)) {
    const l = ge(t, !0);
    r.x = l.x + t.clientLeft, r.y = l.y + t.clientTop;
  } else i && (r.x = Ht(i));
  return { x: s.left + a.scrollLeft - r.x, y: s.top + a.scrollTop - r.y, width: s.width, height: s.height };
}
const Eo = { getClippingRect: function(e) {
  let { element: t, boundary: o, rootBoundary: n, strategy: i } = e;
  const s = o === "clippingAncestors" ? (function(d, u) {
    const c = u.get(d);
    if (c) return c;
    let p = Oe(d).filter(((w) => te(w) && ie(w) !== "body")), h = null;
    const f = U(d).position === "fixed";
    let v = f ? ve(d) : d;
    for (; te(v) && !Ze(v); ) {
      const w = U(v), g = We(v);
      (f ? g || h : g || w.position !== "static" || !h || !["absolute", "fixed"].includes(h.position)) ? h = w : p = p.filter(((y) => y !== v)), v = ve(v);
    }
    return u.set(d, p), p;
  })(t, this._c) : [].concat(o), a = [...s, n], r = a[0], l = a.reduce(((d, u) => {
    const c = at(t, u, i);
    return d.top = pe(c.top, d.top), d.right = st(c.right, d.right), d.bottom = st(c.bottom, d.bottom), d.left = pe(c.left, d.left), d;
  }), at(t, r, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: o, strategy: n } = e;
  const i = Y(o), s = oe(o);
  if (o === s) return t;
  let a = { scrollLeft: 0, scrollTop: 0 }, r = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && n !== "fixed") && ((ie(o) !== "body" || ze(s)) && (a = Ee(o)), Y(o))) {
    const d = ge(o);
    r = de(o), l.x = d.x + o.clientLeft, l.y = d.y + o.clientTop;
  }
  return { width: t.width * r.x, height: t.height * r.y, x: t.x * r.x - a.scrollLeft * r.x + l.x, y: t.y * r.y - a.scrollTop * r.y + l.y };
}, isElement: te, getDimensions: function(e) {
  return Y(e) ? zt(e) : e.getBoundingClientRect();
}, getOffsetParent: dt, getDocumentElement: oe, getScale: de, async getElementRects(e) {
  let { reference: t, floating: o, strategy: n } = e;
  const i = this.getOffsetParent || dt, s = this.getDimensions;
  return { reference: zo(t, await i(o), n), floating: { x: 0, y: 0, ...await s(o) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => U(e).direction === "rtl" }, Ro = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), i = { platform: Eo, ...o }, s = { ...i.platform, _c: n };
  return xo(e, t, { ...i, platform: s });
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
function je(e, t) {
  let o = ne.themes[e] || {}, n;
  do
    n = o[t], typeof n > "u" ? o.$extend ? o = ne.themes[o.$extend] || {} : (o = null, n = ne[t]) : o = null;
  while (o);
  return n;
}
function Lo(e) {
  const t = [e];
  let o = ne.themes[e] || {};
  do
    o.$extend && !o.$resetCss ? (t.push(o.$extend), o = ne.themes[o.$extend] || {}) : o = null;
  while (o);
  return t.map((n) => `v-popper--theme-${n}`);
}
function ut(e) {
  const t = [e];
  let o = ne.themes[e] || {};
  do
    o.$extend ? (t.push(o.$extend), o = ne.themes[o.$extend] || {}) : o = null;
  while (o);
  return t;
}
let we = !1;
if (typeof window < "u") {
  we = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        we = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let It = !1;
typeof window < "u" && typeof navigator < "u" && (It = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Do = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), ct = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, pt = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function ht(e, t) {
  const o = e.indexOf(t);
  o !== -1 && e.splice(o, 1);
}
function Le() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const V = [];
let se = null;
const ft = {};
function mt(e) {
  let t = ft[e];
  return t || (t = ft[e] = []), t;
}
let qe = function() {
};
typeof window < "u" && (qe = window.Element);
function x(e) {
  return function(t) {
    return je(t.theme, e);
  };
}
const De = "__floating-vue__popper", Ft = () => ae({
  name: "VPopper",
  provide() {
    return {
      [De]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [De]: { default: null }
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
      validator: (e) => Do.includes(e)
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
      type: [String, Object, qe, Boolean],
      default: x("container")
    },
    boundary: {
      type: [String, qe],
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
      return (e = this[De]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(Ao({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(So({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Oo({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(To({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(_o({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: n, rects: i, middlewareData: s }) => {
          let a;
          const { centerOffset: r } = s.arrow;
          return n.startsWith("top") || n.startsWith("bottom") ? a = Math.abs(r) > i.reference.width / 2 : a = Math.abs(r) > i.reference.height / 2, {
            data: {
              overflow: a
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const n = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: i, placement: s, middlewareData: a }) => {
            var r;
            if ((r = a.autoSize) != null && r.skip)
              return {};
            let l, d;
            return s.startsWith("top") || s.startsWith("bottom") ? l = i.reference.width : d = i.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = d != null ? `${d}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(ko({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: i }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null;
        }
      })));
      const o = await Ro(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), se && this.instantMove && se.instantMove && se !== this.parentPopper) {
        se.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (se = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Le(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Oe(this.$_referenceNode),
        ...Oe(this.$_popperNode)
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
        for (let o = 0; o < V.length; o++)
          t = V[o], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      V.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of ut(this.theme))
        mt(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Le(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, ht(V, this), V.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const o of ut(this.theme)) {
        const n = mt(o);
        ht(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${o}`);
      }
      se === this && (se = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Le(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, ct, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], ct, this.popperTriggers, this.popperShowTriggers, e);
      const t = (o) => {
        o.usedByTooltip || this.hide({ event: o });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, pt, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], pt, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, o) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: o }), e.forEach((n) => n.addEventListener(t, o, we ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, o, n, i) {
      let s = o;
      n != null && (s = typeof n == "function" ? n(s) : n), s.forEach((a) => {
        const r = t[a];
        r && this.$_registerEventListeners(e, r, i);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((o) => {
        const { targetNodes: n, eventType: i, handler: s } = o;
        !e || e === i ? n.forEach((a) => a.removeEventListener(i, s)) : t.push(o);
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
      if (he >= e.left && he <= e.right && fe >= e.top && fe <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), o = he - J, n = fe - ee, i = t.left + t.width / 2 - J + (t.top + t.height / 2) - ee + t.width + t.height, s = J + o * i, a = ee + n * i;
        return be(J, ee, s, a, t.left, t.top, t.left, t.bottom) || // Left edge
        be(J, ee, s, a, t.left, t.top, t.right, t.top) || // Top edge
        be(J, ee, s, a, t.right, t.top, t.right, t.bottom) || // Right edge
        be(J, ee, s, a, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (It) {
    const e = we ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => gt(t), e), document.addEventListener("touchend", (t) => vt(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => gt(e), !0), window.addEventListener("click", (e) => vt(e, !1), !0);
  window.addEventListener("resize", Mo);
}
function gt(e, t) {
  for (let o = 0; o < V.length; o++) {
    const n = V[o];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function vt(e, t) {
  Bo(e, t);
}
function Bo(e, t) {
  const o = {};
  for (let n = V.length - 1; n >= 0; n--) {
    const i = V[n];
    try {
      const s = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
      i.pendingHide = !1, requestAnimationFrame(() => {
        if (i.pendingHide = !1, !o[i.randomId] && wt(i, s, e)) {
          if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
            let r = i.parentPopper;
            for (; r; )
              o[r.randomId] = !0, r = r.parentPopper;
            return;
          }
          let a = i.parentPopper;
          for (; a && wt(a, a.containsGlobalTarget, e); )
            a.$_handleGlobalClose(e, t), a = a.parentPopper;
        }
      });
    } catch {
    }
  }
}
function wt(e, t, o) {
  return o.closeAllPopover || o.closePopover && t || Ho(e, o) && !t;
}
function Ho(e, t) {
  if (typeof e.autoHide == "function") {
    const o = e.autoHide(t);
    return e.lastAutoHide = o, o;
  }
  return e.autoHide;
}
function Mo() {
  for (let e = 0; e < V.length; e++)
    V[e].$_computePosition();
}
let J = 0, ee = 0, he = 0, fe = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  J = he, ee = fe, he = e.clientX, fe = e.clientY;
}, we ? {
  passive: !0
} : void 0);
function be(e, t, o, n, i, s, a, r) {
  const l = ((a - i) * (t - s) - (r - s) * (e - i)) / ((r - s) * (o - e) - (a - i) * (n - t)), d = ((o - e) * (t - s) - (n - t) * (e - i)) / ((r - s) * (o - e) - (a - i) * (n - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const Io = {
  extends: Ft()
}, Qe = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, i] of t)
    o[n] = i;
  return o;
};
function Fo(e, t, o, n, i, s) {
  return B(), Z("div", {
    ref: "reference",
    class: Se(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    G(e.$slots, "default", Ut(Yt(e.slotData)))
  ], 2);
}
const Vo = /* @__PURE__ */ Qe(Io, [["render", Fo]]);
function Wo() {
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
let _e;
function Ke() {
  Ke.init || (Ke.init = !0, _e = Wo() !== -1);
}
var Re = {
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
    Ke(), $e(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", _e && this.$el.appendChild(e), e.data = "about:blank", _e || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!_e && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const jo = /* @__PURE__ */ Xt("data-v-b329ee4c");
Kt("data-v-b329ee4c");
const qo = {
  class: "resize-observer",
  tabindex: "-1"
};
Gt();
const Ko = /* @__PURE__ */ jo((e, t, o, n, i, s) => (B(), ke("div", qo)));
Re.render = Ko;
Re.__scopeId = "data-v-b329ee4c";
Re.__file = "src/components/ResizeObserver.vue";
const Vt = (e = "theme") => ({
  computed: {
    themeClass() {
      return Lo(this[e]);
    }
  }
}), Go = ae({
  name: "VPopperContent",
  components: {
    ResizeObserver: Re
  },
  mixins: [
    Vt()
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
}), Uo = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Yo = {
  ref: "inner",
  class: "v-popper__inner"
}, Xo = /* @__PURE__ */ D("div", { class: "v-popper__arrow-outer" }, null, -1), Zo = /* @__PURE__ */ D("div", { class: "v-popper__arrow-inner" }, null, -1), Qo = [
  Xo,
  Zo
];
function Jo(e, t, o, n, i, s) {
  const a = Te("ResizeObserver");
  return B(), Z("div", {
    id: e.popperId,
    ref: "popover",
    class: Se(["v-popper__popper", [
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
    style: xe(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Zt((r) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    D("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (r) => e.autoHide && e.$emit("hide"))
    }),
    D("div", {
      class: "v-popper__wrapper",
      style: xe(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      D("div", Yo, [
        e.mounted ? (B(), Z(Pt, { key: 0 }, [
          D("div", null, [
            G(e.$slots, "default")
          ]),
          e.handleResize ? (B(), ke(a, {
            key: 0,
            onNotify: t[1] || (t[1] = (r) => e.$emit("resize", r))
          })) : Me("", !0)
        ], 64)) : Me("", !0)
      ], 512),
      D("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: xe(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Qo, 4)
    ], 4)
  ], 46, Uo);
}
const Wt = /* @__PURE__ */ Qe(Go, [["render", Jo]]), jt = {
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
let Ge = function() {
};
typeof window < "u" && (Ge = window.Element);
const en = ae({
  name: "VPopperWrapper",
  components: {
    Popper: Vo,
    PopperContent: Wt
  },
  mixins: [
    jt,
    Vt("finalTheme")
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
      type: [String, Object, Ge, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Ge],
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
function tn(e, t, o, n, i, s) {
  const a = Te("PopperContent"), r = Te("Popper");
  return B(), ke(r, Tt({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (l) => e.$emit("update:shown", l)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: ue(({
      popperId: l,
      isShown: d,
      shouldMountContent: u,
      skipTransition: c,
      autoHide: p,
      show: h,
      hide: f,
      handleResize: v,
      onResize: w,
      classes: g,
      result: y
    }) => [
      G(e.$slots, "default", {
        shown: d,
        show: h,
        hide: f
      }),
      Ne(a, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: d,
        mounted: u,
        "skip-transition": c,
        "auto-hide": p,
        "handle-resize": v,
        classes: g,
        result: y,
        onHide: f,
        onResize: w
      }, {
        default: ue(() => [
          G(e.$slots, "popper", {
            shown: d,
            hide: f
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Je = /* @__PURE__ */ Qe(en, [["render", tn]]), on = {
  ...Je,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Je
});
({
  ...Je
});
ae({
  name: "VTooltipDirective",
  components: {
    Popper: Ft(),
    PopperContent: Wt
  },
  mixins: [
    jt
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => je(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => je(e.theme, "loadingContent")
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
const nn = ne, sn = on;
var rn = Object.defineProperty, an = Object.defineProperties, ln = Object.getOwnPropertyDescriptors, yt = Object.getOwnPropertySymbols, dn = Object.prototype.hasOwnProperty, un = Object.prototype.propertyIsEnumerable, bt = (e, t, o) => t in e ? rn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, cn = (e, t) => {
  for (var o in t || (t = {}))
    dn.call(t, o) && bt(e, o, t[o]);
  if (yt)
    for (var o of yt(t))
      un.call(t, o) && bt(e, o, t[o]);
  return e;
}, pn = (e, t) => an(e, ln(t)), qt = { exports: {} };
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
    function i(s, a, r) {
      if (!o)
        throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");
      var l = r && r.debug || !1;
      if (l) {
        var d = document.querySelector("#input-textarea-caret-position-mirror-div");
        d && d.parentNode.removeChild(d);
      }
      var u = document.createElement("div");
      u.id = "input-textarea-caret-position-mirror-div", document.body.appendChild(u);
      var c = u.style, p = window.getComputedStyle ? window.getComputedStyle(s) : s.currentStyle, h = s.nodeName === "INPUT";
      c.whiteSpace = "pre-wrap", h || (c.wordWrap = "break-word"), c.position = "absolute", l || (c.visibility = "hidden"), t.forEach(function(w) {
        h && w === "lineHeight" ? c.lineHeight = p.height : c[w] = p[w];
      }), n ? s.scrollHeight > parseInt(p.height) && (c.overflowY = "scroll") : c.overflow = "hidden", u.textContent = s.value.substring(0, a), h && (u.textContent = u.textContent.replace(/\s/g, " "));
      var f = document.createElement("span");
      f.textContent = s.value.substring(a) || ".", u.appendChild(f);
      var v = {
        top: f.offsetTop + parseInt(p.borderTopWidth),
        left: f.offsetLeft + parseInt(p.borderLeftWidth),
        height: parseInt(p.lineHeight)
      };
      return l ? f.style.backgroundColor = "#aaa" : document.body.removeChild(u), v;
    }
    e.exports = i;
  })();
})(qt);
var hn = qt.exports, fn = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, i] of t)
    o[n] = i;
  return o;
};
nn.themes.mentionable = {
  $extend: "dropdown",
  placement: "top-start",
  arrowPadding: 6,
  arrowOverflow: !1
};
const mn = ae({
  components: {
    VDropdown: sn
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
    const o = K(null);
    let n;
    const i = K(null), s = K(null);
    Be(s, (m, _) => {
      m && t("search", m, _);
    });
    const a = He(() => {
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
    }), r = He(() => a.value.slice(0, e.limit)), l = K(0);
    Be(r, () => {
      l.value = 0;
    }, {
      deep: !0
    });
    let d;
    const u = K(null);
    function c() {
      var m, _;
      return (_ = (m = u.value.querySelector("input")) != null ? m : u.value.querySelector("textarea")) != null ? _ : u.value.querySelector('[contenteditable="true"]');
    }
    Ue(() => {
      d = c(), p();
    }), Qt(() => {
      const m = c();
      m !== d && (h(), d = m, p());
    }), Jt(() => {
      h();
    });
    function p() {
      d && (d.addEventListener("input", f), d.addEventListener("keydown", w), d.addEventListener("keyup", y), d.addEventListener("scroll", S), d.addEventListener("blur", v));
    }
    function h() {
      d && (d.removeEventListener("input", f), d.removeEventListener("keydown", w), d.removeEventListener("keyup", y), d.removeEventListener("scroll", S), d.removeEventListener("blur", v));
    }
    function f() {
      z();
    }
    function v() {
      E();
    }
    function w(m) {
      o.value && (m.key === "ArrowDown" && (l.value++, l.value >= r.value.length && (l.value = 0), b(m)), m.key === "ArrowUp" && (l.value--, l.value < 0 && (l.value = r.value.length - 1), b(m)), (m.key === "Enter" || m.key === "Tab") && r.value.length > 0 && (L(l.value), b(m)), m.key === "Escape" && (E(), b(m)));
    }
    let g = null;
    function y(m) {
      g && m.key === g && b(m), g = null;
    }
    function b(m) {
      m.preventDefault(), m.stopPropagation(), g = m.key;
    }
    function S() {
      j();
    }
    function A() {
      return d.isContentEditable ? window.getSelection().anchorOffset : d.selectionStart;
    }
    function C(m) {
      $e(() => {
        d.selectionEnd = m;
      });
    }
    function O() {
      return d.isContentEditable ? window.getSelection().anchorNode.textContent : d.value;
    }
    function H(m) {
      d.value = m, N("input");
    }
    function N(m) {
      d.dispatchEvent(new Event(m));
    }
    let $ = null;
    function z() {
      const m = A();
      if (m >= 0) {
        const { key: _, keyIndex: T } = R(m), k = $ = M(m, T);
        if (!(T < 1 || /\s/.test(O()[T - 1])))
          return !1;
        if (k != null)
          return F(_, T), s.value = k, !0;
      }
      return E(), !1;
    }
    function R(m) {
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
    const P = K(null);
    function j() {
      if (o.value) {
        if (d.isContentEditable) {
          const m = window.getSelection().getRangeAt(0).getBoundingClientRect(), _ = d.getBoundingClientRect();
          P.value = {
            left: m.left - _.left,
            top: m.top - _.top,
            height: m.height
          };
        } else
          P.value = hn(d, n);
        P.value.top -= d.scrollTop, e.caretHeight ? P.value.height = e.caretHeight : isNaN(P.value.height) && (P.value.height = 16);
      }
    }
    function F(m, _) {
      o.value !== m && (o.value = m, n = _, j(), l.value = 0, t("open", o.value));
    }
    function E() {
      o.value != null && (i.value = o.value, o.value = null, t("close", i.value));
    }
    function L(m) {
      const _ = r.value[m], T = (e.omitKey ? "" : o.value) + String(e.mapInsert ? e.mapInsert(_, o.value) : _.value) + (e.insertSpace ? " " : "");
      if (d.isContentEditable) {
        const k = window.getSelection().getRangeAt(0);
        k.setStart(k.startContainer, k.startOffset - o.value.length - ($ ? $.length : 0)), k.deleteContents(), k.insertNode(document.createTextNode(T)), k.setStart(k.endContainer, k.endOffset), N("input");
      } else
        H(q(O(), s.value, T, n)), C(n + T.length);
      t("apply", _, o.value, T), E();
    }
    function q(m, _, T, k) {
      return m.slice(0, k) + T + m.slice(k + _.length + 1, m.length);
    }
    return {
      el: u,
      currentKey: o,
      oldKey: i,
      caretPosition: P,
      displayedItems: r,
      selectedIndex: l,
      applyMention: L
    };
  }
}), gn = { key: 0 }, vn = /* @__PURE__ */ Ct(" No result "), wn = ["onMouseover", "onMousedown"];
function yn(e, t, o, n, i, s) {
  const a = Te("VDropdown");
  return B(), Z("div", {
    ref: "el",
    class: Se(["mentionable", e.$attrs.class]),
    style: { position: "relative" }
  }, [
    G(e.$slots, "default"),
    Ne(a, Tt({ ref: "popper" }, pn(cn({}, e.$attrs), { class: void 0 }), {
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
      popper: ue(() => [
        e.displayedItems.length ? (B(!0), Z(Pt, { key: 1 }, eo(e.displayedItems, (r, l) => (B(), Z("div", {
          key: l,
          class: Se(["mention-item", {
            "mention-selected": e.selectedIndex === l
          }]),
          onMouseover: (d) => e.selectedIndex = l,
          onMousedown: (d) => e.applyMention(l)
        }, [
          G(e.$slots, `item-${e.currentKey || e.oldKey}`, {
            item: r,
            index: l
          }, () => [
            G(e.$slots, "item", {
              item: r,
              index: l
            }, () => [
              Ct(Fe(r.label || r.value), 1)
            ])
          ])
        ], 42, wn))), 128)) : (B(), Z("div", gn, [
          G(e.$slots, "no-result", {}, () => [
            vn
          ])
        ]))
      ]),
      default: ue(() => [
        D("div", {
          style: xe(e.caretPosition ? {
            height: `${e.caretPosition.height}px`
          } : {})
        }, null, 4)
      ]),
      _: 3
    }, 16, ["shown", "theme", "style"])
  ], 2);
}
var bn = /* @__PURE__ */ fn(mn, [["render", yn]]);
const xn = { class: "complex-input-wrapper w-full" }, _n = { class: "complex-input w-full" }, $n = { class: "complex-input-item" }, Sn = /* @__PURE__ */ ae({
  __name: "ComplexTextInput",
  props: /* @__PURE__ */ _t({
    label: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = St(e, "modelValue"), o = K([]), n = K();
    Ue(() => {
      const r = $t(At);
      o.value = r.getAllVariables().map(([l]) => {
        const d = r.getVariable(l);
        return {
          value: d.name,
          currentValue: d.value
        };
      });
    });
    const i = () => {
      $e(() => {
        const r = n.value?.querySelector("input, textarea");
        if (!r) return;
        const l = r.selectionStart, d = r.value;
        d.charAt(l) !== "}" && (t.value.value = d.slice(0, l) + "}" + d.slice(l), $e(() => {
          r.setSelectionRange(l + 1, l + 1);
        }));
      });
    };
    function s(r) {
      const l = r;
      return l && typeof l == "object" && l.target && "value" in l.target ? String(l.target.value ?? "") : r == null ? "" : String(r);
    }
    const a = (r) => {
      t.value.value = s(r);
    };
    return (r, l) => (B(), Z("div", xn, [
      D("div", _n, [
        Ne(Ie(bn), {
          keys: ["{"],
          items: o.value,
          offset: "6",
          onApply: i
        }, {
          item: ue(({ item: d }) => [
            D("div", $n, Fe(d.value) + " (" + Fe(d.currentValue) + ") ", 1)
          ]),
          default: ue(() => [
            D("div", {
              class: "w-full",
              ref_key: "inputRef",
              ref: n
            }, [
              G(r.$slots, "default", {
                value: t.value.original,
                change: a
              })
            ], 512)
          ]),
          _: 3
        }, 8, ["items"])
      ]),
      l[0] || (l[0] = D("div", { class: "tip" }, " Tip: format for variables is {variableName}. ", -1))
    ]));
  }
}), Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComplexTextInput: Sn,
  VariableInput: lo
}, Symbol.toStringTag, { value: "Module" })), xt = "org.eclipse.daanse.board.app.ui.vue.variable.components", Pn = "0.0.1-next.1";
async function kn(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${xt}: tsm runtime is not initialized`);
  t.register(xt, Tn, Pn, "ui.vue.variable.components"), await void 0;
}
async function Nn(e) {
  await void 0;
}
export {
  Sn as ComplexTextInput,
  lo as VariableInput,
  kn as activate,
  Nn as deactivate
};
