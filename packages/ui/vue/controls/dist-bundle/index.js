(function(){var i="ui.vue.controls",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".btn[data-v-124239c3]{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;white-space:nowrap;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-124239c3]:hover:not(:disabled){border-color:var(--color-outline)}.btn[data-v-124239c3]:active:not(:disabled){transform:translateY(.5px)}.btn[data-v-124239c3]:disabled{opacity:.45;cursor:default}.btn[data-v-124239c3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.btn--sm[data-v-124239c3]{height:22px;padding:0 9px;font-size:var(--text-xs)}.btn--md[data-v-124239c3]{height:26px;padding:0 12px}.btn--lg[data-v-124239c3]{height:32px;padding:0 16px;font-size:var(--text-base)}.btn--block[data-v-124239c3]{display:flex;width:100%}.btn--primary[data-v-124239c3]{color:var(--color-onAccent);background-color:var(--color-accent);border-color:var(--color-accent);font-weight:600}.btn--primary[data-v-124239c3]:hover:not(:disabled){filter:brightness(1.08)}.btn--quiet[data-v-124239c3]{background-color:transparent;border-color:transparent;color:var(--color-dim)}.btn--quiet[data-v-124239c3]:hover:not(:disabled){color:var(--color-fg);background-color:var(--color-raised);border-color:var(--color-divider)}.btn--danger[data-v-124239c3]{color:var(--color-err);border-color:color-mix(in srgb,var(--color-err) 45%,transparent)}.btn--danger[data-v-124239c3]:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-err) 12%,transparent);border-color:var(--color-err)}.btn__spinner[data-v-124239c3]{width:11px;height:11px;flex:none;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:btn-spin-124239c3 .7s linear infinite}@keyframes btn-spin-124239c3{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.btn__spinner[data-v-124239c3]{animation-duration:2s}}.card[data-v-8c187da1]{display:flex;flex-direction:column;min-width:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.card--interactive[data-v-8c187da1]{cursor:pointer}.card--interactive[data-v-8c187da1]:hover{border-color:var(--color-outline)}.card__head[data-v-8c187da1]{display:flex;align-items:center;gap:8px;flex:none;height:var(--spacing-panelHeader);padding:0 10px;border-bottom:1px solid var(--color-divider)}.card__title[data-v-8c187da1]{margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim)}.card__spacer[data-v-8c187da1]{flex:1 1 auto}.card__body[data-v-8c187da1]{flex:1 1 auto;min-height:0}.card__body--padded[data-v-8c187da1]{padding:10px 12px}.check[data-v-5fb92780]{display:flex;align-items:baseline;gap:7px;margin-bottom:6px}.check--off[data-v-5fb92780]{opacity:.5}.check__box[data-v-5fb92780]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:pointer}.check__box[data-v-5fb92780]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.check__label[data-v-5fb92780]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.check__hint[data-v-5fb92780]{display:block;font-size:var(--text-xs);color:var(--color-dim)}.chip[data-v-30700fa0]{display:inline-flex;align-items:center;gap:4px;padding:1px 7px;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.5;border-radius:var(--radius-xs);white-space:nowrap}.chip--num[data-v-30700fa0]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.chip--neutral[data-v-30700fa0]{color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider)}.chip--accent[data-v-30700fa0]{color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent)}.chip--ok[data-v-30700fa0]{color:var(--color-ok);background-color:color-mix(in srgb,var(--color-ok) 14%,transparent)}.chip--warn[data-v-30700fa0]{color:var(--color-warn);background-color:color-mix(in srgb,var(--color-warn) 14%,transparent)}.chip--err[data-v-30700fa0]{color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 14%,transparent)}.chip__x[data-v-30700fa0]{font-size:9px;color:inherit;background:none;border:0;padding:0;cursor:pointer;opacity:.7}.chip__x[data-v-30700fa0]:hover{opacity:1}.field[data-v-0c4cf022]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-0c4cf022]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-0c4cf022]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-0c4cf022]{width:auto}.field__control[data-v-0c4cf022]{flex:1 1 auto;min-width:0}.field__hint[data-v-0c4cf022]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.row[data-v-0c4cf022]{display:flex;align-items:center;gap:6px}.picker[data-v-0c4cf022]{width:26px;height:26px;flex:none;padding:2px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.picker[data-v-0c4cf022]:focus-visible,.hex[data-v-0c4cf022]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.hex[data-v-0c4cf022]{flex:1 1 auto;min-width:0;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.picker[data-v-0c4cf022]:disabled,.hex[data-v-0c4cf022]:disabled{opacity:.5}.field[data-v-3afdb10c]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3afdb10c]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3afdb10c]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3afdb10c]{width:auto}.field__required[data-v-3afdb10c]{color:var(--color-err)}.field__control[data-v-3afdb10c]{flex:1 1 auto;min-width:0}.field__hint[data-v-3afdb10c],.field__error[data-v-3afdb10c]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.field__error[data-v-3afdb10c]{color:var(--color-err)}.input[data-v-3afdb10c]{width:100%;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.input--invalid[data-v-3afdb10c]{border-color:var(--color-err)}.input[data-v-3afdb10c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.input[data-v-3afdb10c]:disabled{opacity:.5}.rule[data-v-521e9319]{height:1px;margin:12px 0;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]{display:flex;align-items:center;gap:8px;height:auto;background:none;margin:14px 0 7px}.rule--labelled[data-v-521e9319]:before,.rule--labelled[data-v-521e9319]:after{content:\"\";height:1px;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]:before{width:10px;flex:none}.rule--labelled[data-v-521e9319]:after{flex:1 1 auto}.rule__label[data-v-521e9319]{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.field[data-v-1a8ee938]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-1a8ee938]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-1a8ee938]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-1a8ee938]{width:auto}.field__required[data-v-1a8ee938]{color:var(--color-err)}.field__control[data-v-1a8ee938]{flex:1 1 auto;min-width:0}.field__hint[data-v-1a8ee938],.field__error[data-v-1a8ee938]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-1a8ee938]{color:var(--color-err)}.fw[data-v-b6b4a10b]{position:absolute;display:flex;flex-direction:column;overflow:hidden;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.fw--docked[data-v-b6b4a10b]{border-radius:0}.fw--docked.fw--left[data-v-b6b4a10b]{border-left:0}.fw--docked.fw--right[data-v-b6b4a10b]{border-right:0}.fw--docked .fw__grip[data-v-b6b4a10b]{cursor:ew-resize}.fw__bar[data-v-b6b4a10b]{display:flex;align-items:center;gap:2px;flex:none;height:28px;padding:0 4px 0 10px;border-bottom:1px solid var(--color-divider);cursor:grab;touch-action:none;user-select:none}.fw__bar[data-v-b6b4a10b]:active{cursor:grabbing}.fw__bar[data-v-b6b4a10b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.fw__title[data-v-b6b4a10b]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.fw__act[data-v-b6b4a10b]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.fw__act[data-v-b6b4a10b]:hover{color:var(--color-fg);background-color:var(--color-raised)}.fw__act[data-v-b6b4a10b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.fw__body[data-v-b6b4a10b]{flex:1;min-height:0;overflow:auto}.fw__grip[data-v-b6b4a10b]{position:absolute;right:0;bottom:0;width:14px;height:14px;cursor:nwse-resize;touch-action:none}.fw__grip[data-v-b6b4a10b]:after{content:\"\";position:absolute;right:3px;bottom:3px;width:6px;height:6px;border-right:2px solid var(--color-outline, #3a4756);border-bottom:2px solid var(--color-outline, #3a4756)}.icon[data-v-15dffeec]{font-family:Material Icons,sans-serif;font-style:normal;font-weight:400;line-height:1;letter-spacing:normal;white-space:nowrap;direction:ltr;display:inline-block;vertical-align:middle;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-feature-settings:\"liga\";color:inherit}.icon--xs[data-v-15dffeec]{font-size:12px}.icon--sm[data-v-15dffeec]{font-size:14px}.icon--md[data-v-15dffeec]{font-size:16px}.icon--lg[data-v-15dffeec]{font-size:20px}.field[data-v-fb05f36e]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-fb05f36e]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-fb05f36e]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-fb05f36e]{width:auto}.field__required[data-v-fb05f36e]{color:var(--color-err)}.field__control[data-v-fb05f36e]{flex:1 1 auto;min-width:0}.field__hint[data-v-fb05f36e],.field__error[data-v-fb05f36e]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-fb05f36e]{color:var(--color-err)}.shell[data-v-fb05f36e]{display:flex;align-items:center;gap:6px;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-fb05f36e]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-fb05f36e]{border-color:var(--color-err)}.shell--off[data-v-fb05f36e]{opacity:.5}.shell--sm[data-v-fb05f36e]{height:22px}.shell--md[data-v-fb05f36e]{height:26px}.shell--lg[data-v-fb05f36e]{height:32px}.shell[data-v-fb05f36e]:has(.input--area){height:auto;padding:5px 8px}.input[data-v-fb05f36e]{flex:1 1 auto;min-width:0;padding:0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none}.shell--lg .input[data-v-fb05f36e]{font-size:var(--text-base)}.input--num[data-v-fb05f36e]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.input--area[data-v-fb05f36e]{resize:vertical;line-height:1.45}.input[data-v-fb05f36e]::placeholder{color:var(--color-dim);opacity:.75}.suffix[data-v-fb05f36e]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.scrim[data-v-03f9e875]{position:fixed;inset:0;z-index:40000;display:grid;place-items:center;padding:24px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(4px)}.dialog[data-v-03f9e875]{display:flex;flex-direction:column;max-height:100%;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.dialog--sm[data-v-03f9e875]{width:380px}.dialog--md[data-v-03f9e875]{width:560px}.dialog--lg[data-v-03f9e875]{width:840px}.dialog__head[data-v-03f9e875]{display:flex;align-items:center;gap:10px;flex:none;padding:9px 12px;border-bottom:1px solid var(--color-divider)}.dialog__title[data-v-03f9e875]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.dialog__close[data-v-03f9e875]{margin-left:auto;width:22px;height:22px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.dialog__close[data-v-03f9e875]:hover{color:var(--color-fg);background-color:var(--color-raised)}.dialog__close[data-v-03f9e875]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.dialog__body[data-v-03f9e875]{flex:1 1 auto;min-height:0;padding:14px 12px;overflow-y:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.dialog__foot[data-v-03f9e875]{display:flex;align-items:center;justify-content:flex-end;gap:7px;flex:none;padding:9px 12px;border-top:1px solid var(--color-divider)}.field[data-v-da414860]{display:flex;align-items:flex-start;gap:10px;margin-bottom:7px}.field--stacked[data-v-da414860]{flex-direction:column;gap:4px}.field__label[data-v-da414860]{flex:none;width:120px;padding-top:2px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-da414860]{width:auto}.field__required[data-v-da414860]{color:var(--color-err)}.field__control[data-v-da414860]{flex:1 1 auto;min-width:0}.choices[data-v-da414860]{display:flex;flex-direction:column;gap:4px}.choices--inline[data-v-da414860]{flex-direction:row;flex-wrap:wrap;gap:14px}.choice[data-v-da414860]{display:flex;align-items:baseline;gap:7px;cursor:pointer}.choice--off[data-v-da414860]{opacity:.5;cursor:default}.choice__dot[data-v-da414860]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:inherit}.choice__dot[data-v-da414860]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.choice__label[data-v-da414860]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.field__error[data-v-da414860]{margin:3px 0 0;font-size:var(--text-xs);color:var(--color-err)}.field__hint[data-v-da414860]{margin:3px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.field[data-v-3e122607]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3e122607]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3e122607]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3e122607]{width:auto}.field__required[data-v-3e122607]{color:var(--color-err)}.field__control[data-v-3e122607]{flex:1 1 auto;min-width:0}.field__hint[data-v-3e122607],.field__error[data-v-3e122607]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-3e122607]{color:var(--color-err)}.shell[data-v-3e122607]{position:relative;display:flex;align-items:center;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-3e122607]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-3e122607]{border-color:var(--color-err)}.shell--off[data-v-3e122607]{opacity:.5}.shell--sm[data-v-3e122607]{height:22px}.shell--md[data-v-3e122607]{height:26px}.shell--lg[data-v-3e122607]{height:32px}.select[data-v-3e122607]{flex:1 1 auto;min-width:0;height:100%;padding:0 14px 0 0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none;appearance:none;cursor:pointer}.shell--lg .select[data-v-3e122607]{font-size:var(--text-base)}.select option[data-v-3e122607]{color:var(--color-fg);background-color:var(--color-pane)}.chevron[data-v-3e122607]{position:absolute;right:7px;font-size:9px;color:var(--color-dim);pointer-events:none}.field[data-v-ed7d97ce]{display:flex;align-items:center;gap:10px;margin-bottom:7px}.field--stacked[data-v-ed7d97ce]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-ed7d97ce]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-ed7d97ce]{width:auto}.field__control[data-v-ed7d97ce]{flex:1 1 auto;min-width:0}.row[data-v-ed7d97ce]{display:flex;align-items:center;gap:8px}.range[data-v-ed7d97ce]{flex:1 1 auto;min-width:0;accent-color:var(--color-accent);cursor:pointer}.range[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.num[data-v-ed7d97ce]{width:62px;flex:none;height:22px;padding:0 6px;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.num[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.suffix[data-v-ed7d97ce]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.range[data-v-ed7d97ce]:disabled,.num[data-v-ed7d97ce]:disabled{opacity:.5}.sw[data-v-70940a00]{display:flex;align-items:center;gap:8px;margin-bottom:6px}.sw--off[data-v-70940a00]{opacity:.5}.sw__track[data-v-70940a00]{position:relative;width:28px;height:15px;flex:none;padding:0;background-color:var(--color-outline);border:0;border-radius:8px;cursor:pointer}.sw__track.on[data-v-70940a00]{background-color:var(--color-accent)}.sw__track[data-v-70940a00]:disabled{cursor:default}.sw__track[data-v-70940a00]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.sw__knob[data-v-70940a00]{position:absolute;top:2px;left:2px;width:11px;height:11px;border-radius:50%;background-color:var(--color-pane);transition:left .12s ease}.sw__track.on .sw__knob[data-v-70940a00]{left:15px}@media(prefers-reduced-motion:reduce){.sw__knob[data-v-70940a00]{transition:none}}.sw__label[data-v-70940a00]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.tabs[data-v-f7c65d26]{display:flex;flex-wrap:wrap;align-items:stretch;gap:1px;min-height:var(--spacing-panelHeader);padding:0 6px;border-bottom:1px solid var(--color-divider)}.tab[data-v-f7c65d26]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 10px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab[data-v-f7c65d26]:hover:not(:disabled){color:var(--color-fg)}.tab[data-v-f7c65d26]:disabled{opacity:.45;cursor:default}.tab.on[data-v-f7c65d26]{color:var(--color-fg);font-weight:600}.tab.on[data-v-f7c65d26]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab[data-v-f7c65d26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.tab__count[data-v-f7c65d26]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}\n";})();
import { defineComponent as w, createElementBlock as i, openBlock as l, normalizeClass as y, createCommentVNode as v, renderSlot as g, createElementVNode as h, toDisplayString as b, mergeModels as V, useModel as q, useId as W, withDirectives as S, unref as M, vModelCheckbox as Ye, createTextVNode as Y, computed as H, vModelText as R, vModelDynamic as ne, reactive as de, ref as _, watch as oe, onMounted as se, onBeforeUnmount as re, normalizeStyle as ue, withKeys as N, withModifiers as I, createBlock as Ke, Teleport as Ee, Fragment as J, renderList as Z, vModelRadio as We, vModelSelect as Le } from "vue";
const Ne = ["type", "disabled", "aria-busy"], Te = {
  key: 0,
  class: "btn__spinner",
  "aria-hidden": "true"
}, Ue = /* @__PURE__ */ w({
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
    return (t, d) => (l(), i("button", {
      type: e.type,
      class: y(["btn", `btn--${e.intent}`, `btn--${e.size}`, { "btn--block": e.block, "btn--busy": e.busy }]),
      disabled: e.disabled || e.busy,
      "aria-busy": e.busy || void 0
    }, [
      e.busy ? (l(), i("span", Te)) : v("", !0),
      g(t.$slots, "default", {}, void 0, !0)
    ], 10, Ne));
  }
}), x = (e, t) => {
  const d = e.__vccOpts || e;
  for (const [o, c] of t)
    d[o] = c;
  return d;
}, ce = /* @__PURE__ */ x(Ue, [["__scopeId", "data-v-124239c3"]]), Xe = {
  key: 0,
  class: "card__head"
}, Ae = { class: "card__title" }, Fe = /* @__PURE__ */ w({
  __name: "DCard",
  props: {
    title: {},
    padded: { type: Boolean, default: !0 },
    interactive: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, d) => (l(), i("section", {
      class: y(["card", { "card--interactive": e.interactive }])
    }, [
      e.title || t.$slots.header ? (l(), i("header", Xe, [
        g(t.$slots, "header", {}, () => [
          h("h3", Ae, b(e.title), 1)
        ], !0),
        d[0] || (d[0] = h("span", { class: "card__spacer" }, null, -1)),
        g(t.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0),
      h("div", {
        class: y(["card__body", { "card__body--padded": e.padded }])
      }, [
        g(t.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), fe = /* @__PURE__ */ x(Fe, [["__scopeId", "data-v-8c187da1"]]), Oe = ["id", "disabled"], Re = ["for"], Pe = {
  key: 0,
  class: "check__hint"
}, je = /* @__PURE__ */ w({
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
    const t = q(e, "modelValue"), d = W();
    return (o, c) => (l(), i("div", {
      class: y(["check", { "check--off": e.disabled }])
    }, [
      S(h("input", {
        id: M(d),
        "onUpdate:modelValue": c[0] || (c[0] = (r) => t.value = r),
        class: "check__box",
        type: "checkbox",
        disabled: e.disabled
      }, null, 8, Oe), [
        [Ye, t.value]
      ]),
      h("label", {
        for: M(d),
        class: "check__label"
      }, [
        g(o.$slots, "default", {}, () => [
          Y(b(e.label), 1)
        ], !0),
        e.hint ? (l(), i("span", Pe, b(e.hint), 1)) : v("", !0)
      ], 8, Re)
    ], 2));
  }
}), me = /* @__PURE__ */ x(je, [["__scopeId", "data-v-5fb92780"]]), _e = /* @__PURE__ */ w({
  __name: "DChip",
  props: {
    tone: { default: "neutral" },
    numeric: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(e) {
    return (t, d) => (l(), i("span", {
      class: y(["chip", `chip--${e.tone}`, { "chip--num": e.numeric }])
    }, [
      g(t.$slots, "default", {}, void 0, !0),
      e.removable ? (l(), i("button", {
        key: 0,
        type: "button",
        class: "chip__x",
        "aria-label": "Entfernen",
        onClick: d[0] || (d[0] = (o) => t.$emit("remove"))
      }, " ✕ ")) : v("", !0)
    ], 2));
  }
}), ve = /* @__PURE__ */ x(_e, [["__scopeId", "data-v-30700fa0"]]), Ge = ["for"], Je = { class: "field__control" }, Ze = { class: "row" }, Qe = ["id", "value", "disabled", "aria-label"], pe = ["disabled", "aria-label"], et = {
  key: 0,
  class: "field__hint"
}, tt = /* @__PURE__ */ w({
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
    const t = q(e, "modelValue"), d = W(), o = H(() => {
      const c = (t.value ?? "").trim();
      return /^#[0-9a-f]{6}$/i.test(c) ? c : /^#[0-9a-f]{3}$/i.test(c) ? "#" + [...c.slice(1)].map((r) => r + r).join("") : "#000000";
    });
    return (c, r) => (l(), i("div", {
      class: y(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: M(d)
      }, b(e.label), 9, Ge)) : v("", !0),
      h("div", Je, [
        h("div", Ze, [
          h("input", {
            id: M(d),
            class: "picker",
            type: "color",
            value: o.value,
            disabled: e.disabled,
            "aria-label": e.label ?? "Farbe",
            onInput: r[0] || (r[0] = (s) => t.value = s.target.value)
          }, null, 40, Qe),
          S(h("input", {
            "onUpdate:modelValue": r[1] || (r[1] = (s) => t.value = s),
            class: "hex",
            type: "text",
            spellcheck: "false",
            disabled: e.disabled,
            "aria-label": e.label ? `${e.label} als Hexwert` : "Farbe als Hexwert"
          }, null, 8, pe), [
            [R, t.value]
          ])
        ]),
        e.hint ? (l(), i("p", et, b(e.hint), 1)) : v("", !0)
      ])
    ], 2));
  }
}), be = /* @__PURE__ */ x(tt, [["__scopeId", "data-v-0c4cf022"]]), lt = ["for"], at = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, it = { class: "field__control" }, nt = ["id", "type", "disabled", "required", "min", "max", "aria-invalid"], dt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, ot = {
  key: 1,
  class: "field__hint"
}, st = /* @__PURE__ */ w({
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
    const t = q(e, "modelValue"), d = W(), o = { date: "date", time: "time", datetime: "datetime-local" };
    return (c, r) => (l(), i("div", {
      class: y(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: M(d)
      }, [
        Y(b(e.label) + " ", 1),
        e.required ? (l(), i("span", at, "*")) : v("", !0)
      ], 8, lt)) : v("", !0),
      h("div", it, [
        S(h("input", {
          id: M(d),
          "onUpdate:modelValue": r[0] || (r[0] = (s) => t.value = s),
          class: y(["input", { "input--invalid": !!e.error }]),
          type: o[e.mode],
          disabled: e.disabled,
          required: e.required,
          min: e.min,
          max: e.max,
          "aria-invalid": !!e.error || void 0
        }, null, 10, nt), [
          [ne, t.value]
        ]),
        e.error ? (l(), i("p", dt, b(e.error), 1)) : e.hint ? (l(), i("p", ot, b(e.hint), 1)) : v("", !0)
      ])
    ], 2));
  }
}), he = /* @__PURE__ */ x(st, [["__scopeId", "data-v-3afdb10c"]]), rt = {
  key: 0,
  class: "rule__label"
}, ut = /* @__PURE__ */ w({
  __name: "DDivider",
  props: {
    label: {}
  },
  setup(e) {
    return (t, d) => (l(), i("div", {
      class: y(["rule", { "rule--labelled": e.label }]),
      role: "separator"
    }, [
      e.label ? (l(), i("span", rt, b(e.label), 1)) : v("", !0)
    ], 2));
  }
}), ye = /* @__PURE__ */ x(ut, [["__scopeId", "data-v-521e9319"]]), ct = ["for"], ft = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, mt = { class: "field__control" }, vt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, bt = {
  key: 1,
  class: "field__hint"
}, ht = /* @__PURE__ */ w({
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
    return (t, d) => (l(), i("div", {
      class: y(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: t.$props.for
      }, [
        Y(b(e.label) + " ", 1),
        e.required ? (l(), i("span", ft, "*")) : v("", !0)
      ], 8, ct)) : v("", !0),
      h("div", mt, [
        g(t.$slots, "default", {}, void 0, !0),
        e.error ? (l(), i("p", vt, b(e.error), 1)) : e.hint ? (l(), i("p", bt, b(e.hint), 1)) : v("", !0)
      ])
    ], 2));
  }
}), ke = /* @__PURE__ */ x(ht, [["__scopeId", "data-v-1a8ee938"]]), T = de(/* @__PURE__ */ new Map());
let yt = 0;
const $e = de({ left: 240, right: 240 });
function te(e) {
  return $e[e];
}
function G(e, t) {
  $e[e] = t;
}
function le(e, t, d, o) {
  const c = T.get(e);
  T.set(e, { side: t, want: d, min: o, seq: c?.seq ?? yt++ });
}
function ae(e) {
  T.delete(e);
}
function we(e) {
  return [...T.entries()].filter(([, t]) => t.side === e).sort((t, d) => t[1].seq - d[1].seq);
}
function kt(e, t) {
  const d = T.get(e);
  if (!d) return null;
  const o = we(d.side);
  if (!o.length) return null;
  const c = o.reduce((k, [, C]) => k + C.min, 0), r = c > t && c > 0 ? t / c : 1, s = Math.max(0, t - c * r), m = o.reduce((k, [, C]) => k + Math.max(1, C.want), 0);
  let n = 0;
  for (let k = 0; k < o.length; k++) {
    const [C, K] = o[k], z = k === o.length - 1 ? Math.max(0, t - n) : Math.round(K.min * r + s * Math.max(1, K.want) / m);
    if (C === e) return { y: n, h: z };
    n += z;
  }
  return null;
}
function $t(e) {
  return we(e).length;
}
const wt = ["aria-label"], xt = ["aria-label"], gt = { class: "fw__title" }, Mt = ["aria-label"], Dt = { class: "fw__body" }, Bt = ["aria-label"], O = 24, Vt = /* @__PURE__ */ w({
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
  setup(e, { expose: t, emit: d }) {
    const o = e, c = d, r = H(() => o.dockable || o.initial?.dock != null), s = { x: 16, y: 16, w: 240, h: 320, dock: null, freeY: 16, freeH: 320 };
    function m() {
      const a = { ...s, ...o.initial };
      if (a.freeY = a.y, a.freeH = a.h, !o.rememberAs) return a;
      try {
        const f = localStorage.getItem(o.rememberAs);
        if (!f) return a;
        const u = JSON.parse(f), $ = (B, j) => Number.isFinite(B) ? B : j;
        return {
          x: $(u?.x, a.x),
          y: $(u?.y, a.y),
          w: $(u?.w, a.w),
          h: $(u?.h, a.h),
          dock: u?.dock === "left" || u?.dock === "right" ? u.dock : null,
          freeY: $(u?.freeY, a.y),
          freeH: $(u?.freeH, a.h)
        };
      } catch {
        return a;
      }
    }
    const n = _(m()), k = _();
    function C() {
      if (o.rememberAs)
        try {
          localStorage.setItem(o.rememberAs, JSON.stringify(n.value));
        } catch {
        }
    }
    function K(a) {
      return Math.min(o.maxWidth, Math.max(o.minWidth, a));
    }
    function L() {
      const a = k.value?.offsetParent;
      return {
        width: a?.clientWidth ?? window.innerWidth,
        height: a?.clientHeight ?? window.innerHeight
      };
    }
    const z = H(() => o.rememberAs ?? o.title), E = _({ width: 0, height: 0 });
    function U() {
      const a = n.value.dock;
      if (!a) return;
      const f = kt(z.value, E.value.height);
      if (!f) return;
      const u = te(a);
      n.value = {
        ...n.value,
        w: u,
        x: a === "left" ? 0 : Math.max(0, E.value.width - u),
        y: f.y,
        h: f.h
      };
    }
    oe(
      () => {
        const a = n.value.dock;
        return a ? `${$t(a)}:${te(a)}` : "";
      },
      (a) => {
        a && (E.value = L(), U());
      }
    );
    function X(a, f) {
      const u = n.value;
      E.value = f;
      const $ = u.dock ? u.freeY : u.y, B = u.dock ? u.freeH : u.h;
      u.dock || G(a, K(u.w)), le(z.value, a, B, o.minHeight), n.value = { ...u, dock: a, freeY: $, freeH: B }, U();
    }
    function Q() {
      const a = n.value;
      a.dock && (ae(z.value), n.value = { ...a, y: a.freeY, h: a.freeH, dock: null });
    }
    let D = null;
    function p(a) {
      if (!D) return;
      const f = L();
      if (D.kind === "move") {
        const $ = n.value.w, B = Math.min(
          Math.max(0, D.fromX + (a.clientX - D.startX)),
          Math.max(0, f.width - $)
        ), j = Math.min(
          Math.max(0, D.fromY + (a.clientY - D.startY)),
          Math.max(0, f.height - 28)
        );
        r.value && B <= O ? X("left", f) : r.value && B + $ >= f.width - O ? X("right", f) : (Q(), n.value = { ...n.value, x: B, y: j });
        return;
      }
      const u = K(D.fromW + (a.clientX - D.startX));
      if (n.value.dock) {
        E.value = f, G(n.value.dock, u), U();
        return;
      }
      n.value = {
        ...n.value,
        w: u,
        h: Math.max(o.minHeight, D.fromH + (a.clientY - D.startY))
      };
    }
    function P() {
      D && C(), D = null, window.removeEventListener("pointermove", p), window.removeEventListener("pointerup", P), document.body.style.userSelect = "";
    }
    function ee(a) {
      D = a, window.addEventListener("pointermove", p), window.addEventListener("pointerup", P), document.body.style.userSelect = "none";
    }
    const Ce = (a) => ee({ kind: "move", startX: a.clientX, startY: a.clientY, fromX: n.value.x, fromY: n.value.y }), ze = (a) => ee({ kind: "size", startX: a.clientX, startY: a.clientY, fromW: n.value.w, fromH: n.value.h });
    function A(a, f) {
      const u = L(), $ = n.value.w, B = Math.min(Math.max(0, n.value.x + a), Math.max(0, u.width - $));
      r.value && B <= O ? X("left", u) : r.value && B + $ >= u.width - O ? X("right", u) : (Q(), n.value = {
        ...n.value,
        x: B,
        y: Math.min(Math.max(0, n.value.y + f), Math.max(0, u.height - 28))
      }), C();
    }
    function F() {
      const a = L();
      E.value = a;
      const f = n.value, u = Math.min(K(f.w), a.width);
      if (f.dock) {
        U();
        return;
      }
      const $ = Math.min(f.h, a.height);
      n.value = {
        ...f,
        w: u,
        h: $,
        x: Math.min(Math.max(0, f.x), Math.max(0, a.width - u)),
        y: Math.min(Math.max(0, f.y), Math.max(0, a.height - $))
      };
    }
    se(() => {
      if (n.value.dock) {
        const a = L();
        E.value = a, G(n.value.dock, K(n.value.w)), le(z.value, n.value.dock, n.value.freeH, o.minHeight);
      }
      F(), window.addEventListener("resize", F);
    }), re(() => {
      P(), ae(z.value), window.removeEventListener("resize", F);
    });
    const He = H(() => ({
      left: n.value.x + "px",
      top: n.value.y + "px",
      width: n.value.w + "px",
      height: n.value.h + "px",
      zIndex: String(o.layer)
    }));
    return t({ placement: n, keepInView: F }), (a, f) => (l(), i("aside", {
      ref_key: "root",
      ref: k,
      class: y([
        "fw",
        {
          "fw--docked": !!n.value.dock,
          "fw--left": n.value.dock === "left",
          "fw--right": n.value.dock === "right"
        }
      ]),
      style: ue(He.value),
      "aria-label": e.title
    }, [
      h("div", {
        class: "fw__bar",
        role: "toolbar",
        tabindex: "0",
        "aria-label": `${e.title} verschieben - mit den Pfeiltasten bewegen`,
        onPointerdown: f[2] || (f[2] = I((u) => Ce(u), ["prevent"])),
        onKeydown: [
          f[3] || (f[3] = N(I((u) => A(-16, 0), ["prevent"]), ["left"])),
          f[4] || (f[4] = N(I((u) => A(16, 0), ["prevent"]), ["right"])),
          f[5] || (f[5] = N(I((u) => A(0, -16), ["prevent"]), ["up"])),
          f[6] || (f[6] = N(I((u) => A(0, 16), ["prevent"]), ["down"]))
        ]
      }, [
        h("span", gt, b(e.title), 1),
        g(a.$slots, "actions", {}, void 0, !0),
        e.closable ? (l(), i("button", {
          key: 0,
          type: "button",
          class: "fw__act",
          title: "Schließen",
          "aria-label": `${e.title} schließen`,
          onPointerdown: f[0] || (f[0] = I(() => {
          }, ["stop"])),
          onClick: f[1] || (f[1] = (u) => c("close"))
        }, " × ", 40, Mt)) : v("", !0)
      ], 40, xt),
      h("div", Dt, [
        g(a.$slots, "default", {}, void 0, !0)
      ]),
      e.resizable ? (l(), i("div", {
        key: 0,
        class: "fw__grip",
        role: "separator",
        "aria-label": `Größe von ${e.title}`,
        title: "Größe ändern",
        onPointerdown: f[7] || (f[7] = I((u) => ze(u), ["prevent"]))
      }, null, 40, Bt)) : v("", !0)
    ], 14, wt));
  }
}), xe = /* @__PURE__ */ x(Vt, [["__scopeId", "data-v-b6b4a10b"]]), It = ["aria-hidden", "aria-label", "role"], qt = /* @__PURE__ */ w({
  __name: "DIcon",
  props: {
    name: {},
    size: { default: "md" },
    tone: {},
    decorative: { type: Boolean, default: !0 },
    label: {}
  },
  setup(e) {
    return (t, d) => (l(), i("i", {
      class: y(["icon", `icon--${e.size}`]),
      style: ue(e.tone ? { color: `var(--${e.tone})` } : void 0),
      "aria-hidden": e.decorative ? "true" : void 0,
      "aria-label": e.decorative ? void 0 : e.label ?? e.name,
      role: e.decorative ? void 0 : "img"
    }, b(e.name), 15, It));
  }
}), ge = /* @__PURE__ */ x(qt, [["__scopeId", "data-v-15dffeec"]]), St = ["for"], Ct = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, zt = { class: "field__control" }, Ht = ["id", "rows", "placeholder", "disabled", "readonly", "required", "aria-invalid"], Yt = ["id", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "step", "aria-invalid"], Kt = {
  key: 2,
  class: "suffix"
}, Et = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Wt = {
  key: 1,
  class: "field__hint"
}, Lt = /* @__PURE__ */ w({
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
    const t = q(e, "modelValue"), d = e, o = W(), c = H(() => d.type === "number");
    return (r, s) => (l(), i("div", {
      class: y(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: M(o)
      }, [
        Y(b(e.label) + " ", 1),
        e.required ? (l(), i("span", Ct, "*")) : v("", !0)
      ], 8, St)) : v("", !0),
      h("div", zt, [
        h("div", {
          class: y(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.rows ? S((l(), i("textarea", {
            key: 0,
            id: M(o),
            "onUpdate:modelValue": s[0] || (s[0] = (m) => t.value = m),
            class: "input input--area",
            rows: e.rows,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, null, 8, Ht)), [
            [R, t.value]
          ]) : S((l(), i("input", {
            key: 1,
            id: M(o),
            "onUpdate:modelValue": s[1] || (s[1] = (m) => t.value = m),
            class: y(["input", { "input--num": c.value }]),
            type: e.type,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            min: e.min,
            max: e.max,
            step: e.step,
            "aria-invalid": !!e.error || void 0
          }, null, 10, Yt)), [
            [ne, t.value]
          ]),
          e.suffix ? (l(), i("span", Kt, b(e.suffix), 1)) : v("", !0)
        ], 2),
        e.error ? (l(), i("p", Et, b(e.error), 1)) : e.hint ? (l(), i("p", Wt, b(e.hint), 1)) : v("", !0)
      ])
    ], 2));
  }
}), Me = /* @__PURE__ */ x(Lt, [["__scopeId", "data-v-fb05f36e"]]), Nt = ["aria-label"], Tt = {
  key: 0,
  class: "dialog__head"
}, Ut = { class: "dialog__title" }, Xt = { class: "dialog__body" }, At = {
  key: 1,
  class: "dialog__foot"
}, Ft = /* @__PURE__ */ w({
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
  setup(e, { emit: t }) {
    const d = q(e, "modelValue"), o = e, c = t;
    function r() {
      o.persistent || (d.value = !1, c("cancel"));
    }
    function s(m) {
      m.key === "Escape" && d.value && r();
    }
    return oe(d, (m) => {
      document.body.style.overflow = m ? "hidden" : "";
    }), se(() => window.addEventListener("keydown", s)), re(() => {
      window.removeEventListener("keydown", s), document.body.style.overflow = "";
    }), (m, n) => (l(), Ke(Ee, { to: "body" }, [
      d.value ? (l(), i("div", {
        key: 0,
        class: "scrim",
        onClick: I(r, ["self"])
      }, [
        h("div", {
          class: y(["dialog", `dialog--${e.size}`]),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title
        }, [
          e.title || m.$slots.header ? (l(), i("header", Tt, [
            g(m.$slots, "header", {}, () => [
              h("h2", Ut, b(e.title), 1)
            ], !0),
            e.persistent ? v("", !0) : (l(), i("button", {
              key: 0,
              type: "button",
              class: "dialog__close",
              "aria-label": "Schließen",
              onClick: r
            }, " ✕ "))
          ])) : v("", !0),
          h("div", Xt, [
            g(m.$slots, "default", {}, void 0, !0)
          ]),
          m.$slots.actions ? (l(), i("footer", At, [
            g(m.$slots, "actions", {}, void 0, !0)
          ])) : v("", !0)
        ], 10, Nt)
      ])) : v("", !0)
    ]));
  }
}), De = /* @__PURE__ */ x(Ft, [["__scopeId", "data-v-03f9e875"]]), Ot = {
  key: 0,
  class: "field__label"
}, Rt = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Pt = { class: "field__control" }, jt = ["aria-label"], _t = ["name", "value", "disabled", "required"], Gt = { class: "choice__label" }, Jt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Zt = {
  key: 1,
  class: "field__hint"
}, Qt = /* @__PURE__ */ w({
  __name: "DRadioGroup",
  props: /* @__PURE__ */ V({
    options: {},
    label: {},
    valueKey: { default: "uid" },
    labelKey: { default: "name" },
    hint: {},
    error: {},
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    inline: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = q(e, "modelValue"), d = e, o = W(), c = H(
      () => (d.options ?? []).map((r) => {
        if (r === null || typeof r != "object")
          return { value: r, label: String(r) };
        const s = r, m = d.valueKey in s ? s[d.valueKey] : s, n = d.labelKey in s ? s[d.labelKey] : m;
        return { value: m, label: String(n ?? "") };
      })
    );
    return (r, s) => (l(), i("div", {
      class: y(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), i("span", Ot, [
        Y(b(e.label) + " ", 1),
        e.required ? (l(), i("span", Rt, "*")) : v("", !0)
      ])) : v("", !0),
      h("div", Pt, [
        h("div", {
          class: y(["choices", { "choices--inline": e.inline }]),
          role: "radiogroup",
          "aria-label": e.label
        }, [
          (l(!0), i(J, null, Z(c.value, (m, n) => (l(), i("label", {
            key: n,
            class: y(["choice", { "choice--off": e.disabled }])
          }, [
            S(h("input", {
              "onUpdate:modelValue": s[0] || (s[0] = (k) => t.value = k),
              class: "choice__dot",
              type: "radio",
              name: M(o),
              value: m.value,
              disabled: e.disabled,
              required: e.required
            }, null, 8, _t), [
              [We, t.value]
            ]),
            h("span", Gt, b(m.label), 1)
          ], 2))), 128))
        ], 10, jt),
        e.error ? (l(), i("p", Jt, b(e.error), 1)) : e.hint ? (l(), i("p", Zt, b(e.hint), 1)) : v("", !0)
      ])
    ], 2));
  }
}), Be = /* @__PURE__ */ x(Qt, [["__scopeId", "data-v-da414860"]]), pt = ["for"], el = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, tl = { class: "field__control" }, ll = ["id", "disabled", "required", "aria-invalid"], al = {
  key: 0,
  value: ""
}, il = ["value"], nl = {
  key: 0,
  class: "field__error",
  role: "alert"
}, dl = {
  key: 1,
  class: "field__hint"
}, ol = /* @__PURE__ */ w({
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
    const t = q(e, "modelValue"), d = e, o = W(), c = H(
      () => (d.options ?? []).map((s) => {
        if (s === null || typeof s != "object")
          return { value: s, label: String(s) };
        const m = s, n = d.valueKey in m ? m[d.valueKey] : m, k = d.labelKey in m ? m[d.labelKey] : n;
        return { value: n, label: String(k ?? "") };
      })
    ), r = H({
      get() {
        const s = c.value.findIndex((m) => m.value === t.value);
        return s >= 0 ? String(s) : "";
      },
      set(s) {
        t.value = s === "" ? void 0 : c.value[Number(s)]?.value;
      }
    });
    return (s, m) => (l(), i("div", {
      class: y(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: M(o)
      }, [
        Y(b(e.label) + " ", 1),
        e.required ? (l(), i("span", el, "*")) : v("", !0)
      ], 8, pt)) : v("", !0),
      h("div", tl, [
        h("div", {
          class: y(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          S(h("select", {
            id: M(o),
            "onUpdate:modelValue": m[0] || (m[0] = (n) => r.value = n),
            class: "select",
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            e.clearable || t.value === void 0 ? (l(), i("option", al, b(e.placeholder ?? "—"), 1)) : v("", !0),
            (l(!0), i(J, null, Z(c.value, (n, k) => (l(), i("option", {
              key: k,
              value: String(k)
            }, b(n.label), 9, il))), 128))
          ], 8, ll), [
            [Le, r.value]
          ]),
          m[1] || (m[1] = h("span", {
            class: "chevron",
            "aria-hidden": "true"
          }, "▾", -1))
        ], 2),
        e.error ? (l(), i("p", nl, b(e.error), 1)) : e.hint ? (l(), i("p", dl, b(e.hint), 1)) : v("", !0)
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ x(ol, [["__scopeId", "data-v-3e122607"]]), sl = ["for"], rl = { class: "field__control row" }, ul = ["id", "min", "max", "step", "disabled"], cl = ["min", "max", "step", "disabled", "aria-label"], fl = {
  key: 0,
  class: "suffix"
}, ml = /* @__PURE__ */ w({
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
    const t = q(e, "modelValue"), d = W();
    return (o, c) => (l(), i("div", {
      class: y(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: M(d)
      }, b(e.label), 9, sl)) : v("", !0),
      h("div", rl, [
        S(h("input", {
          id: M(d),
          "onUpdate:modelValue": c[0] || (c[0] = (r) => t.value = r),
          class: "range",
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled
        }, null, 8, ul), [
          [
            R,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        S(h("input", {
          "onUpdate:modelValue": c[1] || (c[1] = (r) => t.value = r),
          class: "num",
          type: "number",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label ? `${e.label} als Zahl` : "Wert"
        }, null, 8, cl), [
          [
            R,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        e.suffix ? (l(), i("span", fl, b(e.suffix), 1)) : v("", !0)
      ])
    ], 2));
  }
}), Ie = /* @__PURE__ */ x(ml, [["__scopeId", "data-v-ed7d97ce"]]), vl = ["aria-checked", "aria-label", "disabled"], bl = /* @__PURE__ */ w({
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
    const t = q(e, "modelValue");
    return (d, o) => (l(), i("div", {
      class: y(["sw", { "sw--off": e.disabled }])
    }, [
      h("button", {
        type: "button",
        role: "switch",
        "aria-checked": !!t.value,
        "aria-label": e.label,
        disabled: e.disabled,
        class: y(["sw__track", { on: t.value }]),
        onClick: o[0] || (o[0] = (c) => t.value = !t.value)
      }, [...o[2] || (o[2] = [
        h("span", { class: "sw__knob" }, null, -1)
      ])], 10, vl),
      e.label || d.$slots.default ? (l(), i("span", {
        key: 0,
        class: "sw__label",
        onClick: o[1] || (o[1] = (c) => !e.disabled && (t.value = !t.value))
      }, [
        g(d.$slots, "default", {}, () => [
          Y(b(e.label), 1)
        ], !0)
      ])) : v("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ x(bl, [["__scopeId", "data-v-70940a00"]]), hl = ["aria-label"], yl = ["aria-selected", "tabindex", "disabled", "onClick"], kl = {
  key: 0,
  class: "tab__count"
}, $l = /* @__PURE__ */ w({
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
    const t = q(e, "modelValue"), d = e;
    function o(c) {
      const r = d.tabs.filter((n) => !n.disabled), s = r.findIndex((n) => n.id === t.value), m = r[(s + c + r.length) % r.length];
      m && (t.value = m.id);
    }
    return (c, r) => (l(), i("div", {
      class: "tabs",
      role: "tablist",
      "aria-label": e.label,
      onKeydown: [
        r[0] || (r[0] = N(I((s) => o(-1), ["prevent"]), ["left"])),
        r[1] || (r[1] = N(I((s) => o(1), ["prevent"]), ["right"]))
      ]
    }, [
      (l(!0), i(J, null, Z(e.tabs, (s) => (l(), i("button", {
        key: s.id,
        type: "button",
        role: "tab",
        "aria-selected": t.value === s.id,
        tabindex: t.value === s.id ? 0 : -1,
        disabled: s.disabled,
        class: y(["tab", { on: t.value === s.id }]),
        onClick: (m) => t.value = s.id
      }, [
        Y(b(s.label) + " ", 1),
        s.count !== void 0 ? (l(), i("span", kl, b(s.count), 1)) : v("", !0)
      ], 10, yl))), 128)),
      g(c.$slots, "actions", {}, void 0, !0)
    ], 40, hl));
  }
}), Se = /* @__PURE__ */ x($l, [["__scopeId", "data-v-f7c65d26"]]), wl = {
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
  DRadioGroup: Be,
  DSelect: Ve,
  DSlider: Ie,
  DSwitch: qe,
  DTabs: Se
}, xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONTROLS: wl,
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
  DRadioGroup: Be,
  DSelect: Ve,
  DSlider: Ie,
  DSwitch: qe,
  DTabs: Se
}, Symbol.toStringTag, { value: "Module" })), ie = "org.eclipse.daanse.board.app.ui.vue.controls", gl = "0.0.1-next.1";
async function Dl(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${ie}: tsm runtime is not initialized`);
  t.register(ie, xl, gl, "ui.vue.controls"), await void 0;
}
async function Bl(e) {
  await void 0;
}
export {
  wl as CONTROLS,
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
  Be as DRadioGroup,
  Ve as DSelect,
  Ie as DSlider,
  qe as DSwitch,
  Se as DTabs,
  Dl as activate,
  Bl as deactivate
};
