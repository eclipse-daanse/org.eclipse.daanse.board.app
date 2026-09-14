(function(){var i="app.shell",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="@import\"https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap\";.topbar[data-v-7fa027b5]{height:var(--spacing-topbar, 42px);flex:none;display:flex;align-items:center;gap:12px;padding:0 12px;background:var(--color-pane);border-bottom:1px solid var(--color-divider);color:var(--color-fg);font-size:var(--text-sm, 12px)}.brand[data-v-7fa027b5]{display:flex;align-items:center;gap:8px;flex:none;white-space:nowrap;font-weight:600;font-size:var(--text-base, 13px)}.brand-mark[data-v-7fa027b5]{width:20px;height:20px;border-radius:var(--radius-sm, 5px);background:var(--color-brandFill);color:var(--color-onBrand);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;flex:none}.crumb[data-v-7fa027b5]{display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden;white-space:nowrap;color:var(--color-dim)}.crumb-part[data-v-7fa027b5]{overflow:hidden;text-overflow:ellipsis}.crumb-part.current[data-v-7fa027b5]{color:var(--color-fg);font-weight:500}.crumb-link[data-v-7fa027b5]{padding:0;font:inherit;color:inherit;background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.crumb-link[data-v-7fa027b5]:hover{color:var(--color-fg);text-decoration:underline}.crumb-link[data-v-7fa027b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.crumb-sep[data-v-7fa027b5]{color:var(--color-outline)}.spacer[data-v-7fa027b5]{flex:1 1 auto;min-width:8px}.pages[data-v-7fa027b5]{position:relative;margin-left:10px;flex:none}.pages__current[data-v-7fa027b5]{display:flex;align-items:center;gap:5px;max-width:200px;height:24px;padding:0 7px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background:none;border:1px solid transparent;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__current[data-v-7fa027b5]:hover{background-color:var(--color-raised);border-color:var(--color-divider)}.pages__current[data-v-7fa027b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.pages__name[data-v-7fa027b5]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__caret[data-v-7fa027b5]{font-size:9px;color:var(--color-dim)}.pages__menu[data-v-7fa027b5]{position:absolute;top:calc(100% + 3px);left:0;z-index:400;min-width:180px;max-height:60vh;overflow-y:auto;padding:3px;margin:0;list-style:none;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 3px);box-shadow:var(--shadow-e2, 0 2px 8px rgb(0 0 0 / 14%))}.pages__item[data-v-7fa027b5]{display:block;width:100%;padding:5px 8px;font-size:var(--text-sm, 12px);font-family:inherit;text-align:left;color:var(--color-fg);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__item[data-v-7fa027b5]:hover{background-color:var(--color-raised)}.pages__line[data-v-7fa027b5]{display:flex;align-items:center;gap:2px}.pages__line .pages__item[data-v-7fa027b5]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__remove[data-v-7fa027b5]{flex:none;width:20px;height:20px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer;opacity:0;transition:opacity 90ms ease,color 90ms ease}.pages__line:hover .pages__remove[data-v-7fa027b5],.pages__remove[data-v-7fa027b5]:focus-visible{opacity:1}.pages__remove[data-v-7fa027b5]:hover{color:var(--color-err)}.pages__sep[data-v-7fa027b5]{height:1px;margin:3px 0;background-color:var(--color-divider)}.pages__add[data-v-7fa027b5],.pages__item.on[data-v-7fa027b5]{color:var(--color-accent)}.pages__empty[data-v-7fa027b5]{padding:5px 8px;font-size:var(--text-sm, 12px);color:var(--color-dim)}.action[data-v-7fa027b5]{height:24px;padding:0 10px;margin-right:8px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs, 3px);cursor:pointer}.action[data-v-7fa027b5]:hover{border-color:var(--color-outline)}.action[data-v-7fa027b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.modes[data-v-7fa027b5]{display:inline-flex;border:1px solid var(--color-outline);border-radius:var(--radius-sm, 5px);overflow:hidden;flex:none}.mode[data-v-7fa027b5]{font:inherit;padding:4px 11px;border:0;background:var(--color-raised);color:var(--color-dim);cursor:pointer;white-space:nowrap}.mode[data-v-7fa027b5]:hover{color:var(--color-fg)}.mode.on[data-v-7fa027b5]{background:var(--color-accent);color:var(--color-onAccent);font-weight:600}.mode[data-v-7fa027b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.icon-action[data-v-7fa027b5]:disabled{opacity:.4;cursor:default}.icon-action[data-v-7fa027b5]{display:grid;place-items:center;width:24px;height:24px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.icon-action[data-v-7fa027b5]:hover{color:var(--color-fg);background-color:var(--color-raised)}.icon-action.on[data-v-7fa027b5]{color:var(--color-accent);background-color:var(--color-raised)}.icon-action[data-v-7fa027b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.avatar[data-v-7fa027b5]{width:24px;height:24px;border-radius:50%;background:var(--color-raised);border:1px solid var(--color-outline);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;color:var(--color-dim);flex:none}.shell[data-v-27fec35c]{display:flex;flex-direction:column;height:100%;width:100%;min-height:0;background:var(--color-bg)}.shell-body[data-v-27fec35c]{flex:1 1 auto;display:grid;grid-template-columns:var(--spacing-rail, 52px) minmax(0,1fr);min-height:0;overflow:hidden}.shell-body--norail[data-v-27fec35c]{grid-template-columns:minmax(0,1fr)}.rail[data-v-27fec35c]{background:var(--color-pane);border-right:1px solid var(--color-divider);display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:4px;overflow:hidden}.rail-spacer[data-v-27fec35c]{flex:1 1 auto}.ri[data-v-27fec35c]{position:relative;width:36px;height:36px;flex:none;border:0;border-radius:var(--radius-md, 8px);background:transparent;color:var(--color-dim);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .14s cubic-bezier(.2,.6,.2,1),color .14s cubic-bezier(.2,.6,.2,1)}.ri[data-v-27fec35c]:hover{color:var(--color-fg);background:color-mix(in srgb,var(--color-accent) 10%,transparent)}.ri.on[data-v-27fec35c]{background:color-mix(in srgb,var(--color-accent) 14%,transparent);color:var(--color-accent)}.ri.on[data-v-27fec35c]:before{content:\"\";position:absolute;left:-8px;top:8px;bottom:8px;width:3px;border-radius:var(--radius-xs, 3px);background:var(--color-accent)}.ri[data-v-27fec35c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.ri[data-v-27fec35c] .icon{font-size:20px}.sr-only[data-v-27fec35c]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.content[data-v-27fec35c]{min-width:0;min-height:0;overflow:hidden;display:flex;flex-direction:column}@media(prefers-reduced-motion:reduce){.ri[data-v-27fec35c]{transition-duration:.01ms}}.global-loading-bar[data-v-27fec35c]{position:fixed;top:0;left:0;right:0;height:3px;z-index:8000;overflow:hidden}.global-loading-bar-progress[data-v-27fec35c]{height:100%;width:30%;background:var(--color-brandFill);animation:loading-slide-27fec35c 1.2s ease-in-out infinite}@keyframes loading-slide-27fec35c{0%{transform:translate(-100%)}to{transform:translate(400%)}}/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:\"Barlow\",system-ui,-apple-system,\"Segoe UI\",sans-serif;--font-mono:\"JetBrains Mono\",ui-monospace,SFMono-Regular,Menlo,monospace;--color-red-500:oklch(63.7% .237 25.331);--color-green-500:oklch(72.3% .219 149.579);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--text-xs:11px;--text-xs--line-height:calc(1/.75);--text-sm:12px;--text-sm--line-height:calc(1.25/.875);--text-base:13px;--text-base--line-height: 1.5 ;--text-lg:15px;--text-lg--line-height:calc(1.75/1.125);--text-xl:24px;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-xs:2px;--radius-sm:3px;--radius-md:4px;--radius-lg:6px;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-bg:#121820;--color-pane:#1a222c;--color-raised:#232d39;--color-canvas:#0e141b;--color-divider:#2a3541;--color-outline:#3c4959;--color-fg:#dfe8ef;--color-dim:#8b9bab;--color-accent:#4fa3d1;--color-onAccent:#08131c;--color-brand:#d8a13c;--color-brandFill:#d8a13c;--color-onBrand:#14100a;--color-ok:#5fb98a;--color-warn:#d8a13c;--color-err:#e2766a;--color-kw:#4fa3d1;--color-measure:#d8a13c;--color-member:#5fb98a;--color-fn:#c294d8;--color-primary:#4fa3d1;--color-secondary:#8b9bab;--color-success:#5fb98a;--color-info:#4fa3d1;--color-danger:#e2766a;--color-warning:#d8a13c;--color-backgroundPrimary:#121820;--color-backgroundSecondary:#1a222c;--color-backgroundElement:#232d39;--color-backgroundBorder:#2a3541;--color-textPrimary:#dfe8ef;--color-textInverted:#08131c;--color-daanse_blue:#4fa3d1;--color-daanse_grey:#dfe8ef;--shadow-e1:0 1px 2px #00000073;--shadow-e2:0 2px 8px #00000073;--shadow-e3:0 8px 24px #00000080;--spacing-topbar:42px;--spacing-rail:52px;--spacing-panelHeader:30px;--spacing-splitter:4px;--spacing-statusbar:24px}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{.ice_gray{padding:var(--spacing-6);background:var(--color-pane);border-right:1px solid var(--color-divider);box-shadow:var(--shadow-e1)}.ice{padding:var(--spacing-6);background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md);box-shadow:var(--shadow-e2)}.z-mx{z-index:30000}}@layer utilities{.\\@container{container-type:inline-size}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.top-\\[-25px\\]{top:-25px}.right-0{right:calc(var(--spacing)*0)}.isolate{isolation:isolate}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.row-span-1{grid-row:span 1/span 1}.row-span-4{grid-row:span 4/span 4}.float-left{float:left}.float-right{float:right}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-2{margin:calc(var(--spacing)*2)}.mx-3{margin-inline:calc(var(--spacing)*3)}.my-3{margin-block:calc(var(--spacing)*3)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-6{margin-right:calc(var(--spacing)*6)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-15{margin-left:calc(var(--spacing)*15)}.ml-auto{margin-left:auto}.box-border{box-sizing:border-box}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.table-cell{display:table-cell}.h-3{height:calc(var(--spacing)*3)}.h-40{height:calc(var(--spacing)*40)}.h-84{height:calc(var(--spacing)*84)}.h-120{height:calc(var(--spacing)*120)}.h-full{height:100%}.max-h-screen{max-height:100vh}.w-1{width:calc(var(--spacing)*1)}.w-3{width:calc(var(--spacing)*3)}.w-20{width:calc(var(--spacing)*20)}.w-full{width:100%}.max-w-xs{max-width:var(--container-xs)}.flex-1{flex:1}.flex-shrink,.shrink{flex-shrink:1}.flex-grow,.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-green-500{background-color:var(--color-green-500)}.bg-pane{background-color:var(--color-pane)}.bg-red-500{background-color:var(--color-red-500)}.bg-white{background-color:var(--color-white)}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.object-fill{object-fit:fill}.object-scale-down{object-fit:scale-down}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.pl-6{padding-left:calc(var(--spacing)*6)}.pl-18{padding-left:calc(var(--spacing)*18)}.text-center{text-align:center}.text-justify{text-align:justify}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-wrap{text-wrap:wrap}.text-black{color:var(--color-black)}.text-dim{color:var(--color-dim)}.text-gray-500{color:var(--color-gray-500)}.text-green-500{color:var(--color-green-500)}.text-red-500{color:var(--color-red-500)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.line-through{text-decoration-line:line-through}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e1{--tw-shadow:0 1px 2px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e2{--tw-shadow:0 2px 8px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e3{--tw-shadow:0 8px 24px var(--tw-shadow-color,#00000080);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}}:root[data-theme=light]{--color-bg:#eef1f4;--color-pane:#f7f9fb;--color-raised:#fff;--color-canvas:#e2e7ec;--color-divider:#d3dae1;--color-outline:#b3bec9;--color-fg:#16202a;--color-dim:#55646f;--color-accent:#1f6690;--color-onAccent:#fff;--color-brand:#8a6206;--color-brandFill:#c08a10;--color-onBrand:#14100a;--color-ok:#1f6f4a;--color-warn:#8a5a0c;--color-err:#b02a1c;--color-kw:#1f6690;--color-measure:#8a5a0c;--color-member:#1f6f4a;--color-fn:#7b3fa0;--color-primary:#1f6690;--color-secondary:#55646f;--color-success:#1f6f4a;--color-info:#1f6690;--color-danger:#b02a1c;--color-warning:#8a5a0c;--color-backgroundPrimary:#eef1f4;--color-backgroundSecondary:#f7f9fb;--color-backgroundElement:#fff;--color-backgroundBorder:#d3dae1;--color-textPrimary:#16202a;--color-textInverted:#fff;--color-daanse_blue:#1f6690;--color-daanse_grey:#16202a;--shadow-e1:0 1px 2px #16202a24;--shadow-e2:0 2px 8px #16202a24;--shadow-e3:0 8px 24px #16202a24}:root{--mdxwb-bg:var(--color-bg);--mdxwb-pane:var(--color-pane);--mdxwb-raised:var(--color-raised);--mdxwb-border:var(--color-divider);--mdxwb-outline:var(--color-outline);--mdxwb-fg:var(--color-fg);--mdxwb-dim:var(--color-dim);--mdxwb-accent:var(--color-accent);--mdxwb-on-accent:var(--color-onAccent);--mdxwb-ok:var(--color-ok);--mdxwb-warn:var(--color-warn);--mdxwb-err:var(--color-err);--mdxwb-kw:var(--color-kw);--mdxwb-measure:var(--color-measure);--mdxwb-member:var(--color-member);--mdxwb-fn:var(--color-fn)}body{font-family:var(--font-sans);font-optical-sizing:auto;font-weight:400;font-size:var(--text-base);font-variation-settings:\"wdth\" 100;background:var(--color-bg);color:var(--color-fg);font-style:normal;--moveable-color:var(--color-outline)!important}table{font-variant-numeric:tabular-nums}.rCS1w3zcxh{--moveable-color:var(--color-outline)!important}.rCS1w3zcxh .moveable-line{transform-origin:0;width:1px;height:1px;border-bottom:2px dashed var(--color-outline)!important;background:0 0!important}@keyframes spin{to{transform:rotate(360deg)}}*{scrollbar-width:thin;scrollbar-color:var(--color-outline)transparent}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background-color:var(--color-outline);background-clip:padding-box;border:3px solid #0000;border-radius:6px}::-webkit-scrollbar-thumb:hover{background-color:var(--color-dim)}::-webkit-scrollbar-corner{background:0 0}.resize-observer[data-v-b329ee4c]{z-index:-1;pointer-events:none;opacity:0;background-color:#0000;border:none;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.resize-observer[data-v-b329ee4c] object{pointer-events:none;z-index:-1;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.v-popper__popper{z-index:10000;outline:none;top:0;left:0}.v-popper__popper.v-popper__popper--hidden{visibility:hidden;opacity:0;pointer-events:none;transition:opacity .15s,visibility .15s}.v-popper__popper.v-popper__popper--shown{visibility:visible;opacity:1;transition:opacity .15s}.v-popper__popper.v-popper__popper--skip-transition,.v-popper__popper.v-popper__popper--skip-transition>.v-popper__wrapper{transition:none!important}.v-popper__backdrop{width:100%;height:100%;display:none;position:absolute;top:0;left:0}.v-popper__inner{box-sizing:border-box;position:relative;overflow-y:auto}.v-popper__inner>div{z-index:1;max-width:inherit;max-height:inherit;position:relative}.v-popper__arrow-container{width:10px;height:10px;position:absolute}.v-popper__popper--arrow-overflow .v-popper__arrow-container,.v-popper__popper--no-positioning .v-popper__arrow-container{display:none}.v-popper__arrow-inner,.v-popper__arrow-outer{border-style:solid;width:0;height:0;position:absolute;top:0;left:0}.v-popper__arrow-inner{visibility:hidden;border-width:7px}.v-popper__arrow-outer{border-width:6px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{left:-2px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{left:-1px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer{border-bottom-width:0;border-bottom-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:0}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{border-top-width:0;border-top-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{top:-4px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{top:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{top:-1px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{border-left-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-left-color:#0000!important}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{left:-4px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{left:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer{border-right-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner{left:-2px}.v-popper--theme-tooltip .v-popper__inner{color:#fff;background:#000c;border-radius:6px;padding:7px 12px 6px}.v-popper--theme-tooltip .v-popper__arrow-outer{border-color:#000c}.v-popper--theme-dropdown .v-popper__inner{color:#000;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 6px 30px #0000001a}.v-popper--theme-dropdown .v-popper__arrow-inner{visibility:visible;border-color:#fff}.v-popper--theme-dropdown .v-popper__arrow-outer{border-color:#ddd}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}.layout-renderer[data-v-965fd8c7],.layout-renderer .edit-component-wrapper[data-v-965fd8c7],.layout-renderer .view-component-wrapper[data-v-965fd8c7]{width:100%;height:100%}.layout-renderer .spinner[data-v-965fd8c7]{width:22px;height:22px;border:2px solid var(--color-divider);border-top-color:var(--color-accent);border-radius:50%;animation:layout-spin .7s linear infinite}.layout-renderer .no-layout-message[data-v-965fd8c7],.layout-renderer .loading-state[data-v-965fd8c7]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;gap:1rem}.layout-renderer .no-layout-message__text[data-v-965fd8c7]{display:flex;align-items:flex-start;gap:9px;margin:0;font-family:var(--font-sans);font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}@keyframes layout-spin{to{transform:rotate(360deg)}}.floorplan[data-v-0eecd73b]{position:relative;aspect-ratio:16 / 9;background-color:var(--color-bg);border-bottom:1px solid var(--color-divider);overflow:hidden}.floorplan__block[data-v-0eecd73b]{position:absolute;margin:2px 0 0 2px;border-radius:2px;border:1px solid color-mix(in srgb,currentColor 70%,transparent);background-color:color-mix(in srgb,currentColor 14%,transparent)}.floorplan__block--data[data-v-0eecd73b]{color:var(--color-accent)}.floorplan__block--visual[data-v-0eecd73b]{color:var(--color-brand)}.floorplan__block--text[data-v-0eecd73b]{color:var(--color-dim)}.floorplan__empty[data-v-0eecd73b]{position:absolute;inset:0;display:grid;place-items:center;font-size:var(--text-xs);color:var(--color-dim)}.storage[data-v-82d034f3]{display:grid;grid-template-columns:280px minmax(0,1fr);flex:1 1 auto;min-height:0;background-color:var(--color-pane);overflow:hidden}.tree[data-v-82d034f3]{display:flex;flex-direction:column;min-height:0;border-right:1px solid var(--color-divider)}.tree__search[data-v-82d034f3]{margin:8px;height:26px;padding:0 8px;font-size:var(--text-sm);font-family:inherit;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.tree__body[data-v-82d034f3]{flex:1 1 auto;min-height:0;padding:0 4px 8px;overflow-y:auto}.row[data-v-82d034f3]{display:flex;align-items:baseline;flex-wrap:nowrap;gap:6px;width:100%;padding:4px 6px;font-family:inherit;font-size:var(--text-base);color:var(--color-fg);text-align:left;background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.row[data-v-82d034f3]:hover{background-color:var(--color-raised)}.row.on[data-v-82d034f3]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);box-shadow:inset 2px 0 0 var(--color-accent)}.row--place[data-v-82d034f3]{font-weight:600}.row--entry[data-v-82d034f3]{padding-left:22px;font-family:var(--font-mono);font-size:var(--text-sm)}.row--hint[data-v-82d034f3]{padding-left:22px;margin:0;color:var(--color-dim);font-size:var(--text-sm);cursor:default}.row--add[data-v-82d034f3]{color:var(--color-dim);font-size:var(--text-sm)}.row__twist[data-v-82d034f3]{width:12px;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__name[data-v-82d034f3]{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__meta[data-v-82d034f3]{margin-left:auto;padding-left:8px;flex:none;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);color:var(--color-dim)}.row__dot[data-v-82d034f3]{width:5px;height:5px;flex:none;border-radius:50%;background-color:transparent}.row__dot.open[data-v-82d034f3]{background-color:var(--color-accent)}.detail[data-v-82d034f3]{display:flex;flex-direction:column;min-width:0;min-height:0;background-color:var(--color-bg);overflow-y:auto}.detail__head[data-v-82d034f3]{display:flex;align-items:center;gap:8px;padding:7px 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.detail__name[data-v-82d034f3]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.detail__facts[data-v-82d034f3]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.detail__spacer[data-v-82d034f3]{flex:1 1 auto}.detail__badge[data-v-82d034f3]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent);border-radius:var(--radius-xs)}.detail__hint[data-v-82d034f3]{display:grid;place-items:center;flex:1 1 auto;margin:0;padding:24px;font-size:var(--text-sm);color:var(--color-dim);text-align:center}.detail__failure[data-v-82d034f3]{margin:12px 12px 0;padding:8px 10px;font-size:var(--text-sm);color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 10%,transparent);border-radius:var(--radius-xs)}.boards[data-v-82d034f3]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;padding:12px}.board[data-v-82d034f3]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.board__text[data-v-82d034f3]{padding:8px 10px}.board__name[data-v-82d034f3]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__facts[data-v-82d034f3]{margin:2px 0 0;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.board__kinds[data-v-82d034f3]{margin:4px 0 0;font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.create[data-v-82d034f3]{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:16px}.create__label[data-v-82d034f3]{font-size:var(--text-sm);color:var(--color-dim)}.create__input[data-v-82d034f3]{height:26px;min-width:220px;padding:0 8px;font-size:var(--text-base);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.create__hint[data-v-82d034f3]{flex:1 0 100%;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.row[data-v-82d034f3]:focus-visible,.tree__search[data-v-82d034f3]:focus-visible,.create__input[data-v-82d034f3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards[data-v-4c11f243]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.boards__panel[data-v-4c11f243]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.boards__body[data-v-4c11f243]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background-color:var(--color-bg);overflow:auto}.boards__bar[data-v-4c11f243]{display:flex;align-items:center;gap:12px;height:var(--spacing-panelHeader);flex:none;padding:0 8px;border-bottom:1px solid var(--color-divider)}.boards__views[data-v-4c11f243]{display:flex;align-items:center;gap:2px;height:100%}.boards__view[data-v-4c11f243]{position:relative;display:flex;align-items:center;gap:6px;height:100%;padding:0 12px;font-size:var(--text-sm);font-family:inherit;font-weight:500;color:var(--color-dim);background:none;border:0;cursor:pointer}.boards__view[data-v-4c11f243]:hover{color:var(--color-fg)}.boards__view.on[data-v-4c11f243]{color:var(--color-fg);font-weight:600}.boards__view.on[data-v-4c11f243]:after{content:\"\";position:absolute;left:8px;right:8px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.boards__view[data-v-4c11f243]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__title[data-v-4c11f243]{display:flex;align-items:center;gap:8px;margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__count[data-v-4c11f243]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);font-weight:500;color:var(--color-dim);padding:1px 6px;border:1px solid var(--color-divider);border-radius:999px}.boards__tools[data-v-4c11f243]{display:flex;align-items:center;gap:8px;margin-left:auto}.boards__search[data-v-4c11f243]{height:22px;min-width:180px;padding:0 8px;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:4px}.boards__search[data-v-4c11f243]:focus-visible,.board[data-v-4c11f243]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__grid[data-v-4c11f243]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));align-content:start;gap:16px;padding:16px}.board[data-v-4c11f243]{position:relative;display:flex;flex-direction:column;padding:0;overflow:hidden;text-align:left;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);box-shadow:var(--shadow-e1);cursor:pointer;transition:border-color .12s ease,box-shadow .12s ease,transform .12s ease}.board[data-v-4c11f243]:hover{border-color:var(--color-outline);box-shadow:var(--shadow-e2);transform:translateY(-1px)}.board__body[data-v-4c11f243]{padding:12px}.board__name[data-v-4c11f243]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__meta[data-v-4c11f243]{margin:2px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.board__kinds[data-v-4c11f243]{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0 0;padding:0;list-style:none}.board__kind[data-v-4c11f243]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-dim);background-color:var(--color-canvas);border-radius:3px}.board__kind--more[data-v-4c11f243]{color:var(--color-outline)}.board__edit[data-v-4c11f243]{position:absolute;top:8px;right:8px;padding:2px 8px;font-size:var(--text-xs);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:3px;opacity:0;cursor:pointer}.board:hover .board__edit[data-v-4c11f243],.board__edit[data-v-4c11f243]:focus-visible{opacity:1}.board--new[data-v-4c11f243]{box-shadow:none;align-items:center;justify-content:center;gap:2px;min-height:180px;font-family:inherit;background-color:transparent;border-style:dashed}.board__plus[data-v-4c11f243]{font-size:20px;line-height:1;color:var(--color-outline)}.board__usage[data-v-4c11f243]{margin:3px 0 0;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.boards__nomatch[data-v-4c11f243]{grid-column:1 / -1;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.boards__empty[data-v-4c11f243]{max-width:420px;margin:10vh auto 0;padding:0 16px;text-align:center}.boards__empty-plan[data-v-4c11f243]{width:200px;margin:0 auto 16px;border:1px solid var(--color-divider);border-radius:4px}.boards__empty-title[data-v-4c11f243]{margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__empty-text[data-v-4c11f243]{margin:8px 0 16px;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.boards__empty-actions[data-v-4c11f243]{display:flex;justify-content:center;gap:8px}@media(prefers-reduced-motion:reduce){.board[data-v-4c11f243]{transition:none}.board[data-v-4c11f243]:hover{transform:none}}.dottet[data-v-3ecae506]{background:var(--color-canvas);background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-3ecae506]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed var(--color-outline);z-index:100000;pointer-events:none}.report-container[data-v-3ecae506]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative;background:var(--color-canvas, #dee1e7)}.report-container__title[data-v-3ecae506]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider, #ccd1d9)}.report-container .widgets-adding-controls[data-v-3ecae506]{display:flex;border:1px solid var(--color-divider, #ccd1d9);border-radius:8px;margin:16px}.report-container .widget-board[data-v-3ecae506]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-3ecae506]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-3ecae506]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-3ecae506]{position:absolute}.dropdown-buttons-container[data-v-3ecae506]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-3ecae506]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-3ecae506]{z-index:20000000!important}.add_widget-button[data-v-3ecae506]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-3ecae506],.v-leave-active[data-v-3ecae506]{transition:opacity .5s ease}.v-enter-from[data-v-3ecae506],.v-leave-to[data-v-3ecae506]{opacity:0}.tree[data-v-19322c5a]{display:flex;flex-direction:column;min-height:0;height:100%;border-right:1px solid var(--color-divider);background:var(--color-pane);overflow:hidden}.tree__head[data-v-19322c5a]{display:flex;align-items:center;gap:2px;flex:none;padding:7px 8px 7px 12px;border-bottom:1px solid var(--color-divider)}.tree__title[data-v-19322c5a]{flex:1 1 auto;margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--color-dim)}.tree__search[data-v-19322c5a]{flex:none;padding:8px 10px;border-bottom:1px solid var(--color-divider)}.tree__body[data-v-19322c5a]{flex:1 1 auto;min-height:0;overflow-y:auto;padding:4px 0}.tree__list[data-v-19322c5a],.tree__sources[data-v-19322c5a]{margin:0;padding:0;list-style:none}.tree__sources[data-v-19322c5a]{padding-left:18px}.row[data-v-19322c5a]{display:flex;align-items:center;gap:2px;padding-right:4px}.row[data-v-19322c5a]:hover{background:var(--color-raised)}.row--on[data-v-19322c5a],.row--on[data-v-19322c5a]:hover{background:color-mix(in srgb,var(--color-accent) 14%,transparent)}.row__twist[data-v-19322c5a]{display:flex;align-items:center;justify-content:center;width:22px;height:26px;flex:none;border:none;background:transparent;color:var(--color-dim);cursor:pointer}.row__twist--none[data-v-19322c5a]{cursor:default}.row__body[data-v-19322c5a]{display:flex;align-items:baseline;gap:8px;flex:1 1 auto;min-width:0;padding:3px 2px;border:none;background:transparent;font:inherit;text-align:left;color:var(--color-fg);cursor:pointer}.row__body[data-v-19322c5a]:disabled{cursor:default}.row__body[data-v-19322c5a]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.row__name[data-v-19322c5a]{font-family:var(--font-sans);font-size:var(--text-sm);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.row--connection .row__name[data-v-19322c5a]{font-weight:600}.row__what[data-v-19322c5a]{flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__usage[data-v-19322c5a]{flex:none;margin-left:auto;padding-left:8px;font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.tree__none[data-v-19322c5a],.tree__empty[data-v-19322c5a]{padding:6px 12px;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.confirm__title[data-v-19322c5a]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.confirm__text[data-v-19322c5a]{margin:0 0 6px;color:var(--color-dim);line-height:1.5}.confirm__text--warn[data-v-19322c5a]{color:var(--color-err)}.editor[data-v-b30445c3]{display:flex;flex-direction:column;gap:12px;height:100%;min-height:0}.editor__fields[data-v-b30445c3]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-b30445c3]{display:flex;justify-content:flex-end;gap:7px}.editor__preview[data-v-b30445c3]{flex:1 1 auto;min-height:0;display:flex;overflow:auto}.editor[data-v-c18a8ecf]{display:flex;flex-direction:column;gap:12px}.editor__fields[data-v-c18a8ecf]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-c18a8ecf]{display:flex;justify-content:flex-end;gap:7px}.data-page[data-v-91f5d575]{display:flex;height:100%;min-height:0}.data-page__tree[data-v-91f5d575]{flex:none;width:320px;min-height:0}.data-page__detail[data-v-91f5d575]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background:var(--color-pane);overflow:hidden}.data-page__nothing[data-v-91f5d575]{margin:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.detail__head[data-v-91f5d575]{display:flex;align-items:baseline;gap:12px;flex:none;padding:12px 16px 8px}.detail__what[data-v-91f5d575]{display:flex;align-items:baseline;gap:10px;min-width:0}.detail__name[data-v-91f5d575]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.detail__sub[data-v-91f5d575]{font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.detail__usage[data-v-91f5d575]{margin-left:auto;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.detail__body[data-v-91f5d575]{flex:1 1 auto;min-height:0;overflow:auto;padding:16px}.widgets_grid[data-v-3ac9fb06]{display:flex;flex-direction:column}[data-v-3ac9fb06] .widgets_grid-item{display:flex;flex-direction:row;align-items:center;gap:9px;padding:6px 12px;font-size:var(--text-base, 13px);color:var(--color-fg);cursor:grab;border-radius:var(--radius-sm, 5px);margin:0 6px}[data-v-3ac9fb06] .widgets_grid-item:hover{background:var(--color-bg)}[data-v-3ac9fb06] .widgets_grid-icon{width:26px;height:26px;flex:none;display:inline-flex;align-items:center;justify-content:center;background:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 5px);overflow:hidden}[data-v-3ac9fb06] .widgets_grid-icon img{max-width:18px;max-height:18px}[data-v-3ac9fb06] .widgets_grid-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.add_widget_window[data-v-3ac9fb06]{position:relative;width:100%;height:100%;padding:6px 0}.add_widget_window__scroll[data-v-3ac9fb06]{height:100%;overflow-y:auto}.scrim[data-v-67bd2420]{position:fixed;inset:0;z-index:40000;display:grid;place-items:stretch;padding:26px 22px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(6px)}.overlay[data-v-67bd2420]{display:flex;min-width:0;min-height:0;background-color:var(--color-bg);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.stage[data-v-67bd2420]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.stage__head[data-v-67bd2420]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.stage__name[data-v-67bd2420]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.stage__uid[data-v-67bd2420]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.stage__spacer[data-v-67bd2420]{flex:1 1 auto}.seg[data-v-67bd2420]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.seg button[data-v-67bd2420]{padding:1px 9px;font-family:inherit;font-size:var(--text-xs);color:var(--color-dim);background:none;border:0;cursor:pointer}.seg button.on[data-v-67bd2420]{color:var(--color-onAccent);background-color:var(--color-accent)}.stage__bar[data-v-67bd2420]{flex:none;padding:5px 12px;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.stage__body[data-v-67bd2420]{flex:1 1 auto;display:grid;place-items:center;min-height:0;padding:18px;background-color:var(--color-canvas);overflow:auto}.preview[data-v-67bd2420]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.handle[data-v-67bd2420]{width:var(--spacing-splitter);flex:none;cursor:col-resize;background-color:var(--color-divider)}.handle[data-v-67bd2420]:hover,.handle[data-v-67bd2420]:focus-visible{background-color:var(--color-accent);outline:none}.side[data-v-67bd2420]{display:flex;flex-direction:column;flex:none;min-width:0;min-height:0;background-color:var(--color-pane)}.tabs[data-v-67bd2420]{display:flex;flex-wrap:wrap;align-items:stretch;min-height:var(--spacing-panelHeader);flex:none;padding:0 6px;gap:1px;border-bottom:1px solid var(--color-divider)}.tab[data-v-67bd2420]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 9px;font-family:inherit;font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab.on[data-v-67bd2420]{color:var(--color-fg);font-weight:600}.tab.on[data-v-67bd2420]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab__n[data-v-67bd2420]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}.fields[data-v-67bd2420]{flex:1 1 auto;min-height:0;padding:10px 12px 16px;overflow-y:auto}.pick[data-v-67bd2420]{margin-bottom:8px}.rest__note[data-v-67bd2420]{margin:0 0 10px;padding:7px 9px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim);background-color:var(--color-raised);border-radius:var(--radius-xs)}.note[data-v-67bd2420]{margin:8px 0 0;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.var-mark[data-v-67bd2420]{font-family:var(--font-mono);font-style:italic;color:var(--color-brand)}.bound[data-v-67bd2420]{width:100%;border-collapse:collapse;font-size:var(--text-sm)}.bound th[data-v-67bd2420]{padding:5px 8px;text-align:left;font-size:var(--text-xs);font-weight:600;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.bound td[data-v-67bd2420]{padding:5px 8px;border-bottom:1px solid var(--color-divider)}.bound__name[data-v-67bd2420],.bound__var[data-v-67bd2420]{font-family:var(--font-mono);font-size:var(--text-xs)}.bound__var[data-v-67bd2420]{color:var(--color-brand)}.foot[data-v-67bd2420]{display:flex;align-items:center;gap:7px;height:38px;flex:none;padding:0 12px;background-color:var(--color-pane);border-top:1px solid var(--color-divider)}.foot__hint[data-v-67bd2420]{font-size:var(--text-xs);color:var(--color-dim)}.tab[data-v-67bd2420]:focus-visible,.seg button[data-v-67bd2420]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.page-settings[data-v-9ea0fdd8]{position:absolute;top:12px;right:12px;bottom:12px;z-index:1000000;display:flex;flex-direction:column;width:340px;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.head[data-v-9ea0fdd8]{display:flex;align-items:center;gap:8px;flex:none;height:34px;padding:0 6px 0 12px;border-bottom:1px solid var(--color-divider)}.head__title[data-v-9ea0fdd8]{flex:1;margin:0;font-size:var(--text-sm, 12px);font-weight:500;color:var(--color-fg)}.head__close[data-v-9ea0fdd8]{width:24px;height:24px;font-size:16px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.head__close[data-v-9ea0fdd8]:hover{color:var(--color-fg);background-color:var(--color-raised)}.head__close[data-v-9ea0fdd8]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.body[data-v-9ea0fdd8]{flex:1;min-height:0;overflow-y:auto;padding:12px}.group+.group[data-v-9ea0fdd8]{margin-top:18px}.group__label[data-v-9ea0fdd8]{margin:0 0 8px;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.group[data-v-9ea0fdd8]>.field{margin-bottom:8px}.ident[data-v-9ea0fdd8]{margin:18px 0 0;font-size:var(--text-xs, 11px);color:var(--color-dim)}.ident code[data-v-9ea0fdd8]{font-family:var(--font-mono);user-select:all}.missing[data-v-9ea0fdd8]{margin:0;font-size:var(--text-sm, 12px);color:var(--color-dim)}.foot[data-v-9ea0fdd8]{display:flex;justify-content:flex-end;flex:none;padding:8px 12px;border-top:1px solid var(--color-divider)}.ghost{display:none}.editor[data-v-bd444b0c]{position:relative;padding:0;border:0;display:flex;align-items:stretch;width:100%;height:100%;min-height:0;overflow:hidden;background:var(--color-bg)}.palette__act[data-v-bd444b0c]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.palette__act[data-v-bd444b0c]:hover{color:var(--color-fg);background-color:var(--color-raised)}.palette__act[data-v-bd444b0c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.report-container[data-v-bd444b0c]{flex:1 1 auto;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;min-width:0;height:100%;position:relative;background:var(--color-canvas)}.report-container.dottet[data-v-bd444b0c]{background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:24px 24px;background-position:-12px -12px;background-repeat:repeat}.report-container__title[data-v-bd444b0c]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider)}.report-container .widgets-adding-controls[data-v-bd444b0c]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-md, 8px);margin:16px}.report-container .widget-board[data-v-bd444b0c]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-bd444b0c]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-bd444b0c]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-bd444b0c]{position:absolute}.dropdown-buttons-container[data-v-bd444b0c]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-bd444b0c]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-bd444b0c]{z-index:20000000!important}.v-enter-active[data-v-bd444b0c],.v-leave-active[data-v-bd444b0c]{transition:opacity .5s ease}.v-enter-from[data-v-bd444b0c],.v-leave-to[data-v-bd444b0c]{opacity:0}.variables[data-v-9292252d]{display:flex;flex-direction:column;gap:28px;box-sizing:border-box;width:100%;height:100%;overflow-y:auto;padding:28px 32px 40px;font-family:var(--font-sans);color:var(--color-fg);background-color:var(--color-bg)}.variables__head[data-v-9292252d],.reach[data-v-9292252d]{width:100%;max-width:940px}.variables__head[data-v-9292252d]{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap}.variables__title[data-v-9292252d]{margin:0 0 6px;font-size:20px;font-weight:600;letter-spacing:-.01em}.variables__lead[data-v-9292252d]{margin:0;max-width:56ch;font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}.reach__title[data-v-9292252d]{display:flex;align-items:baseline;gap:12px;margin:0 0 2px;font-size:var(--text-base);font-weight:600}.reach__lead[data-v-9292252d]{font-weight:400;font-size:var(--text-sm);color:var(--color-dim)}.reach__empty[data-v-9292252d]{margin:0;padding:12px 0;border-top:1px solid var(--color-divider);font-size:var(--text-base);color:var(--color-dim)}.rows[data-v-9292252d]{margin:0;padding:0;list-style:none;border-top:1px solid var(--color-divider)}.row[data-v-9292252d]{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1.4fr) minmax(0,2fr) auto;align-items:center;gap:16px;padding:7px 8px 7px 0;border-bottom:1px solid var(--color-divider);font-size:var(--text-base)}.row[data-v-9292252d]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.row__name[data-v-9292252d]{font-family:var(--font-mono);overflow-wrap:anywhere}.row__type[data-v-9292252d],.row__value[data-v-9292252d]{color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__value[data-v-9292252d]{font-family:var(--font-mono);color:var(--color-fg)}.row__tools[data-v-9292252d]{display:flex;gap:2px}.form[data-v-9292252d]{display:flex;flex-direction:column;gap:4px}.confirm__title[data-v-9292252d]{margin:0;font-size:var(--text-lg);font-weight:600}.confirm__text[data-v-9292252d]{margin:0;font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}@media(max-width:640px){.variables[data-v-9292252d]{padding:20px 16px 32px}.row[data-v-9292252d]{grid-template-columns:minmax(0,1fr) auto;row-gap:2px}.row__type[data-v-9292252d],.row__value[data-v-9292252d]{grid-column:1;white-space:normal}}.appearance[data-v-a84ca0bf]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.panel[data-v-a84ca0bf]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.panel__head[data-v-a84ca0bf]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 10px;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.head__tab[data-v-a84ca0bf]{position:relative;height:100%;padding:0 10px;font-family:inherit;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);background:none;border:0;cursor:pointer}.head__tab.on[data-v-a84ca0bf]{color:var(--color-fg)}.head__tab.on[data-v-a84ca0bf]:after{content:\"\";position:absolute;left:6px;right:6px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.head__tab[data-v-a84ca0bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.gallery[data-v-a84ca0bf]{flex:1 1 auto;min-height:0;padding:16px 18px 24px;overflow-y:auto;background-color:var(--color-bg)}.gallery__lead[data-v-a84ca0bf]{margin:0 0 18px;max-width:70ch;font-size:var(--text-sm);color:var(--color-dim)}.demo[data-v-a84ca0bf]{margin-bottom:26px}.demo__title[data-v-a84ca0bf]{margin:0 0 10px;padding-bottom:4px;font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.demo__row[data-v-a84ca0bf]{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:12px}.demo__form[data-v-a84ca0bf]{max-width:460px}.panel__tools[data-v-a84ca0bf]{display:flex;align-items:center;gap:6px;margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400}.changed[data-v-a84ca0bf]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-accent)}.body[data-v-a84ca0bf]{display:flex;flex:1 1 auto;min-height:0;background-color:var(--color-bg)}.themes[data-v-a84ca0bf]{width:240px;flex:none;display:flex;flex-direction:column;gap:2px;padding:8px 6px;overflow-y:auto;background-color:var(--color-pane);border-right:1px solid var(--color-divider)}.theme[data-v-a84ca0bf]{display:grid;gap:3px;padding:8px;font-family:inherit;text-align:left;background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.theme[data-v-a84ca0bf]:hover{background-color:var(--color-raised)}.theme.on[data-v-a84ca0bf]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);border-color:color-mix(in srgb,var(--color-accent) 45%,transparent)}.theme__strip[data-v-a84ca0bf]{display:flex;height:14px;border-radius:2px;overflow:hidden;border:1px solid var(--color-divider)}.theme__strip i[data-v-a84ca0bf]{flex:1}.theme__name[data-v-a84ca0bf]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.theme__note[data-v-a84ca0bf]{font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.tokens[data-v-a84ca0bf]{flex:1 1 auto;min-width:0;padding:8px 10px 16px;overflow-y:auto}.group__head[data-v-a84ca0bf]{display:flex;align-items:baseline;gap:7px;width:100%;padding:6px 4px;font-family:inherit;font-size:var(--text-base);font-weight:600;color:var(--color-fg);text-align:left;background:none;border:0;border-bottom:1px solid var(--color-divider);cursor:pointer}.group__twist[data-v-a84ca0bf]{width:11px;font-size:var(--text-xs);color:var(--color-dim)}.group__count[data-v-a84ca0bf]{margin-left:auto;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.group__body[data-v-a84ca0bf]{padding:8px 0 14px 18px}.group__note[data-v-a84ca0bf]{margin:0 0 8px;font-size:var(--text-sm);color:var(--color-dim);max-width:70ch}.token[data-v-a84ca0bf]{display:flex;align-items:center;gap:8px;padding:3px 0}.token__swatch[data-v-a84ca0bf]{width:22px;height:22px;flex:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__swatch--none[data-v-a84ca0bf]{background:repeating-linear-gradient(45deg,var(--color-raised),var(--color-raised) 3px,var(--color-bg) 3px,var(--color-bg) 6px)}.token__text[data-v-a84ca0bf]{display:flex;flex-direction:column;min-width:0;flex:1 1 auto}.token__name[data-v-a84ca0bf]{font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg)}.token__role[data-v-a84ca0bf]{font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.token__picker[data-v-a84ca0bf]{width:28px;height:24px;flex:none;padding:0;background:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__value[data-v-a84ca0bf]{width:220px;flex:none;height:24px;padding:0 7px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__reset[data-v-a84ca0bf]{width:24px;height:24px;flex:none;font-family:inherit;font-size:var(--text-base);color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__reset[data-v-a84ca0bf]:disabled{opacity:.35;cursor:default}.btn[data-v-a84ca0bf]{height:22px;padding:0 10px;font-family:inherit;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-a84ca0bf]:hover{border-color:var(--color-outline)}.btn[data-v-a84ca0bf]:focus-visible,.theme[data-v-a84ca0bf]:focus-visible,.group__head[data-v-a84ca0bf]:focus-visible,.token__value[data-v-a84ca0bf]:focus-visible,.token__picker[data-v-a84ca0bf]:focus-visible,.token__reset[data-v-a84ca0bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}\n";})();
import { identifier as o_, VARIABLE_WRAPPER_FACTORY as a_ } from "org.eclipse.daanse.board.app.lib.factory.variableWrapper";
import { EVENT_MANAGER as s_, EVENT_ACTIONS_REGISTRY_ID as Ol } from "org.eclipse.daanse.board.app.lib.api.events";
import { ref as ee, defineComponent as je, computed as ne, inject as xe, onMounted as Hn, onBeforeUnmount as Qo, createElementBlock as $, openBlock as m, Fragment as Ce, createElementVNode as u, createBlock as Be, createCommentVNode as re, renderList as Ke, unref as h, toDisplayString as F, normalizeClass as Ee, withModifiers as Mn, createVNode as B, createStaticVNode as l_, Teleport as Gl, resolveComponent as u_, shallowRef as Bl, watch as Nn, nextTick as gi, normalizeStyle as Yt, resolveDynamicComponent as Kn, createTextVNode as le, withDirectives as Kt, vModelText as Ho, withCtx as te, withKeys as vi, mergeModels as hi, useModel as jo, renderSlot as d_, vShow as zo, Transition as c_, isRef as f_, createApp as p_ } from "vue";
import { NAVIGATION_REGISTRY as g_, NAVIGATION_REGISTRY_ID as Hl, NavigationItem as v_ } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID as Kl, RouteDefinition as Dl } from "org.eclipse.daanse.board.app.lib.api.route";
import { useCurrentHistory as h_, useEList as Tn, useGlobalLoading as __, useEObject as Yl, useFeature as m_, useBoard as b_, VariableComplexStringWrapper as y_, VARIABLECOMPLEXSTRINGWRAPPER as w_ } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DIcon as He, DButton as be, DInput as gn, DModal as Ko, DSelect as Un, DTabs as k_, DColorInput as Zl, DSwitch as Jl, DFloatingWindow as x_, DDateInput as S_, DSlider as C_, DCheckbox as A_, DChip as qt, DDivider as $_ } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useRoute as br, useRouter as ea, createRouter as I_, createWebHistory as R_ } from "vue-router";
import { identifier as yr } from "org.eclipse.daanse.board.app.lib.api.page";
import { identifier as yi } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { identifier as at, WorkspaceImpl as E_, ConnectionImpl as T_, DatasourceImpl as L_, VariableImpl as O_, EventMappingImpl as Xl, PageImpl as B_, WidgetImpl as D_, LayoutItemImpl as W_ } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { JSONResource as Ql, URI as jl, OPTION_INDENT as V_ } from "@emfts/core";
import { identifier as na, CONNECTION_REPOSITORY as P_ } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as ta, DATASOURCE_REPOSITORY as M_ } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { identifier as eu } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as U_ } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { identifier as nu } from "org.eclipse.daanse.board.app.lib.api.widget";
import N_ from "vuedraggable";
import { WrapperSettingsPackage as F_, wrapperSettingsFormXmi as z_, WrapperSettingsImpl as q_, WidgetWrapper as G_ } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { SettingsForm as _i, isModelled as H_ } from "org.eclipse.daanse.board.app.ui.vue.uimodel";
import { VariableEvents as Wl } from "org.eclipse.daanse.board.app.lib.variables";
import { SystemActionsEcoreContent as K_, WidgetAction as Y_ } from "org.eclipse.daanse.board.app.lib.events";
import { loggerFactory as tu } from "org.eclipse.daanse.board.app.lib.logger";
const { TINY_EMITTER: ql, APP: i_ } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Xe = [];
for (let g = 0; g < 256; ++g)
  Xe.push((g + 256).toString(16).slice(1));
