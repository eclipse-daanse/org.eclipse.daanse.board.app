(function(){var i="ui.vue.controls",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.btn[data-v-5b01af26] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  font-weight: 500;\n  line-height: 1;\n  white-space: nowrap;\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n  cursor: pointer;\n}\n.btn[data-v-5b01af26]:hover:not(:disabled) {\n  border-color: var(--color-outline);\n}\n.btn[data-v-5b01af26]:active:not(:disabled) {\n  transform: translateY(0.5px);\n}\n.btn[data-v-5b01af26]:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n.btn[data-v-5b01af26]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n\n/* --- sizes: heights that line up with inputs of the same size --------- */\n.btn--sm[data-v-5b01af26] {\n  height: 22px;\n  padding: 0 9px;\n  font-size: var(--text-xs);\n}\n.btn--md[data-v-5b01af26] {\n  height: 26px;\n  padding: 0 12px;\n}\n.btn--lg[data-v-5b01af26] {\n  height: 32px;\n  padding: 0 16px;\n  font-size: var(--text-base);\n}\n.btn--block[data-v-5b01af26] {\n  display: flex;\n  width: 100%;\n}\n\n/* --- intents ---------------------------------------------------------- */\n.btn--primary[data-v-5b01af26] {\n  color: var(--color-onAccent);\n  background-color: var(--color-accent);\n  border-color: var(--color-accent);\n  font-weight: 600;\n}\n.btn--primary[data-v-5b01af26]:hover:not(:disabled) {\n  filter: brightness(1.08);\n}\n.btn--quiet[data-v-5b01af26] {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--color-dim);\n}\n.btn--quiet[data-v-5b01af26]:hover:not(:disabled) {\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n  border-color: var(--color-divider);\n}\n\n/* Destructive: the colour carries the warning, the fill stays quiet so it\n   cannot be mistaken for the primary action. */\n.btn--danger[data-v-5b01af26] {\n  color: var(--color-err);\n  border-color: color-mix(in srgb, var(--color-err) 45%, transparent);\n}\n.btn--danger[data-v-5b01af26]:hover:not(:disabled) {\n  background-color: color-mix(in srgb, var(--color-err) 12%, transparent);\n  border-color: var(--color-err);\n}\n\n/* --- the halo, on the primary action ---------------------------------- */\n\n/*\n * A blurred field of colour behind the button, revealed on hover.\n *\n * The idea is the Vue devtools anchor's: an element far larger than what it\n * sits behind, heavily blurred, faded in. Three things are ours rather than\n * theirs. The colour comes from the accent token, so it belongs to whatever\n * theme is on instead of announcing someone else's brand. It is a pseudo\n * element, so no button needs an extra span to carry it. And it fades in a\n * quarter of a second rather than a whole one - theirs is ambient decoration\n * on something that floats, ours answers a pointer.\n *\n * On the primary intent and nowhere else. Their anchor wears one because it\n * is the only thing on screen; a view has one primary action for the same\n * reason, and putting the halo there says which button that is without a\n * caller having to ask for it.\n *\n * `isolation` is what keeps it behind the button's own background without\n * falling behind the page: it gives the button a stacking context of its\n * own, and z-index -1 is then measured inside that.\n */\n.btn--primary[data-v-5b01af26] {\n  position: relative;\n  isolation: isolate;\n}\n.btn--primary[data-v-5b01af26]::before {\n  content: '';\n  position: absolute;\n  /*\n   * A narrow band, blurred far wider than itself. In pixels rather than a\n   * percentage: percentages resolve against width sideways and height\n   * vertically, and on a button three times wider than it is tall that\n   * turns a halo into a smear reaching for whatever stands beside it.\n   */\n  inset: -7px;\n  z-index: -1;\n  border-radius: 9999px;\n  background-image: linear-gradient(\n    45deg,\n    var(--color-accent),\n    color-mix(in srgb, var(--color-accent) 55%, var(--color-ok)),\n    var(--color-accent)\n  );\n  filter: blur(34px);\n  opacity: 0;\n  transition: opacity 240ms cubic-bezier(0.2, 0.6, 0.2, 1);\n  pointer-events: none;\n}\n.btn--primary[data-v-5b01af26]:hover:not(:disabled)::before {\n  /* Raised with the blur: the same colour over more area is less of it. */\n  opacity: 0.6;\n}\n.btn--primary[data-v-5b01af26]:focus-visible::before {\n  opacity: 0.35;\n}\n\n/*\n * Not on a light ground.\n *\n * A glow needs darkness to be a glow. On a pale theme the same field is a\n * wash rather than a light, and it lands on the one meaning already taken:\n * focus is drawn with this very colour, so a hover that looks like it is\n * two signals wearing one face.\n *\n * `data-theme` is written by the shell's theme system from each theme's\n * own `dark` flag - four themes, one of them dark - so this asks the\n * question the palette already answers instead of guessing from a colour.\n */\n:root[data-theme='light'] .btn--primary[data-v-5b01af26]::before {\n  content: none;\n}\n@media (prefers-reduced-motion: reduce) {\n.btn--primary[data-v-5b01af26]::before {\n    transition-duration: 0.01ms;\n}\n}\n\n/* --- busy ------------------------------------------------------------- */\n.btn__spinner[data-v-5b01af26] {\n  width: 11px;\n  height: 11px;\n  flex: none;\n  border: 1.5px solid currentColor;\n  border-top-color: transparent;\n  border-radius: 50%;\n  animation: btn-spin-5b01af26 0.7s linear infinite;\n}\n@keyframes btn-spin-5b01af26 {\nto {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-reduced-motion: reduce) {\n.btn__spinner[data-v-5b01af26] {\n    animation-duration: 2s;\n}\n}\n\n.card[data-v-8c187da1] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.card--interactive[data-v-8c187da1] {\n  cursor: pointer;\n}\n.card--interactive[data-v-8c187da1]:hover {\n  border-color: var(--color-outline);\n}\n.card__head[data-v-8c187da1] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n  height: var(--spacing-panelHeader);\n  padding: 0 10px;\n  border-bottom: 1px solid var(--color-divider);\n}\n.card__title[data-v-8c187da1] {\n  margin: 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-xs);\n  font-weight: 650;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: var(--color-dim);\n}\n.card__spacer[data-v-8c187da1] {\n  flex: 1 1 auto;\n}\n.card__body[data-v-8c187da1] {\n  flex: 1 1 auto;\n  min-height: 0;\n}\n.card__body--padded[data-v-8c187da1] {\n  padding: 10px 12px;\n}\n\n.check[data-v-e080554d] {\n  display: flex;\n  align-items: baseline;\n  gap: 7px;\n  margin-bottom: 6px;\n}\n.check--off[data-v-e080554d] {\n  opacity: 0.5;\n}\n.check__box[data-v-e080554d] {\n  width: 13px;\n  height: 13px;\n  flex: none;\n  accent-color: var(--color-accent);\n  cursor: pointer;\n}\n.check__box[data-v-e080554d]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.check__label[data-v-e080554d] {\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n  cursor: pointer;\n}\n.check__hint[data-v-e080554d] {\n  display: block;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n\n.chip[data-v-30700fa0] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 1px 7px;\n  font-family: var(--font-sans);\n  font-size: var(--text-xs);\n  line-height: 1.5;\n  border-radius: var(--radius-xs);\n  white-space: nowrap;\n}\n.chip--num[data-v-30700fa0] {\n  font-family: var(--font-mono);\n  font-variant-numeric: tabular-nums;\n}\n.chip--neutral[data-v-30700fa0] {\n  color: var(--color-dim);\n  background-color: var(--color-raised);\n  border: 1px solid var(--color-divider);\n}\n.chip--accent[data-v-30700fa0] {\n  color: var(--color-accent);\n  background-color: color-mix(in srgb, var(--color-accent) 14%, transparent);\n}\n.chip--ok[data-v-30700fa0] {\n  color: var(--color-ok);\n  background-color: color-mix(in srgb, var(--color-ok) 14%, transparent);\n}\n.chip--warn[data-v-30700fa0] {\n  color: var(--color-warn);\n  background-color: color-mix(in srgb, var(--color-warn) 14%, transparent);\n}\n.chip--err[data-v-30700fa0] {\n  color: var(--color-err);\n  background-color: color-mix(in srgb, var(--color-err) 14%, transparent);\n}\n.chip__x[data-v-30700fa0] {\n  font-size: 9px;\n  color: inherit;\n  background: none;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  opacity: 0.7;\n}\n.chip__x[data-v-30700fa0]:hover {\n  opacity: 1;\n}\n\n.field[data-v-0c4cf022] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 7px;\n}\n.field--stacked[data-v-0c4cf022] {\n  flex-direction: column;\n  align-items: stretch;\n  gap: 3px;\n}\n.field__label[data-v-0c4cf022] {\n  width: 112px;\n  flex: none;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.field--stacked .field__label[data-v-0c4cf022] {\n  width: auto;\n}\n.field__control[data-v-0c4cf022] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.field__hint[data-v-0c4cf022] {\n  margin: 3px 0 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.row[data-v-0c4cf022] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.picker[data-v-0c4cf022] {\n  width: 26px;\n  height: 26px;\n  flex: none;\n  padding: 2px;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n  cursor: pointer;\n}\n.picker[data-v-0c4cf022]:focus-visible,\n.hex[data-v-0c4cf022]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.hex[data-v-0c4cf022] {\n  flex: 1 1 auto;\n  min-width: 0;\n  height: 26px;\n  padding: 0 8px;\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n}\n.picker[data-v-0c4cf022]:disabled,\n.hex[data-v-0c4cf022]:disabled {\n  opacity: 0.5;\n}\n\n.field[data-v-3afdb10c] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 7px;\n}\n.field--stacked[data-v-3afdb10c] {\n  flex-direction: column;\n  align-items: stretch;\n  gap: 3px;\n}\n.field__label[data-v-3afdb10c] {\n  width: 112px;\n  flex: none;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.field--stacked .field__label[data-v-3afdb10c] {\n  width: auto;\n}\n.field__required[data-v-3afdb10c] {\n  color: var(--color-err);\n}\n.field__control[data-v-3afdb10c] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.field__hint[data-v-3afdb10c],\n.field__error[data-v-3afdb10c] {\n  margin: 3px 0 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.field__error[data-v-3afdb10c] {\n  color: var(--color-err);\n}\n.input[data-v-3afdb10c] {\n  width: 100%;\n  height: 26px;\n  padding: 0 8px;\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n  font-variant-numeric: tabular-nums;\n  color: var(--color-fg);\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n}\n.input--invalid[data-v-3afdb10c] {\n  border-color: var(--color-err);\n}\n.input[data-v-3afdb10c]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: -1px;\n}\n.input[data-v-3afdb10c]:disabled {\n  opacity: 0.5;\n}\n\n.rule[data-v-521e9319] {\n  height: 1px;\n  margin: 12px 0;\n  background-color: var(--color-divider);\n}\n.rule--labelled[data-v-521e9319] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: auto;\n  background: none;\n  margin: 14px 0 7px;\n}\n.rule--labelled[data-v-521e9319]::before,\n.rule--labelled[data-v-521e9319]::after {\n  content: '';\n  height: 1px;\n  background-color: var(--color-divider);\n}\n.rule--labelled[data-v-521e9319]::before {\n  width: 10px;\n  flex: none;\n}\n.rule--labelled[data-v-521e9319]::after {\n  flex: 1 1 auto;\n}\n.rule__label[data-v-521e9319] {\n  font-family: var(--font-sans);\n  font-size: var(--text-xs);\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--color-dim);\n}\n\n.field[data-v-1a8ee938] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 7px;\n}\n.field--stacked[data-v-1a8ee938] {\n  flex-direction: column;\n  align-items: stretch;\n  gap: 3px;\n}\n.field__label[data-v-1a8ee938] {\n  width: 112px;\n  flex: none;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.field--stacked .field__label[data-v-1a8ee938] {\n  width: auto;\n}\n.field__required[data-v-1a8ee938] {\n  color: var(--color-err);\n}\n.field__control[data-v-1a8ee938] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.field__hint[data-v-1a8ee938],\n.field__error[data-v-1a8ee938] {\n  margin: 3px 0 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-xs);\n  line-height: 1.4;\n  color: var(--color-dim);\n}\n.field__error[data-v-1a8ee938] {\n  color: var(--color-err);\n}\n\n.fw[data-v-b6b4a10b] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: var(--color-pane);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-md, 4px);\n  box-shadow: var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%));\n}\n\n/* Fastened to a side: square against the edge it holds, and no border\n   shared with it */\n.fw--docked[data-v-b6b4a10b] {\n  border-radius: 0;\n}\n.fw--docked.fw--left[data-v-b6b4a10b] {\n  border-left: 0;\n}\n.fw--docked.fw--right[data-v-b6b4a10b] {\n  border-right: 0;\n}\n.fw--docked .fw__grip[data-v-b6b4a10b] {\n  cursor: ew-resize;\n}\n\n/* The whole bar is the handle, so there is nothing small to aim at */\n.fw__bar[data-v-b6b4a10b] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: none;\n  height: 28px;\n  padding: 0 4px 0 10px;\n  border-bottom: 1px solid var(--color-divider);\n  cursor: grab;\n  touch-action: none;\n  user-select: none;\n}\n.fw__bar[data-v-b6b4a10b]:active {\n  cursor: grabbing;\n}\n.fw__bar[data-v-b6b4a10b]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: -2px;\n}\n.fw__title[data-v-b6b4a10b] {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--text-xs, 11px);\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--color-dim);\n}\n.fw__act[data-v-b6b4a10b] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  font-size: 14px;\n  line-height: 1;\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  border-radius: var(--radius-xs, 3px);\n  cursor: pointer;\n}\n.fw__act[data-v-b6b4a10b]:hover {\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n}\n.fw__act[data-v-b6b4a10b]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.fw__body[data-v-b6b4a10b] {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n}\n\n/* Bottom right corner, where a window is resized */\n.fw__grip[data-v-b6b4a10b] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 14px;\n  height: 14px;\n  cursor: nwse-resize;\n  touch-action: none;\n}\n.fw__grip[data-v-b6b4a10b]::after {\n  content: '';\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  width: 6px;\n  height: 6px;\n  border-right: 2px solid var(--color-outline, #3a4756);\n  border-bottom: 2px solid var(--color-outline, #3a4756);\n}\n\n.icon[data-v-15dffeec] {\n  font-family: 'Material Icons', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: normal;\n  white-space: nowrap;\n  direction: ltr;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: 'liga';\n  color: inherit;\n}\n.icon--xs[data-v-15dffeec] { font-size: 12px;\n}\n.icon--sm[data-v-15dffeec] { font-size: 14px;\n}\n.icon--md[data-v-15dffeec] { font-size: 16px;\n}\n.icon--lg[data-v-15dffeec] { font-size: 20px;\n}\n\n.picker[data-v-c86d0906] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.picker__current[data-v-c86d0906] {\n  display: grid;\n  flex: none;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  color: var(--color-accent);\n  background-color: var(--color-sunken);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n}\n.picker__current[data-v-c86d0906]:hover:not(:disabled) {\n  border-color: var(--color-accent);\n}\n.picker__current[data-v-c86d0906]:disabled {\n  cursor: default;\n  opacity: 0.5;\n}\n.picker__name[data-v-c86d0906] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  font-size: 0.85rem;\n  color: var(--color-dim);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.picker__clear[data-v-c86d0906] {\n  flex: none;\n  padding: 2px 6px;\n  font: inherit;\n  font-size: 0.78rem;\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n.picker__clear[data-v-c86d0906]:hover {\n  color: var(--color-fg);\n  text-decoration: underline;\n}\n.picker__catch[data-v-c86d0906] {\n  position: fixed;\n  inset: 0;\n  z-index: 50000;\n}\n.sheet[data-v-c86d0906] {\n  position: fixed;\n  z-index: 50001;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: min(460px, calc(100vw - 32px));\n  max-height: min(70vh, 560px);\n  padding: 12px;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-e3);\n  transform: translate(-50%, -50%);\n}\n.sheet__search input[data-v-c86d0906],\n.sheet__own input[data-v-c86d0906] {\n  width: 100%;\n  padding: 6px 10px;\n  font: inherit;\n  color: var(--color-fg);\n  background-color: var(--color-sunken);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-sm);\n}\n.sheet__grid[data-v-c86d0906] {\n  display: grid;\n  flex: 1 1 auto;\n  grid-template-columns: repeat(auto-fill, minmax(44px, 1fr));\n  gap: 4px;\n  margin: 0;\n  padding: 0;\n  overflow-y: auto;\n  list-style: none;\n}\n.sheet__item[data-v-c86d0906] {\n  display: grid;\n  place-items: center;\n  width: 100%;\n  aspect-ratio: 1;\n  color: var(--color-fg);\n  background: none;\n  border: 1px solid transparent;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n}\n.sheet__item[data-v-c86d0906]:hover {\n  background-color: var(--color-sunken);\n  border-color: var(--color-outline);\n}\n.sheet__item--on[data-v-c86d0906] {\n  color: var(--color-accent);\n  border-color: var(--color-accent);\n}\n.sheet__none[data-v-c86d0906] {\n  flex: 1 1 auto;\n  margin: 0;\n  padding: 16px 4px;\n  font-size: 0.85rem;\n  color: var(--color-dim);\n}\n.sheet__own[data-v-c86d0906] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 10px;\n  border-top: 1px solid var(--color-divider, var(--color-outline));\n}\n.sheet__own-label[data-v-c86d0906] {\n  flex: none;\n  font-size: 0.8rem;\n  color: var(--color-dim);\n}\n.sheet__own input[data-v-c86d0906] {\n  flex: 1;\n  min-width: 0;\n}\n.sheet__preview[data-v-c86d0906] {\n  display: grid;\n  flex: none;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  color: var(--color-accent);\n}\n.sheet__take[data-v-c86d0906] {\n  flex: none;\n  padding: 5px 10px;\n  font: inherit;\n  font-size: 0.82rem;\n  color: var(--color-fg);\n  background-color: var(--color-sunken);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n}\n.sheet__take[data-v-c86d0906]:disabled {\n  cursor: default;\n  opacity: 0.45;\n}\n.sheet__warn[data-v-c86d0906] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: var(--color-err);\n}\n\n.field[data-v-a5fd75e2] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 7px;\n}\n.field--stacked[data-v-a5fd75e2] {\n  flex-direction: column;\n  align-items: stretch;\n  gap: 3px;\n}\n.field__label[data-v-a5fd75e2] {\n  width: 112px;\n  flex: none;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.field--stacked .field__label[data-v-a5fd75e2] {\n  width: auto;\n}\n.field__required[data-v-a5fd75e2] {\n  color: var(--color-err);\n}\n.field__control[data-v-a5fd75e2] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.field__hint[data-v-a5fd75e2],\n.field__error[data-v-a5fd75e2] {\n  margin: 3px 0 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-xs);\n  line-height: 1.4;\n  color: var(--color-dim);\n}\n.field__error[data-v-a5fd75e2] {\n  color: var(--color-err);\n}\n.shell[data-v-a5fd75e2] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 8px;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n}\n.shell[data-v-a5fd75e2]:focus-within {\n  border-color: var(--color-accent);\n  outline: 1px solid var(--color-accent);\n}\n.shell--invalid[data-v-a5fd75e2] {\n  border-color: var(--color-err);\n}\n.shell--off[data-v-a5fd75e2] {\n  opacity: 0.5;\n}\n.shell--sm[data-v-a5fd75e2] { height: 22px;\n}\n.shell--md[data-v-a5fd75e2] { height: 26px;\n}\n.shell--lg[data-v-a5fd75e2] { height: 32px;\n}\n.shell[data-v-a5fd75e2]:has(.input--area) {\n  height: auto;\n  padding: 5px 8px;\n}\n.input[data-v-a5fd75e2] {\n  flex: 1 1 auto;\n  min-width: 0;\n  padding: 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n  background: none;\n  border: 0;\n  outline: none;\n}\n.shell--lg .input[data-v-a5fd75e2] {\n  font-size: var(--text-base);\n}\n\n/* Figures line up in a column and a changed digit stays in place */\n.input--num[data-v-a5fd75e2] {\n  font-family: var(--font-mono);\n  font-variant-numeric: tabular-nums;\n}\n.input--area[data-v-a5fd75e2] {\n  resize: vertical;\n  line-height: 1.45;\n}\n.input[data-v-a5fd75e2]::placeholder {\n  color: var(--color-dim);\n  opacity: 0.75;\n}\n.suffix[data-v-a5fd75e2] {\n  flex: none;\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n\n.scrim[data-v-03f9e875] {\n  position: fixed;\n  inset: 0;\n  z-index: 40000;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  background-color: color-mix(in srgb, var(--color-canvas) 62%, transparent);\n  backdrop-filter: blur(4px);\n}\n.dialog[data-v-03f9e875] {\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-e3);\n  overflow: hidden;\n}\n.dialog--sm[data-v-03f9e875] { width: 380px;\n}\n.dialog--md[data-v-03f9e875] { width: 560px;\n}\n.dialog--lg[data-v-03f9e875] { width: 840px;\n}\n.dialog__head[data-v-03f9e875] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: none;\n  padding: 9px 12px;\n  border-bottom: 1px solid var(--color-divider);\n}\n.dialog__title[data-v-03f9e875] {\n  margin: 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.dialog__close[data-v-03f9e875] {\n  margin-left: auto;\n  width: 22px;\n  height: 22px;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  border-radius: var(--radius-xs);\n  cursor: pointer;\n}\n.dialog__close[data-v-03f9e875]:hover {\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n}\n.dialog__close[data-v-03f9e875]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.dialog__body[data-v-03f9e875] {\n  flex: 1 1 auto;\n  min-height: 0;\n  padding: 14px 12px;\n  overflow-y: auto;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n}\n.dialog__foot[data-v-03f9e875] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  flex: none;\n  padding: 9px 12px;\n  border-top: 1px solid var(--color-divider);\n}\n\n.field[data-v-da414860] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin-bottom: 7px;\n}\n.field--stacked[data-v-da414860] {\n  flex-direction: column;\n  gap: 4px;\n}\n.field__label[data-v-da414860] {\n  flex: none;\n  width: 120px;\n  padding-top: 2px;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.field--stacked .field__label[data-v-da414860] {\n  width: auto;\n}\n.field__required[data-v-da414860] {\n  color: var(--color-err);\n}\n.field__control[data-v-da414860] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.choices[data-v-da414860] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.choices--inline[data-v-da414860] {\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.choice[data-v-da414860] {\n  display: flex;\n  align-items: baseline;\n  gap: 7px;\n  cursor: pointer;\n}\n.choice--off[data-v-da414860] {\n  opacity: 0.5;\n  cursor: default;\n}\n.choice__dot[data-v-da414860] {\n  width: 13px;\n  height: 13px;\n  flex: none;\n  accent-color: var(--color-accent);\n  cursor: inherit;\n}\n.choice__dot[data-v-da414860]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.choice__label[data-v-da414860] {\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n}\n.field__error[data-v-da414860] {\n  margin: 3px 0 0;\n  font-size: var(--text-xs);\n  color: var(--color-err);\n}\n.field__hint[data-v-da414860] {\n  margin: 3px 0 0;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n\n.field[data-v-940042b2] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 7px;\n}\n.field--stacked[data-v-940042b2] {\n  flex-direction: column;\n  align-items: stretch;\n  gap: 3px;\n}\n.field__label[data-v-940042b2] {\n  width: 112px;\n  flex: none;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.field--stacked .field__label[data-v-940042b2] {\n  width: auto;\n}\n.field__required[data-v-940042b2] {\n  color: var(--color-err);\n}\n.field__control[data-v-940042b2] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.field__hint[data-v-940042b2],\n.field__error[data-v-940042b2] {\n  margin: 3px 0 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-xs);\n  line-height: 1.4;\n  color: var(--color-dim);\n}\n.field__error[data-v-940042b2] {\n  color: var(--color-err);\n}\n.shell[data-v-940042b2] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0 8px;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n}\n.shell[data-v-940042b2]:focus-within {\n  border-color: var(--color-accent);\n  outline: 1px solid var(--color-accent);\n}\n.shell--invalid[data-v-940042b2] {\n  border-color: var(--color-err);\n}\n.shell--off[data-v-940042b2] {\n  opacity: 0.5;\n}\n.shell--sm[data-v-940042b2] { height: 22px;\n}\n.shell--md[data-v-940042b2] { height: 26px;\n}\n.shell--lg[data-v-940042b2] { height: 32px;\n}\n.shell[data-v-940042b2]:has(.select--many) {\n  height: auto;\n  padding: 0 2px;\n}\n.select[data-v-940042b2] {\n  flex: 1 1 auto;\n  min-width: 0;\n  height: 100%;\n  padding: 0 14px 0 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n  background: none;\n  border: 0;\n  outline: none;\n  appearance: none;\n  cursor: pointer;\n}\n.shell--lg .select[data-v-940042b2] {\n  font-size: var(--text-base);\n}\n\n/* The list itself is drawn by the browser, which does not inherit the\n   panel's colours - so the options get them explicitly. */\n.select option[data-v-940042b2] {\n  color: var(--color-fg);\n  background-color: var(--color-pane);\n}\n\n/*\n * The headings need the same treatment, and one more thing: a browser\n * passes an optgroup's colour down to the options inside it, so the\n * options take theirs back below. Without this the heading keeps the\n * user agent's own colour and disappears into a dark list.\n */\n.select optgroup[data-v-940042b2] {\n  color: var(--color-dim);\n  background-color: var(--color-pane);\n  font-weight: 600;\n  font-style: normal;\n}\n.select optgroup option[data-v-940042b2] {\n  color: var(--color-fg);\n}\n\n/* A list rather than one line, so the shell grows with it. */\n.select--many[data-v-940042b2] {\n  height: auto;\n  padding: 4px 0;\n}\n.chevron[data-v-940042b2] {\n  position: absolute;\n  right: 7px;\n  font-size: 9px;\n  color: var(--color-dim);\n  pointer-events: none;\n}\n\n.field[data-v-ed7d97ce] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 7px;\n}\n.field--stacked[data-v-ed7d97ce] {\n  flex-direction: column;\n  align-items: stretch;\n  gap: 3px;\n}\n.field__label[data-v-ed7d97ce] {\n  width: 112px;\n  flex: none;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.field--stacked .field__label[data-v-ed7d97ce] {\n  width: auto;\n}\n.field__control[data-v-ed7d97ce] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.row[data-v-ed7d97ce] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.range[data-v-ed7d97ce] {\n  flex: 1 1 auto;\n  min-width: 0;\n  accent-color: var(--color-accent);\n  cursor: pointer;\n}\n.range[data-v-ed7d97ce]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 2px;\n}\n.num[data-v-ed7d97ce] {\n  width: 62px;\n  flex: none;\n  height: 22px;\n  padding: 0 6px;\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  font-variant-numeric: tabular-nums;\n  color: var(--color-fg);\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n}\n.num[data-v-ed7d97ce]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.suffix[data-v-ed7d97ce] {\n  flex: none;\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.range[data-v-ed7d97ce]:disabled,\n.num[data-v-ed7d97ce]:disabled {\n  opacity: 0.5;\n}\n\n.sw[data-v-70940a00] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.sw--off[data-v-70940a00] {\n  opacity: 0.5;\n}\n.sw__track[data-v-70940a00] {\n  position: relative;\n  width: 28px;\n  height: 15px;\n  flex: none;\n  padding: 0;\n  background-color: var(--color-outline);\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.sw__track.on[data-v-70940a00] {\n  background-color: var(--color-accent);\n}\n.sw__track[data-v-70940a00]:disabled {\n  cursor: default;\n}\n.sw__track[data-v-70940a00]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 2px;\n}\n.sw__knob[data-v-70940a00] {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background-color: var(--color-pane);\n  transition: left 0.12s ease;\n}\n.sw__track.on .sw__knob[data-v-70940a00] {\n  left: 15px;\n}\n@media (prefers-reduced-motion: reduce) {\n.sw__knob[data-v-70940a00] {\n    transition: none;\n}\n}\n.sw__label[data-v-70940a00] {\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n  cursor: pointer;\n}\n\n.table[data-v-925340b8] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n}\ntable[data-v-925340b8] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n/*\n * The head stays put: the point of the thing is to scroll through rows\n * and still know which column is which.\n */\nth[data-v-925340b8] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  padding: 6px 10px;\n  text-align: left;\n  font-weight: 500;\n  white-space: nowrap;\n  color: var(--color-dim);\n  background-color: var(--color-raised);\n  border-bottom: 1px solid var(--color-divider);\n}\ntd[data-v-925340b8] {\n  padding: 5px 10px;\n  max-width: 28ch;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--color-divider);\n}\ntbody tr[data-v-925340b8]:hover {\n  background-color: color-mix(in srgb, var(--color-pane) 60%, transparent);\n}\n.row--pick[data-v-925340b8] {\n  cursor: pointer;\n}\n\n/* Marked by a rule down its side rather than a fill: a fill of the accent\n   would fight the hover, and both have to be readable at once. */\n.row--on td[data-v-925340b8]:first-child {\n  box-shadow: inset 2px 0 0 var(--color-accent);\n}\n.row--on td[data-v-925340b8] {\n  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);\n}\n.table__empty[data-v-925340b8] {\n  margin: 0;\n  padding: 14px 10px;\n  color: var(--color-dim);\n}\n\n.tabs[data-v-f7c65d26] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  gap: 1px;\n  min-height: var(--spacing-panelHeader);\n  padding: 0 6px;\n  border-bottom: 1px solid var(--color-divider);\n}\n.tab[data-v-f7c65d26] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  height: var(--spacing-panelHeader);\n  padding: 0 10px;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n.tab[data-v-f7c65d26]:hover:not(:disabled) {\n  color: var(--color-fg);\n}\n.tab[data-v-f7c65d26]:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n.tab.on[data-v-f7c65d26] {\n  color: var(--color-fg);\n  font-weight: 600;\n}\n\n/* Sits on the panel edge, over the divider */\n.tab.on[data-v-f7c65d26]::after {\n  content: '';\n  position: absolute;\n  left: 7px;\n  right: 7px;\n  bottom: -1px;\n  height: 2px;\n  background-color: var(--color-accent);\n  border-radius: 2px;\n}\n.tab[data-v-f7c65d26]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: -2px;\n}\n.tab__count[data-v-f7c65d26] {\n  font-family: var(--font-mono);\n  font-size: 9.5px;\n  font-variant-numeric: tabular-nums;\n  opacity: 0.8;\n}\n";})();
import { defineComponent, createElementBlock, openBlock, normalizeClass, createCommentVNode, renderSlot, createElementVNode, toDisplayString, mergeModels, useModel, useId, ref, watchEffect, withDirectives, unref, vModelCheckbox, createTextVNode, computed, vModelText, vModelDynamic, reactive, watch, onMounted, onBeforeUnmount, normalizeStyle, withKeys, withModifiers, nextTick, createBlock, withCtx, createVNode, Teleport, Fragment, renderList, vModelRadio, vModelSelect } from "vue";
const _hoisted_1$h = ["type", "disabled", "aria-busy"];
const _hoisted_2$e = {
  key: 0,
  class: "btn__spinner",
  "aria-hidden": "true"
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "DButton",
  props: {
    intent: { default: "default" },
    size: { default: "md" },
    disabled: { type: Boolean, default: false },
    busy: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    type: { default: "button" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: __props.type,
        class: normalizeClass([
          "btn",
          `btn--${__props.intent}`,
          `btn--${__props.size}`,
          { "btn--block": __props.block, "btn--busy": __props.busy }
        ]),
        disabled: __props.disabled || __props.busy,
        "aria-busy": __props.busy || void 0
      }, [
        __props.busy ? (openBlock(), createElementBlock("span", _hoisted_2$e)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 10, _hoisted_1$h);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const DButton = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-5b01af26"]]);
const _hoisted_1$g = {
  key: 0,
  class: "card__head"
};
const _hoisted_2$d = { class: "card__title" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "DCard",
  props: {
    title: {},
    padded: { type: Boolean, default: true },
    interactive: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["card", { "card--interactive": __props.interactive }])
      }, [
        __props.title || _ctx.$slots.header ? (openBlock(), createElementBlock("header", _hoisted_1$g, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createElementVNode("h3", _hoisted_2$d, toDisplayString(__props.title), 1)
          ], true),
          _cache[0] || (_cache[0] = createElementVNode("span", { class: "card__spacer" }, null, -1)),
          renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["card__body", { "card__body--padded": __props.padded }])
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)
      ], 2);
    };
  }
});
const DCard = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-8c187da1"]]);
const _hoisted_1$f = ["id", "disabled"];
const _hoisted_2$c = ["for"];
const _hoisted_3$c = {
  key: 0,
  class: "check__hint"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "DCheckbox",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    hint: {},
    disabled: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false }
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const id = useId();
    const box = ref(null);
    watchEffect(() => {
      if (box.value) box.value.indeterminate = props.indeterminate;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["check", { "check--off": __props.disabled }])
      }, [
        withDirectives(createElementVNode("input", {
          id: unref(id),
          ref_key: "box",
          ref: box,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
          class: "check__box",
          type: "checkbox",
          disabled: __props.disabled
        }, null, 8, _hoisted_1$f), [
          [vModelCheckbox, model.value]
        ]),
        createElementVNode("label", {
          for: unref(id),
          class: "check__label"
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.label), 1)
          ], true),
          __props.hint ? (openBlock(), createElementBlock("span", _hoisted_3$c, toDisplayString(__props.hint), 1)) : createCommentVNode("", true)
        ], 8, _hoisted_2$c)
      ], 2);
    };
  }
});
const DCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-e080554d"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "DChip",
  props: {
    tone: { default: "neutral" },
    numeric: { type: Boolean, default: false },
    removable: { type: Boolean, default: false }
  },
  emits: ["remove"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["chip", `chip--${__props.tone}`, { "chip--num": __props.numeric }])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        __props.removable ? (openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          class: "chip__x",
          "aria-label": "Entfernen",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("remove"))
        }, " ✕ ")) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const DChip = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-30700fa0"]]);
