(function(){var i="ui.vue.plugins.endpointfinder",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".aellipsis[data-v-c941f0d5]{line-height:23px;max-height:var(--v675a841f);text-overflow:ellipsis;overflow:hidden;color:var(--color-dim)}.aellipsis.expanded[data-v-c941f0d5]{max-height:100%}.card[data-v-728c3602]{border:0;border-bottom:1px solid var(--color-divider);border-radius:0;background:none;cursor:pointer}.card[data-v-728c3602]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.card__heading[data-v-728c3602]{display:flex;align-items:baseline;gap:8px;margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600}.aflex[data-v-728c3602]{display:flex;margin-top:12px;flex-direction:row;justify-content:space-between;flex-wrap:nowrap}.light[data-v-728c3602],.small[data-v-728c3602]{font-size:var(--text-sm);color:var(--color-dim)}.filters[data-v-66b5a078]{display:flex;flex-direction:column;gap:14px}.list_of_formats[data-v-66b5a078]{display:flex;flex-direction:row;gap:5px;flex-wrap:wrap;justify-content:flex-start}.map[data-v-66b5a078]{width:100%;height:250px;position:relative}.line[data-v-66b5a078]{display:flex;flex-direction:row;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between}.line__label[data-v-66b5a078]{font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.pointer[data-v-66b5a078]{cursor:pointer}.finder .store-item-header{display:none}.finder .store-item-content{border:none;padding:0}.finder .datasource-list .datasource-list-add-button{display:none}.finder__title[data-v-91d68f9b]{margin:0;font-family:var(--font-sans);font-size:var(--text-lg);font-weight:600}.steps[data-v-91d68f9b]{display:flex;flex-wrap:wrap;gap:18px;margin:0 0 18px;padding:0 0 12px;list-style:none;border-bottom:1px solid var(--color-divider);counter-reset:step}.step[data-v-91d68f9b]{display:flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.step[data-v-91d68f9b]:before{counter-increment:step;content:counter(step) \".\";font-variant-numeric:tabular-nums}.step--done[data-v-91d68f9b]{color:var(--color-fg)}.step--on[data-v-91d68f9b]{color:var(--color-accent);font-weight:600}.finder[data-v-91d68f9b]{display:flex;flex-direction:column;gap:12px;max-height:62vh;overflow-y:auto}.finder__lead[data-v-91d68f9b]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600}.finder__warn[data-v-91d68f9b]{display:flex;align-items:flex-start;gap:9px;margin:0;font-family:var(--font-sans);font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}.search[data-v-91d68f9b]{display:flex;align-items:flex-end;gap:10px}.search[data-v-91d68f9b]>:first-child{flex:1 1 auto;min-width:0}.results[data-v-91d68f9b]{display:flex;flex-direction:column}.pair[data-v-91d68f9b]{display:flex;flex-wrap:wrap;gap:12px}.pair[data-v-91d68f9b]>*{flex:1 1 200px;min-width:0}.widgets_grid[data-v-91d68f9b]{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px}.widgets_grid-item[data-v-91d68f9b]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:8px;padding:8px 10px;border:1px solid var(--color-divider);border-radius:var(--radius-sm);background-color:var(--color-raised);font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer;text-align:left}.widgets_grid-item[data-v-91d68f9b]:hover{border-color:var(--color-outline)}.widgets_grid-item.on[data-v-91d68f9b]{border-color:var(--color-accent)}.widgets_grid-icon[data-v-91d68f9b]{height:30px}\n";})();
import { defineComponent as T, useCssVars as xt, computed as ne, ref as c, createElementBlock as q, openBlock as j, Fragment as Y, createElementVNode as E, createVNode as M, normalizeClass as _e, renderSlot as Mt, unref as d, withCtx as G, createTextVNode as K, toDisplayString as x, createBlock as H, h as re, reactive as ue, provide as Q, onMounted as B, markRaw as P, nextTick as R, onBeforeUnmount as ve, inject as w, watch as se, onUnmounted as Ne, render as we, useModel as $t, renderList as Ce, createCommentVNode as Se, resolveDynamicComponent as We } from "vue";
import { DButton as je, DCard as Dt, DChip as Pe, DModal as Ye, DSwitch as qe, DDivider as Vt, DIcon as Ie, DInput as pe, DCheckbox as Ut } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { identifier as Ge, CONNECTION_REPOSITORY as zt } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as Wt } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { identifier as Xe } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { useTranslation as et, useBoard as qt, useEList as Je } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as Gt } from "org.eclipse.daanse.board.app.lib.api.widget";
import { useRoute as Xt } from "vue-router";
import { component as Jt } from "@eclipse-daanse/tsm";
class Zt {
  dss = {};
  filters = [];
  limit = 10;
  setEndpoints(n) {
    return this.dss = n, this;
  }
  setFilter(n) {
    return this.filters = n, this;
  }
  setLimit(n) {
    return n < 1 ? this : n > 1e3 ? this : (this.limit = n, this);
  }
  async query(n) {
    const t = [], o = [], s = [];
    this.filters.forEach((l) => {
      if (l.mapSection) {
        const i = l;
        s.push("PREFIX spatial: <http://geovocab.org/spatial#>"), s.push("PREFIX geo: <http://www.opengis.net/ont/geosparql#>"), o.push("?dataService dct:spatial ?location ."), o.push("?location geo:lat ?lat ;geo:long ?long ."), t.push(`FILTER (?lat >= ${i.mapSection._northEast.lat} && ?lat <= ${i.mapSection._southWest.lat})`), t.push(`FILTER (?long >= ${i.mapSection._northEast.lng} && ?long <= ${i.mapSection._southWest.lng})`);
      }
      if (l.formats) {
        let u = "FILTER (" + l.formats.map((m) => "?format =" + m).join("||") + ")";
        t.push(u);
      }
    });
    const a = `
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

            FILTER (CONTAINS(LCASE(?title), "${n.toLowerCase()}"))
            ${t.join(`
`)}
            }
            LIMIT ${this.limit}
        `;
    let r = {};
    for (const l of Object.entries(this.dss)) {
      let i = "query=" + encodeURIComponent(a);
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
        r[l[0]] = await u.json();
      } catch (u) {
        console.log(u);
      }
    }
    return r;
  }
}
const fe = {}, ie = [];
function Fe() {
  return {
    registerEndpoint: (r, l) => {
      fe[l] = r;
    },
    getEndpointsByName: (r) => fe[r],
    getActiveEndpoints: (r) => {
      if (ie.includes(r))
        return fe[r];
    },
    setActive: (r) => {
      ie.includes(r) || fe[r] && ie.push(r);
    },
    setInActive: (r) => {
      const l = ie.indexOf(r);
      l != -1 && ie.splice(l);
    },
    getAllActiveEndpoints: () => Object.fromEntries(Object.entries(fe).filter((r) => ie.includes(r[0])))
  };
}
var V = /* @__PURE__ */ ((e) => (e.XMLA = "<http://publications.europa.eu/resource/authority/file-type/XMLA>", e.CSV = "<http://publications.europa.eu/resource/authority/file-type/CSV>", e.XML = "<http://publications.europa.eu/resource/authority/file-type/XML>", e.WMS = "<http://publications.europa.eu/resource/authority/file-type/WMS_SRVC>", e.WFS = "<http://publications.europa.eu/resource/authority/file-type/WFS_SRVC>", e.GEOJSON = "<http://publications.europa.eu/resource/authority/file-type/GEOJSON>", e.JSON = "<http://publications.europa.eu/resource/authority/file-type/JSON>", e.REST = "<http://publications.europa.eu/resource/authority/file-type/REST>", e.OGCSTA = "???", e))(V || {});
const Ht = /* @__PURE__ */ T({
  __name: "Ellipsis",
  props: {
    lines: { default: 3 }
  },
  setup(e) {
    xt((s) => ({
      v675a841f: t.value
    }));
    const n = e, t = ne(() => n.lines * 23 + "px"), o = c(!1);
    return (s, a) => (j(), q(Y, null, [
      E("div", {
        class: _e([{ expanded: o.value }, "aellipsis"])
      }, [
        Mt(s.$slots, "default", {}, void 0, !0)
      ], 2),
      M(d(je), {
        intent: "quiet",
        size: "sm",
        onClick: a[0] || (a[0] = (r) => o.value = !o.value)
      }, {
        default: G(() => [
          K(x(o.value ? "Weniger" : "Mehr"), 1)
        ]),
        _: 1
      })
    ], 64));
  }
}), Ae = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, s] of n)
    t[o] = s;
  return t;
}, Kt = /* @__PURE__ */ Ae(Ht, [["__scopeId", "data-v-c941f0d5"]]), Qt = { class: "card__heading" }, Yt = { class: "aflex small light" }, en = { class: "right" }, tn = { class: "left" }, nn = /* @__PURE__ */ T({
  __name: "SearchResultCard",
  props: {
    result: {}
  },
  setup(e) {
    const n = e, t = (o) => {
      const s = Object.entries(V).filter((a, r) => a[1] == "<" + o + ">");
      return s && s[0] ? s[0][0] : o;
    };
    return (o, s) => (j(), H(d(Dt), { class: "card" }, {
      header: G(() => [
        E("h3", Qt, [
          M(d(Pe), null, {
            default: G(() => [
              K(x(t(n.result.format.value)), 1)
            ]),
            _: 1
          }),
          K(" " + x(n.result.title.value), 1)
        ])
      ]),
      default: G(() => [
        M(Kt, { lines: 3 }, {
          default: G(() => [
            K(x(n.result.description.value), 1)
          ]),
          _: 1
        }),
        E("div", Yt, [
          E("div", en, x(n.result.creator_name ? n.result.creator_name.value : ""), 1),
          E("div", tn, x(n.result.date ? n.result.date.value : ""), 1)
        ])
      ]),
      _: 1
    }));
  }
}), on = /* @__PURE__ */ Ae(nn, [["__scopeId", "data-v-728c3602"]]), Ze = (e, n) => {
  for (const t of Object.keys(n))
    e.on(t, n[t]);
}, tt = (e) => {
  for (const n of Object.keys(e)) {
    const t = e[n];
    t && ae(t.cancel) && t.cancel();
  }
}, an = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), ae = (e) => typeof e == "function", I = (e, n, t) => {
  for (const o in t) {
    const s = "set" + an(o);
    e[s] ? se(
      () => t[o],
      (a, r) => {
        e[s](a, r);
      }
    ) : n[s] && se(
      () => t[o],
      (a) => {
        n[s](a);
      }
    );
  }
}, k = (e, n, t = {}) => {
  const o = { ...t };
  for (const s in e) {
    const a = n[s], r = e[s];
    a && (a && a.custom === !0 || r !== void 0 && (o[s] = r));
  }
  return o;
}, U = (e) => {
  const n = {}, t = {};
  for (const o in e)
    if (o.startsWith("on") && !o.startsWith("onUpdate") && o !== "onReady") {
      const s = o.slice(2).toLocaleLowerCase();
      n[s] = e[o];
    } else
      t[o] = e[o];
  return { listeners: n, attrs: t };
}, ln = async (e) => {
  const n = await Promise.all([
    import("./marker-icon-2x-DVSLMKfE.js"),
    import("./marker-icon-DbhCZIpd.js"),
    import("./marker-shadow-ZZvxUwqf.js")
  ]);
  delete e.Default.prototype._getIconUrl, e.Default.mergeOptions({
    iconRetinaUrl: n[0].default,
    iconUrl: n[1].default,
    shadowUrl: n[2].default
  });
}, Le = (e) => {
  const n = c(
    (...o) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), t = (...o) => n.value(...o);
  return t.wrapped = n, Q(e, t), t;
}, Oe = (e, n) => e.wrapped.value = n, A = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, C = (e) => {
  const n = w(e);
  if (n === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return n;
}, F = Symbol(
  "useGlobalLeaflet"
), z = Symbol("addLayer"), Ee = Symbol("removeLayer"), me = Symbol(
  "registerControl"
), nt = Symbol(
  "registerLayerControl"
), ot = Symbol(
  "canSetParentHtml"
), at = Symbol("setParentHtml"), lt = Symbol("setIcon"), st = Symbol("bindPopup"), rt = Symbol("bindTooltip"), it = Symbol("unbindPopup"), ut = Symbol("unbindTooltip"), ye = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, he = (e) => ({ options: e.options, methods: {} }), ce = {
  ...ye,
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
}, ge = (e, n, t) => {
  const o = C(z), s = C(Ee), { options: a, methods: r } = he(e), l = k(
    e,
    ce,
    a
  ), i = () => o({ leafletObject: n.value }), u = () => s({ leafletObject: n.value }), m = {
    ...r,
    setAttribution(S) {
      u(), n.value.options.attribution = S, e.visible && i();
    },
    setName() {
      u(), e.visible && i();
    },
    setLayerType() {
      u(), e.visible && i();
    },
    setVisible(S) {
      n.value && (S ? i() : u());
    },
    bindPopup(S) {
      if (!n.value || !ae(n.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      n.value.bindPopup(S);
    },
    bindTooltip(S) {
      if (!n.value || !ae(n.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      n.value.bindTooltip(S);
    },
    unbindTooltip() {
      n.value && (ae(n.value.closeTooltip) && n.value.closeTooltip(), ae(n.value.unbindTooltip) && n.value.unbindTooltip());
    },
    unbindPopup() {
      n.value && (ae(n.value.closePopup) && n.value.closePopup(), ae(n.value.unbindPopup) && n.value.unbindPopup());
    },
    updateVisibleProp(S) {
      t.emit("update:visible", S);
    }
  };
  return Q(st, m.bindPopup), Q(rt, m.bindTooltip), Q(it, m.unbindPopup), Q(ut, m.unbindTooltip), Ne(() => {
    m.unbindPopup(), m.unbindTooltip(), u();
  }), { options: l, methods: m };
}, ee = (e, n) => {
  if (e && n.default)
    return re("div", { style: { display: "none" } }, n.default());
}, ct = {
  ...ce,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, sn = (e, n, t) => {
  const { options: o, methods: s } = ge(
    e,
    n,
    t
  );
  return { options: k(
    e,
    ct,
    o
  ), methods: s };
}, xe = {
  ...ct,
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
}, dt = (e, n, t) => {
  const { options: o, methods: s } = sn(e, n, t), a = k(
    e,
    xe,
    o
  ), r = C(Ee), l = {
    ...s,
    setStroke(i) {
      n.value.setStyle({ stroke: i });
    },
    setColor(i) {
      n.value.setStyle({ color: i });
    },
    setWeight(i) {
      n.value.setStyle({ weight: i });
    },
    setOpacity(i) {
      n.value.setStyle({ opacity: i });
    },
    setLineCap(i) {
      n.value.setStyle({ lineCap: i });
    },
    setLineJoin(i) {
      n.value.setStyle({ lineJoin: i });
    },
    setDashArray(i) {
      n.value.setStyle({ dashArray: i });
    },
    setDashOffset(i) {
      n.value.setStyle({ dashOffset: i });
    },
    setFill(i) {
      n.value.setStyle({ fill: i });
    },
    setFillColor(i) {
      n.value.setStyle({ fillColor: i });
    },
    setFillOpacity(i) {
      n.value.setStyle({ fillOpacity: i });
    },
    setFillRule(i) {
      n.value.setStyle({ fillRule: i });
    },
    setClassName(i) {
      n.value.setStyle({ className: i });
    }
  };
  return ve(() => {
    r({ leafletObject: n.value });
  }), { options: a, methods: l };
}, Me = {
  ...xe,
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
}, pt = (e, n, t) => {
  const { options: o, methods: s } = dt(
    e,
    n,
    t
  ), a = k(
    e,
    Me,
    o
  ), r = {
    ...s,
    setRadius(l) {
      n.value.setRadius(l);
    },
    setLatLng(l) {
      n.value.setLatLng(l);
    }
  };
  return { options: a, methods: r };
}, ft = {
  ...Me,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, rn = (e, n, t) => {
  const { options: o, methods: s } = pt(e, n, t), a = k(
    e,
    ft,
    o
  ), r = {
    ...s
  };
  return { options: a, methods: r };
};
T({
  name: "LCircle",
  props: ft,
  setup(e, n) {
    const t = c(), o = c(!1), s = w(F), a = C(z), { options: r, methods: l } = rn(e, t, n);
    return B(async () => {
      const { circle: i } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(i(e.latLng, r));
      const { listeners: u } = U(n.attrs);
      t.value.on(u), I(l, t.value, e), a({
        ...e,
        ...l,
        leafletObject: t.value
      }), o.value = !0, R(() => n.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
T({
  name: "LCircleMarker",
  props: Me,
  setup(e, n) {
    const t = c(), o = c(!1), s = w(F), a = C(z), { options: r, methods: l } = pt(
      e,
      t,
      n
    );
    return B(async () => {
      const { circleMarker: i } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        i(e.latLng, r)
      );
      const { listeners: u } = U(n.attrs);
      t.value.on(u), I(l, t.value, e), a({
        ...e,
        ...l,
        leafletObject: t.value
      }), o.value = !0, R(() => n.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const de = {
  ...ye,
  position: {
    type: String
  }
}, be = (e, n) => {
  const { options: t, methods: o } = he(e), s = k(
    e,
    de,
    t
  ), a = {
    ...o,
    setPosition(r) {
      n.value && n.value.setPosition(r);
    }
  };
  return Ne(() => {
    n.value && n.value.remove();
  }), { options: s, methods: a };
}, un = (e) => e.default ? re("div", { ref: "root" }, e.default()) : null;
T({
  name: "LControl",
  props: {
    ...de,
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
  setup(e, n) {
    const t = c(), o = c(), s = w(F), a = C(me), { options: r, methods: l } = be(e, t);
    return B(async () => {
      const { Control: i, DomEvent: u } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js"), m = i.extend({
        onAdd() {
          return o.value;
        }
      });
      t.value = P(new m(r)), I(l, t.value, e), a({ leafletObject: t.value }), e.disableClickPropagation && o.value && u.disableClickPropagation(o.value), e.disableScrollPropagation && o.value && u.disableScrollPropagation(o.value), R(() => n.emit("ready", t.value));
    }), { root: o, leafletObject: t };
  },
  render() {
    return un(this.$slots);
  }
});
const vt = {
  ...de,
  prefix: {
    type: String
  }
}, cn = (e, n) => {
  const { options: t, methods: o } = be(
    e,
    n
  ), s = k(
    e,
    vt,
    t
  ), a = {
    ...o,
    setPrefix(r) {
      n.value.setPrefix(r);
    }
  };
  return { options: s, methods: a };
};
T({
  name: "LControlAttribution",
  props: vt,
  setup(e, n) {
    const t = c(), o = w(F), s = C(me), { options: a, methods: r } = cn(e, t);
    return B(async () => {
      const { control: l } = o ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        l.attribution(a)
      ), I(r, t.value, e), s({ leafletObject: t.value }), R(() => n.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const mt = {
  ...de,
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
}, dn = (e, n) => {
  const { options: t } = be(e, n);
  return { options: k(
    e,
    mt,
    t
  ), methods: {
    addLayer(o) {
      o.layerType === "base" ? n.value.addBaseLayer(o.leafletObject, o.name) : o.layerType === "overlay" && n.value.addOverlay(o.leafletObject, o.name);
    },
    removeLayer(o) {
      n.value.removeLayer(o.leafletObject);
    }
  } };
};
T({
  name: "LControlLayers",
  props: mt,
  setup(e, n) {
    const t = c(), o = w(F), s = C(nt), { options: a, methods: r } = dn(e, t);
    return B(async () => {
      const { control: l } = o ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        l.layers(void 0, void 0, a)
      ), I(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), R(() => n.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const yt = {
  ...de,
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
}, pn = (e, n) => {
  const { options: t, methods: o } = be(
    e,
    n
  );
  return { options: k(
    e,
    yt,
    t
  ), methods: o };
};
T({
  name: "LControlScale",
  props: yt,
  setup(e, n) {
    const t = c(), o = w(F), s = C(me), { options: a, methods: r } = pn(e, t);
    return B(async () => {
      const { control: l } = o ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(l.scale(a)), I(r, t.value, e), s({ leafletObject: t.value }), R(() => n.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const ht = {
  ...de,
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
}, fn = (e, n) => {
  const { options: t, methods: o } = be(
    e,
    n
  );
  return { options: k(
    e,
    ht,
    t
  ), methods: o };
};
T({
  name: "LControlZoom",
  props: ht,
  setup(e, n) {
    const t = c(), o = w(F), s = C(me), { options: a, methods: r } = fn(e, t);
    return B(async () => {
      const { control: l } = o ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(l.zoom(a)), I(r, t.value, e), s({ leafletObject: t.value }), R(() => n.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Re = {
  ...ce
}, $e = (e, n, t) => {
  const { options: o, methods: s } = ge(
    e,
    n,
    t
  ), a = k(
    e,
    Re,
    o
  ), r = {
    ...s,
    addLayer(l) {
      n.value.addLayer(l.leafletObject);
    },
    removeLayer(l) {
      n.value.removeLayer(l.leafletObject);
    }
  };
  return Q(z, r.addLayer), Q(Ee, r.removeLayer), { options: a, methods: r };
}, gt = {
  ...Re
}, vn = (e, n, t) => {
  const { options: o, methods: s } = $e(
    e,
    n,
    t
  ), a = k(
    e,
    gt,
    o
  ), r = {
    ...s
  };
  return { options: a, methods: r };
};
T({
  props: gt,
  setup(e, n) {
    const t = c(), o = c(!1), s = w(F), a = C(z), { methods: r, options: l } = vn(
      e,
      t,
      n
    );
    return B(async () => {
      const { featureGroup: i } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        i(void 0, l)
      );
      const { listeners: u } = U(n.attrs);
      t.value.on(u), I(r, t.value, e), a({
        ...e,
        ...r,
        leafletObject: t.value
      }), o.value = !0, R(() => n.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const bt = {
  ...Re,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, mn = (e, n, t) => {
  const { options: o, methods: s } = $e(
    e,
    n,
    t
  ), a = k(
    e,
    bt,
    o
  );
  Object.prototype.hasOwnProperty.call(e, "optionsStyle") && (a.style = e.optionsStyle);
  const r = {
    ...s,
    setGeojson(l) {
      n.value.clearLayers(), n.value.addData(l);
    },
    setOptionsStyle(l) {
      n.value.setStyle(l);
    },
    getGeoJSONData() {
      return n.value.toGeoJSON();
    },
    getBounds() {
      return n.value.getBounds();
    }
  };
  return { options: a, methods: r };
};
T({
  props: bt,
  setup(e, n) {
    const t = c(), o = c(!1), s = w(F), a = C(z), { methods: r, options: l } = mn(e, t, n);
    return B(async () => {
      const { geoJSON: i } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(i(e.geojson, l));
      const { listeners: u } = U(n.attrs);
      t.value.on(u), I(r, t.value, e), a({
        ...e,
        ...r,
        leafletObject: t.value
      }), o.value = !0, R(() => n.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const De = {
  ...ce,
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
}, St = (e, n, t) => {
  const { options: o, methods: s } = ge(
    e,
    n,
    t
  ), a = k(
    e,
    De,
    o
  ), r = {
    ...s,
    setTileComponent() {
      var l;
      (l = n.value) == null || l.redraw();
    }
  };
  return Ne(() => {
    n.value.off();
  }), { options: a, methods: r };
}, yn = (e, n, t, o) => e.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), t.setOptions(this, s);
  },
  createTile(s) {
    const a = this._tileCoordsToKey(s);
    this.tileComponents[a] = n.create("div");
    const r = re({ setup: o, props: ["coords"] }, { coords: s });
    return we(r, this.tileComponents[a]), this.tileComponents[a];
  },
  _unloadTile(s) {
    const a = this._tileCoordsToKey(s.coords);
    this.tileComponents[a] && (this.tileComponents[a].innerHTML = "", this.tileComponents[a] = void 0);
  }
});
T({
  props: {
    ...De,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(e, n) {
    const t = c(), o = c(null), s = c(!1), a = w(F), r = C(z), { options: l, methods: i } = St(e, t, n);
    return B(async () => {
      const { GridLayer: u, DomUtil: m, Util: S } = a ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js"), N = yn(
        u,
        m,
        S,
        e.childRender
      );
      t.value = P(new N(l));
      const { listeners: g } = U(n.attrs);
      t.value.on(g), I(i, t.value, e), r({
        ...e,
        ...i,
        leafletObject: t.value
      }), s.value = !0, R(() => n.emit("ready", t.value));
    }), { root: o, ready: s, leafletObject: t };
  },
  render() {
    return this.ready ? re("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const He = {
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
T({
  name: "LIcon",
  props: {
    ...He,
    ...ye
  },
  setup(e, n) {
    const t = c(), o = w(F), s = C(ot), a = C(at), r = C(lt);
    let l, i, u, m, S;
    const N = (p, _, D) => {
      const $ = p && p.innerHTML;
      if (!_) {
        D && S && s() && a($);
        return;
      }
      const { listeners: W } = U(n.attrs);
      S && i(S, W);
      const { options: oe } = he(e), J = k(
        e,
        He,
        oe
      );
      $ && (J.html = $), S = J.html ? u(J) : m(J), l(S, W), r(S);
    }, g = () => {
      R(() => N(t.value, !0, !1));
    }, h = () => {
      R(() => N(t.value, !1, !0));
    }, b = {
      setIconUrl: g,
      setIconRetinaUrl: g,
      setIconSize: g,
      setIconAnchor: g,
      setPopupAnchor: g,
      setTooltipAnchor: g,
      setShadowUrl: g,
      setShadowRetinaUrl: g,
      setShadowAnchor: g,
      setBgPos: g,
      setClassName: g,
      setHtml: g
    };
    return B(async () => {
      const {
        DomEvent: p,
        divIcon: _,
        icon: D
      } = o ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      l = p.on, i = p.off, u = _, m = D, I(b, {}, e), new MutationObserver(h).observe(t.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), g();
    }), { root: t };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return re("div", { ref: "root" }, e);
  }
});
const Lt = {
  ...ce,
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
}, hn = (e, n, t) => {
  const { options: o, methods: s } = ge(
    e,
    n,
    t
  ), a = k(
    e,
    Lt,
    o
  ), r = {
    ...s,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(l) {
      return n.value.setOpacity(l);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(l) {
      return n.value.setUrl(l);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(l) {
      return n.value.setBounds(l);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return n.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return n.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return n.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return n.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(l) {
      return n.value.setZIndex(l);
    }
  };
  return { options: a, methods: r };
};
T({
  name: "LImageOverlay",
  props: Lt,
  setup(e, n) {
    const t = c(), o = c(!1), s = w(F), a = C(z), { options: r, methods: l } = hn(
      e,
      t,
      n
    );
    return B(async () => {
      const { imageOverlay: i } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        i(e.url, e.bounds, r)
      );
      const { listeners: u } = U(n.attrs);
      t.value.on(u), I(l, t.value, e), a({
        ...e,
        ...l,
        leafletObject: t.value
      }), o.value = !0, R(() => n.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
T({
  props: Re,
  setup(e, n) {
    const t = c(), o = c(!1), s = w(F), a = C(z), { methods: r } = $e(e, t, n);
    return B(async () => {
      const { layerGroup: l } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        l(void 0, e.options)
      );
      const { listeners: i } = U(n.attrs);
      t.value.on(i), I(r, t.value, e), a({
        ...e,
        ...r,
        leafletObject: t.value
      }), o.value = !0, R(() => n.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
function Ot(e, n, t) {
  var o, s, a;
  n === void 0 && (n = 50), t === void 0 && (t = {});
  var r = (o = t.isImmediate) != null && o, l = (s = t.callback) != null && s, i = t.maxWait, u = Date.now(), m = [];
  function S() {
    if (i !== void 0) {
      var g = Date.now() - u;
      if (g + n >= i)
        return i - g;
    }
    return n;
  }
  var N = function() {
    var g = [].slice.call(arguments), h = this;
    return new Promise(function(b, p) {
      var _ = r && a === void 0;
      if (a !== void 0 && clearTimeout(a), a = setTimeout(function() {
        if (a = void 0, u = Date.now(), !r) {
          var $ = e.apply(h, g);
          l && l($), m.forEach(function(W) {
            return (0, W.resolve)($);
          }), m = [];
        }
      }, S()), _) {
        var D = e.apply(h, g);
        return l && l(D), b(D);
      }
      m.push({ resolve: b, reject: p });
    });
  };
  return N.cancel = function(g) {
    a !== void 0 && clearTimeout(a), m.forEach(function(h) {
      return (0, h.reject)(g);
    }), m = [];
  }, N;
}
const Ke = {
  ...ye,
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
}, gn = T({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: Ke,
  setup(e, n) {
    const t = c(), o = ue({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = he(e), a = k(
      e,
      Ke,
      s
    ), { listeners: r, attrs: l } = U(n.attrs), i = Le(z), u = Le(Ee), m = Le(me), S = Le(
      nt
    );
    Q(F, e.useGlobalLeaflet);
    const N = ne(() => {
      const _ = {};
      return e.noBlockingAnimations && (_.animate = !1), _;
    }), g = ne(() => {
      const _ = N.value;
      return e.padding && (_.padding = e.padding), e.paddingTopLeft && (_.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (_.paddingBottomRight = e.paddingBottomRight), _;
    }), h = {
      moveend: Ot((_) => {
        o.leafletRef && (n.emit("update:zoom", o.leafletRef.getZoom()), n.emit("update:center", o.leafletRef.getCenter()), n.emit("update:bounds", o.leafletRef.getBounds()));
      }),
      overlayadd(_) {
        const D = o.layersInControl.find(($) => $.name === _.name);
        D && D.updateVisibleProp(!0);
      },
      overlayremove(_) {
        const D = o.layersInControl.find(($) => $.name === _.name);
        D && D.updateVisibleProp(!1);
      }
    };
    B(async () => {
      e.useGlobalLeaflet && (A.L = A.L || await import("./leaflet-src-BDi_6Owi.js").then((v) => v.l));
      const { map: _, CRS: D, Icon: $, latLngBounds: W, latLng: oe, stamp: J } = e.useGlobalLeaflet ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        a.beforeMapMount && await a.beforeMapMount();
      } catch (v) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${v.message}`
        );
      }
      await ln($);
      const ke = typeof a.crs == "string" ? D[a.crs] : a.crs;
      a.crs = ke || D.EPSG3857;
      const te = {
        addLayer(v) {
          v.layerType !== void 0 && (o.layerControl === void 0 ? o.layersToAdd.push(v) : o.layersInControl.find(
            (L) => J(L.leafletObject) === J(v.leafletObject)
          ) || (o.layerControl.addLayer(v), o.layersInControl.push(v))), v.visible !== !1 && o.leafletRef.addLayer(v.leafletObject);
        },
        removeLayer(v) {
          v.layerType !== void 0 && (o.layerControl === void 0 ? o.layersToAdd = o.layersToAdd.filter(
            (L) => L.name !== v.name
          ) : (o.layerControl.removeLayer(v.leafletObject), o.layersInControl = o.layersInControl.filter(
            (L) => J(L.leafletObject) !== J(v.leafletObject)
          ))), o.leafletRef.removeLayer(v.leafletObject);
        },
        registerLayerControl(v) {
          o.layerControl = v, o.layersToAdd.forEach((L) => {
            o.layerControl.addLayer(L);
          }), o.layersToAdd = [], m(v);
        },
        registerControl(v) {
          o.leafletRef.addControl(v.leafletObject);
        },
        setZoom(v) {
          const L = o.leafletRef.getZoom();
          v !== L && o.leafletRef.setZoom(v, N.value);
        },
        setCrs(v) {
          const L = o.leafletRef.getBounds();
          o.leafletRef.options.crs = v, o.leafletRef.fitBounds(L, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(v) {
          o.leafletRef.fitBounds(v, g.value);
        },
        setBounds(v) {
          if (!v)
            return;
          const L = W(v);
          L.isValid() && !(o.lastSetBounds || o.leafletRef.getBounds()).equals(L, 0) && (o.lastSetBounds = L, o.leafletRef.fitBounds(L));
        },
        setCenter(v) {
          if (v == null)
            return;
          const L = oe(v), Z = o.lastSetCenter || o.leafletRef.getCenter();
          (Z.lat !== L.lat || Z.lng !== L.lng) && (o.lastSetCenter = L, o.leafletRef.panTo(L, N.value));
        }
      };
      Oe(i, te.addLayer), Oe(u, te.removeLayer), Oe(m, te.registerControl), Oe(S, te.registerLayerControl), o.leafletRef = P(_(t.value, a)), I(te, o.leafletRef, e), Ze(o.leafletRef, h), Ze(o.leafletRef, r), o.ready = !0, R(() => n.emit("ready", o.leafletRef));
    }), ve(() => {
      tt(h), o.leafletRef && (o.leafletRef.off(), o.leafletRef.remove());
    });
    const b = ne(() => o.leafletRef), p = ne(() => o.ready);
    return { root: t, ready: p, leafletObject: b, attrs: l };
  },
  render({ attrs: e }) {
    return e.style || (e.style = {}), e.style.width || (e.style.width = "100%"), e.style.height || (e.style.height = "100%"), re(
      "div",
      {
        ...e,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), bn = ["Symbol(Comment)", "Symbol(Text)"], Sn = ["LTooltip", "LPopup"], _t = {
  ...ce,
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
}, Ln = (e, n, t) => {
  const { options: o, methods: s } = ge(
    e,
    n,
    t
  ), a = k(
    e,
    _t,
    o
  ), r = {
    ...s,
    setDraggable(l) {
      n.value.dragging && (l ? n.value.dragging.enable() : n.value.dragging.disable());
    },
    latLngSync(l) {
      t.emit("update:latLng", l.latlng), t.emit("update:lat-lng", l.latlng);
    },
    setLatLng(l) {
      if (l != null && n.value) {
        const i = n.value.getLatLng();
        (!i || !i.equals(l)) && n.value.setLatLng(l);
      }
    }
  };
  return { options: a, methods: r };
}, On = (e, n) => {
  const t = n.slots.default && n.slots.default();
  return t && t.length && t.some(_n);
};
function _n(e) {
  return !(bn.includes(e.type.toString()) || Sn.includes(e.type.name));
}
T({
  name: "LMarker",
  props: _t,
  setup(e, n) {
    const t = c(), o = c(!1), s = w(F), a = C(z);
    Q(
      ot,
      () => {
        var u;
        return !!((u = t.value) != null && u.getElement());
      }
    ), Q(at, (u) => {
      var m, S;
      const N = ae((m = t.value) == null ? void 0 : m.getElement) && ((S = t.value) == null ? void 0 : S.getElement());
      N && (N.innerHTML = u);
    }), Q(
      lt,
      (u) => {
        var m;
        return ((m = t.value) == null ? void 0 : m.setIcon) && t.value.setIcon(u);
      }
    );
    const { options: r, methods: l } = Ln(e, t, n), i = {
      moveHandler: Ot(l.latLngSync)
    };
    return B(async () => {
      const { marker: u, divIcon: m } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      On(r, n) && (r.icon = m({ className: "" })), t.value = P(u(e.latLng, r));
      const { listeners: S } = U(n.attrs);
      t.value.on(S), t.value.on("move", i.moveHandler), I(l, t.value, e), a({
        ...e,
        ...l,
        leafletObject: t.value
      }), o.value = !0, R(() => n.emit("ready", t.value));
    }), ve(() => tt(i)), { ready: o, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const Ve = {
  ...xe,
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
}, wt = (e, n, t) => {
  const { options: o, methods: s } = dt(
    e,
    n,
    t
  ), a = k(
    e,
    Ve,
    o
  ), r = {
    ...s,
    setSmoothFactor(l) {
      n.value.setStyle({ smoothFactor: l });
    },
    setNoClip(l) {
      n.value.setStyle({ noClip: l });
    },
    addLatLng(l) {
      n.value.addLatLng(l);
    }
  };
  return { options: a, methods: r };
}, Te = {
  ...Ve
}, Ct = (e, n, t) => {
  const { options: o, methods: s } = wt(
    e,
    n,
    t
  ), a = k(
    e,
    Te,
    o
  ), r = {
    ...s,
    toGeoJSON(l) {
      return n.value.toGeoJSON(l);
    }
  };
  return { options: a, methods: r };
};
T({
  name: "LPolygon",
  props: Te,
  setup(e, n) {
    const t = c(), o = c(!1), s = w(F), a = C(z), { options: r, methods: l } = Ct(e, t, n);
    return B(async () => {
      const { polygon: i } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(i(e.latLngs, r));
      const { listeners: u } = U(n.attrs);
      t.value.on(u), I(l, t.value, e), a({
        ...e,
        ...l,
        leafletObject: t.value
      }), o.value = !0, R(() => n.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
T({
  name: "LPolyline",
  props: Ve,
  setup(e, n) {
    const t = c(), o = c(!1), s = w(F), a = C(z), { options: r, methods: l } = wt(e, t, n);
    return B(async () => {
      const { polyline: i } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        i(e.latLngs, r)
      );
      const { listeners: u } = U(n.attrs);
      t.value.on(u), I(l, t.value, e), a({
        ...e,
        ...l,
        leafletObject: t.value
      }), o.value = !0, R(() => n.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const jt = {
  ...ye,
  content: {
    type: String,
    default: null
  }
}, Tt = (e, n) => {
  const { options: t, methods: o } = he(e), s = {
    ...o,
    setContent(a) {
      n.value && a !== null && a !== void 0 && n.value.setContent(a);
    }
  };
  return { options: t, methods: s };
}, At = (e) => e.default ? re("div", { ref: "root" }, e.default()) : null, wn = {
  ...jt,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, Cn = (e, n) => {
  const { options: t, methods: o } = Tt(e, n);
  return { options: t, methods: o };
};
T({
  name: "LPopup",
  props: wn,
  setup(e, n) {
    const t = c(), o = c(null), s = w(F), a = C(st), r = C(it), { options: l, methods: i } = Cn(e, t);
    return B(async () => {
      const { popup: u } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(u(l)), e.latLng !== void 0 && t.value.setLatLng(e.latLng), I(i, t.value, e);
      const { listeners: m } = U(n.attrs);
      t.value.on(m), t.value.setContent(e.content || o.value || ""), a(t.value), R(() => n.emit("ready", t.value));
    }), ve(() => {
      r();
    }), { root: o, leafletObject: t };
  },
  render() {
    return At(this.$slots);
  }
});
const Et = {
  ...Te,
  latLngs: {
    ...Te.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, jn = (e, n, t) => {
  const { options: o, methods: s } = Ct(
    e,
    n,
    t
  ), a = k(
    e,
    Et,
    o
  ), r = {
    ...s,
    setBounds(l) {
      n.value.setBounds(l);
    },
    setLatLngs(l) {
      n.value.setBounds(l);
    }
  };
  return { options: a, methods: r };
};
T({
  name: "LRectangle",
  props: Et,
  setup(e, n) {
    const t = c(), o = c(!1), s = w(F), a = C(z), { options: r, methods: l } = jn(e, t, n);
    return B(async () => {
      const { rectangle: i, latLngBounds: u } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js"), m = e.bounds ? u(e.bounds) : u(e.latLngs || []);
      t.value = P(i(m, r));
      const { listeners: S } = U(n.attrs);
      t.value.on(S), I(l, t.value, e), a({
        ...e,
        ...l,
        leafletObject: t.value
      }), o.value = !0, R(() => n.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const Ue = {
  ...De,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (e) => typeof e == "string" ? !0 : Array.isArray(e) ? e.every((n) => typeof n == "string") : !1
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
}, Rt = (e, n, t) => {
  const { options: o, methods: s } = St(e, n, t), a = k(
    e,
    Ue,
    o
  ), r = {
    ...s
  };
  return { options: a, methods: r };
}, Tn = T({
  props: Ue,
  setup(e, n) {
    const t = c(), o = w(F), s = C(z), { options: a, methods: r } = Rt(e, t, n);
    return B(async () => {
      const { tileLayer: l } = o ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(l(e.url, a));
      const { listeners: i } = U(n.attrs);
      t.value.on(i), I(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), R(() => n.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), An = {
  ...jt
}, En = (e, n) => {
  const { options: t, methods: o } = Tt(e, n), s = C(ut);
  return ve(() => {
    s();
  }), { options: t, methods: o };
};
T({
  name: "LTooltip",
  props: An,
  setup(e, n) {
    const t = c(), o = c(null), s = w(F), a = C(rt), { options: r, methods: l } = En(e, t);
    return B(async () => {
      const { tooltip: i } = s ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(i(r)), I(l, t.value, e);
      const { listeners: u } = U(n.attrs);
      t.value.on(u), t.value.setContent(e.content || o.value || ""), a(t.value), R(() => n.emit("ready", t.value));
    }), { root: o, leafletObject: t };
  },
  render() {
    return At(this.$slots);
  }
});
const kt = {
  ...Ue,
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
}, Rn = (e, n, t) => {
  const { options: o, methods: s } = Rt(e, n, t);
  return {
    options: k(
      e,
      kt,
      o
    ),
    methods: {
      ...s
    }
  };
};
T({
  props: kt,
  setup(e, n) {
    const t = c(), o = w(F), s = C(z), { options: a, methods: r } = Rn(
      e,
      t,
      n
    );
    return B(async () => {
      const { tileLayer: l } = o ? A.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        l.wms(e.url, a)
      );
      const { listeners: i } = U(n.attrs);
      t.value.on(i), I(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), R(() => n.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const kn = { class: "filters" }, Bn = { class: "line" }, In = { class: "line__label" }, Fn = { class: "list_of_formats" }, Nn = { class: "line" }, Pn = { class: "line__label" }, xn = { class: "map" }, Mn = /* @__PURE__ */ T({
  __name: "FilterModal",
  props: {
    modelValue: {
      default: ue([
        { formats: {} },
        { mapSection: {} }
      ])
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: n }) {
    const { t } = et("pluginsEndpointfinder"), o = c(!1);
    n({
      run: () => {
        o.value = !o.value;
      }
    });
    const a = $t(e, "modelValue"), r = c([
      { name: "OGC", key: V.WMS, active: !0 },
      { name: "SensorThings", key: V.OGCSTA, active: !0 },
      { name: "XMLA", key: V.XMLA, active: !0 },
      { name: "CSV", key: V.CSV, active: !0 },
      { name: "JSON", key: V.JSON, active: !0 }
    ]), l = c(!1), i = c(null), u = ue({
      baseMapUrl: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
      zoom: 14,
      attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      center: [50.93115286, 11.60392726],
      map_filter_on: !1
    }), m = () => {
      const h = a.value?.find((p) => p.mapSection), b = a.value?.find((p) => p.formats);
      if (h) {
        u.map_filter_on = !0;
        try {
          i.value ?? {}.leafletObject.fitBounds(h.mapSection);
        } catch {
        }
      }
      b && (l.value = !0);
    }, S = () => {
      let h = a.value?.find((b) => b.mapSection);
      h || (h = { mapSection: {} }, a.value.push(h)), h.mapSection = i.value ?? {}.leafletObject.getBounds();
    };
    se(() => u.map_filter_on, (h) => {
      const b = a.value?.find((p) => p.mapSection);
      if (!h && b) {
        const p = a.value.indexOf(b);
        p != -1 && a.value.splice(p);
      }
    });
    const N = c(!1);
    se(l, (h) => {
      const b = a.value?.find((p) => p.formats);
      if (N.value) {
        N.value = !1;
        return;
      }
      if (b?.formats)
        if (h)
          r.value.forEach((p) => p.active = !1), b.formats.forEach((p) => {
            r.value.findLast((_) => _.key == p).active = !0;
          });
        else {
          const p = a.value.indexOf(b);
          p != -1 && a.value.splice(p), r.value.forEach((_) => _.active = !0);
        }
    });
    const g = (h) => {
      let b = a.value?.find((p) => p.formats);
      if (b || (b = { formats: [] }, a.value.push(b)), l.value) {
        h.active = !h.active;
        const p = b.formats.indexOf(h.key);
        p == -1 ? b.formats?.push(h.key) : b.formats?.splice(p), b.formats.length == 0 && (l.value = !1);
      } else
        N.value = !0, r.value.forEach((p) => p.active = !1), h.active = !0, b.formats = [h.key], l.value = !0;
    };
    return (h, b) => (j(), H(d(Ye), {
      modelValue: o.value,
      "onUpdate:modelValue": b[3] || (b[3] = (p) => o.value = p),
      title: d(t)("Finder.filter"),
      size: "md",
      onOpen: m
    }, {
      default: G(() => [
        E("div", kn, [
          E("div", Bn, [
            E("span", In, x(d(t)("Finder.format")), 1),
            M(d(qe), {
              modelValue: l.value,
              "onUpdate:modelValue": b[0] || (b[0] = (p) => l.value = p),
              label: d(t)("Finder.onlyFormats")
            }, null, 8, ["modelValue", "label"])
          ]),
          E("div", Fn, [
            (j(!0), q(Y, null, Ce(r.value, (p) => (j(), H(d(Pe), {
              key: p.key,
              tone: p.active ? "accent" : "neutral",
              class: "pointer",
              onClick: (_) => g(p)
            }, {
              default: G(() => [
                K(x(p.name), 1)
              ]),
              _: 2
            }, 1032, ["tone", "onClick"]))), 128))
          ]),
          M(d(Vt)),
          E("div", Nn, [
            E("span", Pn, x(d(t)("Finder.region")), 1),
            M(d(qe), {
              modelValue: u.map_filter_on,
              "onUpdate:modelValue": b[1] || (b[1] = (p) => u.map_filter_on = p),
              label: d(t)("Finder.onlyMapSection")
            }, null, 8, ["modelValue", "label"])
          ]),
          E("div", xn, [
            M(d(gn), {
              id: "map",
              ref_key: "map",
              ref: i,
              center: u.center,
              "max-zoom": 21,
              useGlobalLeaflet: !0,
              zoom: u.zoom,
              style: { height: "100%" },
              onMove: b[2] || (b[2] = () => {
                S(), u.map_filter_on = !0;
              })
            }, {
              default: G(() => [
                M(d(Tn), {
                  attribution: u.attribution,
                  options: { maxNativeZoom: 19, maxZoom: 25 },
                  url: u.baseMapUrl
                }, null, 8, ["attribution", "url"])
              ]),
              _: 1
            }, 8, ["center", "zoom"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "title"]));
  }
}), $n = /* @__PURE__ */ Ae(Mn, [["__scopeId", "data-v-66b5a078"]]), Dn = { class: "finder__title" }, Vn = ["aria-label"], Un = ["aria-current"], zn = { class: "step__label" }, Wn = { class: "finder" }, qn = { class: "search" }, Gn = {
  key: 0,
  class: "results"
}, Xn = {
  key: 0,
  class: "finder__lead"
}, Jn = {
  key: 1,
  class: "finder__warn"
}, Zn = { class: "pair" }, Hn = { class: "finder__lead" }, Kn = { class: "pair" }, Qn = { class: "finder__lead" }, Yn = { class: "widgets_grid" }, eo = ["onClick"], to = ["src"], no = /* @__PURE__ */ T({
  __name: "EndPointfinderModal",
  setup(e, { expose: n }) {
    const t = Xt(), { t: o } = et("pluginsEndpointfinder"), s = c(!1), a = qt(() => t.params.pageid ?? ""), r = () => {
      s.value = !s.value;
    }, l = c(0), i = w(Ge), u = Je(w(Xe), (O) => O.connections), m = Je(w(Xe), (O) => O.datasources), S = w(Gt), N = c([]), g = c([]), h = ue({
      step0: !1,
      step1: !0,
      step2: !0,
      step3: !0
    }), b = ne(() => [
      { label: o("Finder.steps.search"), icon: "travel_explore" },
      { label: o("Finder.steps.connection"), icon: "polyline" },
      { label: o("Finder.steps.source"), icon: "store" },
      { label: o("Finder.steps.widgets"), icon: "widgets" }
    ]), p = ue({
      searchString: "",
      loading: !1
    }), _ = c(null), D = async () => await _.value?.run(() => {
    }), $ = c(""), W = c([]), oe = c({});
    se(W, () => {
      if (!W.value) {
        $.value = "";
        return;
      }
      const O = Object.keys(W.value).reduce((y, f, X) => W.value[f] != null ? y + 1 : y, 0);
      if (O == 0) {
        $.value = "";
        return;
      }
      $.value = O.toString();
    }, { immediate: !0, deep: !0 });
    const J = ne(() => {
      let O = [];
      for (let y of Object.keys(oe.value))
        O = O.concat(
          oe.value[y].results?.bindings?.map((f) => (f.endpoint = { value: y }, f))
        );
      return O;
    }), ke = async () => {
      p.loading = !0;
      const O = p.searchString, y = Fe().getAllActiveEndpoints();
      y && (oe.value = await new Zt().setEndpoints(y).setFilter(W.value).query(O)), p.loading = !1;
    }, te = w(Ge), v = w(Wt);
    v.getDataSourceTypes();
    let L = c();
    c("rest");
    let Z = c();
    const Be = c(!1), le = c();
    se(le, () => {
      Be.value = !1;
      let O = null;
      try {
        O = new URL(le.value?.accessUrl?.value), L.value = It(le.value?.format?.value, O.origin);
      } catch (y) {
        console.log(y);
      }
      L.value ? h.step0 = !0 : (Be.value = !0, h.step0 = !1);
    }), se(l, (O) => {
      if (O == 2) {
        let y = null;
        try {
          if (y = new URL(le.value?.accessUrl?.value), !L.value) throw new Error("connection not found");
          const f = L.value?.uid;
          if (!f) throw new Error("id not found");
          Z.value = ue(Ft(le.value?.format?.value, f, y.pathname));
        } catch (f) {
          console.log(f);
        }
      }
      if (O === 3) {
        console.log(S.getAllWidgets());
        const y = Object.entries(S.getAllWidgets()).filter(([f, X]) => X.supportedDSTypes.includes(Z.value?.type)).filter(([f, X]) => X.icon).map(([f, X]) => ({ type: f, icon: X.icon }));
        console.log(y), N.value = y;
      }
    });
    const It = (O, y) => {
      let f;
      const X = te.getRegisteredTypes();
      switch ("<" + O + ">") {
        case V.CSV:
        case V.JSON:
        case V.REST:
        case V.OGCSTA:
          X.includes("rest") && (f = i.createConnection("rest", { url: y }));
          break;
        case V.XMLA:
          X.includes("xmla") && (f = i.createConnection("xmla", { url: y }));
          break;
      }
      return f;
    }, Ft = (O, y, f) => {
      switch ("<" + O + ">") {
        case V.CSV:
          return v.createDatasource("csv", { connection: y, resourceUrl: f, separators: "," });
        case V.JSON:
          return v.createDatasource("rest", { connection: y, resourceUrl: f });
        case V.REST:
          return v.createDatasource("rest", { connection: y, resourceUrl: f });
        case V.OGCSTA:
          return v.createDatasource("ogcsta", { connection: y, resourceUrl: f });
        case V.XMLA:
          return v.createDatasource("xmla", { connection: y, resourceUrl: f });
      }
      return null;
    }, Nt = ne(() => {
      const O = v.getDatasourceIdentifiers(Z.value.type);
      return v.resolveIdentifier(O.Settings);
    }), Pt = ne(() => {
      if (!L.value) return null;
      const O = te.getConnectionIdentifiers(L.value.type);
      return te.resolveIdentifier(O.Settings);
    }), ze = () => {
      g.value.length > 0 && g.value.forEach((O, y) => {
        a.addWidget({
          uid: "",
          type: O.type,
          config: { datasourceId: Z.value?.uid, settings: {} },
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
          x: 50 + y * 300,
          y: 50,
          width: 200,
          height: 100,
          z: 3005
        });
      }), g.value = [], L.value = void 0, Z.value = void 0, l.value = 0, W.value = [], p.searchString = "", oe.value = {}, h.step0 = !1, h.step1 = !0, h.step2 = !0, h.step3 = !0, s.value = !1;
    };
    return n({
      run: r
    }), (O, y) => (j(), q(Y, null, [
      M(d(Ye), {
        modelValue: s.value,
        "onUpdate:modelValue": y[3] || (y[3] = (f) => s.value = f),
        size: "lg",
        onCancel: y[4] || (y[4] = (f) => ze())
      }, {
        header: G(() => [
          E("h2", Dn, x(d(o)("Finder.title")), 1)
        ]),
        actions: G(() => [
          l.value != 3 ? (j(), H(d(je), {
            key: 0,
            intent: "primary",
            disabled: !h["step" + l.value],
            onClick: y[2] || (y[2] = (f) => l.value++)
          }, {
            default: G(() => [
              K(x(d(o)("Finder.next")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : (j(), H(d(je), {
            key: 1,
            intent: "primary",
            disabled: !h["step" + l.value],
            onClick: ze
          }, {
            default: G(() => [
              K(x(d(o)("common:Action.done")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]))
        ]),
        default: G(() => [
          E("ol", {
            class: "steps",
            "aria-label": d(o)("Finder.steps.label")
          }, [
            (j(!0), q(Y, null, Ce(b.value, (f, X) => (j(), q("li", {
              key: f.label,
              class: _e(["step", { "step--on": X === l.value, "step--done": X < l.value }]),
              "aria-current": X === l.value ? "step" : void 0
            }, [
              M(d(Ie), {
                name: f.icon,
                size: "sm"
              }, null, 8, ["name"]),
              E("span", zn, x(f.label), 1)
            ], 10, Un))), 128))
          ], 8, Vn),
          E("div", Wn, [
            l.value === 0 ? (j(), q(Y, { key: 0 }, [
              E("div", qn, [
                M(d(pe), {
                  modelValue: p.searchString,
                  "onUpdate:modelValue": y[0] || (y[0] = (f) => p.searchString = f),
                  label: d(o)("Finder.search"),
                  placeholder: d(o)("Finder.searchPlaceholder"),
                  onKeyup: y[1] || (y[1] = (f) => {
                    f.key == "Enter" && ke();
                  })
                }, null, 8, ["modelValue", "label", "placeholder"]),
                M(d(je), {
                  title: d(o)("Finder.filter"),
                  onClick: D
                }, {
                  default: G(() => [
                    M(d(Ie), {
                      name: "filter_alt",
                      size: "sm"
                    }),
                    K(x(d(o)("Finder.filter")), 1),
                    $.value ? (j(), H(d(Pe), {
                      key: 0,
                      numeric: ""
                    }, {
                      default: G(() => [
                        K(x($.value), 1)
                      ]),
                      _: 1
                    })) : Se("", !0)
                  ]),
                  _: 1
                }, 8, ["title"])
              ]),
              J.value.length > 0 ? (j(), q("div", Gn, [
                (j(!0), q(Y, null, Ce(J.value, (f) => (j(), H(on, {
                  key: f.title.value,
                  class: _e({ active: f == le.value }),
                  result: f,
                  onClick: (X) => le.value = f
                }, null, 8, ["class", "result", "onClick"]))), 128))
              ])) : Se("", !0)
            ], 64)) : l.value === 1 ? (j(), q(Y, { key: 1 }, [
              Be.value ? (j(), q("p", Jn, [
                M(d(Ie), {
                  name: "warning",
                  size: "lg",
                  tone: "color-warn"
                }),
                K(" " + x(d(o)("Finder.connectionUnknown")), 1)
              ])) : (j(), q("h3", Xn, x(d(o)("Finder.connectionLead")), 1)),
              E("div", Zn, [
                d(L) ? (j(), H(d(pe), {
                  key: 0,
                  "model-value": d(L)?.name,
                  label: d(o)("Finder.name"),
                  readonly: ""
                }, null, 8, ["model-value", "label"])) : Se("", !0),
                M(d(pe), {
                  "model-value": d(L)?.type,
                  label: d(o)("Finder.type"),
                  readonly: ""
                }, null, 8, ["model-value", "label"])
              ]),
              (j(), H(We(Pt.value), {
                config: d(L)?.config
              }, null, 8, ["config"]))
            ], 64)) : l.value === 2 ? (j(), q(Y, { key: 2 }, [
              E("h3", Hn, x(d(o)("Finder.sourceLead")), 1),
              E("div", Kn, [
                d(L) ? (j(), H(d(pe), {
                  key: 0,
                  "model-value": d(Z)?.name,
                  label: d(o)("Finder.name"),
                  readonly: ""
                }, null, 8, ["model-value", "label"])) : Se("", !0),
                M(d(pe), {
                  "model-value": d(Z)?.type,
                  label: d(o)("Finder.type"),
                  readonly: ""
                }, null, 8, ["model-value", "label"])
              ]),
              (j(), H(We(Nt.value), {
                config: d(Z).config,
                connections: d(u),
                dataSources: d(m)
              }, null, 8, ["config", "connections", "dataSources"]))
            ], 64)) : (j(), q(Y, { key: 3 }, [
              E("h3", Qn, x(d(o)("Finder.widgetsLead")), 1),
              E("div", Yn, [
                (j(!0), q(Y, null, Ce(N.value, (f) => (j(), q("button", {
                  key: f.type,
                  type: "button",
                  class: _e(["widgets_grid-item", { on: g.value.includes(f) }]),
                  onClick: () => {
                    g.value.includes(f) ? g.value.splice(g.value.indexOf(f), 1) : g.value.push(f);
                  }
                }, [
                  M(d(Ut), {
                    "model-value": g.value.includes(f)
                  }, null, 8, ["model-value"]),
                  E("img", {
                    src: f.icon,
                    alt: "",
                    class: "widgets_grid-icon"
                  }, null, 8, to),
                  K(" " + x(f.type), 1)
                ], 10, eo))), 128))
              ])
            ], 64))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      M($n, {
        ref_key: "loadModalref",
        ref: _,
        modelValue: W.value,
        "onUpdate:modelValue": y[5] || (y[5] = (f) => W.value = f)
      }, null, 8, ["modelValue"])
    ], 64));
  }
}), oo = /* @__PURE__ */ Ae(no, [["__scopeId", "data-v-91d68f9b"]]);
function ao(e, { props: n, children: t, element: o, app: s } = {}) {
  let a = o, r = M(e, n, t);
  return s && s._context && (r.appContext = s._context), a ? we(r, a) : typeof document < "u" && we(r, a = document.createElement("div")), { vNode: r, destroy: () => {
    a && we(null, a), a = null, r = null;
  }, el: a };
}
const lo = { title: "Datenquelle finden", steps: { label: "Schritte", search: "Suchen", connection: "Verbindung", source: "Datenquelle", widgets: "Widgets" }, search: "Suche", searchPlaceholder: "Wonach suchst du?", filter: "Filter", connectionLead: "Diese Verbindung wird angelegt:", connectionUnknown: "Die Verbindung lässt sich nicht automatisch bestimmen - das passiert, wenn der Typ des Datensatzes unbekannt oder nicht unterstützt ist. Du kannst sie von Hand einrichten.", sourceLead: "Diese Datenquelle wird angelegt:", widgetsLead: "Widgets zur Datenquelle auswählen", next: "Weiter", name: "Name", type: "Typ", format: "Format", onlyFormats: "Nur ausgewählte Formate", region: "Region", onlyMapSection: "Nur im Kartenausschnitt" }, so = {
  Finder: lo
}, ro = { title: "Find a data source", steps: { label: "Steps", search: "Search", connection: "Connection", source: "Data source", widgets: "Widgets" }, search: "Search", searchPlaceholder: "What are you looking for?", filter: "Filter", connectionLead: "This connection will be created:", connectionUnknown: "The connection cannot be determined automatically - this happens when the type of the dataset is unknown or not supported. You can set it up by hand.", sourceLead: "This data source will be created:", widgetsLead: "Choose widgets for the data source", next: "Next", name: "Name", type: "Type", format: "Format", onlyFormats: "Only selected formats", region: "Region", onlyMapSection: "Only within the map section" }, io = {
  Finder: ro
};
var uo = Object.getOwnPropertyDescriptor, co = (e, n, t, o) => {
  for (var s = o > 1 ? void 0 : o ? uo(n, t) : n, a = e.length - 1, r; a >= 0; a--)
    (r = e[a]) && (s = r(s) || s);
  return s;
};
const Bt = "pluginsEndpointfinder";
let Qe = class {
  namespace = Bt;
  resources = {
    de: so,
    en: io
  };
};
Qe = co([
  Jt({
    service: ["Translations"],
    properties: { "i18n.namespace": Bt }
  })
], Qe);
function Lo({ services: e, log: n }) {
  const t = {
    install(r) {
      const { vNode: l } = ao(oo, { props: {}, app: r });
      r.provide("endpointfinder", async () => {
        await l.component?.exposed?.run(() => {
        });
      });
    }
  };
  e.getRequired("App").use(t);
  const o = e.getRequired(zt), s = o.createConnection("rest", {
    url: "https://www.govdata.de/sparql"
  }), a = o.getConnection(s.uid);
  Fe().registerEndpoint(a, "SparqlDataEurope"), Fe().setActive("SparqlDataEurope"), n.info("Endpointfinder bereit");
}
export {
  Qe as PluginsEndpointfinderTranslations,
  Lo as activate
};
