(function(){var i="ui.vue.controls",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".btn[data-v-124239c3]{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;white-space:nowrap;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-124239c3]:hover:not(:disabled){border-color:var(--color-outline)}.btn[data-v-124239c3]:active:not(:disabled){transform:translateY(.5px)}.btn[data-v-124239c3]:disabled{opacity:.45;cursor:default}.btn[data-v-124239c3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.btn--sm[data-v-124239c3]{height:22px;padding:0 9px;font-size:var(--text-xs)}.btn--md[data-v-124239c3]{height:26px;padding:0 12px}.btn--lg[data-v-124239c3]{height:32px;padding:0 16px;font-size:var(--text-base)}.btn--block[data-v-124239c3]{display:flex;width:100%}.btn--primary[data-v-124239c3]{color:var(--color-onAccent);background-color:var(--color-accent);border-color:var(--color-accent);font-weight:600}.btn--primary[data-v-124239c3]:hover:not(:disabled){filter:brightness(1.08)}.btn--quiet[data-v-124239c3]{background-color:transparent;border-color:transparent;color:var(--color-dim)}.btn--quiet[data-v-124239c3]:hover:not(:disabled){color:var(--color-fg);background-color:var(--color-raised);border-color:var(--color-divider)}.btn--danger[data-v-124239c3]{color:var(--color-err);border-color:color-mix(in srgb,var(--color-err) 45%,transparent)}.btn--danger[data-v-124239c3]:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-err) 12%,transparent);border-color:var(--color-err)}.btn__spinner[data-v-124239c3]{width:11px;height:11px;flex:none;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:btn-spin-124239c3 .7s linear infinite}@keyframes btn-spin-124239c3{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.btn__spinner[data-v-124239c3]{animation-duration:2s}}.card[data-v-8c187da1]{display:flex;flex-direction:column;min-width:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.card--interactive[data-v-8c187da1]{cursor:pointer}.card--interactive[data-v-8c187da1]:hover{border-color:var(--color-outline)}.card__head[data-v-8c187da1]{display:flex;align-items:center;gap:8px;flex:none;height:var(--spacing-panelHeader);padding:0 10px;border-bottom:1px solid var(--color-divider)}.card__title[data-v-8c187da1]{margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim)}.card__spacer[data-v-8c187da1]{flex:1 1 auto}.card__body[data-v-8c187da1]{flex:1 1 auto;min-height:0}.card__body--padded[data-v-8c187da1]{padding:10px 12px}.check[data-v-5fb92780]{display:flex;align-items:baseline;gap:7px;margin-bottom:6px}.check--off[data-v-5fb92780]{opacity:.5}.check__box[data-v-5fb92780]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:pointer}.check__box[data-v-5fb92780]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.check__label[data-v-5fb92780]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.check__hint[data-v-5fb92780]{display:block;font-size:var(--text-xs);color:var(--color-dim)}.chip[data-v-30700fa0]{display:inline-flex;align-items:center;gap:4px;padding:1px 7px;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.5;border-radius:var(--radius-xs);white-space:nowrap}.chip--num[data-v-30700fa0]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.chip--neutral[data-v-30700fa0]{color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider)}.chip--accent[data-v-30700fa0]{color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent)}.chip--ok[data-v-30700fa0]{color:var(--color-ok);background-color:color-mix(in srgb,var(--color-ok) 14%,transparent)}.chip--warn[data-v-30700fa0]{color:var(--color-warn);background-color:color-mix(in srgb,var(--color-warn) 14%,transparent)}.chip--err[data-v-30700fa0]{color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 14%,transparent)}.chip__x[data-v-30700fa0]{font-size:9px;color:inherit;background:none;border:0;padding:0;cursor:pointer;opacity:.7}.chip__x[data-v-30700fa0]:hover{opacity:1}.field[data-v-0c4cf022]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-0c4cf022]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-0c4cf022]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-0c4cf022]{width:auto}.field__control[data-v-0c4cf022]{flex:1 1 auto;min-width:0}.field__hint[data-v-0c4cf022]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.row[data-v-0c4cf022]{display:flex;align-items:center;gap:6px}.picker[data-v-0c4cf022]{width:26px;height:26px;flex:none;padding:2px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.picker[data-v-0c4cf022]:focus-visible,.hex[data-v-0c4cf022]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.hex[data-v-0c4cf022]{flex:1 1 auto;min-width:0;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.picker[data-v-0c4cf022]:disabled,.hex[data-v-0c4cf022]:disabled{opacity:.5}.field[data-v-3afdb10c]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3afdb10c]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3afdb10c]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3afdb10c]{width:auto}.field__required[data-v-3afdb10c]{color:var(--color-err)}.field__control[data-v-3afdb10c]{flex:1 1 auto;min-width:0}.field__hint[data-v-3afdb10c],.field__error[data-v-3afdb10c]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.field__error[data-v-3afdb10c]{color:var(--color-err)}.input[data-v-3afdb10c]{width:100%;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.input--invalid[data-v-3afdb10c]{border-color:var(--color-err)}.input[data-v-3afdb10c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.input[data-v-3afdb10c]:disabled{opacity:.5}.rule[data-v-521e9319]{height:1px;margin:12px 0;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]{display:flex;align-items:center;gap:8px;height:auto;background:none;margin:14px 0 7px}.rule--labelled[data-v-521e9319]:before,.rule--labelled[data-v-521e9319]:after{content:\"\";height:1px;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]:before{width:10px;flex:none}.rule--labelled[data-v-521e9319]:after{flex:1 1 auto}.rule__label[data-v-521e9319]{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.field[data-v-bf447967]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-bf447967]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-bf447967]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-bf447967]{width:auto}.field__required[data-v-bf447967]{color:var(--color-err)}.field__control[data-v-bf447967]{flex:1 1 auto;min-width:0}.field__hint[data-v-bf447967],.field__error[data-v-bf447967]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-bf447967]{color:var(--color-err)}.icon[data-v-15dffeec]{font-family:Material Icons,sans-serif;font-style:normal;font-weight:400;line-height:1;letter-spacing:normal;white-space:nowrap;direction:ltr;display:inline-block;vertical-align:middle;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-feature-settings:\"liga\";color:inherit}.icon--xs[data-v-15dffeec]{font-size:12px}.icon--sm[data-v-15dffeec]{font-size:14px}.icon--md[data-v-15dffeec]{font-size:16px}.icon--lg[data-v-15dffeec]{font-size:20px}.field[data-v-fb05f36e]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-fb05f36e]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-fb05f36e]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-fb05f36e]{width:auto}.field__required[data-v-fb05f36e]{color:var(--color-err)}.field__control[data-v-fb05f36e]{flex:1 1 auto;min-width:0}.field__hint[data-v-fb05f36e],.field__error[data-v-fb05f36e]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-fb05f36e]{color:var(--color-err)}.shell[data-v-fb05f36e]{display:flex;align-items:center;gap:6px;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-fb05f36e]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-fb05f36e]{border-color:var(--color-err)}.shell--off[data-v-fb05f36e]{opacity:.5}.shell--sm[data-v-fb05f36e]{height:22px}.shell--md[data-v-fb05f36e]{height:26px}.shell--lg[data-v-fb05f36e]{height:32px}.shell[data-v-fb05f36e]:has(.input--area){height:auto;padding:5px 8px}.input[data-v-fb05f36e]{flex:1 1 auto;min-width:0;padding:0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none}.shell--lg .input[data-v-fb05f36e]{font-size:var(--text-base)}.input--num[data-v-fb05f36e]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.input--area[data-v-fb05f36e]{resize:vertical;line-height:1.45}.input[data-v-fb05f36e]::placeholder{color:var(--color-dim);opacity:.75}.suffix[data-v-fb05f36e]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.scrim[data-v-03f9e875]{position:fixed;inset:0;z-index:40000;display:grid;place-items:center;padding:24px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(4px)}.dialog[data-v-03f9e875]{display:flex;flex-direction:column;max-height:100%;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.dialog--sm[data-v-03f9e875]{width:380px}.dialog--md[data-v-03f9e875]{width:560px}.dialog--lg[data-v-03f9e875]{width:840px}.dialog__head[data-v-03f9e875]{display:flex;align-items:center;gap:10px;flex:none;padding:9px 12px;border-bottom:1px solid var(--color-divider)}.dialog__title[data-v-03f9e875]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.dialog__close[data-v-03f9e875]{margin-left:auto;width:22px;height:22px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.dialog__close[data-v-03f9e875]:hover{color:var(--color-fg);background-color:var(--color-raised)}.dialog__close[data-v-03f9e875]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.dialog__body[data-v-03f9e875]{flex:1 1 auto;min-height:0;padding:14px 12px;overflow-y:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.dialog__foot[data-v-03f9e875]{display:flex;align-items:center;justify-content:flex-end;gap:7px;flex:none;padding:9px 12px;border-top:1px solid var(--color-divider)}.field[data-v-3e122607]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3e122607]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3e122607]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3e122607]{width:auto}.field__required[data-v-3e122607]{color:var(--color-err)}.field__control[data-v-3e122607]{flex:1 1 auto;min-width:0}.field__hint[data-v-3e122607],.field__error[data-v-3e122607]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-3e122607]{color:var(--color-err)}.shell[data-v-3e122607]{position:relative;display:flex;align-items:center;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-3e122607]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-3e122607]{border-color:var(--color-err)}.shell--off[data-v-3e122607]{opacity:.5}.shell--sm[data-v-3e122607]{height:22px}.shell--md[data-v-3e122607]{height:26px}.shell--lg[data-v-3e122607]{height:32px}.select[data-v-3e122607]{flex:1 1 auto;min-width:0;height:100%;padding:0 14px 0 0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none;appearance:none;cursor:pointer}.shell--lg .select[data-v-3e122607]{font-size:var(--text-base)}.select option[data-v-3e122607]{color:var(--color-fg);background-color:var(--color-pane)}.chevron[data-v-3e122607]{position:absolute;right:7px;font-size:9px;color:var(--color-dim);pointer-events:none}.field[data-v-ed7d97ce]{display:flex;align-items:center;gap:10px;margin-bottom:7px}.field--stacked[data-v-ed7d97ce]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-ed7d97ce]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-ed7d97ce]{width:auto}.field__control[data-v-ed7d97ce]{flex:1 1 auto;min-width:0}.row[data-v-ed7d97ce]{display:flex;align-items:center;gap:8px}.range[data-v-ed7d97ce]{flex:1 1 auto;min-width:0;accent-color:var(--color-accent);cursor:pointer}.range[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.num[data-v-ed7d97ce]{width:62px;flex:none;height:22px;padding:0 6px;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.num[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.suffix[data-v-ed7d97ce]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.range[data-v-ed7d97ce]:disabled,.num[data-v-ed7d97ce]:disabled{opacity:.5}.sw[data-v-70940a00]{display:flex;align-items:center;gap:8px;margin-bottom:6px}.sw--off[data-v-70940a00]{opacity:.5}.sw__track[data-v-70940a00]{position:relative;width:28px;height:15px;flex:none;padding:0;background-color:var(--color-outline);border:0;border-radius:8px;cursor:pointer}.sw__track.on[data-v-70940a00]{background-color:var(--color-accent)}.sw__track[data-v-70940a00]:disabled{cursor:default}.sw__track[data-v-70940a00]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.sw__knob[data-v-70940a00]{position:absolute;top:2px;left:2px;width:11px;height:11px;border-radius:50%;background-color:var(--color-pane);transition:left .12s ease}.sw__track.on .sw__knob[data-v-70940a00]{left:15px}@media(prefers-reduced-motion:reduce){.sw__knob[data-v-70940a00]{transition:none}}.sw__label[data-v-70940a00]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.tabs[data-v-f7c65d26]{display:flex;flex-wrap:wrap;align-items:stretch;gap:1px;min-height:var(--spacing-panelHeader);padding:0 6px;border-bottom:1px solid var(--color-divider)}.tab[data-v-f7c65d26]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 10px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab[data-v-f7c65d26]:hover:not(:disabled){color:var(--color-fg)}.tab[data-v-f7c65d26]:disabled{opacity:.45;cursor:default}.tab.on[data-v-f7c65d26]{color:var(--color-fg);font-weight:600}.tab.on[data-v-f7c65d26]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab[data-v-f7c65d26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.tab__count[data-v-f7c65d26]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}\n";})();
import { defineComponent as m, createElementBlock as a, openBlock as t, normalizeClass as b, createCommentVNode as u, renderSlot as h, createElementVNode as f, toDisplayString as c, mergeModels as k, useModel as x, useId as D, withDirectives as V, unref as y, vModelCheckbox as G, createTextVNode as B, computed as I, vModelText as g, vModelDynamic as S, normalizeStyle as J, watch as Q, onMounted as X, onBeforeUnmount as _, createBlock as p, Teleport as ee, withModifiers as q, Fragment as z, renderList as K, vModelSelect as le, withKeys as C } from "vue";
const te = ["type", "disabled", "aria-busy"], ae = {
  key: 0,
  class: "btn__spinner",
  "aria-hidden": "true"
}, de = /* @__PURE__ */ m({
  __name: "DButton",
  props: {
    intent: { default: "default" },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    busy: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  setup(e) {
    return (l, d) => (t(), a("button", {
      type: e.type,
      class: b(["btn", `btn--${e.intent}`, `btn--${e.size}`, { "btn--block": e.block, "btn--busy": e.busy }]),
      disabled: e.disabled || e.busy,
      "aria-busy": e.busy || void 0
    }, [
      e.busy ? (t(), a("span", ae)) : u("", !0),
      h(l.$slots, "default", {}, void 0, !0)
    ], 10, te));
  }
}), v = (e, l) => {
  const d = e.__vccOpts || e;
  for (const [r, n] of l)
    d[r] = n;
  return d;
}, T = /* @__PURE__ */ v(de, [["__scopeId", "data-v-124239c3"]]), ie = {
  key: 0,
  class: "card__head"
}, se = { class: "card__title" }, ne = /* @__PURE__ */ m({
  __name: "DCard",
  props: {
    title: {},
    padded: { type: Boolean, default: !0 },
    interactive: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, d) => (t(), a("section", {
      class: b(["card", { "card--interactive": e.interactive }])
    }, [
      e.title || l.$slots.header ? (t(), a("header", ie, [
        h(l.$slots, "header", {}, () => [
          f("h3", se, c(e.title), 1)
        ], !0),
        d[0] || (d[0] = f("span", { class: "card__spacer" }, null, -1)),
        h(l.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0),
      f("div", {
        class: b(["card__body", { "card__body--padded": e.padded }])
      }, [
        h(l.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), U = /* @__PURE__ */ v(ne, [["__scopeId", "data-v-8c187da1"]]), oe = ["id", "disabled"], ue = ["for"], re = {
  key: 0,
  class: "check__hint"
}, ce = /* @__PURE__ */ m({
  __name: "DCheckbox",
  props: /* @__PURE__ */ k({
    label: {},
    hint: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = x(e, "modelValue"), d = D();
    return (r, n) => (t(), a("div", {
      class: b(["check", { "check--off": e.disabled }])
    }, [
      V(f("input", {
        id: y(d),
        "onUpdate:modelValue": n[0] || (n[0] = (s) => l.value = s),
        class: "check__box",
        type: "checkbox",
        disabled: e.disabled
      }, null, 8, oe), [
        [G, l.value]
      ]),
      f("label", {
        for: y(d),
        class: "check__label"
      }, [
        h(r.$slots, "default", {}, () => [
          B(c(e.label), 1)
        ], !0),
        e.hint ? (t(), a("span", re, c(e.hint), 1)) : u("", !0)
      ], 8, ue)
    ], 2));
  }
}), E = /* @__PURE__ */ v(ce, [["__scopeId", "data-v-5fb92780"]]), fe = /* @__PURE__ */ m({
  __name: "DChip",
  props: {
    tone: { default: "neutral" },
    numeric: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(e) {
    return (l, d) => (t(), a("span", {
      class: b(["chip", `chip--${e.tone}`, { "chip--num": e.numeric }])
    }, [
      h(l.$slots, "default", {}, void 0, !0),
      e.removable ? (t(), a("button", {
        key: 0,
        type: "button",
        class: "chip__x",
        "aria-label": "Entfernen",
        onClick: d[0] || (d[0] = (r) => l.$emit("remove"))
      }, " ✕ ")) : u("", !0)
    ], 2));
  }
}), N = /* @__PURE__ */ v(fe, [["__scopeId", "data-v-30700fa0"]]), be = ["for"], me = { class: "field__control" }, ve = { class: "row" }, ye = ["id", "value", "disabled", "aria-label"], he = ["disabled", "aria-label"], $e = {
  key: 0,
  class: "field__hint"
}, ke = /* @__PURE__ */ m({
  __name: "DColorInput",
  props: /* @__PURE__ */ k({
    label: {},
    hint: {},
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = x(e, "modelValue"), d = D(), r = I(() => {
      const n = (l.value ?? "").trim();
      return /^#[0-9a-f]{6}$/i.test(n) ? n : /^#[0-9a-f]{3}$/i.test(n) ? "#" + [...n.slice(1)].map((s) => s + s).join("") : "#000000";
    });
    return (n, s) => (t(), a("div", {
      class: b(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (t(), a("label", {
        key: 0,
        class: "field__label",
        for: y(d)
      }, c(e.label), 9, be)) : u("", !0),
      f("div", me, [
        f("div", ve, [
          f("input", {
            id: y(d),
            class: "picker",
            type: "color",
            value: r.value,
            disabled: e.disabled,
            "aria-label": e.label ?? "Farbe",
            onInput: s[0] || (s[0] = (i) => l.value = i.target.value)
          }, null, 40, ye),
          V(f("input", {
            "onUpdate:modelValue": s[1] || (s[1] = (i) => l.value = i),
            class: "hex",
            type: "text",
            spellcheck: "false",
            disabled: e.disabled,
            "aria-label": e.label ? `${e.label} als Hexwert` : "Farbe als Hexwert"
          }, null, 8, he), [
            [g, l.value]
          ])
        ]),
        e.hint ? (t(), a("p", $e, c(e.hint), 1)) : u("", !0)
      ])
    ], 2));
  }
}), O = /* @__PURE__ */ v(ke, [["__scopeId", "data-v-0c4cf022"]]), xe = ["for"], Ve = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Be = { class: "field__control" }, De = ["id", "type", "disabled", "required", "min", "max", "aria-invalid"], we = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Ie = {
  key: 1,
  class: "field__hint"
}, ge = /* @__PURE__ */ m({
  __name: "DDateInput",
  props: /* @__PURE__ */ k({
    label: {},
    mode: { default: "date" },
    hint: {},
    error: {},
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 },
    min: {},
    max: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = x(e, "modelValue"), d = D(), r = { date: "date", time: "time", datetime: "datetime-local" };
    return (n, s) => (t(), a("div", {
      class: b(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (t(), a("label", {
        key: 0,
        class: "field__label",
        for: y(d)
      }, [
        B(c(e.label) + " ", 1),
        e.required ? (t(), a("span", Ve, "*")) : u("", !0)
      ], 8, xe)) : u("", !0),
      f("div", Be, [
        V(f("input", {
          id: y(d),
          "onUpdate:modelValue": s[0] || (s[0] = (i) => l.value = i),
          class: b(["input", { "input--invalid": !!e.error }]),
          type: r[e.mode],
          disabled: e.disabled,
          required: e.required,
          min: e.min,
          max: e.max,
          "aria-invalid": !!e.error || void 0
        }, null, 10, De), [
          [S, l.value]
        ]),
        e.error ? (t(), a("p", we, c(e.error), 1)) : e.hint ? (t(), a("p", Ie, c(e.hint), 1)) : u("", !0)
      ])
    ], 2));
  }
}), F = /* @__PURE__ */ v(ge, [["__scopeId", "data-v-3afdb10c"]]), qe = {
  key: 0,
  class: "rule__label"
}, Ce = /* @__PURE__ */ m({
  __name: "DDivider",
  props: {
    label: {}
  },
  setup(e) {
    return (l, d) => (t(), a("div", {
      class: b(["rule", { "rule--labelled": e.label }]),
      role: "separator"
    }, [
      e.label ? (t(), a("span", qe, c(e.label), 1)) : u("", !0)
    ], 2));
  }
}), L = /* @__PURE__ */ v(Ce, [["__scopeId", "data-v-521e9319"]]), Me = ["for"], Se = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, ze = { class: "field__control" }, Ke = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Te = {
  key: 1,
  class: "field__hint"
}, Ue = /* @__PURE__ */ m({
  __name: "DField",
  props: {
    label: {},
    for: {},
    hint: {},
    error: {},
    required: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, d) => (t(), a("div", {
      class: b(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (t(), a("label", {
        key: 0,
        class: "field__label",
        for: e.for
      }, [
        B(c(e.label) + " ", 1),
        e.required ? (t(), a("span", Se, "*")) : u("", !0)
      ], 8, Me)) : u("", !0),
      f("div", ze, [
        h(l.$slots, "default", {}, void 0, !0),
        e.error ? (t(), a("p", Ke, c(e.error), 1)) : e.hint ? (t(), a("p", Te, c(e.hint), 1)) : u("", !0)
      ])
    ], 2));
  }
}), j = /* @__PURE__ */ v(Ue, [["__scopeId", "data-v-bf447967"]]), Ee = ["aria-hidden", "aria-label", "role"], Ne = /* @__PURE__ */ m({
  __name: "DIcon",
  props: {
    name: {},
    size: { default: "md" },
    tone: {},
    decorative: { type: Boolean, default: !0 },
    label: {}
  },
  setup(e) {
    return (l, d) => (t(), a("i", {
      class: b(["icon", `icon--${e.size}`]),
      style: J(e.tone ? { color: `var(--${e.tone})` } : void 0),
      "aria-hidden": e.decorative ? "true" : void 0,
      "aria-label": e.decorative ? void 0 : e.label ?? e.name,
      role: e.decorative ? void 0 : "img"
    }, c(e.name), 15, Ee));
  }
}), R = /* @__PURE__ */ v(Ne, [["__scopeId", "data-v-15dffeec"]]), Oe = ["for"], Fe = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Le = { class: "field__control" }, je = ["id", "rows", "placeholder", "disabled", "readonly", "required", "aria-invalid"], Re = ["id", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "step", "aria-invalid"], He = {
  key: 2,
  class: "suffix"
}, Ae = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Pe = {
  key: 1,
  class: "field__hint"
}, We = /* @__PURE__ */ m({
  __name: "DInput",
  props: /* @__PURE__ */ k({
    label: {},
    type: { default: "text" },
    placeholder: {},
    hint: {},
    error: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    size: { default: "md" },
    rows: {},
    suffix: {},
    stacked: { type: Boolean, default: !1 },
    min: {},
    max: {},
    step: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = x(e, "modelValue"), d = e, r = D(), n = I(() => d.type === "number");
    return (s, i) => (t(), a("div", {
      class: b(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (t(), a("label", {
        key: 0,
        class: "field__label",
        for: y(r)
      }, [
        B(c(e.label) + " ", 1),
        e.required ? (t(), a("span", Fe, "*")) : u("", !0)
      ], 8, Oe)) : u("", !0),
      f("div", Le, [
        f("div", {
          class: b(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.rows ? V((t(), a("textarea", {
            key: 0,
            id: y(r),
            "onUpdate:modelValue": i[0] || (i[0] = (o) => l.value = o),
            class: "input input--area",
            rows: e.rows,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, null, 8, je)), [
            [g, l.value]
          ]) : V((t(), a("input", {
            key: 1,
            id: y(r),
            "onUpdate:modelValue": i[1] || (i[1] = (o) => l.value = o),
            class: b(["input", { "input--num": n.value }]),
            type: e.type,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            min: e.min,
            max: e.max,
            step: e.step,
            "aria-invalid": !!e.error || void 0
          }, null, 10, Re)), [
            [S, l.value]
          ]),
          e.suffix ? (t(), a("span", He, c(e.suffix), 1)) : u("", !0)
        ], 2),
        e.error ? (t(), a("p", Ae, c(e.error), 1)) : e.hint ? (t(), a("p", Pe, c(e.hint), 1)) : u("", !0)
      ])
    ], 2));
  }
}), H = /* @__PURE__ */ v(We, [["__scopeId", "data-v-fb05f36e"]]), Ye = ["aria-label"], Ze = {
  key: 0,
  class: "dialog__head"
}, Ge = { class: "dialog__title" }, Je = { class: "dialog__body" }, Qe = {
  key: 1,
  class: "dialog__foot"
}, Xe = /* @__PURE__ */ m({
  __name: "DModal",
  props: /* @__PURE__ */ k({
    title: {},
    size: { default: "md" },
    persistent: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ k(["cancel"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const d = x(e, "modelValue"), r = e, n = l;
    function s() {
      r.persistent || (d.value = !1, n("cancel"));
    }
    function i(o) {
      o.key === "Escape" && d.value && s();
    }
    return Q(d, (o) => {
      document.body.style.overflow = o ? "hidden" : "";
    }), X(() => window.addEventListener("keydown", i)), _(() => {
      window.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (o, $) => (t(), p(ee, { to: "body" }, [
      d.value ? (t(), a("div", {
        key: 0,
        class: "scrim",
        onClick: q(s, ["self"])
      }, [
        f("div", {
          class: b(["dialog", `dialog--${e.size}`]),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title
        }, [
          e.title || o.$slots.header ? (t(), a("header", Ze, [
            h(o.$slots, "header", {}, () => [
              f("h2", Ge, c(e.title), 1)
            ], !0),
            e.persistent ? u("", !0) : (t(), a("button", {
              key: 0,
              type: "button",
              class: "dialog__close",
              "aria-label": "Schließen",
              onClick: s
            }, " ✕ "))
          ])) : u("", !0),
          f("div", Je, [
            h(o.$slots, "default", {}, void 0, !0)
          ]),
          o.$slots.actions ? (t(), a("footer", Qe, [
            h(o.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 10, Ye)
      ])) : u("", !0)
    ]));
  }
}), A = /* @__PURE__ */ v(Xe, [["__scopeId", "data-v-03f9e875"]]), _e = ["for"], pe = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, el = { class: "field__control" }, ll = ["id", "disabled", "required", "aria-invalid"], tl = {
  key: 0,
  value: ""
}, al = ["value"], dl = {
  key: 0,
  class: "field__error",
  role: "alert"
}, il = {
  key: 1,
  class: "field__hint"
}, sl = /* @__PURE__ */ m({
  __name: "DSelect",
  props: /* @__PURE__ */ k({
    options: {},
    label: {},
    valueKey: { default: "uid" },
    labelKey: { default: "name" },
    placeholder: {},
    hint: {},
    error: {},
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    size: { default: "md" },
    clearable: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = x(e, "modelValue"), d = e, r = D(), n = I(
      () => (d.options ?? []).map((i) => {
        if (i === null || typeof i != "object")
          return { value: i, label: String(i) };
        const o = i, $ = d.valueKey in o ? o[d.valueKey] : o, w = d.labelKey in o ? o[d.labelKey] : $;
        return { value: $, label: String(w ?? "") };
      })
    ), s = I({
      get() {
        const i = n.value.findIndex((o) => o.value === l.value);
        return i >= 0 ? String(i) : "";
      },
      set(i) {
        l.value = i === "" ? void 0 : n.value[Number(i)]?.value;
      }
    });
    return (i, o) => (t(), a("div", {
      class: b(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (t(), a("label", {
        key: 0,
        class: "field__label",
        for: y(r)
      }, [
        B(c(e.label) + " ", 1),
        e.required ? (t(), a("span", pe, "*")) : u("", !0)
      ], 8, _e)) : u("", !0),
      f("div", el, [
        f("div", {
          class: b(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          V(f("select", {
            id: y(r),
            "onUpdate:modelValue": o[0] || (o[0] = ($) => s.value = $),
            class: "select",
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            e.clearable || l.value === void 0 ? (t(), a("option", tl, c(e.placeholder ?? "—"), 1)) : u("", !0),
            (t(!0), a(z, null, K(n.value, ($, w) => (t(), a("option", {
              key: w,
              value: String(w)
            }, c($.label), 9, al))), 128))
          ], 8, ll), [
            [le, s.value]
          ]),
          o[1] || (o[1] = f("span", {
            class: "chevron",
            "aria-hidden": "true"
          }, "▾", -1))
        ], 2),
        e.error ? (t(), a("p", dl, c(e.error), 1)) : e.hint ? (t(), a("p", il, c(e.hint), 1)) : u("", !0)
      ])
    ], 2));
  }
}), P = /* @__PURE__ */ v(sl, [["__scopeId", "data-v-3e122607"]]), nl = ["for"], ol = { class: "field__control row" }, ul = ["id", "min", "max", "step", "disabled"], rl = ["min", "max", "step", "disabled", "aria-label"], cl = {
  key: 0,
  class: "suffix"
}, fl = /* @__PURE__ */ m({
  __name: "DSlider",
  props: /* @__PURE__ */ k({
    label: {},
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    suffix: {},
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = x(e, "modelValue"), d = D();
    return (r, n) => (t(), a("div", {
      class: b(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (t(), a("label", {
        key: 0,
        class: "field__label",
        for: y(d)
      }, c(e.label), 9, nl)) : u("", !0),
      f("div", ol, [
        V(f("input", {
          id: y(d),
          "onUpdate:modelValue": n[0] || (n[0] = (s) => l.value = s),
          class: "range",
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled
        }, null, 8, ul), [
          [
            g,
            l.value,
            void 0,
            { number: !0 }
          ]
        ]),
        V(f("input", {
          "onUpdate:modelValue": n[1] || (n[1] = (s) => l.value = s),
          class: "num",
          type: "number",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label ? `${e.label} als Zahl` : "Wert"
        }, null, 8, rl), [
          [
            g,
            l.value,
            void 0,
            { number: !0 }
          ]
        ]),
        e.suffix ? (t(), a("span", cl, c(e.suffix), 1)) : u("", !0)
      ])
    ], 2));
  }
}), W = /* @__PURE__ */ v(fl, [["__scopeId", "data-v-ed7d97ce"]]), bl = ["aria-checked", "aria-label", "disabled"], ml = /* @__PURE__ */ m({
  __name: "DSwitch",
  props: /* @__PURE__ */ k({
    label: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = x(e, "modelValue");
    return (d, r) => (t(), a("div", {
      class: b(["sw", { "sw--off": e.disabled }])
    }, [
      f("button", {
        type: "button",
        role: "switch",
        "aria-checked": !!l.value,
        "aria-label": e.label,
        disabled: e.disabled,
        class: b(["sw__track", { on: l.value }]),
        onClick: r[0] || (r[0] = (n) => l.value = !l.value)
      }, [...r[2] || (r[2] = [
        f("span", { class: "sw__knob" }, null, -1)
      ])], 10, bl),
      e.label || d.$slots.default ? (t(), a("span", {
        key: 0,
        class: "sw__label",
        onClick: r[1] || (r[1] = (n) => !e.disabled && (l.value = !l.value))
      }, [
        h(d.$slots, "default", {}, () => [
          B(c(e.label), 1)
        ], !0)
      ])) : u("", !0)
    ], 2));
  }
}), Y = /* @__PURE__ */ v(ml, [["__scopeId", "data-v-70940a00"]]), vl = ["aria-label"], yl = ["aria-selected", "tabindex", "disabled", "onClick"], hl = {
  key: 0,
  class: "tab__count"
}, $l = /* @__PURE__ */ m({
  __name: "DTabs",
  props: /* @__PURE__ */ k({
    tabs: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = x(e, "modelValue"), d = e;
    function r(n) {
      const s = d.tabs.filter(($) => !$.disabled), i = s.findIndex(($) => $.id === l.value), o = s[(i + n + s.length) % s.length];
      o && (l.value = o.id);
    }
    return (n, s) => (t(), a("div", {
      class: "tabs",
      role: "tablist",
      "aria-label": e.label,
      onKeydown: [
        s[0] || (s[0] = C(q((i) => r(-1), ["prevent"]), ["left"])),
        s[1] || (s[1] = C(q((i) => r(1), ["prevent"]), ["right"]))
      ]
    }, [
      (t(!0), a(z, null, K(e.tabs, (i) => (t(), a("button", {
        key: i.id,
        type: "button",
        role: "tab",
        "aria-selected": l.value === i.id,
        tabindex: l.value === i.id ? 0 : -1,
        disabled: i.disabled,
        class: b(["tab", { on: l.value === i.id }]),
        onClick: (o) => l.value = i.id
      }, [
        B(c(i.label) + " ", 1),
        i.count !== void 0 ? (t(), a("span", hl, c(i.count), 1)) : u("", !0)
      ], 10, yl))), 128)),
      h(n.$slots, "actions", {}, void 0, !0)
    ], 40, vl));
  }
}), Z = /* @__PURE__ */ v($l, [["__scopeId", "data-v-f7c65d26"]]), kl = {
  DButton: T,
  DCard: U,
  DCheckbox: E,
  DChip: N,
  DColorInput: O,
  DDateInput: F,
  DDivider: L,
  DField: j,
  DIcon: R,
  DInput: H,
  DModal: A,
  DSelect: P,
  DSlider: W,
  DSwitch: Y,
  DTabs: Z
}, xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONTROLS: kl,
  DButton: T,
  DCard: U,
  DCheckbox: E,
  DChip: N,
  DColorInput: O,
  DDateInput: F,
  DDivider: L,
  DField: j,
  DIcon: R,
  DInput: H,
  DModal: A,
  DSelect: P,
  DSlider: W,
  DSwitch: Y,
  DTabs: Z
}, Symbol.toStringTag, { value: "Module" })), M = "org.eclipse.daanse.board.app.ui.vue.controls", Vl = "0.0.1-next.1";
async function Dl(e) {
  const l = globalThis.__tsm__;
  if (!l)
    throw new Error(`${M}: tsm runtime is not initialized`);
  l.register(M, xl, Vl, "ui.vue.controls"), await void 0;
}
async function wl(e) {
  await void 0;
}
export {
  kl as CONTROLS,
  T as DButton,
  U as DCard,
  E as DCheckbox,
  N as DChip,
  O as DColorInput,
  F as DDateInput,
  L as DDivider,
  j as DField,
  R as DIcon,
  H as DInput,
  A as DModal,
  P as DSelect,
  W as DSlider,
  Y as DSwitch,
  Z as DTabs,
  Dl as activate,
  wl as deactivate
};
