(function(){var i="ui.vue.plugins.endpointfinder",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=":root,:host{--va-icon-vertical-align: middle;--va-icon-user-select: none}.va-icon{vertical-align:var(--va-icon-vertical-align);-webkit-user-select:var(--va-icon-user-select);-moz-user-select:var(--va-icon-user-select);user-select:var(--va-icon-user-select)}.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]){cursor:pointer}.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]):focus-visible{outline:2px solid var(--va-focus)!important;border-radius:2px}.va-icon.va-icon{font-style:normal}.va-icon--spin{animation:va-icon--spin-animation 1.5s linear infinite}.va-icon--spin-reverse{animation:va-icon--spin-animation 1.5s linear infinite;animation-direction:reverse}@keyframes va-icon--spin-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.va-icon svg{fill:currentColor;height:100%}:root,:host{--va-progress-circle-position: relative;--va-progress-circle-overflow: hidden;--va-progress-circle-width: 80%;--va-progress-circle-height: 80%;--va-progress-circle-overlay-transition: all ease 2s;--va-progress-circle-font-size: .75rem}.va-progress-circle{position:var(--va-progress-circle-position);overflow:var(--va-progress-circle-overflow);font-family:var(--va-font-family)}.va-progress-circle__wrapper{position:absolute;inset:0;margin:auto;transform:rotate(-90deg);width:var(--va-progress-circle-width);height:var(--va-progress-circle-height);display:flex;justify-content:center;align-items:center}.va-progress-circle--indeterminate .va-progress-circle__wrapper{animation:va-progress-circle__wrapper--indeterminate 2s linear infinite}.va-progress-circle__overlay{transition:var(--va-progress-circle-overlay-transition)}.va-progress-circle--indeterminate .va-progress-circle__overlay{animation:va-progress-circle__overlay--indeterminate 2s ease-in-out infinite}.va-progress-circle__info{font-size:var(--va-progress-circle-font-size);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}@keyframes va-progress-circle__wrapper--indeterminate{to{transform:rotate(270deg)}}@keyframes va-progress-circle__overlay--indeterminate{0%{stroke-dasharray:1,125;stroke-dashoffset:0}50%{stroke-dasharray:125,125;stroke-dashoffset:-65px}to{stroke-dasharray:125,125;stroke-dashoffset:-125px}}:root,:host{--va-button-display: inline-flex;--va-button-justify-content: center;--va-button-align-items: center;--va-button-background-image: none;--va-button-box-shadow: none;--va-button-border-width: 0;--va-button-border-color: unset;--va-button-border-style: none;--va-button-font-weight: 600;--va-button-transition: none;--va-button-padding: 0;--va-button-cursor: pointer;--va-button-sm-size: 1.5rem;--va-button-sm-content-py: .25rem;--va-button-sm-content-px: .375rem;--va-button-sm-only-icon-content-px: .25rem;--va-button-sm-font-size: .8125rem;--va-button-sm-letter-spacing: 0;--va-button-sm-line-height: 1rem;--va-button-sm-border-radius: .125rem;--va-button-sm-icon-side-padding: var(--va-button-sm-content-py);--va-button-sm-icons-spacing: .125rem;--va-button-size: 2.25rem;--va-button-content-py: .5rem;--va-button-content-px: .75rem;--va-button-only-icon-content-px: .5rem;--va-button-font-size: 1rem;--va-button-letter-spacing: 0;--va-button-line-height: 1.25rem;--va-button-border-radius: .25rem;--va-button-icon-side-padding: var(--va-button-content-py);--va-button-icons-spacing: .25rem;--va-button-lg-size: 3rem;--va-button-lg-content-py: .75rem;--va-button-lg-content-px: 1rem;--va-button-lg-only-icon-content-px: 1rem;--va-button-lg-font-size: 1.05rem;--va-button-lg-letter-spacing: 0;--va-button-lg-line-height: 1.5rem;--va-button-lg-border-radius: .5rem;--va-button-lg-icon-side-padding: var(--va-button-lg-content-py);--va-button-lg-icons-spacing: .25rem;--va-button-bordered-border: 1px;--va-button-bordered-style: solid}.va-button{position:relative;padding:var(--va-button-padding);display:var(--va-button-display);justify-content:var(--va-button-justify-content);align-items:var(--va-button-align-items);border-width:var(--va-button-border-width);border-color:var(--va-button-border-color);border-style:var(--va-button-border-style);background-image:var(--va-button-background-image);box-shadow:var(--va-button-box-shadow);font-family:var(--va-font-family);font-weight:var(--va-button-font-weight);text-decoration:none;text-transform:initial;transition:var(--va-button-transition);box-sizing:border-box;cursor:var(--va-button-cursor);z-index:0;vertical-align:top}.va-button:after,.va-button:before{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;left:0;top:0;z-index:-1}.va-button:before{background:var(--va-background-color);opacity:var(--va-background-color-opacity)}.va-button:after{background-color:var(--va-background-mask-color);opacity:var(--va-background-mask-opacity)}.va-button__content{height:100%;display:flex;align-items:center;z-index:1}.va-button__content--loading{opacity:0}.va-button--small{line-height:var(--va-button-sm-line-height);border-radius:var(--va-button-sm-border-radius);letter-spacing:var(--va-button-sm-letter-spacing);min-height:var(--va-button-sm-size);min-width:var(--va-button-sm-size)}.va-button--small .va-button__content{font-size:var(--va-button-sm-font-size);padding:var(--va-button-sm-content-py) var(--va-button-sm-content-px)}.va-button--small .va-button__left-icon{margin-right:var(--va-button-sm-icons-spacing)}.va-button--small .va-button__right-icon{margin-left:var(--va-button-sm-icons-spacing)}.va-button--small.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-sm-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-sm-content-py) - var(--va-button-bordered-border))}.va-button--small.va-button--left-icon .va-button__content{padding-left:var(--va-button-sm-icon-side-padding)}.va-button--small.va-button--right-icon .va-button__content{padding-right:var(--va-button-sm-icon-side-padding)}.va-button--normal{line-height:var(--va-button-line-height);border-radius:var(--va-button-border-radius);letter-spacing:var(--va-button-letter-spacing);min-height:var(--va-button-size);min-width:var(--va-button-size)}.va-button--normal .va-button__content{font-size:var(--va-button-font-size);padding:var(--va-button-content-py) var(--va-button-content-px);line-height:var(--va-button-line-height)}.va-button--normal .va-button__left-icon{margin-right:var(--va-gap-medium)}.va-button--normal .va-button__right-icon{margin-left:var(--va-gap-medium)}.va-button--normal.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-content-py) - var(--va-button-bordered-border))}.va-button--large{line-height:var(--va-button-lg-line-height);border-radius:var(--va-button-lg-border-radius);letter-spacing:var(--va-button-lg-letter-spacing);min-height:var(--va-button-lg-size);min-width:var(--va-button-lg-size)}.va-button--large .va-button__content{font-size:var(--va-button-lg-font-size);padding:var(--va-button-lg-content-py) var(--va-button-lg-content-px)}.va-button--large .va-button__left-icon{margin-right:var(--va-button-lg-icons-spacing)}.va-button--large .va-button__right-icon{margin-left:var(--va-button-lg-icons-spacing)}.va-button--large.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-lg-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-lg-content-py) - var(--va-button-bordered-border))}.va-button--large.va-button--left-icon .va-button__content{padding-left:var(--va-button-lg-icon-side-padding)}.va-button--large.va-button--right-icon .va-button__content{padding-right:var(--va-button-lg-icon-side-padding)}.va-button--small.va-button--icon-only .va-button__content,.va-button--normal.va-button--icon-only .va-button__content,.va-button--large.va-button--icon-only .va-button__content{padding-right:0;padding-left:0}.va-button--plain{min-width:auto;min-height:auto}.va-button--plain .va-button__content{padding:0;z-index:unset}.va-button--round{border-radius:999px}.va-button--bordered{border-width:var(--va-button-bordered-border);border-style:var(--va-button-bordered-style)}.va-button.va-button--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-button--icon-only .va-button__left-icon,.va-button--icon-only .va-button__right-icon{margin-left:0;margin-right:0}.va-button--icon-only .va-button__content{padding:0}.va-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\"}.va-button--loading{pointer-events:none}.va-button--block{display:flex;min-width:100%}.va-button__loader{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}:root,:host{--va-badge-py: 0;--va-badge-font-size: .563rem;--va-badge-border: .125rem;--va-badge-size: calc(var(--va-badge-font-size) * var(--va-badge-line-height) + var(--va-badge-border) * 2);--va-badge-line-height: 1.4;--va-badge-margin: 0;--va-badge-width: fit-content;--va-badge-dot-size: .5rem;--va-badge-text-wrapper-transition: .2s cubic-bezier(.4, 0, .6, 1);--va-badge-text-wrapper-display: inline-flex;--va-badge-text-wrapper-border: solid .125rem;--va-badge-text-wrapper-border-radius: .125rem;--va-badge-text-wrapper-font-weight: 700;--va-badge-text-wrapper-line-height: 1.4;--va-badge-text-wrapper-letter-spacing: .0375rem;--va-badge-text-wrapper-justify-content: center;--va-badge-text-wrapper-white-space: nowrap;--va-badge-text-wrapper-width: min-content;--va-badge-text-wrapper-height: auto;--va-badge-text-wrapper-min-width: initial;--va-badge-text-wrapper-min-height: initial;--va-badge-text-wrapper-margin: 0;--va-badge-text-transform: uppercase;--va-badge-text-py: 0;--va-badge-text-px: .25rem}.va-badge{display:inline-flex;position:relative;font-family:var(--va-font-family);width:var(--va-badge-width)}.va-badge__text-wrapper{transition:var(--va-badge-text-wrapper-transition, var(--va-transition));display:var(--va-badge-text-wrapper-display);border:var(--va-badge-text-wrapper-border, var(--va-control-border));border-radius:var(--va-badge-text-wrapper-border-radius);font-weight:var(--va-badge-text-wrapper-font-weight);line-height:var(--va-badge-text-wrapper-line-height);letter-spacing:var(--va-badge-text-wrapper-letter-spacing, var(--va-letter-spacing));justify-content:var(--va-badge-text-wrapper-justify-content);align-items:center;white-space:var(--va-badge-text-wrapper-white-space);width:var(--va-badge-text-wrapper-width);height:var(--va-badge-text-wrapper-height);min-width:var(--va-badge-text-wrapper-min-width);min-height:var(--va-badge-text-wrapper-min-height);margin:var(--va-badge-text-wrapper-margin)}.va-badge--visible-empty .va-badge__text-wrapper{min-width:var(--va-badge-size);min-height:var(--va-badge-size)}.va-badge--dot .va-badge__text-wrapper{min-width:var(--va-badge-dot-size);min-height:var(--va-badge-dot-size);border-width:0;border-radius:100%;padding:0}.va-badge--empty .va-badge__text-wrapper{width:0;height:0;min-width:0;min-height:0;border-width:0}.va-badge--multi-line .va-badge__text-wrapper{white-space:normal}.va-badge--floating .va-badge__text-wrapper{position:absolute;z-index:2}.va-badge__text{margin:var(--va-badge-margin);text-transform:var(--va-badge-text-transform);overflow:hidden;min-width:calc(var(--va-badge-font-size) * var(--va-badge-line-height));padding:var(--va-badge-text-py) var(--va-badge-text-px);text-align:center;display:inline-flex;justify-content:center;text-overflow:clip;white-space:nowrap;font-size:var(--va-badge-font-size)}.va-badge--multi-line .va-badge__text{overflow:auto;max-height:initial;text-align:initial;text-overflow:initial;white-space:normal}.va-badge--dot .va-badge__text{display:none}.va-badge--floating .va-badge__text{align-items:center;padding:var(--va-badge-py) .15rem}.va-stepper__default-controls{display:flex;gap:var(--va-stepper-controls-gap)}.va-stepper__step-button{position:relative;display:flex;flex-wrap:wrap;align-items:center;gap:var(--va-stepper-step-button-gap);flex-shrink:0;padding:var(--va-stepper-step-button-padding)}.va-stepper__step-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:var(--va-stepper-step-border-radius)}.va-stepper__step-button:after{content:\"\";position:absolute;cursor:pointer;top:0;left:0;width:100%;height:100%;background:var(--va-stepper-color);transition:opacity .3s;opacity:0;border-radius:var(--va-stepper-step-border-radius)}.va-stepper__step-button__icon{display:flex;justify-content:center;align-items:center;height:var(--va-stepper-step-button-icon-size);width:var(--va-stepper-step-button-icon-size);font-size:var(--va-stepper-step-button-number-size);color:#fff;background:var(--va-stepper-step-button-inactive-color);border-radius:var(--va-stepper-step-button-icon-border-radius)}.va-stepper__step-button--active{color:var(--va-stepper-color)}.va-stepper__step-button--active .va-stepper__step-button__icon{background:var(--va-stepper-color)}.va-stepper__step-button--disabled{opacity:var(--va-stepper-step-button-disabled-opacity);pointer-events:none}.va-stepper__step-button:hover:after{opacity:var(--va-stepper-step-button-hover-highlight-opacity)}.va-stepper__step-button--navigation-disabled:after{display:none}.va-stepper__step-button--error{color:var(--va-danger)}.va-stepper__step-button--error .va-stepper__step-button__icon{background:var(--va-danger)}:root{--va-stepper-step-button-inactive-color: var(--va-secondary);--va-stepper-step-button-hover-highlight-opacity: .1;--va-stepper-step-button-disabled-opacity: .5;--va-stepper-step-button-padding: 1rem;--va-stepper-step-button-number-size: 1.2rem;--va-stepper-step-button-icon-size: 2rem;--va-stepper-step-button-gap: .5rem;--va-stepper-step-button-icon-border-radius: 100%;--va-stepper-step-border-radius: var(--va-square-border-radius);--va-stepper-divider-color: var(--va-secondary);--va-stepper-divider-length: auto;--va-stepper-divider-min-length: 2rem;--va-stepper-divider-thickness: 1px;--va-stepper-divider-spacing: .5rem;--va-stepper-divider-vertical-margin-left: 2rem;--va-stepper-step-content-wrapper-padding: .5rem 1rem;--va-stepper-step-content-margin: .8rem 0 2rem;--va-stepper-controls-gap: 1rem}.va-stepper{display:flex;flex-direction:column}.va-stepper--vertical{flex-direction:row}.va-stepper__navigation{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.va-stepper__navigation--vertical{flex-direction:column;align-items:flex-start;flex-wrap:nowrap}.va-stepper__divider{flex-grow:1;height:var(--va-stepper-divider-thickness);width:var(--va-stepper-divider-length);min-width:var(--va-stepper-divider-min-length);margin:0 var(--va-stepper-divider-spacing);background:var(--va-stepper-divider-color)}.va-stepper__divider--vertical{min-height:var(--va-stepper-divider-min-length);height:var(--va-stepper-divider-length);width:var(--va-stepper-divider-thickness);min-width:var(--va-stepper-divider-thickness);margin:var(--va-stepper-divider-spacing) 0;margin-left:var(--va-stepper-divider-vertical-margin-left)}.va-stepper__step-content-wrapper{padding:var(--va-stepper-step-content-wrapper-padding)}.va-stepper__step-content{margin:var(--va-stepper-step-content-margin)}.va-stepper__controls{display:flex;gap:var(--va-stepper-controls-gap)}.aellipsis[data-v-69727056]{line-height:23px;max-height:var(--b40395ae);text-overflow:ellipsis;overflow:hidden;color:#777}.aellipsis.expanded[data-v-69727056]{max-height:100%}.pointer[data-v-a0a9daed]{cursor:pointer;align-self:start;margin-right:5px}.card[data-v-a0a9daed]{box-shadow:none;border-bottom:1px solid #e1e1e1;border-radius:0;cursor:pointer}.card[data-v-a0a9daed]:hover,.card.active[data-v-a0a9daed]{background:#f5f8ff!important}.card .va-card-title[data-v-a0a9daed]{font-size:1.25rem}.card .aflex[data-v-a0a9daed]{display:flex;margin-top:15px;flex-direction:row;justify-content:space-between;align-content:center;flex-wrap:nowrap}.card .light[data-v-a0a9daed]{color:#6c6a6add}.list_of_formats[data-v-d76f1184]{display:flex;flex-direction:row;gap:5px;justify-content:flex-start}.map[data-v-d76f1184]{width:100%;height:250px;position:relative}.content[data-v-d76f1184]{margin-top:25px;margin-bottom:35px;padding-left:10px}.line[data-v-d76f1184]{overflow:hidden;width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;align-content:center;justify-content:space-between;align-items:flex-end}.line div[data-v-d76f1184]{display:block;width:auto}.title[data-v-d76f1184]{font-size:24px;padding:23px 10px 0 15px}.pointer[data-v-d76f1184]{cursor:pointer}.filterbox .va-modal__header{background:#f1f1f1;padding-bottom:15px}.infobox .va-modal__dialog{max-width:80%!important}.infobox .footer,.infobox .va-modal__footer{background:#f7f7f7;padding:10px 16px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end}.infobox .va-stepper__navigation{padding:30px 30px 0 15px;background:#f7f7f7;margin-bottom:10px}.infobox .va-stepper__step-content-wrapper,.infobox .va-stepper__step-content{padding:0;margin:0}.infobox .va-modal__message{margin:0}.infobox .aflex{display:flex;flex-direction:row;align-items:flex-start;gap:9px}.infobox .store-item-header{display:none}.infobox .store-item-content{border:none;padding:0}.infobox .datasource-list .datasource-list-add-button{display:none}.widgets_grid[data-v-a5fa3dea]{display:grid;grid-template-columns:repeat(3,33%);gap:1rem}[data-v-a5fa3dea] .widgets_grid-item{height:50px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.flex[data-v-a5fa3dea]{width:100%}.flex[data-v-a5fa3dea]{display:flex;flex-direction:row;align-content:center;align-items:center}.buttonbar[data-v-a5fa3dea]{margin-top:15px}.padd[data-v-a5fa3dea]{max-height:75vh;padding:15px 25px}.padd15[data-v-a5fa3dea]{padding:10px 25px 30px;border-bottom:1px solid #e5e5e5}.no-padding[data-v-a5fa3dea]{padding:0}\n";})();
import { withCtx as B, h as we, Text as Po, createBlock as Y, isVNode as fn, getCurrentInstance as le, inject as R, computed as c, normalizeClass as Se, normalizeStyle as Lt, ref as b, shallowReadonly as Eo, isRef as mt, unref as C, reactive as xe, capitalize as $o, defineComponent as V, useAttrs as ko, openBlock as E, resolveDynamicComponent as Qe, mergeProps as ye, renderSlot as de, createElementBlock as U, createCommentVNode as ie, Fragment as pe, createTextVNode as te, toDisplayString as ue, watch as ae, customRef as Bo, onMounted as F, onUpdated as Vo, createElementVNode as _, onBeforeUnmount as Ve, shallowRef as ze, toRefs as Ao, normalizeProps as _e, guardReactiveProps as Fe, createVNode as k, useSlots as Ro, nextTick as G, withKeys as $e, renderList as et, useCssVars as To, resolveComponent as K, provide as ve, markRaw as J, onUnmounted as Pt, render as Ye, useModel as Io } from "vue";
import { identifier as qt, CONNECTION_REPOSITORY as jo } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as No } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { identifier as Wt } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { useBoard as Fo, useEList as Xt } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as Mo } from "org.eclipse.daanse.board.app.lib.api.widget";
import { useRoute as zo } from "vue-router";
class Do {
  dss = {};
  filters = [];
  limit = 10;
  setEndpoints(t) {
    return this.dss = t, this;
  }
  setFilter(t) {
    return this.filters = t, this;
  }
  setLimit(t) {
    return t < 1 ? this : t > 1e3 ? this : (this.limit = t, this);
  }
  async query(t) {
    const n = [], o = [], s = [];
    this.filters.forEach((l) => {
      if (l.mapSection) {
        const i = l;
        s.push("PREFIX spatial: <http://geovocab.org/spatial#>"), s.push("PREFIX geo: <http://www.opengis.net/ont/geosparql#>"), o.push("?dataService dct:spatial ?location ."), o.push("?location geo:lat ?lat ;geo:long ?long ."), n.push(`FILTER (?lat >= ${i.mapSection._northEast.lat} && ?lat <= ${i.mapSection._southWest.lat})`), n.push(`FILTER (?long >= ${i.mapSection._northEast.lng} && ?long <= ${i.mapSection._southWest.lng})`);
      }
      if (l.formats) {
        let u = "FILTER (" + l.formats.map((d) => "?format =" + d).join("||") + ")";
        n.push(u);
      }
    });
    const r = `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX dc: <http://purl.org/dc/elements/1.1/>
            PREFIX dcat: <http://www.w3.org/ns/dcat#>
            PREFIX odp:  <http://data.europa.eu/euodp/ontologies/ec-odp#>
            PREFIX dct: <http://purl.org/dc/terms/>
            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
            PREFIX foaf: <http://xmlns.com/foaf/0.1/>
            PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
            ${s.join(`
`)}

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
              ${o.join(`
`)}

            FILTER (CONTAINS(LCASE(?title), "${t.toLowerCase()}"))
            ${n.join(`
`)}
            }
            LIMIT ${this.limit}
        `;
    let a = {};
    for (const l of Object.entries(this.dss)) {
      let i = "query=" + encodeURIComponent(r);
      try {
        const u = await l[1].fetch({ url: "" }, {
          method: "POST",
          body: i,
          headers: {
            "User-Agent": "org.eclipse.daanse.datafinder.sparql/1.0",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
        a[l[0]] = await u.json();
      } catch (u) {
        console.log(u);
      }
    }
    return a;
  }
}
const Ne = {}, Pe = [];
function gt() {
  return {
    registerEndpoint: (a, l) => {
      Ne[l] = a;
    },
    getEndpointsByName: (a) => Ne[a],
    getActiveEndpoints: (a) => {
      if (Pe.includes(a))
        return Ne[a];
    },
    setActive: (a) => {
      Pe.includes(a) || Ne[a] && Pe.push(a);
    },
    setInActive: (a) => {
      const l = Pe.indexOf(a);
      l != -1 && Pe.splice(l);
    },
    getAllActiveEndpoints: () => Object.fromEntries(Object.entries(Ne).filter((a) => Pe.includes(a[0])))
  };
}
var N = /* @__PURE__ */ ((e) => (e.XMLA = "<http://publications.europa.eu/resource/authority/file-type/XMLA>", e.CSV = "<http://publications.europa.eu/resource/authority/file-type/CSV>", e.XML = "<http://publications.europa.eu/resource/authority/file-type/XML>", e.WMS = "<http://publications.europa.eu/resource/authority/file-type/WMS_SRVC>", e.WFS = "<http://publications.europa.eu/resource/authority/file-type/WFS_SRVC>", e.GEOJSON = "<http://publications.europa.eu/resource/authority/file-type/GEOJSON>", e.JSON = "<http://publications.europa.eu/resource/authority/file-type/JSON>", e.REST = "<http://publications.europa.eu/resource/authority/file-type/REST>", e.OGCSTA = "???", e))(N || {});
const Kt = {
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
}, Go = {
  xs: 0,
  sm: 640,
  md: 1024,
  lg: 1440,
  xl: 1920
}, Uo = () => ({
  enabled: !0,
  bodyClass: !0,
  thresholds: Go
}), yt = (e, t = null) => B(() => [e], t), Jt = (e) => typeof e == "string" ? we(Po, e) : fn(e) ? e : Y(e), Ho = (e, t = null) => Object.keys(e).reduce((n, o) => {
  const s = e[o];
  return n[o] = typeof s == "function" ? s : yt(s, t), n;
}, {}), qo = (e) => {
  const t = e.render || e.ssrRender;
  if (!t)
    return;
  const n = t.name === "_sfc_render" || t.name === "_sfc_ssrRender";
  return function(...o) {
    const s = o[0], r = s.$.slots, a = new Proxy(s, {
      get(i, u) {
        return u === "$slots" ? Ho(r) : i[u];
      }
    }), l = n ? void 0 : a;
    return t.call(l, a, ...o.slice(1));
  };
}, vn = (e, t) => Object.keys(e).filter((n) => !t.includes(n)).reduce((n, o) => (n[o] = e[o], n), {}), Wo = "$va:childComponents", Et = () => {
  var e;
  const t = (e = le()) == null ? void 0 : e.attrs["va-child"];
  if (!t)
    return null;
  const n = R(Wo);
  return n?.value ? c(() => n.value[t]) : null;
}, Xo = /([a-z0-9])([A-Z])/g, Ko = (e) => e.replace(Xo, "$1-$2").toLowerCase(), Jo = (e, t) => t in e ? e[t] : e[Ko(t)], Zo = (e, t) => {
  const n = e.props, o = Et();
  return new Proxy(n, {
    get: (s, r) => {
      var a, l;
      if (typeof r != "string")
        return s[r];
      const i = (a = o?.value) == null ? void 0 : a[r];
      if (i !== void 0)
        return i;
      const u = e.vnode.props || {}, d = s[r];
      if (Jo(u, r) !== void 0)
        return d;
      const h = (l = t.value) == null ? void 0 : l[r];
      return h !== void 0 ? h : d;
    }
  });
}, Yo = (e, t) => {
  const n = e.attrs;
  return new Proxy(n, {
    get: (o, s) => {
      var r;
      if (typeof s != "string")
        return o[s];
      if (s === "class")
        return Se([t.value.class, n.class]);
      if (s === "style")
        return Lt([t.value.style, n.style]);
      const a = (r = t.value) == null ? void 0 : r[s];
      return a !== void 0 ? a : o[s];
    },
    ownKeys(o) {
      return [.../* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(t.value)])];
    },
    getOwnPropertyDescriptor(o, s) {
      return Reflect.getOwnPropertyDescriptor(t.value, s) ?? Reflect.getOwnPropertyDescriptor(n, s);
    }
  });
}, dt = "slot:", Qo = (e, t) => {
  const n = e.slots, o = Et(), s = c(() => Object.keys(t.value).reduce((r, a) => (a.startsWith(dt) && (r[a.slice(dt.length)] = t.value[a]), r), {}));
  return new Proxy(n, {
    get: (r, a) => {
      var l, i;
      if (typeof a != "string")
        return r[a];
      const u = `${dt}${a}`, d = (l = o?.value) == null ? void 0 : l[u];
      if (d !== void 0)
        return yt(Jt(d));
      const f = r[a];
      if (f !== void 0)
        return f;
      const h = (i = s.value) == null ? void 0 : i[a];
      return h !== void 0 ? yt(Jt(h)) : f;
    },
    ownKeys(r) {
      return [.../* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(s.value)])];
    },
    getOwnPropertyDescriptor(r, a) {
      return Reflect.getOwnPropertyDescriptor(s.value, a) ?? Reflect.getOwnPropertyDescriptor(n, a);
    }
  });
}, er = "VaLocalConfig", tr = c(() => []);
function nr() {
  return R(er, tr);
}
const or = [null, void 0, ""], bt = (e) => or.includes(e), Zt = (e) => !bt(e), rr = typeof process < "u" ? process : {}, sr = rr.env || {}, ar = sr.NODE_ENV || "", $t = typeof __DEV__ < "u" ? __DEV__ : !["prod", "production"].includes(ar), ht = (...e) => ($t && console.warn(...e), !1), lr = (e) => {
  throw new Error(`[Vuestic] ${e}`);
};
let ir = null;
const mn = () => ir, gn = (e, t = void 0) => {
  var n;
  const o = (n = mn()) == null ? void 0 : n._context.provides[e];
  return le() ? R(e, t) : o ?? lr("You're using Vuestic composable outside Vue app. Since you registered Vuestic in multiple apps, composables can not be used outside setup function anymore.");
}, ur = (e) => e !== null && typeof e == "object", ke = (e) => e === null || typeof e != "object" ? e : Array.isArray(e) ? e.map(ke) : e instanceof Date ? new Date(e.getTime()) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Map ? new Map(Array.from(e.entries()).map(([t, n]) => [t, ke(n)])) : e instanceof Set ? new Set(Array.from(e.values()).map(ke)) : ur(e) ? Object.keys(e).reduce((t, n) => (t[n] = ke(e[n]), t), {}) : e, pt = (e) => e && typeof e == "object" && !Array.isArray(e), Me = (e, t) => (pt(e) || (e = {}), Object.keys(t).forEach((n) => {
  const o = e[n], s = t[n];
  s instanceof RegExp || s instanceof Date ? e[n] = s : pt(o) && pt(s) ? e[n] = Me(Object.create(
    Object.getPrototypeOf(o),
    Object.getOwnPropertyDescriptors(o)
  ), s) : e[n] = s;
}), e), cr = [
  {
    prefix: "bg",
    property: "background-color"
  },
  {
    prefix: "text",
    property: ["color", "fill"]
  }
], dr = () => cr, pr = (e) => ({
  ...e,
  get variables() {
    return this.presets[this.currentPresetName];
  },
  set variables(t) {
    this.presets[this.currentPresetName] = t;
  }
}), fr = () => pr({
  threshold: 150,
  presets: {
    light: Kt.light,
    dark: Kt.dark
  },
  currentPresetName: "light"
}), vr = (e) => e, mr = vr([
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
]), gr = [
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
], yr = (e) => (e.aliases = e.aliases || [], e.fonts = e.fonts || [], [
  ...e.aliases,
  ...mr,
  ...e.fonts,
  ...gr
]), br = () => yr({}), hr = () => (
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
), Cr = () => ({
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
}), yn = Symbol("GLOBAL_CONFIG"), Sr = () => ({
  colors: fr(),
  icons: br(),
  components: hr(),
  breakpoint: Uo(),
  i18n: Cr(),
  colorsClasses: dr(),
  /**
   * global config variable to pass nuxt-link component to vuestic-ui via @vuestic/nuxt
   * TODO: give a try to integrate inertia js router components via this option
   * TODO: if this try won't be success, may be remake to provide/inject
   */
  routerComponent: void 0
}), wr = (e = {}) => {
  const t = b(Me(Sr(), e));
  return {
    getGlobalConfig: () => t.value,
    setGlobalConfig: (r) => {
      const a = typeof r == "function" ? r(t.value) : r;
      t.value = ke(a);
    },
    mergeGlobalConfig: (r) => {
      const a = typeof r == "function" ? r(t.value) : r;
      t.value = Me(ke(t.value), a);
    },
    globalConfig: t
  };
}, Or = (e) => {
  var t, n;
  const o = ((t = le()) == null ? void 0 : t.appContext.provides) || ((n = mn()) == null ? void 0 : n._context.provides);
  if (!o)
    throw new Error("Vue app not found for provide");
  return o[yn] = e, e;
};
function Ae() {
  let e = gn(yn);
  return e || (e = wr(), Or(e)), e;
}
const _r = (e) => "preset" in e, Yt = (e) => _r(e) ? e.preset : void 0, xr = (e, t) => {
  const n = nr(), { globalConfig: o } = Ae(), s = e.name, r = (l) => (l instanceof Array ? l : [l]).reduce((i, u) => {
    var d, f, h;
    const y = (h = (f = (d = o.value.components) == null ? void 0 : d.presets) == null ? void 0 : f[s]) == null ? void 0 : h[u];
    if (!y)
      return i;
    const g = Yt(y);
    return {
      ...i,
      ...g ? r(g) : void 0,
      ...y
    };
  }, {}), a = Et();
  return c(() => {
    var l, i;
    const u = {
      ...(l = o.value.components) == null ? void 0 : l.all,
      ...(i = o.value.components) == null ? void 0 : i[s]
    }, d = n.value.reduce((y, g) => {
      const v = g[s];
      return v ? { ...y, ...v } : y;
    }, {}), f = [
      t,
      a?.value,
      d,
      u
    ].filter(Zt).map(Yt).filter(Zt).at(0), h = f ? r(f) : void 0;
    return { ...u, ...d, ...h };
  });
}, Lr = (e) => (t, n) => {
  var o;
  const s = le(), r = xr(e, t), a = c(() => vn(r.value, Object.keys(t))), l = Zo(s, r), i = Yo(s, a), u = Qo(s, r);
  s.props = l, s.attrs = i, s.slots = u;
  const d = (o = e.setup) == null ? void 0 : o.call(e, Eo(l), {
    ...n,
    attrs: i,
    slots: u
  });
  return typeof d == "object" && !s.exposed && n.expose(d), d;
}, Ct = (e) => {
  const t = Lr(e), n = qo(e);
  return new Proxy(e, {
    get(o, s) {
      return s in e ? s === "setup" ? t : s === "render" || s === "ssrRender" ? n : Reflect.get(o, s) : Reflect.get(o, s);
    }
  });
}, St = "__c", Pr = (e) => (e[St] = Ct(e[St]), e), Er = (e) => "setup" in e ? Ct(e) : St in e ? Pr(e) : (e.setup = () => ({
  /* Fake setup function */
}), Ct(e)), De = Er, $r = {
  defaultSize: 48,
  sizes: {
    small: 32,
    medium: 48,
    large: 64
  }
}, kr = {
  defaultSize: 1,
  sizes: {
    small: 0.75,
    medium: 1,
    large: 1.25
  }
}, kt = {
  size: {
    type: [String, Number],
    default: "",
    validator: (e) => typeof e == "string" || typeof e == "number"
  },
  sizesConfig: {
    type: Object,
    default: () => $r
  },
  fontSizesConfig: {
    type: Object,
    default: () => kr
  }
}, Br = /(?<fontSize>\d+)(?<extension>px|rem)/i, Qt = (e) => e / 16 - 0.5, Bt = (e, t = ((n) => (n = le()) == null ? void 0 : n.type.name)()) => {
  const { getGlobalConfig: n } = Ae(), o = c(() => {
    var l, i;
    return t ? (i = (l = n().components) == null ? void 0 : l[t]) == null ? void 0 : i.sizesConfig : void 0;
  }), s = c(() => {
    var l, i, u;
    const { defaultSize: d, sizes: f } = e.sizesConfig, h = (l = o.value) == null ? void 0 : l.defaultSize;
    if (!e.size)
      return `${d || h}px`;
    if (typeof e.size == "string") {
      const y = (u = (i = o.value) == null ? void 0 : i.sizes) == null ? void 0 : u[e.size], g = f[e.size];
      return g ? `${g}px` : y ? `${y}px` : e.size;
    }
    return `${e.size}px`;
  }), r = c(() => {
    const { defaultSize: l, sizes: i } = e.fontSizesConfig;
    if (!e.size)
      return l;
    if (typeof e.size == "string") {
      if (e.size in i)
        return i[e.size];
      const u = e.size.match(Br);
      if (!u || !u.groups)
        throw new Error("Size prop should be either valid string or number");
      const { extension: d, fontSize: f } = u.groups;
      return d === "rem" ? +f : Qt(+f);
    }
    return Qt(e.size);
  }), a = c(() => `${r.value}rem`);
  return {
    sizeComputed: s,
    fontSizeComputed: a,
    fontSizeInRem: r
  };
}, rt = {
  preset: {
    type: [String, Array],
    default: void 0
  }
}, Vr = (e, t) => t.test(e), bn = (e, t) => {
  if (typeof t != "string" && t.global)
    return [...e.matchAll(t)].map((o) => o.slice(1));
  const n = e.match(t) || [];
  return n ? n.length > 1 ? n.slice(1) : n : [];
}, hn = /{[^}]*}/g, Cn = (e) => e.replace(hn, "(.*)"), Ar = (e) => (e.match(hn) || []).map((t) => t.replace(/{|}/g, "")), Rr = (e, t) => bn(e, Cn(t)), Tr = (e, t) => {
  const n = Ar(t), o = Rr(e, t);
  return n.reduce((s, r, a) => ({ ...s, [r]: o[a] }), {});
}, Ir = (e, t) => (e.match(t) || [])[0] === e, jr = (e, t) => {
  const n = Cn(t);
  return Ir(e, new RegExp(n));
}, Sn = (e) => typeof e.name == "string", wn = (e) => e.name instanceof RegExp, Nr = (e, t) => Sn(t) ? jr(e, t.name) : wn(t) ? Vr(e, t.name) : !1, Fr = (e, t) => {
  const n = Tr(e, t.name);
  return t.resolve && t.resolve(n);
}, Mr = (e, t) => {
  if (t.name.global)
    throw new Error(`Bad icon config with name ${t.name}. Please, don't use global regex as name.`);
  const n = bn(e, t.name);
  return t.resolveFromRegex && t.resolveFromRegex(...n);
}, zr = (e, t) => {
  if (Sn(t))
    return Fr(e, t);
  if (wn(t))
    return Mr(e, t);
  throw Error("Unknown icon config");
}, Dr = (e, t, n = []) => {
  const o = t.find((s) => n.includes(s.name.toString()) ? !1 : Nr(e, s));
  if (!o)
    throw new Error(`Can not find icon config from ${e}. Please provide default config.`);
  return o;
}, On = (e, t, n = []) => {
  if (!e)
    return;
  const o = Dr(e, t, n), s = Me(zr(e, o), o);
  return n = [...n, o.name.toString()], Me(
    On(s.to, t, n),
    s
  );
}, Gr = (e) => {
  const t = ["name", "to", "resolve", "resolveFromRegex"], n = e;
  return t.forEach((o) => {
    delete n[o];
  }), n;
}, Ur = (e, t) => {
  const n = On(e, t);
  return n === void 0 ? {} : Gr(n);
}, Hr = () => {
  const { globalConfig: e } = Ae();
  return {
    getIcon: (t) => Ur(t, e.value.icons)
  };
}, qr = Symbol("VaAppCachePlugin"), Wr = () => {
  const e = gn(qr);
  return e || {
    colorContrast: {}
  };
}, Xr = (e) => {
  const t = typeof e == "function" ? c(e) : c(e), n = new Proxy(t, {
    get(o, s, r) {
      if (typeof t.value == "object")
        return C(Reflect.get(t.value, s, r));
    },
    set(o, s, r) {
      return mt(t.value[s]) && !mt(r) ? t.value[s].value = r : t.value[s] = r, !0;
    },
    deleteProperty(o, s) {
      return Reflect.deleteProperty(t.value, s);
    },
    has(o, s) {
      return typeof t.value != "object" ? !1 : Reflect.has(t.value, s);
    },
    ownKeys() {
      return typeof t.value != "object" ? [] : Object.keys(t.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return xe(n);
}, Kr = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), Jr = /[A-Z0-9]*(?:[^\-_|A-Z|\s.])*/gm, _n = (e) => {
  var t;
  return ((t = e.match(Jr)) == null ? void 0 : t.map((n) => n.trim().split(/([0-9]+)|([a-zA-Z]+)/g)).flat().filter(Boolean)) || [];
}, tt = (e) => _n(e).map((t) => t.toLowerCase()).join("-"), Zr = (e) => _n(e).map((t, n) => n === 0 ? t.toLowerCase() : Kr(t)).join(""), xn = /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6,8})$/, Ln = /^rgba?\(([\d.]+, ?){2}[\d.]+(, ?[\d.]+)?\)$/, Pn = /hsla?\([\d.]+(deg|rad|turn|grad)?(,?\s?[\d.]+%?){2}(,?\s?(\/\s?)?[\d.]+%?)?\)/, Yr = (e) => xn.test(e) || Ln.test(e) || Pn.test(e), Vt = (e) => typeof e != "object" || e === null ? !1 : "h" in e && "s" in e && "l" in e, At = (e) => typeof e != "object" || e === null ? !1 : "r" in e && "g" in e && "b" in e, En = (e) => {
  if (!xn.test(e))
    return null;
  const t = e.replace("#", ""), n = t.length < 6, [o, s, r, a] = n ? t.split("").map((l) => parseInt(l + l, 16)) : t.match(/.{2}/g).map((l) => parseInt(l, 16));
  return { r: o, g: s, b: r, a: a ?? 1 };
}, $n = (e) => {
  if (!Ln.test(e))
    return null;
  const [t, n, o, s = 1] = e.match(/[\d.]+/g).map(Number);
  return { r: t, g: n, b: o, a: s };
}, kn = (e) => {
  if (!Pn.test(e))
    return null;
  const [t, n, o, s = "1"] = e.match(/[\d.]+%?/g);
  return {
    h: Number(t),
    s: Number(n.replace("%", "")),
    l: Number(o.replace("%", "")),
    a: s.endsWith("%") ? Number(s.replace("%", "")) / 100 : Number(s)
  };
}, en = (e) => {
  const t = e.r / 255, n = e.g / 255, o = e.b / 255, s = Math.max(t, n, o), r = Math.min(t, n, o);
  let a = 0, l = 0;
  const i = (s + r) / 2;
  if (s !== r) {
    const u = s - r;
    switch (l = i > 0.5 ? u / (2 - s - r) : u / (s + r), s) {
      case t:
        a = (n - o) / u + (n < o ? 6 : 0);
        break;
      case n:
        a = (o - t) / u + 2;
        break;
      case o:
        a = (t - n) / u + 4;
        break;
    }
    a *= 60;
  }
  return { h: Math.round(a), s: Math.round(l * 100), l: Math.round(i * 100), a: e.a };
}, ft = (e, t, n) => (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e), tn = (e) => {
  const t = e.h / 360, n = e.s / 100, o = e.l / 100, s = o < 0.5 ? o * (1 + n) : o + n - o * n, r = 2 * o - s, a = ft(r, s, t + 1 / 3), l = ft(r, s, t), i = ft(r, s, t - 1 / 3);
  return { r: Math.round(a * 255), g: Math.round(l * 255), b: Math.round(i * 255), a: e.a };
}, Ge = (e) => {
  if (Vt(e))
    return { ...e };
  if (At(e))
    return en(e);
  const t = En(e) ?? $n(e);
  if (t)
    return en(t);
  const n = kn(e);
  if (n)
    return n;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, Rt = ({ h: e, s: t, l: n, a: o }) => `hsla(${e},${t}%,${n}%,${o ?? 1})`, Tt = (e) => {
  if (At(e))
    return { ...e };
  if (Vt(e))
    return tn(e);
  const t = kn(e);
  if (t)
    return tn(t);
  const n = En(e) ?? $n(e);
  if (n)
    return n;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, Bn = ({ r: e, g: t, b: n, a: o }) => o === 1 ? `rgb(${e},${t},${n})` : `rgba(${e},${t},${n},${o ?? 1})`, Qr = (e) => {
  if (Vt(e))
    return Rt(e);
  if (At(e))
    return Bn(e);
  if (typeof e == "string")
    return e;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, es = (e, { h: t, s: n, l: o, a: s }) => {
  const r = Ge(e);
  return r.a = r.a ?? 1, r.h = t ?? r.h, r.s = n ?? r.s, r.l = o ?? r.l, r.a = s ?? r.a, r.h < 0 && (r.h = 360 + r.h), r.h > 360 && (r.h = r.h - 360), r.s = Math.max(0, Math.min(100, r.s)), r.l = Math.max(0, Math.min(100, r.l)), r.a = Math.max(0, Math.min(1, r.a)), r;
}, ts = (e, { h: t, s: n, l: o, a: s }) => {
  const r = Ge(e);
  return r.a = r.a ?? 1, r.h += t ?? 0, r.s += n ?? 0, r.l += o ?? 0, r.a += s ?? 0, r.h < 0 && (r.h = 360 + r.h), r.h > 360 && (r.h = r.h - 360), r.s = Math.max(0, Math.min(100, r.s)), r.l = Math.max(0, Math.min(100, r.l)), r.a = Math.max(0, Math.min(1, r.a)), r;
}, ns = (e) => /var\(--.+\)/.test(e), os = (e) => `--va-${tt(e)}`, nn = (e) => Zr(e), Re = (e, t) => {
  const { r: n, g: o, b: s } = Tt(e);
  return Bn({ r: n, g: o, b: s, a: t });
}, on = (e) => {
  const { r: t, g: n, b: o } = Tt(e);
  return Math.sqrt(t * t * 0.241 + n * n * 0.691 + o * o * 0.068);
}, rs = (e, t = 0.4) => Re(e, t), ss = (e, t = 0.4) => Re(e, t), as = (e, t = 0.2) => Re(e, t), ls = (e, t = 0.3) => Re(e, t), Oe = (e, t) => Rt(ts(Ge(e), t)), is = (e, t) => Rt(es(Ge(e), t)), us = (e) => {
  const t = Ge(e);
  if (t.s < 10)
    return Oe(t, { h: 2, s: 5, l: 10 });
  if (t.s < 30)
    return Oe(t, { s: -14, l: 11 });
  if (t.h >= 0 && t.h < 44 || t.h >= 285)
    return Oe(t, { h: 11, s: 27, l: 8 });
  if (t.h >= 44 && t.h < 85)
    return Oe(t, { h: 3, l: 9 });
  if (t.h >= 85 && t.h < 165)
    return Oe(t, { h: 16, l: 14 });
  if (t.h >= 165 && t.h < 285)
    return Oe(t, { h: -15, s: 3, l: 2 });
  throw new Error("This method should handle all colors. But it didn't for some reason.");
}, cs = (e) => `linear-gradient(to right, ${us(e)}, ${Qr(e)})`, ds = (e, t, n) => {
  const o = Re(t, n);
  return `linear-gradient(0deg, ${o}, ${o}), ${e}`;
}, ps = (e) => e ? e === "transparent" ? !0 : Tt(e).a <= 0.1 : !1, he = () => {
  const e = Ae();
  if (!e)
    throw new Error("useColors must be used in setup function or Vuestic GlobalConfigPlugin is not registered!");
  const { globalConfig: t } = e, n = Xr({
    get: () => t.value.colors.presets[t.value.colors.currentPresetName],
    set: (p) => {
      o(p);
    }
  }), o = (p) => {
    t.value.colors.presets[t.value.colors.currentPresetName] = {
      ...t.value.colors.variables,
      ...p
    };
  }, s = () => n, r = (p, w, L) => {
    if (w || (w = n.primary), p === "transparent")
      return "#ffffff00";
    if (p === "currentColor")
      return p;
    if (p?.startsWith("on")) {
      const z = p.slice(2);
      if (n[nn(z)])
        return r(h(r(z)), void 0, L);
    }
    p || (p = r(w));
    const A = n[p] || n[nn(p)];
    return A ? L ? `var(${os(p)})` : A : Yr(p) || L && ns(p) ? p : (ht(`'${p}' is not a proper color! Use HEX or default color themes
      names (https://vuestic.dev/en/styles/colors#default-color-themes)`), r(w));
  }, a = (p) => c({
    get() {
      return r(p);
    },
    set(w) {
      o({ [p]: w });
    }
  }), l = (p, w = "va") => Object.keys(p).filter((L) => p[L] !== void 0).reduce((L, A) => (L[`--${w}-${tt(A)}`] = r(p[A], void 0, !0), L[`--${w}-on-${tt(A)}`] = r(h(r(p[A])), void 0, !0), L), {}), i = Wr(), u = (p) => typeof p != "string" ? on(p) : (i.colorContrast[p] || (i.colorContrast[p] = on(p)), i.colorContrast[p]), d = c(() => u(r("textPrimary")) > 255 / 2 ? "textInverted" : "textPrimary"), f = c(() => u(r("textPrimary")) > 255 / 2 ? "textPrimary" : "textInverted"), h = (p, w, L) => {
    const A = `on${$o(String(p))}`;
    return n[A] ? n[A] : (w = w || d.value, L = L || f.value, u(p) > t.value.colors.threshold ? w : L);
  }, y = c({
    get: () => t.value.colors.currentPresetName,
    set: (p) => {
      v(p);
    }
  }), g = c(() => t.value.colors.presets), v = (p) => {
    if (t.value.colors.currentPresetName = p, !t.value.colors.presets[p])
      return ht(`Preset ${p} does not exist`);
  };
  return {
    colors: n,
    currentPresetName: y,
    presets: g,
    applyPreset: v,
    setColors: o,
    getColors: s,
    getColor: r,
    getComputedColor: a,
    getBoxShadowColor: rs,
    getBoxShadowColorFromBg: ss,
    getHoverColor: as,
    getFocusColor: ls,
    getGradientBackground: cs,
    getTextColor: h,
    shiftHSLAColor: Oe,
    setHSLAColor: is,
    colorsToCSSVariable: l,
    colorToRgba: Re,
    getStateMaskGradientBackground: ds
  };
}, fs = /* @__PURE__ */ V({
  name: "VaIcon",
  __name: "VaIcon",
  props: {
    ...kt,
    ...rt,
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
    const t = e, { getColor: n } = he(), { sizeComputed: o } = Bt(t), { getIcon: s } = Hr(), r = c(() => s(t.name)), a = c(() => t.component || t.tag || r.value.component || r.value.tag || "i"), l = ko(), i = c(() => ({ ...r.value.attrs, ...vn(l, ["class"]) })), u = (v) => {
      if (!(v === void 0 || v === !1))
        return v === "counter-clockwise" ? "va-icon--spin-reverse" : "va-icon--spin";
    }, d = c(() => [
      r.value.class,
      u(t.spin ?? r.value.spin)
    ]), f = c(() => {
      const v = t.rotation ? `rotate(${t.rotation}deg)` : "", p = t.flip === "vertical" || t.flip === "both" ? -1 : 1, w = t.flip === "horizontal" || t.flip === "both" ? -1 : 1;
      return `${t.flip === "off" ? "" : `scale(${p}, ${w})`} ${v}`.trim();
    }), h = c(() => ({
      transform: f.value,
      cursor: l.onClick ? "pointer" : null,
      color: t.color ? n(t.color, void 0, !0) : r.value.color,
      fontSize: o.value,
      height: o.value,
      lineHeight: o.value
    })), y = c(() => l.tabindex ?? -1), g = c(() => l.role !== "button" || y.value < 0);
    return (v, p) => (E(), Y(Qe(a.value), ye({
      class: ["va-icon", d.value],
      style: h.value,
      "aria-hidden": g.value,
      notranslate: ""
    }, i.value), {
      default: B(() => [
        de(v.$slots, "default", {}, () => [
          r.value.content ? (E(), U(pe, { key: 0 }, [
            te(ue(r.value.content), 1)
          ], 64)) : ie("", !0)
        ])
      ]),
      _: 3
    }, 16, ["class", "style", "aria-hidden"]));
  }
}), wt = De(fs), Ot = (e) => {
  const t = le().props;
  return c(() => {
    const o = t?.[e];
    return o === void 0 ? o : Number(o);
  });
}, Vn = (e) => typeof e == "function", An = () => typeof window > "u", vs = () => !An(), ms = (e) => {
  const t = c(vs), n = b(null);
  return ae(t, () => {
    t.value && (n.value = e());
  }, { immediate: !0 }), n;
}, gs = () => ms(() => window), be = (e) => {
  if (e && typeof e == "object" && (e = C(e), !!e))
    return typeof e.$el < "u" ? e.$el : e;
}, _t = (e, ...t) => {
  if (!(!e || typeof e != "object")) {
    if ("addEventListener" in e && typeof e.addEventListener == "function") {
      e.addEventListener(...t);
      return;
    }
    "parentElement" in e && _t(e.parentElement, ...t);
  }
}, xt = (e, ...t) => {
  if (!(!e || typeof e != "object")) {
    if ("removeEventListener" in e && typeof e.removeEventListener == "function") {
      e.removeEventListener(...t);
      return;
    }
    "parentElement" in e && xt(e.parentElement, ...t);
  }
}, Be = (e, t, n) => {
  const o = n && typeof n != "boolean" ? n : gs(), s = typeof n == "boolean" ? n : !1;
  ae(o, (r, a) => {
    Array.isArray(e) ? e.forEach((l) => {
      _t(be(C(r)), l, t, s), xt(be(C(a)), l, t, s);
    }) : (_t(be(C(r)), e, t, s), xt(be(C(a)), e, t, s));
  }, { immediate: !0 });
}, ys = (e) => {
  const t = le();
  let n = () => {
  };
  const o = Bo((s, r) => (n = r, {
    get() {
      var a;
      return s(), (a = t.proxy) == null ? void 0 : a.$refs[e];
    },
    set(a) {
    }
  }));
  return F(n), Vo(n), o;
}, bs = (e) => e.startsWith("$t:"), Rn = (e) => ({ type: String, default: e }), rn = (e, t) => (t && Object.keys(t).forEach((n) => {
  e = e.replace(`{${n}}`, String(t[n]));
}), e), st = () => {
  const { globalConfig: e } = Ae(), t = c(() => e.value.i18n);
  function n(s, r) {
    var a;
    const l = (a = le()) == null ? void 0 : a.appContext.config.globalProperties.$t;
    if (typeof l == "function") {
      const u = l(`vuestic.${s}`, r);
      if (u)
        return u;
    }
    const i = t.value[s];
    return i ? rn(i, r) || s : (ht(`${s} not found in VuesticUI i18n config`), s);
  }
  function o(s, r) {
    return s ? bs(s) ? n(s.slice(3), r) : rn(s, r) || s : "";
  }
  return {
    tp: o,
    t: n
  };
}, Tn = (e, t = !1) => {
  const { props: n } = le(), { getColor: o, getTextColor: s } = he();
  return { textColorComputed: c(() => {
    if (n.textColor)
      return o(n.textColor);
    const a = e ? C(e) : n.color;
    if (!a)
      return "currentColor";
    const l = o(a);
    return ps(l) ? "currentColor" : C(t) ? l : o(s(l));
  }) };
}, hs = (e, t, n) => {
  const o = le();
  if (!o)
    throw new Error("`useButtonBackground` hook must be used only inside of setup function!");
  const s = o.props, { getColor: r, getGradientBackground: a } = he(), l = c(() => s.plain ? "transparent" : s.gradient ? a(e.value) : e.value), i = c(() => !s.plain && n.value), u = c(() => !s.plain && t.value), d = c(() => u.value && s.pressedBehavior === "opacity" ? s.pressedOpacity : i.value && s.hoverBehavior === "opacity" ? Number(s.hoverOpacity) : Number(s.backgroundOpacity)), f = c(() => i.value && s.hoverBehavior === "mask"), h = c(() => u.value && s.pressedBehavior === "mask"), y = c(() => h.value ? s.pressedOpacity : f.value ? Number(s.hoverOpacity) : 0), g = c(() => h.value ? r(s.pressedMaskColor) : f.value ? r(s.hoverMaskColor) : "transparent");
  return {
    backgroundColor: l,
    backgroundColorOpacity: d,
    backgroundMaskOpacity: y,
    backgroundMaskColor: g
  };
}, Cs = {
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
}, In = (e) => {
  const t = le(), n = c(() => t?.appContext.config.globalProperties), o = c(() => {
    var f;
    return (f = n.value) == null ? void 0 : f.$router;
  }), s = c(() => {
    var f;
    return (f = n.value) == null ? void 0 : f.$route;
  }), { getGlobalConfig: r } = Ae(), a = c(() => {
    if (e.disabled)
      return e.tag;
    if (e.href && !e.to)
      return "a";
    const f = r();
    return f.routerComponent && e.to ? f.routerComponent : e.to && o.value !== void 0 ? "router-link" : e.to && o.value === void 0 ? "a" : e.tag || "div";
  }), l = c(() => e.disabled ? !1 : !!(e.href || e.to)), i = c(() => l.value ? a.value === "a" ? {
    target: e.target,
    href: d.value
  } : {
    target: e.target,
    to: e.to,
    replace: e.replace,
    append: e.append,
    activeClass: e.activeClass,
    exact: e.exact,
    exactActiveClass: e.exactActiveClass
  } : {}), u = c(() => {
    if (!o.value || !e.to)
      return !1;
    const f = o.value.resolve(e.to).href, h = o.value.currentRoute.value.path;
    return f.replace("#", "") === h.replace("#", "");
  }), d = c(() => {
    var f;
    return e.href ? e.href : s.value === void 0 && e.to ? e.to : e.to ? (f = o.value) == null ? void 0 : f.resolve(e.to, s.value).href : void 0;
  });
  return {
    isLinkTag: l,
    tagComputed: a,
    hrefComputed: d,
    isActiveRouterLink: u,
    linkAttributesComputed: i
  };
}, Ss = (e) => {
  const { linkAttributesComputed: t, isLinkTag: n } = In(e), o = c(() => n.value ? void 0 : e.type), s = c(() => {
    const r = {
      "aria-disabled": !!e.disabled,
      disabled: !!e.disabled
    };
    return n.value ? r : {
      type: o.value,
      tabindex: e.loading || e.disabled ? -1 : 0,
      ...r
    };
  });
  return c(() => ({ ...t.value, ...s.value }));
}, ws = (e) => {
  var t, n, o;
  if (An())
    return e;
  if (e > 0) {
    const s = (t = window?.navigator) == null ? void 0 : t.userAgent, r = s && /^((?!chrome|android).)*safari/i.test((n = window?.navigator) == null ? void 0 : n.userAgent), a = s && /(version.)15|16/i.test((o = window?.navigator) == null ? void 0 : o.userAgent);
    if (r && !a)
      return e < 1 ? 1 - e : e;
  }
  return e;
}, Os = (e, t, n, o) => {
  const s = le();
  if (!s)
    throw new Error("`useButtonTextColor` hook must be used only inside of setup function!");
  const r = s.props, { getColor: a, colorToRgba: l, getStateMaskGradientBackground: i } = he(), u = c(() => ({
    background: "transparent",
    color: e.value,
    "-webkit-background-clip": "text",
    "background-clip": "text",
    opacity: y.value
  })), d = (g, v, p) => {
    const w = a(g);
    let L;
    return p === "opacity" ? L = { color: l(e.value, v) } : L = {
      background: i(t.value, w, v),
      color: v < 1 ? l(e.value, ws(v)) : w
    }, { ...u.value, ...L };
  }, f = c(() => d(r.hoverMaskColor, Number(r.hoverOpacity), r.hoverBehavior)), h = c(() => d(r.pressedMaskColor, r.pressedOpacity, r.pressedBehavior)), y = c(() => {
    if (!r.disabled)
      return r.textOpacity === 1 || o.value && !n.value ? 1 : n.value ? 0.9 : r.textOpacity;
  });
  return c(() => {
    const g = {
      color: e.value,
      background: "transparent"
    };
    return r.plain && Object.assign(g, u.value, { background: e.value }), r.plain ? n.value ? h.value : o.value ? f.value : g : g;
  });
}, sn = (e, t, n) => Math.min(Math.max(e, t), n), _s = {
  class: "va-progress-circle__wrapper",
  viewBox: "0 0 40 40"
}, xs = ["r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Ls = /* @__PURE__ */ V({
  name: "VaProgressCircle",
  __name: "VaProgressCircle",
  props: {
    ...kt,
    ...rt,
    modelValue: { type: [Number, String], default: 0 },
    indeterminate: { type: Boolean, default: !1 },
    thickness: { type: [Number, String], default: 0.06 },
    color: { type: String, default: "primary" },
    ariaLabel: Rn("$t:progressState")
  },
  setup(e) {
    const t = e, { getColor: n } = he(), { sizeComputed: o } = Bt(t), s = c(() => sn(Number(t.thickness), 0, 1) / 2 * 100), r = c(() => 20 - 20 * s.value / 100), a = c(() => 2 * Math.PI * r.value), l = c(() => a.value * (1 - sn(Number(t.modelValue), 0, 100) / 100)), i = c(() => n(t.color, void 0, !0)), { tp: u } = st(), d = c(() => ({ color: i.value })), f = c(() => ({
      width: o.value,
      height: o.value
    })), h = c(() => ({
      "va-progress-circle--indeterminate": t.indeterminate
    })), y = c(() => ({
      role: "progressbar",
      "aria-label": u(t.ariaLabel),
      "aria-valuenow": t.indeterminate ? void 0 : t.modelValue
    }));
    return (g, v) => (E(), U("div", ye({
      class: ["va-progress-circle", h.value],
      style: f.value
    }, y.value), [
      (E(), U("svg", _s, [
        _("circle", {
          class: "va-progress-circle__overlay",
          cx: "50%",
          cy: "50%",
          r: r.value,
          fill: "none",
          stroke: i.value,
          "stroke-width": s.value + "%",
          "stroke-dasharray": a.value,
          "stroke-dashoffset": l.value
        }, null, 8, xs)
      ])),
      g.$slots.default ? (E(), U("div", {
        key: 0,
        style: Lt(d.value),
        class: "va-progress-circle__info"
      }, [
        de(g.$slots, "default")
      ], 4)) : ie("", !0)
    ], 16));
  }
}), jn = De(Ls), Nn = (e, t) => Object.keys(e).filter((n) => t.includes(n)).reduce((n, o) => (n[o] = e[o], n), {}), Ps = {
  hoverBehavior: {
    type: String,
    default: "mask",
    validator: (e) => ["opacity", "mask"].includes(e)
  },
  hoverOpacity: { type: [Number, String], default: 0.15 },
  hoverMaskColor: { type: String, default: "textInverted" }
}, Es = {
  pressedBehavior: {
    type: String,
    default: "mask",
    validator: (e) => ["opacity", "mask"].includes(e)
  },
  pressedOpacity: { type: Number, default: 0.13 },
  pressedMaskColor: { type: String, default: "textPrimary" }
}, $s = {
  loading: { type: Boolean, default: !1 }
}, Fn = (e) => e instanceof HTMLElement, ks = (e) => {
  !e || !Fn(e) || (e.focus(), e.dispatchEvent(new FocusEvent("focus", { bubbles: !0 })));
}, Bs = (e) => {
  !e || !Fn(e) || (e.blur(), e.dispatchEvent(new Event("blur", { bubbles: !0 })));
}, an = (e, t, n = {}) => {
  F(() => window.addEventListener(e, t, { capture: !0, ...n })), Ve(() => window.removeEventListener(e, t, { capture: !0, ...n }));
}, Vs = () => {
  const e = ze(), t = () => {
    e.value = document.activeElement;
  };
  return F(t), an("focus", t), an("blur", t), e;
};
function As(e, t) {
  const n = Vs(), o = c({
    get: () => bt(n.value) || bt(e?.value) ? !1 : n.value === e?.value,
    set: (i) => {
      i ? a() : l();
    }
  }), s = (i) => {
  }, r = (i) => {
  }, a = () => {
    e?.value && ks(be(e?.value));
  }, l = () => {
    e?.value && Bs(be(e?.value));
  };
  return Be("focus", s, e), Be("blur", r, e), {
    isFocused: o,
    onFocus: s,
    onBlur: r,
    focus: a,
    blur: l
  };
}
const Mn = (e) => {
  if (mt(e))
    return c({
      get() {
        return be(e.value);
      },
      set(n) {
        e.value = n;
      }
    });
  if (e) {
    const n = ys(e);
    return c({
      get() {
        return be(n.value);
      },
      set(o) {
        n.value = o;
      }
    });
  }
  const t = ze();
  return c({
    set(n) {
      t.value = be(n);
    },
    get() {
      return t.value;
    }
  });
};
function Rs(e, t) {
  const n = b(!1), o = () => {
    t?.value || (n.value = !0);
  }, s = () => {
    n.value = !1;
  };
  t && ae(t, (a) => {
    a && (n.value = !1);
  });
  const r = Mn(e);
  return Be("mouseenter", o, r), Be("mouseleave", s, r), { isHovered: n, onMouseEnter: o, onMouseLeave: s };
}
function Ts(e) {
  const t = b(!1), n = () => {
    t.value = !0;
  }, o = () => {
    t.value = !1;
  }, s = Mn(e);
  return Be(["mousedown", "touchstart", "dragstart"], n, s), Be([
    "mouseup",
    "mouseleave",
    "touchend",
    "touchcancel",
    "drop",
    "dragend"
  ], o, !0), { isPressed: t, onMouseDown: n, onMouseUp: o };
}
const zn = (e, t = !0) => {
  var n;
  if (fn(e))
    return !0;
  if (!e || t && (!Vn(e) || !((n = e()) != null && n.length)))
    return !1;
  const o = t ? e() : e;
  return Array.isArray(o) ? o.some((s) => Array.isArray(s.children) ? zn(s.children, !1) : s.children || s.props) : !!o.children;
}, Is = (e = "default") => {
  const { slots: t } = le();
  return c(() => zn(t[e]));
}, It = (e, t) => {
  $t && !e && console.warn('You must pass the @param "prefix" to the useBem hook!');
  const n = c(() => typeof t == "function" ? t() : C(t)), o = c(() => Object.entries(C(n)).reduce((a, [l, i]) => (i && (a[`${e}--${tt(l)}`] = !0), a), {})), s = c(() => Object.keys(o.value)), r = c(() => s.value.join(" "));
  return new Proxy({}, {
    ownKeys() {
      return Reflect.ownKeys(o.value);
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(o.value, l);
    },
    get(a, l, i) {
      switch (l) {
        case "asArray":
          return s;
        case "asString":
          return r;
        case "asObject":
          return o;
        default:
          return Reflect.get(o.value, l, i);
      }
    }
  });
}, js = /* @__PURE__ */ V({
  name: "VaButton",
  __name: "VaButton",
  props: {
    ...rt,
    ...kt,
    ...Ps,
    ...Es,
    ...$s,
    ...Cs,
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
  setup(e, { expose: t }) {
    const n = e, { getColor: o } = he(), s = c(() => o(n.color)), { sizeComputed: r } = Bt(n), a = c(() => {
      const O = /([0-9]*)(px)/.exec(r.value);
      return O ? `${+O[1] / 2}${O[2]}` : r.value;
    }), { tagComputed: l } = In(n), i = Ss(n), { disabled: u } = Ao(n), d = ze(), { focus: f, blur: h } = As(d), { isHovered: y } = Rs(d, u), { isPressed: g } = Ts(d), v = c(() => n.iconColor ? o(n.iconColor) : x.value), p = c(() => ({
      color: v.value,
      size: n.size
    })), w = c(() => ({ "va-button__content--loading": n.loading })), L = Is(), A = c(() => !!(n.iconRight && !n.icon || !n.iconRight && n.icon)), z = c(() => !L.value && A.value), Z = Ot("textOpacity"), ee = Ot("backgroundOpacity"), q = It("va-button", () => ({
      ...Nn(n, ["disabled", "block", "loading", "round", "plain"]),
      small: n.size === "small",
      normal: !n.size || n.size === "medium",
      large: n.size === "large",
      opacity: Z.value < 1,
      bordered: !!n.borderColor,
      iconOnly: z.value,
      leftIcon: !z.value && !!n.icon && !n.iconRight,
      rightIcon: !z.value && !n.icon && !!n.iconRight
    })), re = c(() => n.plain || ee.value < 0.5), { textColorComputed: x } = Tn(s, re), {
      backgroundColor: $,
      backgroundColorOpacity: Q,
      backgroundMaskOpacity: ce,
      backgroundMaskColor: Le
    } = hs(s, g, y), me = Os(x, s, g, y), S = c(() => ({
      borderColor: n.borderColor ? o(n.borderColor) : "transparent",
      ...me.value
    }));
    return t({
      focus: f,
      blur: h
    }), (O, T) => (E(), Y(Qe(C(l)), ye({
      ref_key: "button",
      ref: d,
      class: ["va-button", C(q)],
      style: [S.value, `--va-background-color: ${String(C($))};--va-background-color-opacity: ${String(C(Q))};--va-background-mask-color: ${String(C(Le))};--va-background-mask-opacity: ${String(C(ce))}`]
    }, C(i)), {
      default: B(() => [
        _("span", {
          class: Se(["va-button__content", w.value])
        }, [
          de(O.$slots, "prepend", _e(Fe({ icon: e.icon, iconAttributes: p.value })), () => [
            e.icon ? (E(), Y(C(wt), ye({
              key: 0,
              class: "va-button__left-icon",
              name: e.icon
            }, p.value), null, 16, ["name"])) : ie("", !0)
          ]),
          de(O.$slots, "default"),
          de(O.$slots, "append", _e(Fe({ icon: e.iconRight, iconAttributes: p.value })), () => [
            e.iconRight ? (E(), Y(C(wt), ye({
              key: 0,
              class: "va-button__right-icon",
              name: e.iconRight
            }, p.value), null, 16, ["name"])) : ie("", !0)
          ])
        ], 2),
        O.loading ? de(O.$slots, "loading", _e(ye({ key: 0 }, {
          size: a.value,
          color: C(x)
        })), () => [
          k(C(jn), {
            class: "va-button__loader",
            size: a.value,
            color: C(x),
            thickness: 0.15,
            indeterminate: ""
          }, null, 8, ["size", "color"])
        ]) : ie("", !0)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
}), vt = De(js), nt = Symbol("NOT_PROVIDED"), Ns = (e, t) => {
  const n = le();
  return c(() => {
    if (!n?.vnode.props)
      return nt;
    const o = t[e];
    return e in n.vnode.props ? o : nt;
  });
}, Fs = {
  stateful: { type: Boolean, default: !1 },
  modelValue: { type: void 0 }
}, Ms = (e, t, n = "modelValue", o = {}) => {
  const { eventName: s, defaultValue: r } = o, a = s || `update:${n.toString()}`, l = Ns(n, e), i = "defaultValue" in o, u = b(
    l.value === nt ? i ? r : e[n] : l.value
  );
  let d;
  const f = () => {
    d = ae(() => e[n], (y) => {
      u.value = y;
    });
  };
  ae(() => e.stateful, (y) => {
    y ? f() : d?.();
  }, { immediate: !0 });
  const h = c({
    get: () => e.stateful ? u.value : e[n],
    set: (y) => {
      e.stateful && (u.value = y), t(a, y);
    }
  });
  return Object.defineProperty(h, "stateful", {
    get: () => e.stateful
  }), Object.defineProperty(h, "userProvided", {
    get: () => l.value !== nt
  }), { valueComputed: h };
}, Dn = ["top", "bottom"], Gn = ["left", "right"], zs = [...Dn, ...Gn], Ds = ["start", "end", "center"], Gs = zs.reduce((e, t) => (e.push(t), Ds.forEach((n) => e.push(`${t}-${n}`)), e), ["auto"]), Us = Dn.reduce((e, t) => (Gn.forEach((n) => {
  e.push(`${t}-${n}`), e.push(`${n}-${t}`);
}), e), []), Hs = [...Gs, ...Us], qs = {
  "top-left": "top-start",
  "left-top": "top-start",
  "top-right": "top-end",
  "right-top": "top-end",
  "bottom-left": "bottom-start",
  "left-bottom": "bottom-start",
  "bottom-right": "bottom-end",
  "right-bottom": "bottom-end"
}, Ws = (e) => {
  const t = c(() => (qs[e.placement] || e.placement).split("-")), n = c(() => {
    const s = t.value[0];
    return s === "auto" ? "bottom" : s;
  }), o = c(() => t.value[1] || "center");
  return { position: n, align: o };
}, Xs = () => {
  const e = (o) => typeof o == "string" ? !isNaN(+o) || o.endsWith("px") || o.endsWith("rem") : !1;
  return { isParsableMeasure: e, isParsablePositiveMeasure: (o) => typeof o == "number" ? o >= 0 : e(o) && parseInt(o) >= 0, parseSizeValue: (o, s = 16) => {
    const r = C(o);
    if (typeof r == "string") {
      const a = parseInt(r);
      return isNaN(a) ? 0 : r.endsWith("rem") ? a * C(s) : a;
    }
    return r;
  } };
}, { isParsableMeasure: ln, parseSizeValue: un } = Xs(), Ks = {
  overlap: { type: Boolean, default: !1 },
  placement: {
    type: String,
    default: "top-end",
    validator: (e) => Hs.includes(e)
  },
  offset: {
    type: [Number, String, Array],
    default: 0,
    validator: (e) => Array.isArray(e) ? e.every(ln) : typeof e == "string" ? ln(e) : !isNaN(e)
  }
}, Js = (e, t) => {
  if (!t.value)
    return {};
  const { position: n, align: o } = Ws(e), s = c(() => ({
    start: e.overlap ? "-50%" : "-100%",
    center: "-50%",
    end: e.overlap ? "-50%" : "0%"
  })[o.value]), r = c(() => {
    if (!e.offset)
      return {};
    const i = ["left", "right"].includes(n.value) ? "top" : "left", u = i === "top" ? "left" : "top";
    if (Array.isArray(e.offset)) {
      const [f, h] = e.offset.map(un);
      return {
        [`margin-${i}`]: `${f}px`,
        [`margin-${u}`]: `${h}px`
      };
    }
    const d = un(e.offset);
    return {
      [`margin-${u}`]: `${d}px`
    };
  }), a = c(() => {
    const i = ["left", "right"].includes(n.value) ? "top" : "left", u = i === "top" ? "left" : "top";
    let d = "0%";
    return u === "top" && n.value === "bottom" && (d = "100%"), u === "left" && n.value === "right" && (d = "100%"), {
      start: { [i]: "0%", [u]: d },
      center: { [i]: "50%", [u]: d },
      end: { [i]: "100%", [u]: d }
    }[o.value];
  }), l = c(() => {
    const i = {
      top: {
        x: s.value,
        y: e.overlap ? "-50%" : "-100%"
      },
      bottom: {
        x: s.value,
        y: e.overlap ? "-50%" : "0%"
      },
      left: {
        x: e.overlap ? "-50%" : "-100%",
        y: s.value
      },
      right: {
        x: e.overlap ? "-50%" : "0%",
        y: s.value
      }
    }, { x: u, y: d } = i[n.value];
    return { transform: `translate(${u}, ${d})` };
  });
  return c(() => ({
    ...a.value,
    ...l.value,
    ...r.value
  }));
}, Zs = {
  props: "prop",
  attrs: "prop",
  slots: "slot"
}, Ys = (e, t = ["props", "attrs"]) => {
  if (!$t)
    return;
  const n = le();
  if (!n)
    throw new Error("`useDeprecated` hook must be used only inside of setup function!");
  const o = n.type.name, s = C(e);
  t.every((r) => {
    var a;
    const l = Zs[r], i = (u) => console.warn(`The '${u}' ${l} (${o} component) is deprecated! Please, check the documentation.`);
    if (r === "props") {
      const u = ((a = n.propsOptions) == null ? void 0 : a[0]) || {}, d = n.props || {};
      return s.forEach((f) => {
        u[f] && d[f] !== u[f].default && i(f);
      }), !0;
    }
    return Object.keys({ ...n[r] }).forEach((u) => {
      s.includes(u) && i(u);
    }), !0;
  });
}, Qs = ["aria-labelledby"], ea = { class: "va-badge__text" }, ta = /* @__PURE__ */ V({
  name: "VaBadge",
  __name: "VaBadge",
  props: {
    ...rt,
    ...Ks,
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
    const t = e;
    Ys(["transparent"]);
    const n = Ro(), o = c(() => !(t.text || t.visibleEmpty || t.dot || n.text)), s = c(() => !!(n.default || t.dot)), r = It("va-badge", () => ({
      ...Nn(t, ["visibleEmpty", "dot", "multiLine"]),
      empty: o.value,
      floating: s.value
    })), { getColor: a } = he(), l = c(() => a(t.color)), { textColorComputed: i } = Tn(l), u = Js(t, s), d = c(() => ({
      color: i.value,
      borderColor: l.value,
      backgroundColor: l.value,
      opacity: t.transparent ? 0.5 : 1,
      ...C(u)
    })), f = c(() => t.text ? String(t.text) : void 0);
    return (h, y) => (E(), U("div", {
      class: Se(["va-badge", C(r)]),
      role: "status",
      "aria-labelledby": f.value
    }, [
      _("span", {
        class: "va-badge__text-wrapper",
        style: Lt(d.value)
      }, [
        _("span", ea, [
          de(h.$slots, "text", {}, () => [
            te(ue(e.text), 1)
          ])
        ])
      ], 4),
      de(h.$slots, "default")
    ], 10, Qs));
  }
}), na = De(ta), jt = (e, ...t) => Vn(e) ? e(...t) : e, oa = { class: "va-stepper__default-controls" }, ra = /* @__PURE__ */ V({
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
    const t = e, { t: n } = st(), o = c(() => {
      const r = t.steps[Number(t.modelValue)];
      return jt(r.isLoading) || !1;
    }), s = c(() => {
      const r = t.steps.length - 1;
      return Number(t.modelValue) >= r;
    });
    return (r, a) => (E(), U("div", oa, [
      k(C(vt), {
        preset: "primary",
        disabled: Number(r.$props.modelValue) <= 0,
        loading: o.value,
        onClick: a[0] || (a[0] = (l) => r.$props.stepControls.prevStep())
      }, {
        default: B(() => [
          te(ue(C(n)("back")), 1)
        ]),
        _: 1
      }, 8, ["disabled", "loading"]),
      s.value ? r.$props.finishButtonHidden ? ie("", !0) : (E(), Y(C(vt), {
        key: 1,
        onClick: a[2] || (a[2] = (l) => r.$props.stepControls.finish()),
        loading: o.value
      }, {
        default: B(() => [
          te(ue(C(n)("finish")), 1)
        ]),
        _: 1
      }, 8, ["loading"])) : (E(), Y(C(vt), {
        key: 0,
        onClick: a[1] || (a[1] = (l) => r.$props.stepControls.nextStep()),
        disabled: r.$props.nextDisabled,
        loading: o.value
      }, {
        default: B(() => [
          te(ue(C(n)("next")), 1)
        ]),
        _: 1
      }, 8, ["disabled", "loading"]))
    ]));
  }
}), Ee = (e) => jt(e.hasError, e) || !1, sa = { class: "va-stepper__step-button__icon" }, aa = /* @__PURE__ */ V({
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
  setup(e, { emit: t }) {
    const n = e, o = ze(), s = c(() => Ee(n.step)), r = Ot("stepIndex"), a = c(() => s.value && n.modelValue === r.value), l = c(() => jt(n.step.isLoading) || !1), { getColor: i } = he(), u = c(() => i(s.value ? "danger" : n.color)), d = (g) => n.nextDisabled && g > n.modelValue, { t: f } = st(), h = It("va-stepper__step-button", () => ({
      active: n.modelValue >= r.value,
      disabled: n.step.disabled || d(r.value),
      "navigation-disabled": n.navigationDisabled,
      error: a.value
    }));
    ae(() => n.focus, () => {
      n.focus.trigger && G(() => {
        var g;
        return (g = o.value) == null ? void 0 : g.focus();
      });
    }, { deep: !0 });
    const y = c(() => ({
      tabindex: n.focus.stepIndex === r.value && !n.navigationDisabled ? 0 : void 0,
      "aria-disabled": n.step.disabled || d(r.value) ? !0 : void 0,
      "aria-current": n.modelValue === n.stepIndex ? f("step") : void 0
    }));
    return (g, v) => (E(), U("li", ye({
      ref_key: "stepElement",
      ref: o,
      class: ["va-stepper__step-button", C(h)],
      onClick: v[0] || (v[0] = (p) => !g.$props.navigationDisabled && g.$props.stepControls.setStep(C(r))),
      onKeyup: [
        v[1] || (v[1] = $e((p) => !g.$props.navigationDisabled && g.$props.stepControls.setStep(C(r)), ["enter"])),
        v[2] || (v[2] = $e((p) => !g.$props.navigationDisabled && g.$props.stepControls.setStep(C(r)), ["space"]))
      ]
    }, y.value, {
      style: `--va-stepper-color: ${String(u.value)}`
    }), [
      _("div", sa, [
        l.value ? (E(), Y(C(jn), {
          key: 0,
          color: "currentColor",
          indeterminate: "",
          size: "small"
        })) : e.step.icon ? (E(), Y(C(wt), {
          key: 1,
          name: e.step.icon,
          size: "1.3rem"
        }, null, 8, ["name"])) : (E(), U(pe, { key: 2 }, [
          te(ue(C(r) + 1), 1)
        ], 64))
      ]),
      te(" " + ue(e.step.label), 1)
    ], 16));
  }
}), la = { class: "va-stepper__step-content" }, ia = { class: "va-stepper__controls" }, ua = /* @__PURE__ */ V({
  name: "VaStepper",
  __name: "VaStepper",
  props: {
    ...Fs,
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
    ariaLabel: Rn("$t:progress"),
    linear: { type: Boolean, default: !1 },
    /** Hidden step shown when all steps complete */
    finishStep: { type: Object }
  },
  emits: ["update:modelValue", "finish", "update:steps"],
  setup(e, { expose: t, emit: n }) {
    const o = e, s = n, r = ze(), { valueComputed: a } = Ms(o, s, "modelValue"), l = c(() => o.finishStep ? [...o.steps, o.finishStep] : o.steps), i = (S) => o.finishStep ? S === l.value.length - 1 : !1, u = b({ trigger: !1, stepIndex: o.navigationDisabled ? -1 : o.modelValue }), { getColor: d } = he(), f = (S) => o.nextDisabledOnError && Ee(l.value[S]) ? !0 : o.nextDisabled, h = (S, O) => {
      for (; S >= 0 && S < l.value.length; ) {
        S += O;
        const T = l.value[S];
        if (!T)
          return;
        if (!T.disabled)
          return T;
      }
    }, y = (S, O) => {
      for (; S >= 0 && S < l.value.length; ) {
        S += O;
        const T = l.value[S];
        if (!T)
          return;
        if (Ee(T) === !0)
          return S;
      }
    }, g = async (S) => {
      var O;
      const T = l.value[S], ne = l.value[a.value], je = h(S, -1);
      if (T.disabled)
        return !1;
      if (o.linear && S < a.value)
        return !0;
      const P = y(a.value, 1);
      if (o.linear && P !== void 0 && P < S)
        return !1;
      let m;
      try {
        m = await ((O = ne.beforeLeave) == null ? void 0 : O.call(ne, ne, T));
      } catch (I) {
        throw new Error(`Error in beforeLeave function: ${I}`);
      }
      return !(m === !1 || (ne.completed === void 0 && (ne.completed = !0), o.linear && je && !je.completed) || o.linear && Ee(ne));
    }, v = async (S) => {
      await g(S) && (a.value = S);
    }, p = (S) => {
      o.navigationDisabled || (S === "next" ? w(1) : L(1));
    }, w = (S = 1) => {
      const O = u.value.stepIndex + S;
      if (!f(O)) {
        if (O < l.value.length) {
          if (l.value[O].disabled) {
            w(S + 1);
            return;
          }
          u.value.stepIndex = O, u.value.trigger = !0;
        } else
          for (let T = 0; T < l.value.length; T++)
            if (!l.value[T].disabled) {
              u.value.stepIndex = T, u.value.trigger = !0;
              break;
            }
      }
    }, L = (S = 1) => {
      const O = u.value.stepIndex - S;
      if (O >= 0) {
        if (l.value[O].disabled) {
          L(S + 1);
          return;
        }
        u.value.stepIndex = O, u.value.trigger = !0;
      } else
        for (let T = l.value.length - 1; T >= 0; T--)
          if (!l.value[T].disabled && !f(T)) {
            u.value.stepIndex = T, u.value.trigger = !0;
            break;
          }
    }, A = () => {
      requestAnimationFrame(() => {
        var S;
        (S = r.value) != null && S.contains(document.activeElement) || (u.value.stepIndex = o.modelValue, u.value.trigger = !1);
      });
    };
    ae(() => o.modelValue, () => {
      u.value.stepIndex = o.modelValue, u.value.trigger = !1;
    });
    const z = (S = 0) => {
      const O = a.value + 1 + S;
      l.value[O] && (l.value[O].disabled && z(S + 1), v(O));
    }, Z = (S = 0) => {
      const O = a.value - 1 - S;
      l.value[O] && (l.value[O].disabled && Z(S + 1), v(O));
    }, q = { setStep: v, nextStep: z, prevStep: Z, finish: async () => {
      await g(o.steps.length - 1) && s("finish");
    } }, re = (S, O) => ({
      ...q,
      focus: u,
      isActive: o.modelValue === O,
      isCompleted: o.modelValue > O,
      isLastStep: l.value.length - 1 === O,
      isNextStepDisabled: f(O),
      isPrevStepDisabled: O === 0,
      index: O,
      step: S,
      hasError: Ee(S)
    }), { tp: x } = st(), $ = () => {
      u.value.stepIndex = o.modelValue, u.value.trigger = !0;
    }, Q = c(() => ({
      role: "group",
      "aria-label": x(o.ariaLabel),
      "aria-orientation": o.vertical ? "vertical" : "horizontal"
    }));
    function ce(S) {
      return Ee(l.value[S]) ? "danger" : d(o.color);
    }
    return t({
      modelValue: a,
      focusedStep: u,
      getIterableSlotData: re,
      stepControls: q,
      nextStep: z,
      prevStep: Z,
      setStep: v,
      setFocus: p,
      completeStep: (S) => {
        const O = { ...l.value };
        S === !0 && (O[o.modelValue].hasError = !1), O[o.modelValue].completed = S ?? !0, s("update:steps", O);
      },
      setError: (S) => {
        const O = { ...l.value };
        O[o.modelValue].hasError = S ?? !0, O[o.modelValue].completed = !S, s("update:steps", O);
      }
    }), (S, O) => (E(), U("div", ye({
      class: ["va-stepper", { "va-stepper--vertical": S.$props.vertical }]
    }, Q.value), [
      _("ol", {
        class: Se(["va-stepper__navigation", { "va-stepper__navigation--vertical": S.$props.vertical }]),
        ref_key: "stepperNavigation",
        ref: r,
        onClick: $,
        onKeyup: [
          $e($, ["enter"]),
          $e($, ["space"]),
          O[0] || (O[0] = $e((T) => p("prev"), ["left"])),
          O[1] || (O[1] = $e((T) => p("next"), ["right"]))
        ],
        onFocusout: A
      }, [
        (E(!0), U(pe, null, et(l.value, (T, ne) => (E(), U(pe, {
          key: ne + T.label
        }, [
          i(ne) ? ie("", !0) : (E(), U(pe, { key: 0 }, [
            ne > 0 ? de(S.$slots, "divider", _e(ye({ key: 0 }, re(T, ne))), () => [
              _("span", {
                class: Se(["va-stepper__divider", { "va-stepper__divider--vertical": S.$props.vertical }]),
                "aria-hidden": "true"
              }, null, 2)
            ]) : ie("", !0),
            de(S.$slots, `step-button-${ne}`, _e(Fe(re(T, ne))), () => [
              k(aa, {
                stepIndex: ne,
                color: ce(ne),
                modelValue: C(a),
                nextDisabled: e.nextDisabled,
                step: T,
                stepControls: q,
                navigationDisabled: e.navigationDisabled,
                focus: u.value
              }, null, 8, ["stepIndex", "color", "modelValue", "nextDisabled", "step", "navigationDisabled", "focus"])
            ])
          ], 64))
        ], 64))), 128))
      ], 34),
      _("div", {
        class: Se(["va-stepper__step-content-wrapper", { "va-stepper__step-content-wrapper--vertical": S.$props.vertical }])
      }, [
        _("div", la, [
          de(S.$slots, `step-content-${i(C(a)) ? "finish" : C(a)}`, _e(Fe(re(l.value[C(a)], C(a)))))
        ]),
        _("div", ia, [
          de(S.$slots, "controls", _e(Fe(re(l.value[C(a)], C(a)))), () => [
            e.controlsHidden ? ie("", !0) : (E(), Y(ra, {
              key: 0,
              modelValue: C(a),
              nextDisabled: f(C(a)),
              steps: l.value,
              stepControls: q,
              finishButtonHidden: e.finishButtonHidden
            }, null, 8, ["modelValue", "nextDisabled", "steps", "finishButtonHidden"]))
          ])
        ])
      ], 2)
    ], 16));
  }
}), ca = De(ua), da = /* @__PURE__ */ V({
  __name: "Ellipsis",
  props: {
    lines: { default: 3 }
  },
  setup(e) {
    To((s) => ({
      b40395ae: n.value
    }));
    const t = e, n = c(() => t.lines * 23 + "px"), o = b(!1);
    return (s, r) => {
      const a = K("VaButton");
      return E(), U(pe, null, [
        _("div", {
          class: Se([{ expanded: o.value }, "aellipsis"])
        }, [
          de(s.$slots, "default", {}, void 0, !0)
        ], 2),
        k(a, {
          "hover-opacity": 0.4,
          class: "mr-6 mb-2",
          "hover-behavior": "opacity",
          preset: "secondary",
          size: "small",
          onClick: r[0] || (r[0] = (l) => o.value = !o.value)
        }, {
          default: B(() => [
            o.value ? (E(), U(pe, { key: 0 }, [
              te("less")
            ], 64)) : (E(), U(pe, { key: 1 }, [
              te("more")
            ], 64))
          ]),
          _: 1
        })
      ], 64);
    };
  }
}), at = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, pa = /* @__PURE__ */ at(da, [["__scopeId", "data-v-69727056"]]);
function Un() {
  const e = {};
  return e[N.WMS] = "#2c1f90", e[N.OGCSTA] = "#1f908c", e[N.XMLA] = "#45901f", e[N.CSV] = "#90301f", e[N.JSON] = "#7f1f90", {
    getColorForFormat: (n) => Object.keys(e).includes(n) ? e[n] : "#ccc"
  };
}
const fa = { class: "aflex small light" }, va = { class: "right" }, ma = { class: "left" }, ga = /* @__PURE__ */ V({
  __name: "SearchResultCard",
  props: {
    result: {}
  },
  setup(e) {
    const t = e, n = Un().getColorForFormat("<" + t.result.format.value + ">"), o = (s) => {
      const r = Object.entries(N).filter((a, l) => a[1] == "<" + s + ">");
      return r && r[0] ? r[0][0] : s;
    };
    return (s, r) => {
      const a = K("VaChip"), l = K("VaCardTitle"), i = K("VaCardContent"), u = K("VaCard");
      return E(), Y(u, { class: "card" }, {
        default: B(() => [
          k(l, null, {
            default: B(() => [
              k(a, {
                color: C(n),
                class: "pointer",
                size: "small"
              }, {
                default: B(() => [
                  te(ue(o(t.result.format.value)), 1)
                ]),
                _: 1
              }, 8, ["color"]),
              te(" " + ue(t.result.title.value), 1)
            ]),
            _: 1
          }),
          k(i, null, {
            default: B(() => [
              k(pa, { lines: 3 }, {
                default: B(() => [
                  te(ue(t.result.description.value), 1)
                ]),
                _: 1
              }),
              r[0] || (r[0] = _("br", null, null, -1)),
              _("div", fa, [
                _("div", va, ue(t.result.creator_name ? t.result.creator_name.value : ""), 1),
                _("div", ma, ue(t.result.date ? t.result.date.value : ""), 1)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), ya = /* @__PURE__ */ at(ga, [["__scopeId", "data-v-a0a9daed"]]), cn = (e, t) => {
  for (const n of Object.keys(t))
    e.on(n, t[n]);
}, Hn = (e) => {
  for (const t of Object.keys(e)) {
    const n = e[t];
    n && Ce(n.cancel) && n.cancel();
  }
}, ba = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), Ce = (e) => typeof e == "function", W = (e, t, n) => {
  for (const o in n) {
    const s = "set" + ba(o);
    e[s] ? ae(
      () => n[o],
      (r, a) => {
        e[s](r, a);
      }
    ) : t[s] && ae(
      () => n[o],
      (r) => {
        t[s](r);
      }
    );
  }
}, H = (e, t, n = {}) => {
  const o = { ...n };
  for (const s in e) {
    const r = t[s], a = e[s];
    r && (r && r.custom === !0 || a !== void 0 && (o[s] = a));
  }
  return o;
}, oe = (e) => {
  const t = {}, n = {};
  for (const o in e)
    if (o.startsWith("on") && !o.startsWith("onUpdate") && o !== "onReady") {
      const s = o.slice(2).toLocaleLowerCase();
      t[s] = e[o];
    } else
      n[o] = e[o];
  return { listeners: t, attrs: n };
}, ha = async (e) => {
  const t = await Promise.all([
    import("./marker-icon-2x-DVSLMKfE.js"),
    import("./marker-icon-DbhCZIpd.js"),
    import("./marker-shadow-ZZvxUwqf.js")
  ]);
  delete e.Default.prototype._getIconUrl, e.Default.mergeOptions({
    iconRetinaUrl: t[0].default,
    iconUrl: t[1].default,
    shadowUrl: t[2].default
  });
}, Je = (e) => {
  const t = b(
    (...o) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), n = (...o) => t.value(...o);
  return n.wrapped = t, ve(e, n), n;
}, Ze = (e, t) => e.wrapped.value = t, D = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, j = (e) => {
  const t = R(e);
  if (t === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return t;
}, X = Symbol(
  "useGlobalLeaflet"
), se = Symbol("addLayer"), lt = Symbol("removeLayer"), Ue = Symbol(
  "registerControl"
), qn = Symbol(
  "registerLayerControl"
), Wn = Symbol(
  "canSetParentHtml"
), Xn = Symbol("setParentHtml"), Kn = Symbol("setIcon"), Jn = Symbol("bindPopup"), Zn = Symbol("bindTooltip"), Yn = Symbol("unbindPopup"), Qn = Symbol("unbindTooltip"), He = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, qe = (e) => ({ options: e.options, methods: {} }), Te = {
  ...He,
  pane: {
    type: String
  },
  attribution: {
    type: String
  },
  name: {
    type: String,
    custom: !0
  },
  layerType: {
    type: String,
    custom: !0
  },
  visible: {
    type: Boolean,
    custom: !0,
    default: !0
  }
}, We = (e, t, n) => {
  const o = j(se), s = j(lt), { options: r, methods: a } = qe(e), l = H(
    e,
    Te,
    r
  ), i = () => o({ leafletObject: t.value }), u = () => s({ leafletObject: t.value }), d = {
    ...a,
    setAttribution(f) {
      u(), t.value.options.attribution = f, e.visible && i();
    },
    setName() {
      u(), e.visible && i();
    },
    setLayerType() {
      u(), e.visible && i();
    },
    setVisible(f) {
      t.value && (f ? i() : u());
    },
    bindPopup(f) {
      if (!t.value || !Ce(t.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      t.value.bindPopup(f);
    },
    bindTooltip(f) {
      if (!t.value || !Ce(t.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      t.value.bindTooltip(f);
    },
    unbindTooltip() {
      t.value && (Ce(t.value.closeTooltip) && t.value.closeTooltip(), Ce(t.value.unbindTooltip) && t.value.unbindTooltip());
    },
    unbindPopup() {
      t.value && (Ce(t.value.closePopup) && t.value.closePopup(), Ce(t.value.unbindPopup) && t.value.unbindPopup());
    },
    updateVisibleProp(f) {
      n.emit("update:visible", f);
    }
  };
  return ve(Jn, d.bindPopup), ve(Zn, d.bindTooltip), ve(Yn, d.unbindPopup), ve(Qn, d.unbindTooltip), Pt(() => {
    d.unbindPopup(), d.unbindTooltip(), u();
  }), { options: l, methods: d };
}, ge = (e, t) => {
  if (e && t.default)
    return we("div", { style: { display: "none" } }, t.default());
}, eo = {
  ...Te,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Ca = (e, t, n) => {
  const { options: o, methods: s } = We(
    e,
    t,
    n
  );
  return { options: H(
    e,
    eo,
    o
  ), methods: s };
}, Nt = {
  ...eo,
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
}, to = (e, t, n) => {
  const { options: o, methods: s } = Ca(e, t, n), r = H(
    e,
    Nt,
    o
  ), a = j(lt), l = {
    ...s,
    setStroke(i) {
      t.value.setStyle({ stroke: i });
    },
    setColor(i) {
      t.value.setStyle({ color: i });
    },
    setWeight(i) {
      t.value.setStyle({ weight: i });
    },
    setOpacity(i) {
      t.value.setStyle({ opacity: i });
    },
    setLineCap(i) {
      t.value.setStyle({ lineCap: i });
    },
    setLineJoin(i) {
      t.value.setStyle({ lineJoin: i });
    },
    setDashArray(i) {
      t.value.setStyle({ dashArray: i });
    },
    setDashOffset(i) {
      t.value.setStyle({ dashOffset: i });
    },
    setFill(i) {
      t.value.setStyle({ fill: i });
    },
    setFillColor(i) {
      t.value.setStyle({ fillColor: i });
    },
    setFillOpacity(i) {
      t.value.setStyle({ fillOpacity: i });
    },
    setFillRule(i) {
      t.value.setStyle({ fillRule: i });
    },
    setClassName(i) {
      t.value.setStyle({ className: i });
    }
  };
  return Ve(() => {
    a({ leafletObject: t.value });
  }), { options: r, methods: l };
}, Ft = {
  ...Nt,
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    required: !0,
    custom: !0
  }
}, no = (e, t, n) => {
  const { options: o, methods: s } = to(
    e,
    t,
    n
  ), r = H(
    e,
    Ft,
    o
  ), a = {
    ...s,
    setRadius(l) {
      t.value.setRadius(l);
    },
    setLatLng(l) {
      t.value.setLatLng(l);
    }
  };
  return { options: r, methods: a };
}, oo = {
  ...Ft,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, Sa = (e, t, n) => {
  const { options: o, methods: s } = no(e, t, n), r = H(
    e,
    oo,
    o
  ), a = {
    ...s
  };
  return { options: r, methods: a };
};
V({
  name: "LCircle",
  props: oo,
  setup(e, t) {
    const n = b(), o = b(!1), s = R(X), r = j(se), { options: a, methods: l } = Sa(e, n, t);
    return F(async () => {
      const { circle: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(i(e.latLng, a));
      const { listeners: u } = oe(t.attrs);
      n.value.on(u), W(l, n.value, e), r({
        ...e,
        ...l,
        leafletObject: n.value
      }), o.value = !0, G(() => t.emit("ready", n.value));
    }), { ready: o, leafletObject: n };
  },
  render() {
    return ge(this.ready, this.$slots);
  }
});
V({
  name: "LCircleMarker",
  props: Ft,
  setup(e, t) {
    const n = b(), o = b(!1), s = R(X), r = j(se), { options: a, methods: l } = no(
      e,
      n,
      t
    );
    return F(async () => {
      const { circleMarker: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(
        i(e.latLng, a)
      );
      const { listeners: u } = oe(t.attrs);
      n.value.on(u), W(l, n.value, e), r({
        ...e,
        ...l,
        leafletObject: n.value
      }), o.value = !0, G(() => t.emit("ready", n.value));
    }), { ready: o, leafletObject: n };
  },
  render() {
    return ge(this.ready, this.$slots);
  }
});
const Ie = {
  ...He,
  position: {
    type: String
  }
}, Xe = (e, t) => {
  const { options: n, methods: o } = qe(e), s = H(
    e,
    Ie,
    n
  ), r = {
    ...o,
    setPosition(a) {
      t.value && t.value.setPosition(a);
    }
  };
  return Pt(() => {
    t.value && t.value.remove();
  }), { options: s, methods: r };
}, wa = (e) => e.default ? we("div", { ref: "root" }, e.default()) : null;
V({
  name: "LControl",
  props: {
    ...Ie,
    disableClickPropagation: {
      type: Boolean,
      custom: !0,
      default: !0
    },
    disableScrollPropagation: {
      type: Boolean,
      custom: !0,
      default: !1
    }
  },
  setup(e, t) {
    const n = b(), o = b(), s = R(X), r = j(Ue), { options: a, methods: l } = Xe(e, n);
    return F(async () => {
      const { Control: i, DomEvent: u } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js"), d = i.extend({
        onAdd() {
          return o.value;
        }
      });
      n.value = J(new d(a)), W(l, n.value, e), r({ leafletObject: n.value }), e.disableClickPropagation && o.value && u.disableClickPropagation(o.value), e.disableScrollPropagation && o.value && u.disableScrollPropagation(o.value), G(() => t.emit("ready", n.value));
    }), { root: o, leafletObject: n };
  },
  render() {
    return wa(this.$slots);
  }
});
const ro = {
  ...Ie,
  prefix: {
    type: String
  }
}, Oa = (e, t) => {
  const { options: n, methods: o } = Xe(
    e,
    t
  ), s = H(
    e,
    ro,
    n
  ), r = {
    ...o,
    setPrefix(a) {
      t.value.setPrefix(a);
    }
  };
  return { options: s, methods: r };
};
V({
  name: "LControlAttribution",
  props: ro,
  setup(e, t) {
    const n = b(), o = R(X), s = j(Ue), { options: r, methods: a } = Oa(e, n);
    return F(async () => {
      const { control: l } = o ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(
        l.attribution(r)
      ), W(a, n.value, e), s({ leafletObject: n.value }), G(() => t.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const so = {
  ...Ie,
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
}, _a = (e, t) => {
  const { options: n } = Xe(e, t);
  return { options: H(
    e,
    so,
    n
  ), methods: {
    addLayer(o) {
      o.layerType === "base" ? t.value.addBaseLayer(o.leafletObject, o.name) : o.layerType === "overlay" && t.value.addOverlay(o.leafletObject, o.name);
    },
    removeLayer(o) {
      t.value.removeLayer(o.leafletObject);
    }
  } };
};
V({
  name: "LControlLayers",
  props: so,
  setup(e, t) {
    const n = b(), o = R(X), s = j(qn), { options: r, methods: a } = _a(e, n);
    return F(async () => {
      const { control: l } = o ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(
        l.layers(void 0, void 0, r)
      ), W(a, n.value, e), s({
        ...e,
        ...a,
        leafletObject: n.value
      }), G(() => t.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const ao = {
  ...Ie,
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
}, xa = (e, t) => {
  const { options: n, methods: o } = Xe(
    e,
    t
  );
  return { options: H(
    e,
    ao,
    n
  ), methods: o };
};
V({
  name: "LControlScale",
  props: ao,
  setup(e, t) {
    const n = b(), o = R(X), s = j(Ue), { options: r, methods: a } = xa(e, n);
    return F(async () => {
      const { control: l } = o ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(l.scale(r)), W(a, n.value, e), s({ leafletObject: n.value }), G(() => t.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const lo = {
  ...Ie,
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
}, La = (e, t) => {
  const { options: n, methods: o } = Xe(
    e,
    t
  );
  return { options: H(
    e,
    lo,
    n
  ), methods: o };
};
V({
  name: "LControlZoom",
  props: lo,
  setup(e, t) {
    const n = b(), o = R(X), s = j(Ue), { options: r, methods: a } = La(e, n);
    return F(async () => {
      const { control: l } = o ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(l.zoom(r)), W(a, n.value, e), s({ leafletObject: n.value }), G(() => t.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const it = {
  ...Te
}, Mt = (e, t, n) => {
  const { options: o, methods: s } = We(
    e,
    t,
    n
  ), r = H(
    e,
    it,
    o
  ), a = {
    ...s,
    addLayer(l) {
      t.value.addLayer(l.leafletObject);
    },
    removeLayer(l) {
      t.value.removeLayer(l.leafletObject);
    }
  };
  return ve(se, a.addLayer), ve(lt, a.removeLayer), { options: r, methods: a };
}, io = {
  ...it
}, Pa = (e, t, n) => {
  const { options: o, methods: s } = Mt(
    e,
    t,
    n
  ), r = H(
    e,
    io,
    o
  ), a = {
    ...s
  };
  return { options: r, methods: a };
};
V({
  props: io,
  setup(e, t) {
    const n = b(), o = b(!1), s = R(X), r = j(se), { methods: a, options: l } = Pa(
      e,
      n,
      t
    );
    return F(async () => {
      const { featureGroup: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(
        i(void 0, l)
      );
      const { listeners: u } = oe(t.attrs);
      n.value.on(u), W(a, n.value, e), r({
        ...e,
        ...a,
        leafletObject: n.value
      }), o.value = !0, G(() => t.emit("ready", n.value));
    }), { ready: o, leafletObject: n };
  },
  render() {
    return ge(this.ready, this.$slots);
  }
});
const uo = {
  ...it,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, Ea = (e, t, n) => {
  const { options: o, methods: s } = Mt(
    e,
    t,
    n
  ), r = H(
    e,
    uo,
    o
  );
  Object.prototype.hasOwnProperty.call(e, "optionsStyle") && (r.style = e.optionsStyle);
  const a = {
    ...s,
    setGeojson(l) {
      t.value.clearLayers(), t.value.addData(l);
    },
    setOptionsStyle(l) {
      t.value.setStyle(l);
    },
    getGeoJSONData() {
      return t.value.toGeoJSON();
    },
    getBounds() {
      return t.value.getBounds();
    }
  };
  return { options: r, methods: a };
};
V({
  props: uo,
  setup(e, t) {
    const n = b(), o = b(!1), s = R(X), r = j(se), { methods: a, options: l } = Ea(e, n, t);
    return F(async () => {
      const { geoJSON: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(i(e.geojson, l));
      const { listeners: u } = oe(t.attrs);
      n.value.on(u), W(a, n.value, e), r({
        ...e,
        ...a,
        leafletObject: n.value
      }), o.value = !0, G(() => t.emit("ready", n.value));
    }), { ready: o, leafletObject: n };
  },
  render() {
    return ge(this.ready, this.$slots);
  }
});
const zt = {
  ...Te,
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
}, co = (e, t, n) => {
  const { options: o, methods: s } = We(
    e,
    t,
    n
  ), r = H(
    e,
    zt,
    o
  ), a = {
    ...s,
    setTileComponent() {
      var l;
      (l = t.value) == null || l.redraw();
    }
  };
  return Pt(() => {
    t.value.off();
  }), { options: r, methods: a };
}, $a = (e, t, n, o) => e.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), n.setOptions(this, s);
  },
  createTile(s) {
    const r = this._tileCoordsToKey(s);
    this.tileComponents[r] = t.create("div");
    const a = we({ setup: o, props: ["coords"] }, { coords: s });
    return Ye(a, this.tileComponents[r]), this.tileComponents[r];
  },
  _unloadTile(s) {
    const r = this._tileCoordsToKey(s.coords);
    this.tileComponents[r] && (this.tileComponents[r].innerHTML = "", this.tileComponents[r] = void 0);
  }
});
V({
  props: {
    ...zt,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(e, t) {
    const n = b(), o = b(null), s = b(!1), r = R(X), a = j(se), { options: l, methods: i } = co(e, n, t);
    return F(async () => {
      const { GridLayer: u, DomUtil: d, Util: f } = r ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js"), h = $a(
        u,
        d,
        f,
        e.childRender
      );
      n.value = J(new h(l));
      const { listeners: y } = oe(t.attrs);
      n.value.on(y), W(i, n.value, e), a({
        ...e,
        ...i,
        leafletObject: n.value
      }), s.value = !0, G(() => t.emit("ready", n.value));
    }), { root: o, ready: s, leafletObject: n };
  },
  render() {
    return this.ready ? we("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const dn = {
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
V({
  name: "LIcon",
  props: {
    ...dn,
    ...He
  },
  setup(e, t) {
    const n = b(), o = R(X), s = j(Wn), r = j(Xn), a = j(Kn);
    let l, i, u, d, f;
    const h = (p, w, L) => {
      const A = p && p.innerHTML;
      if (!w) {
        L && f && s() && r(A);
        return;
      }
      const { listeners: z } = oe(t.attrs);
      f && i(f, z);
      const { options: Z } = qe(e), ee = H(
        e,
        dn,
        Z
      );
      A && (ee.html = A), f = ee.html ? u(ee) : d(ee), l(f, z), a(f);
    }, y = () => {
      G(() => h(n.value, !0, !1));
    }, g = () => {
      G(() => h(n.value, !1, !0));
    }, v = {
      setIconUrl: y,
      setIconRetinaUrl: y,
      setIconSize: y,
      setIconAnchor: y,
      setPopupAnchor: y,
      setTooltipAnchor: y,
      setShadowUrl: y,
      setShadowRetinaUrl: y,
      setShadowAnchor: y,
      setBgPos: y,
      setClassName: y,
      setHtml: y
    };
    return F(async () => {
      const {
        DomEvent: p,
        divIcon: w,
        icon: L
      } = o ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      l = p.on, i = p.off, u = w, d = L, W(v, {}, e), new MutationObserver(g).observe(n.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), y();
    }), { root: n };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return we("div", { ref: "root" }, e);
  }
});
const po = {
  ...Te,
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
    required: !0,
    custom: !0
  },
  bounds: {
    type: [Array, Object],
    required: !0,
    custom: !0
  }
}, ka = (e, t, n) => {
  const { options: o, methods: s } = We(
    e,
    t,
    n
  ), r = H(
    e,
    po,
    o
  ), a = {
    ...s,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(l) {
      return t.value.setOpacity(l);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(l) {
      return t.value.setUrl(l);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(l) {
      return t.value.setBounds(l);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return t.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return t.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return t.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return t.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(l) {
      return t.value.setZIndex(l);
    }
  };
  return { options: r, methods: a };
};
V({
  name: "LImageOverlay",
  props: po,
  setup(e, t) {
    const n = b(), o = b(!1), s = R(X), r = j(se), { options: a, methods: l } = ka(
      e,
      n,
      t
    );
    return F(async () => {
      const { imageOverlay: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(
        i(e.url, e.bounds, a)
      );
      const { listeners: u } = oe(t.attrs);
      n.value.on(u), W(l, n.value, e), r({
        ...e,
        ...l,
        leafletObject: n.value
      }), o.value = !0, G(() => t.emit("ready", n.value));
    }), { ready: o, leafletObject: n };
  },
  render() {
    return ge(this.ready, this.$slots);
  }
});
V({
  props: it,
  setup(e, t) {
    const n = b(), o = b(!1), s = R(X), r = j(se), { methods: a } = Mt(e, n, t);
    return F(async () => {
      const { layerGroup: l } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(
        l(void 0, e.options)
      );
      const { listeners: i } = oe(t.attrs);
      n.value.on(i), W(a, n.value, e), r({
        ...e,
        ...a,
        leafletObject: n.value
      }), o.value = !0, G(() => t.emit("ready", n.value));
    }), { ready: o, leafletObject: n };
  },
  render() {
    return ge(this.ready, this.$slots);
  }
});
function fo(e, t, n) {
  var o, s, r;
  t === void 0 && (t = 50), n === void 0 && (n = {});
  var a = (o = n.isImmediate) != null && o, l = (s = n.callback) != null && s, i = n.maxWait, u = Date.now(), d = [];
  function f() {
    if (i !== void 0) {
      var y = Date.now() - u;
      if (y + t >= i)
        return i - y;
    }
    return t;
  }
  var h = function() {
    var y = [].slice.call(arguments), g = this;
    return new Promise(function(v, p) {
      var w = a && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !a) {
          var A = e.apply(g, y);
          l && l(A), d.forEach(function(z) {
            return (0, z.resolve)(A);
          }), d = [];
        }
      }, f()), w) {
        var L = e.apply(g, y);
        return l && l(L), v(L);
      }
      d.push({ resolve: v, reject: p });
    });
  };
  return h.cancel = function(y) {
    r !== void 0 && clearTimeout(r), d.forEach(function(g) {
      return (0, g.reject)(y);
    }), d = [];
  }, h;
}
const pn = {
  ...He,
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
    default: !0,
    custom: !0
  }
}, Ba = V({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: pn,
  setup(e, t) {
    const n = b(), o = xe({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = qe(e), r = H(
      e,
      pn,
      s
    ), { listeners: a, attrs: l } = oe(t.attrs), i = Je(se), u = Je(lt), d = Je(Ue), f = Je(
      qn
    );
    ve(X, e.useGlobalLeaflet);
    const h = c(() => {
      const w = {};
      return e.noBlockingAnimations && (w.animate = !1), w;
    }), y = c(() => {
      const w = h.value;
      return e.padding && (w.padding = e.padding), e.paddingTopLeft && (w.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (w.paddingBottomRight = e.paddingBottomRight), w;
    }), g = {
      moveend: fo((w) => {
        o.leafletRef && (t.emit("update:zoom", o.leafletRef.getZoom()), t.emit("update:center", o.leafletRef.getCenter()), t.emit("update:bounds", o.leafletRef.getBounds()));
      }),
      overlayadd(w) {
        const L = o.layersInControl.find((A) => A.name === w.name);
        L && L.updateVisibleProp(!0);
      },
      overlayremove(w) {
        const L = o.layersInControl.find((A) => A.name === w.name);
        L && L.updateVisibleProp(!1);
      }
    };
    F(async () => {
      e.useGlobalLeaflet && (D.L = D.L || await import("./leaflet-src-BDi_6Owi.js").then((x) => x.l));
      const { map: w, CRS: L, Icon: A, latLngBounds: z, latLng: Z, stamp: ee } = e.useGlobalLeaflet ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (x) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${x.message}`
        );
      }
      await ha(A);
      const q = typeof r.crs == "string" ? L[r.crs] : r.crs;
      r.crs = q || L.EPSG3857;
      const re = {
        addLayer(x) {
          x.layerType !== void 0 && (o.layerControl === void 0 ? o.layersToAdd.push(x) : o.layersInControl.find(
            ($) => ee($.leafletObject) === ee(x.leafletObject)
          ) || (o.layerControl.addLayer(x), o.layersInControl.push(x))), x.visible !== !1 && o.leafletRef.addLayer(x.leafletObject);
        },
        removeLayer(x) {
          x.layerType !== void 0 && (o.layerControl === void 0 ? o.layersToAdd = o.layersToAdd.filter(
            ($) => $.name !== x.name
          ) : (o.layerControl.removeLayer(x.leafletObject), o.layersInControl = o.layersInControl.filter(
            ($) => ee($.leafletObject) !== ee(x.leafletObject)
          ))), o.leafletRef.removeLayer(x.leafletObject);
        },
        registerLayerControl(x) {
          o.layerControl = x, o.layersToAdd.forEach(($) => {
            o.layerControl.addLayer($);
          }), o.layersToAdd = [], d(x);
        },
        registerControl(x) {
          o.leafletRef.addControl(x.leafletObject);
        },
        setZoom(x) {
          const $ = o.leafletRef.getZoom();
          x !== $ && o.leafletRef.setZoom(x, h.value);
        },
        setCrs(x) {
          const $ = o.leafletRef.getBounds();
          o.leafletRef.options.crs = x, o.leafletRef.fitBounds($, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(x) {
          o.leafletRef.fitBounds(x, y.value);
        },
        setBounds(x) {
          if (!x)
            return;
          const $ = z(x);
          $.isValid() && !(o.lastSetBounds || o.leafletRef.getBounds()).equals($, 0) && (o.lastSetBounds = $, o.leafletRef.fitBounds($));
        },
        setCenter(x) {
          if (x == null)
            return;
          const $ = Z(x), Q = o.lastSetCenter || o.leafletRef.getCenter();
          (Q.lat !== $.lat || Q.lng !== $.lng) && (o.lastSetCenter = $, o.leafletRef.panTo($, h.value));
        }
      };
      Ze(i, re.addLayer), Ze(u, re.removeLayer), Ze(d, re.registerControl), Ze(f, re.registerLayerControl), o.leafletRef = J(w(n.value, r)), W(re, o.leafletRef, e), cn(o.leafletRef, g), cn(o.leafletRef, a), o.ready = !0, G(() => t.emit("ready", o.leafletRef));
    }), Ve(() => {
      Hn(g), o.leafletRef && (o.leafletRef.off(), o.leafletRef.remove());
    });
    const v = c(() => o.leafletRef), p = c(() => o.ready);
    return { root: n, ready: p, leafletObject: v, attrs: l };
  },
  render({ attrs: e }) {
    return e.style || (e.style = {}), e.style.width || (e.style.width = "100%"), e.style.height || (e.style.height = "100%"), we(
      "div",
      {
        ...e,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), Va = ["Symbol(Comment)", "Symbol(Text)"], Aa = ["LTooltip", "LPopup"], vo = {
  ...Te,
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
    custom: !0,
    required: !0
  }
}, Ra = (e, t, n) => {
  const { options: o, methods: s } = We(
    e,
    t,
    n
  ), r = H(
    e,
    vo,
    o
  ), a = {
    ...s,
    setDraggable(l) {
      t.value.dragging && (l ? t.value.dragging.enable() : t.value.dragging.disable());
    },
    latLngSync(l) {
      n.emit("update:latLng", l.latlng), n.emit("update:lat-lng", l.latlng);
    },
    setLatLng(l) {
      if (l != null && t.value) {
        const i = t.value.getLatLng();
        (!i || !i.equals(l)) && t.value.setLatLng(l);
      }
    }
  };
  return { options: r, methods: a };
}, Ta = (e, t) => {
  const n = t.slots.default && t.slots.default();
  return n && n.length && n.some(Ia);
};
function Ia(e) {
  return !(Va.includes(e.type.toString()) || Aa.includes(e.type.name));
}
V({
  name: "LMarker",
  props: vo,
  setup(e, t) {
    const n = b(), o = b(!1), s = R(X), r = j(se);
    ve(
      Wn,
      () => {
        var u;
        return !!((u = n.value) != null && u.getElement());
      }
    ), ve(Xn, (u) => {
      var d, f;
      const h = Ce((d = n.value) == null ? void 0 : d.getElement) && ((f = n.value) == null ? void 0 : f.getElement());
      h && (h.innerHTML = u);
    }), ve(
      Kn,
      (u) => {
        var d;
        return ((d = n.value) == null ? void 0 : d.setIcon) && n.value.setIcon(u);
      }
    );
    const { options: a, methods: l } = Ra(e, n, t), i = {
      moveHandler: fo(l.latLngSync)
    };
    return F(async () => {
      const { marker: u, divIcon: d } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      Ta(a, t) && (a.icon = d({ className: "" })), n.value = J(u(e.latLng, a));
      const { listeners: f } = oe(t.attrs);
      n.value.on(f), n.value.on("move", i.moveHandler), W(l, n.value, e), r({
        ...e,
        ...l,
        leafletObject: n.value
      }), o.value = !0, G(() => t.emit("ready", n.value));
    }), Ve(() => Hn(i)), { ready: o, leafletObject: n };
  },
  render() {
    return ge(this.ready, this.$slots);
  }
});
const Dt = {
  ...Nt,
  smoothFactor: {
    type: Number
  },
  noClip: {
    type: Boolean,
    default: void 0
  },
  latLngs: {
    type: Array,
    required: !0,
    custom: !0
  }
}, mo = (e, t, n) => {
  const { options: o, methods: s } = to(
    e,
    t,
    n
  ), r = H(
    e,
    Dt,
    o
  ), a = {
    ...s,
    setSmoothFactor(l) {
      t.value.setStyle({ smoothFactor: l });
    },
    setNoClip(l) {
      t.value.setStyle({ noClip: l });
    },
    addLatLng(l) {
      t.value.addLatLng(l);
    }
  };
  return { options: r, methods: a };
}, ot = {
  ...Dt
}, go = (e, t, n) => {
  const { options: o, methods: s } = mo(
    e,
    t,
    n
  ), r = H(
    e,
    ot,
    o
  ), a = {
    ...s,
    toGeoJSON(l) {
      return t.value.toGeoJSON(l);
    }
  };
  return { options: r, methods: a };
};
V({
  name: "LPolygon",
  props: ot,
  setup(e, t) {
    const n = b(), o = b(!1), s = R(X), r = j(se), { options: a, methods: l } = go(e, n, t);
    return F(async () => {
      const { polygon: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(i(e.latLngs, a));
      const { listeners: u } = oe(t.attrs);
      n.value.on(u), W(l, n.value, e), r({
        ...e,
        ...l,
        leafletObject: n.value
      }), o.value = !0, G(() => t.emit("ready", n.value));
    }), { ready: o, leafletObject: n };
  },
  render() {
    return ge(this.ready, this.$slots);
  }
});
V({
  name: "LPolyline",
  props: Dt,
  setup(e, t) {
    const n = b(), o = b(!1), s = R(X), r = j(se), { options: a, methods: l } = mo(e, n, t);
    return F(async () => {
      const { polyline: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(
        i(e.latLngs, a)
      );
      const { listeners: u } = oe(t.attrs);
      n.value.on(u), W(l, n.value, e), r({
        ...e,
        ...l,
        leafletObject: n.value
      }), o.value = !0, G(() => t.emit("ready", n.value));
    }), { ready: o, leafletObject: n };
  },
  render() {
    return ge(this.ready, this.$slots);
  }
});
const yo = {
  ...He,
  content: {
    type: String,
    default: null
  }
}, bo = (e, t) => {
  const { options: n, methods: o } = qe(e), s = {
    ...o,
    setContent(r) {
      t.value && r !== null && r !== void 0 && t.value.setContent(r);
    }
  };
  return { options: n, methods: s };
}, ho = (e) => e.default ? we("div", { ref: "root" }, e.default()) : null, ja = {
  ...yo,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, Na = (e, t) => {
  const { options: n, methods: o } = bo(e, t);
  return { options: n, methods: o };
};
V({
  name: "LPopup",
  props: ja,
  setup(e, t) {
    const n = b(), o = b(null), s = R(X), r = j(Jn), a = j(Yn), { options: l, methods: i } = Na(e, n);
    return F(async () => {
      const { popup: u } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(u(l)), e.latLng !== void 0 && n.value.setLatLng(e.latLng), W(i, n.value, e);
      const { listeners: d } = oe(t.attrs);
      n.value.on(d), n.value.setContent(e.content || o.value || ""), r(n.value), G(() => t.emit("ready", n.value));
    }), Ve(() => {
      a();
    }), { root: o, leafletObject: n };
  },
  render() {
    return ho(this.$slots);
  }
});
const Co = {
  ...ot,
  latLngs: {
    ...ot.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, Fa = (e, t, n) => {
  const { options: o, methods: s } = go(
    e,
    t,
    n
  ), r = H(
    e,
    Co,
    o
  ), a = {
    ...s,
    setBounds(l) {
      t.value.setBounds(l);
    },
    setLatLngs(l) {
      t.value.setBounds(l);
    }
  };
  return { options: r, methods: a };
};
V({
  name: "LRectangle",
  props: Co,
  setup(e, t) {
    const n = b(), o = b(!1), s = R(X), r = j(se), { options: a, methods: l } = Fa(e, n, t);
    return F(async () => {
      const { rectangle: i, latLngBounds: u } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js"), d = e.bounds ? u(e.bounds) : u(e.latLngs || []);
      n.value = J(i(d, a));
      const { listeners: f } = oe(t.attrs);
      n.value.on(f), W(l, n.value, e), r({
        ...e,
        ...l,
        leafletObject: n.value
      }), o.value = !0, G(() => t.emit("ready", n.value));
    }), { ready: o, leafletObject: n };
  },
  render() {
    return ge(this.ready, this.$slots);
  }
});
const Gt = {
  ...zt,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (e) => typeof e == "string" ? !0 : Array.isArray(e) ? e.every((t) => typeof t == "string") : !1
  },
  detectRetina: {
    type: Boolean,
    default: void 0
  },
  url: {
    type: String,
    required: !0,
    custom: !0
  }
}, So = (e, t, n) => {
  const { options: o, methods: s } = co(e, t, n), r = H(
    e,
    Gt,
    o
  ), a = {
    ...s
  };
  return { options: r, methods: a };
}, Ma = V({
  props: Gt,
  setup(e, t) {
    const n = b(), o = R(X), s = j(se), { options: r, methods: a } = So(e, n, t);
    return F(async () => {
      const { tileLayer: l } = o ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(l(e.url, r));
      const { listeners: i } = oe(t.attrs);
      n.value.on(i), W(a, n.value, e), s({
        ...e,
        ...a,
        leafletObject: n.value
      }), G(() => t.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
}), za = {
  ...yo
}, Da = (e, t) => {
  const { options: n, methods: o } = bo(e, t), s = j(Qn);
  return Ve(() => {
    s();
  }), { options: n, methods: o };
};
V({
  name: "LTooltip",
  props: za,
  setup(e, t) {
    const n = b(), o = b(null), s = R(X), r = j(Zn), { options: a, methods: l } = Da(e, n);
    return F(async () => {
      const { tooltip: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(i(a)), W(l, n.value, e);
      const { listeners: u } = oe(t.attrs);
      n.value.on(u), n.value.setContent(e.content || o.value || ""), r(n.value), G(() => t.emit("ready", n.value));
    }), { root: o, leafletObject: n };
  },
  render() {
    return ho(this.$slots);
  }
});
const wo = {
  ...Gt,
  layers: {
    type: String,
    required: !0
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
}, Ga = (e, t, n) => {
  const { options: o, methods: s } = So(e, t, n);
  return {
    options: H(
      e,
      wo,
      o
    ),
    methods: {
      ...s
    }
  };
};
V({
  props: wo,
  setup(e, t) {
    const n = b(), o = R(X), s = j(se), { options: r, methods: a } = Ga(
      e,
      n,
      t
    );
    return F(async () => {
      const { tileLayer: l } = o ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = J(
        l.wms(e.url, r)
      );
      const { listeners: i } = oe(t.attrs);
      n.value.on(i), W(a, n.value, e), s({
        ...e,
        ...a,
        leafletObject: n.value
      }), G(() => t.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const Ua = { class: "line" }, Ha = { class: "right" }, qa = { class: "content" }, Wa = { class: "list_of_formats" }, Xa = { class: "line" }, Ka = { class: "right" }, Ja = { class: "content" }, Za = { class: "map" }, Ya = /* @__PURE__ */ V({
  __name: "FilterModal",
  props: {
    modelValue: {
      default: xe([
        { formats: {} },
        { mapSection: {} }
      ])
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const n = b(!1);
    t({
      run: () => {
        n.value = !n.value;
      }
    });
    const s = Un().getColorForFormat, r = Io(e, "modelValue"), a = b([
      { name: "OGC", key: N.WMS, color: s(N.WMS), active: !0 },
      { name: "SensorThings", key: N.OGCSTA, color: s(N.OGCSTA), active: !0 },
      { name: "XMLA", key: N.XMLA, color: s(N.XMLA), active: !0 },
      { name: "CSV", key: N.CSV, color: s(N.CSV), active: !0 },
      { name: "JSON", key: N.JSON, color: s(N.JSON), active: !0 }
    ]), l = b(!1), i = b(null), u = xe({
      baseMapUrl: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
      zoom: 14,
      attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      center: [50.93115286, 11.60392726],
      map_filter_on: !1
    }), d = () => {
      const g = r.value?.find((p) => p.mapSection), v = r.value?.find((p) => p.formats);
      if (g) {
        u.map_filter_on = !0;
        try {
          i.value ?? {}.leafletObject.fitBounds(g.mapSection);
        } catch {
        }
      }
      v && (l.value = !0);
    }, f = () => {
      let g = r.value?.find((v) => v.mapSection);
      g || (g = { mapSection: {} }, r.value.push(g)), g.mapSection = i.value ?? {}.leafletObject.getBounds();
    };
    ae(() => u.map_filter_on, (g) => {
      const v = r.value?.find((p) => p.mapSection);
      if (!g && v) {
        const p = r.value.indexOf(v);
        p != -1 && r.value.splice(p);
      }
    });
    const h = b(!1);
    ae(l, (g) => {
      const v = r.value?.find((p) => p.formats);
      if (h.value) {
        h.value = !1;
        return;
      }
      if (v?.formats)
        if (g)
          a.value.forEach((p) => p.active = !1), v.formats.forEach((p) => {
            a.value.findLast((w) => w.key == p).active = !0;
          });
        else {
          const p = r.value.indexOf(v);
          p != -1 && r.value.splice(p), a.value.forEach((w) => w.active = !0);
        }
    });
    const y = (g) => {
      let v = r.value?.find((p) => p.formats);
      if (v || (v = { formats: [] }, r.value.push(v)), l.value) {
        g.active = !g.active;
        const p = v.formats.indexOf(g.key);
        p == -1 ? v.formats?.push(g.key) : v.formats?.splice(p), v.formats.length == 0 && (l.value = !1);
      } else
        h.value = !0, a.value.forEach((p) => p.active = !1), g.active = !0, v.formats = [g.key], l.value = !0;
    };
    return (g, v) => {
      const p = K("va-button"), w = K("VaSwitch"), L = K("va-divider"), A = K("VaChip"), z = K("va-card-content"), Z = K("va-modal");
      return E(), Y(Z, {
        modelValue: n.value,
        class: "filterbox",
        "hide-default-actions": "",
        "no-padding": "",
        onOpen: d
      }, {
        header: B(() => [...v[4] || (v[4] = [
          _("h3", { class: "title" }, "Filter", -1)
        ])]),
        default: B(({ ok: ee }) => [
          k(p, {
            class: "mr-1 mb-1 close",
            preset: "secondary",
            style: { position: "absolute", right: "0", top: "0" },
            onClick: v[0] || (v[0] = () => {
              n.value = !1;
            })
          }, {
            default: B(() => [...v[5] || (v[5] = [
              te(" x ", -1)
            ])]),
            _: 1
          }),
          k(z, null, {
            default: B(() => [
              v[8] || (v[8] = _("div", {
                class: "spacer",
                style: { height: "25px" }
              }, null, -1)),
              _("div", Ua, [
                v[6] || (v[6] = _("div", { class: "va-collapse__header__text left" }, "Format", -1)),
                _("div", Ha, [
                  k(w, {
                    modelValue: l.value,
                    "onUpdate:modelValue": v[1] || (v[1] = (q) => l.value = q),
                    "false-inner-label": "all",
                    "true-inner-label": "Selection"
                  }, null, 8, ["modelValue"])
                ])
              ]),
              k(L),
              _("div", qa, [
                _("div", Wa, [
                  (E(!0), U(pe, null, et(a.value, (q) => (E(), Y(A, {
                    key: q.key,
                    color: q.active ? q.color : "#ccc",
                    disabled: !q.active,
                    class: "pointer",
                    size: "small",
                    onClick: (re) => y(q)
                  }, {
                    default: B(() => [
                      te(ue(q.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["color", "disabled", "onClick"]))), 128))
                ])
              ]),
              _("div", Xa, [
                v[7] || (v[7] = _("div", { class: "va-collapse__header__text left" }, "Region", -1)),
                _("div", Ka, [
                  k(w, {
                    modelValue: u.map_filter_on,
                    "onUpdate:modelValue": v[2] || (v[2] = (q) => u.map_filter_on = q),
                    "false-inner-label": "anywhere",
                    "true-inner-label": "within map section"
                  }, null, 8, ["modelValue"])
                ])
              ]),
              k(L),
              _("div", Ja, [
                _("div", Za, [
                  k(C(Ba), {
                    id: "map",
                    ref_key: "map",
                    ref: i,
                    center: u.center,
                    "max-zoom": 21,
                    useGlobalLeaflet: !0,
                    zoom: u.zoom,
                    style: { height: "100%" },
                    onMove: v[3] || (v[3] = () => {
                      f(), u.map_filter_on = !0;
                    })
                  }, {
                    default: B(() => [
                      k(C(Ma), {
                        attribution: u.attribution,
                        options: {
                          maxNativeZoom: 19,
                          maxZoom: 25
                        },
                        url: u.baseMapUrl
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
}), Qa = /* @__PURE__ */ at(Ya, [["__scopeId", "data-v-d76f1184"]]), el = { class: "flex padd15" }, tl = { class: "buttonbar" }, nl = { class: "padd" }, ol = {
  key: 0,
  class: "title"
}, rl = {
  key: 1,
  class: "aflex"
}, sl = { class: "aflex" }, al = { class: "aflex" }, ll = { class: "widgets_grid" }, il = ["active", "onClick"], ul = ["src"], cl = /* @__PURE__ */ V({
  __name: "EndPointfinderModal",
  setup(e, { expose: t }) {
    const n = zo(), o = b(!1), s = Fo(() => n.params.pageid ?? ""), r = () => {
      o.value = !o.value;
    }, a = b(0), l = b(), i = b(), u = R(qt), d = Xt(R(Wt), (P) => P.connections), f = Xt(R(Wt), (P) => P.datasources), h = R(Mo), y = b([]), g = b([]), v = xe({
      step0: !1,
      step1: !0,
      step2: !0,
      step3: !0
    }), p = [
      {
        label: "Search",
        icon: "travel_explore",
        beforeLeave: (P) => {
          P.hasError = !v.step0;
        }
      },
      {
        label: "Connection",
        icon: "polyline",
        beforeLeave: (P) => {
          P.hasError = !v.step1;
        }
      },
      {
        label: "Store",
        icon: "store",
        beforeLeave: (P) => {
          P.hasError = !v.step2;
        }
      },
      { label: "Widgets", icon: "widgets", beforeLeave: (P) => {
        P.hasError = !v.step3;
      } }
    ];
    F(() => {
      console.log("Mounting endpoint finder");
    });
    const w = xe({
      searchString: "",
      loading: !1
    }), L = b(null), A = async () => await L.value?.run(() => {
    }), z = b(""), Z = b([]), ee = b({});
    ae(Z, () => {
      if (!Z.value) {
        z.value = "";
        return;
      }
      const P = Object.keys(Z.value).reduce((m, I, fe) => Z.value[I] != null ? m + 1 : m, 0);
      if (P == 0) {
        z.value = "";
        return;
      }
      z.value = P.toString();
    }, { immediate: !0, deep: !0 });
    const q = c(() => {
      let P = [];
      for (let m of Object.keys(ee.value))
        P = P.concat(
          ee.value[m].results?.bindings?.map((I) => (I.endpoint = { value: m }, I))
        );
      return P;
    }), re = async () => {
      w.loading = !0;
      const P = w.searchString, m = gt().getAllActiveEndpoints();
      m && (ee.value = await new Do().setEndpoints(m).setFilter(Z.value).query(P)), w.loading = !1;
    }, x = R(qt), $ = R(No);
    $.getDataSourceTypes();
    let Q = b();
    b("rest");
    let ce = b();
    const Le = b(!1), me = b();
    ae(me, () => {
      Le.value = !1;
      let P = null;
      try {
        P = new URL(me.value?.accessUrl?.value), Q.value = S(me.value?.format?.value, P.origin);
      } catch (m) {
        console.log(m);
      }
      Q.value ? v.step0 = !0 : (Le.value = !0, v.step0 = !1);
    }), ae(a, (P) => {
      if (P == 2) {
        let m = null;
        try {
          if (m = new URL(me.value?.accessUrl?.value), !Q.value) throw new Error("connection not found");
          const I = Q.value?.uid;
          if (!I) throw new Error("id not found");
          ce.value = xe(O(me.value?.format?.value, I, m.pathname));
        } catch (I) {
          console.log(I);
        }
      }
      if (P === 3) {
        console.log(h.getAllWidgets());
        const m = Object.entries(h.getAllWidgets()).filter(([I, fe]) => fe.supportedDSTypes.includes(ce.value?.type)).filter(([I, fe]) => fe.icon).map(([I, fe]) => ({ type: I, icon: fe.icon }));
        console.log(m), y.value = m;
      }
    });
    const S = (P, m) => {
      let I;
      const fe = x.getRegisteredTypes();
      switch ("<" + P + ">") {
        case N.CSV:
        case N.JSON:
        case N.REST:
        case N.OGCSTA:
          fe.includes("rest") && (I = u.createConnection("rest", { url: m }));
          break;
        case N.XMLA:
          fe.includes("xmla") && (I = u.createConnection("xmla", { url: m }));
          break;
      }
      return I;
    }, O = (P, m, I) => {
      switch ("<" + P + ">") {
        case N.CSV:
          return $.createDatasource("csv", { connection: m, resourceUrl: I, separators: "," });
        case N.JSON:
          return $.createDatasource("rest", { connection: m, resourceUrl: I });
        case N.REST:
          return $.createDatasource("rest", { connection: m, resourceUrl: I });
        case N.OGCSTA:
          return $.createDatasource("ogcsta", { connection: m, resourceUrl: I });
        case N.XMLA:
          return $.createDatasource("xmla", { connection: m, resourceUrl: I });
      }
      return null;
    }, T = c(() => {
      const P = $.getDatasourceIdentifiers(ce.value.type);
      return $.resolveIdentifier(P.Settings);
    }), ne = c(() => {
      if (!Q.value) return null;
      const P = x.getConnectionIdentifiers(Q.value.type);
      return x.resolveIdentifier(P.Settings);
    }), je = () => {
      g.value.length > 0 && g.value.forEach((P, m) => {
        s.addWidget({
          uid: "",
          type: P.type,
          config: { datasourceId: ce.value?.uid, settings: {} },
          wrapperConfig: {
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
            fullscreen: !1,
            shadowColor: "#333",
            shadowBlur: 12,
            shadowX: 5,
            shadowY: 5,
            shadowTransparence: 25,
            transparency: 255
          }
        }, {
          x: 50 + m * 300,
          y: 50,
          width: 200,
          height: 100,
          z: 3005
        });
      }), g.value = [], Q.value = void 0, ce.value = void 0, a.value = 0, Z.value = [], w.searchString = "", ee.value = {}, v.step0 = !1, v.step1 = !0, v.step2 = !0, v.step3 = !0, l.value?.resetValidation(), i.value?.resetValidation(), o.value = !1;
    };
    return ae(() => ce.value?.config, (P) => {
      console.log(P);
    }, { deep: !0 }), t({
      run: r
    }), (P, m) => {
      const I = K("VaButton"), fe = K("va-button"), Ut = K("VaIcon"), Oo = K("VaInput"), Ht = K("VaForm"), ut = K("VaScrollContainer"), Ke = K("va-input"), _o = K("VaCheckbox"), xo = K("va-card-content"), Lo = K("va-modal");
      return E(), U(pe, null, [
        k(Lo, {
          modelValue: o.value,
          class: "infobox",
          "hide-default-actions": "",
          "no-padding": ""
        }, {
          footer: B(() => [
            a.value != 3 ? (E(), Y(I, {
              key: 0,
              disabled: !v["step" + a.value],
              onClick: m[0] || (m[0] = (ct) => a.value++)
            }, {
              default: B(() => [...m[7] || (m[7] = [
                te("next", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : ie("", !0),
            a.value == 3 ? (E(), Y(I, {
              key: 1,
              disabled: !v["step" + a.value],
              onClick: je
            }, {
              default: B(() => [...m[8] || (m[8] = [
                te("finish", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : ie("", !0)
          ]),
          default: B(({ ok: ct }) => [
            k(fe, {
              class: "mr-1 mb-1 close",
              preset: "secondary",
              style: { position: "absolute", right: "0" },
              onClick: m[1] || (m[1] = (M) => je())
            }, {
              default: B(() => [...m[9] || (m[9] = [
                te(" x ", -1)
              ])]),
              _: 1
            }),
            k(xo, { class: "no-padding" }, {
              default: B(() => [
                k(C(ca), {
                  color: "#c29803",
                  modelValue: a.value,
                  "onUpdate:modelValue": m[5] || (m[5] = (M) => a.value = M),
                  steps: p,
                  controlsHidden: "",
                  linear: ""
                }, {
                  "step-content-0": B(() => [
                    k(Ht, {
                      ref_key: "formRef",
                      ref: l,
                      class: "flex flex-col items-baseline gap-6"
                    }, {
                      default: B(() => [
                        _("div", el, [
                          k(Oo, {
                            modelValue: w.searchString,
                            "onUpdate:modelValue": m[2] || (m[2] = (M) => w.searchString = M),
                            loading: w.loading,
                            class: "flex",
                            label: "Search String",
                            onKeyup: m[3] || (m[3] = (M) => {
                              M.key == "Enter" && re();
                            })
                          }, {
                            prependInner: B(() => [
                              k(Ut, {
                                color: "secondary",
                                name: "search"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "loading"]),
                          _("div", tl, [
                            k(C(na), {
                              offset: [-5, 5],
                              text: z.value,
                              class: "mr-6",
                              overlap: "",
                              style: { "--va-badge-text-wrapper-border-radius": "50%" }
                            }, {
                              default: B(() => [
                                k(I, {
                                  icon: "filter_alt",
                                  preset: "secondary",
                                  round: "",
                                  onClick: A
                                })
                              ]),
                              _: 1
                            }, 8, ["text"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 512),
                    q.value.length > 0 ? (E(), Y(ut, {
                      key: 0,
                      class: "padd",
                      vertical: ""
                    }, {
                      default: B(() => [
                        (E(!0), U(pe, null, et(q.value, (M) => (E(), U(pe, null, [
                          k(ya, {
                            class: Se({ active: M == me.value }),
                            result: M,
                            onClick: (fl) => me.value = M
                          }, null, 8, ["class", "result", "onClick"]),
                          m[10] || (m[10] = _("br", null, null, -1))
                        ], 64))), 256))
                      ]),
                      _: 1
                    })) : ie("", !0)
                  ]),
                  "step-content-1": B(() => [
                    _("div", nl, [
                      k(Ht, {
                        ref_key: "connectionForm",
                        ref: i,
                        modelValue: v.step1,
                        "onUpdate:modelValue": m[4] || (m[4] = (M) => v.step1 = M),
                        immediate: ""
                      }, {
                        default: B(() => [
                          Le.value ? (E(), U("div", rl, [
                            k(Ut, {
                              class: "mr-2",
                              color: "#ec9c1d",
                              name: "warning",
                              size: "2rem"
                            }),
                            m[11] || (m[11] = _("h2", { class: "title" }, " The Connection cant be automatic detected, this happens if the Type of Dataset is not known or not supported. Never the less you can try to configure the connection manualy:", -1))
                          ])) : (E(), U("h2", ol, " The following Connection will be created:")),
                          m[14] || (m[14] = _("br", null, null, -1)),
                          m[15] || (m[15] = _("br", null, null, -1)),
                          _("div", sl, [
                            C(Q) ? (E(), Y(Ke, {
                              key: 0,
                              modelValue: C(Q)?.name,
                              rules: [(M) => !!M || "Required"],
                              label: "Name"
                            }, null, 8, ["modelValue", "rules"])) : ie("", !0),
                            k(Ke, {
                              modelValue: C(Q)?.type,
                              class: "type-input",
                              label: "Type"
                            }, null, 8, ["modelValue"]),
                            m[12] || (m[12] = _("br", null, null, -1)),
                            m[13] || (m[13] = _("br", null, null, -1))
                          ]),
                          m[16] || (m[16] = _("br", null, null, -1)),
                          (E(), Y(Qe(ne.value), {
                            config: C(Q)?.config
                          }, null, 8, ["config"]))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  "step-content-2": B(() => [
                    k(ut, {
                      class: "padd",
                      vertical: ""
                    }, {
                      default: B(() => [
                        m[19] || (m[19] = _("h2", { class: "title" }, " The following Store will be created:", -1)),
                        m[20] || (m[20] = _("br", null, null, -1)),
                        _("div", al, [
                          C(Q) ? (E(), Y(Ke, {
                            key: 0,
                            modelValue: C(ce)?.name,
                            rules: [(M) => !!M || "Required"],
                            label: "Name"
                          }, null, 8, ["modelValue", "rules"])) : ie("", !0),
                          k(Ke, {
                            modelValue: C(ce)?.type,
                            class: "type-input",
                            label: "Type"
                          }, null, 8, ["modelValue"]),
                          m[17] || (m[17] = _("br", null, null, -1)),
                          m[18] || (m[18] = _("br", null, null, -1))
                        ]),
                        m[21] || (m[21] = _("br", null, null, -1)),
                        (E(), Y(Qe(T.value), {
                          config: C(ce).config,
                          connections: C(d),
                          dataSources: C(f)
                        }, null, 8, ["config", "connections", "dataSources"])),
                        m[22] || (m[22] = _("br", null, null, -1))
                      ]),
                      _: 1
                    })
                  ]),
                  "step-content-3": B(() => [
                    k(ut, {
                      class: "padd",
                      vertical: ""
                    }, {
                      default: B(() => [
                        m[23] || (m[23] = _("h2", { class: "title" }, "Widgets zur Datenquelle auswählen", -1)),
                        m[24] || (m[24] = _("br", null, null, -1)),
                        _("div", ll, [
                          (E(!0), U(pe, null, et(y.value, (M) => (E(), U("div", {
                            class: "widgets_grid-item",
                            key: M.type,
                            active: g.value.includes(M),
                            onClick: () => {
                              g.value.includes(M) ? g.value.splice(g.value.indexOf(M), 1) : g.value.push(M);
                            }
                          }, [
                            k(_o, {
                              "model-value": g.value.includes(M)
                            }, null, 8, ["model-value"]),
                            _("img", {
                              class: "m-2",
                              src: M.icon,
                              style: { height: "30px" }
                            }, null, 8, ul),
                            te(" " + ue(M.type), 1)
                          ], 8, il))), 128))
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
        k(Qa, {
          ref_key: "loadModalref",
          ref: L,
          modelValue: Z.value,
          "onUpdate:modelValue": m[6] || (m[6] = (ct) => Z.value = ct)
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
}), dl = /* @__PURE__ */ at(cl, [["__scopeId", "data-v-a5fa3dea"]]);
function pl(e, { props: t, children: n, element: o, app: s } = {}) {
  let r = o, a = k(e, t, n);
  return s && s._context && (a.appContext = s._context), r ? Ye(a, r) : typeof document < "u" && Ye(a, r = document.createElement("div")), { vNode: a, destroy: () => {
    r && Ye(null, r), r = null, a = null;
  }, el: r };
}
function Sl({ services: e, log: t }) {
  const n = {
    install(a) {
      const { vNode: l } = pl(dl, { props: {}, app: a });
      a.provide("endpointfinder", async () => {
        await l.component?.exposed?.run(() => {
        });
      });
    }
  };
  e.getRequired("App").use(n);
  const o = e.getRequired(jo), s = o.createConnection("rest", {
    url: "https://www.govdata.de/sparql"
  }), r = o.getConnection(s.uid);
  gt().registerEndpoint(r, "SparqlDataEurope"), gt().setActive("SparqlDataEurope"), t.info("Endpointfinder bereit");
}
export {
  Sl as activate
};
