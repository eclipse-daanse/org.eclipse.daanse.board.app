(function(){var i="app.shell",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="@import\"https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap\";.topbar[data-v-4121259c]{height:var(--spacing-topbar, 42px);flex:none;display:flex;align-items:center;gap:12px;padding:0 12px;background:var(--color-pane);border-bottom:1px solid var(--color-divider);color:var(--color-fg);font-size:var(--text-sm, 12px)}.brand[data-v-4121259c]{display:flex;align-items:center;gap:8px;flex:none;white-space:nowrap;font-weight:600;font-size:var(--text-base, 13px)}.brand-mark[data-v-4121259c]{width:20px;height:20px;border-radius:var(--radius-sm, 5px);background:var(--color-brandFill);color:var(--color-onBrand);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;flex:none}.crumb[data-v-4121259c]{display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden;white-space:nowrap;color:var(--color-dim)}.crumb-part[data-v-4121259c]{overflow:hidden;text-overflow:ellipsis}.crumb-part.current[data-v-4121259c]{color:var(--color-fg);font-weight:500}.crumb-link[data-v-4121259c]{padding:0;font:inherit;color:inherit;background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.crumb-link[data-v-4121259c]:hover{color:var(--color-fg);text-decoration:underline}.crumb-link[data-v-4121259c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.crumb-sep[data-v-4121259c]{color:var(--color-outline)}.spacer[data-v-4121259c]{flex:1 1 auto;min-width:8px}.pages[data-v-4121259c]{position:relative;margin-left:10px;flex:none}.pages__current[data-v-4121259c]{display:flex;align-items:center;gap:5px;max-width:200px;height:24px;padding:0 7px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background:none;border:1px solid transparent;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__current[data-v-4121259c]:hover{background-color:var(--color-raised);border-color:var(--color-divider)}.pages__current[data-v-4121259c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.pages__name[data-v-4121259c]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__caret[data-v-4121259c]{font-size:9px;color:var(--color-dim)}.pages__menu[data-v-4121259c]{position:absolute;top:calc(100% + 3px);left:0;z-index:400;min-width:180px;max-height:60vh;overflow-y:auto;padding:3px;margin:0;list-style:none;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 3px);box-shadow:var(--shadow-e2, 0 2px 8px rgb(0 0 0 / 14%))}.pages__item[data-v-4121259c]{display:block;width:100%;padding:5px 8px;font-size:var(--text-sm, 12px);font-family:inherit;text-align:left;color:var(--color-fg);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__item[data-v-4121259c]:hover{background-color:var(--color-raised)}.pages__line[data-v-4121259c]{display:flex;align-items:center;gap:2px}.pages__line .pages__item[data-v-4121259c]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__remove[data-v-4121259c]{flex:none;width:20px;height:20px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer;opacity:0;transition:opacity 90ms ease,color 90ms ease}.pages__line:hover .pages__remove[data-v-4121259c],.pages__remove[data-v-4121259c]:focus-visible{opacity:1}.pages__remove[data-v-4121259c]:hover{color:var(--color-err)}.pages__sep[data-v-4121259c]{height:1px;margin:3px 0;background-color:var(--color-divider)}.pages__add[data-v-4121259c],.pages__item.on[data-v-4121259c]{color:var(--color-accent)}.pages__empty[data-v-4121259c]{padding:5px 8px;font-size:var(--text-sm, 12px);color:var(--color-dim)}.action[data-v-4121259c]{height:24px;padding:0 10px;margin-right:8px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs, 3px);cursor:pointer}.action[data-v-4121259c]:hover{border-color:var(--color-outline)}.action[data-v-4121259c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.modes[data-v-4121259c]{display:inline-flex;border:1px solid var(--color-outline);border-radius:var(--radius-sm, 5px);overflow:hidden;flex:none}.mode[data-v-4121259c]{font:inherit;padding:4px 11px;border:0;background:var(--color-raised);color:var(--color-dim);cursor:pointer;white-space:nowrap}.mode[data-v-4121259c]:hover{color:var(--color-fg)}.mode.on[data-v-4121259c]{background:var(--color-accent);color:var(--color-onAccent);font-weight:600}.mode[data-v-4121259c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.icon-action[data-v-4121259c]:disabled{opacity:.4;cursor:default}.icon-action[data-v-4121259c]{display:grid;place-items:center;width:24px;height:24px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.icon-action[data-v-4121259c]:hover{color:var(--color-fg);background-color:var(--color-raised)}.icon-action.on[data-v-4121259c]{color:var(--color-accent);background-color:var(--color-raised)}.icon-action[data-v-4121259c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.avatar[data-v-4121259c]{width:24px;height:24px;border-radius:50%;background:var(--color-raised);border:1px solid var(--color-outline);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;color:var(--color-dim);flex:none}.lang[data-v-4121259c]{position:relative}.lang__button[data-v-4121259c]{font-family:var(--font-mono);font-size:var(--text-xs);font-weight:600;letter-spacing:.02em}.lang__menu[data-v-4121259c]{position:absolute;top:calc(100% + 4px);right:0;z-index:60;min-width:150px;margin:0;padding:4px;list-style:none;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-sm);box-shadow:var(--shadow-e3)}.lang__item[data-v-4121259c]{display:block;width:100%;padding:5px 10px;font:inherit;color:var(--color-fg);text-align:left;background:none;border:0;border-radius:3px;cursor:pointer}.lang__item[data-v-4121259c]:hover,.lang__item[data-v-4121259c]:focus-visible{background-color:var(--color-sunken)}.lang__item.on[data-v-4121259c]{color:var(--color-accent)}.shell[data-v-b6d1fa2b]{display:flex;flex-direction:column;height:100%;width:100%;min-height:0;background:var(--color-bg)}.shell-body[data-v-b6d1fa2b]{flex:1 1 auto;display:grid;grid-template-columns:var(--spacing-rail, 52px) minmax(0,1fr);min-height:0;overflow:hidden}.shell-body--norail[data-v-b6d1fa2b]{grid-template-columns:minmax(0,1fr)}.rail[data-v-b6d1fa2b]{background:var(--color-pane);border-right:1px solid var(--color-divider);display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:4px;overflow:hidden}.rail-spacer[data-v-b6d1fa2b]{flex:1 1 auto}.ri[data-v-b6d1fa2b]{position:relative;width:36px;height:36px;flex:none;border:0;border-radius:var(--radius-md, 8px);background:transparent;color:var(--color-dim);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .14s cubic-bezier(.2,.6,.2,1),color .14s cubic-bezier(.2,.6,.2,1)}.ri[data-v-b6d1fa2b]:hover{color:var(--color-fg);background:color-mix(in srgb,var(--color-accent) 10%,transparent)}.ri.on[data-v-b6d1fa2b]{background:color-mix(in srgb,var(--color-accent) 14%,transparent);color:var(--color-accent)}.ri.on[data-v-b6d1fa2b]:before{content:\"\";position:absolute;left:-8px;top:8px;bottom:8px;width:3px;border-radius:var(--radius-xs, 3px);background:var(--color-accent)}.ri[data-v-b6d1fa2b]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.ri[data-v-b6d1fa2b] .icon{font-size:20px}.sr-only[data-v-b6d1fa2b]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.content[data-v-b6d1fa2b]{min-width:0;min-height:0;overflow:hidden;display:flex;flex-direction:column}@media(prefers-reduced-motion:reduce){.ri[data-v-b6d1fa2b]{transition-duration:.01ms}}.global-loading-bar[data-v-b6d1fa2b]{position:fixed;top:0;left:0;right:0;height:3px;z-index:8000;overflow:hidden}.global-loading-bar-progress[data-v-b6d1fa2b]{height:100%;width:30%;background:var(--color-brandFill);animation:loading-slide-b6d1fa2b 1.2s ease-in-out infinite}@keyframes loading-slide-b6d1fa2b{0%{transform:translate(-100%)}to{transform:translate(400%)}}/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:\"Barlow\",system-ui,-apple-system,\"Segoe UI\",sans-serif;--font-mono:\"JetBrains Mono\",ui-monospace,SFMono-Regular,Menlo,monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--text-xs:11px;--text-xs--line-height:calc(1/.75);--text-sm:12px;--text-sm--line-height:calc(1.25/.875);--text-base:13px;--text-base--line-height: 1.5 ;--text-lg:15px;--text-lg--line-height:calc(1.75/1.125);--text-xl:24px;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--radius-xs:2px;--radius-sm:3px;--radius-md:4px;--radius-lg:6px;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-bg:#121820;--color-pane:#1a222c;--color-raised:#232d39;--color-canvas:#0e141b;--color-divider:#2a3541;--color-outline:#3c4959;--color-fg:#dfe8ef;--color-dim:#8b9bab;--color-accent:#4fa3d1;--color-onAccent:#08131c;--color-brand:#d8a13c;--color-brandFill:#d8a13c;--color-onBrand:#14100a;--color-ok:#5fb98a;--color-warn:#d8a13c;--color-err:#e2766a;--color-kw:#4fa3d1;--color-measure:#d8a13c;--color-member:#5fb98a;--color-fn:#c294d8;--color-primary:#4fa3d1;--color-secondary:#8b9bab;--color-success:#5fb98a;--color-info:#4fa3d1;--color-danger:#e2766a;--color-warning:#d8a13c;--color-backgroundPrimary:#121820;--color-backgroundSecondary:#1a222c;--color-backgroundElement:#232d39;--color-backgroundBorder:#2a3541;--color-textPrimary:#dfe8ef;--color-textInverted:#08131c;--color-daanse_blue:#4fa3d1;--color-daanse_grey:#dfe8ef;--shadow-e1:0 1px 2px #00000073;--shadow-e2:0 2px 8px #00000073;--shadow-e3:0 8px 24px #00000080;--spacing-topbar:42px;--spacing-rail:52px;--spacing-panelHeader:30px;--spacing-splitter:4px;--spacing-statusbar:24px}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{.ice_gray{padding:var(--spacing-6);background:var(--color-pane);border-right:1px solid var(--color-divider);box-shadow:var(--shadow-e1)}.ice{padding:var(--spacing-6);background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md);box-shadow:var(--shadow-e2)}.z-mx{z-index:30000}}@layer utilities{.\\@container{container-type:inline-size}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.top-\\[-25px\\]{top:-25px}.right-0{right:calc(var(--spacing)*0)}.isolate{isolation:isolate}.col-span-1{grid-column:span 1/span 1}.row-span-4{grid-row:span 4/span 4}.float-left{float:left}.float-right{float:right}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-2{margin:calc(var(--spacing)*2)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-15{margin-left:calc(var(--spacing)*15)}.box-border{box-sizing:border-box}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.table-cell{display:table-cell}.h-40{height:calc(var(--spacing)*40)}.h-84{height:calc(var(--spacing)*84)}.h-120{height:calc(var(--spacing)*120)}.h-full{height:100%}.max-h-screen{max-height:100vh}.w-full{width:100%}.max-w-xs{max-width:var(--container-xs)}.flex-shrink,.shrink{flex-shrink:1}.flex-grow,.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-white{background-color:var(--color-white)}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.object-fill{object-fit:fill}.object-scale-down{object-fit:scale-down}.p-4{padding:calc(var(--spacing)*4)}.pl-6{padding-left:calc(var(--spacing)*6)}.text-justify{text-align:justify}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-wrap{text-wrap:wrap}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.line-through{text-decoration-line:line-through}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e1{--tw-shadow:0 1px 2px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e2{--tw-shadow:0 2px 8px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e3{--tw-shadow:0 8px 24px var(--tw-shadow-color,#00000080);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}}:root[data-theme=light]{--color-bg:#eef1f4;--color-pane:#f7f9fb;--color-raised:#fff;--color-canvas:#e2e7ec;--color-divider:#d3dae1;--color-outline:#b3bec9;--color-fg:#16202a;--color-dim:#55646f;--color-accent:#1f6690;--color-onAccent:#fff;--color-brand:#8a6206;--color-brandFill:#c08a10;--color-onBrand:#14100a;--color-ok:#1f6f4a;--color-warn:#8a5a0c;--color-err:#b02a1c;--color-kw:#1f6690;--color-measure:#8a5a0c;--color-member:#1f6f4a;--color-fn:#7b3fa0;--color-primary:#1f6690;--color-secondary:#55646f;--color-success:#1f6f4a;--color-info:#1f6690;--color-danger:#b02a1c;--color-warning:#8a5a0c;--color-backgroundPrimary:#eef1f4;--color-backgroundSecondary:#f7f9fb;--color-backgroundElement:#fff;--color-backgroundBorder:#d3dae1;--color-textPrimary:#16202a;--color-textInverted:#fff;--color-daanse_blue:#1f6690;--color-daanse_grey:#16202a;--shadow-e1:0 1px 2px #16202a24;--shadow-e2:0 2px 8px #16202a24;--shadow-e3:0 8px 24px #16202a24}:root{--mdxwb-bg:var(--color-bg);--mdxwb-pane:var(--color-pane);--mdxwb-raised:var(--color-raised);--mdxwb-border:var(--color-divider);--mdxwb-outline:var(--color-outline);--mdxwb-fg:var(--color-fg);--mdxwb-dim:var(--color-dim);--mdxwb-accent:var(--color-accent);--mdxwb-on-accent:var(--color-onAccent);--mdxwb-ok:var(--color-ok);--mdxwb-warn:var(--color-warn);--mdxwb-err:var(--color-err);--mdxwb-kw:var(--color-kw);--mdxwb-measure:var(--color-measure);--mdxwb-member:var(--color-member);--mdxwb-fn:var(--color-fn)}body{font-family:var(--font-sans);font-optical-sizing:auto;font-weight:400;font-size:var(--text-base);font-variation-settings:\"wdth\" 100;background:var(--color-bg);color:var(--color-fg);font-style:normal;--moveable-color:var(--color-outline)!important}table{font-variant-numeric:tabular-nums}.rCS1w3zcxh{--moveable-color:var(--color-outline)!important}.rCS1w3zcxh .moveable-line{transform-origin:0;width:1px;height:1px;border-bottom:2px dashed var(--color-outline)!important;background:0 0!important}@keyframes spin{to{transform:rotate(360deg)}}*{scrollbar-width:thin;scrollbar-color:var(--color-outline)transparent}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background-color:var(--color-outline);background-clip:padding-box;border:3px solid #0000;border-radius:6px}::-webkit-scrollbar-thumb:hover{background-color:var(--color-dim)}::-webkit-scrollbar-corner{background:0 0}.resize-observer[data-v-b329ee4c]{z-index:-1;pointer-events:none;opacity:0;background-color:#0000;border:none;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.resize-observer[data-v-b329ee4c] object{pointer-events:none;z-index:-1;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.v-popper__popper{z-index:10000;outline:none;top:0;left:0}.v-popper__popper.v-popper__popper--hidden{visibility:hidden;opacity:0;pointer-events:none;transition:opacity .15s,visibility .15s}.v-popper__popper.v-popper__popper--shown{visibility:visible;opacity:1;transition:opacity .15s}.v-popper__popper.v-popper__popper--skip-transition,.v-popper__popper.v-popper__popper--skip-transition>.v-popper__wrapper{transition:none!important}.v-popper__backdrop{width:100%;height:100%;display:none;position:absolute;top:0;left:0}.v-popper__inner{box-sizing:border-box;position:relative;overflow-y:auto}.v-popper__inner>div{z-index:1;max-width:inherit;max-height:inherit;position:relative}.v-popper__arrow-container{width:10px;height:10px;position:absolute}.v-popper__popper--arrow-overflow .v-popper__arrow-container,.v-popper__popper--no-positioning .v-popper__arrow-container{display:none}.v-popper__arrow-inner,.v-popper__arrow-outer{border-style:solid;width:0;height:0;position:absolute;top:0;left:0}.v-popper__arrow-inner{visibility:hidden;border-width:7px}.v-popper__arrow-outer{border-width:6px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{left:-2px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{left:-1px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer{border-bottom-width:0;border-bottom-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:0}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{border-top-width:0;border-top-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{top:-4px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{top:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{top:-1px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{border-left-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-left-color:#0000!important}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{left:-4px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{left:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer{border-right-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner{left:-2px}.v-popper--theme-tooltip .v-popper__inner{color:#fff;background:#000c;border-radius:6px;padding:7px 12px 6px}.v-popper--theme-tooltip .v-popper__arrow-outer{border-color:#000c}.v-popper--theme-dropdown .v-popper__inner{color:#000;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 6px 30px #0000001a}.v-popper--theme-dropdown .v-popper__arrow-inner{visibility:visible;border-color:#fff}.v-popper--theme-dropdown .v-popper__arrow-outer{border-color:#ddd}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}.layout-renderer[data-v-5802657f],.layout-renderer .edit-component-wrapper[data-v-5802657f],.layout-renderer .view-component-wrapper[data-v-5802657f]{width:100%;height:100%}.layout-renderer .spinner[data-v-5802657f]{width:22px;height:22px;border:2px solid var(--color-divider);border-top-color:var(--color-accent);border-radius:50%;animation:layout-spin .7s linear infinite}.layout-renderer .no-layout-message[data-v-5802657f],.layout-renderer .loading-state[data-v-5802657f]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;gap:1rem}.layout-renderer .no-layout-message__text[data-v-5802657f]{display:flex;align-items:flex-start;gap:9px;margin:0;font-family:var(--font-sans);font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}@keyframes layout-spin{to{transform:rotate(360deg)}}.floorplan[data-v-a2dc7e22]{position:relative;aspect-ratio:16 / 9;background-color:var(--color-bg);border-bottom:1px solid var(--color-divider);overflow:hidden}.floorplan__block[data-v-a2dc7e22]{position:absolute;margin:2px 0 0 2px;border-radius:2px;border:1px solid color-mix(in srgb,currentColor 70%,transparent);background-color:color-mix(in srgb,currentColor 14%,transparent)}.floorplan__block--data[data-v-a2dc7e22]{color:var(--color-accent)}.floorplan__block--visual[data-v-a2dc7e22]{color:var(--color-brand)}.floorplan__block--text[data-v-a2dc7e22]{color:var(--color-dim)}.floorplan__empty[data-v-a2dc7e22]{position:absolute;inset:0;display:grid;place-items:center;font-size:var(--text-xs);color:var(--color-dim)}.storage[data-v-327d5f23]{display:grid;grid-template-columns:280px minmax(0,1fr);flex:1 1 auto;min-height:0;background-color:var(--color-pane);overflow:hidden}.tree[data-v-327d5f23]{display:flex;flex-direction:column;min-height:0;border-right:1px solid var(--color-divider)}.tree__search[data-v-327d5f23]{margin:8px;height:26px;padding:0 8px;font-size:var(--text-sm);font-family:inherit;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.tree__body[data-v-327d5f23]{flex:1 1 auto;min-height:0;padding:0 4px 8px;overflow-y:auto}.row[data-v-327d5f23]{display:flex;align-items:baseline;flex-wrap:nowrap;gap:6px;width:100%;padding:4px 6px;font-family:inherit;font-size:var(--text-base);color:var(--color-fg);text-align:left;background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.row[data-v-327d5f23]:hover{background-color:var(--color-raised)}.row.on[data-v-327d5f23]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);box-shadow:inset 2px 0 0 var(--color-accent)}.row--place[data-v-327d5f23]{font-weight:600}.row--entry[data-v-327d5f23]{padding-left:22px;font-family:var(--font-mono);font-size:var(--text-sm)}.row--hint[data-v-327d5f23]{padding-left:22px;margin:0;color:var(--color-dim);font-size:var(--text-sm);cursor:default}.row--add[data-v-327d5f23]{color:var(--color-dim);font-size:var(--text-sm)}.row__twist[data-v-327d5f23]{width:12px;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__name[data-v-327d5f23]{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__meta[data-v-327d5f23]{margin-left:auto;padding-left:8px;flex:none;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);color:var(--color-dim)}.row__dot[data-v-327d5f23]{width:5px;height:5px;flex:none;border-radius:50%;background-color:transparent}.row__dot.open[data-v-327d5f23]{background-color:var(--color-accent)}.detail[data-v-327d5f23]{display:flex;flex-direction:column;min-width:0;min-height:0;background-color:var(--color-bg);overflow-y:auto}.detail__head[data-v-327d5f23]{display:flex;align-items:center;gap:8px;padding:7px 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.detail__name[data-v-327d5f23]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.detail__facts[data-v-327d5f23]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.detail__spacer[data-v-327d5f23]{flex:1 1 auto}.detail__badge[data-v-327d5f23]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent);border-radius:var(--radius-xs)}.detail__hint[data-v-327d5f23]{display:grid;place-items:center;flex:1 1 auto;margin:0;padding:24px;font-size:var(--text-sm);color:var(--color-dim);text-align:center}.detail__failure[data-v-327d5f23]{margin:12px 12px 0;padding:8px 10px;font-size:var(--text-sm);color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 10%,transparent);border-radius:var(--radius-xs)}.boards[data-v-327d5f23]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;padding:12px}.board[data-v-327d5f23]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.board__text[data-v-327d5f23]{padding:8px 10px}.board__name[data-v-327d5f23]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__facts[data-v-327d5f23]{margin:2px 0 0;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.board__kinds[data-v-327d5f23]{margin:4px 0 0;font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.create[data-v-327d5f23]{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:16px}.create__label[data-v-327d5f23]{font-size:var(--text-sm);color:var(--color-dim)}.create__input[data-v-327d5f23]{height:26px;min-width:220px;padding:0 8px;font-size:var(--text-base);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.create__hint[data-v-327d5f23]{flex:1 0 100%;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.row[data-v-327d5f23]:focus-visible,.tree__search[data-v-327d5f23]:focus-visible,.create__input[data-v-327d5f23]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.single[data-v-9d29d7b5]{display:flex;flex-direction:column;gap:12px;padding:16px;max-width:640px}.single__heading[data-v-9d29d7b5]{margin:0;font-size:.78rem;font-weight:600;letter-spacing:.04em;color:var(--color-dim);text-transform:uppercase}.single__card[data-v-9d29d7b5]{cursor:pointer}.single__card[data-v-9d29d7b5]:hover,.single__card[data-v-9d29d7b5]:focus-visible{border-color:var(--color-accent)}.single__card[data-v-9d29d7b5]{display:flex;align-items:center;gap:14px;padding:16px;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-md)}.single__icon[data-v-9d29d7b5]{display:grid;flex:none;place-items:center;width:48px;height:48px;color:var(--color-accent);background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm)}.single__text[data-v-9d29d7b5]{flex:1;min-width:0}.single__name[data-v-9d29d7b5]{margin:0;font-size:1.05rem;color:var(--color-fg)}.single__desc[data-v-9d29d7b5]{margin:3px 0 0;font-size:.85rem;color:var(--color-dim)}.single__meta[data-v-9d29d7b5]{margin:4px 0 0;font-size:.82rem;color:var(--color-dim)}.single__actions[data-v-9d29d7b5]{display:flex;flex:none;gap:6px}.single__note[data-v-9d29d7b5]{margin:0;font-size:.82rem;line-height:1.5;color:var(--color-dim)}.boards[data-v-9d29d7b5]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.boards__panel[data-v-9d29d7b5]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.boards__body[data-v-9d29d7b5]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background-color:var(--color-bg);overflow:auto}.boards__bar[data-v-9d29d7b5]{display:flex;align-items:center;gap:12px;height:var(--spacing-panelHeader);flex:none;padding:0 8px;border-bottom:1px solid var(--color-divider)}.boards__views[data-v-9d29d7b5]{display:flex;align-items:center;gap:2px;height:100%}.boards__view[data-v-9d29d7b5]{position:relative;display:flex;align-items:center;gap:6px;height:100%;padding:0 12px;font-size:var(--text-sm);font-family:inherit;font-weight:500;color:var(--color-dim);background:none;border:0;cursor:pointer}.boards__view[data-v-9d29d7b5]:hover{color:var(--color-fg)}.boards__view.on[data-v-9d29d7b5]{color:var(--color-fg);font-weight:600}.boards__view.on[data-v-9d29d7b5]:after{content:\"\";position:absolute;left:8px;right:8px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.boards__view[data-v-9d29d7b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__title[data-v-9d29d7b5]{display:flex;align-items:center;gap:8px;margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__count[data-v-9d29d7b5]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);font-weight:500;color:var(--color-dim);padding:1px 6px;border:1px solid var(--color-divider);border-radius:999px}.boards__tools[data-v-9d29d7b5]{display:flex;align-items:center;gap:8px;margin-left:auto}.boards__search[data-v-9d29d7b5]{height:22px;min-width:180px;padding:0 8px;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:4px}.boards__search[data-v-9d29d7b5]:focus-visible,.board[data-v-9d29d7b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__grid[data-v-9d29d7b5]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));align-content:start;gap:16px;padding:16px}.board[data-v-9d29d7b5]{position:relative;display:flex;flex-direction:column;padding:0;overflow:hidden;text-align:left;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);box-shadow:var(--shadow-e1);cursor:pointer;transition:border-color .12s ease,box-shadow .12s ease,transform .12s ease}.board[data-v-9d29d7b5]:hover{border-color:var(--color-outline);box-shadow:var(--shadow-e2);transform:translateY(-1px)}.board__body[data-v-9d29d7b5]{padding:12px}.board__name[data-v-9d29d7b5]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__meta[data-v-9d29d7b5]{margin:2px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.board__kinds[data-v-9d29d7b5]{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0 0;padding:0;list-style:none}.board__kind[data-v-9d29d7b5]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-dim);background-color:var(--color-canvas);border-radius:3px}.board__kind--more[data-v-9d29d7b5]{color:var(--color-outline)}.board__edit[data-v-9d29d7b5]{position:absolute;top:8px;right:8px;padding:2px 8px;font-size:var(--text-xs);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:3px;opacity:0;cursor:pointer}.board:hover .board__edit[data-v-9d29d7b5],.board__edit[data-v-9d29d7b5]:focus-visible{opacity:1}.board--new[data-v-9d29d7b5]{box-shadow:none;align-items:center;justify-content:center;gap:2px;min-height:180px;font-family:inherit;background-color:transparent;border-style:dashed}.board__plus[data-v-9d29d7b5]{font-size:20px;line-height:1;color:var(--color-outline)}.board__usage[data-v-9d29d7b5]{margin:3px 0 0;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.boards__nomatch[data-v-9d29d7b5]{grid-column:1 / -1;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.boards__empty[data-v-9d29d7b5]{max-width:420px;margin:10vh auto 0;padding:0 16px;text-align:center}.boards__empty-plan[data-v-9d29d7b5]{width:200px;margin:0 auto 16px;border:1px solid var(--color-divider);border-radius:4px}.boards__empty-title[data-v-9d29d7b5]{margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__empty-text[data-v-9d29d7b5]{margin:8px 0 16px;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.boards__empty-actions[data-v-9d29d7b5]{display:flex;justify-content:center;gap:8px}@media(prefers-reduced-motion:reduce){.board[data-v-9d29d7b5]{transition:none}.board[data-v-9d29d7b5]:hover{transform:none}}.dottet[data-v-3ecae506]{background:var(--color-canvas);background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-3ecae506]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed var(--color-outline);z-index:100000;pointer-events:none}.report-container[data-v-3ecae506]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative;background:var(--color-canvas, #dee1e7)}.report-container__title[data-v-3ecae506]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider, #ccd1d9)}.report-container .widgets-adding-controls[data-v-3ecae506]{display:flex;border:1px solid var(--color-divider, #ccd1d9);border-radius:8px;margin:16px}.report-container .widget-board[data-v-3ecae506]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-3ecae506]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-3ecae506]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-3ecae506]{position:absolute}.dropdown-buttons-container[data-v-3ecae506]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-3ecae506]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-3ecae506]{z-index:20000000!important}.add_widget-button[data-v-3ecae506]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-3ecae506],.v-leave-active[data-v-3ecae506]{transition:opacity .5s ease}.v-enter-from[data-v-3ecae506],.v-leave-to[data-v-3ecae506]{opacity:0}.pick[data-v-d4b46673],.fill[data-v-d4b46673]{display:flex;flex-direction:column;gap:24px}.pick__lead[data-v-d4b46673]{margin:0;font-size:.9rem;color:var(--color-dim)}.pick__group[data-v-d4b46673]{display:flex;flex-direction:column;gap:8px}.pick__rubric[data-v-d4b46673]{margin:0;font-size:.8rem;font-weight:600;letter-spacing:.03em;color:var(--color-dim);text-transform:none}.tiles[data-v-d4b46673]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));gap:8px;margin:0;padding:0;list-style:none}.tile[data-v-d4b46673]{display:flex;flex-direction:column;gap:6px;width:100%;height:100%;padding:10px 12px;font:inherit;text-align:left;background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm);cursor:pointer}.tile[data-v-d4b46673]:hover{border-color:var(--color-accent)}.tile[data-v-d4b46673]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.tile--on[data-v-d4b46673]{border-color:var(--color-accent);box-shadow:inset 2px 0 0 var(--color-accent)}.tile__head[data-v-d4b46673]{display:flex;align-items:center;gap:6px}.tile__icon[data-v-d4b46673]{flex:none;color:var(--color-accent)}.tile__name[data-v-d4b46673]{flex:1;font-weight:600;color:var(--color-fg)}.tile__check[data-v-d4b46673]{flex:none;color:var(--color-accent)}.tile__what[data-v-d4b46673]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3;overflow:hidden;font-size:.8rem;line-height:1.45;color:var(--color-dim)}.chosen[data-v-d4b46673]{display:flex;align-items:center;gap:12px;padding:12px;background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm)}.chosen__icon[data-v-d4b46673]{display:grid;flex:none;place-items:center;width:40px;height:40px;color:var(--color-accent);background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-sm)}.chosen__text[data-v-d4b46673]{flex:1;min-width:0}.chosen__name[data-v-d4b46673]{font-weight:600;color:var(--color-fg)}.chosen__what[data-v-d4b46673]{margin:2px 0 0;font-size:.82rem;line-height:1.45;color:var(--color-dim)}.fill__fields[data-v-d4b46673]{display:flex;flex-direction:column;gap:16px}.model__none[data-v-57df2bbc]{margin:0;padding:10px 12px;font-size:.85rem;color:var(--color-dim);background-color:var(--color-sunken);border-radius:var(--radius-sm)}.tags[data-v-87381204]{display:flex;flex-direction:column;gap:6px}.tags__held[data-v-87381204],.tags__offer[data-v-87381204]{display:flex;flex-wrap:wrap;gap:4px}.tags__suggestion[data-v-87381204]{padding:2px 8px;font-size:.8rem;color:var(--color-dim);background:none;border:1px dashed var(--color-outline);border-radius:999px;cursor:pointer}.tags__suggestion[data-v-87381204]:hover{color:var(--color-fg);border-style:solid;border-color:var(--color-accent)}.note[data-v-01bfa7b6]{margin:0;padding:10px 12px;font-size:.85rem;line-height:1.45;color:var(--color-dim);background-color:var(--color-sunken);border-radius:var(--radius-sm)}.note--warn[data-v-01bfa7b6]{color:var(--color-fg);border-left:2px solid var(--color-warn, var(--color-accent))}.menu__catch[data-v-3e59dfe4]{position:fixed;inset:0;z-index:50000}.menu[data-v-3e59dfe4]{position:fixed;z-index:50001;min-width:200px;margin:0;padding:4px;list-style:none;background-color:var(--color-pane);border:1px solid var(--color-outline);border-radius:var(--radius-sm);box-shadow:var(--shadow-e3)}.menu__sep[data-v-3e59dfe4]{margin-top:4px;padding-top:4px;border-top:1px solid var(--color-outline)}.menu__item[data-v-3e59dfe4]{display:flex;align-items:center;gap:8px;width:100%;padding:6px 10px;font:inherit;color:var(--color-fg);text-align:left;background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.menu__item[data-v-3e59dfe4]:hover,.menu__item[data-v-3e59dfe4]:focus-visible{background-color:var(--color-sunken)}.menu__item--danger[data-v-3e59dfe4]{color:var(--color-err)}.tree[data-v-d66ba29e]{display:flex;flex-direction:column;min-height:0;height:100%;border-right:1px solid var(--color-divider);background:var(--color-pane);overflow:hidden}.tree__head[data-v-d66ba29e]{display:flex;align-items:center;gap:2px;flex:none;padding:7px 8px 7px 10px;border-bottom:1px solid var(--color-divider)}.tree__title[data-v-d66ba29e]{flex:1 1 auto;margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--color-dim)}.tree__search[data-v-d66ba29e]{flex:none;padding:8px 10px;border-bottom:1px solid var(--color-divider)}.tree__body[data-v-d66ba29e]{flex:1 1 auto;min-height:0;overflow-y:auto;padding:4px 0}.tree__list[data-v-d66ba29e],.tree__sources[data-v-d66ba29e]{margin:0;padding:0;list-style:none}.tree__sources[data-v-d66ba29e]{padding-left:22px}.row[data-v-d66ba29e]{display:flex;align-items:center;gap:2px;padding-left:10px;padding-right:4px}.row[data-v-d66ba29e]:hover{background:var(--color-raised)}.row--on[data-v-d66ba29e],.row--on[data-v-d66ba29e]:hover{background:color-mix(in srgb,var(--color-accent) 14%,transparent)}.row__twist[data-v-d66ba29e]{display:flex;align-items:center;justify-content:center;width:22px;height:26px;flex:none;border:none;background:transparent;color:var(--color-dim);cursor:pointer}.row__twist--none[data-v-d66ba29e]{cursor:default}.row__body[data-v-d66ba29e]{display:flex;align-items:baseline;gap:8px;flex:1 1 auto;min-width:0;padding:3px 2px;border:none;background:transparent;font:inherit;text-align:left;color:var(--color-fg);cursor:pointer;flex-wrap:wrap}.row__body[data-v-d66ba29e]:disabled{cursor:default}.row__body[data-v-d66ba29e]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.row__name[data-v-d66ba29e]{font-family:var(--font-sans);font-size:var(--text-sm);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:10ch}.row--connection .row__name[data-v-d66ba29e]{font-weight:600}.row__icon[data-v-d66ba29e]{flex:none;color:var(--color-dim)}.row__tag[data-v-d66ba29e]{flex:none;max-width:84px;overflow:hidden;text-overflow:ellipsis;padding:0 6px;font-size:.72rem;line-height:1.5;color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);border-radius:999px;white-space:nowrap}.row__tag--more[data-v-d66ba29e]{color:var(--color-dim);background-color:var(--color-sunken)}.row__what[data-v-d66ba29e]{flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__usage[data-v-d66ba29e]{flex:none;margin-left:auto;padding-left:8px;font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.tree__empty[data-v-d66ba29e]{padding:6px 10px;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.tree__none[data-v-d66ba29e]{padding:6px 10px 6px 36px;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.confirm__title[data-v-d66ba29e]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.confirm__text[data-v-d66ba29e]{margin:0 0 6px;color:var(--color-dim);line-height:1.5}.confirm__text--warn[data-v-d66ba29e]{color:var(--color-err)}.editor[data-v-3c4e755c]{display:flex;flex-direction:column;gap:12px;height:100%;min-height:0}.editor__fields[data-v-3c4e755c]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-3c4e755c]{display:flex;justify-content:flex-end;gap:7px}.editor__preview[data-v-3c4e755c]{flex:1 1 auto;min-height:0;display:flex;overflow:auto}.editor[data-v-688945ce]{display:flex;flex-direction:column;gap:12px}.editor__fields[data-v-688945ce]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-688945ce]{display:flex;justify-content:flex-end;gap:7px}.data-page[data-v-58df8ef3]{display:flex;height:100%;min-height:0}.data-page__tree[data-v-58df8ef3]{flex:none;width:320px;min-height:0}.data-page__detail[data-v-58df8ef3]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background:var(--color-pane);overflow:hidden}.data-page__nothing[data-v-58df8ef3]{margin:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.detail__head[data-v-58df8ef3]{display:flex;align-items:baseline;gap:12px;flex:none;padding:12px 16px 8px}.detail__what[data-v-58df8ef3]{display:flex;align-items:baseline;gap:10px;min-width:0}.detail__name[data-v-58df8ef3]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.detail__sub[data-v-58df8ef3]{font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.detail__usage[data-v-58df8ef3]{margin-left:auto;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.detail__body[data-v-58df8ef3]{flex:1 1 auto;min-height:0;overflow:auto;padding:16px}.pages[data-v-46b422e5]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.pages__panel[data-v-46b422e5]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.pages__bar[data-v-46b422e5]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 8px;border-bottom:1px solid var(--color-divider)}.pages__title[data-v-46b422e5]{display:flex;align-items:center;gap:6px;margin:0;font-size:var(--text-sm);font-weight:600;color:var(--color-fg)}.pages__count[data-v-46b422e5]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);font-weight:500;color:var(--color-dim)}.pages__of[data-v-46b422e5]{margin:0;font-size:var(--text-xs);color:var(--color-dim)}.pages__tools[data-v-46b422e5]{display:flex;align-items:center;gap:8px;margin-left:auto}.pages__search[data-v-46b422e5]{height:22px;min-width:180px;padding:0 8px;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:4px}.pages__body[data-v-46b422e5]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background-color:var(--color-bg);overflow:auto}.pages__grid[data-v-46b422e5]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));align-content:start;gap:16px;padding:16px}.page[data-v-46b422e5]{position:relative;display:flex;flex-direction:column;padding:0;overflow:hidden;text-align:left;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);box-shadow:var(--shadow-e1);cursor:pointer;transition:border-color .12s ease,box-shadow .12s ease,transform .12s ease}.page[data-v-46b422e5]:hover,.page[data-v-46b422e5]:focus-visible{border-color:var(--color-outline);box-shadow:var(--shadow-e2);transform:translateY(-1px)}.page__body[data-v-46b422e5]{padding:12px}.page__name[data-v-46b422e5]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.page__meta[data-v-46b422e5]{margin:2px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.page__usage[data-v-46b422e5]{margin:3px 0 0;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.page__kinds[data-v-46b422e5]{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0 0;padding:0;list-style:none}.page__kind[data-v-46b422e5]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-dim);background-color:var(--color-canvas);border-radius:3px}.page__edit[data-v-46b422e5]{position:absolute;top:8px;right:8px;padding:2px 8px;font-family:inherit;font-size:var(--text-xs);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:3px;opacity:0;cursor:pointer}.page:hover .page__edit[data-v-46b422e5],.page__edit[data-v-46b422e5]:focus-visible{opacity:1}.page--new[data-v-46b422e5]{align-items:center;justify-content:center;gap:2px;min-height:180px;font-family:inherit;background-color:transparent;border-style:dashed;box-shadow:none}.page__plus[data-v-46b422e5]{font-size:20px;line-height:1;color:var(--color-outline)}.pages__nomatch[data-v-46b422e5]{grid-column:1 / -1;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.widgets_grid[data-v-3e25af78]{display:flex;flex-direction:column}[data-v-3e25af78] .widgets_grid-item{display:flex;flex-direction:row;align-items:center;gap:9px;padding:6px 12px;font-size:var(--text-base, 13px);color:var(--color-fg);cursor:grab;border-radius:var(--radius-sm, 5px);margin:0 6px}[data-v-3e25af78] .widgets_grid-item:hover{background:var(--color-bg)}[data-v-3e25af78] .widgets_grid-icon{width:26px;height:26px;flex:none;display:inline-flex;align-items:center;justify-content:center;background:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 5px);overflow:hidden}[data-v-3e25af78] .widgets_grid-icon img{max-width:18px;max-height:18px}[data-v-3e25af78] .widgets_grid-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.add_widget_window[data-v-3e25af78]{position:relative;width:100%;height:100%;padding:6px 0}.add_widget_window__scroll[data-v-3e25af78]{height:100%;overflow-y:auto}.scrim[data-v-2e17910f]{position:fixed;inset:0;z-index:40000;display:grid;place-items:stretch;padding:26px 22px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(6px)}.overlay[data-v-2e17910f]{display:flex;min-width:0;min-height:0;background-color:var(--color-bg);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.stage[data-v-2e17910f]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.stage__head[data-v-2e17910f]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.stage__name[data-v-2e17910f]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.stage__uid[data-v-2e17910f]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.stage__spacer[data-v-2e17910f]{flex:1 1 auto}.seg[data-v-2e17910f]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.seg button[data-v-2e17910f]{padding:1px 9px;font-family:inherit;font-size:var(--text-xs);color:var(--color-dim);background:none;border:0;cursor:pointer}.seg button.on[data-v-2e17910f]{color:var(--color-onAccent);background-color:var(--color-accent)}.stage__bar[data-v-2e17910f]{flex:none;padding:5px 12px;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.stage__body[data-v-2e17910f]{flex:1 1 auto;display:grid;place-items:center;min-height:0;padding:18px;background-color:var(--color-canvas);overflow:auto}.preview[data-v-2e17910f]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.handle[data-v-2e17910f]{width:var(--spacing-splitter);flex:none;cursor:col-resize;background-color:var(--color-divider)}.handle[data-v-2e17910f]:hover,.handle[data-v-2e17910f]:focus-visible{background-color:var(--color-accent);outline:none}.side[data-v-2e17910f]{display:flex;flex-direction:column;flex:none;min-width:0;min-height:0;background-color:var(--color-pane)}.tabs[data-v-2e17910f]{display:flex;flex-wrap:wrap;align-items:stretch;min-height:var(--spacing-panelHeader);flex:none;padding:0 6px;gap:1px;border-bottom:1px solid var(--color-divider)}.tab[data-v-2e17910f]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 9px;font-family:inherit;font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab.on[data-v-2e17910f]{color:var(--color-fg);font-weight:600}.tab.on[data-v-2e17910f]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab__n[data-v-2e17910f]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}.fields[data-v-2e17910f]{flex:1 1 auto;min-height:0;padding:10px 12px 16px;overflow-y:auto}.pick[data-v-2e17910f]{margin-bottom:8px}.rest__note[data-v-2e17910f]{margin:0 0 10px;padding:7px 9px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim);background-color:var(--color-raised);border-radius:var(--radius-xs)}.note[data-v-2e17910f]{margin:8px 0 0;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.var-mark[data-v-2e17910f]{font-family:var(--font-mono);font-style:italic;color:var(--color-brand)}.bound[data-v-2e17910f]{width:100%;border-collapse:collapse;font-size:var(--text-sm)}.bound th[data-v-2e17910f]{padding:5px 8px;text-align:left;font-size:var(--text-xs);font-weight:600;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.bound td[data-v-2e17910f]{padding:5px 8px;border-bottom:1px solid var(--color-divider)}.bound__name[data-v-2e17910f],.bound__var[data-v-2e17910f]{font-family:var(--font-mono);font-size:var(--text-xs)}.bound__var[data-v-2e17910f]{color:var(--color-brand)}.foot[data-v-2e17910f]{display:flex;align-items:center;gap:7px;height:38px;flex:none;padding:0 12px;background-color:var(--color-pane);border-top:1px solid var(--color-divider)}.foot__hint[data-v-2e17910f]{font-size:var(--text-xs);color:var(--color-dim)}.tab[data-v-2e17910f]:focus-visible,.seg button[data-v-2e17910f]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.page-settings[data-v-e2914ad9]{position:absolute;top:12px;right:12px;bottom:12px;z-index:1000000;display:flex;flex-direction:column;width:340px;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.head[data-v-e2914ad9]{display:flex;align-items:center;gap:8px;flex:none;height:34px;padding:0 6px 0 12px;border-bottom:1px solid var(--color-divider)}.head__title[data-v-e2914ad9]{flex:1;margin:0;font-size:var(--text-sm, 12px);font-weight:500;color:var(--color-fg)}.head__close[data-v-e2914ad9]{width:24px;height:24px;font-size:16px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.head__close[data-v-e2914ad9]:hover{color:var(--color-fg);background-color:var(--color-raised)}.head__close[data-v-e2914ad9]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.body[data-v-e2914ad9]{flex:1;min-height:0;overflow-y:auto;padding:12px}.group+.group[data-v-e2914ad9]{margin-top:18px}.group__label[data-v-e2914ad9]{margin:0 0 8px;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.group[data-v-e2914ad9]>.field{margin-bottom:8px}.ident[data-v-e2914ad9]{margin:18px 0 0;font-size:var(--text-xs, 11px);color:var(--color-dim)}.ident code[data-v-e2914ad9]{font-family:var(--font-mono);user-select:all}.missing[data-v-e2914ad9]{margin:0;font-size:var(--text-sm, 12px);color:var(--color-dim)}.foot[data-v-e2914ad9]{display:flex;justify-content:flex-end;flex:none;padding:8px 12px;border-top:1px solid var(--color-divider)}.ghost{display:none}.editor[data-v-2da1a581]{position:relative;padding:0;border:0;display:flex;align-items:stretch;width:100%;height:100%;min-height:0;overflow:hidden;background:var(--color-bg)}.palette__act[data-v-2da1a581]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.palette__act[data-v-2da1a581]:hover{color:var(--color-fg);background-color:var(--color-raised)}.palette__act[data-v-2da1a581]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.report-container[data-v-2da1a581]{flex:1 1 auto;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;min-width:0;height:100%;position:relative;background:var(--color-canvas)}.report-container.dottet[data-v-2da1a581]{background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:24px 24px;background-position:-12px -12px;background-repeat:repeat}.report-container__title[data-v-2da1a581]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider)}.report-container .widgets-adding-controls[data-v-2da1a581]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-md, 8px);margin:16px}.report-container .widget-board[data-v-2da1a581]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-2da1a581]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-2da1a581]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-2da1a581]{position:absolute}.dropdown-buttons-container[data-v-2da1a581]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-2da1a581]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-2da1a581]{z-index:20000000!important}.v-enter-active[data-v-2da1a581],.v-leave-active[data-v-2da1a581]{transition:opacity .5s ease}.v-enter-from[data-v-2da1a581],.v-leave-to[data-v-2da1a581]{opacity:0}.variables[data-v-851905bc]{display:flex;flex-direction:column;gap:28px;box-sizing:border-box;width:100%;height:100%;overflow-y:auto;padding:28px 32px 40px;font-family:var(--font-sans);color:var(--color-fg);background-color:var(--color-bg)}.variables__head[data-v-851905bc],.reach[data-v-851905bc]{width:100%;max-width:940px}.variables__head[data-v-851905bc]{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap}.variables__title[data-v-851905bc]{margin:0 0 6px;font-size:20px;font-weight:600;letter-spacing:-.01em}.variables__lead[data-v-851905bc]{margin:0;max-width:56ch;font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}.reach__title[data-v-851905bc]{display:flex;align-items:baseline;gap:12px;margin:0 0 2px;font-size:var(--text-base);font-weight:600}.reach__lead[data-v-851905bc]{font-weight:400;font-size:var(--text-sm);color:var(--color-dim)}.reach__empty[data-v-851905bc]{margin:0;padding:12px 0;border-top:1px solid var(--color-divider);font-size:var(--text-base);color:var(--color-dim)}.rows[data-v-851905bc]{margin:0;padding:0;list-style:none;border-top:1px solid var(--color-divider)}.row[data-v-851905bc]{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1.4fr) minmax(0,2fr) auto;align-items:center;gap:16px;padding:7px 8px 7px 0;border-bottom:1px solid var(--color-divider);font-size:var(--text-base)}.row[data-v-851905bc]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.row__name[data-v-851905bc]{font-family:var(--font-mono);overflow-wrap:anywhere}.row__type[data-v-851905bc],.row__value[data-v-851905bc]{color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__value[data-v-851905bc]{font-family:var(--font-mono);color:var(--color-fg)}.row__tools[data-v-851905bc]{display:flex;gap:2px}.form[data-v-851905bc]{display:flex;flex-direction:column;gap:4px}.confirm__title[data-v-851905bc]{margin:0;font-size:var(--text-lg);font-weight:600}.confirm__text[data-v-851905bc]{margin:0;font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}@media(max-width:640px){.variables[data-v-851905bc]{padding:20px 16px 32px}.row[data-v-851905bc]{grid-template-columns:minmax(0,1fr) auto;row-gap:2px}.row__type[data-v-851905bc],.row__value[data-v-851905bc]{grid-column:1;white-space:normal}}.appearance[data-v-a791e3bf]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.panel[data-v-a791e3bf]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.panel__head[data-v-a791e3bf]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 10px;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.head__tab[data-v-a791e3bf]{position:relative;height:100%;padding:0 10px;font-family:inherit;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);background:none;border:0;cursor:pointer}.head__tab.on[data-v-a791e3bf]{color:var(--color-fg)}.head__tab.on[data-v-a791e3bf]:after{content:\"\";position:absolute;left:6px;right:6px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.head__tab[data-v-a791e3bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.gallery[data-v-a791e3bf]{flex:1 1 auto;min-height:0;padding:16px 18px 24px;overflow-y:auto;background-color:var(--color-bg)}.gallery__lead[data-v-a791e3bf]{margin:0 0 18px;max-width:70ch;font-size:var(--text-sm);color:var(--color-dim)}.demo[data-v-a791e3bf]{margin-bottom:26px}.demo__title[data-v-a791e3bf]{margin:0 0 10px;padding-bottom:4px;font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.demo__row[data-v-a791e3bf]{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:12px}.demo__form[data-v-a791e3bf]{max-width:460px}.panel__tools[data-v-a791e3bf]{display:flex;align-items:center;gap:6px;margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400}.changed[data-v-a791e3bf]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-accent)}.body[data-v-a791e3bf]{display:flex;flex:1 1 auto;min-height:0;background-color:var(--color-bg)}.themes[data-v-a791e3bf]{width:240px;flex:none;display:flex;flex-direction:column;gap:2px;padding:8px 6px;overflow-y:auto;background-color:var(--color-pane);border-right:1px solid var(--color-divider)}.theme[data-v-a791e3bf]{display:grid;gap:3px;padding:8px;font-family:inherit;text-align:left;background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.theme[data-v-a791e3bf]:hover{background-color:var(--color-raised)}.theme.on[data-v-a791e3bf]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);border-color:color-mix(in srgb,var(--color-accent) 45%,transparent)}.theme__strip[data-v-a791e3bf]{display:flex;height:14px;border-radius:2px;overflow:hidden;border:1px solid var(--color-divider)}.theme__strip i[data-v-a791e3bf]{flex:1}.theme__name[data-v-a791e3bf]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.theme__note[data-v-a791e3bf]{font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.tokens[data-v-a791e3bf]{flex:1 1 auto;min-width:0;padding:8px 10px 16px;overflow-y:auto}.group__head[data-v-a791e3bf]{display:flex;align-items:baseline;gap:7px;width:100%;padding:6px 4px;font-family:inherit;font-size:var(--text-base);font-weight:600;color:var(--color-fg);text-align:left;background:none;border:0;border-bottom:1px solid var(--color-divider);cursor:pointer}.group__twist[data-v-a791e3bf]{width:11px;font-size:var(--text-xs);color:var(--color-dim)}.group__count[data-v-a791e3bf]{margin-left:auto;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.group__body[data-v-a791e3bf]{padding:8px 0 14px 18px}.group__note[data-v-a791e3bf]{margin:0 0 8px;font-size:var(--text-sm);color:var(--color-dim);max-width:70ch}.token[data-v-a791e3bf]{display:flex;align-items:center;gap:8px;padding:3px 0}.token__swatch[data-v-a791e3bf]{width:22px;height:22px;flex:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__swatch--none[data-v-a791e3bf]{background:repeating-linear-gradient(45deg,var(--color-raised),var(--color-raised) 3px,var(--color-bg) 3px,var(--color-bg) 6px)}.token__text[data-v-a791e3bf]{display:flex;flex-direction:column;min-width:0;flex:1 1 auto}.token__name[data-v-a791e3bf]{font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg)}.token__role[data-v-a791e3bf]{font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.token__picker[data-v-a791e3bf]{width:28px;height:24px;flex:none;padding:0;background:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__value[data-v-a791e3bf]{width:220px;flex:none;height:24px;padding:0 7px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__reset[data-v-a791e3bf]{width:24px;height:24px;flex:none;font-family:inherit;font-size:var(--text-base);color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__reset[data-v-a791e3bf]:disabled{opacity:.35;cursor:default}.btn[data-v-a791e3bf]{height:22px;padding:0 10px;font-family:inherit;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-a791e3bf]:hover{border-color:var(--color-outline)}.btn[data-v-a791e3bf]:focus-visible,.theme[data-v-a791e3bf]:focus-visible,.group__head[data-v-a791e3bf]:focus-visible,.token__value[data-v-a791e3bf]:focus-visible,.token__picker[data-v-a791e3bf]:focus-visible,.token__reset[data-v-a791e3bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}\n";})();
import { identifier as vm, VARIABLE_WRAPPER_FACTORY as mm } from "org.eclipse.daanse.board.app.lib.factory.variableWrapper";
import { EVENT_MANAGER as _m, EVENT_ACTIONS_REGISTRY_ID as Hl } from "org.eclipse.daanse.board.app.lib.api.events";
import { ref as J, defineComponent as Ge, computed as z, inject as $e, onMounted as jt, onBeforeUnmount as Ia, createElementBlock as $, openBlock as v, Fragment as _e, createElementVNode as c, createBlock as Ie, createCommentVNode as ne, toDisplayString as y, unref as a, renderList as Be, normalizeClass as Pe, withModifiers as ut, createVNode as L, createStaticVNode as bm, Teleport as ui, resolveComponent as ym, shallowRef as ql, watch as it, nextTick as Io, normalizeStyle as Wn, resolveDynamicComponent as en, createTextVNode as de, withDirectives as no, vModelText as ri, withCtx as ae, withKeys as oo, mergeModels as tn, useModel as xn, renderSlot as ou, vShow as ni, Transition as wm, isRef as km, createApp as Sm } from "vue";
import { NAVIGATION_REGISTRY as xm, NAVIGATION_REGISTRY_ID as au, NavigationItem as Cm } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID as ru, RouteDefinition as Kl } from "org.eclipse.daanse.board.app.lib.api.route";
import { useTranslation as Ye, useCurrentHistory as $m, useLanguage as Am, useEList as mt, useGlobalLoading as Im, useFormat as Tm, useEObject as iu, useFeature as Em, describeModel as Sa, useBoard as Rm, VariableComplexStringWrapper as Lm, VARIABLECOMPLEXSTRINGWRAPPER as Pm } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DIcon as ze, DButton as ke, DModal as xa, DField as su, DSwitch as ci, DInput as st, DChip as On, DIconPicker as Ta, DSelect as zt, DTabs as Vm, DColorInput as lu, DFloatingWindow as Om, DDateInput as Dm, DSlider as Wm, DCheckbox as Bm, DDivider as Mm } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useRoute as To, useRouter as Ea, createRouter as Um, createWebHistory as Nm } from "vue-router";
import { identifier as ao } from "org.eclipse.daanse.board.app.lib.api.page";
import { identifier as Ra } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { identifier as Ht, WorkspaceImpl as Fm, ConnectionImpl as zm, DatasourceImpl as Hm, VariableImpl as qm, EventMappingImpl as uu, BoardImpl as Km, PageImpl as Gm, WidgetImpl as Ym, LayoutItemImpl as Zm } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { JSONResource as cu, URI as du, OPTION_INDENT as Xm } from "@emfts/core";
import { identifier as La, CONNECTION_REPOSITORY as Jm } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as Pa, DATASOURCE_REPOSITORY as Qm } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { identifier as fu } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as jm } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { identifier as gu } from "org.eclipse.daanse.board.app.lib.api.widget";
import e_ from "vuedraggable";
import { WrapperSettingsPackage as t_, wrapperSettingsFormXmi as n_, WrapperSettingsImpl as o_, WidgetWrapper as a_ } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { SettingsForm as Ca, isModelled as r_ } from "org.eclipse.daanse.board.app.ui.vue.uimodel";
import { VariableEvents as Gl } from "org.eclipse.daanse.board.app.lib.variables";
import { SystemActionsEcoreContent as i_, WidgetAction as s_ } from "org.eclipse.daanse.board.app.lib.events";
import { loggerFactory as pu } from "org.eclipse.daanse.board.app.lib.logger";
import { component as l_ } from "@eclipse-daanse/tsm";
const { TINY_EMITTER: nu, APP: hm } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), ft = [];
for (let h = 0; h < 256; ++h)
  ft.push((h + 256).toString(16).slice(1));
function u_(h, m = 0) {
  return (ft[h[m + 0]] + ft[h[m + 1]] + ft[h[m + 2]] + ft[h[m + 3]] + "-" + ft[h[m + 4]] + ft[h[m + 5]] + "-" + ft[h[m + 6]] + ft[h[m + 7]] + "-" + ft[h[m + 8]] + ft[h[m + 9]] + "-" + ft[h[m + 10]] + ft[h[m + 11]] + ft[h[m + 12]] + ft[h[m + 13]] + ft[h[m + 14]] + ft[h[m + 15]]).toLowerCase();
}
const c_ = new Uint8Array(16);
function d_() {
  return crypto.getRandomValues(c_);
}
function di(h, m, i) {
  return crypto.randomUUID ? crypto.randomUUID() : f_(h);
}
function f_(h, m, i) {
  h = h || {};
  const p = h.random ?? h.rng?.() ?? d_();
  if (p.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return p[6] = p[6] & 15 | 64, p[8] = p[8] & 63 | 128, u_(p);
}
const oi = J(void 0);
function hu() {
  return {
    /** The page whose settings are open, if any. */
    settingsFor: oi,
    openSettings: (h) => {
      oi.value = h;
    },
    closeSettings: () => {
      oi.value = void 0;
    }
  };
}
const ba = J(!0);
function vu() {
  return {
    visible: ba,
    toggle: () => {
      ba.value = !ba.value;
    },
    hide: () => {
      ba.value = !1;
    }
  };
}
const g_ = "data-board-backdrop", mu = "daanse.board.backdrop";
function p_() {
  try {
    return localStorage.getItem(mu) === "on";
  } catch {
    return !1;
  }
}
const $o = J(p_());
function _u() {
  document.documentElement.setAttribute(g_, $o.value ? "on" : "off");
}
function h_() {
  try {
    localStorage.setItem(mu, $o.value ? "on" : "off");
  } catch {
  }
}
function v_() {
  return {
    shown: $o,
    toggle: () => {
      $o.value = !$o.value, h_(), _u();
    }
  };
}
function m_() {
  _u();
}
const __ = "data-board-snap", bu = "daanse.board.snap";
function b_() {
  try {
    const h = localStorage.getItem(bu);
    return h === null ? !0 : h === "on";
  } catch {
    return !0;
  }
}
const Ao = J(b_());
function yu() {
  document.documentElement.setAttribute(__, Ao.value ? "on" : "off");
}
function y_() {
  try {
    localStorage.setItem(bu, Ao.value ? "on" : "off");
  } catch {
  }
}
function w_() {
  return {
    snapping: Ao,
    toggle: () => {
      Ao.value = !Ao.value, y_(), yu();
    }
  };
}
function k_() {
  yu();
}
const S_ = { class: "topbar" }, x_ = { class: "brand" }, C_ = { class: "brand-name" }, $_ = ["aria-label"], A_ = {
  key: 0,
  class: "crumb-sep",
  "aria-hidden": "true"
}, I_ = ["onClick"], T_ = ["aria-expanded", "title"], E_ = { class: "pages__name" }, R_ = {
  key: 0,
  class: "pages__menu",
  role: "menu"
}, L_ = ["onClick"], P_ = ["title", "aria-label", "onClick"], V_ = { role: "none" }, O_ = ["disabled", "title", "aria-label"], D_ = ["disabled", "title", "aria-label"], W_ = ["aria-pressed", "title", "aria-label"], B_ = ["aria-pressed", "title", "aria-label"], M_ = ["aria-pressed", "title", "aria-label"], U_ = ["title", "aria-label"], N_ = ["title"], F_ = ["aria-label"], z_ = ["aria-pressed"], H_ = ["aria-pressed"], q_ = ["aria-expanded", "title", "aria-label"], K_ = {
  key: 0,
  class: "lang__menu",
  role: "menu"
}, G_ = ["onClick"], Y_ = ["title", "aria-label"], Z_ = ["title"], X_ = /* @__PURE__ */ Ge({
  __name: "Header",
  setup(h) {
    const m = To(), i = Ea(), { t: p } = Ye("shell"), u = z(() => m.params.pageid ?? ""), S = $m(), w = z(
      () => m.name === "edit" || m.name === "pageEdit" || String(m.path).endsWith("/edit")
    ), _ = $e(Ht), { available: k, current: A, choose: d } = Am(), g = J(!1);
    function I(F) {
      d(F), g.value = !1;
    }
    const R = mt(_, (F) => F.board?.pages), K = z(() => {
      R.value;
      const F = { label: p("Header.crumb.boards"), to: "/" }, X = {
        label: _.board?.name || p("Header.crumb.board"),
        to: u.value ? `/page/${u.value}` : void 0
      };
      switch (m.name) {
        case "home":
          return [{ label: p("Header.crumb.boards") }];
        case "page":
          return [F, { label: X.label }];
        case "edit":
        case "pageEdit":
          return [F, X, { label: p("Header.crumb.edit") }];
        case "pages":
          return [F, X, { label: p("Header.crumb.pages") }];
        case "data":
          return [F, { label: p("Header.crumb.data") }];
        case "config":
          return [F, { label: p("Header.crumb.config") }];
        case "save":
          return [F, { label: p("Header.crumb.storage") }];
        case "test":
          return [F, { label: p("Header.crumb.test") }];
        case "appearance":
          return [F, { label: p("Header.appearance") }];
        case "events":
          return [F, { label: p("Header.crumb.events") }];
        default:
          return [F, { label: m.name ? String(m.name) : p("Header.crumb.board") }];
      }
    }), q = z(() => !!u.value), B = $e(ao);
    $e(Ra);
    const { openSettings: N } = hu(), { visible: E, toggle: P } = vu(), { shown: Y, toggle: ee } = v_(), { snapping: Q, toggle: G } = w_(), be = z(() => {
      if (R.value, !u.value) return !1;
      try {
        const F = B?.getPage(u.value);
        return !!(F?.backgroundImage?.trim() || F?.backgroundColor?.trim());
      } catch {
        return !1;
      }
    }), Ue = z(() => {
      R.value;
      const F = B?.getAllPageIds() ?? [], X = [];
      for (const fe of F) {
        const Je = B?.getPage(fe);
        Je && X.push(Je);
      }
      return X;
    }), _t = z(() => {
      if (R.value, !u.value) return "";
      try {
        return B?.getPage(u.value)?.name ?? p("Header.page.fallbackName");
      } catch {
        return p("Header.page.fallbackName");
      }
    }), Ne = J(!1);
    function nt(F) {
      Ne.value = !1, F !== u.value && i.push(w.value ? `/page/${F}/edit` : `/page/${F}`);
    }
    const ge = J(), pe = J();
    function le(F) {
      const X = F.target;
      Ne.value && !ge.value?.contains(X) && (Ne.value = !1), g.value && !pe.value?.contains(X) && (g.value = !1);
    }
    function xe(F) {
      F.key === "Escape" && (Ne.value = !1, g.value = !1);
    }
    jt(() => {
      document.addEventListener("pointerdown", le), document.addEventListener("keydown", xe);
    }), Ia(() => {
      document.removeEventListener("pointerdown", le), document.removeEventListener("keydown", xe);
    });
    function se() {
      const F = di();
      B?.registerPage({
        id: F,
        name: p("Page.newName"),
        description: "",
        icon: "",
        visibleInNavigation: !0,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), Ne.value = !1, i.push(`/page/${F}/edit`);
    }
    const ye = z(() => Ue.value.length > 1);
    function ot(F) {
      if (!ye.value) return;
      const X = Ue.value.find((fe) => fe.id === F);
      if (confirm(p("Header.page.confirmRemove", { name: X?.name ?? F })) && (B?.unregisterPage(F), F === u.value)) {
        const fe = Ue.value.find((Je) => Je.id !== F);
        fe && i.push(w.value ? `/page/${fe.id}/edit` : `/page/${fe.id}`);
      }
    }
    const pt = () => {
      u.value && i.push(`/page/${u.value}`);
    }, je = () => {
      u.value && i.push(`/page/${u.value}/edit`);
    }, j = () => i.push({ path: "/", query: { view: "storage" } }), oe = () => i.push("/appearance");
    return (F, X) => (v(), $(_e, null, [
      c("header", S_, [
        c("span", x_, [
          X[8] || (X[8] = c("span", {
            class: "brand-mark",
            "aria-hidden": "true"
          }, "D", -1)),
          c("span", C_, y(a(p)("Header.brand")), 1)
        ]),
        c("nav", {
          class: "crumb",
          "aria-label": a(p)("Header.crumb.label")
        }, [
          (v(!0), $(_e, null, Be(K.value, (fe, Je) => (v(), $(_e, {
            key: fe.label + Je
          }, [
            Je > 0 ? (v(), $("span", A_, "/")) : ne("", !0),
            fe.to && Je < K.value.length - 1 ? (v(), $("button", {
              key: 1,
              type: "button",
              class: "crumb-part crumb-link",
              onClick: (kt) => a(i).push(fe.to)
            }, y(fe.label), 9, I_)) : (v(), $("span", {
              key: 2,
              class: Pe(["crumb-part", { current: Je === K.value.length - 1 }])
            }, y(fe.label), 3))
          ], 64))), 128))
        ], 8, $_),
        q.value ? (v(), $("div", {
          key: 0,
          ref_key: "menuHost",
          ref: ge,
          class: "pages"
        }, [
          c("button", {
            type: "button",
            class: "pages__current",
            "aria-expanded": Ne.value,
            "aria-haspopup": "menu",
            title: a(p)("Header.page.switch"),
            onClick: X[0] || (X[0] = (fe) => Ne.value = !Ne.value)
          }, [
            c("span", E_, y(_t.value), 1),
            X[9] || (X[9] = c("span", {
              class: "pages__caret",
              "aria-hidden": "true"
            }, "▾", -1))
          ], 8, T_),
          Ne.value ? (v(), $("ul", R_, [
            (v(!0), $(_e, null, Be(Ue.value, (fe) => (v(), $("li", {
              key: fe.id,
              role: "none",
              class: "pages__line"
            }, [
              c("button", {
                type: "button",
                role: "menuitem",
                class: Pe(["pages__item", { on: fe.id === u.value }]),
                onClick: (Je) => nt(fe.id)
              }, y(fe.name), 11, L_),
              ye.value ? (v(), $("button", {
                key: 0,
                type: "button",
                class: "pages__remove",
                title: a(p)("Header.page.remove", { name: fe.name }),
                "aria-label": a(p)("Header.page.remove", { name: fe.name }),
                onClick: ut((Je) => ot(fe.id), ["stop"])
              }, " × ", 8, P_)) : ne("", !0)
            ]))), 128)),
            X[10] || (X[10] = c("li", {
              class: "pages__sep",
              role: "separator"
            }, null, -1)),
            c("li", V_, [
              c("button", {
                type: "button",
                role: "menuitem",
                class: "pages__item pages__add",
                onClick: se
              }, y(a(p)("Header.page.add")), 1)
            ])
          ])) : ne("", !0)
        ], 512)) : ne("", !0),
        w.value && a(S) ? (v(), $("button", {
          key: 1,
          type: "button",
          class: "icon-action",
          disabled: !a(S).canUndo.value,
          title: a(S).undoLabel.value ? a(p)("Header.undoWhat", { what: a(p)(a(S).undoLabel.value) }) : a(p)("Header.undo"),
          "aria-label": a(p)("Header.undoLabel"),
          onClick: X[1] || (X[1] = (fe) => a(S).undo())
        }, [
          L(a(ze), {
            name: "undo",
            size: "sm"
          })
        ], 8, O_)) : ne("", !0),
        w.value && a(S) ? (v(), $("button", {
          key: 2,
          type: "button",
          class: "icon-action",
          disabled: !a(S).canRedo.value,
          title: a(S).redoLabel.value ? a(p)("Header.redoWhat", { what: a(p)(a(S).redoLabel.value) }) : a(p)("Header.redo"),
          "aria-label": a(p)("Header.redoLabel"),
          onClick: X[2] || (X[2] = (fe) => a(S).redo())
        }, [
          L(a(ze), {
            name: "redo",
            size: "sm"
          })
        ], 8, D_)) : ne("", !0),
        w.value ? (v(), $("button", {
          key: 3,
          type: "button",
          class: Pe(["icon-action", { on: a(Q) }]),
          "aria-pressed": a(Q),
          title: a(p)("Header.snap"),
          "aria-label": a(p)("Header.snapLabel"),
          onClick: X[3] || (X[3] = //@ts-ignore
          (...fe) => a(G) && a(G)(...fe))
        }, [...X[11] || (X[11] = [
          c("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            c("path", {
              d: "M9 3.5v17M15 3.5v17M3.5 9h17M3.5 15h17",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.3",
              opacity: "0.55"
            }),
            c("rect", {
              x: "9",
              y: "9",
              width: "6",
              height: "6",
              fill: "currentColor"
            })
          ], -1)
        ])], 10, W_)) : ne("", !0),
        w.value && be.value ? (v(), $("button", {
          key: 4,
          type: "button",
          class: Pe(["icon-action", { on: a(Y) }]),
          "aria-pressed": a(Y),
          title: a(p)("Header.backdrop"),
          "aria-label": a(p)("Header.backdropLabel"),
          onClick: X[4] || (X[4] = //@ts-ignore
          (...fe) => a(ee) && a(ee)(...fe))
        }, [...X[12] || (X[12] = [
          c("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            c("rect", {
              x: "3.5",
              y: "5",
              width: "17",
              height: "14",
              rx: "1.5",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6"
            }),
            c("circle", {
              cx: "9",
              cy: "10",
              r: "1.6",
              fill: "currentColor"
            }),
            c("path", {
              d: "M4 17l4.5-4.5 3 3L15 12l5 5",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6",
              "stroke-linejoin": "round"
            })
          ], -1)
        ])], 10, B_)) : ne("", !0),
        w.value ? (v(), $("button", {
          key: 5,
          type: "button",
          class: Pe(["icon-action", { on: a(E) }]),
          "aria-pressed": a(E),
          title: a(p)("Header.palette"),
          "aria-label": a(p)("Header.paletteLabel"),
          onClick: X[5] || (X[5] = //@ts-ignore
          (...fe) => a(P) && a(P)(...fe))
        }, [...X[13] || (X[13] = [
          bm('<svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15" data-v-4121259c><rect x="3.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-4121259c></rect><rect x="13.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-4121259c></rect><rect x="3.5" y="13.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-4121259c></rect><rect x="13.5" y="13.5" width="7" height="7" rx="1" fill="currentColor" stroke="currentColor" stroke-width="1.6" data-v-4121259c></rect></svg>', 1)
        ])], 10, M_)) : ne("", !0),
        q.value ? (v(), $("button", {
          key: 6,
          type: "button",
          class: "icon-action",
          title: a(p)("Header.pageSettings"),
          "aria-label": a(p)("Header.pageSettings"),
          onClick: X[6] || (X[6] = (fe) => a(N)(u.value))
        }, [...X[14] || (X[14] = [
          c("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            c("circle", {
              cx: "12",
              cy: "12",
              r: "3.2",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6"
            }),
            c("path", {
              d: "M12 4.2v2M12 17.8v2M4.2 12h2M17.8 12h2M6.5 6.5l1.4 1.4M16.1 16.1l1.4 1.4M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6",
              "stroke-linecap": "round"
            })
          ], -1)
        ])], 8, U_)) : ne("", !0),
        X[16] || (X[16] = c("span", { class: "spacer" }, null, -1)),
        q.value ? (v(), $("button", {
          key: 7,
          type: "button",
          class: "action",
          title: a(p)("Header.storageLabel"),
          onClick: j
        }, y(a(p)("Header.storage")), 9, N_)) : ne("", !0),
        q.value ? (v(), $("div", {
          key: 8,
          class: "modes",
          role: "group",
          "aria-label": a(p)("Header.mode")
        }, [
          c("button", {
            type: "button",
            class: Pe(["mode", { on: !w.value }]),
            "aria-pressed": !w.value,
            onClick: pt
          }, y(a(p)("Header.view")), 11, z_),
          c("button", {
            type: "button",
            class: Pe(["mode", { on: w.value }]),
            "aria-pressed": w.value,
            onClick: je
          }, y(a(p)("Header.edit")), 11, H_)
        ], 8, F_)) : ne("", !0),
        a(k).length > 1 ? (v(), $("div", {
          key: 9,
          ref_key: "languageHost",
          ref: pe,
          class: "lang"
        }, [
          c("button", {
            type: "button",
            class: "icon-action lang__button",
            "aria-expanded": g.value,
            "aria-haspopup": "menu",
            title: a(p)("Header.language"),
            "aria-label": a(p)("Header.language"),
            onClick: X[7] || (X[7] = (fe) => g.value = !g.value)
          }, y((a(A) ?? "").slice(0, 2).toUpperCase()), 9, q_),
          g.value ? (v(), $("ul", K_, [
            (v(!0), $(_e, null, Be(a(k), (fe) => (v(), $("li", {
              key: fe.tag,
              role: "none"
            }, [
              c("button", {
                type: "button",
                role: "menuitem",
                class: Pe(["lang__item", { on: fe.tag === a(A) }]),
                onClick: (Je) => I(fe.tag)
              }, y(fe.label), 11, G_)
            ]))), 128))
          ])) : ne("", !0)
        ], 512)) : ne("", !0),
        c("button", {
          type: "button",
          class: "icon-action",
          title: a(p)("Header.appearance"),
          "aria-label": a(p)("Header.appearance"),
          onClick: oe
        }, [...X[15] || (X[15] = [
          c("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            c("circle", {
              cx: "12",
              cy: "12",
              r: "9",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6"
            }),
            c("path", {
              d: "M12 3a9 9 0 0 1 0 18z",
              fill: "currentColor"
            })
          ], -1)
        ])], 8, Y_),
        c("span", {
          class: "avatar",
          title: a(p)("Header.signedIn")
        }, "MH", 8, Z_)
      ]),
      (v(), Ie(ui, { to: "body" }))
    ], 64));
  }
}), Xe = (h, m) => {
  const i = h.__vccOpts || h;
  for (const [p, u] of m)
    i[p] = u;
  return i;
}, J_ = /* @__PURE__ */ Xe(X_, [["__scopeId", "data-v-4121259c"]]), $a = [
  {
    id: "surfaces",
    label: "shell:Tokens.group.surfaces.label",
    note: "shell:Tokens.group.surfaces.note",
    tokens: [
      { name: "color-bg", role: "shell:Tokens.role.colorBg", kind: "color" },
      { name: "color-pane", role: "shell:Tokens.role.colorPane", kind: "color" },
      { name: "color-raised", role: "shell:Tokens.role.colorRaised", kind: "color" },
      { name: "color-canvas", role: "shell:Tokens.role.colorCanvas", kind: "color" },
      { name: "color-divider", role: "shell:Tokens.role.colorDivider", kind: "color" },
      { name: "color-outline", role: "shell:Tokens.role.colorOutline", kind: "color" }
    ]
  },
  {
    id: "text",
    label: "shell:Tokens.group.text.label",
    note: "shell:Tokens.group.text.note",
    tokens: [
      { name: "color-fg", role: "shell:Tokens.role.colorFg", kind: "color" },
      { name: "color-dim", role: "shell:Tokens.role.colorDim", kind: "color" },
      { name: "color-accent", role: "shell:Tokens.role.colorAccent", kind: "color" },
      { name: "color-onAccent", role: "shell:Tokens.role.colorOnAccent", kind: "color" },
      { name: "color-brand", role: "shell:Tokens.role.colorBrand", kind: "color" },
      { name: "color-brandFill", role: "shell:Tokens.role.colorBrandFill", kind: "color" },
      { name: "color-onBrand", role: "shell:Tokens.role.colorOnBrand", kind: "color" }
    ]
  },
  {
    id: "state",
    label: "shell:Tokens.group.state.label",
    note: "shell:Tokens.group.state.note",
    tokens: [
      { name: "color-ok", role: "shell:Tokens.role.colorOk", kind: "color" },
      { name: "color-warn", role: "shell:Tokens.role.colorWarn", kind: "color" },
      { name: "color-err", role: "shell:Tokens.role.colorErr", kind: "color" }
    ]
  },
  {
    id: "syntax",
    label: "shell:Tokens.group.syntax.label",
    note: "shell:Tokens.group.syntax.note",
    tokens: [
      { name: "color-kw", role: "shell:Tokens.role.colorKw", kind: "color" },
      { name: "color-measure", role: "shell:Tokens.role.colorMeasure", kind: "color" },
      { name: "color-member", role: "shell:Tokens.role.colorMember", kind: "color" },
      { name: "color-fn", role: "shell:Tokens.role.colorFn", kind: "color" }
    ]
  },
  {
    id: "type",
    label: "shell:Tokens.group.type.label",
    note: "shell:Tokens.group.type.note",
    tokens: [
      { name: "font-sans", role: "shell:Tokens.role.fontSans", kind: "font" },
      { name: "font-mono", role: "shell:Tokens.role.fontMono", kind: "font" },
      { name: "text-xs", role: "shell:Tokens.role.textXs", kind: "length" },
      { name: "text-sm", role: "shell:Tokens.role.textSm", kind: "length" },
      { name: "text-base", role: "shell:Tokens.role.textBase", kind: "length" },
      { name: "text-lg", role: "shell:Tokens.role.textLg", kind: "length" },
      { name: "text-xl", role: "shell:Tokens.role.textXl", kind: "length" }
    ]
  },
  {
    id: "shape",
    label: "shell:Tokens.group.shape.label",
    tokens: [
      { name: "radius-xs", role: "shell:Tokens.role.radiusXs", kind: "length" },
      { name: "radius-sm", role: "shell:Tokens.role.radiusSm", kind: "length" },
      { name: "radius-md", role: "shell:Tokens.role.radiusMd", kind: "length" },
      { name: "radius-lg", role: "shell:Tokens.role.radiusLg", kind: "length" },
      { name: "shadow-e1", role: "shell:Tokens.role.shadowE1", kind: "shadow" },
      { name: "shadow-e2", role: "shell:Tokens.role.shadowE2", kind: "shadow" },
      { name: "shadow-e3", role: "shell:Tokens.role.shadowE3", kind: "shadow" }
    ]
  }
], wu = $a.flatMap((h) => h.tokens.map((m) => m.name));
new Map(
  $a.flatMap((h) => h.tokens).map((h) => [h.name, h])
);
const Q_ = {
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
}, ai = "'Barlow', system-ui, -apple-system, 'Segoe UI', sans-serif", Yl = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace", Zl = "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace", ya = {
  "text-xs": "11px",
  "text-sm": "12px",
  "text-base": "13px",
  "text-lg": "15px",
  "text-xl": "24px"
}, ku = [
  {
    id: "messwarte",
    name: "shell:Themes.messwarte.name",
    note: "shell:Themes.messwarte.note",
    dark: !0,
    tokens: {
      ...ya,
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
      "font-sans": ai,
      "font-mono": Yl,
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
    name: "shell:Themes.messwarteHell.name",
    note: "shell:Themes.messwarteHell.note",
    dark: !1,
    tokens: {
      ...ya,
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
      "font-sans": ai,
      "font-mono": Yl,
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
    name: "shell:Themes.kartenblatt.name",
    note: "shell:Themes.kartenblatt.note",
    dark: !1,
    tokens: {
      ...ya,
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
      "font-mono": Zl,
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
    name: "shell:Themes.werkbank.name",
    note: "shell:Themes.werkbank.note",
    dark: !1,
    tokens: {
      ...ya,
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
      "font-sans": ai,
      "font-mono": Zl,
      "radius-xs": "3px",
      "radius-sm": "6px",
      "radius-md": "8px",
      "radius-lg": "12px",
      "shadow-e1": "0 1px 2px rgba(36, 34, 25, 0.12)",
      "shadow-e2": "0 2px 8px rgba(36, 34, 25, 0.12)",
      "shadow-e3": "0 8px 24px rgba(36, 34, 25, 0.14)"
    }
  }
], Xl = "messwarte", Su = "daanse.board.theme";
function j_() {
  const h = { themeId: Xl, overrides: {} };
  try {
    const m = localStorage.getItem(Su);
    if (!m) return h;
    const i = JSON.parse(m);
    return {
      themeId: typeof i?.themeId == "string" ? i.themeId : Xl,
      // Only tokens we know about - a stale name would write a dead property
      overrides: Object.fromEntries(
        Object.entries(i?.overrides ?? {}).filter(
          ([p, u]) => wu.includes(p) && typeof u == "string"
        )
      )
    };
  } catch {
    return h;
  }
}
const gt = J(j_()), ii = J([]);
function wa() {
  try {
    localStorage.setItem(Su, JSON.stringify(gt.value));
  } catch {
  }
}
function to() {
  const h = xo.value.find((p) => p.id === gt.value.themeId);
  if (!h) return;
  const m = document.documentElement, i = { ...h.tokens, ...gt.value.overrides };
  for (const [p, u] of Object.entries(i))
    m.style.setProperty(`--${p}`, u);
  for (const [p, u] of Object.entries(Q_)) {
    const S = i[u];
    S && m.style.setProperty(`--${p}`, S);
  }
  m.style.colorScheme = h.dark ? "dark" : "light", m.setAttribute("data-theme", h.dark ? "dark" : "light");
}
const xo = z(() => [...ku, ...ii.value]);
function xu() {
  const { t: h } = Ye("shell"), m = z(
    () => xo.value.find((d) => d.id === gt.value.themeId) ?? ku[0]
  );
  function i(d) {
    return gt.value.overrides[d] ?? m.value.tokens[d] ?? "";
  }
  function p(d) {
    return d in gt.value.overrides;
  }
  function u(d) {
    xo.value.some((g) => g.id === d) && (gt.value = { themeId: d, overrides: {} }, wa(), to());
  }
  function S(d, g) {
    wu.includes(d) && (gt.value = {
      ...gt.value,
      overrides: { ...gt.value.overrides, [d]: g }
    }, wa(), to());
  }
  function w(d) {
    const { [d]: g, ...I } = gt.value.overrides;
    gt.value = { ...gt.value, overrides: I }, wa(), to();
  }
  function _() {
    gt.value = { ...gt.value, overrides: {} }, wa(), to();
  }
  function k(d) {
    xo.value.some((g) => g.id === d.id) || (ii.value = [...ii.value, d]);
  }
  function A() {
    return {
      ...m.value,
      id: `${m.value.id}-eigen`,
      /* Words, not keys: an exported theme is read outside this app. */
      name: h("Themes.customized", { name: h(m.value.name) }),
      note: h(m.value.note),
      tokens: { ...m.value.tokens, ...gt.value.overrides }
    };
  }
  return {
    themes: xo,
    activeTheme: m,
    overrides: z(() => gt.value.overrides),
    valueOf: i,
    isOverridden: p,
    selectTheme: u,
    setToken: S,
    clearToken: w,
    clearAllTokens: _,
    addTheme: k,
    exportTheme: A,
    apply: to
  };
}
function eb() {
  to();
}
const tb = { class: "shell" }, nb = {
  key: 0,
  class: "global-loading-bar"
}, ob = ["aria-label"], ab = ["aria-current", "title"], rb = { class: "sr-only" }, ib = ["aria-current", "title"], sb = { class: "sr-only" }, lb = ["aria-current", "title"], ub = { class: "sr-only" }, cb = ["aria-current", "title", "onClick"], db = { class: "sr-only" }, fb = { class: "content" }, gb = /* @__PURE__ */ Ge({
  __name: "App",
  setup(h) {
    const m = J([]), { isLoading: i } = Im(), { t: p } = Ye("shell");
    xu();
    const u = To(), S = Ea();
    jt(() => {
      const d = $e(xm);
      m.value = d.getAllNavigationItemsArray ? d.getAllNavigationItemsArray() : [];
    });
    const w = z(
      () => u.params.pageid ? `/page/${u.params.pageid}` : "/page/abc"
    ), _ = z(() => String(u.name) === "home" && !u.params.pageid), k = z(
      () => ["home", "page", "edit", "pageEdit"].includes(String(u.name))
    ), A = (d) => S.push(d);
    return (d, g) => {
      const I = ym("router-view");
      return v(), $("div", tb, [
        a(i) ? (v(), $("div", nb, [...g[3] || (g[3] = [
          c("div", { class: "global-loading-bar-progress" }, null, -1)
        ])])) : ne("", !0),
        L(J_),
        c("div", {
          class: Pe(["shell-body", { "shell-body--norail": _.value }])
        }, [
          _.value ? ne("", !0) : (v(), $("nav", {
            key: 0,
            class: "rail",
            "aria-label": a(p)("Rail.areas")
          }, [
            c("button", {
              type: "button",
              class: Pe(["ri", { on: k.value }]),
              "aria-current": k.value ? "page" : void 0,
              title: a(p)("Rail.board"),
              onClick: g[0] || (g[0] = (R) => A(w.value))
            }, [
              L(a(ze), { name: "dashboard" }),
              c("span", rb, y(a(p)("Rail.board")), 1)
            ], 10, ab),
            c("button", {
              type: "button",
              class: Pe(["ri", { on: a(u).name === "pages" }]),
              "aria-current": a(u).name === "pages" ? "page" : void 0,
              title: a(p)("Rail.pages"),
              onClick: g[1] || (g[1] = (R) => A("/pages"))
            }, [
              L(a(ze), { name: "layers" }),
              c("span", sb, y(a(p)("Rail.pages")), 1)
            ], 10, ib),
            c("button", {
              type: "button",
              class: Pe(["ri", { on: a(u).name === "data" }]),
              "aria-current": a(u).name === "data" ? "page" : void 0,
              title: a(p)("Rail.data"),
              onClick: g[2] || (g[2] = (R) => A("/datasources"))
            }, [
              L(a(ze), { name: "dataset" }),
              c("span", ub, y(a(p)("Rail.data")), 1)
            ], 10, lb),
            (v(!0), $(_e, null, Be(m.value, (R) => (v(), $("button", {
              key: R.id,
              type: "button",
              class: Pe(["ri", { on: a(u).name === R.routeName }]),
              "aria-current": a(u).name === R.routeName ? "page" : void 0,
              title: a(p)(R.label),
              onClick: (K) => A(R.route)
            }, [
              L(a(ze), {
                name: R.icon
              }, null, 8, ["name"]),
              c("span", db, y(a(p)(R.label)), 1)
            ], 10, cb))), 128)),
            g[4] || (g[4] = c("span", { class: "rail-spacer" }, null, -1))
          ], 8, ob)),
          c("main", fb, [
            (v(), Ie(I, {
              key: d.$route.fullPath
            }))
          ])
        ], 2)
      ]);
    };
  }
}), pb = /* @__PURE__ */ Xe(gb, [["__scopeId", "data-v-b6d1fa2b"]]), Cu = "daanse.board.usage";
function hb() {
  try {
    const h = localStorage.getItem(Cu), m = h ? JSON.parse(h) : {};
    return m && typeof m == "object" ? m : {};
  } catch {
    return {};
  }
}
const gn = J(hb());
function fi() {
  const h = Tm();
  function m(S) {
    if (!S) return;
    const w = gn.value[S];
    gn.value = {
      ...gn.value,
      [S]: { count: (w?.count ?? 0) + 1, lastOpened: Date.now() }
    };
    try {
      localStorage.setItem(Cu, JSON.stringify(gn.value));
    } catch {
    }
  }
  function i(S) {
    return gn.value[S];
  }
  function p(S, w) {
    const _ = gn.value[S], k = gn.value[w];
    return (k?.count ?? 0) !== (_?.count ?? 0) ? (k?.count ?? 0) - (_?.count ?? 0) : (k?.lastOpened ?? 0) - (_?.lastOpened ?? 0);
  }
  function u(S) {
    const w = gn.value[S]?.lastOpened;
    return w ? h.relativeDays(w) : "";
  }
  return { usage: gn, recordOpened: m, usageOf: i, byUsage: p, lastOpenedLabel: u };
}
const vb = {
  key: 0,
  class: "loading-state"
}, mb = {
  key: 1,
  class: "view-component-wrapper"
}, _b = {
  key: 2,
  class: "edit-component-wrapper"
}, bb = {
  key: 3,
  class: "no-layout-message"
}, yb = { class: "no-layout-message__text" }, wb = { key: 0 }, kb = { key: 1 }, Sb = { key: 2 }, xb = /* @__PURE__ */ Ge({
  __name: "LayoutRenderer",
  props: {
    pageId: {},
    viewMode: { type: Boolean }
  },
  emits: ["openWidgetSettings", "removeWidget"],
  setup(h, { emit: m }) {
    const i = h, p = m, { t: u } = Ye("shell"), S = $e(Ra), w = $e(ao), _ = J(null), k = J(null), A = ql(null), d = ql(null), g = J(0), I = J(!0), R = (Y) => {
      p("openWidgetSettings", Y);
    }, K = (Y) => {
      p("removeWidget", Y);
    };
    let q = 0;
    const B = async () => {
      const Y = ++q;
      if (I.value = !0, await Io(), Y === q) {
        if (i.pageId && w) {
          const ee = w.getPage(i.pageId);
          if (_.value = ee ?? null, ee?.layoutId && S) {
            const Q = S.getLayout(ee.layoutId);
            k.value = Q || null, i.viewMode ? (d.value = Q?.component || null, A.value = null) : (A.value = Q?.editor || null, d.value = null);
          } else
            A.value = null, d.value = null, k.value = null;
        }
        await new Promise((ee) => setTimeout(ee, 50)), Y === q && (I.value = !1);
      }
    }, N = () => i.pageId ? w?.getPage(i.pageId) : void 0, E = iu(N);
    it(E, () => {
      _.value = E.value ?? null;
    });
    const P = Em(N, "layoutId");
    return it(P, () => {
      g.value++, B();
    }), jt(async () => {
      await Io(), await B();
    }), (Y, ee) => (v(), $("div", {
      class: "layout-renderer",
      style: Wn({
        backgroundColor: _.value?.backgroundColor || void 0,
        backgroundImage: _.value?.backgroundImage ? `url(${_.value.backgroundImage})` : void 0,
        backgroundSize: _.value?.backgroundSize || "cover",
        backgroundPosition: _.value?.backgroundPosition || "center",
        backgroundRepeat: _.value?.backgroundRepeat || "no-repeat"
      })
    }, [
      I.value ? (v(), $("div", vb, [
        ee[0] || (ee[0] = c("span", {
          class: "spinner",
          "aria-hidden": "true"
        }, null, -1)),
        c("p", null, y(a(u)("Layout.loading")), 1)
      ])) : i.viewMode && d.value && k.value ? (v(), $("div", mb, [
        (v(), Ie(en(d.value), {
          key: k.value.id || "view",
          "layout-settings": _.value?.layoutSettings
        }, null, 8, ["layout-settings"]))
      ])) : !i.viewMode && A.value && k.value ? (v(), $("div", _b, [
        (v(), Ie(en(A.value), {
          key: k.value.id || "edit",
          "layout-settings": _.value?.layoutSettings,
          onOpenSettings: R,
          onRemoveWidget: K
        }, null, 40, ["layout-settings"]))
      ])) : (v(), $("div", bb, [
        c("p", yb, [
          L(a(ze), {
            name: "warning",
            size: "lg",
            tone: "color-warn"
          }),
          _.value ? k.value ? (v(), $("span", Sb, [
            de(y(i.viewMode ? a(u)("Layout.noView") : a(u)("Layout.noEditor")) + " ", 1),
            ee[1] || (ee[1] = c("br", null, null, -1)),
            c("small", null, y(a(u)("Layout.id", { id: k.value.id })), 1)
          ])) : (v(), $("span", kb, y(a(u)("Layout.noLayout", { name: _.value.name || i.pageId })), 1)) : (v(), $("span", wb, y(a(u)("Layout.noPage", { id: i.pageId })), 1))
        ])
      ]))
    ], 4));
  }
}), $u = /* @__PURE__ */ Xe(xb, [["__scopeId", "data-v-5802657f"]]), Cb = {
  class: "floorplan",
  "aria-hidden": "true"
}, $b = {
  key: 0,
  class: "floorplan__empty"
}, Ab = /* @__PURE__ */ Ge({
  __name: "BoardFloorplan",
  props: {
    items: {},
    typeById: {}
  },
  setup(h) {
    const m = h, { t: i } = Ye("shell");
    function p(S) {
      const w = (S ?? "").toLowerCase();
      return /chart|table|pivot|kpi|progress|timeline|filter|rss|weather/.test(w) ? "data" : /map|routing|image|video|vanta|svg|icon|mermaid|geo/.test(w) ? "visual" : "text";
    }
    const u = z(() => {
      const S = (m.items ?? []).filter(
        (d) => Number.isFinite(d.x) && Number.isFinite(d.y)
      );
      if (S.length === 0) return [];
      const w = Math.max(...S.map((d) => (d.x ?? 0) + (d.width ?? 1))), _ = Math.max(...S.map((d) => (d.y ?? 0) + (d.height ?? 1))), k = w > 0 ? w : 1, A = _ > 0 ? _ : 1;
      return S.map((d) => ({
        key: d.id ?? `${d.x}-${d.y}`,
        family: p(m.typeById?.[d.id ?? ""]),
        style: {
          left: `${(d.x ?? 0) / k * 100}%`,
          top: `${(d.y ?? 0) / A * 100}%`,
          // minus the gutter, so neighbouring widgets stay visibly separate
          width: `calc(${Math.max((d.width ?? 1) / k * 100, 3)}% - 3px)`,
          height: `calc(${Math.max((d.height ?? 1) / A * 100, 6)}% - 3px)`
        }
      }));
    });
    return (S, w) => (v(), $("div", Cb, [
      (v(!0), $(_e, null, Be(u.value, (_) => (v(), $("div", {
        key: _.key,
        class: Pe(["floorplan__block", `floorplan__block--${_.family}`]),
        style: Wn(_.style)
      }, null, 6))), 128)),
      u.value.length === 0 ? (v(), $("span", $b, y(a(i)("Floorplan.empty")), 1)) : ne("", !0)
    ]));
  }
}), gi = /* @__PURE__ */ Xe(Ab, [["__scopeId", "data-v-a2dc7e22"]]), { parse: Ib } = JSON, { keys: Tb } = Object, Aa = String, Eb = "string", Jl = {}, Au = "object", Rb = (h, m) => m, Lb = (h) => h instanceof Aa ? Aa(h) : h, Pb = (h, m) => typeof m === Eb ? new Aa(m) : m, Vb = (h, m, i, p) => (u) => {
  for (let S = Tb(u), { length: w } = S, _ = 0; _ < w; _++) {
    const k = S[_], A = u[k];
    if (A instanceof Aa) {
      const d = h[+A];
      typeof d === Au && !i.has(d) ? (i.add(d), u[k] = Jl, m.push({ o: u, k, r: d })) : u[k] = p.call(u, k, d);
    } else u[k] !== Jl && (u[k] = p.call(u, k, A));
  }
  return u;
}, Ob = (h, m) => {
  const i = Ib(h, Pb).map(Lb), p = Rb;
  let u = i[0];
  if (typeof u === Au && u) {
    const S = [], w = Vb(i, S, /* @__PURE__ */ new Set(), p);
    u = w(u);
    let _ = 0;
    for (; _ < S.length; ) {
      const { o: k, k: A, r: d } = S[_++];
      k[A] = p.call(k, A, w(d));
    }
  }
  return p.call({ "": u }, "", u);
};
function Db(h) {
  if (h) {
    if (typeof h == "object") return h;
    if (typeof h == "string")
      try {
        const m = JSON.parse(h);
        return Array.isArray(m) ? Ob(h) : m;
      } catch {
        return;
      }
  }
}
function Wb(h) {
  return typeof h.eClass == "string";
}
function Bb(h) {
  if (!h || typeof h != "object") return;
  const m = new Fm(), i = /* @__PURE__ */ new Map();
  for (const w of h.conections ?? []) {
    const _ = new zm();
    _.uid = w.uid, _.name = w.name, _.type = w.type, _.config = w.config ?? {}, m.connections.push(_), i.set(w.uid, _);
  }
  const p = /* @__PURE__ */ new Map();
  for (const w of h.datasources ?? []) {
    const _ = new Hm();
    _.uid = w.uid, _.name = w.name, _.type = w.type, _.config = w.config ?? {};
    const k = i.get((w.config ?? {}).connection);
    k && (_.connection = k), m.datasources.push(_), p.set(w.uid, _);
  }
  const u = [];
  for (const w of h.variables ?? []) {
    const _ = new qm();
    _.uid = w.id ?? w.uid ?? Math.random().toString(36).substring(7), _.name = w.name, _.type = w.type, _.scope = w.scope ?? "global", _.accessMode = w.accessMode ?? "external-writable", _.definition = w, m.variables.push(_), u.push({ entry: w, variable: _ });
  }
  for (const w of h.eventMappings ?? []) {
    const _ = new uu();
    _.id = w.id, _.definition = w, m.eventMappings.push(_);
  }
  const S = new Km();
  S.id = crypto.randomUUID(), S.name = "Board", m.board = S;
  for (const [w, _] of Object.entries(h.pages ?? {})) {
    const k = _?.info ?? {}, A = new Gm();
    A.id = k.id ?? w, A.name = k.name ?? "Seite", A.description = k.description, A.icon = k.icon, A.visibleInNavigation = k.visibleInNavigation ?? !0, A.layoutId = k.layoutId ?? k.layout?.id ?? "org.eclipse.daanse.board.app.ui.vue.layouts.base", A.layoutSettings = k.layoutSettings, A.backgroundColor = k.backgroundColor, A.backgroundImage = k.backgroundImage, A.backgroundSize = k.backgroundSize, A.backgroundPosition = k.backgroundPosition, A.backgroundRepeat = k.backgroundRepeat;
    for (const d of _?.widgets ?? []) {
      const g = new Ym();
      g.uid = d.uid, g.type = d.type, g.config = d.config ?? {}, g.wrapperConfig = d.wrapperConfig ?? {};
      const I = p.get(d.config?.datasourceId);
      I && (g.datasource = I), A.widgets.push(g);
    }
    for (const d of _?.layout ?? []) {
      const g = new Zm();
      g.id = d.id, g.x = d.x ?? 0, g.y = d.y ?? 0, g.z = d.z ?? 0, g.width = d.width ?? 300, g.height = d.height ?? 150, g.group = d.group, A.layout.push(g);
    }
    S.pages.push(A);
  }
  for (const { entry: w, variable: _ } of u) {
    const k = w.pageId;
    k && (_.page = S.pages.toArray().find((A) => A.id === k));
  }
  return S.pages.size() > 0 && (S.defaultPage = S.pages.get(0)), m;
}
const Mb = J();
function Ub() {
  return Mb;
}
const Iu = "workspace.json", Nb = "http://org.eclipse.daanse.board.app.lib.model.workspace#//Board";
function Fb(h) {
  if (!h || typeof h != "object") return h;
  const m = h;
  if (m.board || !Array.isArray(m.pages)) return h;
  const i = JSON.parse(
    JSON.stringify(m).replace(/"\/\/@pages\./g, '"//@board/@pages.')
  ), p = {
    eClass: Nb,
    id: crypto.randomUUID(),
    /* Nothing in the old shape named the board; the pages were the boards. */
    name: "Board",
    pages: i.pages
  }, u = i.defaultPage;
  return u?.$ref?.includes("//@board/@pages.") && (p.defaultPage = u), delete i.pages, delete i.defaultPage, i.board = p, i;
}
function si(h) {
  const m = Db(h);
  if (m)
    try {
      if (!Wb(m)) return Bb(m);
      const i = new cu(du.createURI(Iu));
      return i.loadFromString(JSON.stringify(Fb(m))), i.getContents().get(0);
    } catch {
      return;
    }
}
function zb() {
  const h = $e(Ht), m = $e(La), i = $e(Pa), p = $e(fu), u = $e(vm), S = $e(_m);
  function w() {
    h.eventMappings.clear();
    for (const A of S?.getAllMappings() ?? []) {
      const d = new uu();
      d.id = A.id, d.definition = A, h.eventMappings.push(d);
    }
  }
  function _() {
    w();
    const A = new cu(du.createURI(Iu));
    A.getContents().add(h);
    const d = A.saveToString(/* @__PURE__ */ new Map([[Xm, 2]]));
    return A.getContents().clear(), d;
  }
  function k(A) {
    const d = si(A);
    if (!d) return [];
    h.connections.clear();
    for (const I of d.connections.toArray()) h.connections.push(I);
    h.datasources.clear();
    for (const I of d.datasources.toArray()) h.datasources.push(I);
    h.board = d.board, h.variables.clear();
    for (const I of d.variables.toArray()) h.variables.push(I);
    h.eventMappings.clear();
    for (const I of d.eventMappings.toArray()) h.eventMappings.push(I);
    m?.rebuildLive(), i?.rebuildLive(), p?.rebuildLive(), S?.setAllMappings(
      h.eventMappings.toArray().map((I) => I.definition)
    );
    const g = [];
    for (const I of h.board?.pages.toArray() ?? [])
      u?.initilazeVariableWrappers(
        I.widgets.toArray().map((R) => ({
          uid: R.uid,
          type: R.type,
          config: R.config,
          wrapperConfig: R.wrapperConfig
        }))
      ), g.push(I.id);
    return g;
  }
  return { save: _, load: k };
}
function Hb(h) {
  const m = h.split(".").filter(Boolean);
  return (m[m.length - 1] ?? h).replace(/widget$/i, "") || h;
}
function pi(h, m, i, p) {
  const u = Array.isArray(i) ? i : [], S = Array.isArray(p) ? p : [], w = {};
  for (const A of S)
    A?.uid && A.type && (w[A.uid] = A.type);
  const _ = new Set(
    S.map((A) => A?.config?.datasourceId).filter((A) => !!A)
  ), k = [...new Set(S.map((A) => Hb(A?.type ?? "")).filter(Boolean))];
  return {
    id: h,
    name: m?.name || "Unbenanntes Board",
    description: m?.description ?? "",
    items: u,
    typeById: w,
    widgetCount: S.length,
    sourceCount: _.size,
    kinds: k
  };
}
const qb = { class: "storage" }, Kb = ["aria-label"], Gb = ["placeholder", "aria-label"], Yb = {
  class: "tree__body",
  role: "tree"
}, Zb = ["aria-expanded", "onClick"], Xb = { class: "row__twist" }, Jb = { class: "row__name" }, Qb = { class: "row__meta" }, jb = ["onClick"], e1 = { class: "row__name" }, t1 = { class: "row__meta" }, n1 = {
  key: 0,
  class: "row row--hint"
}, o1 = ["onClick"], a1 = { class: "row__name" }, r1 = {
  key: 0,
  class: "row row--hint"
}, i1 = { class: "detail" }, s1 = {
  key: 0,
  class: "detail__failure",
  role: "alert"
}, l1 = { class: "detail__head" }, u1 = { class: "detail__name" }, c1 = { class: "detail__facts" }, d1 = {
  class: "create__label",
  for: "storage-name"
}, f1 = ["placeholder"], g1 = { class: "create__hint" }, p1 = { class: "detail__head" }, h1 = { class: "detail__name" }, v1 = {
  key: 0,
  class: "detail__badge"
}, m1 = { class: "detail__facts" }, _1 = {
  key: 0,
  class: "boards"
}, b1 = { class: "board__text" }, y1 = { class: "board__name" }, w1 = { class: "board__facts" }, k1 = {
  key: 0,
  class: "board__kinds"
}, S1 = {
  key: 1,
  class: "detail__hint"
}, x1 = {
  key: 4,
  class: "detail__hint"
}, C1 = {
  key: 5,
  class: "detail__hint"
}, $1 = /* @__PURE__ */ Ge({
  __name: "WorkspaceStorage",
  emits: ["restored"],
  setup(h, { emit: m }) {
    const i = m, p = $e(jm), { save: u, load: S } = zb(), { t: w } = Ye("shell"), _ = J([]), k = J({}), A = J(/* @__PURE__ */ new Set()), d = J(), g = J(), I = J(""), R = J(""), K = J(!1), q = Ub(), B = J(!1), N = J("");
    function E(H) {
      return typeof H == "string" ? H : H?.message ?? String(H);
    }
    function P(H) {
      return H.name ?? String(H.uri).split("/").pop() ?? String(H.uri);
    }
    function Y(H) {
      return String(H.uri);
    }
    function ee(H, Z) {
      const re = new URL(String(H.uri));
      return re.pathname = `/${Z}.json`, re;
    }
    function Q(H) {
      const Z = H ? Object.getPrototypeOf(H)?.constructor : void 0;
      return Z && "type" in Z ? String(Z.type) : "";
    }
    function G(H) {
      return typeof H?.create == "function";
    }
    function be(H) {
      const Z = Q(H);
      if (!(!Z || !p?.isViewForRepoType(Z)))
        return p.getViewForRepoType(Z);
    }
    const Ue = z(() => be(d.value));
    async function _t() {
      _.value = await p?.getAvailableReposetories() ?? [];
      const H = _.value[0];
      H && A.value.size === 0 && (d.value = H, await Ne(H));
    }
    async function Ne(H) {
      A.value.add(Y(H)), A.value = new Set(A.value), await nt(H);
    }
    async function nt(H) {
      R.value = "", K.value = !0;
      try {
        k.value = { ...k.value, [Y(H)]: await H.findAll() };
      } catch (Z) {
        k.value = { ...k.value, [Y(H)]: [] }, R.value = w("Storage.failure.read", { reason: E(Z) });
      } finally {
        K.value = !1;
      }
    }
    function ge(H) {
      d.value = H, B.value = !1, A.value.has(Y(H)) ? (A.value.delete(Y(H)), A.value = new Set(A.value)) : Ne(H);
    }
    function pe(H) {
      const Z = k.value[Y(H)] ?? [], re = I.value.trim().toLowerCase();
      return [...re ? Z.filter((U) => P(U).toLowerCase().includes(re)) : Z].sort((U, ce) => P(U).localeCompare(P(ce)));
    }
    function le(H, Z) {
      d.value = H, g.value = Z, B.value = !1, R.value = "";
    }
    function xe(H) {
      return String(H.uri) === q.value?.entryUri;
    }
    function se(H, Z) {
      q.value = { placeUri: String(d.value?.uri), entryUri: String(H.uri), name: Z };
    }
    function ye(H) {
      return ot(si(H?.data));
    }
    function ot(H) {
      return (H?.board?.pages.toArray() ?? []).map(
        (Z) => pi(Z.id, Z, Z.layout.toArray(), Z.widgets.toArray())
      );
    }
    const pt = z(() => ye(g.value)), je = z(() => ({
      boards: pt.value.length,
      widgets: pt.value.reduce((H, Z) => H + Z.widgetCount, 0),
      sources: pt.value.reduce((H, Z) => H + Z.sourceCount, 0)
    }));
    function j(H) {
      const Z = ye(H);
      return Z.length === 0 ? w("Storage.entry.empty") : w("Storage.pages", { count: Z.length });
    }
    const oe = z(() => {
      if (!B.value) return { boards: 0, widgets: 0 };
      const H = ot(si(u()));
      return {
        boards: H.length,
        widgets: H.reduce((Z, re) => Z + re.widgetCount, 0)
      };
    });
    async function F(H) {
      R.value = "";
      try {
        const Z = await d.value?.getEntityByUri(H.uri), re = S(Z?.data ?? H.data);
        se(H, P(H)), i("restored", re);
      } catch (Z) {
        R.value = w("Storage.failure.load", { reason: E(Z) });
      }
    }
    async function X(H) {
      const Z = d.value;
      if (Z) {
        R.value = "";
        try {
          await Z.update({ ...H, data: u() }), se(H, P(H)), await nt(Z), g.value = pe(Z).find((re) => String(re.uri) === String(H.uri));
        } catch (re) {
          R.value = w("Storage.failure.save", { reason: E(re) });
        }
      }
    }
    function fe(H) {
      d.value = H, g.value = void 0, B.value = !0, N.value = "", R.value = "";
    }
    async function Je() {
      const H = d.value, Z = N.value.trim();
      if (!(!H || !Z)) {
        R.value = "";
        try {
          const re = { name: Z, uri: ee(H, Z), data: u() };
          await H.create(re), se(re, Z), await Ne(H), B.value = !1, g.value = pe(H).find((V) => P(V) === Z);
        } catch (re) {
          R.value = w("Storage.failure.create", { reason: E(re) });
        }
      }
    }
    async function kt(H) {
      const Z = d.value;
      if (Z) {
        R.value = "";
        try {
          await Z.delete(H), xe(H) && (q.value = void 0), g.value === H && (g.value = void 0), await nt(Z);
        } catch (re) {
          R.value = w("Storage.failure.remove", { reason: E(re) });
        }
      }
    }
    function St(H) {
      const Z = typeof H.data == "string" ? H.data : JSON.stringify(H.data), re = URL.createObjectURL(new Blob([Z], { type: "application/json" })), V = document.createElement("a");
      V.href = re, V.download = `${P(H)}.json`, V.click(), URL.revokeObjectURL(re);
    }
    return jt(_t), it(() => p, _t), (H, Z) => (v(), $("div", qb, [
      c("aside", {
        class: "tree",
        "aria-label": a(w)("Storage.title")
      }, [
        no(c("input", {
          "onUpdate:modelValue": Z[0] || (Z[0] = (re) => I.value = re),
          class: "tree__search",
          type: "search",
          placeholder: a(w)("Storage.filter"),
          "aria-label": a(w)("Storage.filter")
        }, null, 8, Gb), [
          [ri, I.value]
        ]),
        c("div", Yb, [
          (v(!0), $(_e, null, Be(_.value, (re) => (v(), $(_e, {
            key: Y(re)
          }, [
            c("button", {
              type: "button",
              role: "treeitem",
              "aria-expanded": A.value.has(Y(re)),
              class: Pe(["row", "row--place", { on: d.value === re && !g.value }]),
              onClick: (V) => ge(re)
            }, [
              c("span", Xb, y(A.value.has(Y(re)) ? "▾" : "▸"), 1),
              c("span", Jb, y(re.name), 1),
              c("span", Qb, y((k.value[Y(re)] ?? []).length), 1)
            ], 10, Zb),
            A.value.has(Y(re)) ? (v(), $(_e, { key: 0 }, [
              (v(!0), $(_e, null, Be(pe(re), (V) => (v(), $("button", {
                key: String(V.uri),
                type: "button",
                role: "treeitem",
                class: Pe(["row", "row--entry", { on: g.value === V }]),
                onClick: (U) => le(re, V)
              }, [
                c("span", {
                  class: Pe(["row__dot", { open: xe(V) }]),
                  "aria-hidden": "true"
                }, null, 2),
                c("span", e1, y(P(V)), 1),
                c("span", t1, y(j(V)), 1)
              ], 10, jb))), 128)),
              pe(re).length === 0 ? (v(), $("p", n1, y(I.value ? a(w)("Storage.nothingFound") : a(w)("Storage.noEntry")), 1)) : ne("", !0),
              G(re) ? (v(), $("button", {
                key: 1,
                type: "button",
                class: "row row--add",
                onClick: (V) => fe(re)
              }, [
                Z[8] || (Z[8] = c("span", { class: "row__twist" }, "＋", -1)),
                c("span", a1, y(a(w)("Storage.storeCurrent")), 1)
              ], 8, o1)) : ne("", !0)
            ], 64)) : ne("", !0)
          ], 64))), 128)),
          _.value.length ? ne("", !0) : (v(), $("p", r1, y(a(w)("Storage.noPlaces")), 1))
        ])
      ], 8, Kb),
      c("section", i1, [
        R.value ? (v(), $("p", s1, y(R.value), 1)) : ne("", !0),
        B.value ? (v(), $(_e, { key: 1 }, [
          c("header", l1, [
            c("h2", u1, y(a(w)("Storage.create.title")), 1),
            c("span", c1, y(a(w)("Storage.create.in", { place: d.value?.name })), 1)
          ]),
          c("form", {
            class: "create",
            onSubmit: ut(Je, ["prevent"])
          }, [
            c("label", d1, y(a(w)("Storage.create.name")), 1),
            no(c("input", {
              id: "storage-name",
              "onUpdate:modelValue": Z[1] || (Z[1] = (re) => N.value = re),
              class: "create__input",
              type: "text",
              placeholder: a(w)("Storage.create.placeholder")
            }, null, 8, f1), [
              [ri, N.value]
            ]),
            L(a(ke), {
              intent: "primary",
              size: "sm",
              type: "submit",
              disabled: !N.value.trim()
            }, {
              default: ae(() => [
                de(y(a(w)("Storage.create.submit")), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            L(a(ke), {
              size: "sm",
              onClick: Z[2] || (Z[2] = (re) => B.value = !1)
            }, {
              default: ae(() => [
                de(y(a(w)("common:Action.cancel")), 1)
              ]),
              _: 1
            }),
            c("p", g1, y(a(w)("Storage.create.hint", { pages: a(w)("Storage.pages", { count: oe.value.boards }), widgets: a(w)("Storage.widgets", { count: oe.value.widgets }) })), 1)
          ], 32)
        ], 64)) : Ue.value && !g.value ? (v(), Ie(en(Ue.value), {
          key: 2,
          repo: d.value,
          context: k.value[Y(d.value)],
          onClose: Z[3] || (Z[3] = (re) => nt(d.value))
        }, null, 40, ["repo", "context"])) : g.value ? (v(), $(_e, { key: 3 }, [
          c("header", p1, [
            c("h2", h1, y(P(g.value)), 1),
            xe(g.value) ? (v(), $("span", v1, y(a(w)("Storage.loaded")), 1)) : ne("", !0),
            c("span", m1, y(d.value?.name) + " · " + y(a(w)("Storage.pages", { count: je.value.boards })) + " · " + y(a(w)("Storage.widgets", { count: je.value.widgets })) + " · " + y(a(w)("Storage.sources", { count: je.value.sources })), 1),
            Z[9] || (Z[9] = c("span", { class: "detail__spacer" }, null, -1)),
            L(a(ke), {
              intent: "primary",
              size: "sm",
              onClick: Z[4] || (Z[4] = (re) => F(g.value))
            }, {
              default: ae(() => [
                de(y(a(w)("Storage.load")), 1)
              ]),
              _: 1
            }),
            G(d.value) ? (v(), Ie(a(ke), {
              key: 1,
              size: "sm",
              title: a(w)("Storage.overwriteLabel"),
              onClick: Z[5] || (Z[5] = (re) => X(g.value))
            }, {
              default: ae(() => [
                de(y(a(w)("Storage.overwrite")), 1)
              ]),
              _: 1
            }, 8, ["title"])) : ne("", !0),
            L(a(ke), {
              size: "sm",
              onClick: Z[6] || (Z[6] = (re) => St(g.value))
            }, {
              default: ae(() => [
                de(y(a(w)("Storage.download")), 1)
              ]),
              _: 1
            }),
            G(d.value) ? (v(), Ie(a(ke), {
              key: 2,
              intent: "danger",
              size: "sm",
              onClick: Z[7] || (Z[7] = (re) => kt(g.value))
            }, {
              default: ae(() => [
                de(y(a(w)("common:Action.delete")), 1)
              ]),
              _: 1
            })) : ne("", !0)
          ]),
          pt.value.length ? (v(), $("div", _1, [
            (v(!0), $(_e, null, Be(pt.value, (re) => (v(), $("article", {
              key: re.id,
              class: "board"
            }, [
              L(gi, {
                items: re.items,
                "type-by-id": re.typeById
              }, null, 8, ["items", "type-by-id"]),
              c("div", b1, [
                c("h3", y1, y(re.name), 1),
                c("p", w1, y(a(w)("Storage.widgets", { count: re.widgetCount })) + " · " + y(a(w)("Storage.sources", { count: re.sourceCount })), 1),
                re.kinds.length ? (v(), $("p", k1, y(re.kinds.join(" · ")), 1)) : ne("", !0)
              ])
            ]))), 128))
          ])) : (v(), $("p", S1, y(a(w)("Storage.noBoard")), 1))
        ], 64)) : K.value ? (v(), $("p", x1, y(a(w)("Storage.reading")), 1)) : (v(), $("p", C1, y(a(w)("Storage.pick")), 1))
      ])
    ]));
  }
}), A1 = /* @__PURE__ */ Xe($1, [["__scopeId", "data-v-327d5f23"]]), I1 = { class: "boards" }, T1 = { class: "boards__panel" }, E1 = { class: "boards__bar" }, R1 = ["aria-label"], L1 = ["aria-selected"], P1 = ["aria-selected"], V1 = { class: "boards__body" }, O1 = {
  key: 0,
  class: "boards__empty"
}, D1 = { class: "boards__empty-title" }, W1 = { class: "boards__empty-text" }, B1 = { class: "boards__empty-actions" }, M1 = {
  key: 1,
  class: "single"
}, U1 = { class: "single__heading" }, N1 = ["aria-label", "onKeydown"], F1 = {
  class: "single__icon",
  "aria-hidden": "true"
}, z1 = { class: "single__text" }, H1 = { class: "single__name" }, q1 = {
  key: 0,
  class: "single__desc"
}, K1 = { class: "single__meta" }, G1 = { class: "single__actions" }, Y1 = { class: "single__note" }, Z1 = /* @__PURE__ */ Ge({
  __name: "BoardsHome",
  props: {
    pageRepo: {},
    layoutRepo: {}
  },
  setup(h) {
    const m = h, i = Ea(), p = To(), { t: u } = Ye("shell"), { byUsage: S } = fi(), w = $e(Ht), _ = mt(w, (E) => E.board?.pages), k = z(() => (_.value, w.board)), A = J(p.query.view === "storage" ? "storage" : "recent"), d = z(() => {
      _.value;
      const E = m.pageRepo;
      return E ? E.getAllPageIds().slice().sort(S).map(
        (P) => pi(
          P,
          E.getPage(P),
          E.getPage(P)?.layout?.toArray() ?? [],
          E.getPage(P)?.widgets?.toArray() ?? []
        )
      ) : [];
    }), g = z(() => ({
      pages: d.value.length,
      widgets: d.value.reduce((E, P) => E + P.widgetCount, 0),
      sources: new Set(d.value.flatMap((E) => E.kinds)).size
    })), I = z(
      () => m.pageRepo?.getDefaultPage()?.id ?? d.value[0]?.id
    );
    function R(E) {
      i.push(`/page/${E}`);
    }
    function K() {
      const E = I.value;
      E && R(E);
    }
    function q() {
      const E = m.pageRepo;
      if (!E || !m.layoutRepo) return;
      const P = di();
      E.registerPage({
        id: P,
        name: u("Page.newName"),
        description: "",
        icon: "",
        visibleInNavigation: !0,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), i.push(`/page/${P}/edit`);
    }
    function B() {
      A.value = "storage";
    }
    function N(E) {
      const P = m.pageRepo?.getDefaultPage()?.id ?? E[0];
      P ? i.push(`/page/${P}`) : A.value = "recent";
    }
    return (E, P) => (v(), $("div", I1, [
      c("div", T1, [
        c("header", E1, [
          c("div", {
            class: "boards__views",
            role: "tablist",
            "aria-label": a(u)("Boards.views")
          }, [
            c("button", {
              type: "button",
              role: "tab",
              "aria-selected": A.value === "recent",
              class: Pe(["boards__view", { on: A.value === "recent" }]),
              onClick: P[0] || (P[0] = (Y) => A.value = "recent")
            }, y(a(u)("Boards.recent")), 11, L1),
            c("button", {
              type: "button",
              role: "tab",
              "aria-selected": A.value === "storage",
              class: Pe(["boards__view", { on: A.value === "storage" }]),
              onClick: P[1] || (P[1] = (Y) => A.value = "storage")
            }, y(a(u)("Boards.storage")), 11, P1)
          ], 8, R1)
        ]),
        c("div", V1, [
          A.value === "recent" && d.value.length === 0 ? (v(), $("div", O1, [
            L(gi, {
              class: "boards__empty-plan",
              items: [
                { id: "a", x: 0, y: 0, width: 2, height: 1 },
                { id: "b", x: 2, y: 0, width: 1, height: 2 },
                { id: "c", x: 0, y: 1, width: 1, height: 1 },
                { id: "d", x: 1, y: 1, width: 1, height: 1 }
              ],
              "type-by-id": { a: "chart", b: "map", c: "table", d: "text" }
            }),
            c("h2", D1, y(a(u)("Boards.empty.title")), 1),
            c("p", W1, y(a(u)("Boards.empty.text")), 1),
            c("div", B1, [
              L(a(ke), {
                intent: "primary",
                size: "sm",
                onClick: q
              }, {
                default: ae(() => [
                  de(y(a(u)("Boards.empty.create")), 1)
                ]),
                _: 1
              }),
              L(a(ke), {
                size: "sm",
                onClick: B
              }, {
                default: ae(() => [
                  de(y(a(u)("Boards.empty.openStored")), 1)
                ]),
                _: 1
              })
            ])
          ])) : A.value === "recent" ? (v(), $("div", M1, [
            c("h2", U1, y(a(u)("Boards.open.heading")), 1),
            c("article", {
              class: "single__card",
              tabindex: "0",
              role: "button",
              "aria-label": a(u)("Boards.open.label", { name: k.value?.name ?? "" }),
              onClick: K,
              onKeydown: [
                oo(K, ["enter"]),
                oo(ut(K, ["prevent"]), ["space"])
              ]
            }, [
              c("span", F1, [
                L(a(ze), {
                  name: k.value?.icon || "dashboard",
                  size: "lg"
                }, null, 8, ["name"])
              ]),
              c("div", z1, [
                c("h3", H1, y(k.value?.name || a(u)("Boards.open.fallbackName")), 1),
                k.value?.description ? (v(), $("p", q1, y(k.value.description), 1)) : ne("", !0),
                c("p", K1, y(a(u)("Boards.open.pages", { count: g.value.pages })) + " · " + y(a(u)("Boards.open.widgets", { count: g.value.widgets })), 1)
              ]),
              c("div", G1, [
                L(a(ke), {
                  intent: "primary",
                  size: "sm",
                  onClick: ut(K, ["stop"])
                }, {
                  default: ae(() => [
                    de(y(a(u)("Boards.open.action")), 1)
                  ]),
                  _: 1
                })
              ])
            ], 40, N1),
            c("p", Y1, y(a(u)("Boards.open.note")), 1)
          ])) : (v(), Ie(A1, {
            key: 2,
            onRestored: N
          }))
        ])
      ])
    ]));
  }
}), X1 = /* @__PURE__ */ Xe(Z1, [["__scopeId", "data-v-9d29d7b5"]]), J1 = { class: "report-container" }, Q1 = /* @__PURE__ */ Ge({
  __name: "ViewReport",
  props: ["params"],
  setup(h) {
    const m = h, i = To(), p = $e(ao), u = $e(Ra), S = z(() => m.params?.pageid ?? i.params.pageid ?? ""), { recordOpened: w } = fi();
    return it(S, (_) => w(_), { immediate: !0 }), (_, k) => (v(), $("div", J1, [
      S.value ? (v(), Ie($u, {
        key: 0,
        pageId: S.value,
        viewMode: !0
      }, null, 8, ["pageId"])) : (v(), Ie(X1, {
        key: 1,
        "page-repo": a(p),
        "layout-repo": a(u)
      }, null, 8, ["page-repo", "layout-repo"]))
    ]));
  }
}), Ql = /* @__PURE__ */ Xe(Q1, [["__scopeId", "data-v-3ecae506"]]), j1 = { boards: 0, widgets: 0 };
function Tu() {
  const h = $e(ao), { t: m } = Ye("shell");
  function i() {
    const S = {};
    if (!h) return S;
    for (const w of h.getAllPageIds()) {
      const _ = /* @__PURE__ */ new Set();
      for (const k of h.getPage(w)?.widgets?.toArray() ?? []) {
        const A = k.datasource?.uid;
        if (!A) continue;
        const d = S[A] ??= { boards: 0, widgets: 0 };
        d.widgets++, _.add(A);
      }
      for (const k of _) S[k].boards++;
    }
    return S;
  }
  function p(S) {
    return i()[S] ?? j1;
  }
  function u(S) {
    return S.widgets ? m("Usage.label", {
      boards: m("Usage.boards", { count: S.boards }),
      widgets: m("Usage.widgets", { count: S.widgets })
    }) : "";
  }
  return { usageByDatasource: i, usageOf: p, usageLabel: u };
}
const ey = {
  key: 0,
  class: "pick"
}, ty = { class: "pick__lead" }, ny = {
  key: 0,
  class: "pick__rubric"
}, oy = { class: "tiles" }, ay = ["onClick"], ry = { class: "tile__head" }, iy = { class: "tile__name" }, sy = {
  key: 0,
  class: "tile__what"
}, ly = {
  key: 1,
  class: "fill"
}, uy = { class: "chosen" }, cy = {
  class: "chosen__icon",
  "aria-hidden": "true"
}, dy = { class: "chosen__text" }, fy = { class: "chosen__name" }, gy = {
  key: 0,
  class: "chosen__what"
}, py = { class: "fill__fields" }, hy = /* @__PURE__ */ Ge({
  __name: "CreateWizard",
  props: /* @__PURE__ */ tn({
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
  emits: /* @__PURE__ */ tn(["create"], ["update:modelValue", "update:type"]),
  setup(h, { emit: m }) {
    const i = xn(h, "modelValue"), p = xn(h, "type"), u = h, S = m, { t: w } = Ye("shell"), _ = J(1);
    it(i, (d) => {
      d && (_.value = 1);
    });
    const k = z(() => u.groups.filter((d) => d.types.length));
    function A(d) {
      p.value = d, _.value = 2;
    }
    return (d, g) => (v(), Ie(a(xa), {
      modelValue: i.value,
      "onUpdate:modelValue": g[4] || (g[4] = (I) => i.value = I),
      title: h.title,
      size: "lg",
      onCancel: g[5] || (g[5] = (I) => i.value = !1)
    }, {
      actions: ae(() => [
        _.value === 2 ? (v(), Ie(a(ke), {
          key: 0,
          intent: "quiet",
          onClick: g[1] || (g[1] = (I) => _.value = 1)
        }, {
          default: ae(() => [
            de(y(a(w)("Wizard.back")), 1)
          ]),
          _: 1
        })) : ne("", !0),
        L(a(ke), {
          intent: "quiet",
          onClick: g[2] || (g[2] = (I) => i.value = !1)
        }, {
          default: ae(() => [
            de(y(a(w)("common:Action.cancel")), 1)
          ]),
          _: 1
        }),
        _.value === 2 ? (v(), Ie(a(ke), {
          key: 1,
          intent: "primary",
          disabled: !h.ready,
          onClick: g[3] || (g[3] = (I) => S("create"))
        }, {
          default: ae(() => [
            de(y(h.createLabel ?? a(w)("Wizard.create")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : ne("", !0)
      ]),
      default: ae(() => [
        _.value === 1 ? (v(), $("div", ey, [
          c("p", ty, y(h.lead), 1),
          (v(!0), $(_e, null, Be(k.value, (I) => (v(), $("section", {
            key: I.label,
            class: "pick__group"
          }, [
            k.value.length > 1 ? (v(), $("h3", ny, y(I.label), 1)) : ne("", !0),
            c("ul", oy, [
              (v(!0), $(_e, null, Be(I.types, (R) => (v(), $("li", { key: R }, [
                c("button", {
                  type: "button",
                  class: Pe(["tile", { "tile--on": p.value === R }]),
                  onClick: (K) => A(R)
                }, [
                  c("span", ry, [
                    L(a(ze), {
                      name: h.iconOf(R),
                      size: "sm",
                      class: "tile__icon"
                    }, null, 8, ["name"]),
                    c("span", iy, y(R), 1),
                    p.value === R ? (v(), Ie(a(ze), {
                      key: 0,
                      name: "check",
                      size: "sm",
                      class: "tile__check"
                    })) : ne("", !0)
                  ]),
                  h.summaryOf(R) ? (v(), $("span", sy, y(h.summaryOf(R)), 1)) : ne("", !0)
                ], 10, ay)
              ]))), 128))
            ])
          ]))), 128))
        ])) : (v(), $("div", ly, [
          c("header", uy, [
            c("span", cy, [
              L(a(ze), {
                name: h.iconOf(p.value),
                size: "lg"
              }, null, 8, ["name"])
            ]),
            c("div", dy, [
              c("span", fy, y(p.value), 1),
              h.summaryOf(p.value) ? (v(), $("p", gy, y(h.summaryOf(p.value)), 1)) : ne("", !0)
            ]),
            L(a(ke), {
              intent: "quiet",
              size: "sm",
              onClick: g[0] || (g[0] = (I) => _.value = 1)
            }, {
              default: ae(() => [
                de(y(a(w)("Wizard.otherType")), 1)
              ]),
              _: 1
            })
          ]),
          c("div", py, [
            ou(d.$slots, "setup", {}, void 0, !0)
          ])
        ]))
      ]),
      _: 3
    }, 8, ["modelValue", "title"]));
  }
}), Eu = /* @__PURE__ */ Xe(hy, [["__scopeId", "data-v-d4b46673"]]), vy = {
  key: 0,
  class: "model__none"
}, my = {
  key: 1,
  class: "model__none"
}, _y = /* @__PURE__ */ Ge({
  __name: "ModelFields",
  props: {
    doc: {},
    config: {},
    omit: { default: () => [] }
  },
  setup(h) {
    const m = h, { t: i } = Ye("shell"), p = /* @__PURE__ */ new Set(["name", "type", "uid"]), u = z(
      () => (m.doc?.features ?? []).filter(
        (_) => !p.has(_.name) && !m.omit.includes(_.name) && !_.many
      )
    );
    function S(_) {
      const k = _.name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/_/g, " ");
      return k.charAt(0).toUpperCase() + k.slice(1);
    }
    function w(_, k) {
      m.config[_.name] = k === "" ? void 0 : Number(k);
    }
    return (_, k) => h.doc ? u.value.length ? (v(!0), $(_e, { key: 2 }, Be(u.value, (A) => (v(), $(_e, {
      key: A.name
    }, [
      A.type === "boolean" ? (v(), Ie(a(su), {
        key: 0,
        label: S(A),
        hint: A.documentation,
        stacked: ""
      }, {
        default: ae(() => [
          L(a(ci), {
            "model-value": !!h.config[A.name],
            "onUpdate:modelValue": (d) => h.config[A.name] = d
          }, null, 8, ["model-value", "onUpdate:modelValue"])
        ]),
        _: 2
      }, 1032, ["label", "hint"])) : A.type === "number" ? (v(), Ie(a(st), {
        key: 1,
        "model-value": h.config[A.name] ?? "",
        label: S(A),
        hint: A.documentation,
        required: !A.optional,
        type: "number",
        stacked: "",
        "onUpdate:modelValue": (d) => w(A, d)
      }, null, 8, ["model-value", "label", "hint", "required", "onUpdate:modelValue"])) : (v(), Ie(a(st), {
        key: 2,
        "model-value": h.config[A.name] ?? "",
        label: S(A),
        hint: A.documentation,
        required: !A.optional,
        type: /url|uri|endpoint/i.test(A.name) ? "url" : "text",
        stacked: "",
        "onUpdate:modelValue": (d) => h.config[A.name] = d
      }, null, 8, ["model-value", "label", "hint", "required", "type", "onUpdate:modelValue"]))
    ], 64))), 128)) : (v(), $("p", my, y(a(i)("ModelFields.nothing")), 1)) : (v(), $("p", vy, y(a(i)("ModelFields.noModel")), 1));
  }
}), Ru = /* @__PURE__ */ Xe(_y, [["__scopeId", "data-v-57df2bbc"]]), by = { class: "tags" }, yy = {
  key: 0,
  class: "tags__held"
}, wy = {
  key: 1,
  class: "tags__offer"
}, ky = ["onMousedown"], Sy = /* @__PURE__ */ Ge({
  __name: "TagInput",
  props: /* @__PURE__ */ tn({
    label: {},
    hint: {},
    known: { default: () => [] }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(h) {
    const m = xn(h, "modelValue"), i = h, { t: p } = Ye("shell"), u = J(""), S = z(() => {
      const A = u.value.trim().toLowerCase();
      return A ? i.known.filter((d) => d.includes(A) && !m.value.includes(d)).slice(0, 6) : [];
    });
    function w(A) {
      const d = A.trim().toLowerCase();
      if (!d || m.value.includes(d)) {
        u.value = "";
        return;
      }
      m.value = [...m.value, d], u.value = "";
    }
    function _(A) {
      m.value = m.value.filter((d) => d !== A);
    }
    function k(A) {
      if (A.key === "Enter" || A.key === ",") {
        A.preventDefault(), w(u.value);
        return;
      }
      A.key === "Backspace" && !u.value && m.value.length && (m.value = m.value.slice(0, -1));
    }
    return (A, d) => (v(), Ie(a(su), {
      label: h.label,
      hint: h.hint,
      stacked: ""
    }, {
      default: ae(() => [
        c("div", by, [
          m.value.length ? (v(), $("div", yy, [
            (v(!0), $(_e, null, Be(m.value, (g) => (v(), Ie(a(On), {
              key: g,
              tone: "accent",
              removable: "",
              onRemove: (I) => _(g)
            }, {
              default: ae(() => [
                de(y(g), 1)
              ]),
              _: 2
            }, 1032, ["onRemove"]))), 128))
          ])) : ne("", !0),
          L(a(st), {
            modelValue: u.value,
            "onUpdate:modelValue": d[0] || (d[0] = (g) => u.value = g),
            placeholder: a(p)("Tags.placeholder"),
            stacked: "",
            onKeydown: k,
            onBlur: d[1] || (d[1] = (g) => w(u.value))
          }, null, 8, ["modelValue", "placeholder"]),
          S.value.length ? (v(), $("div", wy, [
            (v(!0), $(_e, null, Be(S.value, (g) => (v(), $("button", {
              key: g,
              type: "button",
              class: "tags__suggestion",
              onMousedown: ut((I) => w(g), ["prevent"])
            }, y(g), 41, ky))), 128))
          ])) : ne("", !0)
        ])
      ]),
      _: 1
    }, 8, ["label", "hint"]));
  }
}), Va = /* @__PURE__ */ Xe(Sy, [["__scopeId", "data-v-87381204"]]), xy = /* @__PURE__ */ Ge({
  __name: "NewConnectionDialog",
  props: {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ tn(["created"], ["update:modelValue"]),
  setup(h, { emit: m }) {
    const i = xn(h, "modelValue"), p = m, { t: u } = Ye("shell"), S = $e(La), w = $e(Ht), _ = mt(w, (ee) => ee.connections), k = J(""), A = J(""), d = J(""), g = J([]), I = J({}), R = z(() => [
      { label: u("Connection.types"), types: S.registeredConnections }
    ]), K = (ee) => Sa(S.getConnectionIdentifiers(ee)?.Model)?.documentation, q = (ee) => S.getConnectionIdentifiers(ee)?.icon ?? "link", B = z(
      () => k.value ? Sa(S.getConnectionIdentifiers(k.value)?.Model) : void 0
    ), N = z(() => {
      const ee = /* @__PURE__ */ new Set();
      for (const Q of _.value)
        for (const G of Q.tags ?? []) ee.add(G);
      return [...ee].sort();
    });
    it(k, () => {
      I.value = {};
    }), it(i, (ee) => {
      ee && (k.value = "", A.value = "", d.value = "", g.value = [], I.value = {});
    });
    const E = z(
      () => (B.value?.features ?? []).filter((ee) => !ee.optional && !["name", "type", "uid"].includes(ee.name)).filter((ee) => {
        const Q = I.value[ee.name];
        return Q == null || Q === "";
      })
    ), P = z(() => !!k.value && !!A.value.trim() && !E.value.length);
    function Y() {
      if (!P.value) return;
      const ee = S.createConnection(k.value, { ...I.value });
      ee.name = A.value.trim(), d.value.trim() && (ee.icon = d.value.trim());
      for (const Q of g.value) ee.tags.add(Q);
      try {
        S.saveConnection(ee);
      } catch (Q) {
        console.warn(`${ee.uid} is not live yet:`, Q);
      }
      i.value = !1, p("created", ee.uid);
    }
    return (ee, Q) => (v(), Ie(Eu, {
      modelValue: i.value,
      "onUpdate:modelValue": Q[3] || (Q[3] = (G) => i.value = G),
      type: k.value,
      "onUpdate:type": Q[4] || (Q[4] = (G) => k.value = G),
      title: a(u)("Connection.create"),
      lead: a(u)("Connection.createLead"),
      groups: R.value,
      "summary-of": K,
      "icon-of": q,
      ready: P.value,
      onCreate: Y
    }, {
      setup: ae(() => [
        L(a(st), {
          modelValue: A.value,
          "onUpdate:modelValue": Q[0] || (Q[0] = (G) => A.value = G),
          label: a(u)("Editor.name"),
          placeholder: a(u)("Connection.namePlaceholder"),
          hint: a(u)("Connection.nameHint"),
          stacked: "",
          required: ""
        }, null, 8, ["modelValue", "label", "placeholder", "hint"]),
        L(a(Ta), {
          modelValue: d.value,
          "onUpdate:modelValue": Q[1] || (Q[1] = (G) => d.value = G),
          label: a(u)("Editor.icon"),
          fallback: q(k.value),
          hint: a(u)("Editor.iconHint")
        }, null, 8, ["modelValue", "label", "fallback", "hint"]),
        L(Va, {
          modelValue: g.value,
          "onUpdate:modelValue": Q[2] || (Q[2] = (G) => g.value = G),
          label: a(u)("Editor.tags"),
          hint: a(u)("Connection.tagsHint"),
          known: N.value
        }, null, 8, ["modelValue", "label", "hint", "known"]),
        L(Ru, {
          doc: B.value,
          config: I.value
        }, null, 8, ["doc", "config"])
      ]),
      _: 1
    }, 8, ["modelValue", "type", "title", "lead", "groups", "ready"]));
  }
}), Cy = {
  key: 0,
  class: "note note--warn"
}, $y = {
  key: 0,
  class: "note"
}, Ay = /* @__PURE__ */ Ge({
  __name: "NewDatasourceDialog",
  props: /* @__PURE__ */ tn({
    forConnection: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ tn(["created"], ["update:modelValue"]),
  setup(h, { emit: m }) {
    const i = xn(h, "modelValue"), p = h, u = m, { t: S } = Ye("shell"), w = $e(Pa), _ = $e(Ht), k = mt(_, (ge) => ge.connections), A = mt(_, (ge) => ge.datasources), d = J(""), g = J(""), I = J(""), R = J([]), K = J(void 0), q = J({}), B = z(() => w.registeredDatasources), N = (ge) => w.getDatasourceIdentifiers(ge)?.kind, E = z(() => [
      {
        label: S("Datasource.groups.connected"),
        types: B.value.filter((ge) => N(ge) !== "composer")
      },
      {
        label: S("Datasource.groups.composed"),
        types: B.value.filter((ge) => N(ge) === "composer")
      }
    ]), P = (ge) => Sa(w.getDatasourceIdentifiers(ge)?.Model)?.documentation, Y = (ge) => w.getDatasourceIdentifiers(ge)?.icon ?? "database", ee = z(
      () => d.value ? Sa(w.getDatasourceIdentifiers(d.value)?.Model) : void 0
    ), Q = z(() => {
      const ge = /* @__PURE__ */ new Set();
      for (const pe of A.value)
        for (const le of pe.tags ?? []) ge.add(le);
      return [...ge].sort();
    }), G = z(
      () => (ee.value?.features ?? []).some((ge) => ge.name === "connection")
    ), be = z(() => {
      const ge = new Set(w.getDatasourceIdentifiers(d.value)?.connections ?? []);
      return k.value.map((pe) => ({
        label: pe.name || pe.uid,
        value: pe.uid,
        suited: ge.has(pe.type),
        group: ge.size === 0 ? S("Datasource.connections.all") : ge.has(pe.type) ? S("Datasource.connections.suited") : S("Datasource.connections.other")
      }));
    }), Ue = z(
      () => be.value.length > 0 && !be.value.some((ge) => ge.suited) && (w.getDatasourceIdentifiers(d.value)?.connections ?? []).length > 0
    );
    it(d, () => {
      q.value = {};
    }), it(i, (ge) => {
      ge && (d.value = "", g.value = "", I.value = "", R.value = [], K.value = p.forConnection, q.value = {});
    });
    const _t = z(() => {
      const ge = (ee.value?.features ?? []).filter((pe) => !pe.optional && !["name", "type", "uid", "connection"].includes(pe.name)).filter((pe) => {
        const le = q.value[pe.name];
        return le == null || le === "";
      }).map((pe) => pe.name);
      return G.value && !K.value && ge.push("connection"), ge;
    }), Ne = z(() => !!d.value && !!g.value.trim() && !_t.value.length);
    function nt() {
      if (!Ne.value) return;
      const ge = { ...q.value };
      G.value && (ge.connection = K.value);
      const pe = w.createDatasource(d.value, ge);
      pe.name = g.value.trim(), I.value.trim() && (pe.icon = I.value.trim());
      for (const le of R.value) pe.tags.add(le);
      pe.connection = k.value.find((le) => le.uid === K.value);
      try {
        w.saveDatasource(pe);
      } catch (le) {
        console.warn(`${pe.uid} is not live yet:`, le);
      }
      i.value = !1, u("created", pe.uid);
    }
    return (ge, pe) => (v(), Ie(Eu, {
      modelValue: i.value,
      "onUpdate:modelValue": pe[4] || (pe[4] = (le) => i.value = le),
      type: d.value,
      "onUpdate:type": pe[5] || (pe[5] = (le) => d.value = le),
      title: a(S)("Tree.newSource"),
      lead: a(S)("Datasource.createLead"),
      groups: E.value,
      "summary-of": P,
      "icon-of": Y,
      ready: Ne.value,
      onCreate: nt
    }, {
      setup: ae(() => [
        L(a(st), {
          modelValue: g.value,
          "onUpdate:modelValue": pe[0] || (pe[0] = (le) => g.value = le),
          label: a(S)("Editor.name"),
          placeholder: a(S)("Datasource.namePlaceholder"),
          hint: a(S)("Datasource.nameHint"),
          stacked: "",
          required: ""
        }, null, 8, ["modelValue", "label", "placeholder", "hint"]),
        G.value ? (v(), $(_e, { key: 0 }, [
          be.value.length ? (v(), $(_e, { key: 1 }, [
            Ue.value ? (v(), $("p", $y, y(a(S)("Datasource.nothingSuits")), 1)) : ne("", !0),
            L(a(zt), {
              modelValue: K.value,
              "onUpdate:modelValue": pe[1] || (pe[1] = (le) => K.value = le),
              label: a(S)("Datasource.connection"),
              options: be.value,
              "value-key": "value",
              "label-key": "label",
              "group-key": "group",
              placeholder: a(S)("Datasource.connectionPlaceholder"),
              hint: a(S)("Datasource.connectionHint"),
              stacked: "",
              required: ""
            }, null, 8, ["modelValue", "label", "options", "placeholder", "hint"])
          ], 64)) : (v(), $("p", Cy, y(a(S)("Datasource.noConnection")), 1))
        ], 64)) : ne("", !0),
        L(a(Ta), {
          modelValue: I.value,
          "onUpdate:modelValue": pe[2] || (pe[2] = (le) => I.value = le),
          label: a(S)("Editor.icon"),
          fallback: Y(d.value),
          hint: a(S)("Editor.iconHint")
        }, null, 8, ["modelValue", "label", "fallback", "hint"]),
        L(Va, {
          modelValue: R.value,
          "onUpdate:modelValue": pe[3] || (pe[3] = (le) => R.value = le),
          label: a(S)("Editor.tags"),
          hint: a(S)("Datasource.tagsHint"),
          known: Q.value
        }, null, 8, ["modelValue", "label", "hint", "known"]),
        L(Ru, {
          doc: ee.value,
          config: q.value,
          omit: ["connection"]
        }, null, 8, ["doc", "config"])
      ]),
      _: 1
    }, 8, ["modelValue", "type", "title", "lead", "groups", "ready"]));
  }
}), Iy = /* @__PURE__ */ Xe(Ay, [["__scopeId", "data-v-01bfa7b6"]]), Ty = ["onClick"], Ey = /* @__PURE__ */ Ge({
  __name: "TreeMenu",
  props: {
    at: {},
    items: {}
  },
  emits: ["choose", "close"],
  setup(h, { emit: m }) {
    const i = h, p = m, u = J(), S = J({ x: 0, y: 0 }), w = z(() => !!i.at && i.items.length > 0);
    it(
      () => i.at,
      async (k) => {
        if (!k) return;
        S.value = { x: k.x, y: k.y }, await Io();
        const A = u.value?.getBoundingClientRect();
        if (!A) return;
        const d = 8;
        S.value = {
          x: Math.min(k.x, window.innerWidth - A.width - d),
          y: Math.min(k.y, window.innerHeight - A.height - d)
        };
      }
    );
    function _(k) {
      k.key === "Escape" && p("close");
    }
    return it(w, (k) => {
      k ? (window.addEventListener("keydown", _), window.addEventListener("scroll", () => p("close"), { once: !0, capture: !0 })) : window.removeEventListener("keydown", _);
    }), Ia(() => window.removeEventListener("keydown", _)), (k, A) => (v(), Ie(ui, { to: "body" }, [
      w.value ? (v(), $(_e, { key: 0 }, [
        c("div", {
          class: "menu__catch",
          onClick: A[0] || (A[0] = (d) => p("close")),
          onContextmenu: A[1] || (A[1] = ut((d) => p("close"), ["prevent"]))
        }, null, 32),
        c("ul", {
          ref_key: "menu",
          ref: u,
          class: "menu",
          role: "menu",
          style: Wn({ left: `${S.value.x}px`, top: `${S.value.y}px` })
        }, [
          (v(!0), $(_e, null, Be(h.items, (d) => (v(), $("li", {
            key: d.id,
            class: Pe({ menu__sep: d.separated })
          }, [
            c("button", {
              type: "button",
              role: "menuitem",
              class: Pe(["menu__item", { "menu__item--danger": d.danger }]),
              onClick: (g) => p("choose", d.id)
            }, [
              d.icon ? (v(), Ie(a(ze), {
                key: 0,
                name: d.icon,
                size: "sm"
              }, null, 8, ["name"])) : ne("", !0),
              c("span", null, y(d.label), 1)
            ], 10, Ty)
          ], 2))), 128))
        ], 4)
      ], 64)) : ne("", !0)
    ]));
  }
}), Ry = /* @__PURE__ */ Xe(Ey, [["__scopeId", "data-v-3e59dfe4"]]), Ly = { class: "tree" }, Py = { class: "tree__head" }, Vy = { class: "tree__title" }, Oy = { class: "tree__search" }, Dy = {
  key: 0,
  class: "tree__empty"
}, Wy = {
  key: 1,
  class: "tree__list"
}, By = ["onContextmenu"], My = ["title", "onClick"], Uy = ["disabled", "onClick"], Ny = { class: "row__name" }, Fy = {
  key: 0,
  class: "row__what"
}, zy = {
  key: 1,
  class: "row__tag row__tag--more"
}, Hy = { class: "row__what" }, qy = {
  key: 0,
  class: "tree__sources"
}, Ky = ["onContextmenu"], Gy = ["onClick"], Yy = { class: "row__name" }, Zy = { class: "row__what" }, Xy = {
  key: 0,
  class: "row__tag row__tag--more"
}, Jy = {
  key: 1,
  class: "row__usage"
}, Qy = {
  key: 0,
  class: "tree__none"
}, jy = { class: "confirm__title" }, ew = { class: "confirm__text" }, tw = {
  key: 0,
  class: "confirm__text confirm__text--warn"
}, nw = "\0composed", jn = 2, ow = /* @__PURE__ */ Ge({
  __name: "DataTree",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ tn(["findEndpoints", "view"], ["update:modelValue"]),
  setup(h, { emit: m }) {
    const i = xn(h, "modelValue"), p = $e(La), u = $e(Ht), S = mt(u, (j) => j.connections), w = $e(Pa), _ = mt(u, (j) => j.datasources), { usageByDatasource: k, usageLabel: A } = Tu(), { t: d } = Ye("shell"), g = m, I = J(""), R = J(/* @__PURE__ */ new Set());
    function K(j) {
      return !!j && w.getDatasourceIdentifiers(j)?.kind === "composer";
    }
    function q(j, oe) {
      if (j.icon) return j.icon;
      const F = j.type;
      return (oe === "connection" ? p.getConnectionIdentifiers(F)?.icon : w.getDatasourceIdentifiers(F)?.icon) ?? (oe === "connection" ? "link" : "database");
    }
    function B(j) {
      const oe = j.tags;
      return oe ? Array.isArray(oe) ? oe : typeof oe.toArray == "function" ? oe.toArray() : [...oe] : [];
    }
    const N = z(() => {
      const j = k(), oe = I.value.trim().toLowerCase(), F = (...V) => !oe || V.some((U) => (U ?? "").toLowerCase().includes(oe)), X = (V) => _.value.filter((U) => U.connection?.uid === V).filter((U) => F(U.name, U.type, U.uid, ...B(U))).map((U) => ({
        uid: U.uid,
        name: U.name,
        type: U.type,
        usage: A(j[U.uid] ?? { boards: 0, widgets: 0 }),
        icon: q(U, "source"),
        tags: B(U)
      })), fe = S.value.map((V) => ({
        /* A connection just created has no type yet, and the row says so by
           showing none - the model has every feature optional for that reason. */
        uid: V.uid ?? "",
        name: V.name ?? "",
        type: V.type ?? "",
        orphan: !1,
        sources: X(V.uid),
        /* A connection stays visible while its own name matches, even with no
           source under it - otherwise searching would hide where to add one. */
        itself: F(V.name, V.type, V.uid, ...B(V)),
        icon: q(V, "connection"),
        tags: B(V)
      })), Je = new Set(S.value.map((V) => V.uid)), kt = (V) => ({
        uid: V.uid,
        name: V.name,
        type: V.type,
        usage: A(j[V.uid] ?? { boards: 0, widgets: 0 }),
        icon: q(V, "source"),
        tags: B(V)
      }), St = _.value.filter((V) => !V.connection || !Je.has(V.connection.uid)).filter((V) => F(V.name, V.type, V.uid, ...B(V))), H = St.filter((V) => K(V.type)).map(kt), Z = St.filter((V) => !K(V.type)).map(kt), re = fe.filter((V) => V.itself || V.sources.length);
      return H.length && re.push({
        uid: nw,
        name: d("Tree.composed"),
        type: "",
        orphan: !0,
        sources: H,
        itself: !0,
        icon: "layers",
        tags: []
      }), Z.length && re.push({
        uid: "",
        name: d("Tree.loose"),
        type: "",
        orphan: !0,
        sources: Z,
        itself: !0,
        icon: "link_off",
        tags: []
      }), re;
    }), E = (j) => !R.value.has(j);
    function P(j) {
      const oe = new Set(R.value);
      oe.has(j) ? oe.delete(j) : oe.add(j), R.value = oe;
    }
    const Y = (j, oe) => i.value?.type === j && i.value?.itemId === oe;
    function ee(j, oe) {
      i.value = { type: j, itemId: oe };
    }
    const Q = J(!1), G = J(!1), be = J(void 0);
    function Ue(j) {
      ee("Connection", j);
    }
    function _t(j) {
      ee("DataSource", j);
    }
    const Ne = J(void 0), nt = J({ what: "nothing" }), ge = z(() => {
      const j = nt.value;
      return j.what === "connection" ? [
        { id: "edit", label: d("Tree.menu.edit"), icon: "edit" },
        { id: "add-source", label: d("Tree.menu.addSourceHere"), icon: "add" },
        { id: "remove", label: d("Tree.removeConnection"), icon: "delete", danger: !0, separated: !0 }
      ] : j.what === "source" ? [
        { id: "edit", label: d("Tree.menu.edit"), icon: "edit" },
        { id: "preview", label: d("Tree.menu.preview"), icon: "table" },
        { id: "remove", label: d("Tree.removeSource"), icon: "delete", danger: !0, separated: !0 }
      ] : [
        { id: "new-connection", label: d("Tree.newConnection"), icon: "add_link" },
        { id: "new-source", label: d("Tree.newSource"), icon: "add" }
      ];
    });
    function pe(j, oe) {
      nt.value = oe, Ne.value = { x: j.clientX, y: j.clientY };
    }
    function le() {
      Ne.value = void 0;
    }
    function xe(j) {
      const oe = nt.value;
      if (le(), j === "new-connection") return void (Q.value = !0);
      if (j === "new-source") return void (G.value = !0);
      if (oe.what === "connection") {
        j === "edit" && ee("Connection", oe.uid), j === "add-source" && (ee("Connection", oe.uid), be.value = oe.uid, G.value = !0), j === "remove" && ye("Connection", oe.uid);
        return;
      }
      oe.what === "source" && ((j === "edit" || j === "preview") && (ee("DataSource", oe.uid), g("view", j === "preview" ? "preview" : "settings")), j === "remove" && ye("DataSource", oe.uid));
    }
    const se = J(void 0);
    function ye(j, oe) {
      se.value = { type: j, itemId: oe };
    }
    function ot() {
      const j = se.value;
      j && (j.type === "Connection" ? p.removeConnection(j.itemId) : w.removeDatasource(j.itemId), Y(j.type, j.itemId) && (i.value = void 0), se.value = void 0);
    }
    const pt = z(() => {
      const j = se.value;
      return j ? (j.type === "Connection" ? S.value.find((F) => F.uid === j.itemId) : _.value.find((F) => F.uid === j.itemId))?.name ?? j.itemId : "";
    }), je = z(() => {
      const j = se.value;
      return !j || j.type !== "DataSource" ? "" : A(k()[j.itemId] ?? { boards: 0, widgets: 0 });
    });
    return (j, oe) => (v(), $(_e, null, [
      c("section", Ly, [
        c("header", Py, [
          c("h2", Vy, y(a(d)("Tree.title")), 1),
          L(a(ke), {
            intent: "quiet",
            size: "sm",
            title: a(d)("Tree.newConnection"),
            onClick: oe[0] || (oe[0] = (F) => Q.value = !0)
          }, {
            default: ae(() => [
              L(a(ze), {
                name: "add_link",
                size: "sm"
              })
            ]),
            _: 1
          }, 8, ["title"]),
          L(a(ke), {
            intent: "quiet",
            size: "sm",
            title: a(d)("Tree.newSource"),
            onClick: oe[1] || (oe[1] = (F) => {
              be.value = void 0, G.value = !0;
            })
          }, {
            default: ae(() => [
              L(a(ze), {
                name: "add",
                size: "sm"
              })
            ]),
            _: 1
          }, 8, ["title"]),
          L(a(ke), {
            intent: "quiet",
            size: "sm",
            title: a(d)("Tree.findEndpoints"),
            onClick: oe[2] || (oe[2] = (F) => g("findEndpoints"))
          }, {
            default: ae(() => [
              L(a(ze), {
                name: "travel_explore",
                size: "sm"
              })
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        c("div", Oy, [
          L(a(st), {
            modelValue: I.value,
            "onUpdate:modelValue": oe[3] || (oe[3] = (F) => I.value = F),
            type: "search",
            placeholder: a(d)("Tree.search"),
            stacked: ""
          }, null, 8, ["modelValue", "placeholder"])
        ]),
        c("div", {
          class: "tree__body",
          onContextmenu: oe[4] || (oe[4] = ut((F) => pe(F, { what: "nothing" }), ["prevent"]))
        }, [
          N.value.length ? (v(), $("ul", Wy, [
            (v(!0), $(_e, null, Be(N.value, (F) => (v(), $("li", {
              key: F.uid || "loose"
            }, [
              c("div", {
                class: Pe(["row", "row--connection", { "row--on": Y("Connection", F.uid) }]),
                onContextmenu: ut((X) => pe(
                  X,
                  F.orphan ? { what: "nothing" } : { what: "connection", uid: F.uid, name: F.name }
                ), ["prevent", "stop"])
              }, [
                c("button", {
                  type: "button",
                  class: "row__twist",
                  title: E(F.uid) ? a(d)("Tree.collapse") : a(d)("Tree.expand"),
                  onClick: (X) => P(F.uid)
                }, [
                  L(a(ze), {
                    name: E(F.uid) ? "expand_more" : "chevron_right",
                    size: "sm"
                  }, null, 8, ["name"])
                ], 8, My),
                c("button", {
                  type: "button",
                  class: "row__body",
                  disabled: F.orphan,
                  onClick: (X) => !F.orphan && ee("Connection", F.uid)
                }, [
                  L(a(ze), {
                    name: F.icon ?? "link",
                    size: "sm",
                    class: "row__icon"
                  }, null, 8, ["name"]),
                  c("span", Ny, y(F.name), 1),
                  F.type ? (v(), $("span", Fy, y(F.type), 1)) : ne("", !0),
                  (v(!0), $(_e, null, Be((F.tags ?? []).slice(0, jn), (X) => (v(), $("span", {
                    key: X,
                    class: "row__tag"
                  }, y(X), 1))), 128)),
                  (F.tags?.length ?? 0) > jn ? (v(), $("span", zy, " +" + y((F.tags?.length ?? 0) - jn), 1)) : ne("", !0),
                  c("span", Hy, y(F.sources.length), 1)
                ], 8, Uy),
                F.orphan ? ne("", !0) : (v(), Ie(a(ke), {
                  key: 0,
                  intent: "quiet",
                  size: "sm",
                  title: a(d)("Tree.removeConnection"),
                  onClick: ut((X) => ye("Connection", F.uid), ["stop"])
                }, {
                  default: ae(() => [
                    L(a(ze), {
                      name: "delete",
                      size: "sm"
                    })
                  ]),
                  _: 1
                }, 8, ["title", "onClick"]))
              ], 42, By),
              E(F.uid) ? (v(), $("ul", qy, [
                (v(!0), $(_e, null, Be(F.sources, (X) => (v(), $("li", {
                  key: X.uid
                }, [
                  c("div", {
                    class: Pe(["row", "row--source", { "row--on": Y("DataSource", X.uid) }]),
                    onContextmenu: ut((fe) => pe(fe, { what: "source", uid: X.uid, name: X.name }), ["prevent", "stop"])
                  }, [
                    oe[10] || (oe[10] = c("span", {
                      class: "row__twist row__twist--none",
                      "aria-hidden": "true"
                    }, null, -1)),
                    c("button", {
                      type: "button",
                      class: "row__body",
                      onClick: (fe) => ee("DataSource", X.uid)
                    }, [
                      L(a(ze), {
                        name: X.icon,
                        size: "sm",
                        class: "row__icon"
                      }, null, 8, ["name"]),
                      c("span", Yy, y(X.name), 1),
                      c("span", Zy, y(X.type), 1),
                      (v(!0), $(_e, null, Be(X.tags.slice(0, jn), (fe) => (v(), $("span", {
                        key: fe,
                        class: "row__tag"
                      }, y(fe), 1))), 128)),
                      X.tags.length > jn ? (v(), $("span", Xy, " +" + y(X.tags.length - jn), 1)) : ne("", !0),
                      X.usage ? (v(), $("span", Jy, y(X.usage), 1)) : ne("", !0)
                    ], 8, Gy),
                    L(a(ke), {
                      intent: "quiet",
                      size: "sm",
                      title: a(d)("Tree.removeSource"),
                      onClick: ut((fe) => ye("DataSource", X.uid), ["stop"])
                    }, {
                      default: ae(() => [
                        L(a(ze), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["title", "onClick"])
                  ], 42, Ky)
                ]))), 128)),
                !F.sources.length && !F.orphan ? (v(), $("li", Qy, y(a(d)("Tree.noSources")), 1)) : ne("", !0)
              ])) : ne("", !0)
            ]))), 128))
          ])) : (v(), $("p", Dy, [
            I.value ? (v(), $(_e, { key: 0 }, [
              de(y(a(d)("Tree.nothingFound")), 1)
            ], 64)) : (v(), $(_e, { key: 1 }, [
              de(y(a(d)("Tree.empty")), 1)
            ], 64))
          ]))
        ], 32)
      ]),
      L(Ry, {
        at: Ne.value,
        items: ge.value,
        onChoose: xe,
        onClose: le
      }, null, 8, ["at", "items"]),
      L(xy, {
        modelValue: Q.value,
        "onUpdate:modelValue": oe[5] || (oe[5] = (F) => Q.value = F),
        onCreated: Ue
      }, null, 8, ["modelValue"]),
      L(Iy, {
        modelValue: G.value,
        "onUpdate:modelValue": oe[6] || (oe[6] = (F) => G.value = F),
        "for-connection": be.value,
        onCreated: _t
      }, null, 8, ["modelValue", "for-connection"]),
      L(a(xa), {
        "model-value": !!se.value,
        size: "sm",
        "onUpdate:modelValue": oe[8] || (oe[8] = (F) => se.value = void 0),
        onCancel: oe[9] || (oe[9] = (F) => se.value = void 0)
      }, {
        header: ae(() => [
          L(a(ze), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          c("h2", jy, y(se.value?.type === "Connection" ? a(d)("Tree.removeConnection") : a(d)("Tree.removeSource")), 1)
        ]),
        actions: ae(() => [
          L(a(ke), {
            intent: "quiet",
            onClick: oe[7] || (oe[7] = (F) => se.value = void 0)
          }, {
            default: ae(() => [
              de(y(a(d)("common:Action.cancel")), 1)
            ]),
            _: 1
          }),
          L(a(ke), {
            intent: "danger",
            onClick: ot
          }, {
            default: ae(() => [
              de(y(a(d)("common:Action.delete")), 1)
            ]),
            _: 1
          })
        ]),
        default: ae(() => [
          c("p", ew, y(a(d)("Tree.confirm.text", { name: pt.value })), 1),
          je.value ? (v(), $("p", tw, y(a(d)("Tree.confirm.usage", { usage: je.value })), 1)) : ne("", !0)
        ]),
        _: 1
      }, 8, ["model-value"])
    ], 64));
  }
}), aw = /* @__PURE__ */ Xe(ow, [["__scopeId", "data-v-d66ba29e"]]);
var ka = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Co = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var rw = Co.exports, jl;
function iw() {
  return jl || (jl = 1, (function(h, m) {
    (function() {
      var i, p = "4.17.21", u = 200, S = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", w = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", k = "__lodash_hash_undefined__", A = 500, d = "__lodash_placeholder__", g = 1, I = 2, R = 4, K = 1, q = 2, B = 1, N = 2, E = 4, P = 8, Y = 16, ee = 32, Q = 64, G = 128, be = 256, Ue = 512, _t = 30, Ne = "...", nt = 800, ge = 16, pe = 1, le = 2, xe = 3, se = 1 / 0, ye = 9007199254740991, ot = 17976931348623157e292, pt = NaN, je = 4294967295, j = je - 1, oe = je >>> 1, F = [
        ["ary", G],
        ["bind", B],
        ["bindKey", N],
        ["curry", P],
        ["curryRight", Y],
        ["flip", Ue],
        ["partial", ee],
        ["partialRight", Q],
        ["rearg", be]
      ], X = "[object Arguments]", fe = "[object Array]", Je = "[object AsyncFunction]", kt = "[object Boolean]", St = "[object Date]", H = "[object DOMException]", Z = "[object Error]", re = "[object Function]", V = "[object GeneratorFunction]", U = "[object Map]", ce = "[object Number]", qe = "[object Null]", Oe = "[object Object]", nn = "[object Promise]", It = "[object Proxy]", Cn = "[object RegExp]", qt = "[object Set]", ro = "[object String]", Eo = "[object Symbol]", Pu = "[object Undefined]", io = "[object WeakMap]", Vu = "[object WeakSet]", so = "[object ArrayBuffer]", Bn = "[object DataView]", Oa = "[object Float32Array]", Da = "[object Float64Array]", Wa = "[object Int8Array]", Ba = "[object Int16Array]", Ma = "[object Int32Array]", Ua = "[object Uint8Array]", Na = "[object Uint8ClampedArray]", Fa = "[object Uint16Array]", za = "[object Uint32Array]", Ou = /\b__p \+= '';/g, Du = /\b(__p \+=) '' \+/g, Wu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, hi = /&(?:amp|lt|gt|quot|#39);/g, vi = /[&<>"']/g, Bu = RegExp(hi.source), Mu = RegExp(vi.source), Uu = /<%-([\s\S]+?)%>/g, Nu = /<%([\s\S]+?)%>/g, mi = /<%=([\s\S]+?)%>/g, Fu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zu = /^\w*$/, Hu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ha = /[\\^$.*+?()[\]{}|]/g, qu = RegExp(Ha.source), qa = /^\s+/, Ku = /\s/, Gu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Yu = /\{\n\/\* \[wrapped with (.+)\] \*/, Zu = /,? & /, Xu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ju = /[()=,{}\[\]\/\s]/, Qu = /\\(\\)?/g, ju = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _i = /\w*$/, ec = /^[-+]0x[0-9a-f]+$/i, tc = /^0b[01]+$/i, nc = /^\[object .+?Constructor\]$/, oc = /^0o[0-7]+$/i, ac = /^(?:0|[1-9]\d*)$/, rc = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ro = /($^)/, ic = /['\n\r\u2028\u2029\\]/g, Lo = "\\ud800-\\udfff", sc = "\\u0300-\\u036f", lc = "\\ufe20-\\ufe2f", uc = "\\u20d0-\\u20ff", bi = sc + lc + uc, yi = "\\u2700-\\u27bf", wi = "a-z\\xdf-\\xf6\\xf8-\\xff", cc = "\\xac\\xb1\\xd7\\xf7", dc = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", fc = "\\u2000-\\u206f", gc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ki = "A-Z\\xc0-\\xd6\\xd8-\\xde", Si = "\\ufe0e\\ufe0f", xi = cc + dc + fc + gc, Ka = "['’]", pc = "[" + Lo + "]", Ci = "[" + xi + "]", Po = "[" + bi + "]", $i = "\\d+", hc = "[" + yi + "]", Ai = "[" + wi + "]", Ii = "[^" + Lo + xi + $i + yi + wi + ki + "]", Ga = "\\ud83c[\\udffb-\\udfff]", vc = "(?:" + Po + "|" + Ga + ")", Ti = "[^" + Lo + "]", Ya = "(?:\\ud83c[\\udde6-\\uddff]){2}", Za = "[\\ud800-\\udbff][\\udc00-\\udfff]", Mn = "[" + ki + "]", Ei = "\\u200d", Ri = "(?:" + Ai + "|" + Ii + ")", mc = "(?:" + Mn + "|" + Ii + ")", Li = "(?:" + Ka + "(?:d|ll|m|re|s|t|ve))?", Pi = "(?:" + Ka + "(?:D|LL|M|RE|S|T|VE))?", Vi = vc + "?", Oi = "[" + Si + "]?", _c = "(?:" + Ei + "(?:" + [Ti, Ya, Za].join("|") + ")" + Oi + Vi + ")*", bc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", yc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Di = Oi + Vi + _c, wc = "(?:" + [hc, Ya, Za].join("|") + ")" + Di, kc = "(?:" + [Ti + Po + "?", Po, Ya, Za, pc].join("|") + ")", Sc = RegExp(Ka, "g"), xc = RegExp(Po, "g"), Xa = RegExp(Ga + "(?=" + Ga + ")|" + kc + Di, "g"), Cc = RegExp([
        Mn + "?" + Ai + "+" + Li + "(?=" + [Ci, Mn, "$"].join("|") + ")",
        mc + "+" + Pi + "(?=" + [Ci, Mn + Ri, "$"].join("|") + ")",
        Mn + "?" + Ri + "+" + Li,
        Mn + "+" + Pi,
        yc,
        bc,
        $i,
        wc
      ].join("|"), "g"), $c = RegExp("[" + Ei + Lo + bi + Si + "]"), Ac = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ic = [
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
      ], Tc = -1, He = {};
      He[Oa] = He[Da] = He[Wa] = He[Ba] = He[Ma] = He[Ua] = He[Na] = He[Fa] = He[za] = !0, He[X] = He[fe] = He[so] = He[kt] = He[Bn] = He[St] = He[Z] = He[re] = He[U] = He[ce] = He[Oe] = He[Cn] = He[qt] = He[ro] = He[io] = !1;
      var Fe = {};
      Fe[X] = Fe[fe] = Fe[so] = Fe[Bn] = Fe[kt] = Fe[St] = Fe[Oa] = Fe[Da] = Fe[Wa] = Fe[Ba] = Fe[Ma] = Fe[U] = Fe[ce] = Fe[Oe] = Fe[Cn] = Fe[qt] = Fe[ro] = Fe[Eo] = Fe[Ua] = Fe[Na] = Fe[Fa] = Fe[za] = !0, Fe[Z] = Fe[re] = Fe[io] = !1;
      var Ec = {
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
      }, Rc = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Lc = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Pc = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Vc = parseFloat, Oc = parseInt, Wi = typeof ka == "object" && ka && ka.Object === Object && ka, Dc = typeof self == "object" && self && self.Object === Object && self, ct = Wi || Dc || Function("return this")(), Ja = m && !m.nodeType && m, $n = Ja && !0 && h && !h.nodeType && h, Bi = $n && $n.exports === Ja, Qa = Bi && Wi.process, Ot = (function() {
        try {
          var x = $n && $n.require && $n.require("util").types;
          return x || Qa && Qa.binding && Qa.binding("util");
        } catch {
        }
      })(), Mi = Ot && Ot.isArrayBuffer, Ui = Ot && Ot.isDate, Ni = Ot && Ot.isMap, Fi = Ot && Ot.isRegExp, zi = Ot && Ot.isSet, Hi = Ot && Ot.isTypedArray;
      function Tt(x, O, T) {
        switch (T.length) {
          case 0:
            return x.call(O);
          case 1:
            return x.call(O, T[0]);
          case 2:
            return x.call(O, T[0], T[1]);
          case 3:
            return x.call(O, T[0], T[1], T[2]);
        }
        return x.apply(O, T);
      }
      function Wc(x, O, T, ie) {
        for (var we = -1, Ve = x == null ? 0 : x.length; ++we < Ve; ) {
          var at = x[we];
          O(ie, at, T(at), x);
        }
        return ie;
      }
      function Dt(x, O) {
        for (var T = -1, ie = x == null ? 0 : x.length; ++T < ie && O(x[T], T, x) !== !1; )
          ;
        return x;
      }
      function Bc(x, O) {
        for (var T = x == null ? 0 : x.length; T-- && O(x[T], T, x) !== !1; )
          ;
        return x;
      }
      function qi(x, O) {
        for (var T = -1, ie = x == null ? 0 : x.length; ++T < ie; )
          if (!O(x[T], T, x))
            return !1;
        return !0;
      }
      function hn(x, O) {
        for (var T = -1, ie = x == null ? 0 : x.length, we = 0, Ve = []; ++T < ie; ) {
          var at = x[T];
          O(at, T, x) && (Ve[we++] = at);
        }
        return Ve;
      }
      function Vo(x, O) {
        var T = x == null ? 0 : x.length;
        return !!T && Un(x, O, 0) > -1;
      }
      function ja(x, O, T) {
        for (var ie = -1, we = x == null ? 0 : x.length; ++ie < we; )
          if (T(O, x[ie]))
            return !0;
        return !1;
      }
      function Ke(x, O) {
        for (var T = -1, ie = x == null ? 0 : x.length, we = Array(ie); ++T < ie; )
          we[T] = O(x[T], T, x);
        return we;
      }
      function vn(x, O) {
        for (var T = -1, ie = O.length, we = x.length; ++T < ie; )
          x[we + T] = O[T];
        return x;
      }
      function er(x, O, T, ie) {
        var we = -1, Ve = x == null ? 0 : x.length;
        for (ie && Ve && (T = x[++we]); ++we < Ve; )
          T = O(T, x[we], we, x);
        return T;
      }
      function Mc(x, O, T, ie) {
        var we = x == null ? 0 : x.length;
        for (ie && we && (T = x[--we]); we--; )
          T = O(T, x[we], we, x);
        return T;
      }
      function tr(x, O) {
        for (var T = -1, ie = x == null ? 0 : x.length; ++T < ie; )
          if (O(x[T], T, x))
            return !0;
        return !1;
      }
      var Uc = nr("length");
      function Nc(x) {
        return x.split("");
      }
      function Fc(x) {
        return x.match(Xu) || [];
      }
      function Ki(x, O, T) {
        var ie;
        return T(x, function(we, Ve, at) {
          if (O(we, Ve, at))
            return ie = Ve, !1;
        }), ie;
      }
      function Oo(x, O, T, ie) {
        for (var we = x.length, Ve = T + (ie ? 1 : -1); ie ? Ve-- : ++Ve < we; )
          if (O(x[Ve], Ve, x))
            return Ve;
        return -1;
      }
      function Un(x, O, T) {
        return O === O ? ed(x, O, T) : Oo(x, Gi, T);
      }
      function zc(x, O, T, ie) {
        for (var we = T - 1, Ve = x.length; ++we < Ve; )
          if (ie(x[we], O))
            return we;
        return -1;
      }
      function Gi(x) {
        return x !== x;
      }
      function Yi(x, O) {
        var T = x == null ? 0 : x.length;
        return T ? ar(x, O) / T : pt;
      }
      function nr(x) {
        return function(O) {
          return O == null ? i : O[x];
        };
      }
      function or(x) {
        return function(O) {
          return x == null ? i : x[O];
        };
      }
      function Zi(x, O, T, ie, we) {
        return we(x, function(Ve, at, Me) {
          T = ie ? (ie = !1, Ve) : O(T, Ve, at, Me);
        }), T;
      }
      function Hc(x, O) {
        var T = x.length;
        for (x.sort(O); T--; )
          x[T] = x[T].value;
        return x;
      }
      function ar(x, O) {
        for (var T, ie = -1, we = x.length; ++ie < we; ) {
          var Ve = O(x[ie]);
          Ve !== i && (T = T === i ? Ve : T + Ve);
        }
        return T;
      }
      function rr(x, O) {
        for (var T = -1, ie = Array(x); ++T < x; )
          ie[T] = O(T);
        return ie;
      }
      function qc(x, O) {
        return Ke(O, function(T) {
          return [T, x[T]];
        });
      }
      function Xi(x) {
        return x && x.slice(0, es(x) + 1).replace(qa, "");
      }
      function Et(x) {
        return function(O) {
          return x(O);
        };
      }
      function ir(x, O) {
        return Ke(O, function(T) {
          return x[T];
        });
      }
      function lo(x, O) {
        return x.has(O);
      }
      function Ji(x, O) {
        for (var T = -1, ie = x.length; ++T < ie && Un(O, x[T], 0) > -1; )
          ;
        return T;
      }
      function Qi(x, O) {
        for (var T = x.length; T-- && Un(O, x[T], 0) > -1; )
          ;
        return T;
      }
      function Kc(x, O) {
        for (var T = x.length, ie = 0; T--; )
          x[T] === O && ++ie;
        return ie;
      }
      var Gc = or(Ec), Yc = or(Rc);
      function Zc(x) {
        return "\\" + Pc[x];
      }
      function Xc(x, O) {
        return x == null ? i : x[O];
      }
      function Nn(x) {
        return $c.test(x);
      }
      function Jc(x) {
        return Ac.test(x);
      }
      function Qc(x) {
        for (var O, T = []; !(O = x.next()).done; )
          T.push(O.value);
        return T;
      }
      function sr(x) {
        var O = -1, T = Array(x.size);
        return x.forEach(function(ie, we) {
          T[++O] = [we, ie];
        }), T;
      }
      function ji(x, O) {
        return function(T) {
          return x(O(T));
        };
      }
      function mn(x, O) {
        for (var T = -1, ie = x.length, we = 0, Ve = []; ++T < ie; ) {
          var at = x[T];
          (at === O || at === d) && (x[T] = d, Ve[we++] = T);
        }
        return Ve;
      }
      function Do(x) {
        var O = -1, T = Array(x.size);
        return x.forEach(function(ie) {
          T[++O] = ie;
        }), T;
      }
      function jc(x) {
        var O = -1, T = Array(x.size);
        return x.forEach(function(ie) {
          T[++O] = [ie, ie];
        }), T;
      }
      function ed(x, O, T) {
        for (var ie = T - 1, we = x.length; ++ie < we; )
          if (x[ie] === O)
            return ie;
        return -1;
      }
      function td(x, O, T) {
        for (var ie = T + 1; ie--; )
          if (x[ie] === O)
            return ie;
        return ie;
      }
      function Fn(x) {
        return Nn(x) ? od(x) : Uc(x);
      }
      function Kt(x) {
        return Nn(x) ? ad(x) : Nc(x);
      }
      function es(x) {
        for (var O = x.length; O-- && Ku.test(x.charAt(O)); )
          ;
        return O;
      }
      var nd = or(Lc);
      function od(x) {
        for (var O = Xa.lastIndex = 0; Xa.test(x); )
          ++O;
        return O;
      }
      function ad(x) {
        return x.match(Xa) || [];
      }
      function rd(x) {
        return x.match(Cc) || [];
      }
      var id = (function x(O) {
        O = O == null ? ct : zn.defaults(ct.Object(), O, zn.pick(ct, Ic));
        var T = O.Array, ie = O.Date, we = O.Error, Ve = O.Function, at = O.Math, Me = O.Object, lr = O.RegExp, sd = O.String, Wt = O.TypeError, Wo = T.prototype, ld = Ve.prototype, Hn = Me.prototype, Bo = O["__core-js_shared__"], Mo = ld.toString, We = Hn.hasOwnProperty, ud = 0, ts = (function() {
          var e = /[^.]+$/.exec(Bo && Bo.keys && Bo.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Uo = Hn.toString, cd = Mo.call(Me), dd = ct._, fd = lr(
          "^" + Mo.call(We).replace(Ha, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), No = Bi ? O.Buffer : i, _n = O.Symbol, Fo = O.Uint8Array, ns = No ? No.allocUnsafe : i, zo = ji(Me.getPrototypeOf, Me), os = Me.create, as = Hn.propertyIsEnumerable, Ho = Wo.splice, rs = _n ? _n.isConcatSpreadable : i, uo = _n ? _n.iterator : i, An = _n ? _n.toStringTag : i, qo = (function() {
          try {
            var e = Ln(Me, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), gd = O.clearTimeout !== ct.clearTimeout && O.clearTimeout, pd = ie && ie.now !== ct.Date.now && ie.now, hd = O.setTimeout !== ct.setTimeout && O.setTimeout, Ko = at.ceil, Go = at.floor, ur = Me.getOwnPropertySymbols, vd = No ? No.isBuffer : i, is = O.isFinite, md = Wo.join, _d = ji(Me.keys, Me), rt = at.max, ht = at.min, bd = ie.now, yd = O.parseInt, ss = at.random, wd = Wo.reverse, cr = Ln(O, "DataView"), co = Ln(O, "Map"), dr = Ln(O, "Promise"), qn = Ln(O, "Set"), fo = Ln(O, "WeakMap"), go = Ln(Me, "create"), Yo = fo && new fo(), Kn = {}, kd = Pn(cr), Sd = Pn(co), xd = Pn(dr), Cd = Pn(qn), $d = Pn(fo), Zo = _n ? _n.prototype : i, po = Zo ? Zo.valueOf : i, ls = Zo ? Zo.toString : i;
        function s(e) {
          if (Qe(e) && !Se(e) && !(e instanceof Re)) {
            if (e instanceof Bt)
              return e;
            if (We.call(e, "__wrapped__"))
              return ul(e);
          }
          return new Bt(e);
        }
        var Gn = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!Ze(t))
              return {};
            if (os)
              return os(t);
            e.prototype = t;
            var n = new e();
            return e.prototype = i, n;
          };
        })();
        function Xo() {
        }
        function Bt(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
        }
        s.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Uu,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Nu,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: mi,
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
            _: s
          }
        }, s.prototype = Xo.prototype, s.prototype.constructor = s, Bt.prototype = Gn(Xo.prototype), Bt.prototype.constructor = Bt;
        function Re(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = je, this.__views__ = [];
        }
        function Ad() {
          var e = new Re(this.__wrapped__);
          return e.__actions__ = xt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = xt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = xt(this.__views__), e;
        }
        function Id() {
          if (this.__filtered__) {
            var e = new Re(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function Td() {
          var e = this.__wrapped__.value(), t = this.__dir__, n = Se(e), o = t < 0, r = n ? e.length : 0, l = Ff(0, r, this.__views__), f = l.start, b = l.end, C = b - f, D = o ? b : f - 1, W = this.__iteratees__, M = W.length, te = 0, ue = ht(C, this.__takeCount__);
          if (!n || !o && r == C && ue == C)
            return Ls(e, this.__actions__);
          var ve = [];
          e:
            for (; C-- && te < ue; ) {
              D += t;
              for (var Ae = -1, me = e[D]; ++Ae < M; ) {
                var Ee = W[Ae], Le = Ee.iteratee, Pt = Ee.type, wt = Le(me);
                if (Pt == le)
                  me = wt;
                else if (!wt) {
                  if (Pt == pe)
                    continue e;
                  break e;
                }
              }
              ve[te++] = me;
            }
          return ve;
        }
        Re.prototype = Gn(Xo.prototype), Re.prototype.constructor = Re;
        function In(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var o = e[t];
            this.set(o[0], o[1]);
          }
        }
        function Ed() {
          this.__data__ = go ? go(null) : {}, this.size = 0;
        }
        function Rd(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function Ld(e) {
          var t = this.__data__;
          if (go) {
            var n = t[e];
            return n === k ? i : n;
          }
          return We.call(t, e) ? t[e] : i;
        }
        function Pd(e) {
          var t = this.__data__;
          return go ? t[e] !== i : We.call(t, e);
        }
        function Vd(e, t) {
          var n = this.__data__;
          return this.size += this.has(e) ? 0 : 1, n[e] = go && t === i ? k : t, this;
        }
        In.prototype.clear = Ed, In.prototype.delete = Rd, In.prototype.get = Ld, In.prototype.has = Pd, In.prototype.set = Vd;
        function on(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var o = e[t];
            this.set(o[0], o[1]);
          }
        }
        function Od() {
          this.__data__ = [], this.size = 0;
        }
        function Dd(e) {
          var t = this.__data__, n = Jo(t, e);
          if (n < 0)
            return !1;
          var o = t.length - 1;
          return n == o ? t.pop() : Ho.call(t, n, 1), --this.size, !0;
        }
        function Wd(e) {
          var t = this.__data__, n = Jo(t, e);
          return n < 0 ? i : t[n][1];
        }
        function Bd(e) {
          return Jo(this.__data__, e) > -1;
        }
        function Md(e, t) {
          var n = this.__data__, o = Jo(n, e);
          return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
        }
        on.prototype.clear = Od, on.prototype.delete = Dd, on.prototype.get = Wd, on.prototype.has = Bd, on.prototype.set = Md;
        function an(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var o = e[t];
            this.set(o[0], o[1]);
          }
        }
        function Ud() {
          this.size = 0, this.__data__ = {
            hash: new In(),
            map: new (co || on)(),
            string: new In()
          };
        }
        function Nd(e) {
          var t = ua(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function Fd(e) {
          return ua(this, e).get(e);
        }
        function zd(e) {
          return ua(this, e).has(e);
        }
        function Hd(e, t) {
          var n = ua(this, e), o = n.size;
          return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
        }
        an.prototype.clear = Ud, an.prototype.delete = Nd, an.prototype.get = Fd, an.prototype.has = zd, an.prototype.set = Hd;
        function Tn(e) {
          var t = -1, n = e == null ? 0 : e.length;
          for (this.__data__ = new an(); ++t < n; )
            this.add(e[t]);
        }
        function qd(e) {
          return this.__data__.set(e, k), this;
        }
        function Kd(e) {
          return this.__data__.has(e);
        }
        Tn.prototype.add = Tn.prototype.push = qd, Tn.prototype.has = Kd;
        function Gt(e) {
          var t = this.__data__ = new on(e);
          this.size = t.size;
        }
        function Gd() {
          this.__data__ = new on(), this.size = 0;
        }
        function Yd(e) {
          var t = this.__data__, n = t.delete(e);
          return this.size = t.size, n;
        }
        function Zd(e) {
          return this.__data__.get(e);
        }
        function Xd(e) {
          return this.__data__.has(e);
        }
        function Jd(e, t) {
          var n = this.__data__;
          if (n instanceof on) {
            var o = n.__data__;
            if (!co || o.length < u - 1)
              return o.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new an(o);
          }
          return n.set(e, t), this.size = n.size, this;
        }
        Gt.prototype.clear = Gd, Gt.prototype.delete = Yd, Gt.prototype.get = Zd, Gt.prototype.has = Xd, Gt.prototype.set = Jd;
        function us(e, t) {
          var n = Se(e), o = !n && Vn(e), r = !n && !o && Sn(e), l = !n && !o && !r && Jn(e), f = n || o || r || l, b = f ? rr(e.length, sd) : [], C = b.length;
          for (var D in e)
            (t || We.call(e, D)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
            (D == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            r && (D == "offset" || D == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            l && (D == "buffer" || D == "byteLength" || D == "byteOffset") || // Skip index properties.
            un(D, C))) && b.push(D);
          return b;
        }
        function cs(e) {
          var t = e.length;
          return t ? e[kr(0, t - 1)] : i;
        }
        function Qd(e, t) {
          return ca(xt(e), En(t, 0, e.length));
        }
        function jd(e) {
          return ca(xt(e));
        }
        function fr(e, t, n) {
          (n !== i && !Yt(e[t], n) || n === i && !(t in e)) && rn(e, t, n);
        }
        function ho(e, t, n) {
          var o = e[t];
          (!(We.call(e, t) && Yt(o, n)) || n === i && !(t in e)) && rn(e, t, n);
        }
        function Jo(e, t) {
          for (var n = e.length; n--; )
            if (Yt(e[n][0], t))
              return n;
          return -1;
        }
        function ef(e, t, n, o) {
          return bn(e, function(r, l, f) {
            t(o, r, n(r), f);
          }), o;
        }
        function ds(e, t) {
          return e && Jt(t, lt(t), e);
        }
        function tf(e, t) {
          return e && Jt(t, $t(t), e);
        }
        function rn(e, t, n) {
          t == "__proto__" && qo ? qo(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
          }) : e[t] = n;
        }
        function gr(e, t) {
          for (var n = -1, o = t.length, r = T(o), l = e == null; ++n < o; )
            r[n] = l ? i : Gr(e, t[n]);
          return r;
        }
        function En(e, t, n) {
          return e === e && (n !== i && (e = e <= n ? e : n), t !== i && (e = e >= t ? e : t)), e;
        }
        function Mt(e, t, n, o, r, l) {
          var f, b = t & g, C = t & I, D = t & R;
          if (n && (f = r ? n(e, o, r, l) : n(e)), f !== i)
            return f;
          if (!Ze(e))
            return e;
          var W = Se(e);
          if (W) {
            if (f = Hf(e), !b)
              return xt(e, f);
          } else {
            var M = vt(e), te = M == re || M == V;
            if (Sn(e))
              return Os(e, b);
            if (M == Oe || M == X || te && !r) {
              if (f = C || te ? {} : el(e), !b)
                return C ? Pf(e, tf(f, e)) : Lf(e, ds(f, e));
            } else {
              if (!Fe[M])
                return r ? e : {};
              f = qf(e, M, b);
            }
          }
          l || (l = new Gt());
          var ue = l.get(e);
          if (ue)
            return ue;
          l.set(e, f), Tl(e) ? e.forEach(function(me) {
            f.add(Mt(me, t, n, me, e, l));
          }) : Al(e) && e.forEach(function(me, Ee) {
            f.set(Ee, Mt(me, t, n, Ee, e, l));
          });
          var ve = D ? C ? Pr : Lr : C ? $t : lt, Ae = W ? i : ve(e);
          return Dt(Ae || e, function(me, Ee) {
            Ae && (Ee = me, me = e[Ee]), ho(f, Ee, Mt(me, t, n, Ee, e, l));
          }), f;
        }
        function nf(e) {
          var t = lt(e);
          return function(n) {
            return fs(n, e, t);
          };
        }
        function fs(e, t, n) {
          var o = n.length;
          if (e == null)
            return !o;
          for (e = Me(e); o--; ) {
            var r = n[o], l = t[r], f = e[r];
            if (f === i && !(r in e) || !l(f))
              return !1;
          }
          return !0;
        }
        function gs(e, t, n) {
          if (typeof e != "function")
            throw new Wt(w);
          return ko(function() {
            e.apply(i, n);
          }, t);
        }
        function vo(e, t, n, o) {
          var r = -1, l = Vo, f = !0, b = e.length, C = [], D = t.length;
          if (!b)
            return C;
          n && (t = Ke(t, Et(n))), o ? (l = ja, f = !1) : t.length >= u && (l = lo, f = !1, t = new Tn(t));
          e:
            for (; ++r < b; ) {
              var W = e[r], M = n == null ? W : n(W);
              if (W = o || W !== 0 ? W : 0, f && M === M) {
                for (var te = D; te--; )
                  if (t[te] === M)
                    continue e;
                C.push(W);
              } else l(t, M, o) || C.push(W);
            }
          return C;
        }
        var bn = Us(Xt), ps = Us(hr, !0);
        function of(e, t) {
          var n = !0;
          return bn(e, function(o, r, l) {
            return n = !!t(o, r, l), n;
          }), n;
        }
        function Qo(e, t, n) {
          for (var o = -1, r = e.length; ++o < r; ) {
            var l = e[o], f = t(l);
            if (f != null && (b === i ? f === f && !Lt(f) : n(f, b)))
              var b = f, C = l;
          }
          return C;
        }
        function af(e, t, n, o) {
          var r = e.length;
          for (n = Ce(n), n < 0 && (n = -n > r ? 0 : r + n), o = o === i || o > r ? r : Ce(o), o < 0 && (o += r), o = n > o ? 0 : Rl(o); n < o; )
            e[n++] = t;
          return e;
        }
        function hs(e, t) {
          var n = [];
          return bn(e, function(o, r, l) {
            t(o, r, l) && n.push(o);
          }), n;
        }
        function dt(e, t, n, o, r) {
          var l = -1, f = e.length;
          for (n || (n = Gf), r || (r = []); ++l < f; ) {
            var b = e[l];
            t > 0 && n(b) ? t > 1 ? dt(b, t - 1, n, o, r) : vn(r, b) : o || (r[r.length] = b);
          }
          return r;
        }
        var pr = Ns(), vs = Ns(!0);
        function Xt(e, t) {
          return e && pr(e, t, lt);
        }
        function hr(e, t) {
          return e && vs(e, t, lt);
        }
        function jo(e, t) {
          return hn(t, function(n) {
            return cn(e[n]);
          });
        }
        function Rn(e, t) {
          t = wn(t, e);
          for (var n = 0, o = t.length; e != null && n < o; )
            e = e[Qt(t[n++])];
          return n && n == o ? e : i;
        }
        function ms(e, t, n) {
          var o = t(e);
          return Se(e) ? o : vn(o, n(e));
        }
        function bt(e) {
          return e == null ? e === i ? Pu : qe : An && An in Me(e) ? Nf(e) : eg(e);
        }
        function vr(e, t) {
          return e > t;
        }
        function rf(e, t) {
          return e != null && We.call(e, t);
        }
        function sf(e, t) {
          return e != null && t in Me(e);
        }
        function lf(e, t, n) {
          return e >= ht(t, n) && e < rt(t, n);
        }
        function mr(e, t, n) {
          for (var o = n ? ja : Vo, r = e[0].length, l = e.length, f = l, b = T(l), C = 1 / 0, D = []; f--; ) {
            var W = e[f];
            f && t && (W = Ke(W, Et(t))), C = ht(W.length, C), b[f] = !n && (t || r >= 120 && W.length >= 120) ? new Tn(f && W) : i;
          }
          W = e[0];
          var M = -1, te = b[0];
          e:
            for (; ++M < r && D.length < C; ) {
              var ue = W[M], ve = t ? t(ue) : ue;
              if (ue = n || ue !== 0 ? ue : 0, !(te ? lo(te, ve) : o(D, ve, n))) {
                for (f = l; --f; ) {
                  var Ae = b[f];
                  if (!(Ae ? lo(Ae, ve) : o(e[f], ve, n)))
                    continue e;
                }
                te && te.push(ve), D.push(ue);
              }
            }
          return D;
        }
        function uf(e, t, n, o) {
          return Xt(e, function(r, l, f) {
            t(o, n(r), l, f);
          }), o;
        }
        function mo(e, t, n) {
          t = wn(t, e), e = al(e, t);
          var o = e == null ? e : e[Qt(Nt(t))];
          return o == null ? i : Tt(o, e, n);
        }
        function _s(e) {
          return Qe(e) && bt(e) == X;
        }
        function cf(e) {
          return Qe(e) && bt(e) == so;
        }
        function df(e) {
          return Qe(e) && bt(e) == St;
        }
        function _o(e, t, n, o, r) {
          return e === t ? !0 : e == null || t == null || !Qe(e) && !Qe(t) ? e !== e && t !== t : ff(e, t, n, o, _o, r);
        }
        function ff(e, t, n, o, r, l) {
          var f = Se(e), b = Se(t), C = f ? fe : vt(e), D = b ? fe : vt(t);
          C = C == X ? Oe : C, D = D == X ? Oe : D;
          var W = C == Oe, M = D == Oe, te = C == D;
          if (te && Sn(e)) {
            if (!Sn(t))
              return !1;
            f = !0, W = !1;
          }
          if (te && !W)
            return l || (l = new Gt()), f || Jn(e) ? Js(e, t, n, o, r, l) : Mf(e, t, C, n, o, r, l);
          if (!(n & K)) {
            var ue = W && We.call(e, "__wrapped__"), ve = M && We.call(t, "__wrapped__");
            if (ue || ve) {
              var Ae = ue ? e.value() : e, me = ve ? t.value() : t;
              return l || (l = new Gt()), r(Ae, me, n, o, l);
            }
          }
          return te ? (l || (l = new Gt()), Uf(e, t, n, o, r, l)) : !1;
        }
        function gf(e) {
          return Qe(e) && vt(e) == U;
        }
        function _r(e, t, n, o) {
          var r = n.length, l = r, f = !o;
          if (e == null)
            return !l;
          for (e = Me(e); r--; ) {
            var b = n[r];
            if (f && b[2] ? b[1] !== e[b[0]] : !(b[0] in e))
              return !1;
          }
          for (; ++r < l; ) {
            b = n[r];
            var C = b[0], D = e[C], W = b[1];
            if (f && b[2]) {
              if (D === i && !(C in e))
                return !1;
            } else {
              var M = new Gt();
              if (o)
                var te = o(D, W, C, e, t, M);
              if (!(te === i ? _o(W, D, K | q, o, M) : te))
                return !1;
            }
          }
          return !0;
        }
        function bs(e) {
          if (!Ze(e) || Zf(e))
            return !1;
          var t = cn(e) ? fd : nc;
          return t.test(Pn(e));
        }
        function pf(e) {
          return Qe(e) && bt(e) == Cn;
        }
        function hf(e) {
          return Qe(e) && vt(e) == qt;
        }
        function vf(e) {
          return Qe(e) && va(e.length) && !!He[bt(e)];
        }
        function ys(e) {
          return typeof e == "function" ? e : e == null ? At : typeof e == "object" ? Se(e) ? Ss(e[0], e[1]) : ks(e) : Fl(e);
        }
        function br(e) {
          if (!wo(e))
            return _d(e);
          var t = [];
          for (var n in Me(e))
            We.call(e, n) && n != "constructor" && t.push(n);
          return t;
        }
        function mf(e) {
          if (!Ze(e))
            return jf(e);
          var t = wo(e), n = [];
          for (var o in e)
            o == "constructor" && (t || !We.call(e, o)) || n.push(o);
          return n;
        }
        function yr(e, t) {
          return e < t;
        }
        function ws(e, t) {
          var n = -1, o = Ct(e) ? T(e.length) : [];
          return bn(e, function(r, l, f) {
            o[++n] = t(r, l, f);
          }), o;
        }
        function ks(e) {
          var t = Or(e);
          return t.length == 1 && t[0][2] ? nl(t[0][0], t[0][1]) : function(n) {
            return n === e || _r(n, e, t);
          };
        }
        function Ss(e, t) {
          return Wr(e) && tl(t) ? nl(Qt(e), t) : function(n) {
            var o = Gr(n, e);
            return o === i && o === t ? Yr(n, e) : _o(t, o, K | q);
          };
        }
        function ea(e, t, n, o, r) {
          e !== t && pr(t, function(l, f) {
            if (r || (r = new Gt()), Ze(l))
              _f(e, t, f, n, ea, o, r);
            else {
              var b = o ? o(Mr(e, f), l, f + "", e, t, r) : i;
              b === i && (b = l), fr(e, f, b);
            }
          }, $t);
        }
        function _f(e, t, n, o, r, l, f) {
          var b = Mr(e, n), C = Mr(t, n), D = f.get(C);
          if (D) {
            fr(e, n, D);
            return;
          }
          var W = l ? l(b, C, n + "", e, t, f) : i, M = W === i;
          if (M) {
            var te = Se(C), ue = !te && Sn(C), ve = !te && !ue && Jn(C);
            W = C, te || ue || ve ? Se(b) ? W = b : et(b) ? W = xt(b) : ue ? (M = !1, W = Os(C, !0)) : ve ? (M = !1, W = Ds(C, !0)) : W = [] : So(C) || Vn(C) ? (W = b, Vn(b) ? W = Ll(b) : (!Ze(b) || cn(b)) && (W = el(C))) : M = !1;
          }
          M && (f.set(C, W), r(W, C, o, l, f), f.delete(C)), fr(e, n, W);
        }
        function xs(e, t) {
          var n = e.length;
          if (n)
            return t += t < 0 ? n : 0, un(t, n) ? e[t] : i;
        }
        function Cs(e, t, n) {
          t.length ? t = Ke(t, function(l) {
            return Se(l) ? function(f) {
              return Rn(f, l.length === 1 ? l[0] : l);
            } : l;
          }) : t = [At];
          var o = -1;
          t = Ke(t, Et(he()));
          var r = ws(e, function(l, f, b) {
            var C = Ke(t, function(D) {
              return D(l);
            });
            return { criteria: C, index: ++o, value: l };
          });
          return Hc(r, function(l, f) {
            return Rf(l, f, n);
          });
        }
        function bf(e, t) {
          return $s(e, t, function(n, o) {
            return Yr(e, o);
          });
        }
        function $s(e, t, n) {
          for (var o = -1, r = t.length, l = {}; ++o < r; ) {
            var f = t[o], b = Rn(e, f);
            n(b, f) && bo(l, wn(f, e), b);
          }
          return l;
        }
        function yf(e) {
          return function(t) {
            return Rn(t, e);
          };
        }
        function wr(e, t, n, o) {
          var r = o ? zc : Un, l = -1, f = t.length, b = e;
          for (e === t && (t = xt(t)), n && (b = Ke(e, Et(n))); ++l < f; )
            for (var C = 0, D = t[l], W = n ? n(D) : D; (C = r(b, W, C, o)) > -1; )
              b !== e && Ho.call(b, C, 1), Ho.call(e, C, 1);
          return e;
        }
        function As(e, t) {
          for (var n = e ? t.length : 0, o = n - 1; n--; ) {
            var r = t[n];
            if (n == o || r !== l) {
              var l = r;
              un(r) ? Ho.call(e, r, 1) : Cr(e, r);
            }
          }
          return e;
        }
        function kr(e, t) {
          return e + Go(ss() * (t - e + 1));
        }
        function wf(e, t, n, o) {
          for (var r = -1, l = rt(Ko((t - e) / (n || 1)), 0), f = T(l); l--; )
            f[o ? l : ++r] = e, e += n;
          return f;
        }
        function Sr(e, t) {
          var n = "";
          if (!e || t < 1 || t > ye)
            return n;
          do
            t % 2 && (n += e), t = Go(t / 2), t && (e += e);
          while (t);
          return n;
        }
        function Te(e, t) {
          return Ur(ol(e, t, At), e + "");
        }
        function kf(e) {
          return cs(Qn(e));
        }
        function Sf(e, t) {
          var n = Qn(e);
          return ca(n, En(t, 0, n.length));
        }
        function bo(e, t, n, o) {
          if (!Ze(e))
            return e;
          t = wn(t, e);
          for (var r = -1, l = t.length, f = l - 1, b = e; b != null && ++r < l; ) {
            var C = Qt(t[r]), D = n;
            if (C === "__proto__" || C === "constructor" || C === "prototype")
              return e;
            if (r != f) {
              var W = b[C];
              D = o ? o(W, C, b) : i, D === i && (D = Ze(W) ? W : un(t[r + 1]) ? [] : {});
            }
            ho(b, C, D), b = b[C];
          }
          return e;
        }
        var Is = Yo ? function(e, t) {
          return Yo.set(e, t), e;
        } : At, xf = qo ? function(e, t) {
          return qo(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Xr(t),
            writable: !0
          });
        } : At;
        function Cf(e) {
          return ca(Qn(e));
        }
        function Ut(e, t, n) {
          var o = -1, r = e.length;
          t < 0 && (t = -t > r ? 0 : r + t), n = n > r ? r : n, n < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
          for (var l = T(r); ++o < r; )
            l[o] = e[o + t];
          return l;
        }
        function $f(e, t) {
          var n;
          return bn(e, function(o, r, l) {
            return n = t(o, r, l), !n;
          }), !!n;
        }
        function ta(e, t, n) {
          var o = 0, r = e == null ? o : e.length;
          if (typeof t == "number" && t === t && r <= oe) {
            for (; o < r; ) {
              var l = o + r >>> 1, f = e[l];
              f !== null && !Lt(f) && (n ? f <= t : f < t) ? o = l + 1 : r = l;
            }
            return r;
          }
          return xr(e, t, At, n);
        }
        function xr(e, t, n, o) {
          var r = 0, l = e == null ? 0 : e.length;
          if (l === 0)
            return 0;
          t = n(t);
          for (var f = t !== t, b = t === null, C = Lt(t), D = t === i; r < l; ) {
            var W = Go((r + l) / 2), M = n(e[W]), te = M !== i, ue = M === null, ve = M === M, Ae = Lt(M);
            if (f)
              var me = o || ve;
            else D ? me = ve && (o || te) : b ? me = ve && te && (o || !ue) : C ? me = ve && te && !ue && (o || !Ae) : ue || Ae ? me = !1 : me = o ? M <= t : M < t;
            me ? r = W + 1 : l = W;
          }
          return ht(l, j);
        }
        function Ts(e, t) {
          for (var n = -1, o = e.length, r = 0, l = []; ++n < o; ) {
            var f = e[n], b = t ? t(f) : f;
            if (!n || !Yt(b, C)) {
              var C = b;
              l[r++] = f === 0 ? 0 : f;
            }
          }
          return l;
        }
        function Es(e) {
          return typeof e == "number" ? e : Lt(e) ? pt : +e;
        }
        function Rt(e) {
          if (typeof e == "string")
            return e;
          if (Se(e))
            return Ke(e, Rt) + "";
          if (Lt(e))
            return ls ? ls.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -se ? "-0" : t;
        }
        function yn(e, t, n) {
          var o = -1, r = Vo, l = e.length, f = !0, b = [], C = b;
          if (n)
            f = !1, r = ja;
          else if (l >= u) {
            var D = t ? null : Wf(e);
            if (D)
              return Do(D);
            f = !1, r = lo, C = new Tn();
          } else
            C = t ? [] : b;
          e:
            for (; ++o < l; ) {
              var W = e[o], M = t ? t(W) : W;
              if (W = n || W !== 0 ? W : 0, f && M === M) {
                for (var te = C.length; te--; )
                  if (C[te] === M)
                    continue e;
                t && C.push(M), b.push(W);
              } else r(C, M, n) || (C !== b && C.push(M), b.push(W));
            }
          return b;
        }
        function Cr(e, t) {
          return t = wn(t, e), e = al(e, t), e == null || delete e[Qt(Nt(t))];
        }
        function Rs(e, t, n, o) {
          return bo(e, t, n(Rn(e, t)), o);
        }
        function na(e, t, n, o) {
          for (var r = e.length, l = o ? r : -1; (o ? l-- : ++l < r) && t(e[l], l, e); )
            ;
          return n ? Ut(e, o ? 0 : l, o ? l + 1 : r) : Ut(e, o ? l + 1 : 0, o ? r : l);
        }
        function Ls(e, t) {
          var n = e;
          return n instanceof Re && (n = n.value()), er(t, function(o, r) {
            return r.func.apply(r.thisArg, vn([o], r.args));
          }, n);
        }
        function $r(e, t, n) {
          var o = e.length;
          if (o < 2)
            return o ? yn(e[0]) : [];
          for (var r = -1, l = T(o); ++r < o; )
            for (var f = e[r], b = -1; ++b < o; )
              b != r && (l[r] = vo(l[r] || f, e[b], t, n));
          return yn(dt(l, 1), t, n);
        }
        function Ps(e, t, n) {
          for (var o = -1, r = e.length, l = t.length, f = {}; ++o < r; ) {
            var b = o < l ? t[o] : i;
            n(f, e[o], b);
          }
          return f;
        }
        function Ar(e) {
          return et(e) ? e : [];
        }
        function Ir(e) {
          return typeof e == "function" ? e : At;
        }
        function wn(e, t) {
          return Se(e) ? e : Wr(e, t) ? [e] : ll(De(e));
        }
        var Af = Te;
        function kn(e, t, n) {
          var o = e.length;
          return n = n === i ? o : n, !t && n >= o ? e : Ut(e, t, n);
        }
        var Vs = gd || function(e) {
          return ct.clearTimeout(e);
        };
        function Os(e, t) {
          if (t)
            return e.slice();
          var n = e.length, o = ns ? ns(n) : new e.constructor(n);
          return e.copy(o), o;
        }
        function Tr(e) {
          var t = new e.constructor(e.byteLength);
          return new Fo(t).set(new Fo(e)), t;
        }
        function If(e, t) {
          var n = t ? Tr(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.byteLength);
        }
        function Tf(e) {
          var t = new e.constructor(e.source, _i.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function Ef(e) {
          return po ? Me(po.call(e)) : {};
        }
        function Ds(e, t) {
          var n = t ? Tr(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.length);
        }
        function Ws(e, t) {
          if (e !== t) {
            var n = e !== i, o = e === null, r = e === e, l = Lt(e), f = t !== i, b = t === null, C = t === t, D = Lt(t);
            if (!b && !D && !l && e > t || l && f && C && !b && !D || o && f && C || !n && C || !r)
              return 1;
            if (!o && !l && !D && e < t || D && n && r && !o && !l || b && n && r || !f && r || !C)
              return -1;
          }
          return 0;
        }
        function Rf(e, t, n) {
          for (var o = -1, r = e.criteria, l = t.criteria, f = r.length, b = n.length; ++o < f; ) {
            var C = Ws(r[o], l[o]);
            if (C) {
              if (o >= b)
                return C;
              var D = n[o];
              return C * (D == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function Bs(e, t, n, o) {
          for (var r = -1, l = e.length, f = n.length, b = -1, C = t.length, D = rt(l - f, 0), W = T(C + D), M = !o; ++b < C; )
            W[b] = t[b];
          for (; ++r < f; )
            (M || r < l) && (W[n[r]] = e[r]);
          for (; D--; )
            W[b++] = e[r++];
          return W;
        }
        function Ms(e, t, n, o) {
          for (var r = -1, l = e.length, f = -1, b = n.length, C = -1, D = t.length, W = rt(l - b, 0), M = T(W + D), te = !o; ++r < W; )
            M[r] = e[r];
          for (var ue = r; ++C < D; )
            M[ue + C] = t[C];
          for (; ++f < b; )
            (te || r < l) && (M[ue + n[f]] = e[r++]);
          return M;
        }
        function xt(e, t) {
          var n = -1, o = e.length;
          for (t || (t = T(o)); ++n < o; )
            t[n] = e[n];
          return t;
        }
        function Jt(e, t, n, o) {
          var r = !n;
          n || (n = {});
          for (var l = -1, f = t.length; ++l < f; ) {
            var b = t[l], C = o ? o(n[b], e[b], b, n, e) : i;
            C === i && (C = e[b]), r ? rn(n, b, C) : ho(n, b, C);
          }
          return n;
        }
        function Lf(e, t) {
          return Jt(e, Dr(e), t);
        }
        function Pf(e, t) {
          return Jt(e, Qs(e), t);
        }
        function oa(e, t) {
          return function(n, o) {
            var r = Se(n) ? Wc : ef, l = t ? t() : {};
            return r(n, e, he(o, 2), l);
          };
        }
        function Yn(e) {
          return Te(function(t, n) {
            var o = -1, r = n.length, l = r > 1 ? n[r - 1] : i, f = r > 2 ? n[2] : i;
            for (l = e.length > 3 && typeof l == "function" ? (r--, l) : i, f && yt(n[0], n[1], f) && (l = r < 3 ? i : l, r = 1), t = Me(t); ++o < r; ) {
              var b = n[o];
              b && e(t, b, o, l);
            }
            return t;
          });
        }
        function Us(e, t) {
          return function(n, o) {
            if (n == null)
              return n;
            if (!Ct(n))
              return e(n, o);
            for (var r = n.length, l = t ? r : -1, f = Me(n); (t ? l-- : ++l < r) && o(f[l], l, f) !== !1; )
              ;
            return n;
          };
        }
        function Ns(e) {
          return function(t, n, o) {
            for (var r = -1, l = Me(t), f = o(t), b = f.length; b--; ) {
              var C = f[e ? b : ++r];
              if (n(l[C], C, l) === !1)
                break;
            }
            return t;
          };
        }
        function Vf(e, t, n) {
          var o = t & B, r = yo(e);
          function l() {
            var f = this && this !== ct && this instanceof l ? r : e;
            return f.apply(o ? n : this, arguments);
          }
          return l;
        }
        function Fs(e) {
          return function(t) {
            t = De(t);
            var n = Nn(t) ? Kt(t) : i, o = n ? n[0] : t.charAt(0), r = n ? kn(n, 1).join("") : t.slice(1);
            return o[e]() + r;
          };
        }
        function Zn(e) {
          return function(t) {
            return er(Ul(Ml(t).replace(Sc, "")), e, "");
          };
        }
        function yo(e) {
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return new e();
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
              case 5:
                return new e(t[0], t[1], t[2], t[3], t[4]);
              case 6:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
              case 7:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
            }
            var n = Gn(e.prototype), o = e.apply(n, t);
            return Ze(o) ? o : n;
          };
        }
        function Of(e, t, n) {
          var o = yo(e);
          function r() {
            for (var l = arguments.length, f = T(l), b = l, C = Xn(r); b--; )
              f[b] = arguments[b];
            var D = l < 3 && f[0] !== C && f[l - 1] !== C ? [] : mn(f, C);
            if (l -= D.length, l < n)
              return Gs(
                e,
                t,
                aa,
                r.placeholder,
                i,
                f,
                D,
                i,
                i,
                n - l
              );
            var W = this && this !== ct && this instanceof r ? o : e;
            return Tt(W, this, f);
          }
          return r;
        }
        function zs(e) {
          return function(t, n, o) {
            var r = Me(t);
            if (!Ct(t)) {
              var l = he(n, 3);
              t = lt(t), n = function(b) {
                return l(r[b], b, r);
              };
            }
            var f = e(t, n, o);
            return f > -1 ? r[l ? t[f] : f] : i;
          };
        }
        function Hs(e) {
          return ln(function(t) {
            var n = t.length, o = n, r = Bt.prototype.thru;
            for (e && t.reverse(); o--; ) {
              var l = t[o];
              if (typeof l != "function")
                throw new Wt(w);
              if (r && !f && la(l) == "wrapper")
                var f = new Bt([], !0);
            }
            for (o = f ? o : n; ++o < n; ) {
              l = t[o];
              var b = la(l), C = b == "wrapper" ? Vr(l) : i;
              C && Br(C[0]) && C[1] == (G | P | ee | be) && !C[4].length && C[9] == 1 ? f = f[la(C[0])].apply(f, C[3]) : f = l.length == 1 && Br(l) ? f[b]() : f.thru(l);
            }
            return function() {
              var D = arguments, W = D[0];
              if (f && D.length == 1 && Se(W))
                return f.plant(W).value();
              for (var M = 0, te = n ? t[M].apply(this, D) : W; ++M < n; )
                te = t[M].call(this, te);
              return te;
            };
          });
        }
        function aa(e, t, n, o, r, l, f, b, C, D) {
          var W = t & G, M = t & B, te = t & N, ue = t & (P | Y), ve = t & Ue, Ae = te ? i : yo(e);
          function me() {
            for (var Ee = arguments.length, Le = T(Ee), Pt = Ee; Pt--; )
              Le[Pt] = arguments[Pt];
            if (ue)
              var wt = Xn(me), Vt = Kc(Le, wt);
            if (o && (Le = Bs(Le, o, r, ue)), l && (Le = Ms(Le, l, f, ue)), Ee -= Vt, ue && Ee < D) {
              var tt = mn(Le, wt);
              return Gs(
                e,
                t,
                aa,
                me.placeholder,
                n,
                Le,
                tt,
                b,
                C,
                D - Ee
              );
            }
            var Zt = M ? n : this, fn = te ? Zt[e] : e;
            return Ee = Le.length, b ? Le = tg(Le, b) : ve && Ee > 1 && Le.reverse(), W && C < Ee && (Le.length = C), this && this !== ct && this instanceof me && (fn = Ae || yo(fn)), fn.apply(Zt, Le);
          }
          return me;
        }
        function qs(e, t) {
          return function(n, o) {
            return uf(n, e, t(o), {});
          };
        }
        function ra(e, t) {
          return function(n, o) {
            var r;
            if (n === i && o === i)
              return t;
            if (n !== i && (r = n), o !== i) {
              if (r === i)
                return o;
              typeof n == "string" || typeof o == "string" ? (n = Rt(n), o = Rt(o)) : (n = Es(n), o = Es(o)), r = e(n, o);
            }
            return r;
          };
        }
        function Er(e) {
          return ln(function(t) {
            return t = Ke(t, Et(he())), Te(function(n) {
              var o = this;
              return e(t, function(r) {
                return Tt(r, o, n);
              });
            });
          });
        }
        function ia(e, t) {
          t = t === i ? " " : Rt(t);
          var n = t.length;
          if (n < 2)
            return n ? Sr(t, e) : t;
          var o = Sr(t, Ko(e / Fn(t)));
          return Nn(t) ? kn(Kt(o), 0, e).join("") : o.slice(0, e);
        }
        function Df(e, t, n, o) {
          var r = t & B, l = yo(e);
          function f() {
            for (var b = -1, C = arguments.length, D = -1, W = o.length, M = T(W + C), te = this && this !== ct && this instanceof f ? l : e; ++D < W; )
              M[D] = o[D];
            for (; C--; )
              M[D++] = arguments[++b];
            return Tt(te, r ? n : this, M);
          }
          return f;
        }
        function Ks(e) {
          return function(t, n, o) {
            return o && typeof o != "number" && yt(t, n, o) && (n = o = i), t = dn(t), n === i ? (n = t, t = 0) : n = dn(n), o = o === i ? t < n ? 1 : -1 : dn(o), wf(t, n, o, e);
          };
        }
        function sa(e) {
          return function(t, n) {
            return typeof t == "string" && typeof n == "string" || (t = Ft(t), n = Ft(n)), e(t, n);
          };
        }
        function Gs(e, t, n, o, r, l, f, b, C, D) {
          var W = t & P, M = W ? f : i, te = W ? i : f, ue = W ? l : i, ve = W ? i : l;
          t |= W ? ee : Q, t &= ~(W ? Q : ee), t & E || (t &= -4);
          var Ae = [
            e,
            t,
            r,
            ue,
            M,
            ve,
            te,
            b,
            C,
            D
          ], me = n.apply(i, Ae);
          return Br(e) && rl(me, Ae), me.placeholder = o, il(me, e, t);
        }
        function Rr(e) {
          var t = at[e];
          return function(n, o) {
            if (n = Ft(n), o = o == null ? 0 : ht(Ce(o), 292), o && is(n)) {
              var r = (De(n) + "e").split("e"), l = t(r[0] + "e" + (+r[1] + o));
              return r = (De(l) + "e").split("e"), +(r[0] + "e" + (+r[1] - o));
            }
            return t(n);
          };
        }
        var Wf = qn && 1 / Do(new qn([, -0]))[1] == se ? function(e) {
          return new qn(e);
        } : jr;
        function Ys(e) {
          return function(t) {
            var n = vt(t);
            return n == U ? sr(t) : n == qt ? jc(t) : qc(t, e(t));
          };
        }
        function sn(e, t, n, o, r, l, f, b) {
          var C = t & N;
          if (!C && typeof e != "function")
            throw new Wt(w);
          var D = o ? o.length : 0;
          if (D || (t &= -97, o = r = i), f = f === i ? f : rt(Ce(f), 0), b = b === i ? b : Ce(b), D -= r ? r.length : 0, t & Q) {
            var W = o, M = r;
            o = r = i;
          }
          var te = C ? i : Vr(e), ue = [
            e,
            t,
            n,
            o,
            r,
            W,
            M,
            l,
            f,
            b
          ];
          if (te && Qf(ue, te), e = ue[0], t = ue[1], n = ue[2], o = ue[3], r = ue[4], b = ue[9] = ue[9] === i ? C ? 0 : e.length : rt(ue[9] - D, 0), !b && t & (P | Y) && (t &= -25), !t || t == B)
            var ve = Vf(e, t, n);
          else t == P || t == Y ? ve = Of(e, t, b) : (t == ee || t == (B | ee)) && !r.length ? ve = Df(e, t, n, o) : ve = aa.apply(i, ue);
          var Ae = te ? Is : rl;
          return il(Ae(ve, ue), e, t);
        }
        function Zs(e, t, n, o) {
          return e === i || Yt(e, Hn[n]) && !We.call(o, n) ? t : e;
        }
        function Xs(e, t, n, o, r, l) {
          return Ze(e) && Ze(t) && (l.set(t, e), ea(e, t, i, Xs, l), l.delete(t)), e;
        }
        function Bf(e) {
          return So(e) ? i : e;
        }
        function Js(e, t, n, o, r, l) {
          var f = n & K, b = e.length, C = t.length;
          if (b != C && !(f && C > b))
            return !1;
          var D = l.get(e), W = l.get(t);
          if (D && W)
            return D == t && W == e;
          var M = -1, te = !0, ue = n & q ? new Tn() : i;
          for (l.set(e, t), l.set(t, e); ++M < b; ) {
            var ve = e[M], Ae = t[M];
            if (o)
              var me = f ? o(Ae, ve, M, t, e, l) : o(ve, Ae, M, e, t, l);
            if (me !== i) {
              if (me)
                continue;
              te = !1;
              break;
            }
            if (ue) {
              if (!tr(t, function(Ee, Le) {
                if (!lo(ue, Le) && (ve === Ee || r(ve, Ee, n, o, l)))
                  return ue.push(Le);
              })) {
                te = !1;
                break;
              }
            } else if (!(ve === Ae || r(ve, Ae, n, o, l))) {
              te = !1;
              break;
            }
          }
          return l.delete(e), l.delete(t), te;
        }
        function Mf(e, t, n, o, r, l, f) {
          switch (n) {
            case Bn:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case so:
              return !(e.byteLength != t.byteLength || !l(new Fo(e), new Fo(t)));
            case kt:
            case St:
            case ce:
              return Yt(+e, +t);
            case Z:
              return e.name == t.name && e.message == t.message;
            case Cn:
            case ro:
              return e == t + "";
            case U:
              var b = sr;
            case qt:
              var C = o & K;
              if (b || (b = Do), e.size != t.size && !C)
                return !1;
              var D = f.get(e);
              if (D)
                return D == t;
              o |= q, f.set(e, t);
              var W = Js(b(e), b(t), o, r, l, f);
              return f.delete(e), W;
            case Eo:
              if (po)
                return po.call(e) == po.call(t);
          }
          return !1;
        }
        function Uf(e, t, n, o, r, l) {
          var f = n & K, b = Lr(e), C = b.length, D = Lr(t), W = D.length;
          if (C != W && !f)
            return !1;
          for (var M = C; M--; ) {
            var te = b[M];
            if (!(f ? te in t : We.call(t, te)))
              return !1;
          }
          var ue = l.get(e), ve = l.get(t);
          if (ue && ve)
            return ue == t && ve == e;
          var Ae = !0;
          l.set(e, t), l.set(t, e);
          for (var me = f; ++M < C; ) {
            te = b[M];
            var Ee = e[te], Le = t[te];
            if (o)
              var Pt = f ? o(Le, Ee, te, t, e, l) : o(Ee, Le, te, e, t, l);
            if (!(Pt === i ? Ee === Le || r(Ee, Le, n, o, l) : Pt)) {
              Ae = !1;
              break;
            }
            me || (me = te == "constructor");
          }
          if (Ae && !me) {
            var wt = e.constructor, Vt = t.constructor;
            wt != Vt && "constructor" in e && "constructor" in t && !(typeof wt == "function" && wt instanceof wt && typeof Vt == "function" && Vt instanceof Vt) && (Ae = !1);
          }
          return l.delete(e), l.delete(t), Ae;
        }
        function ln(e) {
          return Ur(ol(e, i, fl), e + "");
        }
        function Lr(e) {
          return ms(e, lt, Dr);
        }
        function Pr(e) {
          return ms(e, $t, Qs);
        }
        var Vr = Yo ? function(e) {
          return Yo.get(e);
        } : jr;
        function la(e) {
          for (var t = e.name + "", n = Kn[t], o = We.call(Kn, t) ? n.length : 0; o--; ) {
            var r = n[o], l = r.func;
            if (l == null || l == e)
              return r.name;
          }
          return t;
        }
        function Xn(e) {
          var t = We.call(s, "placeholder") ? s : e;
          return t.placeholder;
        }
        function he() {
          var e = s.iteratee || Jr;
          return e = e === Jr ? ys : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function ua(e, t) {
          var n = e.__data__;
          return Yf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
        }
        function Or(e) {
          for (var t = lt(e), n = t.length; n--; ) {
            var o = t[n], r = e[o];
            t[n] = [o, r, tl(r)];
          }
          return t;
        }
        function Ln(e, t) {
          var n = Xc(e, t);
          return bs(n) ? n : i;
        }
        function Nf(e) {
          var t = We.call(e, An), n = e[An];
          try {
            e[An] = i;
            var o = !0;
          } catch {
          }
          var r = Uo.call(e);
          return o && (t ? e[An] = n : delete e[An]), r;
        }
        var Dr = ur ? function(e) {
          return e == null ? [] : (e = Me(e), hn(ur(e), function(t) {
            return as.call(e, t);
          }));
        } : ei, Qs = ur ? function(e) {
          for (var t = []; e; )
            vn(t, Dr(e)), e = zo(e);
          return t;
        } : ei, vt = bt;
        (cr && vt(new cr(new ArrayBuffer(1))) != Bn || co && vt(new co()) != U || dr && vt(dr.resolve()) != nn || qn && vt(new qn()) != qt || fo && vt(new fo()) != io) && (vt = function(e) {
          var t = bt(e), n = t == Oe ? e.constructor : i, o = n ? Pn(n) : "";
          if (o)
            switch (o) {
              case kd:
                return Bn;
              case Sd:
                return U;
              case xd:
                return nn;
              case Cd:
                return qt;
              case $d:
                return io;
            }
          return t;
        });
        function Ff(e, t, n) {
          for (var o = -1, r = n.length; ++o < r; ) {
            var l = n[o], f = l.size;
            switch (l.type) {
              case "drop":
                e += f;
                break;
              case "dropRight":
                t -= f;
                break;
              case "take":
                t = ht(t, e + f);
                break;
              case "takeRight":
                e = rt(e, t - f);
                break;
            }
          }
          return { start: e, end: t };
        }
        function zf(e) {
          var t = e.match(Yu);
          return t ? t[1].split(Zu) : [];
        }
        function js(e, t, n) {
          t = wn(t, e);
          for (var o = -1, r = t.length, l = !1; ++o < r; ) {
            var f = Qt(t[o]);
            if (!(l = e != null && n(e, f)))
              break;
            e = e[f];
          }
          return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && va(r) && un(f, r) && (Se(e) || Vn(e)));
        }
        function Hf(e) {
          var t = e.length, n = new e.constructor(t);
          return t && typeof e[0] == "string" && We.call(e, "index") && (n.index = e.index, n.input = e.input), n;
        }
        function el(e) {
          return typeof e.constructor == "function" && !wo(e) ? Gn(zo(e)) : {};
        }
        function qf(e, t, n) {
          var o = e.constructor;
          switch (t) {
            case so:
              return Tr(e);
            case kt:
            case St:
              return new o(+e);
            case Bn:
              return If(e, n);
            case Oa:
            case Da:
            case Wa:
            case Ba:
            case Ma:
            case Ua:
            case Na:
            case Fa:
            case za:
              return Ds(e, n);
            case U:
              return new o();
            case ce:
            case ro:
              return new o(e);
            case Cn:
              return Tf(e);
            case qt:
              return new o();
            case Eo:
              return Ef(e);
          }
        }
        function Kf(e, t) {
          var n = t.length;
          if (!n)
            return e;
          var o = n - 1;
          return t[o] = (n > 1 ? "& " : "") + t[o], t = t.join(n > 2 ? ", " : " "), e.replace(Gu, `{
/* [wrapped with ` + t + `] */
`);
        }
        function Gf(e) {
          return Se(e) || Vn(e) || !!(rs && e && e[rs]);
        }
        function un(e, t) {
          var n = typeof e;
          return t = t ?? ye, !!t && (n == "number" || n != "symbol" && ac.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function yt(e, t, n) {
          if (!Ze(n))
            return !1;
          var o = typeof t;
          return (o == "number" ? Ct(n) && un(t, n.length) : o == "string" && t in n) ? Yt(n[t], e) : !1;
        }
        function Wr(e, t) {
          if (Se(e))
            return !1;
          var n = typeof e;
          return n == "number" || n == "symbol" || n == "boolean" || e == null || Lt(e) ? !0 : zu.test(e) || !Fu.test(e) || t != null && e in Me(t);
        }
        function Yf(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function Br(e) {
          var t = la(e), n = s[t];
          if (typeof n != "function" || !(t in Re.prototype))
            return !1;
          if (e === n)
            return !0;
          var o = Vr(n);
          return !!o && e === o[0];
        }
        function Zf(e) {
          return !!ts && ts in e;
        }
        var Xf = Bo ? cn : ti;
        function wo(e) {
          var t = e && e.constructor, n = typeof t == "function" && t.prototype || Hn;
          return e === n;
        }
        function tl(e) {
          return e === e && !Ze(e);
        }
        function nl(e, t) {
          return function(n) {
            return n == null ? !1 : n[e] === t && (t !== i || e in Me(n));
          };
        }
        function Jf(e) {
          var t = pa(e, function(o) {
            return n.size === A && n.clear(), o;
          }), n = t.cache;
          return t;
        }
        function Qf(e, t) {
          var n = e[1], o = t[1], r = n | o, l = r < (B | N | G), f = o == G && n == P || o == G && n == be && e[7].length <= t[8] || o == (G | be) && t[7].length <= t[8] && n == P;
          if (!(l || f))
            return e;
          o & B && (e[2] = t[2], r |= n & B ? 0 : E);
          var b = t[3];
          if (b) {
            var C = e[3];
            e[3] = C ? Bs(C, b, t[4]) : b, e[4] = C ? mn(e[3], d) : t[4];
          }
          return b = t[5], b && (C = e[5], e[5] = C ? Ms(C, b, t[6]) : b, e[6] = C ? mn(e[5], d) : t[6]), b = t[7], b && (e[7] = b), o & G && (e[8] = e[8] == null ? t[8] : ht(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = r, e;
        }
        function jf(e) {
          var t = [];
          if (e != null)
            for (var n in Me(e))
              t.push(n);
          return t;
        }
        function eg(e) {
          return Uo.call(e);
        }
        function ol(e, t, n) {
          return t = rt(t === i ? e.length - 1 : t, 0), function() {
            for (var o = arguments, r = -1, l = rt(o.length - t, 0), f = T(l); ++r < l; )
              f[r] = o[t + r];
            r = -1;
            for (var b = T(t + 1); ++r < t; )
              b[r] = o[r];
            return b[t] = n(f), Tt(e, this, b);
          };
        }
        function al(e, t) {
          return t.length < 2 ? e : Rn(e, Ut(t, 0, -1));
        }
        function tg(e, t) {
          for (var n = e.length, o = ht(t.length, n), r = xt(e); o--; ) {
            var l = t[o];
            e[o] = un(l, n) ? r[l] : i;
          }
          return e;
        }
        function Mr(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var rl = sl(Is), ko = hd || function(e, t) {
          return ct.setTimeout(e, t);
        }, Ur = sl(xf);
        function il(e, t, n) {
          var o = t + "";
          return Ur(e, Kf(o, ng(zf(o), n)));
        }
        function sl(e) {
          var t = 0, n = 0;
          return function() {
            var o = bd(), r = ge - (o - n);
            if (n = o, r > 0) {
              if (++t >= nt)
                return arguments[0];
            } else
              t = 0;
            return e.apply(i, arguments);
          };
        }
        function ca(e, t) {
          var n = -1, o = e.length, r = o - 1;
          for (t = t === i ? o : t; ++n < t; ) {
            var l = kr(n, r), f = e[l];
            e[l] = e[n], e[n] = f;
          }
          return e.length = t, e;
        }
        var ll = Jf(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(Hu, function(n, o, r, l) {
            t.push(r ? l.replace(Qu, "$1") : o || n);
          }), t;
        });
        function Qt(e) {
          if (typeof e == "string" || Lt(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -se ? "-0" : t;
        }
        function Pn(e) {
          if (e != null) {
            try {
              return Mo.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function ng(e, t) {
          return Dt(F, function(n) {
            var o = "_." + n[0];
            t & n[1] && !Vo(e, o) && e.push(o);
          }), e.sort();
        }
        function ul(e) {
          if (e instanceof Re)
            return e.clone();
          var t = new Bt(e.__wrapped__, e.__chain__);
          return t.__actions__ = xt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function og(e, t, n) {
          (n ? yt(e, t, n) : t === i) ? t = 1 : t = rt(Ce(t), 0);
          var o = e == null ? 0 : e.length;
          if (!o || t < 1)
            return [];
          for (var r = 0, l = 0, f = T(Ko(o / t)); r < o; )
            f[l++] = Ut(e, r, r += t);
          return f;
        }
        function ag(e) {
          for (var t = -1, n = e == null ? 0 : e.length, o = 0, r = []; ++t < n; ) {
            var l = e[t];
            l && (r[o++] = l);
          }
          return r;
        }
        function rg() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = T(e - 1), n = arguments[0], o = e; o--; )
            t[o - 1] = arguments[o];
          return vn(Se(n) ? xt(n) : [n], dt(t, 1));
        }
        var ig = Te(function(e, t) {
          return et(e) ? vo(e, dt(t, 1, et, !0)) : [];
        }), sg = Te(function(e, t) {
          var n = Nt(t);
          return et(n) && (n = i), et(e) ? vo(e, dt(t, 1, et, !0), he(n, 2)) : [];
        }), lg = Te(function(e, t) {
          var n = Nt(t);
          return et(n) && (n = i), et(e) ? vo(e, dt(t, 1, et, !0), i, n) : [];
        });
        function ug(e, t, n) {
          var o = e == null ? 0 : e.length;
          return o ? (t = n || t === i ? 1 : Ce(t), Ut(e, t < 0 ? 0 : t, o)) : [];
        }
        function cg(e, t, n) {
          var o = e == null ? 0 : e.length;
          return o ? (t = n || t === i ? 1 : Ce(t), t = o - t, Ut(e, 0, t < 0 ? 0 : t)) : [];
        }
        function dg(e, t) {
          return e && e.length ? na(e, he(t, 3), !0, !0) : [];
        }
        function fg(e, t) {
          return e && e.length ? na(e, he(t, 3), !0) : [];
        }
        function gg(e, t, n, o) {
          var r = e == null ? 0 : e.length;
          return r ? (n && typeof n != "number" && yt(e, t, n) && (n = 0, o = r), af(e, t, n, o)) : [];
        }
        function cl(e, t, n) {
          var o = e == null ? 0 : e.length;
          if (!o)
            return -1;
          var r = n == null ? 0 : Ce(n);
          return r < 0 && (r = rt(o + r, 0)), Oo(e, he(t, 3), r);
        }
        function dl(e, t, n) {
          var o = e == null ? 0 : e.length;
          if (!o)
            return -1;
          var r = o - 1;
          return n !== i && (r = Ce(n), r = n < 0 ? rt(o + r, 0) : ht(r, o - 1)), Oo(e, he(t, 3), r, !0);
        }
        function fl(e) {
          var t = e == null ? 0 : e.length;
          return t ? dt(e, 1) : [];
        }
        function pg(e) {
          var t = e == null ? 0 : e.length;
          return t ? dt(e, se) : [];
        }
        function hg(e, t) {
          var n = e == null ? 0 : e.length;
          return n ? (t = t === i ? 1 : Ce(t), dt(e, t)) : [];
        }
        function vg(e) {
          for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
            var r = e[t];
            o[r[0]] = r[1];
          }
          return o;
        }
        function gl(e) {
          return e && e.length ? e[0] : i;
        }
        function mg(e, t, n) {
          var o = e == null ? 0 : e.length;
          if (!o)
            return -1;
          var r = n == null ? 0 : Ce(n);
          return r < 0 && (r = rt(o + r, 0)), Un(e, t, r);
        }
        function _g(e) {
          var t = e == null ? 0 : e.length;
          return t ? Ut(e, 0, -1) : [];
        }
        var bg = Te(function(e) {
          var t = Ke(e, Ar);
          return t.length && t[0] === e[0] ? mr(t) : [];
        }), yg = Te(function(e) {
          var t = Nt(e), n = Ke(e, Ar);
          return t === Nt(n) ? t = i : n.pop(), n.length && n[0] === e[0] ? mr(n, he(t, 2)) : [];
        }), wg = Te(function(e) {
          var t = Nt(e), n = Ke(e, Ar);
          return t = typeof t == "function" ? t : i, t && n.pop(), n.length && n[0] === e[0] ? mr(n, i, t) : [];
        });
        function kg(e, t) {
          return e == null ? "" : md.call(e, t);
        }
        function Nt(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : i;
        }
        function Sg(e, t, n) {
          var o = e == null ? 0 : e.length;
          if (!o)
            return -1;
          var r = o;
          return n !== i && (r = Ce(n), r = r < 0 ? rt(o + r, 0) : ht(r, o - 1)), t === t ? td(e, t, r) : Oo(e, Gi, r, !0);
        }
        function xg(e, t) {
          return e && e.length ? xs(e, Ce(t)) : i;
        }
        var Cg = Te(pl);
        function pl(e, t) {
          return e && e.length && t && t.length ? wr(e, t) : e;
        }
        function $g(e, t, n) {
          return e && e.length && t && t.length ? wr(e, t, he(n, 2)) : e;
        }
        function Ag(e, t, n) {
          return e && e.length && t && t.length ? wr(e, t, i, n) : e;
        }
        var Ig = ln(function(e, t) {
          var n = e == null ? 0 : e.length, o = gr(e, t);
          return As(e, Ke(t, function(r) {
            return un(r, n) ? +r : r;
          }).sort(Ws)), o;
        });
        function Tg(e, t) {
          var n = [];
          if (!(e && e.length))
            return n;
          var o = -1, r = [], l = e.length;
          for (t = he(t, 3); ++o < l; ) {
            var f = e[o];
            t(f, o, e) && (n.push(f), r.push(o));
          }
          return As(e, r), n;
        }
        function Nr(e) {
          return e == null ? e : wd.call(e);
        }
        function Eg(e, t, n) {
          var o = e == null ? 0 : e.length;
          return o ? (n && typeof n != "number" && yt(e, t, n) ? (t = 0, n = o) : (t = t == null ? 0 : Ce(t), n = n === i ? o : Ce(n)), Ut(e, t, n)) : [];
        }
        function Rg(e, t) {
          return ta(e, t);
        }
        function Lg(e, t, n) {
          return xr(e, t, he(n, 2));
        }
        function Pg(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var o = ta(e, t);
            if (o < n && Yt(e[o], t))
              return o;
          }
          return -1;
        }
        function Vg(e, t) {
          return ta(e, t, !0);
        }
        function Og(e, t, n) {
          return xr(e, t, he(n, 2), !0);
        }
        function Dg(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var o = ta(e, t, !0) - 1;
            if (Yt(e[o], t))
              return o;
          }
          return -1;
        }
        function Wg(e) {
          return e && e.length ? Ts(e) : [];
        }
        function Bg(e, t) {
          return e && e.length ? Ts(e, he(t, 2)) : [];
        }
        function Mg(e) {
          var t = e == null ? 0 : e.length;
          return t ? Ut(e, 1, t) : [];
        }
        function Ug(e, t, n) {
          return e && e.length ? (t = n || t === i ? 1 : Ce(t), Ut(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Ng(e, t, n) {
          var o = e == null ? 0 : e.length;
          return o ? (t = n || t === i ? 1 : Ce(t), t = o - t, Ut(e, t < 0 ? 0 : t, o)) : [];
        }
        function Fg(e, t) {
          return e && e.length ? na(e, he(t, 3), !1, !0) : [];
        }
        function zg(e, t) {
          return e && e.length ? na(e, he(t, 3)) : [];
        }
        var Hg = Te(function(e) {
          return yn(dt(e, 1, et, !0));
        }), qg = Te(function(e) {
          var t = Nt(e);
          return et(t) && (t = i), yn(dt(e, 1, et, !0), he(t, 2));
        }), Kg = Te(function(e) {
          var t = Nt(e);
          return t = typeof t == "function" ? t : i, yn(dt(e, 1, et, !0), i, t);
        });
        function Gg(e) {
          return e && e.length ? yn(e) : [];
        }
        function Yg(e, t) {
          return e && e.length ? yn(e, he(t, 2)) : [];
        }
        function Zg(e, t) {
          return t = typeof t == "function" ? t : i, e && e.length ? yn(e, i, t) : [];
        }
        function Fr(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = hn(e, function(n) {
            if (et(n))
              return t = rt(n.length, t), !0;
          }), rr(t, function(n) {
            return Ke(e, nr(n));
          });
        }
        function hl(e, t) {
          if (!(e && e.length))
            return [];
          var n = Fr(e);
          return t == null ? n : Ke(n, function(o) {
            return Tt(t, i, o);
          });
        }
        var Xg = Te(function(e, t) {
          return et(e) ? vo(e, t) : [];
        }), Jg = Te(function(e) {
          return $r(hn(e, et));
        }), Qg = Te(function(e) {
          var t = Nt(e);
          return et(t) && (t = i), $r(hn(e, et), he(t, 2));
        }), jg = Te(function(e) {
          var t = Nt(e);
          return t = typeof t == "function" ? t : i, $r(hn(e, et), i, t);
        }), ep = Te(Fr);
        function tp(e, t) {
          return Ps(e || [], t || [], ho);
        }
        function np(e, t) {
          return Ps(e || [], t || [], bo);
        }
        var op = Te(function(e) {
          var t = e.length, n = t > 1 ? e[t - 1] : i;
          return n = typeof n == "function" ? (e.pop(), n) : i, hl(e, n);
        });
        function vl(e) {
          var t = s(e);
          return t.__chain__ = !0, t;
        }
        function ap(e, t) {
          return t(e), e;
        }
        function da(e, t) {
          return t(e);
        }
        var rp = ln(function(e) {
          var t = e.length, n = t ? e[0] : 0, o = this.__wrapped__, r = function(l) {
            return gr(l, e);
          };
          return t > 1 || this.__actions__.length || !(o instanceof Re) || !un(n) ? this.thru(r) : (o = o.slice(n, +n + (t ? 1 : 0)), o.__actions__.push({
            func: da,
            args: [r],
            thisArg: i
          }), new Bt(o, this.__chain__).thru(function(l) {
            return t && !l.length && l.push(i), l;
          }));
        });
        function ip() {
          return vl(this);
        }
        function sp() {
          return new Bt(this.value(), this.__chain__);
        }
        function lp() {
          this.__values__ === i && (this.__values__ = El(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? i : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function up() {
          return this;
        }
        function cp(e) {
          for (var t, n = this; n instanceof Xo; ) {
            var o = ul(n);
            o.__index__ = 0, o.__values__ = i, t ? r.__wrapped__ = o : t = o;
            var r = o;
            n = n.__wrapped__;
          }
          return r.__wrapped__ = e, t;
        }
        function dp() {
          var e = this.__wrapped__;
          if (e instanceof Re) {
            var t = e;
            return this.__actions__.length && (t = new Re(this)), t = t.reverse(), t.__actions__.push({
              func: da,
              args: [Nr],
              thisArg: i
            }), new Bt(t, this.__chain__);
          }
          return this.thru(Nr);
        }
        function fp() {
          return Ls(this.__wrapped__, this.__actions__);
        }
        var gp = oa(function(e, t, n) {
          We.call(e, n) ? ++e[n] : rn(e, n, 1);
        });
        function pp(e, t, n) {
          var o = Se(e) ? qi : of;
          return n && yt(e, t, n) && (t = i), o(e, he(t, 3));
        }
        function hp(e, t) {
          var n = Se(e) ? hn : hs;
          return n(e, he(t, 3));
        }
        var vp = zs(cl), mp = zs(dl);
        function _p(e, t) {
          return dt(fa(e, t), 1);
        }
        function bp(e, t) {
          return dt(fa(e, t), se);
        }
        function yp(e, t, n) {
          return n = n === i ? 1 : Ce(n), dt(fa(e, t), n);
        }
        function ml(e, t) {
          var n = Se(e) ? Dt : bn;
          return n(e, he(t, 3));
        }
        function _l(e, t) {
          var n = Se(e) ? Bc : ps;
          return n(e, he(t, 3));
        }
        var wp = oa(function(e, t, n) {
          We.call(e, n) ? e[n].push(t) : rn(e, n, [t]);
        });
        function kp(e, t, n, o) {
          e = Ct(e) ? e : Qn(e), n = n && !o ? Ce(n) : 0;
          var r = e.length;
          return n < 0 && (n = rt(r + n, 0)), ma(e) ? n <= r && e.indexOf(t, n) > -1 : !!r && Un(e, t, n) > -1;
        }
        var Sp = Te(function(e, t, n) {
          var o = -1, r = typeof t == "function", l = Ct(e) ? T(e.length) : [];
          return bn(e, function(f) {
            l[++o] = r ? Tt(t, f, n) : mo(f, t, n);
          }), l;
        }), xp = oa(function(e, t, n) {
          rn(e, n, t);
        });
        function fa(e, t) {
          var n = Se(e) ? Ke : ws;
          return n(e, he(t, 3));
        }
        function Cp(e, t, n, o) {
          return e == null ? [] : (Se(t) || (t = t == null ? [] : [t]), n = o ? i : n, Se(n) || (n = n == null ? [] : [n]), Cs(e, t, n));
        }
        var $p = oa(function(e, t, n) {
          e[n ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function Ap(e, t, n) {
          var o = Se(e) ? er : Zi, r = arguments.length < 3;
          return o(e, he(t, 4), n, r, bn);
        }
        function Ip(e, t, n) {
          var o = Se(e) ? Mc : Zi, r = arguments.length < 3;
          return o(e, he(t, 4), n, r, ps);
        }
        function Tp(e, t) {
          var n = Se(e) ? hn : hs;
          return n(e, ha(he(t, 3)));
        }
        function Ep(e) {
          var t = Se(e) ? cs : kf;
          return t(e);
        }
        function Rp(e, t, n) {
          (n ? yt(e, t, n) : t === i) ? t = 1 : t = Ce(t);
          var o = Se(e) ? Qd : Sf;
          return o(e, t);
        }
        function Lp(e) {
          var t = Se(e) ? jd : Cf;
          return t(e);
        }
        function Pp(e) {
          if (e == null)
            return 0;
          if (Ct(e))
            return ma(e) ? Fn(e) : e.length;
          var t = vt(e);
          return t == U || t == qt ? e.size : br(e).length;
        }
        function Vp(e, t, n) {
          var o = Se(e) ? tr : $f;
          return n && yt(e, t, n) && (t = i), o(e, he(t, 3));
        }
        var Op = Te(function(e, t) {
          if (e == null)
            return [];
          var n = t.length;
          return n > 1 && yt(e, t[0], t[1]) ? t = [] : n > 2 && yt(t[0], t[1], t[2]) && (t = [t[0]]), Cs(e, dt(t, 1), []);
        }), ga = pd || function() {
          return ct.Date.now();
        };
        function Dp(e, t) {
          if (typeof t != "function")
            throw new Wt(w);
          return e = Ce(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function bl(e, t, n) {
          return t = n ? i : t, t = e && t == null ? e.length : t, sn(e, G, i, i, i, i, t);
        }
        function yl(e, t) {
          var n;
          if (typeof t != "function")
            throw new Wt(w);
          return e = Ce(e), function() {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = i), n;
          };
        }
        var zr = Te(function(e, t, n) {
          var o = B;
          if (n.length) {
            var r = mn(n, Xn(zr));
            o |= ee;
          }
          return sn(e, o, t, n, r);
        }), wl = Te(function(e, t, n) {
          var o = B | N;
          if (n.length) {
            var r = mn(n, Xn(wl));
            o |= ee;
          }
          return sn(t, o, e, n, r);
        });
        function kl(e, t, n) {
          t = n ? i : t;
          var o = sn(e, P, i, i, i, i, i, t);
          return o.placeholder = kl.placeholder, o;
        }
        function Sl(e, t, n) {
          t = n ? i : t;
          var o = sn(e, Y, i, i, i, i, i, t);
          return o.placeholder = Sl.placeholder, o;
        }
        function xl(e, t, n) {
          var o, r, l, f, b, C, D = 0, W = !1, M = !1, te = !0;
          if (typeof e != "function")
            throw new Wt(w);
          t = Ft(t) || 0, Ze(n) && (W = !!n.leading, M = "maxWait" in n, l = M ? rt(Ft(n.maxWait) || 0, t) : l, te = "trailing" in n ? !!n.trailing : te);
          function ue(tt) {
            var Zt = o, fn = r;
            return o = r = i, D = tt, f = e.apply(fn, Zt), f;
          }
          function ve(tt) {
            return D = tt, b = ko(Ee, t), W ? ue(tt) : f;
          }
          function Ae(tt) {
            var Zt = tt - C, fn = tt - D, zl = t - Zt;
            return M ? ht(zl, l - fn) : zl;
          }
          function me(tt) {
            var Zt = tt - C, fn = tt - D;
            return C === i || Zt >= t || Zt < 0 || M && fn >= l;
          }
          function Ee() {
            var tt = ga();
            if (me(tt))
              return Le(tt);
            b = ko(Ee, Ae(tt));
          }
          function Le(tt) {
            return b = i, te && o ? ue(tt) : (o = r = i, f);
          }
          function Pt() {
            b !== i && Vs(b), D = 0, o = C = r = b = i;
          }
          function wt() {
            return b === i ? f : Le(ga());
          }
          function Vt() {
            var tt = ga(), Zt = me(tt);
            if (o = arguments, r = this, C = tt, Zt) {
              if (b === i)
                return ve(C);
              if (M)
                return Vs(b), b = ko(Ee, t), ue(C);
            }
            return b === i && (b = ko(Ee, t)), f;
          }
          return Vt.cancel = Pt, Vt.flush = wt, Vt;
        }
        var Wp = Te(function(e, t) {
          return gs(e, 1, t);
        }), Bp = Te(function(e, t, n) {
          return gs(e, Ft(t) || 0, n);
        });
        function Mp(e) {
          return sn(e, Ue);
        }
        function pa(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new Wt(w);
          var n = function() {
            var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
            if (l.has(r))
              return l.get(r);
            var f = e.apply(this, o);
            return n.cache = l.set(r, f) || l, f;
          };
          return n.cache = new (pa.Cache || an)(), n;
        }
        pa.Cache = an;
        function ha(e) {
          if (typeof e != "function")
            throw new Wt(w);
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, t[0]);
              case 2:
                return !e.call(this, t[0], t[1]);
              case 3:
                return !e.call(this, t[0], t[1], t[2]);
            }
            return !e.apply(this, t);
          };
        }
        function Up(e) {
          return yl(2, e);
        }
        var Np = Af(function(e, t) {
          t = t.length == 1 && Se(t[0]) ? Ke(t[0], Et(he())) : Ke(dt(t, 1), Et(he()));
          var n = t.length;
          return Te(function(o) {
            for (var r = -1, l = ht(o.length, n); ++r < l; )
              o[r] = t[r].call(this, o[r]);
            return Tt(e, this, o);
          });
        }), Hr = Te(function(e, t) {
          var n = mn(t, Xn(Hr));
          return sn(e, ee, i, t, n);
        }), Cl = Te(function(e, t) {
          var n = mn(t, Xn(Cl));
          return sn(e, Q, i, t, n);
        }), Fp = ln(function(e, t) {
          return sn(e, be, i, i, i, t);
        });
        function zp(e, t) {
          if (typeof e != "function")
            throw new Wt(w);
          return t = t === i ? t : Ce(t), Te(e, t);
        }
        function Hp(e, t) {
          if (typeof e != "function")
            throw new Wt(w);
          return t = t == null ? 0 : rt(Ce(t), 0), Te(function(n) {
            var o = n[t], r = kn(n, 0, t);
            return o && vn(r, o), Tt(e, this, r);
          });
        }
        function qp(e, t, n) {
          var o = !0, r = !0;
          if (typeof e != "function")
            throw new Wt(w);
          return Ze(n) && (o = "leading" in n ? !!n.leading : o, r = "trailing" in n ? !!n.trailing : r), xl(e, t, {
            leading: o,
            maxWait: t,
            trailing: r
          });
        }
        function Kp(e) {
          return bl(e, 1);
        }
        function Gp(e, t) {
          return Hr(Ir(t), e);
        }
        function Yp() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return Se(e) ? e : [e];
        }
        function Zp(e) {
          return Mt(e, R);
        }
        function Xp(e, t) {
          return t = typeof t == "function" ? t : i, Mt(e, R, t);
        }
        function Jp(e) {
          return Mt(e, g | R);
        }
        function Qp(e, t) {
          return t = typeof t == "function" ? t : i, Mt(e, g | R, t);
        }
        function jp(e, t) {
          return t == null || fs(e, t, lt(t));
        }
        function Yt(e, t) {
          return e === t || e !== e && t !== t;
        }
        var eh = sa(vr), th = sa(function(e, t) {
          return e >= t;
        }), Vn = _s(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? _s : function(e) {
          return Qe(e) && We.call(e, "callee") && !as.call(e, "callee");
        }, Se = T.isArray, nh = Mi ? Et(Mi) : cf;
        function Ct(e) {
          return e != null && va(e.length) && !cn(e);
        }
        function et(e) {
          return Qe(e) && Ct(e);
        }
        function oh(e) {
          return e === !0 || e === !1 || Qe(e) && bt(e) == kt;
        }
        var Sn = vd || ti, ah = Ui ? Et(Ui) : df;
        function rh(e) {
          return Qe(e) && e.nodeType === 1 && !So(e);
        }
        function ih(e) {
          if (e == null)
            return !0;
          if (Ct(e) && (Se(e) || typeof e == "string" || typeof e.splice == "function" || Sn(e) || Jn(e) || Vn(e)))
            return !e.length;
          var t = vt(e);
          if (t == U || t == qt)
            return !e.size;
          if (wo(e))
            return !br(e).length;
          for (var n in e)
            if (We.call(e, n))
              return !1;
          return !0;
        }
        function sh(e, t) {
          return _o(e, t);
        }
        function lh(e, t, n) {
          n = typeof n == "function" ? n : i;
          var o = n ? n(e, t) : i;
          return o === i ? _o(e, t, i, n) : !!o;
        }
        function qr(e) {
          if (!Qe(e))
            return !1;
          var t = bt(e);
          return t == Z || t == H || typeof e.message == "string" && typeof e.name == "string" && !So(e);
        }
        function uh(e) {
          return typeof e == "number" && is(e);
        }
        function cn(e) {
          if (!Ze(e))
            return !1;
          var t = bt(e);
          return t == re || t == V || t == Je || t == It;
        }
        function $l(e) {
          return typeof e == "number" && e == Ce(e);
        }
        function va(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ye;
        }
        function Ze(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function Qe(e) {
          return e != null && typeof e == "object";
        }
        var Al = Ni ? Et(Ni) : gf;
        function ch(e, t) {
          return e === t || _r(e, t, Or(t));
        }
        function dh(e, t, n) {
          return n = typeof n == "function" ? n : i, _r(e, t, Or(t), n);
        }
        function fh(e) {
          return Il(e) && e != +e;
        }
        function gh(e) {
          if (Xf(e))
            throw new we(S);
          return bs(e);
        }
        function ph(e) {
          return e === null;
        }
        function hh(e) {
          return e == null;
        }
        function Il(e) {
          return typeof e == "number" || Qe(e) && bt(e) == ce;
        }
        function So(e) {
          if (!Qe(e) || bt(e) != Oe)
            return !1;
          var t = zo(e);
          if (t === null)
            return !0;
          var n = We.call(t, "constructor") && t.constructor;
          return typeof n == "function" && n instanceof n && Mo.call(n) == cd;
        }
        var Kr = Fi ? Et(Fi) : pf;
        function vh(e) {
          return $l(e) && e >= -ye && e <= ye;
        }
        var Tl = zi ? Et(zi) : hf;
        function ma(e) {
          return typeof e == "string" || !Se(e) && Qe(e) && bt(e) == ro;
        }
        function Lt(e) {
          return typeof e == "symbol" || Qe(e) && bt(e) == Eo;
        }
        var Jn = Hi ? Et(Hi) : vf;
        function mh(e) {
          return e === i;
        }
        function _h(e) {
          return Qe(e) && vt(e) == io;
        }
        function bh(e) {
          return Qe(e) && bt(e) == Vu;
        }
        var yh = sa(yr), wh = sa(function(e, t) {
          return e <= t;
        });
        function El(e) {
          if (!e)
            return [];
          if (Ct(e))
            return ma(e) ? Kt(e) : xt(e);
          if (uo && e[uo])
            return Qc(e[uo]());
          var t = vt(e), n = t == U ? sr : t == qt ? Do : Qn;
          return n(e);
        }
        function dn(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Ft(e), e === se || e === -se) {
            var t = e < 0 ? -1 : 1;
            return t * ot;
          }
          return e === e ? e : 0;
        }
        function Ce(e) {
          var t = dn(e), n = t % 1;
          return t === t ? n ? t - n : t : 0;
        }
        function Rl(e) {
          return e ? En(Ce(e), 0, je) : 0;
        }
        function Ft(e) {
          if (typeof e == "number")
            return e;
          if (Lt(e))
            return pt;
          if (Ze(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Ze(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Xi(e);
          var n = tc.test(e);
          return n || oc.test(e) ? Oc(e.slice(2), n ? 2 : 8) : ec.test(e) ? pt : +e;
        }
        function Ll(e) {
          return Jt(e, $t(e));
        }
        function kh(e) {
          return e ? En(Ce(e), -ye, ye) : e === 0 ? e : 0;
        }
        function De(e) {
          return e == null ? "" : Rt(e);
        }
        var Sh = Yn(function(e, t) {
          if (wo(t) || Ct(t)) {
            Jt(t, lt(t), e);
            return;
          }
          for (var n in t)
            We.call(t, n) && ho(e, n, t[n]);
        }), Pl = Yn(function(e, t) {
          Jt(t, $t(t), e);
        }), _a = Yn(function(e, t, n, o) {
          Jt(t, $t(t), e, o);
        }), xh = Yn(function(e, t, n, o) {
          Jt(t, lt(t), e, o);
        }), Ch = ln(gr);
        function $h(e, t) {
          var n = Gn(e);
          return t == null ? n : ds(n, t);
        }
        var Ah = Te(function(e, t) {
          e = Me(e);
          var n = -1, o = t.length, r = o > 2 ? t[2] : i;
          for (r && yt(t[0], t[1], r) && (o = 1); ++n < o; )
            for (var l = t[n], f = $t(l), b = -1, C = f.length; ++b < C; ) {
              var D = f[b], W = e[D];
              (W === i || Yt(W, Hn[D]) && !We.call(e, D)) && (e[D] = l[D]);
            }
          return e;
        }), Ih = Te(function(e) {
          return e.push(i, Xs), Tt(Vl, i, e);
        });
        function Th(e, t) {
          return Ki(e, he(t, 3), Xt);
        }
        function Eh(e, t) {
          return Ki(e, he(t, 3), hr);
        }
        function Rh(e, t) {
          return e == null ? e : pr(e, he(t, 3), $t);
        }
        function Lh(e, t) {
          return e == null ? e : vs(e, he(t, 3), $t);
        }
        function Ph(e, t) {
          return e && Xt(e, he(t, 3));
        }
        function Vh(e, t) {
          return e && hr(e, he(t, 3));
        }
        function Oh(e) {
          return e == null ? [] : jo(e, lt(e));
        }
        function Dh(e) {
          return e == null ? [] : jo(e, $t(e));
        }
        function Gr(e, t, n) {
          var o = e == null ? i : Rn(e, t);
          return o === i ? n : o;
        }
        function Wh(e, t) {
          return e != null && js(e, t, rf);
        }
        function Yr(e, t) {
          return e != null && js(e, t, sf);
        }
        var Bh = qs(function(e, t, n) {
          t != null && typeof t.toString != "function" && (t = Uo.call(t)), e[t] = n;
        }, Xr(At)), Mh = qs(function(e, t, n) {
          t != null && typeof t.toString != "function" && (t = Uo.call(t)), We.call(e, t) ? e[t].push(n) : e[t] = [n];
        }, he), Uh = Te(mo);
        function lt(e) {
          return Ct(e) ? us(e) : br(e);
        }
        function $t(e) {
          return Ct(e) ? us(e, !0) : mf(e);
        }
        function Nh(e, t) {
          var n = {};
          return t = he(t, 3), Xt(e, function(o, r, l) {
            rn(n, t(o, r, l), o);
          }), n;
        }
        function Fh(e, t) {
          var n = {};
          return t = he(t, 3), Xt(e, function(o, r, l) {
            rn(n, r, t(o, r, l));
          }), n;
        }
        var zh = Yn(function(e, t, n) {
          ea(e, t, n);
        }), Vl = Yn(function(e, t, n, o) {
          ea(e, t, n, o);
        }), Hh = ln(function(e, t) {
          var n = {};
          if (e == null)
            return n;
          var o = !1;
          t = Ke(t, function(l) {
            return l = wn(l, e), o || (o = l.length > 1), l;
          }), Jt(e, Pr(e), n), o && (n = Mt(n, g | I | R, Bf));
          for (var r = t.length; r--; )
            Cr(n, t[r]);
          return n;
        });
        function qh(e, t) {
          return Ol(e, ha(he(t)));
        }
        var Kh = ln(function(e, t) {
          return e == null ? {} : bf(e, t);
        });
        function Ol(e, t) {
          if (e == null)
            return {};
          var n = Ke(Pr(e), function(o) {
            return [o];
          });
          return t = he(t), $s(e, n, function(o, r) {
            return t(o, r[0]);
          });
        }
        function Gh(e, t, n) {
          t = wn(t, e);
          var o = -1, r = t.length;
          for (r || (r = 1, e = i); ++o < r; ) {
            var l = e == null ? i : e[Qt(t[o])];
            l === i && (o = r, l = n), e = cn(l) ? l.call(e) : l;
          }
          return e;
        }
        function Yh(e, t, n) {
          return e == null ? e : bo(e, t, n);
        }
        function Zh(e, t, n, o) {
          return o = typeof o == "function" ? o : i, e == null ? e : bo(e, t, n, o);
        }
        var Dl = Ys(lt), Wl = Ys($t);
        function Xh(e, t, n) {
          var o = Se(e), r = o || Sn(e) || Jn(e);
          if (t = he(t, 4), n == null) {
            var l = e && e.constructor;
            r ? n = o ? new l() : [] : Ze(e) ? n = cn(l) ? Gn(zo(e)) : {} : n = {};
          }
          return (r ? Dt : Xt)(e, function(f, b, C) {
            return t(n, f, b, C);
          }), n;
        }
        function Jh(e, t) {
          return e == null ? !0 : Cr(e, t);
        }
        function Qh(e, t, n) {
          return e == null ? e : Rs(e, t, Ir(n));
        }
        function jh(e, t, n, o) {
          return o = typeof o == "function" ? o : i, e == null ? e : Rs(e, t, Ir(n), o);
        }
        function Qn(e) {
          return e == null ? [] : ir(e, lt(e));
        }
        function ev(e) {
          return e == null ? [] : ir(e, $t(e));
        }
        function tv(e, t, n) {
          return n === i && (n = t, t = i), n !== i && (n = Ft(n), n = n === n ? n : 0), t !== i && (t = Ft(t), t = t === t ? t : 0), En(Ft(e), t, n);
        }
        function nv(e, t, n) {
          return t = dn(t), n === i ? (n = t, t = 0) : n = dn(n), e = Ft(e), lf(e, t, n);
        }
        function ov(e, t, n) {
          if (n && typeof n != "boolean" && yt(e, t, n) && (t = n = i), n === i && (typeof t == "boolean" ? (n = t, t = i) : typeof e == "boolean" && (n = e, e = i)), e === i && t === i ? (e = 0, t = 1) : (e = dn(e), t === i ? (t = e, e = 0) : t = dn(t)), e > t) {
            var o = e;
            e = t, t = o;
          }
          if (n || e % 1 || t % 1) {
            var r = ss();
            return ht(e + r * (t - e + Vc("1e-" + ((r + "").length - 1))), t);
          }
          return kr(e, t);
        }
        var av = Zn(function(e, t, n) {
          return t = t.toLowerCase(), e + (n ? Bl(t) : t);
        });
        function Bl(e) {
          return Zr(De(e).toLowerCase());
        }
        function Ml(e) {
          return e = De(e), e && e.replace(rc, Gc).replace(xc, "");
        }
        function rv(e, t, n) {
          e = De(e), t = Rt(t);
          var o = e.length;
          n = n === i ? o : En(Ce(n), 0, o);
          var r = n;
          return n -= t.length, n >= 0 && e.slice(n, r) == t;
        }
        function iv(e) {
          return e = De(e), e && Mu.test(e) ? e.replace(vi, Yc) : e;
        }
        function sv(e) {
          return e = De(e), e && qu.test(e) ? e.replace(Ha, "\\$&") : e;
        }
        var lv = Zn(function(e, t, n) {
          return e + (n ? "-" : "") + t.toLowerCase();
        }), uv = Zn(function(e, t, n) {
          return e + (n ? " " : "") + t.toLowerCase();
        }), cv = Fs("toLowerCase");
        function dv(e, t, n) {
          e = De(e), t = Ce(t);
          var o = t ? Fn(e) : 0;
          if (!t || o >= t)
            return e;
          var r = (t - o) / 2;
          return ia(Go(r), n) + e + ia(Ko(r), n);
        }
        function fv(e, t, n) {
          e = De(e), t = Ce(t);
          var o = t ? Fn(e) : 0;
          return t && o < t ? e + ia(t - o, n) : e;
        }
        function gv(e, t, n) {
          e = De(e), t = Ce(t);
          var o = t ? Fn(e) : 0;
          return t && o < t ? ia(t - o, n) + e : e;
        }
        function pv(e, t, n) {
          return n || t == null ? t = 0 : t && (t = +t), yd(De(e).replace(qa, ""), t || 0);
        }
        function hv(e, t, n) {
          return (n ? yt(e, t, n) : t === i) ? t = 1 : t = Ce(t), Sr(De(e), t);
        }
        function vv() {
          var e = arguments, t = De(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var mv = Zn(function(e, t, n) {
          return e + (n ? "_" : "") + t.toLowerCase();
        });
        function _v(e, t, n) {
          return n && typeof n != "number" && yt(e, t, n) && (t = n = i), n = n === i ? je : n >>> 0, n ? (e = De(e), e && (typeof t == "string" || t != null && !Kr(t)) && (t = Rt(t), !t && Nn(e)) ? kn(Kt(e), 0, n) : e.split(t, n)) : [];
        }
        var bv = Zn(function(e, t, n) {
          return e + (n ? " " : "") + Zr(t);
        });
        function yv(e, t, n) {
          return e = De(e), n = n == null ? 0 : En(Ce(n), 0, e.length), t = Rt(t), e.slice(n, n + t.length) == t;
        }
        function wv(e, t, n) {
          var o = s.templateSettings;
          n && yt(e, t, n) && (t = i), e = De(e), t = _a({}, t, o, Zs);
          var r = _a({}, t.imports, o.imports, Zs), l = lt(r), f = ir(r, l), b, C, D = 0, W = t.interpolate || Ro, M = "__p += '", te = lr(
            (t.escape || Ro).source + "|" + W.source + "|" + (W === mi ? ju : Ro).source + "|" + (t.evaluate || Ro).source + "|$",
            "g"
          ), ue = "//# sourceURL=" + (We.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Tc + "]") + `
`;
          e.replace(te, function(me, Ee, Le, Pt, wt, Vt) {
            return Le || (Le = Pt), M += e.slice(D, Vt).replace(ic, Zc), Ee && (b = !0, M += `' +
__e(` + Ee + `) +
'`), wt && (C = !0, M += `';
` + wt + `;
__p += '`), Le && (M += `' +
((__t = (` + Le + `)) == null ? '' : __t) +
'`), D = Vt + me.length, me;
          }), M += `';
`;
          var ve = We.call(t, "variable") && t.variable;
          if (!ve)
            M = `with (obj) {
` + M + `
}
`;
          else if (Ju.test(ve))
            throw new we(_);
          M = (C ? M.replace(Ou, "") : M).replace(Du, "$1").replace(Wu, "$1;"), M = "function(" + (ve || "obj") + `) {
` + (ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (b ? ", __e = _.escape" : "") + (C ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + M + `return __p
}`;
          var Ae = Nl(function() {
            return Ve(l, ue + "return " + M).apply(i, f);
          });
          if (Ae.source = M, qr(Ae))
            throw Ae;
          return Ae;
        }
        function kv(e) {
          return De(e).toLowerCase();
        }
        function Sv(e) {
          return De(e).toUpperCase();
        }
        function xv(e, t, n) {
          if (e = De(e), e && (n || t === i))
            return Xi(e);
          if (!e || !(t = Rt(t)))
            return e;
          var o = Kt(e), r = Kt(t), l = Ji(o, r), f = Qi(o, r) + 1;
          return kn(o, l, f).join("");
        }
        function Cv(e, t, n) {
          if (e = De(e), e && (n || t === i))
            return e.slice(0, es(e) + 1);
          if (!e || !(t = Rt(t)))
            return e;
          var o = Kt(e), r = Qi(o, Kt(t)) + 1;
          return kn(o, 0, r).join("");
        }
        function $v(e, t, n) {
          if (e = De(e), e && (n || t === i))
            return e.replace(qa, "");
          if (!e || !(t = Rt(t)))
            return e;
          var o = Kt(e), r = Ji(o, Kt(t));
          return kn(o, r).join("");
        }
        function Av(e, t) {
          var n = _t, o = Ne;
          if (Ze(t)) {
            var r = "separator" in t ? t.separator : r;
            n = "length" in t ? Ce(t.length) : n, o = "omission" in t ? Rt(t.omission) : o;
          }
          e = De(e);
          var l = e.length;
          if (Nn(e)) {
            var f = Kt(e);
            l = f.length;
          }
          if (n >= l)
            return e;
          var b = n - Fn(o);
          if (b < 1)
            return o;
          var C = f ? kn(f, 0, b).join("") : e.slice(0, b);
          if (r === i)
            return C + o;
          if (f && (b += C.length - b), Kr(r)) {
            if (e.slice(b).search(r)) {
              var D, W = C;
              for (r.global || (r = lr(r.source, De(_i.exec(r)) + "g")), r.lastIndex = 0; D = r.exec(W); )
                var M = D.index;
              C = C.slice(0, M === i ? b : M);
            }
          } else if (e.indexOf(Rt(r), b) != b) {
            var te = C.lastIndexOf(r);
            te > -1 && (C = C.slice(0, te));
          }
          return C + o;
        }
        function Iv(e) {
          return e = De(e), e && Bu.test(e) ? e.replace(hi, nd) : e;
        }
        var Tv = Zn(function(e, t, n) {
          return e + (n ? " " : "") + t.toUpperCase();
        }), Zr = Fs("toUpperCase");
        function Ul(e, t, n) {
          return e = De(e), t = n ? i : t, t === i ? Jc(e) ? rd(e) : Fc(e) : e.match(t) || [];
        }
        var Nl = Te(function(e, t) {
          try {
            return Tt(e, i, t);
          } catch (n) {
            return qr(n) ? n : new we(n);
          }
        }), Ev = ln(function(e, t) {
          return Dt(t, function(n) {
            n = Qt(n), rn(e, n, zr(e[n], e));
          }), e;
        });
        function Rv(e) {
          var t = e == null ? 0 : e.length, n = he();
          return e = t ? Ke(e, function(o) {
            if (typeof o[1] != "function")
              throw new Wt(w);
            return [n(o[0]), o[1]];
          }) : [], Te(function(o) {
            for (var r = -1; ++r < t; ) {
              var l = e[r];
              if (Tt(l[0], this, o))
                return Tt(l[1], this, o);
            }
          });
        }
        function Lv(e) {
          return nf(Mt(e, g));
        }
        function Xr(e) {
          return function() {
            return e;
          };
        }
        function Pv(e, t) {
          return e == null || e !== e ? t : e;
        }
        var Vv = Hs(), Ov = Hs(!0);
        function At(e) {
          return e;
        }
        function Jr(e) {
          return ys(typeof e == "function" ? e : Mt(e, g));
        }
        function Dv(e) {
          return ks(Mt(e, g));
        }
        function Wv(e, t) {
          return Ss(e, Mt(t, g));
        }
        var Bv = Te(function(e, t) {
          return function(n) {
            return mo(n, e, t);
          };
        }), Mv = Te(function(e, t) {
          return function(n) {
            return mo(e, n, t);
          };
        });
        function Qr(e, t, n) {
          var o = lt(t), r = jo(t, o);
          n == null && !(Ze(t) && (r.length || !o.length)) && (n = t, t = e, e = this, r = jo(t, lt(t)));
          var l = !(Ze(n) && "chain" in n) || !!n.chain, f = cn(e);
          return Dt(r, function(b) {
            var C = t[b];
            e[b] = C, f && (e.prototype[b] = function() {
              var D = this.__chain__;
              if (l || D) {
                var W = e(this.__wrapped__), M = W.__actions__ = xt(this.__actions__);
                return M.push({ func: C, args: arguments, thisArg: e }), W.__chain__ = D, W;
              }
              return C.apply(e, vn([this.value()], arguments));
            });
          }), e;
        }
        function Uv() {
          return ct._ === this && (ct._ = dd), this;
        }
        function jr() {
        }
        function Nv(e) {
          return e = Ce(e), Te(function(t) {
            return xs(t, e);
          });
        }
        var Fv = Er(Ke), zv = Er(qi), Hv = Er(tr);
        function Fl(e) {
          return Wr(e) ? nr(Qt(e)) : yf(e);
        }
        function qv(e) {
          return function(t) {
            return e == null ? i : Rn(e, t);
          };
        }
        var Kv = Ks(), Gv = Ks(!0);
        function ei() {
          return [];
        }
        function ti() {
          return !1;
        }
        function Yv() {
          return {};
        }
        function Zv() {
          return "";
        }
        function Xv() {
          return !0;
        }
        function Jv(e, t) {
          if (e = Ce(e), e < 1 || e > ye)
            return [];
          var n = je, o = ht(e, je);
          t = he(t), e -= je;
          for (var r = rr(o, t); ++n < e; )
            t(n);
          return r;
        }
        function Qv(e) {
          return Se(e) ? Ke(e, Qt) : Lt(e) ? [e] : xt(ll(De(e)));
        }
        function jv(e) {
          var t = ++ud;
          return De(e) + t;
        }
        var em = ra(function(e, t) {
          return e + t;
        }, 0), tm = Rr("ceil"), nm = ra(function(e, t) {
          return e / t;
        }, 1), om = Rr("floor");
        function am(e) {
          return e && e.length ? Qo(e, At, vr) : i;
        }
        function rm(e, t) {
          return e && e.length ? Qo(e, he(t, 2), vr) : i;
        }
        function im(e) {
          return Yi(e, At);
        }
        function sm(e, t) {
          return Yi(e, he(t, 2));
        }
        function lm(e) {
          return e && e.length ? Qo(e, At, yr) : i;
        }
        function um(e, t) {
          return e && e.length ? Qo(e, he(t, 2), yr) : i;
        }
        var cm = ra(function(e, t) {
          return e * t;
        }, 1), dm = Rr("round"), fm = ra(function(e, t) {
          return e - t;
        }, 0);
        function gm(e) {
          return e && e.length ? ar(e, At) : 0;
        }
        function pm(e, t) {
          return e && e.length ? ar(e, he(t, 2)) : 0;
        }
        return s.after = Dp, s.ary = bl, s.assign = Sh, s.assignIn = Pl, s.assignInWith = _a, s.assignWith = xh, s.at = Ch, s.before = yl, s.bind = zr, s.bindAll = Ev, s.bindKey = wl, s.castArray = Yp, s.chain = vl, s.chunk = og, s.compact = ag, s.concat = rg, s.cond = Rv, s.conforms = Lv, s.constant = Xr, s.countBy = gp, s.create = $h, s.curry = kl, s.curryRight = Sl, s.debounce = xl, s.defaults = Ah, s.defaultsDeep = Ih, s.defer = Wp, s.delay = Bp, s.difference = ig, s.differenceBy = sg, s.differenceWith = lg, s.drop = ug, s.dropRight = cg, s.dropRightWhile = dg, s.dropWhile = fg, s.fill = gg, s.filter = hp, s.flatMap = _p, s.flatMapDeep = bp, s.flatMapDepth = yp, s.flatten = fl, s.flattenDeep = pg, s.flattenDepth = hg, s.flip = Mp, s.flow = Vv, s.flowRight = Ov, s.fromPairs = vg, s.functions = Oh, s.functionsIn = Dh, s.groupBy = wp, s.initial = _g, s.intersection = bg, s.intersectionBy = yg, s.intersectionWith = wg, s.invert = Bh, s.invertBy = Mh, s.invokeMap = Sp, s.iteratee = Jr, s.keyBy = xp, s.keys = lt, s.keysIn = $t, s.map = fa, s.mapKeys = Nh, s.mapValues = Fh, s.matches = Dv, s.matchesProperty = Wv, s.memoize = pa, s.merge = zh, s.mergeWith = Vl, s.method = Bv, s.methodOf = Mv, s.mixin = Qr, s.negate = ha, s.nthArg = Nv, s.omit = Hh, s.omitBy = qh, s.once = Up, s.orderBy = Cp, s.over = Fv, s.overArgs = Np, s.overEvery = zv, s.overSome = Hv, s.partial = Hr, s.partialRight = Cl, s.partition = $p, s.pick = Kh, s.pickBy = Ol, s.property = Fl, s.propertyOf = qv, s.pull = Cg, s.pullAll = pl, s.pullAllBy = $g, s.pullAllWith = Ag, s.pullAt = Ig, s.range = Kv, s.rangeRight = Gv, s.rearg = Fp, s.reject = Tp, s.remove = Tg, s.rest = zp, s.reverse = Nr, s.sampleSize = Rp, s.set = Yh, s.setWith = Zh, s.shuffle = Lp, s.slice = Eg, s.sortBy = Op, s.sortedUniq = Wg, s.sortedUniqBy = Bg, s.split = _v, s.spread = Hp, s.tail = Mg, s.take = Ug, s.takeRight = Ng, s.takeRightWhile = Fg, s.takeWhile = zg, s.tap = ap, s.throttle = qp, s.thru = da, s.toArray = El, s.toPairs = Dl, s.toPairsIn = Wl, s.toPath = Qv, s.toPlainObject = Ll, s.transform = Xh, s.unary = Kp, s.union = Hg, s.unionBy = qg, s.unionWith = Kg, s.uniq = Gg, s.uniqBy = Yg, s.uniqWith = Zg, s.unset = Jh, s.unzip = Fr, s.unzipWith = hl, s.update = Qh, s.updateWith = jh, s.values = Qn, s.valuesIn = ev, s.without = Xg, s.words = Ul, s.wrap = Gp, s.xor = Jg, s.xorBy = Qg, s.xorWith = jg, s.zip = ep, s.zipObject = tp, s.zipObjectDeep = np, s.zipWith = op, s.entries = Dl, s.entriesIn = Wl, s.extend = Pl, s.extendWith = _a, Qr(s, s), s.add = em, s.attempt = Nl, s.camelCase = av, s.capitalize = Bl, s.ceil = tm, s.clamp = tv, s.clone = Zp, s.cloneDeep = Jp, s.cloneDeepWith = Qp, s.cloneWith = Xp, s.conformsTo = jp, s.deburr = Ml, s.defaultTo = Pv, s.divide = nm, s.endsWith = rv, s.eq = Yt, s.escape = iv, s.escapeRegExp = sv, s.every = pp, s.find = vp, s.findIndex = cl, s.findKey = Th, s.findLast = mp, s.findLastIndex = dl, s.findLastKey = Eh, s.floor = om, s.forEach = ml, s.forEachRight = _l, s.forIn = Rh, s.forInRight = Lh, s.forOwn = Ph, s.forOwnRight = Vh, s.get = Gr, s.gt = eh, s.gte = th, s.has = Wh, s.hasIn = Yr, s.head = gl, s.identity = At, s.includes = kp, s.indexOf = mg, s.inRange = nv, s.invoke = Uh, s.isArguments = Vn, s.isArray = Se, s.isArrayBuffer = nh, s.isArrayLike = Ct, s.isArrayLikeObject = et, s.isBoolean = oh, s.isBuffer = Sn, s.isDate = ah, s.isElement = rh, s.isEmpty = ih, s.isEqual = sh, s.isEqualWith = lh, s.isError = qr, s.isFinite = uh, s.isFunction = cn, s.isInteger = $l, s.isLength = va, s.isMap = Al, s.isMatch = ch, s.isMatchWith = dh, s.isNaN = fh, s.isNative = gh, s.isNil = hh, s.isNull = ph, s.isNumber = Il, s.isObject = Ze, s.isObjectLike = Qe, s.isPlainObject = So, s.isRegExp = Kr, s.isSafeInteger = vh, s.isSet = Tl, s.isString = ma, s.isSymbol = Lt, s.isTypedArray = Jn, s.isUndefined = mh, s.isWeakMap = _h, s.isWeakSet = bh, s.join = kg, s.kebabCase = lv, s.last = Nt, s.lastIndexOf = Sg, s.lowerCase = uv, s.lowerFirst = cv, s.lt = yh, s.lte = wh, s.max = am, s.maxBy = rm, s.mean = im, s.meanBy = sm, s.min = lm, s.minBy = um, s.stubArray = ei, s.stubFalse = ti, s.stubObject = Yv, s.stubString = Zv, s.stubTrue = Xv, s.multiply = cm, s.nth = xg, s.noConflict = Uv, s.noop = jr, s.now = ga, s.pad = dv, s.padEnd = fv, s.padStart = gv, s.parseInt = pv, s.random = ov, s.reduce = Ap, s.reduceRight = Ip, s.repeat = hv, s.replace = vv, s.result = Gh, s.round = dm, s.runInContext = x, s.sample = Ep, s.size = Pp, s.snakeCase = mv, s.some = Vp, s.sortedIndex = Rg, s.sortedIndexBy = Lg, s.sortedIndexOf = Pg, s.sortedLastIndex = Vg, s.sortedLastIndexBy = Og, s.sortedLastIndexOf = Dg, s.startCase = bv, s.startsWith = yv, s.subtract = fm, s.sum = gm, s.sumBy = pm, s.template = wv, s.times = Jv, s.toFinite = dn, s.toInteger = Ce, s.toLength = Rl, s.toLower = kv, s.toNumber = Ft, s.toSafeInteger = kh, s.toString = De, s.toUpper = Sv, s.trim = xv, s.trimEnd = Cv, s.trimStart = $v, s.truncate = Av, s.unescape = Iv, s.uniqueId = jv, s.upperCase = Tv, s.upperFirst = Zr, s.each = ml, s.eachRight = _l, s.first = gl, Qr(s, (function() {
          var e = {};
          return Xt(s, function(t, n) {
            We.call(s.prototype, n) || (e[n] = t);
          }), e;
        })(), { chain: !1 }), s.VERSION = p, Dt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          s[e].placeholder = s;
        }), Dt(["drop", "take"], function(e, t) {
          Re.prototype[e] = function(n) {
            n = n === i ? 1 : rt(Ce(n), 0);
            var o = this.__filtered__ && !t ? new Re(this) : this.clone();
            return o.__filtered__ ? o.__takeCount__ = ht(n, o.__takeCount__) : o.__views__.push({
              size: ht(n, je),
              type: e + (o.__dir__ < 0 ? "Right" : "")
            }), o;
          }, Re.prototype[e + "Right"] = function(n) {
            return this.reverse()[e](n).reverse();
          };
        }), Dt(["filter", "map", "takeWhile"], function(e, t) {
          var n = t + 1, o = n == pe || n == xe;
          Re.prototype[e] = function(r) {
            var l = this.clone();
            return l.__iteratees__.push({
              iteratee: he(r, 3),
              type: n
            }), l.__filtered__ = l.__filtered__ || o, l;
          };
        }), Dt(["head", "last"], function(e, t) {
          var n = "take" + (t ? "Right" : "");
          Re.prototype[e] = function() {
            return this[n](1).value()[0];
          };
        }), Dt(["initial", "tail"], function(e, t) {
          var n = "drop" + (t ? "" : "Right");
          Re.prototype[e] = function() {
            return this.__filtered__ ? new Re(this) : this[n](1);
          };
        }), Re.prototype.compact = function() {
          return this.filter(At);
        }, Re.prototype.find = function(e) {
          return this.filter(e).head();
        }, Re.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, Re.prototype.invokeMap = Te(function(e, t) {
          return typeof e == "function" ? new Re(this) : this.map(function(n) {
            return mo(n, e, t);
          });
        }), Re.prototype.reject = function(e) {
          return this.filter(ha(he(e)));
        }, Re.prototype.slice = function(e, t) {
          e = Ce(e);
          var n = this;
          return n.__filtered__ && (e > 0 || t < 0) ? new Re(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== i && (t = Ce(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
        }, Re.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, Re.prototype.toArray = function() {
          return this.take(je);
        }, Xt(Re.prototype, function(e, t) {
          var n = /^(?:filter|find|map|reject)|While$/.test(t), o = /^(?:head|last)$/.test(t), r = s[o ? "take" + (t == "last" ? "Right" : "") : t], l = o || /^find/.test(t);
          r && (s.prototype[t] = function() {
            var f = this.__wrapped__, b = o ? [1] : arguments, C = f instanceof Re, D = b[0], W = C || Se(f), M = function(Ee) {
              var Le = r.apply(s, vn([Ee], b));
              return o && te ? Le[0] : Le;
            };
            W && n && typeof D == "function" && D.length != 1 && (C = W = !1);
            var te = this.__chain__, ue = !!this.__actions__.length, ve = l && !te, Ae = C && !ue;
            if (!l && W) {
              f = Ae ? f : new Re(this);
              var me = e.apply(f, b);
              return me.__actions__.push({ func: da, args: [M], thisArg: i }), new Bt(me, te);
            }
            return ve && Ae ? e.apply(this, b) : (me = this.thru(M), ve ? o ? me.value()[0] : me.value() : me);
          });
        }), Dt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = Wo[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
          s.prototype[e] = function() {
            var r = arguments;
            if (o && !this.__chain__) {
              var l = this.value();
              return t.apply(Se(l) ? l : [], r);
            }
            return this[n](function(f) {
              return t.apply(Se(f) ? f : [], r);
            });
          };
        }), Xt(Re.prototype, function(e, t) {
          var n = s[t];
          if (n) {
            var o = n.name + "";
            We.call(Kn, o) || (Kn[o] = []), Kn[o].push({ name: t, func: n });
          }
        }), Kn[aa(i, N).name] = [{
          name: "wrapper",
          func: i
        }], Re.prototype.clone = Ad, Re.prototype.reverse = Id, Re.prototype.value = Td, s.prototype.at = rp, s.prototype.chain = ip, s.prototype.commit = sp, s.prototype.next = lp, s.prototype.plant = cp, s.prototype.reverse = dp, s.prototype.toJSON = s.prototype.valueOf = s.prototype.value = fp, s.prototype.first = s.prototype.head, uo && (s.prototype[uo] = up), s;
      }), zn = id();
      $n ? (($n.exports = zn)._ = zn, Ja._ = zn) : ct._ = zn;
    }).call(rw);
  })(Co, Co.exports)), Co.exports;
}
var sw = iw();
const lw = { class: "editor" }, uw = { class: "editor__fields" }, cw = { class: "editor__actions" }, dw = {
  key: 1,
  class: "editor__preview"
}, fw = /* @__PURE__ */ Ge({
  __name: "DatasourceEditor",
  props: {
    itemId: {},
    view: { default: "settings" }
  },
  emits: ["close"],
  setup(h, { emit: m }) {
    const i = h, p = J({}), u = $e(Pa), S = $e(Ht), w = mt(S, (N) => N.connections), _ = mt(S, (N) => N.datasources), k = z(
      () => u.getDatasourceIdentifiers(p.value.type)?.icon ?? "database"
    ), A = z(() => {
      const N = /* @__PURE__ */ new Set();
      for (const E of _.value)
        for (const P of E.tags ?? []) N.add(P);
      return [...N].sort();
    }), d = z(() => u.registeredDatasources);
    jt(() => {
      const N = u.getDatasourceModel(i.itemId);
      p.value = N ? {
        uid: N.uid,
        name: N.name,
        type: N.type,
        icon: N.icon ?? "",
        tags: [...N.tags ?? []],
        config: sw.cloneDeep(N.config ?? {})
      } : { tags: [] };
    });
    const g = () => {
      const N = u.getDatasourceModel(i.itemId);
      if (N) {
        N.name = p.value.name, N.type = p.value.type, N.icon = p.value.icon?.trim() || void 0, N.tags.clear();
        for (const E of p.value.tags ?? []) N.tags.add(E);
        N.config = p.value.config, N.connection = w.value.find(
          (E) => E.uid === p.value.config?.connection
        ), u.saveDatasource(N);
      }
      q("close");
    }, I = z(() => {
      const N = u.getDatasourceIdentifiers(p.value.type);
      return N ? u.resolveIdentifier(N.Preview) : null;
    }), R = z(() => {
      const N = u.getDatasourceIdentifiers(p.value.type);
      return N ? u.resolveIdentifier(N.Settings) : null;
    }), K = (N) => {
      p.value.config = N;
    }, q = m, { t: B } = Ye("shell");
    return (N, E) => (v(), $("div", lw, [
      h.view === "settings" ? (v(), $(_e, { key: 0 }, [
        c("div", uw, [
          L(a(st), {
            modelValue: p.value.uid,
            "onUpdate:modelValue": E[0] || (E[0] = (P) => p.value.uid = P),
            label: "UID",
            readonly: ""
          }, null, 8, ["modelValue"]),
          L(a(st), {
            modelValue: p.value.name,
            "onUpdate:modelValue": E[1] || (E[1] = (P) => p.value.name = P),
            label: a(B)("Editor.name")
          }, null, 8, ["modelValue", "label"]),
          L(a(zt), {
            modelValue: p.value.type,
            "onUpdate:modelValue": E[2] || (E[2] = (P) => p.value.type = P),
            label: a(B)("Editor.type"),
            options: d.value
          }, null, 8, ["modelValue", "label", "options"]),
          L(a(Ta), {
            modelValue: p.value.icon,
            "onUpdate:modelValue": E[3] || (E[3] = (P) => p.value.icon = P),
            label: a(B)("Editor.icon"),
            fallback: k.value,
            hint: a(B)("Editor.iconHint")
          }, null, 8, ["modelValue", "label", "fallback", "hint"]),
          L(Va, {
            modelValue: p.value.tags,
            "onUpdate:modelValue": E[4] || (E[4] = (P) => p.value.tags = P),
            label: a(B)("Editor.tags"),
            hint: a(B)("Datasource.tagsHint"),
            known: A.value
          }, null, 8, ["modelValue", "label", "hint", "known"]),
          (v(), Ie(en(R.value), {
            config: p.value.config,
            connections: a(w),
            dataSources: a(_)
          }, null, 8, ["config", "connections", "dataSources"]))
        ]),
        c("div", cw, [
          L(a(ke), {
            intent: "quiet",
            onClick: E[5] || (E[5] = (P) => N.$emit("close"))
          }, {
            default: ae(() => [
              de(y(a(B)("common:Action.close")), 1)
            ]),
            _: 1
          }),
          L(a(ke), {
            intent: "primary",
            onClick: g
          }, {
            default: ae(() => [
              de(y(a(B)("common:Action.save")), 1)
            ]),
            _: 1
          })
        ])
      ], 64)) : (v(), $("div", dw, [
        (v(), Ie(en(I.value), {
          "data-source": p.value,
          key: p.value.uid,
          onUpdateConfig: K
        }, null, 40, ["data-source"]))
      ]))
    ]));
  }
}), gw = /* @__PURE__ */ Xe(fw, [["__scopeId", "data-v-3c4e755c"]]), pw = { class: "editor" }, hw = { class: "editor__fields" }, vw = { class: "editor__actions" }, mw = /* @__PURE__ */ Ge({
  __name: "ConnectionEditor",
  props: {
    itemId: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(h, { emit: m }) {
    const i = h, p = m, { t: u } = Ye("shell"), S = J({}), w = $e(La), _ = z(() => w.registeredConnections);
    jt(() => {
      const I = w.getConnectionModel(i.itemId);
      S.value = I ? {
        uid: I.uid,
        name: I.name,
        type: I.type,
        icon: I.icon ?? "",
        tags: [...I.tags ?? []],
        config: JSON.parse(JSON.stringify(I.config ?? {}))
      } : { tags: [] };
    });
    const k = z(
      () => w.getConnectionIdentifiers(S.value.type)?.icon ?? "link"
    ), A = z(() => {
      const I = /* @__PURE__ */ new Set();
      for (const R of w.getConnections())
        for (const K of R.tags ?? []) I.add(K);
      return [...I].sort();
    }), d = z(() => {
      const I = w.getConnectionIdentifiers(S.value.type);
      return I ? w.resolveIdentifier(I.Settings) : null;
    }), g = () => {
      const I = w.getConnectionModel(i.itemId);
      if (I) {
        I.name = S.value.name, I.type = S.value.type, I.icon = S.value.icon?.trim() || void 0, I.tags.clear();
        for (const R of S.value.tags ?? []) I.tags.add(R);
        I.config = S.value.config, w.saveConnection(I);
      }
      p("close");
    };
    return (I, R) => (v(), $("div", pw, [
      c("div", hw, [
        L(a(st), {
          modelValue: S.value.uid,
          "onUpdate:modelValue": R[0] || (R[0] = (K) => S.value.uid = K),
          label: "UID",
          readonly: ""
        }, null, 8, ["modelValue"]),
        L(a(st), {
          modelValue: S.value.name,
          "onUpdate:modelValue": R[1] || (R[1] = (K) => S.value.name = K),
          label: a(u)("Editor.name")
        }, null, 8, ["modelValue", "label"]),
        L(a(zt), {
          modelValue: S.value.type,
          "onUpdate:modelValue": R[2] || (R[2] = (K) => S.value.type = K),
          label: a(u)("Editor.type"),
          options: _.value
        }, null, 8, ["modelValue", "label", "options"]),
        L(a(Ta), {
          modelValue: S.value.icon,
          "onUpdate:modelValue": R[3] || (R[3] = (K) => S.value.icon = K),
          label: a(u)("Editor.icon"),
          fallback: k.value,
          hint: a(u)("Editor.iconHint")
        }, null, 8, ["modelValue", "label", "fallback", "hint"]),
        L(Va, {
          modelValue: S.value.tags,
          "onUpdate:modelValue": R[4] || (R[4] = (K) => S.value.tags = K),
          label: a(u)("Editor.tags"),
          hint: a(u)("Connection.tagsHint"),
          known: A.value
        }, null, 8, ["modelValue", "label", "hint", "known"]),
        (v(), Ie(en(d.value), {
          config: S.value.config
        }, null, 8, ["config"]))
      ]),
      c("div", vw, [
        L(a(ke), {
          intent: "quiet",
          onClick: R[5] || (R[5] = (K) => I.$emit("close"))
        }, {
          default: ae(() => [
            de(y(a(u)("common:Action.close")), 1)
          ]),
          _: 1
        }),
        L(a(ke), {
          intent: "primary",
          onClick: g
        }, {
          default: ae(() => [
            de(y(a(u)("common:Action.save")), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
}), _w = /* @__PURE__ */ Xe(mw, [["__scopeId", "data-v-688945ce"]]), bw = { class: "data-page" }, yw = { class: "data-page__tree" }, ww = { class: "data-page__detail" }, kw = {
  key: 0,
  class: "data-page__nothing"
}, Sw = { class: "detail__head" }, xw = { class: "detail__what" }, Cw = { class: "detail__name" }, $w = {
  key: 0,
  class: "detail__sub"
}, Aw = {
  key: 0,
  class: "detail__usage"
}, Iw = { class: "detail__body" }, Tw = /* @__PURE__ */ Ge({
  __name: "ConnectionsAndData",
  setup(h) {
    const m = $e(Ht), i = mt(m, (q) => q.connections), p = mt(m, (q) => q.datasources), { usageOf: u, usageLabel: S } = Tu(), { t: w } = Ye("shell"), _ = J(void 0), k = J("preview"), A = $e("endpointfinder", null), d = () => A?.(), g = iu(() => {
      const q = _.value;
      if (q)
        return q.type === "Connection" ? i.value.find((B) => B.uid === q.itemId) : p.value.find((B) => B.uid === q.itemId);
    }), I = z(() => {
      const q = g.value;
      return q ? _.value?.type === "Connection" ? q.type ?? "" : [q.type, q.connection?.name].filter(Boolean).join(" · ") : "";
    }), R = z(() => _.value?.type !== "DataSource" || !_.value.itemId ? "" : S(u(_.value.itemId))), K = z(
      () => _.value?.type === "DataSource" ? [
        { id: "preview", label: w("Data.preview") },
        { id: "settings", label: w("WidgetSettings.settings") }
      ] : [{ id: "settings", label: w("WidgetSettings.settings") }]
    );
    return it(_, (q) => {
      k.value = q?.type === "DataSource" ? "preview" : "settings";
    }), (q, B) => (v(), $("div", bw, [
      c("aside", yw, [
        L(aw, {
          modelValue: _.value,
          "onUpdate:modelValue": B[0] || (B[0] = (N) => _.value = N),
          onFindEndpoints: d,
          onView: B[1] || (B[1] = (N) => k.value = N)
        }, null, 8, ["modelValue"])
      ]),
      c("section", ww, [
        _.value ? (v(), $(_e, { key: 1 }, [
          c("header", Sw, [
            c("div", xw, [
              c("h1", Cw, y(a(g)?.name ?? _.value.itemId), 1),
              I.value ? (v(), $("span", $w, y(I.value), 1)) : ne("", !0)
            ]),
            R.value ? (v(), $("span", Aw, y(a(w)("Data.usedIn", { usage: R.value })), 1)) : ne("", !0)
          ]),
          L(a(Vm), {
            modelValue: k.value,
            "onUpdate:modelValue": B[2] || (B[2] = (N) => k.value = N),
            tabs: K.value,
            label: a(w)("Data.view")
          }, null, 8, ["modelValue", "tabs", "label"]),
          c("div", Iw, [
            _.value.type === "Connection" ? (v(), Ie(_w, {
              key: _.value.itemId,
              "item-id": _.value.itemId,
              onClose: B[3] || (B[3] = (N) => _.value = void 0)
            }, null, 8, ["item-id"])) : (v(), Ie(gw, {
              key: `${_.value.itemId}-${k.value}`,
              "item-id": _.value.itemId,
              view: k.value === "preview" ? "preview" : "settings",
              onClose: B[4] || (B[4] = (N) => _.value = void 0)
            }, null, 8, ["item-id", "view"]))
          ])
        ], 64)) : (v(), $("p", kw, y(a(w)("Data.pick")), 1))
      ])
    ]));
  }
}), Ew = /* @__PURE__ */ Xe(Tw, [["__scopeId", "data-v-58df8ef3"]]), Rw = { class: "pages" }, Lw = { class: "pages__panel" }, Pw = { class: "pages__bar" }, Vw = { class: "pages__title" }, Ow = {
  key: 0,
  class: "pages__count"
}, Dw = {
  key: 0,
  class: "pages__of"
}, Ww = { class: "pages__tools" }, Bw = ["placeholder", "aria-label"], Mw = { class: "pages__body" }, Uw = { class: "pages__grid" }, Nw = ["aria-label", "onClick", "onKeydown"], Fw = { class: "page__body" }, zw = { class: "page__name" }, Hw = { class: "page__meta" }, qw = {
  key: 0,
  class: "page__usage"
}, Kw = {
  key: 1,
  class: "page__kinds"
}, Gw = {
  key: 0,
  class: "page__kind"
}, Yw = ["aria-label", "onClick"], Zw = { class: "page__name" }, Xw = { class: "page__meta" }, Jw = {
  key: 0,
  class: "pages__nomatch"
}, Qw = /* @__PURE__ */ Ge({
  __name: "BoardPages",
  setup(h) {
    const m = Ea(), { t: i } = Ye("shell"), p = J(""), { usageOf: u, byUsage: S, lastOpenedLabel: w } = fi(), _ = $e(Ht), k = $e(ao), A = mt(_, (B) => B.board?.pages), d = z(() => (A.value, _.board)), g = z(() => (A.value, k ? k.getAllPageIds().slice().sort(S).map(
      (B) => pi(
        B,
        k.getPage(B),
        k.getPage(B)?.layout?.toArray() ?? [],
        k.getPage(B)?.widgets?.toArray() ?? []
      )
    ) : [])), I = z(() => {
      const B = p.value.trim().toLowerCase();
      return B ? g.value.filter(
        (N) => N.name.toLowerCase().includes(B) || N.description.toLowerCase().includes(B) || N.kinds.some((E) => E.toLowerCase().includes(B))
      ) : g.value;
    });
    function R(B) {
      m.push(`/page/${B}`);
    }
    function K(B) {
      m.push(`/page/${B}/edit`);
    }
    function q() {
      if (!k) return;
      const B = di();
      k.registerPage({
        id: B,
        name: i("Page.newName"),
        description: "",
        icon: "",
        visibleInNavigation: !0,
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), m.push(`/page/${B}/edit`);
    }
    return (B, N) => (v(), $("div", Rw, [
      c("div", Lw, [
        c("header", Pw, [
          c("h1", Vw, [
            de(y(a(i)("Pages.title")) + " ", 1),
            g.value.length ? (v(), $("span", Ow, y(g.value.length), 1)) : ne("", !0)
          ]),
          d.value?.name ? (v(), $("p", Dw, y(a(i)("Pages.of", { board: d.value.name })), 1)) : ne("", !0),
          c("div", Ww, [
            no(c("input", {
              "onUpdate:modelValue": N[0] || (N[0] = (E) => p.value = E),
              class: "pages__search",
              type: "search",
              placeholder: a(i)("Pages.filter"),
              "aria-label": a(i)("Pages.filter")
            }, null, 8, Bw), [
              [ri, p.value]
            ]),
            L(a(ke), {
              intent: "primary",
              size: "sm",
              onClick: q
            }, {
              default: ae(() => [
                de(y(a(i)("Page.newName")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        c("div", Mw, [
          c("div", Uw, [
            (v(!0), $(_e, null, Be(I.value, (E) => (v(), $("article", {
              key: E.id,
              class: "page",
              tabindex: "0",
              role: "button",
              "aria-label": a(i)("Pages.open", { name: E.name }),
              onClick: (P) => R(E.id),
              onKeydown: [
                oo((P) => R(E.id), ["enter"]),
                oo(ut((P) => R(E.id), ["prevent"]), ["space"])
              ]
            }, [
              L(gi, {
                items: E.items,
                "type-by-id": E.typeById
              }, null, 8, ["items", "type-by-id"]),
              c("div", Fw, [
                c("h2", zw, y(E.name), 1),
                c("p", Hw, [
                  de(y(a(i)("Storage.widgets", { count: E.widgetCount })) + " ", 1),
                  E.sourceCount ? (v(), $(_e, { key: 0 }, [
                    de(" · " + y(a(i)("Storage.sources", { count: E.sourceCount })), 1)
                  ], 64)) : ne("", !0)
                ]),
                a(u)(E.id) ? (v(), $("p", qw, y(a(i)("Pages.usage", { count: a(u)(E.id)?.count ?? 0, last: a(w)(E.id) })), 1)) : ne("", !0),
                E.kinds.length ? (v(), $("ul", Kw, [
                  (v(!0), $(_e, null, Be(E.kinds.slice(0, 3), (P) => (v(), $("li", {
                    key: P,
                    class: "page__kind"
                  }, y(P), 1))), 128)),
                  E.kinds.length > 3 ? (v(), $("li", Gw, " +" + y(E.kinds.length - 3), 1)) : ne("", !0)
                ])) : ne("", !0)
              ]),
              c("button", {
                class: "page__edit",
                type: "button",
                "aria-label": a(i)("Pages.edit", { name: E.name }),
                onClick: ut((P) => K(E.id), ["stop"])
              }, y(a(i)("Header.edit")), 9, Yw)
            ], 40, Nw))), 128)),
            c("button", {
              class: "page page--new",
              type: "button",
              onClick: q
            }, [
              N[1] || (N[1] = c("span", {
                class: "page__plus",
                "aria-hidden": "true"
              }, "+", -1)),
              c("span", Zw, y(a(i)("Page.newName")), 1),
              c("span", Xw, y(a(i)("Pages.startEmpty")), 1)
            ]),
            g.value.length && I.value.length === 0 ? (v(), $("p", Jw, y(a(i)("Pages.noMatch", { query: p.value })), 1)) : ne("", !0)
          ])
        ])
      ])
    ]));
  }
}), jw = /* @__PURE__ */ Xe(Qw, [["__scopeId", "data-v-46b422e5"]]), e0 = { class: "add_widget_window" }, t0 = { class: "add_widget_window__scroll" }, n0 = { class: "widgets_grid-icon" }, o0 = ["src"], a0 = { class: "widgets_grid-name" }, r0 = /* @__PURE__ */ Ge({
  __name: "AddWidgetWindow",
  setup(h) {
    const m = J(""), i = J(""), p = mt($e(Ht), (d) => d.datasources), u = (d) => {
      const g = document.createElement("div");
      document.body.appendChild(g), d.dataTransfer?.setDragImage(g, 0, 0), setTimeout(() => {
        document.body.removeChild(g);
      }, 0);
    }, S = $e(gu), { t: w } = Ye("shell"), _ = Object.entries(S.getAllWidgets()).map(([d, g]) => ({ type: d, name: g.name, nameKey: g.nameKey, icon: g.icon })), k = z(() => _);
    z(() => [
      "None",
      ...p.value.map((d) => d.type).filter((d, g, I) => g === I.indexOf(d))
    ]);
    const A = z(() => p.value.filter((d) => d.type === i.value).map((d) => ({ uid: d.uid })));
    return it(i, (d) => {
      !d || d === "None" ? m.value = "" : A.value.map((I) => I.uid).includes(m.value) || (m.value = "");
    }), (d, g) => (v(), $("div", e0, [
      c("div", t0, [
        L(a(e_), {
          class: "widgets_grid",
          list: k.value,
          group: { name: "widgets", pull: "clone", put: !1 },
          itemKey: "type"
        }, {
          item: ae(({ element: I }) => [
            c("div", {
              class: "widgets_grid-item",
              draggable: "true",
              onDragstart: g[0] || (g[0] = (R) => u(R))
            }, [
              c("span", n0, [
                c("img", {
                  src: I.icon,
                  alt: ""
                }, null, 8, o0)
              ]),
              c("span", a0, y(I.nameKey ? a(w)(I.nameKey, { defaultValue: I.name }) : I.name), 1)
            ], 32)
          ]),
          _: 1
        }, 8, ["list"])
      ])
    ]));
  }
}), i0 = /* @__PURE__ */ Xe(r0, [["__scopeId", "data-v-3e25af78"]]), s0 = ["aria-label"], l0 = { class: "stage" }, u0 = { class: "stage__head" }, c0 = { class: "stage__name" }, d0 = { class: "stage__uid" }, f0 = ["aria-label"], g0 = { class: "stage__bar" }, p0 = { class: "stage__body" }, h0 = ["aria-label"], v0 = ["aria-label"], m0 = ["aria-selected"], _0 = { class: "tab__n" }, b0 = ["aria-selected"], y0 = ["aria-selected", "onClick"], w0 = ["aria-selected"], k0 = ["aria-selected"], S0 = { class: "tab__n" }, x0 = ["aria-selected"], C0 = { class: "tab__n" }, $0 = {
  key: 0,
  class: "fields"
}, A0 = { class: "note" }, I0 = { class: "rest__note" }, T0 = {
  key: 0,
  class: "bound"
}, E0 = { class: "bound__name" }, R0 = { class: "bound__var" }, L0 = {
  key: 1,
  class: "note"
}, P0 = { class: "foot" }, V0 = { class: "foot__hint" }, O0 = ":scope > [data-section], :scope > .va-collapse", D0 = /* @__PURE__ */ Ge({
  __name: "WidgetSettingsOverlay",
  props: /* @__PURE__ */ tn({
    boardSize: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ tn(["close"], ["update:modelValue"]),
  setup(h, { emit: m }) {
    const i = m, p = xn(h, "modelValue"), u = h, S = mt($e(Ht), (V) => V.datasources), _ = $e(gu).getAllWidgets(), { t: k, revision: A } = Ye("shell"), d = z(() => {
      const V = p.value?.type, U = V ? _[V] : void 0;
      return U ? U.nameKey ? k(U.nameKey, { defaultValue: U.name }) : U.name : V ?? k("WidgetSettings.widget");
    }), g = J("look"), I = z(() => {
      const V = p.value?.type;
      return V ? _[V]?.settingsForm : void 0;
    }), R = z(
      () => !!(p.value?.type && _[p.value.type]?.settingsComponent)
    ), K = z(() => !!I.value && R.value), q = z(() => !!I.value || R.value);
    it(q, (V) => {
      !V && g.value === "look" && (g.value = "data");
    }, { immediate: !0 });
    const B = J(), N = J([]), E = J(0);
    function P(V) {
      return V ? [...V.querySelectorAll(O0)] : [];
    }
    function Y() {
      return P(B.value);
    }
    function ee(V) {
      const U = V.dataset.section;
      if (U) return U;
      const ce = V.querySelector(".va-collapse__header-wrapper");
      return ce ? [...ce.querySelectorAll("*")].filter((Oe) => !Oe.classList.contains("va-icon") && Oe.children.length === 0).map((Oe) => (Oe.textContent ?? "").trim()).filter((Oe) => Oe && !/^(expand_more|expand_less|add_circle)$/.test(Oe))[0] ?? "" : "";
    }
    function Q(V) {
      return V.className.includes("--expanded");
    }
    function G(V) {
      E.value = V, Y().forEach((U, ce) => {
        const qe = ce === V;
        if (U.classList.contains("va-collapse")) {
          const Oe = U.querySelector(".va-collapse__header-wrapper");
          Oe && (Oe.style.display = "none"), qe !== Q(U) && Oe?.click();
        }
        U.style.display = qe ? "" : "none";
      });
    }
    async function be() {
      await Io();
      const V = Y();
      N.value = V.map((U, ce) => ({ label: ee(U) || k("WidgetSettings.section", { n: ce + 1 }), index: ce })), V.length && G(Math.min(E.value, V.length - 1));
    }
    function Ue(V) {
      g.value = "look", G(V);
    }
    const _t = J();
    async function Ne() {
      const V = I.value?.unmodelledSections, U = _t.value;
      if (!(!V || !U)) {
        await Io();
        for (const ce of P(U)) {
          const qe = ce.dataset.sectionId ?? ee(ce);
          ce.style.display = V.includes(qe) ? "" : "none";
        }
      }
    }
    it(g, (V) => {
      V === "rest" && Ne();
    });
    let nt = {
      wrapperConfig: {},
      config: {}
    };
    function ge(V) {
      return p.value?.[V];
    }
    function pe(V) {
      if (V)
        return typeof V.toArray == "function" ? V.toArray() : Array.isArray(V) ? [...V] : void 0;
    }
    function le() {
      nt = { wrapperConfig: {}, config: {} };
      for (const V of ["wrapperConfig", "config"]) {
        const U = ge(V);
        if (U)
          for (const [ce, qe] of Object.entries(U)) {
            const Oe = pe(qe), nn = !!qe && typeof qe == "object" && "value" in qe;
            nt[V][ce] = {
              field: qe,
              hasValue: nn,
              value: nn ? qe.value : void 0,
              list: Oe
            };
          }
      }
    }
    function xe() {
      for (const V of ["wrapperConfig", "config"]) {
        const U = ge(V);
        if (U)
          for (const [ce, qe] of Object.entries(nt[V]))
            try {
              if (qe.list) {
                const It = U[ce];
                if (It && typeof It.clear == "function") {
                  It.clear();
                  for (const Cn of qe.list) It.add(Cn);
                } else Array.isArray(It) && It.splice(0, It.length, ...qe.list);
                continue;
              }
              const Oe = U[ce], nn = !!Oe && typeof Oe == "object" && "value" in Oe;
              qe.hasValue && nn ? Oe.value = qe.value : U[ce] = qe.field;
            } catch {
            }
      }
    }
    function se() {
      xe(), i("close");
    }
    function ye() {
      i("close");
    }
    const ot = J(!1), pt = z(() => ot.value || !u.boardSize ? { width: "100%", height: "100%" } : {
      width: `${u.boardSize.width}px`,
      height: `${u.boardSize.height}px`,
      maxWidth: "100%",
      maxHeight: "100%"
    }), je = z(
      () => u.boardSize ? k("WidgetSettings.boardSize", { width: Math.round(u.boardSize.width), height: Math.round(u.boardSize.height) }) : k("WidgetSettings.boardSizeUnknown")
    ), j = J(F());
    let oe = !1;
    function F() {
      const V = Number(localStorage.getItem("daanse.board.widgetSettingsWidth"));
      return Number.isFinite(V) && V >= 320 ? V : 400;
    }
    function X(V) {
      oe = !0, V.target.setPointerCapture?.(V.pointerId);
    }
    function fe(V) {
      if (!oe) return;
      const U = window.innerWidth - V.clientX;
      j.value = Math.min(Math.max(U, 320), Math.max(window.innerWidth - 360, 360));
    }
    function Je() {
      if (oe) {
        oe = !1;
        try {
          localStorage.setItem("daanse.board.widgetSettingsWidth", String(Math.round(j.value)));
        } catch {
        }
      }
    }
    function kt(V) {
      j.value = Math.min(Math.max(j.value + V, 320), window.innerWidth - 360), Je();
    }
    const St = z(() => {
      const V = [], U = [
        [k("WidgetSettings.tabs.frame"), p.value?.wrapperConfig],
        [k("WidgetSettings.tabs.look"), p.value?.config]
      ];
      for (const [ce, qe] of U)
        for (const [Oe, nn] of Object.entries(qe ?? {})) {
          const It = nn?.variable;
          It && V.push({ group: ce, name: Oe, variable: String(It?.name ?? It) });
        }
      return V;
    }), H = z(() => Object.keys(p.value?.wrapperConfig ?? {}).length), Z = z(() => p.value?.config?.datasourceId ? 1 : 0);
    function re(V) {
      V.key === "Escape" && se();
    }
    return it(g, (V) => {
      V === "look" && be();
    }), it(A, () => be()), jt(() => {
      le(), be(), window.addEventListener("keydown", re), window.addEventListener("pointermove", fe), window.addEventListener("pointerup", Je);
    }), Ia(() => {
      window.removeEventListener("keydown", re), window.removeEventListener("pointermove", fe), window.removeEventListener("pointerup", Je);
    }), (V, U) => (v(), Ie(ui, { to: "body" }, [
      c("div", {
        class: "scrim",
        onClick: U[14] || (U[14] = ut((ce) => se(), ["self"]))
      }, [
        c("section", {
          class: "overlay",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": a(k)("WidgetSettings.title")
        }, [
          c("div", l0, [
            c("header", u0, [
              c("span", c0, y(d.value), 1),
              c("code", d0, y(p.value?.uid), 1),
              U[15] || (U[15] = c("span", { class: "stage__spacer" }, null, -1)),
              c("div", {
                class: "seg",
                role: "group",
                "aria-label": a(k)("WidgetSettings.previewSize")
              }, [
                c("button", {
                  type: "button",
                  class: Pe({ on: !ot.value }),
                  onClick: U[0] || (U[0] = (ce) => ot.value = !1)
                }, y(a(k)("WidgetSettings.sizeBoard")), 3),
                c("button", {
                  type: "button",
                  class: Pe({ on: ot.value }),
                  onClick: U[1] || (U[1] = (ce) => ot.value = !0)
                }, y(a(k)("WidgetSettings.sizeFill")), 3)
              ], 8, f0)
            ]),
            c("div", g0, y(ot.value ? a(k)("WidgetSettings.stretched") : je.value), 1),
            c("div", p0, [
              c("div", {
                class: "preview",
                style: Wn(pt.value)
              }, [
                ou(V.$slots, "preview", {}, void 0, !0)
              ], 4)
            ])
          ]),
          c("div", {
            class: "handle",
            role: "separator",
            "aria-orientation": "vertical",
            "aria-label": a(k)("WidgetSettings.sideWidth"),
            tabindex: "0",
            onPointerdown: ut(X, ["prevent"]),
            onKeydown: [
              U[2] || (U[2] = oo(ut((ce) => kt(16), ["prevent"]), ["left"])),
              U[3] || (U[3] = oo(ut((ce) => kt(-16), ["prevent"]), ["right"]))
            ]
          }, null, 40, h0),
          c("div", {
            class: "side",
            style: Wn({ width: j.value + "px" })
          }, [
            c("nav", {
              class: "tabs",
              role: "tablist",
              "aria-label": a(k)("WidgetSettings.settings")
            }, [
              c("button", {
                type: "button",
                role: "tab",
                "aria-selected": g.value === "data",
                class: Pe(["tab", { on: g.value === "data" }]),
                onClick: U[4] || (U[4] = (ce) => g.value = "data")
              }, [
                de(y(a(k)("WidgetSettings.tabs.data")) + " ", 1),
                c("span", _0, y(Z.value), 1)
              ], 10, m0),
              !N.value.length && q.value ? (v(), $("button", {
                key: 0,
                type: "button",
                role: "tab",
                "aria-selected": g.value === "look",
                class: Pe(["tab", { on: g.value === "look" }]),
                onClick: U[5] || (U[5] = (ce) => g.value = "look")
              }, y(a(k)("WidgetSettings.tabs.look")), 11, b0)) : ne("", !0),
              (v(!0), $(_e, null, Be(N.value, (ce) => (v(), $("button", {
                key: ce.index,
                type: "button",
                role: "tab",
                "aria-selected": g.value === "look" && E.value === ce.index,
                class: Pe(["tab", { on: g.value === "look" && E.value === ce.index }]),
                onClick: (qe) => Ue(ce.index)
              }, y(ce.label), 11, y0))), 128)),
              K.value ? (v(), $("button", {
                key: 1,
                type: "button",
                role: "tab",
                "aria-selected": g.value === "rest",
                class: Pe(["tab", { on: g.value === "rest" }]),
                onClick: U[6] || (U[6] = (ce) => g.value = "rest")
              }, y(a(k)("WidgetSettings.tabs.rest")), 11, w0)) : ne("", !0),
              c("button", {
                type: "button",
                role: "tab",
                "aria-selected": g.value === "frame",
                class: Pe(["tab", { on: g.value === "frame" }]),
                onClick: U[7] || (U[7] = (ce) => g.value = "frame")
              }, [
                de(y(a(k)("WidgetSettings.tabs.frame")) + " ", 1),
                c("span", S0, y(H.value), 1)
              ], 10, k0),
              c("button", {
                type: "button",
                role: "tab",
                "aria-selected": g.value === "variables",
                class: Pe(["tab", { on: g.value === "variables" }]),
                onClick: U[8] || (U[8] = (ce) => g.value = "variables")
              }, [
                de(y(a(k)("WidgetSettings.tabs.variables")) + " ", 1),
                c("span", C0, y(St.value.length), 1)
              ], 10, x0)
            ], 8, v0),
            p.value ? (v(), $("div", $0, [
              g.value === "data" ? (v(), $(_e, { key: 0 }, [
                L(a(zt), {
                  modelValue: p.value.config.datasourceId,
                  "onUpdate:modelValue": U[9] || (U[9] = (ce) => p.value.config.datasourceId = ce),
                  label: a(k)("WidgetSettings.datasource"),
                  class: "pick",
                  options: a(S),
                  clearable: ""
                }, null, 8, ["modelValue", "label", "options"]),
                c("p", A0, y(a(k)("WidgetSettings.datasourceNote")), 1)
              ], 64)) : ne("", !0),
              no(c("div", {
                ref_key: "lookHost",
                ref: B
              }, [
                I.value ? (v(), Ie(a(Ca), {
                  key: 0,
                  modelValue: p.value.config,
                  "onUpdate:modelValue": U[10] || (U[10] = (ce) => p.value.config = ce),
                  create: I.value.create,
                  "ui-model-xmi": I.value.xmi,
                  "domain-package": I.value.ePackage(),
                  "ui-model-uri": I.value.uri,
                  "entry-forms": I.value.entryForms
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : (v(), Ie(en(a(_)[p.value.type ?? ""]?.settingsComponent), {
                  modelValue: p.value.config,
                  "onUpdate:modelValue": U[11] || (U[11] = (ce) => p.value.config = ce),
                  key: p.value.uid,
                  dataSources: a(S)
                }, null, 8, ["modelValue", "dataSources"]))
              ], 512), [
                [ni, g.value === "look"]
              ]),
              no(c("div", {
                ref_key: "restHost",
                ref: _t
              }, [
                c("p", I0, y(a(k)("WidgetSettings.restNote")), 1),
                K.value ? (v(), Ie(en(a(_)[p.value.type ?? ""]?.settingsComponent), {
                  modelValue: p.value.config,
                  "onUpdate:modelValue": U[12] || (U[12] = (ce) => p.value.config = ce),
                  key: p.value.uid + "-rest",
                  dataSources: a(S)
                }, null, 8, ["modelValue", "dataSources"])) : ne("", !0)
              ], 512), [
                [ni, g.value === "rest"]
              ]),
              no(c("div", null, [
                L(a(Ca), {
                  modelValue: p.value.wrapperConfig,
                  "onUpdate:modelValue": U[13] || (U[13] = (ce) => p.value.wrapperConfig = ce),
                  create: () => new (a(o_))(),
                  "ui-model-xmi": a(n_),
                  "domain-package": a(t_).eINSTANCE,
                  "ui-model-uri": "/wrapper-settings.ui.xmi"
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package"])
              ], 512), [
                [ni, g.value === "frame"]
              ]),
              g.value === "variables" ? (v(), $(_e, { key: 1 }, [
                St.value.length ? (v(), $("table", T0, [
                  c("thead", null, [
                    c("tr", null, [
                      c("th", null, y(a(k)("WidgetSettings.bound.field")), 1),
                      c("th", null, y(a(k)("WidgetSettings.bound.group")), 1),
                      c("th", null, y(a(k)("WidgetSettings.bound.variable")), 1)
                    ])
                  ]),
                  c("tbody", null, [
                    (v(!0), $(_e, null, Be(St.value, (ce) => (v(), $("tr", {
                      key: ce.group + ce.name
                    }, [
                      c("td", E0, y(ce.name), 1),
                      c("td", null, y(ce.group), 1),
                      c("td", R0, y(ce.variable), 1)
                    ]))), 128))
                  ])
                ])) : (v(), $("p", L0, [
                  de(y(a(k)("WidgetSettings.bound.noneBefore")) + " ", 1),
                  U[16] || (U[16] = c("span", { class: "var-mark" }, "{x}", -1)),
                  de(" " + y(a(k)("WidgetSettings.bound.noneAfter")), 1)
                ]))
              ], 64)) : ne("", !0)
            ])) : ne("", !0),
            c("footer", P0, [
              c("span", V0, y(a(k)("WidgetSettings.hint")), 1),
              U[17] || (U[17] = c("span", { class: "stage__spacer" }, null, -1)),
              L(a(ke), {
                size: "sm",
                onClick: se
              }, {
                default: ae(() => [
                  de(y(a(k)("WidgetSettings.discard")), 1)
                ]),
                _: 1
              }),
              L(a(ke), {
                intent: "primary",
                size: "sm",
                onClick: ye
              }, {
                default: ae(() => [
                  de(y(a(k)("WidgetSettings.done")), 1)
                ]),
                _: 1
              })
            ])
          ], 4)
        ], 8, s0)
      ])
    ]));
  }
}), W0 = /* @__PURE__ */ Xe(D0, [["__scopeId", "data-v-2e17910f"]]), B0 = ["aria-label"], M0 = { class: "head" }, U0 = { class: "head__title" }, N0 = ["aria-label"], F0 = { class: "body" }, z0 = {
  key: 0,
  class: "missing"
}, H0 = { class: "group" }, q0 = { class: "group__label" }, K0 = { class: "group" }, G0 = { class: "group__label" }, Y0 = { class: "group" }, Z0 = { class: "group__label" }, X0 = { class: "group" }, J0 = { class: "group__label" }, Q0 = { class: "ident" }, j0 = { class: "foot" }, ek = /* @__PURE__ */ Ge({
  __name: "PageSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ tn(["close"], ["update:modelValue"]),
  setup(h, { emit: m }) {
    const i = xn(h, "modelValue"), p = m, { t: u } = Ye("shell"), S = $e(ao), w = $e(Ra), _ = J(null), k = z(() => w?.getAllLayouts() ?? []), A = z(
      () => k.value.map((E) => ({
        id: E.id,
        name: E.nameKey ? u(E.nameKey, { defaultValue: E.name }) : E.name
      }))
    ), d = z(
      () => k.value.find(
        (E) => E.id === "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      ) ?? k.value[0]
    ), g = z({
      get: () => _.value?.layoutId ?? "",
      set: (E) => {
        _.value && (_.value.layoutId = E);
      }
    }), I = z(
      () => _.value?.layoutId ? w?.getLayout(_.value.layoutId) : void 0
    ), R = z(() => [
      { uid: "auto", name: u("PageSettings.size.auto") },
      { uid: "cover", name: u("PageSettings.size.cover") },
      { uid: "contain", name: u("PageSettings.size.contain") }
    ]), K = z(() => [
      { uid: "no-repeat", name: u("PageSettings.repeat.none") },
      { uid: "repeat", name: u("PageSettings.repeat.both") },
      { uid: "repeat-x", name: u("PageSettings.repeat.x") },
      { uid: "repeat-y", name: u("PageSettings.repeat.y") }
    ]), q = z(() => [
      { uid: "center", name: u("PageSettings.position.center") },
      { uid: "top", name: u("PageSettings.position.top") },
      { uid: "bottom", name: u("PageSettings.position.bottom") },
      { uid: "left", name: u("PageSettings.position.left") },
      { uid: "right", name: u("PageSettings.position.right") },
      { uid: "top left", name: u("PageSettings.position.topLeft") },
      { uid: "top right", name: u("PageSettings.position.topRight") },
      { uid: "bottom left", name: u("PageSettings.position.bottomLeft") },
      { uid: "bottom right", name: u("PageSettings.position.bottomRight") }
    ]), B = z(() => !!_.value?.backgroundImage?.trim());
    function N() {
      if (!i.value || !S) {
        _.value = null;
        return;
      }
      let E;
      try {
        E = S.getPage(i.value);
      } catch {
        E = void 0;
      }
      _.value = E ? {
        id: E.id,
        name: E.name,
        description: E.description,
        icon: E.icon,
        visibleInNavigation: E.visibleInNavigation ?? !0,
        layoutId: E.layoutId ?? d.value?.id,
        layoutSettings: E.layoutSettings,
        backgroundColor: E.backgroundColor,
        backgroundImage: E.backgroundImage,
        backgroundSize: E.backgroundSize,
        backgroundPosition: E.backgroundPosition,
        backgroundRepeat: E.backgroundRepeat
      } : null;
    }
    return jt(N), it(i, N), it(
      _,
      () => {
        _.value && S?.updatePage(_.value);
      },
      { deep: !0 }
    ), (E, P) => (v(), $("aside", {
      class: "page-settings",
      "aria-label": a(u)("PageSettings.title")
    }, [
      c("header", M0, [
        c("h2", U0, y(a(u)("PageSettings.title")), 1),
        c("button", {
          type: "button",
          class: "head__close",
          "aria-label": a(u)("common:Action.close"),
          onClick: P[0] || (P[0] = (Y) => p("close"))
        }, " × ", 8, N0)
      ]),
      c("div", F0, [
        _.value ? (v(), $(_e, { key: 1 }, [
          c("section", H0, [
            c("h3", q0, y(a(u)("PageSettings.page")), 1),
            L(a(st), {
              modelValue: _.value.name,
              "onUpdate:modelValue": P[1] || (P[1] = (Y) => _.value.name = Y),
              label: a(u)("Editor.name")
            }, null, 8, ["modelValue", "label"]),
            L(a(st), {
              modelValue: _.value.description,
              "onUpdate:modelValue": P[2] || (P[2] = (Y) => _.value.description = Y),
              label: a(u)("PageSettings.description")
            }, null, 8, ["modelValue", "label"]),
            L(a(st), {
              modelValue: _.value.icon,
              "onUpdate:modelValue": P[3] || (P[3] = (Y) => _.value.icon = Y),
              label: a(u)("Editor.icon"),
              placeholder: a(u)("PageSettings.iconPlaceholder")
            }, null, 8, ["modelValue", "label", "placeholder"])
          ]),
          c("section", K0, [
            c("h3", G0, y(a(u)("PageSettings.layout")), 1),
            L(a(zt), {
              modelValue: g.value,
              "onUpdate:modelValue": P[4] || (P[4] = (Y) => g.value = Y),
              label: a(u)("PageSettings.layout"),
              options: A.value,
              "value-key": "id",
              "label-key": "name"
            }, null, 8, ["modelValue", "label", "options"]),
            I.value?.settingsForm ? (v(), Ie(a(Ca), {
              key: 0,
              modelValue: _.value.layoutSettings,
              "onUpdate:modelValue": P[5] || (P[5] = (Y) => _.value.layoutSettings = Y),
              create: I.value.settingsForm.create,
              "ui-model-xmi": I.value.settingsForm.xmi,
              "domain-package": I.value.settingsForm.ePackage(),
              "ui-model-uri": I.value.settingsForm.uri,
              "entry-forms": I.value.settingsForm.entryForms
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : I.value?.settings ? (v(), Ie(en(I.value.settings), {
              key: 1,
              modelValue: _.value.layoutSettings,
              "onUpdate:modelValue": P[6] || (P[6] = (Y) => _.value.layoutSettings = Y)
            }, null, 8, ["modelValue"])) : ne("", !0)
          ]),
          c("section", Y0, [
            c("h3", Z0, y(a(u)("PageSettings.background")), 1),
            L(a(lu), {
              modelValue: _.value.backgroundColor,
              "onUpdate:modelValue": P[7] || (P[7] = (Y) => _.value.backgroundColor = Y),
              label: a(u)("PageSettings.color"),
              stacked: ""
            }, null, 8, ["modelValue", "label"]),
            L(a(st), {
              modelValue: _.value.backgroundImage,
              "onUpdate:modelValue": P[8] || (P[8] = (Y) => _.value.backgroundImage = Y),
              label: a(u)("PageSettings.image"),
              placeholder: a(u)("PageSettings.imagePlaceholder")
            }, null, 8, ["modelValue", "label", "placeholder"]),
            B.value ? (v(), $(_e, { key: 0 }, [
              L(a(zt), {
                modelValue: _.value.backgroundSize,
                "onUpdate:modelValue": P[9] || (P[9] = (Y) => _.value.backgroundSize = Y),
                label: a(u)("PageSettings.size.label"),
                options: R.value
              }, null, 8, ["modelValue", "label", "options"]),
              L(a(zt), {
                modelValue: _.value.backgroundRepeat,
                "onUpdate:modelValue": P[10] || (P[10] = (Y) => _.value.backgroundRepeat = Y),
                label: a(u)("PageSettings.repeat.label"),
                options: K.value
              }, null, 8, ["modelValue", "label", "options"]),
              L(a(zt), {
                modelValue: _.value.backgroundPosition,
                "onUpdate:modelValue": P[11] || (P[11] = (Y) => _.value.backgroundPosition = Y),
                label: a(u)("PageSettings.position.label"),
                options: q.value
              }, null, 8, ["modelValue", "label", "options"])
            ], 64)) : ne("", !0)
          ]),
          c("section", X0, [
            c("h3", J0, y(a(u)("PageSettings.navigation")), 1),
            L(a(ci), {
              modelValue: _.value.visibleInNavigation,
              "onUpdate:modelValue": P[12] || (P[12] = (Y) => _.value.visibleInNavigation = Y),
              label: a(u)("PageSettings.showInNavigation")
            }, null, 8, ["modelValue", "label"])
          ]),
          c("p", Q0, [
            de(y(a(u)("PageSettings.id")) + " ", 1),
            c("code", null, y(_.value.id), 1)
          ])
        ], 64)) : (v(), $("p", z0, y(a(u)("PageSettings.missing")), 1))
      ]),
      c("footer", j0, [
        L(a(ke), {
          intent: "primary",
          onClick: P[13] || (P[13] = (Y) => p("close"))
        }, {
          default: ae(() => [
            de(y(a(u)("common:Action.done")), 1)
          ]),
          _: 1
        })
      ])
    ], 8, B0));
  }
}), tk = /* @__PURE__ */ Xe(ek, [["__scopeId", "data-v-e2914ad9"]]), nk = {
  ref: "board",
  class: "editor"
}, ok = ["title"], ak = { class: "report-container dottet" }, rk = /* @__PURE__ */ Ge({
  __name: "EditReport",
  setup(h) {
    const m = J(""), { t: i } = Ye("shell"), u = To().params.pageid ?? "", S = Rm(u || ""), w = S.widgets, _ = J([]), k = $e("endpointfinder", null), A = () => {
      k();
    }, d = z(() => !!k), { settingsFor: g, closeSettings: I } = hu(), R = (E) => {
      m.value = E;
    }, K = z(() => {
      const E = w.value.find((P) => P.uid === m.value);
      return E || _.value.find((P) => P.uid === m.value);
    }), q = z(() => {
      const E = S.layout.value.find((P) => P.id === m.value);
      if (!(!E?.width || !E?.height))
        return { width: E.width, height: E.height };
    }), { visible: B, hide: N } = vu();
    return (E, P) => (v(), $("div", nk, [
      a(B) ? (v(), Ie(a(Om), {
        key: 0,
        title: a(i)("Header.palette"),
        "remember-as": "daanse.board.palette",
        initial: { x: 0, y: 0, w: 240, h: 460, dock: "left" },
        "min-width": 180,
        "max-width": 420,
        "min-height": 200,
        dockable: "",
        onClose: a(N)
      }, {
        actions: ae(() => [
          d.value ? (v(), $("button", {
            key: 0,
            type: "button",
            class: "palette__act",
            title: a(i)("Tree.findEndpoints"),
            onPointerdown: P[0] || (P[0] = ut(() => {
            }, ["stop"])),
            onClick: P[1] || (P[1] = (Y) => A())
          }, [
            L(a(ze), {
              name: "travel_explore",
              size: "sm"
            })
          ], 40, ok)) : ne("", !0)
        ]),
        default: ae(() => [
          L(i0)
        ]),
        _: 1
      }, 8, ["title", "onClose"])) : ne("", !0),
      c("div", ak, [
        L($u, {
          pageId: a(u),
          onOpenWidgetSettings: R
        }, null, 8, ["pageId"]),
        L(wm, { duration: 150 }, {
          default: ae(() => [
            a(g) ? (v(), Ie(tk, {
              key: 0,
              modelValue: a(g),
              "onUpdate:modelValue": P[2] || (P[2] = (Y) => km(g) ? g.value = Y : null),
              onClose: a(I)
            }, null, 8, ["modelValue", "onClose"])) : ne("", !0)
          ]),
          _: 1
        })
      ]),
      m.value && K.value ? (v(), Ie(W0, {
        key: 1,
        modelValue: K.value,
        "onUpdate:modelValue": P[3] || (P[3] = (Y) => K.value = Y),
        "board-size": q.value,
        onClose: P[4] || (P[4] = (Y) => m.value = "")
      }, {
        preview: ae(() => [
          L(a(a_), {
            widget: K.value,
            "edit-enabled": !1
          }, null, 8, ["widget"])
        ]),
        _: 1
      }, 8, ["modelValue", "board-size"])) : ne("", !0)
    ], 512));
  }
}), eu = /* @__PURE__ */ Xe(rk, [["__scopeId", "data-v-2da1a581"]]), eo = Um({
  history: Nm("/"),
  routes: [
    // Static core routes (routes will be added dynamically via router.addRoute in main.ts)
    {
      path: "/",
      name: "home",
      component: Ql
    },
    {
      path: "/edit",
      name: "edit",
      component: eu
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
      component: jw
    },
    {
      path: "/datasources",
      name: "data",
      component: Ew
    },
    {
      path: "/:id/data",
      redirect: { name: "data" }
    },
    {
      path: "/page/:pageid/edit",
      name: "pageEdit",
      component: eu
    },
    {
      path: "/page/:pageid",
      name: "page",
      component: Ql
    }
  ]
}), ik = { class: "variables" }, sk = { class: "variables__head" }, lk = { class: "variables__title" }, uk = { class: "variables__lead" }, ck = { class: "reach__title" }, dk = { class: "reach__lead" }, fk = {
  key: 0,
  class: "rows"
}, gk = { class: "row__name" }, pk = { class: "row__type" }, hk = { class: "row__value" }, vk = { class: "row__tools" }, mk = {
  key: 1,
  class: "reach__empty"
}, _k = { class: "form" }, bk = { class: "confirm__title" }, yk = { class: "confirm__text" }, wk = /* @__PURE__ */ Ge({
  __name: "Configuration",
  setup(h) {
    const m = $e(fu), i = $e(Ht), p = $e(Symbol.for(nu)), { t: u } = Ye("shell"), S = mt(i, (le) => le.variables), w = mt(i, (le) => le.board?.pages), _ = J(0), k = () => _.value += 1;
    jt(() => p?.on(Gl.VariableUpdated, k)), Ia(() => p?.off(Gl.VariableUpdated, k));
    function A(le) {
      _.value;
      try {
        const se = m.getVariableById(le.uid)?.value;
        return se == null ? "" : typeof se == "object" ? JSON.stringify(se) : String(se);
      } catch {
        return u("Variables.pageOnlyValue");
      }
    }
    const d = z(() => {
      const le = S.value.filter((ye) => (ye.scope ?? "global") === "global"), xe = w.value.map((ye) => ({
        title: ye.name,
        lead: u("Variables.reach.pageLead"),
        page: ye,
        rows: S.value.filter((ot) => ot.scope === "page" && ot.page === ye)
      })).filter((ye) => ye.rows.length > 0), se = S.value.filter((ye) => ye.scope === "page" && !ye.page);
      return [
        { title: u("Variables.reach.global"), lead: u("Variables.reach.globalLead"), page: void 0, rows: le },
        ...xe,
        ...se.length ? [{ title: u("Variables.reach.orphan"), lead: u("Variables.reach.orphanLead"), page: void 0, rows: se }] : []
      ];
    }), g = J([]);
    jt(() => g.value = m.getRegisteredVariableTypes());
    const I = z(() => [
      { text: u("Variables.reach.global"), value: "" },
      ...w.value.map((le) => ({ text: le.name, value: le.id }))
    ]), R = z(() => [
      { text: u("Variables.access.externalWritable"), value: "external-writable" },
      { text: u("Variables.access.pageOnly"), value: "page-only" },
      { text: u("Variables.access.readonly"), value: "readonly" }
    ]), K = J(!1), q = J(null), B = J(""), N = J(""), E = J(""), P = J("external-writable"), Y = J({}), ee = z(() => q.value !== null), Q = z(
      () => B.value ? m.getVariableIdentifiers(B.value)?.settingsForm : void 0
    ), G = z(
      () => B.value ? m.getVariableIdentifiers(B.value)?.Settings : null
    );
    function be() {
      q.value = null, B.value = g.value[0] ?? "", N.value = "", E.value = u("Variables.newName", { id: Math.random().toString(36).substring(7) }), P.value = "external-writable", Y.value = {}, K.value = !0;
    }
    function Ue(le) {
      q.value = le.uid, B.value = le.type ?? "", N.value = le.page?.id ?? "", E.value = le.name, P.value = le.accessMode ?? "external-writable";
      const xe = m.getVariableById(le.uid), { name: se, ...ye } = {
        ...le.definition ?? {},
        ...xe?.serialize?.() ?? {}
      };
      Y.value = ye, K.value = !0;
    }
    function _t(le) {
      if (!r_(le)) return { ...le ?? {} };
      const xe = {};
      for (const se of le.eClass().getEAllStructuralFeatures()) {
        const ye = le.eGet(se);
        ye !== void 0 && (xe[se.getName()] = ye);
      }
      return xe;
    }
    function Ne() {
      Y.value = {};
    }
    function nt() {
      m.registerVariable(E.value, B.value, {
        ..._t(Y.value),
        uid: q.value ?? void 0,
        accessMode: P.value,
        scope: N.value ? "page" : "global",
        pageId: N.value || void 0
      }), K.value = !1, q.value = null;
    }
    const ge = J(null);
    function pe() {
      ge.value && m.removeVariable(ge.value.uid), ge.value = null;
    }
    return (le, xe) => (v(), $("div", ik, [
      c("header", sk, [
        c("div", null, [
          c("h1", lk, y(a(u)("Variables.title")), 1),
          c("p", uk, y(a(u)("Variables.lead")), 1)
        ]),
        L(a(ke), {
          intent: "primary",
          onClick: be
        }, {
          default: ae(() => [
            L(a(ze), {
              name: "add",
              size: "sm"
            }),
            de(y(a(u)("Variables.create")), 1)
          ]),
          _: 1
        })
      ]),
      (v(!0), $(_e, null, Be(d.value, (se) => (v(), $("section", {
        key: se.title,
        class: "reach"
      }, [
        c("h2", ck, [
          de(y(se.title), 1),
          c("span", dk, y(se.lead), 1)
        ]),
        se.rows.length ? (v(), $("ul", fk, [
          (v(!0), $(_e, null, Be(se.rows, (ye) => (v(), $("li", {
            key: ye.uid,
            class: "row"
          }, [
            c("span", gk, y(ye.name), 1),
            c("span", pk, y(ye.type), 1),
            c("span", hk, y(A(ye)), 1),
            c("span", vk, [
              L(a(ke), {
                intent: "quiet",
                size: "sm",
                title: a(u)("Variables.edit"),
                onClick: (ot) => Ue(ye)
              }, {
                default: ae(() => [
                  L(a(ze), {
                    name: "edit",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"]),
              L(a(ke), {
                intent: "quiet",
                size: "sm",
                title: a(u)("Variables.remove"),
                onClick: (ot) => ge.value = ye
              }, {
                default: ae(() => [
                  L(a(ze), {
                    name: "delete",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])
            ])
          ]))), 128))
        ])) : (v(), $("p", mk, y(a(u)("Variables.none")), 1))
      ]))), 128)),
      L(a(xa), {
        modelValue: K.value,
        "onUpdate:modelValue": xe[7] || (xe[7] = (se) => K.value = se),
        title: ee.value ? a(u)("Variables.edit") : a(u)("Variables.create"),
        size: "md"
      }, {
        actions: ae(() => [
          L(a(ke), {
            intent: "quiet",
            onClick: xe[6] || (xe[6] = (se) => K.value = !1)
          }, {
            default: ae(() => [
              de(y(a(u)("common:Action.cancel")), 1)
            ]),
            _: 1
          }),
          L(a(ke), {
            intent: "primary",
            onClick: nt
          }, {
            default: ae(() => [
              de(y(ee.value ? a(u)("common:Action.save") : a(u)("Wizard.create")), 1)
            ]),
            _: 1
          })
        ]),
        default: ae(() => [
          c("div", _k, [
            L(a(zt), {
              modelValue: B.value,
              "onUpdate:modelValue": [
                xe[0] || (xe[0] = (se) => B.value = se),
                Ne
              ],
              label: a(u)("Editor.type"),
              options: g.value
            }, null, 8, ["modelValue", "label", "options"]),
            L(a(zt), {
              modelValue: N.value,
              "onUpdate:modelValue": xe[1] || (xe[1] = (se) => N.value = se),
              label: a(u)("Variables.reach.label"),
              options: I.value,
              "label-key": "text",
              "value-key": "value"
            }, null, 8, ["modelValue", "label", "options"]),
            L(a(zt), {
              modelValue: P.value,
              "onUpdate:modelValue": xe[2] || (xe[2] = (se) => P.value = se),
              label: a(u)("Variables.access.label"),
              options: R.value,
              "label-key": "text",
              "value-key": "value"
            }, null, 8, ["modelValue", "label", "options"]),
            L(a(st), {
              modelValue: E.value,
              "onUpdate:modelValue": xe[3] || (xe[3] = (se) => E.value = se),
              label: a(u)("Editor.name")
            }, null, 8, ["modelValue", "label"]),
            Q.value ? (v(), Ie(a(Ca), {
              key: B.value,
              modelValue: Y.value,
              "onUpdate:modelValue": xe[4] || (xe[4] = (se) => Y.value = se),
              create: Q.value.create,
              "ui-model-xmi": Q.value.xmi,
              "domain-package": Q.value.ePackage(),
              "ui-model-uri": Q.value.uri
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri"])) : G.value ? (v(), Ie(en(G.value), {
              key: 1,
              modelValue: Y.value,
              "onUpdate:modelValue": xe[5] || (xe[5] = (se) => Y.value = se)
            }, null, 8, ["modelValue"])) : ne("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]),
      L(a(xa), {
        "model-value": !!ge.value,
        size: "sm",
        "onUpdate:modelValue": xe[9] || (xe[9] = (se) => ge.value = null)
      }, {
        header: ae(() => [
          L(a(ze), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          c("h2", bk, y(a(u)("Variables.remove")), 1)
        ]),
        actions: ae(() => [
          L(a(ke), {
            intent: "quiet",
            onClick: xe[8] || (xe[8] = (se) => ge.value = null)
          }, {
            default: ae(() => [
              de(y(a(u)("common:Action.cancel")), 1)
            ]),
            _: 1
          }),
          L(a(ke), {
            intent: "danger",
            onClick: pe
          }, {
            default: ae(() => [
              de(y(a(u)("common:Action.delete")), 1)
            ]),
            _: 1
          })
        ]),
        default: ae(() => [
          c("p", yk, y(a(u)("Variables.confirmRemove", { name: ge.value?.name })), 1)
        ]),
        _: 1
      }, 8, ["model-value"])
    ]));
  }
}), kk = /* @__PURE__ */ Xe(wk, [["__scopeId", "data-v-851905bc"]]), Sk = { class: "appearance" }, xk = { class: "panel" }, Ck = { class: "panel__head" }, $k = { class: "panel__tools" }, Ak = {
  key: 0,
  class: "changed"
}, Ik = {
  key: 0,
  class: "gallery"
}, Tk = { class: "gallery__lead" }, Ek = { class: "demo" }, Rk = { class: "demo__title" }, Lk = { class: "demo__row" }, Pk = { class: "demo__row" }, Vk = { class: "demo" }, Ok = { class: "demo__title" }, Dk = { class: "demo__form" }, Wk = { class: "demo" }, Bk = { class: "demo__title" }, Mk = { class: "demo__row" }, Uk = { class: "demo__row" }, Nk = {
  key: 1,
  class: "body"
}, Fk = ["aria-label"], zk = ["onClick"], Hk = {
  class: "theme__strip",
  "aria-hidden": "true"
}, qk = { class: "theme__name" }, Kk = { class: "theme__note" }, Gk = { class: "tokens" }, Yk = ["aria-expanded", "onClick"], Zk = { class: "group__twist" }, Xk = { class: "group__label" }, Jk = { class: "group__count" }, Qk = {
  key: 0,
  class: "group__body"
}, jk = {
  key: 0,
  class: "group__note"
}, eS = {
  key: 1,
  class: "token__swatch token__swatch--none",
  "aria-hidden": "true"
}, tS = { class: "token__text" }, nS = { class: "token__name" }, oS = { class: "token__role" }, aS = ["value", "aria-label", "onInput"], rS = ["value", "aria-label", "onChange"], iS = ["disabled", "title", "onClick"], sS = /* @__PURE__ */ Ge({
  __name: "Appearance",
  setup(h) {
    const {
      themes: m,
      activeTheme: i,
      overrides: p,
      valueOf: u,
      isOverridden: S,
      selectTheme: w,
      setToken: _,
      clearToken: k,
      clearAllTokens: A,
      exportTheme: d
    } = xu(), { t: g } = Ye("shell"), I = J($a[0].id), R = J(!1), K = J("tokens"), q = J({
      text: g("Appearance.demo.sample"),
      number: 38.4,
      choice: "ogcsta",
      colour: "#4fa3d1",
      when: "2026-08-28",
      amount: 60,
      on: !0,
      checked: !0,
      note: ""
    }), B = [
      { uid: "ogcsta", name: "OGC SensorThings" },
      { uid: "xmla", name: "XMLA / MDX" },
      { uid: "rest", name: "REST" }
    ], N = z(() => Object.keys(p.value).length);
    function E(ee) {
      return [
        ee.tokens["color-bg"],
        ee.tokens["color-pane"],
        ee.tokens["color-accent"],
        ee.tokens["color-brand"],
        ee.tokens["color-ok"]
      ].filter(Boolean);
    }
    function P(ee) {
      return ee.kind === "color";
    }
    async function Y() {
      try {
        await navigator.clipboard.writeText(JSON.stringify(d(), null, 2)), R.value = !0, setTimeout(() => R.value = !1, 2e3);
      } catch {
        R.value = !1;
      }
    }
    return (ee, Q) => (v(), $("div", Sk, [
      c("div", xk, [
        c("header", Ck, [
          c("button", {
            type: "button",
            class: Pe(["head__tab", { on: K.value === "tokens" }]),
            onClick: Q[0] || (Q[0] = (G) => K.value = "tokens")
          }, y(a(g)("Appearance.tokens")), 3),
          c("button", {
            type: "button",
            class: Pe(["head__tab", { on: K.value === "controls" }]),
            onClick: Q[1] || (Q[1] = (G) => K.value = "controls")
          }, y(a(g)("Appearance.controls")), 3),
          c("span", $k, [
            N.value ? (v(), $("span", Ak, y(a(g)("Appearance.changed", { count: N.value })), 1)) : ne("", !0),
            N.value ? (v(), $("button", {
              key: 1,
              class: "btn",
              type: "button",
              onClick: Q[2] || (Q[2] = //@ts-ignore
              (...G) => a(A) && a(A)(...G))
            }, y(a(g)("Appearance.resetAll")), 1)) : ne("", !0),
            c("button", {
              class: "btn",
              type: "button",
              onClick: Y
            }, y(R.value ? a(g)("Appearance.copied") : a(g)("Appearance.copy")), 1)
          ])
        ]),
        K.value === "controls" ? (v(), $("div", Ik, [
          c("p", Tk, y(a(g)("Appearance.lead")), 1),
          c("section", Ek, [
            c("h3", Rk, y(a(g)("Appearance.demo.buttons")), 1),
            c("div", Lk, [
              L(a(ke), null, {
                default: ae(() => [
                  de(y(a(g)("Appearance.demo.standard")), 1)
                ]),
                _: 1
              }),
              L(a(ke), { intent: "primary" }, {
                default: ae(() => [
                  de(y(a(g)("common:Action.save")), 1)
                ]),
                _: 1
              }),
              L(a(ke), { intent: "quiet" }, {
                default: ae(() => [
                  de(y(a(g)("common:Action.cancel")), 1)
                ]),
                _: 1
              }),
              L(a(ke), { intent: "danger" }, {
                default: ae(() => [
                  de(y(a(g)("common:Action.delete")), 1)
                ]),
                _: 1
              }),
              L(a(ke), { disabled: "" }, {
                default: ae(() => [
                  de(y(a(g)("Appearance.demo.disabled")), 1)
                ]),
                _: 1
              }),
              L(a(ke), { busy: "" }, {
                default: ae(() => [
                  de(y(a(g)("Appearance.demo.busy")), 1)
                ]),
                _: 1
              })
            ]),
            c("div", Pk, [
              L(a(ke), { size: "sm" }, {
                default: ae(() => [
                  de(y(a(g)("Appearance.demo.small")), 1)
                ]),
                _: 1
              }),
              L(a(ke), { size: "md" }, {
                default: ae(() => [
                  de(y(a(g)("Appearance.demo.medium")), 1)
                ]),
                _: 1
              }),
              L(a(ke), { size: "lg" }, {
                default: ae(() => [
                  de(y(a(g)("Appearance.demo.large")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          c("section", Vk, [
            c("h3", Ok, y(a(g)("Appearance.demo.inputs")), 1),
            c("div", Dk, [
              L(a(st), {
                modelValue: q.value.text,
                "onUpdate:modelValue": Q[3] || (Q[3] = (G) => q.value.text = G),
                label: a(g)("Appearance.demo.title")
              }, null, 8, ["modelValue", "label"]),
              L(a(st), {
                modelValue: q.value.number,
                "onUpdate:modelValue": Q[4] || (Q[4] = (G) => q.value.number = G),
                label: a(g)("Appearance.demo.value"),
                type: "number",
                suffix: "%"
              }, null, 8, ["modelValue", "label"]),
              L(a(zt), {
                modelValue: q.value.choice,
                "onUpdate:modelValue": Q[5] || (Q[5] = (G) => q.value.choice = G),
                label: a(g)("WidgetSettings.datasource"),
                options: B
              }, null, 8, ["modelValue", "label"]),
              L(a(lu), {
                modelValue: q.value.colour,
                "onUpdate:modelValue": Q[6] || (Q[6] = (G) => q.value.colour = G),
                label: a(g)("PageSettings.color")
              }, null, 8, ["modelValue", "label"]),
              L(a(Dm), {
                modelValue: q.value.when,
                "onUpdate:modelValue": Q[7] || (Q[7] = (G) => q.value.when = G),
                label: a(g)("Appearance.demo.date")
              }, null, 8, ["modelValue", "label"]),
              L(a(Wm), {
                modelValue: q.value.amount,
                "onUpdate:modelValue": Q[8] || (Q[8] = (G) => q.value.amount = G),
                label: a(g)("Appearance.demo.coverage"),
                suffix: "%"
              }, null, 8, ["modelValue", "label"]),
              L(a(st), {
                modelValue: q.value.note,
                "onUpdate:modelValue": Q[9] || (Q[9] = (G) => q.value.note = G),
                label: a(g)("Appearance.demo.note"),
                rows: 2,
                stacked: ""
              }, null, 8, ["modelValue", "label"]),
              L(a(st), {
                modelValue: q.value.text,
                "onUpdate:modelValue": Q[10] || (Q[10] = (G) => q.value.text = G),
                label: a(g)("Appearance.demo.withError"),
                error: a(g)("Appearance.demo.error")
              }, null, 8, ["modelValue", "label", "error"])
            ])
          ]),
          c("section", Wk, [
            c("h3", Bk, y(a(g)("Appearance.demo.switches")), 1),
            c("div", Mk, [
              L(a(Bm), {
                modelValue: q.value.checked,
                "onUpdate:modelValue": Q[11] || (Q[11] = (G) => q.value.checked = G),
                label: a(g)("Appearance.demo.showOnBoard")
              }, null, 8, ["modelValue", "label"]),
              L(a(ci), {
                modelValue: q.value.on,
                "onUpdate:modelValue": Q[12] || (Q[12] = (G) => q.value.on = G),
                label: a(g)("Appearance.demo.autoRefresh")
              }, null, 8, ["modelValue", "label"])
            ]),
            c("div", Uk, [
              L(a(On), null, {
                default: ae(() => [
                  de(y(a(g)("Appearance.demo.neutral")), 1)
                ]),
                _: 1
              }),
              L(a(On), { tone: "accent" }, {
                default: ae(() => [
                  de(y(a(g)("Storage.loaded")), 1)
                ]),
                _: 1
              }),
              L(a(On), { tone: "ok" }, {
                default: ae(() => [
                  de(y(a(g)("Appearance.demo.ok")), 1)
                ]),
                _: 1
              }),
              L(a(On), { tone: "warn" }, {
                default: ae(() => [
                  de(y(a(g)("Appearance.demo.warn")), 1)
                ]),
                _: 1
              }),
              L(a(On), { tone: "err" }, {
                default: ae(() => [
                  de(y(a(g)("Appearance.demo.err")), 1)
                ]),
                _: 1
              }),
              L(a(On), {
                tone: "accent",
                numeric: ""
              }, {
                default: ae(() => [...Q[13] || (Q[13] = [
                  de("14", -1)
                ])]),
                _: 1
              })
            ]),
            L(a(Mm), {
              label: a(g)("Appearance.demo.divider")
            }, null, 8, ["label"])
          ])
        ])) : (v(), $("div", Nk, [
          c("aside", {
            class: "themes",
            "aria-label": a(g)("Appearance.themes")
          }, [
            (v(!0), $(_e, null, Be(a(m), (G) => (v(), $("button", {
              key: G.id,
              type: "button",
              class: Pe(["theme", { on: G.id === a(i).id }]),
              onClick: (be) => a(w)(G.id)
            }, [
              c("span", Hk, [
                (v(!0), $(_e, null, Be(E(G), (be, Ue) => (v(), $("i", {
                  key: Ue,
                  style: Wn({ background: be })
                }, null, 4))), 128))
              ]),
              c("span", qk, y(a(g)(G.name)), 1),
              c("span", Kk, y(a(g)(G.note)), 1)
            ], 10, zk))), 128))
          ], 8, Fk),
          c("section", Gk, [
            (v(!0), $(_e, null, Be(a($a), (G) => (v(), $("div", {
              key: G.id,
              class: "group"
            }, [
              c("button", {
                type: "button",
                class: "group__head",
                "aria-expanded": I.value === G.id,
                onClick: (be) => I.value = I.value === G.id ? "" : G.id
              }, [
                c("span", Zk, y(I.value === G.id ? "▾" : "▸"), 1),
                c("span", Xk, y(a(g)(G.label)), 1),
                c("span", Jk, y(G.tokens.length), 1)
              ], 8, Yk),
              I.value === G.id ? (v(), $("div", Qk, [
                G.note ? (v(), $("p", jk, y(a(g)(G.note)), 1)) : ne("", !0),
                (v(!0), $(_e, null, Be(G.tokens, (be) => (v(), $("div", {
                  key: be.name,
                  class: "token"
                }, [
                  P(be) ? (v(), $("span", {
                    key: 0,
                    class: "token__swatch",
                    style: Wn({ background: a(u)(be.name) }),
                    "aria-hidden": "true"
                  }, null, 4)) : (v(), $("span", eS)),
                  c("span", tS, [
                    c("code", nS, "--" + y(be.name), 1),
                    c("span", oS, y(a(g)(be.role)), 1)
                  ]),
                  P(be) ? (v(), $("input", {
                    key: 2,
                    class: "token__picker",
                    type: "color",
                    value: a(u)(be.name),
                    "aria-label": a(g)("Appearance.colorOf", { name: be.name }),
                    onInput: (Ue) => a(_)(be.name, Ue.target.value)
                  }, null, 40, aS)) : ne("", !0),
                  c("input", {
                    class: "token__value",
                    type: "text",
                    value: a(u)(be.name),
                    "aria-label": a(g)("Appearance.valueOf", { name: be.name }),
                    onChange: (Ue) => a(_)(be.name, Ue.target.value)
                  }, null, 40, rS),
                  c("button", {
                    class: "token__reset",
                    type: "button",
                    disabled: !a(S)(be.name),
                    title: a(S)(be.name) ? a(g)("Appearance.reset") : a(g)("Appearance.unchanged"),
                    onClick: (Ue) => a(k)(be.name)
                  }, " ↺ ", 8, iS)
                ]))), 128))
              ])) : ne("", !0)
            ]))), 128))
          ])
        ]))
      ])
    ]));
  }
}), lS = /* @__PURE__ */ Xe(sS, [["__scopeId", "data-v-a791e3bf"]]), Dn = pu.createLogger("daanse:system:actions");
class uS {
  constructor(m, i) {
    this.router = m, this.eventBus = i;
  }
  eventBus;
  async changePage(m) {
    if (!m) {
      Dn("⚠️ changePage called without pageId");
      return;
    }
    Dn("📄 Changing page to: %s", m);
    const i = new Promise((p) => {
      const u = (S) => {
        S.pageId === m && (Dn("📄 Received pageLoaded event for page: %s", m), this.eventBus.off("system:pageLoaded", u), p());
      };
      this.eventBus.on("system:pageLoaded", u), setTimeout(() => {
        this.eventBus.off("system:pageLoaded", u), Dn("⚠️ pageLoaded timeout for page: %s, continuing anyway", m), p();
      }, 5e3);
    });
    await this.router.push(`/page/${m}`), await i, Dn("📄 Page change complete, widgets should be registered");
  }
  async setGlobalVariable(m, i) {
    Dn("⚠️ setGlobalVariable should be handled by VariableRepository");
  }
}
async function cS(h, m, i) {
  await m.registerActionsFromEcoreString(
    "SystemActions",
    i_,
    "system",
    "SystemActions.ecore"
  );
  const p = new uS(h, i);
  m.registerInstance("SystemActions", p, "SystemActions"), Dn("✅ System actions registered");
}
var dS = Object.defineProperty, fS = Object.getOwnPropertyDescriptor, gS = (h, m, i, p) => {
  for (var u = fS(m, i), S = h.length - 1, w; S >= 0; S--)
    (w = h[S]) && (u = w(m, i, u) || u);
  return u && dS(m, i, u), u;
};
const pS = pu.createLogger("daanse:system:actions");
class li {
  testAction(...m) {
    console.log("TestActions", m);
  }
}
gS([
  s_({ eventType: "test.console" })
], li.prototype, "testAction");
async function hS(h) {
  h.registerWidgetType("test", li, "system");
  const m = new li();
  h.registerInstance("test", m, "system"), pS("✅ Test actions registered");
}
const vS = { areas: "Bereiche", board: "Board", pages: "Seiten", data: "Verbindungen & Daten" }, mS = { brand: "Daanse Board", crumb: { label: "Pfad", boards: "Boards", board: "Board", edit: "Bearbeiten", pages: "Seiten", data: "Verbindungen & Daten", config: "Konfiguration", storage: "Speicher", test: "Test", events: "Ereignisse" }, page: { fallbackName: "Seite", confirmRemove: "Seite „{{name}}“ löschen? Das lässt sich nicht rückgängig machen.", switch: "Seite wechseln", remove: "Seite „{{name}}“ löschen", add: "+ Neue Seite" }, undo: "Rückgängig", undoWhat: "Rückgängig: {{what}}", undoLabel: "Letzte Änderung rückgängig machen", redo: "Wiederholen", redoWhat: "Wiederholen: {{what}}", redoLabel: "Rückgängig gemachte Änderung wiederholen", snap: "Am Raster ausrichten", snapLabel: "Widgets am Raster ausrichten", backdrop: "Hintergrund der Seite zeigen", backdropLabel: "Hintergrund der Seite beim Bearbeiten zeigen oder verbergen", palette: "Widgets", paletteLabel: "Widget-Palette zeigen oder verbergen", pageSettings: "Seite einrichten", storage: "Speichern", storageLabel: "Arbeitsstand speichern oder laden", mode: "Modus", view: "Ansicht", edit: "Bearbeiten", language: "Sprache", appearance: "Erscheinungsbild", signedIn: "Angemeldet" }, _S = { title: "Widget-Einstellungen", widget: "Widget", section: "Abschnitt {{n}}", boardSize: "{{width}} × {{height}} px, wie im Board", boardSizeUnknown: "Größe des Boards nicht bekannt", previewSize: "Vorschaugröße", sizeBoard: "Boardgröße", sizeFill: "Füllen", stretched: "Auf die Fläche gestreckt", sideWidth: "Breite der Einstellungen", settings: "Einstellungen", tabs: { data: "Daten", look: "Darstellung", rest: "Weiteres", frame: "Rahmen", variables: "Variablen" }, datasource: "Datenquelle", datasourceNote: "Woher dieses Widget seine Werte nimmt. Ohne Datenquelle zeigt es nur, was fest eingestellt ist.", restNote: "Einstellungen, die dieses Widget selbst mitbringt und die sich nicht als Feld beschreiben lassen.", bound: { field: "Feld", group: "Bereich", variable: "Variable", noneBefore: "Kein Feld dieses Widgets hängt an einer Variablen. Über das", noneAfter: "neben einem Feld lässt sich eines binden." }, hint: "Änderungen greifen erst mit „Fertig“", discard: "Verwerfen", done: "Fertig" }, bS = { empty: "keine Widgets" }, yS = { newName: "Neue Seite" }, wS = { views: "Ansicht", recent: "Oft benutzt", storage: "Speicher", empty: { title: "Noch kein Board", text: "Ein Board besteht aus Seiten, auf denen Widgets über deinen Datenquellen liegen. Lege eines an oder öffne einen gespeicherten Arbeitsstand.", create: "Board anlegen", openStored: "Aus Speicher öffnen" }, open: { heading: "Geöffnet", label: "Board {{name}} öffnen", fallbackName: "Board", pages_one: "{{count}} Seite", pages_other: "{{count}} Seiten", widgets_one: "{{count}} Widget", widgets_other: "{{count}} Widgets", action: "Öffnen", note: "Ein Arbeitsstand hält genau ein Board. Ein anderes bekommst du, indem du im Speicher einen anderen Stand öffnest; die Seiten dieses Boards liegen im Bereich „Seiten“." } }, kS = { title: "Speicher", filter: "Stände filtern", nothingFound: "Nichts gefunden", noEntry: "Noch kein Stand", storeCurrent: "Aktuellen Stand ablegen…", noPlaces: "Keine Speicherorte eingerichtet.", entry: { empty: "leer" }, pages_one: "{{count}} Seite", pages_other: "{{count}} Seiten", widgets_one: "{{count}} Widget", widgets_other: "{{count}} Widgets", sources_one: "{{count}} Datenquelle", sources_other: "{{count}} Datenquellen", failure: { read: "Einträge konnten nicht gelesen werden: {{reason}}", load: "Laden fehlgeschlagen: {{reason}}", save: "Speichern fehlgeschlagen: {{reason}}", create: "Anlegen fehlgeschlagen: {{reason}}", remove: "Löschen fehlgeschlagen: {{reason}}" }, create: { title: "Neuen Stand ablegen", in: "in {{place}}", name: "Name", placeholder: "z. B. bodenfeuchte", submit: "Ablegen", hint: "Abgelegt wird der gesamte Arbeitsstand: {{pages}} mit {{widgets}}, dazu Verbindungen, Datenquellen und Variablen." }, loaded: "geladen", load: "Laden", overwrite: "Überschreiben", overwriteLabel: "Aktuellen Arbeitsstand hierhin schreiben", download: "Herunterladen", noBoard: "In diesem Stand liegt kein Board - er enthält nur Verbindungen, Quellen oder Variablen.", reading: "Wird gelesen…", pick: "Wähle links einen Stand, um zu sehen, was darin liegt." }, SS = { name: "Name", type: "Typ", icon: "Symbol", iconHint: "Ohne eigenes Symbol steht hier das des Typs.", tags: "Schlagworte" }, xS = { tagsHint: "Wofür diese Verbindung da ist — danach lässt sich suchen.", types: "Verbindungstypen", create: "Verbindung anlegen", createLead: "Womit soll gesprochen werden? Die Beschreibungen stammen aus den Modellen der Typen.", namePlaceholder: "Wofür diese Verbindung steht", nameHint: "Unter diesem Namen wählst du die Verbindung später aus." }, CS = { otherType: "Anderer Typ", back: "Zurück", create: "Anlegen" }, $S = { label: "{{boards}} · {{widgets}}", boards_one: "{{count}} Board", boards_other: "{{count}} Boards", widgets_one: "{{count}} Widget", widgets_other: "{{count}} Widgets" }, AS = { title: "Verbindungen & Daten", composed: "Zusammengesetzt", loose: "Ohne Verbindung", menu: { edit: "Bearbeiten", addSourceHere: "Datenquelle hier anlegen", preview: "Daten ansehen" }, removeConnection: "Verbindung löschen", removeSource: "Datenquelle löschen", newConnection: "Verbindung anlegen", newSource: "Datenquelle anlegen", findEndpoints: "Endpunkte suchen", search: "Suchen…", nothingFound: "Nichts gefunden.", empty: "Noch keine Verbindung. Lege eine an, um Daten zu lesen.", collapse: "Zuklappen", expand: "Aufklappen", noSources: "Keine Datenquelle an dieser Verbindung.", confirm: { text: "„{{name}}“ wird entfernt. Das lässt sich nicht rückgängig machen.", usage: "Verwendet in {{usage}} — die lesen danach ins Leere." } }, IS = { tagsHint: "Wofür diese Datenquelle da ist — danach lässt sich suchen.", groups: { connected: "Aus einer Verbindung lesen", composed: "Aus vorhandenen Datenquellen zusammensetzen" }, connections: { all: "Verbindungen", suited: "Passend zum Typ", other: "Weitere" }, createLead: "Was für Daten sollen gelesen werden? Die Beschreibungen stammen aus den Modellen der Typen.", namePlaceholder: "Wofür diese Datenquelle steht", nameHint: "Unter diesem Namen wählst du die Datenquelle im Widget aus.", noConnection: "Es gibt noch keine Verbindung. Lege zuerst eine an — ohne sie hat die Datenquelle nichts, woraus sie lesen kann.", nothingSuits: "Keine der vorhandenen Verbindungen ist von diesem Typ vorgesehen. Du kannst trotzdem eine wählen — die Angabe ist ein Hinweis, keine Regel.", connection: "Verbindung", connectionPlaceholder: "Verbindung wählen", connectionHint: "Der Endpunkt, aus dem diese Quelle liest." }, TS = { noModel: "Dieser Typ bringt kein Modell mit — die Felder füllst du nach dem Anlegen im Editor aus.", nothing: "Dieser Typ braucht außer dem Namen nichts weiter." }, ES = { placeholder: "Wort eingeben, Enter" }, RS = { loading: "Layout wird geladen…", noPage: "Die Seite „{{id}}“ gibt es nicht.", noLayout: "Für „{{name}}“ ist kein Layout eingestellt.", noView: "Zu diesem Layout gibt es keine Darstellung.", noEditor: "Zu diesem Layout gibt es keinen Editor.", id: "Layout: {{id}}" }, LS = { title: "Seite einrichten", missing: "Diese Seite ist nicht mehr da. Wähle oben eine andere.", page: "Seite", description: "Beschreibung", iconPlaceholder: "Name eines Material-Icons", layout: "Layout", background: "Hintergrund", color: "Farbe", image: "Bild", imagePlaceholder: "Adresse eines Bildes", size: { label: "Größe", auto: "Auto", cover: "Füllend", contain: "Einpassend" }, repeat: { label: "Wiederholung", none: "Nicht wiederholen", both: "Wiederholen", x: "Waagerecht wiederholen", y: "Senkrecht wiederholen" }, position: { label: "Position", center: "Mitte", top: "Oben", bottom: "Unten", left: "Links", right: "Rechts", topLeft: "Oben links", topRight: "Oben rechts", bottomLeft: "Unten links", bottomRight: "Unten rechts" }, navigation: "Navigation", showInNavigation: "In der Navigation zeigen", id: "Kennung" }, PS = { role: { colorBg: "Grundfläche der App, Editorflächen, Eingabefelder", colorPane: "Panels, Topbar, Aktivitätsleiste, Widgets", colorRaised: "Knöpfe, Tabellenköpfe, Chips, Abzeichen", colorCanvas: "Boardfläche hinter den Widgets", colorDivider: "Panelkanten, Trenner, Tabellenlinien", colorOutline: "Umrisse bedienbarer Dinge", colorFg: "Fließtext und Beschriftungen", colorDim: "Zweitrangiger Text, Kennzahlen, Panelüberschriften", colorAccent: "Auswahl, aktive Zustände, Hauptknopf", colorOnAccent: "Text auf der Akzentfläche", colorBrand: "Daanse-Marke als Text", colorBrandFill: "Daanse-Marke als Fläche", colorOnBrand: "Text auf der Markenfläche", colorOk: "Im Rahmen, verbunden, erfolgreich", colorWarn: "Braucht Aufmerksamkeit", colorErr: "Außerhalb des Rahmens, fehlgeschlagen", colorKw: "Schlüsselwörter", colorMeasure: "Kennzahlen", colorMember: "Elemente", colorFn: "Funktionen", fontSans: "Oberflächenschrift", fontMono: "Zahlen, Namen von Ständen, Code", textXs: "Abzeichen, Zähler, Statuszeile", textSm: "Zweitrangige Oberfläche, Reiter, Tabellen", textBase: "Standard: Baumzeilen, Formulare, Knöpfe", textLg: "Überschriften in Panels, Leerzustände", textXl: "Kennzahlen im Board", radiusXs: "Abzeichen, kleine Knöpfe", radiusSm: "Panels, Karten, Eingabefelder", radiusMd: "Dialoge", radiusLg: "Große Flächen", shadowE1: "Angehoben: Knöpfe, Chips", shadowE2: "Schwebend: Menüs, Einblendungen", shadowE3: "Über allem: Dialoge" }, group: { surfaces: { label: "Flächen", note: "Von hinten nach vorn: der Grund, die Panels darauf, die Dinge darin." }, text: { label: "Text und Akzent", note: "Jede Farbe hier wurde gegen die Fläche gemessen, auf der sie sitzt." }, state: { label: "Zustand", note: "Nur für Zustände. Wer sie dekorativ verbraucht, kann später nichts mehr melden." }, syntax: { label: "MDX-Syntax", note: "Hervorhebung im Abfrage-Editor und in der Workbench." }, type: { label: "Schrift", note: "Zwei Familien: eine für die Oberfläche, eine für alles, was gezählt oder gemessen wird." }, shape: { label: "Form" } } }, VS = { messwarte: { name: "Messwarte", note: "Dunkler Grund, Zahlen als hellstes Element. Für Boards, die stundenlang laufen." }, messwarteHell: { name: "Messwarte hell", note: "Dieselbe Gestaltung auf blassem Grund - für die Stunden am Editor." }, kartenblatt: { name: "Kartenblatt", note: "Papierweiß mit Grünstich, Petrol statt Blau, rechte Winkel. Ein Board als Blatt." }, werkbank: { name: "Werkbank", note: "Warmes Papiergrau, das Daanse-Gold tragend, Blau nur für die Auswahl." }, customized: "{{name}} (angepasst)" }, OS = { tokens: "Tokens", controls: "Elemente", changed_one: "{{count}} Wert geändert", changed_other: "{{count}} Werte geändert", resetAll: "Alle zurücksetzen", copied: "Kopiert", copy: "Als JSON kopieren", lead: "Dieselben Elemente, aus denen die App gebaut ist. Was drüben an Tokens geändert wird, steht hier sofort.", themes: "Themen", colorOf: "Farbe für {{name}}", valueOf: "Wert für {{name}}", reset: "Auf den Wert des Themas zurücksetzen", unchanged: "Unverändert", demo: { sample: "Bodenfeuchte Feld 3", buttons: "Knöpfe", standard: "Standard", disabled: "Gesperrt", busy: "Lädt", small: "Klein", medium: "Mittel", large: "Groß", inputs: "Eingaben", title: "Titel", value: "Messwert", date: "Stichtag", coverage: "Deckung", note: "Notiz", withError: "Mit Fehler", error: "Der Name ist schon vergeben.", switches: "Schalter und Marken", showOnBoard: "Im Board zeigen", autoRefresh: "Automatisch aktualisieren", neutral: "neutral", ok: "im Rahmen", warn: "prüfen", err: "getrennt", divider: "Trenner" } }, DS = { title: "Seiten", of: "in {{board}}", filter: "Seiten filtern", open: "Seite {{name}} öffnen", edit: "Seite {{name}} bearbeiten", usage: "{{count}}× geöffnet · zuletzt {{last}}", startEmpty: "Leer starten", noMatch: "Keine Seite passt zu „{{query}}“." }, WS = { title: "Variablen", lead: "Ein benannter Wert, den Widgets und Datenquellen lesen. Manche gelten überall, manche nur auf einem Board.", create: "Variable anlegen", edit: "Variable bearbeiten", remove: "Variable löschen", none: "Noch keine.", newName: "Variable {{id}}", pageOnlyValue: "nur auf seiner Seite lesbar", confirmRemove: "{{name}} wird entfernt. Widgets, die darauf zeigen, finden sie danach nicht mehr.", reach: { label: "Gilt", global: "Überall", globalLead: "Auf jedem Board lesbar", pageLead: "Nur auf diesem Board", orphan: "Ohne Board", orphanLead: "Das Board dazu gibt es nicht mehr" }, access: { label: "Beschreibbar", externalWritable: "Von außen beschreibbar", pageOnly: "Nur auf seiner Seite", readonly: "Nur lesbar" } }, BS = { preview: "Vorschau", pick: "Wähle links eine Verbindung oder eine Datenquelle.", usedIn: "Verwendet in {{usage}}", view: "Ansicht der Auswahl" }, MS = { variables: "Variablen" }, US = {
  Rail: vS,
  Header: mS,
  WidgetSettings: _S,
  Floorplan: bS,
  Page: yS,
  Boards: wS,
  Storage: kS,
  Editor: SS,
  Connection: xS,
  Wizard: CS,
  Usage: $S,
  Tree: AS,
  Datasource: IS,
  ModelFields: TS,
  Tags: ES,
  Layout: RS,
  PageSettings: LS,
  Tokens: PS,
  Themes: VS,
  Appearance: OS,
  Pages: DS,
  Variables: WS,
  Data: BS,
  Nav: MS
}, NS = { areas: "Areas", board: "Board", pages: "Pages", data: "Connections & data" }, FS = { brand: "Daanse Board", crumb: { label: "Path", boards: "Boards", board: "Board", edit: "Edit", pages: "Pages", data: "Connections & data", config: "Configuration", storage: "Storage", test: "Test", events: "Events" }, page: { fallbackName: "Page", confirmRemove: "Delete page “{{name}}”? This cannot be undone.", switch: "Switch page", remove: "Delete page “{{name}}”", add: "+ New page" }, undo: "Undo", undoWhat: "Undo: {{what}}", undoLabel: "Undo the last change", redo: "Redo", redoWhat: "Redo: {{what}}", redoLabel: "Redo the undone change", snap: "Snap to grid", snapLabel: "Snap widgets to the grid", backdrop: "Show page background", backdropLabel: "Show or hide the page background while editing", palette: "Widgets", paletteLabel: "Show or hide the widget palette", pageSettings: "Page settings", storage: "Save", storageLabel: "Save or load the workspace", mode: "Mode", view: "View", edit: "Edit", language: "Language", appearance: "Appearance", signedIn: "Signed in" }, zS = { title: "Widget settings", widget: "Widget", section: "Section {{n}}", boardSize: "{{width}} × {{height}} px, as on the board", boardSizeUnknown: "Board size not known", previewSize: "Preview size", sizeBoard: "Board size", sizeFill: "Fill", stretched: "Stretched to the area", sideWidth: "Width of the settings", settings: "Settings", tabs: { data: "Data", look: "Appearance", rest: "More", frame: "Frame", variables: "Variables" }, datasource: "Data source", datasourceNote: "Where this widget takes its values from. Without a data source it shows only what is set here.", restNote: "Settings this widget brings itself and that cannot be described as a field.", bound: { field: "Field", group: "Area", variable: "Variable", noneBefore: "No field of this widget is bound to a variable. Use the", noneAfter: "next to a field to bind one." }, hint: "Changes apply only with “Done”", discard: "Discard", done: "Done" }, HS = { empty: "no widgets" }, qS = { newName: "New page" }, KS = { views: "View", recent: "Often used", storage: "Storage", empty: { title: "No board yet", text: "A board is made of pages on which widgets sit over your data sources. Create one or open a saved workspace.", create: "Create board", openStored: "Open from storage" }, open: { heading: "Open", label: "Open board {{name}}", fallbackName: "Board", pages_one: "{{count}} page", pages_other: "{{count}} pages", widgets_one: "{{count}} widget", widgets_other: "{{count}} widgets", action: "Open", note: "A workspace holds exactly one board. To get another one, open a different workspace from storage; the pages of this board are in the “Pages” area." } }, GS = { title: "Storage", filter: "Filter workspaces", nothingFound: "Nothing found", noEntry: "No workspace yet", storeCurrent: "Store current workspace…", noPlaces: "No storage locations set up.", entry: { empty: "empty" }, pages_one: "{{count}} page", pages_other: "{{count}} pages", widgets_one: "{{count}} widget", widgets_other: "{{count}} widgets", sources_one: "{{count}} data source", sources_other: "{{count}} data sources", failure: { read: "Entries could not be read: {{reason}}", load: "Loading failed: {{reason}}", save: "Saving failed: {{reason}}", create: "Creating failed: {{reason}}", remove: "Deleting failed: {{reason}}" }, create: { title: "Store a new workspace", in: "in {{place}}", name: "Name", placeholder: "e.g. soil-moisture", submit: "Store", hint: "The whole workspace is stored: {{pages}} with {{widgets}}, plus connections, data sources and variables." }, loaded: "loaded", load: "Load", overwrite: "Overwrite", overwriteLabel: "Write the current workspace here", download: "Download", noBoard: "This workspace holds no board - only connections, sources or variables.", reading: "Reading…", pick: "Pick a workspace on the left to see what it holds." }, YS = { name: "Name", type: "Type", icon: "Icon", iconHint: "Without an icon of its own, the type's icon is shown here.", tags: "Tags" }, ZS = { tagsHint: "What this connection is for — you can search by it.", types: "Connection types", create: "Create connection", createLead: "What should be talked to? The descriptions come from the types' models.", namePlaceholder: "What this connection stands for", nameHint: "You pick the connection by this name later." }, XS = { otherType: "Other type", back: "Back", create: "Create" }, JS = { label: "{{boards}} · {{widgets}}", boards_one: "{{count}} board", boards_other: "{{count}} boards", widgets_one: "{{count}} widget", widgets_other: "{{count}} widgets" }, QS = { title: "Connections & data", composed: "Composed", loose: "Without connection", menu: { edit: "Edit", addSourceHere: "Create data source here", preview: "View data" }, removeConnection: "Delete connection", removeSource: "Delete data source", newConnection: "Create connection", newSource: "Create data source", findEndpoints: "Find endpoints", search: "Search…", nothingFound: "Nothing found.", empty: "No connection yet. Create one to read data.", collapse: "Collapse", expand: "Expand", noSources: "No data source on this connection.", confirm: { text: "“{{name}}” will be removed. This cannot be undone.", usage: "Used in {{usage}} — they will read nothing afterwards." } }, jS = { tagsHint: "What this data source is for — you can search by it.", groups: { connected: "Read from a connection", composed: "Compose from existing data sources" }, connections: { all: "Connections", suited: "Suited to the type", other: "Other" }, createLead: "What kind of data should be read? The descriptions come from the types' models.", namePlaceholder: "What this data source stands for", nameHint: "You pick the data source in the widget by this name.", noConnection: "There is no connection yet. Create one first — without it the data source has nothing to read from.", nothingSuits: "None of the existing connections is intended for this type. You can still pick one — this is a hint, not a rule.", connection: "Connection", connectionPlaceholder: "Choose a connection", connectionHint: "The endpoint this source reads from." }, ex = { noModel: "This type brings no model — you fill in the fields in the editor after creating it.", nothing: "This type needs nothing but a name." }, tx = { placeholder: "Type a word, Enter" }, nx = { loading: "Loading layout…", noPage: "The page “{{id}}” does not exist.", noLayout: "No layout is set for “{{name}}”.", noView: "This layout has no view.", noEditor: "This layout has no editor.", id: "Layout: {{id}}" }, ox = { title: "Page settings", missing: "This page is gone. Pick another one above.", page: "Page", description: "Description", iconPlaceholder: "Name of a Material icon", layout: "Layout", background: "Background", color: "Colour", image: "Image", imagePlaceholder: "Address of an image", size: { label: "Size", auto: "Auto", cover: "Cover", contain: "Contain" }, repeat: { label: "Repeat", none: "Do not repeat", both: "Repeat", x: "Repeat horizontally", y: "Repeat vertically" }, position: { label: "Position", center: "Centre", top: "Top", bottom: "Bottom", left: "Left", right: "Right", topLeft: "Top left", topRight: "Top right", bottomLeft: "Bottom left", bottomRight: "Bottom right" }, navigation: "Navigation", showInNavigation: "Show in navigation", id: "Identifier" }, ax = { role: { colorBg: "App ground, editor areas, input fields", colorPane: "Panels, top bar, activity rail, widgets", colorRaised: "Buttons, table headers, chips, badges", colorCanvas: "Board area behind the widgets", colorDivider: "Panel edges, dividers, table lines", colorOutline: "Outlines of things you can operate", colorFg: "Body text and labels", colorDim: "Secondary text, measures, panel headings", colorAccent: "Selection, active states, main button", colorOnAccent: "Text on the accent area", colorBrand: "Daanse brand as text", colorBrandFill: "Daanse brand as area", colorOnBrand: "Text on the brand area", colorOk: "Within range, connected, successful", colorWarn: "Needs attention", colorErr: "Out of range, failed", colorKw: "Keywords", colorMeasure: "Measures", colorMember: "Members", colorFn: "Functions", fontSans: "Interface font", fontMono: "Numbers, workspace names, code", textXs: "Badges, counters, status line", textSm: "Secondary interface, tabs, tables", textBase: "Default: tree rows, forms, buttons", textLg: "Panel headings, empty states", textXl: "Measures on the board", radiusXs: "Badges, small buttons", radiusSm: "Panels, cards, input fields", radiusMd: "Dialogs", radiusLg: "Large areas", shadowE1: "Raised: buttons, chips", shadowE2: "Floating: menus, popovers", shadowE3: "Above everything: dialogs" }, group: { surfaces: { label: "Surfaces", note: "From back to front: the ground, the panels on it, the things in them." }, text: { label: "Text and accent", note: "Every colour here was measured against the surface it sits on." }, state: { label: "State", note: "For states only. Whoever uses them for decoration has nothing left to report with later." }, syntax: { label: "MDX syntax", note: "Highlighting in the query editor and in the workbench." }, type: { label: "Type", note: "Two families: one for the interface, one for everything counted or measured." }, shape: { label: "Shape" } } }, rx = { messwarte: { name: "Control room", note: "Dark ground, numbers as the brightest element. For boards that run for hours." }, messwarteHell: { name: "Control room light", note: "The same design on a pale ground - for the hours at the editor." }, kartenblatt: { name: "Map sheet", note: "Paper white with a green tint, petrol instead of blue, right angles. A board as a sheet." }, werkbank: { name: "Workbench", note: "Warm paper grey carrying the Daanse gold, blue only for the selection." }, customized: "{{name}} (customised)" }, ix = { tokens: "Tokens", controls: "Controls", changed_one: "{{count}} value changed", changed_other: "{{count}} values changed", resetAll: "Reset all", copied: "Copied", copy: "Copy as JSON", lead: "The same controls the app is built from. Whatever is changed in the tokens shows here at once.", themes: "Themes", colorOf: "Colour for {{name}}", valueOf: "Value for {{name}}", reset: "Reset to the theme's value", unchanged: "Unchanged", demo: { sample: "Soil moisture field 3", buttons: "Buttons", standard: "Default", disabled: "Disabled", busy: "Loading", small: "Small", medium: "Medium", large: "Large", inputs: "Inputs", title: "Title", value: "Reading", date: "Reference date", coverage: "Coverage", note: "Note", withError: "With error", error: "This name is already taken.", switches: "Switches and chips", showOnBoard: "Show on board", autoRefresh: "Refresh automatically", neutral: "neutral", ok: "within range", warn: "check", err: "disconnected", divider: "Divider" } }, sx = { title: "Pages", of: "in {{board}}", filter: "Filter pages", open: "Open page {{name}}", edit: "Edit page {{name}}", usage: "opened {{count}}× · last {{last}}", startEmpty: "Start empty", noMatch: "No page matches “{{query}}”." }, lx = { title: "Variables", lead: "A named value that widgets and data sources read. Some apply everywhere, some only on one board.", create: "Create variable", edit: "Edit variable", remove: "Delete variable", none: "None yet.", newName: "Variable {{id}}", pageOnlyValue: "readable only on its page", confirmRemove: "{{name}} will be removed. Widgets pointing at it will not find it afterwards.", reach: { label: "Applies", global: "Everywhere", globalLead: "Readable on every board", pageLead: "Only on this board", orphan: "Without board", orphanLead: "Its board no longer exists" }, access: { label: "Writable", externalWritable: "Writable from outside", pageOnly: "Only on its page", readonly: "Read-only" } }, ux = { preview: "Preview", pick: "Pick a connection or a data source on the left.", usedIn: "Used in {{usage}}", view: "View of the selection" }, cx = { variables: "Variables" }, dx = {
  Rail: NS,
  Header: FS,
  WidgetSettings: zS,
  Floorplan: HS,
  Page: qS,
  Boards: KS,
  Storage: GS,
  Editor: YS,
  Connection: ZS,
  Wizard: XS,
  Usage: JS,
  Tree: QS,
  Datasource: jS,
  ModelFields: ex,
  Tags: tx,
  Layout: nx,
  PageSettings: ox,
  Tokens: ax,
  Themes: rx,
  Appearance: ix,
  Pages: sx,
  Variables: lx,
  Data: ux,
  Nav: cx
};
var fx = Object.getOwnPropertyDescriptor, gx = (h, m, i, p) => {
  for (var u = p > 1 ? void 0 : p ? fx(m, i) : m, S = h.length - 1, w; S >= 0; S--)
    (w = h[S]) && (u = w(u) || u);
  return u;
};
const Lu = "shell";
let tu = class {
  namespace = Lu;
  resources = {
    de: US,
    en: dx
  };
};
tu = gx([
  l_({
    service: ["Translations"],
    properties: { "i18n.namespace": Lu }
  })
], tu);
let pn;
async function Bx({ services: h, log: m }) {
  eb(), m_(), k_(), pn = Sm(pb), pn.use(eo), pn.provide("codeEditorType", "monaco");
  const i = h, p = (R) => {
    const K = h.get(R);
    pn?.provide(R, K), pn?.provide(Symbol.for(R), K);
  };
  for (const R of h.getServiceIds()) p(R);
  i.addListener?.({ onServiceEvent: (R) => p(R.serviceId) }), h.register(hm, pn);
  const u = h.getRequired(Jm), S = h.getRequired(Qm);
  if (u.getConnections().length === 0) {
    const R = u.createConnection("");
    R.uid = "test", R.name = "Test Connection 01", R.type = "rest", R.config = { url: "https://jsonplaceholder.typicode.com/" }, u.saveConnection(R);
    const K = S.createDatasource("");
    K.uid = "test_ds", K.name = "Test DataSource 01", K.type = "rest", K.connection = R, K.config = { resourceUrl: "posts" }, S.saveDatasource(K);
  }
  h.getRequired(mm).registerWrapperType({
    type: Pm,
    create: (R) => new Lm(R)
  });
  const w = h.getRequired(ru), _ = new Kl();
  _.path = "/configuration", _.name = "config", _.component = kk, w.registerRoute(_);
  const k = new Kl();
  k.path = "/appearance", k.name = "appearance", k.component = lS, w.registerRoute(k);
  const A = h.getRequired(au), d = new Cm();
  d.id = "config", d.label = "shell:Nav.variables", d.icon = "settings", d.route = "/configuration", d.routeName = "config", d.order = 10, d.visible = !0, A.registerNavigationItem(d);
  const g = w;
  for (const R of g.getAllRoutesArray?.() ?? [])
    eo.addRoute({
      path: R.path,
      name: R.name,
      component: R.component,
      ...R.meta ? { meta: R.meta } : {}
    });
  const I = window.location.pathname + window.location.search + window.location.hash;
  eo.resolve(I).matched.length && eo.currentRoute.value.fullPath !== I && eo.replace(I);
  try {
    await cS(
      eo,
      h.getRequired(Hl),
      h.getRequired(nu)
    ), m.info("system actions registered");
  } catch (R) {
    m.error("system actions failed", R);
  }
  try {
    await hS(h.getRequired(Hl)), m.info("test actions registered");
  } catch (R) {
    m.error("test actions failed", R);
  }
  pn.mount("#app"), m.info("shell mounted");
}
function Mx({ services: h }) {
  const m = h.getRequired(ru);
  m.unregisterRoute("config"), m.unregisterRoute("save");
  const i = h.getRequired(au);
  i.unregisterNavigationItem("config"), i.unregisterNavigationItem("save"), pn?.unmount(), pn = void 0;
}
export {
  tu as ShellTranslations,
  Bx as activate,
  Mx as deactivate
};