const _hoisted_1$e = ["for"];
const _hoisted_2$b = { class: "field__control" };
const _hoisted_3$b = { class: "row" };
const _hoisted_4$a = ["id", "value", "disabled", "aria-label"];
const _hoisted_5$a = ["disabled", "aria-label"];
const _hoisted_6$6 = {
  key: 0,
  class: "field__hint"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "DColorInput",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    hint: {},
    disabled: { type: Boolean, default: false },
    stacked: { type: Boolean, default: false }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const id = useId();
    const pickable = computed(() => {
      const value = (model.value ?? "").trim();
      if (/^#[0-9a-f]{6}$/i.test(value)) return value;
      if (/^#[0-9a-f]{3}$/i.test(value)) {
        return "#" + [...value.slice(1)].map((c) => c + c).join("");
      }
      return "#000000";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["field", { "field--stacked": __props.stacked }])
      }, [
        __props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: "field__label",
          for: unref(id)
        }, toDisplayString(__props.label), 9, _hoisted_1$e)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2$b, [
          createElementVNode("div", _hoisted_3$b, [
            createElementVNode("input", {
              id: unref(id),
              class: "picker",
              type: "color",
              value: pickable.value,
              disabled: __props.disabled,
              "aria-label": __props.label ?? "Farbe",
              onInput: _cache[0] || (_cache[0] = ($event) => model.value = $event.target.value)
            }, null, 40, _hoisted_4$a),
            withDirectives(createElementVNode("input", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value = $event),
              class: "hex",
              type: "text",
              spellcheck: "false",
              disabled: __props.disabled,
              "aria-label": __props.label ? `${__props.label} als Hexwert` : "Farbe als Hexwert"
            }, null, 8, _hoisted_5$a), [
              [vModelText, model.value]
            ])
          ]),
          __props.hint ? (openBlock(), createElementBlock("p", _hoisted_6$6, toDisplayString(__props.hint), 1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const DColorInput = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-0c4cf022"]]);
const _hoisted_1$d = ["for"];
const _hoisted_2$a = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
};
const _hoisted_3$a = { class: "field__control" };
const _hoisted_4$9 = ["id", "type", "disabled", "required", "min", "max", "aria-invalid"];
const _hoisted_5$9 = {
  key: 0,
  class: "field__error",
  role: "alert"
};
const _hoisted_6$5 = {
  key: 1,
  class: "field__hint"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "DDateInput",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    mode: { default: "date" },
    hint: {},
    error: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    stacked: { type: Boolean, default: false },
    min: {},
    max: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const id = useId();
    const nativeType = { date: "date", time: "time", datetime: "datetime-local" };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["field", { "field--stacked": __props.stacked, "field--invalid": !!__props.error }])
      }, [
        __props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: "field__label",
          for: unref(id)
        }, [
          createTextVNode(toDisplayString(__props.label) + " ", 1),
          __props.required ? (openBlock(), createElementBlock("span", _hoisted_2$a, "*")) : createCommentVNode("", true)
        ], 8, _hoisted_1$d)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3$a, [
          withDirectives(createElementVNode("input", {
            id: unref(id),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
            class: normalizeClass(["input", { "input--invalid": !!__props.error }]),
            type: nativeType[__props.mode],
            disabled: __props.disabled,
            required: __props.required,
            min: __props.min,
            max: __props.max,
            "aria-invalid": !!__props.error || void 0
          }, null, 10, _hoisted_4$9), [
            [vModelDynamic, model.value]
          ]),
          __props.error ? (openBlock(), createElementBlock("p", _hoisted_5$9, toDisplayString(__props.error), 1)) : __props.hint ? (openBlock(), createElementBlock("p", _hoisted_6$5, toDisplayString(__props.hint), 1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const DDateInput = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-3afdb10c"]]);
const _hoisted_1$c = {
  key: 0,
  class: "rule__label"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DDivider",
  props: {
    label: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["rule", { "rule--labelled": __props.label }]),
        role: "separator"
      }, [
        __props.label ? (openBlock(), createElementBlock("span", _hoisted_1$c, toDisplayString(__props.label), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const DDivider = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-521e9319"]]);
const _hoisted_1$b = ["for"];
const _hoisted_2$9 = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
};
const _hoisted_3$9 = { class: "field__control" };
const _hoisted_4$8 = {
  key: 0,
  class: "field__error",
  role: "alert"
};
const _hoisted_5$8 = {
  key: 1,
  class: "field__hint"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "DField",
  props: {
    label: {},
    for: {},
    hint: {},
    error: {},
    required: { type: Boolean, default: false },
    stacked: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["field", { "field--stacked": __props.stacked, "field--invalid": !!__props.error }])
      }, [
        __props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: "field__label",
          for: _ctx.$props.for
        }, [
          createTextVNode(toDisplayString(__props.label) + " ", 1),
          __props.required ? (openBlock(), createElementBlock("span", _hoisted_2$9, "*")) : createCommentVNode("", true)
        ], 8, _hoisted_1$b)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3$9, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          __props.error ? (openBlock(), createElementBlock("p", _hoisted_4$8, toDisplayString(__props.error), 1)) : __props.hint ? (openBlock(), createElementBlock("p", _hoisted_5$8, toDisplayString(__props.hint), 1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const DField = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-1a8ee938"]]);
const entries = reactive(/* @__PURE__ */ new Map());
let counter = 0;
const widths = reactive({ left: 240, right: 240 });
function dockWidth(side) {
  return widths[side];
}
function setDockWidth(side, width) {
  widths[side] = width;
}
function joinDock(id, side, want, min) {
  const existing = entries.get(id);
  entries.set(id, { side, want, min, seq: existing?.seq ?? counter++ });
}
function leaveDock(id) {
  entries.delete(id);
}
function onSide(side) {
  return [...entries.entries()].filter(([, e]) => e.side === side).sort((a, b) => a[1].seq - b[1].seq);
}
function dockSlot(id, available) {
  const entry = entries.get(id);
  if (!entry) return null;
  const column = onSide(entry.side);
  if (!column.length) return null;
  const floorSum = column.reduce((sum, [, e]) => sum + e.min, 0);
  const scale = floorSum > available && floorSum > 0 ? available / floorSum : 1;
  const flexible = Math.max(0, available - floorSum * scale);
  const wanted = column.reduce((sum, [, e]) => sum + Math.max(1, e.want), 0);
  let y = 0;
  for (let i = 0; i < column.length; i++) {
    const [key, e] = column[i];
    const last = i === column.length - 1;
    const share = last ? Math.max(0, available - y) : Math.round(e.min * scale + flexible * Math.max(1, e.want) / wanted);
    if (key === id) return { y, h: share };
    y += share;
  }
  return null;
}
function dockCount(side) {
  return onSide(side).length;
}
const _hoisted_1$a = ["aria-label"];
const _hoisted_2$8 = ["aria-label"];
const _hoisted_3$8 = { class: "fw__title" };
const _hoisted_4$7 = ["aria-label"];
const _hoisted_5$7 = { class: "fw__body" };
const _hoisted_6$4 = ["aria-label"];
const SNAP = 24;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DFloatingWindow",
  props: {
    title: {},
    initial: {},
    rememberAs: {},
    resizable: { type: Boolean, default: true },
    dockable: { type: Boolean, default: false },
    minWidth: { default: 160 },
    maxWidth: { default: 480 },
    minHeight: { default: 120 },
    closable: { type: Boolean, default: true },
    layer: { default: 2e4 }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const canDock = computed(() => props.dockable || props.initial?.dock != null);
    const DEFAULT = { x: 16, y: 16, w: 240, h: 320, dock: null, freeY: 16, freeH: 320 };
    function read() {
      const start = { ...DEFAULT, ...props.initial };
      start.freeY = start.y;
      start.freeH = start.h;
      if (!props.rememberAs) return start;
      try {
        const raw = localStorage.getItem(props.rememberAs);
        if (!raw) return start;
        const d = JSON.parse(raw);
        const num = (v, fallback) => Number.isFinite(v) ? v : fallback;
        return {
          x: num(d?.x, start.x),
          y: num(d?.y, start.y),
          w: num(d?.w, start.w),
          h: num(d?.h, start.h),
          dock: d?.dock === "left" || d?.dock === "right" ? d.dock : null,
          freeY: num(d?.freeY, start.y),
          freeH: num(d?.freeH, start.h)
        };
      } catch {
        return start;
      }
    }
    const place = ref(read());
    const root = ref();
    function persist() {
      if (!props.rememberAs) return;
      try {
        localStorage.setItem(props.rememberAs, JSON.stringify(place.value));
      } catch {
      }
    }
    function clampW(w) {
      return Math.min(props.maxWidth, Math.max(props.minWidth, w));
    }
    function bounds() {
      const parent = root.value?.offsetParent;
      return {
        width: parent?.clientWidth ?? window.innerWidth,
        height: parent?.clientHeight ?? window.innerHeight
      };
    }
    const dockId = computed(() => props.rememberAs ?? props.title);
    const room = ref({ width: 0, height: 0 });
    function applySlot() {
      const side = place.value.dock;
      if (!side) return;
      const slot = dockSlot(dockId.value, room.value.height);
      if (!slot) return;
      const w = dockWidth(side);
      place.value = {
        ...place.value,
        w,
        x: side === "left" ? 0 : Math.max(0, room.value.width - w),
        y: slot.y,
        h: slot.h
      };
    }
    watch(
      () => {
        const side = place.value.dock;
        if (!side) return "";
        return `${dockCount(side)}:${dockWidth(side)}`;
      },
      (now) => {
        if (!now) return;
        room.value = bounds();
        applySlot();
      }
    );
    function dockTo(side, b) {
      const p = place.value;
      room.value = b;
      const freeY = p.dock ? p.freeY : p.y;
      const freeH = p.dock ? p.freeH : p.h;
      if (!p.dock) setDockWidth(side, clampW(p.w));
      joinDock(dockId.value, side, freeH, props.minHeight);
      place.value = { ...p, dock: side, freeY, freeH };
      applySlot();
    }
    function undock() {
      const p = place.value;
      if (!p.dock) return;
      leaveDock(dockId.value);
      place.value = { ...p, y: p.freeY, h: p.freeH, dock: null };
    }
    let gesture = null;
    function onMove(e) {
      if (!gesture) return;
      const b = bounds();
      if (gesture.kind === "move") {
        const w2 = place.value.w;
        const x = Math.min(
          Math.max(0, gesture.fromX + (e.clientX - gesture.startX)),
          Math.max(0, b.width - w2)
        );
        const y = Math.min(
          Math.max(0, gesture.fromY + (e.clientY - gesture.startY)),
          Math.max(0, b.height - 28)
        );
        if (canDock.value && x <= SNAP) dockTo("left", b);
        else if (canDock.value && x + w2 >= b.width - SNAP) dockTo("right", b);
        else {
          undock();
          place.value = { ...place.value, x, y };
        }
        return;
      }
      const w = clampW(gesture.fromW + (e.clientX - gesture.startX));
      if (place.value.dock) {
        room.value = b;
        setDockWidth(place.value.dock, w);
        applySlot();
        return;
      }
      place.value = {
        ...place.value,
        w,
        h: Math.max(props.minHeight, gesture.fromH + (e.clientY - gesture.startY))
      };
    }
    function endGesture() {
      if (gesture) persist();
      gesture = null;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", endGesture);
      document.body.style.userSelect = "";
    }
    function begin(g) {
      gesture = g;
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", endGesture);
      document.body.style.userSelect = "none";
    }
    const startMove = (e) => begin({ kind: "move", startX: e.clientX, startY: e.clientY, fromX: place.value.x, fromY: place.value.y });
    const startResize = (e) => begin({ kind: "size", startX: e.clientX, startY: e.clientY, fromW: place.value.w, fromH: place.value.h });
    function nudge(dx, dy) {
      const b = bounds();
      const w = place.value.w;
      const x = Math.min(Math.max(0, place.value.x + dx), Math.max(0, b.width - w));
      if (canDock.value && x <= SNAP) dockTo("left", b);
      else if (canDock.value && x + w >= b.width - SNAP) dockTo("right", b);
      else {
        undock();
        place.value = {
          ...place.value,
          x,
          y: Math.min(Math.max(0, place.value.y + dy), Math.max(0, b.height - 28))
        };
      }
      persist();
    }
    function keepInView() {
      const b = bounds();
      room.value = b;
      const p = place.value;
      const w = Math.min(clampW(p.w), b.width);
      if (p.dock) {
        applySlot();
        return;
      }
      const h = Math.min(p.h, b.height);
      place.value = {
        ...p,
        w,
        h,
        x: Math.min(Math.max(0, p.x), Math.max(0, b.width - w)),
        y: Math.min(Math.max(0, p.y), Math.max(0, b.height - h))
      };
    }
    onMounted(() => {
      if (place.value.dock) {
        const b = bounds();
        room.value = b;
        setDockWidth(place.value.dock, clampW(place.value.w));
        joinDock(dockId.value, place.value.dock, place.value.freeH, props.minHeight);
      }
      keepInView();
      window.addEventListener("resize", keepInView);
    });
    onBeforeUnmount(() => {
      endGesture();
      leaveDock(dockId.value);
      window.removeEventListener("resize", keepInView);
    });
    const style = computed(() => ({
      left: place.value.x + "px",
      top: place.value.y + "px",
      width: place.value.w + "px",
      height: place.value.h + "px",
      zIndex: String(props.layer)
    }));
    __expose({ placement: place, keepInView });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", {
        ref_key: "root",
        ref: root,
        class: normalizeClass([
          "fw",
          {
            "fw--docked": !!place.value.dock,
            "fw--left": place.value.dock === "left",
            "fw--right": place.value.dock === "right"
          }
        ]),
        style: normalizeStyle(style.value),
        "aria-label": __props.title
      }, [
        createElementVNode("div", {
          class: "fw__bar",
          role: "toolbar",
          tabindex: "0",
          "aria-label": `${__props.title} verschieben - mit den Pfeiltasten bewegen`,
          onPointerdown: _cache[2] || (_cache[2] = withModifiers(($event) => startMove($event), ["prevent"])),
          onKeydown: [
            _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => nudge(-16, 0), ["prevent"]), ["left"])),
            _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => nudge(16, 0), ["prevent"]), ["right"])),
            _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => nudge(0, -16), ["prevent"]), ["up"])),
            _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => nudge(0, 16), ["prevent"]), ["down"]))
          ]
        }, [
          createElementVNode("span", _hoisted_3$8, toDisplayString(__props.title), 1),
          renderSlot(_ctx.$slots, "actions", {}, void 0, true),
          __props.closable ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            class: "fw__act",
            title: "Schließen",
            "aria-label": `${__props.title} schließen`,
            onPointerdown: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
          }, " × ", 40, _hoisted_4$7)) : createCommentVNode("", true)
        ], 40, _hoisted_2$8),
        createElementVNode("div", _hoisted_5$7, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        __props.resizable ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fw__grip",
          role: "separator",
          "aria-label": `Größe von ${__props.title}`,
          title: "Größe ändern",
          onPointerdown: _cache[7] || (_cache[7] = withModifiers(($event) => startResize($event), ["prevent"]))
        }, null, 40, _hoisted_6$4)) : createCommentVNode("", true)
      ], 14, _hoisted_1$a);
    };
  }
});
const DFloatingWindow = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b6b4a10b"]]);
const _hoisted_1$9 = ["aria-hidden", "aria-label", "role"];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DIcon",
  props: {
    name: {},
    size: { default: "md" },
    tone: {},
    decorative: { type: Boolean, default: true },
    label: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: normalizeClass(["icon", `icon--${__props.size}`]),
        style: normalizeStyle(__props.tone ? { color: `var(--${__props.tone})` } : void 0),
        "aria-hidden": __props.decorative ? "true" : void 0,
        "aria-label": __props.decorative ? void 0 : __props.label ?? __props.name,
        role: __props.decorative ? void 0 : "img"
      }, toDisplayString(__props.name), 15, _hoisted_1$9);
    };
  }
});
const DIcon = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-15dffeec"]]);
const _hoisted_1$8 = { class: "picker" };
const _hoisted_2$7 = ["disabled", "title"];
const _hoisted_3$7 = { class: "picker__name" };
const _hoisted_4$6 = { class: "sheet__search" };
const _hoisted_5$6 = {
  key: 0,
  class: "sheet__grid"
};
const _hoisted_6$3 = ["title", "onClick"];
const _hoisted_7$3 = {
  key: 1,
  class: "sheet__none"
};
const _hoisted_8$3 = { class: "sheet__own" };
const _hoisted_9$1 = ["onKeydown"];
const _hoisted_10$1 = {
  class: "sheet__preview",
  "aria-hidden": "true"
};
const _hoisted_11$1 = ["disabled"];
const _hoisted_12$1 = {
  key: 2,
  class: "sheet__warn"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DIconPicker",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    hint: {},
    fallback: { default: "category" },
    disabled: { type: Boolean, default: false }
  }, {
    "modelValue": { default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const CANDIDATES = [
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
    ];
    const open = ref(false);
    const search = ref("");
    const draft = ref("");
    const panel = ref();
    const resolved = ref([]);
    function measure() {
      const probe = document.createElement("span");
      probe.setAttribute("aria-hidden", "true");
      probe.style.cssText = 'position:absolute;left:-9999px;top:-9999px;font-family:"Material Icons";font-size:24px;line-height:1;white-space:nowrap';
      document.body.appendChild(probe);
      const good = [];
      for (const name of CANDIDATES) {
        probe.textContent = name;
        if (Math.abs(probe.getBoundingClientRect().width - 24) < 1.5) good.push(name);
      }
      probe.remove();
      return good;
    }
    function draws(name) {
      if (!name.trim()) return true;
      const probe = document.createElement("span");
      probe.style.cssText = 'position:absolute;left:-9999px;top:-9999px;font-family:"Material Icons";font-size:24px;line-height:1;white-space:nowrap';
      probe.textContent = name.trim();
      document.body.appendChild(probe);
      const width = probe.getBoundingClientRect().width;
      probe.remove();
      return Math.abs(width - 24) < 1.5;
    }
    const typedIsReal = computed(() => draws(draft.value));
    const shown = computed(() => {
      const term = search.value.trim().toLowerCase();
      if (!term) return resolved.value;
      return resolved.value.filter((name) => name.includes(term));
    });
    watch(open, async (isOpen) => {
      if (!isOpen) {
        window.removeEventListener("keydown", onKey);
        return;
      }
      draft.value = model.value;
      search.value = "";
      window.addEventListener("keydown", onKey);
      await nextTick();
      try {
        await document.fonts?.ready;
      } catch {
      }
      const good = measure();
      resolved.value = good.length ? good : CANDIDATES;
    });
    onBeforeUnmount(() => window.removeEventListener("keydown", onKey));
    function onKey(event) {
      if (event.key === "Escape") open.value = false;
    }
    function choose(name) {
      model.value = name;
      open.value = false;
    }
    function clear() {
      model.value = "";
      open.value = false;
    }
    function commitTyped() {
      if (!typedIsReal.value) return;
      model.value = draft.value.trim();
      open.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(DField, {
        label: __props.label,
        hint: __props.hint,
        stacked: ""
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$8, [
            createElementVNode("button", {
              type: "button",
              class: "picker__current",
              disabled: __props.disabled,
              title: model.value || `${__props.fallback} (vom Typ)`,
              onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
            }, [
              createVNode(DIcon, {
                name: model.value || __props.fallback,
                size: "lg"
              }, null, 8, ["name"])
            ], 8, _hoisted_2$7),
            createElementVNode("span", _hoisted_3$7, toDisplayString(model.value || `${__props.fallback} — vom Typ`), 1),
            model.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: "picker__clear",
              onClick: clear
            }, " Zurücksetzen ")) : createCommentVNode("", true)
          ]),
          (openBlock(), createBlock(Teleport, { to: "body" }, [
            open.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createElementVNode("div", {
                class: "picker__catch",
                onClick: _cache[1] || (_cache[1] = ($event) => open.value = false)
              }),
              createElementVNode("div", {
                ref_key: "panel",
                ref: panel,
                class: "sheet",
                role: "dialog",
                "aria-label": "Symbol wählen"
              }, [
                createElementVNode("div", _hoisted_4$6, [
                  withDirectives(createElementVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => search.value = $event),
                    type: "search",
                    placeholder: "Symbol suchen…",
                    autofocus: ""
                  }, null, 512), [
                    [vModelText, search.value]
                  ])
                ]),
                shown.value.length ? (openBlock(), createElementBlock("ul", _hoisted_5$6, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(shown.value, (name) => {
                    return openBlock(), createElementBlock("li", { key: name }, [
                      createElementVNode("button", {
                        type: "button",
                        class: normalizeClass(["sheet__item", { "sheet__item--on": model.value === name }]),
                        title: name,
                        onClick: ($event) => choose(name)
                      }, [
                        createVNode(DIcon, {
                          name,
                          size: "lg"
                        }, null, 8, ["name"])
                      ], 10, _hoisted_6$3)
                    ]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("p", _hoisted_7$3, "Kein Symbol mit diesem Namen in der Auswahl.")),
                createElementVNode("div", _hoisted_8$3, [
                  _cache[4] || (_cache[4] = createElementVNode("label", {
                    class: "sheet__own-label",
                    for: "icon-own"
                  }, "Anderer Name", -1)),
                  withDirectives(createElementVNode("input", {
                    id: "icon-own",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => draft.value = $event),
                    type: "text",
                    placeholder: "z. B. thermostat",
                    onKeydown: withKeys(withModifiers(commitTyped, ["prevent"]), ["enter"])
                  }, null, 40, _hoisted_9$1), [
                    [vModelText, draft.value]
                  ]),
                  createElementVNode("span", _hoisted_10$1, [
                    typedIsReal.value && draft.value.trim() ? (openBlock(), createBlock(DIcon, {
                      key: 0,
                      name: draft.value.trim(),
                      size: "md"
                    }, null, 8, ["name"])) : createCommentVNode("", true)
                  ]),
                  createElementVNode("button", {
                    type: "button",
                    class: "sheet__take",
                    disabled: !typedIsReal.value || !draft.value.trim(),
                    onClick: commitTyped
                  }, " Übernehmen ", 8, _hoisted_11$1)
                ]),
                draft.value.trim() && !typedIsReal.value ? (openBlock(), createElementBlock("p", _hoisted_12$1, " Dieses Symbol kennt die Schrift nicht — es würde als Text erscheinen. ")) : createCommentVNode("", true)
              ], 512)
            ], 64)) : createCommentVNode("", true)
          ]))
        ]),
        _: 1
      }, 8, ["label", "hint"]);
    };
  }
});
const DIconPicker = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-c86d0906"]]);
const _hoisted_1$7 = ["for"];
const _hoisted_2$6 = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
};
const _hoisted_3$6 = { class: "field__control" };
const _hoisted_4$5 = ["id", "rows", "placeholder", "disabled", "readonly", "required", "aria-invalid"];
const _hoisted_5$5 = ["id", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "step", "aria-invalid"];
const _hoisted_6$2 = {
  key: 2,
  class: "suffix"
};
const _hoisted_7$2 = {
  key: 0,
  class: "field__error",
  role: "alert"
};
const _hoisted_8$2 = {
  key: 1,
  class: "field__hint"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DInput",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    type: { default: "text" },
    placeholder: {},
    hint: {},
    error: {},
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    size: { default: "md" },
    rows: {},
    suffix: {},
    stacked: { type: Boolean, default: false },
    min: {},
    max: {},
    step: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const id = useId();
    const isNumeric = computed(() => props.type === "number");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["field", { "field--stacked": __props.stacked, "field--invalid": !!__props.error }])
      }, [
        __props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: "field__label",
          for: unref(id)
        }, [
          createTextVNode(toDisplayString(__props.label) + " ", 1),
          __props.required ? (openBlock(), createElementBlock("span", _hoisted_2$6, "*")) : createCommentVNode("", true)
        ], 8, _hoisted_1$7)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3$6, [
          createElementVNode("div", {
            class: normalizeClass(["shell", `shell--${__props.size}`, { "shell--invalid": !!__props.error, "shell--off": __props.disabled }])
          }, [
            __props.rows ? withDirectives((openBlock(), createElementBlock("textarea", {
              key: 0,
              id: unref(id),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
              class: "input input--area",
              rows: __props.rows,
              placeholder: __props.placeholder,
              disabled: __props.disabled,
              readonly: __props.readonly,
              required: __props.required,
              "aria-invalid": !!__props.error || void 0
            }, null, 8, _hoisted_4$5)), [
              [vModelText, model.value]
            ]) : withDirectives((openBlock(), createElementBlock("input", {
              key: 1,
              id: unref(id),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value = $event),
              class: normalizeClass(["input", { "input--num": isNumeric.value }]),
              type: __props.type,
              placeholder: __props.placeholder,
              disabled: __props.disabled,
              readonly: __props.readonly,
              required: __props.required,
              min: __props.min,
              max: __props.max,
              step: __props.step,
              "aria-invalid": !!__props.error || void 0
            }, null, 10, _hoisted_5$5)), [
              [vModelDynamic, model.value]
            ]),
            __props.suffix ? (openBlock(), createElementBlock("span", _hoisted_6$2, toDisplayString(__props.suffix), 1)) : createCommentVNode("", true)
          ], 2),
          __props.error ? (openBlock(), createElementBlock("p", _hoisted_7$2, toDisplayString(__props.error), 1)) : __props.hint ? (openBlock(), createElementBlock("p", _hoisted_8$2, toDisplayString(__props.hint), 1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const DInput = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-a5fd75e2"]]);
const _hoisted_1$6 = ["aria-label"];
const _hoisted_2$5 = {
  key: 0,
  class: "dialog__head"
};
const _hoisted_3$5 = { class: "dialog__title" };
const _hoisted_4$4 = { class: "dialog__body" };
const _hoisted_5$4 = {
  key: 1,
  class: "dialog__foot"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DModal",
  props: /* @__PURE__ */ mergeModels({
    title: {},
    size: { default: "md" },
    persistent: { type: Boolean, default: false }
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["cancel"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const open = useModel(__props, "modelValue");
    const props = __props;
    const emit = __emit;
    function close() {
      if (props.persistent) return;
      open.value = false;
      emit("cancel");
    }
    function onKey(event) {
      if (event.key === "Escape" && open.value) close();
    }
    watch(open, (isOpen) => {
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    onMounted(() => window.addEventListener("keydown", onKey));
    onBeforeUnmount(() => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        open.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "scrim",
          onClick: withModifiers(close, ["self"])
        }, [
          createElementVNode("div", {
            class: normalizeClass(["dialog", `dialog--${__props.size}`]),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": __props.title
          }, [
            __props.title || _ctx.$slots.header ? (openBlock(), createElementBlock("header", _hoisted_2$5, [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createElementVNode("h2", _hoisted_3$5, toDisplayString(__props.title), 1)
              ], true),
              !__props.persistent ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                class: "dialog__close",
                "aria-label": "Schließen",
                onClick: close
              }, " ✕ ")) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_4$4, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _ctx.$slots.actions ? (openBlock(), createElementBlock("footer", _hoisted_5$4, [
              renderSlot(_ctx.$slots, "actions", {}, void 0, true)
            ])) : createCommentVNode("", true)
          ], 10, _hoisted_1$6)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const DModal = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-03f9e875"]]);
const _hoisted_1$5 = {
  key: 0,
  class: "field__label"
};
const _hoisted_2$4 = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
};
const _hoisted_3$4 = { class: "field__control" };
const _hoisted_4$3 = ["aria-label"];
const _hoisted_5$3 = ["name", "value", "disabled", "required"];
const _hoisted_6$1 = { class: "choice__label" };
const _hoisted_7$1 = {
  key: 0,
  class: "field__error",
  role: "alert"
};
const _hoisted_8$1 = {
  key: 1,
  class: "field__hint"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DRadioGroup",
  props: /* @__PURE__ */ mergeModels({
    options: {},
    label: {},
    valueKey: { default: "uid" },
    labelKey: { default: "name" },
    hint: {},
    error: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
    stacked: { type: Boolean, default: false }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const name = useId();
    const entries2 = computed(
      () => (props.options ?? []).map((option) => {
        if (option === null || typeof option !== "object") {
          return { value: option, label: String(option) };
        }
        const record = option;
        const value = props.valueKey in record ? record[props.valueKey] : record;
        const label = props.labelKey in record ? record[props.labelKey] : value;
        return { value, label: String(label ?? "") };
      })
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["field", { "field--stacked": __props.stacked, "field--invalid": !!__props.error }])
      }, [
        __props.label ? (openBlock(), createElementBlock("span", _hoisted_1$5, [
          createTextVNode(toDisplayString(__props.label) + " ", 1),
          __props.required ? (openBlock(), createElementBlock("span", _hoisted_2$4, "*")) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3$4, [
          createElementVNode("div", {
            class: normalizeClass(["choices", { "choices--inline": __props.inline }]),
            role: "radiogroup",
            "aria-label": __props.label
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(entries2.value, (entry, index) => {
              return openBlock(), createElementBlock("label", {
                key: index,
                class: normalizeClass(["choice", { "choice--off": __props.disabled }])
              }, [
                withDirectives(createElementVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
                  class: "choice__dot",
                  type: "radio",
                  name: unref(name),
                  value: entry.value,
                  disabled: __props.disabled,
                  required: __props.required
                }, null, 8, _hoisted_5$3), [
                  [vModelRadio, model.value]
                ]),
                createElementVNode("span", _hoisted_6$1, toDisplayString(entry.label), 1)
              ], 2);
            }), 128))
          ], 10, _hoisted_4$3),
          __props.error ? (openBlock(), createElementBlock("p", _hoisted_7$1, toDisplayString(__props.error), 1)) : __props.hint ? (openBlock(), createElementBlock("p", _hoisted_8$1, toDisplayString(__props.hint), 1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const DRadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-da414860"]]);
const _hoisted_1$4 = ["for"];
const _hoisted_2$3 = {
  key: 0,
  class: "field__required",
  "aria-hidden": "true"
};
const _hoisted_3$3 = { class: "field__control" };
const _hoisted_4$2 = ["id", "size", "disabled", "required", "aria-invalid"];
const _hoisted_5$2 = ["value"];
const _hoisted_6 = ["id", "disabled", "required", "aria-invalid"];
const _hoisted_7 = {
  key: 0,
  value: ""
};
const _hoisted_8 = ["value"];
const _hoisted_9 = ["label"];
const _hoisted_10 = ["value"];
const _hoisted_11 = ["value"];
const _hoisted_12 = {
  key: 2,
  class: "chevron",
  "aria-hidden": "true"
};
const _hoisted_13 = {
  key: 0,
  class: "field__error",
  role: "alert"
};
const _hoisted_14 = {
  key: 1,
  class: "field__hint"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DSelect",
  props: /* @__PURE__ */ mergeModels({
    options: {},
    label: {},
    valueKey: { default: "uid" },
    labelKey: { default: "name" },
    groupKey: {},
    placeholder: {},
    hint: {},
    error: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    size: { default: "md" },
    clearable: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    stacked: { type: Boolean, default: false }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const id = useId();
    const entries2 = computed(
      () => (props.options ?? []).map((option) => {
        if (option === null || typeof option !== "object") {
          return { value: option, label: String(option) };
        }
        const record = option;
        const value = props.valueKey in record ? record[props.valueKey] : record;
        const label = props.labelKey in record ? record[props.labelKey] : value;
        const group = props.groupKey ? record[props.groupKey] : void 0;
        return { value, label: String(label ?? ""), group: group === void 0 ? void 0 : String(group) };
      })
    );
    const groups = computed(() => {
      const byLabel = /* @__PURE__ */ new Map();
      const loose = [];
      entries2.value.forEach((entry, index) => {
        if (!entry.group) {
          loose.push({ index, label: entry.label });
          return;
        }
        if (!byLabel.has(entry.group)) byLabel.set(entry.group, []);
        byLabel.get(entry.group).push({ index, label: entry.label });
      });
      return { loose, headed: [...byLabel].map(([label, options]) => ({ label, options })) };
    });
    const selectedIndex = computed({
      get() {
        const index = entries2.value.findIndex((entry) => entry.value === model.value);
        return index >= 0 ? String(index) : "";
      },
      set(next) {
        model.value = next === "" ? void 0 : entries2.value[Number(next)]?.value;
      }
    });
    const selectedIndexes = computed({
      get() {
        const chosen = Array.isArray(model.value) ? model.value : [];
        return entries2.value.map((entry, index) => chosen.includes(entry.value) ? String(index) : "").filter((index) => index !== "");
      },
      set(next) {
        model.value = next.map((index) => entries2.value[Number(index)]?.value);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["field", { "field--stacked": __props.stacked, "field--invalid": !!__props.error }])
      }, [
        __props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: "field__label",
          for: unref(id)
        }, [
          createTextVNode(toDisplayString(__props.label) + " ", 1),
          __props.required ? (openBlock(), createElementBlock("span", _hoisted_2$3, "*")) : createCommentVNode("", true)
        ], 8, _hoisted_1$4)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3$3, [
          createElementVNode("div", {
            class: normalizeClass(["shell", `shell--${__props.size}`, { "shell--invalid": !!__props.error, "shell--off": __props.disabled }])
          }, [
            __props.multiple ? withDirectives((openBlock(), createElementBlock("select", {
              key: 0,
              id: unref(id),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedIndexes.value = $event),
              class: normalizeClass(["select", "select--many"]),
              multiple: "",
              size: Math.min(Math.max(entries2.value.length, 2), 8),
              disabled: __props.disabled,
              required: __props.required,
              "aria-invalid": !!__props.error || void 0
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(entries2.value, (entry, index) => {
                return openBlock(), createElementBlock("option", {
                  key: index,
                  value: String(index)
                }, toDisplayString(entry.label), 9, _hoisted_5$2);
              }), 128))
            ], 8, _hoisted_4$2)), [
              [vModelSelect, selectedIndexes.value]
            ]) : withDirectives((openBlock(), createElementBlock("select", {
              key: 1,
              id: unref(id),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedIndex.value = $event),
              class: "select",
              disabled: __props.disabled,
              required: __props.required,
              "aria-invalid": !!__props.error || void 0
            }, [
              __props.clearable || model.value === void 0 ? (openBlock(), createElementBlock("option", _hoisted_7, toDisplayString(__props.placeholder ?? "—"), 1)) : createCommentVNode("", true),
              __props.groupKey ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(groups.value.loose, (entry) => {
                  return openBlock(), createElementBlock("option", {
                    key: entry.index,
                    value: String(entry.index)
                  }, toDisplayString(entry.label), 9, _hoisted_8);
                }), 128)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(groups.value.headed, (group) => {
                  return openBlock(), createElementBlock("optgroup", {
                    key: group.label,
                    label: group.label
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(group.options, (entry) => {
                      return openBlock(), createElementBlock("option", {
                        key: entry.index,
                        value: String(entry.index)
                      }, toDisplayString(entry.label), 9, _hoisted_10);
                    }), 128))
                  ], 8, _hoisted_9);
                }), 128))
              ], 64)) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(entries2.value, (entry, index) => {
                return openBlock(), createElementBlock("option", {
                  key: index,
                  value: String(index)
                }, toDisplayString(entry.label), 9, _hoisted_11);
              }), 128))
            ], 8, _hoisted_6)), [
              [vModelSelect, selectedIndex.value]
            ]),
            !__props.multiple ? (openBlock(), createElementBlock("span", _hoisted_12, "▾")) : createCommentVNode("", true)
          ], 2),
          __props.error ? (openBlock(), createElementBlock("p", _hoisted_13, toDisplayString(__props.error), 1)) : __props.hint ? (openBlock(), createElementBlock("p", _hoisted_14, toDisplayString(__props.hint), 1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const DSelect = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-940042b2"]]);
const _hoisted_1$3 = ["for"];
const _hoisted_2$2 = { class: "field__control row" };
const _hoisted_3$2 = ["id", "min", "max", "step", "disabled"];
const _hoisted_4$1 = ["min", "max", "step", "disabled", "aria-label"];
const _hoisted_5$1 = {
  key: 0,
  class: "suffix"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DSlider",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    suffix: {},
    disabled: { type: Boolean, default: false },
    stacked: { type: Boolean, default: false }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const id = useId();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["field", { "field--stacked": __props.stacked }])
      }, [
        __props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: "field__label",
          for: unref(id)
        }, toDisplayString(__props.label), 9, _hoisted_1$3)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2$2, [
          withDirectives(createElementVNode("input", {
            id: unref(id),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
            class: "range",
            type: "range",
            min: __props.min,
            max: __props.max,
            step: __props.step,
            disabled: __props.disabled
          }, null, 8, _hoisted_3$2), [
            [
              vModelText,
              model.value,
              void 0,
              { number: true }
            ]
          ]),
          withDirectives(createElementVNode("input", {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value = $event),
            class: "num",
            type: "number",
            min: __props.min,
            max: __props.max,
            step: __props.step,
            disabled: __props.disabled,
            "aria-label": __props.label ? `${__props.label} als Zahl` : "Wert"
          }, null, 8, _hoisted_4$1), [
            [
              vModelText,
              model.value,
              void 0,
              { number: true }
            ]
          ]),
          __props.suffix ? (openBlock(), createElementBlock("span", _hoisted_5$1, toDisplayString(__props.suffix), 1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const DSlider = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ed7d97ce"]]);
const _hoisted_1$2 = ["aria-checked", "aria-label", "disabled"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DSwitch",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    disabled: { type: Boolean, default: false }
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["sw", { "sw--off": __props.disabled }])
      }, [
        createElementVNode("button", {
          type: "button",
          role: "switch",
          "aria-checked": !!model.value,
          "aria-label": __props.label,
          disabled: __props.disabled,
          class: normalizeClass(["sw__track", { on: model.value }]),
          onClick: _cache[0] || (_cache[0] = ($event) => model.value = !model.value)
        }, [..._cache[2] || (_cache[2] = [
          createElementVNode("span", { class: "sw__knob" }, null, -1)
        ])], 10, _hoisted_1$2),
        __props.label || _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "sw__label",
          onClick: _cache[1] || (_cache[1] = ($event) => !__props.disabled && (model.value = !model.value))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.label), 1)
          ], true)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const DSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-70940a00"]]);
