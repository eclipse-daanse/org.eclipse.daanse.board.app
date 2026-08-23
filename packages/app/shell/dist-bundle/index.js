(function(){var i="app.shell",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="@import\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap\";:root,:host{--va-icon-vertical-align: middle;--va-icon-user-select: none}.va-icon{vertical-align:var(--va-icon-vertical-align);-webkit-user-select:var(--va-icon-user-select);-moz-user-select:var(--va-icon-user-select);user-select:var(--va-icon-user-select)}.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]){cursor:pointer}.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]):focus-visible{outline:2px solid var(--va-focus)!important;border-radius:2px}.va-icon.va-icon{font-style:normal}.va-icon--spin{animation:va-icon--spin-animation 1.5s linear infinite}.va-icon--spin-reverse{animation:va-icon--spin-animation 1.5s linear infinite;animation-direction:reverse}@keyframes va-icon--spin-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.va-icon svg{fill:currentColor;height:100%}.va-message-list{color:var(--va-message-list-color);list-style:none}.va-message-list__message{display:flex;align-items:center;font-size:var(--va-message-list-font-size);line-height:var(--va-message-list-line-height)}.va-message-list__icon{margin-right:var(--va-message-list-icon-margin-right)}:root,:host{--va-message-list-icon-margin-right: .25rem;--va-message-list-color: var(--va-secondary);--va-message-list-font-size: 13px;--va-message-list-line-height: 1.2rem;--va-message-wrapper-margin-top: .5rem}.va-message-list-wrapper .va-message-list{margin-top:var(--va-message-wrapper-margin-top)}:root,:host{--va-separator-height: 1px;--va-separator-background-color: var(--va-divider);--va-separator-margin-top: 1rem;--va-separator-margin-bottom: 1rem}.va-separator{height:var(--va-separator-height);background-color:var(--va-separator-background-color);margin-top:var(--va-separator-margin-top);margin-bottom:var(--va-separator-margin-bottom)}.va-tabs+.va-separator{margin-top:0}.va-card :is(.va-card__title,.va-card__content,.va-card__actions,.va-card_actions__vertical)>.va-separator{margin-right:calc(-1 * var(--va-card-padding));margin-left:calc(-1 * var(--va-card-padding))}:root,:host{--va-spacer-flex-grow: 1 !important}.va-spacer{flex-grow:var(--va-spacer-flex-grow)}:root,:host{--va-toast-display: flex;--va-toast-width: 330px;--va-toast-padding: 14px 1.25rem 14px 1.25rem;--va-toast-border-radius: 8px;--va-toast-border-color: transparent;--va-toast-border: 1px solid var(--va-toast-border-color);--va-toast-background-color: var(--va-background-secondary);--va-toast-box-shadow: 0 2px 12px 0 var(--va-shadow);--va-toast-transition: opacity .3s, transform .3s, left .3s, right .3s, top .4s, bottom .3s;--va-toast-z-index: calc(var(--va-z-index-teleport-overlay) + 100);--va-toast-title-font-weight: bold;--va-toast-title-font-size: 1rem;--va-toast-title-color: #303133;--va-toast-title-margin: 0 0 6px;--va-toast-content-font-size: 1rem;--va-toast-content-line-height: 1.3125;--va-toast-content-padding-right: 20px;--va-toast-icon-height: 24px;--va-toast-icon-width: 24px;--va-toast-icon-font-size: 24px;--va-toast-close-icon-top: 18px;--va-toast-close-icon-right: 15px;--va-toast-close-icon-font-size: 1rem}.va-toast{--va-toast-x-shift: 0px;--va-toast-animation-x-shift: 0px;--va-toast-animation-y-shift: 100%;position:fixed;box-sizing:border-box;width:var(--va-toast-width);padding:var(--va-toast-padding);display:flex;align-items:center;border-radius:var(--va-toast-border-radius);border:var(--va-toast-border);background-color:var(--va-toast-background-color);box-shadow:var(--va-toast-box-shadow);transition:var(--va-toast-transition);overflow:hidden;z-index:var(--va-toast-z-index);font-family:var(--va-font-family);transform:translate(var(--va-toast-x-shift))}.va-toast--top-right,.va-toast--bottom-right{--va-toast-animation-x-shift: 100%}.va-toast--top-left,.va-toast--bottom-left{--va-toast-animation-x-shift: -100%}.va-toast--top-left,.va-toast--top-center,.va-toast--top-right{--va-toast-animation-y-shift: -100%}.va-toast--inline{position:static}.va-toast--multiline{min-height:70px}.va-toast__title{font-weight:var(--va-toast-title-font-weight);font-size:var(--va-toast-title-font-size);margin:var(--va-toast-title-margin);font-size:.625rem;letter-spacing:.6px;line-height:1.2;font-weight:700;text-transform:uppercase}.va-toast__content{font-size:var(--va-toast-content-font-size);line-height:var(--va-toast-content-line-height);padding-right:var(--va-toast-content-padding-right)}.va-toast__content p,.va-toast__content div{margin:0}.va-toast__icon{height:var(--va-toast-icon-height);width:var(--va-toast-icon-width);font-size:var(--va-toast-icon-font-size)}.va-toast__close-icon{position:absolute;top:50%;right:var(--va-toast-close-icon-right);cursor:pointer;transform:translateY(-50%);font-size:var(--va-toast-close-icon-font-siz);opacity:.7}.va-toast__close-icon:hover{opacity:1}.va-toast-fade-enter-from{transform:translate(calc(var(--va-toast-animation-x-shift) + var(--va-toast-x-shift)))}.va-toast-fade-leave-to{transform:translateY(var(--va-toast-animation-y-shift));opacity:0}:root,:host{--va-progress-circle-position: relative;--va-progress-circle-overflow: hidden;--va-progress-circle-width: 80%;--va-progress-circle-height: 80%;--va-progress-circle-overlay-transition: all ease 2s;--va-progress-circle-font-size: .75rem}.va-progress-circle{position:var(--va-progress-circle-position);overflow:var(--va-progress-circle-overflow);font-family:var(--va-font-family)}.va-progress-circle__wrapper{position:absolute;inset:0;margin:auto;transform:rotate(-90deg);width:var(--va-progress-circle-width);height:var(--va-progress-circle-height);display:flex;justify-content:center;align-items:center}.va-progress-circle--indeterminate .va-progress-circle__wrapper{animation:va-progress-circle__wrapper--indeterminate 2s linear infinite}.va-progress-circle__overlay{transition:var(--va-progress-circle-overlay-transition)}.va-progress-circle--indeterminate .va-progress-circle__overlay{animation:va-progress-circle__overlay--indeterminate 2s ease-in-out infinite}.va-progress-circle__info{font-size:var(--va-progress-circle-font-size);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}@keyframes va-progress-circle__wrapper--indeterminate{to{transform:rotate(270deg)}}@keyframes va-progress-circle__overlay--indeterminate{0%{stroke-dasharray:1,125;stroke-dashoffset:0}50%{stroke-dasharray:125,125;stroke-dashoffset:-65px}to{stroke-dasharray:125,125;stroke-dashoffset:-125px}}:root,:host{--va-button-display: inline-flex;--va-button-justify-content: center;--va-button-align-items: center;--va-button-background-image: none;--va-button-box-shadow: none;--va-button-border-width: 0;--va-button-border-color: unset;--va-button-border-style: none;--va-button-font-weight: 600;--va-button-transition: none;--va-button-padding: 0;--va-button-cursor: pointer;--va-button-sm-size: 1.5rem;--va-button-sm-content-py: .25rem;--va-button-sm-content-px: .375rem;--va-button-sm-only-icon-content-px: .25rem;--va-button-sm-font-size: .8125rem;--va-button-sm-letter-spacing: 0;--va-button-sm-line-height: 1rem;--va-button-sm-border-radius: .125rem;--va-button-sm-icon-side-padding: var(--va-button-sm-content-py);--va-button-sm-icons-spacing: .125rem;--va-button-size: 2.25rem;--va-button-content-py: .5rem;--va-button-content-px: .75rem;--va-button-only-icon-content-px: .5rem;--va-button-font-size: 1rem;--va-button-letter-spacing: 0;--va-button-line-height: 1.25rem;--va-button-border-radius: .25rem;--va-button-icon-side-padding: var(--va-button-content-py);--va-button-icons-spacing: .25rem;--va-button-lg-size: 3rem;--va-button-lg-content-py: .75rem;--va-button-lg-content-px: 1rem;--va-button-lg-only-icon-content-px: 1rem;--va-button-lg-font-size: 1.05rem;--va-button-lg-letter-spacing: 0;--va-button-lg-line-height: 1.5rem;--va-button-lg-border-radius: .5rem;--va-button-lg-icon-side-padding: var(--va-button-lg-content-py);--va-button-lg-icons-spacing: .25rem;--va-button-bordered-border: 1px;--va-button-bordered-style: solid}.va-button{position:relative;padding:var(--va-button-padding);display:var(--va-button-display);justify-content:var(--va-button-justify-content);align-items:var(--va-button-align-items);border-width:var(--va-button-border-width);border-color:var(--va-button-border-color);border-style:var(--va-button-border-style);background-image:var(--va-button-background-image);box-shadow:var(--va-button-box-shadow);font-family:var(--va-font-family);font-weight:var(--va-button-font-weight);text-decoration:none;text-transform:initial;transition:var(--va-button-transition);box-sizing:border-box;cursor:var(--va-button-cursor);z-index:0;vertical-align:top}.va-button:after,.va-button:before{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;left:0;top:0;z-index:-1}.va-button:before{background:var(--va-background-color);opacity:var(--va-background-color-opacity)}.va-button:after{background-color:var(--va-background-mask-color);opacity:var(--va-background-mask-opacity)}.va-button__content{height:100%;display:flex;align-items:center;z-index:1}.va-button__content--loading{opacity:0}.va-button--small{line-height:var(--va-button-sm-line-height);border-radius:var(--va-button-sm-border-radius);letter-spacing:var(--va-button-sm-letter-spacing);min-height:var(--va-button-sm-size);min-width:var(--va-button-sm-size)}.va-button--small .va-button__content{font-size:var(--va-button-sm-font-size);padding:var(--va-button-sm-content-py) var(--va-button-sm-content-px)}.va-button--small .va-button__left-icon{margin-right:var(--va-button-sm-icons-spacing)}.va-button--small .va-button__right-icon{margin-left:var(--va-button-sm-icons-spacing)}.va-button--small.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-sm-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-sm-content-py) - var(--va-button-bordered-border))}.va-button--small.va-button--left-icon .va-button__content{padding-left:var(--va-button-sm-icon-side-padding)}.va-button--small.va-button--right-icon .va-button__content{padding-right:var(--va-button-sm-icon-side-padding)}.va-button--normal{line-height:var(--va-button-line-height);border-radius:var(--va-button-border-radius);letter-spacing:var(--va-button-letter-spacing);min-height:var(--va-button-size);min-width:var(--va-button-size)}.va-button--normal .va-button__content{font-size:var(--va-button-font-size);padding:var(--va-button-content-py) var(--va-button-content-px);line-height:var(--va-button-line-height)}.va-button--normal .va-button__left-icon{margin-right:var(--va-gap-medium)}.va-button--normal .va-button__right-icon{margin-left:var(--va-gap-medium)}.va-button--normal.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-content-py) - var(--va-button-bordered-border))}.va-button--large{line-height:var(--va-button-lg-line-height);border-radius:var(--va-button-lg-border-radius);letter-spacing:var(--va-button-lg-letter-spacing);min-height:var(--va-button-lg-size);min-width:var(--va-button-lg-size)}.va-button--large .va-button__content{font-size:var(--va-button-lg-font-size);padding:var(--va-button-lg-content-py) var(--va-button-lg-content-px)}.va-button--large .va-button__left-icon{margin-right:var(--va-button-lg-icons-spacing)}.va-button--large .va-button__right-icon{margin-left:var(--va-button-lg-icons-spacing)}.va-button--large.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-lg-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-lg-content-py) - var(--va-button-bordered-border))}.va-button--large.va-button--left-icon .va-button__content{padding-left:var(--va-button-lg-icon-side-padding)}.va-button--large.va-button--right-icon .va-button__content{padding-right:var(--va-button-lg-icon-side-padding)}.va-button--small.va-button--icon-only .va-button__content,.va-button--normal.va-button--icon-only .va-button__content,.va-button--large.va-button--icon-only .va-button__content{padding-right:0;padding-left:0}.va-button--plain{min-width:auto;min-height:auto}.va-button--plain .va-button__content{padding:0;z-index:unset}.va-button--round{border-radius:999px}.va-button--bordered{border-width:var(--va-button-bordered-border);border-style:var(--va-button-bordered-style)}.va-button.va-button--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-button--icon-only .va-button__left-icon,.va-button--icon-only .va-button__right-icon{margin-left:0;margin-right:0}.va-button--icon-only .va-button__content{padding:0}.va-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\"}.va-button--loading{pointer-events:none}.va-button--block{display:flex;min-width:100%}.va-button__loader{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}:root,:host{--va-modal-title-margin-bottom: 1.5rem;--va-modal-position: fixed;--va-modal-top: 0;--va-modal-left: 0;--va-modal-display: flex;--va-modal-width: 100%;--va-modal-height: 100%;--va-modal-align-items: center;--va-modal-justify-content: center;--va-modal-overflow: hidden;--va-modal-outline: 0;--va-modal-z-index: unset;--va-modal-container-z-index: 100;--va-modal-basic-duration: .3s;--va-modal-opacity-transition: calc(var(--va-modal-basic-duration) * .5) cubic-bezier(1, .5, .8, 1);--va-modal-transform-transition: var(--va-modal-basic-duration) ease;--va-modal-overlay-background-blur-radius: 4px;--va-modal-padding: var(--va-modal-padding-top) var(--va-modal-padding-right) var(--va-modal-padding-bottom) var(--va-modal-padding-left);--va-modal-padding-top: 1.5rem;--va-modal-padding-right: 1.5rem;--va-modal-padding-bottom: 1.5rem;--va-modal-padding-left: 1.5rem;--va-modal-dialog-min-height: 3.125rem;--va-modal-dialog-height: fit-content;--va-modal-dialog-border-radius: .375rem;--va-modal-dialog-margin: 1rem;--va-modal-dialog-box-shadow: 0 4px 70px -18px var(--va-shadow);--va-modal-overlay-opacity-transition: opacity calc(2 * var(--va-modal-basic-duration) / 3) cubic-bezier(1, .5, .8, 1);--va-modal-overlay-color: rgb(0, 0, 0);--va-modal-overlay-opacity: .6;--va-modal-overlay-nested-opacity: .1;--va-modal-footer-justify-content: flex-end}body.va-modal-open{overflow:hidden}.va-modal-overlay-background--blurred>:not(div[class*=va-]){filter:blur(var(--va-modal-overlay-background-blur-radius));position:absolute;height:100%;width:100%}.va-modal{position:var(--va-modal-position);display:var(--va-modal-display);align-items:var(--va-modal-align-items);justify-content:var(--va-modal-justify-content);width:var(--va-modal-width);height:var(--va-modal-height);top:var(--va-modal-top);left:var(--va-modal-left);overflow:var(--va-modal-overflow);outline:var(--va-modal-outline);font-family:var(--va-font-family)}.va-modal__title{margin-bottom:1.5rem;font-size:.625rem;letter-spacing:.6px;line-height:1.2;font-weight:700;text-transform:uppercase}.va-modal-enter-from .va-modal__dialog,.va-modal-leave-to .va-modal__dialog{opacity:0;transform:translateY(-30%)}.va-modal-enter-active .va-modal__dialog,.va-modal-leave-active .va-modal__dialog{transition:opacity var(--va-modal-opacity-transition),transform var(--va-modal-transform-transition)}.va-modal__dialog{min-height:var(--va-modal-dialog-min-height);max-height:calc(100% - var(--va-modal-dialog-margin));height:var(--va-modal-dialog-height);border-radius:var(--va-modal-dialog-border-radius, var(--va-block-border-radius));margin:var(--va-modal-dialog-margin);box-shadow:var(--va-modal-dialog-box-shadow, var(--va-block-box-shadow));position:relative;overflow:auto;display:flex;flex-direction:column;width:100%;z-index:1}.va-modal__overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:0;will-change:opacity}.va-modal-enter-from .va-modal__overlay--lowest,.va-modal-leave-to .va-modal__overlay--lowest{opacity:0!important}.va-modal-leave-active .va-modal__overlay.va-modal__overlay--lowest,.va-modal-enter-active .va-modal__overlay.va-modal__overlay--lowest{transition:opacity var(--va-modal-opacity-transition)}.va-modal-leave-active .va-modal__overlay:not(.va-modal__overlay--lowest){display:none}.va-modal--fullscreen .va-modal__dialog{min-width:100vw!important;max-width:100vw;min-height:100vh!important;border-radius:0;margin:0}@media all and (max-width:576px){.va-modal--mobile-fullscreen .va-modal__dialog{margin:0!important;min-width:100vw!important;min-height:100vh!important;border-radius:0}}.va-modal--fixed-layout .va-modal__inner{overflow:hidden;padding:var(--va-modal-padding-top) 0 var(--va-modal-padding-bottom);max-height:calc(100vh - 2rem)}.va-modal--fixed-layout .va-modal__inner .va-modal__header,.va-modal--fixed-layout .va-modal__inner .va-modal__footer,.va-modal--fixed-layout .va-modal__inner .va-modal__title{padding:0 var(--va-modal-padding-right) 0 var(--va-modal-padding-left)}.va-modal--fixed-layout .va-modal__inner .va-modal__message{padding:0 var(--va-modal-padding-right) 0 var(--va-modal-padding-left);overflow:auto}.va-modal--fixed-layout .va-modal__dialog{overflow:hidden}.va-modal--no-padding .va-modal__inner{padding:0}.va-modal__message{margin-bottom:calc(var(--va-modal-padding-bottom) / 2)}.va-modal__inner{padding:var(--va-modal-padding);overflow:auto;display:flex;flex-flow:column}.va-modal__inner>div:last-of-type{margin-bottom:0}.va-modal__close{cursor:pointer;position:absolute;top:calc(var(--va-modal-padding-top) / 2);right:calc(var(--va-modal-padding-right) / 2);color:var(--va-secondary);z-index:1;justify-self:flex-end}.va-modal__close--fullscreen{position:fixed}.va-modal__default-cancel-button{margin-right:.75rem}.va-modal__footer{margin-top:auto;min-height:-moz-fit-content;min-height:fit-content;display:flex;flex-wrap:wrap;justify-content:var(--va-modal-footer-justify-content)}.va-modal__footer:last-of-type{margin-bottom:0}.va-accordion{font-family:var(--va-font-family)}.va-accordion>.va-collapse:not(:first-child,:last-child) .va-collapse__header{border-radius:0}.va-accordion>.va-collapse.va-collapse--expanded:last-child .va-collapse__header{border-radius:0}:root,:host{--va-affix-affixed-z-index: 10;--va-affix-affixed-position: fixed}.va-affix{font-family:var(--va-font-family)}.va-affix--affixed{position:var(--va-affix-affixed-position);z-index:var(--va-affix-affixed-z-index)}:root,:host{--va-alert-position: relative;--va-alert-display: flex;--va-alert-align-items: center;--va-alert-margin-y: .25rem;--va-alert-padding-x: .75rem;--va-alert-padding-y: .75rem;--va-alert-padding-y-dense: .25rem;--va-alert-border-width: 0;--va-alert-border-radius: 4px;--va-alert-box-shadow: var(--va-box-shadow);--va-alert-color: transparent;--va-alert-title-font-weight: 600;--va-alert-top-border-radius: 4px 4px 0 0;--va-alert-right-border-radius: 0 4px 4px 0;--va-alert-bottom-border-radius: 0 0 4px 4px;--va-alert-left-border-radius: 4px 0 0 4px;--va-badge-margin-right: .5rem;--va-badge-padding-x: .5rem;--va-badge-padding-y: .125rem;--va-badge-border-radius: .5rem;--va-badge-font-size: .625rem;--va-badge-letter-spacing: .0625rem;--va-alert-close-padding-x: .5rem;--va-alert-close-padding-y: .0625rem;--va-alert-close-font-size: 1rem;--va-alert-stripe-border-size: var(--va-stripe-border-size)}.va-alert{position:var(--va-alert-position);padding:var(--va-alert-padding-y) var(--va-alert-padding-x);margin:var(--va-alert-margin-y) auto;display:var(--va-alert-display);align-items:var(--va-alert-align-items);border:var(--va-alert-border-width, var(--va-control-border)) solid transparent;border-radius:var(--va-alert-border-radius, var(--va-block-border-radius));font-family:var(--va-font-family)}.va-alert__border{content:\"\";position:absolute}.va-alert__border--top{border-radius:var(--va-alert-top-border-radius);width:100%;height:var(--va-alert-stripe-border-size);top:0;left:0}.va-alert__border--right{border-radius:var(--va-alert-right-border-radius);height:100%;width:var(--va-alert-stripe-border-size);bottom:0;right:0}.va-alert__border--bottom{border-radius:var(--va-alert-bottom-border-radius);width:100%;height:var(--va-alert-stripe-border-size);bottom:0;left:0}.va-alert__border--left{border-radius:var(--va-alert-left-border-radius);height:100%;width:var(--va-alert-stripe-border-size);bottom:0;left:0}.va-alert__icon{display:flex;align-items:center;padding-right:var(--va-alert-padding-x)}.va-alert__title{display:flex;align-items:center}.va-alert__content{display:flex;flex-direction:column;justify-content:center;flex-grow:1;color:var(--va-alert-color)}.va-alert:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\"}.va-alert__close{padding-left:var(--va-alert-close-padding-x);font-size:var(--va-alert-close-font-size)}.va-alert__close--closeable{display:flex;align-items:center;cursor:pointer}.va-alert__close--closeable:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\"}@media(max-width:575.98px){.va-alert__content{flex-direction:column;align-items:flex-start}.va-alert__close{align-self:flex-start;display:flex;align-items:flex-start;padding:0 var(--va-alert-close-padding-x) 0 0;margin:0}}:root,:host{--va-app-bar-position: relative;--va-app-bar-height: auto;--va-app-bar-shadow: 0 0 12px 2px;--va-app-bar-z-index: calc(var(--va-z-index-teleport-overlay) - 100);--va-app-bar-transition: transform .5s ease}.va-app-bar{display:flex;align-items:center;position:var(--va-app-bar-position);transition:all .5s ease;top:0;left:0;width:100%;height:var(--va-app-bar-height);min-height:var(--va-app-bar-height);min-width:100%;font-family:var(--va-font-family);z-index:var(--va-app-bar-z-index)}.va-app-bar--bottom{top:100%;transform:translateY(-100%)}:root{--va-aspect-ratio-position: relative;--va-aspect-ratio-overflow: visible}.va-aspect-ratio{position:var(--va-aspect-ratio-position);overflow:var(--va-aspect-ratio-overflow);display:flex;max-width:var(--va-max-width-computed)}:root,:host{--va-avatar-display: inline-flex;--va-avatar-align-items: center;--va-avatar-justify-content: center;--va-avatar-text-align: center;--va-avatar-vertical-align: middle;--va-avatar-position: relative;--va-avatar-line-height: normal;--va-avatar-border-radius: 50%;--va-avatar-object-fit: cover}.va-avatar{align-items:var(--va-avatar-align-items);display:var(--va-avatar-display);justify-content:var(--va-avatar-justify-content);line-height:var(--va-avatar-line-height);position:var(--va-avatar-position);text-align:var(--va-avatar-text-align);vertical-align:var(--va-avatar-vertical-align);border-radius:var(--va-avatar-border-radius);font-family:var(--va-font-family);background-color:var(--va-background-color-computed);color:var(--va-text-color-computed);width:var(--va-size-computed);min-width:var(--va-size-computed);height:var(--va-size-computed)}.va-avatar--square{--va-avatar-border-radius: 0}.va-avatar img,.va-avatar svg{object-fit:var(--va-avatar-object-fit);border-radius:inherit;display:inline-flex;height:inherit;width:inherit;margin:auto}:root{--va-avatar-group-gap: -1rem}.va-avatar-group{display:flex;flex-wrap:nowrap}.va-avatar-group .va-avatar+.va-avatar{margin-left:var(--va-avatar-group-gap)}.va-avatar-group--vertical{flex-direction:column}.va-avatar-group--vertical .va-avatar+.va-avatar{margin-left:0;margin-top:var(--va-avatar-group-gap)}:root,:host{--va-backtop-position: fixed;--va-backtop-top: auto;--va-backtop-left: auto;--va-backtop-right: auto;--va-backtop-bottom: auto;--va-backtop-cursor: pointer;--va-backtop-z-index: 3}.va-backtop{position:var(--va-backtop-position);top:var(--va-backtop-top);left:var(--va-backtop-left);right:var(--va-backtop-right);bottom:var(--va-backtop-bottom);cursor:var(--va-backtop-cursor);z-index:var(--va-backtop-z-index);font-family:var(--va-font-family)}:root,:host{--va-badge-py: 0;--va-badge-font-size: .563rem;--va-badge-border: .125rem;--va-badge-size: calc(var(--va-badge-font-size) * var(--va-badge-line-height) + var(--va-badge-border) * 2);--va-badge-line-height: 1.4;--va-badge-margin: 0;--va-badge-width: fit-content;--va-badge-dot-size: .5rem;--va-badge-text-wrapper-transition: .2s cubic-bezier(.4, 0, .6, 1);--va-badge-text-wrapper-display: inline-flex;--va-badge-text-wrapper-border: solid .125rem;--va-badge-text-wrapper-border-radius: .125rem;--va-badge-text-wrapper-font-weight: 700;--va-badge-text-wrapper-line-height: 1.4;--va-badge-text-wrapper-letter-spacing: .0375rem;--va-badge-text-wrapper-justify-content: center;--va-badge-text-wrapper-white-space: nowrap;--va-badge-text-wrapper-width: min-content;--va-badge-text-wrapper-height: auto;--va-badge-text-wrapper-min-width: initial;--va-badge-text-wrapper-min-height: initial;--va-badge-text-wrapper-margin: 0;--va-badge-text-transform: uppercase;--va-badge-text-py: 0;--va-badge-text-px: .25rem}.va-badge{display:inline-flex;position:relative;font-family:var(--va-font-family);width:var(--va-badge-width)}.va-badge__text-wrapper{transition:var(--va-badge-text-wrapper-transition, var(--va-transition));display:var(--va-badge-text-wrapper-display);border:var(--va-badge-text-wrapper-border, var(--va-control-border));border-radius:var(--va-badge-text-wrapper-border-radius);font-weight:var(--va-badge-text-wrapper-font-weight);line-height:var(--va-badge-text-wrapper-line-height);letter-spacing:var(--va-badge-text-wrapper-letter-spacing, var(--va-letter-spacing));justify-content:var(--va-badge-text-wrapper-justify-content);align-items:center;white-space:var(--va-badge-text-wrapper-white-space);width:var(--va-badge-text-wrapper-width);height:var(--va-badge-text-wrapper-height);min-width:var(--va-badge-text-wrapper-min-width);min-height:var(--va-badge-text-wrapper-min-height);margin:var(--va-badge-text-wrapper-margin)}.va-badge--visible-empty .va-badge__text-wrapper{min-width:var(--va-badge-size);min-height:var(--va-badge-size)}.va-badge--dot .va-badge__text-wrapper{min-width:var(--va-badge-dot-size);min-height:var(--va-badge-dot-size);border-width:0;border-radius:100%;padding:0}.va-badge--empty .va-badge__text-wrapper{width:0;height:0;min-width:0;min-height:0;border-width:0}.va-badge--multi-line .va-badge__text-wrapper{white-space:normal}.va-badge--floating .va-badge__text-wrapper{position:absolute;z-index:2}.va-badge__text{margin:var(--va-badge-margin);text-transform:var(--va-badge-text-transform);overflow:hidden;min-width:calc(var(--va-badge-font-size) * var(--va-badge-line-height));padding:var(--va-badge-text-py) var(--va-badge-text-px);text-align:center;display:inline-flex;justify-content:center;text-overflow:clip;white-space:nowrap;font-size:var(--va-badge-font-size)}.va-badge--multi-line .va-badge__text{overflow:auto;max-height:initial;text-align:initial;text-overflow:initial;white-space:normal}.va-badge--dot .va-badge__text{display:none}.va-badge--floating .va-badge__text{align-items:center;padding:var(--va-badge-py) .15rem}:root,:host{--va-breadcrumbs-display: flex;--va-breadcrumbs-width: 100%;--va-breadcrumbs-justify-content: center;--va-breadcrumbs-item-display: inline-flex;--va-breadcrumbs-separator-padding: var(--va-breadcrumbs-separator-py) var(--va-breadcrumbs-separator-px);--va-breadcrumbs-separator-py: 0;--va-breadcrumbs-separator-px: .5rem;--va-breadcrumbs-separator-display: inline-flex}.va-breadcrumbs{display:var(--va-breadcrumbs-display);width:var(--va-breadcrumbs-width);justify-content:var(--va-breadcrumbs-justify-content);font-family:var(--va-font-family)}.va-breadcrumbs__item{display:var(--va-breadcrumbs-item-display)}.va-breadcrumbs__separator{padding:var(--va-breadcrumbs-separator-padding);display:var(--va-breadcrumbs-separator-display)}:root,:host{--va-breadcrumb-item-display: inline-flex;--va-breadcrumb-item-color: inherit;--va-breadcrumb-item-hover-opacity: .7;--va-breadcrumb-item-focus-text-decoration: underline}.va-breadcrumb-item{display:var(--va-breadcrumb-item-display);color:var(--va-breadcrumb-item-color)}.va-breadcrumb-item--link{color:inherit;cursor:pointer}.va-breadcrumb-item--link:hover{opacity:var(--va-breadcrumb-item-hover-opacity)}.va-breadcrumb-item--link:focus{-webkit-text-decoration:var(--va-breadcrumb-item-focus-text-decoration);text-decoration:var(--va-breadcrumb-item-focus-text-decoration)}:root,:host{--va-button-group-display: flex;--va-button-group-justify-content: stretch;--va-button-group-border-radius: 999px;--va-button-group-gap: .25rem;--va-button-group-button-margin: 0;--va-button-group-button-width: auto;--va-button-group-button-padding: .25rem}.va-button-group{display:var(--va-button-group-display);justify-content:var(--va-button-group-justify-content);border-radius:var(--va-button-group-border-radius);font-family:var(--va-font-family);width:-moz-max-content;width:max-content;background:var(--va-background-color)}.va-button-group--grow{width:100%;--va-button-group-button-width: 100%}.va-button-group--square{border-radius:var(--va-button-border-radius)}.va-button-group--small.va-button-group--square{border-radius:var(--va-button-sm-border-radius)}.va-button-group--large.va-button-group--square{border-radius:var(--va-button-lg-border-radius)}.va-button-group .va-button{margin:var(--va-button-group-button-margin);width:var(--va-button-group-button-width);box-shadow:none;outline:none}.va-button-group .va-button:focus-visible{outline:none!important}.va-button-group .va-button:focus-visible:before{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\";outline-offset:-2px}.va-button-group>.va-button:last-child{padding-right:var(--va-button-group-button-padding)}.va-button-group>.va-button:first-child{padding-left:var(--va-button-group-button-padding)}.va-button-group>.va-button:not(:last-child){padding-right:var(--va-button-group-gap);border-top-right-radius:0;border-bottom-right-radius:0;border-right:0}.va-button-group>.va-button:not(:last-child) .va-button__content{margin-right:0}.va-button-group>.va-button+.va-button{padding-left:var(--va-button-group-gap);border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}.va-button-group>.va-button+.va-button .va-button__content{margin-left:0}:root,:host{--va-dropdown-line-height: 1;--va-dropdown-content-wrapper-z-index: var(--va-z-index-teleport-overlay, 9);--va-dropdown-display: inline-flex}.va-dropdown.va-headless-wrapper{line-height:var(--va-dropdown-line-height);display:var(--va-dropdown-display);max-width:100%;vertical-align:middle}.va-dropdown--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-dropdown__content-wrapper{z-index:var(--va-dropdown-content-wrapper-z-index);font-family:var(--va-font-family);top:0;left:0;position:absolute}:root,:host{--va-dropdown-content-padding: .5rem;--va-dropdown-content-box-shadow: var(--va-box-shadow);--va-dropdown-content-border-radius: 4px}.va-dropdown__content{overflow-y:auto;padding:var(--va-dropdown-content-padding);box-shadow:var(--va-dropdown-content-box-shadow);border-radius:var(--va-dropdown-content-border-radius);font-family:var(--va-font-family)}:root,:host{--va-button-dropdown-button-margin: 0}.va-button-dropdown .va-button{margin:var(--va-button-dropdown-button-margin)}.va-button-toggle .va-button{height:auto}.va-button-toggle .va-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\";outline-offset:-2px}:root,:host{--va-card-display: block;--va-card-position: relative;--va-card-overflow: visible;--va-card-box-shadow: var(--va-box-shadow);--va-card-border-radius: .375rem;--va-card-color: #34495e;--va-card-background-color: var(--va-background-secondary);--va-card-padding: 1.25rem;--va-card-outlined-border: 3px solid var(--va-background-border);--va-card-outlined-box-shadow: none;--va-card-stripe-border-size: var(--va-stripe-border-size);--va-card-dark-color: #ffffff;--va-card-dark-background-color: #34495e;--va-card-actions-btn-margin: 4px}.va-card{display:var(--va-card-display);position:var(--va-card-position);overflow:var(--va-card-overflow);box-shadow:var(--va-card-box-shadow, var(--va-block-box-shadow));border-radius:var(--va-card-border-radius, var(--va-block-border-radius));color:var(--va-card-color);background-color:var(--va-card-background-color);font-family:var(--va-font-family)}.va-card>div:first-child{border-top-right-radius:var(--va-card-border-radius);border-top-left-radius:var(--va-card-border-radius)}.va-card>div:last-child{border-bottom-right-radius:var(--va-card-border-radius);border-bottom-left-radius:var(--va-card-border-radius)}.va-card--square{border-radius:0}.va-card--outlined{box-shadow:var(--va-card-outlined-box-shadow);border:var(--va-card-outlined-border, var(--va-block-border))}.va-card--no-border{border:none}.va-card--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-card--link{cursor:pointer}.va-card--stripe:after{content:\"\";position:absolute;width:100%;height:var(--va-card-stripe-border-size);top:0;left:0;background:var(--va-stripe-color-computed);border-top-right-radius:var(--va-card-border-radius);border-top-left-radius:var(--va-card-border-radius)}.va-card__content .va-card-block{flex:1}.va-card__title[data-v-5cd66b25]{display:flex;align-items:center;font-size:.625rem;letter-spacing:.6px;line-height:1.2;font-weight:700;text-transform:uppercase}.va-card__title[data-v-5cd66b25],.va-card__content[data-v-5cd66b25],.va-card__actions[data-v-5cd66b25],.va-card__actions--vertical[data-v-5cd66b25]{padding:var(--va-card-padding)}.va-card__title+.va-card__title[data-v-5cd66b25],.va-card__title+.va-card__content[data-v-5cd66b25],.va-card__title+.va-card__actions[data-v-5cd66b25],.va-card__title+.va-card_actions__vertical[data-v-5cd66b25],.va-card__content+.va-card__title[data-v-5cd66b25],.va-card__content+.va-card__content[data-v-5cd66b25],.va-card__content+.va-card__actions[data-v-5cd66b25],.va-card__content+.va-card_actions__vertical[data-v-5cd66b25],.va-card__actions+.va-card__title[data-v-5cd66b25],.va-card__actions+.va-card__content[data-v-5cd66b25],.va-card__actions+.va-card__actions[data-v-5cd66b25],.va-card__actions+.va-card_actions__vertical[data-v-5cd66b25],.va-card__actions--vertical+.va-card__title[data-v-5cd66b25],.va-card__actions--vertical+.va-card__content[data-v-5cd66b25],.va-card__actions--vertical+.va-card__actions[data-v-5cd66b25],.va-card__actions--vertical+.va-card_actions__vertical[data-v-5cd66b25]{padding-top:0}.va-card__title,.va-card__content,.va-card__actions,.va-card__actions--vertical{padding:var(--va-card-padding)}.va-card__title+.va-card__title,.va-card__title+.va-card__content,.va-card__title+.va-card__actions,.va-card__title+.va-card_actions__vertical,.va-card__content+.va-card__title,.va-card__content+.va-card__content,.va-card__content+.va-card__actions,.va-card__content+.va-card_actions__vertical,.va-card__actions+.va-card__title,.va-card__actions+.va-card__content,.va-card__actions+.va-card__actions,.va-card__actions+.va-card_actions__vertical,.va-card__actions--vertical+.va-card__title,.va-card__actions--vertical+.va-card__content,.va-card__actions--vertical+.va-card__actions,.va-card__actions--vertical+.va-card_actions__vertical{padding-top:0}.va-card__actions button,.va-card__actions .va-button{margin:0 var(--va-card-actions-btn-margin)}.va-card__actions button:first-child,.va-card__actions .va-button:first-child{margin-left:0}.va-card__actions button:last-child,.va-card__actions .va-button:last-child{margin-right:0}.va-card__actions--vertical button,.va-card__actions--vertical .va-button{margin:var(--va-card-actions-btn-margin) 0}.va-card__actions--vertical button:first-child,.va-card__actions--vertical .va-button:first-child{margin-top:0}.va-card__actions--vertical button:last-child,.va-card__actions--vertical .va-button:last-child{margin-bottom:0}.va-card-block{display:flex;flex-direction:column}.va-card-block>div:first-child{border-top-right-radius:var(--va-card-border-radius);border-top-left-radius:var(--va-card-border-radius)}.va-card-block>div:last-child{border-bottom-right-radius:var(--va-card-border-radius);border-bottom-left-radius:var(--va-card-border-radius)}.va-card-block>div{flex:auto}.va-card-block--horizontal{flex-direction:row}.va-card-block--horizontal>div:first-child{border-top-left-radius:var(--va-card-border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--va-card-border-radius)}.va-card-block--horizontal>div:last-child{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--va-card-border-radius);border-bottom-right-radius:var(--va-card-border-radius)}.va-card-block--horizontal>.va-divider{flex:0}:root,:host{--va-image-content-position: absolute;--va-image-content-img-object-position: 50% 50%}.va-image__content{position:var(--va-image-content-position);inset:0;width:100%}.va-image__content img{width:100%;height:100%;object-fit:var(--va-fit-computed);object-position:var(--va-image-content-img-object-position)}.va-image__overlay{position:absolute;inset:0}.va-image__placeholder,.va-image__loader,.va-image__error,.va-image__overlay{width:100%;display:flex;justify-content:center;align-items:center}:root,:host{--va-carousel-background: var(--va-background-secondary);--va-carousel-border-radius: var(--va-block-border-radius);--va-carousel-box-shadow: var(--va-box-shadow);--va-carousel-slides-transition: all .3s ease-in-out;--va-carousel-indicators-gap: .25rem;--va-carousel-min-height: 80px;--va-carousel-padding: 16px}@keyframes va-carousel-fade-appear{0%{opacity:0}to{opacity:1}}.va-carousel{display:flex;width:100%;height:100%;max-height:100%;min-height:var(--va-carousel-min-height);background:var(--va-carousel-background);box-shadow:var(--va-carousel-box-shadow);border-radius:var(--va-carousel-border-radius);position:relative;overflow:hidden}.va-carousel__content{flex:1;width:100%;white-space:nowrap}.va-carousel__slides{width:100%;height:100%;transition:var(--va-carousel-slides-transition)}.va-carousel__slide{display:inline-flex;justify-content:center;align-items:center;width:100%;height:100%;overflow:hidden}.va-carousel__indicators{width:100%;position:absolute;bottom:var(--va-carousel-padding);display:flex;justify-content:center;z-index:2;overflow-x:auto;left:50%;transform:translate(-50%);scrollbar-color:var(--va-background-element) transparent;scrollbar-width:thin;transition:scrollbar-color .3s ease-in-out}.va-carousel__indicators::-webkit-scrollbar{width:4px;height:4px}.va-carousel__indicators::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-carousel__indicators::-webkit-scrollbar-thumb{background:var(--va-background-element);opacity:.3;border-radius:2px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.va-carousel__indicators>*{margin:0 var(--va-carousel-indicators-gap)}.va-carousel__arrow{z-index:1;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content}.va-carousel__arrow--right{right:var(--va-carousel-padding);position:absolute;top:50%;transform:translateY(-50%)}.va-carousel__arrow--left{left:var(--va-carousel-padding);position:absolute;top:50%;transform:translateY(-50%)}.va-carousel--vertical .va-carousel__slide{display:flex}.va-carousel--vertical .va-carousel__arrow{z-index:1}.va-carousel--vertical .va-carousel__arrow--right{bottom:var(--va-carousel-padding);top:auto;left:50%;transform:translate(-50%)}.va-carousel--vertical .va-carousel__arrow--left{top:var(--va-carousel-padding);left:50%;transform:translate(-50%)}.va-carousel--vertical .va-carousel__indicators{left:var(--va-carousel-padding);flex-direction:column;width:auto;height:100%;top:50%;transform:translateY(-50%);overflow-x:hidden;overflow-y:auto}.va-carousel--vertical .va-carousel__indicators>*{margin:var(--va-carousel-indicators-gap) 0}.va-carousel .va-image{height:100%;width:100%}.va-carousel .va-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\";outline-offset:-2px}:root,:host{--va-checkbox-display: inline-block;--va-checkbox-input-padding: 0;--va-checkbox-input-cursor: pointer;--va-checkbox-disabled-cursor: default;--va-checkbox-readonly-cursor: initial;--va-checkbox-label-display: inline-block;--va-checkbox-label-cursor: pointer;--va-checkbox-font-size: 15px;--va-checkbox-line-height: 20px;--va-checkbox-background: transparent;--va-checkbox-square-width: 1.25rem;--va-checkbox-square-min-width: 1.25rem;--va-checkbox-square-height: 1.25rem;--va-checkbox-square-border: solid var(--va-form-element-border-width) var(--va-background-border);--va-checkbox-square-border-radius: calc(var(--va-form-element-border-radius) / 2);--va-checkbox-horizontal-gap: .5em;--va-checkbox-vertical-gap: .3em;--va-checkbox-vertical-padding: var(--va-checkbox-vertical-gap) 0 var(--va-checkbox-vertical-gap) var(--va-checkbox-horizontal-gap);--va-checkbox-horizontal-padding: 0 var(--va-checkbox-horizontal-gap);--va-checkbox-right-padding: 0 var(--va-checkbox-horizontal-gap) 0 0;--va-checkbox-left-padding: 0 0 0 var(--va-checkbox-horizontal-gap)}.va-checkbox{display:var(--va-display-val);max-width:-moz-fit-content;max-width:fit-content;font-family:var(--va-font-family)}.va-checkbox__input-container{align-items:center;display:flex;padding:var(--va-checkbox-input-padding);cursor:var(--va-checkbox-input-cursor);font-size:var(--va-checkbox-font-size);line-height:var(--va-checkbox-line-height)}.va-checkbox--disabled .va-checkbox__input-container{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:var(--va-checkbox-disabled-cursor)}.va-checkbox--readonly .va-checkbox__input-container{cursor:var(--va-checkbox-readonly-cursor)}.va-checkbox--left-label .va-checkbox__input-container{flex-direction:row-reverse}.va-checkbox .va-checkbox__square{display:flex;justify-content:center;align-items:center;width:var(--va-checkbox-square-width);min-width:var(--va-checkbox-square-min-width);height:var(--va-checkbox-square-height);position:relative;background:var(--va-checkbox-background, --va-checkbox-square-background-color);border:var(--va-checkbox-square-border, var(--va-control-border));border-radius:var(--va-checkbox-square-border-radius)}.va-checkbox--on-keyboard-focus.va-checkbox .va-checkbox__square{transition:all,.6s,ease-in;outline:2px solid var(--va-focus)}.va-checkbox__input{position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;white-space:nowrap;-webkit-clip-path:inset(100%);clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}.va-checkbox__label{display:var(--va-checkbox-label-display);position:relative;cursor:var(--va-checkbox-label-cursor)}.va-checkbox__icon{pointer-events:none;position:absolute}.va-checkbox--selected .va-checkbox__icon{color:var(--va-checkbox-selected-icon-color)}.va-checkbox--indeterminate .va-checkbox__icon{color:var(--va-checkbox-indeterminate-icon-color)}:root,:host{--va-chip-display: inline-flex;--va-chip-border: .125rem solid transparent;--va-chip-position: relative;--va-chip-border-radius: 2rem;--va-chip-width: auto;--va-chip-height: auto;--va-chip-min-width: initial;--va-chip-min-height: initial;--va-chip-padding: 0 .375rem;--va-chip-color: #ffffff;--va-chip-cursor: default;--va-chip-font-size: 1rem;--va-chip-vertical-align: middle;--va-chip-inner-display: inline-flex;--va-chip-inner-align-items: center;--va-chip-inner-width: 100%;--va-chip-hover-opacity: .85;--va-chip-content-display: flex;--va-chip-content-width: var(--va-chip-inner-width, 100%);--va-chip-content-align-items: center;--va-chip-content-justify-content: center;--va-chip-content-padding: 0 var(--va-gap-medium, .5rem);--va-chip-content-line-height: 1.6;--va-chip-square-border-radius: .2rem;--va-chip-sm-height: 1.5rem;--va-chip-sm-font-size: .875rem;--va-chip-sm-content-padding: 0 var(--va-gap-small, .5rem);--va-chip-lg-height: 2.5rem;--va-chip-lg-font-size: 1.25rem;--va-chip-lg-content-padding: 0 var(--va-gap-large, .5rem)}.va-chip{display:var(--va-chip-display);border:var(--va-chip-border, var(--va-control-border));position:var(--va-chip-position);border-radius:var(--va-chip-border-radius);width:var(--va-chip-width);height:var(--va-chip-height);min-width:var(--va-chip-min-width);min-height:var(--va-chip-min-height);padding:var(--va-chip-padding);color:var(--va-chip-color);cursor:var(--va-chip-cursor);font-size:var(--va-chip-font-size);font-family:var(--va-font-family);vertical-align:var(--va-chip-vertical-align)}.va-chip__inner{display:var(--va-chip-inner-display);align-items:var(--va-chip-inner-align-items);width:var(--va-chip-inner-width);vertical-align:inherit}.va-chip:hover:not(.va-chip--readonly){opacity:var(--va-chip-hover-opacity)}.va-chip__content{display:var(--va-chip-content-display);justify-content:var(--va-chip-content-justify-content);align-items:var(--va-chip-content-align-items);padding:var(--va-chip-content-padding);line-height:var(--va-chip-content-line-height);width:var(--va-chip-content-width)}.va-chip__close-icon{cursor:pointer}.va-chip--disabled .va-chip__close-icon{cursor:default!important}.va-chip--square{border-radius:var(--va-chip-square-border-radius, var(--va-square-border-radius))}.va-chip--small{height:var(--va-chip-sm-height);font-size:var(--va-chip-sm-font-size)}.va-chip--small .va-chip__content{padding:var(--va-chip-sm-content-padding)}.va-chip--large{height:var(--va-chip-lg-height);font-size:var(--va-chip-lg-font-size)}.va-chip--large .va-chip__content{padding:var(--va-chip-lg-content-padding)}.va-chip.va-chip--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}:root,:host{--va-collapse-padding: .75rem;--va-collapse-gap: .5rem;--va-collapse-transition: all .3s linear;--va-collapse-popout-margin: .5rem -.5rem;--va-collapse-inset-margin: .5rem .5rem;--va-collapse-body-transition: opacity .1s linear;--va-collapse-body-wrapper-transition: height .3s linear, background .3s linear;--va-collapse-body-width: 100%;--va-collapse-header-content-cursor: pointer;--va-collapse-header-content-background-color: #f5f8f9;--va-collapse-header-content-box-shadow: var(--va-box-shadow);--va-collapse-header-content-border-radius: .375rem;--va-collapse-header-content-padding-top: .75rem;--va-collapse-header-content-padding-bottom: .75rem;--va-collapse-header-content-padding-left: 1rem;--va-collapse-header-content-text-font-weight: 600;--va-collapse-header-content-icon-min-width: 1.5rem;--va-collapse-header-content-icon-margin-left: .5rem;--va-collapse-header-content-icon-margin-right: .5rem;--va-collapse-header-content-icon-color: var(--va-background-element);--va-collapse-expand-icon-transition: transform .3s linear;--va-collapse-solid-box-shadow: var(--va-box-shadow);--va-collapse-solid-border-radius: .375rem;--va-collapse-solid-header-content-background-color: #f5f8f9;--va-collapse-solid-header-content-box-shadow: none;--va-collapse-solid-header-content-border-radius: .375rem;--va-collapse-solid-header-content-transition: background-color ease-in .3s;--va-collapse-solid-body-border-radius: 0 0 .375rem .375rem;--va-collapse-solid-body-margin-top: 0}.va-collapse{transition:var(--va-collapse-transition, var(--va-swing-transition));font-family:var(--va-font-family);display:flex;flex-direction:column}.va-collapse__body-wrapper{transition:var(--va-collapse-body-wrapper-transition);overflow:auto}.va-collapse__body-wrapper--bordered{border-bottom:1px solid var(--va-background-border);box-sizing:content-box}.va-collapse--colored-header:not(.va-collapse--expanded) .va-collapse__body-wrapper--bordered{border-bottom:none}.va-collapse--colored-body.va-collapse--expanded .va-collapse__body-wrapper--bordered{border-bottom:none}.va-collapse__body{top:0;left:0;width:var(--va-collapse-body-width);transition:var(--va-collapse-body-transition);opacity:0}.va-collapse__content{padding:var(--va-collapse-padding);padding-top:calc(var(--va-collapse-padding) / 1.5);box-sizing:border-box}.va-collapse__content:empty{padding:0}.va-collapse__header{display:flex;justify-content:space-between;align-items:center;gap:var(--va-collapse-gap);cursor:var(--va-collapse-header-content-cursor);padding:var(--va-collapse-padding);transition:all .2s ease-in-out}.va-collapse__header__text{width:100%;font-weight:var(--va-collapse-header-content-text-font-weight)}.va-collapse__header:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:var(--va-collapse-header-content-border-radius)}.va-collapse--expanded .va-collapse__body{opacity:1}.va-collapse__expand-icon{transition:var(--va-collapse-expand-icon-transition)}.va-collapse__expand-icon--expanded{transform:rotate(180deg)}.va-collapse--popout{margin:var(--va-collapse-popout-margin)}.va-collapse--inset{margin:var(--va-collapse-inset-margin)}.va-collapse--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-collapse--height-changing .va-collapse__body-wrapper{overflow:hidden}.va-color-indicator{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;border-radius:var(--va-border-radius-computed);text-align:center;background-color:var(--va-background-element);border:.125rem solid var(--va-background-border);box-sizing:border-box;overflow:hidden}.va-color-indicator__core{border-radius:var(--va-border-radius-computed)}.va-color-indicator--selected{background-color:var(--va-primary);border-color:var(--va-primary)}.va-color-indicator--on-keyboard-focus{outline:2px solid var(--va-focus)!important;border-radius:var(--va-border-radius-computed)}.va-input-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.625rem;letter-spacing:.6px;line-height:1.2;font-weight:700;text-transform:uppercase;min-height:1rem;display:inline-block}.va-input-label__required-mark{transform:translateY(-2px);color:var(--va-danger);font-size:1.2em;font-weight:var(--va-input-container-label-font-weight);vertical-align:middle}:root,:host{--va-input-wrapper-width: var(--va-form-element-default-width);--va-input-wrapper-color: var(--va-primary);--va-input-wrapper-background: var(--va-background-element, #f5f9fb);--va-input-wrapper-background-opacity: 1;--va-input-wrapper-border-width: var(--va-form-element-border-width);--va-input-wrapper-border-color: var(--va-background-border);--va-input-wrapper-border-radius: var(--va-form-element-border-radius);--va-input-wrapper-min-width: var(--va-form-element-min-width);--va-input-wrapper-display: inline-block;--va-input-wrapper-cursor: text;--va-input-wrapper-min-height: 36px;--va-input-wrapper-validation-background-opacity: .1;--va-input-wrapper-counter-line-height: 1.5;--va-input-wrapper-counter-font-size: .8rem;--va-input-wrapper-counter-color: var(--va-secondary);--va-input-wrapper-horizontal-padding: .5rem;--va-input-wrapper-items-gap: .5rem;--va-input-wrapper-success-background: var(--va-input-success-color);--va-input-wrapper-error-background: var(--va-input-error-color)}.va-input-wrapper{--va-input-wrapper-background: var(--va-background-computed);--va-input-wrapper-color: var(--va-color-computed);--va-input-wrapper-text-color: var(--va-text-color-computed);cursor:var(--va-input-wrapper-cursor);font-family:var(--va-font-family);display:inline-block;flex-direction:column;vertical-align:middle;min-width:auto;max-width:100%;flex-grow:0;flex-shrink:1}.va-input-wrapper__fieldset{border:none}.va-input-wrapper__size-keeper{width:var(--va-input-wrapper-width);min-width:100%;max-width:100%;display:flex;flex-direction:column;height:100%}.va-input-wrapper__container{display:flex;align-items:center;gap:var(--va-input-content-items-gap);flex:1}.va-input-wrapper__field{position:relative;display:flex;align-items:center;flex:1;min-height:var(--va-input-wrapper-min-height);border-color:var(--va-input-wrapper-border-color);border-style:solid;border-width:var(--va-input-wrapper-border-width);border-radius:var(--va-input-wrapper-border-radius);padding:0 var(--va-input-wrapper-horizontal-padding);gap:var(--va-input-wrapper-items-gap);overflow:hidden;color:var(--va-text-color-computed);align-self:stretch;z-index:0}.va-input-wrapper__field:after{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";background:var(--va-input-wrapper-background);opacity:var(--va-input-wrapper-background-opacity);z-index:-1;transition:all .3s ease-in-out}.va-input-wrapper__field input,.va-input-wrapper__field textarea{color:inherit}.va-input-wrapper>.va-message-list{margin-top:2px}.va-input-wrapper__prepend-inner,.va-input-wrapper__append-inner{display:flex;justify-content:center;align-content:center;align-items:center}.va-input-wrapper__text{width:100%;position:relative;min-height:var(--va-input-line-height);display:flex;align-items:center;align-self:stretch;overflow:hidden;caret-color:var(--va-input-wrapper-text-color);color:var(--va-input-wrapper-text-color)}.va-input-wrapper__text input::-moz-placeholder,.va-input-wrapper__text textarea::-moz-placeholder{color:inherit;opacity:.5}.va-input-wrapper__text input::placeholder,.va-input-wrapper__text textarea::placeholder{color:inherit;opacity:.5}.va-input-wrapper__text input{scrollbar-color:var(--va-input-scroll-color) transparent;scrollbar-width:thin;transition:scrollbar-color .3s ease-in-out;width:100%;min-height:var(--va-input-line-height);background-color:transparent;border-style:none;outline:none;line-height:var(--va-input-line-height);font-size:var(--va-input-font-size);font-family:inherit;font-weight:var(--va-input-font-weight);font-style:var(--va-input-font-style);font-stretch:var(--va-input-font-stretch);letter-spacing:var(--va-input-letter-spacing);cursor:inherit;align-self:stretch}.va-input-wrapper__text input::-webkit-scrollbar{width:4px;height:4px}.va-input-wrapper__text input::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-input-wrapper__text input::-webkit-scrollbar-thumb{background:var(--va-input-scroll-color);opacity:.3;border-radius:2px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.va-input-wrapper__icons{display:flex;align-items:center;justify-content:center}.va-input-wrapper__icons__reset:focus{outline:2px solid var(--va-focus)!important;border-radius:2px}.va-input-wrapper__counter-wrapper{display:flex;align-items:center;justify-content:flex-end;color:var(--va-input-wrapper-counter-color);font-size:var(--va-input-wrapper-counter-font-size);line-height:var(--va-input-wrapper-counter-line-height)}.va-input-wrapper__label{max-width:100%;width:100%;display:block}.va-input-wrapper__label--inner{position:absolute;left:0;top:0;padding-top:1px}.va-input-wrapper__label--outer{margin-bottom:2px}.va-input-wrapper--labeled-inner .va-input-wrapper__text{padding-top:12px;box-sizing:content-box}.va-input-wrapper--labeled-inner .va-input-wrapper__field{height:calc(var(--va-input-wrapper-min-height) - var(--va-input-wrapper-border-width) * 2)}.va-input-wrapper--labeled-inner textarea{margin-top:0}.va-input-wrapper--solid{--va-input-wrapper-border-color: var(--va-input-color)}.va-input-wrapper--bordered .va-input-wrapper__field{border-top-left-radius:var(--va-input-wrapper-border-radius);border-top-right-radius:var(--va-input-wrapper-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-left-width:0;border-right-width:0;border-top-width:0}.va-input-wrapper--bordered .va-input-wrapper__field:after{bottom:0;border-color:var(--va-input-wrapper-border-color);border-bottom-style:solid}.va-input-wrapper--error{--va-input-wrapper-border-color: var(--va-input-wrapper-error-background, var(--va-danger));--va-input-wrapper-background: var(--va-input-wrapper-error-background, var(--va-danger));--va-input-wrapper-background-opacity: var(--va-input-wrapper-validation-background-opacity)}.va-input-wrapper--success{--va-input-wrapper-border-color: var(--va-input-wrapper-success-background, var(--va-success));--va-input-wrapper-background: var(--va-input-wrapper-success-background, var(--va-success));--va-input-wrapper-background-opacity: var(--va-input-wrapper-validation-background-opacity)}.va-input-wrapper--focused{--va-input-wrapper-border-color: var(--va-input-wrapper-color)}.va-input-wrapper--readonly{cursor:default}.va-input-wrapper--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-color-input{display:flex;align-items:center!important;position:relative}.va-color-input .form-group{margin-bottom:0}.va-color-input__input{margin-bottom:0;min-width:5.6rem;width:100%}.va-color-input__input__pointer{cursor:pointer}.va-color-input__hidden-input{visibility:hidden;width:0;height:0;overflow:hidden;position:absolute;pointer-events:none;bottom:0}@supports (-ms-ime-align: auto){.va-color-input__hidden-input{right:14.7rem}}@media screen and (-webkit-min-device-pixel-ratio:0){.va-color-input__hidden-input{right:14.7rem}}.va-color-palette{display:flex;padding-left:0;margin:0}.va-color-palette>*{margin-right:.25rem}.va-color-palette>*:last-child{margin-right:0}:root,:host{--va-counter-button-inner-padding: 6px;--va-counter-button-outer-padding: 8px}.va-counter{--va-input-wrapper-width: var(--va-form-element-default-width-small);min-width:unset;flex:none}.va-counter .va-input-wrapper__field>*,.va-counter .va-input-wrapper__container>*{margin-right:0}.va-counter.va-counter--input-square .va-input-wrapper__field{border-radius:0;border-left:none;border-right:none}.va-counter.va-counter--input-square .va-counter__prepend-wrapper{z-index:1}.va-counter.va-counter--input-square .va-counter__prepend-wrapper .va-counter__button-decrease{border-top-right-radius:0;border-bottom-right-radius:0}.va-counter.va-counter--input-square .va-counter__prepend-wrapper .va-counter__button-decrease:not(.va-button--square){width:unset}.va-counter.va-counter--input-square .va-counter__append-wrapper{z-index:1}.va-counter.va-counter--input-square .va-counter__append-wrapper .va-counter__button-increase{border-top-left-radius:0;border-bottom-left-radius:0}.va-counter.va-counter--input-square .va-counter__append-wrapper .va-counter__button-increase:not(.va-button--square){width:unset}.va-counter .va-counter__prepend-wrapper .va-counter__button-decrease .va-button__content,.va-counter .va-counter__prepend-wrapper .va-counter__button-increase .va-button__content,.va-counter .va-counter__append-wrapper .va-counter__button-decrease .va-button__content,.va-counter .va-counter__append-wrapper .va-counter__button-increase .va-button__content{padding:unset}.va-counter .va-counter__content-wrapper{width:100%;display:flex;justify-content:center}.va-counter .va-counter__content-wrapper:focus-visible{outline:none}.va-counter .va-input__content__input{text-align:center}.va-counter .va-input__content__input::-webkit-outer-spin-button,.va-counter .va-input__content__input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.va-counter .va-input__content__input[type=number]{-moz-appearance:textfield}.va-counter .va-input-wrapper__field{padding:0;width:unset}.va-counter__prepend-inner,.va-counter__append-inner{display:flex;align-items:stretch;height:100%;margin:0 .5rem}.va-data-table .va-data-table__table .va-data-table__table-th{padding:var(--va-data-table-cell-padding);width:var(--va-data-table-width);min-width:var(--va-data-table-width);text-align:var(--va-data-table-align);vertical-align:var(--va-data-table-vertical-align);font-size:var(--va-data-table-thead-font-size);line-height:var(--va-data-table-thead-line-height);font-weight:var(--va-data-table-thead-font-weight);text-transform:var(--va-data-table-thead-text-transform);letter-spacing:var(--va-data-table-thead-letter-spacing);cursor:var(--va-data-table-cursor)}.va-data-table .va-data-table__table .va-data-table__table-th .va-data-table__table-th-wrapper{display:flex;align-items:center}.va-data-table .va-data-table__table .va-data-table__table-th .va-data-table__table-th-wrapper:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\";outline-offset:2px}.va-data-table .va-data-table__table .va-data-table__table-th .va-data-table__table-th-sorting-icon{opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.va-data-table .va-data-table__table .va-data-table__table-th .va-data-table__table-th-sorting-icon.active{opacity:1;pointer-events:initial}.va-data-table .va-data-table__table .va-data-table__table-th .va-data-table__table-th-sorting-icon:focus-visible{opacity:1}.va-data-table .va-data-table__table .va-data-table__table-th span{flex-grow:1}.va-data-table .va-data-table__table .va-data-table__table-th:hover .va-data-table__table-th-sorting-icon:not(.active,:focus-visible){opacity:var(--va-data-table-hover-th-opacity)}.va-virtual-scroller{overflow:auto;width:100%;height:100%}.va-virtual-scroller__container{position:relative;overflow:hidden;min-width:100%;min-height:100%}.va-virtual-scroller__list{display:flex;flex-direction:column}.va-virtual-scroller--horizontal .va-virtual-scroller__list{flex-direction:row}:root,:host{--va-inner-loading-position: relative;--va-inner-loading-min-width: fit-content;--va-inner-loading-width: 100%;--va-inner-loading-overlay-display: flex;--va-inner-loading-overlay-align-items: center;--va-inner-loading-overlay-justify-content: center;--va-inner-loading-overlay-position: absolute;--va-inner-loading-overlay-top: 0;--va-inner-loading-overlay-bottom: 0;--va-inner-loading-overlay-width: 100%;--va-inner-loading-overlay-background: var(--va-background-primary)}.va-inner-loading{position:var(--va-inner-loading-position);min-width:var(--va-inner-loading-min-width);width:var(--va-inner-loading-width);font-family:var(--va-font-family)}.va-inner-loading--active{pointer-events:none}.va-inner-loading__overlay{display:var(--va-inner-loading-overlay-display);align-items:var(--va-inner-loading-overlay-align-items);justify-content:var(--va-inner-loading-overlay-justify-content);position:var(--va-inner-loading-overlay-position);top:var(--va-inner-loading-overlay-top);bottom:var(--va-inner-loading-overlay-bottom);width:var(--va-inner-loading-overlay-width);z-index:0}.va-inner-loading__overlay:after{content:\"\";position:absolute;width:100%;height:100%;top:0;left:0;background:var(--va-inner-loading-overlay-background);opacity:.3;z-index:-1}.va-data-table{--va-data-table-cell-padding: .625rem;--va-data-table-thead-line-height: 1.6;--va-data-table-thead-font-size: .625rem;--va-data-table-thead-font-weight: 700;--va-data-table-thead-text-transform: uppercase;--va-data-table-thead-letter-spacing: .6px;--va-data-table-thead-border: 1px solid var(--va-background-border);--va-data-table-tfoot-border: unset;--va-data-table-height: unset;--va-data-table-max-height: unset;--va-data-table-thead-color: currentColor;--va-data-table-tfoot-color: currentColor;--va-data-table-header-background: var(--va-background-primary);--va-data-table-hover-th-opacity: .3;--va-data-table-striped-tr-background-color: var(--va-background-element);--va-data-table-striped-tr-opacity: 1;--va-data-table-selectable-tr-cursor: pointer;--va-data-table-selectable-cell-width: 55px;--va-data-table-selectable-cell-vertical-align: middle;--va-data-table-selectable-cell-text-align: center;--va-data-table-no-data-text-align: center;--va-data-table-no-data-vertical-align: middle;--va-data-table-transition: var(--va-transition);--va-data-table-grid-tbody-gap: .5rem;--va-data-table-grid-tbody-margin-top: 1rem;--va-data-table-grid-tr-padding: 1rem;--va-data-table-grid-tr-border-radius: .5rem;--va-data-table-grid-tr-border: 1px solid var(--va-background-border);--va-data-table-grid-tr-header-font-weight: 600;--va-data-table-grid-tr-header-color: var(--va-text-primary)}.va-data-table{--va-data-table-selected-color: var(--va-css-variables-selected-color);--va-data-table-hover-color: var(--va-css-variables-hover-color);--va-data-table-height--computed: var(--va-css-variables-table-height);--va-data-table-thead-background--computed: var(--va-css-variables-thead-bg);--va-data-table-tfoot-background--computed: var(--va-css-variables-tfoot-bg);--va-data-table-grid-tbody-columns: 4;min-width:unset;font-family:var(--va-font-family)}@media(max-width:1199.98px){.va-data-table{--va-data-table-grid-tbody-columns: 3}}@media(max-width:991.98px){.va-data-table{--va-data-table-grid-tbody-columns: 2}}@media(max-width:767.98px){.va-data-table{--va-data-table-grid-tbody-columns: 1}}.va-data-table:not(.va-data-table--virtual-scroller){overflow-x:auto;overflow-y:hidden}.va-data-table--sticky:not(.va-data-table--virtual-scroller),.va-data-table--scroll{overflow-y:auto;height:var(--va-data-table-height--computed);max-height:var(--va-data-table-max-height)}.va-data-table .va-data-table__table{width:100%;cursor:default;white-space:nowrap}.va-data-table .va-data-table__table .va-data-table__table-thead{color:var(--va-data-table-thead-color);border-bottom:var(--va-data-table-thead-border)}.va-data-table .va-data-table__table .va-data-table__table-thead th{border-bottom:none}.va-data-table .va-data-table__table .va-data-table__table-thead--sticky{position:sticky;top:0;z-index:1;background:var(--va-data-table-thead-background--computed)}.va-data-table .va-data-table__table .va-data-table__table-tbody .no-data{text-align:var(--va-data-table-no-data-text-align);vertical-align:var(--va-data-table-no-data-vertical-align);width:100%}.va-data-table .va-data-table__table .va-data-table__table-tfoot{color:var(--va-data-table-tfoot-color);border-top:var(--va-data-table-tfoot-border, var(--va-data-table-thead-border))}.va-data-table .va-data-table__table .va-data-table__table-tfoot th{border-bottom:none}.va-data-table .va-data-table__table .va-data-table__table-tfoot--sticky{position:sticky;bottom:0;z-index:1;background:var(--va-data-table-tfoot-background--computed)}.va-data-table .va-data-table__table .va-data-table__table-td{padding:var(--va-data-table-cell-padding);text-align:var(--va-data-table-align);vertical-align:var(--va-data-table-vertical-align)}.va-data-table .va-data-table__table .va-data-table__table-th.va-data-table__table-cell-select,.va-data-table .va-data-table__table .va-data-table__table-td.va-data-table__table-cell-select{width:var(--va-data-table-selectable-cell-width);min-width:var(--va-data-table-selectable-cell-width);text-align:var(--va-data-table-selectable-cell-text-align);vertical-align:var(--va-data-table-selectable-cell-vertical-align);cursor:var(--va-data-table-selectable-tr-cursor)}.va-data-table .va-data-table__table .va-data-table__table-th .va-data-table__table-cell-checkbox,.va-data-table .va-data-table__table .va-data-table__table-td .va-data-table__table-cell-checkbox{display:block}.va-data-table .va-data-table__table .va-data-table__table-tr.selected{background-color:var(--va-data-table-selected-color)}.va-data-table .va-data-table__table.clickable .va-data-table__table-tr{cursor:pointer}.va-data-table .va-data-table__table.striped .va-data-table__table-tbody .va-data-table__table-tr:nth-of-type(2n):not(.selected) td{position:relative;background:var(--va-data-table-striped-tr-background-color);opacity:var(--va-data-table-striped-tr-opacity)}.va-data-table .va-data-table__table.selectable .va-data-table__table-tbody .va-data-table__table-tr td,.va-data-table .va-data-table__table.hoverable .va-data-table__table-tbody .va-data-table__table-tr td{position:relative}.va-data-table .va-data-table__table.selectable .va-data-table__table-tbody .va-data-table__table-tr:hover td,.va-data-table .va-data-table__table.hoverable .va-data-table__table-tbody .va-data-table__table-tr:hover td{z-index:0}.va-data-table .va-data-table__table.selectable .va-data-table__table-tbody .va-data-table__table-tr:hover td:after,.va-data-table .va-data-table__table.hoverable .va-data-table__table-tbody .va-data-table__table-tr:hover td:after{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";background:var(--va-data-table-hover-color);opacity:1;z-index:-1;transition:all .3s ease-in-out}.va-data-table .va-data-table__table .table-transition-fade-leave-active{transition:opacity var(--va-data-table-transition);display:none}.va-data-table .va-data-table__table .table-transition-fade-enter-active{transition:opacity var(--va-data-table-transition) .2s}.va-data-table .va-data-table__table .table-transition-fade-enter-from,.va-data-table .va-data-table__table .table-transition-shuffle-enter-from,.va-data-table .va-data-table__table .table-transition-fade-leave-to,.va-data-table .va-data-table__table .table-transition-shuffle-leave-to{opacity:0}.va-data-table .va-data-table__table .table-transition-shuffle-move{transition:transform var(--va-data-table-transition)}.va-data-table .va-data-table__table .table-transition-shuffle-leave-active{transition:none;display:none}.va-data-table .va-data-table__table .table-transition-shuffle-enter-active{transition:opacity var(--va-data-table-transition)}.va-data-table__scroll-trigger{-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-data-table--grid .va-data-table__table-thead .va-data-table__table-tr{display:flex;justify-content:space-between}.va-data-table--grid .va-data-table__table-thead .va-data-table__table-tr .va-data-table__table-th{box-shadow:none}@media(max-width:767.98px){.va-data-table--grid .va-data-table__table-thead .va-data-table__table-tr{flex-direction:column}}.va-data-table--grid .va-data-table__table-tbody{margin-top:var(--va-data-table-grid-tbody-margin-top);display:grid;grid-template-columns:repeat(var(--va-grid-columns-count),minmax(0,1fr));gap:var(--va-data-table-grid-tbody-gap)}.va-data-table--grid .va-data-table__table-tbody .va-data-table__table-tr{grid-column:span 1/span 1;padding:var(--va-data-table-grid-tr-padding);display:flex;flex-direction:column;border:var(--va-data-table-grid-tr-border);border-radius:var(--va-data-table-grid-tr-border-radius)}.va-data-table--grid .va-data-table__table-tbody .va-data-table__table-td{overflow:hidden}.va-data-table--grid .selectable .va-data-table__table-tr{cursor:pointer}.va-data-table--grid .va-data-table__table-td{display:flex;flex-direction:column}.va-data-table--grid .va-data-table__grid-column-header{font-weight:var(--va-data-table-grid-tr-header-font-weight);color:var(--va-data-table-grid-tr-header-color)}.va-date-picker-cell{position:relative;color:var(--va-date-picker-text-color);line-height:var(--va-date-picker-cell-size);min-height:var(--va-date-picker-cell-size);min-width:var(--va-date-picker-cell-size);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--va-date-picker-cell-radius);box-sizing:border-box;text-align:center;z-index:1}.va-date-picker-cell:after,.va-date-picker-cell:before{content:\"\";position:absolute;height:100%;width:100%;left:0;z-index:-1;-webkit-user-select:none;-moz-user-select:none;user-select:none;box-sizing:border-box;border-radius:var(--va-date-picker-cell-radius)}.va-date-picker-cell_clear{cursor:default;opacity:0}.va-date-picker-cell_highlighted-weekend{color:var(--va-date-picker-weekends-color)}.va-date-picker-cell_in-range:after{background-color:var(--va-bg);opacity:var(--va-date-picker-cell-background-opacity-in-range)}.va-date-picker-cell_today{font-weight:700}.va-date-picker-cell_today:before{border:2px solid var(--va-date-picker-color)}.va-date-picker-cell_selected{background-color:var(--va-bg);color:var(--va-text-color-computed)}.va-date-picker-cell_other-month{opacity:var(--va-date-picker-cell-opacity)}.va-date-picker-cell:hover:not(.va-date-picker-cell_selected):not(.va-date-picker-cell_readonly):not(.va-date-picker-cell_disabled):not(.va-date-picker-cell_other-month):after,.va-date-picker-cell_focused:not(.va-date-picker-cell_selected):not(.va-date-picker-cell_readonly):not(.va-date-picker-cell_disabled):not(.va-date-picker-cell_other-month):after,.va-date-picker-cell_focused:hover:not(.va-date-picker-cell_selected):not(.va-date-picker-cell_readonly):not(.va-date-picker-cell_disabled):not(.va-date-picker-cell_other-month):after{background-color:var(--va-date-picker-selected-background);opacity:var(--va-date-picker-cell-background-opacity-hover)}.va-date-picker-cell_disabled{cursor:not-allowed;opacity:var(--va-date-picker-cell-opacity)}.va-date-picker-cell_disabled:not(.va-date-picker-cell_today){opacity:.5}.va-date-picker-cell_disabled:after{opacity:var(--va-date-picker-cell-opacity);border:none;height:2px;width:50%;background:currentColor;top:50%;left:50%;transform:translate(-50%,-50%)}.va-date-picker-cell_readonly{cursor:default}.va-day-picker{display:grid;grid-template-columns:repeat(7,1fr);grid-gap:var(--va-date-picker-cell-gap)}.va-day-picker__weekday{height:var(--va-date-picker-cell-size);color:var(--va-secondary);text-align:center;font-size:var(--va-date-picker-weekday-font-size);font-weight:700;line-height:var(--va-date-picker-cell-size)}.va-date-picker{color:currentColor}.va-date-picker__header{display:flex;justify-content:space-between;align-items:center}.va-date-picker__header__text{color:currentColor}.va-date-picker__header__month{margin-left:.25rem}.va-month-picker{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:var(--va-date-picker-cell-gap);min-width:calc(var(--va-date-picker-cell-size) * 7 + var(--va-date-picker-cell-gap) * 6);width:100%}.va-month-picker__month-wrapper{border-radius:var(--va-date-picker-cell-radius);text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden}.va-year-picker{display:flex;flex-direction:column;overflow:auto;grid-gap:var(--va-date-picker-cell-gap);max-height:100%;position:relative;scrollbar-color:var(--va-background-element) transparent;scrollbar-width:thin;transition:scrollbar-color .3s ease-in-out}.va-year-picker::-webkit-scrollbar{width:4px;height:4px}.va-year-picker::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-year-picker::-webkit-scrollbar-thumb{background:var(--va-background-element);opacity:.3;border-radius:2px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}:root,:host{--va-date-picker-font-style: normal;--va-date-picker-font-weight: 600;--va-date-picker-font-size: 12px;--va-date-picker-line-height: 1.25;--va-date-picker-weekday-font-size: 9px;--va-date-picker-color: var(--va-primary);--va-date-picker-text-color: inherit;--va-date-picker-cell-size: 32px;--va-date-picker-cell-gap: 2px;--va-date-picker-cell-radius: 4px;--va-date-picker-selected-text: var(--va-text-inverted);--va-date-picker-selected-background: var(--va-date-picker-color);--va-date-picker-today-background: var(--va-date-picker-color);--va-date-picker-today-background-opacity: .8;--va-date-picker-weekends-color: var(--va-danger);--va-date-picker-focused-border-color: var(--va-date-picker-color);--va-date-picker-cell-opacity: .5;--va-date-picker-cell-background-opacity-hover: .1;--va-date-picker-cell-background-opacity-in-range: .2;--va-date-picker-cell-selected-background-opacity-hover: .8}.va-date-picker{--va-date-picker-content-height: calc(var(--va-date-picker-cell-size) * 7 + var(--va-date-picker-cell-gap) * 6);width:calc(var(--va-date-picker-cell-size) * 7 + var(--va-date-picker-cell-gap) * 6);font-family:var(--va-font-family);font-style:var(--va-date-picker-font-style);font-weight:var(--va-date-picker-font-weight);font-size:var(--va-date-picker-font-size);line-height:var(--va-date-picker-line-height);color:currentColor}.va-date-picker__picker-wrapper{height:var(--va-date-picker-content-height)}.va-date-picker_without-week-days{--va-date-picker-content-height: calc(var(--va-date-picker-cell-size) * 6 + var(--va-date-picker-cell-gap) * 6)}.va-date-picker_mobile .va-day-picker,.va-date-picker_mobile .va-month-picker,.va-date-picker_mobile .va-year-picker{height:100%}.va-date-picker_disabled{opacity:.4;position:relative}.va-date-picker_disabled:before{content:\"\";position:absolute;height:100%;width:100%;z-index:100}.va-date-picker-header{padding-bottom:.25rem}.va-date-input{--va-date-picker-cell-size: 28px;font-family:var(--va-font-family)}.va-date-input__anchor{flex:1}.va-date-input__input:-moz-read-only{cursor:pointer}.va-date-input__input:read-only{cursor:pointer}.va-date-input__dropdown-content{display:flex;justify-content:center}:root,:host{--va-divider-display: flex;--va-divider-margin: .5rem;--va-divider-line-width: 1px;--va-divider-border-style: solid;--va-divider-text-font-size: .875rem;--va-divider-text-line-height: 0;--va-divider-text-height: 0;--va-divider-text-vertical-align: middle;--va-divider-text-transform: translateY(-50%);--va-divider-text-horizontal-offset: 1.25rem;--va-divider-vertical-display: inline-flex;--va-divider-inset-horizontal-margin: 1rem;--va-divider-inset-margin: .5rem var(--va-divider-inset-horizontal-margin);--va-divider-dashed-border-top-style: dashed}.va-divider{display:var(--va-divider-display);margin:var(--va-divider-margin) 0;font-family:var(--va-font-family)}.va-divider--vertical{margin:0 var(--va-divider-margin);border-top:0;border-right-width:var(--va-divider-line-width);border-right-style:var(--va-divider-border-style);border-right-color:var(--va-color-computed);display:var(--va-divider-vertical-display);vertical-align:top}.va-divider--vertical.va-divider--dashed{border-right-style:dashed}.va-divider--inset{margin:var(--va-divider-inset-margin)}.va-divider--inset.va-divider--vertical{margin:var(--va-divider-inset-horizontal-margin) var(--va-divider-margin)}.va-divider:before,.va-divider:after{content:\"\";flex:1;border-top-width:var(--va-divider-line-width);border-top-style:var(--va-divider-border-style);border-top-color:var(--va-color-computed)}.va-divider--dashed:before,.va-divider--dashed:after{border-top-style:var(--va-divider-dashed-border-top-style)}.va-divider--left:before{flex:0 var(--va-divider-text-horizontal-offset)}.va-divider--right:after{flex:0 var(--va-divider-text-horizontal-offset)}.va-divider__text{font-size:var(--va-divider-text-font-size);line-height:var(--va-divider-text-line-height);height:var(--va-divider-text-height);vertical-align:var(--va-divider-text-vertical-align);transform:var(--va-divider-text-transform)}.va-list{width:var(--va-list-width);font-family:var(--va-font-family)}.va-list--fit{width:-moz-fit-content;width:fit-content}.va-list-item{display:block;font-family:var(--va-font-family)}.va-list-item--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-list-item:not(.va-list-item--disabled):focus-visible{outline:2px solid var(--va-focus)!important;border-radius:2px;outline-offset:-2px}.va-list-item__inner{display:var(--va-list-item-display);align-items:var(--va-list-item-align-items);width:var(--va-list-item-width);height:var(--va-list-item-height)}.va-list-label{font-family:var(--va-font-family);font-size:.625rem;letter-spacing:.6px;line-height:1.2;font-weight:700;text-transform:uppercase;text-align:var(--va-list-label-text-align);padding:var(--va-list-label-padding)}.va-list-item-label{font-family:var(--va-font-family);color:var(--va-list-item-label-color);display:var(--va-list-item-label-display);-webkit-box-orient:var(--va-list-item-label-box-orient);overflow:var(--va-list-item-label-overflow);line-height:var(--va-list-item-label-line-height)}.va-list-item-label--caption{font-size:var(--va-list-item-label-caption-font-size);color:var(--va-list-item-label-caption-color)}:root,:host{--va-list-width: 100%;--va-list-label-text-align: center;--va-list-label-padding: .3rem 0;--va-list-item-display: flex;--va-list-item-align-items: center;--va-list-item-width: 100%;--va-list-item-height: 100%;--va-list-item-label-color: #34495e;--va-list-item-label-display: -webkit-box;--va-list-item-label-box-orient: vertical;--va-list-item-label-overflow: hidden;--va-list-item-label-line-height: normal;--va-list-item-label-caption-font-size: 85%;--va-list-item-label-caption-color: #babfc2;--va-list-item-section-display: flex;--va-list-item-section-icon-min-width: 1.5rem;--va-list-item-section-icon-align-items: center;--va-list-item-section-icon-justify-content: center;--va-list-item-section-icon-margin: .6rem .75rem;--va-list-item-section-icon-font-size: 1.25rem;--va-list-item-section-avatar-min-width: 3rem}.va-list-item-section{display:flex;font-family:var(--va-font-family)}.va-list-item-section--main{min-width:0;flex-direction:column;flex:1 0}.va-list-item-section--icon{min-width:var(--va-list-item-section-icon-min-width);align-items:var(--va-list-item-section-icon-align-items);justify-content:var(--va-list-item-section-icon-justify-content);margin:var(--va-list-item-section-icon-margin)}.va-list-item-section--icon .va-icon{font-size:var(--va-list-item-section-icon-font-size)}.va-list-item-section--avatar{min-width:var(--va-list-item-section-avatar-min-width)}.va-list-item-section+.va-list-item-section{margin-left:.5rem}.va-list-item-section+.va-list-item-section--icon:last-child{margin-left:1rem}.va-list-separator{height:1px;background-color:#e6e9ec}.va-list-separator--offset{margin-left:1.5rem}.va-list-separator--spaced{margin:1.5rem 0}:root,:host{--va-progress-bar-width: 100%;--va-progress-bar-position: relative;--va-progress-bar-overflow: hidden;--va-progress-bar-height: .5rem;--va-progress-bar-border-radius: 9999999px;--va-progress-bar-sm-height: 2px;--va-progress-bar-lg-height: 16px;--va-progress-bar-info-font-weight: 700;--va-progress-bar-info-text-align: center;--va-progress-bar-info-text-transform: uppercase;--va-progress-bar-info-not-empty-margin-bottom: .1rem;--va-progress-bar-buffer-opacity: .3;--va-progress-bar-buffer-transition: width ease 2s;--va-progress-bar-transition: width ease 2s;--va-progress-bar-letter-spacing: .6px;--va-progress-bar-line-height: 1;--va-progress-bar-font-size: .8em;--va-progress-bar-font-weight: 700}.va-progress-bar{width:var(--va-progress-bar-width);position:relative;overflow:hidden;font-family:var(--va-font-family);line-height:var(--va-progress-bar-line-height)}.va-progress-bar__info{font-weight:var(--va-progress-bar-info-font-weight);text-align:var(--va-progress-bar-info-text-align);text-transform:var(--va-progress-bar-info-text-transform)}.va-progress-bar__info:not(:empty){margin-bottom:var(--va-progress-bar-info-not-empty-margin-bottom)}.va-progress-bar__wrapper{position:relative;overflow:hidden;border-radius:var(--va-progress-bar-border-radius)}.va-progress-bar--small .va-progress-bar__wrapper{height:var(--va-progress-bar-sm-height)}.va-progress-bar--medium .va-progress-bar__wrapper{height:var(--va-progress-bar-height)}.va-progress-bar--large .va-progress-bar__wrapper{height:var(--va-progress-bar-lg-height)}.va-progress-bar--square .va-progress-bar__wrapper{--va-progress-bar-border-radius: 0}.va-progress-bar__buffer{position:absolute;top:0;height:inherit;border-radius:inherit;transition:var(--va-progress-bar-buffer-transition);display:flex;align-items:center;justify-content:center;letter-spacing:var(--va-progress-bar-letter-spacing);font-size:var(--va-progress-bar-font-size);font-weight:var(--va-progress-bar-font-weight);background-color:var(--va-progress-bar-background-color)}.va-progress-bar__progress{height:inherit;border-radius:inherit;transition:var(--va-progress-bar-transition);background-color:var(--va-progress-bar-color)}.va-progress-bar__progress--indeterminate-start{background-color:var(--va-progress-bar-color);animation:va-progress-bar-indeterminate-start 2s ease-in infinite;position:absolute;height:inherit}.va-progress-bar__progress--indeterminate-end{background-color:var(--va-progress-bar-color);animation:va-progress-bar-indeterminate-end 2s ease-out 1s infinite;position:absolute;height:inherit}@keyframes va-progress-bar-indeterminate-start{0%{width:10%;left:-10%}50%{width:100%;left:100%}to{width:100%;left:100%}}@keyframes va-progress-bar-indeterminate-end{0%{width:100%;left:-100%}50%{width:10%;left:100%}to{width:10%;left:100%}}:root,:host{--va-file-upload-undo-button-line-height: 1.1428;--va-file-upload-undo-button-margin-top: 0;--va-file-upload-undo-button-margin-bottom: 0;--va-file-upload-undo-margin-left: .5rem}.va-file-upload-undo-progress-bar{position:absolute;top:0;left:0;--va-progress-bar-transition: width var(--va-undo-duration-style) linear}.va-file-upload-undo{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.va-file-upload-undo__button{line-height:var(--va-file-upload-undo-button-line-height);margin-left:var(--va-file-upload-undo-margin-left);margin-top:var(--va-file-upload-undo-button-margin-top);margin-bottom:var(--va-file-upload-undo-button-margin-bottom)}.va-file-upload-undo--vertical{justify-content:center;align-items:center;align-content:center;padding:var(--va-file-upload-undo-padding)}.va-file-upload-undo--vertical .va-file-upload-undo__text{margin:1rem 0 0;text-align:center}.va-file-upload-undo--vertical .va-file-upload-undo__button{margin:1rem 0 0}:root,:host{--va-file-upload-list-item-size-text-color: var(--va-secondary);--va-file-upload-list-item-border-radius: .375rem;--va-file-upload-list-item-background-color: var(--va-white);--va-file-upload-list-item-box-shadow: var(--va-box-shadow)}.va-file-upload-list-item{background-color:var(--va-file-upload-list-item-background-color);box-shadow:var(--va-file-upload-list-item-box-shadow, var(--va-block-box-shadow));border-radius:var(--va-file-upload-list-item-border-radius, var(--va-block-border-radius));position:relative;line-height:1.5rem;padding:1.125rem .5rem 1rem 1rem;max-width:100%;width:100%}.va-file-upload-list-item+.va-file-upload-list-item{margin-top:.5rem}.va-file-upload-list-item .va-list-item__inner{padding:0;overflow:hidden}.va-file-upload-list-item__content{display:flex;align-items:center;justify-content:space-between}.va-file-upload-list-item__name{white-space:nowrap;text-overflow:ellipsis;flex-basis:60%;overflow:hidden}.va-file-upload-list-item__size{color:var(--va-file-upload-list-item-size-text-color)}.va-file-upload-list-item__delete{font-size:1.5rem;cursor:pointer;--va-button-size: 1.5rem}.va-file-upload-list-item--undo{overflow:hidden;position:relative}.va-file-upload-list-item--undo .va-list-item-section{padding:0}:root,:host{--va-file-upload-gallery-item-card-box-shadow: var(--va-box-shadow);--va-file-upload-gallery-item-text: var(--va-text-primary);--va-file-upload-gallery-item-text-hover: var(--va-text-inverted)}.va-file-upload-gallery-item{display:flex;position:relative;margin-bottom:1rem;margin-right:.5rem;flex-basis:calc(14.2857% - .5rem);max-width:calc(14.2857% - .5rem);min-width:8.5714rem;border-radius:.375rem;overflow:hidden;width:100%;align-items:stretch}@media(max-width:991.98px){.va-file-upload-gallery-item{flex-basis:calc(16.667% - .5rem);max-width:calc(16.667% - .5rem)}}@media(max-width:767.98px){.va-file-upload-gallery-item{flex-basis:calc(20% - .5rem);max-width:calc(20% - .5rem)}}@media(max-width:575.98px){.va-file-upload-gallery-item{flex-basis:calc(50% - .5rem);max-width:calc(50% - .5rem)}}.va-file-upload-gallery-item:last-of-type{margin-right:0}.va-file-upload-gallery-item:hover .va-file-upload-gallery-item__overlay,.va-file-upload-gallery-item:focus .va-file-upload-gallery-item__overlay,.va-file-upload-gallery-item--focused .va-file-upload-gallery-item__overlay{z-index:3;opacity:1}.va-file-upload-gallery-item:hover .va-file-upload-gallery-item__name,.va-file-upload-gallery-item:focus .va-file-upload-gallery-item__name,.va-file-upload-gallery-item--focused .va-file-upload-gallery-item__name{color:var(--va-file-upload-gallery-item-text-hover)}.va-file-upload-gallery-item__overlay{display:flex;position:absolute;height:100%;width:100%;top:0;left:0;flex-direction:column;padding:.5rem;z-index:-1;opacity:0}.va-file-upload-gallery-item__overlay-background{position:absolute;height:100%;width:100%;top:0;left:0;z-index:-1}.va-file-upload-gallery-item__image{width:100%;box-shadow:var(--va-box-shadow);object-fit:cover;z-index:1}.va-file-upload-gallery-item__name{color:var(--va-file-upload-gallery-item-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:.875rem}.va-file-upload-gallery-item__delete{cursor:pointer;font-size:1.5rem;margin-top:auto}.va-file-upload-gallery-item--not-image .va-file-upload-gallery-item__overlay{display:flex}.va-file-upload-gallery-item--undo .va-list-item__inner{display:flex;align-items:flex-start;position:relative}.va-file-upload-gallery-item--undo .va-list-item-section{height:inherit;padding:0}.va-file-upload-gallery-item--undo .va-file-upload-undo{flex:1}.va-file-upload-single-item{width:100%}.va-file-upload-single-item__content{display:flex;flex-direction:row;align-items:center;max-width:100%;width:100%}.va-file-upload-single-item__name{margin-right:.25rem;max-width:80%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:normal}.va-file-upload-single-item__button{margin-top:0;margin-bottom:0;font-weight:700}.va-file-upload-list{display:flex;flex-wrap:wrap;padding:0 0 1.5rem}.va-file-upload-list--gallery{padding-bottom:.5rem}:root,:host{--va-file-upload-position: relative;--va-file-upload-margin: .5rem 0;--va-file-upload-list-margin-top: 1rem;--va-file-upload-dropzone-border-radius: .375rem;--va-file-upload-dropzone-cursor: pointer;--va-file-upload-dropzone-text-padding-sm: 0 0 1rem;--va-file-upload-dropzone-field-padding: 1.5rem 2rem;--va-file-upload-dropzone-field-padding-sm: 1.5rem 1rem;--va-file-upload-dropzone-field-button-margin: 0;--va-file-upload-dropzone-field-button-z-index: 10;--va-file-upload-dropzone-field-text-pr: 10px;--va-file-upload-dropzone-list-padding: 0 2rem 1rem}.va-file-upload{position:var(--va-file-upload-position);font-family:var(--va-font-family);margin:var(--va-file-upload-margin)}.va-file-upload .va-file-upload-list{margin-top:var(--va-file-upload-list-margin-top)}.va-file-upload__field{overflow:hidden;display:flex;align-items:center;position:relative}.va-file-upload__field__button{margin:var(--va-file-upload-dropzone-field-button-margin);z-index:10}.va-file-upload__field__text{padding-right:var(--va-file-upload-dropzone-field-text-pr)}.va-file-upload__field__input{position:absolute;top:0;right:0;height:100%;width:100%;color:transparent;opacity:0;cursor:pointer}.va-file-upload__field__input::-webkit-file-upload-button{cursor:pointer}.va-file-upload--dropzone{background-color:var(--va-file-upload-dropzone-background-color);overflow:hidden;border-radius:var(--va-file-upload-dropzone-border-radius);cursor:var(--va-file-upload-dropzone-cursor)}.va-file-upload--dropzone .va-file-upload__field{justify-content:center;display:flex;align-items:center;padding:var(--va-file-upload-dropzone-field-padding);transition:height .2s;overflow:visible;flex-wrap:wrap}@media(max-width:767.98px){.va-file-upload--dropzone .va-file-upload__field{flex-direction:column;padding:var(--va-file-upload-dropzone-field-padding-sm)}.va-file-upload--dropzone .va-file-upload__field__text{padding:var(--va-file-upload-dropzone-text-padding-sm);text-align:center}}.va-file-upload--dropzone .va-file-upload-list{padding:var(--va-file-upload-dropzone-list-padding);margin-top:0}.va-file-upload--disabled .va-file-upload__field__input{cursor:default}.va-file-upload--disabled .va-file-upload__field__input::-webkit-file-upload-button{cursor:inherit}.va-file-upload .va-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\";outline-offset:-2px}.va-form{font-family:var(--va-font-family)}:root,:host{--va-infinite-scroll-display: flex;--va-infinite-scroll-flex-direction: column;--va-infinite-scroll-spinner-default-width: 100%;--va-infinite-scroll-spinner-default-min-height: 70px;--va-infinite-scroll-reversed-flex-direction: column-reverse}.va-infinite-scroll{display:var(--va-infinite-scroll-display);flex-direction:var(--va-infinite-scroll-flex-direction);font-family:var(--va-font-family)}.va-infinite-scroll--reversed{flex-direction:var(--va-infinite-scroll-reversed-flex-direction)}.va-infinite-scroll__spinner{display:flex;justify-content:center;align-items:center}.va-infinite-scroll__spinner__default{display:flex;justify-content:center;align-items:center;width:var(--va-infinite-scroll-spinner-default-width);min-height:var(--va-infinite-scroll-spinner-default-min-height)}.va-infinite-scroll__spinner--invisible{visibility:hidden!important}.va-layout__absolute-area-wrapper .va-layout__area{position:absolute}.va-layout__absolute-area-wrapper .va-layout__area--top,.va-layout__absolute-area-wrapper .va-layout__area--bottom{width:100%}.va-layout__absolute-area-wrapper .va-layout__area--right{right:0;height:100%}.va-layout__absolute-area-wrapper .va-layout__area--left{left:0;height:100%}.va-layout-fixed-wrapper{position:relative;flex:1}.va-layout-fixed-wrapper__content{position:fixed;width:var(--va-styles-width);height:var(--va-styles-height)}@media print{.va-layout-fixed-wrapper__content{position:relative!important;height:-moz-max-content!important;height:max-content!important;width:-moz-max-content!important;width:max-content!important}}.va-layout-fixed-wrapper__content--top{top:0}.va-layout-fixed-wrapper__content--bottom{bottom:0}.va-layout-fixed-wrapper__content--right{right:0}.va-layout-fixed-wrapper__content--left{left:0}.va-layout__area{grid-area:var(--va-props-area);z-index:var(--va-z-index)}.va-layout__absolute-area-wrapper{z-index:var(--va-z-index)}.va-layout-area{display:flex}.va-layout-area__overlay{position:absolute;inset:0;background:var(--va-layout-overlay-color);z-index:var(--va-z-index-1)}.va-layout-area__overlay.v-enter-active,.va-layout-area__overlay.v-leave-active{transition:opacity .5s ease}.va-layout-area__overlay.v-enter-from,.va-layout-area__overlay.v-leave-to{opacity:0}.va-layout-area__overlay--fixed{position:fixed}:root,:host{--va-layout-overlay-color: rgba(0, 0, 0, .5);--va-layout-scroll-padding: 1rem}.va-layout{display:grid;grid-template-columns:var(--va-horizontal-template);grid-template-rows:var(--va-vertical-template);grid-template-areas:var(--va-template-area);gap:0;position:relative;z-index:0;max-width:100%;max-height:100%}.va-layout__area{scrollbar-color:var(--va-background-element) transparent;scrollbar-width:thin;transition:scrollbar-color .3s ease-in-out}.va-layout__area::-webkit-scrollbar{width:4px;height:4px}.va-layout__area::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-layout__area::-webkit-scrollbar-thumb{background:var(--va-background-element);opacity:.3;border-radius:2px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.va-layout__area--content{grid-area:content;z-index:0;min-width:0;min-height:0}.va-layout__area--content [id]{scroll-margin-top:calc(var(--va-paddings-top-px) + var(--va-layout-scroll-padding));scroll-margin-bottom:calc(var(--va-paddings-bottom-px) + var(--va-layout-scroll-padding));scroll-margin-left:calc(var(--va-paddings-left-px) + var(--va-layout-scroll-padding));scroll-margin-right:calc(var(--va-paddings-right-px) + var(--va-layout-scroll-padding))}.va-navbar{--va-navbar-mobile-height: 6.5rem;--va-navbar-height: 4.0625rem;--va-navbar-padding-x: 1rem;--va-navbar-padding-y: 1.2rem;--va-navbar-transition: transform .5s ease;--va-navbar-position: relative;--va-nav-z-index: calc(var(--va-z-index-teleport-overlay) - 100);--va-navbar-sm-padding: 1.1875rem 1rem 1rem;--va-navbar-shape-width: 33%;--va-navbar-shape-max-width: 467px;--va-navbar-shape-bg: rgba(0, 0, 0, .5);--va-navbar-shape-border-left: 3.1875rem solid transparent;--va-navbar-shape-border-right: 3.1875rem solid transparent;--va-navbar-shape-transition: border-top-color .3s ease;--va-navbar-item-margin: .75rem;--va-navbar-item-margin-side: calc(2 * var(--va-navbar-item-margin))}.va-navbar{display:grid;grid-template:\"left center right\"/1fr auto 1fr;align-items:center;transition:var(--va-navbar-transition);position:var(--va-navbar-position);padding:var(--va-navbar-padding-y) var(--va-navbar-padding-x);background-color:var(--va-primary);font-family:var(--va-font-family);top:0;left:0;width:100%;min-width:100%;z-index:var(--va-navbar-z-index)}.va-navbar__left{display:flex;grid-area:left}.va-navbar__left>.va-navbar__item{margin-right:var(--va-navbar-item-margin-side)}.va-navbar__left>.va-navbar__item:last-child{margin-right:0}.va-navbar__center{display:flex;justify-content:center;grid-area:center}.va-navbar__center>.va-navbar__item{margin:0 var(--va-navbar-item-margin)}.va-navbar__center>.va-navbar__item:last-child{margin-right:0}.va-navbar__center>.va-navbar__item:first-child{margin-left:0}.va-navbar__right{display:flex;flex-direction:row;justify-content:flex-end;grid-area:right}.va-navbar__right>.va-navbar__item{margin-right:var(--va-navbar-item-margin-side)}.va-navbar__right>.va-navbar__item:last-child{margin-right:0}.va-navbar__background-shape{transition:var(--va-navbar-shape-transition);width:var(--va-navbar-shape-width);max-width:var(--va-navbar-shape-max-width);position:absolute;left:0;right:0;top:0;margin:auto;border-top:var(--va-navbar-height) solid var(--va-navbar-shape-bg);border-left:var(--va-navbar-shape-border-left);border-right:var(--va-navbar-shape-border-right);height:0}@media(max-width:767.98px){.va-navbar__background-shape{display:none}}.va-navbar--shadowed{box-shadow:0 2px 8px var(--va-shadow)}.va-navbar--bordered{border-bottom:var(--va-background-border)}.va-navbar__item{display:flex;align-items:center;font-family:var(--va-font-family)}:root,:host{--va-radio-display: inline-flex;--va-radio-cursor: pointer;--va-radio-position: relative;--va-radio-gap: .5rem;--va-radio-transition: .3s cubic-bezier(.25, .8, .5, 1);--va-radio-disabled-cursor: default;--va-radio-border-color: var(--va-background-border);--va-radio-background: transparent;--va-radio-icon-transition: .3s cubic-bezier(.25, .8, .5, 1);--va-radio-icon-width: 1.4rem;--va-radio-icon-height: 1.4rem;--va-radio-icon-border-radius: 100%;--va-radio-icon-border: var(--va-background-border) solid var(--va-form-element-border-width);--va-radio-dot-transition: .3s cubic-bezier(.25, .8, .5, 1);--va-radio-dot-top: 50%;--va-radio-dot-left: 50%;--va-radio-dot-right: 50%;--va-radio-dot-bottom: 50%;--va-radio-dot-border-radius: 100%;--va-radio-dot-background-color: inherit;--va-radio-dot-opacity: 0;--va-radio-background-transition: .3s cubic-bezier(.25, .8, .5, 1);--va-radio-background-top: -.35rem;--va-radio-background-left: -.35rem;--va-radio-background-right: -.35rem;--va-radio-background-bottom: -.35rem;--va-radio-background-background-color: var(--va-background-element);--va-radio-background-border-radius: 100%;--va-radio-background-z-index: 0;--va-radio-background-opacity: 0;--va-radio-text-display: inline-flex;--va-radio-text-margin-left: .5rem;--va-radio-text-margin-right: 0}.va-radio{display:flex;width:-moz-max-content;width:max-content;flex-direction:var(--va-flex-direction);gap:var(--va-radio-gap)}.va-radio__square{display:inline-flex;align-items:center;width:100%;cursor:var(--va-radio-cursor);position:var(--va-radio-position);margin-top:var(--va-radio-margin-top);margin-right:var(--va-radio-margin-right);transition:var(--va-radio-transition, var(--va-swing-transition));font-family:var(--va-font-family);color:var(--va-label-style-color)}.va-radio+.va-radio{margin-top:.5rem}.va-radio .va-radio:last-child{margin:0}.va-radio--disabled{cursor:var(--va-radio-disabled-cursor)}.va-radio--readonly{cursor:default;pointer-events:none}.va-radio--readonly .va-radio--left-label,.va-radio--readonly .va-radio__text{cursor:initial;pointer-events:none}.va-radio--left-label{flex-direction:row-reverse;display:inline-flex;align-items:center}.va-radio--left-label.va-radio__square{justify-content:space-between}.va-radio__input{position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;white-space:nowrap;-webkit-clip-path:inset(100%);clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}.va-radio__icon{transition:var(--va-radio-icon-transition);display:flex;align-items:center;width:var(--va-radio-icon-width);height:var(--va-radio-icon-height);border-color:var(--va-icon-computed-styles-border-color);border-radius:var(--va-radio-icon-border-radius);background:var(--va-radio-background);position:relative;border:var(--va-radio-icon-border);box-sizing:border-box;margin:4px}.va-radio__input:disabled+.va-radio__icon{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-radio__input:focus-visible+.va-radio__icon{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\"}.va-radio__icon__dot{transition:var(--va-radio-dot-transition, var(--va-swing-transition));position:absolute;top:var(--va-radio-dot-top);left:var(--va-radio-dot-left);right:var(--va-radio-dot-right);bottom:var(--va-radio-dot-bottom);border-radius:var(--va-radio-dot-border-radius);opacity:var(--va-radio-dot-opacity);border-color:var(--va-icon-dot-computed-styles-border-color);background-color:var(--va-icon-dot-computed-styles-background-color)}.va-radio__input:checked+.va-radio__icon .va-radio__icon__dot{opacity:1;inset:.25rem}.va-radio__icon__background{transition:var(--va-radio-background-transition, var(--va-swing-transition));position:absolute;top:var(--va-radio-background-top);left:var(--va-radio-background-left);right:var(--va-radio-background-right);bottom:var(--va-radio-background-bottom);border-radius:var(--va-radio-background-border-radius);z-index:var(--va-radio-background-z-index);opacity:var(--va-radio-background-opacity);background-color:var(--va-icon-background-computed-styles-background-color)}.va-radio__square:hover .va-radio__icon__background{opacity:.2}.va-radio--disabled .va-radio__square:hover .va-radio__icon__background{opacity:0}.va-radio__text{display:var(--va-radio-text-display);margin-left:var(--va-radio-text-margin-left);margin-right:var(--va-radio-text-margin-right);white-space:nowrap}.va-radio--disabled .va-radio__text{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-radio--left-label .va-radio__text{margin-right:var(--va-radio-text-margin-left);margin-left:var(--va-radio-text-margin-right)}:root,:host{--va-switch-display: inline-block;--va-switch-checker-margin: auto;--va-switch-checker-transform: translateX(.3rem);--va-switch-checker-height: 1.5rem;--va-switch-checker-width: 1.5rem;--va-switch-checker-active-background-color: #ffffff;--va-switch-checker-background-color: var(--va-secondary);--va-switch-checker-border-radius: 50%;--va-switch-checker-box-shadow: 0 0 0 var(--va-background-border);--va-switch-checker-transition: all .2s ease;--va-switch-checker-wrapper-transform: translateX(0);--va-switch-checker-wrapper-top: 0;--va-switch-checker-wrapper-left: 0;--va-switch-checker-wrapper-bottom: 0;--va-switch-checker-wrapper-right: 0;--va-switch-checker-wrapper-width: 100%;--va-switch-checker-wrapper-height: 100%;--va-switch-checker-wrapper-transition: all .2s ease;--va-switch-checker-wrapper-pointer-events: none;--va-switch-label-left-padding: .3rem;--va-switch-label-right-padding: .3rem;--va-switch-track-border-radius: 1rem;--va-switch-track-height: 100%;--va-switch-track-width: 100%;--va-switch-track-background: var(--va-background-element);--va-switch-track-box-shadow: inset 0 0 0 var(--va-shadow);--va-switch-track-transition: background-color .2s ease;--va-switch-inner-cursor: pointer;--va-switch-inner-height: 2rem;--va-switch-inner-width: auto;--va-switch-inner-min-width: 4rem;--va-switch-inner-border-radius: 1rem;--va-switch-sm-inner-height: 1.5rem;--va-switch-sm-inner-width: auto;--va-switch-sm-inner-min-width: 3rem;--va-switch-lg-inner-height: 2.5rem;--va-switch-lg-inner-width: auto;--va-switch-lg-inner-min-width: 5rem}.va-switch{line-height:0;display:var(--va-switch-display)}.va-switch__container{display:inline-flex;align-items:center;width:100%}.va-switch:focus{outline:none}.va-switch__inner{cursor:var(--va-switch-inner-cursor);display:inline-block;position:relative;height:var(--va-switch-inner-height);width:var(--va-switch-inner-width);min-width:var(--va-switch-inner-min-width);border-radius:var(--va-switch-inner-border-radius)}.va-switch__inner:focus{outline:0;box-shadow:0 0 0 .3rem #3490dc80}.va-switch--small .va-switch__inner{height:var(--va-switch-sm-inner-height);width:var(--va-switch-sm-inner-width);min-width:var(--va-switch-sm-inner-min-width)}.va-switch--small .va-switch__checker-circle{height:1.1rem;width:1.1rem}.va-switch--large .va-switch__inner{height:var(--va-switch-lg-inner-height);width:var(--va-switch-lg-inner-width);min-width:var(--va-switch-lg-inner-min-width)}.va-switch--large .va-switch__checker-circle{height:1.8rem;width:1.8rem}.va-switch--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-switch--readonly{cursor:default;pointer-events:none}.va-switch--readonly .va-switch__label{cursor:initial;pointer-events:auto}.va-switch--left-label .va-switch__container{flex-direction:row-reverse;justify-content:start}.va-switch--left-label .va-switch__label{padding:0 var(--va-switch-label-left-padding) 0 0}.va-switch--indeterminate .va-switch__checker{margin:auto 0;transform:translate(-50%)}.va-switch--indeterminate .va-switch__checker-wrapper{transform:translate(50%)}.va-switch--checked .va-switch__checker{transform:translate(calc(-100% - .3rem))}.va-switch--checked .va-switch__checker-circle{background-color:var(--va-switch-checker-active-background-color)}.va-switch--checked .va-switch__checker-wrapper{transform:translate(100%)}.va-switch--error .va-switch__track{border:.1rem solid}.va-switch__label{cursor:pointer;text-align:left;padding:0 0 0 var(--va-switch-label-right-padding)}.va-switch .va-switch__track{display:flex;overflow:hidden;border-radius:var(--va-switch-track-border-radius);height:var(--va-switch-track-height);width:var(--va-switch-track-width);background:var(--va-switch-track-background);box-shadow:var(--va-switch-track-box-shadow);transition:var(--va-switch-track-transition)}.va-switch--keyboard-focus.va-switch .va-switch__track{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\"}.va-switch--small.va-switch .va-switch__track{border-radius:.75rem}.va-switch--large.va-switch .va-switch__track{border-radius:1.25rem}.va-switch .va-switch__track-label{color:#fff;margin:auto .5rem auto 2rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.va-switch--checked.va-switch .va-switch__track-label{margin:auto 2rem auto .5rem}.va-switch--small.va-switch .va-switch__track-label{margin:auto .5rem auto 1.55rem}.va-switch--checked.va-switch--small.va-switch .va-switch__track-label{margin:auto 1.55rem auto .5rem}.va-switch--large.va-switch .va-switch__track-label{margin:auto .5rem auto 2.3rem}.va-switch--checked.va-switch--large.va-switch .va-switch__track-label{margin:auto 2.3rem auto .5rem}.va-switch__checker{position:absolute;top:0;bottom:0;margin:var(--va-switch-checker-margin);transform:var(--va-switch-checker-transform);box-shadow:var(--va-switch-checker-box-shadow);transition:var(--va-switch-checker-transition);display:flex;justify-content:center;align-items:center}.va-switch__checker-circle{display:flex;align-items:center;justify-content:center;height:var(--va-switch-checker-height);width:var(--va-switch-checker-width);background-color:var(--va-switch-checker-background-color);border-radius:var(--va-switch-checker-border-radius)}.va-switch__checker-wrapper{position:absolute;margin:auto;transform:var(--va-switch-checker-wrapper-transform);top:var(--va-switch-checker-wrapper-top);left:var(--va-switch-checker-wrapper-left);bottom:var(--va-switch-checker-wrapper-bottom);right:var(--va-switch-checker-wrapper-right);width:var(--va-switch-checker-wrapper-width);height:var(--va-switch-checker-wrapper-height);transition:var(--va-switch-checker-wrapper-transition);pointer-events:var(--va-switch-checker-wrapper-pointer-events)}.va-switch__input{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;opacity:0;cursor:inherit}:root,:host{--va-option-list-line-height: 1.5}.va-option-list__list{line-height:var(--va-option-list-line-height);margin:0;padding:0;list-style:none;vertical-align:baseline}:root,:host{--va-pagination-gap: .5rem;--va-pagination-input-background: var(--va-background-primary);--va-pagination-input-border-style: solid;--va-pagination-input-border-width: 1px 0;--va-pagination-input-text-align: center;--va-pagination-input-font-size: 1rem;--va-pagination-button-content-width: .5rem;--va-pagination-button-sm-size: var(--va-button-sm-size);--va-pagination-button-size: var(--va-button-size);--va-pagination-button-lg-size: var(--va-button-lg-ze)}.va-pagination{display:flex;font-family:var(--va-font-family)}.va-pagination__input{background:var(--va-pagination-input-background);border-style:var(--va-pagination-input-border-style);border-width:var(--va-pagination-input-border-width);text-align:var(--va-pagination-input-text-align);font-size:var(--va-pagination-input-font-size);font-weight:400}.va-pagination__input--sm{height:var(--va-pagination-button-sm-size)}.va-pagination__input--md{height:var(--va-pagination-button-size)}.va-pagination__input--lg{height:var(--va-pagination-button-lg-size)}.va-pagination__input--auto{height:auto}.va-pagination .va-button.va-input{cursor:default}.va-pagination .va-button--small{height:var(--va-pagination-button-sm-size);min-width:var(--va-pagination-button-sm-size)}.va-pagination .va-button--normal{height:var(--va-pagination-button-size);min-width:var(--va-pagination-button-size)}.va-pagination .va-button--large{height:var(--va-pagination-button-lg-size);min-width:var(--va-pagination-button-lg-size)}.va-pagination .va-button--ellipsis{cursor:default;opacity:1}.va-pagination .va-button--ellipsis>.va-button__content{opacity:.4}.va-pagination .va-button:focus-visible{outline-offset:-2px}.va-pagination .va-button:focus-visible:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\"}.va-pagination>:not(:first-child):not(:last-child){border-radius:0}.va-pagination>:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.va-pagination>:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.va-pagination--gapped.va-pagination>.va-button{border-radius:var(--va-button-border-radius);margin-right:var(--va-pagination-gap);border-style:solid}.va-pagination--gapped.va-pagination>.va-button:last-child{margin-right:0}.va-pagination--bordered.va-pagination>.va-button{border-style:solid}.va-pagination--bordered.va-pagination>.va-button:before{border-radius:unset}.va-pagination--rounded.va-pagination>.va-button{border-radius:50%}.va-pagination--rounded.va-pagination>.va-button:before{border-radius:inherit}.va-pagination--rounded.va-pagination>.va-button.va-button--small.va-button--icon-only{height:var(--va-pagination-button-sm-size);width:var(--va-pagination-button-sm-size)}.va-pagination--rounded.va-pagination>.va-button.va-button--small .va-button__content{padding-right:var(--va-button-sm-content-px);padding-left:var(--va-button-sm-content-px)}.va-pagination--rounded.va-pagination>.va-button.va-button--normal.va-button--icon-only{height:var(--va-pagination-button-size);width:var(--va-pagination-button-size)}.va-pagination--rounded.va-pagination>.va-button.va-button--normal .va-button__content{padding-right:var(--va-button-content-px);padding-left:var(--va-button-content-px)}.va-pagination--rounded.va-pagination>.va-button.va-button--large.va-button--icon-only{height:var(--va-pagination-button-lg-size);width:var(--va-pagination-button-lg-size)}.va-pagination--rounded.va-pagination>.va-button.va-button--large .va-button__content{padding-right:var(--va-button-lg-content-px);padding-left:var(--va-button-lg-content-px)}:root,:host{--va-parallax-display: block;--va-parallax-width: auto;--va-parallax-z-index: 0;--va-parallax-image-container-contain: strict;--va-parallax-image-container-user-select: none;--va-parallax-image-will-change: transform;--va-parallax-image-transition: .3s opacity linear}.va-parallax{display:var(--va-parallax-display);position:relative;overflow:hidden;width:var(--va-parallax-width);z-index:var(--va-parallax-z-index);font-family:var(--va-font-family)}.va-parallax__image-container{position:absolute;inset:0;z-index:1;contain:var(--va-parallax-image-container-contain);-webkit-user-select:var(--va-parallax-image-container-user-select);-moz-user-select:var(--va-parallax-image-container-user-select);user-select:var(--va-parallax-image-container-user-select)}.va-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;max-width:unset;min-height:100%;display:none;transform:translate(-50%);will-change:var(--va-parallax-image-will-change);transition:var(--va-parallax-image-transition);z-index:1}.va-parallax__item-container{position:absolute;inset:0;z-index:2;contain:strict}:root,:host{--va-popover-display: inline-block;--va-popover-content-opacity: 1;--va-popover-content-display: flex;--va-popover-content-align-items: center;--va-popover-content-padding: .65rem 1rem;--va-popover-content-border-radius: .5rem;--va-popover-content-font-size: 1rem;--va-popover-content-box-shadow: 0 2px 3px 0;--va-popover-content-background-color: var(--va-background-primary);--va-popover-title-font-weight: 700;--va-popover-title-margin-bottom: .125rem;--va-popover-body-line-height: 1.5}.va-popover{display:var(--va-popover-display)}.va-popover__content{background-color:var(--va-popover-content-background-color);opacity:var(--va-popover-content-opacity);display:var(--va-popover-content-display);align-items:var(--va-popover-content-align-items);padding:var(--va-popover-content-padding);border-radius:var(--va-popover-content-border-radius, var(--va-block-border-radius));font-size:var(--va-popover-content-font-size)}.va-popover__icon+div{padding-left:.75rem;overflow:hidden;width:100%}.va-popover__title{font-weight:var(--va-popover-title-font-weight);margin-bottom:var(--va-popover-title-margin-bottom)}.va-popover__body{line-height:var(--va-popover-body-line-height)}.va-rating-item{display:inline-block}.va-rating-item:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:2px}.va-rating-item__wrapper{font-size:100%;overflow:visible;text-transform:none;padding:0;background-color:transparent;border-style:none}:root,:host{--va-rating-display: flex;--va-rating-number-item-font-size: inherit;--va-rating-number-item-margin: .1em;--va-rating-number-item-font-weight: 700;--va-rating-number-item-cursor: pointer;--va-rating-item-wrapper-cursor: pointer}.va-rating{display:var(--va-rating-display);font-family:var(--va-font-family)}.va-rating__number-item{font-size:100%;overflow:visible;text-transform:none;padding:0;background-color:transparent;border-style:none;font-size:var(--va-rating-number-item-font-size);margin:var(--va-rating-number-item-margin);font-weight:var(--va-rating-number-item-font-weight);display:flex;justify-content:center;align-items:center;cursor:pointer}.va-rating--disabled .va-rating__number-item{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-rating--readonly .va-rating__number-item{cursor:default}.va-rating__item-wrapper{display:flex;cursor:var(--va-rating-item-wrapper-cursor)}.va-rating--readonly .va-rating__item-wrapper,.va-rating--disabled .va-rating__item-wrapper{cursor:default}.va-rating-item{display:flex;justify-content:center;align-items:center}.va-rating--disabled .va-rating-item{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-rating--disabled .va-rating-item__wrapper,.va-rating--readonly .va-rating-item .va-rating-item__wrapper{cursor:initial!important}.va-rating__text-wrapper{padding-left:10px}:root,:host{--va-select-option-list-option-cursor: pointer;--va-select-option-list-option-display: flex;--va-select-option-list-option-align-items: center;--va-select-option-list-option-padding: .375rem .75rem;--va-select-option-list-option-min-height: 2.25rem;--va-select-option-list-option-word-break: break-word;--va-select-option-list-empty-block-padding: .375rem .75rem;--va-select-option-list-option-icon-margin-right: .5rem;--va-select-option-list-option-selected-icon-margin-left: auto;--va-select-option-list-option-selected-icon-font-size: .8rem;--va-select-option-list-option-disabled-opacity: .7;--va-select-option-list-option-highlighted-color: var(--va-text-inverted);--va-select-option-list-option-highlighted-background-color: var(--va-primary);--va-select-option-list-option-highlighted-border-radius: .1rem;--va-select-option-list-option-highlighted-margin: 0 1px;--va-select-option-list-option-highlighted-padding: 0 1px;--va-select-content-autocomplete-gap: .25rem;--va-select-content-autocomplete-color: var(--va-text-primary);--va-select-content-autocomplete-line-height: calc(var(--va-input-font-size) + 2px)}.va-select-option{min-height:var(--va-select-option-list-option-min-height);padding:var(--va-select-option-list-option-padding);display:var(--va-select-option-list-option-display);align-items:var(--va-select-option-list-option-align-items);word-break:var(--va-select-option-list-option-word-break);cursor:var(--va-select-option-list-option-cursor)}.va-select-option__icon{margin-right:var(--va-select-option-list-option-icon-margin-right)}.va-select-option__selected-icon{margin-left:var(--va-select-option-list-option-selected-icon-margin-left);font-size:var(--va-select-option-list-option-selected-icon-font-size)}.va-select-option__highlighted{color:var(--va-select-option-list-option-highlighted-color);background-color:var(--va-select-option-list-option-highlighted-background-color);border-radius:var(--va-select-option-list-option-highlighted-border-radius);margin:var(--va-select-option-list-option-highlighted-margin);padding:var(--va-select-option-list-option-highlighted-padding)}:root,:host{--va-select-option-list-width: 100%;--va-select-option-list-max-height: 12.5rem;--va-select-option-list-group-name-padding: 1rem .75rem .375rem;--va-select-option-list-group-name-font-size: .6rem;--va-select-option-list-group-name-color: var(--va-primary);--va-select-option-list-group-name-font-weight: 700;--va-select-option-list-group-name-text-transform: \"uppercase\";--va-select-option-list-empty-padding: .5rem}.va-select-option-list{overflow:auto;width:var(--va-select-option-list-width);max-height:var(--va-select-option-list-max-height);display:flex;flex-direction:column;font-family:var(--va-font-family);scrollbar-color:var(--va-primary) transparent;scrollbar-width:thin;transition:scrollbar-color .3s ease-in-out}.va-select-option-list--empty{padding:var(--va-select-option-list-empty-block-padding)}.va-select-option-list::-webkit-scrollbar{width:4px;height:4px}.va-select-option-list::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-select-option-list::-webkit-scrollbar-thumb{background:var(--va-primary);opacity:.3;border-radius:2px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.va-select-option-list__group-name{padding:var(--va-select-option-list-group-name-padding);font-size:var(--va-select-option-list-group-name-font-size);color:var(--va-select-option-list-group-name-color);font-weight:var(--va-select-option-list-group-name-font-weight);text-transform:var(--va-select-option-list-group-name-text-transform)}.va-select-content{display:flex;flex-wrap:wrap;flex:1}.va-select-content__autocomplete{flex:1 1;margin-left:.25rem}.va-select-content__autocomplete:first-child{margin-left:0}.va-select-content__placeholder{overflow:hidden!important;flex:1;line-height:normal;color:var(--va-input-placeholder-text-color);text-overflow:ellipsis!important;white-space:nowrap!important}.va-select-content__separator{white-space:pre}.va-select-content__state-icon{margin-left:var(--va-select-state-icon-margin-left)}:root,:host{--va-select-cursor: pointer;--va-select-dropdown-background: var(--va-background-secondary);--va-select-state-icon-margin-left: .25rem}.va-select .va-input-wrapper__text{line-height:normal;flex-wrap:wrap}.va-select-anchor__input{cursor:var(--va-select-cursor);height:-moz-min-content;height:min-content}.va-select-anchor--nowrap .va-input-wrapper__text{flex-wrap:nowrap}.va-select-dropdown__content{overflow:hidden;border-top-right-radius:0;border-top-left-radius:0;padding:0}.va-select-dropdown__content-search-input{min-width:auto;width:100%}.va-select-dropdown__options-wrapper{background:var(--va-select-dropdown-background);overflow-y:auto;scrollbar-color:var(--va-background-element) transparent;scrollbar-width:thin;transition:scrollbar-color .3s ease-in-out}.va-select-dropdown__options-wrapper::-webkit-scrollbar{width:4px;height:4px}.va-select-dropdown__options-wrapper::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-select-dropdown__options-wrapper::-webkit-scrollbar-thumb{background:var(--va-background-element);opacity:.3;border-radius:2px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}:root,:host{--va-skeleton-wave-color: rgb(100, 100, 100);--va-skeleton-wave-opacity: .2;--va-skeleton-border-radius: unset;--va-skeleton-animation-duration: 2.5s}@keyframes pulse{0%{filter:brightness(1)}50%{filter:brightness(1)}75%{filter:brightness(.9)}to{filter:brightness(1)}}@keyframes wave{0%{left:-100%}to{left:100%}}.va-skeleton{background:var(--va-color-computed);height:var(--va-height-computed);width:var(--va-width-computed);border-radius:var(--va-border-radius);cursor:wait}.va-skeleton--pulse{animation:var(--va-skeleton-animation-duration) ease-in-out 0s infinite normal none running pulse}.va-skeleton--wave{-webkit-mask-image:-webkit-radial-gradient(white,black);mask-image:-webkit-radial-gradient(white,black)}.va-skeleton--wave .va-skeleton__wave{position:absolute;overflow:hidden;left:0;height:100%;width:100%}.va-skeleton--wave .va-skeleton__wave:after{display:block;position:relative;content:\"\";left:0;top:0;width:100%;height:100%;opacity:var(--va-skeleton-wave-opacity, .5);background:linear-gradient(90deg,transparent,var(--va-skeleton-wave-color),transparent);animation:var(--va-skeleton-animation-duration) linear 0s infinite normal none running wave}.va-skeleton--hidden{position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0}.va-skeleton--lines{background:repeating-linear-gradient(180deg,var(--va-color-computed),var(--va-color-computed) calc(1em - var(--va-line-gap) / 2),transparent calc(1em - var(--va-line-gap) / 2),transparent 1em)}.va-skeleton--lines .va-skeleton__wave:after{-webkit-mask-image:repeating-linear-gradient(180deg,black,black calc(1em - var(--va-line-gap) / 2),transparent calc(1em - var(--va-line-gap) / 2),transparent 1em);mask-image:repeating-linear-gradient(180deg,black,black calc(1em - var(--va-line-gap) / 2),transparent calc(1em - var(--va-line-gap) / 2),transparent 1em)}.va-skeleton--text{width:100%;-webkit-clip-path:polygon(0% 0%,0% 100%,var(--va-last-line-width) 100%,var(--va-last-line-width) calc(100% - 1em),100% calc(100% - 1em),100% 100%,1em 100%,var(--va-last-line-width) 100%,100% 100%,100% 0%);clip-path:polygon(0% 0%,0% 100%,var(--va-last-line-width) 100%,var(--va-last-line-width) calc(100% - 1em),100% calc(100% - 1em),100% 100%,1em 100%,var(--va-last-line-width) 100%,100% 100%,100% 0%)}.va-skeleton--circle{min-width:var(--va-width-computed);min-height:var(--va-height-computed)}.va-skeleton-group[data-v-597bab9a]{position:relative;cursor:progress}.va-skeleton-group--hidden[data-v-597bab9a]{display:none}.va-sidebar{min-height:var(--va-sidebar-min-height);height:var(--va-sidebar-height);z-index:var(--va-sidebar-z-index);font-family:var(--va-font-family);display:inline-flex;box-sizing:border-box;position:relative;top:0}.va-sidebar__menu{display:flex;flex-direction:column;min-width:100%;flex:1;height:100%;right:0;max-height:var(--va-sidebar-menu-max-height);overflow-y:var(--va-sidebar-menu-overflow-y);overflow-x:var(--va-sidebar-menu-overflow-x);margin-left:auto;scrollbar-color:var(--va-secondary) transparent;scrollbar-width:thin;transition:scrollbar-color .3s ease-in-out}.va-sidebar__menu::-webkit-scrollbar{width:4px;height:4px}.va-sidebar__menu::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-sidebar__menu::-webkit-scrollbar-thumb{background:var(--va-secondary);opacity:.3;border-radius:2px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.va-sidebar--animated,.va-sidebar--animated .va-sidebar__menu{transition:var(--va-sidebar-transition)}.va-sidebar--animated-right{justify-content:flex-end}.va-sidebar--animated-left{justify-content:flex-start}.va-sidebar--minimized{left:0}.va-sidebar--minimized .va-sidebar__title{display:none}.va-sidebar-item{border-left:var(--va-sidebar-item-active-border-size) solid transparent;padding-right:var(--va-sidebar-item-active-border-size);display:inline-block;width:100%;font-family:var(--va-font-family);transition:var(--va-sidebar-item-transition);box-sizing:border-box;color:currentColor;cursor:pointer}.va-sidebar-item--disabled{opacity:.5;cursor:not-allowed}.va-sidebar-item:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\";outline-offset:-2px}.va-sidebar__item__content{display:flex;align-items:center;padding:var(--va-sidebar-item-content-padding);min-height:58px;box-sizing:border-box}.va-sidebar__item__content>*{margin-right:var(--va-sidebar-item-content-gap)}.va-sidebar__item__content>*:last-child{margin-right:0}:root,:host{--va-sidebar-min-height: 100%;--va-sidebar-height: 100%;--va-sidebar-position: relative;--va-sidebar-top: 0;--va-sidebar-left: 0;--va-sidebar-transition: var(--va-transition);--va-sidebar-z-index: 1;--va-sidebar-menu-max-height: 100%;--va-sidebar-menu-margin-bottom: 0;--va-sidebar-menu-list-style: none;--va-sidebar-menu-padding-left: 0;--va-sidebar-menu-overflow-y: auto;--va-sidebar-menu-overflow-x: visible;--va-sidebar-item-active-border-size: 4px;--va-sidebar-item-transition: var(--va-transition);--va-sidebar-item-content-padding: 1rem;--va-sidebar-item-content-gap: .5rem;--va-sidebar-item-title-white-space: nowrap}.va-sidebar__title{flex-grow:1;white-space:var(--va-sidebar-item-title-white-space);transition:opacity .2s ease-in-out}:root,:host{--va-slider-track-border-radius: .25rem;--va-slider-track-transition: .5s ease-out;--va-slider-track-opacity: 1;--va-slider-pin-transition: background-color .3s ease-out .1s;--va-slider-handler-width: 1.25rem;--va-slider-handler-height: 1.25rem;--va-slider-handler-background: var(--va-background-primary);--va-slider-handler-border: .375rem solid;--va-slider-handler-border-radius: 50%;--va-slider-handler-outline: none !important;--va-slider-handler-left: -.375rem;--va-slider-handler-transition: 0s;--va-slider-dot-transform: translate(-.625rem, -.625rem);--va-slider-dot-display: block;--va-slider-dot-width: 1.75rem;--va-slider-dot-height: 1.75rem;--va-slider-dot-border-radius: 50%;--va-slider-dot-opacity: .2;--va-slider-dot-pointer-events: none;--va-slider-dot-value-transform: translate(-50%, -100%);--va-slider-dot-value-user-select: none;--va-slider-dot-value-font-size: .625rem;--va-slider-dot-value-letter-spacing: .6px;--va-slider-dot-value-line-height: 1.2;--va-slider-dot-value-font-weight: 700;--va-slider-dot-value-text-transform: none;--va-slider-dot-value-white-space: nowrap;--va-slider-input-label-user-select: none;--va-slider-input-label-font-size: .625rem;--va-slider-input-label-letter-spacing: .6px;--va-slider-input-label-line-height: 1.2;--va-slider-input-label-font-weight: 700;--va-slider-input-label-text-transform: uppercase;--va-slider-input-label-inverse-user-select: none;--va-slider-input-label-inverse-font-size: .625rem;--va-slider-input-label-inverse-letter-spacing: .6px;--va-slider-input-label-inverse-line-height: 1.2;--va-slider-input-label-inverse-font-weight: 700;--va-slider-input-label-inverse-text-transform: uppercase;--va-slider-horizontal-input-wrapper-margin-right: 1rem;--va-slider-horizontal-track-height: .5rem;--va-slider-horizontal-track-width: 100%;--va-slider-horizontal-handler-transform: translateX(-50%);--va-slider-horizontal-dot-value-top: -8px;--va-slider-horizontal-dot-value-left: 50%;--va-slider-vertical-height: 100%;--va-slider-vertical-padding: 12px 0 12px 0;--va-slider-vertical-flex-direction: column;--va-slider-vertical-align-items: center;--va-slider-vertical-label-margin-bottom: .625rem;--va-slider-vertical-label-inverse-left: -.375rem;--va-slider-vertical-label-inverse-margin-top: .625rem;--va-slider-vertical-input-wrapper-max-width: 1rem;--va-slider-vertical-input-wrapper-min-width: 2.5rem;--va-slider-vertical-track-height: 100%;--va-slider-vertical-track-width: .5rem;--va-slider-vertical-track-bottom: 0;--va-slider-vertical-handler-transform: translateY(50%);--va-slider-vertical-dot-value-top: .625rem;--va-slider-vertical-dot-value-left: 1.25rem}.va-slider{display:flex;align-items:center;font-family:var(--va-font-family)}.va-slider__input-wrapper{position:relative;display:flex}.va-slider__container{position:relative;display:flex;align-items:center;cursor:grab}.va-slider__track{position:absolute;border-radius:var(--va-slider-track-border-radius);transition:var(--va-slider-track-transition);opacity:var(--va-slider-track-opacity)}.va-slider__track--active{transition:0s}.va-slider__track--selected{opacity:1}.va-slider__handler{position:absolute;width:var(--va-slider-handler-width);height:var(--va-slider-handler-height);background:var(--va-slider-handler-background);border:var(--va-slider-handler-border);border-radius:var(--va-slider-handler-border-radius);outline:var(--va-slider-handler-outline);left:var(--va-slider-handler-left);transition:var(--va-slider-handler-transition);box-sizing:border-box}.va-slider__handler__dot--focus{transform:var(--va-slider-dot-transform);display:block;width:var(--va-slider-dot-width);height:var(--va-slider-dot-height);position:absolute;border-radius:var(--va-slider-dot-border-radius);opacity:var(--va-slider-dot-opacity);pointer-events:var(--va-slider-dot-pointer-events)}.va-slider__handler__dot--value{transform:var(--va-slider-dot-value-transform);-webkit-user-select:var(--va-slider-dot-value-user-select);-moz-user-select:var(--va-slider-dot-value-user-select);user-select:var(--va-slider-dot-value-user-select);font-size:var(--va-slider-dot-value-font-size);letter-spacing:var(--va-slider-dot-value-letter-spacing);line-height:var(--va-slider-dot-value-line-height);font-weight:var(--va-slider-dot-value-font-weight);text-transform:var(--va-slider-dot-value-text-transform);white-space:var(--va-slider-dot-value-white-space)}.va-slider .va-input__label{-webkit-user-select:var(--va-slider-input-label-user-select);-moz-user-select:var(--va-slider-input-label-user-select);user-select:var(--va-slider-input-label-user-select);font-size:var(--va-slider-input-label-font-size);letter-spacing:var(--va-slider-input-label-letter-spacing);line-height:var(--va-slider-input-label-line-height);font-weight:var(--va-slider-input-label-font-weight);text-transform:var(--va-slider-input-label-text-transform)}.va-slider .va-input__label--inverse{-webkit-user-select:var(--va-slider-input-label-inverse-user-select);-moz-user-select:var(--va-slider-input-label-inverse-user-select);user-select:var(--va-slider-input-label-inverse-user-select);font-size:var(--va-slider-input-label-inverse-font-size);letter-spacing:var(--va-slider-input-label-inverse-letter-spacing);line-height:var(--va-slider-input-label-inverse-line-height);font-weight:var(--va-slider-input-label-inverse-font-weight);text-transform:var(--va-slider-input-label-inverse-text-transform)}.va-slider--grabbing .va-slider__container{cursor:grabbing}.va-slider--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-slider--disabled .va-slider__container,.va-slider--readonly .va-slider__container{cursor:default}.va-slider--horizontal .va-slider__input-wrapper{flex-basis:fit-content;flex-grow:0;margin-right:var(--va-slider-horizontal-input-wrapper-margin-right)}.va-slider--horizontal .va-slider__input-wrapper:last-of-type{margin-left:1rem}.va-slider--horizontal .va-slider__container{width:100%;height:1.5rem}.va-slider--horizontal .va-slider__track{height:var(--va-slider-horizontal-track-height);width:var(--va-slider-horizontal-track-width)}.va-slider--horizontal .va-slider__mark{position:absolute;width:.125rem;height:.75rem}.va-slider--horizontal .va-slider__handler{transform:var(--va-slider-horizontal-handler-transform)}.va-slider--horizontal .va-slider__handler--inactive{transition:left .5s ease-out}.va-slider--horizontal .va-slider__handler__dot--value{position:absolute;top:var(--va-slider-horizontal-dot-value-top);left:var(--va-slider-horizontal-dot-value-left)}.va-slider--horizontal .va-input__label{margin-right:1rem}.va-slider--horizontal .va-input__label--inverse{margin-left:1rem}.va-slider--vertical{height:var(--va-slider-vertical-height);padding:var(--va-slider-vertical-padding);flex-direction:var(--va-slider-vertical-flex-direction);align-items:var(--va-slider-vertical-align-items)}.va-slider--vertical .va-input__label{margin-bottom:var(--va-slider-vertical-label-margin-bottom)}.va-slider--vertical .va-input__label--inverse{left:var(--va-slider-vertical-label-inverse-left);margin-top:var(--va-slider-vertical-label-inverse-margin-top)}.va-slider--vertical .va-slider__input-wrapper{flex-basis:fit-content;flex-grow:0;max-width:var(--va-slider-vertical-input-wrapper-max-width);min-width:var(--va-slider-vertical-input-wrapper-min-width);position:relative;display:flex}.va-slider--vertical .va-slider__input-wrapper:last-of-type{margin-top:1rem}.va-slider--vertical .va-slider__container{height:100%;width:.5rem}.va-slider--vertical .va-slider__track{height:var(--va-slider-vertical-track-height);width:var(--va-slider-vertical-track-width);bottom:var(--va-slider-vertical-track-bottom)}.va-slider--vertical .va-slider__mark{position:absolute;width:.75rem;height:.125rem;left:-2px}.va-slider--vertical .va-slider__handler{transform:var(--va-slider-vertical-handler-transform)}.va-slider--vertical .va-slider__handler--inactive{transition:bottom .5s ease-out}.va-slider--vertical .va-slider__handler__dot--value{position:relative;top:var(--va-slider-vertical-dot-value-top);left:var(--va-slider-vertical-dot-value-left)}:root,:host{--va-split-panel-overflow: auto;--va-split-dragger-display: flex;--va-split-dragger-justify-content: center;--va-split-dragger-align-items: center;--va-split-dragger-overlay-size: 1rem;--va-split-dragging-cursor: grabbing;--va-split-horizontal-dragger-cursor: col-resize;--va-split-vertical-dragger-cursor: row-resize}.va-split{position:relative;display:flex}.va-split__dragger{position:relative}.va-split__dragger__overlay{position:absolute;inset:0;display:var(--va-split-dragger-display);z-index:1}.va-split__panel{overflow:var(--va-split-panel-overflow);scrollbar-color:var(--va-background-element) transparent;scrollbar-width:thin;transition:scrollbar-color .3s ease-in-out}.va-split__panel::-webkit-scrollbar{width:4px;height:4px}.va-split__panel::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-split__panel::-webkit-scrollbar-thumb{background:var(--va-background-element);opacity:.3;border-radius:2px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.va-split--dragging .va-split__panel{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:var(--va-split-dragging-cursor)}.va-split__dragger__default{opacity:.7}.va-split:focus .va-split__dragger__default,.va-split:hover .va-split__dragger__default{opacity:1}.va-split--vertical{flex-direction:column}.va-split--vertical>.va-split__dragger{height:0}.va-split--vertical>.va-split__dragger .va-split__dragger__overlay{top:calc(var(--va-split-dragger-overlay-size) / -2);height:var(--va-split-dragger-overlay-size);align-items:var(--va-split-dragger-align-items)}.va-split--vertical>.va-split__dragger .va-split__dragger__default{width:100%}.va-split--horizontal{flex-direction:row}.va-split--horizontal>.va-split__dragger{width:0}.va-split--horizontal>.va-split__dragger .va-split__dragger__overlay{left:calc(var(--va-split-dragger-overlay-size) / -2);width:var(--va-split-dragger-overlay-size);justify-content:var(--va-split-dragger-justify-content)}.va-split--horizontal>.va-split__dragger .va-split__dragger__default{height:100%}:root,:host{--va-tabs-display: flex;--va-tabs-align-items-horizontal: center;--va-tabs-align-items-vertical: stretch;--va-tabs-container-height: 2rem;--va-tabs-container-margin: 0 3px;--va-tabs-slider-width: .125rem;--va-tabs-slider-height: .125rem;--va-tabs-slider-transition: transform ease .3s;--va-tabs-slider-wrapper-bottom: 0;--va-tabs-slider-wrapper-margin: 0;--va-tabs-slider-wrapper-z-index: 4000;--va-tabs-slider-wrapper-transition: .3s cubic-bezier(.25, .8, .5, 1)}.va-tabs{display:var(--va-tabs-display);align-items:var(--va-tabs-align-items-horizontal);flex-direction:column;position:relative;font-family:var(--va-font-family)}.va-tabs__wrapper{overflow:hidden;contain:content;display:flex;flex:1 1 auto;width:100%}.va-tabs .va-tabs__pagination{flex:0 0 auto}.va-tabs .va-tabs__container{overflow:hidden;flex:1 1 auto;display:flex;height:var(--va-tabs-container-height);margin:var(--va-tabs-container-margin);white-space:nowrap;position:relative}.va-tabs .va-tabs__container .va-tabs__tabs{height:100%}.va-tabs .va-tabs__container .va-tabs__tabs-items{display:flex}.va-tabs .va-tabs__container--right{justify-content:flex-end}.va-tabs .va-tabs__container--grow .va-tabs__tabs{display:flex;min-width:100%}.va-tabs .va-tabs__container--grow .va-tabs__tabs-items{width:100%}.va-tabs .va-tabs__container--grow .va-tab{flex:1 0 auto;max-width:none}.va-tabs .va-tabs__container--center{justify-content:center}.va-tabs .va-tabs__container--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.va-tabs--vertical{align-items:var(--va-tabs-align-items-vertical);flex-direction:row}.va-tabs--vertical .va-tabs__wrapper{flex:0 0 auto;width:unset}.va-tabs--vertical .va-tabs__container{height:auto}.va-tabs--vertical .va-tabs__container .va-tabs__tabs-items{flex-direction:column}.va-tabs--vertical .va-tabs__container .va-tabs__tabs{position:relative}.va-tabs--vertical .va-tab{display:flex}.va-tabs--vertical .va-tab__content{flex:0 0 auto}.va-tabs--vertical .va-tabs__content{flex:1 0 auto}.va-tabs .va-tabs__slider-wrapper{bottom:var(--va-tabs-slider-wrapper-bottom);margin:var(--va-tabs-slider-wrapper-margin);position:absolute;z-index:var(--va-tabs-slider-wrapper-z-index)}.va-tabs .va-tabs__slider-wrapper .va-tabs__slider{width:var(--va-tabs-slider-width);height:var(--va-tabs-slider-height)}.va-tabs .va-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\";outline-offset:-2px}:root,:host{--va-tab-align-items: center;--va-tab-display: inline-flex;--va-tab-flex: 0 1 auto;--va-tab-font-weight: 600;--va-tab-line-height: normal;--va-tab-height: inherit;--va-tab-max-width: 264px;--va-tab-text-align: center;--va-tab-vertical-align: middle;--va-tab-color: inherit;--va-tab-content-align-items: center;--va-tab-content-color: inherit;--va-tab-content-display: flex;--va-tab-content-flex: 1 1 auto;--va-tab-content-height: 100%;--va-tab-content-justify-content: center;--va-tab-content-max-width: inherit;--va-tab-content-text-decoration: none;--va-tab-content-transition: $transition-primary;--va-tab-content-user-select: none;--va-tab-content-white-space: nowrap;--va-tab-content-padding: .275rem .75rem;--va-tab-content-cursor: pointer;--va-tab-icon-margin-right: .5rem}.va-tab{align-items:var(--va-tab-align-items);display:var(--va-tab-display);flex:var(--va-tab-flex);font-weight:var(--va-tab-font-weight);line-height:var(--va-tab-line-height);height:var(--va-tab-height);max-width:var(--va-tab-max-width);text-align:var(--va-tab-text-align);vertical-align:var(--va-tab-vertical-align);color:var(--va-tab-color)}.va-tab:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:2px;outline-offset:-2px}.va-tab__content{align-items:var(--va-tab-content-align-items);color:var(--va-tab-content-color);display:var(--va-tab-content-display);flex:var(--va-tab-content-flex);height:var(--va-tab-content-height);justify-content:var(--va-tab-content-justify-content);max-width:var(--va-tab-content-max-width);-webkit-text-decoration:var(--va-tab-content-text-decoration);text-decoration:var(--va-tab-content-text-decoration);transition:var(--va-tab-content-transition);-webkit-user-select:var(--va-tab-content-user-select);-moz-user-select:var(--va-tab-content-user-select);user-select:var(--va-tab-content-user-select);white-space:var(--va-tab-content-white-space);padding:var(--va-tab-content-padding);cursor:var(--va-tab-content-cursor)}.va-tab__icon{margin-right:var(--va-tab-icon-margin-right)}.va-tab.va-tab--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.va-stepper__default-controls{display:flex;gap:var(--va-stepper-controls-gap)}.va-stepper__step-button{position:relative;display:flex;flex-wrap:wrap;align-items:center;gap:var(--va-stepper-step-button-gap);flex-shrink:0;padding:var(--va-stepper-step-button-padding)}.va-stepper__step-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:var(--va-stepper-step-border-radius)}.va-stepper__step-button:after{content:\"\";position:absolute;cursor:pointer;top:0;left:0;width:100%;height:100%;background:var(--va-stepper-color);transition:opacity .3s;opacity:0;border-radius:var(--va-stepper-step-border-radius)}.va-stepper__step-button__icon{display:flex;justify-content:center;align-items:center;height:var(--va-stepper-step-button-icon-size);width:var(--va-stepper-step-button-icon-size);font-size:var(--va-stepper-step-button-number-size);color:#fff;background:var(--va-stepper-step-button-inactive-color);border-radius:var(--va-stepper-step-button-icon-border-radius)}.va-stepper__step-button--active{color:var(--va-stepper-color)}.va-stepper__step-button--active .va-stepper__step-button__icon{background:var(--va-stepper-color)}.va-stepper__step-button--disabled{opacity:var(--va-stepper-step-button-disabled-opacity);pointer-events:none}.va-stepper__step-button:hover:after{opacity:var(--va-stepper-step-button-hover-highlight-opacity)}.va-stepper__step-button--navigation-disabled:after{display:none}.va-stepper__step-button--error{color:var(--va-danger)}.va-stepper__step-button--error .va-stepper__step-button__icon{background:var(--va-danger)}:root{--va-stepper-step-button-inactive-color: var(--va-secondary);--va-stepper-step-button-hover-highlight-opacity: .1;--va-stepper-step-button-disabled-opacity: .5;--va-stepper-step-button-padding: 1rem;--va-stepper-step-button-number-size: 1.2rem;--va-stepper-step-button-icon-size: 2rem;--va-stepper-step-button-gap: .5rem;--va-stepper-step-button-icon-border-radius: 100%;--va-stepper-step-border-radius: var(--va-square-border-radius);--va-stepper-divider-color: var(--va-secondary);--va-stepper-divider-length: auto;--va-stepper-divider-min-length: 2rem;--va-stepper-divider-thickness: 1px;--va-stepper-divider-spacing: .5rem;--va-stepper-divider-vertical-margin-left: 2rem;--va-stepper-step-content-wrapper-padding: .5rem 1rem;--va-stepper-step-content-margin: .8rem 0 2rem;--va-stepper-controls-gap: 1rem}.va-stepper{display:flex;flex-direction:column}.va-stepper--vertical{flex-direction:row}.va-stepper__navigation{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.va-stepper__navigation--vertical{flex-direction:column;align-items:flex-start;flex-wrap:nowrap}.va-stepper__divider{flex-grow:1;height:var(--va-stepper-divider-thickness);width:var(--va-stepper-divider-length);min-width:var(--va-stepper-divider-min-length);margin:0 var(--va-stepper-divider-spacing);background:var(--va-stepper-divider-color)}.va-stepper__divider--vertical{min-height:var(--va-stepper-divider-min-length);height:var(--va-stepper-divider-length);width:var(--va-stepper-divider-thickness);min-width:var(--va-stepper-divider-thickness);margin:var(--va-stepper-divider-spacing) 0;margin-left:var(--va-stepper-divider-vertical-margin-left)}.va-stepper__step-content-wrapper{padding:var(--va-stepper-step-content-wrapper-padding)}.va-stepper__step-content{margin:var(--va-stepper-step-content-margin)}.va-stepper__controls{display:flex;gap:var(--va-stepper-controls-gap)}.va-time-picker-column{--va-time-picker-cell-height: 30px;--va-time-picker-column-gap-height: calc(var(--va-time-picker-cell-height) * 2);--va-time-picker-column-border-right: 1px solid var(--va-background-element);--va-time-picker-cell-width: 40px;--va-time-picker-cell-cursor: pointer;--va-time-picker-cell-active-background: var(--va-primary);--va-time-picker-cell-active-color: var(--va-primary);--va-time-picker-cell-background-color-hover: transparent;--va-time-picker-cell-active-background-opacity: .05;--va-time-picker-cell-active-background-opacity-hover: .1}.va-time-picker-column{overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;color:currentColor;height:100%;border-right:var(--va-time-picker-column-border-right)}.va-time-picker-column::-webkit-scrollbar{display:none}.va-time-picker-column:before,.va-time-picker-column:after{content:\"\";display:block;height:var(--va-time-picker-column-gap-height);width:100%}.va-time-picker-column:last-child{border-right:0}.va-time-picker-column .va-time-picker-cell{height:var(--va-time-picker-cell-height);line-height:var(--va-time-picker-cell-height);width:var(--va-time-picker-cell-width);text-align:center;cursor:var(--va-time-picker-cell-cursor);-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-time-picker-column .va-time-picker-cell--active{position:relative;color:var(--va-time-picker-cell-active-color);z-index:0}.va-time-picker-column .va-time-picker-cell--active:before{background:var(--va-time-picker-cell-active-background);position:absolute;height:100%;width:100%;left:0;right:0;content:\"\";z-index:-1;opacity:var(--va-time-picker-cell-active-background-opacity)}.va-time-picker-column .va-time-picker-cell:hover{background:var(--va-time-picker-cell-background-color-hover)}.va-time-picker-column:focus-visible{outline:none}.va-time-picker-column:focus-visible .va-time-picker-cell--active{outline:2px solid var(--va-focus)!important;border-radius:4px;outline-offset:-2px}:root,:host{--va-time-picker-display: inline-flex;--va-time-picker-disabled-opacity: .4}.va-time-picker{display:var(--va-time-picker-display);justify-content:center;overflow:hidden;height:var(--va-time-picker-height);font-family:var(--va-font-family)}.va-time-picker--readonly{position:relative}.va-time-picker--readonly:after{content:\"\";position:absolute;height:100%;width:100%;z-index:1}.va-time-picker--disabled{position:relative;opacity:var(--va-time-picker-disabled-opacity)}.va-time-picker--disabled:after{content:\"\";position:absolute;height:100%;width:100%;z-index:1}.va-time-picker--framed{position:relative}.va-time-picker--framed:before{content:\"\";height:var(--va-time-picker-cell-height);width:100%;position:absolute;top:50%;left:0;transform:translateY(-50%);border-top:1px solid var(--va-divider);border-bottom:1px solid var(--va-divider);z-index:0}:root,:host{--va-timeline-display: flex;--va-timeline-flex-wrap: nowrap;--va-timeline-vertical-flex-direction: column;--va-timeline-vertical-padding-left: .25rem;--va-timeline-vertical-padding-right: .25rem}.va-timeline{display:var(--va-timeline-display);flex-wrap:var(--va-timeline-flex-wrap);font-family:var(--va-font-family)}.va-timeline--vertical{flex-direction:var(--va-timeline-vertical-flex-direction);padding-left:var(--va-timeline-vertical-padding-left);padding-right:var(--va-timeline-vertical-padding-right)}.va-timeline--align-top .va-timeline-item__before,.va-timeline--align-top .va-timeline-item__after{flex:0}.va-timeline .va-timeline-item{flex:1}.va-timeline .va-timeline-item--vertical .va-timeline-separator--vertical .va-timeline-separator__line:first-child{flex:0 0 1rem}.va-timeline .va-timeline-item--vertical.va-timeline-item--is-first .va-timeline-separator--vertical .va-timeline-separator__line:first-child{flex-basis:2rem}.va-timeline .va-timeline-item--vertical.va-timeline-item--is-first .va-timeline-item__after,.va-timeline .va-timeline-item--vertical.va-timeline-item--is-first .va-timeline-item__before{padding-top:2rem}.va-timeline .va-timeline-item--vertical.va-timeline-item--vertical.va-timeline-item--is-last .va-timeline-item__after,.va-timeline .va-timeline-item--vertical.va-timeline-item--vertical.va-timeline-item--is-last .va-timeline-item__before{padding-bottom:2rem}:root,:host{--va-timeline-separator-display: flex;--va-timeline-separator-align-items: center;--va-timeline-separator-line-transition: background-color ease .5s;--va-timeline-separator-line-width: .125rem;--va-timeline-separator-line-height: .125rem;--va-timeline-separator-line-flex: 1;--va-timeline-separator-center-transition: background-color ease .5s;--va-timeline-separator-center-width: .5rem;--va-timeline-separator-center-height: .5rem;--va-timeline-separator-center-border-radius: .5rem;--va-timeline-separator-vertical-flex-direction: column}.va-timeline-separator{display:var(--va-timeline-separator-display);align-items:var(--va-timeline-separator-align-items)}.va-timeline-separator--vertical{flex-direction:var(--va-timeline-separator-vertical-flex-direction)}.va-timeline-separator__line{transition:var(--va-timeline-separator-line-transition);width:var(--va-timeline-separator-line-width);height:var(--va-timeline-separator-line-height);flex:var(--va-timeline-separator-line-flex)}.va-timeline-separator__center{transition:var(--va-timeline-separator-center-transition);width:var(--va-timeline-separator-center-width);height:var(--va-timeline-separator-center-height);border-radius:var(--va-timeline-separator-center-border-radius)}:root,:host{--va-timeline-item-display: flex;--va-timeline-item-flex-direction: column;--va-timeline-item-vertical-flex-direction: row;--va-timeline-item-vertical-flex-wrap: nowrap;--va-timeline-item-vertical-align-items: stretch;--va-timeline-item-title-text-align: center;--va-timeline-item-title-color: var(--va-primary);--va-timeline-item-title-font-weight: 700;--va-timeline-item-title-font-size: .8rem;--va-timeline-item-title-text-transform: uppercase;--va-timeline-item-description-margin-top: .25rem;--va-timeline-item-description-text-align: center}.va-timeline-item{display:var(--va-timeline-item-display);flex-direction:var(--va-timeline-item-flex-direction)}.va-timeline-item__before,.va-timeline-item__after{flex:1}.va-timeline-item--vertical{flex-direction:var(--va-timeline-item-vertical-flex-direction);flex-wrap:var(--va-timeline-item-vertical-flex-wrap);align-items:var(--va-timeline-item-vertical-align-items)}.va-timeline-item--vertical .va-timeline-item__before,.va-timeline-item--vertical .va-timeline-item__after{padding-top:1rem;padding-bottom:1rem}.va-timeline-item--vertical .va-timeline-item__before{padding-right:1rem}.va-timeline-item--vertical .va-timeline-item__after{padding-left:1rem}.va-timeline-item:not(.va-timeline-item--vertical) .va-timeline-item__before,.va-timeline-item:not(.va-timeline-item--vertical) .va-timeline-item__after{padding-right:1rem;padding-left:1rem}.va-timeline-item:not(.va-timeline-item--vertical) .va-timeline-item__before{padding-bottom:.5rem}.va-timeline-item:not(.va-timeline-item--vertical) .va-timeline-item__after{padding-top:.5rem}:root,:host{--va-tree-node-contents-gap: 8px;--va-tree-node-padding: 6px;--va-tree-node-border-radius: 4px;--va-tree-node-indent: 28px;--va-tree-node-content-item-flex: 0 0 var(--va-tree-node-indent);--va-tree-node-content-body-item-flex: 1;--va-tree-node-interactive-bg-opacity: .1;--va-tree-node-children-background: linear-gradient(#adb3b9 33%, rgba(255, 255, 255, 0) 0%) 15px/1px 3px repeat-y transparent}.va-tree-node-root{display:flex;padding:var(--va-tree-node-padding);position:relative}.va-tree-node-root:before{content:\"\";background-color:var(--va-primary);border-radius:var(--va-tree-node-border-radius);inset:0;opacity:0;pointer-events:none;position:absolute}.va-tree-node-root:hover:before{opacity:var(--va-tree-node-interactive-bg-opacity)}.va-tree-node-content{display:flex;flex-wrap:nowrap;align-items:center;width:100%}.va-tree-node-content__item{flex:var(--va-tree-node-content-item-flex);min-width:var(--va-tree-node-indent);line-height:1}.va-tree-node-content__body{flex:var(--va-tree-node-content-body-item-flex);width:100%}.va-tree-node-content--indent{margin-left:var(--va-tree-node-indent)}.va-tree-node-content--clickable{cursor:pointer}.va-tree-node-children{display:none;background:var(--va-tree-node-children-background);padding-left:var(--va-tree-node-indent);width:100%}.va-tree-node-children--expanded{display:block}.va-tree-node__checkbox{--va-checkbox-input-padding: 0}.va-tree-node--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-tree-node--disabled .va-tree-node-content__item--leaf{cursor:pointer;pointer-events:all}.va-tree-node:focus-visible>.va-tree-node-root{outline:2px solid var(--va-focus)!important;border-radius:2px}.va-tree-node:focus-visible>.va-tree-node-root:before{opacity:var(--va-tree-node-interactive-bg-opacity)}.va-tree-node--expand-by-node .va-tree-node-content,.va-tree-node--expand-by-leaf .va-tree-node-content__item--leaf{cursor:pointer}:root,:host{--va-tree-view-padding: .3125rem}.va-tree-view{padding:var(--va-tree-view-padding);font-family:var(--va-font-family)}:root{--va-scroll-container-scrollbar-gradient-to: var(--va-background-primary)}.va-scroll-container{scrollbar-color:var(--va-scroll-color) transparent;scrollbar-width:thin;transition:scrollbar-color .3s ease-in-out;overflow-x:var(--va-overflow-x);overflow-y:var(--va-overflow-y);width:100%;height:100%;direction:var(--va-scrollbar-position)}.va-scroll-container::-webkit-scrollbar{width:var(--va-scrollbar-size);height:var(--va-scrollbar-size)}.va-scroll-container::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-scroll-container::-webkit-scrollbar-thumb{background:var(--va-scroll-color);opacity:.3;border-radius:2px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.va-scroll-container__content{height:-webkit-fill-available;height:-moz-available;height:stretch;width:-webkit-fill-available;width:-moz-available;width:stretch;direction:ltr}:root{--va-viewer-content-overlay-background-color: rgba(0, 0, 0, .45);--va-viewer-content-overlay-z-index: var(--va-z-index-teleport-overlay);--va-viewer-content-controls-panel-padding: .75rem;--va-viewer-content-controls-panel-justify-content: flex-end;--va-viewer-content-controls-panel-background-color: rgba(0, 0, 0, .1);--va-viewer-content-controls-panel-z-index: calc(var(--va-z-index-teleport-overlay) + 50)}.va-viewer{--va-image-position: relative}.va-viewer-content{position:fixed;inset:0;z-index:var(--va-viewer-content-overlay-z-index);display:flex;justify-content:center;background-color:var(--va-viewer-content-overlay-background-color)}.va-viewer-content__main-area{--va-image-content-position: relative;display:flex}.va-viewer-content__main-area>*{width:auto;max-width:unset}.va-viewer-content__controls-panel{position:fixed;top:0;left:0;right:0;z-index:var(--va-viewer-content-controls-panel-z-index);display:flex;justify-content:var(--va-viewer-content-controls-panel-justify-content);padding:var(--va-viewer-content-controls-panel-padding);background-color:var(--va-viewer-content-controls-panel-background-color)}.va-textarea .va-input-wrapper__field{padding-top:12px;padding-bottom:12px;align-items:flex-start}.va-textarea__resize-wrapper{display:flex;overflow:hidden;width:100%;align-self:stretch}.va-textarea__resize-wrapper--resizable{resize:vertical}.va-textarea__textarea{border:0;flex:1;font-family:var(--va-font-family);width:100%;background:transparent;color:currentColor;box-sizing:content-box;min-height:1.15rem;outline:none;position:relative;resize:none;scrollbar-color:var(--va-secondary) transparent;scrollbar-width:thin;transition:scrollbar-color .3s ease-in-out}.va-textarea__textarea::-webkit-scrollbar{width:4px;height:4px}.va-textarea__textarea::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-textarea__textarea::-webkit-scrollbar-thumb{background:var(--va-secondary);opacity:.3;border-radius:2px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.va-textarea__textarea--autosize{overflow:hidden}.va-menu-item{display:table-row;cursor:pointer;position:relative;z-index:0}.va-menu-item:after{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";background:var(--va-menu-item-hover-color);opacity:0;z-index:-1;transition:all .3s ease-in-out}.va-menu-item__cell{display:table-cell;vertical-align:middle}.va-menu-item__cell--center{padding:0 var(--va-menu-padding-x);text-align:left;width:100%}.va-menu-item__cell--left,.va-menu-item__cell--right{padding:0 var(--va-menu-padding-x);text-align:center;min-width:1px;white-space:nowrap}.va-menu-item__cell--left:empty,.va-menu-item__cell--right:empty{padding:0}.va-menu-item__cell--left{padding-right:0}.va-menu-item__cell--right{padding-left:0}.va-menu-item:hover:after{background:var(--va-menu-item-hover-color);opacity:var(--va-menu-item-hover-opacity)}.va-menu-item--disabled{opacity:.5;cursor:not-allowed}.va-menu-item--keyboard-focus{outline:2px solid var(--va-focus)!important;border-radius:2px}.va-menu-list__group-name-wrapper[data-v-4dd1ae9a]{font-size:9px;font-style:normal;font-weight:700;letter-spacing:.4px;text-transform:uppercase;padding:0 var(--va-menu-padding-x);overflow:hidden;height:1rem;position:relative;color:var(--va-color-computed)}.va-menu-list__group-name-wrapper .va-menu-list__group-name[data-v-4dd1ae9a]{position:absolute;width:100%;top:0;left:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:root,:host{--va-menu-padding-x: 8px;--va-menu-padding-y: 8px;--va-menu-item-hover-color: var(--va-primary);--va-menu-item-hover-opacity: .05}.va-menu-list{overflow:auto;min-width:200px;table-layout:fixed;width:-moz-max-content;width:max-content;outline:none}.va-menu-list .va-menu-item{display:table-row;vertical-align:unset;line-height:unset}.va-menu-list td:not(.va-menu-list__virtual-td){padding-top:calc(var(--va-menu-padding-y) / 2);padding-bottom:calc(var(--va-menu-padding-y) / 2)}.va-menu-list__virtual-td:has(tr){display:table-row-group}.va-menu-list .va-divider{margin:0}body{background-color:var(--va-background-primary);color:var(--va-on-background-primary);transition:var(--va-transition)}:root,:host{--va-border: 0;--va-font-family: \"Source Sans Pro\", sans-serif;--va-letter-spacing: .0375rem;--va-block-border-radius: .375rem;--va-block-border: thin solid var(--va-background-element);--va-block-box-shadow: 0 2px 3px 0 rgba(52, 56, 85, .25);--va-control-box-shadow: none;--va-control-border: 0;--va-transition: .2s cubic-bezier(.4, 0, .6, 1);--va-swing-transition: .3s cubic-bezier(.25, .8, .5, 1);--va-outline-border-width: .125rem;--va-outline-box-shadow: none;--va-square-border-radius: .25rem;--va-form-padding: 1.25rem;--va-form-border-radius: .125rem;--va-text-selected: #b3d4fc;--va-text-highlighted: #ffc5274e;--va-link-color: var(--va-primary);--va-link-color-secondary: var(--va-secondary);--va-link-color-hover: var(--va-primary-lighten, --va-primary);--va-link-color-active: var(--va-primary);--va-link-color-visited: var(--va-primary-darken, --va-primary);--va-muted: #7f828b;--va-li-background: var(--va-primary);--va-text-block: var(--va-background-element);--va-stripe-border-size: .25rem;--va-box-shadow: 0 .25rem .5rem 0 var(--va-shadow);--va-z-index-teleport-overlay: 1000;--va-form-element-min-width: 50px;--va-form-element-default-width: 250px;--va-form-element-default-width-small: 120px;--va-form-element-border-width: 1px;--va-form-element-border-radius: .25rem;--va-gap-small: .25rem;--va-gap-medium: .375rem;--va-gap-large: .75rem}.va-background-watcher{transition:.01s background-color linear}.va-link{color:var(--va-link-color);cursor:pointer;font-family:var(--va-font-family)}.va-link:active{color:var(--va-link-color);filter:brightness(150%)}.va-link:visited{color:var(--va-link-color);filter:brightness(90%)}.va-link:hover{color:var(--va-link-color);filter:brightness(125%)}.va-link:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:2px}.va-link-secondary{color:var(--va-link-color-secondary)}.va-title{font-size:.625rem;letter-spacing:.6px;line-height:1.2;font-weight:700;text-transform:uppercase}.va-title-info{color:var(--va-info)}.va-title-danger{color:var(--va-danger)}.va-title-warning{color:var(--va-warning)}.va-text-bold{font-weight:700}.va-text-highlighted{background-color:var(--va-text-highlighted)}.va-text-left{text-align:left!important}.va-text-right{text-align:right!important}.va-text-center{text-align:center!important}.va-text-justify{text-align:justify!important}.va-text-uppercase{text-transform:uppercase!important}.va-text-lowercase{text-transform:lowercase!important}.va-text-capitalize{text-transform:capitalize!important}.va-text-no-wrap{white-space:nowrap!important}.va-text-truncate{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.va-text-code{font-size:14px;color:var(--va-dark);font-family:Source Code Pro;background-color:var(--va-background);padding:.1rem .2rem}.va-text-primary{color:var(--va-primary)}.va-text-secondary{color:var(--va-secondary)}.va-text-warning{color:var(--va-warning)}.va-text-success{color:var(--va-success)}.va-text-danger{color:var(--va-danger)}.va-text-info{color:var(--va-info)}.va-text-text-primary{color:var(--va-text-primary)}.va-text-text-inverted{color:var(--va-text-inverted)}.va-code-snippet{font-size:14px;color:#fff;padding:1rem;font-family:Source Code Pro;background-color:#34495e}.va-blockquote,.va-typography-block blockquote{border-left:.25rem solid var(--va-primary);border-radius:.125rem;padding:.4rem 0 .4rem .8rem;color:var(--va-secondary)}.va-blockquote p,.va-typography-block blockquote p{margin-bottom:.5rem}.va-blockquote p:last-child,.va-typography-block blockquote p:last-child{margin-bottom:0}.va-h1{color:currentColor;font-size:3rem;margin:.5rem 0;font-weight:700;line-height:3.5rem}.va-h2{color:currentColor;font-size:2.5rem;margin:.5rem 0;font-weight:700;line-height:3rem}.va-h3{color:currentColor;font-size:2rem;margin:.5rem 0;font-weight:700;line-height:2.5rem}.va-h4{color:currentColor;font-size:1.75rem;margin:.5rem 0;font-weight:700;line-height:2rem}.va-h5{color:currentColor;font-size:1.5rem;margin:.5rem 0;font-weight:700;line-height:1.75rem}.va-h6{color:currentColor;font-size:1.25rem;margin:.5rem 0;font-weight:700;line-height:1.5rem}ul.va-unordered{list-style:none;list-style-type:none;padding:0;margin:0;font-family:var(--va-font-family)}ul.va-unordered>li{list-style:none;padding:0 1rem;position:relative}ul.va-unordered>li:before{content:\"\";width:.5rem;height:.5rem;border-radius:50%;position:absolute;left:0;top:0;margin-top:.5rem;background-color:var(--va-li-background)}ul.va-unordered ul.va-unordered,ul.va-unordered ol.va-ordered{margin-bottom:0;margin-top:0}ol.va-ordered{list-style:none;list-style-type:none;padding:0;margin:0;font-family:var(--va-font-family);counter-reset:olCounter}ol.va-ordered>li{list-style:none;padding:0 1rem;position:relative}ol.va-ordered>li:before{counter-increment:olCounter;content:counter(olCounter) \". \";display:inline-block;min-width:.75rem;height:.75rem;position:relative;right:1rem;margin-right:-.75rem}ol.va-ordered ul.va-unordered,ol.va-ordered ol.va-ordered{margin-bottom:0;margin-top:0}.va-table th,.va-table td{text-align:left;padding:.625rem}.va-table th{font-size:.625rem;letter-spacing:.6px;line-height:1.2;font-weight:700;text-transform:uppercase;color:currentColor;border-bottom:2px solid currentColor}.va-table td{vertical-align:top}.va-table--striped tr:nth-child(2n) td{background-color:var(--va-background-element)}.va-table--hoverable tr:hover td{background-color:var(--va-background-element)}.va-table--clickable td{cursor:pointer}.va-text-block{padding:1.2rem;background-color:var(--va-background-element);color:var(--va-on-background-element, currentColor)}hr.va-separator{height:2px;background-color:var(--va-divider);border:none}p.va-paragraph{font-size:1rem;margin-top:0;margin-bottom:1rem}*,.va-typography-block{font-family:var(--va-font-family)}.va-typography-block h1{color:currentColor;font-size:3rem;margin:.5rem 0;font-weight:700;line-height:3.5rem}.va-typography-block h2{color:currentColor;font-size:2.5rem;margin:.5rem 0;font-weight:700;line-height:3rem}.va-typography-block h3{color:currentColor;font-size:2rem;margin:.5rem 0;font-weight:700;line-height:2.5rem}.va-typography-block h4{color:currentColor;font-size:1.75rem;margin:.5rem 0;font-weight:700;line-height:2rem}.va-typography-block h5{color:currentColor;font-size:1.5rem;margin:.5rem 0;font-weight:700;line-height:1.75rem}.va-typography-block h6{color:currentColor;font-size:1.25rem;margin:.5rem 0;font-weight:700;line-height:1.5rem}.va-typography-block i:not([class^=va]){font-style:italic}.va-typography-block p{font-size:1rem;margin-top:0;margin-bottom:1rem}.va-typography-block pre{margin-bottom:1rem;overflow-x:auto;white-space:inherit;word-wrap:normal;scrollbar-color:var(--va-primary) transparent;scrollbar-width:thin;transition:scrollbar-color .3s ease-in-out}.va-typography-block pre::-webkit-scrollbar{width:4px;height:4px}.va-typography-block pre::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-typography-block pre::-webkit-scrollbar-thumb{background:var(--va-primary);opacity:.3;border-radius:2px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.va-typography-block pre.code{font-size:14px;color:#fff;padding:1rem;font-family:Source Code Pro;background-color:#34495e}.va-typography-block code{display:inline-block;word-wrap:break-word}.va-typography-block strong,.va-typography-block b{font-weight:700}.va-typography-block ol:not([class^=va]){list-style:none;list-style-type:none;padding:0;margin:0;font-family:var(--va-font-family);counter-reset:olCounter}.va-typography-block ol:not([class^=va])>li{list-style:none;padding:0 1rem;position:relative}.va-typography-block ol:not([class^=va])>li:before{counter-increment:olCounter;content:counter(olCounter) \". \";display:inline-block;min-width:.75rem;height:.75rem;position:relative;right:1rem;margin-right:-.75rem}.va-typography-block ul:not([class^=va]){list-style:none;list-style-type:none;padding:0;margin:0;font-family:var(--va-font-family)}.va-typography-block ul:not([class^=va])>li{list-style:none;padding:0 1rem;position:relative}.va-typography-block ul:not([class^=va])>li:before{content:\"\";width:.5rem;height:.5rem;border-radius:50%;position:absolute;left:0;top:0;margin-top:.5rem;background-color:var(--va-li-background)}.va-typography-block figure{border-radius:0;border:none;box-sizing:border-box;box-shadow:0 4px 70px -18px #707070;word-wrap:break-word}.va-typography-block figure figcaption{flex:1 1 auto;padding:1.25rem}.va-typography-block figure p:last-child{margin-bottom:0}.va-typography-block table th,.va-typography-block table td{text-align:left;padding:.625rem}.va-typography-block table th{font-size:.625rem;letter-spacing:.6px;line-height:1.2;font-weight:700;text-transform:uppercase;color:currentColor;border-bottom:2px solid currentColor}.va-typography-block table td{vertical-align:top}.va-typography-block table--striped tr:nth-child(2n) td{background-color:var(--va-background-element)}.va-typography-block table--hoverable tr:hover td{background-color:var(--va-background-element)}.va-typography-block table--clickable td{cursor:pointer}.va-typography-block a:not([class^=va]){color:var(--va-link-color);cursor:pointer;font-family:var(--va-font-family)}.va-typography-block a:not([class^=va]):active{color:var(--va-link-color);filter:brightness(150%)}.va-typography-block a:not([class^=va]):visited{color:var(--va-link-color);filter:brightness(90%)}.va-typography-block a:not([class^=va]):hover{color:var(--va-link-color);filter:brightness(125%)}.va-typography-block a:not([class^=va]):focus-visible{outline:2px solid var(--va-focus)!important;border-radius:2px}.global-loading-bar[data-v-90964219]{position:fixed;top:0;left:0;right:0;height:3px;z-index:8000;overflow:hidden}.global-loading-bar-progress[data-v-90964219]{height:100%;width:30%;background:linear-gradient(90deg,#e79542,#f5a623,#e79542);animation:loading-slide-90964219 1.2s ease-in-out infinite}@keyframes loading-slide-90964219{0%{transform:translate(-100%)}to{transform:translate(400%)}}/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-500:oklch(63.7% .237 25.331);--color-green-500:oklch(72.3% .219 149.579);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-lg:.5rem;--shadow-xl:0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-daanse_grey:#2e2e2e;--color-primary:#154ec2;--color-secondary:#767c88;--color-success:#3d9209;--color-info:#158de3;--color-warning:#ffd43a;--color-backgroundPrimary:#f6f6f6}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{.ice_gray{padding:var(--spacing-6);box-shadow:var(--shadow-xl);filter:saturate(2);border-top-right-radius:16px;border-bottom-right-radius:16px;-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important;background:#e8e8e859!important}.ice{padding:var(--spacing-6);border-radius:16px;-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important;background:#f7f3f3d9!important}.z-mx{z-index:30000}}@layer utilities{.\\@container{container-type:inline-size}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.top-\\[-25px\\]{top:-25px}.top-\\[25px\\]{top:25px}.right-0{right:calc(var(--spacing)*0)}.isolate{isolation:isolate}.z-3000{z-index:3000}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.row-span-1{grid-row:span 1/span 1}.row-span-4{grid-row:span 4/span 4}.float-left{float:left}.float-right{float:right}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-2{margin:calc(var(--spacing)*2)}.mx-3{margin-inline:calc(var(--spacing)*3)}.my-3{margin-block:calc(var(--spacing)*3)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-6{margin-right:calc(var(--spacing)*6)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-15{margin-left:calc(var(--spacing)*15)}.ml-auto{margin-left:auto}.box-border{box-sizing:border-box}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.table-cell{display:table-cell}.h-3{height:calc(var(--spacing)*3)}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.h-40{height:calc(var(--spacing)*40)}.h-84{height:calc(var(--spacing)*84)}.h-120{height:calc(var(--spacing)*120)}.h-full{height:100%}.max-h-screen{max-height:100vh}.w-1{width:calc(var(--spacing)*1)}.w-1\\/2{width:50%}.w-3{width:calc(var(--spacing)*3)}.w-20{width:calc(var(--spacing)*20)}.w-\\[110px\\]{width:110px}.w-\\[300px\\]{width:300px}.w-full{width:100%}.max-w-xs{max-width:var(--container-xs)}.min-w-\\[350px\\]{min-width:350px}.flex-1{flex:1}.flex-shrink{flex-shrink:1}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.flex-grow{flex-grow:1}.flex-grow-0{flex-grow:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.rotate-\\[-180deg\\]{rotate:-180deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\.5{gap:calc(var(--spacing)*2.5)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-gray-200>:not(:last-child)){border-color:var(--color-gray-200)}.self-end{align-self:flex-end}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.bg-daanse_grey{background-color:var(--color-daanse_grey)}.bg-daanse_grey\\!{background-color:var(--color-daanse_grey)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-green-500{background-color:var(--color-green-500)}.bg-red-500{background-color:var(--color-red-500)}.bg-white{background-color:var(--color-white)}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.object-fill{object-fit:fill}.object-scale-down{object-fit:scale-down}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-2\\.5{padding:calc(var(--spacing)*2.5)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-2{padding-block:calc(var(--spacing)*2)}.pl-6{padding-left:calc(var(--spacing)*6)}.pl-18{padding-left:calc(var(--spacing)*18)}.text-center{text-align:center}.text-justify{text-align:justify}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-\\[1\\.5rem\\]{--tw-leading:1.5rem;line-height:1.5rem}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-wrap{text-wrap:wrap}.text-black{color:var(--color-black)}.text-gray-500{color:var(--color-gray-500)}.text-green-500{color:var(--color-green-500)}.text-red-500{color:var(--color-red-500)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.line-through{text-decoration-line:line-through}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.shadow,.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.last\\:border-none:last-child{--tw-border-style:none;border-style:none}}body{--va-sidebar-z-index:30000;--va-font-family:\"Roboto\",sans-serif;font-optical-sizing:auto;font-variation-settings:\"wdth\" 100;font-family:Roboto,sans-serif;font-style:normal;font-weight:200;--moveable-color:#b9b9b9!important}.rCS1w3zcxh{--moveable-color:#e5e4e4!important}.rCS1w3zcxh .moveable-line{transform-origin:0;width:1px;height:1px;background:0 0!important;border-bottom:2px dashed #e5e4e4!important}.va-modal__overlay{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:1!important;background:#cccccc8c!important}.va-modal{z-index:3000000!important}:root .daans{--va-button-font-weight:400}@keyframes spin{to{transform:rotate(360deg)}}.va-color-input__hidden-input{width:1px!important;height:1px!important}.resize-observer[data-v-b329ee4c]{z-index:-1;pointer-events:none;opacity:0;background-color:#0000;border:none;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.resize-observer[data-v-b329ee4c] object{pointer-events:none;z-index:-1;width:100%;height:100%;display:block;position:absolute;top:0;left:0;overflow:hidden}.v-popper__popper{z-index:10000;outline:none;top:0;left:0}.v-popper__popper.v-popper__popper--hidden{visibility:hidden;opacity:0;pointer-events:none;transition:opacity .15s,visibility .15s}.v-popper__popper.v-popper__popper--shown{visibility:visible;opacity:1;transition:opacity .15s}.v-popper__popper.v-popper__popper--skip-transition,.v-popper__popper.v-popper__popper--skip-transition>.v-popper__wrapper{transition:none!important}.v-popper__backdrop{width:100%;height:100%;display:none;position:absolute;top:0;left:0}.v-popper__inner{box-sizing:border-box;position:relative;overflow-y:auto}.v-popper__inner>div{z-index:1;max-width:inherit;max-height:inherit;position:relative}.v-popper__arrow-container{width:10px;height:10px;position:absolute}.v-popper__popper--arrow-overflow .v-popper__arrow-container,.v-popper__popper--no-positioning .v-popper__arrow-container{display:none}.v-popper__arrow-inner,.v-popper__arrow-outer{border-style:solid;width:0;height:0;position:absolute;top:0;left:0}.v-popper__arrow-inner{visibility:hidden;border-width:7px}.v-popper__arrow-outer{border-width:6px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{left:-2px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{left:-1px}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-outer{border-bottom-width:0;border-bottom-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:0}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{border-top-width:0;border-top-color:#0000!important;border-left-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-inner{top:-4px}.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-outer{top:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{top:-2px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{top:-1px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{border-left-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-left-color:#0000!important}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-inner{left:-4px}.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-outer{left:-6px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner,.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-outer{border-right-width:0;border-top-color:#0000!important;border-bottom-color:#0000!important;border-right-color:#0000!important}.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-inner{left:-2px}.v-popper--theme-tooltip .v-popper__inner{color:#fff;background:#000c;border-radius:6px;padding:7px 12px 6px}.v-popper--theme-tooltip .v-popper__arrow-outer{border-color:#000c}.v-popper--theme-dropdown .v-popper__inner{color:#000;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 6px 30px #0000001a}.v-popper--theme-dropdown .v-popper__arrow-inner{visibility:visible;border-color:#fff}.v-popper--theme-dropdown .v-popper__arrow-outer{border-color:#ddd}.va-modal .va-dropdown__content{z-index:38000}.va-dropdown__content{z-index:38000!important}.orange{background:linear-gradient(#e795423d,#4f4f4f00 18%);height:100%}@supports ((-moz-appearance:none)){.va-scroll-container__content{height:100%}}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-divide-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}.layout-renderer[data-v-a9631f22],.layout-renderer .edit-component-wrapper[data-v-a9631f22],.layout-renderer .view-component-wrapper[data-v-a9631f22]{width:100%;height:100%}.layout-renderer .no-layout-message[data-v-a9631f22],.layout-renderer .loading-state[data-v-a9631f22]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;gap:1rem}.welcome-placeholder[data-v-855c6293]{display:flex;justify-content:center;align-items:center;width:100%;height:100%;background:linear-gradient(135deg,#f5f7fa,#e4e8ec)}.welcome-content[data-v-855c6293]{text-align:center;padding:2rem;max-width:500px}.logo-container[data-v-855c6293]{position:relative;display:flex;justify-content:center;align-items:center;margin-bottom:8rem}.welcome-content[data-v-855c6293]{padding-bottom:10%}.logo-bg[data-v-855c6293]{position:absolute;width:200px;height:200px;background-image:linear-gradient(-45deg,#e19840 50%,#fff 50%);filter:blur(68px);border-radius:50%;z-index:0;margin-top:-23px}.welcome-logo[data-v-855c6293]{max-width:150px;height:auto;position:relative;z-index:1}.welcome-content h1[data-v-855c6293]{font-size:2rem;color:#333;margin-bottom:.5rem}.welcome-content p[data-v-855c6293]{color:#666;margin-bottom:2rem}.welcome-actions[data-v-855c6293]{display:flex;gap:1rem;justify-content:center;margin-bottom:2rem}.available-pages[data-v-855c6293]{margin-top:2rem;padding-top:1.5rem;border-top:1px solid #ddd}.available-pages h3[data-v-855c6293]{font-size:1rem;color:#555;margin-bottom:1rem}.page-list[data-v-855c6293]{display:flex;flex-direction:column;gap:.5rem;align-items:center}.dottet[data-v-855c6293]{background:#fafafa;background-image:radial-gradient(#b8b8b8 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-855c6293]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed #ccc;z-index:100000;pointer-events:none}.report-container[data-v-855c6293]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative}.report-container__title[data-v-855c6293]{width:100%;padding:16px;border-bottom:1px dashed #e0e0e0}.report-container .widgets-adding-controls[data-v-855c6293]{display:flex;border:1px solid #e0e0e0;border-radius:8px;margin:16px}.report-container .widget-board[data-v-855c6293]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-855c6293]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-855c6293]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-855c6293]{position:absolute}.dropdown-buttons-container[data-v-855c6293]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-855c6293]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-855c6293]{z-index:20000000!important}.add_widget-button[data-v-855c6293]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-855c6293],.v-leave-active[data-v-855c6293]{transition:opacity .5s ease}.v-enter-from[data-v-855c6293],.v-leave-to[data-v-855c6293]{opacity:0}.widgets_grid[data-v-d5d8c434]{display:grid;grid-template-columns:repeat(2,50%)}[data-v-d5d8c434] .widgets_grid-item{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#f4f4f491;border-radius:5px;margin:12px;cursor:pointer}.add_widget_window[data-v-d5d8c434]{position:absolute;height:calc(100% - 100px);width:350px;right:0;top:1px}h3[data-v-83a6e21f]{font-size:20px;padding:0;margin:0}.content[data-v-83a6e21f]{flex-grow:1;overflow:auto;width:100%}.buttons[data-v-83a6e21f]{display:flex;flex-direction:row;justify-content:flex-end;gap:1rem;padding-right:16px}.widgets_grid[data-v-83a6e21f]{display:grid;grid-template-columns:repeat(2,50%);gap:1rem}[data-v-83a6e21f] .widgets_grid-item .va-button__content{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem}.settings-header[data-v-83a6e21f]{display:flex;align-items:center;justify-content:space-between;padding:0 1rem}.uid-value[data-v-83a6e21f]{color:#c45e00;background-color:#fff3e0;border:1px solid #ffcc80;padding:.15rem .5rem;border-radius:.25rem;font-size:.7rem;user-select:all}.widget_settings_window[data-v-83a6e21f]{position:absolute;display:flex;flex-direction:column;height:calc(100% - 40px);width:400px;right:20px;top:20px;background-color:#ecf0f1;padding:1rem 0;border-radius:8px;z-index:1000000;box-shadow:0 0 10px #0000001a;overflow:hidden;gap:16px}.item{button[data-v-3afc4f7c]{visibility:hidden}&:hover{button[data-v-3afc4f7c]{visibility:visible}}}.delete-dialog[data-v-3afc4f7c]{display:flex;flex-direction:column;align-items:center;gap:.75rem;text-align:center;padding:1rem .5rem 0}.delete-dialog__message[data-v-3afc4f7c]{color:var(--va-secondary);font-size:.9rem;line-height:1.4;margin:0}.delete-dialog__actions[data-v-3afc4f7c]{display:flex;justify-content:flex-end;gap:.5rem;width:100%}.settings-container[data-v-12c56821]{display:flex;flex-direction:column;gap:1rem}.settings-block[data-v-12c56821]{display:flex;flex-direction:row;gap:12px;flex-wrap:wrap}.field[data-v-12c56821]{flex:1 1 45%;min-width:200px}.settings_window[data-v-12c56821]{position:absolute;display:flex;flex-direction:column;height:calc(100% - 40px);width:400px;right:20px;top:20px;background-color:#ecf0f1;padding:1rem 0;border-radius:8px;z-index:1000000;box-shadow:0 0 10px #0000001a;overflow-y:auto;gap:16px}.va-dropdown__content[data-v-12c56821],.va-dropdown__content{z-index:3800000!important}.ghost{display:none}.report-container:has(.minimap) .pages_board{left:300px}.ghost-placeholder[data-v-dd0f9e44]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed #ccc;z-index:1000000;pointer-events:none}.report-container[data-v-dd0f9e44]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative}.report-container__title[data-v-dd0f9e44]{width:100%;padding:16px;border-bottom:1px dashed #e0e0e0}.report-container .widgets-adding-controls[data-v-dd0f9e44]{display:flex;border:1px solid #e0e0e0;border-radius:8px;margin:16px}.report-container .widget-board[data-v-dd0f9e44]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.report-container .add-btn[data-v-dd0f9e44]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-dd0f9e44]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-dd0f9e44]{position:absolute}.dropdown-buttons-container[data-v-dd0f9e44]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-dd0f9e44]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-dd0f9e44]{z-index:20000000!important}.add_widget-button[data-v-dd0f9e44]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.pages_board[data-v-dd0f9e44]{position:absolute;display:flex;flex-direction:column;gap:10px;left:80px;bottom:20px;transition:left .2s ease}.v-enter-active[data-v-dd0f9e44],.v-leave-active[data-v-dd0f9e44]{transition:opacity .5s ease}.v-enter-from[data-v-dd0f9e44],.v-leave-to[data-v-dd0f9e44]{opacity:0}.bounce-enter-active[data-v-dd0f9e44]{animation:bounce-in-dd0f9e44 .5s}.bounce-leave-active[data-v-dd0f9e44]{animation:bounce-in-dd0f9e44 .5s reverse}@keyframes bounce-in-dd0f9e44{0%{transform:scaleY(0%) translateY(100%);opacity:0}to{transform:scaleY(1) translateY(0);opacity:1}}.variable-table-header[data-v-2a21924d]{display:flex;background-color:#f9fafb;border-bottom:1px solid rgb(229 231 235);font-size:.75rem;font-weight:500;text-transform:uppercase;letter-spacing:.05em;color:#6b7280}.variable-table-row[data-v-2a21924d]{display:flex;align-items:center}.variable-table-row[data-v-2a21924d]:hover{background-color:#f9fafb}.var-col-name[data-v-2a21924d]{flex:2;min-width:0;padding:.75rem 1rem}.var-col-type[data-v-2a21924d]{flex:1;min-width:0;padding:.75rem 1rem}.var-col-value[data-v-2a21924d]{flex:2;min-width:0;padding:.75rem 1rem}.var-col-actions[data-v-2a21924d]{flex:0 0 auto;display:flex;justify-content:flex-end;gap:.25rem;padding:.75rem 1rem}.table[data-v-23de4711] tr{border-bottom:1px solid var(--va-background-border)}.table[data-v-23de4711] tr td{white-space:normal}[data-v-23de4711] .selected{font-weight:bolder;background-color:var(--va-css-variables-hover-color)!important}.marginr[data-v-e9903dd5]{margin-right:15px}.footer[data-v-e9903dd5]{display:grid;grid-template-columns:1fr auto;align-items:center}.flexit{&[data-v-e9903dd5]{display:flex;align-content:center;flex-direction:column;justify-content:center;align-items:center}.norepo[data-v-e9903dd5]{font-size:50px;color:#c6c0c0}}.save-modal{.va-data-table__table-tr.active{.va-data-table__table-td{background:#d95050!important}}.va-modal__footer,#loadSaveModalFooter{background:#f7f7f7;padding:10px 16px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end;gap:10px}}.va-menu-item{a{color:#000}}\n";})();
import { identifier as gw, VARIABLE_WRAPPER_FACTORY as yw } from "org.eclipse.daanse.board.app.lib.factory.variableWrapper";
import { EVENT_MANAGER as hw, EVENT_ACTIONS_REGISTRY_ID as gv } from "org.eclipse.daanse.board.app.lib.api.events";
import { identifier as ir, VARIABLE_REPOSITORY as bw } from "org.eclipse.daanse.board.app.lib.api.variable";
import { withCtx as U, h as bt, Text as vm, createBlock as te, isVNode as pm, getCurrentInstance as Pt, inject as ut, computed as f, provide as Co, normalizeClass as Be, normalizeStyle as me, ref as N, shallowReadonly as Sa, isRef as yn, unref as d, reactive as Ro, capitalize as _w, defineComponent as oe, useAttrs as la, openBlock as w, resolveDynamicComponent as zt, mergeProps as se, renderSlot as H, createElementBlock as L, createCommentVNode as Y, Fragment as Le, createTextVNode as xe, toDisplayString as ke, normalizeProps as ye, guardReactiveProps as Ie, createElementVNode as E, renderList as je, watch as Se, onMounted as at, onBeforeUnmount as Gt, watchEffect as Vn, toRef as vn, nextTick as Vt, createVNode as G, Comment as mm, Suspense as Cw, Teleport as na, customRef as Sw, onUpdated as gm, shallowRef as He, Transition as ta, withDirectives as ao, vShow as Xr, withKeys as Ae, withModifiers as $e, render as Zr, toRefs as so, shallowReactive as ym, useSlots as hn, getCurrentScope as ww, onScopeDispose as $w, toHandlers as Kn, onBeforeMount as hm, resolveComponent as ze, vModelDynamic as Ls, createSlots as un, vModelText as bm, TransitionGroup as kw, onBeforeUpdate as _m, mergeDefaults as Vw, onUnmounted as Cm, mergeModels as Sm, useModel as wm, createStaticVNode as yv, createApp as xw } from "vue";
import { defineStore as Aw, createPinia as Iw, setActivePinia as Tw } from "pinia";
import { NAVIGATION_REGISTRY as Bw, NAVIGATION_REGISTRY_ID as $m, NavigationItem as hv } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID as km, RouteDefinition as bv } from "org.eclipse.daanse.board.app.lib.api.route";
import { useGlobalLoading as Pw, VariableComplexStringWrapper as Lw, VARIABLECOMPLEXSTRINGWRAPPER as Ow } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as Os, useRouter as oc, createRouter as Ew, createWebHistory as Rw } from "vue-router";
import { identifier as rl } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { identifier as ll } from "org.eclipse.daanse.board.app.lib.api.page";
import { useConnectionsStore as Jr } from "org.eclipse.daanse.board.app.ui.vue.stores.connection";
import { useDataSourcesStore as dr } from "org.eclipse.daanse.board.app.ui.vue.stores.datasouce";
import { identifier as Vm } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as xm } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { useWidgetsStore as Gr } from "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
import { identifier as Am } from "org.eclipse.daanse.board.app.lib.api.widget";
import Dw from "vuedraggable";
import { WidgetWrapperSettings as Mw } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { identifier as Fw, events as bu } from "org.eclipse.daanse.board.app.lib.repository.page";
import { VariableEvents as Nw, VariableScope as _v, VariableAccessMode as us, CONSTANT_VARIABLE as zw } from "org.eclipse.daanse.board.app.lib.variables";
import { identifier as Hw } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { useLayoutStore as cs } from "org.eclipse.daanse.board.app.ui.vue.stores.layout";
import { SystemActionsEcoreContent as Ww, WidgetAction as Uw } from "org.eclipse.daanse.board.app.lib.events";
import { loggerFactory as Im } from "org.eclipse.daanse.board.app.lib.logger";
const { APP: mw, TINY_EMITTER: mv } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Cv = {
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
}, Gw = Symbol("vaBreakpoint"), Kw = {
  xs: 0,
  sm: 640,
  md: 1024,
  lg: 1440,
  xl: 1920
}, qw = () => ({
  enabled: !0,
  bodyClass: !0,
  thresholds: Kw
}), Mu = (e, o = null) => U(() => [e], o), Sv = (e) => typeof e == "string" ? bt(vm, e) : pm(e) ? e : te(e), jw = (e, o = null) => Object.keys(e).reduce((t, a) => {
  const l = e[a];
  return t[a] = typeof l == "function" ? l : Mu(l, o), t;
}, {}), Yw = (e) => {
  const o = e.render || e.ssrRender;
  if (!o)
    return;
  const t = o.name === "_sfc_render" || o.name === "_sfc_ssrRender";
  return function(...a) {
    const l = a[0], s = l.$.slots, i = new Proxy(l, {
      get(p, v) {
        return v === "$slots" ? jw(s) : p[v];
      }
    }), c = t ? void 0 : i;
    return o.call(c, i, ...a.slice(1));
  };
}, bo = (e, o) => Object.keys(e).filter((t) => !o.includes(t)).reduce((t, a) => (t[a] = e[a], t), {}), Fu = "child:", Tm = "$va:childComponents", Bm = (e) => Object.keys(e).reduce((o, t) => {
  const a = `${Fu}${t}`;
  return o[a] = {
    type: Object,
    required: !1,
    default: void 0
  }, o;
}, {}), Pm = (e) => {
  const o = f(() => Object.keys(e).reduce((a, l) => {
    if (l.startsWith(Fu)) {
      const s = l.slice(Fu.length);
      a[s] = e[l];
    }
    return a;
  }, {}));
  Co(Tm, o);
}, ac = () => {
  var e;
  const o = (e = Pt()) == null ? void 0 : e.attrs["va-child"];
  if (!o)
    return null;
  const t = ut(Tm);
  return t?.value ? f(() => t.value[o]) : null;
}, Xw = /([a-z0-9])([A-Z])/g, Zw = (e) => e.replace(Xw, "$1-$2").toLowerCase(), Jw = (e, o) => o in e ? e[o] : e[Zw(o)], Qw = (e, o) => {
  const t = e.props, a = ac();
  return new Proxy(t, {
    get: (l, s) => {
      var i, c;
      if (typeof s != "string")
        return l[s];
      const p = (i = a?.value) == null ? void 0 : i[s];
      if (p !== void 0)
        return p;
      const v = e.vnode.props || {}, m = l[s];
      if (Jw(v, s) !== void 0)
        return m;
      const y = (c = o.value) == null ? void 0 : c[s];
      return y !== void 0 ? y : m;
    }
  });
}, e$ = (e, o) => {
  const t = e.attrs;
  return new Proxy(t, {
    get: (a, l) => {
      var s;
      if (typeof l != "string")
        return a[l];
      if (l === "class")
        return Be([o.value.class, t.class]);
      if (l === "style")
        return me([o.value.style, t.style]);
      const i = (s = o.value) == null ? void 0 : s[l];
      return i !== void 0 ? i : a[l];
    },
    ownKeys(a) {
      return [.../* @__PURE__ */ new Set([...Object.keys(t), ...Object.keys(o.value)])];
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(o.value, l) ?? Reflect.getOwnPropertyDescriptor(t, l);
    }
  });
}, _u = "slot:", t$ = (e, o) => {
  const t = e.slots, a = ac(), l = f(() => Object.keys(o.value).reduce((s, i) => (i.startsWith(_u) && (s[i.slice(_u.length)] = o.value[i]), s), {}));
  return new Proxy(t, {
    get: (s, i) => {
      var c, p;
      if (typeof i != "string")
        return s[i];
      const v = `${_u}${i}`, m = (c = a?.value) == null ? void 0 : c[v];
      if (m !== void 0)
        return Mu(Sv(m));
      const g = s[i];
      if (g !== void 0)
        return g;
      const y = (p = l.value) == null ? void 0 : p[i];
      return y !== void 0 ? Mu(Sv(y)) : g;
    },
    ownKeys(s) {
      return [.../* @__PURE__ */ new Set([...Object.keys(t), ...Object.keys(l.value)])];
    },
    getOwnPropertyDescriptor(s, i) {
      return Reflect.getOwnPropertyDescriptor(l.value, i) ?? Reflect.getOwnPropertyDescriptor(t, i);
    }
  });
}, Lm = "VaLocalConfig", n$ = f(() => []);
function rc() {
  return ut(Lm, n$);
}
function Om(e) {
  Co(Lm, e);
}
function o$(e) {
  const o = rc(), t = f(() => [...o.value, e.value]);
  Om(t);
}
const a$ = [null, void 0, ""], r$ = [null, void 0], $n = (e) => a$.includes(e), wv = (e) => !$n(e), Cu = (e) => r$.includes(e), l$ = typeof process < "u" ? process : {}, s$ = l$.env || {}, i$ = s$.NODE_ENV || "", yr = typeof __DEV__ < "u" ? __DEV__ : !["prod", "production"].includes(i$), yt = (...e) => (yr && console.warn(...e), !1), u$ = (e) => {
  throw new Error(`[Vuestic] ${e}`);
};
let Nu = null, zr = null;
const $v = (e) => {
  zr?._instance === null && (zr = null), !(e === null && zr === null) && (zr = Nu, Nu = e);
}, lc = () => Nu, Em = (e, o = void 0) => {
  var t;
  const a = (t = lc()) == null ? void 0 : t._context.provides[e];
  return Pt() ? ut(e, o) : a ?? u$("You're using Vuestic composable outside Vue app. Since you registered Vuestic in multiple apps, composables can not be used outside setup function anymore.");
}, xa = (e) => e !== null && typeof e == "object", ka = (e) => e === null || typeof e != "object" ? e : Array.isArray(e) ? e.map(ka) : e instanceof Date ? new Date(e.getTime()) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Map ? new Map(Array.from(e.entries()).map(([o, t]) => [o, ka(t)])) : e instanceof Set ? new Set(Array.from(e.values()).map(ka)) : xa(e) ? Object.keys(e).reduce((o, t) => (o[t] = ka(e[t]), o), {}) : e, Su = (e) => e && typeof e == "object" && !Array.isArray(e), Aa = (e, o) => (Su(e) || (e = {}), Object.keys(o).forEach((t) => {
  const a = e[t], l = o[t];
  l instanceof RegExp || l instanceof Date ? e[t] = l : Su(a) && Su(l) ? e[t] = Aa(Object.create(
    Object.getPrototypeOf(a),
    Object.getOwnPropertyDescriptors(a)
  ), l) : e[t] = l;
}), e), c$ = (...e) => e.reduce((o, t) => Aa(o, t), {}), d$ = [
  {
    prefix: "bg",
    property: "background-color"
  },
  {
    prefix: "text",
    property: ["color", "fill"]
  }
], f$ = () => d$, Rm = (e) => ({
  ...e,
  get variables() {
    return this.presets[this.currentPresetName];
  },
  set variables(o) {
    this.presets[this.currentPresetName] = o;
  }
}), v$ = () => Rm({
  threshold: 150,
  presets: {
    light: Cv.light,
    dark: Cv.dark
  },
  currentPresetName: "light"
}), p$ = (e) => e, m$ = p$([
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
]), g$ = [
  {
    name: "mi-{icon}",
    class: "material-icons",
    resolve: ({ icon: e }) => ({ content: e })
  },
  // Fallback
  {
    name: "{icon}",
    class: "material-icons",
    resolve: ({ icon: e }) => ({ content: e })
  }
], y$ = (e) => (e.aliases = e.aliases || [], e.fonts = e.fonts || [], [
  ...e.aliases,
  ...m$,
  ...e.fonts,
  ...g$
]), h$ = () => y$({}), b$ = () => (
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
          plain: !0,
          hoverBehavior: "mask",
          hoverOpacity: 0.15,
          pressedBehavior: "mask",
          pressedOpacity: 0.13
        },
        plainOpacity: {
          plain: !0,
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
          cursor: !0,
          placement: "right-start",
          trigger: "right-click"
        }
      }
    }
  }
), _$ = () => ({
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
}), Es = Symbol("GLOBAL_CONFIG"), C$ = () => ({
  colors: v$(),
  icons: h$(),
  components: b$(),
  breakpoint: qw(),
  i18n: _$(),
  colorsClasses: f$(),
  /**
   * global config variable to pass nuxt-link component to vuestic-ui via @vuestic/nuxt
   * TODO: give a try to integrate inertia js router components via this option
   * TODO: if this try won't be success, may be remake to provide/inject
   */
  routerComponent: void 0
}), Dm = (e = {}) => {
  const o = N(Aa(C$(), e));
  return {
    getGlobalConfig: () => o.value,
    setGlobalConfig: (s) => {
      const i = typeof s == "function" ? s(o.value) : s;
      o.value = ka(i);
    },
    mergeGlobalConfig: (s) => {
      const i = typeof s == "function" ? s(o.value) : s;
      o.value = Aa(ka(o.value), i);
    },
    globalConfig: o
  };
}, S$ = (e) => {
  var o, t;
  const a = ((o = Pt()) == null ? void 0 : o.appContext.provides) || ((t = lc()) == null ? void 0 : t._context.provides);
  if (!a)
    throw new Error("Vue app not found for provide");
  return a[Es] = e, e;
};
function Mo() {
  let e = Em(Es);
  return e || (e = Dm(), S$(e)), e;
}
const w$ = (e) => "preset" in e, kv = (e) => w$(e) ? e.preset : void 0, $$ = (e, o) => {
  const t = rc(), { globalConfig: a } = Mo(), l = e.name, s = (c) => (c instanceof Array ? c : [c]).reduce((p, v) => {
    var m, g, y;
    const b = (y = (g = (m = a.value.components) == null ? void 0 : m.presets) == null ? void 0 : g[l]) == null ? void 0 : y[v];
    if (!b)
      return p;
    const C = kv(b);
    return {
      ...p,
      ...C ? s(C) : void 0,
      ...b
    };
  }, {}), i = ac();
  return f(() => {
    var c, p;
    const v = {
      ...(c = a.value.components) == null ? void 0 : c.all,
      ...(p = a.value.components) == null ? void 0 : p[l]
    }, m = t.value.reduce((b, C) => {
      const _ = C[l];
      return _ ? { ...b, ..._ } : b;
    }, {}), g = [
      o,
      i?.value,
      m,
      v
    ].filter(wv).map(kv).filter(wv).at(0), y = g ? s(g) : void 0;
    return { ...v, ...m, ...y };
  });
}, k$ = (e) => (o, t) => {
  var a;
  const l = Pt(), s = $$(e, o), i = f(() => bo(s.value, Object.keys(o))), c = Qw(l, s), p = e$(l, i), v = t$(l, s);
  l.props = c, l.attrs = p, l.slots = v;
  const m = (a = e.setup) == null ? void 0 : a.call(e, Sa(c), {
    ...t,
    attrs: p,
    slots: v
  });
  return typeof m == "object" && !l.exposed && t.expose(m), m;
}, zu = (e) => {
  const o = k$(e), t = Yw(e);
  return new Proxy(e, {
    get(a, l) {
      return l in e ? l === "setup" ? o : l === "render" || l === "ssrRender" ? t : Reflect.get(a, l) : Reflect.get(a, l);
    }
  });
}, Hu = "__c", V$ = (e) => (e[Hu] = zu(e[Hu]), e), Fo = (e) => "setup" in e ? zu(e) : Hu in e ? V$(e) : (e.setup = () => ({
  /* Fake setup function */
}), zu(e)), we = Fo, x$ = {
  defaultSize: 48,
  sizes: {
    small: 32,
    medium: 48,
    large: 64
  }
}, A$ = {
  defaultSize: 1,
  sizes: {
    small: 0.75,
    medium: 1,
    large: 1.25
  }
}, Ea = {
  size: {
    type: [String, Number],
    default: "",
    validator: (e) => typeof e == "string" || typeof e == "number"
  },
  sizesConfig: {
    type: Object,
    default: () => x$
  },
  fontSizesConfig: {
    type: Object,
    default: () => A$
  }
}, I$ = /(?<fontSize>\d+)(?<extension>px|rem)/i, Vv = (e) => e / 16 - 0.5, xv = (e) => typeof e == "number" ? `${e}px` : String(e), T$ = (e) => "sizesConfig" in e, B$ = (e) => {
  const o = "size";
  return f(() => {
    let t = e[o];
    if (T$(e)) {
      const { defaultSize: a, sizes: l } = e.sizesConfig;
      if ($n(t) && (t = a), l) {
        const s = l[t];
        if (s)
          return xv(s);
      }
    }
    return xv(t);
  });
}, Ra = (e, o = ((t) => (t = Pt()) == null ? void 0 : t.type.name)()) => {
  const { getGlobalConfig: t } = Mo(), a = f(() => {
    var c, p;
    return o ? (p = (c = t().components) == null ? void 0 : c[o]) == null ? void 0 : p.sizesConfig : void 0;
  }), l = f(() => {
    var c, p, v;
    const { defaultSize: m, sizes: g } = e.sizesConfig, y = (c = a.value) == null ? void 0 : c.defaultSize;
    if (!e.size)
      return `${m || y}px`;
    if (typeof e.size == "string") {
      const b = (v = (p = a.value) == null ? void 0 : p.sizes) == null ? void 0 : v[e.size], C = g[e.size];
      return C ? `${C}px` : b ? `${b}px` : e.size;
    }
    return `${e.size}px`;
  }), s = f(() => {
    const { defaultSize: c, sizes: p } = e.fontSizesConfig;
    if (!e.size)
      return c;
    if (typeof e.size == "string") {
      if (e.size in p)
        return p[e.size];
      const v = e.size.match(I$);
      if (!v || !v.groups)
        throw new Error("Size prop should be either valid string or number");
      const { extension: m, fontSize: g } = v.groups;
      return m === "rem" ? +g : Vv(+g);
    }
    return Vv(e.size);
  }), i = f(() => `${s.value}rem`);
  return {
    sizeComputed: l,
    fontSizeComputed: i,
    fontSizeInRem: s
  };
}, Ee = {
  preset: {
    type: [String, Array],
    default: void 0
  }
}, P$ = (e, o) => o.test(e), Mm = (e, o) => {
  if (typeof o != "string" && o.global)
    return [...e.matchAll(o)].map((a) => a.slice(1));
  const t = e.match(o) || [];
  return t ? t.length > 1 ? t.slice(1) : t : [];
}, Fm = /{[^}]*}/g, Nm = (e) => e.replace(Fm, "(.*)"), L$ = (e) => (e.match(Fm) || []).map((o) => o.replace(/{|}/g, "")), O$ = (e, o) => Mm(e, Nm(o)), E$ = (e, o) => {
  const t = L$(o), a = O$(e, o);
  return t.reduce((l, s, i) => ({ ...l, [s]: a[i] }), {});
}, R$ = (e, o) => (e.match(o) || [])[0] === e, D$ = (e, o) => {
  const t = Nm(o);
  return R$(e, new RegExp(t));
}, zm = (e) => typeof e.name == "string", Hm = (e) => e.name instanceof RegExp, M$ = (e, o) => zm(o) ? D$(e, o.name) : Hm(o) ? P$(e, o.name) : !1, F$ = (e, o) => {
  const t = E$(e, o.name);
  return o.resolve && o.resolve(t);
}, N$ = (e, o) => {
  if (o.name.global)
    throw new Error(`Bad icon config with name ${o.name}. Please, don't use global regex as name.`);
  const t = Mm(e, o.name);
  return o.resolveFromRegex && o.resolveFromRegex(...t);
}, z$ = (e, o) => {
  if (zm(o))
    return F$(e, o);
  if (Hm(o))
    return N$(e, o);
  throw Error("Unknown icon config");
}, H$ = (e, o, t = []) => {
  const a = o.find((l) => t.includes(l.name.toString()) ? !1 : M$(e, l));
  if (!a)
    throw new Error(`Can not find icon config from ${e}. Please provide default config.`);
  return a;
}, Wm = (e, o, t = []) => {
  if (!e)
    return;
  const a = H$(e, o, t), l = Aa(z$(e, a), a);
  return t = [...t, a.name.toString()], Aa(
    Wm(l.to, o, t),
    l
  );
}, W$ = (e) => {
  const o = ["name", "to", "resolve", "resolveFromRegex"], t = e;
  return o.forEach((a) => {
    delete t[a];
  }), t;
}, U$ = (e, o) => {
  const t = Wm(e, o);
  return t === void 0 ? {} : W$(t);
}, G$ = () => {
  const { globalConfig: e } = Mo();
  return {
    getIcon: (o) => U$(o, e.value.icons)
  };
}, No = (e) => e, Um = Symbol("VaAppCachePlugin"), K$ = No(() => ({
  install(e) {
    const o = {
      colorContrast: {}
    };
    e.provide(Um, o);
  }
})), q$ = () => {
  const e = Em(Um);
  return e || {
    colorContrast: {}
  };
}, Gm = (e) => {
  const o = typeof e == "function" ? f(e) : f(e), t = new Proxy(o, {
    get(a, l, s) {
      if (typeof o.value == "object")
        return d(Reflect.get(o.value, l, s));
    },
    set(a, l, s) {
      return yn(o.value[l]) && !yn(s) ? o.value[l].value = s : o.value[l] = s, !0;
    },
    deleteProperty(a, l) {
      return Reflect.deleteProperty(o.value, l);
    },
    has(a, l) {
      return typeof o.value != "object" ? !1 : Reflect.has(o.value, l);
    },
    ownKeys() {
      return typeof o.value != "object" ? [] : Object.keys(o.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Ro(t);
}, Km = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), j$ = /[A-Z0-9]*(?:[^\-_|A-Z|\s.])*/gm, sc = (e) => {
  var o;
  return ((o = e.match(j$)) == null ? void 0 : o.map((t) => t.trim().split(/([0-9]+)|([a-zA-Z]+)/g)).flat().filter(Boolean)) || [];
}, Qr = (e) => sc(e).map((o) => o.toLowerCase()).join("-"), Y$ = (e) => sc(e).map((o, t) => t === 0 ? o.toLowerCase() : Km(o)).join(""), Av = (e) => sc(e).map(Km).join(" "), qm = /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6,8})$/, jm = /^rgba?\(([\d.]+, ?){2}[\d.]+(, ?[\d.]+)?\)$/, Ym = /hsla?\([\d.]+(deg|rad|turn|grad)?(,?\s?[\d.]+%?){2}(,?\s?(\/\s?)?[\d.]+%?)?\)/, X$ = (e) => qm.test(e) || jm.test(e) || Ym.test(e), ic = (e) => typeof e != "object" || e === null ? !1 : "h" in e && "s" in e && "l" in e, uc = (e) => typeof e != "object" || e === null ? !1 : "r" in e && "g" in e && "b" in e, Xm = (e) => {
  if (!qm.test(e))
    return null;
  const o = e.replace("#", ""), t = o.length < 6, [a, l, s, i] = t ? o.split("").map((c) => parseInt(c + c, 16)) : o.match(/.{2}/g).map((c) => parseInt(c, 16));
  return { r: a, g: l, b: s, a: i ?? 1 };
}, Zm = (e) => {
  if (!jm.test(e))
    return null;
  const [o, t, a, l = 1] = e.match(/[\d.]+/g).map(Number);
  return { r: o, g: t, b: a, a: l };
}, Jm = (e) => {
  if (!Ym.test(e))
    return null;
  const [o, t, a, l = "1"] = e.match(/[\d.]+%?/g);
  return {
    h: Number(o),
    s: Number(t.replace("%", "")),
    l: Number(a.replace("%", "")),
    a: l.endsWith("%") ? Number(l.replace("%", "")) / 100 : Number(l)
  };
}, Iv = (e) => {
  const o = e.r / 255, t = e.g / 255, a = e.b / 255, l = Math.max(o, t, a), s = Math.min(o, t, a);
  let i = 0, c = 0;
  const p = (l + s) / 2;
  if (l !== s) {
    const v = l - s;
    switch (c = p > 0.5 ? v / (2 - l - s) : v / (l + s), l) {
      case o:
        i = (t - a) / v + (t < a ? 6 : 0);
        break;
      case t:
        i = (a - o) / v + 2;
        break;
      case a:
        i = (o - t) / v + 4;
        break;
    }
    i *= 60;
  }
  return { h: Math.round(i), s: Math.round(c * 100), l: Math.round(p * 100), a: e.a };
}, wu = (e, o, t) => (t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (o - e) * 6 * t : t < 1 / 2 ? o : t < 2 / 3 ? e + (o - e) * (2 / 3 - t) * 6 : e), Tv = (e) => {
  const o = e.h / 360, t = e.s / 100, a = e.l / 100, l = a < 0.5 ? a * (1 + t) : a + t - a * t, s = 2 * a - l, i = wu(s, l, o + 1 / 3), c = wu(s, l, o), p = wu(s, l, o - 1 / 3);
  return { r: Math.round(i * 255), g: Math.round(c * 255), b: Math.round(p * 255), a: e.a };
}, sl = (e) => {
  if (ic(e))
    return { ...e };
  if (uc(e))
    return Iv(e);
  const o = Xm(e) ?? Zm(e);
  if (o)
    return Iv(o);
  const t = Jm(e);
  if (t)
    return t;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, cc = ({ h: e, s: o, l: t, a }) => `hsla(${e},${o}%,${t}%,${a ?? 1})`, el = (e) => {
  if (uc(e))
    return { ...e };
  if (ic(e))
    return Tv(e);
  const o = Jm(e);
  if (o)
    return Tv(o);
  const t = Xm(e) ?? Zm(e);
  if (t)
    return t;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, qr = ({ r: e, g: o, b: t, a }) => a === 1 ? `rgb(${e},${o},${t})` : `rgba(${e},${o},${t},${a ?? 1})`, Z$ = (e) => {
  if (ic(e))
    return cc(e);
  if (uc(e))
    return qr(e);
  if (typeof e == "string")
    return e;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, J$ = (e, { h: o, s: t, l: a, a: l }) => {
  const s = sl(e);
  return s.a = s.a ?? 1, s.h = o ?? s.h, s.s = t ?? s.s, s.l = a ?? s.l, s.a = l ?? s.a, s.h < 0 && (s.h = 360 + s.h), s.h > 360 && (s.h = s.h - 360), s.s = Math.max(0, Math.min(100, s.s)), s.l = Math.max(0, Math.min(100, s.l)), s.a = Math.max(0, Math.min(1, s.a)), s;
}, Q$ = (e, { h: o, s: t, l: a, a: l }) => {
  const s = sl(e);
  return s.a = s.a ?? 1, s.h += o ?? 0, s.s += t ?? 0, s.l += a ?? 0, s.a += l ?? 0, s.h < 0 && (s.h = 360 + s.h), s.h > 360 && (s.h = s.h - 360), s.s = Math.max(0, Math.min(100, s.s)), s.l = Math.max(0, Math.min(100, s.l)), s.a = Math.max(0, Math.min(1, s.a)), s;
}, ek = (e) => /var\(--.+\)/.test(e), $s = (e) => `--va-${Qr(e)}`, Bv = (e) => Y$(e), Da = (e, o) => {
  const { r: t, g: a, b: l } = el(e);
  return qr({ r: t, g: a, b: l, a: o });
}, Pv = (e) => {
  const { r: o, g: t, b: a } = el(e);
  return Math.sqrt(o * o * 0.241 + t * t * 0.691 + a * a * 0.068);
}, Qm = (e, o = 0.4) => Da(e, o), tk = (e, o = 0.4) => Da(e, o), eg = (e, o = 0.2) => Da(e, o), tg = (e, o = 0.3) => Da(e, o), wa = (e, o) => cc(Q$(sl(e), o)), nk = (e, o) => cc(J$(sl(e), o)), ok = (e) => {
  const o = sl(e);
  if (o.s < 10)
    return wa(o, { h: 2, s: 5, l: 10 });
  if (o.s < 30)
    return wa(o, { s: -14, l: 11 });
  if (o.h >= 0 && o.h < 44 || o.h >= 285)
    return wa(o, { h: 11, s: 27, l: 8 });
  if (o.h >= 44 && o.h < 85)
    return wa(o, { h: 3, l: 9 });
  if (o.h >= 85 && o.h < 165)
    return wa(o, { h: 16, l: 14 });
  if (o.h >= 165 && o.h < 285)
    return wa(o, { h: -15, s: 3, l: 2 });
  throw new Error("This method should handle all colors. But it didn't for some reason.");
}, dc = (e) => `linear-gradient(to right, ${ok(e)}, ${Z$(e)})`, ak = (e, o, t) => {
  const a = Da(o, t);
  return `linear-gradient(0deg, ${a}, ${a}), ${e}`;
}, rk = (e, o) => {
  const t = el(e), a = el(o), l = a.a;
  return qr(l === 1 ? a : l === 0 ? t : {
    r: Math.round(t.r * (1 - l) + a.r * l),
    g: Math.round(t.g * (1 - l) + a.g * l),
    b: Math.round(t.b * (1 - l) + a.b * l),
    a: t.a
  });
}, lk = (e) => e ? e === "transparent" ? !0 : el(e).a <= 0.1 : !1, fc = {
  color: {
    type: String,
    default: ""
  }
}, Ke = () => {
  const e = Mo();
  if (!e)
    throw new Error("useColors must be used in setup function or Vuestic GlobalConfigPlugin is not registered!");
  const { globalConfig: o } = e, t = Gm({
    get: () => o.value.colors.presets[o.value.colors.currentPresetName],
    set: (S) => {
      a(S);
    }
  }), a = (S) => {
    o.value.colors.presets[o.value.colors.currentPresetName] = {
      ...o.value.colors.variables,
      ...S
    };
  }, l = () => t, s = (S, $, A) => {
    if ($ || ($ = t.primary), S === "transparent")
      return "#ffffff00";
    if (S === "currentColor")
      return S;
    if (S?.startsWith("on")) {
      const T = S.slice(2);
      if (t[Bv(T)])
        return s(y(s(T)), void 0, A);
    }
    S || (S = s($));
    const x = t[S] || t[Bv(S)];
    return x ? A ? `var(${$s(S)})` : x : X$(S) || A && ek(S) ? S : (yt(`'${S}' is not a proper color! Use HEX or default color themes
      names (https://vuestic.dev/en/styles/colors#default-color-themes)`), s($));
  }, i = (S) => f({
    get() {
      return s(S);
    },
    set($) {
      a({ [S]: $ });
    }
  }), c = (S, $ = "va") => Object.keys(S).filter((A) => S[A] !== void 0).reduce((A, x) => (A[`--${$}-${Qr(x)}`] = s(S[x], void 0, !0), A[`--${$}-on-${Qr(x)}`] = s(y(s(S[x])), void 0, !0), A), {}), p = q$(), v = (S) => typeof S != "string" ? Pv(S) : (p.colorContrast[S] || (p.colorContrast[S] = Pv(S)), p.colorContrast[S]), m = f(() => v(s("textPrimary")) > 255 / 2 ? "textInverted" : "textPrimary"), g = f(() => v(s("textPrimary")) > 255 / 2 ? "textPrimary" : "textInverted"), y = (S, $, A) => {
    const x = `on${_w(String(S))}`;
    return t[x] ? t[x] : ($ = $ || m.value, A = A || g.value, v(S) > o.value.colors.threshold ? $ : A);
  }, b = f({
    get: () => o.value.colors.currentPresetName,
    set: (S) => {
      _(S);
    }
  }), C = f(() => o.value.colors.presets), _ = (S) => {
    if (o.value.colors.currentPresetName = S, !o.value.colors.presets[S])
      return yt(`Preset ${S} does not exist`);
  };
  return {
    colors: t,
    currentPresetName: b,
    presets: C,
    applyPreset: _,
    setColors: a,
    getColors: l,
    getColor: s,
    getComputedColor: i,
    getBoxShadowColor: Qm,
    getBoxShadowColorFromBg: tk,
    getHoverColor: eg,
    getFocusColor: tg,
    getGradientBackground: dc,
    getTextColor: y,
    shiftHSLAColor: wa,
    setHSLAColor: nk,
    colorsToCSSVariable: c,
    colorToRgba: Da,
    getStateMaskGradientBackground: ak
  };
}, ng = /* @__PURE__ */ oe({
  name: "VaIcon",
  __name: "VaIcon",
  props: {
    ...Ea,
    ...Ee,
    name: { type: String, default: "" },
    tag: { type: String },
    component: { type: Object },
    color: { type: String },
    rotation: { type: [String, Number] },
    spin: { type: [String, Boolean] },
    flip: {
      type: String,
      default: "off",
      validator: (e) => ["off", "horizontal", "vertical", "both"].includes(e)
    }
  },
  setup(e) {
    const o = e, { getColor: t } = Ke(), { sizeComputed: a } = Ra(o), { getIcon: l } = G$(), s = f(() => l(o.name)), i = f(() => o.component || o.tag || s.value.component || s.value.tag || "i"), c = la(), p = f(() => ({ ...s.value.attrs, ...bo(c, ["class"]) })), v = (_) => {
      if (!(_ === void 0 || _ === !1))
        return _ === "counter-clockwise" ? "va-icon--spin-reverse" : "va-icon--spin";
    }, m = f(() => [
      s.value.class,
      v(o.spin ?? s.value.spin)
    ]), g = f(() => {
      const _ = o.rotation ? `rotate(${o.rotation}deg)` : "", S = o.flip === "vertical" || o.flip === "both" ? -1 : 1, $ = o.flip === "horizontal" || o.flip === "both" ? -1 : 1;
      return `${o.flip === "off" ? "" : `scale(${S}, ${$})`} ${_}`.trim();
    }), y = f(() => ({
      transform: g.value,
      cursor: c.onClick ? "pointer" : null,
      color: o.color ? t(o.color, void 0, !0) : s.value.color,
      fontSize: a.value,
      height: a.value,
      lineHeight: a.value
    })), b = f(() => c.tabindex ?? -1), C = f(() => c.role !== "button" || b.value < 0);
    return (_, S) => (w(), te(zt(i.value), se({
      class: ["va-icon", m.value],
      style: y.value,
      "aria-hidden": C.value,
      notranslate: ""
    }, p.value), {
      default: U(() => [
        H(_.$slots, "default", {}, () => [
          s.value.content ? (w(), L(Le, { key: 0 }, [
            xe(ke(s.value.content), 1)
          ], 64)) : Y("", !0)
        ])
      ]),
      _: 3
    }, 16, ["class", "style", "aria-hidden"]));
  }
}), ot = we(ng), sk = () => {
  const e = Pt(), o = e?.appContext.app, { globalProperties: t } = o.config;
  return "$vaGlobalVariable" in t || (t.$vaGlobalVariable = Ro({})), t.$vaGlobalVariable;
}, og = (e, o) => {
  const t = sk();
  return e in t || (t[e] = o), f({
    get: () => t[e],
    set: (a) => {
      t[e] = a;
    }
  });
}, So = () => {
  const e = Pt(), o = og("uuidCounter", 0);
  return e.$vaUuid = e.$vaUuid || `va-${o.value++}`, `va-${o.value}`;
}, ik = (e) => {
  const t = `message-list-${So()}`, a = f(() => ({
    id: t,
    role: "alert"
  })), l = f(() => !!(typeof e.modelValue == "string" && e.modelValue.length > 0 || Array.isArray(e.modelValue) && e.modelValue.length > 0)), s = f(() => ({
    "aria-describedby": l.value ? t : void 0,
    "aria-invalid": e.hasError
  }));
  return {
    messageListAttributes: a,
    childAttributes: s
  };
}, et = (e) => {
  const o = Pt().props;
  return f(() => {
    const a = o?.[e];
    return a === void 0 ? a : Number(a);
  });
}, uk = { class: "va-message-list__list" }, ck = /* @__PURE__ */ oe({
  name: "VaMessageList",
  inheritAttrs: !1,
  __name: "VaMessageList",
  props: {
    modelValue: {
      type: [String, Array],
      default: ""
    },
    limit: { type: [Number, String], default: 1 },
    color: { type: String },
    hasError: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const t = e, { getColor: a } = Ke(), { childAttributes: l, messageListAttributes: s } = ik(t), i = et("limit"), c = f(() => t.modelValue ? Array.isArray(t.modelValue) ? t.modelValue.slice(0, i.value) : [t.modelValue] : []), p = f(() => t.color ? { color: a(t.color) } : {});
    return o({
      messages: c
    }), (v, m) => (w(), L(Le, null, [
      H(v.$slots, "default", ye(Ie({ ariaAttributes: d(l), messages: c.value, attrs: v.$attrs }))),
      H(v.$slots, "messages", ye(Ie({ ariaAttributes: d(s), messages: c.value })), () => [
        c.value.length > 0 ? (w(), L("div", se({
          key: 0,
          class: "va-message-list",
          style: p.value
        }, d(s)), [
          E("ul", uk, [
            (w(!0), L(Le, null, je(c.value, (g, y) => (w(), L("li", {
              key: y,
              class: "va-message-list__message"
            }, [
              H(v.$slots, "message", ye(Ie({ messages: c.value, message: g })), () => [
                e.hasError ? (w(), te(d(ot), {
                  key: 0,
                  class: "va-message-list__icon",
                  name: "va-warning",
                  size: 16
                })) : Y("", !0),
                xe(ke(g), 1)
              ])
            ]))), 128))
          ])
        ], 16)) : Y("", !0)
      ])
    ], 64));
  }
}), Rs = we(ck);
function Ia(e, o, t, a) {
  const l = Pt(), s = f(() => {
    const p = o[e];
    return l?.vnode.props ? e in l.vnode.props && l.vnode.props[e] !== void 0 : p !== void 0;
  });
  if (a === void 0)
    return [
      f({
        set(p) {
          t(`update:${e}`, p);
        },
        get() {
          return o[e];
        }
      })
    ];
  const i = o[e], c = N(i === void 0 ? a : i);
  return Se(() => o[e], (p) => {
    p !== void 0 && (c.value = p);
  }), [
    f({
      set(p) {
        c.value = p, t(`update:${e}`, p);
      },
      get() {
        return s.value ? o[e] : c.value;
      }
    })
  ];
}
const dk = (e) => typeof e == "object" && "_setter" in e, fk = (e, o) => {
  if (!dk(e))
    return;
  const t = e._setter;
  e._setter = (a) => {
    o(a), t(a);
  };
}, tl = (e) => typeof e == "function", ks = (e) => typeof e == "string", ag = Symbol("FormService"), rg = (e) => {
  const o = ut(ag, null);
  if (!o)
    return {
      forceDirty: N(!1),
      forceHideErrorMessages: N(!1),
      forceHideErrors: N(!1),
      forceHideLoading: N(!1),
      fields: f(() => []),
      registerField: () => {
      },
      unregisterField: () => {
      },
      immediate: f(() => !1)
    };
  const t = So();
  return at(() => {
    o.registerField(t, e);
  }), Gt(() => {
    o.unregisterField(t);
  }), o;
}, Lv = (e = [], o = null) => (ks(e) && (e = [e]), e.map((t) => tl(t) ? t(o) : t)), zo = {
  name: { type: String, default: void 0 },
  rules: { type: Array, default: () => [] },
  dirty: { type: Boolean, default: !1 },
  error: { type: Boolean, default: void 0 },
  errorMessages: { type: [Array, String], default: void 0 },
  errorCount: { type: [String, Number], default: 1 },
  success: { type: Boolean, default: !1 },
  messages: { type: [Array, String], default: () => [] },
  immediateValidation: { type: Boolean, default: !1 },
  modelValue: {}
}, sa = ["update:error", "update:errorMessages", "update:dirty"], ds = (e) => typeof e == "object" && typeof e.then == "function", vk = (e, o, t) => {
  const a = N(o.dirty || !1);
  return fk(e, () => {
    a.value = !0, t("update:dirty", !0);
  }), Se(e, (l, s) => {
    l === s && (a.value = !0);
  }, { deep: !0 }), Se(() => o.dirty, (l) => {
    a.value !== l && (a.value = l);
  }), { isDirty: a };
}, pk = () => {
  const e = N(!1);
  return { isTouched: e, onBlur: () => {
    e.value = !0;
  } };
}, mk = (e) => {
  let o = !0;
  return (...t) => {
    if (!o)
      return;
    o = !1;
    const a = e(...t);
    return Vt(() => {
      o = !0;
    }), a;
  };
}, Ho = (e, o, t) => {
  const { reset: a, focus: l } = t, [s] = Ia("error", e, o, !1), [i] = Ia("errorMessages", e, o, []), c = N(!1), { isTouched: p, onBlur: v } = pk(), m = f(() => ({
    "aria-invalid": s.value,
    "aria-errormessage": typeof i.value == "string" ? i.value : i.value.join(", ")
  })), g = () => {
    i.value = [], s.value = !1, _.value = !1, p.value = !1, c.value = !1;
  }, y = (P) => {
    let R = !1, J = [];
    return P.forEach((de) => {
      ks(de) ? (J = [...J, de], R = !0) : de === !1 && (R = !0);
    }), i.value = J, s.value = R, !R;
  }, b = async () => {
    if (!e.rules || !e.rules.length)
      return !0;
    const P = Lv(e.rules.flat(), t.value.value), R = P.filter((de) => ds(de)), J = P.filter((de) => !ds(de));
    return R.length ? (c.value = !0, Promise.all(R).then((de) => y([...J, ...de])).finally(() => {
      c.value = !1;
    })) : y(J);
  }, C = mk(() => {
    if (!e.rules || !e.rules.length)
      return !0;
    const P = e.rules.flat(), R = Lv(P, t.value.value), J = R.filter((M) => ds(M)), de = R.filter((M) => !ds(M)), ne = de.some((M) => ks(M) ? M : M === !1);
    return J.length && !ne ? (c.value = !0, Promise.all(J).then((M) => {
      y([...de, ...M]), c.value = !1;
    }), ne) : y(de);
  });
  Vn(() => C());
  const { isDirty: _ } = vk(t.value, e, o), {
    // Renamed to forceHideError because it's not clear what it does
    forceHideErrors: S,
    forceHideLoading: $,
    forceHideErrorMessages: A,
    forceDirty: x,
    immediate: T
  } = rg({
    isTouched: p,
    isDirty: _,
    isValid: f(() => !s.value),
    isLoading: c,
    errorMessages: i,
    validate: C,
    validateAsync: b,
    resetValidation: g,
    focus: l,
    reset: () => {
      a(), g(), C();
    },
    value: f(() => t.value || e.modelValue),
    name: vn(e, "name")
  }), O = f(() => e.immediateValidation || T.value);
  let D = !0;
  const V = (P) => {
    D = !1, P(), Vt(() => {
      D = !0;
    });
  };
  return Se(t.value, () => {
    if (D)
      return C();
  }, { immediate: O.value }), {
    isDirty: _,
    isValid: f(() => !s.value),
    isError: s,
    isTouched: p,
    isLoading: f({
      get: () => S.value ? !1 : O.value || p.value || _.value || x.value ? c.value : !1,
      set(P) {
        c.value = P;
      }
    }),
    computedError: f(() => S.value ? !1 : O.value || p.value || _.value || x.value ? s.value : !1),
    computedErrorMessages: f(() => A.value ? [] : i.value),
    listeners: { onBlur: v },
    validate: C,
    resetValidation: g,
    withoutValidation: V,
    validationAriaAttributes: m
  };
}, gk = { class: "va-message-list-wrapper" }, Ds = /* @__PURE__ */ oe({
  name: "VaMessageListWrapper",
  __name: "VaMessageListWrapper",
  props: {
    ...zo
  },
  setup(e) {
    const o = e, t = f(() => o.error ? "danger" : o.success ? "success" : ""), a = vn(o, "error"), l = f(() => o.error ? o.errorMessages : o.messages), s = f(() => o.error ? Number(o.errorCount) : 99);
    return (i, c) => (w(), L("div", gk, [
      G(d(Rs), {
        color: t.value,
        limit: s.value,
        "has-error": a.value,
        "model-value": l.value,
        "inherit-slots": ["message"]
      }, {
        default: U((p) => [
          H(i.$slots, "default", ye(Ie(p)))
        ]),
        _: 3
      }, 8, ["color", "limit", "has-error", "model-value"])
    ]));
  }
}), yk = (e) => {
  const { globalConfig: o, mergeGlobalConfig: t, setGlobalConfig: a, getGlobalConfig: l } = Mo(), s = f(() => {
    var i;
    const c = ka(o.value), p = {
      ...c,
      colors: Rm(c.colors)
    }, v = Aa(p, e.value);
    return (i = e.value.colors) != null && i.variables && Object.keys(e.value.colors.variables).forEach((m) => {
      v.colors.variables[m] = e.value.colors.variables[m];
    }), v;
  });
  return Co(Es, {
    mergeGlobalConfig: t,
    setGlobalConfig: a,
    getGlobalConfig: l,
    globalConfig: s
  }), s;
}, jr = (e, o) => {
  if (!e)
    return null;
  if (!("type" in e) || e.type === vm || typeof e == "string")
    return bt("div", o, e);
  if (e.type === mm)
    return e;
  if ("$el" in e)
    return jr(e.$el, o);
  if (e.type === Cw)
    return bt(e.ssContent, o);
  if (e.type === na) {
    if (e.children === null)
      return e;
    const t = jr(e.children[0], o);
    return t && (e.children[0] = bt(t, o)), e;
  }
  if (e.type === Le)
    return e.children === null ? e : e.children.length === 1 ? bt(Le, e.props, [jr(e.children[0], o)]) : bt("div", o, e);
  if (typeof e.type.render == "function") {
    const t = bt(e, o);
    if (Array.isArray(t.children) && t.children.length > 1)
      return bt("div", o, t.children);
  }
  return bt(e, o);
}, Ov = (e, o = {}, t = {}) => {
  const a = e?.(o);
  if (!a)
    return null;
  const l = a.filter((s) => s.type !== mm);
  return l.length === 0 ? null : l.length === 1 ? jr(l[0], t) : bt("div", {
    ...t,
    class: Be([t.class, "va-headless-wrapper"])
  }, a);
}, lg = (e, o = {}, t = {}) => {
  const a = e?.(o);
  return a ? a.map((l) => jr(l, t)) : null;
}, hk = oe({
  name: "VaCssVarsRenderer",
  inheritAttrs: !1,
  setup(e, { slots: o, attrs: t }) {
    const { colorsToCSSVariable: a, colors: l } = Ke(), s = f(() => a(l));
    return () => bt(Le, t, lg(o.default, {}, {
      style: s.value
    }) || void 0);
  }
}), il = /* @__PURE__ */ oe({
  name: "VaConfig",
  inheritAttrs: !1,
  __name: "VaConfig",
  props: {
    ...Ee,
    components: { type: Object, default: () => ({}) },
    colors: { type: Object },
    i18n: { type: Object }
  },
  setup(e) {
    const o = e, t = rc(), a = f(() => [...t.value, o.components]);
    Om(a), yk(f(() => {
      const s = {};
      return o.colors && (s.colors = o.colors), o.i18n && (s.i18n = o.i18n), s;
    }));
    const l = f(() => !!o.colors);
    return (s, i) => l.value ? (w(), te(d(hk), ye(se({ key: 0 }, s.$attrs)), {
      default: U(() => [
        H(s.$slots, "default")
      ]),
      _: 3
    }, 16)) : H(s.$slots, "default", { key: 1 });
  }
}), bk = {
  class: "va-separator",
  "aria-hidden": "true"
}, _k = /* @__PURE__ */ oe({
  name: "VaSeparator",
  __name: "VaSeparator",
  setup(e) {
    return (o, t) => (w(), L("div", bk));
  }
}), Ck = {
  class: "va-spacer",
  "aria-hidden": "true"
}, Sk = /* @__PURE__ */ oe({
  name: "VaSpacer",
  __name: "VaSpacer",
  setup(e) {
    return (o, t) => (w(), L("div", Ck));
  }
}), wk = (e) => {
  if (!e)
    return 0;
  const o = e.offsetWidth - e.clientWidth, t = e.offsetHeight - e.clientHeight;
  return Math.max(o, t);
}, $k = (e) => {
  const o = N({ top: 0, left: 0, width: 0, height: 0, bottom: 0, right: 0 });
  let t, a;
  const l = () => {
    e.value && (o.value = e.value.getBoundingClientRect());
  };
  return at(() => {
    t = new ResizeObserver(l), a = new MutationObserver(l), e.value && t.observe(e.value), e.value && a.observe(e.value, { attributes: !0, childList: !0, subtree: !0 }), window.addEventListener("resize", l), window.addEventListener("scroll", l), l();
  }), Gt(() => {
    t?.disconnect(), a?.disconnect(), window.removeEventListener("resize", l), window.removeEventListener("scroll", l), t = void 0, a = void 0;
  }), o;
}, Ma = () => typeof window > "u", vc = () => !Ma(), sg = () => typeof window > "u" ? void 0 : window, kk = {}, go = () => Ma() ? typeof globalThis > "u" ? kk : globalThis : window, ig = (e) => {
  const o = f(vc), t = N(null);
  return Se(o, () => {
    o.value && (t.value = e());
  }, { immediate: !0 }), t;
}, Ms = () => ig(() => window), Mt = (e) => {
  if (e && typeof e == "object" && (e = d(e), !!e))
    return typeof e.$el < "u" ? e.$el : e;
}, Wu = (e, ...o) => {
  if (!(!e || typeof e != "object")) {
    if ("addEventListener" in e && typeof e.addEventListener == "function") {
      e.addEventListener(...o);
      return;
    }
    "parentElement" in e && Wu(e.parentElement, ...o);
  }
}, Uu = (e, ...o) => {
  if (!(!e || typeof e != "object")) {
    if ("removeEventListener" in e && typeof e.removeEventListener == "function") {
      e.removeEventListener(...o);
      return;
    }
    "parentElement" in e && Uu(e.parentElement, ...o);
  }
}, $t = (e, o, t) => {
  const a = t && typeof t != "boolean" ? t : Ms(), l = typeof t == "boolean" ? t : !1;
  Se(a, (s, i) => {
    Array.isArray(e) ? e.forEach((c) => {
      Wu(Mt(d(s)), c, o, l), Uu(Mt(d(i)), c, o, l);
    }) : (Wu(Mt(d(s)), e, o, l), Uu(Mt(d(i)), e, o, l));
  }, { immediate: !0 });
}, Ev = (e) => {
  if (Array.isArray(e))
    return e.map(d);
  const o = d(e);
  return Array.isArray(o) ? o : [o];
}, Ta = (e, o) => {
  let t;
  const a = (l) => {
    l.forEach((s) => {
      const i = d(s);
      if (i) {
        if (!(i instanceof Element))
          throw console.error("Vuestic: Trying to observe non-HTMLElement", {
            target: i,
            array: e
          }), new Error("Vuestic: Unable to observe non-HTMLElement");
        i && t?.observe(i);
      }
    });
  };
  return Se(e, (l) => {
    t?.disconnect(), a(Ev(l));
  }), at(() => {
    t = new ResizeObserver(o), a(Ev(e));
  }), Gt(() => t?.disconnect()), t;
}, Vk = /* @__PURE__ */ oe({
  __name: "VaStickyScrollbar",
  props: {
    el: {},
    direction: { default: "horizontal" },
    offset: { default: 0 }
  },
  setup(e) {
    const o = e, t = N(null), a = et("offset"), l = f(() => {
      var m;
      return o.el ? o.el : ((m = t.value) == null ? void 0 : m.parentNode) ?? null;
    }), s = $k(l), i = f(() => {
      const m = l.value;
      if (!m)
        return {};
      const g = m, y = wk(g), { bottom: b, left: C, right: _, top: S } = s.value;
      return o.direction === "vertical" ? C > window.innerWidth ? { display: "none" } : _ < window.innerWidth ? { display: "none" } : {
        position: "fixed",
        top: `${S}px`,
        right: 0,
        height: `${g.clientHeight}px`,
        overflowY: "auto",
        overflowX: "hidden"
      } : S > window.innerHeight ? { display: "none" } : b < window.innerHeight ? { display: "none" } : {
        position: "fixed",
        top: `${Math.min(b, window.innerHeight) - y - Number(a.value)}px`,
        width: `${g.clientWidth}px`,
        overflowX: "auto",
        overflowY: "hidden"
      };
    });
    $t("scroll", (m) => {
      var g, y;
      t.value && (o.direction === "horizontal" ? (g = l.value) == null || g.scrollTo({
        left: t.value.scrollLeft
      }) : (y = l.value) == null || y.scrollTo({
        top: t.value.scrollTop
      }));
    }, t), $t("scroll", (m) => {
      var g, y, b, C;
      if (t.value)
        if (o.direction === "horizontal") {
          if (((g = l.value) == null ? void 0 : g.scrollLeft) === t.value.scrollLeft)
            return;
          t.value.scrollTo({
            left: (y = l.value) == null ? void 0 : y.scrollLeft
          });
        } else {
          if (((b = l.value) == null ? void 0 : b.scrollTop) === t.value.scrollTop)
            return;
          t.value.scrollTo({
            top: (C = l.value) == null ? void 0 : C.scrollTop
          });
        }
    }, l);
    const c = N(0), p = N(0);
    Ta(f(() => l.value ? [...l.value.children] : []), () => {
      c.value = l.value.scrollWidth, p.value = l.value.scrollHeight;
    });
    const v = f(() => o.direction === "vertical" ? {
      width: "1px",
      height: `${p.value}px`
    } : {
      height: "1px",
      width: `${c.value}px`
    });
    return (m, g) => (w(), L("div", {
      style: me(i.value),
      ref_key: "currentEl",
      ref: t
    }, [
      E("div", {
        style: me(v.value)
      }, null, 4)
    ], 4));
  }
}), Fs = () => {
  const e = N(!1);
  return at(() => {
    e.value = !0;
  }), Gt(() => {
    e.value = !1;
  }), e;
}, Gu = (e) => {
  const o = Pt();
  let t = () => {
  };
  const a = Sw((l, s) => (t = s, {
    get() {
      var i;
      return l(), (i = o.proxy) == null ? void 0 : i.$refs[e];
    },
    set(i) {
    }
  }));
  return at(t), gm(t), a;
}, ug = (e) => {
  let o;
  return e.startsWith("rgba") ? o = e.substring(5, e.length - 1).split(",") : o = e.substring(4, e.length - 1).split(","), o[0] = Number(o[0]), o[1] = Number(o[1]), o[2] = Number(o[2]), o[3] === void 0 ? o[3] = 1 : o[3] = Number(o[3]), o;
}, Rv = (e) => "#" + (e[0] | 256).toString(16).slice(1) + (e[1] | 256).toString(16).slice(1) + (e[2] | 256).toString(16).slice(1) + (e[3] * 255 | 256).toString(16).slice(1), xk = (e) => {
  const o = [];
  let t = e;
  for (; t; ) {
    if (!(t instanceof HTMLElement) || !t)
      return o;
    const { backgroundColor: a, willChange: l } = window.getComputedStyle(t), s = l.includes("background"), i = ug(a);
    if (i[3] === 1 && !s)
      return o.push(t), o;
    (i[3] !== 0 || s) && o.push(t), t = t.parentElement;
  }
  return o;
}, Dv = "va-background-watcher", Ak = (e, o) => (e.className = Dv + " " + e.className, e.addEventListener("transitionend", (t) => {
  t.target === e && o();
}), () => {
  e.className = e.className.replace(Dv, ""), e.removeEventListener("transitionend", o);
}), Ik = (e, o) => {
  const t = e.map((a) => Ak(a, o));
  return () => {
    t.forEach((a) => a());
  };
}, Tk = (e, o) => {
  const t = o[3];
  if (t === 1)
    return o;
  if (t === 0)
    return e;
  const a = Math.round(e[0] * (1 - t) + o[0] * t), l = Math.round(e[1] * (1 - t) + o[1] * t), s = Math.round(e[2] * (1 - t) + o[2] * t);
  return [a, l, s, 1];
}, Mv = (e) => {
  let o = [0, 0, 0, 0];
  for (let t = e.length - 1; t >= 0; t--)
    o = Tk(o, ug(window.getComputedStyle(e[t]).backgroundColor));
  return o;
}, cg = (e) => {
  const o = N("#000000");
  let t = () => {
  };
  return Vn(() => {
    if (t(), e.value) {
      const a = xk(e.value);
      t = Ik(a, () => {
        o.value = Rv(Mv(a));
      }), o.value = Rv(Mv(a));
    }
  }), o;
}, dg = (e) => e.config.globalProperties, oa = (e, o, t) => {
  const a = dg(e);
  a[o] = t;
}, Bk = (e, o) => dg(e)[o], Pk = No((e = {}) => ({
  install(o) {
    const t = Dm(e);
    e?.componentsAll && console.warn("Global config -> `componentsAll` was moved to Global config -> components.all. Please replace this to make it work. More info here: https://github.com/epicmaxco/vuestic-ui/issues/1967"), o.provide(Es, t), oa(o, "$vaConfig", t);
  }
})), pc = (e, o) => {
  if (Ma())
    return;
  let t = document.getElementById(e);
  t ? t.innerHTML = o() : (t = document.createElement("style"), t.setAttribute("type", "text/css"), t.setAttribute("id", e), t.innerHTML = o(), document.head.append(t));
}, Lk = (e) => {
  var o;
  (o = document.getElementById(e)) == null || o.remove();
}, Fv = (e, o) => `${$s(e)}: ${o};
`, $u = "data-va-app", Nv = (e) => `va-color-variables-${e}`, Ok = (e, o) => {
  const { colors: t, getTextColor: a, getColor: l, currentPresetName: s } = Ke(), i = (b = t) => {
    if (!b)
      return;
    const C = Object.keys(b), _ = C.map(($) => `${$s($)}: ${b[$]}`).join(";"), S = C.map(($) => `${$s(`on-${$}`)}: ${l(a(b[$]))}`).join(";");
    return `${_};${S}`;
  }, c = (b = t, C = ":root, :host") => {
    const _ = Object.keys(b);
    let S = `${C} {
`;
    return _.forEach(($) => {
      S += Fv($, b[$]);
    }), _.forEach(($) => {
      S += Fv(`on-${$}`, l(a(b[$])));
    }), S += `}
`, S;
  }, p = f(() => e._uid), v = f(() => ":root, :host"), m = (b) => {
    if (!b || Ma())
      return;
    const C = c(b, v.value);
    pc(Nv(p.value), () => C);
  };
  function g() {
    return { [$u]: p.value };
  }
  const y = e.mount;
  return e.mount = function(...b) {
    const C = y.apply(this, b), _ = e._container, S = _.getAttribute($u);
    return S && S !== p.value.toString() && Lk(Nv(S)), _.setAttribute($u, p.value.toString()), C;
  }, Se(t, (b) => {
    m(b);
  }, { immediate: !0, deep: !0 }), {
    colors: t,
    currentPresetName: s,
    getAppStylesRootAttribute: g,
    renderCSSVariables: i,
    updateColors: m,
    renderCSSVariablesStyleContent: c
  };
}, Ek = No((e) => ({
  install(o) {
    oa(o, "$vaColorConfig", Ok(o));
  }
}));
let Rk = 0;
const ku = (e = 4) => Math.random().toString(36).substring(2, e + 2), fg = () => `${ku(8)}-${ku(4)}-${ku(4)}-${++Rk}`;
function Dk() {
  const e = Ro({
    width: void 0,
    height: void 0
  }), o = () => {
    e.width = window?.innerWidth, e.height = window?.innerHeight;
  }, t = f(vc);
  return Se(t, (a) => {
    a && o();
  }, { immediate: !0 }), $t("resize", o, !0), { windowSizes: e };
}
const Fa = () => ig(() => document), Mk = (e) => {
  var o;
  const t = (o = Bk(e, "$vaConfig")) == null ? void 0 : o.globalConfig;
  if (!t)
    return yt("createBreakpointConfigPlugin: globalConfig is not defined!"), {};
  const a = f(() => {
    const y = t.value.breakpoint;
    return y || yt("createBreakpointConfigPlugin: breakpointConfig is not defined!"), y ?? {};
  });
  if (!a.value.enabled)
    return {};
  if (!a.value.thresholds || !Object.values(a.value.thresholds).length)
    return yt("createBreakpointConfigPlugin: there are no defined thresholds!"), {};
  const { windowSizes: l } = Dk(), s = f(vc), i = f(() => {
    if (!(!s.value || !l.width))
      return Object.entries(a.value.thresholds).reduce((y, [b, C]) => (l.width >= C && (y = b), y), "xs");
  }), c = f(() => Object.keys(a.value.thresholds).reduce((y, b) => (y[b] = `va-screen-${b}`, y), {})), p = () => {
    let y = "";
    return Object.values(a.value.thresholds).forEach((b, C) => {
      y += `@media screen and (min-width: ${b}px) {`, y += `:root { --va-media-ratio: ${(C + 1) * 0.2} }`, y += `}
`;
    }), y;
  }, v = f(fg);
  pc(`va-helpers-media-${v.value}`, p);
  const m = Fa();
  Se(i, (y) => {
    !y || !a.value.bodyClass || !m.value || (m.value.body.classList.forEach((b) => {
      Object.values(c.value).includes(b) && m.value.body.classList.remove(b);
    }), m.value.body.classList.add(c.value[y]));
  }, { immediate: !0 });
  const g = f(() => {
    const y = i.value === "xs", b = i.value === "sm", C = i.value === "md", _ = i.value === "lg", S = i.value === "xl";
    return {
      xs: y,
      sm: b,
      md: C,
      lg: _,
      xl: S,
      smUp: b || C || _ || S,
      mdUp: C || _ || S,
      lgUp: _ || S,
      smDown: y || b,
      mdDown: y || b || C,
      lgDown: y || b || C || _
    };
  });
  return Gm(() => ({
    width: l.width,
    height: l.height,
    current: i.value,
    thresholds: a.value.thresholds,
    ...g.value
  }));
}, Fk = No(() => ({
  install(e) {
    const o = Mk(e);
    e.provide(Gw, o), oa(e, "$vaBreakpoint", o);
  }
})), Nk = 5, _a = N([]), zk = (e) => {
  var o;
  return ((o = e.component) == null ? void 0 : o.props) || {};
}, Hk = (e) => e.el ? e.el.offsetHeight + Nk : 0, Wk = (e) => {
  const o = Pt(), t = f(() => {
    const a = _a.value.findIndex((l) => l === o.vnode);
    return a === -1 ? 0 : _a.value.slice(a + 1).reduce((l, s) => {
      const {
        position: i
      } = zk(s), { position: c } = e;
      return c === i ? Hk(s) + l : l;
    }, 0);
  });
  return at(() => {
    _a.value.unshift(o.vnode);
  }), Gt(() => {
    _a.value = _a.value.filter((a) => a !== o.vnode);
  }), {
    yOffset: t,
    updateYOffset: () => {
      _a.value = _a.value.filter((a) => a !== o.vnode);
    }
  };
}, Uk = () => {
  let e;
  return {
    start: (...a) => (e = window.setTimeout(...a), e),
    clear: () => e && window.clearTimeout(e)
  };
}, Gk = (e) => e.startsWith("$t:"), Fe = (e) => ({ type: String, default: e }), zv = (e, o) => (o && Object.keys(o).forEach((t) => {
  e = e.replace(`{${t}}`, String(o[t]));
}), e), Ct = () => {
  const { globalConfig: e } = Mo(), o = f(() => e.value.i18n);
  function t(l, s) {
    var i;
    const c = (i = Pt()) == null ? void 0 : i.appContext.config.globalProperties.$t;
    if (typeof c == "function") {
      const v = c(`vuestic.${l}`, s);
      if (v)
        return v;
    }
    const p = o.value[l];
    return p ? zv(p, s) || l : (yt(`${l} not found in VuesticUI i18n config`), l);
  }
  function a(l, s) {
    return l ? Gk(l) ? t(l.slice(3), s) : zv(l, s) || l : "";
  }
  return {
    tp: a,
    t
  };
}, Kt = (e, o = !1) => {
  const { props: t } = Pt(), { getColor: a, getTextColor: l } = Ke();
  return { textColorComputed: f(() => {
    if (t.textColor)
      return a(t.textColor);
    const i = e ? d(e) : t.color;
    if (!i)
      return "currentColor";
    const c = a(i);
    return lk(c) ? "currentColor" : d(o) ? c : a(l(c));
  }) };
}, Kk = ["role", "aria-live"], qk = { class: "va-toast__group" }, jk = ["textContent"], Yk = { class: "va-toast__content" }, Xk = ["innerHTML"], Zk = ["textContent"], Jk = {
  key: 1,
  class: "va-toast__content"
}, Qk = /* @__PURE__ */ oe({
  name: "VaToast",
  __name: "VaToast",
  props: {
    ...Ee,
    title: { type: String, default: "" },
    offsetY: { type: [Number, String], default: 16 },
    offsetX: { type: [Number, String], default: 16 },
    message: { type: [String, Function], default: "" },
    dangerouslyUseHtmlString: { type: Boolean, default: !1 },
    icon: { type: String, default: "close" },
    customClass: { type: String, default: "" },
    duration: { type: [Number, String], default: 5e3 },
    color: { type: String, default: "primary" },
    closeable: { type: Boolean, default: !0 },
    onClose: { type: Function },
    onClick: { type: Function },
    multiLine: { type: Boolean, default: !1 },
    position: {
      type: String,
      default: "top-right",
      validator: (e) => ["top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left"].includes(e)
    },
    render: { type: Function },
    ariaCloseLabel: Fe("$t:close"),
    role: { type: String, default: void 0 },
    inline: { type: Boolean, default: !1 }
  },
  emits: ["on-click", "on-close"],
  setup(e, { emit: o }) {
    const t = oe({
      name: "VaToastRenderer",
      props: {
        render: { type: Function, required: !0 }
      },
      setup: (ne) => () => ne.render()
    }), { tp: a } = Ct(), l = e, s = o, i = He(), { getColor: c } = Ke(), { textColorComputed: p } = Kt(f(() => c(l.color))), v = et("offsetY"), m = et("offsetX"), g = et("duration"), y = N(!1), {
      yOffset: b,
      updateYOffset: C
    } = Wk(l), _ = f(() => ({
      vertical: l.position.includes("top") ? "top" : "bottom",
      horizontal: l.position.includes("center") ? "center" : l.position.includes("right") ? "right" : "left"
    })), S = () => {
      const ne = _.value.vertical, M = _.value.horizontal;
      return M === "center" ? {
        [ne]: `${v.value + b.value}px`,
        left: "50%",
        "--va-toast-x-shift": "-50%"
      } : {
        [ne]: `${v.value + b.value}px`,
        [M]: `${m.value}px`
      };
    }, $ = f(() => [
      l.customClass,
      l.multiLine ? "va-toast--multiline" : "",
      l.inline ? "va-toast--inline" : "",
      [`va-toast--${l.position}`]
    ]), A = f(() => ({
      ...S(),
      backgroundColor: c(l.color),
      color: p.value
    })), x = f(() => l.role === "status" ? "polite" : "assertive"), T = f(() => typeof l.message == "function" ? l.message() : l.message), O = () => {
      var ne, M;
      (ne = i.value) == null || ne.removeEventListener("transitionend", O), (M = i.value) == null || M.remove();
    }, D = () => {
      typeof l.onClick == "function" ? l.onClick() : s("on-click");
    }, V = () => {
      y.value = !1, C();
    }, P = () => {
      typeof l.onClose == "function" ? l.onClose() : s("on-close"), O();
    }, R = Uk(), J = R.clear, de = () => {
      g.value > 0 && R.start(() => y.value && V(), g.value);
    };
    return at(() => {
      y.value = !0, de();
    }), (ne, M) => (w(), te(ta, {
      name: "va-toast-fade",
      onAfterLeave: P
    }, {
      default: U(() => [
        ao(E("div", {
          ref_key: "rootElement",
          ref: i,
          role: ne.$props.role ?? ne.$props.closeable ? "alertdialog" : "alert",
          "aria-live": x.value,
          "aria-atomic": "true",
          class: Be(["va-toast", $.value]),
          style: me(A.value),
          onMouseenter: M[0] || (M[0] = //@ts-ignore
          (...j) => d(J) && d(J)(...j)),
          onMouseleave: de,
          onClick: D
        }, [
          E("div", qk, [
            ne.$props.title ? (w(), L("h2", {
              key: 0,
              class: "va-toast__title",
              textContent: ke(ne.$props.title)
            }, null, 8, jk)) : Y("", !0),
            ao(E("div", Yk, [
              ne.$props.dangerouslyUseHtmlString ? (w(), L("div", {
                key: 0,
                innerHTML: T.value
              }, null, 8, Xk)) : (w(), L("p", {
                key: 1,
                textContent: ke(T.value)
              }, null, 8, Zk))
            ], 512), [
              [Xr, ne.$props.message]
            ]),
            ne.$props.render ? (w(), L("div", Jk, [
              G(d(t), {
                render: ne.$props.render
              }, null, 8, ["render"])
            ])) : Y("", !0),
            ne.$props.closeable ? (w(), te(ng, {
              key: 2,
              class: "va-toast__close-icon",
              role: "button",
              "aria-label": d(a)(ne.$props.ariaCloseLabel),
              tabindex: "0",
              size: "1rem",
              name: ne.$props.icon,
              onClick: $e(V, ["stop"]),
              onKeydown: Ae($e(V, ["stop"]), ["enter"])
            }, null, 8, ["aria-label", "name", "onKeydown"])) : Y("", !0)
          ])
        ], 46, Kk), [
          [Xr, y.value]
        ])
      ]),
      _: 1
    }));
  }
}), vg = Fo(Qk);
let nl = 1;
go().vaToastInstances = [];
const mc = (e) => {
  var o;
  return ((o = e.component) == null ? void 0 : o.props) || {};
}, eV = (e, o) => {
  if (!e)
    return;
  if (!go().vaToastInstances.length) {
    nl = 1;
    return;
  }
  go().vaToastInstances.findIndex((a) => a === e) < 0 || (o(), go().vaToastInstances = go().vaToastInstances.reduce((a, l, s) => l === e ? a : [...a, l], []), go().vaToastInstances.length || (nl = 1));
}, tV = (e, o) => {
  e && (Zr(null, e), e.remove()), e = null;
}, nV = (e, {
  props: o,
  children: t,
  element: a,
  appContext: l
} = {}) => {
  let s = a, i;
  return i = G(e, { ...o, onClose: () => {
    eV(i, () => tV(s)), o?.onClose && o.onClose();
  } }, t), l && (i.appContext = l), s ? Zr(i, s) : typeof document < "u" && Zr(i, s = document.createElement("div")), { vNode: i, el: s };
}, pg = (e) => {
  if (!go().vaToastInstances.length) {
    nl = 1;
    return;
  }
  go().vaToastInstances.forEach((o) => {
    e && o.appContext !== e || mc(o).onClose();
  });
}, Ku = (e) => {
  const o = go().vaToastInstances.find((t) => {
    var a;
    return ((a = t.el) == null ? void 0 : a.id) === e;
  });
  o && mc(o).onClose();
}, oV = (e) => typeof e == "string" ? {
  message: e
} : e, mg = (e, o) => {
  const { vNode: t, el: a } = nV(vg, { appContext: o, props: oV(e) }), l = mc(t);
  return a && t.el && l ? (document.body.appendChild(a.childNodes[0]), t.el.id = "notification_" + nl, nl += 1, go().vaToastInstances.push(t), t.el.id) : null;
}, aV = (e) => ({
  /** Returns toast instance id */
  init(o) {
    return mg(o, e?._context);
  },
  close(o) {
    Ku(o);
  },
  closeAll(o = !1) {
    pg(o ? void 0 : e?._context);
  }
}), rV = No(() => ({
  install(e) {
    oa(e, "$vaToast", aV(e));
  }
})), Hv = {
  closeDropdown() {
    let e = this;
    for (; e = e.$parent; )
      if (e.$options.name === "VaDropdown") {
        e.hide();
        break;
      }
  }
}, lV = No(() => ({
  install(e) {
    oa(e, "$closeDropdown", Hv.closeDropdown), oa(e, "$vaDropdown", Hv);
  }
})), sV = (e, o, t) => {
  const a = Pt();
  if (!a)
    throw new Error("`useButtonBackground` hook must be used only inside of setup function!");
  const l = a.props, { getColor: s, getGradientBackground: i } = Ke(), c = f(() => l.plain ? "transparent" : l.gradient ? i(e.value) : e.value), p = f(() => !l.plain && t.value), v = f(() => !l.plain && o.value), m = f(() => v.value && l.pressedBehavior === "opacity" ? l.pressedOpacity : p.value && l.hoverBehavior === "opacity" ? Number(l.hoverOpacity) : Number(l.backgroundOpacity)), g = f(() => p.value && l.hoverBehavior === "mask"), y = f(() => v.value && l.pressedBehavior === "mask"), b = f(() => y.value ? l.pressedOpacity : g.value ? Number(l.hoverOpacity) : 0), C = f(() => y.value ? s(l.pressedMaskColor) : g.value ? s(l.hoverMaskColor) : "transparent");
  return {
    backgroundColor: c,
    backgroundColorOpacity: m,
    backgroundMaskOpacity: b,
    backgroundMaskColor: C
  };
}, Na = {
  tag: { type: String, default: "span" },
  to: { type: [String, Object], default: void 0 },
  replace: { type: Boolean, default: void 0 },
  append: { type: Boolean, default: void 0 },
  exact: { type: Boolean, default: void 0 },
  activeClass: { type: String, default: void 0 },
  exactActiveClass: { type: String, default: void 0 },
  href: { type: String, default: void 0 },
  target: { type: String, default: void 0 },
  disabled: { type: Boolean, default: !1 }
}, ia = (e) => {
  const o = Pt(), t = f(() => o?.appContext.config.globalProperties), a = f(() => {
    var g;
    return (g = t.value) == null ? void 0 : g.$router;
  }), l = f(() => {
    var g;
    return (g = t.value) == null ? void 0 : g.$route;
  }), { getGlobalConfig: s } = Mo(), i = f(() => {
    if (e.disabled)
      return e.tag;
    if (e.href && !e.to)
      return "a";
    const g = s();
    return g.routerComponent && e.to ? g.routerComponent : e.to && a.value !== void 0 ? "router-link" : e.to && a.value === void 0 ? "a" : e.tag || "div";
  }), c = f(() => e.disabled ? !1 : !!(e.href || e.to)), p = f(() => c.value ? i.value === "a" ? {
    target: e.target,
    href: m.value
  } : {
    target: e.target,
    to: e.to,
    replace: e.replace,
    append: e.append,
    activeClass: e.activeClass,
    exact: e.exact,
    exactActiveClass: e.exactActiveClass
  } : {}), v = f(() => {
    if (!a.value || !e.to)
      return !1;
    const g = a.value.resolve(e.to).href, y = a.value.currentRoute.value.path;
    return g.replace("#", "") === y.replace("#", "");
  }), m = f(() => {
    var g;
    return e.href ? e.href : l.value === void 0 && e.to ? e.to : e.to ? (g = a.value) == null ? void 0 : g.resolve(e.to, l.value).href : void 0;
  });
  return {
    isLinkTag: c,
    tagComputed: i,
    hrefComputed: m,
    isActiveRouterLink: v,
    linkAttributesComputed: p
  };
}, iV = (e) => {
  const { linkAttributesComputed: o, isLinkTag: t } = ia(e), a = f(() => t.value ? void 0 : e.type), l = f(() => {
    const s = {
      "aria-disabled": !!e.disabled,
      disabled: !!e.disabled
    };
    return t.value ? s : {
      type: a.value,
      tabindex: e.loading || e.disabled ? -1 : 0,
      ...s
    };
  });
  return f(() => ({ ...o.value, ...l.value }));
}, uV = (e) => {
  var o, t, a;
  if (Ma())
    return e;
  if (e > 0) {
    const l = (o = window?.navigator) == null ? void 0 : o.userAgent, s = l && /^((?!chrome|android).)*safari/i.test((t = window?.navigator) == null ? void 0 : t.userAgent), i = l && /(version.)15|16/i.test((a = window?.navigator) == null ? void 0 : a.userAgent);
    if (s && !i)
      return e < 1 ? 1 - e : e;
  }
  return e;
}, cV = (e, o, t, a) => {
  const l = Pt();
  if (!l)
    throw new Error("`useButtonTextColor` hook must be used only inside of setup function!");
  const s = l.props, { getColor: i, colorToRgba: c, getStateMaskGradientBackground: p } = Ke(), v = f(() => ({
    background: "transparent",
    color: e.value,
    "-webkit-background-clip": "text",
    "background-clip": "text",
    opacity: b.value
  })), m = (C, _, S) => {
    const $ = i(C);
    let A;
    return S === "opacity" ? A = { color: c(e.value, _) } : A = {
      background: p(o.value, $, _),
      color: _ < 1 ? c(e.value, uV(_)) : $
    }, { ...v.value, ...A };
  }, g = f(() => m(s.hoverMaskColor, Number(s.hoverOpacity), s.hoverBehavior)), y = f(() => m(s.pressedMaskColor, s.pressedOpacity, s.pressedBehavior)), b = f(() => {
    if (!s.disabled)
      return s.textOpacity === 1 || a.value && !t.value ? 1 : t.value ? 0.9 : s.textOpacity;
  });
  return f(() => {
    const C = {
      color: e.value,
      background: "transparent"
    };
    return s.plain && Object.assign(C, v.value, { background: e.value }), s.plain ? t.value ? y.value : a.value ? g.value : C : C;
  });
}, Ba = (e, o, t) => Math.min(Math.max(e, o), t), dV = {
  class: "va-progress-circle__wrapper",
  viewBox: "0 0 40 40"
}, fV = ["r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], vV = /* @__PURE__ */ oe({
  name: "VaProgressCircle",
  __name: "VaProgressCircle",
  props: {
    ...Ea,
    ...Ee,
    modelValue: { type: [Number, String], default: 0 },
    indeterminate: { type: Boolean, default: !1 },
    thickness: { type: [Number, String], default: 0.06 },
    color: { type: String, default: "primary" },
    ariaLabel: Fe("$t:progressState")
  },
  setup(e) {
    const o = e, { getColor: t } = Ke(), { sizeComputed: a } = Ra(o), l = f(() => Ba(Number(o.thickness), 0, 1) / 2 * 100), s = f(() => 20 - 20 * l.value / 100), i = f(() => 2 * Math.PI * s.value), c = f(() => i.value * (1 - Ba(Number(o.modelValue), 0, 100) / 100)), p = f(() => t(o.color, void 0, !0)), { tp: v } = Ct(), m = f(() => ({ color: p.value })), g = f(() => ({
      width: a.value,
      height: a.value
    })), y = f(() => ({
      "va-progress-circle--indeterminate": o.indeterminate
    })), b = f(() => ({
      role: "progressbar",
      "aria-label": v(o.ariaLabel),
      "aria-valuenow": o.indeterminate ? void 0 : o.modelValue
    }));
    return (C, _) => (w(), L("div", se({
      class: ["va-progress-circle", y.value],
      style: g.value
    }, b.value), [
      (w(), L("svg", dV, [
        E("circle", {
          class: "va-progress-circle__overlay",
          cx: "50%",
          cy: "50%",
          r: s.value,
          fill: "none",
          stroke: p.value,
          "stroke-width": l.value + "%",
          "stroke-dasharray": i.value,
          "stroke-dashoffset": c.value
        }, null, 8, fV)
      ])),
      C.$slots.default ? (w(), L("div", {
        key: 0,
        style: me(m.value),
        class: "va-progress-circle__info"
      }, [
        H(C.$slots, "default")
      ], 4)) : Y("", !0)
    ], 16));
  }
}), hr = we(vV), It = (e, o) => Object.keys(e).filter((t) => o.includes(t)).reduce((t, a) => (t[a] = e[a], t), {}), pV = {
  hoverBehavior: {
    type: String,
    default: "mask",
    validator: (e) => ["opacity", "mask"].includes(e)
  },
  hoverOpacity: { type: [Number, String], default: 0.15 },
  hoverMaskColor: { type: String, default: "textInverted" }
}, mV = {
  pressedBehavior: {
    type: String,
    default: "mask",
    validator: (e) => ["opacity", "mask"].includes(e)
  },
  pressedOpacity: { type: Number, default: 0.13 },
  pressedMaskColor: { type: String, default: "textPrimary" }
}, ul = {
  loading: { type: Boolean, default: !1 }
}, gg = (e) => e instanceof HTMLElement, yo = (e) => {
  !e || !gg(e) || (e.focus(), e.dispatchEvent(new FocusEvent("focus", { bubbles: !0 })));
}, Ns = (e) => {
  !e || !gg(e) || (e.blur(), e.dispatchEvent(new Event("blur", { bubbles: !0 })));
}, qu = (e) => {
  if (e.tabIndex !== -1) {
    yo(e);
    return;
  }
  const o = e.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  o && yo(o);
}, ju = (e, o, t = {}) => {
  at(() => window.addEventListener(e, o, { capture: !0, ...t })), Gt(() => window.removeEventListener(e, o, { capture: !0, ...t }));
}, yg = () => {
  const e = He(), o = () => {
    e.value = document.activeElement;
  };
  return at(o), ju("focus", o), ju("blur", o), e;
}, zs = ["focus", "blur"];
function Wo(e, o) {
  const t = yg(), a = f({
    get: () => $n(t.value) || $n(e?.value) ? !1 : t.value === e?.value,
    set: (p) => {
      p ? i() : c();
    }
  }), l = (p) => {
    o?.("focus", p);
  }, s = (p) => {
    o?.("blur", p);
  }, i = () => {
    e?.value && yo(Mt(e?.value));
  }, c = () => {
    e?.value && Ns(Mt(e?.value));
  };
  return $t("focus", l, e), $t("blur", s, e), {
    isFocused: a,
    onFocus: l,
    onBlur: s,
    focus: i,
    blur: c
  };
}
const br = (e) => {
  if (yn(e))
    return f({
      get() {
        return Mt(e.value);
      },
      set(t) {
        e.value = t;
      }
    });
  if (e) {
    const t = Gu(e);
    return f({
      get() {
        return Mt(t.value);
      },
      set(a) {
        t.value = a;
      }
    });
  }
  const o = He();
  return f({
    set(t) {
      o.value = Mt(t);
    },
    get() {
      return o.value;
    }
  });
};
function cl(e, o) {
  const t = N(!1), a = () => {
    o?.value || (t.value = !0);
  }, l = () => {
    t.value = !1;
  };
  o && Se(o, (i) => {
    i && (t.value = !1);
  });
  const s = br(e);
  return $t("mouseenter", a, s), $t("mouseleave", l, s), { isHovered: t, onMouseEnter: a, onMouseLeave: l };
}
function gV(e) {
  const o = N(!1), t = () => {
    o.value = !0;
  }, a = () => {
    o.value = !1;
  }, l = br(e);
  return $t(["mousedown", "touchstart", "dragstart"], t, l), $t([
    "mouseup",
    "mouseleave",
    "touchend",
    "touchcancel",
    "drop",
    "dragend"
  ], a, !0), { isPressed: o, onMouseDown: t, onMouseUp: a };
}
const hg = (e, o = !0) => {
  var t;
  if (pm(e))
    return !0;
  if (!e || o && (!tl(e) || !((t = e()) != null && t.length)))
    return !1;
  const a = o ? e() : e;
  return Array.isArray(a) ? a.some((l) => Array.isArray(l.children) ? hg(l.children, !1) : l.children || l.props) : !!a.children;
}, yV = (e = "default") => {
  const { slots: o } = Pt();
  return f(() => hg(o[e]));
}, ht = (e, o) => {
  yr && !e && console.warn('You must pass the @param "prefix" to the useBem hook!');
  const t = f(() => typeof o == "function" ? o() : d(o)), a = f(() => Object.entries(d(t)).reduce((i, [c, p]) => (p && (i[`${e}--${Qr(c)}`] = !0), i), {})), l = f(() => Object.keys(a.value)), s = f(() => l.value.join(" "));
  return new Proxy({}, {
    ownKeys() {
      return Reflect.ownKeys(a.value);
    },
    getOwnPropertyDescriptor(i, c) {
      return Reflect.getOwnPropertyDescriptor(a.value, c);
    },
    get(i, c, p) {
      switch (c) {
        case "asArray":
          return l;
        case "asString":
          return s;
        case "asObject":
          return a;
        default:
          return Reflect.get(a.value, c, p);
      }
    }
  });
}, hV = /* @__PURE__ */ oe({
  name: "VaButton",
  __name: "VaButton",
  props: {
    ...Ee,
    ...Ea,
    ...pV,
    ...mV,
    ...ul,
    ...Na,
    tag: { type: String, default: "button" },
    type: { type: String, default: "button" },
    block: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" },
    textColor: { type: String, default: "" },
    textOpacity: { type: [Number, String], default: 1 },
    backgroundOpacity: { type: [Number, String], default: 1 },
    borderColor: { type: String, default: "" },
    // only for filled bg state
    gradient: { type: Boolean, default: !1 },
    plain: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    icon: { type: String, default: "" },
    iconRight: { type: String, default: "" },
    iconColor: { type: String, default: "" }
  },
  setup(e, { expose: o }) {
    const t = e, { getColor: a } = Ke(), l = f(() => a(t.color)), { sizeComputed: s } = Ra(t), i = f(() => {
      const q = /([0-9]*)(px)/.exec(s.value);
      return q ? `${+q[1] / 2}${q[2]}` : s.value;
    }), { tagComputed: c } = ia(t), p = iV(t), { disabled: v } = so(t), m = He(), { focus: g, blur: y } = Wo(m), { isHovered: b } = cl(m, v), { isPressed: C } = gV(m), _ = f(() => t.iconColor ? a(t.iconColor) : R.value), S = f(() => ({
      color: _.value,
      size: t.size
    })), $ = f(() => ({ "va-button__content--loading": t.loading })), A = yV(), x = f(() => !!(t.iconRight && !t.icon || !t.iconRight && t.icon)), T = f(() => !A.value && x.value), O = et("textOpacity"), D = et("backgroundOpacity"), V = ht("va-button", () => ({
      ...It(t, ["disabled", "block", "loading", "round", "plain"]),
      small: t.size === "small",
      normal: !t.size || t.size === "medium",
      large: t.size === "large",
      opacity: O.value < 1,
      bordered: !!t.borderColor,
      iconOnly: T.value,
      leftIcon: !T.value && !!t.icon && !t.iconRight,
      rightIcon: !T.value && !t.icon && !!t.iconRight
    })), P = f(() => t.plain || D.value < 0.5), { textColorComputed: R } = Kt(l, P), {
      backgroundColor: J,
      backgroundColorOpacity: de,
      backgroundMaskOpacity: ne,
      backgroundMaskColor: M
    } = sV(l, C, b), j = cV(R, l, C, b), W = f(() => ({
      borderColor: t.borderColor ? a(t.borderColor) : "transparent",
      ...j.value
    }));
    return o({
      focus: g,
      blur: y
    }), (q, Z) => (w(), te(zt(d(c)), se({
      ref_key: "button",
      ref: m,
      class: ["va-button", d(V)],
      style: [W.value, `--va-background-color: ${String(d(J))};--va-background-color-opacity: ${String(d(de))};--va-background-mask-color: ${String(d(M))};--va-background-mask-opacity: ${String(d(ne))}`]
    }, d(p)), {
      default: U(() => [
        E("span", {
          class: Be(["va-button__content", $.value])
        }, [
          H(q.$slots, "prepend", ye(Ie({ icon: e.icon, iconAttributes: S.value })), () => [
            e.icon ? (w(), te(d(ot), se({
              key: 0,
              class: "va-button__left-icon",
              name: e.icon
            }, S.value), null, 16, ["name"])) : Y("", !0)
          ]),
          H(q.$slots, "default"),
          H(q.$slots, "append", ye(Ie({ icon: e.iconRight, iconAttributes: S.value })), () => [
            e.iconRight ? (w(), te(d(ot), se({
              key: 0,
              class: "va-button__right-icon",
              name: e.iconRight
            }, S.value), null, 16, ["name"])) : Y("", !0)
          ])
        ], 2),
        q.loading ? H(q.$slots, "loading", ye(se({ key: 0 }, {
          size: i.value,
          color: d(R)
        })), () => [
          G(d(hr), {
            class: "va-button__loader",
            size: i.value,
            color: d(R),
            thickness: 0.15,
            indeterminate: ""
          }, null, 8, ["size", "color"])
        ]) : Y("", !0)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
}), lt = we(hV), bg = () => {
  const e = Pt();
  return e.appContext.app ? `${e.appContext.app._uid}_${e.uid}` : String(e.uid);
}, Hr = [], bV = (e, o) => {
  const t = bg(), a = Fa(), l = () => {
    var i;
    Hr.includes(t) || (Hr.push(t), (i = a.value) == null || i.body.classList.add("va-modal-overlay-background--blurred"));
  }, s = () => {
    var i;
    const c = Hr.indexOf(t);
    c !== -1 && (Hr.splice(c, 1), Hr.length === 0 && ((i = a.value) == null || i.body.classList.remove("va-modal-overlay-background--blurred")));
  };
  Vn(() => {
    e.value && (o.value ? l() : s());
  }), Gt(s);
}, _V = () => fg(), sr = ym([]), _g = (e) => {
  const o = _V(), t = () => {
    sr.includes(o) || sr.push(o);
  }, a = () => {
    const c = sr.findIndex((p) => p === o);
    c !== -1 && sr.splice(c, 1);
  }, l = f(() => {
    const c = sr.findIndex((p) => p === o);
    return c === -1 ? -1 : c + 1;
  }), s = f(() => l.value === sr.length - 1), i = f(() => l.value === 0);
  return at(() => {
    e.value && t();
  }), Gt(() => {
    a();
  }), Se(e, (c) => {
    c ? t() : a();
  }), {
    zIndex: l,
    isTop: s,
    isLowest: i,
    register: t,
    unregister: a
  };
}, Vs = Symbol("NOT_PROVIDED"), CV = (e, o) => {
  const t = Pt();
  return f(() => {
    if (!t?.vnode.props)
      return Vs;
    const a = o[e];
    return e in t.vnode.props ? a : Vs;
  });
}, Ht = {
  stateful: { type: Boolean, default: !1 },
  modelValue: { type: void 0 }
}, Cg = (e = !1) => ({
  stateful: { type: Boolean, default: e }
}), on = ["update:modelValue"], xt = (e, o, t = "modelValue", a = {}) => {
  const { eventName: l, defaultValue: s } = a, i = l || `update:${t.toString()}`, c = CV(t, e), p = "defaultValue" in a, v = N(
    c.value === Vs ? p ? s : e[t] : c.value
  );
  let m;
  const g = () => {
    m = Se(() => e[t], (b) => {
      v.value = b;
    });
  };
  Se(() => e.stateful, (b) => {
    b ? g() : m?.();
  }, { immediate: !0 });
  const y = f({
    get: () => e.stateful ? v.value : e[t],
    set: (b) => {
      e.stateful && (v.value = b), o(i, b);
    }
  });
  return Object.defineProperty(y, "stateful", {
    get: () => e.stateful
  }), Object.defineProperty(y, "userProvided", {
    get: () => c.value !== Vs
  }), { valueComputed: y };
}, SV = ":where(a, button, input, textarea, select):not([disabled]), *[tabindex]", Sg = () => {
  const e = Fa(), o = Ms(), t = og("trapInEl", null);
  let a = [], l = null, s = null;
  const i = (b) => {
    var C;
    return ((C = t.value) == null ? void 0 : C.contains(b.target)) || !1;
  }, c = () => {
    l?.focus();
  }, p = () => {
    s?.focus();
  }, v = (b) => {
    var C, _;
    const S = b.code === "Tab", $ = b.shiftKey;
    if (S) {
      if (!i(b)) {
        b.preventDefault(), $ ? p() : c();
        return;
      }
      if (((C = e.value) == null ? void 0 : C.activeElement) === s && !$) {
        b.preventDefault(), c();
        return;
      }
      ((_ = e.value) == null ? void 0 : _.activeElement) === l && $ && (b.preventDefault(), p());
    }
  }, m = (b) => {
    t.value = b, y(), g();
  }, g = () => {
    var b;
    t.value && (a = Array.from(t.value.querySelectorAll(SV)), l = a[0], s = a[a.length - 1], (b = o.value) == null || b.addEventListener("keydown", v));
  }, y = () => {
    var b;
    a = [], l = null, s = null, (b = o.value) == null || b.removeEventListener("keydown", v);
  };
  return {
    trapFocus: g,
    freeFocus: y,
    trapFocusIn: m
  };
}, Wr = ym([]), wV = () => {
  const e = So(), o = f(
    () => Wr.findIndex(({ id: c }) => c === String(e))
  ), t = () => {
    o.value === -1 && Wr.push({
      id: String(e)
    });
  }, a = () => {
    o.value !== -1 && Wr.splice(o.value, 1);
  }, l = f(
    () => o.value !== -1 && o.value === Wr.length - 1
  ), s = f(
    () => o.value === 0
  ), i = f(() => Wr.length > 1);
  return {
    modalId: e,
    modalLevel: o,
    registerModal: t,
    unregisterModal: a,
    isTopLevelModal: l,
    isLowestLevelModal: s,
    isMoreThenOneModalOpen: i
  };
}, wg = "data-va-teleported-from", $g = "data-va-teleported", gc = (e) => {
  if (!e)
    return null;
  const o = e.getAttribute($g);
  return o === null ? gc(e.parentElement) : document.querySelector(`[${wg}="${o}"]`);
}, kg = () => {
  var e, o;
  const t = bg(), a = Pt(), l = a?.vnode.scopeId;
  return {
    teleportFromAttrs: {
      [wg]: t
    },
    teleportedAttrs: {
      [$g]: t,
      ...l ? { [l]: "" } : void 0,
      ...(o = (e = a?.appContext.config) == null ? void 0 : e.globalProperties) == null ? void 0 : o.$vaColorConfig.getAppStylesRootAttribute()
    },
    findTeleportedFrom: gc
  };
}, Vu = (e, o) => o ? o.parentElement === e ? !0 : e.contains(o) : !1, $V = (e) => Array.isArray(e) ? e : [e], Hs = (e, o) => {
  ju("mousedown", (t) => {
    const a = t.target;
    if (t.target.shadowRoot)
      return;
    const l = gc(a);
    $V(e).some((i) => {
      const c = Mt(d(i));
      return c ? l ? Vu(c, a) || Vu(c, l) : Vu(c, a) : !1;
    }) || o(a);
  });
}, kV = ["aria-labelledby"], VV = {
  key: 2,
  class: "va-modal__inner"
}, xV = { class: "va-modal__header" }, AV = {
  key: 0,
  class: "va-modal__message"
}, IV = {
  key: 1,
  class: "va-modal__message"
}, TV = {
  key: 2,
  class: "va-modal__footer"
}, BV = {
  key: 3,
  class: "va-modal__footer"
}, PV = oe({
  name: "ModalElement",
  inheritAttrs: !1,
  props: {
    ...Ee,
    isTransition: { type: Boolean, default: !0 }
  },
  setup: (e, { slots: o, attrs: t }) => () => {
    var a;
    return e.isTransition ? bt(ta, { ...t }, o) : (a = o.default) == null ? void 0 : a.call(o, t);
  }
}), LV = /* @__PURE__ */ oe({
  name: "VaModal",
  inheritAttrs: !1,
  __name: "VaModal",
  props: {
    ...Bm({
      cancelButton: lt,
      okButton: lt,
      closeButton: ot
    }),
    ...Ht,
    modelValue: { type: Boolean, default: !1 },
    attachElement: { type: String, default: "body" },
    allowBodyScroll: { type: Boolean, default: !1 },
    disableAttachment: { type: Boolean, default: !1 },
    title: { type: String, default: "" },
    message: { type: String, default: "" },
    okText: Fe("$t:ok"),
    cancelText: Fe("$t:cancel"),
    hideDefaultActions: { type: Boolean, default: !1 },
    fullscreen: { type: Boolean, default: !1 },
    closeButton: { type: Boolean, default: !1 },
    mobileFullscreen: { type: Boolean, default: !0 },
    noDismiss: { type: Boolean, default: !1 },
    noOutsideDismiss: { type: Boolean, default: !1 },
    noEscDismiss: { type: Boolean, default: !1 },
    maxWidth: { type: String, default: "" },
    maxHeight: { type: String, default: "" },
    anchorClass: { type: String },
    size: {
      type: String,
      default: "medium"
    },
    sizesConfig: {
      type: Object,
      default: () => ({
        defaultSize: "medium",
        sizes: {
          small: 576,
          medium: 768,
          large: 992,
          auto: "max-content"
        }
      })
    },
    fixedLayout: { type: Boolean, default: !1 },
    withoutTransitions: { type: Boolean, default: !1 },
    overlay: { type: Boolean, default: !0 },
    overlayOpacity: { type: [Number, String], default: 0.6 },
    showNestedOverlay: { type: Boolean, default: !1 },
    blur: { type: Boolean, default: !1 },
    zIndex: { type: [Number, String], default: void 0 },
    backgroundColor: { type: String, default: "background-secondary" },
    noPadding: { type: Boolean, default: !1 },
    beforeClose: { type: Function },
    beforeOk: { type: Function },
    beforeCancel: { type: Function },
    ariaCloseLabel: Fe("$t:close")
  },
  emits: [
    ...on,
    "cancel",
    "ok",
    "before-open",
    "open",
    "before-close",
    "close",
    "click-outside"
  ],
  setup(e, { expose: o, emit: t }) {
    const a = e;
    Pm(a);
    const l = t, s = He(), i = He(), { trapFocusIn: c, freeFocus: p } = Sg(), {
      registerModal: v,
      unregisterModal: m,
      isTopLevelModal: g,
      isLowestLevelModal: y
    } = wV(), { getColor: b } = Ke(), { textColorComputed: C } = Kt(vn(a, "backgroundColor")), { valueComputed: _ } = xt(a, l), S = f(() => ({
      "va-modal--fullscreen": a.fullscreen,
      "va-modal--mobile-fullscreen": a.mobileFullscreen,
      "va-modal--fixed-layout": a.fixedLayout,
      "va-modal--no-padding": a.noPadding
    })), {
      zIndex: $
    } = _g(_), A = f(() => a.zIndex ? Number(a.zIndex) : $.value), x = B$(a), T = f(() => ({
      maxWidth: a.maxWidth || x.value,
      maxHeight: a.maxHeight,
      color: C.value,
      background: b(a.backgroundColor)
    })), O = f(() => ({
      "va-modal__overlay--lowest": y.value,
      "va-modal__overlay--top": g.value
    })), D = () => a.showNestedOverlay && !y.value ? "var(--va-modal-overlay-nested-opacity)" : "var(--va-modal-overlay-opacity)", V = f(() => {
      if (a.overlay)
        return g.value || a.showNestedOverlay ? {
          "background-color": "var(--va-modal-overlay-color)",
          opacity: D()
        } : "";
    }), P = () => {
      _.value = !0;
    }, R = (re) => {
      const Me = () => {
        _.value = !1, re?.();
      };
      a.beforeClose ? a.beforeClose(Me) : Me();
    }, J = () => {
      _.value = !_.value;
    }, de = () => {
      const re = () => {
        R(() => l("cancel"));
      };
      a.beforeCancel ? a.beforeCancel(re) : re();
    }, ne = () => {
      const re = () => {
        R(() => l("ok"));
      };
      a.beforeOk ? a.beforeOk(re) : re();
    }, M = () => {
      Vt(() => {
        i.value && c(i.value);
      });
    }, j = (re) => l("before-open", re), W = (re) => l("open", re), q = (re) => l("before-close", re), Z = (re) => l("close", re), z = (re) => {
      setTimeout(() => {
        re.code === "Escape" && !a.noEscDismiss && !a.noDismiss && g.value && de();
      });
    };
    Hs([i], () => {
      !_.value || a.noOutsideDismiss || a.noDismiss || !g.value || (l("click-outside"), de());
    });
    const pe = Ms();
    Vn(() => {
      var re, Me;
      _.value ? (re = pe.value) == null || re.addEventListener("keyup", z) : (Me = pe.value) == null || Me.removeEventListener("keyup", z);
    }), bV(vn(a, "blur"), _);
    const le = Fa(), _e = (re) => {
      !le.value || a.allowBodyScroll || (re === "hidden" ? le.value.body.classList.add("va-modal-open") : le.value.body.classList.remove("va-modal-open"));
    }, Re = () => {
      v(), _e("hidden");
    }, Ve = () => {
      y.value && (p(), _e("")), m();
    };
    Se(_, (re) => {
      re ? Re() : Ve();
    }), at(() => {
      _.value && Re(), g.value && M();
    }), Gt(() => {
      Ve();
    }), Se(g, (re) => {
      re && M();
    }, { immediate: !0 }), o({
      show: P,
      hide: R,
      toggle: J,
      cancel: de,
      ok: ne,
      onBeforeEnterTransition: j,
      onAfterEnterTransition: W,
      onBeforeLeaveTransition: q,
      onAfterLeaveTransition: Z,
      listenKeyUp: z
    });
    const { tp: ee } = Ct(), {
      teleportFromAttrs: be,
      teleportedAttrs: Te
    } = kg(), ie = { show: P, hide: R, toggle: J, cancel: de, ok: ne };
    return (re, Me) => (w(), L("div", {
      ref_key: "rootElement",
      ref: s,
      class: Be(["va-modal-entry", re.$props.anchorClass])
    }, [
      re.$slots.anchor ? (w(), L("div", se({
        key: 0,
        class: "va-modal__anchor"
      }, d(be)), [
        H(re.$slots, "anchor", ye(Ie(ie)))
      ], 16)) : Y("", !0),
      (w(), te(na, {
        to: e.attachElement,
        disabled: re.$props.disableAttachment
      }, [
        G(d(PV), se({
          name: "va-modal",
          isTransition: !re.$props.withoutTransitions,
          duration: 300,
          style: { zIndex: A.value },
          appear: ""
        }, { ...re.$attrs, ...d(Te) }, {
          onBeforeEnter: j,
          onAfterEnter: W,
          onBeforeLeave: q,
          onAfterLeave: Z
        }), {
          default: U(() => [
            d(_) ? (w(), L("div", {
              key: 0,
              "aria-labelledby": e.title,
              class: Be([S.value, "va-modal"]),
              role: "dialog",
              "aria-modal": "true"
            }, [
              re.$props.overlay ? (w(), L("div", {
                key: 0,
                class: Be(["va-modal__overlay", O.value]),
                style: me(V.value)
              }, null, 6)) : Y("", !0),
              E("div", {
                ref_key: "modalDialog",
                ref: i,
                class: "va-modal__dialog",
                style: me([T.value])
              }, [
                re.$props.fullscreen || re.$props.closeButton ? (w(), te(d(ot), {
                  key: 0,
                  "va-child": "closeButton",
                  class: Be([{ "va-modal__close--fullscreen": re.$props.fullscreen }, "va-modal__close"]),
                  "aria-label": d(ee)(re.$props.ariaCloseLabel),
                  role: "button",
                  tabindex: "0",
                  name: "va-close",
                  onClick: de,
                  onKeydown: [
                    Ae(de, ["space"]),
                    Ae(de, ["enter"])
                  ]
                }, null, 8, ["class", "aria-label"])) : Y("", !0),
                re.$slots.content ? H(re.$slots, "content", ye(se({ key: 1 }, ie))) : (w(), L("div", VV, [
                  E("div", xV, [
                    H(re.$slots, "header", ye(Ie(ie)), () => [
                      e.title ? (w(), L("div", {
                        key: 0,
                        class: "va-modal__title",
                        style: me({ color: d(b)("primary") })
                      }, ke(re.$props.title), 5)) : Y("", !0)
                    ])
                  ]),
                  re.$props.message ? (w(), L("div", AV, ke(re.$props.message), 1)) : Y("", !0),
                  re.$slots.default ? (w(), L("div", IV, [
                    H(re.$slots, "default", ye(Ie(ie)))
                  ])) : Y("", !0),
                  (re.$props.cancelText || re.$props.okText) && !re.$props.hideDefaultActions ? (w(), L("div", TV, [
                    re.$props.cancelText ? (w(), te(d(lt), {
                      key: 0,
                      "va-child": "cancelButton",
                      preset: "secondary",
                      color: "secondary",
                      class: "va-modal__default-cancel-button",
                      onClick: de
                    }, {
                      default: U(() => [
                        xe(ke(d(ee)(re.$props.cancelText)), 1)
                      ]),
                      _: 1
                    })) : Y("", !0),
                    G(d(lt), {
                      "va-child": "okButton",
                      onClick: ne
                    }, {
                      default: U(() => [
                        xe(ke(d(ee)(re.$props.okText)), 1)
                      ]),
                      _: 1
                    })
                  ])) : Y("", !0),
                  re.$slots.footer ? (w(), L("div", BV, [
                    H(re.$slots, "footer", ye(Ie(ie)))
                  ])) : Y("", !0)
                ]))
              ], 4)
            ], 10, kV)) : Y("", !0)
          ]),
          _: 3
        }, 16, ["isTransition", "style"])
      ], 8, ["to", "disabled"]))
    ], 2));
  }
}), yc = we(LV), OV = (e) => {
  var o;
  return ((o = e.component) == null ? void 0 : o.props) || {};
}, Wv = (e, o) => {
  e && (Zr(null, e), e.remove()), e = null;
}, EV = (e, { props: o, appContext: t } = {}) => {
  const a = document?.createElement("div");
  let l;
  const s = (c) => {
    var p;
    (p = o?.onClose) == null || p.call(o, c), Wv(a);
  }, i = (c) => {
    var p;
    (p = o?.["onUpdate:modelValue"]) == null || p.call(o, c), o?.withoutTransitions && !c && Vt(() => {
      Wv(a);
    });
  };
  return l = bt(e, {
    ...o,
    stateful: o?.stateful ?? !0,
    modelValue: !0,
    onClose: s,
    "onUpdate:modelValue": i
  }), t && (l.appContext = t), a && Zr(l, a), { vNode: l, el: a };
}, RV = (e) => typeof e == "string" ? { message: e } : e, xu = (e, o) => {
  const { vNode: t, el: a } = EV(yc, { appContext: o, props: RV(e) });
  return a && t.el && OV(t) && document.body.appendChild(a.childNodes[0]), t;
}, DV = (e) => ({
  init(o) {
    return xu(o, e?._context);
  },
  confirm(o) {
    return typeof o == "string" ? new Promise((t) => {
      xu({
        message: o,
        onOk() {
          t(!0);
        },
        onCancel() {
          t(!1);
        }
      }, e?._context);
    }) : new Promise((t) => {
      xu({
        ...o,
        onOk() {
          var a;
          (a = o?.onOk) == null || a.call(o), t(!0);
        },
        onCancel() {
          var a;
          (a = o?.onCancel) == null || a.call(o), t(!1);
        }
      }, e?._context);
    });
  }
}), MV = No(() => ({
  install(e) {
    oa(e, "$vaModal", DV(e));
  }
})), Vg = (e, o) => {
  const t = Object.entries(o);
  return e.reduce((a, l) => a.concat(
    t.map(([s, i]) => ({
      ...l,
      postfix: l.postfix ?? s,
      value: l.value ?? i
    }))
  ), []);
}, xg = (e) => e.reduce((o, t) => {
  const a = [t.property].flat().map((l) => `${l}: ${t.value};`).join("");
  return o += `.va-${t.prefix}--${t.postfix} { ${a} }`, o;
}, ""), Uv = (e, o) => {
  const t = Vg(e, o);
  pc(
    "va-color-helpers",
    () => xg(t)
  );
}, FV = () => {
  if (Ma())
    return;
  const { globalConfig: e } = Mo();
  return Se(() => e.value.colorsClasses, (o) => {
    o.length && Uv(o, e.value.colors.variables);
  }, { immediate: !0, deep: !0 }), Se(() => e.value.colors.variables, (o) => {
    o && Uv(e.value.colorsClasses, o);
  }, { immediate: !0, deep: !0 }), {
    renderColorHelpers: () => {
      const o = Vg(e.value.colorsClasses, e.value.colors.variables);
      return xg(o);
    }
  };
}, NV = No(() => ({
  install(e) {
    oa(e, "$vaColorsClasses", FV());
  }
})), Ag = Symbol("AccordionService"), zV = (e, o) => {
  const t = N([]), a = () => {
    const v = Math.max(t.value.length, o.value.length);
    return Array.from({ length: v }, (m, g) => o.value[g] ?? !1);
  }, l = (v) => o.value[t.value.indexOf(v)] ?? !1, s = () => {
    o.value = a();
  };
  return Co(Ag, {
    registerItem: (v) => {
      t.value.push(v), s();
    },
    unregisterItem: (v) => {
      t.value = t.value.filter((m) => m !== v), Vt(s);
    },
    getItemValue: l,
    setItemValue: (v, m) => {
      const g = t.value.indexOf(v);
      if (g === -1) {
        yt("Accordion item is not registered yet");
        return;
      }
      e.multiple ? o.value[g] = m : o.value = a().map((y, b) => b === g ? m : !1);
    },
    props: f(() => e)
  }), { items: t };
}, HV = () => {
  const e = ut(Ag, void 0);
  if (!e)
    return { accordionProps: N({}) };
  const o = {};
  return e.registerItem(o), Gt(() => e.unregisterItem(o)), {
    accordionItemValue: f({
      get: () => e.getItemValue(o),
      set: (a) => e.setItemValue(o, a)
    }),
    accordionProps: e.props
  };
}, WV = { class: "va-accordion" }, UV = /* @__PURE__ */ oe({
  name: "VaAccordion",
  __name: "VaAccordion",
  props: {
    ...Ht,
    ...Ee,
    modelValue: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    inset: { type: Boolean, default: !1 },
    stateful: { type: Boolean, default: !0 },
    popout: { type: Boolean, default: !1 }
  },
  emits: [...on],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, { valueComputed: s } = xt(a, l, "modelValue"), { items: i } = zV(a, s);
    return o({
      collapses: i,
      value: s
    }), (v, m) => (w(), L("div", WV, [
      H(v.$slots, "default")
    ]));
  }
}), GV = we(UV), KV = () => {
}, Ig = (e, o) => {
  let t = 0;
  return function(...a) {
    const l = Date.now();
    l - t < o || (e.apply(this, a), t = l);
  };
};
function Tg() {
  return document.documentElement.clientHeight || window.innerHeight || document.body.clientHeight;
}
function Gv({
  coordinates: e,
  offsetTop: o,
  offsetBottom: t,
  target: a
}) {
  let l = !1, s = !1;
  const i = Tg();
  if (o != null && i)
    if (a === window)
      l = e.top <= o;
    else {
      const { top: c } = a.getBoundingClientRect();
      l = e.top - c <= o;
    }
  if (t != null && i)
    if (a === window)
      s = e.bottom >= i - t;
    else {
      const { bottom: c } = a.getBoundingClientRect();
      s = c - e.bottom <= t;
    }
  return {
    isTopAffixed: l,
    isBottomAffixed: s
  };
}
function qV(e, o) {
  return e.isTopAffixed !== o.isTopAffixed || e.isBottomAffixed !== o.isBottomAffixed;
}
function Kv(e, o) {
  const { target: t, element: a, offsetTop: l, offsetBottom: s, setState: i, getState: c, initialPosition: p } = o;
  if (!a)
    return;
  const v = !e, m = a.getBoundingClientRect(), g = {
    offsetBottom: s,
    offsetTop: l,
    target: t
  }, y = Gv(v && p ? { coordinates: p, ...g } : { coordinates: m, ...g }), b = c();
  qV(b, y) ? i({ ...y, width: m.width }) : b.width !== m.width && i({ ...b, width: m.width });
}
function jV(e) {
  return e === "scroll";
}
function YV(e, {
  handler: o,
  useCapture: t = jV,
  wait: a = 50
}) {
  const l = e.map((s) => {
    const i = Ig((c) => o(s, c), a);
    return window.addEventListener(s, i, t(s)), () => window.removeEventListener(s, i, t(s));
  });
  return () => l.forEach((s) => s());
}
const XV = /* @__PURE__ */ oe({
  name: "VaAffix",
  __name: "VaAffix",
  props: {
    ...Ee,
    offsetTop: { type: [Number, String], default: void 0 },
    offsetBottom: { type: [Number, String], default: void 0 },
    target: { type: [Object, Function], default: sg }
  },
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = e, a = o, l = He(), s = () => typeof t.target == "function" ? t.target() : t.target, i = f(() => c.value.isTopAffixed || c.value.isBottomAffixed), c = N({
      isTopAffixed: !1,
      isBottomAffixed: !1
    }), p = () => c.value, v = (T) => {
      c.value = T, a("change", i);
    }, m = et("offsetTop"), g = et("offsetBottom"), y = () => {
      const T = s();
      if (!T)
        return 0;
      if (m.value !== void 0) {
        if (!(T instanceof Window)) {
          const { top: O } = T.getBoundingClientRect();
          return O + m.value;
        }
        return m.value;
      }
    }, b = () => {
      const T = s();
      if (!T)
        return 0;
      if (g.value !== void 0) {
        if (!(T instanceof Window)) {
          const { bottom: O } = T.getBoundingClientRect(), { borderTopWidth: D, borderBottomWidth: V } = getComputedStyle(T), { offsetHeight: P, clientHeight: R } = T, J = P - R - parseInt(D) - parseInt(V);
          return Tg() - (O - g.value) + J;
        }
        return g.value;
      }
    }, C = (T) => {
      const O = T();
      return O === void 0 ? void 0 : `${O}px`;
    }, _ = f(() => [{ "va-affix--affixed": i }]), S = f(() => ({
      top: c.value.isTopAffixed ? C(y) : void 0,
      bottom: c.value.isBottomAffixed ? C(b) : void 0,
      width: `${c.value.width}px`
    })), $ = N(), A = (T, O) => {
      const D = {
        ...t,
        offsetTop: m.value,
        offsetBottom: g.value,
        initialPosition: $.value,
        element: l.value,
        target: s(),
        setState: v,
        getState: p
      };
      if (!T || T === "resize")
        Kv(T, D);
      else if (O && O.target) {
        const V = s();
        V === O.target || V instanceof Window ? Kv(T, D) : v({
          isBottomAffixed: !1,
          isTopAffixed: !1
        });
      }
    };
    let x = KV;
    return at(() => {
      var T;
      $.value = (T = l.value) == null ? void 0 : T.getBoundingClientRect(), x = YV(["scroll", "resize"], {
        handler: A
      }), Vt(() => {
        A(null);
      });
    }), Gt(x), (T, O) => (w(), L("div", {
      ref_key: "element",
      ref: l,
      class: "va-affix"
    }, [
      E("div", {
        style: me({ visibility: i.value ? "hidden" : "inherit" })
      }, [
        H(T.$slots, "default")
      ], 4),
      i.value ? (w(), L("div", {
        key: 0,
        class: Be(_.value),
        style: me(S.value)
      }, [
        H(T.$slots, "default")
      ], 6)) : Y("", !0)
    ], 512));
  }
}), ZV = we(XV), Bg = (e) => {
  const { textColorComputed: o } = Kt(e);
  return o;
}, hc = (e) => {
  if (e)
    return e;
  const o = Pt(), t = He();
  return at(() => {
    t.value = o.proxy.$el ?? void 0;
  }), gm(() => {
    t.value = o.proxy.$el ?? void 0;
  }), Gt(() => {
    t.value = o.proxy.$el ?? void 0;
  }), t;
}, JV = (e) => {
  const { getColor: o } = Ke(), t = f(() => !!(e.outline || e.border)), { textColorComputed: a } = Kt(vn(e, "color"), t), l = f(() => o(e.color)), s = f(() => {
    let m = l.value, g = "none";
    return e.outline && (m = "transparent"), e.border && (m = "var(--va-background-primary)", g = "var(--va-alert-box-shadow)"), {
      border: e.outline ? `1px solid ${l.value}` : "",
      padding: e.dense ? "var(--va-alert-padding-y-dense) var(--va-alert-padding-x)" : "",
      backgroundColor: m,
      boxShadow: g
    };
  }), i = Bg(cg(hc())), c = f(() => ({
    alignItems: e.center ? "center" : "",
    color: e.border || e.outline ? i.value : a.value
  })), p = f(() => ({ color: a.value })), v = f(() => ({
    backgroundColor: e.borderColor ? o(e.borderColor) : l.value
  }));
  return {
    alertStyle: s,
    contentStyle: c,
    titleStyle: p,
    borderStyle: v
  };
}, QV = {
  key: 1,
  class: "va-alert__close"
}, ex = ["aria-label"], tx = /* @__PURE__ */ oe({
  name: "VaAlert",
  __name: "VaAlert",
  props: {
    ...Ht,
    ...Ee,
    modelValue: { type: Boolean, default: !0 },
    stateful: { type: Boolean, default: !0 },
    color: { type: String, default: "primary" },
    textColor: { type: String, default: "" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    icon: { type: String, default: "" },
    closeText: { type: String, default: "" },
    closeIcon: { type: String, default: "close" },
    closeable: { type: Boolean, default: !1 },
    dense: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    center: { type: Boolean, default: !1 },
    borderColor: { type: String, default: "" },
    border: {
      type: String,
      default: "",
      validator: (e) => ["top", "right", "bottom", "left", ""].includes(e)
    }
  },
  emits: [...on],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, {
      contentStyle: s,
      titleStyle: i,
      alertStyle: c,
      borderStyle: p
    } = JV(a), { valueComputed: v } = xt(a, l), m = () => {
      v.value = !1;
    }, g = () => {
      v.value = !0;
    }, y = hn(), b = f(() => a.icon || y.icon), C = f(() => a.title || y.title), _ = f(() => `va-alert__border--${a.border}`), { t: S } = Ct();
    return o({
      hide: m,
      show: g
    }), ($, A) => (w(), te(ta, { name: "fade" }, {
      default: U(() => [
        d(v) ? (w(), L("div", {
          key: 0,
          class: "va-alert",
          style: me(d(c)),
          role: "alert"
        }, [
          E("div", {
            style: me(d(p)),
            class: Be([_.value, "va-alert__border"])
          }, null, 6),
          b.value ? (w(), L("div", {
            key: 0,
            style: me(d(s)),
            class: "va-alert__icon",
            "aria-hidden": "true"
          }, [
            H($.$slots, "icon", {}, () => [
              G(d(ot), { name: e.icon }, null, 8, ["name"])
            ])
          ], 4)) : Y("", !0),
          E("div", {
            style: me(d(s)),
            class: "va-alert__content"
          }, [
            C.value ? (w(), L("div", {
              key: 0,
              style: me(d(i)),
              class: "va-alert__title"
            }, [
              H($.$slots, "title", {}, () => [
                xe(ke(e.title), 1)
              ])
            ], 4)) : Y("", !0),
            E("span", null, [
              H($.$slots, "default", {}, () => [
                xe(ke($.$props.description), 1)
              ])
            ])
          ], 4),
          e.closeable ? (w(), L("div", QV, [
            E("div", {
              role: "button",
              class: "va-alert__close--closeable",
              tabindex: "0",
              "aria-label": e.closeText || d(S)("closeAlert"),
              style: me(d(s)),
              onClick: m,
              onKeydown: [
                Ae(m, ["space"]),
                Ae(m, ["enter"])
              ]
            }, [
              H($.$slots, "close", {}, () => [
                e.closeText ? Y("", !0) : (w(), te(d(ot), {
                  key: 0,
                  name: e.closeIcon
                }, null, 8, ["name"])),
                xe(" " + ke(e.closeText), 1)
              ])
            ], 44, ex)
          ])) : Y("", !0)
        ], 4)) : Y("", !0)
      ]),
      _: 3
    }));
  }
}), nx = we(tx), Pg = {
  hideOnScroll: { type: Boolean, default: !1 },
  fixed: { type: Boolean, default: !1 },
  bottom: { type: Boolean, default: !1 }
};
function Lg(e, o) {
  const t = f(() => o.value ? !!e.hideOnScroll : !1), a = f(() => {
    if (!(!e.bottom && !t.value))
      return e.bottom && t.value ? "translateY(100%)" : e.bottom ? e.fixed ? "translateY(-100%)" : "translateY(0)" : "translateY(-100%)";
  }), l = f(() => e.fixed ? "fixed" : t.value ? "absolute" : void 0);
  return { fixedBarStyleComputed: f(() => {
    const i = {
      top: e.bottom && (t.value || e.fixed) ? "100%" : void 0,
      transform: e.hideOnScroll || e.fixed ? a.value : void 0
    };
    return l.value && Object.assign(i, { position: l.value }), i;
  }) };
}
function ox(e) {
  if (!e)
    throw new Error("No target was provided for `useScroll` hook!");
  return typeof e == "string" ? document.querySelector(e) : e;
}
function Og(e, o) {
  const t = He();
  let a;
  const l = N(!1), s = N(0), i = (c) => {
    const p = c.target, v = c.target instanceof Window ? p.scrollY : p.scrollTop;
    l.value = s.value < v, s.value = v;
  };
  return at(() => {
    a = e ? window : ox(o || t.value), a?.addEventListener("scroll", i, e);
  }), Gt(() => {
    a?.removeEventListener("scroll", i);
  }), { scrollRoot: t, isScrolledDown: l };
}
const ax = /* @__PURE__ */ oe({
  name: "VaAppBar",
  __name: "VaAppBar",
  props: {
    ...Pg,
    ...Ee,
    gradient: { type: Boolean, default: !1 },
    target: { type: [Object, String], default: "" },
    shadowOnScroll: { type: Boolean, default: !1 },
    shadowColor: { type: String, default: "" },
    color: { type: String, default: "primary" }
  },
  setup(e) {
    const o = e, { scrollRoot: t, isScrolledDown: a } = Og(o.fixed, o.target), { fixedBarStyleComputed: l } = Lg(o, a), { getColor: s, getGradientBackground: i, getBoxShadowColor: c } = Ke(), p = f(() => s(o.color)), { textColorComputed: v } = Kt(vn(o, "color")), m = f(() => a.value ? !!o.shadowOnScroll : !1), g = f(() => s(o.shadowColor, p.value)), y = f(() => {
      const C = c(o.shadowColor ? g.value : p.value);
      return m.value ? `var(--va-app-bar-shadow) ${C}` : "";
    }), b = f(() => ({
      ...l.value,
      background: o.gradient ? i(p.value) : p.value,
      boxShadow: y.value,
      color: v.value
    }));
    return (C, _) => (w(), L("header", {
      ref_key: "scrollRoot",
      ref: t,
      role: "toolbar",
      class: "va-app-bar",
      style: me(b.value)
    }, [
      H(C.$slots, "default")
    ], 4));
  }
}), rx = we(ax), lx = /* @__PURE__ */ oe({
  name: "VaAspectRatio",
  __name: "VaAspectRatio",
  props: {
    ...Ee,
    ratio: {
      type: [Number, String],
      default: "auto"
    },
    contentHeight: { type: [Number, String], default: 1 },
    contentWidth: { type: [Number, String], default: 1 },
    maxWidth: {
      type: [Number, String],
      default: 0,
      validator: (e) => Number(e) >= 0
    }
  },
  setup(e) {
    const o = e, t = et("contentHeight"), a = et("contentWidth"), l = f(() => o.ratio === "auto" && o.contentHeight === 1 && o.contentWidth === 1 ? 0 : isNaN(+o.ratio) ? a.value / t.value : o.ratio), s = f(() => {
      if (l.value)
        return { paddingBottom: `${1 / l.value * 100}%` };
    }), i = f(() => o.maxWidth ? `${o.maxWidth}px` : void 0);
    return (c, p) => (w(), L("div", {
      class: "va-aspect-ratio",
      style: me(`--va-max-width-computed: ${String(i.value)}`)
    }, [
      s.value ? (w(), L("div", {
        key: 0,
        style: me(s.value)
      }, null, 4)) : Y("", !0),
      H(c.$slots, "default")
    ], 4));
  }
}), Eg = we(lx), sx = oe({
  name: "VaFallback",
  props: {
    fallbackSrc: {
      type: String
    },
    fallbackText: {
      type: String
    },
    fallbackIcon: {
      type: String
    },
    fallbackRender: {
      type: Function
    }
  },
  components: { VaIcon: ot },
  emits: ["fallback"],
  setup(e, { emit: o }) {
    return at(() => {
      o("fallback");
    }), e.fallbackIcon ? () => bt(ot, {
      name: e.fallbackIcon
    }) : e.fallbackSrc ? () => bt("img", {
      src: e.fallbackSrc
    }) : e.fallbackRender ? () => {
      var t;
      return bt((t = e.fallbackRender) == null ? void 0 : t.call(e));
    } : () => bt("span", e.fallbackText);
  }
}), fr = we(sx);
function Rg(e) {
  switch (!0) {
    case Array.isArray(e):
      return e.reduce((o, t) => ({ ...o, [t]: null }), {});
    case (typeof e == "object" && e !== null):
      return e;
    default:
      return {};
  }
}
function xs(e, o, t = "props") {
  const { mixins: a, extends: l } = o;
  l && xs(e, l, t), a && a.forEach((i) => xs(e, i, t));
  const s = Rg(o[t]);
  for (const i in s)
    e[i] = s[i];
}
function ix(e) {
  return e.options ? e.options : e.__vccOpts || e.__b ? { ...e.__vccOpts, ...e.__b } : e;
}
function ux(e, o = "props") {
  const t = e.mixins ?? [], a = e.extends ?? [], l = {};
  xs(l, a, o);
  for (let s = 0; s < t.length; s++)
    xs(l, t[s], o);
  return Object.assign(l, Rg(e[o])), l;
}
const cx = (e) => ux(ix(e));
function ct(e, o) {
  const t = cx(e);
  return o ? Object.keys(t).reduce((a, l) => (o.includes(l) || t[l] === void 0 || (a[l] = typeof t[l] == "string" ? {} : t[l]), a), {}) : t;
}
function Va(e) {
  return [...new Set(e.emits)];
}
const _t = (e) => {
  const { props: o } = Pt();
  return f(() => Object.keys(e).reduce((t, a) => (t[a] = o[a], t), {}));
}, dx = ["src", "alt"], qv = ct(fr), fx = /* @__PURE__ */ oe({
  name: "VaAvatar",
  __name: "VaAvatar",
  props: {
    ...ul,
    ...Ea,
    ...Ee,
    ...qv,
    color: { type: String, default: "primary" },
    textColor: { type: String },
    square: { type: Boolean, default: !1 },
    fontSize: { type: String, default: "" },
    src: { type: String, default: null },
    icon: { type: String, default: "" },
    alt: { type: String, default: "" }
  },
  emits: ["error", "fallback"],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, { getColor: s } = Ke(), i = f(() => s(a.color)), c = f(() => {
      if (!(a.loading || a.src && !b.value))
        return i.value;
    }), { sizeComputed: p, fontSizeComputed: v } = Ra(a, "VaAvatar"), { textColorComputed: m } = Kt(c), g = f(() => ({
      fontSize: a.fontSize || v.value
    })), y = ht("va-avatar", () => ({
      ...It(a, ["square"])
    })), b = N(!1), C = ($) => {
      b.value = !0, l("error", $);
    };
    Se(() => a.src, () => {
      b.value = !1;
    });
    const _ = f(() => ({
      hasError: b.value,
      onError: C
    })), S = _t(qv);
    return o({
      hasLoadError: b
    }), ($, A) => (w(), L("div", {
      class: Be(["va-avatar", d(y)]),
      style: me([g.value, `--va-background-color-computed: ${String(c.value)};--va-text-color-computed: ${String(d(m))};--va-size-computed: ${String(d(p))}`])
    }, [
      $.$props.loading ? (w(), te(d(hr), {
        key: 0,
        size: d(p),
        color: i.value,
        indeterminate: ""
      }, null, 8, ["size", "color"])) : H($.$slots, "default", ye(se({ key: 1 }, _.value)), () => [
        $.$props.src && !b.value ? (w(), L("img", {
          key: 0,
          src: $.$props.src,
          alt: $.$props.alt,
          onError: C
        }, null, 40, dx)) : b.value && $.$props.src ? H($.$slots, "fallback", { key: 1 }, () => [
          G(d(fr), se(d(S), {
            onFallback: A[0] || (A[0] = (x) => $.$emit("fallback"))
          }), null, 16)
        ]) : $.$props.icon ? (w(), te(d(ot), {
          key: 2,
          name: $.$props.icon
        }, null, 8, ["name"])) : H($.$slots, "fallback", { key: 3 }, () => [
          G(d(fr), se(d(S), {
            onFallback: A[1] || (A[1] = (x) => $.$emit("fallback"))
          }), null, 16)
        ])
      ])
    ], 6));
  }
}), As = we(fx), jv = ct(As), vx = /* @__PURE__ */ oe({
  name: "VaAvatarGroup",
  __name: "VaAvatarGroup",
  props: {
    ...Ea,
    ...Ee,
    ...jv,
    max: {
      type: [Number, String],
      default: 0
    },
    vertical: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: () => []
    },
    /** If there are more avatars that can be displayed we show rest number. This prop changes color of rest indicator. */
    restColor: {
      type: String,
      default: "secondary"
    }
  },
  setup(e) {
    const o = e, t = et("max"), a = ht("va-avatar-group", () => ({
      ...It(o, ["vertical"])
    })), l = f(() => t.value && t.value <= o.options.length ? o.options.slice(0, t.value) : o.options), s = f(() => {
      const m = o.options.length > 0, g = l.value.length < o.options.length, y = o.options.length - (t.value || 0);
      return m && g ? y : 0;
    }), { sizeComputed: i, fontSizeComputed: c } = Ra(o, "VaAvatarGroup"), p = _t(jv), v = f(() => ({
      ...p.value,
      fontSize: c.value,
      size: i.value
    }));
    return (m, g) => (w(), L("div", {
      class: Be(["va-avatar-group", d(a)]),
      role: "list"
    }, [
      (w(!0), L(Le, null, je(l.value, (y, b) => (w(), te(d(As), se({ key: b }, { ...v.value, ...y }, { role: "listitem" }), null, 16))), 128)),
      s.value > 0 ? H(m.$slots, "rest", ye(se({ key: 0 }, v.value)), () => [
        G(d(As), se(v.value, {
          color: e.restColor,
          class: "va-avatar-group__rest",
          role: "listitem"
        }), {
          default: U(() => [
            xe(" +" + ke(s.value), 1)
          ]),
          _: 1
        }, 16, ["color"])
      ]) : Y("", !0)
    ], 2));
  }
}), px = we(vx), mx = ["aria-label", "onKeydown"], gx = /* @__PURE__ */ oe({
  name: "VaBacktop",
  __name: "VaBacktop",
  props: {
    ...Ee,
    target: {
      type: [Object, String],
      default: void 0
    },
    visibilityHeight: { type: [Number, String], default: 300 },
    speed: { type: [Number, String], default: 50 },
    verticalOffset: { type: String, default: "1rem" },
    horizontalOffset: { type: String, default: "1rem" },
    color: { type: String, default: "" },
    horizontalPosition: {
      type: String,
      default: "right",
      validator: (e) => ["right", "left"].includes(e)
    },
    verticalPosition: {
      type: String,
      default: "bottom",
      validator: (e) => ["bottom", "top"].includes(e)
    },
    ariaLabel: Fe("$t:backToTop")
  },
  setup(e) {
    const o = e, t = N(0), a = f(() => ({
      [o.verticalPosition]: o.verticalOffset,
      [o.horizontalPosition]: o.horizontalOffset
    }));
    let l;
    const s = et("visibilityHeight"), i = et("speed"), c = () => {
      if (!o.target)
        return window;
      if (typeof o.target == "string") {
        const _ = document.querySelector(o.target);
        return _ || (yt(`Target element [${o.target}] is not found, falling back to window.`), window);
      }
      return o.target;
    }, p = N(!1), v = N(0), m = () => {
      if (!p.value) {
        if (p.value = !0, l instanceof Window) {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          return;
        }
        v.value = window.setInterval(() => {
          if (l instanceof Element)
            if (l.scrollTop === 0)
              clearInterval(v.value), p.value = !1;
            else {
              const _ = Math.floor(l.scrollTop - i.value);
              l.scrollTo(0, _);
            }
        }, 15);
      }
    }, g = () => {
      t.value = l instanceof Window ? l.scrollY : l.scrollTop;
    }, y = Ma(), b = f(() => y ? !1 : t.value > s.value);
    y || (at(() => {
      l = c(), l.addEventListener("scroll", g, !0);
    }), Gt(() => l?.removeEventListener("scroll", g)));
    const { tp: C } = Ct();
    return (_, S) => b.value ? (w(), L("div", {
      key: 0,
      class: "va-backtop",
      role: "button",
      "aria-label": d(C)(_.$props.ariaLabel),
      tabindex: "1",
      style: me(a.value),
      onClick: m,
      onKeydown: Ae($e(m, ["stop"]), ["enter"])
    }, [
      H(_.$slots, "default", {}, () => [
        G(d(lt), {
          "aria-hidden": "true",
          icon: "va-arrow-up",
          color: e.color
        }, null, 8, ["color"])
      ])
    ], 44, mx)) : Y("", !0);
  }
}), yx = we(gx), Dg = ["top", "bottom"], Mg = ["left", "right"], hx = [...Dg, ...Mg], bx = ["start", "end", "center"], _x = hx.reduce((e, o) => (e.push(o), bx.forEach((t) => e.push(`${o}-${t}`)), e), ["auto"]), Cx = Dg.reduce((e, o) => (Mg.forEach((t) => {
  e.push(`${o}-${t}`), e.push(`${t}-${o}`);
}), e), []), Fg = [..._x, ...Cx], Sx = {
  "top-left": "top-start",
  "left-top": "top-start",
  "top-right": "top-end",
  "right-top": "top-end",
  "bottom-left": "bottom-start",
  "left-bottom": "bottom-start",
  "bottom-right": "bottom-end",
  "right-bottom": "bottom-end"
}, Ng = {
  placement: {
    type: String,
    default: "auto",
    validator: (e) => Fg.includes(e)
  }
}, zg = (e) => {
  const o = f(() => (Sx[e.placement] || e.placement).split("-")), t = f(() => {
    const l = o.value[0];
    return l === "auto" ? "bottom" : l;
  }), a = f(() => o.value[1] || "center");
  return { position: t, align: a };
}, Hg = () => {
  const e = (a) => typeof a == "string" ? !isNaN(+a) || a.endsWith("px") || a.endsWith("rem") : !1;
  return { isParsableMeasure: e, isParsablePositiveMeasure: (a) => typeof a == "number" ? a >= 0 : e(a) && parseInt(a) >= 0, parseSizeValue: (a, l = 16) => {
    const s = d(a);
    if (typeof s == "string") {
      const i = parseInt(s);
      return isNaN(i) ? 0 : s.endsWith("rem") ? i * d(l) : i;
    }
    return s;
  } };
}, { isParsableMeasure: Yv, parseSizeValue: Xv } = Hg(), wx = {
  overlap: { type: Boolean, default: !1 },
  placement: {
    type: String,
    default: "top-end",
    validator: (e) => Fg.includes(e)
  },
  offset: {
    type: [Number, String, Array],
    default: 0,
    validator: (e) => Array.isArray(e) ? e.every(Yv) : typeof e == "string" ? Yv(e) : !isNaN(e)
  }
}, $x = (e, o) => {
  if (!o.value)
    return {};
  const { position: t, align: a } = zg(e), l = f(() => ({
    start: e.overlap ? "-50%" : "-100%",
    center: "-50%",
    end: e.overlap ? "-50%" : "0%"
  })[a.value]), s = f(() => {
    if (!e.offset)
      return {};
    const p = ["left", "right"].includes(t.value) ? "top" : "left", v = p === "top" ? "left" : "top";
    if (Array.isArray(e.offset)) {
      const [g, y] = e.offset.map(Xv);
      return {
        [`margin-${p}`]: `${g}px`,
        [`margin-${v}`]: `${y}px`
      };
    }
    const m = Xv(e.offset);
    return {
      [`margin-${v}`]: `${m}px`
    };
  }), i = f(() => {
    const p = ["left", "right"].includes(t.value) ? "top" : "left", v = p === "top" ? "left" : "top";
    let m = "0%";
    return v === "top" && t.value === "bottom" && (m = "100%"), v === "left" && t.value === "right" && (m = "100%"), {
      start: { [p]: "0%", [v]: m },
      center: { [p]: "50%", [v]: m },
      end: { [p]: "100%", [v]: m }
    }[a.value];
  }), c = f(() => {
    const p = {
      top: {
        x: l.value,
        y: e.overlap ? "-50%" : "-100%"
      },
      bottom: {
        x: l.value,
        y: e.overlap ? "-50%" : "0%"
      },
      left: {
        x: e.overlap ? "-50%" : "-100%",
        y: l.value
      },
      right: {
        x: e.overlap ? "-50%" : "0%",
        y: l.value
      }
    }, { x: v, y: m } = p[t.value];
    return { transform: `translate(${v}, ${m})` };
  });
  return f(() => ({
    ...i.value,
    ...c.value,
    ...s.value
  }));
}, kx = {
  props: "prop",
  attrs: "prop",
  slots: "slot"
}, Vx = (e, o = ["props", "attrs"]) => {
  if (!yr)
    return;
  const t = Pt();
  if (!t)
    throw new Error("`useDeprecated` hook must be used only inside of setup function!");
  const a = t.type.name, l = d(e);
  o.every((s) => {
    var i;
    const c = kx[s], p = (v) => console.warn(`The '${v}' ${c} (${a} component) is deprecated! Please, check the documentation.`);
    if (s === "props") {
      const v = ((i = t.propsOptions) == null ? void 0 : i[0]) || {}, m = t.props || {};
      return l.forEach((g) => {
        v[g] && m[g] !== v[g].default && p(g);
      }), !0;
    }
    return Object.keys({ ...t[s] }).forEach((v) => {
      l.includes(v) && p(v);
    }), !0;
  });
}, xx = ["aria-labelledby"], Ax = { class: "va-badge__text" }, Ix = /* @__PURE__ */ oe({
  name: "VaBadge",
  __name: "VaBadge",
  props: {
    ...Ee,
    ...wx,
    color: { type: String, default: "danger" },
    textColor: { type: String },
    text: { type: [String, Number], default: "" },
    multiLine: { type: Boolean, default: !1 },
    visibleEmpty: { type: Boolean, default: !1 },
    dot: { type: Boolean, default: !1 },
    // TODO: Remove after 1.8.0
    transparent: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e;
    Vx(["transparent"]);
    const t = hn(), a = f(() => !(o.text || o.visibleEmpty || o.dot || t.text)), l = f(() => !!(t.default || o.dot)), s = ht("va-badge", () => ({
      ...It(o, ["visibleEmpty", "dot", "multiLine"]),
      empty: a.value,
      floating: l.value
    })), { getColor: i } = Ke(), c = f(() => i(o.color)), { textColorComputed: p } = Kt(c), v = $x(o, l), m = f(() => ({
      color: p.value,
      borderColor: c.value,
      backgroundColor: c.value,
      opacity: o.transparent ? 0.5 : 1,
      ...d(v)
    })), g = f(() => o.text ? String(o.text) : void 0);
    return (y, b) => (w(), L("div", {
      class: Be(["va-badge", d(s)]),
      role: "status",
      "aria-labelledby": g.value
    }, [
      E("span", {
        class: "va-badge__text-wrapper",
        style: me(m.value)
      }, [
        E("span", Ax, [
          H(y.$slots, "text", {}, () => [
            xe(ke(e.text), 1)
          ])
        ])
      ], 4),
      H(y.$slots, "default")
    ], 10, xx));
  }
}), Wg = we(Ix), Zv = (e, o) => Object.prototype.hasOwnProperty.call(e, o), Jv = (e) => e && typeof e == "function" ? e() : e, Ug = {
  align: {
    type: String,
    default: "left"
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, Tx = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  between: "space-between",
  around: "space-around"
}, Bx = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  stretch: "stretch"
}, Px = (e, o) => o ? "center" : e ? Tx[e] : "flex-start", Lx = (e, o) => o ? Bx[e] : "center";
function Gg(e) {
  return {
    alignComputed: f(() => ({
      display: "flex",
      flexDirection: e.vertical ? "column" : "row",
      justifyContent: Px(e.align, e.vertical),
      alignItems: Lx(e.align, e.vertical)
    }))
  };
}
const Ox = oe({
  name: "VaBreadcrumbs",
  props: {
    ...Ug,
    ...Ee,
    separator: { type: String, default: "/" },
    color: { type: String, default: null },
    disabledColor: { type: String, default: "secondary" },
    activeColor: { type: String, default: null },
    separatorColor: { type: String, default: null },
    ariaLabel: Fe("$t:breadcrumbs")
  },
  setup(e, { slots: o }) {
    const { alignComputed: t } = Gg(e), { getColor: a } = Ke(), l = f(() => e.separatorColor ? a(e.separatorColor) : null), s = f(() => e.color ? a(e.color) : null), i = f(() => e.activeColor ? a(e.activeColor) : null), c = (b, C) => {
      const _ = C && C.type === Le && C.children ? C.children : [C];
      return [
        ...b,
        ..._.filter((S) => {
          var $, A;
          return !!((A = ($ = S?.type) == null ? void 0 : $.name) != null && A.match(/VaBreadcrumbsItem$/));
        })
      ];
    }, p = () => {
      const b = Jv(o.separator) || [e.separator];
      return bt("span", {
        "aria-hidden": !0,
        class: ["va-breadcrumbs__separator"],
        style: [{ color: l.value }]
      }, b);
    }, v = (b) => {
      const C = b?.props;
      return !C || !Zv(C, "disabled") ? !1 : C.disabled === "" ? !0 : !!C.disabled;
    }, m = N(!0), g = () => {
      const b = Jv(o.default);
      if (!b)
        return;
      const C = b.reduce(c, []) || [], _ = C.length, S = (T) => T === _ - 1, $ = (T) => {
        const O = T?.props;
        return !O || !Zv(O, "to") ? !1 : !!(O.to && !O.disabled);
      }, A = (T, O) => bt(
        "span",
        {
          class: ["va-breadcrumbs__item", { "va-breadcrumbs__item--disabled": v(T) }],
          "aria-current": S(O) && $(T) ? "location" : !1,
          style: {
            color: v(T) ? a(e.disabledColor) : S(O) ? i.value : s.value
          }
        },
        [T]
      ), x = [];
      return _ && C.forEach((T, O) => {
        m.value && !$(T) && (m.value = !1), x.push(A(T, O)), S(O) || x.push(p());
      }), x;
    }, { tp: y } = Ct();
    return () => bt("div", {
      class: "va-breadcrumbs",
      style: t.value,
      role: m.value ? "navigation" : void 0,
      "aria-label": m.value ? y(e.ariaLabel) : void 0
    }, g());
  }
}), Ex = /* @__PURE__ */ oe({
  name: "VaBreadcrumbsItem",
  __name: "VaBreadcrumbsItem",
  props: {
    ...Na,
    disabled: { type: Boolean, default: !1 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const o = e, { tagComputed: t, hrefComputed: a, isLinkTag: l } = ia(o), s = f(() => ({
      "va-breadcrumb-item--link": l.value
    }));
    return (i, c) => (w(), te(zt(d(t)), {
      class: Be(["va-breadcrumb-item", s.value]),
      "active-class": i.$props.activeClass,
      href: d(a),
      to: i.$props.to,
      target: i.$props.target,
      replace: i.$props.replace,
      append: i.$props.append,
      exact: i.$props.exact,
      "exact-active-class": i.$props.exactActiveClass
    }, {
      default: U(() => [
        H(i.$slots, "default", {}, () => [
          xe(ke(e.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["class", "active-class", "href", "to", "target", "replace", "append", "exact", "exact-active-class"]));
  }
}), Rx = we(Ex), Dx = we(Ox), Qv = bo(ct(lt), ["block", "gradient"]), Mx = /* @__PURE__ */ oe({
  name: "VaButtonGroup",
  __name: "VaButtonGroup",
  props: {
    ...Qv,
    ...Ee,
    grow: { type: Boolean, default: !1 },
    gradient: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, { getColor: t, getGradientBackground: a } = Ke(), l = f(() => t(o.color)), { textColorComputed: s } = Kt(l), i = _t(Qv), c = f(() => ({
      VaButton: {
        ...i.value,
        ...o.gradient && {
          color: "#00000000",
          textColor: s.value
        }
      }
    })), p = ht("va-button-group", () => ({
      square: !o.round,
      grow: o.grow,
      small: o.size === "small",
      large: o.size === "large"
    })), v = f(
      () => o.gradient ? a(l.value) : "transparent"
    );
    return (m, g) => (w(), L("div", {
      class: Be(["va-button-group", d(p)]),
      style: me(`--va-background-color: ${String(v.value)}`)
    }, [
      G(d(il), { components: c.value }, {
        default: U(() => [
          H(m.$slots, "default")
        ]),
        _: 3
      }, 8, ["components"])
    ], 6));
  }
}), Ws = we(Mx), bc = (e, o) => {
  let t = null;
  const a = function(...l) {
    t && clearTimeout(t), t = setTimeout(() => {
      t = null, e.apply(this, l);
    }, o);
  };
  return a.cancel = () => {
    t && clearTimeout(t), t = null;
  }, a;
}, ep = (e) => {
  let o = null;
  const t = () => bc(() => {
    o?.(), o = null;
  }, d(e));
  let a = t();
  return yn(e) && Se(e, () => {
    a = t();
  }), {
    // todo check if we need to create proxy here
    debounced: (l) => {
      o = l, a();
    },
    cancel: () => a.cancel()
  };
}, tp = (e) => {
  const o = e.target;
  return !(!(o.tagName === "INPUT" || o.tagName === "TEXTAREA") || o.attributes.getNamedItem("readonly"));
}, Fx = (e) => Array.isArray(e), Nx = (e, o, t, a) => {
  const l = (g) => (g = g.replace(/-/g, "").toLowerCase(), g === "space" ? " " : g === "rightclick" ? "contextmenu" : g), s = f(() => Fx(a.trigger) ? a.trigger.map((g) => l(g)) : [l(a.trigger)]);
  $t("keydown", (g) => {
    a.disabled || (g.key === "Escape" && e.value && (e.value = !1, g.preventDefault()), !tp(g) && s.value.includes(l(g.key)) && (e.value = !e.value, g.preventDefault()));
  }, o), $t("keydown", (g) => {
    a.disabled || g.key === "Escape" && e.value && (e.value = !1, g.preventDefault());
  }, t), $t(["click", "contextmenu", "dblclick"], (g) => {
    a.disabled || tp(g) || s.value.includes(l(g.type)) && (g.preventDefault(), e.value && a.closeOnAnchorClick ? (e.value = !1, a.cursor && setTimeout(() => {
      e.value = !0;
    }, 16)) : e.value = !0);
  }, o), $t(["click", "contextmenu", "dblclick"], (g) => {
    a.closeOnContentClick && (e.value = !1);
  }, t);
  const { debounced: i, cancel: c } = ep(et("hoverOverTimeout")), { debounced: p, cancel: v } = ep(et("hoverOutTimeout")), m = (g) => {
    if (!a.disabled && s.value.includes("hover"))
      if (g.type === "mouseleave") {
        if (c(), !a.isContentHoverable) {
          e.value = !1;
          return;
        }
        p(() => {
          e.value = !1;
        });
      } else
        v(), i(() => {
          e.value = !0;
        });
  };
  $t(["mouseleave", "mouseenter"], m, o), $t(["mouseleave", "mouseenter"], m, t);
}, zx = (e) => {
  const o = N(), t = Fa(), a = Fs();
  return {
    anchorRef: f({
      set(s) {
        o.value = Mt(s);
      },
      get() {
        var s, i, c;
        return a.value, typeof e.anchor == "string" ? ((s = t.value) == null ? void 0 : s.querySelector(e.anchor)) ?? o.value : typeof e.anchor == "object" ? e.anchor : e.anchorSelector ? ((i = t.value) == null ? void 0 : i.querySelector(e.anchorSelector)) ?? o.value : e.innerAnchorSelector && o.value ? ((c = o.value) == null ? void 0 : c.querySelector(e.innerAnchorSelector)) ?? o.value : o.value;
      }
    })
  };
}, Hx = (e, o) => {
  const t = Ro({ x: 0, y: 0 });
  return $t(["mousemove", "mousedown", "mouseup"], (a) => {
    var l;
    if (!o.value)
      return;
    const { x: s, y: i } = ((l = e.value) == null ? void 0 : l.getBoundingClientRect()) ?? { x: 0, y: 0 };
    t.x = a.clientX - s, t.y = a.clientY - i;
  }, e), f(() => ({
    getBoundingClientRect() {
      var a;
      const { x: l, y: s } = ((a = e.value) == null ? void 0 : a.getBoundingClientRect()) ?? { x: 0, y: 0 }, i = t.x + l, c = t.y + s;
      return {
        width: 0,
        height: 0,
        x: i,
        y: c,
        top: c,
        right: i,
        bottom: c,
        left: i
      };
    },
    contextElement: e.value
  }));
}, vr = Math.min, En = Math.max, Is = Math.round, fs = Math.floor, ho = (e) => ({
  x: e,
  y: e
}), Wx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ux = {
  start: "end",
  end: "start"
};
function np(e, o, t) {
  return En(e, vr(o, t));
}
function dl(e, o) {
  return typeof e == "function" ? e(o) : e;
}
function aa(e) {
  return e.split("-")[0];
}
function fl(e) {
  return e.split("-")[1];
}
function Kg(e) {
  return e === "x" ? "y" : "x";
}
function qg(e) {
  return e === "y" ? "height" : "width";
}
const Gx = /* @__PURE__ */ new Set(["top", "bottom"]);
function Do(e) {
  return Gx.has(aa(e)) ? "y" : "x";
}
function jg(e) {
  return Kg(Do(e));
}
function Kx(e, o, t) {
  t === void 0 && (t = !1);
  const a = fl(e), l = jg(e), s = qg(l);
  let i = l === "x" ? a === (t ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return o.reference[s] > o.floating[s] && (i = Ts(i)), [i, Ts(i)];
}
function qx(e) {
  const o = Ts(e);
  return [Yu(e), o, Yu(o)];
}
function Yu(e) {
  return e.replace(/start|end/g, (o) => Ux[o]);
}
const op = ["left", "right"], ap = ["right", "left"], jx = ["top", "bottom"], Yx = ["bottom", "top"];
function Xx(e, o, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? o ? ap : op : o ? op : ap;
    case "left":
    case "right":
      return o ? jx : Yx;
    default:
      return [];
  }
}
function Zx(e, o, t, a) {
  const l = fl(e);
  let s = Xx(aa(e), t === "start", a);
  return l && (s = s.map((i) => i + "-" + l), o && (s = s.concat(s.map(Yu)))), s;
}
function Ts(e) {
  return e.replace(/left|right|bottom|top/g, (o) => Wx[o]);
}
function Jx(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qx(e) {
  return typeof e != "number" ? Jx(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Bs(e) {
  const {
    x: o,
    y: t,
    width: a,
    height: l
  } = e;
  return {
    width: a,
    height: l,
    top: t,
    left: o,
    right: o + a,
    bottom: t + l,
    x: o,
    y: t
  };
}
function rp(e, o, t) {
  let {
    reference: a,
    floating: l
  } = e;
  const s = Do(o), i = jg(o), c = qg(i), p = aa(o), v = s === "y", m = a.x + a.width / 2 - l.width / 2, g = a.y + a.height / 2 - l.height / 2, y = a[c] / 2 - l[c] / 2;
  let b;
  switch (p) {
    case "top":
      b = {
        x: m,
        y: a.y - l.height
      };
      break;
    case "bottom":
      b = {
        x: m,
        y: a.y + a.height
      };
      break;
    case "right":
      b = {
        x: a.x + a.width,
        y: g
      };
      break;
    case "left":
      b = {
        x: a.x - l.width,
        y: g
      };
      break;
    default:
      b = {
        x: a.x,
        y: a.y
      };
  }
  switch (fl(o)) {
    case "start":
      b[i] -= y * (t && v ? -1 : 1);
      break;
    case "end":
      b[i] += y * (t && v ? -1 : 1);
      break;
  }
  return b;
}
async function e2(e, o) {
  var t;
  o === void 0 && (o = {});
  const {
    x: a,
    y: l,
    platform: s,
    rects: i,
    elements: c,
    strategy: p
  } = e, {
    boundary: v = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: g = "floating",
    altBoundary: y = !1,
    padding: b = 0
  } = dl(o, e), C = Qx(b), S = c[y ? g === "floating" ? "reference" : "floating" : g], $ = Bs(await s.getClippingRect({
    element: (t = await (s.isElement == null ? void 0 : s.isElement(S))) == null || t ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: v,
    rootBoundary: m,
    strategy: p
  })), A = g === "floating" ? {
    x: a,
    y: l,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), T = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = Bs(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: A,
    offsetParent: x,
    strategy: p
  }) : A);
  return {
    top: ($.top - O.top + C.top) / T.y,
    bottom: (O.bottom - $.bottom + C.bottom) / T.y,
    left: ($.left - O.left + C.left) / T.x,
    right: (O.right - $.right + C.right) / T.x
  };
}
const t2 = async (e, o, t) => {
  const {
    placement: a = "bottom",
    strategy: l = "absolute",
    middleware: s = [],
    platform: i
  } = t, c = s.filter(Boolean), p = await (i.isRTL == null ? void 0 : i.isRTL(o));
  let v = await i.getElementRects({
    reference: e,
    floating: o,
    strategy: l
  }), {
    x: m,
    y: g
  } = rp(v, a, p), y = a, b = {}, C = 0;
  for (let S = 0; S < c.length; S++) {
    var _;
    const {
      name: $,
      fn: A
    } = c[S], {
      x,
      y: T,
      data: O,
      reset: D
    } = await A({
      x: m,
      y: g,
      initialPlacement: a,
      placement: y,
      strategy: l,
      middlewareData: b,
      rects: v,
      platform: {
        ...i,
        detectOverflow: (_ = i.detectOverflow) != null ? _ : e2
      },
      elements: {
        reference: e,
        floating: o
      }
    });
    m = x ?? m, g = T ?? g, b = {
      ...b,
      [$]: {
        ...b[$],
        ...O
      }
    }, D && C <= 50 && (C++, typeof D == "object" && (D.placement && (y = D.placement), D.rects && (v = D.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: o,
      strategy: l
    }) : D.rects), {
      x: m,
      y: g
    } = rp(v, y, p)), S = -1);
  }
  return {
    x: m,
    y: g,
    placement: y,
    strategy: l,
    middlewareData: b
  };
}, n2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(o) {
      var t, a;
      const {
        placement: l,
        middlewareData: s,
        rects: i,
        initialPlacement: c,
        platform: p,
        elements: v
      } = o, {
        mainAxis: m = !0,
        crossAxis: g = !0,
        fallbackPlacements: y,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: _ = !0,
        ...S
      } = dl(e, o);
      if ((t = s.arrow) != null && t.alignmentOffset)
        return {};
      const $ = aa(l), A = Do(c), x = aa(c) === c, T = await (p.isRTL == null ? void 0 : p.isRTL(v.floating)), O = y || (x || !_ ? [Ts(c)] : qx(c)), D = C !== "none";
      !y && D && O.push(...Zx(c, _, C, T));
      const V = [c, ...O], P = await p.detectOverflow(o, S), R = [];
      let J = ((a = s.flip) == null ? void 0 : a.overflows) || [];
      if (m && R.push(P[$]), g) {
        const j = Kx(l, i, T);
        R.push(P[j[0]], P[j[1]]);
      }
      if (J = [...J, {
        placement: l,
        overflows: R
      }], !R.every((j) => j <= 0)) {
        var de, ne;
        const j = (((de = s.flip) == null ? void 0 : de.index) || 0) + 1, W = V[j];
        if (W && (!(g === "alignment" ? A !== Do(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        J.every((z) => Do(z.placement) === A ? z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: j,
              overflows: J
            },
            reset: {
              placement: W
            }
          };
        let q = (ne = J.filter((Z) => Z.overflows[0] <= 0).sort((Z, z) => Z.overflows[1] - z.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!q)
          switch (b) {
            case "bestFit": {
              var M;
              const Z = (M = J.filter((z) => {
                if (D) {
                  const pe = Do(z.placement);
                  return pe === A || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter((pe) => pe > 0).reduce((pe, le) => pe + le, 0)]).sort((z, pe) => z[1] - pe[1])[0]) == null ? void 0 : M[0];
              Z && (q = Z);
              break;
            }
            case "initialPlacement":
              q = c;
              break;
          }
        if (l !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
}, o2 = /* @__PURE__ */ new Set(["left", "top"]);
async function a2(e, o) {
  const {
    placement: t,
    platform: a,
    elements: l
  } = e, s = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), i = aa(t), c = fl(t), p = Do(t) === "y", v = o2.has(i) ? -1 : 1, m = s && p ? -1 : 1, g = dl(o, e);
  let {
    mainAxis: y,
    crossAxis: b,
    alignmentAxis: C
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return c && typeof C == "number" && (b = c === "end" ? C * -1 : C), p ? {
    x: b * m,
    y: y * v
  } : {
    x: y * v,
    y: b * m
  };
}
const r2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(o) {
      var t, a;
      const {
        x: l,
        y: s,
        placement: i,
        middlewareData: c
      } = o, p = await a2(o, e);
      return i === ((t = c.offset) == null ? void 0 : t.placement) && (a = c.arrow) != null && a.alignmentOffset ? {} : {
        x: l + p.x,
        y: s + p.y,
        data: {
          ...p,
          placement: i
        }
      };
    }
  };
}, l2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(o) {
      const {
        x: t,
        y: a,
        placement: l,
        platform: s
      } = o, {
        mainAxis: i = !0,
        crossAxis: c = !1,
        limiter: p = {
          fn: ($) => {
            let {
              x: A,
              y: x
            } = $;
            return {
              x: A,
              y: x
            };
          }
        },
        ...v
      } = dl(e, o), m = {
        x: t,
        y: a
      }, g = await s.detectOverflow(o, v), y = Do(aa(l)), b = Kg(y);
      let C = m[b], _ = m[y];
      if (i) {
        const $ = b === "y" ? "top" : "left", A = b === "y" ? "bottom" : "right", x = C + g[$], T = C - g[A];
        C = np(x, C, T);
      }
      if (c) {
        const $ = y === "y" ? "top" : "left", A = y === "y" ? "bottom" : "right", x = _ + g[$], T = _ - g[A];
        _ = np(x, _, T);
      }
      const S = p.fn({
        ...o,
        [b]: C,
        [y]: _
      });
      return {
        ...S,
        data: {
          x: S.x - t,
          y: S.y - a,
          enabled: {
            [b]: i,
            [y]: c
          }
        }
      };
    }
  };
}, s2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(o) {
      var t, a;
      const {
        placement: l,
        rects: s,
        platform: i,
        elements: c
      } = o, {
        apply: p = () => {
        },
        ...v
      } = dl(e, o), m = await i.detectOverflow(o, v), g = aa(l), y = fl(l), b = Do(l) === "y", {
        width: C,
        height: _
      } = s.floating;
      let S, $;
      g === "top" || g === "bottom" ? (S = g, $ = y === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : ($ = g, S = y === "end" ? "top" : "bottom");
      const A = _ - m.top - m.bottom, x = C - m.left - m.right, T = vr(_ - m[S], A), O = vr(C - m[$], x), D = !o.middlewareData.shift;
      let V = T, P = O;
      if ((t = o.middlewareData.shift) != null && t.enabled.x && (P = x), (a = o.middlewareData.shift) != null && a.enabled.y && (V = A), D && !y) {
        const J = En(m.left, 0), de = En(m.right, 0), ne = En(m.top, 0), M = En(m.bottom, 0);
        b ? P = C - 2 * (J !== 0 || de !== 0 ? J + de : En(m.left, m.right)) : V = _ - 2 * (ne !== 0 || M !== 0 ? ne + M : En(m.top, m.bottom));
      }
      await p({
        ...o,
        availableWidth: P,
        availableHeight: V
      });
      const R = await i.getDimensions(c.floating);
      return C !== R.width || _ !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Us() {
  return typeof window < "u";
}
function za(e) {
  return _c(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Rn(e) {
  var o;
  return (e == null || (o = e.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function wo(e) {
  var o;
  return (o = (_c(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : o.documentElement;
}
function _c(e) {
  return Us() ? e instanceof Node || e instanceof Rn(e).Node : !1;
}
function ro(e) {
  return Us() ? e instanceof Element || e instanceof Rn(e).Element : !1;
}
function _o(e) {
  return Us() ? e instanceof HTMLElement || e instanceof Rn(e).HTMLElement : !1;
}
function lp(e) {
  return !Us() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Rn(e).ShadowRoot;
}
const i2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function vl(e) {
  const {
    overflow: o,
    overflowX: t,
    overflowY: a,
    display: l
  } = lo(e);
  return /auto|scroll|overlay|hidden|clip/.test(o + a + t) && !i2.has(l);
}
const u2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function c2(e) {
  return u2.has(za(e));
}
const d2 = [":popover-open", ":modal"];
function Gs(e) {
  return d2.some((o) => {
    try {
      return e.matches(o);
    } catch {
      return !1;
    }
  });
}
const f2 = ["transform", "translate", "scale", "rotate", "perspective"], v2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], p2 = ["paint", "layout", "strict", "content"];
function Cc(e) {
  const o = Sc(), t = ro(e) ? lo(e) : e;
  return f2.some((a) => t[a] ? t[a] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !o && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !o && (t.filter ? t.filter !== "none" : !1) || v2.some((a) => (t.willChange || "").includes(a)) || p2.some((a) => (t.contain || "").includes(a));
}
function m2(e) {
  let o = ra(e);
  for (; _o(o) && !pr(o); ) {
    if (Cc(o))
      return o;
    if (Gs(o))
      return null;
    o = ra(o);
  }
  return null;
}
function Sc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const g2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function pr(e) {
  return g2.has(za(e));
}
function lo(e) {
  return Rn(e).getComputedStyle(e);
}
function Ks(e) {
  return ro(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ra(e) {
  if (za(e) === "html")
    return e;
  const o = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    lp(e) && e.host || // Fallback.
    wo(e)
  );
  return lp(o) ? o.host : o;
}
function Yg(e) {
  const o = ra(e);
  return pr(o) ? e.ownerDocument ? e.ownerDocument.body : e.body : _o(o) && vl(o) ? o : Yg(o);
}
function ol(e, o, t) {
  var a;
  o === void 0 && (o = []), t === void 0 && (t = !0);
  const l = Yg(e), s = l === ((a = e.ownerDocument) == null ? void 0 : a.body), i = Rn(l);
  if (s) {
    const c = Xu(i);
    return o.concat(i, i.visualViewport || [], vl(l) ? l : [], c && t ? ol(c) : []);
  }
  return o.concat(l, ol(l, [], t));
}
function Xu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xg(e) {
  const o = lo(e);
  let t = parseFloat(o.width) || 0, a = parseFloat(o.height) || 0;
  const l = _o(e), s = l ? e.offsetWidth : t, i = l ? e.offsetHeight : a, c = Is(t) !== s || Is(a) !== i;
  return c && (t = s, a = i), {
    width: t,
    height: a,
    $: c
  };
}
function wc(e) {
  return ro(e) ? e : e.contextElement;
}
function cr(e) {
  const o = wc(e);
  if (!_o(o))
    return ho(1);
  const t = o.getBoundingClientRect(), {
    width: a,
    height: l,
    $: s
  } = Xg(o);
  let i = (s ? Is(t.width) : t.width) / a, c = (s ? Is(t.height) : t.height) / l;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const y2 = /* @__PURE__ */ ho(0);
function Zg(e) {
  const o = Rn(e);
  return !Sc() || !o.visualViewport ? y2 : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function h2(e, o, t) {
  return o === void 0 && (o = !1), !t || o && t !== Rn(e) ? !1 : o;
}
function Pa(e, o, t, a) {
  o === void 0 && (o = !1), t === void 0 && (t = !1);
  const l = e.getBoundingClientRect(), s = wc(e);
  let i = ho(1);
  o && (a ? ro(a) && (i = cr(a)) : i = cr(e));
  const c = h2(s, t, a) ? Zg(s) : ho(0);
  let p = (l.left + c.x) / i.x, v = (l.top + c.y) / i.y, m = l.width / i.x, g = l.height / i.y;
  if (s) {
    const y = Rn(s), b = a && ro(a) ? Rn(a) : a;
    let C = y, _ = Xu(C);
    for (; _ && a && b !== C; ) {
      const S = cr(_), $ = _.getBoundingClientRect(), A = lo(_), x = $.left + (_.clientLeft + parseFloat(A.paddingLeft)) * S.x, T = $.top + (_.clientTop + parseFloat(A.paddingTop)) * S.y;
      p *= S.x, v *= S.y, m *= S.x, g *= S.y, p += x, v += T, C = Rn(_), _ = Xu(C);
    }
  }
  return Bs({
    width: m,
    height: g,
    x: p,
    y: v
  });
}
function qs(e, o) {
  const t = Ks(e).scrollLeft;
  return o ? o.left + t : Pa(wo(e)).left + t;
}
function Jg(e, o) {
  const t = e.getBoundingClientRect(), a = t.left + o.scrollLeft - qs(e, t), l = t.top + o.scrollTop;
  return {
    x: a,
    y: l
  };
}
function b2(e) {
  let {
    elements: o,
    rect: t,
    offsetParent: a,
    strategy: l
  } = e;
  const s = l === "fixed", i = wo(a), c = o ? Gs(o.floating) : !1;
  if (a === i || c && s)
    return t;
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  }, v = ho(1);
  const m = ho(0), g = _o(a);
  if ((g || !g && !s) && ((za(a) !== "body" || vl(i)) && (p = Ks(a)), _o(a))) {
    const b = Pa(a);
    v = cr(a), m.x = b.x + a.clientLeft, m.y = b.y + a.clientTop;
  }
  const y = i && !g && !s ? Jg(i, p) : ho(0);
  return {
    width: t.width * v.x,
    height: t.height * v.y,
    x: t.x * v.x - p.scrollLeft * v.x + m.x + y.x,
    y: t.y * v.y - p.scrollTop * v.y + m.y + y.y
  };
}
function _2(e) {
  return Array.from(e.getClientRects());
}
function C2(e) {
  const o = wo(e), t = Ks(e), a = e.ownerDocument.body, l = En(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), s = En(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
  let i = -t.scrollLeft + qs(e);
  const c = -t.scrollTop;
  return lo(a).direction === "rtl" && (i += En(o.clientWidth, a.clientWidth) - l), {
    width: l,
    height: s,
    x: i,
    y: c
  };
}
const sp = 25;
function S2(e, o) {
  const t = Rn(e), a = wo(e), l = t.visualViewport;
  let s = a.clientWidth, i = a.clientHeight, c = 0, p = 0;
  if (l) {
    s = l.width, i = l.height;
    const m = Sc();
    (!m || m && o === "fixed") && (c = l.offsetLeft, p = l.offsetTop);
  }
  const v = qs(a);
  if (v <= 0) {
    const m = a.ownerDocument, g = m.body, y = getComputedStyle(g), b = m.compatMode === "CSS1Compat" && parseFloat(y.marginLeft) + parseFloat(y.marginRight) || 0, C = Math.abs(a.clientWidth - g.clientWidth - b);
    C <= sp && (s -= C);
  } else v <= sp && (s += v);
  return {
    width: s,
    height: i,
    x: c,
    y: p
  };
}
const w2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function $2(e, o) {
  const t = Pa(e, !0, o === "fixed"), a = t.top + e.clientTop, l = t.left + e.clientLeft, s = _o(e) ? cr(e) : ho(1), i = e.clientWidth * s.x, c = e.clientHeight * s.y, p = l * s.x, v = a * s.y;
  return {
    width: i,
    height: c,
    x: p,
    y: v
  };
}
function ip(e, o, t) {
  let a;
  if (o === "viewport")
    a = S2(e, t);
  else if (o === "document")
    a = C2(wo(e));
  else if (ro(o))
    a = $2(o, t);
  else {
    const l = Zg(e);
    a = {
      x: o.x - l.x,
      y: o.y - l.y,
      width: o.width,
      height: o.height
    };
  }
  return Bs(a);
}
function Qg(e, o) {
  const t = ra(e);
  return t === o || !ro(t) || pr(t) ? !1 : lo(t).position === "fixed" || Qg(t, o);
}
function k2(e, o) {
  const t = o.get(e);
  if (t)
    return t;
  let a = ol(e, [], !1).filter((c) => ro(c) && za(c) !== "body"), l = null;
  const s = lo(e).position === "fixed";
  let i = s ? ra(e) : e;
  for (; ro(i) && !pr(i); ) {
    const c = lo(i), p = Cc(i);
    !p && c.position === "fixed" && (l = null), (s ? !p && !l : !p && c.position === "static" && !!l && w2.has(l.position) || vl(i) && !p && Qg(e, i)) ? a = a.filter((m) => m !== i) : l = c, i = ra(i);
  }
  return o.set(e, a), a;
}
function V2(e) {
  let {
    element: o,
    boundary: t,
    rootBoundary: a,
    strategy: l
  } = e;
  const i = [...t === "clippingAncestors" ? Gs(o) ? [] : k2(o, this._c) : [].concat(t), a], c = i[0], p = i.reduce((v, m) => {
    const g = ip(o, m, l);
    return v.top = En(g.top, v.top), v.right = vr(g.right, v.right), v.bottom = vr(g.bottom, v.bottom), v.left = En(g.left, v.left), v;
  }, ip(o, c, l));
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top
  };
}
function x2(e) {
  const {
    width: o,
    height: t
  } = Xg(e);
  return {
    width: o,
    height: t
  };
}
function A2(e, o, t) {
  const a = _o(o), l = wo(o), s = t === "fixed", i = Pa(e, !0, s, o);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const p = ho(0);
  function v() {
    p.x = qs(l);
  }
  if (a || !a && !s)
    if ((za(o) !== "body" || vl(l)) && (c = Ks(o)), a) {
      const b = Pa(o, !0, s, o);
      p.x = b.x + o.clientLeft, p.y = b.y + o.clientTop;
    } else l && v();
  s && !a && l && v();
  const m = l && !a && !s ? Jg(l, c) : ho(0), g = i.left + c.scrollLeft - p.x - m.x, y = i.top + c.scrollTop - p.y - m.y;
  return {
    x: g,
    y,
    width: i.width,
    height: i.height
  };
}
function Au(e) {
  return lo(e).position === "static";
}
function up(e, o) {
  if (!_o(e) || lo(e).position === "fixed")
    return null;
  if (o)
    return o(e);
  let t = e.offsetParent;
  return wo(e) === t && (t = t.ownerDocument.body), t;
}
function ey(e, o) {
  const t = Rn(e);
  if (Gs(e))
    return t;
  if (!_o(e)) {
    let l = ra(e);
    for (; l && !pr(l); ) {
      if (ro(l) && !Au(l))
        return l;
      l = ra(l);
    }
    return t;
  }
  let a = up(e, o);
  for (; a && c2(a) && Au(a); )
    a = up(a, o);
  return a && pr(a) && Au(a) && !Cc(a) ? t : a || m2(e) || t;
}
const I2 = async function(e) {
  const o = this.getOffsetParent || ey, t = this.getDimensions, a = await t(e.floating);
  return {
    reference: A2(e.reference, await o(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function T2(e) {
  return lo(e).direction === "rtl";
}
const B2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: b2,
  getDocumentElement: wo,
  getClippingRect: V2,
  getOffsetParent: ey,
  getElementRects: I2,
  getClientRects: _2,
  getDimensions: x2,
  getScale: cr,
  isElement: ro,
  isRTL: T2
};
function ty(e, o) {
  return e.x === o.x && e.y === o.y && e.width === o.width && e.height === o.height;
}
function P2(e, o) {
  let t = null, a;
  const l = wo(e);
  function s() {
    var c;
    clearTimeout(a), (c = t) == null || c.disconnect(), t = null;
  }
  function i(c, p) {
    c === void 0 && (c = !1), p === void 0 && (p = 1), s();
    const v = e.getBoundingClientRect(), {
      left: m,
      top: g,
      width: y,
      height: b
    } = v;
    if (c || o(), !y || !b)
      return;
    const C = fs(g), _ = fs(l.clientWidth - (m + y)), S = fs(l.clientHeight - (g + b)), $ = fs(m), x = {
      rootMargin: -C + "px " + -_ + "px " + -S + "px " + -$ + "px",
      threshold: En(0, vr(1, p)) || 1
    };
    let T = !0;
    function O(D) {
      const V = D[0].intersectionRatio;
      if (V !== p) {
        if (!T)
          return i();
        V ? i(!1, V) : a = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      V === 1 && !ty(v, e.getBoundingClientRect()) && i(), T = !1;
    }
    try {
      t = new IntersectionObserver(O, {
        ...x,
        // Handle <iframe>s
        root: l.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(O, x);
    }
    t.observe(e);
  }
  return i(!0), s;
}
function L2(e, o, t, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: p = !1
  } = a, v = wc(e), m = l || s ? [...v ? ol(v) : [], ...ol(o)] : [];
  m.forEach(($) => {
    l && $.addEventListener("scroll", t, {
      passive: !0
    }), s && $.addEventListener("resize", t);
  });
  const g = v && c ? P2(v, t) : null;
  let y = -1, b = null;
  i && (b = new ResizeObserver(($) => {
    let [A] = $;
    A && A.target === v && b && (b.unobserve(o), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var x;
      (x = b) == null || x.observe(o);
    })), t();
  }), v && !p && b.observe(v), b.observe(o));
  let C, _ = p ? Pa(e) : null;
  p && S();
  function S() {
    const $ = Pa(e);
    _ && !ty(_, $) && t(), _ = $, C = requestAnimationFrame(S);
  }
  return t(), () => {
    var $;
    m.forEach((A) => {
      l && A.removeEventListener("scroll", t), s && A.removeEventListener("resize", t);
    }), g?.(), ($ = b) == null || $.disconnect(), b = null, p && cancelAnimationFrame(C);
  };
}
const O2 = r2, E2 = l2, R2 = n2, D2 = s2, M2 = (e, o, t) => {
  const a = /* @__PURE__ */ new Map(), l = {
    platform: B2,
    ...t
  }, s = {
    ...l.platform,
    _c: a
  };
  return t2(e, o, {
    ...l,
    platform: s
  });
};
function F2(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function cp(e) {
  if (F2(e)) {
    const o = e.$el;
    return _c(o) && za(o) === "#comment" ? null : o;
  }
  return e;
}
function Ur(e) {
  return typeof e == "function" ? e() : d(e);
}
function ny(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function dp(e, o) {
  const t = ny(e);
  return Math.round(o * t) / t;
}
function N2(e, o, t) {
  t === void 0 && (t = {});
  const a = t.whileElementsMounted, l = f(() => {
    var V;
    return (V = Ur(t.open)) != null ? V : !0;
  }), s = f(() => Ur(t.middleware)), i = f(() => {
    var V;
    return (V = Ur(t.placement)) != null ? V : "bottom";
  }), c = f(() => {
    var V;
    return (V = Ur(t.strategy)) != null ? V : "absolute";
  }), p = f(() => {
    var V;
    return (V = Ur(t.transform)) != null ? V : !0;
  }), v = f(() => cp(e.value)), m = f(() => cp(o.value)), g = N(0), y = N(0), b = N(c.value), C = N(i.value), _ = He({}), S = N(!1), $ = f(() => {
    const V = {
      position: b.value,
      left: "0",
      top: "0"
    };
    if (!m.value)
      return V;
    const P = dp(m.value, g.value), R = dp(m.value, y.value);
    return p.value ? {
      ...V,
      transform: "translate(" + P + "px, " + R + "px)",
      ...ny(m.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: b.value,
      left: P + "px",
      top: R + "px"
    };
  });
  let A;
  function x() {
    if (v.value == null || m.value == null)
      return;
    const V = l.value;
    M2(v.value, m.value, {
      middleware: s.value,
      placement: i.value,
      strategy: c.value
    }).then((P) => {
      g.value = P.x, y.value = P.y, b.value = P.strategy, C.value = P.placement, _.value = P.middlewareData, S.value = V !== !1;
    });
  }
  function T() {
    typeof A == "function" && (A(), A = void 0);
  }
  function O() {
    if (T(), a === void 0) {
      x();
      return;
    }
    if (v.value != null && m.value != null) {
      A = a(v.value, m.value, x);
      return;
    }
  }
  function D() {
    l.value || (S.value = !1);
  }
  return Se([s, i, c, l], x, {
    flush: "sync"
  }), Se([v, m], O, {
    flush: "sync"
  }), Se(l, D, {
    flush: "sync"
  }), ww() && $w(T), {
    x: Sa(g),
    y: Sa(y),
    strategy: Sa(b),
    placement: Sa(C),
    middlewareData: Sa(_),
    isPositioned: Sa(S),
    floatingStyles: $,
    update: x
  };
}
const z2 = (e, o, t, a) => {
  const l = f(() => {
    const { position: v, align: m } = zg({ placement: a.value.placement });
    return `${v.value}-${m.value}`;
  }), s = f(() => {
    const v = a.value.offset, m = { mainAxis: 0, crossAxis: 0 };
    return Array.isArray(v) && (m.mainAxis = v[0], m.crossAxis = v[1]), typeof v == "number" && (m.mainAxis = v), m;
  }), i = f(() => {
    const { autoPlacement: v, stickToEdges: m, keepAnchorWidth: g, verticalScrollOnOverflow: y } = a.value, b = [
      O2(s.value)
    ];
    return v && b.push(
      // boundary doesn't work with ssr (trying to access document)
      R2({
        boundary: t.value
      })
    ), m && b.push(
      E2()
    ), (g || y) && b.push(D2({
      apply({ elements: C, availableHeight: _ }) {
        if (g) {
          const $ = C.reference.getBoundingClientRect().width;
          Object.assign(C.floating.style, {
            // Don't set width here, because some plugin applies width 100% and it breaks layout
            maxWidth: `${$}px`,
            minWidth: `${$}px`
          });
        }
        y && Object.assign(C.floating.style, {
          maxHeight: `${_}px`
        });
      }
    })), b;
  }), { floatingStyles: c, isPositioned: p } = typeof document > "u" ? { floatingStyles: {}, isPositioned: N(!1) } : N2(e, o, {
    placement: l,
    whileElementsMounted: L2,
    middleware: i,
    transform: !0
  });
  return {
    // Because floating ui by default set top and left to 0 before position calculated, dropdown jumps to the left top corner
    // If user wants to make focus on el as soon as Dropdown is opened, page will be scrolled on the left top corner
    floatingStyles: f(() => p.value ? c.value : {
      position: "fixed"
    }),
    isPositioned: p
  };
}, H2 = (e, o) => !o || o instanceof Window ? !1 : o.parentElement === e ? !0 : e.contains(o), W2 = (e) => Array.isArray(e) ? e : [e], U2 = (e, o, t = {}) => {
  let a = !1;
  t.onlyKeyboard && $t("mousedown", (l) => {
    a = !0, setTimeout(() => {
      a = !1;
    }, 200);
  }, !0), $t("focus", (l) => {
    if (t.onlyKeyboard && a)
      return;
    const s = l.target;
    if (l.target.shadowRoot)
      return;
    W2(e).some((c) => {
      const p = Mt(d(c));
      return p && H2(p, s);
    }) || o(s);
  }, !0);
}, Iu = (e) => f(() => typeof e?.value == "string" ? document?.querySelector(e.value) : Mt(e?.value)), G2 = oe({
  name: "VaDropdown",
  props: {
    ...Ng,
    ...Cg(!0),
    modelValue: { type: Boolean, default: !1 },
    anchor: { type: [String, Object], default: void 0 },
    anchorSelector: { type: String, default: "" },
    innerAnchorSelector: { type: String, default: "" },
    trigger: {
      type: [String, Array],
      default: () => ["click", "space", "enter", "arrow-down", "arrow-up"]
    },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    closeOnClickOutside: { type: Boolean, default: !0 },
    closeOnFocusOutside: { type: Boolean, default: !0 },
    closeOnAnchorClick: { type: Boolean, default: !0 },
    closeOnContentClick: { type: Boolean, default: !0 },
    hoverOverTimeout: { type: [Number, String], default: 30 },
    hoverOutTimeout: { type: [Number, String], default: 200 },
    isContentHoverable: { type: Boolean, default: !0 },
    offset: { type: [Array, Number], default: 0 },
    keepAnchorWidth: { type: Boolean, default: !1 },
    verticalScrollOnOverflow: { type: Boolean, default: !0 },
    cursor: { type: [Boolean, Object], default: !1 },
    autoPlacement: { type: Boolean, default: !0 },
    stickToEdges: { type: Boolean, default: !1 },
    /** Viewport where dropdown will be rendered. Autoplacement will be calculated relative to `target` */
    target: { type: [String, Object], default: void 0 },
    /** Element where dropdown content will be rendered. */
    teleport: { type: [String, Object], default: void 0 },
    /** Not reactive */
    keyboardNavigation: { type: Boolean, default: !0 },
    ariaLabel: Fe("$t:toggleDropdown"),
    role: { type: String, default: "button" },
    contentClass: { type: String, default: "" }
  },
  emits: [...on, "anchor-click", "anchor-right-click", "content-click", "click-outside", "focus-outside", "close", "open", "anchor-dblclick"],
  setup(e, { emit: o }) {
    const { valueComputed: t } = xt(e, o, "modelValue");
    Se(t, (x) => {
      o(x ? "open" : "close");
    });
    const a = Fs(), { anchorRef: l } = zx(e), s = Hx(l, f(() => !!e.cursor)), i = br("floating"), c = Iu(N("body")), p = Iu(f(() => e.target)), v = Iu(f(() => e.teleport)), m = ht("va-dropdown", () => It(e, ["disabled"])), g = f(() => {
      if (v.value)
        return v.value;
      if (p.value)
        return p.value;
      if (l.value) {
        const x = l.value.getRootNode();
        if (x instanceof ShadowRoot) {
          const T = [...x.children].find((O) => O.tagName !== "STYLE");
          if (T)
            return T;
        }
      }
      return c.value;
    }), y = f(() => a.value && t.value);
    Nx(
      t,
      l,
      i,
      e
    );
    const b = (x, T, O) => {
      o(x, O), T && (t.value = !1);
    };
    Hs([l, i], () => {
      e.closeOnClickOutside && t.value && b("click-outside", e.closeOnClickOutside);
    }), U2([i], () => {
      e.closeOnFocusOutside && t.value && b("focus-outside", e.closeOnFocusOutside);
    }, { onlyKeyboard: !0 });
    const C = f(() => typeof e.cursor == "object" ? e.cursor : e.cursor ? s.value : l.value), { floatingStyles: _ } = z2(
      C,
      i,
      p,
      f(() => ({
        placement: e.placement,
        offset: e.offset,
        autoPlacement: e.autoPlacement,
        stickToEdges: e.stickToEdges,
        keepAnchorWidth: e.keepAnchorWidth,
        verticalScrollOnOverflow: e.verticalScrollOnOverflow
      }))
    ), S = () => {
      t.value = !1;
    }, $ = () => {
      t.value = !0;
    }, {
      zIndex: A
    } = _g(t);
    return Se(t, (x) => {
      if (e.keyboardNavigation)
        if (x)
          Vt(() => {
            const T = Mt(i.value);
            T && qu(T);
          });
        else {
          if (!l.value)
            return;
          qu(l.value);
        }
    }), {
      ...Ct(),
      ...kg(),
      anchorRef: l,
      anchorClass: m,
      floating: i,
      floatingStyles: _,
      showFloating: y,
      teleportTarget: g,
      isMounted: a,
      valueComputed: t,
      hide: S,
      show: $,
      zIndex: A
    };
  },
  render() {
    const e = {
      isOpened: this.valueComputed,
      hide: this.hide,
      show: this.show,
      toggle: () => this.valueComputed ? this.hide() : this.show(),
      getAnchorWidth: () => {
        var a;
        return ((a = this.anchorRef) == null ? void 0 : a.offsetWidth) + "px";
      },
      getAnchorHeight: () => {
        var a;
        return ((a = this.anchorRef) == null ? void 0 : a.offsetHeight) + "px";
      }
    }, o = this.showFloating && Ov(this.$slots.default, e, {
      ref: "floating",
      class: ["va-dropdown__content-wrapper", this.$props.contentClass],
      style: [this.floatingStyles, { zIndex: this.zIndex }],
      ...this.teleportedAttrs
    }), t = Ov(this.$slots.anchor, e, {
      ref: "anchorRef",
      role: this.$props.role,
      class: ["va-dropdown", ...this.anchorClass.asArray.value],
      style: { position: "relative" },
      "aria-label": this.tp(this.$props.ariaLabel),
      "aria-disabled": this.$props.disabled,
      "aria-expanded": this.$props.role && this.$props.role !== "none" ? !!this.showFloating : void 0,
      ...this.teleportFromAttrs,
      ...this.$attrs
    });
    if (typeof this.$props.cursor == "object" && o)
      return bt(
        na,
        {
          to: this.teleportTarget,
          disabled: this.$props.disabled
        },
        [o]
      );
    if (!this.$props.anchorSelector && !t) {
      yt("VaDropdown: #anchor slot is missing");
      return;
    }
    if (this.showFloating && !o) {
      yt("VaDropdown: default slot is missing");
      return;
    }
    return bt(Le, {}, [
      t,
      o && bt(
        na,
        {
          to: this.teleportTarget,
          disabled: this.$props.disabled
        },
        [o]
      )
    ]);
  }
}), Dn = we(G2), K2 = /* @__PURE__ */ oe({
  name: "VaDropdownContent",
  __name: "VaDropdownContent",
  props: {
    noPadding: { type: Boolean, default: !1 },
    background: { type: String, default: "background-secondary" },
    textColor: { type: String }
  },
  setup(e) {
    const o = e, { getColor: t } = Ke(), { textColorComputed: a } = Kt(vn(o, "background")), l = f(() => ({
      background: t(o.background, void 0, !0),
      color: a.value,
      padding: o.noPadding ? 0 : void 0
    }));
    return (s, i) => (w(), L("div", {
      class: "va-dropdown__content",
      style: me(l.value),
      role: "listbox"
    }, [
      H(s.$slots, "default")
    ], 4));
  }
}), La = we(K2), fp = (e) => typeof e == "object" ? e.listen : e, Tu = (e) => typeof e == "object" ? e.emit : e, Ha = (e) => {
  const o = () => e.map(Tu), t = (s) => `on${s.charAt(0).toUpperCase() + s.slice(1)}`;
  return {
    createListeners: (s) => e.reduce((i, c) => ({
      ...i,
      [t(fp(c))]: (...p) => s(Tu(c), ...p)
    }), {}),
    createVOnListeners: (s) => e.reduce((i, c) => ({
      ...i,
      [fp(c)]: (...p) => s(Tu(c), ...p)
    }), {}),
    createEmits: o
  };
}, { createEmits: q2, createVOnListeners: j2 } = Ha(["click"]), { createEmits: Y2, createVOnListeners: X2 } = Ha(
  [{ listen: "click", emit: "main-button-click" }]
), Bu = bo(ct(lt), ["iconRight", "block"]), vp = ct(Dn), Z2 = /* @__PURE__ */ oe({
  name: "VaButtonDropdown",
  __name: "VaButtonDropdown",
  props: {
    ...Ee,
    ...Bu,
    ...vp,
    ...Ht,
    ...Ng,
    modelValue: { type: Boolean, default: !1 },
    stateful: { type: Boolean, default: !0 },
    icon: { type: String, default: "va-arrow-down" },
    openedIcon: { type: String, default: "va-arrow-up" },
    hideIcon: { type: Boolean, default: !1 },
    leftIcon: { type: Boolean, default: !1 },
    iconColor: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 },
    disableButton: { type: Boolean, default: !1 },
    disableDropdown: { type: Boolean, default: !1 },
    offset: { type: [Number, Array], default: 2 },
    keepAnchorWidth: { type: Boolean, default: !1 },
    closeOnContentClick: { type: Boolean, default: !0 },
    split: { type: Boolean },
    splitTo: { type: String, default: "" },
    splitHref: { type: String, default: "" },
    loading: { type: Boolean, default: !1 },
    label: { type: String },
    ariaLabel: Fe("$t:toggleDropdown")
  },
  emits: ["update:modelValue", ...q2(), ...Y2()],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, { valueComputed: s } = xt(a, l), i = f(() => s.value ? a.openedIcon : a.icon), c = hn(), p = f(() => a.hideIcon ? {} : { [(a.label || c.label) && !a.leftIcon ? "icon-right" : "icon"]: i.value }), v = f(() => {
      const A = ["to", "href", "loading", "icon"], x = [
        "plain",
        "textOpacity",
        "backgroundOpacity",
        "hoverOpacity",
        "hoverBehavior",
        "hoverOpacity",
        "pressedOpacity",
        "pressedBehavior",
        "pressedOpacity"
      ];
      return a.preset ? Object.keys(bo(Bu, [...A, ...x])) : Object.keys(bo(Bu, A));
    }), m = f(
      () => Object.entries(a).filter(([A, x]) => v.value.includes(A)).reduce((A, [x, T]) => (Object.assign(A, { [x]: T }), A), {})
    ), g = f(() => ({
      to: a.splitTo,
      href: a.splitHref,
      loading: a.loading
    })), y = () => {
      s.value = !1;
    }, b = _t(vp), C = j2(l), _ = X2(l), { t: S, tp: $ } = Ct();
    return o({
      hideDropdown: y
    }), (A, x) => A.$props.split ? (w(), te(d(Ws), se({ key: 1 }, m.value, { class: ["va-button-dropdown", "va-button-dropdown--split"] }), {
      default: U(() => [
        A.$props.leftIcon ? Y("", !0) : (w(), te(d(lt), se({
          key: 0,
          disabled: A.$props.disabled || A.$props.disableButton
        }, g.value, Kn(d(_))), {
          default: U(() => [
            H(A.$slots, "label", {}, () => [
              xe(ke(e.label), 1)
            ])
          ]),
          _: 3
        }, 16, ["disabled"])),
        G(d(Dn), se(d(b), {
          modelValue: d(s),
          "onUpdate:modelValue": x[1] || (x[1] = (T) => yn(s) ? s.value = T : null),
          disabled: A.$props.disabled || A.$props.disableDropdown
        }), {
          anchor: U(() => [
            G(d(lt), se({
              "aria-label": A.$props.ariaLabel || d(S)("toggleDropdown"),
              disabled: A.$props.disabled || A.$props.disableDropdown,
              icon: i.value,
              "icon-color": A.$props.iconColor
            }, Kn(d(C)), {
              onKeydown: Ae($e(y, ["prevent"]), ["esc"])
            }), null, 16, ["aria-label", "disabled", "icon", "icon-color", "onKeydown"])
          ]),
          default: U(() => [
            G(d(La), null, {
              default: U(() => [
                H(A.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 16, ["modelValue", "disabled"]),
        A.$props.leftIcon ? (w(), te(d(lt), se({
          key: 1,
          disabled: A.$props.disabled || A.$props.disableButton
        }, g.value, Kn(d(_))), {
          default: U(() => [
            H(A.$slots, "label", {}, () => [
              xe(ke(e.label), 1)
            ])
          ]),
          _: 3
        }, 16, ["disabled"])) : Y("", !0)
      ]),
      _: 3
    }, 16)) : (w(), te(d(Dn), se({ key: 0 }, d(b), {
      modelValue: d(s),
      "onUpdate:modelValue": x[0] || (x[0] = (T) => yn(s) ? s.value = T : null),
      disabled: A.$props.disabled || A.$props.disableDropdown,
      class: ["va-button-dropdown"]
    }), {
      anchor: U(() => [
        G(d(lt), se({
          "aria-label": d($)(A.$props.ariaLabel)
        }, { ...p.value, ...m.value }, Kn(d(C))), {
          default: U(() => [
            H(A.$slots, "label", {}, () => [
              xe(ke(e.label), 1)
            ])
          ]),
          _: 3
        }, 16, ["aria-label"])
      ]),
      default: U(() => [
        H(A.$slots, "content", {}, () => [
          G(d(La), null, {
            default: U(() => [
              H(A.$slots, "default")
            ]),
            _: 3
          })
        ])
      ]),
      _: 3
    }, 16, ["modelValue", "disabled"]));
  }
}), J2 = we(Z2), oy = (e, o) => {
  if (o.length === 0)
    return e;
  const t = e[o[0]];
  return xa(t) ? oy(t, o.slice(1)) : o.length === 1 ? t : void 0;
}, $c = (e, o) => o in e ? e[o] : (o = o.replace(/^\./, ""), oy(e, o.split("."))), ay = (e, o) => {
  if (!($n(e) || typeof e != "object" || Array.isArray(e)))
    return o ? typeof o == "string" ? $c(e, o) : typeof o == "function" ? o(e) : e : e;
}, _r = {
  options: { type: Array, default: () => [] },
  textBy: { type: [String, Function], default: "text" },
  valueBy: { type: [String, Function], default: "" },
  trackBy: { type: [String, Function], default: "" },
  disabledBy: { type: [String, Function], default: "disabled" },
  groupBy: { type: [String, Function], default: "group" }
};
function Cr(e) {
  const o = (p) => {
    const v = e.options;
    for (let m = 0; m < v.length; m++)
      if (c(v[m]) === p)
        return v[m];
    return p;
  }, t = (p, v) => xa(p) ? ay(p, v) : p, a = (p) => e.trackBy ? t(p, e.trackBy) : c(p), l = (p) => xa(p) ? t(p, e.disabledBy) : !1, s = (p) => {
    const v = t(p, e.textBy);
    return ["number", "boolean"].includes(typeof v) ? String(v) : v;
  }, i = (p) => {
    if (xa(p))
      return t(p, e.groupBy);
  }, c = (p) => t(p, e.valueBy);
  return {
    tryResolveByValue: o,
    getValue: c,
    getText: s,
    getDisabled: l,
    getTrackBy: a,
    getGroupBy: i
  };
}
const pp = ct(Ws), Q2 = /* @__PURE__ */ oe({
  name: "VaButtonToggle",
  __name: "VaButtonToggle",
  props: {
    ...pp,
    ...Ee,
    ..._r,
    modelValue: { type: [String, Number, Boolean, Object], default: "" },
    options: {
      type: Array,
      required: !0
    },
    activeButtonTextColor: { type: String },
    toggleColor: { type: String, default: "" },
    textBy: { type: [String, Function], default: "label" },
    valueBy: { type: [String, Function], default: "value" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, a = o, { getText: l, getTrackBy: s } = Cr(t), { getColor: i, shiftHSLAColor: c } = Ke(), p = f(() => i(t.color)), v = (S) => s(S) === t.modelValue, m = f(() => t.toggleColor ? i(t.toggleColor) : c(p.value, { l: t.plain ? -16 : -6 })), g = f(() => !t.preset || t.preset === "default" ? {} : { backgroundOpacity: t.pressedOpacity }), y = f(() => ({
      color: m.value,
      textColor: t.activeButtonTextColor,
      ...g.value
    })), b = (S = {}) => {
      const $ = { icon: S.icon, iconRight: S.iconRight };
      return v(S) ? {
        ...v(S) && y.value,
        ...$
      } : $;
    }, C = _t(pp), _ = (S) => a("update:modelValue", s(S));
    return (S, $) => (w(), te(d(Ws), se({ class: "va-button-toggle" }, d(C)), {
      default: U(() => [
        (w(!0), L(Le, null, je(e.options, (A) => (w(), te(d(lt), se({
          key: d(s)(A),
          "aria-pressed": v(A)
        }, b(A), {
          onClick: (x) => _(A)
        }), {
          default: U(() => [
            xe(ke(d(l)(A)), 1)
          ]),
          _: 2
        }, 1040, ["aria-pressed", "onClick"]))), 128))
      ]),
      _: 1
    }, 16));
  }
}), eA = we(Q2), tA = /* @__PURE__ */ oe({
  name: "VaCard",
  __name: "VaCard",
  props: {
    ...Na,
    ...Ee,
    tag: { type: String, default: "div" },
    square: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    bordered: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    href: { type: String, default: "" },
    target: { type: String, default: "" },
    stripe: { type: Boolean, default: !1 },
    stripeColor: { type: String, default: "" },
    gradient: { type: Boolean, default: !1 },
    textColor: { type: String },
    color: { type: String, default: "background-secondary" }
  },
  setup(e) {
    const o = e, { getColor: t } = Ke(), { isLinkTag: a, tagComputed: l, hrefComputed: s } = ia(o), { textColorComputed: i } = Kt(f(() => t(o.color))), c = f(() => t(o.stripeColor)), p = ht("va-card", () => ({
      ...It(o, ["square", "outlined", "disabled", "stripe"]),
      noBorder: !o.bordered,
      link: a.value
    })), v = f(() => ({
      background: o.gradient && o.color ? dc(t(o.color)) : t(o.color),
      color: i.value
    }));
    return (m, g) => (w(), te(zt(d(l)), {
      class: Be(["va-card", d(p)]),
      style: me([v.value, `--va-stripe-color-computed: ${String(c.value)}`]),
      href: d(s),
      target: e.target,
      to: m.to,
      replace: m.replace,
      exact: m.exact,
      "active-class": m.activeClass,
      "exact-active-class": m.exactActiveClass
    }, {
      default: U(() => [
        H(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style", "href", "target", "to", "replace", "exact", "active-class", "exact-active-class"]));
  }
}), nA = { class: "va-card__content" }, oA = /* @__PURE__ */ oe({
  name: "VaCardContent",
  __name: "VaCardContent",
  setup(e) {
    return (o, t) => (w(), L("div", nA, [
      H(o.$slots, "default")
    ]));
  }
}), aA = /* @__PURE__ */ oe({
  name: "VaCardTitle",
  __name: "VaCardTitle",
  props: {
    ...Ee,
    textColor: { type: String }
  },
  setup(e) {
    const o = e, { getColor: t } = Ke(), a = f(() => ({
      color: o.textColor ? t(o.textColor) : ""
    }));
    return (l, s) => (w(), L("div", {
      class: "va-card-title va-card__title",
      style: me(a.value)
    }, [
      H(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Wa = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of o)
    t[a] = l;
  return t;
}, rA = /* @__PURE__ */ Wa(aA, [["__scopeId", "data-v-5cd66b25"]]), lA = /* @__PURE__ */ oe({
  name: "VaCardActions",
  __name: "VaCardActions",
  props: {
    ...Ug,
    ...Ee
  },
  setup(e) {
    const o = e, { alignComputed: t } = Gg(o), a = ht("va-card__actions", () => ({
      ...It(o, ["vertical"])
    }));
    return (l, s) => (w(), L("div", {
      class: Be(["va-card__actions", d(a)]),
      style: me(d(t))
    }, [
      H(l.$slots, "default")
    ], 6));
  }
}), sA = /* @__PURE__ */ oe({
  name: "VaCardBlock",
  __name: "VaCardBlock",
  props: {
    horizontal: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const o = e, t = f(() => ({
      "va-card-block--horizontal": o.horizontal
    }));
    return (a, l) => (w(), L("div", {
      class: Be(["va-card-block", t.value])
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), iA = we(oA), uA = we(rA), cA = we(lA), dA = we(sA), fA = we(tA), vA = (e, o) => {
  const t = (p) => {
    o.value = p;
  }, a = () => {
    if (e.infinite && o.value <= 0) {
      o.value = e.items.length - 1;
      return;
    }
    o.value -= 1;
  }, l = () => {
    if (e.infinite && o.value >= e.items.length - 1) {
      o.value = 0;
      return;
    }
    o.value += 1;
  }, s = f(() => e.items.length > 1), i = f(() => o.value > 0 || e.infinite), c = f(() => o.value < e.items.length - 1 || e.infinite);
  return {
    doShowPrevButton: i,
    doShowNextButton: c,
    doShowDirectionButtons: s,
    goTo: t,
    prev: a,
    next: l
  };
}, pA = (e, o) => {
  let t = -1;
  const a = () => {
    e.autoscroll && (clearInterval(t), t = setInterval(() => {
      o.value += 1, o.value >= e.items.length && (o.value = 0);
    }, e.autoscrollInterval));
  };
  let l;
  const s = () => {
    e.autoscroll && (clearInterval(t), l = setTimeout(() => {
      a(), clearTimeout(l);
    }, e.autoscrollPauseDuration));
  }, i = () => {
    clearInterval(t), clearTimeout(l);
  };
  at(() => a()), Gt(() => i());
  const c = (b) => (...C) => {
    s(), b(...C);
  }, p = N({
    transition: void 0
  }), v = N(0), m = f(() => e.effect === "fade" ? {
    ...p.value,
    transition: "none"
  } : e.vertical ? {
    ...p.value,
    transform: `translateY(${v.value * -100}%)`
  } : {
    ...p.value,
    transform: `translateX(${v.value * -100}%)`
  }), g = {
    isAnimating: !1,
    speed: 0.3,
    order: [],
    move(b, C) {
      const _ = e.items.length - 1, S = e.items.length;
      C === 0 && b === _ ? (this.order.push({ to: S }), this.order.push({ to: 0, animate: !1 })) : C === _ && b === 0 ? (this.order.push({ to: S, animate: !1 }), this.order.push({ to: C })) : this.order.push({ to: C }), this.isAnimating || this.runAnimation();
    },
    runAnimation() {
      this.isAnimating = !0;
      const b = this.order.shift();
      if (!b) {
        this.isAnimating = !1;
        return;
      }
      v.value = b?.to, b.animate || b.animate === void 0 ? (p.value.transition = `all ${this.speed}s linear`, setTimeout(() => {
        this.runAnimation();
      }, this.speed * 1e3)) : (p.value.transition = "none", setTimeout(() => {
        this.runAnimation();
      }, 16));
    }
  };
  Se(o, (b, C) => {
    g.move(C, b);
  });
  const y = f(() => e.effect === "fade" ? [e.items[o.value]] : e.infinite || e.autoscroll ? [...e.items, e.items[0]] : e.items);
  return {
    start: a,
    pause: s,
    stop: i,
    withPause: c,
    computedSlidesStyle: m,
    slides: y
  };
}, mA = () => {
  const { setHSLAColor: e, getColor: o } = Ke();
  return {
    computedColor: f(() => e(o("background-element"), { a: 0.7 })),
    computedHoverColor: f(() => e(o("primary"), { a: 0.7 })),
    computedActiveColor: f(() => o("primary"))
  };
}, gA = {
  src: { type: String, required: !0 },
  alt: { type: String, default: "" },
  title: { type: String, default: "" },
  sizes: { type: String, default: "" },
  srcset: { type: String, default: "" },
  draggable: { type: Boolean, default: !0 },
  loading: {
    type: String
  },
  crossorigin: {
    type: String
  },
  decoding: {
    type: String
  },
  fetchpriority: {
    type: String,
    default: "auto"
  },
  referrerpolicy: {
    type: String
  }
}, yA = (e) => f(
  () => It(e, ["src", "alt", "title", "sizes", "srcset", "loading", "referrerpolicy", "fetchpriority", "decoding", "crossorigin", "draggable"])
), ry = (e, o = N({}), t = N([]), a = !0) => {
  const l = N(), s = () => {
    var m;
    (m = l.value) == null || m.disconnect();
  }, i = (m) => {
    var g;
    const y = Mt(d(m));
    y && ((g = l.value) == null || g.observe(y));
  }, c = (m) => {
    m.forEach(i);
  }, p = () => {
    l.value = new IntersectionObserver(e, o.value);
  }, v = f(() => !a || !(typeof window < "u" && "IntersectionObserver" in window));
  return Se([t, o], ([m]) => {
    v.value || (s(), m && (p(), Array.isArray(m) ? c(m) : i(m)));
  }, { immediate: !0 }), Gt(s), { isIntersectionDisabled: v };
}, hA = ["aria-busy"], bA = {
  key: 0,
  class: "va-image__overlay"
}, _A = {
  key: 1,
  class: "va-image__error"
}, CA = {
  key: 2,
  class: "va-image__loader"
}, SA = {
  key: 3,
  class: "va-image__placeholder"
}, wA = ["src"], mp = ct(fr), $A = /* @__PURE__ */ oe({
  name: "VaImage",
  __name: "VaImage",
  props: {
    ...Ee,
    ...gA,
    ...mp,
    ratio: {
      type: [Number, String],
      default: "auto",
      validator: (e) => typeof e == "number" ? e > 0 : e === "auto"
    },
    fit: {
      type: String,
      default: "cover"
    },
    maxWidth: {
      type: [Number, String],
      default: 0,
      validator: (e) => Number(e) >= 0
    },
    lazy: { type: Boolean, default: !1 },
    placeholderSrc: { type: String, default: "" }
  },
  emits: ["loaded", "error", "fallback"],
  setup(e, { emit: o }) {
    const t = e, a = o, l = N(), s = N(), i = N(), c = f(() => i.value || t.src), p = N(1), v = N(1), m = N(!1), g = N(!1), y = () => {
      var le;
      m.value = !0, $.value && (m.value = !1, i.value = (le = s.value) == null ? void 0 : le.currentSrc, D(), a("loaded", c.value));
    }, b = (le) => {
      g.value = !0, m.value = !1, a("error", le || c.value);
    }, C = N(!1), _ = (le, _e) => {
      le.forEach((Re) => {
        Re.isIntersecting && (C.value = !0, T(), _e.disconnect());
      });
    }, { isIntersectionDisabled: S } = ry(_, void 0, l, t.lazy), $ = f(() => S.value || C.value), A = Fs(), x = f(() => !t.lazy || t.lazy && A.value && $.value), T = () => {
      !t.src || m.value && S.value || !$.value || (m.value = !0, g.value = !1, Vt(() => {
        var le;
        if ((le = s.value) != null && le.complete) {
          if (!s.value.naturalWidth) {
            b();
            return;
          }
          y();
        }
      }));
    };
    let O;
    const D = () => {
      clearTimeout(O), m.value && (O = window.setTimeout(D, 100));
      const { naturalHeight: le, naturalWidth: _e } = s.value || {};
      le && _e && (p.value = le, v.value = _e);
    };
    hm(T), Gt(() => clearTimeout(O)), Se(() => t.src, T);
    const V = hn(), P = f(() => {
      var le;
      return ((le = V?.placeholder) == null ? void 0 : le.call(V)) || t.placeholderSrc;
    }), R = f(() => {
      var le;
      return m.value && !((le = V?.loader) != null && le.call(V));
    }), J = f(() => {
      var le;
      return g.value && !((le = V?.error) != null && le.call(V)) && !z.value;
    }), de = f(() => (R.value || J.value) && P.value), ne = f(() => !(m.value || g.value)), M = yA(t), j = f(() => ({
      ...It(t, ["ratio", "maxWidth"]),
      contentWidth: p.value,
      contentHeight: v.value
    })), W = _t(mp), q = (le) => !!Object.values(le || {}).filter((_e) => _e).length, Z = f(() => {
      var le, _e, Re, Ve;
      return q((Ve = (Re = (_e = (le = Mo()) == null ? void 0 : le.globalConfig) == null ? void 0 : _e.value) == null ? void 0 : Re.components) == null ? void 0 : Ve.VaFallback);
    }), z = f(() => q(W.value) || Z.value), pe = f(() => t.fit);
    return (le, _e) => (w(), te(d(Eg), se({
      ref_key: "root",
      ref: l,
      class: "va-image"
    }, j.value, {
      style: `--va-fit-computed: ${String(pe.value)}`
    }), {
      default: U(() => [
        ao(E("picture", {
          class: "va-image__content",
          "aria-busy": m.value
        }, [
          le.$slots.sources ? H(le.$slots, "sources", { key: 0 }) : Y("", !0),
          x.value ? (w(), L("img", se({
            key: 1,
            ref_key: "image",
            ref: s
          }, d(M), {
            onError: b,
            onLoad: y
          }), null, 16)) : Y("", !0)
        ], 8, hA), [
          [Xr, ne.value]
        ]),
        le.$slots.default && ne.value ? (w(), L("div", bA, [
          H(le.$slots, "default")
        ])) : Y("", !0),
        g.value && (le.$slots.error || z.value) ? (w(), L("div", _A, [
          H(le.$slots, "error", {}, () => [
            G(d(fr), se(d(W), {
              onFallback: _e[0] || (_e[0] = (Re) => le.$emit("fallback"))
            }), null, 16)
          ])
        ])) : Y("", !0),
        m.value && le.$slots.loader ? (w(), L("div", CA, [
          H(le.$slots, "loader")
        ])) : Y("", !0),
        de.value ? (w(), L("div", SA, [
          H(le.$slots, "placeholder", {}, () => [
            le.$props.placeholderSrc ? (w(), L("img", {
              key: 0,
              src: le.$props.placeholderSrc,
              alt: ""
            }, null, 8, wA)) : Y("", !0)
          ])
        ])) : Y("", !0)
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), kc = we($A), kA = /* @__PURE__ */ oe({
  name: "VaHover",
  __name: "VaHover",
  props: {
    ...Cg(!0),
    ...Ee,
    disabled: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !1 }
  },
  emits: [...on],
  setup(e, { emit: o }) {
    const t = e, a = o, { valueComputed: l } = xt(t, a), s = () => {
      t.disabled || (l.value = !0);
    }, i = () => {
      t.disabled || (l.value = !1);
    };
    return (c, p) => (w(), L("div", {
      class: "va-hover",
      onMouseenter: s,
      onMouseleave: i
    }, [
      H(c.$slots, "default", ye(Ie({ hover: d(l) })))
    ], 32));
  }
}), _s = we(kA), VA = ["mousedown", "mousemove"], xA = ["touchstart", "touchmove"], Vc = {
  vertical: ["", "all", "vertical"],
  horizontal: ["", "all", "horizontal"]
}, AA = [...Vc.vertical, "up", "down"], IA = [...Vc.horizontal, "left", "right"], TA = {
  swipable: { type: Boolean, default: !1 },
  swipeDistance: { type: Number, default: 75 },
  swipeDirection: { type: String, default: "all" }
}, BA = (e, o, t) => {
  const a = N(!1), l = Ro({
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 }
  }), s = Ro({
    start: 0,
    end: 0
  }), i = (C, _) => {
    let S;
    if (VA.includes(C.type) && (S = C), xA.includes(C.type)) {
      const $ = C;
      S = $.changedTouches[$.changedTouches.length - 1];
    }
    S && (l[_].x = S.pageX, l[_].y = S.pageY, s[_] = (/* @__PURE__ */ new Date()).getTime());
  }, c = (C) => {
    !e.swipable || a.value || (a.value = !0, i(C, "start"));
  }, p = (C) => {
    a.value && i(C, "end");
  }, v = () => {
    ["start", "end"].forEach((C) => {
      l[C].x = 0, l[C].y = 0, s[C] = 0;
    }), a.value = !1;
  }, m = Ro({
    vertical: !1,
    horizontal: !1
  });
  Vn(() => {
    m.horizontal = IA.includes(e.swipeDirection), m.vertical = AA.includes(e.swipeDirection);
  });
  const g = (C) => m[C === "x" ? "horizontal" : "vertical"] && l.start[C] && l.end[C] ? Math.trunc(l.start[C] - l.end[C]) : 0, y = (C, _) => _ === e.swipeDirection || Vc[C].includes(e.swipeDirection) ? _ : "", b = Ro({ direction: "", duration: 0 });
  return Se(l, () => {
    const C = g("x"), _ = g("y");
    if ((C || _) && [C, _].some((S) => Math.abs(S) >= e.swipeDistance)) {
      if (Math.abs(C) >= Math.abs(_) && m.horizontal) {
        const S = C > 0 ? "left" : "right";
        b.direction = y("horizontal", S);
      } else if (Math.abs(C) < Math.abs(_) && m.vertical) {
        const S = _ > 0 ? "down" : "up";
        b.direction = y("vertical", S);
      }
      b.duration = s.end - s.start, v();
    }
  }, { deep: !0 }), Se(b, () => t(b), { deep: !0 }), e.swipable && ($t(["touchstart", "mousedown"], c, o), $t(["touchmove", "mousemove"], p, o), $t(["touchcancel", "mouseup", "touchend", "mouseleave"], v, o)), { swipeState: b };
}, PA = ["aria-label"], LA = {
  key: 1,
  class: "va-carousel__indicators"
}, OA = { class: "va-carousel__content" }, EA = ["aria-hidden", "aria-current", "aria-label"], gp = ct(kc, ["src", "alt"]), RA = /* @__PURE__ */ oe({
  name: "VaCarousel",
  __name: "VaCarousel",
  props: {
    ...TA,
    ...Ht,
    ...Ee,
    ...gp,
    stateful: { type: Boolean, default: !0 },
    modelValue: { type: Number, default: 0 },
    items: { type: Array, required: !0 },
    // Animations
    autoscroll: { type: Boolean, default: !1 },
    autoscrollInterval: { type: [Number, String], default: 5e3 },
    autoscrollPauseDuration: { type: [Number, String], default: 2e3 },
    infinite: { type: Boolean, default: !0 },
    fadeKeyframe: { type: String, default: "va-carousel-fade-appear 1s" },
    // Visual
    arrows: { type: Boolean, default: !0 },
    indicators: { type: Boolean, default: !0 },
    indicatorTrigger: {
      type: String,
      default: "click",
      validator: (e) => ["click", "hover", "none"].includes(e)
    },
    vertical: { type: Boolean, default: !1 },
    height: { type: String, default: "300px" },
    effect: {
      type: String,
      default: "transition",
      validator: (e) => ["fade", "transition"].includes(e)
    },
    color: { type: String, default: "primary" },
    ratio: { type: [Number, String] },
    ariaLabel: Fe("$t:carousel"),
    ariaPreviousLabel: Fe("$t:goPreviousSlide"),
    ariaNextLabel: Fe("$t:goNextSlide"),
    ariaGoToSlideLabel: Fe("$t:goSlide"),
    ariaSlideOfLabel: Fe("$t:slideOf")
  },
  emits: [...on],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, { valueComputed: s } = xt(a, l, "modelValue"), i = et("autoscrollInterval"), c = et("autoscrollPauseDuration"), p = et("ratio"), {
      goTo: v,
      next: m,
      prev: g,
      doShowNextButton: y,
      doShowPrevButton: b,
      doShowDirectionButtons: C
    } = vA(a, s), { withPause: _, computedSlidesStyle: S, slides: $ } = pA({
      items: a.items,
      autoscrollInterval: i.value,
      autoscrollPauseDuration: c.value,
      autoscroll: a.autoscroll,
      infinite: a.infinite,
      effect: a.effect,
      vertical: a.vertical,
      fadeKeyframe: a.fadeKeyframe
    }, s), A = f(() => a.items.length && a.items.every((q) => !!q && typeof q == "object" && !!q?.src)), x = (q) => q === s.value, T = f(() => ({
      animation: a.effect === "fade" ? "fadeKeyframe" : void 0
    })), O = He();
    BA(a, O, (q) => {
      switch (q.direction) {
        case "right":
        case "up":
          b.value && g();
          break;
        case "left":
        case "down":
          y.value && m();
      }
    });
    const V = (q) => a.indicatorTrigger === "hover" ? { onmouseover: () => v(q) } : a.indicatorTrigger === "click" ? { onclick: () => v(q) } : {}, { tp: P } = Ct(), {
      computedActiveColor: R,
      computedColor: J,
      computedHoverColor: de
    } = mA(), ne = _t(gp), M = _(v), j = _(g), W = _(m);
    return o({
      currentSlide: s,
      goTo: v,
      next: m,
      prev: g,
      goToWithPause: M,
      prevWithPause: j,
      nextWithPause: W
    }), (q, Z) => (w(), L("div", {
      class: Be(["va-carousel", {
        "va-carousel--vertical": q.$props.vertical,
        [`va-carousel--${q.$props.effect}`]: !0
      }]),
      style: me({ height: d(p) ? "auto" : e.height }),
      role: "region",
      "aria-label": d(P)(q.$props.ariaLabel)
    }, [
      q.$props.arrows && d(C) ? (w(), L(Le, { key: 0 }, [
        d(b) ? (w(), L("div", {
          key: 0,
          class: "va-carousel__arrow va-carousel__arrow--left",
          onClick: Z[0] || (Z[0] = //@ts-ignore
          (...z) => d(j) && d(j)(...z)),
          onKeydown: Z[1] || (Z[1] = Ae($e(
            //@ts-ignore
            (...z) => d(j) && d(j)(...z),
            ["stop"]
          ), ["enter"]))
        }, [
          H(q.$slots, "prev-arrow", {}, () => [
            G(d(_s), { stateful: "" }, {
              default: U(({ hover: z }) => [
                G(d(lt), {
                  color: z ? d(de) : d(J),
                  icon: e.vertical ? "va-arrow-up" : "va-arrow-left",
                  "aria-label": d(P)(q.$props.ariaPreviousLabel)
                }, null, 8, ["color", "icon", "aria-label"])
              ]),
              _: 1
            })
          ])
        ], 32)) : Y("", !0),
        d(y) ? (w(), L("div", {
          key: 1,
          class: "va-carousel__arrow va-carousel__arrow--right",
          onClick: Z[2] || (Z[2] = //@ts-ignore
          (...z) => d(W) && d(W)(...z)),
          onKeydown: Z[3] || (Z[3] = Ae($e(
            //@ts-ignore
            (...z) => d(W) && d(W)(...z),
            ["stop"]
          ), ["enter"]))
        }, [
          H(q.$slots, "next-arrow", {}, () => [
            G(d(_s), { stateful: "" }, {
              default: U(({ hover: z }) => [
                G(d(lt), {
                  color: z ? d(de) : d(J),
                  icon: e.vertical ? "va-arrow-down" : "va-arrow-right",
                  "aria-label": d(P)(q.$props.ariaNextLabel)
                }, null, 8, ["color", "icon", "aria-label"])
              ]),
              _: 1
            })
          ])
        ], 32)) : Y("", !0)
      ], 64)) : Y("", !0),
      q.$props.indicators ? (w(), L("div", LA, [
        (w(!0), L(Le, null, je(q.$props.items, (z, pe) => (w(), L("div", se({
          class: ["va-carousel__indicator", { "va-carousel__indicator--active": x(pe) }],
          key: pe
        }, V(pe)), [
          H(q.$slots, "indicator", ye(Ie({ item: z, index: pe, goTo: d(M), isActive: x(pe) })), () => [
            G(d(_s), { stateful: "" }, {
              default: U(({ hover: le }) => [
                G(d(lt), {
                  "aria-label": d(P)(q.$props.ariaGoToSlideLabel, { index: pe + 1 }),
                  round: "",
                  color: x(pe) ? d(R) : le ? d(de) : d(J)
                }, {
                  default: U(() => [
                    xe(ke(pe + 1), 1)
                  ]),
                  _: 2
                }, 1032, ["aria-label", "color"])
              ]),
              _: 2
            }, 1024)
          ])
        ], 16))), 128))
      ])) : Y("", !0),
      E("div", OA, [
        E("div", {
          ref_key: "slidesContainer",
          ref: O,
          class: "va-carousel__slides",
          style: me(d(S)),
          role: "list"
        }, [
          (w(!0), L(Le, null, je(d($), (z, pe) => (w(), L("div", {
            key: z,
            role: "listitem",
            class: "va-carousel__slide",
            style: me(T.value),
            "aria-hidden": !x(pe),
            "aria-current": x(pe),
            "aria-label": d(P)(q.$props.ariaSlideOfLabel, { index: pe + 1, length: d($).length })
          }, [
            H(q.$slots, "default", ye(Ie({ item: z, index: pe, goTo: d(M), isActive: x(pe) })), () => [
              G(d(kc), se(d(ne), {
                src: A.value ? z.src : z,
                alt: A.value ? z.alt : "",
                draggable: !1
              }), null, 16, ["src", "alt"])
            ])
          ], 12, EA))), 128))
        ], 4)
      ])
    ], 14, PA));
  }
}), DA = we(RA), xc = {
  ...Ht,
  ...ul,
  ...zo,
  arrayValue: { type: [String, Boolean, Object, Number], default: null },
  label: { type: String, default: "" },
  leftLabel: { type: Boolean, default: !1 },
  trueValue: { type: null, default: !0 },
  falseValue: { type: null, default: !1 },
  indeterminate: { type: Boolean, default: !1 },
  indeterminateValue: { type: null, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 }
}, js = [...sa, "update:modelValue", "focus", "blur"], MA = (e) => {
  const o = [e.falseValue, e.trueValue];
  if (e.indeterminate && o.push(e.indeterminateValue), new Set(o).size !== o.length)
    throw new Error("falseValue, trueValue, indeterminateValue props should have strictly different values, which is not the case.");
}, Ac = (e, o, { input: t, label: a, container: l }) => {
  MA(e);
  const s = () => y(() => {
    o("update:modelValue", !1), b();
  }), i = () => {
    var J;
    (J = Mt(t.value)) == null || J.focus();
  }, { valueComputed: c } = xt(e, o), {
    computedError: p,
    computedErrorMessages: v,
    validationAriaAttributes: m,
    listeners: g,
    withoutValidation: y,
    resetValidation: b,
    isDirty: C,
    isTouched: _,
    isError: S,
    isLoading: $,
    isValid: A
  } = Ho(e, o, { reset: s, focus: i, value: c }), { isFocused: x } = Wo(), T = (J) => {
    o("blur", J), x.value = !1, g.onBlur();
  }, O = (J) => {
    x.value = !0, o("focus", J);
  }, D = f(() => e.indeterminate && c.value === e.indeterminateValue), V = f(() => e.arrayValue !== void 0 && e.arrayValue !== null), P = f(() => {
    var J;
    return V.value ? (J = e.modelValue) == null ? void 0 : J.includes(e.arrayValue) : c.value === e.trueValue;
  });
  return {
    isDirty: C,
    isTouched: _,
    isError: S,
    isLoading: $,
    isValid: A,
    isChecked: P,
    isIndeterminate: D,
    onBlur: T,
    onFocus: O,
    toggleSelection: () => {
      if (!(e.readonly || e.disabled || e.loading)) {
        if (V.value) {
          e.modelValue ? Array.isArray(e.modelValue) ? e.modelValue.includes(e.arrayValue) ? o("update:modelValue", e.modelValue.filter((J) => J !== e.arrayValue)) : o("update:modelValue", e.modelValue.concat(e.arrayValue)) : o("update:modelValue", e.modelValue === e.arrayValue ? [] : [e.modelValue, e.arrayValue]) : o("update:modelValue", [e.arrayValue]);
          return;
        }
        if (e.indeterminate) {
          D.value ? c.value = e.trueValue : P.value ? c.value = e.falseValue : c.value = e.indeterminateValue;
          return;
        }
        P.value ? c.value = e.falseValue : c.value = e.trueValue;
      }
    },
    reset: s,
    focus: i,
    computedError: p,
    computedErrorMessages: v,
    validationAriaAttributes: m
  };
};
var yp;
function Sr() {
  const e = N(!1);
  let o = !1;
  return {
    hasKeyboardFocus: e,
    keyboardFocusListeners: {
      mousedown: () => {
        o = !0;
      },
      focus: () => {
        o || (e.value = !0), o = !1;
      },
      blur: () => {
        e.value = !1, o = !1;
      }
    }
  };
}
let Zu = !1;
(yp = sg()) == null || yp.addEventListener("mousedown", () => {
  Zu = !0, setTimeout(() => {
    Zu = !1;
  }, 300);
});
function FA() {
  const e = N(!1);
  return {
    hasKeyboardFocus: e,
    keyboardFocusListeners: {
      focus: () => {
        Zu || (e.value = !0);
      },
      blur: () => {
        e.value = !1;
      }
    }
  };
}
const NA = ["id", "indeterminate", "value", "checked"], zA = ["for"], hp = [Boolean, Array, String, Object], HA = /* @__PURE__ */ oe({
  name: "VaCheckbox",
  __name: "VaCheckbox",
  props: {
    ...xc,
    ...Ee,
    modelValue: { type: hp, default: !1 },
    color: { type: String, default: "primary" },
    checkedIcon: { type: String, default: "va-check" },
    indeterminate: { type: Boolean, default: !1 },
    indeterminateValue: { type: hp, default: null },
    indeterminateIcon: { type: String, default: "remove" },
    id: { type: String, default: "" },
    name: { type: String, default: "" },
    ariaLabel: { type: String, default: void 0 },
    vertical: { type: Boolean, default: !1 }
  },
  emits: js,
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = {
      container: He(),
      input: He(),
      label: He()
    }, {
      isChecked: i,
      computedError: c,
      isIndeterminate: p,
      computedErrorMessages: v,
      validationAriaAttributes: m,
      toggleSelection: g,
      onBlur: y,
      onFocus: b,
      isDirty: C,
      isTouched: _,
      isError: S,
      isLoading: $,
      isValid: A
    } = Ac(a, l, s), { getColor: x } = Ke(), { hasKeyboardFocus: T, keyboardFocusListeners: O } = Sr(), { textColorComputed: D } = Kt(f(() => x(a.color))), V = f(() => i.value || p.value), P = f(() => ({
      "va-checkbox--selected": i.value,
      "va-checkbox--readonly": a.readonly,
      "va-checkbox--disabled": a.disabled,
      "va-checkbox--indeterminate": a.indeterminate,
      "va-checkbox--error": c.value,
      "va-checkbox--left-label": a.leftLabel,
      "va-checkbox--on-keyboard-focus": T.value
    })), R = () => {
      switch (!0) {
        case !a.label:
          return "";
        case a.vertical:
          return "var(--va-checkbox-vertical-padding)";
        case !!a.arrayValue:
          return "var(--va-checkbox-horizontal-padding)";
        case a.leftLabel:
          return "var(--va-checkbox-right-padding)";
        default:
          return "var(--va-checkbox-left-padding)";
      }
    }, J = f(() => ({
      color: c.value ? x("danger") : a.success ? x("success") : "",
      padding: R()
    })), de = f(() => {
      const z = {
        background: V.value ? x(a.color) : "",
        borderColor: V.value ? x(a.color) : ""
      };
      return c.value && (z.borderColor = x("danger")), a.success && (z.borderColor = x("success")), z;
    }), ne = f(
      () => a.indeterminate && p.value ? a.indeterminateIcon : a.checkedIcon
    ), M = So(), j = f(() => a.id || String(M)), W = f(() => a.name || String(M)), q = f(() => ({
      name: W.value,
      disabled: a.disabled,
      readonly: a.readonly,
      tabindex: a.disabled ? -1 : 0,
      "aria-label": a.ariaLabel,
      "aria-disabled": a.disabled,
      "aria-readOnly": a.readonly,
      "aria-checked": V.value,
      ...m.value
    })), Z = f(() => a.vertical ? "--va-checkbox-display-flex" : "var(--va-checkbox-display)");
    return o({
      toggleSelection: g,
      isDirty: C,
      isTouched: _,
      isError: S,
      isLoading: $,
      isValid: A
    }), (z, pe) => (w(), te(d(Ds), {
      class: Be(["va-checkbox", P.value]),
      disabled: z.disabled,
      success: z.success,
      messages: z.messages,
      error: d(c),
      "error-messages": d(v),
      "error-count": z.errorCount,
      style: me(`--va-display-val: ${String(Z.value)}`)
    }, {
      default: U(() => [
        E("div", {
          ref: "container",
          class: "va-checkbox__input-container",
          onClick: pe[6] || (pe[6] = //@ts-ignore
          (...le) => d(g) && d(g)(...le)),
          onBlur: pe[7] || (pe[7] = //@ts-ignore
          (...le) => d(y) && d(y)(...le))
        }, [
          E("div", {
            class: "va-checkbox__square",
            style: me(de.value),
            onSelectstart: pe[4] || (pe[4] = $e(() => {
            }, ["prevent"]))
          }, [
            E("input", se({
              ref: "input",
              type: "checkbox",
              class: "va-checkbox__input",
              id: j.value,
              indeterminate: e.indeterminate,
              value: z.label,
              checked: V.value
            }, q.value, Kn(d(O), !0), {
              onFocus: pe[0] || (pe[0] = //@ts-ignore
              (...le) => d(b) && d(b)(...le)),
              onBlur: pe[1] || (pe[1] = //@ts-ignore
              (...le) => d(y) && d(y)(...le)),
              onClick: pe[2] || (pe[2] = $e(() => {
              }, ["stop", "prevent"])),
              onKeypress: pe[3] || (pe[3] = $e(
                //@ts-ignore
                (...le) => d(g) && d(g)(...le),
                ["prevent"]
              ))
            }), null, 16, NA),
            V.value ? (w(), te(d(ot), {
              key: 0,
              class: "va-checkbox__icon",
              name: ne.value,
              color: d(D)
            }, null, 8, ["name", "color"])) : Y("", !0)
          ], 36),
          z.label || z.$slots.label ? (w(), L("label", {
            key: 0,
            ref: "label",
            class: "va-checkbox__label",
            for: j.value,
            style: me(J.value),
            onBlur: pe[5] || (pe[5] = //@ts-ignore
            (...le) => d(y) && d(y)(...le))
          }, [
            H(z.$slots, "label", {}, () => [
              xe(ke(z.label), 1)
            ])
          ], 44, zA)) : Y("", !0)
        ], 544)
      ]),
      _: 3
    }, 8, ["class", "disabled", "success", "messages", "error", "error-messages", "error-count", "style"]));
  }
}), pl = we(HA), WA = { class: "va-chip__content" }, UA = /* @__PURE__ */ oe({
  name: "VaChip",
  __name: "VaChip",
  props: {
    ...Na,
    ...fc,
    ...Ht,
    ...Ee,
    modelValue: { type: Boolean, default: !0 },
    closeable: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    square: { type: Boolean, default: !1 },
    shadow: { type: Boolean, default: !1 },
    flat: { type: Boolean, default: !1 },
    icon: { type: String, default: "" },
    tag: { type: String, default: "span" },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    ariaCloseLabel: Fe("$t:close")
  },
  emits: [...on, "focus"],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, { getColor: s } = Ke(), i = f(() => s(a.color)), c = f(() => a.outline ? i.value : ""), p = f(() => !!(a.outline || a.flat)), { textColorComputed: v } = Kt(i, p), { hasKeyboardFocus: m, keyboardFocusListeners: g } = Sr(), y = f(() => {
      if (!(!a.shadow || a.flat || a.outline || a.disabled || m.value))
        return `0 0.125rem 0.19rem 0 ${Qm(i.value)}`;
    }), { valueComputed: b } = xt(a, l), { tagComputed: C, hrefComputed: _ } = ia(a), { isHovered: S, onMouseEnter: $, onMouseLeave: A } = cl(), x = () => {
      a.disabled || (b.value = !1);
    }, T = f(() => a.size), O = f(() => a.disabled ? -1 : 0), D = ht("va-chip", () => ({
      ...It(a, ["disabled", "readonly", "square"]),
      small: a.size === "small",
      large: a.size === "large"
    })), V = f(() => {
      const R = {
        color: v.value,
        borderColor: c.value,
        background: "",
        boxShadow: y.value
      };
      return a.outline || a.flat ? m.value ? R.background = tg(i.value) : !a.readonly && S.value && (R.background = eg(i.value)) : R.background = i.value, R;
    }), { tp: P } = Ct();
    return o({
      close: x
    }), (R, J) => d(b) ? (w(), te(zt(d(C)), {
      key: 0,
      class: Be(["va-chip", d(D)]),
      href: d(_),
      target: R.target,
      to: R.to,
      replace: R.replace,
      exact: R.exact,
      "active-class": R.activeClass,
      "exact-active-class": R.exactActiveClass,
      style: me(V.value)
    }, {
      default: U(() => [
        E("span", se({
          class: "va-chip__inner",
          onFocus: J[0] || (J[0] = (de) => R.$emit("focus")),
          onMouseenter: J[1] || (J[1] = //@ts-ignore
          (...de) => d($) && d($)(...de)),
          onMouseleave: J[2] || (J[2] = //@ts-ignore
          (...de) => d(A) && d(A)(...de))
        }, Kn(d(g), !0)), [
          e.icon ? (w(), te(d(ot), {
            key: 0,
            class: "va-chip__icon",
            name: e.icon,
            size: T.value
          }, null, 8, ["name", "size"])) : Y("", !0),
          E("span", WA, [
            H(R.$slots, "default")
          ]),
          e.closeable ? (w(), te(d(ot), {
            key: 1,
            role: "button",
            name: "va-close",
            class: "va-chip__close-icon",
            "aria-label": d(P)(R.$props.ariaCloseLabel),
            tabindex: O.value,
            size: T.value,
            onClick: $e(x, ["stop"]),
            onKeydown: [
              Ae($e(x, ["stop"]), ["enter"]),
              Ae($e(x, ["stop"]), ["space"])
            ]
          }, null, 8, ["aria-label", "tabindex", "size", "onKeydown"])) : Y("", !0)
        ], 16)
      ]),
      _: 3
    }, 8, ["href", "target", "to", "replace", "exact", "active-class", "exact-active-class", "class", "style"])) : Y("", !0);
  }
}), GA = we(UA), KA = { class: "va-collapse__header__text" }, qA = ["id", "aria-labelledby"], jA = { class: "va-collapse__content" }, YA = /* @__PURE__ */ oe({
  name: "VaCollapse",
  __name: "VaCollapse",
  props: {
    ...Ee,
    ...Ht,
    modelValue: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    header: { type: String, default: "" },
    icon: { type: String, default: "" },
    color: { type: String, default: void 0 },
    bodyColor: { type: String, default: void 0 },
    textColor: { type: String, default: "" },
    bodyTextColor: { type: String, default: "" },
    iconColor: { type: String, default: "secondary" },
    colorAll: { type: Boolean, default: !1 },
    stateful: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", ...js],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = He(), { valueComputed: i } = xt(a, l, "modelValue"), { getColor: c, getTextColor: p, setHSLAColor: v } = Ke(), { accordionProps: m, accordionItemValue: g } = HV(), y = f({
      get() {
        return i.userProvided || $n(g) ? i.value : g.value;
      },
      set(W) {
        $n(g) || (g.value = W), i.value = W;
      }
    });
    i.userProvided && !$n(g) && (g.value = i.value);
    const b = N();
    Ta([s], ([W]) => {
      b.value = W.contentRect.height ?? 0;
    });
    const C = f(() => y.value ? b.value : 0), _ = () => {
      const W = C.value / 1e3 * 0.2;
      return `${W > 0.2 ? W : 0.2}s`;
    }, S = f(() => a.bodyColor ? c(a.bodyColor) : a.color && a.colorAll ? v(c(a.color), { a: 0.07 }) : void 0), $ = f(() => a.color ? c(a.color) : void 0), A = So(), x = f(() => `header-${A}`), T = f(() => `panel-${A}`), O = f(() => a.disabled ? -1 : 0), D = f(() => ({
      id: x.value,
      tabindex: O.value,
      "aria-controls": T.value,
      "aria-expanded": y.value,
      "aria-disabled": a.disabled,
      role: "button"
    })), V = N(!1);
    Se(C, (W, q) => {
      q !== void 0 && V.value !== !0 && (V.value = !0);
    });
    const P = (W) => {
      W.propertyName === "height" && W.target === W.currentTarget && (V.value = !1);
    }, R = ht("va-collapse", () => ({
      ...It(a, ["disabled"]),
      expanded: y.value,
      active: y.value,
      popout: !!(m.value.popout && y.value),
      inset: !!(m.value.inset && y.value),
      "height-changing": V.value,
      "colored-body": !!S.value,
      "colored-header": !!$.value
    })), J = () => {
      a.disabled || (y.value = !y.value);
    }, { textColorComputed: de } = Kt($), ne = f(() => ({
      color: de.value,
      backgroundColor: $.value
    })), M = f(() => !!(y.value || V.value)), j = f(() => ({
      height: `${C.value}px`,
      transitionDuration: _(),
      background: y.value ? S.value : "",
      color: a.bodyTextColor ? c(a.bodyTextColor) : S.value ? c(p(S.value)) : "currentColor"
    }));
    return o({
      toggle: J
    }), (W, q) => (w(), L("div", {
      class: Be(["va-collapse", d(R)])
    }, [
      E("div", {
        class: "va-collapse__header-wrapper",
        onClick: J,
        onKeydown: [
          Ae(J, ["enter"]),
          Ae(J, ["space"])
        ]
      }, [
        H(W.$slots, "header", ye(Ie({
          value: y.value,
          bind: D.value,
          attributes: D.value,
          attrs: D.value,
          iconAttrs: {
            class: [
              "va-collapse__expand-icon",
              y.value ? "a-collapse__expand-icon--expanded" : "a-collapse__expand-icon--collapsed"
            ]
          },
          text: e.header
        })), () => [
          E("div", se(D.value, {
            class: "va-collapse__header",
            style: ne.value
          }), [
            e.icon ? (w(), te(d(ot), {
              key: 0,
              class: "va-collapse__header__icon",
              name: e.icon
            }, null, 8, ["name"])) : Y("", !0),
            H(W.$slots, "header-content", ye(Ie({ header: e.header })), () => [
              E("div", KA, ke(e.header), 1)
            ]),
            H(W.$slots, "expand-icon", {}, () => [
              G(d(ot), {
                class: Be(["va-collapse__expand-icon", y.value ? "va-collapse__expand-icon--expanded" : "va-collapse__expand-icon--collapsed"]),
                name: "va-arrow-down"
              }, null, 8, ["class"])
            ])
          ], 16)
        ])
      ], 32),
      E("div", {
        class: Be(["va-collapse__body-wrapper", {
          "va-collapse__body-wrapper--bordered": !W.$slots.body && !W.$slots.header
        }]),
        style: me(j.value),
        onTransitionend: P
      }, [
        M.value ? (w(), L("div", {
          key: 0,
          class: "va-collapse__body",
          ref_key: "body",
          ref: s,
          role: "region",
          id: T.value,
          "aria-labelledby": x.value
        }, [
          H(W.$slots, "body", {}, () => [
            E("div", jA, [
              H(W.$slots, "default", {}, () => [
                H(W.$slots, "content")
              ])
            ])
          ])
        ], 8, qA)) : Y("", !0)
      ], 38)
    ], 2));
  }
}), XA = we(YA), ZA = /* @__PURE__ */ oe({
  name: "VaColorIndicator",
  __name: "VaColorIndicator",
  props: {
    ...Ht,
    ...Ee,
    modelValue: { type: Boolean, default: null },
    color: { type: String, default: "" },
    square: { type: Boolean, default: !1 },
    size: { type: String, default: "1rem" }
  },
  emits: [...on],
  setup(e, { emit: o }) {
    const t = e, a = o, { valueComputed: l } = xt(t, a), { getColor: s } = Ke(), { hasKeyboardFocus: i, keyboardFocusListeners: c } = Sr(), p = f(() => s(t.color)), v = f(() => t.square ? "0px" : "50%"), m = f(() => ({
      backgroundColor: p.value,
      height: t.size,
      width: t.size
    })), g = f(() => ({
      "va-color-indicator--selected": l.value,
      "va-color-indicator--on-keyboard-focus": i.value
    })), y = () => {
      l.value = !l.value;
    };
    return (b, C) => (w(), L("div", se({
      class: ["va-color-indicator", g.value],
      style: [m.value, `--va-border-radius-computed: ${String(v.value)}`],
      onClick: y,
      onKeydown: [
        Ae(y, ["enter"]),
        Ae(y, ["space"])
      ]
    }, Kn(d(c), !0)), [
      E("div", {
        class: "va-color-indicator__core",
        style: me(m.value)
      }, null, 4)
    ], 16));
  }
}), Ic = we(ZA), JA = {
  key: 0,
  class: "va-input-label__required-mark"
}, ly = /* @__PURE__ */ oe({
  name: "VaInputLabel",
  __name: "VaInputLabel",
  props: {
    label: {
      type: String,
      default: ""
    },
    requiredMark: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(e) {
    const { getColor: o } = Ke();
    return (t, a) => (w(), L("label", {
      "aria-hidden": "true",
      class: "va-input-label",
      style: me({ color: d(o)(t.$props.color, void 0, !0) })
    }, [
      H(t.$slots, "default", ye(Ie({ label: e.label, requiredMark: e.requiredMark, color: d(o)(t.$props.color) })), () => [
        xe(ke(e.label) + " ", 1),
        e.requiredMark ? (w(), L("span", JA, " * ")) : Y("", !0)
      ])
    ], 4));
  }
}), QA = {
  label: { type: String, default: "" },
  inputAriaLabel: Fe("$t:inputField"),
  inputAriaLabelledby: { type: String },
  inputAriaDescribedby: { type: String }
}, eI = (e) => {
  const o = So(), t = `input-label-${o}`, a = `input-character-count-${o}`, l = f(() => ({
    "aria-label": e.label !== "" ? e.label : e.inputAriaLabel,
    "aria-labelledby": e.inputAriaLabelledby ? e.inputAriaLabelledby : t,
    "aria-describedby": e.inputAriaDescribedby ? e.inputAriaDescribedby : a
  }));
  return {
    labelId: t,
    characterCountId: a,
    ariaAttributes: l
  };
}, tI = (e) => oe({
  name: "ProxySlots",
  props: {
    inheritSlots: { type: Array, required: !0 }
  },
  render() {
    var o;
    const t = ((o = this.$parent) == null ? void 0 : o.$slots) || {}, l = (this.$props.inheritSlots || Object.keys(t)).reduce(
      (s, i) => (t[i] && (s[i] = t[i]), s),
      {}
    );
    return bt(e, this.$attrs, {
      ...l,
      ...this.$slots
    });
  }
}), ua = {
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 }
}, sy = (e, o) => ({ computedClasses: ht(e, f(() => It(o, ["disabled", "readonly"]))) }), Tc = (e) => {
  const o = yg(), t = hc(e ? br(e) : void 0);
  let a = null;
  const l = f({
    get() {
      var s;
      if (!o.value)
        return !1;
      if (o.value === t.value)
        return !0;
      const i = (s = t.value) == null ? void 0 : s.contains(o.value);
      return i && (a = o.value), i;
    },
    set(s) {
      var i;
      let c = a ?? t.value;
      (i = t.value) != null && i.contains(c) || (c = t.value), s ? c?.focus() : c?.blur();
    }
  });
  return Object.assign(l, {
    /** Focus `el` if focus is not set to any other element */
    focusIfNothingIfFocused: () => {
      o.value === document.body && (l.value = !0);
    },
    focusPreviousElement: () => {
      a ? a.focus() : document.body.focus();
    }
  });
}, bp = ct(ly), nI = oe({
  name: "VaInputWrapper",
  components: { VaMessageList: tI(Rs), VaIcon: ot, VaInputLabel: ly },
  props: {
    ...Ee,
    ...QA,
    ...ua,
    ...zo,
    ...bp,
    modelValue: { type: null, default: "" },
    counter: { type: Boolean },
    maxLength: { type: [Number, String], default: void 0 },
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    color: { type: String, default: "primary" },
    background: { type: String },
    success: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    requiredMark: { type: Boolean, default: !1 },
    innerLabel: { type: Boolean, default: !1 }
  },
  emits: [
    "click",
    "click-prepend",
    "click-append",
    "click-prepend-inner",
    "click-append-inner",
    "click-field",
    "update:modelValue"
  ],
  setup(e, { emit: o, slots: t }) {
    const { getColor: a } = Ke(), [l] = Ia("modelValue", e, o, ""), s = N(), i = Tc(), c = f(
      () => e.counter && typeof l.value == "string" ? l.value.length : void 0
    ), p = ht("va-input-wrapper", () => ({
      ...It(e, ["success", "error", "disabled", "readonly"]),
      focused: !!i.value,
      labeled: !!(e.label || t.label),
      labeledInner: !!(e.label || t.label) && e.innerLabel
    })), v = f(() => a(e.color)), m = f(() => e.background ? a(e.background) : "#ffffff00"), g = f(() => e.error ? e.errorMessages : e.messages), { textColorComputed: y } = Kt(m), b = et("maxLength"), C = f(() => e.error ? "danger" : e.success ? "success" : ""), _ = f(() => e.error ? Number(e.errorCount) : 99), S = f(() => c.value !== void 0), $ = f(
      () => b.value !== void 0 ? `${c.value}/${b.value}` : c.value
    ), {
      labelId: A,
      characterCountId: x,
      ariaAttributes: T
    } = eI(e), O = _t(bp);
    return {
      inputRef: s,
      focus: () => {
        i.value = !0;
      },
      blur: () => {
        i.value = !1;
      },
      labelId: A,
      characterCountId: x,
      ariaAttributes: T,
      vModel: l,
      counterValue: c,
      vaInputLabelProps: O,
      wrapperClass: p,
      textColorComputed: y,
      isCounterVisible: S,
      counterComputed: $,
      colorComputed: v,
      backgroundComputed: m,
      messagesColor: C,
      messagesComputed: g,
      errorLimit: _
    };
  }
}), oI = { class: "va-input-wrapper__fieldset va-input-wrapper__size-keeper" }, aI = { class: "va-input-wrapper__container" }, rI = { class: "va-input-wrapper__text" }, lI = ["placeholder", "readonly", "disabled"], sI = ["id"], iI = { class: "va-input-wrapper__counter" };
function uI(e, o, t, a, l, s) {
  const i = ze("VaInputLabel"), c = ze("va-icon"), p = ze("va-message-list");
  return w(), L("div", {
    class: Be(["va-input-wrapper", e.wrapperClass]),
    onClick: o[6] || (o[6] = (v) => e.$emit("click", v)),
    style: me(`--va-background-computed: ${String(e.backgroundComputed)};--va-color-computed: ${String(e.colorComputed)};--va-text-color-computed: ${String(e.textColorComputed)}`)
  }, [
    E("fieldset", oI, [
      G(p, {
        color: e.messagesColor,
        "model-value": e.messagesComputed,
        limit: e.errorLimit,
        "inherit-slots": ["message", "messages"]
      }, {
        default: U(({ ariaAttributes: v }) => [
          (e.$props.label || e.$slots.label) && !e.$props.innerLabel ? (w(), te(i, se({
            key: 0,
            class: "va-input-wrapper__label va-input-wrapper__label--outer"
          }, e.vaInputLabelProps, { id: e.labelId }), {
            default: U((m) => [
              H(e.$slots, "label", ye(Ie(m)))
            ]),
            _: 3
          }, 16, ["id"])) : Y("", !0),
          E("div", aI, [
            e.$slots.prepend ? (w(), L("div", {
              key: 0,
              class: "va-input-wrapper__prepend-inner",
              onClick: o[0] || (o[0] = (m) => e.$emit("click-prepend"))
            }, [
              H(e.$slots, "prepend")
            ])) : Y("", !0),
            E("div", {
              onClick: o[4] || (o[4] = (m) => e.$emit("click-field", m)),
              class: "va-input-wrapper__field"
            }, [
              e.$slots.prependInner ? (w(), L("div", {
                key: 0,
                class: "va-input-wrapper__prepend-inner",
                ref: "container",
                onClick: o[1] || (o[1] = (m) => e.$emit("click-prepend-inner", m))
              }, [
                H(e.$slots, "prependInner")
              ], 512)) : Y("", !0),
              E("div", rI, [
                (e.$props.label || e.$slots.label) && e.$props.innerLabel ? (w(), te(i, se({
                  key: 0,
                  class: "va-input-wrapper__label va-input-wrapper__label--inner"
                }, e.vaInputLabelProps, { id: e.labelId }), {
                  default: U((m) => [
                    H(e.$slots, "label", ye(Ie(m)))
                  ]),
                  _: 3
                }, 16, ["id"])) : Y("", !0),
                H(e.$slots, "default", ye(Ie({ ariaAttributes: { ...v, ...e.ariaAttributes }, value: e.vModel })), () => [
                  ao(E("input", se({ ...v, ...e.ariaAttributes }, {
                    "onUpdate:modelValue": o[2] || (o[2] = (m) => e.vModel = m),
                    ref: "inputRef",
                    placeholder: e.$props.placeholder,
                    readonly: e.$props.readonly,
                    disabled: e.$props.disabled
                  }), null, 16, lI), [
                    [Ls, e.vModel]
                  ])
                ])
              ]),
              e.success ? (w(), te(c, {
                key: 1,
                color: "success",
                name: "va-check-circle",
                class: "va-input-wrapper__icon va-input-wrapper__icon--success"
              })) : Y("", !0),
              e.error ? (w(), te(c, {
                key: 2,
                color: "danger",
                name: "va-warning",
                class: "va-input-wrapper__icon va-input-wrapper__icon--error"
              })) : Y("", !0),
              e.$props.loading ? (w(), te(c, {
                key: 3,
                color: e.$props.color,
                name: "va-loading",
                spin: "counter-clockwise",
                class: "va-input-wrapper__icon va-input-wrapper__icon--loading"
              }, null, 8, ["color"])) : Y("", !0),
              H(e.$slots, "icon"),
              e.$slots.appendInner ? (w(), L("div", {
                key: 4,
                class: "va-input-wrapper__append-inner",
                onClick: o[3] || (o[3] = (m) => e.$emit("click-append-inner", m))
              }, [
                H(e.$slots, "appendInner")
              ])) : Y("", !0)
            ]),
            e.$slots.append ? (w(), L("div", {
              key: 1,
              class: "va-input-wrapper__append-inner",
              onClick: o[5] || (o[5] = (m) => e.$emit("click-append"))
            }, [
              H(e.$slots, "append")
            ])) : Y("", !0)
          ]),
          e.isCounterVisible ? (w(), L("div", {
            key: 1,
            class: "va-input-wrapper__counter-wrapper",
            id: e.characterCountId
          }, [
            H(e.$slots, "counter", ye(Ie({ valueLength: e.counterValue, maxLength: e.$props.maxLength })), () => [
              E("div", iI, ke(e.counterComputed), 1)
            ])
          ], 8, sI)) : Y("", !0)
        ]),
        _: 3
      }, 8, ["color", "model-value", "limit"])
    ])
  ], 6);
}
const cI = /* @__PURE__ */ Wa(nI, [["render", uI]]), kn = we(cI), dI = (...e) => (...o) => e.forEach((t) => t(...o)), fI = {
  /** Focus element when mounted */
  autofocus: { type: Boolean, default: !1 }
}, vI = (e, o) => {
  const t = () => {
    yo(Mt(e.value));
  }, a = () => {
    Ns(Mt(e.value));
  };
  return at(() => {
    o.autofocus && t();
  }), {
    focus: t,
    blur: a
  };
}, ml = {
  clearable: { type: Boolean, default: !1 },
  clearableIcon: { type: String, default: "va-clear" },
  clearValue: { type: String, default: "" }
}, Ys = ["clear"], Xs = (e, o, t, a) => {
  const { isFocused: l, onFocus: s, onBlur: i } = Wo(t), c = [null, void 0, e.clearValue], p = f(() => e.clearable && !e.disabled && !e.readonly && !c.includes(o.value)), v = f(() => l?.value ? e.color || "primary" : a?.value ? "danger" : e.success ? "success" : "secondary"), m = f(() => ({
    name: e.clearableIcon,
    color: v.value,
    size: "medium",
    tabindex: p.value ? 0 : -1
  }));
  return {
    canBeCleared: p,
    clearIconColor: v,
    clearIconProps: m,
    onFocus: s,
    onBlur: i
  };
}, pI = (e) => {
  if (!yr)
    return;
  const o = Pt();
  if (!o)
    throw new Error("`useDeprecated` hook must be used only inside of setup function!");
  e.forEach((t) => {
    const a = t();
    typeof a == "string" && yt(`(${o.type.name} component) ${a}`);
  });
}, _p = ct(kn), { createEmits: mI, createListeners: gI } = Ha(
  ["change", "keyup", "keypress", "keydown", "focus", "blur", "input"]
), { createEmits: yI, createListeners: hI } = Ha([
  "click",
  "click-prepend",
  "click-append",
  "click-prepend-inner",
  "click-append-inner"
]), bI = /* @__PURE__ */ oe({
  name: "VaInput",
  __name: "VaInput",
  props: {
    ..._p,
    ...ua,
    ...fI,
    ...zo,
    ...ml,
    ...Ee,
    ...Ht,
    // input
    placeholder: { type: String, default: "" },
    tabindex: { type: [String, Number], default: 0 },
    modelValue: { type: [Number, String, null], default: "" },
    type: { type: String, default: "text" },
    inputClass: { type: String, default: "" },
    pattern: { type: String },
    inputmode: { type: String, default: "text" },
    counter: { type: Boolean, default: !1 },
    autocomplete: { type: String },
    // style
    ariaResetLabel: Fe("$t:reset"),
    /** Set value to input when model value is updated */
    strictBindInputValue: { type: Boolean, default: !1 }
  },
  emits: [
    "update:modelValue",
    ...sa,
    ...Ys,
    ...mI(),
    ...yI(),
    ...on
  ],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t;
    pI([
      () => a.type !== "textarea" || 'Use VaTextarea component instead of VaInput with type="textarea"'
    ]);
    const s = He(), { valueComputed: i } = xt(a, l, "modelValue"), c = () => O(() => {
      i.value = a.clearValue, l("clear"), D();
    }), { focus: p, blur: v } = vI(s, a), m = hn(), g = f(() => {
      const _e = ["icon"];
      return Object.keys(m).filter((Re) => !_e.includes(Re));
    }), { tp: y } = Ct(), {
      isValid: b,
      isTouched: C,
      isDirty: _,
      computedError: S,
      computedErrorMessages: $,
      listeners: { onBlur: A },
      validationAriaAttributes: x,
      isLoading: T,
      withoutValidation: O,
      resetValidation: D
    } = Ho(a, l, { reset: c, focus: p, value: i }), { modelValue: V } = so(a), {
      canBeCleared: P,
      clearIconProps: R
    } = Xs(a, V, s, S), J = gI(l), de = {
      ...J,
      onBlur: dI(A, J.onBlur)
    }, ne = (_e) => {
      if (!a.strictBindInputValue)
        return;
      const Re = s.value;
      if (!Re)
        return;
      const Ve = Re.selectionStart || 0, ee = Re.selectionEnd || 0;
      Re.value !== _e && (Re.value = String(_e)), Re.setSelectionRange(Ve, ee);
    };
    Se(i, (_e) => {
      ne(String(_e));
    }, { immediate: !0 }), $t("input", () => {
      ne(String(i.value));
    }, s);
    const M = f(() => a.disabled ? -1 : a.tabindex), j = la(), W = f(() => ({
      "aria-label": a.inputAriaLabel || a.label,
      "aria-labelledby": a.inputAriaLabelledby,
      "aria-required": a.requiredMark,
      tabindex: M.value,
      class: a.inputClass,
      "aria-disabled": a.disabled,
      "aria-readonly": a.readonly,
      ...x.value
    })), q = f(() => ({
      ...W.value,
      ...It(a, ["type", "disabled", "readonly", "placeholder", "pattern", "inputmode", "name", "autocomplete"]),
      ...It(j, ["minlength", "minlength"])
    })), Z = f(
      () => a.counter && typeof i.value == "string" ? i.value.length : void 0
    ), z = (_e) => {
      !_e.target || !("tagName" in _e.target) || _e.target.tagName === "INPUT" || _e.target.tagName === "TEXTAREA" || p();
    }, pe = _t(_p), le = hI(l);
    return o({
      isValid: b,
      isDirty: _,
      isTouched: C,
      isLoading: T,
      computedError: S,
      computedErrorMessages: $,
      reset: c,
      focus: p,
      blur: v,
      value: i,
      withoutValidation: O,
      resetValidation: D
    }), (_e, Re) => (w(), te(d(kn), se({
      ...d(le),
      ...d(pe)
    }, {
      class: ["va-input", _e.$attrs.class],
      style: _e.$attrs.style,
      loading: _e.$props.loading || d(T),
      error: d(S),
      "error-messages": d($),
      "error-count": _e.errorCount,
      "counter-value": Z.value,
      onClick: z
    }), un({
      icon: U((Ve) => [
        d(P) ? (w(), te(d(ot), se({
          key: 0,
          role: "button",
          "aria-label": d(y)(_e.$props.ariaResetLabel)
        }, d(R), {
          onClick: $e(c, ["stop"]),
          onKeydown: [
            Ae($e(c, ["stop"]), ["enter"]),
            Ae($e(c, ["stop"]), ["space"])
          ]
        }), null, 16, ["aria-label", "onKeydown"])) : Y("", !0),
        H(_e.$slots, "icon", ye(Ie(Ve)))
      ]),
      default: U(() => [
        _e.$slots.content ? Y("", !0) : ao((w(), L("input", se({
          key: 0,
          ref_key: "input",
          ref: s,
          class: "va-input__content__input"
        }, { ...q.value, ...de }, {
          "onUpdate:modelValue": Re[0] || (Re[0] = (Ve) => yn(i) ? i.value = Ve : null)
        }), null, 16)), [
          [Ls, d(i)]
        ])
      ]),
      _: 2
    }, [
      je(g.value, (Ve) => ({
        name: Ve,
        fn: U((ee) => [
          H(_e.$slots, Ve, ye(Ie(ee)))
        ])
      }))
    ]), 1040, ["class", "style", "loading", "error", "error-messages", "error-count", "counter-value"]));
  }
}), Bc = we(bI), _I = { class: "va-color-input" }, Cp = ct(Bc), CI = /* @__PURE__ */ oe({
  name: "VaColorInput",
  __name: "VaColorInput",
  props: {
    ...Cp,
    ...Ht,
    ...Ee,
    modelValue: { type: String, default: null },
    disabled: { type: Boolean, default: !1 },
    indicator: {
      type: String,
      default: "dot",
      validator: (e) => ["dot", "square"].includes(e)
    },
    ariaOpenColorPickerLabel: Fe("$t:openColorPicker")
  },
  emits: [...on],
  setup(e, { emit: o }) {
    const t = e, a = o, l = He(), { valueComputed: s } = xt(t, a), i = () => {
      var g;
      return !t.disabled && ((g = l.value) == null ? void 0 : g.click());
    }, c = f(() => t.disabled ? -1 : 0), p = f({
      get: () => t.modelValue,
      set: Ig((g) => a("update:modelValue", g), 500)
    }), v = _t(Cp), { tp: m } = Ct();
    return (g, y) => (w(), L("div", _I, [
      G(d(Bc), se(d(v), {
        modelValue: d(s),
        "onUpdate:modelValue": y[0] || (y[0] = (b) => yn(s) ? s.value = b : null),
        class: "va-color-input__input",
        tabindex: c.value
      }), {
        appendInner: U(() => [
          G(d(Ic), {
            class: "va-color-input__dot",
            role: "button",
            "aria-label": d(m)(g.$props.ariaOpenColorPickerLabel),
            "aria-disabled": g.$props.disabled,
            tabindex: c.value,
            color: d(s),
            indicator: g.$props.indicator,
            size: "16px",
            onClick: i,
            onKeydown: [
              Ae(i, ["space"]),
              Ae(i, ["enter"])
            ]
          }, null, 8, ["aria-label", "aria-disabled", "tabindex", "color", "indicator"])
        ]),
        _: 1
      }, 16, ["modelValue", "tabindex"]),
      ao(E("input", {
        ref_key: "colorPicker",
        ref: l,
        type: "color",
        class: "va-color-input__hidden-input",
        "aria-hidden": "true",
        tabindex: "-1",
        "onUpdate:modelValue": y[1] || (y[1] = (b) => p.value = b)
      }, null, 512), [
        [bm, p.value]
      ])
    ]));
  }
}), SI = we(CI), wI = ["aria-label"], $I = /* @__PURE__ */ oe({
  name: "VaColorPalette",
  __name: "VaColorPalette",
  props: {
    ...Ht,
    ...Ee,
    modelValue: { type: String, default: null },
    palette: { type: Array, default: () => [] },
    indicator: {
      type: String,
      default: "dot",
      validator: (e) => ["dot", "square"].includes(e)
    },
    ariaLabel: Fe("$t:colorSelection"),
    ariaIndicatorLabel: Fe("$t:color")
  },
  emits: [...on],
  setup(e, { emit: o }) {
    const t = e, a = o, { valueComputed: l } = xt(t, a), s = (c) => l.value === c, { tp: i } = Ct();
    return (c, p) => (w(), L("ul", {
      class: "va-color-palette",
      role: "listbox",
      "aria-label": d(i)(c.$props.ariaLabel)
    }, [
      (w(!0), L(Le, null, je(e.palette, (v, m) => (w(), te(d(Ic), {
        key: m,
        role: "option",
        "aria-label": d(i)(c.$props.ariaIndicatorLabel, { color: v }),
        "aria-selected": s(v),
        tabindex: "0",
        modelValue: s(v),
        color: v,
        square: e.indicator === "square",
        "onUpdate:modelValue": (g) => l.value = v
      }, null, 8, ["aria-label", "aria-selected", "modelValue", "color", "square", "onUpdate:modelValue"]))), 128))
    ], 8, wI));
  }
}), kI = we($I), VI = {
  name: "VaContent"
}, xI = { class: "va-typography-block" };
function AI(e, o, t, a, l, s) {
  return w(), L("div", xI, [
    H(e.$slots, "default")
  ]);
}
const II = /* @__PURE__ */ Wa(VI, [["render", AI]]), TI = we(II), Ju = (e) => typeof e == "number" ? `${e}px` : e;
function BI(e) {
  Se(
    [
      () => e.step,
      () => e.min,
      () => e.max
    ],
    () => {
      const t = Number(e.modelValue), a = Number(e.max), l = Number(e.min), s = Number(e.step);
      if (Number.isNaN(t)) {
        yt("The value is not a number or cannot be reduced to a number.");
        return;
      }
      l && a && l > a && yt(`The maximum value (${a}) can not be less than the minimum value (${l}).`), l && t < l && yt(`The value of the counter (${t}) can not be less than the minimum value (${l}).`), a && t > a && yt(`The value of the counter (${t}) can not be greater than the maximum value (${a}).`), l && a && s > a - l && yt(`The value of the step (${s}) can not be greater than the difference (${a - l}) between maximum value (${a}) and minimum value (${l}).`);
    },
    { immediate: !0 }
  );
}
const iy = (e) => Number(e.toPrecision(13)), PI = (e, o) => {
  const t = iy(e % o);
  return t === 0 || t === o;
};
function Sp(e, o) {
  let t = -1, a = -1;
  const l = () => {
    var c;
    (c = o.onStart) == null || c.call(o), clearTimeout(t), t = setTimeout(() => {
      a = setInterval(() => {
        var p;
        return (p = o.onUpdate) == null ? void 0 : p.call(o);
      }, o.interval || 100);
    }, d(o.delay) || 500);
  }, s = () => {
    var c;
    clearTimeout(t), clearInterval(a), (c = o.onEnd) == null || c.call(o);
  }, i = br(e);
  $t(["mousedown", "touchstart", "dragstart"], l, i), $t([
    "mouseup",
    "mouseleave",
    "touchend",
    "touchcancel",
    "drop",
    "dragend",
    "blur"
  ], s, !0);
}
const LI = ["value", "aria-live"], { createEmits: OI, createListeners: EI } = Ha(
  ["change"]
), { createEmits: RI, createListeners: DI } = Ha([
  { listen: "click-prepend", emit: "click:decrease-button" },
  { listen: "click-append", emit: "click:increase-button" },
  { listen: "click-prepend-inner", emit: "click:decrease-icon" },
  { listen: "click-append-inner", emit: "click:increase-icon" }
]), wp = ct(kn), MI = /* @__PURE__ */ oe({
  name: "VaCounter",
  inheritAttrs: !1,
  __name: "VaCounter",
  props: {
    ...ua,
    ...Ht,
    ...Ee,
    ...ml,
    ...wp,
    // input
    modelValue: { type: [String, Number], default: 0 },
    manualInput: { type: Boolean, default: !1 },
    min: { type: [Number, String] },
    max: { type: [Number, String] },
    step: { type: [Number, String], default: 1 },
    color: { type: String, default: "primary" },
    // icons & buttons
    increaseIcon: { type: String, default: "va-plus" },
    decreaseIcon: { type: String, default: "va-minus" },
    buttons: { type: Boolean, default: !1 },
    flat: { type: Boolean, default: !0 },
    rounded: { type: Boolean, default: !1 },
    margins: { type: [String, Number], default: "4px" },
    longPressDelay: { type: [Number, String], default: 500 },
    ariaLabel: Fe("$t:counterValue"),
    ariaDecreaseLabel: Fe("$t:decreaseCounter"),
    ariaIncreaseLabel: Fe("$t:increaseCounter")
  },
  emits: [
    "update:modelValue",
    ...sa,
    ...OI(),
    ...RI(),
    ...zs
  ],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = He(), { min: i = N(void 0), max: c = N(void 0), step: p } = so(a), v = et("longPressDelay"), {
      isFocused: m,
      focus: g,
      blur: y
    } = Wo(s, l), { valueComputed: b } = xt(a, l);
    function C(Ue) {
      return parseFloat(Number(Ue).toFixed(10));
    }
    const _ = f({
      get() {
        return b.value;
      },
      set(Ue) {
        b.value = C(Ue);
      }
    }), S = () => x(() => {
      l("update:modelValue", a.clearValue), l("clear"), T();
    }), {
      computedError: $,
      computedErrorMessages: A,
      withoutValidation: x,
      resetValidation: T,
      listeners: O,
      isDirty: D,
      isTouched: V
    } = Ho(a, l, { reset: S, focus: g, value: _ }), P = ({ target: Ue }) => {
      _.value = Number(Ue?.value);
    }, R = ({ target: Ue }) => {
      de(Number(Ue?.value));
    }, J = (Ue) => typeof i.value > "u" || !Number(p.value) ? Ue : iy(Number(i.value) + Number(p.value) * ((Number(Ue) - Number(i.value)) / Number(p.value))), de = (Ue) => {
      if (typeof i.value < "u" && Ue < Number(i.value)) {
        _.value = Number(i.value);
        return;
      }
      if (typeof c.value < "u" && Ue > Number(c.value)) {
        _.value = J(Number(c.value));
        return;
      }
      _.value = J(Ue);
    }, ne = f(() => $n(i.value) ? !1 : Number(_.value) <= Number(i.value)), M = f(() => $n(c.value) ? !1 : p.value ? Number(_.value) > Number(c.value) - Number(p.value) : Number(_.value) >= Number(c.value)), j = f(() => a.disabled ? -1 : 0), W = f(() => ne.value || a.disabled || a.readonly), q = f(() => M.value || a.disabled || a.readonly), Z = () => {
      W.value || de(Number(_.value) - Number(p.value));
    }, z = () => {
      q.value || de(Number(_.value) + Number(p.value));
    };
    Sp(Gu("decreaseButtonRef"), {
      onUpdate: Z,
      delay: v
    }), Sp(Gu("increaseButtonRef"), {
      onUpdate: z,
      delay: v
    });
    const { getColor: pe } = Ke(), le = f(() => pe(a.color)), _e = f(() => ({
      class: { "va-counter__icon--inactive": W.value },
      color: le.value,
      icon: a.decreaseIcon,
      plain: !0,
      disabled: W.value,
      readonly: a.readonly,
      tabindex: -1,
      "aria-label": re(a.ariaDecreaseLabel),
      ...!W.value && { onClick: Z }
    })), Re = f(() => ({
      class: { "va-counter__icon--inactive": q.value },
      color: le.value,
      icon: a.increaseIcon,
      plain: !0,
      disabled: q.value,
      readonly: a.readonly,
      tabindex: -1,
      "aria-label": re(a.ariaIncreaseLabel),
      ...!q.value && { onClick: z }
    })), Ve = f(() => (typeof a.margins == "string" ? parseFloat(a.margins) : a.margins) === 0), ee = () => m.value ? a.color : "background-border", be = f(() => ({
      ...It(a, ["color"]),
      round: a.rounded,
      preset: a.flat ? "secondary" : "",
      borderColor: a.flat ? ee() : ""
    })), Te = f(() => ({
      ...be.value,
      icon: a.decreaseIcon,
      disabled: W.value,
      "aria-label": re(a.ariaDecreaseLabel),
      ...!W.value && { onClick: Z }
    })), ie = f(() => ({
      ...be.value,
      icon: a.increaseIcon,
      disabled: q.value,
      "aria-label": re(a.ariaIncreaseLabel),
      ...!q.value && { onClick: z }
    })), { tp: re } = Ct(), Me = la(), Oe = hn(), Xe = f(() => ({
      tabindex: j.value,
      "aria-label": re(a.ariaLabel),
      "aria-valuemin": Number(i.value),
      "aria-valuemax": Number(c.value),
      ...bo(Me, ["class", "style"]),
      ...It(a, ["disabled", "min", "max", "step"]),
      readonly: a.readonly || !a.manualInput
    })), vt = f(() => [
      Me.class,
      { "va-counter--input-square": Ve.value },
      { "va-counter--content-slot": Oe.content && a.buttons }
    ].filter(Boolean)), Wt = f(() => ({
      ...Me.style || {}
    })), Lt = f(() => Ju(a.margins));
    BI(a);
    const qt = DI(l), tt = EI(l), We = _t(wp);
    return o({
      isDirty: D,
      isTouched: V,
      focus: g,
      blur: y,
      decreaseCount: Z,
      increaseCount: z,
      reset: S
    }), (Ue, qe) => (w(), te(d(kn), se({ class: "va-counter" }, { ...d(qt), ...d(We), ...d(O) }, {
      class: vt.value,
      style: Wt.value,
      focused: d(m),
      error: d($),
      "error-messages": d(A),
      onKeydown: [
        Ae($e(z, ["prevent"]), ["up"]),
        Ae($e(z, ["prevent"]), ["right"]),
        Ae($e(Z, ["prevent"]), ["down"]),
        Ae($e(Z, ["prevent"]), ["left"])
      ]
    }), un({
      default: U(() => [
        Ue.$slots.content ? Y("", !0) : (w(), L("input", se({
          key: 0,
          ref_key: "input",
          ref: s,
          class: "va-input__content__input",
          type: "number",
          inputmode: "decimal"
        }, { ...Xe.value, ...d(tt) }, {
          value: _.value,
          "aria-live": Ue.$props.disabled ? "off" : "polite",
          onInput: P,
          onChange: R
        }), null, 16, LI))
      ]),
      _: 2
    }, [
      Ue.$props.buttons ? {
        name: "prepend",
        fn: U((Tt) => [
          E("div", {
            class: "va-counter__prepend-wrapper",
            style: me({ marginRight: Lt.value }),
            onMousedown: qe[0] || (qe[0] = $e(
              //@ts-ignore
              (...Et) => d(g) && d(g)(...Et),
              ["prevent"]
            ))
          }, [
            H(Ue.$slots, "decreaseAction", ye(Ie({ ...Tt, decreaseCount: Z })), () => [
              G(d(lt), se({ class: "va-counter__button-decrease" }, Te.value, { ref: "decreaseButtonRef" }), null, 16)
            ])
          ], 36)
        ]),
        key: "0"
      } : {
        name: "prependInner",
        fn: U((Tt) => [
          E("div", {
            class: "va-counter__prepend-inner",
            onMousedown: qe[1] || (qe[1] = $e(
              //@ts-ignore
              (...Et) => d(g) && d(g)(...Et),
              ["prevent"]
            ))
          }, [
            H(Ue.$slots, "decreaseAction", ye(Ie({ ...Tt, decreaseCount: Z })), () => [
              G(d(lt), se(_e.value, { ref: "decreaseButtonRef" }), null, 16)
            ])
          ], 32)
        ]),
        key: "1"
      },
      Ue.$props.buttons ? {
        name: "append",
        fn: U((Tt) => [
          E("div", {
            class: "va-counter__append-wrapper",
            style: me({ marginLeft: Lt.value }),
            onMousedown: qe[2] || (qe[2] = $e(
              //@ts-ignore
              (...Et) => d(g) && d(g)(...Et),
              ["prevent"]
            ))
          }, [
            H(Ue.$slots, "increaseAction", ye(Ie({ ...Tt, increaseCount: z })), () => [
              G(d(lt), se({ class: "va-counter__button-increase" }, ie.value, { ref: "increaseButtonRef" }), null, 16)
            ])
          ], 36)
        ]),
        key: "2"
      } : {
        name: "appendInner",
        fn: U((Tt) => [
          E("div", {
            class: "va-counter__append-inner",
            onMousedown: qe[3] || (qe[3] = $e(
              //@ts-ignore
              (...Et) => d(g) && d(g)(...Et),
              ["prevent"]
            ))
          }, [
            H(Ue.$slots, "increaseAction", ye(Ie({ ...Tt, increaseCount: z })), () => [
              G(d(lt), se(Re.value, { ref: "increaseButtonRef" }), null, 16)
            ])
          ], 32)
        ]),
        key: "3"
      },
      Ue.$slots.content ? {
        name: "default",
        fn: U((Tt) => [
          E("div", {
            ref_key: "input",
            ref: s,
            tabindex: "0",
            class: "va-counter__content-wrapper"
          }, [
            H(Ue.$slots, "content", ye(Ie({ ...Tt, value: Number(_.value) })))
          ], 512)
        ]),
        key: "4"
      } : void 0
    ]), 1040, ["class", "style", "focused", "error", "error-messages", "onKeydown"]));
  }
}), FI = we(MI), uy = { currentPage: { type: Number } }, cy = () => ({
  items: { type: Array, default: () => [] }
}), dy = { selectable: { type: Boolean, default: !1 } }, fy = { itemsTrackBy: { type: [String, Function], default: "" } }, vy = (e) => {
  const o = e.length === 2 || e.length === 3, t = e.every((l) => ["asc", "desc", null].includes(l)), a = e.length === new Set(e).size;
  return o && t && a;
}, NI = {
  ...cy(),
  columns: { type: Array, default: () => [] },
  sortingOptions: {
    type: Array,
    default: () => ["asc", "desc", null],
    validator: vy
  }
}, py = (e, o, t) => {
  const a = typeof e == "string" ? { key: e } : e, l = a.sortingOptions ? vy(a.sortingOptions) : !0;
  return l || yt(`The "sortingOptions" array in the column with "${a.key}" key is invalid. For this column, the "sortingOptions" value is taken as for the table: ${JSON.stringify(t.sortingOptions)}.`), {
    source: e,
    initialIndex: o,
    key: a.key,
    name: a.name || a.key,
    label: a.label || Av(a.key),
    thTitle: a.thTitle || a.headerTitle || a.label || Av(a.key),
    sortable: a.sortable || !1,
    sortingFn: a.sortingFn,
    displayFormatFn: a.displayFormatFn,
    sortingOptions: l && a.sortingOptions || t.sortingOptions,
    thAlign: a.thAlign || a.alignHead || "left",
    thVerticalAlign: a.thVerticalAlign || a.verticalAlignHead || "middle",
    tdAlign: a.tdAlign || a.align || "left",
    tdVerticalAlign: a.tdVerticalAlign || a.verticalAlign || "middle",
    width: a.width,
    tdClass: a.tdClass || a.classes,
    thClass: a.thClass || a.headerClasses,
    tdStyle: a.tdStyle || a.style,
    thStyle: a.thStyle || a.headerStyle
  };
}, zI = (e) => Object.keys(c$({}, ...e.items)).map((o, t) => py(o, t, e)), HI = (e) => e.columns.map((o, t) => py(o, t, e)), WI = (e) => ({
  columnsComputed: f(() => e.columns.length === 0 ? zI(e) : HI(e))
}), wr = {
  delay: {
    type: Number,
    default: 0,
    validator: (e) => e >= 0
  }
};
function UI(e, o) {
  const t = vn(o, "delay") ?? 0, a = N(!0);
  let l;
  return function(...s) {
    const i = () => e.apply(this, s);
    return d(t) ? (a.value && (a.value = !1, setTimeout(() => a.value = !0, d(t)), l = i()), l) : i();
  };
}
function Pc(e, o) {
  const t = vn(o, "delay") ?? 0;
  if (!d(t))
    return e;
  const a = N(!0), l = N(), s = N(), i = N();
  return Se(e, () => {
    l.value = e.value;
    const c = setTimeout(() => {
      i.value = l.value;
    }, d(t));
    a.value ? (a.value = !1, i.value = e.value, s.value = e.value, clearTimeout(c), setTimeout(() => a.value = !0, d(t))) : i.value = s.value;
  }, { immediate: !0 }), i;
}
const GI = {
  ...wr,
  ...uy,
  perPage: { type: Number }
}, KI = (e, o) => {
  const t = f(() => {
    if (!o.perPage || o.perPage < 0)
      return e.value;
    if (!o.currentPage || o.currentPage < 0)
      return e.value.slice(0, o.perPage);
    const l = o.perPage * (o.currentPage - 1);
    return e.value.slice(l, l + o.perPage);
  });
  return {
    paginatedRows: Pc(t, o)
  };
}, my = (e, o) => typeof o == "function" ? o(e) : $c(e, o) || e, qI = () => ({
  ...cy(),
  ...fy
}), jI = (e, o, t, a) => {
  var l;
  const s = $c(t, a.key);
  return {
    rowIndex: e,
    rowKey: o,
    rowData: t,
    column: a,
    source: s,
    value: ((l = s?.toString) == null ? void 0 : l.call(s)) || ""
  };
}, YI = (e, o, t, a) => {
  const l = my(e, t);
  return {
    initialIndex: o,
    itemKey: l,
    source: e,
    cells: a.map((s) => jI(o, l, e, s)),
    rowData: e
  };
}, XI = (e, o) => {
  const t = N({});
  return {
    rowsComputed: f(() => o.items.map((l, s) => ({
      ...YI(l, s, o.itemsTrackBy, e.value),
      toggleRowDetails: (i) => {
        typeof i == "boolean" ? t.value[s] = i : t.value[s] = !t.value[s];
      },
      isExpandableRowVisible: !!t.value[s]
    })))
  };
}, ZI = {
  ...dy,
  ...fy,
  modelValue: { type: Array },
  selectMode: { type: String, default: "multiple" }
}, JI = (e, o, t) => {
  const a = N([]), l = f({
    get() {
      return o.modelValue === void 0 ? a.value : o.modelValue;
    },
    set(V) {
      o.modelValue === void 0 && (a.value = V), t("update:modelValue", V);
    }
  }), s = N(-1);
  Se(() => o.selectMode, (V, P) => {
    V === "single" && P === "multiple" && (l.value = [], S(-1));
  }), Se(e, () => {
    S(-1);
  }), Se(l, (V, P = []) => {
    t("selectionChange", {
      currentSelectedItems: V,
      previousSelectedItems: P
    });
  }, { immediate: !0 });
  const i = (V) => my(V, o.itemsTrackBy), c = f(() => !e.value.some(({ source: V }) => l.value.includes(i(V)))), p = f(() => e.value.length === 0 ? !1 : e.value.every(({ source: V }) => l.value.includes(i(V)))), v = f(() => !c.value && !p.value);
  function m(V) {
    return l.value.includes(i(V.source));
  }
  function g() {
    l.value = [.../* @__PURE__ */ new Set([
      ...l.value,
      ...e.value.map((V) => i(V.source))
    ])];
  }
  function y() {
    const V = e.value.map((P) => i(P.source));
    l.value = l.value.filter((P) => !V.includes(P));
  }
  function b(V) {
    l.value = [...l.value, i(V.source)];
  }
  function C(V) {
    l.value = [i(V.source)];
  }
  function _(V) {
    const P = l.value.findIndex((R) => R === i(V.source));
    l.value = [
      ...l.value.slice(0, P),
      ...l.value.slice(P + 1)
    ];
  }
  function S(V) {
    if (V === -1)
      s.value = -1;
    else {
      const P = e.value.find((R) => R.initialIndex === V);
      P ? s.value = e.value.indexOf(P) : s.value = -1;
    }
  }
  function $(V) {
    let P, R;
    return m(e.value[s.value]) ? (P = Math.min(s.value, V), R = Math.max(s.value, V)) : (P = Math.min(s.value + 1, V), R = Math.max(s.value - 1, V)), e.value.slice(P, R + 1);
  }
  function A(V) {
    const P = V.map((J) => i(J.source));
    if (c.value) {
      l.value = P;
      return;
    }
    if (P.every((J) => l.value.includes(J))) {
      l.value = l.value.filter((J) => !P.includes(J));
      return;
    }
    l.value = [.../* @__PURE__ */ new Set([
      ...l.value,
      ...P
    ])];
  }
  function x(V) {
    o.selectable && (m(V) ? (_(V), o.selectMode === "single" ? S(-1) : S(V.initialIndex)) : (o.selectMode === "single" ? C(V) : b(V), S(V.initialIndex)));
  }
  function T(V) {
    o.selectable && x(V);
  }
  function O(V) {
    if (!o.selectable)
      return;
    if (o.selectMode === "single" || s.value === -1)
      return x(V);
    const P = e.value.indexOf(V);
    A($(P)), S(-1);
  }
  function D() {
    p.value ? y() : g(), S(-1);
  }
  return {
    ctrlSelectRow: T,
    shiftSelectRows: O,
    toggleRowSelection: x,
    toggleBulkSelection: D,
    isRowSelected: m,
    noRowsSelected: c,
    severalRowsSelected: v,
    allRowsSelected: p
  };
}, Oo = "--va-data-table", gy = (e) => typeof e == "function", yy = {
  ...dy,
  selectedColor: { type: String, default: "primary" },
  allowFooterSorting: { type: Boolean, default: !1 },
  stickyHeader: { type: Boolean, default: !1 },
  stickyFooter: { type: Boolean, default: !1 },
  height: { type: [String, Number] }
}, QI = (e) => gy(e) ? e() : e, eT = (e) => gy(e) ? e() : e, hy = (e) => {
  const { getColor: o, getFocusColor: t, getHoverColor: a } = Ke(), l = f(() => o(e.selectedColor));
  return {
    CSSVariables: f(() => ({
      hoverColor: a(l.value),
      selectedColor: e.selectable ? t(l.value) : void 0,
      tableHeight: e.height ? Ju(e.height) : "var(--va-data-table-height)",
      theadBg: e.stickyHeader ? "var(--va-data-table-thead-background, var(--va-data-table-header-background))" : "var(--va-data-table-thead-background)",
      tfootBg: e.stickyFooter ? "var(--va-data-table-tfoot-background, var(--va-data-table-header-background))" : "var(--va-data-table-tfoot-background)"
    })),
    getHeaderCSSVariables: (v) => ({
      [`${Oo}-width`]: v.width && Ju(v.width),
      [`${Oo}-align`]: v.thAlign,
      [`${Oo}-vertical-align`]: v.thVerticalAlign,
      [`${Oo}-cursor`]: v.sortable ? "pointer" : "default"
    }),
    getCellCSSVariables: (v) => ({
      [`${Oo}-align`]: v.column.tdAlign,
      [`${Oo}-vertical-align`]: v.column.tdVerticalAlign
    }),
    getFooterCSSVariables: (v) => ({
      [`${Oo}-align`]: v.thAlign,
      [`${Oo}-vertical-align`]: v.thVerticalAlign,
      [`${Oo}-cursor`]: e.allowFooterSorting && v.sortable ? "pointer" : "default"
    }),
    getClass: QI,
    getStyle: eT
  };
}, $p = (e) => typeof e == "function", kp = (e) => e !== null && typeof e == "object", tT = {
  rowBind: { type: null },
  cellBind: { type: null }
}, nT = (e) => ({
  getRowBind: (a) => $p(e.rowBind) ? e.rowBind(a.source, a.initialIndex) : kp(e.rowBind) ? e.rowBind : {},
  getCellBind: (a, l) => $p(e.cellBind) ? e.cellBind(a.source, l.source, a.column, l.initialIndex) : kp(e.cellBind) ? e.cellBind : {}
}), oT = {
  ...uy,
  animated: { type: Boolean, default: !0 }
}, aT = (e, o) => {
  const t = N("shuffle"), a = f(() => e.animated ? `table-transition-${t.value}` : ""), l = N(o.value.length), s = f(() => o.value.length !== l.value);
  return Se(o, (i, c) => {
    const p = !!(i.length && c.length);
    t.value = i.length > 50 || s.value && p ? "fade" : "shuffle", l.value = i.length;
  }), Se(() => e.currentPage, () => {
    s.value || (t.value = "shuffle");
  }), a;
}, rT = {
  ...wr,
  filter: { type: String, default: "" },
  filterMethod: { type: Function }
}, lT = (e, o, t) => {
  const a = f(() => !e.value.length || o.filter === "" && !o.filterMethod ? e.value : e.value.filter(
    (s) => s.cells.some((i) => typeof o.filterMethod == "function" ? o.filterMethod(i.source, i) : new RegExp(o.filter, "i").test(i.value))
  )), l = Pc(a, o);
  return Se(l, () => {
    t("filtered", {
      items: l.value.map((s) => s.source),
      itemsIndexes: l.value.map((s) => s.initialIndex)
    });
  }), a.value.length !== e.value.length && t("filtered", {
    items: a.value.map((s) => s.source),
    itemsIndexes: a.value.map((s) => s.initialIndex)
  }), {
    filteredRows: l
  };
}, sT = {
  ...wr,
  sortBy: { type: String },
  columnSorted: { type: Object },
  sortingOrder: { type: [String, null] },
  disableClientSideSorting: { type: Boolean, default: !1 }
}, iT = (e, o, t, a) => {
  const l = N(""), s = f({
    get() {
      return t.sortBy === void 0 ? l.value : t.sortBy;
    },
    set(C) {
      t.sortBy === void 0 && (l.value = C), a("update:sortBy", C);
    }
  }), i = N(null), c = f({
    get() {
      return t.sortingOrder === void 0 ? i.value : t.sortingOrder;
    },
    set(C) {
      t.sortingOrder === void 0 && (i.value = C), a("update:sortingOrder", C);
    }
  }), p = (C, _) => {
    if (typeof C == "string" && typeof _ == "string")
      return C.localeCompare(_);
    if (typeof C == "number" && typeof _ == "number")
      return C - _;
    const S = parseFloat(C), $ = parseFloat(_);
    return !isNaN(S) && !isNaN($) ? S - $ : isNaN(S) ? isNaN($) ? 0 : 1 : -1;
  }, v = f(() => {
    if (t.disableClientSideSorting || o.value.length <= 1)
      return o.value;
    const C = e.value.findIndex(
      ({ name: $, sortable: A }) => s.value === $ && A
    ), _ = e.value[C];
    if (!_)
      return o.value;
    const S = c.value === "desc" ? -1 : 1;
    return [...o.value].sort(($, A) => {
      if (c.value === null)
        return $.initialIndex - A.initialIndex;
      {
        const x = $.cells[C].source, T = A.cells[C].source;
        return S * (typeof _.sortingFn == "function" ? _.sortingFn(x, T) : p(x, T));
      }
    });
  });
  Se(v, () => {
    a("sorted", {
      sortBy: s.value,
      sortingOrder: c.value,
      items: v.value.map((C) => C.source),
      itemsIndexes: v.value.map((C) => C.initialIndex)
    });
  });
  const m = (C, _) => {
    const S = _.findIndex(($) => $ === C);
    return S !== -1 ? _[(S + 1) % _.length] : _[0];
  };
  function g(C) {
    let _;
    C.name === s.value ? _ = m(c.value, C.sortingOptions) : (s.value = C.name, _ = C.sortingOptions[0]), c.value = _, a("columnSorted", { columnName: C.name, value: _, column: C });
  }
  const y = UI(g, t), b = f(() => c.value === "asc" ? "va-sort-asc" : c.value === "desc" ? "va-sort-desc" : "va-unsorted");
  return {
    sortBySync: s,
    sortingOrderSync: c,
    toggleSorting: y,
    sortedRows: v,
    sortingOrderIconName: b
  };
}, uT = (e) => {
  const o = d(e);
  return Mt(o);
}, Cs = () => {
  const e = He();
  return f({
    get() {
      return uT(e);
    },
    set(o) {
      e.value = o;
    }
  });
}, cT = {
  scrollTopMargin: { type: [Number, String], default: 0 },
  scrollBottomMargin: { type: [Number, String], default: 0 }
}, dT = ["scroll:top", "scroll:bottom"], fT = (e, o) => {
  var t;
  const a = (t = Pt()) == null ? void 0 : t.vnode.props, l = a?.["onScroll:top"] !== void 0, s = a?.["onScroll:bottom"] !== void 0, i = Cs(), c = Cs(), p = Cs(), v = et("scrollTopMargin"), m = et("scrollBottomMargin"), g = f(() => !!i.value), y = (_) => {
    _.forEach((S) => {
      S.isIntersecting && (S.target === c.value ? o("scroll:top") : o("scroll:bottom"));
    });
  }, b = f(() => {
    const _ = [];
    return g.value && (c.value && _.push(c.value), p.value && _.push(p.value)), _;
  }), C = f(() => ({
    root: i.value,
    rootMargin: `${v.value ?? 0}px 0px ${m.value ?? 0}px 0px`
  }));
  return ry(y, C, b), {
    scrollContainer: i,
    topTrigger: c,
    bottomTrigger: p,
    doRenderTopTrigger: l,
    doRenderBottomTrigger: s
  };
}, vT = { class: "va-data-table__table-tr" }, pT = {
  key: 0,
  scope: "col",
  class: "va-data-table__table-th va-data-table__table-cell-select"
}, mT = ["title", "onClick", "onKeydown"], gT = { class: "va-data-table__table-th-wrapper" }, yT = { key: 0 }, hT = /* @__PURE__ */ oe({
  name: "VaDataTableThRow",
  __name: "VaDataTableThRow",
  props: {
    ...yy,
    selectMode: { type: String, default: "multiple" },
    allRowsSelected: { type: Boolean, default: !1 },
    severalRowsSelected: { type: Boolean, default: !1 },
    columns: { type: Array, required: !0 },
    isFooter: { type: Boolean, default: !1 },
    sortBySync: { type: String, required: !0 },
    sortingOrderIconName: { type: String, required: !0 },
    sortingOrderSync: { type: String, default: null },
    ariaSelectAllRowsLabel: Fe("$t:selectAllRows"),
    ariaSortColumnByLabel: Fe("$t:sortColumnBy")
  },
  emits: [
    "toggleBulkSelection",
    "toggleSorting"
  ],
  setup(e, { emit: o }) {
    const t = e, a = o, { tp: l } = Ct(), {
      getFooterCSSVariables: s,
      getHeaderCSSVariables: i,
      getClass: c,
      getStyle: p
    } = hy(t), v = (_) => {
      const S = t.sortingOrderSync && t.sortBySync === _.name ? t.sortingOrderSync === "asc" ? "ascending" : "descending" : "none", $ = _.sortable ? l(t.ariaSortColumnByLabel, { name: _.label }) : void 0;
      return {
        "aria-sort": S,
        "aria-label": $
      };
    }, m = (_) => {
      t.isFooter && !t.allowFooterSorting || !_.sortable || a("toggleSorting", _);
    }, g = () => a("toggleBulkSelection"), y = (_) => [
      _.width ? { minWidth: _.width, maxWidth: _.width } : {},
      t.isFooter ? s(_) : i(_),
      p(_.thStyle)
    ], b = f(() => t.isFooter ? "footer" : "header"), C = f(() => t.selectMode === "multiple");
    return (_, S) => (w(), L("tr", vT, [
      _.$props.selectable ? (w(), L("th", pT, [
        C.value ? (w(), te(d(pl), {
          key: 0,
          class: "va-data-table__table-cell-checkbox",
          "model-value": _.$props.severalRowsSelected ? "idl" : _.$props.allRowsSelected,
          "aria-label": d(l)(_.$props.ariaSelectAllRowsLabel),
          "true-value": !0,
          "false-value": !1,
          color: _.$props.selectedColor,
          "indeterminate-value": "idl",
          indeterminate: "",
          "onUpdate:modelValue": g
        }, null, 8, ["model-value", "aria-label", "color"])) : Y("", !0)
      ])) : Y("", !0),
      (w(!0), L(Le, null, je(e.columns, ($) => (w(), L("th", se({
        key: $.name,
        scope: "col",
        class: ["va-data-table__table-th", d(c)($.thClass)],
        title: $.thTitle,
        style: y($)
      }, v($), {
        onClick: $e((A) => m($), ["exact"]),
        onKeydown: Ae($e((A) => m($), ["stop"]), ["enter"])
      }), [
        E("div", gT, [
          `${b.value}(${$.name})` in _.$slots ? (w(), L("span", yT, [
            H(_.$slots, `${b.value}(${$.name})`, ye(Ie({ label: $.label, key: $.key })))
          ])) : H(_.$slots, b.value, ye(se({ key: 1 }, { label: $.label, key: $.key })), () => [
            E("span", null, ke($.label), 1)
          ]),
          $.sortable ? (w(), te(d(ot), {
            key: 2,
            class: Be(["va-data-table__table-th-sorting-icon", { active: e.sortBySync === $.name && e.sortingOrderSync !== null }]),
            size: "small",
            role: $.sortable ? "button" : void 0,
            tabindex: $.sortable ? 0 : -1,
            name: e.sortingOrderIconName,
            onSelectstart: $e(() => {
            }, ["prevent"])
          }, null, 8, ["class", "role", "tabindex", "name"])) : Y("", !0)
        ])
      ], 16, mT))), 128))
    ]));
  }
}), Qu = we(hT), { isParsablePositiveMeasure: bT, parseSizeValue: Vp } = Hg(), xp = (e, o) => {
  const t = bT(e);
  return !t && yt(`[va-virtual-scroller] ${o} should be number or parsable int greater or equal to 0. Provided: ${e}.`), t;
}, _T = {
  horizontal: { type: Boolean, default: !1 },
  itemSize: {
    type: [Number, String],
    default: 0,
    validator: (e) => xp(e, "itemSize")
  },
  wrapperSize: {
    type: [Number, String],
    default: 100,
    validator: (e) => e === "auto" || xp(e, "wrapperSize")
  }
}, CT = (e, o) => {
  const t = He(), a = He(), l = f(() => e.horizontal ? "clientWidth" : "clientHeight"), s = f(() => {
    var b;
    return e.wrapperSize === "auto" ? ((b = a.value) == null ? void 0 : b[l.value]) || 0 : Vp(e.wrapperSize, i);
  }), i = N(16);
  $t("resize", () => {
    i.value = parseFloat(getComputedStyle(document.documentElement).fontSize), v();
  }, !0);
  const p = N(0), v = () => {
    if (!t.value)
      return;
    const b = [], _ = t.value.children.length;
    for (let S = 0; S < _; S++) {
      const $ = t.value.children.item(S);
      $ && b.push($[l.value]);
    }
    p.value = _ ? Math.trunc(b.reduce((S, $) => S + $, 0) / (_ - 1)) : 0;
  }, m = Pt();
  at(() => {
    var b, C;
    t.value || (t.value = (C = (b = m?.parent) == null ? void 0 : b.refs) == null ? void 0 : C.list), v();
  }), Se(o, v), Se(s, v);
  let g = 0;
  const y = f(() => {
    const b = Vp(e.itemSize, i), C = Math.max(b, p.value, 1);
    return Math.abs(g / C * 100 - 100) > 5 || g === 0 ? (g = C, C) : g;
  });
  return { list: t, wrapper: a, itemSize: y, wrapperSize: s };
}, ST = {
  trackBy: {
    type: [String, Number, Function],
    default: ""
  }
}, wT = (e) => ({ getKey: (t, a, l) => {
  if (e.trackBy && t && typeof t == "object" && !tl(e.trackBy)) {
    const s = Array.isArray(t);
    let i;
    if (s && !isNaN(+e.trackBy) && (i = t[+e.trackBy]), s || (i = t[e.trackBy]), i || i === 0)
      return i;
    yt(`${s ? "Index" : "Key"} '${e.trackBy}' wasn't found in provided ${s ? "array" : "object"}: `, t);
  }
  return tl(e.trackBy) ? e.trackBy(t) : l;
} }), $T = /* @__PURE__ */ oe({
  name: "VaVirtualScroller",
  __name: "VaVirtualScroller",
  props: {
    ...ST,
    ..._T,
    items: { type: Array, default: () => [] },
    bench: { type: [Number, String], default: 10, validator: (e) => Number(e) >= 0 },
    disabled: { type: Boolean, default: !1 },
    table: { type: Boolean, default: !1 }
  },
  emits: ["scroll:bottom"],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = N(0), i = et("bench"), c = f(() => a.horizontal ? "scrollLeft" : "scrollTop"), p = () => {
      m.value && (s.value = m.value[c.value]);
    };
    a.disabled || $t("scroll", p, !0);
    const { list: v, wrapper: m, itemSize: g, wrapperSize: y } = CT(a, s), { getKey: b } = wT(a), C = (M, j, W) => b(M, j, W);
    Se(s, (M) => {
      M + y.value === V.value && l("scroll:bottom");
    });
    const _ = f(() => Math.max(0, Math.floor(s.value / g.value) - i.value)), S = f(() => {
      var M;
      return (M = a.items) != null && M.length ? a.disabled ? a.items.length : Math.min(a.items.length - _.value, Math.ceil(y.value / g.value) + i.value * 2) : 0;
    }), $ = f(() => _.value + S.value), A = f(() => {
      var M;
      return (M = a.items) != null && M.length ? a.items.slice(_.value, $.value) : [];
    }), x = f(() => a.horizontal ? "width" : "height"), T = f(() => a.table && a.disabled), O = f(() => ({
      [x.value]: T.value || !y.value ? void 0 : `${y.value}px`
    })), D = ht("va-virtual-scroller", () => ({
      ...It(a, ["horizontal"])
    })), V = f(() => {
      var M;
      return (((M = a.items) == null ? void 0 : M.length) ?? 0) * g.value;
    }), P = f(() => ({
      [x.value]: T.value ? void 0 : `${V.value}px`
    })), R = f(() => _.value * g.value), J = f(() => ({
      transform: `translate${a.horizontal ? "X" : "Y"}(${R.value}px)`
    })), de = f(() => a.horizontal ? "left" : "top");
    return o({
      scrollToAttribute: de,
      virtualScrollTo: (M) => {
        var j;
        !M && M !== 0 || (j = m.value) == null || j.scrollTo({ [de.value]: M * g.value });
      }
    }), (M, j) => (w(), L("div", {
      ref_key: "wrapper",
      ref: m,
      class: Be(["va-virtual-scroller", d(D)]),
      style: me(O.value)
    }, [
      H(M.$slots, "content", ye(Ie({ containerStyleComputed: P.value, listStyleComputed: J.value, renderBuffer: A.value, uniqueKey: C, currentListOffset: R.value })), () => [
        E("div", {
          class: "va-virtual-scroller__container",
          style: me(P.value)
        }, [
          E("div", {
            ref_key: "list",
            ref: v,
            role: "list",
            class: "va-virtual-scroller__list",
            style: me(J.value)
          }, [
            (w(!0), L(Le, null, je(A.value, (W, q) => H(M.$slots, "default", ye(se({
              key: C(W, q)
            }, { item: W, index: _.value + q })))), 128))
          ], 4)
        ], 4)
      ])
    ], 6));
  }
}), Zs = we($T), kT = {
  key: 0,
  class: "va-inner-loading__overlay",
  "aria-hidden": "true"
}, VT = /* @__PURE__ */ oe({
  name: "VaInnerLoading",
  __name: "VaInnerLoading",
  props: {
    ...ul,
    ...Ee,
    color: { type: String },
    icon: { type: String, default: "va-loading" },
    size: { type: [Number, String], default: 30 }
  },
  setup(e) {
    const o = e, { getColor: t } = Ke(), a = f(() => t(o.color)), l = f(() => ({
      "va-inner-loading--active": o.loading
    })), s = f(() => ({
      "aria-busy": o.loading
    }));
    return (i, c) => (w(), L("div", se({
      class: ["va-inner-loading", l.value],
      "aria-live": "polite"
    }, s.value), [
      H(i.$slots, "default"),
      i.$props.loading ? (w(), L("div", kT, [
        H(i.$slots, "loading", {}, () => [
          G(d(ot), {
            class: "va-inner-loading__spinner",
            spin: "counter-clockwise",
            color: a.value,
            size: i.$props.size,
            name: i.$props.icon
          }, null, 8, ["color", "size", "name"])
        ])
      ])) : Y("", !0)
    ], 16));
  }
}), by = we(VT), xT = { key: 0 }, AT = {
  ref: "list",
  class: "va-data-table__table-tbody"
}, IT = {
  key: "showNoDataHtml",
  class: "va-data-table__table-tr"
}, TT = {
  class: "va-data-table__table-td no-data",
  colspan: "99999"
}, BT = ["innerHTML"], PT = {
  key: "showNoDataFilteredHtml",
  class: "va-data-table__table-tr"
}, LT = {
  class: "va-data-table__table-td no-data",
  colspan: "99999"
}, OT = ["innerHTML"], ET = ["onClick", "onDblclick", "onContextmenu"], RT = {
  key: 0,
  class: "va-data-table__grid-column-header"
}, DT = {
  key: 0,
  class: "va-data-table__table-tr"
}, Ap = ct(Zs, ["items", "trackBy", "horizontal", "disabled", "table"]), Ip = ct(Qu), MT = /* @__PURE__ */ oe({
  name: "VaDataTable",
  inheritAttrs: !1,
  __name: "VaDataTable",
  props: {
    ...Ee,
    ...Ap,
    ...oT,
    ...tT,
    ...cT,
    ...sT,
    ...yy,
    ...NI,
    ...rT,
    ...GI,
    ...qI(),
    ...ZI,
    ...wr,
    ...It(Ip, ["ariaSelectAllRowsLabel", "ariaSortColumnByLabel"]),
    hoverable: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    loadingColor: { type: String, default: "primary" },
    noDataHtml: { type: String, default: "No items" },
    noDataFilteredHtml: { type: String, default: "No items match the provided filtering condition" },
    hideDefaultHeader: { type: Boolean, default: !1 },
    footerClone: { type: Boolean, default: !1 },
    striped: { type: Boolean, default: !1 },
    virtualScroller: { type: Boolean, default: !1 },
    virtualTrackBy: { type: [String, Number], default: "initialIndex" },
    grid: { type: Boolean, default: !1 },
    gridColumns: { type: [Number, String], default: 0 },
    wrapperSize: { type: [Number, String], default: "auto" },
    ariaSelectRowLabel: Fe("$t:selectRowByIndex")
  },
  emits: [
    "update:modelValue",
    // `modelValue` is selectedItems
    "update:sortBy",
    "update:sortingOrder",
    "filtered",
    "sorted",
    "selectionChange",
    "row:click",
    "row:dblclick",
    "row:contextmenu",
    "columnSorted",
    ...dT
  ],
  setup(e, { emit: o }) {
    const { tp: t } = Ct(), a = e, l = o, { columnsComputed: s } = WI(a), { rowsComputed: i } = XI(s, a), { filteredRows: c } = lT(i, a, l), {
      sortBySync: p,
      sortingOrderSync: v,
      toggleSorting: m,
      sortedRows: g,
      sortingOrderIconName: y
    } = iT(s, c, a, l), { paginatedRows: b } = KI(g, a), {
      ctrlSelectRow: C,
      shiftSelectRows: _,
      toggleBulkSelection: S,
      isRowSelected: $,
      severalRowsSelected: A,
      allRowsSelected: x,
      toggleRowSelection: T
    } = JI(b, a, l), {
      CSSVariables: O,
      getCellCSSVariables: D,
      getClass: V,
      getStyle: P
    } = hy(a), { getRowBind: R, getCellBind: J } = nT(a), de = aT(a, b), ne = f(() => a.items.length === 0), M = f(() => b.value.length === 0), j = (Oe, Xe, vt) => {
      l(Oe, {
        event: Xe,
        item: vt.source,
        itemIndex: vt.initialIndex,
        row: vt
      }), a.selectable && a.grid && T(vt);
    }, W = f(() => ({
      ...bo(z, ["class", "style"]),
      class: It(a, ["striped", "selectable", "hoverable", "clickable"])
    })), q = _t(Ap), Z = f(() => ({
      ...q.value,
      items: b.value,
      trackBy: a.virtualTrackBy,
      disabled: !a.virtualScroller,
      table: !0
    })), z = la(), pe = f(() => ({
      class: [
        { "va-data-table--sticky": a.stickyHeader || a.stickyFooter },
        { "va-data-table--scroll": !!a.height },
        { "va-data-table--virtual-scroller": ie.value },
        { "va-data-table--grid": a.grid },
        z.class
      ],
      style: [z.style],
      ...Z.value
    })), le = _t(Ip), _e = f(() => ({
      ...le.value,
      columns: s.value,
      sortingOrderIconName: y.value,
      severalRowsSelected: A.value,
      sortingOrderSync: v.value,
      allRowsSelected: x.value,
      sortBySync: p.value
    })), {
      scrollContainer: Re,
      topTrigger: Ve,
      bottomTrigger: ee,
      doRenderTopTrigger: be,
      doRenderBottomTrigger: Te
    } = fT(a, l), ie = f(() => a.virtualScroller && !a.grid), re = f(() => a.gridColumns || "var(--va-data-table-grid-tbody-columns)"), Me = (Oe, Xe) => Xe.displayFormatFn ? Xe.displayFormatFn(Oe.value) : Oe.value;
    return (Oe, Xe) => (w(), te(d(Zs), se({ class: "va-data-table" }, pe.value, {
      ref_key: "scrollContainer",
      ref: Re,
      style: `--va-css-variables-selected-color: ${String(d(O).selectedColor)};--va-css-variables-hover-color: ${String(d(O).hoverColor)};--va-css-variables-table-height: ${String(d(O).tableHeight)};--va-css-variables-thead-bg: ${String(d(O).theadBg)};--va-css-variables-tfoot-bg: ${String(d(O).tfootBg)};--va-grid-columns-count: ${String(re.value)}`
    }), {
      content: U(({
        uniqueKey: vt,
        renderBuffer: Wt,
        currentListOffset: Lt,
        listStyleComputed: qt,
        containerStyleComputed: tt
      }) => [
        G(d(by), {
          "aria-live": "polite",
          style: me(tt),
          loading: e.loading,
          color: e.loadingColor
        }, {
          default: U(() => [
            d(be) ? (w(), L("div", {
              key: 0,
              ref_key: "topTrigger",
              ref: Ve,
              class: "va-data-table__scroll-trigger"
            }, null, 512)) : Y("", !0),
            E("table", se({
              class: "va-data-table__table",
              style: qt
            }, W.value), [
              "colgroup" in Oe.$slots ? (w(), L("colgroup", xT, [
                H(Oe.$slots, "colgroup", ye(Ie(d(s))))
              ])) : Y("", !0),
              E("thead", {
                class: Be(["va-data-table__table-thead", { "va-data-table__table-thead--sticky": Oe.$props.stickyHeader }]),
                style: me({ top: ie.value && Oe.$props.stickyHeader ? `-${Lt}px` : void 0 })
              }, [
                H(Oe.$slots, "headerPrepend"),
                H(Oe.$slots, "header", {}, () => [
                  e.hideDefaultHeader ? Y("", !0) : (w(), te(d(Qu), se({ key: 0 }, _e.value, {
                    onToggleBulkSelection: d(S),
                    onToggleSorting: d(m)
                  }), un({ _: 2 }, [
                    je(Oe.$slots, (We, Ue) => ({
                      name: Ue,
                      fn: U((qe) => [
                        H(Oe.$slots, Ue, ye(Ie(qe)))
                      ])
                    }))
                  ]), 1040, ["onToggleBulkSelection", "onToggleSorting"]))
                ]),
                H(Oe.$slots, "headerAppend")
              ], 6),
              E("tbody", AT, [
                H(Oe.$slots, "bodyPrepend"),
                G(kw, {
                  name: ie.value ? "" : d(de),
                  css: !Oe.$props.virtualScroller,
                  appear: !Oe.$props.virtualScroller
                }, {
                  default: U(() => [
                    ne.value ? (w(), L("tr", IT, [
                      E("td", TT, [
                        H(Oe.$slots, "no-data", {}, () => [
                          E("div", { innerHTML: e.noDataHtml }, null, 8, BT)
                        ])
                      ])
                    ])) : M.value ? (w(), L("tr", PT, [
                      E("td", LT, [
                        H(Oe.$slots, "no-filtered-data", {}, () => [
                          H(Oe.$slots, "no-data", {}, () => [
                            E("div", { innerHTML: e.noDataFilteredHtml }, null, 8, OT)
                          ])
                        ])
                      ])
                    ])) : Y("", !0),
                    (w(!0), L(Le, null, je(Wt, (We, Ue) => (w(), L(Le, {
                      key: `table-row_${vt(We, Ue)}`
                    }, [
                      E("tr", se({
                        class: ["va-data-table__table-tr", [{ selected: d($)(We), "va-data-table__table-tr--expanded": We.isExpandableRowVisible }]]
                      }, d(R)(We), {
                        onClick: (qe) => j("row:click", qe, We),
                        onDblclick: (qe) => j("row:dblclick", qe, We),
                        onContextmenu: (qe) => j("row:contextmenu", qe, We)
                      }), [
                        Oe.selectable && !Oe.$props.grid ? (w(), L("td", {
                          class: "va-data-table__table-td va-data-table__table-cell-select",
                          key: `selectable_${vt(We, Ue)}`,
                          onSelectstart: Xe[0] || (Xe[0] = $e(() => {
                          }, ["prevent"]))
                        }, [
                          G(d(pl), {
                            class: "va-data-table__table-cell-checkbox",
                            "model-value": d($)(We),
                            color: Oe.selectedColor,
                            "aria-label": d(t)(Oe.$props.ariaSelectRowLabel, { index: We.initialIndex }),
                            onClick: [
                              $e((qe) => d(_)(We), ["shift", "exact", "stop"]),
                              $e((qe) => d(C)(We), ["ctrl", "exact", "stop"]),
                              $e((qe) => d(C)(We), ["exact", "stop"])
                            ]
                          }, null, 8, ["model-value", "color", "aria-label", "onClick"])
                        ], 32)) : Y("", !0),
                        (w(!0), L(Le, null, je(We.cells, (qe, Tt) => (w(), L("td", se({
                          key: `table-cell_${qe.column.name + qe.rowIndex}`,
                          class: ["va-data-table__table-td", d(V)(qe.column.tdClass)],
                          style: [
                            qe.column.width ? { minWidth: qe.column.width, maxWidth: qe.column.width } : {},
                            d(D)(qe),
                            d(P)(qe.column.tdStyle)
                          ]
                        }, d(J)(qe, We)), [
                          `cell(${qe.column.name})` in Oe.$slots ? H(Oe.$slots, `cell(${qe.column.name})`, ye(se({ key: 0 }, { ...qe, row: We, isExpanded: We.isExpandableRowVisible }))) : H(Oe.$slots, "cell", ye(se({ key: 1 }, { cell: qe, row: We })), () => [
                            Oe.$props.grid ? (w(), L("span", RT, ke(d(s)[Tt].label), 1)) : Y("", !0),
                            xe(" " + ke(Me(qe, d(s)[Tt])), 1)
                          ])
                        ], 16))), 128))
                      ], 16, ET),
                      We.isExpandableRowVisible ? (w(), L("tr", DT, [
                        (w(), L("td", {
                          class: "va-data-table__table-expanded-content",
                          colspan: "99999",
                          key: vt(We, Ue)
                        }, [
                          H(Oe.$slots, "expandableRow", ye(Ie(We)))
                        ]))
                      ])) : Y("", !0)
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["name", "css", "appear"]),
                H(Oe.$slots, "bodyAppend")
              ], 512),
              ["footer", "footerPrepend", "footerAppend"].some((We) => Oe.$slots[We]) || e.footerClone && !Oe.$props.grid ? (w(), L("tfoot", {
                key: 1,
                class: Be(["va-data-table__table-tfoot", { "va-data-table__table-tfoot--sticky": Oe.$props.stickyFooter }]),
                style: me({ bottom: ie.value && Oe.$props.stickyFooter ? `${Lt}px` : void 0 })
              }, [
                H(Oe.$slots, "footerPrepend"),
                H(Oe.$slots, "footer", {}, () => [
                  e.hideDefaultHeader ? Y("", !0) : (w(), te(d(Qu), se({ key: 0 }, _e.value, {
                    "is-footer": "",
                    onToggleBulkSelection: d(S),
                    onToggleSorting: d(m)
                  }), un({ _: 2 }, [
                    je(Oe.$slots, (We, Ue) => ({
                      name: Ue,
                      fn: U((qe) => [
                        H(Oe.$slots, Ue, ye(Ie(qe)))
                      ])
                    }))
                  ]), 1040, ["onToggleBulkSelection", "onToggleSorting"]))
                ]),
                H(Oe.$slots, "footerAppend")
              ], 6)) : Y("", !0)
            ], 16),
            d(Te) ? (w(), L("div", {
              key: 1,
              ref_key: "bottomTrigger",
              ref: ee,
              class: "va-data-table__scroll-trigger"
            }, null, 512)) : Y("", !0)
          ]),
          _: 2
        }, 1032, ["style", "loading", "color"])
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), FT = we(MT), Tp = (e) => e === null ? !1 : typeof e == "object" && ("start" in e || "end" in e), NT = (e, o) => {
  const t = N(e.value), a = f({
    get: () => t.value,
    set: (s) => {
      if (o.value && (e.value = s), !s) {
        e.value = s;
        return;
      }
      Tp(s) ? s.end !== null && (e.value = s) : e.value = s, t.value = s;
    }
  });
  return Se(e, (s) => {
    t.value = s;
  }), {
    valueComputed: a,
    reset: () => {
      t.value && Tp(t.value) && (t.value = e.value);
    }
  };
}, Yr = (e) => Object.prototype.toString.call(e) === "[object Date]", Bp = (e) => new Date(Date.parse(e)), Pp = (e) => Yr(e) && !isNaN(e.getTime()), zT = (e) => {
  const o = (i) => {
    const c = i.split(e.delimiter);
    return c.length < 2 ? !1 : c.every((p) => {
      const v = (e.parseDate || Bp)(p);
      return Pp(v);
    });
  }, t = (i) => i.includes(e.rangeDelimiter), a = N(!0), l = (i) => {
    const c = i.split("."), p = c?.length === 3 ? c.reverse().join("-") : i, v = (e.parseDate || Bp)(p);
    return a.value = Pp(v), v;
  };
  return {
    parseDateInputValue: (i) => {
      if (a.value = !0, e.parse)
        return e.parse(i, a);
      if (o(i))
        return i.split(e.delimiter).map(l);
      if (t(i)) {
        const [c, p] = i.split(e.rangeDelimiter).map(l);
        return { start: c, end: p };
      }
      return l(i);
    },
    isValid: a
  };
}, HT = (e) => {
  const o = Date.parse(e);
  return !isNaN(o) && !e.includes(" ");
}, WT = (e) => e.endsWith("GMT"), UT = (e) => {
  const o = new Date(e);
  return !isNaN(o.getTime());
}, GT = (e, o) => WT(o) ? e.toUTCString() : HT(o) ? e.toISOString() : UT(o) ? e.toString() : null, Pu = (e) => e === null ? !1 : typeof e == "object" && ("start" in e || "end" in e), Lu = (e) => e === null ? !1 : Array.isArray(e), Lp = (e) => e === null ? !1 : typeof e == "string" || typeof e == "number" || e instanceof Date, KT = (e, o, t, a, l) => {
  const s = (m, g) => {
    if (l)
      return l(g);
    if (typeof m == "string") {
      const y = GT(g, m);
      return y || a(g);
    }
    return typeof m == "number" ? g.getTime() : g;
  }, i = (m) => m instanceof Date ? m : new Date(m), c = f(() => e.value === null || e.value === void 0 ? null : typeof e.value == "string" ? t(e.value) : typeof e.value == "number" ? new Date(e.value) : e.value), p = f({
    get: () => {
      if (c.value === null || c.value === void 0)
        return null;
      if (Lu(c.value))
        return c.value.map(i);
      if (Pu(c.value)) {
        const { start: m, end: g } = c.value;
        return {
          start: m ? i(m) : null,
          end: g ? i(g) : null
        };
      }
      return i(c.value);
    },
    set(m) {
      var g, y;
      if (m == null) {
        e.value = m;
        return;
      }
      if (Lu(m) && (Lu(e.value) || Cu(e.value))) {
        const b = e.value;
        e.value = m.map((C, _) => s(b?.[_] || b?.[0], C));
        return;
      }
      if (Pu(m) && (Pu(e.value) || Cu(e.value))) {
        const { start: b, end: C } = m;
        e.value = {
          start: b ? s((g = e.value) == null ? void 0 : g.start, b) : null,
          // Sync end date only if start date is specified
          end: C ? s((y = e.value) == null ? void 0 : y.start, C) : null
        };
        return;
      }
      if (Lp(m) && (Lp(e.value) || Cu(e.value))) {
        e.value = s(e.value, m);
        return;
      }
      throw new Error("Input date is not the same as date from props");
    }
  });
  return {
    text: f({
      get: () => p.value === null || p.value === void 0 ? "" : a(p.value),
      set: (m) => {
        e.value = t(m);
      }
    }),
    normalized: p
  };
}, qT = (e, o) => e?.toDateString() === o?.toDateString(), _y = (e, o) => e?.getFullYear() === o?.getFullYear(), jT = (e, o) => _y(e, o) && e?.getMonth() === o?.getMonth(), YT = (e) => {
  const o = /* @__PURE__ */ new Date();
  return o.setFullYear(e), o;
}, mr = (e) => e === null ? !1 : typeof e == "object" && ("start" in e || "end" in e), Js = (e) => Yr(e), Qs = (e) => Array.isArray(e), Cy = 0, Sy = 11, XT = (e) => e.month === Sy ? { ...e, year: e.year + 1, month: Cy } : { ...e, month: e.month + 1 }, ZT = (e) => e.month === Cy ? { ...e, year: e.year - 1, month: Sy } : { ...e, month: e.month - 1 }, JT = (e) => Yr(e) ? e : Yr(e?.start) ? e.start : Array.isArray(e) && Yr(e[0]) ? e[0] : /* @__PURE__ */ new Date(), wy = (e, o, t) => {
  const a = JT(e.modelValue), l = {
    type: "day",
    year: a.getFullYear(),
    month: a.getMonth(),
    ...t
  }, s = N(l), i = f({
    get() {
      return { ...s.value, ...e.view };
    },
    set(v) {
      s.value = v, o("update:view", v);
    }
  });
  return {
    syncView: i,
    next: () => {
      i.value.type === "day" ? i.value = XT(i.value) : i.value.type === "month" && (i.value = { ...i.value, year: i.value.year + 1 });
    },
    prev: () => {
      i.value.type === "day" ? i.value = ZT(i.value) : i.value.type === "month" && (i.value = { ...i.value, year: i.value.year - 1 });
    }
  };
}, QT = ["onKeypress"], Lc = /* @__PURE__ */ oe({
  name: "VaDatePickerCell",
  __name: "VaDatePickerCell",
  props: {
    otherMonth: { type: Boolean, default: !1 },
    today: { type: Boolean, default: !1 },
    inRange: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    selected: { type: Boolean, default: !1 },
    weekend: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    focused: { type: Boolean, default: !1 },
    highlightWeekend: { type: Boolean, default: !1 },
    highlightToday: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" }
  },
  emits: ["click"],
  setup(e, { emit: o }) {
    const t = e, a = o, l = () => {
      t.disabled || a("click");
    }, { getColor: s } = Ke(), i = f(() => s(t.color)), { textColorComputed: c } = Kt(i);
    return (p, v) => e.hidden ? (w(), L("div", {
      key: 0,
      class: "va-date-picker-cell va-date-picker-cell_clear",
      style: me(`--va-bg: ${String(i.value)};--va-text-color-computed: ${String(d(c))}`)
    }, null, 4)) : (w(), L("div", {
      key: 1,
      class: Be(["va-date-picker-cell", {
        "va-date-picker-cell_other-month": e.otherMonth,
        "va-date-picker-cell_today": e.highlightToday && e.today,
        "va-date-picker-cell_in-range": e.inRange,
        "va-date-picker-cell_disabled": e.disabled,
        "va-date-picker-cell_highlighted-weekend": e.highlightWeekend && e.weekend,
        "va-date-picker-cell_selected": e.selected,
        "va-date-picker-cell_focused": e.focused,
        "va-date-picker-cell_readonly": e.readonly
      }]),
      onClick: l,
      onKeypress: Ae($e(l, ["prevent", "stop"]), ["space", "enter"]),
      style: me(`--va-bg: ${String(i.value)};--va-text-color-computed: ${String(d(c))}`)
    }, [
      H(p.$slots, "default")
    ], 46, QT));
  }
});
function Op(e) {
  return e === void 0;
}
const Oc = ({
  rowSize: e,
  start: o,
  end: t,
  onSelected: a,
  onFocusIndex: l
}) => {
  const s = N(-1);
  let i = !1;
  return {
    focusedCellIndex: s,
    containerAttributes: {
      onFocus: () => {
        if (i)
          return;
        i = !1;
        const y = l === void 0 ? d(o) || 0 : d(l);
        s.value = y;
      },
      onKeydown: (y) => {
        if (["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Enter", "Space"].includes(y.key) && (y.preventDefault(), y.stopPropagation()), y.key === "Enter" || y.key === "Space") {
          if (a === void 0)
            return;
          a(s.value);
          return;
        }
        y.key === "ArrowRight" && (s.value += 1), y.key === "ArrowLeft" && (s.value -= 1), y.key === "ArrowDown" && (s.value += e), y.key === "ArrowUp" && (s.value -= e), !Op(o) && s.value < d(o) && (s.value = d(o)), !Op(t) && s.value > d(t) - 1 && (s.value = d(t) - 1);
      },
      onBlur: () => {
        i = !1, s.value = -1;
      },
      onMousedown: () => {
        i = !0;
      },
      tabindex: 0
    }
  };
}, eB = (e, o) => {
  if (o === "single")
    return e;
  if (o === "range")
    return { start: e, end: null };
  if (o === "multiple")
    return [e];
  if (o === "auto")
    return e;
  throw new Error("Unknown mode");
}, Ss = (e, o) => {
  throw Error(`Incorrect modelValue for mode ${o}. Got ${JSON.stringify(e)}`);
}, tB = (e) => Js(e) ? "single" : mr(e) ? "range" : Qs(e) ? "multiple" : Ss(e, "auto"), Ep = (e) => e.start && e.end && e.start > e.end ? { start: e.end, end: e.start } : e, nB = (e, o, t) => ({
  updateModelValue: (l) => {
    if (!e.modelValue) {
      o("update:modelValue", eB(l, e.mode));
      return;
    }
    const s = e.mode === "auto" ? tB(e.modelValue) : e.mode;
    if (s === "single") {
      if (!Js(e.modelValue))
        return Ss(e.modelValue, s);
      o("update:modelValue", l);
    } else if (s === "range") {
      if (!mr(e.modelValue))
        return Ss(e.modelValue, s);
      if (e.modelValue.end && t(e.modelValue.end, l))
        return o("update:modelValue", { start: e.modelValue.start, end: null });
      if (e.modelValue.start && t(e.modelValue.start, l))
        return o("update:modelValue", { start: null, end: e.modelValue.end });
      if (e.modelValue.end === null)
        return o("update:modelValue", Ep({ start: e.modelValue.start, end: l }));
      if (e.modelValue.start === null)
        return o("update:modelValue", Ep({ end: e.modelValue.end, start: l }));
      o("update:modelValue", { start: l, end: null });
    } else if (s === "multiple") {
      if (!Qs(e.modelValue))
        return Ss(e.modelValue, s);
      !!e.modelValue.find((c) => t(c, l)) ? o("update:modelValue", e.modelValue.filter((c) => !t(c, l))) : o("update:modelValue", [...e.modelValue, l].sort((c, p) => c.getTime() - p.getTime()));
    }
  }
}), oB = (e) => ({
  month: jT,
  day: qT,
  year: _y
})[e], Ec = (e, o, t, a) => {
  const l = oB(e), s = t.allowedDays || t.allowedMonths || t.allowedYears, i = (C) => s === void 0 ? !1 : !s(C), c = N(-1), p = f(() => o.value[c.value]), { updateModelValue: v } = nB(
    t,
    a,
    l
  ), m = (C) => {
    t.readonly || i(C) || (v(C), a(`click:${e}`, C));
  }, g = (C) => l(/* @__PURE__ */ new Date(), C), y = (C) => t.modelValue ? Js(t.modelValue) ? l(t.modelValue, C) : Qs(t.modelValue) ? !!t.modelValue.find((_) => l(_, C)) : mr(t.modelValue) ? l(t.modelValue.start, C) || l(t.modelValue.end, C) : !1 : !1, b = (C) => {
    if (!t.modelValue || !mr(t.modelValue))
      return !1;
    if (t.modelValue.start && t.modelValue.end)
      return t.modelValue.start < C && t.modelValue.end > C;
    const _ = t.modelValue.start || t.modelValue.end;
    return _ && p.value ? _ < C ? p.value >= C : p.value <= C : !1;
  };
  return Se(p, (C) => {
    a(`hover:${e}`, C);
  }), {
    hoveredIndex: c,
    hoveredValue: p,
    onClick: m,
    isToday: g,
    isSelected: y,
    isInRange: b
  };
}, Ou = (e, o) => new Date(e, o + 1, 0).getDate(), aB = (e, o) => new Date(e, o, 1).getDay(), Eu = (e) => Array.from(Array(e).keys()).map((o) => o + 1), rB = (e, o) => {
  const a = (m) => {
    var g;
    return !o || !((g = o.firstWeekday) != null && g.value) ? m : o.firstWeekday.value.toLowerCase() === "monday" ? m === 0 ? 6 : m - 1 : m;
  }, l = f(() => a(aB(e.value.year, e.value.month))), s = () => {
    if (l.value === 0)
      return [];
    const m = Ou(e.value.year, e.value.month - 1);
    return Eu(m).slice(-l.value).map((y) => new Date(e.value.year, e.value.month - 1, y));
  }, i = () => Eu(Ou(e.value.year, e.value.month)).map((g) => new Date(e.value.year, e.value.month, g)), c = f(() => [...s(), ...i()]), p = f(() => c.value.length);
  return { calendarDates: f(() => {
    const m = c.value, g = 42 - m.length, y = Ou(e.value.year, e.value.month + 1), b = Eu(y);
    return [
      ...m,
      ...b.slice(0, g).map((C) => new Date(e.value.year, e.value.month + 1, C))
    ];
  }), currentMonthStartIndex: l, currentMonthEndIndex: p };
}, lB = ["onMouseenter"], sB = { class: "va-date-picker-cell__day" }, vs = /* @__PURE__ */ oe({
  name: "VaDayPicker",
  __name: "VaDayPicker",
  props: {
    monthNames: { type: Array, required: !0 },
    weekdayNames: { type: Array, required: !0 },
    firstWeekday: { type: String, default: "Sunday" },
    hideWeekDays: { type: Boolean, default: !1 },
    view: { type: Object, default: () => ({ type: "day" }) },
    modelValue: { type: [Date, Array, Object] },
    mode: { type: String, default: "auto" },
    showOtherMonths: { type: Boolean, default: !1 },
    allowedDays: { type: Function },
    weekends: { type: Function },
    highlightWeekend: { type: Boolean, default: !1 },
    highlightToday: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" }
  },
  emits: ["update:modelValue", "hover:day", "click:day"],
  setup(e, { emit: o }) {
    const t = e, a = o, { firstWeekday: l, weekdayNames: s, view: i } = so(t), { calendarDates: c, currentMonthStartIndex: p, currentMonthEndIndex: v } = rB(i, { firstWeekday: l }), m = f(() => l.value.toLowerCase() === "sunday" ? s.value : [...s.value.slice(1), s.value[0]]), {
      hoveredIndex: g,
      onClick: y,
      isToday: b,
      isSelected: C,
      isInRange: _
    } = Ec("day", c, t, a), S = f(() => t.showOtherMonths ? 0 : p.value), $ = f(() => t.showOtherMonths ? c.value.length : v.value), {
      focusedCellIndex: A,
      containerAttributes: x
    } = Oc({
      rowSize: 7,
      start: S,
      end: $,
      onSelected: (V) => y(c.value[V])
    });
    Se(A, (V) => {
      g.value = V;
    }), Se(g, (V) => {
      A.value = V;
    });
    const T = (V) => t.view.month !== V.getMonth(), O = (V) => t.allowedDays === void 0 ? !1 : !t.allowedDays(V), D = (V) => t.weekends === void 0 ? V.getDay() === 6 || V.getDay() === 0 : t.weekends(V);
    return (V, P) => (w(), L("div", se({ class: "va-day-picker" }, d(x)), [
      e.hideWeekDays ? Y("", !0) : (w(!0), L(Le, { key: 0 }, je(m.value, (R) => (w(), L("div", {
        key: R,
        class: "va-day-picker__weekday"
      }, [
        H(V.$slots, "weekday", {}, () => [
          xe(ke(R), 1)
        ])
      ]))), 128)),
      (w(!0), L(Le, null, je(d(c), (R, J) => (w(), L("div", {
        class: "va-day-picker__calendar__day-wrapper",
        key: J,
        onMouseenter: (de) => g.value = J,
        onMouseleave: P[0] || (P[0] = (de) => g.value = -1)
      }, [
        G(Lc, {
          hidden: T(R) && !e.showOtherMonths,
          today: d(b)(R),
          selected: d(C)(R),
          "in-range": d(_)(R),
          "other-month": T(R),
          weekend: D(R),
          disabled: O(R),
          focused: d(g) === J,
          "highlight-today": e.highlightToday,
          "highlight-weekend": e.highlightWeekend,
          readonly: V.$props.readonly,
          color: e.color,
          onClick: (de) => {
            d(y)(R), A.value = J;
          }
        }, {
          default: U(() => [
            E("span", sB, [
              H(V.$slots, "day", ye(Ie({ date: R })), () => [
                xe(ke(R.getDate()), 1)
              ])
            ])
          ]),
          _: 2
        }, 1032, ["hidden", "today", "selected", "in-range", "other-month", "weekend", "disabled", "focused", "highlight-today", "highlight-weekend", "readonly", "color", "onClick"])
      ], 40, lB))), 128))
    ], 16));
  }
}), iB = {
  key: 0,
  class: "va-date-picker-header va-date-picker__header"
}, uB = { class: "va-date-picker__header__text" }, cB = { class: "va-date-picker__header__month" }, ps = /* @__PURE__ */ oe({
  name: "VaDatePickerHeader",
  __name: "VaDatePickerHeader",
  props: {
    monthNames: { type: Array, required: !0 },
    view: { type: Object },
    color: { type: String },
    disabled: { type: Boolean, default: !1 },
    ariaNextPeriodLabel: Fe("$t:nextPeriod"),
    ariaPreviousPeriodLabel: Fe("$t:previousPeriod"),
    ariaSwitchViewLabel: Fe("$t:switchView")
  },
  emits: ["update:view"],
  setup(e, { emit: o }) {
    const t = e, a = o, { syncView: l, prev: s, next: i } = wy(t, a), c = () => {
      l.value.type === "day" ? l.value = { ...l.value, type: "month" } : l.value.type === "month" && (l.value = { ...l.value, type: "year" });
    }, p = (g) => {
      l.value = g;
    }, v = Bg(cg(hc())), { tp: m } = Ct();
    return (g, y) => d(l).type !== "year" ? (w(), L("div", iB, [
      H(g.$slots, "buttonPrev", ye(Ie({ onClick: d(s) })), () => [
        G(d(lt), {
          "va-child": "prevButton",
          disabled: g.$props.disabled,
          icon: "va-arrow-left",
          preset: "plain",
          size: "small",
          color: e.color,
          textColor: d(v),
          "aria-label": d(m)(g.$props.ariaPreviousPeriodLabel),
          round: "",
          onClick: d(s)
        }, null, 8, ["disabled", "color", "textColor", "aria-label", "onClick"])
      ]),
      E("div", uB, [
        H(g.$slots, "header", ye(Ie({ year: d(l).year, month: d(l).month, monthNames: e.monthNames, view: d(l), changeView: p, switchView: c })), () => [
          G(d(lt), {
            "va-child": "middleButton",
            disabled: g.$props.disabled,
            preset: "plain",
            size: "small",
            color: e.color,
            textColor: d(v),
            "aria-label": d(m)(g.$props.ariaSwitchViewLabel),
            onClick: c
          }, {
            default: U(() => [
              H(g.$slots, "year", ye(Ie({ year: d(l).year })), () => [
                xe(ke(d(l).year), 1)
              ]),
              d(l).type === "day" ? H(g.$slots, "month", ye(se({ key: 0 }, { month: d(l).month })), () => [
                E("span", cB, ke(e.monthNames[d(l).month]), 1)
              ]) : Y("", !0)
            ]),
            _: 3
          }, 8, ["disabled", "color", "textColor", "aria-label"])
        ])
      ]),
      H(g.$slots, "buttonNext", ye(Ie({ onClick: d(i) })), () => [
        G(d(lt), {
          "va-child": "nextButton",
          disabled: g.$props.disabled,
          icon: "va-arrow-right",
          preset: "plain",
          size: "small",
          color: e.color,
          textColor: d(v),
          "aria-label": d(m)(g.$props.ariaNextPeriodLabel),
          onClick: d(i),
          round: ""
        }, null, 8, ["disabled", "color", "textColor", "aria-label", "onClick"])
      ])
    ])) : Y("", !0);
  }
}), dB = ["onMouseenter"], ms = /* @__PURE__ */ oe({
  name: "VaMonthPicker",
  __name: "VaMonthPicker",
  props: {
    modelValue: { type: [Date, Array, Object] },
    monthNames: { type: Array, required: !0 },
    view: { type: Object, default: () => ({ type: "month" }) },
    allowedMonths: { type: Function, default: void 0 },
    highlightToday: { type: Boolean, default: !0 },
    mode: { type: String, default: "auto" },
    readonly: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" }
  },
  emits: ["update:modelValue", "hover:month", "click:month"],
  setup(e, { emit: o }) {
    const t = e, a = o, { view: l } = so(t), s = f(() => Array.from(Array(12).keys()).map((C) => new Date(l.value.year, C))), {
      hoveredIndex: i,
      onClick: c,
      isToday: p,
      isSelected: v,
      isInRange: m
    } = Ec("month", s, t, a), g = (C) => t.allowedMonths === void 0 ? !1 : !t.allowedMonths(C), {
      focusedCellIndex: y,
      containerAttributes: b
    } = Oc({
      rowSize: 3,
      start: 0,
      end: s.value.length,
      onSelected: (C) => c(s.value[C])
    });
    return Se(y, (C) => {
      i.value = C;
    }), Se(i, (C) => {
      y.value = C;
    }), (C, _) => (w(), L("div", se({ class: "va-month-picker" }, d(b)), [
      (w(!0), L(Le, null, je(s.value, (S, $) => (w(), L("div", {
        key: $,
        class: "va-month-picker__month-wrapper",
        onMouseenter: (A) => i.value = $,
        onMouseleave: _[0] || (_[0] = (A) => i.value = -1)
      }, [
        G(Lc, {
          "in-range": !!d(m)(S),
          selected: !!d(v)(S),
          disabled: !!g(S),
          today: !!d(p)(S),
          focused: d(i) === $,
          "highlight-today": e.highlightToday,
          readonly: C.$props.readonly,
          color: e.color,
          onClick: (A) => {
            d(c)(S), y.value = $;
          }
        }, {
          default: U(() => [
            H(C.$slots, "month", ye(Ie({ monthIndex: $, month: e.monthNames[$] })), () => [
              xe(ke(e.monthNames[$]), 1)
            ])
          ]),
          _: 2
        }, 1032, ["in-range", "selected", "disabled", "today", "focused", "highlight-today", "readonly", "color", "onClick"])
      ], 40, dB))), 128))
    ], 16));
  }
}), gs = /* @__PURE__ */ oe({
  name: "VaYearPicker",
  __name: "VaYearPicker",
  props: {
    modelValue: { type: [Date, Array, Object] },
    allowedYears: { type: Function, default: void 0 },
    highlightToday: { type: Boolean, default: !0 },
    startYear: { type: [Number, String], default: 1970 },
    mode: { type: String, default: "auto" },
    view: { type: Object, default: () => ({ type: "year" }) },
    endYear: { type: [Number, String], default: () => (/* @__PURE__ */ new Date()).getFullYear() + 50 },
    readonly: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" }
  },
  emits: ["update:modelValue", "hover:year", "click:year"],
  setup(e, { emit: o }) {
    const t = e, a = o, l = He(), { view: s } = so(t), i = (T, O) => {
      const D = O - T + 1;
      return Array.from(Array(D).keys()).map((V) => YT(T + V));
    }, c = et("startYear"), p = et("endYear"), v = f(() => i(c.value, p.value)), m = (T) => {
      if (!l.value)
        return;
      const O = l.value.scrollHeight, D = l.value.offsetHeight, V = O / v.value.length * T, P = O / v.value.length, R = V - l.value.scrollTop;
      R < 0 ? l.value.scrollTo({ top: V }) : R > D && l.value.scrollTo({ top: V - D + P });
    }, g = (T) => {
      if (!l.value)
        return;
      const O = l.value.scrollHeight, D = l.value.offsetHeight, V = O / v.value.length * T;
      l.value.scrollTo({ top: V - D / 2 });
    };
    at(() => {
      const T = v.value.findIndex((O) => O.getFullYear() === s.value.year);
      g(T);
    });
    const {
      hoveredIndex: y,
      onClick: b,
      isToday: C,
      isSelected: _,
      isInRange: S
    } = Ec("year", v, t, a), $ = (T) => t.allowedYears === void 0 ? !1 : !t.allowedYears(T), {
      focusedCellIndex: A,
      containerAttributes: x
    } = Oc({
      rowSize: 1,
      start: 0,
      end: v.value.length,
      onFocusIndex: f(() => v.value.findIndex((T) => T.getFullYear() === s.value.year)),
      onSelected: (T) => b(v.value[T])
    });
    return Se(A, (T) => T !== -1 && m(T)), Se(A, (T) => {
      y.value = T;
    }), Se(y, (T) => {
      A.value = T;
    }), (T, O) => (w(), L("div", se({
      ref_key: "rootNode",
      ref: l,
      class: "va-year-picker"
    }, d(x), {
      onKeydown: O[1] || (O[1] = Ae($e(() => {
      }, ["prevent"]), ["space"]))
    }), [
      (w(!0), L(Le, null, je(v.value, (D, V) => (w(), te(Lc, {
        key: D.toString(),
        "in-range": d(S)(D),
        selected: d(_)(D),
        disabled: $(D),
        today: d(C)(D),
        focused: d(A) === V,
        "highlight-today": e.highlightToday,
        readonly: T.$props.readonly,
        color: e.color,
        onClick: (P) => {
          d(b)(D), A.value = V;
        },
        onMouseenter: (P) => y.value = V,
        onMouseleave: O[0] || (O[0] = (P) => y.value = -1)
      }, {
        default: U(() => [
          xe(ke(D.getFullYear()), 1)
        ]),
        _: 2
      }, 1032, ["in-range", "selected", "disabled", "today", "focused", "highlight-today", "readonly", "color", "onClick", "onMouseenter"]))), 128))
    ], 16));
  }
}), fB = { class: "va-date-picker__picker-wrapper" }, vB = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], pB = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"], Ps = /* @__PURE__ */ oe({
  name: "VaDatePicker",
  __name: "VaDatePicker",
  props: {
    ...Bm({
      prevButton: lt,
      nextButton: lt,
      middleButton: lt
    }),
    ...Ht,
    ...Ee,
    ...ct(ps),
    ...ct(vs),
    ...ct(ms),
    ...ct(gs),
    modelValue: { type: [Date, Array, Object] },
    monthNames: { type: Array, default: vB },
    weekdayNames: { type: Array, default: pB },
    view: { type: Object },
    type: { type: String, default: "day" },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    // Colors
    color: { type: String, default: void 0 },
    weekendsColor: { type: String, default: void 0 }
  },
  emits: [
    ...on,
    ...Va(ps),
    ...Va(gs),
    ...Va(vs),
    ...Va(ms)
  ],
  setup(e, { expose: o, emit: t }) {
    const a = e;
    Pm(a);
    const l = t, s = N(), { valueComputed: i } = xt(a, l), { syncView: c } = wy(a, l, { type: a.type }), p = f(() => ({
      "va-date-picker_without-week-days": a.hideWeekDays,
      "va-date-picker_disabled": a.disabled
    })), v = (D) => {
      a.readonly || a.type === "day" && (i.value = D);
    }, m = (D) => {
      l("click:month", D);
      const V = D.getFullYear(), P = D.getMonth();
      a.type !== "month" && (c.value = { type: "day", year: V, month: P });
    }, g = (D) => {
      a.type === "month" && (i.value = D);
    }, y = (D) => {
      l("click:year", D);
      const V = D.getFullYear();
      a.type !== "year" && (c.value = { type: "month", year: V, month: c.value.month });
    }, b = (D) => {
      a.type === "year" && (i.value = D);
    }, { colorsToCSSVariable: C } = Ke(), _ = f(() => ({
      ...C({
        color: a.color,
        "weekends-color": a.weekendsColor
      }, "va-date-picker")
    })), S = () => {
      var D;
      return (D = s.value) == null ? void 0 : D.$el.focus();
    };
    Se(c, (D, V) => {
      D.type !== V.type && Vt(S);
    });
    const $ = (D) => a.readonly && a.type === D, A = _t(ct(vs)), x = _t(ct(ps)), T = _t(ct(ms)), O = _t(ct(gs));
    return o({
      focus: S,
      focusCurrentPicker: S
    }), (D, V) => (w(), L("div", {
      class: Be(["va-date-picker", p.value]),
      style: me(_.value)
    }, [
      G(ps, se(d(x), {
        view: d(c),
        "onUpdate:view": V[0] || (V[0] = (P) => yn(c) ? c.value = P : null)
      }), un({ _: 2 }, [
        je(D.$slots, (P, R) => ({
          name: R,
          fn: U((J) => [
            H(D.$slots, R, ye(Ie(J)))
          ])
        }))
      ]), 1040, ["view"]),
      E("div", fB, [
        d(c).type === "day" ? (w(), te(vs, se({
          key: 0,
          ref_key: "currentPicker",
          ref: s
        }, d(A), {
          "model-value": d(i),
          view: d(c),
          readonly: D.$props.disabled || $("day"),
          "onUpdate:modelValue": v,
          "onHover:day": V[1] || (V[1] = (P) => D.$emit("hover:day", P)),
          "onClick:day": V[2] || (V[2] = (P) => D.$emit("click:day", P))
        }), un({ _: 2 }, [
          je(D.$slots, (P, R) => ({
            name: R,
            fn: U((J) => [
              H(D.$slots, R, ye(Ie(J)))
            ])
          }))
        ]), 1040, ["model-value", "view", "readonly"])) : Y("", !0),
        d(c).type === "month" ? (w(), te(ms, se({
          key: 1,
          ref_key: "currentPicker",
          ref: s
        }, d(T), {
          view: d(c),
          "model-value": d(i),
          readonly: D.$props.disabled || $("month"),
          "onUpdate:modelValue": g,
          "onHover:month": V[3] || (V[3] = (P) => D.$emit("hover:month", P)),
          "onClick:month": m
        }), un({ _: 2 }, [
          je(D.$slots, (P, R) => ({
            name: R,
            fn: U((J) => [
              H(D.$slots, R, ye(Ie(J)))
            ])
          }))
        ]), 1040, ["view", "model-value", "readonly"])) : Y("", !0),
        d(c).type === "year" ? (w(), te(gs, se({
          key: 2,
          ref_key: "currentPicker",
          ref: s
        }, d(O), {
          view: d(c),
          "model-value": d(i),
          readonly: D.$props.disabled || $("year"),
          "onHover:year": V[4] || (V[4] = (P) => D.$emit("hover:year", P)),
          "onUpdate:modelValue": b,
          "onClick:year": y
        }), un({ _: 2 }, [
          je(D.$slots, (P, R) => ({
            name: R,
            fn: U((J) => [
              H(D.$slots, R, ye(Ie(J)))
            ])
          }))
        ]), 1040, ["view", "model-value", "readonly"])) : Y("", !0)
      ])
    ], 6));
  }
}), $y = ct(
  Dn,
  ["innerAnchorSelector", "stateful", "keyboardNavigation", "modelValue"]
), oo = {
  ...$y,
  modelValue: {},
  /**
   * Close dropdown on value updated.
   * @default null - behavior controlled by component
   */
  closeOnChange: { type: Boolean, default: null },
  isOpen: { type: Boolean, default: void 0 }
}, Rc = ["update:isOpen"], Dc = function(e, o, t = {}) {
  const [a] = Ia("isOpen", e, o, !1), l = f(() => e.closeOnChange !== null ? e.closeOnChange : d(t.defaultCloseOnValueUpdate || !1));
  return Se(() => e.modelValue, () => {
    l.value && (a.value = !1);
  }), {
    dropdownProps: _t($y),
    isOpenSync: a
  };
}, Rp = ct(kn, ["focused", "maxLength", "counterValue"]), Dp = ct(Ps), mB = /* @__PURE__ */ oe({
  name: "VaDateInput",
  __name: "VaDateInput",
  props: {
    ...oo,
    ...ml,
    ...Rp,
    ...Dp,
    ...zo,
    ...Ee,
    clearValue: { type: void 0, default: void 0 },
    modelValue: { type: [Date, Array, Object, String, Number] },
    resetOnClose: { type: Boolean, default: !0 },
    closeOnContentClick: { type: Boolean, default: !1 },
    offset: { ...oo.offset, default: () => [2, 0] },
    format: { type: Function },
    formatDate: { type: Function, default: (e) => e.toLocaleDateString() },
    /** Force model value to string instead of date */
    formatValue: { type: Function },
    parse: { type: Function },
    parseDate: { type: Function },
    delimiter: { type: String, default: ", " },
    rangeDelimiter: { type: String, default: " ~ " },
    manualInput: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" },
    leftIcon: { type: Boolean, default: !1 },
    icon: { type: String, default: "va-calendar" },
    ariaToggleDropdownLabel: Fe("$t:toggleDropdown"),
    ariaResetLabel: Fe("$t:resetDate"),
    ariaSelectedDateLabel: Fe("$t:selectedDate")
  },
  emits: [
    ...zs,
    ...Va(Ps),
    ...Ys,
    ...sa,
    ...on,
    ...Rc,
    "update:text"
  ],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = He(), i = N(), { resetOnClose: c } = so(a), { trapFocusIn: p, freeFocus: v } = Sg(), m = () => {
      const ge = Mt(i.value);
      if (!ge) {
        v();
        return;
      }
      p(ge);
    };
    Se([i], () => {
      m();
    });
    const { valueComputed: g } = xt(a, l), { isOpenSync: y, dropdownProps: b } = Dc(a, l, {
      defaultCloseOnValueUpdate: f(() => !(Array.isArray(_.value) || mr(_.value) && _.value.end === null))
    }), C = f(() => !c.value), {
      valueComputed: _,
      reset: S
    } = NT(g, C);
    Se(y, (ge) => {
      !ge && !C.value && S();
    });
    const { isFocused: $, focus: A, blur: x, onFocus: T, onBlur: O } = Wo(s), D = Tc(i), V = (ge) => ge ? a.formatDate(ge) : "...", { parseDateInputValue: P, isValid: R } = zT(a);
    Se(_, () => {
      R.value = !0;
    });
    const J = (ge) => a.format ? a.format(_.value) : Qs(ge) ? ge.map((Ne) => a.formatDate(Ne)).join(a.delimiter) : Js(ge) ? a.formatDate(ge) : mr(ge) ? V(ge.start) + a.rangeDelimiter + V(ge.end) : (ge == null, ""), {
      text: de,
      normalized: ne
    } = KT(_, vn(a, "mode"), P, J, a.formatValue), M = f(() => R.value ? _.value ? de.value : a.clearValue ? J(a.clearValue) : "" : ""), j = ({ target: ge }) => {
      if (a.disabled)
        return;
      const Ne = ge.value;
      R.value && (_.value = Ne === "" ? a.clearValue : P(Ne));
    }, W = () => Me(() => {
      g.value = a.clearValue, l("clear"), Oe();
    }), q = () => {
      y.value = !1, A();
    }, Z = () => {
      Vt(() => {
        var ge;
        return (ge = i.value) == null ? void 0 : ge.focusCurrentPicker();
      });
    }, z = () => {
      y.value ? Z() : A();
    }, pe = (ge) => y.value ? !1 : a.disabled || a.readonly ? !0 : ge === void 0 ? !1 : a.manualInput && ge?.code !== "Space", le = (ge) => {
      pe(ge instanceof KeyboardEvent ? ge : void 0) || (y.value = !y.value, Vt(z));
    }, _e = () => {
      a.disabled || a.readonly || (y.value = !0, Vt(Z));
    }, {
      isDirty: Re,
      isTouched: Ve,
      computedError: ee,
      computedErrorMessages: be,
      listeners: Te,
      validationAriaAttributes: ie,
      validate: re,
      withoutValidation: Me,
      resetValidation: Oe
    } = Ho(a, l, { reset: W, focus: A, value: _ });
    Se(y, (ge) => {
      ge || (Ve.value = !0);
    });
    const Xe = f(() => !R.value && _.value !== a.clearValue || ee.value), vt = hn(), Wt = f(() => {
      const ge = [
        a.leftIcon && "prependInner",
        (!a.leftIcon || a.clearable) && "icon"
      ];
      return Object.keys(vt).filter((Ne) => !ge.includes(Ne));
    }), {
      canBeCleared: Lt,
      clearIconProps: qt,
      onFocus: tt,
      onBlur: We
    } = Xs(a, _), Ue = f(() => a.disabled ? {} : a.manualInput ? { cursor: "text" } : { cursor: "pointer" }), qe = f(() => a.manualInput ? a.disabled || a.readonly ? -1 : 0 : -1), Tt = f(() => ({
      role: qe.value === 0 ? "button" : "none",
      ariaHidden: qe.value === -1,
      name: a.icon,
      color: "secondary",
      tabindex: qe.value
    })), Et = _t(Rp), Zt = f(() => ({
      ...Et.value,
      focused: $.value || D.value,
      error: Xe.value,
      errorMessages: be.value,
      readonly: a.readonly || !a.manualInput
    })), qn = f(() => ({
      focus: () => {
        a.disabled || (T(), !a.readonly && tt());
      },
      blur: () => {
        a.disabled || (O(), !a.readonly && (We(), Te.onBlur()));
      }
    })), { tp: uo } = Ct(), jn = la(), $o = f(() => ({
      readonly: a.readonly || !a.manualInput,
      disabled: a.disabled,
      tabindex: a.disabled ? -1 : 0,
      placeholder: a.placeholder,
      value: M.value,
      ariaLabel: a.label || uo(a.ariaSelectedDateLabel),
      ariaRequired: a.requiredMark,
      ariaDisabled: a.disabled,
      ariaReadOnly: a.readonly,
      ...ie.value,
      ...bo(jn, ["class", "style"])
    })), Yn = f(() => ({
      ...b.value,
      stateful: !1,
      innerAnchorSelector: ".va-input-wrapper__field",
      trigger: ["click", "right-click", "enter", "space"]
    })), bn = Zt, co = qn, ue = _t(Dp);
    return o({
      valueText: M,
      valueWithoutText: ne,
      valueDate: ne,
      focus: A,
      blur: x,
      reset: W,
      validate: re,
      showDropdown: _e,
      hideAndFocus: q,
      toggleDropdown: le,
      focusDatePicker: Z,
      isDirty: Re,
      isTouched: Ve
    }), (ge, Ne) => (w(), te(d(Dn), se({
      modelValue: d(y),
      "onUpdate:modelValue": Ne[9] || (Ne[9] = (Ye) => yn(y) ? y.value = Ye : null),
      class: ["va-date-input", ge.$attrs.class],
      style: ge.$attrs.style
    }, Yn.value, {
      onOpen: Z,
      role: "none"
    }), {
      anchor: U(() => [
        H(ge.$slots, "input", ye(Ie({ valueText: M.value, inputAttributes: $o.value, inputWrapperProps: d(bn), inputListeners: d(co) })), () => [
          G(d(kn), se({
            class: "va-date-input__anchor",
            style: Ue.value
          }, d(bn), Kn(d(co)), {
            "model-value": M.value,
            onChange: j
          }), un({
            icon: U(() => [
              d(Lt) ? (w(), te(d(ot), se({
                key: 0,
                "aria-label": d(uo)(ge.$props.ariaResetLabel)
              }, { ...Tt.value, ...d(qt) }, {
                onClick: $e(W, ["stop"]),
                onKeydown: [
                  Ae($e(W, ["stop"]), ["enter"]),
                  Ae($e(W, ["stop"]), ["space"])
                ]
              }), null, 16, ["aria-label", "onKeydown"])) : Y("", !0),
              !ge.$props.leftIcon && ge.$props.icon ? (w(), te(d(ot), se({
                key: 1,
                "aria-label": d(uo)(ge.$props.ariaToggleDropdownLabel)
              }, Tt.value), null, 16, ["aria-label"])) : Y("", !0)
            ]),
            _: 2
          }, [
            je(Wt.value, (Ye) => ({
              name: Ye,
              fn: U((Bt) => [
                H(ge.$slots, Ye, ye(Ie(Bt)))
              ])
            })),
            ge.$slots.prependInner || ge.$props.leftIcon ? {
              name: "prependInner",
              fn: U((Ye) => [
                H(ge.$slots, "prependInner", ye(Ie(Ye))),
                ge.$props.leftIcon ? (w(), te(d(ot), se({
                  key: 0,
                  "aria-label": d(uo)(ge.$props.ariaToggleDropdownLabel)
                }, Tt.value), null, 16, ["aria-label"])) : Y("", !0)
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["style", "model-value"])
        ])
      ]),
      default: U(() => [
        G(d(La), {
          class: "va-date-input__dropdown-content",
          onKeydown: Ne[8] || (Ne[8] = Ae((Ye) => d(A)(), ["esc"])),
          role: "dialog"
        }, {
          default: U(() => [
            G(Ps, se({
              ref_key: "datePicker",
              ref: i
            }, d(ue), {
              modelValue: d(ne),
              "onUpdate:modelValue": Ne[0] || (Ne[0] = (Ye) => yn(ne) ? ne.value = Ye : null),
              "onClick:day": Ne[1] || (Ne[1] = (Ye) => ge.$emit("click:day", Ye)),
              "onClick:month": Ne[2] || (Ne[2] = (Ye) => ge.$emit("click:month", Ye)),
              "onClick:year": Ne[3] || (Ne[3] = (Ye) => ge.$emit("click:year", Ye)),
              "onHover:day": Ne[4] || (Ne[4] = (Ye) => ge.$emit("hover:day", Ye)),
              "onHover:month": Ne[5] || (Ne[5] = (Ye) => ge.$emit("hover:month", Ye)),
              "onHover:year": Ne[6] || (Ne[6] = (Ye) => ge.$emit("hover:year", Ye)),
              "onUpdate:view": Ne[7] || (Ne[7] = (Ye) => {
                ge.$nextTick(() => m()), ge.$emit("update:view", Ye);
              })
            }), un({ _: 2 }, [
              je(ge.$slots, (Ye, Bt) => ({
                name: Bt,
                fn: U((cn) => [
                  H(ge.$slots, Bt, ye(Ie(cn)))
                ])
              }))
            ]), 1040, ["modelValue"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue", "class", "style"]));
  }
}), gB = we(mB), yB = we(Ps), hB = ["aria-orientation"], bB = {
  key: 0,
  class: "va-divider__text"
}, ys = "va-divider", _B = /* @__PURE__ */ oe({
  name: "VaDivider",
  __name: "VaDivider",
  props: {
    ...Ee,
    vertical: { type: Boolean, default: !1 },
    dashed: { type: Boolean, default: !1 },
    inset: { type: Boolean, default: !1 },
    orientation: {
      type: String,
      default: "center",
      validator: (e) => ["left", "right", "center"].includes(e)
    },
    color: { type: String, default: "backgroundBorder" }
  },
  setup(e) {
    const o = e, { getColor: t } = Ke(), a = f(() => t(o.color)), l = hn(), s = f(() => !!l.default), i = f(() => ({
      [`${ys}--vertical`]: o.vertical,
      [`${ys}--inset`]: o.inset,
      [`${ys}--${o.orientation}`]: o.orientation && !o.vertical,
      [`${ys}--dashed`]: o.dashed
    }));
    return (c, p) => (w(), L("div", {
      role: "separator",
      class: Be(["va-divider", i.value]),
      "aria-orientation": e.vertical ? "vertical" : "horizontal",
      "aria-hidden": !0,
      style: me(`--va-color-computed: ${String(a.value)}`)
    }, [
      s.value && !e.vertical ? (w(), L("div", bB, [
        H(c.$slots, "default")
      ])) : Y("", !0)
    ], 14, hB));
  }
}), ky = we(_B), gl = Symbol("VaFileUpload"), CB = /* @__PURE__ */ oe({
  name: "VaList",
  __name: "VaList",
  props: {
    ...Ee,
    fit: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, t = f(() => ({ "va-list--fit": o.fit }));
    return (a, l) => (w(), L("div", {
      class: Be(["va-list", t.value]),
      role: "list"
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), SB = /* @__PURE__ */ oe({
  name: "VaListItem",
  __name: "VaListItem",
  props: {
    ...Na,
    ...Ee,
    tag: { type: String, default: "div" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["focus", "click"],
  setup(e, { emit: o }) {
    const t = e, a = f(() => t.disabled ? -1 : 0), l = ht("va-list-item", () => ({
      ...It(t, ["disabled"])
    })), {
      tagComputed: s,
      hrefComputed: i
    } = ia(t);
    return (c, p) => (w(), te(zt(d(s)), {
      class: Be(["va-list-item", d(l)]),
      role: "listitem",
      href: d(i),
      target: c.target,
      to: c.to,
      replace: c.replace,
      exact: c.exact,
      "active-class": c.activeClass,
      "exact-active-class": c.exactActiveClass,
      tabindex: a.value
    }, {
      default: U(() => [
        E("div", {
          class: "va-list-item__inner",
          onClick: p[0] || (p[0] = (v) => c.$emit("click")),
          onFocus: p[1] || (p[1] = (v) => c.$emit("focus"))
        }, [
          H(c.$slots, "default")
        ], 32)
      ]),
      _: 3
    }, 8, ["href", "target", "to", "replace", "exact", "active-class", "exact-active-class", "class", "tabindex"]));
  }
}), wB = /* @__PURE__ */ oe({
  name: "VaListLabel",
  __name: "VaListLabel",
  props: {
    ...Ee,
    color: { type: String, default: "primary" }
  },
  setup(e) {
    const o = e, { getColor: t } = Ke(), a = f(() => ({
      color: t(o.color)
    }));
    return (l, s) => (w(), L("div", {
      class: "va-list-label",
      style: me(a.value)
    }, [
      H(l.$slots, "default")
    ], 4));
  }
}), $B = /* @__PURE__ */ oe({
  name: "VaListItemLabel",
  __name: "VaListItemLabel",
  props: {
    ...Ee,
    caption: { type: Boolean, default: !1 },
    lines: { type: [Number, String], default: 1 }
  },
  setup(e) {
    const o = e, t = et("lines"), a = f(() => ({ "va-list-item-label--caption": o.caption })), l = f(() => ({ "-webkit-line-clamp": t.value }));
    return (s, i) => (w(), L("div", {
      class: Be(["va-list-item-label", a.value]),
      style: me(l.value)
    }, [
      H(s.$slots, "default")
    ], 6));
  }
}), kB = /* @__PURE__ */ oe({
  name: "VaListItemSection",
  __name: "VaListItemSection",
  props: {
    ...Ee,
    icon: { type: Boolean, default: !1 },
    avatar: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, t = f(() => ({
      "va-list-item-section--main": !o.icon && !o.avatar,
      "va-list-item-section--icon": o.icon,
      "va-list-item-section--avatar": o.avatar
    }));
    return (a, l) => (w(), L("div", {
      class: Be(["va-list-item-section", t.value])
    }, [
      H(a.$slots, "default")
    ], 2));
  }
}), VB = /* @__PURE__ */ oe({
  name: "VaListSeparator",
  __name: "VaListSeparator",
  props: {
    ...Ee,
    fit: { type: Boolean, default: !1 },
    spaced: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, t = f(() => ({
      "va-list-separator--offset": !o.fit,
      "va-list-separator--spaced": o.spaced
    }));
    return (a, l) => (w(), L("div", {
      "aria-hidden": "true",
      class: Be(["va-list-separator", t.value])
    }, null, 2));
  }
}), yl = we(SB), xB = we(wB), Vy = we($B), Oa = we(kB), AB = we(VB), Mc = we(CB), IB = {
  key: 0,
  class: "va-progress-bar__info"
}, TB = /* @__PURE__ */ oe({
  name: "VaProgressBar",
  __name: "VaProgressBar",
  props: {
    ...Ee,
    modelValue: { type: [Number, String], default: 0 },
    indeterminate: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" },
    size: {
      type: [Number, String],
      default: "medium"
    },
    buffer: { type: [Number, String], default: 100 },
    rounded: { type: Boolean, default: !0 },
    reverse: { type: Boolean, default: !1 },
    contentInside: { type: Boolean, default: !1 },
    showPercent: { type: Boolean, default: !1 },
    max: { type: [Number, String], default: 100 },
    ariaLabel: Fe("$t:progressState")
  },
  setup(e) {
    const o = e, { getColor: t, getHoverColor: a } = Ke(), l = f(() => t(o.color)), { textColorComputed: s } = Kt(l), i = f(() => typeof o.size == "string" && ["small", "medium", "large"].includes(o.size)), c = () => {
      if (typeof o.size == "number")
        return `${o.size}px`;
      if (!i.value)
        return o.size;
    }, { tp: p } = Ct(), v = f(() => 100 / Number(o.max) * Number(o.modelValue)), m = f(() => ({
      "va-progress-bar--square": !o.rounded,
      [`va-progress-bar--${o.size}`]: i.value
    })), g = f(() => ({
      "--va-progress-bar-color": l.value,
      "--va-progress-bar-background-color": a(l.value)
    })), y = f(() => ({
      height: c()
    })), b = f(() => ({
      width: `${o.indeterminate ? 100 : Ba(Number(o.buffer), 0, 100)}%`,
      color: s.value,
      [o.reverse ? "right" : "left"]: 0
    })), C = f(() => ({
      marginLeft: o.reverse ? "auto" : void 0,
      width: `${Ba(v.value, 0, 100)}%`
    })), _ = f(() => ({
      animationDirection: o.reverse ? "reverse" : "normal"
    })), S = f(() => ({
      role: "progressbar",
      "aria-label": p(o.ariaLabel),
      "aria-valuenow": o.indeterminate ? void 0 : o.modelValue
    }));
    return ($, A) => (w(), L("div", se({
      class: ["va-progress-bar", m.value],
      style: g.value
    }, S.value), [
      $.$props.contentInside ? Y("", !0) : (w(), L("div", IB, [
        H($.$slots, "default", ye(Ie({ value: $.$props.modelValue })), () => [
          $.$props.showPercent ? (w(), L(Le, { key: 0 }, [
            xe(ke($.$props.modelValue) + "% ", 1)
          ], 64)) : Y("", !0)
        ])
      ])),
      E("div", {
        class: "va-progress-bar__wrapper",
        style: me(y.value)
      }, [
        E("div", {
          class: "va-progress-bar__buffer",
          style: me(b.value)
        }, [
          $.$props.contentInside ? H($.$slots, "default", ye(se({ key: 0 }, { value: $.$props.modelValue })), () => [
            $.$props.showPercent ? (w(), L(Le, { key: 0 }, [
              xe(ke($.$props.modelValue) + "% ", 1)
            ], 64)) : Y("", !0)
          ]) : Y("", !0)
        ], 4),
        e.indeterminate ? (w(), L(Le, { key: 0 }, [
          E("div", {
            class: "va-progress-bar__progress--indeterminate-start",
            style: me(_.value)
          }, null, 4),
          E("div", {
            class: "va-progress-bar__progress--indeterminate-end",
            style: me(_.value)
          }, null, 4)
        ], 64)) : (w(), L("div", {
          key: 1,
          class: "va-progress-bar__progress",
          style: me(C.value)
        }, null, 4))
      ], 4)
    ], 16));
  }
}), xy = we(TB), hl = (e, o) => {
  const t = ut(e);
  if (!t)
    throw new Error(o);
  return t;
}, BB = { class: "va-file-upload-undo__text" }, PB = "The VaFileUploadUndo component should be used in the context of VaFileUpload component", LB = /* @__PURE__ */ oe({
  name: "VaFileUploadUndo",
  __name: "VaFileUploadUndo",
  props: {
    vertical: { type: Boolean, default: !1 }
  },
  emits: ["recover"],
  setup(e, { emit: o }) {
    const t = e, a = N(100), {
      undoDuration: l,
      undoButtonText: s,
      deletedFileMessage: i
    } = hl(gl, PB), c = ht("va-file-upload-undo", () => ({
      vertical: t.vertical
    })), p = f(() => `${l.value ?? 0}ms`);
    return at(() => {
      const v = setTimeout(() => {
        a.value = 0, clearTimeout(v);
      }, 0);
    }), (v, m) => (w(), L(Le, null, [
      G(d(xy), {
        "model-value": a.value,
        rounded: !1,
        class: "va-file-upload-undo-progress-bar",
        style: me(`--va-undo-duration-style: ${String(p.value)}`)
      }, null, 8, ["model-value", "style"]),
      E("div", {
        class: Be(["va-file-upload-undo", d(c)]),
        style: me(`--va-undo-duration-style: ${String(p.value)}`)
      }, [
        E("span", BB, ke(d(i)), 1),
        G(d(lt), {
          class: "va-file-upload-undo__button",
          "aria-label": d(s),
          size: "small",
          outline: "",
          onClick: m[0] || (m[0] = (g) => v.$emit("recover"))
        }, {
          default: U(() => [
            xe(ke(d(s)), 1)
          ]),
          _: 1
        }, 8, ["aria-label"])
      ], 6)
    ], 64));
  }
}), Ay = we(LB), OB = { class: "va-file-upload-list-item__content" }, EB = {
  key: 0,
  class: "va-file-upload-list-item__name"
}, RB = { class: "va-file-upload-list-item__size" }, DB = "The VaFileUploadListItem component should be used in the context of VaFileUpload component", MB = /* @__PURE__ */ oe({
  name: "VaFileUploadListItem",
  __name: "VaFileUploadListItem",
  props: {
    file: { type: Object, default: null },
    color: { type: String, default: "success" },
    ariaRemoveFileLabel: Fe("$t:removeFile")
  },
  emits: ["remove"],
  setup(e, { emit: o }) {
    const { tp: t } = Ct(), a = o, {
      undo: l,
      disabled: s,
      undoDuration: i
    } = hl(gl, DB), { onFocus: c, onBlur: p } = Wo(), v = N(!1), m = () => {
      l.value ? (v.value = !0, setTimeout(() => {
        v.value && (a("remove"), v.value = !1);
      }, i.value ?? 0)) : (a("remove"), v.value = !1);
    }, g = () => {
      v.value = !1;
    }, y = ht("va-file-upload-list-item", () => ({
      undo: v.value
    }));
    return (b, C) => (w(), te(d(yl), {
      class: Be(["va-file-upload-list-item", d(y)]),
      tabindex: "-1",
      disabled: d(s),
      "aria-disabled": d(s)
    }, {
      default: U(() => [
        v.value && d(l) ? (w(), te(d(Oa), { key: 0 }, {
          default: U(() => [
            G(d(Ay), { onRecover: g })
          ]),
          _: 1
        })) : (w(), te(d(Oa), { key: 1 }, {
          default: U(() => [
            E("div", OB, [
              e.file && e.file.name ? (w(), L("div", EB, ke(e.file && e.file.name), 1)) : Y("", !0),
              E("div", RB, ke(e.file && e.file.size), 1),
              d(s) ? Y("", !0) : (w(), te(d(lt), {
                key: 1,
                flat: "",
                color: "danger",
                icon: "clear",
                class: "va-file-upload-list-item__delete",
                "aria-label": d(t)(b.$props.ariaRemoveFileLabel),
                onClick: $e(m, ["stop"]),
                onKeydown: [
                  Ae($e(m, ["stop"]), ["enter"]),
                  Ae($e(m, ["stop"]), ["space"])
                ],
                onFocus: d(c),
                onBlur: d(p)
              }, null, 8, ["aria-label", "onKeydown", "onFocus", "onBlur"]))
            ])
          ]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["class", "disabled", "aria-disabled"]));
  }
}), Iy = we(MB), FB = ["src", "alt"], NB = { class: "va-file-upload-gallery-item__overlay" }, zB = ["title"], HB = "The VaFileUploadGalleryItem component should be used in the context of VaFileUpload component", WB = /* @__PURE__ */ oe({
  name: "VaFileUploadGalleryItem",
  __name: "VaFileUploadGalleryItem",
  props: {
    file: { type: Object, default: null },
    color: { type: String, default: "success" },
    ariaRemoveFileLabel: Fe("$t:removeFile")
  },
  emits: ["remove"],
  setup(e, { emit: o }) {
    const t = e, a = o, {
      undo: l,
      disabled: s,
      undoDuration: i
    } = hl(gl, HB), { isFocused: c, onFocus: p, onBlur: v } = Wo(), m = N(""), g = N(!1), y = f(() => ({
      backgroundColor: Da(t.color, 0.7)
    })), b = ht("va-file-upload-gallery-item", () => ({
      notImage: !m.value,
      focused: c.value,
      undo: g.value
    })), C = () => {
      l.value ? (g.value = !0, setTimeout(() => {
        g.value && (a("remove"), g.value = !1);
      }, i.value ?? 0)) : (a("remove"), g.value = !1);
    }, _ = () => {
      g.value = !1;
    }, S = () => {
      if (!(!t.file.name || !t.file.image)) {
        if (t.file.image.url)
          m.value = t.file.image.url;
        else if (t.file.image instanceof File) {
          const x = new FileReader();
          x.readAsDataURL(t.file.image), x.onload = (T) => {
            var O, D;
            ((O = T.target) == null ? void 0 : O.result).includes("image") && (m.value = (D = T.target) == null ? void 0 : D.result);
          };
        }
      }
    };
    at(S), Se(() => t.file, S);
    const { tp: $ } = Ct(), { textColorComputed: A } = Kt(vn(t, "color"));
    return (x, T) => (w(), te(d(yl), {
      class: Be(["va-file-upload-gallery-item", d(b)]),
      tabindex: "-1",
      disabled: d(s),
      "aria-disabled": d(s),
      onFocus: d(p),
      onBlur: d(v)
    }, {
      default: U(() => [
        g.value && d(l) ? (w(), te(d(Oa), { key: 0 }, {
          default: U(() => [
            G(d(Ay), {
              vertical: "",
              onRecover: _
            })
          ]),
          _: 1
        })) : (w(), te(d(Oa), { key: 1 }, {
          default: U(() => [
            m.value ? (w(), L("img", {
              key: 0,
              src: m.value,
              alt: e.file.name || "",
              class: "va-file-upload-gallery-item__image"
            }, null, 8, FB)) : Y("", !0),
            E("div", NB, [
              E("div", {
                class: "va-file-upload-gallery-item__overlay-background",
                style: me(y.value)
              }, null, 4),
              e.file && e.file.name ? (w(), L("div", {
                key: 0,
                class: "va-file-upload-gallery-item__name",
                title: e.file.name,
                style: me({ color: d(A) })
              }, ke(e.file.name), 13, zB)) : Y("", !0),
              d(s) ? Y("", !0) : (w(), te(d(lt), {
                key: 1,
                flat: "",
                color: "danger",
                icon: "va-delete",
                class: "va-file-upload-gallery-item__delete",
                "aria-label": d($)(x.$props.ariaRemoveFileLabel),
                onClick: C,
                onFocus: d(p),
                onBlur: d(v)
              }, null, 8, ["aria-label", "onFocus", "onBlur"]))
            ])
          ]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["class", "disabled", "aria-disabled", "onFocus", "onBlur"]));
  }
}), Ty = we(WB), UB = { class: "va-file-upload-single-item__name" }, GB = "The VaFileUploadSingleItem component should be used in the context of VaFileUpload component", KB = /* @__PURE__ */ oe({
  name: "VaFileUploadSingleItem",
  __name: "VaFileUploadSingleItem",
  props: {
    file: { type: Object, default: null },
    ariaRemoveFileLabel: Fe("$t:removeFile")
  },
  emits: ["remove"],
  setup(e, { emit: o }) {
    const { tp: t } = Ct(), { disabled: a } = hl(gl, GB);
    return (l, s) => (w(), te(d(yl), {
      disabled: d(a),
      "aria-disabled": d(a),
      class: "va-file-upload-single-item",
      tabindex: "-1"
    }, {
      default: U(() => [
        G(d(Oa), { class: "va-file-upload-single-item__content" }, {
          default: U(() => [
            E("div", UB, ke(e.file && e.file.name), 1),
            d(a) ? Y("", !0) : (w(), te(d(lt), {
              key: 0,
              class: "va-file-upload-single-item__button",
              "aria-label": d(t)(l.$props.ariaRemoveFileLabel),
              size: "small",
              color: "danger",
              preset: "secondary",
              onClick: s[0] || (s[0] = (i) => l.$emit("remove"))
            }, {
              default: U(() => [
                xe(" Delete ")
              ]),
              _: 1
            }, 8, ["aria-label"]))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["disabled", "aria-disabled"]));
  }
}), By = we(KB), Mp = ct(Ty), Fp = ct(Iy), Np = ct(By), qB = /* @__PURE__ */ oe({
  name: "VaFileUploadList",
  __name: "VaFileUploadList",
  props: {
    type: { type: String, default: "" },
    files: { type: Array, default: null },
    ...Mp,
    ...Fp,
    ...Np
  },
  emits: ["remove", "removeSingle"],
  setup(e, { emit: o }) {
    const t = e, a = f(() => t.files.map(l)), l = (m) => ({
      name: m.name || m.url || "",
      size: s(m.size),
      date: i(/* @__PURE__ */ new Date()),
      image: m
    }), s = (m) => {
      if (m === 0)
        return "0 Bytes";
      if (!m)
        return "";
      const g = 1024, y = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], b = Math.floor(Math.log(m) / Math.log(g));
      return parseFloat((m / Math.pow(g, b)).toFixed(2)) + " " + y[b];
    }, i = (m = /* @__PURE__ */ new Date()) => m.toLocaleDateString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      month: "short",
      day: "numeric",
      year: "numeric"
    }), c = _t(Mp), p = _t(Fp), v = _t(Np);
    return (m, g) => (w(), te(d(Mc), {
      class: Be(["va-file-upload-list", `va-file-upload-list--${e.type}`]),
      role: e.type !== "single" ? "list" : void 0
    }, {
      default: U(() => [
        e.type === "list" ? (w(!0), L(Le, { key: 0 }, je(a.value, (y, b) => (w(), te(d(Iy), se({
          key: y.name
        }, d(p), {
          file: y,
          role: "listitem",
          onRemove: (C) => m.$emit("remove", b)
        }), null, 16, ["file", "onRemove"]))), 128)) : Y("", !0),
        e.type === "gallery" ? (w(!0), L(Le, { key: 1 }, je(a.value, (y, b) => (w(), te(d(Ty), se(d(c), {
          key: y.name,
          file: y,
          role: "listitem",
          onRemove: (C) => m.$emit("remove", b)
        }), null, 16, ["file", "onRemove"]))), 128)) : Y("", !0),
        e.type === "single" && a.value.length ? (w(), te(d(By), se({ key: 2 }, d(v), {
          file: a.value[a.value.length - 1],
          onRemove: g[0] || (g[0] = (y) => m.$emit("removeSingle"))
        }), null, 16, ["file"])) : Y("", !0)
      ]),
      _: 1
    }, 8, ["role", "class"]));
  }
}), Py = we(qB), jB = { class: "va-file-upload__field" }, YB = {
  key: 0,
  class: "va-file-upload__field__text"
}, XB = ["accept", "multiple", "disabled"], zp = ct(Py), ZB = /* @__PURE__ */ oe({
  name: "VaFileUpload",
  __name: "VaFileUpload",
  props: {
    ...Ee,
    ...zp,
    fileTypes: { type: String, default: "" },
    dropzone: { type: Boolean, default: !1 },
    hideFileList: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" },
    disabled: { type: Boolean, default: !1 },
    undo: { type: Boolean, default: !1 },
    undoDuration: { type: [Number, String], default: 3e3 },
    undoButtonText: Fe("$t:undo"),
    dropZoneText: Fe("$t:dropzone"),
    uploadButtonText: Fe("$t:uploadFile"),
    deletedFileMessage: Fe("$t:fileDeleted"),
    fileIncorrectMessage: Fe("$t:fileTypeIncorrect"),
    modelValue: {
      type: [Object, Array],
      default: () => []
    },
    type: {
      type: String,
      default: "list",
      validator: (e) => ["list", "gallery", "single"].includes(e)
    }
  },
  emits: ["update:modelValue", "file-removed", "file-added"],
  setup(e, { emit: o }) {
    const t = e, a = o, l = He(), s = N(!1), i = N(!1), { getColor: c, shiftHSLAColor: p } = Ke(), v = f(() => c(t.color)), m = f(() => ({
      backgroundColor: t.dropzone ? p(v.value, { a: i.value ? -0.82 : -0.92 }) : "transparent"
    })), g = ht("va-file-upload", () => ({
      dropzone: t.dropzone,
      disabled: t.disabled
    })), y = f({
      get() {
        return Array.isArray(t.modelValue) ? t.modelValue : [t.modelValue];
      },
      set(O) {
        t.type === "single" ? a("update:modelValue", O[0]) : a("update:modelValue", O);
      }
    }), b = (O) => O.filter((D) => {
      const V = D.name || D.url;
      if (!V)
        return !1;
      if (D.url || ["audio/*", "video/*", "image/*"].find((ne) => t.fileTypes.includes(ne)))
        return !0;
      const J = V.substring(V.lastIndexOf(".") + 1).toLowerCase(), de = t.fileTypes.includes(J);
      return de || (s.value = !0), de;
    }), C = (O) => {
      var D, V;
      const P = ((D = O.target) == null ? void 0 : D.files) || ((V = O.dataTransfer) == null ? void 0 : V.files);
      if (!P)
        return;
      const R = t.fileTypes ? b(Array.from(P)) : P;
      y.value = t.type === "single" ? R : [...y.value, ...R], a("file-added", R);
    }, _ = (O) => {
      C(O), l.value && (l.value.value = "");
    }, S = (O) => {
      if (O in y.value) {
        const D = y.value[O];
        y.value = y.value.filter((V, P) => P !== O), a("file-removed", D);
      }
    }, $ = () => {
      if (y.value.length > 0) {
        const O = y.value[0];
        y.value = [], a("file-removed", O);
      }
    }, A = () => {
      l.value && l.value.click();
    };
    at(() => {
      if (Array.isArray(y.value)) {
        const O = b(y.value);
        O.length !== y.value.length && (y.value = O);
      }
    });
    const { tp: x } = Ct();
    Co(gl, {
      undo: vn(t, "undo"),
      disabled: vn(t, "disabled"),
      undoDuration: et("undoDuration"),
      undoButtonText: f(() => x(t.undoButtonText)),
      deletedFileMessage: f(() => x(t.deletedFileMessage))
    });
    const T = _t(zp);
    return (O, D) => (w(), L("div", {
      class: Be(["va-file-upload", d(g)]),
      style: me(m.value)
    }, [
      H(O.$slots, "default", {}, () => [
        E("div", jB, [
          e.dropzone ? (w(), L("div", YB, ke(d(x)(e.dropZoneText)), 1)) : Y("", !0),
          G(d(lt), {
            class: "va-file-upload__field__button",
            disabled: e.disabled,
            "aria-disabled": e.disabled,
            color: v.value,
            style: me({ "pointer-events": i.value ? "none" : void 0 }),
            onChange: _,
            onClick: A
          }, {
            default: U(() => [
              xe(ke(d(x)(e.uploadButtonText)), 1)
            ]),
            _: 1
          }, 8, ["disabled", "aria-disabled", "color", "style"])
        ])
      ]),
      E("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        class: "va-file-upload__field__input",
        tabindex: -1,
        "aria-hidden": "true",
        accept: e.fileTypes,
        multiple: e.type !== "single",
        disabled: e.disabled,
        onChange: _,
        onDragenter: D[0] || (D[0] = (V) => i.value = !0),
        onDragleave: D[1] || (D[1] = (V) => i.value = !1)
      }, null, 40, XB),
      y.value.length && !O.$props.hideFileList ? (w(), te(d(Py), se({ key: 0 }, d(T), {
        type: e.type,
        files: y.value,
        color: v.value,
        onRemove: S,
        onRemoveSingle: $
      }), null, 16, ["type", "files", "color"])) : Y("", !0),
      G(d(yc), {
        modelValue: s.value,
        "onUpdate:modelValue": D[2] || (D[2] = (V) => s.value = V),
        "hide-default-actions": "",
        message: d(x)("$t:fileTypeIncorrect")
      }, null, 8, ["modelValue", "message"])
    ], 6));
  }
}), Ly = we(ZB), JB = (e) => {
  const o = N(/* @__PURE__ */ new Map());
  return {
    // Vue unwrap ref automatically, but types are not for some reason
    immediate: f(() => e.immediate),
    fields: f(() => [...o.value.values()]),
    forceHideErrors: f(() => e.hideErrors),
    forceHideErrorMessages: f(() => e.hideErrorMessages),
    forceHideLoading: f(() => e.hideLoading),
    forceDirty: N(!1),
    registerField: (t, a) => {
      o.value.set(t, a);
    },
    unregisterField: (t) => {
      o.value.delete(t);
    }
  };
}, QB = (e) => {
  const o = JB(e);
  Co(ag, o);
  const { fields: t, forceDirty: a } = o, l = f(() => t.value.map((x) => d(x.name)).filter(Boolean)), s = f(() => t.value.reduce((x, T) => (d(T.name) && (x[d(T.name)] = T), x), {})), i = f(() => t.value.reduce((x, T) => (d(T.name) && (x[d(T.name)] = d(T.value)), x), {})), c = f(() => t.value.every((x) => d(x.isValid))), p = f(() => t.value.some((x) => d(x.isLoading))), v = f(() => t.value.map((x) => d(x.errorMessages)).flat()), m = f(() => t.value.reduce((x, T) => (d(T.name) && (x[d(T.name)] = d(T.errorMessages)), x), {})), g = f({
    get() {
      return t.value.some((x) => d(x.isDirty)) || a.value;
    },
    set(x) {
      a.value = x, t.value.forEach((T) => {
        T.isDirty = x;
      });
    }
  }), y = f({
    get() {
      return t.value.some((x) => x.isTouched);
    },
    set(x) {
      t.value.forEach((T) => {
        T.isTouched = x;
      });
    }
  }), b = () => (g.value = !0, t.value.reduce((x, T) => T.validate() && x, !0)), C = () => (g.value = !0, Promise.all(t.value.map((x) => x.validateAsync())).then((x) => x.every(Boolean))), _ = () => {
    g.value = !1, t.value.forEach((x) => x.reset());
  }, S = () => {
    g.value = !1, t.value.forEach((x) => x.resetValidation());
  }, $ = () => {
    var x;
    (x = t.value[0]) == null || x.focus();
  }, A = () => {
    const x = t.value.find((T) => !T.isValid);
    x?.focus();
  };
  return rg({
    name: vn(e, "name"),
    isValid: c,
    isLoading: p,
    isDirty: g,
    isTouched: y,
    validate: b,
    validateAsync: C,
    reset: _,
    resetValidation: S,
    focus: $,
    errorMessages: v
  }), {
    immediate: f(() => e.immediate),
    isDirty: g,
    isTouched: y,
    formData: i,
    fields: t,
    fieldsNamed: s,
    fieldNames: l,
    isValid: c,
    isLoading: p,
    errorMessages: v,
    errorMessagesNamed: m,
    validate: b,
    validateAsync: C,
    reset: _,
    resetValidation: S,
    focus: $,
    focusInvalidField: A
  };
}, On = { stateful: !0 }, eP = {
  VaInput: On,
  VaSelect: On,
  VaCheckbox: On,
  VaRadio: On,
  VaDatePicker: On,
  VaTimePicker: On,
  VaColorPicker: On,
  VaSlider: On,
  VaSwitch: On,
  VaFileUpload: On,
  VaRating: On,
  VaDateInput: On,
  VaTimeInput: On
}, tP = /* @__PURE__ */ oe({
  name: "VaForm",
  __name: "VaForm",
  props: {
    ...Ee,
    autofocus: { type: Boolean, default: !1 },
    immediate: { type: Boolean, default: !1 },
    tag: { type: String, default: "form" },
    trigger: { type: String, default: "blur" },
    modelValue: { type: Boolean, default: !0 },
    hideErrors: { type: Boolean, default: !1 },
    hideErrorMessages: { type: Boolean, default: !1 },
    hideLoading: { type: Boolean, default: !1 },
    stateful: { type: Boolean, default: !1 },
    name: { type: String, default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = QB(a);
    Se(s.isValid, (V) => {
      l("update:modelValue", V);
    }), Se(() => a.autofocus, (V) => {
      V && s.focus();
    }), at(() => {
      a.autofocus && s.focus();
    }), Se(s.fields, (V) => {
      V.length && a.immediate && s.validate();
    }, { immediate: !0 }), o$(f(() => a.stateful ? eP : {}));
    const {
      immediate: i,
      isDirty: c,
      isTouched: p,
      formData: v,
      fields: m,
      fieldsNamed: g,
      fieldNames: y,
      isValid: b,
      isLoading: C,
      errorMessages: _,
      errorMessagesNamed: S,
      validate: $,
      validateAsync: A,
      reset: x,
      resetValidation: T,
      focus: O,
      focusInvalidField: D
    } = s;
    return o({
      immediate: i,
      isDirty: c,
      formData: v,
      fields: m,
      fieldsNamed: g,
      fieldNames: y,
      isValid: b,
      isTouched: p,
      isLoading: C,
      errorMessages: _,
      errorMessagesNamed: S,
      validate: $,
      validateAsync: A,
      reset: x,
      resetValidation: T,
      focus: O,
      focusInvalidField: D
    }), (V, P) => (w(), te(zt(e.tag), se({
      class: "va-form",
      onSubmit: P[0] || (P[0] = (R) => V.$attrs.action === void 0 && R.preventDefault())
    }, V.$attrs), {
      default: U(() => [
        H(V.$slots, "default", ye(Ie({
          isValid: d(b),
          isDirty: d(c),
          isTouched: d(p),
          isLoading: d(C),
          errorMessages: d(_),
          errorMessagesNamed: d(S),
          formData: d(v),
          fields: d(m),
          fieldsNamed: d(g),
          fieldNames: d(y),
          validate: d($),
          validateAsync: d(A),
          reset: d(x),
          resetValidation: d(T),
          focus: d(O),
          focusInvalidField: d(D)
        })))
      ]),
      _: 3
    }, 16));
  }
}), nP = we(tP), oP = (e = 0) => new Promise((o) => setTimeout(o, e)), aP = (e, o, t) => {
  const a = () => {
    var s;
    (s = o.value) == null || s.addEventListener(
      "scroll",
      t.value,
      { passive: !0 }
    );
  }, l = () => {
    var s;
    (s = o.value) == null || s.removeEventListener(
      "scroll",
      t.value
    );
  };
  return at(() => {
    o.value && (o.value.style.overflowY = "scroll", e.reverse && (o.value.scrollTop = o.value.scrollHeight), a());
  }), Gt(l), {
    addScrollListener: a,
    removeScrollListener: l
  };
}, rP = { class: "va-infinite-scroll__spinner__default" }, lP = /* @__PURE__ */ oe({
  name: "VaInfiniteScroll",
  __name: "VaInfiniteScroll",
  props: {
    ...Ee,
    load: { type: Function, required: !0 },
    offset: { type: [Number, String], default: 500 },
    reverse: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    scrollTarget: { type: [String, Object], default: null },
    debounce: { type: [Number, String], default: 100 },
    tag: { type: String, default: "div" }
  },
  emits: ["onload", "onerror"],
  setup(e, { emit: o }) {
    const t = e, a = o, l = He(), s = He(), i = N(!1), c = N(!1), p = N(!1), v = N(), m = N(0), g = N(0), y = f(() => {
      var M;
      let j;
      return typeof t.scrollTarget == "string" ? j = document.querySelector(t.scrollTarget) : j = t.scrollTarget || ((M = l.value) == null ? void 0 : M.parentElement), j || document.body;
    }), {
      addScrollListener: b,
      removeScrollListener: C
    } = aP(t, y, v), _ = et("offset"), S = et("debounce"), { getColor: $ } = Ke(), A = f(() => c.value ? $("danger") : $("primary")), x = f(() => {
      var M;
      return ((M = s.value) == null ? void 0 : M.offsetHeight) || 0;
    }), T = f(() => _.value + x.value), O = () => {
      t.disabled || (i.value = !1, C());
    }, D = () => {
      t.disabled || b();
    }, V = () => {
      const { scrollTop: M, scrollHeight: j, clientHeight: W } = y.value;
      m.value = j - M;
      const q = M - g.value;
      if (g.value = M, t.disabled || c.value || i.value)
        return;
      if (p.value) {
        p.value = !1;
        return;
      }
      t.reverse && q > 0 || !t.reverse && q < 0 || (t.reverse ? M : j - M - W) > T.value || (i.value = !0, t.load().then(J).catch(ne));
    }, P = (M) => {
      p.value = !0, y.value.scrollTop = M;
    }, R = () => {
      const { scrollTop: M, scrollHeight: j, clientHeight: W } = y.value;
      if (t.reverse) {
        const q = j - M < m.value, Z = M >= x.value;
        if (q && Z)
          return;
        j - m.value > x.value ? P(j - m.value) : P(x.value);
      }
      t.reverse || !(j - M - W >= x.value) && P(j - W - x.value);
    }, J = () => {
      R(), i.value = !1, a("onload");
    }, de = () => {
      R(), p.value = !1, c.value = !1, i.value = !1, a("onerror");
    }, ne = () => {
      O(), c.value = !0, oP(1200).then(de).then(D);
    };
    return Se(() => S.value, (M) => {
      v.value = bc(V, M);
    }, { immediate: !0 }), Se(() => t.disabled, (M) => {
      M ? O() : D();
    }), (M, j) => (w(), te(zt(M.$props.tag), {
      ref_key: "element",
      ref: l,
      role: "feed",
      class: Be(["va-infinite-scroll", { "va-infinite-scroll--reversed": M.$props.reverse }]),
      "aria-busy": i.value
    }, {
      default: U(() => [
        H(M.$slots, "default"),
        E("div", {
          ref_key: "spinnerSlotContainer",
          ref: s,
          class: Be(["va-infinite-scroll__spinner", { "va-infinite-scroll__spinner--invisible": !i.value }])
        }, [
          M.$props.disabled ? Y("", !0) : H(M.$slots, "loading", { key: 0 }, () => [
            E("div", rP, [
              G(d(hr), {
                size: "small",
                thickness: 0.15,
                color: A.value,
                indeterminate: ""
              }, null, 8, ["color"])
            ])
          ])
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "aria-busy"]));
  }
}), sP = we(lP), iP = {
  top: [0, 1, 2],
  left: [0, 3, 6],
  right: [2, 5, 8],
  bottom: [6, 7, 8]
}, uP = ["left", "right", "top", "bottom"], cP = (e) => {
  const o = () => [...uP].sort((a, l) => (e[a].order ?? 0) - (e[l].order ?? 0)), t = (a, l, s) => {
    l.forEach((i) => {
      a[i] = s;
    });
  };
  return f(() => {
    const a = o(), l = [
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      "."
    ].map(() => "content");
    return a.forEach((s) => {
      t(l, iP[s], s);
    }), [
      '"' + l.slice(0, 3).join(" ") + '"',
      '"' + l.slice(3, 6).join(" ") + '"',
      '"' + l.slice(6, 9).join(" ") + '"'
    ].join(" ");
  });
}, dP = {
  top: {
    type: Object,
    default: () => ({ order: 2 })
  },
  right: {
    type: Object,
    default: () => ({ order: 1 })
  },
  left: {
    type: Object,
    default: () => ({ order: 1 })
  },
  bottom: {
    type: Object,
    default: () => ({ order: 2 })
  }
}, Oy = "VaLayout", fP = (e) => {
  const o = N({
    top: null,
    right: null,
    bottom: null,
    left: null
  }), t = f(() => {
    const { top: l, right: s, bottom: i, left: c } = o.value, { top: p, right: v, bottom: m, left: g } = e;
    return {
      top: l && !p.absolute ? l.sizes.height : 0,
      right: s && !v.absolute ? s.sizes.width : 0,
      bottom: i && !m.absolute ? i.sizes.height : 0,
      left: c && !g.absolute ? c.sizes.width : 0
    };
  }), a = f(() => ({
    top: e.top.order || 0,
    right: e.right.order || 0,
    bottom: e.bottom.order || 0,
    left: e.left.order || 0
  }));
  return Co(Oy, {
    items: o,
    paddings: t,
    orders: a
  }), {
    paddings: t,
    orders: a,
    items: o
  };
}, vP = (e, o) => {
  const t = ut(Oy, null);
  if (!t)
    throw new Error("VaLayoutChild must be used inside VaLayout");
  return Vn(() => {
    o.value ? t.items.value[e] = {
      sizes: o.value
    } : t.items.value[e] = null;
  }), Gt(() => {
    t.items.value[e] = null;
  }), {
    paddings: f(() => Object.keys(t.paddings.value).reduce((a, l) => (t.orders.value[l] > t.orders.value[e] && (a[l] = t.paddings.value[l]), a), {}))
  };
}, pP = {}, mP = { class: "va-layout__absolute-area-wrapper" };
function gP(e, o) {
  return w(), L("div", mP, [
    H(e.$slots, "default")
  ]);
}
const yP = /* @__PURE__ */ Wa(pP, [["render", gP]]), hP = /* @__PURE__ */ oe({
  name: "VaLayoutSizeKeeper",
  __name: "VaResizeObserver",
  emits: {
    resize: (e) => !0
  },
  setup(e, { emit: o }) {
    const t = o, a = N();
    let l = null;
    return Se(a, (s) => {
      l && l.disconnect(), l = new ResizeObserver(([i]) => {
        t("resize", i.contentRect);
      }), l.observe(s);
    }), (s, i) => (w(), L("div", {
      class: "va-resize-observer",
      ref_key: "el",
      ref: a
    }, [
      H(s.$slots, "default")
    ], 512));
  }
}), Hp = /* @__PURE__ */ oe({
  name: "VaLayoutFixedWrapper",
  __name: "VaLayoutFixedWrapper",
  props: {
    area: { type: String, required: !0 }
  },
  setup(e) {
    const o = e, t = N(null), a = f(() => o.area === "top" || o.area === "bottom" ? "vertical" : "horizontal"), l = (c) => c ? c + "px" : "0px", s = f(() => a.value === "vertical" ? { width: `calc(100% - ${l(i.value.left)} - ${l(i.value.right)})`, [o.area]: 0 } : { height: `calc(100% - ${l(i.value.top)} - ${l(i.value.bottom)})`, [o.area]: 0 }), { paddings: i } = vP(o.area, t);
    return f(() => Object.keys(i.value).reduce((c, p) => p === o.area ? c : {
      ...c,
      [p]: `${i.value[p]}px`
    }, {})), (c, p) => (w(), L("div", {
      class: "va-layout-fixed-wrapper",
      style: me([[{
        height: t.value && a.value === "vertical" ? t.value.height + "px" : "auto",
        width: t.value && a.value === "horizontal" ? t.value.width + "px" : "auto"
      }], `--va-styles-width: ${String(s.value.width)};--va-styles-height: ${String(s.value.height)}`])
    }, [
      G(hP, {
        class: Be(["va-layout-fixed-wrapper__content", `va-layout-fixed-wrapper__content--${e.area}`]),
        style: me(t.value ? {} : { position: "relative" }),
        onResize: p[0] || (p[0] = (v) => t.value = v)
      }, {
        default: U(() => [
          H(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"])
    ], 4));
  }
}), bP = /* @__PURE__ */ oe({
  name: "VaLayoutArea",
  __name: "VaLayoutArea",
  props: {
    area: { type: String, required: !0 },
    config: { type: Object, required: !0 }
  },
  emits: ["overlay-click"],
  setup(e, { emit: o }) {
    const t = e, a = f(() => t.config.absolute || !1), l = f(() => t.config.fixed || !1), s = f(() => t.config.overlay || !1), i = f(() => (t.config.order || 0) + 1);
    return (c, p) => (w(), L(Le, null, [
      a.value ? (w(), te(yP, {
        key: 0,
        style: me(`--va-props-area: ${String(c.$props.area)};--va-z-index: ${String(i.value)};--va-z-index-1: ${String(i.value - 1)}`)
      }, {
        default: U(() => [
          E("div", {
            class: Be(`va-layout-area va-layout__area va-layout__area--${e.area}`)
          }, [
            l.value ? (w(), te(Hp, {
              key: 0,
              area: e.area
            }, {
              default: U(() => [
                H(c.$slots, "default")
              ]),
              _: 3
            }, 8, ["area"])) : H(c.$slots, "default", { key: 1 })
          ], 2)
        ]),
        _: 3
      }, 8, ["style"])) : (w(), L("div", {
        key: 1,
        class: Be(`va-layout-area va-layout__area va-layout__area--${e.area}`),
        style: me(`--va-props-area: ${String(c.$props.area)};--va-z-index: ${String(i.value)};--va-z-index-1: ${String(i.value - 1)}`)
      }, [
        l.value ? (w(), te(Hp, {
          key: 0,
          area: e.area
        }, {
          default: U(() => [
            H(c.$slots, "default")
          ]),
          _: 3
        }, 8, ["area"])) : H(c.$slots, "default", { key: 1 })
      ], 6)),
      G(ta, {
        style: me(`--va-props-area: ${String(c.$props.area)};--va-z-index: ${String(i.value)};--va-z-index-1: ${String(i.value - 1)}`)
      }, {
        default: U(() => [
          s.value ? (w(), L("div", {
            key: 0,
            class: Be(["va-layout-area__overlay", { "va-layout-area__overlay--fixed": l.value }]),
            onClick: p[0] || (p[0] = (v) => c.$emit("overlay-click"))
          }, null, 2)) : Y("", !0)
        ]),
        _: 1
      }, 8, ["style"])
    ], 64));
  }
}), _P = { class: "va-layout__area va-layout__area--content" }, Wp = [
  "top",
  "left",
  "right",
  "bottom"
], CP = /* @__PURE__ */ oe({
  name: "VaLayout",
  __name: "VaLayout",
  props: {
    ...dP,
    allowBodyScrollOnOverlay: { type: Boolean, default: !1 }
  },
  emits: [
    "top-overlay-click",
    "left-overlay-click",
    "right-overlay-click",
    "bottom-overlay-click"
  ],
  setup(e, { emit: o }) {
    const t = e, { paddings: a } = fP(t), l = f(() => !t.allowBodyScrollOnOverlay && Wp.some((m) => {
      var g;
      return (g = t[m]) == null ? void 0 : g.overlay;
    })), s = Fa();
    Vn(() => {
      var m;
      const g = (m = s.value) == null ? void 0 : m.body;
      g && (l.value ? g.style.overflow = "hidden" : g.style.overflow = "");
    });
    const i = cP(t), c = hn(), p = f(() => [
      c.top ? "min-content" : "0fr",
      "1fr",
      c.bottom ? "min-content" : "0fr"
    ].filter(Boolean).join(" ")), v = f(() => [
      c.left ? "min-content" : "0fr",
      "1fr",
      c.right ? "min-content" : "0fr"
    ].filter(Boolean).join(" "));
    return (m, g) => (w(), L("div", {
      class: "va-layout",
      style: me(`--va-horizontal-template: ${String(v.value)};--va-vertical-template: ${String(p.value)};--va-template-area: ${String(d(i))};--va-paddings-top-px: ${d(a).top + "px"};--va-paddings-bottom-px: ${d(a).bottom + "px"};--va-paddings-left-px: ${d(a).left + "px"};--va-paddings-right-px: ${d(a).right + "px"}`)
    }, [
      (w(), L(Le, null, je(Wp, (y) => G(bP, {
        key: y,
        area: y,
        config: m.$props[y] || {},
        onOverlayClick: (b) => m.$emit(`${y}-overlay-click`)
      }, {
        default: U(() => [
          H(m.$slots, y)
        ]),
        _: 2
      }, 1032, ["area", "config", "onOverlayClick"])), 64)),
      E("div", _P, [
        H(m.$slots, "default", {}, () => [
          H(m.$slots, "content")
        ])
      ])
    ], 4));
  }
}), SP = Fo(CP), wP = { class: "va-navbar__left" }, $P = { class: "va-navbar__center" }, kP = { class: "va-navbar__right" }, VP = /* @__PURE__ */ oe({
  name: "VaNavbar",
  __name: "VaNavbar",
  props: {
    ...Pg,
    ...Ee,
    color: { type: String, default: "background-secondary" },
    textColor: { type: String },
    shape: { type: Boolean, default: !1 },
    shadowed: { type: Boolean, default: !1 },
    bordered: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, { scrollRoot: t, isScrolledDown: a } = Og(o.fixed), { fixedBarStyleComputed: l } = Lg(o, a), { getColor: s, shiftHSLAColor: i } = Ke(), c = f(() => s(o.color)), { textColorComputed: p } = Kt(c), v = f(() => ({
      borderTopColor: i(c.value, { h: -1, s: -11, l: 10 })
    })), m = f(() => ({
      ...l.value,
      backgroundColor: c.value,
      color: p.value,
      fill: p.value
    })), g = ht("va-navbar", () => ({
      shadowed: o.shadowed,
      bordered: o.bordered
    }));
    return (y, b) => (w(), L("header", {
      ref_key: "scrollRoot",
      ref: t,
      class: Be(["va-navbar", d(g)]),
      style: me(m.value)
    }, [
      H(y.$slots, "default", {}, () => [
        E("div", wP, [
          H(y.$slots, "left")
        ]),
        E("div", $P, [
          H(y.$slots, "center")
        ]),
        E("div", kP, [
          H(y.$slots, "right")
        ])
      ]),
      e.shape ? (w(), L("div", {
        key: 0,
        class: "va-navbar__background-shape",
        style: me(v.value)
      }, null, 4)) : Y("", !0)
    ], 6));
  }
}), xP = oe({
  name: "VaNavbarItem",
  props: {}
  // TODO: In web components build props are required (it's a vue bug)
}), AP = { class: "va-navbar__item" };
function IP(e, o, t, a, l, s) {
  return w(), L("div", AP, [
    H(e.$slots, "default")
  ]);
}
const TP = /* @__PURE__ */ Wa(xP, [["render", IP]]), BP = we(VP), PP = we(TP), LP = ["role"], OP = ["value", "checked", "aria-checked", "onChange"], EP = /* @__PURE__ */ E("span", {
  "aria-hidden": "true",
  class: "va-radio__icon"
}, [
  /* @__PURE__ */ E("span", { class: "va-radio__icon__background" }),
  /* @__PURE__ */ E("span", { class: "va-radio__icon__dot" })
], -1), RP = /* @__PURE__ */ oe({
  name: "VaRadio",
  __name: "VaRadio",
  props: {
    ...xc,
    ...Ee,
    ..._r,
    modelValue: {
      type: [Boolean, Array, String, Object, Number],
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    name: { type: String, default: "" },
    label: { type: String, default: void 0 },
    leftLabel: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" },
    option: {
      type: [Object, String, Number],
      default: void 0
    },
    vertical: { type: Boolean, default: !1 }
  },
  emits: js,
  setup(e, { emit: o }) {
    const t = e, a = o, { getColor: l } = Ke(), s = {
      container: He(),
      input: He(),
      label: He()
    }, {
      computedError: i,
      computedErrorMessages: c,
      onBlur: p,
      onFocus: v
    } = Ac(t, a, s), { getText: m, getDisabled: g, getValue: y } = Cr(t), b = (M) => t.options.length > 0 ? m(M) : t.label ?? m(M), C = (M) => g(M) || t.disabled, _ = f(() => t.options.length === 0 && !t.option), S = (M) => _.value ? t.modelValue : t.modelValue === y(M), $ = f(() => _.value ? [{}] : t.option ? [t.option] : t.options), A = (M) => ({
      "va-radio--left-label": t.leftLabel,
      "va-radio--selected": S(M),
      "va-radio--readonly": t.readonly,
      "va-radio--disabled": t.disabled,
      "va-radio--indeterminate": t.indeterminate,
      "va-radio--error": i.value,
      "va-radio--single-option": _.value
    }), x = (M, j) => {
      var W;
      if (_.value) {
        a("update:modelValue", ((W = j?.target) == null ? void 0 : W.checked) || !1);
        return;
      }
      a("update:modelValue", M);
    }, T = f(() => ({
      color: i.value ? l("danger") : ""
    }));
    f(() => {
      const M = {
        background: l(t.color),
        borderColor: l(t.color)
      };
      return i.value && (M.borderColor = l("danger")), M;
    });
    const O = f(() => ({
      backgroundColor: l(t.color)
    })), D = f(() => ({
      borderColor: i.value ? l("danger") : l(t.color),
      backgroundColor: l(t.color)
    })), V = f(() => ({ borderColor: i.value ? l("danger") : l(t.color) })), P = So(), R = f(() => t.name || P), J = (M) => {
      const j = C(M);
      return {
        name: R.value,
        disabled: j,
        readonly: t.readonly,
        tabindex: j ? -1 : 0
      };
    }, de = f(() => t.vertical ? "column" : "row"), ne = f(() => {
      var M;
      return ((M = t.options) == null ? void 0 : M.length) > 0 ? "radiogroup" : "";
    });
    return (M, j) => (w(), te(d(Ds), {
      disabled: M.disabled,
      success: M.success,
      messages: M.messages,
      error: d(i),
      "error-messages": d(c),
      "error-count": M.errorCount,
      onBlur: d(p),
      style: me(`--va-flex-direction: ${String(de.value)};--va-label-style-color: ${String(T.value.color)};--va-icon-computed-styles-border-color: ${String(V.value.borderColor)};--va-icon-dot-computed-styles-border-color: ${String(D.value.borderColor)};--va-icon-dot-computed-styles-background-color: ${String(D.value.backgroundColor)};--va-icon-background-computed-styles-background-color: ${String(O.value.backgroundColor)}`)
    }, {
      default: U(({ ariaAttributes: W }) => [
        E("div", se({
          ref: "container",
          class: "va-radio",
          role: ne.value
        }, W), [
          (w(!0), L(Le, null, je($.value, (q, Z) => (w(), L("label", {
            key: Z,
            class: Be([A(q), "va-radio__square"])
          }, [
            E("input", se({
              ref_for: !0,
              ref: "input",
              class: "va-radio__input",
              type: "radio",
              role: "radio",
              value: S(q),
              checked: S(q),
              "aria-checked": S(q)
            }, { ...J(q), ...W }, {
              onChange: (z) => x(d(y)(q), z),
              onFocus: j[0] || (j[0] = //@ts-ignore
              (...z) => d(v) && d(v)(...z)),
              onBlur: j[1] || (j[1] = //@ts-ignore
              (...z) => d(p) && d(p)(...z))
            }), null, 16, OP),
            H(M.$slots, "icon", ye(Ie({
              value: S(q),
              text: b(q),
              disabled: C(q),
              index: Z
            })), () => [
              EP
            ]),
            b(q) || M.$slots.default ? (w(), L("div", {
              key: 0,
              ref_for: !0,
              ref: "label",
              class: "va-radio__text"
            }, [
              H(M.$slots, "default", ye(Ie({
                value: S(q),
                text: b(q),
                disabled: C(q),
                index: Z
              })), () => [
                xe(ke(b(q)), 1)
              ])
            ], 512)) : Y("", !0)
          ], 2))), 128))
        ], 16, LP)
      ]),
      _: 3
    }, 8, ["disabled", "success", "messages", "error", "error-messages", "error-count", "onBlur", "style"]));
  }
}), Ey = we(RP), DP = { class: "va-switch__inner" }, MP = { class: "va-switch__checker-wrapper" }, FP = { class: "va-switch__checker" }, NP = { class: "va-switch__checker-circle" }, zP = ["id"], HP = /* @__PURE__ */ oe({
  name: "VaSwitch",
  __name: "VaSwitch",
  props: {
    ...xc,
    ...Ee,
    id: { type: String, default: "" },
    name: { type: String, default: "" },
    modelValue: {
      type: [Number, Boolean, Array, String, Object],
      default: !1
    },
    trueLabel: { type: String, default: null },
    falseLabel: { type: String, default: null },
    trueInnerLabel: { type: String, default: null },
    falseInnerLabel: { type: String, default: null },
    ariaLabel: Fe("$t:switch"),
    color: { type: String, default: "primary" },
    offColor: { type: String, default: "background-element" },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["medium", "small", "large"].includes(e)
    }
  },
  emits: [
    ...js,
    "focus",
    "blur",
    "update:modelValue"
  ],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = {
      container: He(),
      input: He(),
      label: He()
    }, { getColor: i } = Ke(), { hasKeyboardFocus: c, keyboardFocusListeners: p } = Sr(), {
      isChecked: v,
      computedError: m,
      isIndeterminate: g,
      computedErrorMessages: y,
      validationAriaAttributes: b,
      toggleSelection: C,
      onBlur: _,
      onFocus: S,
      reset: $,
      focus: A,
      isDirty: x,
      isTouched: T,
      isLoading: O,
      isError: D
    } = Ac(a, l, s), V = f(() => i(v.value ? a.color : a.offColor)), { textColorComputed: P } = Kt(V), R = f(() => a.trueInnerLabel && v.value ? a.trueInnerLabel : a.falseInnerLabel && !v.value ? a.falseInnerLabel : ""), J = f(() => a.trueLabel && v.value ? a.trueLabel : a.falseLabel && !v.value ? a.falseLabel : a.label), de = ht("va-switch", () => ({
      ...It(a, ["readonly", "disabled", "leftLabel"]),
      checked: v.value,
      indeterminate: g.value,
      small: a.size === "small",
      large: a.size === "large",
      error: m.value,
      keyboardFocus: c.value
    })), ne = f(() => ({
      lineHeight: y.value.length ? 1 : 0
    })), M = f(() => ({ small: "15px", medium: "20px", large: "25px" })[a.size]), j = f(() => ({
      borderColor: m.value ? i("danger") : "",
      backgroundColor: V.value
    })), W = f(() => ({
      color: m.value ? i("danger") : ""
    })), q = f(() => ({
      color: P.value,
      "text-align": v.value ? "left" : "right"
    })), Z = hn(), z = So(), pe = f(() => `aria-label-id-${z}`), le = f(() => ({
      id: a.id || void 0,
      name: a.name || void 0,
      disabled: a.disabled,
      readonly: a.readonly,
      "aria-disabled": a.disabled,
      "aria-readonly": a.readonly,
      "aria-checked": !!a.modelValue,
      "aria-label": Z.default ? void 0 : a.ariaLabel,
      "aria-labelledby": J.value || Z.default ? pe.value : void 0,
      tabindex: a.disabled ? -1 : 0,
      checked: v.value,
      ...b.value
    })), _e = () => {
      var Ve;
      (Ve = s.input.value) == null || Ve.click();
    }, Re = s.input;
    return o({
      focus: A,
      reset: $,
      isDirty: x,
      isTouched: T,
      isLoading: O,
      isError: D
    }), (Ve, ee) => (w(), te(d(Ds), {
      class: Be(["va-switch", d(de)]),
      style: me(ne.value),
      disabled: Ve.$props.disabled,
      success: Ve.$props.success,
      messages: Ve.$props.messages,
      error: d(m),
      "error-messages": d(y),
      "error-count": Ve.$props.errorCount
    }, {
      default: U(() => [
        E("div", {
          ref: "container",
          class: "va-switch__container",
          tabindex: "-1",
          onBlur: ee[5] || (ee[5] = //@ts-ignore
          (...be) => d(_) && d(_)(...be)),
          onClick: ee[6] || (ee[6] = //@ts-ignore
          (...be) => d(C) && d(C)(...be))
        }, [
          E("div", DP, [
            E("input", se({
              ref_key: "input",
              ref: Re,
              type: "checkbox",
              class: "va-switch__input",
              role: "switch"
            }, le.value, Kn(d(p), !0), {
              onFocus: ee[0] || (ee[0] = //@ts-ignore
              (...be) => d(S) && d(S)(...be)),
              onBlur: ee[1] || (ee[1] = //@ts-ignore
              (...be) => d(_) && d(_)(...be)),
              onKeypress: Ae(_e, ["enter"])
            }), null, 16),
            E("div", {
              class: "va-switch__track",
              "aria-hidden": "true",
              style: me(j.value)
            }, [
              R.value || Ve.$slots.innerLabel ? (w(), L("div", {
                key: 0,
                class: "va-switch__track-label",
                style: me(q.value)
              }, [
                H(Ve.$slots, "innerLabel", {}, () => [
                  xe(ke(R.value), 1)
                ])
              ], 4)) : Y("", !0),
              E("div", MP, [
                E("div", FP, [
                  H(Ve.$slots, "checker", ye(Ie({ value: d(v) })), () => [
                    E("div", NP, [
                      Ve.$props.loading ? (w(), te(d(hr), {
                        key: 0,
                        indeterminate: "",
                        size: M.value,
                        color: j.value.backgroundColor
                      }, null, 8, ["size", "color"])) : Y("", !0)
                    ])
                  ])
                ])
              ])
            ], 4)
          ]),
          J.value || Ve.$slots.default ? (w(), L("div", {
            key: 0,
            ref: "label",
            class: "va-switch__label",
            style: me(W.value),
            id: pe.value,
            onBlur: ee[2] || (ee[2] = //@ts-ignore
            (...be) => d(_) && d(_)(...be)),
            onClick: ee[3] || (ee[3] = //@ts-ignore
            (...be) => d(C) && d(C)(...be)),
            onKeydown: ee[4] || (ee[4] = Ae($e(
              //@ts-ignore
              (...be) => d(C) && d(C)(...be),
              ["stop"]
            ), ["enter"]))
          }, [
            H(Ve.$slots, "default", {}, () => [
              xe(ke(J.value), 1)
            ])
          ], 44, zP)) : Y("", !0)
        ], 544)
      ]),
      _: 3
    }, 8, ["class", "style", "disabled", "success", "messages", "error", "error-messages", "error-count"]));
  }
}), Ry = we(HP), ei = () => {
  const e = He([]), o = (a) => {
    a && e.value.push(a);
  }, t = (a) => (l) => {
    l && (e.value[a] = l);
  };
  return _m(() => {
    e.value = [];
  }), {
    itemRefs: e,
    setItemRef: o,
    setItemRefByIndex: t
  };
}, WP = { class: "va-option-list__list" }, UP = /* @__PURE__ */ oe({
  name: "VaOptionList",
  __name: "VaOptionList",
  props: {
    ...Ee,
    ..._r,
    ...zo,
    ...Ht,
    type: {
      type: String,
      default: "checkbox",
      validator: (e) => ["radio", "checkbox", "switch"].includes(e)
    },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    defaultValue: { type: [String, Number, Boolean, Object, Array] },
    name: { type: String, default: "" },
    color: { type: String, default: "primary" },
    leftLabel: { type: Boolean, default: !1 },
    modelValue: { type: [String, Number, Boolean, Object, Array] }
  },
  emits: [...on, ...sa, "clear"],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, { valueComputed: s } = xt(a, l, "modelValue", { defaultValue: a.defaultValue }), { getValue: i, getText: c, getTrackBy: p, getDisabled: v } = Cr(a), { itemRefs: m, setItemRef: g } = ei(), y = f(() => a.type === "radio"), b = f({
      get() {
        const D = y.value ? null : [];
        return s.value || D;
      },
      set(D) {
        a.readonly || (y.value && !Array.isArray(D) ? s.value = D && i(D) : s.value = Array.isArray(D) ? D.map(i) : [D && i(D)]);
      }
    }), C = (D) => a.disabled || v(D), _ = () => x(() => {
      s.value = null, l("clear"), T();
    }), S = () => {
      const D = Array.isArray(m.value) && m.value.find((V) => !V.disabled);
      D && typeof D.focus == "function" && D.focus();
    }, {
      computedError: $,
      computedErrorMessages: A,
      withoutValidation: x,
      resetValidation: T
    } = Ho(a, l, { reset: _, focus: S, value: s }), O = f(() => It(a, ["name", "color", "readonly", "leftLabel"]));
    return at(() => {
      yr && a.type !== "radio" && !Array.isArray(a.modelValue) && console.warn(`Prop 'modelValue = ${a.modelValue}' has not a proper type!
 For component property 'type = ${a.type}' it must be of type 'array'.`);
    }), o({
      focus: S,
      reset: _
    }), (D, V) => (w(), te(d(Ds), {
      error: d($),
      "error-messages": d(A),
      "error-count": D.$props.errorCount
    }, {
      default: U(() => [
        E("ul", WP, [
          (w(!0), L(Le, null, je(D.$props.options, (P) => (w(), L("li", {
            key: d(p)(P)
          }, [
            H(D.$slots, "default", ye(Ie({ option: P, selectedValue: b.value, isDisabled: C, getText: d(c), getValue: d(i) })), () => [
              D.$props.type === "radio" ? (w(), te(d(Ey), se({
                key: 0,
                ref_for: !0,
                ref: d(g),
                modelValue: b.value,
                "onUpdate:modelValue": V[0] || (V[0] = (R) => b.value = R),
                label: d(c)(P),
                disabled: C(P),
                option: d(i)(P)
              }, O.value), null, 16, ["modelValue", "label", "disabled", "option"])) : D.$props.type === "checkbox" ? (w(), te(d(pl), se({
                key: 1,
                ref_for: !0,
                ref: d(g),
                modelValue: b.value,
                "onUpdate:modelValue": V[1] || (V[1] = (R) => b.value = R),
                label: d(c)(P),
                disabled: C(P),
                "array-value": d(i)(P)
              }, O.value), null, 16, ["modelValue", "label", "disabled", "array-value"])) : (w(), te(d(Ry), se({
                key: 2,
                ref_for: !0,
                ref: d(g),
                modelValue: b.value,
                "onUpdate:modelValue": V[2] || (V[2] = (R) => b.value = R),
                label: d(c)(P),
                disabled: C(P),
                "array-value": d(i)(P)
              }, O.value), null, 16, ["modelValue", "label", "disabled", "array-value"]))
            ])
          ]))), 128))
        ])
      ]),
      _: 3
    }, 8, ["error", "error-messages", "error-count"]));
  }
}), GP = we(UP), KP = (e = 1, o, t, a = !1) => {
  let l = 0;
  if (t === 0 && (t = 1), o > t && (o = t), o === 0)
    l = 1, o = t > 10 ? 10 : t;
  else {
    const i = o / 2;
    e - i <= 0 || e > t ? l = 1 : l = e + i > t ? t - o + 1 : Math.ceil(e - i);
  }
  const s = [];
  for (let i = 0; i < o; i++)
    s.push(l + i);
  return a && o < 7 ? t >= 7 && yt(
    "[va-pagination] To work in a proper way, the `boundaryNumbers` prop needs at least 7 visible pages to be set via the `visiblePages` prop (first, last, 2 boundaries, current, previous, next)."
  ) : a && (l !== 1 && s.splice(0, 2, 1, "..."), s[s.length - 1] !== t && s.splice(-2, 2, "...", t)), s;
}, qP = ["aria-label", "onKeydown"], jP = ["aria-label"], YP = /* @__PURE__ */ oe({
  name: "VaPagination",
  __name: "VaPagination",
  props: {
    ...Ht,
    ...Ee,
    modelValue: { type: Number, default: 1 },
    visiblePages: { type: [Number, String], default: 0 },
    pages: { type: [Number, String], default: 0 },
    disabled: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    boundaryLinks: { type: Boolean, default: !0 },
    boundaryNumbers: { type: Boolean, default: !1 },
    directionLinks: { type: Boolean, default: !0 },
    input: { type: Boolean, default: !1 },
    hideOnSinglePage: { type: Boolean, default: !1 },
    total: { type: [Number, String], default: null },
    pageSize: { type: [Number, String], default: null },
    boundaryIconLeft: { type: String, default: "va-arrow-first" },
    boundaryIconRight: { type: String, default: "va-arrow-last" },
    directionIconLeft: { type: String, default: "va-arrow-left" },
    directionIconRight: { type: String, default: "va-arrow-right" },
    gapped: { type: Boolean, default: !1 },
    borderColor: { type: String, default: "" },
    rounded: { type: Boolean, default: !1 },
    /** @deprecated Use activeButtonProps="{ color: 'myColor' }" */
    activePageColor: { type: String, default: "" },
    activeButtonProps: { type: Object, default: () => ({}) },
    buttonProps: { type: Object, default: () => ({}) },
    buttonsPreset: { type: String, default: "primary" },
    ariaLabel: Fe("$t:pagination"),
    ariaGoToTheFirstPageLabel: Fe("$t:goToTheFirstPage"),
    ariaGoToPreviousPageLabel: Fe("$t:goToPreviousPage"),
    ariaGoToSpecificPageLabel: Fe("$t:goToSpecificPage"),
    ariaGoToSpecificPageInputLabel: Fe("$t:goToSpecificPageInput"),
    ariaGoToNextPageLabel: Fe("$t:goNextPage"),
    ariaGoToLastPageLabel: Fe("$t:goLastPage")
  },
  emits: [...on],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = He(), i = N(""), c = f(() => !!((y.value || y.value === 0) && b.value)), { valueComputed: p } = xt(a, l), v = f({
      get: () => c.value ? Math.ceil(p.value / b.value) || 1 : p.value,
      set: (ee) => {
        p.value = ee;
      }
    }), m = et("visiblePages"), g = et("pages"), y = et("total"), b = et("pageSize"), C = f(() => {
      const { boundaryNumbers: ee } = a, be = v.value || 1, Te = c.value ? Math.ceil(y.value / b.value) : g.value;
      return KP(be, m.value, Te, ee);
    }), _ = f(() => c.value ? Math.ceil(y.value / b.value) || 1 : +g.value), S = f(() => !!m.value && _.value > m.value || a.input), $ = f(() => {
      const { boundaryLinks: ee, boundaryNumbers: be } = a;
      return S.value && ee && !be;
    }), A = f(() => S.value && a.directionLinks), x = f(() => _.value > 1 || !a.hideOnSinglePage && _.value <= 1), T = () => {
      i.value = String(v.value), Vt(() => {
        var ee;
        return (ee = s.value) == null ? void 0 : ee.setSelectionRange(0, s.value.value.length);
      });
    }, { setItemRefByIndex: O, itemRefs: D } = ei(), V = (ee) => {
      var be;
      if (ee === "..." || ee === v.value)
        return;
      const Te = Ba(ee, 1, _.value);
      v.value = c.value ? (Te - 1) * b.value + 1 : Te, (be = D.value[ee - 1]) == null || be.focus();
    }, P = () => {
      var ee;
      i.value = "", (ee = s.value) == null || ee.blur();
    }, R = () => {
      if (+i.value === v.value && P(), !i.value.length)
        return;
      let ee = Number.parseInt(i.value);
      switch (!0) {
        case ee < 1:
          ee = 1;
          break;
        case ee > _.value:
          ee = _.value;
          break;
        case isNaN(ee):
          ee = v.value;
          break;
      }
      V(ee), P();
    }, { getColor: J, colorToRgba: de } = Ke(), ne = f(() => {
      const { color: ee, buttonsPreset: be } = so(a);
      if (!ee.value)
        return "transparent";
      switch (be.value) {
        case "default":
          return J(ee.value);
        case void 0:
        case "primary":
          return de(J(ee.value), 0.1);
        default:
          return "transparent";
      }
    }), M = f(() => ({
      cursor: "default",
      color: J(a.color),
      opacity: a.disabled ? 0.4 : 1,
      borderColor: ne.value
    }));
    Se([c, () => g.value], () => {
      if (yr && c.value && g.value)
        throw new Error("Please, use either `total` and `page-size` props, or `pages`.");
    });
    const j = f(() => ({
      disabled: a.disabled,
      placeholder: `${v.value}/${_.value}`
    })), W = f(() => ({
      size: a.size,
      preset: a.buttonsPreset,
      color: a.color,
      borderColor: a.borderColor,
      round: a.rounded,
      ...a.buttonProps
    })), q = f(() => ({
      preset: a.buttonsPreset === "default" ? "primary" : "default",
      color: a.activePageColor || a.color,
      ...a.activeButtonProps
    })), Z = (ee) => !isNaN(+ee) && ee === v.value ? Object.assign({}, W.value, q.value) : W.value, z = f(() => a.input && !a.boundaryLinks && !a.directionLinks), pe = ht("va-pagination__input", () => ({
      sm: a.size === "small" && z.value,
      md: a.size === "medium" && z.value,
      lg: a.size === "large" && z.value,
      auto: !z.value
    })), le = ht("va-pagination", () => ({
      ...It(a, ["gapped", "rounded", "disabled"]),
      bordered: !!a.borderColor
    })), _e = () => V(v.value + 1), Re = () => V(v.value - 1), { tp: Ve } = Ct();
    return o({
      goNextPage: _e,
      goPrevPage: Re
    }), (ee, be) => x.value ? (w(), L("nav", {
      key: 0,
      class: Be(["va-pagination", d(le)]),
      "aria-label": d(Ve)(ee.$props.ariaLabel),
      onKeydown: [
        Ae($e(Re, ["stop"]), ["left"]),
        Ae($e(_e, ["stop"]), ["right"]),
        Ae($e(Re, ["stop"]), ["up"]),
        Ae($e(_e, ["stop"]), ["down"])
      ]
    }, [
      $.value ? H(ee.$slots, "firstPageLink", ye(se({ key: 0 }, { onClick: () => V(1), disabled: ee.$props.disabled || v.value === 1 })), () => [
        $.value ? (w(), te(d(lt), se({
          key: 0,
          "aria-label": d(Ve)(ee.$props.ariaGoToTheFirstPageLabel),
          disabled: ee.$props.disabled || v.value === 1,
          icon: ee.$props.boundaryIconLeft
        }, W.value, {
          onClick: be[0] || (be[0] = (Te) => V(1))
        }), null, 16, ["aria-label", "disabled", "icon"])) : Y("", !0)
      ]) : Y("", !0),
      A.value ? H(ee.$slots, "prevPageLink", ye(se({ key: 1 }, { onClick: Re, disabled: ee.$props.disabled || v.value === 1 })), () => [
        A.value ? (w(), te(d(lt), se({
          key: 0,
          "aria-label": d(Ve)(ee.$props.ariaGoToPreviousPageLabel),
          disabled: ee.$props.disabled || v.value === 1,
          icon: ee.$props.directionIconLeft
        }, W.value, { onClick: Re }), null, 16, ["aria-label", "disabled", "icon"])) : Y("", !0)
      ]) : Y("", !0),
      ee.$props.input ? ao((w(), L("input", se({
        key: 3,
        "onUpdate:modelValue": be[1] || (be[1] = (Te) => i.value = Te),
        ref_key: "htmlInput",
        ref: s,
        class: ["va-pagination__input va-button", d(pe)],
        "aria-label": d(Ve)(ee.$props.ariaGoToSpecificPageInputLabel),
        style: M.value
      }, j.value, {
        onKeydown: Ae(R, ["enter"]),
        onFocus: T,
        onBlur: R
      }), null, 16, jP)), [
        [Ls, i.value]
      ]) : H(ee.$slots, "default", { key: 2 }, () => [
        (w(!0), L(Le, null, je(C.value, (Te, ie) => (w(), te(d(lt), se({
          key: ie,
          ref_for: !0,
          ref: d(O)(ie),
          class: { "va-button--ellipsis": Te === "...", "va-button--current": Te === v.value },
          "aria-label": d(Ve)(ee.$props.ariaGoToSpecificPageLabel, { page: Te }),
          "aria-current": Te === v.value,
          disabled: ee.$props.disabled || Te === "..."
        }, Z(Te), {
          onClick: (re) => V(Te)
        }), {
          default: U(() => [
            xe(ke(Te), 1)
          ]),
          _: 2
        }, 1040, ["class", "aria-label", "aria-current", "disabled", "onClick"]))), 128))
      ]),
      A.value ? H(ee.$slots, "nextPageLink", ye(se({ key: 4 }, { onClick: _e, disabled: ee.$props.disabled || v.value === _.value })), () => [
        A.value ? (w(), te(d(lt), se({
          key: 0,
          "aria-label": d(Ve)(ee.$props.ariaGoToNextPageLabel),
          disabled: ee.$props.disabled || v.value === _.value,
          icon: ee.$props.directionIconRight
        }, W.value, { onClick: _e }), null, 16, ["aria-label", "disabled", "icon"])) : Y("", !0)
      ]) : Y("", !0),
      $.value ? H(ee.$slots, "lastPageLink", ye(se({ key: 5 }, { onClick: () => V(_.value), disabled: ee.$props.disabled || v.value === _.value })), () => [
        $.value ? (w(), te(d(lt), se({
          key: 0,
          "aria-label": d(Ve)(ee.$props.ariaGoToLastPageLabel),
          disabled: ee.$props.disabled || v.value === _.value,
          icon: ee.$props.boundaryIconRight
        }, W.value, {
          onClick: be[2] || (be[2] = (Te) => V(_.value))
        }), null, 16, ["aria-label", "disabled", "icon"])) : Y("", !0)
      ]) : Y("", !0)
    ], 42, qP)) : Y("", !0);
  }
}), XP = we(YP), ZP = () => {
  const e = Ms(), o = new Proxy(e.value || {}, {
    get: (a, l, s) => {
      var i, c;
      if (l === "scrollTop")
        return (i = e.value) == null ? void 0 : i.scrollY;
      if (l === "scrollLeft")
        return (c = e.value) == null ? void 0 : c.scrollX;
      const p = Reflect.get(a, l, s);
      return typeof p == "function" ? p.bind(a) : p;
    }
  }), t = (a) => a ? a.scrollHeight > a.clientHeight ? a : t(a.parentElement) : o;
  return { getScrollableParent: t };
}, JP = { class: "va-parallax__image-container" }, QP = ["src", "alt"], eL = { class: "va-parallax__item-container" }, tL = /* @__PURE__ */ oe({
  name: "VaParallax",
  __name: "VaParallax",
  props: {
    ...Ee,
    target: { type: [Object, String] },
    src: { type: String, default: "", required: !0 },
    alt: { type: String, default: "parallax" },
    height: { type: [Number, String], default: 400 },
    reversed: { type: Boolean, default: !1 },
    speed: {
      type: [Number, String],
      default: 0.5,
      validator: (e) => {
        const o = Number(e);
        return o >= 0 && o <= 1;
      }
    }
  },
  setup(e) {
    const o = e, t = He(), a = He(), l = N(0), s = N(0), i = N(0), c = N(0), p = N(0), v = N(0), m = N(0), g = N(!1), y = f(() => ({ height: $.value + "px" })), b = f(() => ({
      display: "block",
      transform: `translate(-50%, ${s.value}px)`,
      opacity: g.value ? 1 : 0,
      top: o.reversed ? 0 : "auto"
    })), { getScrollableParent: C } = ZP(), _ = f(() => {
      var P;
      if (!o.target)
        return C((P = t.value) == null ? void 0 : P.parentElement);
      if (o.target instanceof HTMLElement)
        return o.target;
      const R = document.querySelector(o.target);
      return R || (yt("VaParallax target prop got wrong selector. Target is null"), null);
    }), S = f(() => {
      var P;
      return ((P = a.value) == null ? void 0 : P.naturalHeight) || 0;
    }), $ = et("height"), A = et("speed"), x = () => {
      var P, R;
      const J = ((P = t.value) == null ? void 0 : P.getBoundingClientRect()) || { top: 0 };
      p.value = ((R = _.value) == null ? void 0 : R.scrollTop) || 0, i.value = S.value - $.value, l.value = J.top + p.value, v.value = window.innerHeight, m.value = p.value + v.value;
    }, T = () => {
      x(), c.value = (m.value - l.value) / ($.value + v.value), s.value = Math.round(i.value * c.value) * A.value, o.reversed && (s.value = -s.value);
    }, O = () => {
      var P, R;
      (P = _.value) == null || P.addEventListener("scroll", T), (R = _.value) == null || R.addEventListener("resize", T);
    }, D = () => {
      var P, R;
      (P = _.value) == null || P.removeEventListener("scroll", T), (R = _.value) == null || R.removeEventListener("resize", T);
    };
    return at(() => {
      var P, R;
      (P = a.value) != null && P.complete ? (T(), O()) : (R = a.value) == null || R.addEventListener("load", () => {
        T(), O();
      }, !1), g.value = !0;
    }), Gt(D), (P, R) => (w(), L("div", {
      ref_key: "rootElement",
      ref: t,
      class: "va-parallax",
      style: me(y.value)
    }, [
      E("div", JP, [
        E("img", {
          ref_key: "img",
          ref: a,
          class: "va-parallax__image",
          src: P.$props.src,
          alt: P.$props.alt,
          style: me(b.value)
        }, null, 12, QP)
      ]),
      E("div", eL, [
        H(P.$slots, "default")
      ])
    ], 4));
  }
}), nL = we(tL), oL = {
  key: 0,
  "aria-hidden": "true",
  class: "va-popover__icon"
}, aL = { key: 1 }, rL = {
  key: 0,
  class: "va-popover__title"
}, lL = {
  key: 1,
  class: "va-popover__body"
}, Ru = ct(Dn, ["closeOnClickOutside"]), sL = /* @__PURE__ */ oe({
  name: "VaPopover",
  __name: "VaPopover",
  props: {
    ...Ru,
    ...Ee,
    trigger: { ...Ru.trigger, default: ["hover", "enter", "space", "arrow-down", "arrow-up"] },
    color: { type: String, default: "#1b1a1f" },
    // TODO: Make sure add this color to pallete
    textColor: { type: String },
    icon: { type: String, default: "" },
    title: { type: String, default: "" },
    message: { type: String, default: "" },
    autoHide: { type: Boolean, default: !0 },
    offset: { type: [Array, Number], default: 4 },
    contentClass: { type: String, default: "" }
  },
  setup(e) {
    const o = e, t = _t(Ru), { getColor: a, getBoxShadowColor: l } = Ke(), s = hn(), { textColorComputed: i } = Kt(f(() => a(o.color))), c = f(() => o.icon || s.icon), p = f(() => o.title || s.title), v = f(() => o.message || s.body), m = f(
      () => p.value || v.value
    ), g = f(() => ({
      boxShadow: `var(--va-popover-content-box-shadow) ${l(a(o.color))}`,
      backgroundColor: a(o.color),
      color: i.value
    }));
    return (y, b) => (w(), te(d(Dn), se(d(t), {
      "model-value": y.modelValue,
      "close-on-click-outside": e.autoHide,
      offset: y.$props.offset,
      "content-class": y.$props.contentClass,
      class: "va-popover"
    }), {
      default: U(() => [
        E("div", {
          style: me(g.value),
          class: "va-popover__content",
          role: "tooltip"
        }, [
          c.value ? (w(), L("div", oL, [
            H(y.$slots, "icon", {}, () => [
              G(d(ot), {
                name: y.$props.icon,
                color: d(i)
              }, null, 8, ["name", "color"])
            ])
          ])) : Y("", !0),
          m.value ? (w(), L("div", aL, [
            p.value ? (w(), L("div", rL, [
              H(y.$slots, "title", {}, () => [
                xe(ke(y.$props.title), 1)
              ])
            ])) : Y("", !0),
            v.value ? (w(), L("div", lL, [
              H(y.$slots, "body", {}, () => [
                xe(ke(y.$props.message), 1)
              ])
            ])) : Y("", !0)
          ])) : Y("", !0)
        ], 4)
      ]),
      anchor: U(() => [
        H(y.$slots, "default")
      ]),
      _: 3
    }, 16, ["model-value", "close-on-click-outside", "offset", "content-class"]));
  }
}), iL = we(sL);
var tn = /* @__PURE__ */ ((e) => (e[e.EMPTY = 0] = "EMPTY", e[e.HALF = 0.5] = "HALF", e[e.FULL = 1] = "FULL", e))(tn || {});
const uL = () => {
  const e = Pt();
  if (!e)
    throw new Error("useRating hooks must be used on top of setup function");
  return {
    props: e.props,
    emit: e.emit
  };
}, cL = {
  ...Ht,
  modelValue: { type: Number, default: 0 },
  clearable: { type: Boolean, default: !1 },
  hover: { type: Boolean, default: !1 }
}, dL = (e) => {
  const { emit: o } = uL(), { isHovered: t, onMouseEnter: a, onMouseLeave: l } = cl(), { valueComputed: s } = xt(e, o), i = N(0), c = f(() => !e.disabled && !e.readonly && e.hover && t.value ? i.value : s.value);
  return {
    visibleValue: c,
    modelValue: s,
    hoveredValue: i,
    isHovered: t,
    onMouseEnter: a,
    onMouseLeave: l,
    onItemValueUpdate: (g, y) => {
      const b = g + y;
      if (e.clearable && s.value === b) {
        s.value = 0;
        return;
      }
      s.value = b;
    },
    onItemHoveredValueUpdate: (g, y) => {
      e.hover && (i.value = g + y);
    },
    getItemValue: (g) => {
      const y = c.value - g;
      return Ba(y, tn.EMPTY, tn.FULL);
    }
  };
}, Dy = {
  unselectedColor: { type: String },
  color: { type: String, default: "primary" },
  modelValue: { type: Number }
}, My = (e) => {
  const { getColor: o, getFocusColor: t, getTextColor: a } = Ke(), l = f(() => o(e.color)), s = f(() => e.unselectedColor ? o(e.unselectedColor) : t(o(e.color))), i = f(() => e.modelValue === tn.HALF ? `linear-gradient(90deg, ${l.value} 50%, ${s.value} 50%` : e.modelValue === tn.EMPTY ? s.value : l.value), c = f(() => e.modelValue === tn.FULL ? o(a(l.value)) : o(a(s.value)));
  return {
    computedColor: l,
    backgroundComputed: i,
    textColorComputed: c
  };
}, fL = ["tabindex", "onKeydown"], Fy = /* @__PURE__ */ oe({
  name: "VaRatingItem",
  __name: "VaRatingItem",
  props: {
    modelValue: { type: Number, default: 0 },
    icon: { type: String, default: "star" },
    halfIcon: { type: String, default: "star_half" },
    emptyIcon: { type: String, default: "star_outline" },
    halves: { type: Boolean, default: !1 },
    hover: { type: Boolean, default: !1 },
    tabindex: { type: [String, Number], default: 0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    size: { type: [String, Number], default: "medium" },
    unselectedColor: { type: String },
    color: { type: String, default: "primary" }
  },
  emits: ["update:modelValue", "click", "hover"],
  setup(e, { emit: o }) {
    const t = e, a = o, l = He(), [s] = Ia("modelValue", t, a, tn.EMPTY), i = N(null), c = f(() => t.hover && !t.disabled && !t.readonly && i.value || s.value), { getColor: p } = Ke(), v = f(() => p(
      t.unselectedColor && c.value === tn.EMPTY ? t.unselectedColor : t.color
    )), m = (_) => {
      if (!l.value)
        return;
      const { offsetX: S } = _, $ = l.value.clientWidth;
      t.halves ? i.value = S / $ <= tn.HALF ? tn.HALF : tn.FULL : i.value = tn.FULL;
    }, g = () => {
      i.value = null;
    }, y = () => {
      s.value = i.value || tn.FULL, a("click", i.value || tn.FULL);
    };
    Se(i, () => a("hover", i.value || tn.EMPTY));
    const b = f(() => t.halves && c.value === tn.HALF ? t.halfIcon : c.value === tn.EMPTY ? t.emptyIcon : t.icon), C = f(() => t.disabled ? -1 : t.tabindex);
    return (_, S) => (w(), L("div", {
      ref_key: "rootEl",
      ref: l,
      role: "button",
      class: "va-rating-item",
      tabindex: C.value,
      onKeydown: [
        Ae(y, ["enter"]),
        Ae($e(y, ["prevent"]), ["space"])
      ],
      onMousemove: m,
      onMouseleave: g,
      onClick: y
    }, [
      H(_.$slots, "default", ye(Ie({ value: c.value, onClick: y })), () => [
        G(d(ot), {
          class: "va-rating-item__wrapper",
          tabindex: "-1",
          tag: "button",
          name: b.value,
          size: _.$props.size,
          color: v.value
        }, null, 8, ["name", "size", "color"])
      ])
    ], 40, fL));
  }
}), Ny = /* @__PURE__ */ oe({
  name: "VaRatingItemNumberButton",
  __name: "VaRatingItemNumberButton",
  props: {
    ...Dy,
    ...Ea,
    itemNumber: { type: Number, required: !0 },
    modelValue: { type: Number, required: !0 }
  },
  setup(e) {
    const o = e, {
      textColorComputed: t,
      backgroundComputed: a
    } = My(o), {
      sizeComputed: l,
      fontSizeComputed: s
    } = Ra(o, "VaRating");
    return (i, c) => (w(), L("button", {
      class: "va-rating__number-item",
      tabindex: "-1",
      "aria-hidden": "true",
      style: me({
        background: d(a),
        color: d(t),
        width: d(l),
        height: d(l),
        fontSize: d(s),
        borderRadius: `${parseInt(d(s)) * 0.125}rem`
      })
    }, ke(e.itemNumber), 5));
  }
}), vL = ["aria-label"], Up = ct(Fy, ["modelValue", "itemNumber"]), Gp = ct(Ny, ["modelValue", "itemNumber"]), pL = /* @__PURE__ */ oe({
  name: "VaRating",
  __name: "VaRating",
  props: {
    ...Gp,
    ...cL,
    ...Dy,
    ...ua,
    ...Up,
    ...Ee,
    modelValue: { type: Number, default: 0 },
    numbers: { type: Boolean, default: !1 },
    halves: { type: Boolean, default: !1 },
    max: { type: [Number, String], default: 5 },
    texts: { type: Array, default: () => [] },
    ariaLabel: Fe("$t:currentRating"),
    ariaItemLabel: Fe("$t:voteRating")
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, { computedClasses: a } = sy("va-rating", t), {
      visibleValue: l,
      onMouseEnter: s,
      onMouseLeave: i,
      onItemValueUpdate: c,
      onItemHoveredValueUpdate: p,
      getItemValue: v
    } = dL(t), m = f(() => !t.disabled && !t.readonly), g = ($) => {
      const A = Number(t.max), x = t.halves ? tn.HALF : tn.FULL, T = l.value + x * $, O = t.clearable ? 0 : x;
      T >= O && T <= A ? c(l.value, x * $) : T < O ? c(O, 0) : c(A, $ === -1 ? x * $ : 0);
    }, { tp: y } = Ct(), {
      computedColor: b
    } = My(t), C = f(() => m.value ? 0 : void 0), _ = _t(Up), S = _t(Gp);
    return ($, A) => (w(), L("div", {
      class: Be(["va-rating", d(a)]),
      "aria-label": d(y)($.$props.ariaLabel, { max: $.$props.max, value: $.$props.modelValue })
    }, [
      E("div", {
        class: "va-rating__item-wrapper",
        onKeyup: [
          A[0] || (A[0] = Ae((x) => g(-1), ["left"])),
          A[1] || (A[1] = Ae((x) => g(1), ["right"]))
        ],
        onMouseenter: A[2] || (A[2] = //@ts-ignore
        (...x) => d(s) && d(s)(...x)),
        onMouseleave: A[3] || (A[3] = //@ts-ignore
        (...x) => d(i) && d(i)(...x))
      }, [
        (w(!0), L(Le, null, je(Number($.$props.max), (x) => (w(), te(Fy, se({
          key: x,
          class: "va-rating__item"
        }, d(_), {
          "aria-label": d(y)($.$props.ariaItemLabel, { max: $.$props.max, value: x }),
          "model-value": d(v)(x - 1),
          tabindex: C.value,
          disabled: $.$props.disabled,
          readonly: $.$props.readonly,
          onHover: (T) => m.value && d(p)(x - 1, T),
          "onUpdate:modelValue": (T) => m.value && d(c)(x - 1, T)
        }), {
          default: U(({ value: T, onClick: O }) => [
            H($.$slots, "item", ye(Ie({ value: T, onClick: O, index: x })), () => [
              $.$props.numbers ? (w(), te(Ny, se({ key: 0 }, d(S), {
                "model-value": T,
                "item-number": x
              }), null, 16, ["model-value", "item-number"])) : Y("", !0)
            ])
          ]),
          _: 2
        }, 1040, ["aria-label", "model-value", "tabindex", "disabled", "readonly", "onHover", "onUpdate:modelValue"]))), 128))
      ], 32),
      $.$props.texts && $.$props.texts.length === $.$props.max ? (w(), L("span", {
        key: 0,
        class: "va-rating__text-wrapper",
        style: me({ color: d(b) })
      }, ke($.$props.texts[Math.round(d(l)) - 1]), 5)) : Y("", !0)
    ], 10, vL));
  }
}), mL = we(pL), gL = (e) => e.offsetTop, yL = (e) => e.offsetTop + e.offsetHeight, hL = (e) => e.offsetTop + e.offsetHeight / 2, bL = (e, o, t) => {
  const a = o.offsetHeight, l = o.scrollTop, s = gL(e) - o.offsetTop, i = hL(e) - o.offsetTop, c = yL(e) - o.offsetTop;
  if (t === "start")
    return s;
  if (t === "end")
    return c - a;
  if (t === "center")
    return i - a / 2;
  if (t === "any") {
    if (s - l < 0)
      return s;
    if (c - l > a)
      return c - a;
  }
}, _L = (e, o = {
  scrollTarget: e.parentElement,
  verticalAlignment: "any",
  smooth: !1
}) => {
  const t = o.scrollTarget || e.parentElement, a = bL(e, t, o.verticalAlignment);
  a !== void 0 && t.scroll({
    top: a,
    behavior: o.smooth ? "smooth" : "auto"
  });
}, CL = ["aria-selected"], SL = {
  key: 1,
  class: "va-select-option__highlighted"
}, wL = /* @__PURE__ */ oe({
  name: "VaSelectOption",
  __name: "VaSelectOption",
  props: {
    ...fc,
    disabled: { type: Boolean, default: !1 },
    option: { type: [Number, String, Boolean, Object], default: () => ({}) },
    getText: { type: Function, required: !0 },
    getTrackBy: { type: Function, required: !0 },
    currentOption: { type: [String, Number, Boolean, Object], default: null },
    getSelectedState: { type: Function, required: !0 },
    search: { type: String, default: "" },
    highlightMatchedText: { type: Boolean, default: !0 },
    inputFocused: { type: Boolean, default: !1 },
    minSearchChars: { type: [Number, String], default: 0 }
  },
  setup(e, { expose: o }) {
    const t = e, { getColor: a, getHoverColor: l } = Ke(), s = et("minSearchChars"), i = f(() => xa(t.option) ? t.option.icon : void 0), c = f(() => a(t.color)), p = f(() => t.getText(t.option)), v = f(() => {
      const C = { start: p.value, searchedSubString: "", end: "" };
      if (!p.value || !t.search || !t.highlightMatchedText || t.search.length < s.value)
        return C;
      const _ = p.value.toLowerCase().indexOf(t.search.toLowerCase());
      if (_ < 0)
        return C;
      const S = p.value.slice(0, _), $ = p.value.slice(_, _ + t.search.length), A = p.value.slice(_ + t.search.length);
      return { start: S, searchedSubString: $, end: A };
    }), m = f(() => t.getSelectedState(t.option)), g = f(() => typeof t.option == "string" ? t.option === t.currentOption : t.getTrackBy(t.currentOption) === t.getTrackBy(t.option)), y = ht("va-select-option", () => ({
      selected: m.value
    })), b = f(() => ({
      color: m.value ? a(t.color) : "inherit",
      backgroundColor: g.value ? l(a(t.color)) : "transparent",
      cursor: t.disabled ? "default" : void 0,
      opacity: t.disabled ? "var(--va-select-option-list-option-disabled-opacity)" : void 0
    }));
    return o({
      isFocused: g,
      isSelected: m
    }), (C, _) => (w(), L("div", {
      role: "option",
      class: Be(["va-select-option", d(y)]),
      style: me(b.value),
      "aria-selected": m.value
    }, [
      H(C.$slots, "option-content", {}, () => [
        i.value ? (w(), te(d(ot), {
          key: 0,
          size: "small",
          class: "va-select-option__icon",
          name: i.value
        }, null, 8, ["name"])) : Y("", !0),
        xe(" " + ke(v.value.start) + " ", 1),
        v.value.searchedSubString ? (w(), L("span", SL, ke(v.value.searchedSubString), 1)) : Y("", !0),
        xe(" " + ke(v.value.end), 1)
      ]),
      m.value ? (w(), te(d(ot), {
        key: 0,
        class: "va-select-option__selected-icon",
        size: "small",
        name: "va-check",
        color: c.value
      }, null, 8, ["color"])) : Y("", !0)
    ], 14, CL));
  }
}), Kp = we(wL), $L = () => {
  const e = He({}), o = (t) => (a) => {
    if (a)
      return e.value[t] = a, String(t);
  };
  return _m(() => {
    e.value = {};
  }), { itemRefs: e, setItemRef: o };
}, kL = ["tabindex", "onKeydown", "aria-multiselectable"], VL = {
  key: 0,
  class: "va-select-option-list__group-name",
  role: "presentation"
}, xL = {
  key: 0,
  class: "va-select-option-list--empty"
}, AL = /* @__PURE__ */ oe({
  name: "VaSelectOptionList",
  __name: "VaSelectOptionList",
  props: {
    ...fc,
    ...Ee,
    ..._r,
    ...wr,
    noOptionsText: { type: String, default: "Items not found" },
    getSelectedState: { type: Function, required: !0 },
    multiple: { type: Boolean, default: !1 },
    search: { type: String, default: "" },
    tabindex: { type: [String, Number], default: 0 },
    hoveredOption: { type: [String, Number, Boolean, Object], default: null },
    virtualScroller: { type: Boolean, default: !0 },
    highlightMatchedText: { type: Boolean, default: !0 },
    minSearchChars: { type: [Number, String], default: 0 },
    autoSelectFirstOption: { type: Boolean, default: !1 },
    selectedTopShown: { type: Boolean, default: !1 },
    doShowAllOptions: { type: Boolean, default: !1 },
    searchFn: { type: Function, default: void 0 }
  },
  emits: [
    "select-option",
    "update:hoveredOption",
    "no-previous-option-to-hover",
    "scroll-bottom"
  ],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = He(), i = () => {
      var ie;
      (ie = s.value) == null || ie.focus({ preventScroll: !0 });
    }, c = f(() => {
      var ie;
      return ((ie = s.value) == null ? void 0 : ie.clientHeight) ?? 200;
    }), p = () => l("scroll-bottom"), v = (ie) => {
      const re = ie.target;
      re && re.scrollTop + re.clientHeight === re.scrollHeight && p();
    }, m = N(""), g = f(() => a.hoveredOption ?? null), y = (ie, re) => {
      l("update:hoveredOption", ie), m.value = re;
    }, { getText: b, getGroupBy: C, getTrackBy: _, getDisabled: S } = Cr(a), $ = et("minSearchChars"), A = f(() => {
      var ie;
      const re = a.getSelectedState, Me = (ie = a.options) == null ? void 0 : ie.find((Oe) => re(Oe));
      return Me ? b(Me) : "";
    }), x = f(() => {
      var ie;
      return A.value.toLowerCase() === ((ie = a.search) == null ? void 0 : ie.toLowerCase());
    }), T = f(() => {
      if (a.doShowAllOptions && x.value || !a.search || a.search.length < $.value)
        return a.options;
      if (a.searchFn)
        return a.options.filter((re) => a.searchFn(a.search, re));
      const ie = a.search.toUpperCase().trim();
      return a.options.filter((re) => b(re).toUpperCase().includes(ie));
    }), O = f(() => a.groupBy ? T.value.reduce((ie, re) => {
      const Me = C(re);
      return Me ? (ie[Me] || (ie[Me] = []), ie[Me].push(re)) : ie._noGroup.push(re), ie;
    }, { _noGroup: [] }) : { _noGroup: T.value }), D = Pc(O, a), V = (ie) => !$n(ie), P = (ie) => {
      ie === g.value || V(ie) && S(ie) || y(ie ?? null, "mouse");
    }, R = (ie) => {
      y(ie ?? null, "keyboard");
    }, J = () => {
      const ie = q.value && typeof q.value == "object" ? { ...q.value } : q.value;
      l("select-option"), a.selectedTopShown && P(ie);
    }, de = f(() => Object.values(D.value).flat()), ne = f(() => T.value.some((ie) => C(ie)) ? de.value : T.value), M = f(() => ne.value.findIndex((ie) => V(g.value) && _(ie) === _(g.value))), j = f(() => ({
      ...It(a, ["getSelectedState", "color", "search", "highlightMatchedText"]),
      minSearchChars: $.value,
      getText: b,
      getTrackBy: _
    })), W = (ie, re = !1) => {
      const Me = [...ne.value || []], Oe = re ? Me.reverse() : Me, Xe = re ? ie * -1 - 1 : ie;
      return Oe.slice(Xe).find((vt) => !S(vt));
    }, q = f(() => {
      const ie = M.value - 1, re = ne.value[ie];
      if (V(re) && !(ie === 0 && S(re)))
        return W(M.value - 1, !0);
    }), Z = (ie) => {
      P(ie), l("select-option");
    }, z = (ie) => {
      a.selectedTopShown || P(ie);
    }, pe = (ie) => {
      a.selectedTopShown && P(ie);
    }, le = () => {
      if (!V(g.value)) {
        R(W(0, !0));
        return;
      }
      V(q.value) ? R(q.value) : l("no-previous-option-to-hover");
    }, _e = () => {
      if (!V(g.value)) {
        Re();
        return;
      }
      const ie = M.value + 1, re = ne.value[ie];
      V(re) && !(ie === ne.value.length - 1 && S(re)) && R(W(M.value + 1));
    }, Re = () => R(W(0)), { itemRefs: Ve, setItemRef: ee } = $L(), be = He(), Te = (ie) => {
      var re;
      if (!V(ie))
        return;
      const Me = Mt(Ve.value[_(ie)]);
      Me && _L(Me);
      const Oe = (re = be.value) == null ? void 0 : re[0];
      a.virtualScroller && Oe.virtualScrollTo(M.value);
    };
    return Se(() => a.hoveredOption, (ie) => {
      (!m.value || m.value === "keyboard") && V(ie) && Te(ie);
    }), Se(T, () => {
      a.autoSelectFirstOption && Re();
    }, { immediate: !0 }), o({
      focusPreviousOption: le,
      focusNextOption: _e,
      focusFirstOption: Re,
      scrollToOption: Te,
      focus: i
    }), (ie, re) => (w(), L("div", {
      ref_key: "root",
      ref: s,
      class: "va-select-option-list",
      tabindex: e.tabindex,
      onKeydown: [
        Ae($e(le, ["stop", "prevent"]), ["up"]),
        Ae($e(le, ["stop", "prevent"]), ["left"]),
        Ae($e(_e, ["stop", "prevent"]), ["down"]),
        Ae($e(_e, ["stop", "prevent"]), ["right"]),
        Ae($e(J, ["stop", "prevent"]), ["enter"]),
        Ae($e(J, ["stop", "prevent"]), ["space"])
      ],
      onScrollPassive: v,
      role: "listbox",
      "aria-multiselectable": ie.$props.multiple
    }, [
      (w(!0), L(Le, null, je(d(D), (Me, Oe) => (w(), L(Le, { key: Oe }, [
        Oe !== "_noGroup" ? (w(), L("span", VL, ke(Oe), 1)) : Y("", !0),
        ie.$props.virtualScroller ? (w(), te(d(Zs), {
          key: 1,
          ref_for: !0,
          ref_key: "virtualScrollerRef",
          ref: be,
          items: Me,
          "track-by": d(_),
          "wrapper-size": c.value,
          "onScroll:bottom": p
        }, {
          default: U(({ item: Xe, index: vt }) => [
            H(ie.$slots, "default", ye(Ie({ option: Xe, index: vt, selectOption: (Wt = Xe) => Z(Wt) })), () => [
              G(d(Kp), se({
                option: Xe,
                "current-option": g.value,
                disabled: d(S)(Xe)
              }, j.value, {
                onClick: $e(J, ["stop"]),
                onMouseenter: (Wt) => pe(Xe),
                onMousemove: (Wt) => z(Xe)
              }), null, 16, ["option", "current-option", "disabled", "onMouseenter", "onMousemove"])
            ])
          ]),
          _: 2
        }, 1032, ["items", "track-by", "wrapper-size"])) : (w(!0), L(Le, { key: 2 }, je(Me, (Xe, vt) => H(ie.$slots, "default", ye(se({
          key: d(_)(Xe)
        }, { option: Xe, index: vt, selectOption: Z })), () => [
          G(d(Kp), se({
            ref_for: !0,
            ref: d(ee)(d(_)(Xe)),
            "current-option": g.value,
            option: Xe,
            disabled: d(S)(Xe)
          }, j.value, {
            onClick: $e(J, ["stop"]),
            onMouseenter: (Wt) => pe(Xe),
            onMousemove: (Wt) => z(Xe)
          }), {
            "option-content": U(() => [
              H(ie.$slots, "option-content", ye(Ie({ option: Xe, index: vt })))
            ]),
            _: 2
          }, 1040, ["current-option", "option", "disabled", "onMouseenter", "onMousemove"])
        ])), 128))
      ], 64))), 128)),
      T.value.length ? Y("", !0) : (w(), L("div", xL, ke(e.noOptionsText), 1))
    ], 40, kL));
  }
}), IL = we(AL), TL = {
  key: 0,
  class: "va-select-content__placeholder"
}, BL = ["placeholder"], PL = {
  key: 0,
  class: "va-select-content__option"
}, LL = {
  key: 1,
  class: "va-select-content__separator"
}, OL = ["placeholder", "disabled", "readonly"], EL = /* @__PURE__ */ oe({
  name: "VaSelectContent",
  __name: "VaSelectContent",
  props: {
    ...ua,
    ariaAttributes: { type: Object },
    value: { type: Array, required: !0 },
    valueString: { type: String },
    separator: { type: String, default: ", " },
    placeholder: { type: String, default: "" },
    tabindex: { type: [String, Number], default: 0 },
    hiddenSelectedOptionsAmount: { type: [Number, String], default: 0 },
    isAllOptionsShown: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !1 },
    focused: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 },
    getText: { type: Function, required: !0 },
    autocompleteInputValue: { type: String, default: "" }
  },
  emits: ["toggle-hidden", "autocomplete-input", "focus-prev", "focus-next", "select-option", "delete-last-selected"],
  setup(e, { emit: o }) {
    const t = e, a = o, l = N(), s = f(() => t.placeholder && !t.valueString), i = () => a("toggle-hidden"), { value: c, focused: p } = so(t), v = f({
      get: () => t.autocompleteInputValue,
      set: (_) => a("autocomplete-input", _)
    }), m = et("hiddenSelectedOptionsAmount");
    at(() => {
      t.multiple || t.autocomplete && (v.value = t.valueString);
    }), Se(p, (_) => {
      var S, $;
      !t.autocomplete || !_ || (v.value ? (S = l.value) == null || S.setSelectionRange(0, v.value.length) : ($ = l.value) == null || $.focus());
    });
    const g = (_) => {
      t.multiple && c.value.length && _.key === "Backspace" && !v.value && a("delete-last-selected");
    }, y = (_) => {
      var S;
      t.autocomplete && ((S = l.value) == null || S.focus(), _.stopPropagation());
    }, b = (_) => xa(_) ? _.icon : void 0, C = f(() => t.multiple ? c.value : c.value[0]);
    return (_, S) => (w(), L("div", {
      class: "va-select-content",
      onClick: y
    }, [
      s.value && !_.$props.autocomplete ? (w(), L("span", TL, [
        E("input", se(e.ariaAttributes, {
          placeholder: _.$props.placeholder,
          readonly: ""
        }), null, 16, BL)
      ])) : t.autocomplete && !t.multiple ? Y("", !0) : H(_.$slots, "content", ye(se({ key: 1 }, {
        value: C.value,
        valueString: _.$props.valueString,
        valueArray: _.$props.value,
        tabindex: _.$props.tabindex,
        ariaAttributes: e.ariaAttributes
      })), () => [
        (w(!0), L(Le, null, je(_.$props.value, ($, A) => (w(), L(Le, { key: A }, [
          $ !== "" ? (w(), L("span", PL, [
            H(_.$slots, "option-content", ye(Ie({ option: $, index: A, selectOption: () => {
            } })), () => [
              b($) ? (w(), te(d(ot), {
                key: 0,
                size: "small",
                class: "va-select-option__icon",
                name: b($)
              }, null, 8, ["name"])) : Y("", !0),
              xe(" " + ke(e.getText($)), 1)
            ])
          ])) : Y("", !0),
          A < _.$props.value.length - 1 ? (w(), L("span", LL, ke(_.$props.separator), 1)) : Y("", !0)
        ], 64))), 128))
      ]),
      _.$props.autocomplete ? ao((w(), L("input", se({ key: 2 }, e.ariaAttributes, {
        "onUpdate:modelValue": S[0] || (S[0] = ($) => v.value = $),
        class: "va-select-content__autocomplete",
        ref_key: "autocompleteInput",
        ref: l,
        autocomplete: "off",
        "aria-autocomplete": "list",
        placeholder: _.$props.placeholder,
        disabled: _.$props.disabled,
        readonly: _.$props.readonly,
        onKeydown: [
          S[1] || (S[1] = Ae($e(($) => _.$emit("focus-prev"), ["stop", "prevent"]), ["up"])),
          S[2] || (S[2] = Ae($e(($) => _.$emit("focus-next"), ["stop", "prevent"]), ["down"])),
          S[3] || (S[3] = Ae($e(($) => _.$emit("select-option"), ["stop", "prevent"]), ["enter"])),
          g
        ]
      }), null, 16, OL)), [
        [Ls, v.value]
      ]) : Y("", !0),
      H(_.$slots, "hiddenOptionsBadge", ye(Ie({
        amount: e.hiddenSelectedOptionsAmount,
        isShown: _.$props.isAllOptionsShown,
        toggle: i
      })), () => [
        d(m) && !_.$props.isAllOptionsShown ? (w(), te(d(Wg), {
          key: 0,
          class: "va-select-content__state-icon",
          color: "info",
          text: `+${d(m)}`,
          tabindex: _.$props.tabindex,
          onClick: $e(i, ["stop"])
        }, null, 8, ["text", "tabindex"])) : Y("", !0)
      ]),
      H(_.$slots, "hideOptionsButton", ye(Ie({
        isShown: _.$props.isAllOptionsShown,
        toggle: i
      })), () => [
        _.$props.isAllOptionsShown ? (w(), te(d(ot), {
          key: 0,
          role: "button",
          class: "va-select-content__state-icon",
          size: "small",
          name: "reply",
          tabindex: _.$props.tabindex,
          onClick: $e(i, ["stop"])
        }, null, 8, ["tabindex"])) : Y("", !0)
      ])
    ]));
  }
}), RL = we(EL), DL = {
  maxVisibleOptions: { type: Number || String, default: 0 }
}, ML = (e, o) => {
  const t = vn(e, "modelValue"), a = N(!1), l = N([]), s = N([]), i = f(() => s.value.length), c = f(() => [...l.value, ...s.value]), p = f(() => !e.maxVisibleOptions || a.value ? c.value : l.value);
  return Se(t, () => {
    if (!Array.isArray(t.value)) {
      l.value = [o(t.value)], s.value = [];
      return;
    }
    const m = t.value.filter((g) => !$n(g)).map(o);
    e.maxVisibleOptions ? (l.value = m.slice(0, e.maxVisibleOptions), s.value = m.slice(e.maxVisibleOptions)) : (l.value = [...m], s.value = []);
  }, { immediate: !0 }), {
    toggleHiddenOptionsState: () => a.value = !a.value,
    isAllOptionsShown: a,
    visibleSelectedOptions: p,
    hiddenSelectedOptionsAmount: i,
    allSelectedOptions: c
  };
}, FL = {
  dropdownIcon: {
    type: [String, Object],
    default: () => ({
      open: "va-arrow-down",
      close: "va-arrow-up"
    }),
    validator: (e) => typeof e == "string" ? !0 : Object.entries(e).every(([o, t]) => ["open", "close"].includes(o) && typeof t == "string")
  }
}, NL = (e, o) => {
  const t = f(() => e.dropdownIcon ? typeof e.dropdownIcon == "string" ? e.dropdownIcon : o.value ? e.dropdownIcon.close : e.dropdownIcon.open : ""), { getHoverColor: a, getColor: l } = Ke(), s = f(() => l("secondary")), i = f(() => e.readonly ? a(s.value) : s.value);
  return { toggleIcon: t, toggleIconColor: i };
}, zL = {
  separator: { type: String, default: ", " }
}, HL = (e, o, t) => f(() => {
  var a;
  return (a = o.value) != null && a.length ? o.value.map(t).join(e.separator) ?? "" : "";
}), WL = {
  autocomplete: { type: Boolean, default: !1 }
}, UL = (e, o, t, a, l) => {
  const s = (c) => c?.length ? l(c.at(-1)) : "";
  o.autocomplete && !o.multiple && (e.value = s(t.value)), Se(t, (c, p) => {
    if (!o.autocomplete)
      return;
    const v = s(c), m = s(p);
    v !== m && (e.value = o.multiple ? "" : v, o.multiple || (a.value = !1));
  }), Se(e, (c) => {
    o.autocomplete && c && c !== s(t.value) && (a.value = !0);
  });
  const i = () => {
    e.value = o.multiple ? "" : s(t.value);
  };
  return Se(a, (c, p) => {
    o.autocomplete && (!c || p) && i();
  }), e;
}, GL = () => ({
  popupId: `combobox-controls-${So()}`
}), KL = {
  maxSelections: {
    type: [Number, String],
    default: void 0
  }
};
function qL(e, o) {
  return {
    exceedsMaxSelections: () => o.value === void 0 || isNaN(+o.value) ? !1 : e.value.length >= Number(o.value),
    addOption: (l) => [...e.value, l]
  };
}
const qp = ct(kn), jL = /* @__PURE__ */ oe({
  name: "VaSelect",
  __name: "VaSelect",
  props: {
    ...qp,
    ...Ee,
    ..._r,
    ...zo,
    ...ul,
    ...KL,
    ...ml,
    ...ua,
    ...DL,
    ...FL,
    ...wr,
    ...zL,
    ...WL,
    ...oo,
    modelValue: {
      type: [String, Number, Array, Object, Boolean],
      default: void 0
    },
    // Dropdown placement
    placement: { ...oo.placement, default: "bottom" },
    keepAnchorWidth: { ...oo.keepAnchorWidth, default: !0 },
    offset: { ...oo.offset, default: [1, 0] },
    closeOnContentClick: { ...oo.closeOnContentClick, default: !1 },
    trigger: { ...oo.trigger, default: () => ["click", "right-click", "space", "enter"] },
    // Select options
    allowCreate: {
      type: [Boolean, String],
      default: !1,
      validator: (e) => [!0, !1, "unique"].includes(e)
    },
    color: { type: String, default: "primary" },
    multiple: { type: Boolean, default: !1 },
    searchable: { type: Boolean, default: !1 },
    width: { type: String, default: "100%" },
    maxHeight: { type: String, default: "256px" },
    noOptionsText: Fe("$t:noOptions"),
    hideSelected: { type: Boolean, default: !1 },
    tabindex: { type: [String, Number], default: 0 },
    virtualScroller: { type: Boolean, default: !1 },
    selectedTopShown: { type: Boolean, default: !1 },
    highlightMatchedText: { type: Boolean, default: !0 },
    minSearchChars: { type: [Number, String], default: 0 },
    autoSelectFirstOption: { type: Boolean, default: !1 },
    // Input style
    placeholder: { type: String, default: "" },
    searchPlaceholderText: Fe("$t:search"),
    ariaLabel: Fe("$t:select"),
    ariaSearchLabel: Fe("$t:optionsFilter"),
    ariaClearLabel: Fe("$t:reset"),
    search: { type: String, default: void 0 },
    searchFn: { type: Function, default: void 0 },
    // useClearableProps override
    clearValue: { type: [String, Number, Array, Object, Boolean], default: "" }
  },
  emits: [
    "update:modelValue",
    "update-search",
    "create-new",
    "scroll-bottom",
    "update:search",
    ...Rc,
    ...sa,
    ...Ys
  ],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, { tp: s, t: i } = Ct(), c = He(), p = He(), v = He(), m = Tc(p), { getValue: g, getText: y, getTrackBy: b, tryResolveByValue: C } = Cr(a), _ = (Ce) => y(C(Ce)), S = () => l("scroll-bottom"), [$] = Ia("search", a, l, ""), A = f(() => a.searchable || a.allowCreate && !a.autocomplete);
    Se($, (Ce) => {
      l("update-search", Ce), a.autocomplete || (Ve.value = null);
    });
    const x = (Ce) => {
      if ($n(Ce) || typeof Ce == "object")
        return Ce;
      const St = a.options.find((pt) => Ce === g(pt));
      return St === void 0 ? (yt(`[VaSelect]: can not find option in options list (${JSON.stringify(a.options)}) by provided value (${JSON.stringify(Ce)})!`), Ce) : St;
    }, {
      toggleHiddenOptionsState: T,
      isAllOptionsShown: O,
      visibleSelectedOptions: D,
      hiddenSelectedOptionsAmount: V,
      allSelectedOptions: P
    } = ML(a, x), R = f({
      get() {
        if (a.multiple)
          return P.value;
        const Ce = x(a.modelValue);
        return Array.isArray(Ce) && (yt("Model value should be a string, number, boolean or an object for a single Select."), Ce.length) ? Ce.at(-1) : Ce;
      },
      set(Ce) {
        Array.isArray(Ce) ? l("update:modelValue", Ce.map(g)) : l("update:modelValue", g(Ce));
      }
    }), J = HL(a, D, _), {
      canBeCleared: de,
      clearIconProps: ne,
      onFocus: M,
      onBlur: j
    } = Xs(a, R), W = f(() => de.value ? a.multiple && Array.isArray(R.value) ? !!R.value.length : !0 : !1), q = f(() => a.options ? a.selectedTopShown ? a.options.slice().sort((Ce, St) => {
      const pt = z(Ce), Rt = z(St);
      return pt && Rt ? 0 : pt && !Rt ? -1 : 1;
    }) : a.hideSelected ? a.options.filter((Ce) => !z(Ce)) : a.options : []), Z = f(() => Array.isArray(R.value) ? R.value.map((Ce) => C(Ce)) : C(R.value)), z = (Ce) => Array.isArray(Z.value) ? !$n(Z.value.find((St) => pe(St, Ce))) : pe(Z.value, Ce), pe = (Ce, St) => {
      const pt = g(Ce), Rt = g(St);
      return pt === Rt ? !0 : typeof pt == "string" && typeof Rt == "string" ? pt === Rt : pt === null || Rt === null ? !1 : typeof pt == "object" && typeof Rt == "object" ? b(pt) === b(Rt) : !1;
    }, le = (Ce) => Array.isArray(Ce.value), _e = (Ce) => {
      if (Ve.value === null) {
        Lt();
        return;
      }
      if (A.value && ($.value = ""), a.multiple && le(R)) {
        const { exceedsMaxSelections: St, addOption: pt } = qL(R, N(a.maxSelections));
        if (z(Ce))
          R.value = R.value.filter((fo) => !pe(Ce, fo));
        else {
          if (St())
            return;
          R.value = pt(Ce);
        }
      } else
        R.value = Ce, Lt();
      Ka();
    }, Re = () => {
      var Ce;
      const St = (Ce = a.options) == null ? void 0 : Ce.some((Rt) => [$.value, an.value].includes(y(Rt)));
      !((a.allowCreate === "unique" || a.autocomplete) && St) && (l("create-new", $.value || an.value), $.value = "", an.value = "");
    }, Ve = N(null), ee = () => {
      if (!re.value) {
        vt();
        return;
      }
      _e(Ve.value);
    }, be = () => {
      const Ce = !!a.allowCreate && ($.value || an.value);
      Ve.value !== null ? ee() : Ce && Re();
    }, Te = () => {
      var Ce;
      return (Ce = c.value) == null ? void 0 : Ce.focusPreviousOption();
    }, ie = () => {
      var Ce;
      return (Ce = c.value) == null ? void 0 : Ce.focusNextOption();
    }, { isOpenSync: re, dropdownProps: Me } = Dc(a, l, {
      defaultCloseOnValueUpdate: f(() => !a.multiple)
    }), Oe = f(() => ({
      ...Me.value,
      stateful: !1,
      innerAnchorSelector: ".va-input-wrapper__field"
    })), Xe = f({
      get: () => re.value,
      set: (Ce) => {
        Ce ? vt() : Wt();
      }
    }), vt = () => {
      a.disabled || a.readonly || (re.value = !0, Et(), We());
    }, Wt = () => {
      re.value = !1, a.autocomplete || ($.value = ""), Vt(() => {
        bl(), m.focusIfNothingIfFocused();
      });
    }, Lt = () => {
      Wt(), m.value = !0;
    }, qt = () => {
      var Ce;
      (Ce = v.value) == null || Ce.focus();
    }, tt = () => {
      var Ce, St;
      (Ce = c.value) == null || Ce.focus(), !a.modelValue && ((St = c.value) == null || St.focusFirstOption());
    }, We = async () => {
      await Vt(), A.value ? qt() : tt();
    }, Ue = () => {
      Xe.value || (j(), li.onBlur(), m.value ? m.value = !1 : bl());
    }, qe = f(() => a.disabled ? -1 : a.tabindex), Tt = f(() => a.disabled || a.autocomplete ? -1 : 0), Et = () => {
      const Ce = R.value;
      if (typeof Ce != "object" && Array.isArray(Ce) && !Ce.length)
        return;
      const pt = Array.isArray(Ce) ? Ce[Ce.length - 1] : Ce;
      Ve.value = pt, Vt(() => {
        var Rt;
        return (Rt = c.value) == null ? void 0 : Rt.scrollToOption(pt);
      });
    };
    let Zt = "", qn;
    const uo = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", " "], jn = (Ce) => {
      if (uo.some((Rt) => Rt === Ce.key))
        return;
      const St = Ce.key.length === 1, pt = Ce.key === "Backspace" || Ce.key === "Delete";
      if (clearTimeout(qn), pt ? Zt = Zt ? Zt.slice(0, -1) : "" : St && (Zt += Ce.key), A.value) {
        $.value = Zt;
        return;
      }
      if (Zt) {
        const Rt = a.options.find((fo) => y(fo).toLowerCase().startsWith(Zt.toLowerCase()));
        Rt && (Ve.value = Rt);
      }
      qn = setTimeout(() => {
        Zt = "";
      }, 1e3);
    }, $o = et("minSearchChars"), Yn = f(() => ({
      ...It(a, ["textBy", "trackBy", "groupBy", "valueBy", "disabledBy", "color", "virtualScroller", "highlightMatchedText", "delay", "selectedTopShown"]),
      autoSelectFirstOption: a.autoSelectFirstOption || a.autocomplete,
      search: $.value || an.value,
      tabindex: qe.value,
      selectedValue: R.value,
      options: q.value,
      getSelectedState: z,
      noOptionsText: s(a.noOptionsText),
      doShowAllOptions: xn.value,
      minSearchChars: $o.value
    })), { toggleIcon: bn, toggleIconColor: co } = NL(a, re), ue = f(() => m.value || re.value), ge = hn(), Ne = ht("va-select-anchor", () => ({
      nowrap: !!(a.maxVisibleOptions && !ge.content)
    })), Ye = _t(qp), Bt = f(() => ({
      ...Ye.value,
      error: oi.value,
      errorMessages: _l.value,
      focused: ue.value,
      "aria-label": a.ariaLabel || (a.modelValue ? `${i("selectedOption")}: ${a.modelValue}` : i("noSelectedOption"))
    })), cn = f(() => ({
      ...It(a, ["placeholder", "autocomplete", "multiple", "disabled", "readonly"]),
      tabindex: qe.value,
      value: D.value,
      valueString: J.value,
      hiddenSelectedOptionsAmount: V.value,
      isAllOptionsShown: O.value,
      focused: m.value,
      autocompleteInputValue: an.value,
      getText: _
    })), an = UL($, a, D, re, y), Xn = (Ce) => an.value = Ce, xn = N(!0);
    Se(Xe, () => {
      xn.value = !0;
    }), Se($, () => {
      xn.value = !1;
    });
    const Ua = () => {
      a.disabled || yo(Mt(p.value));
    }, Ga = () => {
      Xe.value && (Xe.value = !1), Vt(() => {
        a.disabled || Ns(Mt(p.value));
      });
    }, Zn = () => ai(() => {
      a.multiple ? R.value = Array.isArray(a.clearValue) ? a.clearValue : [] : R.value = a.clearValue, $.value = "", l("clear"), ri(), Vt(() => {
        m.value = !0;
      });
    }), Ka = (Ce) => {
      a.autocomplete && !a.disabled && !a.readonly && (m.value = !0, re.value = !0);
    }, Jt = (Ce) => {
      if (a.disabled || a.readonly)
        return;
      const St = Ce.target && "tagName" in Ce.target && Ce.target.tagName === "INPUT";
      Ce.code === "Space" && St || (Ce.preventDefault(), Xe.value = !Xe.value);
    }, ni = () => {
      Array.isArray(R.value) && (R.value = R.value.slice(0, -1));
    }, {
      validate: bl,
      computedError: oi,
      computedErrorMessages: _l,
      withoutValidation: ai,
      resetValidation: ri,
      listeners: li,
      isTouched: $r
    } = Ho(a, l, { reset: Zn, focus: Ua, value: R });
    Se(re, (Ce) => {
      Ce || ($r.value = !0);
    });
    const { popupId: kr } = GL(), ca = $, si = M;
    return o({
      focus: Ua,
      blur: Ga,
      reset: Zn
    }), (Ce, St) => (w(), te(d(Dn), se({
      ref: "dropdown",
      modelValue: Xe.value,
      "onUpdate:modelValue": St[4] || (St[4] = (pt) => Xe.value = pt),
      class: "va-select va-select__dropdown va-select-dropdown"
    }, Oe.value, {
      role: "combobox",
      "inner-anchor-selector": ".va-input-wrapper__field",
      "keyboard-navigation": !1
    }), {
      anchor: U(() => [
        G(d(kn), se(Bt.value, {
          ref_key: "input",
          ref: p,
          class: ["va-select__anchor va-select-anchor__input", d(Ne)],
          "aria-haspopup": "listbox",
          "model-value": d(J),
          readonly: !0,
          "aria-label": Ce.$props.ariaLabel,
          "aria-controls": d(kr),
          "aria-owns": d(kr),
          onFocus: d(si),
          onBlur: Ue
        }), un({
          icon: U(() => [
            W.value ? (w(), te(d(ot), se({
              key: 0,
              role: "button",
              "aria-label": d(s)(Ce.$props.ariaClearLabel)
            }, d(ne), {
              onClick: $e(Zn, ["stop"]),
              onKeydown: [
                Ae($e(Zn, ["stop"]), ["enter"]),
                Ae($e(Zn, ["stop"]), ["space"])
              ]
            }), null, 16, ["aria-label", "onKeydown"])) : Y("", !0)
          ]),
          appendInner: U(() => [
            G(d(ot), {
              color: d(co),
              name: d(bn),
              class: "va-select__toggle-icon",
              role: "button",
              tabindex: Tt.value,
              "aria-expanded": Xe.value,
              onKeydown: Ae(Jt, ["enter"])
            }, null, 8, ["color", "name", "tabindex", "aria-expanded"])
          ]),
          default: U(({ ariaAttributes: pt }) => [
            G(d(RL), se(cn.value, {
              ariaAttributes: pt,
              separator: Ce.$props.separator,
              onToggleHidden: d(T),
              onAutocompleteInput: Xn,
              onFocusPrev: Te,
              onFocusNext: ie,
              onSelectOption: be,
              onDeleteLastSelected: ni
            }), un({ _: 2 }, [
              je(Ce.$slots, (Rt, fo) => ({
                name: fo,
                fn: U((ii) => [
                  H(Ce.$slots, fo, ye(Ie(ii)))
                ])
              }))
            ]), 1040, ["ariaAttributes", "separator", "onToggleHidden"])
          ]),
          _: 2
        }, [
          je(Ce.$slots, (pt, Rt) => ({
            name: Rt,
            fn: U((fo) => [
              H(Ce.$slots, Rt, ye(Ie(fo)))
            ])
          }))
        ]), 1040, ["class", "model-value", "aria-label", "aria-controls", "aria-owns", "onFocus"])
      ]),
      default: U(() => [
        G(d(La), {
          class: "va-select-dropdown__content",
          style: me({ width: Ce.$props.width }),
          onKeydown: Ae(Lt, ["esc"]),
          role: "dialog"
        }, {
          default: U(() => [
            A.value ? (w(), te(d(kn), {
              key: 0,
              ref_key: "searchBar",
              ref: v,
              class: "va-select-dropdown__content-search-input",
              modelValue: d(ca),
              "onUpdate:modelValue": St[0] || (St[0] = (pt) => yn(ca) ? ca.value = pt : null),
              "aria-label": d(s)(Ce.$props.ariaSearchLabel),
              tabindex: qe.value,
              placeholder: d(s)(Ce.$props.searchPlaceholderText),
              preset: "bordered",
              onKeydown: [
                Ae($e(Te, ["stop", "prevent"]), ["up"]),
                Ae($e(Te, ["stop", "prevent"]), ["left"]),
                Ae($e(ie, ["stop", "prevent"]), ["down"]),
                Ae($e(ie, ["stop", "prevent"]), ["right"]),
                Ae($e(be, ["prevent"]), ["enter"])
              ],
              onFocus: St[1] || (St[1] = (pt) => Ve.value = null)
            }, null, 8, ["modelValue", "aria-label", "tabindex", "placeholder", "onKeydown"])) : Y("", !0),
            G(d(IL), se({
              ref_key: "optionList",
              ref: c,
              class: "va-select-dropdown__options-wrapper",
              hoveredOption: Ve.value,
              "onUpdate:hoveredOption": St[2] || (St[2] = (pt) => Ve.value = pt),
              style: { maxHeight: Ce.$props.maxHeight },
              id: d(kr),
              "search-fn": Ce.$props.searchFn
            }, Yn.value, {
              onSelectOption: ee,
              onNoPreviousOptionToHover: qt,
              onKeydown: [
                St[3] || (St[3] = Ae($e((pt) => v.value && v.value.focus(), ["stop", "prevent"]), ["tab"])),
                jn
              ],
              onScrollBottom: S
            }), {
              default: U((pt) => [
                H(Ce.$slots, "option", ye(Ie(pt)))
              ]),
              "option-content": U((pt) => [
                H(Ce.$slots, "option-content", ye(Ie(pt)))
              ]),
              _: 3
            }, 16, ["hoveredOption", "style", "id", "search-fn"])
          ]),
          _: 3
        }, 8, ["style"])
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), YL = we(jL), XL = {
  key: 0,
  class: "va-skeleton__wave"
}, ZL = /* @__PURE__ */ oe({
  name: "VaSkeleton",
  __name: "VaSkeleton",
  props: {
    color: { type: String, default: "backgroundElement" },
    delay: { type: [Number, String], default: 100 },
    tag: { type: String, default: "div" },
    animation: { type: String, default: "pulse" },
    lines: { type: [String, Number], default: 1 },
    height: { type: [String], default: "5em" },
    width: { type: [String], default: "100%" },
    lineGap: { type: String, default: "8px" },
    lastLineWidth: { type: [String], default: "75%" },
    variant: { type: String, default: "squared" },
    ariaLabel: Fe("$t:loading")
  },
  setup(e) {
    const o = e, t = N(!1), a = et("delay");
    let l;
    at(() => {
      clearTimeout(l), setTimeout(() => {
        t.value = !0;
      }, a.value);
    }), Gt(() => {
      clearTimeout(l);
    });
    const s = f(() => o.variant === "text" ? `${o.lines}em` : o.height), i = f(() => o.variant === "circle" ? s.value : o.width), { getColor: c } = Ke(), p = f(() => c(o.color));
    f(() => `-${o.lineGap}`);
    const v = ht("va-skeleton", () => ({
      lines: Number(o.lines) > 1,
      text: o.variant === "text",
      circle: o.variant === "circle",
      hidden: !t.value,
      pulse: o.animation === "pulse",
      wave: o.animation === "wave"
    })), m = f(() => o.variant === "circle" ? "50%" : o.variant === "rounded" ? `var(--va-skeleton-border-radius, calc(${s.value} / 5))` : "0px"), { tp: g } = Ct(), y = la(), b = f(() => [
      ...Object.keys(v),
      y.class
    ]);
    return (C, _) => (w(), te(zt(e.tag), {
      class: Be(["va-skeleton", b.value]),
      role: "status",
      "aria-live": "polite",
      "aria-label": d(g)(C.$props.ariaLabel),
      "aria-atomic": "true",
      style: me(`--va-color-computed: ${String(p.value)};--va-height-computed: ${String(s.value)};--va-width-computed: ${String(i.value)};--va-border-radius: ${String(m.value)};--va-line-gap: ${String(e.lineGap)};--va-last-line-width: ${String(e.lastLineWidth)}`)
    }, {
      default: U(() => [
        H(C.$slots, "default"),
        e.animation === "wave" ? (w(), L("div", XL)) : Y("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "class", "style"]));
  }
}), JL = /* @__PURE__ */ oe({
  name: "VaSkeletonGroup",
  __name: "VaSkeletonGroup",
  props: {
    color: { type: String, default: "backgroundElement" },
    delay: { type: [Number, String], default: 100 },
    animation: { type: String, default: "pulse" },
    lines: { type: [Number, String], default: 1 },
    lineGap: { type: String, default: "8px" },
    lastLineWidth: { type: [String], default: "75%" }
  },
  setup(e) {
    const o = e, t = N(!1), a = et("delay");
    let l;
    at(() => {
      l = setTimeout(() => {
        t.value = !0;
      }, a.value);
    }), hm(() => {
      clearTimeout(l);
    });
    const s = ht("va-skeleton-group", () => ({
      hidden: t.value === !1
    })), i = f(() => ({ ...o, delay: 0 }));
    return (c, p) => (w(), te(d(il), {
      components: { VaSkeleton: i.value }
    }, {
      default: U(() => [
        E("div", se({
          class: ["va-skeleton-group", d(s)]
        }, c.$attrs), [
          H(c.$slots, "default", {}, void 0, !0)
        ], 16)
      ]),
      _: 3
    }, 8, ["components"]));
  }
}), QL = /* @__PURE__ */ Wa(JL, [["__scopeId", "data-v-597bab9a"]]), eO = we(ZL), tO = we(QL), zy = Symbol("VaSidebar"), nO = (e) => {
  Co(zy, e);
}, oO = () => ut(zy, {
  color: "background-element"
  // activeColor: 'primary',
}), Hy = (e) => {
  const o = N(null);
  return Ta([e], () => {
    var t;
    o.value = ((t = e.value) == null ? void 0 : t.clientWidth) ?? null;
  }), Vn(() => {
    var t;
    o.value = ((t = e.value) == null ? void 0 : t.clientWidth) ?? null;
  }), o;
}, aO = /* @__PURE__ */ oe({
  name: "VaSidebar",
  __name: "VaSidebar",
  props: {
    ...Ee,
    activeColor: { type: String, default: "primary" },
    hoverColor: { type: String, default: void 0 },
    hoverOpacity: {
      type: [Number, String],
      default: 0.2,
      validator: (e) => Number(e) >= 0 && Number(e) <= 1
    },
    borderColor: { type: String, default: void 0 },
    color: { type: String, default: "background-element" },
    textColor: { type: String },
    gradient: { type: Boolean, default: !1 },
    minimized: { type: Boolean, default: !1 },
    hoverable: { type: Boolean, default: !1 },
    width: { type: String, default: "16rem" },
    minimizedWidth: { type: String, default: "4rem" },
    modelValue: { type: Boolean, default: !0 },
    animated: { type: [Boolean, String], default: !0 },
    closeOnClickOutside: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, { getColor: s } = Ke();
    nO(a);
    const i = N(!1), c = f(() => a.minimized || a.hoverable && !i.value), p = N(), v = Hy(p), m = f(() => a.modelValue === !0 || v.value === null ? !0 : v.value > 0), g = N(), y = () => a.modelValue ? c.value ? a.minimizedWidth : a.width : 0, b = f(() => c.value ? a.minimizedWidth : a.width);
    Vn(() => {
      const O = y();
      setTimeout(() => {
        g.value = O;
      });
    });
    const C = f(() => s(a.color)), { textColorComputed: _ } = Kt(C), S = f(() => {
      const O = s(C.value);
      return {
        color: _.value,
        backgroundColor: O,
        backgroundImage: a.gradient ? dc(O) : void 0,
        overflowX: v.value === g.value ? void 0 : "hidden",
        width: g.value,
        minWidth: g.value
      };
    }), $ = ht("va-sidebar", () => ({
      minimized: c.value,
      animated: !!a.animated,
      "animated-right": a.animated === "right",
      "animated-left": a.animated === "left" || a.animated === !0
    })), A = (O) => {
      i.value = a.hoverable && O;
    }, x = He();
    Hs([x], () => {
      a.closeOnClickOutside && a.modelValue && setTimeout(() => {
        l("update:modelValue", !1);
      }, 0);
    });
    const T = f(() => ({
      textColor: a.textColor,
      activeColor: a.activeColor,
      hoverColor: a.hoverColor,
      borderColor: a.borderColor,
      hoverOpacity: a.hoverOpacity
    }));
    return o({
      isMinimized: c,
      isHovered: i,
      updateHoverState: A,
      rootElement: x,
      menu: p,
      doShowMenu: m,
      menuWidth: b,
      sidebarWidth: g
    }), (O, D) => (w(), L("aside", {
      ref_key: "rootElement",
      ref: x,
      class: Be(["va-sidebar", d($)]),
      style: me(S.value),
      onMouseenter: D[0] || (D[0] = (V) => A(!0)),
      onMouseleave: D[1] || (D[1] = (V) => A(!1))
    }, [
      ao(E("div", {
        class: "va-sidebar__menu",
        ref_key: "menu",
        ref: p,
        style: me({
          width: b.value,
          minWidth: b.value
        })
      }, [
        G(d(il), {
          components: { VaSidebarItem: T.value }
        }, {
          default: U(() => [
            H(O.$slots, "default")
          ]),
          _: 3
        }, 8, ["components"])
      ], 4), [
        [Xr, m.value]
      ])
    ], 38));
  }
}), rO = we(aO), lO = /* @__PURE__ */ oe({
  name: "VaSidebarItem",
  __name: "VaSidebarItem",
  props: {
    ...Na,
    ...Ee,
    active: { type: Boolean, default: !1 },
    textColor: { type: String, default: void 0 },
    activeColor: { type: String, default: "primary" },
    hoverColor: { type: String, default: void 0 },
    hoverOpacity: { type: [Number, String], default: 0.2 },
    borderColor: { type: String, default: void 0 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, t = Cs(), a = oO(), { isHovered: l } = cl(t, vn(o, "disabled")), { getColor: s, getHoverColor: i, getFocusColor: c } = Ke(), { hasKeyboardFocus: p, keyboardFocusListeners: v } = Sr(), m = f(() => o.active && !l.value && !p.value ? s(o.activeColor) : p.value ? c(s(o.hoverColor || o.activeColor)) : "#ffffff00"), g = f(() => rk(s(a?.color), m.value)), { textColorComputed: y } = Kt(g), b = f(() => {
      const S = { color: y.value };
      if (o.disabled)
        return S;
      if ((l.value || o.active || p.value) && (S.backgroundColor = m.value), o.active) {
        const $ = { ...a, ...o };
        S.borderColor = s($.borderColor || $.activeColor);
      }
      return p.value && (S.backgroundColor = c(s(o.hoverColor || o.activeColor))), l.value && (S.backgroundColor = i(
        s(o.hoverColor || o.activeColor),
        Number(o.hoverOpacity)
      )), S;
    }), { tagComputed: C, linkAttributesComputed: _ } = ia(o);
    return (S, $) => (w(), te(zt(d(C)), se({
      ref_key: "rootElement",
      ref: t,
      class: ["va-sidebar__item va-sidebar-item", {
        "va-sidebar-item--active": S.$props.active,
        "va-sidebar-item--disabled": S.$props.disabled
      }],
      tabindex: S.$props.disabled ? -1 : 0,
      style: b.value
    }, d(_), Kn(d(v))), {
      default: U(() => [
        H(S.$slots, "default")
      ]),
      _: 3
    }, 16, ["tabindex", "class", "style"]));
  }
}), sO = { class: "va-sidebar__item__content va-sidebar-item-content" }, iO = /* @__PURE__ */ oe({
  name: "VaSidebarItemContent",
  __name: "VaSidebarItemContent",
  setup(e) {
    return (o, t) => (w(), L("div", sO, [
      H(o.$slots, "default")
    ]));
  }
}), uO = { class: "va-sidebar__title va-sidebar-item-title" }, cO = /* @__PURE__ */ oe({
  name: "VaSidebarItemTitle",
  __name: "VaSidebarItemTitle",
  setup(e) {
    return (o, t) => (w(), L("div", uO, [
      H(o.$slots, "default")
    ]));
  }
}), dO = we(iO), fO = we(cO), vO = we(lO), jp = (e, o, t, a, l) => {
  (Array.isArray(e) && !l || !Array.isArray(e) && l) && yt(`The type "${Array.isArray(e) ? "array" : typeof e}" of prop "model-value" does not match prop "range = ${l}".`), a < t && yt(`The maximum value (${a}) can not be less than the minimum value (${t}).`), PI(a - t, o) || yt(`Step ${o} is illegal. Slider is non-divisible (Min:Max ${t}:${a}).`);
  const s = (i) => {
    i < t ? yt(`The value of the slider is ${i}, the minimum value is ${t}, the value of this slider can not be less than the minimum value`) : i > a && yt(`The value of the slider is ${i}, the maximum value is ${a}, the value of this slider can not be greater than the maximum value`);
  };
  return Array.isArray(e) ? e.map(s) : s(e), !0;
}, pO = {
  key: 0,
  class: "va-slider__input-wrapper",
  "aria-hidden": "true"
}, mO = ["id"], gO = {
  key: 2,
  class: "va-input__label",
  "aria-hidden": "true"
}, yO = ["tabindex", "onFocus"], hO = ["tabindex"], bO = {
  key: 3,
  class: "va-input__label--inverse",
  "aria-hidden": "true"
}, _O = ["id"], CO = {
  key: 5,
  class: "va-slider__input-wrapper"
}, SO = /* @__PURE__ */ oe({
  name: "VaSlider",
  __name: "VaSlider",
  props: {
    ...Ht,
    ...Ee,
    range: { type: Boolean, default: !1 },
    modelValue: { type: [Number, Array], default: 0 },
    trackLabel: { type: [Function, String] },
    color: { type: String, default: "primary" },
    trackColor: { type: String, default: "" },
    labelColor: { type: String, default: "" },
    trackLabelVisible: { type: Boolean, default: !1 },
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    step: { type: [Number, String], default: 1 },
    label: { type: String, default: "" },
    invertLabel: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    pins: { type: Boolean, default: !1 },
    iconPrepend: { type: String, default: "" },
    iconAppend: { type: String, default: "" },
    vertical: { type: Boolean, default: !1 },
    showTrack: { type: Boolean, default: !0 },
    ariaLabel: Fe("$t:sliderValue")
  },
  emits: ["drag-start", "drag-end", "change", "update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, a = o, { getColor: l, getHoverColor: s } = Ke(), i = He(), c = He(), { setItemRefByIndex: p, itemRefs: v } = ei(), m = N(!1), g = N(!1), y = N(0), b = N(0), C = t.range ? [0, 100] : 0, { valueComputed: _ } = xt(t, a, "modelValue", { defaultValue: C }), S = N(0), $ = N(!1), A = et("min"), x = et("max"), T = et("step"), O = f(() => t.vertical ? [1, 0] : [0, 1]), D = f(() => t.vertical ? "bottom" : "left"), V = f(() => t.vertical ? "height" : "width"), P = f(() => Array.isArray(z.value) && z.value[1] - T.value < z.value[0]), R = f(() => Array.isArray(z.value) && z.value[0] + T.value > z.value[1]), J = ht("va-slider", () => ({
      ...It(t, ["disabled", "readonly", "vertical"]),
      active: m.value,
      horizontal: !t.vertical,
      grabbing: $.value
    })), de = ht("va-slider__handler", () => ({
      onFocus: !t.range && (g.value || m.value),
      inactive: !m.value
    })), ne = f(() => ({
      color: t.labelColor ? l(t.labelColor) : l(t.color)
    })), M = f(() => ({
      backgroundColor: t.trackColor ? l(t.trackColor) : s(l(t.color))
    })), j = (ue) => {
      const ge = A.value, Ne = x.value;
      return (Oe(ge, ue, Ne) - ge) / (Ne - ge) * 100;
    }, W = f(() => {
      if (Array.isArray(z.value)) {
        const ue = j(z.value[0]), ge = j(z.value[1]);
        return {
          [D.value]: `${ue}%`,
          [V.value]: `${ge - ue}%`,
          backgroundColor: l(t.color),
          visibility: t.showTrack ? "visible" : "hidden"
        };
      } else {
        const ue = j(z.value);
        return {
          [V.value]: `${ue > 100 ? 100 : ue}%`,
          backgroundColor: l(t.color),
          visibility: t.showTrack ? "visible" : "hidden"
        };
      }
    }), q = f(() => {
      if (Array.isArray(z.value)) {
        const ue = j(z.value[0]), ge = j(z.value[1]);
        return [
          {
            [D.value]: `${ue}%`,
            backgroundColor: Te(0) ? l(t.color) : "#ffffff",
            borderColor: l(t.color)
          },
          {
            [D.value]: `${ge}%`,
            backgroundColor: Te(1) ? l(t.color) : "#ffffff",
            borderColor: l(t.color)
          }
        ];
      } else {
        const ue = j(z.value);
        return {
          [D.value]: `${ue > 100 ? 100 : ue}%`,
          backgroundColor: Te(0) ? l(t.color) : "#ffffff",
          borderColor: l(t.color)
        };
      }
    }), Z = (ue) => t.range ? q.value[ue] : q.value, z = f({
      get: () => _.value,
      set: (ue) => {
        g.value || a("change", ue), _.value = ue;
      }
    }), pe = (ue) => t.range && ue !== void 0 ? z.value[ue] : z.value, le = f(() => {
      const ue = (x.value - A.value) / T.value;
      return b.value / ue;
    }), _e = f(() => {
      const ue = `${T.value}`.split(".")[1];
      return ue ? Math.pow(10, ue.length) : 1;
    }), Re = f(() => (x.value - A.value) / T.value - 1), Ve = f(() => Array.isArray(z.value) ? [(z.value[0] - A.value) / T.value * le.value, (z.value[1] - A.value) / T.value * le.value] : (z.value - A.value) / T.value * le.value), ee = f(() => [0, b.value]), be = f(() => [A.value, x.value]), Te = (ue) => !m.value && !g.value || t.disabled || t.readonly ? !1 : t.range ? S.value === ue : S.value === 0, ie = (ue, ge = S.value) => {
      var Ne, Ye;
      if (ue.preventDefault(), !ge) {
        if (!t.range)
          ge = 0;
        else if (Array.isArray(Ve.value)) {
          const Bt = "touches" in ue ? ue.touches[0] : ue;
          ge = qt(Bt) > (Ve.value[1] - Ve.value[0]) / 2 + Ve.value[0] ? 1 : 0;
        }
      }
      Array.isArray(z.value) && (S.value = ge), Array.isArray(z.value) ? (Ne = v.value[ge]) == null || Ne.focus() : (Ye = c.value) == null || Ye.focus(), g.value = !0, a("drag-start");
    }, re = (ue) => {
      !$.value || !g.value || t.disabled || t.readonly || (ue.preventDefault(), "touches" in ue ? Tt(qt(ue.touches[0])) : Tt(qt(ue)));
    }, Me = () => {
      !t.disabled && !t.readonly && (g.value && (a("drag-end"), a("change", z.value)), g.value = !1, $.value = !1);
    }, Oe = (ue, ge, Ne) => Math.max(Math.min(ge, Ne), ue), Xe = (ue) => {
      var ge, Ne;
      if (![v.value[0], v.value[1], c.value].includes(document.activeElement) || t.disabled || t.readonly)
        return;
      const Ye = (cn, an) => {
        if (Array.isArray(z.value)) {
          const Xn = z.value[an] + (cn ? T.value : -T.value), xn = Oe(A.value, Xn, x.value);
          z.value = [
            an === 0 ? xn : z.value[0],
            an === 1 ? xn : z.value[1]
          ];
        } else {
          const Xn = z.value + (cn ? T.value : -T.value), xn = Oe(A.value, Xn, x.value);
          z.value = xn;
        }
      };
      ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].includes(ue.key) && ue.preventDefault();
      const Bt = (cn) => cn === document.activeElement;
      if (t.range && Array.isArray(z.value)) {
        const cn = (Jt) => t.vertical && Bt(v.value[0]) && Jt.key === "ArrowUp", an = (Jt) => t.vertical && Bt(v.value[0]) && Jt.key === "ArrowDown", Xn = (Jt) => t.vertical && Bt(v.value[1]) && Jt.key === "ArrowUp", xn = (Jt) => t.vertical && Bt(v.value[1]) && Jt.key === "ArrowDown", Ua = (Jt) => !t.vertical && Bt(v.value[0]) && Jt.key === "ArrowLeft", Ga = (Jt) => !t.vertical && Bt(v.value[0]) && Jt.key === "ArrowRight", Zn = (Jt) => !t.vertical && Bt(v.value[1]) && Jt.key === "ArrowLeft", Ka = (Jt) => !t.vertical && Bt(v.value[1]) && Jt.key === "ArrowRight";
        switch (!0) {
          case ((xn(ue) || Zn(ue)) && P.value && z.value[0] !== A.value):
            (ge = v.value[0]) == null || ge.focus(), Ye(0, 0);
            break;
          case ((cn(ue) || Ga(ue)) && R.value && z.value[1] !== x.value):
            (Ne = v.value[1]) == null || Ne.focus(), Ye(1, 1);
            break;
          case ((an(ue) || Ua(ue)) && z.value[0] !== A.value):
            Ye(0, 0);
            break;
          case ((Xn(ue) || Ka(ue)) && z.value[1] !== x.value):
            Ye(1, 1);
            break;
          case ((xn(ue) || Zn(ue)) && z.value[1] !== A.value):
            Ye(0, 1);
            break;
          case ((cn(ue) || Ga(ue)) && z.value[0] !== x.value):
            Ye(1, 0);
            break;
        }
      } else
        t.vertical ? (ue.key === "ArrowDown" && Ye(0, 0), ue.key === "ArrowUp" && Ye(1, 0)) : (ue.key === "ArrowLeft" && Ye(0, 0), ue.key === "ArrowRight" && Ye(1, 0));
    }, vt = (ue) => Array.isArray(z.value) ? ue * T.value > z.value[0] && ue * T.value < z.value[1] : ue * T.value < z.value, Wt = f(() => T.value / (x.value - A.value) * 100), Lt = (ue) => ({
      backgroundColor: vt(ue) ? l(t.color) : s(l(t.color)),
      [D.value]: `${ue * Wt.value}%`,
      transition: $.value ? "none" : "var(--va-slider-pin-transition)"
    }), qt = (ue) => (tt(), t.vertical ? y.value - ue.clientY : ue.clientX - y.value), tt = () => {
      i.value && (b.value = i.value[t.vertical ? "offsetHeight" : "offsetWidth"], y.value = i.value.getBoundingClientRect()[D.value]);
    }, We = (ue) => (T.value * _e.value * ue + A.value * _e.value) / _e.value, Ue = (ue, ge) => t.trackLabel ? typeof t.trackLabel == "function" ? t.trackLabel(ue, ge) : t.trackLabel : ue, qe = (ue) => {
      const ge = S.value;
      Array.isArray(z.value) ? Et(z.value[ge], ue) && (ge === 0 ? z.value = [ue, z.value[1]] : z.value = [z.value[0], ue]) : ue < A.value ? z.value = A.value : ue > x.value ? z.value = x.value : Et(z.value, ue) && (z.value = ue);
    }, Tt = (ue) => {
      const ge = ee.value, Ne = be.value, Ye = Array.isArray(z.value) ? v.value[S.value] : c.value;
      if (Ye?.focus(), ue >= ge[0] && ue <= ge[1]) {
        const Bt = We(Math.round(ue / le.value));
        S.value ? Array.isArray(Ve.value) && Array.isArray(z.value) && ue <= Ve.value[0] ? (z.value = [Bt, z.value[0]], S.value = 0) : qe(Bt) : Array.isArray(Ve.value) && Array.isArray(z.value) && ue >= Ve.value[1] ? (z.value = [z.value[1], Bt], S.value = 1) : qe(Bt);
      } else ue < ge[0] ? qe(Ne[0]) : qe(Ne[1]);
    }, Et = (ue, ge) => JSON.stringify(ue) !== JSON.stringify(ge), Zt = (ue) => {
      if (t.disabled || t.readonly)
        return;
      const ge = "touches" in ue ? qt(ue.touches[0]) : qt(ue);
      Array.isArray(Ve.value) && (S.value = ge > (Ve.value[1] - Ve.value[0]) / 2 + Ve.value[0] ? 1 : 0), $.value = !0, Tt(ge), ie(ue, S.value);
    }, qn = () => {
      document.addEventListener("mousemove", re), document.addEventListener("touchmove", re, { passive: !1 }), document.addEventListener("mouseup", Me), document.addEventListener("mouseleave", Me), document.addEventListener("touchcancel", Me), document.addEventListener("touchend", Me), document.addEventListener("keydown", Xe);
    }, uo = () => {
      document.removeEventListener("mousemove", re), document.removeEventListener("touchmove", re), document.removeEventListener("mouseup", Me), document.removeEventListener("mouseleave", Me), document.removeEventListener("touchcancel", Me), document.removeEventListener("touchend", Me), document.removeEventListener("keydown", Xe);
    }, jn = So(), $o = f(() => `aria-label-id-${jn}`), { tp: Yn } = Ct(), bn = hn(), co = f(() => ({
      role: "slider",
      "aria-valuemin": A.value,
      "aria-valuemax": x.value,
      "aria-label": !bn.label && !t.label ? Yn(t.ariaLabel, { value: String(z.value) }) : void 0,
      "aria-labelledby": bn.label || t.label ? $o.value : void 0,
      "aria-orientation": t.vertical ? "vertical" : "horizontal",
      "aria-disabled": t.disabled,
      "aria-readonly": t.readonly,
      "aria-valuenow": Array.isArray(z.value) ? void 0 : z.value,
      "aria-valuetext": Array.isArray(z.value) ? String(z.value) : void 0
    }));
    return at(() => {
      jp(z.value, T.value, A.value, x.value, t.range) && (tt(), qn());
    }), Gt(uo), Se([
      z,
      () => T.value,
      () => A.value,
      () => x.value,
      () => t.range
    ], ([ue, ge, Ne, Ye, Bt]) => {
      jp(ue, ge, Ne, Ye, Bt);
    }), Se($, (ue) => {
      document.documentElement.style.cursor = ue ? "grabbing" : "";
    }), (ue, ge) => (w(), L("div", se({
      class: ["va-slider", d(J)]
    }, co.value), [
      (e.vertical ? ue.$slots.append : ue.$slots.prepend) ? (w(), L("div", pO, [
        H(ue.$slots, e.vertical ? "append" : "prepend")
      ])) : Y("", !0),
      (ue.$slots.label || e.label) && !e.invertLabel ? (w(), L("span", {
        key: 1,
        class: "va-input__label",
        id: $o.value,
        style: me(ne.value)
      }, [
        H(ue.$slots, "label", {}, () => [
          xe(ke(e.label), 1)
        ])
      ], 12, mO)) : Y("", !0),
      (e.vertical ? e.iconAppend : e.iconPrepend) ? (w(), L("span", gO, [
        G(d(ot), {
          name: e.vertical ? e.iconAppend : e.iconPrepend,
          color: d(l)(ue.$props.color),
          size: 16
        }, null, 8, ["name", "color"])
      ])) : Y("", !0),
      E("div", {
        ref_key: "sliderContainer",
        ref: i,
        class: "va-slider__container",
        onMousedown: Zt,
        onTouchstart: Zt
      }, [
        E("div", {
          class: "va-slider__track",
          "aria-hidden": "true",
          style: me(M.value)
        }, null, 4),
        e.pins ? (w(!0), L(Le, { key: 0 }, je(Re.value, (Ne, Ye) => (w(), L("div", {
          key: Ye,
          class: Be(["va-slider__mark", { "va-slider__mark--active": vt(Ne) }]),
          style: me(Lt(Ne))
        }, null, 6))), 128)) : Y("", !0),
        ue.$props.range ? (w(), L(Le, { key: 1 }, [
          E("div", {
            ref: "process",
            class: Be(["va-slider__track va-slider__track--selected", { "va-slider__track--active": m.value }]),
            "aria-hidden": "true",
            style: me(W.value)
          }, null, 6),
          (w(!0), L(Le, null, je(O.value, (Ne) => (w(), L("div", {
            key: "dot" + Ne,
            ref_for: !0,
            ref: d(p)(Ne),
            class: Be(["va-slider__handler", d(de)]),
            style: me(Z(Ne)),
            tabindex: e.disabled || e.readonly ? void 0 : 0,
            onFocus: (Ye) => (m.value = !0, S.value = Ne),
            onBlur: ge[0] || (ge[0] = (Ye) => m.value = !1)
          }, [
            Te(Ne) ? (w(), L("div", {
              key: 0,
              style: me({ backgroundColor: d(l)(ue.$props.color) }),
              class: "va-slider__handler__dot--focus"
            }, null, 4)) : Y("", !0),
            e.trackLabelVisible ? (w(), L("div", {
              key: 1,
              style: me(ne.value),
              class: "va-slider__handler__dot--value"
            }, [
              H(ue.$slots, "trackLabel", ye(Ie({ value: pe(Ne), order: Ne })), () => [
                xe(ke(Ue(pe(Ne), Ne)), 1)
              ])
            ], 4)) : Y("", !0)
          ], 46, yO))), 128))
        ], 64)) : (w(), L(Le, { key: 2 }, [
          E("div", {
            ref: "process",
            "aria-hidden": "true",
            class: Be(["va-slider__track va-slider__track--selected", { "va-slider__track--active": m.value }]),
            style: me(W.value)
          }, null, 6),
          E("div", {
            ref_key: "dot",
            ref: c,
            class: Be(["va-slider__handler", d(de)]),
            style: me(q.value),
            tabindex: ue.$props.disabled || ue.$props.readonly ? void 0 : 0,
            onFocus: ge[1] || (ge[1] = (Ne) => m.value = !0),
            onBlur: ge[2] || (ge[2] = (Ne) => m.value = !1)
          }, [
            Te(0) ? (w(), L("div", {
              key: 0,
              class: "va-slider__handler__dot--focus",
              style: me({ backgroundColor: d(l)(ue.$props.color) })
            }, null, 4)) : Y("", !0),
            e.trackLabelVisible ? (w(), L("div", {
              key: 1,
              class: "va-slider__handler__dot--value",
              style: me(ne.value)
            }, [
              H(ue.$slots, "trackLabel", ye(Ie({ value: pe() })), () => [
                xe(ke(Ue(pe())), 1)
              ])
            ], 4)) : Y("", !0)
          ], 46, hO)
        ], 64))
      ], 544),
      (e.vertical ? e.iconPrepend : e.iconAppend) ? (w(), L("span", bO, [
        G(d(ot), {
          name: e.vertical ? e.iconPrepend : e.iconAppend,
          color: d(l)(ue.$props.color),
          size: 16
        }, null, 8, ["name", "color"])
      ])) : Y("", !0),
      (ue.$slots.label || e.label) && e.invertLabel ? (w(), L("span", {
        key: 4,
        class: "va-input__label va-input__label--inverse",
        style: me(ne.value),
        id: $o.value
      }, [
        H(ue.$slots, "label", {}, () => [
          xe(ke(e.label), 1)
        ])
      ], 12, _O)) : Y("", !0),
      (e.vertical ? ue.$slots.prepend : ue.$slots.append) ? (w(), L("div", CO, [
        H(ue.$slots, e.vertical ? "prepend" : "append")
      ])) : Y("", !0)
    ], 16));
  }
}), wO = we(SO), Yp = (e) => typeof e == "number", $O = {
  vertical: { type: Boolean, default: !1 },
  disabled: { type: Boolean, default: !1 }
}, kO = (e, o, t) => {
  const a = N(!1), l = N(0), s = N(0), i = N(0), c = (g, y) => {
    const b = g.type === y ? g : g.changedTouches[0];
    return t.vertical ? b.pageY : b.pageX;
  }, p = (g) => {
    t.disabled || !e.value || (a.value = !0, l.value = c(g, "mousedown"), s.value = o.value);
  }, v = (g) => {
    if (!a.value)
      return;
    const b = c(g, "mousemove") - l.value;
    i.value = s.value + Math.floor(b / e.value * 100);
  }, m = () => {
    a.value = !1;
  };
  return $t(["mousemove", "touchmove"], v), $t(["mouseup", "touchcancel"], m), { isDragging: a, startDragging: p, currentSplitterPosition: i };
}, VO = ["aria-label"], xO = { class: "va-split__dragger" }, AO = /* @__PURE__ */ oe({
  name: "VaSplit",
  __name: "VaSplit",
  props: {
    ...Ee,
    ...$O,
    ...Ht,
    modelValue: {
      type: Number,
      default: 50,
      validator: (e) => e <= 100
    },
    maximization: { type: Boolean, default: !1 },
    maximizeStart: { type: Boolean, default: !1 },
    limits: {
      type: Array,
      default: () => [0, 0]
    },
    snapping: {
      type: Array,
      default: void 0
    },
    snappingRange: { type: [Number, String], default: 4 },
    ariaLabel: Fe("$t:splitPanels")
  },
  emits: [...on],
  setup(e, { emit: o }) {
    const t = e, a = o, l = He(), { valueComputed: s } = xt(t, a), i = N(), c = N(16), p = () => {
      var M;
      const { width: j, height: W } = ((M = l.value) == null ? void 0 : M.getBoundingClientRect()) || { width: 0, height: 0 };
      i.value = t.vertical ? W : j, c.value = parseFloat(getComputedStyle(document.documentElement).fontSize);
    };
    at(p), Ta([l], p);
    const v = (M, j) => {
      let W = "", q = "";
      if (Yp(M))
        return M;
      switch (M.split("").filter((Z) => Z && Z !== " ").forEach((Z) => {
        isNaN(+Z) ? q += Z : W += Z;
      }), q) {
        case "%":
          return +W;
        case "px":
          return +W / i.value * 100;
        case "rem":
          return +W * c.value / i.value * 100;
        case "any":
          return ["min", "snapping"].includes(j) ? 0 : 100;
        case "":
          return 100;
        default:
          return yt("Invalid limits measure!"), 0;
      }
    }, m = (M) => {
      if (M === "undefined" || !i.value)
        return;
      let j = 0, W = 100;
      return (ks(M) || Yp(M)) && (j = v(M, "min")), Array.isArray(M) && (j = v(M[0], "min"), W = v(M[1], "max")), j > W && (yt(`Min panels size can not be larger than max one! Passed limit: ${M}.`), W = j), { min: j ?? 0, max: W ?? 100 };
    }, g = f(() => m(t.limits[0]) ?? { min: 0, max: 100 }), y = f(() => m(t.limits[1]) ?? { min: 0, max: 100 }), b = f(() => {
      const M = !(g.value.min + y.value.min > 100);
      return M || yt("The sum of different panels min sizes should be lesser or equal to 100% of the container size!"), M ? y.value.min : 100 - g.value.min;
    }), C = f(() => (Math.ceil(y.value.max + g.value.max) < 100 && yt("The sum of different panels max sizes should be equal to 100% of the container size!"), {
      start: {
        min: g.value.min,
        max: Math.min(g.value.max, 100 - b.value)
      },
      end: {
        min: b.value,
        max: Math.min(y.value.max, 100 - g.value.min)
      }
    })), _ = (M) => M >= C.value.start.min && M >= C.value.end.min && M <= C.value.start.max && M <= C.value.end.max, S = f(() => {
      if (!Array.isArray(t.snapping) || !i.value)
        return;
      let M = t.snapping.map((W) => v(W, "snapping"));
      if (!M.every(_)) {
        const W = M.filter(_);
        yt(`Some of the snapping marks (${M}) are not in allowed range (${Object.values(C.value.start).join("-")} / ${Object.values(C.value.end).join("-")}) and will be removed (${W})!`), M = W;
      }
      return M.every((W, q, Z) => Z[q + 1] ? Math.abs(W - Z[q + 1]) > Number(t.snappingRange) : !0) || yt("Distance between some snapping marks is lesser than snapping range!"), M;
    }), $ = f(() => v(t.snappingRange, "snapping")), A = N(s.value), x = f(() => {
      if (S.value) {
        const M = S.value.find((j) => A.value + $.value > j && A.value - $.value < j);
        if (M)
          return M;
      }
      return Ba(
        A.value,
        Math.max(C.value.start.min, 100 - C.value.end.max),
        Math.min(C.value.start.max, 100 - C.value.end.min)
      );
    }), {
      isDragging: T,
      startDragging: O,
      currentSplitterPosition: D
    } = kO(i, x, t), V = () => {
      !t.maximization || t.disabled || (A.value = t.maximizeStart ? C.value.start.max : 100 - C.value.end.max);
    };
    Se(s, (M) => {
      (M < C.value.start.min || M > 100 - C.value.end.min) && yt("Incorrect `modelValue`. Check current `limits` prop value."), A.value = M;
    }, { immediate: !0 }), Se(D, (M) => {
      A.value = M;
    }), Se(T, (M) => {
      M || (s.value = x.value), document.documentElement.style.cursor = M ? "var(--va-split-dragging-cursor)" : "";
    });
    const P = f(() => t.vertical ? "height" : "width"), R = (M) => {
      let j = M === "start" ? x.value : 100 - x.value;
      return j < 0 && (j = 0), j > 100 && (j = 100), { [P.value]: `${j}%` };
    }, J = f(() => t.disabled ? {} : T.value ? { cursor: "var(--va-split-dragging-cursor)" } : { cursor: t.vertical ? "var(--va-split-vertical-dragger-cursor)" : "var(--va-split-horizontal-dragger-cursor)" }), de = ht("va-split", () => ({
      horizontal: !t.vertical,
      vertical: t.vertical,
      dragging: T.value
    })), { tp: ne } = Ct();
    return (M, j) => (w(), L("section", {
      ref_key: "splitPanelsContainer",
      ref: l,
      class: Be(["va-split", d(de)]),
      "aria-label": d(ne)(M.$props.ariaLabel)
    }, [
      E("div", {
        class: "va-split__panel",
        style: me(R("start"))
      }, [
        H(M.$slots, "start", ye(Ie({ containerSize: i.value })))
      ], 4),
      E("div", xO, [
        E("div", {
          class: "va-split__dragger__overlay",
          style: me(J.value),
          onMousedown: j[0] || (j[0] = $e(
            //@ts-ignore
            (...W) => d(O) && d(O)(...W),
            ["prevent"]
          )),
          onTouchstart: j[1] || (j[1] = $e(
            //@ts-ignore
            (...W) => d(O) && d(O)(...W),
            ["prevent"]
          )),
          onDblclick: $e(V, ["prevent"]),
          onContextmenu: j[2] || (j[2] = $e(() => {
          }, ["prevent"])),
          onDragstart: j[3] || (j[3] = $e(() => {
          }, ["prevent"]))
        }, [
          H(M.$slots, "grabber", {}, () => [
            G(d(ky), {
              class: "va-split__dragger__default",
              vertical: !M.$props.vertical
            }, null, 8, ["vertical"])
          ])
        ], 36)
      ]),
      E("div", {
        class: "va-split__panel",
        style: me(R("end"))
      }, [
        H(M.$slots, "end", ye(Ie({ containerSize: i.value })))
      ], 4)
    ], 10, VO));
  }
}), IO = we(AO), Wy = Symbol("TabsView"), TO = ["aria-disabled"], BO = /* @__PURE__ */ E("div", { class: "va-tabs__slider" }, null, -1), PO = [
  BO
], LO = { class: "va-tabs__tabs-items" }, OO = { class: "va-tabs__content" }, Qo = (e) => e?.clientWidth || 0, EO = /* @__PURE__ */ oe({
  name: "VaTabs",
  __name: "VaTabs",
  props: {
    ...Ht,
    ...Ee,
    modelValue: { type: [String, Number], default: null },
    left: { type: Boolean, default: !0 },
    right: { type: Boolean, default: !1 },
    center: { type: Boolean, default: !1 },
    grow: { type: Boolean, default: !1 },
    hidePagination: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    hideSlider: { type: Boolean, default: !1 },
    vertical: { type: Boolean, default: !1 },
    color: { type: String, default: "primary" },
    prevIcon: { type: String, default: "va-arrow-left" },
    nextIcon: { type: String, default: "va-arrow-right" },
    ariaMoveRightLabel: Fe("$t:movePaginationLeft"),
    ariaMoveLeftLabel: Fe("$t:movePaginationRight")
  },
  emits: ["update:modelValue", "click:next", "click:prev"],
  setup(e, { expose: o, emit: t }) {
    const { tp: a } = Ct(), l = e, s = t, i = He(), c = He(), p = He(), v = N([]), m = N(null), g = N(null), y = N(0), b = N(0), C = N(!1), _ = N(0), S = N(0), $ = N(!1), { valueComputed: A } = xt(l, s), x = Ro({
      VaTab: {
        color: l.color
      }
    }), T = f(() => {
      const { left: ee, right: be, center: Te, grow: ie, disabled: re } = l;
      return {
        "va-tabs__container--left": ee && !be && !Te && !ie,
        "va-tabs__container--right": be,
        "va-tabs__container--center": Te,
        "va-tabs__container--grow": ie,
        "va-tabs__container--disabled": re
      };
    }), O = f(() => ({ "va-tabs--vertical": l.vertical })), { getColor: D } = Ke(), V = f(() => D(l.color)), P = f(() => l.hideSlider ? { display: "none" } : {
      backgroundColor: V.value,
      height: l.vertical ? `${m.value}px` : "",
      width: l.vertical ? "" : `${g.value}px`,
      transform: `translateY(-${b.value}px) translateX(${y.value}px)`,
      transition: $.value ? "var(--va-tabs-slider-wrapper-transition)" : ""
    }), R = f(() => l.vertical ? {
      transform: "translateX(0px)"
    } : {
      transform: `translateX(${S.value - _.value}px)`,
      transition: $.value ? "var(--va-tabs-slider-transition)" : "",
      position: l.hidePagination ? "unset" : "absolute"
    }), J = f(() => _.value === 0), de = f(() => {
      const ee = v.value[v.value.length - 1], be = d(ee.leftSidePosition), Te = d(ee.rightSidePosition), ie = Qo(c.value);
      return Te <= _.value + ie || be <= _.value;
    }), ne = () => {
      g.value = 0, m.value = 0;
    }, M = (ee) => {
      const be = Qo(c.value), Te = d(ee.leftSidePosition), ie = d(ee.rightSidePosition);
      if (!C.value) {
        _.value = 0;
        return;
      }
      if (!(Te - _.value >= 0 && ie - _.value <= be)) {
        if (Te - _.value < 0) {
          _.value = Te;
          return;
        }
        if (ie - _.value > be) {
          _.value = ie - be;
          return;
        }
        _.value = 0;
      }
    }, j = () => {
      if (S.value = 0, !C.value)
        return;
      const ee = Qo(c.value), be = Qo(p.value);
      l.right ? S.value = be - ee : l.center && (S.value = Math.floor((be - ee) / 2));
    }, W = () => {
      ne(), v.value.forEach((ee) => {
        var be;
        ee.updateSidePositions();
        const Te = (((be = ee.name) == null ? void 0 : be.value) || ee.id) === A.value;
        ee.isActive = ee.isActiveRouterLink || Te, ee.isActive && (M(ee), pe(ee));
      }), j();
    };
    Vn(() => {
      W();
    });
    const q = () => {
      const ee = Qo(p.value), be = Qo(i.value);
      requestAnimationFrame(() => {
        C.value = !!(p.value && i.value && ee > be);
      });
    }, Z = () => {
      var ee, be;
      const Te = Qo(c.value);
      let ie = _.value - Te;
      for (let re = 0; re < v.value.length - 1; re++) {
        const Me = d((ee = v.value[re]) == null ? void 0 : ee.leftSidePosition), Oe = d((be = v.value[re + 1]) == null ? void 0 : be.leftSidePosition);
        if (Me > ie && Me < _.value || Oe >= _.value) {
          ie = Me;
          break;
        }
      }
      _.value = Math.max(0, ie), s("click:prev");
    }, z = () => {
      var ee;
      const be = Qo(c.value), Te = _.value + be;
      let ie = Te;
      for (let Oe = 0; Oe < v.value.length - 1 && !(d(v.value[Oe].rightSidePosition) > Te && (ie = d(v.value[Oe].leftSidePosition), _.value < ie)); Oe++)
        ;
      const Me = d((ee = v.value[v.value.length - 1]) == null ? void 0 : ee.rightSidePosition) - be;
      ie = Math.min(Me, ie), _.value = Math.max(0, ie), s("click:next");
    }, pe = (ee) => {
      var be;
      const Te = d(ee.tabElement), ie = Te?.offsetTop || 0, re = Te?.offsetLeft || 0, Me = Te?.clientHeight || 0, Oe = Te?.clientWidth || 0;
      if (l.vertical) {
        const vt = (((be = c.value) == null ? void 0 : be.clientHeight) || 0) - ie - Me;
        b.value = Math.max(vt, 0), m.value = Me, y.value = 0, g.value = 0;
      } else
        y.value = re, g.value = Oe, b.value = 0, m.value = 0;
    }, le = () => {
      $.value || requestAnimationFrame(() => {
        $.value = !0;
      });
    }, _e = (ee) => {
      var be;
      ee && (A.value = ((be = ee.name) == null ? void 0 : be.value) || ee.id, l.stateful && W());
    }, Re = (ee) => {
      var be;
      const Te = v.value.push(ee) - 1;
      ee.id = ((be = ee.name) == null ? void 0 : be.value) || Te;
    }, Ve = (ee) => {
      v.value = v.value.filter((be) => be.id !== ee.id), v.value.forEach((be, Te) => {
        var ie;
        be.id = ((ie = be.name) == null ? void 0 : ie.value) || Te;
      });
    };
    return Co(Wy, {
      parentDisabled: l.disabled,
      selectTab: _e,
      moveToTab: M,
      registerTab: Re,
      unregisterTab: Ve
    }), Se(() => l.modelValue, W), Ta([i], q), Ta([c], W), at(() => {
      requestAnimationFrame(() => {
        le();
      });
    }), o({
      selectTab: _e,
      moveToTab: M,
      movePaginationLeft: Z,
      movePaginationRight: z
    }), (ee, be) => (w(), L("div", {
      class: Be(["va-tabs", O.value])
    }, [
      E("div", {
        ref_key: "wrapper",
        ref: i,
        class: "va-tabs__wrapper",
        role: "tablist",
        "aria-disabled": ee.$props.disabled
      }, [
        C.value && !ee.$props.hidePagination ? (w(), te(d(lt), {
          key: 0,
          class: "va-tabs__pagination",
          "aria-label": d(a)(ee.$props.ariaMoveLeftLabel),
          size: "medium",
          disabled: J.value,
          color: e.color,
          preset: "secondary",
          icon: ee.$props.prevIcon,
          onClick: Z
        }, null, 8, ["aria-label", "disabled", "color", "icon"])) : Y("", !0),
        E("div", {
          ref_key: "container",
          ref: c,
          class: Be(["va-tabs__container", T.value])
        }, [
          E("div", {
            ref_key: "tabs",
            ref: p,
            class: "va-tabs__tabs",
            style: me(R.value)
          }, [
            E("div", {
              class: "va-tabs__slider-wrapper",
              "aria-hidden": "true",
              style: me(P.value)
            }, PO, 4),
            G(d(il), { components: x }, {
              default: U(() => [
                E("div", LO, [
                  H(ee.$slots, "tabs")
                ])
              ]),
              _: 3
            }, 8, ["components"])
          ], 4)
        ], 2),
        C.value && !ee.$props.hidePagination ? (w(), te(d(lt), {
          key: 1,
          class: "va-tabs__pagination",
          "aria-label": d(a)(ee.$props.ariaMoveRightLabel),
          size: "medium",
          color: e.color,
          disabled: de.value,
          preset: "secondary",
          icon: ee.$props.nextIcon,
          onClick: z
        }, null, 8, ["aria-label", "color", "disabled", "icon"])) : Y("", !0)
      ], 8, TO),
      E("div", OO, [
        H(ee.$slots, "default")
      ])
    ], 2));
  }
}), RO = we(EO), DO = { class: "va-tab__content" }, MO = ["textContent"], FO = /* @__PURE__ */ oe({
  name: "VaTab",
  __name: "VaTab",
  props: {
    ...Na,
    ...Ee,
    selected: { type: Boolean, default: !1 },
    color: { type: String, default: "" },
    icon: { type: String, default: "" },
    label: { type: String, default: "" },
    disabled: { type: Boolean },
    name: { type: [String, Number] },
    tag: { type: String, default: "div" }
  },
  emits: ["click", "keydown-enter", "focus"],
  setup(e, { emit: o }) {
    const t = e, a = o, l = He(), s = f(() => Mt(l.value)), i = N(!1), c = N(!1), p = N(0), v = N(0), { keyboardFocusListeners: m, hasKeyboardFocus: g } = Sr(), { tagComputed: y, isActiveRouterLink: b, linkAttributesComputed: C } = ia(t), _ = f(() => ({ "va-tab--disabled": t.disabled })), {
      parentDisabled: S,
      selectTab: $,
      moveToTab: A,
      registerTab: x,
      unregisterTab: T
    } = ut(Wy, {
      parentDisabled: !1,
      tabsList: [],
      selectTab: (q) => q,
      moveToTab: (q) => q,
      registerTab: (q) => q,
      unregisterTab: (q) => q
    }), O = f(() => t.disabled || S ? -1 : 0), { getColor: D } = Ke(), V = f(() => D(t.color)), P = f(() => ({
      color: c.value || i.value ? V.value : "inherit"
    })), R = (q) => {
      c.value = q;
    }, J = () => {
      var q, Z;
      const z = ((q = s.value) == null ? void 0 : q.offsetLeft) || 0, pe = ((Z = s.value) == null ? void 0 : Z.offsetWidth) || 0;
      p.value = z + pe, v.value = z;
    }, de = Hy(l);
    Se(de, () => {
      J();
    });
    const ne = async () => {
      await Vt(), $(W), a("click");
    }, M = async () => {
      await Vt(), $(W), a("keydown-enter");
    }, j = () => {
      g.value && A(W), a("focus");
    }, W = {
      name: f(() => t.name),
      id: null,
      tabElement: s,
      isActive: i,
      tabIndexComputed: O,
      isActiveRouterLink: b,
      rightSidePosition: p,
      leftSidePosition: v,
      onTabClick: ne,
      onTabKeydown: M,
      onFocus: j,
      updateSidePositions: J
    };
    return at(() => {
      x(W);
    }), Gt(() => {
      T(W);
    }), (q, Z) => (w(), te(zt(d(y)), se({
      ref_key: "rootElement",
      ref: l,
      class: ["va-tab", _.value],
      role: "tab",
      "aria-selected": i.value,
      "aria-disabled": q.$props.disabled || d(S),
      style: P.value,
      onMouseenter: Z[0] || (Z[0] = (z) => R(!0)),
      onMouseleave: Z[1] || (Z[1] = (z) => R(!1)),
      onFocus: j,
      onClick: ne,
      onKeydown: Ae(M, ["enter"]),
      tabindex: O.value
    }, Kn(d(m)), d(C)), {
      default: U(() => [
        E("div", DO, [
          H(q.$slots, "default", {}, () => [
            e.icon ? (w(), te(d(ot), {
              key: 0,
              class: "va-tab__icon",
              size: "small",
              name: e.icon
            }, null, 8, ["name"])) : Y("", !0),
            E("span", {
              class: "va-tab__label",
              textContent: ke(e.label)
            }, null, 8, MO)
          ])
        ])
      ]),
      _: 3
    }, 16, ["aria-selected", "aria-disabled", "class", "style", "tabindex"]));
  }
}), NO = we(FO), Fc = (e, ...o) => tl(e) ? e(...o) : e, zO = { class: "va-stepper__default-controls" }, HO = /* @__PURE__ */ oe({
  name: "VaStepperControls",
  __name: "VaStepperControls",
  props: {
    modelValue: { type: [Number, String], required: !0 },
    steps: {
      type: Array,
      required: !0
    },
    nextDisabled: { type: Boolean, required: !0 },
    stepControls: { type: Object, required: !0 },
    finishButtonHidden: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = e, { t } = Ct(), a = f(() => {
      const s = o.steps[Number(o.modelValue)];
      return Fc(s.isLoading) || !1;
    }), l = f(() => {
      const s = o.steps.length - 1;
      return Number(o.modelValue) >= s;
    });
    return (s, i) => (w(), L("div", zO, [
      G(d(lt), {
        preset: "primary",
        disabled: Number(s.$props.modelValue) <= 0,
        loading: a.value,
        onClick: i[0] || (i[0] = (c) => s.$props.stepControls.prevStep())
      }, {
        default: U(() => [
          xe(ke(d(t)("back")), 1)
        ]),
        _: 1
      }, 8, ["disabled", "loading"]),
      l.value ? s.$props.finishButtonHidden ? Y("", !0) : (w(), te(d(lt), {
        key: 1,
        onClick: i[2] || (i[2] = (c) => s.$props.stepControls.finish()),
        loading: a.value
      }, {
        default: U(() => [
          xe(ke(d(t)("finish")), 1)
        ]),
        _: 1
      }, 8, ["loading"])) : (w(), te(d(lt), {
        key: 0,
        onClick: i[1] || (i[1] = (c) => s.$props.stepControls.nextStep()),
        disabled: s.$props.nextDisabled,
        loading: a.value
      }, {
        default: U(() => [
          xe(ke(d(t)("next")), 1)
        ]),
        _: 1
      }, 8, ["disabled", "loading"]))
    ]));
  }
}), ur = (e) => Fc(e.hasError, e) || !1, WO = { class: "va-stepper__step-button__icon" }, UO = /* @__PURE__ */ oe({
  name: "VaStepperStepButton",
  __name: "VaStepperStepButton",
  props: {
    modelValue: { type: Number, required: !0 },
    step: {
      type: Object,
      required: !0
    },
    color: { type: String, required: !0 },
    stepIndex: { type: [Number, String], required: !0 },
    navigationDisabled: { type: Boolean, required: !0 },
    nextDisabled: { type: Boolean, required: !0 },
    focus: { type: Object, required: !0 },
    stepControls: { type: Object, required: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, a = He(), l = f(() => ur(t.step)), s = et("stepIndex"), i = f(() => l.value && t.modelValue === s.value), c = f(() => Fc(t.step.isLoading) || !1), { getColor: p } = Ke(), v = f(() => p(l.value ? "danger" : t.color)), m = (C) => t.nextDisabled && C > t.modelValue, { t: g } = Ct(), y = ht("va-stepper__step-button", () => ({
      active: t.modelValue >= s.value,
      disabled: t.step.disabled || m(s.value),
      "navigation-disabled": t.navigationDisabled,
      error: i.value
    }));
    Se(() => t.focus, () => {
      t.focus.trigger && Vt(() => {
        var C;
        return (C = a.value) == null ? void 0 : C.focus();
      });
    }, { deep: !0 });
    const b = f(() => ({
      tabindex: t.focus.stepIndex === s.value && !t.navigationDisabled ? 0 : void 0,
      "aria-disabled": t.step.disabled || m(s.value) ? !0 : void 0,
      "aria-current": t.modelValue === t.stepIndex ? g("step") : void 0
    }));
    return (C, _) => (w(), L("li", se({
      ref_key: "stepElement",
      ref: a,
      class: ["va-stepper__step-button", d(y)],
      onClick: _[0] || (_[0] = (S) => !C.$props.navigationDisabled && C.$props.stepControls.setStep(d(s))),
      onKeyup: [
        _[1] || (_[1] = Ae((S) => !C.$props.navigationDisabled && C.$props.stepControls.setStep(d(s)), ["enter"])),
        _[2] || (_[2] = Ae((S) => !C.$props.navigationDisabled && C.$props.stepControls.setStep(d(s)), ["space"]))
      ]
    }, b.value, {
      style: `--va-stepper-color: ${String(v.value)}`
    }), [
      E("div", WO, [
        c.value ? (w(), te(d(hr), {
          key: 0,
          color: "currentColor",
          indeterminate: "",
          size: "small"
        })) : e.step.icon ? (w(), te(d(ot), {
          key: 1,
          name: e.step.icon,
          size: "1.3rem"
        }, null, 8, ["name"])) : (w(), L(Le, { key: 2 }, [
          xe(ke(d(s) + 1), 1)
        ], 64))
      ]),
      xe(" " + ke(e.step.label), 1)
    ], 16));
  }
}), GO = { class: "va-stepper__step-content" }, KO = { class: "va-stepper__controls" }, qO = /* @__PURE__ */ oe({
  name: "VaStepper",
  __name: "VaStepper",
  props: {
    ...Ht,
    modelValue: { type: Number, default: 0 },
    steps: {
      type: Array,
      default: () => [],
      required: !0
    },
    color: { type: String, default: "primary" },
    vertical: { type: Boolean, default: !1 },
    navigationDisabled: { type: Boolean, default: !1 },
    controlsHidden: { type: Boolean, default: !1 },
    nextDisabled: { type: Boolean, default: !1 },
    nextDisabledOnError: { type: Boolean, default: !1 },
    finishButtonHidden: { type: Boolean, default: !1 },
    ariaLabel: Fe("$t:progress"),
    linear: { type: Boolean, default: !1 },
    /** Hidden step shown when all steps complete */
    finishStep: { type: Object }
  },
  emits: ["update:modelValue", "finish", "update:steps"],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = He(), { valueComputed: i } = xt(a, l, "modelValue"), c = f(() => a.finishStep ? [...a.steps, a.finishStep] : a.steps), p = (W) => a.finishStep ? W === c.value.length - 1 : !1, v = N({ trigger: !1, stepIndex: a.navigationDisabled ? -1 : a.modelValue }), { getColor: m } = Ke(), g = (W) => a.nextDisabledOnError && ur(c.value[W]) ? !0 : a.nextDisabled, y = (W, q) => {
      for (; W >= 0 && W < c.value.length; ) {
        W += q;
        const Z = c.value[W];
        if (!Z)
          return;
        if (!Z.disabled)
          return Z;
      }
    }, b = (W, q) => {
      for (; W >= 0 && W < c.value.length; ) {
        W += q;
        const Z = c.value[W];
        if (!Z)
          return;
        if (ur(Z) === !0)
          return W;
      }
    }, C = async (W) => {
      var q;
      const Z = c.value[W], z = c.value[i.value], pe = y(W, -1);
      if (Z.disabled)
        return !1;
      if (a.linear && W < i.value)
        return !0;
      const le = b(i.value, 1);
      if (a.linear && le !== void 0 && le < W)
        return !1;
      let _e;
      try {
        _e = await ((q = z.beforeLeave) == null ? void 0 : q.call(z, z, Z));
      } catch (Re) {
        throw new Error(`Error in beforeLeave function: ${Re}`);
      }
      return !(_e === !1 || (z.completed === void 0 && (z.completed = !0), a.linear && pe && !pe.completed) || a.linear && ur(z));
    }, _ = async (W) => {
      await C(W) && (i.value = W);
    }, S = (W) => {
      a.navigationDisabled || (W === "next" ? $(1) : A(1));
    }, $ = (W = 1) => {
      const q = v.value.stepIndex + W;
      if (!g(q)) {
        if (q < c.value.length) {
          if (c.value[q].disabled) {
            $(W + 1);
            return;
          }
          v.value.stepIndex = q, v.value.trigger = !0;
        } else
          for (let Z = 0; Z < c.value.length; Z++)
            if (!c.value[Z].disabled) {
              v.value.stepIndex = Z, v.value.trigger = !0;
              break;
            }
      }
    }, A = (W = 1) => {
      const q = v.value.stepIndex - W;
      if (q >= 0) {
        if (c.value[q].disabled) {
          A(W + 1);
          return;
        }
        v.value.stepIndex = q, v.value.trigger = !0;
      } else
        for (let Z = c.value.length - 1; Z >= 0; Z--)
          if (!c.value[Z].disabled && !g(Z)) {
            v.value.stepIndex = Z, v.value.trigger = !0;
            break;
          }
    }, x = () => {
      requestAnimationFrame(() => {
        var W;
        (W = s.value) != null && W.contains(document.activeElement) || (v.value.stepIndex = a.modelValue, v.value.trigger = !1);
      });
    };
    Se(() => a.modelValue, () => {
      v.value.stepIndex = a.modelValue, v.value.trigger = !1;
    });
    const T = (W = 0) => {
      const q = i.value + 1 + W;
      c.value[q] && (c.value[q].disabled && T(W + 1), _(q));
    }, O = (W = 0) => {
      const q = i.value - 1 - W;
      c.value[q] && (c.value[q].disabled && O(W + 1), _(q));
    }, V = { setStep: _, nextStep: T, prevStep: O, finish: async () => {
      await C(a.steps.length - 1) && l("finish");
    } }, P = (W, q) => ({
      ...V,
      focus: v,
      isActive: a.modelValue === q,
      isCompleted: a.modelValue > q,
      isLastStep: c.value.length - 1 === q,
      isNextStepDisabled: g(q),
      isPrevStepDisabled: q === 0,
      index: q,
      step: W,
      hasError: ur(W)
    }), { tp: R } = Ct(), J = () => {
      v.value.stepIndex = a.modelValue, v.value.trigger = !0;
    }, de = f(() => ({
      role: "group",
      "aria-label": R(a.ariaLabel),
      "aria-orientation": a.vertical ? "vertical" : "horizontal"
    }));
    function ne(W) {
      return ur(c.value[W]) ? "danger" : m(a.color);
    }
    return o({
      modelValue: i,
      focusedStep: v,
      getIterableSlotData: P,
      stepControls: V,
      nextStep: T,
      prevStep: O,
      setStep: _,
      setFocus: S,
      completeStep: (W) => {
        const q = { ...c.value };
        W === !0 && (q[a.modelValue].hasError = !1), q[a.modelValue].completed = W ?? !0, l("update:steps", q);
      },
      setError: (W) => {
        const q = { ...c.value };
        q[a.modelValue].hasError = W ?? !0, q[a.modelValue].completed = !W, l("update:steps", q);
      }
    }), (W, q) => (w(), L("div", se({
      class: ["va-stepper", { "va-stepper--vertical": W.$props.vertical }]
    }, de.value), [
      E("ol", {
        class: Be(["va-stepper__navigation", { "va-stepper__navigation--vertical": W.$props.vertical }]),
        ref_key: "stepperNavigation",
        ref: s,
        onClick: J,
        onKeyup: [
          Ae(J, ["enter"]),
          Ae(J, ["space"]),
          q[0] || (q[0] = Ae((Z) => S("prev"), ["left"])),
          q[1] || (q[1] = Ae((Z) => S("next"), ["right"]))
        ],
        onFocusout: x
      }, [
        (w(!0), L(Le, null, je(c.value, (Z, z) => (w(), L(Le, {
          key: z + Z.label
        }, [
          p(z) ? Y("", !0) : (w(), L(Le, { key: 0 }, [
            z > 0 ? H(W.$slots, "divider", ye(se({ key: 0 }, P(Z, z))), () => [
              E("span", {
                class: Be(["va-stepper__divider", { "va-stepper__divider--vertical": W.$props.vertical }]),
                "aria-hidden": "true"
              }, null, 2)
            ]) : Y("", !0),
            H(W.$slots, `step-button-${z}`, ye(Ie(P(Z, z))), () => [
              G(UO, {
                stepIndex: z,
                color: ne(z),
                modelValue: d(i),
                nextDisabled: e.nextDisabled,
                step: Z,
                stepControls: V,
                navigationDisabled: e.navigationDisabled,
                focus: v.value
              }, null, 8, ["stepIndex", "color", "modelValue", "nextDisabled", "step", "navigationDisabled", "focus"])
            ])
          ], 64))
        ], 64))), 128))
      ], 34),
      E("div", {
        class: Be(["va-stepper__step-content-wrapper", { "va-stepper__step-content-wrapper--vertical": W.$props.vertical }])
      }, [
        E("div", GO, [
          H(W.$slots, `step-content-${p(d(i)) ? "finish" : d(i)}`, ye(Ie(P(c.value[d(i)], d(i)))))
        ]),
        E("div", KO, [
          H(W.$slots, "controls", ye(Ie(P(c.value[d(i)], d(i)))), () => [
            e.controlsHidden ? Y("", !0) : (w(), te(HO, {
              key: 0,
              modelValue: d(i),
              nextDisabled: g(d(i)),
              steps: c.value,
              stepControls: V,
              finishButtonHidden: e.finishButtonHidden
            }, null, 8, ["modelValue", "nextDisabled", "steps", "finishButtonHidden"]))
          ])
        ])
      ], 2)
    ], 16));
  }
}), jO = we(qO), YO = (e) => {
  const o = e.match(/[0-9]{1,2}/g);
  return o ? o.map((t) => Number(t)) : [];
}, XO = (e) => {
  const o = e.match(/pm|am/i);
  return o ? +(o[0].toLowerCase() === "pm") : null;
}, ZO = (e) => {
  const o = /* @__PURE__ */ new Date(), [t, a, l] = YO(e), s = XO(e);
  if (!t)
    return null;
  const i = s !== null && t <= 12, c = i && !!s, p = i && t === 12 ? 0 : t;
  return o.setHours(Math.min(p || 0, i ? 12 : 24) + (c ? 12 : 0)), o.setMinutes(Math.min(a || 0, 60)), o.setSeconds(Math.min(l || 0, 60)), o;
}, JO = (e) => {
  const o = () => e.parse || ZO, t = N(!0), a = (s) => {
    const c = o()(s);
    return c || (t.value = !1), c;
  };
  return {
    parse: (s) => (t.value = !0, a(s)),
    isValid: t
  };
}, QO = (e) => {
  const o = (l) => l ? e.ampm ? l.toLocaleTimeString("en-US") : l.toLocaleTimeString("en-GB") : "", t = (l, s, i) => l.split(":").slice(s, i).join(":"), a = (l) => {
    if (e.view === "seconds")
      return o(l);
    const [s, i] = o(l).split(" ");
    return e.view === "minutes" ? i ? [t(s, 0, 2), i].join(" ") : t(s, 0, 2) : e.view === "hours" ? i ? [t(s, 0, 1), i].join(" ") : t(s, 0, 1) : "";
  };
  return {
    format: (l) => e.format ? e.format(l) : a(l)
  };
}, gr = (e) => e.value ? e.value : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)), Nc = (e) => Array.from(Array(e).keys()), Xp = (e) => (e === 0 ? 12 : e) - +(e > 12) * 12, eE = (e, o = !1) => (e === 12 ? 0 : e) + Number(o) * 12, tE = (e, o, t) => {
  const a = f(() => e.ampm ? 12 : 24), l = f(() => {
    let i = Nc(a.value);
    return e.hoursFilter && (i = i.filter((c) => e.hoursFilter(e.ampm ? c + 12 * Number(t.value) : c))), i.map((c) => e.ampm ? Xp(c) : c);
  }), s = f({
    get: () => {
      if (!o.value)
        return -1;
      if (e.ampm) {
        const c = Xp(o.value.getHours() - 12 * Number(t.value));
        return l.value.findIndex((p) => p === c);
      }
      const i = o.value.getHours();
      return l.value.findIndex((c) => c === i);
    },
    set: (i) => {
      if (e.readonly)
        return;
      const c = e.ampm ? eE(l.value[i], t.value) : l.value[i];
      o.value = new Date(gr(o).setHours(c));
    }
  });
  return f(() => ({
    items: l.value,
    activeItem: s
  }));
}, nE = (e, o) => {
  const t = f(() => {
    const l = Nc(60);
    return e.minutesFilter ? l.filter(e.minutesFilter) : l;
  }), a = f({
    get: () => {
      if (!o.value)
        return -1;
      const l = o.value.getMinutes();
      return t.value.findIndex((s) => s === l);
    },
    set: (l) => {
      if (e.readonly)
        return;
      const s = t.value[l];
      o.value = new Date(gr(o).setMinutes(s));
    }
  });
  return f(() => ({
    items: t.value,
    activeItem: a
  }));
}, oE = (e, o) => {
  const t = f(() => {
    const l = Nc(60);
    return e.secondsFilter ? l.filter(e.secondsFilter) : l;
  }), a = f({
    get: () => {
      if (!o.value)
        return -1;
      const l = o.value.getSeconds();
      return t.value.findIndex((s) => s === l);
    },
    set: (l) => {
      if (e.readonly)
        return;
      const s = t.value[l];
      o.value = new Date(gr(o).setSeconds(s));
    }
  });
  return f(() => ({
    items: t.value,
    activeItem: a
  }));
}, aE = (e, o, t) => f(() => ({
  items: ["AM", "PM"],
  activeItem: f({
    get: () => o.value ? Number(t.value) : -1,
    set: (a) => {
      t.value = !!a;
      const l = gr(o).getHours();
      let s = t.value ? l + 12 : l;
      t.value && l <= 12 && (s = l + 12), !t.value && l >= 12 && (s = l - 12);
      const i = !e.hoursFilter || e.hoursFilter(s);
      e.periodUpdatesModelValue && i && (o.value = new Date(gr(o).setHours(s)));
    }
  })
})), rE = (e, o) => {
  const { view: t } = so(e), a = N(!1);
  Se(o, () => {
    a.value = gr(o).getHours() >= 12;
  }, { immediate: !0 });
  const l = tE(e, o, a), s = nE(e, o), i = oE(e, o), c = aE(e, o, a);
  return {
    columns: f(() => {
      const v = [];
      return t.value === "hours" ? v.push(l.value) : t.value === "minutes" ? v.push(l.value, s.value) : t.value === "seconds" && v.push(l.value, s.value, i.value), e.ampm && !e.hidePeriodSwitch && v.push(c.value), v;
    }),
    isPM: a
  };
}, lE = /* @__PURE__ */ oe({
  name: "VaTimePickerColumnCell",
  __name: "VaTimePickerColumnCell",
  setup(e) {
    const { isHovered: o, onMouseEnter: t, onMouseLeave: a } = cl(), { getTextColor: l, getColor: s } = Ke(), i = f(() => o.value ? {
      color: s(l(s("background-secondary"))),
      background: s("background-secondary")
    } : void 0);
    return (c, p) => (w(), L("div", {
      onMouseenter: p[0] || (p[0] = //@ts-ignore
      (...v) => d(t) && d(t)(...v)),
      onMouseleave: p[1] || (p[1] = //@ts-ignore
      (...v) => d(a) && d(a)(...v)),
      style: me(i.value)
    }, [
      H(c.$slots, "default")
    ], 36));
  }
}), sE = ["onClick"], iE = /* @__PURE__ */ oe({
  name: "VaTimePickerColumn",
  __name: "VaTimePickerColumn",
  props: {
    items: { type: Array, default: () => [] },
    activeItemIndex: { type: Number, default: 0 },
    cellHeight: { type: [Number, String], default: 30 }
  },
  emits: ["item-selected", "update:activeItemIndex", ...zs],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = He(), { focus: i, blur: c } = Wo(s, l), [p] = Ia("activeItemIndex", a, l), v = et("cellHeight");
    Se(p, ($) => {
      m($);
    }), at(() => m(p.value, !1));
    const m = ($, A = !0) => {
      Vt(() => {
        var x, T;
        (T = (x = s.value) == null ? void 0 : x.scrollTo) == null || T.call(x, {
          behavior: A ? "smooth" : "auto",
          top: $ * v.value
        });
      });
    }, g = ($) => {
      p.value = (p.value + ($ || 1)) % a.items.length, Vt(() => m(p.value));
    }, y = ($) => {
      p.value = (p.value - 1 + a.items.length) % a.items.length, Vt(() => m(p.value));
    }, b = ($) => {
      p.value = $;
    }, C = ($) => Number.isInteger($) ? Number($) < 10 ? `0${$}` : `${$}` : $, _ = () => {
      const $ = s.value.scrollTop, A = Math.max(
        ($ - $ % v.value) / v.value,
        $ / v.value
      );
      return A >= a.items.length ? a.items.length - 1 : A < 0 ? 0 : p.value * v.value < $ ? Math.ceil(A) : p.value * v.value > $ ? Math.floor(A) : Math.round(A);
    }, S = bc(() => {
      s.value && p.value !== -1 && (p.value = _());
    }, 200);
    return o({
      focus: i,
      blur: c
    }), ($, A) => (w(), L("div", {
      ref_key: "rootElement",
      ref: s,
      tabindex: "0",
      class: "va-time-picker-column",
      onKeydown: [
        A[0] || (A[0] = Ae($e((x) => g(), ["stop", "prevent"]), ["down"])),
        A[1] || (A[1] = Ae($e((x) => g(5), ["stop", "prevent"]), ["space"])),
        A[2] || (A[2] = Ae($e((x) => y(), ["stop", "prevent"]), ["up"]))
      ]
    }, [
      (w(!0), L(Le, null, je(e.items, (x, T) => (w(), te(lE, {
        key: x,
        onScrollPassive: d(S),
        onTouchmovePassive: d(S),
        onMousewheelPassive: d(S)
      }, {
        default: U(() => [
          E("div", {
            class: Be(["va-time-picker-cell", { "va-time-picker-cell--active": T === $.$props.activeItemIndex }]),
            onClick: (O) => b(T)
          }, [
            H($.$slots, "cell", ye(Ie({ item: x, index: T, activeItemIndex: e.activeItemIndex, items: e.items, formattedItem: C(x) })), () => [
              xe(ke(C(x)), 1)
            ])
          ], 10, sE)
        ]),
        _: 2
      }, 1032, ["onScrollPassive", "onTouchmovePassive", "onMousewheelPassive"]))), 128))
    ], 544));
  }
}), uE = we(iE), cE = (e, o) => f(() => Object.entries(o()).reduce((t, [a, l]) => (t[`--${e}-${Qr(a)}`] = l, t), {})), ws = /* @__PURE__ */ oe({
  name: "VaTimePicker",
  __name: "VaTimePicker",
  props: {
    ...Ht,
    ...ua,
    ...Ee,
    modelValue: { type: Date, required: !1 },
    ampm: { type: Boolean, default: !1 },
    hidePeriodSwitch: { type: Boolean, default: !1 },
    periodUpdatesModelValue: { type: Boolean, default: !0 },
    // Update model value when switching period automatically
    view: { type: String, default: "minutes" },
    hoursFilter: { type: Function },
    minutesFilter: { type: Function },
    secondsFilter: { type: Function },
    framed: { type: Boolean, default: !1 },
    cellHeight: { type: [Number, String], default: 30 },
    visibleCellsCount: { type: [Number, String], default: 7 }
  },
  emits: [...on],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, { valueComputed: s } = xt(a, l), { columns: i } = rE(a, s), c = et("cellHeight"), p = et("visibleCellsCount"), { setItemRef: v, itemRefs: m } = ei(), g = N(), y = (x = 0) => {
      var T;
      (T = m.value[x]) == null || T.focus();
    }, b = (x) => {
      var T;
      x ? (T = m.value[x]) == null || T.blur() : m.value.forEach((O) => O?.blur());
    }, { computedClasses: C } = sy("va-time-picker", a), _ = () => {
      const x = (g?.value || 0) + 1;
      g.value = x % i.value.length, y(g.value);
    }, S = () => {
      const x = (g?.value || 0) - 1 + i.value.length;
      g.value = x % i.value.length, y(g.value);
    }, $ = f(() => ({
      ...C,
      "va-time-picker--framed": a.framed
    })), A = cE("va-time-picker", () => {
      const x = (p.value - 1) / 2 * c.value;
      return {
        height: `${c.value * p.value}px`,
        "cell-height": `${c.value}px`,
        "column-gap-height": `${x}px`
      };
    });
    return o({
      focus: y,
      blur: b,
      focusNext: _,
      focusPrev: S
    }), (x, T) => (w(), L("div", {
      class: Be(["va-time-picker", $.value]),
      style: me(d(A))
    }, [
      (w(!0), L(Le, null, je(d(i), (O, D) => (w(), te(d(uE), {
        key: D,
        ref_for: !0,
        ref: d(v),
        items: O.items,
        tabindex: x.disabled ? -1 : 0,
        "cell-height": d(c),
        activeItemIndex: O.activeItem.value,
        "onUpdate:activeItemIndex": (V) => O.activeItem.value = V,
        onKeydown: [
          T[0] || (T[0] = Ae($e((V) => _(), ["stop", "prevent"]), ["right"])),
          T[1] || (T[1] = Ae($e((V) => _(), ["exact", "stop", "prevent"]), ["tab"])),
          T[2] || (T[2] = Ae($e((V) => S(), ["stop", "prevent"]), ["left"])),
          T[3] || (T[3] = Ae($e((V) => S(), ["shift", "stop", "prevent"]), ["tab"]))
        ],
        onFocus: (V) => g.value = D
      }, null, 8, ["items", "tabindex", "cell-height", "activeItemIndex", "onUpdate:activeItemIndex", "onFocus"]))), 128))
    ], 6));
  }
});
function dE(e, o) {
  let t = -1, a = -1;
  const l = (c) => {
    var p;
    (p = o.onStart) == null || p.call(o, c), clearTimeout(t), t = setTimeout(() => {
      a = setInterval(() => {
        var v;
        return (v = o.onUpdate) == null ? void 0 : v.call(o, c);
      }, o.interval || 100);
    }, d(o.delay) || 500);
  }, s = (c) => {
    var p;
    clearTimeout(t), clearInterval(a), (p = o.onEnd) == null || p.call(o, c);
  }, i = br(e);
  $t(["keydown"], l, i), $t([
    "keyup",
    "blur"
  ], s, !0);
}
const Zp = ct(kn, ["focused", "maxLength", "counterValue"]), fE = /* @__PURE__ */ oe({
  name: "VaTimeInput",
  inheritAttrs: !1,
  __name: "VaTimeInput",
  props: {
    ...Zp,
    ...oo,
    ...Ee,
    ...ml,
    ...ct(ws),
    ...zo,
    ...Ht,
    closeOnContentClick: { type: Boolean, default: !1 },
    offset: { ...oo.offset, default: () => [2, 0] },
    placement: { ...oo.placement, default: "bottom-end" },
    modelValue: { type: Date, default: void 0 },
    clearValue: { type: Date, default: null },
    format: { type: Function },
    parse: { type: Function },
    manualInput: { type: Boolean, default: !1 },
    leftIcon: { type: Boolean, default: !1 },
    icon: { type: String, default: "schedule" },
    ariaLabel: Fe("$t:selectedTime"),
    ariaResetLabel: Fe("$t:resetTime"),
    ariaToggleDropdownLabel: Fe("$t:toggleDropdown")
  },
  emits: [
    ...zs,
    ...sa,
    ...Ys,
    ...on,
    ...Rc,
    "update:modelValue"
  ],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = He(), i = He(), { isOpenSync: c, dropdownProps: p } = Dc(a, l, {
      defaultCloseOnValueUpdate: f(() => Array.isArray(a.view) && a.view.length === 1)
    }), { valueComputed: v } = xt(a, l), { parse: m, isValid: g } = JO(a), { format: y } = QO(a), b = f(() => y(v.value || a.clearValue)), C = f({
      get() {
        return a.disabled || a.readonly ? !1 : c.value;
      },
      set(tt) {
        c.value = tt, tt ? Vt(() => {
          var We;
          return (We = i.value) == null ? void 0 : We.focus();
        }) : Vt(() => {
          var We;
          return (We = s.value) == null ? void 0 : We.focus();
        });
      }
    }), { isFocused: _, focus: S, blur: $, onFocus: A, onBlur: x } = Wo(s), T = (tt) => {
      var We;
      if (a.disabled)
        return;
      const Ue = (We = tt.target) == null ? void 0 : We.value;
      if (!Ue)
        return O();
      const qe = m(Ue);
      g.value && qe ? v.value = qe : (v.value = void 0, g.value = !0);
    }, O = () => J(() => {
      l("update:modelValue", a.clearValue), l("clear"), de(), Te();
    }), {
      computedError: D,
      computedErrorMessages: V,
      listeners: P,
      validationAriaAttributes: R,
      withoutValidation: J,
      resetValidation: de,
      isDirty: ne,
      isTouched: M
    } = Ho(a, l, { reset: O, focus: S, value: v });
    Se(C, (tt) => {
      tt || (M.value = !0);
    });
    const {
      canBeCleared: j,
      clearIconProps: W,
      onFocus: q,
      onBlur: Z
    } = Xs(a, b), z = f(() => j.value && b.value !== y(a.clearValue)), pe = _t(Zp), le = f(() => ({
      ...pe.value,
      focused: _.value,
      error: D.value,
      errorMessages: V.value,
      readonly: a.readonly || !a.manualInput,
      modelValue: b.value
    })), _e = {
      seconds: 1e3,
      minutes: 1e3 * 60,
      hours: 1e3 * 60 * 60
    }, Re = (tt) => {
      "key" in tt && (tt.key === "ArrowDown" && (v.value = new Date(Number(v.value) - _e[a.view]), tt.preventDefault()), tt.key === "ArrowUp" && (v.value = new Date(Number(v.value) + _e[a.view]), tt.preventDefault()));
    };
    dE(s, {
      onStart: Re,
      onUpdate: Re
    });
    const Ve = {
      onFocus: () => {
        a.disabled || (A(), !a.readonly && q());
      },
      onBlur: () => {
        a.disabled || (x(), !a.readonly && (Z(), P.onBlur()));
      }
    }, ee = hn(), be = f(() => {
      const tt = [
        a.leftIcon && "prependInner",
        (!a.leftIcon || a.clearable) && "icon"
      ];
      return Object.keys(ee).filter((We) => !tt.includes(We));
    }), Te = () => {
      C.value = !1;
    }, ie = (tt, We, Ue) => {
      C.value = !0;
    }, re = (tt) => c.value ? !1 : a.disabled || a.readonly ? !0 : tt === void 0 ? !1 : a.manualInput && tt?.code !== "Space", Me = (tt) => {
      re(tt instanceof KeyboardEvent ? tt : void 0) || (C.value = !C.value);
    }, Oe = f(() => a.disabled ? {} : a.manualInput ? { cursor: "text" } : { cursor: "pointer" }), Xe = f(() => a.manualInput ? a.disabled || a.readonly ? -1 : 0 : -1), vt = f(() => ({
      role: "button",
      "aria-hidden": !1,
      name: a.icon,
      color: "secondary",
      tabindex: Xe.value
    })), { tp: Wt } = Ct();
    la();
    const Lt = f(() => ({
      ...p.value,
      innerAnchorSelector: ".va-input-wrapper__field",
      trigger: ["click", "right-click", "space", "enter"]
    })), qt = _t(ct(ws));
    return o({
      isFocused: _,
      isValid: g,
      value: v,
      isDirty: ne,
      isTouched: M,
      focus: S,
      blur: $,
      reset: O,
      withoutValidation: J,
      resetValidation: de,
      toggleDropdown: Me,
      showDropdown: ie,
      hideDropdown: Te
    }), (tt, We) => (w(), te(d(Dn), se({
      modelValue: C.value,
      "onUpdate:modelValue": We[1] || (We[1] = (Ue) => C.value = Ue),
      class: ["va-time-input", tt.$attrs.class],
      style: tt.$attrs.style
    }, Lt.value), {
      anchor: U(() => [
        G(d(kn), se({
          class: "va-time-input__anchor",
          ref_key: "input",
          ref: s,
          style: Oe.value
        }, { ...le.value, ...d(R), ...Ve }, { onChange: T }), un({
          icon: U(() => [
            z.value ? (w(), te(d(ot), se({
              key: 0,
              class: "va-time-input__clear-button"
            }, { ...vt.value, ...d(W) }, {
              "aria-label": d(Wt)(tt.$props.ariaResetLabel),
              onClick: $e(O, ["stop"]),
              onKeydown: [
                Ae($e(O, ["stop"]), ["enter"]),
                Ae($e(O, ["stop"]), ["space"])
              ]
            }), null, 16, ["aria-label", "onKeydown"])) : Y("", !0),
            !tt.$props.leftIcon && tt.$props.icon ? (w(), te(d(ot), se({
              key: 1,
              class: "va-time-input__right-button va-time-input__side-button",
              "aria-label": d(Wt)(tt.$props.ariaToggleDropdownLabel)
            }, vt.value), null, 16, ["aria-label"])) : Y("", !0)
          ]),
          _: 2
        }, [
          je(be.value, (Ue) => ({
            name: Ue,
            fn: U((qe) => [
              H(tt.$slots, Ue, ye(Ie({ ...qe, toggleDropdown: Me, showDropdown: ie, hideDropdown: Te, isOpen: d(c), focus: d(S) })))
            ])
          })),
          tt.$slots.prependInner || tt.$props.leftIcon ? {
            name: "prependInner",
            fn: U((Ue) => [
              H(tt.$slots, "prependInner", ye(Ie({ ...Ue, toggleDropdown: Me, showDropdown: ie, hideDropdown: Te, isOpen: d(c), focus: d(S) }))),
              tt.$props.leftIcon ? (w(), te(d(ot), se({
                key: 0,
                class: "va-time-input__left-button va-time-input__side-button",
                "aria-label": d(Wt)(tt.$props.ariaToggleDropdownLabel)
              }, vt.value), null, 16, ["aria-label"])) : Y("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["style"])
      ]),
      default: U(() => [
        G(d(La), {
          "no-padding": "",
          onKeydown: [
            Ae($e(Te, ["prevent"]), ["esc"]),
            Ae($e(Te, ["prevent"]), ["enter"])
          ]
        }, {
          default: U(() => [
            G(ws, se({
              ref_key: "timePicker",
              ref: i
            }, d(qt), {
              modelValue: d(v),
              "onUpdate:modelValue": We[0] || (We[0] = (Ue) => yn(v) ? v.value = Ue : null)
            }), null, 16, ["modelValue"])
          ]),
          _: 1
        }, 8, ["onKeydown"])
      ]),
      _: 3
    }, 16, ["modelValue", "class", "style"]));
  }
}), vE = we(fE), Jp = (e) => e?.props, Qp = (e) => {
  var o;
  return !!((o = e?.props) != null && o.active) || !1;
}, pE = (e) => e.type === Le, mE = (e) => e && e.length === 0;
function gE(e) {
  var o;
  const t = (o = e.default) == null ? void 0 : o.call(e);
  return !t || mE(t) ? [] : pE(t[0]) ? t[0].children : t;
}
const yE = (e) => {
  const o = gE(e.slots);
  return o.forEach((t, a) => {
    Jp(t) || (t.props = {});
    const l = Jp(t);
    l.vertical = e.props.vertical, e.props.centered && (l.inverted = !!(a % 2)), a === 0 && (l.isFirst = !0), a === o.length - 1 && (l.isLast = !0);
    const s = l.active;
    if (!s)
      return;
    a === 0 && (l.activePrevious = s), a === o.length - 1 && (l.activeNext = s), Qp(o[a - 1]) && (l.activePrevious = !0), Qp(o[a + 1]) && (l.activeNext = !0);
  }), o;
}, hs = "va-timeline", hE = {
  name: hs,
  props: {
    ...Ee,
    vertical: { type: Boolean },
    centered: { type: Boolean },
    alignTop: { type: Boolean }
  },
  setup(e, { slots: o }) {
    return () => bt(
      "div",
      {
        class: {
          [hs]: !0,
          [`${hs}--vertical`]: e.vertical,
          [`${hs}--align-top`]: e.alignTop
        }
      },
      yE({ props: e, slots: o })
    );
  }
}, bE = we(hE), Eo = "va-timeline-separator", _E = oe({
  name: Eo,
  props: {
    ...Ee,
    color: { type: String, default: "primary" },
    vertical: { type: Boolean },
    active: { type: Boolean },
    activePrevious: { type: Boolean },
    activeNext: { type: Boolean }
  },
  setup(e) {
    const { getColor: o } = Ke();
    return () => bt(
      "div",
      {
        class: {
          [Eo]: !0,
          [`${Eo}--vertical`]: e.vertical
        }
      },
      [
        bt("div", {
          class: {
            [`${Eo}__line`]: !0,
            [`${Eo}__line--active`]: e.activePrevious
          },
          style: {
            backgroundColor: o(e.activePrevious ? e.color : "divider")
          }
        }),
        bt("div", {
          class: {
            [`${Eo}__center`]: !0,
            [`${Eo}__center--active`]: e.active
          },
          style: {
            backgroundColor: o(e.active ? e.color : "divider")
          }
        }),
        bt("div", {
          class: {
            [`${Eo}__line`]: !0,
            [`${Eo}__line--active`]: e.activeNext
          },
          style: {
            backgroundColor: o(e.activeNext ? e.color : "divider")
          }
        })
      ]
    );
  }
}), Uy = we(_E), Ca = "va-timeline-item", em = ct(Uy), CE = oe({
  name: Ca,
  props: {
    ...Ee,
    ...em,
    color: { type: String, default: "primary" },
    isFirst: { type: Boolean },
    isLast: { type: Boolean },
    inverted: { type: Boolean }
  },
  setup(e, { slots: o }) {
    const t = [
      bt(
        Uy,
        { ..._t(em).value }
      )
    ], a = e.inverted ? o.after : o.before;
    a && t.unshift(
      bt(
        "div",
        { class: `${Ca}__before` },
        a()
      )
    );
    const l = e.inverted ? o.before : o.after;
    return l && t.push(
      bt(
        "div",
        { class: `${Ca}__after` },
        l()
      )
    ), () => bt(
      "div",
      {
        class: [
          { [Ca]: !0 },
          { [`${Ca}--vertical`]: e.vertical },
          { [`${Ca}--is-first`]: e.isFirst },
          { [`${Ca}--is-last`]: e.isLast }
        ]
      },
      t
    );
  }
}), SE = we(CE), wE = we(ws), $E = {
  nodes: {
    type: Array,
    default: []
  },
  stateful: {
    type: Boolean,
    default: !0
  },
  selectable: {
    type: Boolean,
    default: !1
  },
  selectionType: {
    type: String,
    default: "leaf",
    validator: (e) => ["leaf", "independent"].includes(e)
  },
  valueBy: {
    type: [String, Function],
    default: "id"
  },
  textBy: {
    type: [String, Function],
    default: "label"
  },
  trackBy: {
    type: [String, Function],
    default: "id"
  },
  iconBy: {
    type: [String, Function],
    default: "icon"
  },
  disabledBy: {
    type: [String, Function],
    default: "disabled"
  },
  expandedBy: {
    type: [String, Function],
    default: "expanded"
  },
  checkedBy: {
    type: [String, Function],
    default: "checked"
  },
  childrenBy: {
    type: [String, Function],
    default: "children"
  },
  expandAll: {
    type: Boolean,
    default: !1
  },
  expanded: {
    type: Array,
    default: []
  },
  expandNodeBy: {
    type: String,
    default: "leaf"
  },
  filter: {
    type: String,
    default: ""
  },
  filterMethod: {
    type: Function,
    default: void 0
  },
  checked: {
    type: Array,
    default: []
  },
  color: {
    type: String,
    default: "primary"
  }
}, kE = ["update:modelValue", "update:checked", "update:expanded", "update:selected"], VE = (e) => {
  const o = (y) => {
    const b = typeof y;
    return b === "string" || b === "number";
  }, t = (y, b) => !b || o(y) ? y : ay(y, b), a = (y) => t(y, e.valueBy), l = (y) => e.valueBy && e.nodes.find((b) => y === a(b)) || y, s = (y) => t(y, e.textBy), i = (y) => t(y, e.checkedBy), c = (y) => t(y, e.disabledBy), p = (y) => t(y, e.expandedBy), v = (y) => t(y, e.trackBy), m = (y) => t(y, e.childrenBy) ?? [], g = (y, b) => {
    y.forEach((C) => {
      const _ = C.children || [];
      _.length && g(_, b), b(C);
    });
  };
  return {
    getText: s,
    getValue: a,
    getChecked: i,
    getTrackBy: v,
    getChildren: m,
    getDisabled: c,
    getExpanded: p,
    iterateNodes: g,
    getNodeByValue: l,
    getNodeProperty: t
  };
}, Gy = Symbol("TreeView"), xE = (e, o) => {
  const { emit: t, toggleNode: a, toggleCheckbox: l } = o, s = (S) => S?.getAttribute("aria-expanded") === "true", i = (S) => {
    var $;
    return (($ = S?.parentElement) == null ? void 0 : $.closest(".va-tree-node")) || null;
  }, c = (S) => S?.previousElementSibling, p = (S) => {
    if (!S)
      return null;
    let $ = c(S), A = s($) && y($);
    if (A)
      do
        if (s(A)) {
          if (A = y(A), A)
            continue;
          break;
        } else {
          $ = A;
          break;
        }
      while (!0);
    return $ || i(S);
  }, v = (S) => S?.nextElementSibling, m = (S) => {
    if (!S)
      return null;
    let $ = v(S);
    const A = s(S);
    if (!$) {
      let x = i(S);
      do
        if (v(x)) {
          $ = v(x);
          break;
        } else {
          if (x = i(x), x)
            continue;
          break;
        }
      while (!0);
    }
    return A ? g(S) : $;
  }, g = (S) => {
    var $;
    return (($ = S?.querySelector(".va-tree-node-children")) == null ? void 0 : $.firstElementChild) || null;
  }, y = (S) => {
    var $;
    return (($ = S?.querySelector(".va-tree-node-children")) == null ? void 0 : $.lastElementChild) || null;
  }, b = (S, $, A) => {
    var x, T;
    const O = s(S);
    $ === "left" ? O ? a(A) : (x = i(S)) == null || x.focus() : O ? (T = g(S)) == null || T.focus() : a(A);
  }, C = (S, $) => {
    var A, x;
    $ === "up" ? (A = p(S)) == null || A.focus() : (x = m(S)) == null || x.focus();
  };
  return { handleKeyboardNavigation: (S, $) => {
    const A = S.target;
    switch (S.code) {
      case "ArrowUp":
        C(A, "up");
        break;
      case "ArrowRight":
        b(A, "right", $);
        break;
      case "ArrowDown":
        C(A, "down");
        break;
      case "ArrowLeft":
        b(A, "left", $);
        break;
      case "Space":
        if (e.selectable) {
          const x = typeof $.checked < "u" ? !$.checked : null;
          l($, x);
        } else
          t("update:selected", $);
        break;
      case "Escape":
        e.selectable || t("update:selected", null), A.blur();
        break;
      default:
        A.blur();
    }
  } };
}, AE = xE, IE = (e, o) => {
  const { getColor: t } = Ke(), a = f(() => t(e.color)), l = f(() => e.selectionType === "leaf"), {
    getText: s,
    getValue: i,
    getChecked: c,
    getTrackBy: p,
    getChildren: v,
    getDisabled: m,
    getExpanded: g,
    iterateNodes: y,
    getNodeProperty: b
  } = VE(e), { nodes: C, expandAll: _, filter: S, filterMethod: $, textBy: A } = so(e), { valueComputed: x } = xt(e, o, "expanded"), { valueComputed: T } = xt(e, o, "checked"), O = N(), D = f({
    get: () => O.value,
    set: (Z) => {
      const z = i(Z);
      O.value !== z && (O.value = z, o("update:selected", Z));
    }
  }), V = (Z, z, pe) => {
    pe ? Z.value = Z.value.concat(z).filter((le, _e, Re) => Re.indexOf(le) === _e) : Z.value = Z.value.filter((le) => !z.includes(le));
  }, P = (Z, z) => {
    let pe = z === null ? !0 : z;
    z && Z.indeterminate && (pe = !1);
    const le = [i(Z)];
    if (l.value && Z.hasChildren) {
      const _e = (Re) => {
        Re.forEach((Ve) => {
          if (Ve.disabled)
            return;
          const ee = v(Ve);
          ee.length && _e(ee), le.push(i(Ve));
        });
      };
      _e(v(Z));
    }
    V(T, le, pe);
  }, R = (Z) => {
    Z.expanded = !Z.expanded;
  }, J = ({ node: Z, level: z, children: pe = [], computedFilterMethod: le }) => {
    var _e;
    const Re = i(Z);
    let Ve = !0;
    const ee = !!pe.length;
    let be = !1, Te = T.value.includes(Re) || !1;
    if (l.value && ee) {
      const ie = pe.every((re) => re.checked);
      Te = ie, be = !ie && pe.some((re) => re.indeterminate || re.checked), be && (Te = null);
    }
    return S.value && (Ve = pe?.some((ie) => ie.matchesFilter) || ((_e = le.value) == null ? void 0 : _e.call(le, Z, S.value, A.value))), {
      ...Z,
      level: z,
      checked: Te,
      children: pe,
      get disabled() {
        return m(Z) || !1;
      },
      get expanded() {
        const ie = e.expandedBy;
        return ie in Z ? Z[ie] : x.value.includes(Re) || !1;
      },
      set expanded(ie) {
        const re = e.expandedBy;
        Z[re] = ie, ee && V(x, [i(Z)], ie);
      },
      hasChildren: ee,
      matchesFilter: Ve,
      indeterminate: be
    };
  }, de = f(() => $?.value ? $.value : (Z, z) => s(Z).toLowerCase().includes(z.toLowerCase())), ne = (Z, z = 0) => Z.map((pe) => {
    const le = v(pe);
    if (le.length) {
      const _e = ne(le, z + 1);
      return J({ node: pe, level: z, children: _e, computedFilterMethod: de });
    }
    return J({ node: pe, level: z, computedFilterMethod: de });
  }), M = (Z) => Z.filter((z) => (z.children && (z.children = M(z.children)), z.children.length === 0 && (z.hasChildren = !1), z.matchesFilter)), { handleKeyboardNavigation: j } = AE(e, { emit: o, toggleCheckbox: P, toggleNode: R });
  Co(Gy, {
    selectedNodeComputed: D,
    colorComputed: a,
    iconBy: e.iconBy,
    selectable: e.selectable,
    expandNodeBy: e.expandNodeBy,
    getText: s,
    getValue: i,
    getTrackBy: p,
    toggleNode: R,
    toggleCheckbox: P,
    getNodeProperty: b,
    handleKeyboardNavigation: j
  });
  const W = f(() => ne(C.value));
  return (() => {
    const Z = [], z = [];
    y(C.value, (pe) => {
      (_.value || g(pe)) && Z.push(i(pe)), c(pe) && z.push(i(pe));
    }), Z.length && V(x, Z, !0), z.length && V(T, z, !0);
  })(), {
    treeItems: f(() => M(W.value)),
    getText: s,
    getTrackBy: p,
    toggleCheckbox: P
  };
}, TE = IE, BE = ["role", "aria-expanded", "aria-disabled", "aria-checked", "tabindex"], PE = { class: "va-tree-node-root" }, LE = {
  key: 2,
  class: "va-tree-node-content__item"
}, OE = ["aria-hidden"], EE = "The VaTreeNode component should be used in the context of VaTreeView component", RE = /* @__PURE__ */ oe({
  name: "VaTreeNode",
  __name: "VaTreeNode",
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const o = e, {
      iconBy: t,
      selectable: a,
      expandNodeBy: l,
      colorComputed: s,
      selectedNodeComputed: i,
      getText: c,
      getTrackBy: p,
      toggleNode: v,
      toggleCheckbox: m,
      getNodeProperty: g,
      handleKeyboardNavigation: y
    } = hl(Gy, EE), b = f(() => c(o.node) || ""), C = f(() => o.node.hasChildren ? !!o.node.expanded : void 0), _ = f(() => g(o.node, t)), S = f(() => o.node.hasChildren ? "group" : "treeitem"), $ = ht("va-tree-node", () => ({
      disabled: !!o.node.disabled,
      checked: !!o.node.checked,
      hasChildren: !!o.node.hasChildren,
      [`level-${o.node.level}`]: !0,
      [`expand-by-${l}`]: !0
    })), A = ht("va-tree-node-children", () => ({
      expanded: !!C.value
    })), x = ht("va-tree-node-content", () => ({
      indent: o.node.hasChildren === !1
    })), T = ht("va-tree-node-content", () => ({
      clickable: o.node.hasChildren === !0 && l === "node"
    })), O = f(() => o.node.disabled ? -1 : 0), D = (V) => {
      l === (l === "node" && V === "leaf" ? "node" : V) && v(o.node), i.value = o.node;
    };
    return (V, P) => {
      const R = ze("va-tree-node", !0);
      return w(), L("div", {
        class: Be(["va-tree-node", d($)]),
        role: S.value,
        "aria-expanded": C.value,
        "aria-disabled": V.$props.node.disabled,
        "aria-checked": !!V.$props.node.checked,
        tabindex: O.value,
        onKeydown: [
          P[4] || (P[4] = Ae($e((J) => d(y)(J, V.$props.node), ["stop", "prevent"]), ["up"])),
          P[5] || (P[5] = Ae($e((J) => d(y)(J, V.$props.node), ["stop", "prevent"]), ["right"])),
          P[6] || (P[6] = Ae($e((J) => d(y)(J, V.$props.node), ["stop", "prevent"]), ["down"])),
          P[7] || (P[7] = Ae($e((J) => d(y)(J, V.$props.node), ["stop", "prevent"]), ["left"])),
          P[8] || (P[8] = Ae($e((J) => d(y)(J, V.$props.node), ["stop", "prevent"]), ["space"])),
          P[9] || (P[9] = Ae($e((J) => d(y)(J, V.$props.node), ["stop", "prevent"]), ["esc"]))
        ]
      }, [
        E("div", PE, [
          E("div", {
            class: Be(["va-tree-node-content", d(x)]),
            onClick: P[3] || (P[3] = (J) => D("node"))
          }, [
            V.$props.node.hasChildren ? (w(), L("div", {
              key: 0,
              class: "va-tree-node-content__item va-tree-node-content__item--leaf",
              onClick: P[0] || (P[0] = $e((J) => D("leaf"), ["stop"]))
            }, [
              H(V.$slots, "icon-toggle", ye(Ie(V.$props.node)), () => [
                G(d(ot), {
                  name: C.value ? "keyboard_arrow_down" : "keyboard_arrow_right",
                  size: "20px"
                }, null, 8, ["name"])
              ])
            ])) : Y("", !0),
            d(a) ? (w(), L("div", {
              key: 1,
              class: "va-tree-node-content__item",
              onClick: P[2] || (P[2] = $e(() => {
              }, ["stop"]))
            }, [
              H(V.$slots, "checkbox", ye(Ie(V.$props.node)), () => [
                G(d(pl), {
                  "model-value": V.$props.node.checked,
                  color: d(s),
                  indeterminate: "",
                  "onUpdate:modelValue": P[1] || (P[1] = (J) => d(m)(V.$props.node, J)),
                  class: "va-tree-node__checkbox"
                }, null, 8, ["model-value", "color"])
              ])
            ])) : Y("", !0),
            _.value ? (w(), L("div", LE, [
              H(V.$slots, "icon", ye(Ie(V.$props.node)), () => [
                G(d(ot), {
                  name: _.value,
                  size: "small"
                }, null, 8, ["name"])
              ])
            ])) : Y("", !0),
            E("div", {
              class: Be(["va-tree-node-content__body", d(T)])
            }, [
              H(V.$slots, "content", ye(Ie(V.$props.node)), () => [
                xe(ke(b.value), 1)
              ])
            ], 2)
          ], 2)
        ]),
        ao(E("div", {
          "aria-hidden": !V.$props.node.expanded,
          class: Be(["va-tree-node-children", d(A)])
        }, [
          (w(!0), L(Le, null, je(V.$props.node.children, (J) => (w(), te(R, {
            key: d(p)(J),
            node: J
          }, un({ _: 2 }, [
            je(V.$slots, (de, ne) => ({
              name: ne,
              fn: U((M) => [
                H(V.$slots, ne, ye(Ie(M)))
              ])
            }))
          ]), 1032, ["node"]))), 128))
        ], 10, OE), [
          [Xr, V.$props.node.hasChildren]
        ])
      ], 42, BE);
    };
  }
}), DE = we(RE), ME = {
  class: "va-tree-view",
  role: "tree"
}, FE = /* @__PURE__ */ oe({
  name: "VaTreeView",
  __name: "VaTreeView",
  props: { ...$E },
  emits: [...kE],
  setup(e, { emit: o }) {
    const t = e, a = o, { treeItems: l, getTrackBy: s } = TE(t, a);
    return (i, c) => (w(), L("div", ME, [
      i.$props.filter && !d(l).length ? H(i.$slots, "not-found", { key: 0 }, () => [
        xe("No matching nodes found")
      ]) : (w(!0), L(Le, { key: 1 }, je(d(l), (p) => (w(), te(d(DE), {
        key: d(s)(p),
        node: p
      }, un({ _: 2 }, [
        je(i.$slots, (v, m) => ({
          name: m,
          fn: U((g) => [
            H(i.$slots, m, ye(Ie(g)))
          ])
        }))
      ]), 1032, ["node"]))), 128))
    ]));
  }
}), NE = we(FE), zE = { class: "va-scroll-container__content" }, HE = /* @__PURE__ */ oe({
  name: "VaScrollContainer",
  __name: "VaScrollContainer",
  props: {
    ...Ea,
    vertical: { type: Boolean, default: !1 },
    horizontal: { type: Boolean, default: !1 },
    color: { type: String, default: "secondary" },
    rtl: { type: Boolean, default: !1 },
    gradient: { type: Boolean, default: !1 },
    sizesConfig: {
      type: Object,
      default: () => ({
        defaultSize: 4,
        sizes: { small: 4, medium: 6, large: 8 }
      })
    },
    size: {
      type: String,
      default: "small",
      validator: (e) => ["small", "medium", "large"].includes(e)
    }
  },
  setup(e) {
    const o = e, { getColor: t } = Ke(), { sizeComputed: a } = Ra(o), l = f(() => o.horizontal ? "auto" : "hidden"), s = f(() => o.vertical ? "auto" : "hidden"), i = f(() => {
      const v = t(o.color);
      return o.gradient ? `linear-gradient(0deg, var(--va-scroll-container-scrollbar-gradient-to) 0%, ${v} 100%)` : v;
    }), c = f(() => a.value), p = f(() => o.rtl ? "rtl" : "ltr");
    return (v, m) => (w(), L("div", {
      class: "va-scroll-container",
      style: me(`--va-scroll-color: ${String(i.value)};--va-scrollbar-size: ${String(c.value)};--va-overflow-x: ${String(l.value)};--va-overflow-y: ${String(s.value)};--va-scrollbar-position: ${String(p.value)}`)
    }, [
      E("div", zE, [
        H(v.$slots, "default")
      ])
    ], 4));
  }
}), Ky = we(HE), WE = { class: "va-viewer-content" }, UE = /* @__PURE__ */ oe({
  name: "VaViewer",
  inheritAttrs: !1,
  __name: "VaViewer",
  setup(e, { expose: o }) {
    const t = N(), a = N(), l = Fs(), s = N(!0), i = f(() => l.value && !s.value), c = () => s.value = !1, p = () => s.value = !0, v = hn(), m = () => {
      v.anchor || c();
    };
    Hs([t, a], p);
    const g = Fa(), y = f(() => {
      var b;
      return (b = g.value) == null ? void 0 : b.body;
    });
    return o({
      openViewer: c,
      closeViewer: p
    }), (b, C) => (w(), L(Le, null, [
      E("div", se({ class: "va-viewer" }, b.$attrs, { onClick: m }), [
        H(b.$slots, "anchor", ye(Ie({ openViewer: c }))),
        b.$slots.anchor ? Y("", !0) : H(b.$slots, "default", { key: 0 })
      ], 16),
      i.value ? (w(), te(na, {
        key: 0,
        to: y.value
      }, [
        E("div", WE, [
          E("div", {
            ref_key: "content",
            ref: t,
            class: "va-viewer-content__main-area"
          }, [
            b.$slots.image ? Y("", !0) : H(b.$slots, "default", { key: 0 }),
            H(b.$slots, "image")
          ], 512),
          E("div", {
            ref_key: "controls",
            ref: a,
            class: "va-viewer-content__controls-panel"
          }, [
            H(b.$slots, "controls"),
            H(b.$slots, "close", ye(Ie({ close: p })), () => [
              E("button", {
                class: "va-viewer-content__close-button",
                onClick: p
              }, [
                G(d(ot), {
                  name: "close",
                  color: "backgroundPrimary"
                })
              ])
            ])
          ], 512)
        ])
      ], 8, ["to"])) : Y("", !0)
    ], 64));
  }
}), GE = we(UE), KE = oe({
  name: "VaValue",
  props: {
    defaultValue: { type: null, required: !1, default: !1 }
  },
  setup(e, { slots: o }) {
    const t = N(e.defaultValue), a = new Proxy(t, {
      get(l, s) {
        return s === "value" ? l.value : l[s];
      },
      set(l, s, i) {
        return s === "value" && (l.value = i), !0;
      }
    });
    return () => bt(Le, [lg(o.default, a)]);
  }
}), qE = we(KE), jE = (e) => {
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.top = "0", o.style.left = "0", o.style.width = "auto";
  const { font: t } = window.getComputedStyle(e);
  return o.style.font = t, o.textContent = "Vuestic", o.style.zIndex = "-1", o.style.pointerEvents = "none", o.style.opacity = "0", o.ariaHidden = "true", o.innerText = e.value, o;
}, YE = (e, o) => {
  const t = N(), a = N();
  return Se(e, (l) => {
    var s, i;
    l && (t.value = jE(l), (i = (s = e.value) == null ? void 0 : s.parentElement) == null || i.appendChild(t.value));
  }), Ta(t, (l) => {
    !l || !e.value || (a.value = l[0].contentRect.height);
  }), Se(o, (l) => {
    t.value && (t.value.innerText = String(l), t.value.innerHTML += "&nbsp;;");
  }), a;
}, XE = ["rows", "loading", "ariaLabel"], tm = (e) => {
  if (e > 0)
    return !0;
  throw new Error(
    `\`minRows|maxRows\` must be a positive integer greater than 0, but ${e} is provided`
  );
}, { createEmits: ZE, createListeners: JE } = Ha([
  "input",
  "change",
  "click",
  "update:modelValue"
]), nm = ct(kn), QE = /* @__PURE__ */ oe({
  name: "VaTextarea",
  __name: "VaTextarea",
  props: {
    ...ua,
    ...nm,
    ...Ht,
    ...zo,
    modelValue: { type: [String, Number], default: "" },
    placeholder: { type: String },
    autosize: { type: Boolean, default: !1 },
    minRows: {
      type: [Number, String],
      default: 1,
      validator: tm
    },
    maxRows: {
      type: [Number, String],
      validator: tm
    },
    resize: {
      type: Boolean,
      default: !0
    },
    clearValue: {
      type: [String],
      default: ""
    }
  },
  emits: [...ZE(), ...sa],
  setup(e, { expose: o, emit: t }) {
    const a = e, l = t, s = la(), i = He(), { valueComputed: c } = xt(a, l, "modelValue", {
      defaultValue: ""
    }), p = () => {
      yo(i.value);
    }, v = () => {
      Ns(i.value);
    }, m = () => x(() => {
      l("update:modelValue", a.clearValue), l("clear"), A();
    }), {
      isDirty: g,
      isTouched: y,
      computedError: b,
      computedErrorMessages: C,
      listeners: _,
      validationAriaAttributes: S,
      isLoading: $,
      resetValidation: A,
      withoutValidation: x
    } = Ho(a, l, {
      value: c,
      focus: p,
      reset: m
    }), T = f(() => a.resize && !a.autosize), O = N(a.minRows), D = YE(i, c);
    function V() {
      let M = parseFloat(String(a.minRows)), j = parseFloat(String(a.maxRows));
      if (M = isNaN(M) ? 1 : M, j = isNaN(j) ? 1 / 0 : j, !a.autosize) {
        O.value = Math.max(j, Math.min(M, j ?? 0));
        return;
      }
      if (!D.value || !i.value)
        return;
      const W = getComputedStyle(i.value), q = D.value, Z = parseFloat(W.lineHeight), z = Math.max(
        M * Z,
        M + Math.round(Z)
      ), pe = j * Z || 1 / 0, le = Math.max(z, Math.min(pe, q ?? 0));
      O.value = Math.round(le / Z), i.value.style.height = `${le + 1}px`;
    }
    Vn(() => {
      V();
    });
    const P = f(
      () => ({
        resize: T.value ? void 0 : "none"
      })
    ), R = f(() => ({
      ...It(a, ["disabled", "readonly", "placeholder", "name"])
    })), J = f(() => ({
      ...S.value,
      ...bo(s, ["class", "style"])
    })), de = _t(nm), ne = JE(l);
    return o({
      isDirty: g,
      isTouched: y,
      isLoading: $,
      computedError: b,
      computedErrorMessages: C,
      reset: m,
      focus: p,
      blur: v,
      value: c,
      withoutValidation: x,
      resetValidation: A
    }), (M, j) => (w(), te(d(kn), se({ class: "va-textarea" }, d(de), {
      error: d(b),
      "error-messages": d(C)
    }), {
      default: U(() => [
        E("div", {
          class: Be(["va-textarea__resize-wrapper", {
            "va-textarea__resize-wrapper--resizable": T.value
          }])
        }, [
          ao(E("textarea", se({
            "onUpdate:modelValue": j[0] || (j[0] = (W) => yn(c) ? c.value = W : null)
          }, { ...R.value, ...d(ne), ...J.value, ...d(_) }, {
            class: ["va-textarea__textarea", {
              "va-textarea__textarea--autosize": e.autosize
            }],
            ref_key: "textarea",
            ref: i,
            rows: O.value,
            style: P.value,
            loading: d($),
            ariaLabel: M.$props.label
          }), null, 16, XE), [
            [bm, d(c)]
          ])
        ], 2)
      ]),
      _: 1
    }, 16, ["error", "error-messages"]));
  }
}), eR = Fo(QE), om = '[role="menuitem"]:not([aria-disabled="true"])', tR = '[role="menuitem"]:focus', nR = (e) => ({
  role: "menuitem",
  tabindex: -1,
  "aria-disabled": !!e.disabled
}), oR = () => ({
  role: "menu",
  tabindex: 0
}), aR = (e) => {
  $t("keydown", ({ key: o }) => {
    if (!e.value)
      return;
    const t = e.value.querySelectorAll(om), a = e.value.querySelector(tR);
    if (t.length) {
      if (!a) {
        const l = e.value.querySelector(om);
        l && yo(l);
        return;
      }
      if (o === "ArrowDown" || o === "ArrowRight") {
        const l = Array.from(t).indexOf(a);
        yo(t[l + 1]);
      }
      if (o === "ArrowUp" || o === "ArrowLeft") {
        const l = Array.from(t).indexOf(a);
        yo(t[l - 1]);
      }
    }
  }, e);
}, rR = { class: "va-menu-item__cell va-menu-item__cell--left" }, lR = { class: "va-menu-item__cell va-menu-item__cell--center" }, sR = { class: "va-menu-item__content" }, iR = { class: "va-menu-item__cell va-menu-item__cell--right" }, qy = /* @__PURE__ */ oe({
  name: "VaMenuItem",
  __name: "VaMenuItem",
  props: {
    name: { type: String, default: "" },
    icon: { type: String, defatult: "" },
    rightIcon: { type: String, defatult: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["selected"],
  setup(e, { emit: o }) {
    const { hasKeyboardFocus: t, keyboardFocusListeners: a } = FA();
    return (l, s) => (w(), L("tr", se({ class: "va-menu-item" }, d(nR)({ disabled: e.disabled }), Kn(d(a), !0), {
      class: {
        "va-menu-item--disabled": e.disabled,
        "va-menu-item--keyboard-focus": d(t)
      },
      onClick: s[0] || (s[0] = (i) => l.$emit("selected")),
      onKeydown: s[1] || (s[1] = Ae((i) => l.$emit("selected"), ["enter", "space"]))
    }), [
      E("td", rR, [
        H(l.$slots, "left-icon", {}, () => [
          e.icon ? (w(), te(d(ot), {
            key: 0,
            class: "va-menu-item__icon--left",
            name: e.icon
          }, null, 8, ["name"])) : Y("", !0)
        ])
      ]),
      E("td", lR, [
        H(l.$slots, "default", {}, () => [
          E("a", sR, ke(e.name), 1)
        ])
      ]),
      E("td", iR, [
        H(l.$slots, "right-icon", {}, () => [
          e.rightIcon ? (w(), te(d(ot), {
            key: 0,
            class: "va-menu-item__icon--right",
            name: e.rightIcon
          }, null, 8, ["name"])) : Y("", !0)
        ])
      ])
    ], 16));
  }
}), uR = { class: "va-menu-list__group-name" }, cR = /* @__PURE__ */ oe({
  name: "VaMenuGroup",
  __name: "VaMenuGroup",
  props: {
    groupName: {
      type: String,
      required: !0
    },
    color: {
      type: String,
      default: "secondary"
    }
  },
  setup(e) {
    const o = e, { getColor: t } = Ke(), a = f(() => t(o.color));
    return (l, s) => (w(), L(Le, null, [
      E("div", {
        class: "va-menu-list__group-name-wrapper",
        colspan: "99999",
        style: me(`--va-color-computed: ${String(a.value)}`)
      }, [
        E("span", uR, ke(e.groupName), 1)
      ], 4),
      H(l.$slots, "default", {
        style: me(`--va-color-computed: ${String(a.value)}`)
      }, void 0, !0)
    ], 64));
  }
}), jy = /* @__PURE__ */ Wa(cR, [["__scopeId", "data-v-4dd1ae9a"]]), dR = { colspan: "9999" }, fR = /* @__PURE__ */ oe({
  name: "VaMenuList",
  __name: "VaMenuList",
  props: {
    ..._r,
    options: { type: Array, default: () => [] }
  },
  emits: ["selected"],
  setup(e, { emit: o }) {
    const t = e, a = N();
    aR(a);
    const { getText: l, getValue: s, getDisabled: i, getGroupBy: c, getTrackBy: p } = Cr(t), v = f(() => t.options.reduce((b, C) => {
      const _ = c(C);
      return _ ? (b[_] || (b[_] = []), b[_].push(C)) : b._noGroup.push(C), b;
    }, { _noGroup: [] })), m = (b) => Array.isArray(b) && b[0].type === Le ? b[0].children : b, g = (b) => typeof b.type == "object" && "name" in b.type && typeof b.type.name == "string" ? b.type.name : "", y = (b) => typeof b.type == "string" ? b.type : typeof b.type == "object" && "name" in b.type && typeof b.type.name == "string" ? b.type.name : String(b.key);
    return (b, C) => (w(), L("table", se({
      class: "va-menu-list",
      ref_key: "container",
      ref: a
    }, d(oR)()), [
      E("tbody", null, [
        b.$slots.default ? (w(!0), L(Le, { key: 0 }, je(m(b.$slots.default()), (_) => (w(), L(Le, null, [
          g(_) === "VaMenuItem" ? (w(), te(zt(_), {
            key: y(_) + "menuitem"
          })) : g(_) === "VaDropdown" ? (w(), te(zt(_), {
            key: y(_) + "menu-dropdown"
          })) : (w(), L("td", {
            colspan: "999",
            key: y(_),
            class: "va-menu-list__virtual-td"
          }, [
            (w(), te(zt(_)))
          ]))
        ], 64))), 256)) : H(b.$slots, "default", { key: 1 }, () => [
          (w(!0), L(Le, null, je(v.value, (_, S) => (w(), L(Le, { key: S }, [
            S !== "_noGroup" ? H(b.$slots, "group", { key: 0 }, () => [
              E("tr", null, [
                E("td", dR, [
                  G(jy, { "group-name": S }, null, 8, ["group-name"])
                ])
              ])
            ]) : Y("", !0),
            (w(!0), L(Le, null, je(_, ($) => (w(), te(qy, {
              key: d(p)($),
              name: d(l)($),
              icon: $.icon,
              "right-icon": $.rightIcon,
              disabled: d(i)($),
              onSelected: (A) => b.$emit("selected", d(s)($), $)
            }, {
              "left-icon": U((A) => [
                H(b.$slots, "left-icon", ye(Ie(A)))
              ]),
              "right-icon": U((A) => [
                H(b.$slots, "right-icon", ye(Ie(A)))
              ]),
              _: 2
            }, 1032, ["name", "icon", "right-icon", "disabled", "onSelected"]))), 128))
          ], 64))), 128))
        ])
      ])
    ], 16));
  }
}), ti = Fo(fR), vR = Fo(qy), pR = Fo(jy), mR = (e) => {
  Vn(() => {
    e.value && Vt(() => {
      yo(Mt(e.value));
    });
  });
}, am = ct(ti), gR = Va(ti), rm = ct(Dn), yR = Va(Dn), hR = /* @__PURE__ */ oe({
  name: "VaMenu",
  __name: "VaMenu",
  props: {
    ...Ee,
    ...am,
    ...rm,
    stickToEdges: { type: Boolean, default: !0 }
  },
  emits: [
    ...yR,
    ...gR
  ],
  setup(e, { expose: o, emit: t }) {
    const a = N(), l = N();
    mR(a);
    const s = () => {
      var v;
      (v = l.value) == null || v.hide(), Vt(() => {
        var m;
        const g = Mt((m = l.value) == null ? void 0 : m.anchorRef);
        g && qu(g);
      });
    }, i = (v) => {
      v.key === "Escape" && s(), (v.key === "ArrowDown" || v.key === "ArrowUp") && v.preventDefault();
    }, c = _t(am), p = _t(rm);
    return o({
      close: s
    }), (v, m) => (w(), te(d(Dn), se(d(p), {
      ref_key: "dropdown",
      ref: l
    }), {
      anchor: U(() => [
        H(v.$slots, "anchor")
      ]),
      default: U(() => [
        G(d(La), { onKeydown: i }, {
          default: U(() => [
            G(d(ti), se({
              onKeydown: m[0] || (m[0] = Ae($e(() => {
              }, ["prevent", "stop"]), ["enter", "space"]))
            }, d(c), {
              ref_key: "menuList",
              ref: a,
              onSelected: m[1] || (m[1] = (g) => {
                v.$emit("selected", g), s();
              })
            }), un({ _: 2 }, [
              v.$slots.default ? {
                name: "default",
                fn: U(() => [
                  H(v.$slots, "default")
                ]),
                key: "0"
              } : void 0
            ]), 1040)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16));
  }
}), bR = Fo(hR), _R = {
  rules: () => [],
  dirty: !1,
  errorCount: 1,
  success: !1,
  messages: () => [],
  immediateValidation: !1
}, CR = {
  stateful: !1
}, SR = /* @__PURE__ */ oe({
  __name: "VaFormField",
  props: /* @__PURE__ */ Vw({
    stateful: { type: Boolean },
    modelValue: {},
    name: {},
    rules: {},
    dirty: { type: Boolean },
    error: { type: Boolean },
    errorMessages: {},
    errorCount: {},
    success: { type: Boolean },
    messages: {},
    immediateValidation: { type: Boolean },
    clearValue: {}
  }, {
    ...CR,
    ..._R
  }),
  emits: ["update:error", "update:errorMessages", "update:dirty", "update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, a = o, { valueComputed: l } = xt(t, a, "modelValue"), s = () => {
      l.value = t.clearValue;
    }, i = () => {
    }, {
      computedError: c,
      computedErrorMessages: p,
      validate: v,
      isDirty: m,
      isLoading: g,
      isValid: y,
      resetValidation: b,
      validationAriaAttributes: C,
      listeners: _
    } = Ho(t, a, {
      reset: s,
      focus: i,
      value: l
    }), S = f(() => c.value ? p.value : t.messages), $ = f(() => y.value ? t.success ? "success" : "" : "danger"), A = f(() => t.error ? Number(t.errorCount) : 99), x = N(l.value);
    Vn(() => {
      x.value = l.value;
    });
    const T = () => new Proxy(x, {
      get(O, D) {
        return D === "ref" ? x.value : Reflect.get(O, D);
      },
      set(O, D, V) {
        return D === "ref" ? (x.value = V, l.value = V, !0) : Reflect.set(l, D, V);
      }
    });
    return (O, D) => (w(), te(d(Rs), {
      "model-value": S.value,
      "has-error": !d(y),
      color: $.value,
      limit: A.value
    }, un({
      default: U(({ ariaAttributes: V, attrs: P }) => [
        H(O.$slots, "default", ye(Ie({
          error: d(c),
          errorMessages: S.value,
          messages: S.value,
          validate: d(v),
          isDirty: d(m),
          isLoading: d(g),
          isValid: d(y),
          resetValidation: d(b),
          validationAriaAttributes: d(C),
          ...d(_),
          value: T(),
          modelValue: T(),
          ariaAttributes: V,
          bind: {
            ...P,
            ...V,
            ...d(_)
          }
        })))
      ]),
      _: 2
    }, [
      je(["message", "messages"], (V) => ({
        name: V,
        fn: U((P) => [
          H(O.$slots, V, ye(Ie(P)))
        ])
      }))
    ]), 1032, ["model-value", "has-error", "color", "limit"]));
  }
}), wR = Fo(SR), $R = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VaAccordion: GV,
  VaAffix: ZV,
  VaAlert: nx,
  VaAppBar: rx,
  VaAspectRatio: Eg,
  VaAvatar: As,
  VaAvatarGroup: px,
  VaBacktop: yx,
  VaBadge: Wg,
  VaBreadcrumbs: Dx,
  VaBreadcrumbsItem: Rx,
  VaButton: lt,
  VaButtonDropdown: J2,
  VaButtonGroup: Ws,
  VaButtonToggle: eA,
  VaCard: fA,
  VaCardActions: cA,
  VaCardBlock: dA,
  VaCardContent: iA,
  VaCardTitle: uA,
  VaCarousel: DA,
  VaCheckbox: pl,
  VaChip: GA,
  VaCollapse: XA,
  VaColorIndicator: Ic,
  VaColorInput: SI,
  VaColorPalette: kI,
  VaConfig: il,
  VaContent: TI,
  VaCounter: FI,
  VaDataTable: FT,
  VaDateInput: gB,
  VaDatePicker: yB,
  VaDivider: ky,
  VaDropdown: Dn,
  VaDropdownContent: La,
  VaFallback: fr,
  VaFileUpload: Ly,
  VaForm: nP,
  VaFormField: wR,
  VaHover: _s,
  VaIcon: ot,
  VaImage: kc,
  VaInfiniteScroll: sP,
  VaInnerLoading: by,
  VaInput: Bc,
  VaInputWrapper: kn,
  VaLayout: SP,
  VaList: Mc,
  VaListItem: yl,
  VaListItemLabel: Vy,
  VaListItemSection: Oa,
  VaListLabel: xB,
  VaListSeparator: AB,
  VaMenu: bR,
  VaMenuGroup: pR,
  VaMenuItem: vR,
  VaMenuList: ti,
  VaMessageList: Rs,
  VaModal: yc,
  VaNavbar: BP,
  VaNavbarItem: PP,
  VaOptionList: GP,
  VaPagination: XP,
  VaParallax: nL,
  VaPopover: iL,
  VaProgressBar: xy,
  VaProgressCircle: hr,
  VaRadio: Ey,
  VaRating: mL,
  VaScrollContainer: Ky,
  VaSelect: YL,
  VaSeparator: _k,
  VaSidebar: rO,
  VaSidebarItem: vO,
  VaSidebarItemContent: dO,
  VaSidebarItemTitle: fO,
  VaSkeleton: eO,
  VaSkeletonGroup: tO,
  VaSlider: wO,
  VaSpacer: Sk,
  VaSplit: IO,
  VaStepper: jO,
  VaStickyScrollbar: Vk,
  VaSwitch: Ry,
  VaTab: NO,
  VaTabs: RO,
  VaTextarea: eR,
  VaTimeInput: vE,
  VaTimePicker: wE,
  VaTimeline: bE,
  VaTimelineItem: SE,
  VaToast: vg,
  VaTreeView: NE,
  VaValue: qE,
  VaViewer: GE,
  VaVirtualScroller: Zs
}, Symbol.toStringTag, { value: "Module" })), kR = (e) => typeof e == "function", ea = (e, o, ...t) => {
  kR(o) ? e.use(o(...t)) : e.use(o);
}, VR = No((e = {}) => ({
  install(o) {
    const { config: t } = e;
    $v(o), Object.entries($R).forEach(([a, l]) => {
      o.component(a, l);
    }), ea(o, Pk(t)), ea(o, K$), ea(o, Ek(t)), ea(o, NV), ea(o, Fk), ea(o, lV), ea(o, rV), ea(o, MV), $v(null);
  }
})), xR = () => {
  const e = Pt();
  return f(() => {
    var o;
    return ((o = lc()) == null ? void 0 : o._context) || e?.appContext;
  });
}, Yy = () => {
  const e = xR(), o = [], t = (c) => {
    const p = mg(c, e.value);
    return p && o.push(p), p;
  };
  return {
    init: (c) => t(c),
    notify: t,
    close: (c) => Ku(c),
    closeAll: (c = !1) => pg(c ? void 0 : e.value),
    closeAllCreatedInThisHook: () => {
      o.forEach((c) => Ku(c));
    }
  };
}, AR = "data:image/svg+xml,%3csvg%20width='622'%20height='595'%20viewBox='0%200%20622%20595'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M274.616%20548.138L287.729%20561.217C297.96%20571.421%20314.547%20571.421%20324.778%20561.217L425.103%20461.154C435.334%20450.949%20435.334%20434.405%20425.103%20424.201L411.99%20411.122C401.76%20400.918%20385.172%20400.918%20374.941%20411.122L274.616%20511.185C264.385%20521.39%20264.385%20537.934%20274.616%20548.138ZM269.204%20579.694C289.666%20600.102%20322.841%20600.102%20343.303%20579.694L443.628%20479.63C464.09%20459.222%20464.09%20426.133%20443.628%20405.724L430.515%20392.645C410.053%20372.237%20376.878%20372.237%20356.416%20392.646L256.091%20492.709C235.629%20513.117%20235.629%20546.206%20256.091%20566.615L269.204%20579.694Z'%20fill='%23D2D2D2'/%3e%3cpath%20d='M443.84%20405.957C464.302%20426.366%20464.302%20459.454%20443.84%20479.863L430.727%20492.942C410.265%20513.35%20377.09%20513.35%20356.628%20492.942L268.513%20405.056C248.051%20384.648%20248.051%20351.559%20268.513%20331.15L281.626%20318.071C302.087%20297.663%20335.263%20297.663%20355.725%20318.071L443.84%20405.957Z'%20fill='%23E19840'/%3e%3cpath%20d='M102.558%20361.343C82.0966%20381.751%2048.9213%20381.751%2028.4594%20361.343L15.3464%20348.264C-5.11545%20327.855%20-5.11548%20294.767%2015.3464%20274.358L274.795%2015.5858C295.257%20-4.8227%20328.432%20-4.82273%20348.894%2015.5858L362.007%2028.6646C382.469%2049.0731%20382.469%2082.1619%20362.007%20102.57L102.558%20361.343Z'%20fill='%23E19840'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M575.016%20341.09L588.129%20328.012C598.36%20317.807%20598.36%20301.263%20588.129%20291.059L330.18%2033.7828C319.95%2023.5786%20303.362%2023.5786%20293.131%2033.7828L280.018%2046.8617C269.787%2057.0659%20269.787%2073.6103%20280.018%2083.8146L537.966%20341.09C548.197%20351.295%20564.785%20351.295%20575.016%20341.09ZM606.654%20346.488C627.115%20326.079%20627.115%20292.991%20606.654%20272.582L348.705%2015.3064C328.243%20-5.10214%20295.068%20-5.10211%20274.606%2015.3064L261.493%2028.3852C241.031%2048.7937%20241.031%2081.8825%20261.493%20102.291L519.442%20359.567C539.904%20379.975%20573.079%20379.975%20593.541%20359.567L606.654%20346.488Z'%20fill='%23D2D2D2'/%3e%3cpath%20d='M606.646%20272.576C627.108%20292.985%20627.108%20326.073%20606.646%20346.482L593.533%20359.561C573.071%20379.969%20539.896%20379.969%20519.434%20359.561L491.557%20331.756C471.095%20311.348%20471.095%20278.259%20491.557%20257.85L504.67%20244.771C525.131%20224.363%20558.307%20224.363%20578.769%20244.771L606.646%20272.576Z'%20fill='%23E19840'/%3e%3c/svg%3e", IR = /* @__PURE__ */ oe({
  __name: "Header",
  setup(e) {
    const o = Os();
    return N(null), f(() => {
      switch (o.name) {
        case "home":
          return "Report Vue";
        case "about":
          return "Edit Report";
        case "data":
          return "Data Designer";
        case "config":
          return "Configuration Editor";
        case "test":
          return "Test View";
        default:
          return "Unknown View";
      }
    }), (t, a) => (w(), te(na, { to: "body" }));
  }
}), TR = { class: "flex flex-col h-full w-full" }, BR = {
  key: 0,
  class: "global-loading-bar"
}, PR = { class: "flex-grow flex overflow-hidden h-full" }, LR = { class: "orange" }, OR = /* @__PURE__ */ oe({
  __name: "App",
  setup(e) {
    const o = N([]), { isLoading: t } = Pw();
    return at(() => {
      const a = ut(Bw);
      o.value = a.getAllNavigationItemsArray ? a.getAllNavigationItemsArray() : [], console.log("Loaded navigation items:", o.value);
    }), (a, l) => {
      const s = ze("va-icon"), i = ze("va-sidebar-item-title"), c = ze("va-sidebar-item-content"), p = ze("va-sidebar-item"), v = ze("va-sidebar"), m = ze("router-view");
      return w(), L("div", TR, [
        d(t) ? (w(), L("div", BR, [...l[3] || (l[3] = [
          E("div", { class: "global-loading-bar-progress" }, null, -1)
        ])])) : Y("", !0),
        G(IR),
        E("div", PR, [
          G(v, {
            hoverable: "",
            "minimized-width": "58px",
            class: "ice_gray absolute! z-mx",
            activeColor: "active"
          }, {
            default: U(() => [
              E("div", LR, [
                l[7] || (l[7] = E("div", { class: "justify-center flex" }, [
                  E("img", {
                    src: AR,
                    class: "h-5 mt-6 mb-3"
                  })
                ], -1)),
                G(p, {
                  active: a.$route.name === "home" || a.$route.name === "page",
                  onClick: l[0] || (l[0] = () => {
                    a.$route.params.pageid ? a.$router.push(`/page/${a.$route.params.pageid}`) : a.$router.push("/page/abc");
                  }),
                  class: "pointer"
                }, {
                  default: U(() => [
                    G(c, null, {
                      default: U(() => [
                        G(s, { name: "preview" }),
                        G(i, { class: "font-normal" }, {
                          default: U(() => [...l[4] || (l[4] = [
                            xe(" View dashboard ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["active"]),
                G(p, {
                  active: a.$route.name === "edit" || a.$route.name === "pageEdit",
                  onClick: l[1] || (l[1] = () => {
                    a.$route.params.pageid ? a.$router.push(`/page/${a.$route.params.pageid}/edit`) : a.$router.push("/page/abc/edit");
                  }),
                  class: "pointer"
                }, {
                  default: U(() => [
                    G(c, { class: "" }, {
                      default: U(() => [
                        G(s, { name: "draw" }),
                        G(i, { class: "font-normal" }, {
                          default: U(() => [...l[5] || (l[5] = [
                            xe(" Edit dashboard ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["active"]),
                G(p, {
                  active: a.$route.name === "data",
                  onClick: l[2] || (l[2] = (g) => a.$router.push("/qweqwe/data")),
                  class: "pointer"
                }, {
                  default: U(() => [
                    G(c, { class: "" }, {
                      default: U(() => [
                        G(s, { name: "dataset" }),
                        G(i, { class: "font-normal" }, {
                          default: U(() => [...l[6] || (l[6] = [
                            xe(" Data configuration ", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["active"]),
                (w(!0), L(Le, null, je(o.value, (g) => (w(), te(p, {
                  key: g.id,
                  active: a.$route.name === g.routeName,
                  onClick: (y) => a.$router.push(g.route),
                  class: "pointer"
                }, {
                  default: U(() => [
                    G(c, null, {
                      default: U(() => [
                        G(s, {
                          name: g.icon
                        }, null, 8, ["name"]),
                        G(i, { class: "font-normal" }, {
                          default: U(() => [
                            xe(ke(g.label), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["active", "onClick"]))), 128))
              ])
            ]),
            _: 1
          }),
          (w(), te(m, {
            key: a.$route.fullPath
          }))
        ])
      ]);
    };
  }
}), io = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of o)
    t[a] = l;
  return t;
}, ER = /* @__PURE__ */ io(OR, [["__scopeId", "data-v-90964219"]]), sn = [];
for (let e = 0; e < 256; ++e)
  sn.push((e + 256).toString(16).slice(1));
function RR(e, o = 0) {
  return (sn[e[o + 0]] + sn[e[o + 1]] + sn[e[o + 2]] + sn[e[o + 3]] + "-" + sn[e[o + 4]] + sn[e[o + 5]] + "-" + sn[e[o + 6]] + sn[e[o + 7]] + "-" + sn[e[o + 8]] + sn[e[o + 9]] + "-" + sn[e[o + 10]] + sn[e[o + 11]] + sn[e[o + 12]] + sn[e[o + 13]] + sn[e[o + 14]] + sn[e[o + 15]]).toLowerCase();
}
const DR = new Uint8Array(16);
function MR() {
  return crypto.getRandomValues(DR);
}
function ec(e, o, t) {
  return crypto.randomUUID ? crypto.randomUUID() : FR(e);
}
function FR(e, o, t) {
  e = e || {};
  const a = e.random ?? e.rng?.() ?? MR();
  if (a.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, RR(a);
}
const NR = {
  key: 0,
  class: "loading-state"
}, zR = {
  key: 1,
  class: "view-component-wrapper"
}, HR = {
  key: 2,
  class: "edit-component-wrapper"
}, WR = {
  key: 3,
  class: "no-layout-message"
}, UR = { key: 0 }, GR = { key: 1 }, KR = { key: 2 }, qR = { key: 3 }, jR = /* @__PURE__ */ oe({
  __name: "LayoutRenderer",
  props: {
    pageId: {},
    viewMode: { type: Boolean }
  },
  emits: ["openWidgetSettings", "removeWidget"],
  setup(e, { emit: o }) {
    const t = e, a = o, l = ut(rl), s = ut(ll), i = N(null), c = N(null), p = He(null), v = He(null), m = N(0), g = N(!0), y = (A) => {
      a("openWidgetSettings", A);
    }, b = (A) => {
      a("removeWidget", A);
    };
    let C = 0;
    const _ = async () => {
      const A = ++C;
      if (g.value = !0, await Vt(), A === C) {
        if (t.pageId && s) {
          const x = s.getPage(t.pageId);
          if (i.value = x ? { ...x } : null, x?.layout && l) {
            const T = l.getLayout(x.layout.id);
            c.value = T || null, t.viewMode ? (v.value = T?.component || null, p.value = null) : (p.value = T?.editor || null, v.value = null);
          } else
            p.value = null, v.value = null, c.value = null;
        }
        await new Promise((x) => setTimeout(x, 50)), A === C && (g.value = !1);
      }
    }, S = N(null), $ = (A) => {
      if (A === "PAGE_UPDATE" && t.pageId && s) {
        const x = s.getPage(t.pageId);
        i.value = x ? { ...x } : null, (x?.layout?.id !== c.value?.id || !c.value) && (m.value++, _());
      }
    };
    return at(async () => {
      await Vt(), await new Promise((A) => setTimeout(A, 100)), await _(), s && "subscribe" in s && (S.value = s.subscribe($));
    }), Cm(() => {
      s && "unsubscribe" in s && S.value && s.unsubscribe(S.value);
    }), (A, x) => {
      const T = ze("va-progress-circle"), O = ze("va-alert");
      return w(), L("div", {
        class: "layout-renderer",
        style: me({
          backgroundColor: i.value?.backgroundColor || void 0,
          backgroundImage: i.value?.backgroundImage ? `url(${i.value.backgroundImage})` : void 0,
          backgroundSize: i.value?.backgroundSize || "cover",
          backgroundPosition: i.value?.backgroundPosition || "center",
          backgroundRepeat: i.value?.backgroundRepeat || "no-repeat"
        })
      }, [
        g.value ? (w(), L("div", NR, [
          G(T, { indeterminate: "" }),
          x[0] || (x[0] = E("p", null, "Loading layout...", -1))
        ])) : t.viewMode && v.value && c.value ? (w(), L("div", zR, [
          (w(), te(zt(v.value), {
            key: c.value.id || "view",
            "layout-settings": i.value?.layoutSettings
          }, null, 8, ["layout-settings"]))
        ])) : !t.viewMode && p.value && c.value ? (w(), L("div", HR, [
          (w(), te(zt(p.value), {
            key: c.value.id || "edit",
            "layout-settings": i.value?.layoutSettings,
            onOpenSettings: y,
            onRemoveWidget: b
          }, null, 40, ["layout-settings"]))
        ])) : (w(), L("div", WR, [
          G(O, {
            color: "warning",
            icon: "warning"
          }, {
            default: U(() => [
              g.value ? (w(), L("div", UR, " Loading layout components... ")) : i.value ? c.value ? (w(), L("div", qR, [
                xe(ke(t.viewMode ? "No layout component found for the current page layout" : "No layout editor found for the current page layout") + " ", 1),
                x[1] || (x[1] = E("br", null, null, -1)),
                E("small", null, "Layout ID: " + ke(c.value.id), 1)
              ])) : (w(), L("div", KR, ' No layout configured for page "' + ke(i.value.name || t.pageId) + '" ', 1)) : (w(), L("div", GR, ' Page "' + ke(t.pageId) + '" not found ', 1))
            ]),
            _: 1
          })
        ]))
      ], 4);
    };
  }
}), Xy = /* @__PURE__ */ io(jR, [["__scopeId", "data-v-a9631f22"]]), YR = { class: "report-container" }, XR = {
  key: 1,
  class: "welcome-placeholder"
}, ZR = { class: "welcome-content" }, JR = { class: "welcome-actions" }, QR = {
  key: 0,
  class: "available-pages"
}, eD = { class: "page-list" }, tD = /* @__PURE__ */ oe({
  __name: "ViewReport",
  props: ["params"],
  setup(e) {
    const o = e, t = Os(), a = oc(), l = ut(ll), s = ut(rl), i = f(() => o.params?.pageid ?? t.params.pageid ?? ""), c = f(() => l ? l.getAllPageIds().map((g) => ({
      id: g,
      page: l.getPage(g)
    })) : []), p = (g) => {
      a.push(`/page/${g}`);
    }, v = () => {
      if (!l || !s) return;
      const g = ec(), y = s.getLayout("org.eclipse.daanse.board.app.ui.vue.layouts.base");
      l.registerPage({
        id: g,
        name: "New Page",
        description: "",
        icon: "",
        visibleInNavigation: !0,
        layout: y
      }), a.push(`/page/${g}/edit`);
    }, m = () => {
      a.push("/save");
    };
    return (g, y) => {
      const b = ze("va-button");
      return w(), L("div", YR, [
        i.value ? (w(), te(Xy, {
          key: 0,
          pageId: i.value,
          viewMode: !0
        }, null, 8, ["pageId"])) : (w(), L("div", XR, [
          E("div", ZR, [
            y[3] || (y[3] = E("div", { class: "logo-container" }, [
              E("div", { class: "logo-bg" }),
              E("img", {
                src: "/LogoDaanse.svg",
                alt: "Daanse Logo",
                class: "welcome-logo"
              })
            ], -1)),
            y[4] || (y[4] = E("h1", null, "Welcome to Daanse Dashboard", -1)),
            y[5] || (y[5] = E("p", null, "Select a page to view or get started with the options below.", -1)),
            E("div", JR, [
              G(b, {
                preset: "primary",
                icon: "add",
                onClick: v
              }, {
                default: U(() => [...y[0] || (y[0] = [
                  xe(" Create New Page ", -1)
                ])]),
                _: 1
              }),
              G(b, {
                preset: "secondary",
                icon: "folder_open",
                onClick: m
              }, {
                default: U(() => [...y[1] || (y[1] = [
                  xe(" Load Dashboard ", -1)
                ])]),
                _: 1
              })
            ]),
            c.value.length > 0 ? (w(), L("div", QR, [
              y[2] || (y[2] = E("h3", null, "Available Pages", -1)),
              E("div", eD, [
                (w(!0), L(Le, null, je(c.value, (C) => (w(), te(b, {
                  key: C.id,
                  preset: "plain",
                  icon: "description",
                  onClick: (_) => p(C.id)
                }, {
                  default: U(() => [
                    xe(ke(C.page?.name || C.id), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]))), 128))
              ])
            ])) : Y("", !0)
          ])
        ]))
      ]);
    };
  }
}), lm = /* @__PURE__ */ io(tD, [["__scopeId", "data-v-855c6293"]]), nD = { class: "flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full h-full ice" }, oD = { class: "flex gap-4 w-full border-b border-gray-300 px-4 py-2 items-center" }, aD = { style: { "text-align": "center", padding: "1rem" } }, rD = { style: { display: "flex", "justify-content": "flex-end", gap: "0.5rem" } }, lD = /* @__PURE__ */ oe({
  __name: "ConnectionList",
  props: {
    activeItemId: {
      type: String,
      required: !0
    }
  },
  emits: ["openEditor"],
  setup(e) {
    const { connections: o, createConnection: t, removeConnection: a } = Jr(), l = N(!1), s = N(null), i = (v) => {
      s.value = v, l.value = !0;
    }, c = () => {
      s.value && a(s.value), l.value = !1, s.value = null;
    }, p = () => {
      t(null);
    };
    return (v, m) => {
      const g = ze("VaButton"), y = ze("VaListItemLabel"), b = ze("VaListItemSection"), C = ze("VaIcon"), _ = ze("VaListItem"), S = ze("VaList"), $ = ze("VaModal");
      return w(), L("div", nD, [
        E("div", oD, [
          m[4] || (m[4] = E("h4", { class: "flex-grow text-sm font-semibold" }, "Connections", -1)),
          G(g, {
            onClick: m[0] || (m[0] = (A) => p()),
            icon: "add",
            size: "small"
          })
        ]),
        G(S, { class: "w-full h-full overflow-auto flex flex-col" }, {
          default: U(() => [
            (w(!0), L(Le, null, je(d(o), (A, x) => (w(), te(_, {
              key: x,
              class: Be(["text-sm border-b border-gray-300 border-dashed last:border-none px-4 py-2 cursor-pointer", { "bg-gray-200": A.uid === e.activeItemId }]),
              onClick: (T) => v.$emit("openEditor", { type: "Connection", itemId: A.uid })
            }, {
              default: U(() => [
                G(b, null, {
                  default: U(() => [
                    G(y, null, {
                      default: U(() => [
                        xe(ke(A.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    G(y, { caption: "" }, {
                      default: U(() => [
                        xe(" Type: " + ke(A.type), 1)
                      ]),
                      _: 2
                    }, 1024),
                    G(y, { caption: "" }, {
                      default: U(() => [
                        xe(" UID: " + ke(A.uid), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                G(b, { icon: "" }, {
                  default: U(() => [
                    G(C, {
                      name: "delete",
                      color: "danger",
                      onClick: $e((T) => i(A.uid), ["stop", "prevent"])
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 1
        }),
        G($, {
          modelValue: l.value,
          "onUpdate:modelValue": m[3] || (m[3] = (A) => l.value = A),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: U(() => [
            E("div", rD, [
              G(g, {
                preset: "secondary",
                onClick: m[1] || (m[1] = (A) => {
                  l.value = !1, s.value = null;
                })
              }, {
                default: U(() => [...m[7] || (m[7] = [
                  xe(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              G(g, {
                color: "danger",
                icon: "delete",
                onClick: m[2] || (m[2] = (A) => c())
              }, {
                default: U(() => [...m[8] || (m[8] = [
                  xe(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: U(() => [
            E("div", aD, [
              G(C, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              m[5] || (m[5] = E("h5", { style: { margin: "0.5rem 0" } }, "Connection löschen", -1)),
              m[6] || (m[6] = E("p", null, "Möchtest du diese Connection wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), sD = { class: "flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full h-full ice" }, iD = { class: "flex gap-4 w-full border-b border-gray-300 px-4 py-2 items-center" }, uD = { style: { "text-align": "center", padding: "1rem" } }, cD = { style: { display: "flex", "justify-content": "flex-end", gap: "0.5rem" } }, dD = /* @__PURE__ */ oe({
  __name: "DatasourceList",
  props: {
    activeItemId: {
      type: String,
      required: !0
    }
  },
  emits: ["openEditor"],
  setup(e) {
    const { dataSources: o, createDataSource: t, removeDataSource: a } = dr(), l = N(!1), s = N(null), i = (g) => {
      s.value = g, l.value = !0;
    }, c = () => {
      s.value && a(s.value), l.value = !1, s.value = null;
    }, p = ut("endpointfinder", null), v = () => {
      t(null);
    }, m = () => {
      p();
    };
    return (g, y) => {
      const b = ze("VaButton"), C = ze("VaListItemLabel"), _ = ze("VaListItemSection"), S = ze("VaIcon"), $ = ze("VaListItem"), A = ze("VaList"), x = ze("VaModal");
      return w(), L("div", sD, [
        E("div", iD, [
          y[5] || (y[5] = E("h4", { class: "flex-grow text-sm font-semibold" }, "Stores", -1)),
          G(b, {
            onClick: y[0] || (y[0] = (T) => m()),
            icon: "travel_explore",
            size: "small"
          }),
          G(b, {
            onClick: y[1] || (y[1] = (T) => v()),
            icon: "add",
            size: "small"
          })
        ]),
        G(A, { class: "w-full h-full overflow-auto flex flex-col" }, {
          default: U(() => [
            (w(!0), L(Le, null, je(d(o), (T, O) => (w(), te($, {
              key: O,
              class: Be(["text-sm border-b border-gray-300 border-dashed last:border-none px-4 py-2 cursor-pointer", { "bg-gray-200": T.uid === e.activeItemId }]),
              onClick: (D) => g.$emit("openEditor", { type: "DataSource", itemId: T.uid })
            }, {
              default: U(() => [
                G(_, null, {
                  default: U(() => [
                    G(C, null, {
                      default: U(() => [
                        xe(ke(T.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    G(C, { caption: "" }, {
                      default: U(() => [
                        xe(" Type: " + ke(T.type), 1)
                      ]),
                      _: 2
                    }, 1024),
                    G(C, { caption: "" }, {
                      default: U(() => [
                        xe(" UID: " + ke(T.uid), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                G(_, { icon: "" }, {
                  default: U(() => [
                    G(S, {
                      name: "delete",
                      color: "danger",
                      onClick: $e((D) => i(T.uid), ["stop", "prevent"])
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 1
        }),
        G(x, {
          modelValue: l.value,
          "onUpdate:modelValue": y[4] || (y[4] = (T) => l.value = T),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: U(() => [
            E("div", cD, [
              G(b, {
                preset: "secondary",
                onClick: y[2] || (y[2] = (T) => {
                  l.value = !1, s.value = null;
                })
              }, {
                default: U(() => [...y[8] || (y[8] = [
                  xe(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              G(b, {
                color: "danger",
                icon: "delete",
                onClick: y[3] || (y[3] = (T) => c())
              }, {
                default: U(() => [...y[9] || (y[9] = [
                  xe(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: U(() => [
            E("div", uD, [
              G(S, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              y[6] || (y[6] = E("h5", { style: { margin: "0.5rem 0" } }, "Datasource löschen", -1)),
              y[7] || (y[7] = E("p", null, "Möchtest du diese Datasource wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), fD = { class: "w-full h-full flex gap-4" }, vD = { class: "min-w-[350px]" }, pD = { class: "flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full h-full" }, mD = { class: "flex-grow flex flex-col h-full" }, gD = { class: "flex-grow p-4 flex flex-col gap-2" }, yD = { class: "self-end flex gap-4 p-4" }, hD = /* @__PURE__ */ oe({
  __name: "ConnectionEditor",
  props: {
    itemId: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const t = e, a = o, l = N({}), s = ut(Vm), { connections: i, updateConnection: c } = Jr(), p = f(() => s.registeredConnections);
    at(() => {
      const g = i.find((y) => y.uid === t.itemId);
      l.value = JSON.parse(JSON.stringify(g));
    });
    const v = f(() => {
      const g = s.getConnectionIdentifiers(l.value.type);
      return g ? s.resolveIdentifier(g.Settings) : null;
    }), m = () => {
      c(l.value.uid, l.value), a("close");
    };
    return (g, y) => {
      const b = ze("VaInput"), C = ze("VaSelect"), _ = ze("va-button");
      return w(), L("div", fD, [
        E("div", vD, [
          E("div", pD, [
            y[6] || (y[6] = E("div", { class: "flex gap-4 w-full border-b border-gray-300 px-4 py-2 items-center" }, [
              E("h4", { class: "flex-grow text-sm font-semibold leading-[1.5rem]" }, "Connection settings")
            ], -1)),
            E("div", mD, [
              E("div", gD, [
                l.value ? (w(), L(Le, { key: 0 }, [
                  G(b, {
                    modelValue: l.value.uid,
                    "onUpdate:modelValue": y[0] || (y[0] = (S) => l.value.uid = S),
                    label: "UID",
                    readonly: ""
                  }, null, 8, ["modelValue"]),
                  G(b, {
                    modelValue: l.value.name,
                    "onUpdate:modelValue": y[1] || (y[1] = (S) => l.value.name = S),
                    label: "Name"
                  }, null, 8, ["modelValue"]),
                  G(C, {
                    modelValue: l.value.type,
                    "onUpdate:modelValue": y[2] || (y[2] = (S) => l.value.type = S),
                    label: "Type",
                    options: p.value
                  }, null, 8, ["modelValue", "options"]),
                  (w(), te(zt(v.value), {
                    config: l.value.config
                  }, null, 8, ["config"]))
                ], 64)) : Y("", !0)
              ]),
              E("div", yD, [
                G(_, { onClick: m }, {
                  default: U(() => [...y[4] || (y[4] = [
                    xe("Save", -1)
                  ])]),
                  _: 1
                }),
                G(_, {
                  onClick: y[3] || (y[3] = (S) => g.$emit("close")),
                  preset: "plain"
                }, {
                  default: U(() => [...y[5] || (y[5] = [
                    xe("Close", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var bs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Kr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var bD = Kr.exports, sm;
function _D() {
  return sm || (sm = 1, (function(e, o) {
    (function() {
      var t, a = "4.17.21", l = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", i = "Expected a function", c = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", v = 500, m = "__lodash_placeholder__", g = 1, y = 2, b = 4, C = 1, _ = 2, S = 1, $ = 2, A = 4, x = 8, T = 16, O = 32, D = 64, V = 128, P = 256, R = 512, J = 30, de = "...", ne = 800, M = 16, j = 1, W = 2, q = 3, Z = 1 / 0, z = 9007199254740991, pe = 17976931348623157e292, le = NaN, _e = 4294967295, Re = _e - 1, Ve = _e >>> 1, ee = [
        ["ary", V],
        ["bind", S],
        ["bindKey", $],
        ["curry", x],
        ["curryRight", T],
        ["flip", R],
        ["partial", O],
        ["partialRight", D],
        ["rearg", P]
      ], be = "[object Arguments]", Te = "[object Array]", ie = "[object AsyncFunction]", re = "[object Boolean]", Me = "[object Date]", Oe = "[object DOMException]", Xe = "[object Error]", vt = "[object Function]", Wt = "[object GeneratorFunction]", Lt = "[object Map]", qt = "[object Number]", tt = "[object Null]", We = "[object Object]", Ue = "[object Promise]", qe = "[object Proxy]", Tt = "[object RegExp]", Et = "[object Set]", Zt = "[object String]", qn = "[object Symbol]", uo = "[object Undefined]", jn = "[object WeakMap]", $o = "[object WeakSet]", Yn = "[object ArrayBuffer]", bn = "[object DataView]", co = "[object Float32Array]", ue = "[object Float64Array]", ge = "[object Int8Array]", Ne = "[object Int16Array]", Ye = "[object Int32Array]", Bt = "[object Uint8Array]", cn = "[object Uint8ClampedArray]", an = "[object Uint16Array]", Xn = "[object Uint32Array]", xn = /\b__p \+= '';/g, Ua = /\b(__p \+=) '' \+/g, Ga = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Zn = /&(?:amp|lt|gt|quot|#39);/g, Ka = /[&<>"']/g, Jt = RegExp(Zn.source), ni = RegExp(Ka.source), bl = /<%-([\s\S]+?)%>/g, oi = /<%([\s\S]+?)%>/g, _l = /<%=([\s\S]+?)%>/g, ai = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ri = /^\w*$/, li = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $r = /[\\^$.*+?()[\]{}|]/g, kr = RegExp($r.source), ca = /^\s+/, si = /\s/, Ce = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, St = /\{\n\/\* \[wrapped with (.+)\] \*/, pt = /,? & /, Rt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, fo = /[()=,{}\[\]\/\s]/, ii = /\\(\\)?/g, eh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Hc = /\w*$/, th = /^[-+]0x[0-9a-f]+$/i, nh = /^0b[01]+$/i, oh = /^\[object .+?Constructor\]$/, ah = /^0o[0-7]+$/i, rh = /^(?:0|[1-9]\d*)$/, lh = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Cl = /($^)/, sh = /['\n\r\u2028\u2029\\]/g, Sl = "\\ud800-\\udfff", ih = "\\u0300-\\u036f", uh = "\\ufe20-\\ufe2f", ch = "\\u20d0-\\u20ff", Wc = ih + uh + ch, Uc = "\\u2700-\\u27bf", Gc = "a-z\\xdf-\\xf6\\xf8-\\xff", dh = "\\xac\\xb1\\xd7\\xf7", fh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", vh = "\\u2000-\\u206f", ph = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Kc = "A-Z\\xc0-\\xd6\\xd8-\\xde", qc = "\\ufe0e\\ufe0f", jc = dh + fh + vh + ph, ui = "['’]", mh = "[" + Sl + "]", Yc = "[" + jc + "]", wl = "[" + Wc + "]", Xc = "\\d+", gh = "[" + Uc + "]", Zc = "[" + Gc + "]", Jc = "[^" + Sl + jc + Xc + Uc + Gc + Kc + "]", ci = "\\ud83c[\\udffb-\\udfff]", yh = "(?:" + wl + "|" + ci + ")", Qc = "[^" + Sl + "]", di = "(?:\\ud83c[\\udde6-\\uddff]){2}", fi = "[\\ud800-\\udbff][\\udc00-\\udfff]", qa = "[" + Kc + "]", ed = "\\u200d", td = "(?:" + Zc + "|" + Jc + ")", hh = "(?:" + qa + "|" + Jc + ")", nd = "(?:" + ui + "(?:d|ll|m|re|s|t|ve))?", od = "(?:" + ui + "(?:D|LL|M|RE|S|T|VE))?", ad = yh + "?", rd = "[" + qc + "]?", bh = "(?:" + ed + "(?:" + [Qc, di, fi].join("|") + ")" + rd + ad + ")*", _h = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ch = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ld = rd + ad + bh, Sh = "(?:" + [gh, di, fi].join("|") + ")" + ld, wh = "(?:" + [Qc + wl + "?", wl, di, fi, mh].join("|") + ")", $h = RegExp(ui, "g"), kh = RegExp(wl, "g"), vi = RegExp(ci + "(?=" + ci + ")|" + wh + ld, "g"), Vh = RegExp([
        qa + "?" + Zc + "+" + nd + "(?=" + [Yc, qa, "$"].join("|") + ")",
        hh + "+" + od + "(?=" + [Yc, qa + td, "$"].join("|") + ")",
        qa + "?" + td + "+" + nd,
        qa + "+" + od,
        Ch,
        _h,
        Xc,
        Sh
      ].join("|"), "g"), xh = RegExp("[" + ed + Sl + Wc + qc + "]"), Ah = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ih = [
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
      ], Th = -1, Ft = {};
      Ft[co] = Ft[ue] = Ft[ge] = Ft[Ne] = Ft[Ye] = Ft[Bt] = Ft[cn] = Ft[an] = Ft[Xn] = !0, Ft[be] = Ft[Te] = Ft[Yn] = Ft[re] = Ft[bn] = Ft[Me] = Ft[Xe] = Ft[vt] = Ft[Lt] = Ft[qt] = Ft[We] = Ft[Tt] = Ft[Et] = Ft[Zt] = Ft[jn] = !1;
      var Dt = {};
      Dt[be] = Dt[Te] = Dt[Yn] = Dt[bn] = Dt[re] = Dt[Me] = Dt[co] = Dt[ue] = Dt[ge] = Dt[Ne] = Dt[Ye] = Dt[Lt] = Dt[qt] = Dt[We] = Dt[Tt] = Dt[Et] = Dt[Zt] = Dt[qn] = Dt[Bt] = Dt[cn] = Dt[an] = Dt[Xn] = !0, Dt[Xe] = Dt[vt] = Dt[jn] = !1;
      var Bh = {
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
      }, Ph = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Lh = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Oh = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Eh = parseFloat, Rh = parseInt, sd = typeof bs == "object" && bs && bs.Object === Object && bs, Dh = typeof self == "object" && self && self.Object === Object && self, rn = sd || Dh || Function("return this")(), pi = o && !o.nodeType && o, da = pi && !0 && e && !e.nodeType && e, id = da && da.exports === pi, mi = id && sd.process, Mn = (function() {
        try {
          var X = da && da.require && da.require("util").types;
          return X || mi && mi.binding && mi.binding("util");
        } catch {
        }
      })(), ud = Mn && Mn.isArrayBuffer, cd = Mn && Mn.isDate, dd = Mn && Mn.isMap, fd = Mn && Mn.isRegExp, vd = Mn && Mn.isSet, pd = Mn && Mn.isTypedArray;
      function An(X, ce, ae) {
        switch (ae.length) {
          case 0:
            return X.call(ce);
          case 1:
            return X.call(ce, ae[0]);
          case 2:
            return X.call(ce, ae[0], ae[1]);
          case 3:
            return X.call(ce, ae[0], ae[1], ae[2]);
        }
        return X.apply(ce, ae);
      }
      function Mh(X, ce, ae, De) {
        for (var nt = -1, wt = X == null ? 0 : X.length; ++nt < wt; ) {
          var Qt = X[nt];
          ce(De, Qt, ae(Qt), X);
        }
        return De;
      }
      function Fn(X, ce) {
        for (var ae = -1, De = X == null ? 0 : X.length; ++ae < De && ce(X[ae], ae, X) !== !1; )
          ;
        return X;
      }
      function Fh(X, ce) {
        for (var ae = X == null ? 0 : X.length; ae-- && ce(X[ae], ae, X) !== !1; )
          ;
        return X;
      }
      function md(X, ce) {
        for (var ae = -1, De = X == null ? 0 : X.length; ++ae < De; )
          if (!ce(X[ae], ae, X))
            return !1;
        return !0;
      }
      function Uo(X, ce) {
        for (var ae = -1, De = X == null ? 0 : X.length, nt = 0, wt = []; ++ae < De; ) {
          var Qt = X[ae];
          ce(Qt, ae, X) && (wt[nt++] = Qt);
        }
        return wt;
      }
      function $l(X, ce) {
        var ae = X == null ? 0 : X.length;
        return !!ae && ja(X, ce, 0) > -1;
      }
      function gi(X, ce, ae) {
        for (var De = -1, nt = X == null ? 0 : X.length; ++De < nt; )
          if (ae(ce, X[De]))
            return !0;
        return !1;
      }
      function Nt(X, ce) {
        for (var ae = -1, De = X == null ? 0 : X.length, nt = Array(De); ++ae < De; )
          nt[ae] = ce(X[ae], ae, X);
        return nt;
      }
      function Go(X, ce) {
        for (var ae = -1, De = ce.length, nt = X.length; ++ae < De; )
          X[nt + ae] = ce[ae];
        return X;
      }
      function yi(X, ce, ae, De) {
        var nt = -1, wt = X == null ? 0 : X.length;
        for (De && wt && (ae = X[++nt]); ++nt < wt; )
          ae = ce(ae, X[nt], nt, X);
        return ae;
      }
      function Nh(X, ce, ae, De) {
        var nt = X == null ? 0 : X.length;
        for (De && nt && (ae = X[--nt]); nt--; )
          ae = ce(ae, X[nt], nt, X);
        return ae;
      }
      function hi(X, ce) {
        for (var ae = -1, De = X == null ? 0 : X.length; ++ae < De; )
          if (ce(X[ae], ae, X))
            return !0;
        return !1;
      }
      var zh = bi("length");
      function Hh(X) {
        return X.split("");
      }
      function Wh(X) {
        return X.match(Rt) || [];
      }
      function gd(X, ce, ae) {
        var De;
        return ae(X, function(nt, wt, Qt) {
          if (ce(nt, wt, Qt))
            return De = wt, !1;
        }), De;
      }
      function kl(X, ce, ae, De) {
        for (var nt = X.length, wt = ae + (De ? 1 : -1); De ? wt-- : ++wt < nt; )
          if (ce(X[wt], wt, X))
            return wt;
        return -1;
      }
      function ja(X, ce, ae) {
        return ce === ce ? tb(X, ce, ae) : kl(X, yd, ae);
      }
      function Uh(X, ce, ae, De) {
        for (var nt = ae - 1, wt = X.length; ++nt < wt; )
          if (De(X[nt], ce))
            return nt;
        return -1;
      }
      function yd(X) {
        return X !== X;
      }
      function hd(X, ce) {
        var ae = X == null ? 0 : X.length;
        return ae ? Ci(X, ce) / ae : le;
      }
      function bi(X) {
        return function(ce) {
          return ce == null ? t : ce[X];
        };
      }
      function _i(X) {
        return function(ce) {
          return X == null ? t : X[ce];
        };
      }
      function bd(X, ce, ae, De, nt) {
        return nt(X, function(wt, Qt, Ot) {
          ae = De ? (De = !1, wt) : ce(ae, wt, Qt, Ot);
        }), ae;
      }
      function Gh(X, ce) {
        var ae = X.length;
        for (X.sort(ce); ae--; )
          X[ae] = X[ae].value;
        return X;
      }
      function Ci(X, ce) {
        for (var ae, De = -1, nt = X.length; ++De < nt; ) {
          var wt = ce(X[De]);
          wt !== t && (ae = ae === t ? wt : ae + wt);
        }
        return ae;
      }
      function Si(X, ce) {
        for (var ae = -1, De = Array(X); ++ae < X; )
          De[ae] = ce(ae);
        return De;
      }
      function Kh(X, ce) {
        return Nt(ce, function(ae) {
          return [ae, X[ae]];
        });
      }
      function _d(X) {
        return X && X.slice(0, $d(X) + 1).replace(ca, "");
      }
      function In(X) {
        return function(ce) {
          return X(ce);
        };
      }
      function wi(X, ce) {
        return Nt(ce, function(ae) {
          return X[ae];
        });
      }
      function Vr(X, ce) {
        return X.has(ce);
      }
      function Cd(X, ce) {
        for (var ae = -1, De = X.length; ++ae < De && ja(ce, X[ae], 0) > -1; )
          ;
        return ae;
      }
      function Sd(X, ce) {
        for (var ae = X.length; ae-- && ja(ce, X[ae], 0) > -1; )
          ;
        return ae;
      }
      function qh(X, ce) {
        for (var ae = X.length, De = 0; ae--; )
          X[ae] === ce && ++De;
        return De;
      }
      var jh = _i(Bh), Yh = _i(Ph);
      function Xh(X) {
        return "\\" + Oh[X];
      }
      function Zh(X, ce) {
        return X == null ? t : X[ce];
      }
      function Ya(X) {
        return xh.test(X);
      }
      function Jh(X) {
        return Ah.test(X);
      }
      function Qh(X) {
        for (var ce, ae = []; !(ce = X.next()).done; )
          ae.push(ce.value);
        return ae;
      }
      function $i(X) {
        var ce = -1, ae = Array(X.size);
        return X.forEach(function(De, nt) {
          ae[++ce] = [nt, De];
        }), ae;
      }
      function wd(X, ce) {
        return function(ae) {
          return X(ce(ae));
        };
      }
      function Ko(X, ce) {
        for (var ae = -1, De = X.length, nt = 0, wt = []; ++ae < De; ) {
          var Qt = X[ae];
          (Qt === ce || Qt === m) && (X[ae] = m, wt[nt++] = ae);
        }
        return wt;
      }
      function Vl(X) {
        var ce = -1, ae = Array(X.size);
        return X.forEach(function(De) {
          ae[++ce] = De;
        }), ae;
      }
      function eb(X) {
        var ce = -1, ae = Array(X.size);
        return X.forEach(function(De) {
          ae[++ce] = [De, De];
        }), ae;
      }
      function tb(X, ce, ae) {
        for (var De = ae - 1, nt = X.length; ++De < nt; )
          if (X[De] === ce)
            return De;
        return -1;
      }
      function nb(X, ce, ae) {
        for (var De = ae + 1; De--; )
          if (X[De] === ce)
            return De;
        return De;
      }
      function Xa(X) {
        return Ya(X) ? ab(X) : zh(X);
      }
      function Jn(X) {
        return Ya(X) ? rb(X) : Hh(X);
      }
      function $d(X) {
        for (var ce = X.length; ce-- && si.test(X.charAt(ce)); )
          ;
        return ce;
      }
      var ob = _i(Lh);
      function ab(X) {
        for (var ce = vi.lastIndex = 0; vi.test(X); )
          ++ce;
        return ce;
      }
      function rb(X) {
        return X.match(vi) || [];
      }
      function lb(X) {
        return X.match(Vh) || [];
      }
      var sb = (function X(ce) {
        ce = ce == null ? rn : Za.defaults(rn.Object(), ce, Za.pick(rn, Ih));
        var ae = ce.Array, De = ce.Date, nt = ce.Error, wt = ce.Function, Qt = ce.Math, Ot = ce.Object, ki = ce.RegExp, ib = ce.String, Nn = ce.TypeError, xl = ae.prototype, ub = wt.prototype, Ja = Ot.prototype, Al = ce["__core-js_shared__"], Il = ub.toString, At = Ja.hasOwnProperty, cb = 0, kd = (function() {
          var n = /[^.]+$/.exec(Al && Al.keys && Al.keys.IE_PROTO || "");
          return n ? "Symbol(src)_1." + n : "";
        })(), Tl = Ja.toString, db = Il.call(Ot), fb = rn._, vb = ki(
          "^" + Il.call(At).replace($r, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Bl = id ? ce.Buffer : t, qo = ce.Symbol, Pl = ce.Uint8Array, Vd = Bl ? Bl.allocUnsafe : t, Ll = wd(Ot.getPrototypeOf, Ot), xd = Ot.create, Ad = Ja.propertyIsEnumerable, Ol = xl.splice, Id = qo ? qo.isConcatSpreadable : t, xr = qo ? qo.iterator : t, fa = qo ? qo.toStringTag : t, El = (function() {
          try {
            var n = ya(Ot, "defineProperty");
            return n({}, "", {}), n;
          } catch {
          }
        })(), pb = ce.clearTimeout !== rn.clearTimeout && ce.clearTimeout, mb = De && De.now !== rn.Date.now && De.now, gb = ce.setTimeout !== rn.setTimeout && ce.setTimeout, Rl = Qt.ceil, Dl = Qt.floor, Vi = Ot.getOwnPropertySymbols, yb = Bl ? Bl.isBuffer : t, Td = ce.isFinite, hb = xl.join, bb = wd(Ot.keys, Ot), en = Qt.max, dn = Qt.min, _b = De.now, Cb = ce.parseInt, Bd = Qt.random, Sb = xl.reverse, xi = ya(ce, "DataView"), Ar = ya(ce, "Map"), Ai = ya(ce, "Promise"), Qa = ya(ce, "Set"), Ir = ya(ce, "WeakMap"), Tr = ya(Ot, "create"), Ml = Ir && new Ir(), er = {}, wb = ha(xi), $b = ha(Ar), kb = ha(Ai), Vb = ha(Qa), xb = ha(Ir), Fl = qo ? qo.prototype : t, Br = Fl ? Fl.valueOf : t, Pd = Fl ? Fl.toString : t;
        function I(n) {
          if (jt(n) && !rt(n) && !(n instanceof mt)) {
            if (n instanceof zn)
              return n;
            if (At.call(n, "__wrapped__"))
              return Of(n);
          }
          return new zn(n);
        }
        var tr = /* @__PURE__ */ (function() {
          function n() {
          }
          return function(r) {
            if (!Ut(r))
              return {};
            if (xd)
              return xd(r);
            n.prototype = r;
            var u = new n();
            return n.prototype = t, u;
          };
        })();
        function Nl() {
        }
        function zn(n, r) {
          this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = t;
        }
        I.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: bl,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: oi,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: _l,
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
            _: I
          }
        }, I.prototype = Nl.prototype, I.prototype.constructor = I, zn.prototype = tr(Nl.prototype), zn.prototype.constructor = zn;
        function mt(n) {
          this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = _e, this.__views__ = [];
        }
        function Ab() {
          var n = new mt(this.__wrapped__);
          return n.__actions__ = _n(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = _n(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = _n(this.__views__), n;
        }
        function Ib() {
          if (this.__filtered__) {
            var n = new mt(this);
            n.__dir__ = -1, n.__filtered__ = !0;
          } else
            n = this.clone(), n.__dir__ *= -1;
          return n;
        }
        function Tb() {
          var n = this.__wrapped__.value(), r = this.__dir__, u = rt(n), h = r < 0, k = u ? n.length : 0, B = H0(0, k, this.__views__), F = B.start, K = B.end, Q = K - F, fe = h ? K : F - 1, ve = this.__iteratees__, he = ve.length, Pe = 0, Ge = dn(Q, this.__takeCount__);
          if (!u || !h && k == Q && Ge == Q)
            return nf(n, this.__actions__);
          var Je = [];
          e:
            for (; Q-- && Pe < Ge; ) {
              fe += r;
              for (var it = -1, Qe = n[fe]; ++it < he; ) {
                var ft = ve[it], gt = ft.iteratee, Pn = ft.type, gn = gt(Qe);
                if (Pn == W)
                  Qe = gn;
                else if (!gn) {
                  if (Pn == j)
                    continue e;
                  break e;
                }
              }
              Je[Pe++] = Qe;
            }
          return Je;
        }
        mt.prototype = tr(Nl.prototype), mt.prototype.constructor = mt;
        function va(n) {
          var r = -1, u = n == null ? 0 : n.length;
          for (this.clear(); ++r < u; ) {
            var h = n[r];
            this.set(h[0], h[1]);
          }
        }
        function Bb() {
          this.__data__ = Tr ? Tr(null) : {}, this.size = 0;
        }
        function Pb(n) {
          var r = this.has(n) && delete this.__data__[n];
          return this.size -= r ? 1 : 0, r;
        }
        function Lb(n) {
          var r = this.__data__;
          if (Tr) {
            var u = r[n];
            return u === p ? t : u;
          }
          return At.call(r, n) ? r[n] : t;
        }
        function Ob(n) {
          var r = this.__data__;
          return Tr ? r[n] !== t : At.call(r, n);
        }
        function Eb(n, r) {
          var u = this.__data__;
          return this.size += this.has(n) ? 0 : 1, u[n] = Tr && r === t ? p : r, this;
        }
        va.prototype.clear = Bb, va.prototype.delete = Pb, va.prototype.get = Lb, va.prototype.has = Ob, va.prototype.set = Eb;
        function ko(n) {
          var r = -1, u = n == null ? 0 : n.length;
          for (this.clear(); ++r < u; ) {
            var h = n[r];
            this.set(h[0], h[1]);
          }
        }
        function Rb() {
          this.__data__ = [], this.size = 0;
        }
        function Db(n) {
          var r = this.__data__, u = zl(r, n);
          if (u < 0)
            return !1;
          var h = r.length - 1;
          return u == h ? r.pop() : Ol.call(r, u, 1), --this.size, !0;
        }
        function Mb(n) {
          var r = this.__data__, u = zl(r, n);
          return u < 0 ? t : r[u][1];
        }
        function Fb(n) {
          return zl(this.__data__, n) > -1;
        }
        function Nb(n, r) {
          var u = this.__data__, h = zl(u, n);
          return h < 0 ? (++this.size, u.push([n, r])) : u[h][1] = r, this;
        }
        ko.prototype.clear = Rb, ko.prototype.delete = Db, ko.prototype.get = Mb, ko.prototype.has = Fb, ko.prototype.set = Nb;
        function Vo(n) {
          var r = -1, u = n == null ? 0 : n.length;
          for (this.clear(); ++r < u; ) {
            var h = n[r];
            this.set(h[0], h[1]);
          }
        }
        function zb() {
          this.size = 0, this.__data__ = {
            hash: new va(),
            map: new (Ar || ko)(),
            string: new va()
          };
        }
        function Hb(n) {
          var r = Ql(this, n).delete(n);
          return this.size -= r ? 1 : 0, r;
        }
        function Wb(n) {
          return Ql(this, n).get(n);
        }
        function Ub(n) {
          return Ql(this, n).has(n);
        }
        function Gb(n, r) {
          var u = Ql(this, n), h = u.size;
          return u.set(n, r), this.size += u.size == h ? 0 : 1, this;
        }
        Vo.prototype.clear = zb, Vo.prototype.delete = Hb, Vo.prototype.get = Wb, Vo.prototype.has = Ub, Vo.prototype.set = Gb;
        function pa(n) {
          var r = -1, u = n == null ? 0 : n.length;
          for (this.__data__ = new Vo(); ++r < u; )
            this.add(n[r]);
        }
        function Kb(n) {
          return this.__data__.set(n, p), this;
        }
        function qb(n) {
          return this.__data__.has(n);
        }
        pa.prototype.add = pa.prototype.push = Kb, pa.prototype.has = qb;
        function Qn(n) {
          var r = this.__data__ = new ko(n);
          this.size = r.size;
        }
        function jb() {
          this.__data__ = new ko(), this.size = 0;
        }
        function Yb(n) {
          var r = this.__data__, u = r.delete(n);
          return this.size = r.size, u;
        }
        function Xb(n) {
          return this.__data__.get(n);
        }
        function Zb(n) {
          return this.__data__.has(n);
        }
        function Jb(n, r) {
          var u = this.__data__;
          if (u instanceof ko) {
            var h = u.__data__;
            if (!Ar || h.length < l - 1)
              return h.push([n, r]), this.size = ++u.size, this;
            u = this.__data__ = new Vo(h);
          }
          return u.set(n, r), this.size = u.size, this;
        }
        Qn.prototype.clear = jb, Qn.prototype.delete = Yb, Qn.prototype.get = Xb, Qn.prototype.has = Zb, Qn.prototype.set = Jb;
        function Ld(n, r) {
          var u = rt(n), h = !u && ba(n), k = !u && !h && Jo(n), B = !u && !h && !k && rr(n), F = u || h || k || B, K = F ? Si(n.length, ib) : [], Q = K.length;
          for (var fe in n)
            (r || At.call(n, fe)) && !(F && // Safari 9 has enumerable `arguments.length` in strict mode.
            (fe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            k && (fe == "offset" || fe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            B && (fe == "buffer" || fe == "byteLength" || fe == "byteOffset") || // Skip index properties.
            To(fe, Q))) && K.push(fe);
          return K;
        }
        function Od(n) {
          var r = n.length;
          return r ? n[Fi(0, r - 1)] : t;
        }
        function Qb(n, r) {
          return es(_n(n), ma(r, 0, n.length));
        }
        function e0(n) {
          return es(_n(n));
        }
        function Ii(n, r, u) {
          (u !== t && !eo(n[r], u) || u === t && !(r in n)) && xo(n, r, u);
        }
        function Pr(n, r, u) {
          var h = n[r];
          (!(At.call(n, r) && eo(h, u)) || u === t && !(r in n)) && xo(n, r, u);
        }
        function zl(n, r) {
          for (var u = n.length; u--; )
            if (eo(n[u][0], r))
              return u;
          return -1;
        }
        function t0(n, r, u, h) {
          return jo(n, function(k, B, F) {
            r(h, k, u(k), F);
          }), h;
        }
        function Ed(n, r) {
          return n && po(r, nn(r), n);
        }
        function n0(n, r) {
          return n && po(r, Sn(r), n);
        }
        function xo(n, r, u) {
          r == "__proto__" && El ? El(n, r, {
            configurable: !0,
            enumerable: !0,
            value: u,
            writable: !0
          }) : n[r] = u;
        }
        function Ti(n, r) {
          for (var u = -1, h = r.length, k = ae(h), B = n == null; ++u < h; )
            k[u] = B ? t : cu(n, r[u]);
          return k;
        }
        function ma(n, r, u) {
          return n === n && (u !== t && (n = n <= u ? n : u), r !== t && (n = n >= r ? n : r)), n;
        }
        function Hn(n, r, u, h, k, B) {
          var F, K = r & g, Q = r & y, fe = r & b;
          if (u && (F = k ? u(n, h, k, B) : u(n)), F !== t)
            return F;
          if (!Ut(n))
            return n;
          var ve = rt(n);
          if (ve) {
            if (F = U0(n), !K)
              return _n(n, F);
          } else {
            var he = fn(n), Pe = he == vt || he == Wt;
            if (Jo(n))
              return rf(n, K);
            if (he == We || he == be || Pe && !k) {
              if (F = Q || Pe ? {} : kf(n), !K)
                return Q ? L0(n, n0(F, n)) : P0(n, Ed(F, n));
            } else {
              if (!Dt[he])
                return k ? n : {};
              F = G0(n, he, K);
            }
          }
          B || (B = new Qn());
          var Ge = B.get(n);
          if (Ge)
            return Ge;
          B.set(n, F), ev(n) ? n.forEach(function(Qe) {
            F.add(Hn(Qe, r, u, Qe, n, B));
          }) : Jf(n) && n.forEach(function(Qe, ft) {
            F.set(ft, Hn(Qe, r, u, ft, n, B));
          });
          var Je = fe ? Q ? Xi : Yi : Q ? Sn : nn, it = ve ? t : Je(n);
          return Fn(it || n, function(Qe, ft) {
            it && (ft = Qe, Qe = n[ft]), Pr(F, ft, Hn(Qe, r, u, ft, n, B));
          }), F;
        }
        function o0(n) {
          var r = nn(n);
          return function(u) {
            return Rd(u, n, r);
          };
        }
        function Rd(n, r, u) {
          var h = u.length;
          if (n == null)
            return !h;
          for (n = Ot(n); h--; ) {
            var k = u[h], B = r[k], F = n[k];
            if (F === t && !(k in n) || !B(F))
              return !1;
          }
          return !0;
        }
        function Dd(n, r, u) {
          if (typeof n != "function")
            throw new Nn(i);
          return Fr(function() {
            n.apply(t, u);
          }, r);
        }
        function Lr(n, r, u, h) {
          var k = -1, B = $l, F = !0, K = n.length, Q = [], fe = r.length;
          if (!K)
            return Q;
          u && (r = Nt(r, In(u))), h ? (B = gi, F = !1) : r.length >= l && (B = Vr, F = !1, r = new pa(r));
          e:
            for (; ++k < K; ) {
              var ve = n[k], he = u == null ? ve : u(ve);
              if (ve = h || ve !== 0 ? ve : 0, F && he === he) {
                for (var Pe = fe; Pe--; )
                  if (r[Pe] === he)
                    continue e;
                Q.push(ve);
              } else B(r, he, h) || Q.push(ve);
            }
          return Q;
        }
        var jo = df(vo), Md = df(Pi, !0);
        function a0(n, r) {
          var u = !0;
          return jo(n, function(h, k, B) {
            return u = !!r(h, k, B), u;
          }), u;
        }
        function Hl(n, r, u) {
          for (var h = -1, k = n.length; ++h < k; ) {
            var B = n[h], F = r(B);
            if (F != null && (K === t ? F === F && !Bn(F) : u(F, K)))
              var K = F, Q = B;
          }
          return Q;
        }
        function r0(n, r, u, h) {
          var k = n.length;
          for (u = st(u), u < 0 && (u = -u > k ? 0 : k + u), h = h === t || h > k ? k : st(h), h < 0 && (h += k), h = u > h ? 0 : nv(h); u < h; )
            n[u++] = r;
          return n;
        }
        function Fd(n, r) {
          var u = [];
          return jo(n, function(h, k, B) {
            r(h, k, B) && u.push(h);
          }), u;
        }
        function ln(n, r, u, h, k) {
          var B = -1, F = n.length;
          for (u || (u = q0), k || (k = []); ++B < F; ) {
            var K = n[B];
            r > 0 && u(K) ? r > 1 ? ln(K, r - 1, u, h, k) : Go(k, K) : h || (k[k.length] = K);
          }
          return k;
        }
        var Bi = ff(), Nd = ff(!0);
        function vo(n, r) {
          return n && Bi(n, r, nn);
        }
        function Pi(n, r) {
          return n && Nd(n, r, nn);
        }
        function Wl(n, r) {
          return Uo(r, function(u) {
            return Bo(n[u]);
          });
        }
        function ga(n, r) {
          r = Xo(r, n);
          for (var u = 0, h = r.length; n != null && u < h; )
            n = n[mo(r[u++])];
          return u && u == h ? n : t;
        }
        function zd(n, r, u) {
          var h = r(n);
          return rt(n) ? h : Go(h, u(n));
        }
        function pn(n) {
          return n == null ? n === t ? uo : tt : fa && fa in Ot(n) ? z0(n) : e1(n);
        }
        function Li(n, r) {
          return n > r;
        }
        function l0(n, r) {
          return n != null && At.call(n, r);
        }
        function s0(n, r) {
          return n != null && r in Ot(n);
        }
        function i0(n, r, u) {
          return n >= dn(r, u) && n < en(r, u);
        }
        function Oi(n, r, u) {
          for (var h = u ? gi : $l, k = n[0].length, B = n.length, F = B, K = ae(B), Q = 1 / 0, fe = []; F--; ) {
            var ve = n[F];
            F && r && (ve = Nt(ve, In(r))), Q = dn(ve.length, Q), K[F] = !u && (r || k >= 120 && ve.length >= 120) ? new pa(F && ve) : t;
          }
          ve = n[0];
          var he = -1, Pe = K[0];
          e:
            for (; ++he < k && fe.length < Q; ) {
              var Ge = ve[he], Je = r ? r(Ge) : Ge;
              if (Ge = u || Ge !== 0 ? Ge : 0, !(Pe ? Vr(Pe, Je) : h(fe, Je, u))) {
                for (F = B; --F; ) {
                  var it = K[F];
                  if (!(it ? Vr(it, Je) : h(n[F], Je, u)))
                    continue e;
                }
                Pe && Pe.push(Je), fe.push(Ge);
              }
            }
          return fe;
        }
        function u0(n, r, u, h) {
          return vo(n, function(k, B, F) {
            r(h, u(k), B, F);
          }), h;
        }
        function Or(n, r, u) {
          r = Xo(r, n), n = If(n, r);
          var h = n == null ? n : n[mo(Un(r))];
          return h == null ? t : An(h, n, u);
        }
        function Hd(n) {
          return jt(n) && pn(n) == be;
        }
        function c0(n) {
          return jt(n) && pn(n) == Yn;
        }
        function d0(n) {
          return jt(n) && pn(n) == Me;
        }
        function Er(n, r, u, h, k) {
          return n === r ? !0 : n == null || r == null || !jt(n) && !jt(r) ? n !== n && r !== r : f0(n, r, u, h, Er, k);
        }
        function f0(n, r, u, h, k, B) {
          var F = rt(n), K = rt(r), Q = F ? Te : fn(n), fe = K ? Te : fn(r);
          Q = Q == be ? We : Q, fe = fe == be ? We : fe;
          var ve = Q == We, he = fe == We, Pe = Q == fe;
          if (Pe && Jo(n)) {
            if (!Jo(r))
              return !1;
            F = !0, ve = !1;
          }
          if (Pe && !ve)
            return B || (B = new Qn()), F || rr(n) ? Sf(n, r, u, h, k, B) : F0(n, r, Q, u, h, k, B);
          if (!(u & C)) {
            var Ge = ve && At.call(n, "__wrapped__"), Je = he && At.call(r, "__wrapped__");
            if (Ge || Je) {
              var it = Ge ? n.value() : n, Qe = Je ? r.value() : r;
              return B || (B = new Qn()), k(it, Qe, u, h, B);
            }
          }
          return Pe ? (B || (B = new Qn()), N0(n, r, u, h, k, B)) : !1;
        }
        function v0(n) {
          return jt(n) && fn(n) == Lt;
        }
        function Ei(n, r, u, h) {
          var k = u.length, B = k, F = !h;
          if (n == null)
            return !B;
          for (n = Ot(n); k--; ) {
            var K = u[k];
            if (F && K[2] ? K[1] !== n[K[0]] : !(K[0] in n))
              return !1;
          }
          for (; ++k < B; ) {
            K = u[k];
            var Q = K[0], fe = n[Q], ve = K[1];
            if (F && K[2]) {
              if (fe === t && !(Q in n))
                return !1;
            } else {
              var he = new Qn();
              if (h)
                var Pe = h(fe, ve, Q, n, r, he);
              if (!(Pe === t ? Er(ve, fe, C | _, h, he) : Pe))
                return !1;
            }
          }
          return !0;
        }
        function Wd(n) {
          if (!Ut(n) || Y0(n))
            return !1;
          var r = Bo(n) ? vb : oh;
          return r.test(ha(n));
        }
        function p0(n) {
          return jt(n) && pn(n) == Tt;
        }
        function m0(n) {
          return jt(n) && fn(n) == Et;
        }
        function g0(n) {
          return jt(n) && ls(n.length) && !!Ft[pn(n)];
        }
        function Ud(n) {
          return typeof n == "function" ? n : n == null ? wn : typeof n == "object" ? rt(n) ? qd(n[0], n[1]) : Kd(n) : vv(n);
        }
        function Ri(n) {
          if (!Mr(n))
            return bb(n);
          var r = [];
          for (var u in Ot(n))
            At.call(n, u) && u != "constructor" && r.push(u);
          return r;
        }
        function y0(n) {
          if (!Ut(n))
            return Q0(n);
          var r = Mr(n), u = [];
          for (var h in n)
            h == "constructor" && (r || !At.call(n, h)) || u.push(h);
          return u;
        }
        function Di(n, r) {
          return n < r;
        }
        function Gd(n, r) {
          var u = -1, h = Cn(n) ? ae(n.length) : [];
          return jo(n, function(k, B, F) {
            h[++u] = r(k, B, F);
          }), h;
        }
        function Kd(n) {
          var r = Ji(n);
          return r.length == 1 && r[0][2] ? xf(r[0][0], r[0][1]) : function(u) {
            return u === n || Ei(u, n, r);
          };
        }
        function qd(n, r) {
          return eu(n) && Vf(r) ? xf(mo(n), r) : function(u) {
            var h = cu(u, n);
            return h === t && h === r ? du(u, n) : Er(r, h, C | _);
          };
        }
        function Ul(n, r, u, h, k) {
          n !== r && Bi(r, function(B, F) {
            if (k || (k = new Qn()), Ut(B))
              h0(n, r, F, u, Ul, h, k);
            else {
              var K = h ? h(nu(n, F), B, F + "", n, r, k) : t;
              K === t && (K = B), Ii(n, F, K);
            }
          }, Sn);
        }
        function h0(n, r, u, h, k, B, F) {
          var K = nu(n, u), Q = nu(r, u), fe = F.get(Q);
          if (fe) {
            Ii(n, u, fe);
            return;
          }
          var ve = B ? B(K, Q, u + "", n, r, F) : t, he = ve === t;
          if (he) {
            var Pe = rt(Q), Ge = !Pe && Jo(Q), Je = !Pe && !Ge && rr(Q);
            ve = Q, Pe || Ge || Je ? rt(K) ? ve = K : Yt(K) ? ve = _n(K) : Ge ? (he = !1, ve = rf(Q, !0)) : Je ? (he = !1, ve = lf(Q, !0)) : ve = [] : Nr(Q) || ba(Q) ? (ve = K, ba(K) ? ve = ov(K) : (!Ut(K) || Bo(K)) && (ve = kf(Q))) : he = !1;
          }
          he && (F.set(Q, ve), k(ve, Q, h, B, F), F.delete(Q)), Ii(n, u, ve);
        }
        function jd(n, r) {
          var u = n.length;
          if (u)
            return r += r < 0 ? u : 0, To(r, u) ? n[r] : t;
        }
        function Yd(n, r, u) {
          r.length ? r = Nt(r, function(B) {
            return rt(B) ? function(F) {
              return ga(F, B.length === 1 ? B[0] : B);
            } : B;
          }) : r = [wn];
          var h = -1;
          r = Nt(r, In(Ze()));
          var k = Gd(n, function(B, F, K) {
            var Q = Nt(r, function(fe) {
              return fe(B);
            });
            return { criteria: Q, index: ++h, value: B };
          });
          return Gh(k, function(B, F) {
            return B0(B, F, u);
          });
        }
        function b0(n, r) {
          return Xd(n, r, function(u, h) {
            return du(n, h);
          });
        }
        function Xd(n, r, u) {
          for (var h = -1, k = r.length, B = {}; ++h < k; ) {
            var F = r[h], K = ga(n, F);
            u(K, F) && Rr(B, Xo(F, n), K);
          }
          return B;
        }
        function _0(n) {
          return function(r) {
            return ga(r, n);
          };
        }
        function Mi(n, r, u, h) {
          var k = h ? Uh : ja, B = -1, F = r.length, K = n;
          for (n === r && (r = _n(r)), u && (K = Nt(n, In(u))); ++B < F; )
            for (var Q = 0, fe = r[B], ve = u ? u(fe) : fe; (Q = k(K, ve, Q, h)) > -1; )
              K !== n && Ol.call(K, Q, 1), Ol.call(n, Q, 1);
          return n;
        }
        function Zd(n, r) {
          for (var u = n ? r.length : 0, h = u - 1; u--; ) {
            var k = r[u];
            if (u == h || k !== B) {
              var B = k;
              To(k) ? Ol.call(n, k, 1) : Hi(n, k);
            }
          }
          return n;
        }
        function Fi(n, r) {
          return n + Dl(Bd() * (r - n + 1));
        }
        function C0(n, r, u, h) {
          for (var k = -1, B = en(Rl((r - n) / (u || 1)), 0), F = ae(B); B--; )
            F[h ? B : ++k] = n, n += u;
          return F;
        }
        function Ni(n, r) {
          var u = "";
          if (!n || r < 1 || r > z)
            return u;
          do
            r % 2 && (u += n), r = Dl(r / 2), r && (n += n);
          while (r);
          return u;
        }
        function dt(n, r) {
          return ou(Af(n, r, wn), n + "");
        }
        function S0(n) {
          return Od(lr(n));
        }
        function w0(n, r) {
          var u = lr(n);
          return es(u, ma(r, 0, u.length));
        }
        function Rr(n, r, u, h) {
          if (!Ut(n))
            return n;
          r = Xo(r, n);
          for (var k = -1, B = r.length, F = B - 1, K = n; K != null && ++k < B; ) {
            var Q = mo(r[k]), fe = u;
            if (Q === "__proto__" || Q === "constructor" || Q === "prototype")
              return n;
            if (k != F) {
              var ve = K[Q];
              fe = h ? h(ve, Q, K) : t, fe === t && (fe = Ut(ve) ? ve : To(r[k + 1]) ? [] : {});
            }
            Pr(K, Q, fe), K = K[Q];
          }
          return n;
        }
        var Jd = Ml ? function(n, r) {
          return Ml.set(n, r), n;
        } : wn, $0 = El ? function(n, r) {
          return El(n, "toString", {
            configurable: !0,
            enumerable: !1,
            value: vu(r),
            writable: !0
          });
        } : wn;
        function k0(n) {
          return es(lr(n));
        }
        function Wn(n, r, u) {
          var h = -1, k = n.length;
          r < 0 && (r = -r > k ? 0 : k + r), u = u > k ? k : u, u < 0 && (u += k), k = r > u ? 0 : u - r >>> 0, r >>>= 0;
          for (var B = ae(k); ++h < k; )
            B[h] = n[h + r];
          return B;
        }
        function V0(n, r) {
          var u;
          return jo(n, function(h, k, B) {
            return u = r(h, k, B), !u;
          }), !!u;
        }
        function Gl(n, r, u) {
          var h = 0, k = n == null ? h : n.length;
          if (typeof r == "number" && r === r && k <= Ve) {
            for (; h < k; ) {
              var B = h + k >>> 1, F = n[B];
              F !== null && !Bn(F) && (u ? F <= r : F < r) ? h = B + 1 : k = B;
            }
            return k;
          }
          return zi(n, r, wn, u);
        }
        function zi(n, r, u, h) {
          var k = 0, B = n == null ? 0 : n.length;
          if (B === 0)
            return 0;
          r = u(r);
          for (var F = r !== r, K = r === null, Q = Bn(r), fe = r === t; k < B; ) {
            var ve = Dl((k + B) / 2), he = u(n[ve]), Pe = he !== t, Ge = he === null, Je = he === he, it = Bn(he);
            if (F)
              var Qe = h || Je;
            else fe ? Qe = Je && (h || Pe) : K ? Qe = Je && Pe && (h || !Ge) : Q ? Qe = Je && Pe && !Ge && (h || !it) : Ge || it ? Qe = !1 : Qe = h ? he <= r : he < r;
            Qe ? k = ve + 1 : B = ve;
          }
          return dn(B, Re);
        }
        function Qd(n, r) {
          for (var u = -1, h = n.length, k = 0, B = []; ++u < h; ) {
            var F = n[u], K = r ? r(F) : F;
            if (!u || !eo(K, Q)) {
              var Q = K;
              B[k++] = F === 0 ? 0 : F;
            }
          }
          return B;
        }
        function ef(n) {
          return typeof n == "number" ? n : Bn(n) ? le : +n;
        }
        function Tn(n) {
          if (typeof n == "string")
            return n;
          if (rt(n))
            return Nt(n, Tn) + "";
          if (Bn(n))
            return Pd ? Pd.call(n) : "";
          var r = n + "";
          return r == "0" && 1 / n == -Z ? "-0" : r;
        }
        function Yo(n, r, u) {
          var h = -1, k = $l, B = n.length, F = !0, K = [], Q = K;
          if (u)
            F = !1, k = gi;
          else if (B >= l) {
            var fe = r ? null : D0(n);
            if (fe)
              return Vl(fe);
            F = !1, k = Vr, Q = new pa();
          } else
            Q = r ? [] : K;
          e:
            for (; ++h < B; ) {
              var ve = n[h], he = r ? r(ve) : ve;
              if (ve = u || ve !== 0 ? ve : 0, F && he === he) {
                for (var Pe = Q.length; Pe--; )
                  if (Q[Pe] === he)
                    continue e;
                r && Q.push(he), K.push(ve);
              } else k(Q, he, u) || (Q !== K && Q.push(he), K.push(ve));
            }
          return K;
        }
        function Hi(n, r) {
          return r = Xo(r, n), n = If(n, r), n == null || delete n[mo(Un(r))];
        }
        function tf(n, r, u, h) {
          return Rr(n, r, u(ga(n, r)), h);
        }
        function Kl(n, r, u, h) {
          for (var k = n.length, B = h ? k : -1; (h ? B-- : ++B < k) && r(n[B], B, n); )
            ;
          return u ? Wn(n, h ? 0 : B, h ? B + 1 : k) : Wn(n, h ? B + 1 : 0, h ? k : B);
        }
        function nf(n, r) {
          var u = n;
          return u instanceof mt && (u = u.value()), yi(r, function(h, k) {
            return k.func.apply(k.thisArg, Go([h], k.args));
          }, u);
        }
        function Wi(n, r, u) {
          var h = n.length;
          if (h < 2)
            return h ? Yo(n[0]) : [];
          for (var k = -1, B = ae(h); ++k < h; )
            for (var F = n[k], K = -1; ++K < h; )
              K != k && (B[k] = Lr(B[k] || F, n[K], r, u));
          return Yo(ln(B, 1), r, u);
        }
        function of(n, r, u) {
          for (var h = -1, k = n.length, B = r.length, F = {}; ++h < k; ) {
            var K = h < B ? r[h] : t;
            u(F, n[h], K);
          }
          return F;
        }
        function Ui(n) {
          return Yt(n) ? n : [];
        }
        function Gi(n) {
          return typeof n == "function" ? n : wn;
        }
        function Xo(n, r) {
          return rt(n) ? n : eu(n, r) ? [n] : Lf(kt(n));
        }
        var x0 = dt;
        function Zo(n, r, u) {
          var h = n.length;
          return u = u === t ? h : u, !r && u >= h ? n : Wn(n, r, u);
        }
        var af = pb || function(n) {
          return rn.clearTimeout(n);
        };
        function rf(n, r) {
          if (r)
            return n.slice();
          var u = n.length, h = Vd ? Vd(u) : new n.constructor(u);
          return n.copy(h), h;
        }
        function Ki(n) {
          var r = new n.constructor(n.byteLength);
          return new Pl(r).set(new Pl(n)), r;
        }
        function A0(n, r) {
          var u = r ? Ki(n.buffer) : n.buffer;
          return new n.constructor(u, n.byteOffset, n.byteLength);
        }
        function I0(n) {
          var r = new n.constructor(n.source, Hc.exec(n));
          return r.lastIndex = n.lastIndex, r;
        }
        function T0(n) {
          return Br ? Ot(Br.call(n)) : {};
        }
        function lf(n, r) {
          var u = r ? Ki(n.buffer) : n.buffer;
          return new n.constructor(u, n.byteOffset, n.length);
        }
        function sf(n, r) {
          if (n !== r) {
            var u = n !== t, h = n === null, k = n === n, B = Bn(n), F = r !== t, K = r === null, Q = r === r, fe = Bn(r);
            if (!K && !fe && !B && n > r || B && F && Q && !K && !fe || h && F && Q || !u && Q || !k)
              return 1;
            if (!h && !B && !fe && n < r || fe && u && k && !h && !B || K && u && k || !F && k || !Q)
              return -1;
          }
          return 0;
        }
        function B0(n, r, u) {
          for (var h = -1, k = n.criteria, B = r.criteria, F = k.length, K = u.length; ++h < F; ) {
            var Q = sf(k[h], B[h]);
            if (Q) {
              if (h >= K)
                return Q;
              var fe = u[h];
              return Q * (fe == "desc" ? -1 : 1);
            }
          }
          return n.index - r.index;
        }
        function uf(n, r, u, h) {
          for (var k = -1, B = n.length, F = u.length, K = -1, Q = r.length, fe = en(B - F, 0), ve = ae(Q + fe), he = !h; ++K < Q; )
            ve[K] = r[K];
          for (; ++k < F; )
            (he || k < B) && (ve[u[k]] = n[k]);
          for (; fe--; )
            ve[K++] = n[k++];
          return ve;
        }
        function cf(n, r, u, h) {
          for (var k = -1, B = n.length, F = -1, K = u.length, Q = -1, fe = r.length, ve = en(B - K, 0), he = ae(ve + fe), Pe = !h; ++k < ve; )
            he[k] = n[k];
          for (var Ge = k; ++Q < fe; )
            he[Ge + Q] = r[Q];
          for (; ++F < K; )
            (Pe || k < B) && (he[Ge + u[F]] = n[k++]);
          return he;
        }
        function _n(n, r) {
          var u = -1, h = n.length;
          for (r || (r = ae(h)); ++u < h; )
            r[u] = n[u];
          return r;
        }
        function po(n, r, u, h) {
          var k = !u;
          u || (u = {});
          for (var B = -1, F = r.length; ++B < F; ) {
            var K = r[B], Q = h ? h(u[K], n[K], K, u, n) : t;
            Q === t && (Q = n[K]), k ? xo(u, K, Q) : Pr(u, K, Q);
          }
          return u;
        }
        function P0(n, r) {
          return po(n, Qi(n), r);
        }
        function L0(n, r) {
          return po(n, wf(n), r);
        }
        function ql(n, r) {
          return function(u, h) {
            var k = rt(u) ? Mh : t0, B = r ? r() : {};
            return k(u, n, Ze(h, 2), B);
          };
        }
        function nr(n) {
          return dt(function(r, u) {
            var h = -1, k = u.length, B = k > 1 ? u[k - 1] : t, F = k > 2 ? u[2] : t;
            for (B = n.length > 3 && typeof B == "function" ? (k--, B) : t, F && mn(u[0], u[1], F) && (B = k < 3 ? t : B, k = 1), r = Ot(r); ++h < k; ) {
              var K = u[h];
              K && n(r, K, h, B);
            }
            return r;
          });
        }
        function df(n, r) {
          return function(u, h) {
            if (u == null)
              return u;
            if (!Cn(u))
              return n(u, h);
            for (var k = u.length, B = r ? k : -1, F = Ot(u); (r ? B-- : ++B < k) && h(F[B], B, F) !== !1; )
              ;
            return u;
          };
        }
        function ff(n) {
          return function(r, u, h) {
            for (var k = -1, B = Ot(r), F = h(r), K = F.length; K--; ) {
              var Q = F[n ? K : ++k];
              if (u(B[Q], Q, B) === !1)
                break;
            }
            return r;
          };
        }
        function O0(n, r, u) {
          var h = r & S, k = Dr(n);
          function B() {
            var F = this && this !== rn && this instanceof B ? k : n;
            return F.apply(h ? u : this, arguments);
          }
          return B;
        }
        function vf(n) {
          return function(r) {
            r = kt(r);
            var u = Ya(r) ? Jn(r) : t, h = u ? u[0] : r.charAt(0), k = u ? Zo(u, 1).join("") : r.slice(1);
            return h[n]() + k;
          };
        }
        function or(n) {
          return function(r) {
            return yi(dv(cv(r).replace($h, "")), n, "");
          };
        }
        function Dr(n) {
          return function() {
            var r = arguments;
            switch (r.length) {
              case 0:
                return new n();
              case 1:
                return new n(r[0]);
              case 2:
                return new n(r[0], r[1]);
              case 3:
                return new n(r[0], r[1], r[2]);
              case 4:
                return new n(r[0], r[1], r[2], r[3]);
              case 5:
                return new n(r[0], r[1], r[2], r[3], r[4]);
              case 6:
                return new n(r[0], r[1], r[2], r[3], r[4], r[5]);
              case 7:
                return new n(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
            }
            var u = tr(n.prototype), h = n.apply(u, r);
            return Ut(h) ? h : u;
          };
        }
        function E0(n, r, u) {
          var h = Dr(n);
          function k() {
            for (var B = arguments.length, F = ae(B), K = B, Q = ar(k); K--; )
              F[K] = arguments[K];
            var fe = B < 3 && F[0] !== Q && F[B - 1] !== Q ? [] : Ko(F, Q);
            if (B -= fe.length, B < u)
              return hf(
                n,
                r,
                jl,
                k.placeholder,
                t,
                F,
                fe,
                t,
                t,
                u - B
              );
            var ve = this && this !== rn && this instanceof k ? h : n;
            return An(ve, this, F);
          }
          return k;
        }
        function pf(n) {
          return function(r, u, h) {
            var k = Ot(r);
            if (!Cn(r)) {
              var B = Ze(u, 3);
              r = nn(r), u = function(K) {
                return B(k[K], K, k);
              };
            }
            var F = n(r, u, h);
            return F > -1 ? k[B ? r[F] : F] : t;
          };
        }
        function mf(n) {
          return Io(function(r) {
            var u = r.length, h = u, k = zn.prototype.thru;
            for (n && r.reverse(); h--; ) {
              var B = r[h];
              if (typeof B != "function")
                throw new Nn(i);
              if (k && !F && Jl(B) == "wrapper")
                var F = new zn([], !0);
            }
            for (h = F ? h : u; ++h < u; ) {
              B = r[h];
              var K = Jl(B), Q = K == "wrapper" ? Zi(B) : t;
              Q && tu(Q[0]) && Q[1] == (V | x | O | P) && !Q[4].length && Q[9] == 1 ? F = F[Jl(Q[0])].apply(F, Q[3]) : F = B.length == 1 && tu(B) ? F[K]() : F.thru(B);
            }
            return function() {
              var fe = arguments, ve = fe[0];
              if (F && fe.length == 1 && rt(ve))
                return F.plant(ve).value();
              for (var he = 0, Pe = u ? r[he].apply(this, fe) : ve; ++he < u; )
                Pe = r[he].call(this, Pe);
              return Pe;
            };
          });
        }
        function jl(n, r, u, h, k, B, F, K, Q, fe) {
          var ve = r & V, he = r & S, Pe = r & $, Ge = r & (x | T), Je = r & R, it = Pe ? t : Dr(n);
          function Qe() {
            for (var ft = arguments.length, gt = ae(ft), Pn = ft; Pn--; )
              gt[Pn] = arguments[Pn];
            if (Ge)
              var gn = ar(Qe), Ln = qh(gt, gn);
            if (h && (gt = uf(gt, h, k, Ge)), B && (gt = cf(gt, B, F, Ge)), ft -= Ln, Ge && ft < fe) {
              var Xt = Ko(gt, gn);
              return hf(
                n,
                r,
                jl,
                Qe.placeholder,
                u,
                gt,
                Xt,
                K,
                Q,
                fe - ft
              );
            }
            var to = he ? u : this, Lo = Pe ? to[n] : n;
            return ft = gt.length, K ? gt = t1(gt, K) : Je && ft > 1 && gt.reverse(), ve && Q < ft && (gt.length = Q), this && this !== rn && this instanceof Qe && (Lo = it || Dr(Lo)), Lo.apply(to, gt);
          }
          return Qe;
        }
        function gf(n, r) {
          return function(u, h) {
            return u0(u, n, r(h), {});
          };
        }
        function Yl(n, r) {
          return function(u, h) {
            var k;
            if (u === t && h === t)
              return r;
            if (u !== t && (k = u), h !== t) {
              if (k === t)
                return h;
              typeof u == "string" || typeof h == "string" ? (u = Tn(u), h = Tn(h)) : (u = ef(u), h = ef(h)), k = n(u, h);
            }
            return k;
          };
        }
        function qi(n) {
          return Io(function(r) {
            return r = Nt(r, In(Ze())), dt(function(u) {
              var h = this;
              return n(r, function(k) {
                return An(k, h, u);
              });
            });
          });
        }
        function Xl(n, r) {
          r = r === t ? " " : Tn(r);
          var u = r.length;
          if (u < 2)
            return u ? Ni(r, n) : r;
          var h = Ni(r, Rl(n / Xa(r)));
          return Ya(r) ? Zo(Jn(h), 0, n).join("") : h.slice(0, n);
        }
        function R0(n, r, u, h) {
          var k = r & S, B = Dr(n);
          function F() {
            for (var K = -1, Q = arguments.length, fe = -1, ve = h.length, he = ae(ve + Q), Pe = this && this !== rn && this instanceof F ? B : n; ++fe < ve; )
              he[fe] = h[fe];
            for (; Q--; )
              he[fe++] = arguments[++K];
            return An(Pe, k ? u : this, he);
          }
          return F;
        }
        function yf(n) {
          return function(r, u, h) {
            return h && typeof h != "number" && mn(r, u, h) && (u = h = t), r = Po(r), u === t ? (u = r, r = 0) : u = Po(u), h = h === t ? r < u ? 1 : -1 : Po(h), C0(r, u, h, n);
          };
        }
        function Zl(n) {
          return function(r, u) {
            return typeof r == "string" && typeof u == "string" || (r = Gn(r), u = Gn(u)), n(r, u);
          };
        }
        function hf(n, r, u, h, k, B, F, K, Q, fe) {
          var ve = r & x, he = ve ? F : t, Pe = ve ? t : F, Ge = ve ? B : t, Je = ve ? t : B;
          r |= ve ? O : D, r &= ~(ve ? D : O), r & A || (r &= -4);
          var it = [
            n,
            r,
            k,
            Ge,
            he,
            Je,
            Pe,
            K,
            Q,
            fe
          ], Qe = u.apply(t, it);
          return tu(n) && Tf(Qe, it), Qe.placeholder = h, Bf(Qe, n, r);
        }
        function ji(n) {
          var r = Qt[n];
          return function(u, h) {
            if (u = Gn(u), h = h == null ? 0 : dn(st(h), 292), h && Td(u)) {
              var k = (kt(u) + "e").split("e"), B = r(k[0] + "e" + (+k[1] + h));
              return k = (kt(B) + "e").split("e"), +(k[0] + "e" + (+k[1] - h));
            }
            return r(u);
          };
        }
        var D0 = Qa && 1 / Vl(new Qa([, -0]))[1] == Z ? function(n) {
          return new Qa(n);
        } : gu;
        function bf(n) {
          return function(r) {
            var u = fn(r);
            return u == Lt ? $i(r) : u == Et ? eb(r) : Kh(r, n(r));
          };
        }
        function Ao(n, r, u, h, k, B, F, K) {
          var Q = r & $;
          if (!Q && typeof n != "function")
            throw new Nn(i);
          var fe = h ? h.length : 0;
          if (fe || (r &= -97, h = k = t), F = F === t ? F : en(st(F), 0), K = K === t ? K : st(K), fe -= k ? k.length : 0, r & D) {
            var ve = h, he = k;
            h = k = t;
          }
          var Pe = Q ? t : Zi(n), Ge = [
            n,
            r,
            u,
            h,
            k,
            ve,
            he,
            B,
            F,
            K
          ];
          if (Pe && J0(Ge, Pe), n = Ge[0], r = Ge[1], u = Ge[2], h = Ge[3], k = Ge[4], K = Ge[9] = Ge[9] === t ? Q ? 0 : n.length : en(Ge[9] - fe, 0), !K && r & (x | T) && (r &= -25), !r || r == S)
            var Je = O0(n, r, u);
          else r == x || r == T ? Je = E0(n, r, K) : (r == O || r == (S | O)) && !k.length ? Je = R0(n, r, u, h) : Je = jl.apply(t, Ge);
          var it = Pe ? Jd : Tf;
          return Bf(it(Je, Ge), n, r);
        }
        function _f(n, r, u, h) {
          return n === t || eo(n, Ja[u]) && !At.call(h, u) ? r : n;
        }
        function Cf(n, r, u, h, k, B) {
          return Ut(n) && Ut(r) && (B.set(r, n), Ul(n, r, t, Cf, B), B.delete(r)), n;
        }
        function M0(n) {
          return Nr(n) ? t : n;
        }
        function Sf(n, r, u, h, k, B) {
          var F = u & C, K = n.length, Q = r.length;
          if (K != Q && !(F && Q > K))
            return !1;
          var fe = B.get(n), ve = B.get(r);
          if (fe && ve)
            return fe == r && ve == n;
          var he = -1, Pe = !0, Ge = u & _ ? new pa() : t;
          for (B.set(n, r), B.set(r, n); ++he < K; ) {
            var Je = n[he], it = r[he];
            if (h)
              var Qe = F ? h(it, Je, he, r, n, B) : h(Je, it, he, n, r, B);
            if (Qe !== t) {
              if (Qe)
                continue;
              Pe = !1;
              break;
            }
            if (Ge) {
              if (!hi(r, function(ft, gt) {
                if (!Vr(Ge, gt) && (Je === ft || k(Je, ft, u, h, B)))
                  return Ge.push(gt);
              })) {
                Pe = !1;
                break;
              }
            } else if (!(Je === it || k(Je, it, u, h, B))) {
              Pe = !1;
              break;
            }
          }
          return B.delete(n), B.delete(r), Pe;
        }
        function F0(n, r, u, h, k, B, F) {
          switch (u) {
            case bn:
              if (n.byteLength != r.byteLength || n.byteOffset != r.byteOffset)
                return !1;
              n = n.buffer, r = r.buffer;
            case Yn:
              return !(n.byteLength != r.byteLength || !B(new Pl(n), new Pl(r)));
            case re:
            case Me:
            case qt:
              return eo(+n, +r);
            case Xe:
              return n.name == r.name && n.message == r.message;
            case Tt:
            case Zt:
              return n == r + "";
            case Lt:
              var K = $i;
            case Et:
              var Q = h & C;
              if (K || (K = Vl), n.size != r.size && !Q)
                return !1;
              var fe = F.get(n);
              if (fe)
                return fe == r;
              h |= _, F.set(n, r);
              var ve = Sf(K(n), K(r), h, k, B, F);
              return F.delete(n), ve;
            case qn:
              if (Br)
                return Br.call(n) == Br.call(r);
          }
          return !1;
        }
        function N0(n, r, u, h, k, B) {
          var F = u & C, K = Yi(n), Q = K.length, fe = Yi(r), ve = fe.length;
          if (Q != ve && !F)
            return !1;
          for (var he = Q; he--; ) {
            var Pe = K[he];
            if (!(F ? Pe in r : At.call(r, Pe)))
              return !1;
          }
          var Ge = B.get(n), Je = B.get(r);
          if (Ge && Je)
            return Ge == r && Je == n;
          var it = !0;
          B.set(n, r), B.set(r, n);
          for (var Qe = F; ++he < Q; ) {
            Pe = K[he];
            var ft = n[Pe], gt = r[Pe];
            if (h)
              var Pn = F ? h(gt, ft, Pe, r, n, B) : h(ft, gt, Pe, n, r, B);
            if (!(Pn === t ? ft === gt || k(ft, gt, u, h, B) : Pn)) {
              it = !1;
              break;
            }
            Qe || (Qe = Pe == "constructor");
          }
          if (it && !Qe) {
            var gn = n.constructor, Ln = r.constructor;
            gn != Ln && "constructor" in n && "constructor" in r && !(typeof gn == "function" && gn instanceof gn && typeof Ln == "function" && Ln instanceof Ln) && (it = !1);
          }
          return B.delete(n), B.delete(r), it;
        }
        function Io(n) {
          return ou(Af(n, t, Df), n + "");
        }
        function Yi(n) {
          return zd(n, nn, Qi);
        }
        function Xi(n) {
          return zd(n, Sn, wf);
        }
        var Zi = Ml ? function(n) {
          return Ml.get(n);
        } : gu;
        function Jl(n) {
          for (var r = n.name + "", u = er[r], h = At.call(er, r) ? u.length : 0; h--; ) {
            var k = u[h], B = k.func;
            if (B == null || B == n)
              return k.name;
          }
          return r;
        }
        function ar(n) {
          var r = At.call(I, "placeholder") ? I : n;
          return r.placeholder;
        }
        function Ze() {
          var n = I.iteratee || pu;
          return n = n === pu ? Ud : n, arguments.length ? n(arguments[0], arguments[1]) : n;
        }
        function Ql(n, r) {
          var u = n.__data__;
          return j0(r) ? u[typeof r == "string" ? "string" : "hash"] : u.map;
        }
        function Ji(n) {
          for (var r = nn(n), u = r.length; u--; ) {
            var h = r[u], k = n[h];
            r[u] = [h, k, Vf(k)];
          }
          return r;
        }
        function ya(n, r) {
          var u = Zh(n, r);
          return Wd(u) ? u : t;
        }
        function z0(n) {
          var r = At.call(n, fa), u = n[fa];
          try {
            n[fa] = t;
            var h = !0;
          } catch {
          }
          var k = Tl.call(n);
          return h && (r ? n[fa] = u : delete n[fa]), k;
        }
        var Qi = Vi ? function(n) {
          return n == null ? [] : (n = Ot(n), Uo(Vi(n), function(r) {
            return Ad.call(n, r);
          }));
        } : yu, wf = Vi ? function(n) {
          for (var r = []; n; )
            Go(r, Qi(n)), n = Ll(n);
          return r;
        } : yu, fn = pn;
        (xi && fn(new xi(new ArrayBuffer(1))) != bn || Ar && fn(new Ar()) != Lt || Ai && fn(Ai.resolve()) != Ue || Qa && fn(new Qa()) != Et || Ir && fn(new Ir()) != jn) && (fn = function(n) {
          var r = pn(n), u = r == We ? n.constructor : t, h = u ? ha(u) : "";
          if (h)
            switch (h) {
              case wb:
                return bn;
              case $b:
                return Lt;
              case kb:
                return Ue;
              case Vb:
                return Et;
              case xb:
                return jn;
            }
          return r;
        });
        function H0(n, r, u) {
          for (var h = -1, k = u.length; ++h < k; ) {
            var B = u[h], F = B.size;
            switch (B.type) {
              case "drop":
                n += F;
                break;
              case "dropRight":
                r -= F;
                break;
              case "take":
                r = dn(r, n + F);
                break;
              case "takeRight":
                n = en(n, r - F);
                break;
            }
          }
          return { start: n, end: r };
        }
        function W0(n) {
          var r = n.match(St);
          return r ? r[1].split(pt) : [];
        }
        function $f(n, r, u) {
          r = Xo(r, n);
          for (var h = -1, k = r.length, B = !1; ++h < k; ) {
            var F = mo(r[h]);
            if (!(B = n != null && u(n, F)))
              break;
            n = n[F];
          }
          return B || ++h != k ? B : (k = n == null ? 0 : n.length, !!k && ls(k) && To(F, k) && (rt(n) || ba(n)));
        }
        function U0(n) {
          var r = n.length, u = new n.constructor(r);
          return r && typeof n[0] == "string" && At.call(n, "index") && (u.index = n.index, u.input = n.input), u;
        }
        function kf(n) {
          return typeof n.constructor == "function" && !Mr(n) ? tr(Ll(n)) : {};
        }
        function G0(n, r, u) {
          var h = n.constructor;
          switch (r) {
            case Yn:
              return Ki(n);
            case re:
            case Me:
              return new h(+n);
            case bn:
              return A0(n, u);
            case co:
            case ue:
            case ge:
            case Ne:
            case Ye:
            case Bt:
            case cn:
            case an:
            case Xn:
              return lf(n, u);
            case Lt:
              return new h();
            case qt:
            case Zt:
              return new h(n);
            case Tt:
              return I0(n);
            case Et:
              return new h();
            case qn:
              return T0(n);
          }
        }
        function K0(n, r) {
          var u = r.length;
          if (!u)
            return n;
          var h = u - 1;
          return r[h] = (u > 1 ? "& " : "") + r[h], r = r.join(u > 2 ? ", " : " "), n.replace(Ce, `{
/* [wrapped with ` + r + `] */
`);
        }
        function q0(n) {
          return rt(n) || ba(n) || !!(Id && n && n[Id]);
        }
        function To(n, r) {
          var u = typeof n;
          return r = r ?? z, !!r && (u == "number" || u != "symbol" && rh.test(n)) && n > -1 && n % 1 == 0 && n < r;
        }
        function mn(n, r, u) {
          if (!Ut(u))
            return !1;
          var h = typeof r;
          return (h == "number" ? Cn(u) && To(r, u.length) : h == "string" && r in u) ? eo(u[r], n) : !1;
        }
        function eu(n, r) {
          if (rt(n))
            return !1;
          var u = typeof n;
          return u == "number" || u == "symbol" || u == "boolean" || n == null || Bn(n) ? !0 : ri.test(n) || !ai.test(n) || r != null && n in Ot(r);
        }
        function j0(n) {
          var r = typeof n;
          return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? n !== "__proto__" : n === null;
        }
        function tu(n) {
          var r = Jl(n), u = I[r];
          if (typeof u != "function" || !(r in mt.prototype))
            return !1;
          if (n === u)
            return !0;
          var h = Zi(u);
          return !!h && n === h[0];
        }
        function Y0(n) {
          return !!kd && kd in n;
        }
        var X0 = Al ? Bo : hu;
        function Mr(n) {
          var r = n && n.constructor, u = typeof r == "function" && r.prototype || Ja;
          return n === u;
        }
        function Vf(n) {
          return n === n && !Ut(n);
        }
        function xf(n, r) {
          return function(u) {
            return u == null ? !1 : u[n] === r && (r !== t || n in Ot(u));
          };
        }
        function Z0(n) {
          var r = as(n, function(h) {
            return u.size === v && u.clear(), h;
          }), u = r.cache;
          return r;
        }
        function J0(n, r) {
          var u = n[1], h = r[1], k = u | h, B = k < (S | $ | V), F = h == V && u == x || h == V && u == P && n[7].length <= r[8] || h == (V | P) && r[7].length <= r[8] && u == x;
          if (!(B || F))
            return n;
          h & S && (n[2] = r[2], k |= u & S ? 0 : A);
          var K = r[3];
          if (K) {
            var Q = n[3];
            n[3] = Q ? uf(Q, K, r[4]) : K, n[4] = Q ? Ko(n[3], m) : r[4];
          }
          return K = r[5], K && (Q = n[5], n[5] = Q ? cf(Q, K, r[6]) : K, n[6] = Q ? Ko(n[5], m) : r[6]), K = r[7], K && (n[7] = K), h & V && (n[8] = n[8] == null ? r[8] : dn(n[8], r[8])), n[9] == null && (n[9] = r[9]), n[0] = r[0], n[1] = k, n;
        }
        function Q0(n) {
          var r = [];
          if (n != null)
            for (var u in Ot(n))
              r.push(u);
          return r;
        }
        function e1(n) {
          return Tl.call(n);
        }
        function Af(n, r, u) {
          return r = en(r === t ? n.length - 1 : r, 0), function() {
            for (var h = arguments, k = -1, B = en(h.length - r, 0), F = ae(B); ++k < B; )
              F[k] = h[r + k];
            k = -1;
            for (var K = ae(r + 1); ++k < r; )
              K[k] = h[k];
            return K[r] = u(F), An(n, this, K);
          };
        }
        function If(n, r) {
          return r.length < 2 ? n : ga(n, Wn(r, 0, -1));
        }
        function t1(n, r) {
          for (var u = n.length, h = dn(r.length, u), k = _n(n); h--; ) {
            var B = r[h];
            n[h] = To(B, u) ? k[B] : t;
          }
          return n;
        }
        function nu(n, r) {
          if (!(r === "constructor" && typeof n[r] == "function") && r != "__proto__")
            return n[r];
        }
        var Tf = Pf(Jd), Fr = gb || function(n, r) {
          return rn.setTimeout(n, r);
        }, ou = Pf($0);
        function Bf(n, r, u) {
          var h = r + "";
          return ou(n, K0(h, n1(W0(h), u)));
        }
        function Pf(n) {
          var r = 0, u = 0;
          return function() {
            var h = _b(), k = M - (h - u);
            if (u = h, k > 0) {
              if (++r >= ne)
                return arguments[0];
            } else
              r = 0;
            return n.apply(t, arguments);
          };
        }
        function es(n, r) {
          var u = -1, h = n.length, k = h - 1;
          for (r = r === t ? h : r; ++u < r; ) {
            var B = Fi(u, k), F = n[B];
            n[B] = n[u], n[u] = F;
          }
          return n.length = r, n;
        }
        var Lf = Z0(function(n) {
          var r = [];
          return n.charCodeAt(0) === 46 && r.push(""), n.replace(li, function(u, h, k, B) {
            r.push(k ? B.replace(ii, "$1") : h || u);
          }), r;
        });
        function mo(n) {
          if (typeof n == "string" || Bn(n))
            return n;
          var r = n + "";
          return r == "0" && 1 / n == -Z ? "-0" : r;
        }
        function ha(n) {
          if (n != null) {
            try {
              return Il.call(n);
            } catch {
            }
            try {
              return n + "";
            } catch {
            }
          }
          return "";
        }
        function n1(n, r) {
          return Fn(ee, function(u) {
            var h = "_." + u[0];
            r & u[1] && !$l(n, h) && n.push(h);
          }), n.sort();
        }
        function Of(n) {
          if (n instanceof mt)
            return n.clone();
          var r = new zn(n.__wrapped__, n.__chain__);
          return r.__actions__ = _n(n.__actions__), r.__index__ = n.__index__, r.__values__ = n.__values__, r;
        }
        function o1(n, r, u) {
          (u ? mn(n, r, u) : r === t) ? r = 1 : r = en(st(r), 0);
          var h = n == null ? 0 : n.length;
          if (!h || r < 1)
            return [];
          for (var k = 0, B = 0, F = ae(Rl(h / r)); k < h; )
            F[B++] = Wn(n, k, k += r);
          return F;
        }
        function a1(n) {
          for (var r = -1, u = n == null ? 0 : n.length, h = 0, k = []; ++r < u; ) {
            var B = n[r];
            B && (k[h++] = B);
          }
          return k;
        }
        function r1() {
          var n = arguments.length;
          if (!n)
            return [];
          for (var r = ae(n - 1), u = arguments[0], h = n; h--; )
            r[h - 1] = arguments[h];
          return Go(rt(u) ? _n(u) : [u], ln(r, 1));
        }
        var l1 = dt(function(n, r) {
          return Yt(n) ? Lr(n, ln(r, 1, Yt, !0)) : [];
        }), s1 = dt(function(n, r) {
          var u = Un(r);
          return Yt(u) && (u = t), Yt(n) ? Lr(n, ln(r, 1, Yt, !0), Ze(u, 2)) : [];
        }), i1 = dt(function(n, r) {
          var u = Un(r);
          return Yt(u) && (u = t), Yt(n) ? Lr(n, ln(r, 1, Yt, !0), t, u) : [];
        });
        function u1(n, r, u) {
          var h = n == null ? 0 : n.length;
          return h ? (r = u || r === t ? 1 : st(r), Wn(n, r < 0 ? 0 : r, h)) : [];
        }
        function c1(n, r, u) {
          var h = n == null ? 0 : n.length;
          return h ? (r = u || r === t ? 1 : st(r), r = h - r, Wn(n, 0, r < 0 ? 0 : r)) : [];
        }
        function d1(n, r) {
          return n && n.length ? Kl(n, Ze(r, 3), !0, !0) : [];
        }
        function f1(n, r) {
          return n && n.length ? Kl(n, Ze(r, 3), !0) : [];
        }
        function v1(n, r, u, h) {
          var k = n == null ? 0 : n.length;
          return k ? (u && typeof u != "number" && mn(n, r, u) && (u = 0, h = k), r0(n, r, u, h)) : [];
        }
        function Ef(n, r, u) {
          var h = n == null ? 0 : n.length;
          if (!h)
            return -1;
          var k = u == null ? 0 : st(u);
          return k < 0 && (k = en(h + k, 0)), kl(n, Ze(r, 3), k);
        }
        function Rf(n, r, u) {
          var h = n == null ? 0 : n.length;
          if (!h)
            return -1;
          var k = h - 1;
          return u !== t && (k = st(u), k = u < 0 ? en(h + k, 0) : dn(k, h - 1)), kl(n, Ze(r, 3), k, !0);
        }
        function Df(n) {
          var r = n == null ? 0 : n.length;
          return r ? ln(n, 1) : [];
        }
        function p1(n) {
          var r = n == null ? 0 : n.length;
          return r ? ln(n, Z) : [];
        }
        function m1(n, r) {
          var u = n == null ? 0 : n.length;
          return u ? (r = r === t ? 1 : st(r), ln(n, r)) : [];
        }
        function g1(n) {
          for (var r = -1, u = n == null ? 0 : n.length, h = {}; ++r < u; ) {
            var k = n[r];
            h[k[0]] = k[1];
          }
          return h;
        }
        function Mf(n) {
          return n && n.length ? n[0] : t;
        }
        function y1(n, r, u) {
          var h = n == null ? 0 : n.length;
          if (!h)
            return -1;
          var k = u == null ? 0 : st(u);
          return k < 0 && (k = en(h + k, 0)), ja(n, r, k);
        }
        function h1(n) {
          var r = n == null ? 0 : n.length;
          return r ? Wn(n, 0, -1) : [];
        }
        var b1 = dt(function(n) {
          var r = Nt(n, Ui);
          return r.length && r[0] === n[0] ? Oi(r) : [];
        }), _1 = dt(function(n) {
          var r = Un(n), u = Nt(n, Ui);
          return r === Un(u) ? r = t : u.pop(), u.length && u[0] === n[0] ? Oi(u, Ze(r, 2)) : [];
        }), C1 = dt(function(n) {
          var r = Un(n), u = Nt(n, Ui);
          return r = typeof r == "function" ? r : t, r && u.pop(), u.length && u[0] === n[0] ? Oi(u, t, r) : [];
        });
        function S1(n, r) {
          return n == null ? "" : hb.call(n, r);
        }
        function Un(n) {
          var r = n == null ? 0 : n.length;
          return r ? n[r - 1] : t;
        }
        function w1(n, r, u) {
          var h = n == null ? 0 : n.length;
          if (!h)
            return -1;
          var k = h;
          return u !== t && (k = st(u), k = k < 0 ? en(h + k, 0) : dn(k, h - 1)), r === r ? nb(n, r, k) : kl(n, yd, k, !0);
        }
        function $1(n, r) {
          return n && n.length ? jd(n, st(r)) : t;
        }
        var k1 = dt(Ff);
        function Ff(n, r) {
          return n && n.length && r && r.length ? Mi(n, r) : n;
        }
        function V1(n, r, u) {
          return n && n.length && r && r.length ? Mi(n, r, Ze(u, 2)) : n;
        }
        function x1(n, r, u) {
          return n && n.length && r && r.length ? Mi(n, r, t, u) : n;
        }
        var A1 = Io(function(n, r) {
          var u = n == null ? 0 : n.length, h = Ti(n, r);
          return Zd(n, Nt(r, function(k) {
            return To(k, u) ? +k : k;
          }).sort(sf)), h;
        });
        function I1(n, r) {
          var u = [];
          if (!(n && n.length))
            return u;
          var h = -1, k = [], B = n.length;
          for (r = Ze(r, 3); ++h < B; ) {
            var F = n[h];
            r(F, h, n) && (u.push(F), k.push(h));
          }
          return Zd(n, k), u;
        }
        function au(n) {
          return n == null ? n : Sb.call(n);
        }
        function T1(n, r, u) {
          var h = n == null ? 0 : n.length;
          return h ? (u && typeof u != "number" && mn(n, r, u) ? (r = 0, u = h) : (r = r == null ? 0 : st(r), u = u === t ? h : st(u)), Wn(n, r, u)) : [];
        }
        function B1(n, r) {
          return Gl(n, r);
        }
        function P1(n, r, u) {
          return zi(n, r, Ze(u, 2));
        }
        function L1(n, r) {
          var u = n == null ? 0 : n.length;
          if (u) {
            var h = Gl(n, r);
            if (h < u && eo(n[h], r))
              return h;
          }
          return -1;
        }
        function O1(n, r) {
          return Gl(n, r, !0);
        }
        function E1(n, r, u) {
          return zi(n, r, Ze(u, 2), !0);
        }
        function R1(n, r) {
          var u = n == null ? 0 : n.length;
          if (u) {
            var h = Gl(n, r, !0) - 1;
            if (eo(n[h], r))
              return h;
          }
          return -1;
        }
        function D1(n) {
          return n && n.length ? Qd(n) : [];
        }
        function M1(n, r) {
          return n && n.length ? Qd(n, Ze(r, 2)) : [];
        }
        function F1(n) {
          var r = n == null ? 0 : n.length;
          return r ? Wn(n, 1, r) : [];
        }
        function N1(n, r, u) {
          return n && n.length ? (r = u || r === t ? 1 : st(r), Wn(n, 0, r < 0 ? 0 : r)) : [];
        }
        function z1(n, r, u) {
          var h = n == null ? 0 : n.length;
          return h ? (r = u || r === t ? 1 : st(r), r = h - r, Wn(n, r < 0 ? 0 : r, h)) : [];
        }
        function H1(n, r) {
          return n && n.length ? Kl(n, Ze(r, 3), !1, !0) : [];
        }
        function W1(n, r) {
          return n && n.length ? Kl(n, Ze(r, 3)) : [];
        }
        var U1 = dt(function(n) {
          return Yo(ln(n, 1, Yt, !0));
        }), G1 = dt(function(n) {
          var r = Un(n);
          return Yt(r) && (r = t), Yo(ln(n, 1, Yt, !0), Ze(r, 2));
        }), K1 = dt(function(n) {
          var r = Un(n);
          return r = typeof r == "function" ? r : t, Yo(ln(n, 1, Yt, !0), t, r);
        });
        function q1(n) {
          return n && n.length ? Yo(n) : [];
        }
        function j1(n, r) {
          return n && n.length ? Yo(n, Ze(r, 2)) : [];
        }
        function Y1(n, r) {
          return r = typeof r == "function" ? r : t, n && n.length ? Yo(n, t, r) : [];
        }
        function ru(n) {
          if (!(n && n.length))
            return [];
          var r = 0;
          return n = Uo(n, function(u) {
            if (Yt(u))
              return r = en(u.length, r), !0;
          }), Si(r, function(u) {
            return Nt(n, bi(u));
          });
        }
        function Nf(n, r) {
          if (!(n && n.length))
            return [];
          var u = ru(n);
          return r == null ? u : Nt(u, function(h) {
            return An(r, t, h);
          });
        }
        var X1 = dt(function(n, r) {
          return Yt(n) ? Lr(n, r) : [];
        }), Z1 = dt(function(n) {
          return Wi(Uo(n, Yt));
        }), J1 = dt(function(n) {
          var r = Un(n);
          return Yt(r) && (r = t), Wi(Uo(n, Yt), Ze(r, 2));
        }), Q1 = dt(function(n) {
          var r = Un(n);
          return r = typeof r == "function" ? r : t, Wi(Uo(n, Yt), t, r);
        }), e_ = dt(ru);
        function t_(n, r) {
          return of(n || [], r || [], Pr);
        }
        function n_(n, r) {
          return of(n || [], r || [], Rr);
        }
        var o_ = dt(function(n) {
          var r = n.length, u = r > 1 ? n[r - 1] : t;
          return u = typeof u == "function" ? (n.pop(), u) : t, Nf(n, u);
        });
        function zf(n) {
          var r = I(n);
          return r.__chain__ = !0, r;
        }
        function a_(n, r) {
          return r(n), n;
        }
        function ts(n, r) {
          return r(n);
        }
        var r_ = Io(function(n) {
          var r = n.length, u = r ? n[0] : 0, h = this.__wrapped__, k = function(B) {
            return Ti(B, n);
          };
          return r > 1 || this.__actions__.length || !(h instanceof mt) || !To(u) ? this.thru(k) : (h = h.slice(u, +u + (r ? 1 : 0)), h.__actions__.push({
            func: ts,
            args: [k],
            thisArg: t
          }), new zn(h, this.__chain__).thru(function(B) {
            return r && !B.length && B.push(t), B;
          }));
        });
        function l_() {
          return zf(this);
        }
        function s_() {
          return new zn(this.value(), this.__chain__);
        }
        function i_() {
          this.__values__ === t && (this.__values__ = tv(this.value()));
          var n = this.__index__ >= this.__values__.length, r = n ? t : this.__values__[this.__index__++];
          return { done: n, value: r };
        }
        function u_() {
          return this;
        }
        function c_(n) {
          for (var r, u = this; u instanceof Nl; ) {
            var h = Of(u);
            h.__index__ = 0, h.__values__ = t, r ? k.__wrapped__ = h : r = h;
            var k = h;
            u = u.__wrapped__;
          }
          return k.__wrapped__ = n, r;
        }
        function d_() {
          var n = this.__wrapped__;
          if (n instanceof mt) {
            var r = n;
            return this.__actions__.length && (r = new mt(this)), r = r.reverse(), r.__actions__.push({
              func: ts,
              args: [au],
              thisArg: t
            }), new zn(r, this.__chain__);
          }
          return this.thru(au);
        }
        function f_() {
          return nf(this.__wrapped__, this.__actions__);
        }
        var v_ = ql(function(n, r, u) {
          At.call(n, u) ? ++n[u] : xo(n, u, 1);
        });
        function p_(n, r, u) {
          var h = rt(n) ? md : a0;
          return u && mn(n, r, u) && (r = t), h(n, Ze(r, 3));
        }
        function m_(n, r) {
          var u = rt(n) ? Uo : Fd;
          return u(n, Ze(r, 3));
        }
        var g_ = pf(Ef), y_ = pf(Rf);
        function h_(n, r) {
          return ln(ns(n, r), 1);
        }
        function b_(n, r) {
          return ln(ns(n, r), Z);
        }
        function __(n, r, u) {
          return u = u === t ? 1 : st(u), ln(ns(n, r), u);
        }
        function Hf(n, r) {
          var u = rt(n) ? Fn : jo;
          return u(n, Ze(r, 3));
        }
        function Wf(n, r) {
          var u = rt(n) ? Fh : Md;
          return u(n, Ze(r, 3));
        }
        var C_ = ql(function(n, r, u) {
          At.call(n, u) ? n[u].push(r) : xo(n, u, [r]);
        });
        function S_(n, r, u, h) {
          n = Cn(n) ? n : lr(n), u = u && !h ? st(u) : 0;
          var k = n.length;
          return u < 0 && (u = en(k + u, 0)), ss(n) ? u <= k && n.indexOf(r, u) > -1 : !!k && ja(n, r, u) > -1;
        }
        var w_ = dt(function(n, r, u) {
          var h = -1, k = typeof r == "function", B = Cn(n) ? ae(n.length) : [];
          return jo(n, function(F) {
            B[++h] = k ? An(r, F, u) : Or(F, r, u);
          }), B;
        }), $_ = ql(function(n, r, u) {
          xo(n, u, r);
        });
        function ns(n, r) {
          var u = rt(n) ? Nt : Gd;
          return u(n, Ze(r, 3));
        }
        function k_(n, r, u, h) {
          return n == null ? [] : (rt(r) || (r = r == null ? [] : [r]), u = h ? t : u, rt(u) || (u = u == null ? [] : [u]), Yd(n, r, u));
        }
        var V_ = ql(function(n, r, u) {
          n[u ? 0 : 1].push(r);
        }, function() {
          return [[], []];
        });
        function x_(n, r, u) {
          var h = rt(n) ? yi : bd, k = arguments.length < 3;
          return h(n, Ze(r, 4), u, k, jo);
        }
        function A_(n, r, u) {
          var h = rt(n) ? Nh : bd, k = arguments.length < 3;
          return h(n, Ze(r, 4), u, k, Md);
        }
        function I_(n, r) {
          var u = rt(n) ? Uo : Fd;
          return u(n, rs(Ze(r, 3)));
        }
        function T_(n) {
          var r = rt(n) ? Od : S0;
          return r(n);
        }
        function B_(n, r, u) {
          (u ? mn(n, r, u) : r === t) ? r = 1 : r = st(r);
          var h = rt(n) ? Qb : w0;
          return h(n, r);
        }
        function P_(n) {
          var r = rt(n) ? e0 : k0;
          return r(n);
        }
        function L_(n) {
          if (n == null)
            return 0;
          if (Cn(n))
            return ss(n) ? Xa(n) : n.length;
          var r = fn(n);
          return r == Lt || r == Et ? n.size : Ri(n).length;
        }
        function O_(n, r, u) {
          var h = rt(n) ? hi : V0;
          return u && mn(n, r, u) && (r = t), h(n, Ze(r, 3));
        }
        var E_ = dt(function(n, r) {
          if (n == null)
            return [];
          var u = r.length;
          return u > 1 && mn(n, r[0], r[1]) ? r = [] : u > 2 && mn(r[0], r[1], r[2]) && (r = [r[0]]), Yd(n, ln(r, 1), []);
        }), os = mb || function() {
          return rn.Date.now();
        };
        function R_(n, r) {
          if (typeof r != "function")
            throw new Nn(i);
          return n = st(n), function() {
            if (--n < 1)
              return r.apply(this, arguments);
          };
        }
        function Uf(n, r, u) {
          return r = u ? t : r, r = n && r == null ? n.length : r, Ao(n, V, t, t, t, t, r);
        }
        function Gf(n, r) {
          var u;
          if (typeof r != "function")
            throw new Nn(i);
          return n = st(n), function() {
            return --n > 0 && (u = r.apply(this, arguments)), n <= 1 && (r = t), u;
          };
        }
        var lu = dt(function(n, r, u) {
          var h = S;
          if (u.length) {
            var k = Ko(u, ar(lu));
            h |= O;
          }
          return Ao(n, h, r, u, k);
        }), Kf = dt(function(n, r, u) {
          var h = S | $;
          if (u.length) {
            var k = Ko(u, ar(Kf));
            h |= O;
          }
          return Ao(r, h, n, u, k);
        });
        function qf(n, r, u) {
          r = u ? t : r;
          var h = Ao(n, x, t, t, t, t, t, r);
          return h.placeholder = qf.placeholder, h;
        }
        function jf(n, r, u) {
          r = u ? t : r;
          var h = Ao(n, T, t, t, t, t, t, r);
          return h.placeholder = jf.placeholder, h;
        }
        function Yf(n, r, u) {
          var h, k, B, F, K, Q, fe = 0, ve = !1, he = !1, Pe = !0;
          if (typeof n != "function")
            throw new Nn(i);
          r = Gn(r) || 0, Ut(u) && (ve = !!u.leading, he = "maxWait" in u, B = he ? en(Gn(u.maxWait) || 0, r) : B, Pe = "trailing" in u ? !!u.trailing : Pe);
          function Ge(Xt) {
            var to = h, Lo = k;
            return h = k = t, fe = Xt, F = n.apply(Lo, to), F;
          }
          function Je(Xt) {
            return fe = Xt, K = Fr(ft, r), ve ? Ge(Xt) : F;
          }
          function it(Xt) {
            var to = Xt - Q, Lo = Xt - fe, pv = r - to;
            return he ? dn(pv, B - Lo) : pv;
          }
          function Qe(Xt) {
            var to = Xt - Q, Lo = Xt - fe;
            return Q === t || to >= r || to < 0 || he && Lo >= B;
          }
          function ft() {
            var Xt = os();
            if (Qe(Xt))
              return gt(Xt);
            K = Fr(ft, it(Xt));
          }
          function gt(Xt) {
            return K = t, Pe && h ? Ge(Xt) : (h = k = t, F);
          }
          function Pn() {
            K !== t && af(K), fe = 0, h = Q = k = K = t;
          }
          function gn() {
            return K === t ? F : gt(os());
          }
          function Ln() {
            var Xt = os(), to = Qe(Xt);
            if (h = arguments, k = this, Q = Xt, to) {
              if (K === t)
                return Je(Q);
              if (he)
                return af(K), K = Fr(ft, r), Ge(Q);
            }
            return K === t && (K = Fr(ft, r)), F;
          }
          return Ln.cancel = Pn, Ln.flush = gn, Ln;
        }
        var D_ = dt(function(n, r) {
          return Dd(n, 1, r);
        }), M_ = dt(function(n, r, u) {
          return Dd(n, Gn(r) || 0, u);
        });
        function F_(n) {
          return Ao(n, R);
        }
        function as(n, r) {
          if (typeof n != "function" || r != null && typeof r != "function")
            throw new Nn(i);
          var u = function() {
            var h = arguments, k = r ? r.apply(this, h) : h[0], B = u.cache;
            if (B.has(k))
              return B.get(k);
            var F = n.apply(this, h);
            return u.cache = B.set(k, F) || B, F;
          };
          return u.cache = new (as.Cache || Vo)(), u;
        }
        as.Cache = Vo;
        function rs(n) {
          if (typeof n != "function")
            throw new Nn(i);
          return function() {
            var r = arguments;
            switch (r.length) {
              case 0:
                return !n.call(this);
              case 1:
                return !n.call(this, r[0]);
              case 2:
                return !n.call(this, r[0], r[1]);
              case 3:
                return !n.call(this, r[0], r[1], r[2]);
            }
            return !n.apply(this, r);
          };
        }
        function N_(n) {
          return Gf(2, n);
        }
        var z_ = x0(function(n, r) {
          r = r.length == 1 && rt(r[0]) ? Nt(r[0], In(Ze())) : Nt(ln(r, 1), In(Ze()));
          var u = r.length;
          return dt(function(h) {
            for (var k = -1, B = dn(h.length, u); ++k < B; )
              h[k] = r[k].call(this, h[k]);
            return An(n, this, h);
          });
        }), su = dt(function(n, r) {
          var u = Ko(r, ar(su));
          return Ao(n, O, t, r, u);
        }), Xf = dt(function(n, r) {
          var u = Ko(r, ar(Xf));
          return Ao(n, D, t, r, u);
        }), H_ = Io(function(n, r) {
          return Ao(n, P, t, t, t, r);
        });
        function W_(n, r) {
          if (typeof n != "function")
            throw new Nn(i);
          return r = r === t ? r : st(r), dt(n, r);
        }
        function U_(n, r) {
          if (typeof n != "function")
            throw new Nn(i);
          return r = r == null ? 0 : en(st(r), 0), dt(function(u) {
            var h = u[r], k = Zo(u, 0, r);
            return h && Go(k, h), An(n, this, k);
          });
        }
        function G_(n, r, u) {
          var h = !0, k = !0;
          if (typeof n != "function")
            throw new Nn(i);
          return Ut(u) && (h = "leading" in u ? !!u.leading : h, k = "trailing" in u ? !!u.trailing : k), Yf(n, r, {
            leading: h,
            maxWait: r,
            trailing: k
          });
        }
        function K_(n) {
          return Uf(n, 1);
        }
        function q_(n, r) {
          return su(Gi(r), n);
        }
        function j_() {
          if (!arguments.length)
            return [];
          var n = arguments[0];
          return rt(n) ? n : [n];
        }
        function Y_(n) {
          return Hn(n, b);
        }
        function X_(n, r) {
          return r = typeof r == "function" ? r : t, Hn(n, b, r);
        }
        function Z_(n) {
          return Hn(n, g | b);
        }
        function J_(n, r) {
          return r = typeof r == "function" ? r : t, Hn(n, g | b, r);
        }
        function Q_(n, r) {
          return r == null || Rd(n, r, nn(r));
        }
        function eo(n, r) {
          return n === r || n !== n && r !== r;
        }
        var eC = Zl(Li), tC = Zl(function(n, r) {
          return n >= r;
        }), ba = Hd(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? Hd : function(n) {
          return jt(n) && At.call(n, "callee") && !Ad.call(n, "callee");
        }, rt = ae.isArray, nC = ud ? In(ud) : c0;
        function Cn(n) {
          return n != null && ls(n.length) && !Bo(n);
        }
        function Yt(n) {
          return jt(n) && Cn(n);
        }
        function oC(n) {
          return n === !0 || n === !1 || jt(n) && pn(n) == re;
        }
        var Jo = yb || hu, aC = cd ? In(cd) : d0;
        function rC(n) {
          return jt(n) && n.nodeType === 1 && !Nr(n);
        }
        function lC(n) {
          if (n == null)
            return !0;
          if (Cn(n) && (rt(n) || typeof n == "string" || typeof n.splice == "function" || Jo(n) || rr(n) || ba(n)))
            return !n.length;
          var r = fn(n);
          if (r == Lt || r == Et)
            return !n.size;
          if (Mr(n))
            return !Ri(n).length;
          for (var u in n)
            if (At.call(n, u))
              return !1;
          return !0;
        }
        function sC(n, r) {
          return Er(n, r);
        }
        function iC(n, r, u) {
          u = typeof u == "function" ? u : t;
          var h = u ? u(n, r) : t;
          return h === t ? Er(n, r, t, u) : !!h;
        }
        function iu(n) {
          if (!jt(n))
            return !1;
          var r = pn(n);
          return r == Xe || r == Oe || typeof n.message == "string" && typeof n.name == "string" && !Nr(n);
        }
        function uC(n) {
          return typeof n == "number" && Td(n);
        }
        function Bo(n) {
          if (!Ut(n))
            return !1;
          var r = pn(n);
          return r == vt || r == Wt || r == ie || r == qe;
        }
        function Zf(n) {
          return typeof n == "number" && n == st(n);
        }
        function ls(n) {
          return typeof n == "number" && n > -1 && n % 1 == 0 && n <= z;
        }
        function Ut(n) {
          var r = typeof n;
          return n != null && (r == "object" || r == "function");
        }
        function jt(n) {
          return n != null && typeof n == "object";
        }
        var Jf = dd ? In(dd) : v0;
        function cC(n, r) {
          return n === r || Ei(n, r, Ji(r));
        }
        function dC(n, r, u) {
          return u = typeof u == "function" ? u : t, Ei(n, r, Ji(r), u);
        }
        function fC(n) {
          return Qf(n) && n != +n;
        }
        function vC(n) {
          if (X0(n))
            throw new nt(s);
          return Wd(n);
        }
        function pC(n) {
          return n === null;
        }
        function mC(n) {
          return n == null;
        }
        function Qf(n) {
          return typeof n == "number" || jt(n) && pn(n) == qt;
        }
        function Nr(n) {
          if (!jt(n) || pn(n) != We)
            return !1;
          var r = Ll(n);
          if (r === null)
            return !0;
          var u = At.call(r, "constructor") && r.constructor;
          return typeof u == "function" && u instanceof u && Il.call(u) == db;
        }
        var uu = fd ? In(fd) : p0;
        function gC(n) {
          return Zf(n) && n >= -z && n <= z;
        }
        var ev = vd ? In(vd) : m0;
        function ss(n) {
          return typeof n == "string" || !rt(n) && jt(n) && pn(n) == Zt;
        }
        function Bn(n) {
          return typeof n == "symbol" || jt(n) && pn(n) == qn;
        }
        var rr = pd ? In(pd) : g0;
        function yC(n) {
          return n === t;
        }
        function hC(n) {
          return jt(n) && fn(n) == jn;
        }
        function bC(n) {
          return jt(n) && pn(n) == $o;
        }
        var _C = Zl(Di), CC = Zl(function(n, r) {
          return n <= r;
        });
        function tv(n) {
          if (!n)
            return [];
          if (Cn(n))
            return ss(n) ? Jn(n) : _n(n);
          if (xr && n[xr])
            return Qh(n[xr]());
          var r = fn(n), u = r == Lt ? $i : r == Et ? Vl : lr;
          return u(n);
        }
        function Po(n) {
          if (!n)
            return n === 0 ? n : 0;
          if (n = Gn(n), n === Z || n === -Z) {
            var r = n < 0 ? -1 : 1;
            return r * pe;
          }
          return n === n ? n : 0;
        }
        function st(n) {
          var r = Po(n), u = r % 1;
          return r === r ? u ? r - u : r : 0;
        }
        function nv(n) {
          return n ? ma(st(n), 0, _e) : 0;
        }
        function Gn(n) {
          if (typeof n == "number")
            return n;
          if (Bn(n))
            return le;
          if (Ut(n)) {
            var r = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = Ut(r) ? r + "" : r;
          }
          if (typeof n != "string")
            return n === 0 ? n : +n;
          n = _d(n);
          var u = nh.test(n);
          return u || ah.test(n) ? Rh(n.slice(2), u ? 2 : 8) : th.test(n) ? le : +n;
        }
        function ov(n) {
          return po(n, Sn(n));
        }
        function SC(n) {
          return n ? ma(st(n), -z, z) : n === 0 ? n : 0;
        }
        function kt(n) {
          return n == null ? "" : Tn(n);
        }
        var wC = nr(function(n, r) {
          if (Mr(r) || Cn(r)) {
            po(r, nn(r), n);
            return;
          }
          for (var u in r)
            At.call(r, u) && Pr(n, u, r[u]);
        }), av = nr(function(n, r) {
          po(r, Sn(r), n);
        }), is = nr(function(n, r, u, h) {
          po(r, Sn(r), n, h);
        }), $C = nr(function(n, r, u, h) {
          po(r, nn(r), n, h);
        }), kC = Io(Ti);
        function VC(n, r) {
          var u = tr(n);
          return r == null ? u : Ed(u, r);
        }
        var xC = dt(function(n, r) {
          n = Ot(n);
          var u = -1, h = r.length, k = h > 2 ? r[2] : t;
          for (k && mn(r[0], r[1], k) && (h = 1); ++u < h; )
            for (var B = r[u], F = Sn(B), K = -1, Q = F.length; ++K < Q; ) {
              var fe = F[K], ve = n[fe];
              (ve === t || eo(ve, Ja[fe]) && !At.call(n, fe)) && (n[fe] = B[fe]);
            }
          return n;
        }), AC = dt(function(n) {
          return n.push(t, Cf), An(rv, t, n);
        });
        function IC(n, r) {
          return gd(n, Ze(r, 3), vo);
        }
        function TC(n, r) {
          return gd(n, Ze(r, 3), Pi);
        }
        function BC(n, r) {
          return n == null ? n : Bi(n, Ze(r, 3), Sn);
        }
        function PC(n, r) {
          return n == null ? n : Nd(n, Ze(r, 3), Sn);
        }
        function LC(n, r) {
          return n && vo(n, Ze(r, 3));
        }
        function OC(n, r) {
          return n && Pi(n, Ze(r, 3));
        }
        function EC(n) {
          return n == null ? [] : Wl(n, nn(n));
        }
        function RC(n) {
          return n == null ? [] : Wl(n, Sn(n));
        }
        function cu(n, r, u) {
          var h = n == null ? t : ga(n, r);
          return h === t ? u : h;
        }
        function DC(n, r) {
          return n != null && $f(n, r, l0);
        }
        function du(n, r) {
          return n != null && $f(n, r, s0);
        }
        var MC = gf(function(n, r, u) {
          r != null && typeof r.toString != "function" && (r = Tl.call(r)), n[r] = u;
        }, vu(wn)), FC = gf(function(n, r, u) {
          r != null && typeof r.toString != "function" && (r = Tl.call(r)), At.call(n, r) ? n[r].push(u) : n[r] = [u];
        }, Ze), NC = dt(Or);
        function nn(n) {
          return Cn(n) ? Ld(n) : Ri(n);
        }
        function Sn(n) {
          return Cn(n) ? Ld(n, !0) : y0(n);
        }
        function zC(n, r) {
          var u = {};
          return r = Ze(r, 3), vo(n, function(h, k, B) {
            xo(u, r(h, k, B), h);
          }), u;
        }
        function HC(n, r) {
          var u = {};
          return r = Ze(r, 3), vo(n, function(h, k, B) {
            xo(u, k, r(h, k, B));
          }), u;
        }
        var WC = nr(function(n, r, u) {
          Ul(n, r, u);
        }), rv = nr(function(n, r, u, h) {
          Ul(n, r, u, h);
        }), UC = Io(function(n, r) {
          var u = {};
          if (n == null)
            return u;
          var h = !1;
          r = Nt(r, function(B) {
            return B = Xo(B, n), h || (h = B.length > 1), B;
          }), po(n, Xi(n), u), h && (u = Hn(u, g | y | b, M0));
          for (var k = r.length; k--; )
            Hi(u, r[k]);
          return u;
        });
        function GC(n, r) {
          return lv(n, rs(Ze(r)));
        }
        var KC = Io(function(n, r) {
          return n == null ? {} : b0(n, r);
        });
        function lv(n, r) {
          if (n == null)
            return {};
          var u = Nt(Xi(n), function(h) {
            return [h];
          });
          return r = Ze(r), Xd(n, u, function(h, k) {
            return r(h, k[0]);
          });
        }
        function qC(n, r, u) {
          r = Xo(r, n);
          var h = -1, k = r.length;
          for (k || (k = 1, n = t); ++h < k; ) {
            var B = n == null ? t : n[mo(r[h])];
            B === t && (h = k, B = u), n = Bo(B) ? B.call(n) : B;
          }
          return n;
        }
        function jC(n, r, u) {
          return n == null ? n : Rr(n, r, u);
        }
        function YC(n, r, u, h) {
          return h = typeof h == "function" ? h : t, n == null ? n : Rr(n, r, u, h);
        }
        var sv = bf(nn), iv = bf(Sn);
        function XC(n, r, u) {
          var h = rt(n), k = h || Jo(n) || rr(n);
          if (r = Ze(r, 4), u == null) {
            var B = n && n.constructor;
            k ? u = h ? new B() : [] : Ut(n) ? u = Bo(B) ? tr(Ll(n)) : {} : u = {};
          }
          return (k ? Fn : vo)(n, function(F, K, Q) {
            return r(u, F, K, Q);
          }), u;
        }
        function ZC(n, r) {
          return n == null ? !0 : Hi(n, r);
        }
        function JC(n, r, u) {
          return n == null ? n : tf(n, r, Gi(u));
        }
        function QC(n, r, u, h) {
          return h = typeof h == "function" ? h : t, n == null ? n : tf(n, r, Gi(u), h);
        }
        function lr(n) {
          return n == null ? [] : wi(n, nn(n));
        }
        function eS(n) {
          return n == null ? [] : wi(n, Sn(n));
        }
        function tS(n, r, u) {
          return u === t && (u = r, r = t), u !== t && (u = Gn(u), u = u === u ? u : 0), r !== t && (r = Gn(r), r = r === r ? r : 0), ma(Gn(n), r, u);
        }
        function nS(n, r, u) {
          return r = Po(r), u === t ? (u = r, r = 0) : u = Po(u), n = Gn(n), i0(n, r, u);
        }
        function oS(n, r, u) {
          if (u && typeof u != "boolean" && mn(n, r, u) && (r = u = t), u === t && (typeof r == "boolean" ? (u = r, r = t) : typeof n == "boolean" && (u = n, n = t)), n === t && r === t ? (n = 0, r = 1) : (n = Po(n), r === t ? (r = n, n = 0) : r = Po(r)), n > r) {
            var h = n;
            n = r, r = h;
          }
          if (u || n % 1 || r % 1) {
            var k = Bd();
            return dn(n + k * (r - n + Eh("1e-" + ((k + "").length - 1))), r);
          }
          return Fi(n, r);
        }
        var aS = or(function(n, r, u) {
          return r = r.toLowerCase(), n + (u ? uv(r) : r);
        });
        function uv(n) {
          return fu(kt(n).toLowerCase());
        }
        function cv(n) {
          return n = kt(n), n && n.replace(lh, jh).replace(kh, "");
        }
        function rS(n, r, u) {
          n = kt(n), r = Tn(r);
          var h = n.length;
          u = u === t ? h : ma(st(u), 0, h);
          var k = u;
          return u -= r.length, u >= 0 && n.slice(u, k) == r;
        }
        function lS(n) {
          return n = kt(n), n && ni.test(n) ? n.replace(Ka, Yh) : n;
        }
        function sS(n) {
          return n = kt(n), n && kr.test(n) ? n.replace($r, "\\$&") : n;
        }
        var iS = or(function(n, r, u) {
          return n + (u ? "-" : "") + r.toLowerCase();
        }), uS = or(function(n, r, u) {
          return n + (u ? " " : "") + r.toLowerCase();
        }), cS = vf("toLowerCase");
        function dS(n, r, u) {
          n = kt(n), r = st(r);
          var h = r ? Xa(n) : 0;
          if (!r || h >= r)
            return n;
          var k = (r - h) / 2;
          return Xl(Dl(k), u) + n + Xl(Rl(k), u);
        }
        function fS(n, r, u) {
          n = kt(n), r = st(r);
          var h = r ? Xa(n) : 0;
          return r && h < r ? n + Xl(r - h, u) : n;
        }
        function vS(n, r, u) {
          n = kt(n), r = st(r);
          var h = r ? Xa(n) : 0;
          return r && h < r ? Xl(r - h, u) + n : n;
        }
        function pS(n, r, u) {
          return u || r == null ? r = 0 : r && (r = +r), Cb(kt(n).replace(ca, ""), r || 0);
        }
        function mS(n, r, u) {
          return (u ? mn(n, r, u) : r === t) ? r = 1 : r = st(r), Ni(kt(n), r);
        }
        function gS() {
          var n = arguments, r = kt(n[0]);
          return n.length < 3 ? r : r.replace(n[1], n[2]);
        }
        var yS = or(function(n, r, u) {
          return n + (u ? "_" : "") + r.toLowerCase();
        });
        function hS(n, r, u) {
          return u && typeof u != "number" && mn(n, r, u) && (r = u = t), u = u === t ? _e : u >>> 0, u ? (n = kt(n), n && (typeof r == "string" || r != null && !uu(r)) && (r = Tn(r), !r && Ya(n)) ? Zo(Jn(n), 0, u) : n.split(r, u)) : [];
        }
        var bS = or(function(n, r, u) {
          return n + (u ? " " : "") + fu(r);
        });
        function _S(n, r, u) {
          return n = kt(n), u = u == null ? 0 : ma(st(u), 0, n.length), r = Tn(r), n.slice(u, u + r.length) == r;
        }
        function CS(n, r, u) {
          var h = I.templateSettings;
          u && mn(n, r, u) && (r = t), n = kt(n), r = is({}, r, h, _f);
          var k = is({}, r.imports, h.imports, _f), B = nn(k), F = wi(k, B), K, Q, fe = 0, ve = r.interpolate || Cl, he = "__p += '", Pe = ki(
            (r.escape || Cl).source + "|" + ve.source + "|" + (ve === _l ? eh : Cl).source + "|" + (r.evaluate || Cl).source + "|$",
            "g"
          ), Ge = "//# sourceURL=" + (At.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Th + "]") + `
`;
          n.replace(Pe, function(Qe, ft, gt, Pn, gn, Ln) {
            return gt || (gt = Pn), he += n.slice(fe, Ln).replace(sh, Xh), ft && (K = !0, he += `' +
__e(` + ft + `) +
'`), gn && (Q = !0, he += `';
` + gn + `;
__p += '`), gt && (he += `' +
((__t = (` + gt + `)) == null ? '' : __t) +
'`), fe = Ln + Qe.length, Qe;
          }), he += `';
`;
          var Je = At.call(r, "variable") && r.variable;
          if (!Je)
            he = `with (obj) {
` + he + `
}
`;
          else if (fo.test(Je))
            throw new nt(c);
          he = (Q ? he.replace(xn, "") : he).replace(Ua, "$1").replace(Ga, "$1;"), he = "function(" + (Je || "obj") + `) {
` + (Je ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (K ? ", __e = _.escape" : "") + (Q ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + he + `return __p
}`;
          var it = fv(function() {
            return wt(B, Ge + "return " + he).apply(t, F);
          });
          if (it.source = he, iu(it))
            throw it;
          return it;
        }
        function SS(n) {
          return kt(n).toLowerCase();
        }
        function wS(n) {
          return kt(n).toUpperCase();
        }
        function $S(n, r, u) {
          if (n = kt(n), n && (u || r === t))
            return _d(n);
          if (!n || !(r = Tn(r)))
            return n;
          var h = Jn(n), k = Jn(r), B = Cd(h, k), F = Sd(h, k) + 1;
          return Zo(h, B, F).join("");
        }
        function kS(n, r, u) {
          if (n = kt(n), n && (u || r === t))
            return n.slice(0, $d(n) + 1);
          if (!n || !(r = Tn(r)))
            return n;
          var h = Jn(n), k = Sd(h, Jn(r)) + 1;
          return Zo(h, 0, k).join("");
        }
        function VS(n, r, u) {
          if (n = kt(n), n && (u || r === t))
            return n.replace(ca, "");
          if (!n || !(r = Tn(r)))
            return n;
          var h = Jn(n), k = Cd(h, Jn(r));
          return Zo(h, k).join("");
        }
        function xS(n, r) {
          var u = J, h = de;
          if (Ut(r)) {
            var k = "separator" in r ? r.separator : k;
            u = "length" in r ? st(r.length) : u, h = "omission" in r ? Tn(r.omission) : h;
          }
          n = kt(n);
          var B = n.length;
          if (Ya(n)) {
            var F = Jn(n);
            B = F.length;
          }
          if (u >= B)
            return n;
          var K = u - Xa(h);
          if (K < 1)
            return h;
          var Q = F ? Zo(F, 0, K).join("") : n.slice(0, K);
          if (k === t)
            return Q + h;
          if (F && (K += Q.length - K), uu(k)) {
            if (n.slice(K).search(k)) {
              var fe, ve = Q;
              for (k.global || (k = ki(k.source, kt(Hc.exec(k)) + "g")), k.lastIndex = 0; fe = k.exec(ve); )
                var he = fe.index;
              Q = Q.slice(0, he === t ? K : he);
            }
          } else if (n.indexOf(Tn(k), K) != K) {
            var Pe = Q.lastIndexOf(k);
            Pe > -1 && (Q = Q.slice(0, Pe));
          }
          return Q + h;
        }
        function AS(n) {
          return n = kt(n), n && Jt.test(n) ? n.replace(Zn, ob) : n;
        }
        var IS = or(function(n, r, u) {
          return n + (u ? " " : "") + r.toUpperCase();
        }), fu = vf("toUpperCase");
        function dv(n, r, u) {
          return n = kt(n), r = u ? t : r, r === t ? Jh(n) ? lb(n) : Wh(n) : n.match(r) || [];
        }
        var fv = dt(function(n, r) {
          try {
            return An(n, t, r);
          } catch (u) {
            return iu(u) ? u : new nt(u);
          }
        }), TS = Io(function(n, r) {
          return Fn(r, function(u) {
            u = mo(u), xo(n, u, lu(n[u], n));
          }), n;
        });
        function BS(n) {
          var r = n == null ? 0 : n.length, u = Ze();
          return n = r ? Nt(n, function(h) {
            if (typeof h[1] != "function")
              throw new Nn(i);
            return [u(h[0]), h[1]];
          }) : [], dt(function(h) {
            for (var k = -1; ++k < r; ) {
              var B = n[k];
              if (An(B[0], this, h))
                return An(B[1], this, h);
            }
          });
        }
        function PS(n) {
          return o0(Hn(n, g));
        }
        function vu(n) {
          return function() {
            return n;
          };
        }
        function LS(n, r) {
          return n == null || n !== n ? r : n;
        }
        var OS = mf(), ES = mf(!0);
        function wn(n) {
          return n;
        }
        function pu(n) {
          return Ud(typeof n == "function" ? n : Hn(n, g));
        }
        function RS(n) {
          return Kd(Hn(n, g));
        }
        function DS(n, r) {
          return qd(n, Hn(r, g));
        }
        var MS = dt(function(n, r) {
          return function(u) {
            return Or(u, n, r);
          };
        }), FS = dt(function(n, r) {
          return function(u) {
            return Or(n, u, r);
          };
        });
        function mu(n, r, u) {
          var h = nn(r), k = Wl(r, h);
          u == null && !(Ut(r) && (k.length || !h.length)) && (u = r, r = n, n = this, k = Wl(r, nn(r)));
          var B = !(Ut(u) && "chain" in u) || !!u.chain, F = Bo(n);
          return Fn(k, function(K) {
            var Q = r[K];
            n[K] = Q, F && (n.prototype[K] = function() {
              var fe = this.__chain__;
              if (B || fe) {
                var ve = n(this.__wrapped__), he = ve.__actions__ = _n(this.__actions__);
                return he.push({ func: Q, args: arguments, thisArg: n }), ve.__chain__ = fe, ve;
              }
              return Q.apply(n, Go([this.value()], arguments));
            });
          }), n;
        }
        function NS() {
          return rn._ === this && (rn._ = fb), this;
        }
        function gu() {
        }
        function zS(n) {
          return n = st(n), dt(function(r) {
            return jd(r, n);
          });
        }
        var HS = qi(Nt), WS = qi(md), US = qi(hi);
        function vv(n) {
          return eu(n) ? bi(mo(n)) : _0(n);
        }
        function GS(n) {
          return function(r) {
            return n == null ? t : ga(n, r);
          };
        }
        var KS = yf(), qS = yf(!0);
        function yu() {
          return [];
        }
        function hu() {
          return !1;
        }
        function jS() {
          return {};
        }
        function YS() {
          return "";
        }
        function XS() {
          return !0;
        }
        function ZS(n, r) {
          if (n = st(n), n < 1 || n > z)
            return [];
          var u = _e, h = dn(n, _e);
          r = Ze(r), n -= _e;
          for (var k = Si(h, r); ++u < n; )
            r(u);
          return k;
        }
        function JS(n) {
          return rt(n) ? Nt(n, mo) : Bn(n) ? [n] : _n(Lf(kt(n)));
        }
        function QS(n) {
          var r = ++cb;
          return kt(n) + r;
        }
        var ew = Yl(function(n, r) {
          return n + r;
        }, 0), tw = ji("ceil"), nw = Yl(function(n, r) {
          return n / r;
        }, 1), ow = ji("floor");
        function aw(n) {
          return n && n.length ? Hl(n, wn, Li) : t;
        }
        function rw(n, r) {
          return n && n.length ? Hl(n, Ze(r, 2), Li) : t;
        }
        function lw(n) {
          return hd(n, wn);
        }
        function sw(n, r) {
          return hd(n, Ze(r, 2));
        }
        function iw(n) {
          return n && n.length ? Hl(n, wn, Di) : t;
        }
        function uw(n, r) {
          return n && n.length ? Hl(n, Ze(r, 2), Di) : t;
        }
        var cw = Yl(function(n, r) {
          return n * r;
        }, 1), dw = ji("round"), fw = Yl(function(n, r) {
          return n - r;
        }, 0);
        function vw(n) {
          return n && n.length ? Ci(n, wn) : 0;
        }
        function pw(n, r) {
          return n && n.length ? Ci(n, Ze(r, 2)) : 0;
        }
        return I.after = R_, I.ary = Uf, I.assign = wC, I.assignIn = av, I.assignInWith = is, I.assignWith = $C, I.at = kC, I.before = Gf, I.bind = lu, I.bindAll = TS, I.bindKey = Kf, I.castArray = j_, I.chain = zf, I.chunk = o1, I.compact = a1, I.concat = r1, I.cond = BS, I.conforms = PS, I.constant = vu, I.countBy = v_, I.create = VC, I.curry = qf, I.curryRight = jf, I.debounce = Yf, I.defaults = xC, I.defaultsDeep = AC, I.defer = D_, I.delay = M_, I.difference = l1, I.differenceBy = s1, I.differenceWith = i1, I.drop = u1, I.dropRight = c1, I.dropRightWhile = d1, I.dropWhile = f1, I.fill = v1, I.filter = m_, I.flatMap = h_, I.flatMapDeep = b_, I.flatMapDepth = __, I.flatten = Df, I.flattenDeep = p1, I.flattenDepth = m1, I.flip = F_, I.flow = OS, I.flowRight = ES, I.fromPairs = g1, I.functions = EC, I.functionsIn = RC, I.groupBy = C_, I.initial = h1, I.intersection = b1, I.intersectionBy = _1, I.intersectionWith = C1, I.invert = MC, I.invertBy = FC, I.invokeMap = w_, I.iteratee = pu, I.keyBy = $_, I.keys = nn, I.keysIn = Sn, I.map = ns, I.mapKeys = zC, I.mapValues = HC, I.matches = RS, I.matchesProperty = DS, I.memoize = as, I.merge = WC, I.mergeWith = rv, I.method = MS, I.methodOf = FS, I.mixin = mu, I.negate = rs, I.nthArg = zS, I.omit = UC, I.omitBy = GC, I.once = N_, I.orderBy = k_, I.over = HS, I.overArgs = z_, I.overEvery = WS, I.overSome = US, I.partial = su, I.partialRight = Xf, I.partition = V_, I.pick = KC, I.pickBy = lv, I.property = vv, I.propertyOf = GS, I.pull = k1, I.pullAll = Ff, I.pullAllBy = V1, I.pullAllWith = x1, I.pullAt = A1, I.range = KS, I.rangeRight = qS, I.rearg = H_, I.reject = I_, I.remove = I1, I.rest = W_, I.reverse = au, I.sampleSize = B_, I.set = jC, I.setWith = YC, I.shuffle = P_, I.slice = T1, I.sortBy = E_, I.sortedUniq = D1, I.sortedUniqBy = M1, I.split = hS, I.spread = U_, I.tail = F1, I.take = N1, I.takeRight = z1, I.takeRightWhile = H1, I.takeWhile = W1, I.tap = a_, I.throttle = G_, I.thru = ts, I.toArray = tv, I.toPairs = sv, I.toPairsIn = iv, I.toPath = JS, I.toPlainObject = ov, I.transform = XC, I.unary = K_, I.union = U1, I.unionBy = G1, I.unionWith = K1, I.uniq = q1, I.uniqBy = j1, I.uniqWith = Y1, I.unset = ZC, I.unzip = ru, I.unzipWith = Nf, I.update = JC, I.updateWith = QC, I.values = lr, I.valuesIn = eS, I.without = X1, I.words = dv, I.wrap = q_, I.xor = Z1, I.xorBy = J1, I.xorWith = Q1, I.zip = e_, I.zipObject = t_, I.zipObjectDeep = n_, I.zipWith = o_, I.entries = sv, I.entriesIn = iv, I.extend = av, I.extendWith = is, mu(I, I), I.add = ew, I.attempt = fv, I.camelCase = aS, I.capitalize = uv, I.ceil = tw, I.clamp = tS, I.clone = Y_, I.cloneDeep = Z_, I.cloneDeepWith = J_, I.cloneWith = X_, I.conformsTo = Q_, I.deburr = cv, I.defaultTo = LS, I.divide = nw, I.endsWith = rS, I.eq = eo, I.escape = lS, I.escapeRegExp = sS, I.every = p_, I.find = g_, I.findIndex = Ef, I.findKey = IC, I.findLast = y_, I.findLastIndex = Rf, I.findLastKey = TC, I.floor = ow, I.forEach = Hf, I.forEachRight = Wf, I.forIn = BC, I.forInRight = PC, I.forOwn = LC, I.forOwnRight = OC, I.get = cu, I.gt = eC, I.gte = tC, I.has = DC, I.hasIn = du, I.head = Mf, I.identity = wn, I.includes = S_, I.indexOf = y1, I.inRange = nS, I.invoke = NC, I.isArguments = ba, I.isArray = rt, I.isArrayBuffer = nC, I.isArrayLike = Cn, I.isArrayLikeObject = Yt, I.isBoolean = oC, I.isBuffer = Jo, I.isDate = aC, I.isElement = rC, I.isEmpty = lC, I.isEqual = sC, I.isEqualWith = iC, I.isError = iu, I.isFinite = uC, I.isFunction = Bo, I.isInteger = Zf, I.isLength = ls, I.isMap = Jf, I.isMatch = cC, I.isMatchWith = dC, I.isNaN = fC, I.isNative = vC, I.isNil = mC, I.isNull = pC, I.isNumber = Qf, I.isObject = Ut, I.isObjectLike = jt, I.isPlainObject = Nr, I.isRegExp = uu, I.isSafeInteger = gC, I.isSet = ev, I.isString = ss, I.isSymbol = Bn, I.isTypedArray = rr, I.isUndefined = yC, I.isWeakMap = hC, I.isWeakSet = bC, I.join = S1, I.kebabCase = iS, I.last = Un, I.lastIndexOf = w1, I.lowerCase = uS, I.lowerFirst = cS, I.lt = _C, I.lte = CC, I.max = aw, I.maxBy = rw, I.mean = lw, I.meanBy = sw, I.min = iw, I.minBy = uw, I.stubArray = yu, I.stubFalse = hu, I.stubObject = jS, I.stubString = YS, I.stubTrue = XS, I.multiply = cw, I.nth = $1, I.noConflict = NS, I.noop = gu, I.now = os, I.pad = dS, I.padEnd = fS, I.padStart = vS, I.parseInt = pS, I.random = oS, I.reduce = x_, I.reduceRight = A_, I.repeat = mS, I.replace = gS, I.result = qC, I.round = dw, I.runInContext = X, I.sample = T_, I.size = L_, I.snakeCase = yS, I.some = O_, I.sortedIndex = B1, I.sortedIndexBy = P1, I.sortedIndexOf = L1, I.sortedLastIndex = O1, I.sortedLastIndexBy = E1, I.sortedLastIndexOf = R1, I.startCase = bS, I.startsWith = _S, I.subtract = fw, I.sum = vw, I.sumBy = pw, I.template = CS, I.times = ZS, I.toFinite = Po, I.toInteger = st, I.toLength = nv, I.toLower = SS, I.toNumber = Gn, I.toSafeInteger = SC, I.toString = kt, I.toUpper = wS, I.trim = $S, I.trimEnd = kS, I.trimStart = VS, I.truncate = xS, I.unescape = AS, I.uniqueId = QS, I.upperCase = IS, I.upperFirst = fu, I.each = Hf, I.eachRight = Wf, I.first = Mf, mu(I, (function() {
          var n = {};
          return vo(I, function(r, u) {
            At.call(I.prototype, u) || (n[u] = r);
          }), n;
        })(), { chain: !1 }), I.VERSION = a, Fn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
          I[n].placeholder = I;
        }), Fn(["drop", "take"], function(n, r) {
          mt.prototype[n] = function(u) {
            u = u === t ? 1 : en(st(u), 0);
            var h = this.__filtered__ && !r ? new mt(this) : this.clone();
            return h.__filtered__ ? h.__takeCount__ = dn(u, h.__takeCount__) : h.__views__.push({
              size: dn(u, _e),
              type: n + (h.__dir__ < 0 ? "Right" : "")
            }), h;
          }, mt.prototype[n + "Right"] = function(u) {
            return this.reverse()[n](u).reverse();
          };
        }), Fn(["filter", "map", "takeWhile"], function(n, r) {
          var u = r + 1, h = u == j || u == q;
          mt.prototype[n] = function(k) {
            var B = this.clone();
            return B.__iteratees__.push({
              iteratee: Ze(k, 3),
              type: u
            }), B.__filtered__ = B.__filtered__ || h, B;
          };
        }), Fn(["head", "last"], function(n, r) {
          var u = "take" + (r ? "Right" : "");
          mt.prototype[n] = function() {
            return this[u](1).value()[0];
          };
        }), Fn(["initial", "tail"], function(n, r) {
          var u = "drop" + (r ? "" : "Right");
          mt.prototype[n] = function() {
            return this.__filtered__ ? new mt(this) : this[u](1);
          };
        }), mt.prototype.compact = function() {
          return this.filter(wn);
        }, mt.prototype.find = function(n) {
          return this.filter(n).head();
        }, mt.prototype.findLast = function(n) {
          return this.reverse().find(n);
        }, mt.prototype.invokeMap = dt(function(n, r) {
          return typeof n == "function" ? new mt(this) : this.map(function(u) {
            return Or(u, n, r);
          });
        }), mt.prototype.reject = function(n) {
          return this.filter(rs(Ze(n)));
        }, mt.prototype.slice = function(n, r) {
          n = st(n);
          var u = this;
          return u.__filtered__ && (n > 0 || r < 0) ? new mt(u) : (n < 0 ? u = u.takeRight(-n) : n && (u = u.drop(n)), r !== t && (r = st(r), u = r < 0 ? u.dropRight(-r) : u.take(r - n)), u);
        }, mt.prototype.takeRightWhile = function(n) {
          return this.reverse().takeWhile(n).reverse();
        }, mt.prototype.toArray = function() {
          return this.take(_e);
        }, vo(mt.prototype, function(n, r) {
          var u = /^(?:filter|find|map|reject)|While$/.test(r), h = /^(?:head|last)$/.test(r), k = I[h ? "take" + (r == "last" ? "Right" : "") : r], B = h || /^find/.test(r);
          k && (I.prototype[r] = function() {
            var F = this.__wrapped__, K = h ? [1] : arguments, Q = F instanceof mt, fe = K[0], ve = Q || rt(F), he = function(ft) {
              var gt = k.apply(I, Go([ft], K));
              return h && Pe ? gt[0] : gt;
            };
            ve && u && typeof fe == "function" && fe.length != 1 && (Q = ve = !1);
            var Pe = this.__chain__, Ge = !!this.__actions__.length, Je = B && !Pe, it = Q && !Ge;
            if (!B && ve) {
              F = it ? F : new mt(this);
              var Qe = n.apply(F, K);
              return Qe.__actions__.push({ func: ts, args: [he], thisArg: t }), new zn(Qe, Pe);
            }
            return Je && it ? n.apply(this, K) : (Qe = this.thru(he), Je ? h ? Qe.value()[0] : Qe.value() : Qe);
          });
        }), Fn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
          var r = xl[n], u = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", h = /^(?:pop|shift)$/.test(n);
          I.prototype[n] = function() {
            var k = arguments;
            if (h && !this.__chain__) {
              var B = this.value();
              return r.apply(rt(B) ? B : [], k);
            }
            return this[u](function(F) {
              return r.apply(rt(F) ? F : [], k);
            });
          };
        }), vo(mt.prototype, function(n, r) {
          var u = I[r];
          if (u) {
            var h = u.name + "";
            At.call(er, h) || (er[h] = []), er[h].push({ name: r, func: u });
          }
        }), er[jl(t, $).name] = [{
          name: "wrapper",
          func: t
        }], mt.prototype.clone = Ab, mt.prototype.reverse = Ib, mt.prototype.value = Tb, I.prototype.at = r_, I.prototype.chain = l_, I.prototype.commit = s_, I.prototype.next = i_, I.prototype.plant = c_, I.prototype.reverse = d_, I.prototype.toJSON = I.prototype.valueOf = I.prototype.value = f_, I.prototype.first = I.prototype.head, xr && (I.prototype[xr] = u_), I;
      }), Za = sb();
      da ? ((da.exports = Za)._ = Za, pi._ = Za) : rn._ = Za;
    }).call(bD);
  })(Kr, Kr.exports)), Kr.exports;
}
var CD = _D();
const SD = { class: "w-full h-full flex gap-4" }, wD = { class: "min-w-[350px]" }, $D = { class: "flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full h-full" }, kD = { class: "flex-grow flex flex-col h-full" }, VD = { class: "flex-grow p-4 flex flex-col gap-2" }, xD = { class: "self-end flex gap-4 p-4" }, AD = { class: "flex-grow overflow-hidden w-full" }, ID = { class: "bg-white rounded-lg p-4 border border-gray-300 h-full w-full flex items-center justify-center overflow-hidden" }, TD = /* @__PURE__ */ oe({
  __name: "DatasourceEditor",
  props: {
    itemId: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const t = e, a = N({}), l = ut(xm), { dataSources: s, updateDataSource: i } = dr(), { connections: c } = Jr(), p = f(() => l.registeredDatasources);
    at(() => {
      const C = s.find((_) => _.uid === t.itemId);
      a.value = CD.cloneDeep(C);
    });
    const v = () => {
      i(a.value.uid, a.value), b("close");
    }, m = f(() => {
      const C = l.getDatasourceIdentifiers(a.value.type);
      return C ? l.resolveIdentifier(C.Preview) : null;
    }), g = f(() => {
      const C = l.getDatasourceIdentifiers(a.value.type);
      return console.log(C), C ? l.resolveIdentifier(C.Settings) : null;
    }), y = (C) => {
      console.log("updateConfig called"), console.log(C), a.value.config = C;
    }, b = o;
    return (C, _) => {
      const S = ze("VaInput"), $ = ze("VaSelect"), A = ze("va-button");
      return w(), L("div", SD, [
        E("div", wD, [
          E("div", $D, [
            _[6] || (_[6] = E("div", { class: "flex gap-4 w-full border-b border-gray-300 px-4 py-2 items-center" }, [
              E("h4", { class: "flex-grow text-sm font-semibold leading-[1.5rem]" }, "Store settings")
            ], -1)),
            E("div", kD, [
              E("div", VD, [
                a.value ? (w(), L(Le, { key: 0 }, [
                  G(S, {
                    modelValue: a.value.uid,
                    "onUpdate:modelValue": _[0] || (_[0] = (x) => a.value.uid = x),
                    label: "UID",
                    readonly: ""
                  }, null, 8, ["modelValue"]),
                  G(S, {
                    modelValue: a.value.name,
                    "onUpdate:modelValue": _[1] || (_[1] = (x) => a.value.name = x),
                    label: "Name"
                  }, null, 8, ["modelValue"]),
                  G($, {
                    modelValue: a.value.type,
                    "onUpdate:modelValue": _[2] || (_[2] = (x) => a.value.type = x),
                    label: "Type",
                    options: p.value
                  }, null, 8, ["modelValue", "options"]),
                  (w(), te(zt(g.value), {
                    config: a.value.config,
                    connections: d(c),
                    dataSources: d(s)
                  }, null, 8, ["config", "connections", "dataSources"]))
                ], 64)) : Y("", !0)
              ]),
              E("div", xD, [
                G(A, { onClick: v }, {
                  default: U(() => [..._[4] || (_[4] = [
                    xe("Save", -1)
                  ])]),
                  _: 1
                }),
                G(A, {
                  onClick: _[3] || (_[3] = (x) => C.$emit("close")),
                  preset: "plain"
                }, {
                  default: U(() => [..._[5] || (_[5] = [
                    xe("Close", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        E("div", AD, [
          E("div", ID, [
            (w(), te(zt(m.value), {
              "data-source": a.value,
              key: a.value.uid,
              onUpdateConfig: y
            }, null, 40, ["data-source"]))
          ])
        ])
      ]);
    };
  }
}), BD = { class: "flex flex-row w-full p-4 gap-4 h-full pl-18" }, PD = { class: "flex flex-shrink-0 w-[300px] h-full gap-4 grid grid-cols-1 grid-rows-2" }, LD = { class: "h-full flex-grow-0" }, OD = { class: "h-full flex-grow-0" }, ED = { class: "w-full overflow-hidden" }, RD = /* @__PURE__ */ oe({
  __name: "DataSettings",
  setup(e) {
    const o = He(null), t = N(""), a = ({ type: s, itemId: i }) => {
      console.log("openEditor", s, i), s === "Connection" && (o.value = hD, t.value = i), s === "DataSource" && (o.value = TD, t.value = i);
    }, l = () => {
      o.value = null, t.value = "";
    };
    return (s, i) => (w(), L("div", BD, [
      E("div", PD, [
        E("div", LD, [
          G(dD, {
            onOpenEditor: a,
            activeItemId: t.value
          }, null, 8, ["activeItemId"])
        ]),
        E("div", OD, [
          G(lD, {
            onOpenEditor: a,
            activeItemId: t.value
          }, null, 8, ["activeItemId"])
        ])
      ]),
      E("div", ED, [
        (w(), te(zt(o.value), {
          itemId: t.value,
          key: t.value,
          onClose: l
        }, null, 40, ["itemId"]))
      ])
    ]));
  }
}), DD = { class: "add_widget_window ice z-mx p-6 shadow-sm" }, MD = ["src"], FD = { class: "font-normal" }, ND = /* @__PURE__ */ oe({
  __name: "AddWidgetWindow",
  setup(e) {
    const o = N(""), t = N(""), { dataSources: a } = dr(), l = (v) => {
      const m = document.createElement("div");
      document.body.appendChild(m), v.dataTransfer?.setDragImage(m, 0, 0), setTimeout(() => {
        document.body.removeChild(m);
      }, 0);
    }, s = ut(Am);
    console.log(s.getAllWidgets());
    const i = Object.entries(s.getAllWidgets()).map(([v, m]) => ({ type: v, name: m.name, icon: m.icon })), c = f(() => i);
    f(() => [
      "None",
      ...a.map((v) => v.type).filter((v, m, g) => m === g.indexOf(v))
    ]);
    const p = f(() => a.filter((v) => v.type === t.value).map((v) => ({ uid: v.uid })));
    return Se(t, (v) => {
      !v || v === "None" ? o.value = "" : p.value.map((g) => g.uid).includes(o.value) || (o.value = "");
    }), (v, m) => (w(), L("div", DD, [
      m[1] || (m[1] = E("span", { class: "center font-normal text-center text-lg" }, [
        E("h3", null, "Add Widget")
      ], -1)),
      G(d(Ky), { vertical: "" }, {
        default: U(() => [
          G(d(Dw), {
            class: "widgets_grid",
            list: c.value,
            group: { name: "widgets", pull: "clone", put: !1 },
            itemKey: "type"
          }, {
            item: U(({ element: g }) => [
              E("div", {
                class: "widgets_grid-item shadow-xs",
                draggable: "true",
                onDragstart: m[0] || (m[0] = (y) => l(y))
              }, [
                E("img", {
                  class: "m-2",
                  src: g.icon,
                  style: { height: "50px" }
                }, null, 8, MD),
                E("span", FD, ke(g.name), 1)
              ], 32)
            ]),
            _: 1
          }, 8, ["list"])
        ]),
        _: 1
      })
    ]));
  }
}), zD = /* @__PURE__ */ io(ND, [["__scopeId", "data-v-d5d8c434"]]), HD = { class: "widget_settings_window ice z-mx p-6 shadow-sm" }, WD = { class: "settings-header" }, UD = ["title"], GD = {
  key: 0,
  class: "content"
}, KD = { class: "buttons" }, qD = /* @__PURE__ */ oe({
  __name: "WidgetSettingsWindow",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Sm(["saveWidgetSettings", "close"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const t = o, a = wm(e, "modelValue"), l = N(!1), { dataSources: s } = dr(), c = ut(Am).getAllWidgets(), p = ut("i18n"), v = (m) => p ? p.t(m) : m;
    return (m, g) => {
      const y = ze("VaSelect"), b = ze("va-collapse"), C = ze("va-button");
      return w(), L("div", HD, [
        E("div", WD, [
          g[5] || (g[5] = E("h3", null, "Widget Settings", -1)),
          E("code", {
            class: "uid-value",
            title: a.value?.uid
          }, ke(a.value?.uid), 9, UD)
        ]),
        a.value ? (w(), L("div", GD, [
          G(d(Mw), {
            modelValue: a.value.wrapperConfig,
            "onUpdate:modelValue": g[0] || (g[0] = (_) => a.value.wrapperConfig = _)
          }, null, 8, ["modelValue"]),
          (w(), te(zt(d(c)[a.value.type]?.settingsComponent), {
            modelValue: a.value.config,
            "onUpdate:modelValue": g[1] || (g[1] = (_) => a.value.config = _),
            key: a.value.uid,
            dataSources: d(s)
          }, null, 8, ["modelValue", "dataSources"])),
          G(b, {
            modelValue: l.value,
            "onUpdate:modelValue": g[3] || (g[3] = (_) => l.value = _),
            header: v("common:Widgets.storeSettingsTitle"),
            icon: "store"
          }, {
            default: U(() => [
              G(y, {
                label: "Store ID",
                class: "mx-3 my-3",
                modelValue: a.value.config.datasourceId,
                "onUpdate:modelValue": g[2] || (g[2] = (_) => a.value.config.datasourceId = _),
                options: d(s),
                "text-by": "name",
                "value-by": "uid",
                teleport: ".widget_settings_window"
              }, null, 8, ["modelValue", "options"])
            ]),
            _: 1
          }, 8, ["modelValue", "header"])
        ])) : Y("", !0),
        E("div", KD, [
          G(C, {
            onClick: g[4] || (g[4] = (_) => t("close"))
          }, {
            default: U(() => [...g[6] || (g[6] = [
              xe("Close", -1)
            ])]),
            _: 1
          })
        ])
      ]);
    };
  }
}), jD = /* @__PURE__ */ io(qD, [["__scopeId", "data-v-83a6e21f"]]), YD = { key: 0 }, XD = ["onClick"], ZD = { key: 1 }, JD = { class: "delete-dialog" }, QD = { class: "delete-dialog__message" }, eM = { class: "delete-dialog__actions" }, tM = /* @__PURE__ */ oe({
  __name: "PageEditor",
  emits: ["pageSettings"],
  setup(e, { emit: o }) {
    const t = oc(), a = Os(), l = ut(Fw), s = ut(rl), i = N(0), c = N(!1), p = N("newPage"), v = N(!1), m = N(null), g = o;
    let y;
    at(() => {
      y = l.subscribe((P) => {
        (P == bu.PAGE_UPDATE || P == bu.PAGE_UNREGISTRATION || P == bu.PAGE_REGISTRATION) && (i.value += 1);
      });
    }), Cm(() => {
      l.unsubscribe(y);
    });
    const b = f(() => {
      i.value;
      const P = l?.getAllPageIds(), R = [];
      for (const J of P || []) {
        const de = l?.getPage(J);
        de && R.push(de);
      }
      return R;
    }), C = f(() => {
      const P = [];
      for (const R of b.value)
        P.push({
          id: R.id,
          label: R.name,
          icon: "note"
        });
      return c.value && P.push({
        id: ec(),
        label: "newPage",
        icon: "note",
        new: !0
      }), P;
    }), _ = f(() => {
      const P = a.params.pageid;
      if (P)
        try {
          return l?.getPage(P).name;
        } catch {
          return "??";
        }
      else
        return "??";
    }), S = N(!1), $ = (P) => {
      t.push(`/page/${P.id}/edit`);
    }, A = N(""), x = () => {
      c.value = !1;
      const P = s?.getLayout("org.eclipse.daanse.board.app.ui.vue.layouts.base");
      l?.registerPage({
        id: ec(),
        name: p.value,
        description: "",
        icon: "",
        visibleInNavigation: !0,
        layout: P
      }), i.value += 1;
    }, T = f(() => {
      if (!m.value) return "";
      try {
        return l?.getPage(m.value)?.name || "";
      } catch {
        return "";
      }
    }), O = (P) => {
      m.value = P, v.value = !0;
    }, D = () => {
      const P = m.value;
      if (P && (l?.unregisterPage(P), i.value += 1, v.value = !1, m.value = null, a.params.pageid === P)) {
        const R = l?.getAllPageIds() || [];
        R.length > 0 ? t.push(`/page/${R[0]}/edit`) : t.push("/");
      }
    }, V = () => {
      c.value = !0, p.value = "newPage";
    };
    return (P, R) => {
      const J = ze("va-button"), de = ze("VaDivider"), ne = ze("VaButton"), M = ze("VaInput"), j = ze("VaTreeView"), W = ze("VaIcon"), q = ze("VaModal");
      return w(), L(Le, null, [
        G(ta, {
          duration: 150,
          name: "bounce"
        }, {
          default: U(() => [
            S.value ? (w(), L("div", YD, [
              G(J, {
                icon: "add",
                onClick: V,
                preset: "secondary"
              }),
              G(J, {
                icon: "folder",
                preset: "secondary"
              }),
              G(de),
              G(j, {
                nodes: C.value,
                filter: A.value
              }, {
                content: U((Z) => [
                  "new" in Z ? (w(), L("div", ZD, [
                    G(M, {
                      modelValue: p.value,
                      "onUpdate:modelValue": R[0] || (R[0] = (z) => p.value = z)
                    }, null, 8, ["modelValue"]),
                    G(ne, {
                      onClick: x,
                      preset: "secondary",
                      icon: "check",
                      size: "small",
                      class: "ml-auto"
                    })
                  ])) : (w(), L("div", {
                    key: 0,
                    onClick: (z) => $(Z),
                    class: "item"
                  }, [
                    xe(ke(Z.label) + " ", 1),
                    G(ne, {
                      preset: "secondary",
                      icon: "settings",
                      onClick: (z) => g("pageSettings", Z.id),
                      size: "small",
                      class: "ml-auto"
                    }, null, 8, ["onClick"]),
                    G(ne, {
                      preset: "secondary",
                      icon: "delete",
                      onClick: $e((z) => O(Z.id), ["stop"]),
                      size: "small"
                    }, null, 8, ["onClick"])
                  ], 8, XD))
                ]),
                _: 1
              }, 8, ["nodes", "filter"]),
              G(de)
            ])) : Y("", !0)
          ]),
          _: 1
        }),
        G(ne, {
          icon: "note",
          preset: "secondary",
          "icon-right": "unfold_more",
          onClick: R[1] || (R[1] = (Z) => S.value = !S.value)
        }, {
          default: U(() => [
            xe(ke(_.value), 1)
          ]),
          _: 1
        }),
        G(q, {
          size: "small",
          "hide-default-actions": "",
          modelValue: v.value,
          "onUpdate:modelValue": R[4] || (R[4] = (Z) => v.value = Z),
          "overlay-opacity": "0.3"
        }, {
          footer: U(() => [
            E("div", eM, [
              G(ne, {
                preset: "secondary",
                onClick: R[2] || (R[2] = (Z) => {
                  v.value = !1, m.value = null;
                })
              }, {
                default: U(() => [...R[8] || (R[8] = [
                  xe(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              G(ne, {
                color: "danger",
                icon: "delete",
                onClick: R[3] || (R[3] = (Z) => D())
              }, {
                default: U(() => [...R[9] || (R[9] = [
                  xe(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: U(() => [
            E("div", JD, [
              G(W, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              R[7] || (R[7] = E("h5", { class: "va-h5" }, "Seite löschen", -1)),
              E("p", QD, [
                R[5] || (R[5] = xe(" Möchtest du die Seite ", -1)),
                E("strong", null, ke(T.value), 1),
                R[6] || (R[6] = xe(" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden. ", -1))
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), nM = /* @__PURE__ */ io(tM, [["__scopeId", "data-v-3afc4f7c"]]), oM = { class: "settings_window ice z-mx p-6 shadow-sm" }, aM = {
  key: 0,
  class: "settings-container"
}, rM = { class: "settings-block" }, lM = { class: "settings-block" }, sM = { class: "settings-block" }, iM = {
  key: 0,
  class: "settings-block"
}, uM = { class: "settings-block" }, cM = { class: "settings-block" }, dM = { class: "settings-block" }, fM = { class: "settings-block" }, vM = { class: "settings-block" }, pM = { class: "buttons" }, mM = /* @__PURE__ */ oe({
  __name: "PageSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Sm(["close"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const t = ut("i18n"), a = (y) => t ? t.t(y) : y, l = wm(e, "modelValue"), s = N(!0), i = ut(ll), c = ut(rl), p = N(null), v = o, m = f(() => c?.getAllLayouts() || []), g = f(() => m.value.find((y) => y.id === "org.eclipse.daanse.board.app.ui.vue.layouts.base") || m.value[0]);
    return at(() => {
      if (l.value && i) {
        const y = i.getPage(l.value);
        if (p.value = y ? { ...y } : null, p.value && !p.value.layout && g.value && (p.value.layout = g.value), p.value?.layout && c) {
          const b = c.getLayout(p.value.layout.id);
          b && (p.value.layout = b);
        }
      }
    }), Se(p, () => {
      i?.updatePage(p.value);
    }, { deep: !0 }), (y, b) => {
      const C = ze("va-input"), _ = ze("VaSelect"), S = ze("va-color-input"), $ = ze("va-select"), A = ze("va-switch"), x = ze("va-collapse"), T = ze("va-button");
      return w(), L("div", oM, [
        G(x, {
          modelValue: s.value,
          "onUpdate:modelValue": b[12] || (b[12] = (O) => s.value = O),
          icon: "settings",
          header: a("page:PageSettings.title")
        }, {
          default: U(() => [
            p.value ? (w(), L("div", aM, [
              E("div", rM, [
                G(C, {
                  class: "field",
                  label: a("page:PageSettings.id"),
                  modelValue: p.value.id,
                  "onUpdate:modelValue": b[0] || (b[0] = (O) => p.value.id = O)
                }, null, 8, ["label", "modelValue"]),
                G(C, {
                  class: "field",
                  label: a("page:PageSettings.name"),
                  modelValue: p.value.name,
                  "onUpdate:modelValue": b[1] || (b[1] = (O) => p.value.name = O)
                }, null, 8, ["label", "modelValue"])
              ]),
              E("div", lM, [
                G(C, {
                  class: "field",
                  label: a("page:PageSettings.icon"),
                  modelValue: p.value.icon,
                  "onUpdate:modelValue": b[2] || (b[2] = (O) => p.value.icon = O)
                }, null, 8, ["label", "modelValue"]),
                G(C, {
                  class: "field",
                  label: a("page:PageSettings.description"),
                  modelValue: p.value.description,
                  "onUpdate:modelValue": b[3] || (b[3] = (O) => p.value.description = O)
                }, null, 8, ["label", "modelValue"])
              ]),
              E("div", sM, [
                G(_, {
                  label: a("page:PageSettings.layout"),
                  modelValue: p.value.layout,
                  "onUpdate:modelValue": b[4] || (b[4] = (O) => p.value.layout = O),
                  options: m.value,
                  "text-by": "name",
                  "track-by": "id"
                }, null, 8, ["label", "modelValue", "options"])
              ]),
              p.value.layout?.settings ? (w(), L("div", iM, [
                (w(), te(zt(p.value.layout.settings), {
                  modelValue: p.value.layoutSettings,
                  "onUpdate:modelValue": b[5] || (b[5] = (O) => p.value.layoutSettings = O)
                }, null, 8, ["modelValue"]))
              ])) : Y("", !0),
              E("div", uM, [
                G(S, {
                  class: "field",
                  label: a("page:PageSettings.backgroundColor"),
                  modelValue: p.value.backgroundColor,
                  "onUpdate:modelValue": b[6] || (b[6] = (O) => p.value.backgroundColor = O)
                }, null, 8, ["label", "modelValue"])
              ]),
              E("div", cM, [
                G(C, {
                  class: "field",
                  label: a("page:PageSettings.backgroundImage"),
                  modelValue: p.value.backgroundImage,
                  "onUpdate:modelValue": b[7] || (b[7] = (O) => p.value.backgroundImage = O),
                  placeholder: "URL to background image"
                }, null, 8, ["label", "modelValue"])
              ]),
              E("div", dM, [
                G($, {
                  class: "field",
                  label: a("page:PageSettings.backgroundSize"),
                  modelValue: p.value.backgroundSize,
                  "onUpdate:modelValue": b[8] || (b[8] = (O) => p.value.backgroundSize = O),
                  options: [
                    { value: "auto", text: "Auto" },
                    { value: "cover", text: "Cover (fill page)" },
                    { value: "contain", text: "Contain (fit in page)" }
                  ],
                  "value-by": "value",
                  placeholder: "cover"
                }, null, 8, ["label", "modelValue"]),
                G($, {
                  class: "field",
                  label: a("page:PageSettings.backgroundRepeat"),
                  modelValue: p.value.backgroundRepeat,
                  "onUpdate:modelValue": b[9] || (b[9] = (O) => p.value.backgroundRepeat = O),
                  options: [
                    { value: "no-repeat", text: "No Repeat" },
                    { value: "repeat", text: "Repeat" },
                    { value: "repeat-x", text: "Repeat Horizontally" },
                    { value: "repeat-y", text: "Repeat Vertically" }
                  ],
                  "value-by": "value",
                  placeholder: "no-repeat"
                }, null, 8, ["label", "modelValue"])
              ]),
              E("div", fM, [
                G($, {
                  class: "field",
                  label: a("page:PageSettings.backgroundPosition"),
                  modelValue: p.value.backgroundPosition,
                  "onUpdate:modelValue": b[10] || (b[10] = (O) => p.value.backgroundPosition = O),
                  options: [
                    { value: "center", text: "Center" },
                    { value: "top", text: "Top" },
                    { value: "bottom", text: "Bottom" },
                    { value: "left", text: "Left" },
                    { value: "right", text: "Right" },
                    { value: "top left", text: "Top Left" },
                    { value: "top right", text: "Top Right" },
                    { value: "bottom left", text: "Bottom Left" },
                    { value: "bottom right", text: "Bottom Right" }
                  ],
                  "value-by": "value",
                  placeholder: "center"
                }, null, 8, ["label", "modelValue"])
              ]),
              E("div", vM, [
                G(A, {
                  label: a("page:PageSettings.visibleInNavigation"),
                  modelValue: p.value.visibleInNavigation,
                  "onUpdate:modelValue": b[11] || (b[11] = (O) => p.value.visibleInNavigation = O)
                }, null, 8, ["label", "modelValue"])
              ])
            ])) : Y("", !0)
          ]),
          _: 1
        }, 8, ["modelValue", "header"]),
        E("div", pM, [
          G(T, {
            onClick: b[13] || (b[13] = (O) => v("close"))
          }, {
            default: U(() => [...b[14] || (b[14] = [
              xe("Close", -1)
            ])]),
            _: 1
          })
        ])
      ]);
    };
  }
}), gM = /* @__PURE__ */ io(mM, [["__scopeId", "data-v-12c56821"]]), yM = { class: "report-container dottet" }, hM = { class: "add_widget-button ice p-2.5 z-mx" }, bM = { class: "pages_board ice p-2.5 z-mx" }, _M = /* @__PURE__ */ oe({
  __name: "EditReport",
  setup(e) {
    const o = N(""), a = Os().params.pageid ?? "", { widgets: l } = Gr(a || ""), s = N([]), i = ut("endpointfinder", null), c = () => {
      i();
    }, p = f(() => !!i), v = N(!1), m = N(void 0), g = (b) => {
      o.value = b, v.value = !1;
    }, y = f(() => {
      console.log(l);
      const b = l?.find((C) => C.uid === o.value);
      return b || s.value.find((C) => C.uid === o.value);
    });
    return (b, C) => {
      const _ = ze("VaButton");
      return w(), L("div", yM, [
        G(Xy, {
          pageId: d(a),
          onOpenWidgetSettings: g
        }, null, 8, ["pageId"]),
        E("div", hM, [
          G(_, {
            icon: v.value ? "close" : "add",
            onClick: C[0] || (C[0] = (S) => v.value = !v.value),
            round: "",
            size: "large"
          }, null, 8, ["icon"]),
          p.value ? (w(), te(_, {
            key: 0,
            icon: "travel_explore",
            onClick: C[1] || (C[1] = (S) => c()),
            round: "",
            size: "large"
          })) : Y("", !0)
        ]),
        E("div", bM, [
          G(nM, {
            onPageSettings: C[2] || (C[2] = (S) => m.value = S)
          })
        ]),
        G(ta, { duration: 150 }, {
          default: U(() => [
            v.value ? (w(), te(zD, { key: 0 })) : Y("", !0)
          ]),
          _: 1
        }),
        G(ta, { duration: 150 }, {
          default: U(() => [
            o.value ? (w(), te(jD, {
              key: 0,
              onClose: C[3] || (C[3] = (S) => o.value = ""),
              modelValue: y.value,
              "onUpdate:modelValue": C[4] || (C[4] = (S) => y.value = S)
            }, null, 8, ["modelValue"])) : Y("", !0)
          ]),
          _: 1
        }),
        G(ta, { duration: 150 }, {
          default: U(() => [
            m.value ? (w(), te(gM, {
              key: 0,
              modelValue: m.value,
              "onUpdate:modelValue": C[5] || (C[5] = (S) => m.value = S),
              onClose: C[6] || (C[6] = (S) => m.value = void 0)
            }, null, 8, ["modelValue"])) : Y("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}), im = /* @__PURE__ */ io(_M, [["__scopeId", "data-v-dd0f9e44"]]), Du = Ew({
  history: Rw("/"),
  routes: [
    // Static core routes (routes will be added dynamically via router.addRoute in main.ts)
    {
      path: "/",
      name: "home",
      component: lm
    },
    {
      path: "/edit",
      name: "edit",
      component: im
    },
    {
      path: "/:id/data",
      name: "data",
      component: RD
    },
    {
      path: "/page/:pageid/edit",
      name: "pageEdit",
      component: im
    },
    {
      path: "/page/:pageid",
      name: "page",
      component: lm
    }
  ]
});
let tc;
function CM(e) {
  tc = e;
}
function um() {
  if (!tc)
    throw new Error("variables store dependencies not provided - is app.pages active?");
  return tc;
}
const Zy = Aw("variables", () => {
  const e = N([]), o = um().repository;
  um().eventBus.on(Nw.VariableUpdated, () => {
    a();
  });
  const a = () => {
    const c = o.getAllVariables();
    e.value.splice(0, e.value.length);
    const p = c.map(([v, m]) => ({
      ...m,
      name: v,
      key: m.id || v
      // Use id as key if available, fallback to name
    }));
    e.value.push(...p);
  };
  return a(), {
    variables: e,
    createVariable: (c = "ConstantVariable", p = {
      value: "test"
    }) => {
      const m = "Variable " + Math.random().toString(36).substring(7);
      o.registerVariable(m, c, p), a();
    },
    removeVariable: (c) => {
      o.removeVariable(c), a();
    },
    updateVariable: (c) => {
      const p = c.id ? o.getVariableById(c.id) : o.getVariable(c.originalName);
      if (!p) {
        console.error("Variable not found:", c.id || c.originalName);
        return;
      }
      if (p.type === c.type) {
        if (p.update(c.config), c.name && p.name !== c.name) {
          const v = p.scope || "global", m = p.pageId && v === "page" ? `page-${p.pageId}` : v, g = o;
          if (g.availableVariablesByScope) {
            const y = g.availableVariablesByScope.get(m);
            y && y.has(p.name) && (y.set(c.name, p), y.delete(p.name));
          }
          p.rename(c.name);
        }
      } else
        o.removeVariable(p.id), o.registerVariable(c.name, c.type, c.config);
      a();
    },
    updateVariables: a
  };
}), SM = { class: "configuration w-full h-full flex flex-col p-6 pl-18" }, wM = { class: "flex gap-6 flex-grow" }, $M = { class: "w-1/2 flex flex-col" }, kM = { class: "flex justify-between items-center mb-4" }, VM = { class: "bg-white border border-gray-200 rounded-lg overflow-hidden flex-grow" }, xM = { class: "divide-y divide-gray-200" }, AM = {
  key: 0,
  class: "variable-table-row"
}, IM = { class: "var-col-name truncate" }, TM = { class: "var-col-type truncate" }, BM = { class: "var-col-value truncate" }, PM = { class: "var-col-actions" }, LM = { class: "w-1/2 flex flex-col" }, OM = { class: "flex justify-between items-center mb-4" }, EM = { class: "mb-4" }, RM = { class: "bg-white border border-gray-200 rounded-lg overflow-hidden flex-grow" }, DM = {
  key: 0,
  class: "divide-y divide-gray-200"
}, MM = { class: "var-col-name truncate" }, FM = { class: "var-col-type truncate" }, NM = { class: "var-col-value truncate" }, zM = { class: "var-col-actions" }, HM = {
  key: 1,
  class: "p-8 text-center text-gray-500"
}, WM = {
  key: 2,
  class: "p-8 text-center text-gray-500"
}, UM = { class: "flex flex-col gap-4" }, GM = { style: { "text-align": "center", padding: "1rem" } }, KM = { style: { display: "flex", "justify-content": "flex-end", gap: "0.5rem" } }, qM = /* @__PURE__ */ oe({
  __name: "Configuration",
  setup(e) {
    const o = Zy(), t = N([]), a = N(""), l = N(!1), s = N(null), i = (D) => {
      s.value = D, l.value = !0;
    }, c = () => {
      s.value && o.removeVariable(s.value), l.value = !1, s.value = null;
    }, p = N(!1), v = N(null), m = N(null), g = N(null), y = N([]), b = N(null);
    at(() => {
      const D = ut(ir), V = ut(ll), P = D.getRegisteredVariableTypes();
      y.value = P, t.value = V.getAllPageIds().map((R) => V.getPage(R));
    });
    const C = () => {
      const D = {};
      Object.keys(b.value).forEach((R) => {
        R !== "name" && (D[R] = b.value[R]);
      });
      const P = ut(ir).getVariableById(v.value);
      P && Object.keys(b.value).forEach((R) => {
        R !== "name" && R !== "id" && P.hasOwnProperty(R) && (P[R] = b.value[R]);
      }), o.updateVariable({
        id: v.value,
        name: b.value.name,
        originalName: P?.name,
        type: g.value,
        config: D
      }), b.value = null, v.value = null, m.value = null, p.value = !1;
    }, _ = (D) => {
      v.value = D;
      const P = ut(ir).getVariableById(D);
      P && (g.value = P.type, m.value = P), b.value = {
        id: P?.id,
        name: P?.name,
        value: P?.value,
        expression: P?.expression,
        scope: P?.scope || "global",
        accessMode: P?.accessMode || "external-writable",
        pageId: P?.pageId,
        ...P?.serialize?.()
        // Include any additional serialized properties
      }, p.value = !0;
    }, S = f(() => {
      const D = ut(ir), V = g.value;
      return V ? D.getVariableIdentifiers(V)?.Settings : null;
    }), $ = (D) => {
      const P = ut(ir).getVariableById(D);
      return P ? P.value : null;
    }, A = f(() => a.value ? !o.variables || !Array.isArray(o.variables) ? [] : o.variables.filter((D) => D.pageId === a.value) : []), x = (D) => {
      switch (D) {
        case us.ReadOnly:
          return "Read Only";
        case us.PageOnly:
          return "Page Only";
        case us.ExternalWritable:
          return "External";
        default:
          return D;
      }
    }, T = () => {
      o.createVariable(zw, {
        value: "test",
        pageId: a.value,
        accessMode: us.ExternalWritable,
        scope: _v.Page
      });
    }, O = (D) => {
    };
    return (D, V) => {
      const P = ze("VaButton"), R = ze("VaSelect"), J = ze("VaModal"), de = ze("VaIcon");
      return w(), L("div", SM, [
        V[22] || (V[22] = E("h1", { class: "text-2xl font-bold mb-6" }, "Variables Configuration", -1)),
        E("div", wM, [
          E("div", $M, [
            E("div", kM, [
              V[11] || (V[11] = E("h2", { class: "text-lg font-semibold" }, "Global Variables", -1)),
              G(P, {
                icon: "add",
                onClick: V[0] || (V[0] = (ne) => d(o).createVariable())
              }, {
                default: U(() => [...V[10] || (V[10] = [
                  xe(" Add Global Variable ", -1)
                ])]),
                _: 1
              })
            ]),
            E("div", VM, [
              V[12] || (V[12] = yv('<div class="variable-table-header" data-v-2a21924d><div class="var-col-name" data-v-2a21924d>Name</div><div class="var-col-type" data-v-2a21924d>Type</div><div class="var-col-value" data-v-2a21924d>Value</div><div class="var-col-actions" data-v-2a21924d>Actions</div></div>', 1)),
              E("div", xM, [
                (w(!0), L(Le, null, je(d(o).variables, (ne) => (w(), L(Le, {
                  key: ne.id
                }, [
                  ne.scope == d(_v).Global ? (w(), L("div", AM, [
                    E("div", IM, ke(ne.name), 1),
                    E("div", TM, ke(ne.type), 1),
                    E("div", BM, ke($(ne.id)), 1),
                    E("div", PM, [
                      G(P, {
                        icon: "edit",
                        size: "small",
                        preset: "secondary",
                        onClick: (M) => _(ne.id)
                      }, null, 8, ["onClick"]),
                      G(P, {
                        icon: "delete",
                        size: "small",
                        color: "danger",
                        onClick: (M) => i(ne.id)
                      }, null, 8, ["onClick"])
                    ])
                  ])) : Y("", !0)
                ], 64))), 128))
              ])
            ])
          ]),
          E("div", LM, [
            E("div", OM, [
              V[14] || (V[14] = E("h2", { class: "text-lg font-semibold" }, "Page Variables", -1)),
              G(P, {
                icon: "add",
                onClick: T,
                disabled: !a.value
              }, {
                default: U(() => [...V[13] || (V[13] = [
                  xe(" Add Page Variable ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ]),
            E("div", EM, [
              G(R, {
                modelValue: a.value,
                "onUpdate:modelValue": [
                  V[1] || (V[1] = (ne) => a.value = ne),
                  O
                ],
                label: "Select Page",
                options: t.value,
                "value-by": "id",
                "text-by": "name",
                placeholder: "Choose a page to view variables"
              }, null, 8, ["modelValue", "options"])
            ]),
            E("div", RM, [
              V[17] || (V[17] = yv('<div class="variable-table-header" data-v-2a21924d><div class="var-col-name" data-v-2a21924d>Name</div><div class="var-col-type" data-v-2a21924d>Access Mode</div><div class="var-col-value" data-v-2a21924d>Value</div><div class="var-col-actions" data-v-2a21924d>Actions</div></div>', 1)),
              a.value && A.value ? (w(), L("div", DM, [
                (w(!0), L(Le, null, je(A.value, (ne) => (w(), L("div", {
                  class: "variable-table-row",
                  key: ne.id
                }, [
                  E("div", MM, ke(ne.name), 1),
                  E("div", FM, ke(x(ne.accessMode)), 1),
                  E("div", NM, ke(ne.value), 1),
                  E("div", zM, [
                    G(P, {
                      icon: "edit",
                      size: "small",
                      preset: "secondary",
                      onClick: (M) => _(ne.id)
                    }, null, 8, ["onClick"]),
                    G(P, {
                      icon: "delete",
                      size: "small",
                      color: "danger",
                      onClick: (M) => i(ne.id)
                    }, null, 8, ["onClick"])
                  ])
                ]))), 128))
              ])) : a.value ? (w(), L("div", HM, [...V[15] || (V[15] = [
                E("div", { class: "text-2xl mb-2" }, "📋", -1),
                E("p", null, "No page variables found for this page", -1)
              ])])) : (w(), L("div", WM, [...V[16] || (V[16] = [
                E("div", { class: "text-2xl mb-2" }, "📄", -1),
                E("p", null, "Select a page to view its variables", -1)
              ])]))
            ])
          ])
        ]),
        G(J, {
          modelValue: p.value,
          "onUpdate:modelValue": V[5] || (V[5] = (ne) => p.value = ne),
          title: "Edit Variable",
          "ok-text": "Save",
          "cancel-text": "Cancel",
          onOk: C,
          onCancel: V[6] || (V[6] = (ne) => p.value = !1)
        }, {
          default: U(() => [
            E("div", UM, [
              G(R, {
                options: y.value,
                modelValue: g.value,
                "onUpdate:modelValue": V[2] || (V[2] = (ne) => g.value = ne),
                label: "Type"
              }, null, 8, ["options", "modelValue"]),
              (w(), te(zt(S.value), {
                modelValue: b.value,
                "onUpdate:modelValue": V[3] || (V[3] = (ne) => b.value = ne),
                variable: v.value
              }, null, 8, ["modelValue", "variable"])),
              G(R, {
                modelValue: b.value.accessMode,
                "onUpdate:modelValue": V[4] || (V[4] = (ne) => b.value.accessMode = ne),
                label: "Access Mode",
                options: [
                  { value: "readonly", text: "Read Only" },
                  { value: "page-only", text: "Page Only" },
                  { value: "external-writable", text: "External Writable" }
                ],
                "value-by": "value",
                "text-by": "text",
                placeholder: "Select access mode"
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        G(J, {
          modelValue: l.value,
          "onUpdate:modelValue": V[9] || (V[9] = (ne) => l.value = ne),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: U(() => [
            E("div", KM, [
              G(P, {
                preset: "secondary",
                onClick: V[7] || (V[7] = (ne) => {
                  l.value = !1, s.value = null;
                })
              }, {
                default: U(() => [...V[20] || (V[20] = [
                  xe(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              G(P, {
                color: "danger",
                icon: "delete",
                onClick: V[8] || (V[8] = (ne) => c())
              }, {
                default: U(() => [...V[21] || (V[21] = [
                  xe(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: U(() => [
            E("div", GM, [
              G(de, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              V[18] || (V[18] = E("h5", { style: { margin: "0.5rem 0" } }, "Variable löschen", -1)),
              V[19] || (V[19] = E("p", null, "Möchtest du diese Variable wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), jM = /* @__PURE__ */ io(qM, [["__scopeId", "data-v-2a21924d"]]);
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const YM = () => {
};
function XM(e, o, t) {
  var a;
  let l;
  yn(t) ? l = { evaluating: t } : l = t || {};
  const { lazy: s = !1, flush: i = "sync", evaluating: c = void 0, shallow: p = !0, onError: v = (a = globalThis.reportError) !== null && a !== void 0 ? a : YM } = l, m = He(!s), g = p ? He(o) : N(o);
  let y = 0;
  return Vn(async (b) => {
    if (!m.value) return;
    y++;
    const C = y;
    let _ = !1;
    c && Promise.resolve().then(() => {
      c.value = !0;
    });
    try {
      const S = await e(($) => {
        b(() => {
          c && (c.value = !1), _ || $();
        });
      });
      C === y && (g.value = S);
    } catch (S) {
      v(S);
    } finally {
      c && C === y && (c.value = !1), _ = !0;
    }
  }, { flush: i }), s ? f(() => (m.value = !0, g.value)) : g;
}
const ZM = /* @__PURE__ */ oe({
  __name: "SaveInput",
  props: {
    repo: {}
  },
  emits: ["save", "override"],
  setup(e, { expose: o, emit: t }) {
    const a = t, l = e, s = N("newFile"), i = f(() => s.value == "");
    at(async () => {
      c.value = await l.repo.findAll();
    });
    const c = N(), p = f(() => c.value == null ? !1 : c.value.find((y) => y.name == s.value) != null), v = () => {
      const y = new URL(l.repo.uri);
      y.pathname = s.value + ".json", a("save", {
        name: s.value,
        uri: y
      });
    }, m = () => {
      const y = c.value.find((b) => b.name == s.value);
      a("override", y);
    };
    return o({ setNameSuggestion: (y) => {
      s.value = y;
    } }), (y, b) => {
      const C = ze("VaInput"), _ = ze("VaButton");
      return w(), te(na, {
        defer: "",
        to: "#loadSaveModalFooter"
      }, [
        E("div", null, [
          b[1] || (b[1] = E("span", { class: "va-title" }, "Name: ", -1)),
          G(C, {
            modelValue: s.value,
            "onUpdate:modelValue": b[0] || (b[0] = (S) => s.value = S),
            placeholder: "Name"
          }, null, 8, ["modelValue"])
        ]),
        p.value ? (w(), te(_, {
          key: 0,
          color: "danger",
          icon: "save",
          onClick: m,
          "border-color": "primary",
          preset: "secondary",
          disabled: i.value
        }, {
          default: U(() => [...b[2] || (b[2] = [
            xe(" override ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : (w(), te(_, {
          key: 1,
          onClick: v,
          disabled: i.value,
          "border-color": "primary",
          preset: "secondary",
          icon: "save"
        }, {
          default: U(() => [...b[3] || (b[3] = [
            xe(" save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]))
      ]);
    };
  }
}), JM = /* @__PURE__ */ oe({
  __name: "Default",
  props: {
    repo: {},
    context: {}
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const { notify: t } = Yy(), a = e, l = o, s = N(""), i = N(!1), c = N([]), p = N(), v = N(void 0), m = N(!1);
    N(!1);
    const g = N(null), y = N([
      { key: "icon", label: "icon" },
      { key: "name", label: "file" },
      { key: "date", label: "date" },
      { key: "size", label: "size" },
      { key: "options", label: "options", width: s.value ? "130px" : "90px" }
    ]);
    window && window.__env && window.__env.settings && window.__env.settings.releaseEndPointUrl && (s.value = window.__env.settings.releaseEndPointUrl), Se(() => a.repo, async (V) => {
      if (V != null)
        try {
          i.value = !0, c.value = await a.repo.findAll();
        } catch {
          c.value = [];
        } finally {
          i.value = !1;
        }
      else c.value = [];
    }, { immediate: !0 });
    const b = async (V) => {
      const P = (await a.repo.getEntityByUri(V.uri))?.data;
      let R = new Blob([JSON.stringify(P)], { type: "application/json" });
      const J = window.URL.createObjectURL(R), de = document.createElement("a");
      de.style.display = "none", de.href = J;
      let ne = V.uri.pathname;
      ne.startsWith("/") && (ne = ne.slice(1)), de.download = ne.replaceAll("/", "_"), document.body.appendChild(de), de.click(), window.URL.revokeObjectURL(J);
    }, C = (V) => {
      v.value = V, m.value = !0;
    }, _ = async (V) => {
      if (!a.context?.state)
        return console.log("no context"), !1;
      V.data = a.context.state;
      try {
        await a.repo.create(V), t({ message: "File saved", color: "#dee5f2", position: "bottom-right", duration: 2e3 }), await D();
      } catch (P) {
        t({
          title: "Error on saving File",
          message: P,
          color: "#d23a1f",
          position: "bottom-right",
          duration: 2e3
        }), console.log(V);
      } finally {
      }
    }, S = async (V) => {
      if (!a.context?.state)
        return console.log("no context"), !1;
      V.data = a.context.state;
      try {
        await a.repo.update(V), t({ message: "File saved", color: "#dee5f2", position: "bottom-right", duration: 2e3 });
      } catch (P) {
        console.log(V), t({
          title: "Error on saving File",
          message: P,
          color: "#d23a1f",
          position: "bottom-right",
          duration: 2e3
        });
      } finally {
        l("close");
      }
    }, $ = async () => {
      const V = g.value;
      try {
        let P = await a.repo.getEntityByUri(V.item.uri);
        P && P.data && l("close", P?.data), t({ message: "File loaded", color: "#dee5f2", position: "bottom-right", duration: 2e3 });
      } catch (P) {
        console.log(P);
      }
    }, A = async (V) => {
      g.value = V, p && p.value.setNameSuggestion(V.item.name);
    }, x = () => {
      v.value = void 0;
    }, T = async () => {
      v.value && await a.repo.delete(v.value), x(), await D();
    }, O = (V) => g.value && V.name === g.value.item.name ? { class: ["selected bg-gray-200"] } : "", D = async () => {
      try {
        i.value = !0, c.value = await a.repo.findAll();
      } catch {
        c.value = [];
      } finally {
        i.value = !1;
      }
    };
    return (V, P) => {
      const R = ze("VaButton"), J = ze("VaIcon"), de = ze("VaDataTable"), ne = ze("VaModal");
      return w(), L(Le, null, [
        G(ZM, {
          repo: e.repo,
          ref_key: "saveInputComponent",
          ref: p,
          onSave: _,
          onOverride: S
        }, null, 8, ["repo"]),
        (w(), te(na, {
          defer: "",
          to: "#loadSaveModalFooter"
        }, [
          G(R, {
            onClick: $,
            disabled: !g.value,
            icon: "task",
            "border-color": "primary",
            preset: "secondary"
          }, {
            default: U(() => [...P[3] || (P[3] = [
              xe(" load ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])),
        G(de, {
          class: "table",
          "virtual-scroller": "",
          items: c.value,
          columns: y.value,
          hoverable: "",
          loading: i.value,
          striped: "",
          "onRow:click": A,
          "row-bind": O
        }, {
          "cell(options)": U(({ rowIndex: M, row: j }) => [
            G(R, {
              preset: "plain",
              icon: "download",
              class: "ml-3",
              onClick: (W) => {
                W.stopImmediatePropagation(), b(j.rowData);
              }
            }, null, 8, ["onClick"]),
            G(R, {
              preset: "plain",
              icon: "delete",
              class: "ml-3",
              onClick: (W) => {
                W.stopImmediatePropagation(), C(j.rowData);
              }
            }, null, 8, ["onClick"])
          ]),
          "cell(icon)": U(({ rowIndex: M, row: j }) => [
            G(J, { name: "newspaper" })
          ]),
          _: 1
        }, 8, ["items", "columns", "loading"]),
        G(ne, {
          size: "auto",
          "hide-default-actions": "",
          modelValue: m.value,
          "onUpdate:modelValue": P[2] || (P[2] = (M) => m.value = M)
        }, {
          footer: U(() => [
            G(R, {
              preset: "secondary",
              onClick: P[0] || (P[0] = () => {
                x(), m.value = !1;
              })
            }, {
              default: U(() => [...P[4] || (P[4] = [
                xe(" cancel ", -1)
              ])]),
              _: 1
            }),
            G(R, {
              color: "danger",
              onClick: P[1] || (P[1] = () => {
                T(), m.value = !1;
              })
            }, {
              default: U(() => [...P[5] || (P[5] = [
                xe(" Delete", -1)
              ])]),
              _: 1
            })
          ]),
          default: U(() => [
            P[6] || (P[6] = E("div", { class: "deleteDailog" }, [
              E("h5", { class: "va-h5" }, " Delete Item ? ")
            ], -1))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), QM = /* @__PURE__ */ io(JM, [["__scopeId", "data-v-23de4711"]]), { parse: eF, stringify: tF } = JSON, { keys: nF } = Object, al = String, Jy = "string", cm = {}, zc = "object", Qy = (e, o) => o, oF = (e) => e instanceof al ? al(e) : e, aF = (e, o) => typeof o === Jy ? new al(o) : o, rF = (e, o, t, a) => (l) => {
  for (let s = nF(l), { length: i } = s, c = 0; c < i; c++) {
    const p = s[c], v = l[p];
    if (v instanceof al) {
      const m = e[+v];
      typeof m === zc && !t.has(m) ? (t.add(m), l[p] = cm, o.push({ o: l, k: p, r: m })) : l[p] = a.call(l, p, m);
    } else l[p] !== cm && (l[p] = a.call(l, p, v));
  }
  return l;
}, dm = (e, o, t) => {
  const a = al(o.push(t) - 1);
  return e.set(t, a), a;
}, fm = (e, o) => {
  const t = eF(e, aF).map(oF), a = Qy;
  let l = t[0];
  if (typeof l === zc && l) {
    const s = [], i = rF(t, s, /* @__PURE__ */ new Set(), a);
    l = i(l);
    let c = 0;
    for (; c < s.length; ) {
      const { o: p, k: v, r: m } = s[c++];
      p[v] = a.call(p, v, i(m));
    }
  }
  return a.call({ "": l }, "", l);
}, lF = (e, o, t) => {
  const a = Qy, l = /* @__PURE__ */ new Map(), s = [], i = [];
  let c = +dm(l, s, a.call({ "": e }, "", e)), p = !c;
  for (; c < s.length; )
    p = !0, i[c] = tF(s[c++], v, t);
  return "[" + i.join(",") + "]";
  function v(m, g) {
    if (p)
      return p = !p, g;
    const y = a.call(this, m, g);
    switch (typeof y) {
      case zc:
        if (y === null) return y;
      case Jy:
        return l.get(y) || dm(l, s, y);
    }
    return y;
  }
}, sF = { class: "saveload w-full h-full flex flex-col p-4 pl-18" }, iF = { class: "flex flex-shrink-0 h-full w-full gap-4" }, uF = { class: "repos h-full w-[300px]" }, cF = { class: "flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full h-full ice" }, dF = { class: "flex gap-4 w-full border-b border-gray-300 px-4 py-2 items-center" }, fF = { class: "keys w-full flex-1" }, vF = {
  id: "footer",
  class: "footer"
}, pF = {
  class: "flex gap-2.5",
  id: "loadSaveModalFooterRight"
}, mF = {
  key: 1,
  class: "full-height"
}, gF = /* @__PURE__ */ oe({
  __name: "SaveLoad",
  setup(e) {
    const { variables: o, createVariable: t, removeVariable: a, updateVariable: l, updateVariables: s } = Zy(), i = oc(), c = N("");
    window && window.__env && window.__env.settings && window.__env.settings.releaseEndPointUrl && (c.value = window.__env.settings.releaseEndPointUrl);
    const p = ut(Hw), v = ut(Vm), m = ut(xm), g = ut(ir), y = ut(gw), b = ut(ll), C = ut(rl), _ = ut(hw);
    p.addObserver({
      update: async (M, j) => {
        console.log("repos updated"), V.value = (await p?.getAvailableReposetories()).map((W) => ({
          id: W.uri.toString(),
          label: W.name,
          icon: "inventory"
        }));
      }
    }), Yy();
    const S = N({
      context: "SAVE",
      state: void 0
    });
    N(void 0), N(void 0), N(!1), N("https://"), N(!1), N(""), N(!1), N(/* @__PURE__ */ new Date());
    const $ = N(void 0), A = N(!1), x = N(""), T = N(void 0), O = N(void 0), D = N(!1), V = XM(async () => (await p?.getAvailableReposetories()).map((M) => ({
      id: M.uri.toString(),
      label: M.name,
      icon: "inventory"
    }))), P = async (M) => {
      O.value = await p.findRepositoryByUri(new URL(M.id));
    };
    Se($, (M) => {
      if (M) {
        let j = M[0].name, W = new FileReader();
        W.addEventListener("load", (q) => {
          x.value = j.split(".")[0], A.value = !0, T.value = q.target?.result ?? void 0;
        }), W.readAsText(M[0]);
      }
    }), at(async () => {
      S.value.state = R();
    });
    const R = () => {
      const M = cs(), j = dr(), W = Jr(), q = Gr(), Z = [];
      for (const Re of g.getAllVariables()) {
        const Ve = Re[1].serialize();
        Ve.name = Re[0], Z.push(Ve);
      }
      const z = b?.getAllPageIds(), pe = {};
      for (const Re of z ?? []) {
        const Ve = b?.getPage(Re), ee = Gr(Re), be = cs(Re);
        pe[Re] = {
          info: Ve,
          widgets: ee.widgets,
          layout: be.layout
        };
      }
      const le = _?.getAllMappings() || [], _e = {
        layout: M.layout,
        datasources: j.dataSources,
        conections: W.connections,
        widgets: q.widgets,
        variables: Z,
        pages: pe,
        eventMappings: le
      };
      return lF(_e);
    }, J = (M) => {
      if (M) {
        let j;
        typeof M == "string" ? (j = JSON.parse(M), Array.isArray(j) && (j = fm(M))) : (j = M, Array.isArray(j) && (j = fm(JSON.stringify(M))));
        const W = cs(), q = dr(), Z = Jr(), z = Gr();
        if (j.variables) {
          for (const le of j.variables)
            g && (console.log(le.name), g.registerVariable(le.name, le.type, le));
          s();
        }
        j.conections && (Z.connections = j.conections);
        for (const le of j.conections)
          v && v.registerConnection(le.uid, le.type, le.config);
        for (const le of j.datasources)
          m && !["chart", "datatable"].includes(le.type) && m.registerDatasource(le.uid, le.type, le.config);
        for (const le of j.datasources)
          m && ["chart", "datatable"].includes(le.type) && m.registerDatasource(le.uid, le.type, le.config);
        if (y?.initilazeVariableWrappers(j.widgets), console.log(j.widgets), j.datasources && (q.dataSources = j.datasources), j.layout && (W.layout = j.layout), j.widgets && (z.widgets = j.widgets), j.pages)
          for (const [le, _e] of Object.entries(j.pages)) {
            const Re = cs(le), Ve = Gr(le);
            Re.layout = _e.layout, Ve.widgets = _e.widgets;
            const ee = _e.info;
            if (!ee.layout && C) {
              const be = C.getLayout("org.eclipse.daanse.board.app.ui.vue.layouts.base");
              be && (ee.layout = be);
            }
            b?.registerPage(ee), y?.initilazeVariableWrappers(_e.widgets);
          }
        j.eventMappings && _ && (_.setAllMappings(j.eventMappings), console.log(`💾 Loaded ${j.eventMappings.length} event mappings from board`));
        const pe = b?.getAllPageIds();
        pe && pe.length > 0 ? i.push(`/page/${pe[0]}`) : i.push("/page/abc");
      }
    }, de = f(() => {
      if (!O.value) return "";
      const M = Object.getPrototypeOf(O.value);
      return !M?.constructor || !("type" in M.constructor) ? "" : M.constructor.type;
    }), ne = f(() => {
      const M = de.value;
      if (!M || !p.isViewForRepoType(M)) return null;
      const j = p.getViewForRepoType(M);
      return j || null;
    });
    return (M, j) => {
      const W = ze("va-divider");
      return w(), L("div", sF, [
        E("div", null, [
          j[6] || (j[6] = E("h6", { class: "va-h6" }, "Files", -1)),
          G(W),
          E("div", iF, [
            E("div", uF, [
              j[3] || (j[3] = E("div", { class: "menu" }, null, -1)),
              E("div", cF, [
                E("div", dF, [
                  j[2] || (j[2] = E("h4", { class: "flex-grow text-sm font-semibold" }, "Repositories", -1)),
                  S.value ? (w(), te(d(lt), {
                    key: 0,
                    preset: "secondary",
                    onClick: j[0] || (j[0] = (q) => D.value = !0),
                    icon: "travel_explore"
                  })) : Y("", !0)
                ]),
                G(d(Mc), {
                  class: "w-full h-full overflow-auto flex flex-col",
                  "minimized-width": "64px",
                  width: "300px"
                }, {
                  default: U(() => [
                    (w(!0), L(Le, null, je(d(V), (q) => (w(), te(d(yl), {
                      key: q.label,
                      class: Be(["text-sm border-b border-gray-300 border-dashed last:border-none px-4 py-2 cursor-pointer", { "bg-gray-200": q.id == (O.value ? O.value.uri.toString() : "") }]),
                      onClick: (Z) => P(q)
                    }, {
                      default: U(() => [
                        G(d(Oa), null, {
                          default: U(() => [
                            G(d(Vy), null, {
                              default: U(() => [
                                G(d(ot), {
                                  name: q.icon
                                }, null, 8, ["name"]),
                                xe(" " + ke(q.label), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"]))), 128))
                  ]),
                  _: 1
                })
              ])
            ]),
            E("div", fF, [
              E("div", vF, [
                j[4] || (j[4] = E("div", {
                  class: "flex gap-2.5",
                  id: "loadSaveModalFooter"
                }, null, -1)),
                E("div", pF, [
                  S.value && O.value ? (w(), te(d(Ly), {
                    key: 0,
                    modelValue: $.value,
                    "onUpdate:modelValue": j[1] || (j[1] = (q) => $.value = q),
                    icon: "upload",
                    class: "marginr"
                  }, null, 8, ["modelValue"])) : Y("", !0)
                ])
              ]),
              O.value ? (w(), L(Le, { key: 0 }, [
                ne.value ? (w(), te(zt(ne.value), {
                  repo: O.value,
                  onClose: J,
                  context: S.value,
                  key: `custom-${de.value}`
                }, null, 40, ["repo", "context"])) : (w(), te(QM, {
                  repo: O.value,
                  onClose: J,
                  context: S.value,
                  key: "default"
                }, null, 8, ["repo", "context"]))
              ], 64)) : (w(), L("div", mF, [...j[5] || (j[5] = [
                E("div", { class: "full-height flexit" }, [
                  E("div", { class: "norepo" }, " </>"),
                  E("div", null, " Please select a Repo")
                ], -1)
              ])]))
            ])
          ])
        ])
      ]);
    };
  }
}), yF = /* @__PURE__ */ io(gF, [["__scopeId", "data-v-e9903dd5"]]), $a = Im.createLogger("daanse:system:actions");
class hF {
  constructor(o, t) {
    this.router = o, this.eventBus = t;
  }
  eventBus;
  async changePage(o) {
    if (!o) {
      $a("⚠️ changePage called without pageId");
      return;
    }
    $a("📄 Changing page to: %s", o);
    const t = new Promise((a) => {
      const l = (s) => {
        s.pageId === o && ($a("📄 Received pageLoaded event for page: %s", o), this.eventBus.off("system:pageLoaded", l), a());
      };
      this.eventBus.on("system:pageLoaded", l), setTimeout(() => {
        this.eventBus.off("system:pageLoaded", l), $a("⚠️ pageLoaded timeout for page: %s, continuing anyway", o), a();
      }, 5e3);
    });
    await this.router.push(`/page/${o}`), await t, $a("📄 Page change complete, widgets should be registered");
  }
  async setGlobalVariable(o, t) {
    $a("⚠️ setGlobalVariable should be handled by VariableRepository");
  }
}
async function bF(e, o, t) {
  await o.registerActionsFromEcoreString(
    "SystemActions",
    Ww,
    "system",
    "SystemActions.ecore"
  );
  const a = new hF(e, t);
  o.registerInstance("SystemActions", a, "SystemActions"), $a("✅ System actions registered");
}
var _F = Object.defineProperty, CF = Object.getOwnPropertyDescriptor, SF = (e, o, t, a) => {
  for (var l = CF(o, t), s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (l = i(o, t, l) || l);
  return l && _F(o, t, l), l;
};
const wF = Im.createLogger("daanse:system:actions");
class nc {
  testAction(...o) {
    console.log("TestActions", o);
  }
}
SF([
  Uw({ eventType: "test.console" })
], nc.prototype, "testAction");
async function $F(e) {
  e.registerWidgetType("test", nc, "system");
  const o = new nc();
  e.registerInstance("test", o, "system"), wF("✅ Test actions registered");
}
let no;
async function XF({ services: e, log: o }) {
  no = xw(ER), no.use(VR({
    config: {
      colors: {
        presets: {
          light: {
            primary: "#606060",
            lightPrim: "#cbcbcb",
            orange: "#c29803",
            active: "rgba(147,147,147,0.25)",
            textPrimary: "#3a3a3a"
          }
        }
      }
    }
  }));
  const t = Iw();
  Tw(t), no.use(t), no.use(Du), no.provide("codeEditorType", "monaco");
  const a = e, l = (y) => {
    const b = e.get(y);
    no?.provide(y, b), no?.provide(Symbol.for(y), b);
  };
  for (const y of e.getServiceIds()) l(y);
  a.addListener?.({ onServiceEvent: (y) => l(y.serviceId) }), e.register(mw, no), CM({
    repository: e.getRequired(bw),
    eventBus: e.getRequired(mv)
  }), e.getRequired(yw).registerWrapperType({
    type: Ow,
    create: (y) => new Lw(y)
  });
  const s = e.getRequired(km), i = new bv();
  i.path = "/configuration", i.name = "config", i.component = jM, s.registerRoute(i);
  const c = new bv();
  c.path = "/save", c.name = "save", c.component = yF, s.registerRoute(c);
  const p = e.getRequired($m), v = new hv();
  v.id = "config", v.label = "Environment variables", v.icon = "settings", v.route = "/configuration", v.routeName = "config", v.order = 10, v.visible = !0, p.registerNavigationItem(v);
  const m = new hv();
  m.id = "save", m.label = "Store and Restore", m.icon = "cloud_sync", m.route = "/save", m.routeName = "save", m.order = 20, m.visible = !0, p.registerNavigationItem(m);
  const g = s;
  for (const y of g.getAllRoutesArray?.() ?? [])
    Du.addRoute({
      path: y.path,
      name: y.name,
      component: y.component,
      ...y.meta ? { meta: y.meta } : {}
    });
  try {
    await bF(
      Du,
      e.getRequired(gv),
      e.getRequired(mv)
    ), o.info("system actions registered");
  } catch (y) {
    o.error("system actions failed", y);
  }
  try {
    await $F(e.getRequired(gv)), o.info("test actions registered");
  } catch (y) {
    o.error("test actions failed", y);
  }
  no.mount("#app"), o.info("shell mounted");
}
function ZF({ services: e }) {
  const o = e.getRequired(km);
  o.unregisterRoute("config"), o.unregisterRoute("save");
  const t = e.getRequired($m);
  t.unregisterNavigationItem("config"), t.unregisterNavigationItem("save"), no?.unmount(), no = void 0;
}
export {
  XF as activate,
  ZF as deactivate
};
