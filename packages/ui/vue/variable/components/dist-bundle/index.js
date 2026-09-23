(function(){var i="ui.vue.variable.components",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".variable-input[data-v-d336fd14]{display:flex;align-items:flex-end;justify-content:space-between;gap:6px;width:100%}.input-block[data-v-d336fd14]{flex-grow:1;min-width:0}.toggle[data-v-d336fd14]{display:flex;align-items:center;margin-bottom:6px;padding:3px;border:0;border-radius:var(--radius-xs);background:none;cursor:pointer}.toggle[data-v-d336fd14]:hover{background-color:color-mix(in srgb,var(--color-pane) 70%,transparent)}.toggle[data-v-d336fd14]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.v-popper__popper{z-index:10000000000!important}.complex-input-item{padding:5px 10px;cursor:pointer}.complex-input-item:hover{background-color:#efefef}.mention-selected{background-color:#f0f0f0}.complex-input-wrapper{display:flex;flex-direction:column;gap:4px}.complex-input-wrapper .tip{font-size:12px;color:#666}\n";})();
import { defineComponent as le, mergeModels as $t, inject as St, useModel as Tt, ref as K, watch as Me, onMounted as Ye, computed as Ie, createElementBlock as Z, createCommentVNode as Ve, openBlock as B, createElementVNode as L, renderSlot as G, createBlock as ze, unref as ae, createVNode as Ee, pushScopeId as Yt, popScopeId as Xt, nextTick as Te, normalizeClass as Pe, normalizeProps as Zt, guardReactiveProps as Qt, resolveComponent as Ce, mergeProps as Pt, withCtx as ce, withScopeId as Jt, withKeys as eo, normalizeStyle as xe, Fragment as Ct, onUpdated as to, onUnmounted as oo, createTextVNode as At, renderList as no, toDisplayString as $e } from "vue";
import { identifier as Ot } from "org.eclipse.daanse.board.app.lib.api.variable";
import { useTranslation as kt } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect as io, DIcon as so } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { component as ro } from "@eclipse-daanse/tsm";
const ao = {
  key: 0,
  class: "variable-input"
}, lo = { class: "input-block" }, uo = ["aria-pressed", "title"], co = /* @__PURE__ */ le({
  __name: "VariableInput",
  props: /* @__PURE__ */ $t({
    label: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = St(Ot), o = Tt(e, "modelValue"), n = e, { t: i } = kt("variableComponents"), s = K([]), r = K(!1);
    Me(
      () => o.value?.isSet,
      (u) => {
        u && (r.value = !0);
      },
      { immediate: !0 }
    );
    function a(u) {
      const h = t?.getVariable(u)?.value;
      return { name: u, text: h == null ? u : `${u} (${h})` };
    }
    Ye(() => {
      s.value = (t?.getAllVariables() ?? []).map(([u]) => a(u));
    });
    const d = Ie({
      get: () => o.value?.variable ?? "",
      set(u) {
        if (!o.value) return;
        const p = t?.getVariable(u);
        p && o.value.setTo(p);
      }
    });
    function l(u) {
      const p = u;
      return p && typeof p == "object" && p.target && "value" in p.target ? String(p.target.value ?? "") : u == null ? "" : String(u);
    }
    const c = (u) => {
      o.value && (o.value.value = l(u));
    };
    return (u, p) => o.value ? (B(), Z("div", ao, [
      L("div", lo, [
        r.value ? (B(), ze(ae(io), {
          key: 1,
          modelValue: d.value,
          "onUpdate:modelValue": p[0] || (p[0] = (h) => d.value = h),
          label: n.label,
          options: s.value,
          "label-key": "text",
          "value-key": "name",
          placeholder: ae(i)("Input.choose")
        }, null, 8, ["modelValue", "label", "options", "placeholder"])) : G(u.$slots, "default", {
          key: 0,
          value: o.value.value,
          change: c
        }, void 0, !0)
      ]),
      L("button", {
        type: "button",
        class: "toggle",
        "aria-pressed": r.value,
        title: r.value ? ae(i)("Input.ownValue") : ae(i)("Input.bind"),
        onClick: p[1] || (p[1] = (h) => r.value = !r.value)
      }, [
        Ee(ae(so), {
          name: "code",
          size: "sm",
          tone: r.value ? "color-accent" : "color-dim"
        }, null, 8, ["tone"])
      ], 8, uo)
    ])) : Ve("", !0);
  }
}), po = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, i] of t)
    o[n] = i;
  return o;
}, ho = /* @__PURE__ */ po(co, [["__scopeId", "data-v-d336fd14"]]), fo = ["top", "right", "bottom", "left"], tt = ["start", "end"], ot = /* @__PURE__ */ fo.reduce((e, t) => e.concat(t, t + "-" + tt[0], t + "-" + tt[1]), []), ge = Math.min, re = Math.max, mo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, go = {
  start: "end",
  end: "start"
};
function Fe(e, t, o) {
  return re(e, ge(t, o));
}
function de(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function X(e) {
  return e.split("-")[0];
}
function W(e) {
  return e.split("-")[1];
}
function Nt(e) {
  return e === "x" ? "y" : "x";
}
function Xe(e) {
  return e === "y" ? "height" : "width";
}
const vo = /* @__PURE__ */ new Set(["top", "bottom"]);
function Q(e) {
  return vo.has(X(e)) ? "y" : "x";
}
function Ze(e) {
  return Nt(Q(e));
}
function zt(e, t, o) {
  o === void 0 && (o = !1);
  const n = W(e), i = Ze(e), s = Xe(i);
  let r = i === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (r = Oe(r)), [r, Oe(r)];
}
function wo(e) {
  const t = Oe(e);
  return [Ae(e), t, Ae(t)];
}
function Ae(e) {
  return e.replace(/start|end/g, (t) => go[t]);
}
const nt = ["left", "right"], it = ["right", "left"], yo = ["top", "bottom"], bo = ["bottom", "top"];
function _o(e, t, o) {
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? it : nt : t ? nt : it;
    case "left":
    case "right":
      return t ? yo : bo;
    default:
      return [];
  }
}
function xo(e, t, o, n) {
  const i = W(e);
  let s = _o(X(e), o === "start", n);
  return i && (s = s.map((r) => r + "-" + i), t && (s = s.concat(s.map(Ae)))), s;
}
function Oe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => mo[t]);
}
function $o(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Et(e) {
  return typeof e != "number" ? $o(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function pe(e) {
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
function st(e, t, o) {
  let {
    reference: n,
    floating: i
  } = e;
  const s = Q(t), r = Ze(t), a = Xe(r), d = X(t), l = s === "y", c = n.x + n.width / 2 - i.width / 2, u = n.y + n.height / 2 - i.height / 2, p = n[a] / 2 - i[a] / 2;
  let h;
  switch (d) {
    case "top":
      h = {
        x: c,
        y: n.y - i.height
      };
      break;
    case "bottom":
      h = {
        x: c,
        y: n.y + n.height
      };
      break;
    case "right":
      h = {
        x: n.x + n.width,
        y: u
      };
      break;
    case "left":
      h = {
        x: n.x - i.width,
        y: u
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
      h[r] -= p * (o && l ? -1 : 1);
      break;
    case "end":
      h[r] += p * (o && l ? -1 : 1);
      break;
  }
  return h;
}
async function So(e, t) {
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
    rootBoundary: c = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = de(t, e), f = Et(h), w = a[p ? u === "floating" ? "reference" : "floating" : u], g = pe(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(w))) == null || o ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: c,
    strategy: d
  })), y = u === "floating" ? {
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
  }, A = pe(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: b,
    strategy: d
  }) : y);
  return {
    top: (g.top - A.top + f.top) / S.y,
    bottom: (A.bottom - g.bottom + f.bottom) / S.y,
    left: (g.left - A.left + f.left) / S.x,
    right: (A.right - g.right + f.right) / S.x
  };
}
const To = async (e, t, o) => {
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
    x: c,
    y: u
  } = st(l, n, d), p = n, h = {}, f = 0;
  for (let w = 0; w < a.length; w++) {
    var v;
    const {
      name: g,
      fn: y
    } = a[w], {
      x: b,
      y: S,
      data: A,
      reset: C
    } = await y({
      x: c,
      y: u,
      initialPlacement: n,
      placement: p,
      strategy: i,
      middlewareData: h,
      rects: l,
      platform: {
        ...r,
        detectOverflow: (v = r.detectOverflow) != null ? v : So
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    c = b ?? c, u = S ?? u, h = {
      ...h,
      [g]: {
        ...h[g],
        ...A
      }
    }, C && f <= 50 && (f++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (l = C.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : C.rects), {
      x: c,
      y: u
    } = st(l, p, d)), w = -1);
  }
  return {
    x: c,
    y: u,
    placement: p,
    strategy: i,
    middlewareData: h
  };
}, Po = (e) => ({
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
      padding: c = 0
    } = de(e, t) || {};
    if (l == null)
      return {};
    const u = Et(c), p = {
      x: o,
      y: n
    }, h = Ze(i), f = Xe(h), v = await r.getDimensions(l), w = h === "y", g = w ? "top" : "left", y = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", S = s.reference[f] + s.reference[h] - p[h] - s.floating[f], A = p[h] - s.reference[h], C = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
    let O = C ? C[b] : 0;
    (!O || !await (r.isElement == null ? void 0 : r.isElement(C))) && (O = a.floating[b] || s.floating[f]);
    const H = S / 2 - A / 2, N = O / 2 - v[f] / 2 - 1, $ = ge(u[g], N), z = ge(u[y], N), D = $, M = O - v[f] - z, P = O / 2 - v[f] / 2 + H, j = Fe(D, P, M), V = !d.arrow && W(i) != null && P !== j && s.reference[f] / 2 - (P < D ? $ : z) - v[f] / 2 < 0, E = V ? P < D ? P - D : P - M : 0;
    return {
      [h]: p[h] + E,
      data: {
        [h]: j,
        centerOffset: P - j - E,
        ...V && {
          alignmentOffset: E
        }
      },
      reset: V
    };
  }
});
function Co(e, t, o) {
  return (e ? [...o.filter((i) => W(i) === e), ...o.filter((i) => W(i) !== e)] : o.filter((i) => X(i) === i)).filter((i) => e ? W(i) === e || (t ? Ae(i) !== i : !1) : !0);
}
const Ao = function(e) {
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
        crossAxis: c = !1,
        alignment: u,
        allowedPlacements: p = ot,
        autoAlignment: h = !0,
        ...f
      } = de(e, t), v = u !== void 0 || p === ot ? Co(u || null, h, p) : p, w = await d.detectOverflow(t, f), g = ((o = r.autoPlacement) == null ? void 0 : o.index) || 0, y = v[g];
      if (y == null)
        return {};
      const b = zt(y, s, await (d.isRTL == null ? void 0 : d.isRTL(l.floating)));
      if (a !== y)
        return {
          reset: {
            placement: v[0]
          }
        };
      const S = [w[X(y)], w[b[0]], w[b[1]]], A = [...((n = r.autoPlacement) == null ? void 0 : n.overflows) || [], {
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
        return [$.placement, z && c ? (
          // Check along the mainAxis and main crossAxis side.
          $.overflows.slice(0, 2).reduce((D, M) => D + M, 0)
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
      return N !== a ? {
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
}, Oo = function(e) {
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
        mainAxis: c = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: v = !0,
        ...w
      } = de(e, t);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const g = X(i), y = Q(a), b = X(a) === a, S = await (d.isRTL == null ? void 0 : d.isRTL(l.floating)), A = p || (b || !v ? [Oe(a)] : wo(a)), C = f !== "none";
      !p && C && A.push(...xo(a, v, f, S));
      const O = [a, ...A], H = await d.detectOverflow(t, w), N = [];
      let $ = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (c && N.push(H[g]), u) {
        const P = zt(i, r, S);
        N.push(H[P[0]], H[P[1]]);
      }
      if ($ = [...$, {
        placement: i,
        overflows: N
      }], !N.every((P) => P <= 0)) {
        var z, D;
        const P = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1, j = O[P];
        if (j && (!(u === "alignment" ? y !== Q(j) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((R) => Q(R.placement) === y ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: $
            },
            reset: {
              placement: j
            }
          };
        let V = (D = $.filter((E) => E.overflows[0] <= 0).sort((E, R) => E.overflows[1] - R.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!V)
          switch (h) {
            case "bestFit": {
              var M;
              const E = (M = $.filter((R) => {
                if (C) {
                  const q = Q(R.placement);
                  return q === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((q) => q > 0).reduce((q, m) => q + m, 0)]).sort((R, q) => R[1] - q[1])[0]) == null ? void 0 : M[0];
              E && (V = E);
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
}, ko = /* @__PURE__ */ new Set(["left", "top"]);
async function No(e, t) {
  const {
    placement: o,
    platform: n,
    elements: i
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), r = X(o), a = W(o), d = Q(o) === "y", l = ko.has(r) ? -1 : 1, c = s && d ? -1 : 1, u = de(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: f
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return a && typeof f == "number" && (h = a === "end" ? f * -1 : f), d ? {
    x: h * c,
    y: p * l
  } : {
    x: p * l,
    y: h * c
  };
}
const zo = function(e) {
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
      } = t, d = await No(t, e);
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
}, Eo = function(e) {
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
        ...l
      } = de(e, t), c = {
        x: o,
        y: n
      }, u = await s.detectOverflow(t, l), p = Q(X(i)), h = Nt(p);
      let f = c[h], v = c[p];
      if (r) {
        const g = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", b = f + u[g], S = f - u[y];
        f = Fe(b, f, S);
      }
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = v + u[g], S = v - u[y];
        v = Fe(b, v, S);
      }
      const w = d.fn({
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
            [h]: r,
            [p]: a
          }
        }
      };
    }
  };
}, Do = function(e) {
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
      } = de(e, t), c = await r.detectOverflow(t, l), u = X(i), p = W(i), h = Q(i) === "y", {
        width: f,
        height: v
      } = s.floating;
      let w, g;
      u === "top" || u === "bottom" ? (w = u, g = p === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = u, w = p === "end" ? "top" : "bottom");
      const y = v - c.top - c.bottom, b = f - c.left - c.right, S = ge(v - c[w], y), A = ge(f - c[g], b), C = !t.middlewareData.shift;
      let O = S, H = A;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (H = b), (n = t.middlewareData.shift) != null && n.enabled.y && (O = y), C && !p) {
        const $ = re(c.left, 0), z = re(c.right, 0), D = re(c.top, 0), M = re(c.bottom, 0);
        h ? H = f - 2 * ($ !== 0 || z !== 0 ? $ + z : re(c.left, c.right)) : O = v - 2 * (D !== 0 || M !== 0 ? D + M : re(c.top, c.bottom));
      }
      await d({
        ...t,
        availableWidth: H,
        availableHeight: O
      });
      const N = await r.getDimensions(a.floating);
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
const rt = Math.min, he = Math.max, ke = Math.round;
function Dt(e) {
  const t = U(e);
  let o = parseFloat(t.width), n = parseFloat(t.height);
  const i = e.offsetWidth, s = e.offsetHeight, r = ke(o) !== i || ke(n) !== s;
  return r && (o = i, n = s), { width: o, height: n, fallback: r };
}
function ie(e) {
  return Lt(e) ? (e.nodeName || "").toLowerCase() : "";
}
let be;
function Rt() {
  if (be) return be;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (be = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), be) : navigator.userAgent;
}
function Y(e) {
  return e instanceof I(e).HTMLElement;
}
function te(e) {
  return e instanceof I(e).Element;
}
function Lt(e) {
  return e instanceof I(e).Node;
}
function at(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof I(e).ShadowRoot || e instanceof ShadowRoot;
}
function De(e) {
  const { overflow: t, overflowX: o, overflowY: n, display: i } = U(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(i);
}
function Ro(e) {
  return ["table", "td", "th"].includes(ie(e));
}
function We(e) {
  const t = /firefox/i.test(Rt()), o = U(e), n = o.backdropFilter || o.WebkitBackdropFilter;
  return o.transform !== "none" || o.perspective !== "none" || !!n && n !== "none" || t && o.willChange === "filter" || t && !!o.filter && o.filter !== "none" || ["transform", "perspective"].some(((i) => o.willChange.includes(i))) || ["paint", "layout", "strict", "content"].some(((i) => {
    const s = o.contain;
    return s != null && s.includes(i);
  }));
}
function Bt() {
  return !/^((?!chrome|android).)*safari/i.test(Rt());
}
function Qe(e) {
  return ["html", "body", "#document"].includes(ie(e));
}
function Ht(e) {
  return te(e) ? e : e.contextElement;
}
const Mt = { x: 1, y: 1 };
function ue(e) {
  const t = Ht(e);
  if (!Y(t)) return Mt;
  const o = t.getBoundingClientRect(), { width: n, height: i, fallback: s } = Dt(t);
  let r = (s ? ke(o.width) : o.width) / n, a = (s ? ke(o.height) : o.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
function ve(e, t, o, n) {
  var i, s;
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const r = e.getBoundingClientRect(), a = Ht(e);
  let d = Mt;
  t && (n ? te(n) && (d = ue(n)) : d = ue(e));
  const l = a ? I(a) : window, c = !Bt() && o;
  let u = (r.left + (c && ((i = l.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / d.x, p = (r.top + (c && ((s = l.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / d.y, h = r.width / d.x, f = r.height / d.y;
  if (a) {
    const v = I(a), w = n && te(n) ? I(n) : n;
    let g = v.frameElement;
    for (; g && n && w !== v; ) {
      const y = ue(g), b = g.getBoundingClientRect(), S = getComputedStyle(g);
      b.x += (g.clientLeft + parseFloat(S.paddingLeft)) * y.x, b.y += (g.clientTop + parseFloat(S.paddingTop)) * y.y, u *= y.x, p *= y.y, h *= y.x, f *= y.y, u += b.x, p += b.y, g = I(g).frameElement;
    }
  }
  return { width: h, height: f, top: p, right: u + h, bottom: p + f, left: u, x: u, y: p };
}
function oe(e) {
  return ((Lt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Re(e) {
  return te(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function It(e) {
  return ve(oe(e)).left + Re(e).scrollLeft;
}
function we(e) {
  if (ie(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || at(e) && e.host || oe(e);
  return at(t) ? t.host : t;
}
function Vt(e) {
  const t = we(e);
  return Qe(t) ? t.ownerDocument.body : Y(t) && De(t) ? t : Vt(t);
}
function Ne(e, t) {
  var o;
  t === void 0 && (t = []);
  const n = Vt(e), i = n === ((o = e.ownerDocument) == null ? void 0 : o.body), s = I(n);
  return i ? t.concat(s, s.visualViewport || [], De(n) ? n : []) : t.concat(n, Ne(n));
}
function lt(e, t, o) {
  return t === "viewport" ? pe((function(n, i) {
    const s = I(n), r = oe(n), a = s.visualViewport;
    let d = r.clientWidth, l = r.clientHeight, c = 0, u = 0;
    if (a) {
      d = a.width, l = a.height;
      const p = Bt();
      (p || !p && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: d, height: l, x: c, y: u };
  })(e, o)) : te(t) ? pe((function(n, i) {
    const s = ve(n, !0, i === "fixed"), r = s.top + n.clientTop, a = s.left + n.clientLeft, d = Y(n) ? ue(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * d.x, height: n.clientHeight * d.y, x: a * d.x, y: r * d.y };
  })(t, o)) : pe((function(n) {
    const i = oe(n), s = Re(n), r = n.ownerDocument.body, a = he(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth), d = he(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
    let l = -s.scrollLeft + It(n);
    const c = -s.scrollTop;
    return U(r).direction === "rtl" && (l += he(i.clientWidth, r.clientWidth) - a), { width: a, height: d, x: l, y: c };
  })(oe(e)));
}
function dt(e) {
  return Y(e) && U(e).position !== "fixed" ? e.offsetParent : null;
}
function ut(e) {
  const t = I(e);
  let o = dt(e);
  for (; o && Ro(o) && U(o).position === "static"; ) o = dt(o);
  return o && (ie(o) === "html" || ie(o) === "body" && U(o).position === "static" && !We(o)) ? t : o || (function(n) {
    let i = we(n);
    for (; Y(i) && !Qe(i); ) {
      if (We(i)) return i;
      i = we(i);
    }
    return null;
  })(e) || t;
}
function Lo(e, t, o) {
  const n = Y(t), i = oe(t), s = ve(e, !0, o === "fixed", t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (n || !n && o !== "fixed") if ((ie(t) !== "body" || De(i)) && (r = Re(t)), Y(t)) {
    const d = ve(t, !0);
    a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
  } else i && (a.x = It(i));
  return { x: s.left + r.scrollLeft - a.x, y: s.top + r.scrollTop - a.y, width: s.width, height: s.height };
}
const Bo = { getClippingRect: function(e) {
  let { element: t, boundary: o, rootBoundary: n, strategy: i } = e;
  const s = o === "clippingAncestors" ? (function(l, c) {
    const u = c.get(l);
    if (u) return u;
    let p = Ne(l).filter(((w) => te(w) && ie(w) !== "body")), h = null;
    const f = U(l).position === "fixed";
    let v = f ? we(l) : l;
    for (; te(v) && !Qe(v); ) {
      const w = U(v), g = We(v);
      (f ? g || h : g || w.position !== "static" || !h || !["absolute", "fixed"].includes(h.position)) ? h = w : p = p.filter(((y) => y !== v)), v = we(v);
    }
    return c.set(l, p), p;
  })(t, this._c) : [].concat(o), r = [...s, n], a = r[0], d = r.reduce(((l, c) => {
    const u = lt(t, c, i);
    return l.top = he(u.top, l.top), l.right = rt(u.right, l.right), l.bottom = rt(u.bottom, l.bottom), l.left = he(u.left, l.left), l;
  }), lt(t, a, i));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: o, strategy: n } = e;
  const i = Y(o), s = oe(o);
  if (o === s) return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((i || !i && n !== "fixed") && ((ie(o) !== "body" || De(s)) && (r = Re(o)), Y(o))) {
    const l = ve(o);
    a = ue(o), d.x = l.x + o.clientLeft, d.y = l.y + o.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + d.x, y: t.y * a.y - r.scrollTop * a.y + d.y };
}, isElement: te, getDimensions: function(e) {
  return Y(e) ? Dt(e) : e.getBoundingClientRect();
}, getOffsetParent: ut, getDocumentElement: oe, getScale: ue, async getElementRects(e) {
  let { reference: t, floating: o, strategy: n } = e;
  const i = this.getOffsetParent || ut, s = this.getDimensions;
  return { reference: Lo(t, await i(o), n), floating: { x: 0, y: 0, ...await s(o) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => U(e).direction === "rtl" }, Ho = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), i = { platform: Bo, ...o }, s = { ...i.platform, _c: n };
  return To(e, t, { ...i, platform: s });
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
function Mo(e) {
  const t = [e];
  let o = ne.themes[e] || {};
  do
    o.$extend && !o.$resetCss ? (t.push(o.$extend), o = ne.themes[o.$extend] || {}) : o = null;
  while (o);
  return t.map((n) => `v-popper--theme-${n}`);
}
function ct(e) {
  const t = [e];
  let o = ne.themes[e] || {};
  do
    o.$extend ? (t.push(o.$extend), o = ne.themes[o.$extend] || {}) : o = null;
  while (o);
  return t;
}
let ye = !1;
if (typeof window < "u") {
  ye = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        ye = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Ft = !1;
typeof window < "u" && typeof navigator < "u" && (Ft = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Io = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), pt = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, ht = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function ft(e, t) {
  const o = e.indexOf(t);
  o !== -1 && e.splice(o, 1);
}
function Be() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const F = [];
let se = null;
const mt = {};
function gt(e) {
  let t = mt[e];
  return t || (t = mt[e] = []), t;
}
let qe = function() {
};
typeof window < "u" && (qe = window.Element);
function _(e) {
  return function(t) {
    return je(t.theme, e);
  };
}
const He = "__floating-vue__popper", Wt = () => le({
  name: "VPopper",
  provide() {
    return {
      [He]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [He]: { default: null }
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
      default: _("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: _("positioningDisabled")
    },
    placement: {
      type: String,
      default: _("placement"),
      validator: (e) => Io.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: _("delay")
    },
    distance: {
      type: [Number, String],
      default: _("distance")
    },
    skidding: {
      type: [Number, String],
      default: _("skidding")
    },
    triggers: {
      type: Array,
      default: _("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: _("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: _("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: _("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: _("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: _("popperHideTriggers")
    },
    container: {
      type: [String, Object, qe, Boolean],
      default: _("container")
    },
    boundary: {
      type: [String, qe],
      default: _("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: _("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: _("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: _("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: _("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: _("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: _("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: _("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: _("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: _("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: _("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: _("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: _("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: _("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: _("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: _("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: _("flip")
    },
    shift: {
      type: Boolean,
      default: _("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: _("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: _("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: _("disposeTimeout")
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
      return (e = this[He]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(zo({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Ao({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Eo({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Oo({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Po({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Do({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: i }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null;
        }
      })));
      const o = await Ho(this.$_referenceNode, this.$_popperNode, e);
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
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Be(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Ne(this.$_referenceNode),
        ...Ne(this.$_popperNode)
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
      for (const t of ct(this.theme))
        gt(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Be(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, ft(F, this), F.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const o of ct(this.theme)) {
        const n = gt(o);
        ft(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${o}`);
      }
      se === this && (se = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Be(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, pt, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], pt, this.popperTriggers, this.popperShowTriggers, e);
      const t = (o) => {
        o.usedByTooltip || this.hide({ event: o });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, ht, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], ht, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, o) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: o }), e.forEach((n) => n.addEventListener(t, o, ye ? {
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
      if (fe >= e.left && fe <= e.right && me >= e.top && me <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), o = fe - J, n = me - ee, i = t.left + t.width / 2 - J + (t.top + t.height / 2) - ee + t.width + t.height, s = J + o * i, r = ee + n * i;
        return _e(J, ee, s, r, t.left, t.top, t.left, t.bottom) || // Left edge
        _e(J, ee, s, r, t.left, t.top, t.right, t.top) || // Top edge
        _e(J, ee, s, r, t.right, t.top, t.right, t.bottom) || // Right edge
        _e(J, ee, s, r, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Ft) {
    const e = ye ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => vt(t), e), document.addEventListener("touchend", (t) => wt(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => vt(e), !0), window.addEventListener("click", (e) => wt(e, !1), !0);
  window.addEventListener("resize", Wo);
}
function vt(e, t) {
  for (let o = 0; o < F.length; o++) {
    const n = F[o];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function wt(e, t) {
  Vo(e, t);
}
function Vo(e, t) {
  const o = {};
  for (let n = F.length - 1; n >= 0; n--) {
    const i = F[n];
    try {
      const s = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
      i.pendingHide = !1, requestAnimationFrame(() => {
        if (i.pendingHide = !1, !o[i.randomId] && yt(i, s, e)) {
          if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
            let a = i.parentPopper;
            for (; a; )
              o[a.randomId] = !0, a = a.parentPopper;
            return;
          }
          let r = i.parentPopper;
          for (; r && yt(r, r.containsGlobalTarget, e); )
            r.$_handleGlobalClose(e, t), r = r.parentPopper;
        }
      });
    } catch {
    }
  }
}
function yt(e, t, o) {
  return o.closeAllPopover || o.closePopover && t || Fo(e, o) && !t;
}
function Fo(e, t) {
  if (typeof e.autoHide == "function") {
    const o = e.autoHide(t);
    return e.lastAutoHide = o, o;
  }
  return e.autoHide;
}
function Wo() {
  for (let e = 0; e < F.length; e++)
    F[e].$_computePosition();
}
let J = 0, ee = 0, fe = 0, me = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  J = fe, ee = me, fe = e.clientX, me = e.clientY;
}, ye ? {
  passive: !0
} : void 0);
function _e(e, t, o, n, i, s, r, a) {
  const d = ((r - i) * (t - s) - (a - s) * (e - i)) / ((a - s) * (o - e) - (r - i) * (n - t)), l = ((o - e) * (t - s) - (n - t) * (e - i)) / ((a - s) * (o - e) - (r - i) * (n - t));
  return d >= 0 && d <= 1 && l >= 0 && l <= 1;
}
const jo = {
  extends: Wt()
}, Je = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, i] of t)
    o[n] = i;
  return o;
};
function qo(e, t, o, n, i, s) {
  return B(), Z("div", {
    ref: "reference",
    class: Pe(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    G(e.$slots, "default", Zt(Qt(e.slotData)))
  ], 2);
}
const Ko = /* @__PURE__ */ Je(jo, [["render", qo]]);
function Go() {
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
let Se;
function Ke() {
  Ke.init || (Ke.init = !0, Se = Go() !== -1);
}
var Le = {
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
    Ke(), Te(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Se && this.$el.appendChild(e), e.data = "about:blank", Se || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Se && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Uo = /* @__PURE__ */ Jt("data-v-b329ee4c");
Yt("data-v-b329ee4c");
const Yo = {
  class: "resize-observer",
  tabindex: "-1"
};
Xt();
const Xo = /* @__PURE__ */ Uo((e, t, o, n, i, s) => (B(), ze("div", Yo)));
Le.render = Xo;
Le.__scopeId = "data-v-b329ee4c";
Le.__file = "src/components/ResizeObserver.vue";
const jt = (e = "theme") => ({
  computed: {
    themeClass() {
      return Mo(this[e]);
    }
  }
}), Zo = le({
  name: "VPopperContent",
  components: {
    ResizeObserver: Le
  },
  mixins: [
    jt()
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
}), Qo = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Jo = {
  ref: "inner",
  class: "v-popper__inner"
}, en = /* @__PURE__ */ L("div", { class: "v-popper__arrow-outer" }, null, -1), tn = /* @__PURE__ */ L("div", { class: "v-popper__arrow-inner" }, null, -1), on = [
  en,
  tn
];
function nn(e, t, o, n, i, s) {
  const r = Ce("ResizeObserver");
  return B(), Z("div", {
    id: e.popperId,
    ref: "popover",
    class: Pe(["v-popper__popper", [
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
    onKeyup: t[2] || (t[2] = eo((a) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    L("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide"))
    }),
    L("div", {
      class: "v-popper__wrapper",
      style: xe(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      L("div", Jo, [
        e.mounted ? (B(), Z(Ct, { key: 0 }, [
          L("div", null, [
            G(e.$slots, "default")
          ]),
          e.handleResize ? (B(), ze(r, {
            key: 0,
            onNotify: t[1] || (t[1] = (a) => e.$emit("resize", a))
          })) : Ve("", !0)
        ], 64)) : Ve("", !0)
      ], 512),
      L("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: xe(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, on, 4)
    ], 4)
  ], 46, Qo);
}
const qt = /* @__PURE__ */ Je(Zo, [["render", nn]]), Kt = {
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
const sn = le({
  name: "VPopperWrapper",
  components: {
    Popper: Ko,
    PopperContent: qt
  },
  mixins: [
    Kt,
    jt("finalTheme")
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
function rn(e, t, o, n, i, s) {
  const r = Ce("PopperContent"), a = Ce("Popper");
  return B(), ze(a, Pt({ ref: "popper" }, e.$props, {
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
    default: ce(({
      popperId: d,
      isShown: l,
      shouldMountContent: c,
      skipTransition: u,
      autoHide: p,
      show: h,
      hide: f,
      handleResize: v,
      onResize: w,
      classes: g,
      result: y
    }) => [
      G(e.$slots, "default", {
        shown: l,
        show: h,
        hide: f
      }),
      Ee(r, {
        ref: "popperContent",
        "popper-id": d,
        theme: e.finalTheme,
        shown: l,
        mounted: c,
        "skip-transition": u,
        "auto-hide": p,
        "handle-resize": v,
        classes: g,
        result: y,
        onHide: f,
        onResize: w
      }, {
        default: ce(() => [
          G(e.$slots, "popper", {
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
const et = /* @__PURE__ */ Je(sn, [["render", rn]]), an = {
  ...et,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...et
});
({
  ...et
});
le({
  name: "VTooltipDirective",
  components: {
    Popper: Wt(),
    PopperContent: qt
  },
  mixins: [
    Kt
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
const ln = ne, dn = an;
var un = Object.defineProperty, cn = Object.defineProperties, pn = Object.getOwnPropertyDescriptors, bt = Object.getOwnPropertySymbols, hn = Object.prototype.hasOwnProperty, fn = Object.prototype.propertyIsEnumerable, _t = (e, t, o) => t in e ? un(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, mn = (e, t) => {
  for (var o in t || (t = {}))
    hn.call(t, o) && _t(e, o, t[o]);
  if (bt)
    for (var o of bt(t))
      fn.call(t, o) && _t(e, o, t[o]);
  return e;
}, gn = (e, t) => cn(e, pn(t)), Gt = { exports: {} };
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
      var c = document.createElement("div");
      c.id = "input-textarea-caret-position-mirror-div", document.body.appendChild(c);
      var u = c.style, p = window.getComputedStyle ? window.getComputedStyle(s) : s.currentStyle, h = s.nodeName === "INPUT";
      u.whiteSpace = "pre-wrap", h || (u.wordWrap = "break-word"), u.position = "absolute", d || (u.visibility = "hidden"), t.forEach(function(w) {
        h && w === "lineHeight" ? u.lineHeight = p.height : u[w] = p[w];
      }), n ? s.scrollHeight > parseInt(p.height) && (u.overflowY = "scroll") : u.overflow = "hidden", c.textContent = s.value.substring(0, r), h && (c.textContent = c.textContent.replace(/\s/g, " "));
      var f = document.createElement("span");
      f.textContent = s.value.substring(r) || ".", c.appendChild(f);
      var v = {
        top: f.offsetTop + parseInt(p.borderTopWidth),
        left: f.offsetLeft + parseInt(p.borderLeftWidth),
        height: parseInt(p.lineHeight)
      };
      return d ? f.style.backgroundColor = "#aaa" : document.body.removeChild(c), v;
    }
    e.exports = i;
  })();
})(Gt);
var vn = Gt.exports, wn = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, i] of t)
    o[n] = i;
  return o;
};
ln.themes.mentionable = {
  $extend: "dropdown",
  placement: "top-start",
  arrowPadding: 6,
  arrowOverflow: !1
};
const yn = le({
  components: {
    VDropdown: dn
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
    Me(s, (m, x) => {
      m && t("search", m, x);
    });
    const r = Ie(() => {
      if (!s.value || e.filteringDisabled)
        return e.items;
      const m = s.value.toLowerCase();
      return e.items.filter((x) => {
        let T;
        if (x.searchText)
          T = x.searchText;
        else if (x.label)
          T = x.label;
        else {
          T = "";
          for (const k in x)
            T += x[k];
        }
        return T.toLowerCase().includes(m);
      });
    }), a = Ie(() => r.value.slice(0, e.limit)), d = K(0);
    Me(a, () => {
      d.value = 0;
    }, {
      deep: !0
    });
    let l;
    const c = K(null);
    function u() {
      var m, x;
      return (x = (m = c.value.querySelector("input")) != null ? m : c.value.querySelector("textarea")) != null ? x : c.value.querySelector('[contenteditable="true"]');
    }
    Ye(() => {
      l = u(), p();
    }), to(() => {
      const m = u();
      m !== l && (h(), l = m, p());
    }), oo(() => {
      h();
    });
    function p() {
      l && (l.addEventListener("input", f), l.addEventListener("keydown", w), l.addEventListener("keyup", y), l.addEventListener("scroll", S), l.addEventListener("blur", v));
    }
    function h() {
      l && (l.removeEventListener("input", f), l.removeEventListener("keydown", w), l.removeEventListener("keyup", y), l.removeEventListener("scroll", S), l.removeEventListener("blur", v));
    }
    function f() {
      z();
    }
    function v() {
      E();
    }
    function w(m) {
      o.value && (m.key === "ArrowDown" && (d.value++, d.value >= a.value.length && (d.value = 0), b(m)), m.key === "ArrowUp" && (d.value--, d.value < 0 && (d.value = a.value.length - 1), b(m)), (m.key === "Enter" || m.key === "Tab") && a.value.length > 0 && (R(d.value), b(m)), m.key === "Escape" && (E(), b(m)));
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
      return l.isContentEditable ? window.getSelection().anchorOffset : l.selectionStart;
    }
    function C(m) {
      Te(() => {
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
    function z() {
      const m = A();
      if (m >= 0) {
        const { key: x, keyIndex: T } = D(m), k = $ = M(m, T);
        if (!(T < 1 || /\s/.test(O()[T - 1])))
          return !1;
        if (k != null)
          return V(x, T), s.value = k, !0;
      }
      return E(), !1;
    }
    function D(m) {
      const [x] = e.keys.map((T) => ({
        key: T,
        keyIndex: O().lastIndexOf(T, m - 1)
      })).sort((T, k) => k.keyIndex - T.keyIndex);
      return x;
    }
    function M(m, x) {
      if (x !== -1) {
        const T = O().substring(x + 1, m);
        if (!/\s/.test(T))
          return T;
      }
      return null;
    }
    const P = K(null);
    function j() {
      if (o.value) {
        if (l.isContentEditable) {
          const m = window.getSelection().getRangeAt(0).getBoundingClientRect(), x = l.getBoundingClientRect();
          P.value = {
            left: m.left - x.left,
            top: m.top - x.top,
            height: m.height
          };
        } else
          P.value = vn(l, n);
        P.value.top -= l.scrollTop, e.caretHeight ? P.value.height = e.caretHeight : isNaN(P.value.height) && (P.value.height = 16);
      }
    }
    function V(m, x) {
      o.value !== m && (o.value = m, n = x, j(), d.value = 0, t("open", o.value));
    }
    function E() {
      o.value != null && (i.value = o.value, o.value = null, t("close", i.value));
    }
    function R(m) {
      const x = a.value[m], T = (e.omitKey ? "" : o.value) + String(e.mapInsert ? e.mapInsert(x, o.value) : x.value) + (e.insertSpace ? " " : "");
      if (l.isContentEditable) {
        const k = window.getSelection().getRangeAt(0);
        k.setStart(k.startContainer, k.startOffset - o.value.length - ($ ? $.length : 0)), k.deleteContents(), k.insertNode(document.createTextNode(T)), k.setStart(k.endContainer, k.endOffset), N("input");
      } else
        H(q(O(), s.value, T, n)), C(n + T.length);
      t("apply", x, o.value, T), E();
    }
    function q(m, x, T, k) {
      return m.slice(0, k) + T + m.slice(k + x.length + 1, m.length);
    }
    return {
      el: c,
      currentKey: o,
      oldKey: i,
      caretPosition: P,
      displayedItems: a,
      selectedIndex: d,
      applyMention: R
    };
  }
}), bn = { key: 0 }, _n = /* @__PURE__ */ At(" No result "), xn = ["onMouseover", "onMousedown"];
function $n(e, t, o, n, i, s) {
  const r = Ce("VDropdown");
  return B(), Z("div", {
    ref: "el",
    class: Pe(["mentionable", e.$attrs.class]),
    style: { position: "relative" }
  }, [
    G(e.$slots, "default"),
    Ee(r, Pt({ ref: "popper" }, gn(mn({}, e.$attrs), { class: void 0 }), {
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
      popper: ce(() => [
        e.displayedItems.length ? (B(!0), Z(Ct, { key: 1 }, no(e.displayedItems, (a, d) => (B(), Z("div", {
          key: d,
          class: Pe(["mention-item", {
            "mention-selected": e.selectedIndex === d
          }]),
          onMouseover: (l) => e.selectedIndex = d,
          onMousedown: (l) => e.applyMention(d)
        }, [
          G(e.$slots, `item-${e.currentKey || e.oldKey}`, {
            item: a,
            index: d
          }, () => [
            G(e.$slots, "item", {
              item: a,
              index: d
            }, () => [
              At($e(a.label || a.value), 1)
            ])
          ])
        ], 42, xn))), 128)) : (B(), Z("div", bn, [
          G(e.$slots, "no-result", {}, () => [
            _n
          ])
        ]))
      ]),
      default: ce(() => [
        L("div", {
          style: xe(e.caretPosition ? {
            height: `${e.caretPosition.height}px`
          } : {})
        }, null, 4)
      ]),
      _: 3
    }, 16, ["shown", "theme", "style"])
  ], 2);
}
var Sn = /* @__PURE__ */ wn(yn, [["render", $n]]);
const Tn = { class: "complex-input-wrapper w-full" }, Pn = { class: "complex-input w-full" }, Cn = { class: "complex-input-item" }, An = { class: "tip" }, On = /* @__PURE__ */ le({
  __name: "ComplexTextInput",
  props: /* @__PURE__ */ $t({
    label: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Tt(e, "modelValue"), { t: o } = kt("variableComponents"), n = K([]), i = K();
    Ye(() => {
      const d = St(Ot);
      n.value = d.getAllVariables().map(([l]) => {
        const c = d.getVariable(l);
        return {
          value: c.name,
          currentValue: c.value
        };
      });
    });
    const s = () => {
      Te(() => {
        const d = i.value?.querySelector("input, textarea");
        if (!d) return;
        const l = d.selectionStart, c = d.value;
        c.charAt(l) !== "}" && (t.value.value = c.slice(0, l) + "}" + c.slice(l), Te(() => {
          d.setSelectionRange(l + 1, l + 1);
        }));
      });
    };
    function r(d) {
      const l = d;
      return l && typeof l == "object" && l.target && "value" in l.target ? String(l.target.value ?? "") : d == null ? "" : String(d);
    }
    const a = (d) => {
      t.value.value = r(d);
    };
    return (d, l) => (B(), Z("div", Tn, [
      L("div", Pn, [
        Ee(ae(Sn), {
          keys: ["{"],
          items: n.value,
          offset: "6",
          onApply: s
        }, {
          item: ce(({ item: c }) => [
            L("div", Cn, $e(c.value) + " (" + $e(c.currentValue) + ") ", 1)
          ]),
          default: ce(() => [
            L("div", {
              class: "w-full",
              ref_key: "inputRef",
              ref: i
            }, [
              G(d.$slots, "default", {
                value: t.value.original,
                change: a
              })
            ], 512)
          ]),
          _: 3
        }, 8, ["items"])
      ]),
      L("div", An, $e(ae(o)("ComplexText.tip")), 1)
    ]));
  }
}), kn = { tip: "Tipp: Variablen schreibt man als {variableName}." }, Nn = { choose: "Variable wählen", ownValue: "Wert selbst eingeben", bind: "An eine Variable binden" }, zn = {
  ComplexText: kn,
  Input: Nn
}, En = { tip: "Tip: variables are written as {variableName}." }, Dn = { choose: "Choose variable", ownValue: "Enter the value yourself", bind: "Bind to a variable" }, Rn = {
  ComplexText: En,
  Input: Dn
};
var Ln = Object.getOwnPropertyDescriptor, Bn = (e, t, o, n) => {
  for (var i = n > 1 ? void 0 : n ? Ln(t, o) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (i = r(i) || i);
  return i;
};
const Ut = "variableComponents";
let Ue = class {
  namespace = Ut;
  resources = {
    de: zn,
    en: Rn
  };
};
Ue = Bn([
  ro({
    service: ["Translations"],
    properties: { "i18n.namespace": Ut }
  })
], Ue);
const Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComplexTextInput: On,
  get VariableComponentsTranslations() {
    return Ue;
  },
  VariableInput: ho
}, Symbol.toStringTag, { value: "Module" })), xt = "org.eclipse.daanse.board.app.ui.vue.variable.components", Mn = "0.0.1-next.1";
async function qn(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${xt}: tsm runtime is not initialized`);
  t.register(xt, Hn, Mn, "ui.vue.variable.components"), await void 0;
}
async function Kn(e) {
  await void 0;
}
export {
  On as ComplexTextInput,
  Ue as VariableComponentsTranslations,
  ho as VariableInput,
  qn as activate,
  Kn as deactivate
};
