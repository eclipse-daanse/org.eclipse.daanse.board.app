(function(){var i="app.shell",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="@import\"https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap\";.topbar[data-v-b0469dc0]{height:var(--spacing-topbar, 42px);flex:none;display:flex;align-items:center;gap:12px;padding:0 12px;background:var(--color-pane);border-bottom:1px solid var(--color-divider);color:var(--color-fg);font-size:var(--text-sm, 12px)}.brand[data-v-b0469dc0]{display:flex;align-items:center;gap:8px;flex:none;white-space:nowrap;font-weight:600;font-size:var(--text-base, 13px)}.brand-mark[data-v-b0469dc0]{width:20px;height:20px;border-radius:var(--radius-sm, 5px);background:var(--color-brandFill);color:var(--color-onBrand);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;flex:none}.crumb[data-v-b0469dc0]{display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden;white-space:nowrap;color:var(--color-dim)}.crumb-part[data-v-b0469dc0]{overflow:hidden;text-overflow:ellipsis}.crumb-part.current[data-v-b0469dc0]{color:var(--color-fg);font-weight:500}.crumb-link[data-v-b0469dc0]{padding:0;font:inherit;color:inherit;background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.crumb-link[data-v-b0469dc0]:hover{color:var(--color-fg);text-decoration:underline}.crumb-link[data-v-b0469dc0]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.crumb-sep[data-v-b0469dc0]{color:var(--color-outline)}.spacer[data-v-b0469dc0]{flex:1 1 auto;min-width:8px}.pages[data-v-b0469dc0]{position:relative;margin-left:10px;flex:none}.pages__current[data-v-b0469dc0]{display:flex;align-items:center;gap:5px;max-width:200px;height:24px;padding:0 7px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background:none;border:1px solid transparent;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__current[data-v-b0469dc0]:hover{background-color:var(--color-raised);border-color:var(--color-divider)}.pages__current[data-v-b0469dc0]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.pages__name[data-v-b0469dc0]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__caret[data-v-b0469dc0]{font-size:9px;color:var(--color-dim)}.pages__menu[data-v-b0469dc0]{position:absolute;top:calc(100% + 3px);left:0;z-index:400;min-width:180px;max-height:60vh;overflow-y:auto;padding:3px;margin:0;list-style:none;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 3px);box-shadow:var(--shadow-e2, 0 2px 8px rgb(0 0 0 / 14%))}.pages__item[data-v-b0469dc0]{display:block;width:100%;padding:5px 8px;font-size:var(--text-sm, 12px);font-family:inherit;text-align:left;color:var(--color-fg);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__item[data-v-b0469dc0]:hover{background-color:var(--color-raised)}.pages__line[data-v-b0469dc0]{display:flex;align-items:center;gap:2px}.pages__line .pages__item[data-v-b0469dc0]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__remove[data-v-b0469dc0]{flex:none;width:20px;height:20px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer;opacity:0;transition:opacity 90ms ease,color 90ms ease}.pages__line:hover .pages__remove[data-v-b0469dc0],.pages__remove[data-v-b0469dc0]:focus-visible{opacity:1}.pages__remove[data-v-b0469dc0]:hover{color:var(--color-err)}.pages__sep[data-v-b0469dc0]{height:1px;margin:3px 0;background-color:var(--color-divider)}.pages__add[data-v-b0469dc0],.pages__item.on[data-v-b0469dc0]{color:var(--color-accent)}.pages__empty[data-v-b0469dc0]{padding:5px 8px;font-size:var(--text-sm, 12px);color:var(--color-dim)}.action[data-v-b0469dc0]{height:24px;padding:0 10px;margin-right:8px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs, 3px);cursor:pointer}.action[data-v-b0469dc0]:hover{border-color:var(--color-outline)}.action[data-v-b0469dc0]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.modes[data-v-b0469dc0]{display:inline-flex;border:1px solid var(--color-outline);border-radius:var(--radius-sm, 5px);overflow:hidden;flex:none}.mode[data-v-b0469dc0]{font:inherit;padding:4px 11px;border:0;background:var(--color-raised);color:var(--color-dim);cursor:pointer;white-space:nowrap}.mode[data-v-b0469dc0]:hover{color:var(--color-fg)}.mode.on[data-v-b0469dc0]{background:var(--color-accent);color:var(--color-onAccent);font-weight:600}.mode[data-v-b0469dc0]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.icon-action[data-v-b0469dc0]{display:grid;place-items:center;width:24px;height:24px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.icon-action[data-v-b0469dc0]:hover{color:var(--color-fg);background-color:var(--color-raised)}.icon-action.on[data-v-b0469dc0]{color:var(--color-accent);background-color:var(--color-raised)}.icon-action[data-v-b0469dc0]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.avatar[data-v-b0469dc0]{width:24px;height:24px;border-radius:50%;background:var(--color-raised);border:1px solid var(--color-outline);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;color:var(--color-dim);flex:none}.shell[data-v-27fec35c]{display:flex;flex-direction:column;height:100%;width:100%;min-height:0;background:var(--color-bg)}.shell-body[data-v-27fec35c]{flex:1 1 auto;display:grid;grid-template-columns:var(--spacing-rail, 52px) minmax(0,1fr);min-height:0;overflow:hidden}.shell-body--norail[data-v-27fec35c]{grid-template-columns:minmax(0,1fr)}.rail[data-v-27fec35c]{background:var(--color-pane);border-right:1px solid var(--color-divider);display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:4px;overflow:hidden}.rail-spacer[data-v-27fec35c]{flex:1 1 auto}.ri[data-v-27fec35c]{position:relative;width:36px;height:36px;flex:none;border:0;border-radius:var(--radius-md, 8px);background:transparent;color:var(--color-dim);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .14s cubic-bezier(.2,.6,.2,1),color .14s cubic-bezier(.2,.6,.2,1)}.ri[data-v-27fec35c]:hover{color:var(--color-fg);background:color-mix(in srgb,var(--color-accent) 10%,transparent)}.ri.on[data-v-27fec35c]{background:color-mix(in srgb,var(--color-accent) 14%,transparent);color:var(--color-accent)}.ri.on[data-v-27fec35c]:before{content:\"\";position:absolute;left:-8px;top:8px;bottom:8px;width:3px;border-radius:var(--radius-xs, 3px);background:var(--color-accent)}.ri[data-v-27fec35c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.ri[data-v-27fec35c] .icon{font-size:20px}.sr-only[data-v-27fec35c]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.content[data-v-27fec35c]{min-width:0;min-height:0;overflow:hidden;display:flex;flex-direction:column}@media(prefers-reduced-motion:reduce){.ri[data-v-27fec35c]{transition-duration:.01ms}}.global-loading-bar[data-v-27fec35c]{position:fixed;top:0;left:0;right:0;height:3px;z-index:8000;overflow:hidden}.global-loading-bar-progress[data-v-27fec35c]{height:100%;width:30%;background:var(--color-brandFill);animation:loading-slide-27fec35c 1.2s ease-in-out infinite}@keyframes loading-slide-27fec35c{0%{transform:translate(-100%)}to{transform:translate(400%)}}/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:\"Barlow\",system-ui,-apple-system,\"Segoe UI\",sans-serif;--font-mono:\"JetBrains Mono\",ui-monospace,SFMono-Regular,Menlo,monospace;--color-red-500:oklch(63.7% .237 25.331);--color-green-500:oklch(72.3% .219 149.579);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--text-xs:11px;--text-xs--line-height:calc(1/.75);--text-sm:12px;--text-sm--line-height:calc(1.25/.875);--text-base:13px;--text-base--line-height: 1.5 ;--text-lg:15px;--text-lg--line-height:calc(1.75/1.125);--text-xl:24px;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-xs:2px;--radius-sm:3px;--radius-md:4px;--radius-lg:6px;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-bg:#121820;--color-pane:#1a222c;--color-raised:#232d39;--color-canvas:#0e141b;--color-divider:#2a3541;--color-outline:#3c4959;--color-fg:#dfe8ef;--color-dim:#8b9bab;--color-accent:#4fa3d1;--color-onAccent:#08131c;--color-brand:#d8a13c;--color-brandFill:#d8a13c;--color-onBrand:#14100a;--color-ok:#5fb98a;--color-warn:#d8a13c;--color-err:#e2766a;--color-kw:#4fa3d1;--color-measure:#d8a13c;--color-member:#5fb98a;--color-fn:#c294d8;--color-primary:#4fa3d1;--color-secondary:#8b9bab;--color-success:#5fb98a;--color-info:#4fa3d1;--color-danger:#e2766a;--color-warning:#d8a13c;--color-backgroundPrimary:#121820;--color-backgroundSecondary:#1a222c;--color-backgroundElement:#232d39;--color-backgroundBorder:#2a3541;--color-textPrimary:#dfe8ef;--color-textInverted:#08131c;--color-daanse_blue:#4fa3d1;--color-daanse_grey:#dfe8ef;--shadow-e1:0 1px 2px #00000073;--shadow-e2:0 2px 8px #00000073;--shadow-e3:0 8px 24px #00000080;--spacing-topbar:42px;--spacing-rail:52px;--spacing-panelHeader:30px;--spacing-splitter:4px;--spacing-statusbar:24px}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{.ice_gray{padding:var(--spacing-6);background:var(--color-pane);border-right:1px solid var(--color-divider);box-shadow:var(--shadow-e1)}.ice{padding:var(--spacing-6);background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md);box-shadow:var(--shadow-e2)}.z-mx{z-index:30000}}@layer utilities{.\\@container{container-type:inline-size}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.top-\\[-25px\\]{top:-25px}.right-0{right:calc(var(--spacing)*0)}.isolate{isolation:isolate}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.row-span-1{grid-row:span 1/span 1}.row-span-4{grid-row:span 4/span 4}.float-left{float:left}.float-right{float:right}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-2{margin:calc(var(--spacing)*2)}.mx-3{margin-inline:calc(var(--spacing)*3)}.my-3{margin-block:calc(var(--spacing)*3)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-6{margin-right:calc(var(--spacing)*6)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-15{margin-left:calc(var(--spacing)*15)}.ml-auto{margin-left:auto}.box-border{box-sizing:border-box}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.table-cell{display:table-cell}.h-3{height:calc(var(--spacing)*3)}.h-40{height:calc(var(--spacing)*40)}.h-84{height:calc(var(--spacing)*84)}.h-120{height:calc(var(--spacing)*120)}.h-full{height:100%}.max-h-screen{max-height:100vh}.w-1{width:calc(var(--spacing)*1)}.w-3{width:calc(var(--spacing)*3)}.w-20{width:calc(var(--spacing)*20)}.w-full{width:100%}.max-w-xs{max-width:var(--container-xs)}.flex-1{flex:1}.flex-shrink,.shrink{flex-shrink:1}.flex-grow,.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-green-500{background-color:var(--color-green-500)}.bg-pane{background-color:var(--color-pane)}.bg-red-500{background-color:var(--color-red-500)}.bg-white{background-color:var(--color-white)}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.object-fill{object-fit:fill}.object-scale-down{object-fit:scale-down}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.pl-6{padding-left:calc(var(--spacing)*6)}.pl-18{padding-left:calc(var(--spacing)*18)}.text-center{text-align:center}.text-justify{text-align:justify}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-wrap{text-wrap:wrap}.text-black{color:var(--color-black)}.text-dim{color:var(--color-dim)}.text-gray-500{color:var(--color-gray-500)}.text-green-500{color:var(--color-green-500)}.text-red-500{color:var(--color-red-500)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.line-through{text-decoration-line:line-through}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e1{--tw-shadow:0 1px 2px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e2{--tw-shadow:0 2px 8px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e3{--tw-shadow:0 8px 24px var(--tw-shadow-color,#00000080);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}}:root[data-theme=light]{--color-bg:#eef1f4;--color-pane:#f7f9fb;--color-raised:#fff;--color-canvas:#e2e7ec;--color-divider:#d3dae1;--color-outline:#b3bec9;--color-fg:#16202a;--color-dim:#55646f;--color-accent:#1f6690;--color-onAccent:#fff;--color-brand:#8a6206;--color-brandFill:#c08a10;--color-onBrand:#14100a;--color-ok:#1f6f4a;--color-warn:#8a5a0c;--color-err:#b02a1c;--color-kw:#1f6690;--color-measure:#8a5a0c;--color-member:#1f6f4a;--color-fn:#7b3fa0;--color-primary:#1f6690;--color-secondary:#55646f;--color-success:#1f6f4a;--color-info:#1f6690;--color-danger:#b02a1c;--color-warning:#8a5a0c;--color-backgroundPrimary:#eef1f4;--color-backgroundSecondary:#f7f9fb;--color-backgroundElement:#fff;--color-backgroundBorder:#d3dae1;--color-textPrimary:#16202a;--color-textInverted:#fff;--color-daanse_blue:#1f6690;--color-daanse_grey:#16202a;--shadow-e1:0 1px 2px #16202a24;--shadow-e2:0 2px 8px #16202a24;--shadow-e3:0 8px 24px #16202a24}:root{--mdxwb-bg:var(--color-bg);--mdxwb-pane:var(--color-pane);--mdxwb-raised:var(--color-raised);--mdxwb-border:var(--color-divider);--mdxwb-outline:var(--color-outline);--mdxwb-fg:var(--color-fg);--mdxwb-dim:var(--color-dim);--mdxwb-accent:var(--color-accent);--mdxwb-on-accent:var(--color-onAccent);--mdxwb-ok:var(--color-ok);--mdxwb-warn:var(--color-warn);--mdxwb-err:var(--color-err);--mdxwb-kw:var(--color-kw);--mdxwb-measure:var(--color-measure);--mdxwb-member:var(--color-member);--mdxwb-fn:var(--color-fn)}body{font-family:var(--font-sans);font-optical-sizing:auto;font-weight:400;font-size:var(--text-base);font-variation-settings:\"wdth\" 100;background:var(--color-bg);color:var(--color-fg);font-style:normal;--moveable-color:var(--color-outline)!important}table{font-variant-numeric:tabular-nums}.rCS1w3zcxh{--moveable-color:var(--color-outline)!important}.rCS1w3zcxh .moveable-line{transform-origin:0;width:1px;height:1px;border-bottom:2px dashed var(--color-outline)!important;background:0 0!important}@keyframes spin{to{transform:rotate(360deg)}}*{scrollbar-width:thin;scrollbar-color:var(--color-outline)transparent}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background-color:var(--color-outline);background-clip:padding-box;border:3px solid #0000;border-radius:6px}::-webkit-scrollbar-thumb:hover{background-color:var(--color-dim)}::-webkit-scrollbar-corner{background:0 0}.resize-observer[data-v-b329ee4c]{z-index:-1;pointer-events:none;opacity:0;background-color:#0000;border:none;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.resize-observer[data-v-b329ee4c] object{pointer-events:none;z-index:-1;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.v-popper__popper{z-index:10000;outline:none;top:0;left:0}.v-popper__popper.v-popper__popper--hidden{visibility:hidden;opacity:0;pointer-events:none;transition:opacity .15s,visibility .15s}.v-popper__popper.v-popper__popper--shown{visibility:visible;opacity:1;transition:opacity .15s}.v-popper__popper.v-popper__popper--skip-transition,.v-popper__popper.v-popper__popper--skip-transition>.v-popper__wrapper{transition:none!important}.v-popper__backdrop{width:100%;height:100%;display:none;position:absolute;top:0;left:0}.v-popper__inner{box-sizing:border-box;position:relative;overflow-y:auto}.v-popper__inner>div{z-index:1;max-width:inherit;max-height:inherit;position:relative}.v-popper__arrow-container{width:10px;height:10px;position:absolute}.v-popper__popper--arrow-overflow .v-popper__arrow-container,.v-popper__popper--no-positioning .v-popper__arrow-container{display:none}.v-popper__arrow-inner,.v-popper__arrow-outer{border-style:solid;width:0;height:0;position:absolute;top:0;left:0}.v-popper__arrow-inner{visibility:hidden;border-width:7px}.v-popper__arrow-outer{border-width:6px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{left:-2px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{left:-1px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer{border-bottom-width:0;border-bottom-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:0}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{border-top-width:0;border-top-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{top:-4px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{top:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{top:-1px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{border-left-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-left-color:#0000!important}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{left:-4px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{left:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer{border-right-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner{left:-2px}.v-popper--theme-tooltip .v-popper__inner{color:#fff;background:#000c;border-radius:6px;padding:7px 12px 6px}.v-popper--theme-tooltip .v-popper__arrow-outer{border-color:#000c}.v-popper--theme-dropdown .v-popper__inner{color:#000;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 6px 30px #0000001a}.v-popper--theme-dropdown .v-popper__arrow-inner{visibility:visible;border-color:#fff}.v-popper--theme-dropdown .v-popper__arrow-outer{border-color:#ddd}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}.layout-renderer[data-v-25384df1],.layout-renderer .edit-component-wrapper[data-v-25384df1],.layout-renderer .view-component-wrapper[data-v-25384df1]{width:100%;height:100%}.layout-renderer .spinner[data-v-25384df1]{width:22px;height:22px;border:2px solid var(--color-divider);border-top-color:var(--color-accent);border-radius:50%;animation:layout-spin .7s linear infinite}.layout-renderer .no-layout-message[data-v-25384df1],.layout-renderer .loading-state[data-v-25384df1]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;gap:1rem}.layout-renderer .no-layout-message__text[data-v-25384df1]{display:flex;align-items:flex-start;gap:9px;margin:0;font-family:var(--font-sans);font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}@keyframes layout-spin{to{transform:rotate(360deg)}}.floorplan[data-v-0eecd73b]{position:relative;aspect-ratio:16 / 9;background-color:var(--color-bg);border-bottom:1px solid var(--color-divider);overflow:hidden}.floorplan__block[data-v-0eecd73b]{position:absolute;margin:2px 0 0 2px;border-radius:2px;border:1px solid color-mix(in srgb,currentColor 70%,transparent);background-color:color-mix(in srgb,currentColor 14%,transparent)}.floorplan__block--data[data-v-0eecd73b]{color:var(--color-accent)}.floorplan__block--visual[data-v-0eecd73b]{color:var(--color-brand)}.floorplan__block--text[data-v-0eecd73b]{color:var(--color-dim)}.floorplan__empty[data-v-0eecd73b]{position:absolute;inset:0;display:grid;place-items:center;font-size:var(--text-xs);color:var(--color-dim)}.storage[data-v-82d034f3]{display:grid;grid-template-columns:280px minmax(0,1fr);flex:1 1 auto;min-height:0;background-color:var(--color-pane);overflow:hidden}.tree[data-v-82d034f3]{display:flex;flex-direction:column;min-height:0;border-right:1px solid var(--color-divider)}.tree__search[data-v-82d034f3]{margin:8px;height:26px;padding:0 8px;font-size:var(--text-sm);font-family:inherit;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.tree__body[data-v-82d034f3]{flex:1 1 auto;min-height:0;padding:0 4px 8px;overflow-y:auto}.row[data-v-82d034f3]{display:flex;align-items:baseline;flex-wrap:nowrap;gap:6px;width:100%;padding:4px 6px;font-family:inherit;font-size:var(--text-base);color:var(--color-fg);text-align:left;background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.row[data-v-82d034f3]:hover{background-color:var(--color-raised)}.row.on[data-v-82d034f3]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);box-shadow:inset 2px 0 0 var(--color-accent)}.row--place[data-v-82d034f3]{font-weight:600}.row--entry[data-v-82d034f3]{padding-left:22px;font-family:var(--font-mono);font-size:var(--text-sm)}.row--hint[data-v-82d034f3]{padding-left:22px;margin:0;color:var(--color-dim);font-size:var(--text-sm);cursor:default}.row--add[data-v-82d034f3]{color:var(--color-dim);font-size:var(--text-sm)}.row__twist[data-v-82d034f3]{width:12px;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__name[data-v-82d034f3]{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__meta[data-v-82d034f3]{margin-left:auto;padding-left:8px;flex:none;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);color:var(--color-dim)}.row__dot[data-v-82d034f3]{width:5px;height:5px;flex:none;border-radius:50%;background-color:transparent}.row__dot.open[data-v-82d034f3]{background-color:var(--color-accent)}.detail[data-v-82d034f3]{display:flex;flex-direction:column;min-width:0;min-height:0;background-color:var(--color-bg);overflow-y:auto}.detail__head[data-v-82d034f3]{display:flex;align-items:center;gap:8px;padding:7px 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.detail__name[data-v-82d034f3]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.detail__facts[data-v-82d034f3]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.detail__spacer[data-v-82d034f3]{flex:1 1 auto}.detail__badge[data-v-82d034f3]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent);border-radius:var(--radius-xs)}.detail__hint[data-v-82d034f3]{display:grid;place-items:center;flex:1 1 auto;margin:0;padding:24px;font-size:var(--text-sm);color:var(--color-dim);text-align:center}.detail__failure[data-v-82d034f3]{margin:12px 12px 0;padding:8px 10px;font-size:var(--text-sm);color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 10%,transparent);border-radius:var(--radius-xs)}.boards[data-v-82d034f3]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;padding:12px}.board[data-v-82d034f3]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.board__text[data-v-82d034f3]{padding:8px 10px}.board__name[data-v-82d034f3]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__facts[data-v-82d034f3]{margin:2px 0 0;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.board__kinds[data-v-82d034f3]{margin:4px 0 0;font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.create[data-v-82d034f3]{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:16px}.create__label[data-v-82d034f3]{font-size:var(--text-sm);color:var(--color-dim)}.create__input[data-v-82d034f3]{height:26px;min-width:220px;padding:0 8px;font-size:var(--text-base);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.create__hint[data-v-82d034f3]{flex:1 0 100%;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.row[data-v-82d034f3]:focus-visible,.tree__search[data-v-82d034f3]:focus-visible,.create__input[data-v-82d034f3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards[data-v-4c11f243]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.boards__panel[data-v-4c11f243]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.boards__body[data-v-4c11f243]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background-color:var(--color-bg);overflow:auto}.boards__bar[data-v-4c11f243]{display:flex;align-items:center;gap:12px;height:var(--spacing-panelHeader);flex:none;padding:0 8px;border-bottom:1px solid var(--color-divider)}.boards__views[data-v-4c11f243]{display:flex;align-items:center;gap:2px;height:100%}.boards__view[data-v-4c11f243]{position:relative;display:flex;align-items:center;gap:6px;height:100%;padding:0 12px;font-size:var(--text-sm);font-family:inherit;font-weight:500;color:var(--color-dim);background:none;border:0;cursor:pointer}.boards__view[data-v-4c11f243]:hover{color:var(--color-fg)}.boards__view.on[data-v-4c11f243]{color:var(--color-fg);font-weight:600}.boards__view.on[data-v-4c11f243]:after{content:\"\";position:absolute;left:8px;right:8px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.boards__view[data-v-4c11f243]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__title[data-v-4c11f243]{display:flex;align-items:center;gap:8px;margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__count[data-v-4c11f243]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);font-weight:500;color:var(--color-dim);padding:1px 6px;border:1px solid var(--color-divider);border-radius:999px}.boards__tools[data-v-4c11f243]{display:flex;align-items:center;gap:8px;margin-left:auto}.boards__search[data-v-4c11f243]{height:22px;min-width:180px;padding:0 8px;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:4px}.boards__search[data-v-4c11f243]:focus-visible,.board[data-v-4c11f243]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__grid[data-v-4c11f243]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));align-content:start;gap:16px;padding:16px}.board[data-v-4c11f243]{position:relative;display:flex;flex-direction:column;padding:0;overflow:hidden;text-align:left;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);box-shadow:var(--shadow-e1);cursor:pointer;transition:border-color .12s ease,box-shadow .12s ease,transform .12s ease}.board[data-v-4c11f243]:hover{border-color:var(--color-outline);box-shadow:var(--shadow-e2);transform:translateY(-1px)}.board__body[data-v-4c11f243]{padding:12px}.board__name[data-v-4c11f243]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__meta[data-v-4c11f243]{margin:2px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.board__kinds[data-v-4c11f243]{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0 0;padding:0;list-style:none}.board__kind[data-v-4c11f243]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-dim);background-color:var(--color-canvas);border-radius:3px}.board__kind--more[data-v-4c11f243]{color:var(--color-outline)}.board__edit[data-v-4c11f243]{position:absolute;top:8px;right:8px;padding:2px 8px;font-size:var(--text-xs);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:3px;opacity:0;cursor:pointer}.board:hover .board__edit[data-v-4c11f243],.board__edit[data-v-4c11f243]:focus-visible{opacity:1}.board--new[data-v-4c11f243]{box-shadow:none;align-items:center;justify-content:center;gap:2px;min-height:180px;font-family:inherit;background-color:transparent;border-style:dashed}.board__plus[data-v-4c11f243]{font-size:20px;line-height:1;color:var(--color-outline)}.board__usage[data-v-4c11f243]{margin:3px 0 0;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.boards__nomatch[data-v-4c11f243]{grid-column:1 / -1;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.boards__empty[data-v-4c11f243]{max-width:420px;margin:10vh auto 0;padding:0 16px;text-align:center}.boards__empty-plan[data-v-4c11f243]{width:200px;margin:0 auto 16px;border:1px solid var(--color-divider);border-radius:4px}.boards__empty-title[data-v-4c11f243]{margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__empty-text[data-v-4c11f243]{margin:8px 0 16px;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.boards__empty-actions[data-v-4c11f243]{display:flex;justify-content:center;gap:8px}@media(prefers-reduced-motion:reduce){.board[data-v-4c11f243]{transition:none}.board[data-v-4c11f243]:hover{transform:none}}.dottet[data-v-3ecae506]{background:var(--color-canvas);background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-3ecae506]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed var(--color-outline);z-index:100000;pointer-events:none}.report-container[data-v-3ecae506]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative;background:var(--color-canvas, #dee1e7)}.report-container__title[data-v-3ecae506]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider, #ccd1d9)}.report-container .widgets-adding-controls[data-v-3ecae506]{display:flex;border:1px solid var(--color-divider, #ccd1d9);border-radius:8px;margin:16px}.report-container .widget-board[data-v-3ecae506]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-3ecae506]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-3ecae506]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-3ecae506]{position:absolute}.dropdown-buttons-container[data-v-3ecae506]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-3ecae506]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-3ecae506]{z-index:20000000!important}.add_widget-button[data-v-3ecae506]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-3ecae506],.v-leave-active[data-v-3ecae506]{transition:opacity .5s ease}.v-enter-from[data-v-3ecae506],.v-leave-to[data-v-3ecae506]{opacity:0}.tree[data-v-19322c5a]{display:flex;flex-direction:column;min-height:0;height:100%;border-right:1px solid var(--color-divider);background:var(--color-pane);overflow:hidden}.tree__head[data-v-19322c5a]{display:flex;align-items:center;gap:2px;flex:none;padding:7px 8px 7px 12px;border-bottom:1px solid var(--color-divider)}.tree__title[data-v-19322c5a]{flex:1 1 auto;margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--color-dim)}.tree__search[data-v-19322c5a]{flex:none;padding:8px 10px;border-bottom:1px solid var(--color-divider)}.tree__body[data-v-19322c5a]{flex:1 1 auto;min-height:0;overflow-y:auto;padding:4px 0}.tree__list[data-v-19322c5a],.tree__sources[data-v-19322c5a]{margin:0;padding:0;list-style:none}.tree__sources[data-v-19322c5a]{padding-left:18px}.row[data-v-19322c5a]{display:flex;align-items:center;gap:2px;padding-right:4px}.row[data-v-19322c5a]:hover{background:var(--color-raised)}.row--on[data-v-19322c5a],.row--on[data-v-19322c5a]:hover{background:color-mix(in srgb,var(--color-accent) 14%,transparent)}.row__twist[data-v-19322c5a]{display:flex;align-items:center;justify-content:center;width:22px;height:26px;flex:none;border:none;background:transparent;color:var(--color-dim);cursor:pointer}.row__twist--none[data-v-19322c5a]{cursor:default}.row__body[data-v-19322c5a]{display:flex;align-items:baseline;gap:8px;flex:1 1 auto;min-width:0;padding:3px 2px;border:none;background:transparent;font:inherit;text-align:left;color:var(--color-fg);cursor:pointer}.row__body[data-v-19322c5a]:disabled{cursor:default}.row__body[data-v-19322c5a]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.row__name[data-v-19322c5a]{font-family:var(--font-sans);font-size:var(--text-sm);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.row--connection .row__name[data-v-19322c5a]{font-weight:600}.row__what[data-v-19322c5a]{flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__usage[data-v-19322c5a]{flex:none;margin-left:auto;padding-left:8px;font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.tree__none[data-v-19322c5a],.tree__empty[data-v-19322c5a]{padding:6px 12px;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.confirm__title[data-v-19322c5a]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.confirm__text[data-v-19322c5a]{margin:0 0 6px;color:var(--color-dim);line-height:1.5}.confirm__text--warn[data-v-19322c5a]{color:var(--color-err)}.editor[data-v-b30445c3]{display:flex;flex-direction:column;gap:12px;height:100%;min-height:0}.editor__fields[data-v-b30445c3]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-b30445c3]{display:flex;justify-content:flex-end;gap:7px}.editor__preview[data-v-b30445c3]{flex:1 1 auto;min-height:0;display:flex;overflow:auto}.editor[data-v-c18a8ecf]{display:flex;flex-direction:column;gap:12px}.editor__fields[data-v-c18a8ecf]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-c18a8ecf]{display:flex;justify-content:flex-end;gap:7px}.data-page[data-v-91f5d575]{display:flex;height:100%;min-height:0}.data-page__tree[data-v-91f5d575]{flex:none;width:320px;min-height:0}.data-page__detail[data-v-91f5d575]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background:var(--color-pane);overflow:hidden}.data-page__nothing[data-v-91f5d575]{margin:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.detail__head[data-v-91f5d575]{display:flex;align-items:baseline;gap:12px;flex:none;padding:12px 16px 8px}.detail__what[data-v-91f5d575]{display:flex;align-items:baseline;gap:10px;min-width:0}.detail__name[data-v-91f5d575]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.detail__sub[data-v-91f5d575]{font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.detail__usage[data-v-91f5d575]{margin-left:auto;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.detail__body[data-v-91f5d575]{flex:1 1 auto;min-height:0;overflow:auto;padding:16px}.widgets_grid[data-v-3ac9fb06]{display:flex;flex-direction:column}[data-v-3ac9fb06] .widgets_grid-item{display:flex;flex-direction:row;align-items:center;gap:9px;padding:6px 12px;font-size:var(--text-base, 13px);color:var(--color-fg);cursor:grab;border-radius:var(--radius-sm, 5px);margin:0 6px}[data-v-3ac9fb06] .widgets_grid-item:hover{background:var(--color-bg)}[data-v-3ac9fb06] .widgets_grid-icon{width:26px;height:26px;flex:none;display:inline-flex;align-items:center;justify-content:center;background:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 5px);overflow:hidden}[data-v-3ac9fb06] .widgets_grid-icon img{max-width:18px;max-height:18px}[data-v-3ac9fb06] .widgets_grid-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.add_widget_window[data-v-3ac9fb06]{position:relative;width:100%;height:100%;padding:6px 0}.add_widget_window__scroll[data-v-3ac9fb06]{height:100%;overflow-y:auto}.scrim[data-v-67bd2420]{position:fixed;inset:0;z-index:40000;display:grid;place-items:stretch;padding:26px 22px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(6px)}.overlay[data-v-67bd2420]{display:flex;min-width:0;min-height:0;background-color:var(--color-bg);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.stage[data-v-67bd2420]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.stage__head[data-v-67bd2420]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.stage__name[data-v-67bd2420]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.stage__uid[data-v-67bd2420]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.stage__spacer[data-v-67bd2420]{flex:1 1 auto}.seg[data-v-67bd2420]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.seg button[data-v-67bd2420]{padding:1px 9px;font-family:inherit;font-size:var(--text-xs);color:var(--color-dim);background:none;border:0;cursor:pointer}.seg button.on[data-v-67bd2420]{color:var(--color-onAccent);background-color:var(--color-accent)}.stage__bar[data-v-67bd2420]{flex:none;padding:5px 12px;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.stage__body[data-v-67bd2420]{flex:1 1 auto;display:grid;place-items:center;min-height:0;padding:18px;background-color:var(--color-canvas);overflow:auto}.preview[data-v-67bd2420]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.handle[data-v-67bd2420]{width:var(--spacing-splitter);flex:none;cursor:col-resize;background-color:var(--color-divider)}.handle[data-v-67bd2420]:hover,.handle[data-v-67bd2420]:focus-visible{background-color:var(--color-accent);outline:none}.side[data-v-67bd2420]{display:flex;flex-direction:column;flex:none;min-width:0;min-height:0;background-color:var(--color-pane)}.tabs[data-v-67bd2420]{display:flex;flex-wrap:wrap;align-items:stretch;min-height:var(--spacing-panelHeader);flex:none;padding:0 6px;gap:1px;border-bottom:1px solid var(--color-divider)}.tab[data-v-67bd2420]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 9px;font-family:inherit;font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab.on[data-v-67bd2420]{color:var(--color-fg);font-weight:600}.tab.on[data-v-67bd2420]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab__n[data-v-67bd2420]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}.fields[data-v-67bd2420]{flex:1 1 auto;min-height:0;padding:10px 12px 16px;overflow-y:auto}.pick[data-v-67bd2420]{margin-bottom:8px}.rest__note[data-v-67bd2420]{margin:0 0 10px;padding:7px 9px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim);background-color:var(--color-raised);border-radius:var(--radius-xs)}.note[data-v-67bd2420]{margin:8px 0 0;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.var-mark[data-v-67bd2420]{font-family:var(--font-mono);font-style:italic;color:var(--color-brand)}.bound[data-v-67bd2420]{width:100%;border-collapse:collapse;font-size:var(--text-sm)}.bound th[data-v-67bd2420]{padding:5px 8px;text-align:left;font-size:var(--text-xs);font-weight:600;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.bound td[data-v-67bd2420]{padding:5px 8px;border-bottom:1px solid var(--color-divider)}.bound__name[data-v-67bd2420],.bound__var[data-v-67bd2420]{font-family:var(--font-mono);font-size:var(--text-xs)}.bound__var[data-v-67bd2420]{color:var(--color-brand)}.foot[data-v-67bd2420]{display:flex;align-items:center;gap:7px;height:38px;flex:none;padding:0 12px;background-color:var(--color-pane);border-top:1px solid var(--color-divider)}.foot__hint[data-v-67bd2420]{font-size:var(--text-xs);color:var(--color-dim)}.tab[data-v-67bd2420]:focus-visible,.seg button[data-v-67bd2420]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.page-settings[data-v-9ea0fdd8]{position:absolute;top:12px;right:12px;bottom:12px;z-index:1000000;display:flex;flex-direction:column;width:340px;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.head[data-v-9ea0fdd8]{display:flex;align-items:center;gap:8px;flex:none;height:34px;padding:0 6px 0 12px;border-bottom:1px solid var(--color-divider)}.head__title[data-v-9ea0fdd8]{flex:1;margin:0;font-size:var(--text-sm, 12px);font-weight:500;color:var(--color-fg)}.head__close[data-v-9ea0fdd8]{width:24px;height:24px;font-size:16px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.head__close[data-v-9ea0fdd8]:hover{color:var(--color-fg);background-color:var(--color-raised)}.head__close[data-v-9ea0fdd8]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.body[data-v-9ea0fdd8]{flex:1;min-height:0;overflow-y:auto;padding:12px}.group+.group[data-v-9ea0fdd8]{margin-top:18px}.group__label[data-v-9ea0fdd8]{margin:0 0 8px;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.group[data-v-9ea0fdd8]>.field{margin-bottom:8px}.ident[data-v-9ea0fdd8]{margin:18px 0 0;font-size:var(--text-xs, 11px);color:var(--color-dim)}.ident code[data-v-9ea0fdd8]{font-family:var(--font-mono);user-select:all}.missing[data-v-9ea0fdd8]{margin:0;font-size:var(--text-sm, 12px);color:var(--color-dim)}.foot[data-v-9ea0fdd8]{display:flex;justify-content:flex-end;flex:none;padding:8px 12px;border-top:1px solid var(--color-divider)}.ghost{display:none}.editor[data-v-bd444b0c]{position:relative;padding:0;border:0;display:flex;align-items:stretch;width:100%;height:100%;min-height:0;overflow:hidden;background:var(--color-bg)}.palette__act[data-v-bd444b0c]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.palette__act[data-v-bd444b0c]:hover{color:var(--color-fg);background-color:var(--color-raised)}.palette__act[data-v-bd444b0c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.report-container[data-v-bd444b0c]{flex:1 1 auto;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;min-width:0;height:100%;position:relative;background:var(--color-canvas)}.report-container.dottet[data-v-bd444b0c]{background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:24px 24px;background-position:-12px -12px;background-repeat:repeat}.report-container__title[data-v-bd444b0c]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider)}.report-container .widgets-adding-controls[data-v-bd444b0c]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-md, 8px);margin:16px}.report-container .widget-board[data-v-bd444b0c]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-bd444b0c]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-bd444b0c]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-bd444b0c]{position:absolute}.dropdown-buttons-container[data-v-bd444b0c]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-bd444b0c]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-bd444b0c]{z-index:20000000!important}.v-enter-active[data-v-bd444b0c],.v-leave-active[data-v-bd444b0c]{transition:opacity .5s ease}.v-enter-from[data-v-bd444b0c],.v-leave-to[data-v-bd444b0c]{opacity:0}.variables[data-v-9292252d]{display:flex;flex-direction:column;gap:28px;box-sizing:border-box;width:100%;height:100%;overflow-y:auto;padding:28px 32px 40px;font-family:var(--font-sans);color:var(--color-fg);background-color:var(--color-bg)}.variables__head[data-v-9292252d],.reach[data-v-9292252d]{width:100%;max-width:940px}.variables__head[data-v-9292252d]{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap}.variables__title[data-v-9292252d]{margin:0 0 6px;font-size:20px;font-weight:600;letter-spacing:-.01em}.variables__lead[data-v-9292252d]{margin:0;max-width:56ch;font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}.reach__title[data-v-9292252d]{display:flex;align-items:baseline;gap:12px;margin:0 0 2px;font-size:var(--text-base);font-weight:600}.reach__lead[data-v-9292252d]{font-weight:400;font-size:var(--text-sm);color:var(--color-dim)}.reach__empty[data-v-9292252d]{margin:0;padding:12px 0;border-top:1px solid var(--color-divider);font-size:var(--text-base);color:var(--color-dim)}.rows[data-v-9292252d]{margin:0;padding:0;list-style:none;border-top:1px solid var(--color-divider)}.row[data-v-9292252d]{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1.4fr) minmax(0,2fr) auto;align-items:center;gap:16px;padding:7px 8px 7px 0;border-bottom:1px solid var(--color-divider);font-size:var(--text-base)}.row[data-v-9292252d]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.row__name[data-v-9292252d]{font-family:var(--font-mono);overflow-wrap:anywhere}.row__type[data-v-9292252d],.row__value[data-v-9292252d]{color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__value[data-v-9292252d]{font-family:var(--font-mono);color:var(--color-fg)}.row__tools[data-v-9292252d]{display:flex;gap:2px}.form[data-v-9292252d]{display:flex;flex-direction:column;gap:4px}.confirm__title[data-v-9292252d]{margin:0;font-size:var(--text-lg);font-weight:600}.confirm__text[data-v-9292252d]{margin:0;font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}@media(max-width:640px){.variables[data-v-9292252d]{padding:20px 16px 32px}.row[data-v-9292252d]{grid-template-columns:minmax(0,1fr) auto;row-gap:2px}.row__type[data-v-9292252d],.row__value[data-v-9292252d]{grid-column:1;white-space:normal}}.appearance[data-v-a84ca0bf]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.panel[data-v-a84ca0bf]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.panel__head[data-v-a84ca0bf]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 10px;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.head__tab[data-v-a84ca0bf]{position:relative;height:100%;padding:0 10px;font-family:inherit;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);background:none;border:0;cursor:pointer}.head__tab.on[data-v-a84ca0bf]{color:var(--color-fg)}.head__tab.on[data-v-a84ca0bf]:after{content:\"\";position:absolute;left:6px;right:6px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.head__tab[data-v-a84ca0bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.gallery[data-v-a84ca0bf]{flex:1 1 auto;min-height:0;padding:16px 18px 24px;overflow-y:auto;background-color:var(--color-bg)}.gallery__lead[data-v-a84ca0bf]{margin:0 0 18px;max-width:70ch;font-size:var(--text-sm);color:var(--color-dim)}.demo[data-v-a84ca0bf]{margin-bottom:26px}.demo__title[data-v-a84ca0bf]{margin:0 0 10px;padding-bottom:4px;font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.demo__row[data-v-a84ca0bf]{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:12px}.demo__form[data-v-a84ca0bf]{max-width:460px}.panel__tools[data-v-a84ca0bf]{display:flex;align-items:center;gap:6px;margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400}.changed[data-v-a84ca0bf]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-accent)}.body[data-v-a84ca0bf]{display:flex;flex:1 1 auto;min-height:0;background-color:var(--color-bg)}.themes[data-v-a84ca0bf]{width:240px;flex:none;display:flex;flex-direction:column;gap:2px;padding:8px 6px;overflow-y:auto;background-color:var(--color-pane);border-right:1px solid var(--color-divider)}.theme[data-v-a84ca0bf]{display:grid;gap:3px;padding:8px;font-family:inherit;text-align:left;background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.theme[data-v-a84ca0bf]:hover{background-color:var(--color-raised)}.theme.on[data-v-a84ca0bf]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);border-color:color-mix(in srgb,var(--color-accent) 45%,transparent)}.theme__strip[data-v-a84ca0bf]{display:flex;height:14px;border-radius:2px;overflow:hidden;border:1px solid var(--color-divider)}.theme__strip i[data-v-a84ca0bf]{flex:1}.theme__name[data-v-a84ca0bf]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.theme__note[data-v-a84ca0bf]{font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.tokens[data-v-a84ca0bf]{flex:1 1 auto;min-width:0;padding:8px 10px 16px;overflow-y:auto}.group__head[data-v-a84ca0bf]{display:flex;align-items:baseline;gap:7px;width:100%;padding:6px 4px;font-family:inherit;font-size:var(--text-base);font-weight:600;color:var(--color-fg);text-align:left;background:none;border:0;border-bottom:1px solid var(--color-divider);cursor:pointer}.group__twist[data-v-a84ca0bf]{width:11px;font-size:var(--text-xs);color:var(--color-dim)}.group__count[data-v-a84ca0bf]{margin-left:auto;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.group__body[data-v-a84ca0bf]{padding:8px 0 14px 18px}.group__note[data-v-a84ca0bf]{margin:0 0 8px;font-size:var(--text-sm);color:var(--color-dim);max-width:70ch}.token[data-v-a84ca0bf]{display:flex;align-items:center;gap:8px;padding:3px 0}.token__swatch[data-v-a84ca0bf]{width:22px;height:22px;flex:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__swatch--none[data-v-a84ca0bf]{background:repeating-linear-gradient(45deg,var(--color-raised),var(--color-raised) 3px,var(--color-bg) 3px,var(--color-bg) 6px)}.token__text[data-v-a84ca0bf]{display:flex;flex-direction:column;min-width:0;flex:1 1 auto}.token__name[data-v-a84ca0bf]{font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg)}.token__role[data-v-a84ca0bf]{font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.token__picker[data-v-a84ca0bf]{width:28px;height:24px;flex:none;padding:0;background:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__value[data-v-a84ca0bf]{width:220px;flex:none;height:24px;padding:0 7px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__reset[data-v-a84ca0bf]{width:24px;height:24px;flex:none;font-family:inherit;font-size:var(--text-base);color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__reset[data-v-a84ca0bf]:disabled{opacity:.35;cursor:default}.btn[data-v-a84ca0bf]{height:22px;padding:0 10px;font-family:inherit;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-a84ca0bf]:hover{border-color:var(--color-outline)}.btn[data-v-a84ca0bf]:focus-visible,.theme[data-v-a84ca0bf]:focus-visible,.group__head[data-v-a84ca0bf]:focus-visible,.token__value[data-v-a84ca0bf]:focus-visible,.token__picker[data-v-a84ca0bf]:focus-visible,.token__reset[data-v-a84ca0bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}\n";})();
import { identifier as o_, VARIABLE_WRAPPER_FACTORY as a_ } from "org.eclipse.daanse.board.app.lib.factory.variableWrapper";
import { EVENT_MANAGER as s_, EVENT_ACTIONS_REGISTRY_ID as Ll } from "org.eclipse.daanse.board.app.lib.api.events";
import { ref as j, defineComponent as Qe, computed as ee, inject as xe, onMounted as Kn, onBeforeUnmount as Qo, createElementBlock as A, openBlock as _, Fragment as Ce, createElementVNode as u, createBlock as Be, createCommentVNode as re, renderList as Ge, unref as m, toDisplayString as z, normalizeClass as Ee, withModifiers as Mn, createStaticVNode as l_, Teleport as Gl, resolveComponent as u_, createVNode as B, shallowRef as Bl, watch as Nn, nextTick as gi, normalizeStyle as Yt, resolveDynamicComponent as Yn, createTextVNode as ae, withDirectives as Kt, vModelText as Ho, withCtx as ne, withKeys as vi, mergeModels as hi, useModel as jo, renderSlot as d_, vShow as zo, Transition as c_, isRef as f_, createApp as p_ } from "vue";
import { createPinia as g_, setActivePinia as v_ } from "pinia";
import { NAVIGATION_REGISTRY as h_, NAVIGATION_REGISTRY_ID as Hl, NavigationItem as __ } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID as Kl, RouteDefinition as Dl } from "org.eclipse.daanse.board.app.lib.api.route";
import { useEList as Tn, useGlobalLoading as m_, useEObject as Yl, useFeature as b_, useBoard as y_, VariableComplexStringWrapper as w_, VARIABLECOMPLEXSTRINGWRAPPER as k_ } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DIcon as Xe, DButton as be, DInput as gn, DModal as Ko, DSelect as Un, DTabs as x_, DColorInput as Zl, DSwitch as Jl, DFloatingWindow as S_, DDateInput as C_, DSlider as A_, DCheckbox as I_, DChip as qt, DDivider as $_ } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useRoute as br, useRouter as ea, createRouter as R_, createWebHistory as E_ } from "vue-router";
import { identifier as yr } from "org.eclipse.daanse.board.app.lib.api.page";
import { identifier as yi } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { identifier as at, WorkspaceImpl as T_, ConnectionImpl as O_, DatasourceImpl as L_, VariableImpl as B_, EventMappingImpl as Xl, PageImpl as D_, WidgetImpl as W_, LayoutItemImpl as V_ } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { JSONResource as Ql, URI as jl, OPTION_INDENT as P_ } from "@emfts/core";
import { identifier as na, CONNECTION_REPOSITORY as M_ } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as ta, DATASOURCE_REPOSITORY as U_ } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { identifier as eu } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as N_ } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { identifier as nu } from "org.eclipse.daanse.board.app.lib.api.widget";
import F_ from "vuedraggable";
import { WrapperSettingsPackage as z_, wrapperSettingsFormXmi as q_, WrapperSettingsImpl as G_, WidgetWrapper as H_ } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { SettingsForm as _i, isModelled as K_ } from "org.eclipse.daanse.board.app.ui.vue.uimodel";
import { VariableEvents as Wl } from "org.eclipse.daanse.board.app.lib.variables";
import { SystemActionsEcoreContent as Y_, WidgetAction as Z_ } from "org.eclipse.daanse.board.app.lib.events";
import { loggerFactory as tu } from "org.eclipse.daanse.board.app.lib.logger";
const { TINY_EMITTER: ql, APP: i_ } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ze = [];
for (let g = 0; g < 256; ++g)
  Ze.push((g + 256).toString(16).slice(1));
