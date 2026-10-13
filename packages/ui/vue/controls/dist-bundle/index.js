(function(){var i="ui.vue.controls",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".btn[data-v-5b01af26]{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;white-space:nowrap;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-5b01af26]:hover:not(:disabled){border-color:var(--color-outline)}.btn[data-v-5b01af26]:active:not(:disabled){transform:translateY(.5px)}.btn[data-v-5b01af26]:disabled{opacity:.45;cursor:default}.btn[data-v-5b01af26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.btn--sm[data-v-5b01af26]{height:22px;padding:0 9px;font-size:var(--text-xs)}.btn--md[data-v-5b01af26]{height:26px;padding:0 12px}.btn--lg[data-v-5b01af26]{height:32px;padding:0 16px;font-size:var(--text-base)}.btn--block[data-v-5b01af26]{display:flex;width:100%}.btn--primary[data-v-5b01af26]{color:var(--color-onAccent);background-color:var(--color-accent);border-color:var(--color-accent);font-weight:600}.btn--primary[data-v-5b01af26]:hover:not(:disabled){filter:brightness(1.08)}.btn--quiet[data-v-5b01af26]{background-color:transparent;border-color:transparent;color:var(--color-dim)}.btn--quiet[data-v-5b01af26]:hover:not(:disabled){color:var(--color-fg);background-color:var(--color-raised);border-color:var(--color-divider)}.btn--danger[data-v-5b01af26]{color:var(--color-err);border-color:color-mix(in srgb,var(--color-err) 45%,transparent)}.btn--danger[data-v-5b01af26]:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-err) 12%,transparent);border-color:var(--color-err)}.btn--primary[data-v-5b01af26]{position:relative;isolation:isolate}.btn--primary[data-v-5b01af26]:before{content:\"\";position:absolute;inset:-7px;z-index:-1;border-radius:9999px;background-image:linear-gradient(45deg,var(--color-accent),color-mix(in srgb,var(--color-accent) 55%,var(--color-ok)),var(--color-accent));filter:blur(34px);opacity:0;transition:opacity .24s cubic-bezier(.2,.6,.2,1);pointer-events:none}.btn--primary[data-v-5b01af26]:hover:not(:disabled):before{opacity:.6}.btn--primary[data-v-5b01af26]:focus-visible:before{opacity:.35}:root[data-theme=light] .btn--primary[data-v-5b01af26]:before{content:none}@media(prefers-reduced-motion:reduce){.btn--primary[data-v-5b01af26]:before{transition-duration:.01ms}}.btn__spinner[data-v-5b01af26]{width:11px;height:11px;flex:none;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:btn-spin-5b01af26 .7s linear infinite}@keyframes btn-spin-5b01af26{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.btn__spinner[data-v-5b01af26]{animation-duration:2s}}.card[data-v-8c187da1]{display:flex;flex-direction:column;min-width:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.card--interactive[data-v-8c187da1]{cursor:pointer}.card--interactive[data-v-8c187da1]:hover{border-color:var(--color-outline)}.card__head[data-v-8c187da1]{display:flex;align-items:center;gap:8px;flex:none;height:var(--spacing-panelHeader);padding:0 10px;border-bottom:1px solid var(--color-divider)}.card__title[data-v-8c187da1]{margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim)}.card__spacer[data-v-8c187da1]{flex:1 1 auto}.card__body[data-v-8c187da1]{flex:1 1 auto;min-height:0}.card__body--padded[data-v-8c187da1]{padding:10px 12px}.check[data-v-e080554d]{display:flex;align-items:baseline;gap:7px;margin-bottom:6px}.check--off[data-v-e080554d]{opacity:.5}.check__box[data-v-e080554d]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:pointer}.check__box[data-v-e080554d]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.check__label[data-v-e080554d]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.check__hint[data-v-e080554d]{display:block;font-size:var(--text-xs);color:var(--color-dim)}.chip[data-v-30700fa0]{display:inline-flex;align-items:center;gap:4px;padding:1px 7px;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.5;border-radius:var(--radius-xs);white-space:nowrap}.chip--num[data-v-30700fa0]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.chip--neutral[data-v-30700fa0]{color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider)}.chip--accent[data-v-30700fa0]{color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent)}.chip--ok[data-v-30700fa0]{color:var(--color-ok);background-color:color-mix(in srgb,var(--color-ok) 14%,transparent)}.chip--warn[data-v-30700fa0]{color:var(--color-warn);background-color:color-mix(in srgb,var(--color-warn) 14%,transparent)}.chip--err[data-v-30700fa0]{color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 14%,transparent)}.chip__x[data-v-30700fa0]{font-size:9px;color:inherit;background:none;border:0;padding:0;cursor:pointer;opacity:.7}.chip__x[data-v-30700fa0]:hover{opacity:1}.field[data-v-0c4cf022]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-0c4cf022]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-0c4cf022]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-0c4cf022]{width:auto}.field__control[data-v-0c4cf022]{flex:1 1 auto;min-width:0}.field__hint[data-v-0c4cf022]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.row[data-v-0c4cf022]{display:flex;align-items:center;gap:6px}.picker[data-v-0c4cf022]{width:26px;height:26px;flex:none;padding:2px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.picker[data-v-0c4cf022]:focus-visible,.hex[data-v-0c4cf022]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.hex[data-v-0c4cf022]{flex:1 1 auto;min-width:0;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.picker[data-v-0c4cf022]:disabled,.hex[data-v-0c4cf022]:disabled{opacity:.5}.field[data-v-3afdb10c]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3afdb10c]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3afdb10c]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3afdb10c]{width:auto}.field__required[data-v-3afdb10c]{color:var(--color-err)}.field__control[data-v-3afdb10c]{flex:1 1 auto;min-width:0}.field__hint[data-v-3afdb10c],.field__error[data-v-3afdb10c]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.field__error[data-v-3afdb10c]{color:var(--color-err)}.input[data-v-3afdb10c]{width:100%;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.input--invalid[data-v-3afdb10c]{border-color:var(--color-err)}.input[data-v-3afdb10c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.input[data-v-3afdb10c]:disabled{opacity:.5}.rule[data-v-521e9319]{height:1px;margin:12px 0;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]{display:flex;align-items:center;gap:8px;height:auto;background:none;margin:14px 0 7px}.rule--labelled[data-v-521e9319]:before,.rule--labelled[data-v-521e9319]:after{content:\"\";height:1px;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]:before{width:10px;flex:none}.rule--labelled[data-v-521e9319]:after{flex:1 1 auto}.rule__label[data-v-521e9319]{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.field[data-v-1a8ee938]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-1a8ee938]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-1a8ee938]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-1a8ee938]{width:auto}.field__required[data-v-1a8ee938]{color:var(--color-err)}.field__control[data-v-1a8ee938]{flex:1 1 auto;min-width:0}.field__hint[data-v-1a8ee938],.field__error[data-v-1a8ee938]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-1a8ee938]{color:var(--color-err)}.fw[data-v-b6b4a10b]{position:absolute;display:flex;flex-direction:column;overflow:hidden;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.fw--docked[data-v-b6b4a10b]{border-radius:0}.fw--docked.fw--left[data-v-b6b4a10b]{border-left:0}.fw--docked.fw--right[data-v-b6b4a10b]{border-right:0}.fw--docked .fw__grip[data-v-b6b4a10b]{cursor:ew-resize}.fw__bar[data-v-b6b4a10b]{display:flex;align-items:center;gap:2px;flex:none;height:28px;padding:0 4px 0 10px;border-bottom:1px solid var(--color-divider);cursor:grab;touch-action:none;user-select:none}.fw__bar[data-v-b6b4a10b]:active{cursor:grabbing}.fw__bar[data-v-b6b4a10b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.fw__title[data-v-b6b4a10b]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.fw__act[data-v-b6b4a10b]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.fw__act[data-v-b6b4a10b]:hover{color:var(--color-fg);background-color:var(--color-raised)}.fw__act[data-v-b6b4a10b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.fw__body[data-v-b6b4a10b]{flex:1;min-height:0;overflow:auto}.fw__grip[data-v-b6b4a10b]{position:absolute;right:0;bottom:0;width:14px;height:14px;cursor:nwse-resize;touch-action:none}.fw__grip[data-v-b6b4a10b]:after{content:\"\";position:absolute;right:3px;bottom:3px;width:6px;height:6px;border-right:2px solid var(--color-outline, #3a4756);border-bottom:2px solid var(--color-outline, #3a4756)}.icon[data-v-15dffeec]{font-family:Material Icons,sans-serif;font-style:normal;font-weight:400;line-height:1;letter-spacing:normal;white-space:nowrap;direction:ltr;display:inline-block;vertical-align:middle;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-feature-settings:\"liga\";color:inherit}.icon--xs[data-v-15dffeec]{font-size:12px}.icon--sm[data-v-15dffeec]{font-size:14px}.icon--md[data-v-15dffeec]{font-size:16px}.icon--lg[data-v-15dffeec]{font-size:20px}.picker[data-v-c86d0906]{display:flex;align-items:center;gap:10px}.picker__current[data-v-c86d0906]{display:grid;flex:none;place-items:center;width:34px;height:34px;color:var(--color-accent);background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm);cursor:pointer}.picker__current[data-v-c86d0906]:hover:not(:disabled){border-color:var(--color-accent)}.picker__current[data-v-c86d0906]:disabled{cursor:default;opacity:.5}.picker__name[data-v-c86d0906]{flex:1;min-width:0;overflow:hidden;font-size:.85rem;color:var(--color-dim);text-overflow:ellipsis;white-space:nowrap}.picker__clear[data-v-c86d0906]{flex:none;padding:2px 6px;font:inherit;font-size:.78rem;color:var(--color-dim);background:none;border:0;cursor:pointer}.picker__clear[data-v-c86d0906]:hover{color:var(--color-fg);text-decoration:underline}.picker__catch[data-v-c86d0906]{position:fixed;inset:0;z-index:50000}.sheet[data-v-c86d0906]{position:fixed;z-index:50001;top:50%;left:50%;display:flex;flex-direction:column;gap:10px;width:min(460px,calc(100vw - 32px));max-height:min(70vh,560px);padding:12px;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);transform:translate(-50%,-50%)}.sheet__search input[data-v-c86d0906],.sheet__own input[data-v-c86d0906]{width:100%;padding:6px 10px;font:inherit;color:var(--color-fg);background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm)}.sheet__grid[data-v-c86d0906]{display:grid;flex:1 1 auto;grid-template-columns:repeat(auto-fill,minmax(44px,1fr));gap:4px;margin:0;padding:0;overflow-y:auto;list-style:none}.sheet__item[data-v-c86d0906]{display:grid;place-items:center;width:100%;aspect-ratio:1;color:var(--color-fg);background:none;border:1px solid transparent;border-radius:var(--radius-sm);cursor:pointer}.sheet__item[data-v-c86d0906]:hover{background-color:var(--color-sunken);border-color:var(--color-outline)}.sheet__item--on[data-v-c86d0906]{color:var(--color-accent);border-color:var(--color-accent)}.sheet__none[data-v-c86d0906]{flex:1 1 auto;margin:0;padding:16px 4px;font-size:.85rem;color:var(--color-dim)}.sheet__own[data-v-c86d0906]{display:flex;align-items:center;gap:8px;padding-top:10px;border-top:1px solid var(--color-divider, var(--color-outline))}.sheet__own-label[data-v-c86d0906]{flex:none;font-size:.8rem;color:var(--color-dim)}.sheet__own input[data-v-c86d0906]{flex:1;min-width:0}.sheet__preview[data-v-c86d0906]{display:grid;flex:none;place-items:center;width:28px;height:28px;color:var(--color-accent)}.sheet__take[data-v-c86d0906]{flex:none;padding:5px 10px;font:inherit;font-size:.82rem;color:var(--color-fg);background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm);cursor:pointer}.sheet__take[data-v-c86d0906]:disabled{cursor:default;opacity:.45}.sheet__warn[data-v-c86d0906]{margin:0;font-size:.8rem;color:var(--color-err)}.field[data-v-a5fd75e2]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-a5fd75e2]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-a5fd75e2]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-a5fd75e2]{width:auto}.field__required[data-v-a5fd75e2]{color:var(--color-err)}.field__control[data-v-a5fd75e2]{flex:1 1 auto;min-width:0}.field__hint[data-v-a5fd75e2],.field__error[data-v-a5fd75e2]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-a5fd75e2]{color:var(--color-err)}.shell[data-v-a5fd75e2]{display:flex;align-items:center;gap:6px;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-a5fd75e2]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-a5fd75e2]{border-color:var(--color-err)}.shell--off[data-v-a5fd75e2]{opacity:.5}.shell--sm[data-v-a5fd75e2]{height:22px}.shell--md[data-v-a5fd75e2]{height:26px}.shell--lg[data-v-a5fd75e2]{height:32px}.shell[data-v-a5fd75e2]:has(.input--area){height:auto;padding:5px 8px}.input[data-v-a5fd75e2]{flex:1 1 auto;min-width:0;padding:0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none}.shell--lg .input[data-v-a5fd75e2]{font-size:var(--text-base)}.input--num[data-v-a5fd75e2]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.input--area[data-v-a5fd75e2]{resize:vertical;line-height:1.45}.input[data-v-a5fd75e2]::placeholder{color:var(--color-dim);opacity:.75}.suffix[data-v-a5fd75e2]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.scrim[data-v-03f9e875]{position:fixed;inset:0;z-index:40000;display:grid;place-items:center;padding:24px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(4px)}.dialog[data-v-03f9e875]{display:flex;flex-direction:column;max-height:100%;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.dialog--sm[data-v-03f9e875]{width:380px}.dialog--md[data-v-03f9e875]{width:560px}.dialog--lg[data-v-03f9e875]{width:840px}.dialog__head[data-v-03f9e875]{display:flex;align-items:center;gap:10px;flex:none;padding:9px 12px;border-bottom:1px solid var(--color-divider)}.dialog__title[data-v-03f9e875]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.dialog__close[data-v-03f9e875]{margin-left:auto;width:22px;height:22px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.dialog__close[data-v-03f9e875]:hover{color:var(--color-fg);background-color:var(--color-raised)}.dialog__close[data-v-03f9e875]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.dialog__body[data-v-03f9e875]{flex:1 1 auto;min-height:0;padding:14px 12px;overflow-y:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.dialog__foot[data-v-03f9e875]{display:flex;align-items:center;justify-content:flex-end;gap:7px;flex:none;padding:9px 12px;border-top:1px solid var(--color-divider)}.field[data-v-da414860]{display:flex;align-items:flex-start;gap:10px;margin-bottom:7px}.field--stacked[data-v-da414860]{flex-direction:column;gap:4px}.field__label[data-v-da414860]{flex:none;width:120px;padding-top:2px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-da414860]{width:auto}.field__required[data-v-da414860]{color:var(--color-err)}.field__control[data-v-da414860]{flex:1 1 auto;min-width:0}.choices[data-v-da414860]{display:flex;flex-direction:column;gap:4px}.choices--inline[data-v-da414860]{flex-direction:row;flex-wrap:wrap;gap:14px}.choice[data-v-da414860]{display:flex;align-items:baseline;gap:7px;cursor:pointer}.choice--off[data-v-da414860]{opacity:.5;cursor:default}.choice__dot[data-v-da414860]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:inherit}.choice__dot[data-v-da414860]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.choice__label[data-v-da414860]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.field__error[data-v-da414860]{margin:3px 0 0;font-size:var(--text-xs);color:var(--color-err)}.field__hint[data-v-da414860]{margin:3px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.field[data-v-940042b2]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-940042b2]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-940042b2]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-940042b2]{width:auto}.field__required[data-v-940042b2]{color:var(--color-err)}.field__control[data-v-940042b2]{flex:1 1 auto;min-width:0}.field__hint[data-v-940042b2],.field__error[data-v-940042b2]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-940042b2]{color:var(--color-err)}.shell[data-v-940042b2]{position:relative;display:flex;align-items:center;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-940042b2]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-940042b2]{border-color:var(--color-err)}.shell--off[data-v-940042b2]{opacity:.5}.shell--sm[data-v-940042b2]{height:22px}.shell--md[data-v-940042b2]{height:26px}.shell--lg[data-v-940042b2]{height:32px}.shell[data-v-940042b2]:has(.select--many){height:auto;padding:0 2px}.select[data-v-940042b2]{flex:1 1 auto;min-width:0;height:100%;padding:0 14px 0 0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none;appearance:none;cursor:pointer}.shell--lg .select[data-v-940042b2]{font-size:var(--text-base)}.select option[data-v-940042b2]{color:var(--color-fg);background-color:var(--color-pane)}.select optgroup[data-v-940042b2]{color:var(--color-dim);background-color:var(--color-pane);font-weight:600;font-style:normal}.select optgroup option[data-v-940042b2]{color:var(--color-fg)}.select--many[data-v-940042b2]{height:auto;padding:4px 0}.chevron[data-v-940042b2]{position:absolute;right:7px;font-size:9px;color:var(--color-dim);pointer-events:none}.field[data-v-ed7d97ce]{display:flex;align-items:center;gap:10px;margin-bottom:7px}.field--stacked[data-v-ed7d97ce]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-ed7d97ce]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-ed7d97ce]{width:auto}.field__control[data-v-ed7d97ce]{flex:1 1 auto;min-width:0}.row[data-v-ed7d97ce]{display:flex;align-items:center;gap:8px}.range[data-v-ed7d97ce]{flex:1 1 auto;min-width:0;accent-color:var(--color-accent);cursor:pointer}.range[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.num[data-v-ed7d97ce]{width:62px;flex:none;height:22px;padding:0 6px;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.num[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.suffix[data-v-ed7d97ce]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.range[data-v-ed7d97ce]:disabled,.num[data-v-ed7d97ce]:disabled{opacity:.5}.sw[data-v-70940a00]{display:flex;align-items:center;gap:8px;margin-bottom:6px}.sw--off[data-v-70940a00]{opacity:.5}.sw__track[data-v-70940a00]{position:relative;width:28px;height:15px;flex:none;padding:0;background-color:var(--color-outline);border:0;border-radius:8px;cursor:pointer}.sw__track.on[data-v-70940a00]{background-color:var(--color-accent)}.sw__track[data-v-70940a00]:disabled{cursor:default}.sw__track[data-v-70940a00]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.sw__knob[data-v-70940a00]{position:absolute;top:2px;left:2px;width:11px;height:11px;border-radius:50%;background-color:var(--color-pane);transition:left .12s ease}.sw__track.on .sw__knob[data-v-70940a00]{left:15px}@media(prefers-reduced-motion:reduce){.sw__knob[data-v-70940a00]{transition:none}}.sw__label[data-v-70940a00]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.table[data-v-925340b8]{width:100%;height:100%;overflow:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}table[data-v-925340b8]{width:100%;border-collapse:collapse}th[data-v-925340b8]{position:sticky;top:0;z-index:1;padding:6px 10px;text-align:left;font-weight:500;white-space:nowrap;color:var(--color-dim);background-color:var(--color-raised);border-bottom:1px solid var(--color-divider)}td[data-v-925340b8]{padding:5px 10px;max-width:28ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-bottom:1px solid var(--color-divider)}tbody tr[data-v-925340b8]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.row--pick[data-v-925340b8]{cursor:pointer}.row--on td[data-v-925340b8]:first-child{box-shadow:inset 2px 0 0 var(--color-accent)}.row--on td[data-v-925340b8]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent)}.table__empty[data-v-925340b8]{margin:0;padding:14px 10px;color:var(--color-dim)}.tabs[data-v-f7c65d26]{display:flex;flex-wrap:wrap;align-items:stretch;gap:1px;min-height:var(--spacing-panelHeader);padding:0 6px;border-bottom:1px solid var(--color-divider)}.tab[data-v-f7c65d26]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 10px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab[data-v-f7c65d26]:hover:not(:disabled){color:var(--color-fg)}.tab[data-v-f7c65d26]:disabled{opacity:.45;cursor:default}.tab.on[data-v-f7c65d26]{color:var(--color-fg);font-weight:600}.tab.on[data-v-f7c65d26]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab[data-v-f7c65d26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.tab__count[data-v-f7c65d26]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}\n";})();
import { defineComponent as p, createElementBlock as a, openBlock as l, normalizeClass as w, createCommentVNode as k, renderSlot as V, createElementVNode as f, toDisplayString as y, mergeModels as z, useModel as E, useId as R, ref as N, watchEffect as Le, withDirectives as K, unref as B, vModelCheckbox as Ne, createTextVNode as A, computed as q, vModelText as O, vModelDynamic as fe, reactive as ve, watch as le, onMounted as me, onBeforeUnmount as ae, normalizeStyle as be, withKeys as W, withModifiers as T, nextTick as Ae, createBlock as J, withCtx as Ue, createVNode as oe, Teleport as he, Fragment as C, renderList as H, vModelRadio as We, vModelSelect as se } from "vue";
const Re = ["type", "disabled", "aria-busy"], Oe = {
  key: 0,
  class: "btn__spinner",
  "aria-hidden": "true"
}, Xe = /* @__PURE__ */ p({
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
    return (t, o) => (l(), a("button", {
      type: e.type,
      class: w([
        "btn",
        `btn--${e.intent}`,
        `btn--${e.size}`,
        { "btn--block": e.block, "btn--busy": e.busy }
      ]),
      disabled: e.disabled || e.busy,
      "aria-busy": e.busy || void 0
    }, [
      e.busy ? (l(), a("span", Oe)) : k("", !0),
      V(t.$slots, "default", {}, void 0, !0)
    ], 10, Re));
  }
}), M = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, u] of t)
    o[i] = u;
  return o;
}, ye = /* @__PURE__ */ M(Xe, [["__scopeId", "data-v-5b01af26"]]), je = {
  key: 0,
  class: "card__head"
}, Fe = { class: "card__title" }, Pe = /* @__PURE__ */ p({
  __name: "DCard",
  props: {
    title: {},
    padded: { type: Boolean, default: !0 },
    interactive: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (l(), a("section", {
      class: w(["card", { "card--interactive": e.interactive }])
    }, [
      e.title || t.$slots.header ? (l(), a("header", je, [
        V(t.$slots, "header", {}, () => [
          f("h3", Fe, y(e.title), 1)
        ], !0),
        o[0] || (o[0] = f("span", { class: "card__spacer" }, null, -1)),
        V(t.$slots, "actions", {}, void 0, !0)
      ])) : k("", !0),
      f("div", {
        class: w(["card__body", { "card__body--padded": e.padded }])
      }, [
        V(t.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ke = /* @__PURE__ */ M(Pe, [["__scopeId", "data-v-8c187da1"]]), Ge = ["id", "disabled"], Je = ["for"], Ze = {
  key: 0,
  class: "check__hint"
}, Qe = /* @__PURE__ */ p({
  __name: "DCheckbox",
  props: /* @__PURE__ */ z({
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
    const t = E(e, "modelValue"), o = e, i = R(), u = N(null);
    return Le(() => {
      u.value && (u.value.indeterminate = o.indeterminate);
    }), (s, r) => (l(), a("div", {
      class: w(["check", { "check--off": e.disabled }])
    }, [
      K(f("input", {
        id: B(i),
        ref_key: "box",
        ref: u,
        "onUpdate:modelValue": r[0] || (r[0] = (c) => t.value = c),
        class: "check__box",
        type: "checkbox",
        disabled: e.disabled
      }, null, 8, Ge), [
        [Ne, t.value]
      ]),
      f("label", {
        for: B(i),
        class: "check__label"
      }, [
        V(s.$slots, "default", {}, () => [
          A(y(e.label), 1)
        ], !0),
        e.hint ? (l(), a("span", Ze, y(e.hint), 1)) : k("", !0)
      ], 8, Je)
    ], 2));
  }
}), $e = /* @__PURE__ */ M(Qe, [["__scopeId", "data-v-e080554d"]]), et = /* @__PURE__ */ p({
  __name: "DChip",
  props: {
    tone: { default: "neutral" },
    numeric: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(e) {
    return (t, o) => (l(), a("span", {
      class: w(["chip", `chip--${e.tone}`, { "chip--num": e.numeric }])
    }, [
      V(t.$slots, "default", {}, void 0, !0),
      e.removable ? (l(), a("button", {
        key: 0,
        type: "button",
        class: "chip__x",
        "aria-label": "Entfernen",
        onClick: o[0] || (o[0] = (i) => t.$emit("remove"))
      }, " ✕ ")) : k("", !0)
    ], 2));
  }
}), we = /* @__PURE__ */ M(et, [["__scopeId", "data-v-30700fa0"]]), tt = ["for"], lt = { class: "field__control" }, at = { class: "row" }, nt = ["id", "value", "disabled", "aria-label"], it = ["disabled", "aria-label"], ot = {
  key: 0,
  class: "field__hint"
}, st = /* @__PURE__ */ p({
  __name: "DColorInput",
  props: /* @__PURE__ */ z({
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
    const t = E(e, "modelValue"), o = R(), i = q(() => {
      const u = (t.value ?? "").trim();
      return /^#[0-9a-f]{6}$/i.test(u) ? u : /^#[0-9a-f]{3}$/i.test(u) ? "#" + [...u.slice(1)].map((s) => s + s).join("") : "#000000";
    });
    return (u, s) => (l(), a("div", {
      class: w(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: B(o)
      }, y(e.label), 9, tt)) : k("", !0),
      f("div", lt, [
        f("div", at, [
          f("input", {
            id: B(o),
            class: "picker",
            type: "color",
            value: i.value,
            disabled: e.disabled,
            "aria-label": e.label ?? "Farbe",
            onInput: s[0] || (s[0] = (r) => t.value = r.target.value)
          }, null, 40, nt),
          K(f("input", {
            "onUpdate:modelValue": s[1] || (s[1] = (r) => t.value = r),
            class: "hex",
            type: "text",
            spellcheck: "false",
            disabled: e.disabled,
            "aria-label": e.label ? `${e.label} als Hexwert` : "Farbe als Hexwert"
          }, null, 8, it), [
            [O, t.value]
          ])
        ]),
        e.hint ? (l(), a("p", ot, y(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), ge = /* @__PURE__ */ M(st, [["__scopeId", "data-v-0c4cf022"]]), dt = ["for"], rt = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, ut = { class: "field__control" }, ct = ["id", "type", "disabled", "required", "min", "max", "aria-invalid"], ft = {
  key: 0,
  class: "field__error",
  role: "alert"
}, vt = {
  key: 1,
  class: "field__hint"
}, mt = /* @__PURE__ */ p({
  __name: "DDateInput",
  props: /* @__PURE__ */ z({
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
    const t = E(e, "modelValue"), o = R(), i = { date: "date", time: "time", datetime: "datetime-local" };
    return (u, s) => (l(), a("div", {
      class: w(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: B(o)
      }, [
        A(y(e.label) + " ", 1),
        e.required ? (l(), a("span", rt, "*")) : k("", !0)
      ], 8, dt)) : k("", !0),
      f("div", ut, [
        K(f("input", {
          id: B(o),
          "onUpdate:modelValue": s[0] || (s[0] = (r) => t.value = r),
          class: w(["input", { "input--invalid": !!e.error }]),
          type: i[e.mode],
          disabled: e.disabled,
          required: e.required,
          min: e.min,
          max: e.max,
          "aria-invalid": !!e.error || void 0
        }, null, 10, ct), [
          [fe, t.value]
        ]),
        e.error ? (l(), a("p", ft, y(e.error), 1)) : e.hint ? (l(), a("p", vt, y(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), xe = /* @__PURE__ */ M(mt, [["__scopeId", "data-v-3afdb10c"]]), bt = {
  key: 0,
  class: "rule__label"
}, ht = /* @__PURE__ */ p({
  __name: "DDivider",
  props: {
    label: {}
  },
  setup(e) {
    return (t, o) => (l(), a("div", {
      class: w(["rule", { "rule--labelled": e.label }]),
      role: "separator"
    }, [
      e.label ? (l(), a("span", bt, y(e.label), 1)) : k("", !0)
    ], 2));
  }
}), _e = /* @__PURE__ */ M(ht, [["__scopeId", "data-v-521e9319"]]), yt = ["for"], kt = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, $t = { class: "field__control" }, wt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, gt = {
  key: 1,
  class: "field__hint"
}, xt = /* @__PURE__ */ p({
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
    return (t, o) => (l(), a("div", {
      class: w(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: t.$props.for
      }, [
        A(y(e.label) + " ", 1),
        e.required ? (l(), a("span", kt, "*")) : k("", !0)
      ], 8, yt)) : k("", !0),
      f("div", $t, [
        V(t.$slots, "default", {}, void 0, !0),
        e.error ? (l(), a("p", wt, y(e.error), 1)) : e.hint ? (l(), a("p", gt, y(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), ne = /* @__PURE__ */ M(xt, [["__scopeId", "data-v-1a8ee938"]]), j = ve(/* @__PURE__ */ new Map());
let _t = 0;
const pe = ve({ left: 240, right: 240 });
function de(e) {
  return pe[e];
}
function te(e, t) {
  pe[e] = t;
}
function re(e, t, o, i) {
  const u = j.get(e);
  j.set(e, { side: t, want: o, min: i, seq: u?.seq ?? _t++ });
}
function ue(e) {
  j.delete(e);
}
function Me(e) {
  return [...j.entries()].filter(([, t]) => t.side === e).sort((t, o) => t[1].seq - o[1].seq);
}
function pt(e, t) {
  const o = j.get(e);
  if (!o) return null;
  const i = Me(o.side);
  if (!i.length) return null;
  const u = i.reduce((v, [, m]) => v + m.min, 0), s = u > t && u > 0 ? t / u : 1, r = Math.max(0, t - u * s), c = i.reduce((v, [, m]) => v + Math.max(1, m.want), 0);
  let n = 0;
  for (let v = 0; v < i.length; v++) {
    const [m, g] = i[v], Y = v === i.length - 1 ? Math.max(0, t - n) : Math.round(g.min * s + r * Math.max(1, g.want) / c);
    if (m === e) return { y: n, h: Y };
    n += Y;
  }
  return null;
}
function Mt(e) {
  return Me(e).length;
}
const Dt = ["aria-label"], Bt = ["aria-label"], Vt = { class: "fw__title" }, It = ["aria-label"], St = { class: "fw__body" }, Ct = ["aria-label"], G = 24, qt = /* @__PURE__ */ p({
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
    const i = e, u = o, s = q(() => i.dockable || i.initial?.dock != null), r = { x: 16, y: 16, w: 240, h: 320, dock: null, freeY: 16, freeH: 320 };
    function c() {
      const d = { ...r, ...i.initial };
      if (d.freeY = d.y, d.freeH = d.h, !i.rememberAs) return d;
      try {
        const h = localStorage.getItem(i.rememberAs);
        if (!h) return d;
        const b = JSON.parse(h), D = (S, ee) => Number.isFinite(S) ? S : ee;
        return {
          x: D(b?.x, d.x),
          y: D(b?.y, d.y),
          w: D(b?.w, d.w),
          h: D(b?.h, d.h),
          dock: b?.dock === "left" || b?.dock === "right" ? b.dock : null,
          freeY: D(b?.freeY, d.y),
          freeH: D(b?.freeH, d.h)
        };
      } catch {
        return d;
      }
    }
    const n = N(c()), v = N();
    function m() {
      if (i.rememberAs)
        try {
          localStorage.setItem(i.rememberAs, JSON.stringify(n.value));
        } catch {
        }
    }
    function g(d) {
      return Math.min(i.maxWidth, Math.max(i.minWidth, d));
    }
    function I() {
      const d = v.value?.offsetParent;
      return {
        width: d?.clientWidth ?? window.innerWidth,
        height: d?.clientHeight ?? window.innerHeight
      };
    }
    const Y = q(() => i.rememberAs ?? i.title), L = N({ width: 0, height: 0 });
    function U() {
      const d = n.value.dock;
      if (!d) return;
      const h = pt(Y.value, L.value.height);
      if (!h) return;
      const b = de(d);
      n.value = {
        ...n.value,
        w: b,
        x: d === "left" ? 0 : Math.max(0, L.value.width - b),
        y: h.y,
        h: h.h
      };
    }
    le(
      () => {
        const d = n.value.dock;
        return d ? `${Mt(d)}:${de(d)}` : "";
      },
      (d) => {
        d && (L.value = I(), U());
      }
    );
    function _(d, h) {
      const b = n.value;
      L.value = h;
      const D = b.dock ? b.freeY : b.y, S = b.dock ? b.freeH : b.h;
      b.dock || te(d, g(b.w)), re(Y.value, d, S, i.minHeight), n.value = { ...b, dock: d, freeY: D, freeH: S }, U();
    }
    function x() {
      const d = n.value;
      d.dock && (ue(Y.value), n.value = { ...d, y: d.freeY, h: d.freeH, dock: null });
    }
    let $ = null;
    function Z(d) {
      if (!$) return;
      const h = I();
      if ($.kind === "move") {
        const D = n.value.w, S = Math.min(
          Math.max(0, $.fromX + (d.clientX - $.startX)),
          Math.max(0, h.width - D)
        ), ee = Math.min(
          Math.max(0, $.fromY + (d.clientY - $.startY)),
          Math.max(0, h.height - 28)
        );
        s.value && S <= G ? _("left", h) : s.value && S + D >= h.width - G ? _("right", h) : (x(), n.value = { ...n.value, x: S, y: ee });
        return;
      }
      const b = g($.fromW + (d.clientX - $.startX));
      if (n.value.dock) {
        L.value = h, te(n.value.dock, b), U();
        return;
      }
      n.value = {
        ...n.value,
        w: b,
        h: Math.max(i.minHeight, $.fromH + (d.clientY - $.startY))
      };
    }
    function Q() {
      $ && m(), $ = null, window.removeEventListener("pointermove", Z), window.removeEventListener("pointerup", Q), document.body.style.userSelect = "";
    }
    function ie(d) {
      $ = d, window.addEventListener("pointermove", Z), window.addEventListener("pointerup", Q), document.body.style.userSelect = "none";
    }
    const Te = (d) => ie({ kind: "move", startX: d.clientX, startY: d.clientY, fromX: n.value.x, fromY: n.value.y }), He = (d) => ie({ kind: "size", startX: d.clientX, startY: d.clientY, fromW: n.value.w, fromH: n.value.h });
    function F(d, h) {
      const b = I(), D = n.value.w, S = Math.min(Math.max(0, n.value.x + d), Math.max(0, b.width - D));
      s.value && S <= G ? _("left", b) : s.value && S + D >= b.width - G ? _("right", b) : (x(), n.value = {
        ...n.value,
        x: S,
        y: Math.min(Math.max(0, n.value.y + h), Math.max(0, b.height - 28))
      }), m();
    }
    function P() {
      const d = I();
      L.value = d;
      const h = n.value, b = Math.min(g(h.w), d.width);
      if (h.dock) {
        U();
        return;
      }
      const D = Math.min(h.h, d.height);
      n.value = {
        ...h,
        w: b,
        h: D,
        x: Math.min(Math.max(0, h.x), Math.max(0, d.width - b)),
        y: Math.min(Math.max(0, h.y), Math.max(0, d.height - D))
      };
    }
    me(() => {
      if (n.value.dock) {
        const d = I();
        L.value = d, te(n.value.dock, g(n.value.w)), re(Y.value, n.value.dock, n.value.freeH, i.minHeight);
      }
      P(), window.addEventListener("resize", P);
    }), ae(() => {
      Q(), ue(Y.value), window.removeEventListener("resize", P);
    });
    const Ye = q(() => ({
      left: n.value.x + "px",
      top: n.value.y + "px",
      width: n.value.w + "px",
      height: n.value.h + "px",
      zIndex: String(i.layer)
    }));
    return t({ placement: n, keepInView: P }), (d, h) => (l(), a("aside", {
      ref_key: "root",
      ref: v,
      class: w([
        "fw",
        {
          "fw--docked": !!n.value.dock,
          "fw--left": n.value.dock === "left",
          "fw--right": n.value.dock === "right"
        }
      ]),
      style: be(Ye.value),
      "aria-label": e.title
    }, [
      f("div", {
        class: "fw__bar",
        role: "toolbar",
        tabindex: "0",
        "aria-label": `${e.title} verschieben - mit den Pfeiltasten bewegen`,
        onPointerdown: h[2] || (h[2] = T((b) => Te(b), ["prevent"])),
        onKeydown: [
          h[3] || (h[3] = W(T((b) => F(-16, 0), ["prevent"]), ["left"])),
          h[4] || (h[4] = W(T((b) => F(16, 0), ["prevent"]), ["right"])),
          h[5] || (h[5] = W(T((b) => F(0, -16), ["prevent"]), ["up"])),
          h[6] || (h[6] = W(T((b) => F(0, 16), ["prevent"]), ["down"]))
        ]
      }, [
        f("span", Vt, y(e.title), 1),
        V(d.$slots, "actions", {}, void 0, !0),
        e.closable ? (l(), a("button", {
          key: 0,
          type: "button",
          class: "fw__act",
          title: "Schließen",
          "aria-label": `${e.title} schließen`,
          onPointerdown: h[0] || (h[0] = T(() => {
          }, ["stop"])),
          onClick: h[1] || (h[1] = (b) => u("close"))
        }, " × ", 40, It)) : k("", !0)
      ], 40, Bt),
      f("div", St, [
        V(d.$slots, "default", {}, void 0, !0)
      ]),
      e.resizable ? (l(), a("div", {
        key: 0,
        class: "fw__grip",
        role: "separator",
        "aria-label": `Größe von ${e.title}`,
        title: "Größe ändern",
        onPointerdown: h[7] || (h[7] = T((b) => He(b), ["prevent"]))
      }, null, 40, Ct)) : k("", !0)
    ], 14, Dt));
  }
}), De = /* @__PURE__ */ M(qt, [["__scopeId", "data-v-b6b4a10b"]]), zt = ["aria-hidden", "aria-label", "role"], Kt = /* @__PURE__ */ p({
  __name: "DIcon",
  props: {
    name: {},
    size: { default: "md" },
    tone: {},
    decorative: { type: Boolean, default: !0 },
    label: {}
  },
  setup(e) {
    return (t, o) => (l(), a("i", {
      class: w(["icon", `icon--${e.size}`]),
      style: be(e.tone ? { color: `var(--${e.tone})` } : void 0),
      "aria-hidden": e.decorative ? "true" : void 0,
      "aria-label": e.decorative ? void 0 : e.label ?? e.name,
      role: e.decorative ? void 0 : "img"
    }, y(e.name), 15, zt));
  }
}), X = /* @__PURE__ */ M(Kt, [["__scopeId", "data-v-15dffeec"]]), Et = { class: "picker" }, Tt = ["disabled", "title"], Ht = { class: "picker__name" }, Yt = { class: "sheet__search" }, Lt = {
  key: 0,
  class: "sheet__grid"
}, Nt = ["title", "onClick"], At = {
  key: 1,
  class: "sheet__none"
}, Ut = { class: "sheet__own" }, Wt = ["onKeydown"], Rt = {
  class: "sheet__preview",
  "aria-hidden": "true"
}, Ot = ["disabled"], Xt = {
  key: 2,
  class: "sheet__warn"
}, jt = /* @__PURE__ */ p({
  __name: "DIconPicker",
  props: /* @__PURE__ */ z({
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
    const t = E(e, "modelValue"), o = [
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
    ], i = N(!1), u = N(""), s = N(""), r = N(), c = N([]);
    function n() {
      const _ = document.createElement("span");
      _.setAttribute("aria-hidden", "true"), _.style.cssText = 'position:absolute;left:-9999px;top:-9999px;font-family:"Material Icons";font-size:24px;line-height:1;white-space:nowrap', document.body.appendChild(_);
      const x = [];
      for (const $ of o)
        _.textContent = $, Math.abs(_.getBoundingClientRect().width - 24) < 1.5 && x.push($);
      return _.remove(), x;
    }
    function v(_) {
      if (!_.trim()) return !0;
      const x = document.createElement("span");
      x.style.cssText = 'position:absolute;left:-9999px;top:-9999px;font-family:"Material Icons";font-size:24px;line-height:1;white-space:nowrap', x.textContent = _.trim(), document.body.appendChild(x);
      const $ = x.getBoundingClientRect().width;
      return x.remove(), Math.abs($ - 24) < 1.5;
    }
    const m = q(() => v(s.value)), g = q(() => {
      const _ = u.value.trim().toLowerCase();
      return _ ? c.value.filter((x) => x.includes(_)) : c.value;
    });
    le(i, async (_) => {
      if (!_) {
        window.removeEventListener("keydown", I);
        return;
      }
      s.value = t.value, u.value = "", window.addEventListener("keydown", I), await Ae();
      try {
        await document.fonts?.ready;
      } catch {
      }
      const x = n();
      c.value = x.length ? x : o;
    }), ae(() => window.removeEventListener("keydown", I));
    function I(_) {
      _.key === "Escape" && (i.value = !1);
    }
    function Y(_) {
      t.value = _, i.value = !1;
    }
    function L() {
      t.value = "", i.value = !1;
    }
    function U() {
      m.value && (t.value = s.value.trim(), i.value = !1);
    }
    return (_, x) => (l(), J(ne, {
      label: e.label,
      hint: e.hint,
      stacked: ""
    }, {
      default: Ue(() => [
        f("div", Et, [
          f("button", {
            type: "button",
            class: "picker__current",
            disabled: e.disabled,
            title: t.value || `${e.fallback} (vom Typ)`,
            onClick: x[0] || (x[0] = ($) => i.value = !i.value)
          }, [
            oe(X, {
              name: t.value || e.fallback,
              size: "lg"
            }, null, 8, ["name"])
          ], 8, Tt),
          f("span", Ht, y(t.value || `${e.fallback} — vom Typ`), 1),
          t.value ? (l(), a("button", {
            key: 0,
            type: "button",
            class: "picker__clear",
            onClick: L
          }, " Zurücksetzen ")) : k("", !0)
        ]),
        (l(), J(he, { to: "body" }, [
          i.value ? (l(), a(C, { key: 0 }, [
            f("div", {
              class: "picker__catch",
              onClick: x[1] || (x[1] = ($) => i.value = !1)
            }),
            f("div", {
              ref_key: "panel",
              ref: r,
              class: "sheet",
              role: "dialog",
              "aria-label": "Symbol wählen"
            }, [
              f("div", Yt, [
                K(f("input", {
                  "onUpdate:modelValue": x[2] || (x[2] = ($) => u.value = $),
                  type: "search",
                  placeholder: "Symbol suchen…",
                  autofocus: ""
                }, null, 512), [
                  [O, u.value]
                ])
              ]),
              g.value.length ? (l(), a("ul", Lt, [
                (l(!0), a(C, null, H(g.value, ($) => (l(), a("li", { key: $ }, [
                  f("button", {
                    type: "button",
                    class: w(["sheet__item", { "sheet__item--on": t.value === $ }]),
                    title: $,
                    onClick: (Z) => Y($)
                  }, [
                    oe(X, {
                      name: $,
                      size: "lg"
                    }, null, 8, ["name"])
                  ], 10, Nt)
                ]))), 128))
              ])) : (l(), a("p", At, "Kein Symbol mit diesem Namen in der Auswahl.")),
              f("div", Ut, [
                x[4] || (x[4] = f("label", {
                  class: "sheet__own-label",
                  for: "icon-own"
                }, "Anderer Name", -1)),
                K(f("input", {
                  id: "icon-own",
                  "onUpdate:modelValue": x[3] || (x[3] = ($) => s.value = $),
                  type: "text",
                  placeholder: "z. B. thermostat",
                  onKeydown: W(T(U, ["prevent"]), ["enter"])
                }, null, 40, Wt), [
                  [O, s.value]
                ]),
                f("span", Rt, [
                  m.value && s.value.trim() ? (l(), J(X, {
                    key: 0,
                    name: s.value.trim(),
                    size: "md"
                  }, null, 8, ["name"])) : k("", !0)
                ]),
                f("button", {
                  type: "button",
                  class: "sheet__take",
                  disabled: !m.value || !s.value.trim(),
                  onClick: U
                }, " Übernehmen ", 8, Ot)
              ]),
              s.value.trim() && !m.value ? (l(), a("p", Xt, " Dieses Symbol kennt die Schrift nicht — es würde als Text erscheinen. ")) : k("", !0)
            ], 512)
          ], 64)) : k("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["label", "hint"]));
  }
}), Be = /* @__PURE__ */ M(jt, [["__scopeId", "data-v-c86d0906"]]), Ft = ["for"], Pt = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Gt = { class: "field__control" }, Jt = ["id", "rows", "placeholder", "disabled", "readonly", "required", "aria-invalid"], Zt = ["id", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "step", "aria-invalid"], Qt = {
  key: 2,
  class: "suffix"
}, el = {
  key: 0,
  class: "field__error",
  role: "alert"
}, tl = {
  key: 1,
  class: "field__hint"
}, ll = /* @__PURE__ */ p({
  __name: "DInput",
  props: /* @__PURE__ */ z({
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
    const t = E(e, "modelValue"), o = e, i = R(), u = q(() => o.type === "number");
    return (s, r) => (l(), a("div", {
      class: w(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: B(i)
      }, [
        A(y(e.label) + " ", 1),
        e.required ? (l(), a("span", Pt, "*")) : k("", !0)
      ], 8, Ft)) : k("", !0),
      f("div", Gt, [
        f("div", {
          class: w(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.rows ? K((l(), a("textarea", {
            key: 0,
            id: B(i),
            "onUpdate:modelValue": r[0] || (r[0] = (c) => t.value = c),
            class: "input input--area",
            rows: e.rows,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, null, 8, Jt)), [
            [O, t.value]
          ]) : K((l(), a("input", {
            key: 1,
            id: B(i),
            "onUpdate:modelValue": r[1] || (r[1] = (c) => t.value = c),
            class: w(["input", { "input--num": u.value }]),
            type: e.type,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            min: e.min,
            max: e.max,
            step: e.step,
            "aria-invalid": !!e.error || void 0
          }, null, 10, Zt)), [
            [fe, t.value]
          ]),
          e.suffix ? (l(), a("span", Qt, y(e.suffix), 1)) : k("", !0)
        ], 2),
        e.error ? (l(), a("p", el, y(e.error), 1)) : e.hint ? (l(), a("p", tl, y(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ M(ll, [["__scopeId", "data-v-a5fd75e2"]]), al = ["aria-label"], nl = {
  key: 0,
  class: "dialog__head"
}, il = { class: "dialog__title" }, ol = { class: "dialog__body" }, sl = {
  key: 1,
  class: "dialog__foot"
}, dl = /* @__PURE__ */ p({
  __name: "DModal",
  props: /* @__PURE__ */ z({
    title: {},
    size: { default: "md" },
    persistent: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ z(["cancel"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = E(e, "modelValue"), i = e, u = t;
    function s() {
      i.persistent || (o.value = !1, u("cancel"));
    }
    function r(c) {
      c.key === "Escape" && o.value && s();
    }
    return le(o, (c) => {
      document.body.style.overflow = c ? "hidden" : "";
    }), me(() => window.addEventListener("keydown", r)), ae(() => {
      window.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, n) => (l(), J(he, { to: "body" }, [
      o.value ? (l(), a("div", {
        key: 0,
        class: "scrim",
        onClick: T(s, ["self"])
      }, [
        f("div", {
          class: w(["dialog", `dialog--${e.size}`]),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title
        }, [
          e.title || c.$slots.header ? (l(), a("header", nl, [
            V(c.$slots, "header", {}, () => [
              f("h2", il, y(e.title), 1)
            ], !0),
            e.persistent ? k("", !0) : (l(), a("button", {
              key: 0,
              type: "button",
              class: "dialog__close",
              "aria-label": "Schließen",
              onClick: s
            }, " ✕ "))
          ])) : k("", !0),
          f("div", ol, [
            V(c.$slots, "default", {}, void 0, !0)
          ]),
          c.$slots.actions ? (l(), a("footer", sl, [
            V(c.$slots, "actions", {}, void 0, !0)
          ])) : k("", !0)
        ], 10, al)
      ])) : k("", !0)
    ]));
  }
}), Ie = /* @__PURE__ */ M(dl, [["__scopeId", "data-v-03f9e875"]]), rl = {
  key: 0,
  class: "field__label"
}, ul = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, cl = { class: "field__control" }, fl = ["aria-label"], vl = ["name", "value", "disabled", "required"], ml = { class: "choice__label" }, bl = {
  key: 0,
  class: "field__error",
  role: "alert"
}, hl = {
  key: 1,
  class: "field__hint"
}, yl = /* @__PURE__ */ p({
  __name: "DRadioGroup",
  props: /* @__PURE__ */ z({
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
    const t = E(e, "modelValue"), o = e, i = R(), u = q(
      () => (o.options ?? []).map((s) => {
        if (s === null || typeof s != "object")
          return { value: s, label: String(s) };
        const r = s, c = o.valueKey in r ? r[o.valueKey] : r, n = o.labelKey in r ? r[o.labelKey] : c;
        return { value: c, label: String(n ?? "") };
      })
    );
    return (s, r) => (l(), a("div", {
      class: w(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("span", rl, [
        A(y(e.label) + " ", 1),
        e.required ? (l(), a("span", ul, "*")) : k("", !0)
      ])) : k("", !0),
      f("div", cl, [
        f("div", {
          class: w(["choices", { "choices--inline": e.inline }]),
          role: "radiogroup",
          "aria-label": e.label
        }, [
          (l(!0), a(C, null, H(u.value, (c, n) => (l(), a("label", {
            key: n,
            class: w(["choice", { "choice--off": e.disabled }])
          }, [
            K(f("input", {
              "onUpdate:modelValue": r[0] || (r[0] = (v) => t.value = v),
              class: "choice__dot",
              type: "radio",
              name: B(i),
              value: c.value,
              disabled: e.disabled,
              required: e.required
            }, null, 8, vl), [
              [We, t.value]
            ]),
            f("span", ml, y(c.label), 1)
          ], 2))), 128))
        ], 10, fl),
        e.error ? (l(), a("p", bl, y(e.error), 1)) : e.hint ? (l(), a("p", hl, y(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), Se = /* @__PURE__ */ M(yl, [["__scopeId", "data-v-da414860"]]), kl = ["for"], $l = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, wl = { class: "field__control" }, gl = ["id", "size", "disabled", "required", "aria-invalid"], xl = ["value"], _l = ["id", "disabled", "required", "aria-invalid"], pl = {
  key: 0,
  value: ""
}, Ml = ["value"], Dl = ["label"], Bl = ["value"], Vl = ["value"], Il = {
  key: 2,
  class: "chevron",
  "aria-hidden": "true"
}, Sl = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Cl = {
  key: 1,
  class: "field__hint"
}, ql = /* @__PURE__ */ p({
  __name: "DSelect",
  props: /* @__PURE__ */ z({
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
    const t = E(e, "modelValue"), o = e, i = R(), u = q(
      () => (o.options ?? []).map((n) => {
        if (n === null || typeof n != "object")
          return { value: n, label: String(n) };
        const v = n, m = o.valueKey in v ? v[o.valueKey] : v, g = o.labelKey in v ? v[o.labelKey] : m, I = o.groupKey ? v[o.groupKey] : void 0;
        return { value: m, label: String(g ?? ""), group: I === void 0 ? void 0 : String(I) };
      })
    ), s = q(() => {
      const n = /* @__PURE__ */ new Map(), v = [];
      return u.value.forEach((m, g) => {
        if (!m.group) {
          v.push({ index: g, label: m.label });
          return;
        }
        n.has(m.group) || n.set(m.group, []), n.get(m.group).push({ index: g, label: m.label });
      }), { loose: v, headed: [...n].map(([m, g]) => ({ label: m, options: g })) };
    }), r = q({
      get() {
        const n = u.value.findIndex((v) => v.value === t.value);
        return n >= 0 ? String(n) : "";
      },
      set(n) {
        t.value = n === "" ? void 0 : u.value[Number(n)]?.value;
      }
    }), c = q({
      get() {
        const n = Array.isArray(t.value) ? t.value : [];
        return u.value.map((v, m) => n.includes(v.value) ? String(m) : "").filter((v) => v !== "");
      },
      set(n) {
        t.value = n.map((v) => u.value[Number(v)]?.value);
      }
    });
    return (n, v) => (l(), a("div", {
      class: w(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: B(i)
      }, [
        A(y(e.label) + " ", 1),
        e.required ? (l(), a("span", $l, "*")) : k("", !0)
      ], 8, kl)) : k("", !0),
      f("div", wl, [
        f("div", {
          class: w(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.multiple ? K((l(), a("select", {
            key: 0,
            id: B(i),
            "onUpdate:modelValue": v[0] || (v[0] = (m) => c.value = m),
            class: w(["select", "select--many"]),
            multiple: "",
            size: Math.min(Math.max(u.value.length, 2), 8),
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            (l(!0), a(C, null, H(u.value, (m, g) => (l(), a("option", {
              key: g,
              value: String(g)
            }, y(m.label), 9, xl))), 128))
          ], 8, gl)), [
            [se, c.value]
          ]) : K((l(), a("select", {
            key: 1,
            id: B(i),
            "onUpdate:modelValue": v[1] || (v[1] = (m) => r.value = m),
            class: "select",
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            e.clearable || t.value === void 0 ? (l(), a("option", pl, y(e.placeholder ?? "—"), 1)) : k("", !0),
            e.groupKey ? (l(), a(C, { key: 1 }, [
              (l(!0), a(C, null, H(s.value.loose, (m) => (l(), a("option", {
                key: m.index,
                value: String(m.index)
              }, y(m.label), 9, Ml))), 128)),
              (l(!0), a(C, null, H(s.value.headed, (m) => (l(), a("optgroup", {
                key: m.label,
                label: m.label
              }, [
                (l(!0), a(C, null, H(m.options, (g) => (l(), a("option", {
                  key: g.index,
                  value: String(g.index)
                }, y(g.label), 9, Bl))), 128))
              ], 8, Dl))), 128))
            ], 64)) : (l(!0), a(C, { key: 2 }, H(u.value, (m, g) => (l(), a("option", {
              key: g,
              value: String(g)
            }, y(m.label), 9, Vl))), 128))
          ], 8, _l)), [
            [se, r.value]
          ]),
          e.multiple ? k("", !0) : (l(), a("span", Il, "▾"))
        ], 2),
        e.error ? (l(), a("p", Sl, y(e.error), 1)) : e.hint ? (l(), a("p", Cl, y(e.hint), 1)) : k("", !0)
      ])
    ], 2));
  }
}), Ce = /* @__PURE__ */ M(ql, [["__scopeId", "data-v-940042b2"]]), zl = ["for"], Kl = { class: "field__control row" }, El = ["id", "min", "max", "step", "disabled"], Tl = ["min", "max", "step", "disabled", "aria-label"], Hl = {
  key: 0,
  class: "suffix"
}, Yl = /* @__PURE__ */ p({
  __name: "DSlider",
  props: /* @__PURE__ */ z({
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
    const t = E(e, "modelValue"), o = R();
    return (i, u) => (l(), a("div", {
      class: w(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: B(o)
      }, y(e.label), 9, zl)) : k("", !0),
      f("div", Kl, [
        K(f("input", {
          id: B(o),
          "onUpdate:modelValue": u[0] || (u[0] = (s) => t.value = s),
          class: "range",
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled
        }, null, 8, El), [
          [
            O,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        K(f("input", {
          "onUpdate:modelValue": u[1] || (u[1] = (s) => t.value = s),
          class: "num",
          type: "number",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label ? `${e.label} als Zahl` : "Wert"
        }, null, 8, Tl), [
          [
            O,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        e.suffix ? (l(), a("span", Hl, y(e.suffix), 1)) : k("", !0)
      ])
    ], 2));
  }
}), qe = /* @__PURE__ */ M(Yl, [["__scopeId", "data-v-ed7d97ce"]]), Ll = ["aria-checked", "aria-label", "disabled"], Nl = /* @__PURE__ */ p({
  __name: "DSwitch",
  props: /* @__PURE__ */ z({
    label: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = E(e, "modelValue");
    return (o, i) => (l(), a("div", {
      class: w(["sw", { "sw--off": e.disabled }])
    }, [
      f("button", {
        type: "button",
        role: "switch",
        "aria-checked": !!t.value,
        "aria-label": e.label,
        disabled: e.disabled,
        class: w(["sw__track", { on: t.value }]),
        onClick: i[0] || (i[0] = (u) => t.value = !t.value)
      }, [...i[2] || (i[2] = [
        f("span", { class: "sw__knob" }, null, -1)
      ])], 10, Ll),
      e.label || o.$slots.default ? (l(), a("span", {
        key: 0,
        class: "sw__label",
        onClick: i[1] || (i[1] = (u) => !e.disabled && (t.value = !t.value))
      }, [
        V(o.$slots, "default", {}, () => [
          A(y(e.label), 1)
        ], !0)
      ])) : k("", !0)
    ], 2));
  }
}), ze = /* @__PURE__ */ M(Nl, [["__scopeId", "data-v-70940a00"]]), Al = { class: "table" }, Ul = { key: 0 }, Wl = ["aria-selected", "onClick"], Rl = ["title"], Ol = {
  key: 1,
  class: "table__empty"
}, Xl = /* @__PURE__ */ p({
  __name: "DTable",
  props: /* @__PURE__ */ z({
    items: {},
    columns: {},
    empty: { default: "Keine Zeilen" },
    selectable: { type: Boolean, default: !1 }
  }, {
    selected: {},
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = E(e, "selected"), o = e, i = q(() => {
      if (o.columns?.length)
        return o.columns.map(
          (r) => typeof r == "string" ? { key: r, label: r } : { key: r.key, label: r.label ?? r.key }
        );
      const s = o.items?.[0];
      return s ? Object.keys(s).map((r) => ({ key: r, label: r })) : [];
    });
    function u(s, r) {
      const c = s?.[r];
      return c == null ? "" : typeof c == "object" ? JSON.stringify(c) : String(c);
    }
    return (s, r) => (l(), a("div", Al, [
      e.items?.length && i.value.length ? (l(), a("table", Ul, [
        f("thead", null, [
          f("tr", null, [
            (l(!0), a(C, null, H(i.value, (c) => (l(), a("th", {
              key: c.key
            }, y(c.label), 1))), 128))
          ])
        ]),
        f("tbody", null, [
          (l(!0), a(C, null, H(e.items, (c, n) => (l(), a("tr", {
            key: n,
            class: w({ "row--pick": e.selectable, "row--on": e.selectable && c === t.value }),
            "aria-selected": e.selectable ? c === t.value : void 0,
            onClick: (v) => e.selectable && (t.value = c)
          }, [
            (l(!0), a(C, null, H(i.value, (v) => (l(), a("td", {
              key: v.key,
              title: u(c, v.key)
            }, y(u(c, v.key)), 9, Rl))), 128))
          ], 10, Wl))), 128))
        ])
      ])) : (l(), a("p", Ol, y(e.empty), 1))
    ]));
  }
}), Ke = /* @__PURE__ */ M(Xl, [["__scopeId", "data-v-925340b8"]]), jl = ["aria-label"], Fl = ["aria-selected", "tabindex", "disabled", "onClick"], Pl = {
  key: 0,
  class: "tab__count"
}, Gl = /* @__PURE__ */ p({
  __name: "DTabs",
  props: /* @__PURE__ */ z({
    tabs: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = E(e, "modelValue"), o = e;
    function i(u) {
      const s = o.tabs.filter((n) => !n.disabled), r = s.findIndex((n) => n.id === t.value), c = s[(r + u + s.length) % s.length];
      c && (t.value = c.id);
    }
    return (u, s) => (l(), a("div", {
      class: "tabs",
      role: "tablist",
      "aria-label": e.label,
      onKeydown: [
        s[0] || (s[0] = W(T((r) => i(-1), ["prevent"]), ["left"])),
        s[1] || (s[1] = W(T((r) => i(1), ["prevent"]), ["right"]))
      ]
    }, [
      (l(!0), a(C, null, H(e.tabs, (r) => (l(), a("button", {
        key: r.id,
        type: "button",
        role: "tab",
        "aria-selected": t.value === r.id,
        tabindex: t.value === r.id ? 0 : -1,
        disabled: r.disabled,
        class: w(["tab", { on: t.value === r.id }]),
        onClick: (c) => t.value = r.id
      }, [
        A(y(r.label) + " ", 1),
        r.count !== void 0 ? (l(), a("span", Pl, y(r.count), 1)) : k("", !0)
      ], 10, Fl))), 128)),
      V(u.$slots, "actions", {}, void 0, !0)
    ], 40, jl));
  }
}), Ee = /* @__PURE__ */ M(Gl, [["__scopeId", "data-v-f7c65d26"]]), Jl = {
  DButton: ye,
  DCard: ke,
  DCheckbox: $e,
  DChip: we,
  DColorInput: ge,
  DDateInput: xe,
  DDivider: _e,
  DField: ne,
  DFloatingWindow: De,
  DIcon: X,
  DIconPicker: Be,
  DInput: Ve,
  DModal: Ie,
  DRadioGroup: Se,
  DSelect: Ce,
  DSlider: qe,
  DSwitch: ze,
  DTable: Ke,
  DTabs: Ee
}, Zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONTROLS: Jl,
  DButton: ye,
  DCard: ke,
  DCheckbox: $e,
  DChip: we,
  DColorInput: ge,
  DDateInput: xe,
  DDivider: _e,
  DField: ne,
  DFloatingWindow: De,
  DIcon: X,
  DIconPicker: Be,
  DInput: Ve,
  DModal: Ie,
  DRadioGroup: Se,
  DSelect: Ce,
  DSlider: qe,
  DSwitch: ze,
  DTable: Ke,
  DTabs: Ee
}, Symbol.toStringTag, { value: "Module" })), ce = "org.eclipse.daanse.board.app.ui.vue.controls", Ql = "0.0.1-next.1";
async function ta(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${ce}: tsm runtime is not initialized`);
  t.register(ce, Zl, Ql, "ui.vue.controls"), await void 0;
}
async function la(e) {
  await void 0;
}
export {
  Jl as CONTROLS,
  ye as DButton,
  ke as DCard,
  $e as DCheckbox,
  we as DChip,
  ge as DColorInput,
  xe as DDateInput,
  _e as DDivider,
  ne as DField,
  De as DFloatingWindow,
  X as DIcon,
  Be as DIconPicker,
  Ve as DInput,
  Ie as DModal,
  Se as DRadioGroup,
  Ce as DSelect,
  qe as DSlider,
  ze as DSwitch,
  Ke as DTable,
  Ee as DTabs,
  ta as activate,
  la as deactivate
};
