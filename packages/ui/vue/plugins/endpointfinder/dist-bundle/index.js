(function(){var i="ui.vue.plugins.endpointfinder",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=":root,:host{--va-icon-vertical-align: middle;--va-icon-user-select: none}.va-icon{vertical-align:var(--va-icon-vertical-align);-webkit-user-select:var(--va-icon-user-select);-moz-user-select:var(--va-icon-user-select);user-select:var(--va-icon-user-select)}.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]){cursor:pointer}.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]):focus-visible{outline:2px solid var(--va-focus)!important;border-radius:2px}.va-icon.va-icon{font-style:normal}.va-icon--spin{animation:va-icon--spin-animation 1.5s linear infinite}.va-icon--spin-reverse{animation:va-icon--spin-animation 1.5s linear infinite;animation-direction:reverse}@keyframes va-icon--spin-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.va-icon svg{fill:currentColor;height:100%}:root,:host{--va-progress-circle-position: relative;--va-progress-circle-overflow: hidden;--va-progress-circle-width: 80%;--va-progress-circle-height: 80%;--va-progress-circle-overlay-transition: all ease 2s;--va-progress-circle-font-size: .75rem}.va-progress-circle{position:var(--va-progress-circle-position);overflow:var(--va-progress-circle-overflow);font-family:var(--va-font-family)}.va-progress-circle__wrapper{position:absolute;inset:0;margin:auto;transform:rotate(-90deg);width:var(--va-progress-circle-width);height:var(--va-progress-circle-height);display:flex;justify-content:center;align-items:center}.va-progress-circle--indeterminate .va-progress-circle__wrapper{animation:va-progress-circle__wrapper--indeterminate 2s linear infinite}.va-progress-circle__overlay{transition:var(--va-progress-circle-overlay-transition)}.va-progress-circle--indeterminate .va-progress-circle__overlay{animation:va-progress-circle__overlay--indeterminate 2s ease-in-out infinite}.va-progress-circle__info{font-size:var(--va-progress-circle-font-size);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}@keyframes va-progress-circle__wrapper--indeterminate{to{transform:rotate(270deg)}}@keyframes va-progress-circle__overlay--indeterminate{0%{stroke-dasharray:1,125;stroke-dashoffset:0}50%{stroke-dasharray:125,125;stroke-dashoffset:-65px}to{stroke-dasharray:125,125;stroke-dashoffset:-125px}}:root,:host{--va-button-display: inline-flex;--va-button-justify-content: center;--va-button-align-items: center;--va-button-background-image: none;--va-button-box-shadow: none;--va-button-border-width: 0;--va-button-border-color: unset;--va-button-border-style: none;--va-button-font-weight: 600;--va-button-transition: none;--va-button-padding: 0;--va-button-cursor: pointer;--va-button-sm-size: 1.5rem;--va-button-sm-content-py: .25rem;--va-button-sm-content-px: .375rem;--va-button-sm-only-icon-content-px: .25rem;--va-button-sm-font-size: .8125rem;--va-button-sm-letter-spacing: 0;--va-button-sm-line-height: 1rem;--va-button-sm-border-radius: .125rem;--va-button-sm-icon-side-padding: var(--va-button-sm-content-py);--va-button-sm-icons-spacing: .125rem;--va-button-size: 2.25rem;--va-button-content-py: .5rem;--va-button-content-px: .75rem;--va-button-only-icon-content-px: .5rem;--va-button-font-size: 1rem;--va-button-letter-spacing: 0;--va-button-line-height: 1.25rem;--va-button-border-radius: .25rem;--va-button-icon-side-padding: var(--va-button-content-py);--va-button-icons-spacing: .25rem;--va-button-lg-size: 3rem;--va-button-lg-content-py: .75rem;--va-button-lg-content-px: 1rem;--va-button-lg-only-icon-content-px: 1rem;--va-button-lg-font-size: 1.05rem;--va-button-lg-letter-spacing: 0;--va-button-lg-line-height: 1.5rem;--va-button-lg-border-radius: .5rem;--va-button-lg-icon-side-padding: var(--va-button-lg-content-py);--va-button-lg-icons-spacing: .25rem;--va-button-bordered-border: 1px;--va-button-bordered-style: solid}.va-button{position:relative;padding:var(--va-button-padding);display:var(--va-button-display);justify-content:var(--va-button-justify-content);align-items:var(--va-button-align-items);border-width:var(--va-button-border-width);border-color:var(--va-button-border-color);border-style:var(--va-button-border-style);background-image:var(--va-button-background-image);box-shadow:var(--va-button-box-shadow);font-family:var(--va-font-family);font-weight:var(--va-button-font-weight);text-decoration:none;text-transform:initial;transition:var(--va-button-transition);box-sizing:border-box;cursor:var(--va-button-cursor);z-index:0;vertical-align:top}.va-button:after,.va-button:before{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;left:0;top:0;z-index:-1}.va-button:before{background:var(--va-background-color);opacity:var(--va-background-color-opacity)}.va-button:after{background-color:var(--va-background-mask-color);opacity:var(--va-background-mask-opacity)}.va-button__content{height:100%;display:flex;align-items:center;z-index:1}.va-button__content--loading{opacity:0}.va-button--small{line-height:var(--va-button-sm-line-height);border-radius:var(--va-button-sm-border-radius);letter-spacing:var(--va-button-sm-letter-spacing);min-height:var(--va-button-sm-size);min-width:var(--va-button-sm-size)}.va-button--small .va-button__content{font-size:var(--va-button-sm-font-size);padding:var(--va-button-sm-content-py) var(--va-button-sm-content-px)}.va-button--small .va-button__left-icon{margin-right:var(--va-button-sm-icons-spacing)}.va-button--small .va-button__right-icon{margin-left:var(--va-button-sm-icons-spacing)}.va-button--small.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-sm-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-sm-content-py) - var(--va-button-bordered-border))}.va-button--small.va-button--left-icon .va-button__content{padding-left:var(--va-button-sm-icon-side-padding)}.va-button--small.va-button--right-icon .va-button__content{padding-right:var(--va-button-sm-icon-side-padding)}.va-button--normal{line-height:var(--va-button-line-height);border-radius:var(--va-button-border-radius);letter-spacing:var(--va-button-letter-spacing);min-height:var(--va-button-size);min-width:var(--va-button-size)}.va-button--normal .va-button__content{font-size:var(--va-button-font-size);padding:var(--va-button-content-py) var(--va-button-content-px);line-height:var(--va-button-line-height)}.va-button--normal .va-button__left-icon{margin-right:var(--va-gap-medium)}.va-button--normal .va-button__right-icon{margin-left:var(--va-gap-medium)}.va-button--normal.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-content-py) - var(--va-button-bordered-border))}.va-button--large{line-height:var(--va-button-lg-line-height);border-radius:var(--va-button-lg-border-radius);letter-spacing:var(--va-button-lg-letter-spacing);min-height:var(--va-button-lg-size);min-width:var(--va-button-lg-size)}.va-button--large .va-button__content{font-size:var(--va-button-lg-font-size);padding:var(--va-button-lg-content-py) var(--va-button-lg-content-px)}.va-button--large .va-button__left-icon{margin-right:var(--va-button-lg-icons-spacing)}.va-button--large .va-button__right-icon{margin-left:var(--va-button-lg-icons-spacing)}.va-button--large.va-button--bordered .va-button__content{padding-top:calc(var(--va-button-lg-content-py) - var(--va-button-bordered-border));padding-bottom:calc(var(--va-button-lg-content-py) - var(--va-button-bordered-border))}.va-button--large.va-button--left-icon .va-button__content{padding-left:var(--va-button-lg-icon-side-padding)}.va-button--large.va-button--right-icon .va-button__content{padding-right:var(--va-button-lg-icon-side-padding)}.va-button--small.va-button--icon-only .va-button__content,.va-button--normal.va-button--icon-only .va-button__content,.va-button--large.va-button--icon-only .va-button__content{padding-right:0;padding-left:0}.va-button--plain{min-width:auto;min-height:auto}.va-button--plain .va-button__content{padding:0;z-index:unset}.va-button--round{border-radius:999px}.va-button--bordered{border-width:var(--va-button-bordered-border);border-style:var(--va-button-bordered-style)}.va-button.va-button--disabled{cursor:default;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.va-button--icon-only .va-button__left-icon,.va-button--icon-only .va-button__right-icon{margin-left:0;margin-right:0}.va-button--icon-only .va-button__content{padding:0}.va-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:\"inherit\"}.va-button--loading{pointer-events:none}.va-button--block{display:flex;min-width:100%}.va-button__loader{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}:root,:host{--va-badge-py: 0;--va-badge-font-size: .563rem;--va-badge-border: .125rem;--va-badge-size: calc(var(--va-badge-font-size) * var(--va-badge-line-height) + var(--va-badge-border) * 2);--va-badge-line-height: 1.4;--va-badge-margin: 0;--va-badge-width: fit-content;--va-badge-dot-size: .5rem;--va-badge-text-wrapper-transition: .2s cubic-bezier(.4, 0, .6, 1);--va-badge-text-wrapper-display: inline-flex;--va-badge-text-wrapper-border: solid .125rem;--va-badge-text-wrapper-border-radius: .125rem;--va-badge-text-wrapper-font-weight: 700;--va-badge-text-wrapper-line-height: 1.4;--va-badge-text-wrapper-letter-spacing: .0375rem;--va-badge-text-wrapper-justify-content: center;--va-badge-text-wrapper-white-space: nowrap;--va-badge-text-wrapper-width: min-content;--va-badge-text-wrapper-height: auto;--va-badge-text-wrapper-min-width: initial;--va-badge-text-wrapper-min-height: initial;--va-badge-text-wrapper-margin: 0;--va-badge-text-transform: uppercase;--va-badge-text-py: 0;--va-badge-text-px: .25rem}.va-badge{display:inline-flex;position:relative;font-family:var(--va-font-family);width:var(--va-badge-width)}.va-badge__text-wrapper{transition:var(--va-badge-text-wrapper-transition, var(--va-transition));display:var(--va-badge-text-wrapper-display);border:var(--va-badge-text-wrapper-border, var(--va-control-border));border-radius:var(--va-badge-text-wrapper-border-radius);font-weight:var(--va-badge-text-wrapper-font-weight);line-height:var(--va-badge-text-wrapper-line-height);letter-spacing:var(--va-badge-text-wrapper-letter-spacing, var(--va-letter-spacing));justify-content:var(--va-badge-text-wrapper-justify-content);align-items:center;white-space:var(--va-badge-text-wrapper-white-space);width:var(--va-badge-text-wrapper-width);height:var(--va-badge-text-wrapper-height);min-width:var(--va-badge-text-wrapper-min-width);min-height:var(--va-badge-text-wrapper-min-height);margin:var(--va-badge-text-wrapper-margin)}.va-badge--visible-empty .va-badge__text-wrapper{min-width:var(--va-badge-size);min-height:var(--va-badge-size)}.va-badge--dot .va-badge__text-wrapper{min-width:var(--va-badge-dot-size);min-height:var(--va-badge-dot-size);border-width:0;border-radius:100%;padding:0}.va-badge--empty .va-badge__text-wrapper{width:0;height:0;min-width:0;min-height:0;border-width:0}.va-badge--multi-line .va-badge__text-wrapper{white-space:normal}.va-badge--floating .va-badge__text-wrapper{position:absolute;z-index:2}.va-badge__text{margin:var(--va-badge-margin);text-transform:var(--va-badge-text-transform);overflow:hidden;min-width:calc(var(--va-badge-font-size) * var(--va-badge-line-height));padding:var(--va-badge-text-py) var(--va-badge-text-px);text-align:center;display:inline-flex;justify-content:center;text-overflow:clip;white-space:nowrap;font-size:var(--va-badge-font-size)}.va-badge--multi-line .va-badge__text{overflow:auto;max-height:initial;text-align:initial;text-overflow:initial;white-space:normal}.va-badge--dot .va-badge__text{display:none}.va-badge--floating .va-badge__text{align-items:center;padding:var(--va-badge-py) .15rem}.va-stepper__default-controls{display:flex;gap:var(--va-stepper-controls-gap)}.va-stepper__step-button{position:relative;display:flex;flex-wrap:wrap;align-items:center;gap:var(--va-stepper-step-button-gap);flex-shrink:0;padding:var(--va-stepper-step-button-padding)}.va-stepper__step-button:focus-visible{outline:2px solid var(--va-focus)!important;border-radius:var(--va-stepper-step-border-radius)}.va-stepper__step-button:after{content:\"\";position:absolute;cursor:pointer;top:0;left:0;width:100%;height:100%;background:var(--va-stepper-color);transition:opacity .3s;opacity:0;border-radius:var(--va-stepper-step-border-radius)}.va-stepper__step-button__icon{display:flex;justify-content:center;align-items:center;height:var(--va-stepper-step-button-icon-size);width:var(--va-stepper-step-button-icon-size);font-size:var(--va-stepper-step-button-number-size);color:#fff;background:var(--va-stepper-step-button-inactive-color);border-radius:var(--va-stepper-step-button-icon-border-radius)}.va-stepper__step-button--active{color:var(--va-stepper-color)}.va-stepper__step-button--active .va-stepper__step-button__icon{background:var(--va-stepper-color)}.va-stepper__step-button--disabled{opacity:var(--va-stepper-step-button-disabled-opacity);pointer-events:none}.va-stepper__step-button:hover:after{opacity:var(--va-stepper-step-button-hover-highlight-opacity)}.va-stepper__step-button--navigation-disabled:after{display:none}.va-stepper__step-button--error{color:var(--va-danger)}.va-stepper__step-button--error .va-stepper__step-button__icon{background:var(--va-danger)}:root{--va-stepper-step-button-inactive-color: var(--va-secondary);--va-stepper-step-button-hover-highlight-opacity: .1;--va-stepper-step-button-disabled-opacity: .5;--va-stepper-step-button-padding: 1rem;--va-stepper-step-button-number-size: 1.2rem;--va-stepper-step-button-icon-size: 2rem;--va-stepper-step-button-gap: .5rem;--va-stepper-step-button-icon-border-radius: 100%;--va-stepper-step-border-radius: var(--va-square-border-radius);--va-stepper-divider-color: var(--va-secondary);--va-stepper-divider-length: auto;--va-stepper-divider-min-length: 2rem;--va-stepper-divider-thickness: 1px;--va-stepper-divider-spacing: .5rem;--va-stepper-divider-vertical-margin-left: 2rem;--va-stepper-step-content-wrapper-padding: .5rem 1rem;--va-stepper-step-content-margin: .8rem 0 2rem;--va-stepper-controls-gap: 1rem}.va-stepper{display:flex;flex-direction:column}.va-stepper--vertical{flex-direction:row}.va-stepper__navigation{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.va-stepper__navigation--vertical{flex-direction:column;align-items:flex-start;flex-wrap:nowrap}.va-stepper__divider{flex-grow:1;height:var(--va-stepper-divider-thickness);width:var(--va-stepper-divider-length);min-width:var(--va-stepper-divider-min-length);margin:0 var(--va-stepper-divider-spacing);background:var(--va-stepper-divider-color)}.va-stepper__divider--vertical{min-height:var(--va-stepper-divider-min-length);height:var(--va-stepper-divider-length);width:var(--va-stepper-divider-thickness);min-width:var(--va-stepper-divider-thickness);margin:var(--va-stepper-divider-spacing) 0;margin-left:var(--va-stepper-divider-vertical-margin-left)}.va-stepper__step-content-wrapper{padding:var(--va-stepper-step-content-wrapper-padding)}.va-stepper__step-content{margin:var(--va-stepper-step-content-margin)}.va-stepper__controls{display:flex;gap:var(--va-stepper-controls-gap)}.aellipsis[data-v-69727056]{line-height:23px;max-height:var(--b40395ae);text-overflow:ellipsis;overflow:hidden;color:#777}.aellipsis.expanded[data-v-69727056]{max-height:100%}.pointer[data-v-a0a9daed]{cursor:pointer;align-self:start;margin-right:5px}.card[data-v-a0a9daed]{box-shadow:none;border-bottom:1px solid #e1e1e1;border-radius:0;cursor:pointer}.card[data-v-a0a9daed]:hover,.card.active[data-v-a0a9daed]{background:#f5f8ff!important}.card .va-card-title[data-v-a0a9daed]{font-size:1.25rem}.card .aflex[data-v-a0a9daed]{display:flex;margin-top:15px;flex-direction:row;justify-content:space-between;align-content:center;flex-wrap:nowrap}.card .light[data-v-a0a9daed]{color:#6c6a6add}.list_of_formats[data-v-d76f1184]{display:flex;flex-direction:row;gap:5px;justify-content:flex-start}.map[data-v-d76f1184]{width:100%;height:250px;position:relative}.content[data-v-d76f1184]{margin-top:25px;margin-bottom:35px;padding-left:10px}.line[data-v-d76f1184]{overflow:hidden;width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;align-content:center;justify-content:space-between;align-items:flex-end}.line div[data-v-d76f1184]{display:block;width:auto}.title[data-v-d76f1184]{font-size:24px;padding:23px 10px 0 15px}.pointer[data-v-d76f1184]{cursor:pointer}.filterbox .va-modal__header{background:#f1f1f1;padding-bottom:15px}.infobox .va-modal__dialog{max-width:80%!important}.infobox .footer,.infobox .va-modal__footer{background:#f7f7f7;padding:10px 16px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end}.infobox .va-stepper__navigation{padding:30px 30px 0 15px;background:#f7f7f7;margin-bottom:10px}.infobox .va-stepper__step-content-wrapper,.infobox .va-stepper__step-content{padding:0;margin:0}.infobox .va-modal__message{margin:0}.infobox .aflex{display:flex;flex-direction:row;align-items:flex-start;gap:9px}.infobox .store-item-header{display:none}.infobox .store-item-content{border:none;padding:0}.infobox .datasource-list .datasource-list-add-button{display:none}.widgets_grid[data-v-881fad5f]{display:grid;grid-template-columns:repeat(3,33%);gap:1rem}[data-v-881fad5f] .widgets_grid-item{height:50px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.flex[data-v-881fad5f]{width:100%}.flex[data-v-881fad5f]{display:flex;flex-direction:row;align-content:center;align-items:center}.buttonbar[data-v-881fad5f]{margin-top:15px}.padd[data-v-881fad5f]{max-height:75vh;padding:15px 25px}.padd15[data-v-881fad5f]{padding:10px 25px 30px;border-bottom:1px solid #e5e5e5}.no-padding[data-v-881fad5f]{padding:0}\n";})();
import { withCtx as B, h as Oe, Text as $n, createBlock as Y, isVNode as mo, getCurrentInstance as le, inject as I, computed as c, normalizeClass as we, normalizeStyle as Vt, ref as h, shallowReadonly as kn, isRef as St, unref as S, reactive as Le, capitalize as Bn, defineComponent as A, useAttrs as Vn, openBlock as E, resolveDynamicComponent as st, mergeProps as be, renderSlot as de, createElementBlock as U, createCommentVNode as ue, Fragment as pe, createTextVNode as te, toDisplayString as ce, watch as ae, customRef as An, onMounted as F, onUpdated as Rn, createElementVNode as L, onBeforeUnmount as Re, shallowRef as Ue, toRefs as Tn, normalizeProps as xe, guardReactiveProps as De, createVNode as k, useSlots as In, nextTick as D, withKeys as Be, renderList as at, useCssVars as jn, resolveComponent as J, provide as fe, markRaw as Z, onUnmounted as At, render as rt, useModel as Nn } from "vue";
import { identifier as Fn, CONNECTION_REPOSITORY as Mn } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as zn } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { useConnectionsStore as go } from "org.eclipse.daanse.board.app.ui.vue.stores.connection";
import { useDataSourcesStore as Dn } from "org.eclipse.daanse.board.app.ui.vue.stores.datasouce";
import { identifier as Gn } from "org.eclipse.daanse.board.app.lib.api.widget";
import { useWidgetsStore as Un } from "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
import { useLayoutStore as Hn } from "org.eclipse.daanse.board.app.ui.vue.stores.layout";
import { useRoute as Wn } from "vue-router";
class qn {
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
        let u = "FILTER (" + l.formats.map((d) => "?format =" + d).join("||") + ")";
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
const ze = {}, $e = [];
function wt() {
  return {
    registerEndpoint: (a, l) => {
      ze[l] = a;
    },
    getEndpointsByName: (a) => ze[a],
    getActiveEndpoints: (a) => {
      if ($e.includes(a))
        return ze[a];
    },
    setActive: (a) => {
      $e.includes(a) || ze[a] && $e.push(a);
    },
    setInActive: (a) => {
      const l = $e.indexOf(a);
      l != -1 && $e.splice(l);
    },
    getAllActiveEndpoints: () => Object.fromEntries(Object.entries(ze).filter((a) => $e.includes(a[0])))
  };
}
var N = /* @__PURE__ */ ((e) => (e.XMLA = "<http://publications.europa.eu/resource/authority/file-type/XMLA>", e.CSV = "<http://publications.europa.eu/resource/authority/file-type/CSV>", e.XML = "<http://publications.europa.eu/resource/authority/file-type/XML>", e.WMS = "<http://publications.europa.eu/resource/authority/file-type/WMS_SRVC>", e.WFS = "<http://publications.europa.eu/resource/authority/file-type/WFS_SRVC>", e.GEOJSON = "<http://publications.europa.eu/resource/authority/file-type/GEOJSON>", e.JSON = "<http://publications.europa.eu/resource/authority/file-type/JSON>", e.REST = "<http://publications.europa.eu/resource/authority/file-type/REST>", e.OGCSTA = "???", e))(N || {});
const Zt = {
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
}, Xn = {
  xs: 0,
  sm: 640,
  md: 1024,
  lg: 1440,
  xl: 1920
}, Kn = () => ({
  enabled: !0,
  bodyClass: !0,
  thresholds: Xn
}), Ot = (e, t = null) => B(() => [e], t), Yt = (e) => typeof e == "string" ? Oe($n, e) : mo(e) ? e : Y(e), Jn = (e, t = null) => Object.keys(e).reduce((o, n) => {
  const s = e[n];
  return o[n] = typeof s == "function" ? s : Ot(s, t), o;
}, {}), Zn = (e) => {
  const t = e.render || e.ssrRender;
  if (!t)
    return;
  const o = t.name === "_sfc_render" || t.name === "_sfc_ssrRender";
  return function(...n) {
    const s = n[0], r = s.$.slots, a = new Proxy(s, {
      get(i, u) {
        return u === "$slots" ? Jn(r) : i[u];
      }
    }), l = o ? void 0 : a;
    return t.call(l, a, ...n.slice(1));
  };
}, yo = (e, t) => Object.keys(e).filter((o) => !t.includes(o)).reduce((o, n) => (o[n] = e[n], o), {}), Yn = "$va:childComponents", Rt = () => {
  var e;
  const t = (e = le()) == null ? void 0 : e.attrs["va-child"];
  if (!t)
    return null;
  const o = I(Yn);
  return o?.value ? c(() => o.value[t]) : null;
}, Qn = /([a-z0-9])([A-Z])/g, er = (e) => e.replace(Qn, "$1-$2").toLowerCase(), tr = (e, t) => t in e ? e[t] : e[er(t)], or = (e, t) => {
  const o = e.props, n = Rt();
  return new Proxy(o, {
    get: (s, r) => {
      var a, l;
      if (typeof r != "string")
        return s[r];
      const i = (a = n?.value) == null ? void 0 : a[r];
      if (i !== void 0)
        return i;
      const u = e.vnode.props || {}, d = s[r];
      if (tr(u, r) !== void 0)
        return d;
      const C = (l = t.value) == null ? void 0 : l[r];
      return C !== void 0 ? C : d;
    }
  });
}, nr = (e, t) => {
  const o = e.attrs;
  return new Proxy(o, {
    get: (n, s) => {
      var r;
      if (typeof s != "string")
        return n[s];
      if (s === "class")
        return we([t.value.class, o.class]);
      if (s === "style")
        return Vt([t.value.style, o.style]);
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
}, yt = "slot:", rr = (e, t) => {
  const o = e.slots, n = Rt(), s = c(() => Object.keys(t.value).reduce((r, a) => (a.startsWith(yt) && (r[a.slice(yt.length)] = t.value[a]), r), {}));
  return new Proxy(o, {
    get: (r, a) => {
      var l, i;
      if (typeof a != "string")
        return r[a];
      const u = `${yt}${a}`, d = (l = n?.value) == null ? void 0 : l[u];
      if (d !== void 0)
        return Ot(Yt(d));
      const f = r[a];
      if (f !== void 0)
        return f;
      const C = (i = s.value) == null ? void 0 : i[a];
      return C !== void 0 ? Ot(Yt(C)) : f;
    },
    ownKeys(r) {
      return [.../* @__PURE__ */ new Set([...Object.keys(o), ...Object.keys(s.value)])];
    },
    getOwnPropertyDescriptor(r, a) {
      return Reflect.getOwnPropertyDescriptor(s.value, a) ?? Reflect.getOwnPropertyDescriptor(o, a);
    }
  });
}, sr = "VaLocalConfig", ar = c(() => []);
function lr() {
  return I(sr, ar);
}
const ir = [null, void 0, ""], _t = (e) => ir.includes(e), Qt = (e) => !_t(e), ur = typeof process < "u" ? process : {}, cr = ur.env || {}, dr = cr.NODE_ENV || "", Tt = typeof __DEV__ < "u" ? __DEV__ : !["prod", "production"].includes(dr), xt = (...e) => (Tt && console.warn(...e), !1), pr = (e) => {
  throw new Error(`[Vuestic] ${e}`);
};
let fr = null;
const bo = () => fr, ho = (e, t = void 0) => {
  var o;
  const n = (o = bo()) == null ? void 0 : o._context.provides[e];
  return le() ? I(e, t) : n ?? pr("You're using Vuestic composable outside Vue app. Since you registered Vuestic in multiple apps, composables can not be used outside setup function anymore.");
}, vr = (e) => e !== null && typeof e == "object", Ve = (e) => e === null || typeof e != "object" ? e : Array.isArray(e) ? e.map(Ve) : e instanceof Date ? new Date(e.getTime()) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Map ? new Map(Array.from(e.entries()).map(([t, o]) => [t, Ve(o)])) : e instanceof Set ? new Set(Array.from(e.values()).map(Ve)) : vr(e) ? Object.keys(e).reduce((t, o) => (t[o] = Ve(e[o]), t), {}) : e, bt = (e) => e && typeof e == "object" && !Array.isArray(e), Ge = (e, t) => (bt(e) || (e = {}), Object.keys(t).forEach((o) => {
  const n = e[o], s = t[o];
  s instanceof RegExp || s instanceof Date ? e[o] = s : bt(n) && bt(s) ? e[o] = Ge(Object.create(
    Object.getPrototypeOf(n),
    Object.getOwnPropertyDescriptors(n)
  ), s) : e[o] = s;
}), e), mr = [
  {
    prefix: "bg",
    property: "background-color"
  },
  {
    prefix: "text",
    property: ["color", "fill"]
  }
], gr = () => mr, yr = (e) => ({
  ...e,
  get variables() {
    return this.presets[this.currentPresetName];
  },
  set variables(t) {
    this.presets[this.currentPresetName] = t;
  }
}), br = () => yr({
  threshold: 150,
  presets: {
    light: Zt.light,
    dark: Zt.dark
  },
  currentPresetName: "light"
}), hr = (e) => e, Cr = hr([
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
]), Sr = [
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
], wr = (e) => (e.aliases = e.aliases || [], e.fonts = e.fonts || [], [
  ...e.aliases,
  ...Cr,
  ...e.fonts,
  ...Sr
]), Or = () => wr({}), _r = () => (
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
), xr = () => ({
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
}), Co = Symbol("GLOBAL_CONFIG"), Lr = () => ({
  colors: br(),
  icons: Or(),
  components: _r(),
  breakpoint: Kn(),
  i18n: xr(),
  colorsClasses: gr(),
  /**
   * global config variable to pass nuxt-link component to vuestic-ui via @vuestic/nuxt
   * TODO: give a try to integrate inertia js router components via this option
   * TODO: if this try won't be success, may be remake to provide/inject
   */
  routerComponent: void 0
}), Pr = (e = {}) => {
  const t = h(Ge(Lr(), e));
  return {
    getGlobalConfig: () => t.value,
    setGlobalConfig: (r) => {
      const a = typeof r == "function" ? r(t.value) : r;
      t.value = Ve(a);
    },
    mergeGlobalConfig: (r) => {
      const a = typeof r == "function" ? r(t.value) : r;
      t.value = Ge(Ve(t.value), a);
    },
    globalConfig: t
  };
}, Er = (e) => {
  var t, o;
  const n = ((t = le()) == null ? void 0 : t.appContext.provides) || ((o = bo()) == null ? void 0 : o._context.provides);
  if (!n)
    throw new Error("Vue app not found for provide");
  return n[Co] = e, e;
};
function Te() {
  let e = ho(Co);
  return e || (e = Pr(), Er(e)), e;
}
const $r = (e) => "preset" in e, eo = (e) => $r(e) ? e.preset : void 0, kr = (e, t) => {
  const o = lr(), { globalConfig: n } = Te(), s = e.name, r = (l) => (l instanceof Array ? l : [l]).reduce((i, u) => {
    var d, f, C;
    const b = (C = (f = (d = n.value.components) == null ? void 0 : d.presets) == null ? void 0 : f[s]) == null ? void 0 : C[u];
    if (!b)
      return i;
    const g = eo(b);
    return {
      ...i,
      ...g ? r(g) : void 0,
      ...b
    };
  }, {}), a = Rt();
  return c(() => {
    var l, i;
    const u = {
      ...(l = n.value.components) == null ? void 0 : l.all,
      ...(i = n.value.components) == null ? void 0 : i[s]
    }, d = o.value.reduce((b, g) => {
      const v = g[s];
      return v ? { ...b, ...v } : b;
    }, {}), f = [
      t,
      a?.value,
      d,
      u
    ].filter(Qt).map(eo).filter(Qt).at(0), C = f ? r(f) : void 0;
    return { ...u, ...d, ...C };
  });
}, Br = (e) => (t, o) => {
  var n;
  const s = le(), r = kr(e, t), a = c(() => yo(r.value, Object.keys(t))), l = or(s, r), i = nr(s, a), u = rr(s, r);
  s.props = l, s.attrs = i, s.slots = u;
  const d = (n = e.setup) == null ? void 0 : n.call(e, kn(l), {
    ...o,
    attrs: i,
    slots: u
  });
  return typeof d == "object" && !s.exposed && o.expose(d), d;
}, Lt = (e) => {
  const t = Br(e), o = Zn(e);
  return new Proxy(e, {
    get(n, s) {
      return s in e ? s === "setup" ? t : s === "render" || s === "ssrRender" ? o : Reflect.get(n, s) : Reflect.get(n, s);
    }
  });
}, Pt = "__c", Vr = (e) => (e[Pt] = Lt(e[Pt]), e), Ar = (e) => "setup" in e ? Lt(e) : Pt in e ? Vr(e) : (e.setup = () => ({
  /* Fake setup function */
}), Lt(e)), He = Ar, Rr = {
  defaultSize: 48,
  sizes: {
    small: 32,
    medium: 48,
    large: 64
  }
}, Tr = {
  defaultSize: 1,
  sizes: {
    small: 0.75,
    medium: 1,
    large: 1.25
  }
}, It = {
  size: {
    type: [String, Number],
    default: "",
    validator: (e) => typeof e == "string" || typeof e == "number"
  },
  sizesConfig: {
    type: Object,
    default: () => Rr
  },
  fontSizesConfig: {
    type: Object,
    default: () => Tr
  }
}, Ir = /(?<fontSize>\d+)(?<extension>px|rem)/i, to = (e) => e / 16 - 0.5, jt = (e, t = ((o) => (o = le()) == null ? void 0 : o.type.name)()) => {
  const { getGlobalConfig: o } = Te(), n = c(() => {
    var l, i;
    return t ? (i = (l = o().components) == null ? void 0 : l[t]) == null ? void 0 : i.sizesConfig : void 0;
  }), s = c(() => {
    var l, i, u;
    const { defaultSize: d, sizes: f } = e.sizesConfig, C = (l = n.value) == null ? void 0 : l.defaultSize;
    if (!e.size)
      return `${d || C}px`;
    if (typeof e.size == "string") {
      const b = (u = (i = n.value) == null ? void 0 : i.sizes) == null ? void 0 : u[e.size], g = f[e.size];
      return g ? `${g}px` : b ? `${b}px` : e.size;
    }
    return `${e.size}px`;
  }), r = c(() => {
    const { defaultSize: l, sizes: i } = e.fontSizesConfig;
    if (!e.size)
      return l;
    if (typeof e.size == "string") {
      if (e.size in i)
        return i[e.size];
      const u = e.size.match(Ir);
      if (!u || !u.groups)
        throw new Error("Size prop should be either valid string or number");
      const { extension: d, fontSize: f } = u.groups;
      return d === "rem" ? +f : to(+f);
    }
    return to(e.size);
  }), a = c(() => `${r.value}rem`);
  return {
    sizeComputed: s,
    fontSizeComputed: a,
    fontSizeInRem: r
  };
}, ct = {
  preset: {
    type: [String, Array],
    default: void 0
  }
}, jr = (e, t) => t.test(e), So = (e, t) => {
  if (typeof t != "string" && t.global)
    return [...e.matchAll(t)].map((n) => n.slice(1));
  const o = e.match(t) || [];
  return o ? o.length > 1 ? o.slice(1) : o : [];
}, wo = /{[^}]*}/g, Oo = (e) => e.replace(wo, "(.*)"), Nr = (e) => (e.match(wo) || []).map((t) => t.replace(/{|}/g, "")), Fr = (e, t) => So(e, Oo(t)), Mr = (e, t) => {
  const o = Nr(t), n = Fr(e, t);
  return o.reduce((s, r, a) => ({ ...s, [r]: n[a] }), {});
}, zr = (e, t) => (e.match(t) || [])[0] === e, Dr = (e, t) => {
  const o = Oo(t);
  return zr(e, new RegExp(o));
}, _o = (e) => typeof e.name == "string", xo = (e) => e.name instanceof RegExp, Gr = (e, t) => _o(t) ? Dr(e, t.name) : xo(t) ? jr(e, t.name) : !1, Ur = (e, t) => {
  const o = Mr(e, t.name);
  return t.resolve && t.resolve(o);
}, Hr = (e, t) => {
  if (t.name.global)
    throw new Error(`Bad icon config with name ${t.name}. Please, don't use global regex as name.`);
  const o = So(e, t.name);
  return t.resolveFromRegex && t.resolveFromRegex(...o);
}, Wr = (e, t) => {
  if (_o(t))
    return Ur(e, t);
  if (xo(t))
    return Hr(e, t);
  throw Error("Unknown icon config");
}, qr = (e, t, o = []) => {
  const n = t.find((s) => o.includes(s.name.toString()) ? !1 : Gr(e, s));
  if (!n)
    throw new Error(`Can not find icon config from ${e}. Please provide default config.`);
  return n;
}, Lo = (e, t, o = []) => {
  if (!e)
    return;
  const n = qr(e, t, o), s = Ge(Wr(e, n), n);
  return o = [...o, n.name.toString()], Ge(
    Lo(s.to, t, o),
    s
  );
}, Xr = (e) => {
  const t = ["name", "to", "resolve", "resolveFromRegex"], o = e;
  return t.forEach((n) => {
    delete o[n];
  }), o;
}, Kr = (e, t) => {
  const o = Lo(e, t);
  return o === void 0 ? {} : Xr(o);
}, Jr = () => {
  const { globalConfig: e } = Te();
  return {
    getIcon: (t) => Kr(t, e.value.icons)
  };
}, Zr = Symbol("VaAppCachePlugin"), Yr = () => {
  const e = ho(Zr);
  return e || {
    colorContrast: {}
  };
}, Qr = (e) => {
  const t = typeof e == "function" ? c(e) : c(e), o = new Proxy(t, {
    get(n, s, r) {
      if (typeof t.value == "object")
        return S(Reflect.get(t.value, s, r));
    },
    set(n, s, r) {
      return St(t.value[s]) && !St(r) ? t.value[s].value = r : t.value[s] = r, !0;
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
}, es = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(), ts = /[A-Z0-9]*(?:[^\-_|A-Z|\s.])*/gm, Po = (e) => {
  var t;
  return ((t = e.match(ts)) == null ? void 0 : t.map((o) => o.trim().split(/([0-9]+)|([a-zA-Z]+)/g)).flat().filter(Boolean)) || [];
}, lt = (e) => Po(e).map((t) => t.toLowerCase()).join("-"), os = (e) => Po(e).map((t, o) => o === 0 ? t.toLowerCase() : es(t)).join(""), Eo = /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6,8})$/, $o = /^rgba?\(([\d.]+, ?){2}[\d.]+(, ?[\d.]+)?\)$/, ko = /hsla?\([\d.]+(deg|rad|turn|grad)?(,?\s?[\d.]+%?){2}(,?\s?(\/\s?)?[\d.]+%?)?\)/, ns = (e) => Eo.test(e) || $o.test(e) || ko.test(e), Nt = (e) => typeof e != "object" || e === null ? !1 : "h" in e && "s" in e && "l" in e, Ft = (e) => typeof e != "object" || e === null ? !1 : "r" in e && "g" in e && "b" in e, Bo = (e) => {
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
}, oo = (e) => {
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
}, ht = (e, t, o) => (o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? e + (t - e) * 6 * o : o < 1 / 2 ? t : o < 2 / 3 ? e + (t - e) * (2 / 3 - o) * 6 : e), no = (e) => {
  const t = e.h / 360, o = e.s / 100, n = e.l / 100, s = n < 0.5 ? n * (1 + o) : n + o - n * o, r = 2 * n - s, a = ht(r, s, t + 1 / 3), l = ht(r, s, t), i = ht(r, s, t - 1 / 3);
  return { r: Math.round(a * 255), g: Math.round(l * 255), b: Math.round(i * 255), a: e.a };
}, We = (e) => {
  if (Nt(e))
    return { ...e };
  if (Ft(e))
    return oo(e);
  const t = Bo(e) ?? Vo(e);
  if (t)
    return oo(t);
  const o = Ao(e);
  if (o)
    return o;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, Mt = ({ h: e, s: t, l: o, a: n }) => `hsla(${e},${t}%,${o}%,${n ?? 1})`, zt = (e) => {
  if (Ft(e))
    return { ...e };
  if (Nt(e))
    return no(e);
  const t = Ao(e);
  if (t)
    return no(t);
  const o = Bo(e) ?? Vo(e);
  if (o)
    return o;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, Ro = ({ r: e, g: t, b: o, a: n }) => n === 1 ? `rgb(${e},${t},${o})` : `rgba(${e},${t},${o},${n ?? 1})`, rs = (e) => {
  if (Nt(e))
    return Mt(e);
  if (Ft(e))
    return Ro(e);
  if (typeof e == "string")
    return e;
  throw new Error(`Color ${e} is not valid. Please, provide valid color.`);
}, ss = (e, { h: t, s: o, l: n, a: s }) => {
  const r = We(e);
  return r.a = r.a ?? 1, r.h = t ?? r.h, r.s = o ?? r.s, r.l = n ?? r.l, r.a = s ?? r.a, r.h < 0 && (r.h = 360 + r.h), r.h > 360 && (r.h = r.h - 360), r.s = Math.max(0, Math.min(100, r.s)), r.l = Math.max(0, Math.min(100, r.l)), r.a = Math.max(0, Math.min(1, r.a)), r;
}, as = (e, { h: t, s: o, l: n, a: s }) => {
  const r = We(e);
  return r.a = r.a ?? 1, r.h += t ?? 0, r.s += o ?? 0, r.l += n ?? 0, r.a += s ?? 0, r.h < 0 && (r.h = 360 + r.h), r.h > 360 && (r.h = r.h - 360), r.s = Math.max(0, Math.min(100, r.s)), r.l = Math.max(0, Math.min(100, r.l)), r.a = Math.max(0, Math.min(1, r.a)), r;
}, ls = (e) => /var\(--.+\)/.test(e), is = (e) => `--va-${lt(e)}`, ro = (e) => os(e), Ie = (e, t) => {
  const { r: o, g: n, b: s } = zt(e);
  return Ro({ r: o, g: n, b: s, a: t });
}, so = (e) => {
  const { r: t, g: o, b: n } = zt(e);
  return Math.sqrt(t * t * 0.241 + o * o * 0.691 + n * n * 0.068);
}, us = (e, t = 0.4) => Ie(e, t), cs = (e, t = 0.4) => Ie(e, t), ds = (e, t = 0.2) => Ie(e, t), ps = (e, t = 0.3) => Ie(e, t), _e = (e, t) => Mt(as(We(e), t)), fs = (e, t) => Mt(ss(We(e), t)), vs = (e) => {
  const t = We(e);
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
}, ms = (e) => `linear-gradient(to right, ${vs(e)}, ${rs(e)})`, gs = (e, t, o) => {
  const n = Ie(t, o);
  return `linear-gradient(0deg, ${n}, ${n}), ${e}`;
}, ys = (e) => e ? e === "transparent" ? !0 : zt(e).a <= 0.1 : !1, Ce = () => {
  const e = Te();
  if (!e)
    throw new Error("useColors must be used in setup function or Vuestic GlobalConfigPlugin is not registered!");
  const { globalConfig: t } = e, o = Qr({
    get: () => t.value.colors.presets[t.value.colors.currentPresetName],
    set: (p) => {
      n(p);
    }
  }), n = (p) => {
    t.value.colors.presets[t.value.colors.currentPresetName] = {
      ...t.value.colors.variables,
      ...p
    };
  }, s = () => o, r = (p, O, _) => {
    if (O || (O = o.primary), p === "transparent")
      return "#ffffff00";
    if (p === "currentColor")
      return p;
    if (p?.startsWith("on")) {
      const X = p.slice(2);
      if (o[ro(X)])
        return r(C(r(X)), void 0, _);
    }
    p || (p = r(O));
    const P = o[p] || o[ro(p)];
    return P ? _ ? `var(${is(p)})` : P : ns(p) || _ && ls(p) ? p : (xt(`'${p}' is not a proper color! Use HEX or default color themes
      names (https://vuestic.dev/en/styles/colors#default-color-themes)`), r(O));
  }, a = (p) => c({
    get() {
      return r(p);
    },
    set(O) {
      n({ [p]: O });
    }
  }), l = (p, O = "va") => Object.keys(p).filter((_) => p[_] !== void 0).reduce((_, P) => (_[`--${O}-${lt(P)}`] = r(p[P], void 0, !0), _[`--${O}-on-${lt(P)}`] = r(C(r(p[P])), void 0, !0), _), {}), i = Yr(), u = (p) => typeof p != "string" ? so(p) : (i.colorContrast[p] || (i.colorContrast[p] = so(p)), i.colorContrast[p]), d = c(() => u(r("textPrimary")) > 255 / 2 ? "textInverted" : "textPrimary"), f = c(() => u(r("textPrimary")) > 255 / 2 ? "textPrimary" : "textInverted"), C = (p, O, _) => {
    const P = `on${Bn(String(p))}`;
    return o[P] ? o[P] : (O = O || d.value, _ = _ || f.value, u(p) > t.value.colors.threshold ? O : _);
  }, b = c({
    get: () => t.value.colors.currentPresetName,
    set: (p) => {
      v(p);
    }
  }), g = c(() => t.value.colors.presets), v = (p) => {
    if (t.value.colors.currentPresetName = p, !t.value.colors.presets[p])
      return xt(`Preset ${p} does not exist`);
  };
  return {
    colors: o,
    currentPresetName: b,
    presets: g,
    applyPreset: v,
    setColors: n,
    getColors: s,
    getColor: r,
    getComputedColor: a,
    getBoxShadowColor: us,
    getBoxShadowColorFromBg: cs,
    getHoverColor: ds,
    getFocusColor: ps,
    getGradientBackground: ms,
    getTextColor: C,
    shiftHSLAColor: _e,
    setHSLAColor: fs,
    colorsToCSSVariable: l,
    colorToRgba: Ie,
    getStateMaskGradientBackground: gs
  };
}, bs = /* @__PURE__ */ A({
  name: "VaIcon",
  __name: "VaIcon",
  props: {
    ...It,
    ...ct,
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
    const t = e, { getColor: o } = Ce(), { sizeComputed: n } = jt(t), { getIcon: s } = Jr(), r = c(() => s(t.name)), a = c(() => t.component || t.tag || r.value.component || r.value.tag || "i"), l = Vn(), i = c(() => ({ ...r.value.attrs, ...yo(l, ["class"]) })), u = (v) => {
      if (!(v === void 0 || v === !1))
        return v === "counter-clockwise" ? "va-icon--spin-reverse" : "va-icon--spin";
    }, d = c(() => [
      r.value.class,
      u(t.spin ?? r.value.spin)
    ]), f = c(() => {
      const v = t.rotation ? `rotate(${t.rotation}deg)` : "", p = t.flip === "vertical" || t.flip === "both" ? -1 : 1, O = t.flip === "horizontal" || t.flip === "both" ? -1 : 1;
      return `${t.flip === "off" ? "" : `scale(${p}, ${O})`} ${v}`.trim();
    }), C = c(() => ({
      transform: f.value,
      cursor: l.onClick ? "pointer" : null,
      color: t.color ? o(t.color, void 0, !0) : r.value.color,
      fontSize: n.value,
      height: n.value,
      lineHeight: n.value
    })), b = c(() => l.tabindex ?? -1), g = c(() => l.role !== "button" || b.value < 0);
    return (v, p) => (E(), Y(st(a.value), be({
      class: ["va-icon", d.value],
      style: C.value,
      "aria-hidden": g.value,
      notranslate: ""
    }, i.value), {
      default: B(() => [
        de(v.$slots, "default", {}, () => [
          r.value.content ? (E(), U(pe, { key: 0 }, [
            te(ce(r.value.content), 1)
          ], 64)) : ue("", !0)
        ])
      ]),
      _: 3
    }, 16, ["class", "style", "aria-hidden"]));
  }
}), Et = He(bs), $t = (e) => {
  const t = le().props;
  return c(() => {
    const n = t?.[e];
    return n === void 0 ? n : Number(n);
  });
}, To = (e) => typeof e == "function", Io = () => typeof window > "u", hs = () => !Io(), Cs = (e) => {
  const t = c(hs), o = h(null);
  return ae(t, () => {
    t.value && (o.value = e());
  }, { immediate: !0 }), o;
}, Ss = () => Cs(() => window), he = (e) => {
  if (e && typeof e == "object" && (e = S(e), !!e))
    return typeof e.$el < "u" ? e.$el : e;
}, kt = (e, ...t) => {
  if (!(!e || typeof e != "object")) {
    if ("addEventListener" in e && typeof e.addEventListener == "function") {
      e.addEventListener(...t);
      return;
    }
    "parentElement" in e && kt(e.parentElement, ...t);
  }
}, Bt = (e, ...t) => {
  if (!(!e || typeof e != "object")) {
    if ("removeEventListener" in e && typeof e.removeEventListener == "function") {
      e.removeEventListener(...t);
      return;
    }
    "parentElement" in e && Bt(e.parentElement, ...t);
  }
}, Ae = (e, t, o) => {
  const n = o && typeof o != "boolean" ? o : Ss(), s = typeof o == "boolean" ? o : !1;
  ae(n, (r, a) => {
    Array.isArray(e) ? e.forEach((l) => {
      kt(he(S(r)), l, t, s), Bt(he(S(a)), l, t, s);
    }) : (kt(he(S(r)), e, t, s), Bt(he(S(a)), e, t, s));
  }, { immediate: !0 });
}, ws = (e) => {
  const t = le();
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
  return F(o), Rn(o), n;
}, Os = (e) => e.startsWith("$t:"), jo = (e) => ({ type: String, default: e }), ao = (e, t) => (t && Object.keys(t).forEach((o) => {
  e = e.replace(`{${o}}`, String(t[o]));
}), e), dt = () => {
  const { globalConfig: e } = Te(), t = c(() => e.value.i18n);
  function o(s, r) {
    var a;
    const l = (a = le()) == null ? void 0 : a.appContext.config.globalProperties.$t;
    if (typeof l == "function") {
      const u = l(`vuestic.${s}`, r);
      if (u)
        return u;
    }
    const i = t.value[s];
    return i ? ao(i, r) || s : (xt(`${s} not found in VuesticUI i18n config`), s);
  }
  function n(s, r) {
    return s ? Os(s) ? o(s.slice(3), r) : ao(s, r) || s : "";
  }
  return {
    tp: n,
    t: o
  };
}, No = (e, t = !1) => {
  const { props: o } = le(), { getColor: n, getTextColor: s } = Ce();
  return { textColorComputed: c(() => {
    if (o.textColor)
      return n(o.textColor);
    const a = e ? S(e) : o.color;
    if (!a)
      return "currentColor";
    const l = n(a);
    return ys(l) ? "currentColor" : S(t) ? l : n(s(l));
  }) };
}, _s = (e, t, o) => {
  const n = le();
  if (!n)
    throw new Error("`useButtonBackground` hook must be used only inside of setup function!");
  const s = n.props, { getColor: r, getGradientBackground: a } = Ce(), l = c(() => s.plain ? "transparent" : s.gradient ? a(e.value) : e.value), i = c(() => !s.plain && o.value), u = c(() => !s.plain && t.value), d = c(() => u.value && s.pressedBehavior === "opacity" ? s.pressedOpacity : i.value && s.hoverBehavior === "opacity" ? Number(s.hoverOpacity) : Number(s.backgroundOpacity)), f = c(() => i.value && s.hoverBehavior === "mask"), C = c(() => u.value && s.pressedBehavior === "mask"), b = c(() => C.value ? s.pressedOpacity : f.value ? Number(s.hoverOpacity) : 0), g = c(() => C.value ? r(s.pressedMaskColor) : f.value ? r(s.hoverMaskColor) : "transparent");
  return {
    backgroundColor: l,
    backgroundColorOpacity: d,
    backgroundMaskOpacity: b,
    backgroundMaskColor: g
  };
}, xs = {
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
  const t = le(), o = c(() => t?.appContext.config.globalProperties), n = c(() => {
    var f;
    return (f = o.value) == null ? void 0 : f.$router;
  }), s = c(() => {
    var f;
    return (f = o.value) == null ? void 0 : f.$route;
  }), { getGlobalConfig: r } = Te(), a = c(() => {
    if (e.disabled)
      return e.tag;
    if (e.href && !e.to)
      return "a";
    const f = r();
    return f.routerComponent && e.to ? f.routerComponent : e.to && n.value !== void 0 ? "router-link" : e.to && n.value === void 0 ? "a" : e.tag || "div";
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
    if (!n.value || !e.to)
      return !1;
    const f = n.value.resolve(e.to).href, C = n.value.currentRoute.value.path;
    return f.replace("#", "") === C.replace("#", "");
  }), d = c(() => {
    var f;
    return e.href ? e.href : s.value === void 0 && e.to ? e.to : e.to ? (f = n.value) == null ? void 0 : f.resolve(e.to, s.value).href : void 0;
  });
  return {
    isLinkTag: l,
    tagComputed: a,
    hrefComputed: d,
    isActiveRouterLink: u,
    linkAttributesComputed: i
  };
}, Ls = (e) => {
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
}, Ps = (e) => {
  var t, o, n;
  if (Io())
    return e;
  if (e > 0) {
    const s = (t = window?.navigator) == null ? void 0 : t.userAgent, r = s && /^((?!chrome|android).)*safari/i.test((o = window?.navigator) == null ? void 0 : o.userAgent), a = s && /(version.)15|16/i.test((n = window?.navigator) == null ? void 0 : n.userAgent);
    if (r && !a)
      return e < 1 ? 1 - e : e;
  }
  return e;
}, Es = (e, t, o, n) => {
  const s = le();
  if (!s)
    throw new Error("`useButtonTextColor` hook must be used only inside of setup function!");
  const r = s.props, { getColor: a, colorToRgba: l, getStateMaskGradientBackground: i } = Ce(), u = c(() => ({
    background: "transparent",
    color: e.value,
    "-webkit-background-clip": "text",
    "background-clip": "text",
    opacity: b.value
  })), d = (g, v, p) => {
    const O = a(g);
    let _;
    return p === "opacity" ? _ = { color: l(e.value, v) } : _ = {
      background: i(t.value, O, v),
      color: v < 1 ? l(e.value, Ps(v)) : O
    }, { ...u.value, ..._ };
  }, f = c(() => d(r.hoverMaskColor, Number(r.hoverOpacity), r.hoverBehavior)), C = c(() => d(r.pressedMaskColor, r.pressedOpacity, r.pressedBehavior)), b = c(() => {
    if (!r.disabled)
      return r.textOpacity === 1 || n.value && !o.value ? 1 : o.value ? 0.9 : r.textOpacity;
  });
  return c(() => {
    const g = {
      color: e.value,
      background: "transparent"
    };
    return r.plain && Object.assign(g, u.value, { background: e.value }), r.plain ? o.value ? C.value : n.value ? f.value : g : g;
  });
}, lo = (e, t, o) => Math.min(Math.max(e, t), o), $s = {
  class: "va-progress-circle__wrapper",
  viewBox: "0 0 40 40"
}, ks = ["r", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Bs = /* @__PURE__ */ A({
  name: "VaProgressCircle",
  __name: "VaProgressCircle",
  props: {
    ...It,
    ...ct,
    modelValue: { type: [Number, String], default: 0 },
    indeterminate: { type: Boolean, default: !1 },
    thickness: { type: [Number, String], default: 0.06 },
    color: { type: String, default: "primary" },
    ariaLabel: jo("$t:progressState")
  },
  setup(e) {
    const t = e, { getColor: o } = Ce(), { sizeComputed: n } = jt(t), s = c(() => lo(Number(t.thickness), 0, 1) / 2 * 100), r = c(() => 20 - 20 * s.value / 100), a = c(() => 2 * Math.PI * r.value), l = c(() => a.value * (1 - lo(Number(t.modelValue), 0, 100) / 100)), i = c(() => o(t.color, void 0, !0)), { tp: u } = dt(), d = c(() => ({ color: i.value })), f = c(() => ({
      width: n.value,
      height: n.value
    })), C = c(() => ({
      "va-progress-circle--indeterminate": t.indeterminate
    })), b = c(() => ({
      role: "progressbar",
      "aria-label": u(t.ariaLabel),
      "aria-valuenow": t.indeterminate ? void 0 : t.modelValue
    }));
    return (g, v) => (E(), U("div", be({
      class: ["va-progress-circle", C.value],
      style: f.value
    }, b.value), [
      (E(), U("svg", $s, [
        L("circle", {
          class: "va-progress-circle__overlay",
          cx: "50%",
          cy: "50%",
          r: r.value,
          fill: "none",
          stroke: i.value,
          "stroke-width": s.value + "%",
          "stroke-dasharray": a.value,
          "stroke-dashoffset": l.value
        }, null, 8, ks)
      ])),
      g.$slots.default ? (E(), U("div", {
        key: 0,
        style: Vt(d.value),
        class: "va-progress-circle__info"
      }, [
        de(g.$slots, "default")
      ], 4)) : ue("", !0)
    ], 16));
  }
}), Mo = He(Bs), zo = (e, t) => Object.keys(e).filter((o) => t.includes(o)).reduce((o, n) => (o[n] = e[n], o), {}), Vs = {
  hoverBehavior: {
    type: String,
    default: "mask",
    validator: (e) => ["opacity", "mask"].includes(e)
  },
  hoverOpacity: { type: [Number, String], default: 0.15 },
  hoverMaskColor: { type: String, default: "textInverted" }
}, As = {
  pressedBehavior: {
    type: String,
    default: "mask",
    validator: (e) => ["opacity", "mask"].includes(e)
  },
  pressedOpacity: { type: Number, default: 0.13 },
  pressedMaskColor: { type: String, default: "textPrimary" }
}, Rs = {
  loading: { type: Boolean, default: !1 }
}, Do = (e) => e instanceof HTMLElement, Ts = (e) => {
  !e || !Do(e) || (e.focus(), e.dispatchEvent(new FocusEvent("focus", { bubbles: !0 })));
}, Is = (e) => {
  !e || !Do(e) || (e.blur(), e.dispatchEvent(new Event("blur", { bubbles: !0 })));
}, io = (e, t, o = {}) => {
  F(() => window.addEventListener(e, t, { capture: !0, ...o })), Re(() => window.removeEventListener(e, t, { capture: !0, ...o }));
}, js = () => {
  const e = Ue(), t = () => {
    e.value = document.activeElement;
  };
  return F(t), io("focus", t), io("blur", t), e;
};
function Ns(e, t) {
  const o = js(), n = c({
    get: () => _t(o.value) || _t(e?.value) ? !1 : o.value === e?.value,
    set: (i) => {
      i ? a() : l();
    }
  }), s = (i) => {
  }, r = (i) => {
  }, a = () => {
    e?.value && Ts(he(e?.value));
  }, l = () => {
    e?.value && Is(he(e?.value));
  };
  return Ae("focus", s, e), Ae("blur", r, e), {
    isFocused: n,
    onFocus: s,
    onBlur: r,
    focus: a,
    blur: l
  };
}
const Go = (e) => {
  if (St(e))
    return c({
      get() {
        return he(e.value);
      },
      set(o) {
        e.value = o;
      }
    });
  if (e) {
    const o = ws(e);
    return c({
      get() {
        return he(o.value);
      },
      set(n) {
        o.value = n;
      }
    });
  }
  const t = Ue();
  return c({
    set(o) {
      t.value = he(o);
    },
    get() {
      return t.value;
    }
  });
};
function Fs(e, t) {
  const o = h(!1), n = () => {
    t?.value || (o.value = !0);
  }, s = () => {
    o.value = !1;
  };
  t && ae(t, (a) => {
    a && (o.value = !1);
  });
  const r = Go(e);
  return Ae("mouseenter", n, r), Ae("mouseleave", s, r), { isHovered: o, onMouseEnter: n, onMouseLeave: s };
}
function Ms(e) {
  const t = h(!1), o = () => {
    t.value = !0;
  }, n = () => {
    t.value = !1;
  }, s = Go(e);
  return Ae(["mousedown", "touchstart", "dragstart"], o, s), Ae([
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
  if (mo(e))
    return !0;
  if (!e || t && (!To(e) || !((o = e()) != null && o.length)))
    return !1;
  const n = t ? e() : e;
  return Array.isArray(n) ? n.some((s) => Array.isArray(s.children) ? Uo(s.children, !1) : s.children || s.props) : !!n.children;
}, zs = (e = "default") => {
  const { slots: t } = le();
  return c(() => Uo(t[e]));
}, Dt = (e, t) => {
  Tt && !e && console.warn('You must pass the @param "prefix" to the useBem hook!');
  const o = c(() => typeof t == "function" ? t() : S(t)), n = c(() => Object.entries(S(o)).reduce((a, [l, i]) => (i && (a[`${e}--${lt(l)}`] = !0), a), {})), s = c(() => Object.keys(n.value)), r = c(() => s.value.join(" "));
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
}, Ds = /* @__PURE__ */ A({
  name: "VaButton",
  __name: "VaButton",
  props: {
    ...ct,
    ...It,
    ...Vs,
    ...As,
    ...Rs,
    ...xs,
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
    const o = e, { getColor: n } = Ce(), s = c(() => n(o.color)), { sizeComputed: r } = jt(o), a = c(() => {
      const w = /([0-9]*)(px)/.exec(r.value);
      return w ? `${+w[1] / 2}${w[2]}` : r.value;
    }), { tagComputed: l } = Fo(o), i = Ls(o), { disabled: u } = Tn(o), d = Ue(), { focus: f, blur: C } = Ns(d), { isHovered: b } = Fs(d, u), { isPressed: g } = Ms(d), v = c(() => o.iconColor ? n(o.iconColor) : x.value), p = c(() => ({
      color: v.value,
      size: o.size
    })), O = c(() => ({ "va-button__content--loading": o.loading })), _ = zs(), P = c(() => !!(o.iconRight && !o.icon || !o.iconRight && o.icon)), X = c(() => !_.value && P.value), Q = $t("textOpacity"), ne = $t("backgroundOpacity"), K = Dt("va-button", () => ({
      ...zo(o, ["disabled", "block", "loading", "round", "plain"]),
      small: o.size === "small",
      normal: !o.size || o.size === "medium",
      large: o.size === "large",
      opacity: Q.value < 1,
      bordered: !!o.borderColor,
      iconOnly: X.value,
      leftIcon: !X.value && !!o.icon && !o.iconRight,
      rightIcon: !X.value && !o.icon && !!o.iconRight
    })), ee = c(() => o.plain || ne.value < 0.5), { textColorComputed: x } = No(s, ee), {
      backgroundColor: R,
      backgroundColorOpacity: me,
      backgroundMaskOpacity: Fe,
      backgroundMaskColor: Pe
    } = _s(s, g, b), Ee = Es(x, s, g, b), y = c(() => ({
      borderColor: o.borderColor ? n(o.borderColor) : "transparent",
      ...Ee.value
    }));
    return t({
      focus: f,
      blur: C
    }), (w, T) => (E(), Y(st(S(l)), be({
      ref_key: "button",
      ref: d,
      class: ["va-button", S(K)],
      style: [y.value, `--va-background-color: ${String(S(R))};--va-background-color-opacity: ${String(S(me))};--va-background-mask-color: ${String(S(Pe))};--va-background-mask-opacity: ${String(S(Fe))}`]
    }, S(i)), {
      default: B(() => [
        L("span", {
          class: we(["va-button__content", O.value])
        }, [
          de(w.$slots, "prepend", xe(De({ icon: e.icon, iconAttributes: p.value })), () => [
            e.icon ? (E(), Y(S(Et), be({
              key: 0,
              class: "va-button__left-icon",
              name: e.icon
            }, p.value), null, 16, ["name"])) : ue("", !0)
          ]),
          de(w.$slots, "default"),
          de(w.$slots, "append", xe(De({ icon: e.iconRight, iconAttributes: p.value })), () => [
            e.iconRight ? (E(), Y(S(Et), be({
              key: 0,
              class: "va-button__right-icon",
              name: e.iconRight
            }, p.value), null, 16, ["name"])) : ue("", !0)
          ])
        ], 2),
        w.loading ? de(w.$slots, "loading", xe(be({ key: 0 }, {
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
        ]) : ue("", !0)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
}), Ct = He(Ds), it = Symbol("NOT_PROVIDED"), Gs = (e, t) => {
  const o = le();
  return c(() => {
    if (!o?.vnode.props)
      return it;
    const n = t[e];
    return e in o.vnode.props ? n : it;
  });
}, Us = {
  stateful: { type: Boolean, default: !1 },
  modelValue: { type: void 0 }
}, Hs = (e, t, o = "modelValue", n = {}) => {
  const { eventName: s, defaultValue: r } = n, a = s || `update:${o.toString()}`, l = Gs(o, e), i = "defaultValue" in n, u = h(
    l.value === it ? i ? r : e[o] : l.value
  );
  let d;
  const f = () => {
    d = ae(() => e[o], (b) => {
      u.value = b;
    });
  };
  ae(() => e.stateful, (b) => {
    b ? f() : d?.();
  }, { immediate: !0 });
  const C = c({
    get: () => e.stateful ? u.value : e[o],
    set: (b) => {
      e.stateful && (u.value = b), t(a, b);
    }
  });
  return Object.defineProperty(C, "stateful", {
    get: () => e.stateful
  }), Object.defineProperty(C, "userProvided", {
    get: () => l.value !== it
  }), { valueComputed: C };
}, Ho = ["top", "bottom"], Wo = ["left", "right"], Ws = [...Ho, ...Wo], qs = ["start", "end", "center"], Xs = Ws.reduce((e, t) => (e.push(t), qs.forEach((o) => e.push(`${t}-${o}`)), e), ["auto"]), Ks = Ho.reduce((e, t) => (Wo.forEach((o) => {
  e.push(`${t}-${o}`), e.push(`${o}-${t}`);
}), e), []), Js = [...Xs, ...Ks], Zs = {
  "top-left": "top-start",
  "left-top": "top-start",
  "top-right": "top-end",
  "right-top": "top-end",
  "bottom-left": "bottom-start",
  "left-bottom": "bottom-start",
  "bottom-right": "bottom-end",
  "right-bottom": "bottom-end"
}, Ys = (e) => {
  const t = c(() => (Zs[e.placement] || e.placement).split("-")), o = c(() => {
    const s = t.value[0];
    return s === "auto" ? "bottom" : s;
  }), n = c(() => t.value[1] || "center");
  return { position: o, align: n };
}, Qs = () => {
  const e = (n) => typeof n == "string" ? !isNaN(+n) || n.endsWith("px") || n.endsWith("rem") : !1;
  return { isParsableMeasure: e, isParsablePositiveMeasure: (n) => typeof n == "number" ? n >= 0 : e(n) && parseInt(n) >= 0, parseSizeValue: (n, s = 16) => {
    const r = S(n);
    if (typeof r == "string") {
      const a = parseInt(r);
      return isNaN(a) ? 0 : r.endsWith("rem") ? a * S(s) : a;
    }
    return r;
  } };
}, { isParsableMeasure: uo, parseSizeValue: co } = Qs(), ea = {
  overlap: { type: Boolean, default: !1 },
  placement: {
    type: String,
    default: "top-end",
    validator: (e) => Js.includes(e)
  },
  offset: {
    type: [Number, String, Array],
    default: 0,
    validator: (e) => Array.isArray(e) ? e.every(uo) : typeof e == "string" ? uo(e) : !isNaN(e)
  }
}, ta = (e, t) => {
  if (!t.value)
    return {};
  const { position: o, align: n } = Ys(e), s = c(() => ({
    start: e.overlap ? "-50%" : "-100%",
    center: "-50%",
    end: e.overlap ? "-50%" : "0%"
  })[n.value]), r = c(() => {
    if (!e.offset)
      return {};
    const i = ["left", "right"].includes(o.value) ? "top" : "left", u = i === "top" ? "left" : "top";
    if (Array.isArray(e.offset)) {
      const [f, C] = e.offset.map(co);
      return {
        [`margin-${i}`]: `${f}px`,
        [`margin-${u}`]: `${C}px`
      };
    }
    const d = co(e.offset);
    return {
      [`margin-${u}`]: `${d}px`
    };
  }), a = c(() => {
    const i = ["left", "right"].includes(o.value) ? "top" : "left", u = i === "top" ? "left" : "top";
    let d = "0%";
    return u === "top" && o.value === "bottom" && (d = "100%"), u === "left" && o.value === "right" && (d = "100%"), {
      start: { [i]: "0%", [u]: d },
      center: { [i]: "50%", [u]: d },
      end: { [i]: "100%", [u]: d }
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
    }, { x: u, y: d } = i[o.value];
    return { transform: `translate(${u}, ${d})` };
  });
  return c(() => ({
    ...a.value,
    ...l.value,
    ...r.value
  }));
}, oa = {
  props: "prop",
  attrs: "prop",
  slots: "slot"
}, na = (e, t = ["props", "attrs"]) => {
  if (!Tt)
    return;
  const o = le();
  if (!o)
    throw new Error("`useDeprecated` hook must be used only inside of setup function!");
  const n = o.type.name, s = S(e);
  t.every((r) => {
    var a;
    const l = oa[r], i = (u) => console.warn(`The '${u}' ${l} (${n} component) is deprecated! Please, check the documentation.`);
    if (r === "props") {
      const u = ((a = o.propsOptions) == null ? void 0 : a[0]) || {}, d = o.props || {};
      return s.forEach((f) => {
        u[f] && d[f] !== u[f].default && i(f);
      }), !0;
    }
    return Object.keys({ ...o[r] }).forEach((u) => {
      s.includes(u) && i(u);
    }), !0;
  });
}, ra = ["aria-labelledby"], sa = { class: "va-badge__text" }, aa = /* @__PURE__ */ A({
  name: "VaBadge",
  __name: "VaBadge",
  props: {
    ...ct,
    ...ea,
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
    na(["transparent"]);
    const o = In(), n = c(() => !(t.text || t.visibleEmpty || t.dot || o.text)), s = c(() => !!(o.default || t.dot)), r = Dt("va-badge", () => ({
      ...zo(t, ["visibleEmpty", "dot", "multiLine"]),
      empty: n.value,
      floating: s.value
    })), { getColor: a } = Ce(), l = c(() => a(t.color)), { textColorComputed: i } = No(l), u = ta(t, s), d = c(() => ({
      color: i.value,
      borderColor: l.value,
      backgroundColor: l.value,
      opacity: t.transparent ? 0.5 : 1,
      ...S(u)
    })), f = c(() => t.text ? String(t.text) : void 0);
    return (C, b) => (E(), U("div", {
      class: we(["va-badge", S(r)]),
      role: "status",
      "aria-labelledby": f.value
    }, [
      L("span", {
        class: "va-badge__text-wrapper",
        style: Vt(d.value)
      }, [
        L("span", sa, [
          de(C.$slots, "text", {}, () => [
            te(ce(e.text), 1)
          ])
        ])
      ], 4),
      de(C.$slots, "default")
    ], 10, ra));
  }
}), la = He(aa), Gt = (e, ...t) => To(e) ? e(...t) : e, ia = { class: "va-stepper__default-controls" }, ua = /* @__PURE__ */ A({
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
    const t = e, { t: o } = dt(), n = c(() => {
      const r = t.steps[Number(t.modelValue)];
      return Gt(r.isLoading) || !1;
    }), s = c(() => {
      const r = t.steps.length - 1;
      return Number(t.modelValue) >= r;
    });
    return (r, a) => (E(), U("div", ia, [
      k(S(Ct), {
        preset: "primary",
        disabled: Number(r.$props.modelValue) <= 0,
        loading: n.value,
        onClick: a[0] || (a[0] = (l) => r.$props.stepControls.prevStep())
      }, {
        default: B(() => [
          te(ce(S(o)("back")), 1)
        ]),
        _: 1
      }, 8, ["disabled", "loading"]),
      s.value ? r.$props.finishButtonHidden ? ue("", !0) : (E(), Y(S(Ct), {
        key: 1,
        onClick: a[2] || (a[2] = (l) => r.$props.stepControls.finish()),
        loading: n.value
      }, {
        default: B(() => [
          te(ce(S(o)("finish")), 1)
        ]),
        _: 1
      }, 8, ["loading"])) : (E(), Y(S(Ct), {
        key: 0,
        onClick: a[1] || (a[1] = (l) => r.$props.stepControls.nextStep()),
        disabled: r.$props.nextDisabled,
        loading: n.value
      }, {
        default: B(() => [
          te(ce(S(o)("next")), 1)
        ]),
        _: 1
      }, 8, ["disabled", "loading"]))
    ]));
  }
}), ke = (e) => Gt(e.hasError, e) || !1, ca = { class: "va-stepper__step-button__icon" }, da = /* @__PURE__ */ A({
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
    const o = e, n = Ue(), s = c(() => ke(o.step)), r = $t("stepIndex"), a = c(() => s.value && o.modelValue === r.value), l = c(() => Gt(o.step.isLoading) || !1), { getColor: i } = Ce(), u = c(() => i(s.value ? "danger" : o.color)), d = (g) => o.nextDisabled && g > o.modelValue, { t: f } = dt(), C = Dt("va-stepper__step-button", () => ({
      active: o.modelValue >= r.value,
      disabled: o.step.disabled || d(r.value),
      "navigation-disabled": o.navigationDisabled,
      error: a.value
    }));
    ae(() => o.focus, () => {
      o.focus.trigger && D(() => {
        var g;
        return (g = n.value) == null ? void 0 : g.focus();
      });
    }, { deep: !0 });
    const b = c(() => ({
      tabindex: o.focus.stepIndex === r.value && !o.navigationDisabled ? 0 : void 0,
      "aria-disabled": o.step.disabled || d(r.value) ? !0 : void 0,
      "aria-current": o.modelValue === o.stepIndex ? f("step") : void 0
    }));
    return (g, v) => (E(), U("li", be({
      ref_key: "stepElement",
      ref: n,
      class: ["va-stepper__step-button", S(C)],
      onClick: v[0] || (v[0] = (p) => !g.$props.navigationDisabled && g.$props.stepControls.setStep(S(r))),
      onKeyup: [
        v[1] || (v[1] = Be((p) => !g.$props.navigationDisabled && g.$props.stepControls.setStep(S(r)), ["enter"])),
        v[2] || (v[2] = Be((p) => !g.$props.navigationDisabled && g.$props.stepControls.setStep(S(r)), ["space"]))
      ]
    }, b.value, {
      style: `--va-stepper-color: ${String(u.value)}`
    }), [
      L("div", ca, [
        l.value ? (E(), Y(S(Mo), {
          key: 0,
          color: "currentColor",
          indeterminate: "",
          size: "small"
        })) : e.step.icon ? (E(), Y(S(Et), {
          key: 1,
          name: e.step.icon,
          size: "1.3rem"
        }, null, 8, ["name"])) : (E(), U(pe, { key: 2 }, [
          te(ce(S(r) + 1), 1)
        ], 64))
      ]),
      te(" " + ce(e.step.label), 1)
    ], 16));
  }
}), pa = { class: "va-stepper__step-content" }, fa = { class: "va-stepper__controls" }, va = /* @__PURE__ */ A({
  name: "VaStepper",
  __name: "VaStepper",
  props: {
    ...Us,
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
    const n = e, s = o, r = Ue(), { valueComputed: a } = Hs(n, s, "modelValue"), l = c(() => n.finishStep ? [...n.steps, n.finishStep] : n.steps), i = (y) => n.finishStep ? y === l.value.length - 1 : !1, u = h({ trigger: !1, stepIndex: n.navigationDisabled ? -1 : n.modelValue }), { getColor: d } = Ce(), f = (y) => n.nextDisabledOnError && ke(l.value[y]) ? !0 : n.nextDisabled, C = (y, w) => {
      for (; y >= 0 && y < l.value.length; ) {
        y += w;
        const T = l.value[y];
        if (!T)
          return;
        if (!T.disabled)
          return T;
      }
    }, b = (y, w) => {
      for (; y >= 0 && y < l.value.length; ) {
        y += w;
        const T = l.value[y];
        if (!T)
          return;
        if (ke(T) === !0)
          return y;
      }
    }, g = async (y) => {
      var w;
      const T = l.value[y], G = l.value[a.value], Ye = C(y, -1);
      if (T.disabled)
        return !1;
      if (n.linear && y < a.value)
        return !0;
      const Qe = b(a.value, 1);
      if (n.linear && Qe !== void 0 && Qe < y)
        return !1;
      let et;
      try {
        et = await ((w = G.beforeLeave) == null ? void 0 : w.call(G, G, T));
      } catch (mt) {
        throw new Error(`Error in beforeLeave function: ${mt}`);
      }
      return !(et === !1 || (G.completed === void 0 && (G.completed = !0), n.linear && Ye && !Ye.completed) || n.linear && ke(G));
    }, v = async (y) => {
      await g(y) && (a.value = y);
    }, p = (y) => {
      n.navigationDisabled || (y === "next" ? O(1) : _(1));
    }, O = (y = 1) => {
      const w = u.value.stepIndex + y;
      if (!f(w)) {
        if (w < l.value.length) {
          if (l.value[w].disabled) {
            O(y + 1);
            return;
          }
          u.value.stepIndex = w, u.value.trigger = !0;
        } else
          for (let T = 0; T < l.value.length; T++)
            if (!l.value[T].disabled) {
              u.value.stepIndex = T, u.value.trigger = !0;
              break;
            }
      }
    }, _ = (y = 1) => {
      const w = u.value.stepIndex - y;
      if (w >= 0) {
        if (l.value[w].disabled) {
          _(y + 1);
          return;
        }
        u.value.stepIndex = w, u.value.trigger = !0;
      } else
        for (let T = l.value.length - 1; T >= 0; T--)
          if (!l.value[T].disabled && !f(T)) {
            u.value.stepIndex = T, u.value.trigger = !0;
            break;
          }
    }, P = () => {
      requestAnimationFrame(() => {
        var y;
        (y = r.value) != null && y.contains(document.activeElement) || (u.value.stepIndex = n.modelValue, u.value.trigger = !1);
      });
    };
    ae(() => n.modelValue, () => {
      u.value.stepIndex = n.modelValue, u.value.trigger = !1;
    });
    const X = (y = 0) => {
      const w = a.value + 1 + y;
      l.value[w] && (l.value[w].disabled && X(y + 1), v(w));
    }, Q = (y = 0) => {
      const w = a.value - 1 - y;
      l.value[w] && (l.value[w].disabled && Q(y + 1), v(w));
    }, K = { setStep: v, nextStep: X, prevStep: Q, finish: async () => {
      await g(n.steps.length - 1) && s("finish");
    } }, ee = (y, w) => ({
      ...K,
      focus: u,
      isActive: n.modelValue === w,
      isCompleted: n.modelValue > w,
      isLastStep: l.value.length - 1 === w,
      isNextStepDisabled: f(w),
      isPrevStepDisabled: w === 0,
      index: w,
      step: y,
      hasError: ke(y)
    }), { tp: x } = dt(), R = () => {
      u.value.stepIndex = n.modelValue, u.value.trigger = !0;
    }, me = c(() => ({
      role: "group",
      "aria-label": x(n.ariaLabel),
      "aria-orientation": n.vertical ? "vertical" : "horizontal"
    }));
    function Fe(y) {
      return ke(l.value[y]) ? "danger" : d(n.color);
    }
    return t({
      modelValue: a,
      focusedStep: u,
      getIterableSlotData: ee,
      stepControls: K,
      nextStep: X,
      prevStep: Q,
      setStep: v,
      setFocus: p,
      completeStep: (y) => {
        const w = { ...l.value };
        y === !0 && (w[n.modelValue].hasError = !1), w[n.modelValue].completed = y ?? !0, s("update:steps", w);
      },
      setError: (y) => {
        const w = { ...l.value };
        w[n.modelValue].hasError = y ?? !0, w[n.modelValue].completed = !y, s("update:steps", w);
      }
    }), (y, w) => (E(), U("div", be({
      class: ["va-stepper", { "va-stepper--vertical": y.$props.vertical }]
    }, me.value), [
      L("ol", {
        class: we(["va-stepper__navigation", { "va-stepper__navigation--vertical": y.$props.vertical }]),
        ref_key: "stepperNavigation",
        ref: r,
        onClick: R,
        onKeyup: [
          Be(R, ["enter"]),
          Be(R, ["space"]),
          w[0] || (w[0] = Be((T) => p("prev"), ["left"])),
          w[1] || (w[1] = Be((T) => p("next"), ["right"]))
        ],
        onFocusout: P
      }, [
        (E(!0), U(pe, null, at(l.value, (T, G) => (E(), U(pe, {
          key: G + T.label
        }, [
          i(G) ? ue("", !0) : (E(), U(pe, { key: 0 }, [
            G > 0 ? de(y.$slots, "divider", xe(be({ key: 0 }, ee(T, G))), () => [
              L("span", {
                class: we(["va-stepper__divider", { "va-stepper__divider--vertical": y.$props.vertical }]),
                "aria-hidden": "true"
              }, null, 2)
            ]) : ue("", !0),
            de(y.$slots, `step-button-${G}`, xe(De(ee(T, G))), () => [
              k(da, {
                stepIndex: G,
                color: Fe(G),
                modelValue: S(a),
                nextDisabled: e.nextDisabled,
                step: T,
                stepControls: K,
                navigationDisabled: e.navigationDisabled,
                focus: u.value
              }, null, 8, ["stepIndex", "color", "modelValue", "nextDisabled", "step", "navigationDisabled", "focus"])
            ])
          ], 64))
        ], 64))), 128))
      ], 34),
      L("div", {
        class: we(["va-stepper__step-content-wrapper", { "va-stepper__step-content-wrapper--vertical": y.$props.vertical }])
      }, [
        L("div", pa, [
          de(y.$slots, `step-content-${i(S(a)) ? "finish" : S(a)}`, xe(De(ee(l.value[S(a)], S(a)))))
        ]),
        L("div", fa, [
          de(y.$slots, "controls", xe(De(ee(l.value[S(a)], S(a)))), () => [
            e.controlsHidden ? ue("", !0) : (E(), Y(ua, {
              key: 0,
              modelValue: S(a),
              nextDisabled: f(S(a)),
              steps: l.value,
              stepControls: K,
              finishButtonHidden: e.finishButtonHidden
            }, null, 8, ["modelValue", "nextDisabled", "steps", "finishButtonHidden"]))
          ])
        ])
      ], 2)
    ], 16));
  }
}), ma = He(va), ga = /* @__PURE__ */ A({
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
      const a = J("VaButton");
      return E(), U(pe, null, [
        L("div", {
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
}), pt = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, ya = /* @__PURE__ */ pt(ga, [["__scopeId", "data-v-69727056"]]);
function qo() {
  const e = {};
  return e[N.WMS] = "#2c1f90", e[N.OGCSTA] = "#1f908c", e[N.XMLA] = "#45901f", e[N.CSV] = "#90301f", e[N.JSON] = "#7f1f90", {
    getColorForFormat: (o) => Object.keys(e).includes(o) ? e[o] : "#ccc"
  };
}
const ba = { class: "aflex small light" }, ha = { class: "right" }, Ca = { class: "left" }, Sa = /* @__PURE__ */ A({
  __name: "SearchResultCard",
  props: {
    result: {}
  },
  setup(e) {
    const t = e, o = qo().getColorForFormat("<" + t.result.format.value + ">"), n = (s) => {
      const r = Object.entries(N).filter((a, l) => a[1] == "<" + s + ">");
      return r && r[0] ? r[0][0] : s;
    };
    return (s, r) => {
      const a = J("VaChip"), l = J("VaCardTitle"), i = J("VaCardContent"), u = J("VaCard");
      return E(), Y(u, { class: "card" }, {
        default: B(() => [
          k(l, null, {
            default: B(() => [
              k(a, {
                color: S(o),
                class: "pointer",
                size: "small"
              }, {
                default: B(() => [
                  te(ce(n(t.result.format.value)), 1)
                ]),
                _: 1
              }, 8, ["color"]),
              te(" " + ce(t.result.title.value), 1)
            ]),
            _: 1
          }),
          k(i, null, {
            default: B(() => [
              k(ya, { lines: 3 }, {
                default: B(() => [
                  te(ce(t.result.description.value), 1)
                ]),
                _: 1
              }),
              r[0] || (r[0] = L("br", null, null, -1)),
              L("div", ba, [
                L("div", ha, ce(t.result.creator_name ? t.result.creator_name.value : ""), 1),
                L("div", Ca, ce(t.result.date ? t.result.date.value : ""), 1)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), wa = /* @__PURE__ */ pt(Sa, [["__scopeId", "data-v-a0a9daed"]]), po = (e, t) => {
  for (const o of Object.keys(t))
    e.on(o, t[o]);
}, Xo = (e) => {
  for (const t of Object.keys(e)) {
    const o = e[t];
    o && Se(o.cancel) && o.cancel();
  }
}, Oa = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), Se = (e) => typeof e == "function", W = (e, t, o) => {
  for (const n in o) {
    const s = "set" + Oa(n);
    e[s] ? ae(
      () => o[n],
      (r, a) => {
        e[s](r, a);
      }
    ) : t[s] && ae(
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
}, _a = async (e) => {
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
}, ot = (e) => {
  const t = h(
    (...n) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), o = (...n) => t.value(...n);
  return o.wrapped = t, fe(e, o), o;
}, nt = (e, t) => e.wrapped.value = t, z = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, j = (e) => {
  const t = I(e);
  if (t === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return t;
}, q = Symbol(
  "useGlobalLeaflet"
), re = Symbol("addLayer"), ft = Symbol("removeLayer"), qe = Symbol(
  "registerControl"
), Ko = Symbol(
  "registerLayerControl"
), Jo = Symbol(
  "canSetParentHtml"
), Zo = Symbol("setParentHtml"), Yo = Symbol("setIcon"), Qo = Symbol("bindPopup"), en = Symbol("bindTooltip"), tn = Symbol("unbindPopup"), on = Symbol("unbindTooltip"), Xe = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, Ke = (e) => ({ options: e.options, methods: {} }), je = {
  ...Xe,
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
}, Je = (e, t, o) => {
  const n = j(re), s = j(ft), { options: r, methods: a } = Ke(e), l = H(
    e,
    je,
    r
  ), i = () => n({ leafletObject: t.value }), u = () => s({ leafletObject: t.value }), d = {
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
  return fe(Qo, d.bindPopup), fe(en, d.bindTooltip), fe(tn, d.unbindPopup), fe(on, d.unbindTooltip), At(() => {
    d.unbindPopup(), d.unbindTooltip(), u();
  }), { options: l, methods: d };
}, ve = (e, t) => {
  if (e && t.default)
    return Oe("div", { style: { display: "none" } }, t.default());
}, nn = {
  ...je,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, xa = (e, t, o) => {
  const { options: n, methods: s } = Je(
    e,
    t,
    o
  );
  return { options: H(
    e,
    nn,
    n
  ), methods: s };
}, Ut = {
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
  const { options: n, methods: s } = xa(e, t, o), r = H(
    e,
    Ut,
    n
  ), a = j(ft), l = {
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
  return Re(() => {
    a({ leafletObject: t.value });
  }), { options: r, methods: l };
}, Ht = {
  ...Ut,
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
    Ht,
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
  ...Ht,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, La = (e, t, o) => {
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
    const o = h(), n = h(!1), s = I(q), r = j(re), { options: a, methods: l } = La(e, o, t);
    return F(async () => {
      const { circle: i } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(i(e.latLng, a));
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), W(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, D(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ve(this.ready, this.$slots);
  }
});
A({
  name: "LCircleMarker",
  props: Ht,
  setup(e, t) {
    const o = h(), n = h(!1), s = I(q), r = j(re), { options: a, methods: l } = sn(
      e,
      o,
      t
    );
    return F(async () => {
      const { circleMarker: i } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(
        i(e.latLng, a)
      );
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), W(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, D(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ve(this.ready, this.$slots);
  }
});
const Ne = {
  ...Xe,
  position: {
    type: String
  }
}, Ze = (e, t) => {
  const { options: o, methods: n } = Ke(e), s = H(
    e,
    Ne,
    o
  ), r = {
    ...n,
    setPosition(a) {
      t.value && t.value.setPosition(a);
    }
  };
  return At(() => {
    t.value && t.value.remove();
  }), { options: s, methods: r };
}, Pa = (e) => e.default ? Oe("div", { ref: "root" }, e.default()) : null;
A({
  name: "LControl",
  props: {
    ...Ne,
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
    const o = h(), n = h(), s = I(q), r = j(qe), { options: a, methods: l } = Ze(e, o);
    return F(async () => {
      const { Control: i, DomEvent: u } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js"), d = i.extend({
        onAdd() {
          return n.value;
        }
      });
      o.value = Z(new d(a)), W(l, o.value, e), r({ leafletObject: o.value }), e.disableClickPropagation && n.value && u.disableClickPropagation(n.value), e.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), D(() => t.emit("ready", o.value));
    }), { root: n, leafletObject: o };
  },
  render() {
    return Pa(this.$slots);
  }
});
const ln = {
  ...Ne,
  prefix: {
    type: String
  }
}, Ea = (e, t) => {
  const { options: o, methods: n } = Ze(
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
    const o = h(), n = I(q), s = j(qe), { options: r, methods: a } = Ea(e, o);
    return F(async () => {
      const { control: l } = n ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(
        l.attribution(r)
      ), W(a, o.value, e), s({ leafletObject: o.value }), D(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
});
const un = {
  ...Ne,
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
}, $a = (e, t) => {
  const { options: o } = Ze(e, t);
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
    const o = h(), n = I(q), s = j(Ko), { options: r, methods: a } = $a(e, o);
    return F(async () => {
      const { control: l } = n ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(
        l.layers(void 0, void 0, r)
      ), W(a, o.value, e), s({
        ...e,
        ...a,
        leafletObject: o.value
      }), D(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
});
const cn = {
  ...Ne,
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
}, ka = (e, t) => {
  const { options: o, methods: n } = Ze(
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
    const o = h(), n = I(q), s = j(qe), { options: r, methods: a } = ka(e, o);
    return F(async () => {
      const { control: l } = n ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(l.scale(r)), W(a, o.value, e), s({ leafletObject: o.value }), D(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
});
const dn = {
  ...Ne,
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
}, Ba = (e, t) => {
  const { options: o, methods: n } = Ze(
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
    const o = h(), n = I(q), s = j(qe), { options: r, methods: a } = Ba(e, o);
    return F(async () => {
      const { control: l } = n ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(l.zoom(r)), W(a, o.value, e), s({ leafletObject: o.value }), D(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
});
const vt = {
  ...je
}, Wt = (e, t, o) => {
  const { options: n, methods: s } = Je(
    e,
    t,
    o
  ), r = H(
    e,
    vt,
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
  return fe(re, a.addLayer), fe(ft, a.removeLayer), { options: r, methods: a };
}, pn = {
  ...vt
}, Va = (e, t, o) => {
  const { options: n, methods: s } = Wt(
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
    const o = h(), n = h(!1), s = I(q), r = j(re), { methods: a, options: l } = Va(
      e,
      o,
      t
    );
    return F(async () => {
      const { featureGroup: i } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(
        i(void 0, l)
      );
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), W(a, o.value, e), r({
        ...e,
        ...a,
        leafletObject: o.value
      }), n.value = !0, D(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ve(this.ready, this.$slots);
  }
});
const fn = {
  ...vt,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, Aa = (e, t, o) => {
  const { options: n, methods: s } = Wt(
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
    const o = h(), n = h(!1), s = I(q), r = j(re), { methods: a, options: l } = Aa(e, o, t);
    return F(async () => {
      const { geoJSON: i } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(i(e.geojson, l));
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), W(a, o.value, e), r({
        ...e,
        ...a,
        leafletObject: o.value
      }), n.value = !0, D(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ve(this.ready, this.$slots);
  }
});
const qt = {
  ...je,
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
  const { options: n, methods: s } = Je(
    e,
    t,
    o
  ), r = H(
    e,
    qt,
    n
  ), a = {
    ...s,
    setTileComponent() {
      var l;
      (l = t.value) == null || l.redraw();
    }
  };
  return At(() => {
    t.value.off();
  }), { options: r, methods: a };
}, Ra = (e, t, o, n) => e.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), o.setOptions(this, s);
  },
  createTile(s) {
    const r = this._tileCoordsToKey(s);
    this.tileComponents[r] = t.create("div");
    const a = Oe({ setup: n, props: ["coords"] }, { coords: s });
    return rt(a, this.tileComponents[r]), this.tileComponents[r];
  },
  _unloadTile(s) {
    const r = this._tileCoordsToKey(s.coords);
    this.tileComponents[r] && (this.tileComponents[r].innerHTML = "", this.tileComponents[r] = void 0);
  }
});
A({
  props: {
    ...qt,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(e, t) {
    const o = h(), n = h(null), s = h(!1), r = I(q), a = j(re), { options: l, methods: i } = vn(e, o, t);
    return F(async () => {
      const { GridLayer: u, DomUtil: d, Util: f } = r ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js"), C = Ra(
        u,
        d,
        f,
        e.childRender
      );
      o.value = Z(new C(l));
      const { listeners: b } = oe(t.attrs);
      o.value.on(b), W(i, o.value, e), a({
        ...e,
        ...i,
        leafletObject: o.value
      }), s.value = !0, D(() => t.emit("ready", o.value));
    }), { root: n, ready: s, leafletObject: o };
  },
  render() {
    return this.ready ? Oe("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const fo = {
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
    ...fo,
    ...Xe
  },
  setup(e, t) {
    const o = h(), n = I(q), s = j(Jo), r = j(Zo), a = j(Yo);
    let l, i, u, d, f;
    const C = (p, O, _) => {
      const P = p && p.innerHTML;
      if (!O) {
        _ && f && s() && r(P);
        return;
      }
      const { listeners: X } = oe(t.attrs);
      f && i(f, X);
      const { options: Q } = Ke(e), ne = H(
        e,
        fo,
        Q
      );
      P && (ne.html = P), f = ne.html ? u(ne) : d(ne), l(f, X), a(f);
    }, b = () => {
      D(() => C(o.value, !0, !1));
    }, g = () => {
      D(() => C(o.value, !1, !0));
    }, v = {
      setIconUrl: b,
      setIconRetinaUrl: b,
      setIconSize: b,
      setIconAnchor: b,
      setPopupAnchor: b,
      setTooltipAnchor: b,
      setShadowUrl: b,
      setShadowRetinaUrl: b,
      setShadowAnchor: b,
      setBgPos: b,
      setClassName: b,
      setHtml: b
    };
    return F(async () => {
      const {
        DomEvent: p,
        divIcon: O,
        icon: _
      } = n ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      l = p.on, i = p.off, u = O, d = _, W(v, {}, e), new MutationObserver(g).observe(o.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), b();
    }), { root: o };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return Oe("div", { ref: "root" }, e);
  }
});
const mn = {
  ...je,
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
}, Ta = (e, t, o) => {
  const { options: n, methods: s } = Je(
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
    const o = h(), n = h(!1), s = I(q), r = j(re), { options: a, methods: l } = Ta(
      e,
      o,
      t
    );
    return F(async () => {
      const { imageOverlay: i } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(
        i(e.url, e.bounds, a)
      );
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), W(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, D(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ve(this.ready, this.$slots);
  }
});
A({
  props: vt,
  setup(e, t) {
    const o = h(), n = h(!1), s = I(q), r = j(re), { methods: a } = Wt(e, o, t);
    return F(async () => {
      const { layerGroup: l } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(
        l(void 0, e.options)
      );
      const { listeners: i } = oe(t.attrs);
      o.value.on(i), W(a, o.value, e), r({
        ...e,
        ...a,
        leafletObject: o.value
      }), n.value = !0, D(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ve(this.ready, this.$slots);
  }
});
function gn(e, t, o) {
  var n, s, r;
  t === void 0 && (t = 50), o === void 0 && (o = {});
  var a = (n = o.isImmediate) != null && n, l = (s = o.callback) != null && s, i = o.maxWait, u = Date.now(), d = [];
  function f() {
    if (i !== void 0) {
      var b = Date.now() - u;
      if (b + t >= i)
        return i - b;
    }
    return t;
  }
  var C = function() {
    var b = [].slice.call(arguments), g = this;
    return new Promise(function(v, p) {
      var O = a && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !a) {
          var P = e.apply(g, b);
          l && l(P), d.forEach(function(X) {
            return (0, X.resolve)(P);
          }), d = [];
        }
      }, f()), O) {
        var _ = e.apply(g, b);
        return l && l(_), v(_);
      }
      d.push({ resolve: v, reject: p });
    });
  };
  return C.cancel = function(b) {
    r !== void 0 && clearTimeout(r), d.forEach(function(g) {
      return (0, g.reject)(b);
    }), d = [];
  }, C;
}
const vo = {
  ...Xe,
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
}, Ia = A({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: vo,
  setup(e, t) {
    const o = h(), n = Le({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = Ke(e), r = H(
      e,
      vo,
      s
    ), { listeners: a, attrs: l } = oe(t.attrs), i = ot(re), u = ot(ft), d = ot(qe), f = ot(
      Ko
    );
    fe(q, e.useGlobalLeaflet);
    const C = c(() => {
      const O = {};
      return e.noBlockingAnimations && (O.animate = !1), O;
    }), b = c(() => {
      const O = C.value;
      return e.padding && (O.padding = e.padding), e.paddingTopLeft && (O.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (O.paddingBottomRight = e.paddingBottomRight), O;
    }), g = {
      moveend: gn((O) => {
        n.leafletRef && (t.emit("update:zoom", n.leafletRef.getZoom()), t.emit("update:center", n.leafletRef.getCenter()), t.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(O) {
        const _ = n.layersInControl.find((P) => P.name === O.name);
        _ && _.updateVisibleProp(!0);
      },
      overlayremove(O) {
        const _ = n.layersInControl.find((P) => P.name === O.name);
        _ && _.updateVisibleProp(!1);
      }
    };
    F(async () => {
      e.useGlobalLeaflet && (z.L = z.L || await import("./leaflet-src-BDi_6Owi.js").then((x) => x.l));
      const { map: O, CRS: _, Icon: P, latLngBounds: X, latLng: Q, stamp: ne } = e.useGlobalLeaflet ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (x) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${x.message}`
        );
      }
      await _a(P);
      const K = typeof r.crs == "string" ? _[r.crs] : r.crs;
      r.crs = K || _.EPSG3857;
      const ee = {
        addLayer(x) {
          x.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(x) : n.layersInControl.find(
            (R) => ne(R.leafletObject) === ne(x.leafletObject)
          ) || (n.layerControl.addLayer(x), n.layersInControl.push(x))), x.visible !== !1 && n.leafletRef.addLayer(x.leafletObject);
        },
        removeLayer(x) {
          x.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (R) => R.name !== x.name
          ) : (n.layerControl.removeLayer(x.leafletObject), n.layersInControl = n.layersInControl.filter(
            (R) => ne(R.leafletObject) !== ne(x.leafletObject)
          ))), n.leafletRef.removeLayer(x.leafletObject);
        },
        registerLayerControl(x) {
          n.layerControl = x, n.layersToAdd.forEach((R) => {
            n.layerControl.addLayer(R);
          }), n.layersToAdd = [], d(x);
        },
        registerControl(x) {
          n.leafletRef.addControl(x.leafletObject);
        },
        setZoom(x) {
          const R = n.leafletRef.getZoom();
          x !== R && n.leafletRef.setZoom(x, C.value);
        },
        setCrs(x) {
          const R = n.leafletRef.getBounds();
          n.leafletRef.options.crs = x, n.leafletRef.fitBounds(R, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(x) {
          n.leafletRef.fitBounds(x, b.value);
        },
        setBounds(x) {
          if (!x)
            return;
          const R = X(x);
          R.isValid() && !(n.lastSetBounds || n.leafletRef.getBounds()).equals(R, 0) && (n.lastSetBounds = R, n.leafletRef.fitBounds(R));
        },
        setCenter(x) {
          if (x == null)
            return;
          const R = Q(x), me = n.lastSetCenter || n.leafletRef.getCenter();
          (me.lat !== R.lat || me.lng !== R.lng) && (n.lastSetCenter = R, n.leafletRef.panTo(R, C.value));
        }
      };
      nt(i, ee.addLayer), nt(u, ee.removeLayer), nt(d, ee.registerControl), nt(f, ee.registerLayerControl), n.leafletRef = Z(O(o.value, r)), W(ee, n.leafletRef, e), po(n.leafletRef, g), po(n.leafletRef, a), n.ready = !0, D(() => t.emit("ready", n.leafletRef));
    }), Re(() => {
      Xo(g), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const v = c(() => n.leafletRef), p = c(() => n.ready);
    return { root: o, ready: p, leafletObject: v, attrs: l };
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
}), ja = ["Symbol(Comment)", "Symbol(Text)"], Na = ["LTooltip", "LPopup"], yn = {
  ...je,
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
}, Fa = (e, t, o) => {
  const { options: n, methods: s } = Je(
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
}, Ma = (e, t) => {
  const o = t.slots.default && t.slots.default();
  return o && o.length && o.some(za);
};
function za(e) {
  return !(ja.includes(e.type.toString()) || Na.includes(e.type.name));
}
A({
  name: "LMarker",
  props: yn,
  setup(e, t) {
    const o = h(), n = h(!1), s = I(q), r = j(re);
    fe(
      Jo,
      () => {
        var u;
        return !!((u = o.value) != null && u.getElement());
      }
    ), fe(Zo, (u) => {
      var d, f;
      const C = Se((d = o.value) == null ? void 0 : d.getElement) && ((f = o.value) == null ? void 0 : f.getElement());
      C && (C.innerHTML = u);
    }), fe(
      Yo,
      (u) => {
        var d;
        return ((d = o.value) == null ? void 0 : d.setIcon) && o.value.setIcon(u);
      }
    );
    const { options: a, methods: l } = Fa(e, o, t), i = {
      moveHandler: gn(l.latLngSync)
    };
    return F(async () => {
      const { marker: u, divIcon: d } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      Ma(a, t) && (a.icon = d({ className: "" })), o.value = Z(u(e.latLng, a));
      const { listeners: f } = oe(t.attrs);
      o.value.on(f), o.value.on("move", i.moveHandler), W(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, D(() => t.emit("ready", o.value));
    }), Re(() => Xo(i)), { ready: n, leafletObject: o };
  },
  render() {
    return ve(this.ready, this.$slots);
  }
});
const Xt = {
  ...Ut,
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
    Xt,
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
}, ut = {
  ...Xt
}, hn = (e, t, o) => {
  const { options: n, methods: s } = bn(
    e,
    t,
    o
  ), r = H(
    e,
    ut,
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
  props: ut,
  setup(e, t) {
    const o = h(), n = h(!1), s = I(q), r = j(re), { options: a, methods: l } = hn(e, o, t);
    return F(async () => {
      const { polygon: i } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(i(e.latLngs, a));
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), W(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, D(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ve(this.ready, this.$slots);
  }
});
A({
  name: "LPolyline",
  props: Xt,
  setup(e, t) {
    const o = h(), n = h(!1), s = I(q), r = j(re), { options: a, methods: l } = bn(e, o, t);
    return F(async () => {
      const { polyline: i } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(
        i(e.latLngs, a)
      );
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), W(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, D(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ve(this.ready, this.$slots);
  }
});
const Cn = {
  ...Xe,
  content: {
    type: String,
    default: null
  }
}, Sn = (e, t) => {
  const { options: o, methods: n } = Ke(e), s = {
    ...n,
    setContent(r) {
      t.value && r !== null && r !== void 0 && t.value.setContent(r);
    }
  };
  return { options: o, methods: s };
}, wn = (e) => e.default ? Oe("div", { ref: "root" }, e.default()) : null, Da = {
  ...Cn,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, Ga = (e, t) => {
  const { options: o, methods: n } = Sn(e, t);
  return { options: o, methods: n };
};
A({
  name: "LPopup",
  props: Da,
  setup(e, t) {
    const o = h(), n = h(null), s = I(q), r = j(Qo), a = j(tn), { options: l, methods: i } = Ga(e, o);
    return F(async () => {
      const { popup: u } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(u(l)), e.latLng !== void 0 && o.value.setLatLng(e.latLng), W(i, o.value, e);
      const { listeners: d } = oe(t.attrs);
      o.value.on(d), o.value.setContent(e.content || n.value || ""), r(o.value), D(() => t.emit("ready", o.value));
    }), Re(() => {
      a();
    }), { root: n, leafletObject: o };
  },
  render() {
    return wn(this.$slots);
  }
});
const On = {
  ...ut,
  latLngs: {
    ...ut.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, Ua = (e, t, o) => {
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
    const o = h(), n = h(!1), s = I(q), r = j(re), { options: a, methods: l } = Ua(e, o, t);
    return F(async () => {
      const { rectangle: i, latLngBounds: u } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js"), d = e.bounds ? u(e.bounds) : u(e.latLngs || []);
      o.value = Z(i(d, a));
      const { listeners: f } = oe(t.attrs);
      o.value.on(f), W(l, o.value, e), r({
        ...e,
        ...l,
        leafletObject: o.value
      }), n.value = !0, D(() => t.emit("ready", o.value));
    }), { ready: n, leafletObject: o };
  },
  render() {
    return ve(this.ready, this.$slots);
  }
});
const Kt = {
  ...qt,
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
    Kt,
    n
  ), a = {
    ...s
  };
  return { options: r, methods: a };
}, Ha = A({
  props: Kt,
  setup(e, t) {
    const o = h(), n = I(q), s = j(re), { options: r, methods: a } = _n(e, o, t);
    return F(async () => {
      const { tileLayer: l } = n ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(l(e.url, r));
      const { listeners: i } = oe(t.attrs);
      o.value.on(i), W(a, o.value, e), s({
        ...e,
        ...a,
        leafletObject: o.value
      }), D(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
}), Wa = {
  ...Cn
}, qa = (e, t) => {
  const { options: o, methods: n } = Sn(e, t), s = j(on);
  return Re(() => {
    s();
  }), { options: o, methods: n };
};
A({
  name: "LTooltip",
  props: Wa,
  setup(e, t) {
    const o = h(), n = h(null), s = I(q), r = j(en), { options: a, methods: l } = qa(e, o);
    return F(async () => {
      const { tooltip: i } = s ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(i(a)), W(l, o.value, e);
      const { listeners: u } = oe(t.attrs);
      o.value.on(u), o.value.setContent(e.content || n.value || ""), r(o.value), D(() => t.emit("ready", o.value));
    }), { root: n, leafletObject: o };
  },
  render() {
    return wn(this.$slots);
  }
});
const xn = {
  ...Kt,
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
}, Xa = (e, t, o) => {
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
    const o = h(), n = I(q), s = j(re), { options: r, methods: a } = Xa(
      e,
      o,
      t
    );
    return F(async () => {
      const { tileLayer: l } = n ? z.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o.value = Z(
        l.wms(e.url, r)
      );
      const { listeners: i } = oe(t.attrs);
      o.value.on(i), W(a, o.value, e), s({
        ...e,
        ...a,
        leafletObject: o.value
      }), D(() => t.emit("ready", o.value));
    }), { leafletObject: o };
  },
  render() {
    return null;
  }
});
const Ka = { class: "line" }, Ja = { class: "right" }, Za = { class: "content" }, Ya = { class: "list_of_formats" }, Qa = { class: "line" }, el = { class: "right" }, tl = { class: "content" }, ol = { class: "map" }, nl = /* @__PURE__ */ A({
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
      { name: "OGC", key: N.WMS, color: s(N.WMS), active: !0 },
      { name: "SensorThings", key: N.OGCSTA, color: s(N.OGCSTA), active: !0 },
      { name: "XMLA", key: N.XMLA, color: s(N.XMLA), active: !0 },
      { name: "CSV", key: N.CSV, color: s(N.CSV), active: !0 },
      { name: "JSON", key: N.JSON, color: s(N.JSON), active: !0 }
    ]), l = h(!1), i = h(null), u = Le({
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
    const C = h(!1);
    ae(l, (g) => {
      const v = r.value?.find((p) => p.formats);
      if (C.value) {
        C.value = !1;
        return;
      }
      if (v?.formats)
        if (g)
          a.value.forEach((p) => p.active = !1), v.formats.forEach((p) => {
            a.value.findLast((O) => O.key == p).active = !0;
          });
        else {
          const p = r.value.indexOf(v);
          p != -1 && r.value.splice(p), a.value.forEach((O) => O.active = !0);
        }
    });
    const b = (g) => {
      let v = r.value?.find((p) => p.formats);
      if (v || (v = { formats: [] }, r.value.push(v)), l.value) {
        g.active = !g.active;
        const p = v.formats.indexOf(g.key);
        p == -1 ? v.formats?.push(g.key) : v.formats?.splice(p), v.formats.length == 0 && (l.value = !1);
      } else
        C.value = !0, a.value.forEach((p) => p.active = !1), g.active = !0, v.formats = [g.key], l.value = !0;
    };
    return (g, v) => {
      const p = J("va-button"), O = J("VaSwitch"), _ = J("va-divider"), P = J("VaChip"), X = J("va-card-content"), Q = J("va-modal");
      return E(), Y(Q, {
        modelValue: o.value,
        class: "filterbox",
        "hide-default-actions": "",
        "no-padding": "",
        onOpen: d
      }, {
        header: B(() => [...v[4] || (v[4] = [
          L("h3", { class: "title" }, "Filter", -1)
        ])]),
        default: B(({ ok: ne }) => [
          k(p, {
            class: "mr-1 mb-1 close",
            preset: "secondary",
            style: { position: "absolute", right: "0", top: "0" },
            onClick: v[0] || (v[0] = () => {
              o.value = !1;
            })
          }, {
            default: B(() => [...v[5] || (v[5] = [
              te(" x ", -1)
            ])]),
            _: 1
          }),
          k(X, null, {
            default: B(() => [
              v[8] || (v[8] = L("div", {
                class: "spacer",
                style: { height: "25px" }
              }, null, -1)),
              L("div", Ka, [
                v[6] || (v[6] = L("div", { class: "va-collapse__header__text left" }, "Format", -1)),
                L("div", Ja, [
                  k(O, {
                    modelValue: l.value,
                    "onUpdate:modelValue": v[1] || (v[1] = (K) => l.value = K),
                    "false-inner-label": "all",
                    "true-inner-label": "Selection"
                  }, null, 8, ["modelValue"])
                ])
              ]),
              k(_),
              L("div", Za, [
                L("div", Ya, [
                  (E(!0), U(pe, null, at(a.value, (K) => (E(), Y(P, {
                    key: K.key,
                    color: K.active ? K.color : "#ccc",
                    disabled: !K.active,
                    class: "pointer",
                    size: "small",
                    onClick: (ee) => b(K)
                  }, {
                    default: B(() => [
                      te(ce(K.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["color", "disabled", "onClick"]))), 128))
                ])
              ]),
              L("div", Qa, [
                v[7] || (v[7] = L("div", { class: "va-collapse__header__text left" }, "Region", -1)),
                L("div", el, [
                  k(O, {
                    modelValue: u.map_filter_on,
                    "onUpdate:modelValue": v[2] || (v[2] = (K) => u.map_filter_on = K),
                    "false-inner-label": "anywhere",
                    "true-inner-label": "within map section"
                  }, null, 8, ["modelValue"])
                ])
              ]),
              k(_),
              L("div", tl, [
                L("div", ol, [
                  k(S(Ia), {
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
                      k(S(Ha), {
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
}), rl = /* @__PURE__ */ pt(nl, [["__scopeId", "data-v-d76f1184"]]), sl = { class: "flex padd15" }, al = { class: "buttonbar" }, ll = { class: "padd" }, il = {
  key: 0,
  class: "title"
}, ul = {
  key: 1,
  class: "aflex"
}, cl = { class: "aflex" }, dl = { class: "aflex" }, pl = { class: "widgets_grid" }, fl = ["active", "onClick"], vl = ["src"], ml = /* @__PURE__ */ A({
  __name: "EndPointfinderModal",
  setup(e, { expose: t }) {
    const o = Wn(), n = h(!1);
    let s, r, a;
    const l = () => {
      const $ = o.params.pageid ?? "", m = Un($), V = Hn($);
      s = m.createWidget, r = V.updateLayout, a = V.layout, n.value = !n.value;
    }, i = h(0), u = h(), d = h(), { connections: f, createConnection: C } = go(), { dataSources: b, createDataSource: g, updateDataSource: v } = Dn(), p = I(Gn), O = h([]), _ = h([]), P = Le({
      step0: !1,
      step1: !0,
      step2: !0,
      step3: !0
    }), X = [
      {
        label: "Search",
        icon: "travel_explore",
        beforeLeave: ($) => {
          $.hasError = !P.step0;
        }
      },
      {
        label: "Connection",
        icon: "polyline",
        beforeLeave: ($) => {
          $.hasError = !P.step1;
        }
      },
      {
        label: "Store",
        icon: "store",
        beforeLeave: ($) => {
          $.hasError = !P.step2;
        }
      },
      { label: "Widgets", icon: "widgets", beforeLeave: ($) => {
        $.hasError = !P.step3;
      } }
    ];
    F(() => {
      console.log("Mounting endpoint finder");
    });
    const Q = Le({
      searchString: "",
      loading: !1
    }), ne = h(null), K = async () => await ne.value?.run(() => {
    }), ee = h(""), x = h([]), R = h({});
    ae(x, () => {
      if (!x.value) {
        ee.value = "";
        return;
      }
      const $ = Object.keys(x.value).reduce((m, V, se) => x.value[V] != null ? m + 1 : m, 0);
      if ($ == 0) {
        ee.value = "";
        return;
      }
      ee.value = $.toString();
    }, { immediate: !0, deep: !0 });
    const me = c(() => {
      let $ = [];
      for (let m of Object.keys(R.value))
        $ = $.concat(
          R.value[m].results?.bindings?.map((V) => (V.endpoint = { value: m }, V))
        );
      return $;
    }), Fe = async () => {
      Q.loading = !0;
      const $ = Q.searchString, m = wt().getAllActiveEndpoints();
      m && (R.value = await new qn().setEndpoints(m).setFilter(x.value).query($)), Q.loading = !1;
    }, Pe = I(Fn), Ee = I(zn);
    Ee.getDataSourceTypes();
    let y = h();
    h("rest");
    let w = h();
    const T = h(!1), G = h();
    ae(G, () => {
      T.value = !1;
      let $ = null;
      try {
        $ = new URL(G.value?.accessUrl?.value), y.value = Ye(G.value?.format?.value, $.origin);
      } catch (m) {
        console.log(m);
      }
      y.value ? P.step0 = !0 : (T.value = !0, P.step0 = !1);
    }), ae(i, ($) => {
      if ($ == 2) {
        let m = null;
        try {
          if (m = new URL(G.value?.accessUrl?.value), !y.value) throw new Error("connection not found");
          const V = y.value?.uid;
          if (!V) throw new Error("id not found");
          w.value = Le(Qe(G.value?.format?.value, V, m.pathname));
        } catch (V) {
          console.log(V);
        }
      }
      if ($ === 3) {
        console.log(p.getAllWidgets());
        const m = Object.entries(p.getAllWidgets()).filter(([V, se]) => se.supportedDSTypes.includes(w.value?.type)).filter(([V, se]) => se.icon).map(([V, se]) => ({ type: V, icon: se.icon }));
        console.log(m), O.value = m;
      }
    });
    const Ye = ($, m) => {
      let V;
      const se = Pe.getRegisteredTypes();
      switch ("<" + $ + ">") {
        case N.CSV:
        case N.JSON:
        case N.REST:
        case N.OGCSTA:
          if (se.includes("rest")) {
            const ge = C("rest", { url: m });
            V = f.find((ye) => ye.uid === ge);
          }
          break;
        case N.XMLA:
          if (se.includes("xmla")) {
            const ge = C("xmla", { url: m });
            V = f.find((ye) => ye.uid === ge);
          }
          break;
      }
      return V;
    }, Qe = ($, m, V) => {
      switch ("<" + $ + ">") {
        case N.CSV:
          const se = g("csv", { connection: m, resourceUrl: V, separators: "," });
          return b.find((ie) => ie.uid === se);
        case N.JSON:
          const ge = g("rest", { connection: m, resourceUrl: V });
          return b.find((ie) => ie.uid === ge);
        case N.REST:
          const ye = g("rest", { connection: m, resourceUrl: V });
          return b.find((ie) => ie.uid === ye);
        case N.OGCSTA:
          const tt = g("ogcsta", { connection: m, resourceUrl: V });
          return b.find((ie) => ie.uid === tt);
        case N.XMLA:
          const Me = g("xmla", { connection: m, resourceUrl: V });
          return b.find((ie) => ie.uid === Me);
      }
      return null;
    }, et = c(() => {
      const $ = Ee.getDatasourceIdentifiers(w.value.type);
      return Ee.resolveIdentifier($.Settings);
    }), mt = c(() => {
      if (!y.value) return null;
      const $ = Pe.getConnectionIdentifiers(y.value.type);
      return Pe.resolveIdentifier($.Settings);
    }), Jt = () => {
      if (_.value.length > 0) {
        const $ = [];
        _.value.forEach((V, se) => {
          const ye = {
            id: s(
              V.type,
              { datasourceId: w.value?.uid },
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
            x: 50 + se * 300,
            y: 50,
            width: 200,
            height: 100,
            z: 3005
          };
          $.push(ye), console.log("Endpointfinder created Widget:" + V.type);
        });
        const m = [...a, ...$];
        r(m);
      }
      _.value = [], y.value = void 0, w.value = void 0, i.value = 0, x.value = [], Q.searchString = "", R.value = {}, P.step0 = !1, P.step1 = !0, P.step2 = !0, P.step3 = !0, u.value?.resetValidation(), d.value?.resetValidation(), n.value = !1;
    };
    return ae(() => w.value?.config, ($) => {
      console.log($);
    }, { deep: !0 }), t({
      run: l
    }), ($, m) => {
      const V = J("VaButton"), se = J("va-button"), ge = J("VaIcon"), ye = J("VaInput"), tt = J("VaForm"), Me = J("VaScrollContainer"), ie = J("va-input"), Ln = J("VaCheckbox"), Pn = J("va-card-content"), En = J("va-modal");
      return E(), U(pe, null, [
        k(En, {
          modelValue: n.value,
          class: "infobox",
          "hide-default-actions": "",
          "no-padding": ""
        }, {
          footer: B(() => [
            i.value != 3 ? (E(), Y(V, {
              key: 0,
              disabled: !P["step" + i.value],
              onClick: m[0] || (m[0] = (gt) => i.value++)
            }, {
              default: B(() => [...m[7] || (m[7] = [
                te("next", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : ue("", !0),
            i.value == 3 ? (E(), Y(V, {
              key: 1,
              disabled: !P["step" + i.value],
              onClick: Jt
            }, {
              default: B(() => [...m[8] || (m[8] = [
                te("finish", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : ue("", !0)
          ]),
          default: B(({ ok: gt }) => [
            k(se, {
              class: "mr-1 mb-1 close",
              preset: "secondary",
              style: { position: "absolute", right: "0" },
              onClick: m[1] || (m[1] = (M) => Jt())
            }, {
              default: B(() => [...m[9] || (m[9] = [
                te(" x ", -1)
              ])]),
              _: 1
            }),
            k(Pn, { class: "no-padding" }, {
              default: B(() => [
                k(S(ma), {
                  color: "#c29803",
                  modelValue: i.value,
                  "onUpdate:modelValue": m[5] || (m[5] = (M) => i.value = M),
                  steps: X,
                  controlsHidden: "",
                  linear: ""
                }, {
                  "step-content-0": B(() => [
                    k(tt, {
                      ref_key: "formRef",
                      ref: u,
                      class: "flex flex-col items-baseline gap-6"
                    }, {
                      default: B(() => [
                        L("div", sl, [
                          k(ye, {
                            modelValue: Q.searchString,
                            "onUpdate:modelValue": m[2] || (m[2] = (M) => Q.searchString = M),
                            loading: Q.loading,
                            class: "flex",
                            label: "Search String",
                            onKeyup: m[3] || (m[3] = (M) => {
                              M.key == "Enter" && Fe();
                            })
                          }, {
                            prependInner: B(() => [
                              k(ge, {
                                color: "secondary",
                                name: "search"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "loading"]),
                          L("div", al, [
                            k(S(la), {
                              offset: [-5, 5],
                              text: ee.value,
                              class: "mr-6",
                              overlap: "",
                              style: { "--va-badge-text-wrapper-border-radius": "50%" }
                            }, {
                              default: B(() => [
                                k(V, {
                                  icon: "filter_alt",
                                  preset: "secondary",
                                  round: "",
                                  onClick: K
                                })
                              ]),
                              _: 1
                            }, 8, ["text"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 512),
                    me.value.length > 0 ? (E(), Y(Me, {
                      key: 0,
                      class: "padd",
                      vertical: ""
                    }, {
                      default: B(() => [
                        (E(!0), U(pe, null, at(me.value, (M) => (E(), U(pe, null, [
                          k(wa, {
                            class: we({ active: M == G.value }),
                            result: M,
                            onClick: (bl) => G.value = M
                          }, null, 8, ["class", "result", "onClick"]),
                          m[10] || (m[10] = L("br", null, null, -1))
                        ], 64))), 256))
                      ]),
                      _: 1
                    })) : ue("", !0)
                  ]),
                  "step-content-1": B(() => [
                    L("div", ll, [
                      k(tt, {
                        ref_key: "connectionForm",
                        ref: d,
                        modelValue: P.step1,
                        "onUpdate:modelValue": m[4] || (m[4] = (M) => P.step1 = M),
                        immediate: ""
                      }, {
                        default: B(() => [
                          T.value ? (E(), U("div", ul, [
                            k(ge, {
                              class: "mr-2",
                              color: "#ec9c1d",
                              name: "warning",
                              size: "2rem"
                            }),
                            m[11] || (m[11] = L("h2", { class: "title" }, " The Connection cant be automatic detected, this happens if the Type of Dataset is not known or not supported. Never the less you can try to configure the connection manualy:", -1))
                          ])) : (E(), U("h2", il, " The following Connection will be created:")),
                          m[14] || (m[14] = L("br", null, null, -1)),
                          m[15] || (m[15] = L("br", null, null, -1)),
                          L("div", cl, [
                            S(y) ? (E(), Y(ie, {
                              key: 0,
                              modelValue: S(y)?.name,
                              rules: [(M) => !!M || "Required"],
                              label: "Name"
                            }, null, 8, ["modelValue", "rules"])) : ue("", !0),
                            k(ie, {
                              modelValue: S(y)?.type,
                              class: "type-input",
                              label: "Type"
                            }, null, 8, ["modelValue"]),
                            m[12] || (m[12] = L("br", null, null, -1)),
                            m[13] || (m[13] = L("br", null, null, -1))
                          ]),
                          m[16] || (m[16] = L("br", null, null, -1)),
                          (E(), Y(st(mt.value), {
                            config: S(y)?.config
                          }, null, 8, ["config"]))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  "step-content-2": B(() => [
                    k(Me, {
                      class: "padd",
                      vertical: ""
                    }, {
                      default: B(() => [
                        m[19] || (m[19] = L("h2", { class: "title" }, " The following Store will be created:", -1)),
                        m[20] || (m[20] = L("br", null, null, -1)),
                        L("div", dl, [
                          S(y) ? (E(), Y(ie, {
                            key: 0,
                            modelValue: S(w)?.name,
                            rules: [(M) => !!M || "Required"],
                            label: "Name"
                          }, null, 8, ["modelValue", "rules"])) : ue("", !0),
                          k(ie, {
                            modelValue: S(w)?.type,
                            class: "type-input",
                            label: "Type"
                          }, null, 8, ["modelValue"]),
                          m[17] || (m[17] = L("br", null, null, -1)),
                          m[18] || (m[18] = L("br", null, null, -1))
                        ]),
                        m[21] || (m[21] = L("br", null, null, -1)),
                        (E(), Y(st(et.value), {
                          config: S(w).config,
                          connections: S(f),
                          dataSources: S(b)
                        }, null, 8, ["config", "connections", "dataSources"])),
                        m[22] || (m[22] = L("br", null, null, -1))
                      ]),
                      _: 1
                    })
                  ]),
                  "step-content-3": B(() => [
                    k(Me, {
                      class: "padd",
                      vertical: ""
                    }, {
                      default: B(() => [
                        m[23] || (m[23] = L("h2", { class: "title" }, "Widgets zur Datenquelle auswählen", -1)),
                        m[24] || (m[24] = L("br", null, null, -1)),
                        L("div", pl, [
                          (E(!0), U(pe, null, at(O.value, (M) => (E(), U("div", {
                            class: "widgets_grid-item",
                            key: M.type,
                            active: _.value.includes(M),
                            onClick: () => {
                              _.value.includes(M) ? _.value.splice(_.value.indexOf(M), 1) : _.value.push(M);
                            }
                          }, [
                            k(Ln, {
                              "model-value": _.value.includes(M)
                            }, null, 8, ["model-value"]),
                            L("img", {
                              class: "m-2",
                              src: M.icon,
                              style: { height: "30px" }
                            }, null, 8, vl),
                            te(" " + ce(M.type), 1)
                          ], 8, fl))), 128))
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
        k(rl, {
          ref_key: "loadModalref",
          ref: ne,
          modelValue: x.value,
          "onUpdate:modelValue": m[6] || (m[6] = (gt) => x.value = gt)
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
}), gl = /* @__PURE__ */ pt(ml, [["__scopeId", "data-v-881fad5f"]]);
function yl(e, { props: t, children: o, element: n, app: s } = {}) {
  let r = n, a = k(e, t, o);
  return s && s._context && (a.appContext = s._context), r ? rt(a, r) : typeof document < "u" && rt(a, r = document.createElement("div")), { vNode: a, destroy: () => {
    r && rt(null, r), r = null, a = null;
  }, el: r };
}
function El({ services: e, log: t }) {
  const o = {
    install(l) {
      const { vNode: i } = yl(gl, { props: {}, app: l });
      l.provide("endpointfinder", async () => {
        await i.component?.exposed?.run(() => {
        });
      });
    }
  };
  e.getRequired("App").use(o);
  const { createConnection: n } = go(), s = n("rest", { url: "https://www.govdata.de/sparql" }), a = e.getRequired(Mn).getConnection(s);
  wt().registerEndpoint(a, "SparqlDataEurope"), wt().setActive("SparqlDataEurope"), t.info("Endpointfinder bereit");
}
export {
  El as activate
};