function J_(g, h = 0) {
  return (Ze[g[h + 0]] + Ze[g[h + 1]] + Ze[g[h + 2]] + Ze[g[h + 3]] + "-" + Ze[g[h + 4]] + Ze[g[h + 5]] + "-" + Ze[g[h + 6]] + Ze[g[h + 7]] + "-" + Ze[g[h + 8]] + Ze[g[h + 9]] + "-" + Ze[g[h + 10]] + Ze[g[h + 11]] + Ze[g[h + 12]] + Ze[g[h + 13]] + Ze[g[h + 14]] + Ze[g[h + 15]]).toLowerCase();
}
const X_ = new Uint8Array(16);
function Q_() {
  return crypto.getRandomValues(X_);
}
function ru(g, h, o) {
  return crypto.randomUUID ? crypto.randomUUID() : j_(g);
}
function j_(g, h, o) {
  g = g || {};
  const w = g.random ?? g.rng?.() ?? Q_();
  if (w.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return w[6] = w[6] & 15 | 64, w[8] = w[8] & 63 | 128, J_(w);
}
const qo = j(void 0);
function iu() {
  return {
    /** The page whose settings are open, if any. */
    settingsFor: qo,
    openSettings: (g) => {
      qo.value = g;
    },
    closeSettings: () => {
      qo.value = void 0;
    }
  };
}
const di = j(!0);
function ou() {
  return {
    visible: di,
    toggle: () => {
      di.value = !di.value;
    },
    hide: () => {
      di.value = !1;
    }
  };
}
const em = "data-board-backdrop", au = "daanse.board.backdrop";
function nm() {
  try {
    return localStorage.getItem(au) === "on";
  } catch {
    return !1;
  }
}
const _r = j(nm());
function su() {
  document.documentElement.setAttribute(em, _r.value ? "on" : "off");
}
function tm() {
  try {
    localStorage.setItem(au, _r.value ? "on" : "off");
  } catch {
  }
}
function rm() {
  return {
    shown: _r,
    toggle: () => {
      _r.value = !_r.value, tm(), su();
    }
  };
}
function im() {
  su();
}
const om = "data-board-snap", lu = "daanse.board.snap";
function am() {
  try {
    const g = localStorage.getItem(lu);
    return g === null ? !0 : g === "on";
  } catch {
    return !0;
  }
}
const mr = j(am());
function uu() {
  document.documentElement.setAttribute(om, mr.value ? "on" : "off");
}
function sm() {
  try {
    localStorage.setItem(lu, mr.value ? "on" : "off");
  } catch {
  }
}
function lm() {
  return {
    snapping: mr,
    toggle: () => {
      mr.value = !mr.value, sm(), uu();
    }
  };
}
function um() {
  uu();
}
const dm = { class: "topbar" }, cm = {
  class: "crumb",
  "aria-label": "Pfad"
}, fm = {
  key: 0,
  class: "crumb-sep",
  "aria-hidden": "true"
}, pm = ["onClick"], gm = ["aria-expanded"], vm = { class: "pages__name" }, hm = {
  key: 0,
  class: "pages__menu",
  role: "menu"
}, _m = ["onClick"], mm = ["title", "aria-label", "onClick"], bm = ["aria-pressed"], ym = ["aria-pressed"], wm = ["aria-pressed"], km = {
  key: 6,
  class: "modes",
  role: "group",
  "aria-label": "Modus"
}, xm = ["aria-pressed"], Sm = ["aria-pressed"], Cm = /* @__PURE__ */ Qe({
  __name: "Header",
  setup(g) {
    const h = br(), o = ea(), w = ee(() => h.params.pageid ?? ""), b = ee(
      () => h.name === "edit" || h.name === "pageEdit" || String(h.path).endsWith("/edit")
    ), I = ee(() => {
      const F = { label: "Boards", to: "/" }, N = {
        label: w.value ? `Board ${w.value.slice(0, 8)}` : "Board",
        to: w.value ? `/page/${w.value}` : void 0
      };
      switch (h.name) {
        case "home":
          return [{ label: "Boards" }];
        case "page":
          return [F, { label: N.label }];
        case "edit":
        case "pageEdit":
          return [F, N, { label: "Bearbeiten" }];
        case "data":
          return [F, { label: "Verbindungen & Daten" }];
        case "config":
          return [F, { label: "Konfiguration" }];
        case "save":
          return [F, { label: "Speicher" }];
        case "test":
          return [F, { label: "Test" }];
        default:
          return [F, { label: String(h.name ?? "Board") }];
      }
    }), c = ee(() => !!w.value), T = xe(yr);
    xe(yi);
    const { openSettings: C } = iu(), f = Tn(xe(at), (F) => F.pages), { visible: k, toggle: G } = ou(), { shown: H, toggle: te } = rm(), { snapping: $, toggle: q } = lm(), V = ee(() => {
      if (f.value, !w.value) return !1;
      try {
        const F = T?.getPage(w.value);
        return !!(F?.backgroundImage?.trim() || F?.backgroundColor?.trim());
      } catch {
        return !1;
      }
    }), R = ee(() => {
      f.value;
      const F = T?.getAllPageIds() ?? [], N = [];
      for (const M of F) {
        const pe = T?.getPage(M);
        pe && N.push(pe);
      }
      return N;
    }), D = ee(() => {
      if (f.value, !w.value) return "";
      try {
        return T?.getPage(w.value)?.name ?? "Seite";
      } catch {
        return "Seite";
      }
    }), Z = j(!1);
    function ue(F) {
      Z.value = !1, F !== w.value && o.push(b.value ? `/page/${F}/edit` : `/page/${F}`);
    }
    const P = j();
    function X(F) {
      Z.value && (P.value?.contains(F.target) || (Z.value = !1));
    }
    function ve(F) {
      F.key === "Escape" && (Z.value = !1);
    }
    Kn(() => {
      document.addEventListener("pointerdown", X), document.addEventListener("keydown", ve);
    }), Qo(() => {
      document.removeEventListener("pointerdown", X), document.removeEventListener("keydown", ve);
    });
    function Ve() {
      const F = ru();
      T?.registerPage({
        id: F,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), Z.value = !1, o.push(`/page/${F}/edit`);
    }
    const ie = ee(() => R.value.length > 1);
    function ce(F) {
      if (!ie.value) return;
      const N = R.value.find((M) => M.id === F);
      if (confirm(`Seite „${N?.name ?? F}" löschen? Das lässt sich nicht rückgängig machen.`) && (T?.unregisterPage(F), F === w.value)) {
        const M = R.value.find((pe) => pe.id !== F);
        M && o.push(b.value ? `/page/${M.id}/edit` : `/page/${M.id}`);
      }
    }
    const de = () => {
      w.value && o.push(`/page/${w.value}`);
    }, $e = () => {
      w.value && o.push(`/page/${w.value}/edit`);
    }, en = () => o.push({ path: "/", query: { view: "storage" } }), ye = () => o.push("/appearance");
    return (F, N) => (_(), A(Ce, null, [
      u("header", dm, [
        N[12] || (N[12] = u("span", { class: "brand" }, [
          u("span", {
            class: "brand-mark",
            "aria-hidden": "true"
          }, "D"),
          u("span", { class: "brand-name" }, "Daanse Board")
        ], -1)),
        u("nav", cm, [
          (_(!0), A(Ce, null, Ge(I.value, (M, pe) => (_(), A(Ce, {
            key: M.label + pe
          }, [
            pe > 0 ? (_(), A("span", fm, "/")) : re("", !0),
            M.to && pe < I.value.length - 1 ? (_(), A("button", {
              key: 1,
              type: "button",
              class: "crumb-part crumb-link",
              onClick: (sn) => m(o).push(M.to)
            }, z(M.label), 9, pm)) : (_(), A("span", {
              key: 2,
              class: Ee(["crumb-part", { current: pe === I.value.length - 1 }])
            }, z(M.label), 3))
          ], 64))), 128))
        ]),
        c.value ? (_(), A("div", {
          key: 0,
          ref_key: "menuHost",
          ref: P,
          class: "pages"
        }, [
          u("button", {
            type: "button",
            class: "pages__current",
            "aria-expanded": Z.value,
            "aria-haspopup": "menu",
            title: "Seite wechseln",
            onClick: N[0] || (N[0] = (M) => Z.value = !Z.value)
          }, [
            u("span", vm, z(D.value), 1),
            N[5] || (N[5] = u("span", {
              class: "pages__caret",
              "aria-hidden": "true"
            }, "▾", -1))
          ], 8, gm),
          Z.value ? (_(), A("ul", hm, [
            (_(!0), A(Ce, null, Ge(R.value, (M) => (_(), A("li", {
              key: M.id,
              role: "none",
              class: "pages__line"
            }, [
              u("button", {
                type: "button",
                role: "menuitem",
                class: Ee(["pages__item", { on: M.id === w.value }]),
                onClick: (pe) => ue(M.id)
              }, z(M.name), 11, _m),
              ie.value ? (_(), A("button", {
                key: 0,
                type: "button",
                class: "pages__remove",
                title: `Seite „${M.name}“ löschen`,
                "aria-label": `Seite ${M.name} löschen`,
                onClick: Mn((pe) => ce(M.id), ["stop"])
              }, " × ", 8, mm)) : re("", !0)
            ]))), 128)),
            N[6] || (N[6] = u("li", {
              class: "pages__sep",
              role: "separator"
            }, null, -1)),
            u("li", { role: "none" }, [
              u("button", {
                type: "button",
                role: "menuitem",
                class: "pages__item pages__add",
                onClick: Ve
              }, " + Neue Seite ")
            ])
          ])) : re("", !0)
        ], 512)) : re("", !0),
        b.value ? (_(), A("button", {
          key: 1,
          type: "button",
          class: Ee(["icon-action", { on: m($) }]),
          "aria-pressed": m($),
          title: "Am Raster ausrichten",
          "aria-label": "Widgets am Raster ausrichten",
          onClick: N[1] || (N[1] = //@ts-ignore
          (...M) => m(q) && m(q)(...M))
        }, [...N[7] || (N[7] = [
          u("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            u("path", {
              d: "M9 3.5v17M15 3.5v17M3.5 9h17M3.5 15h17",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.3",
              opacity: "0.55"
            }),
            u("rect", {
              x: "9",
              y: "9",
              width: "6",
              height: "6",
              fill: "currentColor"
            })
          ], -1)
        ])], 10, bm)) : re("", !0),
        b.value && V.value ? (_(), A("button", {
          key: 2,
          type: "button",
          class: Ee(["icon-action", { on: m(H) }]),
          "aria-pressed": m(H),
          title: "Hintergrund der Seite zeigen",
          "aria-label": "Hintergrund der Seite beim Bearbeiten zeigen oder verbergen",
          onClick: N[2] || (N[2] = //@ts-ignore
          (...M) => m(te) && m(te)(...M))
        }, [...N[8] || (N[8] = [
          u("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            u("rect", {
              x: "3.5",
              y: "5",
              width: "17",
              height: "14",
              rx: "1.5",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6"
            }),
            u("circle", {
              cx: "9",
              cy: "10",
              r: "1.6",
              fill: "currentColor"
            }),
            u("path", {
              d: "M4 17l4.5-4.5 3 3L15 12l5 5",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6",
              "stroke-linejoin": "round"
            })
          ], -1)
        ])], 10, ym)) : re("", !0),
        b.value ? (_(), A("button", {
          key: 3,
          type: "button",
          class: Ee(["icon-action", { on: m(k) }]),
          "aria-pressed": m(k),
          title: "Widgets",
          "aria-label": "Widget-Palette zeigen oder verbergen",
          onClick: N[3] || (N[3] = //@ts-ignore
          (...M) => m(G) && m(G)(...M))
        }, [...N[9] || (N[9] = [
          l_('<svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15" data-v-b0469dc0><rect x="3.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-b0469dc0></rect><rect x="13.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-b0469dc0></rect><rect x="3.5" y="13.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-b0469dc0></rect><rect x="13.5" y="13.5" width="7" height="7" rx="1" fill="currentColor" stroke="currentColor" stroke-width="1.6" data-v-b0469dc0></rect></svg>', 1)
        ])], 10, wm)) : re("", !0),
        c.value ? (_(), A("button", {
          key: 4,
          type: "button",
          class: "icon-action",
          title: "Seite einrichten",
          "aria-label": "Seite einrichten",
          onClick: N[4] || (N[4] = (M) => m(C)(w.value))
        }, [...N[10] || (N[10] = [
          u("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            u("circle", {
              cx: "12",
              cy: "12",
              r: "3.2",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6"
            }),
            u("path", {
              d: "M12 4.2v2M12 17.8v2M4.2 12h2M17.8 12h2M6.5 6.5l1.4 1.4M16.1 16.1l1.4 1.4M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6",
              "stroke-linecap": "round"
            })
          ], -1)
        ])])) : re("", !0),
        N[13] || (N[13] = u("span", { class: "spacer" }, null, -1)),
        c.value ? (_(), A("button", {
          key: 5,
          type: "button",
          class: "action",
          title: "Arbeitsstand speichern oder laden",
          onClick: en
        }, " Speichern ")) : re("", !0),
        c.value ? (_(), A("div", km, [
          u("button", {
            type: "button",
            class: Ee(["mode", { on: !b.value }]),
            "aria-pressed": !b.value,
            onClick: de
          }, " Ansicht ", 10, xm),
          u("button", {
            type: "button",
            class: Ee(["mode", { on: b.value }]),
            "aria-pressed": b.value,
            onClick: $e
          }, " Bearbeiten ", 10, Sm)
        ])) : re("", !0),
        u("button", {
          type: "button",
          class: "icon-action",
          title: "Erscheinungsbild",
          "aria-label": "Erscheinungsbild",
          onClick: ye
        }, [...N[11] || (N[11] = [
          u("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "15",
            height: "15"
          }, [
            u("circle", {
              cx: "12",
              cy: "12",
              r: "9",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.6"
            }),
            u("path", {
              d: "M12 3a9 9 0 0 1 0 18z",
              fill: "currentColor"
            })
          ], -1)
        ])]),
        N[14] || (N[14] = u("span", {
          class: "avatar",
          title: "Angemeldet"
        }, "MH", -1))
      ]),
      (_(), Be(Gl, { to: "body" }))
    ], 64));
  }
}), je = (g, h) => {
  const o = g.__vccOpts || g;
  for (const [w, b] of h)
    o[w] = b;
  return o;
}, Am = /* @__PURE__ */ je(Cm, [["__scopeId", "data-v-b0469dc0"]]), mi = [
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
], du = mi.flatMap((g) => g.tokens.map((h) => h.name));
new Map(
  mi.flatMap((g) => g.tokens).map((g) => [g.name, g])
);
const Im = {
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
}, Go = "'Barlow', system-ui, -apple-system, 'Segoe UI', sans-serif", Vl = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace", Pl = "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace", ci = {
  "text-xs": "11px",
  "text-sm": "12px",
  "text-base": "13px",
  "text-lg": "15px",
  "text-xl": "24px"
}, cu = [
  {
    id: "messwarte",
    name: "Messwarte",
    note: "Dunkler Grund, Zahlen als hellstes Element. Für Boards, die stundenlang laufen.",
    dark: !0,
    tokens: {
      ...ci,
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
      "font-sans": Go,
      "font-mono": Vl,
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
      ...ci,
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
      "font-sans": Go,
      "font-mono": Vl,
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
      ...ci,
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
      "font-mono": Pl,
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
      ...ci,
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
      "font-sans": Go,
      "font-mono": Pl,
      "radius-xs": "3px",
      "radius-sm": "6px",
      "radius-md": "8px",
      "radius-lg": "12px",
      "shadow-e1": "0 1px 2px rgba(36, 34, 25, 0.12)",
      "shadow-e2": "0 2px 8px rgba(36, 34, 25, 0.12)",
      "shadow-e3": "0 8px 24px rgba(36, 34, 25, 0.14)"
    }
  }
], Ml = "messwarte", fu = "daanse.board.theme";
function $m() {
  const g = { themeId: Ml, overrides: {} };
  try {
    const h = localStorage.getItem(fu);
    if (!h) return g;
    const o = JSON.parse(h);
    return {
      themeId: typeof o?.themeId == "string" ? o.themeId : Ml,
      // Only tokens we know about - a stale name would write a dead property
      overrides: Object.fromEntries(
        Object.entries(o?.overrides ?? {}).filter(
          ([w, b]) => du.includes(w) && typeof b == "string"
        )
      )
    };
  } catch {
    return g;
  }
}
const Je = j($m()), Yo = j([]);
function fi() {
  try {
    localStorage.setItem(fu, JSON.stringify(Je.value));
  } catch {
  }
}
function Ht() {
  const g = vr.value.find((w) => w.id === Je.value.themeId);
  if (!g) return;
  const h = document.documentElement, o = { ...g.tokens, ...Je.value.overrides };
  for (const [w, b] of Object.entries(o))
    h.style.setProperty(`--${w}`, b);
  for (const [w, b] of Object.entries(Im)) {
    const I = o[b];
    I && h.style.setProperty(`--${w}`, I);
  }
  h.style.colorScheme = g.dark ? "dark" : "light", h.setAttribute("data-theme", g.dark ? "dark" : "light");
}
const vr = ee(() => [...cu, ...Yo.value]);
function pu() {
  const g = ee(
    () => vr.value.find((f) => f.id === Je.value.themeId) ?? cu[0]
  );
  function h(f) {
    return Je.value.overrides[f] ?? g.value.tokens[f] ?? "";
  }
  function o(f) {
    return f in Je.value.overrides;
  }
  function w(f) {
    vr.value.some((k) => k.id === f) && (Je.value = { themeId: f, overrides: {} }, fi(), Ht());
  }
  function b(f, k) {
    du.includes(f) && (Je.value = {
      ...Je.value,
      overrides: { ...Je.value.overrides, [f]: k }
    }, fi(), Ht());
  }
  function I(f) {
    const { [f]: k, ...G } = Je.value.overrides;
    Je.value = { ...Je.value, overrides: G }, fi(), Ht();
  }
  function c() {
    Je.value = { ...Je.value, overrides: {} }, fi(), Ht();
  }
  function T(f) {
    vr.value.some((k) => k.id === f.id) || (Yo.value = [...Yo.value, f]);
  }
  function C() {
    return {
      ...g.value,
      id: `${g.value.id}-eigen`,
      name: `${g.value.name} (angepasst)`,
      tokens: { ...g.value.tokens, ...Je.value.overrides }
    };
  }
  return {
    themes: vr,
    activeTheme: g,
    overrides: ee(() => Je.value.overrides),
    valueOf: h,
    isOverridden: o,
    selectTheme: w,
    setToken: b,
    clearToken: I,
    clearAllTokens: c,
    addTheme: T,
    exportTheme: C,
    apply: Ht
  };
}
function Rm() {
  Ht();
}
const Em = { class: "shell" }, Tm = {
  key: 0,
  class: "global-loading-bar"
}, Om = {
  key: 0,
  class: "rail",
  "aria-label": "Bereiche"
}, Lm = ["aria-current"], Bm = ["aria-current"], Dm = ["aria-current", "title", "onClick"], Wm = { class: "sr-only" }, Vm = { class: "content" }, Pm = /* @__PURE__ */ Qe({
  __name: "App",
  setup(g) {
    const h = j([]), { isLoading: o } = m_();
    pu();
    const w = br(), b = ea();
    Kn(() => {
      const f = xe(h_);
      h.value = f.getAllNavigationItemsArray ? f.getAllNavigationItemsArray() : [];
    });
    const I = ee(
      () => w.params.pageid ? `/page/${w.params.pageid}` : "/page/abc"
    ), c = ee(() => String(w.name) === "home" && !w.params.pageid), T = ee(
      () => ["home", "page", "edit", "pageEdit"].includes(String(w.name))
    ), C = (f) => b.push(f);
    return (f, k) => {
      const G = u_("router-view");
      return _(), A("div", Em, [
        m(o) ? (_(), A("div", Tm, [...k[2] || (k[2] = [
          u("div", { class: "global-loading-bar-progress" }, null, -1)
        ])])) : re("", !0),
        B(Am),
        u("div", {
          class: Ee(["shell-body", { "shell-body--norail": c.value }])
        }, [
          c.value ? re("", !0) : (_(), A("nav", Om, [
            u("button", {
              type: "button",
              class: Ee(["ri", { on: T.value }]),
              "aria-current": T.value ? "page" : void 0,
              title: "Board",
              onClick: k[0] || (k[0] = (H) => C(I.value))
            }, [
              B(m(Xe), { name: "dashboard" }),
              k[3] || (k[3] = u("span", { class: "sr-only" }, "Board", -1))
            ], 10, Lm),
            u("button", {
              type: "button",
              class: Ee(["ri", { on: m(w).name === "data" }]),
              "aria-current": m(w).name === "data" ? "page" : void 0,
              title: "Verbindungen & Daten",
              onClick: k[1] || (k[1] = (H) => C("/datasources"))
            }, [
              B(m(Xe), { name: "dataset" }),
              k[4] || (k[4] = u("span", { class: "sr-only" }, "Verbindungen & Daten", -1))
            ], 10, Bm),
            (_(!0), A(Ce, null, Ge(h.value, (H) => (_(), A("button", {
              key: H.id,
              type: "button",
              class: Ee(["ri", { on: m(w).name === H.routeName }]),
              "aria-current": m(w).name === H.routeName ? "page" : void 0,
              title: H.label,
              onClick: (te) => C(H.route)
            }, [
              B(m(Xe), {
                name: H.icon
              }, null, 8, ["name"]),
              u("span", Wm, z(H.label), 1)
            ], 10, Dm))), 128)),
            k[5] || (k[5] = u("span", { class: "rail-spacer" }, null, -1))
          ])),
          u("main", Vm, [
            (_(), Be(G, {
              key: f.$route.fullPath
            }))
          ])
        ], 2)
      ]);
    };
  }
}), Mm = /* @__PURE__ */ je(Pm, [["__scopeId", "data-v-27fec35c"]]), gu = "daanse.board.usage";
function Um() {
  try {
    const g = localStorage.getItem(gu), h = g ? JSON.parse(g) : {};
    return h && typeof h == "object" ? h : {};
  } catch {
    return {};
  }
}
const ot = j(Um());
function vu() {
  function g(b) {
    if (!b) return;
    const I = ot.value[b];
    ot.value = {
      ...ot.value,
      [b]: { count: (I?.count ?? 0) + 1, lastOpened: Date.now() }
    };
    try {
      localStorage.setItem(gu, JSON.stringify(ot.value));
    } catch {
    }
  }
  function h(b) {
    return ot.value[b];
  }
  function o(b, I) {
    const c = ot.value[b], T = ot.value[I];
    return (T?.count ?? 0) !== (c?.count ?? 0) ? (T?.count ?? 0) - (c?.count ?? 0) : (T?.lastOpened ?? 0) - (c?.lastOpened ?? 0);
  }
  function w(b) {
    const I = ot.value[b]?.lastOpened;
    if (!I) return "";
    const c = Math.floor((Date.now() - I) / 864e5);
    return c <= 0 ? "heute" : c === 1 ? "gestern" : c < 31 ? `vor ${c} Tagen` : new Date(I).toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" });
  }
  return { usage: ot, recordOpened: g, usageOf: h, byUsage: o, lastOpenedLabel: w };
}
const Nm = {
  key: 0,
  class: "loading-state"
}, Fm = {
  key: 1,
  class: "view-component-wrapper"
}, zm = {
  key: 2,
  class: "edit-component-wrapper"
}, qm = {
  key: 3,
  class: "no-layout-message"
}, Gm = { class: "no-layout-message__text" }, Hm = { key: 0 }, Km = { key: 1 }, Ym = { key: 2 }, Zm = /* @__PURE__ */ Qe({
  __name: "LayoutRenderer",
  props: {
    pageId: {},
    viewMode: { type: Boolean }
  },
  emits: ["openWidgetSettings", "removeWidget"],
  setup(g, { emit: h }) {
    const o = g, w = h, b = xe(yi), I = xe(yr), c = j(null), T = j(null), C = Bl(null), f = Bl(null), k = j(0), G = j(!0), H = (Z) => {
      w("openWidgetSettings", Z);
    }, te = (Z) => {
      w("removeWidget", Z);
    };
    let $ = 0;
    const q = async () => {
      const Z = ++$;
      if (G.value = !0, await gi(), Z === $) {
        if (o.pageId && I) {
          const ue = I.getPage(o.pageId);
          if (c.value = ue ?? null, ue?.layoutId && b) {
            const P = b.getLayout(ue.layoutId);
            T.value = P || null, o.viewMode ? (f.value = P?.component || null, C.value = null) : (C.value = P?.editor || null, f.value = null);
          } else
            C.value = null, f.value = null, T.value = null;
        }
        await new Promise((ue) => setTimeout(ue, 50)), Z === $ && (G.value = !1);
      }
    }, V = () => o.pageId ? I?.getPage(o.pageId) : void 0, R = Yl(V);
    Nn(R, () => {
      c.value = R.value ?? null;
    });
    const D = b_(V, "layoutId");
    return Nn(D, () => {
      k.value++, q();
    }), Kn(async () => {
      await gi(), await new Promise((Z) => setTimeout(Z, 100)), await q();
    }), (Z, ue) => (_(), A("div", {
      class: "layout-renderer",
      style: Yt({
        backgroundColor: c.value?.backgroundColor || void 0,
        backgroundImage: c.value?.backgroundImage ? `url(${c.value.backgroundImage})` : void 0,
        backgroundSize: c.value?.backgroundSize || "cover",
        backgroundPosition: c.value?.backgroundPosition || "center",
        backgroundRepeat: c.value?.backgroundRepeat || "no-repeat"
      })
    }, [
      G.value ? (_(), A("div", Nm, [...ue[0] || (ue[0] = [
        u("span", {
          class: "spinner",
          "aria-hidden": "true"
        }, null, -1),
        u("p", null, "Layout wird geladen…", -1)
      ])])) : o.viewMode && f.value && T.value ? (_(), A("div", Fm, [
        (_(), Be(Yn(f.value), {
          key: T.value.id || "view",
          "layout-settings": c.value?.layoutSettings
        }, null, 8, ["layout-settings"]))
      ])) : !o.viewMode && C.value && T.value ? (_(), A("div", zm, [
        (_(), Be(Yn(C.value), {
          key: T.value.id || "edit",
          "layout-settings": c.value?.layoutSettings,
          onOpenSettings: H,
          onRemoveWidget: te
        }, null, 40, ["layout-settings"]))
      ])) : (_(), A("div", qm, [
        u("p", Gm, [
          B(m(Xe), {
            name: "warning",
            size: "lg",
            tone: "color-warn"
          }),
          c.value ? T.value ? (_(), A("span", Ym, [
            ae(z(o.viewMode ? "Zu diesem Layout gibt es keine Darstellung." : "Zu diesem Layout gibt es keinen Editor.") + " ", 1),
            ue[1] || (ue[1] = u("br", null, null, -1)),
            u("small", null, "Layout: " + z(T.value.id), 1)
          ])) : (_(), A("span", Km, " Für „" + z(c.value.name || o.pageId) + '" ist kein Layout eingestellt. ', 1)) : (_(), A("span", Hm, " Die Seite „" + z(o.pageId) + '" gibt es nicht. ', 1))
        ])
      ]))
    ], 4));
  }
}), hu = /* @__PURE__ */ je(Zm, [["__scopeId", "data-v-25384df1"]]), Jm = {
  class: "floorplan",
  "aria-hidden": "true"
}, Xm = {
  key: 0,
  class: "floorplan__empty"
}, Qm = /* @__PURE__ */ Qe({
  __name: "BoardFloorplan",
  props: {
    items: {},
    typeById: {}
  },
  setup(g) {
    const h = g;
    function o(b) {
      const I = (b ?? "").toLowerCase();
      return /chart|table|pivot|kpi|progress|timeline|filter|rss|weather/.test(I) ? "data" : /map|routing|image|video|vanta|svg|icon|mermaid|geo/.test(I) ? "visual" : "text";
    }
    const w = ee(() => {
      const b = (h.items ?? []).filter(
        (f) => Number.isFinite(f.x) && Number.isFinite(f.y)
      );
      if (b.length === 0) return [];
      const I = Math.max(...b.map((f) => (f.x ?? 0) + (f.width ?? 1))), c = Math.max(...b.map((f) => (f.y ?? 0) + (f.height ?? 1))), T = I > 0 ? I : 1, C = c > 0 ? c : 1;
      return b.map((f) => ({
        key: f.id ?? `${f.x}-${f.y}`,
        family: o(h.typeById?.[f.id ?? ""]),
        style: {
          left: `${(f.x ?? 0) / T * 100}%`,
          top: `${(f.y ?? 0) / C * 100}%`,
          // minus the gutter, so neighbouring widgets stay visibly separate
          width: `calc(${Math.max((f.width ?? 1) / T * 100, 3)}% - 3px)`,
          height: `calc(${Math.max((f.height ?? 1) / C * 100, 6)}% - 3px)`
        }
      }));
    });
    return (b, I) => (_(), A("div", Jm, [
      (_(!0), A(Ce, null, Ge(w.value, (c) => (_(), A("div", {
        key: c.key,
        class: Ee(["floorplan__block", `floorplan__block--${c.family}`]),
        style: Yt(c.style)
      }, null, 6))), 128)),
      w.value.length === 0 ? (_(), A("span", Xm, "keine Widgets")) : re("", !0)
    ]));
  }
}), Zo = /* @__PURE__ */ je(Qm, [["__scopeId", "data-v-0eecd73b"]]), { parse: jm } = JSON, { keys: e1 } = Object, bi = String, n1 = "string", Ul = {}, _u = "object", t1 = (g, h) => h, r1 = (g) => g instanceof bi ? bi(g) : g, i1 = (g, h) => typeof h === n1 ? new bi(h) : h, o1 = (g, h, o, w) => (b) => {
  for (let I = e1(b), { length: c } = I, T = 0; T < c; T++) {
    const C = I[T], f = b[C];
    if (f instanceof bi) {
      const k = g[+f];
      typeof k === _u && !o.has(k) ? (o.add(k), b[C] = Ul, h.push({ o: b, k: C, r: k })) : b[C] = w.call(b, C, k);
    } else b[C] !== Ul && (b[C] = w.call(b, C, f));
  }
  return b;
}, a1 = (g, h) => {
  const o = jm(g, i1).map(r1), w = t1;
  let b = o[0];
  if (typeof b === _u && b) {
    const I = [], c = o1(o, I, /* @__PURE__ */ new Set(), w);
    b = c(b);
    let T = 0;
    for (; T < I.length; ) {
      const { o: C, k: f, r: k } = I[T++];
      C[f] = w.call(C, f, c(k));
    }
  }
  return w.call({ "": b }, "", b);
};
function s1(g) {
  if (g) {
    if (typeof g == "object") return g;
    if (typeof g == "string")
      try {
        const h = JSON.parse(g);
        return Array.isArray(h) ? a1(g) : h;
      } catch {
        return;
      }
  }
}
function l1(g) {
  return typeof g.eClass == "string";
}
function u1(g) {
  if (!g || typeof g != "object") return;
  const h = new T_(), o = /* @__PURE__ */ new Map();
  for (const I of g.conections ?? []) {
    const c = new O_();
    c.uid = I.uid, c.name = I.name, c.type = I.type, c.config = I.config ?? {}, h.connections.push(c), o.set(I.uid, c);
  }
  const w = /* @__PURE__ */ new Map();
  for (const I of g.datasources ?? []) {
    const c = new L_();
    c.uid = I.uid, c.name = I.name, c.type = I.type, c.config = I.config ?? {};
    const T = o.get((I.config ?? {}).connection);
    T && (c.connection = T), h.datasources.push(c), w.set(I.uid, c);
  }
  const b = [];
  for (const I of g.variables ?? []) {
    const c = new B_();
    c.uid = I.id ?? I.uid ?? Math.random().toString(36).substring(7), c.name = I.name, c.type = I.type, c.scope = I.scope ?? "global", c.accessMode = I.accessMode ?? "external-writable", c.definition = I, h.variables.push(c), b.push({ entry: I, variable: c });
  }
  for (const I of g.eventMappings ?? []) {
    const c = new Xl();
    c.id = I.id, c.definition = I, h.eventMappings.push(c);
  }
  for (const [I, c] of Object.entries(g.pages ?? {})) {
    const T = c?.info ?? {}, C = new D_();
    C.id = T.id ?? I, C.name = T.name ?? "Seite", C.description = T.description, C.icon = T.icon, C.visibleInNavigation = T.visibleInNavigation ?? !0, C.layoutId = T.layoutId ?? T.layout?.id ?? "org.eclipse.daanse.board.app.ui.vue.layouts.base", C.layoutSettings = T.layoutSettings, C.backgroundColor = T.backgroundColor, C.backgroundImage = T.backgroundImage, C.backgroundSize = T.backgroundSize, C.backgroundPosition = T.backgroundPosition, C.backgroundRepeat = T.backgroundRepeat;
    for (const f of c?.widgets ?? []) {
      const k = new W_();
      k.uid = f.uid, k.type = f.type, k.config = f.config ?? {}, k.wrapperConfig = f.wrapperConfig ?? {};
      const G = w.get(f.config?.datasourceId);
      G && (k.datasource = G), C.widgets.push(k);
    }
    for (const f of c?.layout ?? []) {
      const k = new V_();
      k.id = f.id, k.x = f.x ?? 0, k.y = f.y ?? 0, k.z = f.z ?? 0, k.width = f.width ?? 300, k.height = f.height ?? 150, k.group = f.group, C.layout.push(k);
    }
    h.pages.push(C);
  }
  for (const { entry: I, variable: c } of b) {
    const T = I.pageId;
    T && (c.page = h.pages.toArray().find((C) => C.id === T));
  }
  return h.pages.size() > 0 && (h.defaultPage = h.pages.get(0)), h;
}
const d1 = j();
function c1() {
  return d1;
}
const mu = "workspace.json";
function Jo(g) {
  const h = s1(g);
  if (h)
    try {
      if (!l1(h)) return u1(h);
      const o = new Ql(jl.createURI(mu));
      return o.loadFromString(JSON.stringify(h)), o.getContents().get(0);
    } catch {
      return;
    }
}
function f1() {
  const g = xe(at), h = xe(na), o = xe(ta), w = xe(eu), b = xe(o_), I = xe(s_);
  function c() {
    g.eventMappings.clear();
    for (const f of I?.getAllMappings() ?? []) {
      const k = new Xl();
      k.id = f.id, k.definition = f, g.eventMappings.push(k);
    }
  }
  function T() {
    c();
    const f = new Ql(jl.createURI(mu));
    f.getContents().add(g);
    const k = f.saveToString(/* @__PURE__ */ new Map([[P_, 2]]));
    return f.getContents().clear(), k;
  }
  function C(f) {
    const k = Jo(f);
    if (!k) return [];
    g.connections.clear();
    for (const H of k.connections.toArray()) g.connections.push(H);
    g.datasources.clear();
    for (const H of k.datasources.toArray()) g.datasources.push(H);
    g.pages.clear();
    for (const H of k.pages.toArray()) g.pages.push(H);
    g.variables.clear();
    for (const H of k.variables.toArray()) g.variables.push(H);
    g.eventMappings.clear();
    for (const H of k.eventMappings.toArray()) g.eventMappings.push(H);
    g.defaultPage = g.pages.toArray().find((H) => H.id === k.defaultPage?.id) ?? (g.pages.size() > 0 ? g.pages.get(0) : void 0), h?.rebuildLive(), o?.rebuildLive(), w?.rebuildLive(), I?.setAllMappings(
      g.eventMappings.toArray().map((H) => H.definition)
    );
    const G = [];
    for (const H of g.pages.toArray())
      b?.initilazeVariableWrappers(
        H.widgets.toArray().map((te) => ({
          uid: te.uid,
          type: te.type,
          config: te.config,
          wrapperConfig: te.wrapperConfig
        }))
      ), G.push(H.id);
    return G;
  }
  return { save: T, load: C };
}
function p1(g) {
  const h = g.split(".").filter(Boolean);
  return (h[h.length - 1] ?? g).replace(/widget$/i, "") || g;
}
function bu(g, h, o, w) {
  const b = Array.isArray(o) ? o : [], I = Array.isArray(w) ? w : [], c = {};
  for (const f of I)
    f?.uid && f.type && (c[f.uid] = f.type);
  const T = new Set(
    I.map((f) => f?.config?.datasourceId).filter((f) => !!f)
  ), C = [...new Set(I.map((f) => p1(f?.type ?? "")).filter(Boolean))];
  return {
    id: g,
    name: h?.name || "Unbenanntes Board",
    description: h?.description ?? "",
    items: b,
    typeById: c,
    widgetCount: I.length,
    sourceCount: T.size,
    kinds: C
  };
}
const g1 = { class: "storage" }, v1 = {
  class: "tree",
  "aria-label": "Speicher"
}, h1 = {
  class: "tree__body",
  role: "tree"
}, _1 = ["aria-expanded", "onClick"], m1 = { class: "row__twist" }, b1 = { class: "row__name" }, y1 = { class: "row__meta" }, w1 = ["onClick"], k1 = { class: "row__name" }, x1 = { class: "row__meta" }, S1 = {
  key: 0,
  class: "row row--hint"
}, C1 = ["onClick"], A1 = {
  key: 0,
  class: "row row--hint"
}, I1 = { class: "detail" }, $1 = {
  key: 0,
  class: "detail__failure",
  role: "alert"
}, R1 = { class: "detail__head" }, E1 = { class: "detail__facts" }, T1 = { class: "create__hint" }, O1 = { class: "detail__head" }, L1 = { class: "detail__name" }, B1 = {
  key: 0,
  class: "detail__badge"
}, D1 = { class: "detail__facts" }, W1 = {
  key: 0,
  class: "boards"
}, V1 = { class: "board__text" }, P1 = { class: "board__name" }, M1 = { class: "board__facts" }, U1 = {
  key: 0,
  class: "board__kinds"
}, N1 = {
  key: 1,
  class: "detail__hint"
}, F1 = {
  key: 4,
  class: "detail__hint"
}, z1 = {
  key: 5,
  class: "detail__hint"
}, q1 = /* @__PURE__ */ Qe({
  __name: "WorkspaceStorage",
  emits: ["restored"],
  setup(g, { emit: h }) {
    const o = h, w = xe(N_), { save: b, load: I } = f1(), c = j([]), T = j({}), C = j(/* @__PURE__ */ new Set()), f = j(), k = j(), G = j(""), H = j(""), te = j(!1), $ = c1(), q = j(!1), V = j("");
    function R(U) {
      return typeof U == "string" ? U : U?.message ?? String(U);
    }
    function D(U) {
      return U.name ?? String(U.uri).split("/").pop() ?? String(U.uri);
    }
    function Z(U) {
      return String(U.uri);
    }
    function ue(U, y) {
      const x = new URL(String(U.uri));
      return x.pathname = `/${y}.json`, x;
    }
    function P(U) {
      const y = U ? Object.getPrototypeOf(U)?.constructor : void 0;
      return y && "type" in y ? String(y.type) : "";
    }
    function X(U) {
      return typeof U?.create == "function";
    }
    function ve(U) {
      const y = P(U);
      if (!(!y || !w?.isViewForRepoType(y)))
        return w.getViewForRepoType(y);
    }
    const Ve = ee(() => ve(f.value));
    async function ie() {
      c.value = await w?.getAvailableReposetories() ?? [];
      const U = c.value[0];
      U && C.value.size === 0 && (f.value = U, await ce(U));
    }
    async function ce(U) {
      C.value.add(Z(U)), C.value = new Set(C.value), await de(U);
    }
    async function de(U) {
      H.value = "", te.value = !0;
      try {
        T.value = { ...T.value, [Z(U)]: await U.findAll() };
      } catch (y) {
        T.value = { ...T.value, [Z(U)]: [] }, H.value = `Einträge konnten nicht gelesen werden: ${R(y)}`;
      } finally {
        te.value = !1;
      }
    }
    function $e(U) {
      f.value = U, q.value = !1, C.value.has(Z(U)) ? (C.value.delete(Z(U)), C.value = new Set(C.value)) : ce(U);
    }
    function en(U) {
      const y = T.value[Z(U)] ?? [], x = G.value.trim().toLowerCase();
      return [...x ? y.filter((Oe) => D(Oe).toLowerCase().includes(x)) : y].sort((Oe, Ae) => D(Oe).localeCompare(D(Ae)));
    }
    function ye(U, y) {
      f.value = U, k.value = y, q.value = !1, H.value = "";
    }
    function F(U) {
      return String(U.uri) === $.value?.entryUri;
    }
    function N(U, y) {
      $.value = { placeUri: String(f.value?.uri), entryUri: String(U.uri), name: y };
    }
    function M(U) {
      return pe(Jo(U?.data));
    }
    function pe(U) {
      return (U?.pages.toArray() ?? []).map(
        (y) => bu(y.id, y, y.layout.toArray(), y.widgets.toArray())
      );
    }
    const sn = ee(() => M(k.value)), ln = ee(() => ({
      boards: sn.value.length,
      widgets: sn.value.reduce((U, y) => U + y.widgetCount, 0),
      sources: sn.value.reduce((U, y) => U + y.sourceCount, 0)
    }));
    function un(U) {
      const y = M(U);
      return y.length === 0 ? "leer" : `${y.length} ${y.length === 1 ? "Board" : "Boards"}`;
    }
    const ht = ee(() => {
      if (!q.value) return { boards: 0, widgets: 0 };
      const U = pe(Jo(b()));
      return {
        boards: U.length,
        widgets: U.reduce((y, x) => y + x.widgetCount, 0)
      };
    });
    async function $t(U) {
      H.value = "";
      try {
        const y = await f.value?.getEntityByUri(U.uri), x = I(y?.data ?? U.data);
        N(U, D(U)), o("restored", x);
      } catch (y) {
        H.value = `Laden fehlgeschlagen: ${R(y)}`;
      }
    }
    async function _t(U) {
      const y = f.value;
      if (y) {
        H.value = "";
        try {
          await y.update({ ...U, data: b() }), N(U, D(U)), await de(y), k.value = en(y).find((x) => String(x.uri) === String(U.uri));
        } catch (x) {
          H.value = `Speichern fehlgeschlagen: ${R(x)}`;
        }
      }
    }
    function On(U) {
      f.value = U, k.value = void 0, q.value = !0, V.value = "", H.value = "";
    }
    async function Fn() {
      const U = f.value, y = V.value.trim();
      if (!(!U || !y)) {
        H.value = "";
        try {
          const x = { name: y, uri: ue(U, y), data: b() };
          await U.create(x), N(x, y), await ce(U), q.value = !1, k.value = en(U).find((Y) => D(Y) === y);
        } catch (x) {
          H.value = `Anlegen fehlgeschlagen: ${R(x)}`;
        }
      }
    }
    async function Zt(U) {
      const y = f.value;
      if (y) {
        H.value = "";
        try {
          await y.delete(U), F(U) && ($.value = void 0), k.value === U && (k.value = void 0), await de(y);
        } catch (x) {
          H.value = `Löschen fehlgeschlagen: ${R(x)}`;
        }
      }
    }
    function Zn(U) {
      const y = typeof U.data == "string" ? U.data : JSON.stringify(U.data), x = URL.createObjectURL(new Blob([y], { type: "application/json" })), Y = document.createElement("a");
      Y.href = x, Y.download = `${D(U)}.json`, Y.click(), URL.revokeObjectURL(x);
    }
    return Kn(ie), Nn(() => w, ie), (U, y) => (_(), A("div", g1, [
      u("aside", v1, [
        Kt(u("input", {
          "onUpdate:modelValue": y[0] || (y[0] = (x) => G.value = x),
          class: "tree__search",
          type: "search",
          placeholder: "Stände filtern",
          "aria-label": "Stände filtern"
        }, null, 512), [
          [Ho, G.value]
        ]),
        u("div", h1, [
          (_(!0), A(Ce, null, Ge(c.value, (x) => (_(), A(Ce, {
            key: Z(x)
          }, [
            u("button", {
              type: "button",
              role: "treeitem",
              "aria-expanded": C.value.has(Z(x)),
              class: Ee(["row", "row--place", { on: f.value === x && !k.value }]),
              onClick: (Y) => $e(x)
            }, [
              u("span", m1, z(C.value.has(Z(x)) ? "▾" : "▸"), 1),
              u("span", b1, z(x.name), 1),
              u("span", y1, z((T.value[Z(x)] ?? []).length), 1)
            ], 10, _1),
            C.value.has(Z(x)) ? (_(), A(Ce, { key: 0 }, [
              (_(!0), A(Ce, null, Ge(en(x), (Y) => (_(), A("button", {
                key: String(Y.uri),
                type: "button",
                role: "treeitem",
                class: Ee(["row", "row--entry", { on: k.value === Y }]),
                onClick: (Oe) => ye(x, Y)
              }, [
                u("span", {
                  class: Ee(["row__dot", { open: F(Y) }]),
                  "aria-hidden": "true"
                }, null, 2),
                u("span", k1, z(D(Y)), 1),
                u("span", x1, z(un(Y)), 1)
              ], 10, w1))), 128)),
              en(x).length === 0 ? (_(), A("p", S1, z(G.value ? "Nichts gefunden" : "Noch kein Stand"), 1)) : re("", !0),
              X(x) ? (_(), A("button", {
                key: 1,
                type: "button",
                class: "row row--add",
                onClick: (Y) => On(x)
              }, [...y[8] || (y[8] = [
                u("span", { class: "row__twist" }, "＋", -1),
                u("span", { class: "row__name" }, "Aktuellen Stand ablegen…", -1)
              ])], 8, C1)) : re("", !0)
            ], 64)) : re("", !0)
          ], 64))), 128)),
          c.value.length ? re("", !0) : (_(), A("p", A1, "Keine Speicherorte eingerichtet."))
        ])
      ]),
      u("section", I1, [
        H.value ? (_(), A("p", $1, z(H.value), 1)) : re("", !0),
        q.value ? (_(), A(Ce, { key: 1 }, [
          u("header", R1, [
            y[9] || (y[9] = u("h2", { class: "detail__name" }, "Neuen Stand ablegen", -1)),
            u("span", E1, "in " + z(f.value?.name), 1)
          ]),
          u("form", {
            class: "create",
            onSubmit: Mn(Fn, ["prevent"])
          }, [
            y[12] || (y[12] = u("label", {
              class: "create__label",
              for: "storage-name"
            }, "Name", -1)),
            Kt(u("input", {
              id: "storage-name",
              "onUpdate:modelValue": y[1] || (y[1] = (x) => V.value = x),
              class: "create__input",
              type: "text",
              placeholder: "z. B. bodenfeuchte"
            }, null, 512), [
              [Ho, V.value]
            ]),
            B(m(be), {
              intent: "primary",
              size: "sm",
              type: "submit",
              disabled: !V.value.trim()
            }, {
              default: ne(() => [...y[10] || (y[10] = [
                ae("Ablegen", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            B(m(be), {
              size: "sm",
              onClick: y[2] || (y[2] = (x) => q.value = !1)
            }, {
              default: ne(() => [...y[11] || (y[11] = [
                ae("Abbrechen", -1)
              ])]),
              _: 1
            }),
            u("p", T1, " Abgelegt wird der gesamte Arbeitsstand: " + z(ht.value.boards) + " " + z(ht.value.boards === 1 ? "Board" : "Boards") + " mit " + z(ht.value.widgets) + " Widgets, dazu Verbindungen, Datenquellen und Variablen. ", 1)
          ], 32)
        ], 64)) : Ve.value && !k.value ? (_(), Be(Yn(Ve.value), {
          key: 2,
          repo: f.value,
          context: T.value[Z(f.value)],
          onClose: y[3] || (y[3] = (x) => de(f.value))
        }, null, 40, ["repo", "context"])) : k.value ? (_(), A(Ce, { key: 3 }, [
          u("header", O1, [
            u("h2", L1, z(D(k.value)), 1),
            F(k.value) ? (_(), A("span", B1, "geladen")) : re("", !0),
            u("span", D1, z(f.value?.name) + " · " + z(ln.value.boards) + " " + z(ln.value.boards === 1 ? "Board" : "Boards") + " · " + z(ln.value.widgets) + " Widgets · " + z(ln.value.sources) + " Datenquellen ", 1),
            y[17] || (y[17] = u("span", { class: "detail__spacer" }, null, -1)),
            B(m(be), {
              intent: "primary",
              size: "sm",
              onClick: y[4] || (y[4] = (x) => $t(k.value))
            }, {
              default: ne(() => [...y[13] || (y[13] = [
                ae("Laden", -1)
              ])]),
              _: 1
            }),
            X(f.value) ? (_(), Be(m(be), {
              key: 1,
              size: "sm",
              title: "Aktuellen Arbeitsstand hierhin schreiben",
              onClick: y[5] || (y[5] = (x) => _t(k.value))
            }, {
              default: ne(() => [...y[14] || (y[14] = [
                ae(" Überschreiben ", -1)
              ])]),
              _: 1
            })) : re("", !0),
            B(m(be), {
              size: "sm",
              onClick: y[6] || (y[6] = (x) => Zn(k.value))
            }, {
              default: ne(() => [...y[15] || (y[15] = [
                ae("Herunterladen", -1)
              ])]),
              _: 1
            }),
            X(f.value) ? (_(), Be(m(be), {
              key: 2,
              intent: "danger",
              size: "sm",
              onClick: y[7] || (y[7] = (x) => Zt(k.value))
            }, {
              default: ne(() => [...y[16] || (y[16] = [
                ae(" Löschen ", -1)
              ])]),
              _: 1
            })) : re("", !0)
          ]),
          sn.value.length ? (_(), A("div", W1, [
            (_(!0), A(Ce, null, Ge(sn.value, (x) => (_(), A("article", {
              key: x.id,
              class: "board"
            }, [
              B(Zo, {
                items: x.items,
                "type-by-id": x.typeById
              }, null, 8, ["items", "type-by-id"]),
              u("div", V1, [
                u("h3", P1, z(x.name), 1),
                u("p", M1, z(x.widgetCount) + " Widgets · " + z(x.sourceCount) + " " + z(x.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1),
                x.kinds.length ? (_(), A("p", U1, z(x.kinds.join(" · ")), 1)) : re("", !0)
              ])
            ]))), 128))
          ])) : (_(), A("p", N1, " In diesem Stand liegt kein Board - er enthält nur Verbindungen, Quellen oder Variablen. "))
        ], 64)) : te.value ? (_(), A("p", F1, "Wird gelesen…")) : (_(), A("p", z1, "Wähle links einen Stand, um zu sehen, was darin liegt."))
      ])
    ]));
  }
}), G1 = /* @__PURE__ */ je(q1, [["__scopeId", "data-v-82d034f3"]]), H1 = { class: "boards" }, K1 = { class: "boards__panel" }, Y1 = { class: "boards__bar" }, Z1 = {
  class: "boards__views",
  role: "tablist",
  "aria-label": "Ansicht"
}, J1 = ["aria-selected"], X1 = {
  key: 0,
  class: "boards__count"
}, Q1 = ["aria-selected"], j1 = {
  key: 0,
  class: "boards__tools"
}, e0 = { class: "boards__body" }, n0 = {
  key: 0,
  class: "boards__empty"
}, t0 = { class: "boards__empty-actions" }, r0 = {
  key: 1,
  class: "boards__grid"
}, i0 = ["aria-label", "onClick", "onKeydown"], o0 = { class: "board__body" }, a0 = { class: "board__name" }, s0 = { class: "board__meta" }, l0 = {
  key: 0,
  class: "board__usage"
}, u0 = {
  key: 1,
  class: "board__kinds"
}, d0 = {
  key: 0,
  class: "board__kind board__kind--more"
}, c0 = ["aria-label", "onClick"], f0 = {
  key: 0,
  class: "boards__nomatch"
}, p0 = /* @__PURE__ */ Qe({
  __name: "BoardsHome",
  props: {
    pageRepo: {},
    layoutRepo: {}
  },
  setup(g) {
    const h = g, o = ea(), w = br(), b = j(""), { usageOf: I, byUsage: c, lastOpenedLabel: T } = vu(), C = j(w.query.view === "storage" ? "storage" : "boards"), f = Tn(xe(at), (V) => V.pages), k = ee(() => {
      f.value;
      const V = h.pageRepo;
      return V ? V.getAllPageIds().slice().sort(c).map(
        (R) => (
          /* Both halves come off the page itself now. */
          bu(
            R,
            V.getPage(R),
            V.getPage(R)?.layout?.toArray() ?? [],
            V.getPage(R)?.widgets?.toArray() ?? []
          )
        )
      ) : [];
    }), G = ee(() => {
      const V = b.value.trim().toLowerCase();
      return V ? k.value.filter(
        (R) => R.name.toLowerCase().includes(V) || R.description.toLowerCase().includes(V) || R.kinds.some((D) => D.toLowerCase().includes(V))
      ) : k.value;
    });
    function H(V) {
      o.push(`/page/${V}`);
    }
    function te(V) {
      o.push(`/page/${V}/edit`);
    }
    function $() {
      const V = h.pageRepo;
      if (!V || !h.layoutRepo) return;
      const R = ru();
      V.registerPage({
        id: R,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), o.push(`/page/${R}/edit`);
    }
    function q() {
      C.value = "storage";
    }
    return (V, R) => (_(), A("div", H1, [
      u("div", K1, [
        u("header", Y1, [
          u("div", Z1, [
            u("button", {
              type: "button",
              role: "tab",
              "aria-selected": C.value === "boards",
              class: Ee(["boards__view", { on: C.value === "boards" }]),
              onClick: R[0] || (R[0] = (D) => C.value = "boards")
            }, [
              R[4] || (R[4] = ae(" Oft genutzt ", -1)),
              k.value.length ? (_(), A("span", X1, z(k.value.length), 1)) : re("", !0)
            ], 10, J1),
            u("button", {
              type: "button",
              role: "tab",
              "aria-selected": C.value === "storage",
              class: Ee(["boards__view", { on: C.value === "storage" }]),
              onClick: R[1] || (R[1] = (D) => C.value = "storage")
            }, " Speicher ", 10, Q1)
          ]),
          C.value === "boards" ? (_(), A("div", j1, [
            Kt(u("input", {
              "onUpdate:modelValue": R[2] || (R[2] = (D) => b.value = D),
              class: "boards__search",
              type: "search",
              placeholder: "Boards filtern",
              "aria-label": "Boards filtern"
            }, null, 512), [
              [Ho, b.value]
            ]),
            B(m(be), {
              intent: "primary",
              size: "sm",
              onClick: $
            }, {
              default: ne(() => [...R[5] || (R[5] = [
                ae("Neues Board", -1)
              ])]),
              _: 1
            })
          ])) : re("", !0)
        ]),
        u("div", e0, [
          C.value === "boards" && k.value.length === 0 ? (_(), A("div", n0, [
            B(Zo, {
              class: "boards__empty-plan",
              items: [
                { id: "a", x: 0, y: 0, width: 2, height: 1 },
                { id: "b", x: 2, y: 0, width: 1, height: 2 },
                { id: "c", x: 0, y: 1, width: 1, height: 1 },
                { id: "d", x: 1, y: 1, width: 1, height: 1 }
              ],
              "type-by-id": { a: "chart", b: "map", c: "table", d: "text" }
            }),
            R[8] || (R[8] = u("h2", { class: "boards__empty-title" }, "Noch kein Board", -1)),
            R[9] || (R[9] = u("p", { class: "boards__empty-text" }, " Ein Board ist eine Seite mit Widgets über deinen Datenquellen. Lege eines an oder öffne einen gespeicherten Arbeitsstand. ", -1)),
            u("div", t0, [
              B(m(be), {
                intent: "primary",
                size: "sm",
                onClick: $
              }, {
                default: ne(() => [...R[6] || (R[6] = [
                  ae("Neues Board", -1)
                ])]),
                _: 1
              }),
              B(m(be), {
                size: "sm",
                onClick: q
              }, {
                default: ne(() => [...R[7] || (R[7] = [
                  ae("Aus Speicher öffnen", -1)
                ])]),
                _: 1
              })
            ])
          ])) : C.value === "boards" ? (_(), A("div", r0, [
            (_(!0), A(Ce, null, Ge(G.value, (D) => (_(), A("article", {
              key: D.id,
              class: "board",
              tabindex: "0",
              role: "button",
              "aria-label": `Board ${D.name} öffnen`,
              onClick: (Z) => H(D.id),
              onKeydown: [
                vi((Z) => H(D.id), ["enter"]),
                vi(Mn((Z) => H(D.id), ["prevent"]), ["space"])
              ]
            }, [
              B(Zo, {
                items: D.items,
                "type-by-id": D.typeById
              }, null, 8, ["items", "type-by-id"]),
              u("div", o0, [
                u("h2", a0, z(D.name), 1),
                u("p", s0, [
                  ae(z(D.widgetCount) + " " + z(D.widgetCount === 1 ? "Widget" : "Widgets") + " ", 1),
                  D.sourceCount ? (_(), A(Ce, { key: 0 }, [
                    ae(" · " + z(D.sourceCount) + " " + z(D.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1)
                  ], 64)) : re("", !0)
                ]),
                m(I)(D.id) ? (_(), A("p", l0, z(m(I)(D.id)?.count) + "× geöffnet · zuletzt " + z(m(T)(D.id)), 1)) : re("", !0),
                D.kinds.length ? (_(), A("ul", u0, [
                  (_(!0), A(Ce, null, Ge(D.kinds.slice(0, 3), (Z) => (_(), A("li", {
                    key: Z,
                    class: "board__kind"
                  }, z(Z), 1))), 128)),
                  D.kinds.length > 3 ? (_(), A("li", d0, " +" + z(D.kinds.length - 3), 1)) : re("", !0)
                ])) : re("", !0)
              ]),
              u("button", {
                class: "board__edit",
                type: "button",
                "aria-label": `Board ${D.name} bearbeiten`,
                onClick: Mn((Z) => te(D.id), ["stop"])
              }, " Bearbeiten ", 8, c0)
            ], 40, i0))), 128)),
            u("button", {
              class: "board board--new",
              type: "button",
              onClick: $
            }, [...R[10] || (R[10] = [
              u("span", {
                class: "board__plus",
                "aria-hidden": "true"
              }, "+", -1),
              u("span", { class: "board__name" }, "Neues Board", -1),
              u("span", { class: "board__meta" }, "Leer starten", -1)
            ])]),
            G.value.length === 0 ? (_(), A("p", f0, " Kein Board passt zu „" + z(b.value) + "“. ", 1)) : re("", !0)
          ])) : (_(), Be(G1, {
            key: 2,
            onRestored: R[3] || (R[3] = (D) => C.value = "boards")
          }))
        ])
      ])
    ]));
  }
}), g0 = /* @__PURE__ */ je(p0, [["__scopeId", "data-v-4c11f243"]]), v0 = { class: "report-container" }, h0 = /* @__PURE__ */ Qe({
  __name: "ViewReport",
  props: ["params"],
  setup(g) {
    const h = g, o = br(), w = xe(yr), b = xe(yi), I = ee(() => h.params?.pageid ?? o.params.pageid ?? ""), { recordOpened: c } = vu();
    return Nn(I, (T) => c(T), { immediate: !0 }), (T, C) => (_(), A("div", v0, [
      I.value ? (_(), Be(hu, {
        key: 0,
        pageId: I.value,
        viewMode: !0
      }, null, 8, ["pageId"])) : (_(), Be(g0, {
        key: 1,
        "page-repo": m(w),
        "layout-repo": m(b)
      }, null, 8, ["page-repo", "layout-repo"]))
    ]));
  }
}), Nl = /* @__PURE__ */ je(h0, [["__scopeId", "data-v-3ecae506"]]), _0 = { boards: 0, widgets: 0 };
function yu() {
  const g = xe(yr);
  function h() {
    const b = {};
    if (!g) return b;
    for (const I of g.getAllPageIds()) {
      const c = /* @__PURE__ */ new Set();
      for (const T of g.getPage(I)?.widgets?.toArray() ?? []) {
        const C = T.datasource?.uid;
        if (!C) continue;
        const f = b[C] ??= { boards: 0, widgets: 0 };
        f.widgets++, c.add(C);
      }
      for (const T of c) b[T].boards++;
    }
    return b;
  }
  function o(b) {
    return h()[b] ?? _0;
  }
  function w(b) {
    if (!b.widgets) return "";
    const I = `${b.boards} ${b.boards === 1 ? "Board" : "Boards"}`, c = `${b.widgets} ${b.widgets === 1 ? "Widget" : "Widgets"}`;
    return `${I} · ${c}`;
  }
  return { usageByDatasource: h, usageOf: o, usageLabel: w };
}
const m0 = { class: "tree" }, b0 = { class: "tree__head" }, y0 = { class: "tree__search" }, w0 = { class: "tree__body" }, k0 = {
  key: 0,
  class: "tree__empty"
}, x0 = {
  key: 1,
  class: "tree__list"
}, S0 = ["title", "onClick"], C0 = ["disabled", "onClick"], A0 = { class: "row__name" }, I0 = {
  key: 0,
  class: "row__what"
}, $0 = { class: "row__what" }, R0 = {
  key: 0,
  class: "tree__sources"
}, E0 = { class: "row__twist row__twist--none" }, T0 = ["onClick"], O0 = { class: "row__name" }, L0 = { class: "row__what" }, B0 = {
  key: 0,
  class: "row__usage"
}, D0 = {
  key: 0,
  class: "tree__none"
}, W0 = { class: "confirm__title" }, V0 = { class: "confirm__text" }, P0 = {
  key: 0,
  class: "confirm__text confirm__text--warn"
}, M0 = /* @__PURE__ */ Qe({
  __name: "DataTree",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ hi(["findEndpoints"], ["update:modelValue"]),
  setup(g, { emit: h }) {
    const o = jo(g, "modelValue"), w = xe(na), b = xe(at), I = Tn(b, (ie) => ie.connections), c = xe(ta), T = Tn(b, (ie) => ie.datasources), { usageByDatasource: C, usageLabel: f } = yu(), k = h, G = j(""), H = j(/* @__PURE__ */ new Set()), te = ee(() => {
      const ie = C(), ce = G.value.trim().toLowerCase(), de = (...M) => !ce || M.some((pe) => (pe ?? "").toLowerCase().includes(ce)), $e = (M) => T.value.filter((pe) => pe.connection?.uid === M).filter((pe) => de(pe.name, pe.type, pe.uid)).map((pe) => ({
        uid: pe.uid,
        name: pe.name,
        type: pe.type,
        usage: f(ie[pe.uid] ?? { boards: 0, widgets: 0 })
      })), en = I.value.map((M) => ({
        /* A connection just created has no type yet, and the row says so by
           showing none - the model has every feature optional for that reason. */
        uid: M.uid ?? "",
        name: M.name ?? "",
        type: M.type ?? "",
        orphan: !1,
        sources: $e(M.uid),
        /* A connection stays visible while its own name matches, even with no
           source under it - otherwise searching would hide where to add one. */
        itself: de(M.name, M.type, M.uid)
      })), ye = new Set(I.value.map((M) => M.uid)), F = T.value.filter((M) => !M.connection || !ye.has(M.connection.uid)).filter((M) => de(M.name, M.type, M.uid)).map((M) => ({
        uid: M.uid,
        name: M.name,
        type: M.type,
        usage: f(ie[M.uid] ?? { boards: 0, widgets: 0 })
      })), N = en.filter((M) => M.itself || M.sources.length);
      return F.length && N.push({
        uid: "",
        name: "Ohne Verbindung",
        type: "",
        orphan: !0,
        sources: F,
        itself: !0
      }), N;
    }), $ = (ie) => !H.value.has(ie);
    function q(ie) {
      const ce = new Set(H.value);
      ce.has(ie) ? ce.delete(ie) : ce.add(ie), H.value = ce;
    }
    const V = (ie, ce) => o.value?.type === ie && o.value?.itemId === ce;
    function R(ie, ce) {
      o.value = { type: ie, itemId: ce };
    }
    function D() {
      R("Connection", w.createConnection("").uid);
    }
    function Z() {
      R("DataSource", c.createDatasource("").uid);
    }
    const ue = j(void 0);
    function P(ie, ce) {
      ue.value = { type: ie, itemId: ce };
    }
    function X() {
      const ie = ue.value;
      ie && (ie.type === "Connection" ? w.removeConnection(ie.itemId) : c.removeDatasource(ie.itemId), V(ie.type, ie.itemId) && (o.value = void 0), ue.value = void 0);
    }
    const ve = ee(() => {
      const ie = ue.value;
      return ie ? (ie.type === "Connection" ? I.value.find((de) => de.uid === ie.itemId) : T.value.find((de) => de.uid === ie.itemId))?.name ?? ie.itemId : "";
    }), Ve = ee(() => {
      const ie = ue.value;
      return !ie || ie.type !== "DataSource" ? "" : f(C()[ie.itemId] ?? { boards: 0, widgets: 0 });
    });
    return (ie, ce) => (_(), A(Ce, null, [
      u("section", m0, [
        u("header", b0, [
          ce[5] || (ce[5] = u("h2", { class: "tree__title" }, "Verbindungen & Daten", -1)),
          B(m(be), {
            intent: "quiet",
            size: "sm",
            title: "Verbindung anlegen",
            onClick: D
          }, {
            default: ne(() => [
              B(m(Xe), {
                name: "add_link",
                size: "sm"
              })
            ]),
            _: 1
          }),
          B(m(be), {
            intent: "quiet",
            size: "sm",
            title: "Datenquelle anlegen",
            onClick: Z
          }, {
            default: ne(() => [
              B(m(Xe), {
                name: "add",
                size: "sm"
              })
            ]),
            _: 1
          }),
          B(m(be), {
            intent: "quiet",
            size: "sm",
            title: "Endpunkte suchen",
            onClick: ce[0] || (ce[0] = (de) => k("findEndpoints"))
          }, {
            default: ne(() => [
              B(m(Xe), {
                name: "travel_explore",
                size: "sm"
              })
            ]),
            _: 1
          })
        ]),
        u("div", y0, [
          B(m(gn), {
            modelValue: G.value,
            "onUpdate:modelValue": ce[1] || (ce[1] = (de) => G.value = de),
            type: "search",
            placeholder: "Suchen…",
            stacked: ""
          }, null, 8, ["modelValue"])
        ]),
        u("div", w0, [
          te.value.length ? (_(), A("ul", x0, [
            (_(!0), A(Ce, null, Ge(te.value, (de) => (_(), A("li", {
              key: de.uid || "loose"
            }, [
              u("div", {
                class: Ee(["row", "row--connection", { "row--on": V("Connection", de.uid) }])
              }, [
                u("button", {
                  type: "button",
                  class: "row__twist",
                  title: $(de.uid) ? "Zuklappen" : "Aufklappen",
                  onClick: ($e) => q(de.uid)
                }, [
                  B(m(Xe), {
                    name: $(de.uid) ? "expand_more" : "chevron_right",
                    size: "sm"
                  }, null, 8, ["name"])
                ], 8, S0),
                u("button", {
                  type: "button",
                  class: "row__body",
                  disabled: de.orphan,
                  onClick: ($e) => !de.orphan && R("Connection", de.uid)
                }, [
                  u("span", A0, z(de.name), 1),
                  de.type ? (_(), A("span", I0, z(de.type), 1)) : re("", !0),
                  u("span", $0, z(de.sources.length), 1)
                ], 8, C0),
                de.orphan ? re("", !0) : (_(), Be(m(be), {
                  key: 0,
                  intent: "quiet",
                  size: "sm",
                  title: "Verbindung löschen",
                  onClick: Mn(($e) => P("Connection", de.uid), ["stop"])
                }, {
                  default: ne(() => [
                    B(m(Xe), {
                      name: "delete",
                      size: "sm"
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"]))
              ], 2),
              $(de.uid) ? (_(), A("ul", R0, [
                (_(!0), A(Ce, null, Ge(de.sources, ($e) => (_(), A("li", {
                  key: $e.uid
                }, [
                  u("div", {
                    class: Ee(["row", "row--source", { "row--on": V("DataSource", $e.uid) }])
                  }, [
                    u("span", E0, [
                      B(m(Xe), {
                        name: "database",
                        size: "sm"
                      })
                    ]),
                    u("button", {
                      type: "button",
                      class: "row__body",
                      onClick: (en) => R("DataSource", $e.uid)
                    }, [
                      u("span", O0, z($e.name), 1),
                      u("span", L0, z($e.type), 1),
                      $e.usage ? (_(), A("span", B0, z($e.usage), 1)) : re("", !0)
                    ], 8, T0),
                    B(m(be), {
                      intent: "quiet",
                      size: "sm",
                      title: "Datenquelle löschen",
                      onClick: Mn((en) => P("DataSource", $e.uid), ["stop"])
                    }, {
                      default: ne(() => [
                        B(m(Xe), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ], 2)
                ]))), 128)),
                !de.sources.length && !de.orphan ? (_(), A("li", D0, " Keine Datenquelle an dieser Verbindung. ")) : re("", !0)
              ])) : re("", !0)
            ]))), 128))
          ])) : (_(), A("p", k0, [
            G.value ? (_(), A(Ce, { key: 0 }, [
              ae("Nichts gefunden.")
            ], 64)) : (_(), A(Ce, { key: 1 }, [
              ae("Noch keine Verbindung. Lege eine an, um Daten zu lesen.")
            ], 64))
          ]))
        ])
      ]),
      B(m(Ko), {
        "model-value": !!ue.value,
        size: "sm",
        "onUpdate:modelValue": ce[3] || (ce[3] = (de) => ue.value = void 0),
        onCancel: ce[4] || (ce[4] = (de) => ue.value = void 0)
      }, {
        header: ne(() => [
          B(m(Xe), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          u("h2", W0, z(ue.value?.type === "Connection" ? "Verbindung löschen" : "Datenquelle löschen"), 1)
        ]),
        actions: ne(() => [
          B(m(be), {
            intent: "quiet",
            onClick: ce[2] || (ce[2] = (de) => ue.value = void 0)
          }, {
            default: ne(() => [...ce[6] || (ce[6] = [
              ae("Abbrechen", -1)
            ])]),
            _: 1
          }),
          B(m(be), {
            intent: "danger",
            onClick: X
          }, {
            default: ne(() => [...ce[7] || (ce[7] = [
              ae("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: ne(() => [
          u("p", V0, " „" + z(ve.value) + "“ wird entfernt. Das lässt sich nicht rückgängig machen. ", 1),
          Ve.value ? (_(), A("p", P0, " Verwendet in " + z(Ve.value) + " — die lesen danach ins Leere. ", 1)) : re("", !0)
        ]),
        _: 1
      }, 8, ["model-value"])
    ], 64));
  }
}), U0 = /* @__PURE__ */ je(M0, [["__scopeId", "data-v-19322c5a"]]);
var pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var N0 = hr.exports, Fl;
function F0() {
  return Fl || (Fl = 1, (function(g, h) {
    (function() {
      var o, w = "4.17.21", b = 200, I = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", T = "Invalid `variable` option passed into `_.template`", C = "__lodash_hash_undefined__", f = 500, k = "__lodash_placeholder__", G = 1, H = 2, te = 4, $ = 1, q = 2, V = 1, R = 2, D = 4, Z = 8, ue = 16, P = 32, X = 64, ve = 128, Ve = 256, ie = 512, ce = 30, de = "...", $e = 800, en = 16, ye = 1, F = 2, N = 3, M = 1 / 0, pe = 9007199254740991, sn = 17976931348623157e292, ln = NaN, un = 4294967295, ht = un - 1, $t = un >>> 1, _t = [
        ["ary", ve],
        ["bind", V],
        ["bindKey", R],
        ["curry", Z],
        ["curryRight", ue],
        ["flip", ie],
        ["partial", P],
        ["partialRight", X],
        ["rearg", Ve]
      ], On = "[object Arguments]", Fn = "[object Array]", Zt = "[object AsyncFunction]", Zn = "[object Boolean]", U = "[object Date]", y = "[object DOMException]", x = "[object Error]", Y = "[object Function]", Oe = "[object GeneratorFunction]", Ae = "[object Map]", kn = "[object Number]", vn = "[object Null]", Ln = "[object Object]", ra = "[object Promise]", wu = "[object Proxy]", Jt = "[object RegExp]", Bn = "[object Set]", Xt = "[object String]", wr = "[object Symbol]", ku = "[object Undefined]", Qt = "[object WeakMap]", xu = "[object WeakSet]", jt = "[object ArrayBuffer]", Rt = "[object DataView]", wi = "[object Float32Array]", ki = "[object Float64Array]", xi = "[object Int8Array]", Si = "[object Int16Array]", Ci = "[object Int32Array]", Ai = "[object Uint8Array]", Ii = "[object Uint8ClampedArray]", $i = "[object Uint16Array]", Ri = "[object Uint32Array]", Su = /\b__p \+= '';/g, Cu = /\b(__p \+=) '' \+/g, Au = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ia = /&(?:amp|lt|gt|quot|#39);/g, oa = /[&<>"']/g, Iu = RegExp(ia.source), $u = RegExp(oa.source), Ru = /<%-([\s\S]+?)%>/g, Eu = /<%([\s\S]+?)%>/g, aa = /<%=([\s\S]+?)%>/g, Tu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ou = /^\w*$/, Lu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ei = /[\\^$.*+?()[\]{}|]/g, Bu = RegExp(Ei.source), Ti = /^\s+/, Du = /\s/, Wu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Vu = /\{\n\/\* \[wrapped with (.+)\] \*/, Pu = /,? & /, Mu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Uu = /[()=,{}\[\]\/\s]/, Nu = /\\(\\)?/g, Fu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, sa = /\w*$/, zu = /^[-+]0x[0-9a-f]+$/i, qu = /^0b[01]+$/i, Gu = /^\[object .+?Constructor\]$/, Hu = /^0o[0-7]+$/i, Ku = /^(?:0|[1-9]\d*)$/, Yu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, kr = /($^)/, Zu = /['\n\r\u2028\u2029\\]/g, xr = "\\ud800-\\udfff", Ju = "\\u0300-\\u036f", Xu = "\\ufe20-\\ufe2f", Qu = "\\u20d0-\\u20ff", la = Ju + Xu + Qu, ua = "\\u2700-\\u27bf", da = "a-z\\xdf-\\xf6\\xf8-\\xff", ju = "\\xac\\xb1\\xd7\\xf7", ed = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", nd = "\\u2000-\\u206f", td = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ca = "A-Z\\xc0-\\xd6\\xd8-\\xde", fa = "\\ufe0e\\ufe0f", pa = ju + ed + nd + td, Oi = "['’]", rd = "[" + xr + "]", ga = "[" + pa + "]", Sr = "[" + la + "]", va = "\\d+", id = "[" + ua + "]", ha = "[" + da + "]", _a = "[^" + xr + pa + va + ua + da + ca + "]", Li = "\\ud83c[\\udffb-\\udfff]", od = "(?:" + Sr + "|" + Li + ")", ma = "[^" + xr + "]", Bi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Di = "[\\ud800-\\udbff][\\udc00-\\udfff]", Et = "[" + ca + "]", ba = "\\u200d", ya = "(?:" + ha + "|" + _a + ")", ad = "(?:" + Et + "|" + _a + ")", wa = "(?:" + Oi + "(?:d|ll|m|re|s|t|ve))?", ka = "(?:" + Oi + "(?:D|LL|M|RE|S|T|VE))?", xa = od + "?", Sa = "[" + fa + "]?", sd = "(?:" + ba + "(?:" + [ma, Bi, Di].join("|") + ")" + Sa + xa + ")*", ld = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ud = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ca = Sa + xa + sd, dd = "(?:" + [id, Bi, Di].join("|") + ")" + Ca, cd = "(?:" + [ma + Sr + "?", Sr, Bi, Di, rd].join("|") + ")", fd = RegExp(Oi, "g"), pd = RegExp(Sr, "g"), Wi = RegExp(Li + "(?=" + Li + ")|" + cd + Ca, "g"), gd = RegExp([
        Et + "?" + ha + "+" + wa + "(?=" + [ga, Et, "$"].join("|") + ")",
        ad + "+" + ka + "(?=" + [ga, Et + ya, "$"].join("|") + ")",
        Et + "?" + ya + "+" + wa,
        Et + "+" + ka,
        ud,
        ld,
        va,
        dd
      ].join("|"), "g"), vd = RegExp("[" + ba + xr + la + fa + "]"), hd = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, _d = [
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
      ], md = -1, We = {};
      We[wi] = We[ki] = We[xi] = We[Si] = We[Ci] = We[Ai] = We[Ii] = We[$i] = We[Ri] = !0, We[On] = We[Fn] = We[jt] = We[Zn] = We[Rt] = We[U] = We[x] = We[Y] = We[Ae] = We[kn] = We[Ln] = We[Jt] = We[Bn] = We[Xt] = We[Qt] = !1;
      var De = {};
      De[On] = De[Fn] = De[jt] = De[Rt] = De[Zn] = De[U] = De[wi] = De[ki] = De[xi] = De[Si] = De[Ci] = De[Ae] = De[kn] = De[Ln] = De[Jt] = De[Bn] = De[Xt] = De[wr] = De[Ai] = De[Ii] = De[$i] = De[Ri] = !0, De[x] = De[Y] = De[Qt] = !1;
      var bd = {
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
      }, yd = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, wd = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, kd = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, xd = parseFloat, Sd = parseInt, Aa = typeof pi == "object" && pi && pi.Object === Object && pi, Cd = typeof self == "object" && self && self.Object === Object && self, Ke = Aa || Cd || Function("return this")(), Vi = h && !h.nodeType && h, mt = Vi && !0 && g && !g.nodeType && g, Ia = mt && mt.exports === Vi, Pi = Ia && Aa.process, xn = (function() {
        try {
          var p = mt && mt.require && mt.require("util").types;
          return p || Pi && Pi.binding && Pi.binding("util");
        } catch {
        }
      })(), $a = xn && xn.isArrayBuffer, Ra = xn && xn.isDate, Ea = xn && xn.isMap, Ta = xn && xn.isRegExp, Oa = xn && xn.isSet, La = xn && xn.isTypedArray;
      function hn(p, E, S) {
        switch (S.length) {
          case 0:
            return p.call(E);
          case 1:
            return p.call(E, S[0]);
          case 2:
            return p.call(E, S[0], S[1]);
          case 3:
            return p.call(E, S[0], S[1], S[2]);
        }
        return p.apply(E, S);
      }
      function Ad(p, E, S, J) {
        for (var fe = -1, Ie = p == null ? 0 : p.length; ++fe < Ie; ) {
          var ze = p[fe];
          E(J, ze, S(ze), p);
        }
        return J;
      }
      function Sn(p, E) {
        for (var S = -1, J = p == null ? 0 : p.length; ++S < J && E(p[S], S, p) !== !1; )
          ;
        return p;
      }
      function Id(p, E) {
        for (var S = p == null ? 0 : p.length; S-- && E(p[S], S, p) !== !1; )
          ;
        return p;
      }
      function Ba(p, E) {
        for (var S = -1, J = p == null ? 0 : p.length; ++S < J; )
          if (!E(p[S], S, p))
            return !1;
        return !0;
      }
      function st(p, E) {
        for (var S = -1, J = p == null ? 0 : p.length, fe = 0, Ie = []; ++S < J; ) {
          var ze = p[S];
          E(ze, S, p) && (Ie[fe++] = ze);
        }
        return Ie;
      }
      function Cr(p, E) {
        var S = p == null ? 0 : p.length;
        return !!S && Tt(p, E, 0) > -1;
      }
      function Mi(p, E, S) {
        for (var J = -1, fe = p == null ? 0 : p.length; ++J < fe; )
          if (S(E, p[J]))
            return !0;
        return !1;
      }
      function Pe(p, E) {
        for (var S = -1, J = p == null ? 0 : p.length, fe = Array(J); ++S < J; )
          fe[S] = E(p[S], S, p);
        return fe;
      }
      function lt(p, E) {
        for (var S = -1, J = E.length, fe = p.length; ++S < J; )
          p[fe + S] = E[S];
        return p;
      }
      function Ui(p, E, S, J) {
        var fe = -1, Ie = p == null ? 0 : p.length;
        for (J && Ie && (S = p[++fe]); ++fe < Ie; )
          S = E(S, p[fe], fe, p);
        return S;
      }
      function $d(p, E, S, J) {
        var fe = p == null ? 0 : p.length;
        for (J && fe && (S = p[--fe]); fe--; )
          S = E(S, p[fe], fe, p);
        return S;
      }
      function Ni(p, E) {
        for (var S = -1, J = p == null ? 0 : p.length; ++S < J; )
          if (E(p[S], S, p))
            return !0;
        return !1;
      }
      var Rd = Fi("length");
      function Ed(p) {
        return p.split("");
      }
      function Td(p) {
        return p.match(Mu) || [];
      }
      function Da(p, E, S) {
        var J;
        return S(p, function(fe, Ie, ze) {
          if (E(fe, Ie, ze))
            return J = Ie, !1;
        }), J;
      }
      function Ar(p, E, S, J) {
        for (var fe = p.length, Ie = S + (J ? 1 : -1); J ? Ie-- : ++Ie < fe; )
          if (E(p[Ie], Ie, p))
            return Ie;
        return -1;
      }
      function Tt(p, E, S) {
        return E === E ? zd(p, E, S) : Ar(p, Wa, S);
      }
      function Od(p, E, S, J) {
        for (var fe = S - 1, Ie = p.length; ++fe < Ie; )
          if (J(p[fe], E))
            return fe;
        return -1;
      }
      function Wa(p) {
        return p !== p;
      }
      function Va(p, E) {
        var S = p == null ? 0 : p.length;
        return S ? qi(p, E) / S : ln;
      }
      function Fi(p) {
        return function(E) {
          return E == null ? o : E[p];
        };
      }
      function zi(p) {
        return function(E) {
          return p == null ? o : p[E];
        };
      }
      function Pa(p, E, S, J, fe) {
        return fe(p, function(Ie, ze, Le) {
          S = J ? (J = !1, Ie) : E(S, Ie, ze, Le);
        }), S;
      }
      function Ld(p, E) {
        var S = p.length;
        for (p.sort(E); S--; )
          p[S] = p[S].value;
        return p;
      }
      function qi(p, E) {
        for (var S, J = -1, fe = p.length; ++J < fe; ) {
          var Ie = E(p[J]);
          Ie !== o && (S = S === o ? Ie : S + Ie);
        }
        return S;
      }
      function Gi(p, E) {
        for (var S = -1, J = Array(p); ++S < p; )
          J[S] = E(S);
        return J;
      }
      function Bd(p, E) {
        return Pe(E, function(S) {
          return [S, p[S]];
        });
      }
      function Ma(p) {
        return p && p.slice(0, za(p) + 1).replace(Ti, "");
      }
      function _n(p) {
        return function(E) {
          return p(E);
        };
      }
      function Hi(p, E) {
        return Pe(E, function(S) {
          return p[S];
        });
      }
      function er(p, E) {
        return p.has(E);
      }
      function Ua(p, E) {
        for (var S = -1, J = p.length; ++S < J && Tt(E, p[S], 0) > -1; )
          ;
        return S;
      }
      function Na(p, E) {
        for (var S = p.length; S-- && Tt(E, p[S], 0) > -1; )
          ;
        return S;
      }
      function Dd(p, E) {
        for (var S = p.length, J = 0; S--; )
          p[S] === E && ++J;
        return J;
      }
      var Wd = zi(bd), Vd = zi(yd);
      function Pd(p) {
        return "\\" + kd[p];
      }
      function Md(p, E) {
        return p == null ? o : p[E];
      }
      function Ot(p) {
        return vd.test(p);
      }
      function Ud(p) {
        return hd.test(p);
      }
      function Nd(p) {
        for (var E, S = []; !(E = p.next()).done; )
          S.push(E.value);
        return S;
      }
      function Ki(p) {
        var E = -1, S = Array(p.size);
        return p.forEach(function(J, fe) {
          S[++E] = [fe, J];
        }), S;
      }
      function Fa(p, E) {
        return function(S) {
          return p(E(S));
        };
      }
      function ut(p, E) {
        for (var S = -1, J = p.length, fe = 0, Ie = []; ++S < J; ) {
          var ze = p[S];
          (ze === E || ze === k) && (p[S] = k, Ie[fe++] = S);
        }
        return Ie;
      }
      function Ir(p) {
        var E = -1, S = Array(p.size);
        return p.forEach(function(J) {
          S[++E] = J;
        }), S;
      }
      function Fd(p) {
        var E = -1, S = Array(p.size);
        return p.forEach(function(J) {
          S[++E] = [J, J];
        }), S;
      }
      function zd(p, E, S) {
        for (var J = S - 1, fe = p.length; ++J < fe; )
          if (p[J] === E)
            return J;
        return -1;
      }
      function qd(p, E, S) {
        for (var J = S + 1; J--; )
          if (p[J] === E)
            return J;
        return J;
      }
      function Lt(p) {
        return Ot(p) ? Hd(p) : Rd(p);
      }
      function Dn(p) {
        return Ot(p) ? Kd(p) : Ed(p);
      }
      function za(p) {
        for (var E = p.length; E-- && Du.test(p.charAt(E)); )
          ;
        return E;
      }
      var Gd = zi(wd);
      function Hd(p) {
        for (var E = Wi.lastIndex = 0; Wi.test(p); )
          ++E;
        return E;
      }
      function Kd(p) {
        return p.match(Wi) || [];
      }
      function Yd(p) {
        return p.match(gd) || [];
      }
      var Zd = (function p(E) {
        E = E == null ? Ke : Bt.defaults(Ke.Object(), E, Bt.pick(Ke, _d));
        var S = E.Array, J = E.Date, fe = E.Error, Ie = E.Function, ze = E.Math, Le = E.Object, Yi = E.RegExp, Jd = E.String, Cn = E.TypeError, $r = S.prototype, Xd = Ie.prototype, Dt = Le.prototype, Rr = E["__core-js_shared__"], Er = Xd.toString, Te = Dt.hasOwnProperty, Qd = 0, qa = (function() {
          var e = /[^.]+$/.exec(Rr && Rr.keys && Rr.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Tr = Dt.toString, jd = Er.call(Le), ec = Ke._, nc = Yi(
          "^" + Er.call(Te).replace(Ei, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Or = Ia ? E.Buffer : o, dt = E.Symbol, Lr = E.Uint8Array, Ga = Or ? Or.allocUnsafe : o, Br = Fa(Le.getPrototypeOf, Le), Ha = Le.create, Ka = Dt.propertyIsEnumerable, Dr = $r.splice, Ya = dt ? dt.isConcatSpreadable : o, nr = dt ? dt.iterator : o, bt = dt ? dt.toStringTag : o, Wr = (function() {
          try {
            var e = St(Le, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), tc = E.clearTimeout !== Ke.clearTimeout && E.clearTimeout, rc = J && J.now !== Ke.Date.now && J.now, ic = E.setTimeout !== Ke.setTimeout && E.setTimeout, Vr = ze.ceil, Pr = ze.floor, Zi = Le.getOwnPropertySymbols, oc = Or ? Or.isBuffer : o, Za = E.isFinite, ac = $r.join, sc = Fa(Le.keys, Le), qe = ze.max, nn = ze.min, lc = J.now, uc = E.parseInt, Ja = ze.random, dc = $r.reverse, Ji = St(E, "DataView"), tr = St(E, "Map"), Xi = St(E, "Promise"), Wt = St(E, "Set"), rr = St(E, "WeakMap"), ir = St(Le, "create"), Mr = rr && new rr(), Vt = {}, cc = Ct(Ji), fc = Ct(tr), pc = Ct(Xi), gc = Ct(Wt), vc = Ct(rr), Ur = dt ? dt.prototype : o, or = Ur ? Ur.valueOf : o, Xa = Ur ? Ur.toString : o;
        function a(e) {
          if (Ue(e) && !ge(e) && !(e instanceof ke)) {
            if (e instanceof An)
              return e;
            if (Te.call(e, "__wrapped__"))
              return Qs(e);
          }
          return new An(e);
        }
        var Pt = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(n) {
            if (!Me(n))
              return {};
            if (Ha)
              return Ha(n);
            e.prototype = n;
            var t = new e();
            return e.prototype = o, t;
          };
        })();
        function Nr() {
        }
        function An(e, n) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
        }
        a.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Ru,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Eu,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: aa,
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
        }, a.prototype = Nr.prototype, a.prototype.constructor = a, An.prototype = Pt(Nr.prototype), An.prototype.constructor = An;
        function ke(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = un, this.__views__ = [];
        }
        function hc() {
          var e = new ke(this.__wrapped__);
          return e.__actions__ = dn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = dn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = dn(this.__views__), e;
        }
        function _c() {
          if (this.__filtered__) {
            var e = new ke(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function mc() {
          var e = this.__wrapped__.value(), n = this.__dir__, t = ge(e), r = n < 0, i = t ? e.length : 0, s = Tf(0, i, this.__views__), l = s.start, d = s.end, v = d - l, O = r ? d : l - 1, L = this.__iteratees__, W = L.length, K = 0, Q = nn(v, this.__takeCount__);
          if (!t || !r && i == v && Q == v)
            return ws(e, this.__actions__);
          var se = [];
          e:
            for (; v-- && K < Q; ) {
              O += n;
              for (var _e = -1, le = e[O]; ++_e < W; ) {
                var we = L[_e], Se = we.iteratee, yn = we.type, an = Se(le);
                if (yn == F)
                  le = an;
                else if (!an) {
                  if (yn == ye)
                    continue e;
                  break e;
                }
              }
              se[K++] = le;
            }
          return se;
        }
        ke.prototype = Pt(Nr.prototype), ke.prototype.constructor = ke;
        function yt(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function bc() {
          this.__data__ = ir ? ir(null) : {}, this.size = 0;
        }
        function yc(e) {
          var n = this.has(e) && delete this.__data__[e];
          return this.size -= n ? 1 : 0, n;
        }
        function wc(e) {
          var n = this.__data__;
          if (ir) {
            var t = n[e];
            return t === C ? o : t;
          }
          return Te.call(n, e) ? n[e] : o;
        }
        function kc(e) {
          var n = this.__data__;
          return ir ? n[e] !== o : Te.call(n, e);
        }
        function xc(e, n) {
          var t = this.__data__;
          return this.size += this.has(e) ? 0 : 1, t[e] = ir && n === o ? C : n, this;
        }
        yt.prototype.clear = bc, yt.prototype.delete = yc, yt.prototype.get = wc, yt.prototype.has = kc, yt.prototype.set = xc;
        function Jn(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function Sc() {
          this.__data__ = [], this.size = 0;
        }
        function Cc(e) {
          var n = this.__data__, t = Fr(n, e);
          if (t < 0)
            return !1;
          var r = n.length - 1;
          return t == r ? n.pop() : Dr.call(n, t, 1), --this.size, !0;
        }
        function Ac(e) {
          var n = this.__data__, t = Fr(n, e);
          return t < 0 ? o : n[t][1];
        }
        function Ic(e) {
          return Fr(this.__data__, e) > -1;
        }
        function $c(e, n) {
          var t = this.__data__, r = Fr(t, e);
          return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
        }
        Jn.prototype.clear = Sc, Jn.prototype.delete = Cc, Jn.prototype.get = Ac, Jn.prototype.has = Ic, Jn.prototype.set = $c;
        function Xn(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function Rc() {
          this.size = 0, this.__data__ = {
            hash: new yt(),
            map: new (tr || Jn)(),
            string: new yt()
          };
        }
        function Ec(e) {
          var n = ei(this, e).delete(e);
          return this.size -= n ? 1 : 0, n;
        }
        function Tc(e) {
          return ei(this, e).get(e);
        }
        function Oc(e) {
          return ei(this, e).has(e);
        }
        function Lc(e, n) {
          var t = ei(this, e), r = t.size;
          return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
        }
        Xn.prototype.clear = Rc, Xn.prototype.delete = Ec, Xn.prototype.get = Tc, Xn.prototype.has = Oc, Xn.prototype.set = Lc;
        function wt(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.__data__ = new Xn(); ++n < t; )
            this.add(e[n]);
        }
        function Bc(e) {
          return this.__data__.set(e, C), this;
        }
        function Dc(e) {
          return this.__data__.has(e);
        }
        wt.prototype.add = wt.prototype.push = Bc, wt.prototype.has = Dc;
        function Wn(e) {
          var n = this.__data__ = new Jn(e);
          this.size = n.size;
        }
        function Wc() {
          this.__data__ = new Jn(), this.size = 0;
        }
        function Vc(e) {
          var n = this.__data__, t = n.delete(e);
          return this.size = n.size, t;
        }
        function Pc(e) {
          return this.__data__.get(e);
        }
        function Mc(e) {
          return this.__data__.has(e);
        }
        function Uc(e, n) {
          var t = this.__data__;
          if (t instanceof Jn) {
            var r = t.__data__;
            if (!tr || r.length < b - 1)
              return r.push([e, n]), this.size = ++t.size, this;
            t = this.__data__ = new Xn(r);
          }
          return t.set(e, n), this.size = t.size, this;
        }
        Wn.prototype.clear = Wc, Wn.prototype.delete = Vc, Wn.prototype.get = Pc, Wn.prototype.has = Mc, Wn.prototype.set = Uc;
        function Qa(e, n) {
          var t = ge(e), r = !t && At(e), i = !t && !r && vt(e), s = !t && !r && !i && Ft(e), l = t || r || i || s, d = l ? Gi(e.length, Jd) : [], v = d.length;
          for (var O in e)
            (n || Te.call(e, O)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
            (O == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            i && (O == "offset" || O == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            s && (O == "buffer" || O == "byteLength" || O == "byteOffset") || // Skip index properties.
            nt(O, v))) && d.push(O);
          return d;
        }
        function ja(e) {
          var n = e.length;
          return n ? e[lo(0, n - 1)] : o;
        }
        function Nc(e, n) {
          return ni(dn(e), kt(n, 0, e.length));
        }
        function Fc(e) {
          return ni(dn(e));
        }
        function Qi(e, n, t) {
          (t !== o && !Vn(e[n], t) || t === o && !(n in e)) && Qn(e, n, t);
        }
        function ar(e, n, t) {
          var r = e[n];
          (!(Te.call(e, n) && Vn(r, t)) || t === o && !(n in e)) && Qn(e, n, t);
        }
        function Fr(e, n) {
          for (var t = e.length; t--; )
            if (Vn(e[t][0], n))
              return t;
          return -1;
        }
        function zc(e, n, t, r) {
          return ct(e, function(i, s, l) {
            n(r, i, t(i), l);
          }), r;
        }
        function es(e, n) {
          return e && qn(n, He(n), e);
        }
        function qc(e, n) {
          return e && qn(n, fn(n), e);
        }
        function Qn(e, n, t) {
          n == "__proto__" && Wr ? Wr(e, n, {
            configurable: !0,
            enumerable: !0,
            value: t,
            writable: !0
          }) : e[n] = t;
        }
        function ji(e, n) {
          for (var t = -1, r = n.length, i = S(r), s = e == null; ++t < r; )
            i[t] = s ? o : Bo(e, n[t]);
          return i;
        }
        function kt(e, n, t) {
          return e === e && (t !== o && (e = e <= t ? e : t), n !== o && (e = e >= n ? e : n)), e;
        }
        function In(e, n, t, r, i, s) {
          var l, d = n & G, v = n & H, O = n & te;
          if (t && (l = i ? t(e, r, i, s) : t(e)), l !== o)
            return l;
          if (!Me(e))
            return e;
          var L = ge(e);
          if (L) {
            if (l = Lf(e), !d)
              return dn(e, l);
          } else {
            var W = tn(e), K = W == Y || W == Oe;
            if (vt(e))
              return Ss(e, d);
            if (W == Ln || W == On || K && !i) {
              if (l = v || K ? {} : zs(e), !d)
                return v ? kf(e, qc(l, e)) : wf(e, es(l, e));
            } else {
              if (!De[W])
                return i ? e : {};
              l = Bf(e, W, d);
            }
          }
          s || (s = new Wn());
          var Q = s.get(e);
          if (Q)
            return Q;
          s.set(e, l), ml(e) ? e.forEach(function(le) {
            l.add(In(le, n, t, le, e, s));
          }) : hl(e) && e.forEach(function(le, we) {
            l.set(we, In(le, n, t, we, e, s));
          });
          var se = O ? v ? yo : bo : v ? fn : He, _e = L ? o : se(e);
          return Sn(_e || e, function(le, we) {
            _e && (we = le, le = e[we]), ar(l, we, In(le, n, t, we, e, s));
          }), l;
        }
        function Gc(e) {
          var n = He(e);
          return function(t) {
            return ns(t, e, n);
          };
        }
        function ns(e, n, t) {
          var r = t.length;
          if (e == null)
            return !r;
          for (e = Le(e); r--; ) {
            var i = t[r], s = n[i], l = e[i];
            if (l === o && !(i in e) || !s(l))
              return !1;
          }
          return !0;
        }
        function ts(e, n, t) {
          if (typeof e != "function")
            throw new Cn(c);
          return pr(function() {
            e.apply(o, t);
          }, n);
        }
        function sr(e, n, t, r) {
          var i = -1, s = Cr, l = !0, d = e.length, v = [], O = n.length;
          if (!d)
            return v;
          t && (n = Pe(n, _n(t))), r ? (s = Mi, l = !1) : n.length >= b && (s = er, l = !1, n = new wt(n));
          e:
            for (; ++i < d; ) {
              var L = e[i], W = t == null ? L : t(L);
              if (L = r || L !== 0 ? L : 0, l && W === W) {
                for (var K = O; K--; )
                  if (n[K] === W)
                    continue e;
                v.push(L);
              } else s(n, W, r) || v.push(L);
            }
          return v;
        }
        var ct = Rs(zn), rs = Rs(no, !0);
        function Hc(e, n) {
          var t = !0;
          return ct(e, function(r, i, s) {
            return t = !!n(r, i, s), t;
          }), t;
        }
        function zr(e, n, t) {
          for (var r = -1, i = e.length; ++r < i; ) {
            var s = e[r], l = n(s);
            if (l != null && (d === o ? l === l && !bn(l) : t(l, d)))
              var d = l, v = s;
          }
          return v;
        }
        function Kc(e, n, t, r) {
          var i = e.length;
          for (t = he(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === o || r > i ? i : he(r), r < 0 && (r += i), r = t > r ? 0 : yl(r); t < r; )
            e[t++] = n;
          return e;
        }
        function is(e, n) {
          var t = [];
          return ct(e, function(r, i, s) {
            n(r, i, s) && t.push(r);
          }), t;
        }
        function Ye(e, n, t, r, i) {
          var s = -1, l = e.length;
          for (t || (t = Wf), i || (i = []); ++s < l; ) {
            var d = e[s];
            n > 0 && t(d) ? n > 1 ? Ye(d, n - 1, t, r, i) : lt(i, d) : r || (i[i.length] = d);
          }
          return i;
        }
        var eo = Es(), os = Es(!0);
        function zn(e, n) {
          return e && eo(e, n, He);
        }
        function no(e, n) {
          return e && os(e, n, He);
        }
        function qr(e, n) {
          return st(n, function(t) {
            return tt(e[t]);
          });
        }
        function xt(e, n) {
          n = pt(n, e);
          for (var t = 0, r = n.length; e != null && t < r; )
            e = e[Gn(n[t++])];
          return t && t == r ? e : o;
        }
        function as(e, n, t) {
          var r = n(e);
          return ge(e) ? r : lt(r, t(e));
        }
        function rn(e) {
          return e == null ? e === o ? ku : vn : bt && bt in Le(e) ? Ef(e) : zf(e);
        }
        function to(e, n) {
          return e > n;
        }
        function Yc(e, n) {
          return e != null && Te.call(e, n);
        }
        function Zc(e, n) {
          return e != null && n in Le(e);
        }
        function Jc(e, n, t) {
          return e >= nn(n, t) && e < qe(n, t);
        }
        function ro(e, n, t) {
          for (var r = t ? Mi : Cr, i = e[0].length, s = e.length, l = s, d = S(s), v = 1 / 0, O = []; l--; ) {
            var L = e[l];
            l && n && (L = Pe(L, _n(n))), v = nn(L.length, v), d[l] = !t && (n || i >= 120 && L.length >= 120) ? new wt(l && L) : o;
          }
          L = e[0];
          var W = -1, K = d[0];
          e:
            for (; ++W < i && O.length < v; ) {
              var Q = L[W], se = n ? n(Q) : Q;
              if (Q = t || Q !== 0 ? Q : 0, !(K ? er(K, se) : r(O, se, t))) {
                for (l = s; --l; ) {
                  var _e = d[l];
                  if (!(_e ? er(_e, se) : r(e[l], se, t)))
                    continue e;
                }
                K && K.push(se), O.push(Q);
              }
            }
          return O;
        }
        function Xc(e, n, t, r) {
          return zn(e, function(i, s, l) {
            n(r, t(i), s, l);
          }), r;
        }
        function lr(e, n, t) {
          n = pt(n, e), e = Ks(e, n);
          var r = e == null ? e : e[Gn(Rn(n))];
          return r == null ? o : hn(r, e, t);
        }
        function ss(e) {
          return Ue(e) && rn(e) == On;
        }
        function Qc(e) {
          return Ue(e) && rn(e) == jt;
        }
        function jc(e) {
          return Ue(e) && rn(e) == U;
        }
        function ur(e, n, t, r, i) {
          return e === n ? !0 : e == null || n == null || !Ue(e) && !Ue(n) ? e !== e && n !== n : ef(e, n, t, r, ur, i);
        }
        function ef(e, n, t, r, i, s) {
          var l = ge(e), d = ge(n), v = l ? Fn : tn(e), O = d ? Fn : tn(n);
          v = v == On ? Ln : v, O = O == On ? Ln : O;
          var L = v == Ln, W = O == Ln, K = v == O;
          if (K && vt(e)) {
            if (!vt(n))
              return !1;
            l = !0, L = !1;
          }
          if (K && !L)
            return s || (s = new Wn()), l || Ft(e) ? Us(e, n, t, r, i, s) : $f(e, n, v, t, r, i, s);
          if (!(t & $)) {
            var Q = L && Te.call(e, "__wrapped__"), se = W && Te.call(n, "__wrapped__");
            if (Q || se) {
              var _e = Q ? e.value() : e, le = se ? n.value() : n;
              return s || (s = new Wn()), i(_e, le, t, r, s);
            }
          }
          return K ? (s || (s = new Wn()), Rf(e, n, t, r, i, s)) : !1;
        }
        function nf(e) {
          return Ue(e) && tn(e) == Ae;
        }
        function io(e, n, t, r) {
          var i = t.length, s = i, l = !r;
          if (e == null)
            return !s;
          for (e = Le(e); i--; ) {
            var d = t[i];
            if (l && d[2] ? d[1] !== e[d[0]] : !(d[0] in e))
              return !1;
          }
          for (; ++i < s; ) {
            d = t[i];
            var v = d[0], O = e[v], L = d[1];
            if (l && d[2]) {
              if (O === o && !(v in e))
                return !1;
            } else {
              var W = new Wn();
              if (r)
                var K = r(O, L, v, e, n, W);
              if (!(K === o ? ur(L, O, $ | q, r, W) : K))
                return !1;
            }
          }
          return !0;
        }
        function ls(e) {
          if (!Me(e) || Pf(e))
            return !1;
          var n = tt(e) ? nc : Gu;
          return n.test(Ct(e));
        }
        function tf(e) {
          return Ue(e) && rn(e) == Jt;
        }
        function rf(e) {
          return Ue(e) && tn(e) == Bn;
        }
        function of(e) {
          return Ue(e) && si(e.length) && !!We[rn(e)];
        }
        function us(e) {
          return typeof e == "function" ? e : e == null ? pn : typeof e == "object" ? ge(e) ? fs(e[0], e[1]) : cs(e) : Tl(e);
        }
        function oo(e) {
          if (!fr(e))
            return sc(e);
          var n = [];
          for (var t in Le(e))
            Te.call(e, t) && t != "constructor" && n.push(t);
          return n;
        }
        function af(e) {
          if (!Me(e))
            return Ff(e);
          var n = fr(e), t = [];
          for (var r in e)
            r == "constructor" && (n || !Te.call(e, r)) || t.push(r);
          return t;
        }
        function ao(e, n) {
          return e < n;
        }
        function ds(e, n) {
          var t = -1, r = cn(e) ? S(e.length) : [];
          return ct(e, function(i, s, l) {
            r[++t] = n(i, s, l);
          }), r;
        }
        function cs(e) {
          var n = ko(e);
          return n.length == 1 && n[0][2] ? Gs(n[0][0], n[0][1]) : function(t) {
            return t === e || io(t, e, n);
          };
        }
        function fs(e, n) {
          return So(e) && qs(n) ? Gs(Gn(e), n) : function(t) {
            var r = Bo(t, e);
            return r === o && r === n ? Do(t, e) : ur(n, r, $ | q);
          };
        }
        function Gr(e, n, t, r, i) {
          e !== n && eo(n, function(s, l) {
            if (i || (i = new Wn()), Me(s))
              sf(e, n, l, t, Gr, r, i);
            else {
              var d = r ? r(Ao(e, l), s, l + "", e, n, i) : o;
              d === o && (d = s), Qi(e, l, d);
            }
          }, fn);
        }
        function sf(e, n, t, r, i, s, l) {
          var d = Ao(e, t), v = Ao(n, t), O = l.get(v);
          if (O) {
            Qi(e, t, O);
            return;
          }
          var L = s ? s(d, v, t + "", e, n, l) : o, W = L === o;
          if (W) {
            var K = ge(v), Q = !K && vt(v), se = !K && !Q && Ft(v);
            L = v, K || Q || se ? ge(d) ? L = d : Ne(d) ? L = dn(d) : Q ? (W = !1, L = Ss(v, !0)) : se ? (W = !1, L = Cs(v, !0)) : L = [] : gr(v) || At(v) ? (L = d, At(d) ? L = wl(d) : (!Me(d) || tt(d)) && (L = zs(v))) : W = !1;
          }
          W && (l.set(v, L), i(L, v, r, s, l), l.delete(v)), Qi(e, t, L);
        }
        function ps(e, n) {
          var t = e.length;
          if (t)
            return n += n < 0 ? t : 0, nt(n, t) ? e[n] : o;
        }
        function gs(e, n, t) {
          n.length ? n = Pe(n, function(s) {
            return ge(s) ? function(l) {
              return xt(l, s.length === 1 ? s[0] : s);
            } : s;
          }) : n = [pn];
          var r = -1;
          n = Pe(n, _n(oe()));
          var i = ds(e, function(s, l, d) {
            var v = Pe(n, function(O) {
              return O(s);
            });
            return { criteria: v, index: ++r, value: s };
          });
          return Ld(i, function(s, l) {
            return yf(s, l, t);
          });
        }
        function lf(e, n) {
          return vs(e, n, function(t, r) {
            return Do(e, r);
          });
        }
        function vs(e, n, t) {
          for (var r = -1, i = n.length, s = {}; ++r < i; ) {
            var l = n[r], d = xt(e, l);
            t(d, l) && dr(s, pt(l, e), d);
          }
          return s;
        }
        function uf(e) {
          return function(n) {
            return xt(n, e);
          };
        }
        function so(e, n, t, r) {
          var i = r ? Od : Tt, s = -1, l = n.length, d = e;
          for (e === n && (n = dn(n)), t && (d = Pe(e, _n(t))); ++s < l; )
            for (var v = 0, O = n[s], L = t ? t(O) : O; (v = i(d, L, v, r)) > -1; )
              d !== e && Dr.call(d, v, 1), Dr.call(e, v, 1);
          return e;
        }
        function hs(e, n) {
          for (var t = e ? n.length : 0, r = t - 1; t--; ) {
            var i = n[t];
            if (t == r || i !== s) {
              var s = i;
              nt(i) ? Dr.call(e, i, 1) : fo(e, i);
            }
          }
          return e;
        }
        function lo(e, n) {
          return e + Pr(Ja() * (n - e + 1));
        }
        function df(e, n, t, r) {
          for (var i = -1, s = qe(Vr((n - e) / (t || 1)), 0), l = S(s); s--; )
            l[r ? s : ++i] = e, e += t;
          return l;
        }
        function uo(e, n) {
          var t = "";
          if (!e || n < 1 || n > pe)
            return t;
          do
            n % 2 && (t += e), n = Pr(n / 2), n && (e += e);
          while (n);
          return t;
        }
        function me(e, n) {
          return Io(Hs(e, n, pn), e + "");
        }
        function cf(e) {
          return ja(zt(e));
        }
        function ff(e, n) {
          var t = zt(e);
          return ni(t, kt(n, 0, t.length));
        }
        function dr(e, n, t, r) {
          if (!Me(e))
            return e;
          n = pt(n, e);
          for (var i = -1, s = n.length, l = s - 1, d = e; d != null && ++i < s; ) {
            var v = Gn(n[i]), O = t;
            if (v === "__proto__" || v === "constructor" || v === "prototype")
              return e;
            if (i != l) {
              var L = d[v];
              O = r ? r(L, v, d) : o, O === o && (O = Me(L) ? L : nt(n[i + 1]) ? [] : {});
            }
            ar(d, v, O), d = d[v];
          }
          return e;
        }
        var _s = Mr ? function(e, n) {
          return Mr.set(e, n), e;
        } : pn, pf = Wr ? function(e, n) {
          return Wr(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Vo(n),
            writable: !0
          });
        } : pn;
        function gf(e) {
          return ni(zt(e));
        }
        function $n(e, n, t) {
          var r = -1, i = e.length;
          n < 0 && (n = -n > i ? 0 : i + n), t = t > i ? i : t, t < 0 && (t += i), i = n > t ? 0 : t - n >>> 0, n >>>= 0;
          for (var s = S(i); ++r < i; )
            s[r] = e[r + n];
          return s;
        }
        function vf(e, n) {
          var t;
          return ct(e, function(r, i, s) {
            return t = n(r, i, s), !t;
          }), !!t;
        }
        function Hr(e, n, t) {
          var r = 0, i = e == null ? r : e.length;
          if (typeof n == "number" && n === n && i <= $t) {
            for (; r < i; ) {
              var s = r + i >>> 1, l = e[s];
              l !== null && !bn(l) && (t ? l <= n : l < n) ? r = s + 1 : i = s;
            }
            return i;
          }
          return co(e, n, pn, t);
        }
        function co(e, n, t, r) {
          var i = 0, s = e == null ? 0 : e.length;
          if (s === 0)
            return 0;
          n = t(n);
          for (var l = n !== n, d = n === null, v = bn(n), O = n === o; i < s; ) {
            var L = Pr((i + s) / 2), W = t(e[L]), K = W !== o, Q = W === null, se = W === W, _e = bn(W);
            if (l)
              var le = r || se;
            else O ? le = se && (r || K) : d ? le = se && K && (r || !Q) : v ? le = se && K && !Q && (r || !_e) : Q || _e ? le = !1 : le = r ? W <= n : W < n;
            le ? i = L + 1 : s = L;
          }
          return nn(s, ht);
        }
        function ms(e, n) {
          for (var t = -1, r = e.length, i = 0, s = []; ++t < r; ) {
            var l = e[t], d = n ? n(l) : l;
            if (!t || !Vn(d, v)) {
              var v = d;
              s[i++] = l === 0 ? 0 : l;
            }
          }
          return s;
        }
        function bs(e) {
          return typeof e == "number" ? e : bn(e) ? ln : +e;
        }
        function mn(e) {
          if (typeof e == "string")
            return e;
          if (ge(e))
            return Pe(e, mn) + "";
          if (bn(e))
            return Xa ? Xa.call(e) : "";
          var n = e + "";
          return n == "0" && 1 / e == -M ? "-0" : n;
        }
        function ft(e, n, t) {
          var r = -1, i = Cr, s = e.length, l = !0, d = [], v = d;
          if (t)
            l = !1, i = Mi;
          else if (s >= b) {
            var O = n ? null : Af(e);
            if (O)
              return Ir(O);
            l = !1, i = er, v = new wt();
          } else
            v = n ? [] : d;
          e:
            for (; ++r < s; ) {
              var L = e[r], W = n ? n(L) : L;
              if (L = t || L !== 0 ? L : 0, l && W === W) {
                for (var K = v.length; K--; )
                  if (v[K] === W)
                    continue e;
                n && v.push(W), d.push(L);
              } else i(v, W, t) || (v !== d && v.push(W), d.push(L));
            }
          return d;
        }
        function fo(e, n) {
          return n = pt(n, e), e = Ks(e, n), e == null || delete e[Gn(Rn(n))];
        }
        function ys(e, n, t, r) {
          return dr(e, n, t(xt(e, n)), r);
        }
        function Kr(e, n, t, r) {
          for (var i = e.length, s = r ? i : -1; (r ? s-- : ++s < i) && n(e[s], s, e); )
            ;
          return t ? $n(e, r ? 0 : s, r ? s + 1 : i) : $n(e, r ? s + 1 : 0, r ? i : s);
        }
        function ws(e, n) {
          var t = e;
          return t instanceof ke && (t = t.value()), Ui(n, function(r, i) {
            return i.func.apply(i.thisArg, lt([r], i.args));
          }, t);
        }
        function po(e, n, t) {
          var r = e.length;
          if (r < 2)
            return r ? ft(e[0]) : [];
          for (var i = -1, s = S(r); ++i < r; )
            for (var l = e[i], d = -1; ++d < r; )
              d != i && (s[i] = sr(s[i] || l, e[d], n, t));
          return ft(Ye(s, 1), n, t);
        }
        function ks(e, n, t) {
          for (var r = -1, i = e.length, s = n.length, l = {}; ++r < i; ) {
            var d = r < s ? n[r] : o;
            t(l, e[r], d);
          }
          return l;
        }
        function go(e) {
          return Ne(e) ? e : [];
        }
        function vo(e) {
          return typeof e == "function" ? e : pn;
        }
        function pt(e, n) {
          return ge(e) ? e : So(e, n) ? [e] : Xs(Re(e));
        }
        var hf = me;
        function gt(e, n, t) {
          var r = e.length;
          return t = t === o ? r : t, !n && t >= r ? e : $n(e, n, t);
        }
        var xs = tc || function(e) {
          return Ke.clearTimeout(e);
        };
        function Ss(e, n) {
          if (n)
            return e.slice();
          var t = e.length, r = Ga ? Ga(t) : new e.constructor(t);
          return e.copy(r), r;
        }
        function ho(e) {
          var n = new e.constructor(e.byteLength);
          return new Lr(n).set(new Lr(e)), n;
        }
        function _f(e, n) {
          var t = n ? ho(e.buffer) : e.buffer;
          return new e.constructor(t, e.byteOffset, e.byteLength);
        }
        function mf(e) {
          var n = new e.constructor(e.source, sa.exec(e));
          return n.lastIndex = e.lastIndex, n;
        }
        function bf(e) {
          return or ? Le(or.call(e)) : {};
        }
        function Cs(e, n) {
          var t = n ? ho(e.buffer) : e.buffer;
          return new e.constructor(t, e.byteOffset, e.length);
        }
        function As(e, n) {
          if (e !== n) {
            var t = e !== o, r = e === null, i = e === e, s = bn(e), l = n !== o, d = n === null, v = n === n, O = bn(n);
            if (!d && !O && !s && e > n || s && l && v && !d && !O || r && l && v || !t && v || !i)
              return 1;
            if (!r && !s && !O && e < n || O && t && i && !r && !s || d && t && i || !l && i || !v)
              return -1;
          }
          return 0;
        }
        function yf(e, n, t) {
          for (var r = -1, i = e.criteria, s = n.criteria, l = i.length, d = t.length; ++r < l; ) {
            var v = As(i[r], s[r]);
            if (v) {
              if (r >= d)
                return v;
              var O = t[r];
              return v * (O == "desc" ? -1 : 1);
            }
          }
          return e.index - n.index;
        }
        function Is(e, n, t, r) {
          for (var i = -1, s = e.length, l = t.length, d = -1, v = n.length, O = qe(s - l, 0), L = S(v + O), W = !r; ++d < v; )
            L[d] = n[d];
          for (; ++i < l; )
            (W || i < s) && (L[t[i]] = e[i]);
          for (; O--; )
            L[d++] = e[i++];
          return L;
        }
        function $s(e, n, t, r) {
          for (var i = -1, s = e.length, l = -1, d = t.length, v = -1, O = n.length, L = qe(s - d, 0), W = S(L + O), K = !r; ++i < L; )
            W[i] = e[i];
          for (var Q = i; ++v < O; )
            W[Q + v] = n[v];
          for (; ++l < d; )
            (K || i < s) && (W[Q + t[l]] = e[i++]);
          return W;
        }
        function dn(e, n) {
          var t = -1, r = e.length;
          for (n || (n = S(r)); ++t < r; )
            n[t] = e[t];
          return n;
        }
        function qn(e, n, t, r) {
          var i = !t;
          t || (t = {});
          for (var s = -1, l = n.length; ++s < l; ) {
            var d = n[s], v = r ? r(t[d], e[d], d, t, e) : o;
            v === o && (v = e[d]), i ? Qn(t, d, v) : ar(t, d, v);
          }
          return t;
        }
        function wf(e, n) {
          return qn(e, xo(e), n);
        }
        function kf(e, n) {
          return qn(e, Ns(e), n);
        }
        function Yr(e, n) {
          return function(t, r) {
            var i = ge(t) ? Ad : zc, s = n ? n() : {};
            return i(t, e, oe(r, 2), s);
          };
        }
        function Mt(e) {
          return me(function(n, t) {
            var r = -1, i = t.length, s = i > 1 ? t[i - 1] : o, l = i > 2 ? t[2] : o;
            for (s = e.length > 3 && typeof s == "function" ? (i--, s) : o, l && on(t[0], t[1], l) && (s = i < 3 ? o : s, i = 1), n = Le(n); ++r < i; ) {
              var d = t[r];
              d && e(n, d, r, s);
            }
            return n;
          });
        }
        function Rs(e, n) {
          return function(t, r) {
            if (t == null)
              return t;
            if (!cn(t))
              return e(t, r);
            for (var i = t.length, s = n ? i : -1, l = Le(t); (n ? s-- : ++s < i) && r(l[s], s, l) !== !1; )
              ;
            return t;
          };
        }
        function Es(e) {
          return function(n, t, r) {
            for (var i = -1, s = Le(n), l = r(n), d = l.length; d--; ) {
              var v = l[e ? d : ++i];
              if (t(s[v], v, s) === !1)
                break;
            }
            return n;
          };
        }
        function xf(e, n, t) {
          var r = n & V, i = cr(e);
          function s() {
            var l = this && this !== Ke && this instanceof s ? i : e;
            return l.apply(r ? t : this, arguments);
          }
          return s;
        }
        function Ts(e) {
          return function(n) {
            n = Re(n);
            var t = Ot(n) ? Dn(n) : o, r = t ? t[0] : n.charAt(0), i = t ? gt(t, 1).join("") : n.slice(1);
            return r[e]() + i;
          };
        }
        function Ut(e) {
          return function(n) {
            return Ui(Rl($l(n).replace(fd, "")), e, "");
          };
        }
        function cr(e) {
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
            var t = Pt(e.prototype), r = e.apply(t, n);
            return Me(r) ? r : t;
          };
        }
        function Sf(e, n, t) {
          var r = cr(e);
          function i() {
            for (var s = arguments.length, l = S(s), d = s, v = Nt(i); d--; )
              l[d] = arguments[d];
            var O = s < 3 && l[0] !== v && l[s - 1] !== v ? [] : ut(l, v);
            if (s -= O.length, s < t)
              return Ws(
                e,
                n,
                Zr,
                i.placeholder,
                o,
                l,
                O,
                o,
                o,
                t - s
              );
            var L = this && this !== Ke && this instanceof i ? r : e;
            return hn(L, this, l);
          }
          return i;
        }
        function Os(e) {
          return function(n, t, r) {
            var i = Le(n);
            if (!cn(n)) {
              var s = oe(t, 3);
              n = He(n), t = function(d) {
                return s(i[d], d, i);
              };
            }
            var l = e(n, t, r);
            return l > -1 ? i[s ? n[l] : l] : o;
          };
        }
        function Ls(e) {
          return et(function(n) {
            var t = n.length, r = t, i = An.prototype.thru;
            for (e && n.reverse(); r--; ) {
              var s = n[r];
              if (typeof s != "function")
                throw new Cn(c);
              if (i && !l && jr(s) == "wrapper")
                var l = new An([], !0);
            }
            for (r = l ? r : t; ++r < t; ) {
              s = n[r];
              var d = jr(s), v = d == "wrapper" ? wo(s) : o;
              v && Co(v[0]) && v[1] == (ve | Z | P | Ve) && !v[4].length && v[9] == 1 ? l = l[jr(v[0])].apply(l, v[3]) : l = s.length == 1 && Co(s) ? l[d]() : l.thru(s);
            }
            return function() {
              var O = arguments, L = O[0];
              if (l && O.length == 1 && ge(L))
                return l.plant(L).value();
              for (var W = 0, K = t ? n[W].apply(this, O) : L; ++W < t; )
                K = n[W].call(this, K);
              return K;
            };
          });
        }
        function Zr(e, n, t, r, i, s, l, d, v, O) {
          var L = n & ve, W = n & V, K = n & R, Q = n & (Z | ue), se = n & ie, _e = K ? o : cr(e);
          function le() {
            for (var we = arguments.length, Se = S(we), yn = we; yn--; )
              Se[yn] = arguments[yn];
            if (Q)
              var an = Nt(le), wn = Dd(Se, an);
            if (r && (Se = Is(Se, r, i, Q)), s && (Se = $s(Se, s, l, Q)), we -= wn, Q && we < O) {
              var Fe = ut(Se, an);
              return Ws(
                e,
                n,
                Zr,
                le.placeholder,
                t,
                Se,
                Fe,
                d,
                v,
                O - we
              );
            }
            var Pn = W ? t : this, it = K ? Pn[e] : e;
            return we = Se.length, d ? Se = qf(Se, d) : se && we > 1 && Se.reverse(), L && v < we && (Se.length = v), this && this !== Ke && this instanceof le && (it = _e || cr(it)), it.apply(Pn, Se);
          }
          return le;
        }
        function Bs(e, n) {
          return function(t, r) {
            return Xc(t, e, n(r), {});
          };
        }
        function Jr(e, n) {
          return function(t, r) {
            var i;
            if (t === o && r === o)
              return n;
            if (t !== o && (i = t), r !== o) {
              if (i === o)
                return r;
              typeof t == "string" || typeof r == "string" ? (t = mn(t), r = mn(r)) : (t = bs(t), r = bs(r)), i = e(t, r);
            }
            return i;
          };
        }
        function _o(e) {
          return et(function(n) {
            return n = Pe(n, _n(oe())), me(function(t) {
              var r = this;
              return e(n, function(i) {
                return hn(i, r, t);
              });
            });
          });
        }
        function Xr(e, n) {
          n = n === o ? " " : mn(n);
          var t = n.length;
          if (t < 2)
            return t ? uo(n, e) : n;
          var r = uo(n, Vr(e / Lt(n)));
          return Ot(n) ? gt(Dn(r), 0, e).join("") : r.slice(0, e);
        }
        function Cf(e, n, t, r) {
          var i = n & V, s = cr(e);
          function l() {
            for (var d = -1, v = arguments.length, O = -1, L = r.length, W = S(L + v), K = this && this !== Ke && this instanceof l ? s : e; ++O < L; )
              W[O] = r[O];
            for (; v--; )
              W[O++] = arguments[++d];
            return hn(K, i ? t : this, W);
          }
          return l;
        }
        function Ds(e) {
          return function(n, t, r) {
            return r && typeof r != "number" && on(n, t, r) && (t = r = o), n = rt(n), t === o ? (t = n, n = 0) : t = rt(t), r = r === o ? n < t ? 1 : -1 : rt(r), df(n, t, r, e);
          };
        }
        function Qr(e) {
          return function(n, t) {
            return typeof n == "string" && typeof t == "string" || (n = En(n), t = En(t)), e(n, t);
          };
        }
        function Ws(e, n, t, r, i, s, l, d, v, O) {
          var L = n & Z, W = L ? l : o, K = L ? o : l, Q = L ? s : o, se = L ? o : s;
          n |= L ? P : X, n &= ~(L ? X : P), n & D || (n &= -4);
          var _e = [
            e,
            n,
            i,
            Q,
            W,
            se,
            K,
            d,
            v,
            O
          ], le = t.apply(o, _e);
          return Co(e) && Ys(le, _e), le.placeholder = r, Zs(le, e, n);
        }
        function mo(e) {
          var n = ze[e];
          return function(t, r) {
            if (t = En(t), r = r == null ? 0 : nn(he(r), 292), r && Za(t)) {
              var i = (Re(t) + "e").split("e"), s = n(i[0] + "e" + (+i[1] + r));
              return i = (Re(s) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
            }
            return n(t);
          };
        }
        var Af = Wt && 1 / Ir(new Wt([, -0]))[1] == M ? function(e) {
          return new Wt(e);
        } : Uo;
        function Vs(e) {
          return function(n) {
            var t = tn(n);
            return t == Ae ? Ki(n) : t == Bn ? Fd(n) : Bd(n, e(n));
          };
        }
        function jn(e, n, t, r, i, s, l, d) {
          var v = n & R;
          if (!v && typeof e != "function")
            throw new Cn(c);
          var O = r ? r.length : 0;
          if (O || (n &= -97, r = i = o), l = l === o ? l : qe(he(l), 0), d = d === o ? d : he(d), O -= i ? i.length : 0, n & X) {
            var L = r, W = i;
            r = i = o;
          }
          var K = v ? o : wo(e), Q = [
            e,
            n,
            t,
            r,
            i,
            L,
            W,
            s,
            l,
            d
          ];
          if (K && Nf(Q, K), e = Q[0], n = Q[1], t = Q[2], r = Q[3], i = Q[4], d = Q[9] = Q[9] === o ? v ? 0 : e.length : qe(Q[9] - O, 0), !d && n & (Z | ue) && (n &= -25), !n || n == V)
            var se = xf(e, n, t);
          else n == Z || n == ue ? se = Sf(e, n, d) : (n == P || n == (V | P)) && !i.length ? se = Cf(e, n, t, r) : se = Zr.apply(o, Q);
          var _e = K ? _s : Ys;
          return Zs(_e(se, Q), e, n);
        }
        function Ps(e, n, t, r) {
          return e === o || Vn(e, Dt[t]) && !Te.call(r, t) ? n : e;
        }
        function Ms(e, n, t, r, i, s) {
          return Me(e) && Me(n) && (s.set(n, e), Gr(e, n, o, Ms, s), s.delete(n)), e;
        }
        function If(e) {
          return gr(e) ? o : e;
        }
        function Us(e, n, t, r, i, s) {
          var l = t & $, d = e.length, v = n.length;
          if (d != v && !(l && v > d))
            return !1;
          var O = s.get(e), L = s.get(n);
          if (O && L)
            return O == n && L == e;
          var W = -1, K = !0, Q = t & q ? new wt() : o;
          for (s.set(e, n), s.set(n, e); ++W < d; ) {
            var se = e[W], _e = n[W];
            if (r)
              var le = l ? r(_e, se, W, n, e, s) : r(se, _e, W, e, n, s);
            if (le !== o) {
              if (le)
                continue;
              K = !1;
              break;
            }
            if (Q) {
              if (!Ni(n, function(we, Se) {
                if (!er(Q, Se) && (se === we || i(se, we, t, r, s)))
                  return Q.push(Se);
              })) {
                K = !1;
                break;
              }
            } else if (!(se === _e || i(se, _e, t, r, s))) {
              K = !1;
              break;
            }
          }
          return s.delete(e), s.delete(n), K;
        }
        function $f(e, n, t, r, i, s, l) {
          switch (t) {
            case Rt:
              if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
                return !1;
              e = e.buffer, n = n.buffer;
            case jt:
              return !(e.byteLength != n.byteLength || !s(new Lr(e), new Lr(n)));
            case Zn:
            case U:
            case kn:
              return Vn(+e, +n);
            case x:
              return e.name == n.name && e.message == n.message;
            case Jt:
            case Xt:
              return e == n + "";
            case Ae:
              var d = Ki;
            case Bn:
              var v = r & $;
              if (d || (d = Ir), e.size != n.size && !v)
                return !1;
              var O = l.get(e);
              if (O)
                return O == n;
              r |= q, l.set(e, n);
              var L = Us(d(e), d(n), r, i, s, l);
              return l.delete(e), L;
            case wr:
              if (or)
                return or.call(e) == or.call(n);
          }
          return !1;
        }
        function Rf(e, n, t, r, i, s) {
          var l = t & $, d = bo(e), v = d.length, O = bo(n), L = O.length;
          if (v != L && !l)
            return !1;
          for (var W = v; W--; ) {
            var K = d[W];
            if (!(l ? K in n : Te.call(n, K)))
              return !1;
          }
          var Q = s.get(e), se = s.get(n);
          if (Q && se)
            return Q == n && se == e;
          var _e = !0;
          s.set(e, n), s.set(n, e);
          for (var le = l; ++W < v; ) {
            K = d[W];
            var we = e[K], Se = n[K];
            if (r)
              var yn = l ? r(Se, we, K, n, e, s) : r(we, Se, K, e, n, s);
            if (!(yn === o ? we === Se || i(we, Se, t, r, s) : yn)) {
              _e = !1;
              break;
            }
            le || (le = K == "constructor");
          }
          if (_e && !le) {
            var an = e.constructor, wn = n.constructor;
            an != wn && "constructor" in e && "constructor" in n && !(typeof an == "function" && an instanceof an && typeof wn == "function" && wn instanceof wn) && (_e = !1);
          }
          return s.delete(e), s.delete(n), _e;
        }
        function et(e) {
          return Io(Hs(e, o, nl), e + "");
        }
        function bo(e) {
          return as(e, He, xo);
        }
        function yo(e) {
          return as(e, fn, Ns);
        }
        var wo = Mr ? function(e) {
          return Mr.get(e);
        } : Uo;
        function jr(e) {
          for (var n = e.name + "", t = Vt[n], r = Te.call(Vt, n) ? t.length : 0; r--; ) {
            var i = t[r], s = i.func;
            if (s == null || s == e)
              return i.name;
          }
          return n;
        }
        function Nt(e) {
          var n = Te.call(a, "placeholder") ? a : e;
          return n.placeholder;
        }
        function oe() {
          var e = a.iteratee || Po;
          return e = e === Po ? us : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function ei(e, n) {
          var t = e.__data__;
          return Vf(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
        }
        function ko(e) {
          for (var n = He(e), t = n.length; t--; ) {
            var r = n[t], i = e[r];
            n[t] = [r, i, qs(i)];
          }
          return n;
        }
        function St(e, n) {
          var t = Md(e, n);
          return ls(t) ? t : o;
        }
        function Ef(e) {
          var n = Te.call(e, bt), t = e[bt];
          try {
            e[bt] = o;
            var r = !0;
          } catch {
          }
          var i = Tr.call(e);
          return r && (n ? e[bt] = t : delete e[bt]), i;
        }
        var xo = Zi ? function(e) {
          return e == null ? [] : (e = Le(e), st(Zi(e), function(n) {
            return Ka.call(e, n);
          }));
        } : No, Ns = Zi ? function(e) {
          for (var n = []; e; )
            lt(n, xo(e)), e = Br(e);
          return n;
        } : No, tn = rn;
        (Ji && tn(new Ji(new ArrayBuffer(1))) != Rt || tr && tn(new tr()) != Ae || Xi && tn(Xi.resolve()) != ra || Wt && tn(new Wt()) != Bn || rr && tn(new rr()) != Qt) && (tn = function(e) {
          var n = rn(e), t = n == Ln ? e.constructor : o, r = t ? Ct(t) : "";
          if (r)
            switch (r) {
              case cc:
                return Rt;
              case fc:
                return Ae;
              case pc:
                return ra;
              case gc:
                return Bn;
              case vc:
                return Qt;
            }
          return n;
        });
        function Tf(e, n, t) {
          for (var r = -1, i = t.length; ++r < i; ) {
            var s = t[r], l = s.size;
            switch (s.type) {
              case "drop":
                e += l;
                break;
              case "dropRight":
                n -= l;
                break;
              case "take":
                n = nn(n, e + l);
                break;
              case "takeRight":
                e = qe(e, n - l);
                break;
            }
          }
          return { start: e, end: n };
        }
        function Of(e) {
          var n = e.match(Vu);
          return n ? n[1].split(Pu) : [];
        }
        function Fs(e, n, t) {
          n = pt(n, e);
          for (var r = -1, i = n.length, s = !1; ++r < i; ) {
            var l = Gn(n[r]);
            if (!(s = e != null && t(e, l)))
              break;
            e = e[l];
          }
          return s || ++r != i ? s : (i = e == null ? 0 : e.length, !!i && si(i) && nt(l, i) && (ge(e) || At(e)));
        }
        function Lf(e) {
          var n = e.length, t = new e.constructor(n);
          return n && typeof e[0] == "string" && Te.call(e, "index") && (t.index = e.index, t.input = e.input), t;
        }
        function zs(e) {
          return typeof e.constructor == "function" && !fr(e) ? Pt(Br(e)) : {};
        }
        function Bf(e, n, t) {
          var r = e.constructor;
          switch (n) {
            case jt:
              return ho(e);
            case Zn:
            case U:
              return new r(+e);
            case Rt:
              return _f(e, t);
            case wi:
            case ki:
            case xi:
            case Si:
            case Ci:
            case Ai:
            case Ii:
            case $i:
            case Ri:
              return Cs(e, t);
            case Ae:
              return new r();
            case kn:
            case Xt:
              return new r(e);
            case Jt:
              return mf(e);
            case Bn:
              return new r();
            case wr:
              return bf(e);
          }
        }
        function Df(e, n) {
          var t = n.length;
          if (!t)
            return e;
          var r = t - 1;
          return n[r] = (t > 1 ? "& " : "") + n[r], n = n.join(t > 2 ? ", " : " "), e.replace(Wu, `{
/* [wrapped with ` + n + `] */
`);
        }
        function Wf(e) {
          return ge(e) || At(e) || !!(Ya && e && e[Ya]);
        }
        function nt(e, n) {
          var t = typeof e;
          return n = n ?? pe, !!n && (t == "number" || t != "symbol" && Ku.test(e)) && e > -1 && e % 1 == 0 && e < n;
        }
        function on(e, n, t) {
          if (!Me(t))
            return !1;
          var r = typeof n;
          return (r == "number" ? cn(t) && nt(n, t.length) : r == "string" && n in t) ? Vn(t[n], e) : !1;
        }
        function So(e, n) {
          if (ge(e))
            return !1;
          var t = typeof e;
          return t == "number" || t == "symbol" || t == "boolean" || e == null || bn(e) ? !0 : Ou.test(e) || !Tu.test(e) || n != null && e in Le(n);
        }
        function Vf(e) {
          var n = typeof e;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
        }
        function Co(e) {
          var n = jr(e), t = a[n];
          if (typeof t != "function" || !(n in ke.prototype))
            return !1;
          if (e === t)
            return !0;
          var r = wo(t);
          return !!r && e === r[0];
        }
        function Pf(e) {
          return !!qa && qa in e;
        }
        var Mf = Rr ? tt : Fo;
        function fr(e) {
          var n = e && e.constructor, t = typeof n == "function" && n.prototype || Dt;
          return e === t;
        }
        function qs(e) {
          return e === e && !Me(e);
        }
        function Gs(e, n) {
          return function(t) {
            return t == null ? !1 : t[e] === n && (n !== o || e in Le(t));
          };
        }
        function Uf(e) {
          var n = oi(e, function(r) {
            return t.size === f && t.clear(), r;
          }), t = n.cache;
          return n;
        }
        function Nf(e, n) {
          var t = e[1], r = n[1], i = t | r, s = i < (V | R | ve), l = r == ve && t == Z || r == ve && t == Ve && e[7].length <= n[8] || r == (ve | Ve) && n[7].length <= n[8] && t == Z;
          if (!(s || l))
            return e;
          r & V && (e[2] = n[2], i |= t & V ? 0 : D);
          var d = n[3];
          if (d) {
            var v = e[3];
            e[3] = v ? Is(v, d, n[4]) : d, e[4] = v ? ut(e[3], k) : n[4];
          }
          return d = n[5], d && (v = e[5], e[5] = v ? $s(v, d, n[6]) : d, e[6] = v ? ut(e[5], k) : n[6]), d = n[7], d && (e[7] = d), r & ve && (e[8] = e[8] == null ? n[8] : nn(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = i, e;
        }
        function Ff(e) {
          var n = [];
          if (e != null)
            for (var t in Le(e))
              n.push(t);
          return n;
        }
        function zf(e) {
          return Tr.call(e);
        }
        function Hs(e, n, t) {
          return n = qe(n === o ? e.length - 1 : n, 0), function() {
            for (var r = arguments, i = -1, s = qe(r.length - n, 0), l = S(s); ++i < s; )
              l[i] = r[n + i];
            i = -1;
            for (var d = S(n + 1); ++i < n; )
              d[i] = r[i];
            return d[n] = t(l), hn(e, this, d);
          };
        }
        function Ks(e, n) {
          return n.length < 2 ? e : xt(e, $n(n, 0, -1));
        }
        function qf(e, n) {
          for (var t = e.length, r = nn(n.length, t), i = dn(e); r--; ) {
            var s = n[r];
            e[r] = nt(s, t) ? i[s] : o;
          }
          return e;
        }
        function Ao(e, n) {
          if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
            return e[n];
        }
        var Ys = Js(_s), pr = ic || function(e, n) {
          return Ke.setTimeout(e, n);
        }, Io = Js(pf);
        function Zs(e, n, t) {
          var r = n + "";
          return Io(e, Df(r, Gf(Of(r), t)));
        }
        function Js(e) {
          var n = 0, t = 0;
          return function() {
            var r = lc(), i = en - (r - t);
            if (t = r, i > 0) {
              if (++n >= $e)
                return arguments[0];
            } else
              n = 0;
            return e.apply(o, arguments);
          };
        }
        function ni(e, n) {
          var t = -1, r = e.length, i = r - 1;
          for (n = n === o ? r : n; ++t < n; ) {
            var s = lo(t, i), l = e[s];
            e[s] = e[t], e[t] = l;
          }
          return e.length = n, e;
        }
        var Xs = Uf(function(e) {
          var n = [];
          return e.charCodeAt(0) === 46 && n.push(""), e.replace(Lu, function(t, r, i, s) {
            n.push(i ? s.replace(Nu, "$1") : r || t);
          }), n;
        });
        function Gn(e) {
          if (typeof e == "string" || bn(e))
            return e;
          var n = e + "";
          return n == "0" && 1 / e == -M ? "-0" : n;
        }
        function Ct(e) {
          if (e != null) {
            try {
              return Er.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function Gf(e, n) {
          return Sn(_t, function(t) {
            var r = "_." + t[0];
            n & t[1] && !Cr(e, r) && e.push(r);
          }), e.sort();
        }
        function Qs(e) {
          if (e instanceof ke)
            return e.clone();
          var n = new An(e.__wrapped__, e.__chain__);
          return n.__actions__ = dn(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
        }
        function Hf(e, n, t) {
          (t ? on(e, n, t) : n === o) ? n = 1 : n = qe(he(n), 0);
          var r = e == null ? 0 : e.length;
          if (!r || n < 1)
            return [];
          for (var i = 0, s = 0, l = S(Vr(r / n)); i < r; )
            l[s++] = $n(e, i, i += n);
          return l;
        }
        function Kf(e) {
          for (var n = -1, t = e == null ? 0 : e.length, r = 0, i = []; ++n < t; ) {
            var s = e[n];
            s && (i[r++] = s);
          }
          return i;
        }
        function Yf() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var n = S(e - 1), t = arguments[0], r = e; r--; )
            n[r - 1] = arguments[r];
          return lt(ge(t) ? dn(t) : [t], Ye(n, 1));
        }
        var Zf = me(function(e, n) {
          return Ne(e) ? sr(e, Ye(n, 1, Ne, !0)) : [];
        }), Jf = me(function(e, n) {
          var t = Rn(n);
          return Ne(t) && (t = o), Ne(e) ? sr(e, Ye(n, 1, Ne, !0), oe(t, 2)) : [];
        }), Xf = me(function(e, n) {
          var t = Rn(n);
          return Ne(t) && (t = o), Ne(e) ? sr(e, Ye(n, 1, Ne, !0), o, t) : [];
        });
        function Qf(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : he(n), $n(e, n < 0 ? 0 : n, r)) : [];
        }
        function jf(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : he(n), n = r - n, $n(e, 0, n < 0 ? 0 : n)) : [];
        }
        function ep(e, n) {
          return e && e.length ? Kr(e, oe(n, 3), !0, !0) : [];
        }
        function np(e, n) {
          return e && e.length ? Kr(e, oe(n, 3), !0) : [];
        }
        function tp(e, n, t, r) {
          var i = e == null ? 0 : e.length;
          return i ? (t && typeof t != "number" && on(e, n, t) && (t = 0, r = i), Kc(e, n, t, r)) : [];
        }
        function js(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : he(t);
          return i < 0 && (i = qe(r + i, 0)), Ar(e, oe(n, 3), i);
        }
        function el(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r - 1;
          return t !== o && (i = he(t), i = t < 0 ? qe(r + i, 0) : nn(i, r - 1)), Ar(e, oe(n, 3), i, !0);
        }
        function nl(e) {
          var n = e == null ? 0 : e.length;
          return n ? Ye(e, 1) : [];
        }
        function rp(e) {
          var n = e == null ? 0 : e.length;
          return n ? Ye(e, M) : [];
        }
        function ip(e, n) {
          var t = e == null ? 0 : e.length;
          return t ? (n = n === o ? 1 : he(n), Ye(e, n)) : [];
        }
        function op(e) {
          for (var n = -1, t = e == null ? 0 : e.length, r = {}; ++n < t; ) {
            var i = e[n];
            r[i[0]] = i[1];
          }
          return r;
        }
        function tl(e) {
          return e && e.length ? e[0] : o;
        }
        function ap(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : he(t);
          return i < 0 && (i = qe(r + i, 0)), Tt(e, n, i);
        }
        function sp(e) {
          var n = e == null ? 0 : e.length;
          return n ? $n(e, 0, -1) : [];
        }
        var lp = me(function(e) {
          var n = Pe(e, go);
          return n.length && n[0] === e[0] ? ro(n) : [];
        }), up = me(function(e) {
          var n = Rn(e), t = Pe(e, go);
          return n === Rn(t) ? n = o : t.pop(), t.length && t[0] === e[0] ? ro(t, oe(n, 2)) : [];
        }), dp = me(function(e) {
          var n = Rn(e), t = Pe(e, go);
          return n = typeof n == "function" ? n : o, n && t.pop(), t.length && t[0] === e[0] ? ro(t, o, n) : [];
        });
        function cp(e, n) {
          return e == null ? "" : ac.call(e, n);
        }
        function Rn(e) {
          var n = e == null ? 0 : e.length;
          return n ? e[n - 1] : o;
        }
        function fp(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r;
          return t !== o && (i = he(t), i = i < 0 ? qe(r + i, 0) : nn(i, r - 1)), n === n ? qd(e, n, i) : Ar(e, Wa, i, !0);
        }
        function pp(e, n) {
          return e && e.length ? ps(e, he(n)) : o;
        }
        var gp = me(rl);
        function rl(e, n) {
          return e && e.length && n && n.length ? so(e, n) : e;
        }
        function vp(e, n, t) {
          return e && e.length && n && n.length ? so(e, n, oe(t, 2)) : e;
        }
        function hp(e, n, t) {
          return e && e.length && n && n.length ? so(e, n, o, t) : e;
        }
        var _p = et(function(e, n) {
          var t = e == null ? 0 : e.length, r = ji(e, n);
          return hs(e, Pe(n, function(i) {
            return nt(i, t) ? +i : i;
          }).sort(As)), r;
        });
        function mp(e, n) {
          var t = [];
          if (!(e && e.length))
            return t;
          var r = -1, i = [], s = e.length;
          for (n = oe(n, 3); ++r < s; ) {
            var l = e[r];
            n(l, r, e) && (t.push(l), i.push(r));
          }
          return hs(e, i), t;
        }
        function $o(e) {
          return e == null ? e : dc.call(e);
        }
        function bp(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (t && typeof t != "number" && on(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : he(n), t = t === o ? r : he(t)), $n(e, n, t)) : [];
        }
        function yp(e, n) {
          return Hr(e, n);
        }
        function wp(e, n, t) {
          return co(e, n, oe(t, 2));
        }
        function kp(e, n) {
          var t = e == null ? 0 : e.length;
          if (t) {
            var r = Hr(e, n);
            if (r < t && Vn(e[r], n))
              return r;
          }
          return -1;
        }
        function xp(e, n) {
          return Hr(e, n, !0);
        }
        function Sp(e, n, t) {
          return co(e, n, oe(t, 2), !0);
        }
        function Cp(e, n) {
          var t = e == null ? 0 : e.length;
          if (t) {
            var r = Hr(e, n, !0) - 1;
            if (Vn(e[r], n))
              return r;
          }
          return -1;
        }
        function Ap(e) {
          return e && e.length ? ms(e) : [];
        }
        function Ip(e, n) {
          return e && e.length ? ms(e, oe(n, 2)) : [];
        }
        function $p(e) {
          var n = e == null ? 0 : e.length;
          return n ? $n(e, 1, n) : [];
        }
        function Rp(e, n, t) {
          return e && e.length ? (n = t || n === o ? 1 : he(n), $n(e, 0, n < 0 ? 0 : n)) : [];
        }
        function Ep(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : he(n), n = r - n, $n(e, n < 0 ? 0 : n, r)) : [];
        }
        function Tp(e, n) {
          return e && e.length ? Kr(e, oe(n, 3), !1, !0) : [];
        }
        function Op(e, n) {
          return e && e.length ? Kr(e, oe(n, 3)) : [];
        }
        var Lp = me(function(e) {
          return ft(Ye(e, 1, Ne, !0));
        }), Bp = me(function(e) {
          var n = Rn(e);
          return Ne(n) && (n = o), ft(Ye(e, 1, Ne, !0), oe(n, 2));
        }), Dp = me(function(e) {
          var n = Rn(e);
          return n = typeof n == "function" ? n : o, ft(Ye(e, 1, Ne, !0), o, n);
        });
        function Wp(e) {
          return e && e.length ? ft(e) : [];
        }
        function Vp(e, n) {
          return e && e.length ? ft(e, oe(n, 2)) : [];
        }
        function Pp(e, n) {
          return n = typeof n == "function" ? n : o, e && e.length ? ft(e, o, n) : [];
        }
        function Ro(e) {
          if (!(e && e.length))
            return [];
          var n = 0;
          return e = st(e, function(t) {
            if (Ne(t))
              return n = qe(t.length, n), !0;
          }), Gi(n, function(t) {
            return Pe(e, Fi(t));
          });
        }
        function il(e, n) {
          if (!(e && e.length))
            return [];
          var t = Ro(e);
          return n == null ? t : Pe(t, function(r) {
            return hn(n, o, r);
          });
        }
        var Mp = me(function(e, n) {
          return Ne(e) ? sr(e, n) : [];
        }), Up = me(function(e) {
          return po(st(e, Ne));
        }), Np = me(function(e) {
          var n = Rn(e);
          return Ne(n) && (n = o), po(st(e, Ne), oe(n, 2));
        }), Fp = me(function(e) {
          var n = Rn(e);
          return n = typeof n == "function" ? n : o, po(st(e, Ne), o, n);
        }), zp = me(Ro);
        function qp(e, n) {
          return ks(e || [], n || [], ar);
        }
        function Gp(e, n) {
          return ks(e || [], n || [], dr);
        }
        var Hp = me(function(e) {
          var n = e.length, t = n > 1 ? e[n - 1] : o;
          return t = typeof t == "function" ? (e.pop(), t) : o, il(e, t);
        });
        function ol(e) {
          var n = a(e);
          return n.__chain__ = !0, n;
        }
        function Kp(e, n) {
          return n(e), e;
        }
        function ti(e, n) {
          return n(e);
        }
        var Yp = et(function(e) {
          var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, i = function(s) {
            return ji(s, e);
          };
          return n > 1 || this.__actions__.length || !(r instanceof ke) || !nt(t) ? this.thru(i) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({
            func: ti,
            args: [i],
            thisArg: o
          }), new An(r, this.__chain__).thru(function(s) {
            return n && !s.length && s.push(o), s;
          }));
        });
        function Zp() {
          return ol(this);
        }
        function Jp() {
          return new An(this.value(), this.__chain__);
        }
        function Xp() {
          this.__values__ === o && (this.__values__ = bl(this.value()));
          var e = this.__index__ >= this.__values__.length, n = e ? o : this.__values__[this.__index__++];
          return { done: e, value: n };
        }
        function Qp() {
          return this;
        }
        function jp(e) {
          for (var n, t = this; t instanceof Nr; ) {
            var r = Qs(t);
            r.__index__ = 0, r.__values__ = o, n ? i.__wrapped__ = r : n = r;
            var i = r;
            t = t.__wrapped__;
          }
          return i.__wrapped__ = e, n;
        }
        function eg() {
          var e = this.__wrapped__;
          if (e instanceof ke) {
            var n = e;
            return this.__actions__.length && (n = new ke(this)), n = n.reverse(), n.__actions__.push({
              func: ti,
              args: [$o],
              thisArg: o
            }), new An(n, this.__chain__);
          }
          return this.thru($o);
        }
        function ng() {
          return ws(this.__wrapped__, this.__actions__);
        }
        var tg = Yr(function(e, n, t) {
          Te.call(e, t) ? ++e[t] : Qn(e, t, 1);
        });
        function rg(e, n, t) {
          var r = ge(e) ? Ba : Hc;
          return t && on(e, n, t) && (n = o), r(e, oe(n, 3));
        }
        function ig(e, n) {
          var t = ge(e) ? st : is;
          return t(e, oe(n, 3));
        }
        var og = Os(js), ag = Os(el);
        function sg(e, n) {
          return Ye(ri(e, n), 1);
        }
        function lg(e, n) {
          return Ye(ri(e, n), M);
        }
        function ug(e, n, t) {
          return t = t === o ? 1 : he(t), Ye(ri(e, n), t);
        }
        function al(e, n) {
          var t = ge(e) ? Sn : ct;
          return t(e, oe(n, 3));
        }
        function sl(e, n) {
          var t = ge(e) ? Id : rs;
          return t(e, oe(n, 3));
        }
        var dg = Yr(function(e, n, t) {
          Te.call(e, t) ? e[t].push(n) : Qn(e, t, [n]);
        });
        function cg(e, n, t, r) {
          e = cn(e) ? e : zt(e), t = t && !r ? he(t) : 0;
          var i = e.length;
          return t < 0 && (t = qe(i + t, 0)), li(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && Tt(e, n, t) > -1;
        }
        var fg = me(function(e, n, t) {
          var r = -1, i = typeof n == "function", s = cn(e) ? S(e.length) : [];
          return ct(e, function(l) {
            s[++r] = i ? hn(n, l, t) : lr(l, n, t);
          }), s;
        }), pg = Yr(function(e, n, t) {
          Qn(e, t, n);
        });
        function ri(e, n) {
          var t = ge(e) ? Pe : ds;
          return t(e, oe(n, 3));
        }
        function gg(e, n, t, r) {
          return e == null ? [] : (ge(n) || (n = n == null ? [] : [n]), t = r ? o : t, ge(t) || (t = t == null ? [] : [t]), gs(e, n, t));
        }
        var vg = Yr(function(e, n, t) {
          e[t ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function hg(e, n, t) {
          var r = ge(e) ? Ui : Pa, i = arguments.length < 3;
          return r(e, oe(n, 4), t, i, ct);
        }
        function _g(e, n, t) {
          var r = ge(e) ? $d : Pa, i = arguments.length < 3;
          return r(e, oe(n, 4), t, i, rs);
        }
        function mg(e, n) {
          var t = ge(e) ? st : is;
          return t(e, ai(oe(n, 3)));
        }
        function bg(e) {
          var n = ge(e) ? ja : cf;
          return n(e);
        }
        function yg(e, n, t) {
          (t ? on(e, n, t) : n === o) ? n = 1 : n = he(n);
          var r = ge(e) ? Nc : ff;
          return r(e, n);
        }
        function wg(e) {
          var n = ge(e) ? Fc : gf;
          return n(e);
        }
        function kg(e) {
          if (e == null)
            return 0;
          if (cn(e))
            return li(e) ? Lt(e) : e.length;
          var n = tn(e);
          return n == Ae || n == Bn ? e.size : oo(e).length;
        }
        function xg(e, n, t) {
          var r = ge(e) ? Ni : vf;
          return t && on(e, n, t) && (n = o), r(e, oe(n, 3));
        }
        var Sg = me(function(e, n) {
          if (e == null)
            return [];
          var t = n.length;
          return t > 1 && on(e, n[0], n[1]) ? n = [] : t > 2 && on(n[0], n[1], n[2]) && (n = [n[0]]), gs(e, Ye(n, 1), []);
        }), ii = rc || function() {
          return Ke.Date.now();
        };
        function Cg(e, n) {
          if (typeof n != "function")
            throw new Cn(c);
          return e = he(e), function() {
            if (--e < 1)
              return n.apply(this, arguments);
          };
        }
        function ll(e, n, t) {
          return n = t ? o : n, n = e && n == null ? e.length : n, jn(e, ve, o, o, o, o, n);
        }
        function ul(e, n) {
          var t;
          if (typeof n != "function")
            throw new Cn(c);
          return e = he(e), function() {
            return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = o), t;
          };
        }
        var Eo = me(function(e, n, t) {
          var r = V;
          if (t.length) {
            var i = ut(t, Nt(Eo));
            r |= P;
          }
          return jn(e, r, n, t, i);
        }), dl = me(function(e, n, t) {
          var r = V | R;
          if (t.length) {
            var i = ut(t, Nt(dl));
            r |= P;
          }
          return jn(n, r, e, t, i);
        });
        function cl(e, n, t) {
          n = t ? o : n;
          var r = jn(e, Z, o, o, o, o, o, n);
          return r.placeholder = cl.placeholder, r;
        }
        function fl(e, n, t) {
          n = t ? o : n;
          var r = jn(e, ue, o, o, o, o, o, n);
          return r.placeholder = fl.placeholder, r;
        }
        function pl(e, n, t) {
          var r, i, s, l, d, v, O = 0, L = !1, W = !1, K = !0;
          if (typeof e != "function")
            throw new Cn(c);
          n = En(n) || 0, Me(t) && (L = !!t.leading, W = "maxWait" in t, s = W ? qe(En(t.maxWait) || 0, n) : s, K = "trailing" in t ? !!t.trailing : K);
          function Q(Fe) {
            var Pn = r, it = i;
            return r = i = o, O = Fe, l = e.apply(it, Pn), l;
          }
          function se(Fe) {
            return O = Fe, d = pr(we, n), L ? Q(Fe) : l;
          }
          function _e(Fe) {
            var Pn = Fe - v, it = Fe - O, Ol = n - Pn;
            return W ? nn(Ol, s - it) : Ol;
          }
          function le(Fe) {
            var Pn = Fe - v, it = Fe - O;
            return v === o || Pn >= n || Pn < 0 || W && it >= s;
          }
          function we() {
            var Fe = ii();
            if (le(Fe))
              return Se(Fe);
            d = pr(we, _e(Fe));
          }
          function Se(Fe) {
            return d = o, K && r ? Q(Fe) : (r = i = o, l);
          }
          function yn() {
            d !== o && xs(d), O = 0, r = v = i = d = o;
          }
          function an() {
            return d === o ? l : Se(ii());
          }
          function wn() {
            var Fe = ii(), Pn = le(Fe);
            if (r = arguments, i = this, v = Fe, Pn) {
              if (d === o)
                return se(v);
              if (W)
                return xs(d), d = pr(we, n), Q(v);
            }
            return d === o && (d = pr(we, n)), l;
          }
          return wn.cancel = yn, wn.flush = an, wn;
        }
        var Ag = me(function(e, n) {
          return ts(e, 1, n);
        }), Ig = me(function(e, n, t) {
          return ts(e, En(n) || 0, t);
        });
        function $g(e) {
          return jn(e, ie);
        }
        function oi(e, n) {
          if (typeof e != "function" || n != null && typeof n != "function")
            throw new Cn(c);
          var t = function() {
            var r = arguments, i = n ? n.apply(this, r) : r[0], s = t.cache;
            if (s.has(i))
              return s.get(i);
            var l = e.apply(this, r);
            return t.cache = s.set(i, l) || s, l;
          };
          return t.cache = new (oi.Cache || Xn)(), t;
        }
        oi.Cache = Xn;
        function ai(e) {
          if (typeof e != "function")
            throw new Cn(c);
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
        function Rg(e) {
          return ul(2, e);
        }
        var Eg = hf(function(e, n) {
          n = n.length == 1 && ge(n[0]) ? Pe(n[0], _n(oe())) : Pe(Ye(n, 1), _n(oe()));
          var t = n.length;
          return me(function(r) {
            for (var i = -1, s = nn(r.length, t); ++i < s; )
              r[i] = n[i].call(this, r[i]);
            return hn(e, this, r);
          });
        }), To = me(function(e, n) {
          var t = ut(n, Nt(To));
          return jn(e, P, o, n, t);
        }), gl = me(function(e, n) {
          var t = ut(n, Nt(gl));
          return jn(e, X, o, n, t);
        }), Tg = et(function(e, n) {
          return jn(e, Ve, o, o, o, n);
        });
        function Og(e, n) {
          if (typeof e != "function")
            throw new Cn(c);
          return n = n === o ? n : he(n), me(e, n);
        }
        function Lg(e, n) {
          if (typeof e != "function")
            throw new Cn(c);
          return n = n == null ? 0 : qe(he(n), 0), me(function(t) {
            var r = t[n], i = gt(t, 0, n);
            return r && lt(i, r), hn(e, this, i);
          });
        }
        function Bg(e, n, t) {
          var r = !0, i = !0;
          if (typeof e != "function")
            throw new Cn(c);
          return Me(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), pl(e, n, {
            leading: r,
            maxWait: n,
            trailing: i
          });
        }
        function Dg(e) {
          return ll(e, 1);
        }
        function Wg(e, n) {
          return To(vo(n), e);
        }
        function Vg() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return ge(e) ? e : [e];
        }
        function Pg(e) {
          return In(e, te);
        }
        function Mg(e, n) {
          return n = typeof n == "function" ? n : o, In(e, te, n);
        }
        function Ug(e) {
          return In(e, G | te);
        }
        function Ng(e, n) {
          return n = typeof n == "function" ? n : o, In(e, G | te, n);
        }
        function Fg(e, n) {
          return n == null || ns(e, n, He(n));
        }
        function Vn(e, n) {
          return e === n || e !== e && n !== n;
        }
        var zg = Qr(to), qg = Qr(function(e, n) {
          return e >= n;
        }), At = ss(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? ss : function(e) {
          return Ue(e) && Te.call(e, "callee") && !Ka.call(e, "callee");
        }, ge = S.isArray, Gg = $a ? _n($a) : Qc;
        function cn(e) {
          return e != null && si(e.length) && !tt(e);
        }
        function Ne(e) {
          return Ue(e) && cn(e);
        }
        function Hg(e) {
          return e === !0 || e === !1 || Ue(e) && rn(e) == Zn;
        }
        var vt = oc || Fo, Kg = Ra ? _n(Ra) : jc;
        function Yg(e) {
          return Ue(e) && e.nodeType === 1 && !gr(e);
        }
        function Zg(e) {
          if (e == null)
            return !0;
          if (cn(e) && (ge(e) || typeof e == "string" || typeof e.splice == "function" || vt(e) || Ft(e) || At(e)))
            return !e.length;
          var n = tn(e);
          if (n == Ae || n == Bn)
            return !e.size;
          if (fr(e))
            return !oo(e).length;
          for (var t in e)
            if (Te.call(e, t))
              return !1;
          return !0;
        }
        function Jg(e, n) {
          return ur(e, n);
        }
        function Xg(e, n, t) {
          t = typeof t == "function" ? t : o;
          var r = t ? t(e, n) : o;
          return r === o ? ur(e, n, o, t) : !!r;
        }
        function Oo(e) {
          if (!Ue(e))
            return !1;
          var n = rn(e);
          return n == x || n == y || typeof e.message == "string" && typeof e.name == "string" && !gr(e);
        }
        function Qg(e) {
          return typeof e == "number" && Za(e);
        }
        function tt(e) {
          if (!Me(e))
            return !1;
          var n = rn(e);
          return n == Y || n == Oe || n == Zt || n == wu;
        }
        function vl(e) {
          return typeof e == "number" && e == he(e);
        }
        function si(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pe;
        }
        function Me(e) {
          var n = typeof e;
          return e != null && (n == "object" || n == "function");
        }
        function Ue(e) {
          return e != null && typeof e == "object";
        }
        var hl = Ea ? _n(Ea) : nf;
        function jg(e, n) {
          return e === n || io(e, n, ko(n));
        }
        function ev(e, n, t) {
          return t = typeof t == "function" ? t : o, io(e, n, ko(n), t);
        }
        function nv(e) {
          return _l(e) && e != +e;
        }
        function tv(e) {
          if (Mf(e))
            throw new fe(I);
          return ls(e);
        }
        function rv(e) {
          return e === null;
        }
        function iv(e) {
          return e == null;
        }
        function _l(e) {
          return typeof e == "number" || Ue(e) && rn(e) == kn;
        }
        function gr(e) {
          if (!Ue(e) || rn(e) != Ln)
            return !1;
          var n = Br(e);
          if (n === null)
            return !0;
          var t = Te.call(n, "constructor") && n.constructor;
          return typeof t == "function" && t instanceof t && Er.call(t) == jd;
        }
        var Lo = Ta ? _n(Ta) : tf;
        function ov(e) {
          return vl(e) && e >= -pe && e <= pe;
        }
        var ml = Oa ? _n(Oa) : rf;
        function li(e) {
          return typeof e == "string" || !ge(e) && Ue(e) && rn(e) == Xt;
        }
        function bn(e) {
          return typeof e == "symbol" || Ue(e) && rn(e) == wr;
        }
        var Ft = La ? _n(La) : of;
        function av(e) {
          return e === o;
        }
        function sv(e) {
          return Ue(e) && tn(e) == Qt;
        }
        function lv(e) {
          return Ue(e) && rn(e) == xu;
        }
        var uv = Qr(ao), dv = Qr(function(e, n) {
          return e <= n;
        });
        function bl(e) {
          if (!e)
            return [];
          if (cn(e))
            return li(e) ? Dn(e) : dn(e);
          if (nr && e[nr])
            return Nd(e[nr]());
          var n = tn(e), t = n == Ae ? Ki : n == Bn ? Ir : zt;
          return t(e);
        }
        function rt(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = En(e), e === M || e === -M) {
            var n = e < 0 ? -1 : 1;
            return n * sn;
          }
          return e === e ? e : 0;
        }
        function he(e) {
          var n = rt(e), t = n % 1;
          return n === n ? t ? n - t : n : 0;
        }
        function yl(e) {
          return e ? kt(he(e), 0, un) : 0;
        }
        function En(e) {
          if (typeof e == "number")
            return e;
          if (bn(e))
            return ln;
          if (Me(e)) {
            var n = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Me(n) ? n + "" : n;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Ma(e);
          var t = qu.test(e);
          return t || Hu.test(e) ? Sd(e.slice(2), t ? 2 : 8) : zu.test(e) ? ln : +e;
        }
        function wl(e) {
          return qn(e, fn(e));
        }
        function cv(e) {
          return e ? kt(he(e), -pe, pe) : e === 0 ? e : 0;
        }
        function Re(e) {
          return e == null ? "" : mn(e);
        }
        var fv = Mt(function(e, n) {
          if (fr(n) || cn(n)) {
            qn(n, He(n), e);
            return;
          }
          for (var t in n)
            Te.call(n, t) && ar(e, t, n[t]);
        }), kl = Mt(function(e, n) {
          qn(n, fn(n), e);
        }), ui = Mt(function(e, n, t, r) {
          qn(n, fn(n), e, r);
        }), pv = Mt(function(e, n, t, r) {
          qn(n, He(n), e, r);
        }), gv = et(ji);
        function vv(e, n) {
          var t = Pt(e);
          return n == null ? t : es(t, n);
        }
        var hv = me(function(e, n) {
          e = Le(e);
          var t = -1, r = n.length, i = r > 2 ? n[2] : o;
          for (i && on(n[0], n[1], i) && (r = 1); ++t < r; )
            for (var s = n[t], l = fn(s), d = -1, v = l.length; ++d < v; ) {
              var O = l[d], L = e[O];
              (L === o || Vn(L, Dt[O]) && !Te.call(e, O)) && (e[O] = s[O]);
            }
          return e;
        }), _v = me(function(e) {
          return e.push(o, Ms), hn(xl, o, e);
        });
        function mv(e, n) {
          return Da(e, oe(n, 3), zn);
        }
        function bv(e, n) {
          return Da(e, oe(n, 3), no);
        }
        function yv(e, n) {
          return e == null ? e : eo(e, oe(n, 3), fn);
        }
        function wv(e, n) {
          return e == null ? e : os(e, oe(n, 3), fn);
        }
        function kv(e, n) {
          return e && zn(e, oe(n, 3));
        }
        function xv(e, n) {
          return e && no(e, oe(n, 3));
        }
        function Sv(e) {
          return e == null ? [] : qr(e, He(e));
        }
        function Cv(e) {
          return e == null ? [] : qr(e, fn(e));
        }
        function Bo(e, n, t) {
          var r = e == null ? o : xt(e, n);
          return r === o ? t : r;
        }
        function Av(e, n) {
          return e != null && Fs(e, n, Yc);
        }
        function Do(e, n) {
          return e != null && Fs(e, n, Zc);
        }
        var Iv = Bs(function(e, n, t) {
          n != null && typeof n.toString != "function" && (n = Tr.call(n)), e[n] = t;
        }, Vo(pn)), $v = Bs(function(e, n, t) {
          n != null && typeof n.toString != "function" && (n = Tr.call(n)), Te.call(e, n) ? e[n].push(t) : e[n] = [t];
        }, oe), Rv = me(lr);
        function He(e) {
          return cn(e) ? Qa(e) : oo(e);
        }
        function fn(e) {
          return cn(e) ? Qa(e, !0) : af(e);
        }
        function Ev(e, n) {
          var t = {};
          return n = oe(n, 3), zn(e, function(r, i, s) {
            Qn(t, n(r, i, s), r);
          }), t;
        }
        function Tv(e, n) {
          var t = {};
          return n = oe(n, 3), zn(e, function(r, i, s) {
            Qn(t, i, n(r, i, s));
          }), t;
        }
        var Ov = Mt(function(e, n, t) {
          Gr(e, n, t);
        }), xl = Mt(function(e, n, t, r) {
          Gr(e, n, t, r);
        }), Lv = et(function(e, n) {
          var t = {};
          if (e == null)
            return t;
          var r = !1;
          n = Pe(n, function(s) {
            return s = pt(s, e), r || (r = s.length > 1), s;
          }), qn(e, yo(e), t), r && (t = In(t, G | H | te, If));
          for (var i = n.length; i--; )
            fo(t, n[i]);
          return t;
        });
        function Bv(e, n) {
          return Sl(e, ai(oe(n)));
        }
        var Dv = et(function(e, n) {
          return e == null ? {} : lf(e, n);
        });
        function Sl(e, n) {
          if (e == null)
            return {};
          var t = Pe(yo(e), function(r) {
            return [r];
          });
          return n = oe(n), vs(e, t, function(r, i) {
            return n(r, i[0]);
          });
        }
        function Wv(e, n, t) {
          n = pt(n, e);
          var r = -1, i = n.length;
          for (i || (i = 1, e = o); ++r < i; ) {
            var s = e == null ? o : e[Gn(n[r])];
            s === o && (r = i, s = t), e = tt(s) ? s.call(e) : s;
          }
          return e;
        }
        function Vv(e, n, t) {
          return e == null ? e : dr(e, n, t);
        }
        function Pv(e, n, t, r) {
          return r = typeof r == "function" ? r : o, e == null ? e : dr(e, n, t, r);
        }
        var Cl = Vs(He), Al = Vs(fn);
        function Mv(e, n, t) {
          var r = ge(e), i = r || vt(e) || Ft(e);
          if (n = oe(n, 4), t == null) {
            var s = e && e.constructor;
            i ? t = r ? new s() : [] : Me(e) ? t = tt(s) ? Pt(Br(e)) : {} : t = {};
          }
          return (i ? Sn : zn)(e, function(l, d, v) {
            return n(t, l, d, v);
          }), t;
        }
        function Uv(e, n) {
          return e == null ? !0 : fo(e, n);
        }
        function Nv(e, n, t) {
          return e == null ? e : ys(e, n, vo(t));
        }
        function Fv(e, n, t, r) {
          return r = typeof r == "function" ? r : o, e == null ? e : ys(e, n, vo(t), r);
        }
        function zt(e) {
          return e == null ? [] : Hi(e, He(e));
        }
        function zv(e) {
          return e == null ? [] : Hi(e, fn(e));
        }
        function qv(e, n, t) {
          return t === o && (t = n, n = o), t !== o && (t = En(t), t = t === t ? t : 0), n !== o && (n = En(n), n = n === n ? n : 0), kt(En(e), n, t);
        }
        function Gv(e, n, t) {
          return n = rt(n), t === o ? (t = n, n = 0) : t = rt(t), e = En(e), Jc(e, n, t);
        }
        function Hv(e, n, t) {
          if (t && typeof t != "boolean" && on(e, n, t) && (n = t = o), t === o && (typeof n == "boolean" ? (t = n, n = o) : typeof e == "boolean" && (t = e, e = o)), e === o && n === o ? (e = 0, n = 1) : (e = rt(e), n === o ? (n = e, e = 0) : n = rt(n)), e > n) {
            var r = e;
            e = n, n = r;
          }
          if (t || e % 1 || n % 1) {
            var i = Ja();
            return nn(e + i * (n - e + xd("1e-" + ((i + "").length - 1))), n);
          }
          return lo(e, n);
        }
        var Kv = Ut(function(e, n, t) {
          return n = n.toLowerCase(), e + (t ? Il(n) : n);
        });
        function Il(e) {
          return Wo(Re(e).toLowerCase());
        }
        function $l(e) {
          return e = Re(e), e && e.replace(Yu, Wd).replace(pd, "");
        }
        function Yv(e, n, t) {
          e = Re(e), n = mn(n);
          var r = e.length;
          t = t === o ? r : kt(he(t), 0, r);
          var i = t;
          return t -= n.length, t >= 0 && e.slice(t, i) == n;
        }
        function Zv(e) {
          return e = Re(e), e && $u.test(e) ? e.replace(oa, Vd) : e;
        }
        function Jv(e) {
          return e = Re(e), e && Bu.test(e) ? e.replace(Ei, "\\$&") : e;
        }
        var Xv = Ut(function(e, n, t) {
          return e + (t ? "-" : "") + n.toLowerCase();
        }), Qv = Ut(function(e, n, t) {
          return e + (t ? " " : "") + n.toLowerCase();
        }), jv = Ts("toLowerCase");
        function eh(e, n, t) {
          e = Re(e), n = he(n);
          var r = n ? Lt(e) : 0;
          if (!n || r >= n)
            return e;
          var i = (n - r) / 2;
          return Xr(Pr(i), t) + e + Xr(Vr(i), t);
        }
        function nh(e, n, t) {
          e = Re(e), n = he(n);
          var r = n ? Lt(e) : 0;
          return n && r < n ? e + Xr(n - r, t) : e;
        }
        function th(e, n, t) {
          e = Re(e), n = he(n);
          var r = n ? Lt(e) : 0;
          return n && r < n ? Xr(n - r, t) + e : e;
        }
        function rh(e, n, t) {
          return t || n == null ? n = 0 : n && (n = +n), uc(Re(e).replace(Ti, ""), n || 0);
        }
        function ih(e, n, t) {
          return (t ? on(e, n, t) : n === o) ? n = 1 : n = he(n), uo(Re(e), n);
        }
        function oh() {
          var e = arguments, n = Re(e[0]);
          return e.length < 3 ? n : n.replace(e[1], e[2]);
        }
        var ah = Ut(function(e, n, t) {
          return e + (t ? "_" : "") + n.toLowerCase();
        });
        function sh(e, n, t) {
          return t && typeof t != "number" && on(e, n, t) && (n = t = o), t = t === o ? un : t >>> 0, t ? (e = Re(e), e && (typeof n == "string" || n != null && !Lo(n)) && (n = mn(n), !n && Ot(e)) ? gt(Dn(e), 0, t) : e.split(n, t)) : [];
        }
        var lh = Ut(function(e, n, t) {
          return e + (t ? " " : "") + Wo(n);
        });
        function uh(e, n, t) {
          return e = Re(e), t = t == null ? 0 : kt(he(t), 0, e.length), n = mn(n), e.slice(t, t + n.length) == n;
        }
        function dh(e, n, t) {
          var r = a.templateSettings;
          t && on(e, n, t) && (n = o), e = Re(e), n = ui({}, n, r, Ps);
          var i = ui({}, n.imports, r.imports, Ps), s = He(i), l = Hi(i, s), d, v, O = 0, L = n.interpolate || kr, W = "__p += '", K = Yi(
            (n.escape || kr).source + "|" + L.source + "|" + (L === aa ? Fu : kr).source + "|" + (n.evaluate || kr).source + "|$",
            "g"
          ), Q = "//# sourceURL=" + (Te.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++md + "]") + `
`;
          e.replace(K, function(le, we, Se, yn, an, wn) {
            return Se || (Se = yn), W += e.slice(O, wn).replace(Zu, Pd), we && (d = !0, W += `' +
__e(` + we + `) +
'`), an && (v = !0, W += `';
` + an + `;
__p += '`), Se && (W += `' +
((__t = (` + Se + `)) == null ? '' : __t) +
'`), O = wn + le.length, le;
          }), W += `';
`;
          var se = Te.call(n, "variable") && n.variable;
          if (!se)
            W = `with (obj) {
` + W + `
}
`;
          else if (Uu.test(se))
            throw new fe(T);
          W = (v ? W.replace(Su, "") : W).replace(Cu, "$1").replace(Au, "$1;"), W = "function(" + (se || "obj") + `) {
` + (se ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (d ? ", __e = _.escape" : "") + (v ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + W + `return __p
}`;
          var _e = El(function() {
            return Ie(s, Q + "return " + W).apply(o, l);
          });
          if (_e.source = W, Oo(_e))
            throw _e;
          return _e;
        }
        function ch(e) {
          return Re(e).toLowerCase();
        }
        function fh(e) {
          return Re(e).toUpperCase();
        }
        function ph(e, n, t) {
          if (e = Re(e), e && (t || n === o))
            return Ma(e);
          if (!e || !(n = mn(n)))
            return e;
          var r = Dn(e), i = Dn(n), s = Ua(r, i), l = Na(r, i) + 1;
          return gt(r, s, l).join("");
        }
        function gh(e, n, t) {
          if (e = Re(e), e && (t || n === o))
            return e.slice(0, za(e) + 1);
          if (!e || !(n = mn(n)))
            return e;
          var r = Dn(e), i = Na(r, Dn(n)) + 1;
          return gt(r, 0, i).join("");
        }
        function vh(e, n, t) {
          if (e = Re(e), e && (t || n === o))
            return e.replace(Ti, "");
          if (!e || !(n = mn(n)))
            return e;
          var r = Dn(e), i = Ua(r, Dn(n));
          return gt(r, i).join("");
        }
        function hh(e, n) {
          var t = ce, r = de;
          if (Me(n)) {
            var i = "separator" in n ? n.separator : i;
            t = "length" in n ? he(n.length) : t, r = "omission" in n ? mn(n.omission) : r;
          }
          e = Re(e);
          var s = e.length;
          if (Ot(e)) {
            var l = Dn(e);
            s = l.length;
          }
          if (t >= s)
            return e;
          var d = t - Lt(r);
          if (d < 1)
            return r;
          var v = l ? gt(l, 0, d).join("") : e.slice(0, d);
          if (i === o)
            return v + r;
          if (l && (d += v.length - d), Lo(i)) {
            if (e.slice(d).search(i)) {
              var O, L = v;
              for (i.global || (i = Yi(i.source, Re(sa.exec(i)) + "g")), i.lastIndex = 0; O = i.exec(L); )
                var W = O.index;
              v = v.slice(0, W === o ? d : W);
            }
          } else if (e.indexOf(mn(i), d) != d) {
            var K = v.lastIndexOf(i);
            K > -1 && (v = v.slice(0, K));
          }
          return v + r;
        }
        function _h(e) {
          return e = Re(e), e && Iu.test(e) ? e.replace(ia, Gd) : e;
        }
        var mh = Ut(function(e, n, t) {
          return e + (t ? " " : "") + n.toUpperCase();
        }), Wo = Ts("toUpperCase");
        function Rl(e, n, t) {
          return e = Re(e), n = t ? o : n, n === o ? Ud(e) ? Yd(e) : Td(e) : e.match(n) || [];
        }
        var El = me(function(e, n) {
          try {
            return hn(e, o, n);
          } catch (t) {
            return Oo(t) ? t : new fe(t);
          }
        }), bh = et(function(e, n) {
          return Sn(n, function(t) {
            t = Gn(t), Qn(e, t, Eo(e[t], e));
          }), e;
        });
        function yh(e) {
          var n = e == null ? 0 : e.length, t = oe();
          return e = n ? Pe(e, function(r) {
            if (typeof r[1] != "function")
              throw new Cn(c);
            return [t(r[0]), r[1]];
          }) : [], me(function(r) {
            for (var i = -1; ++i < n; ) {
              var s = e[i];
              if (hn(s[0], this, r))
                return hn(s[1], this, r);
            }
          });
        }
        function wh(e) {
          return Gc(In(e, G));
        }
        function Vo(e) {
          return function() {
            return e;
          };
        }
        function kh(e, n) {
          return e == null || e !== e ? n : e;
        }
        var xh = Ls(), Sh = Ls(!0);
        function pn(e) {
          return e;
        }
        function Po(e) {
          return us(typeof e == "function" ? e : In(e, G));
        }
        function Ch(e) {
          return cs(In(e, G));
        }
        function Ah(e, n) {
          return fs(e, In(n, G));
        }
        var Ih = me(function(e, n) {
          return function(t) {
            return lr(t, e, n);
          };
        }), $h = me(function(e, n) {
          return function(t) {
            return lr(e, t, n);
          };
        });
        function Mo(e, n, t) {
          var r = He(n), i = qr(n, r);
          t == null && !(Me(n) && (i.length || !r.length)) && (t = n, n = e, e = this, i = qr(n, He(n)));
          var s = !(Me(t) && "chain" in t) || !!t.chain, l = tt(e);
          return Sn(i, function(d) {
            var v = n[d];
            e[d] = v, l && (e.prototype[d] = function() {
              var O = this.__chain__;
              if (s || O) {
                var L = e(this.__wrapped__), W = L.__actions__ = dn(this.__actions__);
                return W.push({ func: v, args: arguments, thisArg: e }), L.__chain__ = O, L;
              }
              return v.apply(e, lt([this.value()], arguments));
            });
          }), e;
        }
        function Rh() {
          return Ke._ === this && (Ke._ = ec), this;
        }
        function Uo() {
        }
        function Eh(e) {
          return e = he(e), me(function(n) {
            return ps(n, e);
          });
        }
        var Th = _o(Pe), Oh = _o(Ba), Lh = _o(Ni);
        function Tl(e) {
          return So(e) ? Fi(Gn(e)) : uf(e);
        }
        function Bh(e) {
          return function(n) {
            return e == null ? o : xt(e, n);
          };
        }
        var Dh = Ds(), Wh = Ds(!0);
        function No() {
          return [];
        }
        function Fo() {
          return !1;
        }
        function Vh() {
          return {};
        }
        function Ph() {
          return "";
        }
        function Mh() {
          return !0;
        }
        function Uh(e, n) {
          if (e = he(e), e < 1 || e > pe)
            return [];
          var t = un, r = nn(e, un);
          n = oe(n), e -= un;
          for (var i = Gi(r, n); ++t < e; )
            n(t);
          return i;
        }
        function Nh(e) {
          return ge(e) ? Pe(e, Gn) : bn(e) ? [e] : dn(Xs(Re(e)));
        }
        function Fh(e) {
          var n = ++Qd;
          return Re(e) + n;
        }
        var zh = Jr(function(e, n) {
          return e + n;
        }, 0), qh = mo("ceil"), Gh = Jr(function(e, n) {
          return e / n;
        }, 1), Hh = mo("floor");
        function Kh(e) {
          return e && e.length ? zr(e, pn, to) : o;
        }
        function Yh(e, n) {
          return e && e.length ? zr(e, oe(n, 2), to) : o;
        }
        function Zh(e) {
          return Va(e, pn);
        }
        function Jh(e, n) {
          return Va(e, oe(n, 2));
        }
        function Xh(e) {
          return e && e.length ? zr(e, pn, ao) : o;
        }
        function Qh(e, n) {
          return e && e.length ? zr(e, oe(n, 2), ao) : o;
        }
        var jh = Jr(function(e, n) {
          return e * n;
        }, 1), e_ = mo("round"), n_ = Jr(function(e, n) {
          return e - n;
        }, 0);
        function t_(e) {
          return e && e.length ? qi(e, pn) : 0;
        }
        function r_(e, n) {
          return e && e.length ? qi(e, oe(n, 2)) : 0;
        }
        return a.after = Cg, a.ary = ll, a.assign = fv, a.assignIn = kl, a.assignInWith = ui, a.assignWith = pv, a.at = gv, a.before = ul, a.bind = Eo, a.bindAll = bh, a.bindKey = dl, a.castArray = Vg, a.chain = ol, a.chunk = Hf, a.compact = Kf, a.concat = Yf, a.cond = yh, a.conforms = wh, a.constant = Vo, a.countBy = tg, a.create = vv, a.curry = cl, a.curryRight = fl, a.debounce = pl, a.defaults = hv, a.defaultsDeep = _v, a.defer = Ag, a.delay = Ig, a.difference = Zf, a.differenceBy = Jf, a.differenceWith = Xf, a.drop = Qf, a.dropRight = jf, a.dropRightWhile = ep, a.dropWhile = np, a.fill = tp, a.filter = ig, a.flatMap = sg, a.flatMapDeep = lg, a.flatMapDepth = ug, a.flatten = nl, a.flattenDeep = rp, a.flattenDepth = ip, a.flip = $g, a.flow = xh, a.flowRight = Sh, a.fromPairs = op, a.functions = Sv, a.functionsIn = Cv, a.groupBy = dg, a.initial = sp, a.intersection = lp, a.intersectionBy = up, a.intersectionWith = dp, a.invert = Iv, a.invertBy = $v, a.invokeMap = fg, a.iteratee = Po, a.keyBy = pg, a.keys = He, a.keysIn = fn, a.map = ri, a.mapKeys = Ev, a.mapValues = Tv, a.matches = Ch, a.matchesProperty = Ah, a.memoize = oi, a.merge = Ov, a.mergeWith = xl, a.method = Ih, a.methodOf = $h, a.mixin = Mo, a.negate = ai, a.nthArg = Eh, a.omit = Lv, a.omitBy = Bv, a.once = Rg, a.orderBy = gg, a.over = Th, a.overArgs = Eg, a.overEvery = Oh, a.overSome = Lh, a.partial = To, a.partialRight = gl, a.partition = vg, a.pick = Dv, a.pickBy = Sl, a.property = Tl, a.propertyOf = Bh, a.pull = gp, a.pullAll = rl, a.pullAllBy = vp, a.pullAllWith = hp, a.pullAt = _p, a.range = Dh, a.rangeRight = Wh, a.rearg = Tg, a.reject = mg, a.remove = mp, a.rest = Og, a.reverse = $o, a.sampleSize = yg, a.set = Vv, a.setWith = Pv, a.shuffle = wg, a.slice = bp, a.sortBy = Sg, a.sortedUniq = Ap, a.sortedUniqBy = Ip, a.split = sh, a.spread = Lg, a.tail = $p, a.take = Rp, a.takeRight = Ep, a.takeRightWhile = Tp, a.takeWhile = Op, a.tap = Kp, a.throttle = Bg, a.thru = ti, a.toArray = bl, a.toPairs = Cl, a.toPairsIn = Al, a.toPath = Nh, a.toPlainObject = wl, a.transform = Mv, a.unary = Dg, a.union = Lp, a.unionBy = Bp, a.unionWith = Dp, a.uniq = Wp, a.uniqBy = Vp, a.uniqWith = Pp, a.unset = Uv, a.unzip = Ro, a.unzipWith = il, a.update = Nv, a.updateWith = Fv, a.values = zt, a.valuesIn = zv, a.without = Mp, a.words = Rl, a.wrap = Wg, a.xor = Up, a.xorBy = Np, a.xorWith = Fp, a.zip = zp, a.zipObject = qp, a.zipObjectDeep = Gp, a.zipWith = Hp, a.entries = Cl, a.entriesIn = Al, a.extend = kl, a.extendWith = ui, Mo(a, a), a.add = zh, a.attempt = El, a.camelCase = Kv, a.capitalize = Il, a.ceil = qh, a.clamp = qv, a.clone = Pg, a.cloneDeep = Ug, a.cloneDeepWith = Ng, a.cloneWith = Mg, a.conformsTo = Fg, a.deburr = $l, a.defaultTo = kh, a.divide = Gh, a.endsWith = Yv, a.eq = Vn, a.escape = Zv, a.escapeRegExp = Jv, a.every = rg, a.find = og, a.findIndex = js, a.findKey = mv, a.findLast = ag, a.findLastIndex = el, a.findLastKey = bv, a.floor = Hh, a.forEach = al, a.forEachRight = sl, a.forIn = yv, a.forInRight = wv, a.forOwn = kv, a.forOwnRight = xv, a.get = Bo, a.gt = zg, a.gte = qg, a.has = Av, a.hasIn = Do, a.head = tl, a.identity = pn, a.includes = cg, a.indexOf = ap, a.inRange = Gv, a.invoke = Rv, a.isArguments = At, a.isArray = ge, a.isArrayBuffer = Gg, a.isArrayLike = cn, a.isArrayLikeObject = Ne, a.isBoolean = Hg, a.isBuffer = vt, a.isDate = Kg, a.isElement = Yg, a.isEmpty = Zg, a.isEqual = Jg, a.isEqualWith = Xg, a.isError = Oo, a.isFinite = Qg, a.isFunction = tt, a.isInteger = vl, a.isLength = si, a.isMap = hl, a.isMatch = jg, a.isMatchWith = ev, a.isNaN = nv, a.isNative = tv, a.isNil = iv, a.isNull = rv, a.isNumber = _l, a.isObject = Me, a.isObjectLike = Ue, a.isPlainObject = gr, a.isRegExp = Lo, a.isSafeInteger = ov, a.isSet = ml, a.isString = li, a.isSymbol = bn, a.isTypedArray = Ft, a.isUndefined = av, a.isWeakMap = sv, a.isWeakSet = lv, a.join = cp, a.kebabCase = Xv, a.last = Rn, a.lastIndexOf = fp, a.lowerCase = Qv, a.lowerFirst = jv, a.lt = uv, a.lte = dv, a.max = Kh, a.maxBy = Yh, a.mean = Zh, a.meanBy = Jh, a.min = Xh, a.minBy = Qh, a.stubArray = No, a.stubFalse = Fo, a.stubObject = Vh, a.stubString = Ph, a.stubTrue = Mh, a.multiply = jh, a.nth = pp, a.noConflict = Rh, a.noop = Uo, a.now = ii, a.pad = eh, a.padEnd = nh, a.padStart = th, a.parseInt = rh, a.random = Hv, a.reduce = hg, a.reduceRight = _g, a.repeat = ih, a.replace = oh, a.result = Wv, a.round = e_, a.runInContext = p, a.sample = bg, a.size = kg, a.snakeCase = ah, a.some = xg, a.sortedIndex = yp, a.sortedIndexBy = wp, a.sortedIndexOf = kp, a.sortedLastIndex = xp, a.sortedLastIndexBy = Sp, a.sortedLastIndexOf = Cp, a.startCase = lh, a.startsWith = uh, a.subtract = n_, a.sum = t_, a.sumBy = r_, a.template = dh, a.times = Uh, a.toFinite = rt, a.toInteger = he, a.toLength = yl, a.toLower = ch, a.toNumber = En, a.toSafeInteger = cv, a.toString = Re, a.toUpper = fh, a.trim = ph, a.trimEnd = gh, a.trimStart = vh, a.truncate = hh, a.unescape = _h, a.uniqueId = Fh, a.upperCase = mh, a.upperFirst = Wo, a.each = al, a.eachRight = sl, a.first = tl, Mo(a, (function() {
          var e = {};
          return zn(a, function(n, t) {
            Te.call(a.prototype, t) || (e[t] = n);
          }), e;
        })(), { chain: !1 }), a.VERSION = w, Sn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          a[e].placeholder = a;
        }), Sn(["drop", "take"], function(e, n) {
          ke.prototype[e] = function(t) {
            t = t === o ? 1 : qe(he(t), 0);
            var r = this.__filtered__ && !n ? new ke(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = nn(t, r.__takeCount__) : r.__views__.push({
              size: nn(t, un),
              type: e + (r.__dir__ < 0 ? "Right" : "")
            }), r;
          }, ke.prototype[e + "Right"] = function(t) {
            return this.reverse()[e](t).reverse();
          };
        }), Sn(["filter", "map", "takeWhile"], function(e, n) {
          var t = n + 1, r = t == ye || t == N;
          ke.prototype[e] = function(i) {
            var s = this.clone();
            return s.__iteratees__.push({
              iteratee: oe(i, 3),
              type: t
            }), s.__filtered__ = s.__filtered__ || r, s;
          };
        }), Sn(["head", "last"], function(e, n) {
          var t = "take" + (n ? "Right" : "");
          ke.prototype[e] = function() {
            return this[t](1).value()[0];
          };
        }), Sn(["initial", "tail"], function(e, n) {
          var t = "drop" + (n ? "" : "Right");
          ke.prototype[e] = function() {
            return this.__filtered__ ? new ke(this) : this[t](1);
          };
        }), ke.prototype.compact = function() {
          return this.filter(pn);
        }, ke.prototype.find = function(e) {
          return this.filter(e).head();
        }, ke.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, ke.prototype.invokeMap = me(function(e, n) {
          return typeof e == "function" ? new ke(this) : this.map(function(t) {
            return lr(t, e, n);
          });
        }), ke.prototype.reject = function(e) {
          return this.filter(ai(oe(e)));
        }, ke.prototype.slice = function(e, n) {
          e = he(e);
          var t = this;
          return t.__filtered__ && (e > 0 || n < 0) ? new ke(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== o && (n = he(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
        }, ke.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, ke.prototype.toArray = function() {
          return this.take(un);
        }, zn(ke.prototype, function(e, n) {
          var t = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), i = a[r ? "take" + (n == "last" ? "Right" : "") : n], s = r || /^find/.test(n);
          i && (a.prototype[n] = function() {
            var l = this.__wrapped__, d = r ? [1] : arguments, v = l instanceof ke, O = d[0], L = v || ge(l), W = function(we) {
              var Se = i.apply(a, lt([we], d));
              return r && K ? Se[0] : Se;
            };
            L && t && typeof O == "function" && O.length != 1 && (v = L = !1);
            var K = this.__chain__, Q = !!this.__actions__.length, se = s && !K, _e = v && !Q;
            if (!s && L) {
              l = _e ? l : new ke(this);
              var le = e.apply(l, d);
              return le.__actions__.push({ func: ti, args: [W], thisArg: o }), new An(le, K);
            }
            return se && _e ? e.apply(this, d) : (le = this.thru(W), se ? r ? le.value()[0] : le.value() : le);
          });
        }), Sn(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var n = $r[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
          a.prototype[e] = function() {
            var i = arguments;
            if (r && !this.__chain__) {
              var s = this.value();
              return n.apply(ge(s) ? s : [], i);
            }
            return this[t](function(l) {
              return n.apply(ge(l) ? l : [], i);
            });
          };
        }), zn(ke.prototype, function(e, n) {
          var t = a[n];
          if (t) {
            var r = t.name + "";
            Te.call(Vt, r) || (Vt[r] = []), Vt[r].push({ name: n, func: t });
          }
        }), Vt[Zr(o, R).name] = [{
          name: "wrapper",
          func: o
        }], ke.prototype.clone = hc, ke.prototype.reverse = _c, ke.prototype.value = mc, a.prototype.at = Yp, a.prototype.chain = Zp, a.prototype.commit = Jp, a.prototype.next = Xp, a.prototype.plant = jp, a.prototype.reverse = eg, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = ng, a.prototype.first = a.prototype.head, nr && (a.prototype[nr] = Qp), a;
      }), Bt = Zd();
      mt ? ((mt.exports = Bt)._ = Bt, Vi._ = Bt) : Ke._ = Bt;
    }).call(N0);
  })(hr, hr.exports)), hr.exports;
}
var z0 = F0();
const q0 = { class: "editor" }, G0 = { class: "editor__fields" }, H0 = { class: "editor__actions" }, K0 = {
  key: 1,
  class: "editor__preview"
}, Y0 = /* @__PURE__ */ Qe({
  __name: "DatasourceEditor",
  props: {
    itemId: {},
    view: { default: "settings" }
  },
  emits: ["close"],
  setup(g, { emit: h }) {
    const o = g, w = j({}), b = xe(ta), I = xe(at), c = Tn(I, ($) => $.connections), T = Tn(I, ($) => $.datasources), C = ee(() => b.registeredDatasources);
    Kn(() => {
      const $ = b.getDatasourceModel(o.itemId);
      w.value = $ ? {
        uid: $.uid,
        name: $.name,
        type: $.type,
        config: z0.cloneDeep($.config ?? {})
      } : {};
    });
    const f = () => {
      const $ = b.getDatasourceModel(o.itemId);
      $ && ($.name = w.value.name, $.type = w.value.type, $.config = w.value.config, $.connection = c.value.find(
        (q) => q.uid === w.value.config?.connection
      ), b.saveDatasource($)), te("close");
    }, k = ee(() => {
      const $ = b.getDatasourceIdentifiers(w.value.type);
      return $ ? b.resolveIdentifier($.Preview) : null;
    }), G = ee(() => {
      const $ = b.getDatasourceIdentifiers(w.value.type);
      return $ ? b.resolveIdentifier($.Settings) : null;
    }), H = ($) => {
      w.value.config = $;
    }, te = h;
    return ($, q) => (_(), A("div", q0, [
      g.view === "settings" ? (_(), A(Ce, { key: 0 }, [
        u("div", G0, [
          B(m(gn), {
            modelValue: w.value.uid,
            "onUpdate:modelValue": q[0] || (q[0] = (V) => w.value.uid = V),
            label: "UID",
            readonly: ""
          }, null, 8, ["modelValue"]),
          B(m(gn), {
            modelValue: w.value.name,
            "onUpdate:modelValue": q[1] || (q[1] = (V) => w.value.name = V),
            label: "Name"
          }, null, 8, ["modelValue"]),
          B(m(Un), {
            modelValue: w.value.type,
            "onUpdate:modelValue": q[2] || (q[2] = (V) => w.value.type = V),
            label: "Typ",
            options: C.value
          }, null, 8, ["modelValue", "options"]),
          (_(), Be(Yn(G.value), {
            config: w.value.config,
            connections: m(c),
            dataSources: m(T)
          }, null, 8, ["config", "connections", "dataSources"]))
        ]),
        u("div", H0, [
          B(m(be), {
            intent: "quiet",
            onClick: q[3] || (q[3] = (V) => $.$emit("close"))
          }, {
            default: ne(() => [...q[4] || (q[4] = [
              ae("Schließen", -1)
            ])]),
            _: 1
          }),
          B(m(be), {
            intent: "primary",
            onClick: f
          }, {
            default: ne(() => [...q[5] || (q[5] = [
              ae("Speichern", -1)
            ])]),
            _: 1
          })
        ])
      ], 64)) : (_(), A("div", K0, [
        (_(), Be(Yn(k.value), {
          "data-source": w.value,
          key: w.value.uid,
          onUpdateConfig: H
        }, null, 40, ["data-source"]))
      ]))
    ]));
  }
}), Z0 = /* @__PURE__ */ je(Y0, [["__scopeId", "data-v-b30445c3"]]), J0 = { class: "editor" }, X0 = { class: "editor__fields" }, Q0 = { class: "editor__actions" }, j0 = /* @__PURE__ */ Qe({
  __name: "ConnectionEditor",
  props: {
    itemId: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(g, { emit: h }) {
    const o = g, w = h, b = j({}), I = xe(na), c = ee(() => I.registeredConnections);
    Kn(() => {
      const f = I.getConnectionModel(o.itemId);
      b.value = f ? {
        uid: f.uid,
        name: f.name,
        type: f.type,
        config: JSON.parse(JSON.stringify(f.config ?? {}))
      } : {};
    });
    const T = ee(() => {
      const f = I.getConnectionIdentifiers(b.value.type);
      return f ? I.resolveIdentifier(f.Settings) : null;
    }), C = () => {
      const f = I.getConnectionModel(o.itemId);
      f && (f.name = b.value.name, f.type = b.value.type, f.config = b.value.config, I.saveConnection(f)), w("close");
    };
    return (f, k) => (_(), A("div", J0, [
      u("div", X0, [
        B(m(gn), {
          modelValue: b.value.uid,
          "onUpdate:modelValue": k[0] || (k[0] = (G) => b.value.uid = G),
          label: "UID",
          readonly: ""
        }, null, 8, ["modelValue"]),
        B(m(gn), {
          modelValue: b.value.name,
          "onUpdate:modelValue": k[1] || (k[1] = (G) => b.value.name = G),
          label: "Name"
        }, null, 8, ["modelValue"]),
        B(m(Un), {
          modelValue: b.value.type,
          "onUpdate:modelValue": k[2] || (k[2] = (G) => b.value.type = G),
          label: "Typ",
          options: c.value
        }, null, 8, ["modelValue", "options"]),
        (_(), Be(Yn(T.value), {
          config: b.value.config
        }, null, 8, ["config"]))
      ]),
      u("div", Q0, [
        B(m(be), {
          intent: "quiet",
          onClick: k[3] || (k[3] = (G) => f.$emit("close"))
        }, {
          default: ne(() => [...k[4] || (k[4] = [
            ae("Schließen", -1)
          ])]),
          _: 1
        }),
        B(m(be), {
          intent: "primary",
          onClick: C
        }, {
          default: ne(() => [...k[5] || (k[5] = [
            ae("Speichern", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), eb = /* @__PURE__ */ je(j0, [["__scopeId", "data-v-c18a8ecf"]]), nb = { class: "data-page" }, tb = { class: "data-page__tree" }, rb = { class: "data-page__detail" }, ib = {
  key: 0,
  class: "data-page__nothing"
}, ob = { class: "detail__head" }, ab = { class: "detail__what" }, sb = { class: "detail__name" }, lb = {
  key: 0,
  class: "detail__sub"
}, ub = {
  key: 0,
  class: "detail__usage"
}, db = { class: "detail__body" }, cb = /* @__PURE__ */ Qe({
  __name: "ConnectionsAndData",
  setup(g) {
    const h = xe(at), o = Tn(h, ($) => $.connections), w = Tn(h, ($) => $.datasources), { usageOf: b, usageLabel: I } = yu(), c = j(void 0), T = j("preview"), C = xe("endpointfinder", null), f = () => C?.(), k = Yl(() => {
      const $ = c.value;
      if ($)
        return $.type === "Connection" ? o.value.find((q) => q.uid === $.itemId) : w.value.find((q) => q.uid === $.itemId);
    }), G = ee(() => {
      const $ = k.value;
      return $ ? c.value?.type === "Connection" ? $.type ?? "" : [$.type, $.connection?.name].filter(Boolean).join(" · ") : "";
    }), H = ee(() => c.value?.type !== "DataSource" || !c.value.itemId ? "" : I(b(c.value.itemId))), te = ee(
      () => c.value?.type === "DataSource" ? [
        { id: "preview", label: "Vorschau" },
        { id: "settings", label: "Einstellungen" }
      ] : [{ id: "settings", label: "Einstellungen" }]
    );
    return Nn(c, ($) => {
      T.value = $?.type === "DataSource" ? "preview" : "settings";
    }), ($, q) => (_(), A("div", nb, [
      u("aside", tb, [
        B(U0, {
          modelValue: c.value,
          "onUpdate:modelValue": q[0] || (q[0] = (V) => c.value = V),
          onFindEndpoints: f
        }, null, 8, ["modelValue"])
      ]),
      u("section", rb, [
        c.value ? (_(), A(Ce, { key: 1 }, [
          u("header", ob, [
            u("div", ab, [
              u("h1", sb, z(m(k)?.name ?? c.value.itemId), 1),
              G.value ? (_(), A("span", lb, z(G.value), 1)) : re("", !0)
            ]),
            H.value ? (_(), A("span", ub, "Verwendet in " + z(H.value), 1)) : re("", !0)
          ]),
          B(m(x_), {
            modelValue: T.value,
            "onUpdate:modelValue": q[1] || (q[1] = (V) => T.value = V),
            tabs: te.value,
            label: "Ansicht der Auswahl"
          }, null, 8, ["modelValue", "tabs"]),
          u("div", db, [
            c.value.type === "Connection" ? (_(), Be(eb, {
              key: c.value.itemId,
              "item-id": c.value.itemId,
              onClose: q[2] || (q[2] = (V) => c.value = void 0)
            }, null, 8, ["item-id"])) : (_(), Be(Z0, {
              key: `${c.value.itemId}-${T.value}`,
              "item-id": c.value.itemId,
              view: T.value === "preview" ? "preview" : "settings",
              onClose: q[3] || (q[3] = (V) => c.value = void 0)
            }, null, 8, ["item-id", "view"]))
          ])
        ], 64)) : (_(), A("p", ib, " Wähle links eine Verbindung oder eine Datenquelle. "))
      ])
    ]));
  }
}), fb = /* @__PURE__ */ je(cb, [["__scopeId", "data-v-91f5d575"]]), pb = { class: "add_widget_window" }, gb = { class: "add_widget_window__scroll" }, vb = { class: "widgets_grid-icon" }, hb = ["src"], _b = { class: "widgets_grid-name" }, mb = /* @__PURE__ */ Qe({
  __name: "AddWidgetWindow",
  setup(g) {
    const h = j(""), o = j(""), w = Tn(xe(at), (f) => f.datasources), b = (f) => {
      const k = document.createElement("div");
      document.body.appendChild(k), f.dataTransfer?.setDragImage(k, 0, 0), setTimeout(() => {
        document.body.removeChild(k);
      }, 0);
    }, I = xe(nu);
    console.log(I.getAllWidgets());
    const c = Object.entries(I.getAllWidgets()).map(([f, k]) => ({ type: f, name: k.name, icon: k.icon })), T = ee(() => c);
    ee(() => [
      "None",
      ...w.value.map((f) => f.type).filter((f, k, G) => k === G.indexOf(f))
    ]);
    const C = ee(() => w.value.filter((f) => f.type === o.value).map((f) => ({ uid: f.uid })));
    return Nn(o, (f) => {
      !f || f === "None" ? h.value = "" : C.value.map((G) => G.uid).includes(h.value) || (h.value = "");
    }), (f, k) => (_(), A("div", pb, [
      u("div", gb, [
        B(m(F_), {
          class: "widgets_grid",
          list: T.value,
          group: { name: "widgets", pull: "clone", put: !1 },
          itemKey: "type"
        }, {
          item: ne(({ element: G }) => [
            u("div", {
              class: "widgets_grid-item",
              draggable: "true",
              onDragstart: k[0] || (k[0] = (H) => b(H))
            }, [
              u("span", vb, [
                u("img", {
                  src: G.icon,
                  alt: ""
                }, null, 8, hb)
              ]),
              u("span", _b, z(G.name), 1)
            ], 32)
          ]),
          _: 1
        }, 8, ["list"])
      ])
    ]));
  }
}), bb = /* @__PURE__ */ je(mb, [["__scopeId", "data-v-3ac9fb06"]]), yb = {
  class: "overlay",
  role: "dialog",
  "aria-modal": "true",
  "aria-label": "Widget-Einstellungen"
}, wb = { class: "stage" }, kb = { class: "stage__head" }, xb = { class: "stage__name" }, Sb = { class: "stage__uid" }, Cb = {
  class: "seg",
  role: "group",
  "aria-label": "Vorschaugröße"
}, Ab = { class: "stage__bar" }, Ib = { class: "stage__body" }, $b = {
  class: "tabs",
  role: "tablist",
  "aria-label": "Einstellungen"
}, Rb = ["aria-selected"], Eb = { class: "tab__n" }, Tb = ["aria-selected"], Ob = ["aria-selected", "onClick"], Lb = ["aria-selected"], Bb = ["aria-selected"], Db = { class: "tab__n" }, Wb = ["aria-selected"], Vb = { class: "tab__n" }, Pb = {
  key: 0,
  class: "fields"
}, Mb = {
  key: 0,
  class: "bound"
}, Ub = { class: "bound__name" }, Nb = { class: "bound__var" }, Fb = {
  key: 1,
  class: "note"
}, zb = { class: "foot" }, qb = ":scope > [data-section], :scope > .va-collapse", Gb = /* @__PURE__ */ Qe({
  __name: "WidgetSettingsOverlay",
  props: /* @__PURE__ */ hi({
    boardSize: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ hi(["close"], ["update:modelValue"]),
  setup(g, { emit: h }) {
    const o = h, w = jo(g, "modelValue"), b = g, I = Tn(xe(at), (y) => y.datasources), T = xe(nu).getAllWidgets();
    xe("i18n");
    const C = j("look"), f = ee(() => {
      const y = w.value?.type;
      return y ? T[y]?.settingsForm : void 0;
    }), k = ee(
      () => !!(w.value?.type && T[w.value.type]?.settingsComponent)
    ), G = ee(() => !!f.value && k.value), H = ee(() => !!f.value || k.value);
    Nn(H, (y) => {
      !y && C.value === "look" && (C.value = "data");
    }, { immediate: !0 });
    const te = j(), $ = j([]), q = j(0);
    function V(y) {
      return y ? [...y.querySelectorAll(qb)] : [];
    }
    function R() {
      return V(te.value);
    }
    function D(y) {
      const x = y.dataset.section;
      if (x) return x;
      const Y = y.querySelector(".va-collapse__header-wrapper");
      return Y ? [...Y.querySelectorAll("*")].filter((Ae) => !Ae.classList.contains("va-icon") && Ae.children.length === 0).map((Ae) => (Ae.textContent ?? "").trim()).filter((Ae) => Ae && !/^(expand_more|expand_less|add_circle)$/.test(Ae))[0] ?? "" : "";
    }
    function Z(y) {
      return y.className.includes("--expanded");
    }
    function ue(y) {
      q.value = y, R().forEach((x, Y) => {
        const Oe = Y === y;
        if (x.classList.contains("va-collapse")) {
          const Ae = x.querySelector(".va-collapse__header-wrapper");
          Ae && (Ae.style.display = "none"), Oe !== Z(x) && Ae?.click();
        }
        x.style.display = Oe ? "" : "none";
      });
    }
    async function P() {
      await gi();
      const y = R();
      $.value = y.map((x, Y) => ({ label: D(x) || `Abschnitt ${Y + 1}`, index: Y })), y.length && ue(Math.min(q.value, y.length - 1));
    }
    function X(y) {
      C.value = "look", ue(y);
    }
    const ve = j();
    async function Ve() {
      const y = f.value?.unmodelledSections, x = ve.value;
      if (!(!y || !x)) {
        await gi();
        for (const Y of V(x))
          Y.style.display = y.includes(D(Y)) ? "" : "none";
      }
    }
    Nn(C, (y) => {
      y === "rest" && Ve();
    });
    let ie = {
      wrapperConfig: {},
      config: {}
    };
    function ce(y) {
      return w.value?.[y];
    }
    function de(y) {
      if (y)
        return typeof y.toArray == "function" ? y.toArray() : Array.isArray(y) ? [...y] : void 0;
    }
    function $e() {
      ie = { wrapperConfig: {}, config: {} };
      for (const y of ["wrapperConfig", "config"]) {
        const x = ce(y);
        if (x)
          for (const [Y, Oe] of Object.entries(x)) {
            const Ae = de(Oe), kn = !!Oe && typeof Oe == "object" && "value" in Oe;
            ie[y][Y] = {
              field: Oe,
              hasValue: kn,
              value: kn ? Oe.value : void 0,
              list: Ae
            };
          }
      }
    }
    function en() {
      for (const y of ["wrapperConfig", "config"]) {
        const x = ce(y);
        if (x)
          for (const [Y, Oe] of Object.entries(ie[y]))
            try {
              if (Oe.list) {
                const vn = x[Y];
                if (vn && typeof vn.clear == "function") {
                  vn.clear();
                  for (const Ln of Oe.list) vn.add(Ln);
                } else Array.isArray(vn) && vn.splice(0, vn.length, ...Oe.list);
                continue;
              }
              const Ae = x[Y], kn = !!Ae && typeof Ae == "object" && "value" in Ae;
              Oe.hasValue && kn ? Ae.value = Oe.value : x[Y] = Oe.field;
            } catch {
            }
      }
    }
    function ye() {
      en(), o("close");
    }
    function F() {
      o("close");
    }
    const N = j(!1), M = ee(() => N.value || !b.boardSize ? { width: "100%", height: "100%" } : {
      width: `${b.boardSize.width}px`,
      height: `${b.boardSize.height}px`,
      maxWidth: "100%",
      maxHeight: "100%"
    }), pe = ee(
      () => b.boardSize ? `${Math.round(b.boardSize.width)} × ${Math.round(b.boardSize.height)} px, wie im Board` : "Größe des Boards nicht bekannt"
    ), sn = j(un());
    let ln = !1;
    function un() {
      const y = Number(localStorage.getItem("daanse.board.widgetSettingsWidth"));
      return Number.isFinite(y) && y >= 320 ? y : 400;
    }
    function ht(y) {
      ln = !0, y.target.setPointerCapture?.(y.pointerId);
    }
    function $t(y) {
      if (!ln) return;
      const x = window.innerWidth - y.clientX;
      sn.value = Math.min(Math.max(x, 320), Math.max(window.innerWidth - 360, 360));
    }
    function _t() {
      if (ln) {
        ln = !1;
        try {
          localStorage.setItem("daanse.board.widgetSettingsWidth", String(Math.round(sn.value)));
        } catch {
        }
      }
    }
    function On(y) {
      sn.value = Math.min(Math.max(sn.value + y, 320), window.innerWidth - 360), _t();
    }
    const Fn = ee(() => {
      const y = [], x = [
        ["Rahmen", w.value?.wrapperConfig],
        ["Darstellung", w.value?.config]
      ];
      for (const [Y, Oe] of x)
        for (const [Ae, kn] of Object.entries(Oe ?? {})) {
          const vn = kn?.variable;
          vn && y.push({ group: Y, name: Ae, variable: String(vn?.name ?? vn) });
        }
      return y;
    }), Zt = ee(() => Object.keys(w.value?.wrapperConfig ?? {}).length), Zn = ee(() => w.value?.config?.datasourceId ? 1 : 0);
    function U(y) {
      y.key === "Escape" && ye();
    }
    return Nn(C, (y) => {
      y === "look" && P();
    }), Kn(() => {
      $e(), P(), window.addEventListener("keydown", U), window.addEventListener("pointermove", $t), window.addEventListener("pointerup", _t);
    }), Qo(() => {
      window.removeEventListener("keydown", U), window.removeEventListener("pointermove", $t), window.removeEventListener("pointerup", _t);
    }), (y, x) => (_(), Be(Gl, { to: "body" }, [
      u("div", {
        class: "scrim",
        onClick: x[14] || (x[14] = Mn((Y) => ye(), ["self"]))
      }, [
        u("section", yb, [
          u("div", wb, [
            u("header", kb, [
              u("span", xb, z(w.value?.type ?? "Widget"), 1),
              u("code", Sb, z(w.value?.uid), 1),
              x[15] || (x[15] = u("span", { class: "stage__spacer" }, null, -1)),
              u("div", Cb, [
                u("button", {
                  type: "button",
                  class: Ee({ on: !N.value }),
                  onClick: x[0] || (x[0] = (Y) => N.value = !1)
                }, "Boardgröße", 2),
                u("button", {
                  type: "button",
                  class: Ee({ on: N.value }),
                  onClick: x[1] || (x[1] = (Y) => N.value = !0)
                }, "Füllen", 2)
              ])
            ]),
            u("div", Ab, z(N.value ? "Auf die Fläche gestreckt" : pe.value), 1),
            u("div", Ib, [
              u("div", {
                class: "preview",
                style: Yt(M.value)
              }, [
                d_(y.$slots, "preview", {}, void 0, !0)
              ], 4)
            ])
          ]),
          u("div", {
            class: "handle",
            role: "separator",
            "aria-orientation": "vertical",
            "aria-label": "Breite der Einstellungen",
            tabindex: "0",
            onPointerdown: Mn(ht, ["prevent"]),
            onKeydown: [
              x[2] || (x[2] = vi(Mn((Y) => On(16), ["prevent"]), ["left"])),
              x[3] || (x[3] = vi(Mn((Y) => On(-16), ["prevent"]), ["right"]))
            ]
          }, null, 32),
          u("div", {
            class: "side",
            style: Yt({ width: sn.value + "px" })
          }, [
            u("nav", $b, [
              u("button", {
                type: "button",
                role: "tab",
                "aria-selected": C.value === "data",
                class: Ee(["tab", { on: C.value === "data" }]),
                onClick: x[4] || (x[4] = (Y) => C.value = "data")
              }, [
                x[16] || (x[16] = ae(" Daten ", -1)),
                u("span", Eb, z(Zn.value), 1)
              ], 10, Rb),
              !$.value.length && H.value ? (_(), A("button", {
                key: 0,
                type: "button",
                role: "tab",
                "aria-selected": C.value === "look",
                class: Ee(["tab", { on: C.value === "look" }]),
                onClick: x[5] || (x[5] = (Y) => C.value = "look")
              }, " Darstellung ", 10, Tb)) : re("", !0),
              (_(!0), A(Ce, null, Ge($.value, (Y) => (_(), A("button", {
                key: Y.index,
                type: "button",
                role: "tab",
                "aria-selected": C.value === "look" && q.value === Y.index,
                class: Ee(["tab", { on: C.value === "look" && q.value === Y.index }]),
                onClick: (Oe) => X(Y.index)
              }, z(Y.label), 11, Ob))), 128)),
              G.value ? (_(), A("button", {
                key: 1,
                type: "button",
                role: "tab",
                "aria-selected": C.value === "rest",
                class: Ee(["tab", { on: C.value === "rest" }]),
                onClick: x[6] || (x[6] = (Y) => C.value = "rest")
              }, " Weiteres ", 10, Lb)) : re("", !0),
              u("button", {
                type: "button",
                role: "tab",
                "aria-selected": C.value === "frame",
                class: Ee(["tab", { on: C.value === "frame" }]),
                onClick: x[7] || (x[7] = (Y) => C.value = "frame")
              }, [
                x[17] || (x[17] = ae(" Rahmen ", -1)),
                u("span", Db, z(Zt.value), 1)
              ], 10, Bb),
              u("button", {
                type: "button",
                role: "tab",
                "aria-selected": C.value === "variables",
                class: Ee(["tab", { on: C.value === "variables" }]),
                onClick: x[8] || (x[8] = (Y) => C.value = "variables")
              }, [
                x[18] || (x[18] = ae(" Variablen ", -1)),
                u("span", Vb, z(Fn.value.length), 1)
              ], 10, Wb)
            ]),
            w.value ? (_(), A("div", Pb, [
              C.value === "data" ? (_(), A(Ce, { key: 0 }, [
                B(m(Un), {
                  modelValue: w.value.config.datasourceId,
                  "onUpdate:modelValue": x[9] || (x[9] = (Y) => w.value.config.datasourceId = Y),
                  label: "Datenquelle",
                  class: "pick",
                  options: m(I),
                  clearable: ""
                }, null, 8, ["modelValue", "options"]),
                x[19] || (x[19] = u("p", { class: "note" }, " Woher dieses Widget seine Werte nimmt. Ohne Datenquelle zeigt es nur, was fest eingestellt ist. ", -1))
              ], 64)) : re("", !0),
              Kt(u("div", {
                ref_key: "lookHost",
                ref: te
              }, [
                f.value ? (_(), Be(m(_i), {
                  key: 0,
                  modelValue: w.value.config,
                  "onUpdate:modelValue": x[10] || (x[10] = (Y) => w.value.config = Y),
                  create: f.value.create,
                  "ui-model-xmi": f.value.xmi,
                  "domain-package": f.value.ePackage(),
                  "ui-model-uri": f.value.uri,
                  "entry-forms": f.value.entryForms
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : (_(), Be(Yn(m(T)[w.value.type ?? ""]?.settingsComponent), {
                  modelValue: w.value.config,
                  "onUpdate:modelValue": x[11] || (x[11] = (Y) => w.value.config = Y),
                  key: w.value.uid,
                  dataSources: m(I)
                }, null, 8, ["modelValue", "dataSources"]))
              ], 512), [
                [zo, C.value === "look"]
              ]),
              Kt(u("div", {
                ref_key: "restHost",
                ref: ve
              }, [
                x[20] || (x[20] = u("p", { class: "rest__note" }, " Einstellungen, die dieses Widget selbst mitbringt und die sich nicht als Feld beschreiben lassen. ", -1)),
                G.value ? (_(), Be(Yn(m(T)[w.value.type ?? ""]?.settingsComponent), {
                  modelValue: w.value.config,
                  "onUpdate:modelValue": x[12] || (x[12] = (Y) => w.value.config = Y),
                  key: w.value.uid + "-rest",
                  dataSources: m(I)
                }, null, 8, ["modelValue", "dataSources"])) : re("", !0)
              ], 512), [
                [zo, C.value === "rest"]
              ]),
              Kt(u("div", null, [
                B(m(_i), {
                  modelValue: w.value.wrapperConfig,
                  "onUpdate:modelValue": x[13] || (x[13] = (Y) => w.value.wrapperConfig = Y),
                  create: () => new (m(G_))(),
                  "ui-model-xmi": m(q_),
                  "domain-package": m(z_).eINSTANCE,
                  "ui-model-uri": "/wrapper-settings.ui.xmi"
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package"])
              ], 512), [
                [zo, C.value === "frame"]
              ]),
              C.value === "variables" ? (_(), A(Ce, { key: 1 }, [
                Fn.value.length ? (_(), A("table", Mb, [
                  x[21] || (x[21] = u("thead", null, [
                    u("tr", null, [
                      u("th", null, "Feld"),
                      u("th", null, "Bereich"),
                      u("th", null, "Variable")
                    ])
                  ], -1)),
                  u("tbody", null, [
                    (_(!0), A(Ce, null, Ge(Fn.value, (Y) => (_(), A("tr", {
                      key: Y.group + Y.name
                    }, [
                      u("td", Ub, z(Y.name), 1),
                      u("td", null, z(Y.group), 1),
                      u("td", Nb, z(Y.variable), 1)
                    ]))), 128))
                  ])
                ])) : (_(), A("p", Fb, [...x[22] || (x[22] = [
                  ae(" Kein Feld dieses Widgets hängt an einer Variablen. Über das ", -1),
                  u("span", { class: "var-mark" }, "{x}", -1),
                  ae(" neben einem Feld lässt sich eines binden. ", -1)
                ])]))
              ], 64)) : re("", !0)
            ])) : re("", !0),
            u("footer", zb, [
              x[25] || (x[25] = u("span", { class: "foot__hint" }, "Änderungen greifen erst mit „Fertig“", -1)),
              x[26] || (x[26] = u("span", { class: "stage__spacer" }, null, -1)),
              B(m(be), {
                size: "sm",
                onClick: ye
              }, {
                default: ne(() => [...x[23] || (x[23] = [
                  ae("Verwerfen", -1)
                ])]),
                _: 1
              }),
              B(m(be), {
                intent: "primary",
                size: "sm",
                onClick: F
              }, {
                default: ne(() => [...x[24] || (x[24] = [
                  ae("Fertig", -1)
                ])]),
                _: 1
              })
            ])
          ], 4)
        ])
      ])
    ]));
  }
}), Hb = /* @__PURE__ */ je(Gb, [["__scopeId", "data-v-67bd2420"]]), Kb = {
  class: "page-settings",
  "aria-label": "Seite einrichten"
}, Yb = { class: "head" }, Zb = { class: "body" }, Jb = {
  key: 0,
  class: "missing"
}, Xb = { class: "group" }, Qb = { class: "group" }, jb = { class: "group" }, ey = { class: "group" }, ny = { class: "ident" }, ty = { class: "foot" }, ry = /* @__PURE__ */ Qe({
  __name: "PageSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ hi(["close"], ["update:modelValue"]),
  setup(g, { emit: h }) {
    const o = jo(g, "modelValue"), w = h, b = xe(yr), I = xe(yi), c = j(null), T = ee(() => I?.getAllLayouts() ?? []), C = ee(
      () => T.value.find(
        (V) => V.id === "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      ) ?? T.value[0]
    ), f = ee({
      get: () => c.value?.layoutId ?? "",
      set: (V) => {
        c.value && (c.value.layoutId = V);
      }
    }), k = ee(
      () => c.value?.layoutId ? I?.getLayout(c.value.layoutId) : void 0
    ), G = [
      { uid: "auto", name: "Auto" },
      { uid: "cover", name: "Füllend" },
      { uid: "contain", name: "Einpassend" }
    ], H = [
      { uid: "no-repeat", name: "Nicht wiederholen" },
      { uid: "repeat", name: "Wiederholen" },
      { uid: "repeat-x", name: "Waagerecht wiederholen" },
      { uid: "repeat-y", name: "Senkrecht wiederholen" }
    ], te = [
      { uid: "center", name: "Mitte" },
      { uid: "top", name: "Oben" },
      { uid: "bottom", name: "Unten" },
      { uid: "left", name: "Links" },
      { uid: "right", name: "Rechts" },
      { uid: "top left", name: "Oben links" },
      { uid: "top right", name: "Oben rechts" },
      { uid: "bottom left", name: "Unten links" },
      { uid: "bottom right", name: "Unten rechts" }
    ], $ = ee(() => !!c.value?.backgroundImage?.trim());
    function q() {
      if (!o.value || !b) {
        c.value = null;
        return;
      }
      let V;
      try {
        V = b.getPage(o.value);
      } catch {
        V = void 0;
      }
      c.value = V ? {
        id: V.id,
        name: V.name,
        description: V.description,
        icon: V.icon,
        visibleInNavigation: V.visibleInNavigation ?? !0,
        layoutId: V.layoutId ?? C.value?.id,
        layoutSettings: V.layoutSettings,
        backgroundColor: V.backgroundColor,
        backgroundImage: V.backgroundImage,
        backgroundSize: V.backgroundSize,
        backgroundPosition: V.backgroundPosition,
        backgroundRepeat: V.backgroundRepeat
      } : null;
    }
    return Kn(q), Nn(o, q), Nn(
      c,
      () => {
        c.value && b?.updatePage(c.value);
      },
      { deep: !0 }
    ), (V, R) => (_(), A("aside", Kb, [
      u("header", Yb, [
        R[14] || (R[14] = u("h2", { class: "head__title" }, "Seite einrichten", -1)),
        u("button", {
          type: "button",
          class: "head__close",
          "aria-label": "Schließen",
          onClick: R[0] || (R[0] = (D) => w("close"))
        }, " × ")
      ]),
      u("div", Zb, [
        c.value ? (_(), A(Ce, { key: 1 }, [
          u("section", Xb, [
            R[15] || (R[15] = u("h3", { class: "group__label" }, "Seite", -1)),
            B(m(gn), {
              modelValue: c.value.name,
              "onUpdate:modelValue": R[1] || (R[1] = (D) => c.value.name = D),
              label: "Name"
            }, null, 8, ["modelValue"]),
            B(m(gn), {
              modelValue: c.value.description,
              "onUpdate:modelValue": R[2] || (R[2] = (D) => c.value.description = D),
              label: "Beschreibung"
            }, null, 8, ["modelValue"]),
            B(m(gn), {
              modelValue: c.value.icon,
              "onUpdate:modelValue": R[3] || (R[3] = (D) => c.value.icon = D),
              label: "Symbol",
              placeholder: "Name eines Material-Icons"
            }, null, 8, ["modelValue"])
          ]),
          u("section", Qb, [
            R[16] || (R[16] = u("h3", { class: "group__label" }, "Layout", -1)),
            B(m(Un), {
              modelValue: f.value,
              "onUpdate:modelValue": R[4] || (R[4] = (D) => f.value = D),
              label: "Layout",
              options: T.value,
              "value-key": "id",
              "label-key": "name"
            }, null, 8, ["modelValue", "options"]),
            k.value?.settingsForm ? (_(), Be(m(_i), {
              key: 0,
              modelValue: c.value.layoutSettings,
              "onUpdate:modelValue": R[5] || (R[5] = (D) => c.value.layoutSettings = D),
              create: k.value.settingsForm.create,
              "ui-model-xmi": k.value.settingsForm.xmi,
              "domain-package": k.value.settingsForm.ePackage(),
              "ui-model-uri": k.value.settingsForm.uri,
              "entry-forms": k.value.settingsForm.entryForms
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : k.value?.settings ? (_(), Be(Yn(k.value.settings), {
              key: 1,
              modelValue: c.value.layoutSettings,
              "onUpdate:modelValue": R[6] || (R[6] = (D) => c.value.layoutSettings = D)
            }, null, 8, ["modelValue"])) : re("", !0)
          ]),
          u("section", jb, [
            R[17] || (R[17] = u("h3", { class: "group__label" }, "Hintergrund", -1)),
            B(m(Zl), {
              modelValue: c.value.backgroundColor,
              "onUpdate:modelValue": R[7] || (R[7] = (D) => c.value.backgroundColor = D),
              label: "Farbe",
              stacked: ""
            }, null, 8, ["modelValue"]),
            B(m(gn), {
              modelValue: c.value.backgroundImage,
              "onUpdate:modelValue": R[8] || (R[8] = (D) => c.value.backgroundImage = D),
              label: "Bild",
              placeholder: "Adresse eines Bildes"
            }, null, 8, ["modelValue"]),
            $.value ? (_(), A(Ce, { key: 0 }, [
              B(m(Un), {
                modelValue: c.value.backgroundSize,
                "onUpdate:modelValue": R[9] || (R[9] = (D) => c.value.backgroundSize = D),
                label: "Größe",
                options: G
              }, null, 8, ["modelValue"]),
              B(m(Un), {
                modelValue: c.value.backgroundRepeat,
                "onUpdate:modelValue": R[10] || (R[10] = (D) => c.value.backgroundRepeat = D),
                label: "Wiederholung",
                options: H
              }, null, 8, ["modelValue"]),
              B(m(Un), {
                modelValue: c.value.backgroundPosition,
                "onUpdate:modelValue": R[11] || (R[11] = (D) => c.value.backgroundPosition = D),
                label: "Position",
                options: te
              }, null, 8, ["modelValue"])
            ], 64)) : re("", !0)
          ]),
          u("section", ey, [
            R[18] || (R[18] = u("h3", { class: "group__label" }, "Navigation", -1)),
            B(m(Jl), {
              modelValue: c.value.visibleInNavigation,
              "onUpdate:modelValue": R[12] || (R[12] = (D) => c.value.visibleInNavigation = D),
              label: "In der Navigation zeigen"
            }, null, 8, ["modelValue"])
          ]),
          u("p", ny, [
            R[19] || (R[19] = ae(" Kennung ", -1)),
            u("code", null, z(c.value.id), 1)
          ])
        ], 64)) : (_(), A("p", Jb, " Diese Seite ist nicht mehr da. Wähle oben eine andere. "))
      ]),
      u("footer", ty, [
        B(m(be), {
          intent: "primary",
          onClick: R[13] || (R[13] = (D) => w("close"))
        }, {
          default: ne(() => [...R[20] || (R[20] = [
            ae("Fertig", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), iy = /* @__PURE__ */ je(ry, [["__scopeId", "data-v-9ea0fdd8"]]), oy = {
  ref: "board",
  class: "editor"
}, ay = { class: "report-container dottet" }, sy = /* @__PURE__ */ Qe({
  __name: "EditReport",
  setup(g) {
    const h = j(""), w = br().params.pageid ?? "", b = y_(w || ""), I = b.widgets, c = j([]), T = xe("endpointfinder", null), C = () => {
      T();
    }, f = ee(() => !!T), { settingsFor: k, closeSettings: G } = iu(), H = (R) => {
      h.value = R;
    }, te = ee(() => {
      const R = I.value.find((D) => D.uid === h.value);
      return R || c.value.find((D) => D.uid === h.value);
    }), $ = ee(() => {
      const R = b.layout.value.find((D) => D.id === h.value);
      if (!(!R?.width || !R?.height))
        return { width: R.width, height: R.height };
    }), { visible: q, hide: V } = ou();
    return (R, D) => (_(), A("div", oy, [
      m(q) ? (_(), Be(m(S_), {
        key: 0,
        title: "Widgets",
        "remember-as": "daanse.board.palette",
        initial: { x: 0, y: 0, w: 240, h: 460, dock: "left" },
        "min-width": 180,
        "max-width": 420,
        "min-height": 200,
        dockable: "",
        onClose: m(V)
      }, {
        actions: ne(() => [
          f.value ? (_(), A("button", {
            key: 0,
            type: "button",
            class: "palette__act",
            title: "Endpunkte suchen",
            onPointerdown: D[0] || (D[0] = Mn(() => {
            }, ["stop"])),
            onClick: D[1] || (D[1] = (Z) => C())
          }, [
            B(m(Xe), {
              name: "travel_explore",
              size: "sm"
            })
          ], 32)) : re("", !0)
        ]),
        default: ne(() => [
          B(bb)
        ]),
        _: 1
      }, 8, ["onClose"])) : re("", !0),
      u("div", ay, [
        B(hu, {
          pageId: m(w),
          onOpenWidgetSettings: H
        }, null, 8, ["pageId"]),
        B(c_, { duration: 150 }, {
          default: ne(() => [
            m(k) ? (_(), Be(iy, {
              key: 0,
              modelValue: m(k),
              "onUpdate:modelValue": D[2] || (D[2] = (Z) => f_(k) ? k.value = Z : null),
              onClose: m(G)
            }, null, 8, ["modelValue", "onClose"])) : re("", !0)
          ]),
          _: 1
        })
      ]),
      h.value && te.value ? (_(), Be(Hb, {
        key: 1,
        modelValue: te.value,
        "onUpdate:modelValue": D[3] || (D[3] = (Z) => te.value = Z),
        "board-size": $.value,
        onClose: D[4] || (D[4] = (Z) => h.value = "")
      }, {
        preview: ne(() => [
          B(m(H_), {
            widget: te.value,
            "edit-enabled": !1
          }, null, 8, ["widget"])
        ]),
        _: 1
      }, 8, ["modelValue", "board-size"])) : re("", !0)
    ], 512));
  }
}), zl = /* @__PURE__ */ je(sy, [["__scopeId", "data-v-bd444b0c"]]), Gt = R_({
  history: E_("/"),
  routes: [
    // Static core routes (routes will be added dynamically via router.addRoute in main.ts)
    {
      path: "/",
      name: "home",
      component: Nl
    },
    {
      path: "/edit",
      name: "edit",
      component: zl
    },
    /*
     * The screen the mockups call "Verbindungen & Daten". The old path
     * carried a board id it never read - the page is about the workspace,
     * not about one board - so /datasources is the name, and the old one
     * still lands here for links that are already out there.
     */
    {
      path: "/datasources",
      name: "data",
      component: fb
    },
    {
      path: "/:id/data",
      redirect: { name: "data" }
    },
    {
      path: "/page/:pageid/edit",
      name: "pageEdit",
      component: zl
    },
    {
      path: "/page/:pageid",
      name: "page",
      component: Nl
    }
  ]
}), ly = { class: "variables" }, uy = { class: "variables__head" }, dy = { class: "reach__title" }, cy = { class: "reach__lead" }, fy = {
  key: 0,
  class: "rows"
}, py = { class: "row__name" }, gy = { class: "row__type" }, vy = { class: "row__value" }, hy = { class: "row__tools" }, _y = {
  key: 1,
  class: "reach__empty"
}, my = { class: "form" }, by = { class: "confirm__text" }, yy = /* @__PURE__ */ Qe({
  __name: "Configuration",
  setup(g) {
    const h = xe(eu), o = xe(at), w = xe(Symbol.for(ql)), b = Tn(o, (ye) => ye.variables), I = Tn(o, (ye) => ye.pages), c = j(0), T = () => c.value += 1;
    Kn(() => w?.on(Wl.VariableUpdated, T)), Qo(() => w?.off(Wl.VariableUpdated, T));
    function C(ye) {
      c.value;
      try {
        const N = h.getVariableById(ye.uid)?.value;
        return N == null ? "" : typeof N == "object" ? JSON.stringify(N) : String(N);
      } catch {
        return "nur auf seiner Seite lesbar";
      }
    }
    const f = ee(() => {
      const ye = b.value.filter((M) => (M.scope ?? "global") === "global"), F = I.value.map((M) => ({
        title: M.name,
        lead: "Nur auf diesem Board",
        page: M,
        rows: b.value.filter((pe) => pe.scope === "page" && pe.page === M)
      })).filter((M) => M.rows.length > 0), N = b.value.filter((M) => M.scope === "page" && !M.page);
      return [
        { title: "Überall", lead: "Auf jedem Board lesbar", page: void 0, rows: ye },
        ...F,
        ...N.length ? [{ title: "Ohne Board", lead: "Das Board dazu gibt es nicht mehr", page: void 0, rows: N }] : []
      ];
    }), k = j([]);
    Kn(() => k.value = h.getRegisteredVariableTypes());
    const G = ee(() => [
      { text: "Überall", value: "" },
      ...I.value.map((ye) => ({ text: ye.name, value: ye.id }))
    ]), H = [
      { text: "Von außen beschreibbar", value: "external-writable" },
      { text: "Nur auf seiner Seite", value: "page-only" },
      { text: "Nur lesbar", value: "readonly" }
    ], te = j(!1), $ = j(null), q = j(""), V = j(""), R = j(""), D = j("external-writable"), Z = j({}), ue = ee(() => $.value !== null), P = ee(
      () => q.value ? h.getVariableIdentifiers(q.value)?.settingsForm : void 0
    ), X = ee(
      () => q.value ? h.getVariableIdentifiers(q.value)?.Settings : null
    );
    function ve() {
      $.value = null, q.value = k.value[0] ?? "", V.value = "", R.value = "Variable " + Math.random().toString(36).substring(7), D.value = "external-writable", Z.value = {}, te.value = !0;
    }
    function Ve(ye) {
      $.value = ye.uid, q.value = ye.type ?? "", V.value = ye.page?.id ?? "", R.value = ye.name, D.value = ye.accessMode ?? "external-writable";
      const F = h.getVariableById(ye.uid), { name: N, ...M } = {
        ...ye.definition ?? {},
        ...F?.serialize?.() ?? {}
      };
      Z.value = M, te.value = !0;
    }
    function ie(ye) {
      if (!K_(ye)) return { ...ye ?? {} };
      const F = {};
      for (const N of ye.eClass().getEAllStructuralFeatures()) {
        const M = ye.eGet(N);
        M !== void 0 && (F[N.getName()] = M);
      }
      return F;
    }
    function ce() {
      Z.value = {};
    }
    function de() {
      h.registerVariable(R.value, q.value, {
        ...ie(Z.value),
        uid: $.value ?? void 0,
        accessMode: D.value,
        scope: V.value ? "page" : "global",
        pageId: V.value || void 0
      }), te.value = !1, $.value = null;
    }
    const $e = j(null);
    function en() {
      $e.value && h.removeVariable($e.value.uid), $e.value = null;
    }
    return (ye, F) => (_(), A("div", ly, [
      u("header", uy, [
        F[11] || (F[11] = u("div", null, [
          u("h1", { class: "variables__title" }, "Variablen"),
          u("p", { class: "variables__lead" }, " Ein benannter Wert, den Widgets und Datenquellen lesen. Manche gelten überall, manche nur auf einem Board. ")
        ], -1)),
        B(m(be), {
          intent: "primary",
          onClick: ve
        }, {
          default: ne(() => [
            B(m(Xe), {
              name: "add",
              size: "sm"
            }),
            F[10] || (F[10] = ae("Variable anlegen ", -1))
          ]),
          _: 1
        })
      ]),
      (_(!0), A(Ce, null, Ge(f.value, (N) => (_(), A("section", {
        key: N.title,
        class: "reach"
      }, [
        u("h2", dy, [
          ae(z(N.title), 1),
          u("span", cy, z(N.lead), 1)
        ]),
        N.rows.length ? (_(), A("ul", fy, [
          (_(!0), A(Ce, null, Ge(N.rows, (M) => (_(), A("li", {
            key: M.uid,
            class: "row"
          }, [
            u("span", py, z(M.name), 1),
            u("span", gy, z(M.type), 1),
            u("span", vy, z(C(M)), 1),
            u("span", hy, [
              B(m(be), {
                intent: "quiet",
                size: "sm",
                title: "Variable bearbeiten",
                onClick: (pe) => Ve(M)
              }, {
                default: ne(() => [
                  B(m(Xe), {
                    name: "edit",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"]),
              B(m(be), {
                intent: "quiet",
                size: "sm",
                title: "Variable löschen",
                onClick: (pe) => $e.value = M
              }, {
                default: ne(() => [
                  B(m(Xe), {
                    name: "delete",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]))), 128))
        ])) : (_(), A("p", _y, "Noch keine."))
      ]))), 128)),
      B(m(Ko), {
        modelValue: te.value,
        "onUpdate:modelValue": F[7] || (F[7] = (N) => te.value = N),
        title: ue.value ? "Variable bearbeiten" : "Variable anlegen",
        size: "md"
      }, {
        actions: ne(() => [
          B(m(be), {
            intent: "quiet",
            onClick: F[6] || (F[6] = (N) => te.value = !1)
          }, {
            default: ne(() => [...F[12] || (F[12] = [
              ae("Abbrechen", -1)
            ])]),
            _: 1
          }),
          B(m(be), {
            intent: "primary",
            onClick: de
          }, {
            default: ne(() => [
              ae(z(ue.value ? "Speichern" : "Anlegen"), 1)
            ]),
            _: 1
          })
        ]),
        default: ne(() => [
          u("div", my, [
            B(m(Un), {
              modelValue: q.value,
              "onUpdate:modelValue": [
                F[0] || (F[0] = (N) => q.value = N),
                ce
              ],
              label: "Typ",
              options: k.value
            }, null, 8, ["modelValue", "options"]),
            B(m(Un), {
              modelValue: V.value,
              "onUpdate:modelValue": F[1] || (F[1] = (N) => V.value = N),
              label: "Gilt",
              options: G.value,
              "label-key": "text",
              "value-key": "value"
            }, null, 8, ["modelValue", "options"]),
            B(m(Un), {
              modelValue: D.value,
              "onUpdate:modelValue": F[2] || (F[2] = (N) => D.value = N),
              label: "Beschreibbar",
              options: H,
              "label-key": "text",
              "value-key": "value"
            }, null, 8, ["modelValue"]),
            B(m(gn), {
              modelValue: R.value,
              "onUpdate:modelValue": F[3] || (F[3] = (N) => R.value = N),
              label: "Name"
            }, null, 8, ["modelValue"]),
            P.value ? (_(), Be(m(_i), {
              key: q.value,
              modelValue: Z.value,
              "onUpdate:modelValue": F[4] || (F[4] = (N) => Z.value = N),
              create: P.value.create,
              "ui-model-xmi": P.value.xmi,
              "domain-package": P.value.ePackage(),
              "ui-model-uri": P.value.uri
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri"])) : X.value ? (_(), Be(Yn(X.value), {
              key: 1,
              modelValue: Z.value,
              "onUpdate:modelValue": F[5] || (F[5] = (N) => Z.value = N)
            }, null, 8, ["modelValue"])) : re("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]),
      B(m(Ko), {
        "model-value": !!$e.value,
        size: "sm",
        "onUpdate:modelValue": F[9] || (F[9] = (N) => $e.value = null)
      }, {
        header: ne(() => [
          B(m(Xe), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          F[13] || (F[13] = u("h2", { class: "confirm__title" }, "Variable löschen", -1))
        ]),
        actions: ne(() => [
          B(m(be), {
            intent: "quiet",
            onClick: F[8] || (F[8] = (N) => $e.value = null)
          }, {
            default: ne(() => [...F[14] || (F[14] = [
              ae("Abbrechen", -1)
            ])]),
            _: 1
          }),
          B(m(be), {
            intent: "danger",
            onClick: en
          }, {
            default: ne(() => [...F[15] || (F[15] = [
              ae("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: ne(() => [
          u("p", by, z($e.value?.name) + " wird entfernt. Widgets, die darauf zeigen, finden sie danach nicht mehr. ", 1)
        ]),
        _: 1
      }, 8, ["model-value"])
    ]));
  }
}), wy = /* @__PURE__ */ je(yy, [["__scopeId", "data-v-9292252d"]]), ky = { class: "appearance" }, xy = { class: "panel" }, Sy = { class: "panel__head" }, Cy = { class: "panel__tools" }, Ay = {
  key: 0,
  class: "changed"
}, Iy = {
  key: 0,
  class: "gallery"
}, $y = { class: "demo" }, Ry = { class: "demo__row" }, Ey = { class: "demo__row" }, Ty = { class: "demo" }, Oy = { class: "demo__form" }, Ly = { class: "demo" }, By = { class: "demo__row" }, Dy = { class: "demo__row" }, Wy = {
  key: 1,
  class: "body"
}, Vy = {
  class: "themes",
  "aria-label": "Themen"
}, Py = ["onClick"], My = {
  class: "theme__strip",
  "aria-hidden": "true"
}, Uy = { class: "theme__name" }, Ny = { class: "theme__note" }, Fy = { class: "tokens" }, zy = ["aria-expanded", "onClick"], qy = { class: "group__twist" }, Gy = { class: "group__label" }, Hy = { class: "group__count" }, Ky = {
  key: 0,
  class: "group__body"
}, Yy = {
  key: 0,
  class: "group__note"
}, Zy = {
  key: 1,
  class: "token__swatch token__swatch--none",
  "aria-hidden": "true"
}, Jy = { class: "token__text" }, Xy = { class: "token__name" }, Qy = { class: "token__role" }, jy = ["value", "aria-label", "onInput"], ew = ["value", "aria-label", "onChange"], nw = ["disabled", "title", "onClick"], tw = /* @__PURE__ */ Qe({
  __name: "Appearance",
  setup(g) {
    const {
      themes: h,
      activeTheme: o,
      overrides: w,
      valueOf: b,
      isOverridden: I,
      selectTheme: c,
      setToken: T,
      clearToken: C,
      clearAllTokens: f,
      exportTheme: k
    } = pu(), G = j(mi[0].id), H = j(!1), te = j("tokens"), $ = j({
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
    ], V = ee(() => Object.keys(w.value).length);
    function R(ue) {
      return [
        ue.tokens["color-bg"],
        ue.tokens["color-pane"],
        ue.tokens["color-accent"],
        ue.tokens["color-brand"],
        ue.tokens["color-ok"]
      ].filter(Boolean);
    }
    function D(ue) {
      return ue.kind === "color";
    }
    async function Z() {
      try {
        await navigator.clipboard.writeText(JSON.stringify(k(), null, 2)), H.value = !0, setTimeout(() => H.value = !1, 2e3);
      } catch {
        H.value = !1;
      }
    }
    return (ue, P) => (_(), A("div", ky, [
      u("div", xy, [
        u("header", Sy, [
          u("button", {
            type: "button",
            class: Ee(["head__tab", { on: te.value === "tokens" }]),
            onClick: P[0] || (P[0] = (X) => te.value = "tokens")
          }, " Tokens ", 2),
          u("button", {
            type: "button",
            class: Ee(["head__tab", { on: te.value === "controls" }]),
            onClick: P[1] || (P[1] = (X) => te.value = "controls")
          }, " Elemente ", 2),
          u("span", Cy, [
            V.value ? (_(), A("span", Ay, z(V.value) + " " + z(V.value === 1 ? "Wert geändert" : "Werte geändert"), 1)) : re("", !0),
            V.value ? (_(), A("button", {
              key: 1,
              class: "btn",
              type: "button",
              onClick: P[2] || (P[2] = //@ts-ignore
              (...X) => m(f) && m(f)(...X))
            }, " Alle zurücksetzen ")) : re("", !0),
            u("button", {
              class: "btn",
              type: "button",
              onClick: Z
            }, z(H.value ? "Kopiert" : "Als JSON kopieren"), 1)
          ])
        ]),
        te.value === "controls" ? (_(), A("div", Iy, [
          P[31] || (P[31] = u("p", { class: "gallery__lead" }, " Dieselben Elemente, aus denen die App gebaut ist. Was drüben an Tokens geändert wird, steht hier sofort. ", -1)),
          u("section", $y, [
            P[22] || (P[22] = u("h3", { class: "demo__title" }, "Knöpfe", -1)),
            u("div", Ry, [
              B(m(be), null, {
                default: ne(() => [...P[13] || (P[13] = [
                  ae("Standard", -1)
                ])]),
                _: 1
              }),
              B(m(be), { intent: "primary" }, {
                default: ne(() => [...P[14] || (P[14] = [
                  ae("Speichern", -1)
                ])]),
                _: 1
              }),
              B(m(be), { intent: "quiet" }, {
                default: ne(() => [...P[15] || (P[15] = [
                  ae("Abbrechen", -1)
                ])]),
                _: 1
              }),
              B(m(be), { intent: "danger" }, {
                default: ne(() => [...P[16] || (P[16] = [
                  ae("Löschen", -1)
                ])]),
                _: 1
              }),
              B(m(be), { disabled: "" }, {
                default: ne(() => [...P[17] || (P[17] = [
                  ae("Gesperrt", -1)
                ])]),
                _: 1
              }),
              B(m(be), { busy: "" }, {
                default: ne(() => [...P[18] || (P[18] = [
                  ae("Lädt", -1)
                ])]),
                _: 1
              })
            ]),
            u("div", Ey, [
              B(m(be), { size: "sm" }, {
                default: ne(() => [...P[19] || (P[19] = [
                  ae("Klein", -1)
                ])]),
                _: 1
              }),
              B(m(be), { size: "md" }, {
                default: ne(() => [...P[20] || (P[20] = [
                  ae("Mittel", -1)
                ])]),
                _: 1
              }),
              B(m(be), { size: "lg" }, {
                default: ne(() => [...P[21] || (P[21] = [
                  ae("Groß", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          u("section", Ty, [
            P[23] || (P[23] = u("h3", { class: "demo__title" }, "Eingaben", -1)),
            u("div", Oy, [
              B(m(gn), {
                modelValue: $.value.text,
                "onUpdate:modelValue": P[3] || (P[3] = (X) => $.value.text = X),
                label: "Titel"
              }, null, 8, ["modelValue"]),
              B(m(gn), {
                modelValue: $.value.number,
                "onUpdate:modelValue": P[4] || (P[4] = (X) => $.value.number = X),
                label: "Messwert",
                type: "number",
                suffix: "%"
              }, null, 8, ["modelValue"]),
              B(m(Un), {
                modelValue: $.value.choice,
                "onUpdate:modelValue": P[5] || (P[5] = (X) => $.value.choice = X),
                label: "Datenquelle",
                options: q
              }, null, 8, ["modelValue"]),
              B(m(Zl), {
                modelValue: $.value.colour,
                "onUpdate:modelValue": P[6] || (P[6] = (X) => $.value.colour = X),
                label: "Farbe"
              }, null, 8, ["modelValue"]),
              B(m(C_), {
                modelValue: $.value.when,
                "onUpdate:modelValue": P[7] || (P[7] = (X) => $.value.when = X),
                label: "Stichtag"
              }, null, 8, ["modelValue"]),
              B(m(A_), {
                modelValue: $.value.amount,
                "onUpdate:modelValue": P[8] || (P[8] = (X) => $.value.amount = X),
                label: "Deckung",
                suffix: "%"
              }, null, 8, ["modelValue"]),
              B(m(gn), {
                modelValue: $.value.note,
                "onUpdate:modelValue": P[9] || (P[9] = (X) => $.value.note = X),
                label: "Notiz",
                rows: 2,
                stacked: ""
              }, null, 8, ["modelValue"]),
              B(m(gn), {
                modelValue: $.value.text,
                "onUpdate:modelValue": P[10] || (P[10] = (X) => $.value.text = X),
                label: "Mit Fehler",
                error: "Der Name ist schon vergeben."
              }, null, 8, ["modelValue"])
            ])
          ]),
          u("section", Ly, [
            P[30] || (P[30] = u("h3", { class: "demo__title" }, "Schalter und Marken", -1)),
            u("div", By, [
              B(m(I_), {
                modelValue: $.value.checked,
                "onUpdate:modelValue": P[11] || (P[11] = (X) => $.value.checked = X),
                label: "Im Board zeigen"
              }, null, 8, ["modelValue"]),
              B(m(Jl), {
                modelValue: $.value.on,
                "onUpdate:modelValue": P[12] || (P[12] = (X) => $.value.on = X),
                label: "Automatisch aktualisieren"
              }, null, 8, ["modelValue"])
            ]),
            u("div", Dy, [
              B(m(qt), null, {
                default: ne(() => [...P[24] || (P[24] = [
                  ae("neutral", -1)
                ])]),
                _: 1
              }),
              B(m(qt), { tone: "accent" }, {
                default: ne(() => [...P[25] || (P[25] = [
                  ae("geladen", -1)
                ])]),
                _: 1
              }),
              B(m(qt), { tone: "ok" }, {
                default: ne(() => [...P[26] || (P[26] = [
                  ae("im Rahmen", -1)
                ])]),
                _: 1
              }),
              B(m(qt), { tone: "warn" }, {
                default: ne(() => [...P[27] || (P[27] = [
                  ae("prüfen", -1)
                ])]),
                _: 1
              }),
              B(m(qt), { tone: "err" }, {
                default: ne(() => [...P[28] || (P[28] = [
                  ae("getrennt", -1)
                ])]),
                _: 1
              }),
              B(m(qt), {
                tone: "accent",
                numeric: ""
              }, {
                default: ne(() => [...P[29] || (P[29] = [
                  ae("14", -1)
                ])]),
                _: 1
              })
            ]),
            B(m($_), { label: "Trenner" })
          ])
        ])) : (_(), A("div", Wy, [
          u("aside", Vy, [
            (_(!0), A(Ce, null, Ge(m(h), (X) => (_(), A("button", {
              key: X.id,
              type: "button",
              class: Ee(["theme", { on: X.id === m(o).id }]),
              onClick: (ve) => m(c)(X.id)
            }, [
              u("span", My, [
                (_(!0), A(Ce, null, Ge(R(X), (ve, Ve) => (_(), A("i", {
                  key: Ve,
                  style: Yt({ background: ve })
                }, null, 4))), 128))
              ]),
              u("span", Uy, z(X.name), 1),
              u("span", Ny, z(X.note), 1)
            ], 10, Py))), 128))
          ]),
          u("section", Fy, [
            (_(!0), A(Ce, null, Ge(m(mi), (X) => (_(), A("div", {
              key: X.id,
              class: "group"
            }, [
              u("button", {
                type: "button",
                class: "group__head",
                "aria-expanded": G.value === X.id,
                onClick: (ve) => G.value = G.value === X.id ? "" : X.id
              }, [
                u("span", qy, z(G.value === X.id ? "▾" : "▸"), 1),
                u("span", Gy, z(X.label), 1),
                u("span", Hy, z(X.tokens.length), 1)
              ], 8, zy),
              G.value === X.id ? (_(), A("div", Ky, [
                X.note ? (_(), A("p", Yy, z(X.note), 1)) : re("", !0),
                (_(!0), A(Ce, null, Ge(X.tokens, (ve) => (_(), A("div", {
                  key: ve.name,
                  class: "token"
                }, [
                  D(ve) ? (_(), A("span", {
                    key: 0,
                    class: "token__swatch",
                    style: Yt({ background: m(b)(ve.name) }),
                    "aria-hidden": "true"
                  }, null, 4)) : (_(), A("span", Zy)),
                  u("span", Jy, [
                    u("code", Xy, "--" + z(ve.name), 1),
                    u("span", Qy, z(ve.role), 1)
                  ]),
                  D(ve) ? (_(), A("input", {
                    key: 2,
                    class: "token__picker",
                    type: "color",
                    value: m(b)(ve.name),
                    "aria-label": `Farbe für ${ve.name}`,
                    onInput: (Ve) => m(T)(ve.name, Ve.target.value)
                  }, null, 40, jy)) : re("", !0),
                  u("input", {
                    class: "token__value",
                    type: "text",
                    value: m(b)(ve.name),
                    "aria-label": `Wert für ${ve.name}`,
                    onChange: (Ve) => m(T)(ve.name, Ve.target.value)
                  }, null, 40, ew),
                  u("button", {
                    class: "token__reset",
                    type: "button",
                    disabled: !m(I)(ve.name),
                    title: m(I)(ve.name) ? "Auf den Wert des Themas zurücksetzen" : "Unverändert",
                    onClick: (Ve) => m(C)(ve.name)
                  }, " ↺ ", 8, nw)
                ]))), 128))
              ])) : re("", !0)
            ]))), 128))
          ])
        ]))
      ])
    ]));
  }
}), rw = /* @__PURE__ */ je(tw, [["__scopeId", "data-v-a84ca0bf"]]), It = tu.createLogger("daanse:system:actions");
class iw {
  constructor(h, o) {
    this.router = h, this.eventBus = o;
  }
  eventBus;
  async changePage(h) {
    if (!h) {
      It("⚠️ changePage called without pageId");
      return;
    }
    It("📄 Changing page to: %s", h);
    const o = new Promise((w) => {
      const b = (I) => {
        I.pageId === h && (It("📄 Received pageLoaded event for page: %s", h), this.eventBus.off("system:pageLoaded", b), w());
      };
      this.eventBus.on("system:pageLoaded", b), setTimeout(() => {
        this.eventBus.off("system:pageLoaded", b), It("⚠️ pageLoaded timeout for page: %s, continuing anyway", h), w();
      }, 5e3);
    });
    await this.router.push(`/page/${h}`), await o, It("📄 Page change complete, widgets should be registered");
  }
  async setGlobalVariable(h, o) {
    It("⚠️ setGlobalVariable should be handled by VariableRepository");
  }
}
async function ow(g, h, o) {
  await h.registerActionsFromEcoreString(
    "SystemActions",
    Y_,
    "system",
    "SystemActions.ecore"
  );
  const w = new iw(g, o);
  h.registerInstance("SystemActions", w, "SystemActions"), It("✅ System actions registered");
}
var aw = Object.defineProperty, sw = Object.getOwnPropertyDescriptor, lw = (g, h, o, w) => {
  for (var b = sw(h, o), I = g.length - 1, c; I >= 0; I--)
    (c = g[I]) && (b = c(h, o, b) || b);
  return b && aw(h, o, b), b;
};
const uw = tu.createLogger("daanse:system:actions");
class Xo {
  testAction(...h) {
    console.log("TestActions", h);
  }
}
lw([
  Z_({ eventType: "test.console" })
], Xo.prototype, "testAction");
async function dw(g) {
  g.registerWidgetType("test", Xo, "system");
  const h = new Xo();
  g.registerInstance("test", h, "system"), uw("✅ Test actions registered");
}
let Hn;
async function Dw({ services: g, log: h }) {
  Rm(), im(), um(), Hn = p_(Mm);
  const o = g_();
  v_(o), Hn.use(o), Hn.use(Gt), Hn.provide("codeEditorType", "monaco");
  const w = g, b = ($) => {
    const q = g.get($);
    Hn?.provide($, q), Hn?.provide(Symbol.for($), q);
  };
  for (const $ of g.getServiceIds()) b($);
  w.addListener?.({ onServiceEvent: ($) => b($.serviceId) }), g.register(i_, Hn);
  const I = g.getRequired(M_), c = g.getRequired(U_);
  if (I.getConnections().length === 0) {
    const $ = I.createConnection("");
    $.uid = "test", $.name = "Test Connection 01", $.type = "rest", $.config = { url: "https://jsonplaceholder.typicode.com/" }, I.saveConnection($);
    const q = c.createDatasource("");
    q.uid = "test_ds", q.name = "Test DataSource 01", q.type = "rest", q.connection = $, q.config = { resourceUrl: "posts" }, c.saveDatasource(q);
  }
  g.getRequired(a_).registerWrapperType({
    type: k_,
    create: ($) => new w_($)
  });
  const T = g.getRequired(Kl), C = new Dl();
  C.path = "/configuration", C.name = "config", C.component = wy, T.registerRoute(C);
  const f = new Dl();
  f.path = "/appearance", f.name = "appearance", f.component = rw, T.registerRoute(f);
  const k = g.getRequired(Hl), G = new __();
  G.id = "config", G.label = "Environment variables", G.icon = "settings", G.route = "/configuration", G.routeName = "config", G.order = 10, G.visible = !0, k.registerNavigationItem(G);
  const H = T;
  for (const $ of H.getAllRoutesArray?.() ?? [])
    Gt.addRoute({
      path: $.path,
      name: $.name,
      component: $.component,
      ...$.meta ? { meta: $.meta } : {}
    });
  const te = window.location.pathname + window.location.search + window.location.hash;
  Gt.resolve(te).matched.length && Gt.currentRoute.value.fullPath !== te && Gt.replace(te);
  try {
    await ow(
      Gt,
      g.getRequired(Ll),
      g.getRequired(ql)
    ), h.info("system actions registered");
  } catch ($) {
    h.error("system actions failed", $);
  }
  try {
    await dw(g.getRequired(Ll)), h.info("test actions registered");
  } catch ($) {
    h.error("test actions failed", $);
  }
  Hn.mount("#app"), h.info("shell mounted");
}
function Ww({ services: g }) {
  const h = g.getRequired(Kl);
  h.unregisterRoute("config"), h.unregisterRoute("save");
  const o = g.getRequired(Hl);
  o.unregisterNavigationItem("config"), o.unregisterNavigationItem("save"), Hn?.unmount(), Hn = void 0;
}
export {
  Dw as activate,
  Ww as deactivate
};
