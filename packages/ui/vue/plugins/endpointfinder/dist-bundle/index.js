(function(){var i="ui.vue.plugins.endpointfinder",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=":root,:host{--va-icon-vertical-align: middle;--va-icon-user-select: none}.va-icon{vertical-align:var(--va-icon-vertical-align);-webkit-user-select:var(--va-icon-user-select);-moz-user-select:var(--va-icon-user-select);user-select:var(--va-icon-user-select)}.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]){cursor:pointer}.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]):focus-visible{outline:2px solid var(--va-focus)!important;border-radius:2px}.va-icon.va-icon{font-style:normal}.va-icon--spin{animation:va-icon--spin-animation 1.5s linear infinite}.va-icon--spin-reverse{animation:va-icon--spin-animation 1.5s linear infinite;animation-direction:reverse}@keyframes va-icon--spin-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.va-icon svg{fill:currentColor;height:100%}:root,:host{--va-progress-circle-position: relative;--va-progress-circle-overflow: hidden;--va-progress-circle-width: 80%;--va-progress-circle-height: 80%;--va-progress-circle-overlay-transition: all ease 2s;--va-progress-circle-font-size: .75rem}.va-progress-circle{position:var(--va-progress-circle-position);overflow:var(--va-progress-circle-overflow);font-family:var(--va-font-family)}.va-progress-circle__wrapper{position:absolute;inset:0;margin:auto;transform:rotate(-90deg);width:var(--va-progress-circle-width);height:var(--va-progress-circle-height);display:flex;justify-content:center;align-items:center}.va-progress-circle--indeterminate .va-progress-circle__wrapper{animation:va-progress-circle__wrapper--indeterminate 2s linear infinite}.va-progress-circle__overlay{transition:var(--va-progress-circle-overlay-transition)}.va-progress-circle--indeterminate .va-progress-circle__overlay{animation:va-progress-circle__overlay--indeterminate 2s ease-in-out infinite}.va-progress-circle__info{font-size:var(--va-progress-circle-font-size);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}@keyframes va-progress-circle__wrapper--indeterminate{to{transform:rotate(270deg)}}@keyframes va-progress-circle__overlay--indeterminate{0%{stroke-dasharray:1,125;stroke-dashoffset:0}50%{stroke-dasharray:125,125;stroke-dashoffset:-65px}to{stroke-dasharray:125,125;stroke-dashoffset:-125px}}:root,:host{--va-button-display: inline-flex;--va-button-justify-content: center;--va-button-align-items: center;--va-button-background-image: none;--va-button-box-shadow: none;--va-button-border-width: 0;--va-button-border-color: unset;--va-button-border-style: none;--va-button-font-weight: 600;--va-button-transition: none;--va-button-padding: 0;--va-button-cursor: pointer;--va-button-sm-size: 1.5rem;--va-button-sm-content-py: .25rem;--va-button-sm-content-px: .375rem;--va-button-sm-only-icon-content-px: .25rem;--va-button-sm-font-size: .8125rem;--va-button-sm-letter-spacing: 0;--va-button-sm-line-height: 1rem;--va-button-sm-border-radius: .125rem;--va-button-sm-icon-side-padding: var(--va-button-sm-content-py);--va-button-sm-icons-spacing: .125rem;--va-button-size: 2.25rem;--va-button-content-py: .5rem;--va-button-content-px: .75rem;--va-button-only-icon-content-px: .5rem;--va-button-font-size: 1rem;--va-button-letter-spacing: 0;--va-button-line-height: 1.25rem;--va-button-border-radius: .25rem;--va-button-icon-side-padding: var(--va-button-content-py);--va-button-icons-spacing: .25rem;--va-button-lg-size: 3rem;--va-button-lg-content-py: .75rem;--va-button-lg-content-px: 1rem;--va-button-lg-only-icon-content-px: 1rem;--va-button-lg-font-size: 1.05rem;--va-button-lg-letter-spacing: 0;--va-button-lg-line-height: 1.5rem;--va-button-lg-border-radius: .5rem;--va-button-lg-icon-side-padding: var(--va-button-lg-content-py);--va-button-lg-icons-spacing: .25rem;--va-button-bordered-border: 1px;--va-button-bordered-style: solid}.va-button{position:relative;padding:var(--va-button-padding);display:var(--va-button-display);justify-content:var(--va-button-justify-content);align-items:var(--va-button-align-items);border-width:var(--va-button-border-width);border-color:var(--va-button-border-color);border-style:var(--va-button-border-style);background-image:var(--va-button-background-image);box-shadow:var(--va-button-box-shadow);font-family:var(--va-font-family);font-weight:var(--va-button-font-weight);text-decoration:none;text-transform:initial;transition:var(--va-button-transition);box-sizing:border-box;cursor:var(--va-button-cursor);z-index:0;vertical-align:top}.va-button:after,.va-button:before{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;left:0;top:0;z-index:-1}.va-button:before{background:var(--va-background-color);opacity:var(--va-background-color-opacity)}.va-button:after{background-color:var(--va-background-mask-color);opacity:var(--va-background-mask-opacity)}.va-button__content{height:100%;display:flex;align-items:center;z-index:1}.va-button__content--loading{opacity:0}.va-button--small{line-height:var(--va-button-sm-line-height);border-radius:var(--va-button-sm-border-radius);letter-spacing:var(--va-button-sm-letter-spacing);min-height:var(--va-button-sm-size);min-width:var(--va-button-sm-size)}.va-button--small .va-button__content{font-size:var(--va-button-sm-font-size);padding:var(--va-button-sm-content-py) var(--va-button-sm-content-px)}.va-button--small .va-button__left-icon{margin-right:var(--va-button-sm-icons-spacing)}.va-button--small .va-button__right-icon{margin-left:var(--va-button-sm-icons-spacing)}.va-button--small.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-sm-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-sm-content-py) - var(--va-button-bordered-border))}.va-button--small.va-button--left-icon .va-button__content{padding-left:var(--va-button-sm-icon-side-padding)}.va-button--small.va-button--right-icon .va-button__content{padding-right:var(--va-button-sm-icon-side-padding)}.va-button--normal{line-height:var(--va-button-line-height);border-radius:var(--va-button-border-radius);letter-spacing:var(--va-button-letter-spacing);min-height:var(--va-button-size);min-width:var(--va-button-size)}.va-button--normal .va-button__content{font-size:var(--va-button-font-size);padding:var(--va-button-content-py) var(--va-button-content-px);line-height:var(--va-button-line-height)}.va-button--normal .va-button__left-icon{margin-right:var(--va-gap-medium)}.va-button--normal .va-button__right-icon{margin-left:var(--va-gap-medium)}.va-button--normal.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-content-py) - var(--va-button-bordered-border))}.va-button--large{line-height:var(--va-button-lg-line-height);border-radius:var(--va-button-lg-border-radius);letter-spacing:var(--va-button-lg-letter-spacing);min-height:var(--va-button-lg-size);min-width:var(--va-button-lg-size)}.va-button--large .va-button__content{font-size:var(--va-button-lg-font-size);padding:var(--va-button-lg-content-py) var(--va-button-lg-content-px)}.va-button--large .va-button__left-icon{margin-right:var(--va-button-lg-icons-spacing)}.va-button--large .va-button__right-icon{margin-left:var(--va-button-lg-icons-spacing)}.va-button--large.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-lg-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-lg-content-py) - var(--va-button-bordered-border))}.va-button--large.va-button--left-icon .va-button__content{padding-left:var(--va-button-lg-icon-side-padding)}.va-button--large.va-button--right-icon .va-button__content{padding-right:var(--va-button-lg-icon-side-padding)}.va-button--small.va-button--icon-only .va-button__content,.va-button--normal.va-button--icon-only .va-button__content,.va-button--large.va-button--icon-only .va-button__content{padding-right:0;padding-left:0}.va-button--plain{min-width:auto;min-height:auto}.va-button--plain .va-button__content{padding:0;z-index:unset}.va-button--round{border-radius:999px}.va-button--bordered{border-width:var(--va-button-bordered-border);border-style:var(--va-button-bordered-style)}.va-button.va-button--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-button--icon-only .va-button__left-icon,.va-button--icon-only .va-button__right-icon{margin-left:0;margin-right:0}.va-button--icon-only .va-button__content{padding:0}.va-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\"}.va-button--loading{pointer-events:none}.va-button--block{display:flex;min-width:100%}.va-button__loader{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}:root,:host{--va-badge-py: 0;--va-badge-font-size: .563rem;--va-badge-border: .125rem;--va-badge-size: calc(var(--va-badge-font-size) * var(--va-badge-line-height) + var(--va-badge-border) * 2);--va-badge-line-height: 1.4;--va-badge-margin: 0;--va-badge-width: fit-content;--va-badge-dot-size: .5rem;--va-badge-text-wrapper-transition: .2s cubic-bezier(.4, 0, .6, 1);--va-badge-text-wrapper-display: inline-flex;--va-badge-text-wrapper-border: solid .125rem;--va-badge-text-wrapper-border-radius: .125rem;--va-badge-text-wrapper-font-weight: 700;--va-badge-text-wrapper-line-height: 1.4;--va-badge-text-wrapper-letter-spacing: .0375rem;--va-badge-text-wrapper-justify-content: center;--va-badge-text-wrapper-white-space: nowrap;--va-badge-text-wrapper-width: min-content;--va-badge-text-wrapper-height: auto;--va-badge-text-wrapper-min-width: initial;--va-badge-text-wrapper-min-height: initial;--va-badge-text-wrapper-margin: 0;--va-badge-text-transform: uppercase;--va-badge-text-py: 0;--va-badge-text-px: .25rem}.va-badge{display:inline-flex;position:relative;font-family:var(--va-font-family);width:var(--va-badge-width)}.va-badge__text-wrapper{transition:var(--va-badge-text-wrapper-transition, var(--va-transition));display:var(--va-badge-text-wrapper-display);border:var(--va-badge-text-wrapper-border, var(--va-control-border));border-radius:var(--va-badge-text-wrapper-border-radius);font-weight:var(--va-badge-text-wrapper-font-weight);line-height:var(--va-badge-text-wrapper-line-height);letter-spacing:var(--va-badge-text-wrapper-letter-spacing, var(--va-letter-spacing));justify-content:var(--va-badge-text-wrapper-justify-content);align-items:center;white-space:var(--va-badge-text-wrapper-white-space);width:var(--va-badge-text-wrapper-width);height:var(--va-badge-text-wrapper-height);min-width:var(--va-badge-text-wrapper-min-width);min-height:var(--va-badge-text-wrapper-min-height);margin:var(--va-badge-text-wrapper-margin)}.va-badge--visible-empty .va-badge__text-wrapper{min-width:var(--va-badge-size);min-height:var(--va-badge-size)}.va-badge--dot .va-badge__text-wrapper{min-width:var(--va-badge-dot-size);min-height:var(--va-badge-dot-size);border-width:0;border-radius:100%;padding:0}.va-badge--empty .va-badge__text-wrapper{width:0;height:0;min-width:0;min-height:0;border-width:0}.va-badge--multi-line .va-badge__text-wrapper{white-space:normal}.va-badge--floating .va-badge__text-wrapper{position:absolute;z-index:2}.va-badge__text{margin:var(--va-badge-margin);text-transform:var(--va-badge-text-transform);overflow:hidden;min-width:calc(var(--va-badge-font-size) * var(--va-badge-line-height));padding:var(--va-badge-text-py) var(--va-badge-text-px);text-align:center;display:inline-flex;justify-content:center;text-overflow:clip;white-space:nowrap;font-size:var(--va-badge-font-size)}.va-badge--multi-line .va-badge__text{overflow:auto;max-height:initial;text-align:initial;text-overflow:initial;white-space:normal}.va-badge--dot .va-badge__text{display:none}.va-badge--floating .va-badge__text{align-items:center;padding:var(--va-badge-py) .15rem}.va-stepper__default-controls{display:flex;gap:var(--va-stepper-controls-gap)}.va-stepper__step-button{position:relative;display:flex;flex-wrap:wrap;align-items:center;gap:var(--va-stepper-step-button-gap);flex-shrink:0;padding:var(--va-stepper-step-button-padding)}.va-stepper__step-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:var(--va-stepper-step-border-radius)}.va-stepper__step-button:after{content:\"\";position:absolute;cursor:pointer;top:0;left:0;width:100%;height:100%;background:var(--va-stepper-color);transition:opacity .3s;opacity:0;border-radius:var(--va-stepper-step-border-radius)}.va-stepper__step-button__icon{display:flex;justify-content:center;align-items:center;height:var(--va-stepper-step-button-icon-size);width:var(--va-stepper-step-button-icon-size);font-size:var(--va-stepper-step-button-number-size);color:#fff;background:var(--va-stepper-step-button-inactive-color);border-radius:var(--va-stepper-step-button-icon-border-radius)}.va-stepper__step-button--active{color:var(--va-stepper-color)}.va-stepper__step-button--active .va-stepper__step-button__icon{background:var(--va-stepper-color)}.va-stepper__step-button--disabled{opacity:var(--va-stepper-step-button-disabled-opacity);pointer-events:none}.va-stepper__step-button:hover:after{opacity:var(--va-stepper-step-button-hover-highlight-opacity)}.va-stepper__step-button--navigation-disabled:after{display:none}.va-stepper__step-button--error{color:var(--va-danger)}.va-stepper__step-button--error .va-stepper__step-button__icon{background:var(--va-danger)}:root{--va-stepper-step-button-inactive-color: var(--va-secondary);--va-stepper-step-button-hover-highlight-opacity: .1;--va-stepper-step-button-disabled-opacity: .5;--va-stepper-step-button-padding: 1rem;--va-stepper-step-button-number-size: 1.2rem;--va-stepper-step-button-icon-size: 2rem;--va-stepper-step-button-gap: .5rem;--va-stepper-step-button-icon-border-radius: 100%;--va-stepper-step-border-radius: var(--va-square-border-radius);--va-stepper-divider-color: var(--va-secondary);--va-stepper-divider-length: auto;--va-stepper-divider-min-length: 2rem;--va-stepper-divider-thickness: 1px;--va-stepper-divider-spacing: .5rem;--va-stepper-divider-vertical-margin-left: 2rem;--va-stepper-step-content-wrapper-padding: .5rem 1rem;--va-stepper-step-content-margin: .8rem 0 2rem;--va-stepper-controls-gap: 1rem}.va-stepper{display:flex;flex-direction:column}.va-stepper--vertical{flex-direction:row}.va-stepper__navigation{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.va-stepper__navigation--vertical{flex-direction:column;align-items:flex-start;flex-wrap:nowrap}.va-stepper__divider{flex-grow:1;height:var(--va-stepper-divider-thickness);width:var(--va-stepper-divider-length);min-width:var(--va-stepper-divider-min-length);margin:0 var(--va-stepper-divider-spacing);background:var(--va-stepper-divider-color)}.va-stepper__divider--vertical{min-height:var(--va-stepper-divider-min-length);height:var(--va-stepper-divider-length);width:var(--va-stepper-divider-thickness);min-width:var(--va-stepper-divider-thickness);margin:var(--va-stepper-divider-spacing) 0;margin-left:var(--va-stepper-divider-vertical-margin-left)}.va-stepper__step-content-wrapper{padding:var(--va-stepper-step-content-wrapper-padding)}.va-stepper__step-content{margin:var(--va-stepper-step-content-margin)}.va-stepper__controls{display:flex;gap:var(--va-stepper-controls-gap)}.aellipsis[data-v-69727056]{line-height:23px;max-height:var(--b40395ae);text-overflow:ellipsis;overflow:hidden;color:#777}.aellipsis.expanded[data-v-69727056]{max-height:100%}.pointer[data-v-a0a9daed]{cursor:pointer;align-self:start;margin-right:5px}.card[data-v-a0a9daed]{box-shadow:none;border-bottom:1px solid #e1e1e1;border-radius:0;cursor:pointer}.card[data-v-a0a9daed]:hover,.card.active[data-v-a0a9daed]{background:#f5f8ff!important}.card .va-card-title[data-v-a0a9daed]{font-size:1.25rem}.card .aflex[data-v-a0a9daed]{display:flex;margin-top:15px;flex-direction:row;justify-content:space-between;align-content:center;flex-wrap:nowrap}.card .light[data-v-a0a9daed]{color:#6c6a6add}.list_of_formats[data-v-d76f1184]{display:flex;flex-direction:row;gap:5px;justify-content:flex-start}.map[data-v-d76f1184]{width:100%;height:250px;position:relative}.content[data-v-d76f1184]{margin-top:25px;margin-bottom:35px;padding-left:10px}.line[data-v-d76f1184]{overflow:hidden;width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;align-content:center;justify-content:space-between;align-items:flex-end}.line div[data-v-d76f1184]{display:block;width:auto}.title[data-v-d76f1184]{font-size:24px;padding:23px 10px 0 15px}.pointer[data-v-d76f1184]{cursor:pointer}.filterbox .va-modal__header{background:#f1f1f1;padding-bottom:15px}.infobox .va-modal__dialog{max-width:80%!important}.infobox .footer,.infobox .va-modal__footer{background:#f7f7f7;padding:10px 16px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end}.infobox .va-stepper__navigation{padding:30px 30px 0 15px;background:#f7f7f7;margin-bottom:10px}.infobox .va-stepper__step-content-wrapper,.infobox .va-stepper__step-content{padding:0;margin:0}.infobox .va-modal__message{margin:0}.infobox .aflex{display:flex;flex-direction:row;align-items:flex-start;gap:9px}.infobox .store-item-header{display:none}.infobox .store-item-content{border:none;padding:0}.infobox .datasource-list .datasource-list-add-button{display:none}.widgets_grid[data-v-e2447488]{display:grid;grid-template-columns:repeat(3,33%);gap:1rem}[data-v-e2447488] .widgets_grid-item{height:50px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.flex[data-v-e2447488]{width:100%}.flex[data-v-e2447488]{display:flex;flex-direction:row;align-content:center;align-items:center}.buttonbar[data-v-e2447488]{margin-top:15px}.padd[data-v-e2447488]{max-height:75vh;padding:15px 25px}.padd15[data-v-e2447488]{padding:10px 25px 30px;border-bottom:1px solid #e5e5e5}.no-padding[data-v-e2447488]{padding:0}\n";})();
import { withCtx as B, h as Oe, Text as $n, createBlock as Z, isVNode as go, getCurrentInstance as ae, inject as R, computed as c, normalizeClass as we, normalizeStyle as kt, ref as h, shallowReadonly as kn, isRef as ht, unref as S, reactive as Le, capitalize as Bn, defineComponent as A, useAttrs as Vn, openBlock as E, resolveDynamicComponent as tt, mergeProps as be, renderSlot as de, createElementBlock as U, createCommentVNode as le, Fragment as pe, createTextVNode as ee, toDisplayString as ie, watch as se, customRef as An, onMounted as M, onUpdated as Rn, createElementVNode as _, onBeforeUnmount as Ve, shallowRef as ze, toRefs as Tn, normalizeProps as xe, guardReactiveProps as Fe, createVNode as k, useSlots as In, nextTick as G, withKeys as $e, renderList as ot, useCssVars as jn, resolveComponent as K, provide as me, markRaw as J, onUnmounted as Bt, render as et, useModel as Nn } from "vue";
import { identifier as Kt, CONNECTION_REPOSITORY as Fn } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as Mn } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { identifier as Jt } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { useEList as Zt } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as zn } from "org.eclipse.daanse.board.app.lib.api.widget";
import { useWidgetsStore as Dn } from "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
import { useLayoutStore as Gn } from "org.eclipse.daanse.board.app.ui.vue.stores.layout";
import { useRoute as Un } from "vue-router";
class Hn {
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
    const o = [], n = [], s = [];
    this.filters.forEach((l) => {
      if (l.mapSection) {
        const i = l;
        s.push("PREFIX spatial: <http://geovocab.org/spatial#>"), s.push("PREFIX geo: <http://www.opengis.net/ont/geosparql#>"), n.push("?dataService dct:spatial ?location ."), n.push("?location geo:lat ?lat ;geo:long ?long ."), o.push(`FILTER (?lat >= ${i.mapSection._northEast.lat} && ?lat <= ${i.mapSection._southWest.lat})`), o.push(`FILTER (?long >= ${i.mapSection._northEast.lng} && ?long <= ${i.mapSection._southWest.lng})`);
      }
      if (l.formats) {
        let u = "FILTER (" + l.formats.map((p) => "?format =" + p).join("||") + ")";
        o.push(u);
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
              ${n.join(`
`)}

            FILTER (CONTAINS(LCASE(?title), "${t.toLowerCase()}"))
            ${o.join(`
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
function Ct() {
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
var F = /* @__PURE__ */ ((e) => (e.XMLA = "<http://publications.europa.eu/resource/authority/file-type/XMLA>", e.CSV = "<http://publications.europa.eu/resource/authority/file-type/CSV>", e.XML = "<http://publications.europa.eu/resource/authority/file-type/XML>", e.WMS = "<http://publications.europa.eu/resource/authority/file-type/WMS_SRVC>", e.WFS = "<http://publications.europa.eu/resource/authority/file-type/WFS_SRVC>", e.GEOJSON = "<http://publications.europa.eu/resource/authority/file-type/GEOJSON>", e.JSON = "<http://publications.europa.eu/resource/authority/file-type/JSON>", e.REST = "<http://publications.europa.eu/resource/authority/file-type/REST>", e.OGCSTA = "???", e))(F || {});
const Yt = {
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
}, Wn = {
  xs: 0,
  sm: 640,
  md: 1024,
  lg: 1440,
  xl: 1920
}, qn = () => ({
  enabled: !0,
  bodyClass: !0,
  thresholds: Wn
}), St = (e, t = null) => B(() => [e], t), Qt = (e) => typeof e == "string" ? Oe($n, e) : go(e) ? e : Z(e), Xn = (e, t = null) => Object.keys(e).reduce((o, n) => {
  const s = e[n];
  return o[n] = typeof s == "function" ? s : St(s, t), o;
}, {}), Kn = (e) => {
  const t = e.render || e.ssrRender;
  if (!t)
    return;
  const o = t.name === "_sfc_render" || t.name === "_sfc_ssrRender";
  return function(...n) {
    const s = n[0], r = s.$.slots, a = new Proxy(s, {
      get(i, u) {
        return u === "$slots" ? Xn(r) : i[u];
      }
    }), l = o ? void 0 : a;
    return t.call(l, a, ...n.slice(1));
  };
}, yo = (e, t) => Object.keys(e).filter((o) => !t.includes(o)).reduce((o, n) => (o[n] = e[n], o), {}), Jn = "$va:childComponents", Vt = () => {
  var e;
  const t = (e = ae()) == null ? void 0 : e.attrs["va-child"];
  if (!t)
    return null;
  const o = R(Jn);
  return o?.value ? c(() => o.value[t]) : null;
}, Zn = /([a-z0-9])([A-Z])/g, Yn = (e) => e.replace(Zn, "$1-$2").toLowerCase(), Qn = (e, t) => t in e ? e[t] : e[Yn(t)], er = (e, t) => {
  const o = e.props, n = Vt();
  return new Proxy(o, {
    get: (s, r) => {
      var a, l;
      if (typeof r != "string")
        return s[r];
      const i = (a = n?.value) == null ? void 0 : a[r];
      if (i !== void 0)
        return i;
      const u = e.vnode.props || {}, p = s[r];
      if (Qn(u, r) !== void 0)
        return p;
      const w = (l = t.value) == null ? void 0 : l[r];
      return w !== void 0 ? w : p;
    }
  });
}, tr = (e, t) => {
  const o = e.attrs;
  return new Proxy(o, {
    get: (n, s) => {
      var r;
      if (typeof s != "string")
        return n[s];
      if (s === "class")
        return we([t.value.class, o.class]);
      if (s === "style")
        return kt([t.value.style, o.style]);
      const a = (r = t.value) == null ? void 0 : r[s];
      return a !== void 0 ? a : n[s];
    },
    ownKeys(n) {
      return [.../* @__PURE__ */ new Set([...Object.keys(o), ...Object.keys(t.value)])];
    },
    getOwnPropertyDescriptor(n, s) {
      return Reflect.getOwnPropertyDescriptor(t.value, s) ?? Reflect.getOwnPropertyDescriptor(o, s);
    }
  });
}, mt = "slot:", or = (e, t) => {
  const o = e.slots, n = Vt(), s = c(() => Object.keys(t.value).reduce((r, a) => (a.startsWith(mt) && (r[a.slice(mt.length)] = t.value[a]), r), {}));
  return new Proxy(o, {
    get: (r, a) => {
      var l, i;
      if (typeof a != "string")
        return r[a];
      const u = `${mt}${a}`, p = (l = n?.value) == null ? void 0 : l[u];
      if (p !== void 0)
        return St(Qt(p));
      const f = r[a];
      if (f !== void 0)
        return f;
      const w = (i = s.value) == null ? void 0 : i[a];
      return w !== void 0 ? St(Qt(w)) : f;
    },
    ownKeys(r) {
      return [.../* @__PURE__ */ new Set([...Object.keys(o), ...Object.keys(s.value)])];
    },
    getOwnPropertyDescriptor(r, a) {
      return Reflect.getOwnPropertyDescriptor(s.value, a) ?? Reflect.getOwnPropertyDescriptor(o, a);
    }
  });
}, nr = "VaLocalConfig", rr = c(() => []);
function sr() {
  return R(nr, rr);
}
const ar = [null, void 0, ""], wt = (e) => ar.includes(e), eo = (e) => !wt(e), lr = typeof process < "u" ? process : {}, ir = lr.env || {}, ur = ir.NODE_ENV || "", At = typeof __DEV__ < "u" ? __DEV__ : !["prod", "production"].includes(ur), Ot = (...e) => (At && console.warn(...e), !1), cr = (e) => {
  throw new Error(`[Vuestic] ${e}`);
};
let dr = null;
const bo = () => dr, ho = (e, t = void 0) => {
  var o;
  const n = (o = bo()) == null ? void 0 : o._context.provides[e];
  return ae() ? R(e, t) : n ?? cr("You're using Vuestic composable outside Vue app. Since you registered Vuestic in multiple apps, composables can not be used outside setup function anymore.");
}, pr = (e) => e !== null && typeof e == "object", ke = (e) => e === null || typeof e != "object" ? e : Array.isArray(e) ? e.map(ke) : e instanceof Date ? new Date(e.getTime()) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Map ? new Map(Array.from(e.entries()).map(([t, o]) => [t, ke(o)])) : e instanceof Set ? new Set(Array.from(e.values()).map(ke)) : pr(e) ? Object.keys(e).reduce((t, o) => (t[o] = ke(e[o]), t), {}) : e, gt = (e) => e && typeof e == "object" && !Array.isArray(e), Me = (e, t) => (gt(e) || (e = {}), Object.keys(t).forEach((o) => {
  const n = e[o], s = t[o];
  s instanceof RegExp || s instanceof Date ? e[o] = s : gt(n) && gt(s) ? e[o] = Me(Object.create(
    Object.getPrototypeOf(n),
    Object.getOwnPropertyDescriptors(n)
  ), s) : e[o] = s;
}), e), fr = [
  {
    prefix: "bg",
    property: "background-color"
  },
  {
    prefix: "text",
    property: ["color", "fill"]
  }
], vr = () => fr, mr = (e) => ({
  ...e,
  get variables() {
    return this.presets[this.currentPresetName];
  },
  set variables(t) {
    this.presets[this.currentPresetName] = t;
  }
}), gr = () => mr({
  threshold: 150,
  presets: {
    light: Yt.light,
    dark: Yt.dark
  },
  currentPresetName: "light"
}), yr = (e) => e, br = yr([
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
]), hr = [
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
], Cr = (e) => (e.aliases = e.aliases || [], e.fonts = e.fonts || [], [
  ...e.aliases,
  ...br,
  ...e.fonts,
  ...hr
]), Sr = () => Cr({}), wr = () => (
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
), Or = () => ({
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
}), Co = Symbol("GLOBAL_CONFIG"), _r = () => ({
  colors: gr(),
  icons: Sr(),
  components: wr(),
  breakpoint: qn(),
  i18n: Or(),
  colorsClasses: vr(),
  /**
   * global config variable to pass nuxt-link component to vuestic-ui via @vuestic/nuxt
   * TODO: give a try to integrate inertia js router components via this option
   * TODO: if this try won't be success, may be remake to provide/inject
   */
  routerComponent: void 0
}), xr = (e = {}) => {
  const t = h(Me(_r(), e));
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
}, Lr = (e) => {
  var t, o;
  const n = ((t = ae()) == null ? void 0 : t.appContext.provides) || ((o = bo()) == null ? void 0 : o._context.provides);
  if (!n)
    throw new Error("Vue app not found for provide");
  return n[Co] = e, e;
};
function Ae() {
  let e = ho(Co);
  return e || (e = xr(), Lr(e)), e;
}
const Pr = (e) => "preset" in e, to = (e) => Pr(e) ? e.preset : void 0, Er = (e, t) => {
  const o = sr(), { globalConfig: n } = Ae(), s = e.name, r = (l) => (l instanceof Array ? l : [l]).reduce((i, u) => {
    var p, f, w;
    const C = (w = (f = (p = n.value.components) == null ? void 0 : p.presets) == null ? void 0 : f[s]) == null ? void 0 : w[u];
    if (!C)
      return i;
    const g = to(C);
    return {
      ...i,
      ...g ? r(g) : void 0,
      ...C
    };
  }, {}), a = Vt();
  return c(() => {
    var l, i;
    const u = {
      ...(l = n.value.components) == null ? void 0 : l.all,
      ...(i = n.value.components) == null ? void 0 : i[s]
    }, p = o.value.reduce((C, g) => {
      const v = g[s];
      return v ? { ...C, ...v } : C;
    }, {}), f = [
      t,
      a?.value,
      p,
      u
    ].filter(eo).map(to).filter(eo).at(0), w = f ? r(f) : void 0;
    return { ...u, ...p, ...w };
  });
}, $r = (e) => (t, o) => {
  var n;
  const s = ae(), r = Er(e, t), a = c(() => yo(r.value, Object.keys(t))), l = er(s, r), i = tr(s, a), u = or(s, r);
  s.props = l, s.attrs = i, s.slots = u;
  const p = (n = e.setup) == null ? void 0 : n.call(e, kn(l), {
    ...o,
    attrs: i,
    slots: u
  });
  return typeof p == "object" && !s.exposed && o.expose(p), p;
}, _t = (e) => {
  const t = $r(e), o = Kn(e);
  return new Proxy(e, {
    get(n, s) {
      return s in e ? s === "setup" ? t : s === "render" || s === "ssrRender" ? o : Reflect.get(n, s) : Reflect.get(n, s);
    }
  });
}, xt = "__c", kr = (e) => (e[xt] = _t(e[xt]), e), Br = (e) => "setup" in e ? _t(e) : xt in e ? kr(e) : (e.setup = () => ({
  /* Fake setup function */
}), _t(e)), De = Br, Vr = {
  defaultSize: 48,
  sizes: {
    small: 32,
    medium: 48,
    large: 64
  }
}, Ar = {
  defaultSize: 1,
  sizes: {
    small: 0.75,
    medium: 1,
    large: 1.25
  }
}, Rt = {
  size: {
    type: [String, Number],
    default: "",
    validator: (e) => typeof e == "string" || typeof e == "number"
  },
  sizesConfig: {
    type: Object,
    default: () => Vr
  },
  fontSizesConfig: {
    type: Object,
    default: () => Ar
  }
}, Rr = /(?<fontSize>\d+)(?<extension>px|rem)/i, oo = (e) => e / 16 - 0.5, Tt = (e, t = ((o) => (o = ae()) == null ? void 0 : o.type.name)()) => {
  const { getGlobalConfig: o } = Ae(), n = c(() => {
    var l, i;
    return t ? (i = (l = o().components) == null ? void 0 : l[t]) == null ? void 0 : i.sizesConfig : void 0;
  }), s = c(() => {
    var l, i, u;
    const { defaultSize: p, sizes: f } = e.sizesConfig, w = (l = n.value) == null ? void 0 : l.defaultSize;
    if (!e.size)
      return `${p || w}px`;
    if (typeof e.size == "string") {
      const C = (u = (i = n.value) == null ? void 0 : i.sizes) == null ? void 0 : u[e.size], g = f[e.size];
      return g ? `${g}px` : C ? `${C}px` : e.size;
    }
    return `${e.size}px`;
  }), r = c(() => {
    const { defaultSize: l, sizes: i } = e.fontSizesConfig;
    if (!e.size)
      return l;
    if (typeof e.size == "string") {
      if (e.size in i)
        return i[e.size];
      const u = e.size.match(Rr);
      if (!u || !u.groups)
        throw new Error("Size prop should be either valid string or number");
      const { extension: p, fontSize: f } = u.groups;
      return p === "rem" ? +f : oo(+f);
    }
    return oo(e.size);
  }), a = c(() => `${r.value}rem`);
  return {
    sizeComputed: s,
    fontSizeComputed: a,
    fontSizeInRem: r
  };
}, at = {
  preset: {
    type: [String, Array],
    default: void 0
  }
}, Tr = (e, t) => t.test(e), So = (e, t) => {
  if (typeof t != "string" && t.global)
    return [...e.matchAll(t)].map((n) => n.slice(1));
  const o = e.match(t) || [];
  return o ? o.length > 1 ? o.slice(1) : o : [];
}, wo = /{[^}]*}/g, Oo = (e) => e.replace(wo, "(.*)"), Ir = (e) => (e.match(wo) || []).map((t) => t.replace(/{|}/g, "")), jr = (e, t) => So(e, Oo(t)), Nr = (e, t) => {
  const o = Ir(t), n = jr(e, t);
  return o.reduce((s, r, a) => ({ ...s, [r]: n[a] }), {});
}, Fr = (e, t) => (e.match(t) || [])[0] === e, Mr = (e, t) => {
  const o = Oo(t);
  return Fr(e, new RegExp(o));
}, _o = (e) => typeof e.name == "string", xo = (e) => e.name instanceof RegExp, zr = (e, t) => _o(t) ? Mr(e, t.name) : xo(t) ? Tr(e, t.name) : !1, Dr = (e, t) => {
  const o = Nr(e, t.name);
  return t.resolve && t.resolve(o);
}, Gr = (e, t) => {
  if (t.name.global)
    throw new Error(`Bad icon config with name ${t.name}. Please, don't use global regex as name.`);
  const o = So(e, t.name);
  return t.resolveFromRegex && t.resolveFromRegex(...o);
}, Ur = (e, t) => {
  if (_o(t))
    return Dr(e, t);
  if (xo(t))
    return Gr(e, t);
  throw Error("Unknown icon config");
}, Hr = (e, t, o = []) => {
  const n = t.find((s) => o.includes(s.name.toString()) ? !1 : zr(e, s));
  if (!n)
    throw new Error(`Can not find icon config from ${e}. Please provide default config.`);
  return n;
}, Lo = (e, t, o = []) => {
  if (!e)
    return;
  const n = Hr(e, t, o), s = Me(Ur(e, n), n);
  return o = [...o, n.name.toString()], Me(
    Lo(s.to, t, o),
    s
  );
}, Wr = (e) => {
  const t = ["name", "to", "resolve", "resolveFromRegex"], o = e;
  return t.forEach((n) => {
    delete o[n];
  }), o;
}, qr = (e, t) => {
  const o = Lo(e, t);
  return o === void 0 ? {} : Wr(o);
}, Xr = () => {
  const { globalConfig: e } = Ae();
  return {
    getIcon: (t) => qr(t, e.value.icons)
  };
}, Kr = Symbol("VaAppCachePlugin"), Jr = () => {
  const e = ho(Kr);
  return e || {
    colorContrast: {}
  };
}, Zr = (e) => {
  const t = typeof e == "function" ? c(e) : c(e), o = new Proxy(t, {
    get(n, s, r) {
      if (typeof t.value == "object")
        return S(Reflect.get(t.value, s, r));
    },
    set(n, s, r) {
      return ht(t.value[s]) && !ht(r) ? t.value[s].value = r : t.value[s] = r, !0;
    },
    deleteProperty(n, s) {
      return Reflect.deleteProperty(t.value, s);
    },
    has(n, s) {
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
  return Le(o);
}, Yr = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), Qr = /[A-Z0-9]*(?:[^\-_|A-Z|\s.])*/gm, Po = (e) => {
  var t;
  return ((t = e.match(Qr)) == null ? void 0 : t.map((o) => o.trim().split(/([0-9]+)|([a-zA-Z]+)/g)).flat().filter(Boolean)) || [];
}, nt = (e) => Po(e).map((t) => t.toLowerCase()).join("-"), es = (e) => Po(e).map((t, o) => o === 0 ? t.toLowerCase() : Yr(t)).join(""), Eo = /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6,8})$/, $o = /^rgba?\(([\d.]+, ?){2}[\d.]+(, ?[\d.]+)?\)$/, ko = /hsla?\([\d.]+(deg|rad|turn|grad)?(,?\s?[\d.]+%?){2}(,?\s?(\/\s?)?[\d.]+%?)?\)/, ts = (e) => Eo.test(e) || $o.test(e) || ko.test(e), It = (e) => typeof e != "object" || e === null ? !1 : "h" in e && "s" in e && "l" in e, jt = (e) => typeof e != "object" || e === null ? !1 : "r" in e && "g" in e && "b" in e, Bo = (e) => {
  if (!Eo.test(e))
    return null;
  const t = e.replace("#", ""), o = t.length < 6, [n, s, r, a] = o ? t.split("").map((l) => parseInt(l + l, 16)) : t.match(/.{2}/g).map((l) => parseInt(l, 16));
  return { r: n, g: s, b: r, a: a ?? 1 };
}, Vo = (e) => {
  if (!$o.test(e))
    return null;
  const [t, o, n, s = 1] = e.match(/[\d.]+/g).map(Number);
  return { r: t, g: o, b: n, a: s };
}, Ao = (e) => {
  if (!ko.test(e))
    return null;
  const [t, o, n, s = "1"] = e.match(/[\d.]+%?/g);
  return {
    h: Number(t),
    s: Number(o.replace("%", "")),
    l: Number(n.replace("%", "")),
    a: s.endsWith("%") ? Number(s.replace("%", "")) / 100 : Number(s)
  };
}, no = (e) => {
  const t = e.r / 255, o = e.g / 255, n = e.b / 255, s = Math.max(t, o, n), r = Math.min(t, o, n);
  let a = 0, l = 0;
  const i = (s + r) / 2;
  if (s !== r) {
    const u = s - r;
    switch (l = i > 0.5 ? u / (2 - s - r) : u / (s + r), s) {
      case t:
        a = (o - n) / u + (o < n ? 6 : 0);
        break;
      case o:
        a = (n - t) / u + 2;
        break;
      case n:
        a = (t - o) / u + 4;
        break;
    }
    a *= 60;
  }
  return { h: Math.round(a), s: Math.round(l * 100), l: Math.round(i * 100), a: e.a };
}, yt = (e, t, o) => (o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? e + (t - e) * 6 * o : o < 1 / 2 ? t : o < 2 / 3 ? e + (t - e) * (2 / 3 - o) * 6 : e), ro = (e) => {
  const t = e.h / 360, o = e.s / 100, n = e.l / 100, s = n < 0.5 ? n * (1 + o) : n + o - n * o, r = 2 * n - s, a = yt(r, s, t + 1 / 3), l = yt(r, s, t), i = yt(r, s, t - 1 / 3);
  return { r: Math.round(a * 255), g: Math.round(l * 255), b: Math.round(i * 255), a: e.a };
}, Ge = (e) => {
  if (It(e))
    return { ...e };
  if (jt(e))
    return no(e);
  const t = Bo(e) ?? Vo(e);
  if (t)
    return no(t);
  const o = Ao(e);
  if (o)
    return o;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, Nt = ({ h: e, s: t, l: o, a: n }) => `hsla(${e},${t}%,${o}%,${n ?? 1})`, Ft = (e) => {
  if (jt(e))
    return { ...e };
  if (It(e))
    return ro(e);
  const t = Ao(e);
  if (t)
    return ro(t);
  const o = Bo(e) ?? Vo(e);
  if (o)
    return o;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, Ro = ({ r: e, g: t, b: o, a: n }) => n === 1 ? `rgb(${e},${t},${o})` : `rgba(${e},${t},${o},${n ?? 1})`, os = (e) => {
  if (It(e))
    return Nt(e);
  if (jt(e))
    return Ro(e);
  if (typeof e == "string")
    return e;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, ns = (e, { h: t, s: o, l: n, a: s }) => {
  const r = Ge(e);
  return r.a = r.a ?? 1, r.h = t ?? r.h, r.s = o ?? r.s, r.l = n ?? r.l, r.a = s ?? r.a, r.h < 0 && (r.h = 360 + r.h), r.h > 360 && (r.h = r.h - 360), r.s = Math.max(0, Math.min(100, r.s)), r.l = Math.max(0, Math.min(100, r.l)), r.a = Math.max(0, Math.min(1, r.a)), r;
}, rs = (e, { h: t, s: o, l: n, a: s }) => {
  const r = Ge(e);
  return r.a = r.a ?? 1, r.h += t ?? 0, r.s += o ?? 0, r.l += n ?? 0, r.a += s ?? 0, r.h < 0 && (r.h = 360 + r.h), r.h > 360 && (r.h = r.h - 360), r.s = Math.max(0, Math.min(100, r.s)), r.l = Math.max(0, Math.min(100, r.l)), r.a = Math.max(0, Math.min(1, r.a)), r;
}, ss = (e) => /var\(--.+\)/.test(e), as = (e) => `--va-${nt(e)}`, so = (e) => es(e), Re = (e, t) => {
  const { r: o, g: n, b: s } = Ft(e);
  return Ro({ r: o, g: n, b: s, a: t });
}, ao = (e) => {
  const { r: t, g: o, b: n } = Ft(e);
  return Math.sqrt(t * t * 0.241 + o * o * 0.691 + n * n * 0.068);
}, ls = (e, t = 0.4) => Re(e, t), is = (e, t = 0.4) => Re(e, t), us = (e, t = 0.2) => Re(e, t), cs = (e, t = 0.3) => Re(e, t), _e = (e, t) => Nt(rs(Ge(e), t)), ds = (e, t) => Nt(ns(Ge(e), t)), ps = (e) => {
  const t = Ge(e);
  if (t.s < 10)
    return _e(t, { h: 2, s: 5, l: 10 });
  if (t.s < 30)
    return _e(t, { s: -14, l: 11 });
  if (t.h >= 0 && t.h < 44 || t.h >= 285)
    return _e(t, { h: 11, s: 27, l: 8 });
  if (t.h >= 44 && t.h < 85)
    return _e(t, { h: 3, l: 9 });
  if (t.h >= 85 && t.h < 165)
    return _e(t, { h: 16, l: 14 });
  if (t.h >= 165 && t.h < 285)
    return _e(t, { h: -15, s: 3, l: 2 });
  throw new Error("This method should handle all colors. But it didn't for some reason.");
}, fs = (e) => `linear-gradient(to right, ${ps(e)}, ${os(e)})`, vs = (e, t, o) => {
  const n = Re(t, o);
  return `linear-gradient(0deg, ${n}, ${n}), ${e}`;
}, ms = (e) => e ? e === "transparent" ? !0 : Ft(e).a <= 0.1 : !1, Ce = () => {
  const e = Ae();
  if (!e)
    throw new Error("useColors must be used in setup function or Vuestic GlobalConfigPlugin is not registered!");
  const { globalConfig: t } = e, o = Zr({
    get: () => t.value.colors.presets[t.value.colors.currentPresetName],
    set: (d) => {
      n(d);
    }
  }), n = (d) => {
    t.value.colors.presets[t.value.colors.currentPresetName] = {
      ...t.value.colors.variables,
      ...d
    };
  }, s = () => o, r = (d, y, P) => {
    if (y || (y = o.primary), d === "transparent")
      return "#ffffff00";
    if (d === "currentColor")
      return d;
    if (d?.startsWith("on")) {
      const W = d.slice(2);
      if (o[so(W)])
        return r(w(r(W)), void 0, P);
    }
    d || (d = r(y));
    const $ = o[d] || o[so(d)];
    return $ ? P ? `var(${as(d)})` : $ : ts(d) || P && ss(d) ? d : (Ot(`'${d}' is not a proper color! Use HEX or default color themes
      names (https://vuestic.dev/en/styles/colors#default-color-themes)`), r(y));
  }, a = (d) => c({
    get() {
      return r(d);
    },
    set(y) {
      n({ [d]: y });
    }
  }), l = (d, y = "va") => Object.keys(d).filter((P) => d[P] !== void 0).reduce((P, $) => (P[`--${y}-${nt($)}`] = r(d[$], void 0, !0), P[`--${y}-on-${nt($)}`] = r(w(r(d[$])), void 0, !0), P), {}), i = Jr(), u = (d) => typeof d != "string" ? ao(d) : (i.colorContrast[d] || (i.colorContrast[d] = ao(d)), i.colorContrast[d]), p = c(() => u(r("textPrimary")) > 255 / 2 ? "textInverted" : "textPrimary"), f = c(() => u(r("textPrimary")) > 255 / 2 ? "textPrimary" : "textInverted"), w = (d, y, P) => {
    const $ = `on${Bn(String(d))}`;
    return o[$] ? o[$] : (y = y || p.value, P = P || f.value, u(d) > t.value.colors.threshold ? y : P);
  }, C = c({
    get: () => t.value.colors.currentPresetName,
    set: (d) => {
      v(d);
    }
  }), g = c(() => t.value.colors.presets), v = (d) => {
    if (t.value.colors.currentPresetName = d, !t.value.colors.presets[d])
      return Ot(`Preset ${d} does not exist`);
  };
  return {
    colors: o,
    currentPresetName: C,
    presets: g,
    applyPreset: v,
    setColors: n,
    getColors: s,
    getColor: r,
    getComputedColor: a,
    getBoxShadowColor: ls,
    getBoxShadowColorFromBg: is,
    getHoverColor: us,
    getFocusColor: cs,
    getGradientBackground: fs,
    getTextColor: w,
    shiftHSLAColor: _e,
    setHSLAColor: ds,
    colorsToCSSVariable: l,
    colorToRgba: Re,
    getStateMaskGradientBackground: vs
  };
}, gs = /* @__PURE__ */ A({
  name: "VaIcon",
  __name: "VaIcon",
  props: {
    ...Rt,
    ...at,
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
    const t = e, { getColor: o } = Ce(), { sizeComputed: n } = Tt(t), { getIcon: s } = Xr(), r = c(() => s(t.name)), a = c(() => t.component || t.tag || r.value.component || r.value.tag || "i"), l = Vn(), i = c(() => ({ ...r.value.attrs, ...yo(l, ["class"]) })), u = (v) => {
      if (!(v === void 0 || v === !1))
        return v === "counter-clockwise" ? "va-icon--spin-reverse" : "va-icon--spin";
    }, p = c(() => [
      r.value.class,
      u(t.spin ?? r.value.spin)
    ]), f = c(() => {
      const v = t.rotation ? `rotate(${t.rotation}deg)` : "", d = t.flip === "vertical" || t.flip === "both" ? -1 : 1, y = t.flip === "horizontal" || t.flip === "both" ? -1 : 1;
      return `${t.flip === "off" ? "" : `scale(${d}, ${y})`} ${v}`.trim();
    }), w = c(() => ({
      transform: f.value,
      cursor: l.onClick ? "pointer" : null,
      color: t.color ? o(t.color, void 0, !0) : r.value.color,
      fontSize: n.value,
      height: n.value,
      lineHeight: n.value
    })), C = c(() => l.tabindex ?? -1), g = c(() => l.role !== "button" || C.value < 0);
    return (v, d) => (E(), Z(tt(a.value), be({
      class: ["va-icon", p.value],
      style: w.value,
      "aria-hidden": g.value,
      notranslate: ""
    }, i.value), {
      default: B(() => [
        de(v.$slots, "default", {}, () => [
          r.value.content ? (E(), U(pe, { key: 0 }, [
            ee(ie(r.value.content), 1)
          ], 64)) : le("", !0)
        ])
      ]),
      _: 3
    }, 16, ["class", "style", "aria-hidden"]));
  }
}), Lt = De(gs), Pt = (e) => {
  const t = ae().props;
  return c(() => {
    const n = t?.[e];
    return n === void 0 ? n : Number(n);
  });
}, To = (e) => typeof e == "function", Io = () => typeof window > "u", ys = () => !Io(), bs = (e) => {
  const t = c(ys), o = h(null);
  return se(t, () => {
    t.value && (o.value = e());
  }, { immediate: !0 }), o;
}, hs = () => bs(() => window), he = (e) => {
  if (e && typeof e == "object" && (e = S(e), !!e))
    return typeof e.$el < "u" ? e.$el : e;
}, Et = (e, ...t) => {
  if (!(!e || typeof e != "object")) {
    if ("addEventListener" in e && typeof e.addEventListener == "function") {
      e.addEventListener(...t);
      return;
    }
    "parentElement" in e && Et(e.parentElement, ...t);
  }
}, $t = (e, ...t) => {
  if (!(!e || typeof e != "object")) {
    if ("removeEventListener" in e && typeof e.removeEventListener == "function") {
      e.removeEventListener(...t);
      return;
    }
    "parentElement" in e && $t(e.parentElement, ...t);
  }
}, Be = (e, t, o) => {
  const n = o && typeof o != "boolean" ? o : hs(), s = typeof o == "boolean" ? o : !1;
  se(n, (r, a) => {
    Array.isArray(e) ? e.forEach((l) => {
      Et(he(S(r)), l, t, s), $t(he(S(a)), l, t, s);
    }) : (Et(he(S(r)), e, t, s), $t(he(S(a)), e, t, s));
  }, { immediate: !0 });
}, Cs = (e) => {
  const t = ae();
  let o = () => {
  };
  const n = An((s, r) => (o = r, {
    get() {
      var a;
      return s(), (a = t.proxy) == null ? void 0 : a.$refs[e];
    },
    set(a) {
    }
  }));
  return M(o), Rn(o), n;
}, Ss = (e) => e.startsWith("$t:"), jo = (e) => ({ type: String, default: e }), lo = (e, t) => (t && Object.keys(t).forEach((o) => {
  e = e.replace(`{${o}}`, String(t[o]));
}), e), lt = () => {
  const { globalConfig: e } = Ae(), t = c(() => e.value.i18n);
  function o(s, r) {
    var a;
    const l = (a = ae()) == null ? void 0 : a.appContext.config.globalProperties.$t;
    if (typeof l == "function") {
      const u = l(`vuestic.${s}`, r);
      if (u)
        return u;
    }
    const i = t.value[s];
    return i ? lo(i, r) || s : (Ot(`${s} not found in VuesticUI i18n config`), s);
  }
  function n(s, r) {
    return s ? Ss(s) ? o(s.slice(3), r) : lo(s, r) || s : "";
  }
  return {
    tp: n,
    t: o
  };
}, No = (e, t = !1) => {
  const { props: o } = ae(), { getColor: n, getTextColor: s } = Ce();
  return { textColorComputed: c(() => {
    if (o.textColor)
      return n(o.textColor);
    const a = e ? S(e) : o.color;
    if (!a)
      return "currentColor";
    const l = n(a);
    return ms(l) ? "currentColor" : S(t) ? l : n(s(l));
  }) };
}, ws = (e, t, o) => {
  const n = ae();
  if (!n)
    throw new Error("`useButtonBackground` hook must be used only inside of setup function!");
  const s = n.props, { getColor: r, getGradientBackground: a } = Ce(), l = c(() => s.plain ? "transparent" : s.gradient ? a(e.value) : e.value), i = c(() => !s.plain && o.value), u = c(() => !s.plain && t.value), p = c(() => u.value && s.pressedBehavior === "opacity" ? s.pressedOpacity : i.value && s.hoverBehavior === "opacity" ? Number(s.hoverOpacity) : Number(s.backgroundOpacity)), f = c(() => i.value && s.hoverBehavior === "mask"), w = c(() => u.value && s.pressedBehavior === "mask"), C = c(() => w.value ? s.pressedOpacity : f.value ? Number(s.hoverOpacity) : 0), g = c(() => w.value ? r(s.pressedMaskColor) : f.value ? r(s.hoverMaskColor) : "transparent");
  return {
    backgroundColor: l,
    backgroundColorOpacity: p,
    backgroundMaskOpacity: C,
    backgroundMaskColor: g
  };
}, Os = {
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
}, Fo = (e) => {
  const t = ae(), o = c(() => t?.appContext.config.globalProperties), n = c(() => {
    var f;
    return (f = o.value) == null ? void 0 : f.$router;
  }), s = c(() => {
    var f;
    return (f = o.value) == null ? void 0 : f.$route;
  }), { getGlobalConfig: r } = Ae(), a = c(() => {
    if (e.disabled)
      return e.tag;
    if (e.href && !e.to)
      return "a";
    const f = r();
    return f.routerComponent && e.to ? f.routerComponent : e.to && n.value !== void 0 ? "router-link" : e.to && n.value === void 0 ? "a" : e.tag || "div";
  }), l = c(() => e.disabled ? !1 : !!(e.href || e.to)), i = c(() => l.value ? a.value === "a" ? {
    target: e.target,
    href: p.value
  } : {
    target: e.target,
    to: e.to,
    replace: e.replace,
    append: e.append,
    activeClass: e.activeClass,
    exact: e.exact,
    exactActiveClass: e.exactActiveClass
  } : {}), u = c(() => {
    if (!n.value || !e.to)
      return !1;
    const f = n.value.resolve(e.to).href, w = n.value.currentRoute.value.path;
    return f.replace("#", "") === w.replace("#", "");
  }), p = c(() => {
    var f;
    return e.href ? e.href : s.value === void 0 && e.to ? e.to : e.to ? (f = n.value) == null ? void 0 : f.resolve(e.to, s.value).href : void 0;
  });
  return {
    isLinkTag: l,
    tagComputed: a,
    hrefComputed: p,
    isActiveRouterLink: u,
    linkAttributesComputed: i
  };
}, _s = (e) => {
  const { linkAttributesComputed: t, isLinkTag: o } = Fo(e), n = c(() => o.value ? void 0 : e.type), s = c(() => {
    const r = {
      "aria-disabled": !!e.disabled,
      disabled: !!e.disabled
    };
    return o.value ? r : {
      type: n.value,
      tabindex: e.loading || e.disabled ? -1 : 0,
      ...r
    };
  });
  return c(() => ({ ...t.value, ...s.value }));
}, xs = (e) => {
  var t, o, n;
  if (Io())
    return e;
  if (e > 0) {
    const s = (t = window?.navigator) == null ? void 0 : t.userAgent, r = s && /^((?!chrome|android).)*safari/i.test((o = window?.navigator) == null ? void 0 : o.userAgent), a = s && /(version.)15|16/i.test((n = window?.navigator) == null ? void 0 : n.userAgent);
    if (r && !a)
      return e < 1 ? 1 - e : e;
  }
  return e;
}, Ls = (e, t, o, n) => {
  const s = ae();
  if (!s)
    throw new Error("`useButtonTextColor` hook must be used only inside of setup function!");
  const r = s.props, { getColor: a, colorToRgba: l, getStateMaskGradientBackground: i } = Ce(), u = c(() => ({
    background: "transparent",
    color: e.value,
    "-webkit-background-clip": "text",
    "background-clip": "text",
    opacity: C.value
  })), p = (g, v, d) => {
    const y = a(g);
    let P;
    return d === "opacity" ? P = { color: l(e.value, v) } : P = {
      background: i(t.value, y, v),
      color: v < 1 ? l(e.value, xs(v)) : y
    }, { ...u.value, ...P };
  }, f = c(() => p(r.hoverMaskColor, Number(r.hoverOpacity), r.hoverBehavior)), w = c(() => p(r.pressedMaskColor, r.pressedOpacity, r.pressedBehavior)), C = c(() => {
    if (!r.disabled)
      return r.textOpacity === 1 || n.value && !o.value ? 1 : o.value ? 0.9 : r.textOpacity;
  });
  return c(() => {
    const g = {
      color: e.value,
      background: "transparent"
    };
    return r.plain && Object.assign(g, u.value, { background: e.value }), r.plain ? o.value ? w.value : n.value ? f.value : g : g;
  });
}, io = (e, t, o) => Math.min(Math.max(e, t), o), Ps = {
  class: "va-progress-circle__wrapper",
  viewBox: "0 0 40 40"
}, Es = ["r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], $s = /* @__PURE__ */ A({
  name: "VaProgressCircle",
  __name: "VaProgressCircle",
  props: {
    ...Rt,
    ...at,
    modelValue: { type: [Number, String], default: 0 },
    indeterminate: { type: Boolean, default: !1 },
    thickness: { type: [Number, String], default: 0.06 },
    color: { type: String, default: "primary" },
    ariaLabel: jo("$t:progressState")
  },
  setup(e) {
    const t = e, { getColor: o } = Ce(), { sizeComputed: n } = Tt(t), s = c(() => io(Number(t.thickness), 0, 1) / 2 * 100), r = c(() => 20 - 20 * s.value / 100), a = c(() => 2 * Math.PI * r.value), l = c(() => a.value * (1 - io(Number(t.modelValue), 0, 100) / 100)), i = c(() => o(t.color, void 0, !0)), { tp: u } = lt(), p = c(() => ({ color: i.value })), f = c(() => ({
      width: n.value,
      height: n.value
    })), w = c(() => ({
      "va-progress-circle--indeterminate": t.indeterminate
    })), C = c(() => ({
      role: "progressbar",
      "aria-label": u(t.ariaLabel),
      "aria-valuenow": t.indeterminate ? void 0 : t.modelValue
    }));
    return (g, v) => (E(), U("div", be({
      class: ["va-progress-circle", w.value],
      style: f.value
    }, C.value), [
      (E(), U("svg", Ps, [
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
        }, null, 8, Es)
      ])),
      g.$slots.default ? (E(), U("div", {
        key: 0,
        style: kt(p.value),
        class: "va-progress-circle__info"
      }, [
        de(g.$slots, "default")
      ], 4)) : le("", !0)
    ], 16));
  }
}), Mo = De($s), zo = (e, t) => Object.keys(e).filter((o) => t.includes(o)).reduce((o, n) => (o[n] = e[n], o), {}), ks = {
  hoverBehavior: {
    type: String,
    default: "mask",
    validator: (e) => ["opacity", "mask"].includes(e)
  },
  hoverOpacity: { type: [Number, String], default: 0.15 },
  hoverMaskColor: { type: String, default: "textInverted" }
}, Bs = {
  pressedBehavior: {
    type: String,
    default: "mask",
    validator: (e) => ["opacity", "mask"].includes(e)
  },
  pressedOpacity: { type: Number, default: 0.13 },
  pressedMaskColor: { type: String, default: "textPrimary" }
}, Vs = {
  loading: { type: Boolean, default: !1 }
}, Do = (e) => e instanceof HTMLElement, As = (e) => {
  !e || !Do(e) || (e.focus(), e.dispatchEvent(new FocusEvent("focus", { bubbles: !0 })));
}, Rs = (e) => {
  !e || !Do(e) || (e.blur(), e.dispatchEvent(new Event("blur", { bubbles: !0 })));
}, uo = (e, t, o = {}) => {
  M(() => window.addEventListener(e, t, { capture: !0, ...o })), Ve(() => window.removeEventListener(e, t, { capture: !0, ...o }));
}, Ts = () => {
  const e = ze(), t = () => {
    e.value = document.activeElement;
  };
  return M(t), uo("focus", t), uo("blur", t), e;
};
function Is(e, t) {
  const o = Ts(), n = c({
    get: () => wt(o.value) || wt(e?.value) ? !1 : o.value === e?.value,
    set: (i) => {
      i ? a() : l();
    }
  }), s = (i) => {
  }, r = (i) => {
  }, a = () => {
    e?.value && As(he(e?.value));
  }, l = () => {
    e?.value && Rs(he(e?.value));
  };
  return Be("focus", s, e), Be("blur", r, e), {
    isFocused: n,
    onFocus: s,
    onBlur: r,
    focus: a,
    blur: l
  };
}
const Go = (e) => {
  if (ht(e))
    return c({
      get() {
        return he(e.value);
      },
      set(o) {
        e.value = o;
      }
    });
  if (e) {
    const o = Cs(e);
    return c({
      get() {
        return he(o.value);
      },
      set(n) {
        o.value = n;
      }
    });
  }
  const t = ze();
  return c({
    set(o) {
      t.value = he(o);
    },
    get() {
      return t.value;
    }
  });
};
function js(e, t) {
  const o = h(!1), n = () => {
    t?.value || (o.value = !0);
  }, s = () => {
    o.value = !1;
  };
  t && se(t, (a) => {
    a && (o.value = !1);
  });
  const r = Go(e);
  return Be("mouseenter", n, r), Be("mouseleave", s, r), { isHovered: o, onMouseEnter: n, onMouseLeave: s };
}
function Ns(e) {
  const t = h(!1), o = () => {
    t.value = !0;
  }, n = () => {
    t.value = !1;
  }, s = Go(e);
  return Be(["mousedown", "touchstart", "dragstart"], o, s), Be([
    "mouseup",
    "mouseleave",
    "touchend",
    "touchcancel",
    "drop",
    "dragend"
  ], n, !0), { isPressed: t, onMouseDown: o, onMouseUp: n };
}
const Uo = (e, t = !0) => {
  var o;
  if (go(e))
    return !0;
  if (!e || t && (!To(e) || !((o = e()) != null && o.length)))
    return !1;
  const n = t ? e() : e;
  return Array.isArray(n) ? n.some((s) => Array.isArray(s.children) ? Uo(s.children, !1) : s.children || s.props) : !!n.children;
}, Fs = (e = "default") => {
  const { slots: t } = ae();
  return c(() => Uo(t[e]));
}, Mt = (e, t) => {
  At && !e && console.warn('You must pass the @param "prefix" to the useBem hook!');
  const o = c(() => typeof t == "function" ? t() : S(t)), n = c(() => Object.entries(S(o)).reduce((a, [l, i]) => (i && (a[`${e}--${nt(l)}`] = !0), a), {})), s = c(() => Object.keys(n.value)), r = c(() => s.value.join(" "));
  return new Proxy({}, {
    ownKeys() {
      return Reflect.ownKeys(n.value);
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(n.value, l);
    },
    get(a, l, i) {
      switch (l) {
        case "asArray":
          return s;
        case "asString":
          return r;
        case "asObject":
          return n;
        default:
          return Reflect.get(n.value, l, i);
      }
    }
  });
}, Ms = /* @__PURE__ */ A({
  name: "VaButton",
  __name: "VaButton",
  props: {
    ...at,
    ...Rt,
    ...ks,
    ...Bs,
    ...Vs,
    ...Os,
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
    const o = e, { getColor: n } = Ce(), s = c(() => n(o.color)), { sizeComputed: r } = Tt(o), a = c(() => {
      const O = /([0-9]*)(px)/.exec(r.value);
      return O ? `${+O[1] / 2}${O[2]}` : r.value;
    }), { tagComputed: l } = Fo(o), i = _s(o), { disabled: u } = Tn(o), p = ze(), { focus: f, blur: w } = Is(p), { isHovered: C } = js(p, u), { isPressed: g } = Ns(p), v = c(() => o.iconColor ? n(o.iconColor) : x.value), d = c(() => ({
      color: v.value,
      size: o.size
    })), y = c(() => ({ "va-button__content--loading": o.loading })), P = Fs(), $ = c(() => !!(o.iconRight && !o.icon || !o.iconRight && o.icon)), W = c(() => !P.value && $.value), ue = Pt("textOpacity"), Q = Pt("backgroundOpacity"), j = Mt("va-button", () => ({
      ...zo(o, ["disabled", "block", "loading", "round", "plain"]),
      small: o.size === "small",
      normal: !o.size || o.size === "medium",
      large: o.size === "large",
      opacity: ue.value < 1,
      bordered: !!o.borderColor,
      iconOnly: W.value,
      leftIcon: !W.value && !!o.icon && !o.iconRight,
      rightIcon: !W.value && !o.icon && !!o.iconRight
    })), Y = c(() => o.plain || Q.value < 0.5), { textColorComputed: x } = No(s, Y), {
      backgroundColor: I,
      backgroundColorOpacity: ge,
      backgroundMaskOpacity: fe,
      backgroundMaskColor: re
    } = ws(s, g, C), ve = Ls(x, s, g, C), b = c(() => ({
      borderColor: o.borderColor ? n(o.borderColor) : "transparent",
      ...ve.value
    }));
    return t({
      focus: f,
      blur: w
    }), (O, T) => (E(), Z(tt(S(l)), be({
      ref_key: "button",
      ref: p,
      class: ["va-button", S(j)],
      style: [b.value, `--va-background-color: ${String(S(I))};--va-background-color-opacity: ${String(S(ge))};--va-background-mask-color: ${String(S(re))};--va-background-mask-opacity: ${String(S(fe))}`]
    }, S(i)), {
      default: B(() => [
        _("span", {
          class: we(["va-button__content", y.value])
        }, [
          de(O.$slots, "prepend", xe(Fe({ icon: e.icon, iconAttributes: d.value })), () => [
            e.icon ? (E(), Z(S(Lt), be({
              key: 0,
              class: "va-button__left-icon",
              name: e.icon
            }, d.value), null, 16, ["name"])) : le("", !0)
          ]),
          de(O.$slots, "default"),
          de(O.$slots, "append", xe(Fe({ icon: e.iconRight, iconAttributes: d.value })), () => [
            e.iconRight ? (E(), Z(S(Lt), be({
              key: 0,
              class: "va-button__right-icon",
              name: e.iconRight
            }, d.value), null, 16, ["name"])) : le("", !0)
          ])
        ], 2),
        O.loading ? de(O.$slots, "loading", xe(be({ key: 0 }, {
          size: a.value,
          color: S(x)
        })), () => [
          k(S(Mo), {
            class: "va-button__loader",
            size: a.value,
            color: S(x),
            thickness: 0.15,
            indeterminate: ""
          }, null, 8, ["size", "color"])
        ]) : le("", !0)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
}), bt = De(Ms), rt = Symbol("NOT_PROVIDED"), zs = (e, t) => {
  const o = ae();
  return c(() => {
    if (!o?.vnode.props)
      return rt;
    const n = t[e];
    return e in o.vnode.props ? n : rt;
  });
}, Ds = {
  stateful: { type: Boolean, default: !1 },
  modelValue: { type: void 0 }
}, Gs = (e, t, o = "modelValue", n = {}) => {
  const { eventName: s, defaultValue: r } = n, a = s || `update:${o.toString()}`, l = zs(o, e), i = "defaultValue" in n, u = h(
    l.value === rt ? i ? r : e[o] : l.value
  );
  let p;
  const f = () => {
    p = se(() => e[o], (C) => {
      u.value = C;
    });
  };
  se(() => e.stateful, (C) => {
    C ? f() : p?.();
  }, { immediate: !0 });
  const w = c({
    get: () => e.stateful ? u.value : e[o],
    set: (C) => {
      e.stateful && (u.value = C), t(a, C);
    }
  });
  return Object.defineProperty(w, "stateful", {
    get: () => e.stateful
  }), Object.defineProperty(w, "userProvided", {
    get: () => l.value !== rt
  }), { valueComputed: w };
}, Ho = ["top", "bottom"], Wo = ["left", "right"], Us = [...Ho, ...Wo], Hs = ["start", "end", "center"], Ws = Us.reduce((e, t) => (e.push(t), Hs.forEach((o) => e.push(`${t}-${o}`)), e), ["auto"]), qs = Ho.reduce((e, t) => (Wo.forEach((o) => {
  e.push(`${t}-${o}`), e.push(`${o}-${t}`);
}), e), []), Xs = [...Ws, ...qs], Ks = {
  "top-left": "top-start",
  "left-top": "top-start",
  "top-right": "top-end",
  "right-top": "top-end",
  "bottom-left": "bottom-start",
  "left-bottom": "bottom-start",
  "bottom-right": "bottom-end",
  "right-bottom": "bottom-end"
}, Js = (e) => {
  const t = c(() => (Ks[e.placement] || e.placement).split("-")), o = c(() => {
    const s = t.value[0];
    return s === "auto" ? "bottom" : s;
  }), n = c(() => t.value[1] || "center");
  return { position: o, align: n };
}, Zs = () => {
  const e = (n) => typeof n == "string" ? !isNaN(+n) || n.endsWith("px") || n.endsWith("rem") : !1;
  return { isParsableMeasure: e, isParsablePositiveMeasure: (n) => typeof n == "number" ? n >= 0 : e(n) && parseInt(n) >= 0, parseSizeValue: (n, s = 16) => {
    const r = S(n);
    if (typeof r == "string") {
      const a = parseInt(r);
      return isNaN(a) ? 0 : r.endsWith("rem") ? a * S(s) : a;
    }
    return r;
  } };
}, { isParsableMeasure: co, parseSizeValue: po } = Zs(), Ys = {
  overlap: { type: Boolean, default: !1 },
  placement: {
    type: String,
    default: "top-end",
    validator: (e) => Xs.includes(e)
  },
  offset: {
    type: [Number, String, Array],
    default: 0,
    validator: (e) => Array.isArray(e) ? e.every(co) : typeof e == "string" ? co(e) : !isNaN(e)
  }
}, Qs = (e, t) => {
  if (!t.value)
    return {};
  const { position: o, align: n } = Js(e), s = c(() => ({
    start: e.overlap ? "-50%" : "-100%",
    center: "-50%",
    end: e.overlap ? "-50%" : "0%"
  })[n.value]), r = c(() => {
    if (!e.offset)
      return {};
    const i = ["left", "right"].includes(o.value) ? "top" : "left", u = i === "top" ? "left" : "top";
    if (Array.isArray(e.offset)) {
      const [f, w] = e.offset.map(po);
      return {
        [`margin-${i}`]: `${f}px`,
        [`margin-${u}`]: `${w}px`
      };
    }
    const p = po(e.offset);
    return {
      [`margin-${u}`]: `${p}px`
    };
  }), a = c(() => {
    const i = ["left", "right"].includes(o.value) ? "top" : "left", u = i === "top" ? "left" : "top";
    let p = "0%";
    return u === "top" && o.value === "bottom" && (p = "100%"), u === "left" && o.value === "right" && (p = "100%"), {
      start: { [i]: "0%", [u]: p },
      center: { [i]: "50%", [u]: p },
      end: { [i]: "100%", [u]: p }
    }[n.value];
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
    }, { x: u, y: p } = i[o.value];
    return { transform: `translate(${u}, ${p})` };
  });
  return c(() => ({
    ...a.value,
    ...l.value,
    ...r.value
  }));
}, ea = {
  props: "prop",
  attrs: "prop",
  slots: "slot"
}, ta = (e, t = ["props", "attrs"]) => {
  if (!At)
    return;
  const o = ae();
  if (!o)
    throw new Error("`useDeprecated` hook must be used only inside of setup function!");
  const n = o.type.name, s = S(e);
  t.every((r) => {
    var a;
    const l = ea[r], i = (u) => console.warn(`The '${u}' ${l} (${n} component) is deprecated! Please, check the documentation.`);
    if (r === "props") {
      const u = ((a = o.propsOptions) == null ? void 0 : a[0]) || {}, p = o.props || {};
      return s.forEach((f) => {
        u[f] && p[f] !== u[f].default && i(f);
      }), !0;
    }
    return Object.keys({ ...o[r] }).forEach((u) => {
      s.includes(u) && i(u);
    }), !0;
  });
}, oa = ["aria-labelledby"], na = { class: "va-badge__text" }, ra = /* @__PURE__ */ A({
  name: "VaBadge",
  __name: "VaBadge",
  props: {
    ...at,
    ...Ys,
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
    ta(["transparent"]);
    const o = In(), n = c(() => !(t.text || t.visibleEmpty || t.dot || o.text)), s = c(() => !!(o.default || t.dot)), r = Mt("va-badge", () => ({
      ...zo(t, ["visibleEmpty", "dot", "multiLine"]),
      empty: n.value,
      floating: s.value
    })), { getColor: a } = Ce(), l = c(() => a(t.color)), { textColorComputed: i } = No(l), u = Qs(t, s), p = c(() => ({
      color: i.value,
      borderColor: l.value,
      backgroundColor: l.value,
      opacity: t.transparent ? 0.5 : 1,
      ...S(u)
    })), f = c(() => t.text ? String(t.text) : void 0);
    return (w, C) => (E(), U("div", {
      class: we(["va-badge", S(r)]),
      role: "status",
      "aria-labelledby": f.value
    }, [
      _("span", {
        class: "va-badge__text-wrapper",
        style: kt(p.value)
      }, [
        _("span", na, [
          de(w.$slots, "text", {}, () => [
            ee(ie(e.text), 1)
          ])
        ])
      ], 4),
      de(w.$slots, "default")
    ], 10, oa));
  }
}), sa = De(ra), zt = (e, ...t) => To(e) ? e(...t) : e, aa = { class: "va-stepper__default-controls" }, la = /* @__PURE__ */ A({
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
    const t = e, { t: o } = lt(), n = c(() => {
      const r = t.steps[Number(t.modelValue)];
      return zt(r.isLoading) || !1;
    }), s = c(() => {
      const r = t.steps.length - 1;
      return Number(t.modelValue) >= r;
    });
    return (r, a) => (E(), U("div", aa, [
      k(S(bt), {
        preset: "primary",
        disabled: Number(r.$props.modelValue) <= 0,
        loading: n.value,
        onClick: a[0] || (a[0] = (l) => r.$props.stepControls.prevStep())
      }, {
        default: B(() => [
          ee(ie(S(o)("back")), 1)
        ]),
        _: 1
      }, 8, ["disabled", "loading"]),
      s.value ? r.$props.finishButtonHidden ? le("", !0) : (E(), Z(S(bt), {
        key: 1,
        onClick: a[2] || (a[2] = (l) => r.$props.stepControls.finish()),
        loading: n.value
      }, {
        default: B(() => [
          ee(ie(S(o)("finish")), 1)
        ]),
        _: 1
      }, 8, ["loading"])) : (E(), Z(S(bt), {
        key: 0,
        onClick: a[1] || (a[1] = (l) => r.$props.stepControls.nextStep()),
        disabled: r.$props.nextDisabled,
        loading: n.value
      }, {
        default: B(() => [
          ee(ie(S(o)("next")), 1)
        ]),
        _: 1
      }, 8, ["disabled", "loading"]))
    ]));
  }
}), Ee = (e) => zt(e.hasError, e) || !1, ia = { class: "va-stepper__step-button__icon" }, ua = /* @__PURE__ */ A({
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
    const o = e, n = ze(), s = c(() => Ee(o.step)), r = Pt("stepIndex"), a = c(() => s.value && o.modelValue === r.value), l = c(() => zt(o.step.isLoading) || !1), { getColor: i } = Ce(), u = c(() => i(s.value ? "danger" : o.color)), p = (g) => o.nextDisabled && g > o.modelValue, { t: f } = lt(), w = Mt("va-stepper__step-button", () => ({
      active: o.modelValue >= r.value,
      disabled: o.step.disabled || p(r.value),
      "navigation-disabled": o.navigationDisabled,
      error: a.value
    }));
    se(() => o.focus, () => {
      o.focus.trigger && G(() => {
        var g;
        return (g = n.value) == null ? void 0 : g.focus();
      });
    }, { deep: !0 });
    const C = c(() => ({
      tabindex: o.focus.stepIndex === r.value && !o.navigationDisabled ? 0 : void 0,
      "aria-disabled": o.step.disabled || p(r.value) ? !0 : void 0,
      "aria-current": o.modelValue === o.stepIndex ? f("step") : void 0
    }));
    return (g, v) => (E(), U("li", be({
      ref_key: "stepElement",
      ref: n,
      class: ["va-stepper__step-button", S(w)],
      onClick: v[0] || (v[0] = (d) => !g.$props.navigationDisabled && g.$props.stepControls.setStep(S(r))),
      onKeyup: [
        v[1] || (v[1] = $e((d) => !g.$props.navigationDisabled && g.$props.stepControls.setStep(S(r)), ["enter"])),
        v[2] || (v[2] = $e((d) => !g.$props.navigationDisabled && g.$props.stepControls.setStep(S(r)), ["space"]))
      ]
    }, C.value, {
      style: `--va-stepper-color: ${String(u.value)}`
    }), [
      _("div", ia, [
        l.value ? (E(), Z(S(Mo), {
          key: 0,
          color: "currentColor",
          indeterminate: "",
          size: "small"
        })) : e.step.icon ? (E(), Z(S(Lt), {
          key: 1,
          name: e.step.icon,
          size: "1.3rem"
        }, null, 8, ["name"])) : (E(), U(pe, { key: 2 }, [
          ee(ie(S(r) + 1), 1)
        ], 64))
      ]),
      ee(" " + ie(e.step.label), 1)
    ], 16));
  }
}), ca = { class: "va-stepper__step-content" }, da = { class: "va-stepper__controls" }, pa = /* @__PURE__ */ A({
  name: "VaStepper",
  __name: "VaStepper",
  props: {
    ...Ds,
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
    ariaLabel: jo("$t:progress"),
    linear: { type: Boolean, default: !1 },
    /** Hidden step shown when all steps complete */
    finishStep: { type: Object }
  },
  emits: ["update:modelValue", "finish", "update:steps"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, r = ze(), { valueComputed: a } = Gs(n, s, "modelValue"), l = c(() => n.finishStep ? [...n.steps, n.finishStep] : n.steps), i = (b) => n.finishStep ? b === l.value.length - 1 : !1, u = h({ trigger: !1, stepIndex: n.navigationDisabled ? -1 : n.modelValue }), { getColor: p } = Ce(), f = (b) => n.nextDisabledOnError && Ee(l.value[b]) ? !0 : n.nextDisabled, w = (b, O) => {
      for (; b >= 0 && b < l.value.length; ) {
        b += O;
        const T = l.value[b];
        if (!T)
          return;
        if (!T.disabled)
          return T;
      }
    }, C = (b, O) => {
      for (; b >= 0 && b < l.value.length; ) {
        b += O;
        const T = l.value[b];
        if (!T)
          return;
        if (Ee(T) === !0)
          return b;
      }
    }, g = async (b) => {
      var O;
      const T = l.value[b], te = l.value[a.value], Ke = w(b, -1);
      if (T.disabled)
        return !1;
      if (n.linear && b < a.value)
        return !0;
      const Je = C(a.value, 1);
      if (n.linear && Je !== void 0 && Je < b)
        return !1;
      let je;
      try {
        je = await ((O = te.beforeLeave) == null ? void 0 : O.call(te, te, T));
      } catch (L) {
        throw new Error(`Error in beforeLeave function: ${L}`);
      }
      return !(je === !1 || (te.completed === void 0 && (te.completed = !0), n.linear && Ke && !Ke.completed) || n.linear && Ee(te));
    }, v = async (b) => {
      await g(b) && (a.value = b);
    }, d = (b) => {
      n.navigationDisabled || (b === "next" ? y(1) : P(1));
    }, y = (b = 1) => {
      const O = u.value.stepIndex + b;
      if (!f(O)) {
        if (O < l.value.length) {
          if (l.value[O].disabled) {
            y(b + 1);
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
    }, P = (b = 1) => {
      const O = u.value.stepIndex - b;
      if (O >= 0) {
        if (l.value[O].disabled) {
          P(b + 1);
          return;
        }
        u.value.stepIndex = O, u.value.trigger = !0;
      } else
        for (let T = l.value.length - 1; T >= 0; T--)
          if (!l.value[T].disabled && !f(T)) {
            u.value.stepIndex = T, u.value.trigger = !0;
            break;
          }
    }, $ = () => {
      requestAnimationFrame(() => {
        var b;
        (b = r.value) != null && b.contains(document.activeElement) || (u.value.stepIndex = n.modelValue, u.value.trigger = !1);
      });
    };
    se(() => n.modelValue, () => {
      u.value.stepIndex = n.modelValue, u.value.trigger = !1;
    });
    const W = (b = 0) => {
      const O = a.value + 1 + b;
      l.value[O] && (l.value[O].disabled && W(b + 1), v(O));
    }, ue = (b = 0) => {
      const O = a.value - 1 - b;
      l.value[O] && (l.value[O].disabled && ue(b + 1), v(O));
    }, j = { setStep: v, nextStep: W, prevStep: ue, finish: async () => {
      await g(n.steps.length - 1) && s("finish");
    } }, Y = (b, O) => ({
      ...j,
      focus: u,
      isActive: n.modelValue === O,
      isCompleted: n.modelValue > O,
      isLastStep: l.value.length - 1 === O,
      isNextStepDisabled: f(O),
      isPrevStepDisabled: O === 0,
      index: O,
      step: b,
      hasError: Ee(b)
    }), { tp: x } = lt(), I = () => {
      u.value.stepIndex = n.modelValue, u.value.trigger = !0;
    }, ge = c(() => ({
      role: "group",
      "aria-label": x(n.ariaLabel),
      "aria-orientation": n.vertical ? "vertical" : "horizontal"
    }));
    function fe(b) {
      return Ee(l.value[b]) ? "danger" : p(n.color);
    }
    return t({
      modelValue: a,
      focusedStep: u,
      getIterableSlotData: Y,
      stepControls: j,
      nextStep: W,
      prevStep: ue,
      setStep: v,
      setFocus: d,
      completeStep: (b) => {
        const O = { ...l.value };
        b === !0 && (O[n.modelValue].hasError = !1), O[n.modelValue].completed = b ?? !0, s("update:steps", O);
      },
      setError: (b) => {
        const O = { ...l.value };
        O[n.modelValue].hasError = b ?? !0, O[n.modelValue].completed = !b, s("update:steps", O);
      }
    }), (b, O) => (E(), U("div", be({
      class: ["va-stepper", { "va-stepper--vertical": b.$props.vertical }]
    }, ge.value), [
      _("ol", {
        class: we(["va-stepper__navigation", { "va-stepper__navigation--vertical": b.$props.vertical }]),
        ref_key: "stepperNavigation",
        ref: r,
        onClick: I,
        onKeyup: [
          $e(I, ["enter"]),
          $e(I, ["space"]),
          O[0] || (O[0] = $e((T) => d("prev"), ["left"])),
          O[1] || (O[1] = $e((T) => d("next"), ["right"]))
        ],
        onFocusout: $
      }, [
        (E(!0), U(pe, null, ot(l.value, (T, te) => (E(), U(pe, {
          key: te + T.label
        }, [
          i(te) ? le("", !0) : (E(), U(pe, { key: 0 }, [
            te > 0 ? de(b.$slots, "divider", xe(be({ key: 0 }, Y(T, te))), () => [
              _("span", {
                class: we(["va-stepper__divider", { "va-stepper__divider--vertical": b.$props.vertical }]),
                "aria-hidden": "true"
              }, null, 2)
            ]) : le("", !0),
            de(b.$slots, `step-button-${te}`, xe(Fe(Y(T, te))), () => [
              k(ua, {
                stepIndex: te,
                color: fe(te),
                modelValue: S(a),
                nextDisabled: e.nextDisabled,
                step: T,
                stepControls: j,
                navigationDisabled: e.navigationDisabled,
                focus: u.value
              }, null, 8, ["stepIndex", "color", "modelValue", "nextDisabled", "step", "navigationDisabled", "focus"])
            ])
          ], 64))
        ], 64))), 128))
      ], 34),
      _("div", {
        class: we(["va-stepper__step-content-wrapper", { "va-stepper__step-content-wrapper--vertical": b.$props.vertical }])
      }, [
        _("div", ca, [
          de(b.$slots, `step-content-${i(S(a)) ? "finish" : S(a)}`, xe(Fe(Y(l.value[S(a)], S(a)))))
        ]),
        _("div", da, [
          de(b.$slots, "controls", xe(Fe(Y(l.value[S(a)], S(a)))), () => [
            e.controlsHidden ? le("", !0) : (E(), Z(la, {
              key: 0,
              modelValue: S(a),
              nextDisabled: f(S(a)),
              steps: l.value,
              stepControls: j,
              finishButtonHidden: e.finishButtonHidden
            }, null, 8, ["modelValue", "nextDisabled", "steps", "finishButtonHidden"]))
          ])
        ])
      ], 2)
    ], 16));
  }
}), fa = De(pa), va = /* @__PURE__ */ A({
  __name: "Ellipsis",
  props: {
    lines: { default: 3 }
  },
  setup(e) {
    jn((s) => ({
      b40395ae: o.value
    }));
    const t = e, o = c(() => t.lines * 23 + "px"), n = h(!1);
    return (s, r) => {
      const a = K("VaButton");
      return E(), U(pe, null, [
        _("div", {
          class: we([{ expanded: n.value }, "aellipsis"])
        }, [
          de(s.$slots, "default", {}, void 0, !0)
        ], 2),
        k(a, {
          "hover-opacity": 0.4,
          class: "mr-6 mb-2",
          "hover-behavior": "opacity",
          preset: "secondary",
          size: "small",
          onClick: r[0] || (r[0] = (l) => n.value = !n.value)
        }, {
          default: B(() => [
            n.value ? (E(), U(pe, { key: 0 }, [
              ee("less")
            ], 64)) : (E(), U(pe, { key: 1 }, [
              ee("more")
            ], 64))
          ]),
          _: 1
        })
      ], 64);
    };
  }
}), it = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, ma = /* @__PURE__ */ it(va, [["__scopeId", "data-v-69727056"]]);
function qo() {
  const e = {};
  return e[F.WMS] = "#2c1f90", e[F.OGCSTA] = "#1f908c", e[F.XMLA] = "#45901f", e[F.CSV] = "#90301f", e[F.JSON] = "#7f1f90", {
    getColorForFormat: (o) => Object.keys(e).includes(o) ? e[o] : "#ccc"
  };
}
const ga = { class: "aflex small light" }, ya = { class: "right" }, ba = { class: "left" }, ha = /* @__PURE__ */ A({
  __name: "SearchResultCard",
  props: {
    result: {}
  },
  setup(e) {
    const t = e, o = qo().getColorForFormat("<" + t.result.format.value + ">"), n = (s) => {
      const r = Object.entries(F).filter((a, l) => a[1] == "<" + s + ">");
      return r && r[0] ? r[0][0] : s;
    };
    return (s, r) => {
      const a = K("VaChip"), l = K("VaCardTitle"), i = K("VaCardContent"), u = K("VaCard");
      return E(), Z(u, { class: "card" }, {
        default: B(() => [
          k(l, null, {
            default: B(() => [
              k(a, {
                color: S(o),
                class: "pointer",
                size: "small"
              }, {
                default: B(() => [
                  ee(ie(n(t.result.format.value)), 1)
                ]),
                _: 1
              }, 8, ["color"]),
              ee(" " + ie(t.result.title.value), 1)
            ]),
            _: 1
          }),
          k(i, null, {
            default: B(() => [
              k(ma, { lines: 3 }, {
                default: B(() => [
                  ee(ie(t.result.description.value), 1)
                ]),
                _: 1
              }),
              r[0] || (r[0] = _("br", null, null, -1)),
              _("div", ga, [
                _("div", ya, ie(t.result.creator_name ? t.result.creator_name.value : ""), 1),
                _("div", ba, ie(t.result.date ? t.result.date.value : ""), 1)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), Ca = /* @__PURE__ */ it(ha, [["__scopeId", "data-v-a0a9daed"]]), fo = (e, t) => {
  for (const o of Object.keys(t))
    e.on(o, t[o]);
}, Xo = (e) => {
  for (const t of Object.keys(e)) {
    const o = e[t];
    o && Se(o.cancel) && o.cancel();
  }
}, Sa = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), Se = (e) => typeof e == "function", q = (e, t, o) => {
  for (const n in o) {
    const s = "set" + Sa(n);
    e[s] ? se(
      () => o[n],
      (r, a) => {
        e[s](r, a);
      }
    ) : t[s] && se(
      () => o[n],
      (r) => {
        t[s](r);
      }
    );
  }
}, H = (e, t, o = {}) => {
  const n = { ...o };
  for (const s in e) {
    const r = t[s], a = e[s];
    r && (r && r.custom === !0 || a !== void 0 && (n[s] = a));
  }
  return n;
}, oe = (e) => {
  const t = {}, o = {};
  for (const n in e)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const s = n.slice(2).toLocaleLowerCase();
      t[s] = e[n];
    } else
      o[n] = e[n];
  return { listeners: t, attrs: o };
}, wa = async (e) => {
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
}, Ye = (e) => {
  const t = h(
    (...n) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), o = (...n) => t.value(...n);
  return o.wrapped = t, me(e, o), o;
}, Qe = (e, t) => e.wrapped.value = t, D = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, N = (e) => {
  const t = R(e);
  if (t === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return t;
}, X = Symbol(
  "useGlobalLeaflet"
), ne = Symbol("addLayer"), ut = Symbol("removeLayer"), Ue = Symbol(
  "registerControl"
), Ko = Symbol(
  "registerLayerControl"
), Jo = Symbol(
  "canSetParentHtml"
), Zo = Symbol("setParentHtml"), Yo = Symbol("setIcon"), Qo = Symbol("bindPopup"), en = Symbol("bindTooltip"), tn = Symbol("unbindPopup"), on = Symbol("unbindTooltip"), He = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, We = (e) => ({ options: e.options, methods: {} }), Te = {
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
}, qe = (e, t, o) => {
  const n = N(ne), s = N(ut), { options: r, methods: a } = We(e), l = H(
    e,
    Te,
    r
  ), i = () => n({ leafletObject: t.value }), u = () => s({ leafletObject: t.value }), p = {
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
      if (!t.value || !Se(t.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      t.value.bindPopup(f);
    },
    bindTooltip(f) {
      if (!t.value || !Se(t.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      t.value.bindTooltip(f);
    },
    unbindTooltip() {
      t.value && (Se(t.value.closeTooltip) && t.value.closeTooltip(), Se(t.value.unbindTooltip) && t.value.unbindTooltip());
    },
    unbindPopup() {
      t.value && (Se(t.value.closePopup) && t.value.closePopup(), Se(t.value.unbindPopup) && t.value.unbindPopup());
    },
    updateVisibleProp(f) {
      o.emit("update:visible", f);
    }
  };
  return me(Qo, p.bindPopup), me(en, p.bindTooltip), me(tn, p.unbindPopup), me(on, p.unbindTooltip), Bt(() => {
    p.unbindPopup(), p.unbindTooltip(), u();
  }), { options: l, methods: p };
}, ye = (e, t) => {
  if (e && t.default)
    return Oe("div", { style: { display: "none" } }, t.default());
}, nn = {
  ...Te,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Oa = (e, t, o) => {
  const { options: n, methods: s } = qe(
    e,
    t,
    o
  );
  return { options: H(
    e,
    nn,
    n
  ), methods: s };
}, Dt = {
  ...nn,
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
}, rn = (e, t, o) => {
  const { options: n, methods: s } = Oa(e, t, o), r = H(
    e,
    Dt,
    n
  ), a = N(ut), l = {
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
}, Gt = {
  ...Dt,
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
}, sn = (e, t, o) => {
  const { options: n, methods: s } = rn(
    e,
    t,
    o
  ), r = H(
    e,
    Gt,
    n
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
}, an = {
  ...Gt,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, _a = (e, t, o) => {
  const { options: n, methods: s } = sn(e, t, o), r = H(
    e,
    an,
    n
  ), a = {
    ...s
  };
  return { options: r, methods: a };
};
A({
  name: "LCircle",
  props: an,
  setup(e, t) {
    const o = h(), n = h(!1), s = R(X), r = N(ne), { options: a, methods: l } = _a(e, o, t);
    return M(async () => {
      const { circle: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(i(e.latLng, a));
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), q(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, G(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ye(this.ready, this.$slots);
  }
});
A({
  name: "LCircleMarker",
  props: Gt,
  setup(e, t) {
    const o = h(), n = h(!1), s = R(X), r = N(ne), { options: a, methods: l } = sn(
      e,
      o,
      t
    );
    return M(async () => {
      const { circleMarker: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(
        i(e.latLng, a)
      );
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), q(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, G(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ye(this.ready, this.$slots);
  }
});
const Ie = {
  ...He,
  position: {
    type: String
  }
}, Xe = (e, t) => {
  const { options: o, methods: n } = We(e), s = H(
    e,
    Ie,
    o
  ), r = {
    ...n,
    setPosition(a) {
      t.value && t.value.setPosition(a);
    }
  };
  return Bt(() => {
    t.value && t.value.remove();
  }), { options: s, methods: r };
}, xa = (e) => e.default ? Oe("div", { ref: "root" }, e.default()) : null;
A({
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
    const o = h(), n = h(), s = R(X), r = N(Ue), { options: a, methods: l } = Xe(e, o);
    return M(async () => {
      const { Control: i, DomEvent: u } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js"), p = i.extend({
        onAdd() {
          return n.value;
        }
      });
      o.value = J(new p(a)), q(l, o.value, e), r({ leafletObject: o.value }), e.disableClickPropagation && n.value && u.disableClickPropagation(n.value), e.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), G(() => t.emit("ready", o.value));
    }), { root: n, leafletObject: o };
  },
  render() {
    return xa(this.$slots);
  }
});
const ln = {
  ...Ie,
  prefix: {
    type: String
  }
}, La = (e, t) => {
  const { options: o, methods: n } = Xe(
    e,
    t
  ), s = H(
    e,
    ln,
    o
  ), r = {
    ...n,
    setPrefix(a) {
      t.value.setPrefix(a);
    }
  };
  return { options: s, methods: r };
};
A({
  name: "LControlAttribution",
  props: ln,
  setup(e, t) {
    const o = h(), n = R(X), s = N(Ue), { options: r, methods: a } = La(e, o);
    return M(async () => {
      const { control: l } = n ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(
        l.attribution(r)
      ), q(a, o.value, e), s({ leafletObject: o.value }), G(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
});
const un = {
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
}, Pa = (e, t) => {
  const { options: o } = Xe(e, t);
  return { options: H(
    e,
    un,
    o
  ), methods: {
    addLayer(n) {
      n.layerType === "base" ? t.value.addBaseLayer(n.leafletObject, n.name) : n.layerType === "overlay" && t.value.addOverlay(n.leafletObject, n.name);
    },
    removeLayer(n) {
      t.value.removeLayer(n.leafletObject);
    }
  } };
};
A({
  name: "LControlLayers",
  props: un,
  setup(e, t) {
    const o = h(), n = R(X), s = N(Ko), { options: r, methods: a } = Pa(e, o);
    return M(async () => {
      const { control: l } = n ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(
        l.layers(void 0, void 0, r)
      ), q(a, o.value, e), s({
        ...e,
        ...a,
        leafletObject: o.value
      }), G(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
});
const cn = {
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
}, Ea = (e, t) => {
  const { options: o, methods: n } = Xe(
    e,
    t
  );
  return { options: H(
    e,
    cn,
    o
  ), methods: n };
};
A({
  name: "LControlScale",
  props: cn,
  setup(e, t) {
    const o = h(), n = R(X), s = N(Ue), { options: r, methods: a } = Ea(e, o);
    return M(async () => {
      const { control: l } = n ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(l.scale(r)), q(a, o.value, e), s({ leafletObject: o.value }), G(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
});
const dn = {
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
}, $a = (e, t) => {
  const { options: o, methods: n } = Xe(
    e,
    t
  );
  return { options: H(
    e,
    dn,
    o
  ), methods: n };
};
A({
  name: "LControlZoom",
  props: dn,
  setup(e, t) {
    const o = h(), n = R(X), s = N(Ue), { options: r, methods: a } = $a(e, o);
    return M(async () => {
      const { control: l } = n ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(l.zoom(r)), q(a, o.value, e), s({ leafletObject: o.value }), G(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
});
const ct = {
  ...Te
}, Ut = (e, t, o) => {
  const { options: n, methods: s } = qe(
    e,
    t,
    o
  ), r = H(
    e,
    ct,
    n
  ), a = {
    ...s,
    addLayer(l) {
      t.value.addLayer(l.leafletObject);
    },
    removeLayer(l) {
      t.value.removeLayer(l.leafletObject);
    }
  };
  return me(ne, a.addLayer), me(ut, a.removeLayer), { options: r, methods: a };
}, pn = {
  ...ct
}, ka = (e, t, o) => {
  const { options: n, methods: s } = Ut(
    e,
    t,
    o
  ), r = H(
    e,
    pn,
    n
  ), a = {
    ...s
  };
  return { options: r, methods: a };
};
A({
  props: pn,
  setup(e, t) {
    const o = h(), n = h(!1), s = R(X), r = N(ne), { methods: a, options: l } = ka(
      e,
      o,
      t
    );
    return M(async () => {
      const { featureGroup: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(
        i(void 0, l)
      );
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), q(a, o.value, e), r({
        ...e,
        ...a,
        leafletObject: o.value
      }), n.value = !0, G(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ye(this.ready, this.$slots);
  }
});
const fn = {
  ...ct,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, Ba = (e, t, o) => {
  const { options: n, methods: s } = Ut(
    e,
    t,
    o
  ), r = H(
    e,
    fn,
    n
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
A({
  props: fn,
  setup(e, t) {
    const o = h(), n = h(!1), s = R(X), r = N(ne), { methods: a, options: l } = Ba(e, o, t);
    return M(async () => {
      const { geoJSON: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(i(e.geojson, l));
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), q(a, o.value, e), r({
        ...e,
        ...a,
        leafletObject: o.value
      }), n.value = !0, G(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ye(this.ready, this.$slots);
  }
});
const Ht = {
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
}, vn = (e, t, o) => {
  const { options: n, methods: s } = qe(
    e,
    t,
    o
  ), r = H(
    e,
    Ht,
    n
  ), a = {
    ...s,
    setTileComponent() {
      var l;
      (l = t.value) == null || l.redraw();
    }
  };
  return Bt(() => {
    t.value.off();
  }), { options: r, methods: a };
}, Va = (e, t, o, n) => e.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), o.setOptions(this, s);
  },
  createTile(s) {
    const r = this._tileCoordsToKey(s);
    this.tileComponents[r] = t.create("div");
    const a = Oe({ setup: n, props: ["coords"] }, { coords: s });
    return et(a, this.tileComponents[r]), this.tileComponents[r];
  },
  _unloadTile(s) {
    const r = this._tileCoordsToKey(s.coords);
    this.tileComponents[r] && (this.tileComponents[r].innerHTML = "", this.tileComponents[r] = void 0);
  }
});
A({
  props: {
    ...Ht,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(e, t) {
    const o = h(), n = h(null), s = h(!1), r = R(X), a = N(ne), { options: l, methods: i } = vn(e, o, t);
    return M(async () => {
      const { GridLayer: u, DomUtil: p, Util: f } = r ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js"), w = Va(
        u,
        p,
        f,
        e.childRender
      );
      o.value = J(new w(l));
      const { listeners: C } = oe(t.attrs);
      o.value.on(C), q(i, o.value, e), a({
        ...e,
        ...i,
        leafletObject: o.value
      }), s.value = !0, G(() => t.emit("ready", o.value));
    }), { root: n, ready: s, leafletObject: o };
  },
  render() {
    return this.ready ? Oe("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const vo = {
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
A({
  name: "LIcon",
  props: {
    ...vo,
    ...He
  },
  setup(e, t) {
    const o = h(), n = R(X), s = N(Jo), r = N(Zo), a = N(Yo);
    let l, i, u, p, f;
    const w = (d, y, P) => {
      const $ = d && d.innerHTML;
      if (!y) {
        P && f && s() && r($);
        return;
      }
      const { listeners: W } = oe(t.attrs);
      f && i(f, W);
      const { options: ue } = We(e), Q = H(
        e,
        vo,
        ue
      );
      $ && (Q.html = $), f = Q.html ? u(Q) : p(Q), l(f, W), a(f);
    }, C = () => {
      G(() => w(o.value, !0, !1));
    }, g = () => {
      G(() => w(o.value, !1, !0));
    }, v = {
      setIconUrl: C,
      setIconRetinaUrl: C,
      setIconSize: C,
      setIconAnchor: C,
      setPopupAnchor: C,
      setTooltipAnchor: C,
      setShadowUrl: C,
      setShadowRetinaUrl: C,
      setShadowAnchor: C,
      setBgPos: C,
      setClassName: C,
      setHtml: C
    };
    return M(async () => {
      const {
        DomEvent: d,
        divIcon: y,
        icon: P
      } = n ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      l = d.on, i = d.off, u = y, p = P, q(v, {}, e), new MutationObserver(g).observe(o.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), C();
    }), { root: o };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return Oe("div", { ref: "root" }, e);
  }
});
const mn = {
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
}, Aa = (e, t, o) => {
  const { options: n, methods: s } = qe(
    e,
    t,
    o
  ), r = H(
    e,
    mn,
    n
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
A({
  name: "LImageOverlay",
  props: mn,
  setup(e, t) {
    const o = h(), n = h(!1), s = R(X), r = N(ne), { options: a, methods: l } = Aa(
      e,
      o,
      t
    );
    return M(async () => {
      const { imageOverlay: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(
        i(e.url, e.bounds, a)
      );
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), q(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, G(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ye(this.ready, this.$slots);
  }
});
A({
  props: ct,
  setup(e, t) {
    const o = h(), n = h(!1), s = R(X), r = N(ne), { methods: a } = Ut(e, o, t);
    return M(async () => {
      const { layerGroup: l } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(
        l(void 0, e.options)
      );
      const { listeners: i } = oe(t.attrs);
      o.value.on(i), q(a, o.value, e), r({
        ...e,
        ...a,
        leafletObject: o.value
      }), n.value = !0, G(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ye(this.ready, this.$slots);
  }
});
function gn(e, t, o) {
  var n, s, r;
  t === void 0 && (t = 50), o === void 0 && (o = {});
  var a = (n = o.isImmediate) != null && n, l = (s = o.callback) != null && s, i = o.maxWait, u = Date.now(), p = [];
  function f() {
    if (i !== void 0) {
      var C = Date.now() - u;
      if (C + t >= i)
        return i - C;
    }
    return t;
  }
  var w = function() {
    var C = [].slice.call(arguments), g = this;
    return new Promise(function(v, d) {
      var y = a && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !a) {
          var $ = e.apply(g, C);
          l && l($), p.forEach(function(W) {
            return (0, W.resolve)($);
          }), p = [];
        }
      }, f()), y) {
        var P = e.apply(g, C);
        return l && l(P), v(P);
      }
      p.push({ resolve: v, reject: d });
    });
  };
  return w.cancel = function(C) {
    r !== void 0 && clearTimeout(r), p.forEach(function(g) {
      return (0, g.reject)(C);
    }), p = [];
  }, w;
}
const mo = {
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
}, Ra = A({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: mo,
  setup(e, t) {
    const o = h(), n = Le({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = We(e), r = H(
      e,
      mo,
      s
    ), { listeners: a, attrs: l } = oe(t.attrs), i = Ye(ne), u = Ye(ut), p = Ye(Ue), f = Ye(
      Ko
    );
    me(X, e.useGlobalLeaflet);
    const w = c(() => {
      const y = {};
      return e.noBlockingAnimations && (y.animate = !1), y;
    }), C = c(() => {
      const y = w.value;
      return e.padding && (y.padding = e.padding), e.paddingTopLeft && (y.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (y.paddingBottomRight = e.paddingBottomRight), y;
    }), g = {
      moveend: gn((y) => {
        n.leafletRef && (t.emit("update:zoom", n.leafletRef.getZoom()), t.emit("update:center", n.leafletRef.getCenter()), t.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(y) {
        const P = n.layersInControl.find(($) => $.name === y.name);
        P && P.updateVisibleProp(!0);
      },
      overlayremove(y) {
        const P = n.layersInControl.find(($) => $.name === y.name);
        P && P.updateVisibleProp(!1);
      }
    };
    M(async () => {
      e.useGlobalLeaflet && (D.L = D.L || await import("./leaflet-src-BDi_6Owi.js").then((x) => x.l));
      const { map: y, CRS: P, Icon: $, latLngBounds: W, latLng: ue, stamp: Q } = e.useGlobalLeaflet ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (x) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${x.message}`
        );
      }
      await wa($);
      const j = typeof r.crs == "string" ? P[r.crs] : r.crs;
      r.crs = j || P.EPSG3857;
      const Y = {
        addLayer(x) {
          x.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(x) : n.layersInControl.find(
            (I) => Q(I.leafletObject) === Q(x.leafletObject)
          ) || (n.layerControl.addLayer(x), n.layersInControl.push(x))), x.visible !== !1 && n.leafletRef.addLayer(x.leafletObject);
        },
        removeLayer(x) {
          x.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (I) => I.name !== x.name
          ) : (n.layerControl.removeLayer(x.leafletObject), n.layersInControl = n.layersInControl.filter(
            (I) => Q(I.leafletObject) !== Q(x.leafletObject)
          ))), n.leafletRef.removeLayer(x.leafletObject);
        },
        registerLayerControl(x) {
          n.layerControl = x, n.layersToAdd.forEach((I) => {
            n.layerControl.addLayer(I);
          }), n.layersToAdd = [], p(x);
        },
        registerControl(x) {
          n.leafletRef.addControl(x.leafletObject);
        },
        setZoom(x) {
          const I = n.leafletRef.getZoom();
          x !== I && n.leafletRef.setZoom(x, w.value);
        },
        setCrs(x) {
          const I = n.leafletRef.getBounds();
          n.leafletRef.options.crs = x, n.leafletRef.fitBounds(I, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(x) {
          n.leafletRef.fitBounds(x, C.value);
        },
        setBounds(x) {
          if (!x)
            return;
          const I = W(x);
          I.isValid() && !(n.lastSetBounds || n.leafletRef.getBounds()).equals(I, 0) && (n.lastSetBounds = I, n.leafletRef.fitBounds(I));
        },
        setCenter(x) {
          if (x == null)
            return;
          const I = ue(x), ge = n.lastSetCenter || n.leafletRef.getCenter();
          (ge.lat !== I.lat || ge.lng !== I.lng) && (n.lastSetCenter = I, n.leafletRef.panTo(I, w.value));
        }
      };
      Qe(i, Y.addLayer), Qe(u, Y.removeLayer), Qe(p, Y.registerControl), Qe(f, Y.registerLayerControl), n.leafletRef = J(y(o.value, r)), q(Y, n.leafletRef, e), fo(n.leafletRef, g), fo(n.leafletRef, a), n.ready = !0, G(() => t.emit("ready", n.leafletRef));
    }), Ve(() => {
      Xo(g), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const v = c(() => n.leafletRef), d = c(() => n.ready);
    return { root: o, ready: d, leafletObject: v, attrs: l };
  },
  render({ attrs: e }) {
    return e.style || (e.style = {}), e.style.width || (e.style.width = "100%"), e.style.height || (e.style.height = "100%"), Oe(
      "div",
      {
        ...e,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), Ta = ["Symbol(Comment)", "Symbol(Text)"], Ia = ["LTooltip", "LPopup"], yn = {
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
}, ja = (e, t, o) => {
  const { options: n, methods: s } = qe(
    e,
    t,
    o
  ), r = H(
    e,
    yn,
    n
  ), a = {
    ...s,
    setDraggable(l) {
      t.value.dragging && (l ? t.value.dragging.enable() : t.value.dragging.disable());
    },
    latLngSync(l) {
      o.emit("update:latLng", l.latlng), o.emit("update:lat-lng", l.latlng);
    },
    setLatLng(l) {
      if (l != null && t.value) {
        const i = t.value.getLatLng();
        (!i || !i.equals(l)) && t.value.setLatLng(l);
      }
    }
  };
  return { options: r, methods: a };
}, Na = (e, t) => {
  const o = t.slots.default && t.slots.default();
  return o && o.length && o.some(Fa);
};
function Fa(e) {
  return !(Ta.includes(e.type.toString()) || Ia.includes(e.type.name));
}
A({
  name: "LMarker",
  props: yn,
  setup(e, t) {
    const o = h(), n = h(!1), s = R(X), r = N(ne);
    me(
      Jo,
      () => {
        var u;
        return !!((u = o.value) != null && u.getElement());
      }
    ), me(Zo, (u) => {
      var p, f;
      const w = Se((p = o.value) == null ? void 0 : p.getElement) && ((f = o.value) == null ? void 0 : f.getElement());
      w && (w.innerHTML = u);
    }), me(
      Yo,
      (u) => {
        var p;
        return ((p = o.value) == null ? void 0 : p.setIcon) && o.value.setIcon(u);
      }
    );
    const { options: a, methods: l } = ja(e, o, t), i = {
      moveHandler: gn(l.latLngSync)
    };
    return M(async () => {
      const { marker: u, divIcon: p } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      Na(a, t) && (a.icon = p({ className: "" })), o.value = J(u(e.latLng, a));
      const { listeners: f } = oe(t.attrs);
      o.value.on(f), o.value.on("move", i.moveHandler), q(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, G(() => t.emit("ready", o.value));
    }), Ve(() => Xo(i)), { ready: n, leafletObject: o };
  },
  render() {
    return ye(this.ready, this.$slots);
  }
});
const Wt = {
  ...Dt,
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
}, bn = (e, t, o) => {
  const { options: n, methods: s } = rn(
    e,
    t,
    o
  ), r = H(
    e,
    Wt,
    n
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
}, st = {
  ...Wt
}, hn = (e, t, o) => {
  const { options: n, methods: s } = bn(
    e,
    t,
    o
  ), r = H(
    e,
    st,
    n
  ), a = {
    ...s,
    toGeoJSON(l) {
      return t.value.toGeoJSON(l);
    }
  };
  return { options: r, methods: a };
};
A({
  name: "LPolygon",
  props: st,
  setup(e, t) {
    const o = h(), n = h(!1), s = R(X), r = N(ne), { options: a, methods: l } = hn(e, o, t);
    return M(async () => {
      const { polygon: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(i(e.latLngs, a));
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), q(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, G(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ye(this.ready, this.$slots);
  }
});
A({
  name: "LPolyline",
  props: Wt,
  setup(e, t) {
    const o = h(), n = h(!1), s = R(X), r = N(ne), { options: a, methods: l } = bn(e, o, t);
    return M(async () => {
      const { polyline: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(
        i(e.latLngs, a)
      );
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), q(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, G(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ye(this.ready, this.$slots);
  }
});
const Cn = {
  ...He,
  content: {
    type: String,
    default: null
  }
}, Sn = (e, t) => {
  const { options: o, methods: n } = We(e), s = {
    ...n,
    setContent(r) {
      t.value && r !== null && r !== void 0 && t.value.setContent(r);
    }
  };
  return { options: o, methods: s };
}, wn = (e) => e.default ? Oe("div", { ref: "root" }, e.default()) : null, Ma = {
  ...Cn,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, za = (e, t) => {
  const { options: o, methods: n } = Sn(e, t);
  return { options: o, methods: n };
};
A({
  name: "LPopup",
  props: Ma,
  setup(e, t) {
    const o = h(), n = h(null), s = R(X), r = N(Qo), a = N(tn), { options: l, methods: i } = za(e, o);
    return M(async () => {
      const { popup: u } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(u(l)), e.latLng !== void 0 && o.value.setLatLng(e.latLng), q(i, o.value, e);
      const { listeners: p } = oe(t.attrs);
      o.value.on(p), o.value.setContent(e.content || n.value || ""), r(o.value), G(() => t.emit("ready", o.value));
    }), Ve(() => {
      a();
    }), { root: n, leafletObject: o };
  },
  render() {
    return wn(this.$slots);
  }
});
const On = {
  ...st,
  latLngs: {
    ...st.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, Da = (e, t, o) => {
  const { options: n, methods: s } = hn(
    e,
    t,
    o
  ), r = H(
    e,
    On,
    n
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
A({
  name: "LRectangle",
  props: On,
  setup(e, t) {
    const o = h(), n = h(!1), s = R(X), r = N(ne), { options: a, methods: l } = Da(e, o, t);
    return M(async () => {
      const { rectangle: i, latLngBounds: u } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js"), p = e.bounds ? u(e.bounds) : u(e.latLngs || []);
      o.value = J(i(p, a));
      const { listeners: f } = oe(t.attrs);
      o.value.on(f), q(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, G(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ye(this.ready, this.$slots);
  }
});
const qt = {
  ...Ht,
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
}, _n = (e, t, o) => {
  const { options: n, methods: s } = vn(e, t, o), r = H(
    e,
    qt,
    n
  ), a = {
    ...s
  };
  return { options: r, methods: a };
}, Ga = A({
  props: qt,
  setup(e, t) {
    const o = h(), n = R(X), s = N(ne), { options: r, methods: a } = _n(e, o, t);
    return M(async () => {
      const { tileLayer: l } = n ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(l(e.url, r));
      const { listeners: i } = oe(t.attrs);
      o.value.on(i), q(a, o.value, e), s({
        ...e,
        ...a,
        leafletObject: o.value
      }), G(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
}), Ua = {
  ...Cn
}, Ha = (e, t) => {
  const { options: o, methods: n } = Sn(e, t), s = N(on);
  return Ve(() => {
    s();
  }), { options: o, methods: n };
};
A({
  name: "LTooltip",
  props: Ua,
  setup(e, t) {
    const o = h(), n = h(null), s = R(X), r = N(en), { options: a, methods: l } = Ha(e, o);
    return M(async () => {
      const { tooltip: i } = s ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(i(a)), q(l, o.value, e);
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), o.value.setContent(e.content || n.value || ""), r(o.value), G(() => t.emit("ready", o.value));
    }), { root: n, leafletObject: o };
  },
  render() {
    return wn(this.$slots);
  }
});
const xn = {
  ...qt,
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
}, Wa = (e, t, o) => {
  const { options: n, methods: s } = _n(e, t, o);
  return {
    options: H(
      e,
      xn,
      n
    ),
    methods: {
      ...s
    }
  };
};
A({
  props: xn,
  setup(e, t) {
    const o = h(), n = R(X), s = N(ne), { options: r, methods: a } = Wa(
      e,
      o,
      t
    );
    return M(async () => {
      const { tileLayer: l } = n ? D.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = J(
        l.wms(e.url, r)
      );
      const { listeners: i } = oe(t.attrs);
      o.value.on(i), q(a, o.value, e), s({
        ...e,
        ...a,
        leafletObject: o.value
      }), G(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
});
const qa = { class: "line" }, Xa = { class: "right" }, Ka = { class: "content" }, Ja = { class: "list_of_formats" }, Za = { class: "line" }, Ya = { class: "right" }, Qa = { class: "content" }, el = { class: "map" }, tl = /* @__PURE__ */ A({
  __name: "FilterModal",
  props: {
    modelValue: {
      default: Le([
        { formats: {} },
        { mapSection: {} }
      ])
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const o = h(!1);
    t({
      run: () => {
        o.value = !o.value;
      }
    });
    const s = qo().getColorForFormat, r = Nn(e, "modelValue"), a = h([
      { name: "OGC", key: F.WMS, color: s(F.WMS), active: !0 },
      { name: "SensorThings", key: F.OGCSTA, color: s(F.OGCSTA), active: !0 },
      { name: "XMLA", key: F.XMLA, color: s(F.XMLA), active: !0 },
      { name: "CSV", key: F.CSV, color: s(F.CSV), active: !0 },
      { name: "JSON", key: F.JSON, color: s(F.JSON), active: !0 }
    ]), l = h(!1), i = h(null), u = Le({
      baseMapUrl: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
      zoom: 14,
      attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      center: [50.93115286, 11.60392726],
      map_filter_on: !1
    }), p = () => {
      const g = r.value?.find((d) => d.mapSection), v = r.value?.find((d) => d.formats);
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
    se(() => u.map_filter_on, (g) => {
      const v = r.value?.find((d) => d.mapSection);
      if (!g && v) {
        const d = r.value.indexOf(v);
        d != -1 && r.value.splice(d);
      }
    });
    const w = h(!1);
    se(l, (g) => {
      const v = r.value?.find((d) => d.formats);
      if (w.value) {
        w.value = !1;
        return;
      }
      if (v?.formats)
        if (g)
          a.value.forEach((d) => d.active = !1), v.formats.forEach((d) => {
            a.value.findLast((y) => y.key == d).active = !0;
          });
        else {
          const d = r.value.indexOf(v);
          d != -1 && r.value.splice(d), a.value.forEach((y) => y.active = !0);
        }
    });
    const C = (g) => {
      let v = r.value?.find((d) => d.formats);
      if (v || (v = { formats: [] }, r.value.push(v)), l.value) {
        g.active = !g.active;
        const d = v.formats.indexOf(g.key);
        d == -1 ? v.formats?.push(g.key) : v.formats?.splice(d), v.formats.length == 0 && (l.value = !1);
      } else
        w.value = !0, a.value.forEach((d) => d.active = !1), g.active = !0, v.formats = [g.key], l.value = !0;
    };
    return (g, v) => {
      const d = K("va-button"), y = K("VaSwitch"), P = K("va-divider"), $ = K("VaChip"), W = K("va-card-content"), ue = K("va-modal");
      return E(), Z(ue, {
        modelValue: o.value,
        class: "filterbox",
        "hide-default-actions": "",
        "no-padding": "",
        onOpen: p
      }, {
        header: B(() => [...v[4] || (v[4] = [
          _("h3", { class: "title" }, "Filter", -1)
        ])]),
        default: B(({ ok: Q }) => [
          k(d, {
            class: "mr-1 mb-1 close",
            preset: "secondary",
            style: { position: "absolute", right: "0", top: "0" },
            onClick: v[0] || (v[0] = () => {
              o.value = !1;
            })
          }, {
            default: B(() => [...v[5] || (v[5] = [
              ee(" x ", -1)
            ])]),
            _: 1
          }),
          k(W, null, {
            default: B(() => [
              v[8] || (v[8] = _("div", {
                class: "spacer",
                style: { height: "25px" }
              }, null, -1)),
              _("div", qa, [
                v[6] || (v[6] = _("div", { class: "va-collapse__header__text left" }, "Format", -1)),
                _("div", Xa, [
                  k(y, {
                    modelValue: l.value,
                    "onUpdate:modelValue": v[1] || (v[1] = (j) => l.value = j),
                    "false-inner-label": "all",
                    "true-inner-label": "Selection"
                  }, null, 8, ["modelValue"])
                ])
              ]),
              k(P),
              _("div", Ka, [
                _("div", Ja, [
                  (E(!0), U(pe, null, ot(a.value, (j) => (E(), Z($, {
                    key: j.key,
                    color: j.active ? j.color : "#ccc",
                    disabled: !j.active,
                    class: "pointer",
                    size: "small",
                    onClick: (Y) => C(j)
                  }, {
                    default: B(() => [
                      ee(ie(j.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["color", "disabled", "onClick"]))), 128))
                ])
              ]),
              _("div", Za, [
                v[7] || (v[7] = _("div", { class: "va-collapse__header__text left" }, "Region", -1)),
                _("div", Ya, [
                  k(y, {
                    modelValue: u.map_filter_on,
                    "onUpdate:modelValue": v[2] || (v[2] = (j) => u.map_filter_on = j),
                    "false-inner-label": "anywhere",
                    "true-inner-label": "within map section"
                  }, null, 8, ["modelValue"])
                ])
              ]),
              k(P),
              _("div", Qa, [
                _("div", el, [
                  k(S(Ra), {
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
                      k(S(Ga), {
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
}), ol = /* @__PURE__ */ it(tl, [["__scopeId", "data-v-d76f1184"]]), nl = { class: "flex padd15" }, rl = { class: "buttonbar" }, sl = { class: "padd" }, al = {
  key: 0,
  class: "title"
}, ll = {
  key: 1,
  class: "aflex"
}, il = { class: "aflex" }, ul = { class: "aflex" }, cl = { class: "widgets_grid" }, dl = ["active", "onClick"], pl = ["src"], fl = /* @__PURE__ */ A({
  __name: "EndPointfinderModal",
  setup(e, { expose: t }) {
    const o = Un(), n = h(!1);
    let s, r, a;
    const l = () => {
      const L = o.params.pageid ?? "", m = Dn(L), V = Gn(L);
      s = m.createWidget, r = V.updateLayout, a = V.layout, n.value = !n.value;
    }, i = h(0), u = h(), p = h(), f = R(Kt), w = Zt(R(Jt), (L) => L.connections), C = Zt(R(Jt), (L) => L.datasources), g = R(zn), v = h([]), d = h([]), y = Le({
      step0: !1,
      step1: !0,
      step2: !0,
      step3: !0
    }), P = [
      {
        label: "Search",
        icon: "travel_explore",
        beforeLeave: (L) => {
          L.hasError = !y.step0;
        }
      },
      {
        label: "Connection",
        icon: "polyline",
        beforeLeave: (L) => {
          L.hasError = !y.step1;
        }
      },
      {
        label: "Store",
        icon: "store",
        beforeLeave: (L) => {
          L.hasError = !y.step2;
        }
      },
      { label: "Widgets", icon: "widgets", beforeLeave: (L) => {
        L.hasError = !y.step3;
      } }
    ];
    M(() => {
      console.log("Mounting endpoint finder");
    });
    const $ = Le({
      searchString: "",
      loading: !1
    }), W = h(null), ue = async () => await W.value?.run(() => {
    }), Q = h(""), j = h([]), Y = h({});
    se(j, () => {
      if (!j.value) {
        Q.value = "";
        return;
      }
      const L = Object.keys(j.value).reduce((m, V, ce) => j.value[V] != null ? m + 1 : m, 0);
      if (L == 0) {
        Q.value = "";
        return;
      }
      Q.value = L.toString();
    }, { immediate: !0, deep: !0 });
    const x = c(() => {
      let L = [];
      for (let m of Object.keys(Y.value))
        L = L.concat(
          Y.value[m].results?.bindings?.map((V) => (V.endpoint = { value: m }, V))
        );
      return L;
    }), I = async () => {
      $.loading = !0;
      const L = $.searchString, m = Ct().getAllActiveEndpoints();
      m && (Y.value = await new Hn().setEndpoints(m).setFilter(j.value).query(L)), $.loading = !1;
    }, ge = R(Kt), fe = R(Mn);
    fe.getDataSourceTypes();
    let re = h();
    h("rest");
    let ve = h();
    const b = h(!1), O = h();
    se(O, () => {
      b.value = !1;
      let L = null;
      try {
        L = new URL(O.value?.accessUrl?.value), re.value = T(O.value?.format?.value, L.origin);
      } catch (m) {
        console.log(m);
      }
      re.value ? y.step0 = !0 : (b.value = !0, y.step0 = !1);
    }), se(i, (L) => {
      if (L == 2) {
        let m = null;
        try {
          if (m = new URL(O.value?.accessUrl?.value), !re.value) throw new Error("connection not found");
          const V = re.value?.uid;
          if (!V) throw new Error("id not found");
          ve.value = Le(te(O.value?.format?.value, V, m.pathname));
        } catch (V) {
          console.log(V);
        }
      }
      if (L === 3) {
        console.log(g.getAllWidgets());
        const m = Object.entries(g.getAllWidgets()).filter(([V, ce]) => ce.supportedDSTypes.includes(ve.value?.type)).filter(([V, ce]) => ce.icon).map(([V, ce]) => ({ type: V, icon: ce.icon }));
        console.log(m), v.value = m;
      }
    });
    const T = (L, m) => {
      let V;
      const ce = ge.getRegisteredTypes();
      switch ("<" + L + ">") {
        case F.CSV:
        case F.JSON:
        case F.REST:
        case F.OGCSTA:
          ce.includes("rest") && (V = f.createConnection("rest", { url: m }));
          break;
        case F.XMLA:
          ce.includes("xmla") && (V = f.createConnection("xmla", { url: m }));
          break;
      }
      return V;
    }, te = (L, m, V) => {
      switch ("<" + L + ">") {
        case F.CSV:
          return fe.createDatasource("csv", { connection: m, resourceUrl: V, separators: "," });
        case F.JSON:
          return fe.createDatasource("rest", { connection: m, resourceUrl: V });
        case F.REST:
          return fe.createDatasource("rest", { connection: m, resourceUrl: V });
        case F.OGCSTA:
          return fe.createDatasource("ogcsta", { connection: m, resourceUrl: V });
        case F.XMLA:
          return fe.createDatasource("xmla", { connection: m, resourceUrl: V });
      }
      return null;
    }, Ke = c(() => {
      const L = fe.getDatasourceIdentifiers(ve.value.type);
      return fe.resolveIdentifier(L.Settings);
    }), Je = c(() => {
      if (!re.value) return null;
      const L = ge.getConnectionIdentifiers(re.value.type);
      return ge.resolveIdentifier(L.Settings);
    }), je = () => {
      if (d.value.length > 0) {
        const L = [];
        d.value.forEach((V, ce) => {
          const pt = {
            id: s(
              V.type,
              { datasourceId: ve.value?.uid },
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
                fullscreen: !1,
                shadowColor: "#333",
                shadowBlur: 12,
                shadowX: 5,
                shadowY: 5,
                shadowTransparence: 25,
                transparency: 255
              }
            ),
            x: 50 + ce * 300,
            y: 50,
            width: 200,
            height: 100,
            z: 3005
          };
          L.push(pt), console.log("Endpointfinder created Widget:" + V.type);
        });
        const m = [...a, ...L];
        r(m);
      }
      d.value = [], re.value = void 0, ve.value = void 0, i.value = 0, j.value = [], $.searchString = "", Y.value = {}, y.step0 = !1, y.step1 = !0, y.step2 = !0, y.step3 = !0, u.value?.resetValidation(), p.value?.resetValidation(), n.value = !1;
    };
    return se(() => ve.value?.config, (L) => {
      console.log(L);
    }, { deep: !0 }), t({
      run: l
    }), (L, m) => {
      const V = K("VaButton"), ce = K("va-button"), dt = K("VaIcon"), pt = K("VaInput"), Xt = K("VaForm"), ft = K("VaScrollContainer"), Ze = K("va-input"), Ln = K("VaCheckbox"), Pn = K("va-card-content"), En = K("va-modal");
      return E(), U(pe, null, [
        k(En, {
          modelValue: n.value,
          class: "infobox",
          "hide-default-actions": "",
          "no-padding": ""
        }, {
          footer: B(() => [
            i.value != 3 ? (E(), Z(V, {
              key: 0,
              disabled: !y["step" + i.value],
              onClick: m[0] || (m[0] = (vt) => i.value++)
            }, {
              default: B(() => [...m[7] || (m[7] = [
                ee("next", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : le("", !0),
            i.value == 3 ? (E(), Z(V, {
              key: 1,
              disabled: !y["step" + i.value],
              onClick: je
            }, {
              default: B(() => [...m[8] || (m[8] = [
                ee("finish", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : le("", !0)
          ]),
          default: B(({ ok: vt }) => [
            k(ce, {
              class: "mr-1 mb-1 close",
              preset: "secondary",
              style: { position: "absolute", right: "0" },
              onClick: m[1] || (m[1] = (z) => je())
            }, {
              default: B(() => [...m[9] || (m[9] = [
                ee(" x ", -1)
              ])]),
              _: 1
            }),
            k(Pn, { class: "no-padding" }, {
              default: B(() => [
                k(S(fa), {
                  color: "#c29803",
                  modelValue: i.value,
                  "onUpdate:modelValue": m[5] || (m[5] = (z) => i.value = z),
                  steps: P,
                  controlsHidden: "",
                  linear: ""
                }, {
                  "step-content-0": B(() => [
                    k(Xt, {
                      ref_key: "formRef",
                      ref: u,
                      class: "flex flex-col items-baseline gap-6"
                    }, {
                      default: B(() => [
                        _("div", nl, [
                          k(pt, {
                            modelValue: $.searchString,
                            "onUpdate:modelValue": m[2] || (m[2] = (z) => $.searchString = z),
                            loading: $.loading,
                            class: "flex",
                            label: "Search String",
                            onKeyup: m[3] || (m[3] = (z) => {
                              z.key == "Enter" && I();
                            })
                          }, {
                            prependInner: B(() => [
                              k(dt, {
                                color: "secondary",
                                name: "search"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "loading"]),
                          _("div", rl, [
                            k(S(sa), {
                              offset: [-5, 5],
                              text: Q.value,
                              class: "mr-6",
                              overlap: "",
                              style: { "--va-badge-text-wrapper-border-radius": "50%" }
                            }, {
                              default: B(() => [
                                k(V, {
                                  icon: "filter_alt",
                                  preset: "secondary",
                                  round: "",
                                  onClick: ue
                                })
                              ]),
                              _: 1
                            }, 8, ["text"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 512),
                    x.value.length > 0 ? (E(), Z(ft, {
                      key: 0,
                      class: "padd",
                      vertical: ""
                    }, {
                      default: B(() => [
                        (E(!0), U(pe, null, ot(x.value, (z) => (E(), U(pe, null, [
                          k(Ca, {
                            class: we({ active: z == O.value }),
                            result: z,
                            onClick: (gl) => O.value = z
                          }, null, 8, ["class", "result", "onClick"]),
                          m[10] || (m[10] = _("br", null, null, -1))
                        ], 64))), 256))
                      ]),
                      _: 1
                    })) : le("", !0)
                  ]),
                  "step-content-1": B(() => [
                    _("div", sl, [
                      k(Xt, {
                        ref_key: "connectionForm",
                        ref: p,
                        modelValue: y.step1,
                        "onUpdate:modelValue": m[4] || (m[4] = (z) => y.step1 = z),
                        immediate: ""
                      }, {
                        default: B(() => [
                          b.value ? (E(), U("div", ll, [
                            k(dt, {
                              class: "mr-2",
                              color: "#ec9c1d",
                              name: "warning",
                              size: "2rem"
                            }),
                            m[11] || (m[11] = _("h2", { class: "title" }, " The Connection cant be automatic detected, this happens if the Type of Dataset is not known or not supported. Never the less you can try to configure the connection manualy:", -1))
                          ])) : (E(), U("h2", al, " The following Connection will be created:")),
                          m[14] || (m[14] = _("br", null, null, -1)),
                          m[15] || (m[15] = _("br", null, null, -1)),
                          _("div", il, [
                            S(re) ? (E(), Z(Ze, {
                              key: 0,
                              modelValue: S(re)?.name,
                              rules: [(z) => !!z || "Required"],
                              label: "Name"
                            }, null, 8, ["modelValue", "rules"])) : le("", !0),
                            k(Ze, {
                              modelValue: S(re)?.type,
                              class: "type-input",
                              label: "Type"
                            }, null, 8, ["modelValue"]),
                            m[12] || (m[12] = _("br", null, null, -1)),
                            m[13] || (m[13] = _("br", null, null, -1))
                          ]),
                          m[16] || (m[16] = _("br", null, null, -1)),
                          (E(), Z(tt(Je.value), {
                            config: S(re)?.config
                          }, null, 8, ["config"]))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  "step-content-2": B(() => [
                    k(ft, {
                      class: "padd",
                      vertical: ""
                    }, {
                      default: B(() => [
                        m[19] || (m[19] = _("h2", { class: "title" }, " The following Store will be created:", -1)),
                        m[20] || (m[20] = _("br", null, null, -1)),
                        _("div", ul, [
                          S(re) ? (E(), Z(Ze, {
                            key: 0,
                            modelValue: S(ve)?.name,
                            rules: [(z) => !!z || "Required"],
                            label: "Name"
                          }, null, 8, ["modelValue", "rules"])) : le("", !0),
                          k(Ze, {
                            modelValue: S(ve)?.type,
                            class: "type-input",
                            label: "Type"
                          }, null, 8, ["modelValue"]),
                          m[17] || (m[17] = _("br", null, null, -1)),
                          m[18] || (m[18] = _("br", null, null, -1))
                        ]),
                        m[21] || (m[21] = _("br", null, null, -1)),
                        (E(), Z(tt(Ke.value), {
                          config: S(ve).config,
                          connections: S(w),
                          dataSources: S(C)
                        }, null, 8, ["config", "connections", "dataSources"])),
                        m[22] || (m[22] = _("br", null, null, -1))
                      ]),
                      _: 1
                    })
                  ]),
                  "step-content-3": B(() => [
                    k(ft, {
                      class: "padd",
                      vertical: ""
                    }, {
                      default: B(() => [
                        m[23] || (m[23] = _("h2", { class: "title" }, "Widgets zur Datenquelle auswählen", -1)),
                        m[24] || (m[24] = _("br", null, null, -1)),
                        _("div", cl, [
                          (E(!0), U(pe, null, ot(v.value, (z) => (E(), U("div", {
                            class: "widgets_grid-item",
                            key: z.type,
                            active: d.value.includes(z),
                            onClick: () => {
                              d.value.includes(z) ? d.value.splice(d.value.indexOf(z), 1) : d.value.push(z);
                            }
                          }, [
                            k(Ln, {
                              "model-value": d.value.includes(z)
                            }, null, 8, ["model-value"]),
                            _("img", {
                              class: "m-2",
                              src: z.icon,
                              style: { height: "30px" }
                            }, null, 8, pl),
                            ee(" " + ie(z.type), 1)
                          ], 8, dl))), 128))
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
        k(ol, {
          ref_key: "loadModalref",
          ref: W,
          modelValue: j.value,
          "onUpdate:modelValue": m[6] || (m[6] = (vt) => j.value = vt)
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
}), vl = /* @__PURE__ */ it(fl, [["__scopeId", "data-v-e2447488"]]);
function ml(e, { props: t, children: o, element: n, app: s } = {}) {
  let r = n, a = k(e, t, o);
  return s && s._context && (a.appContext = s._context), r ? et(a, r) : typeof document < "u" && et(a, r = document.createElement("div")), { vNode: a, destroy: () => {
    r && et(null, r), r = null, a = null;
  }, el: r };
}
function Ll({ services: e, log: t }) {
  const o = {
    install(a) {
      const { vNode: l } = ml(vl, { props: {}, app: a });
      a.provide("endpointfinder", async () => {
        await l.component?.exposed?.run(() => {
        });
      });
    }
  };
  e.getRequired("App").use(o);
  const n = e.getRequired(Fn), s = n.createConnection("rest", {
    url: "https://www.govdata.de/sparql"
  }), r = n.getConnection(s.uid);
  Ct().registerEndpoint(r, "SparqlDataEurope"), Ct().setActive("SparqlDataEurope"), t.info("Endpointfinder bereit");
}
export {
  Ll as activate
};