const _hoisted_1$1 = { class: "table" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = ["aria-selected", "onClick"];
const _hoisted_4 = ["title"];
const _hoisted_5 = {
  key: 1,
  class: "table__empty"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DTable",
  props: /* @__PURE__ */ mergeModels({
    items: {},
    columns: {},
    empty: { default: "Keine Zeilen" },
    selectable: { type: Boolean, default: false }
  }, {
    "selected": {},
    "selectedModifiers": {}
  }),
  emits: ["update:selected"],
  setup(__props) {
    const selected = useModel(__props, "selected");
    const props = __props;
    const columns = computed(() => {
      if (props.columns?.length) {
        return props.columns.map(
          (column) => typeof column === "string" ? { key: column, label: column } : { key: column.key, label: column.label ?? column.key }
        );
      }
      const first = props.items?.[0];
      return first ? Object.keys(first).map((key) => ({ key, label: key })) : [];
    });
    function cell(row, key) {
      const value = row?.[key];
      if (value === void 0 || value === null) return "";
      return typeof value === "object" ? JSON.stringify(value) : String(value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        __props.items?.length && columns.value.length ? (openBlock(), createElementBlock("table", _hoisted_2$1, [
          createElementVNode("thead", null, [
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (column) => {
                return openBlock(), createElementBlock("th", {
                  key: column.key
                }, toDisplayString(column.label), 1);
              }), 128))
            ])
          ]),
          createElementVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (row, index) => {
              return openBlock(), createElementBlock("tr", {
                key: index,
                class: normalizeClass({ "row--pick": __props.selectable, "row--on": __props.selectable && row === selected.value }),
                "aria-selected": __props.selectable ? row === selected.value : void 0,
                onClick: ($event) => __props.selectable && (selected.value = row)
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (column) => {
                  return openBlock(), createElementBlock("td", {
                    key: column.key,
                    title: cell(row, column.key)
                  }, toDisplayString(cell(row, column.key)), 9, _hoisted_4);
                }), 128))
              ], 10, _hoisted_3$1);
            }), 128))
          ])
        ])) : (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString(__props.empty), 1))
      ]);
    };
  }
});
const DTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-925340b8"]]);
const _hoisted_1 = ["aria-label"];
const _hoisted_2 = ["aria-selected", "tabindex", "disabled", "onClick"];
const _hoisted_3 = {
  key: 0,
  class: "tab__count"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DTabs",
  props: /* @__PURE__ */ mergeModels({
    tabs: {},
    label: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    function move(step) {
      const usable = props.tabs.filter((tab) => !tab.disabled);
      const at = usable.findIndex((tab) => tab.id === model.value);
      const next = usable[(at + step + usable.length) % usable.length];
      if (next) model.value = next.id;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "tabs",
        role: "tablist",
        "aria-label": __props.label,
        onKeydown: [
          _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => move(-1), ["prevent"]), ["left"])),
          _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => move(1), ["prevent"]), ["right"]))
        ]
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab) => {
          return openBlock(), createElementBlock("button", {
            key: tab.id,
            type: "button",
            role: "tab",
            "aria-selected": model.value === tab.id,
            tabindex: model.value === tab.id ? 0 : -1,
            disabled: tab.disabled,
            class: normalizeClass(["tab", { on: model.value === tab.id }]),
            onClick: ($event) => model.value = tab.id
          }, [
            createTextVNode(toDisplayString(tab.label) + " ", 1),
            tab.count !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(tab.count), 1)) : createCommentVNode("", true)
          ], 10, _hoisted_2);
        }), 128)),
        renderSlot(_ctx.$slots, "actions", {}, void 0, true)
      ], 40, _hoisted_1);
    };
  }
});
const DTabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f7c65d26"]]);
const CONTROLS = {
  DButton,
  DCard,
  DCheckbox,
  DChip,
  DColorInput,
  DDateInput,
  DDivider,
  DField,
  DFloatingWindow,
  DIcon,
  DIconPicker,
  DInput,
  DModal,
  DRadioGroup,
  DSelect,
  DSlider,
  DSwitch,
  DTable,
  DTabs
};
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONTROLS,
  DButton,
  DCard,
  DCheckbox,
  DChip,
  DColorInput,
  DDateInput,
  DDivider,
  DField,
  DFloatingWindow,
  DIcon,
  DIconPicker,
  DInput,
  DModal,
  DRadioGroup,
  DSelect,
  DSlider,
  DSwitch,
  DTable,
  DTabs
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.controls";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.controls");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  CONTROLS,
  DButton,
  DCard,
  DCheckbox,
  DChip,
  DColorInput,
  DDateInput,
  DDivider,
  DField,
  DFloatingWindow,
  DIcon,
  DIconPicker,
  DInput,
  DModal,
  DRadioGroup,
  DSelect,
  DSlider,
  DSwitch,
  DTable,
  DTabs,
  activate,
  deactivate
};
