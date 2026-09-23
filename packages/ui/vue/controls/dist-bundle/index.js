(function(){var i="ui.vue.controls",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".btn[data-v-5b01af26]{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;white-space:nowrap;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-5b01af26]:hover:not(:disabled){border-color:var(--color-outline)}.btn[data-v-5b01af26]:active:not(:disabled){transform:translateY(.5px)}.btn[data-v-5b01af26]:disabled{opacity:.45;cursor:default}.btn[data-v-5b01af26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.btn--sm[data-v-5b01af26]{height:22px;padding:0 9px;font-size:var(--text-xs)}.btn--md[data-v-5b01af26]{height:26px;padding:0 12px}.btn--lg[data-v-5b01af26]{height:32px;padding:0 16px;font-size:var(--text-base)}.btn--block[data-v-5b01af26]{display:flex;width:100%}.btn--primary[data-v-5b01af26]{color:var(--color-onAccent);background-color:var(--color-accent);border-color:var(--color-accent);font-weight:600}.btn--primary[data-v-5b01af26]:hover:not(:disabled){filter:brightness(1.08)}.btn--quiet[data-v-5b01af26]{background-color:transparent;border-color:transparent;color:var(--color-dim)}.btn--quiet[data-v-5b01af26]:hover:not(:disabled){color:var(--color-fg);background-color:var(--color-raised);border-color:var(--color-divider)}.btn--danger[data-v-5b01af26]{color:var(--color-err);border-color:color-mix(in srgb,var(--color-err) 45%,transparent)}.btn--danger[data-v-5b01af26]:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-err) 12%,transparent);border-color:var(--color-err)}.btn--primary[data-v-5b01af26]{position:relative;isolation:isolate}.btn--primary[data-v-5b01af26]:before{content:\"\";position:absolute;inset:-7px;z-index:-1;border-radius:9999px;background-image:linear-gradient(45deg,var(--color-accent),color-mix(in srgb,var(--color-accent) 55%,var(--color-ok)),var(--color-accent));filter:blur(34px);opacity:0;transition:opacity .24s cubic-bezier(.2,.6,.2,1);pointer-events:none}.btn--primary[data-v-5b01af26]:hover:not(:disabled):before{opacity:.6}.btn--primary[data-v-5b01af26]:focus-visible:before{opacity:.35}:root[data-theme=light] .btn--primary[data-v-5b01af26]:before{content:none}@media(prefers-reduced-motion:reduce){.btn--primary[data-v-5b01af26]:before{transition-duration:.01ms}}.btn__spinner[data-v-5b01af26]{width:11px;height:11px;flex:none;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:btn-spin-5b01af26 .7s linear infinite}@keyframes btn-spin-5b01af26{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.btn__spinner[data-v-5b01af26]{animation-duration:2s}}.card[data-v-8c187da1]{display:flex;flex-direction:column;min-width:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.card--interactive[data-v-8c187da1]{cursor:pointer}.card--interactive[data-v-8c187da1]:hover{border-color:var(--color-outline)}.card__head[data-v-8c187da1]{display:flex;align-items:center;gap:8px;flex:none;height:var(--spacing-panelHeader);padding:0 10px;border-bottom:1px solid var(--color-divider)}.card__title[data-v-8c187da1]{margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim)}.card__spacer[data-v-8c187da1]{flex:1 1 auto}.card__body[data-v-8c187da1]{flex:1 1 auto;min-height:0}.card__body--padded[data-v-8c187da1]{padding:10px 12px}.check[data-v-e080554d]{display:flex;align-items:baseline;gap:7px;margin-bottom:6px}.check--off[data-v-e080554d]{opacity:.5}.check__box[data-v-e080554d]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:pointer}.check__box[data-v-e080554d]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.check__label[data-v-e080554d]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.check__hint[data-v-e080554d]{display:block;font-size:var(--text-xs);color:var(--color-dim)}.chip[data-v-1c26d827]{display:inline-flex;align-items:center;gap:4px;padding:1px 7px;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.5;border-radius:var(--radius-xs);white-space:nowrap}.chip--num[data-v-1c26d827]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.chip--neutral[data-v-1c26d827]{color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider)}.chip--accent[data-v-1c26d827]{color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent)}.chip--ok[data-v-1c26d827]{color:var(--color-ok);background-color:color-mix(in srgb,var(--color-ok) 14%,transparent)}.chip--warn[data-v-1c26d827]{color:var(--color-warn);background-color:color-mix(in srgb,var(--color-warn) 14%,transparent)}.chip--err[data-v-1c26d827]{color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 14%,transparent)}.chip__x[data-v-1c26d827]{font-size:9px;color:inherit;background:none;border:0;padding:0;cursor:pointer;opacity:.7}.chip__x[data-v-1c26d827]:hover{opacity:1}.field[data-v-a14fb9a0]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-a14fb9a0]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-a14fb9a0]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-a14fb9a0]{width:auto}.field__control[data-v-a14fb9a0]{flex:1 1 auto;min-width:0}.field__hint[data-v-a14fb9a0]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.row[data-v-a14fb9a0]{display:flex;align-items:center;gap:6px}.picker[data-v-a14fb9a0]{width:26px;height:26px;flex:none;padding:2px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.picker[data-v-a14fb9a0]:focus-visible,.hex[data-v-a14fb9a0]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.hex[data-v-a14fb9a0]{flex:1 1 auto;min-width:0;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.picker[data-v-a14fb9a0]:disabled,.hex[data-v-a14fb9a0]:disabled{opacity:.5}.field[data-v-3afdb10c]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3afdb10c]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3afdb10c]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3afdb10c]{width:auto}.field__required[data-v-3afdb10c]{color:var(--color-err)}.field__control[data-v-3afdb10c]{flex:1 1 auto;min-width:0}.field__hint[data-v-3afdb10c],.field__error[data-v-3afdb10c]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.field__error[data-v-3afdb10c]{color:var(--color-err)}.input[data-v-3afdb10c]{width:100%;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.input--invalid[data-v-3afdb10c]{border-color:var(--color-err)}.input[data-v-3afdb10c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.input[data-v-3afdb10c]:disabled{opacity:.5}.rule[data-v-521e9319]{height:1px;margin:12px 0;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]{display:flex;align-items:center;gap:8px;height:auto;background:none;margin:14px 0 7px}.rule--labelled[data-v-521e9319]:before,.rule--labelled[data-v-521e9319]:after{content:\"\";height:1px;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]:before{width:10px;flex:none}.rule--labelled[data-v-521e9319]:after{flex:1 1 auto}.rule__label[data-v-521e9319]{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.field[data-v-1a8ee938]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-1a8ee938]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-1a8ee938]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-1a8ee938]{width:auto}.field__required[data-v-1a8ee938]{color:var(--color-err)}.field__control[data-v-1a8ee938]{flex:1 1 auto;min-width:0}.field__hint[data-v-1a8ee938],.field__error[data-v-1a8ee938]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-1a8ee938]{color:var(--color-err)}.fw[data-v-854a69fb]{position:absolute;display:flex;flex-direction:column;overflow:hidden;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.fw--docked[data-v-854a69fb]{border-radius:0}.fw--docked.fw--left[data-v-854a69fb]{border-left:0}.fw--docked.fw--right[data-v-854a69fb]{border-right:0}.fw--docked .fw__grip[data-v-854a69fb]{cursor:ew-resize}.fw__bar[data-v-854a69fb]{display:flex;align-items:center;gap:2px;flex:none;height:28px;padding:0 4px 0 10px;border-bottom:1px solid var(--color-divider);cursor:grab;touch-action:none;user-select:none}.fw__bar[data-v-854a69fb]:active{cursor:grabbing}.fw__bar[data-v-854a69fb]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.fw__title[data-v-854a69fb]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.fw__act[data-v-854a69fb]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.fw__act[data-v-854a69fb]:hover{color:var(--color-fg);background-color:var(--color-raised)}.fw__act[data-v-854a69fb]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.fw__body[data-v-854a69fb]{flex:1;min-height:0;overflow:auto}.fw__grip[data-v-854a69fb]{position:absolute;right:0;bottom:0;width:14px;height:14px;cursor:nwse-resize;touch-action:none}.fw__grip[data-v-854a69fb]:after{content:\"\";position:absolute;right:3px;bottom:3px;width:6px;height:6px;border-right:2px solid var(--color-outline, #3a4756);border-bottom:2px solid var(--color-outline, #3a4756)}.icon[data-v-15dffeec]{font-family:Material Icons,sans-serif;font-style:normal;font-weight:400;line-height:1;letter-spacing:normal;white-space:nowrap;direction:ltr;display:inline-block;vertical-align:middle;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-feature-settings:\"liga\";color:inherit}.icon--xs[data-v-15dffeec]{font-size:12px}.icon--sm[data-v-15dffeec]{font-size:14px}.icon--md[data-v-15dffeec]{font-size:16px}.icon--lg[data-v-15dffeec]{font-size:20px}.picker[data-v-25edc3ee]{display:flex;align-items:center;gap:10px}.picker__current[data-v-25edc3ee]{display:grid;flex:none;place-items:center;width:34px;height:34px;color:var(--color-accent);background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm);cursor:pointer}.picker__current[data-v-25edc3ee]:hover:not(:disabled){border-color:var(--color-accent)}.picker__current[data-v-25edc3ee]:disabled{cursor:default;opacity:.5}.picker__name[data-v-25edc3ee]{flex:1;min-width:0;overflow:hidden;font-size:.85rem;color:var(--color-dim);text-overflow:ellipsis;white-space:nowrap}.picker__clear[data-v-25edc3ee]{flex:none;padding:2px 6px;font:inherit;font-size:.78rem;color:var(--color-dim);background:none;border:0;cursor:pointer}.picker__clear[data-v-25edc3ee]:hover{color:var(--color-fg);text-decoration:underline}.picker__catch[data-v-25edc3ee]{position:fixed;inset:0;z-index:50000}.sheet[data-v-25edc3ee]{position:fixed;z-index:50001;top:50%;left:50%;display:flex;flex-direction:column;gap:10px;width:min(460px,calc(100vw - 32px));max-height:min(70vh,560px);padding:12px;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);transform:translate(-50%,-50%)}.sheet__search input[data-v-25edc3ee],.sheet__own input[data-v-25edc3ee]{width:100%;padding:6px 10px;font:inherit;color:var(--color-fg);background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm)}.sheet__grid[data-v-25edc3ee]{display:grid;flex:1 1 auto;grid-template-columns:repeat(auto-fill,minmax(44px,1fr));gap:4px;margin:0;padding:0;overflow-y:auto;list-style:none}.sheet__item[data-v-25edc3ee]{display:grid;place-items:center;width:100%;aspect-ratio:1;color:var(--color-fg);background:none;border:1px solid transparent;border-radius:var(--radius-sm);cursor:pointer}.sheet__item[data-v-25edc3ee]:hover{background-color:var(--color-sunken);border-color:var(--color-outline)}.sheet__item--on[data-v-25edc3ee]{color:var(--color-accent);border-color:var(--color-accent)}.sheet__none[data-v-25edc3ee]{flex:1 1 auto;margin:0;padding:16px 4px;font-size:.85rem;color:var(--color-dim)}.sheet__own[data-v-25edc3ee]{display:flex;align-items:center;gap:8px;padding-top:10px;border-top:1px solid var(--color-divider, var(--color-outline))}.sheet__own-label[data-v-25edc3ee]{flex:none;font-size:.8rem;color:var(--color-dim)}.sheet__own input[data-v-25edc3ee]{flex:1;min-width:0}.sheet__preview[data-v-25edc3ee]{display:grid;flex:none;place-items:center;width:28px;height:28px;color:var(--color-accent)}.sheet__take[data-v-25edc3ee]{flex:none;padding:5px 10px;font:inherit;font-size:.82rem;color:var(--color-fg);background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm);cursor:pointer}.sheet__take[data-v-25edc3ee]:disabled{cursor:default;opacity:.45}.sheet__warn[data-v-25edc3ee]{margin:0;font-size:.8rem;color:var(--color-err)}.field[data-v-a5fd75e2]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-a5fd75e2]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-a5fd75e2]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-a5fd75e2]{width:auto}.field__required[data-v-a5fd75e2]{color:var(--color-err)}.field__control[data-v-a5fd75e2]{flex:1 1 auto;min-width:0}.field__hint[data-v-a5fd75e2],.field__error[data-v-a5fd75e2]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-a5fd75e2]{color:var(--color-err)}.shell[data-v-a5fd75e2]{display:flex;align-items:center;gap:6px;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-a5fd75e2]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-a5fd75e2]{border-color:var(--color-err)}.shell--off[data-v-a5fd75e2]{opacity:.5}.shell--sm[data-v-a5fd75e2]{height:22px}.shell--md[data-v-a5fd75e2]{height:26px}.shell--lg[data-v-a5fd75e2]{height:32px}.shell[data-v-a5fd75e2]:has(.input--area){height:auto;padding:5px 8px}.input[data-v-a5fd75e2]{flex:1 1 auto;min-width:0;padding:0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none}.shell--lg .input[data-v-a5fd75e2]{font-size:var(--text-base)}.input--num[data-v-a5fd75e2]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.input--area[data-v-a5fd75e2]{resize:vertical;line-height:1.45}.input[data-v-a5fd75e2]::placeholder{color:var(--color-dim);opacity:.75}.suffix[data-v-a5fd75e2]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.scrim[data-v-9cc4419b]{position:fixed;inset:0;z-index:40000;display:grid;place-items:center;padding:24px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(4px)}.dialog[data-v-9cc4419b]{display:flex;flex-direction:column;max-height:100%;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.dialog--sm[data-v-9cc4419b]{width:380px}.dialog--md[data-v-9cc4419b]{width:560px}.dialog--lg[data-v-9cc4419b]{width:840px}.dialog__head[data-v-9cc4419b]{display:flex;align-items:center;gap:10px;flex:none;padding:9px 12px;border-bottom:1px solid var(--color-divider)}.dialog__title[data-v-9cc4419b]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.dialog__close[data-v-9cc4419b]{margin-left:auto;width:22px;height:22px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.dialog__close[data-v-9cc4419b]:hover{color:var(--color-fg);background-color:var(--color-raised)}.dialog__close[data-v-9cc4419b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.dialog__body[data-v-9cc4419b]{flex:1 1 auto;min-height:0;padding:14px 12px;overflow-y:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.dialog__foot[data-v-9cc4419b]{display:flex;align-items:center;justify-content:flex-end;gap:7px;flex:none;padding:9px 12px;border-top:1px solid var(--color-divider)}.field[data-v-da414860]{display:flex;align-items:flex-start;gap:10px;margin-bottom:7px}.field--stacked[data-v-da414860]{flex-direction:column;gap:4px}.field__label[data-v-da414860]{flex:none;width:120px;padding-top:2px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-da414860]{width:auto}.field__required[data-v-da414860]{color:var(--color-err)}.field__control[data-v-da414860]{flex:1 1 auto;min-width:0}.choices[data-v-da414860]{display:flex;flex-direction:column;gap:4px}.choices--inline[data-v-da414860]{flex-direction:row;flex-wrap:wrap;gap:14px}.choice[data-v-da414860]{display:flex;align-items:baseline;gap:7px;cursor:pointer}.choice--off[data-v-da414860]{opacity:.5;cursor:default}.choice__dot[data-v-da414860]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:inherit}.choice__dot[data-v-da414860]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.choice__label[data-v-da414860]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.field__error[data-v-da414860]{margin:3px 0 0;font-size:var(--text-xs);color:var(--color-err)}.field__hint[data-v-da414860]{margin:3px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.field[data-v-940042b2]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-940042b2]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-940042b2]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-940042b2]{width:auto}.field__required[data-v-940042b2]{color:var(--color-err)}.field__control[data-v-940042b2]{flex:1 1 auto;min-width:0}.field__hint[data-v-940042b2],.field__error[data-v-940042b2]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-940042b2]{color:var(--color-err)}.shell[data-v-940042b2]{position:relative;display:flex;align-items:center;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-940042b2]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-940042b2]{border-color:var(--color-err)}.shell--off[data-v-940042b2]{opacity:.5}.shell--sm[data-v-940042b2]{height:22px}.shell--md[data-v-940042b2]{height:26px}.shell--lg[data-v-940042b2]{height:32px}.shell[data-v-940042b2]:has(.select--many){height:auto;padding:0 2px}.select[data-v-940042b2]{flex:1 1 auto;min-width:0;height:100%;padding:0 14px 0 0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none;appearance:none;cursor:pointer}.shell--lg .select[data-v-940042b2]{font-size:var(--text-base)}.select option[data-v-940042b2]{color:var(--color-fg);background-color:var(--color-pane)}.select optgroup[data-v-940042b2]{color:var(--color-dim);background-color:var(--color-pane);font-weight:600;font-style:normal}.select optgroup option[data-v-940042b2]{color:var(--color-fg)}.select--many[data-v-940042b2]{height:auto;padding:4px 0}.chevron[data-v-940042b2]{position:absolute;right:7px;font-size:9px;color:var(--color-dim);pointer-events:none}.field[data-v-b3a80640]{display:flex;align-items:center;gap:10px;margin-bottom:7px}.field--stacked[data-v-b3a80640]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-b3a80640]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-b3a80640]{width:auto}.field__control[data-v-b3a80640]{flex:1 1 auto;min-width:0}.row[data-v-b3a80640]{display:flex;align-items:center;gap:8px}.range[data-v-b3a80640]{flex:1 1 auto;min-width:0;accent-color:var(--color-accent);cursor:pointer}.range[data-v-b3a80640]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.num[data-v-b3a80640]{width:62px;flex:none;height:22px;padding:0 6px;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.num[data-v-b3a80640]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.suffix[data-v-b3a80640]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.range[data-v-b3a80640]:disabled,.num[data-v-b3a80640]:disabled{opacity:.5}.sw[data-v-70940a00]{display:flex;align-items:center;gap:8px;margin-bottom:6px}.sw--off[data-v-70940a00]{opacity:.5}.sw__track[data-v-70940a00]{position:relative;width:28px;height:15px;flex:none;padding:0;background-color:var(--color-outline);border:0;border-radius:8px;cursor:pointer}.sw__track.on[data-v-70940a00]{background-color:var(--color-accent)}.sw__track[data-v-70940a00]:disabled{cursor:default}.sw__track[data-v-70940a00]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.sw__knob[data-v-70940a00]{position:absolute;top:2px;left:2px;width:11px;height:11px;border-radius:50%;background-color:var(--color-pane);transition:left .12s ease}.sw__track.on .sw__knob[data-v-70940a00]{left:15px}@media(prefers-reduced-motion:reduce){.sw__knob[data-v-70940a00]{transition:none}}.sw__label[data-v-70940a00]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.table[data-v-684c31d0]{width:100%;height:100%;overflow:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}table[data-v-684c31d0]{width:100%;border-collapse:collapse}th[data-v-684c31d0]{position:sticky;top:0;z-index:1;padding:6px 10px;text-align:left;font-weight:500;white-space:nowrap;color:var(--color-dim);background-color:var(--color-raised);border-bottom:1px solid var(--color-divider)}td[data-v-684c31d0]{padding:5px 10px;max-width:28ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-bottom:1px solid var(--color-divider)}tbody tr[data-v-684c31d0]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.row--pick[data-v-684c31d0]{cursor:pointer}.row--on td[data-v-684c31d0]:first-child{box-shadow:inset 2px 0 0 var(--color-accent)}.row--on td[data-v-684c31d0]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent)}.table__empty[data-v-684c31d0]{margin:0;padding:14px 10px;color:var(--color-dim)}.tabs[data-v-f7c65d26]{display:flex;flex-wrap:wrap;align-items:stretch;gap:1px;min-height:var(--spacing-panelHeader);padding:0 6px;border-bottom:1px solid var(--color-divider)}.tab[data-v-f7c65d26]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 10px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab[data-v-f7c65d26]:hover:not(:disabled){color:var(--color-fg)}.tab[data-v-f7c65d26]:disabled{opacity:.45;cursor:default}.tab.on[data-v-f7c65d26]{color:var(--color-fg);font-weight:600}.tab.on[data-v-f7c65d26]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab[data-v-f7c65d26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.tab__count[data-v-f7c65d26]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}\n";})();
import { defineComponent as M, createElementBlock as a, openBlock as l, normalizeClass as p, createCommentVNode as k, renderSlot as S, createElementVNode as h, toDisplayString as m, mergeModels as T, useModel as E, useId as R, ref as A, watchEffect as Ye, withDirectives as P, unref as w, vModelCheckbox as Le, createTextVNode as H, getCurrentInstance as Re, onMounted as oe, getCurrentScope as Ue, onScopeDispose as je, computed as z, vModelText as j, vModelDynamic as be, reactive as ye, watch as ie, onBeforeUnmount as se, normalizeStyle as ke, withKeys as L, withModifiers as N, nextTick as Xe, createBlock as Q, withCtx as Fe, createVNode as ce, Teleport as we, Fragment as B, renderList as K, vModelRadio as Ge, vModelSelect as ue } from "vue";
import { component as Je } from "@eclipse-daanse/tsm";
const Ze = ["type", "disabled", "aria-busy"], Qe = {
  key: 0,
  class: "btn__spinner",
  "aria-hidden": "true"
}, et = /* @__PURE__ */ M({
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
    return (t, i) => (l(), a("button", {
      type: e.type,
      class: p([
        "btn",
        `btn--${e.intent}`,
        `btn--${e.size}`,
        { "btn--block": e.block, "btn--busy": e.busy }
      ]),
      disabled: e.disabled || e.busy,
      "aria-busy": e.busy || void 0
    }, [
      e.busy ? (l(), a("span", Qe)) : k("", !0),
      S(t.$slots, "default", {}, void 0, !0)
    ], 10, Ze));
  }
}), C = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, r] of t)
    i[s] = r;
  return i;
}, $e = /* @__PURE__ */ C(et, [["__scopeId", "data-v-5b01af26"]]), tt = {
  key: 0,
  class: "card__head"
}, lt = { class: "card__title" }, at = /* @__PURE__ */ M({
  __name: "DCard",
  props: {
    title: {},
    padded: { type: Boolean, default: !0 },
    interactive: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, i) => (l(), a("section", {
      class: p(["card", { "card--interactive": e.interactive }])
    }, [
      e.title || t.$slots.header ? (l(), a("header", tt, [
        S(t.$slots, "header", {}, () => [
          h("h3", lt, m(e.title), 1)
        ], !0),
        i[0] || (i[0] = h("span", { class: "card__spacer" }, null, -1)),
        S(t.$slots, "actions", {}, void 0, !0)
      ])) : k("", !0),
      h("div", {
        class: p(["card__body", { "card__body--padded": e.padded }])
      }, [
        S(t.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ge = /* @__PURE__ */ C(at, [["__scopeId", "data-v-8c187da1"]]), nt = ["id", "disabled"], ot = ["for"], it = {
  key: 0,
  class: "check__hint"
}, st = /* @__PURE__ */ M({
  __name: "DCheckbox",
  props: /* @__PURE__ */ T({
    label: {},
    hint: {},
    disabled: { type: Boolean, default: !1 },
    indeterminate: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = E(e, "modelValue"), i = e, s = R(), r = A(null);
    return Ye(() => {
      r.value && (r.value.indeterminate = i.indeterminate);
    }), (u, n) => (l(), a("div", {
      class: p(["check", { "check--off": e.disabled }])
    }, [
      P(h("input", {
        id: w(s),
        ref_key: "box",
        ref: r,
        "onUpdate:modelValue": n[0] || (n[0] = (v) => t.value = v),
        class: "check__box",
        type: "checkbox",
        disabled: e.disabled
      }, null, 8, nt), [
        [Le, t.value]
      ]),
      h("label", {
        for: w(s),
        class: "check__label"
      }, [
        S(u.$slots, "default", {}, () => [
          H(m(e.label), 1)
        ], !0),
        e.hint ? (l(), a("span", it, m(e.hint), 1)) : k("", !0)
      ], 8, ot)
    ], 2));
  }
}), pe = /* @__PURE__ */ C(st, [["__scopeId", "data-v-e080554d"]]), dt = "controls";
function U() {
  const e = Re(), t = () => {
    const n = e?.appContext?.provides;
    return n?.i18n ?? n?.I18next;
  }, i = A(0), s = () => i.value += 1;
  let r;
  const u = () => {
    const n = t();
    !n || r === n || (r = n, n.on?.("languageChanged", s), n.store?.on?.("added", s), s());
  };
  return u(), e && oe(u), Ue() && je(() => {
    r?.off?.("languageChanged", s), r?.store?.off?.("added", s);
  }), (n, v, d) => {
    i.value;
    const o = t(), f = `${dt}:${n}`;
    return !o || o.exists && !o.exists(f) ? v.replace(/\{(\w+)\}/g, (g, D) => String(d?.[D] ?? "")) : o.t(f, d);
  };
}
const rt = ["aria-label"], ct = /* @__PURE__ */ M({
  __name: "DChip",
  props: {
    tone: { default: "neutral" },
    numeric: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(e) {
    const t = U();
    return (i, s) => (l(), a("span", {
      class: p(["chip", `chip--${e.tone}`, { "chip--num": e.numeric }])
    }, [
      S(i.$slots, "default", {}, void 0, !0),
      e.removable ? (l(), a("button", {
        key: 0,
        type: "button",
        class: "chip__x",
        "aria-label": w(t)("Chip.remove", "Remove"),
        onClick: s[0] || (s[0] = (r) => i.$emit("remove"))
      }, " ✕ ", 8, rt)) : k("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ C(ct, [["__scopeId", "data-v-1c26d827"]]), ut = ["for"], ft = { class: "field__control" }, ht = { class: "row" }, vt = ["id", "value", "disabled", "aria-label"], mt = ["disabled", "aria-label"], bt = {
  key: 0,
  class: "field__hint"
}, yt = /* @__PURE__ */ M({
  __name: "DColorInput",
  props: /* @__PURE__ */ T({
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
    const t = E(e, "modelValue"), i = R(), s = U(), r = z(() => {
      const u = (t.value ?? "").trim();
      return /^#[0-9a-f]{6}$/i.test(u) ? u : /^#[0-9a-f]{3}$/i.test(u) ? "#" + [...u.slice(1)].map((n) => n + n).join("") : "#000000";
    });
    return (u, n) => (l(), a("div", {
      class: p(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: w(i)
      }, m(e.label), 9, ut)) : k("", !0),
      h("div", ft, [
        h("div", ht, [
          h("input", {
            id: w(i),
            class: "picker",
            type: "color",
            value: r.value,
            disabled: e.disabled,
            "aria-label": e.label ?? w(s)("Color.label", "Colour"),
            onInput: n[0] || (n[0] = (v) => t.value = v.target.value)
          }, null, 40, vt),
          P(h("input", {
            "onUpdate:modelValue": n[1] || (n[1] = (v) => t.value = v),
            class: "hex",
            type: "text",
            spellcheck: "false",
            disabled: e.disabled,
            "aria-label": e.label ? w(s)("Color.hexOf", "{label} as hex value", { label: e.label }) : w(s)("Color.hex", "Colour as hex value")
          }, null, 8, mt), [
            [j, t.value]
          ])
        ]),
        e.hint ? (l(), a("p", bt, m(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), _e = /* @__PURE__ */ C(yt, [["__scopeId", "data-v-a14fb9a0"]]), kt = ["for"], wt = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, $t = { class: "field__control" }, gt = ["id", "type", "disabled", "required", "min", "max", "aria-invalid"], pt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, xt = {
  key: 1,
  class: "field__hint"
}, _t = /* @__PURE__ */ M({
  __name: "DDateInput",
  props: /* @__PURE__ */ T({
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
    const t = E(e, "modelValue"), i = R(), s = { date: "date", time: "time", datetime: "datetime-local" };
    return (r, u) => (l(), a("div", {
      class: p(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: w(i)
      }, [
        H(m(e.label) + " ", 1),
        e.required ? (l(), a("span", wt, "*")) : k("", !0)
      ], 8, kt)) : k("", !0),
      h("div", $t, [
        P(h("input", {
          id: w(i),
          "onUpdate:modelValue": u[0] || (u[0] = (n) => t.value = n),
          class: p(["input", { "input--invalid": !!e.error }]),
          type: s[e.mode],
          disabled: e.disabled,
          required: e.required,
          min: e.min,
          max: e.max,
          "aria-invalid": !!e.error || void 0
        }, null, 10, gt), [
          [be, t.value]
        ]),
        e.error ? (l(), a("p", pt, m(e.error), 1)) : e.hint ? (l(), a("p", xt, m(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), Me = /* @__PURE__ */ C(_t, [["__scopeId", "data-v-3afdb10c"]]), Mt = {
  key: 0,
  class: "rule__label"
}, Ct = /* @__PURE__ */ M({
  __name: "DDivider",
  props: {
    label: {}
  },
  setup(e) {
    return (t, i) => (l(), a("div", {
      class: p(["rule", { "rule--labelled": e.label }]),
      role: "separator"
    }, [
      e.label ? (l(), a("span", Mt, m(e.label), 1)) : k("", !0)
    ], 2));
  }
}), Ce = /* @__PURE__ */ C(Ct, [["__scopeId", "data-v-521e9319"]]), It = ["for"], St = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Dt = { class: "field__control" }, Vt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Bt = {
  key: 1,
  class: "field__hint"
}, zt = /* @__PURE__ */ M({
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
    return (t, i) => (l(), a("div", {
      class: p(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: t.$props.for
      }, [
        H(m(e.label) + " ", 1),
        e.required ? (l(), a("span", St, "*")) : k("", !0)
      ], 8, It)) : k("", !0),
      h("div", Dt, [
        S(t.$slots, "default", {}, void 0, !0),
        e.error ? (l(), a("p", Vt, m(e.error), 1)) : e.hint ? (l(), a("p", Bt, m(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), de = /* @__PURE__ */ C(zt, [["__scopeId", "data-v-1a8ee938"]]), F = ye(/* @__PURE__ */ new Map());
let Tt = 0;
const Ie = ye({ left: 240, right: 240 });
function fe(e) {
  return Ie[e];
}
function ae(e, t) {
  Ie[e] = t;
}
function he(e, t, i, s) {
  const r = F.get(e);
  F.set(e, { side: t, want: i, min: s, seq: r?.seq ?? Tt++ });
}
function ve(e) {
  F.delete(e);
}
function Se(e) {
  return [...F.entries()].filter(([, t]) => t.side === e).sort((t, i) => t[1].seq - i[1].seq);
}
function qt(e, t) {
  const i = F.get(e);
  if (!i) return null;
  const s = Se(i.side);
  if (!s.length) return null;
  const r = s.reduce((o, [, f]) => o + f.min, 0), u = r > t && r > 0 ? t / r : 1, n = Math.max(0, t - r * u), v = s.reduce((o, [, f]) => o + Math.max(1, f.want), 0);
  let d = 0;
  for (let o = 0; o < s.length; o++) {
    const [f, g] = s[o], q = o === s.length - 1 ? Math.max(0, t - d) : Math.round(g.min * u + n * Math.max(1, g.want) / v);
    if (f === e) return { y: d, h: q };
    d += q;
  }
  return null;
}
function Pt(e) {
  return Se(e).length;
}
const Et = ["aria-label"], Nt = ["aria-label"], Kt = { class: "fw__title" }, At = ["title", "aria-label"], Wt = { class: "fw__body" }, Ht = ["aria-label", "title"], Z = 24, Ot = /* @__PURE__ */ M({
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
  setup(e, { expose: t, emit: i }) {
    const s = e, r = i, u = U(), n = z(() => s.dockable || s.initial?.dock != null), v = { x: 16, y: 16, w: 240, h: 320, dock: null, freeY: 16, freeH: 320 };
    function d() {
      const c = { ...v, ...s.initial };
      if (c.freeY = c.y, c.freeH = c.h, !s.rememberAs) return c;
      try {
        const y = localStorage.getItem(s.rememberAs);
        if (!y) return c;
        const b = JSON.parse(y), I = (V, le) => Number.isFinite(V) ? V : le;
        return {
          x: I(b?.x, c.x),
          y: I(b?.y, c.y),
          w: I(b?.w, c.w),
          h: I(b?.h, c.h),
          dock: b?.dock === "left" || b?.dock === "right" ? b.dock : null,
          freeY: I(b?.freeY, c.y),
          freeH: I(b?.freeH, c.h)
        };
      } catch {
        return c;
      }
    }
    const o = A(d()), f = A();
    function g() {
      if (s.rememberAs)
        try {
          localStorage.setItem(s.rememberAs, JSON.stringify(o.value));
        } catch {
        }
    }
    function D(c) {
      return Math.min(s.maxWidth, Math.max(s.minWidth, c));
    }
    function q() {
      const c = f.value?.offsetParent;
      return {
        width: c?.clientWidth ?? window.innerWidth,
        height: c?.clientHeight ?? window.innerHeight
      };
    }
    const O = z(() => s.rememberAs ?? s.title), W = A({ width: 0, height: 0 });
    function Y() {
      const c = o.value.dock;
      if (!c) return;
      const y = qt(O.value, W.value.height);
      if (!y) return;
      const b = fe(c);
      o.value = {
        ...o.value,
        w: b,
        x: c === "left" ? 0 : Math.max(0, W.value.width - b),
        y: y.y,
        h: y.h
      };
    }
    ie(
      () => {
        const c = o.value.dock;
        return c ? `${Pt(c)}:${fe(c)}` : "";
      },
      (c) => {
        c && (W.value = q(), Y());
      }
    );
    function _(c, y) {
      const b = o.value;
      W.value = y;
      const I = b.dock ? b.freeY : b.y, V = b.dock ? b.freeH : b.h;
      b.dock || ae(c, D(b.w)), he(O.value, c, V, s.minHeight), o.value = { ...b, dock: c, freeY: I, freeH: V }, Y();
    }
    function x() {
      const c = o.value;
      c.dock && (ve(O.value), o.value = { ...c, y: c.freeY, h: c.freeH, dock: null });
    }
    let $ = null;
    function ee(c) {
      if (!$) return;
      const y = q();
      if ($.kind === "move") {
        const I = o.value.w, V = Math.min(
          Math.max(0, $.fromX + (c.clientX - $.startX)),
          Math.max(0, y.width - I)
        ), le = Math.min(
          Math.max(0, $.fromY + (c.clientY - $.startY)),
          Math.max(0, y.height - 28)
        );
        n.value && V <= Z ? _("left", y) : n.value && V + I >= y.width - Z ? _("right", y) : (x(), o.value = { ...o.value, x: V, y: le });
        return;
      }
      const b = D($.fromW + (c.clientX - $.startX));
      if (o.value.dock) {
        W.value = y, ae(o.value.dock, b), Y();
        return;
      }
      o.value = {
        ...o.value,
        w: b,
        h: Math.max(s.minHeight, $.fromH + (c.clientY - $.startY))
      };
    }
    function te() {
      $ && g(), $ = null, window.removeEventListener("pointermove", ee), window.removeEventListener("pointerup", te), document.body.style.userSelect = "";
    }
    function re(c) {
      $ = c, window.addEventListener("pointermove", ee), window.addEventListener("pointerup", te), document.body.style.userSelect = "none";
    }
    const We = (c) => re({ kind: "move", startX: c.clientX, startY: c.clientY, fromX: o.value.x, fromY: o.value.y }), He = (c) => re({ kind: "size", startX: c.clientX, startY: c.clientY, fromW: o.value.w, fromH: o.value.h });
    function G(c, y) {
      const b = q(), I = o.value.w, V = Math.min(Math.max(0, o.value.x + c), Math.max(0, b.width - I));
      n.value && V <= Z ? _("left", b) : n.value && V + I >= b.width - Z ? _("right", b) : (x(), o.value = {
        ...o.value,
        x: V,
        y: Math.min(Math.max(0, o.value.y + y), Math.max(0, b.height - 28))
      }), g();
    }
    function J() {
      const c = q();
      W.value = c;
      const y = o.value, b = Math.min(D(y.w), c.width);
      if (y.dock) {
        Y();
        return;
      }
      const I = Math.min(y.h, c.height);
      o.value = {
        ...y,
        w: b,
        h: I,
        x: Math.min(Math.max(0, y.x), Math.max(0, c.width - b)),
        y: Math.min(Math.max(0, y.y), Math.max(0, c.height - I))
      };
    }
    oe(() => {
      if (o.value.dock) {
        const c = q();
        W.value = c, ae(o.value.dock, D(o.value.w)), he(O.value, o.value.dock, o.value.freeH, s.minHeight);
      }
      J(), window.addEventListener("resize", J);
    }), se(() => {
      te(), ve(O.value), window.removeEventListener("resize", J);
    });
    const Oe = z(() => ({
      left: o.value.x + "px",
      top: o.value.y + "px",
      width: o.value.w + "px",
      height: o.value.h + "px",
      zIndex: String(s.layer)
    }));
    return t({ placement: o, keepInView: J }), (c, y) => (l(), a("aside", {
      ref_key: "root",
      ref: f,
      class: p([
        "fw",
        {
          "fw--docked": !!o.value.dock,
          "fw--left": o.value.dock === "left",
          "fw--right": o.value.dock === "right"
        }
      ]),
      style: ke(Oe.value),
      "aria-label": e.title
    }, [
      h("div", {
        class: "fw__bar",
        role: "toolbar",
        tabindex: "0",
        "aria-label": w(u)("Window.move", "Move {title} - use the arrow keys", { title: e.title }),
        onPointerdown: y[2] || (y[2] = N((b) => We(b), ["prevent"])),
        onKeydown: [
          y[3] || (y[3] = L(N((b) => G(-16, 0), ["prevent"]), ["left"])),
          y[4] || (y[4] = L(N((b) => G(16, 0), ["prevent"]), ["right"])),
          y[5] || (y[5] = L(N((b) => G(0, -16), ["prevent"]), ["up"])),
          y[6] || (y[6] = L(N((b) => G(0, 16), ["prevent"]), ["down"]))
        ]
      }, [
        h("span", Kt, m(e.title), 1),
        S(c.$slots, "actions", {}, void 0, !0),
        e.closable ? (l(), a("button", {
          key: 0,
          type: "button",
          class: "fw__act",
          title: w(u)("Modal.close", "Close"),
          "aria-label": w(u)("Window.close", "Close {title}", { title: e.title }),
          onPointerdown: y[0] || (y[0] = N(() => {
          }, ["stop"])),
          onClick: y[1] || (y[1] = (b) => r("close"))
        }, " × ", 40, At)) : k("", !0)
      ], 40, Nt),
      h("div", Wt, [
        S(c.$slots, "default", {}, void 0, !0)
      ]),
      e.resizable ? (l(), a("div", {
        key: 0,
        class: "fw__grip",
        role: "separator",
        "aria-label": w(u)("Window.size", "Size of {title}", { title: e.title }),
        title: w(u)("Window.resize", "Resize"),
        onPointerdown: y[7] || (y[7] = N((b) => He(b), ["prevent"]))
      }, null, 40, Ht)) : k("", !0)
    ], 14, Et));
  }
}), De = /* @__PURE__ */ C(Ot, [["__scopeId", "data-v-854a69fb"]]), Yt = ["aria-hidden", "aria-label", "role"], Lt = /* @__PURE__ */ M({
  __name: "DIcon",
  props: {
    name: {},
    size: { default: "md" },
    tone: {},
    decorative: { type: Boolean, default: !0 },
    label: {}
  },
  setup(e) {
    return (t, i) => (l(), a("i", {
      class: p(["icon", `icon--${e.size}`]),
      style: ke(e.tone ? { color: `var(--${e.tone})` } : void 0),
      "aria-hidden": e.decorative ? "true" : void 0,
      "aria-label": e.decorative ? void 0 : e.label ?? e.name,
      role: e.decorative ? void 0 : "img"
    }, m(e.name), 15, Yt));
  }
}), X = /* @__PURE__ */ C(Lt, [["__scopeId", "data-v-15dffeec"]]), Rt = { class: "picker" }, Ut = ["disabled", "title"], jt = { class: "picker__name" }, Xt = ["aria-label"], Ft = { class: "sheet__search" }, Gt = ["placeholder"], Jt = {
  key: 0,
  class: "sheet__grid"
}, Zt = ["title", "onClick"], Qt = {
  key: 1,
  class: "sheet__none"
}, el = { class: "sheet__own" }, tl = {
  class: "sheet__own-label",
  for: "icon-own"
}, ll = ["placeholder", "onKeydown"], al = {
  class: "sheet__preview",
  "aria-hidden": "true"
}, nl = ["disabled"], ol = {
  key: 2,
  class: "sheet__warn"
}, il = /* @__PURE__ */ M({
  __name: "DIconPicker",
  props: /* @__PURE__ */ T({
    label: {},
    hint: {},
    fallback: { default: "category" },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = E(e, "modelValue"), i = U(), s = [
      // data and its shapes
      "dataset",
      "storage",
      "table_chart",
      "grid_on",
      "list",
      "view_list",
      "account_tree",
      "schema",
      "hub",
      "share",
      "category",
      "inventory_2",
      "folder",
      "description",
      "article",
      "code",
      "data_object",
      "data_array",
      "functions",
      "calculate",
      "tag",
      // moving data around
      "api",
      "cloud",
      "cloud_download",
      "cloud_upload",
      "sync",
      "swap_horiz",
      "bolt",
      "rss_feed",
      "router",
      "lan",
      "wifi",
      "cable",
      "dns",
      "vpn_key",
      "lock",
      "key",
      // measuring and showing
      "insights",
      "bar_chart",
      "show_chart",
      "pie_chart",
      "stacked_line_chart",
      "timeline",
      "speed",
      "monitor_heart",
      "thermostat",
      "water_drop",
      "air",
      "bloodtype",
      "scale",
      "trending_up",
      "trending_down",
      "leaderboard",
      "analytics",
      "query_stats",
      // things in the world
      "sensors",
      "devices",
      "memory",
      "developer_board",
      "precision_manufacturing",
      "factory",
      "warehouse",
      "home",
      "apartment",
      "store",
      "agriculture",
      "construction",
      "build",
      "electric_bolt",
      "solar_power",
      "wind_power",
      "battery_full",
      "power",
      // where and when
      "place",
      "map",
      "route",
      "explore",
      "public",
      "my_location",
      "directions",
      "schedule",
      "calendar_month",
      "event",
      "history",
      "update",
      "alarm",
      "timer",
      // how it is going
      "check_circle",
      "error",
      "warning",
      "info",
      "help",
      "visibility",
      "flag",
      "star",
      "bookmark",
      "label",
      "priority_high",
      "notifications",
      "campaign",
      "verified",
      // people and work
      "person",
      "group",
      "badge",
      "work",
      "assignment",
      "task_alt",
      "science",
      "biotech",
      "psychology",
      "school",
      "local_shipping",
      "shopping_cart",
      "payments",
      "receipt_long"
    ], r = A(!1), u = A(""), n = A(""), v = A(), d = A([]);
    function o() {
      const _ = document.createElement("span");
      _.setAttribute("aria-hidden", "true"), _.style.cssText = 'position:absolute;left:-9999px;top:-9999px;font-family:"Material Icons";font-size:24px;line-height:1;white-space:nowrap', document.body.appendChild(_);
      const x = [];
      for (const $ of s)
        _.textContent = $, Math.abs(_.getBoundingClientRect().width - 24) < 1.5 && x.push($);
      return _.remove(), x;
    }
    function f(_) {
      if (!_.trim()) return !0;
      const x = document.createElement("span");
      x.style.cssText = 'position:absolute;left:-9999px;top:-9999px;font-family:"Material Icons";font-size:24px;line-height:1;white-space:nowrap', x.textContent = _.trim(), document.body.appendChild(x);
      const $ = x.getBoundingClientRect().width;
      return x.remove(), Math.abs($ - 24) < 1.5;
    }
    const g = z(() => f(n.value)), D = z(() => {
      const _ = u.value.trim().toLowerCase();
      return _ ? d.value.filter((x) => x.includes(_)) : d.value;
    });
    ie(r, async (_) => {
      if (!_) {
        window.removeEventListener("keydown", q);
        return;
      }
      n.value = t.value, u.value = "", window.addEventListener("keydown", q), await Xe();
      try {
        await document.fonts?.ready;
      } catch {
      }
      const x = o();
      d.value = x.length ? x : s;
    }), se(() => window.removeEventListener("keydown", q));
    function q(_) {
      _.key === "Escape" && (r.value = !1);
    }
    function O(_) {
      t.value = _, r.value = !1;
    }
    function W() {
      t.value = "", r.value = !1;
    }
    function Y() {
      g.value && (t.value = n.value.trim(), r.value = !1);
    }
    return (_, x) => (l(), Q(de, {
      label: e.label,
      hint: e.hint,
      stacked: ""
    }, {
      default: Fe(() => [
        h("div", Rt, [
          h("button", {
            type: "button",
            class: "picker__current",
            disabled: e.disabled,
            title: t.value || w(i)("IconPicker.fromTypeTitle", "{icon} (from the type)", { icon: e.fallback }),
            onClick: x[0] || (x[0] = ($) => r.value = !r.value)
          }, [
            ce(X, {
              name: t.value || e.fallback,
              size: "lg"
            }, null, 8, ["name"])
          ], 8, Ut),
          h("span", jt, m(t.value || w(i)("IconPicker.fromType", "{icon} — from the type", { icon: e.fallback })), 1),
          t.value ? (l(), a("button", {
            key: 0,
            type: "button",
            class: "picker__clear",
            onClick: W
          }, m(w(i)("IconPicker.reset", "Reset")), 1)) : k("", !0)
        ]),
        (l(), Q(we, { to: "body" }, [
          r.value ? (l(), a(B, { key: 0 }, [
            h("div", {
              class: "picker__catch",
              onClick: x[1] || (x[1] = ($) => r.value = !1)
            }),
            h("div", {
              ref_key: "panel",
              ref: v,
              class: "sheet",
              role: "dialog",
              "aria-label": w(i)("IconPicker.choose", "Choose icon")
            }, [
              h("div", Ft, [
                P(h("input", {
                  "onUpdate:modelValue": x[2] || (x[2] = ($) => u.value = $),
                  type: "search",
                  placeholder: w(i)("IconPicker.search", "Search icon…"),
                  autofocus: ""
                }, null, 8, Gt), [
                  [j, u.value]
                ])
              ]),
              D.value.length ? (l(), a("ul", Jt, [
                (l(!0), a(B, null, K(D.value, ($) => (l(), a("li", { key: $ }, [
                  h("button", {
                    type: "button",
                    class: p(["sheet__item", { "sheet__item--on": t.value === $ }]),
                    title: $,
                    onClick: (ee) => O($)
                  }, [
                    ce(X, {
                      name: $,
                      size: "lg"
                    }, null, 8, ["name"])
                  ], 10, Zt)
                ]))), 128))
              ])) : (l(), a("p", Qt, m(w(i)("IconPicker.none", "No icon with this name in the selection.")), 1)),
              h("div", el, [
                h("label", tl, m(w(i)("IconPicker.other", "Other name")), 1),
                P(h("input", {
                  id: "icon-own",
                  "onUpdate:modelValue": x[3] || (x[3] = ($) => n.value = $),
                  type: "text",
                  placeholder: w(i)("IconPicker.otherPlaceholder", "e.g. thermostat"),
                  onKeydown: L(N(Y, ["prevent"]), ["enter"])
                }, null, 40, ll), [
                  [j, n.value]
                ]),
                h("span", al, [
                  g.value && n.value.trim() ? (l(), Q(X, {
                    key: 0,
                    name: n.value.trim(),
                    size: "md"
                  }, null, 8, ["name"])) : k("", !0)
                ]),
                h("button", {
                  type: "button",
                  class: "sheet__take",
                  disabled: !g.value || !n.value.trim(),
                  onClick: Y
                }, m(w(i)("IconPicker.take", "Apply")), 9, nl)
              ]),
              n.value.trim() && !g.value ? (l(), a("p", ol, m(w(i)("IconPicker.unknown", "The font does not know this icon — it would appear as text.")), 1)) : k("", !0)
            ], 8, Xt)
          ], 64)) : k("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["label", "hint"]));
  }
}), Ve = /* @__PURE__ */ C(il, [["__scopeId", "data-v-25edc3ee"]]), sl = ["for"], dl = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, rl = { class: "field__control" }, cl = ["id", "rows", "placeholder", "disabled", "readonly", "required", "aria-invalid"], ul = ["id", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "step", "aria-invalid"], fl = {
  key: 2,
  class: "suffix"
}, hl = {
  key: 0,
  class: "field__error",
  role: "alert"
}, vl = {
  key: 1,
  class: "field__hint"
}, ml = /* @__PURE__ */ M({
  __name: "DInput",
  props: /* @__PURE__ */ T({
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
    const t = E(e, "modelValue"), i = e, s = R(), r = z(() => i.type === "number");
    return (u, n) => (l(), a("div", {
      class: p(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: w(s)
      }, [
        H(m(e.label) + " ", 1),
        e.required ? (l(), a("span", dl, "*")) : k("", !0)
      ], 8, sl)) : k("", !0),
      h("div", rl, [
        h("div", {
          class: p(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.rows ? P((l(), a("textarea", {
            key: 0,
            id: w(s),
            "onUpdate:modelValue": n[0] || (n[0] = (v) => t.value = v),
            class: "input input--area",
            rows: e.rows,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, null, 8, cl)), [
            [j, t.value]
          ]) : P((l(), a("input", {
            key: 1,
            id: w(s),
            "onUpdate:modelValue": n[1] || (n[1] = (v) => t.value = v),
            class: p(["input", { "input--num": r.value }]),
            type: e.type,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            min: e.min,
            max: e.max,
            step: e.step,
            "aria-invalid": !!e.error || void 0
          }, null, 10, ul)), [
            [be, t.value]
          ]),
          e.suffix ? (l(), a("span", fl, m(e.suffix), 1)) : k("", !0)
        ], 2),
        e.error ? (l(), a("p", hl, m(e.error), 1)) : e.hint ? (l(), a("p", vl, m(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), Be = /* @__PURE__ */ C(ml, [["__scopeId", "data-v-a5fd75e2"]]), bl = ["aria-label"], yl = {
  key: 0,
  class: "dialog__head"
}, kl = { class: "dialog__title" }, wl = ["aria-label"], $l = { class: "dialog__body" }, gl = {
  key: 1,
  class: "dialog__foot"
}, pl = /* @__PURE__ */ M({
  __name: "DModal",
  props: /* @__PURE__ */ T({
    title: {},
    size: { default: "md" },
    persistent: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["cancel"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const i = E(e, "modelValue"), s = e, r = t, u = U();
    function n() {
      s.persistent || (i.value = !1, r("cancel"));
    }
    function v(d) {
      d.key === "Escape" && i.value && n();
    }
    return ie(i, (d) => {
      document.body.style.overflow = d ? "hidden" : "";
    }), oe(() => window.addEventListener("keydown", v)), se(() => {
      window.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (d, o) => (l(), Q(we, { to: "body" }, [
      i.value ? (l(), a("div", {
        key: 0,
        class: "scrim",
        onClick: N(n, ["self"])
      }, [
        h("div", {
          class: p(["dialog", `dialog--${e.size}`]),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title
        }, [
          e.title || d.$slots.header ? (l(), a("header", yl, [
            S(d.$slots, "header", {}, () => [
              h("h2", kl, m(e.title), 1)
            ], !0),
            e.persistent ? k("", !0) : (l(), a("button", {
              key: 0,
              type: "button",
              class: "dialog__close",
              "aria-label": w(u)("Modal.close", "Close"),
              onClick: n
            }, " ✕ ", 8, wl))
          ])) : k("", !0),
          h("div", $l, [
            S(d.$slots, "default", {}, void 0, !0)
          ]),
          d.$slots.actions ? (l(), a("footer", gl, [
            S(d.$slots, "actions", {}, void 0, !0)
          ])) : k("", !0)
        ], 10, bl)
      ])) : k("", !0)
    ]));
  }
}), ze = /* @__PURE__ */ C(pl, [["__scopeId", "data-v-9cc4419b"]]), xl = {
  key: 0,
  class: "field__label"
}, _l = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Ml = { class: "field__control" }, Cl = ["aria-label"], Il = ["name", "value", "disabled", "required"], Sl = { class: "choice__label" }, Dl = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Vl = {
  key: 1,
  class: "field__hint"
}, Bl = /* @__PURE__ */ M({
  __name: "DRadioGroup",
  props: /* @__PURE__ */ T({
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
    const t = E(e, "modelValue"), i = e, s = R(), r = z(
      () => (i.options ?? []).map((u) => {
        if (u === null || typeof u != "object")
          return { value: u, label: String(u) };
        const n = u, v = i.valueKey in n ? n[i.valueKey] : n, d = i.labelKey in n ? n[i.labelKey] : v;
        return { value: v, label: String(d ?? "") };
      })
    );
    return (u, n) => (l(), a("div", {
      class: p(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("span", xl, [
        H(m(e.label) + " ", 1),
        e.required ? (l(), a("span", _l, "*")) : k("", !0)
      ])) : k("", !0),
      h("div", Ml, [
        h("div", {
          class: p(["choices", { "choices--inline": e.inline }]),
          role: "radiogroup",
          "aria-label": e.label
        }, [
          (l(!0), a(B, null, K(r.value, (v, d) => (l(), a("label", {
            key: d,
            class: p(["choice", { "choice--off": e.disabled }])
          }, [
            P(h("input", {
              "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
              class: "choice__dot",
              type: "radio",
              name: w(s),
              value: v.value,
              disabled: e.disabled,
              required: e.required
            }, null, 8, Il), [
              [Ge, t.value]
            ]),
            h("span", Sl, m(v.label), 1)
          ], 2))), 128))
        ], 10, Cl),
        e.error ? (l(), a("p", Dl, m(e.error), 1)) : e.hint ? (l(), a("p", Vl, m(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), Te = /* @__PURE__ */ C(Bl, [["__scopeId", "data-v-da414860"]]), zl = ["for"], Tl = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, ql = { class: "field__control" }, Pl = ["id", "size", "disabled", "required", "aria-invalid"], El = ["value"], Nl = ["id", "disabled", "required", "aria-invalid"], Kl = {
  key: 0,
  value: ""
}, Al = ["value"], Wl = ["label"], Hl = ["value"], Ol = ["value"], Yl = {
  key: 2,
  class: "chevron",
  "aria-hidden": "true"
}, Ll = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Rl = {
  key: 1,
  class: "field__hint"
}, Ul = /* @__PURE__ */ M({
  __name: "DSelect",
  props: /* @__PURE__ */ T({
    options: {},
    label: {},
    valueKey: { default: "uid" },
    labelKey: { default: "name" },
    groupKey: {},
    placeholder: {},
    hint: {},
    error: {},
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    size: { default: "md" },
    clearable: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = E(e, "modelValue"), i = e, s = R(), r = z(
      () => (i.options ?? []).map((d) => {
        if (d === null || typeof d != "object")
          return { value: d, label: String(d) };
        const o = d, f = i.valueKey in o ? o[i.valueKey] : o, g = i.labelKey in o ? o[i.labelKey] : f, D = i.groupKey ? o[i.groupKey] : void 0;
        return { value: f, label: String(g ?? ""), group: D === void 0 ? void 0 : String(D) };
      })
    ), u = z(() => {
      const d = /* @__PURE__ */ new Map(), o = [];
      return r.value.forEach((f, g) => {
        if (!f.group) {
          o.push({ index: g, label: f.label });
          return;
        }
        d.has(f.group) || d.set(f.group, []), d.get(f.group).push({ index: g, label: f.label });
      }), { loose: o, headed: [...d].map(([f, g]) => ({ label: f, options: g })) };
    }), n = z({
      get() {
        const d = r.value.findIndex((o) => o.value === t.value);
        return d >= 0 ? String(d) : "";
      },
      set(d) {
        t.value = d === "" ? void 0 : r.value[Number(d)]?.value;
      }
    }), v = z({
      get() {
        const d = Array.isArray(t.value) ? t.value : [];
        return r.value.map((o, f) => d.includes(o.value) ? String(f) : "").filter((o) => o !== "");
      },
      set(d) {
        t.value = d.map((o) => r.value[Number(o)]?.value);
      }
    });
    return (d, o) => (l(), a("div", {
      class: p(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: w(s)
      }, [
        H(m(e.label) + " ", 1),
        e.required ? (l(), a("span", Tl, "*")) : k("", !0)
      ], 8, zl)) : k("", !0),
      h("div", ql, [
        h("div", {
          class: p(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.multiple ? P((l(), a("select", {
            key: 0,
            id: w(s),
            "onUpdate:modelValue": o[0] || (o[0] = (f) => v.value = f),
            class: p(["select", "select--many"]),
            multiple: "",
            size: Math.min(Math.max(r.value.length, 2), 8),
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            (l(!0), a(B, null, K(r.value, (f, g) => (l(), a("option", {
              key: g,
              value: String(g)
            }, m(f.label), 9, El))), 128))
          ], 8, Pl)), [
            [ue, v.value]
          ]) : P((l(), a("select", {
            key: 1,
            id: w(s),
            "onUpdate:modelValue": o[1] || (o[1] = (f) => n.value = f),
            class: "select",
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            e.clearable || t.value === void 0 ? (l(), a("option", Kl, m(e.placeholder ?? "—"), 1)) : k("", !0),
            e.groupKey ? (l(), a(B, { key: 1 }, [
              (l(!0), a(B, null, K(u.value.loose, (f) => (l(), a("option", {
                key: f.index,
                value: String(f.index)
              }, m(f.label), 9, Al))), 128)),
              (l(!0), a(B, null, K(u.value.headed, (f) => (l(), a("optgroup", {
                key: f.label,
                label: f.label
              }, [
                (l(!0), a(B, null, K(f.options, (g) => (l(), a("option", {
                  key: g.index,
                  value: String(g.index)
                }, m(g.label), 9, Hl))), 128))
              ], 8, Wl))), 128))
            ], 64)) : (l(!0), a(B, { key: 2 }, K(r.value, (f, g) => (l(), a("option", {
              key: g,
              value: String(g)
            }, m(f.label), 9, Ol))), 128))
          ], 8, Nl)), [
            [ue, n.value]
          ]),
          e.multiple ? k("", !0) : (l(), a("span", Yl, "▾"))
        ], 2),
        e.error ? (l(), a("p", Ll, m(e.error), 1)) : e.hint ? (l(), a("p", Rl, m(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), qe = /* @__PURE__ */ C(Ul, [["__scopeId", "data-v-940042b2"]]), jl = ["for"], Xl = { class: "field__control row" }, Fl = ["id", "min", "max", "step", "disabled"], Gl = ["min", "max", "step", "disabled", "aria-label"], Jl = {
  key: 0,
  class: "suffix"
}, Zl = /* @__PURE__ */ M({
  __name: "DSlider",
  props: /* @__PURE__ */ T({
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
    const t = E(e, "modelValue"), i = U(), s = R();
    return (r, u) => (l(), a("div", {
      class: p(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: w(s)
      }, m(e.label), 9, jl)) : k("", !0),
      h("div", Xl, [
        P(h("input", {
          id: w(s),
          "onUpdate:modelValue": u[0] || (u[0] = (n) => t.value = n),
          class: "range",
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled
        }, null, 8, Fl), [
          [
            j,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        P(h("input", {
          "onUpdate:modelValue": u[1] || (u[1] = (n) => t.value = n),
          class: "num",
          type: "number",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label ? w(i)("Slider.asNumber", "{label} as a number", { label: e.label }) : w(i)("Slider.value", "Value")
        }, null, 8, Gl), [
          [
            j,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        e.suffix ? (l(), a("span", Jl, m(e.suffix), 1)) : k("", !0)
      ])
    ], 2));
  }
}), Pe = /* @__PURE__ */ C(Zl, [["__scopeId", "data-v-b3a80640"]]), Ql = ["aria-checked", "aria-label", "disabled"], ea = /* @__PURE__ */ M({
  __name: "DSwitch",
  props: /* @__PURE__ */ T({
    label: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = E(e, "modelValue");
    return (i, s) => (l(), a("div", {
      class: p(["sw", { "sw--off": e.disabled }])
    }, [
      h("button", {
        type: "button",
        role: "switch",
        "aria-checked": !!t.value,
        "aria-label": e.label,
        disabled: e.disabled,
        class: p(["sw__track", { on: t.value }]),
        onClick: s[0] || (s[0] = (r) => t.value = !t.value)
      }, [...s[2] || (s[2] = [
        h("span", { class: "sw__knob" }, null, -1)
      ])], 10, Ql),
      e.label || i.$slots.default ? (l(), a("span", {
        key: 0,
        class: "sw__label",
        onClick: s[1] || (s[1] = (r) => !e.disabled && (t.value = !t.value))
      }, [
        S(i.$slots, "default", {}, () => [
          H(m(e.label), 1)
        ], !0)
      ])) : k("", !0)
    ], 2));
  }
}), Ee = /* @__PURE__ */ C(ea, [["__scopeId", "data-v-70940a00"]]), ta = { class: "table" }, la = { key: 0 }, aa = ["aria-selected", "onClick"], na = ["title"], oa = {
  key: 1,
  class: "table__empty"
}, ia = /* @__PURE__ */ M({
  __name: "DTable",
  props: /* @__PURE__ */ T({
    items: {},
    columns: {},
    empty: {},
    selectable: { type: Boolean, default: !1 }
  }, {
    selected: {},
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = E(e, "selected"), i = e, s = U(), r = z(() => {
      if (i.columns?.length)
        return i.columns.map(
          (v) => typeof v == "string" ? { key: v, label: v } : { key: v.key, label: v.label ?? v.key }
        );
      const n = i.items?.[0];
      return n ? Object.keys(n).map((v) => ({ key: v, label: v })) : [];
    });
    function u(n, v) {
      const d = n?.[v];
      return d == null ? "" : typeof d == "object" ? JSON.stringify(d) : String(d);
    }
    return (n, v) => (l(), a("div", ta, [
      e.items?.length && r.value.length ? (l(), a("table", la, [
        h("thead", null, [
          h("tr", null, [
            (l(!0), a(B, null, K(r.value, (d) => (l(), a("th", {
              key: d.key
            }, m(d.label), 1))), 128))
          ])
        ]),
        h("tbody", null, [
          (l(!0), a(B, null, K(e.items, (d, o) => (l(), a("tr", {
            key: o,
            class: p({ "row--pick": e.selectable, "row--on": e.selectable && d === t.value }),
            "aria-selected": e.selectable ? d === t.value : void 0,
            onClick: (f) => e.selectable && (t.value = d)
          }, [
            (l(!0), a(B, null, K(r.value, (f) => (l(), a("td", {
              key: f.key,
              title: u(d, f.key)
            }, m(u(d, f.key)), 9, na))), 128))
          ], 10, aa))), 128))
        ])
      ])) : (l(), a("p", oa, m(e.empty ?? w(s)("Table.empty", "No rows")), 1))
    ]));
  }
}), Ne = /* @__PURE__ */ C(ia, [["__scopeId", "data-v-684c31d0"]]), sa = ["aria-label"], da = ["aria-selected", "tabindex", "disabled", "onClick"], ra = {
  key: 0,
  class: "tab__count"
}, ca = /* @__PURE__ */ M({
  __name: "DTabs",
  props: /* @__PURE__ */ T({
    tabs: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = E(e, "modelValue"), i = e;
    function s(r) {
      const u = i.tabs.filter((d) => !d.disabled), n = u.findIndex((d) => d.id === t.value), v = u[(n + r + u.length) % u.length];
      v && (t.value = v.id);
    }
    return (r, u) => (l(), a("div", {
      class: "tabs",
      role: "tablist",
      "aria-label": e.label,
      onKeydown: [
        u[0] || (u[0] = L(N((n) => s(-1), ["prevent"]), ["left"])),
        u[1] || (u[1] = L(N((n) => s(1), ["prevent"]), ["right"]))
      ]
    }, [
      (l(!0), a(B, null, K(e.tabs, (n) => (l(), a("button", {
        key: n.id,
        type: "button",
        role: "tab",
        "aria-selected": t.value === n.id,
        tabindex: t.value === n.id ? 0 : -1,
        disabled: n.disabled,
        class: p(["tab", { on: t.value === n.id }]),
        onClick: (v) => t.value = n.id
      }, [
        H(m(n.label) + " ", 1),
        n.count !== void 0 ? (l(), a("span", ra, m(n.count), 1)) : k("", !0)
      ], 10, da))), 128)),
      S(r.$slots, "actions", {}, void 0, !0)
    ], 40, sa));
  }
}), Ke = /* @__PURE__ */ C(ca, [["__scopeId", "data-v-f7c65d26"]]), ua = { asNumber: "{{label}} als Zahl", value: "Wert" }, fa = { fromTypeTitle: "{{icon}} (vom Typ)", fromType: "{{icon}} — vom Typ", reset: "Zurücksetzen", choose: "Symbol wählen", search: "Symbol suchen…", none: "Kein Symbol mit diesem Namen in der Auswahl.", other: "Anderer Name", otherPlaceholder: "z. B. thermostat", take: "Übernehmen", unknown: "Dieses Symbol kennt die Schrift nicht — es würde als Text erscheinen." }, ha = { label: "Farbe", hexOf: "{{label}} als Hexwert", hex: "Farbe als Hexwert" }, va = { close: "Schließen" }, ma = { remove: "Entfernen" }, ba = { move: "{{title}} verschieben - mit den Pfeiltasten bewegen", close: "{{title}} schließen", size: "Größe von {{title}}", resize: "Größe ändern" }, ya = { empty: "Keine Zeilen" }, ka = {
  Slider: ua,
  IconPicker: fa,
  Color: ha,
  Modal: va,
  Chip: ma,
  Window: ba,
  Table: ya
}, wa = { asNumber: "{{label}} as a number", value: "Value" }, $a = { fromTypeTitle: "{{icon}} (from the type)", fromType: "{{icon}} — from the type", reset: "Reset", choose: "Choose icon", search: "Search icon…", none: "No icon with this name in the selection.", other: "Other name", otherPlaceholder: "e.g. thermostat", take: "Apply", unknown: "The font does not know this icon — it would appear as text." }, ga = { label: "Colour", hexOf: "{{label}} as hex value", hex: "Colour as hex value" }, pa = { close: "Close" }, xa = { remove: "Remove" }, _a = { move: "Move {{title}} - use the arrow keys", close: "Close {{title}}", size: "Size of {{title}}", resize: "Resize" }, Ma = { empty: "No rows" }, Ca = {
  Slider: wa,
  IconPicker: $a,
  Color: ga,
  Modal: pa,
  Chip: xa,
  Window: _a,
  Table: Ma
};
var Ia = Object.getOwnPropertyDescriptor, Sa = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? Ia(t, i) : t, u = e.length - 1, n; u >= 0; u--)
    (n = e[u]) && (r = n(r) || r);
  return r;
};
const Ae = "controls";
let ne = class {
  namespace = Ae;
  resources = {
    de: ka,
    en: Ca
  };
};
ne = Sa([
  Je({
    service: ["Translations"],
    properties: { "i18n.namespace": Ae }
  })
], ne);
const Da = {
  DButton: $e,
  DCard: ge,
  DCheckbox: pe,
  DChip: xe,
  DColorInput: _e,
  DDateInput: Me,
  DDivider: Ce,
  DField: de,
  DFloatingWindow: De,
  DIcon: X,
  DIconPicker: Ve,
  DInput: Be,
  DModal: ze,
  DRadioGroup: Te,
  DSelect: qe,
  DSlider: Pe,
  DSwitch: Ee,
  DTable: Ne,
  DTabs: Ke
}, Va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONTROLS: Da,
  get ControlsTranslations() {
    return ne;
  },
  DButton: $e,
  DCard: ge,
  DCheckbox: pe,
  DChip: xe,
  DColorInput: _e,
  DDateInput: Me,
  DDivider: Ce,
  DField: de,
  DFloatingWindow: De,
  DIcon: X,
  DIconPicker: Ve,
  DInput: Be,
  DModal: ze,
  DRadioGroup: Te,
  DSelect: qe,
  DSlider: Pe,
  DSwitch: Ee,
  DTable: Ne,
  DTabs: Ke
}, Symbol.toStringTag, { value: "Module" })), me = "org.eclipse.daanse.board.app.ui.vue.controls", Ba = "0.0.1-next.1";
async function qa(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${me}: tsm runtime is not initialized`);
  t.register(me, Va, Ba, "ui.vue.controls"), await void 0;
}
async function Pa(e) {
  await void 0;
}
export {
  Da as CONTROLS,
  ne as ControlsTranslations,
  $e as DButton,
  ge as DCard,
  pe as DCheckbox,
  xe as DChip,
  _e as DColorInput,
  Me as DDateInput,
  Ce as DDivider,
  de as DField,
  De as DFloatingWindow,
  X as DIcon,
  Ve as DIconPicker,
  Be as DInput,
  ze as DModal,
  Te as DRadioGroup,
  qe as DSelect,
  Pe as DSlider,
  Ee as DSwitch,
  Ne as DTable,
  Ke as DTabs,
  qa as activate,
  Pa as deactivate
};
