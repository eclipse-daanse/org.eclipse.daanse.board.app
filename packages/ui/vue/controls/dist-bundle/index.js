(function(){var i="ui.vue.controls",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".btn[data-v-124239c3]{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;white-space:nowrap;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-124239c3]:hover:not(:disabled){border-color:var(--color-outline)}.btn[data-v-124239c3]:active:not(:disabled){transform:translateY(.5px)}.btn[data-v-124239c3]:disabled{opacity:.45;cursor:default}.btn[data-v-124239c3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.btn--sm[data-v-124239c3]{height:22px;padding:0 9px;font-size:var(--text-xs)}.btn--md[data-v-124239c3]{height:26px;padding:0 12px}.btn--lg[data-v-124239c3]{height:32px;padding:0 16px;font-size:var(--text-base)}.btn--block[data-v-124239c3]{display:flex;width:100%}.btn--primary[data-v-124239c3]{color:var(--color-onAccent);background-color:var(--color-accent);border-color:var(--color-accent);font-weight:600}.btn--primary[data-v-124239c3]:hover:not(:disabled){filter:brightness(1.08)}.btn--quiet[data-v-124239c3]{background-color:transparent;border-color:transparent;color:var(--color-dim)}.btn--quiet[data-v-124239c3]:hover:not(:disabled){color:var(--color-fg);background-color:var(--color-raised);border-color:var(--color-divider)}.btn--danger[data-v-124239c3]{color:var(--color-err);border-color:color-mix(in srgb,var(--color-err) 45%,transparent)}.btn--danger[data-v-124239c3]:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-err) 12%,transparent);border-color:var(--color-err)}.btn__spinner[data-v-124239c3]{width:11px;height:11px;flex:none;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:btn-spin-124239c3 .7s linear infinite}@keyframes btn-spin-124239c3{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.btn__spinner[data-v-124239c3]{animation-duration:2s}}.card[data-v-8c187da1]{display:flex;flex-direction:column;min-width:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.card--interactive[data-v-8c187da1]{cursor:pointer}.card--interactive[data-v-8c187da1]:hover{border-color:var(--color-outline)}.card__head[data-v-8c187da1]{display:flex;align-items:center;gap:8px;flex:none;height:var(--spacing-panelHeader);padding:0 10px;border-bottom:1px solid var(--color-divider)}.card__title[data-v-8c187da1]{margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim)}.card__spacer[data-v-8c187da1]{flex:1 1 auto}.card__body[data-v-8c187da1]{flex:1 1 auto;min-height:0}.card__body--padded[data-v-8c187da1]{padding:10px 12px}.check[data-v-5fb92780]{display:flex;align-items:baseline;gap:7px;margin-bottom:6px}.check--off[data-v-5fb92780]{opacity:.5}.check__box[data-v-5fb92780]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:pointer}.check__box[data-v-5fb92780]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.check__label[data-v-5fb92780]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.check__hint[data-v-5fb92780]{display:block;font-size:var(--text-xs);color:var(--color-dim)}.chip[data-v-30700fa0]{display:inline-flex;align-items:center;gap:4px;padding:1px 7px;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.5;border-radius:var(--radius-xs);white-space:nowrap}.chip--num[data-v-30700fa0]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.chip--neutral[data-v-30700fa0]{color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider)}.chip--accent[data-v-30700fa0]{color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent)}.chip--ok[data-v-30700fa0]{color:var(--color-ok);background-color:color-mix(in srgb,var(--color-ok) 14%,transparent)}.chip--warn[data-v-30700fa0]{color:var(--color-warn);background-color:color-mix(in srgb,var(--color-warn) 14%,transparent)}.chip--err[data-v-30700fa0]{color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 14%,transparent)}.chip__x[data-v-30700fa0]{font-size:9px;color:inherit;background:none;border:0;padding:0;cursor:pointer;opacity:.7}.chip__x[data-v-30700fa0]:hover{opacity:1}.field[data-v-0c4cf022]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-0c4cf022]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-0c4cf022]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-0c4cf022]{width:auto}.field__control[data-v-0c4cf022]{flex:1 1 auto;min-width:0}.field__hint[data-v-0c4cf022]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.row[data-v-0c4cf022]{display:flex;align-items:center;gap:6px}.picker[data-v-0c4cf022]{width:26px;height:26px;flex:none;padding:2px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.picker[data-v-0c4cf022]:focus-visible,.hex[data-v-0c4cf022]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.hex[data-v-0c4cf022]{flex:1 1 auto;min-width:0;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.picker[data-v-0c4cf022]:disabled,.hex[data-v-0c4cf022]:disabled{opacity:.5}.field[data-v-3afdb10c]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3afdb10c]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3afdb10c]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3afdb10c]{width:auto}.field__required[data-v-3afdb10c]{color:var(--color-err)}.field__control[data-v-3afdb10c]{flex:1 1 auto;min-width:0}.field__hint[data-v-3afdb10c],.field__error[data-v-3afdb10c]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.field__error[data-v-3afdb10c]{color:var(--color-err)}.input[data-v-3afdb10c]{width:100%;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.input--invalid[data-v-3afdb10c]{border-color:var(--color-err)}.input[data-v-3afdb10c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.input[data-v-3afdb10c]:disabled{opacity:.5}.rule[data-v-521e9319]{height:1px;margin:12px 0;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]{display:flex;align-items:center;gap:8px;height:auto;background:none;margin:14px 0 7px}.rule--labelled[data-v-521e9319]:before,.rule--labelled[data-v-521e9319]:after{content:\"\";height:1px;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]:before{width:10px;flex:none}.rule--labelled[data-v-521e9319]:after{flex:1 1 auto}.rule__label[data-v-521e9319]{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.field[data-v-bf447967]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-bf447967]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-bf447967]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-bf447967]{width:auto}.field__required[data-v-bf447967]{color:var(--color-err)}.field__control[data-v-bf447967]{flex:1 1 auto;min-width:0}.field__hint[data-v-bf447967],.field__error[data-v-bf447967]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-bf447967]{color:var(--color-err)}.fw[data-v-8406ae50]{position:absolute;display:flex;flex-direction:column;overflow:hidden;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.fw--docked[data-v-8406ae50]{border-radius:0}.fw--docked.fw--left[data-v-8406ae50]{border-left:0}.fw--docked.fw--right[data-v-8406ae50]{border-right:0}.fw--docked .fw__grip[data-v-8406ae50]{cursor:ew-resize}.fw__bar[data-v-8406ae50]{display:flex;align-items:center;gap:2px;flex:none;height:28px;padding:0 4px 0 10px;border-bottom:1px solid var(--color-divider);cursor:grab;touch-action:none;user-select:none}.fw__bar[data-v-8406ae50]:active{cursor:grabbing}.fw__bar[data-v-8406ae50]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.fw__title[data-v-8406ae50]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.fw__act[data-v-8406ae50]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.fw__act[data-v-8406ae50]:hover{color:var(--color-fg);background-color:var(--color-raised)}.fw__act[data-v-8406ae50]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.fw__body[data-v-8406ae50]{flex:1;min-height:0;overflow:auto}.fw__grip[data-v-8406ae50]{position:absolute;right:0;bottom:0;width:14px;height:14px;cursor:nwse-resize;touch-action:none}.fw__grip[data-v-8406ae50]:after{content:\"\";position:absolute;right:3px;bottom:3px;width:6px;height:6px;border-right:2px solid var(--color-outline, #3a4756);border-bottom:2px solid var(--color-outline, #3a4756)}.icon[data-v-15dffeec]{font-family:Material Icons,sans-serif;font-style:normal;font-weight:400;line-height:1;letter-spacing:normal;white-space:nowrap;direction:ltr;display:inline-block;vertical-align:middle;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-feature-settings:\"liga\";color:inherit}.icon--xs[data-v-15dffeec]{font-size:12px}.icon--sm[data-v-15dffeec]{font-size:14px}.icon--md[data-v-15dffeec]{font-size:16px}.icon--lg[data-v-15dffeec]{font-size:20px}.field[data-v-fb05f36e]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-fb05f36e]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-fb05f36e]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-fb05f36e]{width:auto}.field__required[data-v-fb05f36e]{color:var(--color-err)}.field__control[data-v-fb05f36e]{flex:1 1 auto;min-width:0}.field__hint[data-v-fb05f36e],.field__error[data-v-fb05f36e]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-fb05f36e]{color:var(--color-err)}.shell[data-v-fb05f36e]{display:flex;align-items:center;gap:6px;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-fb05f36e]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-fb05f36e]{border-color:var(--color-err)}.shell--off[data-v-fb05f36e]{opacity:.5}.shell--sm[data-v-fb05f36e]{height:22px}.shell--md[data-v-fb05f36e]{height:26px}.shell--lg[data-v-fb05f36e]{height:32px}.shell[data-v-fb05f36e]:has(.input--area){height:auto;padding:5px 8px}.input[data-v-fb05f36e]{flex:1 1 auto;min-width:0;padding:0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none}.shell--lg .input[data-v-fb05f36e]{font-size:var(--text-base)}.input--num[data-v-fb05f36e]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.input--area[data-v-fb05f36e]{resize:vertical;line-height:1.45}.input[data-v-fb05f36e]::placeholder{color:var(--color-dim);opacity:.75}.suffix[data-v-fb05f36e]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.scrim[data-v-03f9e875]{position:fixed;inset:0;z-index:40000;display:grid;place-items:center;padding:24px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(4px)}.dialog[data-v-03f9e875]{display:flex;flex-direction:column;max-height:100%;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.dialog--sm[data-v-03f9e875]{width:380px}.dialog--md[data-v-03f9e875]{width:560px}.dialog--lg[data-v-03f9e875]{width:840px}.dialog__head[data-v-03f9e875]{display:flex;align-items:center;gap:10px;flex:none;padding:9px 12px;border-bottom:1px solid var(--color-divider)}.dialog__title[data-v-03f9e875]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.dialog__close[data-v-03f9e875]{margin-left:auto;width:22px;height:22px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.dialog__close[data-v-03f9e875]:hover{color:var(--color-fg);background-color:var(--color-raised)}.dialog__close[data-v-03f9e875]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.dialog__body[data-v-03f9e875]{flex:1 1 auto;min-height:0;padding:14px 12px;overflow-y:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.dialog__foot[data-v-03f9e875]{display:flex;align-items:center;justify-content:flex-end;gap:7px;flex:none;padding:9px 12px;border-top:1px solid var(--color-divider)}.field[data-v-3e122607]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3e122607]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3e122607]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3e122607]{width:auto}.field__required[data-v-3e122607]{color:var(--color-err)}.field__control[data-v-3e122607]{flex:1 1 auto;min-width:0}.field__hint[data-v-3e122607],.field__error[data-v-3e122607]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-3e122607]{color:var(--color-err)}.shell[data-v-3e122607]{position:relative;display:flex;align-items:center;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-3e122607]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-3e122607]{border-color:var(--color-err)}.shell--off[data-v-3e122607]{opacity:.5}.shell--sm[data-v-3e122607]{height:22px}.shell--md[data-v-3e122607]{height:26px}.shell--lg[data-v-3e122607]{height:32px}.select[data-v-3e122607]{flex:1 1 auto;min-width:0;height:100%;padding:0 14px 0 0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none;appearance:none;cursor:pointer}.shell--lg .select[data-v-3e122607]{font-size:var(--text-base)}.select option[data-v-3e122607]{color:var(--color-fg);background-color:var(--color-pane)}.chevron[data-v-3e122607]{position:absolute;right:7px;font-size:9px;color:var(--color-dim);pointer-events:none}.field[data-v-ed7d97ce]{display:flex;align-items:center;gap:10px;margin-bottom:7px}.field--stacked[data-v-ed7d97ce]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-ed7d97ce]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-ed7d97ce]{width:auto}.field__control[data-v-ed7d97ce]{flex:1 1 auto;min-width:0}.row[data-v-ed7d97ce]{display:flex;align-items:center;gap:8px}.range[data-v-ed7d97ce]{flex:1 1 auto;min-width:0;accent-color:var(--color-accent);cursor:pointer}.range[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.num[data-v-ed7d97ce]{width:62px;flex:none;height:22px;padding:0 6px;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.num[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.suffix[data-v-ed7d97ce]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.range[data-v-ed7d97ce]:disabled,.num[data-v-ed7d97ce]:disabled{opacity:.5}.sw[data-v-70940a00]{display:flex;align-items:center;gap:8px;margin-bottom:6px}.sw--off[data-v-70940a00]{opacity:.5}.sw__track[data-v-70940a00]{position:relative;width:28px;height:15px;flex:none;padding:0;background-color:var(--color-outline);border:0;border-radius:8px;cursor:pointer}.sw__track.on[data-v-70940a00]{background-color:var(--color-accent)}.sw__track[data-v-70940a00]:disabled{cursor:default}.sw__track[data-v-70940a00]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.sw__knob[data-v-70940a00]{position:absolute;top:2px;left:2px;width:11px;height:11px;border-radius:50%;background-color:var(--color-pane);transition:left .12s ease}.sw__track.on .sw__knob[data-v-70940a00]{left:15px}@media(prefers-reduced-motion:reduce){.sw__knob[data-v-70940a00]{transition:none}}.sw__label[data-v-70940a00]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.tabs[data-v-f7c65d26]{display:flex;flex-wrap:wrap;align-items:stretch;gap:1px;min-height:var(--spacing-panelHeader);padding:0 6px;border-bottom:1px solid var(--color-divider)}.tab[data-v-f7c65d26]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 10px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab[data-v-f7c65d26]:hover:not(:disabled){color:var(--color-fg)}.tab[data-v-f7c65d26]:disabled{opacity:.45;cursor:default}.tab.on[data-v-f7c65d26]{color:var(--color-fg);font-weight:600}.tab.on[data-v-f7c65d26]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab[data-v-f7c65d26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.tab__count[data-v-f7c65d26]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}\n";})();
import { defineComponent as w, createElementBlock as i, openBlock as n, normalizeClass as h, createCommentVNode as m, renderSlot as g, createElementVNode as b, toDisplayString as v, mergeModels as q, useModel as C, useId as N, withDirectives as H, unref as B, vModelCheckbox as ze, createTextVNode as Y, computed as L, vModelText as O, vModelDynamic as le, reactive as ae, ref as R, watch as ne, onMounted as ie, onBeforeUnmount as de, normalizeStyle as oe, withKeys as W, withModifiers as S, createBlock as He, Teleport as Ye, Fragment as se, renderList as re, vModelSelect as Ee } from "vue";
const We = ["type", "disabled", "aria-busy"], Le = {
  key: 0,
  class: "btn__spinner",
  "aria-hidden": "true"
}, Ne = /* @__PURE__ */ w({
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
    return (t, o) => (n(), i("button", {
      type: e.type,
      class: h(["btn", `btn--${e.intent}`, `btn--${e.size}`, { "btn--block": e.block, "btn--busy": e.busy }]),
      disabled: e.disabled || e.busy,
      "aria-busy": e.busy || void 0
    }, [
      e.busy ? (n(), i("span", Le)) : m("", !0),
      g(t.$slots, "default", {}, void 0, !0)
    ], 10, We));
  }
}), x = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [d, c] of t)
    o[d] = c;
  return o;
}, ue = /* @__PURE__ */ x(Ne, [["__scopeId", "data-v-124239c3"]]), Te = {
  key: 0,
  class: "card__head"
}, Ke = { class: "card__title" }, Ue = /* @__PURE__ */ w({
  __name: "DCard",
  props: {
    title: {},
    padded: { type: Boolean, default: !0 },
    interactive: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (n(), i("section", {
      class: h(["card", { "card--interactive": e.interactive }])
    }, [
      e.title || t.$slots.header ? (n(), i("header", Te, [
        g(t.$slots, "header", {}, () => [
          b("h3", Ke, v(e.title), 1)
        ], !0),
        o[0] || (o[0] = b("span", { class: "card__spacer" }, null, -1)),
        g(t.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0),
      b("div", {
        class: h(["card__body", { "card__body--padded": e.padded }])
      }, [
        g(t.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ce = /* @__PURE__ */ x(Ue, [["__scopeId", "data-v-8c187da1"]]), Xe = ["id", "disabled"], Ae = ["for"], Fe = {
  key: 0,
  class: "check__hint"
}, Oe = /* @__PURE__ */ w({
  __name: "DCheckbox",
  props: /* @__PURE__ */ q({
    label: {},
    hint: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = C(e, "modelValue"), o = N();
    return (d, c) => (n(), i("div", {
      class: h(["check", { "check--off": e.disabled }])
    }, [
      H(b("input", {
        id: B(o),
        "onUpdate:modelValue": c[0] || (c[0] = (f) => t.value = f),
        class: "check__box",
        type: "checkbox",
        disabled: e.disabled
      }, null, 8, Xe), [
        [ze, t.value]
      ]),
      b("label", {
        for: B(o),
        class: "check__label"
      }, [
        g(d.$slots, "default", {}, () => [
          Y(v(e.label), 1)
        ], !0),
        e.hint ? (n(), i("span", Fe, v(e.hint), 1)) : m("", !0)
      ], 8, Ae)
    ], 2));
  }
}), fe = /* @__PURE__ */ x(Oe, [["__scopeId", "data-v-5fb92780"]]), Pe = /* @__PURE__ */ w({
  __name: "DChip",
  props: {
    tone: { default: "neutral" },
    numeric: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(e) {
    return (t, o) => (n(), i("span", {
      class: h(["chip", `chip--${e.tone}`, { "chip--num": e.numeric }])
    }, [
      g(t.$slots, "default", {}, void 0, !0),
      e.removable ? (n(), i("button", {
        key: 0,
        type: "button",
        class: "chip__x",
        "aria-label": "Entfernen",
        onClick: o[0] || (o[0] = (d) => t.$emit("remove"))
      }, " ✕ ")) : m("", !0)
    ], 2));
  }
}), me = /* @__PURE__ */ x(Pe, [["__scopeId", "data-v-30700fa0"]]), je = ["for"], Re = { class: "field__control" }, Ge = { class: "row" }, Je = ["id", "value", "disabled", "aria-label"], Ze = ["disabled", "aria-label"], Qe = {
  key: 0,
  class: "field__hint"
}, _e = /* @__PURE__ */ w({
  __name: "DColorInput",
  props: /* @__PURE__ */ q({
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
    const t = C(e, "modelValue"), o = N(), d = L(() => {
      const c = (t.value ?? "").trim();
      return /^#[0-9a-f]{6}$/i.test(c) ? c : /^#[0-9a-f]{3}$/i.test(c) ? "#" + [...c.slice(1)].map((f) => f + f).join("") : "#000000";
    });
    return (c, f) => (n(), i("div", {
      class: h(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        class: "field__label",
        for: B(o)
      }, v(e.label), 9, je)) : m("", !0),
      b("div", Re, [
        b("div", Ge, [
          b("input", {
            id: B(o),
            class: "picker",
            type: "color",
            value: d.value,
            disabled: e.disabled,
            "aria-label": e.label ?? "Farbe",
            onInput: f[0] || (f[0] = (s) => t.value = s.target.value)
          }, null, 40, Je),
          H(b("input", {
            "onUpdate:modelValue": f[1] || (f[1] = (s) => t.value = s),
            class: "hex",
            type: "text",
            spellcheck: "false",
            disabled: e.disabled,
            "aria-label": e.label ? `${e.label} als Hexwert` : "Farbe als Hexwert"
          }, null, 8, Ze), [
            [O, t.value]
          ])
        ]),
        e.hint ? (n(), i("p", Qe, v(e.hint), 1)) : m("", !0)
      ])
    ], 2));
  }
}), ve = /* @__PURE__ */ x(_e, [["__scopeId", "data-v-0c4cf022"]]), pe = ["for"], et = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, tt = { class: "field__control" }, lt = ["id", "type", "disabled", "required", "min", "max", "aria-invalid"], at = {
  key: 0,
  class: "field__error",
  role: "alert"
}, nt = {
  key: 1,
  class: "field__hint"
}, it = /* @__PURE__ */ w({
  __name: "DDateInput",
  props: /* @__PURE__ */ q({
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
    const t = C(e, "modelValue"), o = N(), d = { date: "date", time: "time", datetime: "datetime-local" };
    return (c, f) => (n(), i("div", {
      class: h(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        class: "field__label",
        for: B(o)
      }, [
        Y(v(e.label) + " ", 1),
        e.required ? (n(), i("span", et, "*")) : m("", !0)
      ], 8, pe)) : m("", !0),
      b("div", tt, [
        H(b("input", {
          id: B(o),
          "onUpdate:modelValue": f[0] || (f[0] = (s) => t.value = s),
          class: h(["input", { "input--invalid": !!e.error }]),
          type: d[e.mode],
          disabled: e.disabled,
          required: e.required,
          min: e.min,
          max: e.max,
          "aria-invalid": !!e.error || void 0
        }, null, 10, lt), [
          [le, t.value]
        ]),
        e.error ? (n(), i("p", at, v(e.error), 1)) : e.hint ? (n(), i("p", nt, v(e.hint), 1)) : m("", !0)
      ])
    ], 2));
  }
}), be = /* @__PURE__ */ x(it, [["__scopeId", "data-v-3afdb10c"]]), dt = {
  key: 0,
  class: "rule__label"
}, ot = /* @__PURE__ */ w({
  __name: "DDivider",
  props: {
    label: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: h(["rule", { "rule--labelled": e.label }]),
      role: "separator"
    }, [
      e.label ? (n(), i("span", dt, v(e.label), 1)) : m("", !0)
    ], 2));
  }
}), he = /* @__PURE__ */ x(ot, [["__scopeId", "data-v-521e9319"]]), st = ["for"], rt = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, ut = { class: "field__control" }, ct = {
  key: 0,
  class: "field__error",
  role: "alert"
}, ft = {
  key: 1,
  class: "field__hint"
}, mt = /* @__PURE__ */ w({
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
    return (t, o) => (n(), i("div", {
      class: h(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        class: "field__label",
        for: e.for
      }, [
        Y(v(e.label) + " ", 1),
        e.required ? (n(), i("span", rt, "*")) : m("", !0)
      ], 8, st)) : m("", !0),
      b("div", ut, [
        g(t.$slots, "default", {}, void 0, !0),
        e.error ? (n(), i("p", ct, v(e.error), 1)) : e.hint ? (n(), i("p", ft, v(e.hint), 1)) : m("", !0)
      ])
    ], 2));
  }
}), ye = /* @__PURE__ */ x(mt, [["__scopeId", "data-v-bf447967"]]), T = ae(/* @__PURE__ */ new Map());
let vt = 0;
const ke = ae({ left: 240, right: 240 });
function _(e) {
  return ke[e];
}
function G(e, t) {
  ke[e] = t;
}
function p(e, t, o, d) {
  const c = T.get(e);
  T.set(e, { side: t, want: o, min: d, seq: c?.seq ?? vt++ });
}
function ee(e) {
  T.delete(e);
}
function $e(e) {
  return [...T.entries()].filter(([, t]) => t.side === e).sort((t, o) => t[1].seq - o[1].seq);
}
function bt(e, t) {
  const o = T.get(e);
  if (!o) return null;
  const d = $e(o.side);
  if (!d.length) return null;
  const c = d.reduce(($, [, V]) => $ + V.min, 0), f = c > t && c > 0 ? t / c : 1, s = Math.max(0, t - c * f), l = d.reduce(($, [, V]) => $ + Math.max(1, V.want), 0);
  let y = 0;
  for (let $ = 0; $ < d.length; $++) {
    const [V, z] = d[$], I = $ === d.length - 1 ? Math.max(0, t - y) : Math.round(z.min * f + s * Math.max(1, z.want) / l);
    if (V === e) return { y, h: I };
    y += I;
  }
  return null;
}
function ht(e) {
  return $e(e).length;
}
const yt = ["aria-label"], kt = ["aria-label"], $t = { class: "fw__title" }, wt = ["aria-label"], xt = { class: "fw__body" }, gt = ["aria-label"], F = 24, Mt = /* @__PURE__ */ w({
  __name: "DFloatingWindow",
  props: {
    title: {},
    initial: {},
    rememberAs: {},
    resizable: { type: Boolean, default: !0 },
    dockable: { type: Boolean, default: !1 },
    minWidth: { default: 160 },
    maxWidth: { default: 480 },
    minHeight: { default: 120 },
    closable: { type: Boolean, default: !0 },
    layer: { default: 2e4 }
  },
  emits: ["close"],
  setup(e, { expose: t, emit: o }) {
    const d = e, c = o, f = { x: 16, y: 16, w: 240, h: 320, dock: null, freeY: 16, freeH: 320 };
    function s() {
      const a = { ...f, ...d.initial };
      if (a.freeY = a.y, a.freeH = a.h, !d.rememberAs) return a;
      try {
        const u = localStorage.getItem(d.rememberAs);
        if (!u) return a;
        const r = JSON.parse(u), k = (D, j) => Number.isFinite(D) ? D : j;
        return {
          x: k(r?.x, a.x),
          y: k(r?.y, a.y),
          w: k(r?.w, a.w),
          h: k(r?.h, a.h),
          dock: r?.dock === "left" || r?.dock === "right" ? r.dock : null,
          freeY: k(r?.freeY, a.y),
          freeH: k(r?.freeH, a.h)
        };
      } catch {
        return a;
      }
    }
    const l = R(s()), y = R();
    function $() {
      if (d.rememberAs)
        try {
          localStorage.setItem(d.rememberAs, JSON.stringify(l.value));
        } catch {
        }
    }
    function V(a) {
      return Math.min(d.maxWidth, Math.max(d.minWidth, a));
    }
    function z() {
      const a = y.value?.offsetParent;
      return {
        width: a?.clientWidth ?? window.innerWidth,
        height: a?.clientHeight ?? window.innerHeight
      };
    }
    const E = L(() => d.rememberAs ?? d.title), I = R({ width: 0, height: 0 });
    function K() {
      const a = l.value.dock;
      if (!a) return;
      const u = bt(E.value, I.value.height);
      if (!u) return;
      const r = _(a);
      l.value = {
        ...l.value,
        w: r,
        x: a === "left" ? 0 : Math.max(0, I.value.width - r),
        y: u.y,
        h: u.h
      };
    }
    ne(
      () => {
        const a = l.value.dock;
        return a ? `${ht(a)}:${_(a)}` : "";
      },
      (a) => {
        a && (I.value = z(), K());
      }
    );
    function U(a, u) {
      const r = l.value;
      I.value = u;
      const k = r.dock ? r.freeY : r.y, D = r.dock ? r.freeH : r.h;
      r.dock || G(a, V(r.w)), p(E.value, a, D, d.minHeight), l.value = { ...r, dock: a, freeY: k, freeH: D }, K();
    }
    function J() {
      const a = l.value;
      a.dock && (ee(E.value), l.value = { ...a, y: a.freeY, h: a.freeH, dock: null });
    }
    let M = null;
    function Z(a) {
      if (!M) return;
      const u = z();
      if (M.kind === "move") {
        const k = l.value.w, D = Math.min(
          Math.max(0, M.fromX + (a.clientX - M.startX)),
          Math.max(0, u.width - k)
        ), j = Math.min(
          Math.max(0, M.fromY + (a.clientY - M.startY)),
          Math.max(0, u.height - 28)
        );
        d.dockable && D <= F ? U("left", u) : d.dockable && D + k >= u.width - F ? U("right", u) : (J(), l.value = { ...l.value, x: D, y: j });
        return;
      }
      const r = V(M.fromW + (a.clientX - M.startX));
      if (l.value.dock) {
        I.value = u, G(l.value.dock, r), K();
        return;
      }
      l.value = {
        ...l.value,
        w: r,
        h: Math.max(d.minHeight, M.fromH + (a.clientY - M.startY))
      };
    }
    function P() {
      M && $(), M = null, window.removeEventListener("pointermove", Z), window.removeEventListener("pointerup", P), document.body.style.userSelect = "";
    }
    function Q(a) {
      M = a, window.addEventListener("pointermove", Z), window.addEventListener("pointerup", P), document.body.style.userSelect = "none";
    }
    const Se = (a) => Q({ kind: "move", startX: a.clientX, startY: a.clientY, fromX: l.value.x, fromY: l.value.y }), qe = (a) => Q({ kind: "size", startX: a.clientX, startY: a.clientY, fromW: l.value.w, fromH: l.value.h });
    function X(a, u) {
      const r = z(), k = l.value.w, D = Math.min(Math.max(0, l.value.x + a), Math.max(0, r.width - k));
      d.dockable && D <= F ? U("left", r) : d.dockable && D + k >= r.width - F ? U("right", r) : (J(), l.value = {
        ...l.value,
        x: D,
        y: Math.min(Math.max(0, l.value.y + u), Math.max(0, r.height - 28))
      }), $();
    }
    function A() {
      const a = z();
      I.value = a;
      const u = l.value, r = Math.min(V(u.w), a.width);
      if (u.dock) {
        K();
        return;
      }
      const k = Math.min(u.h, a.height);
      l.value = {
        ...u,
        w: r,
        h: k,
        x: Math.min(Math.max(0, u.x), Math.max(0, a.width - r)),
        y: Math.min(Math.max(0, u.y), Math.max(0, a.height - k))
      };
    }
    ie(() => {
      if (l.value.dock) {
        const a = z();
        I.value = a, G(l.value.dock, V(l.value.w)), p(E.value, l.value.dock, l.value.freeH, d.minHeight);
      }
      A(), window.addEventListener("resize", A);
    }), de(() => {
      P(), ee(E.value), window.removeEventListener("resize", A);
    });
    const Ce = L(() => ({
      left: l.value.x + "px",
      top: l.value.y + "px",
      width: l.value.w + "px",
      height: l.value.h + "px",
      zIndex: String(d.layer)
    }));
    return t({ placement: l, keepInView: A }), (a, u) => (n(), i("aside", {
      ref_key: "root",
      ref: y,
      class: h([
        "fw",
        {
          "fw--docked": !!l.value.dock,
          "fw--left": l.value.dock === "left",
          "fw--right": l.value.dock === "right"
        }
      ]),
      style: oe(Ce.value),
      "aria-label": e.title
    }, [
      b("div", {
        class: "fw__bar",
        role: "toolbar",
        tabindex: "0",
        "aria-label": `${e.title} verschieben - mit den Pfeiltasten bewegen`,
        onPointerdown: u[2] || (u[2] = S((r) => Se(r), ["prevent"])),
        onKeydown: [
          u[3] || (u[3] = W(S((r) => X(-16, 0), ["prevent"]), ["left"])),
          u[4] || (u[4] = W(S((r) => X(16, 0), ["prevent"]), ["right"])),
          u[5] || (u[5] = W(S((r) => X(0, -16), ["prevent"]), ["up"])),
          u[6] || (u[6] = W(S((r) => X(0, 16), ["prevent"]), ["down"]))
        ]
      }, [
        b("span", $t, v(e.title), 1),
        g(a.$slots, "actions", {}, void 0, !0),
        e.closable ? (n(), i("button", {
          key: 0,
          type: "button",
          class: "fw__act",
          title: "Schließen",
          "aria-label": `${e.title} schließen`,
          onPointerdown: u[0] || (u[0] = S(() => {
          }, ["stop"])),
          onClick: u[1] || (u[1] = (r) => c("close"))
        }, " × ", 40, wt)) : m("", !0)
      ], 40, kt),
      b("div", xt, [
        g(a.$slots, "default", {}, void 0, !0)
      ]),
      e.resizable ? (n(), i("div", {
        key: 0,
        class: "fw__grip",
        role: "separator",
        "aria-label": `Größe von ${e.title}`,
        title: "Größe ändern",
        onPointerdown: u[7] || (u[7] = S((r) => qe(r), ["prevent"]))
      }, null, 40, gt)) : m("", !0)
    ], 14, yt));
  }
}), we = /* @__PURE__ */ x(Mt, [["__scopeId", "data-v-8406ae50"]]), Dt = ["aria-hidden", "aria-label", "role"], Bt = /* @__PURE__ */ w({
  __name: "DIcon",
  props: {
    name: {},
    size: { default: "md" },
    tone: {},
    decorative: { type: Boolean, default: !0 },
    label: {}
  },
  setup(e) {
    return (t, o) => (n(), i("i", {
      class: h(["icon", `icon--${e.size}`]),
      style: oe(e.tone ? { color: `var(--${e.tone})` } : void 0),
      "aria-hidden": e.decorative ? "true" : void 0,
      "aria-label": e.decorative ? void 0 : e.label ?? e.name,
      role: e.decorative ? void 0 : "img"
    }, v(e.name), 15, Dt));
  }
}), xe = /* @__PURE__ */ x(Bt, [["__scopeId", "data-v-15dffeec"]]), Vt = ["for"], It = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, St = { class: "field__control" }, qt = ["id", "rows", "placeholder", "disabled", "readonly", "required", "aria-invalid"], Ct = ["id", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "step", "aria-invalid"], zt = {
  key: 2,
  class: "suffix"
}, Ht = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Yt = {
  key: 1,
  class: "field__hint"
}, Et = /* @__PURE__ */ w({
  __name: "DInput",
  props: /* @__PURE__ */ q({
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
    const t = C(e, "modelValue"), o = e, d = N(), c = L(() => o.type === "number");
    return (f, s) => (n(), i("div", {
      class: h(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        class: "field__label",
        for: B(d)
      }, [
        Y(v(e.label) + " ", 1),
        e.required ? (n(), i("span", It, "*")) : m("", !0)
      ], 8, Vt)) : m("", !0),
      b("div", St, [
        b("div", {
          class: h(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.rows ? H((n(), i("textarea", {
            key: 0,
            id: B(d),
            "onUpdate:modelValue": s[0] || (s[0] = (l) => t.value = l),
            class: "input input--area",
            rows: e.rows,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, null, 8, qt)), [
            [O, t.value]
          ]) : H((n(), i("input", {
            key: 1,
            id: B(d),
            "onUpdate:modelValue": s[1] || (s[1] = (l) => t.value = l),
            class: h(["input", { "input--num": c.value }]),
            type: e.type,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            min: e.min,
            max: e.max,
            step: e.step,
            "aria-invalid": !!e.error || void 0
          }, null, 10, Ct)), [
            [le, t.value]
          ]),
          e.suffix ? (n(), i("span", zt, v(e.suffix), 1)) : m("", !0)
        ], 2),
        e.error ? (n(), i("p", Ht, v(e.error), 1)) : e.hint ? (n(), i("p", Yt, v(e.hint), 1)) : m("", !0)
      ])
    ], 2));
  }
}), ge = /* @__PURE__ */ x(Et, [["__scopeId", "data-v-fb05f36e"]]), Wt = ["aria-label"], Lt = {
  key: 0,
  class: "dialog__head"
}, Nt = { class: "dialog__title" }, Tt = { class: "dialog__body" }, Kt = {
  key: 1,
  class: "dialog__foot"
}, Ut = /* @__PURE__ */ w({
  __name: "DModal",
  props: /* @__PURE__ */ q({
    title: {},
    size: { default: "md" },
    persistent: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ q(["cancel"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = C(e, "modelValue"), d = e, c = t;
    function f() {
      d.persistent || (o.value = !1, c("cancel"));
    }
    function s(l) {
      l.key === "Escape" && o.value && f();
    }
    return ne(o, (l) => {
      document.body.style.overflow = l ? "hidden" : "";
    }), ie(() => window.addEventListener("keydown", s)), de(() => {
      window.removeEventListener("keydown", s), document.body.style.overflow = "";
    }), (l, y) => (n(), He(Ye, { to: "body" }, [
      o.value ? (n(), i("div", {
        key: 0,
        class: "scrim",
        onClick: S(f, ["self"])
      }, [
        b("div", {
          class: h(["dialog", `dialog--${e.size}`]),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title
        }, [
          e.title || l.$slots.header ? (n(), i("header", Lt, [
            g(l.$slots, "header", {}, () => [
              b("h2", Nt, v(e.title), 1)
            ], !0),
            e.persistent ? m("", !0) : (n(), i("button", {
              key: 0,
              type: "button",
              class: "dialog__close",
              "aria-label": "Schließen",
              onClick: f
            }, " ✕ "))
          ])) : m("", !0),
          b("div", Tt, [
            g(l.$slots, "default", {}, void 0, !0)
          ]),
          l.$slots.actions ? (n(), i("footer", Kt, [
            g(l.$slots, "actions", {}, void 0, !0)
          ])) : m("", !0)
        ], 10, Wt)
      ])) : m("", !0)
    ]));
  }
}), Me = /* @__PURE__ */ x(Ut, [["__scopeId", "data-v-03f9e875"]]), Xt = ["for"], At = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Ft = { class: "field__control" }, Ot = ["id", "disabled", "required", "aria-invalid"], Pt = {
  key: 0,
  value: ""
}, jt = ["value"], Rt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Gt = {
  key: 1,
  class: "field__hint"
}, Jt = /* @__PURE__ */ w({
  __name: "DSelect",
  props: /* @__PURE__ */ q({
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
    const t = C(e, "modelValue"), o = e, d = N(), c = L(
      () => (o.options ?? []).map((s) => {
        if (s === null || typeof s != "object")
          return { value: s, label: String(s) };
        const l = s, y = o.valueKey in l ? l[o.valueKey] : l, $ = o.labelKey in l ? l[o.labelKey] : y;
        return { value: y, label: String($ ?? "") };
      })
    ), f = L({
      get() {
        const s = c.value.findIndex((l) => l.value === t.value);
        return s >= 0 ? String(s) : "";
      },
      set(s) {
        t.value = s === "" ? void 0 : c.value[Number(s)]?.value;
      }
    });
    return (s, l) => (n(), i("div", {
      class: h(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        class: "field__label",
        for: B(d)
      }, [
        Y(v(e.label) + " ", 1),
        e.required ? (n(), i("span", At, "*")) : m("", !0)
      ], 8, Xt)) : m("", !0),
      b("div", Ft, [
        b("div", {
          class: h(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          H(b("select", {
            id: B(d),
            "onUpdate:modelValue": l[0] || (l[0] = (y) => f.value = y),
            class: "select",
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            e.clearable || t.value === void 0 ? (n(), i("option", Pt, v(e.placeholder ?? "—"), 1)) : m("", !0),
            (n(!0), i(se, null, re(c.value, (y, $) => (n(), i("option", {
              key: $,
              value: String($)
            }, v(y.label), 9, jt))), 128))
          ], 8, Ot), [
            [Ee, f.value]
          ]),
          l[1] || (l[1] = b("span", {
            class: "chevron",
            "aria-hidden": "true"
          }, "▾", -1))
        ], 2),
        e.error ? (n(), i("p", Rt, v(e.error), 1)) : e.hint ? (n(), i("p", Gt, v(e.hint), 1)) : m("", !0)
      ])
    ], 2));
  }
}), De = /* @__PURE__ */ x(Jt, [["__scopeId", "data-v-3e122607"]]), Zt = ["for"], Qt = { class: "field__control row" }, _t = ["id", "min", "max", "step", "disabled"], pt = ["min", "max", "step", "disabled", "aria-label"], el = {
  key: 0,
  class: "suffix"
}, tl = /* @__PURE__ */ w({
  __name: "DSlider",
  props: /* @__PURE__ */ q({
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
    const t = C(e, "modelValue"), o = N();
    return (d, c) => (n(), i("div", {
      class: h(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        class: "field__label",
        for: B(o)
      }, v(e.label), 9, Zt)) : m("", !0),
      b("div", Qt, [
        H(b("input", {
          id: B(o),
          "onUpdate:modelValue": c[0] || (c[0] = (f) => t.value = f),
          class: "range",
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled
        }, null, 8, _t), [
          [
            O,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        H(b("input", {
          "onUpdate:modelValue": c[1] || (c[1] = (f) => t.value = f),
          class: "num",
          type: "number",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label ? `${e.label} als Zahl` : "Wert"
        }, null, 8, pt), [
          [
            O,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        e.suffix ? (n(), i("span", el, v(e.suffix), 1)) : m("", !0)
      ])
    ], 2));
  }
}), Be = /* @__PURE__ */ x(tl, [["__scopeId", "data-v-ed7d97ce"]]), ll = ["aria-checked", "aria-label", "disabled"], al = /* @__PURE__ */ w({
  __name: "DSwitch",
  props: /* @__PURE__ */ q({
    label: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = C(e, "modelValue");
    return (o, d) => (n(), i("div", {
      class: h(["sw", { "sw--off": e.disabled }])
    }, [
      b("button", {
        type: "button",
        role: "switch",
        "aria-checked": !!t.value,
        "aria-label": e.label,
        disabled: e.disabled,
        class: h(["sw__track", { on: t.value }]),
        onClick: d[0] || (d[0] = (c) => t.value = !t.value)
      }, [...d[2] || (d[2] = [
        b("span", { class: "sw__knob" }, null, -1)
      ])], 10, ll),
      e.label || o.$slots.default ? (n(), i("span", {
        key: 0,
        class: "sw__label",
        onClick: d[1] || (d[1] = (c) => !e.disabled && (t.value = !t.value))
      }, [
        g(o.$slots, "default", {}, () => [
          Y(v(e.label), 1)
        ], !0)
      ])) : m("", !0)
    ], 2));
  }
}), Ve = /* @__PURE__ */ x(al, [["__scopeId", "data-v-70940a00"]]), nl = ["aria-label"], il = ["aria-selected", "tabindex", "disabled", "onClick"], dl = {
  key: 0,
  class: "tab__count"
}, ol = /* @__PURE__ */ w({
  __name: "DTabs",
  props: /* @__PURE__ */ q({
    tabs: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = C(e, "modelValue"), o = e;
    function d(c) {
      const f = o.tabs.filter((y) => !y.disabled), s = f.findIndex((y) => y.id === t.value), l = f[(s + c + f.length) % f.length];
      l && (t.value = l.id);
    }
    return (c, f) => (n(), i("div", {
      class: "tabs",
      role: "tablist",
      "aria-label": e.label,
      onKeydown: [
        f[0] || (f[0] = W(S((s) => d(-1), ["prevent"]), ["left"])),
        f[1] || (f[1] = W(S((s) => d(1), ["prevent"]), ["right"]))
      ]
    }, [
      (n(!0), i(se, null, re(e.tabs, (s) => (n(), i("button", {
        key: s.id,
        type: "button",
        role: "tab",
        "aria-selected": t.value === s.id,
        tabindex: t.value === s.id ? 0 : -1,
        disabled: s.disabled,
        class: h(["tab", { on: t.value === s.id }]),
        onClick: (l) => t.value = s.id
      }, [
        Y(v(s.label) + " ", 1),
        s.count !== void 0 ? (n(), i("span", dl, v(s.count), 1)) : m("", !0)
      ], 10, il))), 128)),
      g(c.$slots, "actions", {}, void 0, !0)
    ], 40, nl));
  }
}), Ie = /* @__PURE__ */ x(ol, [["__scopeId", "data-v-f7c65d26"]]), sl = {
  DButton: ue,
  DCard: ce,
  DCheckbox: fe,
  DChip: me,
  DColorInput: ve,
  DDateInput: be,
  DDivider: he,
  DField: ye,
  DFloatingWindow: we,
  DIcon: xe,
  DInput: ge,
  DModal: Me,
  DSelect: De,
  DSlider: Be,
  DSwitch: Ve,
  DTabs: Ie
}, rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONTROLS: sl,
  DButton: ue,
  DCard: ce,
  DCheckbox: fe,
  DChip: me,
  DColorInput: ve,
  DDateInput: be,
  DDivider: he,
  DField: ye,
  DFloatingWindow: we,
  DIcon: xe,
  DInput: ge,
  DModal: Me,
  DSelect: De,
  DSlider: Be,
  DSwitch: Ve,
  DTabs: Ie
}, Symbol.toStringTag, { value: "Module" })), te = "org.eclipse.daanse.board.app.ui.vue.controls", ul = "0.0.1-next.1";
async function fl(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${te}: tsm runtime is not initialized`);
  t.register(te, rl, ul, "ui.vue.controls"), await void 0;
}
async function ml(e) {
  await void 0;
}
export {
  sl as CONTROLS,
  ue as DButton,
  ce as DCard,
  fe as DCheckbox,
  me as DChip,
  ve as DColorInput,
  be as DDateInput,
  he as DDivider,
  ye as DField,
  we as DFloatingWindow,
  xe as DIcon,
  ge as DInput,
  Me as DModal,
  De as DSelect,
  Be as DSlider,
  Ve as DSwitch,
  Ie as DTabs,
  fl as activate,
  ml as deactivate
};
