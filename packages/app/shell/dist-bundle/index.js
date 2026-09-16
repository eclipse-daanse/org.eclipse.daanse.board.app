(function(){var i="app.shell",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="@import\"https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap\";.topbar[data-v-bd6698f6]{height:var(--spacing-topbar, 42px);flex:none;display:flex;align-items:center;gap:12px;padding:0 12px;background:var(--color-pane);border-bottom:1px solid var(--color-divider);color:var(--color-fg);font-size:var(--text-sm, 12px)}.brand[data-v-bd6698f6]{display:flex;align-items:center;gap:8px;flex:none;white-space:nowrap;font-weight:600;font-size:var(--text-base, 13px)}.brand-mark[data-v-bd6698f6]{width:20px;height:20px;border-radius:var(--radius-sm, 5px);background:var(--color-brandFill);color:var(--color-onBrand);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;flex:none}.crumb[data-v-bd6698f6]{display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden;white-space:nowrap;color:var(--color-dim)}.crumb-part[data-v-bd6698f6]{overflow:hidden;text-overflow:ellipsis}.crumb-part.current[data-v-bd6698f6]{color:var(--color-fg);font-weight:500}.crumb-link[data-v-bd6698f6]{padding:0;font:inherit;color:inherit;background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.crumb-link[data-v-bd6698f6]:hover{color:var(--color-fg);text-decoration:underline}.crumb-link[data-v-bd6698f6]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.crumb-sep[data-v-bd6698f6]{color:var(--color-outline)}.spacer[data-v-bd6698f6]{flex:1 1 auto;min-width:8px}.pages[data-v-bd6698f6]{position:relative;margin-left:10px;flex:none}.pages__current[data-v-bd6698f6]{display:flex;align-items:center;gap:5px;max-width:200px;height:24px;padding:0 7px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background:none;border:1px solid transparent;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__current[data-v-bd6698f6]:hover{background-color:var(--color-raised);border-color:var(--color-divider)}.pages__current[data-v-bd6698f6]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.pages__name[data-v-bd6698f6]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__caret[data-v-bd6698f6]{font-size:9px;color:var(--color-dim)}.pages__menu[data-v-bd6698f6]{position:absolute;top:calc(100% + 3px);left:0;z-index:400;min-width:180px;max-height:60vh;overflow-y:auto;padding:3px;margin:0;list-style:none;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 3px);box-shadow:var(--shadow-e2, 0 2px 8px rgb(0 0 0 / 14%))}.pages__item[data-v-bd6698f6]{display:block;width:100%;padding:5px 8px;font-size:var(--text-sm, 12px);font-family:inherit;text-align:left;color:var(--color-fg);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__item[data-v-bd6698f6]:hover{background-color:var(--color-raised)}.pages__line[data-v-bd6698f6]{display:flex;align-items:center;gap:2px}.pages__line .pages__item[data-v-bd6698f6]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__remove[data-v-bd6698f6]{flex:none;width:20px;height:20px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer;opacity:0;transition:opacity 90ms ease,color 90ms ease}.pages__line:hover .pages__remove[data-v-bd6698f6],.pages__remove[data-v-bd6698f6]:focus-visible{opacity:1}.pages__remove[data-v-bd6698f6]:hover{color:var(--color-err)}.pages__sep[data-v-bd6698f6]{height:1px;margin:3px 0;background-color:var(--color-divider)}.pages__add[data-v-bd6698f6],.pages__item.on[data-v-bd6698f6]{color:var(--color-accent)}.pages__empty[data-v-bd6698f6]{padding:5px 8px;font-size:var(--text-sm, 12px);color:var(--color-dim)}.action[data-v-bd6698f6]{height:24px;padding:0 10px;margin-right:8px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs, 3px);cursor:pointer}.action[data-v-bd6698f6]:hover{border-color:var(--color-outline)}.action[data-v-bd6698f6]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.modes[data-v-bd6698f6]{display:inline-flex;border:1px solid var(--color-outline);border-radius:var(--radius-sm, 5px);overflow:hidden;flex:none}.mode[data-v-bd6698f6]{font:inherit;padding:4px 11px;border:0;background:var(--color-raised);color:var(--color-dim);cursor:pointer;white-space:nowrap}.mode[data-v-bd6698f6]:hover{color:var(--color-fg)}.mode.on[data-v-bd6698f6]{background:var(--color-accent);color:var(--color-onAccent);font-weight:600}.mode[data-v-bd6698f6]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.icon-action[data-v-bd6698f6]:disabled{opacity:.4;cursor:default}.icon-action[data-v-bd6698f6]{display:grid;place-items:center;width:24px;height:24px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.icon-action[data-v-bd6698f6]:hover{color:var(--color-fg);background-color:var(--color-raised)}.icon-action.on[data-v-bd6698f6]{color:var(--color-accent);background-color:var(--color-raised)}.icon-action[data-v-bd6698f6]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.avatar[data-v-bd6698f6]{width:24px;height:24px;border-radius:50%;background:var(--color-raised);border:1px solid var(--color-outline);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;color:var(--color-dim);flex:none}.lang[data-v-bd6698f6]{position:relative}.lang__button[data-v-bd6698f6]{font-family:var(--font-mono);font-size:var(--text-xs);font-weight:600;letter-spacing:.02em}.lang__menu[data-v-bd6698f6]{position:absolute;top:calc(100% + 4px);right:0;z-index:60;min-width:150px;margin:0;padding:4px;list-style:none;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-sm);box-shadow:var(--shadow-e3)}.lang__item[data-v-bd6698f6]{display:block;width:100%;padding:5px 10px;font:inherit;color:var(--color-fg);text-align:left;background:none;border:0;border-radius:3px;cursor:pointer}.lang__item[data-v-bd6698f6]:hover,.lang__item[data-v-bd6698f6]:focus-visible{background-color:var(--color-sunken)}.lang__item.on[data-v-bd6698f6]{color:var(--color-accent)}.shell[data-v-ce3039cb]{display:flex;flex-direction:column;height:100%;width:100%;min-height:0;background:var(--color-bg)}.shell-body[data-v-ce3039cb]{flex:1 1 auto;display:grid;grid-template-columns:var(--spacing-rail, 52px) minmax(0,1fr);min-height:0;overflow:hidden}.shell-body--norail[data-v-ce3039cb]{grid-template-columns:minmax(0,1fr)}.rail[data-v-ce3039cb]{background:var(--color-pane);border-right:1px solid var(--color-divider);display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:4px;overflow:hidden}.rail-spacer[data-v-ce3039cb]{flex:1 1 auto}.ri[data-v-ce3039cb]{position:relative;width:36px;height:36px;flex:none;border:0;border-radius:var(--radius-md, 8px);background:transparent;color:var(--color-dim);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .14s cubic-bezier(.2,.6,.2,1),color .14s cubic-bezier(.2,.6,.2,1)}.ri[data-v-ce3039cb]:hover{color:var(--color-fg);background:color-mix(in srgb,var(--color-accent) 10%,transparent)}.ri.on[data-v-ce3039cb]{background:color-mix(in srgb,var(--color-accent) 14%,transparent);color:var(--color-accent)}.ri.on[data-v-ce3039cb]:before{content:\"\";position:absolute;left:-8px;top:8px;bottom:8px;width:3px;border-radius:var(--radius-xs, 3px);background:var(--color-accent)}.ri[data-v-ce3039cb]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.ri[data-v-ce3039cb] .icon{font-size:20px}.sr-only[data-v-ce3039cb]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.content[data-v-ce3039cb]{min-width:0;min-height:0;overflow:hidden;display:flex;flex-direction:column}@media(prefers-reduced-motion:reduce){.ri[data-v-ce3039cb]{transition-duration:.01ms}}.global-loading-bar[data-v-ce3039cb]{position:fixed;top:0;left:0;right:0;height:3px;z-index:8000;overflow:hidden}.global-loading-bar-progress[data-v-ce3039cb]{height:100%;width:30%;background:var(--color-brandFill);animation:loading-slide-ce3039cb 1.2s ease-in-out infinite}@keyframes loading-slide-ce3039cb{0%{transform:translate(-100%)}to{transform:translate(400%)}}/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:\"Barlow\",system-ui,-apple-system,\"Segoe UI\",sans-serif;--font-mono:\"JetBrains Mono\",ui-monospace,SFMono-Regular,Menlo,monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--text-xs:11px;--text-xs--line-height:calc(1/.75);--text-sm:12px;--text-sm--line-height:calc(1.25/.875);--text-base:13px;--text-base--line-height: 1.5 ;--text-lg:15px;--text-lg--line-height:calc(1.75/1.125);--text-xl:24px;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--radius-xs:2px;--radius-sm:3px;--radius-md:4px;--radius-lg:6px;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-bg:#121820;--color-pane:#1a222c;--color-raised:#232d39;--color-canvas:#0e141b;--color-divider:#2a3541;--color-outline:#3c4959;--color-fg:#dfe8ef;--color-dim:#8b9bab;--color-accent:#4fa3d1;--color-onAccent:#08131c;--color-brand:#d8a13c;--color-brandFill:#d8a13c;--color-onBrand:#14100a;--color-ok:#5fb98a;--color-warn:#d8a13c;--color-err:#e2766a;--color-kw:#4fa3d1;--color-measure:#d8a13c;--color-member:#5fb98a;--color-fn:#c294d8;--color-primary:#4fa3d1;--color-secondary:#8b9bab;--color-success:#5fb98a;--color-info:#4fa3d1;--color-danger:#e2766a;--color-warning:#d8a13c;--color-backgroundPrimary:#121820;--color-backgroundSecondary:#1a222c;--color-backgroundElement:#232d39;--color-backgroundBorder:#2a3541;--color-textPrimary:#dfe8ef;--color-textInverted:#08131c;--color-daanse_blue:#4fa3d1;--color-daanse_grey:#dfe8ef;--shadow-e1:0 1px 2px #00000073;--shadow-e2:0 2px 8px #00000073;--shadow-e3:0 8px 24px #00000080;--spacing-topbar:42px;--spacing-rail:52px;--spacing-panelHeader:30px;--spacing-splitter:4px;--spacing-statusbar:24px}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{.ice_gray{padding:var(--spacing-6);background:var(--color-pane);border-right:1px solid var(--color-divider);box-shadow:var(--shadow-e1)}.ice{padding:var(--spacing-6);background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md);box-shadow:var(--shadow-e2)}.z-mx{z-index:30000}}@layer utilities{.\\@container{container-type:inline-size}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.top-\\[-25px\\]{top:-25px}.right-0{right:calc(var(--spacing)*0)}.isolate{isolation:isolate}.col-span-1{grid-column:span 1/span 1}.row-span-4{grid-row:span 4/span 4}.float-left{float:left}.float-right{float:right}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-2{margin:calc(var(--spacing)*2)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-15{margin-left:calc(var(--spacing)*15)}.box-border{box-sizing:border-box}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.table-cell{display:table-cell}.h-40{height:calc(var(--spacing)*40)}.h-84{height:calc(var(--spacing)*84)}.h-120{height:calc(var(--spacing)*120)}.h-full{height:100%}.max-h-screen{max-height:100vh}.w-full{width:100%}.max-w-xs{max-width:var(--container-xs)}.flex-shrink,.shrink{flex-shrink:1}.flex-grow,.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-white{background-color:var(--color-white)}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.object-fill{object-fit:fill}.object-scale-down{object-fit:scale-down}.p-4{padding:calc(var(--spacing)*4)}.pl-6{padding-left:calc(var(--spacing)*6)}.text-justify{text-align:justify}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-wrap{text-wrap:wrap}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.line-through{text-decoration-line:line-through}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e1{--tw-shadow:0 1px 2px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e2{--tw-shadow:0 2px 8px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e3{--tw-shadow:0 8px 24px var(--tw-shadow-color,#00000080);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}}:root[data-theme=light]{--color-bg:#eef1f4;--color-pane:#f7f9fb;--color-raised:#fff;--color-canvas:#e2e7ec;--color-divider:#d3dae1;--color-outline:#b3bec9;--color-fg:#16202a;--color-dim:#55646f;--color-accent:#1f6690;--color-onAccent:#fff;--color-brand:#8a6206;--color-brandFill:#c08a10;--color-onBrand:#14100a;--color-ok:#1f6f4a;--color-warn:#8a5a0c;--color-err:#b02a1c;--color-kw:#1f6690;--color-measure:#8a5a0c;--color-member:#1f6f4a;--color-fn:#7b3fa0;--color-primary:#1f6690;--color-secondary:#55646f;--color-success:#1f6f4a;--color-info:#1f6690;--color-danger:#b02a1c;--color-warning:#8a5a0c;--color-backgroundPrimary:#eef1f4;--color-backgroundSecondary:#f7f9fb;--color-backgroundElement:#fff;--color-backgroundBorder:#d3dae1;--color-textPrimary:#16202a;--color-textInverted:#fff;--color-daanse_blue:#1f6690;--color-daanse_grey:#16202a;--shadow-e1:0 1px 2px #16202a24;--shadow-e2:0 2px 8px #16202a24;--shadow-e3:0 8px 24px #16202a24}:root{--mdxwb-bg:var(--color-bg);--mdxwb-pane:var(--color-pane);--mdxwb-raised:var(--color-raised);--mdxwb-border:var(--color-divider);--mdxwb-outline:var(--color-outline);--mdxwb-fg:var(--color-fg);--mdxwb-dim:var(--color-dim);--mdxwb-accent:var(--color-accent);--mdxwb-on-accent:var(--color-onAccent);--mdxwb-ok:var(--color-ok);--mdxwb-warn:var(--color-warn);--mdxwb-err:var(--color-err);--mdxwb-kw:var(--color-kw);--mdxwb-measure:var(--color-measure);--mdxwb-member:var(--color-member);--mdxwb-fn:var(--color-fn)}body{font-family:var(--font-sans);font-optical-sizing:auto;font-weight:400;font-size:var(--text-base);font-variation-settings:\"wdth\" 100;background:var(--color-bg);color:var(--color-fg);font-style:normal;--moveable-color:var(--color-outline)!important}table{font-variant-numeric:tabular-nums}.rCS1w3zcxh{--moveable-color:var(--color-outline)!important}.rCS1w3zcxh .moveable-line{transform-origin:0;width:1px;height:1px;border-bottom:2px dashed var(--color-outline)!important;background:0 0!important}@keyframes spin{to{transform:rotate(360deg)}}*{scrollbar-width:thin;scrollbar-color:var(--color-outline)transparent}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background-color:var(--color-outline);background-clip:padding-box;border:3px solid #0000;border-radius:6px}::-webkit-scrollbar-thumb:hover{background-color:var(--color-dim)}::-webkit-scrollbar-corner{background:0 0}.resize-observer[data-v-b329ee4c]{z-index:-1;pointer-events:none;opacity:0;background-color:#0000;border:none;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.resize-observer[data-v-b329ee4c] object{pointer-events:none;z-index:-1;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.v-popper__popper{z-index:10000;outline:none;top:0;left:0}.v-popper__popper.v-popper__popper--hidden{visibility:hidden;opacity:0;pointer-events:none;transition:opacity .15s,visibility .15s}.v-popper__popper.v-popper__popper--shown{visibility:visible;opacity:1;transition:opacity .15s}.v-popper__popper.v-popper__popper--skip-transition,.v-popper__popper.v-popper__popper--skip-transition>.v-popper__wrapper{transition:none!important}.v-popper__backdrop{width:100%;height:100%;display:none;position:absolute;top:0;left:0}.v-popper__inner{box-sizing:border-box;position:relative;overflow-y:auto}.v-popper__inner>div{z-index:1;max-width:inherit;max-height:inherit;position:relative}.v-popper__arrow-container{width:10px;height:10px;position:absolute}.v-popper__popper--arrow-overflow .v-popper__arrow-container,.v-popper__popper--no-positioning .v-popper__arrow-container{display:none}.v-popper__arrow-inner,.v-popper__arrow-outer{border-style:solid;width:0;height:0;position:absolute;top:0;left:0}.v-popper__arrow-inner{visibility:hidden;border-width:7px}.v-popper__arrow-outer{border-width:6px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{left:-2px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{left:-1px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer{border-bottom-width:0;border-bottom-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:0}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{border-top-width:0;border-top-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{top:-4px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{top:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{top:-1px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{border-left-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-left-color:#0000!important}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{left:-4px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{left:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer{border-right-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner{left:-2px}.v-popper--theme-tooltip .v-popper__inner{color:#fff;background:#000c;border-radius:6px;padding:7px 12px 6px}.v-popper--theme-tooltip .v-popper__arrow-outer{border-color:#000c}.v-popper--theme-dropdown .v-popper__inner{color:#000;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 6px 30px #0000001a}.v-popper--theme-dropdown .v-popper__arrow-inner{visibility:visible;border-color:#fff}.v-popper--theme-dropdown .v-popper__arrow-outer{border-color:#ddd}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}.layout-renderer[data-v-965fd8c7],.layout-renderer .edit-component-wrapper[data-v-965fd8c7],.layout-renderer .view-component-wrapper[data-v-965fd8c7]{width:100%;height:100%}.layout-renderer .spinner[data-v-965fd8c7]{width:22px;height:22px;border:2px solid var(--color-divider);border-top-color:var(--color-accent);border-radius:50%;animation:layout-spin .7s linear infinite}.layout-renderer .no-layout-message[data-v-965fd8c7],.layout-renderer .loading-state[data-v-965fd8c7]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;gap:1rem}.layout-renderer .no-layout-message__text[data-v-965fd8c7]{display:flex;align-items:flex-start;gap:9px;margin:0;font-family:var(--font-sans);font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}@keyframes layout-spin{to{transform:rotate(360deg)}}.floorplan[data-v-0eecd73b]{position:relative;aspect-ratio:16 / 9;background-color:var(--color-bg);border-bottom:1px solid var(--color-divider);overflow:hidden}.floorplan__block[data-v-0eecd73b]{position:absolute;margin:2px 0 0 2px;border-radius:2px;border:1px solid color-mix(in srgb,currentColor 70%,transparent);background-color:color-mix(in srgb,currentColor 14%,transparent)}.floorplan__block--data[data-v-0eecd73b]{color:var(--color-accent)}.floorplan__block--visual[data-v-0eecd73b]{color:var(--color-brand)}.floorplan__block--text[data-v-0eecd73b]{color:var(--color-dim)}.floorplan__empty[data-v-0eecd73b]{position:absolute;inset:0;display:grid;place-items:center;font-size:var(--text-xs);color:var(--color-dim)}.storage[data-v-3b03814f]{display:grid;grid-template-columns:280px minmax(0,1fr);flex:1 1 auto;min-height:0;background-color:var(--color-pane);overflow:hidden}.tree[data-v-3b03814f]{display:flex;flex-direction:column;min-height:0;border-right:1px solid var(--color-divider)}.tree__search[data-v-3b03814f]{margin:8px;height:26px;padding:0 8px;font-size:var(--text-sm);font-family:inherit;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.tree__body[data-v-3b03814f]{flex:1 1 auto;min-height:0;padding:0 4px 8px;overflow-y:auto}.row[data-v-3b03814f]{display:flex;align-items:baseline;flex-wrap:nowrap;gap:6px;width:100%;padding:4px 6px;font-family:inherit;font-size:var(--text-base);color:var(--color-fg);text-align:left;background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.row[data-v-3b03814f]:hover{background-color:var(--color-raised)}.row.on[data-v-3b03814f]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);box-shadow:inset 2px 0 0 var(--color-accent)}.row--place[data-v-3b03814f]{font-weight:600}.row--entry[data-v-3b03814f]{padding-left:22px;font-family:var(--font-mono);font-size:var(--text-sm)}.row--hint[data-v-3b03814f]{padding-left:22px;margin:0;color:var(--color-dim);font-size:var(--text-sm);cursor:default}.row--add[data-v-3b03814f]{color:var(--color-dim);font-size:var(--text-sm)}.row__twist[data-v-3b03814f]{width:12px;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__name[data-v-3b03814f]{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__meta[data-v-3b03814f]{margin-left:auto;padding-left:8px;flex:none;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);color:var(--color-dim)}.row__dot[data-v-3b03814f]{width:5px;height:5px;flex:none;border-radius:50%;background-color:transparent}.row__dot.open[data-v-3b03814f]{background-color:var(--color-accent)}.detail[data-v-3b03814f]{display:flex;flex-direction:column;min-width:0;min-height:0;background-color:var(--color-bg);overflow-y:auto}.detail__head[data-v-3b03814f]{display:flex;align-items:center;gap:8px;padding:7px 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.detail__name[data-v-3b03814f]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.detail__facts[data-v-3b03814f]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.detail__spacer[data-v-3b03814f]{flex:1 1 auto}.detail__badge[data-v-3b03814f]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent);border-radius:var(--radius-xs)}.detail__hint[data-v-3b03814f]{display:grid;place-items:center;flex:1 1 auto;margin:0;padding:24px;font-size:var(--text-sm);color:var(--color-dim);text-align:center}.detail__failure[data-v-3b03814f]{margin:12px 12px 0;padding:8px 10px;font-size:var(--text-sm);color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 10%,transparent);border-radius:var(--radius-xs)}.boards[data-v-3b03814f]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;padding:12px}.board[data-v-3b03814f]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.board__text[data-v-3b03814f]{padding:8px 10px}.board__name[data-v-3b03814f]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__facts[data-v-3b03814f]{margin:2px 0 0;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.board__kinds[data-v-3b03814f]{margin:4px 0 0;font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.create[data-v-3b03814f]{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:16px}.create__label[data-v-3b03814f]{font-size:var(--text-sm);color:var(--color-dim)}.create__input[data-v-3b03814f]{height:26px;min-width:220px;padding:0 8px;font-size:var(--text-base);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.create__hint[data-v-3b03814f]{flex:1 0 100%;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.row[data-v-3b03814f]:focus-visible,.tree__search[data-v-3b03814f]:focus-visible,.create__input[data-v-3b03814f]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.single[data-v-86d874a3]{display:flex;flex-direction:column;gap:12px;padding:16px;max-width:640px}.single__heading[data-v-86d874a3]{margin:0;font-size:.78rem;font-weight:600;letter-spacing:.04em;color:var(--color-dim);text-transform:uppercase}.single__card[data-v-86d874a3]{cursor:pointer}.single__card[data-v-86d874a3]:hover,.single__card[data-v-86d874a3]:focus-visible{border-color:var(--color-accent)}.single__card[data-v-86d874a3]{display:flex;align-items:center;gap:14px;padding:16px;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md)}.single__icon[data-v-86d874a3]{display:grid;flex:none;place-items:center;width:48px;height:48px;color:var(--color-accent);background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm)}.single__text[data-v-86d874a3]{flex:1;min-width:0}.single__name[data-v-86d874a3]{margin:0;font-size:1.05rem;color:var(--color-fg)}.single__desc[data-v-86d874a3]{margin:3px 0 0;font-size:.85rem;color:var(--color-dim)}.single__meta[data-v-86d874a3]{margin:4px 0 0;font-size:.82rem;color:var(--color-dim)}.single__actions[data-v-86d874a3]{display:flex;flex:none;gap:6px}.single__note[data-v-86d874a3]{margin:0;font-size:.82rem;line-height:1.5;color:var(--color-dim)}.boards[data-v-86d874a3]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.boards__panel[data-v-86d874a3]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.boards__body[data-v-86d874a3]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background-color:var(--color-bg);overflow:auto}.boards__bar[data-v-86d874a3]{display:flex;align-items:center;gap:12px;height:var(--spacing-panelHeader);flex:none;padding:0 8px;border-bottom:1px solid var(--color-divider)}.boards__views[data-v-86d874a3]{display:flex;align-items:center;gap:2px;height:100%}.boards__view[data-v-86d874a3]{position:relative;display:flex;align-items:center;gap:6px;height:100%;padding:0 12px;font-size:var(--text-sm);font-family:inherit;font-weight:500;color:var(--color-dim);background:none;border:0;cursor:pointer}.boards__view[data-v-86d874a3]:hover{color:var(--color-fg)}.boards__view.on[data-v-86d874a3]{color:var(--color-fg);font-weight:600}.boards__view.on[data-v-86d874a3]:after{content:\"\";position:absolute;left:8px;right:8px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.boards__view[data-v-86d874a3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__title[data-v-86d874a3]{display:flex;align-items:center;gap:8px;margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__count[data-v-86d874a3]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);font-weight:500;color:var(--color-dim);padding:1px 6px;border:1px solid var(--color-divider);border-radius:999px}.boards__tools[data-v-86d874a3]{display:flex;align-items:center;gap:8px;margin-left:auto}.boards__search[data-v-86d874a3]{height:22px;min-width:180px;padding:0 8px;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:4px}.boards__search[data-v-86d874a3]:focus-visible,.board[data-v-86d874a3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__grid[data-v-86d874a3]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));align-content:start;gap:16px;padding:16px}.board[data-v-86d874a3]{position:relative;display:flex;flex-direction:column;padding:0;overflow:hidden;text-align:left;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);box-shadow:var(--shadow-e1);cursor:pointer;transition:border-color .12s ease,box-shadow .12s ease,transform .12s ease}.board[data-v-86d874a3]:hover{border-color:var(--color-outline);box-shadow:var(--shadow-e2);transform:translateY(-1px)}.board__body[data-v-86d874a3]{padding:12px}.board__name[data-v-86d874a3]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__meta[data-v-86d874a3]{margin:2px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.board__kinds[data-v-86d874a3]{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0 0;padding:0;list-style:none}.board__kind[data-v-86d874a3]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-dim);background-color:var(--color-canvas);border-radius:3px}.board__kind--more[data-v-86d874a3]{color:var(--color-outline)}.board__edit[data-v-86d874a3]{position:absolute;top:8px;right:8px;padding:2px 8px;font-size:var(--text-xs);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:3px;opacity:0;cursor:pointer}.board:hover .board__edit[data-v-86d874a3],.board__edit[data-v-86d874a3]:focus-visible{opacity:1}.board--new[data-v-86d874a3]{box-shadow:none;align-items:center;justify-content:center;gap:2px;min-height:180px;font-family:inherit;background-color:transparent;border-style:dashed}.board__plus[data-v-86d874a3]{font-size:20px;line-height:1;color:var(--color-outline)}.board__usage[data-v-86d874a3]{margin:3px 0 0;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.boards__nomatch[data-v-86d874a3]{grid-column:1 / -1;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.boards__empty[data-v-86d874a3]{max-width:420px;margin:10vh auto 0;padding:0 16px;text-align:center}.boards__empty-plan[data-v-86d874a3]{width:200px;margin:0 auto 16px;border:1px solid var(--color-divider);border-radius:4px}.boards__empty-title[data-v-86d874a3]{margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__empty-text[data-v-86d874a3]{margin:8px 0 16px;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.boards__empty-actions[data-v-86d874a3]{display:flex;justify-content:center;gap:8px}@media(prefers-reduced-motion:reduce){.board[data-v-86d874a3]{transition:none}.board[data-v-86d874a3]:hover{transform:none}}.dottet[data-v-3ecae506]{background:var(--color-canvas);background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-3ecae506]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed var(--color-outline);z-index:100000;pointer-events:none}.report-container[data-v-3ecae506]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative;background:var(--color-canvas, #dee1e7)}.report-container__title[data-v-3ecae506]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider, #ccd1d9)}.report-container .widgets-adding-controls[data-v-3ecae506]{display:flex;border:1px solid var(--color-divider, #ccd1d9);border-radius:8px;margin:16px}.report-container .widget-board[data-v-3ecae506]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-3ecae506]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-3ecae506]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-3ecae506]{position:absolute}.dropdown-buttons-container[data-v-3ecae506]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-3ecae506]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-3ecae506]{z-index:20000000!important}.add_widget-button[data-v-3ecae506]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-3ecae506],.v-leave-active[data-v-3ecae506]{transition:opacity .5s ease}.v-enter-from[data-v-3ecae506],.v-leave-to[data-v-3ecae506]{opacity:0}.pick[data-v-6d945def],.fill[data-v-6d945def]{display:flex;flex-direction:column;gap:24px}.pick__lead[data-v-6d945def]{margin:0;font-size:.9rem;color:var(--color-dim)}.pick__group[data-v-6d945def]{display:flex;flex-direction:column;gap:8px}.pick__rubric[data-v-6d945def]{margin:0;font-size:.8rem;font-weight:600;letter-spacing:.03em;color:var(--color-dim);text-transform:none}.tiles[data-v-6d945def]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));gap:8px;margin:0;padding:0;list-style:none}.tile[data-v-6d945def]{display:flex;flex-direction:column;gap:6px;width:100%;height:100%;padding:10px 12px;font:inherit;text-align:left;background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm);cursor:pointer}.tile[data-v-6d945def]:hover{border-color:var(--color-accent)}.tile[data-v-6d945def]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.tile--on[data-v-6d945def]{border-color:var(--color-accent);box-shadow:inset 2px 0 0 var(--color-accent)}.tile__head[data-v-6d945def]{display:flex;align-items:center;gap:6px}.tile__icon[data-v-6d945def]{flex:none;color:var(--color-accent)}.tile__name[data-v-6d945def]{flex:1;font-weight:600;color:var(--color-fg)}.tile__check[data-v-6d945def]{flex:none;color:var(--color-accent)}.tile__what[data-v-6d945def]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3;overflow:hidden;font-size:.8rem;line-height:1.45;color:var(--color-dim)}.chosen[data-v-6d945def]{display:flex;align-items:center;gap:12px;padding:12px;background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm)}.chosen__icon[data-v-6d945def]{display:grid;flex:none;place-items:center;width:40px;height:40px;color:var(--color-accent);background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-sm)}.chosen__text[data-v-6d945def]{flex:1;min-width:0}.chosen__name[data-v-6d945def]{font-weight:600;color:var(--color-fg)}.chosen__what[data-v-6d945def]{margin:2px 0 0;font-size:.82rem;line-height:1.45;color:var(--color-dim)}.fill__fields[data-v-6d945def]{display:flex;flex-direction:column;gap:16px}.model__none[data-v-deac0807]{margin:0;padding:10px 12px;font-size:.85rem;color:var(--color-dim);background-color:var(--color-sunken);border-radius:var(--radius-sm)}.tags[data-v-b6b361a8]{display:flex;flex-direction:column;gap:6px}.tags__held[data-v-b6b361a8],.tags__offer[data-v-b6b361a8]{display:flex;flex-wrap:wrap;gap:4px}.tags__suggestion[data-v-b6b361a8]{padding:2px 8px;font-size:.8rem;color:var(--color-dim);background:none;border:1px dashed var(--color-outline);border-radius:999px;cursor:pointer}.tags__suggestion[data-v-b6b361a8]:hover{color:var(--color-fg);border-style:solid;border-color:var(--color-accent)}.note[data-v-585727e2]{margin:0;padding:10px 12px;font-size:.85rem;line-height:1.45;color:var(--color-dim);background-color:var(--color-sunken);border-radius:var(--radius-sm)}.note--warn[data-v-585727e2]{color:var(--color-fg);border-left:2px solid var(--color-warn, var(--color-accent))}.menu__catch[data-v-3e59dfe4]{position:fixed;inset:0;z-index:50000}.menu[data-v-3e59dfe4]{position:fixed;z-index:50001;min-width:200px;margin:0;padding:4px;list-style:none;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-sm);box-shadow:var(--shadow-e3)}.menu__sep[data-v-3e59dfe4]{margin-top:4px;padding-top:4px;border-top:1px solid var(--color-outline)}.menu__item[data-v-3e59dfe4]{display:flex;align-items:center;gap:8px;width:100%;padding:6px 10px;font:inherit;color:var(--color-fg);text-align:left;background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.menu__item[data-v-3e59dfe4]:hover,.menu__item[data-v-3e59dfe4]:focus-visible{background-color:var(--color-sunken)}.menu__item--danger[data-v-3e59dfe4]{color:var(--color-err)}.tree[data-v-b599ea25]{display:flex;flex-direction:column;min-height:0;height:100%;border-right:1px solid var(--color-divider);background:var(--color-pane);overflow:hidden}.tree__head[data-v-b599ea25]{display:flex;align-items:center;gap:2px;flex:none;padding:7px 8px 7px 10px;border-bottom:1px solid var(--color-divider)}.tree__title[data-v-b599ea25]{flex:1 1 auto;margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--color-dim)}.tree__search[data-v-b599ea25]{flex:none;padding:8px 10px;border-bottom:1px solid var(--color-divider)}.tree__body[data-v-b599ea25]{flex:1 1 auto;min-height:0;overflow-y:auto;padding:4px 0}.tree__list[data-v-b599ea25],.tree__sources[data-v-b599ea25]{margin:0;padding:0;list-style:none}.tree__sources[data-v-b599ea25]{padding-left:22px}.row[data-v-b599ea25]{display:flex;align-items:center;gap:2px;padding-left:10px;padding-right:4px}.row[data-v-b599ea25]:hover{background:var(--color-raised)}.row--on[data-v-b599ea25],.row--on[data-v-b599ea25]:hover{background:color-mix(in srgb,var(--color-accent) 14%,transparent)}.row__twist[data-v-b599ea25]{display:flex;align-items:center;justify-content:center;width:22px;height:26px;flex:none;border:none;background:transparent;color:var(--color-dim);cursor:pointer}.row__twist--none[data-v-b599ea25]{cursor:default}.row__body[data-v-b599ea25]{display:flex;align-items:baseline;gap:8px;flex:1 1 auto;min-width:0;padding:3px 2px;border:none;background:transparent;font:inherit;text-align:left;color:var(--color-fg);cursor:pointer;flex-wrap:wrap}.row__body[data-v-b599ea25]:disabled{cursor:default}.row__body[data-v-b599ea25]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.row__name[data-v-b599ea25]{font-family:var(--font-sans);font-size:var(--text-sm);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:10ch}.row--connection .row__name[data-v-b599ea25]{font-weight:600}.row__icon[data-v-b599ea25]{flex:none;color:var(--color-dim)}.row__tag[data-v-b599ea25]{flex:none;max-width:84px;overflow:hidden;text-overflow:ellipsis;padding:0 6px;font-size:.72rem;line-height:1.5;color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);border-radius:999px;white-space:nowrap}.row__tag--more[data-v-b599ea25]{color:var(--color-dim);background-color:var(--color-sunken)}.row__what[data-v-b599ea25]{flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__usage[data-v-b599ea25]{flex:none;margin-left:auto;padding-left:8px;font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.tree__empty[data-v-b599ea25]{padding:6px 10px;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.tree__none[data-v-b599ea25]{padding:6px 10px 6px 36px;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.confirm__title[data-v-b599ea25]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.confirm__text[data-v-b599ea25]{margin:0 0 6px;color:var(--color-dim);line-height:1.5}.confirm__text--warn[data-v-b599ea25]{color:var(--color-err)}.editor[data-v-41f0a44b]{display:flex;flex-direction:column;gap:12px;height:100%;min-height:0}.editor__fields[data-v-41f0a44b]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-41f0a44b]{display:flex;justify-content:flex-end;gap:7px}.editor__preview[data-v-41f0a44b]{flex:1 1 auto;min-height:0;display:flex;overflow:auto}.editor[data-v-0fad9a41]{display:flex;flex-direction:column;gap:12px}.editor__fields[data-v-0fad9a41]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-0fad9a41]{display:flex;justify-content:flex-end;gap:7px}.data-page[data-v-2b44b5f1]{display:flex;height:100%;min-height:0}.data-page__tree[data-v-2b44b5f1]{flex:none;width:320px;min-height:0}.data-page__detail[data-v-2b44b5f1]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background:var(--color-pane);overflow:hidden}.data-page__nothing[data-v-2b44b5f1]{margin:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.detail__head[data-v-2b44b5f1]{display:flex;align-items:baseline;gap:12px;flex:none;padding:12px 16px 8px}.detail__what[data-v-2b44b5f1]{display:flex;align-items:baseline;gap:10px;min-width:0}.detail__name[data-v-2b44b5f1]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.detail__sub[data-v-2b44b5f1]{font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.detail__usage[data-v-2b44b5f1]{margin-left:auto;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.detail__body[data-v-2b44b5f1]{flex:1 1 auto;min-height:0;overflow:auto;padding:16px}.pages[data-v-21364f0b]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.pages__panel[data-v-21364f0b]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.pages__bar[data-v-21364f0b]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 8px;border-bottom:1px solid var(--color-divider)}.pages__title[data-v-21364f0b]{display:flex;align-items:center;gap:6px;margin:0;font-size:var(--text-sm);font-weight:600;color:var(--color-fg)}.pages__count[data-v-21364f0b]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);font-weight:500;color:var(--color-dim)}.pages__of[data-v-21364f0b]{margin:0;font-size:var(--text-xs);color:var(--color-dim)}.pages__tools[data-v-21364f0b]{display:flex;align-items:center;gap:8px;margin-left:auto}.pages__search[data-v-21364f0b]{height:22px;min-width:180px;padding:0 8px;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:4px}.pages__body[data-v-21364f0b]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background-color:var(--color-bg);overflow:auto}.pages__grid[data-v-21364f0b]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));align-content:start;gap:16px;padding:16px}.page[data-v-21364f0b]{position:relative;display:flex;flex-direction:column;padding:0;overflow:hidden;text-align:left;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);box-shadow:var(--shadow-e1);cursor:pointer;transition:border-color .12s ease,box-shadow .12s ease,transform .12s ease}.page[data-v-21364f0b]:hover,.page[data-v-21364f0b]:focus-visible{border-color:var(--color-outline);box-shadow:var(--shadow-e2);transform:translateY(-1px)}.page__body[data-v-21364f0b]{padding:12px}.page__name[data-v-21364f0b]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.page__meta[data-v-21364f0b]{margin:2px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.page__usage[data-v-21364f0b]{margin:3px 0 0;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.page__kinds[data-v-21364f0b]{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0 0;padding:0;list-style:none}.page__kind[data-v-21364f0b]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-dim);background-color:var(--color-canvas);border-radius:3px}.page__edit[data-v-21364f0b]{position:absolute;top:8px;right:8px;padding:2px 8px;font-family:inherit;font-size:var(--text-xs);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:3px;opacity:0;cursor:pointer}.page:hover .page__edit[data-v-21364f0b],.page__edit[data-v-21364f0b]:focus-visible{opacity:1}.page--new[data-v-21364f0b]{align-items:center;justify-content:center;gap:2px;min-height:180px;font-family:inherit;background-color:transparent;border-style:dashed;box-shadow:none}.page__plus[data-v-21364f0b]{font-size:20px;line-height:1;color:var(--color-outline)}.pages__nomatch[data-v-21364f0b]{grid-column:1 / -1;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.widgets_grid[data-v-3ac9fb06]{display:flex;flex-direction:column}[data-v-3ac9fb06] .widgets_grid-item{display:flex;flex-direction:row;align-items:center;gap:9px;padding:6px 12px;font-size:var(--text-base, 13px);color:var(--color-fg);cursor:grab;border-radius:var(--radius-sm, 5px);margin:0 6px}[data-v-3ac9fb06] .widgets_grid-item:hover{background:var(--color-bg)}[data-v-3ac9fb06] .widgets_grid-icon{width:26px;height:26px;flex:none;display:inline-flex;align-items:center;justify-content:center;background:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 5px);overflow:hidden}[data-v-3ac9fb06] .widgets_grid-icon img{max-width:18px;max-height:18px}[data-v-3ac9fb06] .widgets_grid-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.add_widget_window[data-v-3ac9fb06]{position:relative;width:100%;height:100%;padding:6px 0}.add_widget_window__scroll[data-v-3ac9fb06]{height:100%;overflow-y:auto}.scrim[data-v-67bd2420]{position:fixed;inset:0;z-index:40000;display:grid;place-items:stretch;padding:26px 22px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(6px)}.overlay[data-v-67bd2420]{display:flex;min-width:0;min-height:0;background-color:var(--color-bg);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.stage[data-v-67bd2420]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.stage__head[data-v-67bd2420]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.stage__name[data-v-67bd2420]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.stage__uid[data-v-67bd2420]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.stage__spacer[data-v-67bd2420]{flex:1 1 auto}.seg[data-v-67bd2420]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.seg button[data-v-67bd2420]{padding:1px 9px;font-family:inherit;font-size:var(--text-xs);color:var(--color-dim);background:none;border:0;cursor:pointer}.seg button.on[data-v-67bd2420]{color:var(--color-onAccent);background-color:var(--color-accent)}.stage__bar[data-v-67bd2420]{flex:none;padding:5px 12px;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.stage__body[data-v-67bd2420]{flex:1 1 auto;display:grid;place-items:center;min-height:0;padding:18px;background-color:var(--color-canvas);overflow:auto}.preview[data-v-67bd2420]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.handle[data-v-67bd2420]{width:var(--spacing-splitter);flex:none;cursor:col-resize;background-color:var(--color-divider)}.handle[data-v-67bd2420]:hover,.handle[data-v-67bd2420]:focus-visible{background-color:var(--color-accent);outline:none}.side[data-v-67bd2420]{display:flex;flex-direction:column;flex:none;min-width:0;min-height:0;background-color:var(--color-pane)}.tabs[data-v-67bd2420]{display:flex;flex-wrap:wrap;align-items:stretch;min-height:var(--spacing-panelHeader);flex:none;padding:0 6px;gap:1px;border-bottom:1px solid var(--color-divider)}.tab[data-v-67bd2420]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 9px;font-family:inherit;font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab.on[data-v-67bd2420]{color:var(--color-fg);font-weight:600}.tab.on[data-v-67bd2420]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab__n[data-v-67bd2420]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}.fields[data-v-67bd2420]{flex:1 1 auto;min-height:0;padding:10px 12px 16px;overflow-y:auto}.pick[data-v-67bd2420]{margin-bottom:8px}.rest__note[data-v-67bd2420]{margin:0 0 10px;padding:7px 9px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim);background-color:var(--color-raised);border-radius:var(--radius-xs)}.note[data-v-67bd2420]{margin:8px 0 0;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.var-mark[data-v-67bd2420]{font-family:var(--font-mono);font-style:italic;color:var(--color-brand)}.bound[data-v-67bd2420]{width:100%;border-collapse:collapse;font-size:var(--text-sm)}.bound th[data-v-67bd2420]{padding:5px 8px;text-align:left;font-size:var(--text-xs);font-weight:600;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.bound td[data-v-67bd2420]{padding:5px 8px;border-bottom:1px solid var(--color-divider)}.bound__name[data-v-67bd2420],.bound__var[data-v-67bd2420]{font-family:var(--font-mono);font-size:var(--text-xs)}.bound__var[data-v-67bd2420]{color:var(--color-brand)}.foot[data-v-67bd2420]{display:flex;align-items:center;gap:7px;height:38px;flex:none;padding:0 12px;background-color:var(--color-pane);border-top:1px solid var(--color-divider)}.foot__hint[data-v-67bd2420]{font-size:var(--text-xs);color:var(--color-dim)}.tab[data-v-67bd2420]:focus-visible,.seg button[data-v-67bd2420]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.page-settings[data-v-9ea0fdd8]{position:absolute;top:12px;right:12px;bottom:12px;z-index:1000000;display:flex;flex-direction:column;width:340px;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.head[data-v-9ea0fdd8]{display:flex;align-items:center;gap:8px;flex:none;height:34px;padding:0 6px 0 12px;border-bottom:1px solid var(--color-divider)}.head__title[data-v-9ea0fdd8]{flex:1;margin:0;font-size:var(--text-sm, 12px);font-weight:500;color:var(--color-fg)}.head__close[data-v-9ea0fdd8]{width:24px;height:24px;font-size:16px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.head__close[data-v-9ea0fdd8]:hover{color:var(--color-fg);background-color:var(--color-raised)}.head__close[data-v-9ea0fdd8]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.body[data-v-9ea0fdd8]{flex:1;min-height:0;overflow-y:auto;padding:12px}.group+.group[data-v-9ea0fdd8]{margin-top:18px}.group__label[data-v-9ea0fdd8]{margin:0 0 8px;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.group[data-v-9ea0fdd8]>.field{margin-bottom:8px}.ident[data-v-9ea0fdd8]{margin:18px 0 0;font-size:var(--text-xs, 11px);color:var(--color-dim)}.ident code[data-v-9ea0fdd8]{font-family:var(--font-mono);user-select:all}.missing[data-v-9ea0fdd8]{margin:0;font-size:var(--text-sm, 12px);color:var(--color-dim)}.foot[data-v-9ea0fdd8]{display:flex;justify-content:flex-end;flex:none;padding:8px 12px;border-top:1px solid var(--color-divider)}.ghost{display:none}.editor[data-v-bd444b0c]{position:relative;padding:0;border:0;display:flex;align-items:stretch;width:100%;height:100%;min-height:0;overflow:hidden;background:var(--color-bg)}.palette__act[data-v-bd444b0c]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.palette__act[data-v-bd444b0c]:hover{color:var(--color-fg);background-color:var(--color-raised)}.palette__act[data-v-bd444b0c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.report-container[data-v-bd444b0c]{flex:1 1 auto;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;min-width:0;height:100%;position:relative;background:var(--color-canvas)}.report-container.dottet[data-v-bd444b0c]{background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:24px 24px;background-position:-12px -12px;background-repeat:repeat}.report-container__title[data-v-bd444b0c]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider)}.report-container .widgets-adding-controls[data-v-bd444b0c]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-md, 8px);margin:16px}.report-container .widget-board[data-v-bd444b0c]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-bd444b0c]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-bd444b0c]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-bd444b0c]{position:absolute}.dropdown-buttons-container[data-v-bd444b0c]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-bd444b0c]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-bd444b0c]{z-index:20000000!important}.v-enter-active[data-v-bd444b0c],.v-leave-active[data-v-bd444b0c]{transition:opacity .5s ease}.v-enter-from[data-v-bd444b0c],.v-leave-to[data-v-bd444b0c]{opacity:0}.variables[data-v-dda92d6f]{display:flex;flex-direction:column;gap:28px;box-sizing:border-box;width:100%;height:100%;overflow-y:auto;padding:28px 32px 40px;font-family:var(--font-sans);color:var(--color-fg);background-color:var(--color-bg)}.variables__head[data-v-dda92d6f],.reach[data-v-dda92d6f]{width:100%;max-width:940px}.variables__head[data-v-dda92d6f]{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap}.variables__title[data-v-dda92d6f]{margin:0 0 6px;font-size:20px;font-weight:600;letter-spacing:-.01em}.variables__lead[data-v-dda92d6f]{margin:0;max-width:56ch;font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}.reach__title[data-v-dda92d6f]{display:flex;align-items:baseline;gap:12px;margin:0 0 2px;font-size:var(--text-base);font-weight:600}.reach__lead[data-v-dda92d6f]{font-weight:400;font-size:var(--text-sm);color:var(--color-dim)}.reach__empty[data-v-dda92d6f]{margin:0;padding:12px 0;border-top:1px solid var(--color-divider);font-size:var(--text-base);color:var(--color-dim)}.rows[data-v-dda92d6f]{margin:0;padding:0;list-style:none;border-top:1px solid var(--color-divider)}.row[data-v-dda92d6f]{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1.4fr) minmax(0,2fr) auto;align-items:center;gap:16px;padding:7px 8px 7px 0;border-bottom:1px solid var(--color-divider);font-size:var(--text-base)}.row[data-v-dda92d6f]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.row__name[data-v-dda92d6f]{font-family:var(--font-mono);overflow-wrap:anywhere}.row__type[data-v-dda92d6f],.row__value[data-v-dda92d6f]{color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__value[data-v-dda92d6f]{font-family:var(--font-mono);color:var(--color-fg)}.row__tools[data-v-dda92d6f]{display:flex;gap:2px}.form[data-v-dda92d6f]{display:flex;flex-direction:column;gap:4px}.confirm__title[data-v-dda92d6f]{margin:0;font-size:var(--text-lg);font-weight:600}.confirm__text[data-v-dda92d6f]{margin:0;font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}@media(max-width:640px){.variables[data-v-dda92d6f]{padding:20px 16px 32px}.row[data-v-dda92d6f]{grid-template-columns:minmax(0,1fr) auto;row-gap:2px}.row__type[data-v-dda92d6f],.row__value[data-v-dda92d6f]{grid-column:1;white-space:normal}}.appearance[data-v-a84ca0bf]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.panel[data-v-a84ca0bf]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.panel__head[data-v-a84ca0bf]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 10px;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.head__tab[data-v-a84ca0bf]{position:relative;height:100%;padding:0 10px;font-family:inherit;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);background:none;border:0;cursor:pointer}.head__tab.on[data-v-a84ca0bf]{color:var(--color-fg)}.head__tab.on[data-v-a84ca0bf]:after{content:\"\";position:absolute;left:6px;right:6px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.head__tab[data-v-a84ca0bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.gallery[data-v-a84ca0bf]{flex:1 1 auto;min-height:0;padding:16px 18px 24px;overflow-y:auto;background-color:var(--color-bg)}.gallery__lead[data-v-a84ca0bf]{margin:0 0 18px;max-width:70ch;font-size:var(--text-sm);color:var(--color-dim)}.demo[data-v-a84ca0bf]{margin-bottom:26px}.demo__title[data-v-a84ca0bf]{margin:0 0 10px;padding-bottom:4px;font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.demo__row[data-v-a84ca0bf]{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:12px}.demo__form[data-v-a84ca0bf]{max-width:460px}.panel__tools[data-v-a84ca0bf]{display:flex;align-items:center;gap:6px;margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400}.changed[data-v-a84ca0bf]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-accent)}.body[data-v-a84ca0bf]{display:flex;flex:1 1 auto;min-height:0;background-color:var(--color-bg)}.themes[data-v-a84ca0bf]{width:240px;flex:none;display:flex;flex-direction:column;gap:2px;padding:8px 6px;overflow-y:auto;background-color:var(--color-pane);border-right:1px solid var(--color-divider)}.theme[data-v-a84ca0bf]{display:grid;gap:3px;padding:8px;font-family:inherit;text-align:left;background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.theme[data-v-a84ca0bf]:hover{background-color:var(--color-raised)}.theme.on[data-v-a84ca0bf]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);border-color:color-mix(in srgb,var(--color-accent) 45%,transparent)}.theme__strip[data-v-a84ca0bf]{display:flex;height:14px;border-radius:2px;overflow:hidden;border:1px solid var(--color-divider)}.theme__strip i[data-v-a84ca0bf]{flex:1}.theme__name[data-v-a84ca0bf]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.theme__note[data-v-a84ca0bf]{font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.tokens[data-v-a84ca0bf]{flex:1 1 auto;min-width:0;padding:8px 10px 16px;overflow-y:auto}.group__head[data-v-a84ca0bf]{display:flex;align-items:baseline;gap:7px;width:100%;padding:6px 4px;font-family:inherit;font-size:var(--text-base);font-weight:600;color:var(--color-fg);text-align:left;background:none;border:0;border-bottom:1px solid var(--color-divider);cursor:pointer}.group__twist[data-v-a84ca0bf]{width:11px;font-size:var(--text-xs);color:var(--color-dim)}.group__count[data-v-a84ca0bf]{margin-left:auto;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.group__body[data-v-a84ca0bf]{padding:8px 0 14px 18px}.group__note[data-v-a84ca0bf]{margin:0 0 8px;font-size:var(--text-sm);color:var(--color-dim);max-width:70ch}.token[data-v-a84ca0bf]{display:flex;align-items:center;gap:8px;padding:3px 0}.token__swatch[data-v-a84ca0bf]{width:22px;height:22px;flex:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__swatch--none[data-v-a84ca0bf]{background:repeating-linear-gradient(45deg,var(--color-raised),var(--color-raised) 3px,var(--color-bg) 3px,var(--color-bg) 6px)}.token__text[data-v-a84ca0bf]{display:flex;flex-direction:column;min-width:0;flex:1 1 auto}.token__name[data-v-a84ca0bf]{font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg)}.token__role[data-v-a84ca0bf]{font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.token__picker[data-v-a84ca0bf]{width:28px;height:24px;flex:none;padding:0;background:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__value[data-v-a84ca0bf]{width:220px;flex:none;height:24px;padding:0 7px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__reset[data-v-a84ca0bf]{width:24px;height:24px;flex:none;font-family:inherit;font-size:var(--text-base);color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__reset[data-v-a84ca0bf]:disabled{opacity:.35;cursor:default}.btn[data-v-a84ca0bf]{height:22px;padding:0 10px;font-family:inherit;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-a84ca0bf]:hover{border-color:var(--color-outline)}.btn[data-v-a84ca0bf]:focus-visible,.theme[data-v-a84ca0bf]:focus-visible,.group__head[data-v-a84ca0bf]:focus-visible,.token__value[data-v-a84ca0bf]:focus-visible,.token__picker[data-v-a84ca0bf]:focus-visible,.token__reset[data-v-a84ca0bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}\n";})();
import { identifier as pm, VARIABLE_WRAPPER_FACTORY as gm } from "org.eclipse.daanse.board.app.lib.factory.variableWrapper";
import { EVENT_MANAGER as vm, EVENT_ACTIONS_REGISTRY_ID as Fs } from "org.eclipse.daanse.board.app.lib.api.events";
import { ref as X, defineComponent as Ge, computed as K, inject as xe, onMounted as Xn, onBeforeUnmount as Si, createElementBlock as x, openBlock as p, Fragment as he, createElementVNode as s, createBlock as $e, createCommentVNode as ee, renderList as We, unref as h, toDisplayString as N, normalizeClass as Ve, withModifiers as an, createVNode as E, createStaticVNode as hm, Teleport as aa, resolveComponent as mm, shallowRef as zs, watch as ln, nextTick as Sr, normalizeStyle as Ot, resolveDynamicComponent as Qn, createTextVNode as ue, withDirectives as Qt, vModelText as ta, withCtx as te, withKeys as jt, mergeModels as jn, useModel as wt, renderSlot as eu, vShow as jo, Transition as _m, isRef as bm, createApp as ym } from "vue";
import { NAVIGATION_REGISTRY as wm, NAVIGATION_REGISTRY_ID as nu, NavigationItem as km } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID as tu, RouteDefinition as qs } from "org.eclipse.daanse.board.app.lib.api.route";
import { useCurrentHistory as xm, useLanguage as Sm, useEList as vn, useGlobalLoading as Cm, useEObject as ru, useFeature as $m, describeModel as bi, useBoard as Im, VariableComplexStringWrapper as Am, VARIABLECOMPLEXSTRINGWRAPPER as Rm } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DIcon as Ne, DButton as ye, DModal as yi, DField as iu, DSwitch as la, DInput as nn, DChip as Vt, DIconPicker as Ci, DSelect as Un, DTabs as Em, DColorInput as ou, DFloatingWindow as Vm, DDateInput as Tm, DSlider as Om, DCheckbox as Lm, DDivider as Dm } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useRoute as Cr, useRouter as $i, createRouter as Bm, createWebHistory as Wm } from "vue-router";
import { identifier as er } from "org.eclipse.daanse.board.app.lib.api.page";
import { identifier as Ii } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { identifier as Nn, WorkspaceImpl as Pm, ConnectionImpl as Mm, DatasourceImpl as Um, VariableImpl as Nm, EventMappingImpl as au, BoardImpl as Fm, PageImpl as zm, WidgetImpl as qm, LayoutItemImpl as Gm } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { JSONResource as lu, URI as su, OPTION_INDENT as Hm } from "@emfts/core";
import { identifier as Ai, CONNECTION_REPOSITORY as Km } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as Ri, DATASOURCE_REPOSITORY as Ym } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { identifier as uu } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as Zm } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { identifier as du } from "org.eclipse.daanse.board.app.lib.api.widget";
import Jm from "vuedraggable";
import { WrapperSettingsPackage as Xm, wrapperSettingsFormXmi as Qm, WrapperSettingsImpl as jm, WidgetWrapper as e_ } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { SettingsForm as wi, isModelled as n_ } from "org.eclipse.daanse.board.app.ui.vue.uimodel";
import { VariableEvents as Gs } from "org.eclipse.daanse.board.app.lib.variables";
import { SystemActionsEcoreContent as t_, WidgetAction as r_ } from "org.eclipse.daanse.board.app.lib.events";
import { loggerFactory as cu } from "org.eclipse.daanse.board.app.lib.logger";
const { TINY_EMITTER: js, APP: fm } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), cn = [];
for (let c = 0; c < 256; ++c)
  cn.push((c + 256).toString(16).slice(1));
