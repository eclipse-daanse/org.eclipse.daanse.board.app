(function(){var i="ui.vue.controls",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".btn[data-v-5b01af26]{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;white-space:nowrap;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-5b01af26]:hover:not(:disabled){border-color:var(--color-outline)}.btn[data-v-5b01af26]:active:not(:disabled){transform:translateY(.5px)}.btn[data-v-5b01af26]:disabled{opacity:.45;cursor:default}.btn[data-v-5b01af26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.btn--sm[data-v-5b01af26]{height:22px;padding:0 9px;font-size:var(--text-xs)}.btn--md[data-v-5b01af26]{height:26px;padding:0 12px}.btn--lg[data-v-5b01af26]{height:32px;padding:0 16px;font-size:var(--text-base)}.btn--block[data-v-5b01af26]{display:flex;width:100%}.btn--primary[data-v-5b01af26]{color:var(--color-onAccent);background-color:var(--color-accent);border-color:var(--color-accent);font-weight:600}.btn--primary[data-v-5b01af26]:hover:not(:disabled){filter:brightness(1.08)}.btn--quiet[data-v-5b01af26]{background-color:transparent;border-color:transparent;color:var(--color-dim)}.btn--quiet[data-v-5b01af26]:hover:not(:disabled){color:var(--color-fg);background-color:var(--color-raised);border-color:var(--color-divider)}.btn--danger[data-v-5b01af26]{color:var(--color-err);border-color:color-mix(in srgb,var(--color-err) 45%,transparent)}.btn--danger[data-v-5b01af26]:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-err) 12%,transparent);border-color:var(--color-err)}.btn--primary[data-v-5b01af26]{position:relative;isolation:isolate}.btn--primary[data-v-5b01af26]:before{content:\"\";position:absolute;inset:-7px;z-index:-1;border-radius:9999px;background-image:linear-gradient(45deg,var(--color-accent),color-mix(in srgb,var(--color-accent) 55%,var(--color-ok)),var(--color-accent));filter:blur(34px);opacity:0;transition:opacity .24s cubic-bezier(.2,.6,.2,1);pointer-events:none}.btn--primary[data-v-5b01af26]:hover:not(:disabled):before{opacity:.6}.btn--primary[data-v-5b01af26]:focus-visible:before{opacity:.35}:root[data-theme=light] .btn--primary[data-v-5b01af26]:before{content:none}@media(prefers-reduced-motion:reduce){.btn--primary[data-v-5b01af26]:before{transition-duration:.01ms}}.btn__spinner[data-v-5b01af26]{width:11px;height:11px;flex:none;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:btn-spin-5b01af26 .7s linear infinite}@keyframes btn-spin-5b01af26{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.btn__spinner[data-v-5b01af26]{animation-duration:2s}}.card[data-v-8c187da1]{display:flex;flex-direction:column;min-width:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.card--interactive[data-v-8c187da1]{cursor:pointer}.card--interactive[data-v-8c187da1]:hover{border-color:var(--color-outline)}.card__head[data-v-8c187da1]{display:flex;align-items:center;gap:8px;flex:none;height:var(--spacing-panelHeader);padding:0 10px;border-bottom:1px solid var(--color-divider)}.card__title[data-v-8c187da1]{margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim)}.card__spacer[data-v-8c187da1]{flex:1 1 auto}.card__body[data-v-8c187da1]{flex:1 1 auto;min-height:0}.card__body--padded[data-v-8c187da1]{padding:10px 12px}.check[data-v-5fb92780]{display:flex;align-items:baseline;gap:7px;margin-bottom:6px}.check--off[data-v-5fb92780]{opacity:.5}.check__box[data-v-5fb92780]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:pointer}.check__box[data-v-5fb92780]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.check__label[data-v-5fb92780]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.check__hint[data-v-5fb92780]{display:block;font-size:var(--text-xs);color:var(--color-dim)}.chip[data-v-30700fa0]{display:inline-flex;align-items:center;gap:4px;padding:1px 7px;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.5;border-radius:var(--radius-xs);white-space:nowrap}.chip--num[data-v-30700fa0]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.chip--neutral[data-v-30700fa0]{color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider)}.chip--accent[data-v-30700fa0]{color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent)}.chip--ok[data-v-30700fa0]{color:var(--color-ok);background-color:color-mix(in srgb,var(--color-ok) 14%,transparent)}.chip--warn[data-v-30700fa0]{color:var(--color-warn);background-color:color-mix(in srgb,var(--color-warn) 14%,transparent)}.chip--err[data-v-30700fa0]{color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 14%,transparent)}.chip__x[data-v-30700fa0]{font-size:9px;color:inherit;background:none;border:0;padding:0;cursor:pointer;opacity:.7}.chip__x[data-v-30700fa0]:hover{opacity:1}.field[data-v-0c4cf022]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-0c4cf022]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-0c4cf022]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-0c4cf022]{width:auto}.field__control[data-v-0c4cf022]{flex:1 1 auto;min-width:0}.field__hint[data-v-0c4cf022]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.row[data-v-0c4cf022]{display:flex;align-items:center;gap:6px}.picker[data-v-0c4cf022]{width:26px;height:26px;flex:none;padding:2px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.picker[data-v-0c4cf022]:focus-visible,.hex[data-v-0c4cf022]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.hex[data-v-0c4cf022]{flex:1 1 auto;min-width:0;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.picker[data-v-0c4cf022]:disabled,.hex[data-v-0c4cf022]:disabled{opacity:.5}.field[data-v-3afdb10c]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-3afdb10c]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-3afdb10c]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-3afdb10c]{width:auto}.field__required[data-v-3afdb10c]{color:var(--color-err)}.field__control[data-v-3afdb10c]{flex:1 1 auto;min-width:0}.field__hint[data-v-3afdb10c],.field__error[data-v-3afdb10c]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.field__error[data-v-3afdb10c]{color:var(--color-err)}.input[data-v-3afdb10c]{width:100%;height:26px;padding:0 8px;font-family:var(--font-mono);font-size:var(--text-sm);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.input--invalid[data-v-3afdb10c]{border-color:var(--color-err)}.input[data-v-3afdb10c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.input[data-v-3afdb10c]:disabled{opacity:.5}.rule[data-v-521e9319]{height:1px;margin:12px 0;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]{display:flex;align-items:center;gap:8px;height:auto;background:none;margin:14px 0 7px}.rule--labelled[data-v-521e9319]:before,.rule--labelled[data-v-521e9319]:after{content:\"\";height:1px;background-color:var(--color-divider)}.rule--labelled[data-v-521e9319]:before{width:10px;flex:none}.rule--labelled[data-v-521e9319]:after{flex:1 1 auto}.rule__label[data-v-521e9319]{font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.field[data-v-1a8ee938]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-1a8ee938]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-1a8ee938]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-1a8ee938]{width:auto}.field__required[data-v-1a8ee938]{color:var(--color-err)}.field__control[data-v-1a8ee938]{flex:1 1 auto;min-width:0}.field__hint[data-v-1a8ee938],.field__error[data-v-1a8ee938]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-1a8ee938]{color:var(--color-err)}.fw[data-v-b6b4a10b]{position:absolute;display:flex;flex-direction:column;overflow:hidden;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.fw--docked[data-v-b6b4a10b]{border-radius:0}.fw--docked.fw--left[data-v-b6b4a10b]{border-left:0}.fw--docked.fw--right[data-v-b6b4a10b]{border-right:0}.fw--docked .fw__grip[data-v-b6b4a10b]{cursor:ew-resize}.fw__bar[data-v-b6b4a10b]{display:flex;align-items:center;gap:2px;flex:none;height:28px;padding:0 4px 0 10px;border-bottom:1px solid var(--color-divider);cursor:grab;touch-action:none;user-select:none}.fw__bar[data-v-b6b4a10b]:active{cursor:grabbing}.fw__bar[data-v-b6b4a10b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.fw__title[data-v-b6b4a10b]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.fw__act[data-v-b6b4a10b]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.fw__act[data-v-b6b4a10b]:hover{color:var(--color-fg);background-color:var(--color-raised)}.fw__act[data-v-b6b4a10b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.fw__body[data-v-b6b4a10b]{flex:1;min-height:0;overflow:auto}.fw__grip[data-v-b6b4a10b]{position:absolute;right:0;bottom:0;width:14px;height:14px;cursor:nwse-resize;touch-action:none}.fw__grip[data-v-b6b4a10b]:after{content:\"\";position:absolute;right:3px;bottom:3px;width:6px;height:6px;border-right:2px solid var(--color-outline, #3a4756);border-bottom:2px solid var(--color-outline, #3a4756)}.icon[data-v-15dffeec]{font-family:Material Icons,sans-serif;font-style:normal;font-weight:400;line-height:1;letter-spacing:normal;white-space:nowrap;direction:ltr;display:inline-block;vertical-align:middle;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-feature-settings:\"liga\";color:inherit}.icon--xs[data-v-15dffeec]{font-size:12px}.icon--sm[data-v-15dffeec]{font-size:14px}.icon--md[data-v-15dffeec]{font-size:16px}.icon--lg[data-v-15dffeec]{font-size:20px}.field[data-v-a5fd75e2]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-a5fd75e2]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-a5fd75e2]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-a5fd75e2]{width:auto}.field__required[data-v-a5fd75e2]{color:var(--color-err)}.field__control[data-v-a5fd75e2]{flex:1 1 auto;min-width:0}.field__hint[data-v-a5fd75e2],.field__error[data-v-a5fd75e2]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-a5fd75e2]{color:var(--color-err)}.shell[data-v-a5fd75e2]{display:flex;align-items:center;gap:6px;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-a5fd75e2]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-a5fd75e2]{border-color:var(--color-err)}.shell--off[data-v-a5fd75e2]{opacity:.5}.shell--sm[data-v-a5fd75e2]{height:22px}.shell--md[data-v-a5fd75e2]{height:26px}.shell--lg[data-v-a5fd75e2]{height:32px}.shell[data-v-a5fd75e2]:has(.input--area){height:auto;padding:5px 8px}.input[data-v-a5fd75e2]{flex:1 1 auto;min-width:0;padding:0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none}.shell--lg .input[data-v-a5fd75e2]{font-size:var(--text-base)}.input--num[data-v-a5fd75e2]{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.input--area[data-v-a5fd75e2]{resize:vertical;line-height:1.45}.input[data-v-a5fd75e2]::placeholder{color:var(--color-dim);opacity:.75}.suffix[data-v-a5fd75e2]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.scrim[data-v-03f9e875]{position:fixed;inset:0;z-index:40000;display:grid;place-items:center;padding:24px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(4px)}.dialog[data-v-03f9e875]{display:flex;flex-direction:column;max-height:100%;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.dialog--sm[data-v-03f9e875]{width:380px}.dialog--md[data-v-03f9e875]{width:560px}.dialog--lg[data-v-03f9e875]{width:840px}.dialog__head[data-v-03f9e875]{display:flex;align-items:center;gap:10px;flex:none;padding:9px 12px;border-bottom:1px solid var(--color-divider)}.dialog__title[data-v-03f9e875]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.dialog__close[data-v-03f9e875]{margin-left:auto;width:22px;height:22px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.dialog__close[data-v-03f9e875]:hover{color:var(--color-fg);background-color:var(--color-raised)}.dialog__close[data-v-03f9e875]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.dialog__body[data-v-03f9e875]{flex:1 1 auto;min-height:0;padding:14px 12px;overflow-y:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.dialog__foot[data-v-03f9e875]{display:flex;align-items:center;justify-content:flex-end;gap:7px;flex:none;padding:9px 12px;border-top:1px solid var(--color-divider)}.field[data-v-da414860]{display:flex;align-items:flex-start;gap:10px;margin-bottom:7px}.field--stacked[data-v-da414860]{flex-direction:column;gap:4px}.field__label[data-v-da414860]{flex:none;width:120px;padding-top:2px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-da414860]{width:auto}.field__required[data-v-da414860]{color:var(--color-err)}.field__control[data-v-da414860]{flex:1 1 auto;min-width:0}.choices[data-v-da414860]{display:flex;flex-direction:column;gap:4px}.choices--inline[data-v-da414860]{flex-direction:row;flex-wrap:wrap;gap:14px}.choice[data-v-da414860]{display:flex;align-items:baseline;gap:7px;cursor:pointer}.choice--off[data-v-da414860]{opacity:.5;cursor:default}.choice__dot[data-v-da414860]{width:13px;height:13px;flex:none;accent-color:var(--color-accent);cursor:inherit}.choice__dot[data-v-da414860]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.choice__label[data-v-da414860]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.field__error[data-v-da414860]{margin:3px 0 0;font-size:var(--text-xs);color:var(--color-err)}.field__hint[data-v-da414860]{margin:3px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.field[data-v-940042b2]{display:flex;align-items:baseline;gap:10px;margin-bottom:7px}.field--stacked[data-v-940042b2]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-940042b2]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-940042b2]{width:auto}.field__required[data-v-940042b2]{color:var(--color-err)}.field__control[data-v-940042b2]{flex:1 1 auto;min-width:0}.field__hint[data-v-940042b2],.field__error[data-v-940042b2]{margin:3px 0 0;font-family:var(--font-sans);font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.field__error[data-v-940042b2]{color:var(--color-err)}.shell[data-v-940042b2]{position:relative;display:flex;align-items:center;padding:0 8px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.shell[data-v-940042b2]:focus-within{border-color:var(--color-accent);outline:1px solid var(--color-accent)}.shell--invalid[data-v-940042b2]{border-color:var(--color-err)}.shell--off[data-v-940042b2]{opacity:.5}.shell--sm[data-v-940042b2]{height:22px}.shell--md[data-v-940042b2]{height:26px}.shell--lg[data-v-940042b2]{height:32px}.shell[data-v-940042b2]:has(.select--many){height:auto;padding:0 2px}.select[data-v-940042b2]{flex:1 1 auto;min-width:0;height:100%;padding:0 14px 0 0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);background:none;border:0;outline:none;appearance:none;cursor:pointer}.shell--lg .select[data-v-940042b2]{font-size:var(--text-base)}.select option[data-v-940042b2]{color:var(--color-fg);background-color:var(--color-pane)}.select optgroup[data-v-940042b2]{color:var(--color-dim);background-color:var(--color-pane);font-weight:600;font-style:normal}.select optgroup option[data-v-940042b2]{color:var(--color-fg)}.select--many[data-v-940042b2]{height:auto;padding:4px 0}.chevron[data-v-940042b2]{position:absolute;right:7px;font-size:9px;color:var(--color-dim);pointer-events:none}.field[data-v-ed7d97ce]{display:flex;align-items:center;gap:10px;margin-bottom:7px}.field--stacked[data-v-ed7d97ce]{flex-direction:column;align-items:stretch;gap:3px}.field__label[data-v-ed7d97ce]{width:112px;flex:none;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.field--stacked .field__label[data-v-ed7d97ce]{width:auto}.field__control[data-v-ed7d97ce]{flex:1 1 auto;min-width:0}.row[data-v-ed7d97ce]{display:flex;align-items:center;gap:8px}.range[data-v-ed7d97ce]{flex:1 1 auto;min-width:0;accent-color:var(--color-accent);cursor:pointer}.range[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.num[data-v-ed7d97ce]{width:62px;flex:none;height:22px;padding:0 6px;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.num[data-v-ed7d97ce]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.suffix[data-v-ed7d97ce]{flex:none;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.range[data-v-ed7d97ce]:disabled,.num[data-v-ed7d97ce]:disabled{opacity:.5}.sw[data-v-70940a00]{display:flex;align-items:center;gap:8px;margin-bottom:6px}.sw--off[data-v-70940a00]{opacity:.5}.sw__track[data-v-70940a00]{position:relative;width:28px;height:15px;flex:none;padding:0;background-color:var(--color-outline);border:0;border-radius:8px;cursor:pointer}.sw__track.on[data-v-70940a00]{background-color:var(--color-accent)}.sw__track[data-v-70940a00]:disabled{cursor:default}.sw__track[data-v-70940a00]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.sw__knob[data-v-70940a00]{position:absolute;top:2px;left:2px;width:11px;height:11px;border-radius:50%;background-color:var(--color-pane);transition:left .12s ease}.sw__track.on .sw__knob[data-v-70940a00]{left:15px}@media(prefers-reduced-motion:reduce){.sw__knob[data-v-70940a00]{transition:none}}.sw__label[data-v-70940a00]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer}.table[data-v-925340b8]{width:100%;height:100%;overflow:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}table[data-v-925340b8]{width:100%;border-collapse:collapse}th[data-v-925340b8]{position:sticky;top:0;z-index:1;padding:6px 10px;text-align:left;font-weight:500;white-space:nowrap;color:var(--color-dim);background-color:var(--color-raised);border-bottom:1px solid var(--color-divider)}td[data-v-925340b8]{padding:5px 10px;max-width:28ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-bottom:1px solid var(--color-divider)}tbody tr[data-v-925340b8]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.row--pick[data-v-925340b8]{cursor:pointer}.row--on td[data-v-925340b8]:first-child{box-shadow:inset 2px 0 0 var(--color-accent)}.row--on td[data-v-925340b8]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent)}.table__empty[data-v-925340b8]{margin:0;padding:14px 10px;color:var(--color-dim)}.tabs[data-v-f7c65d26]{display:flex;flex-wrap:wrap;align-items:stretch;gap:1px;min-height:var(--spacing-panelHeader);padding:0 6px;border-bottom:1px solid var(--color-divider)}.tab[data-v-f7c65d26]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 10px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab[data-v-f7c65d26]:hover:not(:disabled){color:var(--color-fg)}.tab[data-v-f7c65d26]:disabled{opacity:.45;cursor:default}.tab.on[data-v-f7c65d26]{color:var(--color-fg);font-weight:600}.tab.on[data-v-f7c65d26]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab[data-v-f7c65d26]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.tab__count[data-v-f7c65d26]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}\n";})();
import { defineComponent as g, createElementBlock as a, openBlock as l, normalizeClass as $, createCommentVNode as y, renderSlot as B, createElementVNode as k, toDisplayString as b, mergeModels as I, useModel as z, useId as T, withDirectives as Y, unref as D, vModelCheckbox as Ee, createTextVNode as L, computed as C, vModelText as R, vModelDynamic as de, reactive as se, ref as J, watch as oe, onMounted as re, onBeforeUnmount as ue, normalizeStyle as ce, withKeys as U, withModifiers as K, createBlock as We, Teleport as Le, Fragment as q, renderList as H, vModelRadio as Ne, vModelSelect as te } from "vue";
const Te = ["type", "disabled", "aria-busy"], Ue = {
  key: 0,
  class: "btn__spinner",
  "aria-hidden": "true"
}, Ae = /* @__PURE__ */ g({
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
    return (t, n) => (l(), a("button", {
      type: e.type,
      class: $([
        "btn",
        `btn--${e.intent}`,
        `btn--${e.size}`,
        { "btn--block": e.block, "btn--busy": e.busy }
      ]),
      disabled: e.disabled || e.busy,
      "aria-busy": e.busy || void 0
    }, [
      e.busy ? (l(), a("span", Ue)) : y("", !0),
      B(t.$slots, "default", {}, void 0, !0)
    ], 10, Te));
  }
}), x = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, u] of t)
    n[s] = u;
  return n;
}, fe = /* @__PURE__ */ x(Ae, [["__scopeId", "data-v-5b01af26"]]), Oe = {
  key: 0,
  class: "card__head"
}, Xe = { class: "card__title" }, _e = /* @__PURE__ */ g({
  __name: "DCard",
  props: {
    title: {},
    padded: { type: Boolean, default: !0 },
    interactive: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (l(), a("section", {
      class: $(["card", { "card--interactive": e.interactive }])
    }, [
      e.title || t.$slots.header ? (l(), a("header", Oe, [
        B(t.$slots, "header", {}, () => [
          k("h3", Xe, b(e.title), 1)
        ], !0),
        n[0] || (n[0] = k("span", { class: "card__spacer" }, null, -1)),
        B(t.$slots, "actions", {}, void 0, !0)
      ])) : y("", !0),
      k("div", {
        class: $(["card__body", { "card__body--padded": e.padded }])
      }, [
        B(t.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ve = /* @__PURE__ */ x(_e, [["__scopeId", "data-v-8c187da1"]]), Fe = ["id", "disabled"], je = ["for"], Re = {
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
    const t = z(e, "modelValue"), n = T();
    return (s, u) => (l(), a("div", {
      class: $(["check", { "check--off": e.disabled }])
    }, [
      Y(k("input", {
        id: D(n),
        "onUpdate:modelValue": u[0] || (u[0] = (r) => t.value = r),
        class: "check__box",
        type: "checkbox",
        disabled: e.disabled
      }, null, 8, Fe), [
        [Ee, t.value]
      ]),
      k("label", {
        for: D(n),
        class: "check__label"
      }, [
        B(s.$slots, "default", {}, () => [
          L(b(e.label), 1)
        ], !0),
        e.hint ? (l(), a("span", Re, b(e.hint), 1)) : y("", !0)
      ], 8, je)
    ], 2));
  }
}), me = /* @__PURE__ */ x(Pe, [["__scopeId", "data-v-5fb92780"]]), Ge = /* @__PURE__ */ g({
  __name: "DChip",
  props: {
    tone: { default: "neutral" },
    numeric: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(e) {
    return (t, n) => (l(), a("span", {
      class: $(["chip", `chip--${e.tone}`, { "chip--num": e.numeric }])
    }, [
      B(t.$slots, "default", {}, void 0, !0),
      e.removable ? (l(), a("button", {
        key: 0,
        type: "button",
        class: "chip__x",
        "aria-label": "Entfernen",
        onClick: n[0] || (n[0] = (s) => t.$emit("remove"))
      }, " ✕ ")) : y("", !0)
    ], 2));
  }
}), be = /* @__PURE__ */ x(Ge, [["__scopeId", "data-v-30700fa0"]]), Je = ["for"], Ze = { class: "field__control" }, pe = { class: "row" }, Qe = ["id", "value", "disabled", "aria-label"], et = ["disabled", "aria-label"], tt = {
  key: 0,
  class: "field__hint"
}, lt = /* @__PURE__ */ g({
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
    const t = z(e, "modelValue"), n = T(), s = C(() => {
      const u = (t.value ?? "").trim();
      return /^#[0-9a-f]{6}$/i.test(u) ? u : /^#[0-9a-f]{3}$/i.test(u) ? "#" + [...u.slice(1)].map((r) => r + r).join("") : "#000000";
    });
    return (u, r) => (l(), a("div", {
      class: $(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: D(n)
      }, b(e.label), 9, Je)) : y("", !0),
      k("div", Ze, [
        k("div", pe, [
          k("input", {
            id: D(n),
            class: "picker",
            type: "color",
            value: s.value,
            disabled: e.disabled,
            "aria-label": e.label ?? "Farbe",
            onInput: r[0] || (r[0] = (o) => t.value = o.target.value)
          }, null, 40, Qe),
          Y(k("input", {
            "onUpdate:modelValue": r[1] || (r[1] = (o) => t.value = o),
            class: "hex",
            type: "text",
            spellcheck: "false",
            disabled: e.disabled,
            "aria-label": e.label ? `${e.label} als Hexwert` : "Farbe als Hexwert"
          }, null, 8, et), [
            [R, t.value]
          ])
        ]),
        e.hint ? (l(), a("p", tt, b(e.hint), 1)) : y("", !0)
      ])
    ], 2));
  }
}), he = /* @__PURE__ */ x(lt, [["__scopeId", "data-v-0c4cf022"]]), at = ["for"], it = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, nt = { class: "field__control" }, dt = ["id", "type", "disabled", "required", "min", "max", "aria-invalid"], st = {
  key: 0,
  class: "field__error",
  role: "alert"
}, ot = {
  key: 1,
  class: "field__hint"
}, rt = /* @__PURE__ */ g({
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
    const t = z(e, "modelValue"), n = T(), s = { date: "date", time: "time", datetime: "datetime-local" };
    return (u, r) => (l(), a("div", {
      class: $(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: D(n)
      }, [
        L(b(e.label) + " ", 1),
        e.required ? (l(), a("span", it, "*")) : y("", !0)
      ], 8, at)) : y("", !0),
      k("div", nt, [
        Y(k("input", {
          id: D(n),
          "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value = o),
          class: $(["input", { "input--invalid": !!e.error }]),
          type: s[e.mode],
          disabled: e.disabled,
          required: e.required,
          min: e.min,
          max: e.max,
          "aria-invalid": !!e.error || void 0
        }, null, 10, dt), [
          [de, t.value]
        ]),
        e.error ? (l(), a("p", st, b(e.error), 1)) : e.hint ? (l(), a("p", ot, b(e.hint), 1)) : y("", !0)
      ])
    ], 2));
  }
}), ye = /* @__PURE__ */ x(rt, [["__scopeId", "data-v-3afdb10c"]]), ut = {
  key: 0,
  class: "rule__label"
}, ct = /* @__PURE__ */ g({
  __name: "DDivider",
  props: {
    label: {}
  },
  setup(e) {
    return (t, n) => (l(), a("div", {
      class: $(["rule", { "rule--labelled": e.label }]),
      role: "separator"
    }, [
      e.label ? (l(), a("span", ut, b(e.label), 1)) : y("", !0)
    ], 2));
  }
}), ke = /* @__PURE__ */ x(ct, [["__scopeId", "data-v-521e9319"]]), ft = ["for"], vt = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, mt = { class: "field__control" }, bt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, ht = {
  key: 1,
  class: "field__hint"
}, yt = /* @__PURE__ */ g({
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
    return (t, n) => (l(), a("div", {
      class: $(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: t.$props.for
      }, [
        L(b(e.label) + " ", 1),
        e.required ? (l(), a("span", vt, "*")) : y("", !0)
      ], 8, ft)) : y("", !0),
      k("div", mt, [
        B(t.$slots, "default", {}, void 0, !0),
        e.error ? (l(), a("p", bt, b(e.error), 1)) : e.hint ? (l(), a("p", ht, b(e.hint), 1)) : y("", !0)
      ])
    ], 2));
  }
}), $e = /* @__PURE__ */ x(yt, [["__scopeId", "data-v-1a8ee938"]]), A = se(/* @__PURE__ */ new Map());
let kt = 0;
const we = se({ left: 240, right: 240 });
function le(e) {
  return we[e];
}
function Z(e, t) {
  we[e] = t;
}
function ae(e, t, n, s) {
  const u = A.get(e);
  A.set(e, { side: t, want: n, min: s, seq: u?.seq ?? kt++ });
}
function ie(e) {
  A.delete(e);
}
function ge(e) {
  return [...A.entries()].filter(([, t]) => t.side === e).sort((t, n) => t[1].seq - n[1].seq);
}
function $t(e, t) {
  const n = A.get(e);
  if (!n) return null;
  const s = ge(n.side);
  if (!s.length) return null;
  const u = s.reduce((v, [, h]) => v + h.min, 0), r = u > t && u > 0 ? t / u : 1, o = Math.max(0, t - u * r), c = s.reduce((v, [, h]) => v + Math.max(1, h.want), 0);
  let i = 0;
  for (let v = 0; v < s.length; v++) {
    const [h, w] = s[v], W = v === s.length - 1 ? Math.max(0, t - i) : Math.round(w.min * r + o * Math.max(1, w.want) / c);
    if (h === e) return { y: i, h: W };
    i += W;
  }
  return null;
}
function wt(e) {
  return ge(e).length;
}
const gt = ["aria-label"], xt = ["aria-label"], Mt = { class: "fw__title" }, Dt = ["aria-label"], Bt = { class: "fw__body" }, Vt = ["aria-label"], j = 24, St = /* @__PURE__ */ g({
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
  setup(e, { expose: t, emit: n }) {
    const s = e, u = n, r = C(() => s.dockable || s.initial?.dock != null), o = { x: 16, y: 16, w: 240, h: 320, dock: null, freeY: 16, freeH: 320 };
    function c() {
      const d = { ...o, ...s.initial };
      if (d.freeY = d.y, d.freeH = d.h, !s.rememberAs) return d;
      try {
        const m = localStorage.getItem(s.rememberAs);
        if (!m) return d;
        const f = JSON.parse(m), M = (S, G) => Number.isFinite(S) ? S : G;
        return {
          x: M(f?.x, d.x),
          y: M(f?.y, d.y),
          w: M(f?.w, d.w),
          h: M(f?.h, d.h),
          dock: f?.dock === "left" || f?.dock === "right" ? f.dock : null,
          freeY: M(f?.freeY, d.y),
          freeH: M(f?.freeH, d.h)
        };
      } catch {
        return d;
      }
    }
    const i = J(c()), v = J();
    function h() {
      if (s.rememberAs)
        try {
          localStorage.setItem(s.rememberAs, JSON.stringify(i.value));
        } catch {
        }
    }
    function w(d) {
      return Math.min(s.maxWidth, Math.max(s.minWidth, d));
    }
    function E() {
      const d = v.value?.offsetParent;
      return {
        width: d?.clientWidth ?? window.innerWidth,
        height: d?.clientHeight ?? window.innerHeight
      };
    }
    const W = C(() => s.rememberAs ?? s.title), N = J({ width: 0, height: 0 });
    function O() {
      const d = i.value.dock;
      if (!d) return;
      const m = $t(W.value, N.value.height);
      if (!m) return;
      const f = le(d);
      i.value = {
        ...i.value,
        w: f,
        x: d === "left" ? 0 : Math.max(0, N.value.width - f),
        y: m.y,
        h: m.h
      };
    }
    oe(
      () => {
        const d = i.value.dock;
        return d ? `${wt(d)}:${le(d)}` : "";
      },
      (d) => {
        d && (N.value = E(), O());
      }
    );
    function X(d, m) {
      const f = i.value;
      N.value = m;
      const M = f.dock ? f.freeY : f.y, S = f.dock ? f.freeH : f.h;
      f.dock || Z(d, w(f.w)), ae(W.value, d, S, s.minHeight), i.value = { ...f, dock: d, freeY: M, freeH: S }, O();
    }
    function p() {
      const d = i.value;
      d.dock && (ie(W.value), i.value = { ...d, y: d.freeY, h: d.freeH, dock: null });
    }
    let V = null;
    function Q(d) {
      if (!V) return;
      const m = E();
      if (V.kind === "move") {
        const M = i.value.w, S = Math.min(
          Math.max(0, V.fromX + (d.clientX - V.startX)),
          Math.max(0, m.width - M)
        ), G = Math.min(
          Math.max(0, V.fromY + (d.clientY - V.startY)),
          Math.max(0, m.height - 28)
        );
        r.value && S <= j ? X("left", m) : r.value && S + M >= m.width - j ? X("right", m) : (p(), i.value = { ...i.value, x: S, y: G });
        return;
      }
      const f = w(V.fromW + (d.clientX - V.startX));
      if (i.value.dock) {
        N.value = m, Z(i.value.dock, f), O();
        return;
      }
      i.value = {
        ...i.value,
        w: f,
        h: Math.max(s.minHeight, V.fromH + (d.clientY - V.startY))
      };
    }
    function P() {
      V && h(), V = null, window.removeEventListener("pointermove", Q), window.removeEventListener("pointerup", P), document.body.style.userSelect = "";
    }
    function ee(d) {
      V = d, window.addEventListener("pointermove", Q), window.addEventListener("pointerup", P), document.body.style.userSelect = "none";
    }
    const Ke = (d) => ee({ kind: "move", startX: d.clientX, startY: d.clientY, fromX: i.value.x, fromY: i.value.y }), He = (d) => ee({ kind: "size", startX: d.clientX, startY: d.clientY, fromW: i.value.w, fromH: i.value.h });
    function _(d, m) {
      const f = E(), M = i.value.w, S = Math.min(Math.max(0, i.value.x + d), Math.max(0, f.width - M));
      r.value && S <= j ? X("left", f) : r.value && S + M >= f.width - j ? X("right", f) : (p(), i.value = {
        ...i.value,
        x: S,
        y: Math.min(Math.max(0, i.value.y + m), Math.max(0, f.height - 28))
      }), h();
    }
    function F() {
      const d = E();
      N.value = d;
      const m = i.value, f = Math.min(w(m.w), d.width);
      if (m.dock) {
        O();
        return;
      }
      const M = Math.min(m.h, d.height);
      i.value = {
        ...m,
        w: f,
        h: M,
        x: Math.min(Math.max(0, m.x), Math.max(0, d.width - f)),
        y: Math.min(Math.max(0, m.y), Math.max(0, d.height - M))
      };
    }
    re(() => {
      if (i.value.dock) {
        const d = E();
        N.value = d, Z(i.value.dock, w(i.value.w)), ae(W.value, i.value.dock, i.value.freeH, s.minHeight);
      }
      F(), window.addEventListener("resize", F);
    }), ue(() => {
      P(), ie(W.value), window.removeEventListener("resize", F);
    });
    const Ye = C(() => ({
      left: i.value.x + "px",
      top: i.value.y + "px",
      width: i.value.w + "px",
      height: i.value.h + "px",
      zIndex: String(s.layer)
    }));
    return t({ placement: i, keepInView: F }), (d, m) => (l(), a("aside", {
      ref_key: "root",
      ref: v,
      class: $([
        "fw",
        {
          "fw--docked": !!i.value.dock,
          "fw--left": i.value.dock === "left",
          "fw--right": i.value.dock === "right"
        }
      ]),
      style: ce(Ye.value),
      "aria-label": e.title
    }, [
      k("div", {
        class: "fw__bar",
        role: "toolbar",
        tabindex: "0",
        "aria-label": `${e.title} verschieben - mit den Pfeiltasten bewegen`,
        onPointerdown: m[2] || (m[2] = K((f) => Ke(f), ["prevent"])),
        onKeydown: [
          m[3] || (m[3] = U(K((f) => _(-16, 0), ["prevent"]), ["left"])),
          m[4] || (m[4] = U(K((f) => _(16, 0), ["prevent"]), ["right"])),
          m[5] || (m[5] = U(K((f) => _(0, -16), ["prevent"]), ["up"])),
          m[6] || (m[6] = U(K((f) => _(0, 16), ["prevent"]), ["down"]))
        ]
      }, [
        k("span", Mt, b(e.title), 1),
        B(d.$slots, "actions", {}, void 0, !0),
        e.closable ? (l(), a("button", {
          key: 0,
          type: "button",
          class: "fw__act",
          title: "Schließen",
          "aria-label": `${e.title} schließen`,
          onPointerdown: m[0] || (m[0] = K(() => {
          }, ["stop"])),
          onClick: m[1] || (m[1] = (f) => u("close"))
        }, " × ", 40, Dt)) : y("", !0)
      ], 40, xt),
      k("div", Bt, [
        B(d.$slots, "default", {}, void 0, !0)
      ]),
      e.resizable ? (l(), a("div", {
        key: 0,
        class: "fw__grip",
        role: "separator",
        "aria-label": `Größe von ${e.title}`,
        title: "Größe ändern",
        onPointerdown: m[7] || (m[7] = K((f) => He(f), ["prevent"]))
      }, null, 40, Vt)) : y("", !0)
    ], 14, gt));
  }
}), xe = /* @__PURE__ */ x(St, [["__scopeId", "data-v-b6b4a10b"]]), It = ["aria-hidden", "aria-label", "role"], qt = /* @__PURE__ */ g({
  __name: "DIcon",
  props: {
    name: {},
    size: { default: "md" },
    tone: {},
    decorative: { type: Boolean, default: !0 },
    label: {}
  },
  setup(e) {
    return (t, n) => (l(), a("i", {
      class: $(["icon", `icon--${e.size}`]),
      style: ce(e.tone ? { color: `var(--${e.tone})` } : void 0),
      "aria-hidden": e.decorative ? "true" : void 0,
      "aria-label": e.decorative ? void 0 : e.label ?? e.name,
      role: e.decorative ? void 0 : "img"
    }, b(e.name), 15, It));
  }
}), Me = /* @__PURE__ */ x(qt, [["__scopeId", "data-v-15dffeec"]]), Ct = ["for"], zt = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Kt = { class: "field__control" }, Ht = ["id", "rows", "placeholder", "disabled", "readonly", "required", "aria-invalid"], Yt = ["id", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "step", "aria-invalid"], Et = {
  key: 2,
  class: "suffix"
}, Wt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, Lt = {
  key: 1,
  class: "field__hint"
}, Nt = /* @__PURE__ */ g({
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
    const t = z(e, "modelValue"), n = e, s = T(), u = C(() => n.type === "number");
    return (r, o) => (l(), a("div", {
      class: $(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: D(s)
      }, [
        L(b(e.label) + " ", 1),
        e.required ? (l(), a("span", zt, "*")) : y("", !0)
      ], 8, Ct)) : y("", !0),
      k("div", Kt, [
        k("div", {
          class: $(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.rows ? Y((l(), a("textarea", {
            key: 0,
            id: D(s),
            "onUpdate:modelValue": o[0] || (o[0] = (c) => t.value = c),
            class: "input input--area",
            rows: e.rows,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, null, 8, Ht)), [
            [R, t.value]
          ]) : Y((l(), a("input", {
            key: 1,
            id: D(s),
            "onUpdate:modelValue": o[1] || (o[1] = (c) => t.value = c),
            class: $(["input", { "input--num": u.value }]),
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
            [de, t.value]
          ]),
          e.suffix ? (l(), a("span", Et, b(e.suffix), 1)) : y("", !0)
        ], 2),
        e.error ? (l(), a("p", Wt, b(e.error), 1)) : e.hint ? (l(), a("p", Lt, b(e.hint), 1)) : y("", !0)
      ])
    ], 2));
  }
}), De = /* @__PURE__ */ x(Nt, [["__scopeId", "data-v-a5fd75e2"]]), Tt = ["aria-label"], Ut = {
  key: 0,
  class: "dialog__head"
}, At = { class: "dialog__title" }, Ot = { class: "dialog__body" }, Xt = {
  key: 1,
  class: "dialog__foot"
}, _t = /* @__PURE__ */ g({
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
    const n = z(e, "modelValue"), s = e, u = t;
    function r() {
      s.persistent || (n.value = !1, u("cancel"));
    }
    function o(c) {
      c.key === "Escape" && n.value && r();
    }
    return oe(n, (c) => {
      document.body.style.overflow = c ? "hidden" : "";
    }), re(() => window.addEventListener("keydown", o)), ue(() => {
      window.removeEventListener("keydown", o), document.body.style.overflow = "";
    }), (c, i) => (l(), We(Le, { to: "body" }, [
      n.value ? (l(), a("div", {
        key: 0,
        class: "scrim",
        onClick: K(r, ["self"])
      }, [
        k("div", {
          class: $(["dialog", `dialog--${e.size}`]),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e.title
        }, [
          e.title || c.$slots.header ? (l(), a("header", Ut, [
            B(c.$slots, "header", {}, () => [
              k("h2", At, b(e.title), 1)
            ], !0),
            e.persistent ? y("", !0) : (l(), a("button", {
              key: 0,
              type: "button",
              class: "dialog__close",
              "aria-label": "Schließen",
              onClick: r
            }, " ✕ "))
          ])) : y("", !0),
          k("div", Ot, [
            B(c.$slots, "default", {}, void 0, !0)
          ]),
          c.$slots.actions ? (l(), a("footer", Xt, [
            B(c.$slots, "actions", {}, void 0, !0)
          ])) : y("", !0)
        ], 10, Tt)
      ])) : y("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ x(_t, [["__scopeId", "data-v-03f9e875"]]), Ft = {
  key: 0,
  class: "field__label"
}, jt = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, Rt = { class: "field__control" }, Pt = ["aria-label"], Gt = ["name", "value", "disabled", "required"], Jt = { class: "choice__label" }, Zt = {
  key: 0,
  class: "field__error",
  role: "alert"
}, pt = {
  key: 1,
  class: "field__hint"
}, Qt = /* @__PURE__ */ g({
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
    const t = z(e, "modelValue"), n = e, s = T(), u = C(
      () => (n.options ?? []).map((r) => {
        if (r === null || typeof r != "object")
          return { value: r, label: String(r) };
        const o = r, c = n.valueKey in o ? o[n.valueKey] : o, i = n.labelKey in o ? o[n.labelKey] : c;
        return { value: c, label: String(i ?? "") };
      })
    );
    return (r, o) => (l(), a("div", {
      class: $(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("span", Ft, [
        L(b(e.label) + " ", 1),
        e.required ? (l(), a("span", jt, "*")) : y("", !0)
      ])) : y("", !0),
      k("div", Rt, [
        k("div", {
          class: $(["choices", { "choices--inline": e.inline }]),
          role: "radiogroup",
          "aria-label": e.label
        }, [
          (l(!0), a(q, null, H(u.value, (c, i) => (l(), a("label", {
            key: i,
            class: $(["choice", { "choice--off": e.disabled }])
          }, [
            Y(k("input", {
              "onUpdate:modelValue": o[0] || (o[0] = (v) => t.value = v),
              class: "choice__dot",
              type: "radio",
              name: D(s),
              value: c.value,
              disabled: e.disabled,
              required: e.required
            }, null, 8, Gt), [
              [Ne, t.value]
            ]),
            k("span", Jt, b(c.label), 1)
          ], 2))), 128))
        ], 10, Pt),
        e.error ? (l(), a("p", Zt, b(e.error), 1)) : e.hint ? (l(), a("p", pt, b(e.hint), 1)) : y("", !0)
      ])
    ], 2));
  }
}), Ve = /* @__PURE__ */ x(Qt, [["__scopeId", "data-v-da414860"]]), el = ["for"], tl = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
}, ll = { class: "field__control" }, al = ["id", "size", "disabled", "required", "aria-invalid"], il = ["value"], nl = ["id", "disabled", "required", "aria-invalid"], dl = {
  key: 0,
  value: ""
}, sl = ["value"], ol = ["label"], rl = ["value"], ul = ["value"], cl = {
  key: 2,
  class: "chevron",
  "aria-hidden": "true"
}, fl = {
  key: 0,
  class: "field__error",
  role: "alert"
}, vl = {
  key: 1,
  class: "field__hint"
}, ml = /* @__PURE__ */ g({
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
    multiple: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = z(e, "modelValue"), n = e, s = T(), u = C(
      () => (n.options ?? []).map((i) => {
        if (i === null || typeof i != "object")
          return { value: i, label: String(i) };
        const v = i, h = n.valueKey in v ? v[n.valueKey] : v, w = n.labelKey in v ? v[n.labelKey] : h, E = n.groupKey ? v[n.groupKey] : void 0;
        return { value: h, label: String(w ?? ""), group: E === void 0 ? void 0 : String(E) };
      })
    ), r = C(() => {
      const i = /* @__PURE__ */ new Map(), v = [];
      return u.value.forEach((h, w) => {
        if (!h.group) {
          v.push({ index: w, label: h.label });
          return;
        }
        i.has(h.group) || i.set(h.group, []), i.get(h.group).push({ index: w, label: h.label });
      }), { loose: v, headed: [...i].map(([h, w]) => ({ label: h, options: w })) };
    }), o = C({
      get() {
        const i = u.value.findIndex((v) => v.value === t.value);
        return i >= 0 ? String(i) : "";
      },
      set(i) {
        t.value = i === "" ? void 0 : u.value[Number(i)]?.value;
      }
    }), c = C({
      get() {
        const i = Array.isArray(t.value) ? t.value : [];
        return u.value.map((v, h) => i.includes(v.value) ? String(h) : "").filter((v) => v !== "");
      },
      set(i) {
        t.value = i.map((v) => u.value[Number(v)]?.value);
      }
    });
    return (i, v) => (l(), a("div", {
      class: $(["field", { "field--stacked": e.stacked, "field--invalid": !!e.error }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: D(s)
      }, [
        L(b(e.label) + " ", 1),
        e.required ? (l(), a("span", tl, "*")) : y("", !0)
      ], 8, el)) : y("", !0),
      k("div", ll, [
        k("div", {
          class: $(["shell", `shell--${e.size}`, { "shell--invalid": !!e.error, "shell--off": e.disabled }])
        }, [
          e.multiple ? Y((l(), a("select", {
            key: 0,
            id: D(s),
            "onUpdate:modelValue": v[0] || (v[0] = (h) => c.value = h),
            class: $(["select", "select--many"]),
            multiple: "",
            size: Math.min(Math.max(u.value.length, 2), 8),
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            (l(!0), a(q, null, H(u.value, (h, w) => (l(), a("option", {
              key: w,
              value: String(w)
            }, b(h.label), 9, il))), 128))
          ], 8, al)), [
            [te, c.value]
          ]) : Y((l(), a("select", {
            key: 1,
            id: D(s),
            "onUpdate:modelValue": v[1] || (v[1] = (h) => o.value = h),
            class: "select",
            disabled: e.disabled,
            required: e.required,
            "aria-invalid": !!e.error || void 0
          }, [
            e.clearable || t.value === void 0 ? (l(), a("option", dl, b(e.placeholder ?? "—"), 1)) : y("", !0),
            e.groupKey ? (l(), a(q, { key: 1 }, [
              (l(!0), a(q, null, H(r.value.loose, (h) => (l(), a("option", {
                key: h.index,
                value: String(h.index)
              }, b(h.label), 9, sl))), 128)),
              (l(!0), a(q, null, H(r.value.headed, (h) => (l(), a("optgroup", {
                key: h.label,
                label: h.label
              }, [
                (l(!0), a(q, null, H(h.options, (w) => (l(), a("option", {
                  key: w.index,
                  value: String(w.index)
                }, b(w.label), 9, rl))), 128))
              ], 8, ol))), 128))
            ], 64)) : (l(!0), a(q, { key: 2 }, H(u.value, (h, w) => (l(), a("option", {
              key: w,
              value: String(w)
            }, b(h.label), 9, ul))), 128))
          ], 8, nl)), [
            [te, o.value]
          ]),
          e.multiple ? y("", !0) : (l(), a("span", cl, "▾"))
        ], 2),
        e.error ? (l(), a("p", fl, b(e.error), 1)) : e.hint ? (l(), a("p", vl, b(e.hint), 1)) : y("", !0)
      ])
    ], 2));
  }
}), Se = /* @__PURE__ */ x(ml, [["__scopeId", "data-v-940042b2"]]), bl = ["for"], hl = { class: "field__control row" }, yl = ["id", "min", "max", "step", "disabled"], kl = ["min", "max", "step", "disabled", "aria-label"], $l = {
  key: 0,
  class: "suffix"
}, wl = /* @__PURE__ */ g({
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
    const t = z(e, "modelValue"), n = T();
    return (s, u) => (l(), a("div", {
      class: $(["field", { "field--stacked": e.stacked }])
    }, [
      e.label ? (l(), a("label", {
        key: 0,
        class: "field__label",
        for: D(n)
      }, b(e.label), 9, bl)) : y("", !0),
      k("div", hl, [
        Y(k("input", {
          id: D(n),
          "onUpdate:modelValue": u[0] || (u[0] = (r) => t.value = r),
          class: "range",
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled
        }, null, 8, yl), [
          [
            R,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        Y(k("input", {
          "onUpdate:modelValue": u[1] || (u[1] = (r) => t.value = r),
          class: "num",
          type: "number",
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label ? `${e.label} als Zahl` : "Wert"
        }, null, 8, kl), [
          [
            R,
            t.value,
            void 0,
            { number: !0 }
          ]
        ]),
        e.suffix ? (l(), a("span", $l, b(e.suffix), 1)) : y("", !0)
      ])
    ], 2));
  }
}), Ie = /* @__PURE__ */ x(wl, [["__scopeId", "data-v-ed7d97ce"]]), gl = ["aria-checked", "aria-label", "disabled"], xl = /* @__PURE__ */ g({
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
    const t = z(e, "modelValue");
    return (n, s) => (l(), a("div", {
      class: $(["sw", { "sw--off": e.disabled }])
    }, [
      k("button", {
        type: "button",
        role: "switch",
        "aria-checked": !!t.value,
        "aria-label": e.label,
        disabled: e.disabled,
        class: $(["sw__track", { on: t.value }]),
        onClick: s[0] || (s[0] = (u) => t.value = !t.value)
      }, [...s[2] || (s[2] = [
        k("span", { class: "sw__knob" }, null, -1)
      ])], 10, gl),
      e.label || n.$slots.default ? (l(), a("span", {
        key: 0,
        class: "sw__label",
        onClick: s[1] || (s[1] = (u) => !e.disabled && (t.value = !t.value))
      }, [
        B(n.$slots, "default", {}, () => [
          L(b(e.label), 1)
        ], !0)
      ])) : y("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ x(xl, [["__scopeId", "data-v-70940a00"]]), Ml = { class: "table" }, Dl = { key: 0 }, Bl = ["aria-selected", "onClick"], Vl = ["title"], Sl = {
  key: 1,
  class: "table__empty"
}, Il = /* @__PURE__ */ g({
  __name: "DTable",
  props: /* @__PURE__ */ I({
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
    const t = z(e, "selected"), n = e, s = C(() => {
      if (n.columns?.length)
        return n.columns.map(
          (o) => typeof o == "string" ? { key: o, label: o } : { key: o.key, label: o.label ?? o.key }
        );
      const r = n.items?.[0];
      return r ? Object.keys(r).map((o) => ({ key: o, label: o })) : [];
    });
    function u(r, o) {
      const c = r?.[o];
      return c == null ? "" : typeof c == "object" ? JSON.stringify(c) : String(c);
    }
    return (r, o) => (l(), a("div", Ml, [
      e.items?.length && s.value.length ? (l(), a("table", Dl, [
        k("thead", null, [
          k("tr", null, [
            (l(!0), a(q, null, H(s.value, (c) => (l(), a("th", {
              key: c.key
            }, b(c.label), 1))), 128))
          ])
        ]),
        k("tbody", null, [
          (l(!0), a(q, null, H(e.items, (c, i) => (l(), a("tr", {
            key: i,
            class: $({ "row--pick": e.selectable, "row--on": e.selectable && c === t.value }),
            "aria-selected": e.selectable ? c === t.value : void 0,
            onClick: (v) => e.selectable && (t.value = c)
          }, [
            (l(!0), a(q, null, H(s.value, (v) => (l(), a("td", {
              key: v.key,
              title: u(c, v.key)
            }, b(u(c, v.key)), 9, Vl))), 128))
          ], 10, Bl))), 128))
        ])
      ])) : (l(), a("p", Sl, b(e.empty), 1))
    ]));
  }
}), Ce = /* @__PURE__ */ x(Il, [["__scopeId", "data-v-925340b8"]]), ql = ["aria-label"], Cl = ["aria-selected", "tabindex", "disabled", "onClick"], zl = {
  key: 0,
  class: "tab__count"
}, Kl = /* @__PURE__ */ g({
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
    const t = z(e, "modelValue"), n = e;
    function s(u) {
      const r = n.tabs.filter((i) => !i.disabled), o = r.findIndex((i) => i.id === t.value), c = r[(o + u + r.length) % r.length];
      c && (t.value = c.id);
    }
    return (u, r) => (l(), a("div", {
      class: "tabs",
      role: "tablist",
      "aria-label": e.label,
      onKeydown: [
        r[0] || (r[0] = U(K((o) => s(-1), ["prevent"]), ["left"])),
        r[1] || (r[1] = U(K((o) => s(1), ["prevent"]), ["right"]))
      ]
    }, [
      (l(!0), a(q, null, H(e.tabs, (o) => (l(), a("button", {
        key: o.id,
        type: "button",
        role: "tab",
        "aria-selected": t.value === o.id,
        tabindex: t.value === o.id ? 0 : -1,
        disabled: o.disabled,
        class: $(["tab", { on: t.value === o.id }]),
        onClick: (c) => t.value = o.id
      }, [
        L(b(o.label) + " ", 1),
        o.count !== void 0 ? (l(), a("span", zl, b(o.count), 1)) : y("", !0)
      ], 10, Cl))), 128)),
      B(u.$slots, "actions", {}, void 0, !0)
    ], 40, ql));
  }
}), ze = /* @__PURE__ */ x(Kl, [["__scopeId", "data-v-f7c65d26"]]), Hl = {
  DButton: fe,
  DCard: ve,
  DCheckbox: me,
  DChip: be,
  DColorInput: he,
  DDateInput: ye,
  DDivider: ke,
  DField: $e,
  DFloatingWindow: xe,
  DIcon: Me,
  DInput: De,
  DModal: Be,
  DRadioGroup: Ve,
  DSelect: Se,
  DSlider: Ie,
  DSwitch: qe,
  DTable: Ce,
  DTabs: ze
}, Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONTROLS: Hl,
  DButton: fe,
  DCard: ve,
  DCheckbox: me,
  DChip: be,
  DColorInput: he,
  DDateInput: ye,
  DDivider: ke,
  DField: $e,
  DFloatingWindow: xe,
  DIcon: Me,
  DInput: De,
  DModal: Be,
  DRadioGroup: Ve,
  DSelect: Se,
  DSlider: Ie,
  DSwitch: qe,
  DTable: Ce,
  DTabs: ze
}, Symbol.toStringTag, { value: "Module" })), ne = "org.eclipse.daanse.board.app.ui.vue.controls", El = "0.0.1-next.1";
async function Ll(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${ne}: tsm runtime is not initialized`);
  t.register(ne, Yl, El, "ui.vue.controls"), await void 0;
}
async function Nl(e) {
  await void 0;
}
export {
  Hl as CONTROLS,
  fe as DButton,
  ve as DCard,
  me as DCheckbox,
  be as DChip,
  he as DColorInput,
  ye as DDateInput,
  ke as DDivider,
  $e as DField,
  xe as DFloatingWindow,
  Me as DIcon,
  De as DInput,
  Be as DModal,
  Ve as DRadioGroup,
  Se as DSelect,
  Ie as DSlider,
  qe as DSwitch,
  Ce as DTable,
  ze as DTabs,
  Ll as activate,
  Nl as deactivate
};
