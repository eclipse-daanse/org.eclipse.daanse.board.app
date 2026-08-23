(function(){var i="ui.vue.plugins.geojson_renderer",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".pin[data-v-5ad1856d]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #0000005c}.pin.round[data-v-5ad1856d]{border-radius:50%}.pin.contain[data-v-5ad1856d]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.pin.contain .inner[data-v-5ad1856d]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}.pin .datapoint[data-v-5ad1856d]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}.pin.marker[data-v-5ad1856d]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}.pin .inner[data-v-5ad1856d]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}.image-marker[data-v-5ad1856d]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.geojson-settings[data-v-11682d51]{display:flex;flex-direction:column;height:100%}.tab-content[data-v-11682d51]{flex:1;overflow:auto;padding:1rem}\n";})();
import { activate as lt, component as st } from "@eclipse-daanse/tsm";
import { MapMarker as it, ConditionSettings as ut, PointStyler as dt, AreaStyler as pt, useDataPointRegistry as ct } from "org.eclipse.daanse.board.app.ui.vue.widget.map";
import { defineComponent as O, ref as p, inject as C, onMounted as w, markRaw as N, nextTick as S, h as J, reactive as yt, provide as x, computed as V, onBeforeUnmount as H, watch as he, onUnmounted as pe, render as vt, toRefs as mt, createElementBlock as U, createCommentVNode as ne, openBlock as G, Fragment as ue, renderList as we, createBlock as Le, unref as $, withCtx as re, createVNode as F, useModel as ft, resolveComponent as Oe, createElementVNode as bt, createTextVNode as gt, toDisplayString as ht } from "vue";
const Se = (t, o) => {
  for (const e of Object.keys(o))
    t.on(e, o[e]);
}, Be = (t) => {
  for (const o of Object.keys(t)) {
    const e = t[o];
    e && M(e.cancel) && e.cancel();
  }
}, Lt = (t) => !t || typeof t.charAt != "function" ? t : t.charAt(0).toUpperCase() + t.slice(1), M = (t) => typeof t == "function", B = (t, o, e) => {
  for (const n in e) {
    const a = "set" + Lt(n);
    t[a] ? he(
      () => e[n],
      (r, s) => {
        t[a](r, s);
      }
    ) : o[a] && he(
      () => e[n],
      (r) => {
        o[a](r);
      }
    );
  }
}, j = (t, o, e = {}) => {
  const n = { ...e };
  for (const a in t) {
    const r = o[a], s = t[a];
    r && (r && r.custom === !0 || s !== void 0 && (n[a] = s));
  }
  return n;
}, A = (t) => {
  const o = {}, e = {};
  for (const n in t)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const a = n.slice(2).toLocaleLowerCase();
      o[a] = t[n];
    } else
      e[n] = t[n];
  return { listeners: o, attrs: e };
}, Ot = async (t) => {
  const o = await Promise.all([
    import("./marker-icon-2x-DVSLMKfE.js"),
    import("./marker-icon-DbhCZIpd.js"),
    import("./marker-shadow-ZZvxUwqf.js")
  ]);
  delete t.Default.prototype._getIconUrl, t.Default.mergeOptions({
    iconRetinaUrl: o[0].default,
    iconUrl: o[1].default,
    shadowUrl: o[2].default
  });
}, te = (t) => {
  const o = p(
    (...n) => console.warn(`Method ${t} has been invoked without being replaced`)
  ), e = (...n) => o.value(...n);
  return e.wrapped = o, x(t, e), e;
}, oe = (t, o) => t.wrapped.value = o, L = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, m = (t) => {
  const o = C(t);
  if (o === void 0)
    throw new Error(
      `Attempt to inject ${t.description} before it was provided.`
    );
  return o;
}, P = Symbol(
  "useGlobalLeaflet"
), _ = Symbol("addLayer"), le = Symbol("removeLayer"), K = Symbol(
  "registerControl"
), Pe = Symbol(
  "registerLayerControl"
), Te = Symbol(
  "canSetParentHtml"
), Ne = Symbol("setParentHtml"), Re = Symbol("setIcon"), Ae = Symbol("bindPopup"), _e = Symbol("bindTooltip"), ke = Symbol("unbindPopup"), Ie = Symbol("unbindTooltip"), Q = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, X = (t) => ({ options: t.options, methods: {} }), q = {
  ...Q,
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
}, Y = (t, o, e) => {
  const n = m(_), a = m(le), { options: r, methods: s } = X(t), l = j(
    t,
    q,
    r
  ), i = () => n({ leafletObject: o.value }), u = () => a({ leafletObject: o.value }), c = {
    ...s,
    setAttribution(v) {
      u(), o.value.options.attribution = v, t.visible && i();
    },
    setName() {
      u(), t.visible && i();
    },
    setLayerType() {
      u(), t.visible && i();
    },
    setVisible(v) {
      o.value && (v ? i() : u());
    },
    bindPopup(v) {
      if (!o.value || !M(o.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      o.value.bindPopup(v);
    },
    bindTooltip(v) {
      if (!o.value || !M(o.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      o.value.bindTooltip(v);
    },
    unbindTooltip() {
      o.value && (M(o.value.closeTooltip) && o.value.closeTooltip(), M(o.value.unbindTooltip) && o.value.unbindTooltip());
    },
    unbindPopup() {
      o.value && (M(o.value.closePopup) && o.value.closePopup(), M(o.value.unbindPopup) && o.value.unbindPopup());
    },
    updateVisibleProp(v) {
      e.emit("update:visible", v);
    }
  };
  return x(Ae, c.bindPopup), x(_e, c.bindTooltip), x(ke, c.unbindPopup), x(Ie, c.unbindTooltip), pe(() => {
    c.unbindPopup(), c.unbindTooltip(), u();
  }), { options: l, methods: c };
}, D = (t, o) => {
  if (t && o.default)
    return J("div", { style: { display: "none" } }, o.default());
}, xe = {
  ...q,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, St = (t, o, e) => {
  const { options: n, methods: a } = Y(
    t,
    o,
    e
  );
  return { options: j(
    t,
    xe,
    n
  ), methods: a };
}, ce = {
  ...xe,
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
}, Ve = (t, o, e) => {
  const { options: n, methods: a } = St(t, o, e), r = j(
    t,
    ce,
    n
  ), s = m(le), l = {
    ...a,
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
  return H(() => {
    s({ leafletObject: o.value });
  }), { options: r, methods: l };
}, ye = {
  ...ce,
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
}, De = (t, o, e) => {
  const { options: n, methods: a } = Ve(
    t,
    o,
    e
  ), r = j(
    t,
    ye,
    n
  ), s = {
    ...a,
    setRadius(l) {
      o.value.setRadius(l);
    },
    setLatLng(l) {
      o.value.setLatLng(l);
    }
  };
  return { options: r, methods: s };
}, ze = {
  ...ye,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, jt = (t, o, e) => {
  const { options: n, methods: a } = De(t, o, e), r = j(
    t,
    ze,
    n
  ), s = {
    ...a
  };
  return { options: r, methods: s };
};
O({
  name: "LCircle",
  props: ze,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: s, methods: l } = jt(t, e, o);
    return w(async () => {
      const { circle: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(i(t.latLng, s));
      const { listeners: u } = A(o.attrs);
      e.value.on(u), B(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
  }
});
O({
  name: "LCircleMarker",
  props: ye,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: s, methods: l } = De(
      t,
      e,
      o
    );
    return w(async () => {
      const { circleMarker: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(
        i(t.latLng, s)
      );
      const { listeners: u } = A(o.attrs);
      e.value.on(u), B(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
  }
});
const Z = {
  ...Q,
  position: {
    type: String
  }
}, ee = (t, o) => {
  const { options: e, methods: n } = X(t), a = j(
    t,
    Z,
    e
  ), r = {
    ...n,
    setPosition(s) {
      o.value && o.value.setPosition(s);
    }
  };
  return pe(() => {
    o.value && o.value.remove();
  }), { options: a, methods: r };
}, Ct = (t) => t.default ? J("div", { ref: "root" }, t.default()) : null;
O({
  name: "LControl",
  props: {
    ...Z,
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
  setup(t, o) {
    const e = p(), n = p(), a = C(P), r = m(K), { options: s, methods: l } = ee(t, e);
    return w(async () => {
      const { Control: i, DomEvent: u } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js"), c = i.extend({
        onAdd() {
          return n.value;
        }
      });
      e.value = N(new c(s)), B(l, e.value, t), r({ leafletObject: e.value }), t.disableClickPropagation && n.value && u.disableClickPropagation(n.value), t.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), S(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return Ct(this.$slots);
  }
});
const Ge = {
  ...Z,
  prefix: {
    type: String
  }
}, wt = (t, o) => {
  const { options: e, methods: n } = ee(
    t,
    o
  ), a = j(
    t,
    Ge,
    e
  ), r = {
    ...n,
    setPrefix(s) {
      o.value.setPrefix(s);
    }
  };
  return { options: a, methods: r };
};
O({
  name: "LControlAttribution",
  props: Ge,
  setup(t, o) {
    const e = p(), n = C(P), a = m(K), { options: r, methods: s } = wt(t, e);
    return w(async () => {
      const { control: l } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(
        l.attribution(r)
      ), B(s, e.value, t), a({ leafletObject: e.value }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Me = {
  ...Z,
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
}, Bt = (t, o) => {
  const { options: e } = ee(t, o);
  return { options: j(
    t,
    Me,
    e
  ), methods: {
    addLayer(n) {
      n.layerType === "base" ? o.value.addBaseLayer(n.leafletObject, n.name) : n.layerType === "overlay" && o.value.addOverlay(n.leafletObject, n.name);
    },
    removeLayer(n) {
      o.value.removeLayer(n.leafletObject);
    }
  } };
};
O({
  name: "LControlLayers",
  props: Me,
  setup(t, o) {
    const e = p(), n = C(P), a = m(Pe), { options: r, methods: s } = Bt(t, e);
    return w(async () => {
      const { control: l } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(
        l.layers(void 0, void 0, r)
      ), B(s, e.value, t), a({
        ...t,
        ...s,
        leafletObject: e.value
      }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Ue = {
  ...Z,
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
}, Pt = (t, o) => {
  const { options: e, methods: n } = ee(
    t,
    o
  );
  return { options: j(
    t,
    Ue,
    e
  ), methods: n };
};
O({
  name: "LControlScale",
  props: Ue,
  setup(t, o) {
    const e = p(), n = C(P), a = m(K), { options: r, methods: s } = Pt(t, e);
    return w(async () => {
      const { control: l } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(l.scale(r)), B(s, e.value, t), a({ leafletObject: e.value }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Fe = {
  ...Z,
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
}, Tt = (t, o) => {
  const { options: e, methods: n } = ee(
    t,
    o
  );
  return { options: j(
    t,
    Fe,
    e
  ), methods: n };
};
O({
  name: "LControlZoom",
  props: Fe,
  setup(t, o) {
    const e = p(), n = C(P), a = m(K), { options: r, methods: s } = Tt(t, e);
    return w(async () => {
      const { control: l } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(l.zoom(r)), B(s, e.value, t), a({ leafletObject: e.value }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const se = {
  ...q
}, ve = (t, o, e) => {
  const { options: n, methods: a } = Y(
    t,
    o,
    e
  ), r = j(
    t,
    se,
    n
  ), s = {
    ...a,
    addLayer(l) {
      o.value.addLayer(l.leafletObject);
    },
    removeLayer(l) {
      o.value.removeLayer(l.leafletObject);
    }
  };
  return x(_, s.addLayer), x(le, s.removeLayer), { options: r, methods: s };
}, $e = {
  ...se
}, Nt = (t, o, e) => {
  const { options: n, methods: a } = ve(
    t,
    o,
    e
  ), r = j(
    t,
    $e,
    n
  ), s = {
    ...a
  };
  return { options: r, methods: s };
};
O({
  props: $e,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { methods: s, options: l } = Nt(
      t,
      e,
      o
    );
    return w(async () => {
      const { featureGroup: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(
        i(void 0, l)
      );
      const { listeners: u } = A(o.attrs);
      e.value.on(u), B(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
  }
});
const Je = {
  ...se,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, Rt = (t, o, e) => {
  const { options: n, methods: a } = ve(
    t,
    o,
    e
  ), r = j(
    t,
    Je,
    n
  );
  Object.prototype.hasOwnProperty.call(t, "optionsStyle") && (r.style = t.optionsStyle);
  const s = {
    ...a,
    setGeojson(l) {
      o.value.clearLayers(), o.value.addData(l);
    },
    setOptionsStyle(l) {
      o.value.setStyle(l);
    },
    getGeoJSONData() {
      return o.value.toGeoJSON();
    },
    getBounds() {
      return o.value.getBounds();
    }
  };
  return { options: r, methods: s };
}, At = O({
  props: Je,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { methods: s, options: l } = Rt(t, e, o);
    return w(async () => {
      const { geoJSON: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(i(t.geojson, l));
      const { listeners: u } = A(o.attrs);
      e.value.on(u), B(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
  }
}), me = {
  ...q,
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
}, Ee = (t, o, e) => {
  const { options: n, methods: a } = Y(
    t,
    o,
    e
  ), r = j(
    t,
    me,
    n
  ), s = {
    ...a,
    setTileComponent() {
      var l;
      (l = o.value) == null || l.redraw();
    }
  };
  return pe(() => {
    o.value.off();
  }), { options: r, methods: s };
}, _t = (t, o, e, n) => t.extend({
  initialize(a) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), e.setOptions(this, a);
  },
  createTile(a) {
    const r = this._tileCoordsToKey(a);
    this.tileComponents[r] = o.create("div");
    const s = J({ setup: n, props: ["coords"] }, { coords: a });
    return vt(s, this.tileComponents[r]), this.tileComponents[r];
  },
  _unloadTile(a) {
    const r = this._tileCoordsToKey(a.coords);
    this.tileComponents[r] && (this.tileComponents[r].innerHTML = "", this.tileComponents[r] = void 0);
  }
});
O({
  props: {
    ...me,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(t, o) {
    const e = p(), n = p(null), a = p(!1), r = C(P), s = m(_), { options: l, methods: i } = Ee(t, e, o);
    return w(async () => {
      const { GridLayer: u, DomUtil: c, Util: v } = r ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js"), R = _t(
        u,
        c,
        v,
        t.childRender
      );
      e.value = N(new R(l));
      const { listeners: f } = A(o.attrs);
      e.value.on(f), B(i, e.value, t), s({
        ...t,
        ...i,
        leafletObject: e.value
      }), a.value = !0, S(() => o.emit("ready", e.value));
    }), { root: n, ready: a, leafletObject: e };
  },
  render() {
    return this.ready ? J("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const je = {
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
}, kt = O({
  name: "LIcon",
  props: {
    ...je,
    ...Q
  },
  setup(t, o) {
    const e = p(), n = C(P), a = m(Te), r = m(Ne), s = m(Re);
    let l, i, u, c, v;
    const R = (g, d, h) => {
      const k = g && g.innerHTML;
      if (!d) {
        h && v && a() && r(k);
        return;
      }
      const { listeners: E } = A(o.attrs);
      v && i(v, E);
      const { options: ie } = X(t), z = j(
        t,
        je,
        ie
      );
      k && (z.html = k), v = z.html ? u(z) : c(z), l(v, E), s(v);
    }, f = () => {
      S(() => R(e.value, !0, !1));
    }, I = () => {
      S(() => R(e.value, !1, !0));
    }, b = {
      setIconUrl: f,
      setIconRetinaUrl: f,
      setIconSize: f,
      setIconAnchor: f,
      setPopupAnchor: f,
      setTooltipAnchor: f,
      setShadowUrl: f,
      setShadowRetinaUrl: f,
      setShadowAnchor: f,
      setBgPos: f,
      setClassName: f,
      setHtml: f
    };
    return w(async () => {
      const {
        DomEvent: g,
        divIcon: d,
        icon: h
      } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      l = g.on, i = g.off, u = d, c = h, B(b, {}, t), new MutationObserver(I).observe(e.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), f();
    }), { root: e };
  },
  render() {
    const t = this.$slots.default ? this.$slots.default() : void 0;
    return J("div", { ref: "root" }, t);
  }
}), qe = {
  ...q,
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
}, It = (t, o, e) => {
  const { options: n, methods: a } = Y(
    t,
    o,
    e
  ), r = j(
    t,
    qe,
    n
  ), s = {
    ...a,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(l) {
      return o.value.setOpacity(l);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(l) {
      return o.value.setUrl(l);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(l) {
      return o.value.setBounds(l);
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
    setZIndex(l) {
      return o.value.setZIndex(l);
    }
  };
  return { options: r, methods: s };
};
O({
  name: "LImageOverlay",
  props: qe,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: s, methods: l } = It(
      t,
      e,
      o
    );
    return w(async () => {
      const { imageOverlay: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(
        i(t.url, t.bounds, s)
      );
      const { listeners: u } = A(o.attrs);
      e.value.on(u), B(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
  }
});
O({
  props: se,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { methods: s } = ve(t, e, o);
    return w(async () => {
      const { layerGroup: l } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(
        l(void 0, t.options)
      );
      const { listeners: i } = A(o.attrs);
      e.value.on(i), B(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
  }
});
function Ze(t, o, e) {
  var n, a, r;
  o === void 0 && (o = 50), e === void 0 && (e = {});
  var s = (n = e.isImmediate) != null && n, l = (a = e.callback) != null && a, i = e.maxWait, u = Date.now(), c = [];
  function v() {
    if (i !== void 0) {
      var f = Date.now() - u;
      if (f + o >= i)
        return i - f;
    }
    return o;
  }
  var R = function() {
    var f = [].slice.call(arguments), I = this;
    return new Promise(function(b, g) {
      var d = s && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !s) {
          var k = t.apply(I, f);
          l && l(k), c.forEach(function(E) {
            return (0, E.resolve)(k);
          }), c = [];
        }
      }, v()), d) {
        var h = t.apply(I, f);
        return l && l(h), b(h);
      }
      c.push({ resolve: b, reject: g });
    });
  };
  return R.cancel = function(f) {
    r !== void 0 && clearTimeout(r), c.forEach(function(I) {
      return (0, I.reject)(f);
    }), c = [];
  }, R;
}
const Ce = {
  ...Q,
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
};
O({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: Ce,
  setup(t, o) {
    const e = p(), n = yt({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: a } = X(t), r = j(
      t,
      Ce,
      a
    ), { listeners: s, attrs: l } = A(o.attrs), i = te(_), u = te(le), c = te(K), v = te(
      Pe
    );
    x(P, t.useGlobalLeaflet);
    const R = V(() => {
      const d = {};
      return t.noBlockingAnimations && (d.animate = !1), d;
    }), f = V(() => {
      const d = R.value;
      return t.padding && (d.padding = t.padding), t.paddingTopLeft && (d.paddingTopLeft = t.paddingTopLeft), t.paddingBottomRight && (d.paddingBottomRight = t.paddingBottomRight), d;
    }), I = {
      moveend: Ze((d) => {
        n.leafletRef && (o.emit("update:zoom", n.leafletRef.getZoom()), o.emit("update:center", n.leafletRef.getCenter()), o.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(d) {
        const h = n.layersInControl.find((k) => k.name === d.name);
        h && h.updateVisibleProp(!0);
      },
      overlayremove(d) {
        const h = n.layersInControl.find((k) => k.name === d.name);
        h && h.updateVisibleProp(!1);
      }
    };
    w(async () => {
      t.useGlobalLeaflet && (L.L = L.L || await import("./leaflet-src-BDi_6Owi.js").then((y) => y.l));
      const { map: d, CRS: h, Icon: k, latLngBounds: E, latLng: ie, stamp: z } = t.useGlobalLeaflet ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (y) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${y.message}`
        );
      }
      await Ot(k);
      const at = typeof r.crs == "string" ? h[r.crs] : r.crs;
      r.crs = at || h.EPSG3857;
      const W = {
        addLayer(y) {
          y.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(y) : n.layersInControl.find(
            (T) => z(T.leafletObject) === z(y.leafletObject)
          ) || (n.layerControl.addLayer(y), n.layersInControl.push(y))), y.visible !== !1 && n.leafletRef.addLayer(y.leafletObject);
        },
        removeLayer(y) {
          y.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (T) => T.name !== y.name
          ) : (n.layerControl.removeLayer(y.leafletObject), n.layersInControl = n.layersInControl.filter(
            (T) => z(T.leafletObject) !== z(y.leafletObject)
          ))), n.leafletRef.removeLayer(y.leafletObject);
        },
        registerLayerControl(y) {
          n.layerControl = y, n.layersToAdd.forEach((T) => {
            n.layerControl.addLayer(T);
          }), n.layersToAdd = [], c(y);
        },
        registerControl(y) {
          n.leafletRef.addControl(y.leafletObject);
        },
        setZoom(y) {
          const T = n.leafletRef.getZoom();
          y !== T && n.leafletRef.setZoom(y, R.value);
        },
        setCrs(y) {
          const T = n.leafletRef.getBounds();
          n.leafletRef.options.crs = y, n.leafletRef.fitBounds(T, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(y) {
          n.leafletRef.fitBounds(y, f.value);
        },
        setBounds(y) {
          if (!y)
            return;
          const T = E(y);
          T.isValid() && !(n.lastSetBounds || n.leafletRef.getBounds()).equals(T, 0) && (n.lastSetBounds = T, n.leafletRef.fitBounds(T));
        },
        setCenter(y) {
          if (y == null)
            return;
          const T = ie(y), ge = n.lastSetCenter || n.leafletRef.getCenter();
          (ge.lat !== T.lat || ge.lng !== T.lng) && (n.lastSetCenter = T, n.leafletRef.panTo(T, R.value));
        }
      };
      oe(i, W.addLayer), oe(u, W.removeLayer), oe(c, W.registerControl), oe(v, W.registerLayerControl), n.leafletRef = N(d(e.value, r)), B(W, n.leafletRef, t), Se(n.leafletRef, I), Se(n.leafletRef, s), n.ready = !0, S(() => o.emit("ready", n.leafletRef));
    }), H(() => {
      Be(I), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const b = V(() => n.leafletRef), g = V(() => n.ready);
    return { root: e, ready: g, leafletObject: b, attrs: l };
  },
  render({ attrs: t }) {
    return t.style || (t.style = {}), t.style.width || (t.style.width = "100%"), t.style.height || (t.style.height = "100%"), J(
      "div",
      {
        ...t,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
});
const xt = ["Symbol(Comment)", "Symbol(Text)"], Vt = ["LTooltip", "LPopup"], We = {
  ...q,
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
}, Dt = (t, o, e) => {
  const { options: n, methods: a } = Y(
    t,
    o,
    e
  ), r = j(
    t,
    We,
    n
  ), s = {
    ...a,
    setDraggable(l) {
      o.value.dragging && (l ? o.value.dragging.enable() : o.value.dragging.disable());
    },
    latLngSync(l) {
      e.emit("update:latLng", l.latlng), e.emit("update:lat-lng", l.latlng);
    },
    setLatLng(l) {
      if (l != null && o.value) {
        const i = o.value.getLatLng();
        (!i || !i.equals(l)) && o.value.setLatLng(l);
      }
    }
  };
  return { options: r, methods: s };
}, zt = (t, o) => {
  const e = o.slots.default && o.slots.default();
  return e && e.length && e.some(Gt);
};
function Gt(t) {
  return !(xt.includes(t.type.toString()) || Vt.includes(t.type.name));
}
const Mt = O({
  name: "LMarker",
  props: We,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_);
    x(
      Te,
      () => {
        var u;
        return !!((u = e.value) != null && u.getElement());
      }
    ), x(Ne, (u) => {
      var c, v;
      const R = M((c = e.value) == null ? void 0 : c.getElement) && ((v = e.value) == null ? void 0 : v.getElement());
      R && (R.innerHTML = u);
    }), x(
      Re,
      (u) => {
        var c;
        return ((c = e.value) == null ? void 0 : c.setIcon) && e.value.setIcon(u);
      }
    );
    const { options: s, methods: l } = Dt(t, e, o), i = {
      moveHandler: Ze(l.latLngSync)
    };
    return w(async () => {
      const { marker: u, divIcon: c } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      zt(s, o) && (s.icon = c({ className: "" })), e.value = N(u(t.latLng, s));
      const { listeners: v } = A(o.attrs);
      e.value.on(v), e.value.on("move", i.moveHandler), B(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), H(() => Be(i)), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
  }
}), fe = {
  ...ce,
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
}, He = (t, o, e) => {
  const { options: n, methods: a } = Ve(
    t,
    o,
    e
  ), r = j(
    t,
    fe,
    n
  ), s = {
    ...a,
    setSmoothFactor(l) {
      o.value.setStyle({ smoothFactor: l });
    },
    setNoClip(l) {
      o.value.setStyle({ noClip: l });
    },
    addLatLng(l) {
      o.value.addLatLng(l);
    }
  };
  return { options: r, methods: s };
}, ae = {
  ...fe
}, Ke = (t, o, e) => {
  const { options: n, methods: a } = He(
    t,
    o,
    e
  ), r = j(
    t,
    ae,
    n
  ), s = {
    ...a,
    toGeoJSON(l) {
      return o.value.toGeoJSON(l);
    }
  };
  return { options: r, methods: s };
};
O({
  name: "LPolygon",
  props: ae,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: s, methods: l } = Ke(t, e, o);
    return w(async () => {
      const { polygon: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(i(t.latLngs, s));
      const { listeners: u } = A(o.attrs);
      e.value.on(u), B(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
  }
});
O({
  name: "LPolyline",
  props: fe,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: s, methods: l } = He(t, e, o);
    return w(async () => {
      const { polyline: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(
        i(t.latLngs, s)
      );
      const { listeners: u } = A(o.attrs);
      e.value.on(u), B(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
  }
});
const Qe = {
  ...Q,
  content: {
    type: String,
    default: null
  }
}, Xe = (t, o) => {
  const { options: e, methods: n } = X(t), a = {
    ...n,
    setContent(r) {
      o.value && r !== null && r !== void 0 && o.value.setContent(r);
    }
  };
  return { options: e, methods: a };
}, Ye = (t) => t.default ? J("div", { ref: "root" }, t.default()) : null, Ut = {
  ...Qe,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, Ft = (t, o) => {
  const { options: e, methods: n } = Xe(t, o);
  return { options: e, methods: n };
};
O({
  name: "LPopup",
  props: Ut,
  setup(t, o) {
    const e = p(), n = p(null), a = C(P), r = m(Ae), s = m(ke), { options: l, methods: i } = Ft(t, e);
    return w(async () => {
      const { popup: u } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(u(l)), t.latLng !== void 0 && e.value.setLatLng(t.latLng), B(i, e.value, t);
      const { listeners: c } = A(o.attrs);
      e.value.on(c), e.value.setContent(t.content || n.value || ""), r(e.value), S(() => o.emit("ready", e.value));
    }), H(() => {
      s();
    }), { root: n, leafletObject: e };
  },
  render() {
    return Ye(this.$slots);
  }
});
const et = {
  ...ae,
  latLngs: {
    ...ae.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, $t = (t, o, e) => {
  const { options: n, methods: a } = Ke(
    t,
    o,
    e
  ), r = j(
    t,
    et,
    n
  ), s = {
    ...a,
    setBounds(l) {
      o.value.setBounds(l);
    },
    setLatLngs(l) {
      o.value.setBounds(l);
    }
  };
  return { options: r, methods: s };
};
O({
  name: "LRectangle",
  props: et,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: s, methods: l } = $t(t, e, o);
    return w(async () => {
      const { rectangle: i, latLngBounds: u } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js"), c = t.bounds ? u(t.bounds) : u(t.latLngs || []);
      e.value = N(i(c, s));
      const { listeners: v } = A(o.attrs);
      e.value.on(v), B(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
  }
});
const be = {
  ...me,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (t) => typeof t == "string" ? !0 : Array.isArray(t) ? t.every((o) => typeof o == "string") : !1
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
}, tt = (t, o, e) => {
  const { options: n, methods: a } = Ee(t, o, e), r = j(
    t,
    be,
    n
  ), s = {
    ...a
  };
  return { options: r, methods: s };
};
O({
  props: be,
  setup(t, o) {
    const e = p(), n = C(P), a = m(_), { options: r, methods: s } = tt(t, e, o);
    return w(async () => {
      const { tileLayer: l } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(l(t.url, r));
      const { listeners: i } = A(o.attrs);
      e.value.on(i), B(s, e.value, t), a({
        ...t,
        ...s,
        leafletObject: e.value
      }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Jt = {
  ...Qe
}, Et = (t, o) => {
  const { options: e, methods: n } = Xe(t, o), a = m(Ie);
  return H(() => {
    a();
  }), { options: e, methods: n };
};
O({
  name: "LTooltip",
  props: Jt,
  setup(t, o) {
    const e = p(), n = p(null), a = C(P), r = m(_e), { options: s, methods: l } = Et(t, e);
    return w(async () => {
      const { tooltip: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(i(s)), B(l, e.value, t);
      const { listeners: u } = A(o.attrs);
      e.value.on(u), e.value.setContent(t.content || n.value || ""), r(e.value), S(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return Ye(this.$slots);
  }
});
const ot = {
  ...be,
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
}, qt = (t, o, e) => {
  const { options: n, methods: a } = tt(t, o, e);
  return {
    options: j(
      t,
      ot,
      n
    ),
    methods: {
      ...a
    }
  };
};
O({
  props: ot,
  setup(t, o) {
    const e = p(), n = C(P), a = m(_), { options: r, methods: s } = qt(
      t,
      e,
      o
    );
    return w(async () => {
      const { tileLayer: l } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = N(
        l.wms(t.url, r)
      );
      const { listeners: i } = A(o.attrs);
      e.value.on(i), B(s, e.value, t), a({
        ...t,
        ...s,
        leafletObject: e.value
      }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Zt = /* @__PURE__ */ O({
  __name: "GeoJsonDataRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 0 }
  },
  setup(t) {
    const o = t, { config: e, data: n } = mt(o), a = V(() => e.value?.conditions || []), r = V(() => e.value?.renderer?.area || {}), s = V(() => e.value?.renderer || {}), l = (b) => b?.type === "Point" || b?.type === "MultiPoint", i = (b) => b && b.type === "Point" ? [b.coordinates[1], b.coordinates[0]] : null, u = (b) => {
      if (!a.value || a.value.length === 0)
        return b.features;
      const g = [];
      for (const d of b.features)
        for (const h of a.value)
          if (h.value === "*") {
            g.push(d);
            break;
          } else {
            const k = c(d.properties, h.prop);
            if (!k)
              continue;
            if (v(h.comperator, k, h.value)) {
              g.push(d);
              break;
            }
          }
      return g;
    }, c = (b, g) => {
      if (!(!b || !g))
        return g.split(".").reduce((d, h) => d?.[h], b);
    }, v = (b, g, d) => {
      switch (b) {
        case "eq":
          return String(g) === d;
        case "neq":
          return String(g) !== d;
        case "gt":
          return Number(g) > Number(d);
        case "gte":
          return Number(g) >= Number(d);
        case "lt":
          return Number(g) < Number(d);
        case "lte":
          return Number(g) <= Number(d);
        default:
          return !1;
      }
    }, R = V(() => n.value ? n.value.type === "FeatureCollection" ? u(n.value) : [n.value] : null), f = V(() => {
      if (!n.value) return !1;
      const b = ["Feature", "FeatureCollection", "Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon", "GeometryCollection"];
      return n.value.type && b.includes(n.value.type);
    }), I = V(() => ({
      fillColor: r.value?.fillColor || "#3388ff",
      fillOpacity: r.value?.fillOpacity !== void 0 ? r.value.fillOpacity : 0.2,
      color: r.value?.color || "#3388ff",
      weight: r.value?.weight !== void 0 ? r.value?.weight : 3,
      stroke: r.value?.stroke !== void 0 ? r.value?.stroke : !0,
      opacity: r.value?.opacity !== void 0 ? r.value?.opacity : 1,
      fill: r.value?.fill !== void 0 ? r.value?.fill : !0,
      className: r.value?.className || ""
    }));
    return (b, g) => f.value && R.value ? (G(!0), U(ue, { key: 0 }, we(R.value, (d, h) => (G(), U(ue, {
      key: d.id || h
    }, [
      l(d.geometry) ? ne("", !0) : (G(), Le($(At), {
        key: 0,
        geojson: d,
        options: { pane: "overlayPane" },
        "options-style": () => I.value
      }, null, 8, ["geojson", "options-style"])),
      i(d.geometry) ? (G(), Le($(Mt), {
        key: 1,
        "lat-lng": i(d.geometry),
        options: { pane: "markerPane" }
      }, {
        default: re(() => [
          F($(kt), { "class-name": "someExtraClass" }, {
            default: re(() => [
              F($(it), {
                "render-as": s.value.point_render_as || "icon",
                "background-color": s.value.pointPin?.color,
                "icon-config": s.value.point,
                "property-value": d.properties?.[s.value.point_prop ?? ""],
                "image-url": s.value.point_image_url,
                "image-size": s.value.point_image_size || 32
              }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1032, ["lat-lng"])) : ne("", !0)
    ], 64))), 128)) : ne("", !0);
  }
}), nt = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, a] of o)
    e[n] = a;
  return e;
}, Wt = /* @__PURE__ */ nt(Zt, [["__scopeId", "data-v-5ad1856d"]]), Ht = { class: "geojson-settings" }, Kt = { class: "tab-content" }, Qt = {
  key: 0,
  class: "full"
}, Xt = {
  key: 1,
  class: "full"
}, Yt = {
  key: 2,
  class: "full"
}, eo = /* @__PURE__ */ O({
  __name: "GeoJsonDataRendererSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const o = ft(t, "modelValue"), e = p(0);
    return o.value || (o.value = {}), o.value.conditions || (o.value.conditions = []), o.value.renderer || (o.value.renderer = {
      point_render_as: "icon",
      point_prop: "name",
      point: {
        currentIcon: "circle",
        iconColor: "#000000",
        iconSize: 24,
        isIconFilled: !1,
        strokeWeight: 400,
        opticSize: 24,
        grade: 0
      },
      pointPin: { color: "#ccc" },
      area: {
        stroke: !0,
        color: "#3388ff",
        weight: 3,
        opacity: 1,
        fill: !0,
        fillOpacity: 0.2,
        fillColor: "#3388ff",
        className: ""
      }
    }), (n, a) => {
      const r = Oe("VaTab"), s = Oe("VaTabs");
      return G(), U("div", Ht, [
        F(s, {
          modelValue: e.value,
          "onUpdate:modelValue": a[0] || (a[0] = (l) => e.value = l)
        }, {
          tabs: re(() => [
            (G(), U(ue, null, we(["Conditions", "Points", "Areas"], (l) => F(r, { key: l }, {
              default: re(() => [
                gt(ht(l), 1)
              ]),
              _: 2
            }, 1024)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        bt("div", Kt, [
          e.value === 0 ? (G(), U("div", Qt, [
            F($(ut), {
              modelValue: o.value.conditions,
              "onUpdate:modelValue": a[1] || (a[1] = (l) => o.value.conditions = l)
            }, null, 8, ["modelValue"])
          ])) : e.value === 1 ? (G(), U("div", Xt, [
            F($(dt), {
              modelValue: o.value.renderer,
              "onUpdate:modelValue": a[2] || (a[2] = (l) => o.value.renderer = l)
            }, null, 8, ["modelValue"])
          ])) : e.value === 2 ? (G(), U("div", Yt, [
            F($(pt), {
              modelValue: o.value.renderer.area,
              "onUpdate:modelValue": a[3] || (a[3] = (l) => o.value.renderer.area = l)
            }, null, 8, ["modelValue"])
          ])) : ne("", !0)
        ])
      ]);
    };
  }
}), to = /* @__PURE__ */ nt(eo, [["__scopeId", "data-v-11682d51"]]);
class oo {
  component = Wt;
  setupComponent = to;
  description = "Renders observations as GeoJSON features on the map";
  name = "GeoJSON Data Renderer";
  namespace = "geojson";
  qualifiedName = "GeoJsonDataRenderer";
  isLayerRenderer = !0;
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
var no = Object.defineProperty, ro = Object.getOwnPropertyDescriptor, rt = (t, o, e, n) => {
  for (var a = n > 1 ? void 0 : n ? ro(o, e) : o, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (a = (n ? s(o, e, a) : s(a)) || a);
  return n && a && no(o, e, a), a;
};
let de = class {
  register() {
    ct().registerDataPointRenderer(new oo());
  }
};
rt([
  lt()
], de.prototype, "register", 1);
de = rt([
  st({})
], de);
export {
  oo as GeoJsonDataRendererDescription,
  de as GeoJsonRendererComponent
};
