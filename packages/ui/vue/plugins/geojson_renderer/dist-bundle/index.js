(function(){var i="ui.vue.plugins.geojson_renderer",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.pin[data-v-5ad1856d] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50% 50% 50% 0;\n  transform: rotate(-45deg);\n  left: 50%;\n  top: 50%;\n  margin: -15px 71px 0 -15px;\n  box-shadow: -4px -6px 8px #0000005c;\n}\n.pin.round[data-v-5ad1856d] {\n  border-radius: 50% 50% 50% 50%;\n}\n.pin.contain[data-v-5ad1856d] {\n  width: auto;\n  height: auto;\n  border-radius: 25%;\n  display: inline-block;\n  transform: rotate(0deg);\n  padding: 4px;\n  margin: 0px;\n}\n.pin.contain .inner[data-v-5ad1856d] {\n  width: auto;\n  height: auto;\n  margin: 0;\n  position: relative;\n  transform: rotate(0deg);\n  border-radius: 17%;\n  display: inline-block;\n  font-size: 13px;\n  padding: 3px;\n}\n.pin .datapoint[data-v-5ad1856d] {\n  transform: rotate(45deg);\n  position: absolute;\n  top: 50px;\n  left: 0;\n  margin: 0;\n}\n.pin.marker[data-v-5ad1856d]::before {\n  content: \" \";\n  width: 20px;\n  height: 20px;\n  display: block;\n  position: absolute;\n  transform: rotate(-45deg);\n  border-radius: 50% 50% 50% 0;\n  top: 14px;\n  left: 5px;\n  z-index: -24;\n}\n.pin .inner[data-v-5ad1856d] {\n  padding: 5px 0 0 0;\n  width: 37px;\n  height: 37px;\n  margin: 3px 0 0 4px;\n  background: #fff;\n  position: absolute;\n  transform: rotate(45deg);\n  border-radius: 50%;\n}\n.image-marker[data-v-5ad1856d] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: -50%;\n  margin-top: -50%;\n}\n\n.geojson-settings[data-v-11682d51] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.tab-content[data-v-11682d51] {\n  flex: 1;\n  overflow: auto;\n  padding: 1rem;\n}\n";})();
import { activate, component } from "@eclipse-daanse/tsm";
import { MapMarker, ConditionSettings, PointStyler, AreaStyler, useDataPointRegistry } from "org.eclipse.daanse.board.app.ui.vue.widget.map";
import { defineComponent, ref, inject, onMounted, markRaw, nextTick, h as h$1, reactive, provide, computed, onBeforeUnmount, watch, onUnmounted, render, toRefs, createElementBlock, createCommentVNode, openBlock, Fragment, renderList, createBlock, unref, withCtx, createVNode, useModel, resolveComponent, createElementVNode, createTextVNode, toDisplayString } from "vue";
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
  const o = inject(e);
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
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = Qe(e, t, o);
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
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = je(
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
    const t = ref(), n = ref(), s = inject(h), r = m(H), { options: l, methods: a } = K(e, t);
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
    const t = ref(), n = inject(h), s = m(H), { options: r, methods: l } = Ye(e, t);
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
    const t = ref(), n = inject(h), s = m(me), { options: r, methods: l } = Ve(e, t);
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
    const t = ref(), n = inject(h), s = m(H), { options: r, methods: l } = xe(e, t);
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
    const t = ref(), n = inject(h), s = m(H), { options: r, methods: l } = Re(e, t);
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
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { methods: l, options: a } = et(
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
}, no = defineComponent({
  props: Ie,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { methods: l, options: a } = tt(e, t, o);
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
}), ae = {
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
    const t = ref(), n = ref(null), s = ref(false), r = inject(h), l = m(M), { options: a, methods: i } = Ae(e, t, o);
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
}, so = defineComponent({
  name: "LIcon",
  props: {
    ...de,
    ...W
  },
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(ve), r = m(be), l = m(fe);
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
}), Ge = {
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
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = nt(
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
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { methods: l } = se(e, t, o);
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
};
defineComponent({
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
});
const Gt = ["Symbol(Comment)", "Symbol(Text)"], zt = ["LTooltip", "LPopup"], ze = {
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
const uo = defineComponent({
  name: "LMarker",
  props: ze,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M);
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
}), le = {
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
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = $e(e, t, o);
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
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = Ne(e, t, o);
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
    const t = ref(), n = ref(null), s = inject(h), r = m(ge), l = m(he), { options: a, methods: i } = it(e, t);
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
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = ut(e, t, o);
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
};
defineComponent({
  props: ie,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(M), { options: r, methods: l } = Ze(e, t, o);
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
});
const ct = {
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
    const t = ref(), n = ref(null), s = inject(h), r = m(Le), { options: l, methods: a } = dt(e, t);
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
    const t = ref(), n = inject(h), s = m(M), { options: r, methods: l } = pt(
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GeoJsonDataRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const { config, data } = toRefs(props);
    const conditions = computed(() => config.value?.conditions || []);
    const areaStyle = computed(() => config.value?.renderer?.area || {});
    const renderer = computed(() => config.value?.renderer || {});
    const isPoint = (geometry) => {
      return geometry?.type === "Point" || geometry?.type === "MultiPoint";
    };
    const getPoint = (geometry) => {
      if (!geometry) return null;
      if (geometry.type === "Point") {
        return [geometry.coordinates[1], geometry.coordinates[0]];
      }
      return null;
    };
    const filterFeatures = (featureCollection) => {
      if (!conditions.value || conditions.value.length === 0) {
        return featureCollection.features;
      }
      const filteredFeatures = [];
      for (const feature of featureCollection.features) {
        for (const condition of conditions.value) {
          if (condition.value === "*") {
            filteredFeatures.push(feature);
            break;
          } else {
            const prop = getNestedProperty(feature.properties, condition.prop);
            if (!prop) {
              continue;
            }
            if (compareCondition(condition.comperator, prop, condition.value)) {
              filteredFeatures.push(feature);
              break;
            }
          }
        }
      }
      return filteredFeatures;
    };
    const getNestedProperty = (obj, path) => {
      if (!obj || !path) return void 0;
      return path.split(".").reduce((current, key) => current?.[key], obj);
    };
    const compareCondition = (comperator, prop, value) => {
      switch (comperator) {
        case "eq":
          return String(prop) === value;
        case "neq":
          return String(prop) !== value;
        case "gt":
          return Number(prop) > Number(value);
        case "gte":
          return Number(prop) >= Number(value);
        case "lt":
          return Number(prop) < Number(value);
        case "lte":
          return Number(prop) <= Number(value);
        default:
          return false;
      }
    };
    const processedData = computed(() => {
      if (!data.value) return null;
      if (data.value.type === "FeatureCollection") {
        const filteredFeatures = filterFeatures(data.value);
        return filteredFeatures;
      }
      return [data.value];
    });
    const isValidGeoJSON = computed(() => {
      if (!data.value) return false;
      const geoJsonTypes = ["Feature", "FeatureCollection", "Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon", "GeometryCollection"];
      return data.value.type && geoJsonTypes.includes(data.value.type);
    });
    const geoJsonStyle = computed(() => ({
      fillColor: areaStyle.value?.fillColor || "#3388ff",
      fillOpacity: areaStyle.value?.fillOpacity !== void 0 ? areaStyle.value.fillOpacity : 0.2,
      color: areaStyle.value?.color || "#3388ff",
      weight: areaStyle.value?.weight !== void 0 ? areaStyle.value?.weight : 3,
      stroke: areaStyle.value?.stroke !== void 0 ? areaStyle.value?.stroke : true,
      opacity: areaStyle.value?.opacity !== void 0 ? areaStyle.value?.opacity : 1,
      fill: areaStyle.value?.fill !== void 0 ? areaStyle.value?.fill : true,
      className: areaStyle.value?.className || ""
    }));
    return (_ctx, _cache) => {
      return isValidGeoJSON.value && processedData.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(processedData.value, (feature, idx) => {
        return openBlock(), createElementBlock(Fragment, {
          key: feature.id || idx
        }, [
          !isPoint(feature.geometry) ? (openBlock(), createBlock(unref(no), {
            key: 0,
            geojson: feature,
            options: { pane: "overlayPane" },
            "options-style": () => geoJsonStyle.value
          }, null, 8, ["geojson", "options-style"])) : createCommentVNode("", true),
          getPoint(feature.geometry) ? (openBlock(), createBlock(unref(uo), {
            key: 1,
            "lat-lng": getPoint(feature.geometry),
            options: { pane: "markerPane" }
          }, {
            default: withCtx(() => [
              createVNode(unref(so), { "class-name": "someExtraClass" }, {
                default: withCtx(() => [
                  createVNode(unref(MapMarker), {
                    "render-as": renderer.value.point_render_as || "icon",
                    "background-color": renderer.value.pointPin?.color,
                    "icon-config": renderer.value.point,
                    "property-value": feature.properties?.[renderer.value.point_prop ?? ""],
                    "image-url": renderer.value.point_image_url,
                    "image-size": renderer.value.point_image_size || 32
                  }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["lat-lng"])) : createCommentVNode("", true)
        ], 64);
      }), 128)) : createCommentVNode("", true);
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
const GeoJsonDataRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5ad1856d"]]);
const _hoisted_1 = { class: "geojson-settings" };
const _hoisted_2 = { class: "tab-content" };
const _hoisted_3 = {
  key: 0,
  class: "full"
};
const _hoisted_4 = {
  key: 1,
  class: "full"
};
const _hoisted_5 = {
  key: 2,
  class: "full"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GeoJsonDataRendererSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const tabNo = ref(0);
    if (!model.value) {
      model.value = {};
    }
    if (!model.value.conditions) {
      model.value.conditions = [];
    }
    if (!model.value.renderer) {
      model.value.renderer = {
        point_render_as: "icon",
        point_prop: "name",
        point: {
          currentIcon: "circle",
          iconColor: "#000000",
          iconSize: 24,
          isIconFilled: false,
          strokeWeight: 400,
          opticSize: 24,
          grade: 0
        },
        pointPin: { color: "#ccc" },
        area: {
          stroke: true,
          color: "#3388ff",
          weight: 3,
          opacity: 1,
          fill: true,
          fillOpacity: 0.2,
          fillColor: "#3388ff",
          className: ""
        }
      };
    }
    return (_ctx, _cache) => {
      const _component_VaTab = resolveComponent("VaTab");
      const _component_VaTabs = resolveComponent("VaTabs");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VaTabs, {
          modelValue: tabNo.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tabNo.value = $event)
        }, {
          tabs: withCtx(() => [
            (openBlock(), createElementBlock(Fragment, null, renderList(["Conditions", "Points", "Areas"], (tab) => {
              return createVNode(_component_VaTab, { key: tab }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(tab), 1)
                ]),
                _: 2
              }, 1024);
            }), 64))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createElementVNode("div", _hoisted_2, [
          tabNo.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(unref(ConditionSettings), {
              modelValue: model.value.conditions,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value.conditions = $event)
            }, null, 8, ["modelValue"])
          ])) : tabNo.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(unref(PointStyler), {
              modelValue: model.value.renderer,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value.renderer = $event)
            }, null, 8, ["modelValue"])
          ])) : tabNo.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createVNode(unref(AreaStyler), {
              modelValue: model.value.renderer.area,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.value.renderer.area = $event)
            }, null, 8, ["modelValue"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const GeoJsonDataRendererSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11682d51"]]);
class GeoJsonDataRendererDescription {
  component = GeoJsonDataRenderer;
  setupComponent = GeoJsonDataRendererSettings;
  description = "Renders observations as GeoJSON features on the map";
  name = "GeoJSON Data Renderer";
  namespace = "geojson";
  qualifiedName = "GeoJsonDataRenderer";
  isLayerRenderer = true;
  example = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [11.587408017353823, 50.92828047934907]
    },
    properties: {
      name: "Example Point"
    }
  };
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let GeoJsonRendererComponent = class {
  register() {
    useDataPointRegistry().registerDataPointRenderer(new GeoJsonDataRendererDescription());
  }
};
__decorateClass([
  activate()
], GeoJsonRendererComponent.prototype, "register", 1);
GeoJsonRendererComponent = __decorateClass([
  component({})
], GeoJsonRendererComponent);
export {
  GeoJsonDataRendererDescription,
  GeoJsonRendererComponent
};
