(function(){var i="ui.vue.controls",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".btn[data-v-5b01af26]{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;white-space:nowrap;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-5b01af26]:hover:not(:disabled){border-color:var(--color-outline)}.btn[data-v-5b01af26]:active:not(:disabled){transform:translateY(.5px)}.btn[data-v-5b01af26]:disabled{opacity:.45;cursor:default}.btn[data-v-5b01af26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.btn--sm[data-v-5b01af26]{height:22px;padding:0 9px;font-size:var(--text-xs)}.btn--md[data-v-5b01af26]{height:26px;padding:0 12px}.btn--lg[data-v-5b01af26]{height:32px;padding:0 16px;font-size:var(--text-base)}.btn--block[data-v-5b01af26]{display:flex;width:100%}.btn--primary[data-v-5b01af26]{color:var(--color-onAccent);background-color:var(--color-accent);border-color:var(--color-accent);font-weight:600}.btn--primary[data-v-5b01af26]:hover:not(:disabled){filter:brightness(1.08)}.btn--quiet[data-v-5b01af26]{background-color:transparent;border-color:transparent;color:var(--color-dim)}.btn--quiet[data-v-5b01af26]:hover:not(:disabled){color:var(--color-fg);background-color:var(--color-raised);border-color:var(--color-divider)}.btn--danger[data-v-5b01af26]{color:var(--color-err);border-color:color-mix(in srgb,var(--color-err) 45%,transparent)}.btn--danger[data-v-5b01af26]:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-err) 12%,transparent);border-color:var(--color-err)}.btn--primary[data-v-5b01af26]{position:relative;isolation:isolate}.btn--primary[data-v-5b01af26]:before{content:\"\";position:absolute;inset:-7px;z-index:-1;border-radius:9999px;background-image:linear-gradient(45deg,var(--color-accent),color-mix(in srgb,var(--color-accent) 55%,var(--color-ok)),var(--color-accent));filter:blur(34px);opacity:0;transition:opacity .24s cubic-bezier(.2,.6,.2,1);pointer-events:none}.btn--primary[data-v-5b01af26]:hover:not(:disabled):before{opacity:.6}.btn--primary[data-v-5b01af26]:focus-visible:before{opacity:.35}:root[data-theme=light] .btn--primary[data-v-5b01af26]:before{content:none}@media(prefers-reduced-motion:reduce){.btn--primary[data-v-5b01af26]:before{transition-duration:.01ms}}.btn__spinner[data-v-5b01af26]{width:11px;height:11px;flex:none;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:btn-spin-5b01af26 .7s linear infinite}@keyframes btn-spin-5b01af26{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.btn__spinner[data-v-5b01af26]{animation-duration:2s}}.card[data-v-8c187da1]{display:flex;flex-direction:column;min-width:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.card--interactive[data-v-8c187da1]{cursor:pointer}.card--interactive[data-v-8c187da1]:hover{border-color:var(--color-outline)}.card__head[data-v-8c187da1]{display:flex;align-items:center;gap:8px;flex:none;height:var(--spacing-panelHeader);padding:0 10px;border-bottom:1px solid var(--color-divider)}.card__title[data-v-8c187da1]{margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim)}.card__spacer[data-v-8c187da1]{flex:1 1 auto}.card__body[data-v-8c187da1]{flex:1 1 auto;min-height:0}.card__body--padded[data-v-8c187da1]{padding:10px 12px}.check[data-v-5fb92780]{display:flex;align-items:baseline;gap:7px;margin-bottom:6px}.check--off[data-v-5fb92780]{opacity:.5}.check__box[data-v-5fb92780]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:pointer}.check__box[data-v-5fb92780]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.check__label[data-v-5fb92780]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.check__hint[data-v-5fb92780]{display:block;font-size:var(--text-xs);color:var(--color-dim)}.chip[data-v-30700fa0]{display:inline-flex;align-items:center;gap:4px;padding:1px 7px;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.5;border-radius:var(--radius-xs);white-space:nowrap}.chip--num[data-v-30700fa0]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.chip--neutral[data-v-30700fa0]{color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider)}.chip--accent[data-v-30700fa0]{color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent)}.chip--ok[data-v-30700fa0]{color:var(--color-ok);background-color:color-mix(in srgb,var(--color-ok) 14%,transparent)}.chip--warn[data-v-30700fa0]{color:var(--color-warn);background-color:color-mix(in srgb,var(--color-warn) 14%,transparent)}.chip--err[data-v-30700fa0]{color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 14%,transparent)}.chip__x[data-v-30700fa0]{font-size:9px;color:inherit;background:none;border:0;padding:0;cursor:pointer;opacity:.7}.chip__x[data-v-30700fa0]:hover{opacity:1}.field[data-v-0c4cf022]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-0c4cf022]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-0c4cf022]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-0c4cf022]{width:auto}.field__control[data-v-0c4cf022]{flex:1 1 auto;min-width:0}.field__hint[data-v-0c4cf022]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.row[data-v-0c4cf022]{display:flex;align-items:center;gap:6px}.picker[data-v-0c4cf022]{width:26px;height:26px;flex:none;padding:2px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.picker[data-v-0c4cf022]:focus-visible,.hex[data-v-0c4cf022]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.hex[data-v-0c4cf022]{flex:1 1 auto;min-width:0;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.picker[data-v-0c4cf022]:disabled,.hex[data-v-0c4cf022]:disabled{opacity:.5}.field[data-v-3afdb10c]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3afdb10c]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3afdb10c]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3afdb10c]{width:auto}.field__required[data-v-3afdb10c]{color:var(--color-err)}.field__control[data-v-3afdb10c]{flex:1 1 auto;min-width:0}.field__hint[data-v-3afdb10c],.field__error[data-v-3afdb10c]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.field__error[data-v-3afdb10c]{color:var(--color-err)}.input[data-v-3afdb10c]{width:100%;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.input--invalid[data-v-3afdb10c]{border-color:var(--color-err)}.input[data-v-3afdb10c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.input[data-v-3afdb10c]:disabled{opacity:.5}.rule[data-v-521e9319]{height:1px;margin:12px 0;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]{display:flex;align-items:center;gap:8px;height:auto;background:none;margin:14px 0 7px}.rule--labelled[data-v-521e9319]:before,.rule--labelled[data-v-521e9319]:after{content:\"\";height:1px;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]:before{width:10px;flex:none}.rule--labelled[data-v-521e9319]:after{flex:1 1 auto}.rule__label[data-v-521e9319]{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.field[data-v-1a8ee938]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-1a8ee938]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-1a8ee938]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-1a8ee938]{width:auto}.field__required[data-v-1a8ee938]{color:var(--color-err)}.field__control[data-v-1a8ee938]{flex:1 1 auto;min-width:0}.field__hint[data-v-1a8ee938],.field__error[data-v-1a8ee938]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-1a8ee938]{color:var(--color-err)}.fw[data-v-b6b4a10b]{position:absolute;display:flex;flex-direction:column;overflow:hidden;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.fw--docked[data-v-b6b4a10b]{border-radius:0}.fw--docked.fw--left[data-v-b6b4a10b]{border-left:0}.fw--docked.fw--right[data-v-b6b4a10b]{border-right:0}.fw--docked .fw__grip[data-v-b6b4a10b]{cursor:ew-resize}.fw__bar[data-v-b6b4a10b]{display:flex;align-items:center;gap:2px;flex:none;height:28px;padding:0 4px 0 10px;border-bottom:1px solid var(--color-divider);cursor:grab;touch-action:none;user-select:none}.fw__bar[data-v-b6b4a10b]:active{cursor:grabbing}.fw__bar[data-v-b6b4a10b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.fw__title[data-v-b6b4a10b]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.fw__act[data-v-b6b4a10b]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.fw__act[data-v-b6b4a10b]:hover{color:var(--color-fg);background-color:var(--color-raised)}.fw__act[data-v-b6b4a10b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.fw__body[data-v-b6b4a10b]{flex:1;min-height:0;overflow:auto}.fw__grip[data-v-b6b4a10b]{position:absolute;right:0;bottom:0;width:14px;height:14px;cursor:nwse-resize;touch-action:none}.fw__grip[data-v-b6b4a10b]:after{content:\"\";position:absolute;right:3px;bottom:3px;width:6px;height:6px;border-right:2px solid var(--color-outline, #3a4756);border-bottom:2px solid var(--color-outline, #3a4756)}.icon[data-v-15dffeec]{font-family:Material Icons,sans-serif;font-style:normal;font-weight:400;line-height:1;letter-spacing:normal;white-space:nowrap;direction:ltr;display:inline-block;vertical-align:middle;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-feature-settings:\"liga\";color:inherit}.icon--xs[data-v-15dffeec]{font-size:12px}.icon--sm[data-v-15dffeec]{font-size:14px}.icon--md[data-v-15dffeec]{font-size:16px}.icon--lg[data-v-15dffeec]{font-size:20px}.field[data-v-a5fd75e2]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-a5fd75e2]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-a5fd75e2]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-a5fd75e2]{width:auto}.field__required[data-v-a5fd75e2]{color:var(--color-err)}.field__control[data-v-a5fd75e2]{flex:1 1 auto;min-width:0}.field__hint[data-v-a5fd75e2],.field__error[data-v-a5fd75e2]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-a5fd75e2]{color:var(--color-err)}.shell[data-v-a5fd75e2]{display:flex;align-items:center;gap:6px;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-a5fd75e2]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-a5fd75e2]{border-color:var(--color-err)}.shell--off[data-v-a5fd75e2]{opacity:.5}.shell--sm[data-v-a5fd75e2]{height:22px}.shell--md[data-v-a5fd75e2]{height:26px}.shell--lg[data-v-a5fd75e2]{height:32px}.shell[data-v-a5fd75e2]:has(.input--area){height:auto;padding:5px 8px}.input[data-v-a5fd75e2]{flex:1 1 auto;min-width:0;padding:0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none}.shell--lg .input[data-v-a5fd75e2]{font-size:var(--text-base)}.input--num[data-v-a5fd75e2]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.input--area[data-v-a5fd75e2]{resize:vertical;line-height:1.45}.input[data-v-a5fd75e2]::placeholder{color:var(--color-dim);opacity:.75}.suffix[data-v-a5fd75e2]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.scrim[data-v-03f9e875]{position:fixed;inset:0;z-index:40000;display:grid;place-items:center;padding:24px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(4px)}.dialog[data-v-03f9e875]{display:flex;flex-direction:column;max-height:100%;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.dialog--sm[data-v-03f9e875]{width:380px}.dialog--md[data-v-03f9e875]{width:560px}.dialog--lg[data-v-03f9e875]{width:840px}.dialog__head[data-v-03f9e875]{display:flex;align-items:center;gap:10px;flex:none;padding:9px 12px;border-bottom:1px solid var(--color-divider)}.dialog__title[data-v-03f9e875]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.dialog__close[data-v-03f9e875]{margin-left:auto;width:22px;height:22px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.dialog__close[data-v-03f9e875]:hover{color:var(--color-fg);background-color:var(--color-raised)}.dialog__close[data-v-03f9e875]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.dialog__body[data-v-03f9e875]{flex:1 1 auto;min-height:0;padding:14px 12px;overflow-y:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.dialog__foot[data-v-03f9e875]{display:flex;align-items:center;justify-content:flex-end;gap:7px;flex:none;padding:9px 12px;border-top:1px solid var(--color-divider)}.field[data-v-da414860]{display:flex;align-items:flex-start;gap:10px;margin-bottom:7px}.field--stacked[data-v-da414860]{flex-direction:column;gap:4px}.field__label[data-v-da414860]{flex:none;width:120px;padding-top:2px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-da414860]{width:auto}.field__required[data-v-da414860]{color:var(--color-err)}.field__control[data-v-da414860]{flex:1 1 auto;min-width:0}.choices[data-v-da414860]{display:flex;flex-direction:column;gap:4px}.choices--inline[data-v-da414860]{flex-direction:row;flex-wrap:wrap;gap:14px}.choice[data-v-da414860]{display:flex;align-items:baseline;gap:7px;cursor:pointer}.choice--off[data-v-da414860]{opacity:.5;cursor:default}.choice__dot[data-v-da414860]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:inherit}.choice__dot[data-v-da414860]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.choice__label[data-v-da414860]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.field__error[data-v-da414860]{margin:3px 0 0;font-size:var(--text-xs);color:var(--color-err)}.field__hint[data-v-da414860]{margin:3px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.field[data-v-b652f899]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-b652f899]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-b652f899]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-b652f899]{width:auto}.field__required[data-v-b652f899]{color:var(--color-err)}.field__control[data-v-b652f899]{flex:1 1 auto;min-width:0}.field__hint[data-v-b652f899],.field__error[data-v-b652f899]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-b652f899]{color:var(--color-err)}.shell[data-v-b652f899]{position:relative;display:flex;align-items:center;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-b652f899]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-b652f899]{border-color:var(--color-err)}.shell--off[data-v-b652f899]{opacity:.5}.shell--sm[data-v-b652f899]{height:22px}.shell--md[data-v-b652f899]{height:26px}.shell--lg[data-v-b652f899]{height:32px}.select[data-v-b652f899]{flex:1 1 auto;min-width:0;height:100%;padding:0 14px 0 0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none;appearance:none;cursor:pointer}.shell--lg .select[data-v-b652f899]{font-size:var(--text-base)}.select option[data-v-b652f899]{color:var(--color-fg);background-color:var(--color-pane)}.select optgroup[data-v-b652f899]{color:var(--color-dim);background-color:var(--color-pane);font-weight:600;font-style:normal}.select optgroup option[data-v-b652f899]{color:var(--color-fg)}.chevron[data-v-b652f899]{position:absolute;right:7px;font-size:9px;color:var(--color-dim);pointer-events:none}.field[data-v-ed7d97ce]{display:flex;align-items:center;gap:10px;margin-bottom:7px}.field--stacked[data-v-ed7d97ce]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-ed7d97ce]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-ed7d97ce]{width:auto}.field__control[data-v-ed7d97ce]{flex:1 1 auto;min-width:0}.row[data-v-ed7d97ce]{display:flex;align-items:center;gap:8px}.range[data-v-ed7d97ce]{flex:1 1 auto;min-width:0;accent-color:var(--color-accent);cursor:pointer}.range[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.num[data-v-ed7d97ce]{width:62px;flex:none;height:22px;padding:0 6px;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.num[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.suffix[data-v-ed7d97ce]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.range[data-v-ed7d97ce]:disabled,.num[data-v-ed7d97ce]:disabled{opacity:.5}.sw[data-v-70940a00]{display:flex;align-items:center;gap:8px;margin-bottom:6px}.sw--off[data-v-70940a00]{opacity:.5}.sw__track[data-v-70940a00]{position:relative;width:28px;height:15px;flex:none;padding:0;background-color:var(--color-outline);border:0;border-radius:8px;cursor:pointer}.sw__track.on[data-v-70940a00]{background-color:var(--color-accent)}.sw__track[data-v-70940a00]:disabled{cursor:default}.sw__track[data-v-70940a00]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.sw__knob[data-v-70940a00]{position:absolute;top:2px;left:2px;width:11px;height:11px;border-radius:50%;background-color:var(--color-pane);transition:left .12s ease}.sw__track.on .sw__knob[data-v-70940a00]{left:15px}@media(prefers-reduced-motion:reduce){.sw__knob[data-v-70940a00]{transition:none}}.sw__label[data-v-70940a00]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.tabs[data-v-f7c65d26]{display:flex;flex-wrap:wrap;align-items:stretch;gap:1px;min-height:var(--spacing-panelHeader);padding:0 6px;border-bottom:1px solid var(--color-divider)}.tab[data-v-f7c65d26]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 10px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab[data-v-f7c65d26]:hover:not(:disabled){color:var(--color-fg)}.tab[data-v-f7c65d26]:disabled{opacity:.45;cursor:default}.tab.on[data-v-f7c65d26]{color:var(--color-fg);font-weight:600}.tab.on[data-v-f7c65d26]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab[data-v-f7c65d26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.tab__count[data-v-f7c65d26]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}\n";})();
import { defineComponent as g, createElementBlock as i, openBlock as l, normalizeClass as k, createCommentVNode as h, renderSlot as M, createElementVNode as y, toDisplayString as b, mergeModels as I, useModel as C, useId as L, withDirectives as K, unref as D, vModelCheckbox as He, createTextVNode as Y, computed as z, vModelText as P, vModelDynamic as ne, reactive as de, ref as J, watch as oe, onMounted as se, onBeforeUnmount as re, normalizeStyle as ue, withKeys as T, withModifiers as q, createBlock as Ye, Teleport as Ee, Fragment as W, renderList as U, vModelRadio as We, vModelSelect as Le } from "vue";
const Ne = ["type", "disabled", "aria-busy"], Te = {
  key: 0,
  class: "btn__spinner",
  "aria-hidden": "true"
}, Ue = /* @__PURE__ */ g({
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
      class: k([
        "btn",
        `btn--${e.intent}`,
        `btn--${e.size}`,
        { "btn--block": e.block, "btn--busy": e.busy }
      ]),
      disabled: e.disabled || e.busy,
      "aria-busy": e.busy || void 0
    }, [
      e.busy ? (l(), i("span", Te)) : h("", !0),
      M(t.$slots, "default", {}, void 0, !0)
    ], 10, Ne));
  }
}), x = (e, t) => {
  const d = e.__vccOpts || e;
  for (const [o, f] of t)
    d[o] = f;
  return d;
}, ce = /* @__PURE__ */ x(Ue, [["__scopeId", "data-v-5b01af26"]]), Xe = {
  key: 0,
  class: "card__head"
}, _e = { class: "card__title" }, Ae = /* @__PURE__ */ g({
  __name: "DCard",
  props: {
    title: {},
    padded: { type: Boolean, default: !0 },
    interactive: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, d) => (l(), i("section", {
      class: k(["card", { "card--interactive": e.interactive }])
    }, [
      e.title || t.$slots.header ? (l(), i("header", Xe, [
        M(t.$slots, "header", {}, () => [
          y("h3", _e, b(e.title), 1)
        ], !0),
        d[0] || (d[0] = y("span", { class: "card__spacer" }, null, -1)),
        M(t.$slots, "actions", {}, void 0, !0)
      ])) : h("", !0),
      y("div", {
        class: k(["card__body", { "card__body--padded": e.padded }])
      }, [
        M(t.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), fe = /* @__PURE__ */ x(Ae, [["__scopeId", "data-v-8c187da1"]]), Fe = ["id", "disabled"], Oe = ["for"], Re = {
  key: 0,
  class: "check__hint"
}, Pe = /* @__PURE__ */ g({
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
    const t = C(e, "modelValue"), d = L();
    return (o, f) => (l(), i("div", {
      class: k(["check", { "check--off": e.disabled }])
    }, [
      K(y("input", {
        id: D(d),
        "onUpdate:modelValue": f[0] || (f[0] = (s) => t.value = s),
        class: "check__box",
        type: "checkbox",
        disabled: e.disabled
      }, null, 8, Fe), [
        [He, t.value]
      ]),
      y("label", {
        for: D(d),
        class: "check__label"
      }, [
        M(o.$slots, "default", {}, () => [
          Y(b(e.label), 1)
        ], !0),
        e.hint ? (l(), i("span", Re, b(e.hint), 1)) : h("", !0)
      ], 8, Oe)
    ], 2));
  }
}), ve = /* @__PURE__ */ x(Pe, [["__scopeId", "data-v-5fb92780"]]), je = /* @__PURE__ */ g({
  __name: "DChip",
  props: {
    tone: { default: "neutral" },
    numeric: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(e) {
    return (t, d) => (l(), i("span", {
      class: k(["chip", `chip--${e.tone}`, { "chip--num": e.numeric }])
    }, [
      M(t.$slots, "default", {}, void 0, !0),
      e.removable ? (l(), i("button", {
        key: 0,
        type: "button",
        class: "chip__x",
        "aria-label": "Entfernen",
        onClick: d[0] || (d[0] = (o) => t.$emit("remove"))
      }, " ✕ ")) : h("", !0)
    ], 2));
  }
}), me = /* @__PURE__ */ x(je, [["__scopeId", "data-v-30700fa0"]]), Ge = ["for"], Je = { class: "field__control" }, Ze = { class: "row" }, pe = ["id", "value", "disabled", "aria-label"], Qe = ["disabled", "aria-label"], et = {
  key: 0,
  class: "field__hint"
}, tt = /* @__PURE__ */ g({
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
    const t = C(e, "modelValue"), d = L(), o = z(() => {
      const f = (t.value ?? "").trim();
      return /^#[0-9a-f]{6}$/i.test(f) ? f : /^#[0-9a-f]{3}$/i.test(f) ? "#" + [...f.slice(1)].map((s) => s + s).join("") : "#000000";
    });
    return (f, s) => (l(), i("div", {
      class: k(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: D(d)
      }, b(e.label), 9, Ge)) : h("", !0),
      y("div", Je, [
        y("div", Ze, [
          y("input", {
            id: D(d),
            class: "picker",
            type: "color",
            value: o.value,
            disabled: e.disabled,
            "aria-label": e.label ?? "Farbe",
            onInput: s[0] || (s[0] = (u) => t.value = u.target.value)
          }, null, 40, pe),
          K(y("input", {
            "onUpdate:modelValue": s[1] || (s[1] = (u) => t.value = u),
            class: "hex",
            type: "text",
            spellcheck: "false",
            disabled: e.disabled,
            "aria-label": e.label ? `${e.label} als Hexwert` : "Farbe als Hexwert"
          }, null, 8, Qe), [
            [P, t.value]
          ])
        ]),
        e.hint ? (l(), i("p", et, b(e.hint), 1)) : h("", !0)
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
}, st = /* @__PURE__ */ g({
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
    const t = C(e, "modelValue"), d = L(), o = { date: "date", time: "time", datetime: "datetime-local" };
    return (f, s) => (l(), i("div", {
      class: k(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: D(d)
      }, [
        Y(b(e.label) + " ", 1),
        e.required ? (l(), i("span", at, "*")) : h("", !0)
      ], 8, lt)) : h("", !0),
      y("div", it, [
        K(y("input", {
          id: D(d),
          "onUpdate:modelValue": s[0] || (s[0] = (u) => t.value = u),
          class: k(["input", { "input--invalid": !!e.error }]),
          type: o[e.mode],
          disabled: e.disabled,
          required: e.required,
          min: e.min,
          max: e.max,
          "aria-invalid": !!e.error || void 0
        }, null, 10, nt), [
          [ne, t.value]
        ]),
        e.error ? (l(), i("p", dt, b(e.error), 1)) : e.hint ? (l(), i("p", ot, b(e.hint), 1)) : h("", !0)
      ])
    ], 2));
  }
}), he = /* @__PURE__ */ x(st, [["__scopeId", "data-v-3afdb10c"]]), rt = {
  key: 0,
  class: "rule__label"
}, ut = /* @__PURE__ */ g({
  __name: "DDivider",
  props: {
    label: {}
  },
  setup(e) {
    return (t, d) => (l(), i("div", {
      class: k(["rule", { "rule--labelled": e.label }]),
      role: "separator"
    }, [
      e.label ? (l(), i("span", rt, b(e.label), 1)) : h("", !0)
    ], 2));
  }
}), ye = /* @__PURE__ */ x(ut, [["__scopeId", "data-v-521e9319"]]), ct = ["for"], ft = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, vt = { class: "field__control" }, mt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, bt = {
  key: 1,
  class: "field__hint"
}, ht = /* @__PURE__ */ g({
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
      class: k(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: t.$props.for
      }, [
        Y(b(e.label) + " ", 1),
        e.required ? (l(), i("span", ft, "*")) : h("", !0)
      ], 8, ct)) : h("", !0),
      y("div", vt, [
        M(t.$slots, "default", {}, void 0, !0),
        e.error ? (l(), i("p", mt, b(e.error), 1)) : e.hint ? (l(), i("p", bt, b(e.hint), 1)) : h("", !0)
      ])
    ], 2));
  }
}), ke = /* @__PURE__ */ x(ht, [["__scopeId", "data-v-1a8ee938"]]), X = de(/* @__PURE__ */ new Map());
let yt = 0;
const $e = de({ left: 240, right: 240 });
function te(e) {
  return $e[e];
}
function Z(e, t) {
  $e[e] = t;
}
function le(e, t, d, o) {
  const f = X.get(e);
  X.set(e, { side: t, want: d, min: o, seq: f?.seq ?? yt++ });
}
function ae(e) {
  X.delete(e);
}
function we(e) {
  return [...X.entries()].filter(([, t]) => t.side === e).sort((t, d) => t[1].seq - d[1].seq);
}
function kt(e, t) {
  const d = X.get(e);
  if (!d) return null;
  const o = we(d.side);
  if (!o.length) return null;
  const f = o.reduce((m, [, $]) => m + $.min, 0), s = f > t && f > 0 ? t / f : 1, u = Math.max(0, t - f * s), r = o.reduce((m, [, $]) => m + Math.max(1, $.want), 0);
  let a = 0;
  for (let m = 0; m < o.length; m++) {
    const [$, S] = o[m], H = m === o.length - 1 ? Math.max(0, t - a) : Math.round(S.min * s + u * Math.max(1, S.want) / r);
    if ($ === e) return { y: a, h: H };
    a += H;
  }
  return null;
}
function $t(e) {
  return we(e).length;
}
const wt = ["aria-label"], gt = ["aria-label"], xt = { class: "fw__title" }, Mt = ["aria-label"], Dt = { class: "fw__body" }, Bt = ["aria-label"], R = 24, Vt = /* @__PURE__ */ g({
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
    const o = e, f = d, s = z(() => o.dockable || o.initial?.dock != null), u = { x: 16, y: 16, w: 240, h: 320, dock: null, freeY: 16, freeH: 320 };
    function r() {
      const n = { ...u, ...o.initial };
      if (n.freeY = n.y, n.freeH = n.h, !o.rememberAs) return n;
      try {
        const v = localStorage.getItem(o.rememberAs);
        if (!v) return n;
        const c = JSON.parse(v), w = (V, G) => Number.isFinite(V) ? V : G;
        return {
          x: w(c?.x, n.x),
          y: w(c?.y, n.y),
          w: w(c?.w, n.w),
          h: w(c?.h, n.h),
          dock: c?.dock === "left" || c?.dock === "right" ? c.dock : null,
          freeY: w(c?.freeY, n.y),
          freeH: w(c?.freeH, n.h)
        };
      } catch {
        return n;
      }
    }
    const a = J(r()), m = J();
    function $() {
      if (o.rememberAs)
        try {
          localStorage.setItem(o.rememberAs, JSON.stringify(a.value));
        } catch {
        }
    }
    function S(n) {
      return Math.min(o.maxWidth, Math.max(o.minWidth, n));
    }
    function N() {
      const n = m.value?.offsetParent;
      return {
        width: n?.clientWidth ?? window.innerWidth,
        height: n?.clientHeight ?? window.innerHeight
      };
    }
    const H = z(() => o.rememberAs ?? o.title), E = J({ width: 0, height: 0 });
    function _() {
      const n = a.value.dock;
      if (!n) return;
      const v = kt(H.value, E.value.height);
      if (!v) return;
      const c = te(n);
      a.value = {
        ...a.value,
        w: c,
        x: n === "left" ? 0 : Math.max(0, E.value.width - c),
        y: v.y,
        h: v.h
      };
    }
    oe(
      () => {
        const n = a.value.dock;
        return n ? `${$t(n)}:${te(n)}` : "";
      },
      (n) => {
        n && (E.value = N(), _());
      }
    );
    function A(n, v) {
      const c = a.value;
      E.value = v;
      const w = c.dock ? c.freeY : c.y, V = c.dock ? c.freeH : c.h;
      c.dock || Z(n, S(c.w)), le(H.value, n, V, o.minHeight), a.value = { ...c, dock: n, freeY: w, freeH: V }, _();
    }
    function p() {
      const n = a.value;
      n.dock && (ae(H.value), a.value = { ...n, y: n.freeY, h: n.freeH, dock: null });
    }
    let B = null;
    function Q(n) {
      if (!B) return;
      const v = N();
      if (B.kind === "move") {
        const w = a.value.w, V = Math.min(
          Math.max(0, B.fromX + (n.clientX - B.startX)),
          Math.max(0, v.width - w)
        ), G = Math.min(
          Math.max(0, B.fromY + (n.clientY - B.startY)),
          Math.max(0, v.height - 28)
        );
        s.value && V <= R ? A("left", v) : s.value && V + w >= v.width - R ? A("right", v) : (p(), a.value = { ...a.value, x: V, y: G });
        return;
      }
      const c = S(B.fromW + (n.clientX - B.startX));
      if (a.value.dock) {
        E.value = v, Z(a.value.dock, c), _();
        return;
      }
      a.value = {
        ...a.value,
        w: c,
        h: Math.max(o.minHeight, B.fromH + (n.clientY - B.startY))
      };
    }
    function j() {
      B && $(), B = null, window.removeEventListener("pointermove", Q), window.removeEventListener("pointerup", j), document.body.style.userSelect = "";
    }
    function ee(n) {
      B = n, window.addEventListener("pointermove", Q), window.addEventListener("pointerup", j), document.body.style.userSelect = "none";
    }
    const Ce = (n) => ee({ kind: "move", startX: n.clientX, startY: n.clientY, fromX: a.value.x, fromY: a.value.y }), ze = (n) => ee({ kind: "size", startX: n.clientX, startY: n.clientY, fromW: a.value.w, fromH: a.value.h });
    function F(n, v) {
      const c = N(), w = a.value.w, V = Math.min(Math.max(0, a.value.x + n), Math.max(0, c.width - w));
      s.value && V <= R ? A("left", c) : s.value && V + w >= c.width - R ? A("right", c) : (p(), a.value = {
        ...a.value,
        x: V,
        y: Math.min(Math.max(0, a.value.y + v), Math.max(0, c.height - 28))
      }), $();
    }
    function O() {
      const n = N();
      E.value = n;
      const v = a.value, c = Math.min(S(v.w), n.width);
      if (v.dock) {
        _();
        return;
      }
      const w = Math.min(v.h, n.height);
      a.value = {
        ...v,
        w: c,
        h: w,
        x: Math.min(Math.max(0, v.x), Math.max(0, n.width - c)),
        y: Math.min(Math.max(0, v.y), Math.max(0, n.height - w))
      };
    }
    se(() => {
      if (a.value.dock) {
        const n = N();
        E.value = n, Z(a.value.dock, S(a.value.w)), le(H.value, a.value.dock, a.value.freeH, o.minHeight);
      }
      O(), window.addEventListener("resize", O);
    }), re(() => {
      j(), ae(H.value), window.removeEventListener("resize", O);
    });
    const Ke = z(() => ({
      left: a.value.x + "px",
      top: a.value.y + "px",
      width: a.value.w + "px",
      height: a.value.h + "px",
      zIndex: String(o.layer)
    }));
    return t({ placement: a, keepInView: O }), (n, v) => (l(), i("aside", {
      ref_key: "root",
      ref: m,
      class: k([
        "fw",
        {
          "fw--docked": !!a.value.dock,
          "fw--left": a.value.dock === "left",
          "fw--right": a.value.dock === "right"
        }
      ]),
      style: ue(Ke.value),
      "aria-label": e.title
    }, [
      y("div", {
        class: "fw__bar",
        role: "toolbar",
        tabindex: "0",
        "aria-label": `${e.title} verschieben - mit den Pfeiltasten bewegen`,
        onPointerdown: v[2] || (v[2] = q((c) => Ce(c), ["prevent"])),
        onKeydown: [
          v[3] || (v[3] = T(q((c) => F(-16, 0), ["prevent"]), ["left"])),
          v[4] || (v[4] = T(q((c) => F(16, 0), ["prevent"]), ["right"])),
          v[5] || (v[5] = T(q((c) => F(0, -16), ["prevent"]), ["up"])),
          v[6] || (v[6] = T(q((c) => F(0, 16), ["prevent"]), ["down"]))
        ]
      }, [
        y("span", xt, b(e.title), 1),
        M(n.$slots, "actions", {}, void 0, !0),
        e.closable ? (l(), i("button", {
          key: 0,
          type: "button",
          class: "fw__act",
          title: "Schließen",
          "aria-label": `${e.title} schließen`,
          onPointerdown: v[0] || (v[0] = q(() => {
          }, ["stop"])),
          onClick: v[1] || (v[1] = (c) => f("close"))
        }, " × ", 40, Mt)) : h("", !0)
      ], 40, gt),
      y("div", Dt, [
        M(n.$slots, "default", {}, void 0, !0)
      ]),
      e.resizable ? (l(), i("div", {
        key: 0,
        class: "fw__grip",
        role: "separator",
        "aria-label": `Größe von ${e.title}`,
        title: "Größe ändern",
        onPointerdown: v[7] || (v[7] = q((c) => ze(c), ["prevent"]))
      }, null, 40, Bt)) : h("", !0)
    ], 14, wt));
  }
}), ge = /* @__PURE__ */ x(Vt, [["__scopeId", "data-v-b6b4a10b"]]), It = ["aria-hidden", "aria-label", "role"], St = /* @__PURE__ */ g({
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
      class: k(["icon", `icon--${e.size}`]),
      style: ue(e.tone ? { color: `var(--${e.tone})` } : void 0),
      "aria-hidden": e.decorative ? "true" : void 0,
      "aria-label": e.decorative ? void 0 : e.label ?? e.name,
      role: e.decorative ? void 0 : "img"
    }, b(e.name), 15, It));
  }
}), xe = /* @__PURE__ */ x(St, [["__scopeId", "data-v-15dffeec"]]), qt = ["for"], Ct = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, zt = { class: "field__control" }, Kt = ["id", "rows", "placeholder", "disabled", "readonly", "required", "aria-invalid"], Ht = ["id", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "step", "aria-invalid"], Yt = {
  key: 2,
  class: "suffix"
}, Et = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Wt = {
  key: 1,
  class: "field__hint"
}, Lt = /* @__PURE__ */ g({
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
    const t = C(e, "modelValue"), d = e, o = L(), f = z(() => d.type === "number");
    return (s, u) => (l(), i("div", {
      class: k(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: D(o)
      }, [
        Y(b(e.label) + " ", 1),
        e.required ? (l(), i("span", Ct, "*")) : h("", !0)
      ], 8, qt)) : h("", !0),
      y("div", zt, [
        y("div", {
          class: k(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.rows ? K((l(), i("textarea", {
            key: 0,
            id: D(o),
            "onUpdate:modelValue": u[0] || (u[0] = (r) => t.value = r),
            class: "input input--area",
            rows: e.rows,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, null, 8, Kt)), [
            [P, t.value]
          ]) : K((l(), i("input", {
            key: 1,
            id: D(o),
            "onUpdate:modelValue": u[1] || (u[1] = (r) => t.value = r),
            class: k(["input", { "input--num": f.value }]),
            type: e.type,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            min: e.min,
            max: e.max,
            step: e.step,
            "aria-invalid": !!e.error || void 0
          }, null, 10, Ht)), [
            [ne, t.value]
          ]),
          e.suffix ? (l(), i("span", Yt, b(e.suffix), 1)) : h("", !0)
        ], 2),
        e.error ? (l(), i("p", Et, b(e.error), 1)) : e.hint ? (l(), i("p", Wt, b(e.hint), 1)) : h("", !0)
      ])
    ], 2));
  }
}), Me = /* @__PURE__ */ x(Lt, [["__scopeId", "data-v-a5fd75e2"]]), Nt = ["aria-label"], Tt = {
  key: 0,
  class: "dialog__head"
}, Ut = { class: "dialog__title" }, Xt = { class: "dialog__body" }, _t = {
  key: 1,
  class: "dialog__foot"
}, At = /* @__PURE__ */ g({
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
    const d = C(e, "modelValue"), o = e, f = t;
    function s() {
      o.persistent || (d.value = !1, f("cancel"));
    }
    function u(r) {
      r.key === "Escape" && d.value && s();
    }
    return oe(d, (r) => {
      document.body.style.overflow = r ? "hidden" : "";
    }), se(() => window.addEventListener("keydown", u)), re(() => {
      window.removeEventListener("keydown", u), document.body.style.overflow = "";
    }), (r, a) => (l(), Ye(Ee, { to: "body" }, [
      d.value ? (l(), i("div", {
        key: 0,
        class: "scrim",
        onClick: q(s, ["self"])
      }, [
        y("div", {
          class: k(["dialog", `dialog--${e.size}`]),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title
        }, [
          e.title || r.$slots.header ? (l(), i("header", Tt, [
            M(r.$slots, "header", {}, () => [
              y("h2", Ut, b(e.title), 1)
            ], !0),
            e.persistent ? h("", !0) : (l(), i("button", {
              key: 0,
              type: "button",
              class: "dialog__close",
              "aria-label": "Schließen",
              onClick: s
            }, " ✕ "))
          ])) : h("", !0),
          y("div", Xt, [
            M(r.$slots, "default", {}, void 0, !0)
          ]),
          r.$slots.actions ? (l(), i("footer", _t, [
            M(r.$slots, "actions", {}, void 0, !0)
          ])) : h("", !0)
        ], 10, Nt)
      ])) : h("", !0)
    ]));
  }
}), De = /* @__PURE__ */ x(At, [["__scopeId", "data-v-03f9e875"]]), Ft = {
  key: 0,
  class: "field__label"
}, Ot = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Rt = { class: "field__control" }, Pt = ["aria-label"], jt = ["name", "value", "disabled", "required"], Gt = { class: "choice__label" }, Jt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Zt = {
  key: 1,
  class: "field__hint"
}, pt = /* @__PURE__ */ g({
  __name: "DRadioGroup",
  props: /* @__PURE__ */ I({
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
    const t = C(e, "modelValue"), d = e, o = L(), f = z(
      () => (d.options ?? []).map((s) => {
        if (s === null || typeof s != "object")
          return { value: s, label: String(s) };
        const u = s, r = d.valueKey in u ? u[d.valueKey] : u, a = d.labelKey in u ? u[d.labelKey] : r;
        return { value: r, label: String(a ?? "") };
      })
    );
    return (s, u) => (l(), i("div", {
      class: k(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), i("span", Ft, [
        Y(b(e.label) + " ", 1),
        e.required ? (l(), i("span", Ot, "*")) : h("", !0)
      ])) : h("", !0),
      y("div", Rt, [
        y("div", {
          class: k(["choices", { "choices--inline": e.inline }]),
          role: "radiogroup",
          "aria-label": e.label
        }, [
          (l(!0), i(W, null, U(f.value, (r, a) => (l(), i("label", {
            key: a,
            class: k(["choice", { "choice--off": e.disabled }])
          }, [
            K(y("input", {
              "onUpdate:modelValue": u[0] || (u[0] = (m) => t.value = m),
              class: "choice__dot",
              type: "radio",
              name: D(o),
              value: r.value,
              disabled: e.disabled,
              required: e.required
            }, null, 8, jt), [
              [We, t.value]
            ]),
            y("span", Gt, b(r.label), 1)
          ], 2))), 128))
        ], 10, Pt),
        e.error ? (l(), i("p", Jt, b(e.error), 1)) : e.hint ? (l(), i("p", Zt, b(e.hint), 1)) : h("", !0)
      ])
    ], 2));
  }
}), Be = /* @__PURE__ */ x(pt, [["__scopeId", "data-v-da414860"]]), Qt = ["for"], el = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, tl = { class: "field__control" }, ll = ["id", "disabled", "required", "aria-invalid"], al = {
  key: 0,
  value: ""
}, il = ["value"], nl = ["label"], dl = ["value"], ol = ["value"], sl = {
  key: 0,
  class: "field__error",
  role: "alert"
}, rl = {
  key: 1,
  class: "field__hint"
}, ul = /* @__PURE__ */ g({
  __name: "DSelect",
  props: /* @__PURE__ */ I({
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
    stacked: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = C(e, "modelValue"), d = e, o = L(), f = z(
      () => (d.options ?? []).map((r) => {
        if (r === null || typeof r != "object")
          return { value: r, label: String(r) };
        const a = r, m = d.valueKey in a ? a[d.valueKey] : a, $ = d.labelKey in a ? a[d.labelKey] : m, S = d.groupKey ? a[d.groupKey] : void 0;
        return { value: m, label: String($ ?? ""), group: S === void 0 ? void 0 : String(S) };
      })
    ), s = z(() => {
      const r = /* @__PURE__ */ new Map(), a = [];
      return f.value.forEach((m, $) => {
        if (!m.group) {
          a.push({ index: $, label: m.label });
          return;
        }
        r.has(m.group) || r.set(m.group, []), r.get(m.group).push({ index: $, label: m.label });
      }), { loose: a, headed: [...r].map(([m, $]) => ({ label: m, options: $ })) };
    }), u = z({
      get() {
        const r = f.value.findIndex((a) => a.value === t.value);
        return r >= 0 ? String(r) : "";
      },
      set(r) {
        t.value = r === "" ? void 0 : f.value[Number(r)]?.value;
      }
    });
    return (r, a) => (l(), i("div", {
      class: k(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: D(o)
      }, [
        Y(b(e.label) + " ", 1),
        e.required ? (l(), i("span", el, "*")) : h("", !0)
      ], 8, Qt)) : h("", !0),
      y("div", tl, [
        y("div", {
          class: k(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          K(y("select", {
            id: D(o),
            "onUpdate:modelValue": a[0] || (a[0] = (m) => u.value = m),
            class: "select",
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            e.clearable || t.value === void 0 ? (l(), i("option", al, b(e.placeholder ?? "—"), 1)) : h("", !0),
            e.groupKey ? (l(), i(W, { key: 1 }, [
              (l(!0), i(W, null, U(s.value.loose, (m) => (l(), i("option", {
                key: m.index,
                value: String(m.index)
              }, b(m.label), 9, il))), 128)),
              (l(!0), i(W, null, U(s.value.headed, (m) => (l(), i("optgroup", {
                key: m.label,
                label: m.label
              }, [
                (l(!0), i(W, null, U(m.options, ($) => (l(), i("option", {
                  key: $.index,
                  value: String($.index)
                }, b($.label), 9, dl))), 128))
              ], 8, nl))), 128))
            ], 64)) : (l(!0), i(W, { key: 2 }, U(f.value, (m, $) => (l(), i("option", {
              key: $,
              value: String($)
            }, b(m.label), 9, ol))), 128))
          ], 8, ll), [
            [Le, u.value]
          ]),
          a[1] || (a[1] = y("span", {
            class: "chevron",
            "aria-hidden": "true"
          }, "▾", -1))
        ], 2),
        e.error ? (l(), i("p", sl, b(e.error), 1)) : e.hint ? (l(), i("p", rl, b(e.hint), 1)) : h("", !0)
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ x(ul, [["__scopeId", "data-v-b652f899"]]), cl = ["for"], fl = { class: "field__control row" }, vl = ["id", "min", "max", "step", "disabled"], ml = ["min", "max", "step", "disabled", "aria-label"], bl = {
  key: 0,
  class: "suffix"
}, hl = /* @__PURE__ */ g({
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
    const t = C(e, "modelValue"), d = L();
    return (o, f) => (l(), i("div", {
      class: k(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (l(), i("label", {
        key: 0,
        class: "field__label",
        for: D(d)
      }, b(e.label), 9, cl)) : h("", !0),
      y("div", fl, [
        K(y("input", {
          id: D(d),
          "onUpdate:modelValue": f[0] || (f[0] = (s) => t.value = s),
          class: "range",
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled
        }, null, 8, vl), [
          [
            P,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        K(y("input", {
          "onUpdate:modelValue": f[1] || (f[1] = (s) => t.value = s),
          class: "num",
          type: "number",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label ? `${e.label} als Zahl` : "Wert"
        }, null, 8, ml), [
          [
            P,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        e.suffix ? (l(), i("span", bl, b(e.suffix), 1)) : h("", !0)
      ])
    ], 2));
  }
}), Ie = /* @__PURE__ */ x(hl, [["__scopeId", "data-v-ed7d97ce"]]), yl = ["aria-checked", "aria-label", "disabled"], kl = /* @__PURE__ */ g({
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
    const t = C(e, "modelValue");
    return (d, o) => (l(), i("div", {
      class: k(["sw", { "sw--off": e.disabled }])
    }, [
      y("button", {
        type: "button",
        role: "switch",
        "aria-checked": !!t.value,
        "aria-label": e.label,
        disabled: e.disabled,
        class: k(["sw__track", { on: t.value }]),
        onClick: o[0] || (o[0] = (f) => t.value = !t.value)
      }, [...o[2] || (o[2] = [
        y("span", { class: "sw__knob" }, null, -1)
      ])], 10, yl),
      e.label || d.$slots.default ? (l(), i("span", {
        key: 0,
        class: "sw__label",
        onClick: o[1] || (o[1] = (f) => !e.disabled && (t.value = !t.value))
      }, [
        M(d.$slots, "default", {}, () => [
          Y(b(e.label), 1)
        ], !0)
      ])) : h("", !0)
    ], 2));
  }
}), Se = /* @__PURE__ */ x(kl, [["__scopeId", "data-v-70940a00"]]), $l = ["aria-label"], wl = ["aria-selected", "tabindex", "disabled", "onClick"], gl = {
  key: 0,
  class: "tab__count"
}, xl = /* @__PURE__ */ g({
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
    const t = C(e, "modelValue"), d = e;
    function o(f) {
      const s = d.tabs.filter((a) => !a.disabled), u = s.findIndex((a) => a.id === t.value), r = s[(u + f + s.length) % s.length];
      r && (t.value = r.id);
    }
    return (f, s) => (l(), i("div", {
      class: "tabs",
      role: "tablist",
      "aria-label": e.label,
      onKeydown: [
        s[0] || (s[0] = T(q((u) => o(-1), ["prevent"]), ["left"])),
        s[1] || (s[1] = T(q((u) => o(1), ["prevent"]), ["right"]))
      ]
    }, [
      (l(!0), i(W, null, U(e.tabs, (u) => (l(), i("button", {
        key: u.id,
        type: "button",
        role: "tab",
        "aria-selected": t.value === u.id,
        tabindex: t.value === u.id ? 0 : -1,
        disabled: u.disabled,
        class: k(["tab", { on: t.value === u.id }]),
        onClick: (r) => t.value = u.id
      }, [
        Y(b(u.label) + " ", 1),
        u.count !== void 0 ? (l(), i("span", gl, b(u.count), 1)) : h("", !0)
      ], 10, wl))), 128)),
      M(f.$slots, "actions", {}, void 0, !0)
    ], 40, $l));
  }
}), qe = /* @__PURE__ */ x(xl, [["__scopeId", "data-v-f7c65d26"]]), Ml = {
  DButton: ce,
  DCard: fe,
  DCheckbox: ve,
  DChip: me,
  DColorInput: be,
  DDateInput: he,
  DDivider: ye,
  DField: ke,
  DFloatingWindow: ge,
  DIcon: xe,
  DInput: Me,
  DModal: De,
  DRadioGroup: Be,
  DSelect: Ve,
  DSlider: Ie,
  DSwitch: Se,
  DTabs: qe
}, Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONTROLS: Ml,
  DButton: ce,
  DCard: fe,
  DCheckbox: ve,
  DChip: me,
  DColorInput: be,
  DDateInput: he,
  DDivider: ye,
  DField: ke,
  DFloatingWindow: ge,
  DIcon: xe,
  DInput: Me,
  DModal: De,
  DRadioGroup: Be,
  DSelect: Ve,
  DSlider: Ie,
  DSwitch: Se,
  DTabs: qe
}, Symbol.toStringTag, { value: "Module" })), ie = "org.eclipse.daanse.board.app.ui.vue.controls", Bl = "0.0.1-next.1";
async function Il(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${ie}: tsm runtime is not initialized`);
  t.register(ie, Dl, Bl, "ui.vue.controls"), await void 0;
}
async function Sl(e) {
  await void 0;
}
export {
  Ml as CONTROLS,
  ce as DButton,
  fe as DCard,
  ve as DCheckbox,
  me as DChip,
  be as DColorInput,
  he as DDateInput,
  ye as DDivider,
  ke as DField,
  ge as DFloatingWindow,
  xe as DIcon,
  Me as DInput,
  De as DModal,
  Be as DRadioGroup,
  Ve as DSelect,
  Ie as DSlider,
  Se as DSwitch,
  qe as DTabs,
  Il as activate,
  Sl as deactivate
};
