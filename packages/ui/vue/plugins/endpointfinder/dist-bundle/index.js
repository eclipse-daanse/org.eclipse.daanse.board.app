(function(){var i="ui.vue.plugins.endpointfinder",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".aellipsis[data-v-c941f0d5]{line-height:23px;max-height:var(--v675a841f);text-overflow:ellipsis;overflow:hidden;color:var(--color-dim)}.aellipsis.expanded[data-v-c941f0d5]{max-height:100%}.card[data-v-728c3602]{border:0;border-bottom:1px solid var(--color-divider);border-radius:0;background:none;cursor:pointer}.card[data-v-728c3602]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.card__heading[data-v-728c3602]{display:flex;align-items:baseline;gap:8px;margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600}.aflex[data-v-728c3602]{display:flex;margin-top:12px;flex-direction:row;justify-content:space-between;flex-wrap:nowrap}.light[data-v-728c3602],.small[data-v-728c3602]{font-size:var(--text-sm);color:var(--color-dim)}.filters[data-v-c030b2d1]{display:flex;flex-direction:column;gap:14px}.list_of_formats[data-v-c030b2d1]{display:flex;flex-direction:row;gap:5px;flex-wrap:wrap;justify-content:flex-start}.map[data-v-c030b2d1]{width:100%;height:250px;position:relative}.line[data-v-c030b2d1]{display:flex;flex-direction:row;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between}.line__label[data-v-c030b2d1]{font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.pointer[data-v-c030b2d1]{cursor:pointer}.finder .store-item-header{display:none}.finder .store-item-content{border:none;padding:0}.finder .datasource-list .datasource-list-add-button{display:none}.finder__title[data-v-df78ab83]{margin:0;font-family:var(--font-sans);font-size:var(--text-lg);font-weight:600}.steps[data-v-df78ab83]{display:flex;flex-wrap:wrap;gap:18px;margin:0 0 18px;padding:0 0 12px;list-style:none;border-bottom:1px solid var(--color-divider);counter-reset:step}.step[data-v-df78ab83]{display:flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.step[data-v-df78ab83]:before{counter-increment:step;content:counter(step) \".\";font-variant-numeric:tabular-nums}.step--done[data-v-df78ab83]{color:var(--color-fg)}.step--on[data-v-df78ab83]{color:var(--color-accent);font-weight:600}.finder[data-v-df78ab83]{display:flex;flex-direction:column;gap:12px;max-height:62vh;overflow-y:auto}.finder__lead[data-v-df78ab83]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600}.finder__warn[data-v-df78ab83]{display:flex;align-items:flex-start;gap:9px;margin:0;font-family:var(--font-sans);font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}.search[data-v-df78ab83]{display:flex;align-items:flex-end;gap:10px}.search[data-v-df78ab83]>:first-child{flex:1 1 auto;min-width:0}.results[data-v-df78ab83]{display:flex;flex-direction:column}.pair[data-v-df78ab83]{display:flex;flex-wrap:wrap;gap:12px}.pair[data-v-df78ab83]>*{flex:1 1 200px;min-width:0}.widgets_grid[data-v-df78ab83]{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px}.widgets_grid-item[data-v-df78ab83]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:8px;padding:8px 10px;border:1px solid var(--color-divider);border-radius:var(--radius-sm);background-color:var(--color-raised);font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);cursor:pointer;text-align:left}.widgets_grid-item[data-v-df78ab83]:hover{border-color:var(--color-outline)}.widgets_grid-item.on[data-v-df78ab83]{border-color:var(--color-accent)}.widgets_grid-icon[data-v-df78ab83]{height:30px}\n";})();
import { defineComponent as _, useCssVars as It, computed as oe, ref as d, createElementBlock as G, openBlock as j, Fragment as Q, createElementVNode as T, createVNode as $, normalizeClass as we, renderSlot as Nt, unref as b, withCtx as U, createTextVNode as H, toDisplayString as Y, createBlock as Z, h as le, reactive as ue, provide as K, onMounted as B, markRaw as M, nextTick as A, onBeforeUnmount as me, inject as O, watch as ae, onUnmounted as Ne, render as _e, useModel as xt, renderList as je, createCommentVNode as Le, resolveDynamicComponent as Ue } from "vue";
import { DButton as Te, DCard as Pt, DChip as xe, DModal as Ke, DSwitch as qe, DDivider as Mt, DIcon as Be, DInput as ve, DCheckbox as $t } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { identifier as We, CONNECTION_REPOSITORY as Dt } from "org.eclipse.daanse.board.app.lib.api.connection";
import { identifier as Vt } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { identifier as Ge } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { useBoard as Ft, useEList as Xe } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as zt } from "org.eclipse.daanse.board.app.lib.api.widget";
import { useRoute as Ut } from "vue-router";
class qt {
  dss = {};
  filters = [];
  limit = 10;
  setEndpoints(o) {
    return this.dss = o, this;
  }
  setFilter(o) {
    return this.filters = o, this;
  }
  setLimit(o) {
    return o < 1 ? this : o > 1e3 ? this : (this.limit = o, this);
  }
  async query(o) {
    const t = [], n = [], l = [];
    this.filters.forEach((r) => {
      if (r.mapSection) {
        const i = r;
        l.push("PREFIX spatial: <http://geovocab.org/spatial#>"), l.push("PREFIX geo: <http://www.opengis.net/ont/geosparql#>"), n.push("?dataService dct:spatial ?location ."), n.push("?location geo:lat ?lat ;geo:long ?long ."), t.push(`FILTER (?lat >= ${i.mapSection._northEast.lat} && ?lat <= ${i.mapSection._southWest.lat})`), t.push(`FILTER (?long >= ${i.mapSection._northEast.lng} && ?long <= ${i.mapSection._southWest.lng})`);
      }
      if (r.formats) {
        let u = "FILTER (" + r.formats.map((h) => "?format =" + h).join("||") + ")";
        t.push(u);
      }
    });
    const s = `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX dc: <http://purl.org/dc/elements/1.1/>
            PREFIX dcat: <http://www.w3.org/ns/dcat#>
            PREFIX odp:  <http://data.europa.eu/euodp/ontologies/ec-odp#>
            PREFIX dct: <http://purl.org/dc/terms/>
            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
            PREFIX foaf: <http://xmlns.com/foaf/0.1/>
            PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
            ${l.join(`
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

            FILTER (CONTAINS(LCASE(?title), "${o.toLowerCase()}"))
            ${t.join(`
`)}
            }
            LIMIT ${this.limit}
        `;
    let a = {};
    for (const r of Object.entries(this.dss)) {
      let i = "query=" + encodeURIComponent(s);
      try {
        const u = await r[1].fetch({ url: "" }, {
          method: "POST",
          body: i,
          headers: {
            "User-Agent": "org.eclipse.daanse.datafinder.sparql/1.0",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
        a[r[0]] = await u.json();
      } catch (u) {
        console.log(u);
      }
    }
    return a;
  }
}
const fe = {}, ie = [];
function Ie() {
  return {
    registerEndpoint: (a, r) => {
      fe[r] = a;
    },
    getEndpointsByName: (a) => fe[a],
    getActiveEndpoints: (a) => {
      if (ie.includes(a))
        return fe[a];
    },
    setActive: (a) => {
      ie.includes(a) || fe[a] && ie.push(a);
    },
    setInActive: (a) => {
      const r = ie.indexOf(a);
      r != -1 && ie.splice(r);
    },
    getAllActiveEndpoints: () => Object.fromEntries(Object.entries(fe).filter((a) => ie.includes(a[0])))
  };
}
var V = /* @__PURE__ */ ((e) => (e.XMLA = "<http://publications.europa.eu/resource/authority/file-type/XMLA>", e.CSV = "<http://publications.europa.eu/resource/authority/file-type/CSV>", e.XML = "<http://publications.europa.eu/resource/authority/file-type/XML>", e.WMS = "<http://publications.europa.eu/resource/authority/file-type/WMS_SRVC>", e.WFS = "<http://publications.europa.eu/resource/authority/file-type/WFS_SRVC>", e.GEOJSON = "<http://publications.europa.eu/resource/authority/file-type/GEOJSON>", e.JSON = "<http://publications.europa.eu/resource/authority/file-type/JSON>", e.REST = "<http://publications.europa.eu/resource/authority/file-type/REST>", e.OGCSTA = "???", e))(V || {});
const Wt = /* @__PURE__ */ _({
  __name: "Ellipsis",
  props: {
    lines: { default: 3 }
  },
  setup(e) {
    It((l) => ({
      v675a841f: t.value
    }));
    const o = e, t = oe(() => o.lines * 23 + "px"), n = d(!1);
    return (l, s) => (j(), G(Q, null, [
      T("div", {
        class: we([{ expanded: n.value }, "aellipsis"])
      }, [
        Nt(l.$slots, "default", {}, void 0, !0)
      ], 2),
      $(b(Te), {
        intent: "quiet",
        size: "sm",
        onClick: s[0] || (s[0] = (a) => n.value = !n.value)
      }, {
        default: U(() => [
          H(Y(n.value ? "Weniger" : "Mehr"), 1)
        ]),
        _: 1
      })
    ], 64));
  }
}), Ae = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of o)
    t[n] = l;
  return t;
}, Gt = /* @__PURE__ */ Ae(Wt, [["__scopeId", "data-v-c941f0d5"]]), Xt = { class: "card__heading" }, Jt = { class: "aflex small light" }, Zt = { class: "right" }, Ht = { class: "left" }, Kt = /* @__PURE__ */ _({
  __name: "SearchResultCard",
  props: {
    result: {}
  },
  setup(e) {
    const o = e, t = (n) => {
      const l = Object.entries(V).filter((s, a) => s[1] == "<" + n + ">");
      return l && l[0] ? l[0][0] : n;
    };
    return (n, l) => (j(), Z(b(Pt), { class: "card" }, {
      header: U(() => [
        T("h3", Xt, [
          $(b(xe), null, {
            default: U(() => [
              H(Y(t(o.result.format.value)), 1)
            ]),
            _: 1
          }),
          H(" " + Y(o.result.title.value), 1)
        ])
      ]),
      default: U(() => [
        $(Gt, { lines: 3 }, {
          default: U(() => [
            H(Y(o.result.description.value), 1)
          ]),
          _: 1
        }),
        T("div", Jt, [
          T("div", Zt, Y(o.result.creator_name ? o.result.creator_name.value : ""), 1),
          T("div", Ht, Y(o.result.date ? o.result.date.value : ""), 1)
        ])
      ]),
      _: 1
    }));
  }
}), Qt = /* @__PURE__ */ Ae(Kt, [["__scopeId", "data-v-728c3602"]]), Je = (e, o) => {
  for (const t of Object.keys(o))
    e.on(t, o[t]);
}, Qe = (e) => {
  for (const o of Object.keys(e)) {
    const t = e[o];
    t && te(t.cancel) && t.cancel();
  }
}, Yt = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), te = (e) => typeof e == "function", I = (e, o, t) => {
  for (const n in t) {
    const l = "set" + Yt(n);
    e[l] ? ae(
      () => t[n],
      (s, a) => {
        e[l](s, a);
      }
    ) : o[l] && ae(
      () => t[n],
      (s) => {
        o[l](s);
      }
    );
  }
}, E = (e, o, t = {}) => {
  const n = { ...t };
  for (const l in e) {
    const s = o[l], a = e[l];
    s && (s && s.custom === !0 || a !== void 0 && (n[l] = a));
  }
  return n;
}, F = (e) => {
  const o = {}, t = {};
  for (const n in e)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const l = n.slice(2).toLocaleLowerCase();
      o[l] = e[n];
    } else
      t[n] = e[n];
  return { listeners: o, attrs: t };
}, eo = async (e) => {
  const o = await Promise.all([
    import("./marker-icon-2x-DVSLMKfE.js"),
    import("./marker-icon-DbhCZIpd.js"),
    import("./marker-shadow-ZZvxUwqf.js")
  ]);
  delete e.Default.prototype._getIconUrl, e.Default.mergeOptions({
    iconRetinaUrl: o[0].default,
    iconUrl: o[1].default,
    shadowUrl: o[2].default
  });
}, Oe = (e) => {
  const o = d(
    (...n) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), t = (...n) => o.value(...n);
  return t.wrapped = o, K(e, t), t;
}, Ce = (e, o) => e.wrapped.value = o, R = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, C = (e) => {
  const o = O(e);
  if (o === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return o;
}, N = Symbol(
  "useGlobalLeaflet"
), z = Symbol("addLayer"), Ee = Symbol("removeLayer"), ye = Symbol(
  "registerControl"
), Ye = Symbol(
  "registerLayerControl"
), et = Symbol(
  "canSetParentHtml"
), tt = Symbol("setParentHtml"), ot = Symbol("setIcon"), nt = Symbol("bindPopup"), at = Symbol("bindTooltip"), lt = Symbol("unbindPopup"), st = Symbol("unbindTooltip"), he = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, ge = (e) => ({ options: e.options, methods: {} }), de = {
  ...he,
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
}, be = (e, o, t) => {
  const n = C(z), l = C(Ee), { options: s, methods: a } = ge(e), r = E(
    e,
    de,
    s
  ), i = () => n({ leafletObject: o.value }), u = () => l({ leafletObject: o.value }), h = {
    ...a,
    setAttribution(g) {
      u(), o.value.options.attribution = g, e.visible && i();
    },
    setName() {
      u(), e.visible && i();
    },
    setLayerType() {
      u(), e.visible && i();
    },
    setVisible(g) {
      o.value && (g ? i() : u());
    },
    bindPopup(g) {
      if (!o.value || !te(o.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      o.value.bindPopup(g);
    },
    bindTooltip(g) {
      if (!o.value || !te(o.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      o.value.bindTooltip(g);
    },
    unbindTooltip() {
      o.value && (te(o.value.closeTooltip) && o.value.closeTooltip(), te(o.value.unbindTooltip) && o.value.unbindTooltip());
    },
    unbindPopup() {
      o.value && (te(o.value.closePopup) && o.value.closePopup(), te(o.value.unbindPopup) && o.value.unbindPopup());
    },
    updateVisibleProp(g) {
      t.emit("update:visible", g);
    }
  };
  return K(nt, h.bindPopup), K(at, h.bindTooltip), K(lt, h.unbindPopup), K(st, h.unbindTooltip), Ne(() => {
    h.unbindPopup(), h.unbindTooltip(), u();
  }), { options: r, methods: h };
}, ee = (e, o) => {
  if (e && o.default)
    return le("div", { style: { display: "none" } }, o.default());
}, rt = {
  ...de,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, to = (e, o, t) => {
  const { options: n, methods: l } = be(
    e,
    o,
    t
  );
  return { options: E(
    e,
    rt,
    n
  ), methods: l };
}, Pe = {
  ...rt,
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
}, it = (e, o, t) => {
  const { options: n, methods: l } = to(e, o, t), s = E(
    e,
    Pe,
    n
  ), a = C(Ee), r = {
    ...l,
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
  return me(() => {
    a({ leafletObject: o.value });
  }), { options: s, methods: r };
}, Me = {
  ...Pe,
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
}, ut = (e, o, t) => {
  const { options: n, methods: l } = it(
    e,
    o,
    t
  ), s = E(
    e,
    Me,
    n
  ), a = {
    ...l,
    setRadius(r) {
      o.value.setRadius(r);
    },
    setLatLng(r) {
      o.value.setLatLng(r);
    }
  };
  return { options: s, methods: a };
}, dt = {
  ...Me,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, oo = (e, o, t) => {
  const { options: n, methods: l } = ut(e, o, t), s = E(
    e,
    dt,
    n
  ), a = {
    ...l
  };
  return { options: s, methods: a };
};
_({
  name: "LCircle",
  props: dt,
  setup(e, o) {
    const t = d(), n = d(!1), l = O(N), s = C(z), { options: a, methods: r } = oo(e, t, o);
    return B(async () => {
      const { circle: i } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(i(e.latLng, a));
      const { listeners: u } = F(o.attrs);
      t.value.on(u), I(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, A(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
_({
  name: "LCircleMarker",
  props: Me,
  setup(e, o) {
    const t = d(), n = d(!1), l = O(N), s = C(z), { options: a, methods: r } = ut(
      e,
      t,
      o
    );
    return B(async () => {
      const { circleMarker: i } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(
        i(e.latLng, a)
      );
      const { listeners: u } = F(o.attrs);
      t.value.on(u), I(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, A(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const ce = {
  ...he,
  position: {
    type: String
  }
}, Se = (e, o) => {
  const { options: t, methods: n } = ge(e), l = E(
    e,
    ce,
    t
  ), s = {
    ...n,
    setPosition(a) {
      o.value && o.value.setPosition(a);
    }
  };
  return Ne(() => {
    o.value && o.value.remove();
  }), { options: l, methods: s };
}, no = (e) => e.default ? le("div", { ref: "root" }, e.default()) : null;
_({
  name: "LControl",
  props: {
    ...ce,
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
  setup(e, o) {
    const t = d(), n = d(), l = O(N), s = C(ye), { options: a, methods: r } = Se(e, t);
    return B(async () => {
      const { Control: i, DomEvent: u } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js"), h = i.extend({
        onAdd() {
          return n.value;
        }
      });
      t.value = M(new h(a)), I(r, t.value, e), s({ leafletObject: t.value }), e.disableClickPropagation && n.value && u.disableClickPropagation(n.value), e.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), A(() => o.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return no(this.$slots);
  }
});
const ct = {
  ...ce,
  prefix: {
    type: String
  }
}, ao = (e, o) => {
  const { options: t, methods: n } = Se(
    e,
    o
  ), l = E(
    e,
    ct,
    t
  ), s = {
    ...n,
    setPrefix(a) {
      o.value.setPrefix(a);
    }
  };
  return { options: l, methods: s };
};
_({
  name: "LControlAttribution",
  props: ct,
  setup(e, o) {
    const t = d(), n = O(N), l = C(ye), { options: s, methods: a } = ao(e, t);
    return B(async () => {
      const { control: r } = n ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(
        r.attribution(s)
      ), I(a, t.value, e), l({ leafletObject: t.value }), A(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const pt = {
  ...ce,
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
}, lo = (e, o) => {
  const { options: t } = Se(e, o);
  return { options: E(
    e,
    pt,
    t
  ), methods: {
    addLayer(n) {
      n.layerType === "base" ? o.value.addBaseLayer(n.leafletObject, n.name) : n.layerType === "overlay" && o.value.addOverlay(n.leafletObject, n.name);
    },
    removeLayer(n) {
      o.value.removeLayer(n.leafletObject);
    }
  } };
};
_({
  name: "LControlLayers",
  props: pt,
  setup(e, o) {
    const t = d(), n = O(N), l = C(Ye), { options: s, methods: a } = lo(e, t);
    return B(async () => {
      const { control: r } = n ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(
        r.layers(void 0, void 0, s)
      ), I(a, t.value, e), l({
        ...e,
        ...a,
        leafletObject: t.value
      }), A(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const vt = {
  ...ce,
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
}, so = (e, o) => {
  const { options: t, methods: n } = Se(
    e,
    o
  );
  return { options: E(
    e,
    vt,
    t
  ), methods: n };
};
_({
  name: "LControlScale",
  props: vt,
  setup(e, o) {
    const t = d(), n = O(N), l = C(ye), { options: s, methods: a } = so(e, t);
    return B(async () => {
      const { control: r } = n ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(r.scale(s)), I(a, t.value, e), l({ leafletObject: t.value }), A(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const ft = {
  ...ce,
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
}, ro = (e, o) => {
  const { options: t, methods: n } = Se(
    e,
    o
  );
  return { options: E(
    e,
    ft,
    t
  ), methods: n };
};
_({
  name: "LControlZoom",
  props: ft,
  setup(e, o) {
    const t = d(), n = O(N), l = C(ye), { options: s, methods: a } = ro(e, t);
    return B(async () => {
      const { control: r } = n ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(r.zoom(s)), I(a, t.value, e), l({ leafletObject: t.value }), A(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const ke = {
  ...de
}, $e = (e, o, t) => {
  const { options: n, methods: l } = be(
    e,
    o,
    t
  ), s = E(
    e,
    ke,
    n
  ), a = {
    ...l,
    addLayer(r) {
      o.value.addLayer(r.leafletObject);
    },
    removeLayer(r) {
      o.value.removeLayer(r.leafletObject);
    }
  };
  return K(z, a.addLayer), K(Ee, a.removeLayer), { options: s, methods: a };
}, mt = {
  ...ke
}, io = (e, o, t) => {
  const { options: n, methods: l } = $e(
    e,
    o,
    t
  ), s = E(
    e,
    mt,
    n
  ), a = {
    ...l
  };
  return { options: s, methods: a };
};
_({
  props: mt,
  setup(e, o) {
    const t = d(), n = d(!1), l = O(N), s = C(z), { methods: a, options: r } = io(
      e,
      t,
      o
    );
    return B(async () => {
      const { featureGroup: i } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(
        i(void 0, r)
      );
      const { listeners: u } = F(o.attrs);
      t.value.on(u), I(a, t.value, e), s({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = !0, A(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const yt = {
  ...ke,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, uo = (e, o, t) => {
  const { options: n, methods: l } = $e(
    e,
    o,
    t
  ), s = E(
    e,
    yt,
    n
  );
  Object.prototype.hasOwnProperty.call(e, "optionsStyle") && (s.style = e.optionsStyle);
  const a = {
    ...l,
    setGeojson(r) {
      o.value.clearLayers(), o.value.addData(r);
    },
    setOptionsStyle(r) {
      o.value.setStyle(r);
    },
    getGeoJSONData() {
      return o.value.toGeoJSON();
    },
    getBounds() {
      return o.value.getBounds();
    }
  };
  return { options: s, methods: a };
};
_({
  props: yt,
  setup(e, o) {
    const t = d(), n = d(!1), l = O(N), s = C(z), { methods: a, options: r } = uo(e, t, o);
    return B(async () => {
      const { geoJSON: i } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(i(e.geojson, r));
      const { listeners: u } = F(o.attrs);
      t.value.on(u), I(a, t.value, e), s({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = !0, A(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const De = {
  ...de,
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
}, ht = (e, o, t) => {
  const { options: n, methods: l } = be(
    e,
    o,
    t
  ), s = E(
    e,
    De,
    n
  ), a = {
    ...l,
    setTileComponent() {
      var r;
      (r = o.value) == null || r.redraw();
    }
  };
  return Ne(() => {
    o.value.off();
  }), { options: s, methods: a };
}, co = (e, o, t, n) => e.extend({
  initialize(l) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), t.setOptions(this, l);
  },
  createTile(l) {
    const s = this._tileCoordsToKey(l);
    this.tileComponents[s] = o.create("div");
    const a = le({ setup: n, props: ["coords"] }, { coords: l });
    return _e(a, this.tileComponents[s]), this.tileComponents[s];
  },
  _unloadTile(l) {
    const s = this._tileCoordsToKey(l.coords);
    this.tileComponents[s] && (this.tileComponents[s].innerHTML = "", this.tileComponents[s] = void 0);
  }
});
_({
  props: {
    ...De,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(e, o) {
    const t = d(), n = d(null), l = d(!1), s = O(N), a = C(z), { options: r, methods: i } = ht(e, t, o);
    return B(async () => {
      const { GridLayer: u, DomUtil: h, Util: g } = s ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js"), w = co(
        u,
        h,
        g,
        e.childRender
      );
      t.value = M(new w(r));
      const { listeners: c } = F(o.attrs);
      t.value.on(c), I(i, t.value, e), a({
        ...e,
        ...i,
        leafletObject: t.value
      }), l.value = !0, A(() => o.emit("ready", t.value));
    }), { root: n, ready: l, leafletObject: t };
  },
  render() {
    return this.ready ? le("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const Ze = {
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
_({
  name: "LIcon",
  props: {
    ...Ze,
    ...he
  },
  setup(e, o) {
    const t = d(), n = O(N), l = C(et), s = C(tt), a = C(ot);
    let r, i, u, h, g;
    const w = (D, k, x) => {
      const P = D && D.innerHTML;
      if (!k) {
        x && g && l() && s(P);
        return;
      }
      const { listeners: X } = F(o.attrs);
      g && i(g, X);
      const { options: se } = ge(e), J = E(
        e,
        Ze,
        se
      );
      P && (J.html = P), g = J.html ? u(J) : h(J), r(g, X), a(g);
    }, c = () => {
      A(() => w(t.value, !0, !1));
    }, y = () => {
      A(() => w(t.value, !1, !0));
    }, f = {
      setIconUrl: c,
      setIconRetinaUrl: c,
      setIconSize: c,
      setIconAnchor: c,
      setPopupAnchor: c,
      setTooltipAnchor: c,
      setShadowUrl: c,
      setShadowRetinaUrl: c,
      setShadowAnchor: c,
      setBgPos: c,
      setClassName: c,
      setHtml: c
    };
    return B(async () => {
      const {
        DomEvent: D,
        divIcon: k,
        icon: x
      } = n ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r = D.on, i = D.off, u = k, h = x, I(f, {}, e), new MutationObserver(y).observe(t.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), c();
    }), { root: t };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return le("div", { ref: "root" }, e);
  }
});
const gt = {
  ...de,
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
}, po = (e, o, t) => {
  const { options: n, methods: l } = be(
    e,
    o,
    t
  ), s = E(
    e,
    gt,
    n
  ), a = {
    ...l,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(r) {
      return o.value.setOpacity(r);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(r) {
      return o.value.setUrl(r);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(r) {
      return o.value.setBounds(r);
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
    setZIndex(r) {
      return o.value.setZIndex(r);
    }
  };
  return { options: s, methods: a };
};
_({
  name: "LImageOverlay",
  props: gt,
  setup(e, o) {
    const t = d(), n = d(!1), l = O(N), s = C(z), { options: a, methods: r } = po(
      e,
      t,
      o
    );
    return B(async () => {
      const { imageOverlay: i } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(
        i(e.url, e.bounds, a)
      );
      const { listeners: u } = F(o.attrs);
      t.value.on(u), I(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, A(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
_({
  props: ke,
  setup(e, o) {
    const t = d(), n = d(!1), l = O(N), s = C(z), { methods: a } = $e(e, t, o);
    return B(async () => {
      const { layerGroup: r } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(
        r(void 0, e.options)
      );
      const { listeners: i } = F(o.attrs);
      t.value.on(i), I(a, t.value, e), s({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = !0, A(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
function bt(e, o, t) {
  var n, l, s;
  o === void 0 && (o = 50), t === void 0 && (t = {});
  var a = (n = t.isImmediate) != null && n, r = (l = t.callback) != null && l, i = t.maxWait, u = Date.now(), h = [];
  function g() {
    if (i !== void 0) {
      var c = Date.now() - u;
      if (c + o >= i)
        return i - c;
    }
    return o;
  }
  var w = function() {
    var c = [].slice.call(arguments), y = this;
    return new Promise(function(f, D) {
      var k = a && s === void 0;
      if (s !== void 0 && clearTimeout(s), s = setTimeout(function() {
        if (s = void 0, u = Date.now(), !a) {
          var P = e.apply(y, c);
          r && r(P), h.forEach(function(X) {
            return (0, X.resolve)(P);
          }), h = [];
        }
      }, g()), k) {
        var x = e.apply(y, c);
        return r && r(x), f(x);
      }
      h.push({ resolve: f, reject: D });
    });
  };
  return w.cancel = function(c) {
    s !== void 0 && clearTimeout(s), h.forEach(function(y) {
      return (0, y.reject)(c);
    }), h = [];
  }, w;
}
const He = {
  ...he,
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
}, vo = _({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: He,
  setup(e, o) {
    const t = d(), n = ue({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: l } = ge(e), s = E(
      e,
      He,
      l
    ), { listeners: a, attrs: r } = F(o.attrs), i = Oe(z), u = Oe(Ee), h = Oe(ye), g = Oe(
      Ye
    );
    K(N, e.useGlobalLeaflet);
    const w = oe(() => {
      const k = {};
      return e.noBlockingAnimations && (k.animate = !1), k;
    }), c = oe(() => {
      const k = w.value;
      return e.padding && (k.padding = e.padding), e.paddingTopLeft && (k.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (k.paddingBottomRight = e.paddingBottomRight), k;
    }), y = {
      moveend: bt((k) => {
        n.leafletRef && (o.emit("update:zoom", n.leafletRef.getZoom()), o.emit("update:center", n.leafletRef.getCenter()), o.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(k) {
        const x = n.layersInControl.find((P) => P.name === k.name);
        x && x.updateVisibleProp(!0);
      },
      overlayremove(k) {
        const x = n.layersInControl.find((P) => P.name === k.name);
        x && x.updateVisibleProp(!1);
      }
    };
    B(async () => {
      e.useGlobalLeaflet && (R.L = R.L || await import("./leaflet-src-BDi_6Owi.js").then((m) => m.l));
      const { map: k, CRS: x, Icon: P, latLngBounds: X, latLng: se, stamp: J } = e.useGlobalLeaflet ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        s.beforeMapMount && await s.beforeMapMount();
      } catch (m) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${m.message}`
        );
      }
      await eo(P);
      const pe = typeof s.crs == "string" ? x[s.crs] : s.crs;
      s.crs = pe || x.EPSG3857;
      const q = {
        addLayer(m) {
          m.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(m) : n.layersInControl.find(
            (S) => J(S.leafletObject) === J(m.leafletObject)
          ) || (n.layerControl.addLayer(m), n.layersInControl.push(m))), m.visible !== !1 && n.leafletRef.addLayer(m.leafletObject);
        },
        removeLayer(m) {
          m.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (S) => S.name !== m.name
          ) : (n.layerControl.removeLayer(m.leafletObject), n.layersInControl = n.layersInControl.filter(
            (S) => J(S.leafletObject) !== J(m.leafletObject)
          ))), n.leafletRef.removeLayer(m.leafletObject);
        },
        registerLayerControl(m) {
          n.layerControl = m, n.layersToAdd.forEach((S) => {
            n.layerControl.addLayer(S);
          }), n.layersToAdd = [], h(m);
        },
        registerControl(m) {
          n.leafletRef.addControl(m.leafletObject);
        },
        setZoom(m) {
          const S = n.leafletRef.getZoom();
          m !== S && n.leafletRef.setZoom(m, w.value);
        },
        setCrs(m) {
          const S = n.leafletRef.getBounds();
          n.leafletRef.options.crs = m, n.leafletRef.fitBounds(S, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(m) {
          n.leafletRef.fitBounds(m, c.value);
        },
        setBounds(m) {
          if (!m)
            return;
          const S = X(m);
          S.isValid() && !(n.lastSetBounds || n.leafletRef.getBounds()).equals(S, 0) && (n.lastSetBounds = S, n.leafletRef.fitBounds(S));
        },
        setCenter(m) {
          if (m == null)
            return;
          const S = se(m), re = n.lastSetCenter || n.leafletRef.getCenter();
          (re.lat !== S.lat || re.lng !== S.lng) && (n.lastSetCenter = S, n.leafletRef.panTo(S, w.value));
        }
      };
      Ce(i, q.addLayer), Ce(u, q.removeLayer), Ce(h, q.registerControl), Ce(g, q.registerLayerControl), n.leafletRef = M(k(t.value, s)), I(q, n.leafletRef, e), Je(n.leafletRef, y), Je(n.leafletRef, a), n.ready = !0, A(() => o.emit("ready", n.leafletRef));
    }), me(() => {
      Qe(y), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const f = oe(() => n.leafletRef), D = oe(() => n.ready);
    return { root: t, ready: D, leafletObject: f, attrs: r };
  },
  render({ attrs: e }) {
    return e.style || (e.style = {}), e.style.width || (e.style.width = "100%"), e.style.height || (e.style.height = "100%"), le(
      "div",
      {
        ...e,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), fo = ["Symbol(Comment)", "Symbol(Text)"], mo = ["LTooltip", "LPopup"], St = {
  ...de,
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
}, yo = (e, o, t) => {
  const { options: n, methods: l } = be(
    e,
    o,
    t
  ), s = E(
    e,
    St,
    n
  ), a = {
    ...l,
    setDraggable(r) {
      o.value.dragging && (r ? o.value.dragging.enable() : o.value.dragging.disable());
    },
    latLngSync(r) {
      t.emit("update:latLng", r.latlng), t.emit("update:lat-lng", r.latlng);
    },
    setLatLng(r) {
      if (r != null && o.value) {
        const i = o.value.getLatLng();
        (!i || !i.equals(r)) && o.value.setLatLng(r);
      }
    }
  };
  return { options: s, methods: a };
}, ho = (e, o) => {
  const t = o.slots.default && o.slots.default();
  return t && t.length && t.some(go);
};
function go(e) {
  return !(fo.includes(e.type.toString()) || mo.includes(e.type.name));
}
_({
  name: "LMarker",
  props: St,
  setup(e, o) {
    const t = d(), n = d(!1), l = O(N), s = C(z);
    K(
      et,
      () => {
        var u;
        return !!((u = t.value) != null && u.getElement());
      }
    ), K(tt, (u) => {
      var h, g;
      const w = te((h = t.value) == null ? void 0 : h.getElement) && ((g = t.value) == null ? void 0 : g.getElement());
      w && (w.innerHTML = u);
    }), K(
      ot,
      (u) => {
        var h;
        return ((h = t.value) == null ? void 0 : h.setIcon) && t.value.setIcon(u);
      }
    );
    const { options: a, methods: r } = yo(e, t, o), i = {
      moveHandler: bt(r.latLngSync)
    };
    return B(async () => {
      const { marker: u, divIcon: h } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      ho(a, o) && (a.icon = h({ className: "" })), t.value = M(u(e.latLng, a));
      const { listeners: g } = F(o.attrs);
      t.value.on(g), t.value.on("move", i.moveHandler), I(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, A(() => o.emit("ready", t.value));
    }), me(() => Qe(i)), { ready: n, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const Ve = {
  ...Pe,
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
}, Lt = (e, o, t) => {
  const { options: n, methods: l } = it(
    e,
    o,
    t
  ), s = E(
    e,
    Ve,
    n
  ), a = {
    ...l,
    setSmoothFactor(r) {
      o.value.setStyle({ smoothFactor: r });
    },
    setNoClip(r) {
      o.value.setStyle({ noClip: r });
    },
    addLatLng(r) {
      o.value.addLatLng(r);
    }
  };
  return { options: s, methods: a };
}, Re = {
  ...Ve
}, Ot = (e, o, t) => {
  const { options: n, methods: l } = Lt(
    e,
    o,
    t
  ), s = E(
    e,
    Re,
    n
  ), a = {
    ...l,
    toGeoJSON(r) {
      return o.value.toGeoJSON(r);
    }
  };
  return { options: s, methods: a };
};
_({
  name: "LPolygon",
  props: Re,
  setup(e, o) {
    const t = d(), n = d(!1), l = O(N), s = C(z), { options: a, methods: r } = Ot(e, t, o);
    return B(async () => {
      const { polygon: i } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(i(e.latLngs, a));
      const { listeners: u } = F(o.attrs);
      t.value.on(u), I(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, A(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
_({
  name: "LPolyline",
  props: Ve,
  setup(e, o) {
    const t = d(), n = d(!1), l = O(N), s = C(z), { options: a, methods: r } = Lt(e, t, o);
    return B(async () => {
      const { polyline: i } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(
        i(e.latLngs, a)
      );
      const { listeners: u } = F(o.attrs);
      t.value.on(u), I(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, A(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const Ct = {
  ...he,
  content: {
    type: String,
    default: null
  }
}, wt = (e, o) => {
  const { options: t, methods: n } = ge(e), l = {
    ...n,
    setContent(s) {
      o.value && s !== null && s !== void 0 && o.value.setContent(s);
    }
  };
  return { options: t, methods: l };
}, _t = (e) => e.default ? le("div", { ref: "root" }, e.default()) : null, bo = {
  ...Ct,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, So = (e, o) => {
  const { options: t, methods: n } = wt(e, o);
  return { options: t, methods: n };
};
_({
  name: "LPopup",
  props: bo,
  setup(e, o) {
    const t = d(), n = d(null), l = O(N), s = C(nt), a = C(lt), { options: r, methods: i } = So(e, t);
    return B(async () => {
      const { popup: u } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(u(r)), e.latLng !== void 0 && t.value.setLatLng(e.latLng), I(i, t.value, e);
      const { listeners: h } = F(o.attrs);
      t.value.on(h), t.value.setContent(e.content || n.value || ""), s(t.value), A(() => o.emit("ready", t.value));
    }), me(() => {
      a();
    }), { root: n, leafletObject: t };
  },
  render() {
    return _t(this.$slots);
  }
});
const jt = {
  ...Re,
  latLngs: {
    ...Re.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, Lo = (e, o, t) => {
  const { options: n, methods: l } = Ot(
    e,
    o,
    t
  ), s = E(
    e,
    jt,
    n
  ), a = {
    ...l,
    setBounds(r) {
      o.value.setBounds(r);
    },
    setLatLngs(r) {
      o.value.setBounds(r);
    }
  };
  return { options: s, methods: a };
};
_({
  name: "LRectangle",
  props: jt,
  setup(e, o) {
    const t = d(), n = d(!1), l = O(N), s = C(z), { options: a, methods: r } = Lo(e, t, o);
    return B(async () => {
      const { rectangle: i, latLngBounds: u } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js"), h = e.bounds ? u(e.bounds) : u(e.latLngs || []);
      t.value = M(i(h, a));
      const { listeners: g } = F(o.attrs);
      t.value.on(g), I(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, A(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return ee(this.ready, this.$slots);
  }
});
const Fe = {
  ...De,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (e) => typeof e == "string" ? !0 : Array.isArray(e) ? e.every((o) => typeof o == "string") : !1
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
}, Tt = (e, o, t) => {
  const { options: n, methods: l } = ht(e, o, t), s = E(
    e,
    Fe,
    n
  ), a = {
    ...l
  };
  return { options: s, methods: a };
}, Oo = _({
  props: Fe,
  setup(e, o) {
    const t = d(), n = O(N), l = C(z), { options: s, methods: a } = Tt(e, t, o);
    return B(async () => {
      const { tileLayer: r } = n ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(r(e.url, s));
      const { listeners: i } = F(o.attrs);
      t.value.on(i), I(a, t.value, e), l({
        ...e,
        ...a,
        leafletObject: t.value
      }), A(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), Co = {
  ...Ct
}, wo = (e, o) => {
  const { options: t, methods: n } = wt(e, o), l = C(st);
  return me(() => {
    l();
  }), { options: t, methods: n };
};
_({
  name: "LTooltip",
  props: Co,
  setup(e, o) {
    const t = d(), n = d(null), l = O(N), s = C(at), { options: a, methods: r } = wo(e, t);
    return B(async () => {
      const { tooltip: i } = l ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(i(a)), I(r, t.value, e);
      const { listeners: u } = F(o.attrs);
      t.value.on(u), t.value.setContent(e.content || n.value || ""), s(t.value), A(() => o.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return _t(this.$slots);
  }
});
const Rt = {
  ...Fe,
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
}, _o = (e, o, t) => {
  const { options: n, methods: l } = Tt(e, o, t);
  return {
    options: E(
      e,
      Rt,
      n
    ),
    methods: {
      ...l
    }
  };
};
_({
  props: Rt,
  setup(e, o) {
    const t = d(), n = O(N), l = C(z), { options: s, methods: a } = _o(
      e,
      t,
      o
    );
    return B(async () => {
      const { tileLayer: r } = n ? R.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = M(
        r.wms(e.url, s)
      );
      const { listeners: i } = F(o.attrs);
      t.value.on(i), I(a, t.value, e), l({
        ...e,
        ...a,
        leafletObject: t.value
      }), A(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const jo = { class: "filters" }, To = { class: "line" }, Ro = { class: "list_of_formats" }, Ao = { class: "line" }, Eo = { class: "map" }, ko = /* @__PURE__ */ _({
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
  setup(e, { expose: o }) {
    const t = d(!1);
    o({
      run: () => {
        t.value = !t.value;
      }
    });
    const l = xt(e, "modelValue"), s = d([
      { name: "OGC", key: V.WMS, active: !0 },
      { name: "SensorThings", key: V.OGCSTA, active: !0 },
      { name: "XMLA", key: V.XMLA, active: !0 },
      { name: "CSV", key: V.CSV, active: !0 },
      { name: "JSON", key: V.JSON, active: !0 }
    ]), a = d(!1), r = d(null), i = ue({
      baseMapUrl: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
      zoom: 14,
      attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      center: [50.93115286, 11.60392726],
      map_filter_on: !1
    }), u = () => {
      const c = l.value?.find((f) => f.mapSection), y = l.value?.find((f) => f.formats);
      if (c) {
        i.map_filter_on = !0;
        try {
          r.value ?? {}.leafletObject.fitBounds(c.mapSection);
        } catch {
        }
      }
      y && (a.value = !0);
    }, h = () => {
      let c = l.value?.find((y) => y.mapSection);
      c || (c = { mapSection: {} }, l.value.push(c)), c.mapSection = r.value ?? {}.leafletObject.getBounds();
    };
    ae(() => i.map_filter_on, (c) => {
      const y = l.value?.find((f) => f.mapSection);
      if (!c && y) {
        const f = l.value.indexOf(y);
        f != -1 && l.value.splice(f);
      }
    });
    const g = d(!1);
    ae(a, (c) => {
      const y = l.value?.find((f) => f.formats);
      if (g.value) {
        g.value = !1;
        return;
      }
      if (y?.formats)
        if (c)
          s.value.forEach((f) => f.active = !1), y.formats.forEach((f) => {
            s.value.findLast((D) => D.key == f).active = !0;
          });
        else {
          const f = l.value.indexOf(y);
          f != -1 && l.value.splice(f), s.value.forEach((D) => D.active = !0);
        }
    });
    const w = (c) => {
      let y = l.value?.find((f) => f.formats);
      if (y || (y = { formats: [] }, l.value.push(y)), a.value) {
        c.active = !c.active;
        const f = y.formats.indexOf(c.key);
        f == -1 ? y.formats?.push(c.key) : y.formats?.splice(f), y.formats.length == 0 && (a.value = !1);
      } else
        g.value = !0, s.value.forEach((f) => f.active = !1), c.active = !0, y.formats = [c.key], a.value = !0;
    };
    return (c, y) => (j(), Z(b(Ke), {
      modelValue: t.value,
      "onUpdate:modelValue": y[3] || (y[3] = (f) => t.value = f),
      title: "Filter",
      size: "md",
      onOpen: u
    }, {
      default: U(() => [
        T("div", jo, [
          T("div", To, [
            y[4] || (y[4] = T("span", { class: "line__label" }, "Format", -1)),
            $(b(qe), {
              modelValue: a.value,
              "onUpdate:modelValue": y[0] || (y[0] = (f) => a.value = f),
              label: "Nur ausgewählte Formate"
            }, null, 8, ["modelValue"])
          ]),
          T("div", Ro, [
            (j(!0), G(Q, null, je(s.value, (f) => (j(), Z(b(xe), {
              key: f.key,
              tone: f.active ? "accent" : "neutral",
              class: "pointer",
              onClick: (D) => w(f)
            }, {
              default: U(() => [
                H(Y(f.name), 1)
              ]),
              _: 2
            }, 1032, ["tone", "onClick"]))), 128))
          ]),
          $(b(Mt)),
          T("div", Ao, [
            y[5] || (y[5] = T("span", { class: "line__label" }, "Region", -1)),
            $(b(qe), {
              modelValue: i.map_filter_on,
              "onUpdate:modelValue": y[1] || (y[1] = (f) => i.map_filter_on = f),
              label: "Nur im Kartenausschnitt"
            }, null, 8, ["modelValue"])
          ]),
          T("div", Eo, [
            $(b(vo), {
              id: "map",
              ref_key: "map",
              ref: r,
              center: i.center,
              "max-zoom": 21,
              useGlobalLeaflet: !0,
              zoom: i.zoom,
              style: { height: "100%" },
              onMove: y[2] || (y[2] = () => {
                h(), i.map_filter_on = !0;
              })
            }, {
              default: U(() => [
                $(b(Oo), {
                  attribution: i.attribution,
                  options: { maxNativeZoom: 19, maxZoom: 25 },
                  url: i.baseMapUrl
                }, null, 8, ["attribution", "url"])
              ]),
              _: 1
            }, 8, ["center", "zoom"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Bo = /* @__PURE__ */ Ae(ko, [["__scopeId", "data-v-c030b2d1"]]), Io = {
  class: "steps",
  "aria-label": "Schritte"
}, No = ["aria-current"], xo = { class: "step__label" }, Po = { class: "finder" }, Mo = { class: "search" }, $o = {
  key: 0,
  class: "results"
}, Do = {
  key: 0,
  class: "finder__lead"
}, Vo = {
  key: 1,
  class: "finder__warn"
}, Fo = { class: "pair" }, zo = { class: "pair" }, Uo = { class: "widgets_grid" }, qo = ["onClick"], Wo = ["src"], Go = /* @__PURE__ */ _({
  __name: "EndPointfinderModal",
  setup(e, { expose: o }) {
    const t = Ut(), n = d(!1), l = Ft(() => t.params.pageid ?? ""), s = () => {
      n.value = !n.value;
    }, a = d(0), r = O(We), i = Xe(O(Ge), (L) => L.connections), u = Xe(O(Ge), (L) => L.datasources), h = O(zt), g = d([]), w = d([]), c = ue({
      step0: !1,
      step1: !0,
      step2: !0,
      step3: !0
    }), y = [
      { label: "Suchen", icon: "travel_explore" },
      { label: "Verbindung", icon: "polyline" },
      { label: "Datenquelle", icon: "store" },
      { label: "Widgets", icon: "widgets" }
    ], f = ue({
      searchString: "",
      loading: !1
    }), D = d(null), k = async () => await D.value?.run(() => {
    }), x = d(""), P = d([]), X = d({});
    ae(P, () => {
      if (!P.value) {
        x.value = "";
        return;
      }
      const L = Object.keys(P.value).reduce((p, v, W) => P.value[v] != null ? p + 1 : p, 0);
      if (L == 0) {
        x.value = "";
        return;
      }
      x.value = L.toString();
    }, { immediate: !0, deep: !0 });
    const se = oe(() => {
      let L = [];
      for (let p of Object.keys(X.value))
        L = L.concat(
          X.value[p].results?.bindings?.map((v) => (v.endpoint = { value: p }, v))
        );
      return L;
    }), J = async () => {
      f.loading = !0;
      const L = f.searchString, p = Ie().getAllActiveEndpoints();
      p && (X.value = await new qt().setEndpoints(p).setFilter(P.value).query(L)), f.loading = !1;
    }, pe = O(We), q = O(Vt);
    q.getDataSourceTypes();
    let m = d();
    d("rest");
    let S = d();
    const re = d(!1), ne = d();
    ae(ne, () => {
      re.value = !1;
      let L = null;
      try {
        L = new URL(ne.value?.accessUrl?.value), m.value = At(ne.value?.format?.value, L.origin);
      } catch (p) {
        console.log(p);
      }
      m.value ? c.step0 = !0 : (re.value = !0, c.step0 = !1);
    }), ae(a, (L) => {
      if (L == 2) {
        let p = null;
        try {
          if (p = new URL(ne.value?.accessUrl?.value), !m.value) throw new Error("connection not found");
          const v = m.value?.uid;
          if (!v) throw new Error("id not found");
          S.value = ue(Et(ne.value?.format?.value, v, p.pathname));
        } catch (v) {
          console.log(v);
        }
      }
      if (L === 3) {
        console.log(h.getAllWidgets());
        const p = Object.entries(h.getAllWidgets()).filter(([v, W]) => W.supportedDSTypes.includes(S.value?.type)).filter(([v, W]) => W.icon).map(([v, W]) => ({ type: v, icon: W.icon }));
        console.log(p), g.value = p;
      }
    });
    const At = (L, p) => {
      let v;
      const W = pe.getRegisteredTypes();
      switch ("<" + L + ">") {
        case V.CSV:
        case V.JSON:
        case V.REST:
        case V.OGCSTA:
          W.includes("rest") && (v = r.createConnection("rest", { url: p }));
          break;
        case V.XMLA:
          W.includes("xmla") && (v = r.createConnection("xmla", { url: p }));
          break;
      }
      return v;
    }, Et = (L, p, v) => {
      switch ("<" + L + ">") {
        case V.CSV:
          return q.createDatasource("csv", { connection: p, resourceUrl: v, separators: "," });
        case V.JSON:
          return q.createDatasource("rest", { connection: p, resourceUrl: v });
        case V.REST:
          return q.createDatasource("rest", { connection: p, resourceUrl: v });
        case V.OGCSTA:
          return q.createDatasource("ogcsta", { connection: p, resourceUrl: v });
        case V.XMLA:
          return q.createDatasource("xmla", { connection: p, resourceUrl: v });
      }
      return null;
    }, kt = oe(() => {
      const L = q.getDatasourceIdentifiers(S.value.type);
      return q.resolveIdentifier(L.Settings);
    }), Bt = oe(() => {
      if (!m.value) return null;
      const L = pe.getConnectionIdentifiers(m.value.type);
      return pe.resolveIdentifier(L.Settings);
    }), ze = () => {
      w.value.length > 0 && w.value.forEach((L, p) => {
        l.addWidget({
          uid: "",
          type: L.type,
          config: { datasourceId: S.value?.uid, settings: {} },
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
          x: 50 + p * 300,
          y: 50,
          width: 200,
          height: 100,
          z: 3005
        });
      }), w.value = [], m.value = void 0, S.value = void 0, a.value = 0, P.value = [], f.searchString = "", X.value = {}, c.step0 = !1, c.step1 = !0, c.step2 = !0, c.step3 = !0, n.value = !1;
    };
    return o({
      run: s
    }), (L, p) => (j(), G(Q, null, [
      $(b(Ke), {
        modelValue: n.value,
        "onUpdate:modelValue": p[3] || (p[3] = (v) => n.value = v),
        size: "lg",
        onCancel: p[4] || (p[4] = (v) => ze())
      }, {
        header: U(() => [...p[6] || (p[6] = [
          T("h2", { class: "finder__title" }, "Datenquelle finden", -1)
        ])]),
        actions: U(() => [
          a.value != 3 ? (j(), Z(b(Te), {
            key: 0,
            intent: "primary",
            disabled: !c["step" + a.value],
            onClick: p[2] || (p[2] = (v) => a.value++)
          }, {
            default: U(() => [...p[11] || (p[11] = [
              H(" Weiter ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : (j(), Z(b(Te), {
            key: 1,
            intent: "primary",
            disabled: !c["step" + a.value],
            onClick: ze
          }, {
            default: U(() => [...p[12] || (p[12] = [
              H(" Fertig ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]))
        ]),
        default: U(() => [
          T("ol", Io, [
            (j(), G(Q, null, je(y, (v, W) => T("li", {
              key: v.label,
              class: we(["step", { "step--on": W === a.value, "step--done": W < a.value }]),
              "aria-current": W === a.value ? "step" : void 0
            }, [
              $(b(Be), {
                name: v.icon,
                size: "sm"
              }, null, 8, ["name"]),
              T("span", xo, Y(v.label), 1)
            ], 10, No)), 64))
          ]),
          T("div", Po, [
            a.value === 0 ? (j(), G(Q, { key: 0 }, [
              T("div", Mo, [
                $(b(ve), {
                  modelValue: f.searchString,
                  "onUpdate:modelValue": p[0] || (p[0] = (v) => f.searchString = v),
                  label: "Suche",
                  placeholder: "Wonach suchst du?",
                  onKeyup: p[1] || (p[1] = (v) => {
                    v.key == "Enter" && J();
                  })
                }, null, 8, ["modelValue"]),
                $(b(Te), {
                  title: "Filter",
                  onClick: k
                }, {
                  default: U(() => [
                    $(b(Be), {
                      name: "filter_alt",
                      size: "sm"
                    }),
                    p[7] || (p[7] = H("Filter", -1)),
                    x.value ? (j(), Z(b(xe), {
                      key: 0,
                      numeric: ""
                    }, {
                      default: U(() => [
                        H(Y(x.value), 1)
                      ]),
                      _: 1
                    })) : Le("", !0)
                  ]),
                  _: 1
                })
              ]),
              se.value.length > 0 ? (j(), G("div", $o, [
                (j(!0), G(Q, null, je(se.value, (v) => (j(), Z(Qt, {
                  key: v.title.value,
                  class: we({ active: v == ne.value }),
                  result: v,
                  onClick: (W) => ne.value = v
                }, null, 8, ["class", "result", "onClick"]))), 128))
              ])) : Le("", !0)
            ], 64)) : a.value === 1 ? (j(), G(Q, { key: 1 }, [
              re.value ? (j(), G("p", Vo, [
                $(b(Be), {
                  name: "warning",
                  size: "lg",
                  tone: "color-warn"
                }),
                p[8] || (p[8] = H(" Die Verbindung lässt sich nicht automatisch bestimmen - das passiert, wenn der Typ des Datensatzes unbekannt oder nicht unterstützt ist. Du kannst sie von Hand einrichten. ", -1))
              ])) : (j(), G("h3", Do, "Diese Verbindung wird angelegt:")),
              T("div", Fo, [
                b(m) ? (j(), Z(b(ve), {
                  key: 0,
                  "model-value": b(m)?.name,
                  label: "Name",
                  readonly: ""
                }, null, 8, ["model-value"])) : Le("", !0),
                $(b(ve), {
                  "model-value": b(m)?.type,
                  label: "Typ",
                  readonly: ""
                }, null, 8, ["model-value"])
              ]),
              (j(), Z(Ue(Bt.value), {
                config: b(m)?.config
              }, null, 8, ["config"]))
            ], 64)) : a.value === 2 ? (j(), G(Q, { key: 2 }, [
              p[9] || (p[9] = T("h3", { class: "finder__lead" }, "Diese Datenquelle wird angelegt:", -1)),
              T("div", zo, [
                b(m) ? (j(), Z(b(ve), {
                  key: 0,
                  "model-value": b(S)?.name,
                  label: "Name",
                  readonly: ""
                }, null, 8, ["model-value"])) : Le("", !0),
                $(b(ve), {
                  "model-value": b(S)?.type,
                  label: "Typ",
                  readonly: ""
                }, null, 8, ["model-value"])
              ]),
              (j(), Z(Ue(kt.value), {
                config: b(S).config,
                connections: b(i),
                dataSources: b(u)
              }, null, 8, ["config", "connections", "dataSources"]))
            ], 64)) : (j(), G(Q, { key: 3 }, [
              p[10] || (p[10] = T("h3", { class: "finder__lead" }, "Widgets zur Datenquelle auswählen", -1)),
              T("div", Uo, [
                (j(!0), G(Q, null, je(g.value, (v) => (j(), G("button", {
                  key: v.type,
                  type: "button",
                  class: we(["widgets_grid-item", { on: w.value.includes(v) }]),
                  onClick: () => {
                    w.value.includes(v) ? w.value.splice(w.value.indexOf(v), 1) : w.value.push(v);
                  }
                }, [
                  $(b($t), {
                    "model-value": w.value.includes(v)
                  }, null, 8, ["model-value"]),
                  T("img", {
                    src: v.icon,
                    alt: "",
                    class: "widgets_grid-icon"
                  }, null, 8, Wo),
                  H(" " + Y(v.type), 1)
                ], 10, qo))), 128))
              ])
            ], 64))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      $(Bo, {
        ref_key: "loadModalref",
        ref: D,
        modelValue: P.value,
        "onUpdate:modelValue": p[5] || (p[5] = (v) => P.value = v)
      }, null, 8, ["modelValue"])
    ], 64));
  }
}), Xo = /* @__PURE__ */ Ae(Go, [["__scopeId", "data-v-df78ab83"]]);
function Jo(e, { props: o, children: t, element: n, app: l } = {}) {
  let s = n, a = $(e, o, t);
  return l && l._context && (a.appContext = l._context), s ? _e(a, s) : typeof document < "u" && _e(a, s = document.createElement("div")), { vNode: a, destroy: () => {
    s && _e(null, s), s = null, a = null;
  }, el: s };
}
function nn({ services: e, log: o }) {
  const t = {
    install(a) {
      const { vNode: r } = Jo(Xo, { props: {}, app: a });
      a.provide("endpointfinder", async () => {
        await r.component?.exposed?.run(() => {
        });
      });
    }
  };
  e.getRequired("App").use(t);
  const n = e.getRequired(Dt), l = n.createConnection("rest", {
    url: "https://www.govdata.de/sparql"
  }), s = n.getConnection(l.uid);
  Ie().registerEndpoint(s, "SparqlDataEurope"), Ie().setActive("SparqlDataEurope"), o.info("Endpointfinder bereit");
}
export {
  nn as activate
};
