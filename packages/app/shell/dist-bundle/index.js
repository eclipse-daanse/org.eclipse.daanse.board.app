(function(){var i="app.shell",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="@import \"https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap\";\n.topbar[data-v-46a52363] {\n  height: var(--spacing-topbar, 42px);\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 12px;\n  background: var(--color-pane);\n  border-bottom: 1px solid var(--color-divider);\n  color: var(--color-fg);\n  font-size: var(--text-sm, 12px);\n}\n.brand[data-v-46a52363] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n  white-space: nowrap;\n  font-weight: 600;\n  font-size: var(--text-base, 13px);\n}\n.brand-mark[data-v-46a52363] {\n  width: 20px;\n  height: 20px;\n  border-radius: var(--radius-sm, 5px);\n  background: var(--color-brandFill);\n  color: var(--color-onBrand);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--text-xs, 11px);\n  font-weight: 700;\n  flex: none;\n}\n.crumb[data-v-46a52363] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  color: var(--color-dim);\n}\n.crumb-part[data-v-46a52363] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.crumb-part.current[data-v-46a52363] {\n  color: var(--color-fg);\n  font-weight: 500;\n}\n.crumb-link[data-v-46a52363] {\n  padding: 0;\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: 0;\n  border-radius: var(--radius-xs, 3px);\n  cursor: pointer;\n}\n.crumb-link[data-v-46a52363]:hover {\n  color: var(--color-fg);\n  text-decoration: underline;\n}\n.crumb-link[data-v-46a52363]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 2px;\n}\n.crumb-sep[data-v-46a52363] {\n  color: var(--color-outline);\n}\n.spacer[data-v-46a52363] {\n  flex: 1 1 auto;\n  min-width: 8px;\n}\n\n/* ------------------------------------------------------ page of a board */\n.pages[data-v-46a52363] {\n  position: relative;\n  margin-left: 10px;\n  flex: none;\n}\n\n/*\n * Quieter than .action: this says where you are, it does not ask to be\n * pressed. It takes the breadcrumb's weight so the two read as one path.\n */\n.pages__current[data-v-46a52363] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  max-width: 200px;\n  height: 24px;\n  padding: 0 7px;\n  font-size: var(--text-sm, 12px);\n  font-family: inherit;\n  color: var(--color-fg);\n  background: none;\n  border: 1px solid transparent;\n  border-radius: var(--radius-xs, 3px);\n  cursor: pointer;\n}\n.pages__current[data-v-46a52363]:hover {\n  background-color: var(--color-raised);\n  border-color: var(--color-divider);\n}\n.pages__current[data-v-46a52363]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.pages__name[data-v-46a52363] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.pages__caret[data-v-46a52363] {\n  font-size: 9px;\n  color: var(--color-dim);\n}\n.pages__menu[data-v-46a52363] {\n  position: absolute;\n  top: calc(100% + 3px);\n  left: 0;\n  z-index: 400;\n  min-width: 180px;\n  max-height: 60vh;\n  overflow-y: auto;\n  padding: 3px;\n  margin: 0;\n  list-style: none;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-sm, 3px);\n  box-shadow: var(--shadow-e2, 0 2px 8px rgb(0 0 0 / 14%));\n}\n.pages__item[data-v-46a52363] {\n  display: block;\n  width: 100%;\n  padding: 5px 8px;\n  font-size: var(--text-sm, 12px);\n  font-family: inherit;\n  text-align: left;\n  color: var(--color-fg);\n  background: none;\n  border: 0;\n  border-radius: var(--radius-xs, 3px);\n  cursor: pointer;\n}\n.pages__item[data-v-46a52363]:hover {\n  background-color: var(--color-raised);\n}\n\n/* The row holds the name and, on hover, the way to remove it */\n.pages__line[data-v-46a52363] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.pages__line .pages__item[data-v-46a52363] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.pages__remove[data-v-46a52363] {\n  flex: none;\n  width: 20px;\n  height: 20px;\n  font-size: 14px;\n  line-height: 1;\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  border-radius: var(--radius-xs, 3px);\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 90ms ease, color 90ms ease;\n}\n.pages__line:hover .pages__remove[data-v-46a52363],\n.pages__remove[data-v-46a52363]:focus-visible {\n  opacity: 1;\n}\n.pages__remove[data-v-46a52363]:hover {\n  color: var(--color-err);\n}\n.pages__sep[data-v-46a52363] {\n  height: 1px;\n  margin: 3px 0;\n  background-color: var(--color-divider);\n}\n.pages__add[data-v-46a52363] {\n  color: var(--color-accent);\n}\n\n/* The open page is marked, not hidden: a list that drops its own entry\n   makes you count to work out where you are */\n.pages__item.on[data-v-46a52363] {\n  color: var(--color-accent);\n}\n.pages__empty[data-v-46a52363] {\n  padding: 5px 8px;\n  font-size: var(--text-sm, 12px);\n  color: var(--color-dim);\n}\n.action[data-v-46a52363] {\n  height: 24px;\n  padding: 0 10px;\n  margin-right: 8px;\n  font-size: var(--text-sm, 12px);\n  font-family: inherit;\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs, 3px);\n  cursor: pointer;\n}\n.action[data-v-46a52363]:hover {\n  border-color: var(--color-outline);\n}\n.action[data-v-46a52363]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.modes[data-v-46a52363] {\n  display: inline-flex;\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-sm, 5px);\n  overflow: hidden;\n  flex: none;\n}\n.mode[data-v-46a52363] {\n  font: inherit;\n  padding: 4px 11px;\n  border: 0;\n  background: var(--color-raised);\n  color: var(--color-dim);\n  cursor: pointer;\n  white-space: nowrap;\n}\n.mode[data-v-46a52363]:hover {\n  color: var(--color-fg);\n}\n.mode.on[data-v-46a52363] {\n  background: var(--color-accent);\n  color: var(--color-onAccent);\n  font-weight: 600;\n}\n.mode[data-v-46a52363]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: -2px;\n}\n.icon-action[data-v-46a52363]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.icon-action[data-v-46a52363] {\n  display: grid;\n  place-items: center;\n  width: 24px;\n  height: 24px;\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  border-radius: var(--radius-xs);\n  cursor: pointer;\n}\n.icon-action[data-v-46a52363]:hover {\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n}\n\n/* A toggle says which way it stands, not just that it can be pressed */\n.icon-action.on[data-v-46a52363] {\n  color: var(--color-accent);\n  background-color: var(--color-raised);\n}\n.icon-action[data-v-46a52363]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.avatar[data-v-46a52363] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--color-raised);\n  border: 1px solid var(--color-outline);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--text-xs, 11px);\n  font-weight: 700;\n  color: var(--color-dim);\n  flex: none;\n}\n\n.shell[data-v-ce3039cb] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  min-height: 0;\n  background: var(--color-bg);\n}\n.shell-body[data-v-ce3039cb] {\n  flex: 1 1 auto;\n  display: grid;\n  grid-template-columns: var(--spacing-rail, 52px) minmax(0, 1fr);\n  min-height: 0;\n  overflow: hidden;\n}\n\n/* The launcher has no rail, so the content takes the whole width */\n.shell-body--norail[data-v-ce3039cb] {\n  grid-template-columns: minmax(0, 1fr);\n}\n.rail[data-v-ce3039cb] {\n  background: var(--color-pane);\n  border-right: 1px solid var(--color-divider);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px 0;\n  gap: 4px;\n  overflow: hidden;\n}\n.rail-spacer[data-v-ce3039cb] {\n  flex: 1 1 auto;\n}\n\n/* 36px hit target, 8px radius, and the 3px accent bar the mockups put on\n   the active entry. */\n.ri[data-v-ce3039cb] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  flex: none;\n  border: 0;\n  border-radius: var(--radius-md, 8px);\n  background: transparent;\n  color: var(--color-dim);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition:\n    background 140ms cubic-bezier(0.2, 0.6, 0.2, 1),\n    color 140ms cubic-bezier(0.2, 0.6, 0.2, 1);\n}\n.ri[data-v-ce3039cb]:hover {\n  color: var(--color-fg);\n  background: color-mix(in srgb, var(--color-accent) 10%, transparent);\n}\n.ri.on[data-v-ce3039cb] {\n  background: color-mix(in srgb, var(--color-accent) 14%, transparent);\n  color: var(--color-accent);\n}\n.ri.on[data-v-ce3039cb]::before {\n  content: '';\n  position: absolute;\n  left: -8px;\n  top: 8px;\n  bottom: 8px;\n  width: 3px;\n  border-radius: var(--radius-xs, 3px);\n  background: var(--color-accent);\n}\n.ri[data-v-ce3039cb]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 2px;\n}\n.ri[data-v-ce3039cb] .icon {\n  font-size: 20px;\n}\n.sr-only[data-v-ce3039cb] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n  border: 0;\n}\n.content[data-v-ce3039cb] {\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n@media (prefers-reduced-motion: reduce) {\n.ri[data-v-ce3039cb] {\n    transition-duration: 0.01ms;\n}\n}\n.global-loading-bar[data-v-ce3039cb] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  z-index: 8000;\n  overflow: hidden;\n}\n.global-loading-bar-progress[data-v-ce3039cb] {\n  height: 100%;\n  width: 30%;\n  background: var(--color-brandFill);\n  animation: loading-slide-ce3039cb 1.2s ease-in-out infinite;\n}\n@keyframes loading-slide-ce3039cb {\n0% {\n    transform: translateX(-100%);\n}\n100% {\n    transform: translateX(400%);\n}\n}\n\n\n/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */\n@layer properties {\n@supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {\n*, :before, :after, ::backdrop {\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n      --tw-border-style: solid;\n      --tw-font-weight: initial;\n      --tw-ordinal: initial;\n      --tw-slashed-zero: initial;\n      --tw-numeric-figure: initial;\n      --tw-numeric-spacing: initial;\n      --tw-numeric-fraction: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-outline-style: solid;\n      --tw-blur: initial;\n      --tw-brightness: initial;\n      --tw-contrast: initial;\n      --tw-grayscale: initial;\n      --tw-hue-rotate: initial;\n      --tw-invert: initial;\n      --tw-opacity: initial;\n      --tw-saturate: initial;\n      --tw-sepia: initial;\n      --tw-drop-shadow: initial;\n      --tw-drop-shadow-color: initial;\n      --tw-drop-shadow-alpha: 100%;\n      --tw-drop-shadow-size: initial;\n      --tw-backdrop-blur: initial;\n      --tw-backdrop-brightness: initial;\n      --tw-backdrop-contrast: initial;\n      --tw-backdrop-grayscale: initial;\n      --tw-backdrop-hue-rotate: initial;\n      --tw-backdrop-invert: initial;\n      --tw-backdrop-opacity: initial;\n      --tw-backdrop-saturate: initial;\n      --tw-backdrop-sepia: initial;\n      --tw-ease: initial;\n}\n}\n}\n@layer theme {\n:root, :host {\n    --font-sans: \"Barlow\", system-ui, -apple-system, \"Segoe UI\", sans-serif;\n    --font-mono: \"JetBrains Mono\", ui-monospace, SFMono-Regular, Menlo, monospace;\n    --color-gray-200: oklch(92.8% .006 264.531);\n    --color-gray-300: oklch(87.2% .01 258.338);\n    --color-white: #fff;\n    --spacing: .25rem;\n    --container-xs: 20rem;\n    --text-xs: 11px;\n    --text-xs--line-height: calc(1 / .75);\n    --text-sm: 12px;\n    --text-sm--line-height: calc(1.25 / .875);\n    --text-base: 13px;\n    --text-base--line-height: calc(1.5 / 1);\n    --text-lg: 15px;\n    --text-lg--line-height: calc(1.75 / 1.125);\n    --text-xl: 24px;\n    --text-xl--line-height: calc(1.75 / 1.25);\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --radius-xs: 2px;\n    --radius-sm: 3px;\n    --radius-md: 4px;\n    --radius-lg: 6px;\n    --ease-in: cubic-bezier(.4, 0, 1, 1);\n    --ease-out: cubic-bezier(0, 0, .2, 1);\n    --ease-in-out: cubic-bezier(.4, 0, .2, 1);\n    --default-transition-duration: .15s;\n    --default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    --default-font-family: var(--font-sans);\n    --default-mono-font-family: var(--font-mono);\n    --color-bg: #121820;\n    --color-pane: #1a222c;\n    --color-raised: #232d39;\n    --color-canvas: #0e141b;\n    --color-divider: #2a3541;\n    --color-outline: #3c4959;\n    --color-fg: #dfe8ef;\n    --color-dim: #8b9bab;\n    --color-accent: #4fa3d1;\n    --color-onAccent: #08131c;\n    --color-brand: #d8a13c;\n    --color-brandFill: #d8a13c;\n    --color-onBrand: #14100a;\n    --color-ok: #5fb98a;\n    --color-warn: #d8a13c;\n    --color-err: #e2766a;\n    --color-kw: #4fa3d1;\n    --color-measure: #d8a13c;\n    --color-member: #5fb98a;\n    --color-fn: #c294d8;\n    --color-primary: #4fa3d1;\n    --color-secondary: #8b9bab;\n    --color-success: #5fb98a;\n    --color-info: #4fa3d1;\n    --color-danger: #e2766a;\n    --color-warning: #d8a13c;\n    --color-backgroundPrimary: #121820;\n    --color-backgroundSecondary: #1a222c;\n    --color-backgroundElement: #232d39;\n    --color-backgroundBorder: #2a3541;\n    --color-textPrimary: #dfe8ef;\n    --color-textInverted: #08131c;\n    --color-daanse_blue: #4fa3d1;\n    --color-daanse_grey: #dfe8ef;\n    --shadow-e1: 0 1px 2px #00000073;\n    --shadow-e2: 0 2px 8px #00000073;\n    --shadow-e3: 0 8px 24px #00000080;\n    --spacing-topbar: 42px;\n    --spacing-rail: 52px;\n    --spacing-panelHeader: 30px;\n    --spacing-splitter: 4px;\n    --spacing-statusbar: 24px;\n}\n}\n@layer base {\n*, :after, :before, ::backdrop {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n}\n::file-selector-button {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n}\nhtml, :host {\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    line-height: 1.5;\n    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n}\nhr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n}\nabbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n}\nh1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n}\na {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n}\nb, strong {\n    font-weight: bolder;\n}\ncode, kbd, samp, pre {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n}\nsmall {\n    font-size: 80%;\n}\nsub, sup {\n    vertical-align: baseline;\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n}\nsub {\n    bottom: -.25em;\n}\nsup {\n    top: -.5em;\n}\ntable {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n}\n:-moz-focusring {\n    outline: auto;\n}\nprogress {\n    vertical-align: baseline;\n}\nsummary {\n    display: list-item;\n}\nol, ul, menu {\n    list-style: none;\n}\nimg, svg, video, canvas, audio, iframe, embed, object {\n    vertical-align: middle;\n    display: block;\n}\nimg, video {\n    max-width: 100%;\n    height: auto;\n}\nbutton, input, select, optgroup, textarea {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n}\n::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n}\n:where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n}\n:where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n}\n::file-selector-button {\n    margin-inline-end: 4px;\n}\n::placeholder {\n    opacity: 1;\n}\n@supports (not ((-webkit-appearance: -apple-pay-button))) or (contain-intrinsic-size: 1px) {\n::placeholder {\n      color: currentColor;\n}\n@supports (color: color-mix(in lab, red, red)) {\n::placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n}\n}\n}\ntextarea {\n    resize: vertical;\n}\n::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n}\n::-webkit-datetime-edit {\n    display: inline-flex;\n}\n::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n}\n::-webkit-datetime-edit {\n    padding-block: 0;\n}\n::-webkit-datetime-edit-year-field {\n    padding-block: 0;\n}\n::-webkit-datetime-edit-month-field {\n    padding-block: 0;\n}\n::-webkit-datetime-edit-day-field {\n    padding-block: 0;\n}\n::-webkit-datetime-edit-hour-field {\n    padding-block: 0;\n}\n::-webkit-datetime-edit-minute-field {\n    padding-block: 0;\n}\n::-webkit-datetime-edit-second-field {\n    padding-block: 0;\n}\n::-webkit-datetime-edit-millisecond-field {\n    padding-block: 0;\n}\n::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n}\n::-webkit-calendar-picker-indicator {\n    line-height: 1;\n}\n:-moz-ui-invalid {\n    box-shadow: none;\n}\nbutton, input:where([type=\"button\"], [type=\"reset\"], [type=\"submit\"]) {\n    appearance: button;\n}\n::file-selector-button {\n    appearance: button;\n}\n::-webkit-inner-spin-button {\n    height: auto;\n}\n::-webkit-outer-spin-button {\n    height: auto;\n}\n[hidden]:where(:not([hidden=\"until-found\"])) {\n    display: none !important;\n}\n}\n@layer components {\n.ice_gray {\n    padding: var(--spacing-6);\n    background: var(--color-pane);\n    border-right: 1px solid var(--color-divider);\n    box-shadow: var(--shadow-e1);\n}\n.ice {\n    padding: var(--spacing-6);\n    background: var(--color-pane);\n    border: 1px solid var(--color-divider);\n    border-radius: var(--radius-md);\n    box-shadow: var(--shadow-e2);\n}\n.z-mx {\n    z-index: 30000;\n}\n}\n@layer utilities {\n.\\@container {\n    container-type: inline-size;\n}\n.collapse {\n    visibility: collapse;\n}\n.invisible {\n    visibility: hidden;\n}\n.visible {\n    visibility: visible;\n}\n.sr-only {\n    clip-path: inset(50%);\n    white-space: nowrap;\n    border-width: 0;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    position: absolute;\n    overflow: hidden;\n}\n.absolute {\n    position: absolute;\n}\n.fixed {\n    position: fixed;\n}\n.relative {\n    position: relative;\n}\n.static {\n    position: static;\n}\n.sticky {\n    position: sticky;\n}\n.top-\\[-25px\\] {\n    top: -25px;\n}\n.right-0 {\n    right: calc(var(--spacing) * 0);\n}\n.isolate {\n    isolation: isolate;\n}\n.col-span-1 {\n    grid-column: span 1 / span 1;\n}\n.row-span-4 {\n    grid-row: span 4 / span 4;\n}\n.float-left {\n    float: left;\n}\n.float-right {\n    float: right;\n}\n.container {\n    width: 100%;\n}\n@media (min-width: 40rem) {\n.container {\n      max-width: 40rem;\n}\n}\n@media (min-width: 48rem) {\n.container {\n      max-width: 48rem;\n}\n}\n@media (min-width: 64rem) {\n.container {\n      max-width: 64rem;\n}\n}\n@media (min-width: 80rem) {\n.container {\n      max-width: 80rem;\n}\n}\n@media (min-width: 96rem) {\n.container {\n      max-width: 96rem;\n}\n}\n.m-2 {\n    margin: calc(var(--spacing) * 2);\n}\n.mt-2 {\n    margin-top: calc(var(--spacing) * 2);\n}\n.mt-3 {\n    margin-top: calc(var(--spacing) * 3);\n}\n.mr-1 {\n    margin-right: calc(var(--spacing) * 1);\n}\n.mr-2 {\n    margin-right: calc(var(--spacing) * 2);\n}\n.mr-3 {\n    margin-right: calc(var(--spacing) * 3);\n}\n.mb-2 {\n    margin-bottom: calc(var(--spacing) * 2);\n}\n.mb-3 {\n    margin-bottom: calc(var(--spacing) * 3);\n}\n.ml-2 {\n    margin-left: calc(var(--spacing) * 2);\n}\n.ml-15 {\n    margin-left: calc(var(--spacing) * 15);\n}\n.box-border {\n    box-sizing: border-box;\n}\n.block {\n    display: block;\n}\n.contents {\n    display: contents;\n}\n.flex {\n    display: flex;\n}\n.grid {\n    display: grid;\n}\n.hidden {\n    display: none;\n}\n.inline {\n    display: inline;\n}\n.inline-block {\n    display: inline-block;\n}\n.table {\n    display: table;\n}\n.table-cell {\n    display: table-cell;\n}\n.h-40 {\n    height: calc(var(--spacing) * 40);\n}\n.h-84 {\n    height: calc(var(--spacing) * 84);\n}\n.h-120 {\n    height: calc(var(--spacing) * 120);\n}\n.h-full {\n    height: 100%;\n}\n.max-h-screen {\n    max-height: 100vh;\n}\n.w-full {\n    width: 100%;\n}\n.max-w-xs {\n    max-width: var(--container-xs);\n}\n.flex-shrink, .shrink {\n    flex-shrink: 1;\n}\n.flex-grow, .grow {\n    flex-grow: 1;\n}\n.border-collapse {\n    border-collapse: collapse;\n}\n.transform {\n    transform: var(--tw-rotate-x, ) var(--tw-rotate-y, ) var(--tw-rotate-z, ) var(--tw-skew-x, ) var(--tw-skew-y, );\n}\n.cursor-pointer {\n    cursor: pointer;\n}\n.resize {\n    resize: both;\n}\n.grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-4 {\n    grid-template-rows: repeat(4, minmax(0, 1fr));\n}\n.flex-col {\n    flex-direction: column;\n}\n.flex-row {\n    flex-direction: row;\n}\n.flex-nowrap {\n    flex-wrap: nowrap;\n}\n.flex-wrap {\n    flex-wrap: wrap;\n}\n.items-center {\n    align-items: center;\n}\n.justify-center {\n    justify-content: center;\n}\n.gap-4 {\n    gap: calc(var(--spacing) * 4);\n}\n.truncate {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.overflow-auto {\n    overflow: auto;\n}\n.overflow-hidden {\n    overflow: hidden;\n}\n.rounded {\n    border-radius: .25rem;\n}\n.rounded-lg {\n    border-radius: var(--radius-lg);\n}\n.border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n}\n.border-gray-200 {\n    border-color: var(--color-gray-200);\n}\n.bg-gray-300 {\n    background-color: var(--color-gray-300);\n}\n.bg-white {\n    background-color: var(--color-white);\n}\n.mask-repeat {\n    -webkit-mask-repeat: repeat;\n    mask-repeat: repeat;\n}\n.object-contain {\n    object-fit: contain;\n}\n.object-cover {\n    object-fit: cover;\n}\n.object-fill {\n    object-fit: fill;\n}\n.object-scale-down {\n    object-fit: scale-down;\n}\n.p-4 {\n    padding: calc(var(--spacing) * 4);\n}\n.pl-6 {\n    padding-left: calc(var(--spacing) * 6);\n}\n.text-justify {\n    text-align: justify;\n}\n.font-mono {\n    font-family: var(--font-mono);\n}\n.font-sans {\n    font-family: var(--font-sans);\n}\n.text-base {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n}\n.text-lg {\n    font-size: var(--text-lg);\n    line-height: var(--tw-leading, var(--text-lg--line-height));\n}\n.text-sm {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading, var(--text-sm--line-height));\n}\n.text-xl {\n    font-size: var(--text-xl);\n    line-height: var(--tw-leading, var(--text-xl--line-height));\n}\n.text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n}\n.font-semibold {\n    --tw-font-weight: var(--font-weight-semibold);\n    font-weight: var(--font-weight-semibold);\n}\n.text-wrap {\n    text-wrap: wrap;\n}\n.capitalize {\n    text-transform: capitalize;\n}\n.lowercase {\n    text-transform: lowercase;\n}\n.uppercase {\n    text-transform: uppercase;\n}\n.italic {\n    font-style: italic;\n}\n.ordinal {\n    --tw-ordinal: ordinal;\n    font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );\n}\n.line-through {\n    text-decoration-line: line-through;\n}\n.overline {\n    text-decoration-line: overline;\n}\n.underline {\n    text-decoration-line: underline;\n}\n.shadow {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n.shadow-e1 {\n    --tw-shadow: 0 1px 2px var(--tw-shadow-color, #00000073);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n.shadow-e2 {\n    --tw-shadow: 0 2px 8px var(--tw-shadow-color, #00000073);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n.shadow-e3 {\n    --tw-shadow: 0 8px 24px var(--tw-shadow-color, #00000080);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n.ring {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n.outline {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n}\n.blur {\n    --tw-blur: blur(8px);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n}\n.drop-shadow {\n    --tw-drop-shadow-size: drop-shadow(0 1px 2px var(--tw-drop-shadow-color, #0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color, #0000000f));\n    --tw-drop-shadow: drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n}\n.grayscale {\n    --tw-grayscale: grayscale(100%);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n}\n.invert {\n    --tw-invert: invert(100%);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n}\n.filter {\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n}\n.backdrop-filter {\n    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n}\n.transition {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n}\n.ease-in {\n    --tw-ease: var(--ease-in);\n    transition-timing-function: var(--ease-in);\n}\n.ease-in-out {\n    --tw-ease: var(--ease-in-out);\n    transition-timing-function: var(--ease-in-out);\n}\n.ease-out {\n    --tw-ease: var(--ease-out);\n    transition-timing-function: var(--ease-out);\n}\n}\n:root[data-theme=\"light\"] {\n  --color-bg: #eef1f4;\n  --color-pane: #f7f9fb;\n  --color-raised: #fff;\n  --color-canvas: #e2e7ec;\n  --color-divider: #d3dae1;\n  --color-outline: #b3bec9;\n  --color-fg: #16202a;\n  --color-dim: #55646f;\n  --color-accent: #1f6690;\n  --color-onAccent: #fff;\n  --color-brand: #8a6206;\n  --color-brandFill: #c08a10;\n  --color-onBrand: #14100a;\n  --color-ok: #1f6f4a;\n  --color-warn: #8a5a0c;\n  --color-err: #b02a1c;\n  --color-kw: #1f6690;\n  --color-measure: #8a5a0c;\n  --color-member: #1f6f4a;\n  --color-fn: #7b3fa0;\n  --color-primary: #1f6690;\n  --color-secondary: #55646f;\n  --color-success: #1f6f4a;\n  --color-info: #1f6690;\n  --color-danger: #b02a1c;\n  --color-warning: #8a5a0c;\n  --color-backgroundPrimary: #eef1f4;\n  --color-backgroundSecondary: #f7f9fb;\n  --color-backgroundElement: #fff;\n  --color-backgroundBorder: #d3dae1;\n  --color-textPrimary: #16202a;\n  --color-textInverted: #fff;\n  --color-daanse_blue: #1f6690;\n  --color-daanse_grey: #16202a;\n  --shadow-e1: 0 1px 2px #16202a24;\n  --shadow-e2: 0 2px 8px #16202a24;\n  --shadow-e3: 0 8px 24px #16202a24;\n}\n:root {\n  --mdxwb-bg: var(--color-bg);\n  --mdxwb-pane: var(--color-pane);\n  --mdxwb-raised: var(--color-raised);\n  --mdxwb-border: var(--color-divider);\n  --mdxwb-outline: var(--color-outline);\n  --mdxwb-fg: var(--color-fg);\n  --mdxwb-dim: var(--color-dim);\n  --mdxwb-accent: var(--color-accent);\n  --mdxwb-on-accent: var(--color-onAccent);\n  --mdxwb-ok: var(--color-ok);\n  --mdxwb-warn: var(--color-warn);\n  --mdxwb-err: var(--color-err);\n  --mdxwb-kw: var(--color-kw);\n  --mdxwb-measure: var(--color-measure);\n  --mdxwb-member: var(--color-member);\n  --mdxwb-fn: var(--color-fn);\n}\nbody {\n  font-family: var(--font-sans);\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-size: var(--text-base);\n  font-variation-settings: \"wdth\" 100;\n  background: var(--color-bg);\n  color: var(--color-fg);\n  font-style: normal;\n  --moveable-color: var(--color-outline) !important;\n}\ntable {\n  font-variant-numeric: tabular-nums;\n}\n.rCS1w3zcxh {\n  --moveable-color: var(--color-outline) !important;\n}\n.rCS1w3zcxh .moveable-line {\n  transform-origin: 0;\n  width: 1px;\n  height: 1px;\n  border-bottom: 2px dashed var(--color-outline) !important;\n  background: none !important;\n}\n@keyframes spin {\nto {\n    transform: rotate(360deg);\n}\n}\n* {\n  scrollbar-width: thin;\n  scrollbar-color: var(--color-outline) transparent;\n}\n::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n::-webkit-scrollbar-track {\n  background: none;\n}\n::-webkit-scrollbar-thumb {\n  background-color: var(--color-outline);\n  background-clip: padding-box;\n  border: 3px solid #0000;\n  border-radius: 6px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background-color: var(--color-dim);\n}\n::-webkit-scrollbar-corner {\n  background: none;\n}\n.resize-observer[data-v-b329ee4c] {\n  z-index: -1;\n  pointer-events: none;\n  opacity: 0;\n  background-color: #0000;\n  border: none;\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n.resize-observer[data-v-b329ee4c] object {\n  pointer-events: none;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n.v-popper__popper {\n  z-index: 10000;\n  outline: none;\n  top: 0;\n  left: 0;\n}\n.v-popper__popper.v-popper__popper--hidden {\n  visibility: hidden;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .15s, visibility .15s;\n}\n.v-popper__popper.v-popper__popper--shown {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity .15s;\n}\n.v-popper__popper.v-popper__popper--skip-transition, .v-popper__popper.v-popper__popper--skip-transition > .v-popper__wrapper {\n  transition: none !important;\n}\n.v-popper__backdrop {\n  width: 100%;\n  height: 100%;\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.v-popper__inner {\n  box-sizing: border-box;\n  position: relative;\n  overflow-y: auto;\n}\n.v-popper__inner > div {\n  z-index: 1;\n  max-width: inherit;\n  max-height: inherit;\n  position: relative;\n}\n.v-popper__arrow-container {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n}\n.v-popper__popper--arrow-overflow .v-popper__arrow-container, .v-popper__popper--no-positioning .v-popper__arrow-container {\n  display: none;\n}\n.v-popper__arrow-inner, .v-popper__arrow-outer {\n  border-style: solid;\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.v-popper__arrow-inner {\n  visibility: hidden;\n  border-width: 7px;\n}\n.v-popper__arrow-outer {\n  border-width: 6px;\n}\n.v-popper__popper[data-popper-placement^=\"top\"] .v-popper__arrow-inner, .v-popper__popper[data-popper-placement^=\"bottom\"] .v-popper__arrow-inner {\n  left: -2px;\n}\n.v-popper__popper[data-popper-placement^=\"top\"] .v-popper__arrow-outer, .v-popper__popper[data-popper-placement^=\"bottom\"] .v-popper__arrow-outer {\n  left: -1px;\n}\n.v-popper__popper[data-popper-placement^=\"top\"] .v-popper__arrow-inner, .v-popper__popper[data-popper-placement^=\"top\"] .v-popper__arrow-outer {\n  border-bottom-width: 0;\n  border-bottom-color: #0000 !important;\n  border-left-color: #0000 !important;\n  border-right-color: #0000 !important;\n}\n.v-popper__popper[data-popper-placement^=\"top\"] .v-popper__arrow-inner {\n  top: -2px;\n}\n.v-popper__popper[data-popper-placement^=\"bottom\"] .v-popper__arrow-container {\n  top: 0;\n}\n.v-popper__popper[data-popper-placement^=\"bottom\"] .v-popper__arrow-inner, .v-popper__popper[data-popper-placement^=\"bottom\"] .v-popper__arrow-outer {\n  border-top-width: 0;\n  border-top-color: #0000 !important;\n  border-left-color: #0000 !important;\n  border-right-color: #0000 !important;\n}\n.v-popper__popper[data-popper-placement^=\"bottom\"] .v-popper__arrow-inner {\n  top: -4px;\n}\n.v-popper__popper[data-popper-placement^=\"bottom\"] .v-popper__arrow-outer {\n  top: -6px;\n}\n.v-popper__popper[data-popper-placement^=\"left\"] .v-popper__arrow-inner, .v-popper__popper[data-popper-placement^=\"right\"] .v-popper__arrow-inner {\n  top: -2px;\n}\n.v-popper__popper[data-popper-placement^=\"left\"] .v-popper__arrow-outer, .v-popper__popper[data-popper-placement^=\"right\"] .v-popper__arrow-outer {\n  top: -1px;\n}\n.v-popper__popper[data-popper-placement^=\"right\"] .v-popper__arrow-inner, .v-popper__popper[data-popper-placement^=\"right\"] .v-popper__arrow-outer {\n  border-left-width: 0;\n  border-top-color: #0000 !important;\n  border-bottom-color: #0000 !important;\n  border-left-color: #0000 !important;\n}\n.v-popper__popper[data-popper-placement^=\"right\"] .v-popper__arrow-inner {\n  left: -4px;\n}\n.v-popper__popper[data-popper-placement^=\"right\"] .v-popper__arrow-outer {\n  left: -6px;\n}\n.v-popper__popper[data-popper-placement^=\"left\"] .v-popper__arrow-container {\n  right: -10px;\n}\n.v-popper__popper[data-popper-placement^=\"left\"] .v-popper__arrow-inner, .v-popper__popper[data-popper-placement^=\"left\"] .v-popper__arrow-outer {\n  border-right-width: 0;\n  border-top-color: #0000 !important;\n  border-bottom-color: #0000 !important;\n  border-right-color: #0000 !important;\n}\n.v-popper__popper[data-popper-placement^=\"left\"] .v-popper__arrow-inner {\n  left: -2px;\n}\n.v-popper--theme-tooltip .v-popper__inner {\n  color: #fff;\n  background: #000c;\n  border-radius: 6px;\n  padding: 7px 12px 6px;\n}\n.v-popper--theme-tooltip .v-popper__arrow-outer {\n  border-color: #000c;\n}\n.v-popper--theme-dropdown .v-popper__inner {\n  color: #000;\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  box-shadow: 0 6px 30px #0000001a;\n}\n.v-popper--theme-dropdown .v-popper__arrow-inner {\n  visibility: visible;\n  border-color: #fff;\n}\n.v-popper--theme-dropdown .v-popper__arrow-outer {\n  border-color: #ddd;\n}\n@property --tw-rotate-x {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-rotate-y {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-rotate-z {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-skew-x {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-skew-y {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-border-style {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-font-weight {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-ordinal {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-slashed-zero {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-numeric-figure {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-numeric-spacing {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-numeric-fraction {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-shadow-color {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-inset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-shadow-color {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-inset-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-ring-color {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-ring-color {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-inset-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-ring-inset {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-ring-offset-width {\n  syntax: \"<length>\";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-ring-offset-color {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: #fff;\n}\n@property --tw-ring-offset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-outline-style {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-blur {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-brightness {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-contrast {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-grayscale {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-hue-rotate {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-invert {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-opacity {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-saturate {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-sepia {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-drop-shadow {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-drop-shadow-color {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-drop-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-drop-shadow-size {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-backdrop-blur {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-backdrop-brightness {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-backdrop-contrast {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-backdrop-grayscale {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-backdrop-hue-rotate {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-backdrop-invert {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-backdrop-opacity {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-backdrop-saturate {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-backdrop-sepia {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-ease {\n  syntax: \"*\";\n  inherits: false\n}\n.layout-renderer[data-v-965fd8c7] {\n  width: 100%;\n  height: 100%;\n}\n.layout-renderer .edit-component-wrapper[data-v-965fd8c7],\n.layout-renderer .view-component-wrapper[data-v-965fd8c7] {\n  width: 100%;\n  height: 100%;\n}\n.layout-renderer .spinner[data-v-965fd8c7] {\n  width: 22px;\n  height: 22px;\n  border: 2px solid var(--color-divider);\n  border-top-color: var(--color-accent);\n  border-radius: 50%;\n  animation: layout-spin 700ms linear infinite;\n}\n.layout-renderer .no-layout-message[data-v-965fd8c7],\n.layout-renderer .loading-state[data-v-965fd8c7] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n}\n.layout-renderer .no-layout-message__text[data-v-965fd8c7] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  margin: 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-base);\n  line-height: 1.55;\n  color: var(--color-dim);\n}\n/* A turning ring needs a keyframe, and a keyframe cannot be scoped. */\n@keyframes layout-spin {\nto { transform: rotate(360deg);\n}\n}\n\n.floorplan[data-v-0eecd73b] {\n  position: relative;\n  aspect-ratio: 16 / 9;\n  background-color: var(--color-bg);\n  border-bottom: 1px solid var(--color-divider);\n  overflow: hidden;\n}\n.floorplan__block[data-v-0eecd73b] {\n  position: absolute;\n  margin: 2px 0 0 2px;\n  border-radius: 2px;\n  /* On the dark ground a lit edge reads as a block where a filled area only\n     reads as a stain - so the outline carries the family and the fill stays\n     barely there. The arrangement is what has to come across, not the hue. */\n  border: 1px solid color-mix(in srgb, currentColor 70%, transparent);\n  background-color: color-mix(in srgb, currentColor 14%, transparent);\n}\n.floorplan__block--data[data-v-0eecd73b] {\n  color: var(--color-accent);\n}\n.floorplan__block--visual[data-v-0eecd73b] {\n  color: var(--color-brand);\n}\n.floorplan__block--text[data-v-0eecd73b] {\n  color: var(--color-dim);\n}\n.floorplan__empty[data-v-0eecd73b] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n\n.storage[data-v-3b03814f] {\n  display: grid;\n  grid-template-columns: 280px minmax(0, 1fr);\n  flex: 1 1 auto;\n  min-height: 0;\n  background-color: var(--color-pane);\n  overflow: hidden;\n}\n\n/* ------------------------------------------------------------------ tree */\n.tree[data-v-3b03814f] {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  border-right: 1px solid var(--color-divider);\n}\n.tree__search[data-v-3b03814f] {\n  margin: 8px;\n  height: 26px;\n  padding: 0 8px;\n  font-size: var(--text-sm);\n  font-family: inherit;\n  color: var(--color-fg);\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n}\n.tree__body[data-v-3b03814f] {\n  flex: 1 1 auto;\n  min-height: 0;\n  padding: 0 4px 8px;\n  overflow-y: auto;\n}\n.row[data-v-3b03814f] {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: nowrap;\n  gap: 6px;\n  width: 100%;\n  padding: 4px 6px;\n  font-family: inherit;\n  font-size: var(--text-base);\n  color: var(--color-fg);\n  text-align: left;\n  background: none;\n  border: 0;\n  border-radius: var(--radius-xs);\n  cursor: pointer;\n}\n.row[data-v-3b03814f]:hover {\n  background-color: var(--color-raised);\n}\n.row.on[data-v-3b03814f] {\n  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);\n  box-shadow: inset 2px 0 0 var(--color-accent);\n}\n.row--place[data-v-3b03814f] {\n  font-weight: 600;\n}\n.row--entry[data-v-3b03814f] {\n  padding-left: 22px;\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n}\n.row--hint[data-v-3b03814f] {\n  padding-left: 22px;\n  margin: 0;\n  color: var(--color-dim);\n  font-size: var(--text-sm);\n  cursor: default;\n}\n.row--add[data-v-3b03814f] {\n  color: var(--color-dim);\n  font-size: var(--text-sm);\n}\n.row__twist[data-v-3b03814f] {\n  width: 12px;\n  flex: none;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.row__name[data-v-3b03814f] {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.row__meta[data-v-3b03814f] {\n  margin-left: auto;\n  padding-left: 8px;\n  flex: none;\n  font-family: var(--font-mono);\n  font-variant-numeric: tabular-nums;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n\n/* The state that is loaded right now carries the accent; the others stay quiet. */\n.row__dot[data-v-3b03814f] {\n  width: 5px;\n  height: 5px;\n  flex: none;\n  border-radius: 50%;\n  background-color: transparent;\n}\n.row__dot.open[data-v-3b03814f] {\n  background-color: var(--color-accent);\n}\n\n/* ---------------------------------------------------------------- detail */\n.detail[data-v-3b03814f] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n  background-color: var(--color-bg);\n  overflow-y: auto;\n}\n.detail__head[data-v-3b03814f] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  background-color: var(--color-pane);\n  border-bottom: 1px solid var(--color-divider);\n}\n.detail__name[data-v-3b03814f] {\n  margin: 0;\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.detail__facts[data-v-3b03814f] {\n  font-family: var(--font-mono);\n  font-variant-numeric: tabular-nums;\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.detail__spacer[data-v-3b03814f] {\n  flex: 1 1 auto;\n}\n.detail__badge[data-v-3b03814f] {\n  padding: 1px 6px;\n  font-size: var(--text-xs);\n  color: var(--color-accent);\n  background-color: color-mix(in srgb, var(--color-accent) 14%, transparent);\n  border-radius: var(--radius-xs);\n}\n.detail__hint[data-v-3b03814f] {\n  display: grid;\n  place-items: center;\n  flex: 1 1 auto;\n  margin: 0;\n  padding: 24px;\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n  text-align: center;\n}\n.detail__failure[data-v-3b03814f] {\n  margin: 12px 12px 0;\n  padding: 8px 10px;\n  font-size: var(--text-sm);\n  color: var(--color-err);\n  background-color: color-mix(in srgb, var(--color-err) 10%, transparent);\n  border-radius: var(--radius-xs);\n}\n\n/* --------------------------------------------------- boards inside a state */\n.boards[data-v-3b03814f] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n  padding: 12px;\n}\n.board[data-v-3b03814f] {\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.board__text[data-v-3b03814f] {\n  padding: 8px 10px;\n}\n.board__name[data-v-3b03814f] {\n  margin: 0;\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.board__facts[data-v-3b03814f] {\n  margin: 2px 0 0;\n  font-family: var(--font-mono);\n  font-variant-numeric: tabular-nums;\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.board__kinds[data-v-3b03814f] {\n  margin: 4px 0 0;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* ---------------------------------------------------------------- create */\n.create[data-v-3b03814f] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n}\n.create__label[data-v-3b03814f] {\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.create__input[data-v-3b03814f] {\n  height: 26px;\n  min-width: 220px;\n  padding: 0 8px;\n  font-size: var(--text-base);\n  font-family: inherit;\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n}\n.create__hint[data-v-3b03814f] {\n  flex: 1 0 100%;\n  margin: 0;\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.row[data-v-3b03814f]:focus-visible,\n.tree__search[data-v-3b03814f]:focus-visible,\n.create__input[data-v-3b03814f]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n\n.single[data-v-86d874a3] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  /* The same frame the grid view has, so switching tabs does not move the\n     content it shows. */\n  padding: 16px;\n  max-width: 640px;\n}\n.single__heading[data-v-86d874a3] {\n  margin: 0;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: var(--color-dim);\n  text-transform: uppercase;\n}\n.single__card[data-v-86d874a3] {\n  cursor: pointer;\n}\n.single__card[data-v-86d874a3]:hover,\n.single__card[data-v-86d874a3]:focus-visible {\n  border-color: var(--color-accent);\n}\n.single__card[data-v-86d874a3] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-md);\n}\n.single__icon[data-v-86d874a3] {\n  display: grid;\n  flex: none;\n  place-items: center;\n  width: 48px;\n  height: 48px;\n  color: var(--color-accent);\n  background-color: var(--color-sunken);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-sm);\n}\n.single__text[data-v-86d874a3] {\n  flex: 1;\n  min-width: 0;\n}\n.single__name[data-v-86d874a3] {\n  margin: 0;\n  font-size: 1.05rem;\n  color: var(--color-fg);\n}\n.single__desc[data-v-86d874a3] {\n  margin: 3px 0 0;\n  font-size: 0.85rem;\n  color: var(--color-dim);\n}\n.single__meta[data-v-86d874a3] {\n  margin: 4px 0 0;\n  font-size: 0.82rem;\n  color: var(--color-dim);\n}\n.single__actions[data-v-86d874a3] {\n  display: flex;\n  flex: none;\n  gap: 6px;\n}\n.single__note[data-v-86d874a3] {\n  margin: 0;\n  font-size: 0.82rem;\n  line-height: 1.5;\n  color: var(--color-dim);\n}\n.boards[data-v-86d874a3] {\n  /* The page container is a column flexbox; without this the launcher\n     shrinks to its content width instead of filling the surface. */\n  display: flex;\n  width: 100%;\n  flex: 1 1 auto;\n  min-height: 0;\n  padding: 14px 16px 16px;\n  background-color: var(--color-bg);\n}\n\n/*\n * One panel holds both views. The switch rides on its top edge the way the\n * other detail screens carry their tabs, so it reads as part of the surface\n * instead of floating above it.\n */\n.boards__panel[data-v-86d874a3] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-width: 0;\n  min-height: 0;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.boards__body[data-v-86d874a3] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0;\n  background-color: var(--color-bg);\n  overflow: auto;\n}\n\n/* The panel's top edge: the switch on the left, the tools for the current\n   view on the right. */\n.boards__bar[data-v-86d874a3] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  height: var(--spacing-panelHeader);\n  flex: none;\n  padding: 0 8px;\n  border-bottom: 1px solid var(--color-divider);\n}\n.boards__views[data-v-86d874a3] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  height: 100%;\n}\n.boards__view[data-v-86d874a3] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 100%;\n  padding: 0 12px;\n  font-size: var(--text-sm);\n  font-family: inherit;\n  font-weight: 500;\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n.boards__view[data-v-86d874a3]:hover {\n  color: var(--color-fg);\n}\n.boards__view.on[data-v-86d874a3] {\n  color: var(--color-fg);\n  font-weight: 600;\n}\n\n/* Sits on the panel edge, over the divider */\n.boards__view.on[data-v-86d874a3]::after {\n  content: '';\n  position: absolute;\n  left: 8px;\n  right: 8px;\n  bottom: -1px;\n  height: 2px;\n  background-color: var(--color-accent);\n  border-radius: 2px;\n}\n.boards__view[data-v-86d874a3]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.boards__title[data-v-86d874a3] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  font-size: var(--text-lg);\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.boards__count[data-v-86d874a3] {\n  font-family: var(--font-mono);\n  font-variant-numeric: tabular-nums;\n  font-size: var(--text-xs);\n  font-weight: 500;\n  color: var(--color-dim);\n  padding: 1px 6px;\n  border: 1px solid var(--color-divider);\n  border-radius: 999px;\n}\n.boards__tools[data-v-86d874a3] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.boards__search[data-v-86d874a3] {\n  height: 22px;\n  min-width: 180px;\n  padding: 0 8px;\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n  border: 1px solid var(--color-divider);\n  border-radius: 4px;\n}\n.boards__search[data-v-86d874a3]:focus-visible,\n.board[data-v-86d874a3]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.boards__grid[data-v-86d874a3] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));\n  align-content: start;\n  gap: 16px;\n  padding: 16px;\n}\n.board[data-v-86d874a3] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  overflow: hidden;\n  text-align: left;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-sm);\n  box-shadow: var(--shadow-e1);\n  cursor: pointer;\n  transition: border-color 120ms ease, box-shadow 120ms ease, transform 120ms ease;\n}\n.board[data-v-86d874a3]:hover {\n  border-color: var(--color-outline);\n  box-shadow: var(--shadow-e2);\n  transform: translateY(-1px);\n}\n.board__body[data-v-86d874a3] {\n  padding: 12px;\n}\n.board__name[data-v-86d874a3] {\n  margin: 0;\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.board__meta[data-v-86d874a3] {\n  margin: 2px 0 0;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.board__kinds[data-v-86d874a3] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin: 8px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.board__kind[data-v-86d874a3] {\n  padding: 1px 6px;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n  background-color: var(--color-canvas);\n  border-radius: 3px;\n}\n.board__kind--more[data-v-86d874a3] {\n  color: var(--color-outline);\n}\n.board__edit[data-v-86d874a3] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  padding: 2px 8px;\n  font-size: var(--text-xs);\n  font-family: inherit;\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n  border: 1px solid var(--color-divider);\n  border-radius: 3px;\n  opacity: 0;\n  cursor: pointer;\n}\n.board:hover .board__edit[data-v-86d874a3],\n.board__edit[data-v-86d874a3]:focus-visible {\n  opacity: 1;\n}\n.board--new[data-v-86d874a3] {\n  box-shadow: none;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  min-height: 180px;\n  font-family: inherit;\n  background-color: transparent;\n  border-style: dashed;\n}\n.board__plus[data-v-86d874a3] {\n  font-size: 20px;\n  line-height: 1;\n  color: var(--color-outline);\n}\n.board__usage[data-v-86d874a3] {\n  margin: 3px 0 0;\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  font-variant-numeric: tabular-nums;\n  color: var(--color-dim);\n}\n.boards__nomatch[data-v-86d874a3] {\n  grid-column: 1 / -1;\n  margin: 0;\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.boards__empty[data-v-86d874a3] {\n  max-width: 420px;\n  margin: 10vh auto 0;\n  padding: 0 16px;\n  text-align: center;\n}\n.boards__empty-plan[data-v-86d874a3] {\n  width: 200px;\n  margin: 0 auto 16px;\n  border: 1px solid var(--color-divider);\n  border-radius: 4px;\n}\n.boards__empty-title[data-v-86d874a3] {\n  margin: 0;\n  font-size: var(--text-lg);\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.boards__empty-text[data-v-86d874a3] {\n  margin: 8px 0 16px;\n  font-size: var(--text-sm);\n  line-height: 1.5;\n  color: var(--color-dim);\n}\n.boards__empty-actions[data-v-86d874a3] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n@media (prefers-reduced-motion: reduce) {\n.board[data-v-86d874a3] {\n    transition: none;\n}\n.board[data-v-86d874a3]:hover {\n    transform: none;\n}\n}\n\n.dottet[data-v-3ecae506]{\n  background: var(--color-canvas);\n  background-image: radial-gradient(var(--color-divider) 1px, transparent 0);\n  background-size: 40px 40px;\n  background-position: -19px -19px;\n}\n.ghost-placeholder[data-v-3ecae506] {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  border: 2px dashed var(--color-outline);\n  z-index: 100000;\n  pointer-events: none;\n}\n.report-container[data-v-3ecae506] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  /* Board surface from the mockups (view mode): canvas token, no dot grid */\n  background: var(--color-canvas, #dee1e7);\n}\n.report-container__title[data-v-3ecae506] {\n  width: 100%;\n  padding: 16px;\n  border-bottom: 1px dashed var(--color-divider, #ccd1d9);\n}\n.report-container .widgets-adding-controls[data-v-3ecae506] {\n  display: flex;\n  border: 1px solid var(--color-divider, #ccd1d9);\n  border-radius: 8px;\n  margin: 16px;\n}\n.report-container .widget-board[data-v-3ecae506] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  box-sizing: border-box;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.report-container .add-btn[data-v-3ecae506] {\n  margin: 0 16px 16px 0;\n  align-self: self-end;\n}\n.dashboard-item[data-v-3ecae506] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.dashboard-item-container[data-v-3ecae506] {\n  position: absolute;\n}\n.dropdown-buttons-container[data-v-3ecae506] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  z-index: 99999;\n}\n.va-dropdown__content[data-v-3ecae506] {\n  z-index: 10000000 !important;\n}\n.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-3ecae506] {\n  z-index: 20000000 !important;\n}\n.add_widget-button[data-v-3ecae506] {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  right: 30px;\n  bottom: 20px;\n}\n.v-enter-active[data-v-3ecae506],\n.v-leave-active[data-v-3ecae506] {\n  transition: opacity 0.5s ease;\n}\n.v-enter-from[data-v-3ecae506],\n.v-leave-to[data-v-3ecae506] {\n  opacity: 0;\n}\n\n/* One rhythm for both steps: 8px inside a group, 24px between groups. */\n.pick[data-v-6d945def],\n.fill[data-v-6d945def] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.pick__lead[data-v-6d945def] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--color-dim);\n}\n.pick__group[data-v-6d945def] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.pick__rubric[data-v-6d945def] {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n  color: var(--color-dim);\n  text-transform: none;\n}\n.tiles[data-v-6d945def] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.tile[data-v-6d945def] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n  height: 100%;\n  padding: 10px 12px;\n  font: inherit;\n  text-align: left;\n  background-color: var(--color-sunken);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n}\n.tile[data-v-6d945def]:hover {\n  border-color: var(--color-accent);\n}\n.tile[data-v-6d945def]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.tile--on[data-v-6d945def] {\n  border-color: var(--color-accent);\n  box-shadow: inset 2px 0 0 var(--color-accent);\n}\n.tile__head[data-v-6d945def] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.tile__icon[data-v-6d945def] {\n  flex: none;\n  color: var(--color-accent);\n}\n.tile__name[data-v-6d945def] {\n  flex: 1;\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.tile__check[data-v-6d945def] {\n  flex: none;\n  color: var(--color-accent);\n}\n\n/*\n * Three lines at most.\n *\n * The model's sentences run to different lengths, and a grid where one tile\n * is twice the height of its neighbour reads as broken. The full sentence\n * is on the second step, where there is room for it.\n */\n.tile__what[data-v-6d945def] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  overflow: hidden;\n  font-size: 0.8rem;\n  line-height: 1.45;\n  color: var(--color-dim);\n}\n.chosen[data-v-6d945def] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background-color: var(--color-sunken);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-sm);\n}\n.chosen__icon[data-v-6d945def] {\n  display: grid;\n  flex: none;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  color: var(--color-accent);\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-sm);\n}\n.chosen__text[data-v-6d945def] {\n  flex: 1;\n  min-width: 0;\n}\n.chosen__name[data-v-6d945def] {\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.chosen__what[data-v-6d945def] {\n  margin: 2px 0 0;\n  font-size: 0.82rem;\n  line-height: 1.45;\n  color: var(--color-dim);\n}\n\n/* Every field the same distance apart, whatever control it holds. */\n.fill__fields[data-v-6d945def] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.model__none[data-v-deac0807] {\n  margin: 0;\n  padding: 10px 12px;\n  font-size: 0.85rem;\n  color: var(--color-dim);\n  background-color: var(--color-sunken);\n  border-radius: var(--radius-sm);\n}\n\n.tags[data-v-b6b361a8] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tags__held[data-v-b6b361a8] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.tags__offer[data-v-b6b361a8] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.tags__suggestion[data-v-b6b361a8] {\n  padding: 2px 8px;\n  font-size: 0.8rem;\n  color: var(--color-dim);\n  background: none;\n  border: 1px dashed var(--color-outline);\n  border-radius: 999px;\n  cursor: pointer;\n}\n.tags__suggestion[data-v-b6b361a8]:hover {\n  color: var(--color-fg);\n  border-style: solid;\n  border-color: var(--color-accent);\n}\n\n.note[data-v-585727e2] {\n  margin: 0;\n  padding: 10px 12px;\n  font-size: 0.85rem;\n  line-height: 1.45;\n  color: var(--color-dim);\n  background-color: var(--color-sunken);\n  border-radius: var(--radius-sm);\n}\n.note--warn[data-v-585727e2] {\n  color: var(--color-fg);\n  border-left: 2px solid var(--color-warn, var(--color-accent));\n}\n\n\n\n\n.menu__catch[data-v-3e59dfe4] {\n  position: fixed;\n  inset: 0;\n  z-index: 50000;\n}\n.menu[data-v-3e59dfe4] {\n  position: fixed;\n  z-index: 50001;\n  min-width: 200px;\n  margin: 0;\n  padding: 4px;\n  list-style: none;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-sm);\n  box-shadow: var(--shadow-e3);\n}\n.menu__sep[data-v-3e59dfe4] {\n  margin-top: 4px;\n  padding-top: 4px;\n  border-top: 1px solid var(--color-outline);\n}\n.menu__item[data-v-3e59dfe4] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 6px 10px;\n  font: inherit;\n  color: var(--color-fg);\n  text-align: left;\n  background: none;\n  border: 0;\n  border-radius: var(--radius-xs, 3px);\n  cursor: pointer;\n}\n.menu__item[data-v-3e59dfe4]:hover,\n.menu__item[data-v-3e59dfe4]:focus-visible {\n  background-color: var(--color-sunken);\n}\n.menu__item--danger[data-v-3e59dfe4] {\n  color: var(--color-err);\n}\n\n.tree[data-v-b599ea25] {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  height: 100%;\n  border-right: 1px solid var(--color-divider);\n  background: var(--color-pane);\n  overflow: hidden;\n}\n.tree__head[data-v-b599ea25] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: none;\n  /* The panel's gutter, the same one the rows and the search box use. */\n  padding: 7px 8px 7px 10px;\n  border-bottom: 1px solid var(--color-divider);\n}\n.tree__title[data-v-b599ea25] {\n  flex: 1 1 auto;\n  margin: 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-xs);\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--color-dim);\n}\n.tree__search[data-v-b599ea25] {\n  flex: none;\n  padding: 8px 10px;\n  border-bottom: 1px solid var(--color-divider);\n}\n\n/* The tree scrolls; main.css paints the bar from the theme */\n.tree__body[data-v-b599ea25] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 4px 0;\n}\n.tree__list[data-v-b599ea25],\n.tree__sources[data-v-b599ea25] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.tree__sources[data-v-b599ea25] {\n  /* One step, the width of the chevron column: a source's icon lands under\n     its connection's name, which is what makes the nesting readable. */\n  padding-left: 22px;\n}\n.row[data-v-b599ea25] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  /* The hover and selection band still runs the full width; only what is\n     inside it starts at the gutter. */\n  padding-left: 10px;\n  padding-right: 4px;\n}\n.row[data-v-b599ea25]:hover {\n  background: var(--color-raised);\n}\n\n/* The selected row keeps its mark while the pointer is somewhere else */\n.row--on[data-v-b599ea25],\n.row--on[data-v-b599ea25]:hover {\n  background: color-mix(in srgb, var(--color-accent) 14%, transparent);\n}\n.row__twist[data-v-b599ea25] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 26px;\n  flex: none;\n  border: none;\n  background: transparent;\n  color: var(--color-dim);\n  cursor: pointer;\n}\n.row__twist--none[data-v-b599ea25] {\n  cursor: default;\n}\n.row__body[data-v-b599ea25] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  flex: 1 1 auto;\n  min-width: 0;\n  padding: 3px 2px;\n  border: none;\n  background: transparent;\n  font: inherit;\n  text-align: left;\n  color: var(--color-fg);\n  cursor: pointer;\n  /* A row with tags is two lines rather than a name squeezed out of its\n     own row: the name is what you read it by. */\n  flex-wrap: wrap;\n}\n.row__body[data-v-b599ea25]:disabled {\n  cursor: default;\n}\n.row__body[data-v-b599ea25]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: -2px;\n}\n.row__name[data-v-b599ea25] {\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  /* Shrinks last: the tags beside it give way first. */\n  min-width: 10ch;\n}\n.row--connection .row__name[data-v-b599ea25] {\n  font-weight: 600;\n}\n.row__icon[data-v-b599ea25] {\n  flex: none;\n  color: var(--color-dim);\n}\n\n/* A tag is a word, not a chip: a row holding several of them turns into a\n   bar of pills otherwise, and the name stops being the thing you read. */\n.row__tag[data-v-b599ea25] {\n  flex: none;\n  max-width: 84px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 6px;\n  font-size: 0.72rem;\n  line-height: 1.5;\n  color: var(--color-accent);\n  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.row__tag--more[data-v-b599ea25] {\n  color: var(--color-dim);\n  background-color: var(--color-sunken);\n}\n.row__what[data-v-b599ea25] {\n  flex: none;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n\n/* What reads from this source, pushed to the far end of the row */\n.row__usage[data-v-b599ea25] {\n  flex: none;\n  margin-left: auto;\n  padding-left: 8px;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n  white-space: nowrap;\n}\n.tree__empty[data-v-b599ea25] {\n  padding: 6px 10px;\n  font-family: var(--font-sans);\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n\n/*\n * Lines up with the names it stands in for, not with the gutter: it says\n * what is missing from this connection, so it belongs where those would be.\n */\n.tree__none[data-v-b599ea25] {\n  /* 36px inside a list that is already indented 22: the text lands on the\n     icon edge of the sources it stands in for. */\n  padding: 6px 10px 6px 36px;\n  font-family: var(--font-sans);\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.confirm__title[data-v-b599ea25] {\n  margin: 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.confirm__text[data-v-b599ea25] {\n  margin: 0 0 6px;\n  color: var(--color-dim);\n  line-height: 1.5;\n}\n.confirm__text--warn[data-v-b599ea25] {\n  color: var(--color-err);\n}\n\n.editor[data-v-41f0a44b] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  height: 100%;\n  min-height: 0;\n}\n.editor__fields[data-v-41f0a44b] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-width: 620px;\n}\n.editor__actions[data-v-41f0a44b] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 7px;\n}\n.editor__preview[data-v-41f0a44b] {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  overflow: auto;\n}\n\n.editor[data-v-0fad9a41] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.editor__fields[data-v-0fad9a41] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-width: 620px;\n}\n.editor__actions[data-v-0fad9a41] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 7px;\n}\n\n.data-page[data-v-2b44b5f1] {\n  display: flex;\n  height: 100%;\n  min-height: 0;\n}\n.data-page__tree[data-v-2b44b5f1] {\n  flex: none;\n  width: 320px;\n  min-height: 0;\n}\n.data-page__detail[data-v-2b44b5f1] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-width: 0;\n  min-height: 0;\n  background: var(--color-pane);\n  overflow: hidden;\n}\n.data-page__nothing[data-v-2b44b5f1] {\n  margin: auto;\n  font-family: var(--font-sans);\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.detail__head[data-v-2b44b5f1] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  flex: none;\n  padding: 12px 16px 8px;\n}\n.detail__what[data-v-2b44b5f1] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  min-width: 0;\n}\n.detail__name[data-v-2b44b5f1] {\n  margin: 0;\n  font-family: var(--font-sans);\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--color-fg);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.detail__sub[data-v-2b44b5f1] {\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n  white-space: nowrap;\n}\n\n/* What depends on this, before anything about it is changed */\n.detail__usage[data-v-2b44b5f1] {\n  margin-left: auto;\n  flex: none;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.detail__body[data-v-2b44b5f1] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n  padding: 16px;\n}\n\n/* The frame every full-surface area has: a panel on the canvas, a header\n   with a rule under it, and the content scrolling below. */\n.pages[data-v-21364f0b] {\n  display: flex;\n  width: 100%;\n  flex: 1 1 auto;\n  min-height: 0;\n  padding: 14px 16px 16px;\n  background-color: var(--color-bg);\n}\n.pages__panel[data-v-21364f0b] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-width: 0;\n  min-height: 0;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.pages__bar[data-v-21364f0b] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: var(--spacing-panelHeader);\n  flex: none;\n  padding: 0 8px;\n  border-bottom: 1px solid var(--color-divider);\n}\n.pages__title[data-v-21364f0b] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0;\n  font-size: var(--text-sm);\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.pages__count[data-v-21364f0b] {\n  font-family: var(--font-mono);\n  font-variant-numeric: tabular-nums;\n  font-size: var(--text-xs);\n  font-weight: 500;\n  color: var(--color-dim);\n}\n.pages__of[data-v-21364f0b] {\n  margin: 0;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.pages__tools[data-v-21364f0b] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.pages__search[data-v-21364f0b] {\n  height: 22px;\n  min-width: 180px;\n  padding: 0 8px;\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n  border: 1px solid var(--color-divider);\n  border-radius: 4px;\n}\n.pages__body[data-v-21364f0b] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0;\n  background-color: var(--color-bg);\n  overflow: auto;\n}\n.pages__grid[data-v-21364f0b] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));\n  align-content: start;\n  gap: 16px;\n  padding: 16px;\n}\n\n/* A page card is a board card: same thing, one level down. */\n.page[data-v-21364f0b] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  overflow: hidden;\n  text-align: left;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-sm);\n  box-shadow: var(--shadow-e1);\n  cursor: pointer;\n  transition: border-color 120ms ease, box-shadow 120ms ease, transform 120ms ease;\n}\n.page[data-v-21364f0b]:hover,\n.page[data-v-21364f0b]:focus-visible {\n  border-color: var(--color-outline);\n  box-shadow: var(--shadow-e2);\n  transform: translateY(-1px);\n}\n.page__body[data-v-21364f0b] {\n  padding: 12px;\n}\n.page__name[data-v-21364f0b] {\n  margin: 0;\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.page__meta[data-v-21364f0b] {\n  margin: 2px 0 0;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.page__usage[data-v-21364f0b] {\n  margin: 3px 0 0;\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  font-variant-numeric: tabular-nums;\n  color: var(--color-dim);\n}\n.page__kinds[data-v-21364f0b] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin: 8px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.page__kind[data-v-21364f0b] {\n  padding: 1px 6px;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n  background-color: var(--color-canvas);\n  border-radius: 3px;\n}\n\n/* Out of the way until the card is the one being looked at. */\n.page__edit[data-v-21364f0b] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  padding: 2px 8px;\n  font-family: inherit;\n  font-size: var(--text-xs);\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n  border: 1px solid var(--color-divider);\n  border-radius: 3px;\n  opacity: 0;\n  cursor: pointer;\n}\n.page:hover .page__edit[data-v-21364f0b],\n.page__edit[data-v-21364f0b]:focus-visible {\n  opacity: 1;\n}\n.page--new[data-v-21364f0b] {\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  min-height: 180px;\n  font-family: inherit;\n  background-color: transparent;\n  border-style: dashed;\n  box-shadow: none;\n}\n.page__plus[data-v-21364f0b] {\n  font-size: 20px;\n  line-height: 1;\n  color: var(--color-outline);\n}\n.pages__nomatch[data-v-21364f0b] {\n  grid-column: 1 / -1;\n  margin: 0;\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n\n/* A list, not a tile grid - that is what the mockups' palette is, and it\n   survives a 240px column. */\n.widgets_grid[data-v-3ac9fb06] {\n  display: flex;\n  flex-direction: column;\n}\n[data-v-3ac9fb06]  .widgets_grid-item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 9px;\n  padding: 6px 12px;\n  font-size: var(--text-base, 13px);\n  color: var(--color-fg);\n  cursor: grab;\n  border-radius: var(--radius-sm, 5px);\n  margin: 0 6px;\n}\n[data-v-3ac9fb06]  .widgets_grid-item:hover {\n  background: var(--color-bg);\n}\n[data-v-3ac9fb06]  .widgets_grid-icon {\n  width: 26px;\n  height: 26px;\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-raised);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-sm, 5px);\n  overflow: hidden;\n}\n[data-v-3ac9fb06]  .widgets_grid-icon img {\n  max-width: 18px;\n  max-height: 18px;\n}\n[data-v-3ac9fb06]  .widgets_grid-name {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* Docked into the palette panel of the editor (mockup screen 4) - the panel\n   owns position, width and header now. */\n.add_widget_window[data-v-3ac9fb06] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 6px 0;\n}\n\n/* What the scroll container was: a box that scrolls. */\n.add_widget_window__scroll[data-v-3ac9fb06] {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.scrim[data-v-67bd2420] {\n  position: fixed;\n  inset: 0;\n  z-index: 40000;\n  display: grid;\n  place-items: stretch;\n  padding: 26px 22px;\n  background-color: color-mix(in srgb, var(--color-canvas) 62%, transparent);\n  /* The board stays visible but out of focus - it is where you return to */\n  backdrop-filter: blur(6px);\n}\n.overlay[data-v-67bd2420] {\n  display: flex;\n  min-width: 0;\n  min-height: 0;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-outline);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-e3);\n  overflow: hidden;\n}\n\n/* ----------------------------------------------------------------- left */\n.stage[data-v-67bd2420] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.stage__head[data-v-67bd2420] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: var(--spacing-panelHeader);\n  flex: none;\n  padding: 0 12px;\n  background-color: var(--color-pane);\n  border-bottom: 1px solid var(--color-divider);\n}\n.stage__name[data-v-67bd2420] {\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.stage__uid[data-v-67bd2420] {\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.stage__spacer[data-v-67bd2420] {\n  flex: 1 1 auto;\n}\n.seg[data-v-67bd2420] {\n  display: flex;\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n  overflow: hidden;\n}\n.seg button[data-v-67bd2420] {\n  padding: 1px 9px;\n  font-family: inherit;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n.seg button.on[data-v-67bd2420] {\n  color: var(--color-onAccent);\n  background-color: var(--color-accent);\n}\n.stage__bar[data-v-67bd2420] {\n  flex: none;\n  padding: 5px 12px;\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n  border-bottom: 1px solid var(--color-divider);\n}\n.stage__body[data-v-67bd2420] {\n  flex: 1 1 auto;\n  display: grid;\n  place-items: center;\n  min-height: 0;\n  padding: 18px;\n  background-color: var(--color-canvas);\n  overflow: auto;\n}\n.preview[data-v-67bd2420] {\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n  overflow: hidden;\n}\n\n/* --------------------------------------------------------------- handle */\n.handle[data-v-67bd2420] {\n  width: var(--spacing-splitter);\n  flex: none;\n  cursor: col-resize;\n  background-color: var(--color-divider);\n}\n.handle[data-v-67bd2420]:hover,\n.handle[data-v-67bd2420]:focus-visible {\n  background-color: var(--color-accent);\n  outline: none;\n}\n\n/* ---------------------------------------------------------------- right */\n.side[data-v-67bd2420] {\n  display: flex;\n  flex-direction: column;\n  flex: none;\n  min-width: 0;\n  min-height: 0;\n  background-color: var(--color-pane);\n}\n\n/* The chart brings six sections of its own, so the row wraps rather than\n   scrolling sideways - a tab you have to hunt for is not a tab. */\n.tabs[data-v-67bd2420] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  min-height: var(--spacing-panelHeader);\n  flex: none;\n  padding: 0 6px;\n  gap: 1px;\n  border-bottom: 1px solid var(--color-divider);\n}\n.tab[data-v-67bd2420] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  height: var(--spacing-panelHeader);\n  padding: 0 9px;\n  font-family: inherit;\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n.tab.on[data-v-67bd2420] {\n  color: var(--color-fg);\n  font-weight: 600;\n}\n.tab.on[data-v-67bd2420]::after {\n  content: '';\n  position: absolute;\n  left: 7px;\n  right: 7px;\n  bottom: -1px;\n  height: 2px;\n  background-color: var(--color-accent);\n  border-radius: 2px;\n}\n.tab__n[data-v-67bd2420] {\n  font-family: var(--font-mono);\n  font-size: 9.5px;\n  font-variant-numeric: tabular-nums;\n  opacity: 0.8;\n}\n.fields[data-v-67bd2420] {\n  flex: 1 1 auto;\n  min-height: 0;\n  padding: 10px 12px 16px;\n  overflow-y: auto;\n}\n.pick[data-v-67bd2420] {\n  margin-bottom: 8px;\n}\n.rest__note[data-v-67bd2420] {\n  margin: 0 0 10px;\n  padding: 7px 9px;\n  font-size: var(--text-xs);\n  line-height: 1.5;\n  color: var(--color-dim);\n  background-color: var(--color-raised);\n  border-radius: var(--radius-xs);\n}\n.note[data-v-67bd2420] {\n  margin: 8px 0 0;\n  font-size: var(--text-sm);\n  line-height: 1.5;\n  color: var(--color-dim);\n}\n.var-mark[data-v-67bd2420] {\n  font-family: var(--font-mono);\n  font-style: italic;\n  color: var(--color-brand);\n}\n.bound[data-v-67bd2420] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.bound th[data-v-67bd2420] {\n  padding: 5px 8px;\n  text-align: left;\n  font-size: var(--text-xs);\n  font-weight: 600;\n  color: var(--color-dim);\n  border-bottom: 1px solid var(--color-divider);\n}\n.bound td[data-v-67bd2420] {\n  padding: 5px 8px;\n  border-bottom: 1px solid var(--color-divider);\n}\n.bound__name[data-v-67bd2420],\n.bound__var[data-v-67bd2420] {\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n}\n.bound__var[data-v-67bd2420] {\n  color: var(--color-brand);\n}\n.foot[data-v-67bd2420] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  height: 38px;\n  flex: none;\n  padding: 0 12px;\n  background-color: var(--color-pane);\n  border-top: 1px solid var(--color-divider);\n}\n.foot__hint[data-v-67bd2420] {\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.tab[data-v-67bd2420]:focus-visible,\n.seg button[data-v-67bd2420]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n\n/*\n * A docked panel on the right, the same surface and edge as the rest of the\n * workbench. It keeps the widget settings' shape - head, scrolling body,\n * footer - so the two read as the same kind of thing.\n */\n.page-settings[data-v-9ea0fdd8] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  bottom: 12px;\n  z-index: 1000000;\n  display: flex;\n  flex-direction: column;\n  width: 340px;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-md, 4px);\n  box-shadow: var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%));\n}\n.head[data-v-9ea0fdd8] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n  height: 34px;\n  padding: 0 6px 0 12px;\n  border-bottom: 1px solid var(--color-divider);\n}\n.head__title[data-v-9ea0fdd8] {\n  flex: 1;\n  margin: 0;\n  font-size: var(--text-sm, 12px);\n  font-weight: 500;\n  color: var(--color-fg);\n}\n.head__close[data-v-9ea0fdd8] {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n  line-height: 1;\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  border-radius: var(--radius-xs, 3px);\n  cursor: pointer;\n}\n.head__close[data-v-9ea0fdd8]:hover {\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n}\n.head__close[data-v-9ea0fdd8]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.body[data-v-9ea0fdd8] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 12px;\n}\n.group + .group[data-v-9ea0fdd8] {\n  margin-top: 18px;\n}\n.group__label[data-v-9ea0fdd8] {\n  margin: 0 0 8px;\n  font-size: var(--text-xs, 11px);\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--color-dim);\n}\n.group[data-v-9ea0fdd8] >  .field {\n  margin-bottom: 8px;\n}\n\n/* Shown, not offered: it is how the page is addressed, not a setting */\n.ident[data-v-9ea0fdd8] {\n  margin: 18px 0 0;\n  font-size: var(--text-xs, 11px);\n  color: var(--color-dim);\n}\n.ident code[data-v-9ea0fdd8] {\n  font-family: var(--font-mono);\n  user-select: all;\n}\n.missing[data-v-9ea0fdd8] {\n  margin: 0;\n  font-size: var(--text-sm, 12px);\n  color: var(--color-dim);\n}\n.foot[data-v-9ea0fdd8] {\n  display: flex;\n  justify-content: flex-end;\n  flex: none;\n  padding: 8px 12px;\n  border-top: 1px solid var(--color-divider);\n}\n\n.ghost {\n  display: none;\n}\n\n/* Three docked columns; the panels keep their width, the board takes the rest. */\n.editor[data-v-bd444b0c] {\n  /* The frame the palette floats in, and is kept inside of */\n  position: relative;\n  /* Said out loud: the board goes to the edge, and a class named \"editor\"\n     is common enough that something else may try to pad it */\n  padding: 0;\n  border: 0;\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--color-bg);\n}\n\n/* The one action the palette adds to its window's title bar */\n.palette__act[data-v-bd444b0c] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  border-radius: var(--radius-xs, 3px);\n  cursor: pointer;\n}\n.palette__act[data-v-bd444b0c]:hover {\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n}\n.palette__act[data-v-bd444b0c]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n.report-container[data-v-bd444b0c] {\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  min-width: 0;\n  height: 100%;\n  position: relative;\n  /* Board surface from the mockups (edit mode): canvas token + 24px dot grid */\n  background: var(--color-canvas);\n}\n.report-container.dottet[data-v-bd444b0c] {\n  background-image: radial-gradient(var(--color-divider) 1px, transparent 0);\n  background-size: 24px 24px;\n  background-position: -12px -12px;\n  background-repeat: repeat;\n}\n.report-container__title[data-v-bd444b0c] {\n  width: 100%;\n  padding: 16px;\n  border-bottom: 1px dashed var(--color-divider);\n}\n.report-container .widgets-adding-controls[data-v-bd444b0c] {\n  display: flex;\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-md, 8px);\n  margin: 16px;\n}\n.report-container .widget-board[data-v-bd444b0c] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  box-sizing: border-box;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.report-container .add-btn[data-v-bd444b0c] {\n  margin: 0 16px 16px 0;\n  align-self: self-end;\n}\n.dashboard-item[data-v-bd444b0c] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.dashboard-item-container[data-v-bd444b0c] {\n  position: absolute;\n}\n.dropdown-buttons-container[data-v-bd444b0c] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  z-index: 99999;\n}\n.va-dropdown__content[data-v-bd444b0c] {\n  z-index: 10000000 !important;\n}\n.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-bd444b0c] {\n  z-index: 20000000 !important;\n}\n.v-enter-active[data-v-bd444b0c],\n.v-leave-active[data-v-bd444b0c] {\n  transition: opacity 0.5s ease;\n}\n.v-enter-from[data-v-bd444b0c],\n.v-leave-to[data-v-bd444b0c] {\n  opacity: 0;\n}\n\n.variables[data-v-dda92d6f] {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  padding: 28px 32px 40px;\n  font-family: var(--font-sans);\n  color: var(--color-fg);\n  background-color: var(--color-bg);\n}\n.variables__head[data-v-dda92d6f],\n.reach[data-v-dda92d6f] {\n  width: 100%;\n  max-width: 940px;\n}\n.variables__head[data-v-dda92d6f] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.variables__title[data-v-dda92d6f] {\n  margin: 0 0 6px;\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n}\n.variables__lead[data-v-dda92d6f] {\n  margin: 0;\n  max-width: 56ch;\n  font-size: var(--text-base);\n  line-height: 1.55;\n  color: var(--color-dim);\n}\n\n/* ------------------------------------------------------------ the reaches */\n.reach__title[data-v-dda92d6f] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  margin: 0 0 2px;\n  font-size: var(--text-base);\n  font-weight: 600;\n}\n.reach__lead[data-v-dda92d6f] {\n  font-weight: 400;\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.reach__empty[data-v-dda92d6f] {\n  margin: 0;\n  padding: 12px 0;\n  border-top: 1px solid var(--color-divider);\n  font-size: var(--text-base);\n  color: var(--color-dim);\n}\n.rows[data-v-dda92d6f] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  border-top: 1px solid var(--color-divider);\n}\n\n/*\n * A name, what makes it, and what it says right now. No heading row: three\n * words over three columns told nobody anything the columns did not, and\n * the fourth said \"Actions\" over two icons.\n */\n.row[data-v-dda92d6f] {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(0, 1.4fr) minmax(0, 2fr) auto;\n  align-items: center;\n  gap: 16px;\n  padding: 7px 8px 7px 0;\n  border-bottom: 1px solid var(--color-divider);\n  font-size: var(--text-base);\n}\n.row[data-v-dda92d6f]:hover {\n  background-color: color-mix(in srgb, var(--color-pane) 60%, transparent);\n}\n.row__name[data-v-dda92d6f] {\n  font-family: var(--font-mono);\n  overflow-wrap: anywhere;\n}\n.row__type[data-v-dda92d6f],\n.row__value[data-v-dda92d6f] {\n  color: var(--color-dim);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.row__value[data-v-dda92d6f] {\n  font-family: var(--font-mono);\n  color: var(--color-fg);\n}\n.row__tools[data-v-dda92d6f] {\n  display: flex;\n  gap: 2px;\n}\n\n/* -------------------------------------------------------------- the dialog */\n.form[data-v-dda92d6f] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.confirm__title[data-v-dda92d6f] {\n  margin: 0;\n  font-size: var(--text-lg);\n  font-weight: 600;\n}\n.confirm__text[data-v-dda92d6f] {\n  margin: 0;\n  font-size: var(--text-base);\n  line-height: 1.6;\n  color: var(--color-dim);\n}\n@media (max-width: 640px) {\n.variables[data-v-dda92d6f] {\n    padding: 20px 16px 32px;\n}\n.row[data-v-dda92d6f] {\n    grid-template-columns: minmax(0, 1fr) auto;\n    row-gap: 2px;\n}\n.row__type[data-v-dda92d6f],\n  .row__value[data-v-dda92d6f] {\n    grid-column: 1;\n    white-space: normal;\n}\n}\n\n.appearance[data-v-a84ca0bf] {\n  display: flex;\n  width: 100%;\n  flex: 1 1 auto;\n  min-height: 0;\n  padding: 14px 16px 16px;\n  background-color: var(--color-bg);\n}\n.panel[data-v-a84ca0bf] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-width: 0;\n  min-height: 0;\n  background-color: var(--color-pane);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.panel__head[data-v-a84ca0bf] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: var(--spacing-panelHeader);\n  flex: none;\n  padding: 0 10px;\n  font-size: var(--text-xs);\n  font-weight: 650;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: var(--color-dim);\n  border-bottom: 1px solid var(--color-divider);\n}\n.head__tab[data-v-a84ca0bf] {\n  position: relative;\n  height: 100%;\n  padding: 0 10px;\n  font-family: inherit;\n  font-size: var(--text-xs);\n  font-weight: 650;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: var(--color-dim);\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n.head__tab.on[data-v-a84ca0bf] {\n  color: var(--color-fg);\n}\n.head__tab.on[data-v-a84ca0bf]::after {\n  content: '';\n  position: absolute;\n  left: 6px;\n  right: 6px;\n  bottom: -1px;\n  height: 2px;\n  background-color: var(--color-accent);\n  border-radius: 2px;\n}\n.head__tab[data-v-a84ca0bf]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: -2px;\n}\n\n/* -------------------------------------------------------------- gallery */\n.gallery[data-v-a84ca0bf] {\n  flex: 1 1 auto;\n  min-height: 0;\n  padding: 16px 18px 24px;\n  overflow-y: auto;\n  background-color: var(--color-bg);\n}\n.gallery__lead[data-v-a84ca0bf] {\n  margin: 0 0 18px;\n  max-width: 70ch;\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n}\n.demo[data-v-a84ca0bf] {\n  margin-bottom: 26px;\n}\n.demo__title[data-v-a84ca0bf] {\n  margin: 0 0 10px;\n  padding-bottom: 4px;\n  font-size: var(--text-xs);\n  font-weight: 650;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--color-dim);\n  border-bottom: 1px solid var(--color-divider);\n}\n.demo__row[data-v-a84ca0bf] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.demo__form[data-v-a84ca0bf] {\n  max-width: 460px;\n}\n.panel__tools[data-v-a84ca0bf] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  text-transform: none;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.changed[data-v-a84ca0bf] {\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  color: var(--color-accent);\n}\n.body[data-v-a84ca0bf] {\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 0;\n  background-color: var(--color-bg);\n}\n\n/* ---------------------------------------------------------------- themes */\n.themes[data-v-a84ca0bf] {\n  width: 240px;\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px 6px;\n  overflow-y: auto;\n  background-color: var(--color-pane);\n  border-right: 1px solid var(--color-divider);\n}\n.theme[data-v-a84ca0bf] {\n  display: grid;\n  gap: 3px;\n  padding: 8px;\n  font-family: inherit;\n  text-align: left;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: var(--radius-xs);\n  cursor: pointer;\n}\n.theme[data-v-a84ca0bf]:hover {\n  background-color: var(--color-raised);\n}\n.theme.on[data-v-a84ca0bf] {\n  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);\n  border-color: color-mix(in srgb, var(--color-accent) 45%, transparent);\n}\n.theme__strip[data-v-a84ca0bf] {\n  display: flex;\n  height: 14px;\n  border-radius: 2px;\n  overflow: hidden;\n  border: 1px solid var(--color-divider);\n}\n.theme__strip i[data-v-a84ca0bf] {\n  flex: 1;\n}\n.theme__name[data-v-a84ca0bf] {\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--color-fg);\n}\n.theme__note[data-v-a84ca0bf] {\n  font-size: var(--text-xs);\n  line-height: 1.4;\n  color: var(--color-dim);\n}\n\n/* ---------------------------------------------------------------- tokens */\n.tokens[data-v-a84ca0bf] {\n  flex: 1 1 auto;\n  min-width: 0;\n  padding: 8px 10px 16px;\n  overflow-y: auto;\n}\n.group__head[data-v-a84ca0bf] {\n  display: flex;\n  align-items: baseline;\n  gap: 7px;\n  width: 100%;\n  padding: 6px 4px;\n  font-family: inherit;\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--color-fg);\n  text-align: left;\n  background: none;\n  border: 0;\n  border-bottom: 1px solid var(--color-divider);\n  cursor: pointer;\n}\n.group__twist[data-v-a84ca0bf] {\n  width: 11px;\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n}\n.group__count[data-v-a84ca0bf] {\n  margin-left: auto;\n  font-family: var(--font-mono);\n  font-size: var(--text-xs);\n  font-variant-numeric: tabular-nums;\n  color: var(--color-dim);\n}\n.group__body[data-v-a84ca0bf] {\n  padding: 8px 0 14px 18px;\n}\n.group__note[data-v-a84ca0bf] {\n  margin: 0 0 8px;\n  font-size: var(--text-sm);\n  color: var(--color-dim);\n  max-width: 70ch;\n}\n.token[data-v-a84ca0bf] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 3px 0;\n}\n.token__swatch[data-v-a84ca0bf] {\n  width: 22px;\n  height: 22px;\n  flex: none;\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n}\n.token__swatch--none[data-v-a84ca0bf] {\n  background: repeating-linear-gradient(\n    45deg,\n    var(--color-raised),\n    var(--color-raised) 3px,\n    var(--color-bg) 3px,\n    var(--color-bg) 6px\n  );\n}\n.token__text[data-v-a84ca0bf] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n.token__name[data-v-a84ca0bf] {\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n}\n.token__role[data-v-a84ca0bf] {\n  font-size: var(--text-xs);\n  color: var(--color-dim);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.token__picker[data-v-a84ca0bf] {\n  width: 28px;\n  height: 24px;\n  flex: none;\n  padding: 0;\n  background: none;\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n  cursor: pointer;\n}\n.token__value[data-v-a84ca0bf] {\n  width: 220px;\n  flex: none;\n  height: 24px;\n  padding: 0 7px;\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n}\n.token__reset[data-v-a84ca0bf] {\n  width: 24px;\n  height: 24px;\n  flex: none;\n  font-family: inherit;\n  font-size: var(--text-base);\n  color: var(--color-dim);\n  background-color: var(--color-raised);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n  cursor: pointer;\n}\n.token__reset[data-v-a84ca0bf]:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n.btn[data-v-a84ca0bf] {\n  height: 22px;\n  padding: 0 10px;\n  font-family: inherit;\n  font-size: var(--text-sm);\n  color: var(--color-fg);\n  background-color: var(--color-raised);\n  border: 1px solid var(--color-divider);\n  border-radius: var(--radius-xs);\n  cursor: pointer;\n}\n.btn[data-v-a84ca0bf]:hover {\n  border-color: var(--color-outline);\n}\n.btn[data-v-a84ca0bf]:focus-visible,\n.theme[data-v-a84ca0bf]:focus-visible,\n.group__head[data-v-a84ca0bf]:focus-visible,\n.token__value[data-v-a84ca0bf]:focus-visible,\n.token__picker[data-v-a84ca0bf]:focus-visible,\n.token__reset[data-v-a84ca0bf]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 1px;\n}\n";})();
const { TINY_EMITTER, APP } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { identifier as identifier$6, VARIABLE_WRAPPER_FACTORY } from "org.eclipse.daanse.board.app.lib.factory.variableWrapper";
import { EVENT_MANAGER, EVENT_ACTIONS_REGISTRY_ID } from "org.eclipse.daanse.board.app.lib.api.events";
import { ref, defineComponent, computed, inject, onMounted, onBeforeUnmount, createElementBlock, openBlock, Fragment, createElementVNode, createBlock, createCommentVNode, renderList, unref, toDisplayString, normalizeClass, withModifiers, createVNode, createStaticVNode, Teleport, resolveComponent, shallowRef, watch, nextTick, normalizeStyle, resolveDynamicComponent, createTextVNode, withDirectives, vModelText, withCtx, withKeys, mergeModels, useModel, renderSlot, vShow, Transition, isRef, createApp } from "vue";
import { NAVIGATION_REGISTRY, NAVIGATION_REGISTRY_ID, NavigationItem } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID, RouteDefinition } from "org.eclipse.daanse.board.app.lib.api.route";
import { useCurrentHistory, useEList, useGlobalLoading, useEObject, useFeature, describeModel, useBoard, VariableComplexStringWrapper, VARIABLECOMPLEXSTRINGWRAPPER } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DIcon, DButton, DModal, DField, DSwitch, DInput, DChip, DIconPicker, DSelect, DTabs, DColorInput, DFloatingWindow, DDateInput, DSlider, DCheckbox, DDivider } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useRoute, useRouter, createRouter, createWebHistory } from "vue-router";
import { identifier as identifier$1 } from "org.eclipse.daanse.board.app.lib.api.page";
import { identifier as identifier$2 } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { identifier, WorkspaceImpl, ConnectionImpl, DatasourceImpl, VariableImpl, EventMappingImpl, BoardImpl, PageImpl, WidgetImpl, LayoutItemImpl } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { JSONResource, URI, OPTION_INDENT } from "@emfts/core";
import { identifier as identifier$3, CONNECTION_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as identifier$4, DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { identifier as identifier$5 } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as identifier$7 } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { identifier as identifier$8 } from "org.eclipse.daanse.board.app.lib.api.widget";
import Draggable from "vuedraggable";
import { WrapperSettingsPackage, wrapperSettingsFormXmi, WrapperSettingsImpl, WidgetWrapper } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { SettingsForm, isModelled } from "org.eclipse.daanse.board.app.ui.vue.uimodel";
import { VariableEvents } from "org.eclipse.daanse.board.app.lib.variables";
import { SystemActionsEcoreContent, WidgetAction } from "org.eclipse.daanse.board.app.lib.events";
import { loggerFactory } from "org.eclipse.daanse.board.app.lib.logger";
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
const rnds8 = new Uint8Array(16);
function rng() {
  return crypto.getRandomValues(rnds8);
}
function v4(options, buf, offset) {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return _v4(options);
}
function _v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
const settingsFor = ref(void 0);
function usePages() {
  return {
    /** The page whose settings are open, if any. */
    settingsFor,
    openSettings: (pageId) => {
      settingsFor.value = pageId;
    },
    closeSettings: () => {
      settingsFor.value = void 0;
    }
  };
}
const visible = ref(true);
function useWidgetPalette() {
  return {
    visible,
    toggle: () => {
      visible.value = !visible.value;
    },
    hide: () => {
      visible.value = false;
    }
  };
}
const ATTRIBUTE$1 = "data-board-backdrop";
const KEY$3 = "daanse.board.backdrop";
function read$3() {
  try {
    return localStorage.getItem(KEY$3) === "on";
  } catch {
    return false;
  }
}
const shown = ref(read$3());
function paint$2() {
  document.documentElement.setAttribute(ATTRIBUTE$1, shown.value ? "on" : "off");
}
function persist$2() {
  try {
    localStorage.setItem(KEY$3, shown.value ? "on" : "off");
  } catch {
  }
}
function useBoardBackdrop() {
  return {
    shown,
    toggle: () => {
      shown.value = !shown.value;
      persist$2();
      paint$2();
    }
  };
}
function initBoardBackdrop() {
  paint$2();
}
const ATTRIBUTE = "data-board-snap";
const KEY$2 = "daanse.board.snap";
function read$2() {
  try {
    const stored = localStorage.getItem(KEY$2);
    return stored === null ? true : stored === "on";
  } catch {
    return true;
  }
}
const snapping = ref(read$2());
function paint$1() {
  document.documentElement.setAttribute(ATTRIBUTE, snapping.value ? "on" : "off");
}
function persist$1() {
  try {
    localStorage.setItem(KEY$2, snapping.value ? "on" : "off");
  } catch {
  }
}
function useGridSnap() {
  return {
    snapping,
    toggle: () => {
      snapping.value = !snapping.value;
      persist$1();
      paint$1();
    }
  };
}
function initGridSnap() {
  paint$1();
}
const _hoisted_1$m = { class: "topbar" };
const _hoisted_2$k = {
  class: "crumb",
  "aria-label": "Pfad"
};
const _hoisted_3$g = {
  key: 0,
  class: "crumb-sep",
  "aria-hidden": "true"
};
const _hoisted_4$f = ["onClick"];
const _hoisted_5$d = ["aria-expanded"];
const _hoisted_6$c = { class: "pages__name" };
const _hoisted_7$c = {
  key: 0,
  class: "pages__menu",
  role: "menu"
};
const _hoisted_8$c = ["onClick"];
const _hoisted_9$b = ["title", "aria-label", "onClick"];
const _hoisted_10$a = ["disabled", "title"];
const _hoisted_11$8 = ["disabled", "title"];
const _hoisted_12$8 = ["aria-pressed"];
const _hoisted_13$7 = ["aria-pressed"];
const _hoisted_14$7 = ["aria-pressed"];
const _hoisted_15$7 = {
  key: 8,
  class: "modes",
  role: "group",
  "aria-label": "Modus"
};
const _hoisted_16$6 = ["aria-pressed"];
const _hoisted_17$6 = ["aria-pressed"];
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "Header",
  setup(__props) {
    const route = useRoute();
    const router2 = useRouter();
    const pageId = computed(() => route.params.pageid ?? "");
    const history = useCurrentHistory();
    const isEditing = computed(
      () => route.name === "edit" || route.name === "pageEdit" || String(route.path).endsWith("/edit")
    );
    const workspace = inject(identifier);
    const modelledPages = useEList(workspace, (w) => w.board?.pages);
    const crumb = computed(() => {
      void modelledPages.value;
      const boards = { label: "Boards", to: "/" };
      const board = {
        label: workspace.board?.name || "Board",
        to: pageId.value ? `/page/${pageId.value}` : void 0
      };
      switch (route.name) {
        case "home":
          return [{ label: "Boards" }];
        case "page":
          return [boards, { label: board.label }];
        case "edit":
        case "pageEdit":
          return [boards, board, { label: "Bearbeiten" }];
        case "pages":
          return [boards, board, { label: "Seiten" }];
        case "data":
          return [boards, { label: "Verbindungen & Daten" }];
        case "config":
          return [boards, { label: "Konfiguration" }];
        case "save":
          return [boards, { label: "Speicher" }];
        case "test":
          return [boards, { label: "Test" }];
        default:
          return [boards, { label: String(route.name ?? "Board") }];
      }
    });
    const showModes = computed(() => Boolean(pageId.value));
    const pageRepo = inject(identifier$1);
    inject(identifier$2);
    const { openSettings: openPageSettings } = usePages();
    const { visible: paletteVisible, toggle: togglePalette } = useWidgetPalette();
    const { shown: backdropShown, toggle: toggleBackdrop } = useBoardBackdrop();
    const { snapping: snapping2, toggle: toggleSnapping } = useGridSnap();
    const hasBackdrop = computed(() => {
      void modelledPages.value;
      if (!pageId.value) return false;
      try {
        const page = pageRepo?.getPage(pageId.value);
        return Boolean(page?.backgroundImage?.trim() || page?.backgroundColor?.trim());
      } catch {
        return false;
      }
    });
    const pages = computed(() => {
      void modelledPages.value;
      const ids = pageRepo?.getAllPageIds() ?? [];
      const found = [];
      for (const id of ids) {
        const page = pageRepo?.getPage(id);
        if (page) found.push(page);
      }
      return found;
    });
    const currentPageName = computed(() => {
      void modelledPages.value;
      if (!pageId.value) return "";
      try {
        return pageRepo?.getPage(pageId.value)?.name ?? "Seite";
      } catch {
        return "Seite";
      }
    });
    const pagesOpen = ref(false);
    function choosePage(id) {
      pagesOpen.value = false;
      if (id === pageId.value) return;
      router2.push(isEditing.value ? `/page/${id}/edit` : `/page/${id}`);
    }
    const menuHost = ref();
    function onDocumentPointer(event) {
      if (!pagesOpen.value) return;
      if (!menuHost.value?.contains(event.target)) pagesOpen.value = false;
    }
    function onEscape(event) {
      if (event.key === "Escape") pagesOpen.value = false;
    }
    onMounted(() => {
      document.addEventListener("pointerdown", onDocumentPointer);
      document.addEventListener("keydown", onEscape);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("pointerdown", onDocumentPointer);
      document.removeEventListener("keydown", onEscape);
    });
    function addPage() {
      const id = v4();
      pageRepo?.registerPage({
        id,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: true,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      });
      pagesOpen.value = false;
      router2.push(`/page/${id}/edit`);
    }
    const canRemove = computed(() => pages.value.length > 1);
    function removePage(id) {
      if (!canRemove.value) return;
      const page = pages.value.find((p) => p.id === id);
      if (!confirm(`Seite „${page?.name ?? id}" löschen? Das lässt sich nicht rückgängig machen.`)) return;
      pageRepo?.unregisterPage(id);
      if (id === pageId.value) {
        const next = pages.value.find((p) => p.id !== id);
        if (next) router2.push(isEditing.value ? `/page/${next.id}/edit` : `/page/${next.id}`);
      }
    }
    const openView = () => {
      if (pageId.value) router2.push(`/page/${pageId.value}`);
    };
    const openEdit = () => {
      if (pageId.value) router2.push(`/page/${pageId.value}/edit`);
    };
    const openStorage = () => router2.push({ path: "/", query: { view: "storage" } });
    const openAppearance = () => router2.push("/appearance");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("header", _hoisted_1$m, [
          _cache[14] || (_cache[14] = createElementVNode("span", { class: "brand" }, [
            createElementVNode("span", {
              class: "brand-mark",
              "aria-hidden": "true"
            }, "D"),
            createElementVNode("span", { class: "brand-name" }, "Daanse Board")
          ], -1)),
          createElementVNode("nav", _hoisted_2$k, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(crumb.value, (part, i) => {
              return openBlock(), createElementBlock(Fragment, {
                key: part.label + i
              }, [
                i > 0 ? (openBlock(), createElementBlock("span", _hoisted_3$g, "/")) : createCommentVNode("", true),
                part.to && i < crumb.value.length - 1 ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  class: "crumb-part crumb-link",
                  onClick: ($event) => unref(router2).push(part.to)
                }, toDisplayString(part.label), 9, _hoisted_4$f)) : (openBlock(), createElementBlock("span", {
                  key: 2,
                  class: normalizeClass(["crumb-part", { current: i === crumb.value.length - 1 }])
                }, toDisplayString(part.label), 3))
              ], 64);
            }), 128))
          ]),
          showModes.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "menuHost",
            ref: menuHost,
            class: "pages"
          }, [
            createElementVNode("button", {
              type: "button",
              class: "pages__current",
              "aria-expanded": pagesOpen.value,
              "aria-haspopup": "menu",
              title: "Seite wechseln",
              onClick: _cache[0] || (_cache[0] = ($event) => pagesOpen.value = !pagesOpen.value)
            }, [
              createElementVNode("span", _hoisted_6$c, toDisplayString(currentPageName.value), 1),
              _cache[7] || (_cache[7] = createElementVNode("span", {
                class: "pages__caret",
                "aria-hidden": "true"
              }, "▾", -1))
            ], 8, _hoisted_5$d),
            pagesOpen.value ? (openBlock(), createElementBlock("ul", _hoisted_7$c, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(pages.value, (page) => {
                return openBlock(), createElementBlock("li", {
                  key: page.id,
                  role: "none",
                  class: "pages__line"
                }, [
                  createElementVNode("button", {
                    type: "button",
                    role: "menuitem",
                    class: normalizeClass(["pages__item", { on: page.id === pageId.value }]),
                    onClick: ($event) => choosePage(page.id)
                  }, toDisplayString(page.name), 11, _hoisted_8$c),
                  canRemove.value ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    type: "button",
                    class: "pages__remove",
                    title: `Seite „${page.name}“ löschen`,
                    "aria-label": `Seite ${page.name} löschen`,
                    onClick: withModifiers(($event) => removePage(page.id), ["stop"])
                  }, " × ", 8, _hoisted_9$b)) : createCommentVNode("", true)
                ]);
              }), 128)),
              _cache[8] || (_cache[8] = createElementVNode("li", {
                class: "pages__sep",
                role: "separator"
              }, null, -1)),
              createElementVNode("li", { role: "none" }, [
                createElementVNode("button", {
                  type: "button",
                  role: "menuitem",
                  class: "pages__item pages__add",
                  onClick: addPage
                }, " + Neue Seite ")
              ])
            ])) : createCommentVNode("", true)
          ], 512)) : createCommentVNode("", true),
          isEditing.value && unref(history) ? (openBlock(), createElementBlock("button", {
            key: 1,
            type: "button",
            class: "icon-action",
            disabled: !unref(history).canUndo.value,
            title: unref(history).undoLabel.value ? `Rückgängig: ${unref(history).undoLabel.value}` : "Rückgängig",
            "aria-label": "Letzte Änderung rückgängig machen",
            onClick: _cache[1] || (_cache[1] = ($event) => unref(history).undo())
          }, [
            createVNode(unref(DIcon), {
              name: "undo",
              size: "sm"
            })
          ], 8, _hoisted_10$a)) : createCommentVNode("", true),
          isEditing.value && unref(history) ? (openBlock(), createElementBlock("button", {
            key: 2,
            type: "button",
            class: "icon-action",
            disabled: !unref(history).canRedo.value,
            title: unref(history).redoLabel.value ? `Wiederholen: ${unref(history).redoLabel.value}` : "Wiederholen",
            "aria-label": "Rückgängig gemachte Änderung wiederholen",
            onClick: _cache[2] || (_cache[2] = ($event) => unref(history).redo())
          }, [
            createVNode(unref(DIcon), {
              name: "redo",
              size: "sm"
            })
          ], 8, _hoisted_11$8)) : createCommentVNode("", true),
          isEditing.value ? (openBlock(), createElementBlock("button", {
            key: 3,
            type: "button",
            class: normalizeClass(["icon-action", { on: unref(snapping2) }]),
            "aria-pressed": unref(snapping2),
            title: "Am Raster ausrichten",
            "aria-label": "Widgets am Raster ausrichten",
            onClick: _cache[3] || (_cache[3] = //@ts-ignore
            (...args) => unref(toggleSnapping) && unref(toggleSnapping)(...args))
          }, [..._cache[9] || (_cache[9] = [
            createElementVNode("svg", {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "15",
              height: "15"
            }, [
              createElementVNode("path", {
                d: "M9 3.5v17M15 3.5v17M3.5 9h17M3.5 15h17",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.3",
                opacity: "0.55"
              }),
              createElementVNode("rect", {
                x: "9",
                y: "9",
                width: "6",
                height: "6",
                fill: "currentColor"
              })
            ], -1)
          ])], 10, _hoisted_12$8)) : createCommentVNode("", true),
          isEditing.value && hasBackdrop.value ? (openBlock(), createElementBlock("button", {
            key: 4,
            type: "button",
            class: normalizeClass(["icon-action", { on: unref(backdropShown) }]),
            "aria-pressed": unref(backdropShown),
            title: "Hintergrund der Seite zeigen",
            "aria-label": "Hintergrund der Seite beim Bearbeiten zeigen oder verbergen",
            onClick: _cache[4] || (_cache[4] = //@ts-ignore
            (...args) => unref(toggleBackdrop) && unref(toggleBackdrop)(...args))
          }, [..._cache[10] || (_cache[10] = [
            createElementVNode("svg", {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "15",
              height: "15"
            }, [
              createElementVNode("rect", {
                x: "3.5",
                y: "5",
                width: "17",
                height: "14",
                rx: "1.5",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.6"
              }),
              createElementVNode("circle", {
                cx: "9",
                cy: "10",
                r: "1.6",
                fill: "currentColor"
              }),
              createElementVNode("path", {
                d: "M4 17l4.5-4.5 3 3L15 12l5 5",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.6",
                "stroke-linejoin": "round"
              })
            ], -1)
          ])], 10, _hoisted_13$7)) : createCommentVNode("", true),
          isEditing.value ? (openBlock(), createElementBlock("button", {
            key: 5,
            type: "button",
            class: normalizeClass(["icon-action", { on: unref(paletteVisible) }]),
            "aria-pressed": unref(paletteVisible),
            title: "Widgets",
            "aria-label": "Widget-Palette zeigen oder verbergen",
            onClick: _cache[5] || (_cache[5] = //@ts-ignore
            (...args) => unref(togglePalette) && unref(togglePalette)(...args))
          }, [..._cache[11] || (_cache[11] = [
            createStaticVNode('<svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15" data-v-46a52363><rect x="3.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-46a52363></rect><rect x="13.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-46a52363></rect><rect x="3.5" y="13.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-46a52363></rect><rect x="13.5" y="13.5" width="7" height="7" rx="1" fill="currentColor" stroke="currentColor" stroke-width="1.6" data-v-46a52363></rect></svg>', 1)
          ])], 10, _hoisted_14$7)) : createCommentVNode("", true),
          showModes.value ? (openBlock(), createElementBlock("button", {
            key: 6,
            type: "button",
            class: "icon-action",
            title: "Seite einrichten",
            "aria-label": "Seite einrichten",
            onClick: _cache[6] || (_cache[6] = ($event) => unref(openPageSettings)(pageId.value))
          }, [..._cache[12] || (_cache[12] = [
            createElementVNode("svg", {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "15",
              height: "15"
            }, [
              createElementVNode("circle", {
                cx: "12",
                cy: "12",
                r: "3.2",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.6"
              }),
              createElementVNode("path", {
                d: "M12 4.2v2M12 17.8v2M4.2 12h2M17.8 12h2M6.5 6.5l1.4 1.4M16.1 16.1l1.4 1.4M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.6",
                "stroke-linecap": "round"
              })
            ], -1)
          ])])) : createCommentVNode("", true),
          _cache[15] || (_cache[15] = createElementVNode("span", { class: "spacer" }, null, -1)),
          showModes.value ? (openBlock(), createElementBlock("button", {
            key: 7,
            type: "button",
            class: "action",
            title: "Arbeitsstand speichern oder laden",
            onClick: openStorage
          }, " Speichern ")) : createCommentVNode("", true),
          showModes.value ? (openBlock(), createElementBlock("div", _hoisted_15$7, [
            createElementVNode("button", {
              type: "button",
              class: normalizeClass(["mode", { on: !isEditing.value }]),
              "aria-pressed": !isEditing.value,
              onClick: openView
            }, " Ansicht ", 10, _hoisted_16$6),
            createElementVNode("button", {
              type: "button",
              class: normalizeClass(["mode", { on: isEditing.value }]),
              "aria-pressed": isEditing.value,
              onClick: openEdit
            }, " Bearbeiten ", 10, _hoisted_17$6)
          ])) : createCommentVNode("", true),
          createElementVNode("button", {
            type: "button",
            class: "icon-action",
            title: "Erscheinungsbild",
            "aria-label": "Erscheinungsbild",
            onClick: openAppearance
          }, [..._cache[13] || (_cache[13] = [
            createElementVNode("svg", {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "15",
              height: "15"
            }, [
              createElementVNode("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.6"
              }),
              createElementVNode("path", {
                d: "M12 3a9 9 0 0 1 0 18z",
                fill: "currentColor"
              })
            ], -1)
          ])]),
          _cache[16] || (_cache[16] = createElementVNode("span", {
            class: "avatar",
            title: "Angemeldet"
          }, "MH", -1))
        ]),
        (openBlock(), createBlock(Teleport, { to: "body" }))
      ], 64);
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
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-46a52363"]]);
const TOKEN_GROUPS = [
  {
    id: "surfaces",
    label: "Flächen",
    note: "Von hinten nach vorn: der Grund, die Panels darauf, die Dinge darin.",
    tokens: [
      { name: "color-bg", role: "Grundfläche der App, Editorflächen, Eingabefelder", kind: "color" },
      { name: "color-pane", role: "Panels, Topbar, Aktivitätsleiste, Widgets", kind: "color" },
      { name: "color-raised", role: "Knöpfe, Tabellenköpfe, Chips, Abzeichen", kind: "color" },
      { name: "color-canvas", role: "Boardfläche hinter den Widgets", kind: "color" },
      { name: "color-divider", role: "Panelkanten, Trenner, Tabellenlinien", kind: "color" },
      { name: "color-outline", role: "Umrisse bedienbarer Dinge", kind: "color" }
    ]
  },
  {
    id: "text",
    label: "Text und Akzent",
    note: "Jede Farbe hier wurde gegen die Fläche gemessen, auf der sie sitzt.",
    tokens: [
      { name: "color-fg", role: "Fließtext und Beschriftungen", kind: "color" },
      { name: "color-dim", role: "Zweitrangiger Text, Kennzahlen, Panelüberschriften", kind: "color" },
      { name: "color-accent", role: "Auswahl, aktive Zustände, Hauptknopf", kind: "color" },
      { name: "color-onAccent", role: "Text auf der Akzentfläche", kind: "color" },
      { name: "color-brand", role: "Daanse-Marke als Text", kind: "color" },
      { name: "color-brandFill", role: "Daanse-Marke als Fläche", kind: "color" },
      { name: "color-onBrand", role: "Text auf der Markenfläche", kind: "color" }
    ]
  },
  {
    id: "state",
    label: "Zustand",
    note: "Nur für Zustände. Wer sie dekorativ verbraucht, kann später nichts mehr melden.",
    tokens: [
      { name: "color-ok", role: "Im Rahmen, verbunden, erfolgreich", kind: "color" },
      { name: "color-warn", role: "Braucht Aufmerksamkeit", kind: "color" },
      { name: "color-err", role: "Außerhalb des Rahmens, fehlgeschlagen", kind: "color" }
    ]
  },
  {
    id: "syntax",
    label: "MDX-Syntax",
    note: "Hervorhebung im Abfrage-Editor und in der Workbench.",
    tokens: [
      { name: "color-kw", role: "Schlüsselwörter", kind: "color" },
      { name: "color-measure", role: "Kennzahlen", kind: "color" },
      { name: "color-member", role: "Elemente", kind: "color" },
      { name: "color-fn", role: "Funktionen", kind: "color" }
    ]
  },
  {
    id: "type",
    label: "Schrift",
    note: "Zwei Familien: eine für die Oberfläche, eine für alles, was gezählt oder gemessen wird.",
    tokens: [
      { name: "font-sans", role: "Oberflächenschrift", kind: "font" },
      { name: "font-mono", role: "Zahlen, Namen von Ständen, Code", kind: "font" },
      { name: "text-xs", role: "Abzeichen, Zähler, Statuszeile", kind: "length" },
      { name: "text-sm", role: "Zweitrangige Oberfläche, Reiter, Tabellen", kind: "length" },
      { name: "text-base", role: "Standard: Baumzeilen, Formulare, Knöpfe", kind: "length" },
      { name: "text-lg", role: "Überschriften in Panels, Leerzustände", kind: "length" },
      { name: "text-xl", role: "Kennzahlen im Board", kind: "length" }
    ]
  },
  {
    id: "shape",
    label: "Form",
    tokens: [
      { name: "radius-xs", role: "Abzeichen, kleine Knöpfe", kind: "length" },
      { name: "radius-sm", role: "Panels, Karten, Eingabefelder", kind: "length" },
      { name: "radius-md", role: "Dialoge", kind: "length" },
      { name: "radius-lg", role: "Große Flächen", kind: "length" },
      { name: "shadow-e1", role: "Angehoben: Knöpfe, Chips", kind: "shadow" },
      { name: "shadow-e2", role: "Schwebend: Menüs, Einblendungen", kind: "shadow" },
      { name: "shadow-e3", role: "Über allem: Dialoge", kind: "shadow" }
    ]
  }
];
const TOKEN_NAMES = TOKEN_GROUPS.flatMap((g) => g.tokens.map((t) => t.name));
new Map(
  TOKEN_GROUPS.flatMap((g) => g.tokens).map((t) => [t.name, t])
);
const TOKEN_ALIASES = {
  "color-primary": "color-accent",
  "color-info": "color-accent",
  "color-secondary": "color-dim",
  "color-success": "color-ok",
  "color-warning": "color-warn",
  "color-danger": "color-err",
  "color-backgroundPrimary": "color-bg",
  "color-backgroundSecondary": "color-pane",
  "color-backgroundElement": "color-raised",
  "color-backgroundBorder": "color-divider",
  "color-textPrimary": "color-fg",
  "color-daanse_blue": "color-accent",
  "color-daanse_grey": "color-fg"
};
const SANS_BARLOW = "'Barlow', system-ui, -apple-system, 'Segoe UI', sans-serif";
const MONO_JETBRAINS = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
const MONO_PLEX = "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
const TYPE_SCALE = {
  "text-xs": "11px",
  "text-sm": "12px",
  "text-base": "13px",
  "text-lg": "15px",
  "text-xl": "24px"
};
const THEMES = [
  {
    id: "messwarte",
    name: "Messwarte",
    note: "Dunkler Grund, Zahlen als hellstes Element. Für Boards, die stundenlang laufen.",
    dark: true,
    tokens: {
      ...TYPE_SCALE,
      "color-bg": "#121820",
      "color-pane": "#1a222c",
      "color-raised": "#232d39",
      "color-canvas": "#0e141b",
      "color-divider": "#2a3541",
      "color-outline": "#3c4959",
      "color-fg": "#dfe8ef",
      "color-dim": "#8b9bab",
      "color-accent": "#4fa3d1",
      "color-onAccent": "#08131c",
      "color-brand": "#d8a13c",
      "color-brandFill": "#d8a13c",
      "color-onBrand": "#14100a",
      "color-ok": "#5fb98a",
      "color-warn": "#d8a13c",
      "color-err": "#e2766a",
      "color-kw": "#4fa3d1",
      "color-measure": "#d8a13c",
      "color-member": "#5fb98a",
      "color-fn": "#c294d8",
      "font-sans": SANS_BARLOW,
      "font-mono": MONO_JETBRAINS,
      "radius-xs": "2px",
      "radius-sm": "3px",
      "radius-md": "4px",
      "radius-lg": "6px",
      "shadow-e1": "0 1px 2px rgba(0, 0, 0, 0.45)",
      "shadow-e2": "0 2px 8px rgba(0, 0, 0, 0.45)",
      "shadow-e3": "0 8px 24px rgba(0, 0, 0, 0.5)"
    }
  },
  {
    id: "messwarte-hell",
    name: "Messwarte hell",
    note: "Dieselbe Gestaltung auf blassem Grund - für die Stunden am Editor.",
    dark: false,
    tokens: {
      ...TYPE_SCALE,
      "color-bg": "#eef1f4",
      "color-pane": "#f7f9fb",
      "color-raised": "#ffffff",
      "color-canvas": "#e2e7ec",
      "color-divider": "#d3dae1",
      "color-outline": "#b3bec9",
      "color-fg": "#16202a",
      "color-dim": "#55646f",
      "color-accent": "#1f6690",
      "color-onAccent": "#ffffff",
      "color-brand": "#8a6206",
      "color-brandFill": "#c08a10",
      "color-onBrand": "#14100a",
      "color-ok": "#1f6f4a",
      "color-warn": "#8a5a0c",
      "color-err": "#b02a1c",
      "color-kw": "#1f6690",
      "color-measure": "#8a5a0c",
      "color-member": "#1f6f4a",
      "color-fn": "#7b3fa0",
      "font-sans": SANS_BARLOW,
      "font-mono": MONO_JETBRAINS,
      "radius-xs": "2px",
      "radius-sm": "3px",
      "radius-md": "4px",
      "radius-lg": "6px",
      "shadow-e1": "0 1px 2px rgba(22, 32, 42, 0.14)",
      "shadow-e2": "0 2px 8px rgba(22, 32, 42, 0.14)",
      "shadow-e3": "0 8px 24px rgba(22, 32, 42, 0.14)"
    }
  },
  {
    id: "kartenblatt",
    name: "Kartenblatt",
    note: "Papierweiß mit Grünstich, Petrol statt Blau, rechte Winkel. Ein Board als Blatt.",
    dark: false,
    tokens: {
      ...TYPE_SCALE,
      "color-bg": "#eef0ea",
      "color-pane": "#f8f9f5",
      "color-raised": "#ffffff",
      "color-canvas": "#e3e6dd",
      "color-divider": "#d2d8c9",
      "color-outline": "#b4bda8",
      "color-fg": "#1d2721",
      "color-dim": "#5f6d62",
      "color-accent": "#0f6b63",
      "color-onAccent": "#f4f7f1",
      "color-brand": "#8a6a12",
      "color-brandFill": "#0f6b63",
      "color-onBrand": "#f4f7f1",
      "color-ok": "#0f6b63",
      "color-warn": "#8a6a12",
      "color-err": "#9e3524",
      "color-kw": "#0f6b63",
      "color-measure": "#8a6a12",
      "color-member": "#3c6b32",
      "color-fn": "#6b4a8a",
      "font-sans": "'Source Sans 3', system-ui, -apple-system, 'Segoe UI', sans-serif",
      "font-mono": MONO_PLEX,
      "radius-xs": "0px",
      "radius-sm": "0px",
      "radius-md": "0px",
      "radius-lg": "0px",
      "shadow-e1": "none",
      "shadow-e2": "0 2px 6px rgba(29, 39, 33, 0.12)",
      "shadow-e3": "0 8px 20px rgba(29, 39, 33, 0.14)"
    }
  },
  {
    id: "werkbank",
    name: "Werkbank",
    note: "Warmes Papiergrau, das Daanse-Gold tragend, Blau nur für die Auswahl.",
    dark: false,
    tokens: {
      ...TYPE_SCALE,
      "color-bg": "#f1efe9",
      "color-pane": "#fbfaf7",
      "color-raised": "#ffffff",
      "color-canvas": "#e5e2d9",
      "color-divider": "#dcd8cd",
      "color-outline": "#bfb9a9",
      "color-fg": "#242219",
      "color-dim": "#635e50",
      "color-accent": "#8a6206",
      "color-onAccent": "#fdfbf4",
      "color-brand": "#8a6206",
      "color-brandFill": "#c08a10",
      "color-onBrand": "#241f10",
      "color-ok": "#1f6f4a",
      "color-warn": "#8a5a0c",
      "color-err": "#b02a1c",
      "color-kw": "#2b5599",
      "color-measure": "#8a5a0c",
      "color-member": "#1f6f4a",
      "color-fn": "#7b3fa0",
      "font-sans": SANS_BARLOW,
      "font-mono": MONO_PLEX,
      "radius-xs": "3px",
      "radius-sm": "6px",
      "radius-md": "8px",
      "radius-lg": "12px",
      "shadow-e1": "0 1px 2px rgba(36, 34, 25, 0.12)",
      "shadow-e2": "0 2px 8px rgba(36, 34, 25, 0.12)",
      "shadow-e3": "0 8px 24px rgba(36, 34, 25, 0.14)"
    }
  }
];
const DEFAULT_THEME_ID = "messwarte";
const KEY$1 = "daanse.board.theme";
function read$1() {
  const empty = { themeId: DEFAULT_THEME_ID, overrides: {} };
  try {
    const raw = localStorage.getItem(KEY$1);
    if (!raw) return empty;
    const data = JSON.parse(raw);
    return {
      themeId: typeof data?.themeId === "string" ? data.themeId : DEFAULT_THEME_ID,
      // Only tokens we know about - a stale name would write a dead property
      overrides: Object.fromEntries(
        Object.entries(data?.overrides ?? {}).filter(
          ([name, value]) => TOKEN_NAMES.includes(name) && typeof value === "string"
        )
      )
    };
  } catch {
    return empty;
  }
}
const choice = ref(read$1());
const added = ref([]);
function persist() {
  try {
    localStorage.setItem(KEY$1, JSON.stringify(choice.value));
  } catch {
  }
}
function paint() {
  const theme = allThemes.value.find((t) => t.id === choice.value.themeId);
  if (!theme) return;
  const root = document.documentElement;
  const values = { ...theme.tokens, ...choice.value.overrides };
  for (const [name, value] of Object.entries(values)) {
    root.style.setProperty(`--${name}`, value);
  }
  for (const [alias, source] of Object.entries(TOKEN_ALIASES)) {
    const value = values[source];
    if (value) root.style.setProperty(`--${alias}`, value);
  }
  root.style.colorScheme = theme.dark ? "dark" : "light";
  root.setAttribute("data-theme", theme.dark ? "dark" : "light");
}
const allThemes = computed(() => [...THEMES, ...added.value]);
function useTheme() {
  const activeTheme = computed(
    () => allThemes.value.find((t) => t.id === choice.value.themeId) ?? THEMES[0]
  );
  function valueOf(name) {
    return choice.value.overrides[name] ?? activeTheme.value.tokens[name] ?? "";
  }
  function isOverridden(name) {
    return name in choice.value.overrides;
  }
  function selectTheme(id) {
    if (!allThemes.value.some((t) => t.id === id)) return;
    choice.value = { themeId: id, overrides: {} };
    persist();
    paint();
  }
  function setToken(name, value) {
    if (!TOKEN_NAMES.includes(name)) return;
    choice.value = {
      ...choice.value,
      overrides: { ...choice.value.overrides, [name]: value }
    };
    persist();
    paint();
  }
  function clearToken(name) {
    const { [name]: _dropped, ...rest } = choice.value.overrides;
    choice.value = { ...choice.value, overrides: rest };
    persist();
    paint();
  }
  function clearAllTokens() {
    choice.value = { ...choice.value, overrides: {} };
    persist();
    paint();
  }
  function addTheme(theme) {
    if (allThemes.value.some((t) => t.id === theme.id)) return;
    added.value = [...added.value, theme];
  }
  function exportTheme() {
    return {
      ...activeTheme.value,
      id: `${activeTheme.value.id}-eigen`,
      name: `${activeTheme.value.name} (angepasst)`,
      tokens: { ...activeTheme.value.tokens, ...choice.value.overrides }
    };
  }
  return {
    themes: allThemes,
    activeTheme,
    overrides: computed(() => choice.value.overrides),
    valueOf,
    isOverridden,
    selectTheme,
    setToken,
    clearToken,
    clearAllTokens,
    addTheme,
    exportTheme,
    apply: paint
  };
}
function initTheme() {
  paint();
}
const _hoisted_1$l = { class: "shell" };
const _hoisted_2$j = {
  key: 0,
  class: "global-loading-bar"
};
const _hoisted_3$f = {
  key: 0,
  class: "rail",
  "aria-label": "Bereiche"
};
const _hoisted_4$e = ["aria-current"];
const _hoisted_5$c = ["aria-current"];
const _hoisted_6$b = ["aria-current"];
const _hoisted_7$b = ["aria-current", "title", "onClick"];
const _hoisted_8$b = { class: "sr-only" };
const _hoisted_9$a = { class: "content" };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    const navigationItems = ref([]);
    const { isLoading } = useGlobalLoading();
    useTheme();
    const route = useRoute();
    const router2 = useRouter();
    onMounted(() => {
      const navRegistry = inject(NAVIGATION_REGISTRY);
      navigationItems.value = navRegistry.getAllNavigationItemsArray ? navRegistry.getAllNavigationItemsArray() : [];
    });
    const boardTarget = computed(
      () => route.params.pageid ? `/page/${route.params.pageid}` : "/page/abc"
    );
    const isLauncher = computed(() => String(route.name) === "home" && !route.params.pageid);
    const boardActive = computed(
      () => ["home", "page", "edit", "pageEdit"].includes(String(route.name))
    );
    const go = (target) => router2.push(target);
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1$l, [
        unref(isLoading) ? (openBlock(), createElementBlock("div", _hoisted_2$j, [..._cache[3] || (_cache[3] = [
          createElementVNode("div", { class: "global-loading-bar-progress" }, null, -1)
        ])])) : createCommentVNode("", true),
        createVNode(Header),
        createElementVNode("div", {
          class: normalizeClass(["shell-body", { "shell-body--norail": isLauncher.value }])
        }, [
          !isLauncher.value ? (openBlock(), createElementBlock("nav", _hoisted_3$f, [
            createElementVNode("button", {
              type: "button",
              class: normalizeClass(["ri", { on: boardActive.value }]),
              "aria-current": boardActive.value ? "page" : void 0,
              title: "Board",
              onClick: _cache[0] || (_cache[0] = ($event) => go(boardTarget.value))
            }, [
              createVNode(unref(DIcon), { name: "dashboard" }),
              _cache[4] || (_cache[4] = createElementVNode("span", { class: "sr-only" }, "Board", -1))
            ], 10, _hoisted_4$e),
            createElementVNode("button", {
              type: "button",
              class: normalizeClass(["ri", { on: unref(route).name === "pages" }]),
              "aria-current": unref(route).name === "pages" ? "page" : void 0,
              title: "Seiten",
              onClick: _cache[1] || (_cache[1] = ($event) => go("/pages"))
            }, [
              createVNode(unref(DIcon), { name: "layers" }),
              _cache[5] || (_cache[5] = createElementVNode("span", { class: "sr-only" }, "Seiten", -1))
            ], 10, _hoisted_5$c),
            createElementVNode("button", {
              type: "button",
              class: normalizeClass(["ri", { on: unref(route).name === "data" }]),
              "aria-current": unref(route).name === "data" ? "page" : void 0,
              title: "Verbindungen & Daten",
              onClick: _cache[2] || (_cache[2] = ($event) => go("/datasources"))
            }, [
              createVNode(unref(DIcon), { name: "dataset" }),
              _cache[6] || (_cache[6] = createElementVNode("span", { class: "sr-only" }, "Verbindungen & Daten", -1))
            ], 10, _hoisted_6$b),
            (openBlock(true), createElementBlock(Fragment, null, renderList(navigationItems.value, (item) => {
              return openBlock(), createElementBlock("button", {
                key: item.id,
                type: "button",
                class: normalizeClass(["ri", { on: unref(route).name === item.routeName }]),
                "aria-current": unref(route).name === item.routeName ? "page" : void 0,
                title: item.label,
                onClick: ($event) => go(item.route)
              }, [
                createVNode(unref(DIcon), {
                  name: item.icon
                }, null, 8, ["name"]),
                createElementVNode("span", _hoisted_8$b, toDisplayString(item.label), 1)
              ], 10, _hoisted_7$b);
            }), 128)),
            _cache[7] || (_cache[7] = createElementVNode("span", { class: "rail-spacer" }, null, -1))
          ])) : createCommentVNode("", true),
          createElementVNode("main", _hoisted_9$a, [
            (openBlock(), createBlock(_component_router_view, {
              key: _ctx.$route.fullPath
            }))
          ])
        ], 2)
      ]);
    };
  }
});
const App = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-ce3039cb"]]);
const KEY = "daanse.board.usage";
function read() {
  try {
    const raw = localStorage.getItem(KEY);
    const data = raw ? JSON.parse(raw) : {};
    return data && typeof data === "object" ? data : {};
  } catch {
    return {};
  }
}
const usage = ref(read());
function useBoardUsage() {
  function recordOpened(id) {
    if (!id) return;
    const previous = usage.value[id];
    usage.value = {
      ...usage.value,
      [id]: { count: (previous?.count ?? 0) + 1, lastOpened: Date.now() }
    };
    try {
      localStorage.setItem(KEY, JSON.stringify(usage.value));
    } catch {
    }
  }
  function usageOf(id) {
    return usage.value[id];
  }
  function byUsage(a, b) {
    const left = usage.value[a];
    const right = usage.value[b];
    if ((right?.count ?? 0) !== (left?.count ?? 0)) return (right?.count ?? 0) - (left?.count ?? 0);
    return (right?.lastOpened ?? 0) - (left?.lastOpened ?? 0);
  }
  function lastOpenedLabel(id) {
    const at = usage.value[id]?.lastOpened;
    if (!at) return "";
    const days = Math.floor((Date.now() - at) / 864e5);
    if (days <= 0) return "heute";
    if (days === 1) return "gestern";
    if (days < 31) return `vor ${days} Tagen`;
    return new Date(at).toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" });
  }
  return { usage, recordOpened, usageOf, byUsage, lastOpenedLabel };
}
const _hoisted_1$k = {
  key: 0,
  class: "loading-state"
};
const _hoisted_2$i = {
  key: 1,
  class: "view-component-wrapper"
};
const _hoisted_3$e = {
  key: 2,
  class: "edit-component-wrapper"
};
const _hoisted_4$d = {
  key: 3,
  class: "no-layout-message"
};
const _hoisted_5$b = { class: "no-layout-message__text" };
const _hoisted_6$a = { key: 0 };
const _hoisted_7$a = { key: 1 };
const _hoisted_8$a = { key: 2 };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "LayoutRenderer",
  props: {
    pageId: {},
    viewMode: { type: Boolean }
  },
  emits: ["openWidgetSettings", "removeWidget"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const layoutRepo = inject(identifier$2);
    const pageRepo = inject(identifier$1);
    const currentPage = ref(null);
    const currentLayout = ref(null);
    const EditComponent = shallowRef(null);
    const ViewComponent = shallowRef(null);
    const refreshTrigger = ref(0);
    const isLoading = ref(true);
    const handleOpenWidgetSettings = (widgetId) => {
      emit("openWidgetSettings", widgetId);
    };
    const handleRemoveWidget = (widgetId) => {
      emit("removeWidget", widgetId);
    };
    let loadLayoutVersion = 0;
    const loadLayout = async () => {
      const version = ++loadLayoutVersion;
      isLoading.value = true;
      await nextTick();
      if (version !== loadLayoutVersion) return;
      if (props.pageId && pageRepo) {
        const page2 = pageRepo.getPage(props.pageId);
        currentPage.value = page2 ?? null;
        if (page2?.layoutId && layoutRepo) {
          const layout = layoutRepo.getLayout(page2.layoutId);
          currentLayout.value = layout || null;
          if (props.viewMode) {
            ViewComponent.value = layout?.component || null;
            EditComponent.value = null;
          } else {
            EditComponent.value = layout?.editor || null;
            ViewComponent.value = null;
          }
        } else {
          EditComponent.value = null;
          ViewComponent.value = null;
          currentLayout.value = null;
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 50));
      if (version !== loadLayoutVersion) return;
      isLoading.value = false;
    };
    const page = () => props.pageId ? pageRepo?.getPage(props.pageId) : void 0;
    const held = useEObject(page);
    watch(held, () => {
      currentPage.value = held.value ?? null;
    });
    const layoutId = useFeature(page, "layoutId");
    watch(layoutId, () => {
      refreshTrigger.value++;
      loadLayout();
    });
    onMounted(async () => {
      await nextTick();
      await loadLayout();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "layout-renderer",
        style: normalizeStyle({
          backgroundColor: currentPage.value?.backgroundColor || void 0,
          backgroundImage: currentPage.value?.backgroundImage ? `url(${currentPage.value.backgroundImage})` : void 0,
          backgroundSize: currentPage.value?.backgroundSize || "cover",
          backgroundPosition: currentPage.value?.backgroundPosition || "center",
          backgroundRepeat: currentPage.value?.backgroundRepeat || "no-repeat"
        })
      }, [
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1$k, [..._cache[0] || (_cache[0] = [
          createElementVNode("span", {
            class: "spinner",
            "aria-hidden": "true"
          }, null, -1),
          createElementVNode("p", null, "Layout wird geladen…", -1)
        ])])) : props.viewMode && ViewComponent.value && currentLayout.value ? (openBlock(), createElementBlock("div", _hoisted_2$i, [
          (openBlock(), createBlock(resolveDynamicComponent(ViewComponent.value), {
            key: currentLayout.value.id || "view",
            "layout-settings": currentPage.value?.layoutSettings
          }, null, 8, ["layout-settings"]))
        ])) : !props.viewMode && EditComponent.value && currentLayout.value ? (openBlock(), createElementBlock("div", _hoisted_3$e, [
          (openBlock(), createBlock(resolveDynamicComponent(EditComponent.value), {
            key: currentLayout.value.id || "edit",
            "layout-settings": currentPage.value?.layoutSettings,
            onOpenSettings: handleOpenWidgetSettings,
            onRemoveWidget: handleRemoveWidget
          }, null, 40, ["layout-settings"]))
        ])) : (openBlock(), createElementBlock("div", _hoisted_4$d, [
          createElementVNode("p", _hoisted_5$b, [
            createVNode(unref(DIcon), {
              name: "warning",
              size: "lg",
              tone: "color-warn"
            }),
            !currentPage.value ? (openBlock(), createElementBlock("span", _hoisted_6$a, " Die Seite „" + toDisplayString(props.pageId) + '" gibt es nicht. ', 1)) : !currentLayout.value ? (openBlock(), createElementBlock("span", _hoisted_7$a, " Für „" + toDisplayString(currentPage.value.name || props.pageId) + '" ist kein Layout eingestellt. ', 1)) : (openBlock(), createElementBlock("span", _hoisted_8$a, [
              createTextVNode(toDisplayString(props.viewMode ? "Zu diesem Layout gibt es keine Darstellung." : "Zu diesem Layout gibt es keinen Editor.") + " ", 1),
              _cache[1] || (_cache[1] = createElementVNode("br", null, null, -1)),
              createElementVNode("small", null, "Layout: " + toDisplayString(currentLayout.value.id), 1)
            ]))
          ])
        ]))
      ], 4);
    };
  }
});
const LayoutRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-965fd8c7"]]);
const _hoisted_1$j = {
  class: "floorplan",
  "aria-hidden": "true"
};
const _hoisted_2$h = {
  key: 0,
  class: "floorplan__empty"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "BoardFloorplan",
  props: {
    items: {},
    typeById: {}
  },
  setup(__props) {
    const props = __props;
    function familyOf(type) {
      const t = (type ?? "").toLowerCase();
      if (/chart|table|pivot|kpi|progress|timeline|filter|rss|weather/.test(t)) return "data";
      if (/map|routing|image|video|vanta|svg|icon|mermaid|geo/.test(t)) return "visual";
      return "text";
    }
    const blocks = computed(() => {
      const items = (props.items ?? []).filter(
        (i) => Number.isFinite(i.x) && Number.isFinite(i.y)
      );
      if (items.length === 0) return [];
      const maxX = Math.max(...items.map((i) => (i.x ?? 0) + (i.width ?? 1)));
      const maxY = Math.max(...items.map((i) => (i.y ?? 0) + (i.height ?? 1)));
      const spanX = maxX > 0 ? maxX : 1;
      const spanY = maxY > 0 ? maxY : 1;
      return items.map((item) => ({
        key: item.id ?? `${item.x}-${item.y}`,
        family: familyOf(props.typeById?.[item.id ?? ""]),
        style: {
          left: `${(item.x ?? 0) / spanX * 100}%`,
          top: `${(item.y ?? 0) / spanY * 100}%`,
          // minus the gutter, so neighbouring widgets stay visibly separate
          width: `calc(${Math.max((item.width ?? 1) / spanX * 100, 3)}% - 3px)`,
          height: `calc(${Math.max((item.height ?? 1) / spanY * 100, 6)}% - 3px)`
        }
      }));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$j, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(blocks.value, (block) => {
          return openBlock(), createElementBlock("div", {
            key: block.key,
            class: normalizeClass(["floorplan__block", `floorplan__block--${block.family}`]),
            style: normalizeStyle(block.style)
          }, null, 6);
        }), 128)),
        blocks.value.length === 0 ? (openBlock(), createElementBlock("span", _hoisted_2$h, "keine Widgets")) : createCommentVNode("", true)
      ]);
    };
  }
});
const BoardFloorplan = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-0eecd73b"]]);
const { parse: $parse } = JSON;
const { keys } = Object;
const Primitive = String;
const primitive = "string";
const ignore = {};
const object = "object";
const noop = (_, value) => value;
const primitives = (value) => value instanceof Primitive ? Primitive(value) : value;
const Primitives = (_, value) => typeof value === primitive ? new Primitive(value) : value;
const resolver = (input, lazy, parsed, $) => (output) => {
  for (let ke = keys(output), { length } = ke, y = 0; y < length; y++) {
    const k = ke[y];
    const value = output[k];
    if (value instanceof Primitive) {
      const tmp = input[+value];
      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k] = ignore;
        lazy.push({ o: output, k, r: tmp });
      } else
        output[k] = $.call(output, k, tmp);
    } else if (output[k] !== ignore)
      output[k] = $.call(output, k, value);
  }
  return output;
};
const parse = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const $ = noop;
  let value = input[0];
  if (typeof value === object && value) {
    const lazy = [];
    const revive = resolver(input, lazy, /* @__PURE__ */ new Set(), $);
    value = revive(value);
    let i = 0;
    while (i < lazy.length) {
      const { o, k, r } = lazy[i++];
      o[k] = $.call(o, k, revive(r));
    }
  }
  return $.call({ "": value }, "", value);
};
function decodeStored(content) {
  if (!content) return void 0;
  if (typeof content === "object") return content;
  if (typeof content !== "string") return void 0;
  try {
    const data = JSON.parse(content);
    return Array.isArray(data) ? parse(content) : data;
  } catch {
    return void 0;
  }
}
function isResource(data) {
  return typeof data.eClass === "string";
}
function readLegacyWorkspace(data) {
  if (!data || typeof data !== "object") return void 0;
  const workspace = new WorkspaceImpl();
  const byUid = /* @__PURE__ */ new Map();
  for (const entry of data.conections ?? []) {
    const connection = new ConnectionImpl();
    connection.uid = entry.uid;
    connection.name = entry.name;
    connection.type = entry.type;
    connection.config = entry.config ?? {};
    workspace.connections.push(connection);
    byUid.set(entry.uid, connection);
  }
  const sources = /* @__PURE__ */ new Map();
  for (const entry of data.datasources ?? []) {
    const source = new DatasourceImpl();
    source.uid = entry.uid;
    source.name = entry.name;
    source.type = entry.type;
    source.config = entry.config ?? {};
    const through = byUid.get((entry.config ?? {})["connection"]);
    if (through) source.connection = through;
    workspace.datasources.push(source);
    sources.set(entry.uid, source);
  }
  const variables = [];
  for (const entry of data.variables ?? []) {
    const variable = new VariableImpl();
    variable.uid = entry["id"] ?? entry["uid"] ?? Math.random().toString(36).substring(7);
    variable.name = entry["name"];
    variable.type = entry["type"];
    variable.scope = entry["scope"] ?? "global";
    variable.accessMode = entry["accessMode"] ?? "external-writable";
    variable.definition = entry;
    workspace.variables.push(variable);
    variables.push({ entry, variable });
  }
  for (const entry of data.eventMappings ?? []) {
    const mapping = new EventMappingImpl();
    mapping.id = entry["id"];
    mapping.definition = entry;
    workspace.eventMappings.push(mapping);
  }
  const board = new BoardImpl();
  board.id = crypto.randomUUID();
  board.name = "Board";
  workspace.board = board;
  for (const [id, stored] of Object.entries(data.pages ?? {})) {
    const info = stored?.info ?? {};
    const page = new PageImpl();
    page.id = info.id ?? id;
    page.name = info.name ?? "Seite";
    page.description = info.description;
    page.icon = info.icon;
    page.visibleInNavigation = info.visibleInNavigation ?? true;
    page.layoutId = info.layoutId ?? info.layout?.id ?? "org.eclipse.daanse.board.app.ui.vue.layouts.base";
    page.layoutSettings = info.layoutSettings;
    page.backgroundColor = info.backgroundColor;
    page.backgroundImage = info.backgroundImage;
    page.backgroundSize = info.backgroundSize;
    page.backgroundPosition = info.backgroundPosition;
    page.backgroundRepeat = info.backgroundRepeat;
    for (const stored_widget of stored?.widgets ?? []) {
      const widget = new WidgetImpl();
      widget.uid = stored_widget.uid;
      widget.type = stored_widget.type;
      widget.config = stored_widget.config ?? {};
      widget.wrapperConfig = stored_widget.wrapperConfig ?? {};
      const reads = sources.get(stored_widget.config?.datasourceId);
      if (reads) widget.datasource = reads;
      page.widgets.push(widget);
    }
    for (const stored_item of stored?.layout ?? []) {
      const item = new LayoutItemImpl();
      item.id = stored_item.id;
      item.x = stored_item.x ?? 0;
      item.y = stored_item.y ?? 0;
      item.z = stored_item.z ?? 0;
      item.width = stored_item.width ?? 300;
      item.height = stored_item.height ?? 150;
      item.group = stored_item.group;
      page.layout.push(item);
    }
    board.pages.push(page);
  }
  for (const { entry, variable } of variables) {
    const pageId = entry["pageId"];
    if (!pageId) continue;
    variable.page = board.pages.toArray().find((page) => page.id === pageId);
  }
  if (board.pages.size() > 0) board.defaultPage = board.pages.get(0);
  return workspace;
}
const origin = ref();
function useWorkspaceOrigin() {
  return origin;
}
const WORKSPACE_URI = "workspace.json";
const BOARD_ECLASS = "http://org.eclipse.daanse.board.app.lib.model.workspace#//Board";
function liftPagesIntoBoard(data) {
  if (!data || typeof data !== "object") return data;
  const held = data;
  if (held.board || !Array.isArray(held.pages)) return data;
  const moved = JSON.parse(
    JSON.stringify(held).replace(/"\/\/@pages\./g, '"//@board/@pages.')
  );
  const board = {
    eClass: BOARD_ECLASS,
    id: crypto.randomUUID(),
    /* Nothing in the old shape named the board; the pages were the boards. */
    name: "Board",
    pages: moved.pages
  };
  if (moved.defaultPage) board.defaultPage = moved.defaultPage;
  delete moved.pages;
  delete moved.defaultPage;
  moved.board = board;
  return moved;
}
function parseWorkspace(content) {
  const data = decodeStored(content);
  if (!data) return void 0;
  try {
    if (!isResource(data)) return readLegacyWorkspace(data);
    const resource = new JSONResource(URI.createURI(WORKSPACE_URI));
    resource.loadFromString(JSON.stringify(liftPagesIntoBoard(data)));
    return resource.getContents().get(0);
  } catch {
    return void 0;
  }
}
function useWorkspaceFile() {
  const workspace = inject(identifier);
  const connections = inject(identifier$3);
  const datasources = inject(identifier$4);
  const variables = inject(identifier$5);
  const variableWrappers = inject(identifier$6);
  const events = inject(EVENT_MANAGER);
  function collect() {
    workspace.eventMappings.clear();
    for (const mapping of events?.getAllMappings() ?? []) {
      const held = new EventMappingImpl();
      held.id = mapping.id;
      held.definition = mapping;
      workspace.eventMappings.push(held);
    }
  }
  function save() {
    collect();
    const resource = new JSONResource(URI.createURI(WORKSPACE_URI));
    resource.getContents().add(workspace);
    const text = resource.saveToString(/* @__PURE__ */ new Map([[OPTION_INDENT, 2]]));
    resource.getContents().clear();
    return text;
  }
  function load(content) {
    const loaded = parseWorkspace(content);
    if (!loaded) return [];
    workspace.connections.clear();
    for (const connection of loaded.connections.toArray()) workspace.connections.push(connection);
    workspace.datasources.clear();
    for (const source of loaded.datasources.toArray()) workspace.datasources.push(source);
    workspace.board = loaded.board;
    workspace.variables.clear();
    for (const variable of loaded.variables.toArray()) workspace.variables.push(variable);
    workspace.eventMappings.clear();
    for (const mapping of loaded.eventMappings.toArray()) workspace.eventMappings.push(mapping);
    connections?.rebuildLive();
    datasources?.rebuildLive();
    variables?.rebuildLive();
    events?.setAllMappings(
      workspace.eventMappings.toArray().map((mapping) => mapping.definition)
    );
    const opened = [];
    for (const page of workspace.board?.pages.toArray() ?? []) {
      variableWrappers?.initilazeVariableWrappers(
        page.widgets.toArray().map((widget) => ({
          uid: widget.uid,
          type: widget.type,
          config: widget.config,
          wrapperConfig: widget.wrapperConfig
        }))
      );
      opened.push(page.id);
    }
    return opened;
  }
  return { save, load };
}
function shortKind(type) {
  const parts = type.split(".").filter(Boolean);
  return (parts[parts.length - 1] ?? type).replace(/widget$/i, "") || type;
}
function summarizePage(id, page, layout, widgets) {
  const items = Array.isArray(layout) ? layout : [];
  const list = Array.isArray(widgets) ? widgets : [];
  const typeById = {};
  for (const widget of list) {
    if (widget?.uid && widget.type) typeById[widget.uid] = widget.type;
  }
  const sources = new Set(
    list.map((w) => w?.config?.datasourceId).filter((d) => Boolean(d))
  );
  const kinds = [...new Set(list.map((w) => shortKind(w?.type ?? "")).filter(Boolean))];
  return {
    id,
    name: page?.name || "Unbenanntes Board",
    description: page?.description ?? "",
    items,
    typeById,
    widgetCount: list.length,
    sourceCount: sources.size,
    kinds
  };
}
const _hoisted_1$i = { class: "storage" };
const _hoisted_2$g = {
  class: "tree",
  "aria-label": "Speicher"
};
const _hoisted_3$d = {
  class: "tree__body",
  role: "tree"
};
const _hoisted_4$c = ["aria-expanded", "onClick"];
const _hoisted_5$a = { class: "row__twist" };
const _hoisted_6$9 = { class: "row__name" };
const _hoisted_7$9 = { class: "row__meta" };
const _hoisted_8$9 = ["onClick"];
const _hoisted_9$9 = { class: "row__name" };
const _hoisted_10$9 = { class: "row__meta" };
const _hoisted_11$7 = {
  key: 0,
  class: "row row--hint"
};
const _hoisted_12$7 = ["onClick"];
const _hoisted_13$6 = {
  key: 0,
  class: "row row--hint"
};
const _hoisted_14$6 = { class: "detail" };
const _hoisted_15$6 = {
  key: 0,
  class: "detail__failure",
  role: "alert"
};
const _hoisted_16$5 = { class: "detail__head" };
const _hoisted_17$5 = { class: "detail__facts" };
const _hoisted_18$4 = { class: "create__hint" };
const _hoisted_19$3 = { class: "detail__head" };
const _hoisted_20$3 = { class: "detail__name" };
const _hoisted_21$3 = {
  key: 0,
  class: "detail__badge"
};
const _hoisted_22$3 = { class: "detail__facts" };
const _hoisted_23$3 = {
  key: 0,
  class: "boards"
};
const _hoisted_24$2 = { class: "board__text" };
const _hoisted_25$1 = { class: "board__name" };
const _hoisted_26$1 = { class: "board__facts" };
const _hoisted_27$1 = {
  key: 0,
  class: "board__kinds"
};
const _hoisted_28$1 = {
  key: 1,
  class: "detail__hint"
};
const _hoisted_29$1 = {
  key: 4,
  class: "detail__hint"
};
const _hoisted_30$1 = {
  key: 5,
  class: "detail__hint"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "WorkspaceStorage",
  emits: ["restored"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const repoManager = inject(identifier$7);
    const { save, load } = useWorkspaceFile();
    const places = ref([]);
    const entriesByPlace = ref({});
    const expanded = ref(/* @__PURE__ */ new Set());
    const selectedPlace = ref();
    const selectedEntry = ref();
    const query = ref("");
    const failure = ref("");
    const busy = ref(false);
    const origin2 = useWorkspaceOrigin();
    const creating = ref(false);
    const newName = ref("");
    function reason(error) {
      if (typeof error === "string") return error;
      return error?.message ?? String(error);
    }
    function label(entry) {
      return entry.name ?? String(entry.uri).split("/").pop() ?? String(entry.uri);
    }
    function key(place) {
      return String(place.uri);
    }
    function uriFor(place, name) {
      const uri = new URL(String(place.uri));
      uri.pathname = `/${name}.json`;
      return uri;
    }
    function typeOf(place) {
      const ctor = place ? Object.getPrototypeOf(place)?.constructor : void 0;
      return ctor && "type" in ctor ? String(ctor.type) : "";
    }
    function isWritable(place) {
      return typeof place?.create === "function";
    }
    function viewFor(place) {
      const type = typeOf(place);
      if (!type || !repoManager?.isViewForRepoType(type)) return void 0;
      return repoManager.getViewForRepoType(type);
    }
    const placeView = computed(() => viewFor(selectedPlace.value));
    async function loadPlaces() {
      places.value = await repoManager?.getAvailableReposetories() ?? [];
      const first = places.value[0];
      if (first && expanded.value.size === 0) {
        selectedPlace.value = first;
        await expand(first);
      }
    }
    async function expand(place) {
      expanded.value.add(key(place));
      expanded.value = new Set(expanded.value);
      await readEntries(place);
    }
    async function readEntries(place) {
      failure.value = "";
      busy.value = true;
      try {
        entriesByPlace.value = { ...entriesByPlace.value, [key(place)]: await place.findAll() };
      } catch (error) {
        entriesByPlace.value = { ...entriesByPlace.value, [key(place)]: [] };
        failure.value = `Einträge konnten nicht gelesen werden: ${reason(error)}`;
      } finally {
        busy.value = false;
      }
    }
    function togglePlace(place) {
      selectedPlace.value = place;
      creating.value = false;
      if (expanded.value.has(key(place))) {
        expanded.value.delete(key(place));
        expanded.value = new Set(expanded.value);
      } else {
        expand(place);
      }
    }
    function entriesOf(place) {
      const list = entriesByPlace.value[key(place)] ?? [];
      const needle = query.value.trim().toLowerCase();
      const filtered = needle ? list.filter((e) => label(e).toLowerCase().includes(needle)) : list;
      return [...filtered].sort((a, b) => label(a).localeCompare(label(b)));
    }
    function selectEntry(place, entry) {
      selectedPlace.value = place;
      selectedEntry.value = entry;
      creating.value = false;
      failure.value = "";
    }
    function isOpen(entry) {
      return String(entry.uri) === origin2.value?.entryUri;
    }
    function remember(entry, name) {
      origin2.value = { placeUri: String(selectedPlace.value?.uri), entryUri: String(entry.uri), name };
    }
    function boardsIn(entry) {
      return summarize(parseWorkspace(entry?.data));
    }
    function summarize(held) {
      return (held?.board?.pages.toArray() ?? []).map(
        (page) => summarizePage(page.id, page, page.layout.toArray(), page.widgets.toArray())
      );
    }
    const boards = computed(() => boardsIn(selectedEntry.value));
    const totals = computed(() => ({
      boards: boards.value.length,
      widgets: boards.value.reduce((sum, b) => sum + b.widgetCount, 0),
      sources: boards.value.reduce((sum, b) => sum + b.sourceCount, 0)
    }));
    function entrySummary(entry) {
      const list = boardsIn(entry);
      if (list.length === 0) return "leer";
      return `${list.length} ${list.length === 1 ? "Seite" : "Seiten"}`;
    }
    const pending = computed(() => {
      if (!creating.value) return { boards: 0, widgets: 0 };
      const list = summarize(parseWorkspace(save()));
      return {
        boards: list.length,
        widgets: list.reduce((sum, b) => sum + b.widgetCount, 0)
      };
    });
    async function open(entry) {
      failure.value = "";
      try {
        const stored = await selectedPlace.value?.getEntityByUri(entry.uri);
        const ids = load(stored?.data ?? entry.data);
        remember(entry, label(entry));
        emit("restored", ids);
      } catch (error) {
        failure.value = `Laden fehlgeschlagen: ${reason(error)}`;
      }
    }
    async function overwrite(entry) {
      const place = selectedPlace.value;
      if (!place) return;
      failure.value = "";
      try {
        await place.update({ ...entry, data: save() });
        remember(entry, label(entry));
        await readEntries(place);
        selectedEntry.value = entriesOf(place).find((e) => String(e.uri) === String(entry.uri));
      } catch (error) {
        failure.value = `Speichern fehlgeschlagen: ${reason(error)}`;
      }
    }
    function startCreating(place) {
      selectedPlace.value = place;
      selectedEntry.value = void 0;
      creating.value = true;
      newName.value = "";
      failure.value = "";
    }
    async function createEntry() {
      const place = selectedPlace.value;
      const name = newName.value.trim();
      if (!place || !name) return;
      failure.value = "";
      try {
        const entry = { name, uri: uriFor(place, name), data: save() };
        await place.create(entry);
        remember(entry, name);
        await expand(place);
        creating.value = false;
        selectedEntry.value = entriesOf(place).find((e) => label(e) === name);
      } catch (error) {
        failure.value = `Anlegen fehlgeschlagen: ${reason(error)}`;
      }
    }
    async function remove(entry) {
      const place = selectedPlace.value;
      if (!place) return;
      failure.value = "";
      try {
        await place.delete(entry);
        if (isOpen(entry)) origin2.value = void 0;
        if (selectedEntry.value === entry) selectedEntry.value = void 0;
        await readEntries(place);
      } catch (error) {
        failure.value = `Löschen fehlgeschlagen: ${reason(error)}`;
      }
    }
    function download(entry) {
      const payload = typeof entry.data === "string" ? entry.data : JSON.stringify(entry.data);
      const url = URL.createObjectURL(new Blob([payload], { type: "application/json" }));
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${label(entry)}.json`;
      anchor.click();
      URL.revokeObjectURL(url);
    }
    onMounted(loadPlaces);
    watch(() => repoManager, loadPlaces);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        createElementVNode("aside", _hoisted_2$g, [
          withDirectives(createElementVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event),
            class: "tree__search",
            type: "search",
            placeholder: "Stände filtern",
            "aria-label": "Stände filtern"
          }, null, 512), [
            [vModelText, query.value]
          ]),
          createElementVNode("div", _hoisted_3$d, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(places.value, (place) => {
              return openBlock(), createElementBlock(Fragment, {
                key: key(place)
              }, [
                createElementVNode("button", {
                  type: "button",
                  role: "treeitem",
                  "aria-expanded": expanded.value.has(key(place)),
                  class: normalizeClass(["row", "row--place", { on: selectedPlace.value === place && !selectedEntry.value }]),
                  onClick: ($event) => togglePlace(place)
                }, [
                  createElementVNode("span", _hoisted_5$a, toDisplayString(expanded.value.has(key(place)) ? "▾" : "▸"), 1),
                  createElementVNode("span", _hoisted_6$9, toDisplayString(place.name), 1),
                  createElementVNode("span", _hoisted_7$9, toDisplayString((entriesByPlace.value[key(place)] ?? []).length), 1)
                ], 10, _hoisted_4$c),
                expanded.value.has(key(place)) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(entriesOf(place), (entry) => {
                    return openBlock(), createElementBlock("button", {
                      key: String(entry.uri),
                      type: "button",
                      role: "treeitem",
                      class: normalizeClass(["row", "row--entry", { on: selectedEntry.value === entry }]),
                      onClick: ($event) => selectEntry(place, entry)
                    }, [
                      createElementVNode("span", {
                        class: normalizeClass(["row__dot", { open: isOpen(entry) }]),
                        "aria-hidden": "true"
                      }, null, 2),
                      createElementVNode("span", _hoisted_9$9, toDisplayString(label(entry)), 1),
                      createElementVNode("span", _hoisted_10$9, toDisplayString(entrySummary(entry)), 1)
                    ], 10, _hoisted_8$9);
                  }), 128)),
                  entriesOf(place).length === 0 ? (openBlock(), createElementBlock("p", _hoisted_11$7, toDisplayString(query.value ? "Nichts gefunden" : "Noch kein Stand"), 1)) : createCommentVNode("", true),
                  isWritable(place) ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    type: "button",
                    class: "row row--add",
                    onClick: ($event) => startCreating(place)
                  }, [..._cache[8] || (_cache[8] = [
                    createElementVNode("span", { class: "row__twist" }, "＋", -1),
                    createElementVNode("span", { class: "row__name" }, "Aktuellen Stand ablegen…", -1)
                  ])], 8, _hoisted_12$7)) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true)
              ], 64);
            }), 128)),
            !places.value.length ? (openBlock(), createElementBlock("p", _hoisted_13$6, "Keine Speicherorte eingerichtet.")) : createCommentVNode("", true)
          ])
        ]),
        createElementVNode("section", _hoisted_14$6, [
          failure.value ? (openBlock(), createElementBlock("p", _hoisted_15$6, toDisplayString(failure.value), 1)) : createCommentVNode("", true),
          creating.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createElementVNode("header", _hoisted_16$5, [
              _cache[9] || (_cache[9] = createElementVNode("h2", { class: "detail__name" }, "Neuen Stand ablegen", -1)),
              createElementVNode("span", _hoisted_17$5, "in " + toDisplayString(selectedPlace.value?.name), 1)
            ]),
            createElementVNode("form", {
              class: "create",
              onSubmit: withModifiers(createEntry, ["prevent"])
            }, [
              _cache[12] || (_cache[12] = createElementVNode("label", {
                class: "create__label",
                for: "storage-name"
              }, "Name", -1)),
              withDirectives(createElementVNode("input", {
                id: "storage-name",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newName.value = $event),
                class: "create__input",
                type: "text",
                placeholder: "z. B. bodenfeuchte"
              }, null, 512), [
                [vModelText, newName.value]
              ]),
              createVNode(unref(DButton), {
                intent: "primary",
                size: "sm",
                type: "submit",
                disabled: !newName.value.trim()
              }, {
                default: withCtx(() => [..._cache[10] || (_cache[10] = [
                  createTextVNode("Ablegen", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              createVNode(unref(DButton), {
                size: "sm",
                onClick: _cache[2] || (_cache[2] = ($event) => creating.value = false)
              }, {
                default: withCtx(() => [..._cache[11] || (_cache[11] = [
                  createTextVNode("Abbrechen", -1)
                ])]),
                _: 1
              }),
              createElementVNode("p", _hoisted_18$4, " Abgelegt wird der gesamte Arbeitsstand: " + toDisplayString(pending.value.boards) + " " + toDisplayString(pending.value.boards === 1 ? "Seite" : "Seiten") + " mit " + toDisplayString(pending.value.widgets) + " Widgets, dazu Verbindungen, Datenquellen und Variablen. ", 1)
            ], 32)
          ], 64)) : placeView.value && !selectedEntry.value ? (openBlock(), createBlock(resolveDynamicComponent(placeView.value), {
            key: 2,
            repo: selectedPlace.value,
            context: entriesByPlace.value[key(selectedPlace.value)],
            onClose: _cache[3] || (_cache[3] = ($event) => readEntries(selectedPlace.value))
          }, null, 40, ["repo", "context"])) : selectedEntry.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
            createElementVNode("header", _hoisted_19$3, [
              createElementVNode("h2", _hoisted_20$3, toDisplayString(label(selectedEntry.value)), 1),
              isOpen(selectedEntry.value) ? (openBlock(), createElementBlock("span", _hoisted_21$3, "geladen")) : createCommentVNode("", true),
              createElementVNode("span", _hoisted_22$3, toDisplayString(selectedPlace.value?.name) + " · " + toDisplayString(totals.value.boards) + " " + toDisplayString(totals.value.boards === 1 ? "Seite" : "Seiten") + " · " + toDisplayString(totals.value.widgets) + " Widgets · " + toDisplayString(totals.value.sources) + " Datenquellen ", 1),
              _cache[17] || (_cache[17] = createElementVNode("span", { class: "detail__spacer" }, null, -1)),
              createVNode(unref(DButton), {
                intent: "primary",
                size: "sm",
                onClick: _cache[4] || (_cache[4] = ($event) => open(selectedEntry.value))
              }, {
                default: withCtx(() => [..._cache[13] || (_cache[13] = [
                  createTextVNode("Laden", -1)
                ])]),
                _: 1
              }),
              isWritable(selectedPlace.value) ? (openBlock(), createBlock(unref(DButton), {
                key: 1,
                size: "sm",
                title: "Aktuellen Arbeitsstand hierhin schreiben",
                onClick: _cache[5] || (_cache[5] = ($event) => overwrite(selectedEntry.value))
              }, {
                default: withCtx(() => [..._cache[14] || (_cache[14] = [
                  createTextVNode(" Überschreiben ", -1)
                ])]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(DButton), {
                size: "sm",
                onClick: _cache[6] || (_cache[6] = ($event) => download(selectedEntry.value))
              }, {
                default: withCtx(() => [..._cache[15] || (_cache[15] = [
                  createTextVNode("Herunterladen", -1)
                ])]),
                _: 1
              }),
              isWritable(selectedPlace.value) ? (openBlock(), createBlock(unref(DButton), {
                key: 2,
                intent: "danger",
                size: "sm",
                onClick: _cache[7] || (_cache[7] = ($event) => remove(selectedEntry.value))
              }, {
                default: withCtx(() => [..._cache[16] || (_cache[16] = [
                  createTextVNode(" Löschen ", -1)
                ])]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            boards.value.length ? (openBlock(), createElementBlock("div", _hoisted_23$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(boards.value, (board) => {
                return openBlock(), createElementBlock("article", {
                  key: board.id,
                  class: "board"
                }, [
                  createVNode(BoardFloorplan, {
                    items: board.items,
                    "type-by-id": board.typeById
                  }, null, 8, ["items", "type-by-id"]),
                  createElementVNode("div", _hoisted_24$2, [
                    createElementVNode("h3", _hoisted_25$1, toDisplayString(board.name), 1),
                    createElementVNode("p", _hoisted_26$1, toDisplayString(board.widgetCount) + " Widgets · " + toDisplayString(board.sourceCount) + " " + toDisplayString(board.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1),
                    board.kinds.length ? (openBlock(), createElementBlock("p", _hoisted_27$1, toDisplayString(board.kinds.join(" · ")), 1)) : createCommentVNode("", true)
                  ])
                ]);
              }), 128))
            ])) : (openBlock(), createElementBlock("p", _hoisted_28$1, " In diesem Stand liegt kein Board - er enthält nur Verbindungen, Quellen oder Variablen. "))
          ], 64)) : busy.value ? (openBlock(), createElementBlock("p", _hoisted_29$1, "Wird gelesen…")) : (openBlock(), createElementBlock("p", _hoisted_30$1, "Wähle links einen Stand, um zu sehen, was darin liegt."))
        ])
      ]);
    };
  }
});
const WorkspaceStorage = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-3b03814f"]]);
const _hoisted_1$h = { class: "boards" };
const _hoisted_2$f = { class: "boards__panel" };
const _hoisted_3$c = { class: "boards__bar" };
const _hoisted_4$b = {
  class: "boards__views",
  role: "tablist",
  "aria-label": "Ansicht"
};
const _hoisted_5$9 = ["aria-selected"];
const _hoisted_6$8 = ["aria-selected"];
const _hoisted_7$8 = { class: "boards__body" };
const _hoisted_8$8 = {
  key: 0,
  class: "boards__empty"
};
const _hoisted_9$8 = { class: "boards__empty-actions" };
const _hoisted_10$8 = {
  key: 1,
  class: "single"
};
const _hoisted_11$6 = ["aria-label", "onKeydown"];
const _hoisted_12$6 = {
  class: "single__icon",
  "aria-hidden": "true"
};
const _hoisted_13$5 = { class: "single__text" };
const _hoisted_14$5 = { class: "single__name" };
const _hoisted_15$5 = {
  key: 0,
  class: "single__desc"
};
const _hoisted_16$4 = { class: "single__meta" };
const _hoisted_17$4 = { class: "single__actions" };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "BoardsHome",
  props: {
    pageRepo: {},
    layoutRepo: {}
  },
  setup(__props) {
    const props = __props;
    const router2 = useRouter();
    const route = useRoute();
    const { byUsage } = useBoardUsage();
    const workspace = inject(identifier);
    const modelledPages = useEList(workspace, (w) => w.board?.pages);
    const board = computed(() => {
      void modelledPages.value;
      return workspace.board;
    });
    const view = ref(route.query.view === "storage" ? "storage" : "recent");
    const pages = computed(() => {
      void modelledPages.value;
      const repo = props.pageRepo;
      if (!repo) return [];
      return repo.getAllPageIds().slice().sort(byUsage).map(
        (id) => summarizePage(
          id,
          repo.getPage(id),
          repo.getPage(id)?.layout?.toArray() ?? [],
          repo.getPage(id)?.widgets?.toArray() ?? []
        )
      );
    });
    const boardTotals = computed(() => ({
      pages: pages.value.length,
      widgets: pages.value.reduce((sum, page) => sum + page.widgetCount, 0),
      sources: new Set(pages.value.flatMap((page) => page.kinds)).size
    }));
    const entryPageId = computed(
      () => props.pageRepo?.getDefaultPage()?.id ?? pages.value[0]?.id
    );
    function openPage(id) {
      router2.push(`/page/${id}`);
    }
    function openBoard() {
      const id = entryPageId.value;
      if (id) openPage(id);
    }
    function createPage() {
      const repo = props.pageRepo;
      if (!repo || !props.layoutRepo) return;
      const id = v4();
      repo.registerPage({
        id,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: true,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      });
      router2.push(`/page/${id}/edit`);
    }
    function openStorage() {
      view.value = "storage";
    }
    function openRestored(ids) {
      const id = props.pageRepo?.getDefaultPage()?.id ?? ids[0];
      if (id) router2.push(`/page/${id}`);
      else view.value = "recent";
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        createElementVNode("div", _hoisted_2$f, [
          createElementVNode("header", _hoisted_3$c, [
            createElementVNode("div", _hoisted_4$b, [
              createElementVNode("button", {
                type: "button",
                role: "tab",
                "aria-selected": view.value === "recent",
                class: normalizeClass(["boards__view", { on: view.value === "recent" }]),
                onClick: _cache[0] || (_cache[0] = ($event) => view.value = "recent")
              }, " Oft benutzt ", 10, _hoisted_5$9),
              createElementVNode("button", {
                type: "button",
                role: "tab",
                "aria-selected": view.value === "storage",
                class: normalizeClass(["boards__view", { on: view.value === "storage" }]),
                onClick: _cache[1] || (_cache[1] = ($event) => view.value = "storage")
              }, " Speicher ", 10, _hoisted_6$8)
            ])
          ]),
          createElementVNode("div", _hoisted_7$8, [
            view.value === "recent" && pages.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_8$8, [
              createVNode(BoardFloorplan, {
                class: "boards__empty-plan",
                items: [
                  { id: "a", x: 0, y: 0, width: 2, height: 1 },
                  { id: "b", x: 2, y: 0, width: 1, height: 2 },
                  { id: "c", x: 0, y: 1, width: 1, height: 1 },
                  { id: "d", x: 1, y: 1, width: 1, height: 1 }
                ],
                "type-by-id": { a: "chart", b: "map", c: "table", d: "text" }
              }),
              _cache[4] || (_cache[4] = createElementVNode("h2", { class: "boards__empty-title" }, "Noch kein Board", -1)),
              _cache[5] || (_cache[5] = createElementVNode("p", { class: "boards__empty-text" }, " Ein Board besteht aus Seiten, auf denen Widgets über deinen Datenquellen liegen. Lege eines an oder öffne einen gespeicherten Arbeitsstand. ", -1)),
              createElementVNode("div", _hoisted_9$8, [
                createVNode(unref(DButton), {
                  intent: "primary",
                  size: "sm",
                  onClick: createPage
                }, {
                  default: withCtx(() => [..._cache[2] || (_cache[2] = [
                    createTextVNode("Board anlegen", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DButton), {
                  size: "sm",
                  onClick: openStorage
                }, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createTextVNode("Aus Speicher öffnen", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : view.value === "recent" ? (openBlock(), createElementBlock("div", _hoisted_10$8, [
              _cache[7] || (_cache[7] = createElementVNode("h2", { class: "single__heading" }, "Geöffnet", -1)),
              createElementVNode("article", {
                class: "single__card",
                tabindex: "0",
                role: "button",
                "aria-label": `Board ${board.value?.name ?? ""} öffnen`,
                onClick: openBoard,
                onKeydown: [
                  withKeys(openBoard, ["enter"]),
                  withKeys(withModifiers(openBoard, ["prevent"]), ["space"])
                ]
              }, [
                createElementVNode("span", _hoisted_12$6, [
                  createVNode(unref(DIcon), {
                    name: board.value?.icon || "dashboard",
                    size: "lg"
                  }, null, 8, ["name"])
                ]),
                createElementVNode("div", _hoisted_13$5, [
                  createElementVNode("h3", _hoisted_14$5, toDisplayString(board.value?.name || "Board"), 1),
                  board.value?.description ? (openBlock(), createElementBlock("p", _hoisted_15$5, toDisplayString(board.value.description), 1)) : createCommentVNode("", true),
                  createElementVNode("p", _hoisted_16$4, toDisplayString(boardTotals.value.pages) + " " + toDisplayString(boardTotals.value.pages === 1 ? "Seite" : "Seiten") + " · " + toDisplayString(boardTotals.value.widgets) + " " + toDisplayString(boardTotals.value.widgets === 1 ? "Widget" : "Widgets"), 1)
                ]),
                createElementVNode("div", _hoisted_17$4, [
                  createVNode(unref(DButton), {
                    intent: "primary",
                    size: "sm",
                    onClick: withModifiers(openBoard, ["stop"])
                  }, {
                    default: withCtx(() => [..._cache[6] || (_cache[6] = [
                      createTextVNode("Öffnen", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 40, _hoisted_11$6),
              _cache[8] || (_cache[8] = createElementVNode("p", { class: "single__note" }, " Ein Arbeitsstand hält genau ein Board. Ein anderes bekommst du, indem du im Speicher einen anderen Stand öffnest; die Seiten dieses Boards liegen im Bereich „Seiten“. ", -1))
            ])) : (openBlock(), createBlock(WorkspaceStorage, {
              key: 2,
              onRestored: openRestored
            }))
          ])
        ])
      ]);
    };
  }
});
const BoardsHome = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-86d874a3"]]);
const _hoisted_1$g = { class: "report-container" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "ViewReport",
  props: ["params"],
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const pageRepo = inject(identifier$1);
    const layoutRepo = inject(identifier$2);
    const pageID = computed(() => {
      return props.params?.pageid ?? route.params.pageid ?? "";
    });
    const { recordOpened } = useBoardUsage();
    watch(pageID, (id) => recordOpened(id), { immediate: true });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$g, [
        pageID.value ? (openBlock(), createBlock(LayoutRenderer, {
          key: 0,
          pageId: pageID.value,
          viewMode: true
        }, null, 8, ["pageId"])) : (openBlock(), createBlock(BoardsHome, {
          key: 1,
          "page-repo": unref(pageRepo),
          "layout-repo": unref(layoutRepo)
        }, null, 8, ["page-repo", "layout-repo"]))
      ]);
    };
  }
});
const ViewReport = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-3ecae506"]]);
const NONE = { boards: 0, widgets: 0 };
function useDatasourceUsage() {
  const pages = inject(identifier$1);
  function usageByDatasource() {
    const found = {};
    if (!pages) return found;
    for (const pageId of pages.getAllPageIds()) {
      const onThisBoard = /* @__PURE__ */ new Set();
      for (const widget of pages.getPage(pageId)?.widgets?.toArray() ?? []) {
        const id = widget.datasource?.uid;
        if (!id) continue;
        const held = found[id] ??= { boards: 0, widgets: 0 };
        held.widgets++;
        onThisBoard.add(id);
      }
      for (const id of onThisBoard) found[id].boards++;
    }
    return found;
  }
  function usageOf(datasourceId) {
    return usageByDatasource()[datasourceId] ?? NONE;
  }
  function usageLabel(usage2) {
    if (!usage2.widgets) return "";
    const boards = `${usage2.boards} ${usage2.boards === 1 ? "Board" : "Boards"}`;
    const widgets = `${usage2.widgets} ${usage2.widgets === 1 ? "Widget" : "Widgets"}`;
    return `${boards} · ${widgets}`;
  }
  return { usageByDatasource, usageOf, usageLabel };
}
const _hoisted_1$f = {
  key: 0,
  class: "pick"
};
const _hoisted_2$e = { class: "pick__lead" };
const _hoisted_3$b = {
  key: 0,
  class: "pick__rubric"
};
const _hoisted_4$a = { class: "tiles" };
const _hoisted_5$8 = ["onClick"];
const _hoisted_6$7 = { class: "tile__head" };
const _hoisted_7$7 = { class: "tile__name" };
const _hoisted_8$7 = {
  key: 0,
  class: "tile__what"
};
const _hoisted_9$7 = {
  key: 1,
  class: "fill"
};
const _hoisted_10$7 = { class: "chosen" };
const _hoisted_11$5 = {
  class: "chosen__icon",
  "aria-hidden": "true"
};
const _hoisted_12$5 = { class: "chosen__text" };
const _hoisted_13$4 = { class: "chosen__name" };
const _hoisted_14$4 = {
  key: 0,
  class: "chosen__what"
};
const _hoisted_15$4 = { class: "fill__fields" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "CreateWizard",
  props: /* @__PURE__ */ mergeModels({
    title: {},
    lead: {},
    groups: {},
    summaryOf: { type: Function },
    iconOf: { type: Function },
    ready: { type: Boolean },
    createLabel: {}
  }, {
    "modelValue": { type: Boolean, ...{ required: true } },
    "modelModifiers": {},
    "type": { required: true },
    "typeModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["create"], ["update:modelValue", "update:type"]),
  setup(__props, { emit: __emit }) {
    const open = useModel(__props, "modelValue");
    const type = useModel(__props, "type");
    const props = __props;
    const emit = __emit;
    const step = ref(1);
    watch(open, (isOpen) => {
      if (isOpen) step.value = 1;
    });
    const shown2 = computed(() => props.groups.filter((group) => group.types.length));
    function choose(each) {
      type.value = each;
      step.value = 2;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DModal), {
        modelValue: open.value,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => open.value = $event),
        title: __props.title,
        size: "lg",
        onCancel: _cache[5] || (_cache[5] = ($event) => open.value = false)
      }, {
        actions: withCtx(() => [
          step.value === 2 ? (openBlock(), createBlock(unref(DButton), {
            key: 0,
            intent: "quiet",
            onClick: _cache[1] || (_cache[1] = ($event) => step.value = 1)
          }, {
            default: withCtx(() => [..._cache[7] || (_cache[7] = [
              createTextVNode("Zurück", -1)
            ])]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(unref(DButton), {
            intent: "quiet",
            onClick: _cache[2] || (_cache[2] = ($event) => open.value = false)
          }, {
            default: withCtx(() => [..._cache[8] || (_cache[8] = [
              createTextVNode("Abbrechen", -1)
            ])]),
            _: 1
          }),
          step.value === 2 ? (openBlock(), createBlock(unref(DButton), {
            key: 1,
            intent: "primary",
            disabled: !__props.ready,
            onClick: _cache[3] || (_cache[3] = ($event) => emit("create"))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.createLabel ?? "Anlegen"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : createCommentVNode("", true)
        ]),
        default: withCtx(() => [
          step.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_1$f, [
            createElementVNode("p", _hoisted_2$e, toDisplayString(__props.lead), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(shown2.value, (group) => {
              return openBlock(), createElementBlock("section", {
                key: group.label,
                class: "pick__group"
              }, [
                shown2.value.length > 1 ? (openBlock(), createElementBlock("h3", _hoisted_3$b, toDisplayString(group.label), 1)) : createCommentVNode("", true),
                createElementVNode("ul", _hoisted_4$a, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(group.types, (each) => {
                    return openBlock(), createElementBlock("li", { key: each }, [
                      createElementVNode("button", {
                        type: "button",
                        class: normalizeClass(["tile", { "tile--on": type.value === each }]),
                        onClick: ($event) => choose(each)
                      }, [
                        createElementVNode("span", _hoisted_6$7, [
                          createVNode(unref(DIcon), {
                            name: __props.iconOf(each),
                            size: "sm",
                            class: "tile__icon"
                          }, null, 8, ["name"]),
                          createElementVNode("span", _hoisted_7$7, toDisplayString(each), 1),
                          type.value === each ? (openBlock(), createBlock(unref(DIcon), {
                            key: 0,
                            name: "check",
                            size: "sm",
                            class: "tile__check"
                          })) : createCommentVNode("", true)
                        ]),
                        __props.summaryOf(each) ? (openBlock(), createElementBlock("span", _hoisted_8$7, toDisplayString(__props.summaryOf(each)), 1)) : createCommentVNode("", true)
                      ], 10, _hoisted_5$8)
                    ]);
                  }), 128))
                ])
              ]);
            }), 128))
          ])) : (openBlock(), createElementBlock("div", _hoisted_9$7, [
            createElementVNode("header", _hoisted_10$7, [
              createElementVNode("span", _hoisted_11$5, [
                createVNode(unref(DIcon), {
                  name: __props.iconOf(type.value),
                  size: "lg"
                }, null, 8, ["name"])
              ]),
              createElementVNode("div", _hoisted_12$5, [
                createElementVNode("span", _hoisted_13$4, toDisplayString(type.value), 1),
                __props.summaryOf(type.value) ? (openBlock(), createElementBlock("p", _hoisted_14$4, toDisplayString(__props.summaryOf(type.value)), 1)) : createCommentVNode("", true)
              ]),
              createVNode(unref(DButton), {
                intent: "quiet",
                size: "sm",
                onClick: _cache[0] || (_cache[0] = ($event) => step.value = 1)
              }, {
                default: withCtx(() => [..._cache[6] || (_cache[6] = [
                  createTextVNode("Anderer Typ", -1)
                ])]),
                _: 1
              })
            ]),
            createElementVNode("div", _hoisted_15$4, [
              renderSlot(_ctx.$slots, "setup", {}, void 0, true)
            ])
          ]))
        ]),
        _: 3
      }, 8, ["modelValue", "title"]);
    };
  }
});
const CreateWizard = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-6d945def"]]);
const _hoisted_1$e = {
  key: 0,
  class: "model__none"
};
const _hoisted_2$d = {
  key: 1,
  class: "model__none"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ModelFields",
  props: {
    doc: {},
    config: {},
    omit: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const IDENTITY = /* @__PURE__ */ new Set(["name", "type", "uid"]);
    const fields = computed(
      () => (props.doc?.features ?? []).filter(
        (f) => !IDENTITY.has(f.name) && !props.omit.includes(f.name) && !f.many
      )
    );
    function label(feature) {
      const spaced = feature.name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/_/g, " ");
      return spaced.charAt(0).toUpperCase() + spaced.slice(1);
    }
    function asNumber(feature, value) {
      props.config[feature.name] = value === "" ? void 0 : Number(value);
    }
    return (_ctx, _cache) => {
      return !__props.doc ? (openBlock(), createElementBlock("p", _hoisted_1$e, " Dieser Typ bringt kein Modell mit — die Felder füllst du nach dem Anlegen im Editor aus. ")) : !fields.value.length ? (openBlock(), createElementBlock("p", _hoisted_2$d, " Dieser Typ braucht außer dem Namen nichts weiter. ")) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(fields.value, (feature) => {
        return openBlock(), createElementBlock(Fragment, {
          key: feature.name
        }, [
          feature.type === "boolean" ? (openBlock(), createBlock(unref(DField), {
            key: 0,
            label: label(feature),
            hint: feature.documentation,
            stacked: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(DSwitch), {
                "model-value": !!__props.config[feature.name],
                "onUpdate:modelValue": ($event) => __props.config[feature.name] = $event
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1032, ["label", "hint"])) : feature.type === "number" ? (openBlock(), createBlock(unref(DInput), {
            key: 1,
            "model-value": __props.config[feature.name] ?? "",
            label: label(feature),
            hint: feature.documentation,
            required: !feature.optional,
            type: "number",
            stacked: "",
            "onUpdate:modelValue": ($event) => asNumber(feature, $event)
          }, null, 8, ["model-value", "label", "hint", "required", "onUpdate:modelValue"])) : (openBlock(), createBlock(unref(DInput), {
            key: 2,
            "model-value": __props.config[feature.name] ?? "",
            label: label(feature),
            hint: feature.documentation,
            required: !feature.optional,
            type: /url|uri|endpoint/i.test(feature.name) ? "url" : "text",
            stacked: "",
            "onUpdate:modelValue": ($event) => __props.config[feature.name] = $event
          }, null, 8, ["model-value", "label", "hint", "required", "type", "onUpdate:modelValue"]))
        ], 64);
      }), 128));
    };
  }
});
const ModelFields = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-deac0807"]]);
const _hoisted_1$d = { class: "tags" };
const _hoisted_2$c = {
  key: 0,
  class: "tags__held"
};
const _hoisted_3$a = {
  key: 1,
  class: "tags__offer"
};
const _hoisted_4$9 = ["onMousedown"];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "TagInput",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    hint: {},
    known: { default: () => [] }
  }, {
    "modelValue": { default: () => [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const draft = ref("");
    const suggestions = computed(() => {
      const term = draft.value.trim().toLowerCase();
      if (!term) return [];
      return props.known.filter((tag) => tag.includes(term) && !model.value.includes(tag)).slice(0, 6);
    });
    function add(raw) {
      const tag = raw.trim().toLowerCase();
      if (!tag || model.value.includes(tag)) {
        draft.value = "";
        return;
      }
      model.value = [...model.value, tag];
      draft.value = "";
    }
    function remove(tag) {
      model.value = model.value.filter((each) => each !== tag);
    }
    function onKey(event) {
      if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();
        add(draft.value);
        return;
      }
      if (event.key === "Backspace" && !draft.value && model.value.length) {
        model.value = model.value.slice(0, -1);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DField), {
        label: __props.label,
        hint: __props.hint,
        stacked: ""
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$d, [
            model.value.length ? (openBlock(), createElementBlock("div", _hoisted_2$c, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(model.value, (tag) => {
                return openBlock(), createBlock(unref(DChip), {
                  key: tag,
                  tone: "accent",
                  removable: "",
                  onRemove: ($event) => remove(tag)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tag), 1)
                  ]),
                  _: 2
                }, 1032, ["onRemove"]);
              }), 128))
            ])) : createCommentVNode("", true),
            createVNode(unref(DInput), {
              modelValue: draft.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => draft.value = $event),
              placeholder: "Wort eingeben, Enter",
              stacked: "",
              onKeydown: onKey,
              onBlur: _cache[1] || (_cache[1] = ($event) => add(draft.value))
            }, null, 8, ["modelValue"]),
            suggestions.value.length ? (openBlock(), createElementBlock("div", _hoisted_3$a, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(suggestions.value, (tag) => {
                return openBlock(), createElementBlock("button", {
                  key: tag,
                  type: "button",
                  class: "tags__suggestion",
                  onMousedown: withModifiers(($event) => add(tag), ["prevent"])
                }, toDisplayString(tag), 41, _hoisted_4$9);
              }), 128))
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["label", "hint"]);
    };
  }
});
const TagInput = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-b6b361a8"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "NewConnectionDialog",
  props: {
    "modelValue": { type: Boolean, ...{ required: true } },
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["created"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const open = useModel(__props, "modelValue");
    const emit = __emit;
    const connections = inject(identifier$3);
    const workspace = inject(identifier);
    const held = useEList(workspace, (w) => w.connections);
    const type = ref("");
    const name = ref("");
    const icon = ref("");
    const tags = ref([]);
    const config = ref({});
    const groups = computed(() => [
      { label: "Verbindungstypen", types: connections.registeredConnections }
    ]);
    const summaryOf = (each) => describeModel(connections.getConnectionIdentifiers(each)?.Model)?.documentation;
    const iconOf = (each) => connections.getConnectionIdentifiers(each)?.icon ?? "link";
    const doc = computed(
      () => type.value ? describeModel(connections.getConnectionIdentifiers(type.value)?.Model) : void 0
    );
    const knownTags = computed(() => {
      const all = /* @__PURE__ */ new Set();
      for (const connection of held.value) {
        for (const tag of connection.tags ?? []) all.add(tag);
      }
      return [...all].sort();
    });
    watch(type, () => {
      config.value = {};
    });
    watch(open, (isOpen) => {
      if (!isOpen) return;
      type.value = "";
      name.value = "";
      icon.value = "";
      tags.value = [];
      config.value = {};
    });
    const missing = computed(
      () => (doc.value?.features ?? []).filter((f) => !f.optional && !["name", "type", "uid"].includes(f.name)).filter((f) => {
        const value = config.value[f.name];
        return value === void 0 || value === null || value === "";
      })
    );
    const ready = computed(() => !!type.value && !!name.value.trim() && !missing.value.length);
    function create() {
      if (!ready.value) return;
      const connection = connections.createConnection(type.value, { ...config.value });
      connection.name = name.value.trim();
      if (icon.value.trim()) connection.icon = icon.value.trim();
      for (const tag of tags.value) connection.tags.add(tag);
      try {
        connections.saveConnection(connection);
      } catch (error) {
        console.warn(`${connection.uid} is not live yet:`, error);
      }
      open.value = false;
      emit("created", connection.uid);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(CreateWizard, {
        modelValue: open.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => open.value = $event),
        type: type.value,
        "onUpdate:type": _cache[4] || (_cache[4] = ($event) => type.value = $event),
        title: "Verbindung anlegen",
        lead: "Womit soll gesprochen werden? Die Beschreibungen stammen aus den Modellen der Typen.",
        groups: groups.value,
        "summary-of": summaryOf,
        "icon-of": iconOf,
        ready: ready.value,
        onCreate: create
      }, {
        setup: withCtx(() => [
          createVNode(unref(DInput), {
            modelValue: name.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => name.value = $event),
            label: "Name",
            placeholder: "Wofür diese Verbindung steht",
            hint: "Unter diesem Namen wählst du die Verbindung später aus.",
            stacked: "",
            required: ""
          }, null, 8, ["modelValue"]),
          createVNode(unref(DIconPicker), {
            modelValue: icon.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => icon.value = $event),
            label: "Symbol",
            fallback: iconOf(type.value),
            hint: "Ohne eigenes Symbol steht hier das des Typs."
          }, null, 8, ["modelValue", "fallback"]),
          createVNode(TagInput, {
            modelValue: tags.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => tags.value = $event),
            label: "Schlagworte",
            hint: "Wofür diese Verbindung da ist — danach lässt sich später suchen.",
            known: knownTags.value
          }, null, 8, ["modelValue", "known"]),
          createVNode(ModelFields, {
            doc: doc.value,
            config: config.value
          }, null, 8, ["doc", "config"])
        ]),
        _: 1
      }, 8, ["modelValue", "type", "groups", "ready"]);
    };
  }
});
const _hoisted_1$c = {
  key: 0,
  class: "note note--warn"
};
const _hoisted_2$b = {
  key: 0,
  class: "note"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "NewDatasourceDialog",
  props: /* @__PURE__ */ mergeModels({
    forConnection: {}
  }, {
    "modelValue": { type: Boolean, ...{ required: true } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["created"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const open = useModel(__props, "modelValue");
    const props = __props;
    const emit = __emit;
    const datasources = inject(identifier$4);
    const workspace = inject(identifier);
    const connections = useEList(workspace, (w) => w.connections);
    const held = useEList(workspace, (w) => w.datasources);
    const type = ref("");
    const name = ref("");
    const icon = ref("");
    const tags = ref([]);
    const connection = ref(void 0);
    const config = ref({});
    const types = computed(() => datasources.registeredDatasources);
    const kindOf = (each) => datasources.getDatasourceIdentifiers(each)?.kind;
    const groups = computed(() => [
      {
        label: "Aus einer Verbindung lesen",
        types: types.value.filter((each) => kindOf(each) !== "composer")
      },
      {
        label: "Aus vorhandenen Datenquellen zusammensetzen",
        types: types.value.filter((each) => kindOf(each) === "composer")
      }
    ]);
    const summaryOf = (each) => describeModel(datasources.getDatasourceIdentifiers(each)?.Model)?.documentation;
    const iconOf = (each) => datasources.getDatasourceIdentifiers(each)?.icon ?? "database";
    const doc = computed(
      () => type.value ? describeModel(datasources.getDatasourceIdentifiers(type.value)?.Model) : void 0
    );
    const knownTags = computed(() => {
      const all = /* @__PURE__ */ new Set();
      for (const source of held.value) {
        for (const tag of source.tags ?? []) all.add(tag);
      }
      return [...all].sort();
    });
    const needsConnection = computed(
      () => (doc.value?.features ?? []).some((f) => f.name === "connection")
    );
    const connectionOptions = computed(() => {
      const suits = new Set(datasources.getDatasourceIdentifiers(type.value)?.connections ?? []);
      return connections.value.map((each) => ({
        label: each.name || each.uid,
        value: each.uid,
        group: suits.size === 0 ? "Verbindungen" : suits.has(each.type) ? "Passend zum Typ" : "Weitere"
      }));
    });
    const nothingSuits = computed(
      () => connectionOptions.value.length > 0 && !connectionOptions.value.some((each) => each.group === "Passend zum Typ") && (datasources.getDatasourceIdentifiers(type.value)?.connections ?? []).length > 0
    );
    watch(type, () => {
      config.value = {};
    });
    watch(open, (isOpen) => {
      if (!isOpen) return;
      type.value = "";
      name.value = "";
      icon.value = "";
      tags.value = [];
      connection.value = props.forConnection;
      config.value = {};
    });
    const missing = computed(() => {
      const required = (doc.value?.features ?? []).filter((f) => !f.optional && !["name", "type", "uid", "connection"].includes(f.name)).filter((f) => {
        const value = config.value[f.name];
        return value === void 0 || value === null || value === "";
      }).map((f) => f.name);
      if (needsConnection.value && !connection.value) required.push("connection");
      return required;
    });
    const ready = computed(() => !!type.value && !!name.value.trim() && !missing.value.length);
    function create() {
      if (!ready.value) return;
      const settings = { ...config.value };
      if (needsConnection.value) settings.connection = connection.value;
      const datasource = datasources.createDatasource(type.value, settings);
      datasource.name = name.value.trim();
      if (icon.value.trim()) datasource.icon = icon.value.trim();
      for (const tag of tags.value) datasource.tags.add(tag);
      datasource.connection = connections.value.find((each) => each.uid === connection.value);
      try {
        datasources.saveDatasource(datasource);
      } catch (error) {
        console.warn(`${datasource.uid} is not live yet:`, error);
      }
      open.value = false;
      emit("created", datasource.uid);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(CreateWizard, {
        modelValue: open.value,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => open.value = $event),
        type: type.value,
        "onUpdate:type": _cache[5] || (_cache[5] = ($event) => type.value = $event),
        title: "Datenquelle anlegen",
        lead: "Was für Daten sollen gelesen werden? Die Beschreibungen stammen aus den Modellen der Typen.",
        groups: groups.value,
        "summary-of": summaryOf,
        "icon-of": iconOf,
        ready: ready.value,
        onCreate: create
      }, {
        setup: withCtx(() => [
          createVNode(unref(DInput), {
            modelValue: name.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => name.value = $event),
            label: "Name",
            placeholder: "Wofür diese Datenquelle steht",
            hint: "Unter diesem Namen wählst du die Datenquelle im Widget aus.",
            stacked: "",
            required: ""
          }, null, 8, ["modelValue"]),
          needsConnection.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            !connectionOptions.value.length ? (openBlock(), createElementBlock("p", _hoisted_1$c, " Es gibt noch keine Verbindung. Lege zuerst eine an — ohne sie hat die Datenquelle nichts, woraus sie lesen kann. ")) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              nothingSuits.value ? (openBlock(), createElementBlock("p", _hoisted_2$b, " Keine der vorhandenen Verbindungen ist von diesem Typ vorgesehen. Du kannst trotzdem eine wählen — die Angabe ist ein Hinweis, keine Regel. ")) : createCommentVNode("", true),
              createVNode(unref(DSelect), {
                modelValue: connection.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => connection.value = $event),
                label: "Verbindung",
                options: connectionOptions.value,
                "value-key": "value",
                "label-key": "label",
                "group-key": "group",
                placeholder: "Verbindung wählen",
                hint: "Der Endpunkt, aus dem diese Quelle liest.",
                stacked: "",
                required: ""
              }, null, 8, ["modelValue", "options"])
            ], 64))
          ], 64)) : createCommentVNode("", true),
          createVNode(unref(DIconPicker), {
            modelValue: icon.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => icon.value = $event),
            label: "Symbol",
            fallback: iconOf(type.value),
            hint: "Ohne eigenes Symbol steht hier das des Typs."
          }, null, 8, ["modelValue", "fallback"]),
          createVNode(TagInput, {
            modelValue: tags.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => tags.value = $event),
            label: "Schlagworte",
            hint: "Wofür diese Datenquelle da ist — danach lässt sich später suchen.",
            known: knownTags.value
          }, null, 8, ["modelValue", "known"]),
          createVNode(ModelFields, {
            doc: doc.value,
            config: config.value,
            omit: ["connection"]
          }, null, 8, ["doc", "config"])
        ]),
        _: 1
      }, 8, ["modelValue", "type", "groups", "ready"]);
    };
  }
});
const NewDatasourceDialog = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-585727e2"]]);
const _hoisted_1$b = ["onClick"];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TreeMenu",
  props: {
    at: {},
    items: {}
  },
  emits: ["choose", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const menu = ref();
    const placed = ref({ x: 0, y: 0 });
    const open = computed(() => !!props.at && props.items.length > 0);
    watch(
      () => props.at,
      async (at) => {
        if (!at) return;
        placed.value = { x: at.x, y: at.y };
        await nextTick();
        const box = menu.value?.getBoundingClientRect();
        if (!box) return;
        const margin = 8;
        placed.value = {
          x: Math.min(at.x, window.innerWidth - box.width - margin),
          y: Math.min(at.y, window.innerHeight - box.height - margin)
        };
      }
    );
    function onKey(event) {
      if (event.key === "Escape") emit("close");
    }
    watch(open, (isOpen) => {
      if (isOpen) {
        window.addEventListener("keydown", onKey);
        window.addEventListener("scroll", () => emit("close"), { once: true, capture: true });
      } else {
        window.removeEventListener("keydown", onKey);
      }
    });
    onBeforeUnmount(() => window.removeEventListener("keydown", onKey));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        open.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createElementVNode("div", {
            class: "menu__catch",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("close")),
            onContextmenu: _cache[1] || (_cache[1] = withModifiers(($event) => emit("close"), ["prevent"]))
          }, null, 32),
          createElementVNode("ul", {
            ref_key: "menu",
            ref: menu,
            class: "menu",
            role: "menu",
            style: normalizeStyle({ left: `${placed.value.x}px`, top: `${placed.value.y}px` })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
              return openBlock(), createElementBlock("li", {
                key: item.id,
                class: normalizeClass({ "menu__sep": item.separated })
              }, [
                createElementVNode("button", {
                  type: "button",
                  role: "menuitem",
                  class: normalizeClass(["menu__item", { "menu__item--danger": item.danger }]),
                  onClick: ($event) => emit("choose", item.id)
                }, [
                  item.icon ? (openBlock(), createBlock(unref(DIcon), {
                    key: 0,
                    name: item.icon,
                    size: "sm"
                  }, null, 8, ["name"])) : createCommentVNode("", true),
                  createElementVNode("span", null, toDisplayString(item.label), 1)
                ], 10, _hoisted_1$b)
              ], 2);
            }), 128))
          ], 4)
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
});
const TreeMenu = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-3e59dfe4"]]);
const _hoisted_1$a = { class: "tree" };
const _hoisted_2$a = { class: "tree__head" };
const _hoisted_3$9 = { class: "tree__search" };
const _hoisted_4$8 = {
  key: 0,
  class: "tree__empty"
};
const _hoisted_5$7 = {
  key: 1,
  class: "tree__list"
};
const _hoisted_6$6 = ["onContextmenu"];
const _hoisted_7$6 = ["title", "onClick"];
const _hoisted_8$6 = ["disabled", "onClick"];
const _hoisted_9$6 = { class: "row__name" };
const _hoisted_10$6 = {
  key: 0,
  class: "row__what"
};
const _hoisted_11$4 = {
  key: 1,
  class: "row__tag row__tag--more"
};
const _hoisted_12$4 = { class: "row__what" };
const _hoisted_13$3 = {
  key: 0,
  class: "tree__sources"
};
const _hoisted_14$3 = ["onContextmenu"];
const _hoisted_15$3 = ["onClick"];
const _hoisted_16$3 = { class: "row__name" };
const _hoisted_17$3 = { class: "row__what" };
const _hoisted_18$3 = {
  key: 0,
  class: "row__tag row__tag--more"
};
const _hoisted_19$2 = {
  key: 1,
  class: "row__usage"
};
const _hoisted_20$2 = {
  key: 0,
  class: "tree__none"
};
const _hoisted_21$2 = { class: "confirm__title" };
const _hoisted_22$2 = { class: "confirm__text" };
const _hoisted_23$2 = {
  key: 0,
  class: "confirm__text confirm__text--warn"
};
const COMPOSED = "\0composed";
const TAGS_SHOWN = 2;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DataTree",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["findEndpoints", "view"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const selected = useModel(__props, "modelValue");
    const connectionRepository = inject(identifier$3);
    const workspace = inject(identifier);
    const connections = useEList(workspace, (w) => w.connections);
    const datasourceRepository = inject(identifier$4);
    const dataSources = useEList(workspace, (w) => w.datasources);
    const { usageByDatasource, usageLabel } = useDatasourceUsage();
    const emit = __emit;
    const search = ref("");
    const collapsed = ref(/* @__PURE__ */ new Set());
    function isComposer(type) {
      return !!type && datasourceRepository.getDatasourceIdentifiers(type)?.kind === "composer";
    }
    function iconFor(held, kind) {
      if (held.icon) return held.icon;
      const type = held.type;
      const registered = kind === "connection" ? connectionRepository.getConnectionIdentifiers(type)?.icon : datasourceRepository.getDatasourceIdentifiers(type)?.icon;
      return registered ?? (kind === "connection" ? "link" : "database");
    }
    function tagsOf(held) {
      const tags = held.tags;
      if (!tags) return [];
      return Array.isArray(tags) ? tags : typeof tags.toArray === "function" ? tags.toArray() : [...tags];
    }
    const groups = computed(() => {
      const usage2 = usageByDatasource();
      const term = search.value.trim().toLowerCase();
      const matches = (...words) => !term || words.some((w) => (w ?? "").toLowerCase().includes(term));
      const sourcesOf = (connectionId) => dataSources.value.filter((source) => source.connection?.uid === connectionId).filter((source) => matches(source.name, source.type, source.uid, ...tagsOf(source))).map((source) => ({
        uid: source.uid,
        name: source.name,
        type: source.type,
        usage: usageLabel(usage2[source.uid] ?? { boards: 0, widgets: 0 }),
        icon: iconFor(source, "source"),
        tags: tagsOf(source)
      }));
      const known = connections.value.map((connection) => ({
        /* A connection just created has no type yet, and the row says so by
           showing none - the model has every feature optional for that reason. */
        uid: connection.uid ?? "",
        name: connection.name ?? "",
        type: connection.type ?? "",
        orphan: false,
        sources: sourcesOf(connection.uid),
        /* A connection stays visible while its own name matches, even with no
           source under it - otherwise searching would hide where to add one. */
        itself: matches(connection.name, connection.type, connection.uid, ...tagsOf(connection)),
        icon: iconFor(connection, "connection"),
        tags: tagsOf(connection)
      }));
      const attached = new Set(connections.value.map((c) => c.uid));
      const row = (source) => ({
        uid: source.uid,
        name: source.name,
        type: source.type,
        usage: usageLabel(usage2[source.uid] ?? { boards: 0, widgets: 0 }),
        icon: iconFor(source, "source"),
        tags: tagsOf(source)
      });
      const unattached = dataSources.value.filter((source) => !source.connection || !attached.has(source.connection.uid)).filter((source) => matches(source.name, source.type, source.uid, ...tagsOf(source)));
      const composed = unattached.filter((source) => isComposer(source.type)).map(row);
      const loose = unattached.filter((source) => !isComposer(source.type)).map(row);
      const shown2 = known.filter((group) => group.itself || group.sources.length);
      if (composed.length) {
        shown2.push({
          uid: COMPOSED,
          name: "Zusammengesetzt",
          type: "",
          orphan: true,
          sources: composed,
          itself: true,
          icon: "layers",
          tags: []
        });
      }
      if (loose.length) {
        shown2.push({
          uid: "",
          name: "Ohne Verbindung",
          type: "",
          orphan: true,
          sources: loose,
          itself: true,
          icon: "link_off",
          tags: []
        });
      }
      return shown2;
    });
    const isOpen = (uid) => !collapsed.value.has(uid);
    function toggle(uid) {
      const next = new Set(collapsed.value);
      next.has(uid) ? next.delete(uid) : next.add(uid);
      collapsed.value = next;
    }
    const isSelected = (type, itemId) => selected.value?.type === type && selected.value?.itemId === itemId;
    function select(type, itemId) {
      selected.value = { type, itemId };
    }
    const creatingConnection = ref(false);
    const creatingDataSource = ref(false);
    const creatingFor = ref(void 0);
    function onConnectionCreated(uid) {
      select("Connection", uid);
    }
    function onDataSourceCreated(uid) {
      select("DataSource", uid);
    }
    const menuAt = ref(void 0);
    const menuFor = ref({ what: "nothing" });
    const menuItems = computed(() => {
      const target = menuFor.value;
      if (target.what === "connection") {
        return [
          { id: "edit", label: "Bearbeiten", icon: "edit" },
          { id: "add-source", label: "Datenquelle hier anlegen", icon: "add" },
          { id: "remove", label: "Verbindung löschen", icon: "delete", danger: true, separated: true }
        ];
      }
      if (target.what === "source") {
        return [
          { id: "edit", label: "Bearbeiten", icon: "edit" },
          { id: "preview", label: "Daten ansehen", icon: "table" },
          { id: "remove", label: "Datenquelle löschen", icon: "delete", danger: true, separated: true }
        ];
      }
      return [
        { id: "new-connection", label: "Verbindung anlegen", icon: "add_link" },
        { id: "new-source", label: "Datenquelle anlegen", icon: "add" }
      ];
    });
    function openMenu(event, target) {
      menuFor.value = target;
      menuAt.value = { x: event.clientX, y: event.clientY };
    }
    function closeMenu() {
      menuAt.value = void 0;
    }
    function onMenuChoice(id) {
      const target = menuFor.value;
      closeMenu();
      if (id === "new-connection") return void (creatingConnection.value = true);
      if (id === "new-source") return void (creatingDataSource.value = true);
      if (target.what === "connection") {
        if (id === "edit") select("Connection", target.uid);
        if (id === "add-source") {
          select("Connection", target.uid);
          creatingFor.value = target.uid;
          creatingDataSource.value = true;
        }
        if (id === "remove") confirmRemove("Connection", target.uid);
        return;
      }
      if (target.what === "source") {
        if (id === "edit" || id === "preview") {
          select("DataSource", target.uid);
          emit("view", id === "preview" ? "preview" : "settings");
        }
        if (id === "remove") confirmRemove("DataSource", target.uid);
      }
    }
    const removing = ref(void 0);
    function confirmRemove(type, itemId) {
      removing.value = { type, itemId };
    }
    function doRemove() {
      const target = removing.value;
      if (!target) return;
      if (target.type === "Connection") connectionRepository.removeConnection(target.itemId);
      else datasourceRepository.removeDatasource(target.itemId);
      if (isSelected(target.type, target.itemId)) selected.value = void 0;
      removing.value = void 0;
    }
    const removingLabel = computed(() => {
      const target = removing.value;
      if (!target) return "";
      const held = target.type === "Connection" ? connections.value.find((c) => c.uid === target.itemId) : dataSources.value.find((d) => d.uid === target.itemId);
      return held?.name ?? target.itemId;
    });
    const removingUsage = computed(() => {
      const target = removing.value;
      if (!target || target.type !== "DataSource") return "";
      return usageLabel(usageByDatasource()[target.itemId] ?? { boards: 0, widgets: 0 });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("section", _hoisted_1$a, [
          createElementVNode("header", _hoisted_2$a, [
            _cache[10] || (_cache[10] = createElementVNode("h2", { class: "tree__title" }, "Verbindungen & Daten", -1)),
            createVNode(unref(DButton), {
              intent: "quiet",
              size: "sm",
              title: "Verbindung anlegen",
              onClick: _cache[0] || (_cache[0] = ($event) => creatingConnection.value = true)
            }, {
              default: withCtx(() => [
                createVNode(unref(DIcon), {
                  name: "add_link",
                  size: "sm"
                })
              ]),
              _: 1
            }),
            createVNode(unref(DButton), {
              intent: "quiet",
              size: "sm",
              title: "Datenquelle anlegen",
              onClick: _cache[1] || (_cache[1] = ($event) => {
                creatingFor.value = void 0;
                creatingDataSource.value = true;
              })
            }, {
              default: withCtx(() => [
                createVNode(unref(DIcon), {
                  name: "add",
                  size: "sm"
                })
              ]),
              _: 1
            }),
            createVNode(unref(DButton), {
              intent: "quiet",
              size: "sm",
              title: "Endpunkte suchen",
              onClick: _cache[2] || (_cache[2] = ($event) => emit("findEndpoints"))
            }, {
              default: withCtx(() => [
                createVNode(unref(DIcon), {
                  name: "travel_explore",
                  size: "sm"
                })
              ]),
              _: 1
            })
          ]),
          createElementVNode("div", _hoisted_3$9, [
            createVNode(unref(DInput), {
              modelValue: search.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => search.value = $event),
              type: "search",
              placeholder: "Suchen…",
              stacked: ""
            }, null, 8, ["modelValue"])
          ]),
          createElementVNode("div", {
            class: "tree__body",
            onContextmenu: _cache[4] || (_cache[4] = withModifiers(($event) => openMenu($event, { what: "nothing" }), ["prevent"]))
          }, [
            !groups.value.length ? (openBlock(), createElementBlock("p", _hoisted_4$8, [
              search.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode("Nichts gefunden.")
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode("Noch keine Verbindung. Lege eine an, um Daten zu lesen.")
              ], 64))
            ])) : (openBlock(), createElementBlock("ul", _hoisted_5$7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group) => {
                return openBlock(), createElementBlock("li", {
                  key: group.uid || "loose"
                }, [
                  createElementVNode("div", {
                    class: normalizeClass(["row", "row--connection", { "row--on": isSelected("Connection", group.uid) }]),
                    onContextmenu: withModifiers(($event) => openMenu(
                      $event,
                      group.orphan ? { what: "nothing" } : { what: "connection", uid: group.uid, name: group.name }
                    ), ["prevent", "stop"])
                  }, [
                    createElementVNode("button", {
                      type: "button",
                      class: "row__twist",
                      title: isOpen(group.uid) ? "Zuklappen" : "Aufklappen",
                      onClick: ($event) => toggle(group.uid)
                    }, [
                      createVNode(unref(DIcon), {
                        name: isOpen(group.uid) ? "expand_more" : "chevron_right",
                        size: "sm"
                      }, null, 8, ["name"])
                    ], 8, _hoisted_7$6),
                    createElementVNode("button", {
                      type: "button",
                      class: "row__body",
                      disabled: group.orphan,
                      onClick: ($event) => !group.orphan && select("Connection", group.uid)
                    }, [
                      createVNode(unref(DIcon), {
                        name: group.icon ?? "link",
                        size: "sm",
                        class: "row__icon"
                      }, null, 8, ["name"]),
                      createElementVNode("span", _hoisted_9$6, toDisplayString(group.name), 1),
                      group.type ? (openBlock(), createElementBlock("span", _hoisted_10$6, toDisplayString(group.type), 1)) : createCommentVNode("", true),
                      (openBlock(true), createElementBlock(Fragment, null, renderList((group.tags ?? []).slice(0, TAGS_SHOWN), (tag) => {
                        return openBlock(), createElementBlock("span", {
                          key: tag,
                          class: "row__tag"
                        }, toDisplayString(tag), 1);
                      }), 128)),
                      (group.tags?.length ?? 0) > TAGS_SHOWN ? (openBlock(), createElementBlock("span", _hoisted_11$4, " +" + toDisplayString((group.tags?.length ?? 0) - TAGS_SHOWN), 1)) : createCommentVNode("", true),
                      createElementVNode("span", _hoisted_12$4, toDisplayString(group.sources.length), 1)
                    ], 8, _hoisted_8$6),
                    !group.orphan ? (openBlock(), createBlock(unref(DButton), {
                      key: 0,
                      intent: "quiet",
                      size: "sm",
                      title: "Verbindung löschen",
                      onClick: withModifiers(($event) => confirmRemove("Connection", group.uid), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(DIcon), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)
                  ], 42, _hoisted_6$6),
                  isOpen(group.uid) ? (openBlock(), createElementBlock("ul", _hoisted_13$3, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(group.sources, (source) => {
                      return openBlock(), createElementBlock("li", {
                        key: source.uid
                      }, [
                        createElementVNode("div", {
                          class: normalizeClass(["row", "row--source", { "row--on": isSelected("DataSource", source.uid) }]),
                          onContextmenu: withModifiers(($event) => openMenu($event, { what: "source", uid: source.uid, name: source.name }), ["prevent", "stop"])
                        }, [
                          _cache[11] || (_cache[11] = createElementVNode("span", {
                            class: "row__twist row__twist--none",
                            "aria-hidden": "true"
                          }, null, -1)),
                          createElementVNode("button", {
                            type: "button",
                            class: "row__body",
                            onClick: ($event) => select("DataSource", source.uid)
                          }, [
                            createVNode(unref(DIcon), {
                              name: source.icon,
                              size: "sm",
                              class: "row__icon"
                            }, null, 8, ["name"]),
                            createElementVNode("span", _hoisted_16$3, toDisplayString(source.name), 1),
                            createElementVNode("span", _hoisted_17$3, toDisplayString(source.type), 1),
                            (openBlock(true), createElementBlock(Fragment, null, renderList(source.tags.slice(0, TAGS_SHOWN), (tag) => {
                              return openBlock(), createElementBlock("span", {
                                key: tag,
                                class: "row__tag"
                              }, toDisplayString(tag), 1);
                            }), 128)),
                            source.tags.length > TAGS_SHOWN ? (openBlock(), createElementBlock("span", _hoisted_18$3, " +" + toDisplayString(source.tags.length - TAGS_SHOWN), 1)) : createCommentVNode("", true),
                            source.usage ? (openBlock(), createElementBlock("span", _hoisted_19$2, toDisplayString(source.usage), 1)) : createCommentVNode("", true)
                          ], 8, _hoisted_15$3),
                          createVNode(unref(DButton), {
                            intent: "quiet",
                            size: "sm",
                            title: "Datenquelle löschen",
                            onClick: withModifiers(($event) => confirmRemove("DataSource", source.uid), ["stop"])
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(DIcon), {
                                name: "delete",
                                size: "sm"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ], 42, _hoisted_14$3)
                      ]);
                    }), 128)),
                    !group.sources.length && !group.orphan ? (openBlock(), createElementBlock("li", _hoisted_20$2, " Keine Datenquelle an dieser Verbindung. ")) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ]);
              }), 128))
            ]))
          ], 32)
        ]),
        createVNode(TreeMenu, {
          at: menuAt.value,
          items: menuItems.value,
          onChoose: onMenuChoice,
          onClose: closeMenu
        }, null, 8, ["at", "items"]),
        createVNode(_sfc_main$d, {
          modelValue: creatingConnection.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => creatingConnection.value = $event),
          onCreated: onConnectionCreated
        }, null, 8, ["modelValue"]),
        createVNode(NewDatasourceDialog, {
          modelValue: creatingDataSource.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => creatingDataSource.value = $event),
          "for-connection": creatingFor.value,
          onCreated: onDataSourceCreated
        }, null, 8, ["modelValue", "for-connection"]),
        createVNode(unref(DModal), {
          "model-value": !!removing.value,
          size: "sm",
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => removing.value = void 0),
          onCancel: _cache[9] || (_cache[9] = ($event) => removing.value = void 0)
        }, {
          header: withCtx(() => [
            createVNode(unref(DIcon), {
              name: "warning",
              size: "lg",
              tone: "color-err"
            }),
            createElementVNode("h2", _hoisted_21$2, toDisplayString(removing.value?.type === "Connection" ? "Verbindung löschen" : "Datenquelle löschen"), 1)
          ]),
          actions: withCtx(() => [
            createVNode(unref(DButton), {
              intent: "quiet",
              onClick: _cache[7] || (_cache[7] = ($event) => removing.value = void 0)
            }, {
              default: withCtx(() => [..._cache[12] || (_cache[12] = [
                createTextVNode("Abbrechen", -1)
              ])]),
              _: 1
            }),
            createVNode(unref(DButton), {
              intent: "danger",
              onClick: doRemove
            }, {
              default: withCtx(() => [..._cache[13] || (_cache[13] = [
                createTextVNode("Löschen", -1)
              ])]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createElementVNode("p", _hoisted_22$2, " „" + toDisplayString(removingLabel.value) + "“ wird entfernt. Das lässt sich nicht rückgängig machen. ", 1),
            removingUsage.value ? (openBlock(), createElementBlock("p", _hoisted_23$2, " Verwendet in " + toDisplayString(removingUsage.value) + " — die lesen danach ins Leere. ", 1)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["model-value"])
      ], 64);
    };
  }
});
const DataTree = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b599ea25"]]);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash$1 = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var lodash = lodash$1.exports;
var hasRequiredLodash;
function requireLodash() {
  if (hasRequiredLodash) return lodash$1.exports;
  hasRequiredLodash = 1;
  (function(module, exports$1) {
    (function() {
      var undefined$1;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss",
        // Latin Extended-A block.
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = exports$1 && !exports$1.nodeType && exports$1;
      var freeModule = freeExports && true && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = (function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      })();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object2) {
          return object2 == null ? undefined$1 : object2[key];
        };
      }
      function basePropertyOf(object2) {
        return function(key) {
          return object2 == null ? undefined$1 : object2[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined$1) {
            result = result === undefined$1 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object2, props) {
        return arrayMap(props, function(key) {
          return [key, object2[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object2, props) {
        return arrayMap(props, function(key) {
          return object2[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object2, key) {
        return object2 == null ? undefined$1 : object2[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = (function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = (function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        })();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
        var defineProperty = (function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        })();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
        function lodash2(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ (function() {
          function object2() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object2.prototype = proto;
            var result2 = new object2();
            object2.prototype = undefined$1;
            return result2;
          };
        })();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined$1;
        }
        lodash2.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash2
          }
        };
        lodash2.prototype = baseLodash.prototype;
        lodash2.prototype.constructor = lodash2;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed2;
                } else if (!computed2) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined$1 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined$1 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined$1;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object2, key, value) {
          if (value !== undefined$1 && !eq(object2[key], value) || value === undefined$1 && !(key in object2)) {
            baseAssignValue(object2, key, value);
          }
        }
        function assignValue(object2, key, value) {
          var objValue = object2[key];
          if (!(hasOwnProperty.call(object2, key) && eq(objValue, value)) || value === undefined$1 && !(key in object2)) {
            baseAssignValue(object2, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object2, source) {
          return object2 && copyObject(source, keys2(source), object2);
        }
        function baseAssignIn(object2, source) {
          return object2 && copyObject(source, keysIn(source), object2);
        }
        function baseAssignValue(object2, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object2, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object2[key] = value;
          }
        }
        function baseAt(object2, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object2 == null;
          while (++index < length) {
            result2[index] = skip ? undefined$1 : get(object2, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined$1) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined$1) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object2, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object2 ? customizer(value, key, object2, stack) : customizer(value);
          }
          if (result2 !== undefined$1) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object2) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object2 ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys2;
          var props = isArr ? undefined$1 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys2(source);
          return function(object2) {
            return baseConformsTo(object2, source, props);
          };
        }
        function baseConformsTo(object2, source, props) {
          var length = props.length;
          if (object2 == null) {
            return !length;
          }
          object2 = Object2(object2);
          while (length--) {
            var key = props[length], predicate = source[key], value = object2[key];
            if (value === undefined$1 && !(key in object2) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined$1, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed2 = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed2 === computed2) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed2) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed2, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed2 === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed2))) {
              var computed2 = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined$1 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object2, iteratee2) {
          return object2 && baseFor(object2, iteratee2, keys2);
        }
        function baseForOwnRight(object2, iteratee2) {
          return object2 && baseForRight(object2, iteratee2, keys2);
        }
        function baseFunctions(object2, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object2[key]);
          });
        }
        function baseGet(object2, path) {
          path = castPath(path, object2);
          var index = 0, length = path.length;
          while (object2 != null && index < length) {
            object2 = object2[toKey(path[index++])];
          }
          return index && index == length ? object2 : undefined$1;
        }
        function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object2);
          return isArray(object2) ? result2 : arrayPush(result2, symbolsFunc(object2));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined$1 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object2, key) {
          return object2 != null && hasOwnProperty.call(object2, key);
        }
        function baseHasIn(object2, key) {
          return object2 != null && key in Object2(object2);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed2);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object2, setter, iteratee2, accumulator) {
          baseForOwn(object2, function(value, key, object3) {
            setter(accumulator, iteratee2(value), key, object3);
          });
          return accumulator;
        }
        function baseInvoke(object2, path, args) {
          path = castPath(path, object2);
          object2 = parent(object2, path);
          var func = object2 == null ? object2 : object2[toKey(last(path))];
          return func == null ? undefined$1 : apply(func, object2, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object2, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object2), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object2), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object2)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object2, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object2 == null) {
            return !length;
          }
          object2 = Object2(object2);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object2[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined$1 && !(key in object2)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object2, source, stack);
              }
              if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object2) {
          if (!isPrototype(object2)) {
            return nativeKeys(object2);
          }
          var result2 = [];
          for (var key in Object2(object2)) {
            if (hasOwnProperty.call(object2, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object2) {
          if (!isObject(object2)) {
            return nativeKeysIn(object2);
          }
          var isProto = isPrototype(object2), result2 = [];
          for (var key in object2) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object2, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object2) {
            return object2 === source || baseIsMatch(object2, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object2) {
            var objValue = get(object2, path);
            return objValue === undefined$1 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object2, source, srcIndex, customizer, stack) {
          if (object2 === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object2, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object2, key), srcValue, key + "", object2, source, stack) : undefined$1;
              if (newValue === undefined$1) {
                newValue = srcValue;
              }
              assignMergeValue(object2, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object2, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object2, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object2, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object2, source, stack) : undefined$1;
          var isCommon = newValue === undefined$1;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object2, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined$1;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object2, other) {
            return compareMultiple(object2, other, orders);
          });
        }
        function basePick(object2, paths) {
          return basePickBy(object2, paths, function(value, path) {
            return hasIn(object2, path);
          });
        }
        function basePickBy(object2, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object2, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object2), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object2) {
            return baseGet(object2, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed2 = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object2, path, value, customizer) {
          if (!isObject(object2)) {
            return object2;
          }
          path = castPath(path, object2);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object2;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object2;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
              if (newValue === undefined$1) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object2;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed2 = array[mid];
              if (computed2 !== null && !isSymbol(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array[mid]), othIsDefined = computed2 !== undefined$1, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol(computed2);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed2 <= value : computed2 < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed2, seen)) {
              var seen = computed2;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed2 === computed2) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed2) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed2);
                }
                result2.push(value);
              } else if (!includes2(seen, computed2, comparator)) {
                if (seen !== result2) {
                  seen.push(computed2);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object2, path) {
          path = castPath(path, object2);
          object2 = parent(object2, path);
          return object2 == null || delete object2[toKey(last(path))];
        }
        function baseUpdate(object2, path, updater, customizer) {
          return baseSet(object2, path, updater(baseGet(object2, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined$1;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object2) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object2) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined$1 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object2, other, orders) {
          var index = -1, objCriteria = object2.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object2.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object2, customizer) {
          var isNew = !object2;
          object2 || (object2 = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : undefined$1;
            if (newValue === undefined$1) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object2, key, newValue);
            } else {
              assignValue(object2, key, newValue);
            }
          }
          return object2;
        }
        function copySymbols(source, object2) {
          return copyObject(source, getSymbols(source), object2);
        }
        function copySymbolsIn(source, object2) {
          return copyObject(source, getSymbolsIn(source), object2);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object2, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined$1 : customizer;
              length = 1;
            }
            object2 = Object2(object2);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object2, source, index, customizer);
              }
            }
            return object2;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object2, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object2), props = keysFunc(object2), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object2;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined$1,
                args,
                holders,
                undefined$1,
                undefined$1,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys2(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object2, iteratee2) {
            return baseInverter(object2, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined$1 && other === undefined$1) {
              return defaultValue;
            }
            if (value !== undefined$1) {
              result2 = value;
            }
            if (other !== undefined$1) {
              if (result2 === undefined$1) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined$1 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined$1;
            }
            start = toFinite(start);
            if (end === undefined$1) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= -4;
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined$1, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop2 : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object2) {
            var tag = getTag(object2);
            if (tag == mapTag) {
              return mapToArray(object2);
            }
            if (tag == setTag) {
              return setToPairs(object2);
            }
            return baseToPairs(object2, keysFunc(object2));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= -97;
            partials = holders = undefined$1;
          }
          ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined$1 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined$1;
          }
          var data = isBindKey ? undefined$1 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= -25;
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined$1, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object2) {
          if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object2, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object2, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined$1 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined$1) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object2, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
                return false;
              }
              object2 = object2.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object2), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object2, +other);
            case errorTag:
              return object2.name == other.name && object2.message == other.message;
            case regexpTag:
            case stringTag:
              return object2 == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object2.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object2);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object2, other);
              var result2 = equalArrays(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object2);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object2) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object2, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object2);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object2;
          }
          var result2 = true;
          stack.set(object2, other);
          stack.set(other, object2);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object2[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
            }
            if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object2.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object2);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined$1, flatten), func + "");
        }
        function getAllKeys(object2) {
          return baseGetAllKeys(object2, keys2, getSymbols);
        }
        function getAllKeysIn(object2) {
          return baseGetAllKeys(object2, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop2 : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object2 = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
          return object2.placeholder;
        }
        function getIteratee() {
          var result2 = lodash2.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object2) {
          var result2 = keys2(object2), length = result2.length;
          while (length--) {
            var key = result2[length], value = object2[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object2, key) {
          var value = getValue(object2, key);
          return baseIsNative(value) ? value : undefined$1;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined$1;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object2) {
          if (object2 == null) {
            return [];
          }
          object2 = Object2(object2);
          return arrayFilter(nativeGetSymbols(object2), function(symbol) {
            return propertyIsEnumerable.call(object2, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object2) {
          var result2 = [];
          while (object2) {
            arrayPush(result2, getSymbols(object2));
            object2 = getPrototype(object2);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object2, path, hasFunc) {
          path = castPath(path, object2);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object2 != null && hasFunc(object2, key))) {
              break;
            }
            object2 = object2[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object2 == null ? 0 : object2.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object2) || isArguments(object2));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object2) {
          return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
        }
        function initCloneByTag(object2, tag, isDeep) {
          var Ctor = object2.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object2);
            case boolTag:
            case dateTag:
              return new Ctor(+object2);
            case dataViewTag:
              return cloneDataView(object2, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object2, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object2);
            case regexpTag:
              return cloneRegExp(object2);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object2);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object2) {
          if (!isObject(object2)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object2) && isIndex(index, object2.length) : type == "string" && index in object2) {
            return eq(object2[index], value);
          }
          return false;
        }
        function isKey(value, object2) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object2(object2);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash2[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object2) {
            if (object2 == null) {
              return false;
            }
            return object2[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object2));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object2) {
          var result2 = [];
          if (object2 != null) {
            for (var key in Object2(object2)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object2, path) {
          return path.length < 2 ? object2 : baseGet(object2, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
          }
          return array;
        }
        function safeGet(object2, key) {
          if (key === "constructor" && typeof object2[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object2[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined$1, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined$1 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined$1;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined$1;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined$1;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined$1 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined$1, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash2(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object2) {
            return baseAt(object2, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined$1
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined$1);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined$1) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined$1;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined$1
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined$1 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined$1 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined$1;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object2, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object2, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined$1;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined$1;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined$1;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined$1) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined$1;
          }
          function flush() {
            return timerId === undefined$1 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined$1) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined$1) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver2) {
          if (typeof func != "function" || resolver2 != null && typeof resolver2 != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver2 ? resolver2.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined$1 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object2, source) {
          return source == null || baseConformsTo(object2, source, keys2(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          var result2 = customizer ? customizer(value, other) : undefined$1;
          return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object2, source) {
          return object2 === source || baseIsMatch(object2, source, getMatchData(source));
        }
        function isMatchWith(object2, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseIsMatch(object2, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined$1;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object2, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys2(source), object2);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object2, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object2, source) {
          copyObject(source, keysIn(source), object2);
        });
        var assignInWith = createAssigner(function(object2, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object2, customizer);
        });
        var assignWith = createAssigner(function(object2, source, srcIndex, customizer) {
          copyObject(source, keys2(source), object2, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object2, sources) {
          object2 = Object2(object2);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object2[key];
              if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object2, key)) {
                object2[key] = source[key];
              }
            }
          }
          return object2;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined$1, customDefaultsMerge);
          return apply(mergeWith, undefined$1, args);
        });
        function findKey(object2, predicate) {
          return baseFindKey(object2, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object2, predicate) {
          return baseFindKey(object2, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object2, iteratee2) {
          return object2 == null ? object2 : baseFor(object2, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object2, iteratee2) {
          return object2 == null ? object2 : baseForRight(object2, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object2, iteratee2) {
          return object2 && baseForOwn(object2, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object2, iteratee2) {
          return object2 && baseForOwnRight(object2, getIteratee(iteratee2, 3));
        }
        function functions(object2) {
          return object2 == null ? [] : baseFunctions(object2, keys2(object2));
        }
        function functionsIn(object2) {
          return object2 == null ? [] : baseFunctions(object2, keysIn(object2));
        }
        function get(object2, path, defaultValue) {
          var result2 = object2 == null ? undefined$1 : baseGet(object2, path);
          return result2 === undefined$1 ? defaultValue : result2;
        }
        function has(object2, path) {
          return object2 != null && hasPath(object2, path, baseHas);
        }
        function hasIn(object2, path) {
          return object2 != null && hasPath(object2, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys2(object2) {
          return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
        }
        function keysIn(object2) {
          return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
        }
        function mapKeys(object2, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object2, function(value, key, object3) {
            baseAssignValue(result2, iteratee2(value, key, object3), value);
          });
          return result2;
        }
        function mapValues(object2, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object2, function(value, key, object3) {
            baseAssignValue(result2, key, iteratee2(value, key, object3));
          });
          return result2;
        }
        var merge = createAssigner(function(object2, source, srcIndex) {
          baseMerge(object2, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object2, source, srcIndex, customizer) {
          baseMerge(object2, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object2, paths) {
          var result2 = {};
          if (object2 == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object2);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object2, getAllKeysIn(object2), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object2, predicate) {
          return pickBy(object2, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object2, paths) {
          return object2 == null ? {} : basePick(object2, paths);
        });
        function pickBy(object2, predicate) {
          if (object2 == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object2), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object2, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object2, path, defaultValue) {
          path = castPath(path, object2);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object2 = undefined$1;
          }
          while (++index < length) {
            var value = object2 == null ? undefined$1 : object2[toKey(path[index])];
            if (value === undefined$1) {
              index = length;
              value = defaultValue;
            }
            object2 = isFunction(value) ? value.call(object2) : value;
          }
          return object2;
        }
        function set(object2, path, value) {
          return object2 == null ? object2 : baseSet(object2, path, value);
        }
        function setWith(object2, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object2 == null ? object2 : baseSet(object2, path, value, customizer);
        }
        var toPairs = createToPairs(keys2);
        var toPairsIn = createToPairs(keysIn);
        function transform(object2, iteratee2, accumulator) {
          var isArr = isArray(object2), isArrLike = isArr || isBuffer(object2) || isTypedArray(object2);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object2 && object2.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object2)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object2)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object2, function(value, index, object3) {
            return iteratee2(accumulator, value, index, object3);
          });
          return accumulator;
        }
        function unset(object2, path) {
          return object2 == null ? true : baseUnset(object2, path);
        }
        function update(object2, path, updater) {
          return object2 == null ? object2 : baseUpdate(object2, path, castFunction(updater));
        }
        function updateWith(object2, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object2 == null ? object2 : baseUpdate(object2, path, castFunction(updater), customizer);
        }
        function values(object2) {
          return object2 == null ? [] : baseValues(object2, keys2(object2));
        }
        function valuesIn(object2) {
          return object2 == null ? [] : baseValues(object2, keysIn(object2));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined$1) {
            upper = lower;
            lower = undefined$1;
          }
          if (upper !== undefined$1) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined$1) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined$1;
          }
          if (floating === undefined$1) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined$1;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined$1;
            }
          }
          if (lower === undefined$1 && upper === undefined$1) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined$1) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined$1;
          }
          limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash2.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined$1;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys2(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined$1) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined$1 : pattern;
          if (pattern === undefined$1) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined$1, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object2, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object2, key, bind(object2[key], object2));
          });
          return object2;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object2) {
            return baseInvoke(object2, path, args);
          };
        });
        var methodOf = baseRest(function(object2, args) {
          return function(path) {
            return baseInvoke(object2, path, args);
          };
        });
        function mixin(object2, source, options) {
          var props = keys2(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object2;
            object2 = this;
            methodNames = baseFunctions(source, keys2(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object2);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object2[methodName] = func;
            if (isFunc) {
              object2.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object2(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object2 });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object2, arrayPush([this.value()], arguments));
              };
            }
          });
          return object2;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop2() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object2) {
          return function(path) {
            return object2 == null ? undefined$1 : baseGet(object2, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash2.after = after;
        lodash2.ary = ary;
        lodash2.assign = assign;
        lodash2.assignIn = assignIn;
        lodash2.assignInWith = assignInWith;
        lodash2.assignWith = assignWith;
        lodash2.at = at;
        lodash2.before = before;
        lodash2.bind = bind;
        lodash2.bindAll = bindAll;
        lodash2.bindKey = bindKey;
        lodash2.castArray = castArray;
        lodash2.chain = chain;
        lodash2.chunk = chunk;
        lodash2.compact = compact;
        lodash2.concat = concat;
        lodash2.cond = cond;
        lodash2.conforms = conforms;
        lodash2.constant = constant;
        lodash2.countBy = countBy;
        lodash2.create = create;
        lodash2.curry = curry;
        lodash2.curryRight = curryRight;
        lodash2.debounce = debounce;
        lodash2.defaults = defaults;
        lodash2.defaultsDeep = defaultsDeep;
        lodash2.defer = defer;
        lodash2.delay = delay;
        lodash2.difference = difference;
        lodash2.differenceBy = differenceBy;
        lodash2.differenceWith = differenceWith;
        lodash2.drop = drop;
        lodash2.dropRight = dropRight;
        lodash2.dropRightWhile = dropRightWhile;
        lodash2.dropWhile = dropWhile;
        lodash2.fill = fill;
        lodash2.filter = filter;
        lodash2.flatMap = flatMap;
        lodash2.flatMapDeep = flatMapDeep;
        lodash2.flatMapDepth = flatMapDepth;
        lodash2.flatten = flatten;
        lodash2.flattenDeep = flattenDeep;
        lodash2.flattenDepth = flattenDepth;
        lodash2.flip = flip;
        lodash2.flow = flow;
        lodash2.flowRight = flowRight;
        lodash2.fromPairs = fromPairs;
        lodash2.functions = functions;
        lodash2.functionsIn = functionsIn;
        lodash2.groupBy = groupBy;
        lodash2.initial = initial;
        lodash2.intersection = intersection;
        lodash2.intersectionBy = intersectionBy;
        lodash2.intersectionWith = intersectionWith;
        lodash2.invert = invert;
        lodash2.invertBy = invertBy;
        lodash2.invokeMap = invokeMap;
        lodash2.iteratee = iteratee;
        lodash2.keyBy = keyBy;
        lodash2.keys = keys2;
        lodash2.keysIn = keysIn;
        lodash2.map = map;
        lodash2.mapKeys = mapKeys;
        lodash2.mapValues = mapValues;
        lodash2.matches = matches;
        lodash2.matchesProperty = matchesProperty;
        lodash2.memoize = memoize;
        lodash2.merge = merge;
        lodash2.mergeWith = mergeWith;
        lodash2.method = method;
        lodash2.methodOf = methodOf;
        lodash2.mixin = mixin;
        lodash2.negate = negate;
        lodash2.nthArg = nthArg;
        lodash2.omit = omit;
        lodash2.omitBy = omitBy;
        lodash2.once = once;
        lodash2.orderBy = orderBy;
        lodash2.over = over;
        lodash2.overArgs = overArgs;
        lodash2.overEvery = overEvery;
        lodash2.overSome = overSome;
        lodash2.partial = partial;
        lodash2.partialRight = partialRight;
        lodash2.partition = partition;
        lodash2.pick = pick;
        lodash2.pickBy = pickBy;
        lodash2.property = property;
        lodash2.propertyOf = propertyOf;
        lodash2.pull = pull;
        lodash2.pullAll = pullAll;
        lodash2.pullAllBy = pullAllBy;
        lodash2.pullAllWith = pullAllWith;
        lodash2.pullAt = pullAt;
        lodash2.range = range;
        lodash2.rangeRight = rangeRight;
        lodash2.rearg = rearg;
        lodash2.reject = reject;
        lodash2.remove = remove;
        lodash2.rest = rest;
        lodash2.reverse = reverse;
        lodash2.sampleSize = sampleSize;
        lodash2.set = set;
        lodash2.setWith = setWith;
        lodash2.shuffle = shuffle;
        lodash2.slice = slice;
        lodash2.sortBy = sortBy;
        lodash2.sortedUniq = sortedUniq;
        lodash2.sortedUniqBy = sortedUniqBy;
        lodash2.split = split;
        lodash2.spread = spread;
        lodash2.tail = tail;
        lodash2.take = take;
        lodash2.takeRight = takeRight;
        lodash2.takeRightWhile = takeRightWhile;
        lodash2.takeWhile = takeWhile;
        lodash2.tap = tap;
        lodash2.throttle = throttle;
        lodash2.thru = thru;
        lodash2.toArray = toArray;
        lodash2.toPairs = toPairs;
        lodash2.toPairsIn = toPairsIn;
        lodash2.toPath = toPath;
        lodash2.toPlainObject = toPlainObject;
        lodash2.transform = transform;
        lodash2.unary = unary;
        lodash2.union = union;
        lodash2.unionBy = unionBy;
        lodash2.unionWith = unionWith;
        lodash2.uniq = uniq;
        lodash2.uniqBy = uniqBy;
        lodash2.uniqWith = uniqWith;
        lodash2.unset = unset;
        lodash2.unzip = unzip;
        lodash2.unzipWith = unzipWith;
        lodash2.update = update;
        lodash2.updateWith = updateWith;
        lodash2.values = values;
        lodash2.valuesIn = valuesIn;
        lodash2.without = without;
        lodash2.words = words;
        lodash2.wrap = wrap;
        lodash2.xor = xor;
        lodash2.xorBy = xorBy;
        lodash2.xorWith = xorWith;
        lodash2.zip = zip;
        lodash2.zipObject = zipObject;
        lodash2.zipObjectDeep = zipObjectDeep;
        lodash2.zipWith = zipWith;
        lodash2.entries = toPairs;
        lodash2.entriesIn = toPairsIn;
        lodash2.extend = assignIn;
        lodash2.extendWith = assignInWith;
        mixin(lodash2, lodash2);
        lodash2.add = add;
        lodash2.attempt = attempt;
        lodash2.camelCase = camelCase;
        lodash2.capitalize = capitalize;
        lodash2.ceil = ceil;
        lodash2.clamp = clamp;
        lodash2.clone = clone;
        lodash2.cloneDeep = cloneDeep;
        lodash2.cloneDeepWith = cloneDeepWith;
        lodash2.cloneWith = cloneWith;
        lodash2.conformsTo = conformsTo;
        lodash2.deburr = deburr;
        lodash2.defaultTo = defaultTo;
        lodash2.divide = divide;
        lodash2.endsWith = endsWith;
        lodash2.eq = eq;
        lodash2.escape = escape;
        lodash2.escapeRegExp = escapeRegExp;
        lodash2.every = every;
        lodash2.find = find;
        lodash2.findIndex = findIndex;
        lodash2.findKey = findKey;
        lodash2.findLast = findLast;
        lodash2.findLastIndex = findLastIndex;
        lodash2.findLastKey = findLastKey;
        lodash2.floor = floor;
        lodash2.forEach = forEach;
        lodash2.forEachRight = forEachRight;
        lodash2.forIn = forIn;
        lodash2.forInRight = forInRight;
        lodash2.forOwn = forOwn;
        lodash2.forOwnRight = forOwnRight;
        lodash2.get = get;
        lodash2.gt = gt;
        lodash2.gte = gte;
        lodash2.has = has;
        lodash2.hasIn = hasIn;
        lodash2.head = head;
        lodash2.identity = identity;
        lodash2.includes = includes;
        lodash2.indexOf = indexOf;
        lodash2.inRange = inRange;
        lodash2.invoke = invoke;
        lodash2.isArguments = isArguments;
        lodash2.isArray = isArray;
        lodash2.isArrayBuffer = isArrayBuffer;
        lodash2.isArrayLike = isArrayLike;
        lodash2.isArrayLikeObject = isArrayLikeObject;
        lodash2.isBoolean = isBoolean;
        lodash2.isBuffer = isBuffer;
        lodash2.isDate = isDate;
        lodash2.isElement = isElement;
        lodash2.isEmpty = isEmpty;
        lodash2.isEqual = isEqual;
        lodash2.isEqualWith = isEqualWith;
        lodash2.isError = isError;
        lodash2.isFinite = isFinite;
        lodash2.isFunction = isFunction;
        lodash2.isInteger = isInteger;
        lodash2.isLength = isLength;
        lodash2.isMap = isMap;
        lodash2.isMatch = isMatch;
        lodash2.isMatchWith = isMatchWith;
        lodash2.isNaN = isNaN;
        lodash2.isNative = isNative;
        lodash2.isNil = isNil;
        lodash2.isNull = isNull;
        lodash2.isNumber = isNumber;
        lodash2.isObject = isObject;
        lodash2.isObjectLike = isObjectLike;
        lodash2.isPlainObject = isPlainObject;
        lodash2.isRegExp = isRegExp;
        lodash2.isSafeInteger = isSafeInteger;
        lodash2.isSet = isSet;
        lodash2.isString = isString;
        lodash2.isSymbol = isSymbol;
        lodash2.isTypedArray = isTypedArray;
        lodash2.isUndefined = isUndefined;
        lodash2.isWeakMap = isWeakMap;
        lodash2.isWeakSet = isWeakSet;
        lodash2.join = join;
        lodash2.kebabCase = kebabCase;
        lodash2.last = last;
        lodash2.lastIndexOf = lastIndexOf;
        lodash2.lowerCase = lowerCase;
        lodash2.lowerFirst = lowerFirst;
        lodash2.lt = lt;
        lodash2.lte = lte;
        lodash2.max = max;
        lodash2.maxBy = maxBy;
        lodash2.mean = mean;
        lodash2.meanBy = meanBy;
        lodash2.min = min;
        lodash2.minBy = minBy;
        lodash2.stubArray = stubArray;
        lodash2.stubFalse = stubFalse;
        lodash2.stubObject = stubObject;
        lodash2.stubString = stubString;
        lodash2.stubTrue = stubTrue;
        lodash2.multiply = multiply;
        lodash2.nth = nth;
        lodash2.noConflict = noConflict;
        lodash2.noop = noop2;
        lodash2.now = now;
        lodash2.pad = pad;
        lodash2.padEnd = padEnd;
        lodash2.padStart = padStart;
        lodash2.parseInt = parseInt2;
        lodash2.random = random;
        lodash2.reduce = reduce;
        lodash2.reduceRight = reduceRight;
        lodash2.repeat = repeat;
        lodash2.replace = replace;
        lodash2.result = result;
        lodash2.round = round;
        lodash2.runInContext = runInContext2;
        lodash2.sample = sample;
        lodash2.size = size;
        lodash2.snakeCase = snakeCase;
        lodash2.some = some;
        lodash2.sortedIndex = sortedIndex;
        lodash2.sortedIndexBy = sortedIndexBy;
        lodash2.sortedIndexOf = sortedIndexOf;
        lodash2.sortedLastIndex = sortedLastIndex;
        lodash2.sortedLastIndexBy = sortedLastIndexBy;
        lodash2.sortedLastIndexOf = sortedLastIndexOf;
        lodash2.startCase = startCase;
        lodash2.startsWith = startsWith;
        lodash2.subtract = subtract;
        lodash2.sum = sum;
        lodash2.sumBy = sumBy;
        lodash2.template = template;
        lodash2.times = times;
        lodash2.toFinite = toFinite;
        lodash2.toInteger = toInteger;
        lodash2.toLength = toLength;
        lodash2.toLower = toLower;
        lodash2.toNumber = toNumber;
        lodash2.toSafeInteger = toSafeInteger;
        lodash2.toString = toString;
        lodash2.toUpper = toUpper;
        lodash2.trim = trim;
        lodash2.trimEnd = trimEnd;
        lodash2.trimStart = trimStart;
        lodash2.truncate = truncate;
        lodash2.unescape = unescape;
        lodash2.uniqueId = uniqueId;
        lodash2.upperCase = upperCase;
        lodash2.upperFirst = upperFirst;
        lodash2.each = forEach;
        lodash2.eachRight = forEachRight;
        lodash2.first = head;
        mixin(lodash2, (function() {
          var source = {};
          baseForOwn(lodash2, function(func, methodName) {
            if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        })(), { "chain": false });
        lodash2.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash2[methodName].placeholder = lodash2;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined$1) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash2.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash2.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash2[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined$1
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash2.prototype.at = wrapperAt;
        lodash2.prototype.chain = wrapperChain;
        lodash2.prototype.commit = wrapperCommit;
        lodash2.prototype.next = wrapperNext;
        lodash2.prototype.plant = wrapperPlant;
        lodash2.prototype.reverse = wrapperReverse;
        lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
        lodash2.prototype.first = lodash2.prototype.head;
        if (symIterator) {
          lodash2.prototype[symIterator] = wrapperToIterator;
        }
        return lodash2;
      });
      var _ = runInContext();
      if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(lodash);
  })(lodash$1, lodash$1.exports);
  return lodash$1.exports;
}
var lodashExports = requireLodash();
const _hoisted_1$9 = { class: "editor" };
const _hoisted_2$9 = { class: "editor__fields" };
const _hoisted_3$8 = { class: "editor__actions" };
const _hoisted_4$7 = {
  key: 1,
  class: "editor__preview"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DatasourceEditor",
  props: {
    itemId: {},
    view: { default: "settings" }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const datasourceProxy = ref({});
    const datasourceRepository = inject(identifier$4);
    const workspace = inject(identifier);
    const connections = useEList(workspace, (w) => w.connections);
    const dataSources = useEList(workspace, (w) => w.datasources);
    const typeIcon = computed(
      () => datasourceRepository.getDatasourceIdentifiers(datasourceProxy.value.type)?.icon ?? "database"
    );
    const knownTags = computed(() => {
      const all = /* @__PURE__ */ new Set();
      for (const source of dataSources.value) {
        for (const tag of source.tags ?? []) all.add(tag);
      }
      return [...all].sort();
    });
    const availableDatasources = computed(() => {
      return datasourceRepository.registeredDatasources;
    });
    onMounted(() => {
      const dataSource = datasourceRepository.getDatasourceModel(props.itemId);
      datasourceProxy.value = dataSource ? {
        uid: dataSource.uid,
        name: dataSource.name,
        type: dataSource.type,
        icon: dataSource.icon ?? "",
        tags: [...dataSource.tags ?? []],
        config: lodashExports.cloneDeep(dataSource.config ?? {})
      } : { tags: [] };
    });
    const saveDataSource = () => {
      const dataSource = datasourceRepository.getDatasourceModel(props.itemId);
      if (dataSource) {
        dataSource.name = datasourceProxy.value.name;
        dataSource.type = datasourceProxy.value.type;
        dataSource.icon = datasourceProxy.value.icon?.trim() || void 0;
        dataSource.tags.clear();
        for (const tag of datasourceProxy.value.tags ?? []) dataSource.tags.add(tag);
        dataSource.config = datasourceProxy.value.config;
        dataSource.connection = connections.value.find(
          (connection) => connection.uid === datasourceProxy.value.config?.connection
        );
        datasourceRepository.saveDatasource(dataSource);
      }
      emit("close");
    };
    const previewComponent = computed(() => {
      const identifiers = datasourceRepository.getDatasourceIdentifiers(datasourceProxy.value.type);
      if (!identifiers) {
        return null;
      }
      return datasourceRepository.resolveIdentifier(identifiers.Preview);
    });
    const settingsComponent = computed(() => {
      const identifiers = datasourceRepository.getDatasourceIdentifiers(datasourceProxy.value.type);
      if (!identifiers) {
        return null;
      }
      return datasourceRepository.resolveIdentifier(identifiers.Settings);
    });
    const updateConfig = (config) => {
      datasourceProxy.value.config = config;
    };
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        __props.view === "settings" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createElementVNode("div", _hoisted_2$9, [
            createVNode(unref(DInput), {
              modelValue: datasourceProxy.value.uid,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datasourceProxy.value.uid = $event),
              label: "UID",
              readonly: ""
            }, null, 8, ["modelValue"]),
            createVNode(unref(DInput), {
              modelValue: datasourceProxy.value.name,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datasourceProxy.value.name = $event),
              label: "Name"
            }, null, 8, ["modelValue"]),
            createVNode(unref(DSelect), {
              modelValue: datasourceProxy.value.type,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datasourceProxy.value.type = $event),
              label: "Typ",
              options: availableDatasources.value
            }, null, 8, ["modelValue", "options"]),
            createVNode(unref(DIconPicker), {
              modelValue: datasourceProxy.value.icon,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datasourceProxy.value.icon = $event),
              label: "Symbol",
              fallback: typeIcon.value,
              hint: "Ohne eigenes Symbol steht hier das des Typs."
            }, null, 8, ["modelValue", "fallback"]),
            createVNode(TagInput, {
              modelValue: datasourceProxy.value.tags,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datasourceProxy.value.tags = $event),
              label: "Schlagworte",
              hint: "Wofür diese Datenquelle da ist — danach lässt sich suchen.",
              known: knownTags.value
            }, null, 8, ["modelValue", "known"]),
            (openBlock(), createBlock(resolveDynamicComponent(settingsComponent.value), {
              config: datasourceProxy.value.config,
              connections: unref(connections),
              dataSources: unref(dataSources)
            }, null, 8, ["config", "connections", "dataSources"]))
          ]),
          createElementVNode("div", _hoisted_3$8, [
            createVNode(unref(DButton), {
              intent: "quiet",
              onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("close"))
            }, {
              default: withCtx(() => [..._cache[6] || (_cache[6] = [
                createTextVNode("Schließen", -1)
              ])]),
              _: 1
            }),
            createVNode(unref(DButton), {
              intent: "primary",
              onClick: saveDataSource
            }, {
              default: withCtx(() => [..._cache[7] || (_cache[7] = [
                createTextVNode("Speichern", -1)
              ])]),
              _: 1
            })
          ])
        ], 64)) : (openBlock(), createElementBlock("div", _hoisted_4$7, [
          (openBlock(), createBlock(resolveDynamicComponent(previewComponent.value), {
            "data-source": datasourceProxy.value,
            key: datasourceProxy.value.uid,
            onUpdateConfig: updateConfig
          }, null, 40, ["data-source"]))
        ]))
      ]);
    };
  }
});
const DatasourceEditor = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-41f0a44b"]]);
const _hoisted_1$8 = { class: "editor" };
const _hoisted_2$8 = { class: "editor__fields" };
const _hoisted_3$7 = { class: "editor__actions" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ConnectionEditor",
  props: {
    itemId: {
      type: String,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const connectionProxy = ref({});
    const connectionRepository = inject(identifier$3);
    const availableConnections = computed(() => {
      return connectionRepository.registeredConnections;
    });
    onMounted(() => {
      const connection = connectionRepository.getConnectionModel(props.itemId);
      connectionProxy.value = connection ? {
        uid: connection.uid,
        name: connection.name,
        type: connection.type,
        icon: connection.icon ?? "",
        tags: [...connection.tags ?? []],
        config: JSON.parse(JSON.stringify(connection.config ?? {}))
      } : { tags: [] };
    });
    const typeIcon = computed(
      () => connectionRepository.getConnectionIdentifiers(connectionProxy.value.type)?.icon ?? "link"
    );
    const knownTags = computed(() => {
      const all = /* @__PURE__ */ new Set();
      for (const connection of connectionRepository.getConnections()) {
        for (const tag of connection.tags ?? []) all.add(tag);
      }
      return [...all].sort();
    });
    const settingsComponent = computed(() => {
      const identifiers = connectionRepository.getConnectionIdentifiers(connectionProxy.value.type);
      if (!identifiers) {
        return null;
      }
      return connectionRepository.resolveIdentifier(identifiers.Settings);
    });
    const saveConnection = () => {
      const connection = connectionRepository.getConnectionModel(props.itemId);
      if (connection) {
        connection.name = connectionProxy.value.name;
        connection.type = connectionProxy.value.type;
        connection.icon = connectionProxy.value.icon?.trim() || void 0;
        connection.tags.clear();
        for (const tag of connectionProxy.value.tags ?? []) connection.tags.add(tag);
        connection.config = connectionProxy.value.config;
        connectionRepository.saveConnection(connection);
      }
      emit("close");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createElementVNode("div", _hoisted_2$8, [
          createVNode(unref(DInput), {
            modelValue: connectionProxy.value.uid,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => connectionProxy.value.uid = $event),
            label: "UID",
            readonly: ""
          }, null, 8, ["modelValue"]),
          createVNode(unref(DInput), {
            modelValue: connectionProxy.value.name,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => connectionProxy.value.name = $event),
            label: "Name"
          }, null, 8, ["modelValue"]),
          createVNode(unref(DSelect), {
            modelValue: connectionProxy.value.type,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => connectionProxy.value.type = $event),
            label: "Typ",
            options: availableConnections.value
          }, null, 8, ["modelValue", "options"]),
          createVNode(unref(DIconPicker), {
            modelValue: connectionProxy.value.icon,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => connectionProxy.value.icon = $event),
            label: "Symbol",
            fallback: typeIcon.value,
            hint: "Ohne eigenes Symbol steht hier das des Typs."
          }, null, 8, ["modelValue", "fallback"]),
          createVNode(TagInput, {
            modelValue: connectionProxy.value.tags,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => connectionProxy.value.tags = $event),
            label: "Schlagworte",
            hint: "Wofür diese Verbindung da ist — danach lässt sich suchen.",
            known: knownTags.value
          }, null, 8, ["modelValue", "known"]),
          (openBlock(), createBlock(resolveDynamicComponent(settingsComponent.value), {
            config: connectionProxy.value.config
          }, null, 8, ["config"]))
        ]),
        createElementVNode("div", _hoisted_3$7, [
          createVNode(unref(DButton), {
            intent: "quiet",
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("close"))
          }, {
            default: withCtx(() => [..._cache[6] || (_cache[6] = [
              createTextVNode("Schließen", -1)
            ])]),
            _: 1
          }),
          createVNode(unref(DButton), {
            intent: "primary",
            onClick: saveConnection
          }, {
            default: withCtx(() => [..._cache[7] || (_cache[7] = [
              createTextVNode("Speichern", -1)
            ])]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const ConnectionEditor = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-0fad9a41"]]);
const _hoisted_1$7 = { class: "data-page" };
const _hoisted_2$7 = { class: "data-page__tree" };
const _hoisted_3$6 = { class: "data-page__detail" };
const _hoisted_4$6 = {
  key: 0,
  class: "data-page__nothing"
};
const _hoisted_5$6 = { class: "detail__head" };
const _hoisted_6$5 = { class: "detail__what" };
const _hoisted_7$5 = { class: "detail__name" };
const _hoisted_8$5 = {
  key: 0,
  class: "detail__sub"
};
const _hoisted_9$5 = {
  key: 0,
  class: "detail__usage"
};
const _hoisted_10$5 = { class: "detail__body" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ConnectionsAndData",
  setup(__props) {
    const workspace = inject(identifier);
    const connections = useEList(workspace, (w) => w.connections);
    const dataSources = useEList(workspace, (w) => w.datasources);
    const { usageOf, usageLabel } = useDatasourceUsage();
    const selected = ref(void 0);
    const tab = ref("preview");
    const endpointfinder = inject("endpointfinder", null);
    const findEndpoints = () => endpointfinder?.();
    const held = useEObject(() => {
      const at = selected.value;
      if (!at) return void 0;
      return at.type === "Connection" ? connections.value.find((c) => c.uid === at.itemId) : dataSources.value.find((d) => d.uid === at.itemId);
    });
    const subtitle = computed(() => {
      const item = held.value;
      if (!item) return "";
      if (selected.value?.type === "Connection") return item.type ?? "";
      return [item.type, item.connection?.name].filter(Boolean).join(" · ");
    });
    const usage2 = computed(() => {
      if (selected.value?.type !== "DataSource" || !selected.value.itemId) return "";
      return usageLabel(usageOf(selected.value.itemId));
    });
    const tabs = computed(
      () => selected.value?.type === "DataSource" ? [
        { id: "preview", label: "Vorschau" },
        { id: "settings", label: "Einstellungen" }
      ] : [{ id: "settings", label: "Einstellungen" }]
    );
    watch(selected, (at) => {
      tab.value = at?.type === "DataSource" ? "preview" : "settings";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createElementVNode("aside", _hoisted_2$7, [
          createVNode(DataTree, {
            modelValue: selected.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selected.value = $event),
            onFindEndpoints: findEndpoints,
            onView: _cache[1] || (_cache[1] = ($event) => tab.value = $event)
          }, null, 8, ["modelValue"])
        ]),
        createElementVNode("section", _hoisted_3$6, [
          !selected.value ? (openBlock(), createElementBlock("p", _hoisted_4$6, " Wähle links eine Verbindung oder eine Datenquelle. ")) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createElementVNode("header", _hoisted_5$6, [
              createElementVNode("div", _hoisted_6$5, [
                createElementVNode("h1", _hoisted_7$5, toDisplayString(unref(held)?.name ?? selected.value.itemId), 1),
                subtitle.value ? (openBlock(), createElementBlock("span", _hoisted_8$5, toDisplayString(subtitle.value), 1)) : createCommentVNode("", true)
              ]),
              usage2.value ? (openBlock(), createElementBlock("span", _hoisted_9$5, "Verwendet in " + toDisplayString(usage2.value), 1)) : createCommentVNode("", true)
            ]),
            createVNode(unref(DTabs), {
              modelValue: tab.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => tab.value = $event),
              tabs: tabs.value,
              label: "Ansicht der Auswahl"
            }, null, 8, ["modelValue", "tabs"]),
            createElementVNode("div", _hoisted_10$5, [
              selected.value.type === "Connection" ? (openBlock(), createBlock(ConnectionEditor, {
                key: selected.value.itemId,
                "item-id": selected.value.itemId,
                onClose: _cache[3] || (_cache[3] = ($event) => selected.value = void 0)
              }, null, 8, ["item-id"])) : (openBlock(), createBlock(DatasourceEditor, {
                key: `${selected.value.itemId}-${tab.value}`,
                "item-id": selected.value.itemId,
                view: tab.value === "preview" ? "preview" : "settings",
                onClose: _cache[4] || (_cache[4] = ($event) => selected.value = void 0)
              }, null, 8, ["item-id", "view"]))
            ])
          ], 64))
        ])
      ]);
    };
  }
});
const ConnectionsAndData = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2b44b5f1"]]);
const _hoisted_1$6 = { class: "pages" };
const _hoisted_2$6 = { class: "pages__panel" };
const _hoisted_3$5 = { class: "pages__bar" };
const _hoisted_4$5 = { class: "pages__title" };
const _hoisted_5$5 = {
  key: 0,
  class: "pages__count"
};
const _hoisted_6$4 = {
  key: 0,
  class: "pages__of"
};
const _hoisted_7$4 = { class: "pages__tools" };
const _hoisted_8$4 = { class: "pages__body" };
const _hoisted_9$4 = { class: "pages__grid" };
const _hoisted_10$4 = ["aria-label", "onClick", "onKeydown"];
const _hoisted_11$3 = { class: "page__body" };
const _hoisted_12$3 = { class: "page__name" };
const _hoisted_13$2 = { class: "page__meta" };
const _hoisted_14$2 = {
  key: 0,
  class: "page__usage"
};
const _hoisted_15$2 = {
  key: 1,
  class: "page__kinds"
};
const _hoisted_16$2 = {
  key: 0,
  class: "page__kind"
};
const _hoisted_17$2 = ["aria-label", "onClick"];
const _hoisted_18$2 = {
  key: 0,
  class: "pages__nomatch"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BoardPages",
  setup(__props) {
    const router2 = useRouter();
    const query = ref("");
    const { usageOf, byUsage, lastOpenedLabel } = useBoardUsage();
    const workspace = inject(identifier);
    const pageRepo = inject(identifier$1);
    const modelledPages = useEList(workspace, (w) => w.board?.pages);
    const board = computed(() => {
      void modelledPages.value;
      return workspace.board;
    });
    const pages = computed(() => {
      void modelledPages.value;
      if (!pageRepo) return [];
      return pageRepo.getAllPageIds().slice().sort(byUsage).map(
        (id) => summarizePage(
          id,
          pageRepo.getPage(id),
          pageRepo.getPage(id)?.layout?.toArray() ?? [],
          pageRepo.getPage(id)?.widgets?.toArray() ?? []
        )
      );
    });
    const visiblePages = computed(() => {
      const needle = query.value.trim().toLowerCase();
      if (!needle) return pages.value;
      return pages.value.filter(
        (p) => p.name.toLowerCase().includes(needle) || p.description.toLowerCase().includes(needle) || p.kinds.some((k) => k.toLowerCase().includes(needle))
      );
    });
    function openPage(id) {
      router2.push(`/page/${id}`);
    }
    function editPage(id) {
      router2.push(`/page/${id}/edit`);
    }
    function createPage() {
      if (!pageRepo) return;
      const id = v4();
      pageRepo.registerPage({
        id,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: true,
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      });
      router2.push(`/page/${id}/edit`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createElementVNode("div", _hoisted_2$6, [
          createElementVNode("header", _hoisted_3$5, [
            createElementVNode("h1", _hoisted_4$5, [
              _cache[1] || (_cache[1] = createTextVNode(" Seiten ", -1)),
              pages.value.length ? (openBlock(), createElementBlock("span", _hoisted_5$5, toDisplayString(pages.value.length), 1)) : createCommentVNode("", true)
            ]),
            board.value?.name ? (openBlock(), createElementBlock("p", _hoisted_6$4, "in " + toDisplayString(board.value.name), 1)) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_7$4, [
              withDirectives(createElementVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event),
                class: "pages__search",
                type: "search",
                placeholder: "Seiten filtern",
                "aria-label": "Seiten filtern"
              }, null, 512), [
                [vModelText, query.value]
              ]),
              createVNode(unref(DButton), {
                intent: "primary",
                size: "sm",
                onClick: createPage
              }, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode("Neue Seite", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          createElementVNode("div", _hoisted_8$4, [
            createElementVNode("div", _hoisted_9$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(visiblePages.value, (page) => {
                return openBlock(), createElementBlock("article", {
                  key: page.id,
                  class: "page",
                  tabindex: "0",
                  role: "button",
                  "aria-label": `Seite ${page.name} öffnen`,
                  onClick: ($event) => openPage(page.id),
                  onKeydown: [
                    withKeys(($event) => openPage(page.id), ["enter"]),
                    withKeys(withModifiers(($event) => openPage(page.id), ["prevent"]), ["space"])
                  ]
                }, [
                  createVNode(BoardFloorplan, {
                    items: page.items,
                    "type-by-id": page.typeById
                  }, null, 8, ["items", "type-by-id"]),
                  createElementVNode("div", _hoisted_11$3, [
                    createElementVNode("h2", _hoisted_12$3, toDisplayString(page.name), 1),
                    createElementVNode("p", _hoisted_13$2, [
                      createTextVNode(toDisplayString(page.widgetCount) + " " + toDisplayString(page.widgetCount === 1 ? "Widget" : "Widgets") + " ", 1),
                      page.sourceCount ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(" · " + toDisplayString(page.sourceCount) + " " + toDisplayString(page.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1)
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    unref(usageOf)(page.id) ? (openBlock(), createElementBlock("p", _hoisted_14$2, toDisplayString(unref(usageOf)(page.id)?.count) + "× geöffnet · zuletzt " + toDisplayString(unref(lastOpenedLabel)(page.id)), 1)) : createCommentVNode("", true),
                    page.kinds.length ? (openBlock(), createElementBlock("ul", _hoisted_15$2, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(page.kinds.slice(0, 3), (kind) => {
                        return openBlock(), createElementBlock("li", {
                          key: kind,
                          class: "page__kind"
                        }, toDisplayString(kind), 1);
                      }), 128)),
                      page.kinds.length > 3 ? (openBlock(), createElementBlock("li", _hoisted_16$2, " +" + toDisplayString(page.kinds.length - 3), 1)) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ]),
                  createElementVNode("button", {
                    class: "page__edit",
                    type: "button",
                    "aria-label": `Seite ${page.name} bearbeiten`,
                    onClick: withModifiers(($event) => editPage(page.id), ["stop"])
                  }, " Bearbeiten ", 8, _hoisted_17$2)
                ], 40, _hoisted_10$4);
              }), 128)),
              createElementVNode("button", {
                class: "page page--new",
                type: "button",
                onClick: createPage
              }, [..._cache[3] || (_cache[3] = [
                createElementVNode("span", {
                  class: "page__plus",
                  "aria-hidden": "true"
                }, "+", -1),
                createElementVNode("span", { class: "page__name" }, "Neue Seite", -1),
                createElementVNode("span", { class: "page__meta" }, "Leer starten", -1)
              ])]),
              pages.value.length && visiblePages.value.length === 0 ? (openBlock(), createElementBlock("p", _hoisted_18$2, " Keine Seite passt zu „" + toDisplayString(query.value) + "“. ", 1)) : createCommentVNode("", true)
            ])
          ])
        ])
      ]);
    };
  }
});
const BoardPages = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-21364f0b"]]);
const _hoisted_1$5 = { class: "add_widget_window" };
const _hoisted_2$5 = { class: "add_widget_window__scroll" };
const _hoisted_3$4 = { class: "widgets_grid-icon" };
const _hoisted_4$4 = ["src"];
const _hoisted_5$4 = { class: "widgets_grid-name" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AddWidgetWindow",
  setup(__props) {
    const selectedDatasource = ref("");
    const selectedType = ref("");
    const dataSources = useEList(inject(identifier), (w) => w.datasources);
    const onDragStart = (event) => {
      const dragElement = document.createElement("div");
      document.body.appendChild(dragElement);
      event.dataTransfer?.setDragImage(dragElement, 0, 0);
      setTimeout(() => {
        document.body.removeChild(dragElement);
      }, 0);
    };
    const registeredWidgets = inject(identifier$8);
    console.log(registeredWidgets.getAllWidgets());
    const availableWidgets = Object.entries(registeredWidgets.getAllWidgets()).map(([name, widget]) => ({ type: name, name: widget.name, icon: widget.icon }));
    const computedWidgets = computed(() => {
      return availableWidgets;
    });
    computed(() => {
      return [
        "None",
        ...dataSources.value.map((ds) => ds.type).filter((el, id, arr) => id === arr.indexOf(el))
      ];
    });
    const filteredIds = computed(() => {
      return dataSources.value.filter((ds) => ds.type === selectedType.value).map((ds) => ({ uid: ds.uid }));
    });
    watch(selectedType, (newType) => {
      if (!newType || newType === "None") {
        selectedDatasource.value = "";
      } else {
        const availableIds = filteredIds.value.map((ds) => ds.uid);
        if (!availableIds.includes(selectedDatasource.value)) {
          selectedDatasource.value = "";
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createElementVNode("div", _hoisted_2$5, [
          createVNode(unref(Draggable), {
            class: "widgets_grid",
            list: computedWidgets.value,
            group: { name: "widgets", pull: "clone", put: false },
            itemKey: "type"
          }, {
            item: withCtx(({ element }) => [
              createElementVNode("div", {
                class: "widgets_grid-item",
                draggable: "true",
                onDragstart: _cache[0] || (_cache[0] = (event) => onDragStart(event))
              }, [
                createElementVNode("span", _hoisted_3$4, [
                  createElementVNode("img", {
                    src: element.icon,
                    alt: ""
                  }, null, 8, _hoisted_4$4)
                ]),
                createElementVNode("span", _hoisted_5$4, toDisplayString(element.name), 1)
              ], 32)
            ]),
            _: 1
          }, 8, ["list"])
        ])
      ]);
    };
  }
});
const AddWidgetWindow = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3ac9fb06"]]);
const _hoisted_1$4 = {
  class: "overlay",
  role: "dialog",
  "aria-modal": "true",
  "aria-label": "Widget-Einstellungen"
};
const _hoisted_2$4 = { class: "stage" };
const _hoisted_3$3 = { class: "stage__head" };
const _hoisted_4$3 = { class: "stage__name" };
const _hoisted_5$3 = { class: "stage__uid" };
const _hoisted_6$3 = {
  class: "seg",
  role: "group",
  "aria-label": "Vorschaugröße"
};
const _hoisted_7$3 = { class: "stage__bar" };
const _hoisted_8$3 = { class: "stage__body" };
const _hoisted_9$3 = {
  class: "tabs",
  role: "tablist",
  "aria-label": "Einstellungen"
};
const _hoisted_10$3 = ["aria-selected"];
const _hoisted_11$2 = { class: "tab__n" };
const _hoisted_12$2 = ["aria-selected"];
const _hoisted_13$1 = ["aria-selected", "onClick"];
const _hoisted_14$1 = ["aria-selected"];
const _hoisted_15$1 = ["aria-selected"];
const _hoisted_16$1 = { class: "tab__n" };
const _hoisted_17$1 = ["aria-selected"];
const _hoisted_18$1 = { class: "tab__n" };
const _hoisted_19$1 = {
  key: 0,
  class: "fields"
};
const _hoisted_20$1 = {
  key: 0,
  class: "bound"
};
const _hoisted_21$1 = { class: "bound__name" };
const _hoisted_22$1 = { class: "bound__var" };
const _hoisted_23$1 = {
  key: 1,
  class: "note"
};
const _hoisted_24$1 = { class: "foot" };
const SECTIONS = ":scope > [data-section], :scope > .va-collapse";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "WidgetSettingsOverlay",
  props: /* @__PURE__ */ mergeModels({
    boardSize: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["close"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const widget = useModel(__props, "modelValue");
    const props = __props;
    const dataSources = useEList(inject(identifier), (w) => w.datasources);
    const registeredWidgets = inject(identifier$8);
    const availableWidgetsSettings = registeredWidgets.getAllWidgets();
    inject("i18n");
    const tab = ref("look");
    const modelledLook = computed(() => {
      const type = widget.value?.type;
      return type ? availableWidgetsSettings[type]?.settingsForm : void 0;
    });
    const hasHandWritten = computed(
      () => !!(widget.value?.type && availableWidgetsSettings[widget.value.type]?.settingsComponent)
    );
    const showRestTab = computed(() => !!modelledLook.value && hasHandWritten.value);
    const hasOwnSettings = computed(() => !!modelledLook.value || hasHandWritten.value);
    watch(hasOwnSettings, (has) => {
      if (!has && tab.value === "look") tab.value = "data";
    }, { immediate: true });
    const lookHost = ref();
    const sections = ref([]);
    const activeSection = ref(0);
    function sectionsIn(host) {
      if (!host) return [];
      return [...host.querySelectorAll(SECTIONS)];
    }
    function sectionElements() {
      return sectionsIn(lookHost.value);
    }
    function labelOf(section) {
      const declared = section.dataset.section;
      if (declared) return declared;
      const header = section.querySelector(".va-collapse__header-wrapper");
      if (!header) return "";
      const words = [...header.querySelectorAll("*")].filter((el) => !el.classList.contains("va-icon") && el.children.length === 0).map((el) => (el.textContent ?? "").trim()).filter((text) => text && !/^(expand_more|expand_less|add_circle)$/.test(text));
      return words[0] ?? "";
    }
    function isOpen(collapse) {
      return collapse.className.includes("--expanded");
    }
    function showSection(index) {
      activeSection.value = index;
      sectionElements().forEach((section, i) => {
        const wanted = i === index;
        if (section.classList.contains("va-collapse")) {
          const header = section.querySelector(".va-collapse__header-wrapper");
          if (header) header.style.display = "none";
          if (wanted !== isOpen(section)) header?.click();
        }
        section.style.display = wanted ? "" : "none";
      });
    }
    async function scanSections() {
      await nextTick();
      const found = sectionElements();
      sections.value = found.map((el, index) => ({ label: labelOf(el) || `Abschnitt ${index + 1}`, index }));
      if (found.length) showSection(Math.min(activeSection.value, found.length - 1));
    }
    function pickSection(index) {
      tab.value = "look";
      showSection(index);
    }
    const restHost = ref();
    async function trimRestSections() {
      const wanted = modelledLook.value?.unmodelledSections;
      const host = restHost.value;
      if (!wanted || !host) return;
      await nextTick();
      for (const section of sectionsIn(host)) {
        section.style.display = wanted.includes(labelOf(section)) ? "" : "none";
      }
    }
    watch(tab, (value) => {
      if (value === "rest") trimRestSections();
    });
    let snapshot = {
      wrapperConfig: {},
      config: {}
    };
    function bagOf(which) {
      return widget.value?.[which];
    }
    function asArray(value) {
      if (!value) return void 0;
      if (typeof value.toArray === "function") return value.toArray();
      return Array.isArray(value) ? [...value] : void 0;
    }
    function takeSnapshot() {
      snapshot = { wrapperConfig: {}, config: {} };
      for (const which of ["wrapperConfig", "config"]) {
        const bag = bagOf(which);
        if (!bag) continue;
        for (const [key, field] of Object.entries(bag)) {
          const list = asArray(field);
          const hasValue = Boolean(field) && typeof field === "object" && "value" in field;
          snapshot[which][key] = {
            field,
            hasValue,
            value: hasValue ? field.value : void 0,
            list
          };
        }
      }
    }
    function restore() {
      for (const which of ["wrapperConfig", "config"]) {
        const bag = bagOf(which);
        if (!bag) continue;
        for (const [key, state] of Object.entries(snapshot[which])) {
          try {
            if (state.list) {
              const current2 = bag[key];
              if (current2 && typeof current2.clear === "function") {
                current2.clear();
                for (const entry of state.list) current2.add(entry);
              } else if (Array.isArray(current2)) {
                current2.splice(0, current2.length, ...state.list);
              }
              continue;
            }
            const current = bag[key];
            const currentHasValue = Boolean(current) && typeof current === "object" && "value" in current;
            if (state.hasValue && currentHasValue) current.value = state.value;
            else bag[key] = state.field;
          } catch {
          }
        }
      }
    }
    function discard() {
      restore();
      emit("close");
    }
    function accept() {
      emit("close");
    }
    const fill = ref(false);
    const previewStyle = computed(() => {
      if (fill.value || !props.boardSize) return { width: "100%", height: "100%" };
      return {
        width: `${props.boardSize.width}px`,
        height: `${props.boardSize.height}px`,
        maxWidth: "100%",
        maxHeight: "100%"
      };
    });
    const sizeLabel = computed(
      () => props.boardSize ? `${Math.round(props.boardSize.width)} × ${Math.round(props.boardSize.height)} px, wie im Board` : "Größe des Boards nicht bekannt"
    );
    const sideWidth = ref(readWidth());
    let dragging = false;
    function readWidth() {
      const stored = Number(localStorage.getItem("daanse.board.widgetSettingsWidth"));
      return Number.isFinite(stored) && stored >= 320 ? stored : 400;
    }
    function startDrag(event) {
      dragging = true;
      event.target.setPointerCapture?.(event.pointerId);
    }
    function onDrag(event) {
      if (!dragging) return;
      const fromRight = window.innerWidth - event.clientX;
      sideWidth.value = Math.min(Math.max(fromRight, 320), Math.max(window.innerWidth - 360, 360));
    }
    function endDrag() {
      if (!dragging) return;
      dragging = false;
      try {
        localStorage.setItem("daanse.board.widgetSettingsWidth", String(Math.round(sideWidth.value)));
      } catch {
      }
    }
    function nudge(by) {
      sideWidth.value = Math.min(Math.max(sideWidth.value + by, 320), window.innerWidth - 360);
      endDrag();
    }
    const boundFields = computed(() => {
      const found = [];
      const bags = [
        ["Rahmen", widget.value?.wrapperConfig],
        ["Darstellung", widget.value?.config]
      ];
      for (const [group, bag] of bags) {
        for (const [name, field] of Object.entries(bag ?? {})) {
          const variable = field?.variable;
          if (variable) {
            found.push({ group, name, variable: String(variable?.name ?? variable) });
          }
        }
      }
      return found;
    });
    const frameCount = computed(() => Object.keys(widget.value?.wrapperConfig ?? {}).length);
    const dataCount = computed(() => widget.value?.config?.datasourceId ? 1 : 0);
    function onKey(event) {
      if (event.key === "Escape") discard();
    }
    watch(tab, (value) => {
      if (value === "look") scanSections();
    });
    onMounted(() => {
      takeSnapshot();
      scanSections();
      window.addEventListener("keydown", onKey);
      window.addEventListener("pointermove", onDrag);
      window.addEventListener("pointerup", endDrag);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointermove", onDrag);
      window.removeEventListener("pointerup", endDrag);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createElementVNode("div", {
          class: "scrim",
          onClick: _cache[14] || (_cache[14] = withModifiers(($event) => discard(), ["self"]))
        }, [
          createElementVNode("section", _hoisted_1$4, [
            createElementVNode("div", _hoisted_2$4, [
              createElementVNode("header", _hoisted_3$3, [
                createElementVNode("span", _hoisted_4$3, toDisplayString(widget.value?.type ?? "Widget"), 1),
                createElementVNode("code", _hoisted_5$3, toDisplayString(widget.value?.uid), 1),
                _cache[15] || (_cache[15] = createElementVNode("span", { class: "stage__spacer" }, null, -1)),
                createElementVNode("div", _hoisted_6$3, [
                  createElementVNode("button", {
                    type: "button",
                    class: normalizeClass({ on: !fill.value }),
                    onClick: _cache[0] || (_cache[0] = ($event) => fill.value = false)
                  }, "Boardgröße", 2),
                  createElementVNode("button", {
                    type: "button",
                    class: normalizeClass({ on: fill.value }),
                    onClick: _cache[1] || (_cache[1] = ($event) => fill.value = true)
                  }, "Füllen", 2)
                ])
              ]),
              createElementVNode("div", _hoisted_7$3, toDisplayString(fill.value ? "Auf die Fläche gestreckt" : sizeLabel.value), 1),
              createElementVNode("div", _hoisted_8$3, [
                createElementVNode("div", {
                  class: "preview",
                  style: normalizeStyle(previewStyle.value)
                }, [
                  renderSlot(_ctx.$slots, "preview", {}, void 0, true)
                ], 4)
              ])
            ]),
            createElementVNode("div", {
              class: "handle",
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "Breite der Einstellungen",
              tabindex: "0",
              onPointerdown: withModifiers(startDrag, ["prevent"]),
              onKeydown: [
                _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => nudge(16), ["prevent"]), ["left"])),
                _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => nudge(-16), ["prevent"]), ["right"]))
              ]
            }, null, 32),
            createElementVNode("div", {
              class: "side",
              style: normalizeStyle({ width: sideWidth.value + "px" })
            }, [
              createElementVNode("nav", _hoisted_9$3, [
                createElementVNode("button", {
                  type: "button",
                  role: "tab",
                  "aria-selected": tab.value === "data",
                  class: normalizeClass(["tab", { on: tab.value === "data" }]),
                  onClick: _cache[4] || (_cache[4] = ($event) => tab.value = "data")
                }, [
                  _cache[16] || (_cache[16] = createTextVNode(" Daten ", -1)),
                  createElementVNode("span", _hoisted_11$2, toDisplayString(dataCount.value), 1)
                ], 10, _hoisted_10$3),
                !sections.value.length && hasOwnSettings.value ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  role: "tab",
                  "aria-selected": tab.value === "look",
                  class: normalizeClass(["tab", { on: tab.value === "look" }]),
                  onClick: _cache[5] || (_cache[5] = ($event) => tab.value = "look")
                }, " Darstellung ", 10, _hoisted_12$2)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
                  return openBlock(), createElementBlock("button", {
                    key: section.index,
                    type: "button",
                    role: "tab",
                    "aria-selected": tab.value === "look" && activeSection.value === section.index,
                    class: normalizeClass(["tab", { on: tab.value === "look" && activeSection.value === section.index }]),
                    onClick: ($event) => pickSection(section.index)
                  }, toDisplayString(section.label), 11, _hoisted_13$1);
                }), 128)),
                showRestTab.value ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  role: "tab",
                  "aria-selected": tab.value === "rest",
                  class: normalizeClass(["tab", { on: tab.value === "rest" }]),
                  onClick: _cache[6] || (_cache[6] = ($event) => tab.value = "rest")
                }, " Weiteres ", 10, _hoisted_14$1)) : createCommentVNode("", true),
                createElementVNode("button", {
                  type: "button",
                  role: "tab",
                  "aria-selected": tab.value === "frame",
                  class: normalizeClass(["tab", { on: tab.value === "frame" }]),
                  onClick: _cache[7] || (_cache[7] = ($event) => tab.value = "frame")
                }, [
                  _cache[17] || (_cache[17] = createTextVNode(" Rahmen ", -1)),
                  createElementVNode("span", _hoisted_16$1, toDisplayString(frameCount.value), 1)
                ], 10, _hoisted_15$1),
                createElementVNode("button", {
                  type: "button",
                  role: "tab",
                  "aria-selected": tab.value === "variables",
                  class: normalizeClass(["tab", { on: tab.value === "variables" }]),
                  onClick: _cache[8] || (_cache[8] = ($event) => tab.value = "variables")
                }, [
                  _cache[18] || (_cache[18] = createTextVNode(" Variablen ", -1)),
                  createElementVNode("span", _hoisted_18$1, toDisplayString(boundFields.value.length), 1)
                ], 10, _hoisted_17$1)
              ]),
              widget.value ? (openBlock(), createElementBlock("div", _hoisted_19$1, [
                tab.value === "data" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createVNode(unref(DSelect), {
                    modelValue: widget.value.config.datasourceId,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => widget.value.config.datasourceId = $event),
                    label: "Datenquelle",
                    class: "pick",
                    options: unref(dataSources),
                    clearable: ""
                  }, null, 8, ["modelValue", "options"]),
                  _cache[19] || (_cache[19] = createElementVNode("p", { class: "note" }, " Woher dieses Widget seine Werte nimmt. Ohne Datenquelle zeigt es nur, was fest eingestellt ist. ", -1))
                ], 64)) : createCommentVNode("", true),
                withDirectives(createElementVNode("div", {
                  ref_key: "lookHost",
                  ref: lookHost
                }, [
                  modelledLook.value ? (openBlock(), createBlock(unref(SettingsForm), {
                    key: 0,
                    modelValue: widget.value.config,
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => widget.value.config = $event),
                    create: modelledLook.value.create,
                    "ui-model-xmi": modelledLook.value.xmi,
                    "domain-package": modelledLook.value.ePackage(),
                    "ui-model-uri": modelledLook.value.uri,
                    "entry-forms": modelledLook.value.entryForms
                  }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : (openBlock(), createBlock(resolveDynamicComponent(unref(availableWidgetsSettings)[widget.value.type ?? ""]?.settingsComponent), {
                    modelValue: widget.value.config,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => widget.value.config = $event),
                    key: widget.value.uid,
                    dataSources: unref(dataSources)
                  }, null, 8, ["modelValue", "dataSources"]))
                ], 512), [
                  [vShow, tab.value === "look"]
                ]),
                withDirectives(createElementVNode("div", {
                  ref_key: "restHost",
                  ref: restHost
                }, [
                  _cache[20] || (_cache[20] = createElementVNode("p", { class: "rest__note" }, " Einstellungen, die dieses Widget selbst mitbringt und die sich nicht als Feld beschreiben lassen. ", -1)),
                  showRestTab.value ? (openBlock(), createBlock(resolveDynamicComponent(unref(availableWidgetsSettings)[widget.value.type ?? ""]?.settingsComponent), {
                    modelValue: widget.value.config,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => widget.value.config = $event),
                    key: widget.value.uid + "-rest",
                    dataSources: unref(dataSources)
                  }, null, 8, ["modelValue", "dataSources"])) : createCommentVNode("", true)
                ], 512), [
                  [vShow, tab.value === "rest"]
                ]),
                withDirectives(createElementVNode("div", null, [
                  createVNode(unref(SettingsForm), {
                    modelValue: widget.value.wrapperConfig,
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => widget.value.wrapperConfig = $event),
                    create: () => new (unref(WrapperSettingsImpl))(),
                    "ui-model-xmi": unref(wrapperSettingsFormXmi),
                    "domain-package": unref(WrapperSettingsPackage).eINSTANCE,
                    "ui-model-uri": "/wrapper-settings.ui.xmi"
                  }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package"])
                ], 512), [
                  [vShow, tab.value === "frame"]
                ]),
                tab.value === "variables" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  boundFields.value.length ? (openBlock(), createElementBlock("table", _hoisted_20$1, [
                    _cache[21] || (_cache[21] = createElementVNode("thead", null, [
                      createElementVNode("tr", null, [
                        createElementVNode("th", null, "Feld"),
                        createElementVNode("th", null, "Bereich"),
                        createElementVNode("th", null, "Variable")
                      ])
                    ], -1)),
                    createElementVNode("tbody", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(boundFields.value, (field) => {
                        return openBlock(), createElementBlock("tr", {
                          key: field.group + field.name
                        }, [
                          createElementVNode("td", _hoisted_21$1, toDisplayString(field.name), 1),
                          createElementVNode("td", null, toDisplayString(field.group), 1),
                          createElementVNode("td", _hoisted_22$1, toDisplayString(field.variable), 1)
                        ]);
                      }), 128))
                    ])
                  ])) : (openBlock(), createElementBlock("p", _hoisted_23$1, [..._cache[22] || (_cache[22] = [
                    createTextVNode(" Kein Feld dieses Widgets hängt an einer Variablen. Über das ", -1),
                    createElementVNode("span", { class: "var-mark" }, "{x}", -1),
                    createTextVNode(" neben einem Feld lässt sich eines binden. ", -1)
                  ])]))
                ], 64)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createElementVNode("footer", _hoisted_24$1, [
                _cache[25] || (_cache[25] = createElementVNode("span", { class: "foot__hint" }, "Änderungen greifen erst mit „Fertig“", -1)),
                _cache[26] || (_cache[26] = createElementVNode("span", { class: "stage__spacer" }, null, -1)),
                createVNode(unref(DButton), {
                  size: "sm",
                  onClick: discard
                }, {
                  default: withCtx(() => [..._cache[23] || (_cache[23] = [
                    createTextVNode("Verwerfen", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DButton), {
                  intent: "primary",
                  size: "sm",
                  onClick: accept
                }, {
                  default: withCtx(() => [..._cache[24] || (_cache[24] = [
                    createTextVNode("Fertig", -1)
                  ])]),
                  _: 1
                })
              ])
            ], 4)
          ])
        ])
      ]);
    };
  }
});
const WidgetSettingsOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-67bd2420"]]);
const _hoisted_1$3 = {
  class: "page-settings",
  "aria-label": "Seite einrichten"
};
const _hoisted_2$3 = { class: "head" };
const _hoisted_3$2 = { class: "body" };
const _hoisted_4$2 = {
  key: 0,
  class: "missing"
};
const _hoisted_5$2 = { class: "group" };
const _hoisted_6$2 = { class: "group" };
const _hoisted_7$2 = { class: "group" };
const _hoisted_8$2 = { class: "group" };
const _hoisted_9$2 = { class: "ident" };
const _hoisted_10$2 = { class: "foot" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PageSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["close"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const pageid = useModel(__props, "modelValue");
    const emit = __emit;
    const pageRepo = inject(identifier$1);
    const layoutRepo = inject(identifier$2);
    const pageSettings = ref(null);
    const availableLayouts = computed(() => layoutRepo?.getAllLayouts() ?? []);
    const defaultLayout = computed(
      () => availableLayouts.value.find(
        (layout) => layout.id === "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      ) ?? availableLayouts.value[0]
    );
    const layoutId = computed({
      get: () => pageSettings.value?.layoutId ?? "",
      set: (id) => {
        if (pageSettings.value) pageSettings.value.layoutId = id;
      }
    });
    const chosenLayout = computed(
      () => pageSettings.value?.layoutId ? layoutRepo?.getLayout(pageSettings.value.layoutId) : void 0
    );
    const backgroundSizes = [
      { uid: "auto", name: "Auto" },
      { uid: "cover", name: "Füllend" },
      { uid: "contain", name: "Einpassend" }
    ];
    const backgroundRepeats = [
      { uid: "no-repeat", name: "Nicht wiederholen" },
      { uid: "repeat", name: "Wiederholen" },
      { uid: "repeat-x", name: "Waagerecht wiederholen" },
      { uid: "repeat-y", name: "Senkrecht wiederholen" }
    ];
    const backgroundPositions = [
      { uid: "center", name: "Mitte" },
      { uid: "top", name: "Oben" },
      { uid: "bottom", name: "Unten" },
      { uid: "left", name: "Links" },
      { uid: "right", name: "Rechts" },
      { uid: "top left", name: "Oben links" },
      { uid: "top right", name: "Oben rechts" },
      { uid: "bottom left", name: "Unten links" },
      { uid: "bottom right", name: "Unten rechts" }
    ];
    const hasBackgroundImage = computed(() => Boolean(pageSettings.value?.backgroundImage?.trim()));
    function load() {
      if (!pageid.value || !pageRepo) {
        pageSettings.value = null;
        return;
      }
      let original;
      try {
        original = pageRepo.getPage(pageid.value);
      } catch {
        original = void 0;
      }
      pageSettings.value = original ? {
        id: original.id,
        name: original.name,
        description: original.description,
        icon: original.icon,
        visibleInNavigation: original.visibleInNavigation ?? true,
        layoutId: original.layoutId ?? defaultLayout.value?.id,
        layoutSettings: original.layoutSettings,
        backgroundColor: original.backgroundColor,
        backgroundImage: original.backgroundImage,
        backgroundSize: original.backgroundSize,
        backgroundPosition: original.backgroundPosition,
        backgroundRepeat: original.backgroundRepeat
      } : null;
    }
    onMounted(load);
    watch(pageid, load);
    watch(
      pageSettings,
      () => {
        if (!pageSettings.value) return;
        pageRepo?.updatePage(pageSettings.value);
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1$3, [
        createElementVNode("header", _hoisted_2$3, [
          _cache[14] || (_cache[14] = createElementVNode("h2", { class: "head__title" }, "Seite einrichten", -1)),
          createElementVNode("button", {
            type: "button",
            class: "head__close",
            "aria-label": "Schließen",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
          }, " × ")
        ]),
        createElementVNode("div", _hoisted_3$2, [
          !pageSettings.value ? (openBlock(), createElementBlock("p", _hoisted_4$2, " Diese Seite ist nicht mehr da. Wähle oben eine andere. ")) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createElementVNode("section", _hoisted_5$2, [
              _cache[15] || (_cache[15] = createElementVNode("h3", { class: "group__label" }, "Seite", -1)),
              createVNode(unref(DInput), {
                modelValue: pageSettings.value.name,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => pageSettings.value.name = $event),
                label: "Name"
              }, null, 8, ["modelValue"]),
              createVNode(unref(DInput), {
                modelValue: pageSettings.value.description,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => pageSettings.value.description = $event),
                label: "Beschreibung"
              }, null, 8, ["modelValue"]),
              createVNode(unref(DInput), {
                modelValue: pageSettings.value.icon,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => pageSettings.value.icon = $event),
                label: "Symbol",
                placeholder: "Name eines Material-Icons"
              }, null, 8, ["modelValue"])
            ]),
            createElementVNode("section", _hoisted_6$2, [
              _cache[16] || (_cache[16] = createElementVNode("h3", { class: "group__label" }, "Layout", -1)),
              createVNode(unref(DSelect), {
                modelValue: layoutId.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => layoutId.value = $event),
                label: "Layout",
                options: availableLayouts.value,
                "value-key": "id",
                "label-key": "name"
              }, null, 8, ["modelValue", "options"]),
              chosenLayout.value?.settingsForm ? (openBlock(), createBlock(unref(SettingsForm), {
                key: 0,
                modelValue: pageSettings.value.layoutSettings,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => pageSettings.value.layoutSettings = $event),
                create: chosenLayout.value.settingsForm.create,
                "ui-model-xmi": chosenLayout.value.settingsForm.xmi,
                "domain-package": chosenLayout.value.settingsForm.ePackage(),
                "ui-model-uri": chosenLayout.value.settingsForm.uri,
                "entry-forms": chosenLayout.value.settingsForm.entryForms
              }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : chosenLayout.value?.settings ? (openBlock(), createBlock(resolveDynamicComponent(chosenLayout.value.settings), {
                key: 1,
                modelValue: pageSettings.value.layoutSettings,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => pageSettings.value.layoutSettings = $event)
              }, null, 8, ["modelValue"])) : createCommentVNode("", true)
            ]),
            createElementVNode("section", _hoisted_7$2, [
              _cache[17] || (_cache[17] = createElementVNode("h3", { class: "group__label" }, "Hintergrund", -1)),
              createVNode(unref(DColorInput), {
                modelValue: pageSettings.value.backgroundColor,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => pageSettings.value.backgroundColor = $event),
                label: "Farbe",
                stacked: ""
              }, null, 8, ["modelValue"]),
              createVNode(unref(DInput), {
                modelValue: pageSettings.value.backgroundImage,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => pageSettings.value.backgroundImage = $event),
                label: "Bild",
                placeholder: "Adresse eines Bildes"
              }, null, 8, ["modelValue"]),
              hasBackgroundImage.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createVNode(unref(DSelect), {
                  modelValue: pageSettings.value.backgroundSize,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => pageSettings.value.backgroundSize = $event),
                  label: "Größe",
                  options: backgroundSizes
                }, null, 8, ["modelValue"]),
                createVNode(unref(DSelect), {
                  modelValue: pageSettings.value.backgroundRepeat,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => pageSettings.value.backgroundRepeat = $event),
                  label: "Wiederholung",
                  options: backgroundRepeats
                }, null, 8, ["modelValue"]),
                createVNode(unref(DSelect), {
                  modelValue: pageSettings.value.backgroundPosition,
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => pageSettings.value.backgroundPosition = $event),
                  label: "Position",
                  options: backgroundPositions
                }, null, 8, ["modelValue"])
              ], 64)) : createCommentVNode("", true)
            ]),
            createElementVNode("section", _hoisted_8$2, [
              _cache[18] || (_cache[18] = createElementVNode("h3", { class: "group__label" }, "Navigation", -1)),
              createVNode(unref(DSwitch), {
                modelValue: pageSettings.value.visibleInNavigation,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => pageSettings.value.visibleInNavigation = $event),
                label: "In der Navigation zeigen"
              }, null, 8, ["modelValue"])
            ]),
            createElementVNode("p", _hoisted_9$2, [
              _cache[19] || (_cache[19] = createTextVNode(" Kennung ", -1)),
              createElementVNode("code", null, toDisplayString(pageSettings.value.id), 1)
            ])
          ], 64))
        ]),
        createElementVNode("footer", _hoisted_10$2, [
          createVNode(unref(DButton), {
            intent: "primary",
            onClick: _cache[13] || (_cache[13] = ($event) => emit("close"))
          }, {
            default: withCtx(() => [..._cache[20] || (_cache[20] = [
              createTextVNode("Fertig", -1)
            ])]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const PageSettings = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9ea0fdd8"]]);
const _hoisted_1$2 = {
  ref: "board",
  class: "editor"
};
const _hoisted_2$2 = { class: "report-container dottet" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EditReport",
  setup(__props) {
    const widgetSettingsOpenedId = ref("");
    const route = useRoute();
    const pageID = route.params.pageid ?? "";
    const contents = useBoard(pageID || "");
    const widgets = contents.widgets;
    const innerWidgets = ref([]);
    const endpointfinder = inject("endpointfinder", null);
    const endPointFinder = () => {
      endpointfinder();
    };
    const endpointfinder_present = computed(() => !!endpointfinder);
    const { settingsFor: pageSettingsFor, closeSettings: closePageSettings } = usePages();
    const openWidgetSettings = (id) => {
      widgetSettingsOpenedId.value = id;
    };
    const currentlyEditingWidget = computed(() => {
      const widgetFromStore = widgets.value.find((widget) => widget.uid === widgetSettingsOpenedId.value);
      if (widgetFromStore) return widgetFromStore;
      return innerWidgets.value.find((widget) => widget.uid === widgetSettingsOpenedId.value);
    });
    const editedWidgetSize = computed(() => {
      const item = contents.layout.value.find((entry) => entry.id === widgetSettingsOpenedId.value);
      if (!item?.width || !item?.height) return void 0;
      return { width: item.width, height: item.height };
    });
    const { visible: paletteVisible, hide: hidePalette } = useWidgetPalette();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        unref(paletteVisible) ? (openBlock(), createBlock(unref(DFloatingWindow), {
          key: 0,
          title: "Widgets",
          "remember-as": "daanse.board.palette",
          initial: { x: 0, y: 0, w: 240, h: 460, dock: "left" },
          "min-width": 180,
          "max-width": 420,
          "min-height": 200,
          dockable: "",
          onClose: unref(hidePalette)
        }, {
          actions: withCtx(() => [
            endpointfinder_present.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: "palette__act",
              title: "Endpunkte suchen",
              onPointerdown: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"])),
              onClick: _cache[1] || (_cache[1] = ($event) => endPointFinder())
            }, [
              createVNode(unref(DIcon), {
                name: "travel_explore",
                size: "sm"
              })
            ], 32)) : createCommentVNode("", true)
          ]),
          default: withCtx(() => [
            createVNode(AddWidgetWindow)
          ]),
          _: 1
        }, 8, ["onClose"])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2$2, [
          createVNode(LayoutRenderer, {
            pageId: unref(pageID),
            onOpenWidgetSettings: openWidgetSettings
          }, null, 8, ["pageId"]),
          createVNode(Transition, { duration: 150 }, {
            default: withCtx(() => [
              unref(pageSettingsFor) ? (openBlock(), createBlock(PageSettings, {
                key: 0,
                modelValue: unref(pageSettingsFor),
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(pageSettingsFor) ? pageSettingsFor.value = $event : null),
                onClose: unref(closePageSettings)
              }, null, 8, ["modelValue", "onClose"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        widgetSettingsOpenedId.value && currentlyEditingWidget.value ? (openBlock(), createBlock(WidgetSettingsOverlay, {
          key: 1,
          modelValue: currentlyEditingWidget.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => currentlyEditingWidget.value = $event),
          "board-size": editedWidgetSize.value,
          onClose: _cache[4] || (_cache[4] = ($event) => widgetSettingsOpenedId.value = "")
        }, {
          preview: withCtx(() => [
            createVNode(unref(WidgetWrapper), {
              widget: currentlyEditingWidget.value,
              "edit-enabled": false
            }, null, 8, ["widget"])
          ]),
          _: 1
        }, 8, ["modelValue", "board-size"])) : createCommentVNode("", true)
      ], 512);
    };
  }
});
const EditReport = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bd444b0c"]]);
const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    // Static core routes (routes will be added dynamically via router.addRoute in main.ts)
    {
      path: "/",
      name: "home",
      component: ViewReport
    },
    {
      path: "/edit",
      name: "edit",
      component: EditReport
    },
    /*
     * The screen the mockups call "Verbindungen & Daten". The old path
     * carried a board id it never read - the page is about the workspace,
     * not about one board - so /datasources is the name, and the old one
     * still lands here for links that are already out there.
     */
    {
      /* The pages of the open board - an area of the workspace, not a view
         of the launcher: a page only means anything once a board is open. */
      path: "/pages",
      name: "pages",
      component: BoardPages
    },
    {
      path: "/datasources",
      name: "data",
      component: ConnectionsAndData
    },
    {
      path: "/:id/data",
      redirect: { name: "data" }
    },
    {
      path: "/page/:pageid/edit",
      name: "pageEdit",
      component: EditReport
    },
    {
      path: "/page/:pageid",
      name: "page",
      component: ViewReport
    }
  ]
});
const _hoisted_1$1 = { class: "variables" };
const _hoisted_2$1 = { class: "variables__head" };
const _hoisted_3$1 = { class: "reach__title" };
const _hoisted_4$1 = { class: "reach__lead" };
const _hoisted_5$1 = {
  key: 0,
  class: "rows"
};
const _hoisted_6$1 = { class: "row__name" };
const _hoisted_7$1 = { class: "row__type" };
const _hoisted_8$1 = { class: "row__value" };
const _hoisted_9$1 = { class: "row__tools" };
const _hoisted_10$1 = {
  key: 1,
  class: "reach__empty"
};
const _hoisted_11$1 = { class: "form" };
const _hoisted_12$1 = { class: "confirm__text" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Configuration",
  setup(__props) {
    const repository = inject(identifier$5);
    const workspace = inject(identifier);
    const eventBus = inject(Symbol.for(TINY_EMITTER));
    const variables = useEList(workspace, (w) => w.variables);
    const pages = useEList(workspace, (w) => w.board?.pages);
    const valueTick = ref(0);
    const onValueChange = () => valueTick.value += 1;
    onMounted(() => eventBus?.on(VariableEvents.VariableUpdated, onValueChange));
    onBeforeUnmount(() => eventBus?.off(VariableEvents.VariableUpdated, onValueChange));
    function valueOf(variable) {
      void valueTick.value;
      try {
        const live = repository.getVariableById(variable.uid);
        const value = live?.value;
        if (value === void 0 || value === null) return "";
        return typeof value === "object" ? JSON.stringify(value) : String(value);
      } catch {
        return "nur auf seiner Seite lesbar";
      }
    }
    const sections = computed(() => {
      const global2 = variables.value.filter((v) => (v.scope ?? "global") === "global");
      const byPage = pages.value.map((page) => ({
        title: page.name,
        lead: "Nur auf diesem Board",
        page,
        rows: variables.value.filter((v) => v.scope === "page" && v.page === page)
      })).filter((section) => section.rows.length > 0);
      const orphans = variables.value.filter((v) => v.scope === "page" && !v.page);
      return [
        { title: "Überall", lead: "Auf jedem Board lesbar", page: void 0, rows: global2 },
        ...byPage,
        ...orphans.length ? [{ title: "Ohne Board", lead: "Das Board dazu gibt es nicht mehr", page: void 0, rows: orphans }] : []
      ];
    });
    const types = ref([]);
    onMounted(() => types.value = repository.getRegisteredVariableTypes());
    const reachOptions = computed(() => [
      { text: "Überall", value: "" },
      ...pages.value.map((page) => ({ text: page.name, value: page.id }))
    ]);
    const accessOptions = [
      { text: "Von außen beschreibbar", value: "external-writable" },
      { text: "Nur auf seiner Seite", value: "page-only" },
      { text: "Nur lesbar", value: "readonly" }
    ];
    const dialogOpen = ref(false);
    const editingUid = ref(null);
    const draftType = ref("");
    const draftReach = ref("");
    const draftName = ref("");
    const draftAccess = ref("external-writable");
    const draft = ref({});
    const isEditing = computed(() => editingUid.value !== null);
    const typeForm = computed(
      () => draftType.value ? repository.getVariableIdentifiers(draftType.value)?.settingsForm : void 0
    );
    const typeEditor = computed(
      () => draftType.value ? repository.getVariableIdentifiers(draftType.value)?.Settings : null
    );
    function openNew() {
      editingUid.value = null;
      draftType.value = types.value[0] ?? "";
      draftReach.value = "";
      draftName.value = "Variable " + Math.random().toString(36).substring(7);
      draftAccess.value = "external-writable";
      draft.value = {};
      dialogOpen.value = true;
    }
    function openEdit(variable) {
      editingUid.value = variable.uid;
      draftType.value = variable.type ?? "";
      draftReach.value = variable.page?.id ?? "";
      draftName.value = variable.name;
      draftAccess.value = variable.accessMode ?? "external-writable";
      const live = repository.getVariableById(variable.uid);
      const { name: _name, ...settings } = {
        ...variable.definition ?? {},
        ...live?.serialize?.() ?? {}
      };
      draft.value = settings;
      dialogOpen.value = true;
    }
    function plainOf(settings) {
      if (!isModelled(settings)) return { ...settings ?? {} };
      const out = {};
      for (const feature of settings.eClass().getEAllStructuralFeatures()) {
        const value = settings.eGet(feature);
        if (value !== void 0) out[feature.getName()] = value;
      }
      return out;
    }
    function onTypeChosen() {
      draft.value = {};
    }
    function save() {
      repository.registerVariable(draftName.value, draftType.value, {
        ...plainOf(draft.value),
        uid: editingUid.value ?? void 0,
        accessMode: draftAccess.value,
        scope: draftReach.value ? "page" : "global",
        pageId: draftReach.value || void 0
      });
      dialogOpen.value = false;
      editingUid.value = null;
    }
    const pendingDelete = ref(null);
    function confirmDelete() {
      if (pendingDelete.value) repository.removeVariable(pendingDelete.value.uid);
      pendingDelete.value = null;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("header", _hoisted_2$1, [
          _cache[11] || (_cache[11] = createElementVNode("div", null, [
            createElementVNode("h1", { class: "variables__title" }, "Variablen"),
            createElementVNode("p", { class: "variables__lead" }, " Ein benannter Wert, den Widgets und Datenquellen lesen. Manche gelten überall, manche nur auf einem Board. ")
          ], -1)),
          createVNode(unref(DButton), {
            intent: "primary",
            onClick: openNew
          }, {
            default: withCtx(() => [
              createVNode(unref(DIcon), {
                name: "add",
                size: "sm"
              }),
              _cache[10] || (_cache[10] = createTextVNode("Variable anlegen ", -1))
            ]),
            _: 1
          })
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
          return openBlock(), createElementBlock("section", {
            key: section.title,
            class: "reach"
          }, [
            createElementVNode("h2", _hoisted_3$1, [
              createTextVNode(toDisplayString(section.title), 1),
              createElementVNode("span", _hoisted_4$1, toDisplayString(section.lead), 1)
            ]),
            section.rows.length ? (openBlock(), createElementBlock("ul", _hoisted_5$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(section.rows, (variable) => {
                return openBlock(), createElementBlock("li", {
                  key: variable.uid,
                  class: "row"
                }, [
                  createElementVNode("span", _hoisted_6$1, toDisplayString(variable.name), 1),
                  createElementVNode("span", _hoisted_7$1, toDisplayString(variable.type), 1),
                  createElementVNode("span", _hoisted_8$1, toDisplayString(valueOf(variable)), 1),
                  createElementVNode("span", _hoisted_9$1, [
                    createVNode(unref(DButton), {
                      intent: "quiet",
                      size: "sm",
                      title: "Variable bearbeiten",
                      onClick: ($event) => openEdit(variable)
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(DIcon), {
                          name: "edit",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(DButton), {
                      intent: "quiet",
                      size: "sm",
                      title: "Variable löschen",
                      onClick: ($event) => pendingDelete.value = variable
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(DIcon), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]);
              }), 128))
            ])) : (openBlock(), createElementBlock("p", _hoisted_10$1, "Noch keine."))
          ]);
        }), 128)),
        createVNode(unref(DModal), {
          modelValue: dialogOpen.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => dialogOpen.value = $event),
          title: isEditing.value ? "Variable bearbeiten" : "Variable anlegen",
          size: "md"
        }, {
          actions: withCtx(() => [
            createVNode(unref(DButton), {
              intent: "quiet",
              onClick: _cache[6] || (_cache[6] = ($event) => dialogOpen.value = false)
            }, {
              default: withCtx(() => [..._cache[12] || (_cache[12] = [
                createTextVNode("Abbrechen", -1)
              ])]),
              _: 1
            }),
            createVNode(unref(DButton), {
              intent: "primary",
              onClick: save
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(isEditing.value ? "Speichern" : "Anlegen"), 1)
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createElementVNode("div", _hoisted_11$1, [
              createVNode(unref(DSelect), {
                modelValue: draftType.value,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => draftType.value = $event),
                  onTypeChosen
                ],
                label: "Typ",
                options: types.value
              }, null, 8, ["modelValue", "options"]),
              createVNode(unref(DSelect), {
                modelValue: draftReach.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => draftReach.value = $event),
                label: "Gilt",
                options: reachOptions.value,
                "label-key": "text",
                "value-key": "value"
              }, null, 8, ["modelValue", "options"]),
              createVNode(unref(DSelect), {
                modelValue: draftAccess.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => draftAccess.value = $event),
                label: "Beschreibbar",
                options: accessOptions,
                "label-key": "text",
                "value-key": "value"
              }, null, 8, ["modelValue"]),
              createVNode(unref(DInput), {
                modelValue: draftName.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => draftName.value = $event),
                label: "Name"
              }, null, 8, ["modelValue"]),
              typeForm.value ? (openBlock(), createBlock(unref(SettingsForm), {
                key: draftType.value,
                modelValue: draft.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => draft.value = $event),
                create: typeForm.value.create,
                "ui-model-xmi": typeForm.value.xmi,
                "domain-package": typeForm.value.ePackage(),
                "ui-model-uri": typeForm.value.uri
              }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri"])) : typeEditor.value ? (openBlock(), createBlock(resolveDynamicComponent(typeEditor.value), {
                key: 1,
                modelValue: draft.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => draft.value = $event)
              }, null, 8, ["modelValue"])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        createVNode(unref(DModal), {
          "model-value": !!pendingDelete.value,
          size: "sm",
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => pendingDelete.value = null)
        }, {
          header: withCtx(() => [
            createVNode(unref(DIcon), {
              name: "warning",
              size: "lg",
              tone: "color-err"
            }),
            _cache[13] || (_cache[13] = createElementVNode("h2", { class: "confirm__title" }, "Variable löschen", -1))
          ]),
          actions: withCtx(() => [
            createVNode(unref(DButton), {
              intent: "quiet",
              onClick: _cache[8] || (_cache[8] = ($event) => pendingDelete.value = null)
            }, {
              default: withCtx(() => [..._cache[14] || (_cache[14] = [
                createTextVNode("Abbrechen", -1)
              ])]),
              _: 1
            }),
            createVNode(unref(DButton), {
              intent: "danger",
              onClick: confirmDelete
            }, {
              default: withCtx(() => [..._cache[15] || (_cache[15] = [
                createTextVNode("Löschen", -1)
              ])]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createElementVNode("p", _hoisted_12$1, toDisplayString(pendingDelete.value?.name) + " wird entfernt. Widgets, die darauf zeigen, finden sie danach nicht mehr. ", 1)
          ]),
          _: 1
        }, 8, ["model-value"])
      ]);
    };
  }
});
const Configuration = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dda92d6f"]]);
const _hoisted_1 = { class: "appearance" };
const _hoisted_2 = { class: "panel" };
const _hoisted_3 = { class: "panel__head" };
const _hoisted_4 = { class: "panel__tools" };
const _hoisted_5 = {
  key: 0,
  class: "changed"
};
const _hoisted_6 = {
  key: 0,
  class: "gallery"
};
const _hoisted_7 = { class: "demo" };
const _hoisted_8 = { class: "demo__row" };
const _hoisted_9 = { class: "demo__row" };
const _hoisted_10 = { class: "demo" };
const _hoisted_11 = { class: "demo__form" };
const _hoisted_12 = { class: "demo" };
const _hoisted_13 = { class: "demo__row" };
const _hoisted_14 = { class: "demo__row" };
const _hoisted_15 = {
  key: 1,
  class: "body"
};
const _hoisted_16 = {
  class: "themes",
  "aria-label": "Themen"
};
const _hoisted_17 = ["onClick"];
const _hoisted_18 = {
  class: "theme__strip",
  "aria-hidden": "true"
};
const _hoisted_19 = { class: "theme__name" };
const _hoisted_20 = { class: "theme__note" };
const _hoisted_21 = { class: "tokens" };
const _hoisted_22 = ["aria-expanded", "onClick"];
const _hoisted_23 = { class: "group__twist" };
const _hoisted_24 = { class: "group__label" };
const _hoisted_25 = { class: "group__count" };
const _hoisted_26 = {
  key: 0,
  class: "group__body"
};
const _hoisted_27 = {
  key: 0,
  class: "group__note"
};
const _hoisted_28 = {
  key: 1,
  class: "token__swatch token__swatch--none",
  "aria-hidden": "true"
};
const _hoisted_29 = { class: "token__text" };
const _hoisted_30 = { class: "token__name" };
const _hoisted_31 = { class: "token__role" };
const _hoisted_32 = ["value", "aria-label", "onInput"];
const _hoisted_33 = ["value", "aria-label", "onChange"];
const _hoisted_34 = ["disabled", "title", "onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Appearance",
  setup(__props) {
    const {
      themes,
      activeTheme,
      overrides,
      valueOf,
      isOverridden,
      selectTheme,
      setToken,
      clearToken,
      clearAllTokens,
      exportTheme
    } = useTheme();
    const openGroup = ref(TOKEN_GROUPS[0].id);
    const copied = ref(false);
    const view = ref("tokens");
    const demo = ref({
      text: "Bodenfeuchte Feld 3",
      number: 38.4,
      choice: "ogcsta",
      colour: "#4fa3d1",
      when: "2026-08-28",
      amount: 60,
      on: true,
      checked: true,
      note: ""
    });
    const demoOptions = [
      { uid: "ogcsta", name: "OGC SensorThings" },
      { uid: "xmla", name: "XMLA / MDX" },
      { uid: "rest", name: "REST" }
    ];
    const changedCount = computed(() => Object.keys(overrides.value).length);
    function stripOf(theme) {
      return [
        theme.tokens["color-bg"],
        theme.tokens["color-pane"],
        theme.tokens["color-accent"],
        theme.tokens["color-brand"],
        theme.tokens["color-ok"]
      ].filter(Boolean);
    }
    function isColor(spec) {
      return spec.kind === "color";
    }
    async function copyTheme() {
      try {
        await navigator.clipboard.writeText(JSON.stringify(exportTheme(), null, 2));
        copied.value = true;
        setTimeout(() => copied.value = false, 2e3);
      } catch {
        copied.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("header", _hoisted_3, [
            createElementVNode("button", {
              type: "button",
              class: normalizeClass(["head__tab", { on: view.value === "tokens" }]),
              onClick: _cache[0] || (_cache[0] = ($event) => view.value = "tokens")
            }, " Tokens ", 2),
            createElementVNode("button", {
              type: "button",
              class: normalizeClass(["head__tab", { on: view.value === "controls" }]),
              onClick: _cache[1] || (_cache[1] = ($event) => view.value = "controls")
            }, " Elemente ", 2),
            createElementVNode("span", _hoisted_4, [
              changedCount.value ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(changedCount.value) + " " + toDisplayString(changedCount.value === 1 ? "Wert geändert" : "Werte geändert"), 1)) : createCommentVNode("", true),
              changedCount.value ? (openBlock(), createElementBlock("button", {
                key: 1,
                class: "btn",
                type: "button",
                onClick: _cache[2] || (_cache[2] = //@ts-ignore
                (...args) => unref(clearAllTokens) && unref(clearAllTokens)(...args))
              }, " Alle zurücksetzen ")) : createCommentVNode("", true),
              createElementVNode("button", {
                class: "btn",
                type: "button",
                onClick: copyTheme
              }, toDisplayString(copied.value ? "Kopiert" : "Als JSON kopieren"), 1)
            ])
          ]),
          view.value === "controls" ? (openBlock(), createElementBlock("div", _hoisted_6, [
            _cache[31] || (_cache[31] = createElementVNode("p", { class: "gallery__lead" }, " Dieselben Elemente, aus denen die App gebaut ist. Was drüben an Tokens geändert wird, steht hier sofort. ", -1)),
            createElementVNode("section", _hoisted_7, [
              _cache[22] || (_cache[22] = createElementVNode("h3", { class: "demo__title" }, "Knöpfe", -1)),
              createElementVNode("div", _hoisted_8, [
                createVNode(unref(DButton), null, {
                  default: withCtx(() => [..._cache[13] || (_cache[13] = [
                    createTextVNode("Standard", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DButton), { intent: "primary" }, {
                  default: withCtx(() => [..._cache[14] || (_cache[14] = [
                    createTextVNode("Speichern", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DButton), { intent: "quiet" }, {
                  default: withCtx(() => [..._cache[15] || (_cache[15] = [
                    createTextVNode("Abbrechen", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DButton), { intent: "danger" }, {
                  default: withCtx(() => [..._cache[16] || (_cache[16] = [
                    createTextVNode("Löschen", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DButton), { disabled: "" }, {
                  default: withCtx(() => [..._cache[17] || (_cache[17] = [
                    createTextVNode("Gesperrt", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DButton), { busy: "" }, {
                  default: withCtx(() => [..._cache[18] || (_cache[18] = [
                    createTextVNode("Lädt", -1)
                  ])]),
                  _: 1
                })
              ]),
              createElementVNode("div", _hoisted_9, [
                createVNode(unref(DButton), { size: "sm" }, {
                  default: withCtx(() => [..._cache[19] || (_cache[19] = [
                    createTextVNode("Klein", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DButton), { size: "md" }, {
                  default: withCtx(() => [..._cache[20] || (_cache[20] = [
                    createTextVNode("Mittel", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DButton), { size: "lg" }, {
                  default: withCtx(() => [..._cache[21] || (_cache[21] = [
                    createTextVNode("Groß", -1)
                  ])]),
                  _: 1
                })
              ])
            ]),
            createElementVNode("section", _hoisted_10, [
              _cache[23] || (_cache[23] = createElementVNode("h3", { class: "demo__title" }, "Eingaben", -1)),
              createElementVNode("div", _hoisted_11, [
                createVNode(unref(DInput), {
                  modelValue: demo.value.text,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => demo.value.text = $event),
                  label: "Titel"
                }, null, 8, ["modelValue"]),
                createVNode(unref(DInput), {
                  modelValue: demo.value.number,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => demo.value.number = $event),
                  label: "Messwert",
                  type: "number",
                  suffix: "%"
                }, null, 8, ["modelValue"]),
                createVNode(unref(DSelect), {
                  modelValue: demo.value.choice,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => demo.value.choice = $event),
                  label: "Datenquelle",
                  options: demoOptions
                }, null, 8, ["modelValue"]),
                createVNode(unref(DColorInput), {
                  modelValue: demo.value.colour,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => demo.value.colour = $event),
                  label: "Farbe"
                }, null, 8, ["modelValue"]),
                createVNode(unref(DDateInput), {
                  modelValue: demo.value.when,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => demo.value.when = $event),
                  label: "Stichtag"
                }, null, 8, ["modelValue"]),
                createVNode(unref(DSlider), {
                  modelValue: demo.value.amount,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => demo.value.amount = $event),
                  label: "Deckung",
                  suffix: "%"
                }, null, 8, ["modelValue"]),
                createVNode(unref(DInput), {
                  modelValue: demo.value.note,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => demo.value.note = $event),
                  label: "Notiz",
                  rows: 2,
                  stacked: ""
                }, null, 8, ["modelValue"]),
                createVNode(unref(DInput), {
                  modelValue: demo.value.text,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => demo.value.text = $event),
                  label: "Mit Fehler",
                  error: "Der Name ist schon vergeben."
                }, null, 8, ["modelValue"])
              ])
            ]),
            createElementVNode("section", _hoisted_12, [
              _cache[30] || (_cache[30] = createElementVNode("h3", { class: "demo__title" }, "Schalter und Marken", -1)),
              createElementVNode("div", _hoisted_13, [
                createVNode(unref(DCheckbox), {
                  modelValue: demo.value.checked,
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => demo.value.checked = $event),
                  label: "Im Board zeigen"
                }, null, 8, ["modelValue"]),
                createVNode(unref(DSwitch), {
                  modelValue: demo.value.on,
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => demo.value.on = $event),
                  label: "Automatisch aktualisieren"
                }, null, 8, ["modelValue"])
              ]),
              createElementVNode("div", _hoisted_14, [
                createVNode(unref(DChip), null, {
                  default: withCtx(() => [..._cache[24] || (_cache[24] = [
                    createTextVNode("neutral", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DChip), { tone: "accent" }, {
                  default: withCtx(() => [..._cache[25] || (_cache[25] = [
                    createTextVNode("geladen", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DChip), { tone: "ok" }, {
                  default: withCtx(() => [..._cache[26] || (_cache[26] = [
                    createTextVNode("im Rahmen", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DChip), { tone: "warn" }, {
                  default: withCtx(() => [..._cache[27] || (_cache[27] = [
                    createTextVNode("prüfen", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DChip), { tone: "err" }, {
                  default: withCtx(() => [..._cache[28] || (_cache[28] = [
                    createTextVNode("getrennt", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(DChip), {
                  tone: "accent",
                  numeric: ""
                }, {
                  default: withCtx(() => [..._cache[29] || (_cache[29] = [
                    createTextVNode("14", -1)
                  ])]),
                  _: 1
                })
              ]),
              createVNode(unref(DDivider), { label: "Trenner" })
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_15, [
            createElementVNode("aside", _hoisted_16, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(themes), (theme) => {
                return openBlock(), createElementBlock("button", {
                  key: theme.id,
                  type: "button",
                  class: normalizeClass(["theme", { on: theme.id === unref(activeTheme).id }]),
                  onClick: ($event) => unref(selectTheme)(theme.id)
                }, [
                  createElementVNode("span", _hoisted_18, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(stripOf(theme), (colour, i) => {
                      return openBlock(), createElementBlock("i", {
                        key: i,
                        style: normalizeStyle({ background: colour })
                      }, null, 4);
                    }), 128))
                  ]),
                  createElementVNode("span", _hoisted_19, toDisplayString(theme.name), 1),
                  createElementVNode("span", _hoisted_20, toDisplayString(theme.note), 1)
                ], 10, _hoisted_17);
              }), 128))
            ]),
            createElementVNode("section", _hoisted_21, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TOKEN_GROUPS), (group) => {
                return openBlock(), createElementBlock("div", {
                  key: group.id,
                  class: "group"
                }, [
                  createElementVNode("button", {
                    type: "button",
                    class: "group__head",
                    "aria-expanded": openGroup.value === group.id,
                    onClick: ($event) => openGroup.value = openGroup.value === group.id ? "" : group.id
                  }, [
                    createElementVNode("span", _hoisted_23, toDisplayString(openGroup.value === group.id ? "▾" : "▸"), 1),
                    createElementVNode("span", _hoisted_24, toDisplayString(group.label), 1),
                    createElementVNode("span", _hoisted_25, toDisplayString(group.tokens.length), 1)
                  ], 8, _hoisted_22),
                  openGroup.value === group.id ? (openBlock(), createElementBlock("div", _hoisted_26, [
                    group.note ? (openBlock(), createElementBlock("p", _hoisted_27, toDisplayString(group.note), 1)) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(group.tokens, (spec) => {
                      return openBlock(), createElementBlock("div", {
                        key: spec.name,
                        class: "token"
                      }, [
                        isColor(spec) ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          class: "token__swatch",
                          style: normalizeStyle({ background: unref(valueOf)(spec.name) }),
                          "aria-hidden": "true"
                        }, null, 4)) : (openBlock(), createElementBlock("span", _hoisted_28)),
                        createElementVNode("span", _hoisted_29, [
                          createElementVNode("code", _hoisted_30, "--" + toDisplayString(spec.name), 1),
                          createElementVNode("span", _hoisted_31, toDisplayString(spec.role), 1)
                        ]),
                        isColor(spec) ? (openBlock(), createElementBlock("input", {
                          key: 2,
                          class: "token__picker",
                          type: "color",
                          value: unref(valueOf)(spec.name),
                          "aria-label": `Farbe für ${spec.name}`,
                          onInput: ($event) => unref(setToken)(spec.name, $event.target.value)
                        }, null, 40, _hoisted_32)) : createCommentVNode("", true),
                        createElementVNode("input", {
                          class: "token__value",
                          type: "text",
                          value: unref(valueOf)(spec.name),
                          "aria-label": `Wert für ${spec.name}`,
                          onChange: ($event) => unref(setToken)(spec.name, $event.target.value)
                        }, null, 40, _hoisted_33),
                        createElementVNode("button", {
                          class: "token__reset",
                          type: "button",
                          disabled: !unref(isOverridden)(spec.name),
                          title: unref(isOverridden)(spec.name) ? "Auf den Wert des Themas zurücksetzen" : "Unverändert",
                          onClick: ($event) => unref(clearToken)(spec.name)
                        }, " ↺ ", 8, _hoisted_34)
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ]);
              }), 128))
            ])
          ]))
        ])
      ]);
    };
  }
});
const Appearance = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a84ca0bf"]]);
const log$1 = loggerFactory.createLogger("daanse:system:actions");
class SystemActionsImpl {
  constructor(router2, eventBus) {
    this.router = router2;
    this.eventBus = eventBus;
  }
  eventBus;
  async changePage(pageId) {
    if (!pageId) {
      log$1("⚠️ changePage called without pageId");
      return;
    }
    log$1("📄 Changing page to: %s", pageId);
    const pageLoadedPromise = new Promise((resolve) => {
      const handler = (event) => {
        if (event.pageId === pageId) {
          log$1("📄 Received pageLoaded event for page: %s", pageId);
          this.eventBus.off("system:pageLoaded", handler);
          resolve();
        }
      };
      this.eventBus.on("system:pageLoaded", handler);
      setTimeout(() => {
        this.eventBus.off("system:pageLoaded", handler);
        log$1("⚠️ pageLoaded timeout for page: %s, continuing anyway", pageId);
        resolve();
      }, 5e3);
    });
    await this.router.push(`/page/${pageId}`);
    await pageLoadedPromise;
    log$1("📄 Page change complete, widgets should be registered");
  }
  async setGlobalVariable(variableName, value) {
    log$1("⚠️ setGlobalVariable should be handled by VariableRepository");
  }
}
async function registerSystemActions(router2, actionsRegistry, eventBus) {
  await actionsRegistry.registerActionsFromEcoreString(
    "SystemActions",
    SystemActionsEcoreContent,
    "system",
    "SystemActions.ecore"
  );
  const systemActions = new SystemActionsImpl(router2, eventBus);
  actionsRegistry.registerInstance("SystemActions", systemActions, "SystemActions");
  log$1("✅ System actions registered");
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp(target, key, result);
  return result;
};
const log = loggerFactory.createLogger("daanse:system:actions");
class TestActions {
  testAction(...args) {
    console.log("TestActions", args);
  }
}
__decorateClass([
  WidgetAction({ eventType: "test.console" })
], TestActions.prototype, "testAction");
async function registerTestActions(actionsRegistry) {
  actionsRegistry.registerWidgetType("test", TestActions, "system");
  const instance = new TestActions();
  actionsRegistry.registerInstance("test", instance, "system");
  log("✅ Test actions registered");
}
let app;
async function activate({ services, log: log2 }) {
  initTheme();
  initBoardBackdrop();
  initGridSnap();
  app = createApp(App);
  app.use(router);
  app.provide("codeEditorType", "monaco");
  const registry = services;
  const provide = (id) => {
    const service = services.get(id);
    app?.provide(id, service);
    app?.provide(Symbol.for(id), service);
  };
  for (const id of services.getServiceIds()) provide(id);
  registry.addListener?.({ onServiceEvent: (event) => provide(event.serviceId) });
  services.register(APP, app);
  const connectionRepository = services.getRequired(CONNECTION_REPOSITORY);
  const datasourceRepository = services.getRequired(DATASOURCE_REPOSITORY);
  if (connectionRepository.getConnections().length === 0) {
    const connection = connectionRepository.createConnection("");
    connection.uid = "test";
    connection.name = "Test Connection 01";
    connection.type = "rest";
    connection.config = { url: "https://jsonplaceholder.typicode.com/" };
    connectionRepository.saveConnection(connection);
    const source = datasourceRepository.createDatasource("");
    source.uid = "test_ds";
    source.name = "Test DataSource 01";
    source.type = "rest";
    source.connection = connection;
    source.config = { resourceUrl: "posts" };
    datasourceRepository.saveDatasource(source);
  }
  services.getRequired(VARIABLE_WRAPPER_FACTORY).registerWrapperType({
    type: VARIABLECOMPLEXSTRINGWRAPPER,
    create: (value) => new VariableComplexStringWrapper(value)
  });
  const routeRegistry = services.getRequired(ROUTE_REGISTRY_ID);
  const configRoute = new RouteDefinition();
  configRoute.path = "/configuration";
  configRoute.name = "config";
  configRoute.component = Configuration;
  routeRegistry.registerRoute(configRoute);
  const appearanceRoute = new RouteDefinition();
  appearanceRoute.path = "/appearance";
  appearanceRoute.name = "appearance";
  appearanceRoute.component = Appearance;
  routeRegistry.registerRoute(appearanceRoute);
  const navRegistry = services.getRequired(NAVIGATION_REGISTRY_ID);
  const configNav = new NavigationItem();
  configNav.id = "config";
  configNav.label = "Environment variables";
  configNav.icon = "settings";
  configNav.route = "/configuration";
  configNav.routeName = "config";
  configNav.order = 10;
  configNav.visible = true;
  navRegistry.registerNavigationItem(configNav);
  const dynamic = routeRegistry;
  for (const route of dynamic.getAllRoutesArray?.() ?? []) {
    router.addRoute({
      path: route.path,
      name: route.name,
      component: route.component,
      ...route.meta ? { meta: route.meta } : {}
    });
  }
  const opened = window.location.pathname + window.location.search + window.location.hash;
  if (router.resolve(opened).matched.length && router.currentRoute.value.fullPath !== opened) {
    router.replace(opened);
  }
  try {
    await registerSystemActions(
      router,
      services.getRequired(EVENT_ACTIONS_REGISTRY_ID),
      services.getRequired(TINY_EMITTER)
    );
    log2.info("system actions registered");
  } catch (error) {
    log2.error("system actions failed", error);
  }
  try {
    await registerTestActions(services.getRequired(EVENT_ACTIONS_REGISTRY_ID));
    log2.info("test actions registered");
  } catch (error) {
    log2.error("test actions failed", error);
  }
  app.mount("#app");
  log2.info("shell mounted");
}
function deactivate({ services }) {
  const routeRegistry = services.getRequired(ROUTE_REGISTRY_ID);
  routeRegistry.unregisterRoute("config");
  routeRegistry.unregisterRoute("save");
  const navRegistry = services.getRequired(NAVIGATION_REGISTRY_ID);
  navRegistry.unregisterNavigationItem("config");
  navRegistry.unregisterNavigationItem("save");
  app?.unmount();
  app = void 0;
}
export {
  activate,
  deactivate
};
