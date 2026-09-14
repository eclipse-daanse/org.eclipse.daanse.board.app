(function(){var i="app.shell",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="@import\"https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap\";.topbar[data-v-7fa027b5]{height:var(--spacing-topbar, 42px);flex:none;display:flex;align-items:center;gap:12px;padding:0 12px;background:var(--color-pane);border-bottom:1px solid var(--color-divider);color:var(--color-fg);font-size:var(--text-sm, 12px)}.brand[data-v-7fa027b5]{display:flex;align-items:center;gap:8px;flex:none;white-space:nowrap;font-weight:600;font-size:var(--text-base, 13px)}.brand-mark[data-v-7fa027b5]{width:20px;height:20px;border-radius:var(--radius-sm, 5px);background:var(--color-brandFill);color:var(--color-onBrand);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;flex:none}.crumb[data-v-7fa027b5]{display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden;white-space:nowrap;color:var(--color-dim)}.crumb-part[data-v-7fa027b5]{overflow:hidden;text-overflow:ellipsis}.crumb-part.current[data-v-7fa027b5]{color:var(--color-fg);font-weight:500}.crumb-link[data-v-7fa027b5]{padding:0;font:inherit;color:inherit;background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.crumb-link[data-v-7fa027b5]:hover{color:var(--color-fg);text-decoration:underline}.crumb-link[data-v-7fa027b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.crumb-sep[data-v-7fa027b5]{color:var(--color-outline)}.spacer[data-v-7fa027b5]{flex:1 1 auto;min-width:8px}.pages[data-v-7fa027b5]{position:relative;margin-left:10px;flex:none}.pages__current[data-v-7fa027b5]{display:flex;align-items:center;gap:5px;max-width:200px;height:24px;padding:0 7px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background:none;border:1px solid transparent;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__current[data-v-7fa027b5]:hover{background-color:var(--color-raised);border-color:var(--color-divider)}.pages__current[data-v-7fa027b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.pages__name[data-v-7fa027b5]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__caret[data-v-7fa027b5]{font-size:9px;color:var(--color-dim)}.pages__menu[data-v-7fa027b5]{position:absolute;top:calc(100% + 3px);left:0;z-index:400;min-width:180px;max-height:60vh;overflow-y:auto;padding:3px;margin:0;list-style:none;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 3px);box-shadow:var(--shadow-e2, 0 2px 8px rgb(0 0 0 / 14%))}.pages__item[data-v-7fa027b5]{display:block;width:100%;padding:5px 8px;font-size:var(--text-sm, 12px);font-family:inherit;text-align:left;color:var(--color-fg);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.pages__item[data-v-7fa027b5]:hover{background-color:var(--color-raised)}.pages__line[data-v-7fa027b5]{display:flex;align-items:center;gap:2px}.pages__line .pages__item[data-v-7fa027b5]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pages__remove[data-v-7fa027b5]{flex:none;width:20px;height:20px;font-size:14px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer;opacity:0;transition:opacity 90ms ease,color 90ms ease}.pages__line:hover .pages__remove[data-v-7fa027b5],.pages__remove[data-v-7fa027b5]:focus-visible{opacity:1}.pages__remove[data-v-7fa027b5]:hover{color:var(--color-err)}.pages__sep[data-v-7fa027b5]{height:1px;margin:3px 0;background-color:var(--color-divider)}.pages__add[data-v-7fa027b5],.pages__item.on[data-v-7fa027b5]{color:var(--color-accent)}.pages__empty[data-v-7fa027b5]{padding:5px 8px;font-size:var(--text-sm, 12px);color:var(--color-dim)}.action[data-v-7fa027b5]{height:24px;padding:0 10px;margin-right:8px;font-size:var(--text-sm, 12px);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs, 3px);cursor:pointer}.action[data-v-7fa027b5]:hover{border-color:var(--color-outline)}.action[data-v-7fa027b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.modes[data-v-7fa027b5]{display:inline-flex;border:1px solid var(--color-outline);border-radius:var(--radius-sm, 5px);overflow:hidden;flex:none}.mode[data-v-7fa027b5]{font:inherit;padding:4px 11px;border:0;background:var(--color-raised);color:var(--color-dim);cursor:pointer;white-space:nowrap}.mode[data-v-7fa027b5]:hover{color:var(--color-fg)}.mode.on[data-v-7fa027b5]{background:var(--color-accent);color:var(--color-onAccent);font-weight:600}.mode[data-v-7fa027b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.icon-action[data-v-7fa027b5]:disabled{opacity:.4;cursor:default}.icon-action[data-v-7fa027b5]{display:grid;place-items:center;width:24px;height:24px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.icon-action[data-v-7fa027b5]:hover{color:var(--color-fg);background-color:var(--color-raised)}.icon-action.on[data-v-7fa027b5]{color:var(--color-accent);background-color:var(--color-raised)}.icon-action[data-v-7fa027b5]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.avatar[data-v-7fa027b5]{width:24px;height:24px;border-radius:50%;background:var(--color-raised);border:1px solid var(--color-outline);display:inline-flex;align-items:center;justify-content:center;font-size:var(--text-xs, 11px);font-weight:700;color:var(--color-dim);flex:none}.shell[data-v-27fec35c]{display:flex;flex-direction:column;height:100%;width:100%;min-height:0;background:var(--color-bg)}.shell-body[data-v-27fec35c]{flex:1 1 auto;display:grid;grid-template-columns:var(--spacing-rail, 52px) minmax(0,1fr);min-height:0;overflow:hidden}.shell-body--norail[data-v-27fec35c]{grid-template-columns:minmax(0,1fr)}.rail[data-v-27fec35c]{background:var(--color-pane);border-right:1px solid var(--color-divider);display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:4px;overflow:hidden}.rail-spacer[data-v-27fec35c]{flex:1 1 auto}.ri[data-v-27fec35c]{position:relative;width:36px;height:36px;flex:none;border:0;border-radius:var(--radius-md, 8px);background:transparent;color:var(--color-dim);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .14s cubic-bezier(.2,.6,.2,1),color .14s cubic-bezier(.2,.6,.2,1)}.ri[data-v-27fec35c]:hover{color:var(--color-fg);background:color-mix(in srgb,var(--color-accent) 10%,transparent)}.ri.on[data-v-27fec35c]{background:color-mix(in srgb,var(--color-accent) 14%,transparent);color:var(--color-accent)}.ri.on[data-v-27fec35c]:before{content:\"\";position:absolute;left:-8px;top:8px;bottom:8px;width:3px;border-radius:var(--radius-xs, 3px);background:var(--color-accent)}.ri[data-v-27fec35c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.ri[data-v-27fec35c] .icon{font-size:20px}.sr-only[data-v-27fec35c]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.content[data-v-27fec35c]{min-width:0;min-height:0;overflow:hidden;display:flex;flex-direction:column}@media(prefers-reduced-motion:reduce){.ri[data-v-27fec35c]{transition-duration:.01ms}}.global-loading-bar[data-v-27fec35c]{position:fixed;top:0;left:0;right:0;height:3px;z-index:8000;overflow:hidden}.global-loading-bar-progress[data-v-27fec35c]{height:100%;width:30%;background:var(--color-brandFill);animation:loading-slide-27fec35c 1.2s ease-in-out infinite}@keyframes loading-slide-27fec35c{0%{transform:translate(-100%)}to{transform:translate(400%)}}/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:\"Barlow\",system-ui,-apple-system,\"Segoe UI\",sans-serif;--font-mono:\"JetBrains Mono\",ui-monospace,SFMono-Regular,Menlo,monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--text-xs:11px;--text-xs--line-height:calc(1/.75);--text-sm:12px;--text-sm--line-height:calc(1.25/.875);--text-base:13px;--text-base--line-height: 1.5 ;--text-lg:15px;--text-lg--line-height:calc(1.75/1.125);--text-xl:24px;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--radius-xs:2px;--radius-sm:3px;--radius-md:4px;--radius-lg:6px;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-bg:#121820;--color-pane:#1a222c;--color-raised:#232d39;--color-canvas:#0e141b;--color-divider:#2a3541;--color-outline:#3c4959;--color-fg:#dfe8ef;--color-dim:#8b9bab;--color-accent:#4fa3d1;--color-onAccent:#08131c;--color-brand:#d8a13c;--color-brandFill:#d8a13c;--color-onBrand:#14100a;--color-ok:#5fb98a;--color-warn:#d8a13c;--color-err:#e2766a;--color-kw:#4fa3d1;--color-measure:#d8a13c;--color-member:#5fb98a;--color-fn:#c294d8;--color-primary:#4fa3d1;--color-secondary:#8b9bab;--color-success:#5fb98a;--color-info:#4fa3d1;--color-danger:#e2766a;--color-warning:#d8a13c;--color-backgroundPrimary:#121820;--color-backgroundSecondary:#1a222c;--color-backgroundElement:#232d39;--color-backgroundBorder:#2a3541;--color-textPrimary:#dfe8ef;--color-textInverted:#08131c;--color-daanse_blue:#4fa3d1;--color-daanse_grey:#dfe8ef;--shadow-e1:0 1px 2px #00000073;--shadow-e2:0 2px 8px #00000073;--shadow-e3:0 8px 24px #00000080;--spacing-topbar:42px;--spacing-rail:52px;--spacing-panelHeader:30px;--spacing-splitter:4px;--spacing-statusbar:24px}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{.ice_gray{padding:var(--spacing-6);background:var(--color-pane);border-right:1px solid var(--color-divider);box-shadow:var(--shadow-e1)}.ice{padding:var(--spacing-6);background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md);box-shadow:var(--shadow-e2)}.z-mx{z-index:30000}}@layer utilities{.\\@container{container-type:inline-size}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.top-\\[-25px\\]{top:-25px}.right-0{right:calc(var(--spacing)*0)}.isolate{isolation:isolate}.col-span-1{grid-column:span 1/span 1}.row-span-4{grid-row:span 4/span 4}.float-left{float:left}.float-right{float:right}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-2{margin:calc(var(--spacing)*2)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-15{margin-left:calc(var(--spacing)*15)}.box-border{box-sizing:border-box}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.table-cell{display:table-cell}.h-40{height:calc(var(--spacing)*40)}.h-84{height:calc(var(--spacing)*84)}.h-120{height:calc(var(--spacing)*120)}.h-full{height:100%}.max-h-screen{max-height:100vh}.w-full{width:100%}.max-w-xs{max-width:var(--container-xs)}.flex-shrink,.shrink{flex-shrink:1}.flex-grow,.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-white{background-color:var(--color-white)}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.object-fill{object-fit:fill}.object-scale-down{object-fit:scale-down}.p-4{padding:calc(var(--spacing)*4)}.pl-6{padding-left:calc(var(--spacing)*6)}.text-justify{text-align:justify}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-wrap{text-wrap:wrap}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.line-through{text-decoration-line:line-through}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e1{--tw-shadow:0 1px 2px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e2{--tw-shadow:0 2px 8px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-e3{--tw-shadow:0 8px 24px var(--tw-shadow-color,#00000080);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}}:root[data-theme=light]{--color-bg:#eef1f4;--color-pane:#f7f9fb;--color-raised:#fff;--color-canvas:#e2e7ec;--color-divider:#d3dae1;--color-outline:#b3bec9;--color-fg:#16202a;--color-dim:#55646f;--color-accent:#1f6690;--color-onAccent:#fff;--color-brand:#8a6206;--color-brandFill:#c08a10;--color-onBrand:#14100a;--color-ok:#1f6f4a;--color-warn:#8a5a0c;--color-err:#b02a1c;--color-kw:#1f6690;--color-measure:#8a5a0c;--color-member:#1f6f4a;--color-fn:#7b3fa0;--color-primary:#1f6690;--color-secondary:#55646f;--color-success:#1f6f4a;--color-info:#1f6690;--color-danger:#b02a1c;--color-warning:#8a5a0c;--color-backgroundPrimary:#eef1f4;--color-backgroundSecondary:#f7f9fb;--color-backgroundElement:#fff;--color-backgroundBorder:#d3dae1;--color-textPrimary:#16202a;--color-textInverted:#fff;--color-daanse_blue:#1f6690;--color-daanse_grey:#16202a;--shadow-e1:0 1px 2px #16202a24;--shadow-e2:0 2px 8px #16202a24;--shadow-e3:0 8px 24px #16202a24}:root{--mdxwb-bg:var(--color-bg);--mdxwb-pane:var(--color-pane);--mdxwb-raised:var(--color-raised);--mdxwb-border:var(--color-divider);--mdxwb-outline:var(--color-outline);--mdxwb-fg:var(--color-fg);--mdxwb-dim:var(--color-dim);--mdxwb-accent:var(--color-accent);--mdxwb-on-accent:var(--color-onAccent);--mdxwb-ok:var(--color-ok);--mdxwb-warn:var(--color-warn);--mdxwb-err:var(--color-err);--mdxwb-kw:var(--color-kw);--mdxwb-measure:var(--color-measure);--mdxwb-member:var(--color-member);--mdxwb-fn:var(--color-fn)}body{font-family:var(--font-sans);font-optical-sizing:auto;font-weight:400;font-size:var(--text-base);font-variation-settings:\"wdth\" 100;background:var(--color-bg);color:var(--color-fg);font-style:normal;--moveable-color:var(--color-outline)!important}table{font-variant-numeric:tabular-nums}.rCS1w3zcxh{--moveable-color:var(--color-outline)!important}.rCS1w3zcxh .moveable-line{transform-origin:0;width:1px;height:1px;border-bottom:2px dashed var(--color-outline)!important;background:0 0!important}@keyframes spin{to{transform:rotate(360deg)}}*{scrollbar-width:thin;scrollbar-color:var(--color-outline)transparent}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background-color:var(--color-outline);background-clip:padding-box;border:3px solid #0000;border-radius:6px}::-webkit-scrollbar-thumb:hover{background-color:var(--color-dim)}::-webkit-scrollbar-corner{background:0 0}.resize-observer[data-v-b329ee4c]{z-index:-1;pointer-events:none;opacity:0;background-color:#0000;border:none;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.resize-observer[data-v-b329ee4c] object{pointer-events:none;z-index:-1;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.v-popper__popper{z-index:10000;outline:none;top:0;left:0}.v-popper__popper.v-popper__popper--hidden{visibility:hidden;opacity:0;pointer-events:none;transition:opacity .15s,visibility .15s}.v-popper__popper.v-popper__popper--shown{visibility:visible;opacity:1;transition:opacity .15s}.v-popper__popper.v-popper__popper--skip-transition,.v-popper__popper.v-popper__popper--skip-transition>.v-popper__wrapper{transition:none!important}.v-popper__backdrop{width:100%;height:100%;display:none;position:absolute;top:0;left:0}.v-popper__inner{box-sizing:border-box;position:relative;overflow-y:auto}.v-popper__inner>div{z-index:1;max-width:inherit;max-height:inherit;position:relative}.v-popper__arrow-container{width:10px;height:10px;position:absolute}.v-popper__popper--arrow-overflow .v-popper__arrow-container,.v-popper__popper--no-positioning .v-popper__arrow-container{display:none}.v-popper__arrow-inner,.v-popper__arrow-outer{border-style:solid;width:0;height:0;position:absolute;top:0;left:0}.v-popper__arrow-inner{visibility:hidden;border-width:7px}.v-popper__arrow-outer{border-width:6px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{left:-2px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{left:-1px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer{border-bottom-width:0;border-bottom-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:0}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{border-top-width:0;border-top-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{top:-4px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{top:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{top:-1px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{border-left-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-left-color:#0000!important}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{left:-4px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{left:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer{border-right-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner{left:-2px}.v-popper--theme-tooltip .v-popper__inner{color:#fff;background:#000c;border-radius:6px;padding:7px 12px 6px}.v-popper--theme-tooltip .v-popper__arrow-outer{border-color:#000c}.v-popper--theme-dropdown .v-popper__inner{color:#000;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 6px 30px #0000001a}.v-popper--theme-dropdown .v-popper__arrow-inner{visibility:visible;border-color:#fff}.v-popper--theme-dropdown .v-popper__arrow-outer{border-color:#ddd}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}.layout-renderer[data-v-965fd8c7],.layout-renderer .edit-component-wrapper[data-v-965fd8c7],.layout-renderer .view-component-wrapper[data-v-965fd8c7]{width:100%;height:100%}.layout-renderer .spinner[data-v-965fd8c7]{width:22px;height:22px;border:2px solid var(--color-divider);border-top-color:var(--color-accent);border-radius:50%;animation:layout-spin .7s linear infinite}.layout-renderer .no-layout-message[data-v-965fd8c7],.layout-renderer .loading-state[data-v-965fd8c7]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;gap:1rem}.layout-renderer .no-layout-message__text[data-v-965fd8c7]{display:flex;align-items:flex-start;gap:9px;margin:0;font-family:var(--font-sans);font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}@keyframes layout-spin{to{transform:rotate(360deg)}}.floorplan[data-v-0eecd73b]{position:relative;aspect-ratio:16 / 9;background-color:var(--color-bg);border-bottom:1px solid var(--color-divider);overflow:hidden}.floorplan__block[data-v-0eecd73b]{position:absolute;margin:2px 0 0 2px;border-radius:2px;border:1px solid color-mix(in srgb,currentColor 70%,transparent);background-color:color-mix(in srgb,currentColor 14%,transparent)}.floorplan__block--data[data-v-0eecd73b]{color:var(--color-accent)}.floorplan__block--visual[data-v-0eecd73b]{color:var(--color-brand)}.floorplan__block--text[data-v-0eecd73b]{color:var(--color-dim)}.floorplan__empty[data-v-0eecd73b]{position:absolute;inset:0;display:grid;place-items:center;font-size:var(--text-xs);color:var(--color-dim)}.storage[data-v-82d034f3]{display:grid;grid-template-columns:280px minmax(0,1fr);flex:1 1 auto;min-height:0;background-color:var(--color-pane);overflow:hidden}.tree[data-v-82d034f3]{display:flex;flex-direction:column;min-height:0;border-right:1px solid var(--color-divider)}.tree__search[data-v-82d034f3]{margin:8px;height:26px;padding:0 8px;font-size:var(--text-sm);font-family:inherit;color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.tree__body[data-v-82d034f3]{flex:1 1 auto;min-height:0;padding:0 4px 8px;overflow-y:auto}.row[data-v-82d034f3]{display:flex;align-items:baseline;flex-wrap:nowrap;gap:6px;width:100%;padding:4px 6px;font-family:inherit;font-size:var(--text-base);color:var(--color-fg);text-align:left;background:none;border:0;border-radius:var(--radius-xs);cursor:pointer}.row[data-v-82d034f3]:hover{background-color:var(--color-raised)}.row.on[data-v-82d034f3]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);box-shadow:inset 2px 0 0 var(--color-accent)}.row--place[data-v-82d034f3]{font-weight:600}.row--entry[data-v-82d034f3]{padding-left:22px;font-family:var(--font-mono);font-size:var(--text-sm)}.row--hint[data-v-82d034f3]{padding-left:22px;margin:0;color:var(--color-dim);font-size:var(--text-sm);cursor:default}.row--add[data-v-82d034f3]{color:var(--color-dim);font-size:var(--text-sm)}.row__twist[data-v-82d034f3]{width:12px;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__name[data-v-82d034f3]{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__meta[data-v-82d034f3]{margin-left:auto;padding-left:8px;flex:none;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);color:var(--color-dim)}.row__dot[data-v-82d034f3]{width:5px;height:5px;flex:none;border-radius:50%;background-color:transparent}.row__dot.open[data-v-82d034f3]{background-color:var(--color-accent)}.detail[data-v-82d034f3]{display:flex;flex-direction:column;min-width:0;min-height:0;background-color:var(--color-bg);overflow-y:auto}.detail__head[data-v-82d034f3]{display:flex;align-items:center;gap:8px;padding:7px 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.detail__name[data-v-82d034f3]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.detail__facts[data-v-82d034f3]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.detail__spacer[data-v-82d034f3]{flex:1 1 auto}.detail__badge[data-v-82d034f3]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-accent);background-color:color-mix(in srgb,var(--color-accent) 14%,transparent);border-radius:var(--radius-xs)}.detail__hint[data-v-82d034f3]{display:grid;place-items:center;flex:1 1 auto;margin:0;padding:24px;font-size:var(--text-sm);color:var(--color-dim);text-align:center}.detail__failure[data-v-82d034f3]{margin:12px 12px 0;padding:8px 10px;font-size:var(--text-sm);color:var(--color-err);background-color:color-mix(in srgb,var(--color-err) 10%,transparent);border-radius:var(--radius-xs)}.boards[data-v-82d034f3]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;padding:12px}.board[data-v-82d034f3]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.board__text[data-v-82d034f3]{padding:8px 10px}.board__name[data-v-82d034f3]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__facts[data-v-82d034f3]{margin:2px 0 0;font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-sm);color:var(--color-dim)}.board__kinds[data-v-82d034f3]{margin:4px 0 0;font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.create[data-v-82d034f3]{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:16px}.create__label[data-v-82d034f3]{font-size:var(--text-sm);color:var(--color-dim)}.create__input[data-v-82d034f3]{height:26px;min-width:220px;padding:0 8px;font-size:var(--text-base);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.create__hint[data-v-82d034f3]{flex:1 0 100%;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.row[data-v-82d034f3]:focus-visible,.tree__search[data-v-82d034f3]:focus-visible,.create__input[data-v-82d034f3]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards[data-v-4c11f243]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.boards__panel[data-v-4c11f243]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.boards__body[data-v-4c11f243]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background-color:var(--color-bg);overflow:auto}.boards__bar[data-v-4c11f243]{display:flex;align-items:center;gap:12px;height:var(--spacing-panelHeader);flex:none;padding:0 8px;border-bottom:1px solid var(--color-divider)}.boards__views[data-v-4c11f243]{display:flex;align-items:center;gap:2px;height:100%}.boards__view[data-v-4c11f243]{position:relative;display:flex;align-items:center;gap:6px;height:100%;padding:0 12px;font-size:var(--text-sm);font-family:inherit;font-weight:500;color:var(--color-dim);background:none;border:0;cursor:pointer}.boards__view[data-v-4c11f243]:hover{color:var(--color-fg)}.boards__view.on[data-v-4c11f243]{color:var(--color-fg);font-weight:600}.boards__view.on[data-v-4c11f243]:after{content:\"\";position:absolute;left:8px;right:8px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.boards__view[data-v-4c11f243]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__title[data-v-4c11f243]{display:flex;align-items:center;gap:8px;margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__count[data-v-4c11f243]{font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:var(--text-xs);font-weight:500;color:var(--color-dim);padding:1px 6px;border:1px solid var(--color-divider);border-radius:999px}.boards__tools[data-v-4c11f243]{display:flex;align-items:center;gap:8px;margin-left:auto}.boards__search[data-v-4c11f243]{height:22px;min-width:180px;padding:0 8px;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:4px}.boards__search[data-v-4c11f243]:focus-visible,.board[data-v-4c11f243]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.boards__grid[data-v-4c11f243]{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));align-content:start;gap:16px;padding:16px}.board[data-v-4c11f243]{position:relative;display:flex;flex-direction:column;padding:0;overflow:hidden;text-align:left;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);box-shadow:var(--shadow-e1);cursor:pointer;transition:border-color .12s ease,box-shadow .12s ease,transform .12s ease}.board[data-v-4c11f243]:hover{border-color:var(--color-outline);box-shadow:var(--shadow-e2);transform:translateY(-1px)}.board__body[data-v-4c11f243]{padding:12px}.board__name[data-v-4c11f243]{margin:0;font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.board__meta[data-v-4c11f243]{margin:2px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.board__kinds[data-v-4c11f243]{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0 0;padding:0;list-style:none}.board__kind[data-v-4c11f243]{padding:1px 6px;font-size:var(--text-xs);color:var(--color-dim);background-color:var(--color-canvas);border-radius:3px}.board__kind--more[data-v-4c11f243]{color:var(--color-outline)}.board__edit[data-v-4c11f243]{position:absolute;top:8px;right:8px;padding:2px 8px;font-size:var(--text-xs);font-family:inherit;color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:3px;opacity:0;cursor:pointer}.board:hover .board__edit[data-v-4c11f243],.board__edit[data-v-4c11f243]:focus-visible{opacity:1}.board--new[data-v-4c11f243]{box-shadow:none;align-items:center;justify-content:center;gap:2px;min-height:180px;font-family:inherit;background-color:transparent;border-style:dashed}.board__plus[data-v-4c11f243]{font-size:20px;line-height:1;color:var(--color-outline)}.board__usage[data-v-4c11f243]{margin:3px 0 0;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.boards__nomatch[data-v-4c11f243]{grid-column:1 / -1;margin:0;font-size:var(--text-sm);color:var(--color-dim)}.boards__empty[data-v-4c11f243]{max-width:420px;margin:10vh auto 0;padding:0 16px;text-align:center}.boards__empty-plan[data-v-4c11f243]{width:200px;margin:0 auto 16px;border:1px solid var(--color-divider);border-radius:4px}.boards__empty-title[data-v-4c11f243]{margin:0;font-size:var(--text-lg);font-weight:600;color:var(--color-fg)}.boards__empty-text[data-v-4c11f243]{margin:8px 0 16px;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.boards__empty-actions[data-v-4c11f243]{display:flex;justify-content:center;gap:8px}@media(prefers-reduced-motion:reduce){.board[data-v-4c11f243]{transition:none}.board[data-v-4c11f243]:hover{transform:none}}.dottet[data-v-3ecae506]{background:var(--color-canvas);background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-3ecae506]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed var(--color-outline);z-index:100000;pointer-events:none}.report-container[data-v-3ecae506]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative;background:var(--color-canvas, #dee1e7)}.report-container__title[data-v-3ecae506]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider, #ccd1d9)}.report-container .widgets-adding-controls[data-v-3ecae506]{display:flex;border:1px solid var(--color-divider, #ccd1d9);border-radius:8px;margin:16px}.report-container .widget-board[data-v-3ecae506]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-3ecae506]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-3ecae506]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-3ecae506]{position:absolute}.dropdown-buttons-container[data-v-3ecae506]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-3ecae506]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-3ecae506]{z-index:20000000!important}.add_widget-button[data-v-3ecae506]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-3ecae506],.v-leave-active[data-v-3ecae506]{transition:opacity .5s ease}.v-enter-from[data-v-3ecae506],.v-leave-to[data-v-3ecae506]{opacity:0}.model__none[data-v-deac0807]{margin:0;padding:10px 12px;font-size:.85rem;color:var(--color-dim);background-color:var(--color-sunken);border-radius:var(--radius-sm)}.new[data-v-3345cef1]{display:flex;flex-direction:column;gap:22px}.new__step[data-v-3345cef1]{display:flex;flex-direction:column;gap:8px}.new__label[data-v-3345cef1]{margin:0;font-size:.78rem;font-weight:600;letter-spacing:.04em;color:var(--color-dim)}.new__lead[data-v-3345cef1]{margin:0;font-size:.85rem;color:var(--color-dim)}.types[data-v-3345cef1]{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:8px;align-items:start;margin:0;padding:0;list-style:none}.type[data-v-3345cef1]{display:flex;flex-direction:column;gap:4px;width:100%;padding:10px 12px;text-align:left;background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm);cursor:pointer}.type[data-v-3345cef1]:hover{border-color:var(--color-accent)}.type--on[data-v-3345cef1]{border-color:var(--color-accent);box-shadow:inset 2px 0 0 var(--color-accent)}.type__name[data-v-3345cef1]{display:flex;align-items:center;justify-content:space-between;gap:6px;font-weight:600;color:var(--color-fg)}.type__what[data-v-3345cef1]{font-size:.8rem;line-height:1.4;color:var(--color-dim)}.new[data-v-245936fb]{display:flex;flex-direction:column;gap:22px}.new__step[data-v-245936fb]{display:flex;flex-direction:column;gap:8px}.new__label[data-v-245936fb]{margin:0;font-size:.78rem;font-weight:600;letter-spacing:.04em;color:var(--color-dim)}.new__lead[data-v-245936fb]{margin:0;font-size:.85rem;color:var(--color-dim)}.new__warn[data-v-245936fb]{margin:0;padding:10px 12px;font-size:.85rem;color:var(--color-fg);background-color:var(--color-sunken);border-left:2px solid var(--color-warn, var(--color-accent));border-radius:var(--radius-sm)}.types[data-v-245936fb]{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:8px;align-items:start;margin:0;padding:0;list-style:none}.type[data-v-245936fb]{display:flex;flex-direction:column;gap:4px;width:100%;padding:10px 12px;text-align:left;background-color:var(--color-sunken);border:1px solid var(--color-outline);border-radius:var(--radius-sm);cursor:pointer}.type[data-v-245936fb]:hover{border-color:var(--color-accent)}.type--on[data-v-245936fb]{border-color:var(--color-accent);box-shadow:inset 2px 0 0 var(--color-accent)}.type__name[data-v-245936fb]{display:flex;align-items:center;justify-content:space-between;gap:6px;font-weight:600;color:var(--color-fg)}.type__what[data-v-245936fb]{font-size:.8rem;line-height:1.4;color:var(--color-dim)}.tree[data-v-00806a83]{display:flex;flex-direction:column;min-height:0;height:100%;border-right:1px solid var(--color-divider);background:var(--color-pane);overflow:hidden}.tree__head[data-v-00806a83]{display:flex;align-items:center;gap:2px;flex:none;padding:7px 8px 7px 12px;border-bottom:1px solid var(--color-divider)}.tree__title[data-v-00806a83]{flex:1 1 auto;margin:0;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--color-dim)}.tree__search[data-v-00806a83]{flex:none;padding:8px 10px;border-bottom:1px solid var(--color-divider)}.tree__body[data-v-00806a83]{flex:1 1 auto;min-height:0;overflow-y:auto;padding:4px 0}.tree__list[data-v-00806a83],.tree__sources[data-v-00806a83]{margin:0;padding:0;list-style:none}.tree__sources[data-v-00806a83]{padding-left:18px}.row[data-v-00806a83]{display:flex;align-items:center;gap:2px;padding-right:4px}.row[data-v-00806a83]:hover{background:var(--color-raised)}.row--on[data-v-00806a83],.row--on[data-v-00806a83]:hover{background:color-mix(in srgb,var(--color-accent) 14%,transparent)}.row__twist[data-v-00806a83]{display:flex;align-items:center;justify-content:center;width:22px;height:26px;flex:none;border:none;background:transparent;color:var(--color-dim);cursor:pointer}.row__twist--none[data-v-00806a83]{cursor:default}.row__body[data-v-00806a83]{display:flex;align-items:baseline;gap:8px;flex:1 1 auto;min-width:0;padding:3px 2px;border:none;background:transparent;font:inherit;text-align:left;color:var(--color-fg);cursor:pointer}.row__body[data-v-00806a83]:disabled{cursor:default}.row__body[data-v-00806a83]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.row__name[data-v-00806a83]{font-family:var(--font-sans);font-size:var(--text-sm);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.row--connection .row__name[data-v-00806a83]{font-weight:600}.row__what[data-v-00806a83]{flex:none;font-size:var(--text-xs);color:var(--color-dim)}.row__usage[data-v-00806a83]{flex:none;margin-left:auto;padding-left:8px;font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.tree__none[data-v-00806a83],.tree__empty[data-v-00806a83]{padding:6px 12px;font-family:var(--font-sans);font-size:var(--text-xs);color:var(--color-dim)}.confirm__title[data-v-00806a83]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.confirm__text[data-v-00806a83]{margin:0 0 6px;color:var(--color-dim);line-height:1.5}.confirm__text--warn[data-v-00806a83]{color:var(--color-err)}.editor[data-v-b30445c3]{display:flex;flex-direction:column;gap:12px;height:100%;min-height:0}.editor__fields[data-v-b30445c3]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-b30445c3]{display:flex;justify-content:flex-end;gap:7px}.editor__preview[data-v-b30445c3]{flex:1 1 auto;min-height:0;display:flex;overflow:auto}.editor[data-v-c18a8ecf]{display:flex;flex-direction:column;gap:12px}.editor__fields[data-v-c18a8ecf]{display:flex;flex-direction:column;gap:4px;max-width:620px}.editor__actions[data-v-c18a8ecf]{display:flex;justify-content:flex-end;gap:7px}.data-page[data-v-91f5d575]{display:flex;height:100%;min-height:0}.data-page__tree[data-v-91f5d575]{flex:none;width:320px;min-height:0}.data-page__detail[data-v-91f5d575]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background:var(--color-pane);overflow:hidden}.data-page__nothing[data-v-91f5d575]{margin:auto;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.detail__head[data-v-91f5d575]{display:flex;align-items:baseline;gap:12px;flex:none;padding:12px 16px 8px}.detail__what[data-v-91f5d575]{display:flex;align-items:baseline;gap:10px;min-width:0}.detail__name[data-v-91f5d575]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.detail__sub[data-v-91f5d575]{font-size:var(--text-xs);color:var(--color-dim);white-space:nowrap}.detail__usage[data-v-91f5d575]{margin-left:auto;flex:none;font-size:var(--text-xs);color:var(--color-dim)}.detail__body[data-v-91f5d575]{flex:1 1 auto;min-height:0;overflow:auto;padding:16px}.widgets_grid[data-v-3ac9fb06]{display:flex;flex-direction:column}[data-v-3ac9fb06] .widgets_grid-item{display:flex;flex-direction:row;align-items:center;gap:9px;padding:6px 12px;font-size:var(--text-base, 13px);color:var(--color-fg);cursor:grab;border-radius:var(--radius-sm, 5px);margin:0 6px}[data-v-3ac9fb06] .widgets_grid-item:hover{background:var(--color-bg)}[data-v-3ac9fb06] .widgets_grid-icon{width:26px;height:26px;flex:none;display:inline-flex;align-items:center;justify-content:center;background:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-sm, 5px);overflow:hidden}[data-v-3ac9fb06] .widgets_grid-icon img{max-width:18px;max-height:18px}[data-v-3ac9fb06] .widgets_grid-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.add_widget_window[data-v-3ac9fb06]{position:relative;width:100%;height:100%;padding:6px 0}.add_widget_window__scroll[data-v-3ac9fb06]{height:100%;overflow-y:auto}.scrim[data-v-67bd2420]{position:fixed;inset:0;z-index:40000;display:grid;place-items:stretch;padding:26px 22px;background-color:color-mix(in srgb,var(--color-canvas) 62%,transparent);backdrop-filter:blur(6px)}.overlay[data-v-67bd2420]{display:flex;min-width:0;min-height:0;background-color:var(--color-bg);border:1px solid var(--color-outline);border-radius:var(--radius-md);box-shadow:var(--shadow-e3);overflow:hidden}.stage[data-v-67bd2420]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0}.stage__head[data-v-67bd2420]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 12px;background-color:var(--color-pane);border-bottom:1px solid var(--color-divider)}.stage__name[data-v-67bd2420]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.stage__uid[data-v-67bd2420]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim)}.stage__spacer[data-v-67bd2420]{flex:1 1 auto}.seg[data-v-67bd2420]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.seg button[data-v-67bd2420]{padding:1px 9px;font-family:inherit;font-size:var(--text-xs);color:var(--color-dim);background:none;border:0;cursor:pointer}.seg button.on[data-v-67bd2420]{color:var(--color-onAccent);background-color:var(--color-accent)}.stage__bar[data-v-67bd2420]{flex:none;padding:5px 12px;font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.stage__body[data-v-67bd2420]{flex:1 1 auto;display:grid;place-items:center;min-height:0;padding:18px;background-color:var(--color-canvas);overflow:auto}.preview[data-v-67bd2420]{background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-xs);overflow:hidden}.handle[data-v-67bd2420]{width:var(--spacing-splitter);flex:none;cursor:col-resize;background-color:var(--color-divider)}.handle[data-v-67bd2420]:hover,.handle[data-v-67bd2420]:focus-visible{background-color:var(--color-accent);outline:none}.side[data-v-67bd2420]{display:flex;flex-direction:column;flex:none;min-width:0;min-height:0;background-color:var(--color-pane)}.tabs[data-v-67bd2420]{display:flex;flex-wrap:wrap;align-items:stretch;min-height:var(--spacing-panelHeader);flex:none;padding:0 6px;gap:1px;border-bottom:1px solid var(--color-divider)}.tab[data-v-67bd2420]{position:relative;display:flex;align-items:center;gap:5px;height:var(--spacing-panelHeader);padding:0 9px;font-family:inherit;font-size:var(--text-sm);color:var(--color-dim);background:none;border:0;cursor:pointer}.tab.on[data-v-67bd2420]{color:var(--color-fg);font-weight:600}.tab.on[data-v-67bd2420]:after{content:\"\";position:absolute;left:7px;right:7px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.tab__n[data-v-67bd2420]{font-family:var(--font-mono);font-size:9.5px;font-variant-numeric:tabular-nums;opacity:.8}.fields[data-v-67bd2420]{flex:1 1 auto;min-height:0;padding:10px 12px 16px;overflow-y:auto}.pick[data-v-67bd2420]{margin-bottom:8px}.rest__note[data-v-67bd2420]{margin:0 0 10px;padding:7px 9px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim);background-color:var(--color-raised);border-radius:var(--radius-xs)}.note[data-v-67bd2420]{margin:8px 0 0;font-size:var(--text-sm);line-height:1.5;color:var(--color-dim)}.var-mark[data-v-67bd2420]{font-family:var(--font-mono);font-style:italic;color:var(--color-brand)}.bound[data-v-67bd2420]{width:100%;border-collapse:collapse;font-size:var(--text-sm)}.bound th[data-v-67bd2420]{padding:5px 8px;text-align:left;font-size:var(--text-xs);font-weight:600;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.bound td[data-v-67bd2420]{padding:5px 8px;border-bottom:1px solid var(--color-divider)}.bound__name[data-v-67bd2420],.bound__var[data-v-67bd2420]{font-family:var(--font-mono);font-size:var(--text-xs)}.bound__var[data-v-67bd2420]{color:var(--color-brand)}.foot[data-v-67bd2420]{display:flex;align-items:center;gap:7px;height:38px;flex:none;padding:0 12px;background-color:var(--color-pane);border-top:1px solid var(--color-divider)}.foot__hint[data-v-67bd2420]{font-size:var(--text-xs);color:var(--color-dim)}.tab[data-v-67bd2420]:focus-visible,.seg button[data-v-67bd2420]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.page-settings[data-v-9ea0fdd8]{position:absolute;top:12px;right:12px;bottom:12px;z-index:1000000;display:flex;flex-direction:column;width:340px;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.head[data-v-9ea0fdd8]{display:flex;align-items:center;gap:8px;flex:none;height:34px;padding:0 6px 0 12px;border-bottom:1px solid var(--color-divider)}.head__title[data-v-9ea0fdd8]{flex:1;margin:0;font-size:var(--text-sm, 12px);font-weight:500;color:var(--color-fg)}.head__close[data-v-9ea0fdd8]{width:24px;height:24px;font-size:16px;line-height:1;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.head__close[data-v-9ea0fdd8]:hover{color:var(--color-fg);background-color:var(--color-raised)}.head__close[data-v-9ea0fdd8]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.body[data-v-9ea0fdd8]{flex:1;min-height:0;overflow-y:auto;padding:12px}.group+.group[data-v-9ea0fdd8]{margin-top:18px}.group__label[data-v-9ea0fdd8]{margin:0 0 8px;font-size:var(--text-xs, 11px);font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--color-dim)}.group[data-v-9ea0fdd8]>.field{margin-bottom:8px}.ident[data-v-9ea0fdd8]{margin:18px 0 0;font-size:var(--text-xs, 11px);color:var(--color-dim)}.ident code[data-v-9ea0fdd8]{font-family:var(--font-mono);user-select:all}.missing[data-v-9ea0fdd8]{margin:0;font-size:var(--text-sm, 12px);color:var(--color-dim)}.foot[data-v-9ea0fdd8]{display:flex;justify-content:flex-end;flex:none;padding:8px 12px;border-top:1px solid var(--color-divider)}.ghost{display:none}.editor[data-v-bd444b0c]{position:relative;padding:0;border:0;display:flex;align-items:stretch;width:100%;height:100%;min-height:0;overflow:hidden;background:var(--color-bg)}.palette__act[data-v-bd444b0c]{display:flex;align-items:center;justify-content:center;width:22px;height:22px;color:var(--color-dim);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.palette__act[data-v-bd444b0c]:hover{color:var(--color-fg);background-color:var(--color-raised)}.palette__act[data-v-bd444b0c]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.report-container[data-v-bd444b0c]{flex:1 1 auto;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;min-width:0;height:100%;position:relative;background:var(--color-canvas)}.report-container.dottet[data-v-bd444b0c]{background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:24px 24px;background-position:-12px -12px;background-repeat:repeat}.report-container__title[data-v-bd444b0c]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider)}.report-container .widgets-adding-controls[data-v-bd444b0c]{display:flex;border:1px solid var(--color-divider);border-radius:var(--radius-md, 8px);margin:16px}.report-container .widget-board[data-v-bd444b0c]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-bd444b0c]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-bd444b0c]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-bd444b0c]{position:absolute}.dropdown-buttons-container[data-v-bd444b0c]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-bd444b0c]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-bd444b0c]{z-index:20000000!important}.v-enter-active[data-v-bd444b0c],.v-leave-active[data-v-bd444b0c]{transition:opacity .5s ease}.v-enter-from[data-v-bd444b0c],.v-leave-to[data-v-bd444b0c]{opacity:0}.variables[data-v-9292252d]{display:flex;flex-direction:column;gap:28px;box-sizing:border-box;width:100%;height:100%;overflow-y:auto;padding:28px 32px 40px;font-family:var(--font-sans);color:var(--color-fg);background-color:var(--color-bg)}.variables__head[data-v-9292252d],.reach[data-v-9292252d]{width:100%;max-width:940px}.variables__head[data-v-9292252d]{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap}.variables__title[data-v-9292252d]{margin:0 0 6px;font-size:20px;font-weight:600;letter-spacing:-.01em}.variables__lead[data-v-9292252d]{margin:0;max-width:56ch;font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}.reach__title[data-v-9292252d]{display:flex;align-items:baseline;gap:12px;margin:0 0 2px;font-size:var(--text-base);font-weight:600}.reach__lead[data-v-9292252d]{font-weight:400;font-size:var(--text-sm);color:var(--color-dim)}.reach__empty[data-v-9292252d]{margin:0;padding:12px 0;border-top:1px solid var(--color-divider);font-size:var(--text-base);color:var(--color-dim)}.rows[data-v-9292252d]{margin:0;padding:0;list-style:none;border-top:1px solid var(--color-divider)}.row[data-v-9292252d]{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1.4fr) minmax(0,2fr) auto;align-items:center;gap:16px;padding:7px 8px 7px 0;border-bottom:1px solid var(--color-divider);font-size:var(--text-base)}.row[data-v-9292252d]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.row__name[data-v-9292252d]{font-family:var(--font-mono);overflow-wrap:anywhere}.row__type[data-v-9292252d],.row__value[data-v-9292252d]{color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row__value[data-v-9292252d]{font-family:var(--font-mono);color:var(--color-fg)}.row__tools[data-v-9292252d]{display:flex;gap:2px}.form[data-v-9292252d]{display:flex;flex-direction:column;gap:4px}.confirm__title[data-v-9292252d]{margin:0;font-size:var(--text-lg);font-weight:600}.confirm__text[data-v-9292252d]{margin:0;font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}@media(max-width:640px){.variables[data-v-9292252d]{padding:20px 16px 32px}.row[data-v-9292252d]{grid-template-columns:minmax(0,1fr) auto;row-gap:2px}.row__type[data-v-9292252d],.row__value[data-v-9292252d]{grid-column:1;white-space:normal}}.appearance[data-v-a84ca0bf]{display:flex;width:100%;flex:1 1 auto;min-height:0;padding:14px 16px 16px;background-color:var(--color-bg)}.panel[data-v-a84ca0bf]{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;background-color:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);overflow:hidden}.panel__head[data-v-a84ca0bf]{display:flex;align-items:center;gap:8px;height:var(--spacing-panelHeader);flex:none;padding:0 10px;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.head__tab[data-v-a84ca0bf]{position:relative;height:100%;padding:0 10px;font-family:inherit;font-size:var(--text-xs);font-weight:650;letter-spacing:.07em;text-transform:uppercase;color:var(--color-dim);background:none;border:0;cursor:pointer}.head__tab.on[data-v-a84ca0bf]{color:var(--color-fg)}.head__tab.on[data-v-a84ca0bf]:after{content:\"\";position:absolute;left:6px;right:6px;bottom:-1px;height:2px;background-color:var(--color-accent);border-radius:2px}.head__tab[data-v-a84ca0bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.gallery[data-v-a84ca0bf]{flex:1 1 auto;min-height:0;padding:16px 18px 24px;overflow-y:auto;background-color:var(--color-bg)}.gallery__lead[data-v-a84ca0bf]{margin:0 0 18px;max-width:70ch;font-size:var(--text-sm);color:var(--color-dim)}.demo[data-v-a84ca0bf]{margin-bottom:26px}.demo__title[data-v-a84ca0bf]{margin:0 0 10px;padding-bottom:4px;font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.demo__row[data-v-a84ca0bf]{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:12px}.demo__form[data-v-a84ca0bf]{max-width:460px}.panel__tools[data-v-a84ca0bf]{display:flex;align-items:center;gap:6px;margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400}.changed[data-v-a84ca0bf]{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-accent)}.body[data-v-a84ca0bf]{display:flex;flex:1 1 auto;min-height:0;background-color:var(--color-bg)}.themes[data-v-a84ca0bf]{width:240px;flex:none;display:flex;flex-direction:column;gap:2px;padding:8px 6px;overflow-y:auto;background-color:var(--color-pane);border-right:1px solid var(--color-divider)}.theme[data-v-a84ca0bf]{display:grid;gap:3px;padding:8px;font-family:inherit;text-align:left;background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.theme[data-v-a84ca0bf]:hover{background-color:var(--color-raised)}.theme.on[data-v-a84ca0bf]{background-color:color-mix(in srgb,var(--color-accent) 12%,transparent);border-color:color-mix(in srgb,var(--color-accent) 45%,transparent)}.theme__strip[data-v-a84ca0bf]{display:flex;height:14px;border-radius:2px;overflow:hidden;border:1px solid var(--color-divider)}.theme__strip i[data-v-a84ca0bf]{flex:1}.theme__name[data-v-a84ca0bf]{font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.theme__note[data-v-a84ca0bf]{font-size:var(--text-xs);line-height:1.4;color:var(--color-dim)}.tokens[data-v-a84ca0bf]{flex:1 1 auto;min-width:0;padding:8px 10px 16px;overflow-y:auto}.group__head[data-v-a84ca0bf]{display:flex;align-items:baseline;gap:7px;width:100%;padding:6px 4px;font-family:inherit;font-size:var(--text-base);font-weight:600;color:var(--color-fg);text-align:left;background:none;border:0;border-bottom:1px solid var(--color-divider);cursor:pointer}.group__twist[data-v-a84ca0bf]{width:11px;font-size:var(--text-xs);color:var(--color-dim)}.group__count[data-v-a84ca0bf]{margin-left:auto;font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.group__body[data-v-a84ca0bf]{padding:8px 0 14px 18px}.group__note[data-v-a84ca0bf]{margin:0 0 8px;font-size:var(--text-sm);color:var(--color-dim);max-width:70ch}.token[data-v-a84ca0bf]{display:flex;align-items:center;gap:8px;padding:3px 0}.token__swatch[data-v-a84ca0bf]{width:22px;height:22px;flex:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__swatch--none[data-v-a84ca0bf]{background:repeating-linear-gradient(45deg,var(--color-raised),var(--color-raised) 3px,var(--color-bg) 3px,var(--color-bg) 6px)}.token__text[data-v-a84ca0bf]{display:flex;flex-direction:column;min-width:0;flex:1 1 auto}.token__name[data-v-a84ca0bf]{font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg)}.token__role[data-v-a84ca0bf]{font-size:var(--text-xs);color:var(--color-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.token__picker[data-v-a84ca0bf]{width:28px;height:24px;flex:none;padding:0;background:none;border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__value[data-v-a84ca0bf]{width:220px;flex:none;height:24px;padding:0 7px;font-family:var(--font-mono);font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.token__reset[data-v-a84ca0bf]{width:24px;height:24px;flex:none;font-family:inherit;font-size:var(--text-base);color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.token__reset[data-v-a84ca0bf]:disabled{opacity:.35;cursor:default}.btn[data-v-a84ca0bf]{height:22px;padding:0 10px;font-family:inherit;font-size:var(--text-sm);color:var(--color-fg);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.btn[data-v-a84ca0bf]:hover{border-color:var(--color-outline)}.btn[data-v-a84ca0bf]:focus-visible,.theme[data-v-a84ca0bf]:focus-visible,.group__head[data-v-a84ca0bf]:focus-visible,.token__value[data-v-a84ca0bf]:focus-visible,.token__picker[data-v-a84ca0bf]:focus-visible,.token__reset[data-v-a84ca0bf]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}\n";})();
import { identifier as lm, VARIABLE_WRAPPER_FACTORY as sm } from "org.eclipse.daanse.board.app.lib.factory.variableWrapper";
import { EVENT_MANAGER as um, EVENT_ACTIONS_REGISTRY_ID as Ds } from "org.eclipse.daanse.board.app.lib.api.events";
import { ref as j, defineComponent as He, computed as X, inject as xe, onMounted as Hn, onBeforeUnmount as ta, createElementBlock as C, openBlock as g, Fragment as ke, createElementVNode as u, createBlock as Ae, createCommentVNode as ee, renderList as Fe, unref as v, toDisplayString as N, normalizeClass as Re, withModifiers as Nn, createVNode as L, createStaticVNode as dm, Teleport as Ks, resolveComponent as cm, shallowRef as Bs, watch as dn, nextTick as mi, normalizeStyle as Yt, resolveDynamicComponent as Kn, createTextVNode as ie, withDirectives as Kt, vModelText as Xo, withCtx as te, withKeys as _i, mergeModels as Zt, useModel as wr, renderSlot as fm, vShow as Yo, Transition as pm, isRef as gm, createApp as vm } from "vue";
import { NAVIGATION_REGISTRY as hm, NAVIGATION_REGISTRY_ID as Ys, NavigationItem as mm } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID as Zs, RouteDefinition as Ws } from "org.eclipse.daanse.board.app.lib.api.route";
import { useCurrentHistory as _m, useEList as xn, useGlobalLoading as bm, useEObject as Js, useFeature as ym, describeModel as bi, useBoard as wm, VariableComplexStringWrapper as km, VARIABLECOMPLEXSTRINGWRAPPER as xm } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DIcon as Ge, DButton as me, DField as Sm, DSwitch as ra, DInput as Xe, DModal as yr, DSelect as On, DTabs as Cm, DColorInput as Xs, DFloatingWindow as $m, DDateInput as Am, DSlider as Im, DCheckbox as Rm, DChip as qt, DDivider as Em } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useRoute as kr, useRouter as ia, createRouter as Tm, createWebHistory as Lm } from "vue-router";
import { identifier as xr } from "org.eclipse.daanse.board.app.lib.api.page";
import { identifier as xi } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { identifier as Yn, WorkspaceImpl as Om, ConnectionImpl as Vm, DatasourceImpl as Dm, VariableImpl as Bm, EventMappingImpl as Qs, PageImpl as Wm, WidgetImpl as Mm, LayoutItemImpl as Pm } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { JSONResource as js, URI as eu, OPTION_INDENT as Um } from "@emfts/core";
import { identifier as Si, CONNECTION_REPOSITORY as Nm } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as Ci, DATASOURCE_REPOSITORY as Fm } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { identifier as nu } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as zm } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { identifier as tu } from "org.eclipse.daanse.board.app.lib.api.widget";
import qm from "vuedraggable";
import { WrapperSettingsPackage as Gm, wrapperSettingsFormXmi as Hm, WrapperSettingsImpl as Km, WidgetWrapper as Ym } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { SettingsForm as yi, isModelled as Zm } from "org.eclipse.daanse.board.app.ui.vue.uimodel";
import { VariableEvents as Ms } from "org.eclipse.daanse.board.app.lib.variables";
import { SystemActionsEcoreContent as Jm, WidgetAction as Xm } from "org.eclipse.daanse.board.app.lib.events";
import { loggerFactory as ru } from "org.eclipse.daanse.board.app.lib.logger";
const { TINY_EMITTER: Hs, APP: am } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), en = [];
for (let p = 0; p < 256; ++p)
  en.push((p + 256).toString(16).slice(1));
function Qm(p, _ = 0) {
  return (en[p[_ + 0]] + en[p[_ + 1]] + en[p[_ + 2]] + en[p[_ + 3]] + "-" + en[p[_ + 4]] + en[p[_ + 5]] + "-" + en[p[_ + 6]] + en[p[_ + 7]] + "-" + en[p[_ + 8]] + en[p[_ + 9]] + "-" + en[p[_ + 10]] + en[p[_ + 11]] + en[p[_ + 12]] + en[p[_ + 13]] + en[p[_ + 14]] + en[p[_ + 15]]).toLowerCase();
}
const jm = new Uint8Array(16);
function e_() {
  return crypto.getRandomValues(jm);
}
function iu(p, _, o) {
  return crypto.randomUUID ? crypto.randomUUID() : n_(p);
}
function n_(p, _, o) {
  p = p || {};
  const k = p.random ?? p.rng?.() ?? e_();
  if (k.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return k[6] = k[6] & 15 | 64, k[8] = k[8] & 63 | 128, Qm(k);
}
const Zo = j(void 0);
function ou() {
  return {
    /** The page whose settings are open, if any. */
    settingsFor: Zo,
    openSettings: (p) => {
      Zo.value = p;
    },
    closeSettings: () => {
      Zo.value = void 0;
    }
  };
}
const pi = j(!0);
function au() {
  return {
    visible: pi,
    toggle: () => {
      pi.value = !pi.value;
    },
    hide: () => {
      pi.value = !1;
    }
  };
}
const t_ = "data-board-backdrop", lu = "daanse.board.backdrop";
function r_() {
  try {
    return localStorage.getItem(lu) === "on";
  } catch {
    return !1;
  }
}
const _r = j(r_());
function su() {
  document.documentElement.setAttribute(t_, _r.value ? "on" : "off");
}
function i_() {
  try {
    localStorage.setItem(lu, _r.value ? "on" : "off");
  } catch {
  }
}
function o_() {
  return {
    shown: _r,
    toggle: () => {
      _r.value = !_r.value, i_(), su();
    }
  };
}
function a_() {
  su();
}
const l_ = "data-board-snap", uu = "daanse.board.snap";
function s_() {
  try {
    const p = localStorage.getItem(uu);
    return p === null ? !0 : p === "on";
  } catch {
    return !0;
  }
}
const br = j(s_());
function du() {
  document.documentElement.setAttribute(l_, br.value ? "on" : "off");
}
function u_() {
  try {
    localStorage.setItem(uu, br.value ? "on" : "off");
  } catch {
  }
}
function d_() {
  return {
    snapping: br,
    toggle: () => {
      br.value = !br.value, u_(), du();
    }
  };
}
function c_() {
  du();
}
const f_ = { class: "topbar" }, p_ = {
  class: "crumb",
  "aria-label": "Pfad"
}, g_ = {
  key: 0,
  class: "crumb-sep",
  "aria-hidden": "true"
}, v_ = ["onClick"], h_ = ["aria-expanded"], m_ = { class: "pages__name" }, __ = {
  key: 0,
  class: "pages__menu",
  role: "menu"
}, b_ = ["onClick"], y_ = ["title", "aria-label", "onClick"], w_ = ["disabled", "title"], k_ = ["disabled", "title"], x_ = ["aria-pressed"], S_ = ["aria-pressed"], C_ = ["aria-pressed"], $_ = {
  key: 8,
  class: "modes",
  role: "group",
  "aria-label": "Modus"
}, A_ = ["aria-pressed"], I_ = ["aria-pressed"], R_ = /* @__PURE__ */ He({
  __name: "Header",
  setup(p) {
    const _ = kr(), o = ia(), k = X(() => _.params.pageid ?? ""), m = _m(), S = X(
      () => _.name === "edit" || _.name === "pageEdit" || String(_.path).endsWith("/edit")
    ), c = X(() => {
      const G = { label: "Boards", to: "/" }, K = {
        label: k.value ? `Board ${k.value.slice(0, 8)}` : "Board",
        to: k.value ? `/page/${k.value}` : void 0
      };
      switch (_.name) {
        case "home":
          return [{ label: "Boards" }];
        case "page":
          return [G, { label: K.label }];
        case "edit":
        case "pageEdit":
          return [G, K, { label: "Bearbeiten" }];
        case "data":
          return [G, { label: "Verbindungen & Daten" }];
        case "config":
          return [G, { label: "Konfiguration" }];
        case "save":
          return [G, { label: "Speicher" }];
        case "test":
          return [G, { label: "Test" }];
        default:
          return [G, { label: String(_.name ?? "Board") }];
      }
    }), I = X(() => !!k.value), y = xe(xr);
    xe(xi);
    const { openSettings: f } = ou(), w = xn(xe(Yn), (G) => G.pages), { visible: Y, toggle: F } = au(), { shown: z, toggle: R } = o_(), { snapping: M, toggle: O } = d_(), E = X(() => {
      if (w.value, !k.value) return !1;
      try {
        const G = y?.getPage(k.value);
        return !!(G?.backgroundImage?.trim() || G?.backgroundColor?.trim());
      } catch {
        return !1;
      }
    }), W = X(() => {
      w.value;
      const G = y?.getAllPageIds() ?? [], K = [];
      for (const ue of G) {
        const le = y?.getPage(ue);
        le && K.push(le);
      }
      return K;
    }), H = X(() => {
      if (w.value, !k.value) return "";
      try {
        return y?.getPage(k.value)?.name ?? "Seite";
      } catch {
        return "Seite";
      }
    }), q = j(!1);
    function V(G) {
      q.value = !1, G !== k.value && o.push(S.value ? `/page/${G}/edit` : `/page/${G}`);
    }
    const J = j();
    function _e(G) {
      q.value && (J.value?.contains(G.target) || (q.value = !1));
    }
    function Me(G) {
      G.key === "Escape" && (q.value = !1);
    }
    Hn(() => {
      document.addEventListener("pointerdown", _e), document.addEventListener("keydown", Me);
    }), ta(() => {
      document.removeEventListener("pointerdown", _e), document.removeEventListener("keydown", Me);
    });
    function tn() {
      const G = iu();
      y?.registerPage({
        id: G,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), q.value = !1, o.push(`/page/${G}/edit`);
    }
    const rn = X(() => W.value.length > 1);
    function se(G) {
      if (!rn.value) return;
      const K = W.value.find((ue) => ue.id === G);
      if (confirm(`Seite „${K?.name ?? G}" löschen? Das lässt sich nicht rückgängig machen.`) && (y?.unregisterPage(G), G === k.value)) {
        const ue = W.value.find((le) => le.id !== G);
        ue && o.push(S.value ? `/page/${ue.id}/edit` : `/page/${ue.id}`);
      }
    }
    const oe = () => {
      k.value && o.push(`/page/${k.value}`);
    }, de = () => {
      k.value && o.push(`/page/${k.value}/edit`);
    }, ge = () => o.push({ path: "/", query: { view: "storage" } }), ae = () => o.push("/appearance");
    return (G, K) => (g(), C(ke, null, [
      u("header", f_, [
        K[14] || (K[14] = u("span", { class: "brand" }, [
          u("span", {
            class: "brand-mark",
            "aria-hidden": "true"
          }, "D"),
          u("span", { class: "brand-name" }, "Daanse Board")
        ], -1)),
        u("nav", p_, [
          (g(!0), C(ke, null, Fe(c.value, (ue, le) => (g(), C(ke, {
            key: ue.label + le
          }, [
            le > 0 ? (g(), C("span", g_, "/")) : ee("", !0),
            ue.to && le < c.value.length - 1 ? (g(), C("button", {
              key: 1,
              type: "button",
              class: "crumb-part crumb-link",
              onClick: (Oe) => v(o).push(ue.to)
            }, N(ue.label), 9, v_)) : (g(), C("span", {
              key: 2,
              class: Re(["crumb-part", { current: le === c.value.length - 1 }])
            }, N(ue.label), 3))
          ], 64))), 128))
        ]),
        I.value ? (g(), C("div", {
          key: 0,
          ref_key: "menuHost",
          ref: J,
          class: "pages"
        }, [
          u("button", {
            type: "button",
            class: "pages__current",
            "aria-expanded": q.value,
            "aria-haspopup": "menu",
            title: "Seite wechseln",
            onClick: K[0] || (K[0] = (ue) => q.value = !q.value)
          }, [
            u("span", m_, N(H.value), 1),
            K[7] || (K[7] = u("span", {
              class: "pages__caret",
              "aria-hidden": "true"
            }, "▾", -1))
          ], 8, h_),
          q.value ? (g(), C("ul", __, [
            (g(!0), C(ke, null, Fe(W.value, (ue) => (g(), C("li", {
              key: ue.id,
              role: "none",
              class: "pages__line"
            }, [
              u("button", {
                type: "button",
                role: "menuitem",
                class: Re(["pages__item", { on: ue.id === k.value }]),
                onClick: (le) => V(ue.id)
              }, N(ue.name), 11, b_),
              rn.value ? (g(), C("button", {
                key: 0,
                type: "button",
                class: "pages__remove",
                title: `Seite „${ue.name}“ löschen`,
                "aria-label": `Seite ${ue.name} löschen`,
                onClick: Nn((le) => se(ue.id), ["stop"])
              }, " × ", 8, y_)) : ee("", !0)
            ]))), 128)),
            K[8] || (K[8] = u("li", {
              class: "pages__sep",
              role: "separator"
            }, null, -1)),
            u("li", { role: "none" }, [
              u("button", {
                type: "button",
                role: "menuitem",
                class: "pages__item pages__add",
                onClick: tn
              }, " + Neue Seite ")
            ])
          ])) : ee("", !0)
        ], 512)) : ee("", !0),
        S.value && v(m) ? (g(), C("button", {
          key: 1,
          type: "button",
          class: "icon-action",
          disabled: !v(m).canUndo.value,
          title: v(m).undoLabel.value ? `Rückgängig: ${v(m).undoLabel.value}` : "Rückgängig",
          "aria-label": "Letzte Änderung rückgängig machen",
          onClick: K[1] || (K[1] = (ue) => v(m).undo())
        }, [
          L(v(Ge), {
            name: "undo",
            size: "sm"
          })
        ], 8, w_)) : ee("", !0),
        S.value && v(m) ? (g(), C("button", {
          key: 2,
          type: "button",
          class: "icon-action",
          disabled: !v(m).canRedo.value,
          title: v(m).redoLabel.value ? `Wiederholen: ${v(m).redoLabel.value}` : "Wiederholen",
          "aria-label": "Rückgängig gemachte Änderung wiederholen",
          onClick: K[2] || (K[2] = (ue) => v(m).redo())
        }, [
          L(v(Ge), {
            name: "redo",
            size: "sm"
          })
        ], 8, k_)) : ee("", !0),
        S.value ? (g(), C("button", {
          key: 3,
          type: "button",
          class: Re(["icon-action", { on: v(M) }]),
          "aria-pressed": v(M),
          title: "Am Raster ausrichten",
          "aria-label": "Widgets am Raster ausrichten",
          onClick: K[3] || (K[3] = //@ts-ignore
          (...ue) => v(O) && v(O)(...ue))
        }, [...K[9] || (K[9] = [
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
        ])], 10, x_)) : ee("", !0),
        S.value && E.value ? (g(), C("button", {
          key: 4,
          type: "button",
          class: Re(["icon-action", { on: v(z) }]),
          "aria-pressed": v(z),
          title: "Hintergrund der Seite zeigen",
          "aria-label": "Hintergrund der Seite beim Bearbeiten zeigen oder verbergen",
          onClick: K[4] || (K[4] = //@ts-ignore
          (...ue) => v(R) && v(R)(...ue))
        }, [...K[10] || (K[10] = [
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
        ])], 10, S_)) : ee("", !0),
        S.value ? (g(), C("button", {
          key: 5,
          type: "button",
          class: Re(["icon-action", { on: v(Y) }]),
          "aria-pressed": v(Y),
          title: "Widgets",
          "aria-label": "Widget-Palette zeigen oder verbergen",
          onClick: K[5] || (K[5] = //@ts-ignore
          (...ue) => v(F) && v(F)(...ue))
        }, [...K[11] || (K[11] = [
          dm('<svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15" data-v-7fa027b5><rect x="3.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-7fa027b5></rect><rect x="13.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-7fa027b5></rect><rect x="3.5" y="13.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" data-v-7fa027b5></rect><rect x="13.5" y="13.5" width="7" height="7" rx="1" fill="currentColor" stroke="currentColor" stroke-width="1.6" data-v-7fa027b5></rect></svg>', 1)
        ])], 10, C_)) : ee("", !0),
        I.value ? (g(), C("button", {
          key: 6,
          type: "button",
          class: "icon-action",
          title: "Seite einrichten",
          "aria-label": "Seite einrichten",
          onClick: K[6] || (K[6] = (ue) => v(f)(k.value))
        }, [...K[12] || (K[12] = [
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
        ])])) : ee("", !0),
        K[15] || (K[15] = u("span", { class: "spacer" }, null, -1)),
        I.value ? (g(), C("button", {
          key: 7,
          type: "button",
          class: "action",
          title: "Arbeitsstand speichern oder laden",
          onClick: ge
        }, " Speichern ")) : ee("", !0),
        I.value ? (g(), C("div", $_, [
          u("button", {
            type: "button",
            class: Re(["mode", { on: !S.value }]),
            "aria-pressed": !S.value,
            onClick: oe
          }, " Ansicht ", 10, A_),
          u("button", {
            type: "button",
            class: Re(["mode", { on: S.value }]),
            "aria-pressed": S.value,
            onClick: de
          }, " Bearbeiten ", 10, I_)
        ])) : ee("", !0),
        u("button", {
          type: "button",
          class: "icon-action",
          title: "Erscheinungsbild",
          "aria-label": "Erscheinungsbild",
          onClick: ae
        }, [...K[13] || (K[13] = [
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
        K[16] || (K[16] = u("span", {
          class: "avatar",
          title: "Angemeldet"
        }, "MH", -1))
      ]),
      (g(), Ae(Ks, { to: "body" }))
    ], 64));
  }
}), Ke = (p, _) => {
  const o = p.__vccOpts || p;
  for (const [k, m] of _)
    o[k] = m;
  return o;
}, E_ = /* @__PURE__ */ Ke(R_, [["__scopeId", "data-v-7fa027b5"]]), wi = [
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
], cu = wi.flatMap((p) => p.tokens.map((_) => _.name));
new Map(
  wi.flatMap((p) => p.tokens).map((p) => [p.name, p])
);
const T_ = {
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
}, Jo = "'Barlow', system-ui, -apple-system, 'Segoe UI', sans-serif", Ps = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace", Us = "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace", gi = {
  "text-xs": "11px",
  "text-sm": "12px",
  "text-base": "13px",
  "text-lg": "15px",
  "text-xl": "24px"
}, fu = [
  {
    id: "messwarte",
    name: "Messwarte",
    note: "Dunkler Grund, Zahlen als hellstes Element. Für Boards, die stundenlang laufen.",
    dark: !0,
    tokens: {
      ...gi,
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
      "font-sans": Jo,
      "font-mono": Ps,
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
      ...gi,
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
      "font-sans": Jo,
      "font-mono": Ps,
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
      ...gi,
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
      "font-mono": Us,
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
      ...gi,
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
      "font-sans": Jo,
      "font-mono": Us,
      "radius-xs": "3px",
      "radius-sm": "6px",
      "radius-md": "8px",
      "radius-lg": "12px",
      "shadow-e1": "0 1px 2px rgba(36, 34, 25, 0.12)",
      "shadow-e2": "0 2px 8px rgba(36, 34, 25, 0.12)",
      "shadow-e3": "0 8px 24px rgba(36, 34, 25, 0.14)"
    }
  }
], Ns = "messwarte", pu = "daanse.board.theme";
function L_() {
  const p = { themeId: Ns, overrides: {} };
  try {
    const _ = localStorage.getItem(pu);
    if (!_) return p;
    const o = JSON.parse(_);
    return {
      themeId: typeof o?.themeId == "string" ? o.themeId : Ns,
      // Only tokens we know about - a stale name would write a dead property
      overrides: Object.fromEntries(
        Object.entries(o?.overrides ?? {}).filter(
          ([k, m]) => cu.includes(k) && typeof m == "string"
        )
      )
    };
  } catch {
    return p;
  }
}
const nn = j(L_()), Qo = j([]);
function vi() {
  try {
    localStorage.setItem(pu, JSON.stringify(nn.value));
  } catch {
  }
}
function Ht() {
  const p = hr.value.find((k) => k.id === nn.value.themeId);
  if (!p) return;
  const _ = document.documentElement, o = { ...p.tokens, ...nn.value.overrides };
  for (const [k, m] of Object.entries(o))
    _.style.setProperty(`--${k}`, m);
  for (const [k, m] of Object.entries(T_)) {
    const S = o[m];
    S && _.style.setProperty(`--${k}`, S);
  }
  _.style.colorScheme = p.dark ? "dark" : "light", _.setAttribute("data-theme", p.dark ? "dark" : "light");
}
const hr = X(() => [...fu, ...Qo.value]);
function gu() {
  const p = X(
    () => hr.value.find((f) => f.id === nn.value.themeId) ?? fu[0]
  );
  function _(f) {
    return nn.value.overrides[f] ?? p.value.tokens[f] ?? "";
  }
  function o(f) {
    return f in nn.value.overrides;
  }
  function k(f) {
    hr.value.some((w) => w.id === f) && (nn.value = { themeId: f, overrides: {} }, vi(), Ht());
  }
  function m(f, w) {
    cu.includes(f) && (nn.value = {
      ...nn.value,
      overrides: { ...nn.value.overrides, [f]: w }
    }, vi(), Ht());
  }
  function S(f) {
    const { [f]: w, ...Y } = nn.value.overrides;
    nn.value = { ...nn.value, overrides: Y }, vi(), Ht();
  }
  function c() {
    nn.value = { ...nn.value, overrides: {} }, vi(), Ht();
  }
  function I(f) {
    hr.value.some((w) => w.id === f.id) || (Qo.value = [...Qo.value, f]);
  }
  function y() {
    return {
      ...p.value,
      id: `${p.value.id}-eigen`,
      name: `${p.value.name} (angepasst)`,
      tokens: { ...p.value.tokens, ...nn.value.overrides }
    };
  }
  return {
    themes: hr,
    activeTheme: p,
    overrides: X(() => nn.value.overrides),
    valueOf: _,
    isOverridden: o,
    selectTheme: k,
    setToken: m,
    clearToken: S,
    clearAllTokens: c,
    addTheme: I,
    exportTheme: y,
    apply: Ht
  };
}
function O_() {
  Ht();
}
const V_ = { class: "shell" }, D_ = {
  key: 0,
  class: "global-loading-bar"
}, B_ = {
  key: 0,
  class: "rail",
  "aria-label": "Bereiche"
}, W_ = ["aria-current"], M_ = ["aria-current"], P_ = ["aria-current", "title", "onClick"], U_ = { class: "sr-only" }, N_ = { class: "content" }, F_ = /* @__PURE__ */ He({
  __name: "App",
  setup(p) {
    const _ = j([]), { isLoading: o } = bm();
    gu();
    const k = kr(), m = ia();
    Hn(() => {
      const f = xe(hm);
      _.value = f.getAllNavigationItemsArray ? f.getAllNavigationItemsArray() : [];
    });
    const S = X(
      () => k.params.pageid ? `/page/${k.params.pageid}` : "/page/abc"
    ), c = X(() => String(k.name) === "home" && !k.params.pageid), I = X(
      () => ["home", "page", "edit", "pageEdit"].includes(String(k.name))
    ), y = (f) => m.push(f);
    return (f, w) => {
      const Y = cm("router-view");
      return g(), C("div", V_, [
        v(o) ? (g(), C("div", D_, [...w[2] || (w[2] = [
          u("div", { class: "global-loading-bar-progress" }, null, -1)
        ])])) : ee("", !0),
        L(E_),
        u("div", {
          class: Re(["shell-body", { "shell-body--norail": c.value }])
        }, [
          c.value ? ee("", !0) : (g(), C("nav", B_, [
            u("button", {
              type: "button",
              class: Re(["ri", { on: I.value }]),
              "aria-current": I.value ? "page" : void 0,
              title: "Board",
              onClick: w[0] || (w[0] = (F) => y(S.value))
            }, [
              L(v(Ge), { name: "dashboard" }),
              w[3] || (w[3] = u("span", { class: "sr-only" }, "Board", -1))
            ], 10, W_),
            u("button", {
              type: "button",
              class: Re(["ri", { on: v(k).name === "data" }]),
              "aria-current": v(k).name === "data" ? "page" : void 0,
              title: "Verbindungen & Daten",
              onClick: w[1] || (w[1] = (F) => y("/datasources"))
            }, [
              L(v(Ge), { name: "dataset" }),
              w[4] || (w[4] = u("span", { class: "sr-only" }, "Verbindungen & Daten", -1))
            ], 10, M_),
            (g(!0), C(ke, null, Fe(_.value, (F) => (g(), C("button", {
              key: F.id,
              type: "button",
              class: Re(["ri", { on: v(k).name === F.routeName }]),
              "aria-current": v(k).name === F.routeName ? "page" : void 0,
              title: F.label,
              onClick: (z) => y(F.route)
            }, [
              L(v(Ge), {
                name: F.icon
              }, null, 8, ["name"]),
              u("span", U_, N(F.label), 1)
            ], 10, P_))), 128)),
            w[5] || (w[5] = u("span", { class: "rail-spacer" }, null, -1))
          ])),
          u("main", N_, [
            (g(), Ae(Y, {
              key: f.$route.fullPath
            }))
          ])
        ], 2)
      ]);
    };
  }
}), z_ = /* @__PURE__ */ Ke(F_, [["__scopeId", "data-v-27fec35c"]]), vu = "daanse.board.usage";
function q_() {
  try {
    const p = localStorage.getItem(vu), _ = p ? JSON.parse(p) : {};
    return _ && typeof _ == "object" ? _ : {};
  } catch {
    return {};
  }
}
const ot = j(q_());
function hu() {
  function p(m) {
    if (!m) return;
    const S = ot.value[m];
    ot.value = {
      ...ot.value,
      [m]: { count: (S?.count ?? 0) + 1, lastOpened: Date.now() }
    };
    try {
      localStorage.setItem(vu, JSON.stringify(ot.value));
    } catch {
    }
  }
  function _(m) {
    return ot.value[m];
  }
  function o(m, S) {
    const c = ot.value[m], I = ot.value[S];
    return (I?.count ?? 0) !== (c?.count ?? 0) ? (I?.count ?? 0) - (c?.count ?? 0) : (I?.lastOpened ?? 0) - (c?.lastOpened ?? 0);
  }
  function k(m) {
    const S = ot.value[m]?.lastOpened;
    if (!S) return "";
    const c = Math.floor((Date.now() - S) / 864e5);
    return c <= 0 ? "heute" : c === 1 ? "gestern" : c < 31 ? `vor ${c} Tagen` : new Date(S).toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" });
  }
  return { usage: ot, recordOpened: p, usageOf: _, byUsage: o, lastOpenedLabel: k };
}
const G_ = {
  key: 0,
  class: "loading-state"
}, H_ = {
  key: 1,
  class: "view-component-wrapper"
}, K_ = {
  key: 2,
  class: "edit-component-wrapper"
}, Y_ = {
  key: 3,
  class: "no-layout-message"
}, Z_ = { class: "no-layout-message__text" }, J_ = { key: 0 }, X_ = { key: 1 }, Q_ = { key: 2 }, j_ = /* @__PURE__ */ He({
  __name: "LayoutRenderer",
  props: {
    pageId: {},
    viewMode: { type: Boolean }
  },
  emits: ["openWidgetSettings", "removeWidget"],
  setup(p, { emit: _ }) {
    const o = p, k = _, m = xe(xi), S = xe(xr), c = j(null), I = j(null), y = Bs(null), f = Bs(null), w = j(0), Y = j(!0), F = (H) => {
      k("openWidgetSettings", H);
    }, z = (H) => {
      k("removeWidget", H);
    };
    let R = 0;
    const M = async () => {
      const H = ++R;
      if (Y.value = !0, await mi(), H === R) {
        if (o.pageId && S) {
          const q = S.getPage(o.pageId);
          if (c.value = q ?? null, q?.layoutId && m) {
            const V = m.getLayout(q.layoutId);
            I.value = V || null, o.viewMode ? (f.value = V?.component || null, y.value = null) : (y.value = V?.editor || null, f.value = null);
          } else
            y.value = null, f.value = null, I.value = null;
        }
        await new Promise((q) => setTimeout(q, 50)), H === R && (Y.value = !1);
      }
    }, O = () => o.pageId ? S?.getPage(o.pageId) : void 0, E = Js(O);
    dn(E, () => {
      c.value = E.value ?? null;
    });
    const W = ym(O, "layoutId");
    return dn(W, () => {
      w.value++, M();
    }), Hn(async () => {
      await mi(), await M();
    }), (H, q) => (g(), C("div", {
      class: "layout-renderer",
      style: Yt({
        backgroundColor: c.value?.backgroundColor || void 0,
        backgroundImage: c.value?.backgroundImage ? `url(${c.value.backgroundImage})` : void 0,
        backgroundSize: c.value?.backgroundSize || "cover",
        backgroundPosition: c.value?.backgroundPosition || "center",
        backgroundRepeat: c.value?.backgroundRepeat || "no-repeat"
      })
    }, [
      Y.value ? (g(), C("div", G_, [...q[0] || (q[0] = [
        u("span", {
          class: "spinner",
          "aria-hidden": "true"
        }, null, -1),
        u("p", null, "Layout wird geladen…", -1)
      ])])) : o.viewMode && f.value && I.value ? (g(), C("div", H_, [
        (g(), Ae(Kn(f.value), {
          key: I.value.id || "view",
          "layout-settings": c.value?.layoutSettings
        }, null, 8, ["layout-settings"]))
      ])) : !o.viewMode && y.value && I.value ? (g(), C("div", K_, [
        (g(), Ae(Kn(y.value), {
          key: I.value.id || "edit",
          "layout-settings": c.value?.layoutSettings,
          onOpenSettings: F,
          onRemoveWidget: z
        }, null, 40, ["layout-settings"]))
      ])) : (g(), C("div", Y_, [
        u("p", Z_, [
          L(v(Ge), {
            name: "warning",
            size: "lg",
            tone: "color-warn"
          }),
          c.value ? I.value ? (g(), C("span", Q_, [
            ie(N(o.viewMode ? "Zu diesem Layout gibt es keine Darstellung." : "Zu diesem Layout gibt es keinen Editor.") + " ", 1),
            q[1] || (q[1] = u("br", null, null, -1)),
            u("small", null, "Layout: " + N(I.value.id), 1)
          ])) : (g(), C("span", X_, " Für „" + N(c.value.name || o.pageId) + '" ist kein Layout eingestellt. ', 1)) : (g(), C("span", J_, " Die Seite „" + N(o.pageId) + '" gibt es nicht. ', 1))
        ])
      ]))
    ], 4));
  }
}), mu = /* @__PURE__ */ Ke(j_, [["__scopeId", "data-v-965fd8c7"]]), e1 = {
  class: "floorplan",
  "aria-hidden": "true"
}, n1 = {
  key: 0,
  class: "floorplan__empty"
}, t1 = /* @__PURE__ */ He({
  __name: "BoardFloorplan",
  props: {
    items: {},
    typeById: {}
  },
  setup(p) {
    const _ = p;
    function o(m) {
      const S = (m ?? "").toLowerCase();
      return /chart|table|pivot|kpi|progress|timeline|filter|rss|weather/.test(S) ? "data" : /map|routing|image|video|vanta|svg|icon|mermaid|geo/.test(S) ? "visual" : "text";
    }
    const k = X(() => {
      const m = (_.items ?? []).filter(
        (f) => Number.isFinite(f.x) && Number.isFinite(f.y)
      );
      if (m.length === 0) return [];
      const S = Math.max(...m.map((f) => (f.x ?? 0) + (f.width ?? 1))), c = Math.max(...m.map((f) => (f.y ?? 0) + (f.height ?? 1))), I = S > 0 ? S : 1, y = c > 0 ? c : 1;
      return m.map((f) => ({
        key: f.id ?? `${f.x}-${f.y}`,
        family: o(_.typeById?.[f.id ?? ""]),
        style: {
          left: `${(f.x ?? 0) / I * 100}%`,
          top: `${(f.y ?? 0) / y * 100}%`,
          // minus the gutter, so neighbouring widgets stay visibly separate
          width: `calc(${Math.max((f.width ?? 1) / I * 100, 3)}% - 3px)`,
          height: `calc(${Math.max((f.height ?? 1) / y * 100, 6)}% - 3px)`
        }
      }));
    });
    return (m, S) => (g(), C("div", e1, [
      (g(!0), C(ke, null, Fe(k.value, (c) => (g(), C("div", {
        key: c.key,
        class: Re(["floorplan__block", `floorplan__block--${c.family}`]),
        style: Yt(c.style)
      }, null, 6))), 128)),
      k.value.length === 0 ? (g(), C("span", n1, "keine Widgets")) : ee("", !0)
    ]));
  }
}), jo = /* @__PURE__ */ Ke(t1, [["__scopeId", "data-v-0eecd73b"]]), { parse: r1 } = JSON, { keys: i1 } = Object, ki = String, o1 = "string", Fs = {}, _u = "object", a1 = (p, _) => _, l1 = (p) => p instanceof ki ? ki(p) : p, s1 = (p, _) => typeof _ === o1 ? new ki(_) : _, u1 = (p, _, o, k) => (m) => {
  for (let S = i1(m), { length: c } = S, I = 0; I < c; I++) {
    const y = S[I], f = m[y];
    if (f instanceof ki) {
      const w = p[+f];
      typeof w === _u && !o.has(w) ? (o.add(w), m[y] = Fs, _.push({ o: m, k: y, r: w })) : m[y] = k.call(m, y, w);
    } else m[y] !== Fs && (m[y] = k.call(m, y, f));
  }
  return m;
}, d1 = (p, _) => {
  const o = r1(p, s1).map(l1), k = a1;
  let m = o[0];
  if (typeof m === _u && m) {
    const S = [], c = u1(o, S, /* @__PURE__ */ new Set(), k);
    m = c(m);
    let I = 0;
    for (; I < S.length; ) {
      const { o: y, k: f, r: w } = S[I++];
      y[f] = k.call(y, f, c(w));
    }
  }
  return k.call({ "": m }, "", m);
};
function c1(p) {
  if (p) {
    if (typeof p == "object") return p;
    if (typeof p == "string")
      try {
        const _ = JSON.parse(p);
        return Array.isArray(_) ? d1(p) : _;
      } catch {
        return;
      }
  }
}
function f1(p) {
  return typeof p.eClass == "string";
}
function p1(p) {
  if (!p || typeof p != "object") return;
  const _ = new Om(), o = /* @__PURE__ */ new Map();
  for (const S of p.conections ?? []) {
    const c = new Vm();
    c.uid = S.uid, c.name = S.name, c.type = S.type, c.config = S.config ?? {}, _.connections.push(c), o.set(S.uid, c);
  }
  const k = /* @__PURE__ */ new Map();
  for (const S of p.datasources ?? []) {
    const c = new Dm();
    c.uid = S.uid, c.name = S.name, c.type = S.type, c.config = S.config ?? {};
    const I = o.get((S.config ?? {}).connection);
    I && (c.connection = I), _.datasources.push(c), k.set(S.uid, c);
  }
  const m = [];
  for (const S of p.variables ?? []) {
    const c = new Bm();
    c.uid = S.id ?? S.uid ?? Math.random().toString(36).substring(7), c.name = S.name, c.type = S.type, c.scope = S.scope ?? "global", c.accessMode = S.accessMode ?? "external-writable", c.definition = S, _.variables.push(c), m.push({ entry: S, variable: c });
  }
  for (const S of p.eventMappings ?? []) {
    const c = new Qs();
    c.id = S.id, c.definition = S, _.eventMappings.push(c);
  }
  for (const [S, c] of Object.entries(p.pages ?? {})) {
    const I = c?.info ?? {}, y = new Wm();
    y.id = I.id ?? S, y.name = I.name ?? "Seite", y.description = I.description, y.icon = I.icon, y.visibleInNavigation = I.visibleInNavigation ?? !0, y.layoutId = I.layoutId ?? I.layout?.id ?? "org.eclipse.daanse.board.app.ui.vue.layouts.base", y.layoutSettings = I.layoutSettings, y.backgroundColor = I.backgroundColor, y.backgroundImage = I.backgroundImage, y.backgroundSize = I.backgroundSize, y.backgroundPosition = I.backgroundPosition, y.backgroundRepeat = I.backgroundRepeat;
    for (const f of c?.widgets ?? []) {
      const w = new Mm();
      w.uid = f.uid, w.type = f.type, w.config = f.config ?? {}, w.wrapperConfig = f.wrapperConfig ?? {};
      const Y = k.get(f.config?.datasourceId);
      Y && (w.datasource = Y), y.widgets.push(w);
    }
    for (const f of c?.layout ?? []) {
      const w = new Pm();
      w.id = f.id, w.x = f.x ?? 0, w.y = f.y ?? 0, w.z = f.z ?? 0, w.width = f.width ?? 300, w.height = f.height ?? 150, w.group = f.group, y.layout.push(w);
    }
    _.pages.push(y);
  }
  for (const { entry: S, variable: c } of m) {
    const I = S.pageId;
    I && (c.page = _.pages.toArray().find((y) => y.id === I));
  }
  return _.pages.size() > 0 && (_.defaultPage = _.pages.get(0)), _;
}
const g1 = j();
function v1() {
  return g1;
}
const bu = "workspace.json";
function ea(p) {
  const _ = c1(p);
  if (_)
    try {
      if (!f1(_)) return p1(_);
      const o = new js(eu.createURI(bu));
      return o.loadFromString(JSON.stringify(_)), o.getContents().get(0);
    } catch {
      return;
    }
}
function h1() {
  const p = xe(Yn), _ = xe(Si), o = xe(Ci), k = xe(nu), m = xe(lm), S = xe(um);
  function c() {
    p.eventMappings.clear();
    for (const f of S?.getAllMappings() ?? []) {
      const w = new Qs();
      w.id = f.id, w.definition = f, p.eventMappings.push(w);
    }
  }
  function I() {
    c();
    const f = new js(eu.createURI(bu));
    f.getContents().add(p);
    const w = f.saveToString(/* @__PURE__ */ new Map([[Um, 2]]));
    return f.getContents().clear(), w;
  }
  function y(f) {
    const w = ea(f);
    if (!w) return [];
    p.connections.clear();
    for (const F of w.connections.toArray()) p.connections.push(F);
    p.datasources.clear();
    for (const F of w.datasources.toArray()) p.datasources.push(F);
    p.pages.clear();
    for (const F of w.pages.toArray()) p.pages.push(F);
    p.variables.clear();
    for (const F of w.variables.toArray()) p.variables.push(F);
    p.eventMappings.clear();
    for (const F of w.eventMappings.toArray()) p.eventMappings.push(F);
    p.defaultPage = p.pages.toArray().find((F) => F.id === w.defaultPage?.id) ?? (p.pages.size() > 0 ? p.pages.get(0) : void 0), _?.rebuildLive(), o?.rebuildLive(), k?.rebuildLive(), S?.setAllMappings(
      p.eventMappings.toArray().map((F) => F.definition)
    );
    const Y = [];
    for (const F of p.pages.toArray())
      m?.initilazeVariableWrappers(
        F.widgets.toArray().map((z) => ({
          uid: z.uid,
          type: z.type,
          config: z.config,
          wrapperConfig: z.wrapperConfig
        }))
      ), Y.push(F.id);
    return Y;
  }
  return { save: I, load: y };
}
function m1(p) {
  const _ = p.split(".").filter(Boolean);
  return (_[_.length - 1] ?? p).replace(/widget$/i, "") || p;
}
function yu(p, _, o, k) {
  const m = Array.isArray(o) ? o : [], S = Array.isArray(k) ? k : [], c = {};
  for (const f of S)
    f?.uid && f.type && (c[f.uid] = f.type);
  const I = new Set(
    S.map((f) => f?.config?.datasourceId).filter((f) => !!f)
  ), y = [...new Set(S.map((f) => m1(f?.type ?? "")).filter(Boolean))];
  return {
    id: p,
    name: _?.name || "Unbenanntes Board",
    description: _?.description ?? "",
    items: m,
    typeById: c,
    widgetCount: S.length,
    sourceCount: I.size,
    kinds: y
  };
}
const _1 = { class: "storage" }, b1 = {
  class: "tree",
  "aria-label": "Speicher"
}, y1 = {
  class: "tree__body",
  role: "tree"
}, w1 = ["aria-expanded", "onClick"], k1 = { class: "row__twist" }, x1 = { class: "row__name" }, S1 = { class: "row__meta" }, C1 = ["onClick"], $1 = { class: "row__name" }, A1 = { class: "row__meta" }, I1 = {
  key: 0,
  class: "row row--hint"
}, R1 = ["onClick"], E1 = {
  key: 0,
  class: "row row--hint"
}, T1 = { class: "detail" }, L1 = {
  key: 0,
  class: "detail__failure",
  role: "alert"
}, O1 = { class: "detail__head" }, V1 = { class: "detail__facts" }, D1 = { class: "create__hint" }, B1 = { class: "detail__head" }, W1 = { class: "detail__name" }, M1 = {
  key: 0,
  class: "detail__badge"
}, P1 = { class: "detail__facts" }, U1 = {
  key: 0,
  class: "boards"
}, N1 = { class: "board__text" }, F1 = { class: "board__name" }, z1 = { class: "board__facts" }, q1 = {
  key: 0,
  class: "board__kinds"
}, G1 = {
  key: 1,
  class: "detail__hint"
}, H1 = {
  key: 4,
  class: "detail__hint"
}, K1 = {
  key: 5,
  class: "detail__hint"
}, Y1 = /* @__PURE__ */ He({
  __name: "WorkspaceStorage",
  emits: ["restored"],
  setup(p, { emit: _ }) {
    const o = _, k = xe(zm), { save: m, load: S } = h1(), c = j([]), I = j({}), y = j(/* @__PURE__ */ new Set()), f = j(), w = j(), Y = j(""), F = j(""), z = j(!1), R = v1(), M = j(!1), O = j("");
    function E(U) {
      return typeof U == "string" ? U : U?.message ?? String(U);
    }
    function W(U) {
      return U.name ?? String(U.uri).split("/").pop() ?? String(U.uri);
    }
    function H(U) {
      return String(U.uri);
    }
    function q(U, x) {
      const $ = new URL(String(U.uri));
      return $.pathname = `/${x}.json`, $;
    }
    function V(U) {
      const x = U ? Object.getPrototypeOf(U)?.constructor : void 0;
      return x && "type" in x ? String(x.type) : "";
    }
    function J(U) {
      return typeof U?.create == "function";
    }
    function _e(U) {
      const x = V(U);
      if (!(!x || !k?.isViewForRepoType(x)))
        return k.getViewForRepoType(x);
    }
    const Me = X(() => _e(f.value));
    async function tn() {
      c.value = await k?.getAvailableReposetories() ?? [];
      const U = c.value[0];
      U && y.value.size === 0 && (f.value = U, await rn(U));
    }
    async function rn(U) {
      y.value.add(H(U)), y.value = new Set(y.value), await se(U);
    }
    async function se(U) {
      F.value = "", z.value = !0;
      try {
        I.value = { ...I.value, [H(U)]: await U.findAll() };
      } catch (x) {
        I.value = { ...I.value, [H(U)]: [] }, F.value = `Einträge konnten nicht gelesen werden: ${E(x)}`;
      } finally {
        z.value = !1;
      }
    }
    function oe(U) {
      f.value = U, M.value = !1, y.value.has(H(U)) ? (y.value.delete(H(U)), y.value = new Set(y.value)) : rn(U);
    }
    function de(U) {
      const x = I.value[H(U)] ?? [], $ = Y.value.trim().toLowerCase();
      return [...$ ? x.filter((Ve) => W(Ve).toLowerCase().includes($)) : x].sort((Ve, Ie) => W(Ve).localeCompare(W(Ie)));
    }
    function ge(U, x) {
      f.value = U, w.value = x, M.value = !1, F.value = "";
    }
    function ae(U) {
      return String(U.uri) === R.value?.entryUri;
    }
    function G(U, x) {
      R.value = { placeUri: String(f.value?.uri), entryUri: String(U.uri), name: x };
    }
    function K(U) {
      return ue(ea(U?.data));
    }
    function ue(U) {
      return (U?.pages.toArray() ?? []).map(
        (x) => yu(x.id, x, x.layout.toArray(), x.widgets.toArray())
      );
    }
    const le = X(() => K(w.value)), Oe = X(() => ({
      boards: le.value.length,
      widgets: le.value.reduce((U, x) => U + x.widgetCount, 0),
      sources: le.value.reduce((U, x) => U + x.sourceCount, 0)
    }));
    function cn(U) {
      const x = K(U);
      return x.length === 0 ? "leer" : `${x.length} ${x.length === 1 ? "Board" : "Boards"}`;
    }
    const ht = X(() => {
      if (!M.value) return { boards: 0, widgets: 0 };
      const U = ue(ea(m()));
      return {
        boards: U.length,
        widgets: U.reduce((x, $) => x + $.widgetCount, 0)
      };
    });
    async function It(U) {
      F.value = "";
      try {
        const x = await f.value?.getEntityByUri(U.uri), $ = S(x?.data ?? U.data);
        G(U, W(U)), o("restored", $);
      } catch (x) {
        F.value = `Laden fehlgeschlagen: ${E(x)}`;
      }
    }
    async function mt(U) {
      const x = f.value;
      if (x) {
        F.value = "";
        try {
          await x.update({ ...U, data: m() }), G(U, W(U)), await se(x), w.value = de(x).find(($) => String($.uri) === String(U.uri));
        } catch ($) {
          F.value = `Speichern fehlgeschlagen: ${E($)}`;
        }
      }
    }
    function Vn(U) {
      f.value = U, w.value = void 0, M.value = !0, O.value = "", F.value = "";
    }
    async function Fn() {
      const U = f.value, x = O.value.trim();
      if (!(!U || !x)) {
        F.value = "";
        try {
          const $ = { name: x, uri: q(U, x), data: m() };
          await U.create($), G($, x), await rn(U), M.value = !1, w.value = de(U).find((Q) => W(Q) === x);
        } catch ($) {
          F.value = `Anlegen fehlgeschlagen: ${E($)}`;
        }
      }
    }
    async function Jt(U) {
      const x = f.value;
      if (x) {
        F.value = "";
        try {
          await x.delete(U), ae(U) && (R.value = void 0), w.value === U && (w.value = void 0), await se(x);
        } catch ($) {
          F.value = `Löschen fehlgeschlagen: ${E($)}`;
        }
      }
    }
    function Zn(U) {
      const x = typeof U.data == "string" ? U.data : JSON.stringify(U.data), $ = URL.createObjectURL(new Blob([x], { type: "application/json" })), Q = document.createElement("a");
      Q.href = $, Q.download = `${W(U)}.json`, Q.click(), URL.revokeObjectURL($);
    }
    return Hn(tn), dn(() => k, tn), (U, x) => (g(), C("div", _1, [
      u("aside", b1, [
        Kt(u("input", {
          "onUpdate:modelValue": x[0] || (x[0] = ($) => Y.value = $),
          class: "tree__search",
          type: "search",
          placeholder: "Stände filtern",
          "aria-label": "Stände filtern"
        }, null, 512), [
          [Xo, Y.value]
        ]),
        u("div", y1, [
          (g(!0), C(ke, null, Fe(c.value, ($) => (g(), C(ke, {
            key: H($)
          }, [
            u("button", {
              type: "button",
              role: "treeitem",
              "aria-expanded": y.value.has(H($)),
              class: Re(["row", "row--place", { on: f.value === $ && !w.value }]),
              onClick: (Q) => oe($)
            }, [
              u("span", k1, N(y.value.has(H($)) ? "▾" : "▸"), 1),
              u("span", x1, N($.name), 1),
              u("span", S1, N((I.value[H($)] ?? []).length), 1)
            ], 10, w1),
            y.value.has(H($)) ? (g(), C(ke, { key: 0 }, [
              (g(!0), C(ke, null, Fe(de($), (Q) => (g(), C("button", {
                key: String(Q.uri),
                type: "button",
                role: "treeitem",
                class: Re(["row", "row--entry", { on: w.value === Q }]),
                onClick: (Ve) => ge($, Q)
              }, [
                u("span", {
                  class: Re(["row__dot", { open: ae(Q) }]),
                  "aria-hidden": "true"
                }, null, 2),
                u("span", $1, N(W(Q)), 1),
                u("span", A1, N(cn(Q)), 1)
              ], 10, C1))), 128)),
              de($).length === 0 ? (g(), C("p", I1, N(Y.value ? "Nichts gefunden" : "Noch kein Stand"), 1)) : ee("", !0),
              J($) ? (g(), C("button", {
                key: 1,
                type: "button",
                class: "row row--add",
                onClick: (Q) => Vn($)
              }, [...x[8] || (x[8] = [
                u("span", { class: "row__twist" }, "＋", -1),
                u("span", { class: "row__name" }, "Aktuellen Stand ablegen…", -1)
              ])], 8, R1)) : ee("", !0)
            ], 64)) : ee("", !0)
          ], 64))), 128)),
          c.value.length ? ee("", !0) : (g(), C("p", E1, "Keine Speicherorte eingerichtet."))
        ])
      ]),
      u("section", T1, [
        F.value ? (g(), C("p", L1, N(F.value), 1)) : ee("", !0),
        M.value ? (g(), C(ke, { key: 1 }, [
          u("header", O1, [
            x[9] || (x[9] = u("h2", { class: "detail__name" }, "Neuen Stand ablegen", -1)),
            u("span", V1, "in " + N(f.value?.name), 1)
          ]),
          u("form", {
            class: "create",
            onSubmit: Nn(Fn, ["prevent"])
          }, [
            x[12] || (x[12] = u("label", {
              class: "create__label",
              for: "storage-name"
            }, "Name", -1)),
            Kt(u("input", {
              id: "storage-name",
              "onUpdate:modelValue": x[1] || (x[1] = ($) => O.value = $),
              class: "create__input",
              type: "text",
              placeholder: "z. B. bodenfeuchte"
            }, null, 512), [
              [Xo, O.value]
            ]),
            L(v(me), {
              intent: "primary",
              size: "sm",
              type: "submit",
              disabled: !O.value.trim()
            }, {
              default: te(() => [...x[10] || (x[10] = [
                ie("Ablegen", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            L(v(me), {
              size: "sm",
              onClick: x[2] || (x[2] = ($) => M.value = !1)
            }, {
              default: te(() => [...x[11] || (x[11] = [
                ie("Abbrechen", -1)
              ])]),
              _: 1
            }),
            u("p", D1, " Abgelegt wird der gesamte Arbeitsstand: " + N(ht.value.boards) + " " + N(ht.value.boards === 1 ? "Board" : "Boards") + " mit " + N(ht.value.widgets) + " Widgets, dazu Verbindungen, Datenquellen und Variablen. ", 1)
          ], 32)
        ], 64)) : Me.value && !w.value ? (g(), Ae(Kn(Me.value), {
          key: 2,
          repo: f.value,
          context: I.value[H(f.value)],
          onClose: x[3] || (x[3] = ($) => se(f.value))
        }, null, 40, ["repo", "context"])) : w.value ? (g(), C(ke, { key: 3 }, [
          u("header", B1, [
            u("h2", W1, N(W(w.value)), 1),
            ae(w.value) ? (g(), C("span", M1, "geladen")) : ee("", !0),
            u("span", P1, N(f.value?.name) + " · " + N(Oe.value.boards) + " " + N(Oe.value.boards === 1 ? "Board" : "Boards") + " · " + N(Oe.value.widgets) + " Widgets · " + N(Oe.value.sources) + " Datenquellen ", 1),
            x[17] || (x[17] = u("span", { class: "detail__spacer" }, null, -1)),
            L(v(me), {
              intent: "primary",
              size: "sm",
              onClick: x[4] || (x[4] = ($) => It(w.value))
            }, {
              default: te(() => [...x[13] || (x[13] = [
                ie("Laden", -1)
              ])]),
              _: 1
            }),
            J(f.value) ? (g(), Ae(v(me), {
              key: 1,
              size: "sm",
              title: "Aktuellen Arbeitsstand hierhin schreiben",
              onClick: x[5] || (x[5] = ($) => mt(w.value))
            }, {
              default: te(() => [...x[14] || (x[14] = [
                ie(" Überschreiben ", -1)
              ])]),
              _: 1
            })) : ee("", !0),
            L(v(me), {
              size: "sm",
              onClick: x[6] || (x[6] = ($) => Zn(w.value))
            }, {
              default: te(() => [...x[15] || (x[15] = [
                ie("Herunterladen", -1)
              ])]),
              _: 1
            }),
            J(f.value) ? (g(), Ae(v(me), {
              key: 2,
              intent: "danger",
              size: "sm",
              onClick: x[7] || (x[7] = ($) => Jt(w.value))
            }, {
              default: te(() => [...x[16] || (x[16] = [
                ie(" Löschen ", -1)
              ])]),
              _: 1
            })) : ee("", !0)
          ]),
          le.value.length ? (g(), C("div", U1, [
            (g(!0), C(ke, null, Fe(le.value, ($) => (g(), C("article", {
              key: $.id,
              class: "board"
            }, [
              L(jo, {
                items: $.items,
                "type-by-id": $.typeById
              }, null, 8, ["items", "type-by-id"]),
              u("div", N1, [
                u("h3", F1, N($.name), 1),
                u("p", z1, N($.widgetCount) + " Widgets · " + N($.sourceCount) + " " + N($.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1),
                $.kinds.length ? (g(), C("p", q1, N($.kinds.join(" · ")), 1)) : ee("", !0)
              ])
            ]))), 128))
          ])) : (g(), C("p", G1, " In diesem Stand liegt kein Board - er enthält nur Verbindungen, Quellen oder Variablen. "))
        ], 64)) : z.value ? (g(), C("p", H1, "Wird gelesen…")) : (g(), C("p", K1, "Wähle links einen Stand, um zu sehen, was darin liegt."))
      ])
    ]));
  }
}), Z1 = /* @__PURE__ */ Ke(Y1, [["__scopeId", "data-v-82d034f3"]]), J1 = { class: "boards" }, X1 = { class: "boards__panel" }, Q1 = { class: "boards__bar" }, j1 = {
  class: "boards__views",
  role: "tablist",
  "aria-label": "Ansicht"
}, e0 = ["aria-selected"], n0 = {
  key: 0,
  class: "boards__count"
}, t0 = ["aria-selected"], r0 = {
  key: 0,
  class: "boards__tools"
}, i0 = { class: "boards__body" }, o0 = {
  key: 0,
  class: "boards__empty"
}, a0 = { class: "boards__empty-actions" }, l0 = {
  key: 1,
  class: "boards__grid"
}, s0 = ["aria-label", "onClick", "onKeydown"], u0 = { class: "board__body" }, d0 = { class: "board__name" }, c0 = { class: "board__meta" }, f0 = {
  key: 0,
  class: "board__usage"
}, p0 = {
  key: 1,
  class: "board__kinds"
}, g0 = {
  key: 0,
  class: "board__kind board__kind--more"
}, v0 = ["aria-label", "onClick"], h0 = {
  key: 0,
  class: "boards__nomatch"
}, m0 = /* @__PURE__ */ He({
  __name: "BoardsHome",
  props: {
    pageRepo: {},
    layoutRepo: {}
  },
  setup(p) {
    const _ = p, o = ia(), k = kr(), m = j(""), { usageOf: S, byUsage: c, lastOpenedLabel: I } = hu(), y = j(k.query.view === "storage" ? "storage" : "boards"), f = xn(xe(Yn), (O) => O.pages), w = X(() => {
      f.value;
      const O = _.pageRepo;
      return O ? O.getAllPageIds().slice().sort(c).map(
        (E) => (
          /* Both halves come off the page itself now. */
          yu(
            E,
            O.getPage(E),
            O.getPage(E)?.layout?.toArray() ?? [],
            O.getPage(E)?.widgets?.toArray() ?? []
          )
        )
      ) : [];
    }), Y = X(() => {
      const O = m.value.trim().toLowerCase();
      return O ? w.value.filter(
        (E) => E.name.toLowerCase().includes(O) || E.description.toLowerCase().includes(O) || E.kinds.some((W) => W.toLowerCase().includes(O))
      ) : w.value;
    });
    function F(O) {
      o.push(`/page/${O}`);
    }
    function z(O) {
      o.push(`/page/${O}/edit`);
    }
    function R() {
      const O = _.pageRepo;
      if (!O || !_.layoutRepo) return;
      const E = iu();
      O.registerPage({
        id: E,
        name: "Neue Seite",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        /* The id; the layout itself is resolved from the repository on render. */
        layoutId: "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      }), o.push(`/page/${E}/edit`);
    }
    function M() {
      y.value = "storage";
    }
    return (O, E) => (g(), C("div", J1, [
      u("div", X1, [
        u("header", Q1, [
          u("div", j1, [
            u("button", {
              type: "button",
              role: "tab",
              "aria-selected": y.value === "boards",
              class: Re(["boards__view", { on: y.value === "boards" }]),
              onClick: E[0] || (E[0] = (W) => y.value = "boards")
            }, [
              E[4] || (E[4] = ie(" Oft genutzt ", -1)),
              w.value.length ? (g(), C("span", n0, N(w.value.length), 1)) : ee("", !0)
            ], 10, e0),
            u("button", {
              type: "button",
              role: "tab",
              "aria-selected": y.value === "storage",
              class: Re(["boards__view", { on: y.value === "storage" }]),
              onClick: E[1] || (E[1] = (W) => y.value = "storage")
            }, " Speicher ", 10, t0)
          ]),
          y.value === "boards" ? (g(), C("div", r0, [
            Kt(u("input", {
              "onUpdate:modelValue": E[2] || (E[2] = (W) => m.value = W),
              class: "boards__search",
              type: "search",
              placeholder: "Boards filtern",
              "aria-label": "Boards filtern"
            }, null, 512), [
              [Xo, m.value]
            ]),
            L(v(me), {
              intent: "primary",
              size: "sm",
              onClick: R
            }, {
              default: te(() => [...E[5] || (E[5] = [
                ie("Neues Board", -1)
              ])]),
              _: 1
            })
          ])) : ee("", !0)
        ]),
        u("div", i0, [
          y.value === "boards" && w.value.length === 0 ? (g(), C("div", o0, [
            L(jo, {
              class: "boards__empty-plan",
              items: [
                { id: "a", x: 0, y: 0, width: 2, height: 1 },
                { id: "b", x: 2, y: 0, width: 1, height: 2 },
                { id: "c", x: 0, y: 1, width: 1, height: 1 },
                { id: "d", x: 1, y: 1, width: 1, height: 1 }
              ],
              "type-by-id": { a: "chart", b: "map", c: "table", d: "text" }
            }),
            E[8] || (E[8] = u("h2", { class: "boards__empty-title" }, "Noch kein Board", -1)),
            E[9] || (E[9] = u("p", { class: "boards__empty-text" }, " Ein Board ist eine Seite mit Widgets über deinen Datenquellen. Lege eines an oder öffne einen gespeicherten Arbeitsstand. ", -1)),
            u("div", a0, [
              L(v(me), {
                intent: "primary",
                size: "sm",
                onClick: R
              }, {
                default: te(() => [...E[6] || (E[6] = [
                  ie("Neues Board", -1)
                ])]),
                _: 1
              }),
              L(v(me), {
                size: "sm",
                onClick: M
              }, {
                default: te(() => [...E[7] || (E[7] = [
                  ie("Aus Speicher öffnen", -1)
                ])]),
                _: 1
              })
            ])
          ])) : y.value === "boards" ? (g(), C("div", l0, [
            (g(!0), C(ke, null, Fe(Y.value, (W) => (g(), C("article", {
              key: W.id,
              class: "board",
              tabindex: "0",
              role: "button",
              "aria-label": `Board ${W.name} öffnen`,
              onClick: (H) => F(W.id),
              onKeydown: [
                _i((H) => F(W.id), ["enter"]),
                _i(Nn((H) => F(W.id), ["prevent"]), ["space"])
              ]
            }, [
              L(jo, {
                items: W.items,
                "type-by-id": W.typeById
              }, null, 8, ["items", "type-by-id"]),
              u("div", u0, [
                u("h2", d0, N(W.name), 1),
                u("p", c0, [
                  ie(N(W.widgetCount) + " " + N(W.widgetCount === 1 ? "Widget" : "Widgets") + " ", 1),
                  W.sourceCount ? (g(), C(ke, { key: 0 }, [
                    ie(" · " + N(W.sourceCount) + " " + N(W.sourceCount === 1 ? "Datenquelle" : "Datenquellen"), 1)
                  ], 64)) : ee("", !0)
                ]),
                v(S)(W.id) ? (g(), C("p", f0, N(v(S)(W.id)?.count) + "× geöffnet · zuletzt " + N(v(I)(W.id)), 1)) : ee("", !0),
                W.kinds.length ? (g(), C("ul", p0, [
                  (g(!0), C(ke, null, Fe(W.kinds.slice(0, 3), (H) => (g(), C("li", {
                    key: H,
                    class: "board__kind"
                  }, N(H), 1))), 128)),
                  W.kinds.length > 3 ? (g(), C("li", g0, " +" + N(W.kinds.length - 3), 1)) : ee("", !0)
                ])) : ee("", !0)
              ]),
              u("button", {
                class: "board__edit",
                type: "button",
                "aria-label": `Board ${W.name} bearbeiten`,
                onClick: Nn((H) => z(W.id), ["stop"])
              }, " Bearbeiten ", 8, v0)
            ], 40, s0))), 128)),
            u("button", {
              class: "board board--new",
              type: "button",
              onClick: R
            }, [...E[10] || (E[10] = [
              u("span", {
                class: "board__plus",
                "aria-hidden": "true"
              }, "+", -1),
              u("span", { class: "board__name" }, "Neues Board", -1),
              u("span", { class: "board__meta" }, "Leer starten", -1)
            ])]),
            Y.value.length === 0 ? (g(), C("p", h0, " Kein Board passt zu „" + N(m.value) + "“. ", 1)) : ee("", !0)
          ])) : (g(), Ae(Z1, {
            key: 2,
            onRestored: E[3] || (E[3] = (W) => y.value = "boards")
          }))
        ])
      ])
    ]));
  }
}), _0 = /* @__PURE__ */ Ke(m0, [["__scopeId", "data-v-4c11f243"]]), b0 = { class: "report-container" }, y0 = /* @__PURE__ */ He({
  __name: "ViewReport",
  props: ["params"],
  setup(p) {
    const _ = p, o = kr(), k = xe(xr), m = xe(xi), S = X(() => _.params?.pageid ?? o.params.pageid ?? ""), { recordOpened: c } = hu();
    return dn(S, (I) => c(I), { immediate: !0 }), (I, y) => (g(), C("div", b0, [
      S.value ? (g(), Ae(mu, {
        key: 0,
        pageId: S.value,
        viewMode: !0
      }, null, 8, ["pageId"])) : (g(), Ae(_0, {
        key: 1,
        "page-repo": v(k),
        "layout-repo": v(m)
      }, null, 8, ["page-repo", "layout-repo"]))
    ]));
  }
}), zs = /* @__PURE__ */ Ke(y0, [["__scopeId", "data-v-3ecae506"]]), w0 = { boards: 0, widgets: 0 };
function wu() {
  const p = xe(xr);
  function _() {
    const m = {};
    if (!p) return m;
    for (const S of p.getAllPageIds()) {
      const c = /* @__PURE__ */ new Set();
      for (const I of p.getPage(S)?.widgets?.toArray() ?? []) {
        const y = I.datasource?.uid;
        if (!y) continue;
        const f = m[y] ??= { boards: 0, widgets: 0 };
        f.widgets++, c.add(y);
      }
      for (const I of c) m[I].boards++;
    }
    return m;
  }
  function o(m) {
    return _()[m] ?? w0;
  }
  function k(m) {
    if (!m.widgets) return "";
    const S = `${m.boards} ${m.boards === 1 ? "Board" : "Boards"}`, c = `${m.widgets} ${m.widgets === 1 ? "Widget" : "Widgets"}`;
    return `${S} · ${c}`;
  }
  return { usageByDatasource: _, usageOf: o, usageLabel: k };
}
const k0 = {
  key: 0,
  class: "model__none"
}, x0 = {
  key: 1,
  class: "model__none"
}, S0 = /* @__PURE__ */ He({
  __name: "ModelFields",
  props: {
    doc: {},
    config: {},
    omit: { default: () => [] }
  },
  setup(p) {
    const _ = p, o = /* @__PURE__ */ new Set(["name", "type", "uid"]), k = X(
      () => (_.doc?.features ?? []).filter(
        (c) => !o.has(c.name) && !_.omit.includes(c.name) && !c.many
      )
    );
    function m(c) {
      const I = c.name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/_/g, " ");
      return I.charAt(0).toUpperCase() + I.slice(1);
    }
    function S(c, I) {
      _.config[c.name] = I === "" ? void 0 : Number(I);
    }
    return (c, I) => p.doc ? k.value.length ? (g(!0), C(ke, { key: 2 }, Fe(k.value, (y) => (g(), C(ke, {
      key: y.name
    }, [
      y.type === "boolean" ? (g(), Ae(v(Sm), {
        key: 0,
        label: m(y),
        hint: y.documentation,
        stacked: ""
      }, {
        default: te(() => [
          L(v(ra), {
            "model-value": !!p.config[y.name],
            "onUpdate:modelValue": (f) => p.config[y.name] = f
          }, null, 8, ["model-value", "onUpdate:modelValue"])
        ]),
        _: 2
      }, 1032, ["label", "hint"])) : y.type === "number" ? (g(), Ae(v(Xe), {
        key: 1,
        "model-value": p.config[y.name] ?? "",
        label: m(y),
        hint: y.documentation,
        required: !y.optional,
        type: "number",
        stacked: "",
        "onUpdate:modelValue": (f) => S(y, f)
      }, null, 8, ["model-value", "label", "hint", "required", "onUpdate:modelValue"])) : (g(), Ae(v(Xe), {
        key: 2,
        "model-value": p.config[y.name] ?? "",
        label: m(y),
        hint: y.documentation,
        required: !y.optional,
        type: /url|uri|endpoint/i.test(y.name) ? "url" : "text",
        stacked: "",
        "onUpdate:modelValue": (f) => p.config[y.name] = f
      }, null, 8, ["model-value", "label", "hint", "required", "type", "onUpdate:modelValue"]))
    ], 64))), 128)) : (g(), C("p", x0, " Dieser Typ braucht außer dem Namen nichts weiter. ")) : (g(), C("p", k0, " Dieser Typ bringt kein Modell mit — die Felder füllst du nach dem Anlegen im Editor aus. "));
  }
}), ku = /* @__PURE__ */ Ke(S0, [["__scopeId", "data-v-deac0807"]]), C0 = { class: "new" }, $0 = { class: "new__step" }, A0 = { class: "types" }, I0 = ["onClick"], R0 = { class: "type__name" }, E0 = {
  key: 0,
  class: "type__what"
}, T0 = {
  key: 0,
  class: "new__step"
}, L0 = {
  key: 1,
  class: "new__step"
}, O0 = {
  key: 0,
  class: "new__lead"
}, V0 = /* @__PURE__ */ He({
  __name: "NewConnectionDialog",
  props: {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Zt(["created"], ["update:modelValue"]),
  setup(p, { emit: _ }) {
    const o = wr(p, "modelValue"), k = _, m = xe(Si), S = j(""), c = j(""), I = j({}), y = X(() => m.registeredConnections), f = X(() => {
      const R = {};
      for (const M of y.value)
        R[M] = bi(m.getConnectionIdentifiers(M)?.Model)?.documentation;
      return R;
    }), w = X(
      () => S.value ? bi(m.getConnectionIdentifiers(S.value)?.Model) : void 0
    );
    dn(S, () => {
      I.value = {};
    }), dn(o, (R) => {
      R && (S.value = "", c.value = "", I.value = {});
    });
    const Y = X(
      () => (w.value?.features ?? []).filter((R) => !R.optional && !["name", "type", "uid"].includes(R.name)).filter((R) => {
        const M = I.value[R.name];
        return M == null || M === "";
      }).map((R) => R.name)
    ), F = X(() => !!S.value && !!c.value.trim() && !Y.value.length);
    function z() {
      if (!F.value) return;
      const R = m.createConnection(S.value, { ...I.value });
      R.name = c.value.trim(), m.saveConnection(R), o.value = !1, k("created", R.uid);
    }
    return (R, M) => (g(), Ae(v(yr), {
      modelValue: o.value,
      "onUpdate:modelValue": M[2] || (M[2] = (O) => o.value = O),
      title: "Verbindung anlegen",
      size: "lg",
      onCancel: M[3] || (M[3] = (O) => o.value = !1)
    }, {
      actions: te(() => [
        L(v(me), {
          intent: "quiet",
          onClick: M[1] || (M[1] = (O) => o.value = !1)
        }, {
          default: te(() => [...M[8] || (M[8] = [
            ie("Abbrechen", -1)
          ])]),
          _: 1
        }),
        L(v(me), {
          intent: "primary",
          disabled: !F.value,
          onClick: z
        }, {
          default: te(() => [...M[9] || (M[9] = [
            ie("Anlegen", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: te(() => [
        u("div", C0, [
          u("section", $0, [
            M[4] || (M[4] = u("h3", { class: "new__label" }, "Typ", -1)),
            M[5] || (M[5] = u("p", { class: "new__lead" }, "Womit soll gesprochen werden? Die Beschreibung stammt aus dem Modell des Typs.", -1)),
            u("ul", A0, [
              (g(!0), C(ke, null, Fe(y.value, (O) => (g(), C("li", { key: O }, [
                u("button", {
                  type: "button",
                  class: Re(["type", { "type--on": S.value === O }]),
                  onClick: (E) => S.value = O
                }, [
                  u("span", R0, [
                    ie(N(O) + " ", 1),
                    S.value === O ? (g(), Ae(v(Ge), {
                      key: 0,
                      name: "check",
                      size: "sm"
                    })) : ee("", !0)
                  ]),
                  f.value[O] ? (g(), C("span", E0, N(f.value[O]), 1)) : ee("", !0)
                ], 10, I0)
              ]))), 128))
            ])
          ]),
          S.value ? (g(), C("section", T0, [
            M[6] || (M[6] = u("h3", { class: "new__label" }, "Name", -1)),
            L(v(Xe), {
              modelValue: c.value,
              "onUpdate:modelValue": M[0] || (M[0] = (O) => c.value = O),
              placeholder: "Wofür diese Verbindung steht",
              hint: "Unter diesem Namen wählst du die Verbindung später aus.",
              stacked: "",
              required: ""
            }, null, 8, ["modelValue"])
          ])) : ee("", !0),
          S.value ? (g(), C("section", L0, [
            M[7] || (M[7] = u("h3", { class: "new__label" }, "Einstellungen", -1)),
            w.value?.documentation ? (g(), C("p", O0, N(w.value.documentation), 1)) : ee("", !0),
            L(ku, {
              doc: w.value,
              config: I.value
            }, null, 8, ["doc", "config"])
          ])) : ee("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), D0 = /* @__PURE__ */ Ke(V0, [["__scopeId", "data-v-3345cef1"]]), B0 = { class: "new" }, W0 = { class: "new__step" }, M0 = { class: "types" }, P0 = ["onClick"], U0 = { class: "type__name" }, N0 = {
  key: 0,
  class: "type__what"
}, F0 = {
  key: 0,
  class: "new__step"
}, z0 = {
  key: 1,
  class: "new__step"
}, q0 = {
  key: 0,
  class: "new__warn"
}, G0 = {
  key: 2,
  class: "new__step"
}, H0 = {
  key: 0,
  class: "new__lead"
}, K0 = /* @__PURE__ */ He({
  __name: "NewDatasourceDialog",
  props: {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Zt(["created"], ["update:modelValue"]),
  setup(p, { emit: _ }) {
    const o = wr(p, "modelValue"), k = _, m = xe(Ci), S = xe(Yn), c = xn(S, (H) => H.connections), I = j(""), y = j(""), f = j(void 0), w = j({}), Y = X(() => m.registeredDatasources), F = X(() => {
      const H = {};
      for (const q of Y.value)
        H[q] = bi(m.getDatasourceIdentifiers(q)?.Model)?.documentation;
      return H;
    }), z = X(
      () => I.value ? bi(m.getDatasourceIdentifiers(I.value)?.Model) : void 0
    ), R = X(
      () => (z.value?.features ?? []).some((H) => H.name === "connection")
    ), M = X(
      () => c.value.map((H) => ({ label: H.name || H.uid, value: H.uid }))
    );
    dn(I, () => {
      w.value = {};
    }), dn(o, (H) => {
      H && (I.value = "", y.value = "", f.value = void 0, w.value = {});
    });
    const O = X(() => {
      const H = (z.value?.features ?? []).filter((q) => !q.optional && !["name", "type", "uid", "connection"].includes(q.name)).filter((q) => {
        const V = w.value[q.name];
        return V == null || V === "";
      }).map((q) => q.name);
      return R.value && !f.value && H.push("connection"), H;
    }), E = X(() => !!I.value && !!y.value.trim() && !O.value.length);
    function W() {
      if (!E.value) return;
      const H = { ...w.value };
      R.value && (H.connection = f.value);
      const q = m.createDatasource(I.value, H);
      q.name = y.value.trim(), q.connection = c.value.find((V) => V.uid === f.value), m.saveDatasource(q), o.value = !1, k("created", q.uid);
    }
    return (H, q) => (g(), Ae(v(yr), {
      modelValue: o.value,
      "onUpdate:modelValue": q[3] || (q[3] = (V) => o.value = V),
      title: "Datenquelle anlegen",
      size: "lg",
      onCancel: q[4] || (q[4] = (V) => o.value = !1)
    }, {
      actions: te(() => [
        L(v(me), {
          intent: "quiet",
          onClick: q[2] || (q[2] = (V) => o.value = !1)
        }, {
          default: te(() => [...q[10] || (q[10] = [
            ie("Abbrechen", -1)
          ])]),
          _: 1
        }),
        L(v(me), {
          intent: "primary",
          disabled: !E.value,
          onClick: W
        }, {
          default: te(() => [...q[11] || (q[11] = [
            ie("Anlegen", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: te(() => [
        u("div", B0, [
          u("section", W0, [
            q[5] || (q[5] = u("h3", { class: "new__label" }, "Typ", -1)),
            q[6] || (q[6] = u("p", { class: "new__lead" }, "Was für Daten sollen gelesen werden? Die Beschreibung stammt aus dem Modell des Typs.", -1)),
            u("ul", M0, [
              (g(!0), C(ke, null, Fe(Y.value, (V) => (g(), C("li", { key: V }, [
                u("button", {
                  type: "button",
                  class: Re(["type", { "type--on": I.value === V }]),
                  onClick: (J) => I.value = V
                }, [
                  u("span", U0, [
                    ie(N(V) + " ", 1),
                    I.value === V ? (g(), Ae(v(Ge), {
                      key: 0,
                      name: "check",
                      size: "sm"
                    })) : ee("", !0)
                  ]),
                  F.value[V] ? (g(), C("span", N0, N(F.value[V]), 1)) : ee("", !0)
                ], 10, P0)
              ]))), 128))
            ])
          ]),
          I.value ? (g(), C("section", F0, [
            q[7] || (q[7] = u("h3", { class: "new__label" }, "Name", -1)),
            L(v(Xe), {
              modelValue: y.value,
              "onUpdate:modelValue": q[0] || (q[0] = (V) => y.value = V),
              placeholder: "Wofür diese Datenquelle steht",
              hint: "Unter diesem Namen wählst du die Datenquelle im Widget aus.",
              stacked: "",
              required: ""
            }, null, 8, ["modelValue"])
          ])) : ee("", !0),
          I.value && R.value ? (g(), C("section", z0, [
            q[8] || (q[8] = u("h3", { class: "new__label" }, "Verbindung", -1)),
            M.value.length ? (g(), Ae(v(On), {
              key: 1,
              modelValue: f.value,
              "onUpdate:modelValue": q[1] || (q[1] = (V) => f.value = V),
              options: M.value,
              "value-key": "value",
              "label-key": "label",
              placeholder: "Verbindung wählen",
              hint: "Der Endpunkt, aus dem diese Quelle liest.",
              stacked: "",
              required: ""
            }, null, 8, ["modelValue", "options"])) : (g(), C("p", q0, " Es gibt noch keine Verbindung. Lege zuerst eine an — ohne sie hat die Datenquelle nichts, woraus sie lesen kann. "))
          ])) : ee("", !0),
          I.value ? (g(), C("section", G0, [
            q[9] || (q[9] = u("h3", { class: "new__label" }, "Einstellungen", -1)),
            z.value?.documentation ? (g(), C("p", H0, N(z.value.documentation), 1)) : ee("", !0),
            L(ku, {
              doc: z.value,
              config: w.value,
              omit: ["connection"]
            }, null, 8, ["doc", "config"])
          ])) : ee("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Y0 = /* @__PURE__ */ Ke(K0, [["__scopeId", "data-v-245936fb"]]), Z0 = { class: "tree" }, J0 = { class: "tree__head" }, X0 = { class: "tree__search" }, Q0 = { class: "tree__body" }, j0 = {
  key: 0,
  class: "tree__empty"
}, eb = {
  key: 1,
  class: "tree__list"
}, nb = ["title", "onClick"], tb = ["disabled", "onClick"], rb = { class: "row__name" }, ib = {
  key: 0,
  class: "row__what"
}, ob = { class: "row__what" }, ab = {
  key: 0,
  class: "tree__sources"
}, lb = { class: "row__twist row__twist--none" }, sb = ["onClick"], ub = { class: "row__name" }, db = { class: "row__what" }, cb = {
  key: 0,
  class: "row__usage"
}, fb = {
  key: 0,
  class: "tree__none"
}, pb = { class: "confirm__title" }, gb = { class: "confirm__text" }, vb = {
  key: 0,
  class: "confirm__text confirm__text--warn"
}, hb = /* @__PURE__ */ He({
  __name: "DataTree",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Zt(["findEndpoints"], ["update:modelValue"]),
  setup(p, { emit: _ }) {
    const o = wr(p, "modelValue"), k = xe(Si), m = xe(Yn), S = xn(m, (se) => se.connections), c = xe(Ci), I = xn(m, (se) => se.datasources), { usageByDatasource: y, usageLabel: f } = wu(), w = _, Y = j(""), F = j(/* @__PURE__ */ new Set()), z = X(() => {
      const se = y(), oe = Y.value.trim().toLowerCase(), de = (...le) => !oe || le.some((Oe) => (Oe ?? "").toLowerCase().includes(oe)), ge = (le) => I.value.filter((Oe) => Oe.connection?.uid === le).filter((Oe) => de(Oe.name, Oe.type, Oe.uid)).map((Oe) => ({
        uid: Oe.uid,
        name: Oe.name,
        type: Oe.type,
        usage: f(se[Oe.uid] ?? { boards: 0, widgets: 0 })
      })), ae = S.value.map((le) => ({
        /* A connection just created has no type yet, and the row says so by
           showing none - the model has every feature optional for that reason. */
        uid: le.uid ?? "",
        name: le.name ?? "",
        type: le.type ?? "",
        orphan: !1,
        sources: ge(le.uid),
        /* A connection stays visible while its own name matches, even with no
           source under it - otherwise searching would hide where to add one. */
        itself: de(le.name, le.type, le.uid)
      })), G = new Set(S.value.map((le) => le.uid)), K = I.value.filter((le) => !le.connection || !G.has(le.connection.uid)).filter((le) => de(le.name, le.type, le.uid)).map((le) => ({
        uid: le.uid,
        name: le.name,
        type: le.type,
        usage: f(se[le.uid] ?? { boards: 0, widgets: 0 })
      })), ue = ae.filter((le) => le.itself || le.sources.length);
      return K.length && ue.push({
        uid: "",
        name: "Ohne Verbindung",
        type: "",
        orphan: !0,
        sources: K,
        itself: !0
      }), ue;
    }), R = (se) => !F.value.has(se);
    function M(se) {
      const oe = new Set(F.value);
      oe.has(se) ? oe.delete(se) : oe.add(se), F.value = oe;
    }
    const O = (se, oe) => o.value?.type === se && o.value?.itemId === oe;
    function E(se, oe) {
      o.value = { type: se, itemId: oe };
    }
    const W = j(!1), H = j(!1);
    function q(se) {
      E("Connection", se);
    }
    function V(se) {
      E("DataSource", se);
    }
    const J = j(void 0);
    function _e(se, oe) {
      J.value = { type: se, itemId: oe };
    }
    function Me() {
      const se = J.value;
      se && (se.type === "Connection" ? k.removeConnection(se.itemId) : c.removeDatasource(se.itemId), O(se.type, se.itemId) && (o.value = void 0), J.value = void 0);
    }
    const tn = X(() => {
      const se = J.value;
      return se ? (se.type === "Connection" ? S.value.find((de) => de.uid === se.itemId) : I.value.find((de) => de.uid === se.itemId))?.name ?? se.itemId : "";
    }), rn = X(() => {
      const se = J.value;
      return !se || se.type !== "DataSource" ? "" : f(y()[se.itemId] ?? { boards: 0, widgets: 0 });
    });
    return (se, oe) => (g(), C(ke, null, [
      u("section", Z0, [
        u("header", J0, [
          oe[9] || (oe[9] = u("h2", { class: "tree__title" }, "Verbindungen & Daten", -1)),
          L(v(me), {
            intent: "quiet",
            size: "sm",
            title: "Verbindung anlegen",
            onClick: oe[0] || (oe[0] = (de) => W.value = !0)
          }, {
            default: te(() => [
              L(v(Ge), {
                name: "add_link",
                size: "sm"
              })
            ]),
            _: 1
          }),
          L(v(me), {
            intent: "quiet",
            size: "sm",
            title: "Datenquelle anlegen",
            onClick: oe[1] || (oe[1] = (de) => H.value = !0)
          }, {
            default: te(() => [
              L(v(Ge), {
                name: "add",
                size: "sm"
              })
            ]),
            _: 1
          }),
          L(v(me), {
            intent: "quiet",
            size: "sm",
            title: "Endpunkte suchen",
            onClick: oe[2] || (oe[2] = (de) => w("findEndpoints"))
          }, {
            default: te(() => [
              L(v(Ge), {
                name: "travel_explore",
                size: "sm"
              })
            ]),
            _: 1
          })
        ]),
        u("div", X0, [
          L(v(Xe), {
            modelValue: Y.value,
            "onUpdate:modelValue": oe[3] || (oe[3] = (de) => Y.value = de),
            type: "search",
            placeholder: "Suchen…",
            stacked: ""
          }, null, 8, ["modelValue"])
        ]),
        u("div", Q0, [
          z.value.length ? (g(), C("ul", eb, [
            (g(!0), C(ke, null, Fe(z.value, (de) => (g(), C("li", {
              key: de.uid || "loose"
            }, [
              u("div", {
                class: Re(["row", "row--connection", { "row--on": O("Connection", de.uid) }])
              }, [
                u("button", {
                  type: "button",
                  class: "row__twist",
                  title: R(de.uid) ? "Zuklappen" : "Aufklappen",
                  onClick: (ge) => M(de.uid)
                }, [
                  L(v(Ge), {
                    name: R(de.uid) ? "expand_more" : "chevron_right",
                    size: "sm"
                  }, null, 8, ["name"])
                ], 8, nb),
                u("button", {
                  type: "button",
                  class: "row__body",
                  disabled: de.orphan,
                  onClick: (ge) => !de.orphan && E("Connection", de.uid)
                }, [
                  u("span", rb, N(de.name), 1),
                  de.type ? (g(), C("span", ib, N(de.type), 1)) : ee("", !0),
                  u("span", ob, N(de.sources.length), 1)
                ], 8, tb),
                de.orphan ? ee("", !0) : (g(), Ae(v(me), {
                  key: 0,
                  intent: "quiet",
                  size: "sm",
                  title: "Verbindung löschen",
                  onClick: Nn((ge) => _e("Connection", de.uid), ["stop"])
                }, {
                  default: te(() => [
                    L(v(Ge), {
                      name: "delete",
                      size: "sm"
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"]))
              ], 2),
              R(de.uid) ? (g(), C("ul", ab, [
                (g(!0), C(ke, null, Fe(de.sources, (ge) => (g(), C("li", {
                  key: ge.uid
                }, [
                  u("div", {
                    class: Re(["row", "row--source", { "row--on": O("DataSource", ge.uid) }])
                  }, [
                    u("span", lb, [
                      L(v(Ge), {
                        name: "database",
                        size: "sm"
                      })
                    ]),
                    u("button", {
                      type: "button",
                      class: "row__body",
                      onClick: (ae) => E("DataSource", ge.uid)
                    }, [
                      u("span", ub, N(ge.name), 1),
                      u("span", db, N(ge.type), 1),
                      ge.usage ? (g(), C("span", cb, N(ge.usage), 1)) : ee("", !0)
                    ], 8, sb),
                    L(v(me), {
                      intent: "quiet",
                      size: "sm",
                      title: "Datenquelle löschen",
                      onClick: Nn((ae) => _e("DataSource", ge.uid), ["stop"])
                    }, {
                      default: te(() => [
                        L(v(Ge), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ], 2)
                ]))), 128)),
                !de.sources.length && !de.orphan ? (g(), C("li", fb, " Keine Datenquelle an dieser Verbindung. ")) : ee("", !0)
              ])) : ee("", !0)
            ]))), 128))
          ])) : (g(), C("p", j0, [
            Y.value ? (g(), C(ke, { key: 0 }, [
              ie("Nichts gefunden.")
            ], 64)) : (g(), C(ke, { key: 1 }, [
              ie("Noch keine Verbindung. Lege eine an, um Daten zu lesen.")
            ], 64))
          ]))
        ])
      ]),
      L(D0, {
        modelValue: W.value,
        "onUpdate:modelValue": oe[4] || (oe[4] = (de) => W.value = de),
        onCreated: q
      }, null, 8, ["modelValue"]),
      L(Y0, {
        modelValue: H.value,
        "onUpdate:modelValue": oe[5] || (oe[5] = (de) => H.value = de),
        onCreated: V
      }, null, 8, ["modelValue"]),
      L(v(yr), {
        "model-value": !!J.value,
        size: "sm",
        "onUpdate:modelValue": oe[7] || (oe[7] = (de) => J.value = void 0),
        onCancel: oe[8] || (oe[8] = (de) => J.value = void 0)
      }, {
        header: te(() => [
          L(v(Ge), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          u("h2", pb, N(J.value?.type === "Connection" ? "Verbindung löschen" : "Datenquelle löschen"), 1)
        ]),
        actions: te(() => [
          L(v(me), {
            intent: "quiet",
            onClick: oe[6] || (oe[6] = (de) => J.value = void 0)
          }, {
            default: te(() => [...oe[10] || (oe[10] = [
              ie("Abbrechen", -1)
            ])]),
            _: 1
          }),
          L(v(me), {
            intent: "danger",
            onClick: Me
          }, {
            default: te(() => [...oe[11] || (oe[11] = [
              ie("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: te(() => [
          u("p", gb, " „" + N(tn.value) + "“ wird entfernt. Das lässt sich nicht rückgängig machen. ", 1),
          rn.value ? (g(), C("p", vb, " Verwendet in " + N(rn.value) + " — die lesen danach ins Leere. ", 1)) : ee("", !0)
        ]),
        _: 1
      }, 8, ["model-value"])
    ], 64));
  }
}), mb = /* @__PURE__ */ Ke(hb, [["__scopeId", "data-v-00806a83"]]);
var hi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, mr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var _b = mr.exports, qs;
function bb() {
  return qs || (qs = 1, (function(p, _) {
    (function() {
      var o, k = "4.17.21", m = 200, S = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", I = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", f = 500, w = "__lodash_placeholder__", Y = 1, F = 2, z = 4, R = 1, M = 2, O = 1, E = 2, W = 4, H = 8, q = 16, V = 32, J = 64, _e = 128, Me = 256, tn = 512, rn = 30, se = "...", oe = 800, de = 16, ge = 1, ae = 2, G = 3, K = 1 / 0, ue = 9007199254740991, le = 17976931348623157e292, Oe = NaN, cn = 4294967295, ht = cn - 1, It = cn >>> 1, mt = [
        ["ary", _e],
        ["bind", O],
        ["bindKey", E],
        ["curry", H],
        ["curryRight", q],
        ["flip", tn],
        ["partial", V],
        ["partialRight", J],
        ["rearg", Me]
      ], Vn = "[object Arguments]", Fn = "[object Array]", Jt = "[object AsyncFunction]", Zn = "[object Boolean]", U = "[object Date]", x = "[object DOMException]", $ = "[object Error]", Q = "[object Function]", Ve = "[object GeneratorFunction]", Ie = "[object Map]", Sn = "[object Number]", hn = "[object Null]", Dn = "[object Object]", oa = "[object Promise]", xu = "[object Proxy]", Xt = "[object RegExp]", Bn = "[object Set]", Qt = "[object String]", Sr = "[object Symbol]", Su = "[object Undefined]", jt = "[object WeakMap]", Cu = "[object WeakSet]", er = "[object ArrayBuffer]", Rt = "[object DataView]", $i = "[object Float32Array]", Ai = "[object Float64Array]", Ii = "[object Int8Array]", Ri = "[object Int16Array]", Ei = "[object Int32Array]", Ti = "[object Uint8Array]", Li = "[object Uint8ClampedArray]", Oi = "[object Uint16Array]", Vi = "[object Uint32Array]", $u = /\b__p \+= '';/g, Au = /\b(__p \+=) '' \+/g, Iu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, aa = /&(?:amp|lt|gt|quot|#39);/g, la = /[&<>"']/g, Ru = RegExp(aa.source), Eu = RegExp(la.source), Tu = /<%-([\s\S]+?)%>/g, Lu = /<%([\s\S]+?)%>/g, sa = /<%=([\s\S]+?)%>/g, Ou = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vu = /^\w*$/, Du = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Di = /[\\^$.*+?()[\]{}|]/g, Bu = RegExp(Di.source), Bi = /^\s+/, Wu = /\s/, Mu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Pu = /\{\n\/\* \[wrapped with (.+)\] \*/, Uu = /,? & /, Nu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Fu = /[()=,{}\[\]\/\s]/, zu = /\\(\\)?/g, qu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ua = /\w*$/, Gu = /^[-+]0x[0-9a-f]+$/i, Hu = /^0b[01]+$/i, Ku = /^\[object .+?Constructor\]$/, Yu = /^0o[0-7]+$/i, Zu = /^(?:0|[1-9]\d*)$/, Ju = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Cr = /($^)/, Xu = /['\n\r\u2028\u2029\\]/g, $r = "\\ud800-\\udfff", Qu = "\\u0300-\\u036f", ju = "\\ufe20-\\ufe2f", ed = "\\u20d0-\\u20ff", da = Qu + ju + ed, ca = "\\u2700-\\u27bf", fa = "a-z\\xdf-\\xf6\\xf8-\\xff", nd = "\\xac\\xb1\\xd7\\xf7", td = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rd = "\\u2000-\\u206f", id = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", pa = "A-Z\\xc0-\\xd6\\xd8-\\xde", ga = "\\ufe0e\\ufe0f", va = nd + td + rd + id, Wi = "['’]", od = "[" + $r + "]", ha = "[" + va + "]", Ar = "[" + da + "]", ma = "\\d+", ad = "[" + ca + "]", _a = "[" + fa + "]", ba = "[^" + $r + va + ma + ca + fa + pa + "]", Mi = "\\ud83c[\\udffb-\\udfff]", ld = "(?:" + Ar + "|" + Mi + ")", ya = "[^" + $r + "]", Pi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ui = "[\\ud800-\\udbff][\\udc00-\\udfff]", Et = "[" + pa + "]", wa = "\\u200d", ka = "(?:" + _a + "|" + ba + ")", sd = "(?:" + Et + "|" + ba + ")", xa = "(?:" + Wi + "(?:d|ll|m|re|s|t|ve))?", Sa = "(?:" + Wi + "(?:D|LL|M|RE|S|T|VE))?", Ca = ld + "?", $a = "[" + ga + "]?", ud = "(?:" + wa + "(?:" + [ya, Pi, Ui].join("|") + ")" + $a + Ca + ")*", dd = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", cd = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Aa = $a + Ca + ud, fd = "(?:" + [ad, Pi, Ui].join("|") + ")" + Aa, pd = "(?:" + [ya + Ar + "?", Ar, Pi, Ui, od].join("|") + ")", gd = RegExp(Wi, "g"), vd = RegExp(Ar, "g"), Ni = RegExp(Mi + "(?=" + Mi + ")|" + pd + Aa, "g"), hd = RegExp([
        Et + "?" + _a + "+" + xa + "(?=" + [ha, Et, "$"].join("|") + ")",
        sd + "+" + Sa + "(?=" + [ha, Et + ka, "$"].join("|") + ")",
        Et + "?" + ka + "+" + xa,
        Et + "+" + Sa,
        cd,
        dd,
        ma,
        fd
      ].join("|"), "g"), md = RegExp("[" + wa + $r + da + ga + "]"), _d = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, bd = [
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
      ], yd = -1, We = {};
      We[$i] = We[Ai] = We[Ii] = We[Ri] = We[Ei] = We[Ti] = We[Li] = We[Oi] = We[Vi] = !0, We[Vn] = We[Fn] = We[er] = We[Zn] = We[Rt] = We[U] = We[$] = We[Q] = We[Ie] = We[Sn] = We[Dn] = We[Xt] = We[Bn] = We[Qt] = We[jt] = !1;
      var Be = {};
      Be[Vn] = Be[Fn] = Be[er] = Be[Rt] = Be[Zn] = Be[U] = Be[$i] = Be[Ai] = Be[Ii] = Be[Ri] = Be[Ei] = Be[Ie] = Be[Sn] = Be[Dn] = Be[Xt] = Be[Bn] = Be[Qt] = Be[Sr] = Be[Ti] = Be[Li] = Be[Oi] = Be[Vi] = !0, Be[$] = Be[Q] = Be[jt] = !1;
      var wd = {
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
      }, kd = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, xd = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Sd = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Cd = parseFloat, $d = parseInt, Ia = typeof hi == "object" && hi && hi.Object === Object && hi, Ad = typeof self == "object" && self && self.Object === Object && self, Qe = Ia || Ad || Function("return this")(), Fi = _ && !_.nodeType && _, _t = Fi && !0 && p && !p.nodeType && p, Ra = _t && _t.exports === Fi, zi = Ra && Ia.process, Cn = (function() {
        try {
          var h = _t && _t.require && _t.require("util").types;
          return h || zi && zi.binding && zi.binding("util");
        } catch {
        }
      })(), Ea = Cn && Cn.isArrayBuffer, Ta = Cn && Cn.isDate, La = Cn && Cn.isMap, Oa = Cn && Cn.isRegExp, Va = Cn && Cn.isSet, Da = Cn && Cn.isTypedArray;
      function mn(h, T, A) {
        switch (A.length) {
          case 0:
            return h.call(T);
          case 1:
            return h.call(T, A[0]);
          case 2:
            return h.call(T, A[0], A[1]);
          case 3:
            return h.call(T, A[0], A[1], A[2]);
        }
        return h.apply(T, A);
      }
      function Id(h, T, A, ne) {
        for (var ve = -1, Ee = h == null ? 0 : h.length; ++ve < Ee; ) {
          var Ye = h[ve];
          T(ne, Ye, A(Ye), h);
        }
        return ne;
      }
      function $n(h, T) {
        for (var A = -1, ne = h == null ? 0 : h.length; ++A < ne && T(h[A], A, h) !== !1; )
          ;
        return h;
      }
      function Rd(h, T) {
        for (var A = h == null ? 0 : h.length; A-- && T(h[A], A, h) !== !1; )
          ;
        return h;
      }
      function Ba(h, T) {
        for (var A = -1, ne = h == null ? 0 : h.length; ++A < ne; )
          if (!T(h[A], A, h))
            return !1;
        return !0;
      }
      function lt(h, T) {
        for (var A = -1, ne = h == null ? 0 : h.length, ve = 0, Ee = []; ++A < ne; ) {
          var Ye = h[A];
          T(Ye, A, h) && (Ee[ve++] = Ye);
        }
        return Ee;
      }
      function Ir(h, T) {
        var A = h == null ? 0 : h.length;
        return !!A && Tt(h, T, 0) > -1;
      }
      function qi(h, T, A) {
        for (var ne = -1, ve = h == null ? 0 : h.length; ++ne < ve; )
          if (A(T, h[ne]))
            return !0;
        return !1;
      }
      function Pe(h, T) {
        for (var A = -1, ne = h == null ? 0 : h.length, ve = Array(ne); ++A < ne; )
          ve[A] = T(h[A], A, h);
        return ve;
      }
      function st(h, T) {
        for (var A = -1, ne = T.length, ve = h.length; ++A < ne; )
          h[ve + A] = T[A];
        return h;
      }
      function Gi(h, T, A, ne) {
        var ve = -1, Ee = h == null ? 0 : h.length;
        for (ne && Ee && (A = h[++ve]); ++ve < Ee; )
          A = T(A, h[ve], ve, h);
        return A;
      }
      function Ed(h, T, A, ne) {
        var ve = h == null ? 0 : h.length;
        for (ne && ve && (A = h[--ve]); ve--; )
          A = T(A, h[ve], ve, h);
        return A;
      }
      function Hi(h, T) {
        for (var A = -1, ne = h == null ? 0 : h.length; ++A < ne; )
          if (T(h[A], A, h))
            return !0;
        return !1;
      }
      var Td = Ki("length");
      function Ld(h) {
        return h.split("");
      }
      function Od(h) {
        return h.match(Nu) || [];
      }
      function Wa(h, T, A) {
        var ne;
        return A(h, function(ve, Ee, Ye) {
          if (T(ve, Ee, Ye))
            return ne = Ee, !1;
        }), ne;
      }
      function Rr(h, T, A, ne) {
        for (var ve = h.length, Ee = A + (ne ? 1 : -1); ne ? Ee-- : ++Ee < ve; )
          if (T(h[Ee], Ee, h))
            return Ee;
        return -1;
      }
      function Tt(h, T, A) {
        return T === T ? Gd(h, T, A) : Rr(h, Ma, A);
      }
      function Vd(h, T, A, ne) {
        for (var ve = A - 1, Ee = h.length; ++ve < Ee; )
          if (ne(h[ve], T))
            return ve;
        return -1;
      }
      function Ma(h) {
        return h !== h;
      }
      function Pa(h, T) {
        var A = h == null ? 0 : h.length;
        return A ? Zi(h, T) / A : Oe;
      }
      function Ki(h) {
        return function(T) {
          return T == null ? o : T[h];
        };
      }
      function Yi(h) {
        return function(T) {
          return h == null ? o : h[T];
        };
      }
      function Ua(h, T, A, ne, ve) {
        return ve(h, function(Ee, Ye, De) {
          A = ne ? (ne = !1, Ee) : T(A, Ee, Ye, De);
        }), A;
      }
      function Dd(h, T) {
        var A = h.length;
        for (h.sort(T); A--; )
          h[A] = h[A].value;
        return h;
      }
      function Zi(h, T) {
        for (var A, ne = -1, ve = h.length; ++ne < ve; ) {
          var Ee = T(h[ne]);
          Ee !== o && (A = A === o ? Ee : A + Ee);
        }
        return A;
      }
      function Ji(h, T) {
        for (var A = -1, ne = Array(h); ++A < h; )
          ne[A] = T(A);
        return ne;
      }
      function Bd(h, T) {
        return Pe(T, function(A) {
          return [A, h[A]];
        });
      }
      function Na(h) {
        return h && h.slice(0, Ga(h) + 1).replace(Bi, "");
      }
      function _n(h) {
        return function(T) {
          return h(T);
        };
      }
      function Xi(h, T) {
        return Pe(T, function(A) {
          return h[A];
        });
      }
      function nr(h, T) {
        return h.has(T);
      }
      function Fa(h, T) {
        for (var A = -1, ne = h.length; ++A < ne && Tt(T, h[A], 0) > -1; )
          ;
        return A;
      }
      function za(h, T) {
        for (var A = h.length; A-- && Tt(T, h[A], 0) > -1; )
          ;
        return A;
      }
      function Wd(h, T) {
        for (var A = h.length, ne = 0; A--; )
          h[A] === T && ++ne;
        return ne;
      }
      var Md = Yi(wd), Pd = Yi(kd);
      function Ud(h) {
        return "\\" + Sd[h];
      }
      function Nd(h, T) {
        return h == null ? o : h[T];
      }
      function Lt(h) {
        return md.test(h);
      }
      function Fd(h) {
        return _d.test(h);
      }
      function zd(h) {
        for (var T, A = []; !(T = h.next()).done; )
          A.push(T.value);
        return A;
      }
      function Qi(h) {
        var T = -1, A = Array(h.size);
        return h.forEach(function(ne, ve) {
          A[++T] = [ve, ne];
        }), A;
      }
      function qa(h, T) {
        return function(A) {
          return h(T(A));
        };
      }
      function ut(h, T) {
        for (var A = -1, ne = h.length, ve = 0, Ee = []; ++A < ne; ) {
          var Ye = h[A];
          (Ye === T || Ye === w) && (h[A] = w, Ee[ve++] = A);
        }
        return Ee;
      }
      function Er(h) {
        var T = -1, A = Array(h.size);
        return h.forEach(function(ne) {
          A[++T] = ne;
        }), A;
      }
      function qd(h) {
        var T = -1, A = Array(h.size);
        return h.forEach(function(ne) {
          A[++T] = [ne, ne];
        }), A;
      }
      function Gd(h, T, A) {
        for (var ne = A - 1, ve = h.length; ++ne < ve; )
          if (h[ne] === T)
            return ne;
        return -1;
      }
      function Hd(h, T, A) {
        for (var ne = A + 1; ne--; )
          if (h[ne] === T)
            return ne;
        return ne;
      }
      function Ot(h) {
        return Lt(h) ? Yd(h) : Td(h);
      }
      function Wn(h) {
        return Lt(h) ? Zd(h) : Ld(h);
      }
      function Ga(h) {
        for (var T = h.length; T-- && Wu.test(h.charAt(T)); )
          ;
        return T;
      }
      var Kd = Yi(xd);
      function Yd(h) {
        for (var T = Ni.lastIndex = 0; Ni.test(h); )
          ++T;
        return T;
      }
      function Zd(h) {
        return h.match(Ni) || [];
      }
      function Jd(h) {
        return h.match(hd) || [];
      }
      var Xd = (function h(T) {
        T = T == null ? Qe : Vt.defaults(Qe.Object(), T, Vt.pick(Qe, bd));
        var A = T.Array, ne = T.Date, ve = T.Error, Ee = T.Function, Ye = T.Math, De = T.Object, ji = T.RegExp, Qd = T.String, An = T.TypeError, Tr = A.prototype, jd = Ee.prototype, Dt = De.prototype, Lr = T["__core-js_shared__"], Or = jd.toString, Le = Dt.hasOwnProperty, ec = 0, Ha = (function() {
          var e = /[^.]+$/.exec(Lr && Lr.keys && Lr.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Vr = Dt.toString, nc = Or.call(De), tc = Qe._, rc = ji(
          "^" + Or.call(Le).replace(Di, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Dr = Ra ? T.Buffer : o, dt = T.Symbol, Br = T.Uint8Array, Ka = Dr ? Dr.allocUnsafe : o, Wr = qa(De.getPrototypeOf, De), Ya = De.create, Za = Dt.propertyIsEnumerable, Mr = Tr.splice, Ja = dt ? dt.isConcatSpreadable : o, tr = dt ? dt.iterator : o, bt = dt ? dt.toStringTag : o, Pr = (function() {
          try {
            var e = St(De, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), ic = T.clearTimeout !== Qe.clearTimeout && T.clearTimeout, oc = ne && ne.now !== Qe.Date.now && ne.now, ac = T.setTimeout !== Qe.setTimeout && T.setTimeout, Ur = Ye.ceil, Nr = Ye.floor, eo = De.getOwnPropertySymbols, lc = Dr ? Dr.isBuffer : o, Xa = T.isFinite, sc = Tr.join, uc = qa(De.keys, De), Ze = Ye.max, on = Ye.min, dc = ne.now, cc = T.parseInt, Qa = Ye.random, fc = Tr.reverse, no = St(T, "DataView"), rr = St(T, "Map"), to = St(T, "Promise"), Bt = St(T, "Set"), ir = St(T, "WeakMap"), or = St(De, "create"), Fr = ir && new ir(), Wt = {}, pc = Ct(no), gc = Ct(rr), vc = Ct(to), hc = Ct(Bt), mc = Ct(ir), zr = dt ? dt.prototype : o, ar = zr ? zr.valueOf : o, ja = zr ? zr.toString : o;
        function a(e) {
          if (Ne(e) && !he(e) && !(e instanceof Ce)) {
            if (e instanceof In)
              return e;
            if (Le.call(e, "__wrapped__"))
              return es(e);
          }
          return new In(e);
        }
        var Mt = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(n) {
            if (!Ue(n))
              return {};
            if (Ya)
              return Ya(n);
            e.prototype = n;
            var t = new e();
            return e.prototype = o, t;
          };
        })();
        function qr() {
        }
        function In(e, n) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
        }
        a.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Tu,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Lu,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: sa,
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
        }, a.prototype = qr.prototype, a.prototype.constructor = a, In.prototype = Mt(qr.prototype), In.prototype.constructor = In;
        function Ce(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = cn, this.__views__ = [];
        }
        function _c() {
          var e = new Ce(this.__wrapped__);
          return e.__actions__ = fn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = fn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = fn(this.__views__), e;
        }
        function bc() {
          if (this.__filtered__) {
            var e = new Ce(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function yc() {
          var e = this.__wrapped__.value(), n = this.__dir__, t = he(e), r = n < 0, i = t ? e.length : 0, l = Of(0, i, this.__views__), s = l.start, d = l.end, b = d - s, D = r ? d : s - 1, B = this.__iteratees__, P = B.length, Z = 0, re = on(b, this.__takeCount__);
          if (!t || !r && i == b && re == b)
            return xl(e, this.__actions__);
          var fe = [];
          e:
            for (; b-- && Z < re; ) {
              D += n;
              for (var ye = -1, pe = e[D]; ++ye < P; ) {
                var Se = B[ye], $e = Se.iteratee, wn = Se.type, un = $e(pe);
                if (wn == ae)
                  pe = un;
                else if (!un) {
                  if (wn == ge)
                    continue e;
                  break e;
                }
              }
              fe[Z++] = pe;
            }
          return fe;
        }
        Ce.prototype = Mt(qr.prototype), Ce.prototype.constructor = Ce;
        function yt(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function wc() {
          this.__data__ = or ? or(null) : {}, this.size = 0;
        }
        function kc(e) {
          var n = this.has(e) && delete this.__data__[e];
          return this.size -= n ? 1 : 0, n;
        }
        function xc(e) {
          var n = this.__data__;
          if (or) {
            var t = n[e];
            return t === y ? o : t;
          }
          return Le.call(n, e) ? n[e] : o;
        }
        function Sc(e) {
          var n = this.__data__;
          return or ? n[e] !== o : Le.call(n, e);
        }
        function Cc(e, n) {
          var t = this.__data__;
          return this.size += this.has(e) ? 0 : 1, t[e] = or && n === o ? y : n, this;
        }
        yt.prototype.clear = wc, yt.prototype.delete = kc, yt.prototype.get = xc, yt.prototype.has = Sc, yt.prototype.set = Cc;
        function Jn(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function $c() {
          this.__data__ = [], this.size = 0;
        }
        function Ac(e) {
          var n = this.__data__, t = Gr(n, e);
          if (t < 0)
            return !1;
          var r = n.length - 1;
          return t == r ? n.pop() : Mr.call(n, t, 1), --this.size, !0;
        }
        function Ic(e) {
          var n = this.__data__, t = Gr(n, e);
          return t < 0 ? o : n[t][1];
        }
        function Rc(e) {
          return Gr(this.__data__, e) > -1;
        }
        function Ec(e, n) {
          var t = this.__data__, r = Gr(t, e);
          return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
        }
        Jn.prototype.clear = $c, Jn.prototype.delete = Ac, Jn.prototype.get = Ic, Jn.prototype.has = Rc, Jn.prototype.set = Ec;
        function Xn(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function Tc() {
          this.size = 0, this.__data__ = {
            hash: new yt(),
            map: new (rr || Jn)(),
            string: new yt()
          };
        }
        function Lc(e) {
          var n = ri(this, e).delete(e);
          return this.size -= n ? 1 : 0, n;
        }
        function Oc(e) {
          return ri(this, e).get(e);
        }
        function Vc(e) {
          return ri(this, e).has(e);
        }
        function Dc(e, n) {
          var t = ri(this, e), r = t.size;
          return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
        }
        Xn.prototype.clear = Tc, Xn.prototype.delete = Lc, Xn.prototype.get = Oc, Xn.prototype.has = Vc, Xn.prototype.set = Dc;
        function wt(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.__data__ = new Xn(); ++n < t; )
            this.add(e[n]);
        }
        function Bc(e) {
          return this.__data__.set(e, y), this;
        }
        function Wc(e) {
          return this.__data__.has(e);
        }
        wt.prototype.add = wt.prototype.push = Bc, wt.prototype.has = Wc;
        function Mn(e) {
          var n = this.__data__ = new Jn(e);
          this.size = n.size;
        }
        function Mc() {
          this.__data__ = new Jn(), this.size = 0;
        }
        function Pc(e) {
          var n = this.__data__, t = n.delete(e);
          return this.size = n.size, t;
        }
        function Uc(e) {
          return this.__data__.get(e);
        }
        function Nc(e) {
          return this.__data__.has(e);
        }
        function Fc(e, n) {
          var t = this.__data__;
          if (t instanceof Jn) {
            var r = t.__data__;
            if (!rr || r.length < m - 1)
              return r.push([e, n]), this.size = ++t.size, this;
            t = this.__data__ = new Xn(r);
          }
          return t.set(e, n), this.size = t.size, this;
        }
        Mn.prototype.clear = Mc, Mn.prototype.delete = Pc, Mn.prototype.get = Uc, Mn.prototype.has = Nc, Mn.prototype.set = Fc;
        function el(e, n) {
          var t = he(e), r = !t && $t(e), i = !t && !r && vt(e), l = !t && !r && !i && Ft(e), s = t || r || i || l, d = s ? Ji(e.length, Qd) : [], b = d.length;
          for (var D in e)
            (n || Le.call(e, D)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
            (D == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            i && (D == "offset" || D == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            l && (D == "buffer" || D == "byteLength" || D == "byteOffset") || // Skip index properties.
            nt(D, b))) && d.push(D);
          return d;
        }
        function nl(e) {
          var n = e.length;
          return n ? e[go(0, n - 1)] : o;
        }
        function zc(e, n) {
          return ii(fn(e), kt(n, 0, e.length));
        }
        function qc(e) {
          return ii(fn(e));
        }
        function ro(e, n, t) {
          (t !== o && !Pn(e[n], t) || t === o && !(n in e)) && Qn(e, n, t);
        }
        function lr(e, n, t) {
          var r = e[n];
          (!(Le.call(e, n) && Pn(r, t)) || t === o && !(n in e)) && Qn(e, n, t);
        }
        function Gr(e, n) {
          for (var t = e.length; t--; )
            if (Pn(e[t][0], n))
              return t;
          return -1;
        }
        function Gc(e, n, t, r) {
          return ct(e, function(i, l, s) {
            n(r, i, t(i), s);
          }), r;
        }
        function tl(e, n) {
          return e && qn(n, Je(n), e);
        }
        function Hc(e, n) {
          return e && qn(n, gn(n), e);
        }
        function Qn(e, n, t) {
          n == "__proto__" && Pr ? Pr(e, n, {
            configurable: !0,
            enumerable: !0,
            value: t,
            writable: !0
          }) : e[n] = t;
        }
        function io(e, n) {
          for (var t = -1, r = n.length, i = A(r), l = e == null; ++t < r; )
            i[t] = l ? o : Po(e, n[t]);
          return i;
        }
        function kt(e, n, t) {
          return e === e && (t !== o && (e = e <= t ? e : t), n !== o && (e = e >= n ? e : n)), e;
        }
        function Rn(e, n, t, r, i, l) {
          var s, d = n & Y, b = n & F, D = n & z;
          if (t && (s = i ? t(e, r, i, l) : t(e)), s !== o)
            return s;
          if (!Ue(e))
            return e;
          var B = he(e);
          if (B) {
            if (s = Df(e), !d)
              return fn(e, s);
          } else {
            var P = an(e), Z = P == Q || P == Ve;
            if (vt(e))
              return $l(e, d);
            if (P == Dn || P == Vn || Z && !i) {
              if (s = b || Z ? {} : Gl(e), !d)
                return b ? Sf(e, Hc(s, e)) : xf(e, tl(s, e));
            } else {
              if (!Be[P])
                return i ? e : {};
              s = Bf(e, P, d);
            }
          }
          l || (l = new Mn());
          var re = l.get(e);
          if (re)
            return re;
          l.set(e, s), ys(e) ? e.forEach(function(pe) {
            s.add(Rn(pe, n, t, pe, e, l));
          }) : _s(e) && e.forEach(function(pe, Se) {
            s.set(Se, Rn(pe, n, t, Se, e, l));
          });
          var fe = D ? b ? Co : So : b ? gn : Je, ye = B ? o : fe(e);
          return $n(ye || e, function(pe, Se) {
            ye && (Se = pe, pe = e[Se]), lr(s, Se, Rn(pe, n, t, Se, e, l));
          }), s;
        }
        function Kc(e) {
          var n = Je(e);
          return function(t) {
            return rl(t, e, n);
          };
        }
        function rl(e, n, t) {
          var r = t.length;
          if (e == null)
            return !r;
          for (e = De(e); r--; ) {
            var i = t[r], l = n[i], s = e[i];
            if (s === o && !(i in e) || !l(s))
              return !1;
          }
          return !0;
        }
        function il(e, n, t) {
          if (typeof e != "function")
            throw new An(c);
          return gr(function() {
            e.apply(o, t);
          }, n);
        }
        function sr(e, n, t, r) {
          var i = -1, l = Ir, s = !0, d = e.length, b = [], D = n.length;
          if (!d)
            return b;
          t && (n = Pe(n, _n(t))), r ? (l = qi, s = !1) : n.length >= m && (l = nr, s = !1, n = new wt(n));
          e:
            for (; ++i < d; ) {
              var B = e[i], P = t == null ? B : t(B);
              if (B = r || B !== 0 ? B : 0, s && P === P) {
                for (var Z = D; Z--; )
                  if (n[Z] === P)
                    continue e;
                b.push(B);
              } else l(n, P, r) || b.push(B);
            }
          return b;
        }
        var ct = Tl(zn), ol = Tl(ao, !0);
        function Yc(e, n) {
          var t = !0;
          return ct(e, function(r, i, l) {
            return t = !!n(r, i, l), t;
          }), t;
        }
        function Hr(e, n, t) {
          for (var r = -1, i = e.length; ++r < i; ) {
            var l = e[r], s = n(l);
            if (s != null && (d === o ? s === s && !yn(s) : t(s, d)))
              var d = s, b = l;
          }
          return b;
        }
        function Zc(e, n, t, r) {
          var i = e.length;
          for (t = be(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === o || r > i ? i : be(r), r < 0 && (r += i), r = t > r ? 0 : ks(r); t < r; )
            e[t++] = n;
          return e;
        }
        function al(e, n) {
          var t = [];
          return ct(e, function(r, i, l) {
            n(r, i, l) && t.push(r);
          }), t;
        }
        function je(e, n, t, r, i) {
          var l = -1, s = e.length;
          for (t || (t = Mf), i || (i = []); ++l < s; ) {
            var d = e[l];
            n > 0 && t(d) ? n > 1 ? je(d, n - 1, t, r, i) : st(i, d) : r || (i[i.length] = d);
          }
          return i;
        }
        var oo = Ll(), ll = Ll(!0);
        function zn(e, n) {
          return e && oo(e, n, Je);
        }
        function ao(e, n) {
          return e && ll(e, n, Je);
        }
        function Kr(e, n) {
          return lt(n, function(t) {
            return tt(e[t]);
          });
        }
        function xt(e, n) {
          n = pt(n, e);
          for (var t = 0, r = n.length; e != null && t < r; )
            e = e[Gn(n[t++])];
          return t && t == r ? e : o;
        }
        function sl(e, n, t) {
          var r = n(e);
          return he(e) ? r : st(r, t(e));
        }
        function ln(e) {
          return e == null ? e === o ? Su : hn : bt && bt in De(e) ? Lf(e) : Gf(e);
        }
        function lo(e, n) {
          return e > n;
        }
        function Jc(e, n) {
          return e != null && Le.call(e, n);
        }
        function Xc(e, n) {
          return e != null && n in De(e);
        }
        function Qc(e, n, t) {
          return e >= on(n, t) && e < Ze(n, t);
        }
        function so(e, n, t) {
          for (var r = t ? qi : Ir, i = e[0].length, l = e.length, s = l, d = A(l), b = 1 / 0, D = []; s--; ) {
            var B = e[s];
            s && n && (B = Pe(B, _n(n))), b = on(B.length, b), d[s] = !t && (n || i >= 120 && B.length >= 120) ? new wt(s && B) : o;
          }
          B = e[0];
          var P = -1, Z = d[0];
          e:
            for (; ++P < i && D.length < b; ) {
              var re = B[P], fe = n ? n(re) : re;
              if (re = t || re !== 0 ? re : 0, !(Z ? nr(Z, fe) : r(D, fe, t))) {
                for (s = l; --s; ) {
                  var ye = d[s];
                  if (!(ye ? nr(ye, fe) : r(e[s], fe, t)))
                    continue e;
                }
                Z && Z.push(fe), D.push(re);
              }
            }
          return D;
        }
        function jc(e, n, t, r) {
          return zn(e, function(i, l, s) {
            n(r, t(i), l, s);
          }), r;
        }
        function ur(e, n, t) {
          n = pt(n, e), e = Zl(e, n);
          var r = e == null ? e : e[Gn(Tn(n))];
          return r == null ? o : mn(r, e, t);
        }
        function ul(e) {
          return Ne(e) && ln(e) == Vn;
        }
        function ef(e) {
          return Ne(e) && ln(e) == er;
        }
        function nf(e) {
          return Ne(e) && ln(e) == U;
        }
        function dr(e, n, t, r, i) {
          return e === n ? !0 : e == null || n == null || !Ne(e) && !Ne(n) ? e !== e && n !== n : tf(e, n, t, r, dr, i);
        }
        function tf(e, n, t, r, i, l) {
          var s = he(e), d = he(n), b = s ? Fn : an(e), D = d ? Fn : an(n);
          b = b == Vn ? Dn : b, D = D == Vn ? Dn : D;
          var B = b == Dn, P = D == Dn, Z = b == D;
          if (Z && vt(e)) {
            if (!vt(n))
              return !1;
            s = !0, B = !1;
          }
          if (Z && !B)
            return l || (l = new Mn()), s || Ft(e) ? Fl(e, n, t, r, i, l) : Ef(e, n, b, t, r, i, l);
          if (!(t & R)) {
            var re = B && Le.call(e, "__wrapped__"), fe = P && Le.call(n, "__wrapped__");
            if (re || fe) {
              var ye = re ? e.value() : e, pe = fe ? n.value() : n;
              return l || (l = new Mn()), i(ye, pe, t, r, l);
            }
          }
          return Z ? (l || (l = new Mn()), Tf(e, n, t, r, i, l)) : !1;
        }
        function rf(e) {
          return Ne(e) && an(e) == Ie;
        }
        function uo(e, n, t, r) {
          var i = t.length, l = i, s = !r;
          if (e == null)
            return !l;
          for (e = De(e); i--; ) {
            var d = t[i];
            if (s && d[2] ? d[1] !== e[d[0]] : !(d[0] in e))
              return !1;
          }
          for (; ++i < l; ) {
            d = t[i];
            var b = d[0], D = e[b], B = d[1];
            if (s && d[2]) {
              if (D === o && !(b in e))
                return !1;
            } else {
              var P = new Mn();
              if (r)
                var Z = r(D, B, b, e, n, P);
              if (!(Z === o ? dr(B, D, R | M, r, P) : Z))
                return !1;
            }
          }
          return !0;
        }
        function dl(e) {
          if (!Ue(e) || Uf(e))
            return !1;
          var n = tt(e) ? rc : Ku;
          return n.test(Ct(e));
        }
        function of(e) {
          return Ne(e) && ln(e) == Xt;
        }
        function af(e) {
          return Ne(e) && an(e) == Bn;
        }
        function lf(e) {
          return Ne(e) && di(e.length) && !!We[ln(e)];
        }
        function cl(e) {
          return typeof e == "function" ? e : e == null ? vn : typeof e == "object" ? he(e) ? gl(e[0], e[1]) : pl(e) : Os(e);
        }
        function co(e) {
          if (!pr(e))
            return uc(e);
          var n = [];
          for (var t in De(e))
            Le.call(e, t) && t != "constructor" && n.push(t);
          return n;
        }
        function sf(e) {
          if (!Ue(e))
            return qf(e);
          var n = pr(e), t = [];
          for (var r in e)
            r == "constructor" && (n || !Le.call(e, r)) || t.push(r);
          return t;
        }
        function fo(e, n) {
          return e < n;
        }
        function fl(e, n) {
          var t = -1, r = pn(e) ? A(e.length) : [];
          return ct(e, function(i, l, s) {
            r[++t] = n(i, l, s);
          }), r;
        }
        function pl(e) {
          var n = Ao(e);
          return n.length == 1 && n[0][2] ? Kl(n[0][0], n[0][1]) : function(t) {
            return t === e || uo(t, e, n);
          };
        }
        function gl(e, n) {
          return Ro(e) && Hl(n) ? Kl(Gn(e), n) : function(t) {
            var r = Po(t, e);
            return r === o && r === n ? Uo(t, e) : dr(n, r, R | M);
          };
        }
        function Yr(e, n, t, r, i) {
          e !== n && oo(n, function(l, s) {
            if (i || (i = new Mn()), Ue(l))
              uf(e, n, s, t, Yr, r, i);
            else {
              var d = r ? r(To(e, s), l, s + "", e, n, i) : o;
              d === o && (d = l), ro(e, s, d);
            }
          }, gn);
        }
        function uf(e, n, t, r, i, l, s) {
          var d = To(e, t), b = To(n, t), D = s.get(b);
          if (D) {
            ro(e, t, D);
            return;
          }
          var B = l ? l(d, b, t + "", e, n, s) : o, P = B === o;
          if (P) {
            var Z = he(b), re = !Z && vt(b), fe = !Z && !re && Ft(b);
            B = b, Z || re || fe ? he(d) ? B = d : ze(d) ? B = fn(d) : re ? (P = !1, B = $l(b, !0)) : fe ? (P = !1, B = Al(b, !0)) : B = [] : vr(b) || $t(b) ? (B = d, $t(d) ? B = xs(d) : (!Ue(d) || tt(d)) && (B = Gl(b))) : P = !1;
          }
          P && (s.set(b, B), i(B, b, r, l, s), s.delete(b)), ro(e, t, B);
        }
        function vl(e, n) {
          var t = e.length;
          if (t)
            return n += n < 0 ? t : 0, nt(n, t) ? e[n] : o;
        }
        function hl(e, n, t) {
          n.length ? n = Pe(n, function(l) {
            return he(l) ? function(s) {
              return xt(s, l.length === 1 ? l[0] : l);
            } : l;
          }) : n = [vn];
          var r = -1;
          n = Pe(n, _n(ce()));
          var i = fl(e, function(l, s, d) {
            var b = Pe(n, function(D) {
              return D(l);
            });
            return { criteria: b, index: ++r, value: l };
          });
          return Dd(i, function(l, s) {
            return kf(l, s, t);
          });
        }
        function df(e, n) {
          return ml(e, n, function(t, r) {
            return Uo(e, r);
          });
        }
        function ml(e, n, t) {
          for (var r = -1, i = n.length, l = {}; ++r < i; ) {
            var s = n[r], d = xt(e, s);
            t(d, s) && cr(l, pt(s, e), d);
          }
          return l;
        }
        function cf(e) {
          return function(n) {
            return xt(n, e);
          };
        }
        function po(e, n, t, r) {
          var i = r ? Vd : Tt, l = -1, s = n.length, d = e;
          for (e === n && (n = fn(n)), t && (d = Pe(e, _n(t))); ++l < s; )
            for (var b = 0, D = n[l], B = t ? t(D) : D; (b = i(d, B, b, r)) > -1; )
              d !== e && Mr.call(d, b, 1), Mr.call(e, b, 1);
          return e;
        }
        function _l(e, n) {
          for (var t = e ? n.length : 0, r = t - 1; t--; ) {
            var i = n[t];
            if (t == r || i !== l) {
              var l = i;
              nt(i) ? Mr.call(e, i, 1) : mo(e, i);
            }
          }
          return e;
        }
        function go(e, n) {
          return e + Nr(Qa() * (n - e + 1));
        }
        function ff(e, n, t, r) {
          for (var i = -1, l = Ze(Ur((n - e) / (t || 1)), 0), s = A(l); l--; )
            s[r ? l : ++i] = e, e += t;
          return s;
        }
        function vo(e, n) {
          var t = "";
          if (!e || n < 1 || n > ue)
            return t;
          do
            n % 2 && (t += e), n = Nr(n / 2), n && (e += e);
          while (n);
          return t;
        }
        function we(e, n) {
          return Lo(Yl(e, n, vn), e + "");
        }
        function pf(e) {
          return nl(zt(e));
        }
        function gf(e, n) {
          var t = zt(e);
          return ii(t, kt(n, 0, t.length));
        }
        function cr(e, n, t, r) {
          if (!Ue(e))
            return e;
          n = pt(n, e);
          for (var i = -1, l = n.length, s = l - 1, d = e; d != null && ++i < l; ) {
            var b = Gn(n[i]), D = t;
            if (b === "__proto__" || b === "constructor" || b === "prototype")
              return e;
            if (i != s) {
              var B = d[b];
              D = r ? r(B, b, d) : o, D === o && (D = Ue(B) ? B : nt(n[i + 1]) ? [] : {});
            }
            lr(d, b, D), d = d[b];
          }
          return e;
        }
        var bl = Fr ? function(e, n) {
          return Fr.set(e, n), e;
        } : vn, vf = Pr ? function(e, n) {
          return Pr(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Fo(n),
            writable: !0
          });
        } : vn;
        function hf(e) {
          return ii(zt(e));
        }
        function En(e, n, t) {
          var r = -1, i = e.length;
          n < 0 && (n = -n > i ? 0 : i + n), t = t > i ? i : t, t < 0 && (t += i), i = n > t ? 0 : t - n >>> 0, n >>>= 0;
          for (var l = A(i); ++r < i; )
            l[r] = e[r + n];
          return l;
        }
        function mf(e, n) {
          var t;
          return ct(e, function(r, i, l) {
            return t = n(r, i, l), !t;
          }), !!t;
        }
        function Zr(e, n, t) {
          var r = 0, i = e == null ? r : e.length;
          if (typeof n == "number" && n === n && i <= It) {
            for (; r < i; ) {
              var l = r + i >>> 1, s = e[l];
              s !== null && !yn(s) && (t ? s <= n : s < n) ? r = l + 1 : i = l;
            }
            return i;
          }
          return ho(e, n, vn, t);
        }
        function ho(e, n, t, r) {
          var i = 0, l = e == null ? 0 : e.length;
          if (l === 0)
            return 0;
          n = t(n);
          for (var s = n !== n, d = n === null, b = yn(n), D = n === o; i < l; ) {
            var B = Nr((i + l) / 2), P = t(e[B]), Z = P !== o, re = P === null, fe = P === P, ye = yn(P);
            if (s)
              var pe = r || fe;
            else D ? pe = fe && (r || Z) : d ? pe = fe && Z && (r || !re) : b ? pe = fe && Z && !re && (r || !ye) : re || ye ? pe = !1 : pe = r ? P <= n : P < n;
            pe ? i = B + 1 : l = B;
          }
          return on(l, ht);
        }
        function yl(e, n) {
          for (var t = -1, r = e.length, i = 0, l = []; ++t < r; ) {
            var s = e[t], d = n ? n(s) : s;
            if (!t || !Pn(d, b)) {
              var b = d;
              l[i++] = s === 0 ? 0 : s;
            }
          }
          return l;
        }
        function wl(e) {
          return typeof e == "number" ? e : yn(e) ? Oe : +e;
        }
        function bn(e) {
          if (typeof e == "string")
            return e;
          if (he(e))
            return Pe(e, bn) + "";
          if (yn(e))
            return ja ? ja.call(e) : "";
          var n = e + "";
          return n == "0" && 1 / e == -K ? "-0" : n;
        }
        function ft(e, n, t) {
          var r = -1, i = Ir, l = e.length, s = !0, d = [], b = d;
          if (t)
            s = !1, i = qi;
          else if (l >= m) {
            var D = n ? null : If(e);
            if (D)
              return Er(D);
            s = !1, i = nr, b = new wt();
          } else
            b = n ? [] : d;
          e:
            for (; ++r < l; ) {
              var B = e[r], P = n ? n(B) : B;
              if (B = t || B !== 0 ? B : 0, s && P === P) {
                for (var Z = b.length; Z--; )
                  if (b[Z] === P)
                    continue e;
                n && b.push(P), d.push(B);
              } else i(b, P, t) || (b !== d && b.push(P), d.push(B));
            }
          return d;
        }
        function mo(e, n) {
          return n = pt(n, e), e = Zl(e, n), e == null || delete e[Gn(Tn(n))];
        }
        function kl(e, n, t, r) {
          return cr(e, n, t(xt(e, n)), r);
        }
        function Jr(e, n, t, r) {
          for (var i = e.length, l = r ? i : -1; (r ? l-- : ++l < i) && n(e[l], l, e); )
            ;
          return t ? En(e, r ? 0 : l, r ? l + 1 : i) : En(e, r ? l + 1 : 0, r ? i : l);
        }
        function xl(e, n) {
          var t = e;
          return t instanceof Ce && (t = t.value()), Gi(n, function(r, i) {
            return i.func.apply(i.thisArg, st([r], i.args));
          }, t);
        }
        function _o(e, n, t) {
          var r = e.length;
          if (r < 2)
            return r ? ft(e[0]) : [];
          for (var i = -1, l = A(r); ++i < r; )
            for (var s = e[i], d = -1; ++d < r; )
              d != i && (l[i] = sr(l[i] || s, e[d], n, t));
          return ft(je(l, 1), n, t);
        }
        function Sl(e, n, t) {
          for (var r = -1, i = e.length, l = n.length, s = {}; ++r < i; ) {
            var d = r < l ? n[r] : o;
            t(s, e[r], d);
          }
          return s;
        }
        function bo(e) {
          return ze(e) ? e : [];
        }
        function yo(e) {
          return typeof e == "function" ? e : vn;
        }
        function pt(e, n) {
          return he(e) ? e : Ro(e, n) ? [e] : jl(Te(e));
        }
        var _f = we;
        function gt(e, n, t) {
          var r = e.length;
          return t = t === o ? r : t, !n && t >= r ? e : En(e, n, t);
        }
        var Cl = ic || function(e) {
          return Qe.clearTimeout(e);
        };
        function $l(e, n) {
          if (n)
            return e.slice();
          var t = e.length, r = Ka ? Ka(t) : new e.constructor(t);
          return e.copy(r), r;
        }
        function wo(e) {
          var n = new e.constructor(e.byteLength);
          return new Br(n).set(new Br(e)), n;
        }
        function bf(e, n) {
          var t = n ? wo(e.buffer) : e.buffer;
          return new e.constructor(t, e.byteOffset, e.byteLength);
        }
        function yf(e) {
          var n = new e.constructor(e.source, ua.exec(e));
          return n.lastIndex = e.lastIndex, n;
        }
        function wf(e) {
          return ar ? De(ar.call(e)) : {};
        }
        function Al(e, n) {
          var t = n ? wo(e.buffer) : e.buffer;
          return new e.constructor(t, e.byteOffset, e.length);
        }
        function Il(e, n) {
          if (e !== n) {
            var t = e !== o, r = e === null, i = e === e, l = yn(e), s = n !== o, d = n === null, b = n === n, D = yn(n);
            if (!d && !D && !l && e > n || l && s && b && !d && !D || r && s && b || !t && b || !i)
              return 1;
            if (!r && !l && !D && e < n || D && t && i && !r && !l || d && t && i || !s && i || !b)
              return -1;
          }
          return 0;
        }
        function kf(e, n, t) {
          for (var r = -1, i = e.criteria, l = n.criteria, s = i.length, d = t.length; ++r < s; ) {
            var b = Il(i[r], l[r]);
            if (b) {
              if (r >= d)
                return b;
              var D = t[r];
              return b * (D == "desc" ? -1 : 1);
            }
          }
          return e.index - n.index;
        }
        function Rl(e, n, t, r) {
          for (var i = -1, l = e.length, s = t.length, d = -1, b = n.length, D = Ze(l - s, 0), B = A(b + D), P = !r; ++d < b; )
            B[d] = n[d];
          for (; ++i < s; )
            (P || i < l) && (B[t[i]] = e[i]);
          for (; D--; )
            B[d++] = e[i++];
          return B;
        }
        function El(e, n, t, r) {
          for (var i = -1, l = e.length, s = -1, d = t.length, b = -1, D = n.length, B = Ze(l - d, 0), P = A(B + D), Z = !r; ++i < B; )
            P[i] = e[i];
          for (var re = i; ++b < D; )
            P[re + b] = n[b];
          for (; ++s < d; )
            (Z || i < l) && (P[re + t[s]] = e[i++]);
          return P;
        }
        function fn(e, n) {
          var t = -1, r = e.length;
          for (n || (n = A(r)); ++t < r; )
            n[t] = e[t];
          return n;
        }
        function qn(e, n, t, r) {
          var i = !t;
          t || (t = {});
          for (var l = -1, s = n.length; ++l < s; ) {
            var d = n[l], b = r ? r(t[d], e[d], d, t, e) : o;
            b === o && (b = e[d]), i ? Qn(t, d, b) : lr(t, d, b);
          }
          return t;
        }
        function xf(e, n) {
          return qn(e, Io(e), n);
        }
        function Sf(e, n) {
          return qn(e, zl(e), n);
        }
        function Xr(e, n) {
          return function(t, r) {
            var i = he(t) ? Id : Gc, l = n ? n() : {};
            return i(t, e, ce(r, 2), l);
          };
        }
        function Pt(e) {
          return we(function(n, t) {
            var r = -1, i = t.length, l = i > 1 ? t[i - 1] : o, s = i > 2 ? t[2] : o;
            for (l = e.length > 3 && typeof l == "function" ? (i--, l) : o, s && sn(t[0], t[1], s) && (l = i < 3 ? o : l, i = 1), n = De(n); ++r < i; ) {
              var d = t[r];
              d && e(n, d, r, l);
            }
            return n;
          });
        }
        function Tl(e, n) {
          return function(t, r) {
            if (t == null)
              return t;
            if (!pn(t))
              return e(t, r);
            for (var i = t.length, l = n ? i : -1, s = De(t); (n ? l-- : ++l < i) && r(s[l], l, s) !== !1; )
              ;
            return t;
          };
        }
        function Ll(e) {
          return function(n, t, r) {
            for (var i = -1, l = De(n), s = r(n), d = s.length; d--; ) {
              var b = s[e ? d : ++i];
              if (t(l[b], b, l) === !1)
                break;
            }
            return n;
          };
        }
        function Cf(e, n, t) {
          var r = n & O, i = fr(e);
          function l() {
            var s = this && this !== Qe && this instanceof l ? i : e;
            return s.apply(r ? t : this, arguments);
          }
          return l;
        }
        function Ol(e) {
          return function(n) {
            n = Te(n);
            var t = Lt(n) ? Wn(n) : o, r = t ? t[0] : n.charAt(0), i = t ? gt(t, 1).join("") : n.slice(1);
            return r[e]() + i;
          };
        }
        function Ut(e) {
          return function(n) {
            return Gi(Ts(Es(n).replace(gd, "")), e, "");
          };
        }
        function fr(e) {
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
            var t = Mt(e.prototype), r = e.apply(t, n);
            return Ue(r) ? r : t;
          };
        }
        function $f(e, n, t) {
          var r = fr(e);
          function i() {
            for (var l = arguments.length, s = A(l), d = l, b = Nt(i); d--; )
              s[d] = arguments[d];
            var D = l < 3 && s[0] !== b && s[l - 1] !== b ? [] : ut(s, b);
            if (l -= D.length, l < t)
              return Ml(
                e,
                n,
                Qr,
                i.placeholder,
                o,
                s,
                D,
                o,
                o,
                t - l
              );
            var B = this && this !== Qe && this instanceof i ? r : e;
            return mn(B, this, s);
          }
          return i;
        }
        function Vl(e) {
          return function(n, t, r) {
            var i = De(n);
            if (!pn(n)) {
              var l = ce(t, 3);
              n = Je(n), t = function(d) {
                return l(i[d], d, i);
              };
            }
            var s = e(n, t, r);
            return s > -1 ? i[l ? n[s] : s] : o;
          };
        }
        function Dl(e) {
          return et(function(n) {
            var t = n.length, r = t, i = In.prototype.thru;
            for (e && n.reverse(); r--; ) {
              var l = n[r];
              if (typeof l != "function")
                throw new An(c);
              if (i && !s && ti(l) == "wrapper")
                var s = new In([], !0);
            }
            for (r = s ? r : t; ++r < t; ) {
              l = n[r];
              var d = ti(l), b = d == "wrapper" ? $o(l) : o;
              b && Eo(b[0]) && b[1] == (_e | H | V | Me) && !b[4].length && b[9] == 1 ? s = s[ti(b[0])].apply(s, b[3]) : s = l.length == 1 && Eo(l) ? s[d]() : s.thru(l);
            }
            return function() {
              var D = arguments, B = D[0];
              if (s && D.length == 1 && he(B))
                return s.plant(B).value();
              for (var P = 0, Z = t ? n[P].apply(this, D) : B; ++P < t; )
                Z = n[P].call(this, Z);
              return Z;
            };
          });
        }
        function Qr(e, n, t, r, i, l, s, d, b, D) {
          var B = n & _e, P = n & O, Z = n & E, re = n & (H | q), fe = n & tn, ye = Z ? o : fr(e);
          function pe() {
            for (var Se = arguments.length, $e = A(Se), wn = Se; wn--; )
              $e[wn] = arguments[wn];
            if (re)
              var un = Nt(pe), kn = Wd($e, un);
            if (r && ($e = Rl($e, r, i, re)), l && ($e = El($e, l, s, re)), Se -= kn, re && Se < D) {
              var qe = ut($e, un);
              return Ml(
                e,
                n,
                Qr,
                pe.placeholder,
                t,
                $e,
                qe,
                d,
                b,
                D - Se
              );
            }
            var Un = P ? t : this, it = Z ? Un[e] : e;
            return Se = $e.length, d ? $e = Hf($e, d) : fe && Se > 1 && $e.reverse(), B && b < Se && ($e.length = b), this && this !== Qe && this instanceof pe && (it = ye || fr(it)), it.apply(Un, $e);
          }
          return pe;
        }
        function Bl(e, n) {
          return function(t, r) {
            return jc(t, e, n(r), {});
          };
        }
        function jr(e, n) {
          return function(t, r) {
            var i;
            if (t === o && r === o)
              return n;
            if (t !== o && (i = t), r !== o) {
              if (i === o)
                return r;
              typeof t == "string" || typeof r == "string" ? (t = bn(t), r = bn(r)) : (t = wl(t), r = wl(r)), i = e(t, r);
            }
            return i;
          };
        }
        function ko(e) {
          return et(function(n) {
            return n = Pe(n, _n(ce())), we(function(t) {
              var r = this;
              return e(n, function(i) {
                return mn(i, r, t);
              });
            });
          });
        }
        function ei(e, n) {
          n = n === o ? " " : bn(n);
          var t = n.length;
          if (t < 2)
            return t ? vo(n, e) : n;
          var r = vo(n, Ur(e / Ot(n)));
          return Lt(n) ? gt(Wn(r), 0, e).join("") : r.slice(0, e);
        }
        function Af(e, n, t, r) {
          var i = n & O, l = fr(e);
          function s() {
            for (var d = -1, b = arguments.length, D = -1, B = r.length, P = A(B + b), Z = this && this !== Qe && this instanceof s ? l : e; ++D < B; )
              P[D] = r[D];
            for (; b--; )
              P[D++] = arguments[++d];
            return mn(Z, i ? t : this, P);
          }
          return s;
        }
        function Wl(e) {
          return function(n, t, r) {
            return r && typeof r != "number" && sn(n, t, r) && (t = r = o), n = rt(n), t === o ? (t = n, n = 0) : t = rt(t), r = r === o ? n < t ? 1 : -1 : rt(r), ff(n, t, r, e);
          };
        }
        function ni(e) {
          return function(n, t) {
            return typeof n == "string" && typeof t == "string" || (n = Ln(n), t = Ln(t)), e(n, t);
          };
        }
        function Ml(e, n, t, r, i, l, s, d, b, D) {
          var B = n & H, P = B ? s : o, Z = B ? o : s, re = B ? l : o, fe = B ? o : l;
          n |= B ? V : J, n &= ~(B ? J : V), n & W || (n &= -4);
          var ye = [
            e,
            n,
            i,
            re,
            P,
            fe,
            Z,
            d,
            b,
            D
          ], pe = t.apply(o, ye);
          return Eo(e) && Jl(pe, ye), pe.placeholder = r, Xl(pe, e, n);
        }
        function xo(e) {
          var n = Ye[e];
          return function(t, r) {
            if (t = Ln(t), r = r == null ? 0 : on(be(r), 292), r && Xa(t)) {
              var i = (Te(t) + "e").split("e"), l = n(i[0] + "e" + (+i[1] + r));
              return i = (Te(l) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
            }
            return n(t);
          };
        }
        var If = Bt && 1 / Er(new Bt([, -0]))[1] == K ? function(e) {
          return new Bt(e);
        } : Go;
        function Pl(e) {
          return function(n) {
            var t = an(n);
            return t == Ie ? Qi(n) : t == Bn ? qd(n) : Bd(n, e(n));
          };
        }
        function jn(e, n, t, r, i, l, s, d) {
          var b = n & E;
          if (!b && typeof e != "function")
            throw new An(c);
          var D = r ? r.length : 0;
          if (D || (n &= -97, r = i = o), s = s === o ? s : Ze(be(s), 0), d = d === o ? d : be(d), D -= i ? i.length : 0, n & J) {
            var B = r, P = i;
            r = i = o;
          }
          var Z = b ? o : $o(e), re = [
            e,
            n,
            t,
            r,
            i,
            B,
            P,
            l,
            s,
            d
          ];
          if (Z && zf(re, Z), e = re[0], n = re[1], t = re[2], r = re[3], i = re[4], d = re[9] = re[9] === o ? b ? 0 : e.length : Ze(re[9] - D, 0), !d && n & (H | q) && (n &= -25), !n || n == O)
            var fe = Cf(e, n, t);
          else n == H || n == q ? fe = $f(e, n, d) : (n == V || n == (O | V)) && !i.length ? fe = Af(e, n, t, r) : fe = Qr.apply(o, re);
          var ye = Z ? bl : Jl;
          return Xl(ye(fe, re), e, n);
        }
        function Ul(e, n, t, r) {
          return e === o || Pn(e, Dt[t]) && !Le.call(r, t) ? n : e;
        }
        function Nl(e, n, t, r, i, l) {
          return Ue(e) && Ue(n) && (l.set(n, e), Yr(e, n, o, Nl, l), l.delete(n)), e;
        }
        function Rf(e) {
          return vr(e) ? o : e;
        }
        function Fl(e, n, t, r, i, l) {
          var s = t & R, d = e.length, b = n.length;
          if (d != b && !(s && b > d))
            return !1;
          var D = l.get(e), B = l.get(n);
          if (D && B)
            return D == n && B == e;
          var P = -1, Z = !0, re = t & M ? new wt() : o;
          for (l.set(e, n), l.set(n, e); ++P < d; ) {
            var fe = e[P], ye = n[P];
            if (r)
              var pe = s ? r(ye, fe, P, n, e, l) : r(fe, ye, P, e, n, l);
            if (pe !== o) {
              if (pe)
                continue;
              Z = !1;
              break;
            }
            if (re) {
              if (!Hi(n, function(Se, $e) {
                if (!nr(re, $e) && (fe === Se || i(fe, Se, t, r, l)))
                  return re.push($e);
              })) {
                Z = !1;
                break;
              }
            } else if (!(fe === ye || i(fe, ye, t, r, l))) {
              Z = !1;
              break;
            }
          }
          return l.delete(e), l.delete(n), Z;
        }
        function Ef(e, n, t, r, i, l, s) {
          switch (t) {
            case Rt:
              if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
                return !1;
              e = e.buffer, n = n.buffer;
            case er:
              return !(e.byteLength != n.byteLength || !l(new Br(e), new Br(n)));
            case Zn:
            case U:
            case Sn:
              return Pn(+e, +n);
            case $:
              return e.name == n.name && e.message == n.message;
            case Xt:
            case Qt:
              return e == n + "";
            case Ie:
              var d = Qi;
            case Bn:
              var b = r & R;
              if (d || (d = Er), e.size != n.size && !b)
                return !1;
              var D = s.get(e);
              if (D)
                return D == n;
              r |= M, s.set(e, n);
              var B = Fl(d(e), d(n), r, i, l, s);
              return s.delete(e), B;
            case Sr:
              if (ar)
                return ar.call(e) == ar.call(n);
          }
          return !1;
        }
        function Tf(e, n, t, r, i, l) {
          var s = t & R, d = So(e), b = d.length, D = So(n), B = D.length;
          if (b != B && !s)
            return !1;
          for (var P = b; P--; ) {
            var Z = d[P];
            if (!(s ? Z in n : Le.call(n, Z)))
              return !1;
          }
          var re = l.get(e), fe = l.get(n);
          if (re && fe)
            return re == n && fe == e;
          var ye = !0;
          l.set(e, n), l.set(n, e);
          for (var pe = s; ++P < b; ) {
            Z = d[P];
            var Se = e[Z], $e = n[Z];
            if (r)
              var wn = s ? r($e, Se, Z, n, e, l) : r(Se, $e, Z, e, n, l);
            if (!(wn === o ? Se === $e || i(Se, $e, t, r, l) : wn)) {
              ye = !1;
              break;
            }
            pe || (pe = Z == "constructor");
          }
          if (ye && !pe) {
            var un = e.constructor, kn = n.constructor;
            un != kn && "constructor" in e && "constructor" in n && !(typeof un == "function" && un instanceof un && typeof kn == "function" && kn instanceof kn) && (ye = !1);
          }
          return l.delete(e), l.delete(n), ye;
        }
        function et(e) {
          return Lo(Yl(e, o, rs), e + "");
        }
        function So(e) {
          return sl(e, Je, Io);
        }
        function Co(e) {
          return sl(e, gn, zl);
        }
        var $o = Fr ? function(e) {
          return Fr.get(e);
        } : Go;
        function ti(e) {
          for (var n = e.name + "", t = Wt[n], r = Le.call(Wt, n) ? t.length : 0; r--; ) {
            var i = t[r], l = i.func;
            if (l == null || l == e)
              return i.name;
          }
          return n;
        }
        function Nt(e) {
          var n = Le.call(a, "placeholder") ? a : e;
          return n.placeholder;
        }
        function ce() {
          var e = a.iteratee || zo;
          return e = e === zo ? cl : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function ri(e, n) {
          var t = e.__data__;
          return Pf(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
        }
        function Ao(e) {
          for (var n = Je(e), t = n.length; t--; ) {
            var r = n[t], i = e[r];
            n[t] = [r, i, Hl(i)];
          }
          return n;
        }
        function St(e, n) {
          var t = Nd(e, n);
          return dl(t) ? t : o;
        }
        function Lf(e) {
          var n = Le.call(e, bt), t = e[bt];
          try {
            e[bt] = o;
            var r = !0;
          } catch {
          }
          var i = Vr.call(e);
          return r && (n ? e[bt] = t : delete e[bt]), i;
        }
        var Io = eo ? function(e) {
          return e == null ? [] : (e = De(e), lt(eo(e), function(n) {
            return Za.call(e, n);
          }));
        } : Ho, zl = eo ? function(e) {
          for (var n = []; e; )
            st(n, Io(e)), e = Wr(e);
          return n;
        } : Ho, an = ln;
        (no && an(new no(new ArrayBuffer(1))) != Rt || rr && an(new rr()) != Ie || to && an(to.resolve()) != oa || Bt && an(new Bt()) != Bn || ir && an(new ir()) != jt) && (an = function(e) {
          var n = ln(e), t = n == Dn ? e.constructor : o, r = t ? Ct(t) : "";
          if (r)
            switch (r) {
              case pc:
                return Rt;
              case gc:
                return Ie;
              case vc:
                return oa;
              case hc:
                return Bn;
              case mc:
                return jt;
            }
          return n;
        });
        function Of(e, n, t) {
          for (var r = -1, i = t.length; ++r < i; ) {
            var l = t[r], s = l.size;
            switch (l.type) {
              case "drop":
                e += s;
                break;
              case "dropRight":
                n -= s;
                break;
              case "take":
                n = on(n, e + s);
                break;
              case "takeRight":
                e = Ze(e, n - s);
                break;
            }
          }
          return { start: e, end: n };
        }
        function Vf(e) {
          var n = e.match(Pu);
          return n ? n[1].split(Uu) : [];
        }
        function ql(e, n, t) {
          n = pt(n, e);
          for (var r = -1, i = n.length, l = !1; ++r < i; ) {
            var s = Gn(n[r]);
            if (!(l = e != null && t(e, s)))
              break;
            e = e[s];
          }
          return l || ++r != i ? l : (i = e == null ? 0 : e.length, !!i && di(i) && nt(s, i) && (he(e) || $t(e)));
        }
        function Df(e) {
          var n = e.length, t = new e.constructor(n);
          return n && typeof e[0] == "string" && Le.call(e, "index") && (t.index = e.index, t.input = e.input), t;
        }
        function Gl(e) {
          return typeof e.constructor == "function" && !pr(e) ? Mt(Wr(e)) : {};
        }
        function Bf(e, n, t) {
          var r = e.constructor;
          switch (n) {
            case er:
              return wo(e);
            case Zn:
            case U:
              return new r(+e);
            case Rt:
              return bf(e, t);
            case $i:
            case Ai:
            case Ii:
            case Ri:
            case Ei:
            case Ti:
            case Li:
            case Oi:
            case Vi:
              return Al(e, t);
            case Ie:
              return new r();
            case Sn:
            case Qt:
              return new r(e);
            case Xt:
              return yf(e);
            case Bn:
              return new r();
            case Sr:
              return wf(e);
          }
        }
        function Wf(e, n) {
          var t = n.length;
          if (!t)
            return e;
          var r = t - 1;
          return n[r] = (t > 1 ? "& " : "") + n[r], n = n.join(t > 2 ? ", " : " "), e.replace(Mu, `{
/* [wrapped with ` + n + `] */
`);
        }
        function Mf(e) {
          return he(e) || $t(e) || !!(Ja && e && e[Ja]);
        }
        function nt(e, n) {
          var t = typeof e;
          return n = n ?? ue, !!n && (t == "number" || t != "symbol" && Zu.test(e)) && e > -1 && e % 1 == 0 && e < n;
        }
        function sn(e, n, t) {
          if (!Ue(t))
            return !1;
          var r = typeof n;
          return (r == "number" ? pn(t) && nt(n, t.length) : r == "string" && n in t) ? Pn(t[n], e) : !1;
        }
        function Ro(e, n) {
          if (he(e))
            return !1;
          var t = typeof e;
          return t == "number" || t == "symbol" || t == "boolean" || e == null || yn(e) ? !0 : Vu.test(e) || !Ou.test(e) || n != null && e in De(n);
        }
        function Pf(e) {
          var n = typeof e;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
        }
        function Eo(e) {
          var n = ti(e), t = a[n];
          if (typeof t != "function" || !(n in Ce.prototype))
            return !1;
          if (e === t)
            return !0;
          var r = $o(t);
          return !!r && e === r[0];
        }
        function Uf(e) {
          return !!Ha && Ha in e;
        }
        var Nf = Lr ? tt : Ko;
        function pr(e) {
          var n = e && e.constructor, t = typeof n == "function" && n.prototype || Dt;
          return e === t;
        }
        function Hl(e) {
          return e === e && !Ue(e);
        }
        function Kl(e, n) {
          return function(t) {
            return t == null ? !1 : t[e] === n && (n !== o || e in De(t));
          };
        }
        function Ff(e) {
          var n = si(e, function(r) {
            return t.size === f && t.clear(), r;
          }), t = n.cache;
          return n;
        }
        function zf(e, n) {
          var t = e[1], r = n[1], i = t | r, l = i < (O | E | _e), s = r == _e && t == H || r == _e && t == Me && e[7].length <= n[8] || r == (_e | Me) && n[7].length <= n[8] && t == H;
          if (!(l || s))
            return e;
          r & O && (e[2] = n[2], i |= t & O ? 0 : W);
          var d = n[3];
          if (d) {
            var b = e[3];
            e[3] = b ? Rl(b, d, n[4]) : d, e[4] = b ? ut(e[3], w) : n[4];
          }
          return d = n[5], d && (b = e[5], e[5] = b ? El(b, d, n[6]) : d, e[6] = b ? ut(e[5], w) : n[6]), d = n[7], d && (e[7] = d), r & _e && (e[8] = e[8] == null ? n[8] : on(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = i, e;
        }
        function qf(e) {
          var n = [];
          if (e != null)
            for (var t in De(e))
              n.push(t);
          return n;
        }
        function Gf(e) {
          return Vr.call(e);
        }
        function Yl(e, n, t) {
          return n = Ze(n === o ? e.length - 1 : n, 0), function() {
            for (var r = arguments, i = -1, l = Ze(r.length - n, 0), s = A(l); ++i < l; )
              s[i] = r[n + i];
            i = -1;
            for (var d = A(n + 1); ++i < n; )
              d[i] = r[i];
            return d[n] = t(s), mn(e, this, d);
          };
        }
        function Zl(e, n) {
          return n.length < 2 ? e : xt(e, En(n, 0, -1));
        }
        function Hf(e, n) {
          for (var t = e.length, r = on(n.length, t), i = fn(e); r--; ) {
            var l = n[r];
            e[r] = nt(l, t) ? i[l] : o;
          }
          return e;
        }
        function To(e, n) {
          if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
            return e[n];
        }
        var Jl = Ql(bl), gr = ac || function(e, n) {
          return Qe.setTimeout(e, n);
        }, Lo = Ql(vf);
        function Xl(e, n, t) {
          var r = n + "";
          return Lo(e, Wf(r, Kf(Vf(r), t)));
        }
        function Ql(e) {
          var n = 0, t = 0;
          return function() {
            var r = dc(), i = de - (r - t);
            if (t = r, i > 0) {
              if (++n >= oe)
                return arguments[0];
            } else
              n = 0;
            return e.apply(o, arguments);
          };
        }
        function ii(e, n) {
          var t = -1, r = e.length, i = r - 1;
          for (n = n === o ? r : n; ++t < n; ) {
            var l = go(t, i), s = e[l];
            e[l] = e[t], e[t] = s;
          }
          return e.length = n, e;
        }
        var jl = Ff(function(e) {
          var n = [];
          return e.charCodeAt(0) === 46 && n.push(""), e.replace(Du, function(t, r, i, l) {
            n.push(i ? l.replace(zu, "$1") : r || t);
          }), n;
        });
        function Gn(e) {
          if (typeof e == "string" || yn(e))
            return e;
          var n = e + "";
          return n == "0" && 1 / e == -K ? "-0" : n;
        }
        function Ct(e) {
          if (e != null) {
            try {
              return Or.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function Kf(e, n) {
          return $n(mt, function(t) {
            var r = "_." + t[0];
            n & t[1] && !Ir(e, r) && e.push(r);
          }), e.sort();
        }
        function es(e) {
          if (e instanceof Ce)
            return e.clone();
          var n = new In(e.__wrapped__, e.__chain__);
          return n.__actions__ = fn(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
        }
        function Yf(e, n, t) {
          (t ? sn(e, n, t) : n === o) ? n = 1 : n = Ze(be(n), 0);
          var r = e == null ? 0 : e.length;
          if (!r || n < 1)
            return [];
          for (var i = 0, l = 0, s = A(Ur(r / n)); i < r; )
            s[l++] = En(e, i, i += n);
          return s;
        }
        function Zf(e) {
          for (var n = -1, t = e == null ? 0 : e.length, r = 0, i = []; ++n < t; ) {
            var l = e[n];
            l && (i[r++] = l);
          }
          return i;
        }
        function Jf() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var n = A(e - 1), t = arguments[0], r = e; r--; )
            n[r - 1] = arguments[r];
          return st(he(t) ? fn(t) : [t], je(n, 1));
        }
        var Xf = we(function(e, n) {
          return ze(e) ? sr(e, je(n, 1, ze, !0)) : [];
        }), Qf = we(function(e, n) {
          var t = Tn(n);
          return ze(t) && (t = o), ze(e) ? sr(e, je(n, 1, ze, !0), ce(t, 2)) : [];
        }), jf = we(function(e, n) {
          var t = Tn(n);
          return ze(t) && (t = o), ze(e) ? sr(e, je(n, 1, ze, !0), o, t) : [];
        });
        function ep(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : be(n), En(e, n < 0 ? 0 : n, r)) : [];
        }
        function np(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : be(n), n = r - n, En(e, 0, n < 0 ? 0 : n)) : [];
        }
        function tp(e, n) {
          return e && e.length ? Jr(e, ce(n, 3), !0, !0) : [];
        }
        function rp(e, n) {
          return e && e.length ? Jr(e, ce(n, 3), !0) : [];
        }
        function ip(e, n, t, r) {
          var i = e == null ? 0 : e.length;
          return i ? (t && typeof t != "number" && sn(e, n, t) && (t = 0, r = i), Zc(e, n, t, r)) : [];
        }
        function ns(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : be(t);
          return i < 0 && (i = Ze(r + i, 0)), Rr(e, ce(n, 3), i);
        }
        function ts(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r - 1;
          return t !== o && (i = be(t), i = t < 0 ? Ze(r + i, 0) : on(i, r - 1)), Rr(e, ce(n, 3), i, !0);
        }
        function rs(e) {
          var n = e == null ? 0 : e.length;
          return n ? je(e, 1) : [];
        }
        function op(e) {
          var n = e == null ? 0 : e.length;
          return n ? je(e, K) : [];
        }
        function ap(e, n) {
          var t = e == null ? 0 : e.length;
          return t ? (n = n === o ? 1 : be(n), je(e, n)) : [];
        }
        function lp(e) {
          for (var n = -1, t = e == null ? 0 : e.length, r = {}; ++n < t; ) {
            var i = e[n];
            r[i[0]] = i[1];
          }
          return r;
        }
        function is(e) {
          return e && e.length ? e[0] : o;
        }
        function sp(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : be(t);
          return i < 0 && (i = Ze(r + i, 0)), Tt(e, n, i);
        }
        function up(e) {
          var n = e == null ? 0 : e.length;
          return n ? En(e, 0, -1) : [];
        }
        var dp = we(function(e) {
          var n = Pe(e, bo);
          return n.length && n[0] === e[0] ? so(n) : [];
        }), cp = we(function(e) {
          var n = Tn(e), t = Pe(e, bo);
          return n === Tn(t) ? n = o : t.pop(), t.length && t[0] === e[0] ? so(t, ce(n, 2)) : [];
        }), fp = we(function(e) {
          var n = Tn(e), t = Pe(e, bo);
          return n = typeof n == "function" ? n : o, n && t.pop(), t.length && t[0] === e[0] ? so(t, o, n) : [];
        });
        function pp(e, n) {
          return e == null ? "" : sc.call(e, n);
        }
        function Tn(e) {
          var n = e == null ? 0 : e.length;
          return n ? e[n - 1] : o;
        }
        function gp(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var i = r;
          return t !== o && (i = be(t), i = i < 0 ? Ze(r + i, 0) : on(i, r - 1)), n === n ? Hd(e, n, i) : Rr(e, Ma, i, !0);
        }
        function vp(e, n) {
          return e && e.length ? vl(e, be(n)) : o;
        }
        var hp = we(os);
        function os(e, n) {
          return e && e.length && n && n.length ? po(e, n) : e;
        }
        function mp(e, n, t) {
          return e && e.length && n && n.length ? po(e, n, ce(t, 2)) : e;
        }
        function _p(e, n, t) {
          return e && e.length && n && n.length ? po(e, n, o, t) : e;
        }
        var bp = et(function(e, n) {
          var t = e == null ? 0 : e.length, r = io(e, n);
          return _l(e, Pe(n, function(i) {
            return nt(i, t) ? +i : i;
          }).sort(Il)), r;
        });
        function yp(e, n) {
          var t = [];
          if (!(e && e.length))
            return t;
          var r = -1, i = [], l = e.length;
          for (n = ce(n, 3); ++r < l; ) {
            var s = e[r];
            n(s, r, e) && (t.push(s), i.push(r));
          }
          return _l(e, i), t;
        }
        function Oo(e) {
          return e == null ? e : fc.call(e);
        }
        function wp(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (t && typeof t != "number" && sn(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : be(n), t = t === o ? r : be(t)), En(e, n, t)) : [];
        }
        function kp(e, n) {
          return Zr(e, n);
        }
        function xp(e, n, t) {
          return ho(e, n, ce(t, 2));
        }
        function Sp(e, n) {
          var t = e == null ? 0 : e.length;
          if (t) {
            var r = Zr(e, n);
            if (r < t && Pn(e[r], n))
              return r;
          }
          return -1;
        }
        function Cp(e, n) {
          return Zr(e, n, !0);
        }
        function $p(e, n, t) {
          return ho(e, n, ce(t, 2), !0);
        }
        function Ap(e, n) {
          var t = e == null ? 0 : e.length;
          if (t) {
            var r = Zr(e, n, !0) - 1;
            if (Pn(e[r], n))
              return r;
          }
          return -1;
        }
        function Ip(e) {
          return e && e.length ? yl(e) : [];
        }
        function Rp(e, n) {
          return e && e.length ? yl(e, ce(n, 2)) : [];
        }
        function Ep(e) {
          var n = e == null ? 0 : e.length;
          return n ? En(e, 1, n) : [];
        }
        function Tp(e, n, t) {
          return e && e.length ? (n = t || n === o ? 1 : be(n), En(e, 0, n < 0 ? 0 : n)) : [];
        }
        function Lp(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === o ? 1 : be(n), n = r - n, En(e, n < 0 ? 0 : n, r)) : [];
        }
        function Op(e, n) {
          return e && e.length ? Jr(e, ce(n, 3), !1, !0) : [];
        }
        function Vp(e, n) {
          return e && e.length ? Jr(e, ce(n, 3)) : [];
        }
        var Dp = we(function(e) {
          return ft(je(e, 1, ze, !0));
        }), Bp = we(function(e) {
          var n = Tn(e);
          return ze(n) && (n = o), ft(je(e, 1, ze, !0), ce(n, 2));
        }), Wp = we(function(e) {
          var n = Tn(e);
          return n = typeof n == "function" ? n : o, ft(je(e, 1, ze, !0), o, n);
        });
        function Mp(e) {
          return e && e.length ? ft(e) : [];
        }
        function Pp(e, n) {
          return e && e.length ? ft(e, ce(n, 2)) : [];
        }
        function Up(e, n) {
          return n = typeof n == "function" ? n : o, e && e.length ? ft(e, o, n) : [];
        }
        function Vo(e) {
          if (!(e && e.length))
            return [];
          var n = 0;
          return e = lt(e, function(t) {
            if (ze(t))
              return n = Ze(t.length, n), !0;
          }), Ji(n, function(t) {
            return Pe(e, Ki(t));
          });
        }
        function as(e, n) {
          if (!(e && e.length))
            return [];
          var t = Vo(e);
          return n == null ? t : Pe(t, function(r) {
            return mn(n, o, r);
          });
        }
        var Np = we(function(e, n) {
          return ze(e) ? sr(e, n) : [];
        }), Fp = we(function(e) {
          return _o(lt(e, ze));
        }), zp = we(function(e) {
          var n = Tn(e);
          return ze(n) && (n = o), _o(lt(e, ze), ce(n, 2));
        }), qp = we(function(e) {
          var n = Tn(e);
          return n = typeof n == "function" ? n : o, _o(lt(e, ze), o, n);
        }), Gp = we(Vo);
        function Hp(e, n) {
          return Sl(e || [], n || [], lr);
        }
        function Kp(e, n) {
          return Sl(e || [], n || [], cr);
        }
        var Yp = we(function(e) {
          var n = e.length, t = n > 1 ? e[n - 1] : o;
          return t = typeof t == "function" ? (e.pop(), t) : o, as(e, t);
        });
        function ls(e) {
          var n = a(e);
          return n.__chain__ = !0, n;
        }
        function Zp(e, n) {
          return n(e), e;
        }
        function oi(e, n) {
          return n(e);
        }
        var Jp = et(function(e) {
          var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, i = function(l) {
            return io(l, e);
          };
          return n > 1 || this.__actions__.length || !(r instanceof Ce) || !nt(t) ? this.thru(i) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({
            func: oi,
            args: [i],
            thisArg: o
          }), new In(r, this.__chain__).thru(function(l) {
            return n && !l.length && l.push(o), l;
          }));
        });
        function Xp() {
          return ls(this);
        }
        function Qp() {
          return new In(this.value(), this.__chain__);
        }
        function jp() {
          this.__values__ === o && (this.__values__ = ws(this.value()));
          var e = this.__index__ >= this.__values__.length, n = e ? o : this.__values__[this.__index__++];
          return { done: e, value: n };
        }
        function eg() {
          return this;
        }
        function ng(e) {
          for (var n, t = this; t instanceof qr; ) {
            var r = es(t);
            r.__index__ = 0, r.__values__ = o, n ? i.__wrapped__ = r : n = r;
            var i = r;
            t = t.__wrapped__;
          }
          return i.__wrapped__ = e, n;
        }
        function tg() {
          var e = this.__wrapped__;
          if (e instanceof Ce) {
            var n = e;
            return this.__actions__.length && (n = new Ce(this)), n = n.reverse(), n.__actions__.push({
              func: oi,
              args: [Oo],
              thisArg: o
            }), new In(n, this.__chain__);
          }
          return this.thru(Oo);
        }
        function rg() {
          return xl(this.__wrapped__, this.__actions__);
        }
        var ig = Xr(function(e, n, t) {
          Le.call(e, t) ? ++e[t] : Qn(e, t, 1);
        });
        function og(e, n, t) {
          var r = he(e) ? Ba : Yc;
          return t && sn(e, n, t) && (n = o), r(e, ce(n, 3));
        }
        function ag(e, n) {
          var t = he(e) ? lt : al;
          return t(e, ce(n, 3));
        }
        var lg = Vl(ns), sg = Vl(ts);
        function ug(e, n) {
          return je(ai(e, n), 1);
        }
        function dg(e, n) {
          return je(ai(e, n), K);
        }
        function cg(e, n, t) {
          return t = t === o ? 1 : be(t), je(ai(e, n), t);
        }
        function ss(e, n) {
          var t = he(e) ? $n : ct;
          return t(e, ce(n, 3));
        }
        function us(e, n) {
          var t = he(e) ? Rd : ol;
          return t(e, ce(n, 3));
        }
        var fg = Xr(function(e, n, t) {
          Le.call(e, t) ? e[t].push(n) : Qn(e, t, [n]);
        });
        function pg(e, n, t, r) {
          e = pn(e) ? e : zt(e), t = t && !r ? be(t) : 0;
          var i = e.length;
          return t < 0 && (t = Ze(i + t, 0)), ci(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && Tt(e, n, t) > -1;
        }
        var gg = we(function(e, n, t) {
          var r = -1, i = typeof n == "function", l = pn(e) ? A(e.length) : [];
          return ct(e, function(s) {
            l[++r] = i ? mn(n, s, t) : ur(s, n, t);
          }), l;
        }), vg = Xr(function(e, n, t) {
          Qn(e, t, n);
        });
        function ai(e, n) {
          var t = he(e) ? Pe : fl;
          return t(e, ce(n, 3));
        }
        function hg(e, n, t, r) {
          return e == null ? [] : (he(n) || (n = n == null ? [] : [n]), t = r ? o : t, he(t) || (t = t == null ? [] : [t]), hl(e, n, t));
        }
        var mg = Xr(function(e, n, t) {
          e[t ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function _g(e, n, t) {
          var r = he(e) ? Gi : Ua, i = arguments.length < 3;
          return r(e, ce(n, 4), t, i, ct);
        }
        function bg(e, n, t) {
          var r = he(e) ? Ed : Ua, i = arguments.length < 3;
          return r(e, ce(n, 4), t, i, ol);
        }
        function yg(e, n) {
          var t = he(e) ? lt : al;
          return t(e, ui(ce(n, 3)));
        }
        function wg(e) {
          var n = he(e) ? nl : pf;
          return n(e);
        }
        function kg(e, n, t) {
          (t ? sn(e, n, t) : n === o) ? n = 1 : n = be(n);
          var r = he(e) ? zc : gf;
          return r(e, n);
        }
        function xg(e) {
          var n = he(e) ? qc : hf;
          return n(e);
        }
        function Sg(e) {
          if (e == null)
            return 0;
          if (pn(e))
            return ci(e) ? Ot(e) : e.length;
          var n = an(e);
          return n == Ie || n == Bn ? e.size : co(e).length;
        }
        function Cg(e, n, t) {
          var r = he(e) ? Hi : mf;
          return t && sn(e, n, t) && (n = o), r(e, ce(n, 3));
        }
        var $g = we(function(e, n) {
          if (e == null)
            return [];
          var t = n.length;
          return t > 1 && sn(e, n[0], n[1]) ? n = [] : t > 2 && sn(n[0], n[1], n[2]) && (n = [n[0]]), hl(e, je(n, 1), []);
        }), li = oc || function() {
          return Qe.Date.now();
        };
        function Ag(e, n) {
          if (typeof n != "function")
            throw new An(c);
          return e = be(e), function() {
            if (--e < 1)
              return n.apply(this, arguments);
          };
        }
        function ds(e, n, t) {
          return n = t ? o : n, n = e && n == null ? e.length : n, jn(e, _e, o, o, o, o, n);
        }
        function cs(e, n) {
          var t;
          if (typeof n != "function")
            throw new An(c);
          return e = be(e), function() {
            return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = o), t;
          };
        }
        var Do = we(function(e, n, t) {
          var r = O;
          if (t.length) {
            var i = ut(t, Nt(Do));
            r |= V;
          }
          return jn(e, r, n, t, i);
        }), fs = we(function(e, n, t) {
          var r = O | E;
          if (t.length) {
            var i = ut(t, Nt(fs));
            r |= V;
          }
          return jn(n, r, e, t, i);
        });
        function ps(e, n, t) {
          n = t ? o : n;
          var r = jn(e, H, o, o, o, o, o, n);
          return r.placeholder = ps.placeholder, r;
        }
        function gs(e, n, t) {
          n = t ? o : n;
          var r = jn(e, q, o, o, o, o, o, n);
          return r.placeholder = gs.placeholder, r;
        }
        function vs(e, n, t) {
          var r, i, l, s, d, b, D = 0, B = !1, P = !1, Z = !0;
          if (typeof e != "function")
            throw new An(c);
          n = Ln(n) || 0, Ue(t) && (B = !!t.leading, P = "maxWait" in t, l = P ? Ze(Ln(t.maxWait) || 0, n) : l, Z = "trailing" in t ? !!t.trailing : Z);
          function re(qe) {
            var Un = r, it = i;
            return r = i = o, D = qe, s = e.apply(it, Un), s;
          }
          function fe(qe) {
            return D = qe, d = gr(Se, n), B ? re(qe) : s;
          }
          function ye(qe) {
            var Un = qe - b, it = qe - D, Vs = n - Un;
            return P ? on(Vs, l - it) : Vs;
          }
          function pe(qe) {
            var Un = qe - b, it = qe - D;
            return b === o || Un >= n || Un < 0 || P && it >= l;
          }
          function Se() {
            var qe = li();
            if (pe(qe))
              return $e(qe);
            d = gr(Se, ye(qe));
          }
          function $e(qe) {
            return d = o, Z && r ? re(qe) : (r = i = o, s);
          }
          function wn() {
            d !== o && Cl(d), D = 0, r = b = i = d = o;
          }
          function un() {
            return d === o ? s : $e(li());
          }
          function kn() {
            var qe = li(), Un = pe(qe);
            if (r = arguments, i = this, b = qe, Un) {
              if (d === o)
                return fe(b);
              if (P)
                return Cl(d), d = gr(Se, n), re(b);
            }
            return d === o && (d = gr(Se, n)), s;
          }
          return kn.cancel = wn, kn.flush = un, kn;
        }
        var Ig = we(function(e, n) {
          return il(e, 1, n);
        }), Rg = we(function(e, n, t) {
          return il(e, Ln(n) || 0, t);
        });
        function Eg(e) {
          return jn(e, tn);
        }
        function si(e, n) {
          if (typeof e != "function" || n != null && typeof n != "function")
            throw new An(c);
          var t = function() {
            var r = arguments, i = n ? n.apply(this, r) : r[0], l = t.cache;
            if (l.has(i))
              return l.get(i);
            var s = e.apply(this, r);
            return t.cache = l.set(i, s) || l, s;
          };
          return t.cache = new (si.Cache || Xn)(), t;
        }
        si.Cache = Xn;
        function ui(e) {
          if (typeof e != "function")
            throw new An(c);
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
        function Tg(e) {
          return cs(2, e);
        }
        var Lg = _f(function(e, n) {
          n = n.length == 1 && he(n[0]) ? Pe(n[0], _n(ce())) : Pe(je(n, 1), _n(ce()));
          var t = n.length;
          return we(function(r) {
            for (var i = -1, l = on(r.length, t); ++i < l; )
              r[i] = n[i].call(this, r[i]);
            return mn(e, this, r);
          });
        }), Bo = we(function(e, n) {
          var t = ut(n, Nt(Bo));
          return jn(e, V, o, n, t);
        }), hs = we(function(e, n) {
          var t = ut(n, Nt(hs));
          return jn(e, J, o, n, t);
        }), Og = et(function(e, n) {
          return jn(e, Me, o, o, o, n);
        });
        function Vg(e, n) {
          if (typeof e != "function")
            throw new An(c);
          return n = n === o ? n : be(n), we(e, n);
        }
        function Dg(e, n) {
          if (typeof e != "function")
            throw new An(c);
          return n = n == null ? 0 : Ze(be(n), 0), we(function(t) {
            var r = t[n], i = gt(t, 0, n);
            return r && st(i, r), mn(e, this, i);
          });
        }
        function Bg(e, n, t) {
          var r = !0, i = !0;
          if (typeof e != "function")
            throw new An(c);
          return Ue(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), vs(e, n, {
            leading: r,
            maxWait: n,
            trailing: i
          });
        }
        function Wg(e) {
          return ds(e, 1);
        }
        function Mg(e, n) {
          return Bo(yo(n), e);
        }
        function Pg() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return he(e) ? e : [e];
        }
        function Ug(e) {
          return Rn(e, z);
        }
        function Ng(e, n) {
          return n = typeof n == "function" ? n : o, Rn(e, z, n);
        }
        function Fg(e) {
          return Rn(e, Y | z);
        }
        function zg(e, n) {
          return n = typeof n == "function" ? n : o, Rn(e, Y | z, n);
        }
        function qg(e, n) {
          return n == null || rl(e, n, Je(n));
        }
        function Pn(e, n) {
          return e === n || e !== e && n !== n;
        }
        var Gg = ni(lo), Hg = ni(function(e, n) {
          return e >= n;
        }), $t = ul(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? ul : function(e) {
          return Ne(e) && Le.call(e, "callee") && !Za.call(e, "callee");
        }, he = A.isArray, Kg = Ea ? _n(Ea) : ef;
        function pn(e) {
          return e != null && di(e.length) && !tt(e);
        }
        function ze(e) {
          return Ne(e) && pn(e);
        }
        function Yg(e) {
          return e === !0 || e === !1 || Ne(e) && ln(e) == Zn;
        }
        var vt = lc || Ko, Zg = Ta ? _n(Ta) : nf;
        function Jg(e) {
          return Ne(e) && e.nodeType === 1 && !vr(e);
        }
        function Xg(e) {
          if (e == null)
            return !0;
          if (pn(e) && (he(e) || typeof e == "string" || typeof e.splice == "function" || vt(e) || Ft(e) || $t(e)))
            return !e.length;
          var n = an(e);
          if (n == Ie || n == Bn)
            return !e.size;
          if (pr(e))
            return !co(e).length;
          for (var t in e)
            if (Le.call(e, t))
              return !1;
          return !0;
        }
        function Qg(e, n) {
          return dr(e, n);
        }
        function jg(e, n, t) {
          t = typeof t == "function" ? t : o;
          var r = t ? t(e, n) : o;
          return r === o ? dr(e, n, o, t) : !!r;
        }
        function Wo(e) {
          if (!Ne(e))
            return !1;
          var n = ln(e);
          return n == $ || n == x || typeof e.message == "string" && typeof e.name == "string" && !vr(e);
        }
        function ev(e) {
          return typeof e == "number" && Xa(e);
        }
        function tt(e) {
          if (!Ue(e))
            return !1;
          var n = ln(e);
          return n == Q || n == Ve || n == Jt || n == xu;
        }
        function ms(e) {
          return typeof e == "number" && e == be(e);
        }
        function di(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ue;
        }
        function Ue(e) {
          var n = typeof e;
          return e != null && (n == "object" || n == "function");
        }
        function Ne(e) {
          return e != null && typeof e == "object";
        }
        var _s = La ? _n(La) : rf;
        function nv(e, n) {
          return e === n || uo(e, n, Ao(n));
        }
        function tv(e, n, t) {
          return t = typeof t == "function" ? t : o, uo(e, n, Ao(n), t);
        }
        function rv(e) {
          return bs(e) && e != +e;
        }
        function iv(e) {
          if (Nf(e))
            throw new ve(S);
          return dl(e);
        }
        function ov(e) {
          return e === null;
        }
        function av(e) {
          return e == null;
        }
        function bs(e) {
          return typeof e == "number" || Ne(e) && ln(e) == Sn;
        }
        function vr(e) {
          if (!Ne(e) || ln(e) != Dn)
            return !1;
          var n = Wr(e);
          if (n === null)
            return !0;
          var t = Le.call(n, "constructor") && n.constructor;
          return typeof t == "function" && t instanceof t && Or.call(t) == nc;
        }
        var Mo = Oa ? _n(Oa) : of;
        function lv(e) {
          return ms(e) && e >= -ue && e <= ue;
        }
        var ys = Va ? _n(Va) : af;
        function ci(e) {
          return typeof e == "string" || !he(e) && Ne(e) && ln(e) == Qt;
        }
        function yn(e) {
          return typeof e == "symbol" || Ne(e) && ln(e) == Sr;
        }
        var Ft = Da ? _n(Da) : lf;
        function sv(e) {
          return e === o;
        }
        function uv(e) {
          return Ne(e) && an(e) == jt;
        }
        function dv(e) {
          return Ne(e) && ln(e) == Cu;
        }
        var cv = ni(fo), fv = ni(function(e, n) {
          return e <= n;
        });
        function ws(e) {
          if (!e)
            return [];
          if (pn(e))
            return ci(e) ? Wn(e) : fn(e);
          if (tr && e[tr])
            return zd(e[tr]());
          var n = an(e), t = n == Ie ? Qi : n == Bn ? Er : zt;
          return t(e);
        }
        function rt(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Ln(e), e === K || e === -K) {
            var n = e < 0 ? -1 : 1;
            return n * le;
          }
          return e === e ? e : 0;
        }
        function be(e) {
          var n = rt(e), t = n % 1;
          return n === n ? t ? n - t : n : 0;
        }
        function ks(e) {
          return e ? kt(be(e), 0, cn) : 0;
        }
        function Ln(e) {
          if (typeof e == "number")
            return e;
          if (yn(e))
            return Oe;
          if (Ue(e)) {
            var n = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Ue(n) ? n + "" : n;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Na(e);
          var t = Hu.test(e);
          return t || Yu.test(e) ? $d(e.slice(2), t ? 2 : 8) : Gu.test(e) ? Oe : +e;
        }
        function xs(e) {
          return qn(e, gn(e));
        }
        function pv(e) {
          return e ? kt(be(e), -ue, ue) : e === 0 ? e : 0;
        }
        function Te(e) {
          return e == null ? "" : bn(e);
        }
        var gv = Pt(function(e, n) {
          if (pr(n) || pn(n)) {
            qn(n, Je(n), e);
            return;
          }
          for (var t in n)
            Le.call(n, t) && lr(e, t, n[t]);
        }), Ss = Pt(function(e, n) {
          qn(n, gn(n), e);
        }), fi = Pt(function(e, n, t, r) {
          qn(n, gn(n), e, r);
        }), vv = Pt(function(e, n, t, r) {
          qn(n, Je(n), e, r);
        }), hv = et(io);
        function mv(e, n) {
          var t = Mt(e);
          return n == null ? t : tl(t, n);
        }
        var _v = we(function(e, n) {
          e = De(e);
          var t = -1, r = n.length, i = r > 2 ? n[2] : o;
          for (i && sn(n[0], n[1], i) && (r = 1); ++t < r; )
            for (var l = n[t], s = gn(l), d = -1, b = s.length; ++d < b; ) {
              var D = s[d], B = e[D];
              (B === o || Pn(B, Dt[D]) && !Le.call(e, D)) && (e[D] = l[D]);
            }
          return e;
        }), bv = we(function(e) {
          return e.push(o, Nl), mn(Cs, o, e);
        });
        function yv(e, n) {
          return Wa(e, ce(n, 3), zn);
        }
        function wv(e, n) {
          return Wa(e, ce(n, 3), ao);
        }
        function kv(e, n) {
          return e == null ? e : oo(e, ce(n, 3), gn);
        }
        function xv(e, n) {
          return e == null ? e : ll(e, ce(n, 3), gn);
        }
        function Sv(e, n) {
          return e && zn(e, ce(n, 3));
        }
        function Cv(e, n) {
          return e && ao(e, ce(n, 3));
        }
        function $v(e) {
          return e == null ? [] : Kr(e, Je(e));
        }
        function Av(e) {
          return e == null ? [] : Kr(e, gn(e));
        }
        function Po(e, n, t) {
          var r = e == null ? o : xt(e, n);
          return r === o ? t : r;
        }
        function Iv(e, n) {
          return e != null && ql(e, n, Jc);
        }
        function Uo(e, n) {
          return e != null && ql(e, n, Xc);
        }
        var Rv = Bl(function(e, n, t) {
          n != null && typeof n.toString != "function" && (n = Vr.call(n)), e[n] = t;
        }, Fo(vn)), Ev = Bl(function(e, n, t) {
          n != null && typeof n.toString != "function" && (n = Vr.call(n)), Le.call(e, n) ? e[n].push(t) : e[n] = [t];
        }, ce), Tv = we(ur);
        function Je(e) {
          return pn(e) ? el(e) : co(e);
        }
        function gn(e) {
          return pn(e) ? el(e, !0) : sf(e);
        }
        function Lv(e, n) {
          var t = {};
          return n = ce(n, 3), zn(e, function(r, i, l) {
            Qn(t, n(r, i, l), r);
          }), t;
        }
        function Ov(e, n) {
          var t = {};
          return n = ce(n, 3), zn(e, function(r, i, l) {
            Qn(t, i, n(r, i, l));
          }), t;
        }
        var Vv = Pt(function(e, n, t) {
          Yr(e, n, t);
        }), Cs = Pt(function(e, n, t, r) {
          Yr(e, n, t, r);
        }), Dv = et(function(e, n) {
          var t = {};
          if (e == null)
            return t;
          var r = !1;
          n = Pe(n, function(l) {
            return l = pt(l, e), r || (r = l.length > 1), l;
          }), qn(e, Co(e), t), r && (t = Rn(t, Y | F | z, Rf));
          for (var i = n.length; i--; )
            mo(t, n[i]);
          return t;
        });
        function Bv(e, n) {
          return $s(e, ui(ce(n)));
        }
        var Wv = et(function(e, n) {
          return e == null ? {} : df(e, n);
        });
        function $s(e, n) {
          if (e == null)
            return {};
          var t = Pe(Co(e), function(r) {
            return [r];
          });
          return n = ce(n), ml(e, t, function(r, i) {
            return n(r, i[0]);
          });
        }
        function Mv(e, n, t) {
          n = pt(n, e);
          var r = -1, i = n.length;
          for (i || (i = 1, e = o); ++r < i; ) {
            var l = e == null ? o : e[Gn(n[r])];
            l === o && (r = i, l = t), e = tt(l) ? l.call(e) : l;
          }
          return e;
        }
        function Pv(e, n, t) {
          return e == null ? e : cr(e, n, t);
        }
        function Uv(e, n, t, r) {
          return r = typeof r == "function" ? r : o, e == null ? e : cr(e, n, t, r);
        }
        var As = Pl(Je), Is = Pl(gn);
        function Nv(e, n, t) {
          var r = he(e), i = r || vt(e) || Ft(e);
          if (n = ce(n, 4), t == null) {
            var l = e && e.constructor;
            i ? t = r ? new l() : [] : Ue(e) ? t = tt(l) ? Mt(Wr(e)) : {} : t = {};
          }
          return (i ? $n : zn)(e, function(s, d, b) {
            return n(t, s, d, b);
          }), t;
        }
        function Fv(e, n) {
          return e == null ? !0 : mo(e, n);
        }
        function zv(e, n, t) {
          return e == null ? e : kl(e, n, yo(t));
        }
        function qv(e, n, t, r) {
          return r = typeof r == "function" ? r : o, e == null ? e : kl(e, n, yo(t), r);
        }
        function zt(e) {
          return e == null ? [] : Xi(e, Je(e));
        }
        function Gv(e) {
          return e == null ? [] : Xi(e, gn(e));
        }
        function Hv(e, n, t) {
          return t === o && (t = n, n = o), t !== o && (t = Ln(t), t = t === t ? t : 0), n !== o && (n = Ln(n), n = n === n ? n : 0), kt(Ln(e), n, t);
        }
        function Kv(e, n, t) {
          return n = rt(n), t === o ? (t = n, n = 0) : t = rt(t), e = Ln(e), Qc(e, n, t);
        }
        function Yv(e, n, t) {
          if (t && typeof t != "boolean" && sn(e, n, t) && (n = t = o), t === o && (typeof n == "boolean" ? (t = n, n = o) : typeof e == "boolean" && (t = e, e = o)), e === o && n === o ? (e = 0, n = 1) : (e = rt(e), n === o ? (n = e, e = 0) : n = rt(n)), e > n) {
            var r = e;
            e = n, n = r;
          }
          if (t || e % 1 || n % 1) {
            var i = Qa();
            return on(e + i * (n - e + Cd("1e-" + ((i + "").length - 1))), n);
          }
          return go(e, n);
        }
        var Zv = Ut(function(e, n, t) {
          return n = n.toLowerCase(), e + (t ? Rs(n) : n);
        });
        function Rs(e) {
          return No(Te(e).toLowerCase());
        }
        function Es(e) {
          return e = Te(e), e && e.replace(Ju, Md).replace(vd, "");
        }
        function Jv(e, n, t) {
          e = Te(e), n = bn(n);
          var r = e.length;
          t = t === o ? r : kt(be(t), 0, r);
          var i = t;
          return t -= n.length, t >= 0 && e.slice(t, i) == n;
        }
        function Xv(e) {
          return e = Te(e), e && Eu.test(e) ? e.replace(la, Pd) : e;
        }
        function Qv(e) {
          return e = Te(e), e && Bu.test(e) ? e.replace(Di, "\\$&") : e;
        }
        var jv = Ut(function(e, n, t) {
          return e + (t ? "-" : "") + n.toLowerCase();
        }), eh = Ut(function(e, n, t) {
          return e + (t ? " " : "") + n.toLowerCase();
        }), nh = Ol("toLowerCase");
        function th(e, n, t) {
          e = Te(e), n = be(n);
          var r = n ? Ot(e) : 0;
          if (!n || r >= n)
            return e;
          var i = (n - r) / 2;
          return ei(Nr(i), t) + e + ei(Ur(i), t);
        }
        function rh(e, n, t) {
          e = Te(e), n = be(n);
          var r = n ? Ot(e) : 0;
          return n && r < n ? e + ei(n - r, t) : e;
        }
        function ih(e, n, t) {
          e = Te(e), n = be(n);
          var r = n ? Ot(e) : 0;
          return n && r < n ? ei(n - r, t) + e : e;
        }
        function oh(e, n, t) {
          return t || n == null ? n = 0 : n && (n = +n), cc(Te(e).replace(Bi, ""), n || 0);
        }
        function ah(e, n, t) {
          return (t ? sn(e, n, t) : n === o) ? n = 1 : n = be(n), vo(Te(e), n);
        }
        function lh() {
          var e = arguments, n = Te(e[0]);
          return e.length < 3 ? n : n.replace(e[1], e[2]);
        }
        var sh = Ut(function(e, n, t) {
          return e + (t ? "_" : "") + n.toLowerCase();
        });
        function uh(e, n, t) {
          return t && typeof t != "number" && sn(e, n, t) && (n = t = o), t = t === o ? cn : t >>> 0, t ? (e = Te(e), e && (typeof n == "string" || n != null && !Mo(n)) && (n = bn(n), !n && Lt(e)) ? gt(Wn(e), 0, t) : e.split(n, t)) : [];
        }
        var dh = Ut(function(e, n, t) {
          return e + (t ? " " : "") + No(n);
        });
        function ch(e, n, t) {
          return e = Te(e), t = t == null ? 0 : kt(be(t), 0, e.length), n = bn(n), e.slice(t, t + n.length) == n;
        }
        function fh(e, n, t) {
          var r = a.templateSettings;
          t && sn(e, n, t) && (n = o), e = Te(e), n = fi({}, n, r, Ul);
          var i = fi({}, n.imports, r.imports, Ul), l = Je(i), s = Xi(i, l), d, b, D = 0, B = n.interpolate || Cr, P = "__p += '", Z = ji(
            (n.escape || Cr).source + "|" + B.source + "|" + (B === sa ? qu : Cr).source + "|" + (n.evaluate || Cr).source + "|$",
            "g"
          ), re = "//# sourceURL=" + (Le.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++yd + "]") + `
`;
          e.replace(Z, function(pe, Se, $e, wn, un, kn) {
            return $e || ($e = wn), P += e.slice(D, kn).replace(Xu, Ud), Se && (d = !0, P += `' +
__e(` + Se + `) +
'`), un && (b = !0, P += `';
` + un + `;
__p += '`), $e && (P += `' +
((__t = (` + $e + `)) == null ? '' : __t) +
'`), D = kn + pe.length, pe;
          }), P += `';
`;
          var fe = Le.call(n, "variable") && n.variable;
          if (!fe)
            P = `with (obj) {
` + P + `
}
`;
          else if (Fu.test(fe))
            throw new ve(I);
          P = (b ? P.replace($u, "") : P).replace(Au, "$1").replace(Iu, "$1;"), P = "function(" + (fe || "obj") + `) {
` + (fe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (d ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
          var ye = Ls(function() {
            return Ee(l, re + "return " + P).apply(o, s);
          });
          if (ye.source = P, Wo(ye))
            throw ye;
          return ye;
        }
        function ph(e) {
          return Te(e).toLowerCase();
        }
        function gh(e) {
          return Te(e).toUpperCase();
        }
        function vh(e, n, t) {
          if (e = Te(e), e && (t || n === o))
            return Na(e);
          if (!e || !(n = bn(n)))
            return e;
          var r = Wn(e), i = Wn(n), l = Fa(r, i), s = za(r, i) + 1;
          return gt(r, l, s).join("");
        }
        function hh(e, n, t) {
          if (e = Te(e), e && (t || n === o))
            return e.slice(0, Ga(e) + 1);
          if (!e || !(n = bn(n)))
            return e;
          var r = Wn(e), i = za(r, Wn(n)) + 1;
          return gt(r, 0, i).join("");
        }
        function mh(e, n, t) {
          if (e = Te(e), e && (t || n === o))
            return e.replace(Bi, "");
          if (!e || !(n = bn(n)))
            return e;
          var r = Wn(e), i = Fa(r, Wn(n));
          return gt(r, i).join("");
        }
        function _h(e, n) {
          var t = rn, r = se;
          if (Ue(n)) {
            var i = "separator" in n ? n.separator : i;
            t = "length" in n ? be(n.length) : t, r = "omission" in n ? bn(n.omission) : r;
          }
          e = Te(e);
          var l = e.length;
          if (Lt(e)) {
            var s = Wn(e);
            l = s.length;
          }
          if (t >= l)
            return e;
          var d = t - Ot(r);
          if (d < 1)
            return r;
          var b = s ? gt(s, 0, d).join("") : e.slice(0, d);
          if (i === o)
            return b + r;
          if (s && (d += b.length - d), Mo(i)) {
            if (e.slice(d).search(i)) {
              var D, B = b;
              for (i.global || (i = ji(i.source, Te(ua.exec(i)) + "g")), i.lastIndex = 0; D = i.exec(B); )
                var P = D.index;
              b = b.slice(0, P === o ? d : P);
            }
          } else if (e.indexOf(bn(i), d) != d) {
            var Z = b.lastIndexOf(i);
            Z > -1 && (b = b.slice(0, Z));
          }
          return b + r;
        }
        function bh(e) {
          return e = Te(e), e && Ru.test(e) ? e.replace(aa, Kd) : e;
        }
        var yh = Ut(function(e, n, t) {
          return e + (t ? " " : "") + n.toUpperCase();
        }), No = Ol("toUpperCase");
        function Ts(e, n, t) {
          return e = Te(e), n = t ? o : n, n === o ? Fd(e) ? Jd(e) : Od(e) : e.match(n) || [];
        }
        var Ls = we(function(e, n) {
          try {
            return mn(e, o, n);
          } catch (t) {
            return Wo(t) ? t : new ve(t);
          }
        }), wh = et(function(e, n) {
          return $n(n, function(t) {
            t = Gn(t), Qn(e, t, Do(e[t], e));
          }), e;
        });
        function kh(e) {
          var n = e == null ? 0 : e.length, t = ce();
          return e = n ? Pe(e, function(r) {
            if (typeof r[1] != "function")
              throw new An(c);
            return [t(r[0]), r[1]];
          }) : [], we(function(r) {
            for (var i = -1; ++i < n; ) {
              var l = e[i];
              if (mn(l[0], this, r))
                return mn(l[1], this, r);
            }
          });
        }
        function xh(e) {
          return Kc(Rn(e, Y));
        }
        function Fo(e) {
          return function() {
            return e;
          };
        }
        function Sh(e, n) {
          return e == null || e !== e ? n : e;
        }
        var Ch = Dl(), $h = Dl(!0);
        function vn(e) {
          return e;
        }
        function zo(e) {
          return cl(typeof e == "function" ? e : Rn(e, Y));
        }
        function Ah(e) {
          return pl(Rn(e, Y));
        }
        function Ih(e, n) {
          return gl(e, Rn(n, Y));
        }
        var Rh = we(function(e, n) {
          return function(t) {
            return ur(t, e, n);
          };
        }), Eh = we(function(e, n) {
          return function(t) {
            return ur(e, t, n);
          };
        });
        function qo(e, n, t) {
          var r = Je(n), i = Kr(n, r);
          t == null && !(Ue(n) && (i.length || !r.length)) && (t = n, n = e, e = this, i = Kr(n, Je(n)));
          var l = !(Ue(t) && "chain" in t) || !!t.chain, s = tt(e);
          return $n(i, function(d) {
            var b = n[d];
            e[d] = b, s && (e.prototype[d] = function() {
              var D = this.__chain__;
              if (l || D) {
                var B = e(this.__wrapped__), P = B.__actions__ = fn(this.__actions__);
                return P.push({ func: b, args: arguments, thisArg: e }), B.__chain__ = D, B;
              }
              return b.apply(e, st([this.value()], arguments));
            });
          }), e;
        }
        function Th() {
          return Qe._ === this && (Qe._ = tc), this;
        }
        function Go() {
        }
        function Lh(e) {
          return e = be(e), we(function(n) {
            return vl(n, e);
          });
        }
        var Oh = ko(Pe), Vh = ko(Ba), Dh = ko(Hi);
        function Os(e) {
          return Ro(e) ? Ki(Gn(e)) : cf(e);
        }
        function Bh(e) {
          return function(n) {
            return e == null ? o : xt(e, n);
          };
        }
        var Wh = Wl(), Mh = Wl(!0);
        function Ho() {
          return [];
        }
        function Ko() {
          return !1;
        }
        function Ph() {
          return {};
        }
        function Uh() {
          return "";
        }
        function Nh() {
          return !0;
        }
        function Fh(e, n) {
          if (e = be(e), e < 1 || e > ue)
            return [];
          var t = cn, r = on(e, cn);
          n = ce(n), e -= cn;
          for (var i = Ji(r, n); ++t < e; )
            n(t);
          return i;
        }
        function zh(e) {
          return he(e) ? Pe(e, Gn) : yn(e) ? [e] : fn(jl(Te(e)));
        }
        function qh(e) {
          var n = ++ec;
          return Te(e) + n;
        }
        var Gh = jr(function(e, n) {
          return e + n;
        }, 0), Hh = xo("ceil"), Kh = jr(function(e, n) {
          return e / n;
        }, 1), Yh = xo("floor");
        function Zh(e) {
          return e && e.length ? Hr(e, vn, lo) : o;
        }
        function Jh(e, n) {
          return e && e.length ? Hr(e, ce(n, 2), lo) : o;
        }
        function Xh(e) {
          return Pa(e, vn);
        }
        function Qh(e, n) {
          return Pa(e, ce(n, 2));
        }
        function jh(e) {
          return e && e.length ? Hr(e, vn, fo) : o;
        }
        function em(e, n) {
          return e && e.length ? Hr(e, ce(n, 2), fo) : o;
        }
        var nm = jr(function(e, n) {
          return e * n;
        }, 1), tm = xo("round"), rm = jr(function(e, n) {
          return e - n;
        }, 0);
        function im(e) {
          return e && e.length ? Zi(e, vn) : 0;
        }
        function om(e, n) {
          return e && e.length ? Zi(e, ce(n, 2)) : 0;
        }
        return a.after = Ag, a.ary = ds, a.assign = gv, a.assignIn = Ss, a.assignInWith = fi, a.assignWith = vv, a.at = hv, a.before = cs, a.bind = Do, a.bindAll = wh, a.bindKey = fs, a.castArray = Pg, a.chain = ls, a.chunk = Yf, a.compact = Zf, a.concat = Jf, a.cond = kh, a.conforms = xh, a.constant = Fo, a.countBy = ig, a.create = mv, a.curry = ps, a.curryRight = gs, a.debounce = vs, a.defaults = _v, a.defaultsDeep = bv, a.defer = Ig, a.delay = Rg, a.difference = Xf, a.differenceBy = Qf, a.differenceWith = jf, a.drop = ep, a.dropRight = np, a.dropRightWhile = tp, a.dropWhile = rp, a.fill = ip, a.filter = ag, a.flatMap = ug, a.flatMapDeep = dg, a.flatMapDepth = cg, a.flatten = rs, a.flattenDeep = op, a.flattenDepth = ap, a.flip = Eg, a.flow = Ch, a.flowRight = $h, a.fromPairs = lp, a.functions = $v, a.functionsIn = Av, a.groupBy = fg, a.initial = up, a.intersection = dp, a.intersectionBy = cp, a.intersectionWith = fp, a.invert = Rv, a.invertBy = Ev, a.invokeMap = gg, a.iteratee = zo, a.keyBy = vg, a.keys = Je, a.keysIn = gn, a.map = ai, a.mapKeys = Lv, a.mapValues = Ov, a.matches = Ah, a.matchesProperty = Ih, a.memoize = si, a.merge = Vv, a.mergeWith = Cs, a.method = Rh, a.methodOf = Eh, a.mixin = qo, a.negate = ui, a.nthArg = Lh, a.omit = Dv, a.omitBy = Bv, a.once = Tg, a.orderBy = hg, a.over = Oh, a.overArgs = Lg, a.overEvery = Vh, a.overSome = Dh, a.partial = Bo, a.partialRight = hs, a.partition = mg, a.pick = Wv, a.pickBy = $s, a.property = Os, a.propertyOf = Bh, a.pull = hp, a.pullAll = os, a.pullAllBy = mp, a.pullAllWith = _p, a.pullAt = bp, a.range = Wh, a.rangeRight = Mh, a.rearg = Og, a.reject = yg, a.remove = yp, a.rest = Vg, a.reverse = Oo, a.sampleSize = kg, a.set = Pv, a.setWith = Uv, a.shuffle = xg, a.slice = wp, a.sortBy = $g, a.sortedUniq = Ip, a.sortedUniqBy = Rp, a.split = uh, a.spread = Dg, a.tail = Ep, a.take = Tp, a.takeRight = Lp, a.takeRightWhile = Op, a.takeWhile = Vp, a.tap = Zp, a.throttle = Bg, a.thru = oi, a.toArray = ws, a.toPairs = As, a.toPairsIn = Is, a.toPath = zh, a.toPlainObject = xs, a.transform = Nv, a.unary = Wg, a.union = Dp, a.unionBy = Bp, a.unionWith = Wp, a.uniq = Mp, a.uniqBy = Pp, a.uniqWith = Up, a.unset = Fv, a.unzip = Vo, a.unzipWith = as, a.update = zv, a.updateWith = qv, a.values = zt, a.valuesIn = Gv, a.without = Np, a.words = Ts, a.wrap = Mg, a.xor = Fp, a.xorBy = zp, a.xorWith = qp, a.zip = Gp, a.zipObject = Hp, a.zipObjectDeep = Kp, a.zipWith = Yp, a.entries = As, a.entriesIn = Is, a.extend = Ss, a.extendWith = fi, qo(a, a), a.add = Gh, a.attempt = Ls, a.camelCase = Zv, a.capitalize = Rs, a.ceil = Hh, a.clamp = Hv, a.clone = Ug, a.cloneDeep = Fg, a.cloneDeepWith = zg, a.cloneWith = Ng, a.conformsTo = qg, a.deburr = Es, a.defaultTo = Sh, a.divide = Kh, a.endsWith = Jv, a.eq = Pn, a.escape = Xv, a.escapeRegExp = Qv, a.every = og, a.find = lg, a.findIndex = ns, a.findKey = yv, a.findLast = sg, a.findLastIndex = ts, a.findLastKey = wv, a.floor = Yh, a.forEach = ss, a.forEachRight = us, a.forIn = kv, a.forInRight = xv, a.forOwn = Sv, a.forOwnRight = Cv, a.get = Po, a.gt = Gg, a.gte = Hg, a.has = Iv, a.hasIn = Uo, a.head = is, a.identity = vn, a.includes = pg, a.indexOf = sp, a.inRange = Kv, a.invoke = Tv, a.isArguments = $t, a.isArray = he, a.isArrayBuffer = Kg, a.isArrayLike = pn, a.isArrayLikeObject = ze, a.isBoolean = Yg, a.isBuffer = vt, a.isDate = Zg, a.isElement = Jg, a.isEmpty = Xg, a.isEqual = Qg, a.isEqualWith = jg, a.isError = Wo, a.isFinite = ev, a.isFunction = tt, a.isInteger = ms, a.isLength = di, a.isMap = _s, a.isMatch = nv, a.isMatchWith = tv, a.isNaN = rv, a.isNative = iv, a.isNil = av, a.isNull = ov, a.isNumber = bs, a.isObject = Ue, a.isObjectLike = Ne, a.isPlainObject = vr, a.isRegExp = Mo, a.isSafeInteger = lv, a.isSet = ys, a.isString = ci, a.isSymbol = yn, a.isTypedArray = Ft, a.isUndefined = sv, a.isWeakMap = uv, a.isWeakSet = dv, a.join = pp, a.kebabCase = jv, a.last = Tn, a.lastIndexOf = gp, a.lowerCase = eh, a.lowerFirst = nh, a.lt = cv, a.lte = fv, a.max = Zh, a.maxBy = Jh, a.mean = Xh, a.meanBy = Qh, a.min = jh, a.minBy = em, a.stubArray = Ho, a.stubFalse = Ko, a.stubObject = Ph, a.stubString = Uh, a.stubTrue = Nh, a.multiply = nm, a.nth = vp, a.noConflict = Th, a.noop = Go, a.now = li, a.pad = th, a.padEnd = rh, a.padStart = ih, a.parseInt = oh, a.random = Yv, a.reduce = _g, a.reduceRight = bg, a.repeat = ah, a.replace = lh, a.result = Mv, a.round = tm, a.runInContext = h, a.sample = wg, a.size = Sg, a.snakeCase = sh, a.some = Cg, a.sortedIndex = kp, a.sortedIndexBy = xp, a.sortedIndexOf = Sp, a.sortedLastIndex = Cp, a.sortedLastIndexBy = $p, a.sortedLastIndexOf = Ap, a.startCase = dh, a.startsWith = ch, a.subtract = rm, a.sum = im, a.sumBy = om, a.template = fh, a.times = Fh, a.toFinite = rt, a.toInteger = be, a.toLength = ks, a.toLower = ph, a.toNumber = Ln, a.toSafeInteger = pv, a.toString = Te, a.toUpper = gh, a.trim = vh, a.trimEnd = hh, a.trimStart = mh, a.truncate = _h, a.unescape = bh, a.uniqueId = qh, a.upperCase = yh, a.upperFirst = No, a.each = ss, a.eachRight = us, a.first = is, qo(a, (function() {
          var e = {};
          return zn(a, function(n, t) {
            Le.call(a.prototype, t) || (e[t] = n);
          }), e;
        })(), { chain: !1 }), a.VERSION = k, $n(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          a[e].placeholder = a;
        }), $n(["drop", "take"], function(e, n) {
          Ce.prototype[e] = function(t) {
            t = t === o ? 1 : Ze(be(t), 0);
            var r = this.__filtered__ && !n ? new Ce(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = on(t, r.__takeCount__) : r.__views__.push({
              size: on(t, cn),
              type: e + (r.__dir__ < 0 ? "Right" : "")
            }), r;
          }, Ce.prototype[e + "Right"] = function(t) {
            return this.reverse()[e](t).reverse();
          };
        }), $n(["filter", "map", "takeWhile"], function(e, n) {
          var t = n + 1, r = t == ge || t == G;
          Ce.prototype[e] = function(i) {
            var l = this.clone();
            return l.__iteratees__.push({
              iteratee: ce(i, 3),
              type: t
            }), l.__filtered__ = l.__filtered__ || r, l;
          };
        }), $n(["head", "last"], function(e, n) {
          var t = "take" + (n ? "Right" : "");
          Ce.prototype[e] = function() {
            return this[t](1).value()[0];
          };
        }), $n(["initial", "tail"], function(e, n) {
          var t = "drop" + (n ? "" : "Right");
          Ce.prototype[e] = function() {
            return this.__filtered__ ? new Ce(this) : this[t](1);
          };
        }), Ce.prototype.compact = function() {
          return this.filter(vn);
        }, Ce.prototype.find = function(e) {
          return this.filter(e).head();
        }, Ce.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, Ce.prototype.invokeMap = we(function(e, n) {
          return typeof e == "function" ? new Ce(this) : this.map(function(t) {
            return ur(t, e, n);
          });
        }), Ce.prototype.reject = function(e) {
          return this.filter(ui(ce(e)));
        }, Ce.prototype.slice = function(e, n) {
          e = be(e);
          var t = this;
          return t.__filtered__ && (e > 0 || n < 0) ? new Ce(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== o && (n = be(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
        }, Ce.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, Ce.prototype.toArray = function() {
          return this.take(cn);
        }, zn(Ce.prototype, function(e, n) {
          var t = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), i = a[r ? "take" + (n == "last" ? "Right" : "") : n], l = r || /^find/.test(n);
          i && (a.prototype[n] = function() {
            var s = this.__wrapped__, d = r ? [1] : arguments, b = s instanceof Ce, D = d[0], B = b || he(s), P = function(Se) {
              var $e = i.apply(a, st([Se], d));
              return r && Z ? $e[0] : $e;
            };
            B && t && typeof D == "function" && D.length != 1 && (b = B = !1);
            var Z = this.__chain__, re = !!this.__actions__.length, fe = l && !Z, ye = b && !re;
            if (!l && B) {
              s = ye ? s : new Ce(this);
              var pe = e.apply(s, d);
              return pe.__actions__.push({ func: oi, args: [P], thisArg: o }), new In(pe, Z);
            }
            return fe && ye ? e.apply(this, d) : (pe = this.thru(P), fe ? r ? pe.value()[0] : pe.value() : pe);
          });
        }), $n(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var n = Tr[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
          a.prototype[e] = function() {
            var i = arguments;
            if (r && !this.__chain__) {
              var l = this.value();
              return n.apply(he(l) ? l : [], i);
            }
            return this[t](function(s) {
              return n.apply(he(s) ? s : [], i);
            });
          };
        }), zn(Ce.prototype, function(e, n) {
          var t = a[n];
          if (t) {
            var r = t.name + "";
            Le.call(Wt, r) || (Wt[r] = []), Wt[r].push({ name: n, func: t });
          }
        }), Wt[Qr(o, E).name] = [{
          name: "wrapper",
          func: o
        }], Ce.prototype.clone = _c, Ce.prototype.reverse = bc, Ce.prototype.value = yc, a.prototype.at = Jp, a.prototype.chain = Xp, a.prototype.commit = Qp, a.prototype.next = jp, a.prototype.plant = ng, a.prototype.reverse = tg, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = rg, a.prototype.first = a.prototype.head, tr && (a.prototype[tr] = eg), a;
      }), Vt = Xd();
      _t ? ((_t.exports = Vt)._ = Vt, Fi._ = Vt) : Qe._ = Vt;
    }).call(_b);
  })(mr, mr.exports)), mr.exports;
}
var yb = bb();
const wb = { class: "editor" }, kb = { class: "editor__fields" }, xb = { class: "editor__actions" }, Sb = {
  key: 1,
  class: "editor__preview"
}, Cb = /* @__PURE__ */ He({
  __name: "DatasourceEditor",
  props: {
    itemId: {},
    view: { default: "settings" }
  },
  emits: ["close"],
  setup(p, { emit: _ }) {
    const o = p, k = j({}), m = xe(Ci), S = xe(Yn), c = xn(S, (R) => R.connections), I = xn(S, (R) => R.datasources), y = X(() => m.registeredDatasources);
    Hn(() => {
      const R = m.getDatasourceModel(o.itemId);
      k.value = R ? {
        uid: R.uid,
        name: R.name,
        type: R.type,
        config: yb.cloneDeep(R.config ?? {})
      } : {};
    });
    const f = () => {
      const R = m.getDatasourceModel(o.itemId);
      R && (R.name = k.value.name, R.type = k.value.type, R.config = k.value.config, R.connection = c.value.find(
        (M) => M.uid === k.value.config?.connection
      ), m.saveDatasource(R)), z("close");
    }, w = X(() => {
      const R = m.getDatasourceIdentifiers(k.value.type);
      return R ? m.resolveIdentifier(R.Preview) : null;
    }), Y = X(() => {
      const R = m.getDatasourceIdentifiers(k.value.type);
      return R ? m.resolveIdentifier(R.Settings) : null;
    }), F = (R) => {
      k.value.config = R;
    }, z = _;
    return (R, M) => (g(), C("div", wb, [
      p.view === "settings" ? (g(), C(ke, { key: 0 }, [
        u("div", kb, [
          L(v(Xe), {
            modelValue: k.value.uid,
            "onUpdate:modelValue": M[0] || (M[0] = (O) => k.value.uid = O),
            label: "UID",
            readonly: ""
          }, null, 8, ["modelValue"]),
          L(v(Xe), {
            modelValue: k.value.name,
            "onUpdate:modelValue": M[1] || (M[1] = (O) => k.value.name = O),
            label: "Name"
          }, null, 8, ["modelValue"]),
          L(v(On), {
            modelValue: k.value.type,
            "onUpdate:modelValue": M[2] || (M[2] = (O) => k.value.type = O),
            label: "Typ",
            options: y.value
          }, null, 8, ["modelValue", "options"]),
          (g(), Ae(Kn(Y.value), {
            config: k.value.config,
            connections: v(c),
            dataSources: v(I)
          }, null, 8, ["config", "connections", "dataSources"]))
        ]),
        u("div", xb, [
          L(v(me), {
            intent: "quiet",
            onClick: M[3] || (M[3] = (O) => R.$emit("close"))
          }, {
            default: te(() => [...M[4] || (M[4] = [
              ie("Schließen", -1)
            ])]),
            _: 1
          }),
          L(v(me), {
            intent: "primary",
            onClick: f
          }, {
            default: te(() => [...M[5] || (M[5] = [
              ie("Speichern", -1)
            ])]),
            _: 1
          })
        ])
      ], 64)) : (g(), C("div", Sb, [
        (g(), Ae(Kn(w.value), {
          "data-source": k.value,
          key: k.value.uid,
          onUpdateConfig: F
        }, null, 40, ["data-source"]))
      ]))
    ]));
  }
}), $b = /* @__PURE__ */ Ke(Cb, [["__scopeId", "data-v-b30445c3"]]), Ab = { class: "editor" }, Ib = { class: "editor__fields" }, Rb = { class: "editor__actions" }, Eb = /* @__PURE__ */ He({
  __name: "ConnectionEditor",
  props: {
    itemId: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(p, { emit: _ }) {
    const o = p, k = _, m = j({}), S = xe(Si), c = X(() => S.registeredConnections);
    Hn(() => {
      const f = S.getConnectionModel(o.itemId);
      m.value = f ? {
        uid: f.uid,
        name: f.name,
        type: f.type,
        config: JSON.parse(JSON.stringify(f.config ?? {}))
      } : {};
    });
    const I = X(() => {
      const f = S.getConnectionIdentifiers(m.value.type);
      return f ? S.resolveIdentifier(f.Settings) : null;
    }), y = () => {
      const f = S.getConnectionModel(o.itemId);
      f && (f.name = m.value.name, f.type = m.value.type, f.config = m.value.config, S.saveConnection(f)), k("close");
    };
    return (f, w) => (g(), C("div", Ab, [
      u("div", Ib, [
        L(v(Xe), {
          modelValue: m.value.uid,
          "onUpdate:modelValue": w[0] || (w[0] = (Y) => m.value.uid = Y),
          label: "UID",
          readonly: ""
        }, null, 8, ["modelValue"]),
        L(v(Xe), {
          modelValue: m.value.name,
          "onUpdate:modelValue": w[1] || (w[1] = (Y) => m.value.name = Y),
          label: "Name"
        }, null, 8, ["modelValue"]),
        L(v(On), {
          modelValue: m.value.type,
          "onUpdate:modelValue": w[2] || (w[2] = (Y) => m.value.type = Y),
          label: "Typ",
          options: c.value
        }, null, 8, ["modelValue", "options"]),
        (g(), Ae(Kn(I.value), {
          config: m.value.config
        }, null, 8, ["config"]))
      ]),
      u("div", Rb, [
        L(v(me), {
          intent: "quiet",
          onClick: w[3] || (w[3] = (Y) => f.$emit("close"))
        }, {
          default: te(() => [...w[4] || (w[4] = [
            ie("Schließen", -1)
          ])]),
          _: 1
        }),
        L(v(me), {
          intent: "primary",
          onClick: y
        }, {
          default: te(() => [...w[5] || (w[5] = [
            ie("Speichern", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Tb = /* @__PURE__ */ Ke(Eb, [["__scopeId", "data-v-c18a8ecf"]]), Lb = { class: "data-page" }, Ob = { class: "data-page__tree" }, Vb = { class: "data-page__detail" }, Db = {
  key: 0,
  class: "data-page__nothing"
}, Bb = { class: "detail__head" }, Wb = { class: "detail__what" }, Mb = { class: "detail__name" }, Pb = {
  key: 0,
  class: "detail__sub"
}, Ub = {
  key: 0,
  class: "detail__usage"
}, Nb = { class: "detail__body" }, Fb = /* @__PURE__ */ He({
  __name: "ConnectionsAndData",
  setup(p) {
    const _ = xe(Yn), o = xn(_, (R) => R.connections), k = xn(_, (R) => R.datasources), { usageOf: m, usageLabel: S } = wu(), c = j(void 0), I = j("preview"), y = xe("endpointfinder", null), f = () => y?.(), w = Js(() => {
      const R = c.value;
      if (R)
        return R.type === "Connection" ? o.value.find((M) => M.uid === R.itemId) : k.value.find((M) => M.uid === R.itemId);
    }), Y = X(() => {
      const R = w.value;
      return R ? c.value?.type === "Connection" ? R.type ?? "" : [R.type, R.connection?.name].filter(Boolean).join(" · ") : "";
    }), F = X(() => c.value?.type !== "DataSource" || !c.value.itemId ? "" : S(m(c.value.itemId))), z = X(
      () => c.value?.type === "DataSource" ? [
        { id: "preview", label: "Vorschau" },
        { id: "settings", label: "Einstellungen" }
      ] : [{ id: "settings", label: "Einstellungen" }]
    );
    return dn(c, (R) => {
      I.value = R?.type === "DataSource" ? "preview" : "settings";
    }), (R, M) => (g(), C("div", Lb, [
      u("aside", Ob, [
        L(mb, {
          modelValue: c.value,
          "onUpdate:modelValue": M[0] || (M[0] = (O) => c.value = O),
          onFindEndpoints: f
        }, null, 8, ["modelValue"])
      ]),
      u("section", Vb, [
        c.value ? (g(), C(ke, { key: 1 }, [
          u("header", Bb, [
            u("div", Wb, [
              u("h1", Mb, N(v(w)?.name ?? c.value.itemId), 1),
              Y.value ? (g(), C("span", Pb, N(Y.value), 1)) : ee("", !0)
            ]),
            F.value ? (g(), C("span", Ub, "Verwendet in " + N(F.value), 1)) : ee("", !0)
          ]),
          L(v(Cm), {
            modelValue: I.value,
            "onUpdate:modelValue": M[1] || (M[1] = (O) => I.value = O),
            tabs: z.value,
            label: "Ansicht der Auswahl"
          }, null, 8, ["modelValue", "tabs"]),
          u("div", Nb, [
            c.value.type === "Connection" ? (g(), Ae(Tb, {
              key: c.value.itemId,
              "item-id": c.value.itemId,
              onClose: M[2] || (M[2] = (O) => c.value = void 0)
            }, null, 8, ["item-id"])) : (g(), Ae($b, {
              key: `${c.value.itemId}-${I.value}`,
              "item-id": c.value.itemId,
              view: I.value === "preview" ? "preview" : "settings",
              onClose: M[3] || (M[3] = (O) => c.value = void 0)
            }, null, 8, ["item-id", "view"]))
          ])
        ], 64)) : (g(), C("p", Db, " Wähle links eine Verbindung oder eine Datenquelle. "))
      ])
    ]));
  }
}), zb = /* @__PURE__ */ Ke(Fb, [["__scopeId", "data-v-91f5d575"]]), qb = { class: "add_widget_window" }, Gb = { class: "add_widget_window__scroll" }, Hb = { class: "widgets_grid-icon" }, Kb = ["src"], Yb = { class: "widgets_grid-name" }, Zb = /* @__PURE__ */ He({
  __name: "AddWidgetWindow",
  setup(p) {
    const _ = j(""), o = j(""), k = xn(xe(Yn), (f) => f.datasources), m = (f) => {
      const w = document.createElement("div");
      document.body.appendChild(w), f.dataTransfer?.setDragImage(w, 0, 0), setTimeout(() => {
        document.body.removeChild(w);
      }, 0);
    }, S = xe(tu);
    console.log(S.getAllWidgets());
    const c = Object.entries(S.getAllWidgets()).map(([f, w]) => ({ type: f, name: w.name, icon: w.icon })), I = X(() => c);
    X(() => [
      "None",
      ...k.value.map((f) => f.type).filter((f, w, Y) => w === Y.indexOf(f))
    ]);
    const y = X(() => k.value.filter((f) => f.type === o.value).map((f) => ({ uid: f.uid })));
    return dn(o, (f) => {
      !f || f === "None" ? _.value = "" : y.value.map((Y) => Y.uid).includes(_.value) || (_.value = "");
    }), (f, w) => (g(), C("div", qb, [
      u("div", Gb, [
        L(v(qm), {
          class: "widgets_grid",
          list: I.value,
          group: { name: "widgets", pull: "clone", put: !1 },
          itemKey: "type"
        }, {
          item: te(({ element: Y }) => [
            u("div", {
              class: "widgets_grid-item",
              draggable: "true",
              onDragstart: w[0] || (w[0] = (F) => m(F))
            }, [
              u("span", Hb, [
                u("img", {
                  src: Y.icon,
                  alt: ""
                }, null, 8, Kb)
              ]),
              u("span", Yb, N(Y.name), 1)
            ], 32)
          ]),
          _: 1
        }, 8, ["list"])
      ])
    ]));
  }
}), Jb = /* @__PURE__ */ Ke(Zb, [["__scopeId", "data-v-3ac9fb06"]]), Xb = {
  class: "overlay",
  role: "dialog",
  "aria-modal": "true",
  "aria-label": "Widget-Einstellungen"
}, Qb = { class: "stage" }, jb = { class: "stage__head" }, ey = { class: "stage__name" }, ny = { class: "stage__uid" }, ty = {
  class: "seg",
  role: "group",
  "aria-label": "Vorschaugröße"
}, ry = { class: "stage__bar" }, iy = { class: "stage__body" }, oy = {
  class: "tabs",
  role: "tablist",
  "aria-label": "Einstellungen"
}, ay = ["aria-selected"], ly = { class: "tab__n" }, sy = ["aria-selected"], uy = ["aria-selected", "onClick"], dy = ["aria-selected"], cy = ["aria-selected"], fy = { class: "tab__n" }, py = ["aria-selected"], gy = { class: "tab__n" }, vy = {
  key: 0,
  class: "fields"
}, hy = {
  key: 0,
  class: "bound"
}, my = { class: "bound__name" }, _y = { class: "bound__var" }, by = {
  key: 1,
  class: "note"
}, yy = { class: "foot" }, wy = ":scope > [data-section], :scope > .va-collapse", ky = /* @__PURE__ */ He({
  __name: "WidgetSettingsOverlay",
  props: /* @__PURE__ */ Zt({
    boardSize: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Zt(["close"], ["update:modelValue"]),
  setup(p, { emit: _ }) {
    const o = _, k = wr(p, "modelValue"), m = p, S = xn(xe(Yn), (x) => x.datasources), I = xe(tu).getAllWidgets();
    xe("i18n");
    const y = j("look"), f = X(() => {
      const x = k.value?.type;
      return x ? I[x]?.settingsForm : void 0;
    }), w = X(
      () => !!(k.value?.type && I[k.value.type]?.settingsComponent)
    ), Y = X(() => !!f.value && w.value), F = X(() => !!f.value || w.value);
    dn(F, (x) => {
      !x && y.value === "look" && (y.value = "data");
    }, { immediate: !0 });
    const z = j(), R = j([]), M = j(0);
    function O(x) {
      return x ? [...x.querySelectorAll(wy)] : [];
    }
    function E() {
      return O(z.value);
    }
    function W(x) {
      const $ = x.dataset.section;
      if ($) return $;
      const Q = x.querySelector(".va-collapse__header-wrapper");
      return Q ? [...Q.querySelectorAll("*")].filter((Ie) => !Ie.classList.contains("va-icon") && Ie.children.length === 0).map((Ie) => (Ie.textContent ?? "").trim()).filter((Ie) => Ie && !/^(expand_more|expand_less|add_circle)$/.test(Ie))[0] ?? "" : "";
    }
    function H(x) {
      return x.className.includes("--expanded");
    }
    function q(x) {
      M.value = x, E().forEach(($, Q) => {
        const Ve = Q === x;
        if ($.classList.contains("va-collapse")) {
          const Ie = $.querySelector(".va-collapse__header-wrapper");
          Ie && (Ie.style.display = "none"), Ve !== H($) && Ie?.click();
        }
        $.style.display = Ve ? "" : "none";
      });
    }
    async function V() {
      await mi();
      const x = E();
      R.value = x.map(($, Q) => ({ label: W($) || `Abschnitt ${Q + 1}`, index: Q })), x.length && q(Math.min(M.value, x.length - 1));
    }
    function J(x) {
      y.value = "look", q(x);
    }
    const _e = j();
    async function Me() {
      const x = f.value?.unmodelledSections, $ = _e.value;
      if (!(!x || !$)) {
        await mi();
        for (const Q of O($))
          Q.style.display = x.includes(W(Q)) ? "" : "none";
      }
    }
    dn(y, (x) => {
      x === "rest" && Me();
    });
    let tn = {
      wrapperConfig: {},
      config: {}
    };
    function rn(x) {
      return k.value?.[x];
    }
    function se(x) {
      if (x)
        return typeof x.toArray == "function" ? x.toArray() : Array.isArray(x) ? [...x] : void 0;
    }
    function oe() {
      tn = { wrapperConfig: {}, config: {} };
      for (const x of ["wrapperConfig", "config"]) {
        const $ = rn(x);
        if ($)
          for (const [Q, Ve] of Object.entries($)) {
            const Ie = se(Ve), Sn = !!Ve && typeof Ve == "object" && "value" in Ve;
            tn[x][Q] = {
              field: Ve,
              hasValue: Sn,
              value: Sn ? Ve.value : void 0,
              list: Ie
            };
          }
      }
    }
    function de() {
      for (const x of ["wrapperConfig", "config"]) {
        const $ = rn(x);
        if ($)
          for (const [Q, Ve] of Object.entries(tn[x]))
            try {
              if (Ve.list) {
                const hn = $[Q];
                if (hn && typeof hn.clear == "function") {
                  hn.clear();
                  for (const Dn of Ve.list) hn.add(Dn);
                } else Array.isArray(hn) && hn.splice(0, hn.length, ...Ve.list);
                continue;
              }
              const Ie = $[Q], Sn = !!Ie && typeof Ie == "object" && "value" in Ie;
              Ve.hasValue && Sn ? Ie.value = Ve.value : $[Q] = Ve.field;
            } catch {
            }
      }
    }
    function ge() {
      de(), o("close");
    }
    function ae() {
      o("close");
    }
    const G = j(!1), K = X(() => G.value || !m.boardSize ? { width: "100%", height: "100%" } : {
      width: `${m.boardSize.width}px`,
      height: `${m.boardSize.height}px`,
      maxWidth: "100%",
      maxHeight: "100%"
    }), ue = X(
      () => m.boardSize ? `${Math.round(m.boardSize.width)} × ${Math.round(m.boardSize.height)} px, wie im Board` : "Größe des Boards nicht bekannt"
    ), le = j(cn());
    let Oe = !1;
    function cn() {
      const x = Number(localStorage.getItem("daanse.board.widgetSettingsWidth"));
      return Number.isFinite(x) && x >= 320 ? x : 400;
    }
    function ht(x) {
      Oe = !0, x.target.setPointerCapture?.(x.pointerId);
    }
    function It(x) {
      if (!Oe) return;
      const $ = window.innerWidth - x.clientX;
      le.value = Math.min(Math.max($, 320), Math.max(window.innerWidth - 360, 360));
    }
    function mt() {
      if (Oe) {
        Oe = !1;
        try {
          localStorage.setItem("daanse.board.widgetSettingsWidth", String(Math.round(le.value)));
        } catch {
        }
      }
    }
    function Vn(x) {
      le.value = Math.min(Math.max(le.value + x, 320), window.innerWidth - 360), mt();
    }
    const Fn = X(() => {
      const x = [], $ = [
        ["Rahmen", k.value?.wrapperConfig],
        ["Darstellung", k.value?.config]
      ];
      for (const [Q, Ve] of $)
        for (const [Ie, Sn] of Object.entries(Ve ?? {})) {
          const hn = Sn?.variable;
          hn && x.push({ group: Q, name: Ie, variable: String(hn?.name ?? hn) });
        }
      return x;
    }), Jt = X(() => Object.keys(k.value?.wrapperConfig ?? {}).length), Zn = X(() => k.value?.config?.datasourceId ? 1 : 0);
    function U(x) {
      x.key === "Escape" && ge();
    }
    return dn(y, (x) => {
      x === "look" && V();
    }), Hn(() => {
      oe(), V(), window.addEventListener("keydown", U), window.addEventListener("pointermove", It), window.addEventListener("pointerup", mt);
    }), ta(() => {
      window.removeEventListener("keydown", U), window.removeEventListener("pointermove", It), window.removeEventListener("pointerup", mt);
    }), (x, $) => (g(), Ae(Ks, { to: "body" }, [
      u("div", {
        class: "scrim",
        onClick: $[14] || ($[14] = Nn((Q) => ge(), ["self"]))
      }, [
        u("section", Xb, [
          u("div", Qb, [
            u("header", jb, [
              u("span", ey, N(k.value?.type ?? "Widget"), 1),
              u("code", ny, N(k.value?.uid), 1),
              $[15] || ($[15] = u("span", { class: "stage__spacer" }, null, -1)),
              u("div", ty, [
                u("button", {
                  type: "button",
                  class: Re({ on: !G.value }),
                  onClick: $[0] || ($[0] = (Q) => G.value = !1)
                }, "Boardgröße", 2),
                u("button", {
                  type: "button",
                  class: Re({ on: G.value }),
                  onClick: $[1] || ($[1] = (Q) => G.value = !0)
                }, "Füllen", 2)
              ])
            ]),
            u("div", ry, N(G.value ? "Auf die Fläche gestreckt" : ue.value), 1),
            u("div", iy, [
              u("div", {
                class: "preview",
                style: Yt(K.value)
              }, [
                fm(x.$slots, "preview", {}, void 0, !0)
              ], 4)
            ])
          ]),
          u("div", {
            class: "handle",
            role: "separator",
            "aria-orientation": "vertical",
            "aria-label": "Breite der Einstellungen",
            tabindex: "0",
            onPointerdown: Nn(ht, ["prevent"]),
            onKeydown: [
              $[2] || ($[2] = _i(Nn((Q) => Vn(16), ["prevent"]), ["left"])),
              $[3] || ($[3] = _i(Nn((Q) => Vn(-16), ["prevent"]), ["right"]))
            ]
          }, null, 32),
          u("div", {
            class: "side",
            style: Yt({ width: le.value + "px" })
          }, [
            u("nav", oy, [
              u("button", {
                type: "button",
                role: "tab",
                "aria-selected": y.value === "data",
                class: Re(["tab", { on: y.value === "data" }]),
                onClick: $[4] || ($[4] = (Q) => y.value = "data")
              }, [
                $[16] || ($[16] = ie(" Daten ", -1)),
                u("span", ly, N(Zn.value), 1)
              ], 10, ay),
              !R.value.length && F.value ? (g(), C("button", {
                key: 0,
                type: "button",
                role: "tab",
                "aria-selected": y.value === "look",
                class: Re(["tab", { on: y.value === "look" }]),
                onClick: $[5] || ($[5] = (Q) => y.value = "look")
              }, " Darstellung ", 10, sy)) : ee("", !0),
              (g(!0), C(ke, null, Fe(R.value, (Q) => (g(), C("button", {
                key: Q.index,
                type: "button",
                role: "tab",
                "aria-selected": y.value === "look" && M.value === Q.index,
                class: Re(["tab", { on: y.value === "look" && M.value === Q.index }]),
                onClick: (Ve) => J(Q.index)
              }, N(Q.label), 11, uy))), 128)),
              Y.value ? (g(), C("button", {
                key: 1,
                type: "button",
                role: "tab",
                "aria-selected": y.value === "rest",
                class: Re(["tab", { on: y.value === "rest" }]),
                onClick: $[6] || ($[6] = (Q) => y.value = "rest")
              }, " Weiteres ", 10, dy)) : ee("", !0),
              u("button", {
                type: "button",
                role: "tab",
                "aria-selected": y.value === "frame",
                class: Re(["tab", { on: y.value === "frame" }]),
                onClick: $[7] || ($[7] = (Q) => y.value = "frame")
              }, [
                $[17] || ($[17] = ie(" Rahmen ", -1)),
                u("span", fy, N(Jt.value), 1)
              ], 10, cy),
              u("button", {
                type: "button",
                role: "tab",
                "aria-selected": y.value === "variables",
                class: Re(["tab", { on: y.value === "variables" }]),
                onClick: $[8] || ($[8] = (Q) => y.value = "variables")
              }, [
                $[18] || ($[18] = ie(" Variablen ", -1)),
                u("span", gy, N(Fn.value.length), 1)
              ], 10, py)
            ]),
            k.value ? (g(), C("div", vy, [
              y.value === "data" ? (g(), C(ke, { key: 0 }, [
                L(v(On), {
                  modelValue: k.value.config.datasourceId,
                  "onUpdate:modelValue": $[9] || ($[9] = (Q) => k.value.config.datasourceId = Q),
                  label: "Datenquelle",
                  class: "pick",
                  options: v(S),
                  clearable: ""
                }, null, 8, ["modelValue", "options"]),
                $[19] || ($[19] = u("p", { class: "note" }, " Woher dieses Widget seine Werte nimmt. Ohne Datenquelle zeigt es nur, was fest eingestellt ist. ", -1))
              ], 64)) : ee("", !0),
              Kt(u("div", {
                ref_key: "lookHost",
                ref: z
              }, [
                f.value ? (g(), Ae(v(yi), {
                  key: 0,
                  modelValue: k.value.config,
                  "onUpdate:modelValue": $[10] || ($[10] = (Q) => k.value.config = Q),
                  create: f.value.create,
                  "ui-model-xmi": f.value.xmi,
                  "domain-package": f.value.ePackage(),
                  "ui-model-uri": f.value.uri,
                  "entry-forms": f.value.entryForms
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : (g(), Ae(Kn(v(I)[k.value.type ?? ""]?.settingsComponent), {
                  modelValue: k.value.config,
                  "onUpdate:modelValue": $[11] || ($[11] = (Q) => k.value.config = Q),
                  key: k.value.uid,
                  dataSources: v(S)
                }, null, 8, ["modelValue", "dataSources"]))
              ], 512), [
                [Yo, y.value === "look"]
              ]),
              Kt(u("div", {
                ref_key: "restHost",
                ref: _e
              }, [
                $[20] || ($[20] = u("p", { class: "rest__note" }, " Einstellungen, die dieses Widget selbst mitbringt und die sich nicht als Feld beschreiben lassen. ", -1)),
                Y.value ? (g(), Ae(Kn(v(I)[k.value.type ?? ""]?.settingsComponent), {
                  modelValue: k.value.config,
                  "onUpdate:modelValue": $[12] || ($[12] = (Q) => k.value.config = Q),
                  key: k.value.uid + "-rest",
                  dataSources: v(S)
                }, null, 8, ["modelValue", "dataSources"])) : ee("", !0)
              ], 512), [
                [Yo, y.value === "rest"]
              ]),
              Kt(u("div", null, [
                L(v(yi), {
                  modelValue: k.value.wrapperConfig,
                  "onUpdate:modelValue": $[13] || ($[13] = (Q) => k.value.wrapperConfig = Q),
                  create: () => new (v(Km))(),
                  "ui-model-xmi": v(Hm),
                  "domain-package": v(Gm).eINSTANCE,
                  "ui-model-uri": "/wrapper-settings.ui.xmi"
                }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package"])
              ], 512), [
                [Yo, y.value === "frame"]
              ]),
              y.value === "variables" ? (g(), C(ke, { key: 1 }, [
                Fn.value.length ? (g(), C("table", hy, [
                  $[21] || ($[21] = u("thead", null, [
                    u("tr", null, [
                      u("th", null, "Feld"),
                      u("th", null, "Bereich"),
                      u("th", null, "Variable")
                    ])
                  ], -1)),
                  u("tbody", null, [
                    (g(!0), C(ke, null, Fe(Fn.value, (Q) => (g(), C("tr", {
                      key: Q.group + Q.name
                    }, [
                      u("td", my, N(Q.name), 1),
                      u("td", null, N(Q.group), 1),
                      u("td", _y, N(Q.variable), 1)
                    ]))), 128))
                  ])
                ])) : (g(), C("p", by, [...$[22] || ($[22] = [
                  ie(" Kein Feld dieses Widgets hängt an einer Variablen. Über das ", -1),
                  u("span", { class: "var-mark" }, "{x}", -1),
                  ie(" neben einem Feld lässt sich eines binden. ", -1)
                ])]))
              ], 64)) : ee("", !0)
            ])) : ee("", !0),
            u("footer", yy, [
              $[25] || ($[25] = u("span", { class: "foot__hint" }, "Änderungen greifen erst mit „Fertig“", -1)),
              $[26] || ($[26] = u("span", { class: "stage__spacer" }, null, -1)),
              L(v(me), {
                size: "sm",
                onClick: ge
              }, {
                default: te(() => [...$[23] || ($[23] = [
                  ie("Verwerfen", -1)
                ])]),
                _: 1
              }),
              L(v(me), {
                intent: "primary",
                size: "sm",
                onClick: ae
              }, {
                default: te(() => [...$[24] || ($[24] = [
                  ie("Fertig", -1)
                ])]),
                _: 1
              })
            ])
          ], 4)
        ])
      ])
    ]));
  }
}), xy = /* @__PURE__ */ Ke(ky, [["__scopeId", "data-v-67bd2420"]]), Sy = {
  class: "page-settings",
  "aria-label": "Seite einrichten"
}, Cy = { class: "head" }, $y = { class: "body" }, Ay = {
  key: 0,
  class: "missing"
}, Iy = { class: "group" }, Ry = { class: "group" }, Ey = { class: "group" }, Ty = { class: "group" }, Ly = { class: "ident" }, Oy = { class: "foot" }, Vy = /* @__PURE__ */ He({
  __name: "PageSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Zt(["close"], ["update:modelValue"]),
  setup(p, { emit: _ }) {
    const o = wr(p, "modelValue"), k = _, m = xe(xr), S = xe(xi), c = j(null), I = X(() => S?.getAllLayouts() ?? []), y = X(
      () => I.value.find(
        (O) => O.id === "org.eclipse.daanse.board.app.ui.vue.layouts.base"
      ) ?? I.value[0]
    ), f = X({
      get: () => c.value?.layoutId ?? "",
      set: (O) => {
        c.value && (c.value.layoutId = O);
      }
    }), w = X(
      () => c.value?.layoutId ? S?.getLayout(c.value.layoutId) : void 0
    ), Y = [
      { uid: "auto", name: "Auto" },
      { uid: "cover", name: "Füllend" },
      { uid: "contain", name: "Einpassend" }
    ], F = [
      { uid: "no-repeat", name: "Nicht wiederholen" },
      { uid: "repeat", name: "Wiederholen" },
      { uid: "repeat-x", name: "Waagerecht wiederholen" },
      { uid: "repeat-y", name: "Senkrecht wiederholen" }
    ], z = [
      { uid: "center", name: "Mitte" },
      { uid: "top", name: "Oben" },
      { uid: "bottom", name: "Unten" },
      { uid: "left", name: "Links" },
      { uid: "right", name: "Rechts" },
      { uid: "top left", name: "Oben links" },
      { uid: "top right", name: "Oben rechts" },
      { uid: "bottom left", name: "Unten links" },
      { uid: "bottom right", name: "Unten rechts" }
    ], R = X(() => !!c.value?.backgroundImage?.trim());
    function M() {
      if (!o.value || !m) {
        c.value = null;
        return;
      }
      let O;
      try {
        O = m.getPage(o.value);
      } catch {
        O = void 0;
      }
      c.value = O ? {
        id: O.id,
        name: O.name,
        description: O.description,
        icon: O.icon,
        visibleInNavigation: O.visibleInNavigation ?? !0,
        layoutId: O.layoutId ?? y.value?.id,
        layoutSettings: O.layoutSettings,
        backgroundColor: O.backgroundColor,
        backgroundImage: O.backgroundImage,
        backgroundSize: O.backgroundSize,
        backgroundPosition: O.backgroundPosition,
        backgroundRepeat: O.backgroundRepeat
      } : null;
    }
    return Hn(M), dn(o, M), dn(
      c,
      () => {
        c.value && m?.updatePage(c.value);
      },
      { deep: !0 }
    ), (O, E) => (g(), C("aside", Sy, [
      u("header", Cy, [
        E[14] || (E[14] = u("h2", { class: "head__title" }, "Seite einrichten", -1)),
        u("button", {
          type: "button",
          class: "head__close",
          "aria-label": "Schließen",
          onClick: E[0] || (E[0] = (W) => k("close"))
        }, " × ")
      ]),
      u("div", $y, [
        c.value ? (g(), C(ke, { key: 1 }, [
          u("section", Iy, [
            E[15] || (E[15] = u("h3", { class: "group__label" }, "Seite", -1)),
            L(v(Xe), {
              modelValue: c.value.name,
              "onUpdate:modelValue": E[1] || (E[1] = (W) => c.value.name = W),
              label: "Name"
            }, null, 8, ["modelValue"]),
            L(v(Xe), {
              modelValue: c.value.description,
              "onUpdate:modelValue": E[2] || (E[2] = (W) => c.value.description = W),
              label: "Beschreibung"
            }, null, 8, ["modelValue"]),
            L(v(Xe), {
              modelValue: c.value.icon,
              "onUpdate:modelValue": E[3] || (E[3] = (W) => c.value.icon = W),
              label: "Symbol",
              placeholder: "Name eines Material-Icons"
            }, null, 8, ["modelValue"])
          ]),
          u("section", Ry, [
            E[16] || (E[16] = u("h3", { class: "group__label" }, "Layout", -1)),
            L(v(On), {
              modelValue: f.value,
              "onUpdate:modelValue": E[4] || (E[4] = (W) => f.value = W),
              label: "Layout",
              options: I.value,
              "value-key": "id",
              "label-key": "name"
            }, null, 8, ["modelValue", "options"]),
            w.value?.settingsForm ? (g(), Ae(v(yi), {
              key: 0,
              modelValue: c.value.layoutSettings,
              "onUpdate:modelValue": E[5] || (E[5] = (W) => c.value.layoutSettings = W),
              create: w.value.settingsForm.create,
              "ui-model-xmi": w.value.settingsForm.xmi,
              "domain-package": w.value.settingsForm.ePackage(),
              "ui-model-uri": w.value.settingsForm.uri,
              "entry-forms": w.value.settingsForm.entryForms
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri", "entry-forms"])) : w.value?.settings ? (g(), Ae(Kn(w.value.settings), {
              key: 1,
              modelValue: c.value.layoutSettings,
              "onUpdate:modelValue": E[6] || (E[6] = (W) => c.value.layoutSettings = W)
            }, null, 8, ["modelValue"])) : ee("", !0)
          ]),
          u("section", Ey, [
            E[17] || (E[17] = u("h3", { class: "group__label" }, "Hintergrund", -1)),
            L(v(Xs), {
              modelValue: c.value.backgroundColor,
              "onUpdate:modelValue": E[7] || (E[7] = (W) => c.value.backgroundColor = W),
              label: "Farbe",
              stacked: ""
            }, null, 8, ["modelValue"]),
            L(v(Xe), {
              modelValue: c.value.backgroundImage,
              "onUpdate:modelValue": E[8] || (E[8] = (W) => c.value.backgroundImage = W),
              label: "Bild",
              placeholder: "Adresse eines Bildes"
            }, null, 8, ["modelValue"]),
            R.value ? (g(), C(ke, { key: 0 }, [
              L(v(On), {
                modelValue: c.value.backgroundSize,
                "onUpdate:modelValue": E[9] || (E[9] = (W) => c.value.backgroundSize = W),
                label: "Größe",
                options: Y
              }, null, 8, ["modelValue"]),
              L(v(On), {
                modelValue: c.value.backgroundRepeat,
                "onUpdate:modelValue": E[10] || (E[10] = (W) => c.value.backgroundRepeat = W),
                label: "Wiederholung",
                options: F
              }, null, 8, ["modelValue"]),
              L(v(On), {
                modelValue: c.value.backgroundPosition,
                "onUpdate:modelValue": E[11] || (E[11] = (W) => c.value.backgroundPosition = W),
                label: "Position",
                options: z
              }, null, 8, ["modelValue"])
            ], 64)) : ee("", !0)
          ]),
          u("section", Ty, [
            E[18] || (E[18] = u("h3", { class: "group__label" }, "Navigation", -1)),
            L(v(ra), {
              modelValue: c.value.visibleInNavigation,
              "onUpdate:modelValue": E[12] || (E[12] = (W) => c.value.visibleInNavigation = W),
              label: "In der Navigation zeigen"
            }, null, 8, ["modelValue"])
          ]),
          u("p", Ly, [
            E[19] || (E[19] = ie(" Kennung ", -1)),
            u("code", null, N(c.value.id), 1)
          ])
        ], 64)) : (g(), C("p", Ay, " Diese Seite ist nicht mehr da. Wähle oben eine andere. "))
      ]),
      u("footer", Oy, [
        L(v(me), {
          intent: "primary",
          onClick: E[13] || (E[13] = (W) => k("close"))
        }, {
          default: te(() => [...E[20] || (E[20] = [
            ie("Fertig", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Dy = /* @__PURE__ */ Ke(Vy, [["__scopeId", "data-v-9ea0fdd8"]]), By = {
  ref: "board",
  class: "editor"
}, Wy = { class: "report-container dottet" }, My = /* @__PURE__ */ He({
  __name: "EditReport",
  setup(p) {
    const _ = j(""), k = kr().params.pageid ?? "", m = wm(k || ""), S = m.widgets, c = j([]), I = xe("endpointfinder", null), y = () => {
      I();
    }, f = X(() => !!I), { settingsFor: w, closeSettings: Y } = ou(), F = (E) => {
      _.value = E;
    }, z = X(() => {
      const E = S.value.find((W) => W.uid === _.value);
      return E || c.value.find((W) => W.uid === _.value);
    }), R = X(() => {
      const E = m.layout.value.find((W) => W.id === _.value);
      if (!(!E?.width || !E?.height))
        return { width: E.width, height: E.height };
    }), { visible: M, hide: O } = au();
    return (E, W) => (g(), C("div", By, [
      v(M) ? (g(), Ae(v($m), {
        key: 0,
        title: "Widgets",
        "remember-as": "daanse.board.palette",
        initial: { x: 0, y: 0, w: 240, h: 460, dock: "left" },
        "min-width": 180,
        "max-width": 420,
        "min-height": 200,
        dockable: "",
        onClose: v(O)
      }, {
        actions: te(() => [
          f.value ? (g(), C("button", {
            key: 0,
            type: "button",
            class: "palette__act",
            title: "Endpunkte suchen",
            onPointerdown: W[0] || (W[0] = Nn(() => {
            }, ["stop"])),
            onClick: W[1] || (W[1] = (H) => y())
          }, [
            L(v(Ge), {
              name: "travel_explore",
              size: "sm"
            })
          ], 32)) : ee("", !0)
        ]),
        default: te(() => [
          L(Jb)
        ]),
        _: 1
      }, 8, ["onClose"])) : ee("", !0),
      u("div", Wy, [
        L(mu, {
          pageId: v(k),
          onOpenWidgetSettings: F
        }, null, 8, ["pageId"]),
        L(pm, { duration: 150 }, {
          default: te(() => [
            v(w) ? (g(), Ae(Dy, {
              key: 0,
              modelValue: v(w),
              "onUpdate:modelValue": W[2] || (W[2] = (H) => gm(w) ? w.value = H : null),
              onClose: v(Y)
            }, null, 8, ["modelValue", "onClose"])) : ee("", !0)
          ]),
          _: 1
        })
      ]),
      _.value && z.value ? (g(), Ae(xy, {
        key: 1,
        modelValue: z.value,
        "onUpdate:modelValue": W[3] || (W[3] = (H) => z.value = H),
        "board-size": R.value,
        onClose: W[4] || (W[4] = (H) => _.value = "")
      }, {
        preview: te(() => [
          L(v(Ym), {
            widget: z.value,
            "edit-enabled": !1
          }, null, 8, ["widget"])
        ]),
        _: 1
      }, 8, ["modelValue", "board-size"])) : ee("", !0)
    ], 512));
  }
}), Gs = /* @__PURE__ */ Ke(My, [["__scopeId", "data-v-bd444b0c"]]), Gt = Tm({
  history: Lm("/"),
  routes: [
    // Static core routes (routes will be added dynamically via router.addRoute in main.ts)
    {
      path: "/",
      name: "home",
      component: zs
    },
    {
      path: "/edit",
      name: "edit",
      component: Gs
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
      component: zb
    },
    {
      path: "/:id/data",
      redirect: { name: "data" }
    },
    {
      path: "/page/:pageid/edit",
      name: "pageEdit",
      component: Gs
    },
    {
      path: "/page/:pageid",
      name: "page",
      component: zs
    }
  ]
}), Py = { class: "variables" }, Uy = { class: "variables__head" }, Ny = { class: "reach__title" }, Fy = { class: "reach__lead" }, zy = {
  key: 0,
  class: "rows"
}, qy = { class: "row__name" }, Gy = { class: "row__type" }, Hy = { class: "row__value" }, Ky = { class: "row__tools" }, Yy = {
  key: 1,
  class: "reach__empty"
}, Zy = { class: "form" }, Jy = { class: "confirm__text" }, Xy = /* @__PURE__ */ He({
  __name: "Configuration",
  setup(p) {
    const _ = xe(nu), o = xe(Yn), k = xe(Symbol.for(Hs)), m = xn(o, (ge) => ge.variables), S = xn(o, (ge) => ge.pages), c = j(0), I = () => c.value += 1;
    Hn(() => k?.on(Ms.VariableUpdated, I)), ta(() => k?.off(Ms.VariableUpdated, I));
    function y(ge) {
      c.value;
      try {
        const G = _.getVariableById(ge.uid)?.value;
        return G == null ? "" : typeof G == "object" ? JSON.stringify(G) : String(G);
      } catch {
        return "nur auf seiner Seite lesbar";
      }
    }
    const f = X(() => {
      const ge = m.value.filter((K) => (K.scope ?? "global") === "global"), ae = S.value.map((K) => ({
        title: K.name,
        lead: "Nur auf diesem Board",
        page: K,
        rows: m.value.filter((ue) => ue.scope === "page" && ue.page === K)
      })).filter((K) => K.rows.length > 0), G = m.value.filter((K) => K.scope === "page" && !K.page);
      return [
        { title: "Überall", lead: "Auf jedem Board lesbar", page: void 0, rows: ge },
        ...ae,
        ...G.length ? [{ title: "Ohne Board", lead: "Das Board dazu gibt es nicht mehr", page: void 0, rows: G }] : []
      ];
    }), w = j([]);
    Hn(() => w.value = _.getRegisteredVariableTypes());
    const Y = X(() => [
      { text: "Überall", value: "" },
      ...S.value.map((ge) => ({ text: ge.name, value: ge.id }))
    ]), F = [
      { text: "Von außen beschreibbar", value: "external-writable" },
      { text: "Nur auf seiner Seite", value: "page-only" },
      { text: "Nur lesbar", value: "readonly" }
    ], z = j(!1), R = j(null), M = j(""), O = j(""), E = j(""), W = j("external-writable"), H = j({}), q = X(() => R.value !== null), V = X(
      () => M.value ? _.getVariableIdentifiers(M.value)?.settingsForm : void 0
    ), J = X(
      () => M.value ? _.getVariableIdentifiers(M.value)?.Settings : null
    );
    function _e() {
      R.value = null, M.value = w.value[0] ?? "", O.value = "", E.value = "Variable " + Math.random().toString(36).substring(7), W.value = "external-writable", H.value = {}, z.value = !0;
    }
    function Me(ge) {
      R.value = ge.uid, M.value = ge.type ?? "", O.value = ge.page?.id ?? "", E.value = ge.name, W.value = ge.accessMode ?? "external-writable";
      const ae = _.getVariableById(ge.uid), { name: G, ...K } = {
        ...ge.definition ?? {},
        ...ae?.serialize?.() ?? {}
      };
      H.value = K, z.value = !0;
    }
    function tn(ge) {
      if (!Zm(ge)) return { ...ge ?? {} };
      const ae = {};
      for (const G of ge.eClass().getEAllStructuralFeatures()) {
        const K = ge.eGet(G);
        K !== void 0 && (ae[G.getName()] = K);
      }
      return ae;
    }
    function rn() {
      H.value = {};
    }
    function se() {
      _.registerVariable(E.value, M.value, {
        ...tn(H.value),
        uid: R.value ?? void 0,
        accessMode: W.value,
        scope: O.value ? "page" : "global",
        pageId: O.value || void 0
      }), z.value = !1, R.value = null;
    }
    const oe = j(null);
    function de() {
      oe.value && _.removeVariable(oe.value.uid), oe.value = null;
    }
    return (ge, ae) => (g(), C("div", Py, [
      u("header", Uy, [
        ae[11] || (ae[11] = u("div", null, [
          u("h1", { class: "variables__title" }, "Variablen"),
          u("p", { class: "variables__lead" }, " Ein benannter Wert, den Widgets und Datenquellen lesen. Manche gelten überall, manche nur auf einem Board. ")
        ], -1)),
        L(v(me), {
          intent: "primary",
          onClick: _e
        }, {
          default: te(() => [
            L(v(Ge), {
              name: "add",
              size: "sm"
            }),
            ae[10] || (ae[10] = ie("Variable anlegen ", -1))
          ]),
          _: 1
        })
      ]),
      (g(!0), C(ke, null, Fe(f.value, (G) => (g(), C("section", {
        key: G.title,
        class: "reach"
      }, [
        u("h2", Ny, [
          ie(N(G.title), 1),
          u("span", Fy, N(G.lead), 1)
        ]),
        G.rows.length ? (g(), C("ul", zy, [
          (g(!0), C(ke, null, Fe(G.rows, (K) => (g(), C("li", {
            key: K.uid,
            class: "row"
          }, [
            u("span", qy, N(K.name), 1),
            u("span", Gy, N(K.type), 1),
            u("span", Hy, N(y(K)), 1),
            u("span", Ky, [
              L(v(me), {
                intent: "quiet",
                size: "sm",
                title: "Variable bearbeiten",
                onClick: (ue) => Me(K)
              }, {
                default: te(() => [
                  L(v(Ge), {
                    name: "edit",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"]),
              L(v(me), {
                intent: "quiet",
                size: "sm",
                title: "Variable löschen",
                onClick: (ue) => oe.value = K
              }, {
                default: te(() => [
                  L(v(Ge), {
                    name: "delete",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]))), 128))
        ])) : (g(), C("p", Yy, "Noch keine."))
      ]))), 128)),
      L(v(yr), {
        modelValue: z.value,
        "onUpdate:modelValue": ae[7] || (ae[7] = (G) => z.value = G),
        title: q.value ? "Variable bearbeiten" : "Variable anlegen",
        size: "md"
      }, {
        actions: te(() => [
          L(v(me), {
            intent: "quiet",
            onClick: ae[6] || (ae[6] = (G) => z.value = !1)
          }, {
            default: te(() => [...ae[12] || (ae[12] = [
              ie("Abbrechen", -1)
            ])]),
            _: 1
          }),
          L(v(me), {
            intent: "primary",
            onClick: se
          }, {
            default: te(() => [
              ie(N(q.value ? "Speichern" : "Anlegen"), 1)
            ]),
            _: 1
          })
        ]),
        default: te(() => [
          u("div", Zy, [
            L(v(On), {
              modelValue: M.value,
              "onUpdate:modelValue": [
                ae[0] || (ae[0] = (G) => M.value = G),
                rn
              ],
              label: "Typ",
              options: w.value
            }, null, 8, ["modelValue", "options"]),
            L(v(On), {
              modelValue: O.value,
              "onUpdate:modelValue": ae[1] || (ae[1] = (G) => O.value = G),
              label: "Gilt",
              options: Y.value,
              "label-key": "text",
              "value-key": "value"
            }, null, 8, ["modelValue", "options"]),
            L(v(On), {
              modelValue: W.value,
              "onUpdate:modelValue": ae[2] || (ae[2] = (G) => W.value = G),
              label: "Beschreibbar",
              options: F,
              "label-key": "text",
              "value-key": "value"
            }, null, 8, ["modelValue"]),
            L(v(Xe), {
              modelValue: E.value,
              "onUpdate:modelValue": ae[3] || (ae[3] = (G) => E.value = G),
              label: "Name"
            }, null, 8, ["modelValue"]),
            V.value ? (g(), Ae(v(yi), {
              key: M.value,
              modelValue: H.value,
              "onUpdate:modelValue": ae[4] || (ae[4] = (G) => H.value = G),
              create: V.value.create,
              "ui-model-xmi": V.value.xmi,
              "domain-package": V.value.ePackage(),
              "ui-model-uri": V.value.uri
            }, null, 8, ["modelValue", "create", "ui-model-xmi", "domain-package", "ui-model-uri"])) : J.value ? (g(), Ae(Kn(J.value), {
              key: 1,
              modelValue: H.value,
              "onUpdate:modelValue": ae[5] || (ae[5] = (G) => H.value = G)
            }, null, 8, ["modelValue"])) : ee("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]),
      L(v(yr), {
        "model-value": !!oe.value,
        size: "sm",
        "onUpdate:modelValue": ae[9] || (ae[9] = (G) => oe.value = null)
      }, {
        header: te(() => [
          L(v(Ge), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          ae[13] || (ae[13] = u("h2", { class: "confirm__title" }, "Variable löschen", -1))
        ]),
        actions: te(() => [
          L(v(me), {
            intent: "quiet",
            onClick: ae[8] || (ae[8] = (G) => oe.value = null)
          }, {
            default: te(() => [...ae[14] || (ae[14] = [
              ie("Abbrechen", -1)
            ])]),
            _: 1
          }),
          L(v(me), {
            intent: "danger",
            onClick: de
          }, {
            default: te(() => [...ae[15] || (ae[15] = [
              ie("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: te(() => [
          u("p", Jy, N(oe.value?.name) + " wird entfernt. Widgets, die darauf zeigen, finden sie danach nicht mehr. ", 1)
        ]),
        _: 1
      }, 8, ["model-value"])
    ]));
  }
}), Qy = /* @__PURE__ */ Ke(Xy, [["__scopeId", "data-v-9292252d"]]), jy = { class: "appearance" }, ew = { class: "panel" }, nw = { class: "panel__head" }, tw = { class: "panel__tools" }, rw = {
  key: 0,
  class: "changed"
}, iw = {
  key: 0,
  class: "gallery"
}, ow = { class: "demo" }, aw = { class: "demo__row" }, lw = { class: "demo__row" }, sw = { class: "demo" }, uw = { class: "demo__form" }, dw = { class: "demo" }, cw = { class: "demo__row" }, fw = { class: "demo__row" }, pw = {
  key: 1,
  class: "body"
}, gw = {
  class: "themes",
  "aria-label": "Themen"
}, vw = ["onClick"], hw = {
  class: "theme__strip",
  "aria-hidden": "true"
}, mw = { class: "theme__name" }, _w = { class: "theme__note" }, bw = { class: "tokens" }, yw = ["aria-expanded", "onClick"], ww = { class: "group__twist" }, kw = { class: "group__label" }, xw = { class: "group__count" }, Sw = {
  key: 0,
  class: "group__body"
}, Cw = {
  key: 0,
  class: "group__note"
}, $w = {
  key: 1,
  class: "token__swatch token__swatch--none",
  "aria-hidden": "true"
}, Aw = { class: "token__text" }, Iw = { class: "token__name" }, Rw = { class: "token__role" }, Ew = ["value", "aria-label", "onInput"], Tw = ["value", "aria-label", "onChange"], Lw = ["disabled", "title", "onClick"], Ow = /* @__PURE__ */ He({
  __name: "Appearance",
  setup(p) {
    const {
      themes: _,
      activeTheme: o,
      overrides: k,
      valueOf: m,
      isOverridden: S,
      selectTheme: c,
      setToken: I,
      clearToken: y,
      clearAllTokens: f,
      exportTheme: w
    } = gu(), Y = j(wi[0].id), F = j(!1), z = j("tokens"), R = j({
      text: "Bodenfeuchte Feld 3",
      number: 38.4,
      choice: "ogcsta",
      colour: "#4fa3d1",
      when: "2026-08-28",
      amount: 60,
      on: !0,
      checked: !0,
      note: ""
    }), M = [
      { uid: "ogcsta", name: "OGC SensorThings" },
      { uid: "xmla", name: "XMLA / MDX" },
      { uid: "rest", name: "REST" }
    ], O = X(() => Object.keys(k.value).length);
    function E(q) {
      return [
        q.tokens["color-bg"],
        q.tokens["color-pane"],
        q.tokens["color-accent"],
        q.tokens["color-brand"],
        q.tokens["color-ok"]
      ].filter(Boolean);
    }
    function W(q) {
      return q.kind === "color";
    }
    async function H() {
      try {
        await navigator.clipboard.writeText(JSON.stringify(w(), null, 2)), F.value = !0, setTimeout(() => F.value = !1, 2e3);
      } catch {
        F.value = !1;
      }
    }
    return (q, V) => (g(), C("div", jy, [
      u("div", ew, [
        u("header", nw, [
          u("button", {
            type: "button",
            class: Re(["head__tab", { on: z.value === "tokens" }]),
            onClick: V[0] || (V[0] = (J) => z.value = "tokens")
          }, " Tokens ", 2),
          u("button", {
            type: "button",
            class: Re(["head__tab", { on: z.value === "controls" }]),
            onClick: V[1] || (V[1] = (J) => z.value = "controls")
          }, " Elemente ", 2),
          u("span", tw, [
            O.value ? (g(), C("span", rw, N(O.value) + " " + N(O.value === 1 ? "Wert geändert" : "Werte geändert"), 1)) : ee("", !0),
            O.value ? (g(), C("button", {
              key: 1,
              class: "btn",
              type: "button",
              onClick: V[2] || (V[2] = //@ts-ignore
              (...J) => v(f) && v(f)(...J))
            }, " Alle zurücksetzen ")) : ee("", !0),
            u("button", {
              class: "btn",
              type: "button",
              onClick: H
            }, N(F.value ? "Kopiert" : "Als JSON kopieren"), 1)
          ])
        ]),
        z.value === "controls" ? (g(), C("div", iw, [
          V[31] || (V[31] = u("p", { class: "gallery__lead" }, " Dieselben Elemente, aus denen die App gebaut ist. Was drüben an Tokens geändert wird, steht hier sofort. ", -1)),
          u("section", ow, [
            V[22] || (V[22] = u("h3", { class: "demo__title" }, "Knöpfe", -1)),
            u("div", aw, [
              L(v(me), null, {
                default: te(() => [...V[13] || (V[13] = [
                  ie("Standard", -1)
                ])]),
                _: 1
              }),
              L(v(me), { intent: "primary" }, {
                default: te(() => [...V[14] || (V[14] = [
                  ie("Speichern", -1)
                ])]),
                _: 1
              }),
              L(v(me), { intent: "quiet" }, {
                default: te(() => [...V[15] || (V[15] = [
                  ie("Abbrechen", -1)
                ])]),
                _: 1
              }),
              L(v(me), { intent: "danger" }, {
                default: te(() => [...V[16] || (V[16] = [
                  ie("Löschen", -1)
                ])]),
                _: 1
              }),
              L(v(me), { disabled: "" }, {
                default: te(() => [...V[17] || (V[17] = [
                  ie("Gesperrt", -1)
                ])]),
                _: 1
              }),
              L(v(me), { busy: "" }, {
                default: te(() => [...V[18] || (V[18] = [
                  ie("Lädt", -1)
                ])]),
                _: 1
              })
            ]),
            u("div", lw, [
              L(v(me), { size: "sm" }, {
                default: te(() => [...V[19] || (V[19] = [
                  ie("Klein", -1)
                ])]),
                _: 1
              }),
              L(v(me), { size: "md" }, {
                default: te(() => [...V[20] || (V[20] = [
                  ie("Mittel", -1)
                ])]),
                _: 1
              }),
              L(v(me), { size: "lg" }, {
                default: te(() => [...V[21] || (V[21] = [
                  ie("Groß", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          u("section", sw, [
            V[23] || (V[23] = u("h3", { class: "demo__title" }, "Eingaben", -1)),
            u("div", uw, [
              L(v(Xe), {
                modelValue: R.value.text,
                "onUpdate:modelValue": V[3] || (V[3] = (J) => R.value.text = J),
                label: "Titel"
              }, null, 8, ["modelValue"]),
              L(v(Xe), {
                modelValue: R.value.number,
                "onUpdate:modelValue": V[4] || (V[4] = (J) => R.value.number = J),
                label: "Messwert",
                type: "number",
                suffix: "%"
              }, null, 8, ["modelValue"]),
              L(v(On), {
                modelValue: R.value.choice,
                "onUpdate:modelValue": V[5] || (V[5] = (J) => R.value.choice = J),
                label: "Datenquelle",
                options: M
              }, null, 8, ["modelValue"]),
              L(v(Xs), {
                modelValue: R.value.colour,
                "onUpdate:modelValue": V[6] || (V[6] = (J) => R.value.colour = J),
                label: "Farbe"
              }, null, 8, ["modelValue"]),
              L(v(Am), {
                modelValue: R.value.when,
                "onUpdate:modelValue": V[7] || (V[7] = (J) => R.value.when = J),
                label: "Stichtag"
              }, null, 8, ["modelValue"]),
              L(v(Im), {
                modelValue: R.value.amount,
                "onUpdate:modelValue": V[8] || (V[8] = (J) => R.value.amount = J),
                label: "Deckung",
                suffix: "%"
              }, null, 8, ["modelValue"]),
              L(v(Xe), {
                modelValue: R.value.note,
                "onUpdate:modelValue": V[9] || (V[9] = (J) => R.value.note = J),
                label: "Notiz",
                rows: 2,
                stacked: ""
              }, null, 8, ["modelValue"]),
              L(v(Xe), {
                modelValue: R.value.text,
                "onUpdate:modelValue": V[10] || (V[10] = (J) => R.value.text = J),
                label: "Mit Fehler",
                error: "Der Name ist schon vergeben."
              }, null, 8, ["modelValue"])
            ])
          ]),
          u("section", dw, [
            V[30] || (V[30] = u("h3", { class: "demo__title" }, "Schalter und Marken", -1)),
            u("div", cw, [
              L(v(Rm), {
                modelValue: R.value.checked,
                "onUpdate:modelValue": V[11] || (V[11] = (J) => R.value.checked = J),
                label: "Im Board zeigen"
              }, null, 8, ["modelValue"]),
              L(v(ra), {
                modelValue: R.value.on,
                "onUpdate:modelValue": V[12] || (V[12] = (J) => R.value.on = J),
                label: "Automatisch aktualisieren"
              }, null, 8, ["modelValue"])
            ]),
            u("div", fw, [
              L(v(qt), null, {
                default: te(() => [...V[24] || (V[24] = [
                  ie("neutral", -1)
                ])]),
                _: 1
              }),
              L(v(qt), { tone: "accent" }, {
                default: te(() => [...V[25] || (V[25] = [
                  ie("geladen", -1)
                ])]),
                _: 1
              }),
              L(v(qt), { tone: "ok" }, {
                default: te(() => [...V[26] || (V[26] = [
                  ie("im Rahmen", -1)
                ])]),
                _: 1
              }),
              L(v(qt), { tone: "warn" }, {
                default: te(() => [...V[27] || (V[27] = [
                  ie("prüfen", -1)
                ])]),
                _: 1
              }),
              L(v(qt), { tone: "err" }, {
                default: te(() => [...V[28] || (V[28] = [
                  ie("getrennt", -1)
                ])]),
                _: 1
              }),
              L(v(qt), {
                tone: "accent",
                numeric: ""
              }, {
                default: te(() => [...V[29] || (V[29] = [
                  ie("14", -1)
                ])]),
                _: 1
              })
            ]),
            L(v(Em), { label: "Trenner" })
          ])
        ])) : (g(), C("div", pw, [
          u("aside", gw, [
            (g(!0), C(ke, null, Fe(v(_), (J) => (g(), C("button", {
              key: J.id,
              type: "button",
              class: Re(["theme", { on: J.id === v(o).id }]),
              onClick: (_e) => v(c)(J.id)
            }, [
              u("span", hw, [
                (g(!0), C(ke, null, Fe(E(J), (_e, Me) => (g(), C("i", {
                  key: Me,
                  style: Yt({ background: _e })
                }, null, 4))), 128))
              ]),
              u("span", mw, N(J.name), 1),
              u("span", _w, N(J.note), 1)
            ], 10, vw))), 128))
          ]),
          u("section", bw, [
            (g(!0), C(ke, null, Fe(v(wi), (J) => (g(), C("div", {
              key: J.id,
              class: "group"
            }, [
              u("button", {
                type: "button",
                class: "group__head",
                "aria-expanded": Y.value === J.id,
                onClick: (_e) => Y.value = Y.value === J.id ? "" : J.id
              }, [
                u("span", ww, N(Y.value === J.id ? "▾" : "▸"), 1),
                u("span", kw, N(J.label), 1),
                u("span", xw, N(J.tokens.length), 1)
              ], 8, yw),
              Y.value === J.id ? (g(), C("div", Sw, [
                J.note ? (g(), C("p", Cw, N(J.note), 1)) : ee("", !0),
                (g(!0), C(ke, null, Fe(J.tokens, (_e) => (g(), C("div", {
                  key: _e.name,
                  class: "token"
                }, [
                  W(_e) ? (g(), C("span", {
                    key: 0,
                    class: "token__swatch",
                    style: Yt({ background: v(m)(_e.name) }),
                    "aria-hidden": "true"
                  }, null, 4)) : (g(), C("span", $w)),
                  u("span", Aw, [
                    u("code", Iw, "--" + N(_e.name), 1),
                    u("span", Rw, N(_e.role), 1)
                  ]),
                  W(_e) ? (g(), C("input", {
                    key: 2,
                    class: "token__picker",
                    type: "color",
                    value: v(m)(_e.name),
                    "aria-label": `Farbe für ${_e.name}`,
                    onInput: (Me) => v(I)(_e.name, Me.target.value)
                  }, null, 40, Ew)) : ee("", !0),
                  u("input", {
                    class: "token__value",
                    type: "text",
                    value: v(m)(_e.name),
                    "aria-label": `Wert für ${_e.name}`,
                    onChange: (Me) => v(I)(_e.name, Me.target.value)
                  }, null, 40, Tw),
                  u("button", {
                    class: "token__reset",
                    type: "button",
                    disabled: !v(S)(_e.name),
                    title: v(S)(_e.name) ? "Auf den Wert des Themas zurücksetzen" : "Unverändert",
                    onClick: (Me) => v(y)(_e.name)
                  }, " ↺ ", 8, Lw)
                ]))), 128))
              ])) : ee("", !0)
            ]))), 128))
          ])
        ]))
      ])
    ]));
  }
}), Vw = /* @__PURE__ */ Ke(Ow, [["__scopeId", "data-v-a84ca0bf"]]), At = ru.createLogger("daanse:system:actions");
class Dw {
  constructor(_, o) {
    this.router = _, this.eventBus = o;
  }
  eventBus;
  async changePage(_) {
    if (!_) {
      At("⚠️ changePage called without pageId");
      return;
    }
    At("📄 Changing page to: %s", _);
    const o = new Promise((k) => {
      const m = (S) => {
        S.pageId === _ && (At("📄 Received pageLoaded event for page: %s", _), this.eventBus.off("system:pageLoaded", m), k());
      };
      this.eventBus.on("system:pageLoaded", m), setTimeout(() => {
        this.eventBus.off("system:pageLoaded", m), At("⚠️ pageLoaded timeout for page: %s, continuing anyway", _), k();
      }, 5e3);
    });
    await this.router.push(`/page/${_}`), await o, At("📄 Page change complete, widgets should be registered");
  }
  async setGlobalVariable(_, o) {
    At("⚠️ setGlobalVariable should be handled by VariableRepository");
  }
}
async function Bw(p, _, o) {
  await _.registerActionsFromEcoreString(
    "SystemActions",
    Jm,
    "system",
    "SystemActions.ecore"
  );
  const k = new Dw(p, o);
  _.registerInstance("SystemActions", k, "SystemActions"), At("✅ System actions registered");
}
var Ww = Object.defineProperty, Mw = Object.getOwnPropertyDescriptor, Pw = (p, _, o, k) => {
  for (var m = Mw(_, o), S = p.length - 1, c; S >= 0; S--)
    (c = p[S]) && (m = c(_, o, m) || m);
  return m && Ww(_, o, m), m;
};
const Uw = ru.createLogger("daanse:system:actions");
class na {
  testAction(..._) {
    console.log("TestActions", _);
  }
}
Pw([
  Xm({ eventType: "test.console" })
], na.prototype, "testAction");
async function Nw(p) {
  p.registerWidgetType("test", na, "system");
  const _ = new na();
  p.registerInstance("test", _, "system"), Uw("✅ Test actions registered");
}
let at;
async function ck({ services: p, log: _ }) {
  O_(), a_(), c_(), at = vm(z_), at.use(Gt), at.provide("codeEditorType", "monaco");
  const o = p, k = (z) => {
    const R = p.get(z);
    at?.provide(z, R), at?.provide(Symbol.for(z), R);
  };
  for (const z of p.getServiceIds()) k(z);
  o.addListener?.({ onServiceEvent: (z) => k(z.serviceId) }), p.register(am, at);
  const m = p.getRequired(Nm), S = p.getRequired(Fm);
  if (m.getConnections().length === 0) {
    const z = m.createConnection("");
    z.uid = "test", z.name = "Test Connection 01", z.type = "rest", z.config = { url: "https://jsonplaceholder.typicode.com/" }, m.saveConnection(z);
    const R = S.createDatasource("");
    R.uid = "test_ds", R.name = "Test DataSource 01", R.type = "rest", R.connection = z, R.config = { resourceUrl: "posts" }, S.saveDatasource(R);
  }
  p.getRequired(sm).registerWrapperType({
    type: xm,
    create: (z) => new km(z)
  });
  const c = p.getRequired(Zs), I = new Ws();
  I.path = "/configuration", I.name = "config", I.component = Qy, c.registerRoute(I);
  const y = new Ws();
  y.path = "/appearance", y.name = "appearance", y.component = Vw, c.registerRoute(y);
  const f = p.getRequired(Ys), w = new mm();
  w.id = "config", w.label = "Environment variables", w.icon = "settings", w.route = "/configuration", w.routeName = "config", w.order = 10, w.visible = !0, f.registerNavigationItem(w);
  const Y = c;
  for (const z of Y.getAllRoutesArray?.() ?? [])
    Gt.addRoute({
      path: z.path,
      name: z.name,
      component: z.component,
      ...z.meta ? { meta: z.meta } : {}
    });
  const F = window.location.pathname + window.location.search + window.location.hash;
  Gt.resolve(F).matched.length && Gt.currentRoute.value.fullPath !== F && Gt.replace(F);
  try {
    await Bw(
      Gt,
      p.getRequired(Ds),
      p.getRequired(Hs)
    ), _.info("system actions registered");
  } catch (z) {
    _.error("system actions failed", z);
  }
  try {
    await Nw(p.getRequired(Ds)), _.info("test actions registered");
  } catch (z) {
    _.error("test actions failed", z);
  }
  at.mount("#app"), _.info("shell mounted");
}
function fk({ services: p }) {
  const _ = p.getRequired(Zs);
  _.unregisterRoute("config"), _.unregisterRoute("save");
  const o = p.getRequired(Ys);
  o.unregisterNavigationItem("config"), o.unregisterNavigationItem("save"), at?.unmount(), at = void 0;
}
export {
  ck as activate,
  fk as deactivate
};
