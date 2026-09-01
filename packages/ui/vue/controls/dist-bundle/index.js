(function(){var i="ui.vue.controls",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".btn[data-v-124239c3]{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;white-space:nowrap;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-124239c3]:hover:not(:disabled){border-color:var(--color-outline)}.btn[data-v-124239c3]:active:not(:disabled){transform:translateY(.5px)}.btn[data-v-124239c3]:disabled{opacity:.45;cursor:default}.btn[data-v-124239c3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.btn--sm[data-v-124239c3]{height:22px;padding:0 9px;font-size:var(--text-xs)}.btn--md[data-v-124239c3]{height:26px;padding:0 12px}.btn--lg[data-v-124239c3]{height:32px;padding:0 16px;font-size:var(--text-base)}.btn--block[data-v-124239c3]{display:flex;width:100%}.btn--primary[data-v-124239c3]{color:var(--color-onAccent);background-color:var(--color-accent);border-color:var(--color-accent);font-weight:600}.btn--primary[data-v-124239c3]:hover:not(:disabled){filter:brightness(1.08)}.btn--quiet[data-v-124239c3]{background-color:transparent;border-color:transparent;color:var(--color-dim)}.btn--quiet[data-v-124239c3]:hover:not(:disabled){color:var(--color-fg);background-color:var(--color-raised);border-color:var(--color-divider)}.btn--danger[data-v-124239c3]{color:var(--color-err);border-color:color-mix(in srgb,var(--color-err) 45%,transparent)}.btn--danger[data-v-124239c3]:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-err) 12%,transparent);border-color:var(--color-err)}.btn__spinner[data-v-124239c3]{width:11px;height:11px;flex:none;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:btn-spin-124239c3 .7s linear infinite}@keyframes btn-spin-124239c3{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.btn__spinner[data-v-124239c3]{animation-duration:2s}}.card[data-v-8c187da1]{display:flex;flex-direction:column;min-width:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.card--interactive[data-v-8c187da1]{cursor:pointer}.card--interactive[data-v-8c187da1]:hover{border-color:var(--color-outline)}.card__head[data-v-8c187da1]{display:flex;align-items:center;gap:8px;flex:none;height:var(--spacing-panelHeader);padding:0 10px;border-bottom:1px solid var(--color-divider)}.card__title[data-v-8c187da1]{margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim)}.card__spacer[data-v-8c187da1]{flex:1 1 auto}.card__body[data-v-8c187da1]{flex:1 1 auto;min-height:0}.card__body--padded[data-v-8c187da1]{padding:10px 12px}.check[data-v-5fb92780]{display:flex;align-items:baseline;gap:7px;margin-bottom:6px}.check--off[data-v-5fb92780]{opacity:.5}.check__box[data-v-5fb92780]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:pointer}.check__box[data-v-5fb92780]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.check__label[data-v-5fb92780]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.check__hint[data-v-5fb92780]{display:block;font-size:var(--text-xs);color:var(--color-dim)}.chip[data-v-30700fa0]{display:inline-flex;align-items:center;gap:4px;padding:1px 7px;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.5;border-radius:var(--radius-xs);white-space:nowrap}.chip--num[data-v-30700fa0]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.chip--neutral[data-v-30700fa0]{color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider)}.chip--accent[data-v-30700fa0]{color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent)}.chip--ok[data-v-30700fa0]{color:var(--color-ok);background-color:color-mix(in srgb,var(--color-ok) 14%,transparent)}.chip--warn[data-v-30700fa0]{color:var(--color-warn);background-color:color-mix(in srgb,var(--color-warn) 14%,transparent)}.chip--err[data-v-30700fa0]{color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 14%,transparent)}.chip__x[data-v-30700fa0]{font-size:9px;color:inherit;background:none;border:0;padding:0;cursor:pointer;opacity:.7}.chip__x[data-v-30700fa0]:hover{opacity:1}.field[data-v-0c4cf022]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-0c4cf022]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-0c4cf022]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-0c4cf022]{width:auto}.field__control[data-v-0c4cf022]{flex:1 1 auto;min-width:0}.field__hint[data-v-0c4cf022]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.row[data-v-0c4cf022]{display:flex;align-items:center;gap:6px}.picker[data-v-0c4cf022]{width:26px;height:26px;flex:none;padding:2px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.picker[data-v-0c4cf022]:focus-visible,.hex[data-v-0c4cf022]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.hex[data-v-0c4cf022]{flex:1 1 auto;min-width:0;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.picker[data-v-0c4cf022]:disabled,.hex[data-v-0c4cf022]:disabled{opacity:.5}.field[data-v-3afdb10c]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3afdb10c]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3afdb10c]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3afdb10c]{width:auto}.field__required[data-v-3afdb10c]{color:var(--color-err)}.field__control[data-v-3afdb10c]{flex:1 1 auto;min-width:0}.field__hint[data-v-3afdb10c],.field__error[data-v-3afdb10c]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.field__error[data-v-3afdb10c]{color:var(--color-err)}.input[data-v-3afdb10c]{width:100%;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.input--invalid[data-v-3afdb10c]{border-color:var(--color-err)}.input[data-v-3afdb10c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.input[data-v-3afdb10c]:disabled{opacity:.5}.rule[data-v-521e9319]{height:1px;margin:12px 0;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]{display:flex;align-items:center;gap:8px;height:auto;background:none;margin:14px 0 7px}.rule--labelled[data-v-521e9319]:before,.rule--labelled[data-v-521e9319]:after{content:\"\";height:1px;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]:before{width:10px;flex:none}.rule--labelled[data-v-521e9319]:after{flex:1 1 auto}.rule__label[data-v-521e9319]{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.field[data-v-bf447967]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-bf447967]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-bf447967]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-bf447967]{width:auto}.field__required[data-v-bf447967]{color:var(--color-err)}.field__control[data-v-bf447967]{flex:1 1 auto;min-width:0}.field__hint[data-v-bf447967],.field__error[data-v-bf447967]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-bf447967]{color:var(--color-err)}.fw[data-v-b6b4a10b]{position:absolute;display:flex;flex-direction:column;overflow:hidden;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.fw--docked[data-v-b6b4a10b]{border-radius:0}.fw--docked.fw--left[data-v-b6b4a10b]{border-left:0}.fw--docked.fw--right[data-v-b6b4a10b]{border-right:0}.fw--docked .fw__grip[data-v-b6b4a10b]{cursor:ew-resize}.fw__bar[data-v-b6b4a10b]{display:flex;align-items:center;gap:2px;flex:none;height:28px;padding:0 4px 0 10px;border-bottom:1px solid var(--color-divider);cursor:grab;touch-action:none;user-select:none}.fw__bar[data-v-b6b4a10b]:active{cursor:grabbing}.fw__bar[data-v-b6b4a10b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.fw__title[data-v-b6b4a10b]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.fw__act[data-v-b6b4a10b]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.fw__act[data-v-b6b4a10b]:hover{color:var(--color-fg);background-color:var(--color-raised)}.fw__act[data-v-b6b4a10b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.fw__body[data-v-b6b4a10b]{flex:1;min-height:0;overflow:auto}.fw__grip[data-v-b6b4a10b]{position:absolute;right:0;bottom:0;width:14px;height:14px;cursor:nwse-resize;touch-action:none}.fw__grip[data-v-b6b4a10b]:after{content:\"\";position:absolute;right:3px;bottom:3px;width:6px;height:6px;border-right:2px solid var(--color-outline, #3a4756);border-bottom:2px solid var(--color-outline, #3a4756)}.icon[data-v-15dffeec]{font-family:Material Icons,sans-serif;font-style:normal;font-weight:400;line-height:1;letter-spacing:normal;white-space:nowrap;direction:ltr;display:inline-block;vertical-align:middle;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-feature-settings:\"liga\";color:inherit}.icon--xs[data-v-15dffeec]{font-size:12px}.icon--sm[data-v-15dffeec]{font-size:14px}.icon--md[data-v-15dffeec]{font-size:16px}.icon--lg[data-v-15dffeec]{font-size:20px}.field[data-v-fb05f36e]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-fb05f36e]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-fb05f36e]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-fb05f36e]{width:auto}.field__required[data-v-fb05f36e]{color:var(--color-err)}.field__control[data-v-fb05f36e]{flex:1 1 auto;min-width:0}.field__hint[data-v-fb05f36e],.field__error[data-v-fb05f36e]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-fb05f36e]{color:var(--color-err)}.shell[data-v-fb05f36e]{display:flex;align-items:center;gap:6px;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-fb05f36e]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-fb05f36e]{border-color:var(--color-err)}.shell--off[data-v-fb05f36e]{opacity:.5}.shell--sm[data-v-fb05f36e]{height:22px}.shell--md[data-v-fb05f36e]{height:26px}.shell--lg[data-v-fb05f36e]{height:32px}.shell[data-v-fb05f36e]:has(.input--area){height:auto;padding:5px 8px}.input[data-v-fb05f36e]{flex:1 1 auto;min-width:0;padding:0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none}.shell--lg .input[data-v-fb05f36e]{font-size:var(--text-base)}.input--num[data-v-fb05f36e]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.input--area[data-v-fb05f36e]{resize:vertical;line-height:1.45}.input[data-v-fb05f36e]::placeholder{color:var(--color-dim);opacity:.75}.suffix[data-v-fb05f36e]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.scrim[data-v-03f9e875]{position:fixed;inset:0;z-index:40000;display:grid;place-items:center;padding:24px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(4px)}.dialog[data-v-03f9e875]{display:flex;flex-direction:column;max-height:100%;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.dialog--sm[data-v-03f9e875]{width:380px}.dialog--md[data-v-03f9e875]{width:560px}.dialog--lg[data-v-03f9e875]{width:840px}.dialog__head[data-v-03f9e875]{display:flex;align-items:center;gap:10px;flex:none;padding:9px 12px;border-bottom:1px solid var(--color-divider)}.dialog__title[data-v-03f9e875]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.dialog__close[data-v-03f9e875]{margin-left:auto;width:22px;height:22px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.dialog__close[data-v-03f9e875]:hover{color:var(--color-fg);background-color:var(--color-raised)}.dialog__close[data-v-03f9e875]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.dialog__body[data-v-03f9e875]{flex:1 1 auto;min-height:0;padding:14px 12px;overflow-y:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.dialog__foot[data-v-03f9e875]{display:flex;align-items:center;justify-content:flex-end;gap:7px;flex:none;padding:9px 12px;border-top:1px solid var(--color-divider)}.field[data-v-3e122607]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3e122607]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3e122607]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3e122607]{width:auto}.field__required[data-v-3e122607]{color:var(--color-err)}.field__control[data-v-3e122607]{flex:1 1 auto;min-width:0}.field__hint[data-v-3e122607],.field__error[data-v-3e122607]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-3e122607]{color:var(--color-err)}.shell[data-v-3e122607]{position:relative;display:flex;align-items:center;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-3e122607]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-3e122607]{border-color:var(--color-err)}.shell--off[data-v-3e122607]{opacity:.5}.shell--sm[data-v-3e122607]{height:22px}.shell--md[data-v-3e122607]{height:26px}.shell--lg[data-v-3e122607]{height:32px}.select[data-v-3e122607]{flex:1 1 auto;min-width:0;height:100%;padding:0 14px 0 0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none;appearance:none;cursor:pointer}.shell--lg .select[data-v-3e122607]{font-size:var(--text-base)}.select option[data-v-3e122607]{color:var(--color-fg);background-color:var(--color-pane)}.chevron[data-v-3e122607]{position:absolute;right:7px;font-size:9px;color:var(--color-dim);pointer-events:none}.field[data-v-ed7d97ce]{display:flex;align-items:center;gap:10px;margin-bottom:7px}.field--stacked[data-v-ed7d97ce]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-ed7d97ce]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-ed7d97ce]{width:auto}.field__control[data-v-ed7d97ce]{flex:1 1 auto;min-width:0}.row[data-v-ed7d97ce]{display:flex;align-items:center;gap:8px}.range[data-v-ed7d97ce]{flex:1 1 auto;min-width:0;accent-color:var(--color-accent);cursor:pointer}.range[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.num[data-v-ed7d97ce]{width:62px;flex:none;height:22px;padding:0 6px;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.num[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.suffix[data-v-ed7d97ce]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.range[data-v-ed7d97ce]:disabled,.num[data-v-ed7d97ce]:disabled{opacity:.5}.sw[data-v-70940a00]{display:flex;align-items:center;gap:8px;margin-bottom:6px}.sw--off[data-v-70940a00]{opacity:.5}.sw__track[data-v-70940a00]{position:relative;width:28px;height:15px;flex:none;padding:0;background-color:var(--color-outline);border:0;border-radius:8px;cursor:pointer}.sw__track.on[data-v-70940a00]{background-color:var(--color-accent)}.sw__track[data-v-70940a00]:disabled{cursor:default}.sw__track[data-v-70940a00]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.sw__knob[data-v-70940a00]{position:absolute;top:2px;left:2px;width:11px;height:11px;border-radius:50%;background-color:var(--color-pane);transition:left .12s ease}.sw__track.on .sw__knob[data-v-70940a00]{left:15px}@media(prefers-reduced-motion:reduce){.sw__knob[data-v-70940a00]{transition:none}}.sw__label[data-v-70940a00]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.tabs[data-v-f7c65d26]{display:flex;flex-wrap:wrap;align-items:stretch;gap:1px;min-height:var(--spacing-panelHeader);padding:0 6px;border-bottom:1px solid var(--color-divider)}.tab[data-v-f7c65d26]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 10px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab[data-v-f7c65d26]:hover:not(:disabled){color:var(--color-fg)}.tab[data-v-f7c65d26]:disabled{opacity:.45;cursor:default}.tab.on[data-v-f7c65d26]{color:var(--color-fg);font-weight:600}.tab.on[data-v-f7c65d26]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab[data-v-f7c65d26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.tab__count[data-v-f7c65d26]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}\n";})();
import { defineComponent as w, createElementBlock as i, openBlock as a, normalizeClass as y, createCommentVNode as v, renderSlot as g, createElementVNode as h, toDisplayString as b, mergeModels as I, useModel as S, useId as T, withDirectives as z, unref as B, vModelCheckbox as He, createTextVNode as W, computed as E, vModelText as P, vModelDynamic as ae, reactive as ne, ref as G, watch as ie, onMounted as de, onBeforeUnmount as oe, normalizeStyle as se, withKeys as N, withModifiers as V, createBlock as Ye, Teleport as Ee, Fragment as re, renderList as ue, vModelSelect as We } from "vue";
const Le = ["type", "disabled", "aria-busy"], Ne = {
  key: 0,
  class: "btn__spinner",
  "aria-hidden": "true"
}, Te = /* @__PURE__ */ w({
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
    return (t, o) => (a(), i("button", {
      type: e.type,
      class: y(["btn", `btn--${e.intent}`, `btn--${e.size}`, { "btn--block": e.block, "btn--busy": e.busy }]),
      disabled: e.disabled || e.busy,
      "aria-busy": e.busy || void 0
    }, [
      e.busy ? (a(), i("span", Ne)) : v("", !0),
      g(t.$slots, "default", {}, void 0, !0)
    ], 10, Le));
  }
}), x = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [d, f] of t)
    o[d] = f;
  return o;
}, ce = /* @__PURE__ */ x(Te, [["__scopeId", "data-v-124239c3"]]), Ke = {
  key: 0,
  class: "card__head"
}, Ue = { class: "card__title" }, Xe = /* @__PURE__ */ w({
  __name: "DCard",
  props: {
    title: {},
    padded: { type: Boolean, default: !0 },
    interactive: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), i("section", {
      class: y(["card", { "card--interactive": e.interactive }])
    }, [
      e.title || t.$slots.header ? (a(), i("header", Ke, [
        g(t.$slots, "header", {}, () => [
          h("h3", Ue, b(e.title), 1)
        ], !0),
        o[0] || (o[0] = h("span", { class: "card__spacer" }, null, -1)),
        g(t.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0),
      h("div", {
        class: y(["card__body", { "card__body--padded": e.padded }])
      }, [
        g(t.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), fe = /* @__PURE__ */ x(Xe, [["__scopeId", "data-v-8c187da1"]]), Ae = ["id", "disabled"], Fe = ["for"], Oe = {
  key: 0,
  class: "check__hint"
}, Pe = /* @__PURE__ */ w({
  __name: "DCheckbox",
  props: /* @__PURE__ */ I({
    label: {},
    hint: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = S(e, "modelValue"), o = T();
    return (d, f) => (a(), i("div", {
      class: y(["check", { "check--off": e.disabled }])
    }, [
      z(h("input", {
        id: B(o),
        "onUpdate:modelValue": f[0] || (f[0] = (u) => t.value = u),
        class: "check__box",
        type: "checkbox",
        disabled: e.disabled
      }, null, 8, Ae), [
        [He, t.value]
      ]),
      h("label", {
        for: B(o),
        class: "check__label"
      }, [
        g(d.$slots, "default", {}, () => [
          W(b(e.label), 1)
        ], !0),
        e.hint ? (a(), i("span", Oe, b(e.hint), 1)) : v("", !0)
      ], 8, Fe)
    ], 2));
  }
}), me = /* @__PURE__ */ x(Pe, [["__scopeId", "data-v-5fb92780"]]), je = /* @__PURE__ */ w({
  __name: "DChip",
  props: {
    tone: { default: "neutral" },
    numeric: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: y(["chip", `chip--${e.tone}`, { "chip--num": e.numeric }])
    }, [
      g(t.$slots, "default", {}, void 0, !0),
      e.removable ? (a(), i("button", {
        key: 0,
        type: "button",
        class: "chip__x",
        "aria-label": "Entfernen",
        onClick: o[0] || (o[0] = (d) => t.$emit("remove"))
      }, " ✕ ")) : v("", !0)
    ], 2));
  }
}), ve = /* @__PURE__ */ x(je, [["__scopeId", "data-v-30700fa0"]]), Re = ["for"], Ge = { class: "field__control" }, Je = { class: "row" }, Ze = ["id", "value", "disabled", "aria-label"], Qe = ["disabled", "aria-label"], _e = {
  key: 0,
  class: "field__hint"
}, pe = /* @__PURE__ */ w({
  __name: "DColorInput",
  props: /* @__PURE__ */ I({
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
    const t = S(e, "modelValue"), o = T(), d = E(() => {
      const f = (t.value ?? "").trim();
      return /^#[0-9a-f]{6}$/i.test(f) ? f : /^#[0-9a-f]{3}$/i.test(f) ? "#" + [...f.slice(1)].map((u) => u + u).join("") : "#000000";
    });
    return (f, u) => (a(), i("div", {
      class: y(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: B(o)
      }, b(e.label), 9, Re)) : v("", !0),
      h("div", Ge, [
        h("div", Je, [
          h("input", {
            id: B(o),
            class: "picker",
            type: "color",
            value: d.value,
            disabled: e.disabled,
            "aria-label": e.label ?? "Farbe",
            onInput: u[0] || (u[0] = (s) => t.value = s.target.value)
          }, null, 40, Ze),
          z(h("input", {
            "onUpdate:modelValue": u[1] || (u[1] = (s) => t.value = s),
            class: "hex",
            type: "text",
            spellcheck: "false",
            disabled: e.disabled,
            "aria-label": e.label ? `${e.label} als Hexwert` : "Farbe als Hexwert"
          }, null, 8, Qe), [
            [P, t.value]
          ])
        ]),
        e.hint ? (a(), i("p", _e, b(e.hint), 1)) : v("", !0)
      ])
    ], 2));
  }
}), be = /* @__PURE__ */ x(pe, [["__scopeId", "data-v-0c4cf022"]]), et = ["for"], tt = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, lt = { class: "field__control" }, at = ["id", "type", "disabled", "required", "min", "max", "aria-invalid"], nt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, it = {
  key: 1,
  class: "field__hint"
}, dt = /* @__PURE__ */ w({
  __name: "DDateInput",
  props: /* @__PURE__ */ I({
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
    const t = S(e, "modelValue"), o = T(), d = { date: "date", time: "time", datetime: "datetime-local" };
    return (f, u) => (a(), i("div", {
      class: y(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: B(o)
      }, [
        W(b(e.label) + " ", 1),
        e.required ? (a(), i("span", tt, "*")) : v("", !0)
      ], 8, et)) : v("", !0),
      h("div", lt, [
        z(h("input", {
          id: B(o),
          "onUpdate:modelValue": u[0] || (u[0] = (s) => t.value = s),
          class: y(["input", { "input--invalid": !!e.error }]),
          type: d[e.mode],
          disabled: e.disabled,
          required: e.required,
          min: e.min,
          max: e.max,
          "aria-invalid": !!e.error || void 0
        }, null, 10, at), [
          [ae, t.value]
        ]),
        e.error ? (a(), i("p", nt, b(e.error), 1)) : e.hint ? (a(), i("p", it, b(e.hint), 1)) : v("", !0)
      ])
    ], 2));
  }
}), he = /* @__PURE__ */ x(dt, [["__scopeId", "data-v-3afdb10c"]]), ot = {
  key: 0,
  class: "rule__label"
}, st = /* @__PURE__ */ w({
  __name: "DDivider",
  props: {
    label: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: y(["rule", { "rule--labelled": e.label }]),
      role: "separator"
    }, [
      e.label ? (a(), i("span", ot, b(e.label), 1)) : v("", !0)
    ], 2));
  }
}), ye = /* @__PURE__ */ x(st, [["__scopeId", "data-v-521e9319"]]), rt = ["for"], ut = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, ct = { class: "field__control" }, ft = {
  key: 0,
  class: "field__error",
  role: "alert"
}, mt = {
  key: 1,
  class: "field__hint"
}, vt = /* @__PURE__ */ w({
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
    return (t, o) => (a(), i("div", {
      class: y(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: e.for
      }, [
        W(b(e.label) + " ", 1),
        e.required ? (a(), i("span", ut, "*")) : v("", !0)
      ], 8, rt)) : v("", !0),
      h("div", ct, [
        g(t.$slots, "default", {}, void 0, !0),
        e.error ? (a(), i("p", ft, b(e.error), 1)) : e.hint ? (a(), i("p", mt, b(e.hint), 1)) : v("", !0)
      ])
    ], 2));
  }
}), ke = /* @__PURE__ */ x(vt, [["__scopeId", "data-v-bf447967"]]), K = ne(/* @__PURE__ */ new Map());
let bt = 0;
const $e = ne({ left: 240, right: 240 });
function p(e) {
  return $e[e];
}
function J(e, t) {
  $e[e] = t;
}
function ee(e, t, o, d) {
  const f = K.get(e);
  K.set(e, { side: t, want: o, min: d, seq: f?.seq ?? bt++ });
}
function te(e) {
  K.delete(e);
}
function we(e) {
  return [...K.entries()].filter(([, t]) => t.side === e).sort((t, o) => t[1].seq - o[1].seq);
}
function ht(e, t) {
  const o = K.get(e);
  if (!o) return null;
  const d = we(o.side);
  if (!d.length) return null;
  const f = d.reduce(($, [, q]) => $ + q.min, 0), u = f > t && f > 0 ? t / f : 1, s = Math.max(0, t - f * u), m = d.reduce(($, [, q]) => $ + Math.max(1, q.want), 0);
  let n = 0;
  for (let $ = 0; $ < d.length; $++) {
    const [q, H] = d[$], C = $ === d.length - 1 ? Math.max(0, t - n) : Math.round(H.min * u + s * Math.max(1, H.want) / m);
    if (q === e) return { y: n, h: C };
    n += C;
  }
  return null;
}
function yt(e) {
  return we(e).length;
}
const kt = ["aria-label"], $t = ["aria-label"], wt = { class: "fw__title" }, xt = ["aria-label"], gt = { class: "fw__body" }, Mt = ["aria-label"], O = 24, Dt = /* @__PURE__ */ w({
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
    const d = e, f = o, u = E(() => d.dockable || d.initial?.dock != null), s = { x: 16, y: 16, w: 240, h: 320, dock: null, freeY: 16, freeH: 320 };
    function m() {
      const l = { ...s, ...d.initial };
      if (l.freeY = l.y, l.freeH = l.h, !d.rememberAs) return l;
      try {
        const c = localStorage.getItem(d.rememberAs);
        if (!c) return l;
        const r = JSON.parse(c), k = (D, R) => Number.isFinite(D) ? D : R;
        return {
          x: k(r?.x, l.x),
          y: k(r?.y, l.y),
          w: k(r?.w, l.w),
          h: k(r?.h, l.h),
          dock: r?.dock === "left" || r?.dock === "right" ? r.dock : null,
          freeY: k(r?.freeY, l.y),
          freeH: k(r?.freeH, l.h)
        };
      } catch {
        return l;
      }
    }
    const n = G(m()), $ = G();
    function q() {
      if (d.rememberAs)
        try {
          localStorage.setItem(d.rememberAs, JSON.stringify(n.value));
        } catch {
        }
    }
    function H(l) {
      return Math.min(d.maxWidth, Math.max(d.minWidth, l));
    }
    function L() {
      const l = $.value?.offsetParent;
      return {
        width: l?.clientWidth ?? window.innerWidth,
        height: l?.clientHeight ?? window.innerHeight
      };
    }
    const C = E(() => d.rememberAs ?? d.title), Y = G({ width: 0, height: 0 });
    function U() {
      const l = n.value.dock;
      if (!l) return;
      const c = ht(C.value, Y.value.height);
      if (!c) return;
      const r = p(l);
      n.value = {
        ...n.value,
        w: r,
        x: l === "left" ? 0 : Math.max(0, Y.value.width - r),
        y: c.y,
        h: c.h
      };
    }
    ie(
      () => {
        const l = n.value.dock;
        return l ? `${yt(l)}:${p(l)}` : "";
      },
      (l) => {
        l && (Y.value = L(), U());
      }
    );
    function X(l, c) {
      const r = n.value;
      Y.value = c;
      const k = r.dock ? r.freeY : r.y, D = r.dock ? r.freeH : r.h;
      r.dock || J(l, H(r.w)), ee(C.value, l, D, d.minHeight), n.value = { ...r, dock: l, freeY: k, freeH: D }, U();
    }
    function Z() {
      const l = n.value;
      l.dock && (te(C.value), n.value = { ...l, y: l.freeY, h: l.freeH, dock: null });
    }
    let M = null;
    function Q(l) {
      if (!M) return;
      const c = L();
      if (M.kind === "move") {
        const k = n.value.w, D = Math.min(
          Math.max(0, M.fromX + (l.clientX - M.startX)),
          Math.max(0, c.width - k)
        ), R = Math.min(
          Math.max(0, M.fromY + (l.clientY - M.startY)),
          Math.max(0, c.height - 28)
        );
        u.value && D <= O ? X("left", c) : u.value && D + k >= c.width - O ? X("right", c) : (Z(), n.value = { ...n.value, x: D, y: R });
        return;
      }
      const r = H(M.fromW + (l.clientX - M.startX));
      if (n.value.dock) {
        Y.value = c, J(n.value.dock, r), U();
        return;
      }
      n.value = {
        ...n.value,
        w: r,
        h: Math.max(d.minHeight, M.fromH + (l.clientY - M.startY))
      };
    }
    function j() {
      M && q(), M = null, window.removeEventListener("pointermove", Q), window.removeEventListener("pointerup", j), document.body.style.userSelect = "";
    }
    function _(l) {
      M = l, window.addEventListener("pointermove", Q), window.addEventListener("pointerup", j), document.body.style.userSelect = "none";
    }
    const qe = (l) => _({ kind: "move", startX: l.clientX, startY: l.clientY, fromX: n.value.x, fromY: n.value.y }), Ce = (l) => _({ kind: "size", startX: l.clientX, startY: l.clientY, fromW: n.value.w, fromH: n.value.h });
    function A(l, c) {
      const r = L(), k = n.value.w, D = Math.min(Math.max(0, n.value.x + l), Math.max(0, r.width - k));
      u.value && D <= O ? X("left", r) : u.value && D + k >= r.width - O ? X("right", r) : (Z(), n.value = {
        ...n.value,
        x: D,
        y: Math.min(Math.max(0, n.value.y + c), Math.max(0, r.height - 28))
      }), q();
    }
    function F() {
      const l = L();
      Y.value = l;
      const c = n.value, r = Math.min(H(c.w), l.width);
      if (c.dock) {
        U();
        return;
      }
      const k = Math.min(c.h, l.height);
      n.value = {
        ...c,
        w: r,
        h: k,
        x: Math.min(Math.max(0, c.x), Math.max(0, l.width - r)),
        y: Math.min(Math.max(0, c.y), Math.max(0, l.height - k))
      };
    }
    de(() => {
      if (n.value.dock) {
        const l = L();
        Y.value = l, J(n.value.dock, H(n.value.w)), ee(C.value, n.value.dock, n.value.freeH, d.minHeight);
      }
      F(), window.addEventListener("resize", F);
    }), oe(() => {
      j(), te(C.value), window.removeEventListener("resize", F);
    });
    const ze = E(() => ({
      left: n.value.x + "px",
      top: n.value.y + "px",
      width: n.value.w + "px",
      height: n.value.h + "px",
      zIndex: String(d.layer)
    }));
    return t({ placement: n, keepInView: F }), (l, c) => (a(), i("aside", {
      ref_key: "root",
      ref: $,
      class: y([
        "fw",
        {
          "fw--docked": !!n.value.dock,
          "fw--left": n.value.dock === "left",
          "fw--right": n.value.dock === "right"
        }
      ]),
      style: se(ze.value),
      "aria-label": e.title
    }, [
      h("div", {
        class: "fw__bar",
        role: "toolbar",
        tabindex: "0",
        "aria-label": `${e.title} verschieben - mit den Pfeiltasten bewegen`,
        onPointerdown: c[2] || (c[2] = V((r) => qe(r), ["prevent"])),
        onKeydown: [
          c[3] || (c[3] = N(V((r) => A(-16, 0), ["prevent"]), ["left"])),
          c[4] || (c[4] = N(V((r) => A(16, 0), ["prevent"]), ["right"])),
          c[5] || (c[5] = N(V((r) => A(0, -16), ["prevent"]), ["up"])),
          c[6] || (c[6] = N(V((r) => A(0, 16), ["prevent"]), ["down"]))
        ]
      }, [
        h("span", wt, b(e.title), 1),
        g(l.$slots, "actions", {}, void 0, !0),
        e.closable ? (a(), i("button", {
          key: 0,
          type: "button",
          class: "fw__act",
          title: "Schließen",
          "aria-label": `${e.title} schließen`,
          onPointerdown: c[0] || (c[0] = V(() => {
          }, ["stop"])),
          onClick: c[1] || (c[1] = (r) => f("close"))
        }, " × ", 40, xt)) : v("", !0)
      ], 40, $t),
      h("div", gt, [
        g(l.$slots, "default", {}, void 0, !0)
      ]),
      e.resizable ? (a(), i("div", {
        key: 0,
        class: "fw__grip",
        role: "separator",
        "aria-label": `Größe von ${e.title}`,
        title: "Größe ändern",
        onPointerdown: c[7] || (c[7] = V((r) => Ce(r), ["prevent"]))
      }, null, 40, Mt)) : v("", !0)
    ], 14, kt));
  }
}), xe = /* @__PURE__ */ x(Dt, [["__scopeId", "data-v-b6b4a10b"]]), Bt = ["aria-hidden", "aria-label", "role"], Vt = /* @__PURE__ */ w({
  __name: "DIcon",
  props: {
    name: {},
    size: { default: "md" },
    tone: {},
    decorative: { type: Boolean, default: !0 },
    label: {}
  },
  setup(e) {
    return (t, o) => (a(), i("i", {
      class: y(["icon", `icon--${e.size}`]),
      style: se(e.tone ? { color: `var(--${e.tone})` } : void 0),
      "aria-hidden": e.decorative ? "true" : void 0,
      "aria-label": e.decorative ? void 0 : e.label ?? e.name,
      role: e.decorative ? void 0 : "img"
    }, b(e.name), 15, Bt));
  }
}), ge = /* @__PURE__ */ x(Vt, [["__scopeId", "data-v-15dffeec"]]), It = ["for"], St = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, qt = { class: "field__control" }, Ct = ["id", "rows", "placeholder", "disabled", "readonly", "required", "aria-invalid"], zt = ["id", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "step", "aria-invalid"], Ht = {
  key: 2,
  class: "suffix"
}, Yt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Et = {
  key: 1,
  class: "field__hint"
}, Wt = /* @__PURE__ */ w({
  __name: "DInput",
  props: /* @__PURE__ */ I({
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
    const t = S(e, "modelValue"), o = e, d = T(), f = E(() => o.type === "number");
    return (u, s) => (a(), i("div", {
      class: y(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: B(d)
      }, [
        W(b(e.label) + " ", 1),
        e.required ? (a(), i("span", St, "*")) : v("", !0)
      ], 8, It)) : v("", !0),
      h("div", qt, [
        h("div", {
          class: y(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.rows ? z((a(), i("textarea", {
            key: 0,
            id: B(d),
            "onUpdate:modelValue": s[0] || (s[0] = (m) => t.value = m),
            class: "input input--area",
            rows: e.rows,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, null, 8, Ct)), [
            [P, t.value]
          ]) : z((a(), i("input", {
            key: 1,
            id: B(d),
            "onUpdate:modelValue": s[1] || (s[1] = (m) => t.value = m),
            class: y(["input", { "input--num": f.value }]),
            type: e.type,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            min: e.min,
            max: e.max,
            step: e.step,
            "aria-invalid": !!e.error || void 0
          }, null, 10, zt)), [
            [ae, t.value]
          ]),
          e.suffix ? (a(), i("span", Ht, b(e.suffix), 1)) : v("", !0)
        ], 2),
        e.error ? (a(), i("p", Yt, b(e.error), 1)) : e.hint ? (a(), i("p", Et, b(e.hint), 1)) : v("", !0)
      ])
    ], 2));
  }
}), Me = /* @__PURE__ */ x(Wt, [["__scopeId", "data-v-fb05f36e"]]), Lt = ["aria-label"], Nt = {
  key: 0,
  class: "dialog__head"
}, Tt = { class: "dialog__title" }, Kt = { class: "dialog__body" }, Ut = {
  key: 1,
  class: "dialog__foot"
}, Xt = /* @__PURE__ */ w({
  __name: "DModal",
  props: /* @__PURE__ */ I({
    title: {},
    size: { default: "md" },
    persistent: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["cancel"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = S(e, "modelValue"), d = e, f = t;
    function u() {
      d.persistent || (o.value = !1, f("cancel"));
    }
    function s(m) {
      m.key === "Escape" && o.value && u();
    }
    return ie(o, (m) => {
      document.body.style.overflow = m ? "hidden" : "";
    }), de(() => window.addEventListener("keydown", s)), oe(() => {
      window.removeEventListener("keydown", s), document.body.style.overflow = "";
    }), (m, n) => (a(), Ye(Ee, { to: "body" }, [
      o.value ? (a(), i("div", {
        key: 0,
        class: "scrim",
        onClick: V(u, ["self"])
      }, [
        h("div", {
          class: y(["dialog", `dialog--${e.size}`]),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title
        }, [
          e.title || m.$slots.header ? (a(), i("header", Nt, [
            g(m.$slots, "header", {}, () => [
              h("h2", Tt, b(e.title), 1)
            ], !0),
            e.persistent ? v("", !0) : (a(), i("button", {
              key: 0,
              type: "button",
              class: "dialog__close",
              "aria-label": "Schließen",
              onClick: u
            }, " ✕ "))
          ])) : v("", !0),
          h("div", Kt, [
            g(m.$slots, "default", {}, void 0, !0)
          ]),
          m.$slots.actions ? (a(), i("footer", Ut, [
            g(m.$slots, "actions", {}, void 0, !0)
          ])) : v("", !0)
        ], 10, Lt)
      ])) : v("", !0)
    ]));
  }
}), De = /* @__PURE__ */ x(Xt, [["__scopeId", "data-v-03f9e875"]]), At = ["for"], Ft = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Ot = { class: "field__control" }, Pt = ["id", "disabled", "required", "aria-invalid"], jt = {
  key: 0,
  value: ""
}, Rt = ["value"], Gt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Jt = {
  key: 1,
  class: "field__hint"
}, Zt = /* @__PURE__ */ w({
  __name: "DSelect",
  props: /* @__PURE__ */ I({
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
    const t = S(e, "modelValue"), o = e, d = T(), f = E(
      () => (o.options ?? []).map((s) => {
        if (s === null || typeof s != "object")
          return { value: s, label: String(s) };
        const m = s, n = o.valueKey in m ? m[o.valueKey] : m, $ = o.labelKey in m ? m[o.labelKey] : n;
        return { value: n, label: String($ ?? "") };
      })
    ), u = E({
      get() {
        const s = f.value.findIndex((m) => m.value === t.value);
        return s >= 0 ? String(s) : "";
      },
      set(s) {
        t.value = s === "" ? void 0 : f.value[Number(s)]?.value;
      }
    });
    return (s, m) => (a(), i("div", {
      class: y(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: B(d)
      }, [
        W(b(e.label) + " ", 1),
        e.required ? (a(), i("span", Ft, "*")) : v("", !0)
      ], 8, At)) : v("", !0),
      h("div", Ot, [
        h("div", {
          class: y(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          z(h("select", {
            id: B(d),
            "onUpdate:modelValue": m[0] || (m[0] = (n) => u.value = n),
            class: "select",
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            e.clearable || t.value === void 0 ? (a(), i("option", jt, b(e.placeholder ?? "—"), 1)) : v("", !0),
            (a(!0), i(re, null, ue(f.value, (n, $) => (a(), i("option", {
              key: $,
              value: String($)
            }, b(n.label), 9, Rt))), 128))
          ], 8, Pt), [
            [We, u.value]
          ]),
          m[1] || (m[1] = h("span", {
            class: "chevron",
            "aria-hidden": "true"
          }, "▾", -1))
        ], 2),
        e.error ? (a(), i("p", Gt, b(e.error), 1)) : e.hint ? (a(), i("p", Jt, b(e.hint), 1)) : v("", !0)
      ])
    ], 2));
  }
}), Be = /* @__PURE__ */ x(Zt, [["__scopeId", "data-v-3e122607"]]), Qt = ["for"], _t = { class: "field__control row" }, pt = ["id", "min", "max", "step", "disabled"], el = ["min", "max", "step", "disabled", "aria-label"], tl = {
  key: 0,
  class: "suffix"
}, ll = /* @__PURE__ */ w({
  __name: "DSlider",
  props: /* @__PURE__ */ I({
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
    const t = S(e, "modelValue"), o = T();
    return (d, f) => (a(), i("div", {
      class: y(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: B(o)
      }, b(e.label), 9, Qt)) : v("", !0),
      h("div", _t, [
        z(h("input", {
          id: B(o),
          "onUpdate:modelValue": f[0] || (f[0] = (u) => t.value = u),
          class: "range",
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled
        }, null, 8, pt), [
          [
            P,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        z(h("input", {
          "onUpdate:modelValue": f[1] || (f[1] = (u) => t.value = u),
          class: "num",
          type: "number",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label ? `${e.label} als Zahl` : "Wert"
        }, null, 8, el), [
          [
            P,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        e.suffix ? (a(), i("span", tl, b(e.suffix), 1)) : v("", !0)
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ x(ll, [["__scopeId", "data-v-ed7d97ce"]]), al = ["aria-checked", "aria-label", "disabled"], nl = /* @__PURE__ */ w({
  __name: "DSwitch",
  props: /* @__PURE__ */ I({
    label: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = S(e, "modelValue");
    return (o, d) => (a(), i("div", {
      class: y(["sw", { "sw--off": e.disabled }])
    }, [
      h("button", {
        type: "button",
        role: "switch",
        "aria-checked": !!t.value,
        "aria-label": e.label,
        disabled: e.disabled,
        class: y(["sw__track", { on: t.value }]),
        onClick: d[0] || (d[0] = (f) => t.value = !t.value)
      }, [...d[2] || (d[2] = [
        h("span", { class: "sw__knob" }, null, -1)
      ])], 10, al),
      e.label || o.$slots.default ? (a(), i("span", {
        key: 0,
        class: "sw__label",
        onClick: d[1] || (d[1] = (f) => !e.disabled && (t.value = !t.value))
      }, [
        g(o.$slots, "default", {}, () => [
          W(b(e.label), 1)
        ], !0)
      ])) : v("", !0)
    ], 2));
  }
}), Ie = /* @__PURE__ */ x(nl, [["__scopeId", "data-v-70940a00"]]), il = ["aria-label"], dl = ["aria-selected", "tabindex", "disabled", "onClick"], ol = {
  key: 0,
  class: "tab__count"
}, sl = /* @__PURE__ */ w({
  __name: "DTabs",
  props: /* @__PURE__ */ I({
    tabs: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = S(e, "modelValue"), o = e;
    function d(f) {
      const u = o.tabs.filter((n) => !n.disabled), s = u.findIndex((n) => n.id === t.value), m = u[(s + f + u.length) % u.length];
      m && (t.value = m.id);
    }
    return (f, u) => (a(), i("div", {
      class: "tabs",
      role: "tablist",
      "aria-label": e.label,
      onKeydown: [
        u[0] || (u[0] = N(V((s) => d(-1), ["prevent"]), ["left"])),
        u[1] || (u[1] = N(V((s) => d(1), ["prevent"]), ["right"]))
      ]
    }, [
      (a(!0), i(re, null, ue(e.tabs, (s) => (a(), i("button", {
        key: s.id,
        type: "button",
        role: "tab",
        "aria-selected": t.value === s.id,
        tabindex: t.value === s.id ? 0 : -1,
        disabled: s.disabled,
        class: y(["tab", { on: t.value === s.id }]),
        onClick: (m) => t.value = s.id
      }, [
        W(b(s.label) + " ", 1),
        s.count !== void 0 ? (a(), i("span", ol, b(s.count), 1)) : v("", !0)
      ], 10, dl))), 128)),
      g(f.$slots, "actions", {}, void 0, !0)
    ], 40, il));
  }
}), Se = /* @__PURE__ */ x(sl, [["__scopeId", "data-v-f7c65d26"]]), rl = {
  DButton: ce,
  DCard: fe,
  DCheckbox: me,
  DChip: ve,
  DColorInput: be,
  DDateInput: he,
  DDivider: ye,
  DField: ke,
  DFloatingWindow: xe,
  DIcon: ge,
  DInput: Me,
  DModal: De,
  DSelect: Be,
  DSlider: Ve,
  DSwitch: Ie,
  DTabs: Se
}, ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONTROLS: rl,
  DButton: ce,
  DCard: fe,
  DCheckbox: me,
  DChip: ve,
  DColorInput: be,
  DDateInput: he,
  DDivider: ye,
  DField: ke,
  DFloatingWindow: xe,
  DIcon: ge,
  DInput: Me,
  DModal: De,
  DSelect: Be,
  DSlider: Ve,
  DSwitch: Ie,
  DTabs: Se
}, Symbol.toStringTag, { value: "Module" })), le = "org.eclipse.daanse.board.app.ui.vue.controls", cl = "0.0.1-next.1";
async function ml(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${le}: tsm runtime is not initialized`);
  t.register(le, ul, cl, "ui.vue.controls"), await void 0;
}
async function vl(e) {
  await void 0;
}
export {
  rl as CONTROLS,
  ce as DButton,
  fe as DCard,
  me as DCheckbox,
  ve as DChip,
  be as DColorInput,
  he as DDateInput,
  ye as DDivider,
  ke as DField,
  xe as DFloatingWindow,
  ge as DIcon,
  Me as DInput,
  De as DModal,
  Be as DSelect,
  Ve as DSlider,
  Ie as DSwitch,
  Se as DTabs,
  ml as activate,
  vl as deactivate
};
