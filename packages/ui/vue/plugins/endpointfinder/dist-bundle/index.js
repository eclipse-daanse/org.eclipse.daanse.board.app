(function(){var i="ui.vue.plugins.endpointfinder",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=":root,\n:host {\n  --va-icon-vertical-align: middle;\n  --va-icon-user-select: none;\n}\n.va-icon {\n  vertical-align: var(--va-icon-vertical-align);\n  -webkit-user-select: var(--va-icon-user-select);\n     -moz-user-select: var(--va-icon-user-select);\n          user-select: var(--va-icon-user-select);\n}\n.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]) {\n  cursor: pointer;\n}\n.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]):focus-visible {\n  outline: 2px solid var(--va-focus) !important;\n  border-radius: 2px;\n}\n.va-icon.va-icon {\n  font-style: normal;\n}\n.va-icon--spin {\n  animation: va-icon--spin-animation 1500ms linear infinite;\n}\n.va-icon--spin-reverse {\n  animation: va-icon--spin-animation 1500ms linear infinite;\n  animation-direction: reverse;\n}\n@keyframes va-icon--spin-animation {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n.va-icon svg {\n  fill: currentColor;\n  height: 100%;\n}:root,\n:host {\n  /* Circle */\n  --va-progress-circle-position: relative;\n  --va-progress-circle-overflow: hidden;\n  /* Circle Wrapper */\n  --va-progress-circle-width: 80%;\n  --va-progress-circle-height: 80%;\n  /* Circle Overlay */\n  --va-progress-circle-overlay-transition: all ease 2s;\n  /* Circle Info */\n  --va-progress-circle-font-size: 0.75rem;\n}\n.va-progress-circle {\n  position: var(--va-progress-circle-position);\n  overflow: var(--va-progress-circle-overflow);\n  font-family: var(--va-font-family);\n}\n.va-progress-circle__wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  transform: rotate(-90deg);\n  width: var(--va-progress-circle-width);\n  height: var(--va-progress-circle-height);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.va-progress-circle--indeterminate .va-progress-circle__wrapper {\n  animation: va-progress-circle__wrapper--indeterminate 2s linear infinite;\n}\n.va-progress-circle__overlay {\n  transition: var(--va-progress-circle-overlay-transition);\n}\n.va-progress-circle--indeterminate .va-progress-circle__overlay {\n  animation: va-progress-circle__overlay--indeterminate 2s ease-in-out infinite;\n}\n.va-progress-circle__info {\n  font-size: var(--va-progress-circle-font-size);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n@keyframes va-progress-circle__wrapper--indeterminate {\n100% {\n    transform: rotate(270deg);\n}\n}\n@keyframes va-progress-circle__overlay--indeterminate {\n0% {\n    stroke-dasharray: 1, 125;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 125, 125;\n    stroke-dashoffset: -65px;\n}\n100% {\n    stroke-dasharray: 125, 125;\n    stroke-dashoffset: -125px;\n}\n}:root,\n:host {\n  /* General */\n  --va-button-display: inline-flex;\n  --va-button-justify-content: center;\n  --va-button-align-items: center;\n  --va-button-background-image: none;\n  --va-button-box-shadow: none;\n  --va-button-border-width: 0;\n  --va-button-border-color: unset;\n  --va-button-border-style: none;\n  --va-button-font-weight: 600;\n  --va-button-transition: none;\n  --va-button-padding: 0;\n  --va-button-cursor: pointer;\n  /* Small */\n  --va-button-sm-size: 1.5rem;\n  --va-button-sm-content-py: 0.25rem;\n  --va-button-sm-content-px: 0.375rem;\n  --va-button-sm-only-icon-content-px: 0.25rem;\n  --va-button-sm-font-size: 0.8125rem;\n  --va-button-sm-letter-spacing: 0;\n  --va-button-sm-line-height: 1rem;\n  --va-button-sm-border-radius: 0.125rem;\n  --va-button-sm-icon-side-padding: var(--va-button-sm-content-py);\n  --va-button-sm-icons-spacing: 0.125rem;\n  /* Medium */\n  --va-button-size: 2.25rem;\n  --va-button-content-py: 0.5rem;\n  --va-button-content-px: 0.75rem;\n  --va-button-only-icon-content-px: 0.5rem;\n  --va-button-font-size: 1rem;\n  --va-button-letter-spacing: 0;\n  --va-button-line-height: 1.25rem;\n  --va-button-border-radius: 0.25rem;\n  --va-button-icon-side-padding: var(--va-button-content-py);\n  --va-button-icons-spacing: 0.25rem;\n  /* Large */\n  --va-button-lg-size: 3rem;\n  --va-button-lg-content-py: 0.75rem;\n  --va-button-lg-content-px: 1rem;\n  --va-button-lg-only-icon-content-px: 1rem;\n  --va-button-lg-font-size: 1.05rem;\n  --va-button-lg-letter-spacing: 0;\n  --va-button-lg-line-height: 1.5rem;\n  --va-button-lg-border-radius: 0.5rem;\n  --va-button-lg-icon-side-padding: var(--va-button-lg-content-py);\n  --va-button-lg-icons-spacing: 0.25rem;\n  /* Bordered */\n  --va-button-bordered-border: 1px;\n  --va-button-bordered-style: solid;\n}\n.va-button {\n  position: relative;\n  padding: var(--va-button-padding);\n  display: var(--va-button-display);\n  justify-content: var(--va-button-justify-content);\n  align-items: var(--va-button-align-items);\n  border-width: var(--va-button-border-width);\n  border-color: var(--va-button-border-color);\n  border-style: var(--va-button-border-style);\n  background-image: var(--va-button-background-image);\n  box-shadow: var(--va-button-box-shadow);\n  font-family: var(--va-font-family);\n  font-weight: var(--va-button-font-weight);\n  text-decoration: none;\n  text-transform: initial;\n  transition: var(--va-button-transition);\n  box-sizing: border-box;\n  cursor: var(--va-button-cursor);\n  z-index: 0;\n  vertical-align: top;\n}\n.va-button::after, .va-button::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  left: 0;\n  top: 0;\n  z-index: -1;\n}\n.va-button::before {\n  background: var(--va-background-color);\n  opacity: var(--va-background-color-opacity);\n}\n.va-button::after {\n  background-color: var(--va-background-mask-color);\n  opacity: var(--va-background-mask-opacity);\n}\n.va-button__content {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  z-index: 1;\n}\n.va-button__content--loading {\n  opacity: 0;\n}\n.va-button--small {\n  line-height: var(--va-button-sm-line-height);\n  border-radius: var(--va-button-sm-border-radius);\n  letter-spacing: var(--va-button-sm-letter-spacing);\n  min-height: var(--va-button-sm-size);\n  min-width: var(--va-button-sm-size);\n}\n.va-button--small .va-button__content {\n  font-size: var(--va-button-sm-font-size);\n  padding: var(--va-button-sm-content-py) var(--va-button-sm-content-px);\n}\n.va-button--small .va-button__left-icon {\n  margin-right: var(--va-button-sm-icons-spacing);\n}\n.va-button--small .va-button__right-icon {\n  margin-left: var(--va-button-sm-icons-spacing);\n}\n.va-button--small.va-button--bordered .va-button__content {\n  padding-top: calc(var(--va-button-sm-content-py) - var(--va-button-bordered-border));\n  padding-bottom: calc(var(--va-button-sm-content-py) - var(--va-button-bordered-border));\n}\n.va-button--small.va-button--left-icon .va-button__content {\n  padding-left: var(--va-button-sm-icon-side-padding);\n}\n.va-button--small.va-button--right-icon .va-button__content {\n  padding-right: var(--va-button-sm-icon-side-padding);\n}\n.va-button--normal {\n  line-height: var(--va-button-line-height);\n  border-radius: var(--va-button-border-radius);\n  letter-spacing: var(--va-button-letter-spacing);\n  min-height: var(--va-button-size);\n  min-width: var(--va-button-size);\n}\n.va-button--normal .va-button__content {\n  font-size: var(--va-button-font-size);\n  padding: var(--va-button-content-py) var(--va-button-content-px);\n  line-height: var(--va-button-line-height);\n}\n.va-button--normal .va-button__left-icon {\n  margin-right: var(--va-gap-medium);\n}\n.va-button--normal .va-button__right-icon {\n  margin-left: var(--va-gap-medium);\n}\n.va-button--normal.va-button--bordered .va-button__content {\n  padding-top: calc(var(--va-button-content-py) - var(--va-button-bordered-border));\n  padding-bottom: calc(var(--va-button-content-py) - var(--va-button-bordered-border));\n}\n.va-button--large {\n  line-height: var(--va-button-lg-line-height);\n  border-radius: var(--va-button-lg-border-radius);\n  letter-spacing: var(--va-button-lg-letter-spacing);\n  min-height: var(--va-button-lg-size);\n  min-width: var(--va-button-lg-size);\n}\n.va-button--large .va-button__content {\n  font-size: var(--va-button-lg-font-size);\n  padding: var(--va-button-lg-content-py) var(--va-button-lg-content-px);\n}\n.va-button--large .va-button__left-icon {\n  margin-right: var(--va-button-lg-icons-spacing);\n}\n.va-button--large .va-button__right-icon {\n  margin-left: var(--va-button-lg-icons-spacing);\n}\n.va-button--large.va-button--bordered .va-button__content {\n  padding-top: calc(var(--va-button-lg-content-py) - var(--va-button-bordered-border));\n  padding-bottom: calc(var(--va-button-lg-content-py) - var(--va-button-bordered-border));\n}\n.va-button--large.va-button--left-icon .va-button__content {\n  padding-left: var(--va-button-lg-icon-side-padding);\n}\n.va-button--large.va-button--right-icon .va-button__content {\n  padding-right: var(--va-button-lg-icon-side-padding);\n}\n.va-button--small.va-button--icon-only .va-button__content, .va-button--normal.va-button--icon-only .va-button__content, .va-button--large.va-button--icon-only .va-button__content {\n  padding-right: 0;\n  padding-left: 0;\n}\n.va-button--plain {\n  min-width: auto;\n  min-height: auto;\n}\n.va-button--plain .va-button__content {\n  padding: 0;\n  z-index: unset;\n}\n.va-button--round {\n  border-radius: 999px;\n}\n.va-button--bordered {\n  border-width: var(--va-button-bordered-border);\n  border-style: var(--va-button-bordered-style);\n}\n.va-button.va-button--disabled {\n  cursor: default;\n  opacity: 0.4;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.va-button--icon-only .va-button__left-icon,\n.va-button--icon-only .va-button__right-icon {\n  margin-left: 0;\n  margin-right: 0;\n}\n.va-button--icon-only .va-button__content {\n  padding: 0;\n}\n.va-button:focus-visible {\n  outline: 2px solid var(--va-focus) !important;\n  border-radius: \"inherit\";\n}\n.va-button--loading {\n  pointer-events: none;\n}\n.va-button--block {\n  display: flex;\n  min-width: 100%;\n}\n.va-button__loader {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}:root,\n:host {\n  /* General */\n  --va-badge-py: 0;\n  --va-badge-font-size: 0.563rem;\n  --va-badge-border: 0.125rem;\n  --va-badge-size: calc(var(--va-badge-font-size) * var(--va-badge-line-height) + var(--va-badge-border) * 2);\n  --va-badge-line-height: 1.4;\n  --va-badge-margin: 0;\n  --va-badge-width: fit-content;\n  /* Dot */\n  --va-badge-dot-size: 0.5rem;\n  /* Text wrapper */\n  --va-badge-text-wrapper-transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);\n  --va-badge-text-wrapper-display: inline-flex;\n  --va-badge-text-wrapper-border: solid 0.125rem;\n  --va-badge-text-wrapper-border-radius: 0.125rem;\n  --va-badge-text-wrapper-font-weight: 700;\n  --va-badge-text-wrapper-line-height: 1.4;\n  --va-badge-text-wrapper-letter-spacing: 0.0375rem;\n  --va-badge-text-wrapper-justify-content: center;\n  --va-badge-text-wrapper-white-space: nowrap;\n  --va-badge-text-wrapper-width: min-content;\n  --va-badge-text-wrapper-height: auto;\n  --va-badge-text-wrapper-min-width: initial;\n  --va-badge-text-wrapper-min-height: initial;\n  --va-badge-text-wrapper-margin: 0;\n  --va-badge-text-transform: uppercase;\n  /* Text */\n  --va-badge-text-py: 0;\n  --va-badge-text-px: 0.25rem;\n}\n.va-badge {\n  display: inline-flex;\n  position: relative;\n  font-family: var(--va-font-family);\n  width: var(--va-badge-width);\n}\n.va-badge__text-wrapper {\n  transition: var(--va-badge-text-wrapper-transition, var(--va-transition));\n  display: var(--va-badge-text-wrapper-display);\n  border: var(--va-badge-text-wrapper-border, var(--va-control-border));\n  border-radius: var(--va-badge-text-wrapper-border-radius);\n  font-weight: var(--va-badge-text-wrapper-font-weight);\n  line-height: var(--va-badge-text-wrapper-line-height);\n  letter-spacing: var(--va-badge-text-wrapper-letter-spacing, var(--va-letter-spacing));\n  justify-content: var(--va-badge-text-wrapper-justify-content);\n  align-items: center;\n  white-space: var(--va-badge-text-wrapper-white-space);\n  width: var(--va-badge-text-wrapper-width);\n  height: var(--va-badge-text-wrapper-height);\n  min-width: var(--va-badge-text-wrapper-min-width);\n  min-height: var(--va-badge-text-wrapper-min-height);\n  margin: var(--va-badge-text-wrapper-margin);\n}\n.va-badge--visible-empty .va-badge__text-wrapper {\n  min-width: var(--va-badge-size);\n  min-height: var(--va-badge-size);\n}\n.va-badge--dot .va-badge__text-wrapper {\n  min-width: var(--va-badge-dot-size);\n  min-height: var(--va-badge-dot-size);\n  border-width: 0;\n  border-radius: 100%;\n  padding: 0;\n}\n.va-badge--empty .va-badge__text-wrapper {\n  width: 0;\n  height: 0;\n  min-width: 0;\n  min-height: 0;\n  border-width: 0;\n}\n.va-badge--multi-line .va-badge__text-wrapper {\n  white-space: normal;\n}\n.va-badge--floating .va-badge__text-wrapper {\n  position: absolute;\n  z-index: 2;\n}\n.va-badge__text {\n  margin: var(--va-badge-margin);\n  text-transform: var(--va-badge-text-transform);\n  overflow: hidden;\n  min-width: calc(var(--va-badge-font-size) * var(--va-badge-line-height));\n  padding: var(--va-badge-text-py) var(--va-badge-text-px);\n  text-align: center;\n  display: inline-flex;\n  justify-content: center;\n  text-overflow: clip;\n  white-space: nowrap;\n  font-size: var(--va-badge-font-size);\n}\n.va-badge--multi-line .va-badge__text {\n  overflow: auto;\n  max-height: initial;\n  text-align: initial;\n  text-overflow: initial;\n  white-space: normal;\n}\n.va-badge--dot .va-badge__text {\n  display: none;\n}\n.va-badge--floating .va-badge__text {\n  align-items: center;\n  padding: var(--va-badge-py) 0.15rem;\n}:root {\n  --va-stepper-step-button-inactive-color: var(--va-secondary);\n  --va-stepper-step-button-hover-highlight-opacity: 0.1;\n  --va-stepper-step-button-disabled-opacity: 0.5;\n  --va-stepper-step-button-padding: 1rem;\n  --va-stepper-step-button-number-size: 1.2rem;\n  --va-stepper-step-button-icon-size: 2rem;\n  --va-stepper-step-button-gap: 0.5rem;\n  --va-stepper-step-button-icon-border-radius: 100%;\n  --va-stepper-step-border-radius: var(--va-square-border-radius);\n  --va-stepper-divider-color: var(--va-secondary);\n  --va-stepper-divider-length: auto;\n  --va-stepper-divider-min-length: 2rem;\n  --va-stepper-divider-thickness: 1px;\n  --va-stepper-divider-spacing: 0.5rem;\n  --va-stepper-divider-vertical-margin-left: 2rem;\n  --va-stepper-step-content-wrapper-padding: 0.5rem 1rem;\n  --va-stepper-step-content-margin: 0.8rem 0 2rem;\n  --va-stepper-controls-gap: 1rem;\n}\n.va-stepper__default-controls {\n  display: flex;\n  gap: var(--va-stepper-controls-gap);\n}:root {\n  --va-stepper-step-button-inactive-color: var(--va-secondary);\n  --va-stepper-step-button-hover-highlight-opacity: 0.1;\n  --va-stepper-step-button-disabled-opacity: 0.5;\n  --va-stepper-step-button-padding: 1rem;\n  --va-stepper-step-button-number-size: 1.2rem;\n  --va-stepper-step-button-icon-size: 2rem;\n  --va-stepper-step-button-gap: 0.5rem;\n  --va-stepper-step-button-icon-border-radius: 100%;\n  --va-stepper-step-border-radius: var(--va-square-border-radius);\n  --va-stepper-divider-color: var(--va-secondary);\n  --va-stepper-divider-length: auto;\n  --va-stepper-divider-min-length: 2rem;\n  --va-stepper-divider-thickness: 1px;\n  --va-stepper-divider-spacing: 0.5rem;\n  --va-stepper-divider-vertical-margin-left: 2rem;\n  --va-stepper-step-content-wrapper-padding: 0.5rem 1rem;\n  --va-stepper-step-content-margin: 0.8rem 0 2rem;\n  --va-stepper-controls-gap: 1rem;\n}\n.va-stepper__step-button {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--va-stepper-step-button-gap);\n  flex-shrink: 0;\n  padding: var(--va-stepper-step-button-padding);\n}\n.va-stepper__step-button:focus-visible {\n  outline: 2px solid var(--va-focus) !important;\n  border-radius: var(--va-stepper-step-border-radius);\n}\n.va-stepper__step-button::after {\n  content: \"\";\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--va-stepper-color);\n  transition: opacity 0.3s;\n  opacity: 0;\n  border-radius: var(--va-stepper-step-border-radius);\n}\n.va-stepper__step-button__icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--va-stepper-step-button-icon-size);\n  width: var(--va-stepper-step-button-icon-size);\n  font-size: var(--va-stepper-step-button-number-size);\n  color: white;\n  background: var(--va-stepper-step-button-inactive-color);\n  border-radius: var(--va-stepper-step-button-icon-border-radius);\n}\n.va-stepper__step-button--active {\n  color: var(--va-stepper-color);\n}\n.va-stepper__step-button--active .va-stepper__step-button__icon {\n  background: var(--va-stepper-color);\n}\n.va-stepper__step-button--disabled {\n  opacity: var(--va-stepper-step-button-disabled-opacity);\n  pointer-events: none;\n}\n.va-stepper__step-button:hover::after {\n  opacity: var(--va-stepper-step-button-hover-highlight-opacity);\n}\n.va-stepper__step-button--navigation-disabled::after {\n  display: none;\n}\n.va-stepper__step-button--error {\n  color: var(--va-danger);\n}\n.va-stepper__step-button--error .va-stepper__step-button__icon {\n  background: var(--va-danger);\n}:root {\n  --va-stepper-step-button-inactive-color: var(--va-secondary);\n  --va-stepper-step-button-hover-highlight-opacity: 0.1;\n  --va-stepper-step-button-disabled-opacity: 0.5;\n  --va-stepper-step-button-padding: 1rem;\n  --va-stepper-step-button-number-size: 1.2rem;\n  --va-stepper-step-button-icon-size: 2rem;\n  --va-stepper-step-button-gap: 0.5rem;\n  --va-stepper-step-button-icon-border-radius: 100%;\n  --va-stepper-step-border-radius: var(--va-square-border-radius);\n  --va-stepper-divider-color: var(--va-secondary);\n  --va-stepper-divider-length: auto;\n  --va-stepper-divider-min-length: 2rem;\n  --va-stepper-divider-thickness: 1px;\n  --va-stepper-divider-spacing: 0.5rem;\n  --va-stepper-divider-vertical-margin-left: 2rem;\n  --va-stepper-step-content-wrapper-padding: 0.5rem 1rem;\n  --va-stepper-step-content-margin: 0.8rem 0 2rem;\n  --va-stepper-controls-gap: 1rem;\n}\n.va-stepper {\n  display: flex;\n  flex-direction: column;\n}\n.va-stepper--vertical {\n  flex-direction: row;\n}\n.va-stepper__navigation {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.va-stepper__navigation--vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  flex-wrap: nowrap;\n}\n.va-stepper__divider {\n  flex-grow: 1;\n  height: var(--va-stepper-divider-thickness);\n  width: var(--va-stepper-divider-length);\n  min-width: var(--va-stepper-divider-min-length);\n  margin: 0 var(--va-stepper-divider-spacing);\n  background: var(--va-stepper-divider-color);\n}\n.va-stepper__divider--vertical {\n  min-height: var(--va-stepper-divider-min-length);\n  height: var(--va-stepper-divider-length);\n  width: var(--va-stepper-divider-thickness);\n  min-width: var(--va-stepper-divider-thickness);\n  margin: var(--va-stepper-divider-spacing) 0;\n  margin-left: var(--va-stepper-divider-vertical-margin-left);\n}\n.va-stepper__step-content-wrapper {\n  padding: var(--va-stepper-step-content-wrapper-padding);\n}\n.va-stepper__step-content {\n  margin: var(--va-stepper-step-content-margin);\n}\n.va-stepper__controls {\n  display: flex;\n  gap: var(--va-stepper-controls-gap);\n}.aellipsis[data-v-69727056] {\n  line-height: 23px;\n  max-height: var(--b40395ae);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  color: #777777;\n}\n.aellipsis.expanded[data-v-69727056] {\n  max-height: 100%;\n}.pointer[data-v-a0a9daed] {\n  cursor: pointer;\n  align-self: start;\n  margin-right: 5px;\n}\n.card[data-v-a0a9daed] {\n  box-shadow: none;\n  border-bottom: 1px solid #e1e1e1;\n  border-radius: 0;\n  cursor: pointer;\n}\n.card[data-v-a0a9daed]:hover, .card.active[data-v-a0a9daed] {\n  background: #f5f8ff !important;\n}\n.card .va-card-title[data-v-a0a9daed] {\n  font-size: 1.25rem;\n}\n.card .aflex[data-v-a0a9daed] {\n  display: flex;\n  margin-top: 15px;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n  /* align-items: flex-start; */\n  flex-wrap: nowrap;\n}\n.card .light[data-v-a0a9daed] {\n  color: rgba(108, 106, 106, 0.8666666667);\n}.list_of_formats[data-v-d76f1184] {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  justify-content: flex-start;\n}\n.map[data-v-d76f1184] {\n  width: 100%;\n  height: 250px;\n  position: relative;\n}\n.content[data-v-d76f1184] {\n  margin-top: 25px;\n  margin-bottom: 35px;\n  padding-left: 10px;\n}\n.line[data-v-d76f1184] {\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: center;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.line div[data-v-d76f1184] {\n  display: block;\n  width: auto;\n}\n.title[data-v-d76f1184] {\n  font-size: 24px;\n  padding: 23px 10px 0px 15px;\n}\n.pointer[data-v-d76f1184] {\n  cursor: pointer;\n}.filterbox .va-modal__header {\n  background: #f1f1f1;\n  padding-bottom: 15px;\n}.infobox .va-modal__dialog {\n  max-width: 80% !important;\n}\n.infobox .footer, .infobox .va-modal__footer {\n  background: #f7f7f7;\n  padding: 10px 16px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n}\n.infobox .va-stepper__navigation {\n  padding: 30px 30px 0px 15px;\n  /* border-bottom: 1px solid #ccc; */\n  background: #f7f7f7;\n  margin-bottom: 10px;\n}\n.infobox .va-stepper__step-content-wrapper, .infobox .va-stepper__step-content {\n  padding: 0;\n  margin: 0;\n}\n.infobox .va-modal__message {\n  margin: 0;\n}\n.infobox .aflex {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: 9px;\n}\n.infobox .store-item-header {\n  display: none;\n}\n.infobox .store-item-content {\n  border: none;\n  padding: 0;\n}\n.infobox .datasource-list .datasource-list-add-button {\n  display: none;\n}.widgets_grid[data-v-186d6629] {\n  display: grid;\n  grid-template-columns: repeat(3, 33%);\n  gap: 1rem;\n}\n[data-v-186d6629]  .widgets_grid-item {\n  height: 50px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.flex[data-v-186d6629] {\n  width: 100%;\n}\n.flex[data-v-186d6629] {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  align-items: center;\n}\n.buttonbar[data-v-186d6629] {\n  margin-top: 15px;\n}\n.padd[data-v-186d6629] {\n  max-height: 75vh;\n  padding: 15px 25px;\n}\n.padd15[data-v-186d6629] {\n  padding: 10px 25px 30px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.no-padding[data-v-186d6629] {\n  padding: 0;\n}";})();
const { withCtx, h: h$1, Text, createBlock, isVNode, getCurrentInstance, inject: inject$1, computed, normalizeClass, normalizeStyle, ref, shallowReadonly, isRef, unref, reactive, capitalize: capitalize$1, defineComponent, useAttrs, openBlock, resolveDynamicComponent, mergeProps, renderSlot, createElementBlock, createCommentVNode, Fragment, createTextVNode, toDisplayString, watch, customRef, onMounted, onUpdated, createElementVNode, onBeforeUnmount, shallowRef, toRefs, normalizeProps, guardReactiveProps, createVNode, useSlots, nextTick, withKeys, renderList, useCssVars, resolveComponent, provide, markRaw, onUnmounted, render, useModel, hasInjectionContext, effectScope, isReactive, toRaw, getCurrentScope, onScopeDispose } = __tsm__.require("vue");
const { identifier: identifier$1 } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.connection");
const { identifier: identifier$2 } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.datasource");
const { useConnectionsStore } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.stores.connection");
const { useDataSourcesStore } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.stores.datasouce");
const { identifier } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.widget");
const { container } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { useRoute } = __tsm__.require("vue-router");
class QueryBuilder {
  dss = {};
  filters = [];
  limit = 10;
  setEndpoints(dss) {
    this.dss = dss;
    return this;
  }
  setFilter(filters) {
    this.filters = filters;
    return this;
  }
  setLimit(limit) {
    if (limit < 1) return this;
    if (limit > 1e3) return this;
    this.limit = limit;
    return this;
  }
  async query(seachString) {
    const filterInQuery = [];
    const sentences = [];
    const prefixes = [];
    this.filters.forEach((filter) => {
      if (filter["mapSection"]) {
        const map = filter;
        prefixes.push("PREFIX spatial: <http://geovocab.org/spatial#>");
        prefixes.push("PREFIX geo: <http://www.opengis.net/ont/geosparql#>");
        sentences.push("?dataService dct:spatial ?location .");
        sentences.push("?location geo:lat ?lat ;geo:long ?long .");
        filterInQuery.push(`FILTER (?lat >= ${map.mapSection._northEast.lat} && ?lat <= ${map.mapSection._southWest.lat})`);
        filterInQuery.push(`FILTER (?long >= ${map.mapSection._northEast.lng} && ?long <= ${map.mapSection._southWest.lng})`);
      }
      if (filter["formats"]) {
        const format = filter;
        let filterSubstring = "FILTER (" + format.formats.map((format2) => "?format =" + format2).join("||") + ")";
        filterInQuery.push(filterSubstring);
      }
    });
    const query = `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX dc: <http://purl.org/dc/elements/1.1/>
            PREFIX dcat: <http://www.w3.org/ns/dcat#>
            PREFIX odp:  <http://data.europa.eu/euodp/ontologies/ec-odp#>
            PREFIX dct: <http://purl.org/dc/terms/>
            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
            PREFIX foaf: <http://xmlns.com/foaf/0.1/>
            PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
            ${prefixes.join("\n")}

            SELECT DISTINCT * WHERE {
              ?d a dcat:Dataset .
              ?dist a dcat:Distribution .
              ?d dct:title ?title .
              ?d dct:description ?description.
              ?d dcat:distribution ?dist .
              ?dist dct:title ?disttTitle .
              ?dist dcat:accessURL ?accessUrl.
              ?dist dct:format ?format .
              #?dist dcat:accessService ?service.
              #?service dcat:endpointURL ?ServiceEndpountURI .
              #?format skos:prefLabel ?formatId .
              optional{
                    ?d dct:publisher ?creator
              }
              optional{
                    ?creator foaf:name ?creator_name;
              }
              optional{
                    ?d dct:modified ?date
              }
              ${sentences.join("\n")}

            FILTER (CONTAINS(LCASE(?title), "${seachString.toLowerCase()}"))
            ${filterInQuery.join("\n")}
            }
            LIMIT ${this.limit}
        `;
    let result = {};
    for (const ds of Object.entries(this.dss)) {
      let encodedValue = "query=" + encodeURIComponent(query);
      try {
        const newData = await ds[1].fetch({ url: "" }, {
          method: "POST",
          body: encodedValue,
          headers: {
            "User-Agent": "org.eclipse.daanse.datafinder.sparql/1.0",
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
        result[ds[0]] = await newData.json();
      } catch (e) {
        console.log(e);
      }
    }
    return result;
  }
}
const connections = {};
const activeConnectionIds = [];
function useSparQLEndPointManager() {
  const registerEndpoint = (connection, id) => {
    connections[id] = connection;
  };
  const getEndpointsByName = (name) => {
    return connections[name];
  };
  const getAllActiveEndpoints = () => {
    return Object.fromEntries(Object.entries(connections).filter((k2) => activeConnectionIds.includes(k2[0])));
  };
  const getActiveEndpoints = (id) => {
    if (activeConnectionIds.includes(id)) {
      return connections[id];
    } else {
      return void 0;
    }
  };
  const setActive = (id) => {
    if (activeConnectionIds.includes(id)) return;
    if (!connections[id]) return;
    activeConnectionIds.push(id);
  };
  const setInActive = (id) => {
    const pos = activeConnectionIds.indexOf(id);
    if (pos != -1) activeConnectionIds.splice(pos);
  };
  return {
    registerEndpoint,
    getEndpointsByName,
    getActiveEndpoints,
    setActive,
    setInActive,
    getAllActiveEndpoints
  };
}
var Formats = /* @__PURE__ */ ((Formats2) => {
  Formats2["XMLA"] = "<http://publications.europa.eu/resource/authority/file-type/XMLA>";
  Formats2["CSV"] = "<http://publications.europa.eu/resource/authority/file-type/CSV>";
  Formats2["XML"] = "<http://publications.europa.eu/resource/authority/file-type/XML>";
  Formats2["WMS"] = "<http://publications.europa.eu/resource/authority/file-type/WMS_SRVC>";
  Formats2["WFS"] = "<http://publications.europa.eu/resource/authority/file-type/WFS_SRVC>";
  Formats2["GEOJSON"] = "<http://publications.europa.eu/resource/authority/file-type/GEOJSON>";
  Formats2["JSON"] = "<http://publications.europa.eu/resource/authority/file-type/JSON>";
  Formats2["REST"] = "<http://publications.europa.eu/resource/authority/file-type/REST>";
  Formats2["OGCSTA"] = "???";
  return Formats2;
})(Formats || {});
const presets = {
  light: {
    // Accent
    primary: "#154EC1",
    secondary: "#767C88",
    success: "#3D9209",
    info: "#158DE3",
    danger: "#E42222",
    warning: "#FFD43A",
    // Background Colors
    backgroundPrimary: "#f6f6f6",
    backgroundSecondary: "#FFFFFF",
    backgroundElement: "#ECF0F1",
    backgroundBorder: "#DEE5F2",
    // Text Colors
    textPrimary: "#262824",
    textInverted: "#FFFFFF",
    // Misc
    shadow: "rgba(0, 0, 0, 0.12)",
    focus: "#49A8FF",
    transparent: "rgba(0, 0, 0, 0)"
  },
  dark: {
    // Accent
    primary: "#3472F0",
    secondary: "#767C88",
    success: "#66BE33",
    info: "#3EAAF8",
    danger: "#F34030",
    warning: "#FFD952",
    // Background Colors
    backgroundPrimary: "#050A10",
    backgroundSecondary: "#1F262F",
    backgroundElement: "#131A22",
    backgroundBorder: "#3D4C58",
    // Text Colors
    textPrimary: "#F1F1F1",
    textInverted: "#0B121A",
    // Misc
    shadow: "rgba(255, 255, 255, 0.12)",
    focus: "#49A8FF",
    transparent: "rgba(0, 0, 0, 0)"
  }
};
const defaultThresholds = {
  xs: 0,
  sm: 640,
  md: 1024,
  lg: 1440,
  xl: 1920
};
const getBreakpointDefaultConfig = () => ({
  enabled: true,
  bodyClass: true,
  thresholds: defaultThresholds
});
const renderSlotNode = (node, ctx = null) => {
  return withCtx(() => [node], ctx);
};
const makeVNode = (node) => {
  if (typeof node === "string") {
    return h$1(Text, node);
  }
  return isVNode(node) ? node : createBlock(node);
};
const renderSlots = (slots, ctx = null) => {
  return Object.keys(slots).reduce((acc, slotName) => {
    const slot = slots[slotName];
    acc[slotName] = typeof slot === "function" ? slot : renderSlotNode(slot, ctx);
    return acc;
  }, {});
};
const createRenderFn = (component) => {
  const originalRenderFn = component.render || component.ssrRender;
  if (!originalRenderFn) {
    return void 0;
  }
  const compiledRenderedFn = originalRenderFn.name === "_sfc_render" || originalRenderFn.name === "_sfc_ssrRender";
  return function(...args) {
    const ctx = args[0];
    const slots = ctx.$.slots;
    const customCtx = new Proxy(ctx, {
      get(target, key) {
        if (key === "$slots") {
          return renderSlots(slots);
        }
        return target[key];
      }
    });
    const thisArg = compiledRenderedFn ? void 0 : customCtx;
    return originalRenderFn.call(thisArg, customCtx, ...args.slice(1));
  };
};
const omit = (o, keys) => {
  return Object.keys(o).filter((key) => !keys.includes(key)).reduce((acc, key) => {
    acc[key] = o[key];
    return acc;
  }, {});
};
const CHILD_COMPONENTS_INJECT_KEY = "$va:childComponents";
const injectChildPropsFromParent = () => {
  var _a;
  const childName = (_a = getCurrentInstance()) == null ? void 0 : _a.attrs["va-child"];
  if (!childName) {
    return null;
  }
  const childProps = inject$1(CHILD_COMPONENTS_INJECT_KEY);
  if (!(childProps == null ? void 0 : childProps.value)) {
    return null;
  }
  return computed(() => childProps.value[childName]);
};
const KEBAB_CASE_REGEX = /([a-z0-9])([A-Z])/g;
const toKebabCase = (str) => str.replace(KEBAB_CASE_REGEX, "$1-$2").toLowerCase();
const findCamelCased = (obj, key) => {
  if (key in obj) {
    return obj[key];
  }
  return obj[toKebabCase(key)];
};
const createProps = (instance, propsFromConfig) => {
  const instanceProps = instance.props;
  const childPropsFromParent = injectChildPropsFromParent();
  return new Proxy(instanceProps, {
    get: (target, key) => {
      var _a, _b;
      if (typeof key !== "string") {
        return target[key];
      }
      const childProp = (_a = childPropsFromParent == null ? void 0 : childPropsFromParent.value) == null ? void 0 : _a[key];
      if (childProp !== void 0) {
        return childProp;
      }
      const incomingProps = instance.vnode.props || {};
      const originalProp = target[key];
      const incomingProp = findCamelCased(incomingProps, key);
      if (incomingProp !== void 0) {
        return originalProp;
      }
      const propFromConfig = (_b = propsFromConfig.value) == null ? void 0 : _b[key];
      if (propFromConfig !== void 0) {
        return propFromConfig;
      }
      return originalProp;
    }
  });
};
const createAttrs = (instance, propsFromConfig) => {
  const instanceAttrs = instance.attrs;
  return new Proxy(instanceAttrs, {
    get: (target, key) => {
      var _a;
      if (typeof key !== "string") {
        return target[key];
      }
      if (key === "class") {
        return normalizeClass([propsFromConfig.value.class, instanceAttrs.class]);
      }
      if (key === "style") {
        return normalizeStyle([propsFromConfig.value.style, instanceAttrs.style]);
      }
      const attrFromConfig = (_a = propsFromConfig.value) == null ? void 0 : _a[key];
      if (attrFromConfig !== void 0) {
        return attrFromConfig;
      }
      return target[key];
    },
    ownKeys(target) {
      return [.../* @__PURE__ */ new Set([...Object.keys(instanceAttrs), ...Object.keys(propsFromConfig.value)])];
    },
    getOwnPropertyDescriptor(target, key) {
      return Reflect.getOwnPropertyDescriptor(propsFromConfig.value, key) ?? Reflect.getOwnPropertyDescriptor(instanceAttrs, key);
    }
  });
};
const SLOT_PREFIX = "slot:";
const createSlots = (instance, propsFromConfig) => {
  const instanceSlots = instance.slots;
  const childPropsFromParent = injectChildPropsFromParent();
  const slotsFromConfig = computed(() => {
    return Object.keys(propsFromConfig.value).reduce((acc, key) => {
      if (key.startsWith(SLOT_PREFIX)) {
        acc[key.slice(SLOT_PREFIX.length)] = propsFromConfig.value[key];
      }
      return acc;
    }, {});
  });
  return new Proxy(instanceSlots, {
    get: (target, key) => {
      var _a, _b;
      if (typeof key !== "string") {
        return target[key];
      }
      const prefixedKey = `${SLOT_PREFIX}${key}`;
      const childSlot = (_a = childPropsFromParent == null ? void 0 : childPropsFromParent.value) == null ? void 0 : _a[prefixedKey];
      if (childSlot !== void 0) {
        return renderSlotNode(makeVNode(childSlot));
      }
      const originalSlot = target[key];
      if (originalSlot !== void 0) {
        return originalSlot;
      }
      const propFromConfig = (_b = slotsFromConfig.value) == null ? void 0 : _b[key];
      if (propFromConfig !== void 0) {
        return renderSlotNode(makeVNode(propFromConfig));
      }
      return originalSlot;
    },
    ownKeys(target) {
      return [.../* @__PURE__ */ new Set([...Object.keys(instanceSlots), ...Object.keys(slotsFromConfig.value)])];
    },
    getOwnPropertyDescriptor(target, key) {
      return Reflect.getOwnPropertyDescriptor(slotsFromConfig.value, key) ?? Reflect.getOwnPropertyDescriptor(instanceSlots, key);
    }
  });
};
const LocalConfigKey = "VaLocalConfig";
const CONFIGS_DEFAULT = computed(() => []);
function useLocalConfig() {
  return inject$1(LocalConfigKey, CONFIGS_DEFAULT);
}
const nilValues = [null, void 0, ""];
const isNilValue = (value) => {
  return nilValues.includes(value);
};
const notNil = (value) => !isNilValue(value);
const processShim = typeof process !== "undefined" ? process : {};
const envShim = processShim.env || {};
const nodeEnv = envShim.NODE_ENV || "";
const isDev = typeof __DEV__ !== "undefined" ? __DEV__ : !["prod", "production"].includes(nodeEnv);
const warn = (...attrs) => {
  if (isDev) {
    console.warn(...attrs);
  }
  return false;
};
const throwError = (message) => {
  throw new Error(`[Vuestic] ${message}`);
};
let currentApp = null;
const getCurrentApp = () => currentApp;
const inject = (key, value = void 0) => {
  var _a;
  const injectedFromApp = (_a = getCurrentApp()) == null ? void 0 : _a._context.provides[key];
  const vm = getCurrentInstance();
  if (vm) {
    return inject$1(key, value);
  }
  return injectedFromApp ?? throwError("You're using Vuestic composable outside Vue app. Since you registered Vuestic in multiple apps, composables can not be used outside setup function anymore.");
};
const isObject$1 = (obj) => {
  return obj !== null && typeof obj === "object";
};
const cloneDeep = (source) => {
  if (source === null || typeof source !== "object") {
    return source;
  }
  if (Array.isArray(source)) {
    return source.map(cloneDeep);
  }
  if (source instanceof Date) {
    return new Date(source.getTime());
  }
  if (source instanceof RegExp) {
    return new RegExp(source.source, source.flags);
  }
  if (source instanceof Map) {
    return new Map(Array.from(source.entries()).map(([key, value]) => [key, cloneDeep(value)]));
  }
  if (source instanceof Set) {
    return new Set(Array.from(source.values()).map(cloneDeep));
  }
  if (isObject$1(source)) {
    return Object.keys(source).reduce((acc, key) => {
      acc[key] = cloneDeep(source[key]);
      return acc;
    }, {});
  }
  if (typeof source === "function") {
    return source;
  }
  return source;
};
const isObject = (obj) => obj && typeof obj === "object" && !Array.isArray(obj);
const mergeDeep = (target, source) => {
  if (!isObject(target)) {
    target = {};
  }
  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (sourceValue instanceof RegExp || sourceValue instanceof Date) {
      target[key] = sourceValue;
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.create(
        Object.getPrototypeOf(targetValue),
        Object.getOwnPropertyDescriptors(targetValue)
      ), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
};
const ColorsClassesPresets = [
  {
    prefix: "bg",
    property: "background-color"
  },
  {
    prefix: "text",
    property: ["color", "fill"]
  }
];
const getColorsClassesDefaultConfig = () => ColorsClassesPresets;
const makeColorsConfig = (values) => ({
  ...values,
  get variables() {
    return this.presets[this.currentPresetName];
  },
  set variables(value) {
    this.presets[this.currentPresetName] = value;
  }
});
const getColorDefaultConfig = () => makeColorsConfig({
  threshold: 150,
  presets: {
    light: presets.light,
    dark: presets.dark
  },
  currentPresetName: "light"
});
const defineIconAliases = (aliases) => aliases;
const VuesticIconAliases = defineIconAliases([
  {
    name: "va-unsorted",
    to: "swap_vert"
  },
  {
    name: "va-sort-asc",
    to: "va-arrow-up"
  },
  {
    name: "va-sort-desc",
    to: "va-arrow-down"
  },
  {
    name: "va-arrow-first",
    to: "mi-first_page"
  },
  {
    name: "va-arrow-last",
    to: "mi-last_page"
  },
  {
    name: "va-arrow-right",
    to: "mi-chevron_right"
  },
  {
    name: "va-arrow-left",
    to: "mi-chevron_left"
  },
  {
    name: "va-arrow-down",
    to: "mi-expand_more"
  },
  {
    name: "va-arrow-up",
    to: "mi-expand_less"
  },
  {
    name: "va-calendar",
    to: "mi-calendar_today"
  },
  {
    name: "va-delete",
    to: "mi-delete_outline"
  },
  {
    name: "va-check",
    to: "mi-check"
  },
  {
    name: "va-check-circle",
    to: "mi-check_circle"
  },
  {
    name: "va-warning",
    to: "mi-warning"
  },
  {
    name: "va-clear",
    to: "mi-highlight_off"
  },
  {
    name: "va-close",
    to: "mi-close"
  },
  {
    name: "va-loading",
    to: "mi-loop"
  },
  {
    name: "va-plus",
    to: "mi-add"
  },
  {
    name: "va-minus",
    to: "mi-remove"
  }
]);
const VuesticIconFonts = [
  {
    name: "mi-{icon}",
    class: "material-icons",
    resolve: ({ icon }) => ({ content: icon })
  },
  // Fallback
  {
    name: "{icon}",
    class: "material-icons",
    resolve: ({ icon }) => ({ content: icon })
  }
];
const createIconsConfig = (config) => {
  config.aliases = config.aliases || [];
  config.fonts = config.fonts || [];
  return [
    ...config.aliases,
    ...VuesticIconAliases,
    ...config.fonts,
    ...VuesticIconFonts
  ];
};
const getIconDefaultConfig = () => createIconsConfig({});
const getComponentsDefaultConfig = () => (
  // TODO: Should be handled in size service
  {
    VaIcon: {
      sizesConfig: {
        defaultSize: 18,
        sizes: {
          small: 14,
          medium: 18,
          large: 24
        }
      }
    },
    VaRating: {
      sizesConfig: {
        defaultSize: 18,
        sizes: {
          small: 14,
          medium: 18,
          large: 24
        }
      }
    },
    all: {},
    presets: {
      VaButton: {
        default: {
          backgroundOpacity: 1,
          hoverBehavior: "mask",
          hoverOpacity: 0.15,
          pressedBehavior: "mask",
          pressedOpacity: 0.13
        },
        primary: {
          backgroundOpacity: 0.1,
          hoverBehavior: "opacity",
          hoverOpacity: 0.07,
          pressedBehavior: "opacity",
          pressedOpacity: 0.13
        },
        secondary: {
          backgroundOpacity: 0,
          hoverBehavior: "opacity",
          hoverOpacity: 0.07,
          pressedBehavior: "opacity",
          pressedOpacity: 0.13
        },
        plain: {
          plain: true,
          hoverBehavior: "mask",
          hoverOpacity: 0.15,
          pressedBehavior: "mask",
          pressedOpacity: 0.13
        },
        plainOpacity: {
          plain: true,
          textOpacity: 0.6,
          hoverBehavior: "opacity",
          hoverOpacity: 1,
          pressedBehavior: "opacity",
          pressedOpacity: 0.9
        }
      },
      VaInputWrapper: {
        solid: {
          background: "backgroundElement"
        },
        bordered: {
          class: "va-input-wrapper--bordered",
          background: "backgroundElement"
        }
      },
      VaCheckbox: {
        solid: {
          style: "--va-checkbox-background: var(--va-background-element)"
        }
      },
      VaRadio: {
        solid: {
          style: "--va-radio-background: var(--va-background-element)"
        }
      },
      VaMenu: {
        context: {
          cursor: true,
          placement: "right-start",
          trigger: "right-click"
        }
      }
    }
  }
);
const getI18nConfigDefaults = () => ({
  // PROPS
  /** Select search field default text */
  search: "Search",
  /** Select no options text */
  noOptions: "Items not found",
  /** Modal Ok button default text */
  ok: "OK",
  /** Modal Cancel button default text */
  cancel: "Cancel",
  /** FileUpload default button text */
  uploadFile: "Upload file",
  /** FileUpload default undo button text */
  undo: "Undo",
  /** FileUpload default dropzone text */
  dropzone: "Drop files here to upload",
  /** FileUpload default file deleted alert text */
  fileDeleted: "File deleted",
  // Aria attributes
  /** Alert close button aria-label */
  closeAlert: "close alert",
  backToTop: "back to top",
  toggleDropdown: "toggle dropdown",
  carousel: "carousel",
  goPreviousSlide: "go previous slide",
  goNextSlide: "go next slide",
  goSlide: "go slide {index}",
  slideOf: "slide {index} of {length}",
  close: "close",
  openColorPicker: "open color picker",
  colorSelection: "color selection",
  colorName: "color {color}",
  decreaseCounter: "decrease counter",
  increaseCounter: "increase counter",
  selectAllRows: "select all rows",
  sortColumnBy: "sort column by {name}",
  selectRowByIndex: "select row {index}",
  resetDate: "reset date",
  nextPeriod: "next period",
  switchView: "switch view",
  previousPeriod: "previous period",
  removeFile: "remove file",
  reset: "reset",
  pagination: "pagination",
  goToTheFirstPage: "go to the first page",
  goToPreviousPage: "go to the previous page",
  goToSpecificPage: "go to the {page} page",
  goToSpecificPageInput: "enter the page number to go",
  goNextPage: "go next page",
  goLastPage: "go last page",
  /** Rating aria-label */
  currentRating: "current rating {value} of {max}",
  /** Rating item aria-label */
  voteRating: "vote rating {value} of {max}",
  /** Select search input aria-label */
  optionsFilter: "options filter",
  splitPanels: "split panels",
  movePaginationLeft: "move pagination left",
  movePaginationRight: "move pagination right",
  resetTime: "reset time",
  closeToast: "close toast",
  /**
   * Select aria-label selected option prefix
   *
   * @example
   *
   * `Selected option: {option}` or `Selected option: Animal`
   */
  selectedOption: "Selected option",
  /** Select aria-label if no option is selected */
  noSelectedOption: "Option is not selected",
  breadcrumbs: "breadcrumbs",
  counterValue: "counter value",
  selectedDate: "selected date",
  selectedTime: "selected time",
  progressState: "progress state",
  color: "color",
  /** Stepper next button text */
  next: "Next",
  /** Stepper previous button text */
  back: "Previous",
  /** Stepper finish button text */
  finish: "Finish",
  step: "step",
  progress: "progress",
  /** Skeleton aria label */
  loading: "Loading",
  /** Slider aria label */
  sliderValue: "Current slider value is {value}",
  /** Switch aria label */
  switch: "Switch",
  /** Input aria label */
  inputField: "Input field",
  /** File Input message when file type is incorrect */
  fileTypeIncorrect: "File type is incorrect",
  /** Select aria label */
  select: "Select an option"
});
const GLOBAL_CONFIG = Symbol("GLOBAL_CONFIG");
const getDefaultConfig = () => ({
  colors: getColorDefaultConfig(),
  icons: getIconDefaultConfig(),
  components: getComponentsDefaultConfig(),
  breakpoint: getBreakpointDefaultConfig(),
  i18n: getI18nConfigDefaults(),
  colorsClasses: getColorsClassesDefaultConfig(),
  /**
   * global config variable to pass nuxt-link component to vuestic-ui via @vuestic/nuxt
   * TODO: give a try to integrate inertia js router components via this option
   * TODO: if this try won't be success, may be remake to provide/inject
   */
  routerComponent: void 0
});
const createGlobalConfig = (defaultConfig = {}) => {
  const globalConfig = ref(mergeDeep(getDefaultConfig(), defaultConfig));
  const getGlobalConfig = () => globalConfig.value;
  const setGlobalConfig = (updater) => {
    const config = typeof updater === "function" ? updater(globalConfig.value) : updater;
    globalConfig.value = cloneDeep(config);
  };
  const mergeGlobalConfig = (updater) => {
    const config = typeof updater === "function" ? updater(globalConfig.value) : updater;
    globalConfig.value = mergeDeep(cloneDeep(globalConfig.value), config);
  };
  return {
    getGlobalConfig,
    setGlobalConfig,
    mergeGlobalConfig,
    globalConfig
  };
};
const provideForCurrentApp = (provide2) => {
  var _a, _b;
  const provides = ((_a = getCurrentInstance()) == null ? void 0 : _a.appContext.provides) || ((_b = getCurrentApp()) == null ? void 0 : _b._context.provides);
  if (!provides) {
    throw new Error("Vue app not found for provide");
  }
  provides[GLOBAL_CONFIG] = provide2;
  return provide2;
};
function useGlobalConfig() {
  let injected = inject(GLOBAL_CONFIG);
  if (!injected) {
    injected = createGlobalConfig();
    provideForCurrentApp(injected);
  }
  return injected;
}
const withPresetProp = (props) => "preset" in props;
const getPresetProp = (props) => withPresetProp(props) ? props.preset : void 0;
const useComponentConfigProps = (component, originalProps) => {
  const localConfig = useLocalConfig();
  const { globalConfig } = useGlobalConfig();
  const componentName = component.name;
  const getPresetProps = (presetPropValue) => {
    return (presetPropValue instanceof Array ? presetPropValue : [presetPropValue]).reduce((acc, presetName) => {
      var _a, _b, _c;
      const presetProps = (_c = (_b = (_a = globalConfig.value.components) == null ? void 0 : _a.presets) == null ? void 0 : _b[componentName]) == null ? void 0 : _c[presetName];
      if (!presetProps) {
        return acc;
      }
      const extendedPresets = getPresetProp(presetProps);
      return {
        ...acc,
        ...extendedPresets ? getPresetProps(extendedPresets) : void 0,
        ...presetProps
      };
    }, {});
  };
  const parentInjectedProps = injectChildPropsFromParent();
  return computed(() => {
    var _a, _b;
    const globalConfigProps = {
      ...(_a = globalConfig.value.components) == null ? void 0 : _a.all,
      ...(_b = globalConfig.value.components) == null ? void 0 : _b[componentName]
    };
    const localConfigProps = localConfig.value.reduce((finalConfig, config) => {
      const componentConfigProps = config[componentName];
      return componentConfigProps ? { ...finalConfig, ...componentConfigProps } : finalConfig;
    }, {});
    const presetProp = [
      originalProps,
      parentInjectedProps == null ? void 0 : parentInjectedProps.value,
      localConfigProps,
      globalConfigProps
    ].filter(notNil).map(getPresetProp).filter(notNil).at(0);
    const presetProps = presetProp ? getPresetProps(presetProp) : void 0;
    return { ...globalConfigProps, ...localConfigProps, ...presetProps };
  });
};
const createSetupFn = (component) => {
  return (originalProps, ctx) => {
    var _a;
    const instance = getCurrentInstance();
    const propsFromConfig = useComponentConfigProps(component, originalProps);
    const attrsFromConfig = computed(() => {
      return omit(propsFromConfig.value, Object.keys(originalProps));
    });
    const props = createProps(instance, propsFromConfig);
    const attrs = createAttrs(instance, attrsFromConfig);
    const slots = createSlots(instance, propsFromConfig);
    instance.props = props;
    instance.attrs = attrs;
    instance.slots = slots;
    const setupState = (_a = component.setup) == null ? void 0 : _a.call(component, shallowReadonly(props), {
      ...ctx,
      attrs,
      slots
    });
    if (typeof setupState === "object" && !instance.exposed) {
      ctx.expose(setupState);
    }
    return setupState;
  };
};
const createProxyComponent = (component) => {
  const setupFn = createSetupFn(component);
  const renderFn = createRenderFn(component);
  return new Proxy(component, {
    get(target, key) {
      if (!(key in component)) {
        return Reflect.get(target, key);
      }
      if (key === "setup") {
        return setupFn;
      }
      if (key === "render" || key === "ssrRender") {
        return renderFn;
      }
      return Reflect.get(target, key);
    }
  });
};
const CLASS_COMPONENT_KEY = "__c";
const patchClassComponent = (component) => {
  component[CLASS_COMPONENT_KEY] = createProxyComponent(component[CLASS_COMPONENT_KEY]);
  return component;
};
const withConfigTransport = (component) => {
  if ("setup" in component) {
    return createProxyComponent(component);
  } else if (CLASS_COMPONENT_KEY in component) {
    return patchClassComponent(component);
  } else {
    component.setup = () => ({
      /* Fake setup function */
    });
    return createProxyComponent(component);
  }
};
const withConfigTransport$1 = withConfigTransport;
const sizesConfig = {
  defaultSize: 48,
  sizes: {
    small: 32,
    medium: 48,
    large: 64
  }
};
const fontSizesConfig = {
  defaultSize: 1,
  sizes: {
    small: 0.75,
    medium: 1,
    large: 1.25
  }
};
const useSizeProps = {
  size: {
    type: [String, Number],
    default: "",
    validator: (size) => {
      return typeof size === "string" || typeof size === "number";
    }
  },
  sizesConfig: {
    type: Object,
    default: () => sizesConfig
  },
  fontSizesConfig: {
    type: Object,
    default: () => fontSizesConfig
  }
};
const fontRegex = /(?<fontSize>\d+)(?<extension>px|rem)/i;
const convertToRem = (px) => px / 16 - 0.5;
const useSize = (props, componentName = ((_a) => (_a = getCurrentInstance()) == null ? void 0 : _a.type.name)()) => {
  const { getGlobalConfig } = useGlobalConfig();
  const sizesConfigGlobal = computed(() => {
    var _a2, _b;
    return componentName ? (_b = (_a2 = getGlobalConfig().components) == null ? void 0 : _a2[componentName]) == null ? void 0 : _b.sizesConfig : void 0;
  });
  const sizeComputed = computed(() => {
    var _a2, _b, _c;
    const { defaultSize, sizes } = props.sizesConfig;
    const defaultSizeGlobal = (_a2 = sizesConfigGlobal.value) == null ? void 0 : _a2.defaultSize;
    if (!props.size) {
      return `${defaultSize || defaultSizeGlobal}px`;
    }
    if (typeof props.size === "string") {
      const sizeFromGlobalConfig = (_c = (_b = sizesConfigGlobal.value) == null ? void 0 : _b.sizes) == null ? void 0 : _c[props.size];
      const sizeFromProps = sizes[props.size];
      if (sizeFromProps) {
        return `${sizeFromProps}px`;
      }
      if (sizeFromGlobalConfig) {
        return `${sizeFromGlobalConfig}px`;
      }
      return props.size;
    }
    return `${props.size}px`;
  });
  const fontSizeInRem = computed(() => {
    const { defaultSize, sizes } = props.fontSizesConfig;
    if (!props.size) {
      return defaultSize;
    }
    if (typeof props.size === "string") {
      if (props.size in sizes) {
        return sizes[props.size];
      }
      const fontSizeParsed = props.size.match(fontRegex);
      if (!fontSizeParsed || !fontSizeParsed.groups) {
        throw new Error("Size prop should be either valid string or number");
      }
      const { extension, fontSize } = fontSizeParsed.groups;
      return extension === "rem" ? +fontSize : convertToRem(+fontSize);
    }
    return convertToRem(props.size);
  });
  const fontSizeComputed = computed(() => `${fontSizeInRem.value}rem`);
  return {
    sizeComputed,
    fontSizeComputed,
    fontSizeInRem
  };
};
const useComponentPresetProp = {
  preset: {
    type: [String, Array],
    default: void 0
  }
};
const isMatchRegex = (str, regex) => {
  return regex.test(str);
};
const regexGroupsValues = (str, regex) => {
  if (typeof regex !== "string" && regex.global) {
    return [...str.matchAll(regex)].map((g) => g.slice(1));
  }
  const match = str.match(regex) || [];
  if (!match) {
    return [];
  }
  if (match.length > 1) {
    return match.slice(1);
  }
  return match;
};
const dynamicSegmentRegex = /{[^}]*}/g;
const dynamicSegmentStringToRegex = (template) => {
  return template.replace(dynamicSegmentRegex, "(.*)");
};
const dynamicSegmentsNames = (template) => {
  return (template.match(dynamicSegmentRegex) || []).map((g) => g.replace(/{|}/g, ""));
};
const dynamicSegmentsValues = (str, template) => {
  return regexGroupsValues(str, dynamicSegmentStringToRegex(template));
};
const dynamicSegments = (str, template) => {
  const params = dynamicSegmentsNames(template);
  const values = dynamicSegmentsValues(str, template);
  return params.reduce((acc, paramValue, i) => ({ ...acc, [paramValue]: values[i] }), {});
};
const strictMatch = (str, regex) => {
  return (str.match(regex) || [])[0] === str;
};
const isMatchDynamicSegments = (str, template) => {
  const templateRegex = dynamicSegmentStringToRegex(template);
  return strictMatch(str, new RegExp(templateRegex));
};
const isIconConfigurationString = (config) => {
  return typeof config.name === "string";
};
const isIconConfigurationRegex = (config) => {
  return config.name instanceof RegExp;
};
const isMatchConfiguration = (iconName, iconConfiguration) => {
  if (isIconConfigurationString(iconConfiguration)) {
    return isMatchDynamicSegments(iconName, iconConfiguration.name);
  }
  if (isIconConfigurationRegex(iconConfiguration)) {
    return isMatchRegex(iconName, iconConfiguration.name);
  }
  return false;
};
const resolveIconConfigurationString = (iconName, iconConfiguration) => {
  const args = dynamicSegments(iconName, iconConfiguration.name);
  return iconConfiguration.resolve && iconConfiguration.resolve(args);
};
const resolveIconConfigurationRegex = (iconName, iconConfig) => {
  if (iconConfig.name.global) {
    throw new Error(`Bad icon config with name ${iconConfig.name}. Please, don't use global regex as name.`);
  }
  const args = regexGroupsValues(iconName, iconConfig.name);
  return iconConfig.resolveFromRegex && iconConfig.resolveFromRegex(...args);
};
const resolveIconConfiguration = (iconName, iconConfiguration) => {
  if (isIconConfigurationString(iconConfiguration)) {
    return resolveIconConfigurationString(iconName, iconConfiguration);
  }
  if (isIconConfigurationRegex(iconConfiguration)) {
    return resolveIconConfigurationRegex(iconName, iconConfiguration);
  }
  throw Error("Unknown icon config");
};
const findMatchedIconConfiguration = (iconName, globalIconConfig, namesToIgnore = []) => {
  const matchedConfig = globalIconConfig.find((config) => {
    if (namesToIgnore.includes(config.name.toString())) {
      return false;
    }
    return isMatchConfiguration(iconName, config);
  });
  if (!matchedConfig) {
    throw new Error(`Can not find icon config from ${iconName}. Please provide default config.`);
  }
  return matchedConfig;
};
const findIconConfiguration = (iconName, globalIconConfig, namesToIgnore = []) => {
  if (!iconName) {
    return;
  }
  const matchedIconConfiguration = findMatchedIconConfiguration(iconName, globalIconConfig, namesToIgnore);
  const resolvedIconConfiguration = mergeDeep(resolveIconConfiguration(iconName, matchedIconConfiguration), matchedIconConfiguration);
  namesToIgnore = [...namesToIgnore, matchedIconConfiguration.name.toString()];
  return mergeDeep(
    findIconConfiguration(resolvedIconConfiguration.to, globalIconConfig, namesToIgnore),
    resolvedIconConfiguration
  );
};
const iconPropsFromIconConfiguration = (iconConfiguration) => {
  const junkKeys = ["name", "to", "resolve", "resolveFromRegex"];
  const configuration = iconConfiguration;
  junkKeys.forEach((key) => {
    delete configuration[key];
  });
  return configuration;
};
const getIconConfiguration = (name, iconConfig) => {
  const configuration = findIconConfiguration(name, iconConfig);
  if (configuration === void 0) {
    return {};
  }
  return iconPropsFromIconConfiguration(configuration);
};
const useIcon = () => {
  const { globalConfig } = useGlobalConfig();
  return {
    getIcon: (name) => getIconConfiguration(name, globalConfig.value.icons)
  };
};
const VaAppCachePluginKey = Symbol("VaAppCachePlugin");
const useCache = () => {
  const cache = inject(VaAppCachePluginKey);
  if (!cache) {
    return {
      colorContrast: {}
    };
  }
  return cache;
};
const useReactiveComputed = (obj) => {
  const objectRef = typeof obj === "function" ? computed(obj) : computed(obj);
  const proxy = new Proxy(objectRef, {
    get(target, p, receiver) {
      if (typeof objectRef.value !== "object") {
        return void 0;
      }
      return unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(target, p, value) {
      if (isRef(objectRef.value[p]) && !isRef(value)) {
        objectRef.value[p].value = value;
      } else {
        objectRef.value[p] = value;
      }
      return true;
    },
    deleteProperty(target, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(target, p) {
      if (typeof objectRef.value !== "object") {
        return false;
      }
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      if (typeof objectRef.value !== "object") {
        return [];
      }
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
};
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const wordsRegex = /[A-Z0-9]*(?:[^\-_|A-Z|\s.])*/gm;
const getWords = (str) => {
  var _a;
  return ((_a = str.match(wordsRegex)) == null ? void 0 : _a.map((word) => word.trim().split(/([0-9]+)|([a-zA-Z]+)/g)).flat().filter(Boolean)) || [];
};
const camelCaseToKebabCase = (str) => {
  return getWords(str).map((word) => word.toLowerCase()).join("-");
};
const kebabCaseToCamelCase = (str) => {
  return getWords(str).map((word, index) => index === 0 ? word.toLowerCase() : capitalize(word)).join("");
};
const HEX_TEST_REGEX = /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6,8})$/;
const RGB_TEST_REGEX = /^rgba?\(([\d.]+, ?){2}[\d.]+(, ?[\d.]+)?\)$/;
const HSL_TEST_REGEX = /hsla?\([\d.]+(deg|rad|turn|grad)?(,?\s?[\d.]+%?){2}(,?\s?(\/\s?)?[\d.]+%?)?\)/;
const isColor = (strColor) => {
  return HEX_TEST_REGEX.test(strColor) || RGB_TEST_REGEX.test(strColor) || HSL_TEST_REGEX.test(strColor);
};
const isHSLObject = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  return "h" in obj && "s" in obj && "l" in obj;
};
const isRGBObject = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  return "r" in obj && "g" in obj && "b" in obj;
};
const tryParseHex = (color) => {
  if (!HEX_TEST_REGEX.test(color)) {
    return null;
  }
  const hex = color.replace("#", "");
  const isShort = hex.length < 6;
  const [r, g, b2, a] = isShort ? hex.split("").map((char) => parseInt(char + char, 16)) : hex.match(/.{2}/g).map((hex2) => parseInt(hex2, 16));
  return { r, g, b: b2, a: a ?? 1 };
};
const tryParseRgb = (color) => {
  if (!RGB_TEST_REGEX.test(color)) {
    return null;
  }
  const [r, g, b2, a = 1] = color.match(/[\d.]+/g).map(Number);
  return { r, g, b: b2, a };
};
const tryParseHsla = (color) => {
  if (!HSL_TEST_REGEX.test(color)) {
    return null;
  }
  const [h2, s, l, a = "1"] = color.match(/[\d.]+%?/g);
  return {
    h: Number(h2),
    s: Number(s.replace("%", "")),
    l: Number(l.replace("%", "")),
    a: a.endsWith("%") ? Number(a.replace("%", "")) / 100 : Number(a)
  };
};
const rgbaToHsla = (rgba) => {
  const r = rgba.r / 255;
  const g = rgba.g / 255;
  const b2 = rgba.b / 255;
  const max = Math.max(r, g, b2);
  const min = Math.min(r, g, b2);
  let h2 = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h2 = (g - b2) / d + (g < b2 ? 6 : 0);
        break;
      case g:
        h2 = (b2 - r) / d + 2;
        break;
      case b2:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 *= 60;
  }
  return { h: Math.round(h2), s: Math.round(s * 100), l: Math.round(l * 100), a: rgba.a };
};
const hueToRgb = (p, q2, t) => {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q2 - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q2;
  }
  if (t < 2 / 3) {
    return p + (q2 - p) * (2 / 3 - t) * 6;
  }
  return p;
};
const hslaToRgba = (hsla) => {
  const h2 = hsla.h / 360;
  const s = hsla.s / 100;
  const l = hsla.l / 100;
  const q2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q2;
  const r = hueToRgb(p, q2, h2 + 1 / 3);
  const g = hueToRgb(p, q2, h2);
  const b2 = hueToRgb(p, q2, h2 - 1 / 3);
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b2 * 255), a: hsla.a };
};
const parseColorToHSL = (color) => {
  if (isHSLObject(color)) {
    return { ...color };
  }
  if (isRGBObject(color)) {
    return rgbaToHsla(color);
  }
  const rgb = tryParseHex(color) ?? tryParseRgb(color);
  if (rgb) {
    return rgbaToHsla(rgb);
  }
  const hsl = tryParseHsla(color);
  if (hsl) {
    return hsl;
  }
  throw new Error(`Color ${color} is not valid. Please, provide valid color.`);
};
const hslToString = ({ h: h2, s, l, a }) => {
  return `hsla(${h2},${s}%,${l}%,${a ?? 1})`;
};
const parseColorToRGB = (color) => {
  if (isRGBObject(color)) {
    return { ...color };
  }
  if (isHSLObject(color)) {
    return hslaToRgba(color);
  }
  const hsl = tryParseHsla(color);
  if (hsl) {
    return hslaToRgba(hsl);
  }
  const rgb = tryParseHex(color) ?? tryParseRgb(color);
  if (rgb) {
    return rgb;
  }
  throw new Error(`Color ${color} is not valid. Please, provide valid color.`);
};
const rgbToString = ({ r, g, b: b2, a }) => {
  if (a === 1) {
    return `rgb(${r},${g},${b2})`;
  }
  return `rgba(${r},${g},${b2},${a ?? 1})`;
};
const colorToString = (color) => {
  if (isHSLObject(color)) {
    return hslToString(color);
  }
  if (isRGBObject(color)) {
    return rgbToString(color);
  }
  if (typeof color === "string") {
    return color;
  }
  throw new Error(`Color ${color} is not valid. Please, provide valid color.`);
};
const setHSLA = (color, { h: h2, s, l, a }) => {
  const parsedColor = parseColorToHSL(color);
  parsedColor.a = parsedColor.a ?? 1;
  parsedColor.h = h2 ?? parsedColor.h;
  parsedColor.s = s ?? parsedColor.s;
  parsedColor.l = l ?? parsedColor.l;
  parsedColor.a = a ?? parsedColor.a;
  if (parsedColor.h < 0) {
    parsedColor.h = 360 + parsedColor.h;
  }
  if (parsedColor.h > 360) {
    parsedColor.h = parsedColor.h - 360;
  }
  parsedColor.s = Math.max(0, Math.min(100, parsedColor.s));
  parsedColor.l = Math.max(0, Math.min(100, parsedColor.l));
  parsedColor.a = Math.max(0, Math.min(1, parsedColor.a));
  return parsedColor;
};
const shiftHSLA = (color, { h: h2, s, l, a }) => {
  const parsedColor = parseColorToHSL(color);
  parsedColor.a = parsedColor.a ?? 1;
  parsedColor.h += h2 ?? 0;
  parsedColor.s += s ?? 0;
  parsedColor.l += l ?? 0;
  parsedColor.a += a ?? 0;
  if (parsedColor.h < 0) {
    parsedColor.h = 360 + parsedColor.h;
  }
  if (parsedColor.h > 360) {
    parsedColor.h = parsedColor.h - 360;
  }
  parsedColor.s = Math.max(0, Math.min(100, parsedColor.s));
  parsedColor.l = Math.max(0, Math.min(100, parsedColor.l));
  parsedColor.a = Math.max(0, Math.min(1, parsedColor.a));
  return parsedColor;
};
const isCSSVariable = (strColor) => /var\(--.+\)/.test(strColor);
const cssVariableName = (colorName) => `--va-${camelCaseToKebabCase(colorName)}`;
const normalizeColorName = (colorName) => kebabCaseToCamelCase(colorName);
const colorToRgba = (color, opacity) => {
  const { r, g, b: b2 } = parseColorToRGB(color);
  return rgbToString({ r, g, b: b2, a: opacity });
};
const getColorLightness = (color) => {
  const { r, g, b: b2 } = parseColorToRGB(color);
  return Math.sqrt(r * r * 0.241 + g * g * 0.691 + b2 * b2 * 0.068);
};
const getBoxShadowColor = (color, opacity = 0.4) => {
  return colorToRgba(color, opacity);
};
const getBoxShadowColorFromBg = (background, opacity = 0.4) => {
  return colorToRgba(background, opacity);
};
const getHoverColor = (color, opacity = 0.2) => {
  return colorToRgba(color, opacity);
};
const getFocusColor = (color, opacity = 0.3) => {
  return colorToRgba(color, opacity);
};
const shiftHSLAColor = (color, shift) => {
  return hslToString(shiftHSLA(parseColorToHSL(color), shift));
};
const setHSLAColor = (color, shift) => {
  return hslToString(setHSLA(parseColorToHSL(color), shift));
};
const shiftGradientColor = (color) => {
  const newColor = parseColorToHSL(color);
  if (newColor.s < 10) {
    return shiftHSLAColor(newColor, { h: 2, s: 5, l: 10 });
  }
  if (newColor.s < 30) {
    return shiftHSLAColor(newColor, { s: -14, l: 11 });
  }
  if (newColor.h >= 0 && newColor.h < 44 || newColor.h >= 285) {
    return shiftHSLAColor(newColor, { h: 11, s: 27, l: 8 });
  }
  if (newColor.h >= 44 && newColor.h < 85) {
    return shiftHSLAColor(newColor, { h: 3, l: 9 });
  }
  if (newColor.h >= 85 && newColor.h < 165) {
    return shiftHSLAColor(newColor, { h: 16, l: 14 });
  }
  if (newColor.h >= 165 && newColor.h < 285) {
    return shiftHSLAColor(newColor, { h: -15, s: 3, l: 2 });
  }
  throw new Error("This method should handle all colors. But it didn't for some reason.");
};
const getGradientBackground = (color) => {
  const colorLeft = shiftGradientColor(color);
  return `linear-gradient(to right, ${colorLeft}, ${colorToString(color)})`;
};
const getStateMaskGradientBackground = (color, maskColor, maskOpacity) => {
  const mask = colorToRgba(maskColor, maskOpacity);
  return `linear-gradient(0deg, ${mask}, ${mask}), ${color}`;
};
const isColorTransparent = (color) => {
  if (!color) {
    return false;
  }
  if (color === "transparent") {
    return true;
  }
  return parseColorToRGB(color).a <= 0.1;
};
const useColors = () => {
  const gc = useGlobalConfig();
  if (!gc) {
    throw new Error("useColors must be used in setup function or Vuestic GlobalConfigPlugin is not registered!");
  }
  const { globalConfig } = gc;
  const colors = useReactiveComputed({
    get: () => globalConfig.value.colors.presets[globalConfig.value.colors.currentPresetName],
    set: (v) => {
      setColors(v);
    }
  });
  const setColors = (colors2) => {
    globalConfig.value.colors.presets[globalConfig.value.colors.currentPresetName] = {
      ...globalConfig.value.colors.variables,
      ...colors2
    };
  };
  const getColors = () => {
    return colors;
  };
  const getColor = (prop, defaultColor, preferVariables) => {
    if (!defaultColor) {
      defaultColor = colors.primary;
    }
    if (prop === "transparent") {
      return "#ffffff00";
    }
    if (prop === "currentColor") {
      return prop;
    }
    if (prop == null ? void 0 : prop.startsWith("on")) {
      const colorName = prop.slice(2);
      if (colors[normalizeColorName(colorName)]) {
        return getColor(getTextColor(getColor(colorName)), void 0, preferVariables);
      }
    }
    if (!prop) {
      prop = getColor(defaultColor);
    }
    const colorValue = colors[prop] || colors[normalizeColorName(prop)];
    if (colorValue) {
      return preferVariables ? `var(${cssVariableName(prop)})` : colorValue;
    }
    if (isColor(prop)) {
      return prop;
    }
    if (preferVariables && isCSSVariable(prop)) {
      return prop;
    }
    warn(`'${prop}' is not a proper color! Use HEX or default color themes
      names (https://vuestic.dev/en/styles/colors#default-color-themes)`);
    return getColor(defaultColor);
  };
  const getComputedColor = (color) => {
    return computed({
      get() {
        return getColor(color);
      },
      set(v) {
        setColors({ [color]: v });
      }
    });
  };
  const colorsToCSSVariable = (colors2, prefix = "va") => {
    return Object.keys(colors2).filter((key) => colors2[key] !== void 0).reduce((acc, colorName) => {
      acc[`--${prefix}-${camelCaseToKebabCase(colorName)}`] = getColor(colors2[colorName], void 0, true);
      acc[`--${prefix}-on-${camelCaseToKebabCase(colorName)}`] = getColor(getTextColor(getColor(colors2[colorName])), void 0, true);
      return acc;
    }, {});
  };
  const cache = useCache();
  const getColorLightnessFromCache = (color) => {
    if (typeof color !== "string") {
      return getColorLightness(color);
    }
    if (!cache.colorContrast[color]) {
      cache.colorContrast[color] = getColorLightness(color);
    }
    return cache.colorContrast[color];
  };
  const computedDarkColor = computed(() => {
    return getColorLightnessFromCache(getColor("textPrimary")) > 255 / 2 ? "textInverted" : "textPrimary";
  });
  const computedLightColor = computed(() => {
    return getColorLightnessFromCache(getColor("textPrimary")) > 255 / 2 ? "textPrimary" : "textInverted";
  });
  const getTextColor = (color, darkColor, lightColor) => {
    const onColorName = `on${capitalize$1(String(color))}`;
    if (colors[onColorName]) {
      return colors[onColorName];
    }
    darkColor = darkColor || computedDarkColor.value;
    lightColor = lightColor || computedLightColor.value;
    return getColorLightnessFromCache(color) > globalConfig.value.colors.threshold ? darkColor : lightColor;
  };
  const currentPresetName = computed({
    get: () => globalConfig.value.colors.currentPresetName,
    set: (v) => {
      applyPreset(v);
    }
  });
  const presets2 = computed(() => globalConfig.value.colors.presets);
  const applyPreset = (presetName) => {
    globalConfig.value.colors.currentPresetName = presetName;
    if (!globalConfig.value.colors.presets[presetName]) {
      return warn(`Preset ${presetName} does not exist`);
    }
  };
  return {
    colors,
    currentPresetName,
    presets: presets2,
    applyPreset,
    setColors,
    getColors,
    getColor,
    getComputedColor,
    getBoxShadowColor,
    getBoxShadowColorFromBg,
    getHoverColor,
    getFocusColor,
    getGradientBackground,
    getTextColor,
    shiftHSLAColor,
    setHSLAColor,
    colorsToCSSVariable,
    colorToRgba,
    getStateMaskGradientBackground
  };
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...{
    name: "VaIcon"
  },
  __name: "VaIcon",
  props: {
    ...useSizeProps,
    ...useComponentPresetProp,
    name: { type: String, default: "" },
    tag: { type: String },
    component: { type: Object },
    color: { type: String },
    rotation: { type: [String, Number] },
    spin: { type: [String, Boolean] },
    flip: {
      type: String,
      default: "off",
      validator: (value) => ["off", "horizontal", "vertical", "both"].includes(value)
    }
  },
  setup(__props) {
    const props = __props;
    const { getColor } = useColors();
    const { sizeComputed } = useSize(props);
    const { getIcon } = useIcon();
    const iconConfig = computed(() => getIcon(props.name));
    const computedTag = computed(() => props.component || props.tag || iconConfig.value.component || iconConfig.value.tag || "i");
    const attrs = useAttrs();
    const computedAttrs = computed(() => ({ ...iconConfig.value.attrs, ...omit(attrs, ["class"]) }));
    const getSpinClass = (spin) => {
      if (spin === void 0 || spin === false) {
        return;
      }
      return spin === "counter-clockwise" ? "va-icon--spin-reverse" : "va-icon--spin";
    };
    const computedClass = computed(() => [
      iconConfig.value.class,
      getSpinClass(props.spin ?? iconConfig.value.spin)
    ]);
    const transformStyle = computed(() => {
      const rotation = props.rotation ? `rotate(${props.rotation}deg)` : "";
      const flipY = props.flip === "vertical" || props.flip === "both" ? -1 : 1;
      const flipX = props.flip === "horizontal" || props.flip === "both" ? -1 : 1;
      const scale = props.flip === "off" ? "" : `scale(${flipY}, ${flipX})`;
      return `${scale} ${rotation}`.trim();
    });
    const computedStyle = computed(() => ({
      transform: transformStyle.value,
      cursor: attrs.onClick ? "pointer" : null,
      color: props.color ? getColor(props.color, void 0, true) : iconConfig.value.color,
      fontSize: sizeComputed.value,
      height: sizeComputed.value,
      lineHeight: sizeComputed.value
    }));
    const tabindexComputed = computed(() => attrs.tabindex ?? -1);
    const ariaHiddenComputed = computed(() => attrs.role !== "button" || tabindexComputed.value < 0);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(computedTag.value), mergeProps({
        class: ["va-icon", computedClass.value],
        style: computedStyle.value,
        "aria-hidden": ariaHiddenComputed.value,
        notranslate: ""
      }, computedAttrs.value), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            iconConfig.value.content ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(iconConfig.value.content), 1)
            ], 64)) : createCommentVNode("", true)
          ])
        ]),
        _: 3
      }, 16, ["class", "style", "aria-hidden"]);
    };
  }
});
const VaIcon = withConfigTransport$1(_sfc_main$a);
const useNumericProp = (key) => {
  const props = getCurrentInstance().props;
  const numericComputed = computed(() => {
    const numeric = props == null ? void 0 : props[key];
    if (numeric === void 0) {
      return numeric;
    }
    return Number(numeric);
  });
  return numericComputed;
};
const isFunction = (value) => typeof value === "function";
const isServer = () => typeof window === "undefined";
const isClient = () => !isServer();
const useClientOnly = (cb) => {
  const isMounted = computed(isClient);
  const result = ref(null);
  watch(isMounted, () => {
    if (isMounted.value) {
      result.value = cb();
    }
  }, { immediate: true });
  return result;
};
const useWindow = () => useClientOnly(() => window);
const unwrapEl = (el) => {
  if (!el) {
    return;
  }
  if (typeof el !== "object") {
    return;
  }
  el = unref(el);
  if (!el) {
    return;
  }
  if (typeof el.$el !== "undefined") {
    return el.$el;
  }
  return el;
};
const addEventListener = (target, ...args) => {
  if (!target || typeof target !== "object") {
    return;
  }
  if ("addEventListener" in target && typeof target.addEventListener === "function") {
    target.addEventListener(...args);
    return;
  }
  if ("parentElement" in target) {
    addEventListener(target.parentElement, ...args);
  }
};
const removeEventListener = (target, ...args) => {
  if (!target || typeof target !== "object") {
    return;
  }
  if ("removeEventListener" in target && typeof target.removeEventListener === "function") {
    target.removeEventListener(...args);
    return;
  }
  if ("parentElement" in target) {
    removeEventListener(target.parentElement, ...args);
  }
};
const useEvent = (event, listener, target) => {
  const source = target && typeof target !== "boolean" ? target : useWindow();
  const capture = typeof target === "boolean" ? target : false;
  watch(source, (newValue, oldValue) => {
    if (!Array.isArray(event)) {
      addEventListener(unwrapEl(unref(newValue)), event, listener, capture);
      removeEventListener(unwrapEl(unref(oldValue)), event, listener, capture);
    } else {
      event.forEach((e) => {
        addEventListener(unwrapEl(unref(newValue)), e, listener, capture);
        removeEventListener(unwrapEl(unref(oldValue)), e, listener, capture);
      });
    }
  }, { immediate: true });
};
const useTemplateRef = (key) => {
  const vm = getCurrentInstance();
  let _trigger = () => {
  };
  const el = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a;
        track();
        return (_a = vm.proxy) == null ? void 0 : _a.$refs[key];
      },
      set(value) {
      }
    };
  });
  onMounted(_trigger);
  onUpdated(_trigger);
  return el;
};
const isTranslationKey = (value) => value.startsWith("$t:");
const useTranslationProp = (defaultValue) => {
  return { type: String, default: defaultValue };
};
const applyI18nTemplate = (key, values) => {
  if (!values) {
    return key;
  }
  Object.keys(values).forEach((valueKey) => {
    key = key.replace(`{${valueKey}}`, String(values[valueKey]));
  });
  return key;
};
const useTranslation = () => {
  const { globalConfig } = useGlobalConfig();
  const config = computed(() => globalConfig.value.i18n);
  function t(key, values) {
    var _a;
    const $t = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.config.globalProperties.$t;
    if (typeof $t === "function") {
      const translated2 = $t(`vuestic.${key}`, values);
      if (translated2) {
        return translated2;
      }
    }
    const translated = config.value[key];
    if (!translated) {
      warn(`${key} not found in VuesticUI i18n config`);
      return key;
    }
    return applyI18nTemplate(translated, values) || key;
  }
  function tp(key, values) {
    if (!key) {
      return "";
    }
    if (isTranslationKey(key)) {
      return t(key.slice(3), values);
    }
    return applyI18nTemplate(key, values) || key;
  }
  return {
    tp,
    t
  };
};
const useTextColor = (componentColor, isTransparent = false) => {
  const { props } = getCurrentInstance();
  const { getColor, getTextColor } = useColors();
  const textColorComputed = computed(() => {
    if (props.textColor) {
      return getColor(props.textColor);
    }
    const bg = componentColor ? unref(componentColor) : props.color;
    if (!bg) {
      return "currentColor";
    }
    const componentColorHex = getColor(bg);
    if (isColorTransparent(componentColorHex)) {
      return "currentColor";
    }
    return unref(isTransparent) ? componentColorHex : getColor(getTextColor(componentColorHex));
  });
  return { textColorComputed };
};
const useButtonBackground = (colorComputed, isPressed, isHovered) => {
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error("`useButtonBackground` hook must be used only inside of setup function!");
  }
  const props = instance.props;
  const { getColor, getGradientBackground: getGradientBackground2 } = useColors();
  const backgroundColor = computed(() => {
    if (props.plain) {
      return "transparent";
    }
    return props.gradient ? getGradientBackground2(colorComputed.value) : colorComputed.value;
  });
  const hoveredBgState = computed(() => !props.plain && isHovered.value);
  const pressedBgState = computed(() => !props.plain && isPressed.value);
  const backgroundColorOpacity = computed(() => {
    if (pressedBgState.value && props.pressedBehavior === "opacity") {
      return props.pressedOpacity;
    }
    if (hoveredBgState.value && props.hoverBehavior === "opacity") {
      return Number(props.hoverOpacity);
    }
    return Number(props.backgroundOpacity);
  });
  const hoveredMaskState = computed(() => hoveredBgState.value && props.hoverBehavior === "mask");
  const pressedMaskState = computed(() => pressedBgState.value && props.pressedBehavior === "mask");
  const backgroundMaskOpacity = computed(() => {
    if (pressedMaskState.value) {
      return props.pressedOpacity;
    }
    if (hoveredMaskState.value) {
      return Number(props.hoverOpacity);
    }
    return 0;
  });
  const backgroundMaskColor = computed(() => {
    if (pressedMaskState.value) {
      return getColor(props.pressedMaskColor);
    }
    if (hoveredMaskState.value) {
      return getColor(props.hoverMaskColor);
    }
    return "transparent";
  });
  return {
    backgroundColor,
    backgroundColorOpacity,
    backgroundMaskOpacity,
    backgroundMaskColor
  };
};
const useRouterLinkProps = {
  tag: { type: String, default: "span" },
  to: { type: [String, Object], default: void 0 },
  replace: { type: Boolean, default: void 0 },
  append: { type: Boolean, default: void 0 },
  exact: { type: Boolean, default: void 0 },
  activeClass: { type: String, default: void 0 },
  exactActiveClass: { type: String, default: void 0 },
  href: { type: String, default: void 0 },
  target: { type: String, default: void 0 },
  disabled: { type: Boolean, default: false }
};
const useRouterLink = (props) => {
  const currentInstance = getCurrentInstance();
  const globalProperties = computed(() => currentInstance == null ? void 0 : currentInstance.appContext.config.globalProperties);
  const vueRouter = computed(() => {
    var _a;
    return (_a = globalProperties.value) == null ? void 0 : _a.$router;
  });
  const vueRoute = computed(() => {
    var _a;
    return (_a = globalProperties.value) == null ? void 0 : _a.$route;
  });
  const { getGlobalConfig } = useGlobalConfig();
  const tagComputed = computed(() => {
    if (props.disabled) {
      return props.tag;
    }
    if (props.href && !props.to) {
      return "a";
    }
    const globalConfig = getGlobalConfig();
    if (globalConfig.routerComponent && props.to) {
      return globalConfig.routerComponent;
    }
    if (props.to && vueRouter.value !== void 0) {
      return "router-link";
    }
    if (props.to && vueRouter.value === void 0) {
      return "a";
    }
    return props.tag || "div";
  });
  const isLinkTag = computed(() => {
    if (props.disabled) {
      return false;
    }
    return Boolean(props.href || props.to);
  });
  const linkAttributesComputed = computed(() => {
    if (!isLinkTag.value) {
      return {};
    }
    return tagComputed.value === "a" ? {
      target: props.target,
      href: hrefComputed.value
    } : {
      target: props.target,
      to: props.to,
      replace: props.replace,
      append: props.append,
      activeClass: props.activeClass,
      exact: props.exact,
      exactActiveClass: props.exactActiveClass
    };
  });
  const isActiveRouterLink = computed(() => {
    if (!vueRouter.value || !props.to) {
      return false;
    }
    const to = vueRouter.value.resolve(props.to).href;
    const currentHref = vueRouter.value.currentRoute.value.path;
    return to.replace("#", "") === currentHref.replace("#", "");
  });
  const hrefComputed = computed(() => {
    var _a;
    if (props.href) {
      return props.href;
    }
    if (vueRoute.value === void 0 && props.to) {
      return props.to;
    }
    return props.to ? (_a = vueRouter.value) == null ? void 0 : _a.resolve(props.to, vueRoute.value).href : void 0;
  });
  return {
    isLinkTag,
    tagComputed,
    hrefComputed,
    isActiveRouterLink,
    linkAttributesComputed
  };
};
const useButtonAttributes = (props) => {
  const { linkAttributesComputed, isLinkTag } = useRouterLink(props);
  const typeComputed = computed(() => isLinkTag.value ? void 0 : props.type);
  const buttonAttributesComputed = computed(() => {
    const disabledAttributes = {
      "aria-disabled": !!props.disabled,
      disabled: !!props.disabled
    };
    if (isLinkTag.value) {
      return disabledAttributes;
    }
    return {
      type: typeComputed.value,
      tabindex: props.loading || props.disabled ? -1 : 0,
      ...disabledAttributes
    };
  });
  return computed(() => ({ ...linkAttributesComputed.value, ...buttonAttributesComputed.value }));
};
const getOpacity = (opacity) => {
  var _a, _b, _c;
  if (isServer()) {
    return opacity;
  }
  if (opacity > 0) {
    const userAgent = (_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent;
    const isSafari = userAgent && /^((?!chrome|android).)*safari/i.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.userAgent);
    const isLatestSafari = userAgent && /(version.)15|16/i.test((_c = window == null ? void 0 : window.navigator) == null ? void 0 : _c.userAgent);
    if (isSafari && !isLatestSafari) {
      return opacity < 1 ? 1 - opacity : opacity;
    }
  }
  return opacity;
};
const useButtonTextColor = (textColorComputed, colorComputed, isPressed, isHovered) => {
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error("`useButtonTextColor` hook must be used only inside of setup function!");
  }
  const props = instance.props;
  const { getColor, colorToRgba: colorToRgba2, getStateMaskGradientBackground: getStateMaskGradientBackground2 } = useColors();
  const plainColorStyles = computed(() => ({
    background: "transparent",
    color: textColorComputed.value,
    "-webkit-background-clip": "text",
    "background-clip": "text",
    opacity: getPlainTextOpacity.value
  }));
  const getStateColor = (maskColor, stateOpacity, stateBehavior) => {
    const maskStateColor = getColor(maskColor);
    let stateStyles;
    if (stateBehavior === "opacity") {
      stateStyles = { color: colorToRgba2(textColorComputed.value, stateOpacity) };
    } else {
      stateStyles = {
        background: getStateMaskGradientBackground2(colorComputed.value, maskStateColor, stateOpacity),
        color: stateOpacity < 1 ? colorToRgba2(textColorComputed.value, getOpacity(stateOpacity)) : maskStateColor
      };
    }
    return { ...plainColorStyles.value, ...stateStyles };
  };
  const hoverTextColorComputed = computed(() => {
    return getStateColor(props.hoverMaskColor, Number(props.hoverOpacity), props.hoverBehavior);
  });
  const pressedTextColorComputed = computed(() => {
    return getStateColor(props.pressedMaskColor, props.pressedOpacity, props.pressedBehavior);
  });
  const getPlainTextOpacity = computed(() => {
    if (props.disabled) {
      return void 0;
    }
    if (props.textOpacity === 1 || isHovered.value && !isPressed.value) {
      return 1;
    }
    return isPressed.value ? 0.9 : props.textOpacity;
  });
  return computed(() => {
    const defaultColorStyles = {
      color: textColorComputed.value,
      background: "transparent"
    };
    props.plain && Object.assign(defaultColorStyles, plainColorStyles.value, { background: textColorComputed.value });
    if (!props.plain) {
      return defaultColorStyles;
    }
    if (isPressed.value) {
      return pressedTextColorComputed.value;
    }
    if (isHovered.value) {
      return hoverTextColorComputed.value;
    }
    return defaultColorStyles;
  });
};
const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};
const _hoisted_1$7 = {
  class: "va-progress-circle__wrapper",
  viewBox: "0 0 40 40"
};
const _hoisted_2$5 = ["r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VaProgressCircle"
  },
  __name: "VaProgressCircle",
  props: {
    ...useSizeProps,
    ...useComponentPresetProp,
    modelValue: { type: [Number, String], default: 0 },
    indeterminate: { type: Boolean, default: false },
    thickness: { type: [Number, String], default: 0.06 },
    color: { type: String, default: "primary" },
    ariaLabel: useTranslationProp("$t:progressState")
  },
  setup(__props) {
    const props = __props;
    const { getColor } = useColors();
    const { sizeComputed } = useSize(props);
    const cappedThickness = computed(() => clamp(Number(props.thickness), 0, 1) / 2 * 100);
    const radius = computed(() => 20 - 20 * cappedThickness.value / 100);
    const dasharray = computed(() => 2 * Math.PI * radius.value);
    const dashoffset = computed(() => dasharray.value * (1 - clamp(Number(props.modelValue), 0, 100) / 100));
    const colorComputed = computed(() => getColor(props.color, void 0, true));
    const { tp } = useTranslation();
    const infoStyle = computed(() => ({ color: colorComputed.value }));
    const rootStyle = computed(() => ({
      width: sizeComputed.value,
      height: sizeComputed.value
    }));
    const rootClass = computed(() => ({
      "va-progress-circle--indeterminate": props.indeterminate
    }));
    const ariaAttributesComputed = computed(() => ({
      role: "progressbar",
      "aria-label": tp(props.ariaLabel),
      "aria-valuenow": !props.indeterminate ? props.modelValue : void 0
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        class: ["va-progress-circle", rootClass.value],
        style: rootStyle.value
      }, ariaAttributesComputed.value), [
        (openBlock(), createElementBlock("svg", _hoisted_1$7, [
          createElementVNode("circle", {
            class: "va-progress-circle__overlay",
            cx: "50%",
            cy: "50%",
            r: radius.value,
            fill: "none",
            stroke: colorComputed.value,
            "stroke-width": cappedThickness.value + "%",
            "stroke-dasharray": dasharray.value,
            "stroke-dashoffset": dashoffset.value
          }, null, 8, _hoisted_2$5)
        ])),
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
          key: 0,
          style: normalizeStyle(infoStyle.value),
          class: "va-progress-circle__info"
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 4)) : createCommentVNode("", true)
      ], 16);
    };
  }
});
const VaProgressCircle = withConfigTransport$1(_sfc_main$9);
const pick = (o, keys) => {
  return Object.keys(o).filter((key) => keys.includes(key)).reduce((acc, key) => {
    acc[key] = o[key];
    return acc;
  }, {});
};
const useHoverStyleProps = {
  hoverBehavior: {
    type: String,
    default: "mask",
    validator: (value) => ["opacity", "mask"].includes(value)
  },
  hoverOpacity: { type: [Number, String], default: 0.15 },
  hoverMaskColor: { type: String, default: "textInverted" }
};
const usePressedStyleProps = {
  pressedBehavior: {
    type: String,
    default: "mask",
    validator: (value) => ["opacity", "mask"].includes(value)
  },
  pressedOpacity: { type: Number, default: 0.13 },
  pressedMaskColor: { type: String, default: "textPrimary" }
};
const useLoadingProps = {
  loading: { type: Boolean, default: false }
};
const isHTMLElement = (el) => {
  return el instanceof HTMLElement;
};
const focusElement = (el) => {
  if (!el || !isHTMLElement(el)) {
    return;
  }
  el.focus();
  el.dispatchEvent(new FocusEvent("focus", { bubbles: true }));
};
const blurElement = (el) => {
  if (!el || !isHTMLElement(el)) {
    return;
  }
  el.blur();
  el.dispatchEvent(new Event("blur", { bubbles: true }));
};
const useCaptureEvent = (event, cb, options = {}) => {
  onMounted(() => window.addEventListener(event, cb, { capture: true, ...options }));
  onBeforeUnmount(() => window.removeEventListener(event, cb, { capture: true, ...options }));
};
const useActiveElement = () => {
  const activeEl = shallowRef();
  const updateActiveElement = () => {
    activeEl.value = document.activeElement;
  };
  onMounted(updateActiveElement);
  useCaptureEvent("focus", updateActiveElement);
  useCaptureEvent("blur", updateActiveElement);
  return activeEl;
};
function useFocus(el, emit) {
  const activeElement = useActiveElement();
  const isFocused = computed({
    get: () => {
      if (isNilValue(activeElement.value)) {
        return false;
      }
      if (isNilValue(el == null ? void 0 : el.value)) {
        return false;
      }
      return activeElement.value === (el == null ? void 0 : el.value);
    },
    set: (value) => {
      if (value) {
        focus();
      } else {
        blur();
      }
    }
  });
  const onFocus = (e) => {
  };
  const onBlur = (e) => {
  };
  const focus = () => {
    if (!(el == null ? void 0 : el.value)) {
      return;
    }
    focusElement(unwrapEl(el == null ? void 0 : el.value));
  };
  const blur = () => {
    if (!(el == null ? void 0 : el.value)) {
      return;
    }
    blurElement(unwrapEl(el == null ? void 0 : el.value));
  };
  useEvent("focus", onFocus, el);
  useEvent("blur", onBlur, el);
  return {
    isFocused,
    onFocus,
    onBlur,
    focus,
    blur
  };
}
const useHTMLElement = (key) => {
  if (isRef(key)) {
    return computed({
      get() {
        return unwrapEl(key.value);
      },
      set(value) {
        key.value = value;
      }
    });
  }
  if (key) {
    const el2 = useTemplateRef(key);
    return computed({
      get() {
        return unwrapEl(el2.value);
      },
      set(value) {
        el2.value = value;
      }
    });
  }
  const el = shallowRef();
  return computed({
    set(value) {
      el.value = unwrapEl(value);
    },
    get() {
      return el.value;
    }
  });
};
function useHover(el, disabled) {
  const isHovered = ref(false);
  const onMouseEnter = () => {
    if (disabled == null ? void 0 : disabled.value) {
      return;
    }
    isHovered.value = true;
  };
  const onMouseLeave = () => {
    isHovered.value = false;
  };
  disabled && watch(disabled, (v) => {
    if (v) {
      isHovered.value = false;
    }
  });
  const target = useHTMLElement(el);
  useEvent("mouseenter", onMouseEnter, target);
  useEvent("mouseleave", onMouseLeave, target);
  return { isHovered, onMouseEnter, onMouseLeave };
}
function usePressed(el) {
  const isPressed = ref(false);
  const onMouseDown = () => {
    isPressed.value = true;
  };
  const onMouseUp = () => {
    isPressed.value = false;
  };
  const target = useHTMLElement(el);
  useEvent(["mousedown", "touchstart", "dragstart"], onMouseDown, target);
  useEvent([
    "mouseup",
    "mouseleave",
    "touchend",
    "touchcancel",
    "drop",
    "dragend"
  ], onMouseUp, true);
  return { isPressed, onMouseDown, onMouseUp };
}
const checkSlotChildrenDeep = (v, initial = true) => {
  var _a;
  if (isVNode(v)) {
    return true;
  }
  if (!v || initial && (!isFunction(v) || !((_a = v()) == null ? void 0 : _a.length))) {
    return false;
  }
  const slotData = initial ? v() : v;
  if (Array.isArray(slotData)) {
    return slotData.some((el) => {
      return Array.isArray(el.children) ? checkSlotChildrenDeep(el.children, false) : el.children || el.props;
    });
  }
  return !!slotData.children;
};
const useSlotPassed = (name = "default") => {
  const { slots } = getCurrentInstance();
  return computed(() => checkSlotChildrenDeep(slots[name]));
};
const useBem = (prefix, modifiers) => {
  if (isDev && !prefix) {
    console.warn('You must pass the @param "prefix" to the useBem hook!');
  }
  const modifiersList = computed(() => typeof modifiers === "function" ? modifiers() : unref(modifiers));
  const computedBemClassesObject = computed(() => {
    return Object.entries(unref(modifiersList)).reduce((classesObj, [modifierName, value]) => {
      if (value) {
        classesObj[`${prefix}--${camelCaseToKebabCase(modifierName)}`] = true;
      }
      return classesObj;
    }, {});
  });
  const computedBemClassesArray = computed(() => Object.keys(computedBemClassesObject.value));
  const computedBemClassesString = computed(() => computedBemClassesArray.value.join(" "));
  return new Proxy({}, {
    ownKeys() {
      return Reflect.ownKeys(computedBemClassesObject.value);
    },
    getOwnPropertyDescriptor(_, key) {
      return Reflect.getOwnPropertyDescriptor(computedBemClassesObject.value, key);
    },
    get(_, key, receiver) {
      switch (key) {
        case "asArray":
          return computedBemClassesArray;
        case "asString":
          return computedBemClassesString;
        case "asObject":
          return computedBemClassesObject;
        default:
          return Reflect.get(computedBemClassesObject.value, key, receiver);
      }
    }
  });
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VaButton"
  },
  __name: "VaButton",
  props: {
    ...useComponentPresetProp,
    ...useSizeProps,
    ...useHoverStyleProps,
    ...usePressedStyleProps,
    ...useLoadingProps,
    ...useRouterLinkProps,
    tag: { type: String, default: "button" },
    type: { type: String, default: "button" },
    block: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    color: { type: String, default: "primary" },
    textColor: { type: String, default: "" },
    textOpacity: { type: [Number, String], default: 1 },
    backgroundOpacity: { type: [Number, String], default: 1 },
    borderColor: { type: String, default: "" },
    // only for filled bg state
    gradient: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    size: {
      type: String,
      default: "medium",
      validator: (v) => ["small", "medium", "large"].includes(v)
    },
    icon: { type: String, default: "" },
    iconRight: { type: String, default: "" },
    iconColor: { type: String, default: "" }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { getColor } = useColors();
    const colorComputed = computed(() => getColor(props.color));
    const { sizeComputed } = useSize(props);
    const iconSizeComputed = computed(() => {
      const size = /([0-9]*)(px)/.exec(sizeComputed.value);
      return size ? `${+size[1] / 2}${size[2]}` : sizeComputed.value;
    });
    const { tagComputed } = useRouterLink(props);
    const attributesComputed = useButtonAttributes(props);
    const { disabled } = toRefs(props);
    const button = shallowRef();
    const { focus, blur } = useFocus(button);
    const { isHovered } = useHover(button, disabled);
    const { isPressed } = usePressed(button);
    const iconColorComputed = computed(() => props.iconColor ? getColor(props.iconColor) : textColorComputed.value);
    const iconAttributesComputed = computed(() => ({
      color: iconColorComputed.value,
      size: props.size
    }));
    const wrapperClassComputed = computed(() => ({ "va-button__content--loading": props.loading }));
    const isSlotContentPassed = useSlotPassed();
    const isOneIcon = computed(() => !!(props.iconRight && !props.icon || !props.iconRight && props.icon));
    const isOnlyIcon = computed(() => !isSlotContentPassed.value && isOneIcon.value);
    const textOpacityComputed = useNumericProp("textOpacity");
    const backgroundOpacityComputed = useNumericProp("backgroundOpacity");
    const computedClass = useBem("va-button", () => ({
      ...pick(props, ["disabled", "block", "loading", "round", "plain"]),
      small: props.size === "small",
      normal: !props.size || props.size === "medium",
      large: props.size === "large",
      opacity: textOpacityComputed.value < 1,
      bordered: !!props.borderColor,
      iconOnly: isOnlyIcon.value,
      leftIcon: !isOnlyIcon.value && !!props.icon && !props.iconRight,
      rightIcon: !isOnlyIcon.value && !props.icon && !!props.iconRight
    }));
    const isTransparentBg = computed(() => props.plain || backgroundOpacityComputed.value < 0.5);
    const { textColorComputed } = useTextColor(colorComputed, isTransparentBg);
    const {
      backgroundColor,
      backgroundColorOpacity,
      backgroundMaskOpacity,
      backgroundMaskColor
    } = useButtonBackground(colorComputed, isPressed, isHovered);
    const contentColorComputed = useButtonTextColor(textColorComputed, colorComputed, isPressed, isHovered);
    const computedStyle = computed(() => ({
      borderColor: props.borderColor ? getColor(props.borderColor) : "transparent",
      ...contentColorComputed.value
    }));
    __expose({
      focus,
      blur
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(tagComputed)), mergeProps({
        ref_key: "button",
        ref: button,
        class: ["va-button", unref(computedClass)],
        style: [computedStyle.value, `--va-background-color: ${String(unref(backgroundColor))};--va-background-color-opacity: ${String(unref(backgroundColorOpacity))};--va-background-mask-color: ${String(unref(backgroundMaskColor))};--va-background-mask-opacity: ${String(unref(backgroundMaskOpacity))}`]
      }, unref(attributesComputed)), {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(["va-button__content", wrapperClassComputed.value])
          }, [
            renderSlot(_ctx.$slots, "prepend", normalizeProps(guardReactiveProps({ icon: __props.icon, iconAttributes: iconAttributesComputed.value })), () => [
              __props.icon ? (openBlock(), createBlock(unref(VaIcon), mergeProps({
                key: 0,
                class: "va-button__left-icon",
                name: __props.icon
              }, iconAttributesComputed.value), null, 16, ["name"])) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "default"),
            renderSlot(_ctx.$slots, "append", normalizeProps(guardReactiveProps({ icon: __props.iconRight, iconAttributes: iconAttributesComputed.value })), () => [
              __props.iconRight ? (openBlock(), createBlock(unref(VaIcon), mergeProps({
                key: 0,
                class: "va-button__right-icon",
                name: __props.iconRight
              }, iconAttributesComputed.value), null, 16, ["name"])) : createCommentVNode("", true)
            ])
          ], 2),
          _ctx.loading ? renderSlot(_ctx.$slots, "loading", normalizeProps(mergeProps({ key: 0 }, {
            size: iconSizeComputed.value,
            color: unref(textColorComputed)
          })), () => [
            createVNode(unref(VaProgressCircle), {
              class: "va-button__loader",
              size: iconSizeComputed.value,
              color: unref(textColorComputed),
              thickness: 0.15,
              indeterminate: ""
            }, null, 8, ["size", "color"])
          ]) : createCommentVNode("", true)
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
});
const VaButton = withConfigTransport$1(_sfc_main$8);
const NOT_PROVIDED = Symbol("NOT_PROVIDED");
const useUserProvidedProp = (propName, props) => {
  const vm = getCurrentInstance();
  return computed(() => {
    if (!(vm == null ? void 0 : vm.vnode.props)) {
      return NOT_PROVIDED;
    }
    const originalProp = props[propName];
    return propName in vm.vnode.props ? originalProp : NOT_PROVIDED;
  });
};
const useStatefulProps = {
  stateful: { type: Boolean, default: false },
  modelValue: { type: void 0 }
};
const useStateful = (props, emit, key = "modelValue", options = {}) => {
  const { eventName, defaultValue } = options;
  const event = eventName || `update:${key.toString()}`;
  const passedProp = useUserProvidedProp(key, props);
  const defaultValuePassed = "defaultValue" in options;
  const valueState = ref(
    passedProp.value === NOT_PROVIDED ? defaultValuePassed ? defaultValue : props[key] : passedProp.value
  );
  let unwatchModelValue;
  const watchModelValue = () => {
    unwatchModelValue = watch(() => props[key], (modelValue) => {
      valueState.value = modelValue;
    });
  };
  watch(() => props.stateful, (stateful) => {
    stateful ? watchModelValue() : unwatchModelValue == null ? void 0 : unwatchModelValue();
  }, { immediate: true });
  const valueComputed = computed({
    get: () => {
      if (props.stateful) {
        return valueState.value;
      }
      return props[key];
    },
    set: (value) => {
      if (props.stateful) {
        valueState.value = value;
      }
      emit(event, value);
    }
  });
  Object.defineProperty(valueComputed, "stateful", {
    get: () => props.stateful
  });
  Object.defineProperty(valueComputed, "userProvided", {
    get: () => passedProp.value !== NOT_PROVIDED
  });
  return { valueComputed };
};
const verticalPlacement = ["top", "bottom"];
const horizontalPlacement = ["left", "right"];
const placementPosition = [...verticalPlacement, ...horizontalPlacement];
const placementAlignment = ["start", "end", "center"];
const placementsPositions = placementPosition.reduce((acc, position) => {
  acc.push(position);
  placementAlignment.forEach((alignment) => acc.push(`${position}-${alignment}`));
  return acc;
}, ["auto"]);
const placementAliasesPositions = verticalPlacement.reduce((acc, yPosition) => {
  horizontalPlacement.forEach((xPosition) => {
    acc.push(`${yPosition}-${xPosition}`);
    acc.push(`${xPosition}-${yPosition}`);
  });
  return acc;
}, []);
const placementsPositionsWithAliases = [...placementsPositions, ...placementAliasesPositions];
const aliasToPlacement = {
  "top-left": "top-start",
  "left-top": "top-start",
  "top-right": "top-end",
  "right-top": "top-end",
  "bottom-left": "bottom-start",
  "left-bottom": "bottom-start",
  "bottom-right": "bottom-end",
  "right-bottom": "bottom-end"
};
const usePlacementAliases = (props) => {
  const placementArray = computed(() => {
    const placement = aliasToPlacement[props.placement] || props.placement;
    return placement.split("-");
  });
  const position = computed(() => {
    const position2 = placementArray.value[0];
    return position2 === "auto" ? "bottom" : position2;
  });
  const align = computed(() => {
    return placementArray.value[1] || "center";
  });
  return { position, align };
};
const useParsableMeasure = () => {
  const isParsableMeasure2 = (value) => {
    if (typeof value === "string") {
      return !isNaN(+value) || value.endsWith("px") || value.endsWith("rem");
    }
    return false;
  };
  const isParsablePositiveMeasure = (value) => {
    if (typeof value === "number") {
      return value >= 0;
    }
    return isParsableMeasure2(value) && parseInt(value) >= 0;
  };
  const parseSizeValue2 = (value, pageFontSize = 16) => {
    const valueUnref = unref(value);
    if (typeof valueUnref === "string") {
      const parsedValue = parseInt(valueUnref);
      if (isNaN(parsedValue)) {
        return 0;
      }
      return valueUnref.endsWith("rem") ? parsedValue * unref(pageFontSize) : parsedValue;
    }
    return valueUnref;
  };
  return { isParsableMeasure: isParsableMeasure2, isParsablePositiveMeasure, parseSizeValue: parseSizeValue2 };
};
const { isParsableMeasure, parseSizeValue } = useParsableMeasure();
const useFloatingPositionProps = {
  overlap: { type: Boolean, default: false },
  placement: {
    type: String,
    default: "top-end",
    validator: (position) => placementsPositionsWithAliases.includes(position)
  },
  offset: {
    type: [Number, String, Array],
    default: 0,
    validator: (value) => {
      if (Array.isArray(value)) {
        return value.every(isParsableMeasure);
      }
      if (typeof value === "string") {
        return isParsableMeasure(value);
      }
      return !isNaN(value);
    }
  }
};
const useFloatingPosition = (props, floating) => {
  if (!floating.value) {
    return {};
  }
  const { position, align } = usePlacementAliases(props);
  const alignmentShiftComputed = computed(() => {
    const alignOptions = {
      start: props.overlap ? "-50%" : "-100%",
      center: "-50%",
      end: props.overlap ? "-50%" : "0%"
    };
    return alignOptions[align.value];
  });
  const offsetMarginComputed = computed(() => {
    if (!props.offset) {
      return {};
    }
    const mainAxis = ["left", "right"].includes(position.value) ? "top" : "left";
    const crossAxis = mainAxis === "top" ? "left" : "top";
    if (Array.isArray(props.offset)) {
      const [x2, y] = props.offset.map(parseSizeValue);
      return {
        [`margin-${mainAxis}`]: `${x2}px`,
        [`margin-${crossAxis}`]: `${y}px`
      };
    }
    const offset = parseSizeValue(props.offset);
    return {
      [`margin-${crossAxis}`]: `${offset}px`
    };
  });
  const alignmentComputed = computed(() => {
    const mainAxis = ["left", "right"].includes(position.value) ? "top" : "left";
    const crossAxis = mainAxis === "top" ? "left" : "top";
    let shiftValue = "0%";
    if (crossAxis === "top" && position.value === "bottom") {
      shiftValue = "100%";
    }
    if (crossAxis === "left" && position.value === "right") {
      shiftValue = "100%";
    }
    const alignmentOptions = {
      start: { [mainAxis]: "0%", [crossAxis]: shiftValue },
      center: { [mainAxis]: "50%", [crossAxis]: shiftValue },
      end: { [mainAxis]: "100%", [crossAxis]: shiftValue }
    };
    return alignmentOptions[align.value];
  });
  const transformComputed = computed(() => {
    const coords = {
      top: {
        x: alignmentShiftComputed.value,
        y: props.overlap ? "-50%" : "-100%"
      },
      bottom: {
        x: alignmentShiftComputed.value,
        y: props.overlap ? "-50%" : "0%"
      },
      left: {
        x: props.overlap ? "-50%" : "-100%",
        y: alignmentShiftComputed.value
      },
      right: {
        x: props.overlap ? "-50%" : "0%",
        y: alignmentShiftComputed.value
      }
    };
    const { x: x2, y } = coords[position.value];
    return { transform: `translate(${x2}, ${y})` };
  });
  return computed(() => ({
    ...alignmentComputed.value,
    ...transformComputed.value,
    ...offsetMarginComputed.value
  }));
};
const OPTIONS_LIST = {
  props: "prop",
  attrs: "prop",
  slots: "slot"
};
const useDeprecated = (deprecatedList, deprecationSource = ["props", "attrs"]) => {
  if (!isDev) {
    return void 0;
  }
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error("`useDeprecated` hook must be used only inside of setup function!");
  }
  const instanceName = instance.type.name;
  const deprecatedItems = unref(deprecatedList);
  deprecationSource.every((source) => {
    var _a;
    const option = OPTIONS_LIST[source];
    const throwWarning = (key) => console.warn(`The '${key}' ${option} (${instanceName} component) is deprecated! Please, check the documentation.`);
    if (source === "props") {
      const propsOptions = ((_a = instance.propsOptions) == null ? void 0 : _a[0]) || {};
      const propsValues = instance.props || {};
      deprecatedItems.forEach((propName) => {
        propsOptions[propName] && propsValues[propName] !== propsOptions[propName].default && throwWarning(propName);
      });
      return true;
    }
    Object.keys({ ...instance[source] }).forEach((key) => {
      if (deprecatedItems.includes(key)) {
        throwWarning(key);
      }
    });
    return true;
  });
};
const _hoisted_1$6 = ["aria-labelledby"];
const _hoisted_2$4 = { class: "va-badge__text" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VaBadge"
  },
  __name: "VaBadge",
  props: {
    ...useComponentPresetProp,
    ...useFloatingPositionProps,
    color: { type: String, default: "danger" },
    textColor: { type: String },
    text: { type: [String, Number], default: "" },
    multiLine: { type: Boolean, default: false },
    visibleEmpty: { type: Boolean, default: false },
    dot: { type: Boolean, default: false },
    // TODO: Remove after 1.8.0
    transparent: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    useDeprecated(["transparent"]);
    const slots = useSlots();
    const isEmpty = computed(() => !(props.text || props.visibleEmpty || props.dot || slots.text));
    const isFloating = computed(() => !!(slots.default || props.dot));
    const badgeClass = useBem("va-badge", () => ({
      ...pick(props, ["visibleEmpty", "dot", "multiLine"]),
      empty: isEmpty.value,
      floating: isFloating.value
    }));
    const { getColor } = useColors();
    const colorComputed = computed(() => getColor(props.color));
    const { textColorComputed } = useTextColor(colorComputed);
    const positionStylesComputed = useFloatingPosition(props, isFloating);
    const stylesComputed = computed(() => ({
      color: textColorComputed.value,
      borderColor: colorComputed.value,
      backgroundColor: colorComputed.value,
      opacity: props.transparent ? 0.5 : 1,
      ...unref(positionStylesComputed)
    }));
    const ariaLabelledByComputed = computed(() => props.text ? String(props.text) : void 0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["va-badge", unref(badgeClass)]),
        role: "status",
        "aria-labelledby": ariaLabelledByComputed.value
      }, [
        createElementVNode("span", {
          class: "va-badge__text-wrapper",
          style: normalizeStyle(stylesComputed.value)
        }, [
          createElementVNode("span", _hoisted_2$4, [
            renderSlot(_ctx.$slots, "text", {}, () => [
              createTextVNode(toDisplayString(__props.text), 1)
            ])
          ])
        ], 4),
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$6);
    };
  }
});
const VaBadge = withConfigTransport$1(_sfc_main$7);
const unFunction = (fn, ...args) => {
  if (isFunction(fn)) {
    return fn(...args);
  }
  return fn;
};
const _hoisted_1$5 = { class: "va-stepper__default-controls" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VaStepperControls"
  },
  __name: "VaStepperControls",
  props: {
    modelValue: { type: [Number, String], required: true },
    steps: {
      type: Array,
      required: true
    },
    nextDisabled: { type: Boolean, required: true },
    stepControls: { type: Object, required: true },
    finishButtonHidden: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { t } = useTranslation();
    const isLoading = computed(() => {
      const currentStep = props.steps[Number(props.modelValue)];
      return unFunction(currentStep.isLoading) || false;
    });
    const isLastStep = computed(() => {
      const lastEnabledStepIndex = props.steps.length - 1;
      return Number(props.modelValue) >= lastEnabledStepIndex;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createVNode(unref(VaButton), {
          preset: "primary",
          disabled: Number(_ctx.$props.modelValue) <= 0,
          loading: isLoading.value,
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$props.stepControls.prevStep())
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("back")), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        !isLastStep.value ? (openBlock(), createBlock(unref(VaButton), {
          key: 0,
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$props.stepControls.nextStep()),
          disabled: _ctx.$props.nextDisabled,
          loading: isLoading.value
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("next")), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])) : !_ctx.$props.finishButtonHidden ? (openBlock(), createBlock(unref(VaButton), {
          key: 1,
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$props.stepControls.finish()),
          loading: isLoading.value
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("finish")), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const isStepHasError = (step) => {
  return unFunction(step.hasError, step) || false;
};
const _hoisted_1$4 = { class: "va-stepper__step-button__icon" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VaStepperStepButton"
  },
  __name: "VaStepperStepButton",
  props: {
    modelValue: { type: Number, required: true },
    step: {
      type: Object,
      required: true
    },
    color: { type: String, required: true },
    stepIndex: { type: [Number, String], required: true },
    navigationDisabled: { type: Boolean, required: true },
    nextDisabled: { type: Boolean, required: true },
    focus: { type: Object, required: true },
    stepControls: { type: Object, required: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const stepElement = shallowRef();
    const hasError = computed(() => isStepHasError(props.step));
    const stepIndexComputed = useNumericProp("stepIndex");
    const displayError = computed(() => hasError.value && props.modelValue === stepIndexComputed.value);
    const isLoading = computed(() => unFunction(props.step.isLoading) || false);
    const { getColor } = useColors();
    const stepperColor = computed(() => getColor(hasError.value ? "danger" : props.color));
    const isNextStepDisabled = (index) => props.nextDisabled && index > props.modelValue;
    const { t } = useTranslation();
    const computedClass = useBem("va-stepper__step-button", () => ({
      active: props.modelValue >= stepIndexComputed.value,
      disabled: props.step.disabled || isNextStepDisabled(stepIndexComputed.value),
      "navigation-disabled": props.navigationDisabled,
      error: displayError.value
    }));
    watch(() => props.focus, () => {
      if (props.focus.trigger) {
        nextTick(() => {
          var _a;
          return (_a = stepElement.value) == null ? void 0 : _a.focus();
        });
      }
    }, { deep: true });
    const ariaAttributesComputed = computed(() => ({
      tabindex: props.focus.stepIndex === stepIndexComputed.value && !props.navigationDisabled ? 0 : void 0,
      "aria-disabled": props.step.disabled || isNextStepDisabled(stepIndexComputed.value) ? true : void 0,
      "aria-current": props.modelValue === props.stepIndex ? t("step") : void 0
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", mergeProps({
        ref_key: "stepElement",
        ref: stepElement,
        class: ["va-stepper__step-button", unref(computedClass)],
        onClick: _cache[0] || (_cache[0] = ($event) => !_ctx.$props.navigationDisabled && _ctx.$props.stepControls.setStep(unref(stepIndexComputed))),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => !_ctx.$props.navigationDisabled && _ctx.$props.stepControls.setStep(unref(stepIndexComputed)), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => !_ctx.$props.navigationDisabled && _ctx.$props.stepControls.setStep(unref(stepIndexComputed)), ["space"]))
        ]
      }, ariaAttributesComputed.value, {
        style: `--va-stepper-color: ${String(stepperColor.value)}`
      }), [
        createElementVNode("div", _hoisted_1$4, [
          isLoading.value ? (openBlock(), createBlock(unref(VaProgressCircle), {
            key: 0,
            color: "currentColor",
            indeterminate: "",
            size: "small"
          })) : __props.step.icon ? (openBlock(), createBlock(unref(VaIcon), {
            key: 1,
            name: __props.step.icon,
            size: "1.3rem"
          }, null, 8, ["name"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createTextVNode(toDisplayString(unref(stepIndexComputed) + 1), 1)
          ], 64))
        ]),
        createTextVNode(" " + toDisplayString(__props.step.label), 1)
      ], 16);
    };
  }
});
const _hoisted_1$3 = { class: "va-stepper__step-content" };
const _hoisted_2$3 = { class: "va-stepper__controls" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VaStepper"
  },
  __name: "VaStepper",
  props: {
    ...useStatefulProps,
    modelValue: { type: Number, default: 0 },
    steps: {
      type: Array,
      default: () => [],
      required: true
    },
    color: { type: String, default: "primary" },
    vertical: { type: Boolean, default: false },
    navigationDisabled: { type: Boolean, default: false },
    controlsHidden: { type: Boolean, default: false },
    nextDisabled: { type: Boolean, default: false },
    nextDisabledOnError: { type: Boolean, default: false },
    finishButtonHidden: { type: Boolean, default: false },
    ariaLabel: useTranslationProp("$t:progress"),
    linear: { type: Boolean, default: false },
    /** Hidden step shown when all steps complete */
    finishStep: { type: Object }
  },
  emits: ["update:modelValue", "finish", "update:steps"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const stepperNavigation = shallowRef();
    const { valueComputed: modelValue } = useStateful(props, emit, "modelValue");
    const stepsComputed = computed(() => {
      if (!props.finishStep) {
        return props.steps;
      }
      return [...props.steps, props.finishStep];
    });
    const isFinishStep = (index) => {
      if (!props.finishStep) {
        return false;
      }
      return index === stepsComputed.value.length - 1;
    };
    const focusedStep = ref({ trigger: false, stepIndex: props.navigationDisabled ? -1 : props.modelValue });
    const { getColor } = useColors();
    const isNextStepDisabled = (index) => {
      if (props.nextDisabledOnError && isStepHasError(stepsComputed.value[index])) {
        return true;
      }
      return props.nextDisabled;
    };
    const findFirstNonDisabled = (from, direction) => {
      while (from >= 0 && from < stepsComputed.value.length) {
        from += direction;
        const step = stepsComputed.value[from];
        if (!step) {
          return;
        }
        if (!step.disabled) {
          return step;
        }
      }
    };
    const findFirstWithErrorIndex = (from, direction) => {
      while (from >= 0 && from < stepsComputed.value.length) {
        from += direction;
        const step = stepsComputed.value[from];
        if (!step) {
          return;
        }
        if (isStepHasError(step) === true) {
          return from;
        }
      }
    };
    const validateMovingToStep = async (stepIndex) => {
      var _a;
      const newStep = stepsComputed.value[stepIndex];
      const currentStep = stepsComputed.value[modelValue.value];
      const beforeNewStep = findFirstNonDisabled(stepIndex, -1);
      if (newStep.disabled) {
        return false;
      }
      if (props.linear && stepIndex < modelValue.value) {
        return true;
      }
      const nextNonError = findFirstWithErrorIndex(modelValue.value, 1);
      if (props.linear && nextNonError !== void 0 && nextNonError < stepIndex) {
        return false;
      }
      let currentStepBeforeLeaveResult;
      try {
        currentStepBeforeLeaveResult = await ((_a = currentStep.beforeLeave) == null ? void 0 : _a.call(currentStep, currentStep, newStep));
      } catch (e) {
        throw new Error(`Error in beforeLeave function: ${e}`);
      }
      if (currentStepBeforeLeaveResult === false) {
        return false;
      }
      if (currentStep.completed === void 0) {
        currentStep.completed = true;
      }
      if (props.linear && beforeNewStep && !beforeNewStep.completed) {
        return false;
      }
      if (props.linear && isStepHasError(currentStep)) {
        return false;
      }
      return true;
    };
    const setStep = async (index) => {
      if (!await validateMovingToStep(index)) {
        return;
      }
      modelValue.value = index;
    };
    const setFocus = (direction) => {
      if (props.navigationDisabled) {
        return;
      }
      if (direction === "next") {
        setFocusNextStep(1);
      } else {
        setFocusPrevStep(1);
      }
    };
    const setFocusNextStep = (idx = 1) => {
      const newValue = focusedStep.value.stepIndex + idx;
      if (isNextStepDisabled(newValue)) {
        return;
      }
      if (newValue < stepsComputed.value.length) {
        if (stepsComputed.value[newValue].disabled) {
          setFocusNextStep(idx + 1);
          return;
        }
        focusedStep.value.stepIndex = newValue;
        focusedStep.value.trigger = true;
      } else {
        for (let availableIdx = 0; availableIdx < stepsComputed.value.length; availableIdx++) {
          if (!stepsComputed.value[availableIdx].disabled) {
            focusedStep.value.stepIndex = availableIdx;
            focusedStep.value.trigger = true;
            break;
          }
        }
      }
    };
    const setFocusPrevStep = (idx = 1) => {
      const newValue = focusedStep.value.stepIndex - idx;
      if (newValue >= 0) {
        if (stepsComputed.value[newValue].disabled) {
          setFocusPrevStep(idx + 1);
          return;
        }
        focusedStep.value.stepIndex = newValue;
        focusedStep.value.trigger = true;
      } else {
        for (let availableIdx = stepsComputed.value.length - 1; availableIdx >= 0; availableIdx--) {
          if (!stepsComputed.value[availableIdx].disabled && !isNextStepDisabled(availableIdx)) {
            focusedStep.value.stepIndex = availableIdx;
            focusedStep.value.trigger = true;
            break;
          }
        }
      }
    };
    const resetFocus = () => {
      requestAnimationFrame(() => {
        var _a;
        if (!((_a = stepperNavigation.value) == null ? void 0 : _a.contains(document.activeElement))) {
          focusedStep.value.stepIndex = props.modelValue;
          focusedStep.value.trigger = false;
        }
      });
    };
    watch(() => props.modelValue, () => {
      focusedStep.value.stepIndex = props.modelValue;
      focusedStep.value.trigger = false;
    });
    const nextStep = (stepsToSkip = 0) => {
      const targetIndex = modelValue.value + 1 + stepsToSkip;
      if (!stepsComputed.value[targetIndex]) {
        return;
      }
      if (stepsComputed.value[targetIndex].disabled) {
        nextStep(stepsToSkip + 1);
      }
      setStep(targetIndex);
    };
    const prevStep = (stepsToSkip = 0) => {
      const targetIndex = modelValue.value - 1 - stepsToSkip;
      if (!stepsComputed.value[targetIndex]) {
        return;
      }
      if (stepsComputed.value[targetIndex].disabled) {
        prevStep(stepsToSkip + 1);
      }
      setStep(targetIndex);
    };
    const finish = async () => {
      if (await validateMovingToStep(props.steps.length - 1)) {
        emit("finish");
      }
    };
    const stepControls = { setStep, nextStep, prevStep, finish };
    const getIterableSlotData = (step, index) => ({
      ...stepControls,
      focus: focusedStep,
      isActive: props.modelValue === index,
      isCompleted: props.modelValue > index,
      isLastStep: stepsComputed.value.length - 1 === index,
      isNextStepDisabled: isNextStepDisabled(index),
      isPrevStepDisabled: index === 0,
      index,
      step,
      hasError: isStepHasError(step)
    });
    const { tp } = useTranslation();
    const onValueChange = () => {
      focusedStep.value.stepIndex = props.modelValue;
      focusedStep.value.trigger = true;
    };
    const ariaAttributesComputed = computed(() => ({
      role: "group",
      "aria-label": tp(props.ariaLabel),
      "aria-orientation": props.vertical ? "vertical" : "horizontal"
    }));
    function getStepperButtonColor(index) {
      return isStepHasError(stepsComputed.value[index]) ? "danger" : getColor(props.color);
    }
    const completeStep = (shouldCompleteStep) => {
      const steps = { ...stepsComputed.value };
      if (shouldCompleteStep === true) {
        steps[props.modelValue].hasError = false;
      }
      steps[props.modelValue].completed = shouldCompleteStep ?? true;
      emit("update:steps", steps);
    };
    const setError = (shouldSetError) => {
      const steps = { ...stepsComputed.value };
      steps[props.modelValue].hasError = shouldSetError ?? true;
      steps[props.modelValue].completed = !shouldSetError;
      emit("update:steps", steps);
    };
    __expose({
      modelValue,
      focusedStep,
      getIterableSlotData,
      stepControls,
      nextStep,
      prevStep,
      setStep,
      setFocus,
      completeStep,
      setError
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        class: ["va-stepper", { "va-stepper--vertical": _ctx.$props.vertical }]
      }, ariaAttributesComputed.value), [
        createElementVNode("ol", {
          class: normalizeClass(["va-stepper__navigation", { "va-stepper__navigation--vertical": _ctx.$props.vertical }]),
          ref_key: "stepperNavigation",
          ref: stepperNavigation,
          onClick: onValueChange,
          onKeyup: [
            withKeys(onValueChange, ["enter"]),
            withKeys(onValueChange, ["space"]),
            _cache[0] || (_cache[0] = withKeys(($event) => setFocus("prev"), ["left"])),
            _cache[1] || (_cache[1] = withKeys(($event) => setFocus("next"), ["right"]))
          ],
          onFocusout: resetFocus
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(stepsComputed.value, (step, i) => {
            return openBlock(), createElementBlock(Fragment, {
              key: i + step.label
            }, [
              !isFinishStep(i) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                i > 0 ? renderSlot(_ctx.$slots, "divider", normalizeProps(mergeProps({ key: 0 }, getIterableSlotData(step, i))), () => [
                  createElementVNode("span", {
                    class: normalizeClass(["va-stepper__divider", { "va-stepper__divider--vertical": _ctx.$props.vertical }]),
                    "aria-hidden": "true"
                  }, null, 2)
                ]) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, `step-button-${i}`, normalizeProps(guardReactiveProps(getIterableSlotData(step, i))), () => [
                  createVNode(_sfc_main$5, {
                    stepIndex: i,
                    color: getStepperButtonColor(i),
                    modelValue: unref(modelValue),
                    nextDisabled: __props.nextDisabled,
                    step,
                    stepControls,
                    navigationDisabled: __props.navigationDisabled,
                    focus: focusedStep.value
                  }, null, 8, ["stepIndex", "color", "modelValue", "nextDisabled", "step", "navigationDisabled", "focus"])
                ])
              ], 64)) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ], 34),
        createElementVNode("div", {
          class: normalizeClass(["va-stepper__step-content-wrapper", { "va-stepper__step-content-wrapper--vertical": _ctx.$props.vertical }])
        }, [
          createElementVNode("div", _hoisted_1$3, [
            renderSlot(_ctx.$slots, `step-content-${isFinishStep(unref(modelValue)) ? "finish" : unref(modelValue)}`, normalizeProps(guardReactiveProps(getIterableSlotData(stepsComputed.value[unref(modelValue)], unref(modelValue)))))
          ]),
          createElementVNode("div", _hoisted_2$3, [
            renderSlot(_ctx.$slots, "controls", normalizeProps(guardReactiveProps(getIterableSlotData(stepsComputed.value[unref(modelValue)], unref(modelValue)))), () => [
              !__props.controlsHidden ? (openBlock(), createBlock(_sfc_main$6, {
                key: 0,
                modelValue: unref(modelValue),
                nextDisabled: isNextStepDisabled(unref(modelValue)),
                steps: stepsComputed.value,
                stepControls,
                finishButtonHidden: __props.finishButtonHidden
              }, null, 8, ["modelValue", "nextDisabled", "steps", "finishButtonHidden"])) : createCommentVNode("", true)
            ])
          ])
        ], 2)
      ], 16);
    };
  }
});
const VaStepper = withConfigTransport$1(_sfc_main$4);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Ellipsis",
  props: {
    lines: { default: 3 }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "b40395ae": maxlines.value
    }));
    const props = __props;
    const maxlines = computed(() => {
      return props.lines * 23 + "px";
    });
    const expanded = ref(false);
    return (_ctx, _cache) => {
      const _component_VaButton = resolveComponent("VaButton");
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          class: normalizeClass([{ expanded: expanded.value }, "aellipsis"])
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2),
        createVNode(_component_VaButton, {
          "hover-opacity": 0.4,
          class: "mr-6 mb-2",
          "hover-behavior": "opacity",
          preset: "secondary",
          size: "small",
          onClick: _cache[0] || (_cache[0] = ($event) => expanded.value = !expanded.value)
        }, {
          default: withCtx(() => [
            expanded.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode("less")
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode("more")
            ], 64))
          ]),
          _: 1
        })
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
const Ellipsis = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-69727056"]]);
function useFormat() {
  const colorMap = {};
  colorMap[Formats.WMS] = "#2c1f90";
  colorMap[Formats.OGCSTA] = "#1f908c";
  colorMap[Formats.XMLA] = "#45901f";
  colorMap[Formats.CSV] = "#90301f";
  colorMap[Formats.JSON] = "#7f1f90";
  const getColorForFormat = (format) => {
    if (!Object.keys(colorMap).includes(format)) return "#ccc";
    return colorMap[format];
  };
  return {
    getColorForFormat
  };
}
const _hoisted_1$2 = { class: "aflex small light" };
const _hoisted_2$2 = { class: "right" };
const _hoisted_3$2 = { class: "left" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchResultCard",
  props: {
    result: {}
  },
  setup(__props) {
    const prop = __props;
    const color = useFormat().getColorForFormat("<" + prop.result.format.value + ">");
    const getName = (name) => {
      const result = Object.entries(Formats).filter((val, index) => val[1] == "<" + name + ">");
      if (result && result[0]) return result[0][0];
      return name;
    };
    return (_ctx, _cache) => {
      const _component_VaChip = resolveComponent("VaChip");
      const _component_VaCardTitle = resolveComponent("VaCardTitle");
      const _component_VaCardContent = resolveComponent("VaCardContent");
      const _component_VaCard = resolveComponent("VaCard");
      return openBlock(), createBlock(_component_VaCard, { class: "card" }, {
        default: withCtx(() => [
          createVNode(_component_VaCardTitle, null, {
            default: withCtx(() => [
              createVNode(_component_VaChip, {
                color: unref(color),
                class: "pointer",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(getName(prop.result.format.value)), 1)
                ]),
                _: 1
              }, 8, ["color"]),
              createTextVNode(" " + toDisplayString(prop.result.title.value), 1)
            ]),
            _: 1
          }),
          createVNode(_component_VaCardContent, null, {
            default: withCtx(() => [
              createVNode(Ellipsis, { lines: 3 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(prop.result.description.value), 1)
                ]),
                _: 1
              }),
              _cache[0] || (_cache[0] = createElementVNode("br", null, null, -1)),
              createElementVNode("div", _hoisted_1$2, [
                createElementVNode("div", _hoisted_2$2, toDisplayString(prop.result.creator_name ? prop.result.creator_name.value : ""), 1),
                createElementVNode("div", _hoisted_3$2, toDisplayString(prop.result.date ? prop.result.date.value : ""), 1)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const SearchResultCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a0a9daed"]]);
const ce = (e, o) => {
  for (const t of Object.keys(o))
    e.on(t, o[t]);
}, ye = (e) => {
  for (const o of Object.keys(e)) {
    const t = e[o];
    t && k(t.cancel) && t.cancel();
  }
}, Je = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), k = (e) => typeof e == "function", L = (e, o, t) => {
  for (const n in t) {
    const s = "set" + Je(n);
    e[s] ? watch(
      () => t[n],
      (r, l) => {
        e[s](r, l);
      }
    ) : o[s] && watch(
      () => t[n],
      (r) => {
        o[s](r);
      }
    );
  }
}, f = (e, o, t = {}) => {
  const n = { ...t };
  for (const s in e) {
    const r = o[s], l = e[s];
    r && (r && r.custom === true || l !== void 0 && (n[s] = l));
  }
  return n;
}, T = (e) => {
  const o = {}, t = {};
  for (const n in e)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const s = n.slice(2).toLocaleLowerCase();
      o[s] = e[n];
    } else
      t[n] = e[n];
  return { listeners: o, attrs: t };
}, qe = async (e) => {
  const o = await Promise.all([
    import("./marker-icon-2x-DN7sBQTc.js"),
    import("./marker-icon-Dxo8DtlK.js"),
    import("./marker-shadow-BWlltkiu.js")
  ]);
  delete e.Default.prototype._getIconUrl, e.Default.mergeOptions({
    iconRetinaUrl: o[0].default,
    iconUrl: o[1].default,
    shadowUrl: o[2].default
  });
}, Y = (e) => {
  const o = ref(
    (...n) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), t = (...n) => o.value(...n);
  return t.wrapped = o, provide(e, t), t;
}, V = (e, o) => e.wrapped.value = o, b = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, m = (e) => {
  const o = inject$1(e);
  if (o === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return o;
}, h = Symbol(
  "useGlobalLeaflet"
), M = Symbol("addLayer"), ee = Symbol("removeLayer"), H = Symbol(
  "registerControl"
), me = Symbol(
  "registerLayerControl"
), ve = Symbol(
  "canSetParentHtml"
), be = Symbol("setParentHtml"), fe = Symbol("setIcon"), ge = Symbol("bindPopup"), Le = Symbol("bindTooltip"), he = Symbol("unbindPopup"), Oe = Symbol("unbindTooltip"), W = {
  options: {
    type: Object,
    default: () => ({}),
    custom: true
  }
}, J = (e) => ({ options: e.options, methods: {} }), D = {
  ...W,
  pane: {
    type: String
  },
  attribution: {
    type: String
  },
  name: {
    type: String,
    custom: true
  },
  layerType: {
    type: String,
    custom: true
  },
  visible: {
    type: Boolean,
    custom: true,
    default: true
  }
}, q = (e, o, t) => {
  const n = m(M), s = m(ee), { options: r, methods: l } = J(e), a = f(
    e,
    D,
    r
  ), i = () => n({ leafletObject: o.value }), u = () => s({ leafletObject: o.value }), d = {
    ...l,
    setAttribution(y) {
      u(), o.value.options.attribution = y, e.visible && i();
    },
    setName() {
      u(), e.visible && i();
    },
    setLayerType() {
      u(), e.visible && i();
    },
    setVisible(y) {
      o.value && (y ? i() : u());
    },
    bindPopup(y) {
      if (!o.value || !k(o.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      o.value.bindPopup(y);
    },
    bindTooltip(y) {
      if (!o.value || !k(o.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      o.value.bindTooltip(y);
    },
    unbindTooltip() {
      o.value && (k(o.value.closeTooltip) && o.value.closeTooltip(), k(o.value.unbindTooltip) && o.value.unbindTooltip());
    },
    unbindPopup() {
      o.value && (k(o.value.closePopup) && o.value.closePopup(), k(o.value.unbindPopup) && o.value.unbindPopup());
    },
    updateVisibleProp(y) {
      t.emit("update:visible", y);
    }
  };
  return provide(ge, d.bindPopup), provide(Le, d.bindTooltip), provide(he, d.unbindPopup), provide(Oe, d.unbindTooltip), onUnmounted(() => {
    d.unbindPopup(), d.unbindTooltip(), u();
  }), { options: a, methods: d };
}, G = (e, o) => {
  if (e && o.default)
    return h$1("div", { style: { display: "none" } }, o.default());
}, Se = {
  ...D,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Ke = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  );
  return { options: f(
    e,
    Se,
    n
  ), methods: s };
}, ne = {
  ...Se,
  stroke: {
    type: Boolean,
    default: void 0
  },
  color: {
    type: String
  },
  weight: {
    type: Number
  },
  opacity: {
    type: Number
  },
  lineCap: {
    type: String
  },
  lineJoin: {
    type: String
  },
  dashArray: {
    type: String
  },
  dashOffset: {
    type: String
  },
  fill: {
    type: Boolean,
    default: void 0
  },
  fillColor: {
    type: String
  },
  fillOpacity: {
    type: Number
  },
  fillRule: {
    type: String
  },
  className: {
    type: String
  }
}, _e = (e, o, t) => {
  const { options: n, methods: s } = Ke(e, o, t), r = f(
    e,
    ne,
    n
  ), l = m(ee), a = {
    ...s,
    setStroke(i) {
      o.value.setStyle({ stroke: i });
    },
    setColor(i) {
      o.value.setStyle({ color: i });
    },
    setWeight(i) {
      o.value.setStyle({ weight: i });
    },
    setOpacity(i) {
      o.value.setStyle({ opacity: i });
    },
    setLineCap(i) {
      o.value.setStyle({ lineCap: i });
    },
    setLineJoin(i) {
      o.value.setStyle({ lineJoin: i });
    },
    setDashArray(i) {
      o.value.setStyle({ dashArray: i });
    },
    setDashOffset(i) {
      o.value.setStyle({ dashOffset: i });
    },
    setFill(i) {
      o.value.setStyle({ fill: i });
    },
    setFillColor(i) {
      o.value.setStyle({ fillColor: i });
    },
    setFillOpacity(i) {
      o.value.setStyle({ fillOpacity: i });
    },
    setFillRule(i) {
      o.value.setStyle({ fillRule: i });
    },
    setClassName(i) {
      o.value.setStyle({ className: i });
    }
  };
  return onBeforeUnmount(() => {
    l({ leafletObject: o.value });
  }), { options: r, methods: a };
}, re = {
  ...ne,
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    required: true,
    custom: true
  }
}, je = (e, o, t) => {
  const { options: n, methods: s } = _e(
    e,
    o,
    t
  ), r = f(
    e,
    re,
    n
  ), l = {
    ...s,
    setRadius(a) {
      o.value.setRadius(a);
    },
    setLatLng(a) {
      o.value.setLatLng(a);
    }
  };
  return { options: r, methods: l };
}, Pe = {
  ...re,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, Qe = (e, o, t) => {
  const { options: n, methods: s } = je(e, o, t), r = f(
    e,
    Pe,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LCircle",
  props: Pe,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject$1(h), r = m(M), { options: l, methods: a } = Qe(e, t, o);
    return onMounted(async () => {
      const { circle: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(e.latLng, l));
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
defineComponent({
  name: "LCircleMarker",
  props: re,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject$1(h), r = m(M), { options: l, methods: a } = je(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { circleMarker: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(e.latLng, l)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const F = {
  ...W,
  position: {
    type: String
  }
}, K = (e, o) => {
  const { options: t, methods: n } = J(e), s = f(
    e,
    F,
    t
  ), r = {
    ...n,
    setPosition(l) {
      o.value && o.value.setPosition(l);
    }
  };
  return onUnmounted(() => {
    o.value && o.value.remove();
  }), { options: s, methods: r };
}, Xe = (e) => e.default ? h$1("div", { ref: "root" }, e.default()) : null;
defineComponent({
  name: "LControl",
  props: {
    ...F,
    disableClickPropagation: {
      type: Boolean,
      custom: true,
      default: true
    },
    disableScrollPropagation: {
      type: Boolean,
      custom: true,
      default: false
    }
  },
  setup(e, o) {
    const t = ref(), n = ref(), s = inject$1(h), r = m(H), { options: l, methods: a } = K(e, t);
    return onMounted(async () => {
      const { Control: i, DomEvent: u } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js"), d = i.extend({
        onAdd() {
          return n.value;
        }
      });
      t.value = markRaw(new d(l)), L(a, t.value, e), r({ leafletObject: t.value }), e.disableClickPropagation && n.value && u.disableClickPropagation(n.value), e.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), nextTick(() => o.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return Xe(this.$slots);
  }
});
const Ce = {
  ...F,
  prefix: {
    type: String
  }
}, Ye = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  ), s = f(
    e,
    Ce,
    t
  ), r = {
    ...n,
    setPrefix(l) {
      o.value.setPrefix(l);
    }
  };
  return { options: s, methods: r };
};
defineComponent({
  name: "LControlAttribution",
  props: Ce,
  setup(e, o) {
    const t = ref(), n = inject$1(h), s = m(H), { options: r, methods: l } = Ye(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a.attribution(r)
      ), L(l, t.value, e), s({ leafletObject: t.value }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Te = {
  ...F,
  collapsed: {
    type: Boolean,
    default: void 0
  },
  autoZIndex: {
    type: Boolean,
    default: void 0
  },
  hideSingleBase: {
    type: Boolean,
    default: void 0
  },
  sortLayers: {
    type: Boolean,
    default: void 0
  },
  sortFunction: {
    type: Function
  }
}, Ve = (e, o) => {
  const { options: t } = K(e, o);
  return { options: f(
    e,
    Te,
    t
  ), methods: {
    addLayer(r) {
      r.layerType === "base" ? o.value.addBaseLayer(r.leafletObject, r.name) : r.layerType === "overlay" && o.value.addOverlay(r.leafletObject, r.name);
    },
    removeLayer(r) {
      o.value.removeLayer(r.leafletObject);
    }
  } };
};
defineComponent({
  name: "LControlLayers",
  props: Te,
  setup(e, o) {
    const t = ref(), n = inject$1(h), s = m(me), { options: r, methods: l } = Ve(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a.layers(void 0, void 0, r)
      ), L(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Me = {
  ...F,
  maxWidth: {
    type: Number
  },
  metric: {
    type: Boolean,
    default: void 0
  },
  imperial: {
    type: Boolean,
    default: void 0
  },
  updateWhenIdle: {
    type: Boolean,
    default: void 0
  }
}, xe = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  );
  return { options: f(
    e,
    Me,
    t
  ), methods: n };
};
defineComponent({
  name: "LControlScale",
  props: Me,
  setup(e, o) {
    const t = ref(), n = inject$1(h), s = m(H), { options: r, methods: l } = xe(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(a.scale(r)), L(l, t.value, e), s({ leafletObject: t.value }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Be = {
  ...F,
  zoomInText: {
    type: String
  },
  zoomInTitle: {
    type: String
  },
  zoomOutText: {
    type: String
  },
  zoomOutTitle: {
    type: String
  }
}, Re = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  );
  return { options: f(
    e,
    Be,
    t
  ), methods: n };
};
defineComponent({
  name: "LControlZoom",
  props: Be,
  setup(e, o) {
    const t = ref(), n = inject$1(h), s = m(H), { options: r, methods: l } = Re(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(a.zoom(r)), L(l, t.value, e), s({ leafletObject: t.value }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const te = {
  ...D
}, se = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    te,
    n
  ), l = {
    ...s,
    addLayer(a) {
      o.value.addLayer(a.leafletObject);
    },
    removeLayer(a) {
      o.value.removeLayer(a.leafletObject);
    }
  };
  return provide(M, l.addLayer), provide(ee, l.removeLayer), { options: r, methods: l };
}, we = {
  ...te
}, et = (e, o, t) => {
  const { options: n, methods: s } = se(
    e,
    o,
    t
  ), r = f(
    e,
    we,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
};
defineComponent({
  props: we,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject$1(h), r = m(M), { methods: l, options: a } = et(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { featureGroup: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(void 0, a)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(l, t.value, e), r({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const Ie = {
  ...te,
  geojson: {
    type: [Object, Array],
    custom: true
  },
  optionsStyle: {
    type: Function,
    custom: true
  }
}, tt = (e, o, t) => {
  const { options: n, methods: s } = se(
    e,
    o,
    t
  ), r = f(
    e,
    Ie,
    n
  );
  Object.prototype.hasOwnProperty.call(e, "optionsStyle") && (r.style = e.optionsStyle);
  const l = {
    ...s,
    setGeojson(a) {
      o.value.clearLayers(), o.value.addData(a);
    },
    setOptionsStyle(a) {
      o.value.setStyle(a);
    },
    getGeoJSONData() {
      return o.value.toGeoJSON();
    },
    getBounds() {
      return o.value.getBounds();
    }
  };
  return { options: r, methods: l };
};
defineComponent({
  props: Ie,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject$1(h), r = m(M), { methods: l, options: a } = tt(e, t, o);
    return onMounted(async () => {
      const { geoJSON: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(e.geojson, a));
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(l, t.value, e), r({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const ae = {
  ...D,
  opacity: {
    type: Number
  },
  zIndex: {
    type: Number
  },
  tileSize: {
    type: [Number, Array, Object]
  },
  noWrap: {
    type: Boolean,
    default: void 0
  },
  minZoom: {
    type: Number
  },
  maxZoom: {
    type: Number
  },
  className: {
    type: String
  }
}, Ae = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    ae,
    n
  ), l = {
    ...s,
    setTileComponent() {
      var a;
      (a = o.value) == null || a.redraw();
    }
  };
  return onUnmounted(() => {
    o.value.off();
  }), { options: r, methods: l };
}, ot = (e, o, t, n) => e.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), t.setOptions(this, s);
  },
  createTile(s) {
    const r = this._tileCoordsToKey(s);
    this.tileComponents[r] = o.create("div");
    const l = h$1({ setup: n, props: ["coords"] }, { coords: s });
    return render(l, this.tileComponents[r]), this.tileComponents[r];
  },
  _unloadTile(s) {
    const r = this._tileCoordsToKey(s.coords);
    this.tileComponents[r] && (this.tileComponents[r].innerHTML = "", this.tileComponents[r] = void 0);
  }
});
defineComponent({
  props: {
    ...ae,
    childRender: {
      type: Function,
      required: true
    }
  },
  setup(e, o) {
    const t = ref(), n = ref(null), s = ref(false), r = inject$1(h), l = m(M), { options: a, methods: i } = Ae(e, t, o);
    return onMounted(async () => {
      const { GridLayer: u, DomUtil: d, Util: y } = r ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js"), w = ot(
        u,
        d,
        y,
        e.childRender
      );
      t.value = markRaw(new w(a));
      const { listeners: v } = T(o.attrs);
      t.value.on(v), L(i, t.value, e), l({
        ...e,
        ...i,
        leafletObject: t.value
      }), s.value = true, nextTick(() => o.emit("ready", t.value));
    }), { root: n, ready: s, leafletObject: t };
  },
  render() {
    return this.ready ? h$1("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const de = {
  iconUrl: {
    type: String
  },
  iconRetinaUrl: {
    type: String
  },
  iconSize: {
    type: [Object, Array]
  },
  iconAnchor: {
    type: [Object, Array]
  },
  popupAnchor: {
    type: [Object, Array]
  },
  tooltipAnchor: {
    type: [Object, Array]
  },
  shadowUrl: {
    type: String
  },
  shadowRetinaUrl: {
    type: String
  },
  shadowSize: {
    type: [Object, Array]
  },
  shadowAnchor: {
    type: [Object, Array]
  },
  bgPos: {
    type: [Object, Array]
  },
  className: {
    type: String
  }
};
defineComponent({
  name: "LIcon",
  props: {
    ...de,
    ...W
  },
  setup(e, o) {
    const t = ref(), n = inject$1(h), s = m(ve), r = m(be), l = m(fe);
    let a, i, u, d, y;
    const w = (N, P, B) => {
      const I = N && N.innerHTML;
      if (!P) {
        B && y && s() && r(I);
        return;
      }
      const { listeners: E } = T(o.attrs);
      y && i(y, E);
      const { options: ue } = J(e), $ = f(
        e,
        de,
        ue
      );
      I && ($.html = I), y = $.html ? u($) : d($), a(y, E), l(y);
    }, v = () => {
      nextTick(() => w(t.value, true, false));
    }, z = () => {
      nextTick(() => w(t.value, false, true));
    }, Z = {
      setIconUrl: v,
      setIconRetinaUrl: v,
      setIconSize: v,
      setIconAnchor: v,
      setPopupAnchor: v,
      setTooltipAnchor: v,
      setShadowUrl: v,
      setShadowRetinaUrl: v,
      setShadowAnchor: v,
      setBgPos: v,
      setClassName: v,
      setHtml: v
    };
    return onMounted(async () => {
      const {
        DomEvent: N,
        divIcon: P,
        icon: B
      } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      a = N.on, i = N.off, u = P, d = B, L(Z, {}, e), new MutationObserver(z).observe(t.value, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      }), v();
    }), { root: t };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return h$1("div", { ref: "root" }, e);
  }
});
const Ge = {
  ...D,
  opacity: {
    type: Number
  },
  alt: {
    type: String
  },
  interactive: {
    type: Boolean,
    default: void 0
  },
  crossOrigin: {
    type: Boolean,
    default: void 0
  },
  errorOverlayUrl: {
    type: String
  },
  zIndex: {
    type: Number
  },
  className: {
    type: String
  },
  url: {
    type: String,
    required: true,
    custom: true
  },
  bounds: {
    type: [Array, Object],
    required: true,
    custom: true
  }
}, nt = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    Ge,
    n
  ), l = {
    ...s,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(a) {
      return o.value.setOpacity(a);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(a) {
      return o.value.setUrl(a);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(a) {
      return o.value.setBounds(a);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return o.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return o.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return o.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return o.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(a) {
      return o.value.setZIndex(a);
    }
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LImageOverlay",
  props: Ge,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject$1(h), r = m(M), { options: l, methods: a } = nt(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { imageOverlay: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(e.url, e.bounds, l)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
defineComponent({
  props: te,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject$1(h), r = m(M), { methods: l } = se(e, t, o);
    return onMounted(async () => {
      const { layerGroup: a } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a(void 0, e.options)
      );
      const { listeners: i } = T(o.attrs);
      t.value.on(i), L(l, t.value, e), r({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
function rt(e, o, t) {
  var n, s, r;
  o === void 0 && (o = 50), t === void 0 && (t = {});
  var l = (n = t.isImmediate) != null && n, a = (s = t.callback) != null && s, i = t.maxWait, u = Date.now(), d = [];
  function y() {
    if (i !== void 0) {
      var v = Date.now() - u;
      if (v + o >= i)
        return i - v;
    }
    return o;
  }
  var w = function() {
    var v = [].slice.call(arguments), z = this;
    return new Promise(function(Z, N) {
      var P = l && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !l) {
          var I = e.apply(z, v);
          a && a(I), d.forEach(function(E) {
            return (0, E.resolve)(I);
          }), d = [];
        }
      }, y()), P) {
        var B = e.apply(z, v);
        return a && a(B), Z(B);
      }
      d.push({ resolve: Z, reject: N });
    });
  };
  return w.cancel = function(v) {
    r !== void 0 && clearTimeout(r), d.forEach(function(z) {
      return (0, z.reject)(v);
    }), d = [];
  }, w;
}
const We = {
  ...W,
  /**
   * The center of the map, supports .sync modifier
   */
  center: {
    type: [Object, Array]
  },
  /**
   * The bounds of the map, supports .sync modifier
   */
  bounds: {
    type: [Array, Object]
  },
  /**
   * The max bounds of the map
   */
  maxBounds: {
    type: [Array, Object]
  },
  /**
   * The zoom of the map, supports .sync modifier
   */
  zoom: {
    type: Number
  },
  /**
   * The minZoom of the map
   */
  minZoom: {
    type: Number
  },
  /**
   * The maxZoom of the map
   */
  maxZoom: {
    type: Number
  },
  /**
   * The paddingBottomRight of the map
   */
  paddingBottomRight: {
    type: [Object, Array]
  },
  /**
   * The paddingTopLeft of the map
   */
  paddingTopLeft: {
    type: Object
  },
  /**
   * The padding of the map
   */
  padding: {
    type: Object
  },
  /**
   * The worldCopyJump option for the map
   */
  worldCopyJump: {
    type: Boolean,
    default: void 0
  },
  /**
   * The CRS to use for the map. Can be an object that defines a coordinate reference
   * system for projecting geographical points into screen coordinates and back
   * (see https://leafletjs.com/reference-1.7.1.html#crs-l-crs-base), or a string
   * name identifying one of Leaflet's defined CRSs, such as "EPSG4326".
   */
  crs: {
    type: [String, Object]
  },
  maxBoundsViscosity: {
    type: Number
  },
  inertia: {
    type: Boolean,
    default: void 0
  },
  inertiaDeceleration: {
    type: Number
  },
  inertiaMaxSpeed: {
    type: Number
  },
  easeLinearity: {
    type: Number
  },
  zoomAnimation: {
    type: Boolean,
    default: void 0
  },
  zoomAnimationThreshold: {
    type: Number
  },
  fadeAnimation: {
    type: Boolean,
    default: void 0
  },
  markerZoomAnimation: {
    type: Boolean,
    default: void 0
  },
  noBlockingAnimations: {
    type: Boolean,
    default: void 0
  },
  useGlobalLeaflet: {
    type: Boolean,
    default: true,
    custom: true
  }
}, io = defineComponent({
  inheritAttrs: false,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: We,
  setup(e, o) {
    const t = ref(), n = reactive({
      ready: false,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = J(e), r = f(
      e,
      We,
      s
    ), { listeners: l, attrs: a } = T(o.attrs), i = Y(M), u = Y(ee), d = Y(H), y = Y(
      me
    );
    provide(h, e.useGlobalLeaflet);
    const w = computed(() => {
      const P = {};
      return e.noBlockingAnimations && (P.animate = false), P;
    }), v = computed(() => {
      const P = w.value;
      return e.padding && (P.padding = e.padding), e.paddingTopLeft && (P.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (P.paddingBottomRight = e.paddingBottomRight), P;
    }), z = {
      moveend: rt((P) => {
        n.leafletRef && (o.emit("update:zoom", n.leafletRef.getZoom()), o.emit("update:center", n.leafletRef.getCenter()), o.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(true);
      },
      overlayremove(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(false);
      }
    };
    onMounted(async () => {
      e.useGlobalLeaflet && (b.L = b.L || await import("./leaflet-src-DK7vZj2f.js").then((n2) => n2.l));
      const { map: P, CRS: B, Icon: I, latLngBounds: E, latLng: ue, stamp: $ } = e.useGlobalLeaflet ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (p) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${p.message}`
        );
      }
      await qe(I);
      const yt = typeof r.crs == "string" ? B[r.crs] : r.crs;
      r.crs = yt || B.EPSG3857;
      const Q = {
        addLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(p) : n.layersInControl.find(
            (X) => $(X.leafletObject) === $(p.leafletObject)
          ) || (n.layerControl.addLayer(p), n.layersInControl.push(p))), p.visible !== false && n.leafletRef.addLayer(p.leafletObject);
        },
        removeLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (C) => C.name !== p.name
          ) : (n.layerControl.removeLayer(p.leafletObject), n.layersInControl = n.layersInControl.filter(
            (C) => $(C.leafletObject) !== $(p.leafletObject)
          ))), n.leafletRef.removeLayer(p.leafletObject);
        },
        registerLayerControl(p) {
          n.layerControl = p, n.layersToAdd.forEach((C) => {
            n.layerControl.addLayer(C);
          }), n.layersToAdd = [], d(p);
        },
        registerControl(p) {
          n.leafletRef.addControl(p.leafletObject);
        },
        setZoom(p) {
          const C = n.leafletRef.getZoom();
          p !== C && n.leafletRef.setZoom(p, w.value);
        },
        setCrs(p) {
          const C = n.leafletRef.getBounds();
          n.leafletRef.options.crs = p, n.leafletRef.fitBounds(C, {
            animate: false,
            padding: [0, 0]
          });
        },
        fitBounds(p) {
          n.leafletRef.fitBounds(p, v.value);
        },
        setBounds(p) {
          if (!p)
            return;
          const C = E(p);
          if (!C.isValid())
            return;
          !(n.lastSetBounds || n.leafletRef.getBounds()).equals(C, 0) && (n.lastSetBounds = C, n.leafletRef.fitBounds(C));
        },
        setCenter(p) {
          if (p == null)
            return;
          const C = ue(p), X = n.lastSetCenter || n.leafletRef.getCenter();
          (X.lat !== C.lat || X.lng !== C.lng) && (n.lastSetCenter = C, n.leafletRef.panTo(C, w.value));
        }
      };
      V(i, Q.addLayer), V(u, Q.removeLayer), V(d, Q.registerControl), V(y, Q.registerLayerControl), n.leafletRef = markRaw(P(t.value, r)), L(Q, n.leafletRef, e), ce(n.leafletRef, z), ce(n.leafletRef, l), n.ready = true, nextTick(() => o.emit("ready", n.leafletRef));
    }), onBeforeUnmount(() => {
      ye(z), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const Z = computed(() => n.leafletRef), N = computed(() => n.ready);
    return { root: t, ready: N, leafletObject: Z, attrs: a };
  },
  render({ attrs: e }) {
    return e.style || (e.style = {}), e.style.width || (e.style.width = "100%"), e.style.height || (e.style.height = "100%"), h$1(
      "div",
      {
        ...e,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), Gt = ["Symbol(Comment)", "Symbol(Text)"], zt = ["LTooltip", "LPopup"], ze = {
  ...D,
  draggable: {
    type: Boolean,
    default: void 0
  },
  icon: {
    type: [Object]
  },
  zIndexOffset: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    custom: true,
    required: true
  }
}, st = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    ze,
    n
  ), l = {
    ...s,
    setDraggable(a) {
      o.value.dragging && (a ? o.value.dragging.enable() : o.value.dragging.disable());
    },
    latLngSync(a) {
      t.emit("update:latLng", a.latlng), t.emit("update:lat-lng", a.latlng);
    },
    setLatLng(a) {
      if (a != null && o.value) {
        const i = o.value.getLatLng();
        (!i || !i.equals(a)) && o.value.setLatLng(a);
      }
    }
  };
  return { options: r, methods: l };
}, at = (e, o) => {
  const t = o.slots.default && o.slots.default();
  return t && t.length && t.some(Nt);
};
function Nt(e) {
  return !(Gt.includes(e.type.toString()) || zt.includes(e.type.name));
}
defineComponent({
  name: "LMarker",
  props: ze,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject$1(h), r = m(M);
    provide(
      ve,
      () => {
        var u;
        return !!((u = t.value) != null && u.getElement());
      }
    ), provide(be, (u) => {
      var y, w;
      const d = k((y = t.value) == null ? void 0 : y.getElement) && ((w = t.value) == null ? void 0 : w.getElement());
      d && (d.innerHTML = u);
    }), provide(
      fe,
      (u) => {
        var d;
        return ((d = t.value) == null ? void 0 : d.setIcon) && t.value.setIcon(u);
      }
    );
    const { options: l, methods: a } = st(e, t, o), i = {
      moveHandler: rt(a.latLngSync)
    };
    return onMounted(async () => {
      const { marker: u, divIcon: d } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      at(l, o) && (l.icon = d({ className: "" })), t.value = markRaw(u(e.latLng, l));
      const { listeners: y } = T(o.attrs);
      t.value.on(y), t.value.on("move", i.moveHandler), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), onBeforeUnmount(() => ye(i)), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const le = {
  ...ne,
  smoothFactor: {
    type: Number
  },
  noClip: {
    type: Boolean,
    default: void 0
  },
  latLngs: {
    type: Array,
    required: true,
    custom: true
  }
}, Ne = (e, o, t) => {
  const { options: n, methods: s } = _e(
    e,
    o,
    t
  ), r = f(
    e,
    le,
    n
  ), l = {
    ...s,
    setSmoothFactor(a) {
      o.value.setStyle({ smoothFactor: a });
    },
    setNoClip(a) {
      o.value.setStyle({ noClip: a });
    },
    addLatLng(a) {
      o.value.addLatLng(a);
    }
  };
  return { options: r, methods: l };
}, x = {
  ...le
}, $e = (e, o, t) => {
  const { options: n, methods: s } = Ne(
    e,
    o,
    t
  ), r = f(
    e,
    x,
    n
  ), l = {
    ...s,
    toGeoJSON(a) {
      return o.value.toGeoJSON(a);
    }
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LPolygon",
  props: x,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject$1(h), r = m(M), { options: l, methods: a } = $e(e, t, o);
    return onMounted(async () => {
      const { polygon: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(e.latLngs, l));
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
defineComponent({
  name: "LPolyline",
  props: le,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject$1(h), r = m(M), { options: l, methods: a } = Ne(e, t, o);
    return onMounted(async () => {
      const { polyline: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(e.latLngs, l)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const ke = {
  ...W,
  content: {
    type: String,
    default: null
  }
}, Ue = (e, o) => {
  const { options: t, methods: n } = J(e), s = {
    ...n,
    setContent(r) {
      o.value && r !== null && r !== void 0 && o.value.setContent(r);
    }
  };
  return { options: t, methods: s };
}, De = (e) => e.default ? h$1("div", { ref: "root" }, e.default()) : null, lt = {
  ...ke,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, it = (e, o) => {
  const { options: t, methods: n } = Ue(e, o);
  return { options: t, methods: n };
};
defineComponent({
  name: "LPopup",
  props: lt,
  setup(e, o) {
    const t = ref(), n = ref(null), s = inject$1(h), r = m(ge), l = m(he), { options: a, methods: i } = it(e, t);
    return onMounted(async () => {
      const { popup: u } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(u(a)), e.latLng !== void 0 && t.value.setLatLng(e.latLng), L(i, t.value, e);
      const { listeners: d } = T(o.attrs);
      t.value.on(d), t.value.setContent(e.content || n.value || ""), r(t.value), nextTick(() => o.emit("ready", t.value));
    }), onBeforeUnmount(() => {
      l();
    }), { root: n, leafletObject: t };
  },
  render() {
    return De(this.$slots);
  }
});
const Fe = {
  ...x,
  latLngs: {
    ...x.latLngs,
    required: false
  },
  bounds: {
    type: Object,
    custom: true
  }
}, ut = (e, o, t) => {
  const { options: n, methods: s } = $e(
    e,
    o,
    t
  ), r = f(
    e,
    Fe,
    n
  ), l = {
    ...s,
    setBounds(a) {
      o.value.setBounds(a);
    },
    setLatLngs(a) {
      o.value.setBounds(a);
    }
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LRectangle",
  props: Fe,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject$1(h), r = m(M), { options: l, methods: a } = ut(e, t, o);
    return onMounted(async () => {
      const { rectangle: i, latLngBounds: u } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js"), d = e.bounds ? u(e.bounds) : u(e.latLngs || []);
      t.value = markRaw(i(d, l));
      const { listeners: y } = T(o.attrs);
      t.value.on(y), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const ie = {
  ...ae,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (e) => typeof e == "string" ? true : Array.isArray(e) ? e.every((o) => typeof o == "string") : false
  },
  detectRetina: {
    type: Boolean,
    default: void 0
  },
  url: {
    type: String,
    required: true,
    custom: true
  }
}, Ze = (e, o, t) => {
  const { options: n, methods: s } = Ae(e, o, t), r = f(
    e,
    ie,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
}, vo = defineComponent({
  props: ie,
  setup(e, o) {
    const t = ref(), n = inject$1(h), s = m(M), { options: r, methods: l } = Ze(e, t, o);
    return onMounted(async () => {
      const { tileLayer: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(a(e.url, r));
      const { listeners: i } = T(o.attrs);
      t.value.on(i), L(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), ct = {
  ...ke
}, dt = (e, o) => {
  const { options: t, methods: n } = Ue(e, o), s = m(Oe);
  return onBeforeUnmount(() => {
    s();
  }), { options: t, methods: n };
};
defineComponent({
  name: "LTooltip",
  props: ct,
  setup(e, o) {
    const t = ref(), n = ref(null), s = inject$1(h), r = m(Le), { options: l, methods: a } = dt(e, t);
    return onMounted(async () => {
      const { tooltip: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(l)), L(a, t.value, e);
      const { listeners: u } = T(o.attrs);
      t.value.on(u), t.value.setContent(e.content || n.value || ""), r(t.value), nextTick(() => o.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return De(this.$slots);
  }
});
const Ee = {
  ...ie,
  layers: {
    type: String,
    required: true
  },
  styles: {
    type: String
  },
  format: {
    type: String
  },
  transparent: {
    type: Boolean,
    default: void 0
  },
  version: {
    type: String
  },
  crs: {
    type: Object
  },
  uppercase: {
    type: Boolean,
    default: void 0
  }
}, pt = (e, o, t) => {
  const { options: n, methods: s } = Ze(e, o, t);
  return {
    options: f(
      e,
      Ee,
      n
    ),
    methods: {
      ...s
    }
  };
};
defineComponent({
  props: Ee,
  setup(e, o) {
    const t = ref(), n = inject$1(h), s = m(M), { options: r, methods: l } = pt(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { tileLayer: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a.wms(e.url, r)
      );
      const { listeners: i } = T(o.attrs);
      t.value.on(i), L(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const _hoisted_1$1 = { class: "line" };
const _hoisted_2$1 = { class: "right" };
const _hoisted_3$1 = { class: "content" };
const _hoisted_4$1 = { class: "list_of_formats" };
const _hoisted_5$1 = { class: "line" };
const _hoisted_6$1 = { class: "right" };
const _hoisted_7$1 = { class: "content" };
const _hoisted_8$1 = { class: "map" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FilterModal",
  props: {
    "modelValue": {
      default: reactive([
        { formats: {} },
        { mapSection: {} }
      ])
    },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const toogle = ref(false);
    const run = () => {
      toogle.value = !toogle.value;
    };
    __expose({
      run
    });
    const getColor = useFormat().getColorForFormat;
    const model = useModel(__props, "modelValue");
    const formats = ref([
      { name: "OGC", key: Formats.WMS, color: getColor(Formats.WMS), active: true },
      { name: "SensorThings", key: Formats.OGCSTA, color: getColor(Formats.OGCSTA), active: true },
      { name: "XMLA", key: Formats.XMLA, color: getColor(Formats.XMLA), active: true },
      { name: "CSV", key: Formats.CSV, color: getColor(Formats.CSV), active: true },
      { name: "JSON", key: Formats.JSON, color: getColor(Formats.JSON), active: true }
    ]);
    const formatFilter = ref(false);
    const map = ref(null);
    const mapSettings = reactive({
      baseMapUrl: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
      zoom: 14,
      attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      center: [50.93115286, 11.60392726],
      map_filter_on: false
    });
    const init = () => {
      const mapSection = model.value?.find((f2) => f2["mapSection"]);
      const formats2 = model.value?.find((f2) => f2["formats"]);
      if (mapSection) {
        mapSettings.map_filter_on = true;
        try {
          map.value ?? {}.leafletObject.fitBounds(mapSection.mapSection);
        } catch (e) {
        }
      }
      if (formats2) {
        formatFilter.value = true;
      }
    };
    const move = () => {
      let mapSection = model.value?.find((f2) => f2["mapSection"]);
      if (!mapSection) {
        mapSection = { mapSection: {} };
        model.value.push(mapSection);
      }
      mapSection.mapSection = map.value ?? {}.leafletObject.getBounds();
    };
    watch(() => mapSettings.map_filter_on, (val) => {
      const mapSection = model.value?.find((f2) => f2["mapSection"]);
      if (!val) {
        if (mapSection) {
          const pos = model.value.indexOf(mapSection);
          if (pos != -1) model.value.splice(pos);
        }
      }
    });
    const prevented = ref(false);
    watch(formatFilter, (val) => {
      const formatsInModel = model.value?.find((f2) => f2["formats"]);
      if (prevented.value) {
        prevented.value = false;
        return;
      }
      if (formatsInModel?.formats) {
        if (val) {
          formats.value.forEach((e) => e.active = false);
          formatsInModel.formats.forEach((e) => {
            formats.value.findLast((f2) => f2.key == e).active = true;
          });
        } else {
          const pos = model.value.indexOf(formatsInModel);
          if (pos != -1) model.value.splice(pos);
          formats.value.forEach((e) => e.active = true);
        }
      }
    });
    const toogleFormat = (format) => {
      let formatsInModel = model.value?.find((f2) => f2["formats"]);
      if (!formatsInModel) {
        formatsInModel = { formats: [] };
        model.value.push(formatsInModel);
      }
      if (formatFilter.value) {
        format.active = !format.active;
        const index = formatsInModel.formats.indexOf(format.key);
        if (index == -1) {
          formatsInModel.formats?.push(format.key);
        } else {
          formatsInModel.formats?.splice(index);
        }
        if (formatsInModel.formats.length == 0) {
          formatFilter.value = false;
        }
      } else {
        prevented.value = true;
        formats.value.forEach((e) => e.active = false);
        format.active = true;
        formatsInModel.formats = [format.key];
        formatFilter.value = true;
      }
    };
    return (_ctx, _cache) => {
      const _component_va_button = resolveComponent("va-button");
      const _component_VaSwitch = resolveComponent("VaSwitch");
      const _component_va_divider = resolveComponent("va-divider");
      const _component_VaChip = resolveComponent("VaChip");
      const _component_va_card_content = resolveComponent("va-card-content");
      const _component_va_modal = resolveComponent("va-modal");
      return openBlock(), createBlock(_component_va_modal, {
        modelValue: toogle.value,
        class: "filterbox",
        "hide-default-actions": "",
        "no-padding": "",
        onOpen: init
      }, {
        header: withCtx(() => [..._cache[4] || (_cache[4] = [
          createElementVNode("h3", { class: "title" }, "Filter", -1)
        ])]),
        default: withCtx(({ ok }) => [
          createVNode(_component_va_button, {
            class: "mr-1 mb-1 close",
            preset: "secondary",
            style: { "position": "absolute", "right": "0", "top": "0" },
            onClick: _cache[0] || (_cache[0] = () => {
              toogle.value = false;
            })
          }, {
            default: withCtx(() => [..._cache[5] || (_cache[5] = [
              createTextVNode(" x ", -1)
            ])]),
            _: 1
          }),
          createVNode(_component_va_card_content, null, {
            default: withCtx(() => [
              _cache[8] || (_cache[8] = createElementVNode("div", {
                class: "spacer",
                style: { "height": "25px" }
              }, null, -1)),
              createElementVNode("div", _hoisted_1$1, [
                _cache[6] || (_cache[6] = createElementVNode("div", { class: "va-collapse__header__text left" }, "Format", -1)),
                createElementVNode("div", _hoisted_2$1, [
                  createVNode(_component_VaSwitch, {
                    modelValue: formatFilter.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formatFilter.value = $event),
                    "false-inner-label": "all",
                    "true-inner-label": "Selection"
                  }, null, 8, ["modelValue"])
                ])
              ]),
              createVNode(_component_va_divider),
              createElementVNode("div", _hoisted_3$1, [
                createElementVNode("div", _hoisted_4$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(formats.value, (format) => {
                    return openBlock(), createBlock(_component_VaChip, {
                      key: format.key,
                      color: format.active ? format.color : "#ccc",
                      disabled: !format.active,
                      class: "pointer",
                      size: "small",
                      onClick: ($event) => toogleFormat(format)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(format.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["color", "disabled", "onClick"]);
                  }), 128))
                ])
              ]),
              createElementVNode("div", _hoisted_5$1, [
                _cache[7] || (_cache[7] = createElementVNode("div", { class: "va-collapse__header__text left" }, "Region", -1)),
                createElementVNode("div", _hoisted_6$1, [
                  createVNode(_component_VaSwitch, {
                    modelValue: mapSettings.map_filter_on,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => mapSettings.map_filter_on = $event),
                    "false-inner-label": "anywhere",
                    "true-inner-label": "within map section"
                  }, null, 8, ["modelValue"])
                ])
              ]),
              createVNode(_component_va_divider),
              createElementVNode("div", _hoisted_7$1, [
                createElementVNode("div", _hoisted_8$1, [
                  createVNode(unref(io), {
                    id: "map",
                    ref_key: "map",
                    ref: map,
                    center: mapSettings.center,
                    "max-zoom": 21,
                    useGlobalLeaflet: true,
                    zoom: mapSettings.zoom,
                    style: { "height": "100%" },
                    onMove: _cache[3] || (_cache[3] = () => {
                      move();
                      mapSettings.map_filter_on = true;
                    })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(vo), {
                        attribution: mapSettings.attribution,
                        options: {
                          maxNativeZoom: 19,
                          maxZoom: 25
                        },
                        url: mapSettings.baseMapUrl
                      }, null, 8, ["attribution", "url"])
                    ]),
                    _: 1
                  }, 8, ["center", "zoom"])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const FilterModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d76f1184"]]);
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia$1;
const setActivePinia$1 = (pinia) => activePinia$1 = pinia;
const piniaSymbol$1 = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject$1(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType$1;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType$1 || (MutationType$1 = {}));
const noop$1 = () => {
};
function addSubscription$1(subscriptions, callback, detached, onCleanup = noop$1) {
  subscriptions.add(callback);
  const removeSubscription = () => {
    const isDel = subscriptions.delete(callback);
    isDel && onCleanup();
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions$1(subscriptions, ...args) {
  subscriptions.forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext$1 = (fn) => fn();
const ACTION_MARKER$1 = Symbol();
const ACTION_NAME$1 = Symbol();
function mergeReactiveObjects$1(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects$1(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol$1 = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate$1(obj) {
  return !isPlainObject$1(obj) || !Object.prototype.hasOwnProperty.call(obj, skipHydrateSymbol$1);
}
const { assign: assign$1 } = Object;
function isComputed$1(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore$1(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      pinia.state.value[id] = state ? state() : {};
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign$1(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia$1(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore$1(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore$1($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign$1({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = /* @__PURE__ */ new Set();
  let actionSubscriptions = /* @__PURE__ */ new Set();
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && true) {
    pinia.state.value[$id] = {};
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType$1.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects$1(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType$1.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions$1(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$1($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop$1
  );
  function $dispose() {
    scope.stop();
    subscriptions.clear();
    actionSubscriptions.clear();
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER$1 in fn) {
      fn[ACTION_NAME$1] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia$1(pinia);
      const args = Array.from(arguments);
      const afterCallbackSet = /* @__PURE__ */ new Set();
      const onErrorCallbackSet = /* @__PURE__ */ new Set();
      function after(callback) {
        afterCallbackSet.add(callback);
      }
      function onError(callback) {
        onErrorCallbackSet.add(callback);
      }
      triggerSubscriptions$1(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME$1],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions$1(onErrorCallbackSet, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions$1(afterCallbackSet, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions$1(onErrorCallbackSet, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions$1(afterCallbackSet, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER$1] = true;
    wrappedAction[ACTION_NAME$1] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription$1.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription$1(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType$1.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$1({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext$1;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed$1(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate$1(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects$1(prop, initialState[key]);
          }
        }
        pinia.state.value[$id][key] = prop;
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      setupStore[key] = actionValue;
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  assign$1(store, setupStore);
  assign$1(toRaw(store), setupStore);
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign$1($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign$1(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineStore$1(id, setup, setupOptions) {
  let options;
  const isSetupStore = typeof setup === "function";
  options = isSetupStore ? setupOptions : setup;
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    pinia || (hasContext ? inject$1(piniaSymbol$1, null) : null);
    if (pinia)
      setActivePinia$1(pinia);
    pinia = activePinia$1;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore$1(id, setup, options, pinia);
      } else {
        createOptionsStore$1(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const useWidgetsStore = (pageid = "") => {
  const storecall = /* @__PURE__ */ defineStore$1(`widget-${pageid}`, () => {
    const widgets = ref([]);
    const createWidget = (type, config = {}, wrapperConfig = {}) => {
      const uid = "li_" + Math.random().toString(36).substring(7);
      const widgetName = "widget_" + uid;
      widgets.value.push({
        uid,
        type,
        wrapperConfig,
        config: {
          datasourceId: config.datasourceId,
          settings: { name: widgetName }
        }
      });
      return uid;
    };
    const removeWidget = (widgetId) => {
      const index = widgets.value.findIndex((v) => v.uid === widgetId);
      if (index > -1) {
        widgets.value.splice(index, 1);
      }
    };
    const updateWidget = (widgetId, widgetProxy) => {
      const widget = widgets.value.find((c) => c.uid === widgetId);
      if (!widget) return;
      widget.uid = widgetProxy.uid;
      widget.type = widgetProxy.type;
      widget.wrapperConfig = widgetProxy.wrapperConfig;
      widget.config = widgetProxy.config;
    };
    const updateWidgets = (widgetsProxy) => {
      widgets.value.splice(0);
      widgetsProxy.forEach((widgetProxy) => {
        widgets.value.push(widgetProxy);
      });
    };
    return { widgets, createWidget, removeWidget, updateWidget, updateWidgets };
  });
  return storecall();
};
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && true) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    pinia || (hasContext ? inject$1(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const useLayoutStore = (pageId = "") => {
  const storeCaller = /* @__PURE__ */ defineStore("layout" + pageId, () => {
    const layout = ref([]);
    const updateLayout = (updatedLayout) => {
      layout.value.splice(0, layout.value.length);
      layout.value = updatedLayout;
    };
    return {
      layout,
      updateLayout
    };
  });
  return storeCaller();
};
const _hoisted_1 = { class: "flex padd15" };
const _hoisted_2 = { class: "buttonbar" };
const _hoisted_3 = { class: "padd" };
const _hoisted_4 = {
  key: 0,
  class: "title"
};
const _hoisted_5 = {
  key: 1,
  class: "aflex"
};
const _hoisted_6 = { class: "aflex" };
const _hoisted_7 = { class: "aflex" };
const _hoisted_8 = { class: "widgets_grid" };
const _hoisted_9 = ["active", "onClick"];
const _hoisted_10 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EndPointfinderModal",
  setup(__props, { expose: __expose }) {
    const route = useRoute();
    const toogle = ref(false);
    let createWidget, updateLayout, layout;
    const run = () => {
      const pageID = route.params.pageid ?? "";
      const widgetStore = useWidgetsStore(pageID);
      const layoutStore = useLayoutStore(pageID);
      createWidget = widgetStore.createWidget;
      updateLayout = layoutStore.updateLayout;
      layout = layoutStore.layout;
      toogle.value = !toogle.value;
    };
    const step = ref(0);
    const formRef = ref();
    const connectionForm = ref();
    const { connections: connections2, createConnection } = useConnectionsStore();
    const { dataSources, createDataSource, updateDataSource } = useDataSourcesStore();
    const registeredWidgets = container.get(identifier);
    const widgetOptions = ref([]);
    const selectedWidgets = ref([]);
    const stepsVailid = reactive({
      step0: false,
      step1: true,
      step2: true,
      step3: true
    });
    const steps = [
      {
        label: "Search",
        icon: "travel_explore",
        beforeLeave: (step2) => {
          step2.hasError = !stepsVailid.step0;
        }
      },
      {
        label: "Connection",
        icon: "polyline",
        beforeLeave: (step2) => {
          step2.hasError = !stepsVailid.step1;
        }
      },
      {
        label: "Store",
        icon: "store",
        beforeLeave: (step2) => {
          step2.hasError = !stepsVailid.step2;
        }
      },
      { label: "Widgets", icon: "widgets", beforeLeave: (step2) => {
        step2.hasError = !stepsVailid.step3;
      } }
    ];
    onMounted(() => {
      console.log("Mounting endpoint finder");
    });
    const form = reactive({
      searchString: "",
      loading: false
    });
    const loadModalref = ref(null);
    const openFilterModal = async () => {
      return await loadModalref.value?.run(() => {
      });
    };
    const filterCount = ref("");
    const filter = ref([]);
    const results = ref({});
    watch(filter, () => {
      if (!filter.value) {
        filterCount.value = "";
        return;
      }
      const lengthOfNonUndefined = Object.keys(filter.value).reduce((accumulator, currentValue, currentIndex) => filter.value[currentValue] != void 0 ? accumulator + 1 : accumulator, 0);
      if (lengthOfNonUndefined == 0) {
        filterCount.value = "";
        return;
      }
      filterCount.value = lengthOfNonUndefined.toString();
    }, { immediate: true, deep: true });
    const resultAsTable = computed(() => {
      let reducedTable = [];
      for (let resultKey of Object.keys(results.value)) {
        reducedTable = reducedTable.concat(
          results.value[resultKey].results?.bindings?.map((b2) => {
            b2["endpoint"] = { value: resultKey };
            return b2;
          })
        );
      }
      return reducedTable;
    });
    const search = async () => {
      form.loading = true;
      const val = form.searchString;
      const listOfEndPoints = useSparQLEndPointManager().getAllActiveEndpoints();
      if (listOfEndPoints) {
        results.value = await new QueryBuilder().setEndpoints(listOfEndPoints).setFilter(filter.value).query(val);
      }
      form.loading = false;
    };
    const connectionManager = container.get(identifier$1);
    const storeManager = container.get(identifier$2);
    storeManager.getDataSourceTypes();
    let ds = ref();
    ref("rest");
    let store = ref();
    const ds_notFountInfo = ref(false);
    const selectedItemsEmitted = ref();
    watch(selectedItemsEmitted, () => {
      ds_notFountInfo.value = false;
      let uri = null;
      try {
        uri = new URL(selectedItemsEmitted.value?.accessUrl?.value);
        ds.value = createConnectionFromFormat(selectedItemsEmitted.value?.format?.value, uri.origin);
      } catch (e) {
        console.log(e);
      }
      if (ds.value) {
        stepsVailid["step0"] = true;
      } else {
        ds_notFountInfo.value = true;
        stepsVailid["step0"] = false;
      }
    });
    watch(step, (val) => {
      if (val == 2) {
        let uri = null;
        try {
          uri = new URL(selectedItemsEmitted.value?.accessUrl?.value);
          if (!ds.value) throw new Error("connection not found");
          const id = ds.value?.uid;
          if (!id) throw new Error("id not found");
          store.value = reactive(createStoreFromFormat(selectedItemsEmitted.value?.format?.value, id, uri.pathname));
        } catch (e) {
          console.log(e);
        }
      }
      if (val === 3) {
        console.log(registeredWidgets.getAllWidgets());
        const availableWidgets = Object.entries(registeredWidgets.getAllWidgets()).filter(([_, widget]) => widget.supportedDSTypes.includes(store.value?.type)).filter(([_, widget]) => widget.icon).map(([name, widget]) => ({ type: name, icon: widget.icon }));
        console.log(availableWidgets);
        widgetOptions.value = availableWidgets;
      }
    });
    const createConnectionFromFormat = (format, url) => {
      let con = void 0;
      const availableTypes = connectionManager.getRegisteredTypes();
      switch ("<" + format + ">") {
        case Formats.CSV:
        case Formats.JSON:
        case Formats.REST:
        case Formats.OGCSTA:
          if (availableTypes.includes("rest")) {
            const id = createConnection("rest", { url });
            con = connections2.find((con2) => con2.uid === id);
          }
          break;
        case Formats.XMLA:
          if (availableTypes.includes("xmla")) {
            const id = createConnection("xmla", { url });
            con = connections2.find((con2) => con2.uid === id);
          }
          break;
      }
      return con;
    };
    const createStoreFromFormat = (format, aconnection, aresourceUri) => {
      switch ("<" + format + ">") {
        case Formats.CSV:
          const uid = createDataSource("csv", { connection: aconnection, resourceUrl: aresourceUri, separators: "," });
          return dataSources.find((ds2) => ds2.uid === uid);
        case Formats.JSON:
          const uid_rest = createDataSource("rest", { connection: aconnection, resourceUrl: aresourceUri });
          return dataSources.find((ds2) => ds2.uid === uid_rest);
        case Formats.REST:
          const uid_rest2 = createDataSource("rest", { connection: aconnection, resourceUrl: aresourceUri });
          return dataSources.find((ds2) => ds2.uid === uid_rest2);
        case Formats.OGCSTA:
          const uid_ogcsta = createDataSource("ogcsta", { connection: aconnection, resourceUrl: aresourceUri });
          return dataSources.find((ds2) => ds2.uid === uid_ogcsta);
        case Formats.XMLA:
          const uid_xmla = createDataSource("xmla", { connection: aconnection, resourceUrl: aresourceUri });
          return dataSources.find((ds2) => ds2.uid === uid_xmla);
      }
      return null;
    };
    const getComponent = computed(() => {
      const identifiers = storeManager.getDatasourceIdentifiers(store.value.type);
      return container.get(identifiers.Settings);
    });
    const getComponentConnection = computed(() => {
      if (!ds.value) return null;
      const identifiers = connectionManager.getConnectionIdentifiers(ds.value.type);
      return container.get(identifiers.Settings);
    });
    const finish = () => {
      if (selectedWidgets.value.length > 0) {
        const newLayoutItems = [];
        selectedWidgets.value.forEach((widget, index) => {
          const id = createWidget(
            widget.type,
            { datasourceId: store.value?.uid },
            {
              title: "",
              backgroundColor: "#fff",
              backgroundColorTransparence: 255,
              titleColor: "#7c7c7c",
              titleFontSize: 15,
              borderSize: 0,
              borderColor: "#ccc",
              padding: 0,
              blur: 0,
              borderRadius: 15,
              fullscreen: false,
              shadowColor: "#333",
              shadowBlur: 12,
              shadowX: 5,
              shadowY: 5,
              shadowTransparence: 25,
              transparency: 255
            }
          );
          const slayout = {
            id,
            x: 50 + index * 300,
            y: 50,
            width: 200,
            height: 100,
            z: 3005
          };
          newLayoutItems.push(slayout);
          console.log("Endpointfinder created Widget:" + widget.type);
        });
        const updatedLayout = [...layout, ...newLayoutItems];
        updateLayout(updatedLayout);
      }
      selectedWidgets.value = [];
      ds.value = void 0;
      store.value = void 0;
      step.value = 0;
      filter.value = [];
      form.searchString = "";
      results.value = {};
      stepsVailid.step0 = false;
      stepsVailid.step1 = true;
      stepsVailid.step2 = true;
      stepsVailid.step3 = true;
      formRef.value?.resetValidation();
      connectionForm.value?.resetValidation();
      toogle.value = false;
    };
    watch(() => store.value?.config, (config) => {
      console.log(config);
    }, { deep: true });
    __expose({
      run
    });
    return (_ctx, _cache) => {
      const _component_VaButton = resolveComponent("VaButton");
      const _component_va_button = resolveComponent("va-button");
      const _component_VaIcon = resolveComponent("VaIcon");
      const _component_VaInput = resolveComponent("VaInput");
      const _component_VaForm = resolveComponent("VaForm");
      const _component_VaScrollContainer = resolveComponent("VaScrollContainer");
      const _component_va_input = resolveComponent("va-input");
      const _component_VaCheckbox = resolveComponent("VaCheckbox");
      const _component_va_card_content = resolveComponent("va-card-content");
      const _component_va_modal = resolveComponent("va-modal");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_va_modal, {
          modelValue: toogle.value,
          class: "infobox",
          "hide-default-actions": "",
          "no-padding": ""
        }, {
          footer: withCtx(() => [
            step.value != 3 ? (openBlock(), createBlock(_component_VaButton, {
              key: 0,
              disabled: !stepsVailid["step" + step.value],
              onClick: _cache[0] || (_cache[0] = ($event) => step.value++)
            }, {
              default: withCtx(() => [..._cache[7] || (_cache[7] = [
                createTextVNode("next", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : createCommentVNode("", true),
            step.value == 3 ? (openBlock(), createBlock(_component_VaButton, {
              key: 1,
              disabled: !stepsVailid["step" + step.value],
              onClick: finish
            }, {
              default: withCtx(() => [..._cache[8] || (_cache[8] = [
                createTextVNode("finish", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : createCommentVNode("", true)
          ]),
          default: withCtx(({ ok }) => [
            createVNode(_component_va_button, {
              class: "mr-1 mb-1 close",
              preset: "secondary",
              style: { "position": "absolute", "right": "0" },
              onClick: _cache[1] || (_cache[1] = ($event) => finish())
            }, {
              default: withCtx(() => [..._cache[9] || (_cache[9] = [
                createTextVNode(" x ", -1)
              ])]),
              _: 1
            }),
            createVNode(_component_va_card_content, { class: "no-padding" }, {
              default: withCtx(() => [
                createVNode(unref(VaStepper), {
                  color: "#c29803",
                  modelValue: step.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => step.value = $event),
                  steps,
                  controlsHidden: "",
                  linear: ""
                }, {
                  "step-content-0": withCtx(() => [
                    createVNode(_component_VaForm, {
                      ref_key: "formRef",
                      ref: formRef,
                      class: "flex flex-col items-baseline gap-6"
                    }, {
                      default: withCtx(() => [
                        createElementVNode("div", _hoisted_1, [
                          createVNode(_component_VaInput, {
                            modelValue: form.searchString,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.searchString = $event),
                            loading: form.loading,
                            class: "flex",
                            label: "Search String",
                            onKeyup: _cache[3] || (_cache[3] = (e) => {
                              if (e.key == "Enter") search();
                            })
                          }, {
                            prependInner: withCtx(() => [
                              createVNode(_component_VaIcon, {
                                color: "secondary",
                                name: "search"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "loading"]),
                          createElementVNode("div", _hoisted_2, [
                            createVNode(unref(VaBadge), {
                              offset: [-5, 5],
                              text: filterCount.value,
                              class: "mr-6",
                              overlap: "",
                              style: { "--va-badge-text-wrapper-border-radius": "50%" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VaButton, {
                                  icon: "filter_alt",
                                  preset: "secondary",
                                  round: "",
                                  onClick: openFilterModal
                                })
                              ]),
                              _: 1
                            }, 8, ["text"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 512),
                    resultAsTable.value.length > 0 ? (openBlock(), createBlock(_component_VaScrollContainer, {
                      key: 0,
                      class: "padd",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(resultAsTable.value, (result) => {
                          return openBlock(), createElementBlock(Fragment, null, [
                            createVNode(SearchResultCard, {
                              class: normalizeClass({ active: result == selectedItemsEmitted.value }),
                              result,
                              onClick: ($event) => selectedItemsEmitted.value = result
                            }, null, 8, ["class", "result", "onClick"]),
                            _cache[10] || (_cache[10] = createElementVNode("br", null, null, -1))
                          ], 64);
                        }), 256))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  "step-content-1": withCtx(() => [
                    createElementVNode("div", _hoisted_3, [
                      createVNode(_component_VaForm, {
                        ref_key: "connectionForm",
                        ref: connectionForm,
                        modelValue: stepsVailid["step1"],
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => stepsVailid["step1"] = $event),
                        immediate: ""
                      }, {
                        default: withCtx(() => [
                          !ds_notFountInfo.value ? (openBlock(), createElementBlock("h2", _hoisted_4, " The following Connection will be created:")) : (openBlock(), createElementBlock("div", _hoisted_5, [
                            createVNode(_component_VaIcon, {
                              class: "mr-2",
                              color: "#ec9c1d",
                              name: "warning",
                              size: "2rem"
                            }),
                            _cache[11] || (_cache[11] = createElementVNode("h2", { class: "title" }, " The Connection cant be automatic detected, this happens if the Type of Dataset is not known or not supported. Never the less you can try to configure the connection manualy:", -1))
                          ])),
                          _cache[14] || (_cache[14] = createElementVNode("br", null, null, -1)),
                          _cache[15] || (_cache[15] = createElementVNode("br", null, null, -1)),
                          createElementVNode("div", _hoisted_6, [
                            unref(ds) ? (openBlock(), createBlock(_component_va_input, {
                              key: 0,
                              modelValue: unref(ds)?.name,
                              rules: [(v) => !!v || "Required"],
                              label: "Name"
                            }, null, 8, ["modelValue", "rules"])) : createCommentVNode("", true),
                            createVNode(_component_va_input, {
                              modelValue: unref(ds)?.type,
                              class: "type-input",
                              label: "Type"
                            }, null, 8, ["modelValue"]),
                            _cache[12] || (_cache[12] = createElementVNode("br", null, null, -1)),
                            _cache[13] || (_cache[13] = createElementVNode("br", null, null, -1))
                          ]),
                          _cache[16] || (_cache[16] = createElementVNode("br", null, null, -1)),
                          (openBlock(), createBlock(resolveDynamicComponent(getComponentConnection.value), {
                            config: unref(ds)?.config
                          }, null, 8, ["config"]))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  "step-content-2": withCtx(() => [
                    createVNode(_component_VaScrollContainer, {
                      class: "padd",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        _cache[19] || (_cache[19] = createElementVNode("h2", { class: "title" }, " The following Store will be created:", -1)),
                        _cache[20] || (_cache[20] = createElementVNode("br", null, null, -1)),
                        createElementVNode("div", _hoisted_7, [
                          unref(ds) ? (openBlock(), createBlock(_component_va_input, {
                            key: 0,
                            modelValue: unref(store)?.name,
                            rules: [(v) => !!v || "Required"],
                            label: "Name"
                          }, null, 8, ["modelValue", "rules"])) : createCommentVNode("", true),
                          createVNode(_component_va_input, {
                            modelValue: unref(store)?.type,
                            class: "type-input",
                            label: "Type"
                          }, null, 8, ["modelValue"]),
                          _cache[17] || (_cache[17] = createElementVNode("br", null, null, -1)),
                          _cache[18] || (_cache[18] = createElementVNode("br", null, null, -1))
                        ]),
                        _cache[21] || (_cache[21] = createElementVNode("br", null, null, -1)),
                        (openBlock(), createBlock(resolveDynamicComponent(getComponent.value), {
                          config: unref(store).config,
                          connections: unref(connections2),
                          dataSources: unref(dataSources)
                        }, null, 8, ["config", "connections", "dataSources"])),
                        _cache[22] || (_cache[22] = createElementVNode("br", null, null, -1))
                      ]),
                      _: 1
                    })
                  ]),
                  "step-content-3": withCtx(() => [
                    createVNode(_component_VaScrollContainer, {
                      class: "padd",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        _cache[23] || (_cache[23] = createElementVNode("h2", { class: "title" }, "Widgets zur Datenquelle auswählen", -1)),
                        _cache[24] || (_cache[24] = createElementVNode("br", null, null, -1)),
                        createElementVNode("div", _hoisted_8, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(widgetOptions.value, (widget) => {
                            return openBlock(), createElementBlock("div", {
                              class: "widgets_grid-item",
                              key: widget.type,
                              active: selectedWidgets.value.includes(widget),
                              onClick: () => {
                                if (selectedWidgets.value.includes(widget)) {
                                  selectedWidgets.value.splice(selectedWidgets.value.indexOf(widget), 1);
                                } else {
                                  selectedWidgets.value.push(widget);
                                }
                              }
                            }, [
                              createVNode(_component_VaCheckbox, {
                                "model-value": selectedWidgets.value.includes(widget)
                              }, null, 8, ["model-value"]),
                              createElementVNode("img", {
                                class: "m-2",
                                src: widget.icon,
                                style: { "height": "30px" }
                              }, null, 8, _hoisted_10),
                              createTextVNode(" " + toDisplayString(widget.type), 1)
                            ], 8, _hoisted_9);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(FilterModal, {
          ref_key: "loadModalref",
          ref: loadModalref,
          modelValue: filter.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => filter.value = $event)
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
});
const EndPointfinderModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-186d6629"]]);
function mount(component, { props, children, element, app } = {}) {
  let el = element;
  let vNode = createVNode(component, props, children);
  if (app && app._context) vNode.appContext = app._context;
  if (el) render(vNode, el);
  else if (typeof document !== "undefined") render(vNode, el = document.createElement("div"));
  const destroy = () => {
    if (el) render(null, el);
    el = null;
    vNode = null;
  };
  return { vNode, destroy, el };
}
function activate({ services, log }) {
  const endpointFinderPlugin = {
    install(app) {
      const { vNode } = mount(EndPointfinderModal, { props: {}, app });
      app.provide("endpointfinder", async () => {
        await vNode.component?.exposed?.run(() => {
        });
      });
    }
  };
  services.getRequired("App").use(endpointFinderPlugin);
  const { createConnection } = useConnectionsStore();
  const conid = createConnection("rest", { url: "https://www.govdata.de/sparql" });
  const connectionRepository = services.getRequired("ConnectionRepository");
  const verbindung = connectionRepository.getConnection(conid);
  useSparQLEndPointManager().registerEndpoint(verbindung, "SparqlDataEurope");
  useSparQLEndPointManager().setActive("SparqlDataEurope");
  log.info("Endpointfinder bereit");
}
export {
  activate
};
