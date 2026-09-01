(function(){var i="ui.vue.controls",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".btn[data-v-124239c3]{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;white-space:nowrap;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-124239c3]:hover:not(:disabled){border-color:var(--color-outline)}.btn[data-v-124239c3]:active:not(:disabled){transform:translateY(.5px)}.btn[data-v-124239c3]:disabled{opacity:.45;cursor:default}.btn[data-v-124239c3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.btn--sm[data-v-124239c3]{height:22px;padding:0 9px;font-size:var(--text-xs)}.btn--md[data-v-124239c3]{height:26px;padding:0 12px}.btn--lg[data-v-124239c3]{height:32px;padding:0 16px;font-size:var(--text-base)}.btn--block[data-v-124239c3]{display:flex;width:100%}.btn--primary[data-v-124239c3]{color:var(--color-onAccent);background-color:var(--color-accent);border-color:var(--color-accent);font-weight:600}.btn--primary[data-v-124239c3]:hover:not(:disabled){filter:brightness(1.08)}.btn--quiet[data-v-124239c3]{background-color:transparent;border-color:transparent;color:var(--color-dim)}.btn--quiet[data-v-124239c3]:hover:not(:disabled){color:var(--color-fg);background-color:var(--color-raised);border-color:var(--color-divider)}.btn--danger[data-v-124239c3]{color:var(--color-err);border-color:color-mix(in srgb,var(--color-err) 45%,transparent)}.btn--danger[data-v-124239c3]:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-err) 12%,transparent);border-color:var(--color-err)}.btn__spinner[data-v-124239c3]{width:11px;height:11px;flex:none;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:btn-spin-124239c3 .7s linear infinite}@keyframes btn-spin-124239c3{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.btn__spinner[data-v-124239c3]{animation-duration:2s}}.card[data-v-8c187da1]{display:flex;flex-direction:column;min-width:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.card--interactive[data-v-8c187da1]{cursor:pointer}.card--interactive[data-v-8c187da1]:hover{border-color:var(--color-outline)}.card__head[data-v-8c187da1]{display:flex;align-items:center;gap:8px;flex:none;height:var(--spacing-panelHeader);padding:0 10px;border-bottom:1px solid var(--color-divider)}.card__title[data-v-8c187da1]{margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim)}.card__spacer[data-v-8c187da1]{flex:1 1 auto}.card__body[data-v-8c187da1]{flex:1 1 auto;min-height:0}.card__body--padded[data-v-8c187da1]{padding:10px 12px}.check[data-v-5fb92780]{display:flex;align-items:baseline;gap:7px;margin-bottom:6px}.check--off[data-v-5fb92780]{opacity:.5}.check__box[data-v-5fb92780]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:pointer}.check__box[data-v-5fb92780]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.check__label[data-v-5fb92780]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.check__hint[data-v-5fb92780]{display:block;font-size:var(--text-xs);color:var(--color-dim)}.chip[data-v-30700fa0]{display:inline-flex;align-items:center;gap:4px;padding:1px 7px;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.5;border-radius:var(--radius-xs);white-space:nowrap}.chip--num[data-v-30700fa0]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.chip--neutral[data-v-30700fa0]{color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider)}.chip--accent[data-v-30700fa0]{color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent)}.chip--ok[data-v-30700fa0]{color:var(--color-ok);background-color:color-mix(in srgb,var(--color-ok) 14%,transparent)}.chip--warn[data-v-30700fa0]{color:var(--color-warn);background-color:color-mix(in srgb,var(--color-warn) 14%,transparent)}.chip--err[data-v-30700fa0]{color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 14%,transparent)}.chip__x[data-v-30700fa0]{font-size:9px;color:inherit;background:none;border:0;padding:0;cursor:pointer;opacity:.7}.chip__x[data-v-30700fa0]:hover{opacity:1}.field[data-v-0c4cf022]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-0c4cf022]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-0c4cf022]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-0c4cf022]{width:auto}.field__control[data-v-0c4cf022]{flex:1 1 auto;min-width:0}.field__hint[data-v-0c4cf022]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.row[data-v-0c4cf022]{display:flex;align-items:center;gap:6px}.picker[data-v-0c4cf022]{width:26px;height:26px;flex:none;padding:2px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.picker[data-v-0c4cf022]:focus-visible,.hex[data-v-0c4cf022]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.hex[data-v-0c4cf022]{flex:1 1 auto;min-width:0;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.picker[data-v-0c4cf022]:disabled,.hex[data-v-0c4cf022]:disabled{opacity:.5}.field[data-v-3afdb10c]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3afdb10c]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3afdb10c]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3afdb10c]{width:auto}.field__required[data-v-3afdb10c]{color:var(--color-err)}.field__control[data-v-3afdb10c]{flex:1 1 auto;min-width:0}.field__hint[data-v-3afdb10c],.field__error[data-v-3afdb10c]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.field__error[data-v-3afdb10c]{color:var(--color-err)}.input[data-v-3afdb10c]{width:100%;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.input--invalid[data-v-3afdb10c]{border-color:var(--color-err)}.input[data-v-3afdb10c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.input[data-v-3afdb10c]:disabled{opacity:.5}.rule[data-v-521e9319]{height:1px;margin:12px 0;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]{display:flex;align-items:center;gap:8px;height:auto;background:none;margin:14px 0 7px}.rule--labelled[data-v-521e9319]:before,.rule--labelled[data-v-521e9319]:after{content:\"\";height:1px;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]:before{width:10px;flex:none}.rule--labelled[data-v-521e9319]:after{flex:1 1 auto}.rule__label[data-v-521e9319]{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.field[data-v-bf447967]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-bf447967]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-bf447967]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-bf447967]{width:auto}.field__required[data-v-bf447967]{color:var(--color-err)}.field__control[data-v-bf447967]{flex:1 1 auto;min-width:0}.field__hint[data-v-bf447967],.field__error[data-v-bf447967]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-bf447967]{color:var(--color-err)}.fw[data-v-cb688645]{position:absolute;display:flex;flex-direction:column;overflow:hidden;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.fw--docked[data-v-cb688645]{border-radius:0}.fw--docked.fw--left[data-v-cb688645]{border-left:0}.fw--docked.fw--right[data-v-cb688645]{border-right:0}.fw--docked .fw__grip[data-v-cb688645]{cursor:ew-resize}.fw__bar[data-v-cb688645]{display:flex;align-items:center;gap:2px;flex:none;height:28px;padding:0 4px 0 10px;border-bottom:1px solid var(--color-divider);cursor:grab;touch-action:none;user-select:none}.fw__bar[data-v-cb688645]:active{cursor:grabbing}.fw__bar[data-v-cb688645]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.fw__title[data-v-cb688645]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.fw__act[data-v-cb688645]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.fw__act[data-v-cb688645]:hover{color:var(--color-fg);background-color:var(--color-raised)}.fw__act[data-v-cb688645]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.fw__body[data-v-cb688645]{flex:1;min-height:0;overflow:auto}.fw__grip[data-v-cb688645]{position:absolute;right:0;bottom:0;width:14px;height:14px;cursor:nwse-resize;touch-action:none}.fw__grip[data-v-cb688645]:after{content:\"\";position:absolute;right:3px;bottom:3px;width:6px;height:6px;border-right:2px solid var(--color-outline, #3a4756);border-bottom:2px solid var(--color-outline, #3a4756)}.icon[data-v-15dffeec]{font-family:Material Icons,sans-serif;font-style:normal;font-weight:400;line-height:1;letter-spacing:normal;white-space:nowrap;direction:ltr;display:inline-block;vertical-align:middle;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-feature-settings:\"liga\";color:inherit}.icon--xs[data-v-15dffeec]{font-size:12px}.icon--sm[data-v-15dffeec]{font-size:14px}.icon--md[data-v-15dffeec]{font-size:16px}.icon--lg[data-v-15dffeec]{font-size:20px}.field[data-v-fb05f36e]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-fb05f36e]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-fb05f36e]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-fb05f36e]{width:auto}.field__required[data-v-fb05f36e]{color:var(--color-err)}.field__control[data-v-fb05f36e]{flex:1 1 auto;min-width:0}.field__hint[data-v-fb05f36e],.field__error[data-v-fb05f36e]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-fb05f36e]{color:var(--color-err)}.shell[data-v-fb05f36e]{display:flex;align-items:center;gap:6px;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-fb05f36e]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-fb05f36e]{border-color:var(--color-err)}.shell--off[data-v-fb05f36e]{opacity:.5}.shell--sm[data-v-fb05f36e]{height:22px}.shell--md[data-v-fb05f36e]{height:26px}.shell--lg[data-v-fb05f36e]{height:32px}.shell[data-v-fb05f36e]:has(.input--area){height:auto;padding:5px 8px}.input[data-v-fb05f36e]{flex:1 1 auto;min-width:0;padding:0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none}.shell--lg .input[data-v-fb05f36e]{font-size:var(--text-base)}.input--num[data-v-fb05f36e]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.input--area[data-v-fb05f36e]{resize:vertical;line-height:1.45}.input[data-v-fb05f36e]::placeholder{color:var(--color-dim);opacity:.75}.suffix[data-v-fb05f36e]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.scrim[data-v-03f9e875]{position:fixed;inset:0;z-index:40000;display:grid;place-items:center;padding:24px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(4px)}.dialog[data-v-03f9e875]{display:flex;flex-direction:column;max-height:100%;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.dialog--sm[data-v-03f9e875]{width:380px}.dialog--md[data-v-03f9e875]{width:560px}.dialog--lg[data-v-03f9e875]{width:840px}.dialog__head[data-v-03f9e875]{display:flex;align-items:center;gap:10px;flex:none;padding:9px 12px;border-bottom:1px solid var(--color-divider)}.dialog__title[data-v-03f9e875]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.dialog__close[data-v-03f9e875]{margin-left:auto;width:22px;height:22px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.dialog__close[data-v-03f9e875]:hover{color:var(--color-fg);background-color:var(--color-raised)}.dialog__close[data-v-03f9e875]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.dialog__body[data-v-03f9e875]{flex:1 1 auto;min-height:0;padding:14px 12px;overflow-y:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.dialog__foot[data-v-03f9e875]{display:flex;align-items:center;justify-content:flex-end;gap:7px;flex:none;padding:9px 12px;border-top:1px solid var(--color-divider)}.field[data-v-3e122607]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3e122607]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3e122607]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3e122607]{width:auto}.field__required[data-v-3e122607]{color:var(--color-err)}.field__control[data-v-3e122607]{flex:1 1 auto;min-width:0}.field__hint[data-v-3e122607],.field__error[data-v-3e122607]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-3e122607]{color:var(--color-err)}.shell[data-v-3e122607]{position:relative;display:flex;align-items:center;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-3e122607]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-3e122607]{border-color:var(--color-err)}.shell--off[data-v-3e122607]{opacity:.5}.shell--sm[data-v-3e122607]{height:22px}.shell--md[data-v-3e122607]{height:26px}.shell--lg[data-v-3e122607]{height:32px}.select[data-v-3e122607]{flex:1 1 auto;min-width:0;height:100%;padding:0 14px 0 0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none;appearance:none;cursor:pointer}.shell--lg .select[data-v-3e122607]{font-size:var(--text-base)}.select option[data-v-3e122607]{color:var(--color-fg);background-color:var(--color-pane)}.chevron[data-v-3e122607]{position:absolute;right:7px;font-size:9px;color:var(--color-dim);pointer-events:none}.field[data-v-ed7d97ce]{display:flex;align-items:center;gap:10px;margin-bottom:7px}.field--stacked[data-v-ed7d97ce]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-ed7d97ce]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-ed7d97ce]{width:auto}.field__control[data-v-ed7d97ce]{flex:1 1 auto;min-width:0}.row[data-v-ed7d97ce]{display:flex;align-items:center;gap:8px}.range[data-v-ed7d97ce]{flex:1 1 auto;min-width:0;accent-color:var(--color-accent);cursor:pointer}.range[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.num[data-v-ed7d97ce]{width:62px;flex:none;height:22px;padding:0 6px;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.num[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.suffix[data-v-ed7d97ce]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.range[data-v-ed7d97ce]:disabled,.num[data-v-ed7d97ce]:disabled{opacity:.5}.sw[data-v-70940a00]{display:flex;align-items:center;gap:8px;margin-bottom:6px}.sw--off[data-v-70940a00]{opacity:.5}.sw__track[data-v-70940a00]{position:relative;width:28px;height:15px;flex:none;padding:0;background-color:var(--color-outline);border:0;border-radius:8px;cursor:pointer}.sw__track.on[data-v-70940a00]{background-color:var(--color-accent)}.sw__track[data-v-70940a00]:disabled{cursor:default}.sw__track[data-v-70940a00]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.sw__knob[data-v-70940a00]{position:absolute;top:2px;left:2px;width:11px;height:11px;border-radius:50%;background-color:var(--color-pane);transition:left .12s ease}.sw__track.on .sw__knob[data-v-70940a00]{left:15px}@media(prefers-reduced-motion:reduce){.sw__knob[data-v-70940a00]{transition:none}}.sw__label[data-v-70940a00]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.tabs[data-v-f7c65d26]{display:flex;flex-wrap:wrap;align-items:stretch;gap:1px;min-height:var(--spacing-panelHeader);padding:0 6px;border-bottom:1px solid var(--color-divider)}.tab[data-v-f7c65d26]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 10px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab[data-v-f7c65d26]:hover:not(:disabled){color:var(--color-fg)}.tab[data-v-f7c65d26]:disabled{opacity:.45;cursor:default}.tab.on[data-v-f7c65d26]{color:var(--color-fg);font-weight:600}.tab.on[data-v-f7c65d26]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab[data-v-f7c65d26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.tab__count[data-v-f7c65d26]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}\n";})();
import { defineComponent as k, createElementBlock as i, openBlock as a, normalizeClass as h, createCommentVNode as m, renderSlot as x, createElementVNode as b, toDisplayString as v, mergeModels as V, useModel as I, useId as Y, withDirectives as S, unref as M, vModelCheckbox as $e, createTextVNode as z, computed as E, vModelText as T, vModelDynamic as G, ref as R, onMounted as J, onBeforeUnmount as Z, normalizeStyle as Q, withKeys as C, withModifiers as D, watch as we, createBlock as xe, Teleport as ge, Fragment as _, renderList as p, vModelSelect as Me } from "vue";
const Be = ["type", "disabled", "aria-busy"], De = {
  key: 0,
  class: "btn__spinner",
  "aria-hidden": "true"
}, Ve = /* @__PURE__ */ k({
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
    return (l, n) => (a(), i("button", {
      type: e.type,
      class: h(["btn", `btn--${e.intent}`, `btn--${e.size}`, { "btn--block": e.block, "btn--busy": e.busy }]),
      disabled: e.disabled || e.busy,
      "aria-busy": e.busy || void 0
    }, [
      e.busy ? (a(), i("span", De)) : m("", !0),
      x(l.$slots, "default", {}, void 0, !0)
    ], 10, Be));
  }
}), $ = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [o, f] of l)
    n[o] = f;
  return n;
}, ee = /* @__PURE__ */ $(Ve, [["__scopeId", "data-v-124239c3"]]), Ie = {
  key: 0,
  class: "card__head"
}, Se = { class: "card__title" }, qe = /* @__PURE__ */ k({
  __name: "DCard",
  props: {
    title: {},
    padded: { type: Boolean, default: !0 },
    interactive: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, n) => (a(), i("section", {
      class: h(["card", { "card--interactive": e.interactive }])
    }, [
      e.title || l.$slots.header ? (a(), i("header", Ie, [
        x(l.$slots, "header", {}, () => [
          b("h3", Se, v(e.title), 1)
        ], !0),
        n[0] || (n[0] = b("span", { class: "card__spacer" }, null, -1)),
        x(l.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0),
      b("div", {
        class: h(["card__body", { "card__body--padded": e.padded }])
      }, [
        x(l.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), te = /* @__PURE__ */ $(qe, [["__scopeId", "data-v-8c187da1"]]), ze = ["id", "disabled"], Ce = ["for"], Ye = {
  key: 0,
  class: "check__hint"
}, Ee = /* @__PURE__ */ k({
  __name: "DCheckbox",
  props: /* @__PURE__ */ V({
    label: {},
    hint: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = I(e, "modelValue"), n = Y();
    return (o, f) => (a(), i("div", {
      class: h(["check", { "check--off": e.disabled }])
    }, [
      S(b("input", {
        id: M(n),
        "onUpdate:modelValue": f[0] || (f[0] = (c) => l.value = c),
        class: "check__box",
        type: "checkbox",
        disabled: e.disabled
      }, null, 8, ze), [
        [$e, l.value]
      ]),
      b("label", {
        for: M(n),
        class: "check__label"
      }, [
        x(o.$slots, "default", {}, () => [
          z(v(e.label), 1)
        ], !0),
        e.hint ? (a(), i("span", Ye, v(e.hint), 1)) : m("", !0)
      ], 8, Ce)
    ], 2));
  }
}), le = /* @__PURE__ */ $(Ee, [["__scopeId", "data-v-5fb92780"]]), He = /* @__PURE__ */ k({
  __name: "DChip",
  props: {
    tone: { default: "neutral" },
    numeric: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(e) {
    return (l, n) => (a(), i("span", {
      class: h(["chip", `chip--${e.tone}`, { "chip--num": e.numeric }])
    }, [
      x(l.$slots, "default", {}, void 0, !0),
      e.removable ? (a(), i("button", {
        key: 0,
        type: "button",
        class: "chip__x",
        "aria-label": "Entfernen",
        onClick: n[0] || (n[0] = (o) => l.$emit("remove"))
      }, " ✕ ")) : m("", !0)
    ], 2));
  }
}), ae = /* @__PURE__ */ $(He, [["__scopeId", "data-v-30700fa0"]]), Le = ["for"], We = { class: "field__control" }, Ne = { class: "row" }, Te = ["id", "value", "disabled", "aria-label"], Ke = ["disabled", "aria-label"], Ue = {
  key: 0,
  class: "field__hint"
}, Xe = /* @__PURE__ */ k({
  __name: "DColorInput",
  props: /* @__PURE__ */ V({
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
    const l = I(e, "modelValue"), n = Y(), o = E(() => {
      const f = (l.value ?? "").trim();
      return /^#[0-9a-f]{6}$/i.test(f) ? f : /^#[0-9a-f]{3}$/i.test(f) ? "#" + [...f.slice(1)].map((c) => c + c).join("") : "#000000";
    });
    return (f, c) => (a(), i("div", {
      class: h(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: M(n)
      }, v(e.label), 9, Le)) : m("", !0),
      b("div", We, [
        b("div", Ne, [
          b("input", {
            id: M(n),
            class: "picker",
            type: "color",
            value: o.value,
            disabled: e.disabled,
            "aria-label": e.label ?? "Farbe",
            onInput: c[0] || (c[0] = (s) => l.value = s.target.value)
          }, null, 40, Te),
          S(b("input", {
            "onUpdate:modelValue": c[1] || (c[1] = (s) => l.value = s),
            class: "hex",
            type: "text",
            spellcheck: "false",
            disabled: e.disabled,
            "aria-label": e.label ? `${e.label} als Hexwert` : "Farbe als Hexwert"
          }, null, 8, Ke), [
            [T, l.value]
          ])
        ]),
        e.hint ? (a(), i("p", Ue, v(e.hint), 1)) : m("", !0)
      ])
    ], 2));
  }
}), ie = /* @__PURE__ */ $(Xe, [["__scopeId", "data-v-0c4cf022"]]), Fe = ["for"], Ae = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Oe = { class: "field__control" }, Pe = ["id", "type", "disabled", "required", "min", "max", "aria-invalid"], Re = {
  key: 0,
  class: "field__error",
  role: "alert"
}, je = {
  key: 1,
  class: "field__hint"
}, Ge = /* @__PURE__ */ k({
  __name: "DDateInput",
  props: /* @__PURE__ */ V({
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
    const l = I(e, "modelValue"), n = Y(), o = { date: "date", time: "time", datetime: "datetime-local" };
    return (f, c) => (a(), i("div", {
      class: h(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: M(n)
      }, [
        z(v(e.label) + " ", 1),
        e.required ? (a(), i("span", Ae, "*")) : m("", !0)
      ], 8, Fe)) : m("", !0),
      b("div", Oe, [
        S(b("input", {
          id: M(n),
          "onUpdate:modelValue": c[0] || (c[0] = (s) => l.value = s),
          class: h(["input", { "input--invalid": !!e.error }]),
          type: o[e.mode],
          disabled: e.disabled,
          required: e.required,
          min: e.min,
          max: e.max,
          "aria-invalid": !!e.error || void 0
        }, null, 10, Pe), [
          [G, l.value]
        ]),
        e.error ? (a(), i("p", Re, v(e.error), 1)) : e.hint ? (a(), i("p", je, v(e.hint), 1)) : m("", !0)
      ])
    ], 2));
  }
}), de = /* @__PURE__ */ $(Ge, [["__scopeId", "data-v-3afdb10c"]]), Je = {
  key: 0,
  class: "rule__label"
}, Ze = /* @__PURE__ */ k({
  __name: "DDivider",
  props: {
    label: {}
  },
  setup(e) {
    return (l, n) => (a(), i("div", {
      class: h(["rule", { "rule--labelled": e.label }]),
      role: "separator"
    }, [
      e.label ? (a(), i("span", Je, v(e.label), 1)) : m("", !0)
    ], 2));
  }
}), ne = /* @__PURE__ */ $(Ze, [["__scopeId", "data-v-521e9319"]]), Qe = ["for"], _e = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, pe = { class: "field__control" }, et = {
  key: 0,
  class: "field__error",
  role: "alert"
}, tt = {
  key: 1,
  class: "field__hint"
}, lt = /* @__PURE__ */ k({
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
    return (l, n) => (a(), i("div", {
      class: h(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: e.for
      }, [
        z(v(e.label) + " ", 1),
        e.required ? (a(), i("span", _e, "*")) : m("", !0)
      ], 8, Qe)) : m("", !0),
      b("div", pe, [
        x(l.$slots, "default", {}, void 0, !0),
        e.error ? (a(), i("p", et, v(e.error), 1)) : e.hint ? (a(), i("p", tt, v(e.hint), 1)) : m("", !0)
      ])
    ], 2));
  }
}), oe = /* @__PURE__ */ $(lt, [["__scopeId", "data-v-bf447967"]]), at = ["aria-label"], it = ["aria-label"], dt = { class: "fw__title" }, nt = ["aria-label"], ot = { class: "fw__body" }, st = ["aria-label"], N = 24, rt = /* @__PURE__ */ k({
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
  setup(e, { expose: l, emit: n }) {
    const o = e, f = n, c = { x: 16, y: 16, w: 240, h: 320, dock: null, freeY: 16, freeH: 320 };
    function s() {
      const d = { ...c, ...o.initial };
      if (d.freeY = d.y, d.freeH = d.h, !o.rememberAs) return d;
      try {
        const u = localStorage.getItem(o.rememberAs);
        if (!u) return d;
        const r = JSON.parse(u), y = (B, F) => Number.isFinite(B) ? B : F;
        return {
          x: y(r?.x, d.x),
          y: y(r?.y, d.y),
          w: y(r?.w, d.w),
          h: y(r?.h, d.h),
          dock: r?.dock === "left" || r?.dock === "right" ? r.dock : null,
          freeY: y(r?.freeY, d.y),
          freeH: y(r?.freeH, d.h)
        };
      } catch {
        return d;
      }
    }
    const t = R(s()), w = R();
    function q() {
      if (o.rememberAs)
        try {
          localStorage.setItem(o.rememberAs, JSON.stringify(t.value));
        } catch {
        }
    }
    function K(d) {
      return Math.min(o.maxWidth, Math.max(o.minWidth, d));
    }
    function U() {
      const d = w.value?.offsetParent;
      return {
        width: d?.clientWidth ?? window.innerWidth,
        height: d?.clientHeight ?? window.innerHeight
      };
    }
    function H(d, u) {
      const r = t.value, y = K(r.w);
      t.value = {
        ...r,
        w: y,
        x: d === "left" ? 0 : Math.max(0, u.width - y),
        y: 0,
        h: u.height,
        dock: d,
        // Only remember the floating shape on the way in, not on every move
        freeY: r.dock ? r.freeY : r.y,
        freeH: r.dock ? r.freeH : r.h
      };
    }
    function A() {
      const d = t.value;
      d.dock && (t.value = { ...d, y: d.freeY, h: d.freeH, dock: null });
    }
    let g = null;
    function O(d) {
      if (!g) return;
      const u = U();
      if (g.kind === "move") {
        const y = t.value.w, B = Math.min(
          Math.max(0, g.fromX + (d.clientX - g.startX)),
          Math.max(0, u.width - y)
        ), F = Math.min(
          Math.max(0, g.fromY + (d.clientY - g.startY)),
          Math.max(0, u.height - 28)
        );
        o.dockable && B <= N ? H("left", u) : o.dockable && B + y >= u.width - N ? H("right", u) : (A(), t.value = { ...t.value, x: B, y: F });
        return;
      }
      const r = K(g.fromW + (d.clientX - g.startX));
      if (t.value.dock) {
        t.value = {
          ...t.value,
          w: r,
          x: t.value.dock === "left" ? 0 : Math.max(0, u.width - r)
        };
        return;
      }
      t.value = {
        ...t.value,
        w: r,
        h: Math.max(o.minHeight, g.fromH + (d.clientY - g.startY))
      };
    }
    function X() {
      g && q(), g = null, window.removeEventListener("pointermove", O), window.removeEventListener("pointerup", X), document.body.style.userSelect = "";
    }
    function P(d) {
      g = d, window.addEventListener("pointermove", O), window.addEventListener("pointerup", X), document.body.style.userSelect = "none";
    }
    const he = (d) => P({ kind: "move", startX: d.clientX, startY: d.clientY, fromX: t.value.x, fromY: t.value.y }), ye = (d) => P({ kind: "size", startX: d.clientX, startY: d.clientY, fromW: t.value.w, fromH: t.value.h });
    function L(d, u) {
      const r = U(), y = t.value.w, B = Math.min(Math.max(0, t.value.x + d), Math.max(0, r.width - y));
      o.dockable && B <= N ? H("left", r) : o.dockable && B + y >= r.width - N ? H("right", r) : (A(), t.value = {
        ...t.value,
        x: B,
        y: Math.min(Math.max(0, t.value.y + u), Math.max(0, r.height - 28))
      }), q();
    }
    function W() {
      const d = U(), u = t.value, r = Math.min(K(u.w), d.width);
      if (u.dock) {
        t.value = { ...u, w: r, x: u.dock === "left" ? 0 : Math.max(0, d.width - r), y: 0, h: d.height };
        return;
      }
      const y = Math.min(u.h, d.height);
      t.value = {
        ...u,
        w: r,
        h: y,
        x: Math.min(Math.max(0, u.x), Math.max(0, d.width - r)),
        y: Math.min(Math.max(0, u.y), Math.max(0, d.height - y))
      };
    }
    J(() => {
      W(), window.addEventListener("resize", W);
    }), Z(() => {
      X(), window.removeEventListener("resize", W);
    });
    const ke = E(() => ({
      left: t.value.x + "px",
      top: t.value.y + "px",
      width: t.value.w + "px",
      height: t.value.h + "px",
      zIndex: String(o.layer)
    }));
    return l({ placement: t, keepInView: W }), (d, u) => (a(), i("aside", {
      ref_key: "root",
      ref: w,
      class: h([
        "fw",
        {
          "fw--docked": !!t.value.dock,
          "fw--left": t.value.dock === "left",
          "fw--right": t.value.dock === "right"
        }
      ]),
      style: Q(ke.value),
      "aria-label": e.title
    }, [
      b("div", {
        class: "fw__bar",
        role: "toolbar",
        tabindex: "0",
        "aria-label": `${e.title} verschieben - mit den Pfeiltasten bewegen`,
        onPointerdown: u[2] || (u[2] = D((r) => he(r), ["prevent"])),
        onKeydown: [
          u[3] || (u[3] = C(D((r) => L(-16, 0), ["prevent"]), ["left"])),
          u[4] || (u[4] = C(D((r) => L(16, 0), ["prevent"]), ["right"])),
          u[5] || (u[5] = C(D((r) => L(0, -16), ["prevent"]), ["up"])),
          u[6] || (u[6] = C(D((r) => L(0, 16), ["prevent"]), ["down"]))
        ]
      }, [
        b("span", dt, v(e.title), 1),
        x(d.$slots, "actions", {}, void 0, !0),
        e.closable ? (a(), i("button", {
          key: 0,
          type: "button",
          class: "fw__act",
          title: "Schließen",
          "aria-label": `${e.title} schließen`,
          onPointerdown: u[0] || (u[0] = D(() => {
          }, ["stop"])),
          onClick: u[1] || (u[1] = (r) => f("close"))
        }, " × ", 40, nt)) : m("", !0)
      ], 40, it),
      b("div", ot, [
        x(d.$slots, "default", {}, void 0, !0)
      ]),
      e.resizable ? (a(), i("div", {
        key: 0,
        class: "fw__grip",
        role: "separator",
        "aria-label": `Größe von ${e.title}`,
        title: "Größe ändern",
        onPointerdown: u[7] || (u[7] = D((r) => ye(r), ["prevent"]))
      }, null, 40, st)) : m("", !0)
    ], 14, at));
  }
}), se = /* @__PURE__ */ $(rt, [["__scopeId", "data-v-cb688645"]]), ut = ["aria-hidden", "aria-label", "role"], ct = /* @__PURE__ */ k({
  __name: "DIcon",
  props: {
    name: {},
    size: { default: "md" },
    tone: {},
    decorative: { type: Boolean, default: !0 },
    label: {}
  },
  setup(e) {
    return (l, n) => (a(), i("i", {
      class: h(["icon", `icon--${e.size}`]),
      style: Q(e.tone ? { color: `var(--${e.tone})` } : void 0),
      "aria-hidden": e.decorative ? "true" : void 0,
      "aria-label": e.decorative ? void 0 : e.label ?? e.name,
      role: e.decorative ? void 0 : "img"
    }, v(e.name), 15, ut));
  }
}), re = /* @__PURE__ */ $(ct, [["__scopeId", "data-v-15dffeec"]]), ft = ["for"], mt = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, vt = { class: "field__control" }, bt = ["id", "rows", "placeholder", "disabled", "readonly", "required", "aria-invalid"], ht = ["id", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "step", "aria-invalid"], yt = {
  key: 2,
  class: "suffix"
}, kt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, $t = {
  key: 1,
  class: "field__hint"
}, wt = /* @__PURE__ */ k({
  __name: "DInput",
  props: /* @__PURE__ */ V({
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
    const l = I(e, "modelValue"), n = e, o = Y(), f = E(() => n.type === "number");
    return (c, s) => (a(), i("div", {
      class: h(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: M(o)
      }, [
        z(v(e.label) + " ", 1),
        e.required ? (a(), i("span", mt, "*")) : m("", !0)
      ], 8, ft)) : m("", !0),
      b("div", vt, [
        b("div", {
          class: h(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.rows ? S((a(), i("textarea", {
            key: 0,
            id: M(o),
            "onUpdate:modelValue": s[0] || (s[0] = (t) => l.value = t),
            class: "input input--area",
            rows: e.rows,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, null, 8, bt)), [
            [T, l.value]
          ]) : S((a(), i("input", {
            key: 1,
            id: M(o),
            "onUpdate:modelValue": s[1] || (s[1] = (t) => l.value = t),
            class: h(["input", { "input--num": f.value }]),
            type: e.type,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            min: e.min,
            max: e.max,
            step: e.step,
            "aria-invalid": !!e.error || void 0
          }, null, 10, ht)), [
            [G, l.value]
          ]),
          e.suffix ? (a(), i("span", yt, v(e.suffix), 1)) : m("", !0)
        ], 2),
        e.error ? (a(), i("p", kt, v(e.error), 1)) : e.hint ? (a(), i("p", $t, v(e.hint), 1)) : m("", !0)
      ])
    ], 2));
  }
}), ue = /* @__PURE__ */ $(wt, [["__scopeId", "data-v-fb05f36e"]]), xt = ["aria-label"], gt = {
  key: 0,
  class: "dialog__head"
}, Mt = { class: "dialog__title" }, Bt = { class: "dialog__body" }, Dt = {
  key: 1,
  class: "dialog__foot"
}, Vt = /* @__PURE__ */ k({
  __name: "DModal",
  props: /* @__PURE__ */ V({
    title: {},
    size: { default: "md" },
    persistent: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ V(["cancel"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const n = I(e, "modelValue"), o = e, f = l;
    function c() {
      o.persistent || (n.value = !1, f("cancel"));
    }
    function s(t) {
      t.key === "Escape" && n.value && c();
    }
    return we(n, (t) => {
      document.body.style.overflow = t ? "hidden" : "";
    }), J(() => window.addEventListener("keydown", s)), Z(() => {
      window.removeEventListener("keydown", s), document.body.style.overflow = "";
    }), (t, w) => (a(), xe(ge, { to: "body" }, [
      n.value ? (a(), i("div", {
        key: 0,
        class: "scrim",
        onClick: D(c, ["self"])
      }, [
        b("div", {
          class: h(["dialog", `dialog--${e.size}`]),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title
        }, [
          e.title || t.$slots.header ? (a(), i("header", gt, [
            x(t.$slots, "header", {}, () => [
              b("h2", Mt, v(e.title), 1)
            ], !0),
            e.persistent ? m("", !0) : (a(), i("button", {
              key: 0,
              type: "button",
              class: "dialog__close",
              "aria-label": "Schließen",
              onClick: c
            }, " ✕ "))
          ])) : m("", !0),
          b("div", Bt, [
            x(t.$slots, "default", {}, void 0, !0)
          ]),
          t.$slots.actions ? (a(), i("footer", Dt, [
            x(t.$slots, "actions", {}, void 0, !0)
          ])) : m("", !0)
        ], 10, xt)
      ])) : m("", !0)
    ]));
  }
}), ce = /* @__PURE__ */ $(Vt, [["__scopeId", "data-v-03f9e875"]]), It = ["for"], St = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, qt = { class: "field__control" }, zt = ["id", "disabled", "required", "aria-invalid"], Ct = {
  key: 0,
  value: ""
}, Yt = ["value"], Et = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Ht = {
  key: 1,
  class: "field__hint"
}, Lt = /* @__PURE__ */ k({
  __name: "DSelect",
  props: /* @__PURE__ */ V({
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
    const l = I(e, "modelValue"), n = e, o = Y(), f = E(
      () => (n.options ?? []).map((s) => {
        if (s === null || typeof s != "object")
          return { value: s, label: String(s) };
        const t = s, w = n.valueKey in t ? t[n.valueKey] : t, q = n.labelKey in t ? t[n.labelKey] : w;
        return { value: w, label: String(q ?? "") };
      })
    ), c = E({
      get() {
        const s = f.value.findIndex((t) => t.value === l.value);
        return s >= 0 ? String(s) : "";
      },
      set(s) {
        l.value = s === "" ? void 0 : f.value[Number(s)]?.value;
      }
    });
    return (s, t) => (a(), i("div", {
      class: h(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: M(o)
      }, [
        z(v(e.label) + " ", 1),
        e.required ? (a(), i("span", St, "*")) : m("", !0)
      ], 8, It)) : m("", !0),
      b("div", qt, [
        b("div", {
          class: h(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          S(b("select", {
            id: M(o),
            "onUpdate:modelValue": t[0] || (t[0] = (w) => c.value = w),
            class: "select",
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            e.clearable || l.value === void 0 ? (a(), i("option", Ct, v(e.placeholder ?? "—"), 1)) : m("", !0),
            (a(!0), i(_, null, p(f.value, (w, q) => (a(), i("option", {
              key: q,
              value: String(q)
            }, v(w.label), 9, Yt))), 128))
          ], 8, zt), [
            [Me, c.value]
          ]),
          t[1] || (t[1] = b("span", {
            class: "chevron",
            "aria-hidden": "true"
          }, "▾", -1))
        ], 2),
        e.error ? (a(), i("p", Et, v(e.error), 1)) : e.hint ? (a(), i("p", Ht, v(e.hint), 1)) : m("", !0)
      ])
    ], 2));
  }
}), fe = /* @__PURE__ */ $(Lt, [["__scopeId", "data-v-3e122607"]]), Wt = ["for"], Nt = { class: "field__control row" }, Tt = ["id", "min", "max", "step", "disabled"], Kt = ["min", "max", "step", "disabled", "aria-label"], Ut = {
  key: 0,
  class: "suffix"
}, Xt = /* @__PURE__ */ k({
  __name: "DSlider",
  props: /* @__PURE__ */ V({
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
    const l = I(e, "modelValue"), n = Y();
    return (o, f) => (a(), i("div", {
      class: h(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        class: "field__label",
        for: M(n)
      }, v(e.label), 9, Wt)) : m("", !0),
      b("div", Nt, [
        S(b("input", {
          id: M(n),
          "onUpdate:modelValue": f[0] || (f[0] = (c) => l.value = c),
          class: "range",
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled
        }, null, 8, Tt), [
          [
            T,
            l.value,
            void 0,
            { number: !0 }
          ]
        ]),
        S(b("input", {
          "onUpdate:modelValue": f[1] || (f[1] = (c) => l.value = c),
          class: "num",
          type: "number",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label ? `${e.label} als Zahl` : "Wert"
        }, null, 8, Kt), [
          [
            T,
            l.value,
            void 0,
            { number: !0 }
          ]
        ]),
        e.suffix ? (a(), i("span", Ut, v(e.suffix), 1)) : m("", !0)
      ])
    ], 2));
  }
}), me = /* @__PURE__ */ $(Xt, [["__scopeId", "data-v-ed7d97ce"]]), Ft = ["aria-checked", "aria-label", "disabled"], At = /* @__PURE__ */ k({
  __name: "DSwitch",
  props: /* @__PURE__ */ V({
    label: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = I(e, "modelValue");
    return (n, o) => (a(), i("div", {
      class: h(["sw", { "sw--off": e.disabled }])
    }, [
      b("button", {
        type: "button",
        role: "switch",
        "aria-checked": !!l.value,
        "aria-label": e.label,
        disabled: e.disabled,
        class: h(["sw__track", { on: l.value }]),
        onClick: o[0] || (o[0] = (f) => l.value = !l.value)
      }, [...o[2] || (o[2] = [
        b("span", { class: "sw__knob" }, null, -1)
      ])], 10, Ft),
      e.label || n.$slots.default ? (a(), i("span", {
        key: 0,
        class: "sw__label",
        onClick: o[1] || (o[1] = (f) => !e.disabled && (l.value = !l.value))
      }, [
        x(n.$slots, "default", {}, () => [
          z(v(e.label), 1)
        ], !0)
      ])) : m("", !0)
    ], 2));
  }
}), ve = /* @__PURE__ */ $(At, [["__scopeId", "data-v-70940a00"]]), Ot = ["aria-label"], Pt = ["aria-selected", "tabindex", "disabled", "onClick"], Rt = {
  key: 0,
  class: "tab__count"
}, jt = /* @__PURE__ */ k({
  __name: "DTabs",
  props: /* @__PURE__ */ V({
    tabs: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const l = I(e, "modelValue"), n = e;
    function o(f) {
      const c = n.tabs.filter((w) => !w.disabled), s = c.findIndex((w) => w.id === l.value), t = c[(s + f + c.length) % c.length];
      t && (l.value = t.id);
    }
    return (f, c) => (a(), i("div", {
      class: "tabs",
      role: "tablist",
      "aria-label": e.label,
      onKeydown: [
        c[0] || (c[0] = C(D((s) => o(-1), ["prevent"]), ["left"])),
        c[1] || (c[1] = C(D((s) => o(1), ["prevent"]), ["right"]))
      ]
    }, [
      (a(!0), i(_, null, p(e.tabs, (s) => (a(), i("button", {
        key: s.id,
        type: "button",
        role: "tab",
        "aria-selected": l.value === s.id,
        tabindex: l.value === s.id ? 0 : -1,
        disabled: s.disabled,
        class: h(["tab", { on: l.value === s.id }]),
        onClick: (t) => l.value = s.id
      }, [
        z(v(s.label) + " ", 1),
        s.count !== void 0 ? (a(), i("span", Rt, v(s.count), 1)) : m("", !0)
      ], 10, Pt))), 128)),
      x(f.$slots, "actions", {}, void 0, !0)
    ], 40, Ot));
  }
}), be = /* @__PURE__ */ $(jt, [["__scopeId", "data-v-f7c65d26"]]), Gt = {
  DButton: ee,
  DCard: te,
  DCheckbox: le,
  DChip: ae,
  DColorInput: ie,
  DDateInput: de,
  DDivider: ne,
  DField: oe,
  DFloatingWindow: se,
  DIcon: re,
  DInput: ue,
  DModal: ce,
  DSelect: fe,
  DSlider: me,
  DSwitch: ve,
  DTabs: be
}, Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONTROLS: Gt,
  DButton: ee,
  DCard: te,
  DCheckbox: le,
  DChip: ae,
  DColorInput: ie,
  DDateInput: de,
  DDivider: ne,
  DField: oe,
  DFloatingWindow: se,
  DIcon: re,
  DInput: ue,
  DModal: ce,
  DSelect: fe,
  DSlider: me,
  DSwitch: ve,
  DTabs: be
}, Symbol.toStringTag, { value: "Module" })), j = "org.eclipse.daanse.board.app.ui.vue.controls", Zt = "0.0.1-next.1";
async function _t(e) {
  const l = globalThis.__tsm__;
  if (!l)
    throw new Error(`${j}: tsm runtime is not initialized`);
  l.register(j, Jt, Zt, "ui.vue.controls"), await void 0;
}
async function pt(e) {
  await void 0;
}
export {
  Gt as CONTROLS,
  ee as DButton,
  te as DCard,
  le as DCheckbox,
  ae as DChip,
  ie as DColorInput,
  de as DDateInput,
  ne as DDivider,
  oe as DField,
  se as DFloatingWindow,
  re as DIcon,
  ue as DInput,
  ce as DModal,
  fe as DSelect,
  me as DSlider,
  ve as DSwitch,
  be as DTabs,
  _t as activate,
  pt as deactivate
};