function Z_(g, _ = 0) {
  return (Xe[g[_ + 0]] + Xe[g[_ + 1]] + Xe[g[_ + 2]] + Xe[g[_ + 3]] + "-" + Xe[g[_ + 4]] + Xe[g[_ + 5]] + "-" + Xe[g[_ + 6]] + Xe[g[_ + 7]] + "-" + Xe[g[_ + 8]] + Xe[g[_ + 9]] + "-" + Xe[g[_ + 10]] + Xe[g[_ + 11]] + Xe[g[_ + 12]] + Xe[g[_ + 13]] + Xe[g[_ + 14]] + Xe[g[_ + 15]]).toLowerCase();
}
const J_ = new Uint8Array(16);
function X_() {
  return crypto.getRandomValues(J_);
}
function ru(g, _, o) {
  return crypto.randomUUID ? crypto.randomUUID() : Q_(g);
}
function Q_(g, _, o) {
  g = g || {};
  const w = g.random ?? g.rng?.() ?? X_();
  if (w.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return w[6] = w[6] & 15 | 64, w[8] = w[8] & 63 | 128, Z_(w);
}
const qo = ee(void 0);
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
const di = ee(!0);
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
const j_ = "data-board-backdrop", au = "daanse.board.backdrop";
function em() {
  try {
    return localStorage.getItem(au) === "on";
  } catch {
    return !1;
  }
}
const _r = ee(em());
function su() {
  document.documentElement.setAttribute(j_, _r.value ? "on" : "off");
}
function nm() {
  try {
    localStorage.setItem(au, _r.value ? "on" : "off");
  } catch {
  }
}
function tm() {
  return {
    shown: _r,
    toggle: () => {
      _r.value = !_r.value, nm(), su();
    }
  };
}
function rm() {
  su();
}
const im = "data-board-snap", lu = "daanse.board.snap";
function om() {
  try {
    const g = localStorage.getItem(lu);
    return g === null ? !0 : g === "on";
  } catch {
    return !0;
  }
}
const mr = ee(om());
function uu() {
  document.documentElement.setAttribute(im, mr.value ? "on" : "off");
}
function am() {
  try {
    localStorage.setItem(lu, mr.value ? "on" : "off");
  } catch {
  }
}
function sm() {
  return {
    snapping: mr,
    toggle: () => {
      mr.value = !mr.value, am(), uu();
    }
  };
}
function lm() {
  uu();
}
const um = { class: "topbar" }, dm = {
  class: "crumb",
  "aria-label": "Pfad"
}, cm = {
  key: 0,
  class: "crumb-sep",
  "aria-hidden": "true"
}, fm = ["onClick"], pm = ["aria-expanded"], gm = { class: "pages__name" }, vm = {
  key: 0,
  class: "pages__menu",
  role: "menu"
}, hm = ["onClick"], _m = ["title", "aria-label", "onClick"], mm = ["disabled", "title"], bm = ["disabled", "title"], ym = ["aria-pressed"], wm = ["aria-pressed"], km = ["aria-pressed"], xm = {
  key: 8,
  class: "modes",
  role: "group",
  "aria-label": "Modus"
}, Sm = ["aria-pressed"], Cm = ["aria-pressed"], Am = /* @__PURE__ */ je({
  __name: "Header",
  setup(g) {
    const _ = br(), o = ea(), w = ne(() => _.params.pageid ?? ""), b = h_(), A = ne(
      () => _.name === "edit" || _.name === "pageEdit" || String(_.path).endsWith("/edit")
    ), c = ne(() => {
      const N = { label: "Boards", to: "/" }, D = {
        label: w.value ? `Board ${w.value.slice(0, 8)}` : "Board",
        to: w.value ? `/page/${w.value}` : void 0
      };
      switch (_.name) {
        case "home":
          return [{ label: "Boards" }];
        case "page":
          return [N, { label: D.label }];
        case "edit":
        case "pageEdit":
          return [N, D, { label: "Bearbeiten" }];
        case "data":
          return [N, { label: "Verbindungen & Daten" }];
        case "config":
          return [N, { label: "Konfiguration" }];
        case "save":
          return [N, { label: "Speicher" }];
        case "test":
          return [N, { label: "Test" }];
        default:
          return [N, { label: String(_.name ?? "Board") }];
      }
    }), T = ne(() => !!w.value), C = xe(yr);
    xe(yi);
    const { openSettings: p } = iu(), y = Tn(xe(at), (N) => N.pages), { visible: H, toggle: z } = ou(), { shown: q, toggle: L } = tm(), { snapping: K, toggle: P } = sm(), R = ne(() => {
      if (y.value, !w.value) return !1;
      try {
        const N = C?.getPage(w.value);
        return !!(N?.backgroundImage?.trim() || N?.backgroundColor?.trim());
      } catch {
        return !1;
      }
    }), W = ne(() => {
      y.value;
      const N = C?.getAllPageIds() ?? [], D = [];
      for (const J of N) {
        const Ve = C?.getPage(J);
        Ve && D.push(Ve);
      }
      return D;
    }), Q = ne(() => {
      if (y.value, !w.value) return "";
      try {
        return C?.getPage(w.value)?.name ?? "Seite";
      } catch {
        return "Seite";
      }
    }), ie = ee(!1);
    function M(N) {
      ie.value = !1, N !== w.value && o.push(A.value ? `/page/${N}/edit` : `/page/${N}`);
    }
    const X = ee();
    function ve(N) {
      ie.value && (X.value?.contains(N.target) || (ie.value = !1));
    }
    function We(N) {
      N.key === "Escape" && (ie.value = !1);
    }
    Hn(() => {
      document.addEventListener("pointerdown", ve), document.addEventListener("keydown", We);
    }), Qo(() => {
      document.removeEventListener("pointerdown", ve), document.removeEventListener("keydown", We);
    });
    function ae() {
      const N = ru();
      C?.registerPage({
        id: N,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), ie.value = !1, o.push(`/page/${N}/edit`);
    }
    const ce = ne(() => W.value.length > 1);
    function fe(N) {
      if (!ce.value) return;
      const D = W.value.find((J) => J.id === N);
      if (confirm(`Seite „${D?.name ?? N}" löschen? Das lässt sich nicht rückgängig machen.`) && (C?.unregisterPage(N), N === w.value)) {
        const J = W.value.find((Ve) => Ve.id !== N);
        J && o.push(A.value ? `/page/${J.id}/edit` : `/page/${J.id}`);
      }
    }
    const Ie = () => {
      w.value && o.push(`/page/${w.value}`);
    }, nn = () => {
      w.value && o.push(`/page/${w.value}/edit`);
    }, ye = () => o.push({ path: "/", query: { view: "storage" } }), oe = () => o.push("/appearance");
    return (N, D) => (m(), $(Ce, null, [
      u("header", um, [
        D[14] || (D[14] = u("span", { class: "brand" }, [
          u("span", {
            class: "brand-mark",
            "aria-hidden": "true"
          }, "D"),
          u("span", { class: "brand-name" }, "Daanse Board")
        ], -1)),
        u("nav", dm, [
          (m(!0), $(Ce, null, Ke(c.value, (J, Ve) => (m(), $(Ce, {
            key: J.label + Ve
          }, [
            Ve > 0 ? (m(), $("span", cm, "/")) : re("", !0),
            J.to && Ve < c.value.length - 1 ? (m(), $("button", {
              key: 1,
              type: "button",
              class: "crumb-part crumb-link",
              onClick: (on) => h(o).push(J.to)
            }, F(J.label), 9, fm)) : (m(), $("span", {
              key: 2,
              class: Ee(["crumb-part", { current: Ve === c.value.length - 1 }])
            }, F(J.label), 3))
          ], 64))), 128))
        ]),
        T.value ? (m(), $("div", {
          key: 0,
          ref_key: "menuHost",
          ref: X,
          class: "pages"
        }, [
          u("button", {
            type: "button",
            class: "pages__current",
            "aria-expanded": ie.value,
            "aria-haspopup": "menu",
            title: "Seite wechseln",
            onClick: D[0] || (D[0] = (J) => ie.value = !ie.value)
          }, [
            u("span", gm, F(Q.value), 1),
            D[7] || (D[7] = u("span", {
              class: "pages__caret",
              "aria-hidden": "true"
            }, "▾", -1))
          ], 8, pm),
          ie.value ? (m(), $("ul", vm, [
            (m(!0), $(Ce, null, Ke(W.value, (J) => (m(), $("li", {
              key: J.id,
              role: "none",
              class: "pages__line"
            }, [
              u("button", {
                type: "button",
                role: "menuitem",
                class: Ee(["pages__item", { on: J.id === w.value }]),
                onClick: (Ve) => M(J.id)
              }, F(J.name), 11, hm),
              ce.value ? (m(), $("button", {
                key: 0,
                type: "button",
                class: "pages__remove",
                title: `Seite „${J.name}“ löschen`,
                "aria-label": `Seite ${J.name} löschen`,
                onClick: Mn((Ve) => fe(J.id), ["stop"])
              }, " × ", 8, _m)) : re("", !0)
            ]))), 128)),
            D[8] || (D[8] = u("li", {
              class: "pages__sep",
              role: "separator"
            }, null, -1)),
            u("li", { role: "none" }, [
              u("button", {
                type: "button",
                role: "menuitem",
                class: "pages__item pages__add",
                onClick: ae
              }, " + Neue Seite ")
            ])
          ])) : re("", !0)
        ], 512)) : re("", !0),
        A.value && h(b) ? (m(), $("button", {
          key: 1,
          type: "button",
          class: "icon-action",
          disabled: !h(b).canUndo.value,
          title: h(b).undoLabel.value ? `Rückgängig: ${h(b).undoLabel.value}` : "Rückgängig",
          "aria-label": "Letzte Änderung rückgängig machen",
          onClick: D[1] || (D[1] = (J) => h(b).undo())
        }, [
          B(h(He), {
            name: "undo",
            size: "sm"
          })
        ], 8, mm)) : re("", !0),
        A.value && h(b) ? (m(), $("button", {
          key: 2,
          type: "button",
          class: "icon-action",
          disabled: !h(b).canRedo.value,
          title: h(b).redoLabel.value ? `Wiederholen: ${h(b).redoLabel.value}` : "Wiederholen",
          "aria-label": "Rückgängig gemachte Änderung wiederholen",
          onClick: D[2] || (D[2] = (J) => h(b).redo())
        }, [
          B(h(He), {
            name: "redo",
            size: "sm"
          })
        ], 8, bm)) : re("", !0),
        A.value ? (m(), $("button", {
          key: 3,
          type: "button",
          class: Ee(["icon-action", { on: h(K) }]),
          "aria-pressed": h(K),
          title: "Am Raster ausrichten",
          "aria-label": "Widgets am Raster ausrichten",
          onClick: D[3] || (D[3] = //@ts-ignore
          (...J) => h(P) && h(P)(...J))
        }, [...D[9] || (D[9] = [
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
        ])], 10, ym)) : re("", !0),
        A.value && R.value ? (m(), $("button", {
          key: 4,
          type: "button",
          class: Ee(["icon-action", { on: h(q) }]),
          "aria-pressed": h(q),
          title: "Hintergrund der Seite zeigen",
          "aria-label": "Hintergrund der Seite beim Bearbeiten zeigen oder verbergen",
          onClick: D[4] || (D[4] = //@ts-ignore
          (...J) => h(L) && h(L)(...J))
        }, [...D[10] || (D[10] = [
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
        ])], 10, wm)) : re("", !0),
        A.value ? (m(), $("button", {
          key: 5,
          type: "button",
          class: Ee(["icon-action", { on: h(H) }]),
          "aria-pressed": h(H),
          title: "Widgets",
          "aria-label": "Widget-Palette zeigen oder verbergen",
          onClick: D[5] || (D[5] = //@ts-ignore
          (...J) => h(z) && h(z)(...J))
        }, [...D[11] || (D[11] = [
          l_('<svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15" data-v-7fa027b5><rect x="3.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-7fa027b5></rect><rect x="13.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-7fa027b5></rect><rect x="3.5" y="13.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-7fa027b5></rect><rect x="13.5" y="13.5" width="7" height="7" rx="1" fill="currentColor" stroke="currentColor" stroke-width="1.6" data-v-7fa027b5></rect></svg>', 1)
        ])], 10, km)) : re("", !0),
        T.value ? (m(), $("button", {
          key: 6,
          type: "button",
          class: "icon-action",
          title: "Seite einrichten",
          "aria-label": "Seite einrichten",
          onClick: D[6] || (D[6] = (J) => h(p)(w.value))
        }, [...D[12] || (D[12] = [
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
        D[15] || (D[15] = u("span", { class: "spacer" }, null, -1)),
        T.value ? (m(), $("button", {
          key: 7,
          type: "button",
          class: "action",
          title: "Arbeitsstand speichern oder laden",
          onClick: ye
        }, " Speichern ")) : re("", !0),
        T.value ? (m(), $("div", xm, [
          u("button", {
            type: "button",
            class: Ee(["mode", { on: !A.value }]),
            "aria-pressed": !A.value,
            onClick: Ie
          }, " Ansicht ", 10, Sm),
          u("button", {
            type: "button",
            class: Ee(["mode", { on: A.value }]),
            "aria-pressed": A.value,
            onClick: nn
          }, " Bearbeiten ", 10, Cm)
        ])) : re("", !0),
        u("button", {
          type: "button",
          class: "icon-action",
          title: "Erscheinungsbild",
          "aria-label": "Erscheinungsbild",
          onClick: oe
        }, [...D[13] || (D[13] = [
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
        D[16] || (D[16] = u("span", {
          class: "avatar",
          title: "Angemeldet"
        }, "MH", -1))
      ]),
      (m(), Be(Gl, { to: "body" }))
    ], 64));
  }
}), en = (g, _) => {
  const o = g.__vccOpts || g;
  for (const [w, b] of _)
    o[w] = b;
  return o;
}, $m = /* @__PURE__ */ en(Am, [["__scopeId", "data-v-7fa027b5"]]), mi = [
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
], du = mi.flatMap((g) => g.tokens.map((_) => _.name));
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
function Rm() {
  const g = { themeId: Ml, overrides: {} };
  try {
    const _ = localStorage.getItem(fu);
    if (!_) return g;
    const o = JSON.parse(_);
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
const Qe = ee(Rm()), Yo = ee([]);
function fi() {
  try {
    localStorage.setItem(fu, JSON.stringify(Qe.value));
  } catch {
  }
}
function Ht() {
  const g = vr.value.find((w) => w.id === Qe.value.themeId);
  if (!g) return;
  const _ = document.documentElement, o = { ...g.tokens, ...Qe.value.overrides };
  for (const [w, b] of Object.entries(o))
    _.style.setProperty(`--${w}`, b);
  for (const [w, b] of Object.entries(Im)) {
    const A = o[b];
    A && _.style.setProperty(`--${w}`, A);
  }
  _.style.colorScheme = g.dark ? "dark" : "light", _.setAttribute("data-theme", g.dark ? "dark" : "light");
}
const vr = ne(() => [...cu, ...Yo.value]);
function pu() {
  const g = ne(
    () => vr.value.find((p) => p.id === Qe.value.themeId) ?? cu[0]
  );
  function _(p) {
    return Qe.value.overrides[p] ?? g.value.tokens[p] ?? "";
  }
  function o(p) {
    return p in Qe.value.overrides;
  }
  function w(p) {
    vr.value.some((y) => y.id === p) && (Qe.value = { themeId: p, overrides: {} }, fi(), Ht());
  }
  function b(p, y) {
    du.includes(p) && (Qe.value = {
      ...Qe.value,
      overrides: { ...Qe.value.overrides, [p]: y }
    }, fi(), Ht());
  }
  function A(p) {
    const { [p]: y, ...H } = Qe.value.overrides;
    Qe.value = { ...Qe.value, overrides: H }, fi(), Ht();
  }
  function c() {
    Qe.value = { ...Qe.value, overrides: {} }, fi(), Ht();
  }
  function T(p) {
    vr.value.some((y) => y.id === p.id) || (Yo.value = [...Yo.value, p]);
  }
  function C() {
    return {
      ...g.value,
      id: `${g.value.id}-eigen`,
      name: `${g.value.name} (angepasst)`,
      tokens: { ...g.value.tokens, ...Qe.value.overrides }
    };
  }
  return {
    themes: vr,
    activeTheme: g,
    overrides: ne(() => Qe.value.overrides),
    valueOf: _,
    isOverridden: o,
    selectTheme: w,
    setToken: b,
    clearToken: A,
    clearAllTokens: c,
    addTheme: T,
    exportTheme: C,
    apply: Ht
  };
}
function Em() {
  Ht();
}
const Tm = { class: "shell" }, Lm = {
  key: 0,
  class: "global-loading-bar"
}, Om = {
  key: 0,
  class: "rail",
  "aria-label": "Bereiche"
}, Bm = ["aria-current"], Dm = ["aria-current"], Wm = ["aria-current", "title", "onClick"], Vm = { class: "sr-only" }, Pm = { class: "content" }, Mm = /* @__PURE__ */ je({
  __name: "App",
  setup(g) {
    const _ = ee([]), { isLoading: o } = __();
    pu();
    const w = br(), b = ea();
    Hn(() => {
      const p = xe(g_);
      _.value = p.getAllNavigationItemsArray ? p.getAllNavigationItemsArray() : [];
    });
    const A = ne(
      () => w.params.pageid ? `/page/${w.params.pageid}` : "/page/abc"
    ), c = ne(() => String(w.name) === "home" && !w.params.pageid), T = ne(
      () => ["home", "page", "edit", "pageEdit"].includes(String(w.name))
    ), C = (p) => b.push(p);
    return (p, y) => {
      const H = u_("router-view");
      return m(), $("div", Tm, [
        h(o) ? (m(), $("div", Lm, [...y[2] || (y[2] = [
          u("div", { class: "global-loading-bar-progress" }, null, -1)
        ])])) : re("", !0),
        B($m),
        u("div", {
          class: Ee(["shell-body", { "shell-body--norail": c.value }])
        }, [
          c.value ? re("", !0) : (m(), $("nav", Om, [
            u("button", {
              type: "button",
              class: Ee(["ri", { on: T.value }]),
              "aria-current": T.value ? "page" : void 0,
              title: "Board",
              onClick: y[0] || (y[0] = (z) => C(A.value))
            }, [
              B(h(He), { name: "dashboard" }),
              y[3] || (y[3] = u("span", { class: "sr-only" }, "Board", -1))
            ], 10, Bm),
            u("button", {
              type: "button",
              class: Ee(["ri", { on: h(w).name === "data" }]),
              "aria-current": h(w).name === "data" ? "page" : void 0,
              title: "Verbindungen & Daten",
              onClick: y[1] || (y[1] = (z) => C("/datasources"))
            }, [
              B(h(He), { name: "dataset" }),
              y[4] || (y[4] = u("span", { class: "sr-only" }, "Verbindungen & Daten", -1))
            ], 10, Dm),
            (m(!0), $(Ce, null, Ke(_.value, (z) => (m(), $("button", {
              key: z.id,
              type: "button",
              class: Ee(["ri", { on: h(w).name === z.routeName }]),
              "aria-current": h(w).name === z.routeName ? "page" : void 0,
              title: z.label,
              onClick: (q) => C(z.route)
            }, [
              B(h(He), {
                name: z.icon
              }, null, 8, ["name"]),
              u("span", Vm, F(z.label), 1)
            ], 10, Wm))), 128)),
            y[5] || (y[5] = u("span", { class: "rail-spacer" }, null, -1))
          ])),
          u("main", Pm, [
            (m(), Be(H, {
              key: p.$route.fullPath
            }))
          ])
        ], 2)
      ]);
    };
  }
}), Um = /* @__PURE__ */ en(Mm, [["__scopeId", "data-v-27fec35c"]]), gu = "daanse.board.usage";
function Nm() {
  try {
    const g = localStorage.getItem(gu), _ = g ? JSON.parse(g) : {};
    return _ && typeof _ == "object" ? _ : {};
  } catch {
    return {};
  }
}
const it = ee(Nm());
function vu() {
  function g(b) {
    if (!b) return;
    const A = it.value[b];
    it.value = {
      ...it.value,
      [b]: { count: (A?.count ?? 0) + 1, lastOpened: Date.now() }
    };
    try {
      localStorage.setItem(gu, JSON.stringify(it.value));
    } catch {
    }
  }
  function _(b) {
    return it.value[b];
  }
  function o(b, A) {
    const c = it.value[b], T = it.value[A];
    return (T?.count ?? 0) !== (c?.count ?? 0) ? (T?.count ?? 0) - (c?.count ?? 0) : (T?.lastOpened ?? 0) - (c?.lastOpened ?? 0);
  }
  function w(b) {
    const A = it.value[b]?.lastOpened;
    if (!A) return "";
    const c = Math.floor((Date.now() - A) / 864e5);
    return c <= 0 ? "heute" : c === 1 ? "gestern" : c < 31 ? `vor ${c} Tagen` : new Date(A).toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" });
  }
  return { usage: it, recordOpened: g, usageOf: _, byUsage: o, lastOpenedLabel: w };
}
const Fm = {
  key: 0,
  class: "loading-state"
}, zm = {
  key: 1,
  class: "view-component-wrapper"
}, qm = {
  key: 2,
  class: "edit-component-wrapper"
}, Gm = {
  key: 3,
  class: "no-layout-message"
}, Hm = { class: "no-layout-message__text" }, Km = { key: 0 }, Ym = { key: 1 }, Zm = { key: 2 }, Jm = /* @__PURE__ */ je({
  __name: "LayoutRenderer",
  props: {
    pageId: {},
    viewMode: { type: Boolean }
  },
  emits: ["openWidgetSettings", "removeWidget"],
  setup(g, { emit: _ }) {
    const o = g, w = _, b = xe(yi), A = xe(yr), c = ee(null), T = ee(null), C = Bl(null), p = Bl(null), y = ee(0), H = ee(!0), z = (Q) => {
      w("openWidgetSettings", Q);
    }, q = (Q) => {
      w("removeWidget", Q);
    };
    let L = 0;
    const K = async () => {
      const Q = ++L;
      if (H.value = !0, await gi(), Q === L) {
        if (o.pageId && A) {
          const ie = A.getPage(o.pageId);
          if (c.value = ie ?? null, ie?.layoutId && b) {
            const M = b.getLayout(ie.layoutId);
            T.value = M || null, o.viewMode ? (p.value = M?.component || null, C.value = null) : (C.value = M?.editor || null, p.value = null);
          } else
            C.value = null, p.value = null, T.value = null;
        }
        await new Promise((ie) => setTimeout(ie, 50)), Q === L && (H.value = !1);
      }
    }, P = () => o.pageId ? A?.getPage(o.pageId) : void 0, R = Yl(P);
    Nn(R, () => {
      c.value = R.value ?? null;
    });
    const W = m_(P, "layoutId");
    return Nn(W, () => {
      y.value++, K();
    }), Hn(async () => {
      await gi(), await K();
    }), (Q, ie) => (m(), $("div", {
      class: "layout-renderer",
      style: Yt({
        backgroundColor: c.value?.backgroundColor || void 0,
        backgroundImage: c.value?.backgroundImage ? `url(${c.value.backgroundImage})` : void 0,
        backgroundSize: c.value?.backgroundSize || "cover",
        backgroundPosition: c.value?.backgroundPosition || "center",
        backgroundRepeat: c.value?.backgroundRepeat || "no-repeat"
      })
    }, [
      H.value ? (m(), $("div", Fm, [...ie[0] || (ie[0] = [
        u("span", {
          class: "spinner",
          "aria-hidden": "true"
        }, null, -1),
        u("p", null, "Layout wird geladen…", -1)
      ])])) : o.viewMode && p.value && T.value ? (m(), $("div", zm, [
        (m(), Be(Kn(p.value), {
          key: T.value.id || "view",
          "layout-settings": c.value?.layoutSettings
        }, null, 8, ["layout-settings"]))
      ])) : !o.viewMode && C.value && T.value ? (m(), $("div", qm, [
        (m(), Be(Kn(C.value), {
          key: T.value.id || "edit",
          "layout-settings": c.value?.layoutSettings,
          onOpenSettings: z,
          onRemoveWidget: q
        }, null, 40, ["layout-settings"]))
      ])) : (m(), $("div", Gm, [
        u("p", Hm, [
          B(h(He), {
            name: "warning",
            size: "lg",
            tone: "color-warn"
          }),
          c.value ? T.value ? (m(), $("span", Zm, [
            le(F(o.viewMode ? "Zu diesem Layout gibt es keine Darstellung." : "Zu diesem Layout gibt es keinen Editor.") + " ", 1),
            ie[1] || (ie[1] = u("br", null, null, -1)),
            u("small", null, "Layout: " + F(T.value.id), 1)
          ])) : (m(), $("span", Ym, " Für „" + F(c.value.name || o.pageId) + '" ist kein Layout eingestellt. ', 1)) : (m(), $("span", Km, " Die Seite „" + F(o.pageId) + '" gibt es nicht. ', 1))
        ])
      ]))
    ], 4));
  }
}), hu = /* @__PURE__ */ en(Jm, [["__scopeId", "data-v-965fd8c7"]]), Xm = {
  class: "floorplan",
  "aria-hidden": "true"
}, Qm = {
  key: 0,
  class: "floorplan__empty"
}, jm = /* @__PURE__ */ je({
  __name: "BoardFloorplan",
  props: {
    items: {},
    typeById: {}
  },
  setup(g) {
    const _ = g;
    function o(b) {
      const A = (b ?? "").toLowerCase();
      return /chart|table|pivot|kpi|progress|timeline|filter|rss|weather/.test(A) ? "data" : /map|routing|image|video|vanta|svg|icon|mermaid|geo/.test(A) ? "visual" : "text";
    }
    const w = ne(() => {
      const b = (_.items ?? []).filter(
        (p) => Number.isFinite(p.x) && Number.isFinite(p.y)
      );
      if (b.length === 0) return [];
      const A = Math.max(...b.map((p) => (p.x ?? 0) + (p.width ?? 1))), c = Math.max(...b.map((p) => (p.y ?? 0) + (p.height ?? 1))), T = A > 0 ? A : 1, C = c > 0 ? c : 1;
      return b.map((p) => ({
        key: p.id ?? `${p.x}-${p.y}`,
        family: o(_.typeById?.[p.id ?? ""]),
        style: {
          left: `${(p.x ?? 0) / T * 100}%`,
          top: `${(p.y ?? 0) / C * 100}%`,
          // minus the gutter, so neighbouring widgets stay visibly separate
          width: `calc(${Math.max((p.width ?? 1) / T * 100, 3)}% - 3px)`,
          height: `calc(${Math.max((p.height ?? 1) / C * 100, 6)}% - 3px)`
        }
      }));
    });
    return (b, A) => (m(), $("div", Xm, [
      (m(!0), $(Ce, null, Ke(w.value, (c) => (m(), $("div", {
        key: c.key,
        class: Ee(["floorplan__block", `floorplan__block--${c.family}`]),
        style: Yt(c.style)
      }, null, 6))), 128)),
      w.value.length === 0 ? (m(), $("span", Qm, "keine Widgets")) : re("", !0)
    ]));
  }
}), Zo = /* @__PURE__ */ en(jm, [["__scopeId", "data-v-0eecd73b"]]), { parse: e1 } = JSON, { keys: n1 } = Object, bi = String, t1 = "string", Ul = {}, _u = "object", r1 = (g, _) => _, i1 = (g) => g instanceof bi ? bi(g) : g, o1 = (g, _) => typeof _ === t1 ? new bi(_) : _, a1 = (g, _, o, w) => (b) => {
  for (let A = n1(b), { length: c } = A, T = 0; T < c; T++) {
    const C = A[T], p = b[C];
    if (p instanceof bi) {
      const y = g[+p];
      typeof y === _u && !o.has(y) ? (o.add(y), b[C] = Ul, _.push({ o: b, k: C, r: y })) : b[C] = w.call(b, C, y);
    } else b[C] !== Ul && (b[C] = w.call(b, C, p));
  }
  return b;
}, s1 = (g, _) => {
  const o = e1(g, o1).map(i1), w = r1;
  let b = o[0];
  if (typeof b === _u && b) {
    const A = [], c = a1(o, A, /* @__PURE__ */ new Set(), w);
    b = c(b);
    let T = 0;
    for (; T < A.length; ) {
      const { o: C, k: p, r: y } = A[T++];
      C[p] = w.call(C, p, c(y));
    }
  }
  return w.call({ "": b }, "", b);
};
function l1(g) {
  if (g) {
    if (typeof g == "object") return g;
    if (typeof g == "string")
      try {
        const _ = JSON.parse(g);
        return Array.isArray(_) ? s1(g) : _;
      } catch {
        return;
      }
  }
}
function u1(g) {
  return typeof g.eClass == "string";
}
function d1(g) {
  if (!g || typeof g != "object") return;
  const _ = new E_(), o = /* @__PURE__ */ new Map();
  for (const A of g.conections ?? []) {
    const c = new T_();
    c.uid = A.uid, c.name = A.name, c.type = A.type, c.config = A.config ?? {}, _.connections.push(c), o.set(A.uid, c);
  }
  const w = /* @__PURE__ */ new Map();
  for (const A of g.datasources ?? []) {
    const c = new L_();
    c.uid = A.uid, c.name = A.name, c.type = A.type, c.config = A.config ?? {};
    const T = o.get((A.config ?? {}).connection);
    T && (c.connection = T), _.datasources.push(c), w.set(A.uid, c);
  }
  const b = [];
  for (const A of g.variables ?? []) {
    const c = new O_();
    c.uid = A.id ?? A.uid ?? Math.random().toString(36).substring(7), c.name = A.name, c.type = A.type, c.scope = A.scope ?? "global", c.accessMode = A.accessMode ?? "external-writable", c.definition = A, _.variables.push(c), b.push({ entry: A, variable: c });
  }
  for (const A of g.eventMappings ?? []) {
    const c = new Xl();
    c.id = A.id, c.definition = A, _.eventMappings.push(c);
  }
  for (const [A, c] of Object.entries(g.pages ?? {})) {
    const T = c?.info ?? {}, C = new B_();
    C.id = T.id ?? A, C.name = T.name ?? "Seite", C.description = T.description, C.icon = T.icon, C.visibleInNavigation = T.visibleInNavigation ?? !0, C.layoutId = T.layoutId ?? T.layout?.id ?? "org.eclipse.daanse.board.app.ui.vue.layouts.base", C.layoutSettings = T.layoutSettings, C.backgroundColor = T.backgroundColor, C.backgroundImage = T.backgroundImage, C.backgroundSize = T.backgroundSize, C.backgroundPosition = T.backgroundPosition, C.backgroundRepeat = T.backgroundRepeat;
    for (const p of c?.widgets ?? []) {
      const y = new D_();
      y.uid = p.uid, y.type = p.type, y.config = p.config ?? {}, y.wrapperConfig = p.wrapperConfig ?? {};
      const H = w.get(p.config?.datasourceId);
      H && (y.datasource = H), C.widgets.push(y);
    }
    for (const p of c?.layout ?? []) {
      const y = new W_();
      y.id = p.id, y.x = p.x ?? 0, y.y = p.y ?? 0, y.z = p.z ?? 0, y.width = p.width ?? 300, y.height = p.height ?? 150, y.group = p.group, C.layout.push(y);
    }
    _.pages.push(C);
  }
  for (const { entry: A, variable: c } of b) {
    const T = A.pageId;
    T && (c.page = _.pages.toArray().find((C) => C.id === T));
  }
  return _.pages.size() > 0 && (_.defaultPage = _.pages.get(0)), _;
}
const c1 = ee();
function f1() {
  return c1;
}
const mu = "workspace.json";
function Jo(g) {
  const _ = l1(g);
  if (_)
    try {
      if (!u1(_)) return d1(_);
      const o = new Ql(jl.createURI(mu));
      return o.loadFromString(JSON.stringify(_)), o.getContents().get(0);
    } catch {
      return;
    }
}
function p1() {
  const g = xe(at), _ = xe(na), o = xe(ta), w = xe(eu), b = xe(o_), A = xe(s_);
  function c() {
    g.eventMappings.clear();
    for (const p of A?.getAllMappings() ?? []) {
      const y = new Xl();
      y.id = p.id, y.definition = p, g.eventMappings.push(y);
    }
  }
  function T() {
    c();
    const p = new Ql(jl.createURI(mu));
    p.getContents().add(g);
    const y = p.saveToString(/* @__PURE__ */ new Map([[V_, 2]]));
    return p.getContents().clear(), y;
  }
  function C(p) {
    const y = Jo(p);
    if (!y) return [];
    g.connections.clear();
    for (const z of y.connections.toArray()) g.connections.push(z);
    g.datasources.clear();
    for (const z of y.datasources.toArray()) g.datasources.push(z);
    g.pages.clear();
    for (const z of y.pages.toArray()) g.pages.push(z);
    g.variables.clear();
    for (const z of y.variables.toArray()) g.variables.push(z);
    g.eventMappings.clear();
    for (const z of y.eventMappings.toArray()) g.eventMappings.push(z);
    g.defaultPage = g.pages.toArray().find((z) => z.id === y.defaultPage?.id) ?? (g.pages.size() > 0 ? g.pages.get(0) : void 0), _?.rebuildLive(), o?.rebuildLive(), w?.rebuildLive(), A?.setAllMappings(
      g.eventMappings.toArray().map((z) => z.definition)
    );
    const H = [];
    for (const z of g.pages.toArray())
      b?.initilazeVariableWrappers(
        z.widgets.toArray().map((q) => ({
          uid: q.uid,
          type: q.type,
          config: q.config,
          wrapperConfig: q.wrapperConfig
        }))
      ), H.push(z.id);
    return H;
  }
  return { save: T, load: C };
}
function g1(g) {
  const _ = g.split(".").filter(Boolean);
  return (_[_.length - 1] ?? g).replace(/widget$/i, "") || g;
}
function bu(g, _, o, w) {
  const b = Array.isArray(o) ? o : [], A = Array.isArray(w) ? w : [], c = {};
  for (const p of A)
    p?.uid && p.type && (c[p.uid] = p.type);
  const T = new Set(
    A.map((p) => p?.config?.datasourceId).filter((p) => !!p)
  ), C = [...new Set(A.map((p) => g1(p?.type ?? "")).filter(Boolean))];
  return {
    id: g,
    name: _?.name || "Unbenanntes Board",
    description: _?.description ?? "",
    items: b,
    typeById: c,
    widgetCount: A.length,
    sourceCount: T.size,
    kinds: C
  };
}
const v1 = { class: "storage" }, h1 = {
  class: "tree",
  "aria-label": "Speicher"
}, _1 = {
  class: "tree__body",
  role: "tree"
}, m1 = ["aria-expanded", "onClick"], b1 = { class: "row__twist" }, y1 = { class: "row__name" }, w1 = { class: "row__meta" }, k1 = ["onClick"], x1 = { class: "row__name" }, S1 = { class: "row__meta" }, C1 = {
  key: 0,
  class: "row row--hint"
}, A1 = ["onClick"], $1 = {
  key: 0,
  class: "row row--hint"
}, I1 = { class: "detail" }, R1 = {
  key: 0,
  class: "detail__failure",
  role: "alert"
}, E1 = { class: "detail__head" }, T1 = { class: "detail__facts" }, L1 = { class: "create__hint" }, O1 = { class: "detail__head" }, B1 = { class: "detail__name" }, D1 = {
  key: 0,
  class: "detail__badge"
}, W1 = { class: "detail__facts" }, V1 = {
  key: 0,
  class: "boards"
}, P1 = { class: "board__text" }, M1 = { class: "board__name" }, U1 = { class: "board__facts" }, N1 = {
  key: 0,
  class: "board__kinds"
}, F1 = {
  key: 1,
  class: "detail__hint"
}, z1 = {
  key: 4,
  class: "detail__hint"
}, q1 = {
  key: 5,
  class: "detail__hint"
}, G1 = /* @__PURE__ */ je({
  __name: "WorkspaceStorage",
  emits: ["restored"],
  setup(g, { emit: _ }) {
    const o = _, w = xe(U_), { save: b, load: A } = p1(), c = ee([]), T = ee({}), C = ee(/* @__PURE__ */ new Set()), p = ee(), y = ee(), H = ee(""), z = ee(""), q = ee(!1), L = f1(), K = ee(!1), P = ee("");
    function R(U) {
      return typeof U == "string" ? U : U?.message ?? String(U);
    }
    function W(U) {
      return U.name ?? String(U.uri).split("/").pop() ?? String(U.uri);
    }
    function Q(U) {
      return String(U.uri);
    }
    function ie(U, k) {
      const x = new URL(String(U.uri));
      return x.pathname = `/${k}.json`, x;
    }
    function M(U) {
      const k = U ? Object.getPrototypeOf(U)?.constructor : void 0;
      return k && "type" in k ? String(k.type) : "";
    }
    function X(U) {
      return typeof U?.create == "function";
    }
    function ve(U) {
      const k = M(U);
      if (!(!k || !w?.isViewForRepoType(k)))
        return w.getViewForRepoType(k);
    }
    const We = ne(() => ve(p.value));
    async function ae() {
      c.value = await w?.getAvailableReposetories() ?? [];
      const U = c.value[0];
      U && C.value.size === 0 && (p.value = U, await ce(U));
    }
    async function ce(U) {
      C.value.add(Q(U)), C.value = new Set(C.value), await fe(U);
    }
    async function fe(U) {
      z.value = "", q.value = !0;
      try {
        T.value = { ...T.value, [Q(U)]: await U.findAll() };
      } catch (k) {
        T.value = { ...T.value, [Q(U)]: [] }, z.value = `Einträge konnten nicht gelesen werden: ${R(k)}`;
      } finally {
        q.value = !1;
      }
    }
    function Ie(U) {
      p.value = U, K.value = !1, C.value.has(Q(U)) ? (C.value.delete(Q(U)), C.value = new Set(C.value)) : ce(U);
    }
    function nn(U) {
      const k = T.value[Q(U)] ?? [], x = H.value.trim().toLowerCase();
      return [...x ? k.filter((Le) => W(Le).toLowerCase().includes(x)) : k].sort((Le, Ae) => W(Le).localeCompare(W(Ae)));
    }
    function ye(U, k) {
      p.value = U, y.value = k, K.value = !1, z.value = "";
    }
    function oe(U) {
      return String(U.uri) === L.value?.entryUri;
    }
    function N(U, k) {
      L.value = { placeUri: String(p.value?.uri), entryUri: String(U.uri), name: k };
    }
    function D(U) {
      return J(Jo(U?.data));
    }
    function J(U) {
      return (U?.pages.toArray() ?? []).map(
        (k) => bu(k.id, k, k.layout.toArray(), k.widgets.toArray())
      );
    }
    const Ve = ne(() => D(y.value)), on = ne(() => ({
      boards: Ve.value.length,
      widgets: Ve.value.reduce((U, k) => U + k.widgetCount, 0),
      sources: Ve.value.reduce((U, k) => U + k.sourceCount, 0)
    }));
    function un(U) {
      const k = D(U);
      return k.length === 0 ? "leer" : `${k.length} ${k.length === 1 ? "Board" : "Boards"}`;
    }
    const ht = ne(() => {
      if (!K.value) return { boards: 0, widgets: 0 };
      const U = J(Jo(b()));
      return {
        boards: U.length,
        widgets: U.reduce((k, x) => k + x.widgetCount, 0)
      };
    });
    async function It(U) {
      z.value = "";
      try {
        const k = await p.value?.getEntityByUri(U.uri), x = A(k?.data ?? U.data);
        N(U, W(U)), o("restored", x);
      } catch (k) {
        z.value = `Laden fehlgeschlagen: ${R(k)}`;
      }
    }
    async function _t(U) {
      const k = p.value;
      if (k) {
        z.value = "";
        try {
          await k.update({ ...U, data: b() }), N(U, W(U)), await fe(k), y.value = nn(k).find((x) => String(x.uri) === String(U.uri));
        } catch (x) {
          z.value = `Speichern fehlgeschlagen: ${R(x)}`;
        }
      }
    }
    function Ln(U) {
      p.value = U, y.value = void 0, K.value = !0, P.value = "", z.value = "";
    }
    async function Fn() {
      const U = p.value, k = P.value.trim();
      if (!(!U || !k)) {
        z.value = "";
        try {
          const x = { name: k, uri: ie(U, k), data: b() };
          await U.create(x), N(x, k), await ce(U), K.value = !1, y.value = nn(U).find((Y) => W(Y) === k);
        } catch (x) {
          z.value = `Anlegen fehlgeschlagen: ${R(x)}`;
        }
      }
    }
    async function Zt(U) {
      const k = p.value;
      if (k) {
        z.value = "";
        try {
          await k.delete(U), oe(U) && (L.value = void 0), y.value === U && (y.value = void 0), await fe(k);
        } catch (x) {
          z.value = `Löschen fehlgeschlagen: ${R(x)}`;
        }
      }
    }
    function Yn(U) {
      const k = typeof U.data == "string" ? U.data : JSON.stringify(U.data), x = URL.createObjectURL(new Blob([k], { type: "application/json" })), Y = document.createElement("a");
      Y.href = x, Y.download = `${W(U)}.json`, Y.click(), URL.revokeObjectURL(x);
    }
    return Hn(ae), Nn(() => w, ae), (U, k) => (m(), $("div", v1, [
      u("aside", h1, [
        Kt(u("input", {
          "onUpdate:modelValue": k[0] || (k[0] = (x) => H.value = x),
          class: "tree__search",
          type: "search",
          placeholder: "Stände filtern",
          "aria-label": "Stände filtern"
        }, null, 512), [
          [Ho, H.value]
        ]),
        u("div", _1, [
          (m(!0), $(Ce, null, Ke(c.value, (x) => (m(), $(Ce, {
            key: Q(x)
          }, [
            u("button", {
              type: "button",
              role: "treeitem",
              "aria-expanded": C.value.has(Q(x)),
              class: Ee(["row", "row--place", { on: p.value === x && !y.value }]),
              onClick: (Y) => Ie(x)
            }, [
              u("span", b1, F(C.value.has(Q(x)) ? "▾" : "▸"), 1),
              u("span", y1, F(x.name), 1),
              u("span", w1, F((T.value[Q(x)] ?? []).length), 1)
            ], 10, m1),
            C.value.has(Q(x)) ? (m(), $(Ce, { key: 0 }, [
              (m(!0), $(Ce, null, Ke(nn(x), (Y) => (m(), $("button", {
                key: String(Y.uri),
                type: "button",
                role: "treeitem",
                class: Ee(["row", "row--entry", { on: y.value === Y }]),
                onClick: (Le) => ye(x, Y)
              }, [
                u("span", {
                  class: Ee(["row__dot", { open: oe(Y) }]),
                  "aria-hidden": "true"
                }, null, 2),
                u("span", x1, F(W(Y)), 1),
                u("span", S1, F(un(Y)), 1)
              ], 10, k1))), 128)),
              nn(x).length === 0 ? (m(), $("p", C1, F(H.value ? "Nichts gefunden" : "Noch kein Stand"), 1)) : re("", !0),
              X(x) ? (m(), $("button", {
                key: 1,
                type: "button",
                class: "row row--add",
                onClick: (Y) => Ln(x)
              }, [...k[8] || (k[8] = [
                u("span", { class: "row__twist" }, "＋", -1),
                u("span", { class: "row__name" }, "Aktuellen Stand ablegen…", -1)
              ])], 8, A1)) : re("", !0)
            ], 64)) : re("", !0)
          ], 64))), 128)),
          c.value.length ? re("", !0) : (m(), $("p", $1, "Keine Speicherorte eingerichtet."))
        ])
      ]),
      u("section", I1, [
        z.value ? (m(), $("p", R1, F(z.value), 1)) : re("", !0),
        K.value ? (m(), $(Ce, { key: 1 }, [
          u("header", E1, [
            k[9] || (k[9] = u("h2", { class: "detail__name" }, "Neuen Stand ablegen", -1)),
            u("span", T1, "in " + F(p.value?.name), 1)
          ]),
          u("form", {
            class: "create",
            onSubmit: Mn(Fn, ["prevent"])
          }, [
            k[12] || (k[12] = u("label", {
              class: "create__label",
              for: "storage-name"
            }, "Name", -1)),
            Kt(u("input", {
              id: "storage-name",
              "onUpdate:modelValue": k[1] || (k[1] = (x) => P.value = x),
              class: "create__input",
              type: "text",
              placeholder: "z. B. bodenfeuchte"
            }, null, 512), [
              [Ho, P.value]
            ]),
            B(h(be), {
              intent: "primary",
              size: "sm",
              type: "submit",
              disabled: !P.value.trim()
            }, {
              default: te(() => [...k[10] || (k[10] = [
                le("Ablegen", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            B(h(be), {
              size: "sm",
              onClick: k[2] || (k[2] = (x) => K.value = !1)
            }, {
              default: te(() => [...k[11] || (k[11] = [
                le("Abbrechen", -1)
              ])]),
              _: 1
            }),
            u("p", L1, " Abgelegt wird der gesamte Arbeitsstand: " + F(ht.value.boards) + " " + F(ht.value.boards === 1 ? "Board" : "Boards") + " mit " + F(ht.value.widgets) + " Widgets, dazu Verbindungen, Datenquellen und Variablen. ", 1)
          ], 32)
        ], 64)) : We.value && !y.value ? (m(), Be(Kn(We.value), {
          key: 2,
          repo: p.value,
          context: T.value[Q(p.value)],
          onClose: k[3] || (k[3] = (x) => fe(p.value))
        }, null, 40, ["repo", "context"])) : y.value ? (m(), $(Ce, { key: 3 }, [
          u("header", O1, [
            u("h2", B1, F(W(y.value)), 1),
            oe(y.value) ? (m(), $("span", D1, "geladen")) : re("", !0),
            u("span", W1, F(p.value?.name) + " · " + F(on.value.boards) + " " + F(on.value.boards === 1 ? "Board" : "Boards") + " · " + F(on.value.widgets) + " Widgets · " + F(on.value.sources) + " Datenquellen ", 1),
            k[17] || (k[17] = u("span", { class: "detail__spacer" }, null, -1)),
            B(h(be), {
              intent: "primary",
              size: "sm",
              onClick: k[4] || (k[4] = (x) => It(y.value))
            }, {
              default: te(() => [...k[13] || (k[13] = [
                le("Laden", -1)
              ])]),
              _: 1
            }),
            X(p.value) ? (m(), Be(h(be), {
              key: 1,
              size: "sm",
              title: "Aktuellen Arbeitsstand hierhin schreiben",
              onClick: k[5] || (k[5] = (x) => _t(y.value))
            }, {
              default: te(() => [...k[14] || (k[14] = [
                le(" Überschreiben ", -1)
              ])]),
              _: 1
            })) : re("", !0),
            B(h(be), {
              size: "sm",
              onClick: k[6] || (k[6] = (x) => Yn(y.value))
            }, {
              default: te(() => [...k[15] || (k[15] = [
                le("Herunterladen", -1)
              ])]),
              _: 1
            }),
            X(p.value) ? (m(), Be(h(be), {
              key: 2,
              intent: "danger",
              size: "sm",
              onClick: k[7] || (k[7] = (x) => Zt(y.value))
            }, {
              default: te(() => [...k[16] || (k[16] = [
                le(" Löschen ", -1)
              ])]),
              _: 1
            })) : re("", !0)
          ]),
          Ve.value.length ? (m(), $("div", V1, [
            (m(!0), $(Ce, null, Ke(Ve.value, (x) => (m(), $("article", {
              key: x.id,
              class: "board"
            }, [
              B(Zo, {
                items: x.items,
                "type-by-id": x.typeById
              }, null, 8, ["items", "type-by-id"]),
              u("div", P1, [
                u("h3", M1, F(x.name), 1),
                u("p", U1, F(x.widgetCount) + " Widgets · " + F(x.sourceCount) + " " + F(x.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1),
                x.kinds.length ? (m(), $("p", N1, F(x.kinds.join(" · ")), 1)) : re("", !0)
              ])
            ]))), 128))
          ])) : (m(), $("p", F1, " In diesem Stand liegt kein Board - er enthält nur Verbindungen, Quellen oder Variablen. "))
        ], 64)) : q.value ? (m(), $("p", z1, "Wird gelesen…")) : (m(), $("p", q1, "Wähle links einen Stand, um zu sehen, was darin liegt."))
      ])
    ]));
  }
}), H1 = /* @__PURE__ */ en(G1, [["__scopeId", "data-v-82d034f3"]]), K1 = { class: "boards" }, Y1 = { class: "boards__panel" }, Z1 = { class: "boards__bar" }, J1 = {
  class: "boards__views",
  role: "tablist",
  "aria-label": "Ansicht"
}, X1 = ["aria-selected"], Q1 = {
  key: 0,
  class: "boards__count"
}, j1 = ["aria-selected"], e0 = {
  key: 0,
  class: "boards__tools"
}, n0 = { class: "boards__body" }, t0 = {
  key: 0,
  class: "boards__empty"
}, r0 = { class: "boards__empty-actions" }, i0 = {
  key: 1,
  class: "boards__grid"
}, o0 = ["aria-label", "onClick", "onKeydown"], a0 = { class: "board__body" }, s0 = { class: "board__name" }, l0 = { class: "board__meta" }, u0 = {
  key: 0,
  class: "board__usage"
}, d0 = {
  key: 1,
  class: "board__kinds"
}, c0 = {
  key: 0,
  class: "board__kind board__kind--more"
}, f0 = ["aria-label", "onClick"], p0 = {
  key: 0,
  class: "boards__nomatch"
}, g0 = /* @__PURE__ */ je({
  __name: "BoardsHome",
  props: {
    pageRepo: {},
    layoutRepo: {}
  },
  setup(g) {
    const _ = g, o = ea(), w = br(), b = ee(""), { usageOf: A, byUsage: c, lastOpenedLabel: T } = vu(), C = ee(w.query.view === "storage" ? "storage" : "boards"), p = Tn(xe(at), (P) => P.pages), y = ne(() => {
      p.value;
      const P = _.pageRepo;
      return P ? P.getAllPageIds().slice().sort(c).map(
        (R) => (
          /* Both halves come off the page itself now. */
          bu(
            R,
            P.getPage(R),
            P.getPage(R)?.layout?.toArray() ?? [],
            P.getPage(R)?.widgets?.toArray() ?? []
          )
        )
      ) : [];
    }), H = ne(() => {
      const P = b.value.trim().toLowerCase();
      return P ? y.value.filter(
        (R) => R.name.toLowerCase().includes(P) || R.description.toLowerCase().includes(P) || R.kinds.some((W) => W.toLowerCase().includes(P))
      ) : y.value;
    });
    function z(P) {
      o.push(`/page/${P}`);
    }
    function q(P) {
      o.push(`/page/${P}/edit`);
    }
    function L() {
      const P = _.pageRepo;
      if (!P || !_.layoutRepo) return;
      const R = ru();
      P.registerPage({
        id: R,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), o.push(`/page/${R}/edit`);
    }
    function K() {
      C.value = "storage";
    }
    return (P, R) => (m(), $("div", K1, [
      u("div", Y1, [
        u("header", Z1, [
          u("div", J1, [
            u("button", {
              type: "button",
              role: "tab",
              "aria-selected": C.value === "boards",
              class: Ee(["boards__view", { on: C.value === "boards" }]),
              onClick: R[0] || (R[0] = (W) => C.value = "boards")
            }, [
              R[4] || (R[4] = le(" Oft genutzt ", -1)),
              y.value.length ? (m(), $("span", Q1, F(y.value.length), 1)) : re("", !0)
            ], 10, X1),
            u("button", {
              type: "button",
              role: "tab",
              "aria-selected": C.value === "storage",
              class: Ee(["boards__view", { on: C.value === "storage" }]),
              onClick: R[1] || (R[1] = (W) => C.value = "storage")
            }, " Speicher ", 10, j1)
          ]),
          C.value === "boards" ? (m(), $("div", e0, [
            Kt(u("input", {
              "onUpdate:modelValue": R[2] || (R[2] = (W) => b.value = W),
              class: "boards__search",
              type: "search",
              placeholder: "Boards filtern",
              "aria-label": "Boards filtern"
            }, null, 512), [
              [Ho, b.value]
            ]),
            B(h(be), {
              intent: "primary",
              size: "sm",
              onClick: L
            }, {
              default: te(() => [...R[5] || (R[5] = [
                le("Neues Board", -1)
              ])]),
              _: 1
            })
          ])) : re("", !0)
        ]),
        u("div", n0, [
          C.value === "boards" && y.value.length === 0 ? (m(), $("div", t0, [
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
            u("div", r0, [
              B(h(be), {
                intent: "primary",
                size: "sm",
                onClick: L
              }, {
                default: te(() => [...R[6] || (R[6] = [
                  le("Neues Board", -1)
                ])]),
                _: 1
              }),
              B(h(be), {
                size: "sm",
                onClick: K
              }, {
                default: te(() => [...R[7] || (R[7] = [
                  le("Aus Speicher öffnen", -1)
                ])]),
                _: 1
              })
            ])
          ])) : C.value === "boards" ? (m(), $("div", i0, [
            (m(!0), $(Ce, null, Ke(H.value, (W) => (m(), $("article", {
              key: W.id,
              class: "board",
              tabindex: "0",
              role: "button",
              "aria-label": `Board ${W.name} öffnen`,
              onClick: (Q) => z(W.id),
              onKeydown: [
                vi((Q) => z(W.id), ["enter"]),
                vi(Mn((Q) => z(W.id), ["prevent"]), ["space"])
              ]
            }, [
              B(Zo, {
                items: W.items,
                "type-by-id": W.typeById
              }, null, 8, ["items", "type-by-id"]),
              u("div", a0, [
                u("h2", s0, F(W.name), 1),
                u("p", l0, [
                  le(F(W.widgetCount) + " " + F(W.widgetCount === 1 ? "Widget" : "Widgets") + " ", 1),
                  W.sourceCount ? (m(), $(Ce, { key: 0 }, [
                    le(" · " + F(W.sourceCount) + " " + F(W.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1)
                  ], 64)) : re("", !0)
                ]),
                h(A)(W.id) ? (m(), $("p", u0, F(h(A)(W.id)?.count) + "× geöffnet · zuletzt " + F(h(T)(W.id)), 1)) : re("", !0),
                W.kinds.length ? (m(), $("ul", d0, [
                  (m(!0), $(Ce, null, Ke(W.kinds.slice(0, 3), (Q) => (m(), $("li", {
                    key: Q,
                    class: "board__kind"
                  }, F(Q), 1))), 128)),
                  W.kinds.length > 3 ? (m(), $("li", c0, " +" + F(W.kinds.length - 3), 1)) : re("", !0)
                ])) : re("", !0)
              ]),
              u("button", {
                class: "board__edit",
                type: "button",
                "aria-label": `Board ${W.name} bearbeiten`,
                onClick: Mn((Q) => q(W.id), ["stop"])
              }, " Bearbeiten ", 8, f0)
            ], 40, o0))), 128)),
            u("button", {
              class: "board board--new",
              type: "button",
              onClick: L
            }, [...R[10] || (R[10] = [
              u("span", {
                class: "board__plus",
                "aria-hidden": "true"
              }, "+", -1),
              u("span", { class: "board__name" }, "Neues Board", -1),
              u("span", { class: "board__meta" }, "Leer starten", -1)
            ])]),
            H.value.length === 0 ? (m(), $("p", p0, " Kein Board passt zu „" + F(b.value) + "“. ", 1)) : re("", !0)
          ])) : (m(), Be(H1, {
            key: 2,
            onRestored: R[3] || (R[3] = (W) => C.value = "boards")
          }))
        ])
      ])
    ]));
  }
}), v0 = /* @__PURE__ */ en(g0, [["__scopeId", "data-v-4c11f243"]]), h0 = { class: "report-container" }, _0 = /* @__PURE__ */ je({
  __name: "ViewReport",
  props: ["params"],
  setup(g) {
    const _ = g, o = br(), w = xe(yr), b = xe(yi), A = ne(() => _.params?.pageid ?? o.params.pageid ?? ""), { recordOpened: c } = vu();
    return Nn(A, (T) => c(T), { immediate: !0 }), (T, C) => (m(), $("div", h0, [
      A.value ? (m(), Be(hu, {
        key: 0,
        pageId: A.value,
        viewMode: !0
      }, null, 8, ["pageId"])) : (m(), Be(v0, {
        key: 1,
        "page-repo": h(w),
        "layout-repo": h(b)
      }, null, 8, ["page-repo", "layout-repo"]))
    ]));
  }
}), Nl = /* @__PURE__ */ en(_0, [["__scopeId", "data-v-3ecae506"]]), m0 = { boards: 0, widgets: 0 };
function yu() {
  const g = xe(yr);
  function _() {
    const b = {};
    if (!g) return b;
    for (const A of g.getAllPageIds()) {
      const c = /* @__PURE__ */ new Set();
      for (const T of g.getPage(A)?.widgets?.toArray() ?? []) {
        const C = T.datasource?.uid;
        if (!C) continue;
        const p = b[C] ??= { boards: 0, widgets: 0 };
        p.widgets++, c.add(C);
      }
      for (const T of c) b[T].boards++;
    }
    return b;
  }
  function o(b) {
    return _()[b] ?? m0;
  }
  function w(b) {
    if (!b.widgets) return "";
    const A = `${b.boards} ${b.boards === 1 ? "Board" : "Boards"}`, c = `${b.widgets} ${b.widgets === 1 ? "Widget" : "Widgets"}`;
    return `${A} · ${c}`;
  }
  return { usageByDatasource: _, usageOf: o, usageLabel: w };
}
const b0 = { class: "tree" }, y0 = { class: "tree__head" }, w0 = { class: "tree__search" }, k0 = { class: "tree__body" }, x0 = {
  key: 0,
  class: "tree__empty"
}, S0 = {
  key: 1,
  class: "tree__list"
}, C0 = ["title", "onClick"], A0 = ["disabled", "onClick"], $0 = { class: "row__name" }, I0 = {
  key: 0,
  class: "row__what"
}, R0 = { class: "row__what" }, E0 = {
  key: 0,
  class: "tree__sources"
}, T0 = { class: "row__twist row__twist--none" }, L0 = ["onClick"], O0 = { class: "row__name" }, B0 = { class: "row__what" }, D0 = {
  key: 0,
  class: "row__usage"
}, W0 = {
  key: 0,
  class: "tree__none"
}, V0 = { class: "confirm__title" }, P0 = { class: "confirm__text" }, M0 = {
  key: 0,
  class: "confirm__text confirm__text--warn"
}, U0 = /* @__PURE__ */ je({
  __name: "DataTree",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ hi(["findEndpoints"], ["update:modelValue"]),
  setup(g, { emit: _ }) {
    const o = jo(g, "modelValue"), w = xe(na), b = xe(at), A = Tn(b, (ae) => ae.connections), c = xe(ta), T = Tn(b, (ae) => ae.datasources), { usageByDatasource: C, usageLabel: p } = yu(), y = _, H = ee(""), z = ee(/* @__PURE__ */ new Set()), q = ne(() => {
      const ae = C(), ce = H.value.trim().toLowerCase(), fe = (...D) => !ce || D.some((J) => (J ?? "").toLowerCase().includes(ce)), Ie = (D) => T.value.filter((J) => J.connection?.uid === D).filter((J) => fe(J.name, J.type, J.uid)).map((J) => ({
        uid: J.uid,
        name: J.name,
        type: J.type,
        usage: p(ae[J.uid] ?? { boards: 0, widgets: 0 })
      })), nn = A.value.map((D) => ({
        /* A connection just created has no type yet, and the row says so by
           showing none - the model has every feature optional for that reason. */
        uid: D.uid ?? "",
        name: D.name ?? "",
        type: D.type ?? "",
        orphan: !1,
        sources: Ie(D.uid),
        /* A connection stays visible while its own name matches, even with no
           source under it - otherwise searching would hide where to add one. */
        itself: fe(D.name, D.type, D.uid)
      })), ye = new Set(A.value.map((D) => D.uid)), oe = T.value.filter((D) => !D.connection || !ye.has(D.connection.uid)).filter((D) => fe(D.name, D.type, D.uid)).map((D) => ({
        uid: D.uid,
        name: D.name,
        type: D.type,
        usage: p(ae[D.uid] ?? { boards: 0, widgets: 0 })
      })), N = nn.filter((D) => D.itself || D.sources.length);
      return oe.length && N.push({
        uid: "",
        name: "Ohne Verbindung",
        type: "",
        orphan: !0,
        sources: oe,
        itself: !0
      }), N;
    }), L = (ae) => !z.value.has(ae);
    function K(ae) {
      const ce = new Set(z.value);
      ce.has(ae) ? ce.delete(ae) : ce.add(ae), z.value = ce;
    }
    const P = (ae, ce) => o.value?.type === ae && o.value?.itemId === ce;
    function R(ae, ce) {
      o.value = { type: ae, itemId: ce };
    }
    function W() {
      R("Connection", w.createConnection("").uid);
    }
    function Q() {
      R("DataSource", c.createDatasource("").uid);
    }
    const ie = ee(void 0);
    function M(ae, ce) {
      ie.value = { type: ae, itemId: ce };
    }
    function X() {
      const ae = ie.value;
      ae && (ae.type === "Connection" ? w.removeConnection(ae.itemId) : c.removeDatasource(ae.itemId), P(ae.type, ae.itemId) && (o.value = void 0), ie.value = void 0);
    }
    const ve = ne(() => {
      const ae = ie.value;
      return ae ? (ae.type === "Connection" ? A.value.find((fe) => fe.uid === ae.itemId) : T.value.find((fe) => fe.uid === ae.itemId))?.name ?? ae.itemId : "";
    }), We = ne(() => {
      const ae = ie.value;
      return !ae || ae.type !== "DataSource" ? "" : p(C()[ae.itemId] ?? { boards: 0, widgets: 0 });
    });
    return (ae, ce) => (m(), $(Ce, null, [
      u("section", b0, [
        u("header", y0, [
          ce[5] || (ce[5] = u("h2", { class: "tree__title" }, "Verbindungen & Daten", -1)),
          B(h(be), {
            intent: "quiet",
            size: "sm",
            title: "Verbindung anlegen",
            onClick: W
          }, {
            default: te(() => [
              B(h(He), {
                name: "add_link",
                size: "sm"
              })
            ]),
            _: 1
          }),
          B(h(be), {
            intent: "quiet",
            size: "sm",
            title: "Datenquelle anlegen",
            onClick: Q
          }, {
            default: te(() => [
              B(h(He), {
                name: "add",
                size: "sm"
              })
            ]),
            _: 1
          }),
          B(h(be), {
            intent: "quiet",
            size: "sm",
            title: "Endpunkte suchen",
            onClick: ce[0] || (ce[0] = (fe) => y("findEndpoints"))
          }, {
            default: te(() => [
              B(h(He), {
                name: "travel_explore",
                size: "sm"
              })
            ]),
            _: 1
          })
        ]),
        u("div", w0, [
          B(h(gn), {
            modelValue: H.value,
            "onUpdate:modelValue": ce[1] || (ce[1] = (fe) => H.value = fe),
            type: "search",
            placeholder: "Suchen…",
            stacked: ""
          }, null, 8, ["modelValue"])
        ]),
        u("div", k0, [
          q.value.length ? (m(), $("ul", S0, [
            (m(!0), $(Ce, null, Ke(q.value, (fe) => (m(), $("li", {
              key: fe.uid || "loose"
            }, [
              u("div", {
                class: Ee(["row", "row--connection", { "row--on": P("Connection", fe.uid) }])
              }, [
                u("button", {
                  type: "button",
                  class: "row__twist",
                  title: L(fe.uid) ? "Zuklappen" : "Aufklappen",
                  onClick: (Ie) => K(fe.uid)
                }, [
                  B(h(He), {
                    name: L(fe.uid) ? "expand_more" : "chevron_right",
                    size: "sm"
                  }, null, 8, ["name"])
                ], 8, C0),
                u("button", {
                  type: "button",
                  class: "row__body",
                  disabled: fe.orphan,
                  onClick: (Ie) => !fe.orphan && R("Connection", fe.uid)
                }, [
                  u("span", $0, F(fe.name), 1),
                  fe.type ? (m(), $("span", I0, F(fe.type), 1)) : re("", !0),
                  u("span", R0, F(fe.sources.length), 1)
                ], 8, A0),
                fe.orphan ? re("", !0) : (m(), Be(h(be), {
                  key: 0,
                  intent: "quiet",
                  size: "sm",
                  title: "Verbindung löschen",
                  onClick: Mn((Ie) => M("Connection", fe.uid), ["stop"])
                }, {
                  default: te(() => [
                    B(h(He), {
                      name: "delete",
                      size: "sm"
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"]))
              ], 2),
              L(fe.uid) ? (m(), $("ul", E0, [
                (m(!0), $(Ce, null, Ke(fe.sources, (Ie) => (m(), $("li", {
                  key: Ie.uid
                }, [
                  u("div", {
                    class: Ee(["row", "row--source", { "row--on": P("DataSource", Ie.uid) }])
                  }, [
                    u("span", T0, [
                      B(h(He), {
                        name: "database",
                        size: "sm"
                      })
                    ]),
                    u("button", {
                      type: "button",
                      class: "row__body",
                      onClick: (nn) => R("DataSource", Ie.uid)
                    }, [
                      u("span", O0, F(Ie.name), 1),
                      u("span", B0, F(Ie.type), 1),
                      Ie.usage ? (m(), $("span", D0, F(Ie.usage), 1)) : re("", !0)
                    ], 8, L0),
                    B(h(be), {
                      intent: "quiet",
                      size: "sm",
                      title: "Datenquelle löschen",
                      onClick: Mn((nn) => M("DataSource", Ie.uid), ["stop"])
                    }, {
                      default: te(() => [
                        B(h(He), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ], 2)
                ]))), 128)),
                !fe.sources.length && !fe.orphan ? (m(), $("li", W0, " Keine Datenquelle an dieser Verbindung. ")) : re("", !0)
              ])) : re("", !0)
            ]))), 128))
          ])) : (m(), $("p", x0, [
            H.value ? (m(), $(Ce, { key: 0 }, [
              le("Nichts gefunden.")
            ], 64)) : (m(), $(Ce, { key: 1 }, [
              le("Noch keine Verbindung. Lege eine an, um Daten zu lesen.")
            ], 64))
          ]))
        ])
      ]),
      B(h(Ko), {
        "model-value": !!ie.value,
        size: "sm",
        "onUpdate:modelValue": ce[3] || (ce[3] = (fe) => ie.value = void 0),
        onCancel: ce[4] || (ce[4] = (fe) => ie.value = void 0)
      }, {
        header: te(() => [
          B(h(He), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          u("h2", V0, F(ie.value?.type === "Connection" ? "Verbindung löschen" : "Datenquelle löschen"), 1)
        ]),
        actions: te(() => [
          B(h(be), {
            intent: "quiet",
            onClick: ce[2] || (ce[2] = (fe) => ie.value = void 0)
          }, {
            default: te(() => [...ce[6] || (ce[6] = [
              le("Abbrechen", -1)
            ])]),
            _: 1
          }),
          B(h(be), {
            intent: "danger",
            onClick: X
          }, {
            default: te(() => [...ce[7] || (ce[7] = [
              le("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: te(() => [
          u("p", P0, " „" + F(ve.value) + "“ wird entfernt. Das lässt sich nicht rückgängig machen. ", 1),
          We.value ? (m(), $("p", M0, " Verwendet in " + F(We.value) + " — die lesen danach ins Leere. ", 1)) : re("", !0)
        ]),
        _: 1
      }, 8, ["model-value"])
    ], 64));
  }
}), N0 = /* @__PURE__ */ en(U0, [["__scopeId", "data-v-19322c5a"]]);
var pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var F0 = hr.exports, Fl;
function z0() {
  return Fl || (Fl = 1, (function(g, _) {
    (function() {
      var o, w = "4.17.21", b = 200, A = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", T = "Invalid `variable` option passed into `_.template`", C = "__lodash_hash_undefined__", p = 500, y = "__lodash_placeholder__", H = 1, z = 2, q = 4, L = 1, K = 2, P = 1, R = 2, W = 4, Q = 8, ie = 16, M = 32, X = 64, ve = 128, We = 256, ae = 512, ce = 30, fe = "...", Ie = 800, nn = 16, ye = 1, oe = 2, N = 3, D = 1 / 0, J = 9007199254740991, Ve = 17976931348623157e292, on = NaN, un = 4294967295, ht = un - 1, It = un >>> 1, _t = [
        ["ary", ve],
        ["bind", P],
        ["bindKey", R],
        ["curry", Q],
        ["curryRight", ie],
        ["flip", ae],
        ["partial", M],
        ["partialRight", X],
        ["rearg", We]
      ], Ln = "[object Arguments]", Fn = "[object Array]", Zt = "[object AsyncFunction]", Yn = "[object Boolean]", U = "[object Date]", k = "[object DOMException]", x = "[object Error]", Y = "[object Function]", Le = "[object GeneratorFunction]", Ae = "[object Map]", kn = "[object Number]", vn = "[object Null]", On = "[object Object]", ra = "[object Promise]", wu = "[object Proxy]", Jt = "[object RegExp]", Bn = "[object Set]", Xt = "[object String]", wr = "[object Symbol]", ku = "[object Undefined]", Qt = "[object WeakMap]", xu = "[object WeakSet]", jt = "[object ArrayBuffer]", Rt = "[object DataView]", wi = "[object Float32Array]", ki = "[object Float64Array]", xi = "[object Int8Array]", Si = "[object Int16Array]", Ci = "[object Int32Array]", Ai = "[object Uint8Array]", $i = "[object Uint8ClampedArray]", Ii = "[object Uint16Array]", Ri = "[object Uint32Array]", Su = /\b__p \+= '';/g, Cu = /\b(__p \+=) '' \+/g, Au = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ia = /&(?:amp|lt|gt|quot|#39);/g, oa = /[&<>"']/g, $u = RegExp(ia.source), Iu = RegExp(oa.source), Ru = /<%-([\s\S]+?)%>/g, Eu = /<%([\s\S]+?)%>/g, aa = /<%=([\s\S]+?)%>/g, Tu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lu = /^\w*$/, Ou = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ei = /[\\^$.*+?()[\]{}|]/g, Bu = RegExp(Ei.source), Ti = /^\s+/, Du = /\s/, Wu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Vu = /\{\n\/\* \[wrapped with (.+)\] \*/, Pu = /,? & /, Mu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Uu = /[()=,{}\[\]\/\s]/, Nu = /\\(\\)?/g, Fu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, sa = /\w*$/, zu = /^[-+]0x[0-9a-f]+$/i, qu = /^0b[01]+$/i, Gu = /^\[object .+?Constructor\]$/, Hu = /^0o[0-7]+$/i, Ku = /^(?:0|[1-9]\d*)$/, Yu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, kr = /($^)/, Zu = /['\n\r\u2028\u2029\\]/g, xr = "\\ud800-\\udfff", Ju = "\\u0300-\\u036f", Xu = "\\ufe20-\\ufe2f", Qu = "\\u20d0-\\u20ff", la = Ju + Xu + Qu, ua = "\\u2700-\\u27bf", da = "a-z\\xdf-\\xf6\\xf8-\\xff", ju = "\\xac\\xb1\\xd7\\xf7", ed = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", nd = "\\u2000-\\u206f", td = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ca = "A-Z\\xc0-\\xd6\\xd8-\\xde", fa = "\\ufe0e\\ufe0f", pa = ju + ed + nd + td, Li = "['’]", rd = "[" + xr + "]", ga = "[" + pa + "]", Sr = "[" + la + "]", va = "\\d+", id = "[" + ua + "]", ha = "[" + da + "]", _a = "[^" + xr + pa + va + ua + da + ca + "]", Oi = "\\ud83c[\\udffb-\\udfff]", od = "(?:" + Sr + "|" + Oi + ")", ma = "[^" + xr + "]", Bi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Di = "[\\ud800-\\udbff][\\udc00-\\udfff]", Et = "[" + ca + "]", ba = "\\u200d", ya = "(?:" + ha + "|" + _a + ")", ad = "(?:" + Et + "|" + _a + ")", wa = "(?:" + Li + "(?:d|ll|m|re|s|t|ve))?", ka = "(?:" + Li + "(?:D|LL|M|RE|S|T|VE))?", xa = od + "?", Sa = "[" + fa + "]?", sd = "(?:" + ba + "(?:" + [ma, Bi, Di].join("|") + ")" + Sa + xa + ")*", ld = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ud = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ca = Sa + xa + sd, dd = "(?:" + [id, Bi, Di].join("|") + ")" + Ca, cd = "(?:" + [ma + Sr + "?", Sr, Bi, Di, rd].join("|") + ")", fd = RegExp(Li, "g"), pd = RegExp(Sr, "g"), Wi = RegExp(Oi + "(?=" + Oi + ")|" + cd + Ca, "g"), gd = RegExp([
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
      ], md = -1, Pe = {};
      Pe[wi] = Pe[ki] = Pe[xi] = Pe[Si] = Pe[Ci] = Pe[Ai] = Pe[$i] = Pe[Ii] = Pe[Ri] = !0, Pe[Ln] = Pe[Fn] = Pe[jt] = Pe[Yn] = Pe[Rt] = Pe[U] = Pe[x] = Pe[Y] = Pe[Ae] = Pe[kn] = Pe[On] = Pe[Jt] = Pe[Bn] = Pe[Xt] = Pe[Qt] = !1;
      var De = {};
      De[Ln] = De[Fn] = De[jt] = De[Rt] = De[Yn] = De[U] = De[wi] = De[ki] = De[xi] = De[Si] = De[Ci] = De[Ae] = De[kn] = De[On] = De[Jt] = De[Bn] = De[Xt] = De[wr] = De[Ai] = De[$i] = De[Ii] = De[Ri] = !0, De[x] = De[Y] = De[Qt] = !1;
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
      }, xd = parseFloat, Sd = parseInt, Aa = typeof pi == "object" && pi && pi.Object === Object && pi, Cd = typeof self == "object" && self && self.Object === Object && self, Ze = Aa || Cd || Function("return this")(), Vi = _ && !_.nodeType && _, mt = Vi && !0 && g && !g.nodeType && g, $a = mt && mt.exports === Vi, Pi = $a && Aa.process, xn = (function() {
        try {
          var f = mt && mt.require && mt.require("util").types;
          return f || Pi && Pi.binding && Pi.binding("util");
        } catch {
        }
      })(), Ia = xn && xn.isArrayBuffer, Ra = xn && xn.isDate, Ea = xn && xn.isMap, Ta = xn && xn.isRegExp, La = xn && xn.isSet, Oa = xn && xn.isTypedArray;
      function hn(f, I, S) {
        switch (S.length) {
          case 0:
            return f.call(I);
          case 1:
            return f.call(I, S[0]);
          case 2:
            return f.call(I, S[0], S[1]);
          case 3:
            return f.call(I, S[0], S[1], S[2]);
        }
        return f.apply(I, S);
      }
      function Ad(f, I, S, Z) {
        for (var pe = -1, $e = f == null ? 0 : f.length; ++pe < $e; ) {
          var qe = f[pe];
          I(Z, qe, S(qe), f);
        }
        return Z;
      }
      function Sn(f, I) {
        for (var S = -1, Z = f == null ? 0 : f.length; ++S < Z && I(f[S], S, f) !== !1; )
          ;
        return f;
      }
      function $d(f, I) {
        for (var S = f == null ? 0 : f.length; S-- && I(f[S], S, f) !== !1; )
          ;
        return f;
      }
      function Ba(f, I) {
        for (var S = -1, Z = f == null ? 0 : f.length; ++S < Z; )
          if (!I(f[S], S, f))
            return !1;
        return !0;
      }
      function st(f, I) {
        for (var S = -1, Z = f == null ? 0 : f.length, pe = 0, $e = []; ++S < Z; ) {
          var qe = f[S];
          I(qe, S, f) && ($e[pe++] = qe);
        }
        return $e;
      }
      function Cr(f, I) {
        var S = f == null ? 0 : f.length;
        return !!S && Tt(f, I, 0) > -1;
      }
      function Mi(f, I, S) {
        for (var Z = -1, pe = f == null ? 0 : f.length; ++Z < pe; )
          if (S(I, f[Z]))
            return !0;
        return !1;
      }
      function Me(f, I) {
        for (var S = -1, Z = f == null ? 0 : f.length, pe = Array(Z); ++S < Z; )
          pe[S] = I(f[S], S, f);
        return pe;
      }
      function lt(f, I) {
        for (var S = -1, Z = I.length, pe = f.length; ++S < Z; )
          f[pe + S] = I[S];
        return f;
      }
      function Ui(f, I, S, Z) {
        var pe = -1, $e = f == null ? 0 : f.length;
        for (Z && $e && (S = f[++pe]); ++pe < $e; )
          S = I(S, f[pe], pe, f);
        return S;
      }
      function Id(f, I, S, Z) {
        var pe = f == null ? 0 : f.length;
        for (Z && pe && (S = f[--pe]); pe--; )
          S = I(S, f[pe], pe, f);
        return S;
      }
      function Ni(f, I) {
        for (var S = -1, Z = f == null ? 0 : f.length; ++S < Z; )
          if (I(f[S], S, f))
            return !0;
        return !1;
      }
      var Rd = Fi("length");
      function Ed(f) {
        return f.split("");
      }
      function Td(f) {
        return f.match(Mu) || [];
      }
      function Da(f, I, S) {
        var Z;
        return S(f, function(pe, $e, qe) {
          if (I(pe, $e, qe))
            return Z = $e, !1;
        }), Z;
      }
      function Ar(f, I, S, Z) {
        for (var pe = f.length, $e = S + (Z ? 1 : -1); Z ? $e-- : ++$e < pe; )
          if (I(f[$e], $e, f))
            return $e;
        return -1;
      }
      function Tt(f, I, S) {
        return I === I ? zd(f, I, S) : Ar(f, Wa, S);
      }
      function Ld(f, I, S, Z) {
        for (var pe = S - 1, $e = f.length; ++pe < $e; )
          if (Z(f[pe], I))
            return pe;
        return -1;
      }
      function Wa(f) {
        return f !== f;
      }
      function Va(f, I) {
        var S = f == null ? 0 : f.length;
        return S ? qi(f, I) / S : on;
      }
      function Fi(f) {
        return function(I) {
          return I == null ? o : I[f];
        };
      }
      function zi(f) {
        return function(I) {
          return f == null ? o : f[I];
        };
      }
      function Pa(f, I, S, Z, pe) {
        return pe(f, function($e, qe, Oe) {
          S = Z ? (Z = !1, $e) : I(S, $e, qe, Oe);
        }), S;
      }
      function Od(f, I) {
        var S = f.length;
        for (f.sort(I); S--; )
          f[S] = f[S].value;
        return f;
      }
      function qi(f, I) {
        for (var S, Z = -1, pe = f.length; ++Z < pe; ) {
          var $e = I(f[Z]);
          $e !== o && (S = S === o ? $e : S + $e);
        }
        return S;
      }
      function Gi(f, I) {
        for (var S = -1, Z = Array(f); ++S < f; )
          Z[S] = I(S);
        return Z;
      }
      function Bd(f, I) {
        return Me(I, function(S) {
          return [S, f[S]];
        });
      }
      function Ma(f) {
        return f && f.slice(0, za(f) + 1).replace(Ti, "");
      }
      function _n(f) {
        return function(I) {
          return f(I);
        };
      }
      function Hi(f, I) {
        return Me(I, function(S) {
          return f[S];
        });
      }
      function er(f, I) {
        return f.has(I);
      }
      function Ua(f, I) {
        for (var S = -1, Z = f.length; ++S < Z && Tt(I, f[S], 0) > -1; )
          ;
        return S;
      }
      function Na(f, I) {
        for (var S = f.length; S-- && Tt(I, f[S], 0) > -1; )
          ;
        return S;
      }
      function Dd(f, I) {
        for (var S = f.length, Z = 0; S--; )
          f[S] === I && ++Z;
        return Z;
      }
      var Wd = zi(bd), Vd = zi(yd);
      function Pd(f) {
        return "\\" + kd[f];
      }
      function Md(f, I) {
        return f == null ? o : f[I];
      }
      function Lt(f) {
        return vd.test(f);
      }
      function Ud(f) {
        return hd.test(f);
      }
      function Nd(f) {
        for (var I, S = []; !(I = f.next()).done; )
          S.push(I.value);
        return S;
      }
      function Ki(f) {
        var I = -1, S = Array(f.size);
        return f.forEach(function(Z, pe) {
          S[++I] = [pe, Z];
        }), S;
      }
      function Fa(f, I) {
        return function(S) {
          return f(I(S));
        };
      }
      function ut(f, I) {
        for (var S = -1, Z = f.length, pe = 0, $e = []; ++S < Z; ) {
          var qe = f[S];
          (qe === I || qe === y) && (f[S] = y, $e[pe++] = S);
        }
        return $e;
      }
      function $r(f) {
        var I = -1, S = Array(f.size);
        return f.forEach(function(Z) {
          S[++I] = Z;
        }), S;
      }
      function Fd(f) {
        var I = -1, S = Array(f.size);
        return f.forEach(function(Z) {
          S[++I] = [Z, Z];
        }), S;
      }
      function zd(f, I, S) {
        for (var Z = S - 1, pe = f.length; ++Z < pe; )
          if (f[Z] === I)
            return Z;
        return -1;
      }
      function qd(f, I, S) {
        for (var Z = S + 1; Z--; )
          if (f[Z] === I)
            return Z;
        return Z;
      }
      function Ot(f) {
        return Lt(f) ? Hd(f) : Rd(f);
      }
      function Dn(f) {
        return Lt(f) ? Kd(f) : Ed(f);
      }
      function za(f) {
        for (var I = f.length; I-- && Du.test(f.charAt(I)); )
          ;
        return I;
      }
      var Gd = zi(wd);
      function Hd(f) {
        for (var I = Wi.lastIndex = 0; Wi.test(f); )
          ++I;
        return I;
      }
      function Kd(f) {
        return f.match(Wi) || [];
      }
      function Yd(f) {
        return f.match(gd) || [];
      }
      var Zd = (function f(I) {
        I = I == null ? Ze : Bt.defaults(Ze.Object(), I, Bt.pick(Ze, _d));
        var S = I.Array, Z = I.Date, pe = I.Error, $e = I.Function, qe = I.Math, Oe = I.Object, Yi = I.RegExp, Jd = I.String, Cn = I.TypeError, Ir = S.prototype, Xd = $e.prototype, Dt = Oe.prototype, Rr = I["__core-js_shared__"], Er = Xd.toString, Te = Dt.hasOwnProperty, Qd = 0, qa = (function() {
          var e = /[^.]+$/.exec(Rr && Rr.keys && Rr.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Tr = Dt.toString, jd = Er.call(Oe), ec = Ze._, nc = Yi(
          "^" + Er.call(Te).replace(Ei, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Lr = $a ? I.Buffer : o, dt = I.Symbol, Or = I.Uint8Array, Ga = Lr ? Lr.allocUnsafe : o, Br = Fa(Oe.getPrototypeOf, Oe), Ha = Oe.create, Ka = Dt.propertyIsEnumerable, Dr = Ir.splice, Ya = dt ? dt.isConcatSpreadable : o, nr = dt ? dt.iterator : o, bt = dt ? dt.toStringTag : o, Wr = (function() {
          try {
            var e = St(Oe, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), tc = I.clearTimeout !== Ze.clearTimeout && I.clearTimeout, rc = Z && Z.now !== Ze.Date.now && Z.now, ic = I.setTimeout !== Ze.setTimeout && I.setTimeout, Vr = qe.ceil, Pr = qe.floor, Zi = Oe.getOwnPropertySymbols, oc = Lr ? Lr.isBuffer : o, Za = I.isFinite, ac = Ir.join, sc = Fa(Oe.keys, Oe), Ge = qe.max, tn = qe.min, lc = Z.now, uc = I.parseInt, Ja = qe.random, dc = Ir.reverse, Ji = St(I, "DataView"), tr = St(I, "Map"), Xi = St(I, "Promise"), Wt = St(I, "Set"), rr = St(I, "WeakMap"), ir = St(Oe, "create"), Mr = rr && new rr(), Vt = {}, cc = Ct(Ji), fc = Ct(tr), pc = Ct(Xi), gc = Ct(Wt), vc = Ct(rr), Ur = dt ? dt.prototype : o, or = Ur ? Ur.valueOf : o, Xa = Ur ? Ur.toString : o;
        function a(e) {
          if (Ne(e) && !ge(e) && !(e instanceof ke)) {
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
            if (!Ue(n))
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
          var e = this.__wrapped__.value(), n = this.__dir__, t = ge(e), r = n < 0, i = t ? e.length : 0, s = Tf(0, i, this.__views__), l = s.start, d = s.end, v = d - l, E = r ? d : l - 1, O = this.__iteratees__, V = O.length, G = 0, j = tn(v, this.__takeCount__);
          if (!t || !r && i == v && j == v)
            return ws(e, this.__actions__);
          var ue = [];
          e:
            for (; v-- && G < j; ) {
              E += n;
              for (var _e = -1, de = e[E]; ++_e < V; ) {
                var we = O[_e], Se = we.iteratee, yn = we.type, ln = Se(de);
                if (yn == oe)
                  de = ln;
                else if (!ln) {
                  if (yn == ye)
                    continue e;
                  break e;
                }
              }
              ue[G++] = de;
            }
          return ue;
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
        function Zn(e) {
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
        function $c(e) {
          return Fr(this.__data__, e) > -1;
        }
        function Ic(e, n) {
          var t = this.__data__, r = Fr(t, e);
          return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
        }
        Zn.prototype.clear = Sc, Zn.prototype.delete = Cc, Zn.prototype.get = Ac, Zn.prototype.has = $c, Zn.prototype.set = Ic;
        function Jn(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function Rc() {
          this.size = 0, this.__data__ = {
            hash: new yt(),
            map: new (tr || Zn)(),
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
        function Lc(e) {
          return ei(this, e).has(e);
        }
        function Oc(e, n) {
          var t = ei(this, e), r = t.size;
          return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
        }
        Jn.prototype.clear = Rc, Jn.prototype.delete = Ec, Jn.prototype.get = Tc, Jn.prototype.has = Lc, Jn.prototype.set = Oc;
        function wt(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.__data__ = new Jn(); ++n < t; )
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
          var n = this.__data__ = new Zn(e);
          this.size = n.size;
        }
        function Wc() {
          this.__data__ = new Zn(), this.size = 0;
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
          if (t instanceof Zn) {
            var r = t.__data__;
            if (!tr || r.length < b - 1)
              return r.push([e, n]), this.size = ++t.size, this;
            t = this.__data__ = new Jn(r);
          }
          return t.set(e, n), this.size = t.size, this;
        }
        Wn.prototype.clear = Wc, Wn.prototype.delete = Vc, Wn.prototype.get = Pc, Wn.prototype.has = Mc, Wn.prototype.set = Uc;
        function Qa(e, n) {
          var t = ge(e), r = !t && At(e), i = !t && !r && vt(e), s = !t && !r && !i && Ft(e), l = t || r || i || s, d = l ? Gi(e.length, Jd) : [], v = d.length;
          for (var E in e)
            (n || Te.call(e, E)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
            (E == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            i && (E == "offset" || E == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            s && (E == "buffer" || E == "byteLength" || E == "byteOffset") || // Skip index properties.
            et(E, v))) && d.push(E);
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
          (t !== o && !Vn(e[n], t) || t === o && !(n in e)) && Xn(e, n, t);
        }
        function ar(e, n, t) {
          var r = e[n];
          (!(Te.call(e, n) && Vn(r, t)) || t === o && !(n in e)) && Xn(e, n, t);
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
          return e && qn(n, Ye(n), e);
        }
        function qc(e, n) {
          return e && qn(n, fn(n), e);
        }
        function Xn(e, n, t) {
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
        function $n(e, n, t, r, i, s) {
          var l, d = n & H, v = n & z, E = n & q;
          if (t && (l = i ? t(e, r, i, s) : t(e)), l !== o)
            return l;
          if (!Ue(e))
            return e;
          var O = ge(e);
          if (O) {
            if (l = Of(e), !d)
              return dn(e, l);
          } else {
            var V = rn(e), G = V == Y || V == Le;
            if (vt(e))
              return Ss(e, d);
            if (V == On || V == Ln || G && !i) {
              if (l = v || G ? {} : zs(e), !d)
                return v ? kf(e, qc(l, e)) : wf(e, es(l, e));
            } else {
              if (!De[V])
                return i ? e : {};
              l = Bf(e, V, d);
            }
          }
          s || (s = new Wn());
          var j = s.get(e);
          if (j)
            return j;
          s.set(e, l), ml(e) ? e.forEach(function(de) {
            l.add($n(de, n, t, de, e, s));
          }) : hl(e) && e.forEach(function(de, we) {
            l.set(we, $n(de, n, t, we, e, s));
          });
          var ue = E ? v ? yo : bo : v ? fn : Ye, _e = O ? o : ue(e);
          return Sn(_e || e, function(de, we) {
            _e && (we = de, de = e[we]), ar(l, we, $n(de, n, t, we, e, s));
          }), l;
        }
        function Gc(e) {
          var n = Ye(e);
          return function(t) {
            return ns(t, e, n);
          };
        }
        function ns(e, n, t) {
          var r = t.length;
          if (e == null)
            return !r;
          for (e = Oe(e); r--; ) {
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
          var i = -1, s = Cr, l = !0, d = e.length, v = [], E = n.length;
          if (!d)
            return v;
          t && (n = Me(n, _n(t))), r ? (s = Mi, l = !1) : n.length >= b && (s = er, l = !1, n = new wt(n));
          e:
            for (; ++i < d; ) {
              var O = e[i], V = t == null ? O : t(O);
              if (O = r || O !== 0 ? O : 0, l && V === V) {
                for (var G = E; G--; )
                  if (n[G] === V)
                    continue e;
                v.push(O);
              } else s(n, V, r) || v.push(O);
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
        function Je(e, n, t, r, i) {
          var s = -1, l = e.length;
          for (t || (t = Wf), i || (i = []); ++s < l; ) {
            var d = e[s];
            n > 0 && t(d) ? n > 1 ? Je(d, n - 1, t, r, i) : lt(i, d) : r || (i[i.length] = d);
          }
          return i;
        }
        var eo = Es(), os = Es(!0);
        function zn(e, n) {
          return e && eo(e, n, Ye);
        }
        function no(e, n) {
          return e && os(e, n, Ye);
        }
        function qr(e, n) {
          return st(n, function(t) {
            return nt(e[t]);
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
        function an(e) {
          return e == null ? e === o ? ku : vn : bt && bt in Oe(e) ? Ef(e) : zf(e);
        }
        function to(e, n) {
          return e > n;
        }
        function Yc(e, n) {
          return e != null && Te.call(e, n);
        }
        function Zc(e, n) {
          return e != null && n in Oe(e);
        }
        function Jc(e, n, t) {
          return e >= tn(n, t) && e < Ge(n, t);
        }
        function ro(e, n, t) {
          for (var r = t ? Mi : Cr, i = e[0].length, s = e.length, l = s, d = S(s), v = 1 / 0, E = []; l--; ) {
            var O = e[l];
            l && n && (O = Me(O, _n(n))), v = tn(O.length, v), d[l] = !t && (n || i >= 120 && O.length >= 120) ? new wt(l && O) : o;
          }
          O = e[0];
          var V = -1, G = d[0];
          e:
            for (; ++V < i && E.length < v; ) {
              var j = O[V], ue = n ? n(j) : j;
              if (j = t || j !== 0 ? j : 0, !(G ? er(G, ue) : r(E, ue, t))) {
                for (l = s; --l; ) {
                  var _e = d[l];
                  if (!(_e ? er(_e, ue) : r(e[l], ue, t)))
                    continue e;
                }
                G && G.push(ue), E.push(j);
              }
            }
          return E;
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
          return Ne(e) && an(e) == Ln;
        }
        function Qc(e) {
          return Ne(e) && an(e) == jt;
        }
        function jc(e) {
          return Ne(e) && an(e) == U;
        }
        function ur(e, n, t, r, i) {
          return e === n ? !0 : e == null || n == null || !Ne(e) && !Ne(n) ? e !== e && n !== n : ef(e, n, t, r, ur, i);
        }
        function ef(e, n, t, r, i, s) {
          var l = ge(e), d = ge(n), v = l ? Fn : rn(e), E = d ? Fn : rn(n);
          v = v == Ln ? On : v, E = E == Ln ? On : E;
          var O = v == On, V = E == On, G = v == E;
          if (G && vt(e)) {
            if (!vt(n))
              return !1;
            l = !0, O = !1;
          }
          if (G && !O)
            return s || (s = new Wn()), l || Ft(e) ? Us(e, n, t, r, i, s) : If(e, n, v, t, r, i, s);
          if (!(t & L)) {
            var j = O && Te.call(e, "__wrapped__"), ue = V && Te.call(n, "__wrapped__");
            if (j || ue) {
              var _e = j ? e.value() : e, de = ue ? n.value() : n;
              return s || (s = new Wn()), i(_e, de, t, r, s);
            }
          }
          return G ? (s || (s = new Wn()), Rf(e, n, t, r, i, s)) : !1;
        }
        function nf(e) {
          return Ne(e) && rn(e) == Ae;
        }
        function io(e, n, t, r) {
          var i = t.length, s = i, l = !r;
          if (e == null)
            return !s;
          for (e = Oe(e); i--; ) {
            var d = t[i];
            if (l && d[2] ? d[1] !== e[d[0]] : !(d[0] in e))
              return !1;
          }
          for (; ++i < s; ) {
            d = t[i];
            var v = d[0], E = e[v], O = d[1];
            if (l && d[2]) {
              if (E === o && !(v in e))
                return !1;
            } else {
              var V = new Wn();
              if (r)
                var G = r(E, O, v, e, n, V);
              if (!(G === o ? ur(O, E, L | K, r, V) : G))
                return !1;
            }
          }
          return !0;
        }
        function ls(e) {
          if (!Ue(e) || Pf(e))
            return !1;
          var n = nt(e) ? nc : Gu;
          return n.test(Ct(e));
        }
        function tf(e) {
          return Ne(e) && an(e) == Jt;
        }
        function rf(e) {
          return Ne(e) && rn(e) == Bn;
        }
        function of(e) {
          return Ne(e) && si(e.length) && !!Pe[an(e)];
        }
        function us(e) {
          return typeof e == "function" ? e : e == null ? pn : typeof e == "object" ? ge(e) ? fs(e[0], e[1]) : cs(e) : Tl(e);
        }
        function oo(e) {
          if (!fr(e))
            return sc(e);
          var n = [];
          for (var t in Oe(e))
            Te.call(e, t) && t != "constructor" && n.push(t);
          return n;
        }
        function af(e) {
          if (!Ue(e))
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
            return r === o && r === n ? Do(t, e) : ur(n, r, L | K);
          };
        }
        function Gr(e, n, t, r, i) {
          e !== n && eo(n, function(s, l) {
            if (i || (i = new Wn()), Ue(s))
              sf(e, n, l, t, Gr, r, i);
            else {
              var d = r ? r(Ao(e, l), s, l + "", e, n, i) : o;
              d === o && (d = s), Qi(e, l, d);
            }
          }, fn);
        }
        function sf(e, n, t, r, i, s, l) {
          var d = Ao(e, t), v = Ao(n, t), E = l.get(v);
          if (E) {
            Qi(e, t, E);
            return;
          }
          var O = s ? s(d, v, t + "", e, n, l) : o, V = O === o;
          if (V) {
            var G = ge(v), j = !G && vt(v), ue = !G && !j && Ft(v);
            O = v, G || j || ue ? ge(d) ? O = d : Fe(d) ? O = dn(d) : j ? (V = !1, O = Ss(v, !0)) : ue ? (V = !1, O = Cs(v, !0)) : O = [] : gr(v) || At(v) ? (O = d, At(d) ? O = wl(d) : (!Ue(d) || nt(d)) && (O = zs(v))) : V = !1;
          }
          V && (l.set(v, O), i(O, v, r, s, l), l.delete(v)), Qi(e, t, O);
        }
        function ps(e, n) {
          var t = e.length;
          if (t)
            return n += n < 0 ? t : 0, et(n, t) ? e[n] : o;
        }
        function gs(e, n, t) {
          n.length ? n = Me(n, function(s) {
            return ge(s) ? function(l) {
              return xt(l, s.length === 1 ? s[0] : s);
            } : s;
          }) : n = [pn];
          var r = -1;
          n = Me(n, _n(se()));
          var i = ds(e, function(s, l, d) {
            var v = Me(n, function(E) {
              return E(s);
            });
            return { criteria: v, index: ++r, value: s };
          });
          return Od(i, function(s, l) {
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
          var i = r ? Ld : Tt, s = -1, l = n.length, d = e;
          for (e === n && (n = dn(n)), t && (d = Me(e, _n(t))); ++s < l; )
            for (var v = 0, E = n[s], O = t ? t(E) : E; (v = i(d, O, v, r)) > -1; )
              d !== e && Dr.call(d, v, 1), Dr.call(e, v, 1);
          return e;
        }
        function hs(e, n) {
          for (var t = e ? n.length : 0, r = t - 1; t--; ) {
            var i = n[t];
            if (t == r || i !== s) {
              var s = i;
              et(i) ? Dr.call(e, i, 1) : fo(e, i);
            }
          }
          return e;
        }
        function lo(e, n) {
          return e + Pr(Ja() * (n - e + 1));
        }
        function df(e, n, t, r) {
          for (var i = -1, s = Ge(Vr((n - e) / (t || 1)), 0), l = S(s); s--; )
            l[r ? s : ++i] = e, e += t;
          return l;
        }
        function uo(e, n) {
          var t = "";
          if (!e || n < 1 || n > J)
            return t;
          do
            n % 2 && (t += e), n = Pr(n / 2), n && (e += e);
          while (n);
          return t;
        }
        function me(e, n) {
          return $o(Hs(e, n, pn), e + "");
        }
        function cf(e) {
          return ja(zt(e));
        }
        function ff(e, n) {
          var t = zt(e);
          return ni(t, kt(n, 0, t.length));
        }
        function dr(e, n, t, r) {
          if (!Ue(e))
            return e;
          n = pt(n, e);
          for (var i = -1, s = n.length, l = s - 1, d = e; d != null && ++i < s; ) {
            var v = Gn(n[i]), E = t;
            if (v === "__proto__" || v === "constructor" || v === "prototype")
              return e;
            if (i != l) {
              var O = d[v];
              E = r ? r(O, v, d) : o, E === o && (E = Ue(O) ? O : et(n[i + 1]) ? [] : {});
            }
            ar(d, v, E), d = d[v];
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
        function In(e, n, t) {
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
          if (typeof n == "number" && n === n && i <= It) {
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
          for (var l = n !== n, d = n === null, v = bn(n), E = n === o; i < s; ) {
            var O = Pr((i + s) / 2), V = t(e[O]), G = V !== o, j = V === null, ue = V === V, _e = bn(V);
            if (l)
              var de = r || ue;
            else E ? de = ue && (r || G) : d ? de = ue && G && (r || !j) : v ? de = ue && G && !j && (r || !_e) : j || _e ? de = !1 : de = r ? V <= n : V < n;
            de ? i = O + 1 : s = O;
          }
          return tn(s, ht);
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
          return typeof e == "number" ? e : bn(e) ? on : +e;
        }
        function mn(e) {
          if (typeof e == "string")
            return e;
          if (ge(e))
            return Me(e, mn) + "";
          if (bn(e))
            return Xa ? Xa.call(e) : "";
          var n = e + "";
          return n == "0" && 1 / e == -D ? "-0" : n;
        }
        function ft(e, n, t) {
          var r = -1, i = Cr, s = e.length, l = !0, d = [], v = d;
          if (t)
            l = !1, i = Mi;
          else if (s >= b) {
            var E = n ? null : Af(e);
            if (E)
              return $r(E);
            l = !1, i = er, v = new wt();
          } else
            v = n ? [] : d;
          e:
            for (; ++r < s; ) {
              var O = e[r], V = n ? n(O) : O;
              if (O = t || O !== 0 ? O : 0, l && V === V) {
                for (var G = v.length; G--; )
                  if (v[G] === V)
                    continue e;
                n && v.push(V), d.push(O);
              } else i(v, V, t) || (v !== d && v.push(V), d.push(O));
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
          return t ? In(e, r ? 0 : s, r ? s + 1 : i) : In(e, r ? s + 1 : 0, r ? i : s);
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
          return ft(Je(s, 1), n, t);
        }
        function ks(e, n, t) {
          for (var r = -1, i = e.length, s = n.length, l = {}; ++r < i; ) {
            var d = r < s ? n[r] : o;
            t(l, e[r], d);
          }
          return l;
        }
        function go(e) {
          return Fe(e) ? e : [];
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
          return t = t === o ? r : t, !n && t >= r ? e : In(e, n, t);
        }
        var xs = tc || function(e) {
          return Ze.clearTimeout(e);
        };
        function Ss(e, n) {
          if (n)
            return e.slice();
          var t = e.length, r = Ga ? Ga(t) : new e.constructor(t);
          return e.copy(r), r;
        }
        function ho(e) {
          var n = new e.constructor(e.byteLength);
          return new Or(n).set(new Or(e)), n;
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
          return or ? Oe(or.call(e)) : {};
        }
        function Cs(e, n) {
          var t = n ? ho(e.buffer) : e.buffer;
          return new e.constructor(t, e.byteOffset, e.length);
        }
        function As(e, n) {
          if (e !== n) {
            var t = e !== o, r = e === null, i = e === e, s = bn(e), l = n !== o, d = n === null, v = n === n, E = bn(n);
            if (!d && !E && !s && e > n || s && l && v && !d && !E || r && l && v || !t && v || !i)
              return 1;
            if (!r && !s && !E && e < n || E && t && i && !r && !s || d && t && i || !l && i || !v)
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
              var E = t[r];
              return v * (E == "desc" ? -1 : 1);
            }
          }
          return e.index - n.index;
        }
        function $s(e, n, t, r) {
          for (var i = -1, s = e.length, l = t.length, d = -1, v = n.length, E = Ge(s - l, 0), O = S(v + E), V = !r; ++d < v; )
            O[d] = n[d];
          for (; ++i < l; )
            (V || i < s) && (O[t[i]] = e[i]);
          for (; E--; )
            O[d++] = e[i++];
          return O;
        }
        function Is(e, n, t, r) {
          for (var i = -1, s = e.length, l = -1, d = t.length, v = -1, E = n.length, O = Ge(s - d, 0), V = S(O + E), G = !r; ++i < O; )
            V[i] = e[i];
          for (var j = i; ++v < E; )
            V[j + v] = n[v];
          for (; ++l < d; )
            (G || i < s) && (V[j + t[l]] = e[i++]);
          return V;
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
            v === o && (v = e[d]), i ? Xn(t, d, v) : ar(t, d, v);
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
            return i(t, e, se(r, 2), s);
          };
        }
        function Mt(e) {
          return me(function(n, t) {
            var r = -1, i = t.length, s = i > 1 ? t[i - 1] : o, l = i > 2 ? t[2] : o;
            for (s = e.length > 3 && typeof s == "function" ? (i--, s) : o, l && sn(t[0], t[1], l) && (s = i < 3 ? o : s, i = 1), n = Oe(n); ++r < i; ) {
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
            for (var i = t.length, s = n ? i : -1, l = Oe(t); (n ? s-- : ++s < i) && r(l[s], s, l) !== !1; )
              ;
            return t;
          };
        }
        function Es(e) {
          return function(n, t, r) {
            for (var i = -1, s = Oe(n), l = r(n), d = l.length; d--; ) {
              var v = l[e ? d : ++i];
              if (t(s[v], v, s) === !1)
                break;
            }
            return n;
          };
        }
        function xf(e, n, t) {
          var r = n & P, i = cr(e);
          function s() {
            var l = this && this !== Ze && this instanceof s ? i : e;
            return l.apply(r ? t : this, arguments);
          }
          return s;
        }
        function Ts(e) {
          return function(n) {
            n = Re(n);
            var t = Lt(n) ? Dn(n) : o, r = t ? t[0] : n.charAt(0), i = t ? gt(t, 1).join("") : n.slice(1);
            return r[e]() + i;
          };
        }
        function Ut(e) {
          return function(n) {
            return Ui(Rl(Il(n).replace(fd, "")), e, "");
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
            return Ue(r) ? r : t;
          };
        }
        function Sf(e, n, t) {
          var r = cr(e);
          function i() {
            for (var s = arguments.length, l = S(s), d = s, v = Nt(i); d--; )
              l[d] = arguments[d];
            var E = s < 3 && l[0] !== v && l[s - 1] !== v ? [] : ut(l, v);
            if (s -= E.length, s < t)
              return Ws(
                e,
                n,
                Zr,
                i.placeholder,
                o,
                l,
                E,
                o,
                o,
                t - s
              );
            var O = this && this !== Ze && this instanceof i ? r : e;
            return hn(O, this, l);
          }
          return i;
        }
        function Ls(e) {
          return function(n, t, r) {
            var i = Oe(n);
            if (!cn(n)) {
              var s = se(t, 3);
              n = Ye(n), t = function(d) {
                return s(i[d], d, i);
              };
            }
            var l = e(n, t, r);
            return l > -1 ? i[s ? n[l] : l] : o;
          };
        }
        function Os(e) {
          return jn(function(n) {
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
              v && Co(v[0]) && v[1] == (ve | Q | M | We) && !v[4].length && v[9] == 1 ? l = l[jr(v[0])].apply(l, v[3]) : l = s.length == 1 && Co(s) ? l[d]() : l.thru(s);
            }
            return function() {
              var E = arguments, O = E[0];
              if (l && E.length == 1 && ge(O))
                return l.plant(O).value();
              for (var V = 0, G = t ? n[V].apply(this, E) : O; ++V < t; )
                G = n[V].call(this, G);
              return G;
            };
          });
        }
        function Zr(e, n, t, r, i, s, l, d, v, E) {
          var O = n & ve, V = n & P, G = n & R, j = n & (Q | ie), ue = n & ae, _e = G ? o : cr(e);
          function de() {
            for (var we = arguments.length, Se = S(we), yn = we; yn--; )
              Se[yn] = arguments[yn];
            if (j)
              var ln = Nt(de), wn = Dd(Se, ln);
            if (r && (Se = $s(Se, r, i, j)), s && (Se = Is(Se, s, l, j)), we -= wn, j && we < E) {
              var ze = ut(Se, ln);
              return Ws(
                e,
                n,
                Zr,
                de.placeholder,
                t,
                Se,
                ze,
                d,
                v,
                E - we
              );
            }
            var Pn = V ? t : this, rt = G ? Pn[e] : e;
            return we = Se.length, d ? Se = qf(Se, d) : ue && we > 1 && Se.reverse(), O && v < we && (Se.length = v), this && this !== Ze && this instanceof de && (rt = _e || cr(rt)), rt.apply(Pn, Se);
          }
          return de;
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
          return jn(function(n) {
            return n = Me(n, _n(se())), me(function(t) {
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
          var r = uo(n, Vr(e / Ot(n)));
          return Lt(n) ? gt(Dn(r), 0, e).join("") : r.slice(0, e);
        }
        function Cf(e, n, t, r) {
          var i = n & P, s = cr(e);
          function l() {
            for (var d = -1, v = arguments.length, E = -1, O = r.length, V = S(O + v), G = this && this !== Ze && this instanceof l ? s : e; ++E < O; )
              V[E] = r[E];
            for (; v--; )
              V[E++] = arguments[++d];
            return hn(G, i ? t : this, V);
          }
          return l;
        }
        function Ds(e) {
          return function(n, t, r) {
            return r && typeof r != "number" && sn(n, t, r) && (t = r = o), n = tt(n), t === o ? (t = n, n = 0) : t = tt(t), r = r === o ? n < t ? 1 : -1 : tt(r), df(n, t, r, e);
          };
        }
        function Qr(e) {
          return function(n, t) {
            return typeof n == "string" && typeof t == "string" || (n = En(n), t = En(t)), e(n, t);
          };
        }
        function Ws(e, n, t, r, i, s, l, d, v, E) {
          var O = n & Q, V = O ? l : o, G = O ? o : l, j = O ? s : o, ue = O ? o : s;
          n |= O ? M : X, n &= ~(O ? X : M), n & W || (n &= -4);
          var _e = [
            e,
            n,
            i,
            j,
            V,
            ue,
            G,
            d,
            v,
            E
          ], de = t.apply(o, _e);
          return Co(e) && Ys(de, _e), de.placeholder = r, Zs(de, e, n);
        }
        function mo(e) {
          var n = qe[e];
          return function(t, r) {
            if (t = En(t), r = r == null ? 0 : tn(he(r), 292), r && Za(t)) {
              var i = (Re(t) + "e").split("e"), s = n(i[0] + "e" + (+i[1] + r));
              return i = (Re(s) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
            }
            return n(t);
          };
        }
        var Af = Wt && 1 / $r(new Wt([, -0]))[1] == D ? function(e) {
          return new Wt(e);
        } : Uo;
        function Vs(e) {
          return function(n) {
            var t = rn(n);
            return t == Ae ? Ki(n) : t == Bn ? Fd(n) : Bd(n, e(n));
          };
        }
        function Qn(e, n, t, r, i, s, l, d) {
          var v = n & R;
          if (!v && typeof e != "function")
            throw new Cn(c);
          var E = r ? r.length : 0;
          if (E || (n &= -97, r = i = o), l = l === o ? l : Ge(he(l), 0), d = d === o ? d : he(d), E -= i ? i.length : 0, n & X) {
            var O = r, V = i;
            r = i = o;
          }
          var G = v ? o : wo(e), j = [
            e,
            n,
            t,
            r,
            i,
            O,
            V,
            s,
            l,
            d
          ];
          if (G && Nf(j, G), e = j[0], n = j[1], t = j[2], r = j[3], i = j[4], d = j[9] = j[9] === o ? v ? 0 : e.length : Ge(j[9] - E, 0), !d && n & (Q | ie) && (n &= -25), !n || n == P)
            var ue = xf(e, n, t);
          else n == Q || n == ie ? ue = Sf(e, n, d) : (n == M || n == (P | M)) && !i.length ? ue = Cf(e, n, t, r) : ue = Zr.apply(o, j);
          var _e = G ? _s : Ys;
          return Zs(_e(ue, j), e, n);
        }
        function Ps(e, n, t, r) {
          return e === o || Vn(e, Dt[t]) && !Te.call(r, t) ? n : e;
        }
        function Ms(e, n, t, r, i, s) {
          return Ue(e) && Ue(n) && (s.set(n, e), Gr(e, n, o, Ms, s), s.delete(n)), e;
        }
        function $f(e) {
          return gr(e) ? o : e;
        }
        function Us(e, n, t, r, i, s) {
          var l = t & L, d = e.length, v = n.length;
          if (d != v && !(l && v > d))
            return !1;
          var E = s.get(e), O = s.get(n);
          if (E && O)
            return E == n && O == e;
          var V = -1, G = !0, j = t & K ? new wt() : o;
          for (s.set(e, n), s.set(n, e); ++V < d; ) {
            var ue = e[V], _e = n[V];
            if (r)
              var de = l ? r(_e, ue, V, n, e, s) : r(ue, _e, V, e, n, s);
            if (de !== o) {
              if (de)
                continue;
              G = !1;
              break;
            }
            if (j) {
              if (!Ni(n, function(we, Se) {
                if (!er(j, Se) && (ue === we || i(ue, we, t, r, s)))
                  return j.push(Se);
              })) {
                G = !1;
                break;
              }
            } else if (!(ue === _e || i(ue, _e, t, r, s))) {
              G = !1;
              break;
            }
          }
          return s.delete(e), s.delete(n), G;
        }
        function If(e, n, t, r, i, s, l) {
          switch (t) {
            case Rt:
              if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
                return !1;
              e = e.buffer, n = n.buffer;
            case jt:
              return !(e.byteLength != n.byteLength || !s(new Or(e), new Or(n)));
            case Yn:
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
              var v = r & L;
              if (d || (d = $r), e.size != n.size && !v)
                return !1;
              var E = l.get(e);
              if (E)
                return E == n;
              r |= K, l.set(e, n);
              var O = Us(d(e), d(n), r, i, s, l);
              return l.delete(e), O;
            case wr:
              if (or)
                return or.call(e) == or.call(n);
          }
          return !1;
        }
        function Rf(e, n, t, r, i, s) {
          var l = t & L, d = bo(e), v = d.length, E = bo(n), O = E.length;
          if (v != O && !l)
            return !1;
          for (var V = v; V--; ) {
            var G = d[V];
            if (!(l ? G in n : Te.call(n, G)))
              return !1;
          }
          var j = s.get(e), ue = s.get(n);
          if (j && ue)
            return j == n && ue == e;
          var _e = !0;
          s.set(e, n), s.set(n, e);
          for (var de = l; ++V < v; ) {
            G = d[V];
            var we = e[G], Se = n[G];
            if (r)
              var yn = l ? r(Se, we, G, n, e, s) : r(we, Se, G, e, n, s);
            if (!(yn === o ? we === Se || i(we, Se, t, r, s) : yn)) {
              _e = !1;
              break;
            }
            de || (de = G == "constructor");
          }
          if (_e && !de) {
            var ln = e.constructor, wn = n.constructor;
            ln != wn && "constructor" in e && "constructor" in n && !(typeof ln == "function" && ln instanceof ln && typeof wn == "function" && wn instanceof wn) && (_e = !1);
          }
          return s.delete(e), s.delete(n), _e;
        }
        function jn(e) {
          return $o(Hs(e, o, nl), e + "");
        }
        function bo(e) {
          return as(e, Ye, xo);
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
        function se() {
          var e = a.iteratee || Po;
          return e = e === Po ? us : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function ei(e, n) {
          var t = e.__data__;
          return Vf(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
        }
        function ko(e) {
          for (var n = Ye(e), t = n.length; t--; ) {
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
          return e == null ? [] : (e = Oe(e), st(Zi(e), function(n) {
            return Ka.call(e, n);
          }));
        } : No, Ns = Zi ? function(e) {
          for (var n = []; e; )
            lt(n, xo(e)), e = Br(e);
          return n;
        } : No, rn = an;
        (Ji && rn(new Ji(new ArrayBuffer(1))) != Rt || tr && rn(new tr()) != Ae || Xi && rn(Xi.resolve()) != ra || Wt && rn(new Wt()) != Bn || rr && rn(new rr()) != Qt) && (rn = function(e) {
          var n = an(e), t = n == On ? e.constructor : o, r = t ? Ct(t) : "";
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
                n = tn(n, e + l);
                break;
              case "takeRight":
                e = Ge(e, n - l);
                break;
            }
          }
          return { start: e, end: n };
        }
        function Lf(e) {
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
          return s || ++r != i ? s : (i = e == null ? 0 : e.length, !!i && si(i) && et(l, i) && (ge(e) || At(e)));
        }
        function Of(e) {
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
            case Yn:
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
            case $i:
            case Ii:
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
        function et(e, n) {
          var t = typeof e;
          return n = n ?? J, !!n && (t == "number" || t != "symbol" && Ku.test(e)) && e > -1 && e % 1 == 0 && e < n;
        }
        function sn(e, n, t) {
          if (!Ue(t))
            return !1;
          var r = typeof n;
          return (r == "number" ? cn(t) && et(n, t.length) : r == "string" && n in t) ? Vn(t[n], e) : !1;
        }
        function So(e, n) {
          if (ge(e))
            return !1;
          var t = typeof e;
          return t == "number" || t == "symbol" || t == "boolean" || e == null || bn(e) ? !0 : Lu.test(e) || !Tu.test(e) || n != null && e in Oe(n);
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
        var Mf = Rr ? nt : Fo;
        function fr(e) {
          var n = e && e.constructor, t = typeof n == "function" && n.prototype || Dt;
          return e === t;
        }
        function qs(e) {
          return e === e && !Ue(e);
        }
        function Gs(e, n) {
          return function(t) {
            return t == null ? !1 : t[e] === n && (n !== o || e in Oe(t));
          };
        }
        function Uf(e) {
          var n = oi(e, function(r) {
            return t.size === p && t.clear(), r;
          }), t = n.cache;
          return n;
        }
        function Nf(e, n) {
          var t = e[1], r = n[1], i = t | r, s = i < (P | R | ve), l = r == ve && t == Q || r == ve && t == We && e[7].length <= n[8] || r == (ve | We) && n[7].length <= n[8] && t == Q;
          if (!(s || l))
            return e;
          r & P && (e[2] = n[2], i |= t & P ? 0 : W);
          var d = n[3];
          if (d) {
            var v = e[3];
            e[3] = v ? $s(v, d, n[4]) : d, e[4] = v ? ut(e[3], y) : n[4];
          }
          return d = n[5], d && (v = e[5], e[5] = v ? Is(v, d, n[6]) : d, e[6] = v ? ut(e[5], y) : n[6]), d = n[7], d && (e[7] = d), r & ve && (e[8] = e[8] == null ? n[8] : tn(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = i, e;
        }
        function Ff(e) {
          var n = [];
          if (e != null)
            for (var t in Oe(e))
              n.push(t);
          return n;
        }
        function zf(e) {
          return Tr.call(e);
        }
        function Hs(e, n, t) {
          return n = Ge(n === o ? e.length - 1 : n, 0), function() {
            for (var r = arguments, i = -1, s = Ge(r.length - n, 0), l = S(s); ++i < s; )
              l[i] = r[n + i];
            i = -1;
            for (var d = S(n + 1); ++i < n; )
              d[i] = r[i];
            return d[n] = t(l), hn(e, this, d);
          };
        }
        function Ks(e, n) {
          return n.length < 2 ? e : xt(e, In(n, 0, -1));
        }
        function qf(e, n) {
          for (var t = e.length, r = tn(n.length, t), i = dn(e); r--; ) {
            var s = n[r];
            e[r] = et(s, t) ? i[s] : o;
          }
          return e;
        }
        function Ao(e, n) {
          if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
            return e[n];
        }
        var Ys = Js(_s), pr = ic || function(e, n) {
          return Ze.setTimeout(e, n);
        }, $o = Js(pf);
        function Zs(e, n, t) {
          var r = n + "";
          return $o(e, Df(r, Gf(Lf(r), t)));
        }
        function Js(e) {
          var n = 0, t = 0;
          return function() {
            var r = lc(), i = nn - (r - t);
            if (t = r, i > 0) {
              if (++n >= Ie)
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
          return e.charCodeAt(0) === 46 && n.push(""), e.replace(Ou, function(t, r, i, s) {
            n.push(i ? s.replace(Nu, "$1") : r || t);
          }), n;
        });
        function Gn(e) {
          if (typeof e == "string" || bn(e))
            return e;
          var n = e + "";
          return n == "0" && 1 / e == -D ? "-0" : n;
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
          (t ? sn(e, n, t) : n === o) ? n = 1 : n = Ge(he(n), 0);
          var r = e == null ? 0 : e.length;
          if (!r || n < 1)
            return [];
          for (var i = 0, s = 0, l = S(Vr(r / n)); i < r; )
            l[s++] = In(e, i, i += n);
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
          return lt(ge(t) ? dn(t) : [t], Je(n, 1));
        }
        var Zf = me(function(e, n) {
          return Fe(e) ? sr(e, Je(n, 1, Fe, !0)) : [];
        }), Jf = me(function(e, n) {
          var t = Rn(n);
          return Fe(t) && (t = o), Fe(e) ? sr(e, Je(n, 1, Fe, !0), se(t, 2)) : [];
        }), Xf = me(function(e, n) {
          var t = Rn(n);
          return Fe(t) && (t = o), Fe(e) ? sr(e, Je(n, 1, Fe, !0), o, t) : [];
        });
        function Qf(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : he(n), In(e, n < 0 ? 0 : n, r)) : [];
        }
        function jf(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : he(n), n = r - n, In(e, 0, n < 0 ? 0 : n)) : [];
        }
        function ep(e, n) {
          return e && e.length ? Kr(e, se(n, 3), !0, !0) : [];
        }
        function np(e, n) {
          return e && e.length ? Kr(e, se(n, 3), !0) : [];
        }
        function tp(e, n, t, r) {
          var i = e == null ? 0 : e.length;
          return i ? (t && typeof t != "number" && sn(e, n, t) && (t = 0, r = i), Kc(e, n, t, r)) : [];
        }
        function js(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : he(t);
          return i < 0 && (i = Ge(r + i, 0)), Ar(e, se(n, 3), i);
        }
        function el(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r - 1;
          return t !== o && (i = he(t), i = t < 0 ? Ge(r + i, 0) : tn(i, r - 1)), Ar(e, se(n, 3), i, !0);
        }
        function nl(e) {
          var n = e == null ? 0 : e.length;
          return n ? Je(e, 1) : [];
        }
        function rp(e) {
          var n = e == null ? 0 : e.length;
          return n ? Je(e, D) : [];
        }
        function ip(e, n) {
          var t = e == null ? 0 : e.length;
          return t ? (n = n === o ? 1 : he(n), Je(e, n)) : [];
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
          return i < 0 && (i = Ge(r + i, 0)), Tt(e, n, i);
        }
        function sp(e) {
          var n = e == null ? 0 : e.length;
          return n ? In(e, 0, -1) : [];
        }
        var lp = me(function(e) {
          var n = Me(e, go);
          return n.length && n[0] === e[0] ? ro(n) : [];
        }), up = me(function(e) {
          var n = Rn(e), t = Me(e, go);
          return n === Rn(t) ? n = o : t.pop(), t.length && t[0] === e[0] ? ro(t, se(n, 2)) : [];
        }), dp = me(function(e) {
          var n = Rn(e), t = Me(e, go);
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
          return t !== o && (i = he(t), i = i < 0 ? Ge(r + i, 0) : tn(i, r - 1)), n === n ? qd(e, n, i) : Ar(e, Wa, i, !0);
        }
        function pp(e, n) {
          return e && e.length ? ps(e, he(n)) : o;
        }
        var gp = me(rl);
        function rl(e, n) {
          return e && e.length && n && n.length ? so(e, n) : e;
        }
        function vp(e, n, t) {
          return e && e.length && n && n.length ? so(e, n, se(t, 2)) : e;
        }
        function hp(e, n, t) {
          return e && e.length && n && n.length ? so(e, n, o, t) : e;
        }
        var _p = jn(function(e, n) {
          var t = e == null ? 0 : e.length, r = ji(e, n);
          return hs(e, Me(n, function(i) {
            return et(i, t) ? +i : i;
          }).sort(As)), r;
        });
        function mp(e, n) {
          var t = [];
          if (!(e && e.length))
            return t;
          var r = -1, i = [], s = e.length;
          for (n = se(n, 3); ++r < s; ) {
            var l = e[r];
            n(l, r, e) && (t.push(l), i.push(r));
          }
          return hs(e, i), t;
        }
        function Io(e) {
          return e == null ? e : dc.call(e);
        }
        function bp(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (t && typeof t != "number" && sn(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : he(n), t = t === o ? r : he(t)), In(e, n, t)) : [];
        }
        function yp(e, n) {
          return Hr(e, n);
        }
        function wp(e, n, t) {
          return co(e, n, se(t, 2));
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
          return co(e, n, se(t, 2), !0);
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
        function $p(e, n) {
          return e && e.length ? ms(e, se(n, 2)) : [];
        }
        function Ip(e) {
          var n = e == null ? 0 : e.length;
          return n ? In(e, 1, n) : [];
        }
        function Rp(e, n, t) {
          return e && e.length ? (n = t || n === o ? 1 : he(n), In(e, 0, n < 0 ? 0 : n)) : [];
        }
        function Ep(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : he(n), n = r - n, In(e, n < 0 ? 0 : n, r)) : [];
        }
        function Tp(e, n) {
          return e && e.length ? Kr(e, se(n, 3), !1, !0) : [];
        }
        function Lp(e, n) {
          return e && e.length ? Kr(e, se(n, 3)) : [];
        }
        var Op = me(function(e) {
          return ft(Je(e, 1, Fe, !0));
        }), Bp = me(function(e) {
          var n = Rn(e);
          return Fe(n) && (n = o), ft(Je(e, 1, Fe, !0), se(n, 2));
        }), Dp = me(function(e) {
          var n = Rn(e);
          return n = typeof n == "function" ? n : o, ft(Je(e, 1, Fe, !0), o, n);
        });
        function Wp(e) {
          return e && e.length ? ft(e) : [];
        }
        function Vp(e, n) {
          return e && e.length ? ft(e, se(n, 2)) : [];
        }
        function Pp(e, n) {
          return n = typeof n == "function" ? n : o, e && e.length ? ft(e, o, n) : [];
        }
        function Ro(e) {
          if (!(e && e.length))
            return [];
          var n = 0;
          return e = st(e, function(t) {
            if (Fe(t))
              return n = Ge(t.length, n), !0;
          }), Gi(n, function(t) {
            return Me(e, Fi(t));
          });
        }
        function il(e, n) {
          if (!(e && e.length))
            return [];
          var t = Ro(e);
          return n == null ? t : Me(t, function(r) {
            return hn(n, o, r);
          });
        }
        var Mp = me(function(e, n) {
          return Fe(e) ? sr(e, n) : [];
        }), Up = me(function(e) {
          return po(st(e, Fe));
        }), Np = me(function(e) {
          var n = Rn(e);
          return Fe(n) && (n = o), po(st(e, Fe), se(n, 2));
        }), Fp = me(function(e) {
          var n = Rn(e);
          return n = typeof n == "function" ? n : o, po(st(e, Fe), o, n);
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
        var Yp = jn(function(e) {
          var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, i = function(s) {
            return ji(s, e);
          };
          return n > 1 || this.__actions__.length || !(r instanceof ke) || !et(t) ? this.thru(i) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({
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
              args: [Io],
              thisArg: o
            }), new An(n, this.__chain__);
          }
          return this.thru(Io);
        }
        function ng() {
          return ws(this.__wrapped__, this.__actions__);
        }
        var tg = Yr(function(e, n, t) {
          Te.call(e, t) ? ++e[t] : Xn(e, t, 1);
        });
        function rg(e, n, t) {
          var r = ge(e) ? Ba : Hc;
          return t && sn(e, n, t) && (n = o), r(e, se(n, 3));
        }
        function ig(e, n) {
          var t = ge(e) ? st : is;
          return t(e, se(n, 3));
        }
        var og = Ls(js), ag = Ls(el);
        function sg(e, n) {
          return Je(ri(e, n), 1);
        }
        function lg(e, n) {
          return Je(ri(e, n), D);
        }
        function ug(e, n, t) {
          return t = t === o ? 1 : he(t), Je(ri(e, n), t);
        }
        function al(e, n) {
          var t = ge(e) ? Sn : ct;
          return t(e, se(n, 3));
        }
        function sl(e, n) {
          var t = ge(e) ? $d : rs;
          return t(e, se(n, 3));
        }
        var dg = Yr(function(e, n, t) {
          Te.call(e, t) ? e[t].push(n) : Xn(e, t, [n]);
        });
        function cg(e, n, t, r) {
          e = cn(e) ? e : zt(e), t = t && !r ? he(t) : 0;
          var i = e.length;
          return t < 0 && (t = Ge(i + t, 0)), li(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && Tt(e, n, t) > -1;
        }
        var fg = me(function(e, n, t) {
          var r = -1, i = typeof n == "function", s = cn(e) ? S(e.length) : [];
          return ct(e, function(l) {
            s[++r] = i ? hn(n, l, t) : lr(l, n, t);
          }), s;
        }), pg = Yr(function(e, n, t) {
          Xn(e, t, n);
        });
        function ri(e, n) {
          var t = ge(e) ? Me : ds;
          return t(e, se(n, 3));
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
          return r(e, se(n, 4), t, i, ct);
        }
        function _g(e, n, t) {
          var r = ge(e) ? Id : Pa, i = arguments.length < 3;
          return r(e, se(n, 4), t, i, rs);
        }
        function mg(e, n) {
          var t = ge(e) ? st : is;
          return t(e, ai(se(n, 3)));
        }
        function bg(e) {
          var n = ge(e) ? ja : cf;
          return n(e);
        }
        function yg(e, n, t) {
          (t ? sn(e, n, t) : n === o) ? n = 1 : n = he(n);
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
            return li(e) ? Ot(e) : e.length;
          var n = rn(e);
          return n == Ae || n == Bn ? e.size : oo(e).length;
        }
        function xg(e, n, t) {
          var r = ge(e) ? Ni : vf;
          return t && sn(e, n, t) && (n = o), r(e, se(n, 3));
        }
        var Sg = me(function(e, n) {
          if (e == null)
            return [];
          var t = n.length;
          return t > 1 && sn(e, n[0], n[1]) ? n = [] : t > 2 && sn(n[0], n[1], n[2]) && (n = [n[0]]), gs(e, Je(n, 1), []);
        }), ii = rc || function() {
          return Ze.Date.now();
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
          return n = t ? o : n, n = e && n == null ? e.length : n, Qn(e, ve, o, o, o, o, n);
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
          var r = P;
          if (t.length) {
            var i = ut(t, Nt(Eo));
            r |= M;
          }
          return Qn(e, r, n, t, i);
        }), dl = me(function(e, n, t) {
          var r = P | R;
          if (t.length) {
            var i = ut(t, Nt(dl));
            r |= M;
          }
          return Qn(n, r, e, t, i);
        });
        function cl(e, n, t) {
          n = t ? o : n;
          var r = Qn(e, Q, o, o, o, o, o, n);
          return r.placeholder = cl.placeholder, r;
        }
        function fl(e, n, t) {
          n = t ? o : n;
          var r = Qn(e, ie, o, o, o, o, o, n);
          return r.placeholder = fl.placeholder, r;
        }
        function pl(e, n, t) {
          var r, i, s, l, d, v, E = 0, O = !1, V = !1, G = !0;
          if (typeof e != "function")
            throw new Cn(c);
          n = En(n) || 0, Ue(t) && (O = !!t.leading, V = "maxWait" in t, s = V ? Ge(En(t.maxWait) || 0, n) : s, G = "trailing" in t ? !!t.trailing : G);
          function j(ze) {
            var Pn = r, rt = i;
            return r = i = o, E = ze, l = e.apply(rt, Pn), l;
          }
          function ue(ze) {
            return E = ze, d = pr(we, n), O ? j(ze) : l;
          }
          function _e(ze) {
            var Pn = ze - v, rt = ze - E, Ll = n - Pn;
            return V ? tn(Ll, s - rt) : Ll;
          }
          function de(ze) {
            var Pn = ze - v, rt = ze - E;
            return v === o || Pn >= n || Pn < 0 || V && rt >= s;
          }
          function we() {
            var ze = ii();
            if (de(ze))
              return Se(ze);
            d = pr(we, _e(ze));
          }
          function Se(ze) {
            return d = o, G && r ? j(ze) : (r = i = o, l);
          }
          function yn() {
            d !== o && xs(d), E = 0, r = v = i = d = o;
          }
          function ln() {
            return d === o ? l : Se(ii());
          }
          function wn() {
            var ze = ii(), Pn = de(ze);
            if (r = arguments, i = this, v = ze, Pn) {
              if (d === o)
                return ue(v);
              if (V)
                return xs(d), d = pr(we, n), j(v);
            }
            return d === o && (d = pr(we, n)), l;
          }
          return wn.cancel = yn, wn.flush = ln, wn;
        }
        var Ag = me(function(e, n) {
          return ts(e, 1, n);
        }), $g = me(function(e, n, t) {
          return ts(e, En(n) || 0, t);
        });
        function Ig(e) {
          return Qn(e, ae);
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
          return t.cache = new (oi.Cache || Jn)(), t;
        }
        oi.Cache = Jn;
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
          n = n.length == 1 && ge(n[0]) ? Me(n[0], _n(se())) : Me(Je(n, 1), _n(se()));
          var t = n.length;
          return me(function(r) {
            for (var i = -1, s = tn(r.length, t); ++i < s; )
              r[i] = n[i].call(this, r[i]);
            return hn(e, this, r);
          });
        }), To = me(function(e, n) {
          var t = ut(n, Nt(To));
          return Qn(e, M, o, n, t);
        }), gl = me(function(e, n) {
          var t = ut(n, Nt(gl));
          return Qn(e, X, o, n, t);
        }), Tg = jn(function(e, n) {
          return Qn(e, We, o, o, o, n);
        });
        function Lg(e, n) {
          if (typeof e != "function")
            throw new Cn(c);
          return n = n === o ? n : he(n), me(e, n);
        }
        function Og(e, n) {
          if (typeof e != "function")
            throw new Cn(c);
          return n = n == null ? 0 : Ge(he(n), 0), me(function(t) {
            var r = t[n], i = gt(t, 0, n);
            return r && lt(i, r), hn(e, this, i);
          });
        }
        function Bg(e, n, t) {
          var r = !0, i = !0;
          if (typeof e != "function")
            throw new Cn(c);
          return Ue(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), pl(e, n, {
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
          return $n(e, q);
        }
        function Mg(e, n) {
          return n = typeof n == "function" ? n : o, $n(e, q, n);
        }
        function Ug(e) {
          return $n(e, H | q);
        }
        function Ng(e, n) {
          return n = typeof n == "function" ? n : o, $n(e, H | q, n);
        }
        function Fg(e, n) {
          return n == null || ns(e, n, Ye(n));
        }
        function Vn(e, n) {
          return e === n || e !== e && n !== n;
        }
        var zg = Qr(to), qg = Qr(function(e, n) {
          return e >= n;
        }), At = ss(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? ss : function(e) {
          return Ne(e) && Te.call(e, "callee") && !Ka.call(e, "callee");
        }, ge = S.isArray, Gg = Ia ? _n(Ia) : Qc;
        function cn(e) {
          return e != null && si(e.length) && !nt(e);
        }
        function Fe(e) {
          return Ne(e) && cn(e);
        }
        function Hg(e) {
          return e === !0 || e === !1 || Ne(e) && an(e) == Yn;
        }
        var vt = oc || Fo, Kg = Ra ? _n(Ra) : jc;
        function Yg(e) {
          return Ne(e) && e.nodeType === 1 && !gr(e);
        }
        function Zg(e) {
          if (e == null)
            return !0;
          if (cn(e) && (ge(e) || typeof e == "string" || typeof e.splice == "function" || vt(e) || Ft(e) || At(e)))
            return !e.length;
          var n = rn(e);
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
        function Lo(e) {
          if (!Ne(e))
            return !1;
          var n = an(e);
          return n == x || n == k || typeof e.message == "string" && typeof e.name == "string" && !gr(e);
        }
        function Qg(e) {
          return typeof e == "number" && Za(e);
        }
        function nt(e) {
          if (!Ue(e))
            return !1;
          var n = an(e);
          return n == Y || n == Le || n == Zt || n == wu;
        }
        function vl(e) {
          return typeof e == "number" && e == he(e);
        }
        function si(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= J;
        }
        function Ue(e) {
          var n = typeof e;
          return e != null && (n == "object" || n == "function");
        }
        function Ne(e) {
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
            throw new pe(A);
          return ls(e);
        }
        function rv(e) {
          return e === null;
        }
        function iv(e) {
          return e == null;
        }
        function _l(e) {
          return typeof e == "number" || Ne(e) && an(e) == kn;
        }
        function gr(e) {
          if (!Ne(e) || an(e) != On)
            return !1;
          var n = Br(e);
          if (n === null)
            return !0;
          var t = Te.call(n, "constructor") && n.constructor;
          return typeof t == "function" && t instanceof t && Er.call(t) == jd;
        }
        var Oo = Ta ? _n(Ta) : tf;
        function ov(e) {
          return vl(e) && e >= -J && e <= J;
        }
        var ml = La ? _n(La) : rf;
        function li(e) {
          return typeof e == "string" || !ge(e) && Ne(e) && an(e) == Xt;
        }
        function bn(e) {
          return typeof e == "symbol" || Ne(e) && an(e) == wr;
        }
        var Ft = Oa ? _n(Oa) : of;
        function av(e) {
          return e === o;
        }
        function sv(e) {
          return Ne(e) && rn(e) == Qt;
        }
        function lv(e) {
          return Ne(e) && an(e) == xu;
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
          var n = rn(e), t = n == Ae ? Ki : n == Bn ? $r : zt;
          return t(e);
        }
        function tt(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = En(e), e === D || e === -D) {
            var n = e < 0 ? -1 : 1;
            return n * Ve;
          }
          return e === e ? e : 0;
        }
        function he(e) {
          var n = tt(e), t = n % 1;
          return n === n ? t ? n - t : n : 0;
        }
        function yl(e) {
          return e ? kt(he(e), 0, un) : 0;
        }
        function En(e) {
          if (typeof e == "number")
            return e;
          if (bn(e))
            return on;
          if (Ue(e)) {
            var n = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Ue(n) ? n + "" : n;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Ma(e);
          var t = qu.test(e);
          return t || Hu.test(e) ? Sd(e.slice(2), t ? 2 : 8) : zu.test(e) ? on : +e;
        }
        function wl(e) {
          return qn(e, fn(e));
        }
        function cv(e) {
          return e ? kt(he(e), -J, J) : e === 0 ? e : 0;
        }
        function Re(e) {
          return e == null ? "" : mn(e);
        }
        var fv = Mt(function(e, n) {
          if (fr(n) || cn(n)) {
            qn(n, Ye(n), e);
            return;
          }
          for (var t in n)
            Te.call(n, t) && ar(e, t, n[t]);
        }), kl = Mt(function(e, n) {
          qn(n, fn(n), e);
        }), ui = Mt(function(e, n, t, r) {
          qn(n, fn(n), e, r);
        }), pv = Mt(function(e, n, t, r) {
          qn(n, Ye(n), e, r);
        }), gv = jn(ji);
        function vv(e, n) {
          var t = Pt(e);
          return n == null ? t : es(t, n);
        }
        var hv = me(function(e, n) {
          e = Oe(e);
          var t = -1, r = n.length, i = r > 2 ? n[2] : o;
          for (i && sn(n[0], n[1], i) && (r = 1); ++t < r; )
            for (var s = n[t], l = fn(s), d = -1, v = l.length; ++d < v; ) {
              var E = l[d], O = e[E];
              (O === o || Vn(O, Dt[E]) && !Te.call(e, E)) && (e[E] = s[E]);
            }
          return e;
        }), _v = me(function(e) {
          return e.push(o, Ms), hn(xl, o, e);
        });
        function mv(e, n) {
          return Da(e, se(n, 3), zn);
        }
        function bv(e, n) {
          return Da(e, se(n, 3), no);
        }
        function yv(e, n) {
          return e == null ? e : eo(e, se(n, 3), fn);
        }
        function wv(e, n) {
          return e == null ? e : os(e, se(n, 3), fn);
        }
        function kv(e, n) {
          return e && zn(e, se(n, 3));
        }
        function xv(e, n) {
          return e && no(e, se(n, 3));
        }
        function Sv(e) {
          return e == null ? [] : qr(e, Ye(e));
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
        var $v = Bs(function(e, n, t) {
          n != null && typeof n.toString != "function" && (n = Tr.call(n)), e[n] = t;
        }, Vo(pn)), Iv = Bs(function(e, n, t) {
          n != null && typeof n.toString != "function" && (n = Tr.call(n)), Te.call(e, n) ? e[n].push(t) : e[n] = [t];
        }, se), Rv = me(lr);
        function Ye(e) {
          return cn(e) ? Qa(e) : oo(e);
        }
        function fn(e) {
          return cn(e) ? Qa(e, !0) : af(e);
        }
        function Ev(e, n) {
          var t = {};
          return n = se(n, 3), zn(e, function(r, i, s) {
            Xn(t, n(r, i, s), r);
          }), t;
        }
        function Tv(e, n) {
          var t = {};
          return n = se(n, 3), zn(e, function(r, i, s) {
            Xn(t, i, n(r, i, s));
          }), t;
        }
        var Lv = Mt(function(e, n, t) {
          Gr(e, n, t);
        }), xl = Mt(function(e, n, t, r) {
          Gr(e, n, t, r);
        }), Ov = jn(function(e, n) {
          var t = {};
          if (e == null)
            return t;
          var r = !1;
          n = Me(n, function(s) {
            return s = pt(s, e), r || (r = s.length > 1), s;
          }), qn(e, yo(e), t), r && (t = $n(t, H | z | q, $f));
          for (var i = n.length; i--; )
            fo(t, n[i]);
          return t;
        });
        function Bv(e, n) {
          return Sl(e, ai(se(n)));
        }
        var Dv = jn(function(e, n) {
          return e == null ? {} : lf(e, n);
        });
        function Sl(e, n) {
          if (e == null)
            return {};
          var t = Me(yo(e), function(r) {
            return [r];
          });
          return n = se(n), vs(e, t, function(r, i) {
            return n(r, i[0]);
          });
        }
        function Wv(e, n, t) {
          n = pt(n, e);
          var r = -1, i = n.length;
          for (i || (i = 1, e = o); ++r < i; ) {
            var s = e == null ? o : e[Gn(n[r])];
            s === o && (r = i, s = t), e = nt(s) ? s.call(e) : s;
          }
          return e;
        }
        function Vv(e, n, t) {
          return e == null ? e : dr(e, n, t);
        }
        function Pv(e, n, t, r) {
          return r = typeof r == "function" ? r : o, e == null ? e : dr(e, n, t, r);
        }
        var Cl = Vs(Ye), Al = Vs(fn);
        function Mv(e, n, t) {
          var r = ge(e), i = r || vt(e) || Ft(e);
          if (n = se(n, 4), t == null) {
            var s = e && e.constructor;
            i ? t = r ? new s() : [] : Ue(e) ? t = nt(s) ? Pt(Br(e)) : {} : t = {};
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
          return e == null ? [] : Hi(e, Ye(e));
        }
        function zv(e) {
          return e == null ? [] : Hi(e, fn(e));
        }
        function qv(e, n, t) {
          return t === o && (t = n, n = o), t !== o && (t = En(t), t = t === t ? t : 0), n !== o && (n = En(n), n = n === n ? n : 0), kt(En(e), n, t);
        }
        function Gv(e, n, t) {
          return n = tt(n), t === o ? (t = n, n = 0) : t = tt(t), e = En(e), Jc(e, n, t);
        }
        function Hv(e, n, t) {
          if (t && typeof t != "boolean" && sn(e, n, t) && (n = t = o), t === o && (typeof n == "boolean" ? (t = n, n = o) : typeof e == "boolean" && (t = e, e = o)), e === o && n === o ? (e = 0, n = 1) : (e = tt(e), n === o ? (n = e, e = 0) : n = tt(n)), e > n) {
            var r = e;
            e = n, n = r;
          }
          if (t || e % 1 || n % 1) {
            var i = Ja();
            return tn(e + i * (n - e + xd("1e-" + ((i + "").length - 1))), n);
          }
          return lo(e, n);
        }
        var Kv = Ut(function(e, n, t) {
          return n = n.toLowerCase(), e + (t ? $l(n) : n);
        });
        function $l(e) {
          return Wo(Re(e).toLowerCase());
        }
        function Il(e) {
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
          return e = Re(e), e && Iu.test(e) ? e.replace(oa, Vd) : e;
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
          var r = n ? Ot(e) : 0;
          if (!n || r >= n)
            return e;
          var i = (n - r) / 2;
          return Xr(Pr(i), t) + e + Xr(Vr(i), t);
        }
        function nh(e, n, t) {
          e = Re(e), n = he(n);
          var r = n ? Ot(e) : 0;
          return n && r < n ? e + Xr(n - r, t) : e;
        }
        function th(e, n, t) {
          e = Re(e), n = he(n);
          var r = n ? Ot(e) : 0;
          return n && r < n ? Xr(n - r, t) + e : e;
        }
        function rh(e, n, t) {
          return t || n == null ? n = 0 : n && (n = +n), uc(Re(e).replace(Ti, ""), n || 0);
        }
        function ih(e, n, t) {
          return (t ? sn(e, n, t) : n === o) ? n = 1 : n = he(n), uo(Re(e), n);
        }
        function oh() {
          var e = arguments, n = Re(e[0]);
          return e.length < 3 ? n : n.replace(e[1], e[2]);
        }
        var ah = Ut(function(e, n, t) {
          return e + (t ? "_" : "") + n.toLowerCase();
        });
        function sh(e, n, t) {
          return t && typeof t != "number" && sn(e, n, t) && (n = t = o), t = t === o ? un : t >>> 0, t ? (e = Re(e), e && (typeof n == "string" || n != null && !Oo(n)) && (n = mn(n), !n && Lt(e)) ? gt(Dn(e), 0, t) : e.split(n, t)) : [];
        }
        var lh = Ut(function(e, n, t) {
          return e + (t ? " " : "") + Wo(n);
        });
        function uh(e, n, t) {
          return e = Re(e), t = t == null ? 0 : kt(he(t), 0, e.length), n = mn(n), e.slice(t, t + n.length) == n;
        }
        function dh(e, n, t) {
          var r = a.templateSettings;
          t && sn(e, n, t) && (n = o), e = Re(e), n = ui({}, n, r, Ps);
          var i = ui({}, n.imports, r.imports, Ps), s = Ye(i), l = Hi(i, s), d, v, E = 0, O = n.interpolate || kr, V = "__p += '", G = Yi(
            (n.escape || kr).source + "|" + O.source + "|" + (O === aa ? Fu : kr).source + "|" + (n.evaluate || kr).source + "|$",
            "g"
          ), j = "//# sourceURL=" + (Te.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++md + "]") + `
`;
          e.replace(G, function(de, we, Se, yn, ln, wn) {
            return Se || (Se = yn), V += e.slice(E, wn).replace(Zu, Pd), we && (d = !0, V += `' +
__e(` + we + `) +
'`), ln && (v = !0, V += `';
` + ln + `;
__p += '`), Se && (V += `' +
((__t = (` + Se + `)) == null ? '' : __t) +
'`), E = wn + de.length, de;
          }), V += `';
`;
          var ue = Te.call(n, "variable") && n.variable;
          if (!ue)
            V = `with (obj) {
` + V + `
}
`;
          else if (Uu.test(ue))
            throw new pe(T);
          V = (v ? V.replace(Su, "") : V).replace(Cu, "$1").replace(Au, "$1;"), V = "function(" + (ue || "obj") + `) {
` + (ue ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (d ? ", __e = _.escape" : "") + (v ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
          var _e = El(function() {
            return $e(s, j + "return " + V).apply(o, l);
          });
          if (_e.source = V, Lo(_e))
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
          var t = ce, r = fe;
          if (Ue(n)) {
            var i = "separator" in n ? n.separator : i;
            t = "length" in n ? he(n.length) : t, r = "omission" in n ? mn(n.omission) : r;
          }
          e = Re(e);
          var s = e.length;
          if (Lt(e)) {
            var l = Dn(e);
            s = l.length;
          }
          if (t >= s)
            return e;
          var d = t - Ot(r);
          if (d < 1)
            return r;
          var v = l ? gt(l, 0, d).join("") : e.slice(0, d);
          if (i === o)
            return v + r;
          if (l && (d += v.length - d), Oo(i)) {
            if (e.slice(d).search(i)) {
              var E, O = v;
              for (i.global || (i = Yi(i.source, Re(sa.exec(i)) + "g")), i.lastIndex = 0; E = i.exec(O); )
                var V = E.index;
              v = v.slice(0, V === o ? d : V);
            }
          } else if (e.indexOf(mn(i), d) != d) {
            var G = v.lastIndexOf(i);
            G > -1 && (v = v.slice(0, G));
          }
          return v + r;
        }
        function _h(e) {
          return e = Re(e), e && $u.test(e) ? e.replace(ia, Gd) : e;
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
            return Lo(t) ? t : new pe(t);
          }
        }), bh = jn(function(e, n) {
          return Sn(n, function(t) {
            t = Gn(t), Xn(e, t, Eo(e[t], e));
          }), e;
        });
        function yh(e) {
          var n = e == null ? 0 : e.length, t = se();
          return e = n ? Me(e, function(r) {
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
          return Gc($n(e, H));
        }
        function Vo(e) {
          return function() {
            return e;
          };
        }
        function kh(e, n) {
          return e == null || e !== e ? n : e;
        }
        var xh = Os(), Sh = Os(!0);
        function pn(e) {
          return e;
        }
        function Po(e) {
          return us(typeof e == "function" ? e : $n(e, H));
        }
        function Ch(e) {
          return cs($n(e, H));
        }
        function Ah(e, n) {
          return fs(e, $n(n, H));
        }
        var $h = me(function(e, n) {
          return function(t) {
            return lr(t, e, n);
          };
        }), Ih = me(function(e, n) {
          return function(t) {
            return lr(e, t, n);
          };
        });
        function Mo(e, n, t) {
          var r = Ye(n), i = qr(n, r);
          t == null && !(Ue(n) && (i.length || !r.length)) && (t = n, n = e, e = this, i = qr(n, Ye(n)));
          var s = !(Ue(t) && "chain" in t) || !!t.chain, l = nt(e);
          return Sn(i, function(d) {
            var v = n[d];
            e[d] = v, l && (e.prototype[d] = function() {
              var E = this.__chain__;
              if (s || E) {
                var O = e(this.__wrapped__), V = O.__actions__ = dn(this.__actions__);
                return V.push({ func: v, args: arguments, thisArg: e }), O.__chain__ = E, O;
              }
              return v.apply(e, lt([this.value()], arguments));
            });
          }), e;
        }
        function Rh() {
          return Ze._ === this && (Ze._ = ec), this;
        }
        function Uo() {
        }
        function Eh(e) {
          return e = he(e), me(function(n) {
            return ps(n, e);
          });
        }
        var Th = _o(Me), Lh = _o(Ba), Oh = _o(Ni);
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
          if (e = he(e), e < 1 || e > J)
            return [];
          var t = un, r = tn(e, un);
          n = se(n), e -= un;
          for (var i = Gi(r, n); ++t < e; )
            n(t);
          return i;
        }
        function Nh(e) {
          return ge(e) ? Me(e, Gn) : bn(e) ? [e] : dn(Xs(Re(e)));
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
          return e && e.length ? zr(e, se(n, 2), to) : o;
        }
        function Zh(e) {
          return Va(e, pn);
        }
        function Jh(e, n) {
          return Va(e, se(n, 2));
        }
        function Xh(e) {
          return e && e.length ? zr(e, pn, ao) : o;
        }
        function Qh(e, n) {
          return e && e.length ? zr(e, se(n, 2), ao) : o;
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
          return e && e.length ? qi(e, se(n, 2)) : 0;
        }
        return a.after = Cg, a.ary = ll, a.assign = fv, a.assignIn = kl, a.assignInWith = ui, a.assignWith = pv, a.at = gv, a.before = ul, a.bind = Eo, a.bindAll = bh, a.bindKey = dl, a.castArray = Vg, a.chain = ol, a.chunk = Hf, a.compact = Kf, a.concat = Yf, a.cond = yh, a.conforms = wh, a.constant = Vo, a.countBy = tg, a.create = vv, a.curry = cl, a.curryRight = fl, a.debounce = pl, a.defaults = hv, a.defaultsDeep = _v, a.defer = Ag, a.delay = $g, a.difference = Zf, a.differenceBy = Jf, a.differenceWith = Xf, a.drop = Qf, a.dropRight = jf, a.dropRightWhile = ep, a.dropWhile = np, a.fill = tp, a.filter = ig, a.flatMap = sg, a.flatMapDeep = lg, a.flatMapDepth = ug, a.flatten = nl, a.flattenDeep = rp, a.flattenDepth = ip, a.flip = Ig, a.flow = xh, a.flowRight = Sh, a.fromPairs = op, a.functions = Sv, a.functionsIn = Cv, a.groupBy = dg, a.initial = sp, a.intersection = lp, a.intersectionBy = up, a.intersectionWith = dp, a.invert = $v, a.invertBy = Iv, a.invokeMap = fg, a.iteratee = Po, a.keyBy = pg, a.keys = Ye, a.keysIn = fn, a.map = ri, a.mapKeys = Ev, a.mapValues = Tv, a.matches = Ch, a.matchesProperty = Ah, a.memoize = oi, a.merge = Lv, a.mergeWith = xl, a.method = $h, a.methodOf = Ih, a.mixin = Mo, a.negate = ai, a.nthArg = Eh, a.omit = Ov, a.omitBy = Bv, a.once = Rg, a.orderBy = gg, a.over = Th, a.overArgs = Eg, a.overEvery = Lh, a.overSome = Oh, a.partial = To, a.partialRight = gl, a.partition = vg, a.pick = Dv, a.pickBy = Sl, a.property = Tl, a.propertyOf = Bh, a.pull = gp, a.pullAll = rl, a.pullAllBy = vp, a.pullAllWith = hp, a.pullAt = _p, a.range = Dh, a.rangeRight = Wh, a.rearg = Tg, a.reject = mg, a.remove = mp, a.rest = Lg, a.reverse = Io, a.sampleSize = yg, a.set = Vv, a.setWith = Pv, a.shuffle = wg, a.slice = bp, a.sortBy = Sg, a.sortedUniq = Ap, a.sortedUniqBy = $p, a.split = sh, a.spread = Og, a.tail = Ip, a.take = Rp, a.takeRight = Ep, a.takeRightWhile = Tp, a.takeWhile = Lp, a.tap = Kp, a.throttle = Bg, a.thru = ti, a.toArray = bl, a.toPairs = Cl, a.toPairsIn = Al, a.toPath = Nh, a.toPlainObject = wl, a.transform = Mv, a.unary = Dg, a.union = Op, a.unionBy = Bp, a.unionWith = Dp, a.uniq = Wp, a.uniqBy = Vp, a.uniqWith = Pp, a.unset = Uv, a.unzip = Ro, a.unzipWith = il, a.update = Nv, a.updateWith = Fv, a.values = zt, a.valuesIn = zv, a.without = Mp, a.words = Rl, a.wrap = Wg, a.xor = Up, a.xorBy = Np, a.xorWith = Fp, a.zip = zp, a.zipObject = qp, a.zipObjectDeep = Gp, a.zipWith = Hp, a.entries = Cl, a.entriesIn = Al, a.extend = kl, a.extendWith = ui, Mo(a, a), a.add = zh, a.attempt = El, a.camelCase = Kv, a.capitalize = $l, a.ceil = qh, a.clamp = qv, a.clone = Pg, a.cloneDeep = Ug, a.cloneDeepWith = Ng, a.cloneWith = Mg, a.conformsTo = Fg, a.deburr = Il, a.defaultTo = kh, a.divide = Gh, a.endsWith = Yv, a.eq = Vn, a.escape = Zv, a.escapeRegExp = Jv, a.every = rg, a.find = og, a.findIndex = js, a.findKey = mv, a.findLast = ag, a.findLastIndex = el, a.findLastKey = bv, a.floor = Hh, a.forEach = al, a.forEachRight = sl, a.forIn = yv, a.forInRight = wv, a.forOwn = kv, a.forOwnRight = xv, a.get = Bo, a.gt = zg, a.gte = qg, a.has = Av, a.hasIn = Do, a.head = tl, a.identity = pn, a.includes = cg, a.indexOf = ap, a.inRange = Gv, a.invoke = Rv, a.isArguments = At, a.isArray = ge, a.isArrayBuffer = Gg, a.isArrayLike = cn, a.isArrayLikeObject = Fe, a.isBoolean = Hg, a.isBuffer = vt, a.isDate = Kg, a.isElement = Yg, a.isEmpty = Zg, a.isEqual = Jg, a.isEqualWith = Xg, a.isError = Lo, a.isFinite = Qg, a.isFunction = nt, a.isInteger = vl, a.isLength = si, a.isMap = hl, a.isMatch = jg, a.isMatchWith = ev, a.isNaN = nv, a.isNative = tv, a.isNil = iv, a.isNull = rv, a.isNumber = _l, a.isObject = Ue, a.isObjectLike = Ne, a.isPlainObject = gr, a.isRegExp = Oo, a.isSafeInteger = ov, a.isSet = ml, a.isString = li, a.isSymbol = bn, a.isTypedArray = Ft, a.isUndefined = av, a.isWeakMap = sv, a.isWeakSet = lv, a.join = cp, a.kebabCase = Xv, a.last = Rn, a.lastIndexOf = fp, a.lowerCase = Qv, a.lowerFirst = jv, a.lt = uv, a.lte = dv, a.max = Kh, a.maxBy = Yh, a.mean = Zh, a.meanBy = Jh, a.min = Xh, a.minBy = Qh, a.stubArray = No, a.stubFalse = Fo, a.stubObject = Vh, a.stubString = Ph, a.stubTrue = Mh, a.multiply = jh, a.nth = pp, a.noConflict = Rh, a.noop = Uo, a.now = ii, a.pad = eh, a.padEnd = nh, a.padStart = th, a.parseInt = rh, a.random = Hv, a.reduce = hg, a.reduceRight = _g, a.repeat = ih, a.replace = oh, a.result = Wv, a.round = e_, a.runInContext = f, a.sample = bg, a.size = kg, a.snakeCase = ah, a.some = xg, a.sortedIndex = yp, a.sortedIndexBy = wp, a.sortedIndexOf = kp, a.sortedLastIndex = xp, a.sortedLastIndexBy = Sp, a.sortedLastIndexOf = Cp, a.startCase = lh, a.startsWith = uh, a.subtract = n_, a.sum = t_, a.sumBy = r_, a.template = dh, a.times = Uh, a.toFinite = tt, a.toInteger = he, a.toLength = yl, a.toLower = ch, a.toNumber = En, a.toSafeInteger = cv, a.toString = Re, a.toUpper = fh, a.trim = ph, a.trimEnd = gh, a.trimStart = vh, a.truncate = hh, a.unescape = _h, a.uniqueId = Fh, a.upperCase = mh, a.upperFirst = Wo, a.each = al, a.eachRight = sl, a.first = tl, Mo(a, (function() {
          var e = {};
          return zn(a, function(n, t) {
            Te.call(a.prototype, t) || (e[t] = n);
          }), e;
        })(), { chain: !1 }), a.VERSION = w, Sn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          a[e].placeholder = a;
        }), Sn(["drop", "take"], function(e, n) {
          ke.prototype[e] = function(t) {
            t = t === o ? 1 : Ge(he(t), 0);
            var r = this.__filtered__ && !n ? new ke(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = tn(t, r.__takeCount__) : r.__views__.push({
              size: tn(t, un),
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
              iteratee: se(i, 3),
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
          return this.filter(ai(se(e)));
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
            var l = this.__wrapped__, d = r ? [1] : arguments, v = l instanceof ke, E = d[0], O = v || ge(l), V = function(we) {
              var Se = i.apply(a, lt([we], d));
              return r && G ? Se[0] : Se;
            };
            O && t && typeof E == "function" && E.length != 1 && (v = O = !1);
            var G = this.__chain__, j = !!this.__actions__.length, ue = s && !G, _e = v && !j;
            if (!s && O) {
              l = _e ? l : new ke(this);
              var de = e.apply(l, d);
              return de.__actions__.push({ func: ti, args: [V], thisArg: o }), new An(de, G);
            }
            return ue && _e ? e.apply(this, d) : (de = this.thru(V), ue ? r ? de.value()[0] : de.value() : de);
          });
        }), Sn(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var n = Ir[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
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
      mt ? ((mt.exports = Bt)._ = Bt, Vi._ = Bt) : Ze._ = Bt;
    }).call(F0);
  })(hr, hr.exports)), hr.exports;
}
var q0 = z0();
const G0 = { class: "editor" }, H0 = { class: "editor__fields" }, K0 = { class: "editor__actions" }, Y0 = {
  key: 1,
  class: "editor__preview"
}, Z0 = /* @__PURE__ */ je({
  __name: "DatasourceEditor",
  props: {
    itemId: {},
    view: { default: "settings" }
  },
  emits: ["close"],
  setup(g, { emit: _ }) {
    const o = g, w = ee({}), b = xe(ta), A = xe(at), c = Tn(A, (L) => L.connections), T = Tn(A, (L) => L.datasources), C = ne(() => b.registeredDatasources);
    Hn(() => {
      const L = b.getDatasourceModel(o.itemId);
      w.value = L ? {
        uid: L.uid,
        name: L.name,
        type: L.type,
        config: q0.cloneDeep(L.config ?? {})
      } : {};
    });
    const p = () => {
      const L = b.getDatasourceModel(o.itemId);
      L && (L.name = w.value.name, L.type = w.value.type, L.config = w.value.config, L.connection = c.value.find(
        (K) => K.uid === w.value.config?.connection
      ), b.saveDatasource(L)), q("close");
    }, y = ne(() => {
      const L = b.getDatasourceIdentifiers(w.value.type);
      return L ? b.resolveIdentifier(L.Preview) : null;
    }), H = ne(() => {
      const L = b.getDatasourceIdentifiers(w.value.type);
      return L ? b.resolveIdentifier(L.Settings) : null;
    }), z = (L) => {
      w.value.config = L;
    }, q = _;
    return (L, K) => (m(), $("div", G0, [
      g.view === "settings" ? (m(), $(Ce, { key: 0 }, [
        u("div", H0, [
          B(h(gn), {
            modelValue: w.value.uid,
            "onUpdate:modelValue": K[0] || (K[0] = (P) => w.value.uid = P),
            label: "UID",
            readonly: ""
          }, null, 8, ["modelValue"]),
          B(h(gn), {
            modelValue: w.value.name,
            "onUpdate:modelValue": K[1] || (K[1] = (P) => w.value.name = P),
            label: "Name"
          }, null, 8, ["modelValue"]),
          B(h(Un), {
            modelValue: w.value.type,
            "onUpdate:modelValue": K[2] || (K[2] = (P) => w.value.type = P),
            label: "Typ",
            options: C.value
          }, null, 8, ["modelValue", "options"]),
          (m(), Be(Kn(H.value), {
            config: w.value.config,
            connections: h(c),
            dataSources: h(T)
          }, null, 8, ["config", "connections", "dataSources"]))
        ]),
        u("div", K0, [
          B(h(be), {
            intent: "quiet",
            onClick: K[3] || (K[3] = (P) => L.$emit("close"))
          }, {
            default: te(() => [...K[4] || (K[4] = [
              le("Schließen", -1)
            ])]),
            _: 1
          }),
          B(h(be), {
            intent: "primary",
            onClick: p
          }, {
            default: te(() => [...K[5] || (K[5] = [
              le("Speichern", -1)
            ])]),
            _: 1
          })
        ])
      ], 64)) : (m(), $("div", Y0, [
        (m(), Be(Kn(y.value), {
          "data-source": w.value,
          key: w.value.uid,
          onUpdateConfig: z
        }, null, 40, ["data-source"]))
      ]))
    ]));
  }
}), J0 = /* @__PURE__ */ en(Z0, [["__scopeId", "data-v-b30445c3"]]), X0 = { class: "editor" }, Q0 = { class: "editor__fields" }, j0 = { class: "editor__actions" }, eb = /* @__PURE__ */ je({
  __name: "ConnectionEditor",
  props: {
    itemId: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(g, { emit: _ }) {
    const o = g, w = _, b = ee({}), A = xe(na), c = ne(() => A.registeredConnections);
    Hn(() => {
      const p = A.getConnectionModel(o.itemId);
      b.value = p ? {
        uid: p.uid,
        name: p.name,
        type: p.type,
        config: JSON.parse(JSON.stringify(p.config ?? {}))
      } : {};
    });
    const T = ne(() => {
      const p = A.getConnectionIdentifiers(b.value.type);
      return p ? A.resolveIdentifier(p.Settings) : null;
    }), C = () => {
      const p = A.getConnectionModel(o.itemId);
      p && (p.name = b.value.name, p.type = b.value.type, p.config = b.value.config, A.saveConnection(p)), w("close");
    };
    return (p, y) => (m(), $("div", X0, [
      u("div", Q0, [
        B(h(gn), {
          modelValue: b.value.uid,
          "onUpdate:modelValue": y[0] || (y[0] = (H) => b.value.uid = H),
          label: "UID",
          readonly: ""
        }, null, 8, ["modelValue"]),
        B(h(gn), {
          modelValue: b.value.name,
          "onUpdate:modelValue": y[1] || (y[1] = (H) => b.value.name = H),
          label: "Name"
        }, null, 8, ["modelValue"]),
        B(h(Un), {
          modelValue: b.value.type,
          "onUpdate:modelValue": y[2] || (y[2] = (H) => b.value.type = H),
          label: "Typ",
          options: c.value
        }, null, 8, ["modelValue", "options"]),
        (m(), Be(Kn(T.value), {
          config: b.value.config
        }, null, 8, ["config"]))
      ]),
      u("div", j0, [
        B(h(be), {
          intent: "quiet",
          onClick: y[3] || (y[3] = (H) => p.$emit("close"))
        }, {
          default: te(() => [...y[4] || (y[4] = [
            le("Schließen", -1)
          ])]),
          _: 1
        }),
        B(h(be), {
          intent: "primary",
          onClick: C
        }, {
          default: te(() => [...y[5] || (y[5] = [
            le("Speichern", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), nb = /* @__PURE__ */ en(eb, [["__scopeId", "data-v-c18a8ecf"]]), tb = { class: "data-page" }, rb = { class: "data-page__tree" }, ib = { class: "data-page__detail" }, ob = {
  key: 0,
  class: "data-page__nothing"
}, ab = { class: "detail__head" }, sb = { class: "detail__what" }, lb = { class: "detail__name" }, ub = {
  key: 0,
  class: "detail__sub"
}, db = {
  key: 0,
  class: "detail__usage"
}, cb = { class: "detail__body" }, fb = /* @__PURE__ */ je({
  __name: "ConnectionsAndData",
  setup(g) {
    const _ = xe(at), o = Tn(_, (L) => L.connections), w = Tn(_, (L) => L.datasources), { usageOf: b, usageLabel: A } = yu(), c = ee(void 0), T = ee("preview"), C = xe("endpointfinder", null), p = () => C?.(), y = Yl(() => {
      const L = c.value;
      if (L)
        return L.type === "Connection" ? o.value.find((K) => K.uid === L.itemId) : w.value.find((K) => K.uid === L.itemId);
    }), H = ne(() => {
      const L = y.value;
      return L ? c.value?.type === "Connection" ? L.type ?? "" : [L.type, L.connection?.name].filter(Boolean).join(" · ") : "";
    }), z = ne(() => c.value?.type !== "DataSource" || !c.value.itemId ? "" : A(b(c.value.itemId))), q = ne(
      () => c.value?.type === "DataSource" ? [
        { id: "preview", label: "Vorschau" },
        { id: "settings", label: "Einstellungen" }
      ] : [{ id: "settings", label: "Einstellungen" }]
    );
    return Nn(c, (L) => {
      T.value = L?.type === "DataSource" ? "preview" : "settings";
    }), (L, K) => (m(), $("div", tb, [
      u("aside", rb, [
        B(N0, {
          modelValue: c.value,
          "onUpdate:modelValue": K[0] || (K[0] = (P) => c.value = P),
          onFindEndpoints: p
        }, null, 8, ["modelValue"])
      ]),
      u("section", ib, [
        c.value ? (m(), $(Ce, { key: 1 }, [
          u("header", ab, [
            u("div", sb, [
              u("h1", lb, F(h(y)?.name ?? c.value.itemId), 1),
              H.value ? (m(), $("span", ub, F(H.value), 1)) : re("", !0)
            ]),
            z.value ? (m(), $("span", db, "Verwendet in " + F(z.value), 1)) : re("", !0)
          ]),
          B(h(k_), {
            modelValue: T.value,
            "onUpdate:modelValue": K[1] || (K[1] = (P) => T.value = P),
            tabs: q.value,
            label: "Ansicht der Auswahl"
          }, null, 8, ["modelValue", "tabs"]),
          u("div", cb, [
            c.value.type === "Connection" ? (m(), Be(nb, {
              key: c.value.itemId,
              "item-id": c.value.itemId,
              onClose: K[2] || (K[2] = (P) => c.value = void 0)
            }, null, 8, ["item-id"])) : (m(), Be(J0, {
              key: `${c.value.itemId}-${T.value}`,
              "item-id": c.value.itemId,
              view: T.value === "preview" ? "preview" : "settings",
              onClose: K[3] || (K[3] = (P) => c.value = void 0)
            }, null, 8, ["item-id", "view"]))
          ])
        ], 64)) : (m(), $("p", ob, " Wähle links eine Verbindung oder eine Datenquelle. "))
      ])
    ]));
  }
}), pb = /* @__PURE__ */ en(fb, [["__scopeId", "data-v-91f5d575"]]), gb = { class: "add_widget_window" }, vb = { class: "add_widget_window__scroll" }, hb = { class: "widgets_grid-icon" }, _b = ["src"], mb = { class: "widgets_grid-name" }, bb = /* @__PURE__ */ je({
  __name: "AddWidgetWindow",
  setup(g) {
    const _ = ee(""), o = ee(""), w = Tn(xe(at), (p) => p.datasources), b = (p) => {
      const y = document.createElement("div");
      document.body.appendChild(y), p.dataTransfer?.setDragImage(y, 0, 0), setTimeout(() => {
        document.body.removeChild(y);
      }, 0);
    }, A = xe(nu);
    console.log(A.getAllWidgets());
    const c = Object.entries(A.getAllWidgets()).map(([p, y]) => ({ type: p, name: y.name, icon: y.icon })), T = ne(() => c);
    ne(() => [
      "None",
      ...w.value.map((p) => p.type).filter((p, y, H) => y === H.indexOf(p))
    ]);
    const C = ne(() => w.value.filter((p) => p.type === o.value).map((p) => ({ uid: p.uid })));
    return Nn(o, (p) => {
      !p || p === "None" ? _.value = "" : C.value.map((H) => H.uid).includes(_.value) || (_.value = "");
    }), (p, y) => (m(), $("div", gb, [
      u("div", vb, [
        B(h(N_), {
          class: "widgets_grid",
          list: T.value,
          group: { name: "widgets", pull: "clone", put: !1 },
          itemKey: "type"
        }, {
          item: te(({ element: H }) => [
            u("div", {
              class: "widgets_grid-item",
              draggable: "true",
              onDragstart: y[0] || (y[0] = (z) => b(z))
            }, [
              u("span", hb, [
                u("img", {
                  src: H.icon,
                  alt: ""
                }, null, 8, _b)
              ]),
              u("span", mb, F(H.name), 1)
            ], 32)
          ]),
          _: 1
        }, 8, ["list"])
      ])
    ]));
  }
}), yb = /* @__PURE__ */ en(bb, [["__scopeId", "data-v-3ac9fb06"]]), wb = {
  class: "overlay",
  role: "dialog",
  "aria-modal": "true",
  "aria-label": "Widget-Einstellungen"
}, kb = { class: "stage" }, xb = { class: "stage__head" }, Sb = { class: "stage__name" }, Cb = { class: "stage__uid" }, Ab = {
  class: "seg",
  role: "group",
  "aria-label": "Vorschaugröße"
}, $b = { class: "stage__bar" }, Ib = { class: "stage__body" }, Rb = {
  class: "tabs",
  role: "tablist",
  "aria-label": "Einstellungen"
}, Eb = ["aria-selected"], Tb = { class: "tab__n" }, Lb = ["aria-selected"], Ob = ["aria-selected", "onClick"], Bb = ["aria-selected"], Db = ["aria-selected"], Wb = { class: "tab__n" }, Vb = ["aria-selected"], Pb = { class: "tab__n" }, Mb = {
  key: 0,
  class: "fields"
}, Ub = {
  key: 0,
  class: "bound"
}, Nb = { class: "bound__name" }, Fb = { class: "bound__var" }, zb = {
  key: 1,
  class: "note"
}, qb = { class: "foot" }, Gb = ":scope > [data-section], :scope > .va-collapse", Hb = /* @__PURE__ */ je({
  __name: "WidgetSettingsOverlay",
  props: /* @__PURE__ */ hi({
    boardSize: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ hi(["close"], ["update:modelValue"]),
  setup(g, { emit: _ }) {
    const o = _, w = jo(g, "modelValue"), b = g, A = Tn(xe(at), (k) => k.datasources), T = xe(nu).getAllWidgets();
    xe("i18n");
    const C = ee("look"), p = ne(() => {
      const k = w.value?.type;
      return k ? T[k]?.settingsForm : void 0;
    }), y = ne(
      () => !!(w.value?.type && T[w.value.type]?.settingsComponent)
    ), H = ne(() => !!p.value && y.value), z = ne(() => !!p.value || y.value);
    Nn(z, (k) => {
      !k && C.value === "look" && (C.value = "data");
    }, { immediate: !0 });
    const q = ee(), L = ee([]), K = ee(0);
    function P(k) {
      return k ? [...k.querySelectorAll(Gb)] : [];
    }
    function R() {
      return P(q.value);
    }
    function W(k) {
      const x = k.dataset.section;
      if (x) return x;
      const Y = k.querySelector(".va-collapse__header-wrapper");
      return Y ? [...Y.querySelectorAll("*")].filter((Ae) => !Ae.classList.contains("va-icon") && Ae.children.length === 0).map((Ae) => (Ae.textContent ?? "").trim()).filter((Ae) => Ae && !/^(expand_more|expand_less|add_circle)$/.test(Ae))[0] ?? "" : "";
    }
    function Q(k) {
      return k.className.includes("--expanded");
    }
    function ie(k) {
      K.value = k, R().forEach((x, Y) => {
        const Le = Y === k;
        if (x.classList.contains("va-collapse")) {
          const Ae = x.querySelector(".va-collapse__header-wrapper");
          Ae && (Ae.style.display = "none"), Le !== Q(x) && Ae?.click();
        }
        x.style.display = Le ? "" : "none";
      });
    }
    async function M() {
      await gi();
      const k = R();
      L.value = k.map((x, Y) => ({ label: W(x) || `Abschnitt ${Y + 1}`, index: Y })), k.length && ie(Math.min(K.value, k.length - 1));
    }
    function X(k) {
      C.value = "look", ie(k);
    }
    const ve = ee();
    async function We() {
      const k = p.value?.unmodelledSections, x = ve.value;
      if (!(!k || !x)) {
        await gi();
        for (const Y of P(x))
          Y.style.display = k.includes(W(Y)) ? "" : "none";
      }
    }
    Nn(C, (k) => {
      k === "rest" && We();
    });
    let ae = {
      wrapperConfig: {},
      config: {}
    };
    function ce(k) {
      return w.value?.[k];
    }
    function fe(k) {
      if (k)
        return typeof k.toArray == "function" ? k.toArray() : Array.isArray(k) ? [...k] : void 0;
    }
    function Ie() {
      ae = { wrapperConfig: {}, config: {} };
      for (const k of ["wrapperConfig", "config"]) {
        const x = ce(k);
        if (x)
          for (const [Y, Le] of Object.entries(x)) {
            const Ae = fe(Le), kn = !!Le && typeof Le == "object" && "value" in Le;
            ae[k][Y] = {
              field: Le,
              hasValue: kn,
              value: kn ? Le.value : void 0,
              list: Ae
            };
          }
      }
    }
    function nn() {
      for (const k of ["wrapperConfig", "config"]) {
        const x = ce(k);
        if (x)
          for (const [Y, Le] of Object.entries(ae[k]))
            try {
              if (Le.list) {
                const vn = x[Y];
                if (vn && typeof vn.clear == "function") {
                  vn.clear();
                  for (const On of Le.list) vn.add(On);
                } else Array.isArray(vn) && vn.splice(0, vn.length, ...Le.list);
                continue;
              }
              const Ae = x[Y], kn = !!Ae && typeof Ae == "object" && "value" in Ae;
              Le.hasValue && kn ? Ae.value = Le.value : x[Y] = Le.field;
            } catch {
            }
      }
    }
    function ye() {
      nn(), o("close");
    }
    function oe() {
      o("close");
    }
    const N = ee(!1), D = ne(() => N.value || !b.boardSize ? { width: "100%", height: "100%" } : {
      width: `${b.boardSize.width}px`,
      height: `${b.boardSize.height}px`,
      maxWidth: "100%",
      maxHeight: "100%"
    }), J = ne(
      () => b.boardSize ? `${Math.round(b.boardSize.width)} × ${Math.round(b.boardSize.height)} px, wie im Board` : "Größe des Boards nicht bekannt"
    ), Ve = ee(un());
    let on = !1;
    function un() {
      const k = Number(localStorage.getItem("daanse.board.widgetSettingsWidth"));
      return Number.isFinite(k) && k >= 320 ? k : 400;
    }
    function ht(k) {
      on = !0, k.target.setPointerCapture?.(k.pointerId);
    }
    function It(k) {
      if (!on) return;
      const x = window.innerWidth - k.clientX;
      Ve.value = Math.min(Math.max(x, 320), Math.max(window.innerWidth - 360, 360));
    }
    function _t() {
      if (on) {
        on = !1;
        try {
          localStorage.setItem("daanse.board.widgetSettingsWidth", String(Math.round(Ve.value)));
        } catch {
        }
      }
    }
    function Ln(k) {
      Ve.value = Math.min(Math.max(Ve.value + k, 320), window.innerWidth - 360), _t();
    }
    const Fn = ne(() => {
      const k = [], x = [
        ["Rahmen", w.value?.wrapperConfig],
        ["Darstellung", w.value?.config]
      ];
      for (const [Y, Le] of x)
        for (const [Ae, kn] of Object.entries(Le ?? {})) {
          const vn = kn?.variable;
          vn && k.push({ group: Y, name: Ae, variable: String(vn?.name ?? vn) });
        }
      return k;
    }), Zt = ne(() => Object.keys(w.value?.wrapperConfig ?? {}).length), Yn = ne(() => w.value?.config?.datasourceId ? 1 : 0);
    function U(k) {
      k.key === "Escape" && ye();
    }
    return Nn(C, (k) => {
      k === "look" && M();
    }), Hn(() => {
      Ie(), M(), window.addEventListener("keydown", U), window.addEventListener("pointermove", It), window.addEventListener("pointerup", _t);
    }), Qo(() => {
      window.removeEventListener("keydown", U), window.removeEventListener("pointermove", It), window.removeEventListener("pointerup", _t);
    }), (k, x) => (m(), Be(Gl, { to: "body" }, [
      u("div", {
        class: "scrim",
        onClick: x[14] || (x[14] = Mn((Y) => ye(), ["self"]))
      }, [
        u("section", wb, [
          u("div", kb, [
            u("header", xb, [
              u("span", Sb, F(w.value?.type ?? "Widget"), 1),
              u("code", Cb, F(w.value?.uid), 1),
              x[15] || (x[15] = u("span", { class: "stage__spacer" }, null, -1)),
              u("div", Ab, [
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
            u("div", $b, F(N.value ? "Auf die Fläche gestreckt" : J.value), 1),
            u("div", Ib, [
              u("div", {
                class: "preview",
                style: Yt(D.value)
              }, [
                d_(k.$slots, "preview", {}, void 0, !0)
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
              x[2] || (x[2] = vi(Mn((Y) => Ln(16), ["prevent"]), ["left"])),
              x[3] || (x[3] = vi(Mn((Y) => Ln(-16), ["prevent"]), ["right"]))
            ]
          }, null, 32),
          u("div", {
            class: "side",
            style: Yt({ width: Ve.value + "px" })
          }, [
            u("nav", Rb, [
              u("button", {
                type: "button",
                role: "tab",
                "aria-selected": C.value === "data",
                class: Ee(["tab", { on: C.value === "data" }]),
                onClick: x[4] || (x[4] = (Y) => C.value = "data")
              }, [
                x[16] || (x[16] = le(" Daten ", -1)),
                u("span", Tb, F(Yn.value), 1)
              ], 10, Eb),
              !L.value.length && z.value ? (m(), $("button", {
                key: 0,
                type: "button",
                role: "tab",
                "aria-selected": C.value === "look",
                class: Ee(["tab", { on: C.value === "look" }]),
                onClick: x[5] || (x[5] = (Y) => C.value = "look")
              }, " Darstellung ", 10, Lb)) : re("", !0),
              (m(!0), $(Ce, null, Ke(L.value, (Y) => (m(), $("button", {
                key: Y.index,
                type: "button",
                role: "tab",
                "aria-selected": C.value === "look" && K.value === Y.index,
                class: Ee(["tab", { on: C.value === "look" && K.value === Y.index }]),
                onClick: (Le) => X(Y.index)
              }, F(Y.label), 11, Ob))), 128)),
              H.value ? (m(), $("button", {
                key: 1,
                type: "button",
                role: "tab",
                "aria-selected": C.value === "rest",
                class: Ee(["tab", { on: C.value === "rest" }]),
                onClick: x[6] || (x[6] = (Y) => C.value = "rest")
              }, " Weiteres ", 10, Bb)) : re("", !0),
              u("button", {
                type: "button",
                role: "tab",
                "aria-selected": C.value === "frame",
                class: Ee(["tab", { on: C.value === "frame" }]),
                onClick: x[7] || (x[7] = (Y) => C.value = "frame")
              }, [
                x[17] || (x[17] = le(" Rahmen ", -1)),
                u("span", Wb, F(Zt.value), 1)
              ], 10, Db),
              u("button", {
                type: "button",
                role: "tab",
                "aria-selected": C.value === "variables",
                class: Ee(["tab", { on: C.value === "variables" }]),
                onClick: x[8] || (x[8] = (Y) => C.value = "variables")
              }, [
                x[18] || (x[18] = le(" Variablen ", -1)),
                u("span", Pb, F(Fn.value.length), 1)
              ], 10, Vb)
            ]),
            w.value ? (m(), $("div", Mb, [
              C.value === "data" ? (m(), $(Ce, { key: 0 }, [
                B(h(Un), {
                  modelValue: w.value.config.datasourceId,
                  "onUpdate:modelValue": x[9] || (x[9] = (Y) => w.value.config.datasourceId = Y),
                  label: "Datenquelle",
                  class: "pick",
                  options: h(A),
                  clearable: ""
                }, null, 8, ["modelValue", "options"]),
                x[19] || (x[19] = u("p", { class: "note" }, " Woher dieses Widget seine Werte nimmt. Ohne Datenquelle zeigt es nur, was fest eingestellt ist. ", -1))
              ], 64)) : re("", !0),
              Kt(u("div", {
                ref_key: "lookHost",
                ref: q
              }, [
                p.value ? (m(), Be(h(_i), {
                  key: 0,
                  modelValue: w.value.config,
                  "onUpdate:modelValue": x[10] || (x[10] = (Y) => w.value.config = Y),
                  create: p.value.create,
                  "ui-model-xmi": p.value.xmi,
                  "domain-package": p.value.ePackage(),
                  "ui-model-uri": p.value.uri,
                  "entry-forms": p.value.entryForms
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : (m(), Be(Kn(h(T)[w.value.type ?? ""]?.settingsComponent), {
                  modelValue: w.value.config,
                  "onUpdate:modelValue": x[11] || (x[11] = (Y) => w.value.config = Y),
                  key: w.value.uid,
                  dataSources: h(A)
                }, null, 8, ["modelValue", "dataSources"]))
              ], 512), [
                [zo, C.value === "look"]
              ]),
              Kt(u("div", {
                ref_key: "restHost",
                ref: ve
              }, [
                x[20] || (x[20] = u("p", { class: "rest__note" }, " Einstellungen, die dieses Widget selbst mitbringt und die sich nicht als Feld beschreiben lassen. ", -1)),
                H.value ? (m(), Be(Kn(h(T)[w.value.type ?? ""]?.settingsComponent), {
                  modelValue: w.value.config,
                  "onUpdate:modelValue": x[12] || (x[12] = (Y) => w.value.config = Y),
                  key: w.value.uid + "-rest",
                  dataSources: h(A)
                }, null, 8, ["modelValue", "dataSources"])) : re("", !0)
              ], 512), [
                [zo, C.value === "rest"]
              ]),
              Kt(u("div", null, [
                B(h(_i), {
                  modelValue: w.value.wrapperConfig,
                  "onUpdate:modelValue": x[13] || (x[13] = (Y) => w.value.wrapperConfig = Y),
                  create: () => new (h(q_))(),
                  "ui-model-xmi": h(z_),
                  "domain-package": h(F_).eINSTANCE,
                  "ui-model-uri": "/wrapper-settings.ui.xmi"
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package"])
              ], 512), [
                [zo, C.value === "frame"]
              ]),
              C.value === "variables" ? (m(), $(Ce, { key: 1 }, [
                Fn.value.length ? (m(), $("table", Ub, [
                  x[21] || (x[21] = u("thead", null, [
                    u("tr", null, [
                      u("th", null, "Feld"),
                      u("th", null, "Bereich"),
                      u("th", null, "Variable")
                    ])
                  ], -1)),
                  u("tbody", null, [
                    (m(!0), $(Ce, null, Ke(Fn.value, (Y) => (m(), $("tr", {
                      key: Y.group + Y.name
                    }, [
                      u("td", Nb, F(Y.name), 1),
                      u("td", null, F(Y.group), 1),
                      u("td", Fb, F(Y.variable), 1)
                    ]))), 128))
                  ])
                ])) : (m(), $("p", zb, [...x[22] || (x[22] = [
                  le(" Kein Feld dieses Widgets hängt an einer Variablen. Über das ", -1),
                  u("span", { class: "var-mark" }, "{x}", -1),
                  le(" neben einem Feld lässt sich eines binden. ", -1)
                ])]))
              ], 64)) : re("", !0)
            ])) : re("", !0),
            u("footer", qb, [
              x[25] || (x[25] = u("span", { class: "foot__hint" }, "Änderungen greifen erst mit „Fertig“", -1)),
              x[26] || (x[26] = u("span", { class: "stage__spacer" }, null, -1)),
              B(h(be), {
                size: "sm",
                onClick: ye
              }, {
                default: te(() => [...x[23] || (x[23] = [
                  le("Verwerfen", -1)
                ])]),
                _: 1
              }),
              B(h(be), {
                intent: "primary",
                size: "sm",
                onClick: oe
              }, {
                default: te(() => [...x[24] || (x[24] = [
                  le("Fertig", -1)
                ])]),
                _: 1
              })
            ])
          ], 4)
        ])
      ])
    ]));
  }
}), Kb = /* @__PURE__ */ en(Hb, [["__scopeId", "data-v-67bd2420"]]), Yb = {
  class: "page-settings",
  "aria-label": "Seite einrichten"
}, Zb = { class: "head" }, Jb = { class: "body" }, Xb = {
  key: 0,
  class: "missing"
}, Qb = { class: "group" }, jb = { class: "group" }, ey = { class: "group" }, ny = { class: "group" }, ty = { class: "ident" }, ry = { class: "foot" }, iy = /* @__PURE__ */ je({
  __name: "PageSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ hi(["close"], ["update:modelValue"]),
  setup(g, { emit: _ }) {
    const o = jo(g, "modelValue"), w = _, b = xe(yr), A = xe(yi), c = ee(null), T = ne(() => A?.getAllLayouts() ?? []), C = ne(
      () => T.value.find(
        (P) => P.id === "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      ) ?? T.value[0]
    ), p = ne({
      get: () => c.value?.layoutId ?? "",
      set: (P) => {
        c.value && (c.value.layoutId = P);
      }
    }), y = ne(
      () => c.value?.layoutId ? A?.getLayout(c.value.layoutId) : void 0
    ), H = [
      { uid: "auto", name: "Auto" },
      { uid: "cover", name: "Füllend" },
      { uid: "contain", name: "Einpassend" }
    ], z = [
      { uid: "no-repeat", name: "Nicht wiederholen" },
      { uid: "repeat", name: "Wiederholen" },
      { uid: "repeat-x", name: "Waagerecht wiederholen" },
      { uid: "repeat-y", name: "Senkrecht wiederholen" }
    ], q = [
      { uid: "center", name: "Mitte" },
      { uid: "top", name: "Oben" },
      { uid: "bottom", name: "Unten" },
      { uid: "left", name: "Links" },
      { uid: "right", name: "Rechts" },
      { uid: "top left", name: "Oben links" },
      { uid: "top right", name: "Oben rechts" },
      { uid: "bottom left", name: "Unten links" },
      { uid: "bottom right", name: "Unten rechts" }
    ], L = ne(() => !!c.value?.backgroundImage?.trim());
    function K() {
      if (!o.value || !b) {
        c.value = null;
        return;
      }
      let P;
      try {
        P = b.getPage(o.value);
      } catch {
        P = void 0;
      }
      c.value = P ? {
        id: P.id,
        name: P.name,
        description: P.description,
        icon: P.icon,
        visibleInNavigation: P.visibleInNavigation ?? !0,
        layoutId: P.layoutId ?? C.value?.id,
        layoutSettings: P.layoutSettings,
        backgroundColor: P.backgroundColor,
        backgroundImage: P.backgroundImage,
        backgroundSize: P.backgroundSize,
        backgroundPosition: P.backgroundPosition,
        backgroundRepeat: P.backgroundRepeat
      } : null;
    }
    return Hn(K), Nn(o, K), Nn(
      c,
      () => {
        c.value && b?.updatePage(c.value);
      },
      { deep: !0 }
    ), (P, R) => (m(), $("aside", Yb, [
      u("header", Zb, [
        R[14] || (R[14] = u("h2", { class: "head__title" }, "Seite einrichten", -1)),
        u("button", {
          type: "button",
          class: "head__close",
          "aria-label": "Schließen",
          onClick: R[0] || (R[0] = (W) => w("close"))
        }, " × ")
      ]),
      u("div", Jb, [
        c.value ? (m(), $(Ce, { key: 1 }, [
          u("section", Qb, [
            R[15] || (R[15] = u("h3", { class: "group__label" }, "Seite", -1)),
            B(h(gn), {
              modelValue: c.value.name,
              "onUpdate:modelValue": R[1] || (R[1] = (W) => c.value.name = W),
              label: "Name"
            }, null, 8, ["modelValue"]),
            B(h(gn), {
              modelValue: c.value.description,
              "onUpdate:modelValue": R[2] || (R[2] = (W) => c.value.description = W),
              label: "Beschreibung"
            }, null, 8, ["modelValue"]),
            B(h(gn), {
              modelValue: c.value.icon,
              "onUpdate:modelValue": R[3] || (R[3] = (W) => c.value.icon = W),
              label: "Symbol",
              placeholder: "Name eines Material-Icons"
            }, null, 8, ["modelValue"])
          ]),
          u("section", jb, [
            R[16] || (R[16] = u("h3", { class: "group__label" }, "Layout", -1)),
            B(h(Un), {
              modelValue: p.value,
              "onUpdate:modelValue": R[4] || (R[4] = (W) => p.value = W),
              label: "Layout",
              options: T.value,
              "value-key": "id",
              "label-key": "name"
            }, null, 8, ["modelValue", "options"]),
            y.value?.settingsForm ? (m(), Be(h(_i), {
              key: 0,
              modelValue: c.value.layoutSettings,
              "onUpdate:modelValue": R[5] || (R[5] = (W) => c.value.layoutSettings = W),
              create: y.value.settingsForm.create,
              "ui-model-xmi": y.value.settingsForm.xmi,
              "domain-package": y.value.settingsForm.ePackage(),
              "ui-model-uri": y.value.settingsForm.uri,
              "entry-forms": y.value.settingsForm.entryForms
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : y.value?.settings ? (m(), Be(Kn(y.value.settings), {
              key: 1,
              modelValue: c.value.layoutSettings,
              "onUpdate:modelValue": R[6] || (R[6] = (W) => c.value.layoutSettings = W)
            }, null, 8, ["modelValue"])) : re("", !0)
          ]),
          u("section", ey, [
            R[17] || (R[17] = u("h3", { class: "group__label" }, "Hintergrund", -1)),
            B(h(Zl), {
              modelValue: c.value.backgroundColor,
              "onUpdate:modelValue": R[7] || (R[7] = (W) => c.value.backgroundColor = W),
              label: "Farbe",
              stacked: ""
            }, null, 8, ["modelValue"]),
            B(h(gn), {
              modelValue: c.value.backgroundImage,
              "onUpdate:modelValue": R[8] || (R[8] = (W) => c.value.backgroundImage = W),
              label: "Bild",
              placeholder: "Adresse eines Bildes"
            }, null, 8, ["modelValue"]),
            L.value ? (m(), $(Ce, { key: 0 }, [
              B(h(Un), {
                modelValue: c.value.backgroundSize,
                "onUpdate:modelValue": R[9] || (R[9] = (W) => c.value.backgroundSize = W),
                label: "Größe",
                options: H
              }, null, 8, ["modelValue"]),
              B(h(Un), {
                modelValue: c.value.backgroundRepeat,
                "onUpdate:modelValue": R[10] || (R[10] = (W) => c.value.backgroundRepeat = W),
                label: "Wiederholung",
                options: z
              }, null, 8, ["modelValue"]),
              B(h(Un), {
                modelValue: c.value.backgroundPosition,
                "onUpdate:modelValue": R[11] || (R[11] = (W) => c.value.backgroundPosition = W),
                label: "Position",
                options: q
              }, null, 8, ["modelValue"])
            ], 64)) : re("", !0)
          ]),
          u("section", ny, [
            R[18] || (R[18] = u("h3", { class: "group__label" }, "Navigation", -1)),
            B(h(Jl), {
              modelValue: c.value.visibleInNavigation,
              "onUpdate:modelValue": R[12] || (R[12] = (W) => c.value.visibleInNavigation = W),
              label: "In der Navigation zeigen"
            }, null, 8, ["modelValue"])
          ]),
          u("p", ty, [
            R[19] || (R[19] = le(" Kennung ", -1)),
            u("code", null, F(c.value.id), 1)
          ])
        ], 64)) : (m(), $("p", Xb, " Diese Seite ist nicht mehr da. Wähle oben eine andere. "))
      ]),
      u("footer", ry, [
        B(h(be), {
          intent: "primary",
          onClick: R[13] || (R[13] = (W) => w("close"))
        }, {
          default: te(() => [...R[20] || (R[20] = [
            le("Fertig", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), oy = /* @__PURE__ */ en(iy, [["__scopeId", "data-v-9ea0fdd8"]]), ay = {
  ref: "board",
  class: "editor"
}, sy = { class: "report-container dottet" }, ly = /* @__PURE__ */ je({
  __name: "EditReport",
  setup(g) {
    const _ = ee(""), w = br().params.pageid ?? "", b = b_(w || ""), A = b.widgets, c = ee([]), T = xe("endpointfinder", null), C = () => {
      T();
    }, p = ne(() => !!T), { settingsFor: y, closeSettings: H } = iu(), z = (R) => {
      _.value = R;
    }, q = ne(() => {
      const R = A.value.find((W) => W.uid === _.value);
      return R || c.value.find((W) => W.uid === _.value);
    }), L = ne(() => {
      const R = b.layout.value.find((W) => W.id === _.value);
      if (!(!R?.width || !R?.height))
        return { width: R.width, height: R.height };
    }), { visible: K, hide: P } = ou();
    return (R, W) => (m(), $("div", ay, [
      h(K) ? (m(), Be(h(x_), {
        key: 0,
        title: "Widgets",
        "remember-as": "daanse.board.palette",
        initial: { x: 0, y: 0, w: 240, h: 460, dock: "left" },
        "min-width": 180,
        "max-width": 420,
        "min-height": 200,
        dockable: "",
        onClose: h(P)
      }, {
        actions: te(() => [
          p.value ? (m(), $("button", {
            key: 0,
            type: "button",
            class: "palette__act",
            title: "Endpunkte suchen",
            onPointerdown: W[0] || (W[0] = Mn(() => {
            }, ["stop"])),
            onClick: W[1] || (W[1] = (Q) => C())
          }, [
            B(h(He), {
              name: "travel_explore",
              size: "sm"
            })
          ], 32)) : re("", !0)
        ]),
        default: te(() => [
          B(yb)
        ]),
        _: 1
      }, 8, ["onClose"])) : re("", !0),
      u("div", sy, [
        B(hu, {
          pageId: h(w),
          onOpenWidgetSettings: z
        }, null, 8, ["pageId"]),
        B(c_, { duration: 150 }, {
          default: te(() => [
            h(y) ? (m(), Be(oy, {
              key: 0,
              modelValue: h(y),
              "onUpdate:modelValue": W[2] || (W[2] = (Q) => f_(y) ? y.value = Q : null),
              onClose: h(H)
            }, null, 8, ["modelValue", "onClose"])) : re("", !0)
          ]),
          _: 1
        })
      ]),
      _.value && q.value ? (m(), Be(Kb, {
        key: 1,
        modelValue: q.value,
        "onUpdate:modelValue": W[3] || (W[3] = (Q) => q.value = Q),
        "board-size": L.value,
        onClose: W[4] || (W[4] = (Q) => _.value = "")
      }, {
        preview: te(() => [
          B(h(G_), {
            widget: q.value,
            "edit-enabled": !1
          }, null, 8, ["widget"])
        ]),
        _: 1
      }, 8, ["modelValue", "board-size"])) : re("", !0)
    ], 512));
  }
}), zl = /* @__PURE__ */ en(ly, [["__scopeId", "data-v-bd444b0c"]]), Gt = I_({
  history: R_("/"),
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
      component: pb
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
}), uy = { class: "variables" }, dy = { class: "variables__head" }, cy = { class: "reach__title" }, fy = { class: "reach__lead" }, py = {
  key: 0,
  class: "rows"
}, gy = { class: "row__name" }, vy = { class: "row__type" }, hy = { class: "row__value" }, _y = { class: "row__tools" }, my = {
  key: 1,
  class: "reach__empty"
}, by = { class: "form" }, yy = { class: "confirm__text" }, wy = /* @__PURE__ */ je({
  __name: "Configuration",
  setup(g) {
    const _ = xe(eu), o = xe(at), w = xe(Symbol.for(ql)), b = Tn(o, (ye) => ye.variables), A = Tn(o, (ye) => ye.pages), c = ee(0), T = () => c.value += 1;
    Hn(() => w?.on(Wl.VariableUpdated, T)), Qo(() => w?.off(Wl.VariableUpdated, T));
    function C(ye) {
      c.value;
      try {
        const N = _.getVariableById(ye.uid)?.value;
        return N == null ? "" : typeof N == "object" ? JSON.stringify(N) : String(N);
      } catch {
        return "nur auf seiner Seite lesbar";
      }
    }
    const p = ne(() => {
      const ye = b.value.filter((D) => (D.scope ?? "global") === "global"), oe = A.value.map((D) => ({
        title: D.name,
        lead: "Nur auf diesem Board",
        page: D,
        rows: b.value.filter((J) => J.scope === "page" && J.page === D)
      })).filter((D) => D.rows.length > 0), N = b.value.filter((D) => D.scope === "page" && !D.page);
      return [
        { title: "Überall", lead: "Auf jedem Board lesbar", page: void 0, rows: ye },
        ...oe,
        ...N.length ? [{ title: "Ohne Board", lead: "Das Board dazu gibt es nicht mehr", page: void 0, rows: N }] : []
      ];
    }), y = ee([]);
    Hn(() => y.value = _.getRegisteredVariableTypes());
    const H = ne(() => [
      { text: "Überall", value: "" },
      ...A.value.map((ye) => ({ text: ye.name, value: ye.id }))
    ]), z = [
      { text: "Von außen beschreibbar", value: "external-writable" },
      { text: "Nur auf seiner Seite", value: "page-only" },
      { text: "Nur lesbar", value: "readonly" }
    ], q = ee(!1), L = ee(null), K = ee(""), P = ee(""), R = ee(""), W = ee("external-writable"), Q = ee({}), ie = ne(() => L.value !== null), M = ne(
      () => K.value ? _.getVariableIdentifiers(K.value)?.settingsForm : void 0
    ), X = ne(
      () => K.value ? _.getVariableIdentifiers(K.value)?.Settings : null
    );
    function ve() {
      L.value = null, K.value = y.value[0] ?? "", P.value = "", R.value = "Variable " + Math.random().toString(36).substring(7), W.value = "external-writable", Q.value = {}, q.value = !0;
    }
    function We(ye) {
      L.value = ye.uid, K.value = ye.type ?? "", P.value = ye.page?.id ?? "", R.value = ye.name, W.value = ye.accessMode ?? "external-writable";
      const oe = _.getVariableById(ye.uid), { name: N, ...D } = {
        ...ye.definition ?? {},
        ...oe?.serialize?.() ?? {}
      };
      Q.value = D, q.value = !0;
    }
    function ae(ye) {
      if (!H_(ye)) return { ...ye ?? {} };
      const oe = {};
      for (const N of ye.eClass().getEAllStructuralFeatures()) {
        const D = ye.eGet(N);
        D !== void 0 && (oe[N.getName()] = D);
      }
      return oe;
    }
    function ce() {
      Q.value = {};
    }
    function fe() {
      _.registerVariable(R.value, K.value, {
        ...ae(Q.value),
        uid: L.value ?? void 0,
        accessMode: W.value,
        scope: P.value ? "page" : "global",
        pageId: P.value || void 0
      }), q.value = !1, L.value = null;
    }
    const Ie = ee(null);
    function nn() {
      Ie.value && _.removeVariable(Ie.value.uid), Ie.value = null;
    }
    return (ye, oe) => (m(), $("div", uy, [
      u("header", dy, [
        oe[11] || (oe[11] = u("div", null, [
          u("h1", { class: "variables__title" }, "Variablen"),
          u("p", { class: "variables__lead" }, " Ein benannter Wert, den Widgets und Datenquellen lesen. Manche gelten überall, manche nur auf einem Board. ")
        ], -1)),
        B(h(be), {
          intent: "primary",
          onClick: ve
        }, {
          default: te(() => [
            B(h(He), {
              name: "add",
              size: "sm"
            }),
            oe[10] || (oe[10] = le("Variable anlegen ", -1))
          ]),
          _: 1
        })
      ]),
      (m(!0), $(Ce, null, Ke(p.value, (N) => (m(), $("section", {
        key: N.title,
        class: "reach"
      }, [
        u("h2", cy, [
          le(F(N.title), 1),
          u("span", fy, F(N.lead), 1)
        ]),
        N.rows.length ? (m(), $("ul", py, [
          (m(!0), $(Ce, null, Ke(N.rows, (D) => (m(), $("li", {
            key: D.uid,
            class: "row"
          }, [
            u("span", gy, F(D.name), 1),
            u("span", vy, F(D.type), 1),
            u("span", hy, F(C(D)), 1),
            u("span", _y, [
              B(h(be), {
                intent: "quiet",
                size: "sm",
                title: "Variable bearbeiten",
                onClick: (J) => We(D)
              }, {
                default: te(() => [
                  B(h(He), {
                    name: "edit",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"]),
              B(h(be), {
                intent: "quiet",
                size: "sm",
                title: "Variable löschen",
                onClick: (J) => Ie.value = D
              }, {
                default: te(() => [
                  B(h(He), {
                    name: "delete",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]))), 128))
        ])) : (m(), $("p", my, "Noch keine."))
      ]))), 128)),
      B(h(Ko), {
        modelValue: q.value,
        "onUpdate:modelValue": oe[7] || (oe[7] = (N) => q.value = N),
        title: ie.value ? "Variable bearbeiten" : "Variable anlegen",
        size: "md"
      }, {
        actions: te(() => [
          B(h(be), {
            intent: "quiet",
            onClick: oe[6] || (oe[6] = (N) => q.value = !1)
          }, {
            default: te(() => [...oe[12] || (oe[12] = [
              le("Abbrechen", -1)
            ])]),
            _: 1
          }),
          B(h(be), {
            intent: "primary",
            onClick: fe
          }, {
            default: te(() => [
              le(F(ie.value ? "Speichern" : "Anlegen"), 1)
            ]),
            _: 1
          })
        ]),
        default: te(() => [
          u("div", by, [
            B(h(Un), {
              modelValue: K.value,
              "onUpdate:modelValue": [
                oe[0] || (oe[0] = (N) => K.value = N),
                ce
              ],
              label: "Typ",
              options: y.value
            }, null, 8, ["modelValue", "options"]),
            B(h(Un), {
              modelValue: P.value,
              "onUpdate:modelValue": oe[1] || (oe[1] = (N) => P.value = N),
              label: "Gilt",
              options: H.value,
              "label-key": "text",
              "value-key": "value"
            }, null, 8, ["modelValue", "options"]),
            B(h(Un), {
              modelValue: W.value,
              "onUpdate:modelValue": oe[2] || (oe[2] = (N) => W.value = N),
              label: "Beschreibbar",
              options: z,
              "label-key": "text",
              "value-key": "value"
            }, null, 8, ["modelValue"]),
            B(h(gn), {
              modelValue: R.value,
              "onUpdate:modelValue": oe[3] || (oe[3] = (N) => R.value = N),
              label: "Name"
            }, null, 8, ["modelValue"]),
            M.value ? (m(), Be(h(_i), {
              key: K.value,
              modelValue: Q.value,
              "onUpdate:modelValue": oe[4] || (oe[4] = (N) => Q.value = N),
              create: M.value.create,
              "ui-model-xmi": M.value.xmi,
              "domain-package": M.value.ePackage(),
              "ui-model-uri": M.value.uri
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri"])) : X.value ? (m(), Be(Kn(X.value), {
              key: 1,
              modelValue: Q.value,
              "onUpdate:modelValue": oe[5] || (oe[5] = (N) => Q.value = N)
            }, null, 8, ["modelValue"])) : re("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]),
      B(h(Ko), {
        "model-value": !!Ie.value,
        size: "sm",
        "onUpdate:modelValue": oe[9] || (oe[9] = (N) => Ie.value = null)
      }, {
        header: te(() => [
          B(h(He), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          oe[13] || (oe[13] = u("h2", { class: "confirm__title" }, "Variable löschen", -1))
        ]),
        actions: te(() => [
          B(h(be), {
            intent: "quiet",
            onClick: oe[8] || (oe[8] = (N) => Ie.value = null)
          }, {
            default: te(() => [...oe[14] || (oe[14] = [
              le("Abbrechen", -1)
            ])]),
            _: 1
          }),
          B(h(be), {
            intent: "danger",
            onClick: nn
          }, {
            default: te(() => [...oe[15] || (oe[15] = [
              le("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: te(() => [
          u("p", yy, F(Ie.value?.name) + " wird entfernt. Widgets, die darauf zeigen, finden sie danach nicht mehr. ", 1)
        ]),
        _: 1
      }, 8, ["model-value"])
    ]));
  }
}), ky = /* @__PURE__ */ en(wy, [["__scopeId", "data-v-9292252d"]]), xy = { class: "appearance" }, Sy = { class: "panel" }, Cy = { class: "panel__head" }, Ay = { class: "panel__tools" }, $y = {
  key: 0,
  class: "changed"
}, Iy = {
  key: 0,
  class: "gallery"
}, Ry = { class: "demo" }, Ey = { class: "demo__row" }, Ty = { class: "demo__row" }, Ly = { class: "demo" }, Oy = { class: "demo__form" }, By = { class: "demo" }, Dy = { class: "demo__row" }, Wy = { class: "demo__row" }, Vy = {
  key: 1,
  class: "body"
}, Py = {
  class: "themes",
  "aria-label": "Themen"
}, My = ["onClick"], Uy = {
  class: "theme__strip",
  "aria-hidden": "true"
}, Ny = { class: "theme__name" }, Fy = { class: "theme__note" }, zy = { class: "tokens" }, qy = ["aria-expanded", "onClick"], Gy = { class: "group__twist" }, Hy = { class: "group__label" }, Ky = { class: "group__count" }, Yy = {
  key: 0,
  class: "group__body"
}, Zy = {
  key: 0,
  class: "group__note"
}, Jy = {
  key: 1,
  class: "token__swatch token__swatch--none",
  "aria-hidden": "true"
}, Xy = { class: "token__text" }, Qy = { class: "token__name" }, jy = { class: "token__role" }, ew = ["value", "aria-label", "onInput"], nw = ["value", "aria-label", "onChange"], tw = ["disabled", "title", "onClick"], rw = /* @__PURE__ */ je({
  __name: "Appearance",
  setup(g) {
    const {
      themes: _,
      activeTheme: o,
      overrides: w,
      valueOf: b,
      isOverridden: A,
      selectTheme: c,
      setToken: T,
      clearToken: C,
      clearAllTokens: p,
      exportTheme: y
    } = pu(), H = ee(mi[0].id), z = ee(!1), q = ee("tokens"), L = ee({
      text: "Bodenfeuchte Feld 3",
      number: 38.4,
      choice: "ogcsta",
      colour: "#4fa3d1",
      when: "2026-08-28",
      amount: 60,
      on: !0,
      checked: !0,
      note: ""
    }), K = [
      { uid: "ogcsta", name: "OGC SensorThings" },
      { uid: "xmla", name: "XMLA / MDX" },
      { uid: "rest", name: "REST" }
    ], P = ne(() => Object.keys(w.value).length);
    function R(ie) {
      return [
        ie.tokens["color-bg"],
        ie.tokens["color-pane"],
        ie.tokens["color-accent"],
        ie.tokens["color-brand"],
        ie.tokens["color-ok"]
      ].filter(Boolean);
    }
    function W(ie) {
      return ie.kind === "color";
    }
    async function Q() {
      try {
        await navigator.clipboard.writeText(JSON.stringify(y(), null, 2)), z.value = !0, setTimeout(() => z.value = !1, 2e3);
      } catch {
        z.value = !1;
      }
    }
    return (ie, M) => (m(), $("div", xy, [
      u("div", Sy, [
        u("header", Cy, [
          u("button", {
            type: "button",
            class: Ee(["head__tab", { on: q.value === "tokens" }]),
            onClick: M[0] || (M[0] = (X) => q.value = "tokens")
          }, " Tokens ", 2),
          u("button", {
            type: "button",
            class: Ee(["head__tab", { on: q.value === "controls" }]),
            onClick: M[1] || (M[1] = (X) => q.value = "controls")
          }, " Elemente ", 2),
          u("span", Ay, [
            P.value ? (m(), $("span", $y, F(P.value) + " " + F(P.value === 1 ? "Wert geändert" : "Werte geändert"), 1)) : re("", !0),
            P.value ? (m(), $("button", {
              key: 1,
              class: "btn",
              type: "button",
              onClick: M[2] || (M[2] = //@ts-ignore
              (...X) => h(p) && h(p)(...X))
            }, " Alle zurücksetzen ")) : re("", !0),
            u("button", {
              class: "btn",
              type: "button",
              onClick: Q
            }, F(z.value ? "Kopiert" : "Als JSON kopieren"), 1)
          ])
        ]),
        q.value === "controls" ? (m(), $("div", Iy, [
          M[31] || (M[31] = u("p", { class: "gallery__lead" }, " Dieselben Elemente, aus denen die App gebaut ist. Was drüben an Tokens geändert wird, steht hier sofort. ", -1)),
          u("section", Ry, [
            M[22] || (M[22] = u("h3", { class: "demo__title" }, "Knöpfe", -1)),
            u("div", Ey, [
              B(h(be), null, {
                default: te(() => [...M[13] || (M[13] = [
                  le("Standard", -1)
                ])]),
                _: 1
              }),
              B(h(be), { intent: "primary" }, {
                default: te(() => [...M[14] || (M[14] = [
                  le("Speichern", -1)
                ])]),
                _: 1
              }),
              B(h(be), { intent: "quiet" }, {
                default: te(() => [...M[15] || (M[15] = [
                  le("Abbrechen", -1)
                ])]),
                _: 1
              }),
              B(h(be), { intent: "danger" }, {
                default: te(() => [...M[16] || (M[16] = [
                  le("Löschen", -1)
                ])]),
                _: 1
              }),
              B(h(be), { disabled: "" }, {
                default: te(() => [...M[17] || (M[17] = [
                  le("Gesperrt", -1)
                ])]),
                _: 1
              }),
              B(h(be), { busy: "" }, {
                default: te(() => [...M[18] || (M[18] = [
                  le("Lädt", -1)
                ])]),
                _: 1
              })
            ]),
            u("div", Ty, [
              B(h(be), { size: "sm" }, {
                default: te(() => [...M[19] || (M[19] = [
                  le("Klein", -1)
                ])]),
                _: 1
              }),
              B(h(be), { size: "md" }, {
                default: te(() => [...M[20] || (M[20] = [
                  le("Mittel", -1)
                ])]),
                _: 1
              }),
              B(h(be), { size: "lg" }, {
                default: te(() => [...M[21] || (M[21] = [
                  le("Groß", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          u("section", Ly, [
            M[23] || (M[23] = u("h3", { class: "demo__title" }, "Eingaben", -1)),
            u("div", Oy, [
              B(h(gn), {
                modelValue: L.value.text,
                "onUpdate:modelValue": M[3] || (M[3] = (X) => L.value.text = X),
                label: "Titel"
              }, null, 8, ["modelValue"]),
              B(h(gn), {
                modelValue: L.value.number,
                "onUpdate:modelValue": M[4] || (M[4] = (X) => L.value.number = X),
                label: "Messwert",
                type: "number",
                suffix: "%"
              }, null, 8, ["modelValue"]),
              B(h(Un), {
                modelValue: L.value.choice,
                "onUpdate:modelValue": M[5] || (M[5] = (X) => L.value.choice = X),
                label: "Datenquelle",
                options: K
              }, null, 8, ["modelValue"]),
              B(h(Zl), {
                modelValue: L.value.colour,
                "onUpdate:modelValue": M[6] || (M[6] = (X) => L.value.colour = X),
                label: "Farbe"
              }, null, 8, ["modelValue"]),
              B(h(S_), {
                modelValue: L.value.when,
                "onUpdate:modelValue": M[7] || (M[7] = (X) => L.value.when = X),
                label: "Stichtag"
              }, null, 8, ["modelValue"]),
              B(h(C_), {
                modelValue: L.value.amount,
                "onUpdate:modelValue": M[8] || (M[8] = (X) => L.value.amount = X),
                label: "Deckung",
                suffix: "%"
              }, null, 8, ["modelValue"]),
              B(h(gn), {
                modelValue: L.value.note,
                "onUpdate:modelValue": M[9] || (M[9] = (X) => L.value.note = X),
                label: "Notiz",
                rows: 2,
                stacked: ""
              }, null, 8, ["modelValue"]),
              B(h(gn), {
                modelValue: L.value.text,
                "onUpdate:modelValue": M[10] || (M[10] = (X) => L.value.text = X),
                label: "Mit Fehler",
                error: "Der Name ist schon vergeben."
              }, null, 8, ["modelValue"])
            ])
          ]),
          u("section", By, [
            M[30] || (M[30] = u("h3", { class: "demo__title" }, "Schalter und Marken", -1)),
            u("div", Dy, [
              B(h(A_), {
                modelValue: L.value.checked,
                "onUpdate:modelValue": M[11] || (M[11] = (X) => L.value.checked = X),
                label: "Im Board zeigen"
              }, null, 8, ["modelValue"]),
              B(h(Jl), {
                modelValue: L.value.on,
                "onUpdate:modelValue": M[12] || (M[12] = (X) => L.value.on = X),
                label: "Automatisch aktualisieren"
              }, null, 8, ["modelValue"])
            ]),
            u("div", Wy, [
              B(h(qt), null, {
                default: te(() => [...M[24] || (M[24] = [
                  le("neutral", -1)
                ])]),
                _: 1
              }),
              B(h(qt), { tone: "accent" }, {
                default: te(() => [...M[25] || (M[25] = [
                  le("geladen", -1)
                ])]),
                _: 1
              }),
              B(h(qt), { tone: "ok" }, {
                default: te(() => [...M[26] || (M[26] = [
                  le("im Rahmen", -1)
                ])]),
                _: 1
              }),
              B(h(qt), { tone: "warn" }, {
                default: te(() => [...M[27] || (M[27] = [
                  le("prüfen", -1)
                ])]),
                _: 1
              }),
              B(h(qt), { tone: "err" }, {
                default: te(() => [...M[28] || (M[28] = [
                  le("getrennt", -1)
                ])]),
                _: 1
              }),
              B(h(qt), {
                tone: "accent",
                numeric: ""
              }, {
                default: te(() => [...M[29] || (M[29] = [
                  le("14", -1)
                ])]),
                _: 1
              })
            ]),
            B(h($_), { label: "Trenner" })
          ])
        ])) : (m(), $("div", Vy, [
          u("aside", Py, [
            (m(!0), $(Ce, null, Ke(h(_), (X) => (m(), $("button", {
              key: X.id,
              type: "button",
              class: Ee(["theme", { on: X.id === h(o).id }]),
              onClick: (ve) => h(c)(X.id)
            }, [
              u("span", Uy, [
                (m(!0), $(Ce, null, Ke(R(X), (ve, We) => (m(), $("i", {
                  key: We,
                  style: Yt({ background: ve })
                }, null, 4))), 128))
              ]),
              u("span", Ny, F(X.name), 1),
              u("span", Fy, F(X.note), 1)
            ], 10, My))), 128))
          ]),
          u("section", zy, [
            (m(!0), $(Ce, null, Ke(h(mi), (X) => (m(), $("div", {
              key: X.id,
              class: "group"
            }, [
              u("button", {
                type: "button",
                class: "group__head",
                "aria-expanded": H.value === X.id,
                onClick: (ve) => H.value = H.value === X.id ? "" : X.id
              }, [
                u("span", Gy, F(H.value === X.id ? "▾" : "▸"), 1),
                u("span", Hy, F(X.label), 1),
                u("span", Ky, F(X.tokens.length), 1)
              ], 8, qy),
              H.value === X.id ? (m(), $("div", Yy, [
                X.note ? (m(), $("p", Zy, F(X.note), 1)) : re("", !0),
                (m(!0), $(Ce, null, Ke(X.tokens, (ve) => (m(), $("div", {
                  key: ve.name,
                  class: "token"
                }, [
                  W(ve) ? (m(), $("span", {
                    key: 0,
                    class: "token__swatch",
                    style: Yt({ background: h(b)(ve.name) }),
                    "aria-hidden": "true"
                  }, null, 4)) : (m(), $("span", Jy)),
                  u("span", Xy, [
                    u("code", Qy, "--" + F(ve.name), 1),
                    u("span", jy, F(ve.role), 1)
                  ]),
                  W(ve) ? (m(), $("input", {
                    key: 2,
                    class: "token__picker",
                    type: "color",
                    value: h(b)(ve.name),
                    "aria-label": `Farbe für ${ve.name}`,
                    onInput: (We) => h(T)(ve.name, We.target.value)
                  }, null, 40, ew)) : re("", !0),
                  u("input", {
                    class: "token__value",
                    type: "text",
                    value: h(b)(ve.name),
                    "aria-label": `Wert für ${ve.name}`,
                    onChange: (We) => h(T)(ve.name, We.target.value)
                  }, null, 40, nw),
                  u("button", {
                    class: "token__reset",
                    type: "button",
                    disabled: !h(A)(ve.name),
                    title: h(A)(ve.name) ? "Auf den Wert des Themas zurücksetzen" : "Unverändert",
                    onClick: (We) => h(C)(ve.name)
                  }, " ↺ ", 8, tw)
                ]))), 128))
              ])) : re("", !0)
            ]))), 128))
          ])
        ]))
      ])
    ]));
  }
}), iw = /* @__PURE__ */ en(rw, [["__scopeId", "data-v-a84ca0bf"]]), $t = tu.createLogger("daanse:system:actions");
class ow {
  constructor(_, o) {
    this.router = _, this.eventBus = o;
  }
  eventBus;
  async changePage(_) {
    if (!_) {
      $t("⚠️ changePage called without pageId");
      return;
    }
    $t("📄 Changing page to: %s", _);
    const o = new Promise((w) => {
      const b = (A) => {
        A.pageId === _ && ($t("📄 Received pageLoaded event for page: %s", _), this.eventBus.off("system:pageLoaded", b), w());
      };
      this.eventBus.on("system:pageLoaded", b), setTimeout(() => {
        this.eventBus.off("system:pageLoaded", b), $t("⚠️ pageLoaded timeout for page: %s, continuing anyway", _), w();
      }, 5e3);
    });
    await this.router.push(`/page/${_}`), await o, $t("📄 Page change complete, widgets should be registered");
  }
  async setGlobalVariable(_, o) {
    $t("⚠️ setGlobalVariable should be handled by VariableRepository");
  }
}
async function aw(g, _, o) {
  await _.registerActionsFromEcoreString(
    "SystemActions",
    K_,
    "system",
    "SystemActions.ecore"
  );
  const w = new ow(g, o);
  _.registerInstance("SystemActions", w, "SystemActions"), $t("✅ System actions registered");
}
var sw = Object.defineProperty, lw = Object.getOwnPropertyDescriptor, uw = (g, _, o, w) => {
  for (var b = lw(_, o), A = g.length - 1, c; A >= 0; A--)
    (c = g[A]) && (b = c(_, o, b) || b);
  return b && sw(_, o, b), b;
};
const dw = tu.createLogger("daanse:system:actions");
class Xo {
  testAction(..._) {
    console.log("TestActions", _);
  }
}
uw([
  Y_({ eventType: "test.console" })
], Xo.prototype, "testAction");
async function cw(g) {
  g.registerWidgetType("test", Xo, "system");
  const _ = new Xo();
  g.registerInstance("test", _, "system"), dw("✅ Test actions registered");
}
let ot;
async function Dw({ services: g, log: _ }) {
  Em(), rm(), lm(), ot = p_(Um), ot.use(Gt), ot.provide("codeEditorType", "monaco");
  const o = g, w = (q) => {
    const L = g.get(q);
    ot?.provide(q, L), ot?.provide(Symbol.for(q), L);
  };
  for (const q of g.getServiceIds()) w(q);
  o.addListener?.({ onServiceEvent: (q) => w(q.serviceId) }), g.register(i_, ot);
  const b = g.getRequired(P_), A = g.getRequired(M_);
  if (b.getConnections().length === 0) {
    const q = b.createConnection("");
    q.uid = "test", q.name = "Test Connection 01", q.type = "rest", q.config = { url: "https://jsonplaceholder.typicode.com/" }, b.saveConnection(q);
    const L = A.createDatasource("");
    L.uid = "test_ds", L.name = "Test DataSource 01", L.type = "rest", L.connection = q, L.config = { resourceUrl: "posts" }, A.saveDatasource(L);
  }
  g.getRequired(a_).registerWrapperType({
    type: w_,
    create: (q) => new y_(q)
  });
  const c = g.getRequired(Kl), T = new Dl();
  T.path = "/configuration", T.name = "config", T.component = ky, c.registerRoute(T);
  const C = new Dl();
  C.path = "/appearance", C.name = "appearance", C.component = iw, c.registerRoute(C);
  const p = g.getRequired(Hl), y = new v_();
  y.id = "config", y.label = "Environment variables", y.icon = "settings", y.route = "/configuration", y.routeName = "config", y.order = 10, y.visible = !0, p.registerNavigationItem(y);
  const H = c;
  for (const q of H.getAllRoutesArray?.() ?? [])
    Gt.addRoute({
      path: q.path,
      name: q.name,
      component: q.component,
      ...q.meta ? { meta: q.meta } : {}
    });
  const z = window.location.pathname + window.location.search + window.location.hash;
  Gt.resolve(z).matched.length && Gt.currentRoute.value.fullPath !== z && Gt.replace(z);
  try {
    await aw(
      Gt,
      g.getRequired(Ol),
      g.getRequired(ql)
    ), _.info("system actions registered");
  } catch (q) {
    _.error("system actions failed", q);
  }
  try {
    await cw(g.getRequired(Ol)), _.info("test actions registered");
  } catch (q) {
    _.error("test actions failed", q);
  }
  ot.mount("#app"), _.info("shell mounted");
}
function Ww({ services: g }) {
  const _ = g.getRequired(Kl);
  _.unregisterRoute("config"), _.unregisterRoute("save");
  const o = g.getRequired(Hl);
  o.unregisterNavigationItem("config"), o.unregisterNavigationItem("save"), ot?.unmount(), ot = void 0;
}
export {
  Dw as activate,
  Ww as deactivate
};