function i_(c, _ = 0) {
  return (cn[c[_ + 0]] + cn[c[_ + 1]] + cn[c[_ + 2]] + cn[c[_ + 3]] + "-" + cn[c[_ + 4]] + cn[c[_ + 5]] + "-" + cn[c[_ + 6]] + cn[c[_ + 7]] + "-" + cn[c[_ + 8]] + cn[c[_ + 9]] + "-" + cn[c[_ + 10]] + cn[c[_ + 11]] + cn[c[_ + 12]] + cn[c[_ + 13]] + cn[c[_ + 14]] + cn[c[_ + 15]]).toLowerCase();
}
const o_ = new Uint8Array(16);
function a_() {
  return crypto.getRandomValues(o_);
}
function sa(c, _, o) {
  return crypto.randomUUID ? crypto.randomUUID() : l_(c);
}
function l_(c, _, o) {
  c = c || {};
  const m = c.random ?? c.rng?.() ?? a_();
  if (m.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return m[6] = m[6] & 15 | 64, m[8] = m[8] & 63 | 128, i_(m);
}
const ea = X(void 0);
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
const vi = X(!0);
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
const s_ = "data-board-backdrop", gu = "daanse.board.backdrop";
function u_() {
  try {
    return localStorage.getItem(gu) === "on";
  } catch {
    return !1;
  }
}
const kr = X(u_());
function vu() {
  document.documentElement.setAttribute(s_, kr.value ? "on" : "off");
}
function d_() {
  try {
    localStorage.setItem(gu, kr.value ? "on" : "off");
  } catch {
  }
}
function c_() {
  return {
    shown: kr,
    toggle: () => {
      kr.value = !kr.value, d_(), vu();
    }
  };
}
function f_() {
  vu();
}
const p_ = "data-board-snap", hu = "daanse.board.snap";
function g_() {
  try {
    const c = localStorage.getItem(hu);
    return c === null ? !0 : c === "on";
  } catch {
    return !0;
  }
}
const xr = X(g_());
function mu() {
  document.documentElement.setAttribute(p_, xr.value ? "on" : "off");
}
function v_() {
  try {
    localStorage.setItem(hu, xr.value ? "on" : "off");
  } catch {
  }
}
function h_() {
  return {
    snapping: xr,
    toggle: () => {
      xr.value = !xr.value, v_(), mu();
    }
  };
}
function m_() {
  mu();
}
const __ = { class: "topbar" }, b_ = {
  class: "crumb",
  "aria-label": "Pfad"
}, y_ = {
  key: 0,
  class: "crumb-sep",
  "aria-hidden": "true"
}, w_ = ["onClick"], k_ = ["aria-expanded"], x_ = { class: "pages__name" }, S_ = {
  key: 0,
  class: "pages__menu",
  role: "menu"
}, C_ = ["onClick"], $_ = ["title", "aria-label", "onClick"], I_ = ["disabled", "title"], A_ = ["disabled", "title"], R_ = ["aria-pressed"], E_ = ["aria-pressed"], V_ = ["aria-pressed"], T_ = {
  key: 8,
  class: "modes",
  role: "group",
  "aria-label": "Modus"
}, O_ = ["aria-pressed"], L_ = ["aria-pressed"], D_ = ["aria-expanded"], B_ = {
  key: 0,
  class: "lang__menu",
  role: "menu"
}, W_ = ["onClick"], P_ = /* @__PURE__ */ Ge({
  __name: "Header",
  setup(c) {
    const _ = Cr(), o = $i(), m = K(() => _.params.pageid ?? ""), y = xm(), I = K(
      () => _.name === "edit" || _.name === "pageEdit" || String(_.path).endsWith("/edit")
    ), f = xe(Nn), { available: S, current: b, choose: d } = Sm(), g = X(!1);
    function V(H) {
      d(H), g.value = !1;
    }
    const D = vn(f, (H) => H.board?.pages), U = K(() => {
      D.value;
      const H = { label: "Boards", to: "/" }, J = {
        label: f.board?.name || "Board",
        to: m.value ? `/page/${m.value}` : void 0
      };
      switch (_.name) {
        case "home":
          return [{ label: "Boards" }];
        case "page":
          return [H, { label: J.label }];
        case "edit":
        case "pageEdit":
          return [H, J, { label: "Bearbeiten" }];
        case "pages":
          return [H, J, { label: "Seiten" }];
        case "data":
          return [H, { label: "Verbindungen & Daten" }];
        case "config":
          return [H, { label: "Konfiguration" }];
        case "save":
          return [H, { label: "Speicher" }];
        case "test":
          return [H, { label: "Test" }];
        default:
          return [H, { label: String(_.name ?? "Board") }];
      }
    }), z = K(() => !!m.value), q = xe(er);
    xe(Ii);
    const { openSettings: O } = fu(), { visible: C, toggle: T } = pu(), { shown: ie, toggle: ne } = c_(), { snapping: B, toggle: Y } = h_(), me = K(() => {
      if (D.value, !m.value) return !1;
      try {
        const H = q?.getPage(m.value);
        return !!(H?.backgroundImage?.trim() || H?.backgroundColor?.trim());
      } catch {
        return !1;
      }
    }), Be = K(() => {
      D.value;
      const H = q?.getAllPageIds() ?? [], J = [];
      for (const se of H) {
        const Fe = q?.getPage(se);
        Fe && J.push(Fe);
      }
      return J;
    }), tn = K(() => {
      if (D.value, !m.value) return "";
      try {
        return q?.getPage(m.value)?.name ?? "Seite";
      } catch {
        return "Seite";
      }
    }), Pe = X(!1);
    function rn(H) {
      Pe.value = !1, H !== m.value && o.push(I.value ? `/page/${H}/edit` : `/page/${H}`);
    }
    const ce = X(), fe = X();
    function oe(H) {
      const J = H.target;
      Pe.value && !ce.value?.contains(J) && (Pe.value = !1), g.value && !fe.value?.contains(J) && (g.value = !1);
    }
    function de(H) {
      H.key === "Escape" && (Pe.value = !1, g.value = !1);
    }
    Xn(() => {
      document.addEventListener("pointerdown", oe), document.addEventListener("keydown", de);
    }), Si(() => {
      document.removeEventListener("pointerdown", oe), document.removeEventListener("keydown", de);
    });
    function ae() {
      const H = sa();
      q?.registerPage({
        id: H,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), Pe.value = !1, o.push(`/page/${H}/edit`);
    }
    const we = K(() => Be.value.length > 1);
    function Ye(H) {
      if (!we.value) return;
      const J = Be.value.find((se) => se.id === H);
      if (confirm(`Seite „${J?.name ?? H}" löschen? Das lässt sich nicht rückgängig machen.`) && (q?.unregisterPage(H), H === m.value)) {
        const se = Be.value.find((Fe) => Fe.id !== H);
        se && o.push(I.value ? `/page/${se.id}/edit` : `/page/${se.id}`);
      }
    }
    const sn = () => {
      m.value && o.push(`/page/${m.value}`);
    }, Qe = () => {
      m.value && o.push(`/page/${m.value}/edit`);
    }, Z = () => o.push({ path: "/", query: { view: "storage" } }), j = () => o.push("/appearance");
    return (H, J) => (p(), x(he, null, [
      s("header", __, [
        J[15] || (J[15] = s("span", { class: "brand" }, [
          s("span", {
            class: "brand-mark",
            "aria-hidden": "true"
          }, "D"),
          s("span", { class: "brand-name" }, "Daanse Board")
        ], -1)),
        s("nav", b_, [
          (p(!0), x(he, null, We(U.value, (se, Fe) => (p(), x(he, {
            key: se.label + Fe
          }, [
            Fe > 0 ? (p(), x("span", y_, "/")) : ee("", !0),
            se.to && Fe < U.value.length - 1 ? (p(), x("button", {
              key: 1,
              type: "button",
              class: "crumb-part crumb-link",
              onClick: (et) => h(o).push(se.to)
            }, N(se.label), 9, w_)) : (p(), x("span", {
              key: 2,
              class: Ve(["crumb-part", { current: Fe === U.value.length - 1 }])
            }, N(se.label), 3))
          ], 64))), 128))
        ]),
        z.value ? (p(), x("div", {
          key: 0,
          ref_key: "menuHost",
          ref: ce,
          class: "pages"
        }, [
          s("button", {
            type: "button",
            class: "pages__current",
            "aria-expanded": Pe.value,
            "aria-haspopup": "menu",
            title: "Seite wechseln",
            onClick: J[0] || (J[0] = (se) => Pe.value = !Pe.value)
          }, [
            s("span", x_, N(tn.value), 1),
            J[8] || (J[8] = s("span", {
              class: "pages__caret",
              "aria-hidden": "true"
            }, "▾", -1))
          ], 8, k_),
          Pe.value ? (p(), x("ul", S_, [
            (p(!0), x(he, null, We(Be.value, (se) => (p(), x("li", {
              key: se.id,
              role: "none",
              class: "pages__line"
            }, [
              s("button", {
                type: "button",
                role: "menuitem",
                class: Ve(["pages__item", { on: se.id === m.value }]),
                onClick: (Fe) => rn(se.id)
              }, N(se.name), 11, C_),
              we.value ? (p(), x("button", {
                key: 0,
                type: "button",
                class: "pages__remove",
                title: `Seite „${se.name}“ löschen`,
                "aria-label": `Seite ${se.name} löschen`,
                onClick: an((Fe) => Ye(se.id), ["stop"])
              }, " × ", 8, $_)) : ee("", !0)
            ]))), 128)),
            J[9] || (J[9] = s("li", {
              class: "pages__sep",
              role: "separator"
            }, null, -1)),
            s("li", { role: "none" }, [
              s("button", {
                type: "button",
                role: "menuitem",
                class: "pages__item pages__add",
                onClick: ae
              }, " + Neue Seite ")
            ])
          ])) : ee("", !0)
        ], 512)) : ee("", !0),
        I.value && h(y) ? (p(), x("button", {
          key: 1,
          type: "button",
          class: "icon-action",
          disabled: !h(y).canUndo.value,
          title: h(y).undoLabel.value ? `Rückgängig: ${h(y).undoLabel.value}` : "Rückgängig",
          "aria-label": "Letzte Änderung rückgängig machen",
          onClick: J[1] || (J[1] = (se) => h(y).undo())
        }, [
          E(h(Ne), {
            name: "undo",
            size: "sm"
          })
        ], 8, I_)) : ee("", !0),
        I.value && h(y) ? (p(), x("button", {
          key: 2,
          type: "button",
          class: "icon-action",
          disabled: !h(y).canRedo.value,
          title: h(y).redoLabel.value ? `Wiederholen: ${h(y).redoLabel.value}` : "Wiederholen",
          "aria-label": "Rückgängig gemachte Änderung wiederholen",
          onClick: J[2] || (J[2] = (se) => h(y).redo())
        }, [
          E(h(Ne), {
            name: "redo",
            size: "sm"
          })
        ], 8, A_)) : ee("", !0),
        I.value ? (p(), x("button", {
          key: 3,
          type: "button",
          class: Ve(["icon-action", { on: h(B) }]),
          "aria-pressed": h(B),
          title: "Am Raster ausrichten",
          "aria-label": "Widgets am Raster ausrichten",
          onClick: J[3] || (J[3] = //@ts-ignore
          (...se) => h(Y) && h(Y)(...se))
        }, [...J[10] || (J[10] = [
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
        ])], 10, R_)) : ee("", !0),
        I.value && me.value ? (p(), x("button", {
          key: 4,
          type: "button",
          class: Ve(["icon-action", { on: h(ie) }]),
          "aria-pressed": h(ie),
          title: "Hintergrund der Seite zeigen",
          "aria-label": "Hintergrund der Seite beim Bearbeiten zeigen oder verbergen",
          onClick: J[4] || (J[4] = //@ts-ignore
          (...se) => h(ne) && h(ne)(...se))
        }, [...J[11] || (J[11] = [
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
        ])], 10, E_)) : ee("", !0),
        I.value ? (p(), x("button", {
          key: 5,
          type: "button",
          class: Ve(["icon-action", { on: h(C) }]),
          "aria-pressed": h(C),
          title: "Widgets",
          "aria-label": "Widget-Palette zeigen oder verbergen",
          onClick: J[5] || (J[5] = //@ts-ignore
          (...se) => h(T) && h(T)(...se))
        }, [...J[12] || (J[12] = [
          hm('<svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15" data-v-bd6698f6><rect x="3.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-bd6698f6></rect><rect x="13.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-bd6698f6></rect><rect x="3.5" y="13.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-bd6698f6></rect><rect x="13.5" y="13.5" width="7" height="7" rx="1" fill="currentColor" stroke="currentColor" stroke-width="1.6" data-v-bd6698f6></rect></svg>', 1)
        ])], 10, V_)) : ee("", !0),
        z.value ? (p(), x("button", {
          key: 6,
          type: "button",
          class: "icon-action",
          title: "Seite einrichten",
          "aria-label": "Seite einrichten",
          onClick: J[6] || (J[6] = (se) => h(O)(m.value))
        }, [...J[13] || (J[13] = [
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
        ])])) : ee("", !0),
        J[16] || (J[16] = s("span", { class: "spacer" }, null, -1)),
        z.value ? (p(), x("button", {
          key: 7,
          type: "button",
          class: "action",
          title: "Arbeitsstand speichern oder laden",
          onClick: Z
        }, " Speichern ")) : ee("", !0),
        z.value ? (p(), x("div", T_, [
          s("button", {
            type: "button",
            class: Ve(["mode", { on: !I.value }]),
            "aria-pressed": !I.value,
            onClick: sn
          }, " Ansicht ", 10, O_),
          s("button", {
            type: "button",
            class: Ve(["mode", { on: I.value }]),
            "aria-pressed": I.value,
            onClick: Qe
          }, " Bearbeiten ", 10, L_)
        ])) : ee("", !0),
        h(S).length > 1 ? (p(), x("div", {
          key: 9,
          ref_key: "languageHost",
          ref: fe,
          class: "lang"
        }, [
          s("button", {
            type: "button",
            class: "icon-action lang__button",
            "aria-expanded": g.value,
            "aria-haspopup": "menu",
            title: "Sprache",
            "aria-label": "Sprache",
            onClick: J[7] || (J[7] = (se) => g.value = !g.value)
          }, N((h(b) ?? "").slice(0, 2).toUpperCase()), 9, D_),
          g.value ? (p(), x("ul", B_, [
            (p(!0), x(he, null, We(h(S), (se) => (p(), x("li", {
              key: se.tag,
              role: "none"
            }, [
              s("button", {
                type: "button",
                role: "menuitem",
                class: Ve(["lang__item", { on: se.tag === h(b) }]),
                onClick: (Fe) => V(se.tag)
              }, N(se.label), 11, W_)
            ]))), 128))
          ])) : ee("", !0)
        ], 512)) : ee("", !0),
        s("button", {
          type: "button",
          class: "icon-action",
          title: "Erscheinungsbild",
          "aria-label": "Erscheinungsbild",
          onClick: j
        }, [...J[14] || (J[14] = [
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
        J[17] || (J[17] = s("span", {
          class: "avatar",
          title: "Angemeldet"
        }, "MH", -1))
      ]),
      (p(), $e(aa, { to: "body" }))
    ], 64));
  }
}), Ke = (c, _) => {
  const o = c.__vccOpts || c;
  for (const [m, y] of _)
    o[m] = y;
  return o;
}, M_ = /* @__PURE__ */ Ke(P_, [["__scopeId", "data-v-bd6698f6"]]), ki = [
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
const U_ = {
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
function N_() {
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
const fn = X(N_()), ra = X([]);
function mi() {
  try {
    localStorage.setItem(yu, JSON.stringify(fn.value));
  } catch {
  }
}
function Xt() {
  const c = yr.value.find((m) => m.id === fn.value.themeId);
  if (!c) return;
  const _ = document.documentElement, o = { ...c.tokens, ...fn.value.overrides };
  for (const [m, y] of Object.entries(o))
    _.style.setProperty(`--${m}`, y);
  for (const [m, y] of Object.entries(U_)) {
    const I = o[y];
    I && _.style.setProperty(`--${m}`, I);
  }
  _.style.colorScheme = c.dark ? "dark" : "light", _.setAttribute("data-theme", c.dark ? "dark" : "light");
}
const yr = K(() => [...bu, ...ra.value]);
function wu() {
  const c = K(
    () => yr.value.find((d) => d.id === fn.value.themeId) ?? bu[0]
  );
  function _(d) {
    return fn.value.overrides[d] ?? c.value.tokens[d] ?? "";
  }
  function o(d) {
    return d in fn.value.overrides;
  }
  function m(d) {
    yr.value.some((g) => g.id === d) && (fn.value = { themeId: d, overrides: {} }, mi(), Xt());
  }
  function y(d, g) {
    _u.includes(d) && (fn.value = {
      ...fn.value,
      overrides: { ...fn.value.overrides, [d]: g }
    }, mi(), Xt());
  }
  function I(d) {
    const { [d]: g, ...V } = fn.value.overrides;
    fn.value = { ...fn.value, overrides: V }, mi(), Xt();
  }
  function f() {
    fn.value = { ...fn.value, overrides: {} }, mi(), Xt();
  }
  function S(d) {
    yr.value.some((g) => g.id === d.id) || (ra.value = [...ra.value, d]);
  }
  function b() {
    return {
      ...c.value,
      id: `${c.value.id}-eigen`,
      name: `${c.value.name} (angepasst)`,
      tokens: { ...c.value.tokens, ...fn.value.overrides }
    };
  }
  return {
    themes: yr,
    activeTheme: c,
    overrides: K(() => fn.value.overrides),
    valueOf: _,
    isOverridden: o,
    selectTheme: m,
    setToken: y,
    clearToken: I,
    clearAllTokens: f,
    addTheme: S,
    exportTheme: b,
    apply: Xt
  };
}
function F_() {
  Xt();
}
const z_ = { class: "shell" }, q_ = {
  key: 0,
  class: "global-loading-bar"
}, G_ = {
  key: 0,
  class: "rail",
  "aria-label": "Bereiche"
}, H_ = ["aria-current"], K_ = ["aria-current"], Y_ = ["aria-current"], Z_ = ["aria-current", "title", "onClick"], J_ = { class: "sr-only" }, X_ = { class: "content" }, Q_ = /* @__PURE__ */ Ge({
  __name: "App",
  setup(c) {
    const _ = X([]), { isLoading: o } = Cm();
    wu();
    const m = Cr(), y = $i();
    Xn(() => {
      const d = xe(wm);
      _.value = d.getAllNavigationItemsArray ? d.getAllNavigationItemsArray() : [];
    });
    const I = K(
      () => m.params.pageid ? `/page/${m.params.pageid}` : "/page/abc"
    ), f = K(() => String(m.name) === "home" && !m.params.pageid), S = K(
      () => ["home", "page", "edit", "pageEdit"].includes(String(m.name))
    ), b = (d) => y.push(d);
    return (d, g) => {
      const V = mm("router-view");
      return p(), x("div", z_, [
        h(o) ? (p(), x("div", q_, [...g[3] || (g[3] = [
          s("div", { class: "global-loading-bar-progress" }, null, -1)
        ])])) : ee("", !0),
        E(M_),
        s("div", {
          class: Ve(["shell-body", { "shell-body--norail": f.value }])
        }, [
          f.value ? ee("", !0) : (p(), x("nav", G_, [
            s("button", {
              type: "button",
              class: Ve(["ri", { on: S.value }]),
              "aria-current": S.value ? "page" : void 0,
              title: "Board",
              onClick: g[0] || (g[0] = (D) => b(I.value))
            }, [
              E(h(Ne), { name: "dashboard" }),
              g[4] || (g[4] = s("span", { class: "sr-only" }, "Board", -1))
            ], 10, H_),
            s("button", {
              type: "button",
              class: Ve(["ri", { on: h(m).name === "pages" }]),
              "aria-current": h(m).name === "pages" ? "page" : void 0,
              title: "Seiten",
              onClick: g[1] || (g[1] = (D) => b("/pages"))
            }, [
              E(h(Ne), { name: "layers" }),
              g[5] || (g[5] = s("span", { class: "sr-only" }, "Seiten", -1))
            ], 10, K_),
            s("button", {
              type: "button",
              class: Ve(["ri", { on: h(m).name === "data" }]),
              "aria-current": h(m).name === "data" ? "page" : void 0,
              title: "Verbindungen & Daten",
              onClick: g[2] || (g[2] = (D) => b("/datasources"))
            }, [
              E(h(Ne), { name: "dataset" }),
              g[6] || (g[6] = s("span", { class: "sr-only" }, "Verbindungen & Daten", -1))
            ], 10, Y_),
            (p(!0), x(he, null, We(_.value, (D) => (p(), x("button", {
              key: D.id,
              type: "button",
              class: Ve(["ri", { on: h(m).name === D.routeName }]),
              "aria-current": h(m).name === D.routeName ? "page" : void 0,
              title: D.label,
              onClick: (U) => b(D.route)
            }, [
              E(h(Ne), {
                name: D.icon
              }, null, 8, ["name"]),
              s("span", J_, N(D.label), 1)
            ], 10, Z_))), 128)),
            g[7] || (g[7] = s("span", { class: "rail-spacer" }, null, -1))
          ])),
          s("main", X_, [
            (p(), $e(V, {
              key: d.$route.fullPath
            }))
          ])
        ], 2)
      ]);
    };
  }
}), j_ = /* @__PURE__ */ Ke(Q_, [["__scopeId", "data-v-ce3039cb"]]), ku = "daanse.board.usage";
function e1() {
  try {
    const c = localStorage.getItem(ku), _ = c ? JSON.parse(c) : {};
    return _ && typeof _ == "object" ? _ : {};
  } catch {
    return {};
  }
}
const dt = X(e1());
function ua() {
  function c(y) {
    if (!y) return;
    const I = dt.value[y];
    dt.value = {
      ...dt.value,
      [y]: { count: (I?.count ?? 0) + 1, lastOpened: Date.now() }
    };
    try {
      localStorage.setItem(ku, JSON.stringify(dt.value));
    } catch {
    }
  }
  function _(y) {
    return dt.value[y];
  }
  function o(y, I) {
    const f = dt.value[y], S = dt.value[I];
    return (S?.count ?? 0) !== (f?.count ?? 0) ? (S?.count ?? 0) - (f?.count ?? 0) : (S?.lastOpened ?? 0) - (f?.lastOpened ?? 0);
  }
  function m(y) {
    const I = dt.value[y]?.lastOpened;
    if (!I) return "";
    const f = Math.floor((Date.now() - I) / 864e5);
    return f <= 0 ? "heute" : f === 1 ? "gestern" : f < 31 ? `vor ${f} Tagen` : new Date(I).toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" });
  }
  return { usage: dt, recordOpened: c, usageOf: _, byUsage: o, lastOpenedLabel: m };
}
const n1 = {
  key: 0,
  class: "loading-state"
}, t1 = {
  key: 1,
  class: "view-component-wrapper"
}, r1 = {
  key: 2,
  class: "edit-component-wrapper"
}, i1 = {
  key: 3,
  class: "no-layout-message"
}, o1 = { class: "no-layout-message__text" }, a1 = { key: 0 }, l1 = { key: 1 }, s1 = { key: 2 }, u1 = /* @__PURE__ */ Ge({
  __name: "LayoutRenderer",
  props: {
    pageId: {},
    viewMode: { type: Boolean }
  },
  emits: ["openWidgetSettings", "removeWidget"],
  setup(c, { emit: _ }) {
    const o = c, m = _, y = xe(Ii), I = xe(er), f = X(null), S = X(null), b = zs(null), d = zs(null), g = X(0), V = X(!0), D = (ie) => {
      m("openWidgetSettings", ie);
    }, U = (ie) => {
      m("removeWidget", ie);
    };
    let z = 0;
    const q = async () => {
      const ie = ++z;
      if (V.value = !0, await Sr(), ie === z) {
        if (o.pageId && I) {
          const ne = I.getPage(o.pageId);
          if (f.value = ne ?? null, ne?.layoutId && y) {
            const B = y.getLayout(ne.layoutId);
            S.value = B || null, o.viewMode ? (d.value = B?.component || null, b.value = null) : (b.value = B?.editor || null, d.value = null);
          } else
            b.value = null, d.value = null, S.value = null;
        }
        await new Promise((ne) => setTimeout(ne, 50)), ie === z && (V.value = !1);
      }
    }, O = () => o.pageId ? I?.getPage(o.pageId) : void 0, C = ru(O);
    ln(C, () => {
      f.value = C.value ?? null;
    });
    const T = $m(O, "layoutId");
    return ln(T, () => {
      g.value++, q();
    }), Xn(async () => {
      await Sr(), await q();
    }), (ie, ne) => (p(), x("div", {
      class: "layout-renderer",
      style: Ot({
        backgroundColor: f.value?.backgroundColor || void 0,
        backgroundImage: f.value?.backgroundImage ? `url(${f.value.backgroundImage})` : void 0,
        backgroundSize: f.value?.backgroundSize || "cover",
        backgroundPosition: f.value?.backgroundPosition || "center",
        backgroundRepeat: f.value?.backgroundRepeat || "no-repeat"
      })
    }, [
      V.value ? (p(), x("div", n1, [...ne[0] || (ne[0] = [
        s("span", {
          class: "spinner",
          "aria-hidden": "true"
        }, null, -1),
        s("p", null, "Layout wird geladen…", -1)
      ])])) : o.viewMode && d.value && S.value ? (p(), x("div", t1, [
        (p(), $e(Qn(d.value), {
          key: S.value.id || "view",
          "layout-settings": f.value?.layoutSettings
        }, null, 8, ["layout-settings"]))
      ])) : !o.viewMode && b.value && S.value ? (p(), x("div", r1, [
        (p(), $e(Qn(b.value), {
          key: S.value.id || "edit",
          "layout-settings": f.value?.layoutSettings,
          onOpenSettings: D,
          onRemoveWidget: U
        }, null, 40, ["layout-settings"]))
      ])) : (p(), x("div", i1, [
        s("p", o1, [
          E(h(Ne), {
            name: "warning",
            size: "lg",
            tone: "color-warn"
          }),
          f.value ? S.value ? (p(), x("span", s1, [
            ue(N(o.viewMode ? "Zu diesem Layout gibt es keine Darstellung." : "Zu diesem Layout gibt es keinen Editor.") + " ", 1),
            ne[1] || (ne[1] = s("br", null, null, -1)),
            s("small", null, "Layout: " + N(S.value.id), 1)
          ])) : (p(), x("span", l1, " Für „" + N(f.value.name || o.pageId) + '" ist kein Layout eingestellt. ', 1)) : (p(), x("span", a1, " Die Seite „" + N(o.pageId) + '" gibt es nicht. ', 1))
        ])
      ]))
    ], 4));
  }
}), xu = /* @__PURE__ */ Ke(u1, [["__scopeId", "data-v-965fd8c7"]]), d1 = {
  class: "floorplan",
  "aria-hidden": "true"
}, c1 = {
  key: 0,
  class: "floorplan__empty"
}, f1 = /* @__PURE__ */ Ge({
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
    const m = K(() => {
      const y = (_.items ?? []).filter(
        (d) => Number.isFinite(d.x) && Number.isFinite(d.y)
      );
      if (y.length === 0) return [];
      const I = Math.max(...y.map((d) => (d.x ?? 0) + (d.width ?? 1))), f = Math.max(...y.map((d) => (d.y ?? 0) + (d.height ?? 1))), S = I > 0 ? I : 1, b = f > 0 ? f : 1;
      return y.map((d) => ({
        key: d.id ?? `${d.x}-${d.y}`,
        family: o(_.typeById?.[d.id ?? ""]),
        style: {
          left: `${(d.x ?? 0) / S * 100}%`,
          top: `${(d.y ?? 0) / b * 100}%`,
          // minus the gutter, so neighbouring widgets stay visibly separate
          width: `calc(${Math.max((d.width ?? 1) / S * 100, 3)}% - 3px)`,
          height: `calc(${Math.max((d.height ?? 1) / b * 100, 6)}% - 3px)`
        }
      }));
    });
    return (y, I) => (p(), x("div", d1, [
      (p(!0), x(he, null, We(m.value, (f) => (p(), x("div", {
        key: f.key,
        class: Ve(["floorplan__block", `floorplan__block--${f.family}`]),
        style: Ot(f.style)
      }, null, 6))), 128)),
      m.value.length === 0 ? (p(), x("span", c1, "keine Widgets")) : ee("", !0)
    ]));
  }
}), da = /* @__PURE__ */ Ke(f1, [["__scopeId", "data-v-0eecd73b"]]), { parse: p1 } = JSON, { keys: g1 } = Object, xi = String, v1 = "string", Zs = {}, Su = "object", h1 = (c, _) => _, m1 = (c) => c instanceof xi ? xi(c) : c, _1 = (c, _) => typeof _ === v1 ? new xi(_) : _, b1 = (c, _, o, m) => (y) => {
  for (let I = g1(y), { length: f } = I, S = 0; S < f; S++) {
    const b = I[S], d = y[b];
    if (d instanceof xi) {
      const g = c[+d];
      typeof g === Su && !o.has(g) ? (o.add(g), y[b] = Zs, _.push({ o: y, k: b, r: g })) : y[b] = m.call(y, b, g);
    } else y[b] !== Zs && (y[b] = m.call(y, b, d));
  }
  return y;
}, y1 = (c, _) => {
  const o = p1(c, _1).map(m1), m = h1;
  let y = o[0];
  if (typeof y === Su && y) {
    const I = [], f = b1(o, I, /* @__PURE__ */ new Set(), m);
    y = f(y);
    let S = 0;
    for (; S < I.length; ) {
      const { o: b, k: d, r: g } = I[S++];
      b[d] = m.call(b, d, f(g));
    }
  }
  return m.call({ "": y }, "", y);
};
function w1(c) {
  if (c) {
    if (typeof c == "object") return c;
    if (typeof c == "string")
      try {
        const _ = JSON.parse(c);
        return Array.isArray(_) ? y1(c) : _;
      } catch {
        return;
      }
  }
}
function k1(c) {
  return typeof c.eClass == "string";
}
function x1(c) {
  if (!c || typeof c != "object") return;
  const _ = new Pm(), o = /* @__PURE__ */ new Map();
  for (const f of c.conections ?? []) {
    const S = new Mm();
    S.uid = f.uid, S.name = f.name, S.type = f.type, S.config = f.config ?? {}, _.connections.push(S), o.set(f.uid, S);
  }
  const m = /* @__PURE__ */ new Map();
  for (const f of c.datasources ?? []) {
    const S = new Um();
    S.uid = f.uid, S.name = f.name, S.type = f.type, S.config = f.config ?? {};
    const b = o.get((f.config ?? {}).connection);
    b && (S.connection = b), _.datasources.push(S), m.set(f.uid, S);
  }
  const y = [];
  for (const f of c.variables ?? []) {
    const S = new Nm();
    S.uid = f.id ?? f.uid ?? Math.random().toString(36).substring(7), S.name = f.name, S.type = f.type, S.scope = f.scope ?? "global", S.accessMode = f.accessMode ?? "external-writable", S.definition = f, _.variables.push(S), y.push({ entry: f, variable: S });
  }
  for (const f of c.eventMappings ?? []) {
    const S = new au();
    S.id = f.id, S.definition = f, _.eventMappings.push(S);
  }
  const I = new Fm();
  I.id = crypto.randomUUID(), I.name = "Board", _.board = I;
  for (const [f, S] of Object.entries(c.pages ?? {})) {
    const b = S?.info ?? {}, d = new zm();
    d.id = b.id ?? f, d.name = b.name ?? "Seite", d.description = b.description, d.icon = b.icon, d.visibleInNavigation = b.visibleInNavigation ?? !0, d.layoutId = b.layoutId ?? b.layout?.id ?? "org.eclipse.daanse.board.app.ui.vue.layouts.base", d.layoutSettings = b.layoutSettings, d.backgroundColor = b.backgroundColor, d.backgroundImage = b.backgroundImage, d.backgroundSize = b.backgroundSize, d.backgroundPosition = b.backgroundPosition, d.backgroundRepeat = b.backgroundRepeat;
    for (const g of S?.widgets ?? []) {
      const V = new qm();
      V.uid = g.uid, V.type = g.type, V.config = g.config ?? {}, V.wrapperConfig = g.wrapperConfig ?? {};
      const D = m.get(g.config?.datasourceId);
      D && (V.datasource = D), d.widgets.push(V);
    }
    for (const g of S?.layout ?? []) {
      const V = new Gm();
      V.id = g.id, V.x = g.x ?? 0, V.y = g.y ?? 0, V.z = g.z ?? 0, V.width = g.width ?? 300, V.height = g.height ?? 150, V.group = g.group, d.layout.push(V);
    }
    I.pages.push(d);
  }
  for (const { entry: f, variable: S } of y) {
    const b = f.pageId;
    b && (S.page = I.pages.toArray().find((d) => d.id === b));
  }
  return I.pages.size() > 0 && (I.defaultPage = I.pages.get(0)), _;
}
const S1 = X();
function C1() {
  return S1;
}
const Cu = "workspace.json", $1 = "http://org.eclipse.daanse.board.app.lib.model.workspace#//Board";
function I1(c) {
  if (!c || typeof c != "object") return c;
  const _ = c;
  if (_.board || !Array.isArray(_.pages)) return c;
  const o = JSON.parse(
    JSON.stringify(_).replace(/"\/\/@pages\./g, '"//@board/@pages.')
  ), m = {
    eClass: $1,
    id: crypto.randomUUID(),
    /* Nothing in the old shape named the board; the pages were the boards. */
    name: "Board",
    pages: o.pages
  }, y = o.defaultPage;
  return y?.$ref?.includes("//@board/@pages.") && (m.defaultPage = y), delete o.pages, delete o.defaultPage, o.board = m, o;
}
function ia(c) {
  const _ = w1(c);
  if (_)
    try {
      if (!k1(_)) return x1(_);
      const o = new lu(su.createURI(Cu));
      return o.loadFromString(JSON.stringify(I1(_))), o.getContents().get(0);
    } catch {
      return;
    }
}
function A1() {
  const c = xe(Nn), _ = xe(Ai), o = xe(Ri), m = xe(uu), y = xe(pm), I = xe(vm);
  function f() {
    c.eventMappings.clear();
    for (const d of I?.getAllMappings() ?? []) {
      const g = new au();
      g.id = d.id, g.definition = d, c.eventMappings.push(g);
    }
  }
  function S() {
    f();
    const d = new lu(su.createURI(Cu));
    d.getContents().add(c);
    const g = d.saveToString(/* @__PURE__ */ new Map([[Hm, 2]]));
    return d.getContents().clear(), g;
  }
  function b(d) {
    const g = ia(d);
    if (!g) return [];
    c.connections.clear();
    for (const D of g.connections.toArray()) c.connections.push(D);
    c.datasources.clear();
    for (const D of g.datasources.toArray()) c.datasources.push(D);
    c.board = g.board, c.variables.clear();
    for (const D of g.variables.toArray()) c.variables.push(D);
    c.eventMappings.clear();
    for (const D of g.eventMappings.toArray()) c.eventMappings.push(D);
    _?.rebuildLive(), o?.rebuildLive(), m?.rebuildLive(), I?.setAllMappings(
      c.eventMappings.toArray().map((D) => D.definition)
    );
    const V = [];
    for (const D of c.board?.pages.toArray() ?? [])
      y?.initilazeVariableWrappers(
        D.widgets.toArray().map((U) => ({
          uid: U.uid,
          type: U.type,
          config: U.config,
          wrapperConfig: U.wrapperConfig
        }))
      ), V.push(D.id);
    return V;
  }
  return { save: S, load: b };
}
function R1(c) {
  const _ = c.split(".").filter(Boolean);
  return (_[_.length - 1] ?? c).replace(/widget$/i, "") || c;
}
function ca(c, _, o, m) {
  const y = Array.isArray(o) ? o : [], I = Array.isArray(m) ? m : [], f = {};
  for (const d of I)
    d?.uid && d.type && (f[d.uid] = d.type);
  const S = new Set(
    I.map((d) => d?.config?.datasourceId).filter((d) => !!d)
  ), b = [...new Set(I.map((d) => R1(d?.type ?? "")).filter(Boolean))];
  return {
    id: c,
    name: _?.name || "Unbenanntes Board",
    description: _?.description ?? "",
    items: y,
    typeById: f,
    widgetCount: I.length,
    sourceCount: S.size,
    kinds: b
  };
}
const E1 = { class: "storage" }, V1 = {
  class: "tree",
  "aria-label": "Speicher"
}, T1 = {
  class: "tree__body",
  role: "tree"
}, O1 = ["aria-expanded", "onClick"], L1 = { class: "row__twist" }, D1 = { class: "row__name" }, B1 = { class: "row__meta" }, W1 = ["onClick"], P1 = { class: "row__name" }, M1 = { class: "row__meta" }, U1 = {
  key: 0,
  class: "row row--hint"
}, N1 = ["onClick"], F1 = {
  key: 0,
  class: "row row--hint"
}, z1 = { class: "detail" }, q1 = {
  key: 0,
  class: "detail__failure",
  role: "alert"
}, G1 = { class: "detail__head" }, H1 = { class: "detail__facts" }, K1 = { class: "create__hint" }, Y1 = { class: "detail__head" }, Z1 = { class: "detail__name" }, J1 = {
  key: 0,
  class: "detail__badge"
}, X1 = { class: "detail__facts" }, Q1 = {
  key: 0,
  class: "boards"
}, j1 = { class: "board__text" }, eb = { class: "board__name" }, nb = { class: "board__facts" }, tb = {
  key: 0,
  class: "board__kinds"
}, rb = {
  key: 1,
  class: "detail__hint"
}, ib = {
  key: 4,
  class: "detail__hint"
}, ob = {
  key: 5,
  class: "detail__hint"
}, ab = /* @__PURE__ */ Ge({
  __name: "WorkspaceStorage",
  emits: ["restored"],
  setup(c, { emit: _ }) {
    const o = _, m = xe(Zm), { save: y, load: I } = A1(), f = X([]), S = X({}), b = X(/* @__PURE__ */ new Set()), d = X(), g = X(), V = X(""), D = X(""), U = X(!1), z = C1(), q = X(!1), O = X("");
    function C(G) {
      return typeof G == "string" ? G : G?.message ?? String(G);
    }
    function T(G) {
      return G.name ?? String(G.uri).split("/").pop() ?? String(G.uri);
    }
    function ie(G) {
      return String(G.uri);
    }
    function ne(G, $) {
      const A = new URL(String(G.uri));
      return A.pathname = `/${$}.json`, A;
    }
    function B(G) {
      const $ = G ? Object.getPrototypeOf(G)?.constructor : void 0;
      return $ && "type" in $ ? String($.type) : "";
    }
    function Y(G) {
      return typeof G?.create == "function";
    }
    function me(G) {
      const $ = B(G);
      if (!(!$ || !m?.isViewForRepoType($)))
        return m.getViewForRepoType($);
    }
    const Be = K(() => me(d.value));
    async function tn() {
      f.value = await m?.getAvailableReposetories() ?? [];
      const G = f.value[0];
      G && b.value.size === 0 && (d.value = G, await Pe(G));
    }
    async function Pe(G) {
      b.value.add(ie(G)), b.value = new Set(b.value), await rn(G);
    }
    async function rn(G) {
      D.value = "", U.value = !0;
      try {
        S.value = { ...S.value, [ie(G)]: await G.findAll() };
      } catch ($) {
        S.value = { ...S.value, [ie(G)]: [] }, D.value = `Einträge konnten nicht gelesen werden: ${C($)}`;
      } finally {
        U.value = !1;
      }
    }
    function ce(G) {
      d.value = G, q.value = !1, b.value.has(ie(G)) ? (b.value.delete(ie(G)), b.value = new Set(b.value)) : Pe(G);
    }
    function fe(G) {
      const $ = S.value[ie(G)] ?? [], A = V.value.trim().toLowerCase();
      return [...A ? $.filter((_e) => T(_e).toLowerCase().includes(A)) : $].sort((_e, Te) => T(_e).localeCompare(T(Te)));
    }
    function oe(G, $) {
      d.value = G, g.value = $, q.value = !1, D.value = "";
    }
    function de(G) {
      return String(G.uri) === z.value?.entryUri;
    }
    function ae(G, $) {
      z.value = { placeUri: String(d.value?.uri), entryUri: String(G.uri), name: $ };
    }
    function we(G) {
      return Ye(ia(G?.data));
    }
    function Ye(G) {
      return (G?.board?.pages.toArray() ?? []).map(
        ($) => ca($.id, $, $.layout.toArray(), $.widgets.toArray())
      );
    }
    const sn = K(() => we(g.value)), Qe = K(() => ({
      boards: sn.value.length,
      widgets: sn.value.reduce((G, $) => G + $.widgetCount, 0),
      sources: sn.value.reduce((G, $) => G + $.sourceCount, 0)
    }));
    function Z(G) {
      const $ = we(G);
      return $.length === 0 ? "leer" : `${$.length} ${$.length === 1 ? "Seite" : "Seiten"}`;
    }
    const j = K(() => {
      if (!q.value) return { boards: 0, widgets: 0 };
      const G = Ye(ia(y()));
      return {
        boards: G.length,
        widgets: G.reduce(($, A) => $ + A.widgetCount, 0)
      };
    });
    async function H(G) {
      D.value = "";
      try {
        const $ = await d.value?.getEntityByUri(G.uri), A = I($?.data ?? G.data);
        ae(G, T(G)), o("restored", A);
      } catch ($) {
        D.value = `Laden fehlgeschlagen: ${C($)}`;
      }
    }
    async function J(G) {
      const $ = d.value;
      if ($) {
        D.value = "";
        try {
          await $.update({ ...G, data: y() }), ae(G, T(G)), await rn($), g.value = fe($).find((A) => String(A.uri) === String(G.uri));
        } catch (A) {
          D.value = `Speichern fehlgeschlagen: ${C(A)}`;
        }
      }
    }
    function se(G) {
      d.value = G, g.value = void 0, q.value = !0, O.value = "", D.value = "";
    }
    async function Fe() {
      const G = d.value, $ = O.value.trim();
      if (!(!G || !$)) {
        D.value = "";
        try {
          const A = { name: $, uri: ne(G, $), data: y() };
          await G.create(A), ae(A, $), await Pe(G), q.value = !1, g.value = fe(G).find((M) => T(M) === $);
        } catch (A) {
          D.value = `Anlegen fehlgeschlagen: ${C(A)}`;
        }
      }
    }
    async function et(G) {
      const $ = d.value;
      if ($) {
        D.value = "";
        try {
          await $.delete(G), de(G) && (z.value = void 0), g.value === G && (g.value = void 0), await rn($);
        } catch (A) {
          D.value = `Löschen fehlgeschlagen: ${C(A)}`;
        }
      }
    }
    function En(G) {
      const $ = typeof G.data == "string" ? G.data : JSON.stringify(G.data), A = URL.createObjectURL(new Blob([$], { type: "application/json" })), M = document.createElement("a");
      M.href = A, M.download = `${T(G)}.json`, M.click(), URL.revokeObjectURL(A);
    }
    return Xn(tn), ln(() => m, tn), (G, $) => (p(), x("div", E1, [
      s("aside", V1, [
        Qt(s("input", {
          "onUpdate:modelValue": $[0] || ($[0] = (A) => V.value = A),
          class: "tree__search",
          type: "search",
          placeholder: "Stände filtern",
          "aria-label": "Stände filtern"
        }, null, 512), [
          [ta, V.value]
        ]),
        s("div", T1, [
          (p(!0), x(he, null, We(f.value, (A) => (p(), x(he, {
            key: ie(A)
          }, [
            s("button", {
              type: "button",
              role: "treeitem",
              "aria-expanded": b.value.has(ie(A)),
              class: Ve(["row", "row--place", { on: d.value === A && !g.value }]),
              onClick: (M) => ce(A)
            }, [
              s("span", L1, N(b.value.has(ie(A)) ? "▾" : "▸"), 1),
              s("span", D1, N(A.name), 1),
              s("span", B1, N((S.value[ie(A)] ?? []).length), 1)
            ], 10, O1),
            b.value.has(ie(A)) ? (p(), x(he, { key: 0 }, [
              (p(!0), x(he, null, We(fe(A), (M) => (p(), x("button", {
                key: String(M.uri),
                type: "button",
                role: "treeitem",
                class: Ve(["row", "row--entry", { on: g.value === M }]),
                onClick: (_e) => oe(A, M)
              }, [
                s("span", {
                  class: Ve(["row__dot", { open: de(M) }]),
                  "aria-hidden": "true"
                }, null, 2),
                s("span", P1, N(T(M)), 1),
                s("span", M1, N(Z(M)), 1)
              ], 10, W1))), 128)),
              fe(A).length === 0 ? (p(), x("p", U1, N(V.value ? "Nichts gefunden" : "Noch kein Stand"), 1)) : ee("", !0),
              Y(A) ? (p(), x("button", {
                key: 1,
                type: "button",
                class: "row row--add",
                onClick: (M) => se(A)
              }, [...$[8] || ($[8] = [
                s("span", { class: "row__twist" }, "＋", -1),
                s("span", { class: "row__name" }, "Aktuellen Stand ablegen…", -1)
              ])], 8, N1)) : ee("", !0)
            ], 64)) : ee("", !0)
          ], 64))), 128)),
          f.value.length ? ee("", !0) : (p(), x("p", F1, "Keine Speicherorte eingerichtet."))
        ])
      ]),
      s("section", z1, [
        D.value ? (p(), x("p", q1, N(D.value), 1)) : ee("", !0),
        q.value ? (p(), x(he, { key: 1 }, [
          s("header", G1, [
            $[9] || ($[9] = s("h2", { class: "detail__name" }, "Neuen Stand ablegen", -1)),
            s("span", H1, "in " + N(d.value?.name), 1)
          ]),
          s("form", {
            class: "create",
            onSubmit: an(Fe, ["prevent"])
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
            E(h(ye), {
              intent: "primary",
              size: "sm",
              type: "submit",
              disabled: !O.value.trim()
            }, {
              default: te(() => [...$[10] || ($[10] = [
                ue("Ablegen", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            E(h(ye), {
              size: "sm",
              onClick: $[2] || ($[2] = (A) => q.value = !1)
            }, {
              default: te(() => [...$[11] || ($[11] = [
                ue("Abbrechen", -1)
              ])]),
              _: 1
            }),
            s("p", K1, " Abgelegt wird der gesamte Arbeitsstand: " + N(j.value.boards) + " " + N(j.value.boards === 1 ? "Seite" : "Seiten") + " mit " + N(j.value.widgets) + " Widgets, dazu Verbindungen, Datenquellen und Variablen. ", 1)
          ], 32)
        ], 64)) : Be.value && !g.value ? (p(), $e(Qn(Be.value), {
          key: 2,
          repo: d.value,
          context: S.value[ie(d.value)],
          onClose: $[3] || ($[3] = (A) => rn(d.value))
        }, null, 40, ["repo", "context"])) : g.value ? (p(), x(he, { key: 3 }, [
          s("header", Y1, [
            s("h2", Z1, N(T(g.value)), 1),
            de(g.value) ? (p(), x("span", J1, "geladen")) : ee("", !0),
            s("span", X1, N(d.value?.name) + " · " + N(Qe.value.boards) + " " + N(Qe.value.boards === 1 ? "Seite" : "Seiten") + " · " + N(Qe.value.widgets) + " Widgets · " + N(Qe.value.sources) + " Datenquellen ", 1),
            $[17] || ($[17] = s("span", { class: "detail__spacer" }, null, -1)),
            E(h(ye), {
              intent: "primary",
              size: "sm",
              onClick: $[4] || ($[4] = (A) => H(g.value))
            }, {
              default: te(() => [...$[13] || ($[13] = [
                ue("Laden", -1)
              ])]),
              _: 1
            }),
            Y(d.value) ? (p(), $e(h(ye), {
              key: 1,
              size: "sm",
              title: "Aktuellen Arbeitsstand hierhin schreiben",
              onClick: $[5] || ($[5] = (A) => J(g.value))
            }, {
              default: te(() => [...$[14] || ($[14] = [
                ue(" Überschreiben ", -1)
              ])]),
              _: 1
            })) : ee("", !0),
            E(h(ye), {
              size: "sm",
              onClick: $[6] || ($[6] = (A) => En(g.value))
            }, {
              default: te(() => [...$[15] || ($[15] = [
                ue("Herunterladen", -1)
              ])]),
              _: 1
            }),
            Y(d.value) ? (p(), $e(h(ye), {
              key: 2,
              intent: "danger",
              size: "sm",
              onClick: $[7] || ($[7] = (A) => et(g.value))
            }, {
              default: te(() => [...$[16] || ($[16] = [
                ue(" Löschen ", -1)
              ])]),
              _: 1
            })) : ee("", !0)
          ]),
          sn.value.length ? (p(), x("div", Q1, [
            (p(!0), x(he, null, We(sn.value, (A) => (p(), x("article", {
              key: A.id,
              class: "board"
            }, [
              E(da, {
                items: A.items,
                "type-by-id": A.typeById
              }, null, 8, ["items", "type-by-id"]),
              s("div", j1, [
                s("h3", eb, N(A.name), 1),
                s("p", nb, N(A.widgetCount) + " Widgets · " + N(A.sourceCount) + " " + N(A.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1),
                A.kinds.length ? (p(), x("p", tb, N(A.kinds.join(" · ")), 1)) : ee("", !0)
              ])
            ]))), 128))
          ])) : (p(), x("p", rb, " In diesem Stand liegt kein Board - er enthält nur Verbindungen, Quellen oder Variablen. "))
        ], 64)) : U.value ? (p(), x("p", ib, "Wird gelesen…")) : (p(), x("p", ob, "Wähle links einen Stand, um zu sehen, was darin liegt."))
      ])
    ]));
  }
}), lb = /* @__PURE__ */ Ke(ab, [["__scopeId", "data-v-3b03814f"]]), sb = { class: "boards" }, ub = { class: "boards__panel" }, db = { class: "boards__bar" }, cb = {
  class: "boards__views",
  role: "tablist",
  "aria-label": "Ansicht"
}, fb = ["aria-selected"], pb = ["aria-selected"], gb = { class: "boards__body" }, vb = {
  key: 0,
  class: "boards__empty"
}, hb = { class: "boards__empty-actions" }, mb = {
  key: 1,
  class: "single"
}, _b = ["aria-label", "onKeydown"], bb = {
  class: "single__icon",
  "aria-hidden": "true"
}, yb = { class: "single__text" }, wb = { class: "single__name" }, kb = {
  key: 0,
  class: "single__desc"
}, xb = { class: "single__meta" }, Sb = { class: "single__actions" }, Cb = /* @__PURE__ */ Ge({
  __name: "BoardsHome",
  props: {
    pageRepo: {},
    layoutRepo: {}
  },
  setup(c) {
    const _ = c, o = $i(), m = Cr(), { byUsage: y } = ua(), I = xe(Nn), f = vn(I, (C) => C.board?.pages), S = K(() => (f.value, I.board)), b = X(m.query.view === "storage" ? "storage" : "recent"), d = K(() => {
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
    }), g = K(() => ({
      pages: d.value.length,
      widgets: d.value.reduce((C, T) => C + T.widgetCount, 0),
      sources: new Set(d.value.flatMap((C) => C.kinds)).size
    })), V = K(
      () => _.pageRepo?.getDefaultPage()?.id ?? d.value[0]?.id
    );
    function D(C) {
      o.push(`/page/${C}`);
    }
    function U() {
      const C = V.value;
      C && D(C);
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
    function q() {
      b.value = "storage";
    }
    function O(C) {
      const T = _.pageRepo?.getDefaultPage()?.id ?? C[0];
      T ? o.push(`/page/${T}`) : b.value = "recent";
    }
    return (C, T) => (p(), x("div", sb, [
      s("div", ub, [
        s("header", db, [
          s("div", cb, [
            s("button", {
              type: "button",
              role: "tab",
              "aria-selected": b.value === "recent",
              class: Ve(["boards__view", { on: b.value === "recent" }]),
              onClick: T[0] || (T[0] = (ie) => b.value = "recent")
            }, " Oft benutzt ", 10, fb),
            s("button", {
              type: "button",
              role: "tab",
              "aria-selected": b.value === "storage",
              class: Ve(["boards__view", { on: b.value === "storage" }]),
              onClick: T[1] || (T[1] = (ie) => b.value = "storage")
            }, " Speicher ", 10, pb)
          ])
        ]),
        s("div", gb, [
          b.value === "recent" && d.value.length === 0 ? (p(), x("div", vb, [
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
            s("div", hb, [
              E(h(ye), {
                intent: "primary",
                size: "sm",
                onClick: z
              }, {
                default: te(() => [...T[2] || (T[2] = [
                  ue("Board anlegen", -1)
                ])]),
                _: 1
              }),
              E(h(ye), {
                size: "sm",
                onClick: q
              }, {
                default: te(() => [...T[3] || (T[3] = [
                  ue("Aus Speicher öffnen", -1)
                ])]),
                _: 1
              })
            ])
          ])) : b.value === "recent" ? (p(), x("div", mb, [
            T[7] || (T[7] = s("h2", { class: "single__heading" }, "Geöffnet", -1)),
            s("article", {
              class: "single__card",
              tabindex: "0",
              role: "button",
              "aria-label": `Board ${S.value?.name ?? ""} öffnen`,
              onClick: U,
              onKeydown: [
                jt(U, ["enter"]),
                jt(an(U, ["prevent"]), ["space"])
              ]
            }, [
              s("span", bb, [
                E(h(Ne), {
                  name: S.value?.icon || "dashboard",
                  size: "lg"
                }, null, 8, ["name"])
              ]),
              s("div", yb, [
                s("h3", wb, N(S.value?.name || "Board"), 1),
                S.value?.description ? (p(), x("p", kb, N(S.value.description), 1)) : ee("", !0),
                s("p", xb, N(g.value.pages) + " " + N(g.value.pages === 1 ? "Seite" : "Seiten") + " · " + N(g.value.widgets) + " " + N(g.value.widgets === 1 ? "Widget" : "Widgets"), 1)
              ]),
              s("div", Sb, [
                E(h(ye), {
                  intent: "primary",
                  size: "sm",
                  onClick: an(U, ["stop"])
                }, {
                  default: te(() => [...T[6] || (T[6] = [
                    ue("Öffnen", -1)
                  ])]),
                  _: 1
                })
              ])
            ], 40, _b),
            T[8] || (T[8] = s("p", { class: "single__note" }, " Ein Arbeitsstand hält genau ein Board. Ein anderes bekommst du, indem du im Speicher einen anderen Stand öffnest; die Seiten dieses Boards liegen im Bereich „Seiten“. ", -1))
          ])) : (p(), $e(lb, {
            key: 2,
            onRestored: O
          }))
        ])
      ])
    ]));
  }
}), $b = /* @__PURE__ */ Ke(Cb, [["__scopeId", "data-v-86d874a3"]]), Ib = { class: "report-container" }, Ab = /* @__PURE__ */ Ge({
  __name: "ViewReport",
  props: ["params"],
  setup(c) {
    const _ = c, o = Cr(), m = xe(er), y = xe(Ii), I = K(() => _.params?.pageid ?? o.params.pageid ?? ""), { recordOpened: f } = ua();
    return ln(I, (S) => f(S), { immediate: !0 }), (S, b) => (p(), x("div", Ib, [
      I.value ? (p(), $e(xu, {
        key: 0,
        pageId: I.value,
        viewMode: !0
      }, null, 8, ["pageId"])) : (p(), $e($b, {
        key: 1,
        "page-repo": h(m),
        "layout-repo": h(y)
      }, null, 8, ["page-repo", "layout-repo"]))
    ]));
  }
}), Js = /* @__PURE__ */ Ke(Ab, [["__scopeId", "data-v-3ecae506"]]), Rb = { boards: 0, widgets: 0 };
function $u() {
  const c = xe(er);
  function _() {
    const y = {};
    if (!c) return y;
    for (const I of c.getAllPageIds()) {
      const f = /* @__PURE__ */ new Set();
      for (const S of c.getPage(I)?.widgets?.toArray() ?? []) {
        const b = S.datasource?.uid;
        if (!b) continue;
        const d = y[b] ??= { boards: 0, widgets: 0 };
        d.widgets++, f.add(b);
      }
      for (const S of f) y[S].boards++;
    }
    return y;
  }
  function o(y) {
    return _()[y] ?? Rb;
  }
  function m(y) {
    if (!y.widgets) return "";
    const I = `${y.boards} ${y.boards === 1 ? "Board" : "Boards"}`, f = `${y.widgets} ${y.widgets === 1 ? "Widget" : "Widgets"}`;
    return `${I} · ${f}`;
  }
  return { usageByDatasource: _, usageOf: o, usageLabel: m };
}
const Eb = {
  key: 0,
  class: "pick"
}, Vb = { class: "pick__lead" }, Tb = {
  key: 0,
  class: "pick__rubric"
}, Ob = { class: "tiles" }, Lb = ["onClick"], Db = { class: "tile__head" }, Bb = { class: "tile__name" }, Wb = {
  key: 0,
  class: "tile__what"
}, Pb = {
  key: 1,
  class: "fill"
}, Mb = { class: "chosen" }, Ub = {
  class: "chosen__icon",
  "aria-hidden": "true"
}, Nb = { class: "chosen__text" }, Fb = { class: "chosen__name" }, zb = {
  key: 0,
  class: "chosen__what"
}, qb = { class: "fill__fields" }, Gb = /* @__PURE__ */ Ge({
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
    const o = wt(c, "modelValue"), m = wt(c, "type"), y = c, I = _, f = X(1);
    ln(o, (d) => {
      d && (f.value = 1);
    });
    const S = K(() => y.groups.filter((d) => d.types.length));
    function b(d) {
      m.value = d, f.value = 2;
    }
    return (d, g) => (p(), $e(h(yi), {
      modelValue: o.value,
      "onUpdate:modelValue": g[4] || (g[4] = (V) => o.value = V),
      title: c.title,
      size: "lg",
      onCancel: g[5] || (g[5] = (V) => o.value = !1)
    }, {
      actions: te(() => [
        f.value === 2 ? (p(), $e(h(ye), {
          key: 0,
          intent: "quiet",
          onClick: g[1] || (g[1] = (V) => f.value = 1)
        }, {
          default: te(() => [...g[7] || (g[7] = [
            ue("Zurück", -1)
          ])]),
          _: 1
        })) : ee("", !0),
        E(h(ye), {
          intent: "quiet",
          onClick: g[2] || (g[2] = (V) => o.value = !1)
        }, {
          default: te(() => [...g[8] || (g[8] = [
            ue("Abbrechen", -1)
          ])]),
          _: 1
        }),
        f.value === 2 ? (p(), $e(h(ye), {
          key: 1,
          intent: "primary",
          disabled: !c.ready,
          onClick: g[3] || (g[3] = (V) => I("create"))
        }, {
          default: te(() => [
            ue(N(c.createLabel ?? "Anlegen"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : ee("", !0)
      ]),
      default: te(() => [
        f.value === 1 ? (p(), x("div", Eb, [
          s("p", Vb, N(c.lead), 1),
          (p(!0), x(he, null, We(S.value, (V) => (p(), x("section", {
            key: V.label,
            class: "pick__group"
          }, [
            S.value.length > 1 ? (p(), x("h3", Tb, N(V.label), 1)) : ee("", !0),
            s("ul", Ob, [
              (p(!0), x(he, null, We(V.types, (D) => (p(), x("li", { key: D }, [
                s("button", {
                  type: "button",
                  class: Ve(["tile", { "tile--on": m.value === D }]),
                  onClick: (U) => b(D)
                }, [
                  s("span", Db, [
                    E(h(Ne), {
                      name: c.iconOf(D),
                      size: "sm",
                      class: "tile__icon"
                    }, null, 8, ["name"]),
                    s("span", Bb, N(D), 1),
                    m.value === D ? (p(), $e(h(Ne), {
                      key: 0,
                      name: "check",
                      size: "sm",
                      class: "tile__check"
                    })) : ee("", !0)
                  ]),
                  c.summaryOf(D) ? (p(), x("span", Wb, N(c.summaryOf(D)), 1)) : ee("", !0)
                ], 10, Lb)
              ]))), 128))
            ])
          ]))), 128))
        ])) : (p(), x("div", Pb, [
          s("header", Mb, [
            s("span", Ub, [
              E(h(Ne), {
                name: c.iconOf(m.value),
                size: "lg"
              }, null, 8, ["name"])
            ]),
            s("div", Nb, [
              s("span", Fb, N(m.value), 1),
              c.summaryOf(m.value) ? (p(), x("p", zb, N(c.summaryOf(m.value)), 1)) : ee("", !0)
            ]),
            E(h(ye), {
              intent: "quiet",
              size: "sm",
              onClick: g[0] || (g[0] = (V) => f.value = 1)
            }, {
              default: te(() => [...g[6] || (g[6] = [
                ue("Anderer Typ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", qb, [
            eu(d.$slots, "setup", {}, void 0, !0)
          ])
        ]))
      ]),
      _: 3
    }, 8, ["modelValue", "title"]));
  }
}), Iu = /* @__PURE__ */ Ke(Gb, [["__scopeId", "data-v-6d945def"]]), Hb = {
  key: 0,
  class: "model__none"
}, Kb = {
  key: 1,
  class: "model__none"
}, Yb = /* @__PURE__ */ Ge({
  __name: "ModelFields",
  props: {
    doc: {},
    config: {},
    omit: { default: () => [] }
  },
  setup(c) {
    const _ = c, o = /* @__PURE__ */ new Set(["name", "type", "uid"]), m = K(
      () => (_.doc?.features ?? []).filter(
        (f) => !o.has(f.name) && !_.omit.includes(f.name) && !f.many
      )
    );
    function y(f) {
      const S = f.name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/_/g, " ");
      return S.charAt(0).toUpperCase() + S.slice(1);
    }
    function I(f, S) {
      _.config[f.name] = S === "" ? void 0 : Number(S);
    }
    return (f, S) => c.doc ? m.value.length ? (p(!0), x(he, { key: 2 }, We(m.value, (b) => (p(), x(he, {
      key: b.name
    }, [
      b.type === "boolean" ? (p(), $e(h(iu), {
        key: 0,
        label: y(b),
        hint: b.documentation,
        stacked: ""
      }, {
        default: te(() => [
          E(h(la), {
            "model-value": !!c.config[b.name],
            "onUpdate:modelValue": (d) => c.config[b.name] = d
          }, null, 8, ["model-value", "onUpdate:modelValue"])
        ]),
        _: 2
      }, 1032, ["label", "hint"])) : b.type === "number" ? (p(), $e(h(nn), {
        key: 1,
        "model-value": c.config[b.name] ?? "",
        label: y(b),
        hint: b.documentation,
        required: !b.optional,
        type: "number",
        stacked: "",
        "onUpdate:modelValue": (d) => I(b, d)
      }, null, 8, ["model-value", "label", "hint", "required", "onUpdate:modelValue"])) : (p(), $e(h(nn), {
        key: 2,
        "model-value": c.config[b.name] ?? "",
        label: y(b),
        hint: b.documentation,
        required: !b.optional,
        type: /url|uri|endpoint/i.test(b.name) ? "url" : "text",
        stacked: "",
        "onUpdate:modelValue": (d) => c.config[b.name] = d
      }, null, 8, ["model-value", "label", "hint", "required", "type", "onUpdate:modelValue"]))
    ], 64))), 128)) : (p(), x("p", Kb, " Dieser Typ braucht außer dem Namen nichts weiter. ")) : (p(), x("p", Hb, " Dieser Typ bringt kein Modell mit — die Felder füllst du nach dem Anlegen im Editor aus. "));
  }
}), Au = /* @__PURE__ */ Ke(Yb, [["__scopeId", "data-v-deac0807"]]), Zb = { class: "tags" }, Jb = {
  key: 0,
  class: "tags__held"
}, Xb = {
  key: 1,
  class: "tags__offer"
}, Qb = ["onMousedown"], jb = /* @__PURE__ */ Ge({
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
    const _ = wt(c, "modelValue"), o = c, m = X(""), y = K(() => {
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
    function S(b) {
      if (b.key === "Enter" || b.key === ",") {
        b.preventDefault(), I(m.value);
        return;
      }
      b.key === "Backspace" && !m.value && _.value.length && (_.value = _.value.slice(0, -1));
    }
    return (b, d) => (p(), $e(h(iu), {
      label: c.label,
      hint: c.hint,
      stacked: ""
    }, {
      default: te(() => [
        s("div", Zb, [
          _.value.length ? (p(), x("div", Jb, [
            (p(!0), x(he, null, We(_.value, (g) => (p(), $e(h(Vt), {
              key: g,
              tone: "accent",
              removable: "",
              onRemove: (V) => f(g)
            }, {
              default: te(() => [
                ue(N(g), 1)
              ]),
              _: 2
            }, 1032, ["onRemove"]))), 128))
          ])) : ee("", !0),
          E(h(nn), {
            modelValue: m.value,
            "onUpdate:modelValue": d[0] || (d[0] = (g) => m.value = g),
            placeholder: "Wort eingeben, Enter",
            stacked: "",
            onKeydown: S,
            onBlur: d[1] || (d[1] = (g) => I(m.value))
          }, null, 8, ["modelValue"]),
          y.value.length ? (p(), x("div", Xb, [
            (p(!0), x(he, null, We(y.value, (g) => (p(), x("button", {
              key: g,
              type: "button",
              class: "tags__suggestion",
              onMousedown: an((V) => I(g), ["prevent"])
            }, N(g), 41, Qb))), 128))
          ])) : ee("", !0)
        ])
      ]),
      _: 1
    }, 8, ["label", "hint"]));
  }
}), Ei = /* @__PURE__ */ Ke(jb, [["__scopeId", "data-v-b6b361a8"]]), e0 = /* @__PURE__ */ Ge({
  __name: "NewConnectionDialog",
  props: {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ jn(["created"], ["update:modelValue"]),
  setup(c, { emit: _ }) {
    const o = wt(c, "modelValue"), m = _, y = xe(Ai), I = xe(Nn), f = vn(I, (ne) => ne.connections), S = X(""), b = X(""), d = X(""), g = X([]), V = X({}), D = K(() => [
      { label: "Verbindungstypen", types: y.registeredConnections }
    ]), U = (ne) => bi(y.getConnectionIdentifiers(ne)?.Model)?.documentation, z = (ne) => y.getConnectionIdentifiers(ne)?.icon ?? "link", q = K(
      () => S.value ? bi(y.getConnectionIdentifiers(S.value)?.Model) : void 0
    ), O = K(() => {
      const ne = /* @__PURE__ */ new Set();
      for (const B of f.value)
        for (const Y of B.tags ?? []) ne.add(Y);
      return [...ne].sort();
    });
    ln(S, () => {
      V.value = {};
    }), ln(o, (ne) => {
      ne && (S.value = "", b.value = "", d.value = "", g.value = [], V.value = {});
    });
    const C = K(
      () => (q.value?.features ?? []).filter((ne) => !ne.optional && !["name", "type", "uid"].includes(ne.name)).filter((ne) => {
        const B = V.value[ne.name];
        return B == null || B === "";
      })
    ), T = K(() => !!S.value && !!b.value.trim() && !C.value.length);
    function ie() {
      if (!T.value) return;
      const ne = y.createConnection(S.value, { ...V.value });
      ne.name = b.value.trim(), d.value.trim() && (ne.icon = d.value.trim());
      for (const B of g.value) ne.tags.add(B);
      try {
        y.saveConnection(ne);
      } catch (B) {
        console.warn(`${ne.uid} is not live yet:`, B);
      }
      o.value = !1, m("created", ne.uid);
    }
    return (ne, B) => (p(), $e(Iu, {
      modelValue: o.value,
      "onUpdate:modelValue": B[3] || (B[3] = (Y) => o.value = Y),
      type: S.value,
      "onUpdate:type": B[4] || (B[4] = (Y) => S.value = Y),
      title: "Verbindung anlegen",
      lead: "Womit soll gesprochen werden? Die Beschreibungen stammen aus den Modellen der Typen.",
      groups: D.value,
      "summary-of": U,
      "icon-of": z,
      ready: T.value,
      onCreate: ie
    }, {
      setup: te(() => [
        E(h(nn), {
          modelValue: b.value,
          "onUpdate:modelValue": B[0] || (B[0] = (Y) => b.value = Y),
          label: "Name",
          placeholder: "Wofür diese Verbindung steht",
          hint: "Unter diesem Namen wählst du die Verbindung später aus.",
          stacked: "",
          required: ""
        }, null, 8, ["modelValue"]),
        E(h(Ci), {
          modelValue: d.value,
          "onUpdate:modelValue": B[1] || (B[1] = (Y) => d.value = Y),
          label: "Symbol",
          fallback: z(S.value),
          hint: "Ohne eigenes Symbol steht hier das des Typs."
        }, null, 8, ["modelValue", "fallback"]),
        E(Ei, {
          modelValue: g.value,
          "onUpdate:modelValue": B[2] || (B[2] = (Y) => g.value = Y),
          label: "Schlagworte",
          hint: "Wofür diese Verbindung da ist — danach lässt sich später suchen.",
          known: O.value
        }, null, 8, ["modelValue", "known"]),
        E(Au, {
          doc: q.value,
          config: V.value
        }, null, 8, ["doc", "config"])
      ]),
      _: 1
    }, 8, ["modelValue", "type", "groups", "ready"]));
  }
}), n0 = {
  key: 0,
  class: "note note--warn"
}, t0 = {
  key: 0,
  class: "note"
}, r0 = /* @__PURE__ */ Ge({
  __name: "NewDatasourceDialog",
  props: /* @__PURE__ */ jn({
    forConnection: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ jn(["created"], ["update:modelValue"]),
  setup(c, { emit: _ }) {
    const o = wt(c, "modelValue"), m = c, y = _, I = xe(Ri), f = xe(Nn), S = vn(f, (ce) => ce.connections), b = vn(f, (ce) => ce.datasources), d = X(""), g = X(""), V = X(""), D = X([]), U = X(void 0), z = X({}), q = K(() => I.registeredDatasources), O = (ce) => I.getDatasourceIdentifiers(ce)?.kind, C = K(() => [
      {
        label: "Aus einer Verbindung lesen",
        types: q.value.filter((ce) => O(ce) !== "composer")
      },
      {
        label: "Aus vorhandenen Datenquellen zusammensetzen",
        types: q.value.filter((ce) => O(ce) === "composer")
      }
    ]), T = (ce) => bi(I.getDatasourceIdentifiers(ce)?.Model)?.documentation, ie = (ce) => I.getDatasourceIdentifiers(ce)?.icon ?? "database", ne = K(
      () => d.value ? bi(I.getDatasourceIdentifiers(d.value)?.Model) : void 0
    ), B = K(() => {
      const ce = /* @__PURE__ */ new Set();
      for (const fe of b.value)
        for (const oe of fe.tags ?? []) ce.add(oe);
      return [...ce].sort();
    }), Y = K(
      () => (ne.value?.features ?? []).some((ce) => ce.name === "connection")
    ), me = K(() => {
      const ce = new Set(I.getDatasourceIdentifiers(d.value)?.connections ?? []);
      return S.value.map((fe) => ({
        label: fe.name || fe.uid,
        value: fe.uid,
        group: ce.size === 0 ? "Verbindungen" : ce.has(fe.type) ? "Passend zum Typ" : "Weitere"
      }));
    }), Be = K(
      () => me.value.length > 0 && !me.value.some((ce) => ce.group === "Passend zum Typ") && (I.getDatasourceIdentifiers(d.value)?.connections ?? []).length > 0
    );
    ln(d, () => {
      z.value = {};
    }), ln(o, (ce) => {
      ce && (d.value = "", g.value = "", V.value = "", D.value = [], U.value = m.forConnection, z.value = {});
    });
    const tn = K(() => {
      const ce = (ne.value?.features ?? []).filter((fe) => !fe.optional && !["name", "type", "uid", "connection"].includes(fe.name)).filter((fe) => {
        const oe = z.value[fe.name];
        return oe == null || oe === "";
      }).map((fe) => fe.name);
      return Y.value && !U.value && ce.push("connection"), ce;
    }), Pe = K(() => !!d.value && !!g.value.trim() && !tn.value.length);
    function rn() {
      if (!Pe.value) return;
      const ce = { ...z.value };
      Y.value && (ce.connection = U.value);
      const fe = I.createDatasource(d.value, ce);
      fe.name = g.value.trim(), V.value.trim() && (fe.icon = V.value.trim());
      for (const oe of D.value) fe.tags.add(oe);
      fe.connection = S.value.find((oe) => oe.uid === U.value);
      try {
        I.saveDatasource(fe);
      } catch (oe) {
        console.warn(`${fe.uid} is not live yet:`, oe);
      }
      o.value = !1, y("created", fe.uid);
    }
    return (ce, fe) => (p(), $e(Iu, {
      modelValue: o.value,
      "onUpdate:modelValue": fe[4] || (fe[4] = (oe) => o.value = oe),
      type: d.value,
      "onUpdate:type": fe[5] || (fe[5] = (oe) => d.value = oe),
      title: "Datenquelle anlegen",
      lead: "Was für Daten sollen gelesen werden? Die Beschreibungen stammen aus den Modellen der Typen.",
      groups: C.value,
      "summary-of": T,
      "icon-of": ie,
      ready: Pe.value,
      onCreate: rn
    }, {
      setup: te(() => [
        E(h(nn), {
          modelValue: g.value,
          "onUpdate:modelValue": fe[0] || (fe[0] = (oe) => g.value = oe),
          label: "Name",
          placeholder: "Wofür diese Datenquelle steht",
          hint: "Unter diesem Namen wählst du die Datenquelle im Widget aus.",
          stacked: "",
          required: ""
        }, null, 8, ["modelValue"]),
        Y.value ? (p(), x(he, { key: 0 }, [
          me.value.length ? (p(), x(he, { key: 1 }, [
            Be.value ? (p(), x("p", t0, " Keine der vorhandenen Verbindungen ist von diesem Typ vorgesehen. Du kannst trotzdem eine wählen — die Angabe ist ein Hinweis, keine Regel. ")) : ee("", !0),
            E(h(Un), {
              modelValue: U.value,
              "onUpdate:modelValue": fe[1] || (fe[1] = (oe) => U.value = oe),
              label: "Verbindung",
              options: me.value,
              "value-key": "value",
              "label-key": "label",
              "group-key": "group",
              placeholder: "Verbindung wählen",
              hint: "Der Endpunkt, aus dem diese Quelle liest.",
              stacked: "",
              required: ""
            }, null, 8, ["modelValue", "options"])
          ], 64)) : (p(), x("p", n0, " Es gibt noch keine Verbindung. Lege zuerst eine an — ohne sie hat die Datenquelle nichts, woraus sie lesen kann. "))
        ], 64)) : ee("", !0),
        E(h(Ci), {
          modelValue: V.value,
          "onUpdate:modelValue": fe[2] || (fe[2] = (oe) => V.value = oe),
          label: "Symbol",
          fallback: ie(d.value),
          hint: "Ohne eigenes Symbol steht hier das des Typs."
        }, null, 8, ["modelValue", "fallback"]),
        E(Ei, {
          modelValue: D.value,
          "onUpdate:modelValue": fe[3] || (fe[3] = (oe) => D.value = oe),
          label: "Schlagworte",
          hint: "Wofür diese Datenquelle da ist — danach lässt sich später suchen.",
          known: B.value
        }, null, 8, ["modelValue", "known"]),
        E(Au, {
          doc: ne.value,
          config: z.value,
          omit: ["connection"]
        }, null, 8, ["doc", "config"])
      ]),
      _: 1
    }, 8, ["modelValue", "type", "groups", "ready"]));
  }
}), i0 = /* @__PURE__ */ Ke(r0, [["__scopeId", "data-v-585727e2"]]), o0 = ["onClick"], a0 = /* @__PURE__ */ Ge({
  __name: "TreeMenu",
  props: {
    at: {},
    items: {}
  },
  emits: ["choose", "close"],
  setup(c, { emit: _ }) {
    const o = c, m = _, y = X(), I = X({ x: 0, y: 0 }), f = K(() => !!o.at && o.items.length > 0);
    ln(
      () => o.at,
      async (b) => {
        if (!b) return;
        I.value = { x: b.x, y: b.y }, await Sr();
        const d = y.value?.getBoundingClientRect();
        if (!d) return;
        const g = 8;
        I.value = {
          x: Math.min(b.x, window.innerWidth - d.width - g),
          y: Math.min(b.y, window.innerHeight - d.height - g)
        };
      }
    );
    function S(b) {
      b.key === "Escape" && m("close");
    }
    return ln(f, (b) => {
      b ? (window.addEventListener("keydown", S), window.addEventListener("scroll", () => m("close"), { once: !0, capture: !0 })) : window.removeEventListener("keydown", S);
    }), Si(() => window.removeEventListener("keydown", S)), (b, d) => (p(), $e(aa, { to: "body" }, [
      f.value ? (p(), x(he, { key: 0 }, [
        s("div", {
          class: "menu__catch",
          onClick: d[0] || (d[0] = (g) => m("close")),
          onContextmenu: d[1] || (d[1] = an((g) => m("close"), ["prevent"]))
        }, null, 32),
        s("ul", {
          ref_key: "menu",
          ref: y,
          class: "menu",
          role: "menu",
          style: Ot({ left: `${I.value.x}px`, top: `${I.value.y}px` })
        }, [
          (p(!0), x(he, null, We(c.items, (g) => (p(), x("li", {
            key: g.id,
            class: Ve({ menu__sep: g.separated })
          }, [
            s("button", {
              type: "button",
              role: "menuitem",
              class: Ve(["menu__item", { "menu__item--danger": g.danger }]),
              onClick: (V) => m("choose", g.id)
            }, [
              g.icon ? (p(), $e(h(Ne), {
                key: 0,
                name: g.icon,
                size: "sm"
              }, null, 8, ["name"])) : ee("", !0),
              s("span", null, N(g.label), 1)
            ], 10, o0)
          ], 2))), 128))
        ], 4)
      ], 64)) : ee("", !0)
    ]));
  }
}), l0 = /* @__PURE__ */ Ke(a0, [["__scopeId", "data-v-3e59dfe4"]]), s0 = { class: "tree" }, u0 = { class: "tree__head" }, d0 = { class: "tree__search" }, c0 = {
  key: 0,
  class: "tree__empty"
}, f0 = {
  key: 1,
  class: "tree__list"
}, p0 = ["onContextmenu"], g0 = ["title", "onClick"], v0 = ["disabled", "onClick"], h0 = { class: "row__name" }, m0 = {
  key: 0,
  class: "row__what"
}, _0 = {
  key: 1,
  class: "row__tag row__tag--more"
}, b0 = { class: "row__what" }, y0 = {
  key: 0,
  class: "tree__sources"
}, w0 = ["onContextmenu"], k0 = ["onClick"], x0 = { class: "row__name" }, S0 = { class: "row__what" }, C0 = {
  key: 0,
  class: "row__tag row__tag--more"
}, $0 = {
  key: 1,
  class: "row__usage"
}, I0 = {
  key: 0,
  class: "tree__none"
}, A0 = { class: "confirm__title" }, R0 = { class: "confirm__text" }, E0 = {
  key: 0,
  class: "confirm__text confirm__text--warn"
}, V0 = "\0composed", Zt = 2, T0 = /* @__PURE__ */ Ge({
  __name: "DataTree",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ jn(["findEndpoints", "view"], ["update:modelValue"]),
  setup(c, { emit: _ }) {
    const o = wt(c, "modelValue"), m = xe(Ai), y = xe(Nn), I = vn(y, (Z) => Z.connections), f = xe(Ri), S = vn(y, (Z) => Z.datasources), { usageByDatasource: b, usageLabel: d } = $u(), g = _, V = X(""), D = X(/* @__PURE__ */ new Set());
    function U(Z) {
      return !!Z && f.getDatasourceIdentifiers(Z)?.kind === "composer";
    }
    function z(Z, j) {
      if (Z.icon) return Z.icon;
      const H = Z.type;
      return (j === "connection" ? m.getConnectionIdentifiers(H)?.icon : f.getDatasourceIdentifiers(H)?.icon) ?? (j === "connection" ? "link" : "database");
    }
    function q(Z) {
      const j = Z.tags;
      return j ? Array.isArray(j) ? j : typeof j.toArray == "function" ? j.toArray() : [...j] : [];
    }
    const O = K(() => {
      const Z = b(), j = V.value.trim().toLowerCase(), H = (...M) => !j || M.some((_e) => (_e ?? "").toLowerCase().includes(j)), J = (M) => S.value.filter((_e) => _e.connection?.uid === M).filter((_e) => H(_e.name, _e.type, _e.uid, ...q(_e))).map((_e) => ({
        uid: _e.uid,
        name: _e.name,
        type: _e.type,
        usage: d(Z[_e.uid] ?? { boards: 0, widgets: 0 }),
        icon: z(_e, "source"),
        tags: q(_e)
      })), se = I.value.map((M) => ({
        /* A connection just created has no type yet, and the row says so by
           showing none - the model has every feature optional for that reason. */
        uid: M.uid ?? "",
        name: M.name ?? "",
        type: M.type ?? "",
        orphan: !1,
        sources: J(M.uid),
        /* A connection stays visible while its own name matches, even with no
           source under it - otherwise searching would hide where to add one. */
        itself: H(M.name, M.type, M.uid, ...q(M)),
        icon: z(M, "connection"),
        tags: q(M)
      })), Fe = new Set(I.value.map((M) => M.uid)), et = (M) => ({
        uid: M.uid,
        name: M.name,
        type: M.type,
        usage: d(Z[M.uid] ?? { boards: 0, widgets: 0 }),
        icon: z(M, "source"),
        tags: q(M)
      }), En = S.value.filter((M) => !M.connection || !Fe.has(M.connection.uid)).filter((M) => H(M.name, M.type, M.uid, ...q(M))), G = En.filter((M) => U(M.type)).map(et), $ = En.filter((M) => !U(M.type)).map(et), A = se.filter((M) => M.itself || M.sources.length);
      return G.length && A.push({
        uid: V0,
        name: "Zusammengesetzt",
        type: "",
        orphan: !0,
        sources: G,
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
    }), C = (Z) => !D.value.has(Z);
    function T(Z) {
      const j = new Set(D.value);
      j.has(Z) ? j.delete(Z) : j.add(Z), D.value = j;
    }
    const ie = (Z, j) => o.value?.type === Z && o.value?.itemId === j;
    function ne(Z, j) {
      o.value = { type: Z, itemId: j };
    }
    const B = X(!1), Y = X(!1), me = X(void 0);
    function Be(Z) {
      ne("Connection", Z);
    }
    function tn(Z) {
      ne("DataSource", Z);
    }
    const Pe = X(void 0), rn = X({ what: "nothing" }), ce = K(() => {
      const Z = rn.value;
      return Z.what === "connection" ? [
        { id: "edit", label: "Bearbeiten", icon: "edit" },
        { id: "add-source", label: "Datenquelle hier anlegen", icon: "add" },
        { id: "remove", label: "Verbindung löschen", icon: "delete", danger: !0, separated: !0 }
      ] : Z.what === "source" ? [
        { id: "edit", label: "Bearbeiten", icon: "edit" },
        { id: "preview", label: "Daten ansehen", icon: "table" },
        { id: "remove", label: "Datenquelle löschen", icon: "delete", danger: !0, separated: !0 }
      ] : [
        { id: "new-connection", label: "Verbindung anlegen", icon: "add_link" },
        { id: "new-source", label: "Datenquelle anlegen", icon: "add" }
      ];
    });
    function fe(Z, j) {
      rn.value = j, Pe.value = { x: Z.clientX, y: Z.clientY };
    }
    function oe() {
      Pe.value = void 0;
    }
    function de(Z) {
      const j = rn.value;
      if (oe(), Z === "new-connection") return void (B.value = !0);
      if (Z === "new-source") return void (Y.value = !0);
      if (j.what === "connection") {
        Z === "edit" && ne("Connection", j.uid), Z === "add-source" && (ne("Connection", j.uid), me.value = j.uid, Y.value = !0), Z === "remove" && we("Connection", j.uid);
        return;
      }
      j.what === "source" && ((Z === "edit" || Z === "preview") && (ne("DataSource", j.uid), g("view", Z === "preview" ? "preview" : "settings")), Z === "remove" && we("DataSource", j.uid));
    }
    const ae = X(void 0);
    function we(Z, j) {
      ae.value = { type: Z, itemId: j };
    }
    function Ye() {
      const Z = ae.value;
      Z && (Z.type === "Connection" ? m.removeConnection(Z.itemId) : f.removeDatasource(Z.itemId), ie(Z.type, Z.itemId) && (o.value = void 0), ae.value = void 0);
    }
    const sn = K(() => {
      const Z = ae.value;
      return Z ? (Z.type === "Connection" ? I.value.find((H) => H.uid === Z.itemId) : S.value.find((H) => H.uid === Z.itemId))?.name ?? Z.itemId : "";
    }), Qe = K(() => {
      const Z = ae.value;
      return !Z || Z.type !== "DataSource" ? "" : d(b()[Z.itemId] ?? { boards: 0, widgets: 0 });
    });
    return (Z, j) => (p(), x(he, null, [
      s("section", s0, [
        s("header", u0, [
          j[10] || (j[10] = s("h2", { class: "tree__title" }, "Verbindungen & Daten", -1)),
          E(h(ye), {
            intent: "quiet",
            size: "sm",
            title: "Verbindung anlegen",
            onClick: j[0] || (j[0] = (H) => B.value = !0)
          }, {
            default: te(() => [
              E(h(Ne), {
                name: "add_link",
                size: "sm"
              })
            ]),
            _: 1
          }),
          E(h(ye), {
            intent: "quiet",
            size: "sm",
            title: "Datenquelle anlegen",
            onClick: j[1] || (j[1] = (H) => {
              me.value = void 0, Y.value = !0;
            })
          }, {
            default: te(() => [
              E(h(Ne), {
                name: "add",
                size: "sm"
              })
            ]),
            _: 1
          }),
          E(h(ye), {
            intent: "quiet",
            size: "sm",
            title: "Endpunkte suchen",
            onClick: j[2] || (j[2] = (H) => g("findEndpoints"))
          }, {
            default: te(() => [
              E(h(Ne), {
                name: "travel_explore",
                size: "sm"
              })
            ]),
            _: 1
          })
        ]),
        s("div", d0, [
          E(h(nn), {
            modelValue: V.value,
            "onUpdate:modelValue": j[3] || (j[3] = (H) => V.value = H),
            type: "search",
            placeholder: "Suchen…",
            stacked: ""
          }, null, 8, ["modelValue"])
        ]),
        s("div", {
          class: "tree__body",
          onContextmenu: j[4] || (j[4] = an((H) => fe(H, { what: "nothing" }), ["prevent"]))
        }, [
          O.value.length ? (p(), x("ul", f0, [
            (p(!0), x(he, null, We(O.value, (H) => (p(), x("li", {
              key: H.uid || "loose"
            }, [
              s("div", {
                class: Ve(["row", "row--connection", { "row--on": ie("Connection", H.uid) }]),
                onContextmenu: an((J) => fe(
                  J,
                  H.orphan ? { what: "nothing" } : { what: "connection", uid: H.uid, name: H.name }
                ), ["prevent", "stop"])
              }, [
                s("button", {
                  type: "button",
                  class: "row__twist",
                  title: C(H.uid) ? "Zuklappen" : "Aufklappen",
                  onClick: (J) => T(H.uid)
                }, [
                  E(h(Ne), {
                    name: C(H.uid) ? "expand_more" : "chevron_right",
                    size: "sm"
                  }, null, 8, ["name"])
                ], 8, g0),
                s("button", {
                  type: "button",
                  class: "row__body",
                  disabled: H.orphan,
                  onClick: (J) => !H.orphan && ne("Connection", H.uid)
                }, [
                  E(h(Ne), {
                    name: H.icon ?? "link",
                    size: "sm",
                    class: "row__icon"
                  }, null, 8, ["name"]),
                  s("span", h0, N(H.name), 1),
                  H.type ? (p(), x("span", m0, N(H.type), 1)) : ee("", !0),
                  (p(!0), x(he, null, We((H.tags ?? []).slice(0, Zt), (J) => (p(), x("span", {
                    key: J,
                    class: "row__tag"
                  }, N(J), 1))), 128)),
                  (H.tags?.length ?? 0) > Zt ? (p(), x("span", _0, " +" + N((H.tags?.length ?? 0) - Zt), 1)) : ee("", !0),
                  s("span", b0, N(H.sources.length), 1)
                ], 8, v0),
                H.orphan ? ee("", !0) : (p(), $e(h(ye), {
                  key: 0,
                  intent: "quiet",
                  size: "sm",
                  title: "Verbindung löschen",
                  onClick: an((J) => we("Connection", H.uid), ["stop"])
                }, {
                  default: te(() => [
                    E(h(Ne), {
                      name: "delete",
                      size: "sm"
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"]))
              ], 42, p0),
              C(H.uid) ? (p(), x("ul", y0, [
                (p(!0), x(he, null, We(H.sources, (J) => (p(), x("li", {
                  key: J.uid
                }, [
                  s("div", {
                    class: Ve(["row", "row--source", { "row--on": ie("DataSource", J.uid) }]),
                    onContextmenu: an((se) => fe(se, { what: "source", uid: J.uid, name: J.name }), ["prevent", "stop"])
                  }, [
                    j[11] || (j[11] = s("span", {
                      class: "row__twist row__twist--none",
                      "aria-hidden": "true"
                    }, null, -1)),
                    s("button", {
                      type: "button",
                      class: "row__body",
                      onClick: (se) => ne("DataSource", J.uid)
                    }, [
                      E(h(Ne), {
                        name: J.icon,
                        size: "sm",
                        class: "row__icon"
                      }, null, 8, ["name"]),
                      s("span", x0, N(J.name), 1),
                      s("span", S0, N(J.type), 1),
                      (p(!0), x(he, null, We(J.tags.slice(0, Zt), (se) => (p(), x("span", {
                        key: se,
                        class: "row__tag"
                      }, N(se), 1))), 128)),
                      J.tags.length > Zt ? (p(), x("span", C0, " +" + N(J.tags.length - Zt), 1)) : ee("", !0),
                      J.usage ? (p(), x("span", $0, N(J.usage), 1)) : ee("", !0)
                    ], 8, k0),
                    E(h(ye), {
                      intent: "quiet",
                      size: "sm",
                      title: "Datenquelle löschen",
                      onClick: an((se) => we("DataSource", J.uid), ["stop"])
                    }, {
                      default: te(() => [
                        E(h(Ne), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ], 42, w0)
                ]))), 128)),
                !H.sources.length && !H.orphan ? (p(), x("li", I0, " Keine Datenquelle an dieser Verbindung. ")) : ee("", !0)
              ])) : ee("", !0)
            ]))), 128))
          ])) : (p(), x("p", c0, [
            V.value ? (p(), x(he, { key: 0 }, [
              ue("Nichts gefunden.")
            ], 64)) : (p(), x(he, { key: 1 }, [
              ue("Noch keine Verbindung. Lege eine an, um Daten zu lesen.")
            ], 64))
          ]))
        ], 32)
      ]),
      E(l0, {
        at: Pe.value,
        items: ce.value,
        onChoose: de,
        onClose: oe
      }, null, 8, ["at", "items"]),
      E(e0, {
        modelValue: B.value,
        "onUpdate:modelValue": j[5] || (j[5] = (H) => B.value = H),
        onCreated: Be
      }, null, 8, ["modelValue"]),
      E(i0, {
        modelValue: Y.value,
        "onUpdate:modelValue": j[6] || (j[6] = (H) => Y.value = H),
        "for-connection": me.value,
        onCreated: tn
      }, null, 8, ["modelValue", "for-connection"]),
      E(h(yi), {
        "model-value": !!ae.value,
        size: "sm",
        "onUpdate:modelValue": j[8] || (j[8] = (H) => ae.value = void 0),
        onCancel: j[9] || (j[9] = (H) => ae.value = void 0)
      }, {
        header: te(() => [
          E(h(Ne), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          s("h2", A0, N(ae.value?.type === "Connection" ? "Verbindung löschen" : "Datenquelle löschen"), 1)
        ]),
        actions: te(() => [
          E(h(ye), {
            intent: "quiet",
            onClick: j[7] || (j[7] = (H) => ae.value = void 0)
          }, {
            default: te(() => [...j[12] || (j[12] = [
              ue("Abbrechen", -1)
            ])]),
            _: 1
          }),
          E(h(ye), {
            intent: "danger",
            onClick: Ye
          }, {
            default: te(() => [...j[13] || (j[13] = [
              ue("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: te(() => [
          s("p", R0, " „" + N(sn.value) + "“ wird entfernt. Das lässt sich nicht rückgängig machen. ", 1),
          Qe.value ? (p(), x("p", E0, " Verwendet in " + N(Qe.value) + " — die lesen danach ins Leere. ", 1)) : ee("", !0)
        ]),
        _: 1
      }, 8, ["model-value"])
    ], 64));
  }
}), O0 = /* @__PURE__ */ Ke(T0, [["__scopeId", "data-v-b599ea25"]]);
var _i = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var L0 = wr.exports, Xs;
function D0() {
  return Xs || (Xs = 1, (function(c, _) {
    (function() {
      var o, m = "4.17.21", y = 200, I = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", S = "Invalid `variable` option passed into `_.template`", b = "__lodash_hash_undefined__", d = 500, g = "__lodash_placeholder__", V = 1, D = 2, U = 4, z = 1, q = 2, O = 1, C = 2, T = 4, ie = 8, ne = 16, B = 32, Y = 64, me = 128, Be = 256, tn = 512, Pe = 30, rn = "...", ce = 800, fe = 16, oe = 1, de = 2, ae = 3, we = 1 / 0, Ye = 9007199254740991, sn = 17976931348623157e292, Qe = NaN, Z = 4294967295, j = Z - 1, H = Z >>> 1, J = [
        ["ary", me],
        ["bind", O],
        ["bindKey", C],
        ["curry", ie],
        ["curryRight", ne],
        ["flip", tn],
        ["partial", B],
        ["partialRight", Y],
        ["rearg", Be]
      ], se = "[object Arguments]", Fe = "[object Array]", et = "[object AsyncFunction]", En = "[object Boolean]", G = "[object Date]", $ = "[object DOMException]", A = "[object Error]", M = "[object Function]", _e = "[object GeneratorFunction]", Te = "[object Map]", Vn = "[object Number]", xn = "[object Null]", Fn = "[object Object]", fa = "[object Promise]", Ru = "[object Proxy]", nr = "[object RegExp]", zn = "[object Set]", tr = "[object String]", $r = "[object Symbol]", Eu = "[object Undefined]", rr = "[object WeakMap]", Vu = "[object WeakSet]", ir = "[object ArrayBuffer]", Lt = "[object DataView]", Vi = "[object Float32Array]", Ti = "[object Float64Array]", Oi = "[object Int8Array]", Li = "[object Int16Array]", Di = "[object Int32Array]", Bi = "[object Uint8Array]", Wi = "[object Uint8ClampedArray]", Pi = "[object Uint16Array]", Mi = "[object Uint32Array]", Tu = /\b__p \+= '';/g, Ou = /\b(__p \+=) '' \+/g, Lu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, pa = /&(?:amp|lt|gt|quot|#39);/g, ga = /[&<>"']/g, Du = RegExp(pa.source), Bu = RegExp(ga.source), Wu = /<%-([\s\S]+?)%>/g, Pu = /<%([\s\S]+?)%>/g, va = /<%=([\s\S]+?)%>/g, Mu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Uu = /^\w*$/, Nu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ui = /[\\^$.*+?()[\]{}|]/g, Fu = RegExp(Ui.source), Ni = /^\s+/, zu = /\s/, qu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Gu = /\{\n\/\* \[wrapped with (.+)\] \*/, Hu = /,? & /, Ku = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Yu = /[()=,{}\[\]\/\s]/, Zu = /\\(\\)?/g, Ju = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ha = /\w*$/, Xu = /^[-+]0x[0-9a-f]+$/i, Qu = /^0b[01]+$/i, ju = /^\[object .+?Constructor\]$/, ed = /^0o[0-7]+$/i, nd = /^(?:0|[1-9]\d*)$/, td = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ir = /($^)/, rd = /['\n\r\u2028\u2029\\]/g, Ar = "\\ud800-\\udfff", id = "\\u0300-\\u036f", od = "\\ufe20-\\ufe2f", ad = "\\u20d0-\\u20ff", ma = id + od + ad, _a = "\\u2700-\\u27bf", ba = "a-z\\xdf-\\xf6\\xf8-\\xff", ld = "\\xac\\xb1\\xd7\\xf7", sd = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ud = "\\u2000-\\u206f", dd = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ya = "A-Z\\xc0-\\xd6\\xd8-\\xde", wa = "\\ufe0e\\ufe0f", ka = ld + sd + ud + dd, Fi = "['’]", cd = "[" + Ar + "]", xa = "[" + ka + "]", Rr = "[" + ma + "]", Sa = "\\d+", fd = "[" + _a + "]", Ca = "[" + ba + "]", $a = "[^" + Ar + ka + Sa + _a + ba + ya + "]", zi = "\\ud83c[\\udffb-\\udfff]", pd = "(?:" + Rr + "|" + zi + ")", Ia = "[^" + Ar + "]", qi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Gi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Dt = "[" + ya + "]", Aa = "\\u200d", Ra = "(?:" + Ca + "|" + $a + ")", gd = "(?:" + Dt + "|" + $a + ")", Ea = "(?:" + Fi + "(?:d|ll|m|re|s|t|ve))?", Va = "(?:" + Fi + "(?:D|LL|M|RE|S|T|VE))?", Ta = pd + "?", Oa = "[" + wa + "]?", vd = "(?:" + Aa + "(?:" + [Ia, qi, Gi].join("|") + ")" + Oa + Ta + ")*", hd = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", md = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", La = Oa + Ta + vd, _d = "(?:" + [fd, qi, Gi].join("|") + ")" + La, bd = "(?:" + [Ia + Rr + "?", Rr, qi, Gi, cd].join("|") + ")", yd = RegExp(Fi, "g"), wd = RegExp(Rr, "g"), Hi = RegExp(zi + "(?=" + zi + ")|" + bd + La, "g"), kd = RegExp([
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
      ze[Vi] = ze[Ti] = ze[Oi] = ze[Li] = ze[Di] = ze[Bi] = ze[Wi] = ze[Pi] = ze[Mi] = !0, ze[se] = ze[Fe] = ze[ir] = ze[En] = ze[Lt] = ze[G] = ze[A] = ze[M] = ze[Te] = ze[Vn] = ze[Fn] = ze[nr] = ze[zn] = ze[tr] = ze[rr] = !1;
      var Ue = {};
      Ue[se] = Ue[Fe] = Ue[ir] = Ue[Lt] = Ue[En] = Ue[G] = Ue[Vi] = Ue[Ti] = Ue[Oi] = Ue[Li] = Ue[Di] = Ue[Te] = Ue[Vn] = Ue[Fn] = Ue[nr] = Ue[zn] = Ue[tr] = Ue[$r] = Ue[Bi] = Ue[Wi] = Ue[Pi] = Ue[Mi] = !0, Ue[A] = Ue[M] = Ue[rr] = !1;
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
      }, Vd = parseFloat, Td = parseInt, Da = typeof _i == "object" && _i && _i.Object === Object && _i, Od = typeof self == "object" && self && self.Object === Object && self, un = Da || Od || Function("return this")(), Ki = _ && !_.nodeType && _, kt = Ki && !0 && c && !c.nodeType && c, Ba = kt && kt.exports === Ki, Yi = Ba && Da.process, Tn = (function() {
        try {
          var w = kt && kt.require && kt.require("util").types;
          return w || Yi && Yi.binding && Yi.binding("util");
        } catch {
        }
      })(), Wa = Tn && Tn.isArrayBuffer, Pa = Tn && Tn.isDate, Ma = Tn && Tn.isMap, Ua = Tn && Tn.isRegExp, Na = Tn && Tn.isSet, Fa = Tn && Tn.isTypedArray;
      function Sn(w, L, R) {
        switch (R.length) {
          case 0:
            return w.call(L);
          case 1:
            return w.call(L, R[0]);
          case 2:
            return w.call(L, R[0], R[1]);
          case 3:
            return w.call(L, R[0], R[1], R[2]);
        }
        return w.apply(L, R);
      }
      function Ld(w, L, R, re) {
        for (var be = -1, Oe = w == null ? 0 : w.length; ++be < Oe; ) {
          var je = w[be];
          L(re, je, R(je), w);
        }
        return re;
      }
      function On(w, L) {
        for (var R = -1, re = w == null ? 0 : w.length; ++R < re && L(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function Dd(w, L) {
        for (var R = w == null ? 0 : w.length; R-- && L(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function za(w, L) {
        for (var R = -1, re = w == null ? 0 : w.length; ++R < re; )
          if (!L(w[R], R, w))
            return !1;
        return !0;
      }
      function ft(w, L) {
        for (var R = -1, re = w == null ? 0 : w.length, be = 0, Oe = []; ++R < re; ) {
          var je = w[R];
          L(je, R, w) && (Oe[be++] = je);
        }
        return Oe;
      }
      function Er(w, L) {
        var R = w == null ? 0 : w.length;
        return !!R && Bt(w, L, 0) > -1;
      }
      function Zi(w, L, R) {
        for (var re = -1, be = w == null ? 0 : w.length; ++re < be; )
          if (R(L, w[re]))
            return !0;
        return !1;
      }
      function qe(w, L) {
        for (var R = -1, re = w == null ? 0 : w.length, be = Array(re); ++R < re; )
          be[R] = L(w[R], R, w);
        return be;
      }
      function pt(w, L) {
        for (var R = -1, re = L.length, be = w.length; ++R < re; )
          w[be + R] = L[R];
        return w;
      }
      function Ji(w, L, R, re) {
        var be = -1, Oe = w == null ? 0 : w.length;
        for (re && Oe && (R = w[++be]); ++be < Oe; )
          R = L(R, w[be], be, w);
        return R;
      }
      function Bd(w, L, R, re) {
        var be = w == null ? 0 : w.length;
        for (re && be && (R = w[--be]); be--; )
          R = L(R, w[be], be, w);
        return R;
      }
      function Xi(w, L) {
        for (var R = -1, re = w == null ? 0 : w.length; ++R < re; )
          if (L(w[R], R, w))
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
      function qa(w, L, R) {
        var re;
        return R(w, function(be, Oe, je) {
          if (L(be, Oe, je))
            return re = Oe, !1;
        }), re;
      }
      function Vr(w, L, R, re) {
        for (var be = w.length, Oe = R + (re ? 1 : -1); re ? Oe-- : ++Oe < be; )
          if (L(w[Oe], Oe, w))
            return Oe;
        return -1;
      }
      function Bt(w, L, R) {
        return L === L ? Xd(w, L, R) : Vr(w, Ga, R);
      }
      function Ud(w, L, R, re) {
        for (var be = R - 1, Oe = w.length; ++be < Oe; )
          if (re(w[be], L))
            return be;
        return -1;
      }
      function Ga(w) {
        return w !== w;
      }
      function Ha(w, L) {
        var R = w == null ? 0 : w.length;
        return R ? eo(w, L) / R : Qe;
      }
      function Qi(w) {
        return function(L) {
          return L == null ? o : L[w];
        };
      }
      function ji(w) {
        return function(L) {
          return w == null ? o : w[L];
        };
      }
      function Ka(w, L, R, re, be) {
        return be(w, function(Oe, je, Me) {
          R = re ? (re = !1, Oe) : L(R, Oe, je, Me);
        }), R;
      }
      function Nd(w, L) {
        var R = w.length;
        for (w.sort(L); R--; )
          w[R] = w[R].value;
        return w;
      }
      function eo(w, L) {
        for (var R, re = -1, be = w.length; ++re < be; ) {
          var Oe = L(w[re]);
          Oe !== o && (R = R === o ? Oe : R + Oe);
        }
        return R;
      }
      function no(w, L) {
        for (var R = -1, re = Array(w); ++R < w; )
          re[R] = L(R);
        return re;
      }
      function Fd(w, L) {
        return qe(L, function(R) {
          return [R, w[R]];
        });
      }
      function Ya(w) {
        return w && w.slice(0, Qa(w) + 1).replace(Ni, "");
      }
      function Cn(w) {
        return function(L) {
          return w(L);
        };
      }
      function to(w, L) {
        return qe(L, function(R) {
          return w[R];
        });
      }
      function or(w, L) {
        return w.has(L);
      }
      function Za(w, L) {
        for (var R = -1, re = w.length; ++R < re && Bt(L, w[R], 0) > -1; )
          ;
        return R;
      }
      function Ja(w, L) {
        for (var R = w.length; R-- && Bt(L, w[R], 0) > -1; )
          ;
        return R;
      }
      function zd(w, L) {
        for (var R = w.length, re = 0; R--; )
          w[R] === L && ++re;
        return re;
      }
      var qd = ji(Id), Gd = ji(Ad);
      function Hd(w) {
        return "\\" + Ed[w];
      }
      function Kd(w, L) {
        return w == null ? o : w[L];
      }
      function Wt(w) {
        return xd.test(w);
      }
      function Yd(w) {
        return Sd.test(w);
      }
      function Zd(w) {
        for (var L, R = []; !(L = w.next()).done; )
          R.push(L.value);
        return R;
      }
      function ro(w) {
        var L = -1, R = Array(w.size);
        return w.forEach(function(re, be) {
          R[++L] = [be, re];
        }), R;
      }
      function Xa(w, L) {
        return function(R) {
          return w(L(R));
        };
      }
      function gt(w, L) {
        for (var R = -1, re = w.length, be = 0, Oe = []; ++R < re; ) {
          var je = w[R];
          (je === L || je === g) && (w[R] = g, Oe[be++] = R);
        }
        return Oe;
      }
      function Tr(w) {
        var L = -1, R = Array(w.size);
        return w.forEach(function(re) {
          R[++L] = re;
        }), R;
      }
      function Jd(w) {
        var L = -1, R = Array(w.size);
        return w.forEach(function(re) {
          R[++L] = [re, re];
        }), R;
      }
      function Xd(w, L, R) {
        for (var re = R - 1, be = w.length; ++re < be; )
          if (w[re] === L)
            return re;
        return -1;
      }
      function Qd(w, L, R) {
        for (var re = R + 1; re--; )
          if (w[re] === L)
            return re;
        return re;
      }
      function Pt(w) {
        return Wt(w) ? ec(w) : Wd(w);
      }
      function qn(w) {
        return Wt(w) ? nc(w) : Pd(w);
      }
      function Qa(w) {
        for (var L = w.length; L-- && zu.test(w.charAt(L)); )
          ;
        return L;
      }
      var jd = ji(Rd);
      function ec(w) {
        for (var L = Hi.lastIndex = 0; Hi.test(w); )
          ++L;
        return L;
      }
      function nc(w) {
        return w.match(Hi) || [];
      }
      function tc(w) {
        return w.match(kd) || [];
      }
      var rc = (function w(L) {
        L = L == null ? un : Mt.defaults(un.Object(), L, Mt.pick(un, Cd));
        var R = L.Array, re = L.Date, be = L.Error, Oe = L.Function, je = L.Math, Me = L.Object, io = L.RegExp, ic = L.String, Ln = L.TypeError, Or = R.prototype, oc = Oe.prototype, Ut = Me.prototype, Lr = L["__core-js_shared__"], Dr = oc.toString, De = Ut.hasOwnProperty, ac = 0, ja = (function() {
          var e = /[^.]+$/.exec(Lr && Lr.keys && Lr.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Br = Ut.toString, lc = Dr.call(Me), sc = un._, uc = io(
          "^" + Dr.call(De).replace(Ui, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Wr = Ba ? L.Buffer : o, vt = L.Symbol, Pr = L.Uint8Array, el = Wr ? Wr.allocUnsafe : o, Mr = Xa(Me.getPrototypeOf, Me), nl = Me.create, tl = Ut.propertyIsEnumerable, Ur = Or.splice, rl = vt ? vt.isConcatSpreadable : o, ar = vt ? vt.iterator : o, xt = vt ? vt.toStringTag : o, Nr = (function() {
          try {
            var e = At(Me, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), dc = L.clearTimeout !== un.clearTimeout && L.clearTimeout, cc = re && re.now !== un.Date.now && re.now, fc = L.setTimeout !== un.setTimeout && L.setTimeout, Fr = je.ceil, zr = je.floor, oo = Me.getOwnPropertySymbols, pc = Wr ? Wr.isBuffer : o, il = L.isFinite, gc = Or.join, vc = Xa(Me.keys, Me), en = je.max, pn = je.min, hc = re.now, mc = L.parseInt, ol = je.random, _c = Or.reverse, ao = At(L, "DataView"), lr = At(L, "Map"), lo = At(L, "Promise"), Nt = At(L, "Set"), sr = At(L, "WeakMap"), ur = At(Me, "create"), qr = sr && new sr(), Ft = {}, bc = Rt(ao), yc = Rt(lr), wc = Rt(lo), kc = Rt(Nt), xc = Rt(sr), Gr = vt ? vt.prototype : o, dr = Gr ? Gr.valueOf : o, al = Gr ? Gr.toString : o;
        function a(e) {
          if (Ze(e) && !ke(e) && !(e instanceof Re)) {
            if (e instanceof Dn)
              return e;
            if (De.call(e, "__wrapped__"))
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
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Z, this.__views__ = [];
        }
        function Sc() {
          var e = new Re(this.__wrapped__);
          return e.__actions__ = bn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = bn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = bn(this.__views__), e;
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
          var e = this.__wrapped__.value(), n = this.__dir__, t = ke(e), r = n < 0, i = t ? e.length : 0, l = Mf(0, i, this.__views__), u = l.start, v = l.end, k = v - u, W = r ? v : u - 1, P = this.__iteratees__, F = P.length, Q = 0, le = pn(k, this.__takeCount__);
          if (!t || !r && i == k && le == k)
            return El(e, this.__actions__);
          var ge = [];
          e:
            for (; k-- && Q < le; ) {
              W += n;
              for (var Ce = -1, ve = e[W]; ++Ce < F; ) {
                var Ae = P[Ce], Ee = Ae.iteratee, An = Ae.type, _n = Ee(ve);
                if (An == de)
                  ve = _n;
                else if (!_n) {
                  if (An == oe)
                    continue e;
                  break e;
                }
              }
              ge[Q++] = ve;
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
          return De.call(n, e) ? n[e] : o;
        }
        function Ec(e) {
          var n = this.__data__;
          return ur ? n[e] !== o : De.call(n, e);
        }
        function Vc(e, n) {
          var t = this.__data__;
          return this.size += this.has(e) ? 0 : 1, t[e] = ur && n === o ? b : n, this;
        }
        St.prototype.clear = Ic, St.prototype.delete = Ac, St.prototype.get = Rc, St.prototype.has = Ec, St.prototype.set = Vc;
        function nt(e) {
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
        nt.prototype.clear = Tc, nt.prototype.delete = Oc, nt.prototype.get = Lc, nt.prototype.has = Dc, nt.prototype.set = Bc;
        function tt(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function Wc() {
          this.size = 0, this.__data__ = {
            hash: new St(),
            map: new (lr || nt)(),
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
        tt.prototype.clear = Wc, tt.prototype.delete = Pc, tt.prototype.get = Mc, tt.prototype.has = Uc, tt.prototype.set = Nc;
        function Ct(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.__data__ = new tt(); ++n < t; )
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
          var n = this.__data__ = new nt(e);
          this.size = n.size;
        }
        function qc() {
          this.__data__ = new nt(), this.size = 0;
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
          if (t instanceof nt) {
            var r = t.__data__;
            if (!lr || r.length < y - 1)
              return r.push([e, n]), this.size = ++t.size, this;
            t = this.__data__ = new tt(r);
          }
          return t.set(e, n), this.size = t.size, this;
        }
        Gn.prototype.clear = qc, Gn.prototype.delete = Gc, Gn.prototype.get = Hc, Gn.prototype.has = Kc, Gn.prototype.set = Yc;
        function ll(e, n) {
          var t = ke(e), r = !t && Et(e), i = !t && !r && yt(e), l = !t && !r && !i && Kt(e), u = t || r || i || l, v = u ? no(e.length, ic) : [], k = v.length;
          for (var W in e)
            (n || De.call(e, W)) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
            (W == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            i && (W == "offset" || W == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            l && (W == "buffer" || W == "byteLength" || W == "byteOffset") || // Skip index properties.
            at(W, k))) && v.push(W);
          return v;
        }
        function sl(e) {
          var n = e.length;
          return n ? e[bo(0, n - 1)] : o;
        }
        function Zc(e, n) {
          return ai(bn(e), $t(n, 0, e.length));
        }
        function Jc(e) {
          return ai(bn(e));
        }
        function so(e, n, t) {
          (t !== o && !Hn(e[n], t) || t === o && !(n in e)) && rt(e, n, t);
        }
        function cr(e, n, t) {
          var r = e[n];
          (!(De.call(e, n) && Hn(r, t)) || t === o && !(n in e)) && rt(e, n, t);
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
          return e && Zn(n, wn(n), e);
        }
        function rt(e, n, t) {
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
          var u, v = n & V, k = n & D, W = n & U;
          if (t && (u = i ? t(e, r, i, l) : t(e)), u !== o)
            return u;
          if (!He(e))
            return e;
          var P = ke(e);
          if (P) {
            if (u = Nf(e), !v)
              return bn(e, u);
          } else {
            var F = gn(e), Q = F == M || F == _e;
            if (yt(e))
              return Ol(e, v);
            if (F == Fn || F == se || Q && !i) {
              if (u = k || Q ? {} : Ql(e), !v)
                return k ? Ef(e, Qc(u, e)) : Rf(e, ul(u, e));
            } else {
              if (!Ue[F])
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
          var ge = W ? k ? Eo : Ro : k ? wn : on, Ce = P ? o : ge(e);
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
          for (e = Me(e); r--; ) {
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
          t && (n = qe(n, Cn(t))), r ? (l = Zi, u = !1) : n.length >= y && (l = or, u = !1, n = new Ct(n));
          e:
            for (; ++i < v; ) {
              var P = e[i], F = t == null ? P : t(P);
              if (P = r || P !== 0 ? P : 0, u && F === F) {
                for (var Q = W; Q--; )
                  if (n[Q] === F)
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
            if (u != null && (v === o ? u === u && !In(u) : t(u, v)))
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
        function dn(e, n, t, r, i) {
          var l = -1, u = e.length;
          for (t || (t = qf), i || (i = []); ++l < u; ) {
            var v = e[l];
            n > 0 && t(v) ? n > 1 ? dn(v, n - 1, t, r, i) : pt(i, v) : r || (i[i.length] = v);
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
            return lt(e[t]);
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
        function hn(e) {
          return e == null ? e === o ? Eu : xn : xt && xt in Me(e) ? Pf(e) : Xf(e);
        }
        function po(e, n) {
          return e > n;
        }
        function tf(e, n) {
          return e != null && De.call(e, n);
        }
        function rf(e, n) {
          return e != null && n in Me(e);
        }
        function of(e, n, t) {
          return e >= pn(n, t) && e < en(n, t);
        }
        function go(e, n, t) {
          for (var r = t ? Zi : Er, i = e[0].length, l = e.length, u = l, v = R(l), k = 1 / 0, W = []; u--; ) {
            var P = e[u];
            u && n && (P = qe(P, Cn(n))), k = pn(P.length, k), v[u] = !t && (n || i >= 120 && P.length >= 120) ? new Ct(u && P) : o;
          }
          P = e[0];
          var F = -1, Q = v[0];
          e:
            for (; ++F < i && W.length < k; ) {
              var le = P[F], ge = n ? n(le) : le;
              if (le = t || le !== 0 ? le : 0, !(Q ? or(Q, ge) : r(W, ge, t))) {
                for (u = l; --u; ) {
                  var Ce = v[u];
                  if (!(Ce ? or(Ce, ge) : r(e[u], ge, t)))
                    continue e;
                }
                Q && Q.push(ge), W.push(le);
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
          return r == null ? o : Sn(r, e, t);
        }
        function hl(e) {
          return Ze(e) && hn(e) == se;
        }
        function lf(e) {
          return Ze(e) && hn(e) == ir;
        }
        function sf(e) {
          return Ze(e) && hn(e) == G;
        }
        function gr(e, n, t, r, i) {
          return e === n ? !0 : e == null || n == null || !Ze(e) && !Ze(n) ? e !== e && n !== n : uf(e, n, t, r, gr, i);
        }
        function uf(e, n, t, r, i, l) {
          var u = ke(e), v = ke(n), k = u ? Fe : gn(e), W = v ? Fe : gn(n);
          k = k == se ? Fn : k, W = W == se ? Fn : W;
          var P = k == Fn, F = W == Fn, Q = k == W;
          if (Q && yt(e)) {
            if (!yt(n))
              return !1;
            u = !0, P = !1;
          }
          if (Q && !P)
            return l || (l = new Gn()), u || Kt(e) ? Zl(e, n, t, r, i, l) : Bf(e, n, k, t, r, i, l);
          if (!(t & z)) {
            var le = P && De.call(e, "__wrapped__"), ge = F && De.call(n, "__wrapped__");
            if (le || ge) {
              var Ce = le ? e.value() : e, ve = ge ? n.value() : n;
              return l || (l = new Gn()), i(Ce, ve, t, r, l);
            }
          }
          return Q ? (l || (l = new Gn()), Wf(e, n, t, r, i, l)) : !1;
        }
        function df(e) {
          return Ze(e) && gn(e) == Te;
        }
        function vo(e, n, t, r) {
          var i = t.length, l = i, u = !r;
          if (e == null)
            return !l;
          for (e = Me(e); i--; ) {
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
                var Q = r(W, P, k, e, n, F);
              if (!(Q === o ? gr(P, W, z | q, r, F) : Q))
                return !1;
            }
          }
          return !0;
        }
        function ml(e) {
          if (!He(e) || Hf(e))
            return !1;
          var n = lt(e) ? uc : ju;
          return n.test(Rt(e));
        }
        function cf(e) {
          return Ze(e) && hn(e) == nr;
        }
        function ff(e) {
          return Ze(e) && gn(e) == zn;
        }
        function pf(e) {
          return Ze(e) && fi(e.length) && !!ze[hn(e)];
        }
        function _l(e) {
          return typeof e == "function" ? e : e == null ? kn : typeof e == "object" ? ke(e) ? wl(e[0], e[1]) : yl(e) : Us(e);
        }
        function ho(e) {
          if (!mr(e))
            return vc(e);
          var n = [];
          for (var t in Me(e))
            De.call(e, t) && t != "constructor" && n.push(t);
          return n;
        }
        function gf(e) {
          if (!He(e))
            return Jf(e);
          var n = mr(e), t = [];
          for (var r in e)
            r == "constructor" && (n || !De.call(e, r)) || t.push(r);
          return t;
        }
        function mo(e, n) {
          return e < n;
        }
        function bl(e, n) {
          var t = -1, r = yn(e) ? R(e.length) : [];
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
            return r === o && r === n ? Go(t, e) : gr(n, r, z | q);
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
          }, wn);
        }
        function vf(e, n, t, r, i, l, u) {
          var v = Bo(e, t), k = Bo(n, t), W = u.get(k);
          if (W) {
            so(e, t, W);
            return;
          }
          var P = l ? l(v, k, t + "", e, n, u) : o, F = P === o;
          if (F) {
            var Q = ke(k), le = !Q && yt(k), ge = !Q && !le && Kt(k);
            P = k, Q || le || ge ? ke(v) ? P = v : Je(v) ? P = bn(v) : le ? (F = !1, P = Ol(k, !0)) : ge ? (F = !1, P = Ll(k, !0)) : P = [] : br(k) || Et(k) ? (P = v, Et(v) ? P = Es(v) : (!He(v) || lt(v)) && (P = Ql(k))) : F = !1;
          }
          F && (u.set(k, P), i(P, k, r, l, u), u.delete(k)), so(e, t, P);
        }
        function kl(e, n) {
          var t = e.length;
          if (t)
            return n += n < 0 ? t : 0, at(n, t) ? e[n] : o;
        }
        function xl(e, n, t) {
          n.length ? n = qe(n, function(l) {
            return ke(l) ? function(u) {
              return It(u, l.length === 1 ? l[0] : l);
            } : l;
          }) : n = [kn];
          var r = -1;
          n = qe(n, Cn(pe()));
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
          for (e === n && (n = bn(n)), t && (v = qe(e, Cn(t))); ++l < u; )
            for (var k = 0, W = n[l], P = t ? t(W) : W; (k = i(v, P, k, r)) > -1; )
              v !== e && Ur.call(v, k, 1), Ur.call(e, k, 1);
          return e;
        }
        function Cl(e, n) {
          for (var t = e ? n.length : 0, r = t - 1; t--; ) {
            var i = n[t];
            if (t == r || i !== l) {
              var l = i;
              at(i) ? Ur.call(e, i, 1) : ko(e, i);
            }
          }
          return e;
        }
        function bo(e, n) {
          return e + zr(ol() * (n - e + 1));
        }
        function _f(e, n, t, r) {
          for (var i = -1, l = en(Fr((n - e) / (t || 1)), 0), u = R(l); l--; )
            u[r ? l : ++i] = e, e += t;
          return u;
        }
        function yo(e, n) {
          var t = "";
          if (!e || n < 1 || n > Ye)
            return t;
          do
            n % 2 && (t += e), n = zr(n / 2), n && (e += e);
          while (n);
          return t;
        }
        function Ie(e, n) {
          return Wo(ns(e, n, kn), e + "");
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
              W = r ? r(P, k, v) : o, W === o && (W = He(P) ? P : at(n[i + 1]) ? [] : {});
            }
            cr(v, k, W), v = v[k];
          }
          return e;
        }
        var $l = qr ? function(e, n) {
          return qr.set(e, n), e;
        } : kn, wf = Nr ? function(e, n) {
          return Nr(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Ko(n),
            writable: !0
          });
        } : kn;
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
          if (typeof n == "number" && n === n && i <= H) {
            for (; r < i; ) {
              var l = r + i >>> 1, u = e[l];
              u !== null && !In(u) && (t ? u <= n : u < n) ? r = l + 1 : i = l;
            }
            return i;
          }
          return wo(e, n, kn, t);
        }
        function wo(e, n, t, r) {
          var i = 0, l = e == null ? 0 : e.length;
          if (l === 0)
            return 0;
          n = t(n);
          for (var u = n !== n, v = n === null, k = In(n), W = n === o; i < l; ) {
            var P = zr((i + l) / 2), F = t(e[P]), Q = F !== o, le = F === null, ge = F === F, Ce = In(F);
            if (u)
              var ve = r || ge;
            else W ? ve = ge && (r || Q) : v ? ve = ge && Q && (r || !le) : k ? ve = ge && Q && !le && (r || !Ce) : le || Ce ? ve = !1 : ve = r ? F <= n : F < n;
            ve ? i = P + 1 : l = P;
          }
          return pn(l, j);
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
          return typeof e == "number" ? e : In(e) ? Qe : +e;
        }
        function $n(e) {
          if (typeof e == "string")
            return e;
          if (ke(e))
            return qe(e, $n) + "";
          if (In(e))
            return al ? al.call(e) : "";
          var n = e + "";
          return n == "0" && 1 / e == -we ? "-0" : n;
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
                for (var Q = k.length; Q--; )
                  if (k[Q] === F)
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
          return mt(dn(l, 1), n, t);
        }
        function Vl(e, n, t) {
          for (var r = -1, i = e.length, l = n.length, u = {}; ++r < i; ) {
            var v = r < l ? n[r] : o;
            t(u, e[r], v);
          }
          return u;
        }
        function So(e) {
          return Je(e) ? e : [];
        }
        function Co(e) {
          return typeof e == "function" ? e : kn;
        }
        function _t(e, n) {
          return ke(e) ? e : Lo(e, n) ? [e] : as(Le(e));
        }
        var Sf = Ie;
        function bt(e, n, t) {
          var r = e.length;
          return t = t === o ? r : t, !n && t >= r ? e : Wn(e, n, t);
        }
        var Tl = dc || function(e) {
          return un.clearTimeout(e);
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
          return dr ? Me(dr.call(e)) : {};
        }
        function Ll(e, n) {
          var t = n ? $o(e.buffer) : e.buffer;
          return new e.constructor(t, e.byteOffset, e.length);
        }
        function Dl(e, n) {
          if (e !== n) {
            var t = e !== o, r = e === null, i = e === e, l = In(e), u = n !== o, v = n === null, k = n === n, W = In(n);
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
          for (var i = -1, l = e.length, u = t.length, v = -1, k = n.length, W = en(l - u, 0), P = R(k + W), F = !r; ++v < k; )
            P[v] = n[v];
          for (; ++i < u; )
            (F || i < l) && (P[t[i]] = e[i]);
          for (; W--; )
            P[v++] = e[i++];
          return P;
        }
        function Wl(e, n, t, r) {
          for (var i = -1, l = e.length, u = -1, v = t.length, k = -1, W = n.length, P = en(l - v, 0), F = R(P + W), Q = !r; ++i < P; )
            F[i] = e[i];
          for (var le = i; ++k < W; )
            F[le + k] = n[k];
          for (; ++u < v; )
            (Q || i < l) && (F[le + t[u]] = e[i++]);
          return F;
        }
        function bn(e, n) {
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
            k === o && (k = e[v]), i ? rt(t, v, k) : cr(t, v, k);
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
            for (l = e.length > 3 && typeof l == "function" ? (i--, l) : o, u && mn(t[0], t[1], u) && (l = i < 3 ? o : l, i = 1), n = Me(n); ++r < i; ) {
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
            if (!yn(t))
              return e(t, r);
            for (var i = t.length, l = n ? i : -1, u = Me(t); (n ? l-- : ++l < i) && r(u[l], l, u) !== !1; )
              ;
            return t;
          };
        }
        function Ml(e) {
          return function(n, t, r) {
            for (var i = -1, l = Me(n), u = r(n), v = u.length; v--; ) {
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
            var u = this && this !== un && this instanceof l ? i : e;
            return u.apply(r ? t : this, arguments);
          }
          return l;
        }
        function Ul(e) {
          return function(n) {
            n = Le(n);
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
            var P = this && this !== un && this instanceof i ? r : e;
            return Sn(P, this, u);
          }
          return i;
        }
        function Nl(e) {
          return function(n, t, r) {
            var i = Me(n);
            if (!yn(n)) {
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
          return ot(function(n) {
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
              k && Do(k[0]) && k[1] == (me | ie | B | Be) && !k[4].length && k[9] == 1 ? u = u[ii(k[0])].apply(u, k[3]) : u = l.length == 1 && Do(l) ? u[v]() : u.thru(l);
            }
            return function() {
              var W = arguments, P = W[0];
              if (u && W.length == 1 && ke(P))
                return u.plant(P).value();
              for (var F = 0, Q = t ? n[F].apply(this, W) : P; ++F < t; )
                Q = n[F].call(this, Q);
              return Q;
            };
          });
        }
        function ei(e, n, t, r, i, l, u, v, k, W) {
          var P = n & me, F = n & O, Q = n & C, le = n & (ie | ne), ge = n & tn, Ce = Q ? o : hr(e);
          function ve() {
            for (var Ae = arguments.length, Ee = R(Ae), An = Ae; An--; )
              Ee[An] = arguments[An];
            if (le)
              var _n = Ht(ve), Rn = zd(Ee, _n);
            if (r && (Ee = Bl(Ee, r, i, le)), l && (Ee = Wl(Ee, l, u, le)), Ae -= Rn, le && Ae < W) {
              var Xe = gt(Ee, _n);
              return Gl(
                e,
                n,
                ei,
                ve.placeholder,
                t,
                Ee,
                Xe,
                v,
                k,
                W - Ae
              );
            }
            var Kn = F ? t : this, ut = Q ? Kn[e] : e;
            return Ae = Ee.length, v ? Ee = Qf(Ee, v) : ge && Ae > 1 && Ee.reverse(), P && k < Ae && (Ee.length = k), this && this !== un && this instanceof ve && (ut = Ce || hr(ut)), ut.apply(Kn, Ee);
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
              typeof t == "string" || typeof r == "string" ? (t = $n(t), r = $n(r)) : (t = Al(t), r = Al(r)), i = e(t, r);
            }
            return i;
          };
        }
        function Io(e) {
          return ot(function(n) {
            return n = qe(n, Cn(pe())), Ie(function(t) {
              var r = this;
              return e(n, function(i) {
                return Sn(i, r, t);
              });
            });
          });
        }
        function ti(e, n) {
          n = n === o ? " " : $n(n);
          var t = n.length;
          if (t < 2)
            return t ? yo(n, e) : n;
          var r = yo(n, Fr(e / Pt(n)));
          return Wt(n) ? bt(qn(r), 0, e).join("") : r.slice(0, e);
        }
        function Of(e, n, t, r) {
          var i = n & O, l = hr(e);
          function u() {
            for (var v = -1, k = arguments.length, W = -1, P = r.length, F = R(P + k), Q = this && this !== un && this instanceof u ? l : e; ++W < P; )
              F[W] = r[W];
            for (; k--; )
              F[W++] = arguments[++v];
            return Sn(Q, i ? t : this, F);
          }
          return u;
        }
        function ql(e) {
          return function(n, t, r) {
            return r && typeof r != "number" && mn(n, t, r) && (t = r = o), n = st(n), t === o ? (t = n, n = 0) : t = st(t), r = r === o ? n < t ? 1 : -1 : st(r), _f(n, t, r, e);
          };
        }
        function ri(e) {
          return function(n, t) {
            return typeof n == "string" && typeof t == "string" || (n = Mn(n), t = Mn(t)), e(n, t);
          };
        }
        function Gl(e, n, t, r, i, l, u, v, k, W) {
          var P = n & ie, F = P ? u : o, Q = P ? o : u, le = P ? l : o, ge = P ? o : l;
          n |= P ? B : Y, n &= ~(P ? Y : B), n & T || (n &= -4);
          var Ce = [
            e,
            n,
            i,
            le,
            F,
            ge,
            Q,
            v,
            k,
            W
          ], ve = t.apply(o, Ce);
          return Do(e) && rs(ve, Ce), ve.placeholder = r, is(ve, e, n);
        }
        function Ao(e) {
          var n = je[e];
          return function(t, r) {
            if (t = Mn(t), r = r == null ? 0 : pn(Se(r), 292), r && il(t)) {
              var i = (Le(t) + "e").split("e"), l = n(i[0] + "e" + (+i[1] + r));
              return i = (Le(l) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
            }
            return n(t);
          };
        }
        var Lf = Nt && 1 / Tr(new Nt([, -0]))[1] == we ? function(e) {
          return new Nt(e);
        } : Jo;
        function Hl(e) {
          return function(n) {
            var t = gn(n);
            return t == Te ? ro(n) : t == zn ? Jd(n) : Fd(n, e(n));
          };
        }
        function it(e, n, t, r, i, l, u, v) {
          var k = n & C;
          if (!k && typeof e != "function")
            throw new Ln(f);
          var W = r ? r.length : 0;
          if (W || (n &= -97, r = i = o), u = u === o ? u : en(Se(u), 0), v = v === o ? v : Se(v), W -= i ? i.length : 0, n & Y) {
            var P = r, F = i;
            r = i = o;
          }
          var Q = k ? o : Vo(e), le = [
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
          if (Q && Zf(le, Q), e = le[0], n = le[1], t = le[2], r = le[3], i = le[4], v = le[9] = le[9] === o ? k ? 0 : e.length : en(le[9] - W, 0), !v && n & (ie | ne) && (n &= -25), !n || n == O)
            var ge = Vf(e, n, t);
          else n == ie || n == ne ? ge = Tf(e, n, v) : (n == B || n == (O | B)) && !i.length ? ge = Of(e, n, t, r) : ge = ei.apply(o, le);
          var Ce = Q ? $l : rs;
          return is(Ce(ge, le), e, n);
        }
        function Kl(e, n, t, r) {
          return e === o || Hn(e, Ut[t]) && !De.call(r, t) ? n : e;
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
          var F = -1, Q = !0, le = t & q ? new Ct() : o;
          for (l.set(e, n), l.set(n, e); ++F < v; ) {
            var ge = e[F], Ce = n[F];
            if (r)
              var ve = u ? r(Ce, ge, F, n, e, l) : r(ge, Ce, F, e, n, l);
            if (ve !== o) {
              if (ve)
                continue;
              Q = !1;
              break;
            }
            if (le) {
              if (!Xi(n, function(Ae, Ee) {
                if (!or(le, Ee) && (ge === Ae || i(ge, Ae, t, r, l)))
                  return le.push(Ee);
              })) {
                Q = !1;
                break;
              }
            } else if (!(ge === Ce || i(ge, Ce, t, r, l))) {
              Q = !1;
              break;
            }
          }
          return l.delete(e), l.delete(n), Q;
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
            case G:
            case Vn:
              return Hn(+e, +n);
            case A:
              return e.name == n.name && e.message == n.message;
            case nr:
            case tr:
              return e == n + "";
            case Te:
              var v = ro;
            case zn:
              var k = r & z;
              if (v || (v = Tr), e.size != n.size && !k)
                return !1;
              var W = u.get(e);
              if (W)
                return W == n;
              r |= q, u.set(e, n);
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
            var Q = v[F];
            if (!(u ? Q in n : De.call(n, Q)))
              return !1;
          }
          var le = l.get(e), ge = l.get(n);
          if (le && ge)
            return le == n && ge == e;
          var Ce = !0;
          l.set(e, n), l.set(n, e);
          for (var ve = u; ++F < k; ) {
            Q = v[F];
            var Ae = e[Q], Ee = n[Q];
            if (r)
              var An = u ? r(Ee, Ae, Q, n, e, l) : r(Ae, Ee, Q, e, n, l);
            if (!(An === o ? Ae === Ee || i(Ae, Ee, t, r, l) : An)) {
              Ce = !1;
              break;
            }
            ve || (ve = Q == "constructor");
          }
          if (Ce && !ve) {
            var _n = e.constructor, Rn = n.constructor;
            _n != Rn && "constructor" in e && "constructor" in n && !(typeof _n == "function" && _n instanceof _n && typeof Rn == "function" && Rn instanceof Rn) && (Ce = !1);
          }
          return l.delete(e), l.delete(n), Ce;
        }
        function ot(e) {
          return Wo(ns(e, o, ds), e + "");
        }
        function Ro(e) {
          return vl(e, on, Oo);
        }
        function Eo(e) {
          return vl(e, wn, Jl);
        }
        var Vo = qr ? function(e) {
          return qr.get(e);
        } : Jo;
        function ii(e) {
          for (var n = e.name + "", t = Ft[n], r = De.call(Ft, n) ? t.length : 0; r--; ) {
            var i = t[r], l = i.func;
            if (l == null || l == e)
              return i.name;
          }
          return n;
        }
        function Ht(e) {
          var n = De.call(a, "placeholder") ? a : e;
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
          var n = De.call(e, xt), t = e[xt];
          try {
            e[xt] = o;
            var r = !0;
          } catch {
          }
          var i = Br.call(e);
          return r && (n ? e[xt] = t : delete e[xt]), i;
        }
        var Oo = oo ? function(e) {
          return e == null ? [] : (e = Me(e), ft(oo(e), function(n) {
            return tl.call(e, n);
          }));
        } : Xo, Jl = oo ? function(e) {
          for (var n = []; e; )
            pt(n, Oo(e)), e = Mr(e);
          return n;
        } : Xo, gn = hn;
        (ao && gn(new ao(new ArrayBuffer(1))) != Lt || lr && gn(new lr()) != Te || lo && gn(lo.resolve()) != fa || Nt && gn(new Nt()) != zn || sr && gn(new sr()) != rr) && (gn = function(e) {
          var n = hn(e), t = n == Fn ? e.constructor : o, r = t ? Rt(t) : "";
          if (r)
            switch (r) {
              case bc:
                return Lt;
              case yc:
                return Te;
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
                n = pn(n, e + u);
                break;
              case "takeRight":
                e = en(e, n - u);
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
          return l || ++r != i ? l : (i = e == null ? 0 : e.length, !!i && fi(i) && at(u, i) && (ke(e) || Et(e)));
        }
        function Nf(e) {
          var n = e.length, t = new e.constructor(n);
          return n && typeof e[0] == "string" && De.call(e, "index") && (t.index = e.index, t.input = e.input), t;
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
            case G:
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
            case Te:
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
        function at(e, n) {
          var t = typeof e;
          return n = n ?? Ye, !!n && (t == "number" || t != "symbol" && nd.test(e)) && e > -1 && e % 1 == 0 && e < n;
        }
        function mn(e, n, t) {
          if (!He(t))
            return !1;
          var r = typeof n;
          return (r == "number" ? yn(t) && at(n, t.length) : r == "string" && n in t) ? Hn(t[n], e) : !1;
        }
        function Lo(e, n) {
          if (ke(e))
            return !1;
          var t = typeof e;
          return t == "number" || t == "symbol" || t == "boolean" || e == null || In(e) ? !0 : Uu.test(e) || !Mu.test(e) || n != null && e in Me(n);
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
        var Kf = Lr ? lt : Qo;
        function mr(e) {
          var n = e && e.constructor, t = typeof n == "function" && n.prototype || Ut;
          return e === t;
        }
        function jl(e) {
          return e === e && !He(e);
        }
        function es(e, n) {
          return function(t) {
            return t == null ? !1 : t[e] === n && (n !== o || e in Me(t));
          };
        }
        function Yf(e) {
          var n = di(e, function(r) {
            return t.size === d && t.clear(), r;
          }), t = n.cache;
          return n;
        }
        function Zf(e, n) {
          var t = e[1], r = n[1], i = t | r, l = i < (O | C | me), u = r == me && t == ie || r == me && t == Be && e[7].length <= n[8] || r == (me | Be) && n[7].length <= n[8] && t == ie;
          if (!(l || u))
            return e;
          r & O && (e[2] = n[2], i |= t & O ? 0 : T);
          var v = n[3];
          if (v) {
            var k = e[3];
            e[3] = k ? Bl(k, v, n[4]) : v, e[4] = k ? gt(e[3], g) : n[4];
          }
          return v = n[5], v && (k = e[5], e[5] = k ? Wl(k, v, n[6]) : v, e[6] = k ? gt(e[5], g) : n[6]), v = n[7], v && (e[7] = v), r & me && (e[8] = e[8] == null ? n[8] : pn(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = i, e;
        }
        function Jf(e) {
          var n = [];
          if (e != null)
            for (var t in Me(e))
              n.push(t);
          return n;
        }
        function Xf(e) {
          return Br.call(e);
        }
        function ns(e, n, t) {
          return n = en(n === o ? e.length - 1 : n, 0), function() {
            for (var r = arguments, i = -1, l = en(r.length - n, 0), u = R(l); ++i < l; )
              u[i] = r[n + i];
            i = -1;
            for (var v = R(n + 1); ++i < n; )
              v[i] = r[i];
            return v[n] = t(u), Sn(e, this, v);
          };
        }
        function ts(e, n) {
          return n.length < 2 ? e : It(e, Wn(n, 0, -1));
        }
        function Qf(e, n) {
          for (var t = e.length, r = pn(n.length, t), i = bn(e); r--; ) {
            var l = n[r];
            e[r] = at(l, t) ? i[l] : o;
          }
          return e;
        }
        function Bo(e, n) {
          if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
            return e[n];
        }
        var rs = os($l), _r = fc || function(e, n) {
          return un.setTimeout(e, n);
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
          if (typeof e == "string" || In(e))
            return e;
          var n = e + "";
          return n == "0" && 1 / e == -we ? "-0" : n;
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
          return On(J, function(t) {
            var r = "_." + t[0];
            n & t[1] && !Er(e, r) && e.push(r);
          }), e.sort();
        }
        function ls(e) {
          if (e instanceof Re)
            return e.clone();
          var n = new Dn(e.__wrapped__, e.__chain__);
          return n.__actions__ = bn(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
        }
        function ep(e, n, t) {
          (t ? mn(e, n, t) : n === o) ? n = 1 : n = en(Se(n), 0);
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
          return pt(ke(t) ? bn(t) : [t], dn(n, 1));
        }
        var rp = Ie(function(e, n) {
          return Je(e) ? fr(e, dn(n, 1, Je, !0)) : [];
        }), ip = Ie(function(e, n) {
          var t = Pn(n);
          return Je(t) && (t = o), Je(e) ? fr(e, dn(n, 1, Je, !0), pe(t, 2)) : [];
        }), op = Ie(function(e, n) {
          var t = Pn(n);
          return Je(t) && (t = o), Je(e) ? fr(e, dn(n, 1, Je, !0), o, t) : [];
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
          return i ? (t && typeof t != "number" && mn(e, n, t) && (t = 0, r = i), nf(e, n, t, r)) : [];
        }
        function ss(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : Se(t);
          return i < 0 && (i = en(r + i, 0)), Vr(e, pe(n, 3), i);
        }
        function us(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r - 1;
          return t !== o && (i = Se(t), i = t < 0 ? en(r + i, 0) : pn(i, r - 1)), Vr(e, pe(n, 3), i, !0);
        }
        function ds(e) {
          var n = e == null ? 0 : e.length;
          return n ? dn(e, 1) : [];
        }
        function cp(e) {
          var n = e == null ? 0 : e.length;
          return n ? dn(e, we) : [];
        }
        function fp(e, n) {
          var t = e == null ? 0 : e.length;
          return t ? (n = n === o ? 1 : Se(n), dn(e, n)) : [];
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
          return i < 0 && (i = en(r + i, 0)), Bt(e, n, i);
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
          return t !== o && (i = Se(t), i = i < 0 ? en(r + i, 0) : pn(i, r - 1)), n === n ? Qd(e, n, i) : Vr(e, Ga, i, !0);
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
        var Cp = ot(function(e, n) {
          var t = e == null ? 0 : e.length, r = uo(e, n);
          return Cl(e, qe(n, function(i) {
            return at(i, t) ? +i : i;
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
          return r ? (t && typeof t != "number" && mn(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : Se(n), t = t === o ? r : Se(t)), Wn(e, n, t)) : [];
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
          return mt(dn(e, 1, Je, !0));
        }), Fp = Ie(function(e) {
          var n = Pn(e);
          return Je(n) && (n = o), mt(dn(e, 1, Je, !0), pe(n, 2));
        }), zp = Ie(function(e) {
          var n = Pn(e);
          return n = typeof n == "function" ? n : o, mt(dn(e, 1, Je, !0), o, n);
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
            if (Je(t))
              return n = en(t.length, n), !0;
          }), no(n, function(t) {
            return qe(e, Qi(t));
          });
        }
        function ps(e, n) {
          if (!(e && e.length))
            return [];
          var t = Mo(e);
          return n == null ? t : qe(t, function(r) {
            return Sn(n, o, r);
          });
        }
        var Kp = Ie(function(e, n) {
          return Je(e) ? fr(e, n) : [];
        }), Yp = Ie(function(e) {
          return xo(ft(e, Je));
        }), Zp = Ie(function(e) {
          var n = Pn(e);
          return Je(n) && (n = o), xo(ft(e, Je), pe(n, 2));
        }), Jp = Ie(function(e) {
          var n = Pn(e);
          return n = typeof n == "function" ? n : o, xo(ft(e, Je), o, n);
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
        var tg = ot(function(e) {
          var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, i = function(l) {
            return uo(l, e);
          };
          return n > 1 || this.__actions__.length || !(r instanceof Re) || !at(t) ? this.thru(i) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({
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
          De.call(e, t) ? ++e[t] : rt(e, t, 1);
        });
        function cg(e, n, t) {
          var r = ke(e) ? za : ef;
          return t && mn(e, n, t) && (n = o), r(e, pe(n, 3));
        }
        function fg(e, n) {
          var t = ke(e) ? ft : pl;
          return t(e, pe(n, 3));
        }
        var pg = Nl(ss), gg = Nl(us);
        function vg(e, n) {
          return dn(si(e, n), 1);
        }
        function hg(e, n) {
          return dn(si(e, n), we);
        }
        function mg(e, n, t) {
          return t = t === o ? 1 : Se(t), dn(si(e, n), t);
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
          De.call(e, t) ? e[t].push(n) : rt(e, t, [n]);
        });
        function bg(e, n, t, r) {
          e = yn(e) ? e : Yt(e), t = t && !r ? Se(t) : 0;
          var i = e.length;
          return t < 0 && (t = en(i + t, 0)), pi(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && Bt(e, n, t) > -1;
        }
        var yg = Ie(function(e, n, t) {
          var r = -1, i = typeof n == "function", l = yn(e) ? R(e.length) : [];
          return ht(e, function(u) {
            l[++r] = i ? Sn(n, u, t) : pr(u, n, t);
          }), l;
        }), wg = jr(function(e, n, t) {
          rt(e, t, n);
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
          (t ? mn(e, n, t) : n === o) ? n = 1 : n = Se(n);
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
          if (yn(e))
            return pi(e) ? Pt(e) : e.length;
          var n = gn(e);
          return n == Te || n == zn ? e.size : ho(e).length;
        }
        function Vg(e, n, t) {
          var r = ke(e) ? Xi : xf;
          return t && mn(e, n, t) && (n = o), r(e, pe(n, 3));
        }
        var Tg = Ie(function(e, n) {
          if (e == null)
            return [];
          var t = n.length;
          return t > 1 && mn(e, n[0], n[1]) ? n = [] : t > 2 && mn(n[0], n[1], n[2]) && (n = [n[0]]), xl(e, dn(n, 1), []);
        }), ui = cc || function() {
          return un.Date.now();
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
          return n = t ? o : n, n = e && n == null ? e.length : n, it(e, me, o, o, o, o, n);
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
            r |= B;
          }
          return it(e, r, n, t, i);
        }), bs = Ie(function(e, n, t) {
          var r = O | C;
          if (t.length) {
            var i = gt(t, Ht(bs));
            r |= B;
          }
          return it(n, r, e, t, i);
        });
        function ys(e, n, t) {
          n = t ? o : n;
          var r = it(e, ie, o, o, o, o, o, n);
          return r.placeholder = ys.placeholder, r;
        }
        function ws(e, n, t) {
          n = t ? o : n;
          var r = it(e, ne, o, o, o, o, o, n);
          return r.placeholder = ws.placeholder, r;
        }
        function ks(e, n, t) {
          var r, i, l, u, v, k, W = 0, P = !1, F = !1, Q = !0;
          if (typeof e != "function")
            throw new Ln(f);
          n = Mn(n) || 0, He(t) && (P = !!t.leading, F = "maxWait" in t, l = F ? en(Mn(t.maxWait) || 0, n) : l, Q = "trailing" in t ? !!t.trailing : Q);
          function le(Xe) {
            var Kn = r, ut = i;
            return r = i = o, W = Xe, u = e.apply(ut, Kn), u;
          }
          function ge(Xe) {
            return W = Xe, v = _r(Ae, n), P ? le(Xe) : u;
          }
          function Ce(Xe) {
            var Kn = Xe - k, ut = Xe - W, Ns = n - Kn;
            return F ? pn(Ns, l - ut) : Ns;
          }
          function ve(Xe) {
            var Kn = Xe - k, ut = Xe - W;
            return k === o || Kn >= n || Kn < 0 || F && ut >= l;
          }
          function Ae() {
            var Xe = ui();
            if (ve(Xe))
              return Ee(Xe);
            v = _r(Ae, Ce(Xe));
          }
          function Ee(Xe) {
            return v = o, Q && r ? le(Xe) : (r = i = o, u);
          }
          function An() {
            v !== o && Tl(v), W = 0, r = k = i = v = o;
          }
          function _n() {
            return v === o ? u : Ee(ui());
          }
          function Rn() {
            var Xe = ui(), Kn = ve(Xe);
            if (r = arguments, i = this, k = Xe, Kn) {
              if (v === o)
                return ge(k);
              if (F)
                return Tl(v), v = _r(Ae, n), le(k);
            }
            return v === o && (v = _r(Ae, n)), u;
          }
          return Rn.cancel = An, Rn.flush = _n, Rn;
        }
        var Lg = Ie(function(e, n) {
          return cl(e, 1, n);
        }), Dg = Ie(function(e, n, t) {
          return cl(e, Mn(n) || 0, t);
        });
        function Bg(e) {
          return it(e, tn);
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
          return t.cache = new (di.Cache || tt)(), t;
        }
        di.Cache = tt;
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
          n = n.length == 1 && ke(n[0]) ? qe(n[0], Cn(pe())) : qe(dn(n, 1), Cn(pe()));
          var t = n.length;
          return Ie(function(r) {
            for (var i = -1, l = pn(r.length, t); ++i < l; )
              r[i] = n[i].call(this, r[i]);
            return Sn(e, this, r);
          });
        }), No = Ie(function(e, n) {
          var t = gt(n, Ht(No));
          return it(e, B, o, n, t);
        }), xs = Ie(function(e, n) {
          var t = gt(n, Ht(xs));
          return it(e, Y, o, n, t);
        }), Mg = ot(function(e, n) {
          return it(e, Be, o, o, o, n);
        });
        function Ug(e, n) {
          if (typeof e != "function")
            throw new Ln(f);
          return n = n === o ? n : Se(n), Ie(e, n);
        }
        function Ng(e, n) {
          if (typeof e != "function")
            throw new Ln(f);
          return n = n == null ? 0 : en(Se(n), 0), Ie(function(t) {
            var r = t[n], i = bt(t, 0, n);
            return r && pt(i, r), Sn(e, this, i);
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
          return Ze(e) && De.call(e, "callee") && !tl.call(e, "callee");
        }, ke = R.isArray, jg = Wa ? Cn(Wa) : lf;
        function yn(e) {
          return e != null && fi(e.length) && !lt(e);
        }
        function Je(e) {
          return Ze(e) && yn(e);
        }
        function ev(e) {
          return e === !0 || e === !1 || Ze(e) && hn(e) == En;
        }
        var yt = pc || Qo, nv = Pa ? Cn(Pa) : sf;
        function tv(e) {
          return Ze(e) && e.nodeType === 1 && !br(e);
        }
        function rv(e) {
          if (e == null)
            return !0;
          if (yn(e) && (ke(e) || typeof e == "string" || typeof e.splice == "function" || yt(e) || Kt(e) || Et(e)))
            return !e.length;
          var n = gn(e);
          if (n == Te || n == zn)
            return !e.size;
          if (mr(e))
            return !ho(e).length;
          for (var t in e)
            if (De.call(e, t))
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
          if (!Ze(e))
            return !1;
          var n = hn(e);
          return n == A || n == $ || typeof e.message == "string" && typeof e.name == "string" && !br(e);
        }
        function av(e) {
          return typeof e == "number" && il(e);
        }
        function lt(e) {
          if (!He(e))
            return !1;
          var n = hn(e);
          return n == M || n == _e || n == et || n == Ru;
        }
        function Ss(e) {
          return typeof e == "number" && e == Se(e);
        }
        function fi(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ye;
        }
        function He(e) {
          var n = typeof e;
          return e != null && (n == "object" || n == "function");
        }
        function Ze(e) {
          return e != null && typeof e == "object";
        }
        var Cs = Ma ? Cn(Ma) : df;
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
            throw new be(I);
          return ml(e);
        }
        function cv(e) {
          return e === null;
        }
        function fv(e) {
          return e == null;
        }
        function $s(e) {
          return typeof e == "number" || Ze(e) && hn(e) == Vn;
        }
        function br(e) {
          if (!Ze(e) || hn(e) != Fn)
            return !1;
          var n = Mr(e);
          if (n === null)
            return !0;
          var t = De.call(n, "constructor") && n.constructor;
          return typeof t == "function" && t instanceof t && Dr.call(t) == lc;
        }
        var zo = Ua ? Cn(Ua) : cf;
        function pv(e) {
          return Ss(e) && e >= -Ye && e <= Ye;
        }
        var Is = Na ? Cn(Na) : ff;
        function pi(e) {
          return typeof e == "string" || !ke(e) && Ze(e) && hn(e) == tr;
        }
        function In(e) {
          return typeof e == "symbol" || Ze(e) && hn(e) == $r;
        }
        var Kt = Fa ? Cn(Fa) : pf;
        function gv(e) {
          return e === o;
        }
        function vv(e) {
          return Ze(e) && gn(e) == rr;
        }
        function hv(e) {
          return Ze(e) && hn(e) == Vu;
        }
        var mv = ri(mo), _v = ri(function(e, n) {
          return e <= n;
        });
        function As(e) {
          if (!e)
            return [];
          if (yn(e))
            return pi(e) ? qn(e) : bn(e);
          if (ar && e[ar])
            return Zd(e[ar]());
          var n = gn(e), t = n == Te ? ro : n == zn ? Tr : Yt;
          return t(e);
        }
        function st(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Mn(e), e === we || e === -we) {
            var n = e < 0 ? -1 : 1;
            return n * sn;
          }
          return e === e ? e : 0;
        }
        function Se(e) {
          var n = st(e), t = n % 1;
          return n === n ? t ? n - t : n : 0;
        }
        function Rs(e) {
          return e ? $t(Se(e), 0, Z) : 0;
        }
        function Mn(e) {
          if (typeof e == "number")
            return e;
          if (In(e))
            return Qe;
          if (He(e)) {
            var n = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = He(n) ? n + "" : n;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Ya(e);
          var t = Qu.test(e);
          return t || ed.test(e) ? Td(e.slice(2), t ? 2 : 8) : Xu.test(e) ? Qe : +e;
        }
        function Es(e) {
          return Zn(e, wn(e));
        }
        function bv(e) {
          return e ? $t(Se(e), -Ye, Ye) : e === 0 ? e : 0;
        }
        function Le(e) {
          return e == null ? "" : $n(e);
        }
        var yv = qt(function(e, n) {
          if (mr(n) || yn(n)) {
            Zn(n, on(n), e);
            return;
          }
          for (var t in n)
            De.call(n, t) && cr(e, t, n[t]);
        }), Vs = qt(function(e, n) {
          Zn(n, wn(n), e);
        }), gi = qt(function(e, n, t, r) {
          Zn(n, wn(n), e, r);
        }), wv = qt(function(e, n, t, r) {
          Zn(n, on(n), e, r);
        }), kv = ot(uo);
        function xv(e, n) {
          var t = zt(e);
          return n == null ? t : ul(t, n);
        }
        var Sv = Ie(function(e, n) {
          e = Me(e);
          var t = -1, r = n.length, i = r > 2 ? n[2] : o;
          for (i && mn(n[0], n[1], i) && (r = 1); ++t < r; )
            for (var l = n[t], u = wn(l), v = -1, k = u.length; ++v < k; ) {
              var W = u[v], P = e[W];
              (P === o || Hn(P, Ut[W]) && !De.call(e, W)) && (e[W] = l[W]);
            }
          return e;
        }), Cv = Ie(function(e) {
          return e.push(o, Yl), Sn(Ts, o, e);
        });
        function $v(e, n) {
          return qa(e, pe(n, 3), Yn);
        }
        function Iv(e, n) {
          return qa(e, pe(n, 3), fo);
        }
        function Av(e, n) {
          return e == null ? e : co(e, pe(n, 3), wn);
        }
        function Rv(e, n) {
          return e == null ? e : gl(e, pe(n, 3), wn);
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
          return e == null ? [] : Zr(e, wn(e));
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
        }, Ko(kn)), Bv = zl(function(e, n, t) {
          n != null && typeof n.toString != "function" && (n = Br.call(n)), De.call(e, n) ? e[n].push(t) : e[n] = [t];
        }, pe), Wv = Ie(pr);
        function on(e) {
          return yn(e) ? ll(e) : ho(e);
        }
        function wn(e) {
          return yn(e) ? ll(e, !0) : gf(e);
        }
        function Pv(e, n) {
          var t = {};
          return n = pe(n, 3), Yn(e, function(r, i, l) {
            rt(t, n(r, i, l), r);
          }), t;
        }
        function Mv(e, n) {
          var t = {};
          return n = pe(n, 3), Yn(e, function(r, i, l) {
            rt(t, i, n(r, i, l));
          }), t;
        }
        var Uv = qt(function(e, n, t) {
          Jr(e, n, t);
        }), Ts = qt(function(e, n, t, r) {
          Jr(e, n, t, r);
        }), Nv = ot(function(e, n) {
          var t = {};
          if (e == null)
            return t;
          var r = !1;
          n = qe(n, function(l) {
            return l = _t(l, e), r || (r = l.length > 1), l;
          }), Zn(e, Eo(e), t), r && (t = Bn(t, V | D | U, Df));
          for (var i = n.length; i--; )
            ko(t, n[i]);
          return t;
        });
        function Fv(e, n) {
          return Os(e, ci(pe(n)));
        }
        var zv = ot(function(e, n) {
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
            l === o && (r = i, l = t), e = lt(l) ? l.call(e) : l;
          }
          return e;
        }
        function Gv(e, n, t) {
          return e == null ? e : vr(e, n, t);
        }
        function Hv(e, n, t, r) {
          return r = typeof r == "function" ? r : o, e == null ? e : vr(e, n, t, r);
        }
        var Ls = Hl(on), Ds = Hl(wn);
        function Kv(e, n, t) {
          var r = ke(e), i = r || yt(e) || Kt(e);
          if (n = pe(n, 4), t == null) {
            var l = e && e.constructor;
            i ? t = r ? new l() : [] : He(e) ? t = lt(l) ? zt(Mr(e)) : {} : t = {};
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
          return e == null ? [] : to(e, wn(e));
        }
        function Qv(e, n, t) {
          return t === o && (t = n, n = o), t !== o && (t = Mn(t), t = t === t ? t : 0), n !== o && (n = Mn(n), n = n === n ? n : 0), $t(Mn(e), n, t);
        }
        function jv(e, n, t) {
          return n = st(n), t === o ? (t = n, n = 0) : t = st(t), e = Mn(e), of(e, n, t);
        }
        function eh(e, n, t) {
          if (t && typeof t != "boolean" && mn(e, n, t) && (n = t = o), t === o && (typeof n == "boolean" ? (t = n, n = o) : typeof e == "boolean" && (t = e, e = o)), e === o && n === o ? (e = 0, n = 1) : (e = st(e), n === o ? (n = e, e = 0) : n = st(n)), e > n) {
            var r = e;
            e = n, n = r;
          }
          if (t || e % 1 || n % 1) {
            var i = ol();
            return pn(e + i * (n - e + Vd("1e-" + ((i + "").length - 1))), n);
          }
          return bo(e, n);
        }
        var nh = Gt(function(e, n, t) {
          return n = n.toLowerCase(), e + (t ? Bs(n) : n);
        });
        function Bs(e) {
          return Ho(Le(e).toLowerCase());
        }
        function Ws(e) {
          return e = Le(e), e && e.replace(td, qd).replace(wd, "");
        }
        function th(e, n, t) {
          e = Le(e), n = $n(n);
          var r = e.length;
          t = t === o ? r : $t(Se(t), 0, r);
          var i = t;
          return t -= n.length, t >= 0 && e.slice(t, i) == n;
        }
        function rh(e) {
          return e = Le(e), e && Bu.test(e) ? e.replace(ga, Gd) : e;
        }
        function ih(e) {
          return e = Le(e), e && Fu.test(e) ? e.replace(Ui, "\\$&") : e;
        }
        var oh = Gt(function(e, n, t) {
          return e + (t ? "-" : "") + n.toLowerCase();
        }), ah = Gt(function(e, n, t) {
          return e + (t ? " " : "") + n.toLowerCase();
        }), lh = Ul("toLowerCase");
        function sh(e, n, t) {
          e = Le(e), n = Se(n);
          var r = n ? Pt(e) : 0;
          if (!n || r >= n)
            return e;
          var i = (n - r) / 2;
          return ti(zr(i), t) + e + ti(Fr(i), t);
        }
        function uh(e, n, t) {
          e = Le(e), n = Se(n);
          var r = n ? Pt(e) : 0;
          return n && r < n ? e + ti(n - r, t) : e;
        }
        function dh(e, n, t) {
          e = Le(e), n = Se(n);
          var r = n ? Pt(e) : 0;
          return n && r < n ? ti(n - r, t) + e : e;
        }
        function ch(e, n, t) {
          return t || n == null ? n = 0 : n && (n = +n), mc(Le(e).replace(Ni, ""), n || 0);
        }
        function fh(e, n, t) {
          return (t ? mn(e, n, t) : n === o) ? n = 1 : n = Se(n), yo(Le(e), n);
        }
        function ph() {
          var e = arguments, n = Le(e[0]);
          return e.length < 3 ? n : n.replace(e[1], e[2]);
        }
        var gh = Gt(function(e, n, t) {
          return e + (t ? "_" : "") + n.toLowerCase();
        });
        function vh(e, n, t) {
          return t && typeof t != "number" && mn(e, n, t) && (n = t = o), t = t === o ? Z : t >>> 0, t ? (e = Le(e), e && (typeof n == "string" || n != null && !zo(n)) && (n = $n(n), !n && Wt(e)) ? bt(qn(e), 0, t) : e.split(n, t)) : [];
        }
        var hh = Gt(function(e, n, t) {
          return e + (t ? " " : "") + Ho(n);
        });
        function mh(e, n, t) {
          return e = Le(e), t = t == null ? 0 : $t(Se(t), 0, e.length), n = $n(n), e.slice(t, t + n.length) == n;
        }
        function _h(e, n, t) {
          var r = a.templateSettings;
          t && mn(e, n, t) && (n = o), e = Le(e), n = gi({}, n, r, Kl);
          var i = gi({}, n.imports, r.imports, Kl), l = on(i), u = to(i, l), v, k, W = 0, P = n.interpolate || Ir, F = "__p += '", Q = io(
            (n.escape || Ir).source + "|" + P.source + "|" + (P === va ? Ju : Ir).source + "|" + (n.evaluate || Ir).source + "|$",
            "g"
          ), le = "//# sourceURL=" + (De.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++$d + "]") + `
`;
          e.replace(Q, function(ve, Ae, Ee, An, _n, Rn) {
            return Ee || (Ee = An), F += e.slice(W, Rn).replace(rd, Hd), Ae && (v = !0, F += `' +
__e(` + Ae + `) +
'`), _n && (k = !0, F += `';
` + _n + `;
__p += '`), Ee && (F += `' +
((__t = (` + Ee + `)) == null ? '' : __t) +
'`), W = Rn + ve.length, ve;
          }), F += `';
`;
          var ge = De.call(n, "variable") && n.variable;
          if (!ge)
            F = `with (obj) {
` + F + `
}
`;
          else if (Yu.test(ge))
            throw new be(S);
          F = (k ? F.replace(Tu, "") : F).replace(Ou, "$1").replace(Lu, "$1;"), F = "function(" + (ge || "obj") + `) {
` + (ge ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (k ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + F + `return __p
}`;
          var Ce = Ms(function() {
            return Oe(l, le + "return " + F).apply(o, u);
          });
          if (Ce.source = F, Fo(Ce))
            throw Ce;
          return Ce;
        }
        function bh(e) {
          return Le(e).toLowerCase();
        }
        function yh(e) {
          return Le(e).toUpperCase();
        }
        function wh(e, n, t) {
          if (e = Le(e), e && (t || n === o))
            return Ya(e);
          if (!e || !(n = $n(n)))
            return e;
          var r = qn(e), i = qn(n), l = Za(r, i), u = Ja(r, i) + 1;
          return bt(r, l, u).join("");
        }
        function kh(e, n, t) {
          if (e = Le(e), e && (t || n === o))
            return e.slice(0, Qa(e) + 1);
          if (!e || !(n = $n(n)))
            return e;
          var r = qn(e), i = Ja(r, qn(n)) + 1;
          return bt(r, 0, i).join("");
        }
        function xh(e, n, t) {
          if (e = Le(e), e && (t || n === o))
            return e.replace(Ni, "");
          if (!e || !(n = $n(n)))
            return e;
          var r = qn(e), i = Za(r, qn(n));
          return bt(r, i).join("");
        }
        function Sh(e, n) {
          var t = Pe, r = rn;
          if (He(n)) {
            var i = "separator" in n ? n.separator : i;
            t = "length" in n ? Se(n.length) : t, r = "omission" in n ? $n(n.omission) : r;
          }
          e = Le(e);
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
              for (i.global || (i = io(i.source, Le(ha.exec(i)) + "g")), i.lastIndex = 0; W = i.exec(P); )
                var F = W.index;
              k = k.slice(0, F === o ? v : F);
            }
          } else if (e.indexOf($n(i), v) != v) {
            var Q = k.lastIndexOf(i);
            Q > -1 && (k = k.slice(0, Q));
          }
          return k + r;
        }
        function Ch(e) {
          return e = Le(e), e && Du.test(e) ? e.replace(pa, jd) : e;
        }
        var $h = Gt(function(e, n, t) {
          return e + (t ? " " : "") + n.toUpperCase();
        }), Ho = Ul("toUpperCase");
        function Ps(e, n, t) {
          return e = Le(e), n = t ? o : n, n === o ? Yd(e) ? tc(e) : Md(e) : e.match(n) || [];
        }
        var Ms = Ie(function(e, n) {
          try {
            return Sn(e, o, n);
          } catch (t) {
            return Fo(t) ? t : new be(t);
          }
        }), Ih = ot(function(e, n) {
          return On(n, function(t) {
            t = Jn(t), rt(e, t, Uo(e[t], e));
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
              if (Sn(l[0], this, r))
                return Sn(l[1], this, r);
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
        function kn(e) {
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
          var l = !(He(t) && "chain" in t) || !!t.chain, u = lt(e);
          return On(i, function(v) {
            var k = n[v];
            e[v] = k, u && (e.prototype[v] = function() {
              var W = this.__chain__;
              if (l || W) {
                var P = e(this.__wrapped__), F = P.__actions__ = bn(this.__actions__);
                return F.push({ func: k, args: arguments, thisArg: e }), P.__chain__ = W, P;
              }
              return k.apply(e, pt([this.value()], arguments));
            });
          }), e;
        }
        function Wh() {
          return un._ === this && (un._ = sc), this;
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
          if (e = Se(e), e < 1 || e > Ye)
            return [];
          var t = Z, r = pn(e, Z);
          n = pe(n), e -= Z;
          for (var i = no(r, n); ++t < e; )
            n(t);
          return i;
        }
        function Zh(e) {
          return ke(e) ? qe(e, Jn) : In(e) ? [e] : bn(as(Le(e)));
        }
        function Jh(e) {
          var n = ++ac;
          return Le(e) + n;
        }
        var Xh = ni(function(e, n) {
          return e + n;
        }, 0), Qh = Ao("ceil"), jh = ni(function(e, n) {
          return e / n;
        }, 1), em = Ao("floor");
        function nm(e) {
          return e && e.length ? Yr(e, kn, po) : o;
        }
        function tm(e, n) {
          return e && e.length ? Yr(e, pe(n, 2), po) : o;
        }
        function rm(e) {
          return Ha(e, kn);
        }
        function im(e, n) {
          return Ha(e, pe(n, 2));
        }
        function om(e) {
          return e && e.length ? Yr(e, kn, mo) : o;
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
          return e && e.length ? eo(e, kn) : 0;
        }
        function cm(e, n) {
          return e && e.length ? eo(e, pe(n, 2)) : 0;
        }
        return a.after = Og, a.ary = ms, a.assign = yv, a.assignIn = Vs, a.assignInWith = gi, a.assignWith = wv, a.at = kv, a.before = _s, a.bind = Uo, a.bindAll = Ih, a.bindKey = bs, a.castArray = Gg, a.chain = gs, a.chunk = ep, a.compact = np, a.concat = tp, a.cond = Ah, a.conforms = Rh, a.constant = Ko, a.countBy = dg, a.create = xv, a.curry = ys, a.curryRight = ws, a.debounce = ks, a.defaults = Sv, a.defaultsDeep = Cv, a.defer = Lg, a.delay = Dg, a.difference = rp, a.differenceBy = ip, a.differenceWith = op, a.drop = ap, a.dropRight = lp, a.dropRightWhile = sp, a.dropWhile = up, a.fill = dp, a.filter = fg, a.flatMap = vg, a.flatMapDeep = hg, a.flatMapDepth = mg, a.flatten = ds, a.flattenDeep = cp, a.flattenDepth = fp, a.flip = Bg, a.flow = Vh, a.flowRight = Th, a.fromPairs = pp, a.functions = Tv, a.functionsIn = Ov, a.groupBy = _g, a.initial = vp, a.intersection = hp, a.intersectionBy = mp, a.intersectionWith = _p, a.invert = Dv, a.invertBy = Bv, a.invokeMap = yg, a.iteratee = Yo, a.keyBy = wg, a.keys = on, a.keysIn = wn, a.map = si, a.mapKeys = Pv, a.mapValues = Mv, a.matches = Oh, a.matchesProperty = Lh, a.memoize = di, a.merge = Uv, a.mergeWith = Ts, a.method = Dh, a.methodOf = Bh, a.mixin = Zo, a.negate = ci, a.nthArg = Ph, a.omit = Nv, a.omitBy = Fv, a.once = Wg, a.orderBy = kg, a.over = Mh, a.overArgs = Pg, a.overEvery = Uh, a.overSome = Nh, a.partial = No, a.partialRight = xs, a.partition = xg, a.pick = zv, a.pickBy = Os, a.property = Us, a.propertyOf = Fh, a.pull = kp, a.pullAll = fs, a.pullAllBy = xp, a.pullAllWith = Sp, a.pullAt = Cp, a.range = zh, a.rangeRight = qh, a.rearg = Mg, a.reject = $g, a.remove = $p, a.rest = Ug, a.reverse = Po, a.sampleSize = Ag, a.set = Gv, a.setWith = Hv, a.shuffle = Rg, a.slice = Ip, a.sortBy = Tg, a.sortedUniq = Lp, a.sortedUniqBy = Dp, a.split = vh, a.spread = Ng, a.tail = Bp, a.take = Wp, a.takeRight = Pp, a.takeRightWhile = Mp, a.takeWhile = Up, a.tap = ng, a.throttle = Fg, a.thru = li, a.toArray = As, a.toPairs = Ls, a.toPairsIn = Ds, a.toPath = Zh, a.toPlainObject = Es, a.transform = Kv, a.unary = zg, a.union = Np, a.unionBy = Fp, a.unionWith = zp, a.uniq = qp, a.uniqBy = Gp, a.uniqWith = Hp, a.unset = Yv, a.unzip = Mo, a.unzipWith = ps, a.update = Zv, a.updateWith = Jv, a.values = Yt, a.valuesIn = Xv, a.without = Kp, a.words = Ps, a.wrap = qg, a.xor = Yp, a.xorBy = Zp, a.xorWith = Jp, a.zip = Xp, a.zipObject = Qp, a.zipObjectDeep = jp, a.zipWith = eg, a.entries = Ls, a.entriesIn = Ds, a.extend = Vs, a.extendWith = gi, Zo(a, a), a.add = Xh, a.attempt = Ms, a.camelCase = nh, a.capitalize = Bs, a.ceil = Qh, a.clamp = Qv, a.clone = Hg, a.cloneDeep = Yg, a.cloneDeepWith = Zg, a.cloneWith = Kg, a.conformsTo = Jg, a.deburr = Ws, a.defaultTo = Eh, a.divide = jh, a.endsWith = th, a.eq = Hn, a.escape = rh, a.escapeRegExp = ih, a.every = cg, a.find = pg, a.findIndex = ss, a.findKey = $v, a.findLast = gg, a.findLastIndex = us, a.findLastKey = Iv, a.floor = em, a.forEach = vs, a.forEachRight = hs, a.forIn = Av, a.forInRight = Rv, a.forOwn = Ev, a.forOwnRight = Vv, a.get = qo, a.gt = Xg, a.gte = Qg, a.has = Lv, a.hasIn = Go, a.head = cs, a.identity = kn, a.includes = bg, a.indexOf = gp, a.inRange = jv, a.invoke = Wv, a.isArguments = Et, a.isArray = ke, a.isArrayBuffer = jg, a.isArrayLike = yn, a.isArrayLikeObject = Je, a.isBoolean = ev, a.isBuffer = yt, a.isDate = nv, a.isElement = tv, a.isEmpty = rv, a.isEqual = iv, a.isEqualWith = ov, a.isError = Fo, a.isFinite = av, a.isFunction = lt, a.isInteger = Ss, a.isLength = fi, a.isMap = Cs, a.isMatch = lv, a.isMatchWith = sv, a.isNaN = uv, a.isNative = dv, a.isNil = fv, a.isNull = cv, a.isNumber = $s, a.isObject = He, a.isObjectLike = Ze, a.isPlainObject = br, a.isRegExp = zo, a.isSafeInteger = pv, a.isSet = Is, a.isString = pi, a.isSymbol = In, a.isTypedArray = Kt, a.isUndefined = gv, a.isWeakMap = vv, a.isWeakSet = hv, a.join = bp, a.kebabCase = oh, a.last = Pn, a.lastIndexOf = yp, a.lowerCase = ah, a.lowerFirst = lh, a.lt = mv, a.lte = _v, a.max = nm, a.maxBy = tm, a.mean = rm, a.meanBy = im, a.min = om, a.minBy = am, a.stubArray = Xo, a.stubFalse = Qo, a.stubObject = Gh, a.stubString = Hh, a.stubTrue = Kh, a.multiply = lm, a.nth = wp, a.noConflict = Wh, a.noop = Jo, a.now = ui, a.pad = sh, a.padEnd = uh, a.padStart = dh, a.parseInt = ch, a.random = eh, a.reduce = Sg, a.reduceRight = Cg, a.repeat = fh, a.replace = ph, a.result = qv, a.round = sm, a.runInContext = w, a.sample = Ig, a.size = Eg, a.snakeCase = gh, a.some = Vg, a.sortedIndex = Ap, a.sortedIndexBy = Rp, a.sortedIndexOf = Ep, a.sortedLastIndex = Vp, a.sortedLastIndexBy = Tp, a.sortedLastIndexOf = Op, a.startCase = hh, a.startsWith = mh, a.subtract = um, a.sum = dm, a.sumBy = cm, a.template = _h, a.times = Yh, a.toFinite = st, a.toInteger = Se, a.toLength = Rs, a.toLower = bh, a.toNumber = Mn, a.toSafeInteger = bv, a.toString = Le, a.toUpper = yh, a.trim = wh, a.trimEnd = kh, a.trimStart = xh, a.truncate = Sh, a.unescape = Ch, a.uniqueId = Jh, a.upperCase = $h, a.upperFirst = Ho, a.each = vs, a.eachRight = hs, a.first = cs, Zo(a, (function() {
          var e = {};
          return Yn(a, function(n, t) {
            De.call(a.prototype, t) || (e[t] = n);
          }), e;
        })(), { chain: !1 }), a.VERSION = m, On(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          a[e].placeholder = a;
        }), On(["drop", "take"], function(e, n) {
          Re.prototype[e] = function(t) {
            t = t === o ? 1 : en(Se(t), 0);
            var r = this.__filtered__ && !n ? new Re(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = pn(t, r.__takeCount__) : r.__views__.push({
              size: pn(t, Z),
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
          return this.filter(kn);
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
          return this.take(Z);
        }, Yn(Re.prototype, function(e, n) {
          var t = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), i = a[r ? "take" + (n == "last" ? "Right" : "") : n], l = r || /^find/.test(n);
          i && (a.prototype[n] = function() {
            var u = this.__wrapped__, v = r ? [1] : arguments, k = u instanceof Re, W = v[0], P = k || ke(u), F = function(Ae) {
              var Ee = i.apply(a, pt([Ae], v));
              return r && Q ? Ee[0] : Ee;
            };
            P && t && typeof W == "function" && W.length != 1 && (k = P = !1);
            var Q = this.__chain__, le = !!this.__actions__.length, ge = l && !Q, Ce = k && !le;
            if (!l && P) {
              u = Ce ? u : new Re(this);
              var ve = e.apply(u, v);
              return ve.__actions__.push({ func: li, args: [F], thisArg: o }), new Dn(ve, Q);
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
            De.call(Ft, r) || (Ft[r] = []), Ft[r].push({ name: n, func: t });
          }
        }), Ft[ei(o, C).name] = [{
          name: "wrapper",
          func: o
        }], Re.prototype.clone = Sc, Re.prototype.reverse = Cc, Re.prototype.value = $c, a.prototype.at = tg, a.prototype.chain = rg, a.prototype.commit = ig, a.prototype.next = og, a.prototype.plant = lg, a.prototype.reverse = sg, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = ug, a.prototype.first = a.prototype.head, ar && (a.prototype[ar] = ag), a;
      }), Mt = rc();
      kt ? ((kt.exports = Mt)._ = Mt, Ki._ = Mt) : un._ = Mt;
    }).call(L0);
  })(wr, wr.exports)), wr.exports;
}
var B0 = D0();
const W0 = { class: "editor" }, P0 = { class: "editor__fields" }, M0 = { class: "editor__actions" }, U0 = {
  key: 1,
  class: "editor__preview"
}, N0 = /* @__PURE__ */ Ge({
  __name: "DatasourceEditor",
  props: {
    itemId: {},
    view: { default: "settings" }
  },
  emits: ["close"],
  setup(c, { emit: _ }) {
    const o = c, m = X({}), y = xe(Ri), I = xe(Nn), f = vn(I, (O) => O.connections), S = vn(I, (O) => O.datasources), b = K(
      () => y.getDatasourceIdentifiers(m.value.type)?.icon ?? "database"
    ), d = K(() => {
      const O = /* @__PURE__ */ new Set();
      for (const C of S.value)
        for (const T of C.tags ?? []) O.add(T);
      return [...O].sort();
    }), g = K(() => y.registeredDatasources);
    Xn(() => {
      const O = y.getDatasourceModel(o.itemId);
      m.value = O ? {
        uid: O.uid,
        name: O.name,
        type: O.type,
        icon: O.icon ?? "",
        tags: [...O.tags ?? []],
        config: B0.cloneDeep(O.config ?? {})
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
      q("close");
    }, D = K(() => {
      const O = y.getDatasourceIdentifiers(m.value.type);
      return O ? y.resolveIdentifier(O.Preview) : null;
    }), U = K(() => {
      const O = y.getDatasourceIdentifiers(m.value.type);
      return O ? y.resolveIdentifier(O.Settings) : null;
    }), z = (O) => {
      m.value.config = O;
    }, q = _;
    return (O, C) => (p(), x("div", W0, [
      c.view === "settings" ? (p(), x(he, { key: 0 }, [
        s("div", P0, [
          E(h(nn), {
            modelValue: m.value.uid,
            "onUpdate:modelValue": C[0] || (C[0] = (T) => m.value.uid = T),
            label: "UID",
            readonly: ""
          }, null, 8, ["modelValue"]),
          E(h(nn), {
            modelValue: m.value.name,
            "onUpdate:modelValue": C[1] || (C[1] = (T) => m.value.name = T),
            label: "Name"
          }, null, 8, ["modelValue"]),
          E(h(Un), {
            modelValue: m.value.type,
            "onUpdate:modelValue": C[2] || (C[2] = (T) => m.value.type = T),
            label: "Typ",
            options: g.value
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
          (p(), $e(Qn(U.value), {
            config: m.value.config,
            connections: h(f),
            dataSources: h(S)
          }, null, 8, ["config", "connections", "dataSources"]))
        ]),
        s("div", M0, [
          E(h(ye), {
            intent: "quiet",
            onClick: C[5] || (C[5] = (T) => O.$emit("close"))
          }, {
            default: te(() => [...C[6] || (C[6] = [
              ue("Schließen", -1)
            ])]),
            _: 1
          }),
          E(h(ye), {
            intent: "primary",
            onClick: V
          }, {
            default: te(() => [...C[7] || (C[7] = [
              ue("Speichern", -1)
            ])]),
            _: 1
          })
        ])
      ], 64)) : (p(), x("div", U0, [
        (p(), $e(Qn(D.value), {
          "data-source": m.value,
          key: m.value.uid,
          onUpdateConfig: z
        }, null, 40, ["data-source"]))
      ]))
    ]));
  }
}), F0 = /* @__PURE__ */ Ke(N0, [["__scopeId", "data-v-41f0a44b"]]), z0 = { class: "editor" }, q0 = { class: "editor__fields" }, G0 = { class: "editor__actions" }, H0 = /* @__PURE__ */ Ge({
  __name: "ConnectionEditor",
  props: {
    itemId: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(c, { emit: _ }) {
    const o = c, m = _, y = X({}), I = xe(Ai), f = K(() => I.registeredConnections);
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
    const S = K(
      () => I.getConnectionIdentifiers(y.value.type)?.icon ?? "link"
    ), b = K(() => {
      const V = /* @__PURE__ */ new Set();
      for (const D of I.getConnections())
        for (const U of D.tags ?? []) V.add(U);
      return [...V].sort();
    }), d = K(() => {
      const V = I.getConnectionIdentifiers(y.value.type);
      return V ? I.resolveIdentifier(V.Settings) : null;
    }), g = () => {
      const V = I.getConnectionModel(o.itemId);
      if (V) {
        V.name = y.value.name, V.type = y.value.type, V.icon = y.value.icon?.trim() || void 0, V.tags.clear();
        for (const D of y.value.tags ?? []) V.tags.add(D);
        V.config = y.value.config, I.saveConnection(V);
      }
      m("close");
    };
    return (V, D) => (p(), x("div", z0, [
      s("div", q0, [
        E(h(nn), {
          modelValue: y.value.uid,
          "onUpdate:modelValue": D[0] || (D[0] = (U) => y.value.uid = U),
          label: "UID",
          readonly: ""
        }, null, 8, ["modelValue"]),
        E(h(nn), {
          modelValue: y.value.name,
          "onUpdate:modelValue": D[1] || (D[1] = (U) => y.value.name = U),
          label: "Name"
        }, null, 8, ["modelValue"]),
        E(h(Un), {
          modelValue: y.value.type,
          "onUpdate:modelValue": D[2] || (D[2] = (U) => y.value.type = U),
          label: "Typ",
          options: f.value
        }, null, 8, ["modelValue", "options"]),
        E(h(Ci), {
          modelValue: y.value.icon,
          "onUpdate:modelValue": D[3] || (D[3] = (U) => y.value.icon = U),
          label: "Symbol",
          fallback: S.value,
          hint: "Ohne eigenes Symbol steht hier das des Typs."
        }, null, 8, ["modelValue", "fallback"]),
        E(Ei, {
          modelValue: y.value.tags,
          "onUpdate:modelValue": D[4] || (D[4] = (U) => y.value.tags = U),
          label: "Schlagworte",
          hint: "Wofür diese Verbindung da ist — danach lässt sich suchen.",
          known: b.value
        }, null, 8, ["modelValue", "known"]),
        (p(), $e(Qn(d.value), {
          config: y.value.config
        }, null, 8, ["config"]))
      ]),
      s("div", G0, [
        E(h(ye), {
          intent: "quiet",
          onClick: D[5] || (D[5] = (U) => V.$emit("close"))
        }, {
          default: te(() => [...D[6] || (D[6] = [
            ue("Schließen", -1)
          ])]),
          _: 1
        }),
        E(h(ye), {
          intent: "primary",
          onClick: g
        }, {
          default: te(() => [...D[7] || (D[7] = [
            ue("Speichern", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), K0 = /* @__PURE__ */ Ke(H0, [["__scopeId", "data-v-0fad9a41"]]), Y0 = { class: "data-page" }, Z0 = { class: "data-page__tree" }, J0 = { class: "data-page__detail" }, X0 = {
  key: 0,
  class: "data-page__nothing"
}, Q0 = { class: "detail__head" }, j0 = { class: "detail__what" }, ey = { class: "detail__name" }, ny = {
  key: 0,
  class: "detail__sub"
}, ty = {
  key: 0,
  class: "detail__usage"
}, ry = { class: "detail__body" }, iy = /* @__PURE__ */ Ge({
  __name: "ConnectionsAndData",
  setup(c) {
    const _ = xe(Nn), o = vn(_, (z) => z.connections), m = vn(_, (z) => z.datasources), { usageOf: y, usageLabel: I } = $u(), f = X(void 0), S = X("preview"), b = xe("endpointfinder", null), d = () => b?.(), g = ru(() => {
      const z = f.value;
      if (z)
        return z.type === "Connection" ? o.value.find((q) => q.uid === z.itemId) : m.value.find((q) => q.uid === z.itemId);
    }), V = K(() => {
      const z = g.value;
      return z ? f.value?.type === "Connection" ? z.type ?? "" : [z.type, z.connection?.name].filter(Boolean).join(" · ") : "";
    }), D = K(() => f.value?.type !== "DataSource" || !f.value.itemId ? "" : I(y(f.value.itemId))), U = K(
      () => f.value?.type === "DataSource" ? [
        { id: "preview", label: "Vorschau" },
        { id: "settings", label: "Einstellungen" }
      ] : [{ id: "settings", label: "Einstellungen" }]
    );
    return ln(f, (z) => {
      S.value = z?.type === "DataSource" ? "preview" : "settings";
    }), (z, q) => (p(), x("div", Y0, [
      s("aside", Z0, [
        E(O0, {
          modelValue: f.value,
          "onUpdate:modelValue": q[0] || (q[0] = (O) => f.value = O),
          onFindEndpoints: d,
          onView: q[1] || (q[1] = (O) => S.value = O)
        }, null, 8, ["modelValue"])
      ]),
      s("section", J0, [
        f.value ? (p(), x(he, { key: 1 }, [
          s("header", Q0, [
            s("div", j0, [
              s("h1", ey, N(h(g)?.name ?? f.value.itemId), 1),
              V.value ? (p(), x("span", ny, N(V.value), 1)) : ee("", !0)
            ]),
            D.value ? (p(), x("span", ty, "Verwendet in " + N(D.value), 1)) : ee("", !0)
          ]),
          E(h(Em), {
            modelValue: S.value,
            "onUpdate:modelValue": q[2] || (q[2] = (O) => S.value = O),
            tabs: U.value,
            label: "Ansicht der Auswahl"
          }, null, 8, ["modelValue", "tabs"]),
          s("div", ry, [
            f.value.type === "Connection" ? (p(), $e(K0, {
              key: f.value.itemId,
              "item-id": f.value.itemId,
              onClose: q[3] || (q[3] = (O) => f.value = void 0)
            }, null, 8, ["item-id"])) : (p(), $e(F0, {
              key: `${f.value.itemId}-${S.value}`,
              "item-id": f.value.itemId,
              view: S.value === "preview" ? "preview" : "settings",
              onClose: q[4] || (q[4] = (O) => f.value = void 0)
            }, null, 8, ["item-id", "view"]))
          ])
        ], 64)) : (p(), x("p", X0, " Wähle links eine Verbindung oder eine Datenquelle. "))
      ])
    ]));
  }
}), oy = /* @__PURE__ */ Ke(iy, [["__scopeId", "data-v-2b44b5f1"]]), ay = { class: "pages" }, ly = { class: "pages__panel" }, sy = { class: "pages__bar" }, uy = { class: "pages__title" }, dy = {
  key: 0,
  class: "pages__count"
}, cy = {
  key: 0,
  class: "pages__of"
}, fy = { class: "pages__tools" }, py = { class: "pages__body" }, gy = { class: "pages__grid" }, vy = ["aria-label", "onClick", "onKeydown"], hy = { class: "page__body" }, my = { class: "page__name" }, _y = { class: "page__meta" }, by = {
  key: 0,
  class: "page__usage"
}, yy = {
  key: 1,
  class: "page__kinds"
}, wy = {
  key: 0,
  class: "page__kind"
}, ky = ["aria-label", "onClick"], xy = {
  key: 0,
  class: "pages__nomatch"
}, Sy = /* @__PURE__ */ Ge({
  __name: "BoardPages",
  setup(c) {
    const _ = $i(), o = X(""), { usageOf: m, byUsage: y, lastOpenedLabel: I } = ua(), f = xe(Nn), S = xe(er), b = vn(f, (q) => q.board?.pages), d = K(() => (b.value, f.board)), g = K(() => (b.value, S ? S.getAllPageIds().slice().sort(y).map(
      (q) => ca(
        q,
        S.getPage(q),
        S.getPage(q)?.layout?.toArray() ?? [],
        S.getPage(q)?.widgets?.toArray() ?? []
      )
    ) : [])), V = K(() => {
      const q = o.value.trim().toLowerCase();
      return q ? g.value.filter(
        (O) => O.name.toLowerCase().includes(q) || O.description.toLowerCase().includes(q) || O.kinds.some((C) => C.toLowerCase().includes(q))
      ) : g.value;
    });
    function D(q) {
      _.push(`/page/${q}`);
    }
    function U(q) {
      _.push(`/page/${q}/edit`);
    }
    function z() {
      if (!S) return;
      const q = sa();
      S.registerPage({
        id: q,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), _.push(`/page/${q}/edit`);
    }
    return (q, O) => (p(), x("div", ay, [
      s("div", ly, [
        s("header", sy, [
          s("h1", uy, [
            O[1] || (O[1] = ue(" Seiten ", -1)),
            g.value.length ? (p(), x("span", dy, N(g.value.length), 1)) : ee("", !0)
          ]),
          d.value?.name ? (p(), x("p", cy, "in " + N(d.value.name), 1)) : ee("", !0),
          s("div", fy, [
            Qt(s("input", {
              "onUpdate:modelValue": O[0] || (O[0] = (C) => o.value = C),
              class: "pages__search",
              type: "search",
              placeholder: "Seiten filtern",
              "aria-label": "Seiten filtern"
            }, null, 512), [
              [ta, o.value]
            ]),
            E(h(ye), {
              intent: "primary",
              size: "sm",
              onClick: z
            }, {
              default: te(() => [...O[2] || (O[2] = [
                ue("Neue Seite", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        s("div", py, [
          s("div", gy, [
            (p(!0), x(he, null, We(V.value, (C) => (p(), x("article", {
              key: C.id,
              class: "page",
              tabindex: "0",
              role: "button",
              "aria-label": `Seite ${C.name} öffnen`,
              onClick: (T) => D(C.id),
              onKeydown: [
                jt((T) => D(C.id), ["enter"]),
                jt(an((T) => D(C.id), ["prevent"]), ["space"])
              ]
            }, [
              E(da, {
                items: C.items,
                "type-by-id": C.typeById
              }, null, 8, ["items", "type-by-id"]),
              s("div", hy, [
                s("h2", my, N(C.name), 1),
                s("p", _y, [
                  ue(N(C.widgetCount) + " " + N(C.widgetCount === 1 ? "Widget" : "Widgets") + " ", 1),
                  C.sourceCount ? (p(), x(he, { key: 0 }, [
                    ue(" · " + N(C.sourceCount) + " " + N(C.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1)
                  ], 64)) : ee("", !0)
                ]),
                h(m)(C.id) ? (p(), x("p", by, N(h(m)(C.id)?.count) + "× geöffnet · zuletzt " + N(h(I)(C.id)), 1)) : ee("", !0),
                C.kinds.length ? (p(), x("ul", yy, [
                  (p(!0), x(he, null, We(C.kinds.slice(0, 3), (T) => (p(), x("li", {
                    key: T,
                    class: "page__kind"
                  }, N(T), 1))), 128)),
                  C.kinds.length > 3 ? (p(), x("li", wy, " +" + N(C.kinds.length - 3), 1)) : ee("", !0)
                ])) : ee("", !0)
              ]),
              s("button", {
                class: "page__edit",
                type: "button",
                "aria-label": `Seite ${C.name} bearbeiten`,
                onClick: an((T) => U(C.id), ["stop"])
              }, " Bearbeiten ", 8, ky)
            ], 40, vy))), 128)),
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
            g.value.length && V.value.length === 0 ? (p(), x("p", xy, " Keine Seite passt zu „" + N(o.value) + "“. ", 1)) : ee("", !0)
          ])
        ])
      ])
    ]));
  }
}), Cy = /* @__PURE__ */ Ke(Sy, [["__scopeId", "data-v-21364f0b"]]), $y = { class: "add_widget_window" }, Iy = { class: "add_widget_window__scroll" }, Ay = { class: "widgets_grid-icon" }, Ry = ["src"], Ey = { class: "widgets_grid-name" }, Vy = /* @__PURE__ */ Ge({
  __name: "AddWidgetWindow",
  setup(c) {
    const _ = X(""), o = X(""), m = vn(xe(Nn), (d) => d.datasources), y = (d) => {
      const g = document.createElement("div");
      document.body.appendChild(g), d.dataTransfer?.setDragImage(g, 0, 0), setTimeout(() => {
        document.body.removeChild(g);
      }, 0);
    }, I = xe(du);
    console.log(I.getAllWidgets());
    const f = Object.entries(I.getAllWidgets()).map(([d, g]) => ({ type: d, name: g.name, icon: g.icon })), S = K(() => f);
    K(() => [
      "None",
      ...m.value.map((d) => d.type).filter((d, g, V) => g === V.indexOf(d))
    ]);
    const b = K(() => m.value.filter((d) => d.type === o.value).map((d) => ({ uid: d.uid })));
    return ln(o, (d) => {
      !d || d === "None" ? _.value = "" : b.value.map((V) => V.uid).includes(_.value) || (_.value = "");
    }), (d, g) => (p(), x("div", $y, [
      s("div", Iy, [
        E(h(Jm), {
          class: "widgets_grid",
          list: S.value,
          group: { name: "widgets", pull: "clone", put: !1 },
          itemKey: "type"
        }, {
          item: te(({ element: V }) => [
            s("div", {
              class: "widgets_grid-item",
              draggable: "true",
              onDragstart: g[0] || (g[0] = (D) => y(D))
            }, [
              s("span", Ay, [
                s("img", {
                  src: V.icon,
                  alt: ""
                }, null, 8, Ry)
              ]),
              s("span", Ey, N(V.name), 1)
            ], 32)
          ]),
          _: 1
        }, 8, ["list"])
      ])
    ]));
  }
}), Ty = /* @__PURE__ */ Ke(Vy, [["__scopeId", "data-v-3ac9fb06"]]), Oy = {
  class: "overlay",
  role: "dialog",
  "aria-modal": "true",
  "aria-label": "Widget-Einstellungen"
}, Ly = { class: "stage" }, Dy = { class: "stage__head" }, By = { class: "stage__name" }, Wy = { class: "stage__uid" }, Py = {
  class: "seg",
  role: "group",
  "aria-label": "Vorschaugröße"
}, My = { class: "stage__bar" }, Uy = { class: "stage__body" }, Ny = {
  class: "tabs",
  role: "tablist",
  "aria-label": "Einstellungen"
}, Fy = ["aria-selected"], zy = { class: "tab__n" }, qy = ["aria-selected"], Gy = ["aria-selected", "onClick"], Hy = ["aria-selected"], Ky = ["aria-selected"], Yy = { class: "tab__n" }, Zy = ["aria-selected"], Jy = { class: "tab__n" }, Xy = {
  key: 0,
  class: "fields"
}, Qy = {
  key: 0,
  class: "bound"
}, jy = { class: "bound__name" }, ew = { class: "bound__var" }, nw = {
  key: 1,
  class: "note"
}, tw = { class: "foot" }, rw = ":scope > [data-section], :scope > .va-collapse", iw = /* @__PURE__ */ Ge({
  __name: "WidgetSettingsOverlay",
  props: /* @__PURE__ */ jn({
    boardSize: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ jn(["close"], ["update:modelValue"]),
  setup(c, { emit: _ }) {
    const o = _, m = wt(c, "modelValue"), y = c, I = vn(xe(Nn), ($) => $.datasources), S = xe(du).getAllWidgets();
    xe("i18n");
    const b = X("look"), d = K(() => {
      const $ = m.value?.type;
      return $ ? S[$]?.settingsForm : void 0;
    }), g = K(
      () => !!(m.value?.type && S[m.value.type]?.settingsComponent)
    ), V = K(() => !!d.value && g.value), D = K(() => !!d.value || g.value);
    ln(D, ($) => {
      !$ && b.value === "look" && (b.value = "data");
    }, { immediate: !0 });
    const U = X(), z = X([]), q = X(0);
    function O($) {
      return $ ? [...$.querySelectorAll(rw)] : [];
    }
    function C() {
      return O(U.value);
    }
    function T($) {
      const A = $.dataset.section;
      if (A) return A;
      const M = $.querySelector(".va-collapse__header-wrapper");
      return M ? [...M.querySelectorAll("*")].filter((Te) => !Te.classList.contains("va-icon") && Te.children.length === 0).map((Te) => (Te.textContent ?? "").trim()).filter((Te) => Te && !/^(expand_more|expand_less|add_circle)$/.test(Te))[0] ?? "" : "";
    }
    function ie($) {
      return $.className.includes("--expanded");
    }
    function ne($) {
      q.value = $, C().forEach((A, M) => {
        const _e = M === $;
        if (A.classList.contains("va-collapse")) {
          const Te = A.querySelector(".va-collapse__header-wrapper");
          Te && (Te.style.display = "none"), _e !== ie(A) && Te?.click();
        }
        A.style.display = _e ? "" : "none";
      });
    }
    async function B() {
      await Sr();
      const $ = C();
      z.value = $.map((A, M) => ({ label: T(A) || `Abschnitt ${M + 1}`, index: M })), $.length && ne(Math.min(q.value, $.length - 1));
    }
    function Y($) {
      b.value = "look", ne($);
    }
    const me = X();
    async function Be() {
      const $ = d.value?.unmodelledSections, A = me.value;
      if (!(!$ || !A)) {
        await Sr();
        for (const M of O(A))
          M.style.display = $.includes(T(M)) ? "" : "none";
      }
    }
    ln(b, ($) => {
      $ === "rest" && Be();
    });
    let tn = {
      wrapperConfig: {},
      config: {}
    };
    function Pe($) {
      return m.value?.[$];
    }
    function rn($) {
      if ($)
        return typeof $.toArray == "function" ? $.toArray() : Array.isArray($) ? [...$] : void 0;
    }
    function ce() {
      tn = { wrapperConfig: {}, config: {} };
      for (const $ of ["wrapperConfig", "config"]) {
        const A = Pe($);
        if (A)
          for (const [M, _e] of Object.entries(A)) {
            const Te = rn(_e), Vn = !!_e && typeof _e == "object" && "value" in _e;
            tn[$][M] = {
              field: _e,
              hasValue: Vn,
              value: Vn ? _e.value : void 0,
              list: Te
            };
          }
      }
    }
    function fe() {
      for (const $ of ["wrapperConfig", "config"]) {
        const A = Pe($);
        if (A)
          for (const [M, _e] of Object.entries(tn[$]))
            try {
              if (_e.list) {
                const xn = A[M];
                if (xn && typeof xn.clear == "function") {
                  xn.clear();
                  for (const Fn of _e.list) xn.add(Fn);
                } else Array.isArray(xn) && xn.splice(0, xn.length, ..._e.list);
                continue;
              }
              const Te = A[M], Vn = !!Te && typeof Te == "object" && "value" in Te;
              _e.hasValue && Vn ? Te.value = _e.value : A[M] = _e.field;
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
    const ae = X(!1), we = K(() => ae.value || !y.boardSize ? { width: "100%", height: "100%" } : {
      width: `${y.boardSize.width}px`,
      height: `${y.boardSize.height}px`,
      maxWidth: "100%",
      maxHeight: "100%"
    }), Ye = K(
      () => y.boardSize ? `${Math.round(y.boardSize.width)} × ${Math.round(y.boardSize.height)} px, wie im Board` : "Größe des Boards nicht bekannt"
    ), sn = X(Z());
    let Qe = !1;
    function Z() {
      const $ = Number(localStorage.getItem("daanse.board.widgetSettingsWidth"));
      return Number.isFinite($) && $ >= 320 ? $ : 400;
    }
    function j($) {
      Qe = !0, $.target.setPointerCapture?.($.pointerId);
    }
    function H($) {
      if (!Qe) return;
      const A = window.innerWidth - $.clientX;
      sn.value = Math.min(Math.max(A, 320), Math.max(window.innerWidth - 360, 360));
    }
    function J() {
      if (Qe) {
        Qe = !1;
        try {
          localStorage.setItem("daanse.board.widgetSettingsWidth", String(Math.round(sn.value)));
        } catch {
        }
      }
    }
    function se($) {
      sn.value = Math.min(Math.max(sn.value + $, 320), window.innerWidth - 360), J();
    }
    const Fe = K(() => {
      const $ = [], A = [
        ["Rahmen", m.value?.wrapperConfig],
        ["Darstellung", m.value?.config]
      ];
      for (const [M, _e] of A)
        for (const [Te, Vn] of Object.entries(_e ?? {})) {
          const xn = Vn?.variable;
          xn && $.push({ group: M, name: Te, variable: String(xn?.name ?? xn) });
        }
      return $;
    }), et = K(() => Object.keys(m.value?.wrapperConfig ?? {}).length), En = K(() => m.value?.config?.datasourceId ? 1 : 0);
    function G($) {
      $.key === "Escape" && oe();
    }
    return ln(b, ($) => {
      $ === "look" && B();
    }), Xn(() => {
      ce(), B(), window.addEventListener("keydown", G), window.addEventListener("pointermove", H), window.addEventListener("pointerup", J);
    }), Si(() => {
      window.removeEventListener("keydown", G), window.removeEventListener("pointermove", H), window.removeEventListener("pointerup", J);
    }), ($, A) => (p(), $e(aa, { to: "body" }, [
      s("div", {
        class: "scrim",
        onClick: A[14] || (A[14] = an((M) => oe(), ["self"]))
      }, [
        s("section", Oy, [
          s("div", Ly, [
            s("header", Dy, [
              s("span", By, N(m.value?.type ?? "Widget"), 1),
              s("code", Wy, N(m.value?.uid), 1),
              A[15] || (A[15] = s("span", { class: "stage__spacer" }, null, -1)),
              s("div", Py, [
                s("button", {
                  type: "button",
                  class: Ve({ on: !ae.value }),
                  onClick: A[0] || (A[0] = (M) => ae.value = !1)
                }, "Boardgröße", 2),
                s("button", {
                  type: "button",
                  class: Ve({ on: ae.value }),
                  onClick: A[1] || (A[1] = (M) => ae.value = !0)
                }, "Füllen", 2)
              ])
            ]),
            s("div", My, N(ae.value ? "Auf die Fläche gestreckt" : Ye.value), 1),
            s("div", Uy, [
              s("div", {
                class: "preview",
                style: Ot(we.value)
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
            onPointerdown: an(j, ["prevent"]),
            onKeydown: [
              A[2] || (A[2] = jt(an((M) => se(16), ["prevent"]), ["left"])),
              A[3] || (A[3] = jt(an((M) => se(-16), ["prevent"]), ["right"]))
            ]
          }, null, 32),
          s("div", {
            class: "side",
            style: Ot({ width: sn.value + "px" })
          }, [
            s("nav", Ny, [
              s("button", {
                type: "button",
                role: "tab",
                "aria-selected": b.value === "data",
                class: Ve(["tab", { on: b.value === "data" }]),
                onClick: A[4] || (A[4] = (M) => b.value = "data")
              }, [
                A[16] || (A[16] = ue(" Daten ", -1)),
                s("span", zy, N(En.value), 1)
              ], 10, Fy),
              !z.value.length && D.value ? (p(), x("button", {
                key: 0,
                type: "button",
                role: "tab",
                "aria-selected": b.value === "look",
                class: Ve(["tab", { on: b.value === "look" }]),
                onClick: A[5] || (A[5] = (M) => b.value = "look")
              }, " Darstellung ", 10, qy)) : ee("", !0),
              (p(!0), x(he, null, We(z.value, (M) => (p(), x("button", {
                key: M.index,
                type: "button",
                role: "tab",
                "aria-selected": b.value === "look" && q.value === M.index,
                class: Ve(["tab", { on: b.value === "look" && q.value === M.index }]),
                onClick: (_e) => Y(M.index)
              }, N(M.label), 11, Gy))), 128)),
              V.value ? (p(), x("button", {
                key: 1,
                type: "button",
                role: "tab",
                "aria-selected": b.value === "rest",
                class: Ve(["tab", { on: b.value === "rest" }]),
                onClick: A[6] || (A[6] = (M) => b.value = "rest")
              }, " Weiteres ", 10, Hy)) : ee("", !0),
              s("button", {
                type: "button",
                role: "tab",
                "aria-selected": b.value === "frame",
                class: Ve(["tab", { on: b.value === "frame" }]),
                onClick: A[7] || (A[7] = (M) => b.value = "frame")
              }, [
                A[17] || (A[17] = ue(" Rahmen ", -1)),
                s("span", Yy, N(et.value), 1)
              ], 10, Ky),
              s("button", {
                type: "button",
                role: "tab",
                "aria-selected": b.value === "variables",
                class: Ve(["tab", { on: b.value === "variables" }]),
                onClick: A[8] || (A[8] = (M) => b.value = "variables")
              }, [
                A[18] || (A[18] = ue(" Variablen ", -1)),
                s("span", Jy, N(Fe.value.length), 1)
              ], 10, Zy)
            ]),
            m.value ? (p(), x("div", Xy, [
              b.value === "data" ? (p(), x(he, { key: 0 }, [
                E(h(Un), {
                  modelValue: m.value.config.datasourceId,
                  "onUpdate:modelValue": A[9] || (A[9] = (M) => m.value.config.datasourceId = M),
                  label: "Datenquelle",
                  class: "pick",
                  options: h(I),
                  clearable: ""
                }, null, 8, ["modelValue", "options"]),
                A[19] || (A[19] = s("p", { class: "note" }, " Woher dieses Widget seine Werte nimmt. Ohne Datenquelle zeigt es nur, was fest eingestellt ist. ", -1))
              ], 64)) : ee("", !0),
              Qt(s("div", {
                ref_key: "lookHost",
                ref: U
              }, [
                d.value ? (p(), $e(h(wi), {
                  key: 0,
                  modelValue: m.value.config,
                  "onUpdate:modelValue": A[10] || (A[10] = (M) => m.value.config = M),
                  create: d.value.create,
                  "ui-model-xmi": d.value.xmi,
                  "domain-package": d.value.ePackage(),
                  "ui-model-uri": d.value.uri,
                  "entry-forms": d.value.entryForms
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : (p(), $e(Qn(h(S)[m.value.type ?? ""]?.settingsComponent), {
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
                ref: me
              }, [
                A[20] || (A[20] = s("p", { class: "rest__note" }, " Einstellungen, die dieses Widget selbst mitbringt und die sich nicht als Feld beschreiben lassen. ", -1)),
                V.value ? (p(), $e(Qn(h(S)[m.value.type ?? ""]?.settingsComponent), {
                  modelValue: m.value.config,
                  "onUpdate:modelValue": A[12] || (A[12] = (M) => m.value.config = M),
                  key: m.value.uid + "-rest",
                  dataSources: h(I)
                }, null, 8, ["modelValue", "dataSources"])) : ee("", !0)
              ], 512), [
                [jo, b.value === "rest"]
              ]),
              Qt(s("div", null, [
                E(h(wi), {
                  modelValue: m.value.wrapperConfig,
                  "onUpdate:modelValue": A[13] || (A[13] = (M) => m.value.wrapperConfig = M),
                  create: () => new (h(jm))(),
                  "ui-model-xmi": h(Qm),
                  "domain-package": h(Xm).eINSTANCE,
                  "ui-model-uri": "/wrapper-settings.ui.xmi"
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package"])
              ], 512), [
                [jo, b.value === "frame"]
              ]),
              b.value === "variables" ? (p(), x(he, { key: 1 }, [
                Fe.value.length ? (p(), x("table", Qy, [
                  A[21] || (A[21] = s("thead", null, [
                    s("tr", null, [
                      s("th", null, "Feld"),
                      s("th", null, "Bereich"),
                      s("th", null, "Variable")
                    ])
                  ], -1)),
                  s("tbody", null, [
                    (p(!0), x(he, null, We(Fe.value, (M) => (p(), x("tr", {
                      key: M.group + M.name
                    }, [
                      s("td", jy, N(M.name), 1),
                      s("td", null, N(M.group), 1),
                      s("td", ew, N(M.variable), 1)
                    ]))), 128))
                  ])
                ])) : (p(), x("p", nw, [...A[22] || (A[22] = [
                  ue(" Kein Feld dieses Widgets hängt an einer Variablen. Über das ", -1),
                  s("span", { class: "var-mark" }, "{x}", -1),
                  ue(" neben einem Feld lässt sich eines binden. ", -1)
                ])]))
              ], 64)) : ee("", !0)
            ])) : ee("", !0),
            s("footer", tw, [
              A[25] || (A[25] = s("span", { class: "foot__hint" }, "Änderungen greifen erst mit „Fertig“", -1)),
              A[26] || (A[26] = s("span", { class: "stage__spacer" }, null, -1)),
              E(h(ye), {
                size: "sm",
                onClick: oe
              }, {
                default: te(() => [...A[23] || (A[23] = [
                  ue("Verwerfen", -1)
                ])]),
                _: 1
              }),
              E(h(ye), {
                intent: "primary",
                size: "sm",
                onClick: de
              }, {
                default: te(() => [...A[24] || (A[24] = [
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
}), ow = /* @__PURE__ */ Ke(iw, [["__scopeId", "data-v-67bd2420"]]), aw = {
  class: "page-settings",
  "aria-label": "Seite einrichten"
}, lw = { class: "head" }, sw = { class: "body" }, uw = {
  key: 0,
  class: "missing"
}, dw = { class: "group" }, cw = { class: "group" }, fw = { class: "group" }, pw = { class: "group" }, gw = { class: "ident" }, vw = { class: "foot" }, hw = /* @__PURE__ */ Ge({
  __name: "PageSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ jn(["close"], ["update:modelValue"]),
  setup(c, { emit: _ }) {
    const o = wt(c, "modelValue"), m = _, y = xe(er), I = xe(Ii), f = X(null), S = K(() => I?.getAllLayouts() ?? []), b = K(
      () => S.value.find(
        (O) => O.id === "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      ) ?? S.value[0]
    ), d = K({
      get: () => f.value?.layoutId ?? "",
      set: (O) => {
        f.value && (f.value.layoutId = O);
      }
    }), g = K(
      () => f.value?.layoutId ? I?.getLayout(f.value.layoutId) : void 0
    ), V = [
      { uid: "auto", name: "Auto" },
      { uid: "cover", name: "Füllend" },
      { uid: "contain", name: "Einpassend" }
    ], D = [
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
    ], z = K(() => !!f.value?.backgroundImage?.trim());
    function q() {
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
    return Xn(q), ln(o, q), ln(
      f,
      () => {
        f.value && y?.updatePage(f.value);
      },
      { deep: !0 }
    ), (O, C) => (p(), x("aside", aw, [
      s("header", lw, [
        C[14] || (C[14] = s("h2", { class: "head__title" }, "Seite einrichten", -1)),
        s("button", {
          type: "button",
          class: "head__close",
          "aria-label": "Schließen",
          onClick: C[0] || (C[0] = (T) => m("close"))
        }, " × ")
      ]),
      s("div", sw, [
        f.value ? (p(), x(he, { key: 1 }, [
          s("section", dw, [
            C[15] || (C[15] = s("h3", { class: "group__label" }, "Seite", -1)),
            E(h(nn), {
              modelValue: f.value.name,
              "onUpdate:modelValue": C[1] || (C[1] = (T) => f.value.name = T),
              label: "Name"
            }, null, 8, ["modelValue"]),
            E(h(nn), {
              modelValue: f.value.description,
              "onUpdate:modelValue": C[2] || (C[2] = (T) => f.value.description = T),
              label: "Beschreibung"
            }, null, 8, ["modelValue"]),
            E(h(nn), {
              modelValue: f.value.icon,
              "onUpdate:modelValue": C[3] || (C[3] = (T) => f.value.icon = T),
              label: "Symbol",
              placeholder: "Name eines Material-Icons"
            }, null, 8, ["modelValue"])
          ]),
          s("section", cw, [
            C[16] || (C[16] = s("h3", { class: "group__label" }, "Layout", -1)),
            E(h(Un), {
              modelValue: d.value,
              "onUpdate:modelValue": C[4] || (C[4] = (T) => d.value = T),
              label: "Layout",
              options: S.value,
              "value-key": "id",
              "label-key": "name"
            }, null, 8, ["modelValue", "options"]),
            g.value?.settingsForm ? (p(), $e(h(wi), {
              key: 0,
              modelValue: f.value.layoutSettings,
              "onUpdate:modelValue": C[5] || (C[5] = (T) => f.value.layoutSettings = T),
              create: g.value.settingsForm.create,
              "ui-model-xmi": g.value.settingsForm.xmi,
              "domain-package": g.value.settingsForm.ePackage(),
              "ui-model-uri": g.value.settingsForm.uri,
              "entry-forms": g.value.settingsForm.entryForms
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : g.value?.settings ? (p(), $e(Qn(g.value.settings), {
              key: 1,
              modelValue: f.value.layoutSettings,
              "onUpdate:modelValue": C[6] || (C[6] = (T) => f.value.layoutSettings = T)
            }, null, 8, ["modelValue"])) : ee("", !0)
          ]),
          s("section", fw, [
            C[17] || (C[17] = s("h3", { class: "group__label" }, "Hintergrund", -1)),
            E(h(ou), {
              modelValue: f.value.backgroundColor,
              "onUpdate:modelValue": C[7] || (C[7] = (T) => f.value.backgroundColor = T),
              label: "Farbe",
              stacked: ""
            }, null, 8, ["modelValue"]),
            E(h(nn), {
              modelValue: f.value.backgroundImage,
              "onUpdate:modelValue": C[8] || (C[8] = (T) => f.value.backgroundImage = T),
              label: "Bild",
              placeholder: "Adresse eines Bildes"
            }, null, 8, ["modelValue"]),
            z.value ? (p(), x(he, { key: 0 }, [
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
                options: D
              }, null, 8, ["modelValue"]),
              E(h(Un), {
                modelValue: f.value.backgroundPosition,
                "onUpdate:modelValue": C[11] || (C[11] = (T) => f.value.backgroundPosition = T),
                label: "Position",
                options: U
              }, null, 8, ["modelValue"])
            ], 64)) : ee("", !0)
          ]),
          s("section", pw, [
            C[18] || (C[18] = s("h3", { class: "group__label" }, "Navigation", -1)),
            E(h(la), {
              modelValue: f.value.visibleInNavigation,
              "onUpdate:modelValue": C[12] || (C[12] = (T) => f.value.visibleInNavigation = T),
              label: "In der Navigation zeigen"
            }, null, 8, ["modelValue"])
          ]),
          s("p", gw, [
            C[19] || (C[19] = ue(" Kennung ", -1)),
            s("code", null, N(f.value.id), 1)
          ])
        ], 64)) : (p(), x("p", uw, " Diese Seite ist nicht mehr da. Wähle oben eine andere. "))
      ]),
      s("footer", vw, [
        E(h(ye), {
          intent: "primary",
          onClick: C[13] || (C[13] = (T) => m("close"))
        }, {
          default: te(() => [...C[20] || (C[20] = [
            ue("Fertig", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), mw = /* @__PURE__ */ Ke(hw, [["__scopeId", "data-v-9ea0fdd8"]]), _w = {
  ref: "board",
  class: "editor"
}, bw = { class: "report-container dottet" }, yw = /* @__PURE__ */ Ge({
  __name: "EditReport",
  setup(c) {
    const _ = X(""), m = Cr().params.pageid ?? "", y = Im(m || ""), I = y.widgets, f = X([]), S = xe("endpointfinder", null), b = () => {
      S();
    }, d = K(() => !!S), { settingsFor: g, closeSettings: V } = fu(), D = (C) => {
      _.value = C;
    }, U = K(() => {
      const C = I.value.find((T) => T.uid === _.value);
      return C || f.value.find((T) => T.uid === _.value);
    }), z = K(() => {
      const C = y.layout.value.find((T) => T.id === _.value);
      if (!(!C?.width || !C?.height))
        return { width: C.width, height: C.height };
    }), { visible: q, hide: O } = pu();
    return (C, T) => (p(), x("div", _w, [
      h(q) ? (p(), $e(h(Vm), {
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
        actions: te(() => [
          d.value ? (p(), x("button", {
            key: 0,
            type: "button",
            class: "palette__act",
            title: "Endpunkte suchen",
            onPointerdown: T[0] || (T[0] = an(() => {
            }, ["stop"])),
            onClick: T[1] || (T[1] = (ie) => b())
          }, [
            E(h(Ne), {
              name: "travel_explore",
              size: "sm"
            })
          ], 32)) : ee("", !0)
        ]),
        default: te(() => [
          E(Ty)
        ]),
        _: 1
      }, 8, ["onClose"])) : ee("", !0),
      s("div", bw, [
        E(xu, {
          pageId: h(m),
          onOpenWidgetSettings: D
        }, null, 8, ["pageId"]),
        E(_m, { duration: 150 }, {
          default: te(() => [
            h(g) ? (p(), $e(mw, {
              key: 0,
              modelValue: h(g),
              "onUpdate:modelValue": T[2] || (T[2] = (ie) => bm(g) ? g.value = ie : null),
              onClose: h(V)
            }, null, 8, ["modelValue", "onClose"])) : ee("", !0)
          ]),
          _: 1
        })
      ]),
      _.value && U.value ? (p(), $e(ow, {
        key: 1,
        modelValue: U.value,
        "onUpdate:modelValue": T[3] || (T[3] = (ie) => U.value = ie),
        "board-size": z.value,
        onClose: T[4] || (T[4] = (ie) => _.value = "")
      }, {
        preview: te(() => [
          E(h(e_), {
            widget: U.value,
            "edit-enabled": !1
          }, null, 8, ["widget"])
        ]),
        _: 1
      }, 8, ["modelValue", "board-size"])) : ee("", !0)
    ], 512));
  }
}), Qs = /* @__PURE__ */ Ke(yw, [["__scopeId", "data-v-bd444b0c"]]), Jt = Bm({
  history: Wm("/"),
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
      component: Cy
    },
    {
      path: "/datasources",
      name: "data",
      component: oy
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
}), ww = { class: "variables" }, kw = { class: "variables__head" }, xw = { class: "reach__title" }, Sw = { class: "reach__lead" }, Cw = {
  key: 0,
  class: "rows"
}, $w = { class: "row__name" }, Iw = { class: "row__type" }, Aw = { class: "row__value" }, Rw = { class: "row__tools" }, Ew = {
  key: 1,
  class: "reach__empty"
}, Vw = { class: "form" }, Tw = { class: "confirm__text" }, Ow = /* @__PURE__ */ Ge({
  __name: "Configuration",
  setup(c) {
    const _ = xe(uu), o = xe(Nn), m = xe(Symbol.for(js)), y = vn(o, (oe) => oe.variables), I = vn(o, (oe) => oe.board?.pages), f = X(0), S = () => f.value += 1;
    Xn(() => m?.on(Gs.VariableUpdated, S)), Si(() => m?.off(Gs.VariableUpdated, S));
    function b(oe) {
      f.value;
      try {
        const ae = _.getVariableById(oe.uid)?.value;
        return ae == null ? "" : typeof ae == "object" ? JSON.stringify(ae) : String(ae);
      } catch {
        return "nur auf seiner Seite lesbar";
      }
    }
    const d = K(() => {
      const oe = y.value.filter((we) => (we.scope ?? "global") === "global"), de = I.value.map((we) => ({
        title: we.name,
        lead: "Nur auf diesem Board",
        page: we,
        rows: y.value.filter((Ye) => Ye.scope === "page" && Ye.page === we)
      })).filter((we) => we.rows.length > 0), ae = y.value.filter((we) => we.scope === "page" && !we.page);
      return [
        { title: "Überall", lead: "Auf jedem Board lesbar", page: void 0, rows: oe },
        ...de,
        ...ae.length ? [{ title: "Ohne Board", lead: "Das Board dazu gibt es nicht mehr", page: void 0, rows: ae }] : []
      ];
    }), g = X([]);
    Xn(() => g.value = _.getRegisteredVariableTypes());
    const V = K(() => [
      { text: "Überall", value: "" },
      ...I.value.map((oe) => ({ text: oe.name, value: oe.id }))
    ]), D = [
      { text: "Von außen beschreibbar", value: "external-writable" },
      { text: "Nur auf seiner Seite", value: "page-only" },
      { text: "Nur lesbar", value: "readonly" }
    ], U = X(!1), z = X(null), q = X(""), O = X(""), C = X(""), T = X("external-writable"), ie = X({}), ne = K(() => z.value !== null), B = K(
      () => q.value ? _.getVariableIdentifiers(q.value)?.settingsForm : void 0
    ), Y = K(
      () => q.value ? _.getVariableIdentifiers(q.value)?.Settings : null
    );
    function me() {
      z.value = null, q.value = g.value[0] ?? "", O.value = "", C.value = "Variable " + Math.random().toString(36).substring(7), T.value = "external-writable", ie.value = {}, U.value = !0;
    }
    function Be(oe) {
      z.value = oe.uid, q.value = oe.type ?? "", O.value = oe.page?.id ?? "", C.value = oe.name, T.value = oe.accessMode ?? "external-writable";
      const de = _.getVariableById(oe.uid), { name: ae, ...we } = {
        ...oe.definition ?? {},
        ...de?.serialize?.() ?? {}
      };
      ie.value = we, U.value = !0;
    }
    function tn(oe) {
      if (!n_(oe)) return { ...oe ?? {} };
      const de = {};
      for (const ae of oe.eClass().getEAllStructuralFeatures()) {
        const we = oe.eGet(ae);
        we !== void 0 && (de[ae.getName()] = we);
      }
      return de;
    }
    function Pe() {
      ie.value = {};
    }
    function rn() {
      _.registerVariable(C.value, q.value, {
        ...tn(ie.value),
        uid: z.value ?? void 0,
        accessMode: T.value,
        scope: O.value ? "page" : "global",
        pageId: O.value || void 0
      }), U.value = !1, z.value = null;
    }
    const ce = X(null);
    function fe() {
      ce.value && _.removeVariable(ce.value.uid), ce.value = null;
    }
    return (oe, de) => (p(), x("div", ww, [
      s("header", kw, [
        de[11] || (de[11] = s("div", null, [
          s("h1", { class: "variables__title" }, "Variablen"),
          s("p", { class: "variables__lead" }, " Ein benannter Wert, den Widgets und Datenquellen lesen. Manche gelten überall, manche nur auf einem Board. ")
        ], -1)),
        E(h(ye), {
          intent: "primary",
          onClick: me
        }, {
          default: te(() => [
            E(h(Ne), {
              name: "add",
              size: "sm"
            }),
            de[10] || (de[10] = ue("Variable anlegen ", -1))
          ]),
          _: 1
        })
      ]),
      (p(!0), x(he, null, We(d.value, (ae) => (p(), x("section", {
        key: ae.title,
        class: "reach"
      }, [
        s("h2", xw, [
          ue(N(ae.title), 1),
          s("span", Sw, N(ae.lead), 1)
        ]),
        ae.rows.length ? (p(), x("ul", Cw, [
          (p(!0), x(he, null, We(ae.rows, (we) => (p(), x("li", {
            key: we.uid,
            class: "row"
          }, [
            s("span", $w, N(we.name), 1),
            s("span", Iw, N(we.type), 1),
            s("span", Aw, N(b(we)), 1),
            s("span", Rw, [
              E(h(ye), {
                intent: "quiet",
                size: "sm",
                title: "Variable bearbeiten",
                onClick: (Ye) => Be(we)
              }, {
                default: te(() => [
                  E(h(Ne), {
                    name: "edit",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"]),
              E(h(ye), {
                intent: "quiet",
                size: "sm",
                title: "Variable löschen",
                onClick: (Ye) => ce.value = we
              }, {
                default: te(() => [
                  E(h(Ne), {
                    name: "delete",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]))), 128))
        ])) : (p(), x("p", Ew, "Noch keine."))
      ]))), 128)),
      E(h(yi), {
        modelValue: U.value,
        "onUpdate:modelValue": de[7] || (de[7] = (ae) => U.value = ae),
        title: ne.value ? "Variable bearbeiten" : "Variable anlegen",
        size: "md"
      }, {
        actions: te(() => [
          E(h(ye), {
            intent: "quiet",
            onClick: de[6] || (de[6] = (ae) => U.value = !1)
          }, {
            default: te(() => [...de[12] || (de[12] = [
              ue("Abbrechen", -1)
            ])]),
            _: 1
          }),
          E(h(ye), {
            intent: "primary",
            onClick: rn
          }, {
            default: te(() => [
              ue(N(ne.value ? "Speichern" : "Anlegen"), 1)
            ]),
            _: 1
          })
        ]),
        default: te(() => [
          s("div", Vw, [
            E(h(Un), {
              modelValue: q.value,
              "onUpdate:modelValue": [
                de[0] || (de[0] = (ae) => q.value = ae),
                Pe
              ],
              label: "Typ",
              options: g.value
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
              options: D,
              "label-key": "text",
              "value-key": "value"
            }, null, 8, ["modelValue"]),
            E(h(nn), {
              modelValue: C.value,
              "onUpdate:modelValue": de[3] || (de[3] = (ae) => C.value = ae),
              label: "Name"
            }, null, 8, ["modelValue"]),
            B.value ? (p(), $e(h(wi), {
              key: q.value,
              modelValue: ie.value,
              "onUpdate:modelValue": de[4] || (de[4] = (ae) => ie.value = ae),
              create: B.value.create,
              "ui-model-xmi": B.value.xmi,
              "domain-package": B.value.ePackage(),
              "ui-model-uri": B.value.uri
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri"])) : Y.value ? (p(), $e(Qn(Y.value), {
              key: 1,
              modelValue: ie.value,
              "onUpdate:modelValue": de[5] || (de[5] = (ae) => ie.value = ae)
            }, null, 8, ["modelValue"])) : ee("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]),
      E(h(yi), {
        "model-value": !!ce.value,
        size: "sm",
        "onUpdate:modelValue": de[9] || (de[9] = (ae) => ce.value = null)
      }, {
        header: te(() => [
          E(h(Ne), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          de[13] || (de[13] = s("h2", { class: "confirm__title" }, "Variable löschen", -1))
        ]),
        actions: te(() => [
          E(h(ye), {
            intent: "quiet",
            onClick: de[8] || (de[8] = (ae) => ce.value = null)
          }, {
            default: te(() => [...de[14] || (de[14] = [
              ue("Abbrechen", -1)
            ])]),
            _: 1
          }),
          E(h(ye), {
            intent: "danger",
            onClick: fe
          }, {
            default: te(() => [...de[15] || (de[15] = [
              ue("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: te(() => [
          s("p", Tw, N(ce.value?.name) + " wird entfernt. Widgets, die darauf zeigen, finden sie danach nicht mehr. ", 1)
        ]),
        _: 1
      }, 8, ["model-value"])
    ]));
  }
}), Lw = /* @__PURE__ */ Ke(Ow, [["__scopeId", "data-v-dda92d6f"]]), Dw = { class: "appearance" }, Bw = { class: "panel" }, Ww = { class: "panel__head" }, Pw = { class: "panel__tools" }, Mw = {
  key: 0,
  class: "changed"
}, Uw = {
  key: 0,
  class: "gallery"
}, Nw = { class: "demo" }, Fw = { class: "demo__row" }, zw = { class: "demo__row" }, qw = { class: "demo" }, Gw = { class: "demo__form" }, Hw = { class: "demo" }, Kw = { class: "demo__row" }, Yw = { class: "demo__row" }, Zw = {
  key: 1,
  class: "body"
}, Jw = {
  class: "themes",
  "aria-label": "Themen"
}, Xw = ["onClick"], Qw = {
  class: "theme__strip",
  "aria-hidden": "true"
}, jw = { class: "theme__name" }, ek = { class: "theme__note" }, nk = { class: "tokens" }, tk = ["aria-expanded", "onClick"], rk = { class: "group__twist" }, ik = { class: "group__label" }, ok = { class: "group__count" }, ak = {
  key: 0,
  class: "group__body"
}, lk = {
  key: 0,
  class: "group__note"
}, sk = {
  key: 1,
  class: "token__swatch token__swatch--none",
  "aria-hidden": "true"
}, uk = { class: "token__text" }, dk = { class: "token__name" }, ck = { class: "token__role" }, fk = ["value", "aria-label", "onInput"], pk = ["value", "aria-label", "onChange"], gk = ["disabled", "title", "onClick"], vk = /* @__PURE__ */ Ge({
  __name: "Appearance",
  setup(c) {
    const {
      themes: _,
      activeTheme: o,
      overrides: m,
      valueOf: y,
      isOverridden: I,
      selectTheme: f,
      setToken: S,
      clearToken: b,
      clearAllTokens: d,
      exportTheme: g
    } = wu(), V = X(ki[0].id), D = X(!1), U = X("tokens"), z = X({
      text: "Bodenfeuchte Feld 3",
      number: 38.4,
      choice: "ogcsta",
      colour: "#4fa3d1",
      when: "2026-08-28",
      amount: 60,
      on: !0,
      checked: !0,
      note: ""
    }), q = [
      { uid: "ogcsta", name: "OGC SensorThings" },
      { uid: "xmla", name: "XMLA / MDX" },
      { uid: "rest", name: "REST" }
    ], O = K(() => Object.keys(m.value).length);
    function C(ne) {
      return [
        ne.tokens["color-bg"],
        ne.tokens["color-pane"],
        ne.tokens["color-accent"],
        ne.tokens["color-brand"],
        ne.tokens["color-ok"]
      ].filter(Boolean);
    }
    function T(ne) {
      return ne.kind === "color";
    }
    async function ie() {
      try {
        await navigator.clipboard.writeText(JSON.stringify(g(), null, 2)), D.value = !0, setTimeout(() => D.value = !1, 2e3);
      } catch {
        D.value = !1;
      }
    }
    return (ne, B) => (p(), x("div", Dw, [
      s("div", Bw, [
        s("header", Ww, [
          s("button", {
            type: "button",
            class: Ve(["head__tab", { on: U.value === "tokens" }]),
            onClick: B[0] || (B[0] = (Y) => U.value = "tokens")
          }, " Tokens ", 2),
          s("button", {
            type: "button",
            class: Ve(["head__tab", { on: U.value === "controls" }]),
            onClick: B[1] || (B[1] = (Y) => U.value = "controls")
          }, " Elemente ", 2),
          s("span", Pw, [
            O.value ? (p(), x("span", Mw, N(O.value) + " " + N(O.value === 1 ? "Wert geändert" : "Werte geändert"), 1)) : ee("", !0),
            O.value ? (p(), x("button", {
              key: 1,
              class: "btn",
              type: "button",
              onClick: B[2] || (B[2] = //@ts-ignore
              (...Y) => h(d) && h(d)(...Y))
            }, " Alle zurücksetzen ")) : ee("", !0),
            s("button", {
              class: "btn",
              type: "button",
              onClick: ie
            }, N(D.value ? "Kopiert" : "Als JSON kopieren"), 1)
          ])
        ]),
        U.value === "controls" ? (p(), x("div", Uw, [
          B[31] || (B[31] = s("p", { class: "gallery__lead" }, " Dieselben Elemente, aus denen die App gebaut ist. Was drüben an Tokens geändert wird, steht hier sofort. ", -1)),
          s("section", Nw, [
            B[22] || (B[22] = s("h3", { class: "demo__title" }, "Knöpfe", -1)),
            s("div", Fw, [
              E(h(ye), null, {
                default: te(() => [...B[13] || (B[13] = [
                  ue("Standard", -1)
                ])]),
                _: 1
              }),
              E(h(ye), { intent: "primary" }, {
                default: te(() => [...B[14] || (B[14] = [
                  ue("Speichern", -1)
                ])]),
                _: 1
              }),
              E(h(ye), { intent: "quiet" }, {
                default: te(() => [...B[15] || (B[15] = [
                  ue("Abbrechen", -1)
                ])]),
                _: 1
              }),
              E(h(ye), { intent: "danger" }, {
                default: te(() => [...B[16] || (B[16] = [
                  ue("Löschen", -1)
                ])]),
                _: 1
              }),
              E(h(ye), { disabled: "" }, {
                default: te(() => [...B[17] || (B[17] = [
                  ue("Gesperrt", -1)
                ])]),
                _: 1
              }),
              E(h(ye), { busy: "" }, {
                default: te(() => [...B[18] || (B[18] = [
                  ue("Lädt", -1)
                ])]),
                _: 1
              })
            ]),
            s("div", zw, [
              E(h(ye), { size: "sm" }, {
                default: te(() => [...B[19] || (B[19] = [
                  ue("Klein", -1)
                ])]),
                _: 1
              }),
              E(h(ye), { size: "md" }, {
                default: te(() => [...B[20] || (B[20] = [
                  ue("Mittel", -1)
                ])]),
                _: 1
              }),
              E(h(ye), { size: "lg" }, {
                default: te(() => [...B[21] || (B[21] = [
                  ue("Groß", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          s("section", qw, [
            B[23] || (B[23] = s("h3", { class: "demo__title" }, "Eingaben", -1)),
            s("div", Gw, [
              E(h(nn), {
                modelValue: z.value.text,
                "onUpdate:modelValue": B[3] || (B[3] = (Y) => z.value.text = Y),
                label: "Titel"
              }, null, 8, ["modelValue"]),
              E(h(nn), {
                modelValue: z.value.number,
                "onUpdate:modelValue": B[4] || (B[4] = (Y) => z.value.number = Y),
                label: "Messwert",
                type: "number",
                suffix: "%"
              }, null, 8, ["modelValue"]),
              E(h(Un), {
                modelValue: z.value.choice,
                "onUpdate:modelValue": B[5] || (B[5] = (Y) => z.value.choice = Y),
                label: "Datenquelle",
                options: q
              }, null, 8, ["modelValue"]),
              E(h(ou), {
                modelValue: z.value.colour,
                "onUpdate:modelValue": B[6] || (B[6] = (Y) => z.value.colour = Y),
                label: "Farbe"
              }, null, 8, ["modelValue"]),
              E(h(Tm), {
                modelValue: z.value.when,
                "onUpdate:modelValue": B[7] || (B[7] = (Y) => z.value.when = Y),
                label: "Stichtag"
              }, null, 8, ["modelValue"]),
              E(h(Om), {
                modelValue: z.value.amount,
                "onUpdate:modelValue": B[8] || (B[8] = (Y) => z.value.amount = Y),
                label: "Deckung",
                suffix: "%"
              }, null, 8, ["modelValue"]),
              E(h(nn), {
                modelValue: z.value.note,
                "onUpdate:modelValue": B[9] || (B[9] = (Y) => z.value.note = Y),
                label: "Notiz",
                rows: 2,
                stacked: ""
              }, null, 8, ["modelValue"]),
              E(h(nn), {
                modelValue: z.value.text,
                "onUpdate:modelValue": B[10] || (B[10] = (Y) => z.value.text = Y),
                label: "Mit Fehler",
                error: "Der Name ist schon vergeben."
              }, null, 8, ["modelValue"])
            ])
          ]),
          s("section", Hw, [
            B[30] || (B[30] = s("h3", { class: "demo__title" }, "Schalter und Marken", -1)),
            s("div", Kw, [
              E(h(Lm), {
                modelValue: z.value.checked,
                "onUpdate:modelValue": B[11] || (B[11] = (Y) => z.value.checked = Y),
                label: "Im Board zeigen"
              }, null, 8, ["modelValue"]),
              E(h(la), {
                modelValue: z.value.on,
                "onUpdate:modelValue": B[12] || (B[12] = (Y) => z.value.on = Y),
                label: "Automatisch aktualisieren"
              }, null, 8, ["modelValue"])
            ]),
            s("div", Yw, [
              E(h(Vt), null, {
                default: te(() => [...B[24] || (B[24] = [
                  ue("neutral", -1)
                ])]),
                _: 1
              }),
              E(h(Vt), { tone: "accent" }, {
                default: te(() => [...B[25] || (B[25] = [
                  ue("geladen", -1)
                ])]),
                _: 1
              }),
              E(h(Vt), { tone: "ok" }, {
                default: te(() => [...B[26] || (B[26] = [
                  ue("im Rahmen", -1)
                ])]),
                _: 1
              }),
              E(h(Vt), { tone: "warn" }, {
                default: te(() => [...B[27] || (B[27] = [
                  ue("prüfen", -1)
                ])]),
                _: 1
              }),
              E(h(Vt), { tone: "err" }, {
                default: te(() => [...B[28] || (B[28] = [
                  ue("getrennt", -1)
                ])]),
                _: 1
              }),
              E(h(Vt), {
                tone: "accent",
                numeric: ""
              }, {
                default: te(() => [...B[29] || (B[29] = [
                  ue("14", -1)
                ])]),
                _: 1
              })
            ]),
            E(h(Dm), { label: "Trenner" })
          ])
        ])) : (p(), x("div", Zw, [
          s("aside", Jw, [
            (p(!0), x(he, null, We(h(_), (Y) => (p(), x("button", {
              key: Y.id,
              type: "button",
              class: Ve(["theme", { on: Y.id === h(o).id }]),
              onClick: (me) => h(f)(Y.id)
            }, [
              s("span", Qw, [
                (p(!0), x(he, null, We(C(Y), (me, Be) => (p(), x("i", {
                  key: Be,
                  style: Ot({ background: me })
                }, null, 4))), 128))
              ]),
              s("span", jw, N(Y.name), 1),
              s("span", ek, N(Y.note), 1)
            ], 10, Xw))), 128))
          ]),
          s("section", nk, [
            (p(!0), x(he, null, We(h(ki), (Y) => (p(), x("div", {
              key: Y.id,
              class: "group"
            }, [
              s("button", {
                type: "button",
                class: "group__head",
                "aria-expanded": V.value === Y.id,
                onClick: (me) => V.value = V.value === Y.id ? "" : Y.id
              }, [
                s("span", rk, N(V.value === Y.id ? "▾" : "▸"), 1),
                s("span", ik, N(Y.label), 1),
                s("span", ok, N(Y.tokens.length), 1)
              ], 8, tk),
              V.value === Y.id ? (p(), x("div", ak, [
                Y.note ? (p(), x("p", lk, N(Y.note), 1)) : ee("", !0),
                (p(!0), x(he, null, We(Y.tokens, (me) => (p(), x("div", {
                  key: me.name,
                  class: "token"
                }, [
                  T(me) ? (p(), x("span", {
                    key: 0,
                    class: "token__swatch",
                    style: Ot({ background: h(y)(me.name) }),
                    "aria-hidden": "true"
                  }, null, 4)) : (p(), x("span", sk)),
                  s("span", uk, [
                    s("code", dk, "--" + N(me.name), 1),
                    s("span", ck, N(me.role), 1)
                  ]),
                  T(me) ? (p(), x("input", {
                    key: 2,
                    class: "token__picker",
                    type: "color",
                    value: h(y)(me.name),
                    "aria-label": `Farbe für ${me.name}`,
                    onInput: (Be) => h(S)(me.name, Be.target.value)
                  }, null, 40, fk)) : ee("", !0),
                  s("input", {
                    class: "token__value",
                    type: "text",
                    value: h(y)(me.name),
                    "aria-label": `Wert für ${me.name}`,
                    onChange: (Be) => h(S)(me.name, Be.target.value)
                  }, null, 40, pk),
                  s("button", {
                    class: "token__reset",
                    type: "button",
                    disabled: !h(I)(me.name),
                    title: h(I)(me.name) ? "Auf den Wert des Themas zurücksetzen" : "Unverändert",
                    onClick: (Be) => h(b)(me.name)
                  }, " ↺ ", 8, gk)
                ]))), 128))
              ])) : ee("", !0)
            ]))), 128))
          ])
        ]))
      ])
    ]));
  }
}), hk = /* @__PURE__ */ Ke(vk, [["__scopeId", "data-v-a84ca0bf"]]), Tt = cu.createLogger("daanse:system:actions");
class mk {
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
async function _k(c, _, o) {
  await _.registerActionsFromEcoreString(
    "SystemActions",
    t_,
    "system",
    "SystemActions.ecore"
  );
  const m = new mk(c, o);
  _.registerInstance("SystemActions", m, "SystemActions"), Tt("✅ System actions registered");
}
var bk = Object.defineProperty, yk = Object.getOwnPropertyDescriptor, wk = (c, _, o, m) => {
  for (var y = yk(_, o), I = c.length - 1, f; I >= 0; I--)
    (f = c[I]) && (y = f(_, o, y) || y);
  return y && bk(_, o, y), y;
};
const kk = cu.createLogger("daanse:system:actions");
class oa {
  testAction(..._) {
    console.log("TestActions", _);
  }
}
wk([
  r_({ eventType: "test.console" })
], oa.prototype, "testAction");
async function xk(c) {
  c.registerWidgetType("test", oa, "system");
  const _ = new oa();
  c.registerInstance("test", _, "system"), kk("✅ Test actions registered");
}
let ct;
async function Kk({ services: c, log: _ }) {
  F_(), f_(), m_(), ct = ym(j_), ct.use(Jt), ct.provide("codeEditorType", "monaco");
  const o = c, m = (U) => {
    const z = c.get(U);
    ct?.provide(U, z), ct?.provide(Symbol.for(U), z);
  };
  for (const U of c.getServiceIds()) m(U);
  o.addListener?.({ onServiceEvent: (U) => m(U.serviceId) }), c.register(fm, ct);
  const y = c.getRequired(Km), I = c.getRequired(Ym);
  if (y.getConnections().length === 0) {
    const U = y.createConnection("");
    U.uid = "test", U.name = "Test Connection 01", U.type = "rest", U.config = { url: "https://jsonplaceholder.typicode.com/" }, y.saveConnection(U);
    const z = I.createDatasource("");
    z.uid = "test_ds", z.name = "Test DataSource 01", z.type = "rest", z.connection = U, z.config = { resourceUrl: "posts" }, I.saveDatasource(z);
  }
  c.getRequired(gm).registerWrapperType({
    type: Rm,
    create: (U) => new Am(U)
  });
  const f = c.getRequired(tu), S = new qs();
  S.path = "/configuration", S.name = "config", S.component = Lw, f.registerRoute(S);
  const b = new qs();
  b.path = "/appearance", b.name = "appearance", b.component = hk, f.registerRoute(b);
  const d = c.getRequired(nu), g = new km();
  g.id = "config", g.label = "Environment variables", g.icon = "settings", g.route = "/configuration", g.routeName = "config", g.order = 10, g.visible = !0, d.registerNavigationItem(g);
  const V = f;
  for (const U of V.getAllRoutesArray?.() ?? [])
    Jt.addRoute({
      path: U.path,
      name: U.name,
      component: U.component,
      ...U.meta ? { meta: U.meta } : {}
    });
  const D = window.location.pathname + window.location.search + window.location.hash;
  Jt.resolve(D).matched.length && Jt.currentRoute.value.fullPath !== D && Jt.replace(D);
  try {
    await _k(
      Jt,
      c.getRequired(Fs),
      c.getRequired(js)
    ), _.info("system actions registered");
  } catch (U) {
    _.error("system actions failed", U);
  }
  try {
    await xk(c.getRequired(Fs)), _.info("test actions registered");
  } catch (U) {
    _.error("test actions failed", U);
  }
  ct.mount("#app"), _.info("shell mounted");
}
function Yk({ services: c }) {
  const _ = c.getRequired(tu);
  _.unregisterRoute("config"), _.unregisterRoute("save");
  const o = c.getRequired(nu);
  o.unregisterNavigationItem("config"), o.unregisterNavigationItem("save"), ct?.unmount(), ct = void 0;
}
export {
  Kk as activate,
  Yk as deactivate
};
