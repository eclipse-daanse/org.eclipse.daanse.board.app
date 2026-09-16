(function(){var i="app.shell",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="@import\"https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap\";.topbar[data-v-46a52363]{height:var(--spacing-topbar, 42px);flex:none;display:flex;align-items:center;gap:12px;padding:0 12px;background:var(--color-pane);border-bottom:1px solid var(--color-divider);color:var(--color-fg);font-size:var(--text-sm, 12px)}.brand[data-v-46a52363]{display:flex;align-items:center;gap:8px;flex:none;white-space:nowrap;font-weight:600;font-size:var(--text-base, 13px)}.brand-mark[data-v-46a52363]{width:20px;height:20px;border-radius:var(--radius-sm, 5px);background:var(--color-brandFill);color:var(--color-onBrand);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;flex:none}.crumb[data-v-46a52363]{display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden;white-space:nowrap;color:var(--color-dim)}.crumb-part[data-v-46a52363]{overflow:hidden;text-overflow:ellipsis}.crumb-part.current[data-v-46a52363]{color:var(--color-fg);font-weight:500}.crumb-link[data-v-46a52363]{padding:0;font:inherit;color:inherit;background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.crumb-link[data-v-46a52363]:hover{color:var(--color-fg);text-decoration:underline}.crumb-link[data-v-46a52363]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.crumb-sep[data-v-46a52363]{color:var(--color-outline)}.spacer[data-v-46a52363]{flex:1 1 auto;min-width:8px}.pages[data-v-46a52363]{position:relative;margin-left:10px;flex:none}.pages__current[data-v-46a52363]{display:flex;align-items:center;gap:5px;max-width:200px;height:24px;padding:0 7px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background:none;border:1px solid transparent;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__current[data-v-46a52363]:hover{background-color:var(--color-raised);border-color:var(--color-divider)}.pages__current[data-v-46a52363]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.pages__name[data-v-46a52363]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__caret[data-v-46a52363]{font-size:9px;color:var(--color-dim)}.pages__menu[data-v-46a52363]{position:absolute;top:calc(100% + 3px);left:0;z-index:400;min-width:180px;max-height:60vh;overflow-y:auto;padding:3px;margin:0;list-style:none;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 3px);box-shadow:var(--shadow-e2, 0 2px 8px rgb(0 0 0 / 14%))}.pages__item[data-v-46a52363]{display:block;width:100%;padding:5px 8px;font-size:var(--text-sm, 12px);font-family:inherit;text-align:left;color:var(--color-fg);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__item[data-v-46a52363]:hover{background-color:var(--color-raised)}.pages__line[data-v-46a52363]{display:flex;align-items:center;gap:2px}.pages__line .pages__item[data-v-46a52363]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__remove[data-v-46a52363]{flex:none;width:20px;height:20px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer;opacity:0;transition:opacity 90ms ease,color 90ms ease}.pages__line:hover .pages__remove[data-v-46a52363],.pages__remove[data-v-46a52363]:focus-visible{opacity:1}.pages__remove[data-v-46a52363]:hover{color:var(--color-err)}.pages__sep[data-v-46a52363]{height:1px;margin:3px 0;background-color:var(--color-divider)}.pages__add[data-v-46a52363],.pages__item.on[data-v-46a52363]{color:var(--color-accent)}.pages__empty[data-v-46a52363]{padding:5px 8px;font-size:var(--text-sm, 12px);color:var(--color-dim)}.action[data-v-46a52363]{height:24px;padding:0 10px;margin-right:8px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs, 3px);cursor:pointer}.action[data-v-46a52363]:hover{border-color:var(--color-outline)}.action[data-v-46a52363]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.modes[data-v-46a52363]{display:inline-flex;border:1px solid var(--color-outline);border-radius:var(--radius-sm, 5px);overflow:hidden;flex:none}.mode[data-v-46a52363]{font:inherit;padding:4px 11px;border:0;background:var(--color-raised);color:var(--color-dim);cursor:pointer;white-space:nowrap}.mode[data-v-46a52363]:hover{color:var(--color-fg)}.mode.on[data-v-46a52363]{background:var(--color-accent);color:var(--color-onAccent);font-weight:600}.mode[data-v-46a52363]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.icon-action[data-v-46a52363]:disabled{opacity:.4;cursor:default}.icon-action[data-v-46a52363]{display:grid;place-items:center;width:24px;height:24px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.icon-action[data-v-46a52363]:hover{color:var(--color-fg);background-color:var(--color-raised)}.icon-action.on[data-v-46a52363]{color:var(--color-accent);background-color:var(--color-raised)}.icon-action[data-v-46a52363]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.avatar[data-v-46a52363]{width:24px;height:24px;border-radius:50%;background:var(--color-raised);border:1px solid var(--color-outline);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;color:var(--color-dim);flex:none}.shell[data-v-ce3039cb]{display:flex;flex-direction:column;height:100%;width:100%;min-height:0;background:var(--color-bg)}.shell-body[data-v-ce3039cb]{flex:1 1 auto;display:grid;grid-template-columns:var(--spacing-rail, 52px) minmax(0,1fr);min-height:0;overflow:hidden}.shell-body--norail[data-v-ce3039cb]{grid-template-columns:minmax(0,1fr)}.rail[data-v-ce3039cb]{background:var(--color-pane);border-right:1px solid var(--color-divider);display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:4px;overflow:hidden}.rail-spacer[data-v-ce3039cb]{flex:1 1 auto}.ri[data-v-ce3039cb]{position:relative;width:36px;height:36px;flex:none;border:0;border-radius:var(--radius-md, 8px);background:transparent;color:var(--color-dim);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .14s cubic-bezier(.2,.6,.2,1),color .14s cubic-bezier(.2,.6,.2,1)}.ri[data-v-ce3039cb]:hover{color:var(--color-fg);background:color-mix(in srgb,var(--color-accent) 10%,transparent)}.ri.on[data-v-ce3039cb]{background:color-mix(in srgb,var(--color-accent) 14%,transparent);color:var(--color-accent)}.ri.on[data-v-ce3039cb]:before{content:\"\";position:absolute;left:-8px;top:8px;bottom:8px;width:3px;border-radius:var(--radius-xs, 3px);background:var(--color-accent)}.ri[data-v-ce3039cb]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.ri[data-v-ce3039cb] .icon{font-size:20px}.sr-only[data-v-ce3039cb]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.content[data-v-ce3039cb]{min-width:0;min-height:0;overflow:hidden;display:flex;flex-direction:column}@media(prefers-reduced-motion:reduce){.ri[data-v-ce3039cb]{transition-duration:.01ms}}.global-loading-bar[data-v-ce3039cb]{position:fixed;top:0;left:0;right:0;height:3px;z-index:8000;overflow:hidden}.global-loading-bar-progress[data-v-ce3039cb]{height:100%;width:30%;background:var(--color-brandFill);animation:loading-slide-ce3039cb 1.2s ease-in-out infinite}@keyframes loading-slide-ce3039cb{0%{transform:translate(-100%)}to{transform:translate(400%)}}/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:\"Barlow\",system-ui,-apple-system,\"Segoe UI\",sans-serif;--font-mono:\"JetBrains Mono\",ui-monospace,SFMono-Regular,Menlo,monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--text-xs:11px;--text-xs--line-height:calc(1/.75);--text-sm:12px;--text-sm--line-height:calc(1.25/.875);--text-base:13px;--text-base--line-height: 1.5 ;--text-lg:15px;--text-lg--line-height:calc(1.75/1.125);--text-xl:24px;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--radius-xs:2px;--radius-sm:3px;--radius-md:4px;--radius-lg:6px;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-bg:#121820;--color-pane:#1a222c;--color-raised:#232d39;--color-canvas:#0e141b;--color-divider:#2a3541;--color-outline:#3c4959;--color-fg:#dfe8ef;--color-dim:#8b9bab;--color-accent:#4fa3d1;--color-onAccent:#08131c;--color-brand:#d8a13c;--color-brandFill:#d8a13c;--color-onBrand:#14100a;--color-ok:#5fb98a;--color-warn:#d8a13c;--color-err:#e2766a;--color-kw:#4fa3d1;--color-measure:#d8a13c;--color-member:#5fb98a;--color-fn:#c294d8;--color-primary:#4fa3d1;--color-secondary:#8b9bab;--color-success:#5fb98a;--color-info:#4fa3d1;--color-danger:#e2766a;--color-warning:#d8a13c;--color-backgroundPrimary:#121820;--color-backgroundSecondary:#1a222c;--color-backgroundElement:#232d39;--color-backgroundBorder:#2a3541;--color-textPrimary:#dfe8ef;--color-textInverted:#08131c;--color-daanse_blue:#4fa3d1;--color-daanse_grey:#dfe8ef;--shadow-e1:0 1px 2px #00000073;--shadow-e2:0 2px 8px #00000073;--shadow-e3:0 8px 24px #00000080;--spacing-topbar:42px;--spacing-rail:52px;--spacing-panelHeader:30px;--spacing-splitter:4px;--spacing-statusbar:24px}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{.ice_gray{padding:var(--spacing-6);background:var(--color-pane);border-right:1px solid var(--color-divider);box-shadow:var(--shadow-e1)}.ice{padding:var(--spacing-6);background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md);box-shadow:var(--shadow-e2)}.z-mx{z-index:30000}}@layer utilities{.\\@container{container-type:inline-size}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.top-\\[-25px\\]{top:-25px}.right-0{right:calc(var(--spacing)*0)}.isolate{isolation:isolate}.col-span-1{grid-column:span 1/span 1}.row-span-4{grid-row:span 4/span 4}.float-left{float:left}.float-right{float:right}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-2{margin:calc(var(--spacing)*2)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-15{margin-left:calc(var(--spacing)*15)}.box-border{box-sizing:border-box}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.table-cell{display:table-cell}.h-40{height:calc(var(--spacing)*40)}.h-84{height:calc(var(--spacing)*84)}.h-120{height:calc(var(--spacing)*120)}.h-full{height:100%}.max-h-screen{max-height:100vh}.w-full{width:100%}.max-w-xs{max-width:var(--container-xs)}.flex-shrink,.shrink{flex-shrink:1}.flex-grow,.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-white{background-color:var(--color-white)}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.object-fill{object-fit:fill}.object-scale-down{object-fit:scale-down}.p-4{padding:calc(var(--spacing)*4)}.pl-6{padding-left:calc(var(--spacing)*6)}.text-justify{text-align:justify}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-wrap{text-wrap:wrap}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.line-through{text-decoration-line:line-through}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e1{--tw-shadow:0 1px 2px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e2{--tw-shadow:0 2px 8px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e3{--tw-shadow:0 8px 24px var(--tw-shadow-color,#00000080);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}}:root[data-theme=light]{--color-bg:#eef1f4;--color-pane:#f7f9fb;--color-raised:#fff;--color-canvas:#e2e7ec;--color-divider:#d3dae1;--color-outline:#b3bec9;--color-fg:#16202a;--color-dim:#55646f;--color-accent:#1f6690;--color-onAccent:#fff;--color-brand:#8a6206;--color-brandFill:#c08a10;--color-onBrand:#14100a;--color-ok:#1f6f4a;--color-warn:#8a5a0c;--color-err:#b02a1c;--color-kw:#1f6690;--color-measure:#8a5a0c;--color-member:#1f6f4a;--color-fn:#7b3fa0;--color-primary:#1f6690;--color-secondary:#55646f;--color-success:#1f6f4a;--color-info:#1f6690;--color-danger:#b02a1c;--color-warning:#8a5a0c;--color-backgroundPrimary:#eef1f4;--color-backgroundSecondary:#f7f9fb;--color-backgroundElement:#fff;--color-backgroundBorder:#d3dae1;--color-textPrimary:#16202a;--color-textInverted:#fff;--color-daanse_blue:#1f6690;--color-daanse_grey:#16202a;--shadow-e1:0 1px 2px #16202a24;--shadow-e2:0 2px 8px #16202a24;--shadow-e3:0 8px 24px #16202a24}:root{--mdxwb-bg:var(--color-bg);--mdxwb-pane:var(--color-pane);--mdxwb-raised:var(--color-raised);--mdxwb-border:var(--color-divider);--mdxwb-outline:var(--color-outline);--mdxwb-fg:var(--color-fg);--mdxwb-dim:var(--color-dim);--mdxwb-accent:var(--color-accent);--mdxwb-on-accent:var(--color-onAccent);--mdxwb-ok:var(--color-ok);--mdxwb-warn:var(--color-warn);--mdxwb-err:var(--color-err);--mdxwb-kw:var(--color-kw);--mdxwb-measure:var(--color-measure);--mdxwb-member:var(--color-member);--mdxwb-fn:var(--color-fn)}body{font-family:var(--font-sans);font-optical-sizing:auto;font-weight:400;font-size:var(--text-base);font-variation-settings:\"wdth\" 100;background:var(--color-bg);color:var(--color-fg);font-style:normal;--moveable-color:var(--color-outline)!important}table{font-variant-numeric:tabular-nums}.rCS1w3zcxh{--moveable-color:var(--color-outline)!important}.rCS1w3zcxh .moveable-line{transform-origin:0;width:1px;height:1px;border-bottom:2px dashed var(--color-outline)!important;background:0 0!important}@keyframes spin{to{transform:rotate(360deg)}}*{scrollbar-width:thin;scrollbar-color:var(--color-outline)transparent}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background-color:var(--color-outline);background-clip:padding-box;border:3px solid #0000;border-radius:6px}::-webkit-scrollbar-thumb:hover{background-color:var(--color-dim)}::-webkit-scrollbar-corner{background:0 0}.resize-observer[data-v-b329ee4c]{z-index:-1;pointer-events:none;opacity:0;background-color:#0000;border:none;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.resize-observer[data-v-b329ee4c] object{pointer-events:none;z-index:-1;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.v-popper__popper{z-index:10000;outline:none;top:0;left:0}.v-popper__popper.v-popper__popper--hidden{visibility:hidden;opacity:0;pointer-events:none;transition:opacity .15s,visibility .15s}.v-popper__popper.v-popper__popper--shown{visibility:visible;opacity:1;transition:opacity .15s}.v-popper__popper.v-popper__popper--skip-transition,.v-popper__popper.v-popper__popper--skip-transition>.v-popper__wrapper{transition:none!important}.v-popper__backdrop{width:100%;height:100%;display:none;position:absolute;top:0;left:0}.v-popper__inner{box-sizing:border-box;position:relative;overflow-y:auto}.v-popper__inner>div{z-index:1;max-width:inherit;max-height:inherit;position:relative}.v-popper__arrow-container{width:10px;height:10px;position:absolute}.v-popper__popper--arrow-overflow .v-popper__arrow-container,.v-popper__popper--no-positioning .v-popper__arrow-container{display:none}.v-popper__arrow-inner,.v-popper__arrow-outer{border-style:solid;width:0;height:0;position:absolute;top:0;left:0}.v-popper__arrow-inner{visibility:hidden;border-width:7px}.v-popper__arrow-outer{border-width:6px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{left:-2px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{left:-1px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer{border-bottom-width:0;border-bottom-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:0}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{border-top-width:0;border-top-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{top:-4px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{top:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{top:-1px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{border-left-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-left-color:#0000!important}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{left:-4px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{left:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer{border-right-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner{left:-2px}.v-popper--theme-tooltip .v-popper__inner{color:#fff;background:#000c;border-radius:6px;padding:7px 12px 6px}.v-popper--theme-tooltip .v-popper__arrow-outer{border-color:#000c}.v-popper--theme-dropdown .v-popper__inner{color:#000;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 6px 30px #0000001a}.v-popper--theme-dropdown .v-popper__arrow-inner{visibility:visible;border-color:#fff}.v-popper--theme-dropdown .v-popper__arrow-outer{border-color:#ddd}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}.layout-renderer[data-v-965fd8c7],.layout-renderer .edit-component-wrapper[data-v-965fd8c7],.layout-renderer .view-component-wrapper[data-v-965fd8c7]{width:100%;height:100%}.layout-renderer .spinner[data-v-965fd8c7]{width:22px;height:22px;border:2px solid var(--color-divider);border-top-color:var(--color-accent);border-radius:50%;animation:layout-spin .7s linear infinite}.layout-renderer .no-layout-message[data-v-965fd8c7],.layout-renderer .loading-state[data-v-965fd8c7]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;gap:1rem}.layout-renderer .no-layout-message__text[data-v-965fd8c7]{display:flex;align-items:flex-start;gap:9px;margin:0;font-family:var(--font-sans);font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}@keyframes layout-spin{to{transform:rotate(360deg)}}.floorplan[data-v-0eecd73b]{position:relative;aspect-ratio:16 / 9;background-color:var(--color-bg);border-bottom:1px solid var(--color-divider);overflow:hidden}.floorplan__block[data-v-0eecd73b]{position:absolute;margin:2px 0 0 2px;border-radius:2px;border:1px solid color-mix(in srgb,currentColor 70%,transparent);background-color:color-mix(in srgb,currentColor 14%,transparent)}.floorplan__block--data[data-v-0eecd73b]{color:var(--color-accent)}.floorplan__block--visual[data-v-0eecd73b]{color:var(--color-brand)}.floorplan__block--text[data-v-0eecd73b]{color:var(--color-dim)}.floorplan__empty[data-v-0eecd73b]{position:absolute;inset:0;display:grid;place-items:center;font-size:var(--text-xs);color:var(--color-dim)}.storage[data-v-3b03814f]{display:grid;grid-template-columns:280px minmax(0,1fr);flex:1 1 auto;min-height:0;background-color:var(--color-pane);overflow:hidden}.tree[data-v-3b03814f]{display:flex;flex-direction:column;min-height:0;border-right:1px solid var(--color-divider)}.tree__search[data-v-3b03814f]{margin:8px;height:26px;padding:0 8px;font-size:var(--text-sm);font-family:inherit;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.tree__body[data-v-3b03814f]{flex:1 1 auto;min-height:0;padding:0 4px 8px;overflow-y:auto}.row[data-v-3b03814f]{display:flex;align-items:baseline;flex-wrap:nowrap;gap:6px;width:100%;padding:4px 6px;font-family:inherit;font-size:var(--text-base);color:var(--color-fg);text-align:left;background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.row[data-v-3b03814f]:hover{background-color:var(--color-raised)}.row.on[data-v-3b03814f]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);box-shadow:inset 2px 0 0 var(--color-accent)}.row--place[data-v-3b03814f]{font-weight:600}.row--entry[data-v-3b03814f]{padding-left:22px;font-family:var(--font-mono);font-size:var(--text-sm)}.row--hint[data-v-3b03814f]{padding-left:22px;margin:0;color:var(--color-dim);font-size:var(--text-sm);cursor:default}.row--add[data-v-3b03814f]{color:var(--color-dim);font-size:var(--text-sm)}.row__twist[data-v-3b03814f]{width:12px;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__name[data-v-3b03814f]{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__meta[data-v-3b03814f]{margin-left:auto;padding-left:8px;flex:none;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);color:var(--color-dim)}.row__dot[data-v-3b03814f]{width:5px;height:5px;flex:none;border-radius:50%;background-color:transparent}.row__dot.open[data-v-3b03814f]{background-color:var(--color-accent)}.detail[data-v-3b03814f]{display:flex;flex-direction:column;min-width:0;min-height:0;background-color:var(--color-bg);overflow-y:auto}.detail__head[data-v-3b03814f]{display:flex;align-items:center;gap:8px;padding:7px 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.detail__name[data-v-3b03814f]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.detail__facts[data-v-3b03814f]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.detail__spacer[data-v-3b03814f]{flex:1 1 auto}.detail__badge[data-v-3b03814f]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent);border-radius:var(--radius-xs)}.detail__hint[data-v-3b03814f]{display:grid;place-items:center;flex:1 1 auto;margin:0;padding:24px;font-size:var(--text-sm);color:var(--color-dim);text-align:center}.detail__failure[data-v-3b03814f]{margin:12px 12px 0;padding:8px 10px;font-size:var(--text-sm);color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 10%,transparent);border-radius:var(--radius-xs)}.boards[data-v-3b03814f]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;padding:12px}.board[data-v-3b03814f]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.board__text[data-v-3b03814f]{padding:8px 10px}.board__name[data-v-3b03814f]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__facts[data-v-3b03814f]{margin:2px 0 0;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.board__kinds[data-v-3b03814f]{margin:4px 0 0;font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.create[data-v-3b03814f]{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:16px}.create__label[data-v-3b03814f]{font-size:var(--text-sm);color:var(--color-dim)}.create__input[data-v-3b03814f]{height:26px;min-width:220px;padding:0 8px;font-size:var(--text-base);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.create__hint[data-v-3b03814f]{flex:1 0 100%;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.row[data-v-3b03814f]:focus-visible,.tree__search[data-v-3b03814f]:focus-visible,.create__input[data-v-3b03814f]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.single[data-v-86d874a3]{display:flex;flex-direction:column;gap:12px;padding:16px;max-width:640px}.single__heading[data-v-86d874a3]{margin:0;font-size:.78rem;font-weight:600;letter-spacing:.04em;color:var(--color-dim);text-transform:uppercase}.single__card[data-v-86d874a3]{cursor:pointer}.single__card[data-v-86d874a3]:hover,.single__card[data-v-86d874a3]:focus-visible{border-color:var(--color-accent)}.single__card[data-v-86d874a3]{display:flex;align-items:center;gap:14px;padding:16px;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md)}.single__icon[data-v-86d874a3]{display:grid;flex:none;place-items:center;width:48px;height:48px;color:var(--color-accent);background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm)}.single__text[data-v-86d874a3]{flex:1;min-width:0}.single__name[data-v-86d874a3]{margin:0;font-size:1.05rem;color:var(--color-fg)}.single__desc[data-v-86d874a3]{margin:3px 0 0;font-size:.85rem;color:var(--color-dim)}.single__meta[data-v-86d874a3]{margin:4px 0 0;font-size:.82rem;color:var(--color-dim)}.single__actions[data-v-86d874a3]{display:flex;flex:none;gap:6px}.single__note[data-v-86d874a3]{margin:0;font-size:.82rem;line-height:1.5;color:var(--color-dim)}.boards[data-v-86d874a3]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.boards__panel[data-v-86d874a3]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.boards__body[data-v-86d874a3]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background-color:var(--color-bg);overflow:auto}.boards__bar[data-v-86d874a3]{display:flex;align-items:center;gap:12px;height:var(--spacing-panelHeader);flex:none;padding:0 8px;border-bottom:1px solid var(--color-divider)}.boards__views[data-v-86d874a3]{display:flex;align-items:center;gap:2px;height:100%}.boards__view[data-v-86d874a3]{position:relative;display:flex;align-items:center;gap:6px;height:100%;padding:0 12px;font-size:var(--text-sm);font-family:inherit;font-weight:500;color:var(--color-dim);background:none;border:0;cursor:pointer}.boards__view[data-v-86d874a3]:hover{color:var(--color-fg)}.boards__view.on[data-v-86d874a3]{color:var(--color-fg);font-weight:600}.boards__view.on[data-v-86d874a3]:after{content:\"\";position:absolute;left:8px;right:8px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.boards__view[data-v-86d874a3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__title[data-v-86d874a3]{display:flex;align-items:center;gap:8px;margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__count[data-v-86d874a3]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);font-weight:500;color:var(--color-dim);padding:1px 6px;border:1px solid var(--color-divider);border-radius:999px}.boards__tools[data-v-86d874a3]{display:flex;align-items:center;gap:8px;margin-left:auto}.boards__search[data-v-86d874a3]{height:22px;min-width:180px;padding:0 8px;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:4px}.boards__search[data-v-86d874a3]:focus-visible,.board[data-v-86d874a3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__grid[data-v-86d874a3]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));align-content:start;gap:16px;padding:16px}.board[data-v-86d874a3]{position:relative;display:flex;flex-direction:column;padding:0;overflow:hidden;text-align:left;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);box-shadow:var(--shadow-e1);cursor:pointer;transition:border-color .12s ease,box-shadow .12s ease,transform .12s ease}.board[data-v-86d874a3]:hover{border-color:var(--color-outline);box-shadow:var(--shadow-e2);transform:translateY(-1px)}.board__body[data-v-86d874a3]{padding:12px}.board__name[data-v-86d874a3]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__meta[data-v-86d874a3]{margin:2px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.board__kinds[data-v-86d874a3]{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0 0;padding:0;list-style:none}.board__kind[data-v-86d874a3]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-dim);background-color:var(--color-canvas);border-radius:3px}.board__kind--more[data-v-86d874a3]{color:var(--color-outline)}.board__edit[data-v-86d874a3]{position:absolute;top:8px;right:8px;padding:2px 8px;font-size:var(--text-xs);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:3px;opacity:0;cursor:pointer}.board:hover .board__edit[data-v-86d874a3],.board__edit[data-v-86d874a3]:focus-visible{opacity:1}.board--new[data-v-86d874a3]{box-shadow:none;align-items:center;justify-content:center;gap:2px;min-height:180px;font-family:inherit;background-color:transparent;border-style:dashed}.board__plus[data-v-86d874a3]{font-size:20px;line-height:1;color:var(--color-outline)}.board__usage[data-v-86d874a3]{margin:3px 0 0;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.boards__nomatch[data-v-86d874a3]{grid-column:1 / -1;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.boards__empty[data-v-86d874a3]{max-width:420px;margin:10vh auto 0;padding:0 16px;text-align:center}.boards__empty-plan[data-v-86d874a3]{width:200px;margin:0 auto 16px;border:1px solid var(--color-divider);border-radius:4px}.boards__empty-title[data-v-86d874a3]{margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__empty-text[data-v-86d874a3]{margin:8px 0 16px;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.boards__empty-actions[data-v-86d874a3]{display:flex;justify-content:center;gap:8px}@media(prefers-reduced-motion:reduce){.board[data-v-86d874a3]{transition:none}.board[data-v-86d874a3]:hover{transform:none}}.dottet[data-v-3ecae506]{background:var(--color-canvas);background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-3ecae506]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed var(--color-outline);z-index:100000;pointer-events:none}.report-container[data-v-3ecae506]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative;background:var(--color-canvas, #dee1e7)}.report-container__title[data-v-3ecae506]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider, #ccd1d9)}.report-container .widgets-adding-controls[data-v-3ecae506]{display:flex;border:1px solid var(--color-divider, #ccd1d9);border-radius:8px;margin:16px}.report-container .widget-board[data-v-3ecae506]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-3ecae506]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-3ecae506]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-3ecae506]{position:absolute}.dropdown-buttons-container[data-v-3ecae506]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-3ecae506]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-3ecae506]{z-index:20000000!important}.add_widget-button[data-v-3ecae506]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-3ecae506],.v-leave-active[data-v-3ecae506]{transition:opacity .5s ease}.v-enter-from[data-v-3ecae506],.v-leave-to[data-v-3ecae506]{opacity:0}.pick[data-v-6d945def],.fill[data-v-6d945def]{display:flex;flex-direction:column;gap:24px}.pick__lead[data-v-6d945def]{margin:0;font-size:.9rem;color:var(--color-dim)}.pick__group[data-v-6d945def]{display:flex;flex-direction:column;gap:8px}.pick__rubric[data-v-6d945def]{margin:0;font-size:.8rem;font-weight:600;letter-spacing:.03em;color:var(--color-dim);text-transform:none}.tiles[data-v-6d945def]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));gap:8px;margin:0;padding:0;list-style:none}.tile[data-v-6d945def]{display:flex;flex-direction:column;gap:6px;width:100%;height:100%;padding:10px 12px;font:inherit;text-align:left;background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm);cursor:pointer}.tile[data-v-6d945def]:hover{border-color:var(--color-accent)}.tile[data-v-6d945def]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.tile--on[data-v-6d945def]{border-color:var(--color-accent);box-shadow:inset 2px 0 0 var(--color-accent)}.tile__head[data-v-6d945def]{display:flex;align-items:center;gap:6px}.tile__icon[data-v-6d945def]{flex:none;color:var(--color-accent)}.tile__name[data-v-6d945def]{flex:1;font-weight:600;color:var(--color-fg)}.tile__check[data-v-6d945def]{flex:none;color:var(--color-accent)}.tile__what[data-v-6d945def]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3;overflow:hidden;font-size:.8rem;line-height:1.45;color:var(--color-dim)}.chosen[data-v-6d945def]{display:flex;align-items:center;gap:12px;padding:12px;background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm)}.chosen__icon[data-v-6d945def]{display:grid;flex:none;place-items:center;width:40px;height:40px;color:var(--color-accent);background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-sm)}.chosen__text[data-v-6d945def]{flex:1;min-width:0}.chosen__name[data-v-6d945def]{font-weight:600;color:var(--color-fg)}.chosen__what[data-v-6d945def]{margin:2px 0 0;font-size:.82rem;line-height:1.45;color:var(--color-dim)}.fill__fields[data-v-6d945def]{display:flex;flex-direction:column;gap:16px}.model__none[data-v-deac0807]{margin:0;padding:10px 12px;font-size:.85rem;color:var(--color-dim);background-color:var(--color-sunken);border-radius:var(--radius-sm)}.tags[data-v-b6b361a8]{display:flex;flex-direction:column;gap:6px}.tags__held[data-v-b6b361a8],.tags__offer[data-v-b6b361a8]{display:flex;flex-wrap:wrap;gap:4px}.tags__suggestion[data-v-b6b361a8]{padding:2px 8px;font-size:.8rem;color:var(--color-dim);background:none;border:1px dashed var(--color-outline);border-radius:999px;cursor:pointer}.tags__suggestion[data-v-b6b361a8]:hover{color:var(--color-fg);border-style:solid;border-color:var(--color-accent)}.note[data-v-585727e2]{margin:0;padding:10px 12px;font-size:.85rem;line-height:1.45;color:var(--color-dim);background-color:var(--color-sunken);border-radius:var(--radius-sm)}.note--warn[data-v-585727e2]{color:var(--color-fg);border-left:2px solid var(--color-warn, var(--color-accent))}.menu__catch[data-v-3e59dfe4]{position:fixed;inset:0;z-index:50000}.menu[data-v-3e59dfe4]{position:fixed;z-index:50001;min-width:200px;margin:0;padding:4px;list-style:none;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-sm);box-shadow:var(--shadow-e3)}.menu__sep[data-v-3e59dfe4]{margin-top:4px;padding-top:4px;border-top:1px solid var(--color-outline)}.menu__item[data-v-3e59dfe4]{display:flex;align-items:center;gap:8px;width:100%;padding:6px 10px;font:inherit;color:var(--color-fg);text-align:left;background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.menu__item[data-v-3e59dfe4]:hover,.menu__item[data-v-3e59dfe4]:focus-visible{background-color:var(--color-sunken)}.menu__item--danger[data-v-3e59dfe4]{color:var(--color-err)}.tree[data-v-b599ea25]{display:flex;flex-direction:column;min-height:0;height:100%;border-right:1px solid var(--color-divider);background:var(--color-pane);overflow:hidden}.tree__head[data-v-b599ea25]{display:flex;align-items:center;gap:2px;flex:none;padding:7px 8px 7px 10px;border-bottom:1px solid var(--color-divider)}.tree__title[data-v-b599ea25]{flex:1 1 auto;margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--color-dim)}.tree__search[data-v-b599ea25]{flex:none;padding:8px 10px;border-bottom:1px solid var(--color-divider)}.tree__body[data-v-b599ea25]{flex:1 1 auto;min-height:0;overflow-y:auto;padding:4px 0}.tree__list[data-v-b599ea25],.tree__sources[data-v-b599ea25]{margin:0;padding:0;list-style:none}.tree__sources[data-v-b599ea25]{padding-left:22px}.row[data-v-b599ea25]{display:flex;align-items:center;gap:2px;padding-left:10px;padding-right:4px}.row[data-v-b599ea25]:hover{background:var(--color-raised)}.row--on[data-v-b599ea25],.row--on[data-v-b599ea25]:hover{background:color-mix(in srgb,var(--color-accent) 14%,transparent)}.row__twist[data-v-b599ea25]{display:flex;align-items:center;justify-content:center;width:22px;height:26px;flex:none;border:none;background:transparent;color:var(--color-dim);cursor:pointer}.row__twist--none[data-v-b599ea25]{cursor:default}.row__body[data-v-b599ea25]{display:flex;align-items:baseline;gap:8px;flex:1 1 auto;min-width:0;padding:3px 2px;border:none;background:transparent;font:inherit;text-align:left;color:var(--color-fg);cursor:pointer;flex-wrap:wrap}.row__body[data-v-b599ea25]:disabled{cursor:default}.row__body[data-v-b599ea25]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.row__name[data-v-b599ea25]{font-family:var(--font-sans);font-size:var(--text-sm);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:10ch}.row--connection .row__name[data-v-b599ea25]{font-weight:600}.row__icon[data-v-b599ea25]{flex:none;color:var(--color-dim)}.row__tag[data-v-b599ea25]{flex:none;max-width:84px;overflow:hidden;text-overflow:ellipsis;padding:0 6px;font-size:.72rem;line-height:1.5;color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);border-radius:999px;white-space:nowrap}.row__tag--more[data-v-b599ea25]{color:var(--color-dim);background-color:var(--color-sunken)}.row__what[data-v-b599ea25]{flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__usage[data-v-b599ea25]{flex:none;margin-left:auto;padding-left:8px;font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.tree__empty[data-v-b599ea25]{padding:6px 10px;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.tree__none[data-v-b599ea25]{padding:6px 10px 6px 36px;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.confirm__title[data-v-b599ea25]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.confirm__text[data-v-b599ea25]{margin:0 0 6px;color:var(--color-dim);line-height:1.5}.confirm__text--warn[data-v-b599ea25]{color:var(--color-err)}.editor[data-v-41f0a44b]{display:flex;flex-direction:column;gap:12px;height:100%;min-height:0}.editor__fields[data-v-41f0a44b]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-41f0a44b]{display:flex;justify-content:flex-end;gap:7px}.editor__preview[data-v-41f0a44b]{flex:1 1 auto;min-height:0;display:flex;overflow:auto}.editor[data-v-0fad9a41]{display:flex;flex-direction:column;gap:12px}.editor__fields[data-v-0fad9a41]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-0fad9a41]{display:flex;justify-content:flex-end;gap:7px}.data-page[data-v-2b44b5f1]{display:flex;height:100%;min-height:0}.data-page__tree[data-v-2b44b5f1]{flex:none;width:320px;min-height:0}.data-page__detail[data-v-2b44b5f1]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background:var(--color-pane);overflow:hidden}.data-page__nothing[data-v-2b44b5f1]{margin:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.detail__head[data-v-2b44b5f1]{display:flex;align-items:baseline;gap:12px;flex:none;padding:12px 16px 8px}.detail__what[data-v-2b44b5f1]{display:flex;align-items:baseline;gap:10px;min-width:0}.detail__name[data-v-2b44b5f1]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.detail__sub[data-v-2b44b5f1]{font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.detail__usage[data-v-2b44b5f1]{margin-left:auto;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.detail__body[data-v-2b44b5f1]{flex:1 1 auto;min-height:0;overflow:auto;padding:16px}.pages[data-v-21364f0b]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.pages__panel[data-v-21364f0b]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.pages__bar[data-v-21364f0b]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 8px;border-bottom:1px solid var(--color-divider)}.pages__title[data-v-21364f0b]{display:flex;align-items:center;gap:6px;margin:0;font-size:var(--text-sm);font-weight:600;color:var(--color-fg)}.pages__count[data-v-21364f0b]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);font-weight:500;color:var(--color-dim)}.pages__of[data-v-21364f0b]{margin:0;font-size:var(--text-xs);color:var(--color-dim)}.pages__tools[data-v-21364f0b]{display:flex;align-items:center;gap:8px;margin-left:auto}.pages__search[data-v-21364f0b]{height:22px;min-width:180px;padding:0 8px;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:4px}.pages__body[data-v-21364f0b]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background-color:var(--color-bg);overflow:auto}.pages__grid[data-v-21364f0b]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));align-content:start;gap:16px;padding:16px}.page[data-v-21364f0b]{position:relative;display:flex;flex-direction:column;padding:0;overflow:hidden;text-align:left;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);box-shadow:var(--shadow-e1);cursor:pointer;transition:border-color .12s ease,box-shadow .12s ease,transform .12s ease}.page[data-v-21364f0b]:hover,.page[data-v-21364f0b]:focus-visible{border-color:var(--color-outline);box-shadow:var(--shadow-e2);transform:translateY(-1px)}.page__body[data-v-21364f0b]{padding:12px}.page__name[data-v-21364f0b]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.page__meta[data-v-21364f0b]{margin:2px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.page__usage[data-v-21364f0b]{margin:3px 0 0;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.page__kinds[data-v-21364f0b]{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0 0;padding:0;list-style:none}.page__kind[data-v-21364f0b]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-dim);background-color:var(--color-canvas);border-radius:3px}.page__edit[data-v-21364f0b]{position:absolute;top:8px;right:8px;padding:2px 8px;font-family:inherit;font-size:var(--text-xs);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:3px;opacity:0;cursor:pointer}.page:hover .page__edit[data-v-21364f0b],.page__edit[data-v-21364f0b]:focus-visible{opacity:1}.page--new[data-v-21364f0b]{align-items:center;justify-content:center;gap:2px;min-height:180px;font-family:inherit;background-color:transparent;border-style:dashed;box-shadow:none}.page__plus[data-v-21364f0b]{font-size:20px;line-height:1;color:var(--color-outline)}.pages__nomatch[data-v-21364f0b]{grid-column:1 / -1;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.widgets_grid[data-v-3ac9fb06]{display:flex;flex-direction:column}[data-v-3ac9fb06] .widgets_grid-item{display:flex;flex-direction:row;align-items:center;gap:9px;padding:6px 12px;font-size:var(--text-base, 13px);color:var(--color-fg);cursor:grab;border-radius:var(--radius-sm, 5px);margin:0 6px}[data-v-3ac9fb06] .widgets_grid-item:hover{background:var(--color-bg)}[data-v-3ac9fb06] .widgets_grid-icon{width:26px;height:26px;flex:none;display:inline-flex;align-items:center;justify-content:center;background:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 5px);overflow:hidden}[data-v-3ac9fb06] .widgets_grid-icon img{max-width:18px;max-height:18px}[data-v-3ac9fb06] .widgets_grid-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.add_widget_window[data-v-3ac9fb06]{position:relative;width:100%;height:100%;padding:6px 0}.add_widget_window__scroll[data-v-3ac9fb06]{height:100%;overflow-y:auto}.scrim[data-v-67bd2420]{position:fixed;inset:0;z-index:40000;display:grid;place-items:stretch;padding:26px 22px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(6px)}.overlay[data-v-67bd2420]{display:flex;min-width:0;min-height:0;background-color:var(--color-bg);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.stage[data-v-67bd2420]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.stage__head[data-v-67bd2420]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.stage__name[data-v-67bd2420]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.stage__uid[data-v-67bd2420]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.stage__spacer[data-v-67bd2420]{flex:1 1 auto}.seg[data-v-67bd2420]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.seg button[data-v-67bd2420]{padding:1px 9px;font-family:inherit;font-size:var(--text-xs);color:var(--color-dim);background:none;border:0;cursor:pointer}.seg button.on[data-v-67bd2420]{color:var(--color-onAccent);background-color:var(--color-accent)}.stage__bar[data-v-67bd2420]{flex:none;padding:5px 12px;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.stage__body[data-v-67bd2420]{flex:1 1 auto;display:grid;place-items:center;min-height:0;padding:18px;background-color:var(--color-canvas);overflow:auto}.preview[data-v-67bd2420]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.handle[data-v-67bd2420]{width:var(--spacing-splitter);flex:none;cursor:col-resize;background-color:var(--color-divider)}.handle[data-v-67bd2420]:hover,.handle[data-v-67bd2420]:focus-visible{background-color:var(--color-accent);outline:none}.side[data-v-67bd2420]{display:flex;flex-direction:column;flex:none;min-width:0;min-height:0;background-color:var(--color-pane)}.tabs[data-v-67bd2420]{display:flex;flex-wrap:wrap;align-items:stretch;min-height:var(--spacing-panelHeader);flex:none;padding:0 6px;gap:1px;border-bottom:1px solid var(--color-divider)}.tab[data-v-67bd2420]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 9px;font-family:inherit;font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab.on[data-v-67bd2420]{color:var(--color-fg);font-weight:600}.tab.on[data-v-67bd2420]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab__n[data-v-67bd2420]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}.fields[data-v-67bd2420]{flex:1 1 auto;min-height:0;padding:10px 12px 16px;overflow-y:auto}.pick[data-v-67bd2420]{margin-bottom:8px}.rest__note[data-v-67bd2420]{margin:0 0 10px;padding:7px 9px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim);background-color:var(--color-raised);border-radius:var(--radius-xs)}.note[data-v-67bd2420]{margin:8px 0 0;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.var-mark[data-v-67bd2420]{font-family:var(--font-mono);font-style:italic;color:var(--color-brand)}.bound[data-v-67bd2420]{width:100%;border-collapse:collapse;font-size:var(--text-sm)}.bound th[data-v-67bd2420]{padding:5px 8px;text-align:left;font-size:var(--text-xs);font-weight:600;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.bound td[data-v-67bd2420]{padding:5px 8px;border-bottom:1px solid var(--color-divider)}.bound__name[data-v-67bd2420],.bound__var[data-v-67bd2420]{font-family:var(--font-mono);font-size:var(--text-xs)}.bound__var[data-v-67bd2420]{color:var(--color-brand)}.foot[data-v-67bd2420]{display:flex;align-items:center;gap:7px;height:38px;flex:none;padding:0 12px;background-color:var(--color-pane);border-top:1px solid var(--color-divider)}.foot__hint[data-v-67bd2420]{font-size:var(--text-xs);color:var(--color-dim)}.tab[data-v-67bd2420]:focus-visible,.seg button[data-v-67bd2420]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.page-settings[data-v-9ea0fdd8]{position:absolute;top:12px;right:12px;bottom:12px;z-index:1000000;display:flex;flex-direction:column;width:340px;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.head[data-v-9ea0fdd8]{display:flex;align-items:center;gap:8px;flex:none;height:34px;padding:0 6px 0 12px;border-bottom:1px solid var(--color-divider)}.head__title[data-v-9ea0fdd8]{flex:1;margin:0;font-size:var(--text-sm, 12px);font-weight:500;color:var(--color-fg)}.head__close[data-v-9ea0fdd8]{width:24px;height:24px;font-size:16px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.head__close[data-v-9ea0fdd8]:hover{color:var(--color-fg);background-color:var(--color-raised)}.head__close[data-v-9ea0fdd8]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.body[data-v-9ea0fdd8]{flex:1;min-height:0;overflow-y:auto;padding:12px}.group+.group[data-v-9ea0fdd8]{margin-top:18px}.group__label[data-v-9ea0fdd8]{margin:0 0 8px;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.group[data-v-9ea0fdd8]>.field{margin-bottom:8px}.ident[data-v-9ea0fdd8]{margin:18px 0 0;font-size:var(--text-xs, 11px);color:var(--color-dim)}.ident code[data-v-9ea0fdd8]{font-family:var(--font-mono);user-select:all}.missing[data-v-9ea0fdd8]{margin:0;font-size:var(--text-sm, 12px);color:var(--color-dim)}.foot[data-v-9ea0fdd8]{display:flex;justify-content:flex-end;flex:none;padding:8px 12px;border-top:1px solid var(--color-divider)}.ghost{display:none}.editor[data-v-bd444b0c]{position:relative;padding:0;border:0;display:flex;align-items:stretch;width:100%;height:100%;min-height:0;overflow:hidden;background:var(--color-bg)}.palette__act[data-v-bd444b0c]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.palette__act[data-v-bd444b0c]:hover{color:var(--color-fg);background-color:var(--color-raised)}.palette__act[data-v-bd444b0c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.report-container[data-v-bd444b0c]{flex:1 1 auto;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;min-width:0;height:100%;position:relative;background:var(--color-canvas)}.report-container.dottet[data-v-bd444b0c]{background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:24px 24px;background-position:-12px -12px;background-repeat:repeat}.report-container__title[data-v-bd444b0c]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider)}.report-container .widgets-adding-controls[data-v-bd444b0c]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-md, 8px);margin:16px}.report-container .widget-board[data-v-bd444b0c]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-bd444b0c]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-bd444b0c]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-bd444b0c]{position:absolute}.dropdown-buttons-container[data-v-bd444b0c]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-bd444b0c]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-bd444b0c]{z-index:20000000!important}.v-enter-active[data-v-bd444b0c],.v-leave-active[data-v-bd444b0c]{transition:opacity .5s ease}.v-enter-from[data-v-bd444b0c],.v-leave-to[data-v-bd444b0c]{opacity:0}.variables[data-v-dda92d6f]{display:flex;flex-direction:column;gap:28px;box-sizing:border-box;width:100%;height:100%;overflow-y:auto;padding:28px 32px 40px;font-family:var(--font-sans);color:var(--color-fg);background-color:var(--color-bg)}.variables__head[data-v-dda92d6f],.reach[data-v-dda92d6f]{width:100%;max-width:940px}.variables__head[data-v-dda92d6f]{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap}.variables__title[data-v-dda92d6f]{margin:0 0 6px;font-size:20px;font-weight:600;letter-spacing:-.01em}.variables__lead[data-v-dda92d6f]{margin:0;max-width:56ch;font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}.reach__title[data-v-dda92d6f]{display:flex;align-items:baseline;gap:12px;margin:0 0 2px;font-size:var(--text-base);font-weight:600}.reach__lead[data-v-dda92d6f]{font-weight:400;font-size:var(--text-sm);color:var(--color-dim)}.reach__empty[data-v-dda92d6f]{margin:0;padding:12px 0;border-top:1px solid var(--color-divider);font-size:var(--text-base);color:var(--color-dim)}.rows[data-v-dda92d6f]{margin:0;padding:0;list-style:none;border-top:1px solid var(--color-divider)}.row[data-v-dda92d6f]{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1.4fr) minmax(0,2fr) auto;align-items:center;gap:16px;padding:7px 8px 7px 0;border-bottom:1px solid var(--color-divider);font-size:var(--text-base)}.row[data-v-dda92d6f]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.row__name[data-v-dda92d6f]{font-family:var(--font-mono);overflow-wrap:anywhere}.row__type[data-v-dda92d6f],.row__value[data-v-dda92d6f]{color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__value[data-v-dda92d6f]{font-family:var(--font-mono);color:var(--color-fg)}.row__tools[data-v-dda92d6f]{display:flex;gap:2px}.form[data-v-dda92d6f]{display:flex;flex-direction:column;gap:4px}.confirm__title[data-v-dda92d6f]{margin:0;font-size:var(--text-lg);font-weight:600}.confirm__text[data-v-dda92d6f]{margin:0;font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}@media(max-width:640px){.variables[data-v-dda92d6f]{padding:20px 16px 32px}.row[data-v-dda92d6f]{grid-template-columns:minmax(0,1fr) auto;row-gap:2px}.row__type[data-v-dda92d6f],.row__value[data-v-dda92d6f]{grid-column:1;white-space:normal}}.appearance[data-v-a84ca0bf]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.panel[data-v-a84ca0bf]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.panel__head[data-v-a84ca0bf]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 10px;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.head__tab[data-v-a84ca0bf]{position:relative;height:100%;padding:0 10px;font-family:inherit;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);background:none;border:0;cursor:pointer}.head__tab.on[data-v-a84ca0bf]{color:var(--color-fg)}.head__tab.on[data-v-a84ca0bf]:after{content:\"\";position:absolute;left:6px;right:6px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.head__tab[data-v-a84ca0bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.gallery[data-v-a84ca0bf]{flex:1 1 auto;min-height:0;padding:16px 18px 24px;overflow-y:auto;background-color:var(--color-bg)}.gallery__lead[data-v-a84ca0bf]{margin:0 0 18px;max-width:70ch;font-size:var(--text-sm);color:var(--color-dim)}.demo[data-v-a84ca0bf]{margin-bottom:26px}.demo__title[data-v-a84ca0bf]{margin:0 0 10px;padding-bottom:4px;font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.demo__row[data-v-a84ca0bf]{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:12px}.demo__form[data-v-a84ca0bf]{max-width:460px}.panel__tools[data-v-a84ca0bf]{display:flex;align-items:center;gap:6px;margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400}.changed[data-v-a84ca0bf]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-accent)}.body[data-v-a84ca0bf]{display:flex;flex:1 1 auto;min-height:0;background-color:var(--color-bg)}.themes[data-v-a84ca0bf]{width:240px;flex:none;display:flex;flex-direction:column;gap:2px;padding:8px 6px;overflow-y:auto;background-color:var(--color-pane);border-right:1px solid var(--color-divider)}.theme[data-v-a84ca0bf]{display:grid;gap:3px;padding:8px;font-family:inherit;text-align:left;background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.theme[data-v-a84ca0bf]:hover{background-color:var(--color-raised)}.theme.on[data-v-a84ca0bf]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);border-color:color-mix(in srgb,var(--color-accent) 45%,transparent)}.theme__strip[data-v-a84ca0bf]{display:flex;height:14px;border-radius:2px;overflow:hidden;border:1px solid var(--color-divider)}.theme__strip i[data-v-a84ca0bf]{flex:1}.theme__name[data-v-a84ca0bf]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.theme__note[data-v-a84ca0bf]{font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.tokens[data-v-a84ca0bf]{flex:1 1 auto;min-width:0;padding:8px 10px 16px;overflow-y:auto}.group__head[data-v-a84ca0bf]{display:flex;align-items:baseline;gap:7px;width:100%;padding:6px 4px;font-family:inherit;font-size:var(--text-base);font-weight:600;color:var(--color-fg);text-align:left;background:none;border:0;border-bottom:1px solid var(--color-divider);cursor:pointer}.group__twist[data-v-a84ca0bf]{width:11px;font-size:var(--text-xs);color:var(--color-dim)}.group__count[data-v-a84ca0bf]{margin-left:auto;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.group__body[data-v-a84ca0bf]{padding:8px 0 14px 18px}.group__note[data-v-a84ca0bf]{margin:0 0 8px;font-size:var(--text-sm);color:var(--color-dim);max-width:70ch}.token[data-v-a84ca0bf]{display:flex;align-items:center;gap:8px;padding:3px 0}.token__swatch[data-v-a84ca0bf]{width:22px;height:22px;flex:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__swatch--none[data-v-a84ca0bf]{background:repeating-linear-gradient(45deg,var(--color-raised),var(--color-raised) 3px,var(--color-bg) 3px,var(--color-bg) 6px)}.token__text[data-v-a84ca0bf]{display:flex;flex-direction:column;min-width:0;flex:1 1 auto}.token__name[data-v-a84ca0bf]{font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg)}.token__role[data-v-a84ca0bf]{font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.token__picker[data-v-a84ca0bf]{width:28px;height:24px;flex:none;padding:0;background:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__value[data-v-a84ca0bf]{width:220px;flex:none;height:24px;padding:0 7px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__reset[data-v-a84ca0bf]{width:24px;height:24px;flex:none;font-family:inherit;font-size:var(--text-base);color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__reset[data-v-a84ca0bf]:disabled{opacity:.35;cursor:default}.btn[data-v-a84ca0bf]{height:22px;padding:0 10px;font-family:inherit;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-a84ca0bf]:hover{border-color:var(--color-outline)}.btn[data-v-a84ca0bf]:focus-visible,.theme[data-v-a84ca0bf]:focus-visible,.group__head[data-v-a84ca0bf]:focus-visible,.token__value[data-v-a84ca0bf]:focus-visible,.token__picker[data-v-a84ca0bf]:focus-visible,.token__reset[data-v-a84ca0bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}\n";})();
import { identifier as pm, VARIABLE_WRAPPER_FACTORY as gm } from "org.eclipse.daanse.board.app.lib.factory.variableWrapper";
import { EVENT_MANAGER as vm, EVENT_ACTIONS_REGISTRY_ID as Fs } from "org.eclipse.daanse.board.app.lib.api.events";
import { ref as Z, defineComponent as Ge, computed as H, inject as xe, onMounted as Xn, onBeforeUnmount as Si, createElementBlock as S, openBlock as g, Fragment as _e, createElementVNode as s, createBlock as $e, createCommentVNode as j, renderList as Me, unref as h, toDisplayString as N, normalizeClass as Te, withModifiers as an, createVNode as E, createStaticVNode as hm, Teleport as aa, resolveComponent as mm, shallowRef as zs, watch as ln, nextTick as Sr, normalizeStyle as Ot, resolveDynamicComponent as Qn, createTextVNode as ue, withDirectives as Qt, vModelText as ta, withCtx as ne, withKeys as jt, mergeModels as jn, useModel as wt, renderSlot as eu, vShow as jo, Transition as _m, isRef as bm, createApp as ym } from "vue";
import { NAVIGATION_REGISTRY as wm, NAVIGATION_REGISTRY_ID as nu, NavigationItem as km } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID as tu, RouteDefinition as qs } from "org.eclipse.daanse.board.app.lib.api.route";
import { useCurrentHistory as xm, useEList as gn, useGlobalLoading as Sm, useEObject as ru, useFeature as Cm, describeModel as bi, useBoard as $m, VariableComplexStringWrapper as Im, VARIABLECOMPLEXSTRINGWRAPPER as Am } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DIcon as Fe, DButton as we, DModal as yi, DField as iu, DSwitch as la, DInput as rn, DChip as Vt, DIconPicker as Ci, DSelect as Un, DTabs as Rm, DColorInput as ou, DFloatingWindow as Em, DDateInput as Vm, DSlider as Tm, DCheckbox as Om, DDivider as Lm } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useRoute as Cr, useRouter as $i, createRouter as Dm, createWebHistory as Bm } from "vue-router";
import { identifier as er } from "org.eclipse.daanse.board.app.lib.api.page";
import { identifier as Ii } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { identifier as Nn, WorkspaceImpl as Wm, ConnectionImpl as Pm, DatasourceImpl as Mm, VariableImpl as Um, EventMappingImpl as au, BoardImpl as Nm, PageImpl as Fm, WidgetImpl as zm, LayoutItemImpl as qm } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { JSONResource as lu, URI as su, OPTION_INDENT as Gm } from "@emfts/core";
import { identifier as Ai, CONNECTION_REPOSITORY as Hm } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as Ri, DATASOURCE_REPOSITORY as Km } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { identifier as uu } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as Ym } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { identifier as du } from "org.eclipse.daanse.board.app.lib.api.widget";
import Zm from "vuedraggable";
import { WrapperSettingsPackage as Jm, wrapperSettingsFormXmi as Xm, WrapperSettingsImpl as Qm, WidgetWrapper as jm } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { SettingsForm as wi, isModelled as e_ } from "org.eclipse.daanse.board.app.ui.vue.uimodel";
import { VariableEvents as Gs } from "org.eclipse.daanse.board.app.lib.variables";
import { SystemActionsEcoreContent as n_, WidgetAction as t_ } from "org.eclipse.daanse.board.app.lib.events";
import { loggerFactory as cu } from "org.eclipse.daanse.board.app.lib.logger";
const { TINY_EMITTER: js, APP: fm } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), dn = [];
for (let c = 0; c < 256; ++c)
  dn.push((c + 256).toString(16).slice(1));
function r_(c, _ = 0) {
  return (dn[c[_ + 0]] + dn[c[_ + 1]] + dn[c[_ + 2]] + dn[c[_ + 3]] + "-" + dn[c[_ + 4]] + dn[c[_ + 5]] + "-" + dn[c[_ + 6]] + dn[c[_ + 7]] + "-" + dn[c[_ + 8]] + dn[c[_ + 9]] + "-" + dn[c[_ + 10]] + dn[c[_ + 11]] + dn[c[_ + 12]] + dn[c[_ + 13]] + dn[c[_ + 14]] + dn[c[_ + 15]]).toLowerCase();
}
const i_ = new Uint8Array(16);
function o_() {
  return crypto.getRandomValues(i_);
}
function sa(c, _, o) {
  return crypto.randomUUID ? crypto.randomUUID() : a_(c);
}
function a_(c, _, o) {
  c = c || {};
  const m = c.random ?? c.rng?.() ?? o_();
  if (m.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return m[6] = m[6] & 15 | 64, m[8] = m[8] & 63 | 128, r_(m);
}
const ea = Z(void 0);
function fu() {
  return {
    /** The page whose settings are open, if any. */
    settingsFor: ea,
    openSettings: (c) => {
      ea.value = c;
    },
    closeSettings: () => {
      ea.value = void 0;
    }
  };
}
const vi = Z(!0);
function pu() {
  return {
    visible: vi,
    toggle: () => {
      vi.value = !vi.value;
    },
    hide: () => {
      vi.value = !1;
    }
  };
}
const l_ = "data-board-backdrop", gu = "daanse.board.backdrop";
function s_() {
  try {
    return localStorage.getItem(gu) === "on";
  } catch {
    return !1;
  }
}
const kr = Z(s_());
function vu() {
  document.documentElement.setAttribute(l_, kr.value ? "on" : "off");
}
function u_() {
  try {
    localStorage.setItem(gu, kr.value ? "on" : "off");
  } catch {
  }
}
function d_() {
  return {
    shown: kr,
    toggle: () => {
      kr.value = !kr.value, u_(), vu();
    }
  };
}
function c_() {
  vu();
}
const f_ = "data-board-snap", hu = "daanse.board.snap";
function p_() {
  try {
    const c = localStorage.getItem(hu);
    return c === null ? !0 : c === "on";
  } catch {
    return !0;
  }
}
const xr = Z(p_());
function mu() {
  document.documentElement.setAttribute(f_, xr.value ? "on" : "off");
}
function g_() {
  try {
    localStorage.setItem(hu, xr.value ? "on" : "off");
  } catch {
  }
}
function v_() {
  return {
    snapping: xr,
    toggle: () => {
      xr.value = !xr.value, g_(), mu();
    }
  };
}
function h_() {
  mu();
}
const m_ = { class: "topbar" }, __ = {
  class: "crumb",
  "aria-label": "Pfad"
}, b_ = {
  key: 0,
  class: "crumb-sep",
  "aria-hidden": "true"
}, y_ = ["onClick"], w_ = ["aria-expanded"], k_ = { class: "pages__name" }, x_ = {
  key: 0,
  class: "pages__menu",
  role: "menu"
}, S_ = ["onClick"], C_ = ["title", "aria-label", "onClick"], $_ = ["disabled", "title"], I_ = ["disabled", "title"], A_ = ["aria-pressed"], R_ = ["aria-pressed"], E_ = ["aria-pressed"], V_ = {
  key: 8,
  class: "modes",
  role: "group",
  "aria-label": "Modus"
}, T_ = ["aria-pressed"], O_ = ["aria-pressed"], L_ = /* @__PURE__ */ Ge({
  __name: "Header",
  setup(c) {
    const _ = Cr(), o = $i(), m = H(() => _.params.pageid ?? ""), y = xm(), I = H(
      () => _.name === "edit" || _.name === "pageEdit" || String(_.path).endsWith("/edit")
    ), f = xe(Nn), x = gn(f, (X) => X.board?.pages), b = H(() => {
      x.value;
      const X = { label: "Boards", to: "/" }, ie = {
        label: f.board?.name || "Board",
        to: m.value ? `/page/${m.value}` : void 0
      };
      switch (_.name) {
        case "home":
          return [{ label: "Boards" }];
        case "page":
          return [X, { label: ie.label }];
        case "edit":
        case "pageEdit":
          return [X, ie, { label: "Bearbeiten" }];
        case "pages":
          return [X, ie, { label: "Seiten" }];
        case "data":
          return [X, { label: "Verbindungen & Daten" }];
        case "config":
          return [X, { label: "Konfiguration" }];
        case "save":
          return [X, { label: "Speicher" }];
        case "test":
          return [X, { label: "Test" }];
        default:
          return [X, { label: String(_.name ?? "Board") }];
      }
    }), d = H(() => !!m.value), p = xe(er);
    xe(Ii);
    const { openSettings: V } = fu(), { visible: B, toggle: U } = pu(), { shown: z, toggle: G } = d_(), { snapping: O, toggle: C } = v_(), T = H(() => {
      if (x.value, !m.value) return !1;
      try {
        const X = p?.getPage(m.value);
        return !!(X?.backgroundImage?.trim() || X?.backgroundColor?.trim());
      } catch {
        return !1;
      }
    }), re = H(() => {
      x.value;
      const X = p?.getAllPageIds() ?? [], ie = [];
      for (const me of X) {
        const Be = p?.getPage(me);
        Be && ie.push(Be);
      }
      return ie;
    }), ee = H(() => {
      if (x.value, !m.value) return "";
      try {
        return p?.getPage(m.value)?.name ?? "Seite";
      } catch {
        return "Seite";
      }
    }), L = Z(!1);
    function K(X) {
      L.value = !1, X !== m.value && o.push(I.value ? `/page/${X}/edit` : `/page/${X}`);
    }
    const he = Z();
    function Ue(X) {
      L.value && (he.value?.contains(X.target) || (L.value = !1));
    }
    function Qe(X) {
      X.key === "Escape" && (L.value = !1);
    }
    Xn(() => {
      document.addEventListener("pointerdown", Ue), document.addEventListener("keydown", Qe);
    }), Si(() => {
      document.removeEventListener("pointerdown", Ue), document.removeEventListener("keydown", Qe);
    });
    function je() {
      const X = sa();
      p?.registerPage({
        id: X,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), L.value = !1, o.push(`/page/${X}/edit`);
    }
    const en = H(() => re.value.length > 1);
    function ce(X) {
      if (!en.value) return;
      const ie = re.value.find((me) => me.id === X);
      if (confirm(`Seite „${ie?.name ?? X}" löschen? Das lässt sich nicht rückgängig machen.`) && (p?.unregisterPage(X), X === m.value)) {
        const me = re.value.find((Be) => Be.id !== X);
        me && o.push(I.value ? `/page/${me.id}/edit` : `/page/${me.id}`);
      }
    }
    const fe = () => {
      m.value && o.push(`/page/${m.value}`);
    }, oe = () => {
      m.value && o.push(`/page/${m.value}/edit`);
    }, de = () => o.push({ path: "/", query: { view: "storage" } }), ae = () => o.push("/appearance");
    return (X, ie) => (g(), S(_e, null, [
      s("header", m_, [
        ie[14] || (ie[14] = s("span", { class: "brand" }, [
          s("span", {
            class: "brand-mark",
            "aria-hidden": "true"
          }, "D"),
          s("span", { class: "brand-name" }, "Daanse Board")
        ], -1)),
        s("nav", __, [
          (g(!0), S(_e, null, Me(b.value, (me, Be) => (g(), S(_e, {
            key: me.label + Be
          }, [
            Be > 0 ? (g(), S("span", b_, "/")) : j("", !0),
            me.to && Be < b.value.length - 1 ? (g(), S("button", {
              key: 1,
              type: "button",
              class: "crumb-part crumb-link",
              onClick: (Y) => h(o).push(me.to)
            }, N(me.label), 9, y_)) : (g(), S("span", {
              key: 2,
              class: Te(["crumb-part", { current: Be === b.value.length - 1 }])
            }, N(me.label), 3))
          ], 64))), 128))
        ]),
        d.value ? (g(), S("div", {
          key: 0,
          ref_key: "menuHost",
          ref: he,
          class: "pages"
        }, [
          s("button", {
            type: "button",
            class: "pages__current",
            "aria-expanded": L.value,
            "aria-haspopup": "menu",
            title: "Seite wechseln",
            onClick: ie[0] || (ie[0] = (me) => L.value = !L.value)
          }, [
            s("span", k_, N(ee.value), 1),
            ie[7] || (ie[7] = s("span", {
              class: "pages__caret",
              "aria-hidden": "true"
            }, "▾", -1))
          ], 8, w_),
          L.value ? (g(), S("ul", x_, [
            (g(!0), S(_e, null, Me(re.value, (me) => (g(), S("li", {
              key: me.id,
              role: "none",
              class: "pages__line"
            }, [
              s("button", {
                type: "button",
                role: "menuitem",
                class: Te(["pages__item", { on: me.id === m.value }]),
                onClick: (Be) => K(me.id)
              }, N(me.name), 11, S_),
              en.value ? (g(), S("button", {
                key: 0,
                type: "button",
                class: "pages__remove",
                title: `Seite „${me.name}“ löschen`,
                "aria-label": `Seite ${me.name} löschen`,
                onClick: an((Be) => ce(me.id), ["stop"])
              }, " × ", 8, C_)) : j("", !0)
            ]))), 128)),
            ie[8] || (ie[8] = s("li", {
              class: "pages__sep",
              role: "separator"
            }, null, -1)),
            s("li", { role: "none" }, [
              s("button", {
                type: "button",
                role: "menuitem",
                class: "pages__item pages__add",
                onClick: je
              }, " + Neue Seite ")
            ])
          ])) : j("", !0)
        ], 512)) : j("", !0),
        I.value && h(y) ? (g(), S("button", {
          key: 1,
          type: "button",
          class: "icon-action",
          disabled: !h(y).canUndo.value,
          title: h(y).undoLabel.value ? `Rückgängig: ${h(y).undoLabel.value}` : "Rückgängig",
          "aria-label": "Letzte Änderung rückgängig machen",
          onClick: ie[1] || (ie[1] = (me) => h(y).undo())
        }, [
          E(h(Fe), {
            name: "undo",
            size: "sm"
          })
        ], 8, $_)) : j("", !0),
        I.value && h(y) ? (g(), S("button", {
          key: 2,
          type: "button",
          class: "icon-action",
          disabled: !h(y).canRedo.value,
          title: h(y).redoLabel.value ? `Wiederholen: ${h(y).redoLabel.value}` : "Wiederholen",
          "aria-label": "Rückgängig gemachte Änderung wiederholen",
          onClick: ie[2] || (ie[2] = (me) => h(y).redo())
        }, [
          E(h(Fe), {
            name: "redo",
            size: "sm"
          })
        ], 8, I_)) : j("", !0),
        I.value ? (g(), S("button", {
          key: 3,
          type: "button",
          class: Te(["icon-action", { on: h(O) }]),
          "aria-pressed": h(O),
          title: "Am Raster ausrichten",
          "aria-label": "Widgets am Raster ausrichten",
          onClick: ie[3] || (ie[3] = //@ts-ignore
          (...me) => h(C) && h(C)(...me))
        }, [...ie[9] || (ie[9] = [
          s("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            s("path", {
              d: "M9 3.5v17M15 3.5v17M3.5 9h17M3.5 15h17",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.3",
              opacity: "0.55"
            }),
            s("rect", {
              x: "9",
              y: "9",
              width: "6",
              height: "6",
              fill: "currentColor"
            })
          ], -1)
        ])], 10, A_)) : j("", !0),
        I.value && T.value ? (g(), S("button", {
          key: 4,
          type: "button",
          class: Te(["icon-action", { on: h(z) }]),
          "aria-pressed": h(z),
          title: "Hintergrund der Seite zeigen",
          "aria-label": "Hintergrund der Seite beim Bearbeiten zeigen oder verbergen",
          onClick: ie[4] || (ie[4] = //@ts-ignore
          (...me) => h(G) && h(G)(...me))
        }, [...ie[10] || (ie[10] = [
          s("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            s("rect", {
              x: "3.5",
              y: "5",
              width: "17",
              height: "14",
              rx: "1.5",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6"
            }),
            s("circle", {
              cx: "9",
              cy: "10",
              r: "1.6",
              fill: "currentColor"
            }),
            s("path", {
              d: "M4 17l4.5-4.5 3 3L15 12l5 5",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6",
              "stroke-linejoin": "round"
            })
          ], -1)
        ])], 10, R_)) : j("", !0),
        I.value ? (g(), S("button", {
          key: 5,
          type: "button",
          class: Te(["icon-action", { on: h(B) }]),
          "aria-pressed": h(B),
          title: "Widgets",
          "aria-label": "Widget-Palette zeigen oder verbergen",
          onClick: ie[5] || (ie[5] = //@ts-ignore
          (...me) => h(U) && h(U)(...me))
        }, [...ie[11] || (ie[11] = [
          hm('<svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15" data-v-46a52363><rect x="3.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-46a52363></rect><rect x="13.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-46a52363></rect><rect x="3.5" y="13.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-46a52363></rect><rect x="13.5" y="13.5" width="7" height="7" rx="1" fill="currentColor" stroke="currentColor" stroke-width="1.6" data-v-46a52363></rect></svg>', 1)
        ])], 10, E_)) : j("", !0),
        d.value ? (g(), S("button", {
          key: 6,
          type: "button",
          class: "icon-action",
          title: "Seite einrichten",
          "aria-label": "Seite einrichten",
          onClick: ie[6] || (ie[6] = (me) => h(V)(m.value))
        }, [...ie[12] || (ie[12] = [
          s("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            s("circle", {
              cx: "12",
              cy: "12",
              r: "3.2",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6"
            }),
            s("path", {
              d: "M12 4.2v2M12 17.8v2M4.2 12h2M17.8 12h2M6.5 6.5l1.4 1.4M16.1 16.1l1.4 1.4M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6",
              "stroke-linecap": "round"
            })
          ], -1)
        ])])) : j("", !0),
        ie[15] || (ie[15] = s("span", { class: "spacer" }, null, -1)),
        d.value ? (g(), S("button", {
          key: 7,
          type: "button",
          class: "action",
          title: "Arbeitsstand speichern oder laden",
          onClick: de
        }, " Speichern ")) : j("", !0),
        d.value ? (g(), S("div", V_, [
          s("button", {
            type: "button",
            class: Te(["mode", { on: !I.value }]),
            "aria-pressed": !I.value,
            onClick: fe
          }, " Ansicht ", 10, T_),
          s("button", {
            type: "button",
            class: Te(["mode", { on: I.value }]),
            "aria-pressed": I.value,
            onClick: oe
          }, " Bearbeiten ", 10, O_)
        ])) : j("", !0),
        s("button", {
          type: "button",
          class: "icon-action",
          title: "Erscheinungsbild",
          "aria-label": "Erscheinungsbild",
          onClick: ae
        }, [...ie[13] || (ie[13] = [
          s("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            s("circle", {
              cx: "12",
              cy: "12",
              r: "9",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6"
            }),
            s("path", {
              d: "M12 3a9 9 0 0 1 0 18z",
              fill: "currentColor"
            })
          ], -1)
        ])]),
        ie[16] || (ie[16] = s("span", {
          class: "avatar",
          title: "Angemeldet"
        }, "MH", -1))
      ]),
      (g(), $e(aa, { to: "body" }))
    ], 64));
  }
}), Ke = (c, _) => {
  const o = c.__vccOpts || c;
  for (const [m, y] of _)
    o[m] = y;
  return o;
}, D_ = /* @__PURE__ */ Ke(L_, [["__scopeId", "data-v-46a52363"]]), ki = [
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
], _u = ki.flatMap((c) => c.tokens.map((_) => _.name));
new Map(
  ki.flatMap((c) => c.tokens).map((c) => [c.name, c])
);
const B_ = {
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
}, na = "'Barlow', system-ui, -apple-system, 'Segoe UI', sans-serif", Hs = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace", Ks = "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace", hi = {
  "text-xs": "11px",
  "text-sm": "12px",
  "text-base": "13px",
  "text-lg": "15px",
  "text-xl": "24px"
}, bu = [
  {
    id: "messwarte",
    name: "Messwarte",
    note: "Dunkler Grund, Zahlen als hellstes Element. Für Boards, die stundenlang laufen.",
    dark: !0,
    tokens: {
      ...hi,
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
      "font-sans": na,
      "font-mono": Hs,
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
    dark: !1,
    tokens: {
      ...hi,
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
      "font-sans": na,
      "font-mono": Hs,
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
    dark: !1,
    tokens: {
      ...hi,
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
      "font-mono": Ks,
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
    dark: !1,
    tokens: {
      ...hi,
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
      "font-sans": na,
      "font-mono": Ks,
      "radius-xs": "3px",
      "radius-sm": "6px",
      "radius-md": "8px",
      "radius-lg": "12px",
      "shadow-e1": "0 1px 2px rgba(36, 34, 25, 0.12)",
      "shadow-e2": "0 2px 8px rgba(36, 34, 25, 0.12)",
      "shadow-e3": "0 8px 24px rgba(36, 34, 25, 0.14)"
    }
  }
], Ys = "messwarte", yu = "daanse.board.theme";
function W_() {
  const c = { themeId: Ys, overrides: {} };
  try {
    const _ = localStorage.getItem(yu);
    if (!_) return c;
    const o = JSON.parse(_);
    return {
      themeId: typeof o?.themeId == "string" ? o.themeId : Ys,
      // Only tokens we know about - a stale name would write a dead property
      overrides: Object.fromEntries(
        Object.entries(o?.overrides ?? {}).filter(
          ([m, y]) => _u.includes(m) && typeof y == "string"
        )
      )
    };
  } catch {
    return c;
  }
}
const cn = Z(W_()), ra = Z([]);
function mi() {
  try {
    localStorage.setItem(yu, JSON.stringify(cn.value));
  } catch {
  }
}
function Xt() {
  const c = yr.value.find((m) => m.id === cn.value.themeId);
  if (!c) return;
  const _ = document.documentElement, o = { ...c.tokens, ...cn.value.overrides };
  for (const [m, y] of Object.entries(o))
    _.style.setProperty(`--${m}`, y);
  for (const [m, y] of Object.entries(B_)) {
    const I = o[y];
    I && _.style.setProperty(`--${m}`, I);
  }
  _.style.colorScheme = c.dark ? "dark" : "light", _.setAttribute("data-theme", c.dark ? "dark" : "light");
}
const yr = H(() => [...bu, ...ra.value]);
function wu() {
  const c = H(
    () => yr.value.find((d) => d.id === cn.value.themeId) ?? bu[0]
  );
  function _(d) {
    return cn.value.overrides[d] ?? c.value.tokens[d] ?? "";
  }
  function o(d) {
    return d in cn.value.overrides;
  }
  function m(d) {
    yr.value.some((p) => p.id === d) && (cn.value = { themeId: d, overrides: {} }, mi(), Xt());
  }
  function y(d, p) {
    _u.includes(d) && (cn.value = {
      ...cn.value,
      overrides: { ...cn.value.overrides, [d]: p }
    }, mi(), Xt());
  }
  function I(d) {
    const { [d]: p, ...V } = cn.value.overrides;
    cn.value = { ...cn.value, overrides: V }, mi(), Xt();
  }
  function f() {
    cn.value = { ...cn.value, overrides: {} }, mi(), Xt();
  }
  function x(d) {
    yr.value.some((p) => p.id === d.id) || (ra.value = [...ra.value, d]);
  }
  function b() {
    return {
      ...c.value,
      id: `${c.value.id}-eigen`,
      name: `${c.value.name} (angepasst)`,
      tokens: { ...c.value.tokens, ...cn.value.overrides }
    };
  }
  return {
    themes: yr,
    activeTheme: c,
    overrides: H(() => cn.value.overrides),
    valueOf: _,
    isOverridden: o,
    selectTheme: m,
    setToken: y,
    clearToken: I,
    clearAllTokens: f,
    addTheme: x,
    exportTheme: b,
    apply: Xt
  };
}
function P_() {
  Xt();
}
const M_ = { class: "shell" }, U_ = {
  key: 0,
  class: "global-loading-bar"
}, N_ = {
  key: 0,
  class: "rail",
  "aria-label": "Bereiche"
}, F_ = ["aria-current"], z_ = ["aria-current"], q_ = ["aria-current"], G_ = ["aria-current", "title", "onClick"], H_ = { class: "sr-only" }, K_ = { class: "content" }, Y_ = /* @__PURE__ */ Ge({
  __name: "App",
  setup(c) {
    const _ = Z([]), { isLoading: o } = Sm();
    wu();
    const m = Cr(), y = $i();
    Xn(() => {
      const d = xe(wm);
      _.value = d.getAllNavigationItemsArray ? d.getAllNavigationItemsArray() : [];
    });
    const I = H(
      () => m.params.pageid ? `/page/${m.params.pageid}` : "/page/abc"
    ), f = H(() => String(m.name) === "home" && !m.params.pageid), x = H(
      () => ["home", "page", "edit", "pageEdit"].includes(String(m.name))
    ), b = (d) => y.push(d);
    return (d, p) => {
      const V = mm("router-view");
      return g(), S("div", M_, [
        h(o) ? (g(), S("div", U_, [...p[3] || (p[3] = [
          s("div", { class: "global-loading-bar-progress" }, null, -1)
        ])])) : j("", !0),
        E(D_),
        s("div", {
          class: Te(["shell-body", { "shell-body--norail": f.value }])
        }, [
          f.value ? j("", !0) : (g(), S("nav", N_, [
            s("button", {
              type: "button",
              class: Te(["ri", { on: x.value }]),
              "aria-current": x.value ? "page" : void 0,
              title: "Board",
              onClick: p[0] || (p[0] = (B) => b(I.value))
            }, [
              E(h(Fe), { name: "dashboard" }),
              p[4] || (p[4] = s("span", { class: "sr-only" }, "Board", -1))
            ], 10, F_),
            s("button", {
              type: "button",
              class: Te(["ri", { on: h(m).name === "pages" }]),
              "aria-current": h(m).name === "pages" ? "page" : void 0,
              title: "Seiten",
              onClick: p[1] || (p[1] = (B) => b("/pages"))
            }, [
              E(h(Fe), { name: "layers" }),
              p[5] || (p[5] = s("span", { class: "sr-only" }, "Seiten", -1))
            ], 10, z_),
            s("button", {
              type: "button",
              class: Te(["ri", { on: h(m).name === "data" }]),
              "aria-current": h(m).name === "data" ? "page" : void 0,
              title: "Verbindungen & Daten",
              onClick: p[2] || (p[2] = (B) => b("/datasources"))
            }, [
              E(h(Fe), { name: "dataset" }),
              p[6] || (p[6] = s("span", { class: "sr-only" }, "Verbindungen & Daten", -1))
            ], 10, q_),
            (g(!0), S(_e, null, Me(_.value, (B) => (g(), S("button", {
              key: B.id,
              type: "button",
              class: Te(["ri", { on: h(m).name === B.routeName }]),
              "aria-current": h(m).name === B.routeName ? "page" : void 0,
              title: B.label,
              onClick: (U) => b(B.route)
            }, [
              E(h(Fe), {
                name: B.icon
              }, null, 8, ["name"]),
              s("span", H_, N(B.label), 1)
            ], 10, G_))), 128)),
            p[7] || (p[7] = s("span", { class: "rail-spacer" }, null, -1))
          ])),
          s("main", K_, [
            (g(), $e(V, {
              key: d.$route.fullPath
            }))
          ])
        ], 2)
      ]);
    };
  }
}), Z_ = /* @__PURE__ */ Ke(Y_, [["__scopeId", "data-v-ce3039cb"]]), ku = "daanse.board.usage";
function J_() {
  try {
    const c = localStorage.getItem(ku), _ = c ? JSON.parse(c) : {};
    return _ && typeof _ == "object" ? _ : {};
  } catch {
    return {};
  }
}
const ut = Z(J_());
function ua() {
  function c(y) {
    if (!y) return;
    const I = ut.value[y];
    ut.value = {
      ...ut.value,
      [y]: { count: (I?.count ?? 0) + 1, lastOpened: Date.now() }
    };
    try {
      localStorage.setItem(ku, JSON.stringify(ut.value));
    } catch {
    }
  }
  function _(y) {
    return ut.value[y];
  }
  function o(y, I) {
    const f = ut.value[y], x = ut.value[I];
    return (x?.count ?? 0) !== (f?.count ?? 0) ? (x?.count ?? 0) - (f?.count ?? 0) : (x?.lastOpened ?? 0) - (f?.lastOpened ?? 0);
  }
  function m(y) {
    const I = ut.value[y]?.lastOpened;
    if (!I) return "";
    const f = Math.floor((Date.now() - I) / 864e5);
    return f <= 0 ? "heute" : f === 1 ? "gestern" : f < 31 ? `vor ${f} Tagen` : new Date(I).toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" });
  }
  return { usage: ut, recordOpened: c, usageOf: _, byUsage: o, lastOpenedLabel: m };
}
const X_ = {
  key: 0,
  class: "loading-state"
}, Q_ = {
  key: 1,
  class: "view-component-wrapper"
}, j_ = {
  key: 2,
  class: "edit-component-wrapper"
}, e1 = {
  key: 3,
  class: "no-layout-message"
}, n1 = { class: "no-layout-message__text" }, t1 = { key: 0 }, r1 = { key: 1 }, i1 = { key: 2 }, o1 = /* @__PURE__ */ Ge({
  __name: "LayoutRenderer",
  props: {
    pageId: {},
    viewMode: { type: Boolean }
  },
  emits: ["openWidgetSettings", "removeWidget"],
  setup(c, { emit: _ }) {
    const o = c, m = _, y = xe(Ii), I = xe(er), f = Z(null), x = Z(null), b = zs(null), d = zs(null), p = Z(0), V = Z(!0), B = (re) => {
      m("openWidgetSettings", re);
    }, U = (re) => {
      m("removeWidget", re);
    };
    let z = 0;
    const G = async () => {
      const re = ++z;
      if (V.value = !0, await Sr(), re === z) {
        if (o.pageId && I) {
          const ee = I.getPage(o.pageId);
          if (f.value = ee ?? null, ee?.layoutId && y) {
            const L = y.getLayout(ee.layoutId);
            x.value = L || null, o.viewMode ? (d.value = L?.component || null, b.value = null) : (b.value = L?.editor || null, d.value = null);
          } else
            b.value = null, d.value = null, x.value = null;
        }
        await new Promise((ee) => setTimeout(ee, 50)), re === z && (V.value = !1);
      }
    }, O = () => o.pageId ? I?.getPage(o.pageId) : void 0, C = ru(O);
    ln(C, () => {
      f.value = C.value ?? null;
    });
    const T = Cm(O, "layoutId");
    return ln(T, () => {
      p.value++, G();
    }), Xn(async () => {
      await Sr(), await G();
    }), (re, ee) => (g(), S("div", {
      class: "layout-renderer",
      style: Ot({
        backgroundColor: f.value?.backgroundColor || void 0,
        backgroundImage: f.value?.backgroundImage ? `url(${f.value.backgroundImage})` : void 0,
        backgroundSize: f.value?.backgroundSize || "cover",
        backgroundPosition: f.value?.backgroundPosition || "center",
        backgroundRepeat: f.value?.backgroundRepeat || "no-repeat"
      })
    }, [
      V.value ? (g(), S("div", X_, [...ee[0] || (ee[0] = [
        s("span", {
          class: "spinner",
          "aria-hidden": "true"
        }, null, -1),
        s("p", null, "Layout wird geladen…", -1)
      ])])) : o.viewMode && d.value && x.value ? (g(), S("div", Q_, [
        (g(), $e(Qn(d.value), {
          key: x.value.id || "view",
          "layout-settings": f.value?.layoutSettings
        }, null, 8, ["layout-settings"]))
      ])) : !o.viewMode && b.value && x.value ? (g(), S("div", j_, [
        (g(), $e(Qn(b.value), {
          key: x.value.id || "edit",
          "layout-settings": f.value?.layoutSettings,
          onOpenSettings: B,
          onRemoveWidget: U
        }, null, 40, ["layout-settings"]))
      ])) : (g(), S("div", e1, [
        s("p", n1, [
          E(h(Fe), {
            name: "warning",
            size: "lg",
            tone: "color-warn"
          }),
          f.value ? x.value ? (g(), S("span", i1, [
            ue(N(o.viewMode ? "Zu diesem Layout gibt es keine Darstellung." : "Zu diesem Layout gibt es keinen Editor.") + " ", 1),
            ee[1] || (ee[1] = s("br", null, null, -1)),
            s("small", null, "Layout: " + N(x.value.id), 1)
          ])) : (g(), S("span", r1, " Für „" + N(f.value.name || o.pageId) + '" ist kein Layout eingestellt. ', 1)) : (g(), S("span", t1, " Die Seite „" + N(o.pageId) + '" gibt es nicht. ', 1))
        ])
      ]))
    ], 4));
  }
}), xu = /* @__PURE__ */ Ke(o1, [["__scopeId", "data-v-965fd8c7"]]), a1 = {
  class: "floorplan",
  "aria-hidden": "true"
}, l1 = {
  key: 0,
  class: "floorplan__empty"
}, s1 = /* @__PURE__ */ Ge({
  __name: "BoardFloorplan",
  props: {
    items: {},
    typeById: {}
  },
  setup(c) {
    const _ = c;
    function o(y) {
      const I = (y ?? "").toLowerCase();
      return /chart|table|pivot|kpi|progress|timeline|filter|rss|weather/.test(I) ? "data" : /map|routing|image|video|vanta|svg|icon|mermaid|geo/.test(I) ? "visual" : "text";
    }
    const m = H(() => {
      const y = (_.items ?? []).filter(
        (d) => Number.isFinite(d.x) && Number.isFinite(d.y)
      );
      if (y.length === 0) return [];
      const I = Math.max(...y.map((d) => (d.x ?? 0) + (d.width ?? 1))), f = Math.max(...y.map((d) => (d.y ?? 0) + (d.height ?? 1))), x = I > 0 ? I : 1, b = f > 0 ? f : 1;
      return y.map((d) => ({
        key: d.id ?? `${d.x}-${d.y}`,
        family: o(_.typeById?.[d.id ?? ""]),
        style: {
          left: `${(d.x ?? 0) / x * 100}%`,
          top: `${(d.y ?? 0) / b * 100}%`,
          // minus the gutter, so neighbouring widgets stay visibly separate
          width: `calc(${Math.max((d.width ?? 1) / x * 100, 3)}% - 3px)`,
          height: `calc(${Math.max((d.height ?? 1) / b * 100, 6)}% - 3px)`
        }
      }));
    });
    return (y, I) => (g(), S("div", a1, [
      (g(!0), S(_e, null, Me(m.value, (f) => (g(), S("div", {
        key: f.key,
        class: Te(["floorplan__block", `floorplan__block--${f.family}`]),
        style: Ot(f.style)
      }, null, 6))), 128)),
      m.value.length === 0 ? (g(), S("span", l1, "keine Widgets")) : j("", !0)
    ]));
  }
}), da = /* @__PURE__ */ Ke(s1, [["__scopeId", "data-v-0eecd73b"]]), { parse: u1 } = JSON, { keys: d1 } = Object, xi = String, c1 = "string", Zs = {}, Su = "object", f1 = (c, _) => _, p1 = (c) => c instanceof xi ? xi(c) : c, g1 = (c, _) => typeof _ === c1 ? new xi(_) : _, v1 = (c, _, o, m) => (y) => {
  for (let I = d1(y), { length: f } = I, x = 0; x < f; x++) {
    const b = I[x], d = y[b];
    if (d instanceof xi) {
      const p = c[+d];
      typeof p === Su && !o.has(p) ? (o.add(p), y[b] = Zs, _.push({ o: y, k: b, r: p })) : y[b] = m.call(y, b, p);
    } else y[b] !== Zs && (y[b] = m.call(y, b, d));
  }
  return y;
}, h1 = (c, _) => {
  const o = u1(c, g1).map(p1), m = f1;
  let y = o[0];
  if (typeof y === Su && y) {
    const I = [], f = v1(o, I, /* @__PURE__ */ new Set(), m);
    y = f(y);
    let x = 0;
    for (; x < I.length; ) {
      const { o: b, k: d, r: p } = I[x++];
      b[d] = m.call(b, d, f(p));
    }
  }
  return m.call({ "": y }, "", y);
};
function m1(c) {
  if (c) {
    if (typeof c == "object") return c;
    if (typeof c == "string")
      try {
        const _ = JSON.parse(c);
        return Array.isArray(_) ? h1(c) : _;
      } catch {
        return;
      }
  }
}
function _1(c) {
  return typeof c.eClass == "string";
}
function b1(c) {
  if (!c || typeof c != "object") return;
  const _ = new Wm(), o = /* @__PURE__ */ new Map();
  for (const f of c.conections ?? []) {
    const x = new Pm();
    x.uid = f.uid, x.name = f.name, x.type = f.type, x.config = f.config ?? {}, _.connections.push(x), o.set(f.uid, x);
  }
  const m = /* @__PURE__ */ new Map();
  for (const f of c.datasources ?? []) {
    const x = new Mm();
    x.uid = f.uid, x.name = f.name, x.type = f.type, x.config = f.config ?? {};
    const b = o.get((f.config ?? {}).connection);
    b && (x.connection = b), _.datasources.push(x), m.set(f.uid, x);
  }
  const y = [];
  for (const f of c.variables ?? []) {
    const x = new Um();
    x.uid = f.id ?? f.uid ?? Math.random().toString(36).substring(7), x.name = f.name, x.type = f.type, x.scope = f.scope ?? "global", x.accessMode = f.accessMode ?? "external-writable", x.definition = f, _.variables.push(x), y.push({ entry: f, variable: x });
  }
  for (const f of c.eventMappings ?? []) {
    const x = new au();
    x.id = f.id, x.definition = f, _.eventMappings.push(x);
  }
  const I = new Nm();
  I.id = crypto.randomUUID(), I.name = "Board", _.board = I;
  for (const [f, x] of Object.entries(c.pages ?? {})) {
    const b = x?.info ?? {}, d = new Fm();
    d.id = b.id ?? f, d.name = b.name ?? "Seite", d.description = b.description, d.icon = b.icon, d.visibleInNavigation = b.visibleInNavigation ?? !0, d.layoutId = b.layoutId ?? b.layout?.id ?? "org.eclipse.daanse.board.app.ui.vue.layouts.base", d.layoutSettings = b.layoutSettings, d.backgroundColor = b.backgroundColor, d.backgroundImage = b.backgroundImage, d.backgroundSize = b.backgroundSize, d.backgroundPosition = b.backgroundPosition, d.backgroundRepeat = b.backgroundRepeat;
    for (const p of x?.widgets ?? []) {
      const V = new zm();
      V.uid = p.uid, V.type = p.type, V.config = p.config ?? {}, V.wrapperConfig = p.wrapperConfig ?? {};
      const B = m.get(p.config?.datasourceId);
      B && (V.datasource = B), d.widgets.push(V);
    }
    for (const p of x?.layout ?? []) {
      const V = new qm();
      V.id = p.id, V.x = p.x ?? 0, V.y = p.y ?? 0, V.z = p.z ?? 0, V.width = p.width ?? 300, V.height = p.height ?? 150, V.group = p.group, d.layout.push(V);
    }
    I.pages.push(d);
  }
  for (const { entry: f, variable: x } of y) {
    const b = f.pageId;
    b && (x.page = I.pages.toArray().find((d) => d.id === b));
  }
  return I.pages.size() > 0 && (I.defaultPage = I.pages.get(0)), _;
}
const y1 = Z();
function w1() {
  return y1;
}
const Cu = "workspace.json", k1 = "http://org.eclipse.daanse.board.app.lib.model.workspace#//Board";
function x1(c) {
  if (!c || typeof c != "object") return c;
  const _ = c;
  if (_.board || !Array.isArray(_.pages)) return c;
  const o = JSON.parse(
    JSON.stringify(_).replace(/"\/\/@pages\./g, '"//@board/@pages.')
  ), m = {
    eClass: k1,
    id: crypto.randomUUID(),
    /* Nothing in the old shape named the board; the pages were the boards. */
    name: "Board",
    pages: o.pages
  }, y = o.defaultPage;
  return y?.$ref?.includes("//@board/@pages.") && (m.defaultPage = y), delete o.pages, delete o.defaultPage, o.board = m, o;
}
function ia(c) {
  const _ = m1(c);
  if (_)
    try {
      if (!_1(_)) return b1(_);
      const o = new lu(su.createURI(Cu));
      return o.loadFromString(JSON.stringify(x1(_))), o.getContents().get(0);
    } catch {
      return;
    }
}
function S1() {
  const c = xe(Nn), _ = xe(Ai), o = xe(Ri), m = xe(uu), y = xe(pm), I = xe(vm);
  function f() {
    c.eventMappings.clear();
    for (const d of I?.getAllMappings() ?? []) {
      const p = new au();
      p.id = d.id, p.definition = d, c.eventMappings.push(p);
    }
  }
  function x() {
    f();
    const d = new lu(su.createURI(Cu));
    d.getContents().add(c);
    const p = d.saveToString(/* @__PURE__ */ new Map([[Gm, 2]]));
    return d.getContents().clear(), p;
  }
  function b(d) {
    const p = ia(d);
    if (!p) return [];
    c.connections.clear();
    for (const B of p.connections.toArray()) c.connections.push(B);
    c.datasources.clear();
    for (const B of p.datasources.toArray()) c.datasources.push(B);
    c.board = p.board, c.variables.clear();
    for (const B of p.variables.toArray()) c.variables.push(B);
    c.eventMappings.clear();
    for (const B of p.eventMappings.toArray()) c.eventMappings.push(B);
    _?.rebuildLive(), o?.rebuildLive(), m?.rebuildLive(), I?.setAllMappings(
      c.eventMappings.toArray().map((B) => B.definition)
    );
    const V = [];
    for (const B of c.board?.pages.toArray() ?? [])
      y?.initilazeVariableWrappers(
        B.widgets.toArray().map((U) => ({
          uid: U.uid,
          type: U.type,
          config: U.config,
          wrapperConfig: U.wrapperConfig
        }))
      ), V.push(B.id);
    return V;
  }
  return { save: x, load: b };
}
function C1(c) {
  const _ = c.split(".").filter(Boolean);
  return (_[_.length - 1] ?? c).replace(/widget$/i, "") || c;
}
function ca(c, _, o, m) {
  const y = Array.isArray(o) ? o : [], I = Array.isArray(m) ? m : [], f = {};
  for (const d of I)
    d?.uid && d.type && (f[d.uid] = d.type);
  const x = new Set(
    I.map((d) => d?.config?.datasourceId).filter((d) => !!d)
  ), b = [...new Set(I.map((d) => C1(d?.type ?? "")).filter(Boolean))];
  return {
    id: c,
    name: _?.name || "Unbenanntes Board",
    description: _?.description ?? "",
    items: y,
    typeById: f,
    widgetCount: I.length,
    sourceCount: x.size,
    kinds: b
  };
}
const $1 = { class: "storage" }, I1 = {
  class: "tree",
  "aria-label": "Speicher"
}, A1 = {
  class: "tree__body",
  role: "tree"
}, R1 = ["aria-expanded", "onClick"], E1 = { class: "row__twist" }, V1 = { class: "row__name" }, T1 = { class: "row__meta" }, O1 = ["onClick"], L1 = { class: "row__name" }, D1 = { class: "row__meta" }, B1 = {
  key: 0,
  class: "row row--hint"
}, W1 = ["onClick"], P1 = {
  key: 0,
  class: "row row--hint"
}, M1 = { class: "detail" }, U1 = {
  key: 0,
  class: "detail__failure",
  role: "alert"
}, N1 = { class: "detail__head" }, F1 = { class: "detail__facts" }, z1 = { class: "create__hint" }, q1 = { class: "detail__head" }, G1 = { class: "detail__name" }, H1 = {
  key: 0,
  class: "detail__badge"
}, K1 = { class: "detail__facts" }, Y1 = {
  key: 0,
  class: "boards"
}, Z1 = { class: "board__text" }, J1 = { class: "board__name" }, X1 = { class: "board__facts" }, Q1 = {
  key: 0,
  class: "board__kinds"
}, j1 = {
  key: 1,
  class: "detail__hint"
}, e0 = {
  key: 4,
  class: "detail__hint"
}, n0 = {
  key: 5,
  class: "detail__hint"
}, t0 = /* @__PURE__ */ Ge({
  __name: "WorkspaceStorage",
  emits: ["restored"],
  setup(c, { emit: _ }) {
    const o = _, m = xe(Ym), { save: y, load: I } = S1(), f = Z([]), x = Z({}), b = Z(/* @__PURE__ */ new Set()), d = Z(), p = Z(), V = Z(""), B = Z(""), U = Z(!1), z = w1(), G = Z(!1), O = Z("");
    function C(q) {
      return typeof q == "string" ? q : q?.message ?? String(q);
    }
    function T(q) {
      return q.name ?? String(q.uri).split("/").pop() ?? String(q.uri);
    }
    function re(q) {
      return String(q.uri);
    }
    function ee(q, $) {
      const A = new URL(String(q.uri));
      return A.pathname = `/${$}.json`, A;
    }
    function L(q) {
      const $ = q ? Object.getPrototypeOf(q)?.constructor : void 0;
      return $ && "type" in $ ? String($.type) : "";
    }
    function K(q) {
      return typeof q?.create == "function";
    }
    function he(q) {
      const $ = L(q);
      if (!(!$ || !m?.isViewForRepoType($)))
        return m.getViewForRepoType($);
    }
    const Ue = H(() => he(d.value));
    async function Qe() {
      f.value = await m?.getAvailableReposetories() ?? [];
      const q = f.value[0];
      q && b.value.size === 0 && (d.value = q, await je(q));
    }
    async function je(q) {
      b.value.add(re(q)), b.value = new Set(b.value), await en(q);
    }
    async function en(q) {
      B.value = "", U.value = !0;
      try {
        x.value = { ...x.value, [re(q)]: await q.findAll() };
      } catch ($) {
        x.value = { ...x.value, [re(q)]: [] }, B.value = `Einträge konnten nicht gelesen werden: ${C($)}`;
      } finally {
        U.value = !1;
      }
    }
    function ce(q) {
      d.value = q, G.value = !1, b.value.has(re(q)) ? (b.value.delete(re(q)), b.value = new Set(b.value)) : je(q);
    }
    function fe(q) {
      const $ = x.value[re(q)] ?? [], A = V.value.trim().toLowerCase();
      return [...A ? $.filter((be) => T(be).toLowerCase().includes(A)) : $].sort((be, Ve) => T(be).localeCompare(T(Ve)));
    }
    function oe(q, $) {
      d.value = q, p.value = $, G.value = !1, B.value = "";
    }
    function de(q) {
      return String(q.uri) === z.value?.entryUri;
    }
    function ae(q, $) {
      z.value = { placeUri: String(d.value?.uri), entryUri: String(q.uri), name: $ };
    }
    function X(q) {
      return ie(ia(q?.data));
    }
    function ie(q) {
      return (q?.board?.pages.toArray() ?? []).map(
        ($) => ca($.id, $, $.layout.toArray(), $.widgets.toArray())
      );
    }
    const me = H(() => X(p.value)), Be = H(() => ({
      boards: me.value.length,
      widgets: me.value.reduce((q, $) => q + $.widgetCount, 0),
      sources: me.value.reduce((q, $) => q + $.sourceCount, 0)
    }));
    function Y(q) {
      const $ = X(q);
      return $.length === 0 ? "leer" : `${$.length} ${$.length === 1 ? "Seite" : "Seiten"}`;
    }
    const Q = H(() => {
      if (!G.value) return { boards: 0, widgets: 0 };
      const q = ie(ia(y()));
      return {
        boards: q.length,
        widgets: q.reduce(($, A) => $ + A.widgetCount, 0)
      };
    });
    async function se(q) {
      B.value = "";
      try {
        const $ = await d.value?.getEntityByUri(q.uri), A = I($?.data ?? q.data);
        ae(q, T(q)), o("restored", A);
      } catch ($) {
        B.value = `Laden fehlgeschlagen: ${C($)}`;
      }
    }
    async function Oe(q) {
      const $ = d.value;
      if ($) {
        B.value = "";
        try {
          await $.update({ ...q, data: y() }), ae(q, T(q)), await en($), p.value = fe($).find((A) => String(A.uri) === String(q.uri));
        } catch (A) {
          B.value = `Speichern fehlgeschlagen: ${C(A)}`;
        }
      }
    }
    function Xe(q) {
      d.value = q, p.value = void 0, G.value = !0, O.value = "", B.value = "";
    }
    async function Rn() {
      const q = d.value, $ = O.value.trim();
      if (!(!q || !$)) {
        B.value = "";
        try {
          const A = { name: $, uri: ee(q, $), data: y() };
          await q.create(A), ae(A, $), await je(q), G.value = !1, p.value = fe(q).find((M) => T(M) === $);
        } catch (A) {
          B.value = `Anlegen fehlgeschlagen: ${C(A)}`;
        }
      }
    }
    async function ct(q) {
      const $ = d.value;
      if ($) {
        B.value = "";
        try {
          await $.delete(q), de(q) && (z.value = void 0), p.value === q && (p.value = void 0), await en($);
        } catch (A) {
          B.value = `Löschen fehlgeschlagen: ${C(A)}`;
        }
      }
    }
    function En(q) {
      const $ = typeof q.data == "string" ? q.data : JSON.stringify(q.data), A = URL.createObjectURL(new Blob([$], { type: "application/json" })), M = document.createElement("a");
      M.href = A, M.download = `${T(q)}.json`, M.click(), URL.revokeObjectURL(A);
    }
    return Xn(Qe), ln(() => m, Qe), (q, $) => (g(), S("div", $1, [
      s("aside", I1, [
        Qt(s("input", {
          "onUpdate:modelValue": $[0] || ($[0] = (A) => V.value = A),
          class: "tree__search",
          type: "search",
          placeholder: "Stände filtern",
          "aria-label": "Stände filtern"
        }, null, 512), [
          [ta, V.value]
        ]),
        s("div", A1, [
          (g(!0), S(_e, null, Me(f.value, (A) => (g(), S(_e, {
            key: re(A)
          }, [
            s("button", {
              type: "button",
              role: "treeitem",
              "aria-expanded": b.value.has(re(A)),
              class: Te(["row", "row--place", { on: d.value === A && !p.value }]),
              onClick: (M) => ce(A)
            }, [
              s("span", E1, N(b.value.has(re(A)) ? "▾" : "▸"), 1),
              s("span", V1, N(A.name), 1),
              s("span", T1, N((x.value[re(A)] ?? []).length), 1)
            ], 10, R1),
            b.value.has(re(A)) ? (g(), S(_e, { key: 0 }, [
              (g(!0), S(_e, null, Me(fe(A), (M) => (g(), S("button", {
                key: String(M.uri),
                type: "button",
                role: "treeitem",
                class: Te(["row", "row--entry", { on: p.value === M }]),
                onClick: (be) => oe(A, M)
              }, [
                s("span", {
                  class: Te(["row__dot", { open: de(M) }]),
                  "aria-hidden": "true"
                }, null, 2),
                s("span", L1, N(T(M)), 1),
                s("span", D1, N(Y(M)), 1)
              ], 10, O1))), 128)),
              fe(A).length === 0 ? (g(), S("p", B1, N(V.value ? "Nichts gefunden" : "Noch kein Stand"), 1)) : j("", !0),
              K(A) ? (g(), S("button", {
                key: 1,
                type: "button",
                class: "row row--add",
                onClick: (M) => Xe(A)
              }, [...$[8] || ($[8] = [
                s("span", { class: "row__twist" }, "＋", -1),
                s("span", { class: "row__name" }, "Aktuellen Stand ablegen…", -1)
              ])], 8, W1)) : j("", !0)
            ], 64)) : j("", !0)
          ], 64))), 128)),
          f.value.length ? j("", !0) : (g(), S("p", P1, "Keine Speicherorte eingerichtet."))
        ])
      ]),
      s("section", M1, [
        B.value ? (g(), S("p", U1, N(B.value), 1)) : j("", !0),
        G.value ? (g(), S(_e, { key: 1 }, [
          s("header", N1, [
            $[9] || ($[9] = s("h2", { class: "detail__name" }, "Neuen Stand ablegen", -1)),
            s("span", F1, "in " + N(d.value?.name), 1)
          ]),
          s("form", {
            class: "create",
            onSubmit: an(Rn, ["prevent"])
          }, [
            $[12] || ($[12] = s("label", {
              class: "create__label",
              for: "storage-name"
            }, "Name", -1)),
            Qt(s("input", {
              id: "storage-name",
              "onUpdate:modelValue": $[1] || ($[1] = (A) => O.value = A),
              class: "create__input",
              type: "text",
              placeholder: "z. B. bodenfeuchte"
            }, null, 512), [
              [ta, O.value]
            ]),
            E(h(we), {
              intent: "primary",
              size: "sm",
              type: "submit",
              disabled: !O.value.trim()
            }, {
              default: ne(() => [...$[10] || ($[10] = [
                ue("Ablegen", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            E(h(we), {
              size: "sm",
              onClick: $[2] || ($[2] = (A) => G.value = !1)
            }, {
              default: ne(() => [...$[11] || ($[11] = [
                ue("Abbrechen", -1)
              ])]),
              _: 1
            }),
            s("p", z1, " Abgelegt wird der gesamte Arbeitsstand: " + N(Q.value.boards) + " " + N(Q.value.boards === 1 ? "Seite" : "Seiten") + " mit " + N(Q.value.widgets) + " Widgets, dazu Verbindungen, Datenquellen und Variablen. ", 1)
          ], 32)
        ], 64)) : Ue.value && !p.value ? (g(), $e(Qn(Ue.value), {
          key: 2,
          repo: d.value,
          context: x.value[re(d.value)],
          onClose: $[3] || ($[3] = (A) => en(d.value))
        }, null, 40, ["repo", "context"])) : p.value ? (g(), S(_e, { key: 3 }, [
          s("header", q1, [
            s("h2", G1, N(T(p.value)), 1),
            de(p.value) ? (g(), S("span", H1, "geladen")) : j("", !0),
            s("span", K1, N(d.value?.name) + " · " + N(Be.value.boards) + " " + N(Be.value.boards === 1 ? "Seite" : "Seiten") + " · " + N(Be.value.widgets) + " Widgets · " + N(Be.value.sources) + " Datenquellen ", 1),
            $[17] || ($[17] = s("span", { class: "detail__spacer" }, null, -1)),
            E(h(we), {
              intent: "primary",
              size: "sm",
              onClick: $[4] || ($[4] = (A) => se(p.value))
            }, {
              default: ne(() => [...$[13] || ($[13] = [
                ue("Laden", -1)
              ])]),
              _: 1
            }),
            K(d.value) ? (g(), $e(h(we), {
              key: 1,
              size: "sm",
              title: "Aktuellen Arbeitsstand hierhin schreiben",
              onClick: $[5] || ($[5] = (A) => Oe(p.value))
            }, {
              default: ne(() => [...$[14] || ($[14] = [
                ue(" Überschreiben ", -1)
              ])]),
              _: 1
            })) : j("", !0),
            E(h(we), {
              size: "sm",
              onClick: $[6] || ($[6] = (A) => En(p.value))
            }, {
              default: ne(() => [...$[15] || ($[15] = [
                ue("Herunterladen", -1)
              ])]),
              _: 1
            }),
            K(d.value) ? (g(), $e(h(we), {
              key: 2,
              intent: "danger",
              size: "sm",
              onClick: $[7] || ($[7] = (A) => ct(p.value))
            }, {
              default: ne(() => [...$[16] || ($[16] = [
                ue(" Löschen ", -1)
              ])]),
              _: 1
            })) : j("", !0)
          ]),
          me.value.length ? (g(), S("div", Y1, [
            (g(!0), S(_e, null, Me(me.value, (A) => (g(), S("article", {
              key: A.id,
              class: "board"
            }, [
              E(da, {
                items: A.items,
                "type-by-id": A.typeById
              }, null, 8, ["items", "type-by-id"]),
              s("div", Z1, [
                s("h3", J1, N(A.name), 1),
                s("p", X1, N(A.widgetCount) + " Widgets · " + N(A.sourceCount) + " " + N(A.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1),
                A.kinds.length ? (g(), S("p", Q1, N(A.kinds.join(" · ")), 1)) : j("", !0)
              ])
            ]))), 128))
          ])) : (g(), S("p", j1, " In diesem Stand liegt kein Board - er enthält nur Verbindungen, Quellen oder Variablen. "))
        ], 64)) : U.value ? (g(), S("p", e0, "Wird gelesen…")) : (g(), S("p", n0, "Wähle links einen Stand, um zu sehen, was darin liegt."))
      ])
    ]));
  }
}), r0 = /* @__PURE__ */ Ke(t0, [["__scopeId", "data-v-3b03814f"]]), i0 = { class: "boards" }, o0 = { class: "boards__panel" }, a0 = { class: "boards__bar" }, l0 = {
  class: "boards__views",
  role: "tablist",
  "aria-label": "Ansicht"
}, s0 = ["aria-selected"], u0 = ["aria-selected"], d0 = { class: "boards__body" }, c0 = {
  key: 0,
  class: "boards__empty"
}, f0 = { class: "boards__empty-actions" }, p0 = {
  key: 1,
  class: "single"
}, g0 = ["aria-label", "onKeydown"], v0 = {
  class: "single__icon",
  "aria-hidden": "true"
}, h0 = { class: "single__text" }, m0 = { class: "single__name" }, _0 = {
  key: 0,
  class: "single__desc"
}, b0 = { class: "single__meta" }, y0 = { class: "single__actions" }, w0 = /* @__PURE__ */ Ge({
  __name: "BoardsHome",
  props: {
    pageRepo: {},
    layoutRepo: {}
  },
  setup(c) {
    const _ = c, o = $i(), m = Cr(), { byUsage: y } = ua(), I = xe(Nn), f = gn(I, (C) => C.board?.pages), x = H(() => (f.value, I.board)), b = Z(m.query.view === "storage" ? "storage" : "recent"), d = H(() => {
      f.value;
      const C = _.pageRepo;
      return C ? C.getAllPageIds().slice().sort(y).map(
        (T) => ca(
          T,
          C.getPage(T),
          C.getPage(T)?.layout?.toArray() ?? [],
          C.getPage(T)?.widgets?.toArray() ?? []
        )
      ) : [];
    }), p = H(() => ({
      pages: d.value.length,
      widgets: d.value.reduce((C, T) => C + T.widgetCount, 0),
      sources: new Set(d.value.flatMap((C) => C.kinds)).size
    })), V = H(
      () => _.pageRepo?.getDefaultPage()?.id ?? d.value[0]?.id
    );
    function B(C) {
      o.push(`/page/${C}`);
    }
    function U() {
      const C = V.value;
      C && B(C);
    }
    function z() {
      const C = _.pageRepo;
      if (!C || !_.layoutRepo) return;
      const T = sa();
      C.registerPage({
        id: T,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), o.push(`/page/${T}/edit`);
    }
    function G() {
      b.value = "storage";
    }
    function O(C) {
      const T = _.pageRepo?.getDefaultPage()?.id ?? C[0];
      T ? o.push(`/page/${T}`) : b.value = "recent";
    }
    return (C, T) => (g(), S("div", i0, [
      s("div", o0, [
        s("header", a0, [
          s("div", l0, [
            s("button", {
              type: "button",
              role: "tab",
              "aria-selected": b.value === "recent",
              class: Te(["boards__view", { on: b.value === "recent" }]),
              onClick: T[0] || (T[0] = (re) => b.value = "recent")
            }, " Oft benutzt ", 10, s0),
            s("button", {
              type: "button",
              role: "tab",
              "aria-selected": b.value === "storage",
              class: Te(["boards__view", { on: b.value === "storage" }]),
              onClick: T[1] || (T[1] = (re) => b.value = "storage")
            }, " Speicher ", 10, u0)
          ])
        ]),
        s("div", d0, [
          b.value === "recent" && d.value.length === 0 ? (g(), S("div", c0, [
            E(da, {
              class: "boards__empty-plan",
              items: [
                { id: "a", x: 0, y: 0, width: 2, height: 1 },
                { id: "b", x: 2, y: 0, width: 1, height: 2 },
                { id: "c", x: 0, y: 1, width: 1, height: 1 },
                { id: "d", x: 1, y: 1, width: 1, height: 1 }
              ],
              "type-by-id": { a: "chart", b: "map", c: "table", d: "text" }
            }),
            T[4] || (T[4] = s("h2", { class: "boards__empty-title" }, "Noch kein Board", -1)),
            T[5] || (T[5] = s("p", { class: "boards__empty-text" }, " Ein Board besteht aus Seiten, auf denen Widgets über deinen Datenquellen liegen. Lege eines an oder öffne einen gespeicherten Arbeitsstand. ", -1)),
            s("div", f0, [
              E(h(we), {
                intent: "primary",
                size: "sm",
                onClick: z
              }, {
                default: ne(() => [...T[2] || (T[2] = [
                  ue("Board anlegen", -1)
                ])]),
                _: 1
              }),
              E(h(we), {
                size: "sm",
                onClick: G
              }, {
                default: ne(() => [...T[3] || (T[3] = [
                  ue("Aus Speicher öffnen", -1)
                ])]),
                _: 1
              })
            ])
          ])) : b.value === "recent" ? (g(), S("div", p0, [
            T[7] || (T[7] = s("h2", { class: "single__heading" }, "Geöffnet", -1)),
            s("article", {
              class: "single__card",
              tabindex: "0",
              role: "button",
              "aria-label": `Board ${x.value?.name ?? ""} öffnen`,
              onClick: U,
              onKeydown: [
                jt(U, ["enter"]),
                jt(an(U, ["prevent"]), ["space"])
              ]
            }, [
              s("span", v0, [
                E(h(Fe), {
                  name: x.value?.icon || "dashboard",
                  size: "lg"
                }, null, 8, ["name"])
              ]),
              s("div", h0, [
                s("h3", m0, N(x.value?.name || "Board"), 1),
                x.value?.description ? (g(), S("p", _0, N(x.value.description), 1)) : j("", !0),
                s("p", b0, N(p.value.pages) + " " + N(p.value.pages === 1 ? "Seite" : "Seiten") + " · " + N(p.value.widgets) + " " + N(p.value.widgets === 1 ? "Widget" : "Widgets"), 1)
              ]),
              s("div", y0, [
                E(h(we), {
                  intent: "primary",
                  size: "sm",
                  onClick: an(U, ["stop"])
                }, {
                  default: ne(() => [...T[6] || (T[6] = [
                    ue("Öffnen", -1)
                  ])]),
                  _: 1
                })
              ])
            ], 40, g0),
            T[8] || (T[8] = s("p", { class: "single__note" }, " Ein Arbeitsstand hält genau ein Board. Ein anderes bekommst du, indem du im Speicher einen anderen Stand öffnest; die Seiten dieses Boards liegen im Bereich „Seiten“. ", -1))
          ])) : (g(), $e(r0, {
            key: 2,
            onRestored: O
          }))
        ])
      ])
    ]));
  }
}), k0 = /* @__PURE__ */ Ke(w0, [["__scopeId", "data-v-86d874a3"]]), x0 = { class: "report-container" }, S0 = /* @__PURE__ */ Ge({
  __name: "ViewReport",
  props: ["params"],
  setup(c) {
    const _ = c, o = Cr(), m = xe(er), y = xe(Ii), I = H(() => _.params?.pageid ?? o.params.pageid ?? ""), { recordOpened: f } = ua();
    return ln(I, (x) => f(x), { immediate: !0 }), (x, b) => (g(), S("div", x0, [
      I.value ? (g(), $e(xu, {
        key: 0,
        pageId: I.value,
        viewMode: !0
      }, null, 8, ["pageId"])) : (g(), $e(k0, {
        key: 1,
        "page-repo": h(m),
        "layout-repo": h(y)
      }, null, 8, ["page-repo", "layout-repo"]))
    ]));
  }
}), Js = /* @__PURE__ */ Ke(S0, [["__scopeId", "data-v-3ecae506"]]), C0 = { boards: 0, widgets: 0 };
function $u() {
  const c = xe(er);
  function _() {
    const y = {};
    if (!c) return y;
    for (const I of c.getAllPageIds()) {
      const f = /* @__PURE__ */ new Set();
      for (const x of c.getPage(I)?.widgets?.toArray() ?? []) {
        const b = x.datasource?.uid;
        if (!b) continue;
        const d = y[b] ??= { boards: 0, widgets: 0 };
        d.widgets++, f.add(b);
      }
      for (const x of f) y[x].boards++;
    }
    return y;
  }
  function o(y) {
    return _()[y] ?? C0;
  }
  function m(y) {
    if (!y.widgets) return "";
    const I = `${y.boards} ${y.boards === 1 ? "Board" : "Boards"}`, f = `${y.widgets} ${y.widgets === 1 ? "Widget" : "Widgets"}`;
    return `${I} · ${f}`;
  }
  return { usageByDatasource: _, usageOf: o, usageLabel: m };
}
const $0 = {
  key: 0,
  class: "pick"
}, I0 = { class: "pick__lead" }, A0 = {
  key: 0,
  class: "pick__rubric"
}, R0 = { class: "tiles" }, E0 = ["onClick"], V0 = { class: "tile__head" }, T0 = { class: "tile__name" }, O0 = {
  key: 0,
  class: "tile__what"
}, L0 = {
  key: 1,
  class: "fill"
}, D0 = { class: "chosen" }, B0 = {
  class: "chosen__icon",
  "aria-hidden": "true"
}, W0 = { class: "chosen__text" }, P0 = { class: "chosen__name" }, M0 = {
  key: 0,
  class: "chosen__what"
}, U0 = { class: "fill__fields" }, N0 = /* @__PURE__ */ Ge({
  __name: "CreateWizard",
  props: /* @__PURE__ */ jn({
    title: {},
    lead: {},
    groups: {},
    summaryOf: { type: Function },
    iconOf: { type: Function },
    ready: { type: Boolean },
    createLabel: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {},
    type: { required: !0 },
    typeModifiers: {}
  }),
  emits: /* @__PURE__ */ jn(["create"], ["update:modelValue", "update:type"]),
  setup(c, { emit: _ }) {
    const o = wt(c, "modelValue"), m = wt(c, "type"), y = c, I = _, f = Z(1);
    ln(o, (d) => {
      d && (f.value = 1);
    });
    const x = H(() => y.groups.filter((d) => d.types.length));
    function b(d) {
      m.value = d, f.value = 2;
    }
    return (d, p) => (g(), $e(h(yi), {
      modelValue: o.value,
      "onUpdate:modelValue": p[4] || (p[4] = (V) => o.value = V),
      title: c.title,
      size: "lg",
      onCancel: p[5] || (p[5] = (V) => o.value = !1)
    }, {
      actions: ne(() => [
        f.value === 2 ? (g(), $e(h(we), {
          key: 0,
          intent: "quiet",
          onClick: p[1] || (p[1] = (V) => f.value = 1)
        }, {
          default: ne(() => [...p[7] || (p[7] = [
            ue("Zurück", -1)
          ])]),
          _: 1
        })) : j("", !0),
        E(h(we), {
          intent: "quiet",
          onClick: p[2] || (p[2] = (V) => o.value = !1)
        }, {
          default: ne(() => [...p[8] || (p[8] = [
            ue("Abbrechen", -1)
          ])]),
          _: 1
        }),
        f.value === 2 ? (g(), $e(h(we), {
          key: 1,
          intent: "primary",
          disabled: !c.ready,
          onClick: p[3] || (p[3] = (V) => I("create"))
        }, {
          default: ne(() => [
            ue(N(c.createLabel ?? "Anlegen"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : j("", !0)
      ]),
      default: ne(() => [
        f.value === 1 ? (g(), S("div", $0, [
          s("p", I0, N(c.lead), 1),
          (g(!0), S(_e, null, Me(x.value, (V) => (g(), S("section", {
            key: V.label,
            class: "pick__group"
          }, [
            x.value.length > 1 ? (g(), S("h3", A0, N(V.label), 1)) : j("", !0),
            s("ul", R0, [
              (g(!0), S(_e, null, Me(V.types, (B) => (g(), S("li", { key: B }, [
                s("button", {
                  type: "button",
                  class: Te(["tile", { "tile--on": m.value === B }]),
                  onClick: (U) => b(B)
                }, [
                  s("span", V0, [
                    E(h(Fe), {
                      name: c.iconOf(B),
                      size: "sm",
                      class: "tile__icon"
                    }, null, 8, ["name"]),
                    s("span", T0, N(B), 1),
                    m.value === B ? (g(), $e(h(Fe), {
                      key: 0,
                      name: "check",
                      size: "sm",
                      class: "tile__check"
                    })) : j("", !0)
                  ]),
                  c.summaryOf(B) ? (g(), S("span", O0, N(c.summaryOf(B)), 1)) : j("", !0)
                ], 10, E0)
              ]))), 128))
            ])
          ]))), 128))
        ])) : (g(), S("div", L0, [
          s("header", D0, [
            s("span", B0, [
              E(h(Fe), {
                name: c.iconOf(m.value),
                size: "lg"
              }, null, 8, ["name"])
            ]),
            s("div", W0, [
              s("span", P0, N(m.value), 1),
              c.summaryOf(m.value) ? (g(), S("p", M0, N(c.summaryOf(m.value)), 1)) : j("", !0)
            ]),
            E(h(we), {
              intent: "quiet",
              size: "sm",
              onClick: p[0] || (p[0] = (V) => f.value = 1)
            }, {
              default: ne(() => [...p[6] || (p[6] = [
                ue("Anderer Typ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", U0, [
            eu(d.$slots, "setup", {}, void 0, !0)
          ])
        ]))
      ]),
      _: 3
    }, 8, ["modelValue", "title"]));
  }
}), Iu = /* @__PURE__ */ Ke(N0, [["__scopeId", "data-v-6d945def"]]), F0 = {
  key: 0,
  class: "model__none"
}, z0 = {
  key: 1,
  class: "model__none"
}, q0 = /* @__PURE__ */ Ge({
  __name: "ModelFields",
  props: {
    doc: {},
    config: {},
    omit: { default: () => [] }
  },
  setup(c) {
    const _ = c, o = /* @__PURE__ */ new Set(["name", "type", "uid"]), m = H(
      () => (_.doc?.features ?? []).filter(
        (f) => !o.has(f.name) && !_.omit.includes(f.name) && !f.many
      )
    );
    function y(f) {
      const x = f.name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/_/g, " ");
      return x.charAt(0).toUpperCase() + x.slice(1);
    }
    function I(f, x) {
      _.config[f.name] = x === "" ? void 0 : Number(x);
    }
    return (f, x) => c.doc ? m.value.length ? (g(!0), S(_e, { key: 2 }, Me(m.value, (b) => (g(), S(_e, {
      key: b.name
    }, [
      b.type === "boolean" ? (g(), $e(h(iu), {
        key: 0,
        label: y(b),
        hint: b.documentation,
        stacked: ""
      }, {
        default: ne(() => [
          E(h(la), {
            "model-value": !!c.config[b.name],
            "onUpdate:modelValue": (d) => c.config[b.name] = d
          }, null, 8, ["model-value", "onUpdate:modelValue"])
        ]),
        _: 2
      }, 1032, ["label", "hint"])) : b.type === "number" ? (g(), $e(h(rn), {
        key: 1,
        "model-value": c.config[b.name] ?? "",
        label: y(b),
        hint: b.documentation,
        required: !b.optional,
        type: "number",
        stacked: "",
        "onUpdate:modelValue": (d) => I(b, d)
      }, null, 8, ["model-value", "label", "hint", "required", "onUpdate:modelValue"])) : (g(), $e(h(rn), {
        key: 2,
        "model-value": c.config[b.name] ?? "",
        label: y(b),
        hint: b.documentation,
        required: !b.optional,
        type: /url|uri|endpoint/i.test(b.name) ? "url" : "text",
        stacked: "",
        "onUpdate:modelValue": (d) => c.config[b.name] = d
      }, null, 8, ["model-value", "label", "hint", "required", "type", "onUpdate:modelValue"]))
    ], 64))), 128)) : (g(), S("p", z0, " Dieser Typ braucht außer dem Namen nichts weiter. ")) : (g(), S("p", F0, " Dieser Typ bringt kein Modell mit — die Felder füllst du nach dem Anlegen im Editor aus. "));
  }
}), Au = /* @__PURE__ */ Ke(q0, [["__scopeId", "data-v-deac0807"]]), G0 = { class: "tags" }, H0 = {
  key: 0,
  class: "tags__held"
}, K0 = {
  key: 1,
  class: "tags__offer"
}, Y0 = ["onMousedown"], Z0 = /* @__PURE__ */ Ge({
  __name: "TagInput",
  props: /* @__PURE__ */ jn({
    label: {},
    hint: {},
    known: { default: () => [] }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(c) {
    const _ = wt(c, "modelValue"), o = c, m = Z(""), y = H(() => {
      const b = m.value.trim().toLowerCase();
      return b ? o.known.filter((d) => d.includes(b) && !_.value.includes(d)).slice(0, 6) : [];
    });
    function I(b) {
      const d = b.trim().toLowerCase();
      if (!d || _.value.includes(d)) {
        m.value = "";
        return;
      }
      _.value = [..._.value, d], m.value = "";
    }
    function f(b) {
      _.value = _.value.filter((d) => d !== b);
    }
    function x(b) {
      if (b.key === "Enter" || b.key === ",") {
        b.preventDefault(), I(m.value);
        return;
      }
      b.key === "Backspace" && !m.value && _.value.length && (_.value = _.value.slice(0, -1));
    }
    return (b, d) => (g(), $e(h(iu), {
      label: c.label,
      hint: c.hint,
      stacked: ""
    }, {
      default: ne(() => [
        s("div", G0, [
          _.value.length ? (g(), S("div", H0, [
            (g(!0), S(_e, null, Me(_.value, (p) => (g(), $e(h(Vt), {
              key: p,
              tone: "accent",
              removable: "",
              onRemove: (V) => f(p)
            }, {
              default: ne(() => [
                ue(N(p), 1)
              ]),
              _: 2
            }, 1032, ["onRemove"]))), 128))
          ])) : j("", !0),
          E(h(rn), {
            modelValue: m.value,
            "onUpdate:modelValue": d[0] || (d[0] = (p) => m.value = p),
            placeholder: "Wort eingeben, Enter",
            stacked: "",
            onKeydown: x,
            onBlur: d[1] || (d[1] = (p) => I(m.value))
          }, null, 8, ["modelValue"]),
          y.value.length ? (g(), S("div", K0, [
            (g(!0), S(_e, null, Me(y.value, (p) => (g(), S("button", {
              key: p,
              type: "button",
              class: "tags__suggestion",
              onMousedown: an((V) => I(p), ["prevent"])
            }, N(p), 41, Y0))), 128))
          ])) : j("", !0)
        ])
      ]),
      _: 1
    }, 8, ["label", "hint"]));
  }
}), Ei = /* @__PURE__ */ Ke(Z0, [["__scopeId", "data-v-b6b361a8"]]), J0 = /* @__PURE__ */ Ge({
  __name: "NewConnectionDialog",
  props: {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ jn(["created"], ["update:modelValue"]),
  setup(c, { emit: _ }) {
    const o = wt(c, "modelValue"), m = _, y = xe(Ai), I = xe(Nn), f = gn(I, (ee) => ee.connections), x = Z(""), b = Z(""), d = Z(""), p = Z([]), V = Z({}), B = H(() => [
      { label: "Verbindungstypen", types: y.registeredConnections }
    ]), U = (ee) => bi(y.getConnectionIdentifiers(ee)?.Model)?.documentation, z = (ee) => y.getConnectionIdentifiers(ee)?.icon ?? "link", G = H(
      () => x.value ? bi(y.getConnectionIdentifiers(x.value)?.Model) : void 0
    ), O = H(() => {
      const ee = /* @__PURE__ */ new Set();
      for (const L of f.value)
        for (const K of L.tags ?? []) ee.add(K);
      return [...ee].sort();
    });
    ln(x, () => {
      V.value = {};
    }), ln(o, (ee) => {
      ee && (x.value = "", b.value = "", d.value = "", p.value = [], V.value = {});
    });
    const C = H(
      () => (G.value?.features ?? []).filter((ee) => !ee.optional && !["name", "type", "uid"].includes(ee.name)).filter((ee) => {
        const L = V.value[ee.name];
        return L == null || L === "";
      })
    ), T = H(() => !!x.value && !!b.value.trim() && !C.value.length);
    function re() {
      if (!T.value) return;
      const ee = y.createConnection(x.value, { ...V.value });
      ee.name = b.value.trim(), d.value.trim() && (ee.icon = d.value.trim());
      for (const L of p.value) ee.tags.add(L);
      try {
        y.saveConnection(ee);
      } catch (L) {
        console.warn(`${ee.uid} is not live yet:`, L);
      }
      o.value = !1, m("created", ee.uid);
    }
    return (ee, L) => (g(), $e(Iu, {
      modelValue: o.value,
      "onUpdate:modelValue": L[3] || (L[3] = (K) => o.value = K),
      type: x.value,
      "onUpdate:type": L[4] || (L[4] = (K) => x.value = K),
      title: "Verbindung anlegen",
      lead: "Womit soll gesprochen werden? Die Beschreibungen stammen aus den Modellen der Typen.",
      groups: B.value,
      "summary-of": U,
      "icon-of": z,
      ready: T.value,
      onCreate: re
    }, {
      setup: ne(() => [
        E(h(rn), {
          modelValue: b.value,
          "onUpdate:modelValue": L[0] || (L[0] = (K) => b.value = K),
          label: "Name",
          placeholder: "Wofür diese Verbindung steht",
          hint: "Unter diesem Namen wählst du die Verbindung später aus.",
          stacked: "",
          required: ""
        }, null, 8, ["modelValue"]),
        E(h(Ci), {
          modelValue: d.value,
          "onUpdate:modelValue": L[1] || (L[1] = (K) => d.value = K),
          label: "Symbol",
          fallback: z(x.value),
          hint: "Ohne eigenes Symbol steht hier das des Typs."
        }, null, 8, ["modelValue", "fallback"]),
        E(Ei, {
          modelValue: p.value,
          "onUpdate:modelValue": L[2] || (L[2] = (K) => p.value = K),
          label: "Schlagworte",
          hint: "Wofür diese Verbindung da ist — danach lässt sich später suchen.",
          known: O.value
        }, null, 8, ["modelValue", "known"]),
        E(Au, {
          doc: G.value,
          config: V.value
        }, null, 8, ["doc", "config"])
      ]),
      _: 1
    }, 8, ["modelValue", "type", "groups", "ready"]));
  }
}), X0 = {
  key: 0,
  class: "note note--warn"
}, Q0 = {
  key: 0,
  class: "note"
}, j0 = /* @__PURE__ */ Ge({
  __name: "NewDatasourceDialog",
  props: /* @__PURE__ */ jn({
    forConnection: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ jn(["created"], ["update:modelValue"]),
  setup(c, { emit: _ }) {
    const o = wt(c, "modelValue"), m = c, y = _, I = xe(Ri), f = xe(Nn), x = gn(f, (ce) => ce.connections), b = gn(f, (ce) => ce.datasources), d = Z(""), p = Z(""), V = Z(""), B = Z([]), U = Z(void 0), z = Z({}), G = H(() => I.registeredDatasources), O = (ce) => I.getDatasourceIdentifiers(ce)?.kind, C = H(() => [
      {
        label: "Aus einer Verbindung lesen",
        types: G.value.filter((ce) => O(ce) !== "composer")
      },
      {
        label: "Aus vorhandenen Datenquellen zusammensetzen",
        types: G.value.filter((ce) => O(ce) === "composer")
      }
    ]), T = (ce) => bi(I.getDatasourceIdentifiers(ce)?.Model)?.documentation, re = (ce) => I.getDatasourceIdentifiers(ce)?.icon ?? "database", ee = H(
      () => d.value ? bi(I.getDatasourceIdentifiers(d.value)?.Model) : void 0
    ), L = H(() => {
      const ce = /* @__PURE__ */ new Set();
      for (const fe of b.value)
        for (const oe of fe.tags ?? []) ce.add(oe);
      return [...ce].sort();
    }), K = H(
      () => (ee.value?.features ?? []).some((ce) => ce.name === "connection")
    ), he = H(() => {
      const ce = new Set(I.getDatasourceIdentifiers(d.value)?.connections ?? []);
      return x.value.map((fe) => ({
        label: fe.name || fe.uid,
        value: fe.uid,
        group: ce.size === 0 ? "Verbindungen" : ce.has(fe.type) ? "Passend zum Typ" : "Weitere"
      }));
    }), Ue = H(
      () => he.value.length > 0 && !he.value.some((ce) => ce.group === "Passend zum Typ") && (I.getDatasourceIdentifiers(d.value)?.connections ?? []).length > 0
    );
    ln(d, () => {
      z.value = {};
    }), ln(o, (ce) => {
      ce && (d.value = "", p.value = "", V.value = "", B.value = [], U.value = m.forConnection, z.value = {});
    });
    const Qe = H(() => {
      const ce = (ee.value?.features ?? []).filter((fe) => !fe.optional && !["name", "type", "uid", "connection"].includes(fe.name)).filter((fe) => {
        const oe = z.value[fe.name];
        return oe == null || oe === "";
      }).map((fe) => fe.name);
      return K.value && !U.value && ce.push("connection"), ce;
    }), je = H(() => !!d.value && !!p.value.trim() && !Qe.value.length);
    function en() {
      if (!je.value) return;
      const ce = { ...z.value };
      K.value && (ce.connection = U.value);
      const fe = I.createDatasource(d.value, ce);
      fe.name = p.value.trim(), V.value.trim() && (fe.icon = V.value.trim());
      for (const oe of B.value) fe.tags.add(oe);
      fe.connection = x.value.find((oe) => oe.uid === U.value);
      try {
        I.saveDatasource(fe);
      } catch (oe) {
        console.warn(`${fe.uid} is not live yet:`, oe);
      }
      o.value = !1, y("created", fe.uid);
    }
    return (ce, fe) => (g(), $e(Iu, {
      modelValue: o.value,
      "onUpdate:modelValue": fe[4] || (fe[4] = (oe) => o.value = oe),
      type: d.value,
      "onUpdate:type": fe[5] || (fe[5] = (oe) => d.value = oe),
      title: "Datenquelle anlegen",
      lead: "Was für Daten sollen gelesen werden? Die Beschreibungen stammen aus den Modellen der Typen.",
      groups: C.value,
      "summary-of": T,
      "icon-of": re,
      ready: je.value,
      onCreate: en
    }, {
      setup: ne(() => [
        E(h(rn), {
          modelValue: p.value,
          "onUpdate:modelValue": fe[0] || (fe[0] = (oe) => p.value = oe),
          label: "Name",
          placeholder: "Wofür diese Datenquelle steht",
          hint: "Unter diesem Namen wählst du die Datenquelle im Widget aus.",
          stacked: "",
          required: ""
        }, null, 8, ["modelValue"]),
        K.value ? (g(), S(_e, { key: 0 }, [
          he.value.length ? (g(), S(_e, { key: 1 }, [
            Ue.value ? (g(), S("p", Q0, " Keine der vorhandenen Verbindungen ist von diesem Typ vorgesehen. Du kannst trotzdem eine wählen — die Angabe ist ein Hinweis, keine Regel. ")) : j("", !0),
            E(h(Un), {
              modelValue: U.value,
              "onUpdate:modelValue": fe[1] || (fe[1] = (oe) => U.value = oe),
              label: "Verbindung",
              options: he.value,
              "value-key": "value",
              "label-key": "label",
              "group-key": "group",
              placeholder: "Verbindung wählen",
              hint: "Der Endpunkt, aus dem diese Quelle liest.",
              stacked: "",
              required: ""
            }, null, 8, ["modelValue", "options"])
          ], 64)) : (g(), S("p", X0, " Es gibt noch keine Verbindung. Lege zuerst eine an — ohne sie hat die Datenquelle nichts, woraus sie lesen kann. "))
        ], 64)) : j("", !0),
        E(h(Ci), {
          modelValue: V.value,
          "onUpdate:modelValue": fe[2] || (fe[2] = (oe) => V.value = oe),
          label: "Symbol",
          fallback: re(d.value),
          hint: "Ohne eigenes Symbol steht hier das des Typs."
        }, null, 8, ["modelValue", "fallback"]),
        E(Ei, {
          modelValue: B.value,
          "onUpdate:modelValue": fe[3] || (fe[3] = (oe) => B.value = oe),
          label: "Schlagworte",
          hint: "Wofür diese Datenquelle da ist — danach lässt sich später suchen.",
          known: L.value
        }, null, 8, ["modelValue", "known"]),
        E(Au, {
          doc: ee.value,
          config: z.value,
          omit: ["connection"]
        }, null, 8, ["doc", "config"])
      ]),
      _: 1
    }, 8, ["modelValue", "type", "groups", "ready"]));
  }
}), eb = /* @__PURE__ */ Ke(j0, [["__scopeId", "data-v-585727e2"]]), nb = ["onClick"], tb = /* @__PURE__ */ Ge({
  __name: "TreeMenu",
  props: {
    at: {},
    items: {}
  },
  emits: ["choose", "close"],
  setup(c, { emit: _ }) {
    const o = c, m = _, y = Z(), I = Z({ x: 0, y: 0 }), f = H(() => !!o.at && o.items.length > 0);
    ln(
      () => o.at,
      async (b) => {
        if (!b) return;
        I.value = { x: b.x, y: b.y }, await Sr();
        const d = y.value?.getBoundingClientRect();
        if (!d) return;
        const p = 8;
        I.value = {
          x: Math.min(b.x, window.innerWidth - d.width - p),
          y: Math.min(b.y, window.innerHeight - d.height - p)
        };
      }
    );
    function x(b) {
      b.key === "Escape" && m("close");
    }
    return ln(f, (b) => {
      b ? (window.addEventListener("keydown", x), window.addEventListener("scroll", () => m("close"), { once: !0, capture: !0 })) : window.removeEventListener("keydown", x);
    }), Si(() => window.removeEventListener("keydown", x)), (b, d) => (g(), $e(aa, { to: "body" }, [
      f.value ? (g(), S(_e, { key: 0 }, [
        s("div", {
          class: "menu__catch",
          onClick: d[0] || (d[0] = (p) => m("close")),
          onContextmenu: d[1] || (d[1] = an((p) => m("close"), ["prevent"]))
        }, null, 32),
        s("ul", {
          ref_key: "menu",
          ref: y,
          class: "menu",
          role: "menu",
          style: Ot({ left: `${I.value.x}px`, top: `${I.value.y}px` })
        }, [
          (g(!0), S(_e, null, Me(c.items, (p) => (g(), S("li", {
            key: p.id,
            class: Te({ menu__sep: p.separated })
          }, [
            s("button", {
              type: "button",
              role: "menuitem",
              class: Te(["menu__item", { "menu__item--danger": p.danger }]),
              onClick: (V) => m("choose", p.id)
            }, [
              p.icon ? (g(), $e(h(Fe), {
                key: 0,
                name: p.icon,
                size: "sm"
              }, null, 8, ["name"])) : j("", !0),
              s("span", null, N(p.label), 1)
            ], 10, nb)
          ], 2))), 128))
        ], 4)
      ], 64)) : j("", !0)
    ]));
  }
}), rb = /* @__PURE__ */ Ke(tb, [["__scopeId", "data-v-3e59dfe4"]]), ib = { class: "tree" }, ob = { class: "tree__head" }, ab = { class: "tree__search" }, lb = {
  key: 0,
  class: "tree__empty"
}, sb = {
  key: 1,
  class: "tree__list"
}, ub = ["onContextmenu"], db = ["title", "onClick"], cb = ["disabled", "onClick"], fb = { class: "row__name" }, pb = {
  key: 0,
  class: "row__what"
}, gb = {
  key: 1,
  class: "row__tag row__tag--more"
}, vb = { class: "row__what" }, hb = {
  key: 0,
  class: "tree__sources"
}, mb = ["onContextmenu"], _b = ["onClick"], bb = { class: "row__name" }, yb = { class: "row__what" }, wb = {
  key: 0,
  class: "row__tag row__tag--more"
}, kb = {
  key: 1,
  class: "row__usage"
}, xb = {
  key: 0,
  class: "tree__none"
}, Sb = { class: "confirm__title" }, Cb = { class: "confirm__text" }, $b = {
  key: 0,
  class: "confirm__text confirm__text--warn"
}, Ib = "\0composed", Zt = 2, Ab = /* @__PURE__ */ Ge({
  __name: "DataTree",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ jn(["findEndpoints", "view"], ["update:modelValue"]),
  setup(c, { emit: _ }) {
    const o = wt(c, "modelValue"), m = xe(Ai), y = xe(Nn), I = gn(y, (Y) => Y.connections), f = xe(Ri), x = gn(y, (Y) => Y.datasources), { usageByDatasource: b, usageLabel: d } = $u(), p = _, V = Z(""), B = Z(/* @__PURE__ */ new Set());
    function U(Y) {
      return !!Y && f.getDatasourceIdentifiers(Y)?.kind === "composer";
    }
    function z(Y, Q) {
      if (Y.icon) return Y.icon;
      const se = Y.type;
      return (Q === "connection" ? m.getConnectionIdentifiers(se)?.icon : f.getDatasourceIdentifiers(se)?.icon) ?? (Q === "connection" ? "link" : "database");
    }
    function G(Y) {
      const Q = Y.tags;
      return Q ? Array.isArray(Q) ? Q : typeof Q.toArray == "function" ? Q.toArray() : [...Q] : [];
    }
    const O = H(() => {
      const Y = b(), Q = V.value.trim().toLowerCase(), se = (...M) => !Q || M.some((be) => (be ?? "").toLowerCase().includes(Q)), Oe = (M) => x.value.filter((be) => be.connection?.uid === M).filter((be) => se(be.name, be.type, be.uid, ...G(be))).map((be) => ({
        uid: be.uid,
        name: be.name,
        type: be.type,
        usage: d(Y[be.uid] ?? { boards: 0, widgets: 0 }),
        icon: z(be, "source"),
        tags: G(be)
      })), Xe = I.value.map((M) => ({
        /* A connection just created has no type yet, and the row says so by
           showing none - the model has every feature optional for that reason. */
        uid: M.uid ?? "",
        name: M.name ?? "",
        type: M.type ?? "",
        orphan: !1,
        sources: Oe(M.uid),
        /* A connection stays visible while its own name matches, even with no
           source under it - otherwise searching would hide where to add one. */
        itself: se(M.name, M.type, M.uid, ...G(M)),
        icon: z(M, "connection"),
        tags: G(M)
      })), Rn = new Set(I.value.map((M) => M.uid)), ct = (M) => ({
        uid: M.uid,
        name: M.name,
        type: M.type,
        usage: d(Y[M.uid] ?? { boards: 0, widgets: 0 }),
        icon: z(M, "source"),
        tags: G(M)
      }), En = x.value.filter((M) => !M.connection || !Rn.has(M.connection.uid)).filter((M) => se(M.name, M.type, M.uid, ...G(M))), q = En.filter((M) => U(M.type)).map(ct), $ = En.filter((M) => !U(M.type)).map(ct), A = Xe.filter((M) => M.itself || M.sources.length);
      return q.length && A.push({
        uid: Ib,
        name: "Zusammengesetzt",
        type: "",
        orphan: !0,
        sources: q,
        itself: !0,
        icon: "layers",
        tags: []
      }), $.length && A.push({
        uid: "",
        name: "Ohne Verbindung",
        type: "",
        orphan: !0,
        sources: $,
        itself: !0,
        icon: "link_off",
        tags: []
      }), A;
    }), C = (Y) => !B.value.has(Y);
    function T(Y) {
      const Q = new Set(B.value);
      Q.has(Y) ? Q.delete(Y) : Q.add(Y), B.value = Q;
    }
    const re = (Y, Q) => o.value?.type === Y && o.value?.itemId === Q;
    function ee(Y, Q) {
      o.value = { type: Y, itemId: Q };
    }
    const L = Z(!1), K = Z(!1), he = Z(void 0);
    function Ue(Y) {
      ee("Connection", Y);
    }
    function Qe(Y) {
      ee("DataSource", Y);
    }
    const je = Z(void 0), en = Z({ what: "nothing" }), ce = H(() => {
      const Y = en.value;
      return Y.what === "connection" ? [
        { id: "edit", label: "Bearbeiten", icon: "edit" },
        { id: "add-source", label: "Datenquelle hier anlegen", icon: "add" },
        { id: "remove", label: "Verbindung löschen", icon: "delete", danger: !0, separated: !0 }
      ] : Y.what === "source" ? [
        { id: "edit", label: "Bearbeiten", icon: "edit" },
        { id: "preview", label: "Daten ansehen", icon: "table" },
        { id: "remove", label: "Datenquelle löschen", icon: "delete", danger: !0, separated: !0 }
      ] : [
        { id: "new-connection", label: "Verbindung anlegen", icon: "add_link" },
        { id: "new-source", label: "Datenquelle anlegen", icon: "add" }
      ];
    });
    function fe(Y, Q) {
      en.value = Q, je.value = { x: Y.clientX, y: Y.clientY };
    }
    function oe() {
      je.value = void 0;
    }
    function de(Y) {
      const Q = en.value;
      if (oe(), Y === "new-connection") return void (L.value = !0);
      if (Y === "new-source") return void (K.value = !0);
      if (Q.what === "connection") {
        Y === "edit" && ee("Connection", Q.uid), Y === "add-source" && (ee("Connection", Q.uid), he.value = Q.uid, K.value = !0), Y === "remove" && X("Connection", Q.uid);
        return;
      }
      Q.what === "source" && ((Y === "edit" || Y === "preview") && (ee("DataSource", Q.uid), p("view", Y === "preview" ? "preview" : "settings")), Y === "remove" && X("DataSource", Q.uid));
    }
    const ae = Z(void 0);
    function X(Y, Q) {
      ae.value = { type: Y, itemId: Q };
    }
    function ie() {
      const Y = ae.value;
      Y && (Y.type === "Connection" ? m.removeConnection(Y.itemId) : f.removeDatasource(Y.itemId), re(Y.type, Y.itemId) && (o.value = void 0), ae.value = void 0);
    }
    const me = H(() => {
      const Y = ae.value;
      return Y ? (Y.type === "Connection" ? I.value.find((se) => se.uid === Y.itemId) : x.value.find((se) => se.uid === Y.itemId))?.name ?? Y.itemId : "";
    }), Be = H(() => {
      const Y = ae.value;
      return !Y || Y.type !== "DataSource" ? "" : d(b()[Y.itemId] ?? { boards: 0, widgets: 0 });
    });
    return (Y, Q) => (g(), S(_e, null, [
      s("section", ib, [
        s("header", ob, [
          Q[10] || (Q[10] = s("h2", { class: "tree__title" }, "Verbindungen & Daten", -1)),
          E(h(we), {
            intent: "quiet",
            size: "sm",
            title: "Verbindung anlegen",
            onClick: Q[0] || (Q[0] = (se) => L.value = !0)
          }, {
            default: ne(() => [
              E(h(Fe), {
                name: "add_link",
                size: "sm"
              })
            ]),
            _: 1
          }),
          E(h(we), {
            intent: "quiet",
            size: "sm",
            title: "Datenquelle anlegen",
            onClick: Q[1] || (Q[1] = (se) => {
              he.value = void 0, K.value = !0;
            })
          }, {
            default: ne(() => [
              E(h(Fe), {
                name: "add",
                size: "sm"
              })
            ]),
            _: 1
          }),
          E(h(we), {
            intent: "quiet",
            size: "sm",
            title: "Endpunkte suchen",
            onClick: Q[2] || (Q[2] = (se) => p("findEndpoints"))
          }, {
            default: ne(() => [
              E(h(Fe), {
                name: "travel_explore",
                size: "sm"
              })
            ]),
            _: 1
          })
        ]),
        s("div", ab, [
          E(h(rn), {
            modelValue: V.value,
            "onUpdate:modelValue": Q[3] || (Q[3] = (se) => V.value = se),
            type: "search",
            placeholder: "Suchen…",
            stacked: ""
          }, null, 8, ["modelValue"])
        ]),
        s("div", {
          class: "tree__body",
          onContextmenu: Q[4] || (Q[4] = an((se) => fe(se, { what: "nothing" }), ["prevent"]))
        }, [
          O.value.length ? (g(), S("ul", sb, [
            (g(!0), S(_e, null, Me(O.value, (se) => (g(), S("li", {
              key: se.uid || "loose"
            }, [
              s("div", {
                class: Te(["row", "row--connection", { "row--on": re("Connection", se.uid) }]),
                onContextmenu: an((Oe) => fe(
                  Oe,
                  se.orphan ? { what: "nothing" } : { what: "connection", uid: se.uid, name: se.name }
                ), ["prevent", "stop"])
              }, [
                s("button", {
                  type: "button",
                  class: "row__twist",
                  title: C(se.uid) ? "Zuklappen" : "Aufklappen",
                  onClick: (Oe) => T(se.uid)
                }, [
                  E(h(Fe), {
                    name: C(se.uid) ? "expand_more" : "chevron_right",
                    size: "sm"
                  }, null, 8, ["name"])
                ], 8, db),
                s("button", {
                  type: "button",
                  class: "row__body",
                  disabled: se.orphan,
                  onClick: (Oe) => !se.orphan && ee("Connection", se.uid)
                }, [
                  E(h(Fe), {
                    name: se.icon ?? "link",
                    size: "sm",
                    class: "row__icon"
                  }, null, 8, ["name"]),
                  s("span", fb, N(se.name), 1),
                  se.type ? (g(), S("span", pb, N(se.type), 1)) : j("", !0),
                  (g(!0), S(_e, null, Me((se.tags ?? []).slice(0, Zt), (Oe) => (g(), S("span", {
                    key: Oe,
                    class: "row__tag"
                  }, N(Oe), 1))), 128)),
                  (se.tags?.length ?? 0) > Zt ? (g(), S("span", gb, " +" + N((se.tags?.length ?? 0) - Zt), 1)) : j("", !0),
                  s("span", vb, N(se.sources.length), 1)
                ], 8, cb),
                se.orphan ? j("", !0) : (g(), $e(h(we), {
                  key: 0,
                  intent: "quiet",
                  size: "sm",
                  title: "Verbindung löschen",
                  onClick: an((Oe) => X("Connection", se.uid), ["stop"])
                }, {
                  default: ne(() => [
                    E(h(Fe), {
                      name: "delete",
                      size: "sm"
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"]))
              ], 42, ub),
              C(se.uid) ? (g(), S("ul", hb, [
                (g(!0), S(_e, null, Me(se.sources, (Oe) => (g(), S("li", {
                  key: Oe.uid
                }, [
                  s("div", {
                    class: Te(["row", "row--source", { "row--on": re("DataSource", Oe.uid) }]),
                    onContextmenu: an((Xe) => fe(Xe, { what: "source", uid: Oe.uid, name: Oe.name }), ["prevent", "stop"])
                  }, [
                    Q[11] || (Q[11] = s("span", {
                      class: "row__twist row__twist--none",
                      "aria-hidden": "true"
                    }, null, -1)),
                    s("button", {
                      type: "button",
                      class: "row__body",
                      onClick: (Xe) => ee("DataSource", Oe.uid)
                    }, [
                      E(h(Fe), {
                        name: Oe.icon,
                        size: "sm",
                        class: "row__icon"
                      }, null, 8, ["name"]),
                      s("span", bb, N(Oe.name), 1),
                      s("span", yb, N(Oe.type), 1),
                      (g(!0), S(_e, null, Me(Oe.tags.slice(0, Zt), (Xe) => (g(), S("span", {
                        key: Xe,
                        class: "row__tag"
                      }, N(Xe), 1))), 128)),
                      Oe.tags.length > Zt ? (g(), S("span", wb, " +" + N(Oe.tags.length - Zt), 1)) : j("", !0),
                      Oe.usage ? (g(), S("span", kb, N(Oe.usage), 1)) : j("", !0)
                    ], 8, _b),
                    E(h(we), {
                      intent: "quiet",
                      size: "sm",
                      title: "Datenquelle löschen",
                      onClick: an((Xe) => X("DataSource", Oe.uid), ["stop"])
                    }, {
                      default: ne(() => [
                        E(h(Fe), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ], 42, mb)
                ]))), 128)),
                !se.sources.length && !se.orphan ? (g(), S("li", xb, " Keine Datenquelle an dieser Verbindung. ")) : j("", !0)
              ])) : j("", !0)
            ]))), 128))
          ])) : (g(), S("p", lb, [
            V.value ? (g(), S(_e, { key: 0 }, [
              ue("Nichts gefunden.")
            ], 64)) : (g(), S(_e, { key: 1 }, [
              ue("Noch keine Verbindung. Lege eine an, um Daten zu lesen.")
            ], 64))
          ]))
        ], 32)
      ]),
      E(rb, {
        at: je.value,
        items: ce.value,
        onChoose: de,
        onClose: oe
      }, null, 8, ["at", "items"]),
      E(J0, {
        modelValue: L.value,
        "onUpdate:modelValue": Q[5] || (Q[5] = (se) => L.value = se),
        onCreated: Ue
      }, null, 8, ["modelValue"]),
      E(eb, {
        modelValue: K.value,
        "onUpdate:modelValue": Q[6] || (Q[6] = (se) => K.value = se),
        "for-connection": he.value,
        onCreated: Qe
      }, null, 8, ["modelValue", "for-connection"]),
      E(h(yi), {
        "model-value": !!ae.value,
        size: "sm",
        "onUpdate:modelValue": Q[8] || (Q[8] = (se) => ae.value = void 0),
        onCancel: Q[9] || (Q[9] = (se) => ae.value = void 0)
      }, {
        header: ne(() => [
          E(h(Fe), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          s("h2", Sb, N(ae.value?.type === "Connection" ? "Verbindung löschen" : "Datenquelle löschen"), 1)
        ]),
        actions: ne(() => [
          E(h(we), {
            intent: "quiet",
            onClick: Q[7] || (Q[7] = (se) => ae.value = void 0)
          }, {
            default: ne(() => [...Q[12] || (Q[12] = [
              ue("Abbrechen", -1)
            ])]),
            _: 1
          }),
          E(h(we), {
            intent: "danger",
            onClick: ie
          }, {
            default: ne(() => [...Q[13] || (Q[13] = [
              ue("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: ne(() => [
          s("p", Cb, " „" + N(me.value) + "“ wird entfernt. Das lässt sich nicht rückgängig machen. ", 1),
          Be.value ? (g(), S("p", $b, " Verwendet in " + N(Be.value) + " — die lesen danach ins Leere. ", 1)) : j("", !0)
        ]),
        _: 1
      }, 8, ["model-value"])
    ], 64));
  }
}), Rb = /* @__PURE__ */ Ke(Ab, [["__scopeId", "data-v-b599ea25"]]);
var _i = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Eb = wr.exports, Xs;
function Vb() {
  return Xs || (Xs = 1, (function(c, _) {
    (function() {
      var o, m = "4.17.21", y = 200, I = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", x = "Invalid `variable` option passed into `_.template`", b = "__lodash_hash_undefined__", d = 500, p = "__lodash_placeholder__", V = 1, B = 2, U = 4, z = 1, G = 2, O = 1, C = 2, T = 4, re = 8, ee = 16, L = 32, K = 64, he = 128, Ue = 256, Qe = 512, je = 30, en = "...", ce = 800, fe = 16, oe = 1, de = 2, ae = 3, X = 1 / 0, ie = 9007199254740991, me = 17976931348623157e292, Be = NaN, Y = 4294967295, Q = Y - 1, se = Y >>> 1, Oe = [
        ["ary", he],
        ["bind", O],
        ["bindKey", C],
        ["curry", re],
        ["curryRight", ee],
        ["flip", Qe],
        ["partial", L],
        ["partialRight", K],
        ["rearg", Ue]
      ], Xe = "[object Arguments]", Rn = "[object Array]", ct = "[object AsyncFunction]", En = "[object Boolean]", q = "[object Date]", $ = "[object DOMException]", A = "[object Error]", M = "[object Function]", be = "[object GeneratorFunction]", Ve = "[object Map]", Vn = "[object Number]", kn = "[object Null]", Fn = "[object Object]", fa = "[object Promise]", Ru = "[object Proxy]", nr = "[object RegExp]", zn = "[object Set]", tr = "[object String]", $r = "[object Symbol]", Eu = "[object Undefined]", rr = "[object WeakMap]", Vu = "[object WeakSet]", ir = "[object ArrayBuffer]", Lt = "[object DataView]", Vi = "[object Float32Array]", Ti = "[object Float64Array]", Oi = "[object Int8Array]", Li = "[object Int16Array]", Di = "[object Int32Array]", Bi = "[object Uint8Array]", Wi = "[object Uint8ClampedArray]", Pi = "[object Uint16Array]", Mi = "[object Uint32Array]", Tu = /\b__p \+= '';/g, Ou = /\b(__p \+=) '' \+/g, Lu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, pa = /&(?:amp|lt|gt|quot|#39);/g, ga = /[&<>"']/g, Du = RegExp(pa.source), Bu = RegExp(ga.source), Wu = /<%-([\s\S]+?)%>/g, Pu = /<%([\s\S]+?)%>/g, va = /<%=([\s\S]+?)%>/g, Mu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Uu = /^\w*$/, Nu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ui = /[\\^$.*+?()[\]{}|]/g, Fu = RegExp(Ui.source), Ni = /^\s+/, zu = /\s/, qu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Gu = /\{\n\/\* \[wrapped with (.+)\] \*/, Hu = /,? & /, Ku = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Yu = /[()=,{}\[\]\/\s]/, Zu = /\\(\\)?/g, Ju = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ha = /\w*$/, Xu = /^[-+]0x[0-9a-f]+$/i, Qu = /^0b[01]+$/i, ju = /^\[object .+?Constructor\]$/, ed = /^0o[0-7]+$/i, nd = /^(?:0|[1-9]\d*)$/, td = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ir = /($^)/, rd = /['\n\r\u2028\u2029\\]/g, Ar = "\\ud800-\\udfff", id = "\\u0300-\\u036f", od = "\\ufe20-\\ufe2f", ad = "\\u20d0-\\u20ff", ma = id + od + ad, _a = "\\u2700-\\u27bf", ba = "a-z\\xdf-\\xf6\\xf8-\\xff", ld = "\\xac\\xb1\\xd7\\xf7", sd = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ud = "\\u2000-\\u206f", dd = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ya = "A-Z\\xc0-\\xd6\\xd8-\\xde", wa = "\\ufe0e\\ufe0f", ka = ld + sd + ud + dd, Fi = "['’]", cd = "[" + Ar + "]", xa = "[" + ka + "]", Rr = "[" + ma + "]", Sa = "\\d+", fd = "[" + _a + "]", Ca = "[" + ba + "]", $a = "[^" + Ar + ka + Sa + _a + ba + ya + "]", zi = "\\ud83c[\\udffb-\\udfff]", pd = "(?:" + Rr + "|" + zi + ")", Ia = "[^" + Ar + "]", qi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Gi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Dt = "[" + ya + "]", Aa = "\\u200d", Ra = "(?:" + Ca + "|" + $a + ")", gd = "(?:" + Dt + "|" + $a + ")", Ea = "(?:" + Fi + "(?:d|ll|m|re|s|t|ve))?", Va = "(?:" + Fi + "(?:D|LL|M|RE|S|T|VE))?", Ta = pd + "?", Oa = "[" + wa + "]?", vd = "(?:" + Aa + "(?:" + [Ia, qi, Gi].join("|") + ")" + Oa + Ta + ")*", hd = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", md = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", La = Oa + Ta + vd, _d = "(?:" + [fd, qi, Gi].join("|") + ")" + La, bd = "(?:" + [Ia + Rr + "?", Rr, qi, Gi, cd].join("|") + ")", yd = RegExp(Fi, "g"), wd = RegExp(Rr, "g"), Hi = RegExp(zi + "(?=" + zi + ")|" + bd + La, "g"), kd = RegExp([
        Dt + "?" + Ca + "+" + Ea + "(?=" + [xa, Dt, "$"].join("|") + ")",
        gd + "+" + Va + "(?=" + [xa, Dt + Ra, "$"].join("|") + ")",
        Dt + "?" + Ra + "+" + Ea,
        Dt + "+" + Va,
        md,
        hd,
        Sa,
        _d
      ].join("|"), "g"), xd = RegExp("[" + Aa + Ar + ma + wa + "]"), Sd = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Cd = [
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
      ], $d = -1, ze = {};
      ze[Vi] = ze[Ti] = ze[Oi] = ze[Li] = ze[Di] = ze[Bi] = ze[Wi] = ze[Pi] = ze[Mi] = !0, ze[Xe] = ze[Rn] = ze[ir] = ze[En] = ze[Lt] = ze[q] = ze[A] = ze[M] = ze[Ve] = ze[Vn] = ze[Fn] = ze[nr] = ze[zn] = ze[tr] = ze[rr] = !1;
      var Ne = {};
      Ne[Xe] = Ne[Rn] = Ne[ir] = Ne[Lt] = Ne[En] = Ne[q] = Ne[Vi] = Ne[Ti] = Ne[Oi] = Ne[Li] = Ne[Di] = Ne[Ve] = Ne[Vn] = Ne[Fn] = Ne[nr] = Ne[zn] = Ne[tr] = Ne[$r] = Ne[Bi] = Ne[Wi] = Ne[Pi] = Ne[Mi] = !0, Ne[A] = Ne[M] = Ne[rr] = !1;
      var Id = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, Ad = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Rd = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Ed = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Vd = parseFloat, Td = parseInt, Da = typeof _i == "object" && _i && _i.Object === Object && _i, Od = typeof self == "object" && self && self.Object === Object && self, sn = Da || Od || Function("return this")(), Ki = _ && !_.nodeType && _, kt = Ki && !0 && c && !c.nodeType && c, Ba = kt && kt.exports === Ki, Yi = Ba && Da.process, Tn = (function() {
        try {
          var w = kt && kt.require && kt.require("util").types;
          return w || Yi && Yi.binding && Yi.binding("util");
        } catch {
        }
      })(), Wa = Tn && Tn.isArrayBuffer, Pa = Tn && Tn.isDate, Ma = Tn && Tn.isMap, Ua = Tn && Tn.isRegExp, Na = Tn && Tn.isSet, Fa = Tn && Tn.isTypedArray;
      function xn(w, D, R) {
        switch (R.length) {
          case 0:
            return w.call(D);
          case 1:
            return w.call(D, R[0]);
          case 2:
            return w.call(D, R[0], R[1]);
          case 3:
            return w.call(D, R[0], R[1], R[2]);
        }
        return w.apply(D, R);
      }
      function Ld(w, D, R, te) {
        for (var ye = -1, Le = w == null ? 0 : w.length; ++ye < Le; ) {
          var nn = w[ye];
          D(te, nn, R(nn), w);
        }
        return te;
      }
      function On(w, D) {
        for (var R = -1, te = w == null ? 0 : w.length; ++R < te && D(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function Dd(w, D) {
        for (var R = w == null ? 0 : w.length; R-- && D(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function za(w, D) {
        for (var R = -1, te = w == null ? 0 : w.length; ++R < te; )
          if (!D(w[R], R, w))
            return !1;
        return !0;
      }
      function ft(w, D) {
        for (var R = -1, te = w == null ? 0 : w.length, ye = 0, Le = []; ++R < te; ) {
          var nn = w[R];
          D(nn, R, w) && (Le[ye++] = nn);
        }
        return Le;
      }
      function Er(w, D) {
        var R = w == null ? 0 : w.length;
        return !!R && Bt(w, D, 0) > -1;
      }
      function Zi(w, D, R) {
        for (var te = -1, ye = w == null ? 0 : w.length; ++te < ye; )
          if (R(D, w[te]))
            return !0;
        return !1;
      }
      function qe(w, D) {
        for (var R = -1, te = w == null ? 0 : w.length, ye = Array(te); ++R < te; )
          ye[R] = D(w[R], R, w);
        return ye;
      }
      function pt(w, D) {
        for (var R = -1, te = D.length, ye = w.length; ++R < te; )
          w[ye + R] = D[R];
        return w;
      }
      function Ji(w, D, R, te) {
        var ye = -1, Le = w == null ? 0 : w.length;
        for (te && Le && (R = w[++ye]); ++ye < Le; )
          R = D(R, w[ye], ye, w);
        return R;
      }
      function Bd(w, D, R, te) {
        var ye = w == null ? 0 : w.length;
        for (te && ye && (R = w[--ye]); ye--; )
          R = D(R, w[ye], ye, w);
        return R;
      }
      function Xi(w, D) {
        for (var R = -1, te = w == null ? 0 : w.length; ++R < te; )
          if (D(w[R], R, w))
            return !0;
        return !1;
      }
      var Wd = Qi("length");
      function Pd(w) {
        return w.split("");
      }
      function Md(w) {
        return w.match(Ku) || [];
      }
      function qa(w, D, R) {
        var te;
        return R(w, function(ye, Le, nn) {
          if (D(ye, Le, nn))
            return te = Le, !1;
        }), te;
      }
      function Vr(w, D, R, te) {
        for (var ye = w.length, Le = R + (te ? 1 : -1); te ? Le-- : ++Le < ye; )
          if (D(w[Le], Le, w))
            return Le;
        return -1;
      }
      function Bt(w, D, R) {
        return D === D ? Xd(w, D, R) : Vr(w, Ga, R);
      }
      function Ud(w, D, R, te) {
        for (var ye = R - 1, Le = w.length; ++ye < Le; )
          if (te(w[ye], D))
            return ye;
        return -1;
      }
      function Ga(w) {
        return w !== w;
      }
      function Ha(w, D) {
        var R = w == null ? 0 : w.length;
        return R ? eo(w, D) / R : Be;
      }
      function Qi(w) {
        return function(D) {
          return D == null ? o : D[w];
        };
      }
      function ji(w) {
        return function(D) {
          return w == null ? o : w[D];
        };
      }
      function Ka(w, D, R, te, ye) {
        return ye(w, function(Le, nn, Pe) {
          R = te ? (te = !1, Le) : D(R, Le, nn, Pe);
        }), R;
      }
      function Nd(w, D) {
        var R = w.length;
        for (w.sort(D); R--; )
          w[R] = w[R].value;
        return w;
      }
      function eo(w, D) {
        for (var R, te = -1, ye = w.length; ++te < ye; ) {
          var Le = D(w[te]);
          Le !== o && (R = R === o ? Le : R + Le);
        }
        return R;
      }
      function no(w, D) {
        for (var R = -1, te = Array(w); ++R < w; )
          te[R] = D(R);
        return te;
      }
      function Fd(w, D) {
        return qe(D, function(R) {
          return [R, w[R]];
        });
      }
      function Ya(w) {
        return w && w.slice(0, Qa(w) + 1).replace(Ni, "");
      }
      function Sn(w) {
        return function(D) {
          return w(D);
        };
      }
      function to(w, D) {
        return qe(D, function(R) {
          return w[R];
        });
      }
      function or(w, D) {
        return w.has(D);
      }
      function Za(w, D) {
        for (var R = -1, te = w.length; ++R < te && Bt(D, w[R], 0) > -1; )
          ;
        return R;
      }
      function Ja(w, D) {
        for (var R = w.length; R-- && Bt(D, w[R], 0) > -1; )
          ;
        return R;
      }
      function zd(w, D) {
        for (var R = w.length, te = 0; R--; )
          w[R] === D && ++te;
        return te;
      }
      var qd = ji(Id), Gd = ji(Ad);
      function Hd(w) {
        return "\\" + Ed[w];
      }
      function Kd(w, D) {
        return w == null ? o : w[D];
      }
      function Wt(w) {
        return xd.test(w);
      }
      function Yd(w) {
        return Sd.test(w);
      }
      function Zd(w) {
        for (var D, R = []; !(D = w.next()).done; )
          R.push(D.value);
        return R;
      }
      function ro(w) {
        var D = -1, R = Array(w.size);
        return w.forEach(function(te, ye) {
          R[++D] = [ye, te];
        }), R;
      }
      function Xa(w, D) {
        return function(R) {
          return w(D(R));
        };
      }
      function gt(w, D) {
        for (var R = -1, te = w.length, ye = 0, Le = []; ++R < te; ) {
          var nn = w[R];
          (nn === D || nn === p) && (w[R] = p, Le[ye++] = R);
        }
        return Le;
      }
      function Tr(w) {
        var D = -1, R = Array(w.size);
        return w.forEach(function(te) {
          R[++D] = te;
        }), R;
      }
      function Jd(w) {
        var D = -1, R = Array(w.size);
        return w.forEach(function(te) {
          R[++D] = [te, te];
        }), R;
      }
      function Xd(w, D, R) {
        for (var te = R - 1, ye = w.length; ++te < ye; )
          if (w[te] === D)
            return te;
        return -1;
      }
      function Qd(w, D, R) {
        for (var te = R + 1; te--; )
          if (w[te] === D)
            return te;
        return te;
      }
      function Pt(w) {
        return Wt(w) ? ec(w) : Wd(w);
      }
      function qn(w) {
        return Wt(w) ? nc(w) : Pd(w);
      }
      function Qa(w) {
        for (var D = w.length; D-- && zu.test(w.charAt(D)); )
          ;
        return D;
      }
      var jd = ji(Rd);
      function ec(w) {
        for (var D = Hi.lastIndex = 0; Hi.test(w); )
          ++D;
        return D;
      }
      function nc(w) {
        return w.match(Hi) || [];
      }
      function tc(w) {
        return w.match(kd) || [];
      }
      var rc = (function w(D) {
        D = D == null ? sn : Mt.defaults(sn.Object(), D, Mt.pick(sn, Cd));
        var R = D.Array, te = D.Date, ye = D.Error, Le = D.Function, nn = D.Math, Pe = D.Object, io = D.RegExp, ic = D.String, Ln = D.TypeError, Or = R.prototype, oc = Le.prototype, Ut = Pe.prototype, Lr = D["__core-js_shared__"], Dr = oc.toString, We = Ut.hasOwnProperty, ac = 0, ja = (function() {
          var e = /[^.]+$/.exec(Lr && Lr.keys && Lr.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Br = Ut.toString, lc = Dr.call(Pe), sc = sn._, uc = io(
          "^" + Dr.call(We).replace(Ui, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Wr = Ba ? D.Buffer : o, vt = D.Symbol, Pr = D.Uint8Array, el = Wr ? Wr.allocUnsafe : o, Mr = Xa(Pe.getPrototypeOf, Pe), nl = Pe.create, tl = Ut.propertyIsEnumerable, Ur = Or.splice, rl = vt ? vt.isConcatSpreadable : o, ar = vt ? vt.iterator : o, xt = vt ? vt.toStringTag : o, Nr = (function() {
          try {
            var e = At(Pe, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), dc = D.clearTimeout !== sn.clearTimeout && D.clearTimeout, cc = te && te.now !== sn.Date.now && te.now, fc = D.setTimeout !== sn.setTimeout && D.setTimeout, Fr = nn.ceil, zr = nn.floor, oo = Pe.getOwnPropertySymbols, pc = Wr ? Wr.isBuffer : o, il = D.isFinite, gc = Or.join, vc = Xa(Pe.keys, Pe), tn = nn.max, fn = nn.min, hc = te.now, mc = D.parseInt, ol = nn.random, _c = Or.reverse, ao = At(D, "DataView"), lr = At(D, "Map"), lo = At(D, "Promise"), Nt = At(D, "Set"), sr = At(D, "WeakMap"), ur = At(Pe, "create"), qr = sr && new sr(), Ft = {}, bc = Rt(ao), yc = Rt(lr), wc = Rt(lo), kc = Rt(Nt), xc = Rt(sr), Gr = vt ? vt.prototype : o, dr = Gr ? Gr.valueOf : o, al = Gr ? Gr.toString : o;
        function a(e) {
          if (Ye(e) && !ke(e) && !(e instanceof Re)) {
            if (e instanceof Dn)
              return e;
            if (We.call(e, "__wrapped__"))
              return ls(e);
          }
          return new Dn(e);
        }
        var zt = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(n) {
            if (!He(n))
              return {};
            if (nl)
              return nl(n);
            e.prototype = n;
            var t = new e();
            return e.prototype = o, t;
          };
        })();
        function Hr() {
        }
        function Dn(e, n) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
        }
        a.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Wu,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Pu,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: va,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: a
          }
        }, a.prototype = Hr.prototype, a.prototype.constructor = a, Dn.prototype = zt(Hr.prototype), Dn.prototype.constructor = Dn;
        function Re(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Y, this.__views__ = [];
        }
        function Sc() {
          var e = new Re(this.__wrapped__);
          return e.__actions__ = _n(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = _n(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = _n(this.__views__), e;
        }
        function Cc() {
          if (this.__filtered__) {
            var e = new Re(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function $c() {
          var e = this.__wrapped__.value(), n = this.__dir__, t = ke(e), r = n < 0, i = t ? e.length : 0, l = Mf(0, i, this.__views__), u = l.start, v = l.end, k = v - u, W = r ? v : u - 1, P = this.__iteratees__, F = P.length, J = 0, le = fn(k, this.__takeCount__);
          if (!t || !r && i == k && le == k)
            return El(e, this.__actions__);
          var ge = [];
          e:
            for (; k-- && J < le; ) {
              W += n;
              for (var Ce = -1, ve = e[W]; ++Ce < F; ) {
                var Ae = P[Ce], Ee = Ae.iteratee, In = Ae.type, mn = Ee(ve);
                if (In == de)
                  ve = mn;
                else if (!mn) {
                  if (In == oe)
                    continue e;
                  break e;
                }
              }
              ge[J++] = ve;
            }
          return ge;
        }
        Re.prototype = zt(Hr.prototype), Re.prototype.constructor = Re;
        function St(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function Ic() {
          this.__data__ = ur ? ur(null) : {}, this.size = 0;
        }
        function Ac(e) {
          var n = this.has(e) && delete this.__data__[e];
          return this.size -= n ? 1 : 0, n;
        }
        function Rc(e) {
          var n = this.__data__;
          if (ur) {
            var t = n[e];
            return t === b ? o : t;
          }
          return We.call(n, e) ? n[e] : o;
        }
        function Ec(e) {
          var n = this.__data__;
          return ur ? n[e] !== o : We.call(n, e);
        }
        function Vc(e, n) {
          var t = this.__data__;
          return this.size += this.has(e) ? 0 : 1, t[e] = ur && n === o ? b : n, this;
        }
        St.prototype.clear = Ic, St.prototype.delete = Ac, St.prototype.get = Rc, St.prototype.has = Ec, St.prototype.set = Vc;
        function et(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function Tc() {
          this.__data__ = [], this.size = 0;
        }
        function Oc(e) {
          var n = this.__data__, t = Kr(n, e);
          if (t < 0)
            return !1;
          var r = n.length - 1;
          return t == r ? n.pop() : Ur.call(n, t, 1), --this.size, !0;
        }
        function Lc(e) {
          var n = this.__data__, t = Kr(n, e);
          return t < 0 ? o : n[t][1];
        }
        function Dc(e) {
          return Kr(this.__data__, e) > -1;
        }
        function Bc(e, n) {
          var t = this.__data__, r = Kr(t, e);
          return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
        }
        et.prototype.clear = Tc, et.prototype.delete = Oc, et.prototype.get = Lc, et.prototype.has = Dc, et.prototype.set = Bc;
        function nt(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function Wc() {
          this.size = 0, this.__data__ = {
            hash: new St(),
            map: new (lr || et)(),
            string: new St()
          };
        }
        function Pc(e) {
          var n = oi(this, e).delete(e);
          return this.size -= n ? 1 : 0, n;
        }
        function Mc(e) {
          return oi(this, e).get(e);
        }
        function Uc(e) {
          return oi(this, e).has(e);
        }
        function Nc(e, n) {
          var t = oi(this, e), r = t.size;
          return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
        }
        nt.prototype.clear = Wc, nt.prototype.delete = Pc, nt.prototype.get = Mc, nt.prototype.has = Uc, nt.prototype.set = Nc;
        function Ct(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.__data__ = new nt(); ++n < t; )
            this.add(e[n]);
        }
        function Fc(e) {
          return this.__data__.set(e, b), this;
        }
        function zc(e) {
          return this.__data__.has(e);
        }
        Ct.prototype.add = Ct.prototype.push = Fc, Ct.prototype.has = zc;
        function Gn(e) {
          var n = this.__data__ = new et(e);
          this.size = n.size;
        }
        function qc() {
          this.__data__ = new et(), this.size = 0;
        }
        function Gc(e) {
          var n = this.__data__, t = n.delete(e);
          return this.size = n.size, t;
        }
        function Hc(e) {
          return this.__data__.get(e);
        }
        function Kc(e) {
          return this.__data__.has(e);
        }
        function Yc(e, n) {
          var t = this.__data__;
          if (t instanceof et) {
            var r = t.__data__;
            if (!lr || r.length < y - 1)
              return r.push([e, n]), this.size = ++t.size, this;
            t = this.__data__ = new nt(r);
          }
          return t.set(e, n), this.size = t.size, this;
        }
        Gn.prototype.clear = qc, Gn.prototype.delete = Gc, Gn.prototype.get = Hc, Gn.prototype.has = Kc, Gn.prototype.set = Yc;
        function ll(e, n) {
          var t = ke(e), r = !t && Et(e), i = !t && !r && yt(e), l = !t && !r && !i && Kt(e), u = t || r || i || l, v = u ? no(e.length, ic) : [], k = v.length;
          for (var W in e)
            (n || We.call(e, W)) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
            (W == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            i && (W == "offset" || W == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            l && (W == "buffer" || W == "byteLength" || W == "byteOffset") || // Skip index properties.
            ot(W, k))) && v.push(W);
          return v;
        }
        function sl(e) {
          var n = e.length;
          return n ? e[bo(0, n - 1)] : o;
        }
        function Zc(e, n) {
          return ai(_n(e), $t(n, 0, e.length));
        }
        function Jc(e) {
          return ai(_n(e));
        }
        function so(e, n, t) {
          (t !== o && !Hn(e[n], t) || t === o && !(n in e)) && tt(e, n, t);
        }
        function cr(e, n, t) {
          var r = e[n];
          (!(We.call(e, n) && Hn(r, t)) || t === o && !(n in e)) && tt(e, n, t);
        }
        function Kr(e, n) {
          for (var t = e.length; t--; )
            if (Hn(e[t][0], n))
              return t;
          return -1;
        }
        function Xc(e, n, t, r) {
          return ht(e, function(i, l, u) {
            n(r, i, t(i), u);
          }), r;
        }
        function ul(e, n) {
          return e && Zn(n, on(n), e);
        }
        function Qc(e, n) {
          return e && Zn(n, yn(n), e);
        }
        function tt(e, n, t) {
          n == "__proto__" && Nr ? Nr(e, n, {
            configurable: !0,
            enumerable: !0,
            value: t,
            writable: !0
          }) : e[n] = t;
        }
        function uo(e, n) {
          for (var t = -1, r = n.length, i = R(r), l = e == null; ++t < r; )
            i[t] = l ? o : qo(e, n[t]);
          return i;
        }
        function $t(e, n, t) {
          return e === e && (t !== o && (e = e <= t ? e : t), n !== o && (e = e >= n ? e : n)), e;
        }
        function Bn(e, n, t, r, i, l) {
          var u, v = n & V, k = n & B, W = n & U;
          if (t && (u = i ? t(e, r, i, l) : t(e)), u !== o)
            return u;
          if (!He(e))
            return e;
          var P = ke(e);
          if (P) {
            if (u = Nf(e), !v)
              return _n(e, u);
          } else {
            var F = pn(e), J = F == M || F == be;
            if (yt(e))
              return Ol(e, v);
            if (F == Fn || F == Xe || J && !i) {
              if (u = k || J ? {} : Ql(e), !v)
                return k ? Ef(e, Qc(u, e)) : Rf(e, ul(u, e));
            } else {
              if (!Ne[F])
                return i ? e : {};
              u = Ff(e, F, v);
            }
          }
          l || (l = new Gn());
          var le = l.get(e);
          if (le)
            return le;
          l.set(e, u), Is(e) ? e.forEach(function(ve) {
            u.add(Bn(ve, n, t, ve, e, l));
          }) : Cs(e) && e.forEach(function(ve, Ae) {
            u.set(Ae, Bn(ve, n, t, Ae, e, l));
          });
          var ge = W ? k ? Eo : Ro : k ? yn : on, Ce = P ? o : ge(e);
          return On(Ce || e, function(ve, Ae) {
            Ce && (Ae = ve, ve = e[Ae]), cr(u, Ae, Bn(ve, n, t, Ae, e, l));
          }), u;
        }
        function jc(e) {
          var n = on(e);
          return function(t) {
            return dl(t, e, n);
          };
        }
        function dl(e, n, t) {
          var r = t.length;
          if (e == null)
            return !r;
          for (e = Pe(e); r--; ) {
            var i = t[r], l = n[i], u = e[i];
            if (u === o && !(i in e) || !l(u))
              return !1;
          }
          return !0;
        }
        function cl(e, n, t) {
          if (typeof e != "function")
            throw new Ln(f);
          return _r(function() {
            e.apply(o, t);
          }, n);
        }
        function fr(e, n, t, r) {
          var i = -1, l = Er, u = !0, v = e.length, k = [], W = n.length;
          if (!v)
            return k;
          t && (n = qe(n, Sn(t))), r ? (l = Zi, u = !1) : n.length >= y && (l = or, u = !1, n = new Ct(n));
          e:
            for (; ++i < v; ) {
              var P = e[i], F = t == null ? P : t(P);
              if (P = r || P !== 0 ? P : 0, u && F === F) {
                for (var J = W; J--; )
                  if (n[J] === F)
                    continue e;
                k.push(P);
              } else l(n, F, r) || k.push(P);
            }
          return k;
        }
        var ht = Pl(Yn), fl = Pl(fo, !0);
        function ef(e, n) {
          var t = !0;
          return ht(e, function(r, i, l) {
            return t = !!n(r, i, l), t;
          }), t;
        }
        function Yr(e, n, t) {
          for (var r = -1, i = e.length; ++r < i; ) {
            var l = e[r], u = n(l);
            if (u != null && (v === o ? u === u && !$n(u) : t(u, v)))
              var v = u, k = l;
          }
          return k;
        }
        function nf(e, n, t, r) {
          var i = e.length;
          for (t = Se(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === o || r > i ? i : Se(r), r < 0 && (r += i), r = t > r ? 0 : Rs(r); t < r; )
            e[t++] = n;
          return e;
        }
        function pl(e, n) {
          var t = [];
          return ht(e, function(r, i, l) {
            n(r, i, l) && t.push(r);
          }), t;
        }
        function un(e, n, t, r, i) {
          var l = -1, u = e.length;
          for (t || (t = qf), i || (i = []); ++l < u; ) {
            var v = e[l];
            n > 0 && t(v) ? n > 1 ? un(v, n - 1, t, r, i) : pt(i, v) : r || (i[i.length] = v);
          }
          return i;
        }
        var co = Ml(), gl = Ml(!0);
        function Yn(e, n) {
          return e && co(e, n, on);
        }
        function fo(e, n) {
          return e && gl(e, n, on);
        }
        function Zr(e, n) {
          return ft(n, function(t) {
            return at(e[t]);
          });
        }
        function It(e, n) {
          n = _t(n, e);
          for (var t = 0, r = n.length; e != null && t < r; )
            e = e[Jn(n[t++])];
          return t && t == r ? e : o;
        }
        function vl(e, n, t) {
          var r = n(e);
          return ke(e) ? r : pt(r, t(e));
        }
        function vn(e) {
          return e == null ? e === o ? Eu : kn : xt && xt in Pe(e) ? Pf(e) : Xf(e);
        }
        function po(e, n) {
          return e > n;
        }
        function tf(e, n) {
          return e != null && We.call(e, n);
        }
        function rf(e, n) {
          return e != null && n in Pe(e);
        }
        function of(e, n, t) {
          return e >= fn(n, t) && e < tn(n, t);
        }
        function go(e, n, t) {
          for (var r = t ? Zi : Er, i = e[0].length, l = e.length, u = l, v = R(l), k = 1 / 0, W = []; u--; ) {
            var P = e[u];
            u && n && (P = qe(P, Sn(n))), k = fn(P.length, k), v[u] = !t && (n || i >= 120 && P.length >= 120) ? new Ct(u && P) : o;
          }
          P = e[0];
          var F = -1, J = v[0];
          e:
            for (; ++F < i && W.length < k; ) {
              var le = P[F], ge = n ? n(le) : le;
              if (le = t || le !== 0 ? le : 0, !(J ? or(J, ge) : r(W, ge, t))) {
                for (u = l; --u; ) {
                  var Ce = v[u];
                  if (!(Ce ? or(Ce, ge) : r(e[u], ge, t)))
                    continue e;
                }
                J && J.push(ge), W.push(le);
              }
            }
          return W;
        }
        function af(e, n, t, r) {
          return Yn(e, function(i, l, u) {
            n(r, t(i), l, u);
          }), r;
        }
        function pr(e, n, t) {
          n = _t(n, e), e = ts(e, n);
          var r = e == null ? e : e[Jn(Pn(n))];
          return r == null ? o : xn(r, e, t);
        }
        function hl(e) {
          return Ye(e) && vn(e) == Xe;
        }
        function lf(e) {
          return Ye(e) && vn(e) == ir;
        }
        function sf(e) {
          return Ye(e) && vn(e) == q;
        }
        function gr(e, n, t, r, i) {
          return e === n ? !0 : e == null || n == null || !Ye(e) && !Ye(n) ? e !== e && n !== n : uf(e, n, t, r, gr, i);
        }
        function uf(e, n, t, r, i, l) {
          var u = ke(e), v = ke(n), k = u ? Rn : pn(e), W = v ? Rn : pn(n);
          k = k == Xe ? Fn : k, W = W == Xe ? Fn : W;
          var P = k == Fn, F = W == Fn, J = k == W;
          if (J && yt(e)) {
            if (!yt(n))
              return !1;
            u = !0, P = !1;
          }
          if (J && !P)
            return l || (l = new Gn()), u || Kt(e) ? Zl(e, n, t, r, i, l) : Bf(e, n, k, t, r, i, l);
          if (!(t & z)) {
            var le = P && We.call(e, "__wrapped__"), ge = F && We.call(n, "__wrapped__");
            if (le || ge) {
              var Ce = le ? e.value() : e, ve = ge ? n.value() : n;
              return l || (l = new Gn()), i(Ce, ve, t, r, l);
            }
          }
          return J ? (l || (l = new Gn()), Wf(e, n, t, r, i, l)) : !1;
        }
        function df(e) {
          return Ye(e) && pn(e) == Ve;
        }
        function vo(e, n, t, r) {
          var i = t.length, l = i, u = !r;
          if (e == null)
            return !l;
          for (e = Pe(e); i--; ) {
            var v = t[i];
            if (u && v[2] ? v[1] !== e[v[0]] : !(v[0] in e))
              return !1;
          }
          for (; ++i < l; ) {
            v = t[i];
            var k = v[0], W = e[k], P = v[1];
            if (u && v[2]) {
              if (W === o && !(k in e))
                return !1;
            } else {
              var F = new Gn();
              if (r)
                var J = r(W, P, k, e, n, F);
              if (!(J === o ? gr(P, W, z | G, r, F) : J))
                return !1;
            }
          }
          return !0;
        }
        function ml(e) {
          if (!He(e) || Hf(e))
            return !1;
          var n = at(e) ? uc : ju;
          return n.test(Rt(e));
        }
        function cf(e) {
          return Ye(e) && vn(e) == nr;
        }
        function ff(e) {
          return Ye(e) && pn(e) == zn;
        }
        function pf(e) {
          return Ye(e) && fi(e.length) && !!ze[vn(e)];
        }
        function _l(e) {
          return typeof e == "function" ? e : e == null ? wn : typeof e == "object" ? ke(e) ? wl(e[0], e[1]) : yl(e) : Us(e);
        }
        function ho(e) {
          if (!mr(e))
            return vc(e);
          var n = [];
          for (var t in Pe(e))
            We.call(e, t) && t != "constructor" && n.push(t);
          return n;
        }
        function gf(e) {
          if (!He(e))
            return Jf(e);
          var n = mr(e), t = [];
          for (var r in e)
            r == "constructor" && (n || !We.call(e, r)) || t.push(r);
          return t;
        }
        function mo(e, n) {
          return e < n;
        }
        function bl(e, n) {
          var t = -1, r = bn(e) ? R(e.length) : [];
          return ht(e, function(i, l, u) {
            r[++t] = n(i, l, u);
          }), r;
        }
        function yl(e) {
          var n = To(e);
          return n.length == 1 && n[0][2] ? es(n[0][0], n[0][1]) : function(t) {
            return t === e || vo(t, e, n);
          };
        }
        function wl(e, n) {
          return Lo(e) && jl(n) ? es(Jn(e), n) : function(t) {
            var r = qo(t, e);
            return r === o && r === n ? Go(t, e) : gr(n, r, z | G);
          };
        }
        function Jr(e, n, t, r, i) {
          e !== n && co(n, function(l, u) {
            if (i || (i = new Gn()), He(l))
              vf(e, n, u, t, Jr, r, i);
            else {
              var v = r ? r(Bo(e, u), l, u + "", e, n, i) : o;
              v === o && (v = l), so(e, u, v);
            }
          }, yn);
        }
        function vf(e, n, t, r, i, l, u) {
          var v = Bo(e, t), k = Bo(n, t), W = u.get(k);
          if (W) {
            so(e, t, W);
            return;
          }
          var P = l ? l(v, k, t + "", e, n, u) : o, F = P === o;
          if (F) {
            var J = ke(k), le = !J && yt(k), ge = !J && !le && Kt(k);
            P = k, J || le || ge ? ke(v) ? P = v : Ze(v) ? P = _n(v) : le ? (F = !1, P = Ol(k, !0)) : ge ? (F = !1, P = Ll(k, !0)) : P = [] : br(k) || Et(k) ? (P = v, Et(v) ? P = Es(v) : (!He(v) || at(v)) && (P = Ql(k))) : F = !1;
          }
          F && (u.set(k, P), i(P, k, r, l, u), u.delete(k)), so(e, t, P);
        }
        function kl(e, n) {
          var t = e.length;
          if (t)
            return n += n < 0 ? t : 0, ot(n, t) ? e[n] : o;
        }
        function xl(e, n, t) {
          n.length ? n = qe(n, function(l) {
            return ke(l) ? function(u) {
              return It(u, l.length === 1 ? l[0] : l);
            } : l;
          }) : n = [wn];
          var r = -1;
          n = qe(n, Sn(pe()));
          var i = bl(e, function(l, u, v) {
            var k = qe(n, function(W) {
              return W(l);
            });
            return { criteria: k, index: ++r, value: l };
          });
          return Nd(i, function(l, u) {
            return Af(l, u, t);
          });
        }
        function hf(e, n) {
          return Sl(e, n, function(t, r) {
            return Go(e, r);
          });
        }
        function Sl(e, n, t) {
          for (var r = -1, i = n.length, l = {}; ++r < i; ) {
            var u = n[r], v = It(e, u);
            t(v, u) && vr(l, _t(u, e), v);
          }
          return l;
        }
        function mf(e) {
          return function(n) {
            return It(n, e);
          };
        }
        function _o(e, n, t, r) {
          var i = r ? Ud : Bt, l = -1, u = n.length, v = e;
          for (e === n && (n = _n(n)), t && (v = qe(e, Sn(t))); ++l < u; )
            for (var k = 0, W = n[l], P = t ? t(W) : W; (k = i(v, P, k, r)) > -1; )
              v !== e && Ur.call(v, k, 1), Ur.call(e, k, 1);
          return e;
        }
        function Cl(e, n) {
          for (var t = e ? n.length : 0, r = t - 1; t--; ) {
            var i = n[t];
            if (t == r || i !== l) {
              var l = i;
              ot(i) ? Ur.call(e, i, 1) : ko(e, i);
            }
          }
          return e;
        }
        function bo(e, n) {
          return e + zr(ol() * (n - e + 1));
        }
        function _f(e, n, t, r) {
          for (var i = -1, l = tn(Fr((n - e) / (t || 1)), 0), u = R(l); l--; )
            u[r ? l : ++i] = e, e += t;
          return u;
        }
        function yo(e, n) {
          var t = "";
          if (!e || n < 1 || n > ie)
            return t;
          do
            n % 2 && (t += e), n = zr(n / 2), n && (e += e);
          while (n);
          return t;
        }
        function Ie(e, n) {
          return Wo(ns(e, n, wn), e + "");
        }
        function bf(e) {
          return sl(Yt(e));
        }
        function yf(e, n) {
          var t = Yt(e);
          return ai(t, $t(n, 0, t.length));
        }
        function vr(e, n, t, r) {
          if (!He(e))
            return e;
          n = _t(n, e);
          for (var i = -1, l = n.length, u = l - 1, v = e; v != null && ++i < l; ) {
            var k = Jn(n[i]), W = t;
            if (k === "__proto__" || k === "constructor" || k === "prototype")
              return e;
            if (i != u) {
              var P = v[k];
              W = r ? r(P, k, v) : o, W === o && (W = He(P) ? P : ot(n[i + 1]) ? [] : {});
            }
            cr(v, k, W), v = v[k];
          }
          return e;
        }
        var $l = qr ? function(e, n) {
          return qr.set(e, n), e;
        } : wn, wf = Nr ? function(e, n) {
          return Nr(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Ko(n),
            writable: !0
          });
        } : wn;
        function kf(e) {
          return ai(Yt(e));
        }
        function Wn(e, n, t) {
          var r = -1, i = e.length;
          n < 0 && (n = -n > i ? 0 : i + n), t = t > i ? i : t, t < 0 && (t += i), i = n > t ? 0 : t - n >>> 0, n >>>= 0;
          for (var l = R(i); ++r < i; )
            l[r] = e[r + n];
          return l;
        }
        function xf(e, n) {
          var t;
          return ht(e, function(r, i, l) {
            return t = n(r, i, l), !t;
          }), !!t;
        }
        function Xr(e, n, t) {
          var r = 0, i = e == null ? r : e.length;
          if (typeof n == "number" && n === n && i <= se) {
            for (; r < i; ) {
              var l = r + i >>> 1, u = e[l];
              u !== null && !$n(u) && (t ? u <= n : u < n) ? r = l + 1 : i = l;
            }
            return i;
          }
          return wo(e, n, wn, t);
        }
        function wo(e, n, t, r) {
          var i = 0, l = e == null ? 0 : e.length;
          if (l === 0)
            return 0;
          n = t(n);
          for (var u = n !== n, v = n === null, k = $n(n), W = n === o; i < l; ) {
            var P = zr((i + l) / 2), F = t(e[P]), J = F !== o, le = F === null, ge = F === F, Ce = $n(F);
            if (u)
              var ve = r || ge;
            else W ? ve = ge && (r || J) : v ? ve = ge && J && (r || !le) : k ? ve = ge && J && !le && (r || !Ce) : le || Ce ? ve = !1 : ve = r ? F <= n : F < n;
            ve ? i = P + 1 : l = P;
          }
          return fn(l, Q);
        }
        function Il(e, n) {
          for (var t = -1, r = e.length, i = 0, l = []; ++t < r; ) {
            var u = e[t], v = n ? n(u) : u;
            if (!t || !Hn(v, k)) {
              var k = v;
              l[i++] = u === 0 ? 0 : u;
            }
          }
          return l;
        }
        function Al(e) {
          return typeof e == "number" ? e : $n(e) ? Be : +e;
        }
        function Cn(e) {
          if (typeof e == "string")
            return e;
          if (ke(e))
            return qe(e, Cn) + "";
          if ($n(e))
            return al ? al.call(e) : "";
          var n = e + "";
          return n == "0" && 1 / e == -X ? "-0" : n;
        }
        function mt(e, n, t) {
          var r = -1, i = Er, l = e.length, u = !0, v = [], k = v;
          if (t)
            u = !1, i = Zi;
          else if (l >= y) {
            var W = n ? null : Lf(e);
            if (W)
              return Tr(W);
            u = !1, i = or, k = new Ct();
          } else
            k = n ? [] : v;
          e:
            for (; ++r < l; ) {
              var P = e[r], F = n ? n(P) : P;
              if (P = t || P !== 0 ? P : 0, u && F === F) {
                for (var J = k.length; J--; )
                  if (k[J] === F)
                    continue e;
                n && k.push(F), v.push(P);
              } else i(k, F, t) || (k !== v && k.push(F), v.push(P));
            }
          return v;
        }
        function ko(e, n) {
          return n = _t(n, e), e = ts(e, n), e == null || delete e[Jn(Pn(n))];
        }
        function Rl(e, n, t, r) {
          return vr(e, n, t(It(e, n)), r);
        }
        function Qr(e, n, t, r) {
          for (var i = e.length, l = r ? i : -1; (r ? l-- : ++l < i) && n(e[l], l, e); )
            ;
          return t ? Wn(e, r ? 0 : l, r ? l + 1 : i) : Wn(e, r ? l + 1 : 0, r ? i : l);
        }
        function El(e, n) {
          var t = e;
          return t instanceof Re && (t = t.value()), Ji(n, function(r, i) {
            return i.func.apply(i.thisArg, pt([r], i.args));
          }, t);
        }
        function xo(e, n, t) {
          var r = e.length;
          if (r < 2)
            return r ? mt(e[0]) : [];
          for (var i = -1, l = R(r); ++i < r; )
            for (var u = e[i], v = -1; ++v < r; )
              v != i && (l[i] = fr(l[i] || u, e[v], n, t));
          return mt(un(l, 1), n, t);
        }
        function Vl(e, n, t) {
          for (var r = -1, i = e.length, l = n.length, u = {}; ++r < i; ) {
            var v = r < l ? n[r] : o;
            t(u, e[r], v);
          }
          return u;
        }
        function So(e) {
          return Ze(e) ? e : [];
        }
        function Co(e) {
          return typeof e == "function" ? e : wn;
        }
        function _t(e, n) {
          return ke(e) ? e : Lo(e, n) ? [e] : as(De(e));
        }
        var Sf = Ie;
        function bt(e, n, t) {
          var r = e.length;
          return t = t === o ? r : t, !n && t >= r ? e : Wn(e, n, t);
        }
        var Tl = dc || function(e) {
          return sn.clearTimeout(e);
        };
        function Ol(e, n) {
          if (n)
            return e.slice();
          var t = e.length, r = el ? el(t) : new e.constructor(t);
          return e.copy(r), r;
        }
        function $o(e) {
          var n = new e.constructor(e.byteLength);
          return new Pr(n).set(new Pr(e)), n;
        }
        function Cf(e, n) {
          var t = n ? $o(e.buffer) : e.buffer;
          return new e.constructor(t, e.byteOffset, e.byteLength);
        }
        function $f(e) {
          var n = new e.constructor(e.source, ha.exec(e));
          return n.lastIndex = e.lastIndex, n;
        }
        function If(e) {
          return dr ? Pe(dr.call(e)) : {};
        }
        function Ll(e, n) {
          var t = n ? $o(e.buffer) : e.buffer;
          return new e.constructor(t, e.byteOffset, e.length);
        }
        function Dl(e, n) {
          if (e !== n) {
            var t = e !== o, r = e === null, i = e === e, l = $n(e), u = n !== o, v = n === null, k = n === n, W = $n(n);
            if (!v && !W && !l && e > n || l && u && k && !v && !W || r && u && k || !t && k || !i)
              return 1;
            if (!r && !l && !W && e < n || W && t && i && !r && !l || v && t && i || !u && i || !k)
              return -1;
          }
          return 0;
        }
        function Af(e, n, t) {
          for (var r = -1, i = e.criteria, l = n.criteria, u = i.length, v = t.length; ++r < u; ) {
            var k = Dl(i[r], l[r]);
            if (k) {
              if (r >= v)
                return k;
              var W = t[r];
              return k * (W == "desc" ? -1 : 1);
            }
          }
          return e.index - n.index;
        }
        function Bl(e, n, t, r) {
          for (var i = -1, l = e.length, u = t.length, v = -1, k = n.length, W = tn(l - u, 0), P = R(k + W), F = !r; ++v < k; )
            P[v] = n[v];
          for (; ++i < u; )
            (F || i < l) && (P[t[i]] = e[i]);
          for (; W--; )
            P[v++] = e[i++];
          return P;
        }
        function Wl(e, n, t, r) {
          for (var i = -1, l = e.length, u = -1, v = t.length, k = -1, W = n.length, P = tn(l - v, 0), F = R(P + W), J = !r; ++i < P; )
            F[i] = e[i];
          for (var le = i; ++k < W; )
            F[le + k] = n[k];
          for (; ++u < v; )
            (J || i < l) && (F[le + t[u]] = e[i++]);
          return F;
        }
        function _n(e, n) {
          var t = -1, r = e.length;
          for (n || (n = R(r)); ++t < r; )
            n[t] = e[t];
          return n;
        }
        function Zn(e, n, t, r) {
          var i = !t;
          t || (t = {});
          for (var l = -1, u = n.length; ++l < u; ) {
            var v = n[l], k = r ? r(t[v], e[v], v, t, e) : o;
            k === o && (k = e[v]), i ? tt(t, v, k) : cr(t, v, k);
          }
          return t;
        }
        function Rf(e, n) {
          return Zn(e, Oo(e), n);
        }
        function Ef(e, n) {
          return Zn(e, Jl(e), n);
        }
        function jr(e, n) {
          return function(t, r) {
            var i = ke(t) ? Ld : Xc, l = n ? n() : {};
            return i(t, e, pe(r, 2), l);
          };
        }
        function qt(e) {
          return Ie(function(n, t) {
            var r = -1, i = t.length, l = i > 1 ? t[i - 1] : o, u = i > 2 ? t[2] : o;
            for (l = e.length > 3 && typeof l == "function" ? (i--, l) : o, u && hn(t[0], t[1], u) && (l = i < 3 ? o : l, i = 1), n = Pe(n); ++r < i; ) {
              var v = t[r];
              v && e(n, v, r, l);
            }
            return n;
          });
        }
        function Pl(e, n) {
          return function(t, r) {
            if (t == null)
              return t;
            if (!bn(t))
              return e(t, r);
            for (var i = t.length, l = n ? i : -1, u = Pe(t); (n ? l-- : ++l < i) && r(u[l], l, u) !== !1; )
              ;
            return t;
          };
        }
        function Ml(e) {
          return function(n, t, r) {
            for (var i = -1, l = Pe(n), u = r(n), v = u.length; v--; ) {
              var k = u[e ? v : ++i];
              if (t(l[k], k, l) === !1)
                break;
            }
            return n;
          };
        }
        function Vf(e, n, t) {
          var r = n & O, i = hr(e);
          function l() {
            var u = this && this !== sn && this instanceof l ? i : e;
            return u.apply(r ? t : this, arguments);
          }
          return l;
        }
        function Ul(e) {
          return function(n) {
            n = De(n);
            var t = Wt(n) ? qn(n) : o, r = t ? t[0] : n.charAt(0), i = t ? bt(t, 1).join("") : n.slice(1);
            return r[e]() + i;
          };
        }
        function Gt(e) {
          return function(n) {
            return Ji(Ps(Ws(n).replace(yd, "")), e, "");
          };
        }
        function hr(e) {
          return function() {
            var n = arguments;
            switch (n.length) {
              case 0:
                return new e();
              case 1:
                return new e(n[0]);
              case 2:
                return new e(n[0], n[1]);
              case 3:
                return new e(n[0], n[1], n[2]);
              case 4:
                return new e(n[0], n[1], n[2], n[3]);
              case 5:
                return new e(n[0], n[1], n[2], n[3], n[4]);
              case 6:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
              case 7:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
            }
            var t = zt(e.prototype), r = e.apply(t, n);
            return He(r) ? r : t;
          };
        }
        function Tf(e, n, t) {
          var r = hr(e);
          function i() {
            for (var l = arguments.length, u = R(l), v = l, k = Ht(i); v--; )
              u[v] = arguments[v];
            var W = l < 3 && u[0] !== k && u[l - 1] !== k ? [] : gt(u, k);
            if (l -= W.length, l < t)
              return Gl(
                e,
                n,
                ei,
                i.placeholder,
                o,
                u,
                W,
                o,
                o,
                t - l
              );
            var P = this && this !== sn && this instanceof i ? r : e;
            return xn(P, this, u);
          }
          return i;
        }
        function Nl(e) {
          return function(n, t, r) {
            var i = Pe(n);
            if (!bn(n)) {
              var l = pe(t, 3);
              n = on(n), t = function(v) {
                return l(i[v], v, i);
              };
            }
            var u = e(n, t, r);
            return u > -1 ? i[l ? n[u] : u] : o;
          };
        }
        function Fl(e) {
          return it(function(n) {
            var t = n.length, r = t, i = Dn.prototype.thru;
            for (e && n.reverse(); r--; ) {
              var l = n[r];
              if (typeof l != "function")
                throw new Ln(f);
              if (i && !u && ii(l) == "wrapper")
                var u = new Dn([], !0);
            }
            for (r = u ? r : t; ++r < t; ) {
              l = n[r];
              var v = ii(l), k = v == "wrapper" ? Vo(l) : o;
              k && Do(k[0]) && k[1] == (he | re | L | Ue) && !k[4].length && k[9] == 1 ? u = u[ii(k[0])].apply(u, k[3]) : u = l.length == 1 && Do(l) ? u[v]() : u.thru(l);
            }
            return function() {
              var W = arguments, P = W[0];
              if (u && W.length == 1 && ke(P))
                return u.plant(P).value();
              for (var F = 0, J = t ? n[F].apply(this, W) : P; ++F < t; )
                J = n[F].call(this, J);
              return J;
            };
          });
        }
        function ei(e, n, t, r, i, l, u, v, k, W) {
          var P = n & he, F = n & O, J = n & C, le = n & (re | ee), ge = n & Qe, Ce = J ? o : hr(e);
          function ve() {
            for (var Ae = arguments.length, Ee = R(Ae), In = Ae; In--; )
              Ee[In] = arguments[In];
            if (le)
              var mn = Ht(ve), An = zd(Ee, mn);
            if (r && (Ee = Bl(Ee, r, i, le)), l && (Ee = Wl(Ee, l, u, le)), Ae -= An, le && Ae < W) {
              var Je = gt(Ee, mn);
              return Gl(
                e,
                n,
                ei,
                ve.placeholder,
                t,
                Ee,
                Je,
                v,
                k,
                W - Ae
              );
            }
            var Kn = F ? t : this, st = J ? Kn[e] : e;
            return Ae = Ee.length, v ? Ee = Qf(Ee, v) : ge && Ae > 1 && Ee.reverse(), P && k < Ae && (Ee.length = k), this && this !== sn && this instanceof ve && (st = Ce || hr(st)), st.apply(Kn, Ee);
          }
          return ve;
        }
        function zl(e, n) {
          return function(t, r) {
            return af(t, e, n(r), {});
          };
        }
        function ni(e, n) {
          return function(t, r) {
            var i;
            if (t === o && r === o)
              return n;
            if (t !== o && (i = t), r !== o) {
              if (i === o)
                return r;
              typeof t == "string" || typeof r == "string" ? (t = Cn(t), r = Cn(r)) : (t = Al(t), r = Al(r)), i = e(t, r);
            }
            return i;
          };
        }
        function Io(e) {
          return it(function(n) {
            return n = qe(n, Sn(pe())), Ie(function(t) {
              var r = this;
              return e(n, function(i) {
                return xn(i, r, t);
              });
            });
          });
        }
        function ti(e, n) {
          n = n === o ? " " : Cn(n);
          var t = n.length;
          if (t < 2)
            return t ? yo(n, e) : n;
          var r = yo(n, Fr(e / Pt(n)));
          return Wt(n) ? bt(qn(r), 0, e).join("") : r.slice(0, e);
        }
        function Of(e, n, t, r) {
          var i = n & O, l = hr(e);
          function u() {
            for (var v = -1, k = arguments.length, W = -1, P = r.length, F = R(P + k), J = this && this !== sn && this instanceof u ? l : e; ++W < P; )
              F[W] = r[W];
            for (; k--; )
              F[W++] = arguments[++v];
            return xn(J, i ? t : this, F);
          }
          return u;
        }
        function ql(e) {
          return function(n, t, r) {
            return r && typeof r != "number" && hn(n, t, r) && (t = r = o), n = lt(n), t === o ? (t = n, n = 0) : t = lt(t), r = r === o ? n < t ? 1 : -1 : lt(r), _f(n, t, r, e);
          };
        }
        function ri(e) {
          return function(n, t) {
            return typeof n == "string" && typeof t == "string" || (n = Mn(n), t = Mn(t)), e(n, t);
          };
        }
        function Gl(e, n, t, r, i, l, u, v, k, W) {
          var P = n & re, F = P ? u : o, J = P ? o : u, le = P ? l : o, ge = P ? o : l;
          n |= P ? L : K, n &= ~(P ? K : L), n & T || (n &= -4);
          var Ce = [
            e,
            n,
            i,
            le,
            F,
            ge,
            J,
            v,
            k,
            W
          ], ve = t.apply(o, Ce);
          return Do(e) && rs(ve, Ce), ve.placeholder = r, is(ve, e, n);
        }
        function Ao(e) {
          var n = nn[e];
          return function(t, r) {
            if (t = Mn(t), r = r == null ? 0 : fn(Se(r), 292), r && il(t)) {
              var i = (De(t) + "e").split("e"), l = n(i[0] + "e" + (+i[1] + r));
              return i = (De(l) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
            }
            return n(t);
          };
        }
        var Lf = Nt && 1 / Tr(new Nt([, -0]))[1] == X ? function(e) {
          return new Nt(e);
        } : Jo;
        function Hl(e) {
          return function(n) {
            var t = pn(n);
            return t == Ve ? ro(n) : t == zn ? Jd(n) : Fd(n, e(n));
          };
        }
        function rt(e, n, t, r, i, l, u, v) {
          var k = n & C;
          if (!k && typeof e != "function")
            throw new Ln(f);
          var W = r ? r.length : 0;
          if (W || (n &= -97, r = i = o), u = u === o ? u : tn(Se(u), 0), v = v === o ? v : Se(v), W -= i ? i.length : 0, n & K) {
            var P = r, F = i;
            r = i = o;
          }
          var J = k ? o : Vo(e), le = [
            e,
            n,
            t,
            r,
            i,
            P,
            F,
            l,
            u,
            v
          ];
          if (J && Zf(le, J), e = le[0], n = le[1], t = le[2], r = le[3], i = le[4], v = le[9] = le[9] === o ? k ? 0 : e.length : tn(le[9] - W, 0), !v && n & (re | ee) && (n &= -25), !n || n == O)
            var ge = Vf(e, n, t);
          else n == re || n == ee ? ge = Tf(e, n, v) : (n == L || n == (O | L)) && !i.length ? ge = Of(e, n, t, r) : ge = ei.apply(o, le);
          var Ce = J ? $l : rs;
          return is(Ce(ge, le), e, n);
        }
        function Kl(e, n, t, r) {
          return e === o || Hn(e, Ut[t]) && !We.call(r, t) ? n : e;
        }
        function Yl(e, n, t, r, i, l) {
          return He(e) && He(n) && (l.set(n, e), Jr(e, n, o, Yl, l), l.delete(n)), e;
        }
        function Df(e) {
          return br(e) ? o : e;
        }
        function Zl(e, n, t, r, i, l) {
          var u = t & z, v = e.length, k = n.length;
          if (v != k && !(u && k > v))
            return !1;
          var W = l.get(e), P = l.get(n);
          if (W && P)
            return W == n && P == e;
          var F = -1, J = !0, le = t & G ? new Ct() : o;
          for (l.set(e, n), l.set(n, e); ++F < v; ) {
            var ge = e[F], Ce = n[F];
            if (r)
              var ve = u ? r(Ce, ge, F, n, e, l) : r(ge, Ce, F, e, n, l);
            if (ve !== o) {
              if (ve)
                continue;
              J = !1;
              break;
            }
            if (le) {
              if (!Xi(n, function(Ae, Ee) {
                if (!or(le, Ee) && (ge === Ae || i(ge, Ae, t, r, l)))
                  return le.push(Ee);
              })) {
                J = !1;
                break;
              }
            } else if (!(ge === Ce || i(ge, Ce, t, r, l))) {
              J = !1;
              break;
            }
          }
          return l.delete(e), l.delete(n), J;
        }
        function Bf(e, n, t, r, i, l, u) {
          switch (t) {
            case Lt:
              if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
                return !1;
              e = e.buffer, n = n.buffer;
            case ir:
              return !(e.byteLength != n.byteLength || !l(new Pr(e), new Pr(n)));
            case En:
            case q:
            case Vn:
              return Hn(+e, +n);
            case A:
              return e.name == n.name && e.message == n.message;
            case nr:
            case tr:
              return e == n + "";
            case Ve:
              var v = ro;
            case zn:
              var k = r & z;
              if (v || (v = Tr), e.size != n.size && !k)
                return !1;
              var W = u.get(e);
              if (W)
                return W == n;
              r |= G, u.set(e, n);
              var P = Zl(v(e), v(n), r, i, l, u);
              return u.delete(e), P;
            case $r:
              if (dr)
                return dr.call(e) == dr.call(n);
          }
          return !1;
        }
        function Wf(e, n, t, r, i, l) {
          var u = t & z, v = Ro(e), k = v.length, W = Ro(n), P = W.length;
          if (k != P && !u)
            return !1;
          for (var F = k; F--; ) {
            var J = v[F];
            if (!(u ? J in n : We.call(n, J)))
              return !1;
          }
          var le = l.get(e), ge = l.get(n);
          if (le && ge)
            return le == n && ge == e;
          var Ce = !0;
          l.set(e, n), l.set(n, e);
          for (var ve = u; ++F < k; ) {
            J = v[F];
            var Ae = e[J], Ee = n[J];
            if (r)
              var In = u ? r(Ee, Ae, J, n, e, l) : r(Ae, Ee, J, e, n, l);
            if (!(In === o ? Ae === Ee || i(Ae, Ee, t, r, l) : In)) {
              Ce = !1;
              break;
            }
            ve || (ve = J == "constructor");
          }
          if (Ce && !ve) {
            var mn = e.constructor, An = n.constructor;
            mn != An && "constructor" in e && "constructor" in n && !(typeof mn == "function" && mn instanceof mn && typeof An == "function" && An instanceof An) && (Ce = !1);
          }
          return l.delete(e), l.delete(n), Ce;
        }
        function it(e) {
          return Wo(ns(e, o, ds), e + "");
        }
        function Ro(e) {
          return vl(e, on, Oo);
        }
        function Eo(e) {
          return vl(e, yn, Jl);
        }
        var Vo = qr ? function(e) {
          return qr.get(e);
        } : Jo;
        function ii(e) {
          for (var n = e.name + "", t = Ft[n], r = We.call(Ft, n) ? t.length : 0; r--; ) {
            var i = t[r], l = i.func;
            if (l == null || l == e)
              return i.name;
          }
          return n;
        }
        function Ht(e) {
          var n = We.call(a, "placeholder") ? a : e;
          return n.placeholder;
        }
        function pe() {
          var e = a.iteratee || Yo;
          return e = e === Yo ? _l : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function oi(e, n) {
          var t = e.__data__;
          return Gf(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
        }
        function To(e) {
          for (var n = on(e), t = n.length; t--; ) {
            var r = n[t], i = e[r];
            n[t] = [r, i, jl(i)];
          }
          return n;
        }
        function At(e, n) {
          var t = Kd(e, n);
          return ml(t) ? t : o;
        }
        function Pf(e) {
          var n = We.call(e, xt), t = e[xt];
          try {
            e[xt] = o;
            var r = !0;
          } catch {
          }
          var i = Br.call(e);
          return r && (n ? e[xt] = t : delete e[xt]), i;
        }
        var Oo = oo ? function(e) {
          return e == null ? [] : (e = Pe(e), ft(oo(e), function(n) {
            return tl.call(e, n);
          }));
        } : Xo, Jl = oo ? function(e) {
          for (var n = []; e; )
            pt(n, Oo(e)), e = Mr(e);
          return n;
        } : Xo, pn = vn;
        (ao && pn(new ao(new ArrayBuffer(1))) != Lt || lr && pn(new lr()) != Ve || lo && pn(lo.resolve()) != fa || Nt && pn(new Nt()) != zn || sr && pn(new sr()) != rr) && (pn = function(e) {
          var n = vn(e), t = n == Fn ? e.constructor : o, r = t ? Rt(t) : "";
          if (r)
            switch (r) {
              case bc:
                return Lt;
              case yc:
                return Ve;
              case wc:
                return fa;
              case kc:
                return zn;
              case xc:
                return rr;
            }
          return n;
        });
        function Mf(e, n, t) {
          for (var r = -1, i = t.length; ++r < i; ) {
            var l = t[r], u = l.size;
            switch (l.type) {
              case "drop":
                e += u;
                break;
              case "dropRight":
                n -= u;
                break;
              case "take":
                n = fn(n, e + u);
                break;
              case "takeRight":
                e = tn(e, n - u);
                break;
            }
          }
          return { start: e, end: n };
        }
        function Uf(e) {
          var n = e.match(Gu);
          return n ? n[1].split(Hu) : [];
        }
        function Xl(e, n, t) {
          n = _t(n, e);
          for (var r = -1, i = n.length, l = !1; ++r < i; ) {
            var u = Jn(n[r]);
            if (!(l = e != null && t(e, u)))
              break;
            e = e[u];
          }
          return l || ++r != i ? l : (i = e == null ? 0 : e.length, !!i && fi(i) && ot(u, i) && (ke(e) || Et(e)));
        }
        function Nf(e) {
          var n = e.length, t = new e.constructor(n);
          return n && typeof e[0] == "string" && We.call(e, "index") && (t.index = e.index, t.input = e.input), t;
        }
        function Ql(e) {
          return typeof e.constructor == "function" && !mr(e) ? zt(Mr(e)) : {};
        }
        function Ff(e, n, t) {
          var r = e.constructor;
          switch (n) {
            case ir:
              return $o(e);
            case En:
            case q:
              return new r(+e);
            case Lt:
              return Cf(e, t);
            case Vi:
            case Ti:
            case Oi:
            case Li:
            case Di:
            case Bi:
            case Wi:
            case Pi:
            case Mi:
              return Ll(e, t);
            case Ve:
              return new r();
            case Vn:
            case tr:
              return new r(e);
            case nr:
              return $f(e);
            case zn:
              return new r();
            case $r:
              return If(e);
          }
        }
        function zf(e, n) {
          var t = n.length;
          if (!t)
            return e;
          var r = t - 1;
          return n[r] = (t > 1 ? "& " : "") + n[r], n = n.join(t > 2 ? ", " : " "), e.replace(qu, `{
/* [wrapped with ` + n + `] */
`);
        }
        function qf(e) {
          return ke(e) || Et(e) || !!(rl && e && e[rl]);
        }
        function ot(e, n) {
          var t = typeof e;
          return n = n ?? ie, !!n && (t == "number" || t != "symbol" && nd.test(e)) && e > -1 && e % 1 == 0 && e < n;
        }
        function hn(e, n, t) {
          if (!He(t))
            return !1;
          var r = typeof n;
          return (r == "number" ? bn(t) && ot(n, t.length) : r == "string" && n in t) ? Hn(t[n], e) : !1;
        }
        function Lo(e, n) {
          if (ke(e))
            return !1;
          var t = typeof e;
          return t == "number" || t == "symbol" || t == "boolean" || e == null || $n(e) ? !0 : Uu.test(e) || !Mu.test(e) || n != null && e in Pe(n);
        }
        function Gf(e) {
          var n = typeof e;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
        }
        function Do(e) {
          var n = ii(e), t = a[n];
          if (typeof t != "function" || !(n in Re.prototype))
            return !1;
          if (e === t)
            return !0;
          var r = Vo(t);
          return !!r && e === r[0];
        }
        function Hf(e) {
          return !!ja && ja in e;
        }
        var Kf = Lr ? at : Qo;
        function mr(e) {
          var n = e && e.constructor, t = typeof n == "function" && n.prototype || Ut;
          return e === t;
        }
        function jl(e) {
          return e === e && !He(e);
        }
        function es(e, n) {
          return function(t) {
            return t == null ? !1 : t[e] === n && (n !== o || e in Pe(t));
          };
        }
        function Yf(e) {
          var n = di(e, function(r) {
            return t.size === d && t.clear(), r;
          }), t = n.cache;
          return n;
        }
        function Zf(e, n) {
          var t = e[1], r = n[1], i = t | r, l = i < (O | C | he), u = r == he && t == re || r == he && t == Ue && e[7].length <= n[8] || r == (he | Ue) && n[7].length <= n[8] && t == re;
          if (!(l || u))
            return e;
          r & O && (e[2] = n[2], i |= t & O ? 0 : T);
          var v = n[3];
          if (v) {
            var k = e[3];
            e[3] = k ? Bl(k, v, n[4]) : v, e[4] = k ? gt(e[3], p) : n[4];
          }
          return v = n[5], v && (k = e[5], e[5] = k ? Wl(k, v, n[6]) : v, e[6] = k ? gt(e[5], p) : n[6]), v = n[7], v && (e[7] = v), r & he && (e[8] = e[8] == null ? n[8] : fn(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = i, e;
        }
        function Jf(e) {
          var n = [];
          if (e != null)
            for (var t in Pe(e))
              n.push(t);
          return n;
        }
        function Xf(e) {
          return Br.call(e);
        }
        function ns(e, n, t) {
          return n = tn(n === o ? e.length - 1 : n, 0), function() {
            for (var r = arguments, i = -1, l = tn(r.length - n, 0), u = R(l); ++i < l; )
              u[i] = r[n + i];
            i = -1;
            for (var v = R(n + 1); ++i < n; )
              v[i] = r[i];
            return v[n] = t(u), xn(e, this, v);
          };
        }
        function ts(e, n) {
          return n.length < 2 ? e : It(e, Wn(n, 0, -1));
        }
        function Qf(e, n) {
          for (var t = e.length, r = fn(n.length, t), i = _n(e); r--; ) {
            var l = n[r];
            e[r] = ot(l, t) ? i[l] : o;
          }
          return e;
        }
        function Bo(e, n) {
          if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
            return e[n];
        }
        var rs = os($l), _r = fc || function(e, n) {
          return sn.setTimeout(e, n);
        }, Wo = os(wf);
        function is(e, n, t) {
          var r = n + "";
          return Wo(e, zf(r, jf(Uf(r), t)));
        }
        function os(e) {
          var n = 0, t = 0;
          return function() {
            var r = hc(), i = fe - (r - t);
            if (t = r, i > 0) {
              if (++n >= ce)
                return arguments[0];
            } else
              n = 0;
            return e.apply(o, arguments);
          };
        }
        function ai(e, n) {
          var t = -1, r = e.length, i = r - 1;
          for (n = n === o ? r : n; ++t < n; ) {
            var l = bo(t, i), u = e[l];
            e[l] = e[t], e[t] = u;
          }
          return e.length = n, e;
        }
        var as = Yf(function(e) {
          var n = [];
          return e.charCodeAt(0) === 46 && n.push(""), e.replace(Nu, function(t, r, i, l) {
            n.push(i ? l.replace(Zu, "$1") : r || t);
          }), n;
        });
        function Jn(e) {
          if (typeof e == "string" || $n(e))
            return e;
          var n = e + "";
          return n == "0" && 1 / e == -X ? "-0" : n;
        }
        function Rt(e) {
          if (e != null) {
            try {
              return Dr.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function jf(e, n) {
          return On(Oe, function(t) {
            var r = "_." + t[0];
            n & t[1] && !Er(e, r) && e.push(r);
          }), e.sort();
        }
        function ls(e) {
          if (e instanceof Re)
            return e.clone();
          var n = new Dn(e.__wrapped__, e.__chain__);
          return n.__actions__ = _n(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
        }
        function ep(e, n, t) {
          (t ? hn(e, n, t) : n === o) ? n = 1 : n = tn(Se(n), 0);
          var r = e == null ? 0 : e.length;
          if (!r || n < 1)
            return [];
          for (var i = 0, l = 0, u = R(Fr(r / n)); i < r; )
            u[l++] = Wn(e, i, i += n);
          return u;
        }
        function np(e) {
          for (var n = -1, t = e == null ? 0 : e.length, r = 0, i = []; ++n < t; ) {
            var l = e[n];
            l && (i[r++] = l);
          }
          return i;
        }
        function tp() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var n = R(e - 1), t = arguments[0], r = e; r--; )
            n[r - 1] = arguments[r];
          return pt(ke(t) ? _n(t) : [t], un(n, 1));
        }
        var rp = Ie(function(e, n) {
          return Ze(e) ? fr(e, un(n, 1, Ze, !0)) : [];
        }), ip = Ie(function(e, n) {
          var t = Pn(n);
          return Ze(t) && (t = o), Ze(e) ? fr(e, un(n, 1, Ze, !0), pe(t, 2)) : [];
        }), op = Ie(function(e, n) {
          var t = Pn(n);
          return Ze(t) && (t = o), Ze(e) ? fr(e, un(n, 1, Ze, !0), o, t) : [];
        });
        function ap(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : Se(n), Wn(e, n < 0 ? 0 : n, r)) : [];
        }
        function lp(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : Se(n), n = r - n, Wn(e, 0, n < 0 ? 0 : n)) : [];
        }
        function sp(e, n) {
          return e && e.length ? Qr(e, pe(n, 3), !0, !0) : [];
        }
        function up(e, n) {
          return e && e.length ? Qr(e, pe(n, 3), !0) : [];
        }
        function dp(e, n, t, r) {
          var i = e == null ? 0 : e.length;
          return i ? (t && typeof t != "number" && hn(e, n, t) && (t = 0, r = i), nf(e, n, t, r)) : [];
        }
        function ss(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : Se(t);
          return i < 0 && (i = tn(r + i, 0)), Vr(e, pe(n, 3), i);
        }
        function us(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r - 1;
          return t !== o && (i = Se(t), i = t < 0 ? tn(r + i, 0) : fn(i, r - 1)), Vr(e, pe(n, 3), i, !0);
        }
        function ds(e) {
          var n = e == null ? 0 : e.length;
          return n ? un(e, 1) : [];
        }
        function cp(e) {
          var n = e == null ? 0 : e.length;
          return n ? un(e, X) : [];
        }
        function fp(e, n) {
          var t = e == null ? 0 : e.length;
          return t ? (n = n === o ? 1 : Se(n), un(e, n)) : [];
        }
        function pp(e) {
          for (var n = -1, t = e == null ? 0 : e.length, r = {}; ++n < t; ) {
            var i = e[n];
            r[i[0]] = i[1];
          }
          return r;
        }
        function cs(e) {
          return e && e.length ? e[0] : o;
        }
        function gp(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : Se(t);
          return i < 0 && (i = tn(r + i, 0)), Bt(e, n, i);
        }
        function vp(e) {
          var n = e == null ? 0 : e.length;
          return n ? Wn(e, 0, -1) : [];
        }
        var hp = Ie(function(e) {
          var n = qe(e, So);
          return n.length && n[0] === e[0] ? go(n) : [];
        }), mp = Ie(function(e) {
          var n = Pn(e), t = qe(e, So);
          return n === Pn(t) ? n = o : t.pop(), t.length && t[0] === e[0] ? go(t, pe(n, 2)) : [];
        }), _p = Ie(function(e) {
          var n = Pn(e), t = qe(e, So);
          return n = typeof n == "function" ? n : o, n && t.pop(), t.length && t[0] === e[0] ? go(t, o, n) : [];
        });
        function bp(e, n) {
          return e == null ? "" : gc.call(e, n);
        }
        function Pn(e) {
          var n = e == null ? 0 : e.length;
          return n ? e[n - 1] : o;
        }
        function yp(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r;
          return t !== o && (i = Se(t), i = i < 0 ? tn(r + i, 0) : fn(i, r - 1)), n === n ? Qd(e, n, i) : Vr(e, Ga, i, !0);
        }
        function wp(e, n) {
          return e && e.length ? kl(e, Se(n)) : o;
        }
        var kp = Ie(fs);
        function fs(e, n) {
          return e && e.length && n && n.length ? _o(e, n) : e;
        }
        function xp(e, n, t) {
          return e && e.length && n && n.length ? _o(e, n, pe(t, 2)) : e;
        }
        function Sp(e, n, t) {
          return e && e.length && n && n.length ? _o(e, n, o, t) : e;
        }
        var Cp = it(function(e, n) {
          var t = e == null ? 0 : e.length, r = uo(e, n);
          return Cl(e, qe(n, function(i) {
            return ot(i, t) ? +i : i;
          }).sort(Dl)), r;
        });
        function $p(e, n) {
          var t = [];
          if (!(e && e.length))
            return t;
          var r = -1, i = [], l = e.length;
          for (n = pe(n, 3); ++r < l; ) {
            var u = e[r];
            n(u, r, e) && (t.push(u), i.push(r));
          }
          return Cl(e, i), t;
        }
        function Po(e) {
          return e == null ? e : _c.call(e);
        }
        function Ip(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (t && typeof t != "number" && hn(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : Se(n), t = t === o ? r : Se(t)), Wn(e, n, t)) : [];
        }
        function Ap(e, n) {
          return Xr(e, n);
        }
        function Rp(e, n, t) {
          return wo(e, n, pe(t, 2));
        }
        function Ep(e, n) {
          var t = e == null ? 0 : e.length;
          if (t) {
            var r = Xr(e, n);
            if (r < t && Hn(e[r], n))
              return r;
          }
          return -1;
        }
        function Vp(e, n) {
          return Xr(e, n, !0);
        }
        function Tp(e, n, t) {
          return wo(e, n, pe(t, 2), !0);
        }
        function Op(e, n) {
          var t = e == null ? 0 : e.length;
          if (t) {
            var r = Xr(e, n, !0) - 1;
            if (Hn(e[r], n))
              return r;
          }
          return -1;
        }
        function Lp(e) {
          return e && e.length ? Il(e) : [];
        }
        function Dp(e, n) {
          return e && e.length ? Il(e, pe(n, 2)) : [];
        }
        function Bp(e) {
          var n = e == null ? 0 : e.length;
          return n ? Wn(e, 1, n) : [];
        }
        function Wp(e, n, t) {
          return e && e.length ? (n = t || n === o ? 1 : Se(n), Wn(e, 0, n < 0 ? 0 : n)) : [];
        }
        function Pp(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : Se(n), n = r - n, Wn(e, n < 0 ? 0 : n, r)) : [];
        }
        function Mp(e, n) {
          return e && e.length ? Qr(e, pe(n, 3), !1, !0) : [];
        }
        function Up(e, n) {
          return e && e.length ? Qr(e, pe(n, 3)) : [];
        }
        var Np = Ie(function(e) {
          return mt(un(e, 1, Ze, !0));
        }), Fp = Ie(function(e) {
          var n = Pn(e);
          return Ze(n) && (n = o), mt(un(e, 1, Ze, !0), pe(n, 2));
        }), zp = Ie(function(e) {
          var n = Pn(e);
          return n = typeof n == "function" ? n : o, mt(un(e, 1, Ze, !0), o, n);
        });
        function qp(e) {
          return e && e.length ? mt(e) : [];
        }
        function Gp(e, n) {
          return e && e.length ? mt(e, pe(n, 2)) : [];
        }
        function Hp(e, n) {
          return n = typeof n == "function" ? n : o, e && e.length ? mt(e, o, n) : [];
        }
        function Mo(e) {
          if (!(e && e.length))
            return [];
          var n = 0;
          return e = ft(e, function(t) {
            if (Ze(t))
              return n = tn(t.length, n), !0;
          }), no(n, function(t) {
            return qe(e, Qi(t));
          });
        }
        function ps(e, n) {
          if (!(e && e.length))
            return [];
          var t = Mo(e);
          return n == null ? t : qe(t, function(r) {
            return xn(n, o, r);
          });
        }
        var Kp = Ie(function(e, n) {
          return Ze(e) ? fr(e, n) : [];
        }), Yp = Ie(function(e) {
          return xo(ft(e, Ze));
        }), Zp = Ie(function(e) {
          var n = Pn(e);
          return Ze(n) && (n = o), xo(ft(e, Ze), pe(n, 2));
        }), Jp = Ie(function(e) {
          var n = Pn(e);
          return n = typeof n == "function" ? n : o, xo(ft(e, Ze), o, n);
        }), Xp = Ie(Mo);
        function Qp(e, n) {
          return Vl(e || [], n || [], cr);
        }
        function jp(e, n) {
          return Vl(e || [], n || [], vr);
        }
        var eg = Ie(function(e) {
          var n = e.length, t = n > 1 ? e[n - 1] : o;
          return t = typeof t == "function" ? (e.pop(), t) : o, ps(e, t);
        });
        function gs(e) {
          var n = a(e);
          return n.__chain__ = !0, n;
        }
        function ng(e, n) {
          return n(e), e;
        }
        function li(e, n) {
          return n(e);
        }
        var tg = it(function(e) {
          var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, i = function(l) {
            return uo(l, e);
          };
          return n > 1 || this.__actions__.length || !(r instanceof Re) || !ot(t) ? this.thru(i) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({
            func: li,
            args: [i],
            thisArg: o
          }), new Dn(r, this.__chain__).thru(function(l) {
            return n && !l.length && l.push(o), l;
          }));
        });
        function rg() {
          return gs(this);
        }
        function ig() {
          return new Dn(this.value(), this.__chain__);
        }
        function og() {
          this.__values__ === o && (this.__values__ = As(this.value()));
          var e = this.__index__ >= this.__values__.length, n = e ? o : this.__values__[this.__index__++];
          return { done: e, value: n };
        }
        function ag() {
          return this;
        }
        function lg(e) {
          for (var n, t = this; t instanceof Hr; ) {
            var r = ls(t);
            r.__index__ = 0, r.__values__ = o, n ? i.__wrapped__ = r : n = r;
            var i = r;
            t = t.__wrapped__;
          }
          return i.__wrapped__ = e, n;
        }
        function sg() {
          var e = this.__wrapped__;
          if (e instanceof Re) {
            var n = e;
            return this.__actions__.length && (n = new Re(this)), n = n.reverse(), n.__actions__.push({
              func: li,
              args: [Po],
              thisArg: o
            }), new Dn(n, this.__chain__);
          }
          return this.thru(Po);
        }
        function ug() {
          return El(this.__wrapped__, this.__actions__);
        }
        var dg = jr(function(e, n, t) {
          We.call(e, t) ? ++e[t] : tt(e, t, 1);
        });
        function cg(e, n, t) {
          var r = ke(e) ? za : ef;
          return t && hn(e, n, t) && (n = o), r(e, pe(n, 3));
        }
        function fg(e, n) {
          var t = ke(e) ? ft : pl;
          return t(e, pe(n, 3));
        }
        var pg = Nl(ss), gg = Nl(us);
        function vg(e, n) {
          return un(si(e, n), 1);
        }
        function hg(e, n) {
          return un(si(e, n), X);
        }
        function mg(e, n, t) {
          return t = t === o ? 1 : Se(t), un(si(e, n), t);
        }
        function vs(e, n) {
          var t = ke(e) ? On : ht;
          return t(e, pe(n, 3));
        }
        function hs(e, n) {
          var t = ke(e) ? Dd : fl;
          return t(e, pe(n, 3));
        }
        var _g = jr(function(e, n, t) {
          We.call(e, t) ? e[t].push(n) : tt(e, t, [n]);
        });
        function bg(e, n, t, r) {
          e = bn(e) ? e : Yt(e), t = t && !r ? Se(t) : 0;
          var i = e.length;
          return t < 0 && (t = tn(i + t, 0)), pi(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && Bt(e, n, t) > -1;
        }
        var yg = Ie(function(e, n, t) {
          var r = -1, i = typeof n == "function", l = bn(e) ? R(e.length) : [];
          return ht(e, function(u) {
            l[++r] = i ? xn(n, u, t) : pr(u, n, t);
          }), l;
        }), wg = jr(function(e, n, t) {
          tt(e, t, n);
        });
        function si(e, n) {
          var t = ke(e) ? qe : bl;
          return t(e, pe(n, 3));
        }
        function kg(e, n, t, r) {
          return e == null ? [] : (ke(n) || (n = n == null ? [] : [n]), t = r ? o : t, ke(t) || (t = t == null ? [] : [t]), xl(e, n, t));
        }
        var xg = jr(function(e, n, t) {
          e[t ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function Sg(e, n, t) {
          var r = ke(e) ? Ji : Ka, i = arguments.length < 3;
          return r(e, pe(n, 4), t, i, ht);
        }
        function Cg(e, n, t) {
          var r = ke(e) ? Bd : Ka, i = arguments.length < 3;
          return r(e, pe(n, 4), t, i, fl);
        }
        function $g(e, n) {
          var t = ke(e) ? ft : pl;
          return t(e, ci(pe(n, 3)));
        }
        function Ig(e) {
          var n = ke(e) ? sl : bf;
          return n(e);
        }
        function Ag(e, n, t) {
          (t ? hn(e, n, t) : n === o) ? n = 1 : n = Se(n);
          var r = ke(e) ? Zc : yf;
          return r(e, n);
        }
        function Rg(e) {
          var n = ke(e) ? Jc : kf;
          return n(e);
        }
        function Eg(e) {
          if (e == null)
            return 0;
          if (bn(e))
            return pi(e) ? Pt(e) : e.length;
          var n = pn(e);
          return n == Ve || n == zn ? e.size : ho(e).length;
        }
        function Vg(e, n, t) {
          var r = ke(e) ? Xi : xf;
          return t && hn(e, n, t) && (n = o), r(e, pe(n, 3));
        }
        var Tg = Ie(function(e, n) {
          if (e == null)
            return [];
          var t = n.length;
          return t > 1 && hn(e, n[0], n[1]) ? n = [] : t > 2 && hn(n[0], n[1], n[2]) && (n = [n[0]]), xl(e, un(n, 1), []);
        }), ui = cc || function() {
          return sn.Date.now();
        };
        function Og(e, n) {
          if (typeof n != "function")
            throw new Ln(f);
          return e = Se(e), function() {
            if (--e < 1)
              return n.apply(this, arguments);
          };
        }
        function ms(e, n, t) {
          return n = t ? o : n, n = e && n == null ? e.length : n, rt(e, he, o, o, o, o, n);
        }
        function _s(e, n) {
          var t;
          if (typeof n != "function")
            throw new Ln(f);
          return e = Se(e), function() {
            return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = o), t;
          };
        }
        var Uo = Ie(function(e, n, t) {
          var r = O;
          if (t.length) {
            var i = gt(t, Ht(Uo));
            r |= L;
          }
          return rt(e, r, n, t, i);
        }), bs = Ie(function(e, n, t) {
          var r = O | C;
          if (t.length) {
            var i = gt(t, Ht(bs));
            r |= L;
          }
          return rt(n, r, e, t, i);
        });
        function ys(e, n, t) {
          n = t ? o : n;
          var r = rt(e, re, o, o, o, o, o, n);
          return r.placeholder = ys.placeholder, r;
        }
        function ws(e, n, t) {
          n = t ? o : n;
          var r = rt(e, ee, o, o, o, o, o, n);
          return r.placeholder = ws.placeholder, r;
        }
        function ks(e, n, t) {
          var r, i, l, u, v, k, W = 0, P = !1, F = !1, J = !0;
          if (typeof e != "function")
            throw new Ln(f);
          n = Mn(n) || 0, He(t) && (P = !!t.leading, F = "maxWait" in t, l = F ? tn(Mn(t.maxWait) || 0, n) : l, J = "trailing" in t ? !!t.trailing : J);
          function le(Je) {
            var Kn = r, st = i;
            return r = i = o, W = Je, u = e.apply(st, Kn), u;
          }
          function ge(Je) {
            return W = Je, v = _r(Ae, n), P ? le(Je) : u;
          }
          function Ce(Je) {
            var Kn = Je - k, st = Je - W, Ns = n - Kn;
            return F ? fn(Ns, l - st) : Ns;
          }
          function ve(Je) {
            var Kn = Je - k, st = Je - W;
            return k === o || Kn >= n || Kn < 0 || F && st >= l;
          }
          function Ae() {
            var Je = ui();
            if (ve(Je))
              return Ee(Je);
            v = _r(Ae, Ce(Je));
          }
          function Ee(Je) {
            return v = o, J && r ? le(Je) : (r = i = o, u);
          }
          function In() {
            v !== o && Tl(v), W = 0, r = k = i = v = o;
          }
          function mn() {
            return v === o ? u : Ee(ui());
          }
          function An() {
            var Je = ui(), Kn = ve(Je);
            if (r = arguments, i = this, k = Je, Kn) {
              if (v === o)
                return ge(k);
              if (F)
                return Tl(v), v = _r(Ae, n), le(k);
            }
            return v === o && (v = _r(Ae, n)), u;
          }
          return An.cancel = In, An.flush = mn, An;
        }
        var Lg = Ie(function(e, n) {
          return cl(e, 1, n);
        }), Dg = Ie(function(e, n, t) {
          return cl(e, Mn(n) || 0, t);
        });
        function Bg(e) {
          return rt(e, Qe);
        }
        function di(e, n) {
          if (typeof e != "function" || n != null && typeof n != "function")
            throw new Ln(f);
          var t = function() {
            var r = arguments, i = n ? n.apply(this, r) : r[0], l = t.cache;
            if (l.has(i))
              return l.get(i);
            var u = e.apply(this, r);
            return t.cache = l.set(i, u) || l, u;
          };
          return t.cache = new (di.Cache || nt)(), t;
        }
        di.Cache = nt;
        function ci(e) {
          if (typeof e != "function")
            throw new Ln(f);
          return function() {
            var n = arguments;
            switch (n.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, n[0]);
              case 2:
                return !e.call(this, n[0], n[1]);
              case 3:
                return !e.call(this, n[0], n[1], n[2]);
            }
            return !e.apply(this, n);
          };
        }
        function Wg(e) {
          return _s(2, e);
        }
        var Pg = Sf(function(e, n) {
          n = n.length == 1 && ke(n[0]) ? qe(n[0], Sn(pe())) : qe(un(n, 1), Sn(pe()));
          var t = n.length;
          return Ie(function(r) {
            for (var i = -1, l = fn(r.length, t); ++i < l; )
              r[i] = n[i].call(this, r[i]);
            return xn(e, this, r);
          });
        }), No = Ie(function(e, n) {
          var t = gt(n, Ht(No));
          return rt(e, L, o, n, t);
        }), xs = Ie(function(e, n) {
          var t = gt(n, Ht(xs));
          return rt(e, K, o, n, t);
        }), Mg = it(function(e, n) {
          return rt(e, Ue, o, o, o, n);
        });
        function Ug(e, n) {
          if (typeof e != "function")
            throw new Ln(f);
          return n = n === o ? n : Se(n), Ie(e, n);
        }
        function Ng(e, n) {
          if (typeof e != "function")
            throw new Ln(f);
          return n = n == null ? 0 : tn(Se(n), 0), Ie(function(t) {
            var r = t[n], i = bt(t, 0, n);
            return r && pt(i, r), xn(e, this, i);
          });
        }
        function Fg(e, n, t) {
          var r = !0, i = !0;
          if (typeof e != "function")
            throw new Ln(f);
          return He(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), ks(e, n, {
            leading: r,
            maxWait: n,
            trailing: i
          });
        }
        function zg(e) {
          return ms(e, 1);
        }
        function qg(e, n) {
          return No(Co(n), e);
        }
        function Gg() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return ke(e) ? e : [e];
        }
        function Hg(e) {
          return Bn(e, U);
        }
        function Kg(e, n) {
          return n = typeof n == "function" ? n : o, Bn(e, U, n);
        }
        function Yg(e) {
          return Bn(e, V | U);
        }
        function Zg(e, n) {
          return n = typeof n == "function" ? n : o, Bn(e, V | U, n);
        }
        function Jg(e, n) {
          return n == null || dl(e, n, on(n));
        }
        function Hn(e, n) {
          return e === n || e !== e && n !== n;
        }
        var Xg = ri(po), Qg = ri(function(e, n) {
          return e >= n;
        }), Et = hl(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? hl : function(e) {
          return Ye(e) && We.call(e, "callee") && !tl.call(e, "callee");
        }, ke = R.isArray, jg = Wa ? Sn(Wa) : lf;
        function bn(e) {
          return e != null && fi(e.length) && !at(e);
        }
        function Ze(e) {
          return Ye(e) && bn(e);
        }
        function ev(e) {
          return e === !0 || e === !1 || Ye(e) && vn(e) == En;
        }
        var yt = pc || Qo, nv = Pa ? Sn(Pa) : sf;
        function tv(e) {
          return Ye(e) && e.nodeType === 1 && !br(e);
        }
        function rv(e) {
          if (e == null)
            return !0;
          if (bn(e) && (ke(e) || typeof e == "string" || typeof e.splice == "function" || yt(e) || Kt(e) || Et(e)))
            return !e.length;
          var n = pn(e);
          if (n == Ve || n == zn)
            return !e.size;
          if (mr(e))
            return !ho(e).length;
          for (var t in e)
            if (We.call(e, t))
              return !1;
          return !0;
        }
        function iv(e, n) {
          return gr(e, n);
        }
        function ov(e, n, t) {
          t = typeof t == "function" ? t : o;
          var r = t ? t(e, n) : o;
          return r === o ? gr(e, n, o, t) : !!r;
        }
        function Fo(e) {
          if (!Ye(e))
            return !1;
          var n = vn(e);
          return n == A || n == $ || typeof e.message == "string" && typeof e.name == "string" && !br(e);
        }
        function av(e) {
          return typeof e == "number" && il(e);
        }
        function at(e) {
          if (!He(e))
            return !1;
          var n = vn(e);
          return n == M || n == be || n == ct || n == Ru;
        }
        function Ss(e) {
          return typeof e == "number" && e == Se(e);
        }
        function fi(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ie;
        }
        function He(e) {
          var n = typeof e;
          return e != null && (n == "object" || n == "function");
        }
        function Ye(e) {
          return e != null && typeof e == "object";
        }
        var Cs = Ma ? Sn(Ma) : df;
        function lv(e, n) {
          return e === n || vo(e, n, To(n));
        }
        function sv(e, n, t) {
          return t = typeof t == "function" ? t : o, vo(e, n, To(n), t);
        }
        function uv(e) {
          return $s(e) && e != +e;
        }
        function dv(e) {
          if (Kf(e))
            throw new ye(I);
          return ml(e);
        }
        function cv(e) {
          return e === null;
        }
        function fv(e) {
          return e == null;
        }
        function $s(e) {
          return typeof e == "number" || Ye(e) && vn(e) == Vn;
        }
        function br(e) {
          if (!Ye(e) || vn(e) != Fn)
            return !1;
          var n = Mr(e);
          if (n === null)
            return !0;
          var t = We.call(n, "constructor") && n.constructor;
          return typeof t == "function" && t instanceof t && Dr.call(t) == lc;
        }
        var zo = Ua ? Sn(Ua) : cf;
        function pv(e) {
          return Ss(e) && e >= -ie && e <= ie;
        }
        var Is = Na ? Sn(Na) : ff;
        function pi(e) {
          return typeof e == "string" || !ke(e) && Ye(e) && vn(e) == tr;
        }
        function $n(e) {
          return typeof e == "symbol" || Ye(e) && vn(e) == $r;
        }
        var Kt = Fa ? Sn(Fa) : pf;
        function gv(e) {
          return e === o;
        }
        function vv(e) {
          return Ye(e) && pn(e) == rr;
        }
        function hv(e) {
          return Ye(e) && vn(e) == Vu;
        }
        var mv = ri(mo), _v = ri(function(e, n) {
          return e <= n;
        });
        function As(e) {
          if (!e)
            return [];
          if (bn(e))
            return pi(e) ? qn(e) : _n(e);
          if (ar && e[ar])
            return Zd(e[ar]());
          var n = pn(e), t = n == Ve ? ro : n == zn ? Tr : Yt;
          return t(e);
        }
        function lt(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Mn(e), e === X || e === -X) {
            var n = e < 0 ? -1 : 1;
            return n * me;
          }
          return e === e ? e : 0;
        }
        function Se(e) {
          var n = lt(e), t = n % 1;
          return n === n ? t ? n - t : n : 0;
        }
        function Rs(e) {
          return e ? $t(Se(e), 0, Y) : 0;
        }
        function Mn(e) {
          if (typeof e == "number")
            return e;
          if ($n(e))
            return Be;
          if (He(e)) {
            var n = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = He(n) ? n + "" : n;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Ya(e);
          var t = Qu.test(e);
          return t || ed.test(e) ? Td(e.slice(2), t ? 2 : 8) : Xu.test(e) ? Be : +e;
        }
        function Es(e) {
          return Zn(e, yn(e));
        }
        function bv(e) {
          return e ? $t(Se(e), -ie, ie) : e === 0 ? e : 0;
        }
        function De(e) {
          return e == null ? "" : Cn(e);
        }
        var yv = qt(function(e, n) {
          if (mr(n) || bn(n)) {
            Zn(n, on(n), e);
            return;
          }
          for (var t in n)
            We.call(n, t) && cr(e, t, n[t]);
        }), Vs = qt(function(e, n) {
          Zn(n, yn(n), e);
        }), gi = qt(function(e, n, t, r) {
          Zn(n, yn(n), e, r);
        }), wv = qt(function(e, n, t, r) {
          Zn(n, on(n), e, r);
        }), kv = it(uo);
        function xv(e, n) {
          var t = zt(e);
          return n == null ? t : ul(t, n);
        }
        var Sv = Ie(function(e, n) {
          e = Pe(e);
          var t = -1, r = n.length, i = r > 2 ? n[2] : o;
          for (i && hn(n[0], n[1], i) && (r = 1); ++t < r; )
            for (var l = n[t], u = yn(l), v = -1, k = u.length; ++v < k; ) {
              var W = u[v], P = e[W];
              (P === o || Hn(P, Ut[W]) && !We.call(e, W)) && (e[W] = l[W]);
            }
          return e;
        }), Cv = Ie(function(e) {
          return e.push(o, Yl), xn(Ts, o, e);
        });
        function $v(e, n) {
          return qa(e, pe(n, 3), Yn);
        }
        function Iv(e, n) {
          return qa(e, pe(n, 3), fo);
        }
        function Av(e, n) {
          return e == null ? e : co(e, pe(n, 3), yn);
        }
        function Rv(e, n) {
          return e == null ? e : gl(e, pe(n, 3), yn);
        }
        function Ev(e, n) {
          return e && Yn(e, pe(n, 3));
        }
        function Vv(e, n) {
          return e && fo(e, pe(n, 3));
        }
        function Tv(e) {
          return e == null ? [] : Zr(e, on(e));
        }
        function Ov(e) {
          return e == null ? [] : Zr(e, yn(e));
        }
        function qo(e, n, t) {
          var r = e == null ? o : It(e, n);
          return r === o ? t : r;
        }
        function Lv(e, n) {
          return e != null && Xl(e, n, tf);
        }
        function Go(e, n) {
          return e != null && Xl(e, n, rf);
        }
        var Dv = zl(function(e, n, t) {
          n != null && typeof n.toString != "function" && (n = Br.call(n)), e[n] = t;
        }, Ko(wn)), Bv = zl(function(e, n, t) {
          n != null && typeof n.toString != "function" && (n = Br.call(n)), We.call(e, n) ? e[n].push(t) : e[n] = [t];
        }, pe), Wv = Ie(pr);
        function on(e) {
          return bn(e) ? ll(e) : ho(e);
        }
        function yn(e) {
          return bn(e) ? ll(e, !0) : gf(e);
        }
        function Pv(e, n) {
          var t = {};
          return n = pe(n, 3), Yn(e, function(r, i, l) {
            tt(t, n(r, i, l), r);
          }), t;
        }
        function Mv(e, n) {
          var t = {};
          return n = pe(n, 3), Yn(e, function(r, i, l) {
            tt(t, i, n(r, i, l));
          }), t;
        }
        var Uv = qt(function(e, n, t) {
          Jr(e, n, t);
        }), Ts = qt(function(e, n, t, r) {
          Jr(e, n, t, r);
        }), Nv = it(function(e, n) {
          var t = {};
          if (e == null)
            return t;
          var r = !1;
          n = qe(n, function(l) {
            return l = _t(l, e), r || (r = l.length > 1), l;
          }), Zn(e, Eo(e), t), r && (t = Bn(t, V | B | U, Df));
          for (var i = n.length; i--; )
            ko(t, n[i]);
          return t;
        });
        function Fv(e, n) {
          return Os(e, ci(pe(n)));
        }
        var zv = it(function(e, n) {
          return e == null ? {} : hf(e, n);
        });
        function Os(e, n) {
          if (e == null)
            return {};
          var t = qe(Eo(e), function(r) {
            return [r];
          });
          return n = pe(n), Sl(e, t, function(r, i) {
            return n(r, i[0]);
          });
        }
        function qv(e, n, t) {
          n = _t(n, e);
          var r = -1, i = n.length;
          for (i || (i = 1, e = o); ++r < i; ) {
            var l = e == null ? o : e[Jn(n[r])];
            l === o && (r = i, l = t), e = at(l) ? l.call(e) : l;
          }
          return e;
        }
        function Gv(e, n, t) {
          return e == null ? e : vr(e, n, t);
        }
        function Hv(e, n, t, r) {
          return r = typeof r == "function" ? r : o, e == null ? e : vr(e, n, t, r);
        }
        var Ls = Hl(on), Ds = Hl(yn);
        function Kv(e, n, t) {
          var r = ke(e), i = r || yt(e) || Kt(e);
          if (n = pe(n, 4), t == null) {
            var l = e && e.constructor;
            i ? t = r ? new l() : [] : He(e) ? t = at(l) ? zt(Mr(e)) : {} : t = {};
          }
          return (i ? On : Yn)(e, function(u, v, k) {
            return n(t, u, v, k);
          }), t;
        }
        function Yv(e, n) {
          return e == null ? !0 : ko(e, n);
        }
        function Zv(e, n, t) {
          return e == null ? e : Rl(e, n, Co(t));
        }
        function Jv(e, n, t, r) {
          return r = typeof r == "function" ? r : o, e == null ? e : Rl(e, n, Co(t), r);
        }
        function Yt(e) {
          return e == null ? [] : to(e, on(e));
        }
        function Xv(e) {
          return e == null ? [] : to(e, yn(e));
        }
        function Qv(e, n, t) {
          return t === o && (t = n, n = o), t !== o && (t = Mn(t), t = t === t ? t : 0), n !== o && (n = Mn(n), n = n === n ? n : 0), $t(Mn(e), n, t);
        }
        function jv(e, n, t) {
          return n = lt(n), t === o ? (t = n, n = 0) : t = lt(t), e = Mn(e), of(e, n, t);
        }
        function eh(e, n, t) {
          if (t && typeof t != "boolean" && hn(e, n, t) && (n = t = o), t === o && (typeof n == "boolean" ? (t = n, n = o) : typeof e == "boolean" && (t = e, e = o)), e === o && n === o ? (e = 0, n = 1) : (e = lt(e), n === o ? (n = e, e = 0) : n = lt(n)), e > n) {
            var r = e;
            e = n, n = r;
          }
          if (t || e % 1 || n % 1) {
            var i = ol();
            return fn(e + i * (n - e + Vd("1e-" + ((i + "").length - 1))), n);
          }
          return bo(e, n);
        }
        var nh = Gt(function(e, n, t) {
          return n = n.toLowerCase(), e + (t ? Bs(n) : n);
        });
        function Bs(e) {
          return Ho(De(e).toLowerCase());
        }
        function Ws(e) {
          return e = De(e), e && e.replace(td, qd).replace(wd, "");
        }
        function th(e, n, t) {
          e = De(e), n = Cn(n);
          var r = e.length;
          t = t === o ? r : $t(Se(t), 0, r);
          var i = t;
          return t -= n.length, t >= 0 && e.slice(t, i) == n;
        }
        function rh(e) {
          return e = De(e), e && Bu.test(e) ? e.replace(ga, Gd) : e;
        }
        function ih(e) {
          return e = De(e), e && Fu.test(e) ? e.replace(Ui, "\\$&") : e;
        }
        var oh = Gt(function(e, n, t) {
          return e + (t ? "-" : "") + n.toLowerCase();
        }), ah = Gt(function(e, n, t) {
          return e + (t ? " " : "") + n.toLowerCase();
        }), lh = Ul("toLowerCase");
        function sh(e, n, t) {
          e = De(e), n = Se(n);
          var r = n ? Pt(e) : 0;
          if (!n || r >= n)
            return e;
          var i = (n - r) / 2;
          return ti(zr(i), t) + e + ti(Fr(i), t);
        }
        function uh(e, n, t) {
          e = De(e), n = Se(n);
          var r = n ? Pt(e) : 0;
          return n && r < n ? e + ti(n - r, t) : e;
        }
        function dh(e, n, t) {
          e = De(e), n = Se(n);
          var r = n ? Pt(e) : 0;
          return n && r < n ? ti(n - r, t) + e : e;
        }
        function ch(e, n, t) {
          return t || n == null ? n = 0 : n && (n = +n), mc(De(e).replace(Ni, ""), n || 0);
        }
        function fh(e, n, t) {
          return (t ? hn(e, n, t) : n === o) ? n = 1 : n = Se(n), yo(De(e), n);
        }
        function ph() {
          var e = arguments, n = De(e[0]);
          return e.length < 3 ? n : n.replace(e[1], e[2]);
        }
        var gh = Gt(function(e, n, t) {
          return e + (t ? "_" : "") + n.toLowerCase();
        });
        function vh(e, n, t) {
          return t && typeof t != "number" && hn(e, n, t) && (n = t = o), t = t === o ? Y : t >>> 0, t ? (e = De(e), e && (typeof n == "string" || n != null && !zo(n)) && (n = Cn(n), !n && Wt(e)) ? bt(qn(e), 0, t) : e.split(n, t)) : [];
        }
        var hh = Gt(function(e, n, t) {
          return e + (t ? " " : "") + Ho(n);
        });
        function mh(e, n, t) {
          return e = De(e), t = t == null ? 0 : $t(Se(t), 0, e.length), n = Cn(n), e.slice(t, t + n.length) == n;
        }
        function _h(e, n, t) {
          var r = a.templateSettings;
          t && hn(e, n, t) && (n = o), e = De(e), n = gi({}, n, r, Kl);
          var i = gi({}, n.imports, r.imports, Kl), l = on(i), u = to(i, l), v, k, W = 0, P = n.interpolate || Ir, F = "__p += '", J = io(
            (n.escape || Ir).source + "|" + P.source + "|" + (P === va ? Ju : Ir).source + "|" + (n.evaluate || Ir).source + "|$",
            "g"
          ), le = "//# sourceURL=" + (We.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++$d + "]") + `
`;
          e.replace(J, function(ve, Ae, Ee, In, mn, An) {
            return Ee || (Ee = In), F += e.slice(W, An).replace(rd, Hd), Ae && (v = !0, F += `' +
__e(` + Ae + `) +
'`), mn && (k = !0, F += `';
` + mn + `;
__p += '`), Ee && (F += `' +
((__t = (` + Ee + `)) == null ? '' : __t) +
'`), W = An + ve.length, ve;
          }), F += `';
`;
          var ge = We.call(n, "variable") && n.variable;
          if (!ge)
            F = `with (obj) {
` + F + `
}
`;
          else if (Yu.test(ge))
            throw new ye(x);
          F = (k ? F.replace(Tu, "") : F).replace(Ou, "$1").replace(Lu, "$1;"), F = "function(" + (ge || "obj") + `) {
` + (ge ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (k ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + F + `return __p
}`;
          var Ce = Ms(function() {
            return Le(l, le + "return " + F).apply(o, u);
          });
          if (Ce.source = F, Fo(Ce))
            throw Ce;
          return Ce;
        }
        function bh(e) {
          return De(e).toLowerCase();
        }
        function yh(e) {
          return De(e).toUpperCase();
        }
        function wh(e, n, t) {
          if (e = De(e), e && (t || n === o))
            return Ya(e);
          if (!e || !(n = Cn(n)))
            return e;
          var r = qn(e), i = qn(n), l = Za(r, i), u = Ja(r, i) + 1;
          return bt(r, l, u).join("");
        }
        function kh(e, n, t) {
          if (e = De(e), e && (t || n === o))
            return e.slice(0, Qa(e) + 1);
          if (!e || !(n = Cn(n)))
            return e;
          var r = qn(e), i = Ja(r, qn(n)) + 1;
          return bt(r, 0, i).join("");
        }
        function xh(e, n, t) {
          if (e = De(e), e && (t || n === o))
            return e.replace(Ni, "");
          if (!e || !(n = Cn(n)))
            return e;
          var r = qn(e), i = Za(r, qn(n));
          return bt(r, i).join("");
        }
        function Sh(e, n) {
          var t = je, r = en;
          if (He(n)) {
            var i = "separator" in n ? n.separator : i;
            t = "length" in n ? Se(n.length) : t, r = "omission" in n ? Cn(n.omission) : r;
          }
          e = De(e);
          var l = e.length;
          if (Wt(e)) {
            var u = qn(e);
            l = u.length;
          }
          if (t >= l)
            return e;
          var v = t - Pt(r);
          if (v < 1)
            return r;
          var k = u ? bt(u, 0, v).join("") : e.slice(0, v);
          if (i === o)
            return k + r;
          if (u && (v += k.length - v), zo(i)) {
            if (e.slice(v).search(i)) {
              var W, P = k;
              for (i.global || (i = io(i.source, De(ha.exec(i)) + "g")), i.lastIndex = 0; W = i.exec(P); )
                var F = W.index;
              k = k.slice(0, F === o ? v : F);
            }
          } else if (e.indexOf(Cn(i), v) != v) {
            var J = k.lastIndexOf(i);
            J > -1 && (k = k.slice(0, J));
          }
          return k + r;
        }
        function Ch(e) {
          return e = De(e), e && Du.test(e) ? e.replace(pa, jd) : e;
        }
        var $h = Gt(function(e, n, t) {
          return e + (t ? " " : "") + n.toUpperCase();
        }), Ho = Ul("toUpperCase");
        function Ps(e, n, t) {
          return e = De(e), n = t ? o : n, n === o ? Yd(e) ? tc(e) : Md(e) : e.match(n) || [];
        }
        var Ms = Ie(function(e, n) {
          try {
            return xn(e, o, n);
          } catch (t) {
            return Fo(t) ? t : new ye(t);
          }
        }), Ih = it(function(e, n) {
          return On(n, function(t) {
            t = Jn(t), tt(e, t, Uo(e[t], e));
          }), e;
        });
        function Ah(e) {
          var n = e == null ? 0 : e.length, t = pe();
          return e = n ? qe(e, function(r) {
            if (typeof r[1] != "function")
              throw new Ln(f);
            return [t(r[0]), r[1]];
          }) : [], Ie(function(r) {
            for (var i = -1; ++i < n; ) {
              var l = e[i];
              if (xn(l[0], this, r))
                return xn(l[1], this, r);
            }
          });
        }
        function Rh(e) {
          return jc(Bn(e, V));
        }
        function Ko(e) {
          return function() {
            return e;
          };
        }
        function Eh(e, n) {
          return e == null || e !== e ? n : e;
        }
        var Vh = Fl(), Th = Fl(!0);
        function wn(e) {
          return e;
        }
        function Yo(e) {
          return _l(typeof e == "function" ? e : Bn(e, V));
        }
        function Oh(e) {
          return yl(Bn(e, V));
        }
        function Lh(e, n) {
          return wl(e, Bn(n, V));
        }
        var Dh = Ie(function(e, n) {
          return function(t) {
            return pr(t, e, n);
          };
        }), Bh = Ie(function(e, n) {
          return function(t) {
            return pr(e, t, n);
          };
        });
        function Zo(e, n, t) {
          var r = on(n), i = Zr(n, r);
          t == null && !(He(n) && (i.length || !r.length)) && (t = n, n = e, e = this, i = Zr(n, on(n)));
          var l = !(He(t) && "chain" in t) || !!t.chain, u = at(e);
          return On(i, function(v) {
            var k = n[v];
            e[v] = k, u && (e.prototype[v] = function() {
              var W = this.__chain__;
              if (l || W) {
                var P = e(this.__wrapped__), F = P.__actions__ = _n(this.__actions__);
                return F.push({ func: k, args: arguments, thisArg: e }), P.__chain__ = W, P;
              }
              return k.apply(e, pt([this.value()], arguments));
            });
          }), e;
        }
        function Wh() {
          return sn._ === this && (sn._ = sc), this;
        }
        function Jo() {
        }
        function Ph(e) {
          return e = Se(e), Ie(function(n) {
            return kl(n, e);
          });
        }
        var Mh = Io(qe), Uh = Io(za), Nh = Io(Xi);
        function Us(e) {
          return Lo(e) ? Qi(Jn(e)) : mf(e);
        }
        function Fh(e) {
          return function(n) {
            return e == null ? o : It(e, n);
          };
        }
        var zh = ql(), qh = ql(!0);
        function Xo() {
          return [];
        }
        function Qo() {
          return !1;
        }
        function Gh() {
          return {};
        }
        function Hh() {
          return "";
        }
        function Kh() {
          return !0;
        }
        function Yh(e, n) {
          if (e = Se(e), e < 1 || e > ie)
            return [];
          var t = Y, r = fn(e, Y);
          n = pe(n), e -= Y;
          for (var i = no(r, n); ++t < e; )
            n(t);
          return i;
        }
        function Zh(e) {
          return ke(e) ? qe(e, Jn) : $n(e) ? [e] : _n(as(De(e)));
        }
        function Jh(e) {
          var n = ++ac;
          return De(e) + n;
        }
        var Xh = ni(function(e, n) {
          return e + n;
        }, 0), Qh = Ao("ceil"), jh = ni(function(e, n) {
          return e / n;
        }, 1), em = Ao("floor");
        function nm(e) {
          return e && e.length ? Yr(e, wn, po) : o;
        }
        function tm(e, n) {
          return e && e.length ? Yr(e, pe(n, 2), po) : o;
        }
        function rm(e) {
          return Ha(e, wn);
        }
        function im(e, n) {
          return Ha(e, pe(n, 2));
        }
        function om(e) {
          return e && e.length ? Yr(e, wn, mo) : o;
        }
        function am(e, n) {
          return e && e.length ? Yr(e, pe(n, 2), mo) : o;
        }
        var lm = ni(function(e, n) {
          return e * n;
        }, 1), sm = Ao("round"), um = ni(function(e, n) {
          return e - n;
        }, 0);
        function dm(e) {
          return e && e.length ? eo(e, wn) : 0;
        }
        function cm(e, n) {
          return e && e.length ? eo(e, pe(n, 2)) : 0;
        }
        return a.after = Og, a.ary = ms, a.assign = yv, a.assignIn = Vs, a.assignInWith = gi, a.assignWith = wv, a.at = kv, a.before = _s, a.bind = Uo, a.bindAll = Ih, a.bindKey = bs, a.castArray = Gg, a.chain = gs, a.chunk = ep, a.compact = np, a.concat = tp, a.cond = Ah, a.conforms = Rh, a.constant = Ko, a.countBy = dg, a.create = xv, a.curry = ys, a.curryRight = ws, a.debounce = ks, a.defaults = Sv, a.defaultsDeep = Cv, a.defer = Lg, a.delay = Dg, a.difference = rp, a.differenceBy = ip, a.differenceWith = op, a.drop = ap, a.dropRight = lp, a.dropRightWhile = sp, a.dropWhile = up, a.fill = dp, a.filter = fg, a.flatMap = vg, a.flatMapDeep = hg, a.flatMapDepth = mg, a.flatten = ds, a.flattenDeep = cp, a.flattenDepth = fp, a.flip = Bg, a.flow = Vh, a.flowRight = Th, a.fromPairs = pp, a.functions = Tv, a.functionsIn = Ov, a.groupBy = _g, a.initial = vp, a.intersection = hp, a.intersectionBy = mp, a.intersectionWith = _p, a.invert = Dv, a.invertBy = Bv, a.invokeMap = yg, a.iteratee = Yo, a.keyBy = wg, a.keys = on, a.keysIn = yn, a.map = si, a.mapKeys = Pv, a.mapValues = Mv, a.matches = Oh, a.matchesProperty = Lh, a.memoize = di, a.merge = Uv, a.mergeWith = Ts, a.method = Dh, a.methodOf = Bh, a.mixin = Zo, a.negate = ci, a.nthArg = Ph, a.omit = Nv, a.omitBy = Fv, a.once = Wg, a.orderBy = kg, a.over = Mh, a.overArgs = Pg, a.overEvery = Uh, a.overSome = Nh, a.partial = No, a.partialRight = xs, a.partition = xg, a.pick = zv, a.pickBy = Os, a.property = Us, a.propertyOf = Fh, a.pull = kp, a.pullAll = fs, a.pullAllBy = xp, a.pullAllWith = Sp, a.pullAt = Cp, a.range = zh, a.rangeRight = qh, a.rearg = Mg, a.reject = $g, a.remove = $p, a.rest = Ug, a.reverse = Po, a.sampleSize = Ag, a.set = Gv, a.setWith = Hv, a.shuffle = Rg, a.slice = Ip, a.sortBy = Tg, a.sortedUniq = Lp, a.sortedUniqBy = Dp, a.split = vh, a.spread = Ng, a.tail = Bp, a.take = Wp, a.takeRight = Pp, a.takeRightWhile = Mp, a.takeWhile = Up, a.tap = ng, a.throttle = Fg, a.thru = li, a.toArray = As, a.toPairs = Ls, a.toPairsIn = Ds, a.toPath = Zh, a.toPlainObject = Es, a.transform = Kv, a.unary = zg, a.union = Np, a.unionBy = Fp, a.unionWith = zp, a.uniq = qp, a.uniqBy = Gp, a.uniqWith = Hp, a.unset = Yv, a.unzip = Mo, a.unzipWith = ps, a.update = Zv, a.updateWith = Jv, a.values = Yt, a.valuesIn = Xv, a.without = Kp, a.words = Ps, a.wrap = qg, a.xor = Yp, a.xorBy = Zp, a.xorWith = Jp, a.zip = Xp, a.zipObject = Qp, a.zipObjectDeep = jp, a.zipWith = eg, a.entries = Ls, a.entriesIn = Ds, a.extend = Vs, a.extendWith = gi, Zo(a, a), a.add = Xh, a.attempt = Ms, a.camelCase = nh, a.capitalize = Bs, a.ceil = Qh, a.clamp = Qv, a.clone = Hg, a.cloneDeep = Yg, a.cloneDeepWith = Zg, a.cloneWith = Kg, a.conformsTo = Jg, a.deburr = Ws, a.defaultTo = Eh, a.divide = jh, a.endsWith = th, a.eq = Hn, a.escape = rh, a.escapeRegExp = ih, a.every = cg, a.find = pg, a.findIndex = ss, a.findKey = $v, a.findLast = gg, a.findLastIndex = us, a.findLastKey = Iv, a.floor = em, a.forEach = vs, a.forEachRight = hs, a.forIn = Av, a.forInRight = Rv, a.forOwn = Ev, a.forOwnRight = Vv, a.get = qo, a.gt = Xg, a.gte = Qg, a.has = Lv, a.hasIn = Go, a.head = cs, a.identity = wn, a.includes = bg, a.indexOf = gp, a.inRange = jv, a.invoke = Wv, a.isArguments = Et, a.isArray = ke, a.isArrayBuffer = jg, a.isArrayLike = bn, a.isArrayLikeObject = Ze, a.isBoolean = ev, a.isBuffer = yt, a.isDate = nv, a.isElement = tv, a.isEmpty = rv, a.isEqual = iv, a.isEqualWith = ov, a.isError = Fo, a.isFinite = av, a.isFunction = at, a.isInteger = Ss, a.isLength = fi, a.isMap = Cs, a.isMatch = lv, a.isMatchWith = sv, a.isNaN = uv, a.isNative = dv, a.isNil = fv, a.isNull = cv, a.isNumber = $s, a.isObject = He, a.isObjectLike = Ye, a.isPlainObject = br, a.isRegExp = zo, a.isSafeInteger = pv, a.isSet = Is, a.isString = pi, a.isSymbol = $n, a.isTypedArray = Kt, a.isUndefined = gv, a.isWeakMap = vv, a.isWeakSet = hv, a.join = bp, a.kebabCase = oh, a.last = Pn, a.lastIndexOf = yp, a.lowerCase = ah, a.lowerFirst = lh, a.lt = mv, a.lte = _v, a.max = nm, a.maxBy = tm, a.mean = rm, a.meanBy = im, a.min = om, a.minBy = am, a.stubArray = Xo, a.stubFalse = Qo, a.stubObject = Gh, a.stubString = Hh, a.stubTrue = Kh, a.multiply = lm, a.nth = wp, a.noConflict = Wh, a.noop = Jo, a.now = ui, a.pad = sh, a.padEnd = uh, a.padStart = dh, a.parseInt = ch, a.random = eh, a.reduce = Sg, a.reduceRight = Cg, a.repeat = fh, a.replace = ph, a.result = qv, a.round = sm, a.runInContext = w, a.sample = Ig, a.size = Eg, a.snakeCase = gh, a.some = Vg, a.sortedIndex = Ap, a.sortedIndexBy = Rp, a.sortedIndexOf = Ep, a.sortedLastIndex = Vp, a.sortedLastIndexBy = Tp, a.sortedLastIndexOf = Op, a.startCase = hh, a.startsWith = mh, a.subtract = um, a.sum = dm, a.sumBy = cm, a.template = _h, a.times = Yh, a.toFinite = lt, a.toInteger = Se, a.toLength = Rs, a.toLower = bh, a.toNumber = Mn, a.toSafeInteger = bv, a.toString = De, a.toUpper = yh, a.trim = wh, a.trimEnd = kh, a.trimStart = xh, a.truncate = Sh, a.unescape = Ch, a.uniqueId = Jh, a.upperCase = $h, a.upperFirst = Ho, a.each = vs, a.eachRight = hs, a.first = cs, Zo(a, (function() {
          var e = {};
          return Yn(a, function(n, t) {
            We.call(a.prototype, t) || (e[t] = n);
          }), e;
        })(), { chain: !1 }), a.VERSION = m, On(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          a[e].placeholder = a;
        }), On(["drop", "take"], function(e, n) {
          Re.prototype[e] = function(t) {
            t = t === o ? 1 : tn(Se(t), 0);
            var r = this.__filtered__ && !n ? new Re(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = fn(t, r.__takeCount__) : r.__views__.push({
              size: fn(t, Y),
              type: e + (r.__dir__ < 0 ? "Right" : "")
            }), r;
          }, Re.prototype[e + "Right"] = function(t) {
            return this.reverse()[e](t).reverse();
          };
        }), On(["filter", "map", "takeWhile"], function(e, n) {
          var t = n + 1, r = t == oe || t == ae;
          Re.prototype[e] = function(i) {
            var l = this.clone();
            return l.__iteratees__.push({
              iteratee: pe(i, 3),
              type: t
            }), l.__filtered__ = l.__filtered__ || r, l;
          };
        }), On(["head", "last"], function(e, n) {
          var t = "take" + (n ? "Right" : "");
          Re.prototype[e] = function() {
            return this[t](1).value()[0];
          };
        }), On(["initial", "tail"], function(e, n) {
          var t = "drop" + (n ? "" : "Right");
          Re.prototype[e] = function() {
            return this.__filtered__ ? new Re(this) : this[t](1);
          };
        }), Re.prototype.compact = function() {
          return this.filter(wn);
        }, Re.prototype.find = function(e) {
          return this.filter(e).head();
        }, Re.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, Re.prototype.invokeMap = Ie(function(e, n) {
          return typeof e == "function" ? new Re(this) : this.map(function(t) {
            return pr(t, e, n);
          });
        }), Re.prototype.reject = function(e) {
          return this.filter(ci(pe(e)));
        }, Re.prototype.slice = function(e, n) {
          e = Se(e);
          var t = this;
          return t.__filtered__ && (e > 0 || n < 0) ? new Re(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== o && (n = Se(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
        }, Re.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, Re.prototype.toArray = function() {
          return this.take(Y);
        }, Yn(Re.prototype, function(e, n) {
          var t = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), i = a[r ? "take" + (n == "last" ? "Right" : "") : n], l = r || /^find/.test(n);
          i && (a.prototype[n] = function() {
            var u = this.__wrapped__, v = r ? [1] : arguments, k = u instanceof Re, W = v[0], P = k || ke(u), F = function(Ae) {
              var Ee = i.apply(a, pt([Ae], v));
              return r && J ? Ee[0] : Ee;
            };
            P && t && typeof W == "function" && W.length != 1 && (k = P = !1);
            var J = this.__chain__, le = !!this.__actions__.length, ge = l && !J, Ce = k && !le;
            if (!l && P) {
              u = Ce ? u : new Re(this);
              var ve = e.apply(u, v);
              return ve.__actions__.push({ func: li, args: [F], thisArg: o }), new Dn(ve, J);
            }
            return ge && Ce ? e.apply(this, v) : (ve = this.thru(F), ge ? r ? ve.value()[0] : ve.value() : ve);
          });
        }), On(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var n = Or[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
          a.prototype[e] = function() {
            var i = arguments;
            if (r && !this.__chain__) {
              var l = this.value();
              return n.apply(ke(l) ? l : [], i);
            }
            return this[t](function(u) {
              return n.apply(ke(u) ? u : [], i);
            });
          };
        }), Yn(Re.prototype, function(e, n) {
          var t = a[n];
          if (t) {
            var r = t.name + "";
            We.call(Ft, r) || (Ft[r] = []), Ft[r].push({ name: n, func: t });
          }
        }), Ft[ei(o, C).name] = [{
          name: "wrapper",
          func: o
        }], Re.prototype.clone = Sc, Re.prototype.reverse = Cc, Re.prototype.value = $c, a.prototype.at = tg, a.prototype.chain = rg, a.prototype.commit = ig, a.prototype.next = og, a.prototype.plant = lg, a.prototype.reverse = sg, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = ug, a.prototype.first = a.prototype.head, ar && (a.prototype[ar] = ag), a;
      }), Mt = rc();
      kt ? ((kt.exports = Mt)._ = Mt, Ki._ = Mt) : sn._ = Mt;
    }).call(Eb);
  })(wr, wr.exports)), wr.exports;
}
var Tb = Vb();
const Ob = { class: "editor" }, Lb = { class: "editor__fields" }, Db = { class: "editor__actions" }, Bb = {
  key: 1,
  class: "editor__preview"
}, Wb = /* @__PURE__ */ Ge({
  __name: "DatasourceEditor",
  props: {
    itemId: {},
    view: { default: "settings" }
  },
  emits: ["close"],
  setup(c, { emit: _ }) {
    const o = c, m = Z({}), y = xe(Ri), I = xe(Nn), f = gn(I, (O) => O.connections), x = gn(I, (O) => O.datasources), b = H(
      () => y.getDatasourceIdentifiers(m.value.type)?.icon ?? "database"
    ), d = H(() => {
      const O = /* @__PURE__ */ new Set();
      for (const C of x.value)
        for (const T of C.tags ?? []) O.add(T);
      return [...O].sort();
    }), p = H(() => y.registeredDatasources);
    Xn(() => {
      const O = y.getDatasourceModel(o.itemId);
      m.value = O ? {
        uid: O.uid,
        name: O.name,
        type: O.type,
        icon: O.icon ?? "",
        tags: [...O.tags ?? []],
        config: Tb.cloneDeep(O.config ?? {})
      } : { tags: [] };
    });
    const V = () => {
      const O = y.getDatasourceModel(o.itemId);
      if (O) {
        O.name = m.value.name, O.type = m.value.type, O.icon = m.value.icon?.trim() || void 0, O.tags.clear();
        for (const C of m.value.tags ?? []) O.tags.add(C);
        O.config = m.value.config, O.connection = f.value.find(
          (C) => C.uid === m.value.config?.connection
        ), y.saveDatasource(O);
      }
      G("close");
    }, B = H(() => {
      const O = y.getDatasourceIdentifiers(m.value.type);
      return O ? y.resolveIdentifier(O.Preview) : null;
    }), U = H(() => {
      const O = y.getDatasourceIdentifiers(m.value.type);
      return O ? y.resolveIdentifier(O.Settings) : null;
    }), z = (O) => {
      m.value.config = O;
    }, G = _;
    return (O, C) => (g(), S("div", Ob, [
      c.view === "settings" ? (g(), S(_e, { key: 0 }, [
        s("div", Lb, [
          E(h(rn), {
            modelValue: m.value.uid,
            "onUpdate:modelValue": C[0] || (C[0] = (T) => m.value.uid = T),
            label: "UID",
            readonly: ""
          }, null, 8, ["modelValue"]),
          E(h(rn), {
            modelValue: m.value.name,
            "onUpdate:modelValue": C[1] || (C[1] = (T) => m.value.name = T),
            label: "Name"
          }, null, 8, ["modelValue"]),
          E(h(Un), {
            modelValue: m.value.type,
            "onUpdate:modelValue": C[2] || (C[2] = (T) => m.value.type = T),
            label: "Typ",
            options: p.value
          }, null, 8, ["modelValue", "options"]),
          E(h(Ci), {
            modelValue: m.value.icon,
            "onUpdate:modelValue": C[3] || (C[3] = (T) => m.value.icon = T),
            label: "Symbol",
            fallback: b.value,
            hint: "Ohne eigenes Symbol steht hier das des Typs."
          }, null, 8, ["modelValue", "fallback"]),
          E(Ei, {
            modelValue: m.value.tags,
            "onUpdate:modelValue": C[4] || (C[4] = (T) => m.value.tags = T),
            label: "Schlagworte",
            hint: "Wofür diese Datenquelle da ist — danach lässt sich suchen.",
            known: d.value
          }, null, 8, ["modelValue", "known"]),
          (g(), $e(Qn(U.value), {
            config: m.value.config,
            connections: h(f),
            dataSources: h(x)
          }, null, 8, ["config", "connections", "dataSources"]))
        ]),
        s("div", Db, [
          E(h(we), {
            intent: "quiet",
            onClick: C[5] || (C[5] = (T) => O.$emit("close"))
          }, {
            default: ne(() => [...C[6] || (C[6] = [
              ue("Schließen", -1)
            ])]),
            _: 1
          }),
          E(h(we), {
            intent: "primary",
            onClick: V
          }, {
            default: ne(() => [...C[7] || (C[7] = [
              ue("Speichern", -1)
            ])]),
            _: 1
          })
        ])
      ], 64)) : (g(), S("div", Bb, [
        (g(), $e(Qn(B.value), {
          "data-source": m.value,
          key: m.value.uid,
          onUpdateConfig: z
        }, null, 40, ["data-source"]))
      ]))
    ]));
  }
}), Pb = /* @__PURE__ */ Ke(Wb, [["__scopeId", "data-v-41f0a44b"]]), Mb = { class: "editor" }, Ub = { class: "editor__fields" }, Nb = { class: "editor__actions" }, Fb = /* @__PURE__ */ Ge({
  __name: "ConnectionEditor",
  props: {
    itemId: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(c, { emit: _ }) {
    const o = c, m = _, y = Z({}), I = xe(Ai), f = H(() => I.registeredConnections);
    Xn(() => {
      const V = I.getConnectionModel(o.itemId);
      y.value = V ? {
        uid: V.uid,
        name: V.name,
        type: V.type,
        icon: V.icon ?? "",
        tags: [...V.tags ?? []],
        config: JSON.parse(JSON.stringify(V.config ?? {}))
      } : { tags: [] };
    });
    const x = H(
      () => I.getConnectionIdentifiers(y.value.type)?.icon ?? "link"
    ), b = H(() => {
      const V = /* @__PURE__ */ new Set();
      for (const B of I.getConnections())
        for (const U of B.tags ?? []) V.add(U);
      return [...V].sort();
    }), d = H(() => {
      const V = I.getConnectionIdentifiers(y.value.type);
      return V ? I.resolveIdentifier(V.Settings) : null;
    }), p = () => {
      const V = I.getConnectionModel(o.itemId);
      if (V) {
        V.name = y.value.name, V.type = y.value.type, V.icon = y.value.icon?.trim() || void 0, V.tags.clear();
        for (const B of y.value.tags ?? []) V.tags.add(B);
        V.config = y.value.config, I.saveConnection(V);
      }
      m("close");
    };
    return (V, B) => (g(), S("div", Mb, [
      s("div", Ub, [
        E(h(rn), {
          modelValue: y.value.uid,
          "onUpdate:modelValue": B[0] || (B[0] = (U) => y.value.uid = U),
          label: "UID",
          readonly: ""
        }, null, 8, ["modelValue"]),
        E(h(rn), {
          modelValue: y.value.name,
          "onUpdate:modelValue": B[1] || (B[1] = (U) => y.value.name = U),
          label: "Name"
        }, null, 8, ["modelValue"]),
        E(h(Un), {
          modelValue: y.value.type,
          "onUpdate:modelValue": B[2] || (B[2] = (U) => y.value.type = U),
          label: "Typ",
          options: f.value
        }, null, 8, ["modelValue", "options"]),
        E(h(Ci), {
          modelValue: y.value.icon,
          "onUpdate:modelValue": B[3] || (B[3] = (U) => y.value.icon = U),
          label: "Symbol",
          fallback: x.value,
          hint: "Ohne eigenes Symbol steht hier das des Typs."
        }, null, 8, ["modelValue", "fallback"]),
        E(Ei, {
          modelValue: y.value.tags,
          "onUpdate:modelValue": B[4] || (B[4] = (U) => y.value.tags = U),
          label: "Schlagworte",
          hint: "Wofür diese Verbindung da ist — danach lässt sich suchen.",
          known: b.value
        }, null, 8, ["modelValue", "known"]),
        (g(), $e(Qn(d.value), {
          config: y.value.config
        }, null, 8, ["config"]))
      ]),
      s("div", Nb, [
        E(h(we), {
          intent: "quiet",
          onClick: B[5] || (B[5] = (U) => V.$emit("close"))
        }, {
          default: ne(() => [...B[6] || (B[6] = [
            ue("Schließen", -1)
          ])]),
          _: 1
        }),
        E(h(we), {
          intent: "primary",
          onClick: p
        }, {
          default: ne(() => [...B[7] || (B[7] = [
            ue("Speichern", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), zb = /* @__PURE__ */ Ke(Fb, [["__scopeId", "data-v-0fad9a41"]]), qb = { class: "data-page" }, Gb = { class: "data-page__tree" }, Hb = { class: "data-page__detail" }, Kb = {
  key: 0,
  class: "data-page__nothing"
}, Yb = { class: "detail__head" }, Zb = { class: "detail__what" }, Jb = { class: "detail__name" }, Xb = {
  key: 0,
  class: "detail__sub"
}, Qb = {
  key: 0,
  class: "detail__usage"
}, jb = { class: "detail__body" }, ey = /* @__PURE__ */ Ge({
  __name: "ConnectionsAndData",
  setup(c) {
    const _ = xe(Nn), o = gn(_, (z) => z.connections), m = gn(_, (z) => z.datasources), { usageOf: y, usageLabel: I } = $u(), f = Z(void 0), x = Z("preview"), b = xe("endpointfinder", null), d = () => b?.(), p = ru(() => {
      const z = f.value;
      if (z)
        return z.type === "Connection" ? o.value.find((G) => G.uid === z.itemId) : m.value.find((G) => G.uid === z.itemId);
    }), V = H(() => {
      const z = p.value;
      return z ? f.value?.type === "Connection" ? z.type ?? "" : [z.type, z.connection?.name].filter(Boolean).join(" · ") : "";
    }), B = H(() => f.value?.type !== "DataSource" || !f.value.itemId ? "" : I(y(f.value.itemId))), U = H(
      () => f.value?.type === "DataSource" ? [
        { id: "preview", label: "Vorschau" },
        { id: "settings", label: "Einstellungen" }
      ] : [{ id: "settings", label: "Einstellungen" }]
    );
    return ln(f, (z) => {
      x.value = z?.type === "DataSource" ? "preview" : "settings";
    }), (z, G) => (g(), S("div", qb, [
      s("aside", Gb, [
        E(Rb, {
          modelValue: f.value,
          "onUpdate:modelValue": G[0] || (G[0] = (O) => f.value = O),
          onFindEndpoints: d,
          onView: G[1] || (G[1] = (O) => x.value = O)
        }, null, 8, ["modelValue"])
      ]),
      s("section", Hb, [
        f.value ? (g(), S(_e, { key: 1 }, [
          s("header", Yb, [
            s("div", Zb, [
              s("h1", Jb, N(h(p)?.name ?? f.value.itemId), 1),
              V.value ? (g(), S("span", Xb, N(V.value), 1)) : j("", !0)
            ]),
            B.value ? (g(), S("span", Qb, "Verwendet in " + N(B.value), 1)) : j("", !0)
          ]),
          E(h(Rm), {
            modelValue: x.value,
            "onUpdate:modelValue": G[2] || (G[2] = (O) => x.value = O),
            tabs: U.value,
            label: "Ansicht der Auswahl"
          }, null, 8, ["modelValue", "tabs"]),
          s("div", jb, [
            f.value.type === "Connection" ? (g(), $e(zb, {
              key: f.value.itemId,
              "item-id": f.value.itemId,
              onClose: G[3] || (G[3] = (O) => f.value = void 0)
            }, null, 8, ["item-id"])) : (g(), $e(Pb, {
              key: `${f.value.itemId}-${x.value}`,
              "item-id": f.value.itemId,
              view: x.value === "preview" ? "preview" : "settings",
              onClose: G[4] || (G[4] = (O) => f.value = void 0)
            }, null, 8, ["item-id", "view"]))
          ])
        ], 64)) : (g(), S("p", Kb, " Wähle links eine Verbindung oder eine Datenquelle. "))
      ])
    ]));
  }
}), ny = /* @__PURE__ */ Ke(ey, [["__scopeId", "data-v-2b44b5f1"]]), ty = { class: "pages" }, ry = { class: "pages__panel" }, iy = { class: "pages__bar" }, oy = { class: "pages__title" }, ay = {
  key: 0,
  class: "pages__count"
}, ly = {
  key: 0,
  class: "pages__of"
}, sy = { class: "pages__tools" }, uy = { class: "pages__body" }, dy = { class: "pages__grid" }, cy = ["aria-label", "onClick", "onKeydown"], fy = { class: "page__body" }, py = { class: "page__name" }, gy = { class: "page__meta" }, vy = {
  key: 0,
  class: "page__usage"
}, hy = {
  key: 1,
  class: "page__kinds"
}, my = {
  key: 0,
  class: "page__kind"
}, _y = ["aria-label", "onClick"], by = {
  key: 0,
  class: "pages__nomatch"
}, yy = /* @__PURE__ */ Ge({
  __name: "BoardPages",
  setup(c) {
    const _ = $i(), o = Z(""), { usageOf: m, byUsage: y, lastOpenedLabel: I } = ua(), f = xe(Nn), x = xe(er), b = gn(f, (G) => G.board?.pages), d = H(() => (b.value, f.board)), p = H(() => (b.value, x ? x.getAllPageIds().slice().sort(y).map(
      (G) => ca(
        G,
        x.getPage(G),
        x.getPage(G)?.layout?.toArray() ?? [],
        x.getPage(G)?.widgets?.toArray() ?? []
      )
    ) : [])), V = H(() => {
      const G = o.value.trim().toLowerCase();
      return G ? p.value.filter(
        (O) => O.name.toLowerCase().includes(G) || O.description.toLowerCase().includes(G) || O.kinds.some((C) => C.toLowerCase().includes(G))
      ) : p.value;
    });
    function B(G) {
      _.push(`/page/${G}`);
    }
    function U(G) {
      _.push(`/page/${G}/edit`);
    }
    function z() {
      if (!x) return;
      const G = sa();
      x.registerPage({
        id: G,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), _.push(`/page/${G}/edit`);
    }
    return (G, O) => (g(), S("div", ty, [
      s("div", ry, [
        s("header", iy, [
          s("h1", oy, [
            O[1] || (O[1] = ue(" Seiten ", -1)),
            p.value.length ? (g(), S("span", ay, N(p.value.length), 1)) : j("", !0)
          ]),
          d.value?.name ? (g(), S("p", ly, "in " + N(d.value.name), 1)) : j("", !0),
          s("div", sy, [
            Qt(s("input", {
              "onUpdate:modelValue": O[0] || (O[0] = (C) => o.value = C),
              class: "pages__search",
              type: "search",
              placeholder: "Seiten filtern",
              "aria-label": "Seiten filtern"
            }, null, 512), [
              [ta, o.value]
            ]),
            E(h(we), {
              intent: "primary",
              size: "sm",
              onClick: z
            }, {
              default: ne(() => [...O[2] || (O[2] = [
                ue("Neue Seite", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        s("div", uy, [
          s("div", dy, [
            (g(!0), S(_e, null, Me(V.value, (C) => (g(), S("article", {
              key: C.id,
              class: "page",
              tabindex: "0",
              role: "button",
              "aria-label": `Seite ${C.name} öffnen`,
              onClick: (T) => B(C.id),
              onKeydown: [
                jt((T) => B(C.id), ["enter"]),
                jt(an((T) => B(C.id), ["prevent"]), ["space"])
              ]
            }, [
              E(da, {
                items: C.items,
                "type-by-id": C.typeById
              }, null, 8, ["items", "type-by-id"]),
              s("div", fy, [
                s("h2", py, N(C.name), 1),
                s("p", gy, [
                  ue(N(C.widgetCount) + " " + N(C.widgetCount === 1 ? "Widget" : "Widgets") + " ", 1),
                  C.sourceCount ? (g(), S(_e, { key: 0 }, [
                    ue(" · " + N(C.sourceCount) + " " + N(C.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1)
                  ], 64)) : j("", !0)
                ]),
                h(m)(C.id) ? (g(), S("p", vy, N(h(m)(C.id)?.count) + "× geöffnet · zuletzt " + N(h(I)(C.id)), 1)) : j("", !0),
                C.kinds.length ? (g(), S("ul", hy, [
                  (g(!0), S(_e, null, Me(C.kinds.slice(0, 3), (T) => (g(), S("li", {
                    key: T,
                    class: "page__kind"
                  }, N(T), 1))), 128)),
                  C.kinds.length > 3 ? (g(), S("li", my, " +" + N(C.kinds.length - 3), 1)) : j("", !0)
                ])) : j("", !0)
              ]),
              s("button", {
                class: "page__edit",
                type: "button",
                "aria-label": `Seite ${C.name} bearbeiten`,
                onClick: an((T) => U(C.id), ["stop"])
              }, " Bearbeiten ", 8, _y)
            ], 40, cy))), 128)),
            s("button", {
              class: "page page--new",
              type: "button",
              onClick: z
            }, [...O[3] || (O[3] = [
              s("span", {
                class: "page__plus",
                "aria-hidden": "true"
              }, "+", -1),
              s("span", { class: "page__name" }, "Neue Seite", -1),
              s("span", { class: "page__meta" }, "Leer starten", -1)
            ])]),
            p.value.length && V.value.length === 0 ? (g(), S("p", by, " Keine Seite passt zu „" + N(o.value) + "“. ", 1)) : j("", !0)
          ])
        ])
      ])
    ]));
  }
}), wy = /* @__PURE__ */ Ke(yy, [["__scopeId", "data-v-21364f0b"]]), ky = { class: "add_widget_window" }, xy = { class: "add_widget_window__scroll" }, Sy = { class: "widgets_grid-icon" }, Cy = ["src"], $y = { class: "widgets_grid-name" }, Iy = /* @__PURE__ */ Ge({
  __name: "AddWidgetWindow",
  setup(c) {
    const _ = Z(""), o = Z(""), m = gn(xe(Nn), (d) => d.datasources), y = (d) => {
      const p = document.createElement("div");
      document.body.appendChild(p), d.dataTransfer?.setDragImage(p, 0, 0), setTimeout(() => {
        document.body.removeChild(p);
      }, 0);
    }, I = xe(du);
    console.log(I.getAllWidgets());
    const f = Object.entries(I.getAllWidgets()).map(([d, p]) => ({ type: d, name: p.name, icon: p.icon })), x = H(() => f);
    H(() => [
      "None",
      ...m.value.map((d) => d.type).filter((d, p, V) => p === V.indexOf(d))
    ]);
    const b = H(() => m.value.filter((d) => d.type === o.value).map((d) => ({ uid: d.uid })));
    return ln(o, (d) => {
      !d || d === "None" ? _.value = "" : b.value.map((V) => V.uid).includes(_.value) || (_.value = "");
    }), (d, p) => (g(), S("div", ky, [
      s("div", xy, [
        E(h(Zm), {
          class: "widgets_grid",
          list: x.value,
          group: { name: "widgets", pull: "clone", put: !1 },
          itemKey: "type"
        }, {
          item: ne(({ element: V }) => [
            s("div", {
              class: "widgets_grid-item",
              draggable: "true",
              onDragstart: p[0] || (p[0] = (B) => y(B))
            }, [
              s("span", Sy, [
                s("img", {
                  src: V.icon,
                  alt: ""
                }, null, 8, Cy)
              ]),
              s("span", $y, N(V.name), 1)
            ], 32)
          ]),
          _: 1
        }, 8, ["list"])
      ])
    ]));
  }
}), Ay = /* @__PURE__ */ Ke(Iy, [["__scopeId", "data-v-3ac9fb06"]]), Ry = {
  class: "overlay",
  role: "dialog",
  "aria-modal": "true",
  "aria-label": "Widget-Einstellungen"
}, Ey = { class: "stage" }, Vy = { class: "stage__head" }, Ty = { class: "stage__name" }, Oy = { class: "stage__uid" }, Ly = {
  class: "seg",
  role: "group",
  "aria-label": "Vorschaugröße"
}, Dy = { class: "stage__bar" }, By = { class: "stage__body" }, Wy = {
  class: "tabs",
  role: "tablist",
  "aria-label": "Einstellungen"
}, Py = ["aria-selected"], My = { class: "tab__n" }, Uy = ["aria-selected"], Ny = ["aria-selected", "onClick"], Fy = ["aria-selected"], zy = ["aria-selected"], qy = { class: "tab__n" }, Gy = ["aria-selected"], Hy = { class: "tab__n" }, Ky = {
  key: 0,
  class: "fields"
}, Yy = {
  key: 0,
  class: "bound"
}, Zy = { class: "bound__name" }, Jy = { class: "bound__var" }, Xy = {
  key: 1,
  class: "note"
}, Qy = { class: "foot" }, jy = ":scope > [data-section], :scope > .va-collapse", ew = /* @__PURE__ */ Ge({
  __name: "WidgetSettingsOverlay",
  props: /* @__PURE__ */ jn({
    boardSize: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ jn(["close"], ["update:modelValue"]),
  setup(c, { emit: _ }) {
    const o = _, m = wt(c, "modelValue"), y = c, I = gn(xe(Nn), ($) => $.datasources), x = xe(du).getAllWidgets();
    xe("i18n");
    const b = Z("look"), d = H(() => {
      const $ = m.value?.type;
      return $ ? x[$]?.settingsForm : void 0;
    }), p = H(
      () => !!(m.value?.type && x[m.value.type]?.settingsComponent)
    ), V = H(() => !!d.value && p.value), B = H(() => !!d.value || p.value);
    ln(B, ($) => {
      !$ && b.value === "look" && (b.value = "data");
    }, { immediate: !0 });
    const U = Z(), z = Z([]), G = Z(0);
    function O($) {
      return $ ? [...$.querySelectorAll(jy)] : [];
    }
    function C() {
      return O(U.value);
    }
    function T($) {
      const A = $.dataset.section;
      if (A) return A;
      const M = $.querySelector(".va-collapse__header-wrapper");
      return M ? [...M.querySelectorAll("*")].filter((Ve) => !Ve.classList.contains("va-icon") && Ve.children.length === 0).map((Ve) => (Ve.textContent ?? "").trim()).filter((Ve) => Ve && !/^(expand_more|expand_less|add_circle)$/.test(Ve))[0] ?? "" : "";
    }
    function re($) {
      return $.className.includes("--expanded");
    }
    function ee($) {
      G.value = $, C().forEach((A, M) => {
        const be = M === $;
        if (A.classList.contains("va-collapse")) {
          const Ve = A.querySelector(".va-collapse__header-wrapper");
          Ve && (Ve.style.display = "none"), be !== re(A) && Ve?.click();
        }
        A.style.display = be ? "" : "none";
      });
    }
    async function L() {
      await Sr();
      const $ = C();
      z.value = $.map((A, M) => ({ label: T(A) || `Abschnitt ${M + 1}`, index: M })), $.length && ee(Math.min(G.value, $.length - 1));
    }
    function K($) {
      b.value = "look", ee($);
    }
    const he = Z();
    async function Ue() {
      const $ = d.value?.unmodelledSections, A = he.value;
      if (!(!$ || !A)) {
        await Sr();
        for (const M of O(A))
          M.style.display = $.includes(T(M)) ? "" : "none";
      }
    }
    ln(b, ($) => {
      $ === "rest" && Ue();
    });
    let Qe = {
      wrapperConfig: {},
      config: {}
    };
    function je($) {
      return m.value?.[$];
    }
    function en($) {
      if ($)
        return typeof $.toArray == "function" ? $.toArray() : Array.isArray($) ? [...$] : void 0;
    }
    function ce() {
      Qe = { wrapperConfig: {}, config: {} };
      for (const $ of ["wrapperConfig", "config"]) {
        const A = je($);
        if (A)
          for (const [M, be] of Object.entries(A)) {
            const Ve = en(be), Vn = !!be && typeof be == "object" && "value" in be;
            Qe[$][M] = {
              field: be,
              hasValue: Vn,
              value: Vn ? be.value : void 0,
              list: Ve
            };
          }
      }
    }
    function fe() {
      for (const $ of ["wrapperConfig", "config"]) {
        const A = je($);
        if (A)
          for (const [M, be] of Object.entries(Qe[$]))
            try {
              if (be.list) {
                const kn = A[M];
                if (kn && typeof kn.clear == "function") {
                  kn.clear();
                  for (const Fn of be.list) kn.add(Fn);
                } else Array.isArray(kn) && kn.splice(0, kn.length, ...be.list);
                continue;
              }
              const Ve = A[M], Vn = !!Ve && typeof Ve == "object" && "value" in Ve;
              be.hasValue && Vn ? Ve.value = be.value : A[M] = be.field;
            } catch {
            }
      }
    }
    function oe() {
      fe(), o("close");
    }
    function de() {
      o("close");
    }
    const ae = Z(!1), X = H(() => ae.value || !y.boardSize ? { width: "100%", height: "100%" } : {
      width: `${y.boardSize.width}px`,
      height: `${y.boardSize.height}px`,
      maxWidth: "100%",
      maxHeight: "100%"
    }), ie = H(
      () => y.boardSize ? `${Math.round(y.boardSize.width)} × ${Math.round(y.boardSize.height)} px, wie im Board` : "Größe des Boards nicht bekannt"
    ), me = Z(Y());
    let Be = !1;
    function Y() {
      const $ = Number(localStorage.getItem("daanse.board.widgetSettingsWidth"));
      return Number.isFinite($) && $ >= 320 ? $ : 400;
    }
    function Q($) {
      Be = !0, $.target.setPointerCapture?.($.pointerId);
    }
    function se($) {
      if (!Be) return;
      const A = window.innerWidth - $.clientX;
      me.value = Math.min(Math.max(A, 320), Math.max(window.innerWidth - 360, 360));
    }
    function Oe() {
      if (Be) {
        Be = !1;
        try {
          localStorage.setItem("daanse.board.widgetSettingsWidth", String(Math.round(me.value)));
        } catch {
        }
      }
    }
    function Xe($) {
      me.value = Math.min(Math.max(me.value + $, 320), window.innerWidth - 360), Oe();
    }
    const Rn = H(() => {
      const $ = [], A = [
        ["Rahmen", m.value?.wrapperConfig],
        ["Darstellung", m.value?.config]
      ];
      for (const [M, be] of A)
        for (const [Ve, Vn] of Object.entries(be ?? {})) {
          const kn = Vn?.variable;
          kn && $.push({ group: M, name: Ve, variable: String(kn?.name ?? kn) });
        }
      return $;
    }), ct = H(() => Object.keys(m.value?.wrapperConfig ?? {}).length), En = H(() => m.value?.config?.datasourceId ? 1 : 0);
    function q($) {
      $.key === "Escape" && oe();
    }
    return ln(b, ($) => {
      $ === "look" && L();
    }), Xn(() => {
      ce(), L(), window.addEventListener("keydown", q), window.addEventListener("pointermove", se), window.addEventListener("pointerup", Oe);
    }), Si(() => {
      window.removeEventListener("keydown", q), window.removeEventListener("pointermove", se), window.removeEventListener("pointerup", Oe);
    }), ($, A) => (g(), $e(aa, { to: "body" }, [
      s("div", {
        class: "scrim",
        onClick: A[14] || (A[14] = an((M) => oe(), ["self"]))
      }, [
        s("section", Ry, [
          s("div", Ey, [
            s("header", Vy, [
              s("span", Ty, N(m.value?.type ?? "Widget"), 1),
              s("code", Oy, N(m.value?.uid), 1),
              A[15] || (A[15] = s("span", { class: "stage__spacer" }, null, -1)),
              s("div", Ly, [
                s("button", {
                  type: "button",
                  class: Te({ on: !ae.value }),
                  onClick: A[0] || (A[0] = (M) => ae.value = !1)
                }, "Boardgröße", 2),
                s("button", {
                  type: "button",
                  class: Te({ on: ae.value }),
                  onClick: A[1] || (A[1] = (M) => ae.value = !0)
                }, "Füllen", 2)
              ])
            ]),
            s("div", Dy, N(ae.value ? "Auf die Fläche gestreckt" : ie.value), 1),
            s("div", By, [
              s("div", {
                class: "preview",
                style: Ot(X.value)
              }, [
                eu($.$slots, "preview", {}, void 0, !0)
              ], 4)
            ])
          ]),
          s("div", {
            class: "handle",
            role: "separator",
            "aria-orientation": "vertical",
            "aria-label": "Breite der Einstellungen",
            tabindex: "0",
            onPointerdown: an(Q, ["prevent"]),
            onKeydown: [
              A[2] || (A[2] = jt(an((M) => Xe(16), ["prevent"]), ["left"])),
              A[3] || (A[3] = jt(an((M) => Xe(-16), ["prevent"]), ["right"]))
            ]
          }, null, 32),
          s("div", {
            class: "side",
            style: Ot({ width: me.value + "px" })
          }, [
            s("nav", Wy, [
              s("button", {
                type: "button",
                role: "tab",
                "aria-selected": b.value === "data",
                class: Te(["tab", { on: b.value === "data" }]),
                onClick: A[4] || (A[4] = (M) => b.value = "data")
              }, [
                A[16] || (A[16] = ue(" Daten ", -1)),
                s("span", My, N(En.value), 1)
              ], 10, Py),
              !z.value.length && B.value ? (g(), S("button", {
                key: 0,
                type: "button",
                role: "tab",
                "aria-selected": b.value === "look",
                class: Te(["tab", { on: b.value === "look" }]),
                onClick: A[5] || (A[5] = (M) => b.value = "look")
              }, " Darstellung ", 10, Uy)) : j("", !0),
              (g(!0), S(_e, null, Me(z.value, (M) => (g(), S("button", {
                key: M.index,
                type: "button",
                role: "tab",
                "aria-selected": b.value === "look" && G.value === M.index,
                class: Te(["tab", { on: b.value === "look" && G.value === M.index }]),
                onClick: (be) => K(M.index)
              }, N(M.label), 11, Ny))), 128)),
              V.value ? (g(), S("button", {
                key: 1,
                type: "button",
                role: "tab",
                "aria-selected": b.value === "rest",
                class: Te(["tab", { on: b.value === "rest" }]),
                onClick: A[6] || (A[6] = (M) => b.value = "rest")
              }, " Weiteres ", 10, Fy)) : j("", !0),
              s("button", {
                type: "button",
                role: "tab",
                "aria-selected": b.value === "frame",
                class: Te(["tab", { on: b.value === "frame" }]),
                onClick: A[7] || (A[7] = (M) => b.value = "frame")
              }, [
                A[17] || (A[17] = ue(" Rahmen ", -1)),
                s("span", qy, N(ct.value), 1)
              ], 10, zy),
              s("button", {
                type: "button",
                role: "tab",
                "aria-selected": b.value === "variables",
                class: Te(["tab", { on: b.value === "variables" }]),
                onClick: A[8] || (A[8] = (M) => b.value = "variables")
              }, [
                A[18] || (A[18] = ue(" Variablen ", -1)),
                s("span", Hy, N(Rn.value.length), 1)
              ], 10, Gy)
            ]),
            m.value ? (g(), S("div", Ky, [
              b.value === "data" ? (g(), S(_e, { key: 0 }, [
                E(h(Un), {
                  modelValue: m.value.config.datasourceId,
                  "onUpdate:modelValue": A[9] || (A[9] = (M) => m.value.config.datasourceId = M),
                  label: "Datenquelle",
                  class: "pick",
                  options: h(I),
                  clearable: ""
                }, null, 8, ["modelValue", "options"]),
                A[19] || (A[19] = s("p", { class: "note" }, " Woher dieses Widget seine Werte nimmt. Ohne Datenquelle zeigt es nur, was fest eingestellt ist. ", -1))
              ], 64)) : j("", !0),
              Qt(s("div", {
                ref_key: "lookHost",
                ref: U
              }, [
                d.value ? (g(), $e(h(wi), {
                  key: 0,
                  modelValue: m.value.config,
                  "onUpdate:modelValue": A[10] || (A[10] = (M) => m.value.config = M),
                  create: d.value.create,
                  "ui-model-xmi": d.value.xmi,
                  "domain-package": d.value.ePackage(),
                  "ui-model-uri": d.value.uri,
                  "entry-forms": d.value.entryForms
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : (g(), $e(Qn(h(x)[m.value.type ?? ""]?.settingsComponent), {
                  modelValue: m.value.config,
                  "onUpdate:modelValue": A[11] || (A[11] = (M) => m.value.config = M),
                  key: m.value.uid,
                  dataSources: h(I)
                }, null, 8, ["modelValue", "dataSources"]))
              ], 512), [
                [jo, b.value === "look"]
              ]),
              Qt(s("div", {
                ref_key: "restHost",
                ref: he
              }, [
                A[20] || (A[20] = s("p", { class: "rest__note" }, " Einstellungen, die dieses Widget selbst mitbringt und die sich nicht als Feld beschreiben lassen. ", -1)),
                V.value ? (g(), $e(Qn(h(x)[m.value.type ?? ""]?.settingsComponent), {
                  modelValue: m.value.config,
                  "onUpdate:modelValue": A[12] || (A[12] = (M) => m.value.config = M),
                  key: m.value.uid + "-rest",
                  dataSources: h(I)
                }, null, 8, ["modelValue", "dataSources"])) : j("", !0)
              ], 512), [
                [jo, b.value === "rest"]
              ]),
              Qt(s("div", null, [
                E(h(wi), {
                  modelValue: m.value.wrapperConfig,
                  "onUpdate:modelValue": A[13] || (A[13] = (M) => m.value.wrapperConfig = M),
                  create: () => new (h(Qm))(),
                  "ui-model-xmi": h(Xm),
                  "domain-package": h(Jm).eINSTANCE,
                  "ui-model-uri": "/wrapper-settings.ui.xmi"
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package"])
              ], 512), [
                [jo, b.value === "frame"]
              ]),
              b.value === "variables" ? (g(), S(_e, { key: 1 }, [
                Rn.value.length ? (g(), S("table", Yy, [
                  A[21] || (A[21] = s("thead", null, [
                    s("tr", null, [
                      s("th", null, "Feld"),
                      s("th", null, "Bereich"),
                      s("th", null, "Variable")
                    ])
                  ], -1)),
                  s("tbody", null, [
                    (g(!0), S(_e, null, Me(Rn.value, (M) => (g(), S("tr", {
                      key: M.group + M.name
                    }, [
                      s("td", Zy, N(M.name), 1),
                      s("td", null, N(M.group), 1),
                      s("td", Jy, N(M.variable), 1)
                    ]))), 128))
                  ])
                ])) : (g(), S("p", Xy, [...A[22] || (A[22] = [
                  ue(" Kein Feld dieses Widgets hängt an einer Variablen. Über das ", -1),
                  s("span", { class: "var-mark" }, "{x}", -1),
                  ue(" neben einem Feld lässt sich eines binden. ", -1)
                ])]))
              ], 64)) : j("", !0)
            ])) : j("", !0),
            s("footer", Qy, [
              A[25] || (A[25] = s("span", { class: "foot__hint" }, "Änderungen greifen erst mit „Fertig“", -1)),
              A[26] || (A[26] = s("span", { class: "stage__spacer" }, null, -1)),
              E(h(we), {
                size: "sm",
                onClick: oe
              }, {
                default: ne(() => [...A[23] || (A[23] = [
                  ue("Verwerfen", -1)
                ])]),
                _: 1
              }),
              E(h(we), {
                intent: "primary",
                size: "sm",
                onClick: de
              }, {
                default: ne(() => [...A[24] || (A[24] = [
                  ue("Fertig", -1)
                ])]),
                _: 1
              })
            ])
          ], 4)
        ])
      ])
    ]));
  }
}), nw = /* @__PURE__ */ Ke(ew, [["__scopeId", "data-v-67bd2420"]]), tw = {
  class: "page-settings",
  "aria-label": "Seite einrichten"
}, rw = { class: "head" }, iw = { class: "body" }, ow = {
  key: 0,
  class: "missing"
}, aw = { class: "group" }, lw = { class: "group" }, sw = { class: "group" }, uw = { class: "group" }, dw = { class: "ident" }, cw = { class: "foot" }, fw = /* @__PURE__ */ Ge({
  __name: "PageSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ jn(["close"], ["update:modelValue"]),
  setup(c, { emit: _ }) {
    const o = wt(c, "modelValue"), m = _, y = xe(er), I = xe(Ii), f = Z(null), x = H(() => I?.getAllLayouts() ?? []), b = H(
      () => x.value.find(
        (O) => O.id === "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      ) ?? x.value[0]
    ), d = H({
      get: () => f.value?.layoutId ?? "",
      set: (O) => {
        f.value && (f.value.layoutId = O);
      }
    }), p = H(
      () => f.value?.layoutId ? I?.getLayout(f.value.layoutId) : void 0
    ), V = [
      { uid: "auto", name: "Auto" },
      { uid: "cover", name: "Füllend" },
      { uid: "contain", name: "Einpassend" }
    ], B = [
      { uid: "no-repeat", name: "Nicht wiederholen" },
      { uid: "repeat", name: "Wiederholen" },
      { uid: "repeat-x", name: "Waagerecht wiederholen" },
      { uid: "repeat-y", name: "Senkrecht wiederholen" }
    ], U = [
      { uid: "center", name: "Mitte" },
      { uid: "top", name: "Oben" },
      { uid: "bottom", name: "Unten" },
      { uid: "left", name: "Links" },
      { uid: "right", name: "Rechts" },
      { uid: "top left", name: "Oben links" },
      { uid: "top right", name: "Oben rechts" },
      { uid: "bottom left", name: "Unten links" },
      { uid: "bottom right", name: "Unten rechts" }
    ], z = H(() => !!f.value?.backgroundImage?.trim());
    function G() {
      if (!o.value || !y) {
        f.value = null;
        return;
      }
      let O;
      try {
        O = y.getPage(o.value);
      } catch {
        O = void 0;
      }
      f.value = O ? {
        id: O.id,
        name: O.name,
        description: O.description,
        icon: O.icon,
        visibleInNavigation: O.visibleInNavigation ?? !0,
        layoutId: O.layoutId ?? b.value?.id,
        layoutSettings: O.layoutSettings,
        backgroundColor: O.backgroundColor,
        backgroundImage: O.backgroundImage,
        backgroundSize: O.backgroundSize,
        backgroundPosition: O.backgroundPosition,
        backgroundRepeat: O.backgroundRepeat
      } : null;
    }
    return Xn(G), ln(o, G), ln(
      f,
      () => {
        f.value && y?.updatePage(f.value);
      },
      { deep: !0 }
    ), (O, C) => (g(), S("aside", tw, [
      s("header", rw, [
        C[14] || (C[14] = s("h2", { class: "head__title" }, "Seite einrichten", -1)),
        s("button", {
          type: "button",
          class: "head__close",
          "aria-label": "Schließen",
          onClick: C[0] || (C[0] = (T) => m("close"))
        }, " × ")
      ]),
      s("div", iw, [
        f.value ? (g(), S(_e, { key: 1 }, [
          s("section", aw, [
            C[15] || (C[15] = s("h3", { class: "group__label" }, "Seite", -1)),
            E(h(rn), {
              modelValue: f.value.name,
              "onUpdate:modelValue": C[1] || (C[1] = (T) => f.value.name = T),
              label: "Name"
            }, null, 8, ["modelValue"]),
            E(h(rn), {
              modelValue: f.value.description,
              "onUpdate:modelValue": C[2] || (C[2] = (T) => f.value.description = T),
              label: "Beschreibung"
            }, null, 8, ["modelValue"]),
            E(h(rn), {
              modelValue: f.value.icon,
              "onUpdate:modelValue": C[3] || (C[3] = (T) => f.value.icon = T),
              label: "Symbol",
              placeholder: "Name eines Material-Icons"
            }, null, 8, ["modelValue"])
          ]),
          s("section", lw, [
            C[16] || (C[16] = s("h3", { class: "group__label" }, "Layout", -1)),
            E(h(Un), {
              modelValue: d.value,
              "onUpdate:modelValue": C[4] || (C[4] = (T) => d.value = T),
              label: "Layout",
              options: x.value,
              "value-key": "id",
              "label-key": "name"
            }, null, 8, ["modelValue", "options"]),
            p.value?.settingsForm ? (g(), $e(h(wi), {
              key: 0,
              modelValue: f.value.layoutSettings,
              "onUpdate:modelValue": C[5] || (C[5] = (T) => f.value.layoutSettings = T),
              create: p.value.settingsForm.create,
              "ui-model-xmi": p.value.settingsForm.xmi,
              "domain-package": p.value.settingsForm.ePackage(),
              "ui-model-uri": p.value.settingsForm.uri,
              "entry-forms": p.value.settingsForm.entryForms
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : p.value?.settings ? (g(), $e(Qn(p.value.settings), {
              key: 1,
              modelValue: f.value.layoutSettings,
              "onUpdate:modelValue": C[6] || (C[6] = (T) => f.value.layoutSettings = T)
            }, null, 8, ["modelValue"])) : j("", !0)
          ]),
          s("section", sw, [
            C[17] || (C[17] = s("h3", { class: "group__label" }, "Hintergrund", -1)),
            E(h(ou), {
              modelValue: f.value.backgroundColor,
              "onUpdate:modelValue": C[7] || (C[7] = (T) => f.value.backgroundColor = T),
              label: "Farbe",
              stacked: ""
            }, null, 8, ["modelValue"]),
            E(h(rn), {
              modelValue: f.value.backgroundImage,
              "onUpdate:modelValue": C[8] || (C[8] = (T) => f.value.backgroundImage = T),
              label: "Bild",
              placeholder: "Adresse eines Bildes"
            }, null, 8, ["modelValue"]),
            z.value ? (g(), S(_e, { key: 0 }, [
              E(h(Un), {
                modelValue: f.value.backgroundSize,
                "onUpdate:modelValue": C[9] || (C[9] = (T) => f.value.backgroundSize = T),
                label: "Größe",
                options: V
              }, null, 8, ["modelValue"]),
              E(h(Un), {
                modelValue: f.value.backgroundRepeat,
                "onUpdate:modelValue": C[10] || (C[10] = (T) => f.value.backgroundRepeat = T),
                label: "Wiederholung",
                options: B
              }, null, 8, ["modelValue"]),
              E(h(Un), {
                modelValue: f.value.backgroundPosition,
                "onUpdate:modelValue": C[11] || (C[11] = (T) => f.value.backgroundPosition = T),
                label: "Position",
                options: U
              }, null, 8, ["modelValue"])
            ], 64)) : j("", !0)
          ]),
          s("section", uw, [
            C[18] || (C[18] = s("h3", { class: "group__label" }, "Navigation", -1)),
            E(h(la), {
              modelValue: f.value.visibleInNavigation,
              "onUpdate:modelValue": C[12] || (C[12] = (T) => f.value.visibleInNavigation = T),
              label: "In der Navigation zeigen"
            }, null, 8, ["modelValue"])
          ]),
          s("p", dw, [
            C[19] || (C[19] = ue(" Kennung ", -1)),
            s("code", null, N(f.value.id), 1)
          ])
        ], 64)) : (g(), S("p", ow, " Diese Seite ist nicht mehr da. Wähle oben eine andere. "))
      ]),
      s("footer", cw, [
        E(h(we), {
          intent: "primary",
          onClick: C[13] || (C[13] = (T) => m("close"))
        }, {
          default: ne(() => [...C[20] || (C[20] = [
            ue("Fertig", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), pw = /* @__PURE__ */ Ke(fw, [["__scopeId", "data-v-9ea0fdd8"]]), gw = {
  ref: "board",
  class: "editor"
}, vw = { class: "report-container dottet" }, hw = /* @__PURE__ */ Ge({
  __name: "EditReport",
  setup(c) {
    const _ = Z(""), m = Cr().params.pageid ?? "", y = $m(m || ""), I = y.widgets, f = Z([]), x = xe("endpointfinder", null), b = () => {
      x();
    }, d = H(() => !!x), { settingsFor: p, closeSettings: V } = fu(), B = (C) => {
      _.value = C;
    }, U = H(() => {
      const C = I.value.find((T) => T.uid === _.value);
      return C || f.value.find((T) => T.uid === _.value);
    }), z = H(() => {
      const C = y.layout.value.find((T) => T.id === _.value);
      if (!(!C?.width || !C?.height))
        return { width: C.width, height: C.height };
    }), { visible: G, hide: O } = pu();
    return (C, T) => (g(), S("div", gw, [
      h(G) ? (g(), $e(h(Em), {
        key: 0,
        title: "Widgets",
        "remember-as": "daanse.board.palette",
        initial: { x: 0, y: 0, w: 240, h: 460, dock: "left" },
        "min-width": 180,
        "max-width": 420,
        "min-height": 200,
        dockable: "",
        onClose: h(O)
      }, {
        actions: ne(() => [
          d.value ? (g(), S("button", {
            key: 0,
            type: "button",
            class: "palette__act",
            title: "Endpunkte suchen",
            onPointerdown: T[0] || (T[0] = an(() => {
            }, ["stop"])),
            onClick: T[1] || (T[1] = (re) => b())
          }, [
            E(h(Fe), {
              name: "travel_explore",
              size: "sm"
            })
          ], 32)) : j("", !0)
        ]),
        default: ne(() => [
          E(Ay)
        ]),
        _: 1
      }, 8, ["onClose"])) : j("", !0),
      s("div", vw, [
        E(xu, {
          pageId: h(m),
          onOpenWidgetSettings: B
        }, null, 8, ["pageId"]),
        E(_m, { duration: 150 }, {
          default: ne(() => [
            h(p) ? (g(), $e(pw, {
              key: 0,
              modelValue: h(p),
              "onUpdate:modelValue": T[2] || (T[2] = (re) => bm(p) ? p.value = re : null),
              onClose: h(V)
            }, null, 8, ["modelValue", "onClose"])) : j("", !0)
          ]),
          _: 1
        })
      ]),
      _.value && U.value ? (g(), $e(nw, {
        key: 1,
        modelValue: U.value,
        "onUpdate:modelValue": T[3] || (T[3] = (re) => U.value = re),
        "board-size": z.value,
        onClose: T[4] || (T[4] = (re) => _.value = "")
      }, {
        preview: ne(() => [
          E(h(jm), {
            widget: U.value,
            "edit-enabled": !1
          }, null, 8, ["widget"])
        ]),
        _: 1
      }, 8, ["modelValue", "board-size"])) : j("", !0)
    ], 512));
  }
}), Qs = /* @__PURE__ */ Ke(hw, [["__scopeId", "data-v-bd444b0c"]]), Jt = Dm({
  history: Bm("/"),
  routes: [
    // Static core routes (routes will be added dynamically via router.addRoute in main.ts)
    {
      path: "/",
      name: "home",
      component: Js
    },
    {
      path: "/edit",
      name: "edit",
      component: Qs
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
      component: wy
    },
    {
      path: "/datasources",
      name: "data",
      component: ny
    },
    {
      path: "/:id/data",
      redirect: { name: "data" }
    },
    {
      path: "/page/:pageid/edit",
      name: "pageEdit",
      component: Qs
    },
    {
      path: "/page/:pageid",
      name: "page",
      component: Js
    }
  ]
}), mw = { class: "variables" }, _w = { class: "variables__head" }, bw = { class: "reach__title" }, yw = { class: "reach__lead" }, ww = {
  key: 0,
  class: "rows"
}, kw = { class: "row__name" }, xw = { class: "row__type" }, Sw = { class: "row__value" }, Cw = { class: "row__tools" }, $w = {
  key: 1,
  class: "reach__empty"
}, Iw = { class: "form" }, Aw = { class: "confirm__text" }, Rw = /* @__PURE__ */ Ge({
  __name: "Configuration",
  setup(c) {
    const _ = xe(uu), o = xe(Nn), m = xe(Symbol.for(js)), y = gn(o, (oe) => oe.variables), I = gn(o, (oe) => oe.board?.pages), f = Z(0), x = () => f.value += 1;
    Xn(() => m?.on(Gs.VariableUpdated, x)), Si(() => m?.off(Gs.VariableUpdated, x));
    function b(oe) {
      f.value;
      try {
        const ae = _.getVariableById(oe.uid)?.value;
        return ae == null ? "" : typeof ae == "object" ? JSON.stringify(ae) : String(ae);
      } catch {
        return "nur auf seiner Seite lesbar";
      }
    }
    const d = H(() => {
      const oe = y.value.filter((X) => (X.scope ?? "global") === "global"), de = I.value.map((X) => ({
        title: X.name,
        lead: "Nur auf diesem Board",
        page: X,
        rows: y.value.filter((ie) => ie.scope === "page" && ie.page === X)
      })).filter((X) => X.rows.length > 0), ae = y.value.filter((X) => X.scope === "page" && !X.page);
      return [
        { title: "Überall", lead: "Auf jedem Board lesbar", page: void 0, rows: oe },
        ...de,
        ...ae.length ? [{ title: "Ohne Board", lead: "Das Board dazu gibt es nicht mehr", page: void 0, rows: ae }] : []
      ];
    }), p = Z([]);
    Xn(() => p.value = _.getRegisteredVariableTypes());
    const V = H(() => [
      { text: "Überall", value: "" },
      ...I.value.map((oe) => ({ text: oe.name, value: oe.id }))
    ]), B = [
      { text: "Von außen beschreibbar", value: "external-writable" },
      { text: "Nur auf seiner Seite", value: "page-only" },
      { text: "Nur lesbar", value: "readonly" }
    ], U = Z(!1), z = Z(null), G = Z(""), O = Z(""), C = Z(""), T = Z("external-writable"), re = Z({}), ee = H(() => z.value !== null), L = H(
      () => G.value ? _.getVariableIdentifiers(G.value)?.settingsForm : void 0
    ), K = H(
      () => G.value ? _.getVariableIdentifiers(G.value)?.Settings : null
    );
    function he() {
      z.value = null, G.value = p.value[0] ?? "", O.value = "", C.value = "Variable " + Math.random().toString(36).substring(7), T.value = "external-writable", re.value = {}, U.value = !0;
    }
    function Ue(oe) {
      z.value = oe.uid, G.value = oe.type ?? "", O.value = oe.page?.id ?? "", C.value = oe.name, T.value = oe.accessMode ?? "external-writable";
      const de = _.getVariableById(oe.uid), { name: ae, ...X } = {
        ...oe.definition ?? {},
        ...de?.serialize?.() ?? {}
      };
      re.value = X, U.value = !0;
    }
    function Qe(oe) {
      if (!e_(oe)) return { ...oe ?? {} };
      const de = {};
      for (const ae of oe.eClass().getEAllStructuralFeatures()) {
        const X = oe.eGet(ae);
        X !== void 0 && (de[ae.getName()] = X);
      }
      return de;
    }
    function je() {
      re.value = {};
    }
    function en() {
      _.registerVariable(C.value, G.value, {
        ...Qe(re.value),
        uid: z.value ?? void 0,
        accessMode: T.value,
        scope: O.value ? "page" : "global",
        pageId: O.value || void 0
      }), U.value = !1, z.value = null;
    }
    const ce = Z(null);
    function fe() {
      ce.value && _.removeVariable(ce.value.uid), ce.value = null;
    }
    return (oe, de) => (g(), S("div", mw, [
      s("header", _w, [
        de[11] || (de[11] = s("div", null, [
          s("h1", { class: "variables__title" }, "Variablen"),
          s("p", { class: "variables__lead" }, " Ein benannter Wert, den Widgets und Datenquellen lesen. Manche gelten überall, manche nur auf einem Board. ")
        ], -1)),
        E(h(we), {
          intent: "primary",
          onClick: he
        }, {
          default: ne(() => [
            E(h(Fe), {
              name: "add",
              size: "sm"
            }),
            de[10] || (de[10] = ue("Variable anlegen ", -1))
          ]),
          _: 1
        })
      ]),
      (g(!0), S(_e, null, Me(d.value, (ae) => (g(), S("section", {
        key: ae.title,
        class: "reach"
      }, [
        s("h2", bw, [
          ue(N(ae.title), 1),
          s("span", yw, N(ae.lead), 1)
        ]),
        ae.rows.length ? (g(), S("ul", ww, [
          (g(!0), S(_e, null, Me(ae.rows, (X) => (g(), S("li", {
            key: X.uid,
            class: "row"
          }, [
            s("span", kw, N(X.name), 1),
            s("span", xw, N(X.type), 1),
            s("span", Sw, N(b(X)), 1),
            s("span", Cw, [
              E(h(we), {
                intent: "quiet",
                size: "sm",
                title: "Variable bearbeiten",
                onClick: (ie) => Ue(X)
              }, {
                default: ne(() => [
                  E(h(Fe), {
                    name: "edit",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"]),
              E(h(we), {
                intent: "quiet",
                size: "sm",
                title: "Variable löschen",
                onClick: (ie) => ce.value = X
              }, {
                default: ne(() => [
                  E(h(Fe), {
                    name: "delete",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]))), 128))
        ])) : (g(), S("p", $w, "Noch keine."))
      ]))), 128)),
      E(h(yi), {
        modelValue: U.value,
        "onUpdate:modelValue": de[7] || (de[7] = (ae) => U.value = ae),
        title: ee.value ? "Variable bearbeiten" : "Variable anlegen",
        size: "md"
      }, {
        actions: ne(() => [
          E(h(we), {
            intent: "quiet",
            onClick: de[6] || (de[6] = (ae) => U.value = !1)
          }, {
            default: ne(() => [...de[12] || (de[12] = [
              ue("Abbrechen", -1)
            ])]),
            _: 1
          }),
          E(h(we), {
            intent: "primary",
            onClick: en
          }, {
            default: ne(() => [
              ue(N(ee.value ? "Speichern" : "Anlegen"), 1)
            ]),
            _: 1
          })
        ]),
        default: ne(() => [
          s("div", Iw, [
            E(h(Un), {
              modelValue: G.value,
              "onUpdate:modelValue": [
                de[0] || (de[0] = (ae) => G.value = ae),
                je
              ],
              label: "Typ",
              options: p.value
            }, null, 8, ["modelValue", "options"]),
            E(h(Un), {
              modelValue: O.value,
              "onUpdate:modelValue": de[1] || (de[1] = (ae) => O.value = ae),
              label: "Gilt",
              options: V.value,
              "label-key": "text",
              "value-key": "value"
            }, null, 8, ["modelValue", "options"]),
            E(h(Un), {
              modelValue: T.value,
              "onUpdate:modelValue": de[2] || (de[2] = (ae) => T.value = ae),
              label: "Beschreibbar",
              options: B,
              "label-key": "text",
              "value-key": "value"
            }, null, 8, ["modelValue"]),
            E(h(rn), {
              modelValue: C.value,
              "onUpdate:modelValue": de[3] || (de[3] = (ae) => C.value = ae),
              label: "Name"
            }, null, 8, ["modelValue"]),
            L.value ? (g(), $e(h(wi), {
              key: G.value,
              modelValue: re.value,
              "onUpdate:modelValue": de[4] || (de[4] = (ae) => re.value = ae),
              create: L.value.create,
              "ui-model-xmi": L.value.xmi,
              "domain-package": L.value.ePackage(),
              "ui-model-uri": L.value.uri
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri"])) : K.value ? (g(), $e(Qn(K.value), {
              key: 1,
              modelValue: re.value,
              "onUpdate:modelValue": de[5] || (de[5] = (ae) => re.value = ae)
            }, null, 8, ["modelValue"])) : j("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]),
      E(h(yi), {
        "model-value": !!ce.value,
        size: "sm",
        "onUpdate:modelValue": de[9] || (de[9] = (ae) => ce.value = null)
      }, {
        header: ne(() => [
          E(h(Fe), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          de[13] || (de[13] = s("h2", { class: "confirm__title" }, "Variable löschen", -1))
        ]),
        actions: ne(() => [
          E(h(we), {
            intent: "quiet",
            onClick: de[8] || (de[8] = (ae) => ce.value = null)
          }, {
            default: ne(() => [...de[14] || (de[14] = [
              ue("Abbrechen", -1)
            ])]),
            _: 1
          }),
          E(h(we), {
            intent: "danger",
            onClick: fe
          }, {
            default: ne(() => [...de[15] || (de[15] = [
              ue("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: ne(() => [
          s("p", Aw, N(ce.value?.name) + " wird entfernt. Widgets, die darauf zeigen, finden sie danach nicht mehr. ", 1)
        ]),
        _: 1
      }, 8, ["model-value"])
    ]));
  }
}), Ew = /* @__PURE__ */ Ke(Rw, [["__scopeId", "data-v-dda92d6f"]]), Vw = { class: "appearance" }, Tw = { class: "panel" }, Ow = { class: "panel__head" }, Lw = { class: "panel__tools" }, Dw = {
  key: 0,
  class: "changed"
}, Bw = {
  key: 0,
  class: "gallery"
}, Ww = { class: "demo" }, Pw = { class: "demo__row" }, Mw = { class: "demo__row" }, Uw = { class: "demo" }, Nw = { class: "demo__form" }, Fw = { class: "demo" }, zw = { class: "demo__row" }, qw = { class: "demo__row" }, Gw = {
  key: 1,
  class: "body"
}, Hw = {
  class: "themes",
  "aria-label": "Themen"
}, Kw = ["onClick"], Yw = {
  class: "theme__strip",
  "aria-hidden": "true"
}, Zw = { class: "theme__name" }, Jw = { class: "theme__note" }, Xw = { class: "tokens" }, Qw = ["aria-expanded", "onClick"], jw = { class: "group__twist" }, ek = { class: "group__label" }, nk = { class: "group__count" }, tk = {
  key: 0,
  class: "group__body"
}, rk = {
  key: 0,
  class: "group__note"
}, ik = {
  key: 1,
  class: "token__swatch token__swatch--none",
  "aria-hidden": "true"
}, ok = { class: "token__text" }, ak = { class: "token__name" }, lk = { class: "token__role" }, sk = ["value", "aria-label", "onInput"], uk = ["value", "aria-label", "onChange"], dk = ["disabled", "title", "onClick"], ck = /* @__PURE__ */ Ge({
  __name: "Appearance",
  setup(c) {
    const {
      themes: _,
      activeTheme: o,
      overrides: m,
      valueOf: y,
      isOverridden: I,
      selectTheme: f,
      setToken: x,
      clearToken: b,
      clearAllTokens: d,
      exportTheme: p
    } = wu(), V = Z(ki[0].id), B = Z(!1), U = Z("tokens"), z = Z({
      text: "Bodenfeuchte Feld 3",
      number: 38.4,
      choice: "ogcsta",
      colour: "#4fa3d1",
      when: "2026-08-28",
      amount: 60,
      on: !0,
      checked: !0,
      note: ""
    }), G = [
      { uid: "ogcsta", name: "OGC SensorThings" },
      { uid: "xmla", name: "XMLA / MDX" },
      { uid: "rest", name: "REST" }
    ], O = H(() => Object.keys(m.value).length);
    function C(ee) {
      return [
        ee.tokens["color-bg"],
        ee.tokens["color-pane"],
        ee.tokens["color-accent"],
        ee.tokens["color-brand"],
        ee.tokens["color-ok"]
      ].filter(Boolean);
    }
    function T(ee) {
      return ee.kind === "color";
    }
    async function re() {
      try {
        await navigator.clipboard.writeText(JSON.stringify(p(), null, 2)), B.value = !0, setTimeout(() => B.value = !1, 2e3);
      } catch {
        B.value = !1;
      }
    }
    return (ee, L) => (g(), S("div", Vw, [
      s("div", Tw, [
        s("header", Ow, [
          s("button", {
            type: "button",
            class: Te(["head__tab", { on: U.value === "tokens" }]),
            onClick: L[0] || (L[0] = (K) => U.value = "tokens")
          }, " Tokens ", 2),
          s("button", {
            type: "button",
            class: Te(["head__tab", { on: U.value === "controls" }]),
            onClick: L[1] || (L[1] = (K) => U.value = "controls")
          }, " Elemente ", 2),
          s("span", Lw, [
            O.value ? (g(), S("span", Dw, N(O.value) + " " + N(O.value === 1 ? "Wert geändert" : "Werte geändert"), 1)) : j("", !0),
            O.value ? (g(), S("button", {
              key: 1,
              class: "btn",
              type: "button",
              onClick: L[2] || (L[2] = //@ts-ignore
              (...K) => h(d) && h(d)(...K))
            }, " Alle zurücksetzen ")) : j("", !0),
            s("button", {
              class: "btn",
              type: "button",
              onClick: re
            }, N(B.value ? "Kopiert" : "Als JSON kopieren"), 1)
          ])
        ]),
        U.value === "controls" ? (g(), S("div", Bw, [
          L[31] || (L[31] = s("p", { class: "gallery__lead" }, " Dieselben Elemente, aus denen die App gebaut ist. Was drüben an Tokens geändert wird, steht hier sofort. ", -1)),
          s("section", Ww, [
            L[22] || (L[22] = s("h3", { class: "demo__title" }, "Knöpfe", -1)),
            s("div", Pw, [
              E(h(we), null, {
                default: ne(() => [...L[13] || (L[13] = [
                  ue("Standard", -1)
                ])]),
                _: 1
              }),
              E(h(we), { intent: "primary" }, {
                default: ne(() => [...L[14] || (L[14] = [
                  ue("Speichern", -1)
                ])]),
                _: 1
              }),
              E(h(we), { intent: "quiet" }, {
                default: ne(() => [...L[15] || (L[15] = [
                  ue("Abbrechen", -1)
                ])]),
                _: 1
              }),
              E(h(we), { intent: "danger" }, {
                default: ne(() => [...L[16] || (L[16] = [
                  ue("Löschen", -1)
                ])]),
                _: 1
              }),
              E(h(we), { disabled: "" }, {
                default: ne(() => [...L[17] || (L[17] = [
                  ue("Gesperrt", -1)
                ])]),
                _: 1
              }),
              E(h(we), { busy: "" }, {
                default: ne(() => [...L[18] || (L[18] = [
                  ue("Lädt", -1)
                ])]),
                _: 1
              })
            ]),
            s("div", Mw, [
              E(h(we), { size: "sm" }, {
                default: ne(() => [...L[19] || (L[19] = [
                  ue("Klein", -1)
                ])]),
                _: 1
              }),
              E(h(we), { size: "md" }, {
                default: ne(() => [...L[20] || (L[20] = [
                  ue("Mittel", -1)
                ])]),
                _: 1
              }),
              E(h(we), { size: "lg" }, {
                default: ne(() => [...L[21] || (L[21] = [
                  ue("Groß", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          s("section", Uw, [
            L[23] || (L[23] = s("h3", { class: "demo__title" }, "Eingaben", -1)),
            s("div", Nw, [
              E(h(rn), {
                modelValue: z.value.text,
                "onUpdate:modelValue": L[3] || (L[3] = (K) => z.value.text = K),
                label: "Titel"
              }, null, 8, ["modelValue"]),
              E(h(rn), {
                modelValue: z.value.number,
                "onUpdate:modelValue": L[4] || (L[4] = (K) => z.value.number = K),
                label: "Messwert",
                type: "number",
                suffix: "%"
              }, null, 8, ["modelValue"]),
              E(h(Un), {
                modelValue: z.value.choice,
                "onUpdate:modelValue": L[5] || (L[5] = (K) => z.value.choice = K),
                label: "Datenquelle",
                options: G
              }, null, 8, ["modelValue"]),
              E(h(ou), {
                modelValue: z.value.colour,
                "onUpdate:modelValue": L[6] || (L[6] = (K) => z.value.colour = K),
                label: "Farbe"
              }, null, 8, ["modelValue"]),
              E(h(Vm), {
                modelValue: z.value.when,
                "onUpdate:modelValue": L[7] || (L[7] = (K) => z.value.when = K),
                label: "Stichtag"
              }, null, 8, ["modelValue"]),
              E(h(Tm), {
                modelValue: z.value.amount,
                "onUpdate:modelValue": L[8] || (L[8] = (K) => z.value.amount = K),
                label: "Deckung",
                suffix: "%"
              }, null, 8, ["modelValue"]),
              E(h(rn), {
                modelValue: z.value.note,
                "onUpdate:modelValue": L[9] || (L[9] = (K) => z.value.note = K),
                label: "Notiz",
                rows: 2,
                stacked: ""
              }, null, 8, ["modelValue"]),
              E(h(rn), {
                modelValue: z.value.text,
                "onUpdate:modelValue": L[10] || (L[10] = (K) => z.value.text = K),
                label: "Mit Fehler",
                error: "Der Name ist schon vergeben."
              }, null, 8, ["modelValue"])
            ])
          ]),
          s("section", Fw, [
            L[30] || (L[30] = s("h3", { class: "demo__title" }, "Schalter und Marken", -1)),
            s("div", zw, [
              E(h(Om), {
                modelValue: z.value.checked,
                "onUpdate:modelValue": L[11] || (L[11] = (K) => z.value.checked = K),
                label: "Im Board zeigen"
              }, null, 8, ["modelValue"]),
              E(h(la), {
                modelValue: z.value.on,
                "onUpdate:modelValue": L[12] || (L[12] = (K) => z.value.on = K),
                label: "Automatisch aktualisieren"
              }, null, 8, ["modelValue"])
            ]),
            s("div", qw, [
              E(h(Vt), null, {
                default: ne(() => [...L[24] || (L[24] = [
                  ue("neutral", -1)
                ])]),
                _: 1
              }),
              E(h(Vt), { tone: "accent" }, {
                default: ne(() => [...L[25] || (L[25] = [
                  ue("geladen", -1)
                ])]),
                _: 1
              }),
              E(h(Vt), { tone: "ok" }, {
                default: ne(() => [...L[26] || (L[26] = [
                  ue("im Rahmen", -1)
                ])]),
                _: 1
              }),
              E(h(Vt), { tone: "warn" }, {
                default: ne(() => [...L[27] || (L[27] = [
                  ue("prüfen", -1)
                ])]),
                _: 1
              }),
              E(h(Vt), { tone: "err" }, {
                default: ne(() => [...L[28] || (L[28] = [
                  ue("getrennt", -1)
                ])]),
                _: 1
              }),
              E(h(Vt), {
                tone: "accent",
                numeric: ""
              }, {
                default: ne(() => [...L[29] || (L[29] = [
                  ue("14", -1)
                ])]),
                _: 1
              })
            ]),
            E(h(Lm), { label: "Trenner" })
          ])
        ])) : (g(), S("div", Gw, [
          s("aside", Hw, [
            (g(!0), S(_e, null, Me(h(_), (K) => (g(), S("button", {
              key: K.id,
              type: "button",
              class: Te(["theme", { on: K.id === h(o).id }]),
              onClick: (he) => h(f)(K.id)
            }, [
              s("span", Yw, [
                (g(!0), S(_e, null, Me(C(K), (he, Ue) => (g(), S("i", {
                  key: Ue,
                  style: Ot({ background: he })
                }, null, 4))), 128))
              ]),
              s("span", Zw, N(K.name), 1),
              s("span", Jw, N(K.note), 1)
            ], 10, Kw))), 128))
          ]),
          s("section", Xw, [
            (g(!0), S(_e, null, Me(h(ki), (K) => (g(), S("div", {
              key: K.id,
              class: "group"
            }, [
              s("button", {
                type: "button",
                class: "group__head",
                "aria-expanded": V.value === K.id,
                onClick: (he) => V.value = V.value === K.id ? "" : K.id
              }, [
                s("span", jw, N(V.value === K.id ? "▾" : "▸"), 1),
                s("span", ek, N(K.label), 1),
                s("span", nk, N(K.tokens.length), 1)
              ], 8, Qw),
              V.value === K.id ? (g(), S("div", tk, [
                K.note ? (g(), S("p", rk, N(K.note), 1)) : j("", !0),
                (g(!0), S(_e, null, Me(K.tokens, (he) => (g(), S("div", {
                  key: he.name,
                  class: "token"
                }, [
                  T(he) ? (g(), S("span", {
                    key: 0,
                    class: "token__swatch",
                    style: Ot({ background: h(y)(he.name) }),
                    "aria-hidden": "true"
                  }, null, 4)) : (g(), S("span", ik)),
                  s("span", ok, [
                    s("code", ak, "--" + N(he.name), 1),
                    s("span", lk, N(he.role), 1)
                  ]),
                  T(he) ? (g(), S("input", {
                    key: 2,
                    class: "token__picker",
                    type: "color",
                    value: h(y)(he.name),
                    "aria-label": `Farbe für ${he.name}`,
                    onInput: (Ue) => h(x)(he.name, Ue.target.value)
                  }, null, 40, sk)) : j("", !0),
                  s("input", {
                    class: "token__value",
                    type: "text",
                    value: h(y)(he.name),
                    "aria-label": `Wert für ${he.name}`,
                    onChange: (Ue) => h(x)(he.name, Ue.target.value)
                  }, null, 40, uk),
                  s("button", {
                    class: "token__reset",
                    type: "button",
                    disabled: !h(I)(he.name),
                    title: h(I)(he.name) ? "Auf den Wert des Themas zurücksetzen" : "Unverändert",
                    onClick: (Ue) => h(b)(he.name)
                  }, " ↺ ", 8, dk)
                ]))), 128))
              ])) : j("", !0)
            ]))), 128))
          ])
        ]))
      ])
    ]));
  }
}), fk = /* @__PURE__ */ Ke(ck, [["__scopeId", "data-v-a84ca0bf"]]), Tt = cu.createLogger("daanse:system:actions");
class pk {
  constructor(_, o) {
    this.router = _, this.eventBus = o;
  }
  eventBus;
  async changePage(_) {
    if (!_) {
      Tt("⚠️ changePage called without pageId");
      return;
    }
    Tt("📄 Changing page to: %s", _);
    const o = new Promise((m) => {
      const y = (I) => {
        I.pageId === _ && (Tt("📄 Received pageLoaded event for page: %s", _), this.eventBus.off("system:pageLoaded", y), m());
      };
      this.eventBus.on("system:pageLoaded", y), setTimeout(() => {
        this.eventBus.off("system:pageLoaded", y), Tt("⚠️ pageLoaded timeout for page: %s, continuing anyway", _), m();
      }, 5e3);
    });
    await this.router.push(`/page/${_}`), await o, Tt("📄 Page change complete, widgets should be registered");
  }
  async setGlobalVariable(_, o) {
    Tt("⚠️ setGlobalVariable should be handled by VariableRepository");
  }
}
async function gk(c, _, o) {
  await _.registerActionsFromEcoreString(
    "SystemActions",
    n_,
    "system",
    "SystemActions.ecore"
  );
  const m = new pk(c, o);
  _.registerInstance("SystemActions", m, "SystemActions"), Tt("✅ System actions registered");
}
var vk = Object.defineProperty, hk = Object.getOwnPropertyDescriptor, mk = (c, _, o, m) => {
  for (var y = hk(_, o), I = c.length - 1, f; I >= 0; I--)
    (f = c[I]) && (y = f(_, o, y) || y);
  return y && vk(_, o, y), y;
};
const _k = cu.createLogger("daanse:system:actions");
class oa {
  testAction(..._) {
    console.log("TestActions", _);
  }
}
mk([
  t_({ eventType: "test.console" })
], oa.prototype, "testAction");
async function bk(c) {
  c.registerWidgetType("test", oa, "system");
  const _ = new oa();
  c.registerInstance("test", _, "system"), _k("✅ Test actions registered");
}
let dt;
async function zk({ services: c, log: _ }) {
  P_(), c_(), h_(), dt = ym(Z_), dt.use(Jt), dt.provide("codeEditorType", "monaco");
  const o = c, m = (U) => {
    const z = c.get(U);
    dt?.provide(U, z), dt?.provide(Symbol.for(U), z);
  };
  for (const U of c.getServiceIds()) m(U);
  o.addListener?.({ onServiceEvent: (U) => m(U.serviceId) }), c.register(fm, dt);
  const y = c.getRequired(Hm), I = c.getRequired(Km);
  if (y.getConnections().length === 0) {
    const U = y.createConnection("");
    U.uid = "test", U.name = "Test Connection 01", U.type = "rest", U.config = { url: "https://jsonplaceholder.typicode.com/" }, y.saveConnection(U);
    const z = I.createDatasource("");
    z.uid = "test_ds", z.name = "Test DataSource 01", z.type = "rest", z.connection = U, z.config = { resourceUrl: "posts" }, I.saveDatasource(z);
  }
  c.getRequired(gm).registerWrapperType({
    type: Am,
    create: (U) => new Im(U)
  });
  const f = c.getRequired(tu), x = new qs();
  x.path = "/configuration", x.name = "config", x.component = Ew, f.registerRoute(x);
  const b = new qs();
  b.path = "/appearance", b.name = "appearance", b.component = fk, f.registerRoute(b);
  const d = c.getRequired(nu), p = new km();
  p.id = "config", p.label = "Environment variables", p.icon = "settings", p.route = "/configuration", p.routeName = "config", p.order = 10, p.visible = !0, d.registerNavigationItem(p);
  const V = f;
  for (const U of V.getAllRoutesArray?.() ?? [])
    Jt.addRoute({
      path: U.path,
      name: U.name,
      component: U.component,
      ...U.meta ? { meta: U.meta } : {}
    });
  const B = window.location.pathname + window.location.search + window.location.hash;
  Jt.resolve(B).matched.length && Jt.currentRoute.value.fullPath !== B && Jt.replace(B);
  try {
    await gk(
      Jt,
      c.getRequired(Fs),
      c.getRequired(js)
    ), _.info("system actions registered");
  } catch (U) {
    _.error("system actions failed", U);
  }
  try {
    await bk(c.getRequired(Fs)), _.info("test actions registered");
  } catch (U) {
    _.error("test actions failed", U);
  }
  dt.mount("#app"), _.info("shell mounted");
}
function qk({ services: c }) {
  const _ = c.getRequired(tu);
  _.unregisterRoute("config"), _.unregisterRoute("save");
  const o = c.getRequired(nu);
  o.unregisterNavigationItem("config"), o.unregisterNavigationItem("save"), dt?.unmount(), dt = void 0;
}
export {
  zk as activate,
  qk as deactivate
};
