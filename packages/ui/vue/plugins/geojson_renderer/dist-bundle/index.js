(function(){var i="ui.vue.plugins.geojson_renderer",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".pin[data-v-5ad1856d]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #0000005c}.pin.round[data-v-5ad1856d]{border-radius:50%}.pin.contain[data-v-5ad1856d]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.pin.contain .inner[data-v-5ad1856d]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}.pin .datapoint[data-v-5ad1856d]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}.pin.marker[data-v-5ad1856d]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}.pin .inner[data-v-5ad1856d]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}.image-marker[data-v-5ad1856d]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.geojson-settings[data-v-2e4d0049]{display:flex;flex-direction:column;height:100%}.tab-content[data-v-2e4d0049]{flex:1;overflow:auto;padding:1rem}\n";})();
import { activate as rt, component as at } from "@eclipse-daanse/tsm";
import { MapMarker as lt, ConditionSettings as st, PointStyler as it, AreaStyler as ut, useDataPointRegistry as dt } from "org.eclipse.daanse.board.app.ui.vue.widget.map";
import { defineComponent as O, ref as p, inject as C, onMounted as w, markRaw as R, nextTick as S, h as U, reactive as pt, provide as x, computed as D, onBeforeUnmount as H, watch as be, onUnmounted as ue, render as ct, toRefs as yt, createElementBlock as J, createCommentVNode as se, openBlock as V, Fragment as ge, renderList as vt, createBlock as he, unref as F, withCtx as Le, createVNode as E, useModel as mt, createElementVNode as ft } from "vue";
import { DTabs as bt } from "org.eclipse.daanse.board.app.ui.vue.controls";
const Oe = (t, o) => {
  for (const e of Object.keys(o))
    t.on(e, o[e]);
}, Ce = (t) => {
  for (const o of Object.keys(t)) {
    const e = t[o];
    e && M(e.cancel) && e.cancel();
  }
}, gt = (t) => !t || typeof t.charAt != "function" ? t : t.charAt(0).toUpperCase() + t.slice(1), M = (t) => typeof t == "function", B = (t, o, e) => {
  for (const n in e) {
    const a = "set" + gt(n);
    t[a] ? be(
      () => e[n],
      (r, l) => {
        t[a](r, l);
      }
    ) : o[a] && be(
      () => e[n],
      (r) => {
        o[a](r);
      }
    );
  }
}, j = (t, o, e = {}) => {
  const n = { ...e };
  for (const a in t) {
    const r = o[a], l = t[a];
    r && (r && r.custom === !0 || l !== void 0 && (n[a] = l));
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
}, ht = async (t) => {
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
), _ = Symbol("addLayer"), re = Symbol("removeLayer"), K = Symbol(
  "registerControl"
), we = Symbol(
  "registerLayerControl"
), Be = Symbol(
  "canSetParentHtml"
), Pe = Symbol("setParentHtml"), Te = Symbol("setIcon"), Re = Symbol("bindPopup"), Ne = Symbol("bindTooltip"), Ae = Symbol("unbindPopup"), _e = Symbol("unbindTooltip"), Q = {
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
  const n = m(_), a = m(re), { options: r, methods: l } = X(t), s = j(
    t,
    q,
    r
  ), i = () => n({ leafletObject: o.value }), u = () => a({ leafletObject: o.value }), c = {
    ...l,
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
  return x(Re, c.bindPopup), x(Ne, c.bindTooltip), x(Ae, c.unbindPopup), x(_e, c.unbindTooltip), ue(() => {
    c.unbindPopup(), c.unbindTooltip(), u();
  }), { options: s, methods: c };
}, z = (t, o) => {
  if (t && o.default)
    return U("div", { style: { display: "none" } }, o.default());
}, ke = {
  ...q,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Lt = (t, o, e) => {
  const { options: n, methods: a } = Y(
    t,
    o,
    e
  );
  return { options: j(
    t,
    ke,
    n
  ), methods: a };
}, de = {
  ...ke,
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
}, Ie = (t, o, e) => {
  const { options: n, methods: a } = Lt(t, o, e), r = j(
    t,
    de,
    n
  ), l = m(re), s = {
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
    l({ leafletObject: o.value });
  }), { options: r, methods: s };
}, pe = {
  ...de,
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
}, xe = (t, o, e) => {
  const { options: n, methods: a } = Ie(
    t,
    o,
    e
  ), r = j(
    t,
    pe,
    n
  ), l = {
    ...a,
    setRadius(s) {
      o.value.setRadius(s);
    },
    setLatLng(s) {
      o.value.setLatLng(s);
    }
  };
  return { options: r, methods: l };
}, De = {
  ...pe,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, Ot = (t, o, e) => {
  const { options: n, methods: a } = xe(t, o, e), r = j(
    t,
    De,
    n
  ), l = {
    ...a
  };
  return { options: r, methods: l };
};
O({
  name: "LCircle",
  props: De,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: l, methods: s } = Ot(t, e, o);
    return w(async () => {
      const { circle: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(i(t.latLng, l));
      const { listeners: u } = A(o.attrs);
      e.value.on(u), B(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return z(this.ready, this.$slots);
  }
});
O({
  name: "LCircleMarker",
  props: pe,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: l, methods: s } = xe(
      t,
      e,
      o
    );
    return w(async () => {
      const { circleMarker: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        i(t.latLng, l)
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
    return z(this.ready, this.$slots);
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
    setPosition(l) {
      o.value && o.value.setPosition(l);
    }
  };
  return ue(() => {
    o.value && o.value.remove();
  }), { options: a, methods: r };
}, St = (t) => t.default ? U("div", { ref: "root" }, t.default()) : null;
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
    const e = p(), n = p(), a = C(P), r = m(K), { options: l, methods: s } = ee(t, e);
    return w(async () => {
      const { Control: i, DomEvent: u } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js"), c = i.extend({
        onAdd() {
          return n.value;
        }
      });
      e.value = R(new c(l)), B(s, e.value, t), r({ leafletObject: e.value }), t.disableClickPropagation && n.value && u.disableClickPropagation(n.value), t.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), S(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return St(this.$slots);
  }
});
const ze = {
  ...Z,
  prefix: {
    type: String
  }
}, jt = (t, o) => {
  const { options: e, methods: n } = ee(
    t,
    o
  ), a = j(
    t,
    ze,
    e
  ), r = {
    ...n,
    setPrefix(l) {
      o.value.setPrefix(l);
    }
  };
  return { options: a, methods: r };
};
O({
  name: "LControlAttribution",
  props: ze,
  setup(t, o) {
    const e = p(), n = C(P), a = m(K), { options: r, methods: l } = jt(t, e);
    return w(async () => {
      const { control: s } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        s.attribution(r)
      ), B(l, e.value, t), a({ leafletObject: e.value }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Ge = {
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
}, Ct = (t, o) => {
  const { options: e } = ee(t, o);
  return { options: j(
    t,
    Ge,
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
  props: Ge,
  setup(t, o) {
    const e = p(), n = C(P), a = m(we), { options: r, methods: l } = Ct(t, e);
    return w(async () => {
      const { control: s } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        s.layers(void 0, void 0, r)
      ), B(l, e.value, t), a({
        ...t,
        ...l,
        leafletObject: e.value
      }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Me = {
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
}, wt = (t, o) => {
  const { options: e, methods: n } = ee(
    t,
    o
  );
  return { options: j(
    t,
    Me,
    e
  ), methods: n };
};
O({
  name: "LControlScale",
  props: Me,
  setup(t, o) {
    const e = p(), n = C(P), a = m(K), { options: r, methods: l } = wt(t, e);
    return w(async () => {
      const { control: s } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(s.scale(r)), B(l, e.value, t), a({ leafletObject: e.value }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Ve = {
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
}, Bt = (t, o) => {
  const { options: e, methods: n } = ee(
    t,
    o
  );
  return { options: j(
    t,
    Ve,
    e
  ), methods: n };
};
O({
  name: "LControlZoom",
  props: Ve,
  setup(t, o) {
    const e = p(), n = C(P), a = m(K), { options: r, methods: l } = Bt(t, e);
    return w(async () => {
      const { control: s } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(s.zoom(r)), B(l, e.value, t), a({ leafletObject: e.value }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const ae = {
  ...q
}, ce = (t, o, e) => {
  const { options: n, methods: a } = Y(
    t,
    o,
    e
  ), r = j(
    t,
    ae,
    n
  ), l = {
    ...a,
    addLayer(s) {
      o.value.addLayer(s.leafletObject);
    },
    removeLayer(s) {
      o.value.removeLayer(s.leafletObject);
    }
  };
  return x(_, l.addLayer), x(re, l.removeLayer), { options: r, methods: l };
}, Fe = {
  ...ae
}, Pt = (t, o, e) => {
  const { options: n, methods: a } = ce(
    t,
    o,
    e
  ), r = j(
    t,
    Fe,
    n
  ), l = {
    ...a
  };
  return { options: r, methods: l };
};
O({
  props: Fe,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { methods: l, options: s } = Pt(
      t,
      e,
      o
    );
    return w(async () => {
      const { featureGroup: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        i(void 0, s)
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
    return z(this.ready, this.$slots);
  }
});
const Ue = {
  ...ae,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, Tt = (t, o, e) => {
  const { options: n, methods: a } = ce(
    t,
    o,
    e
  ), r = j(
    t,
    Ue,
    n
  );
  Object.prototype.hasOwnProperty.call(t, "optionsStyle") && (r.style = t.optionsStyle);
  const l = {
    ...a,
    setGeojson(s) {
      o.value.clearLayers(), o.value.addData(s);
    },
    setOptionsStyle(s) {
      o.value.setStyle(s);
    },
    getGeoJSONData() {
      return o.value.toGeoJSON();
    },
    getBounds() {
      return o.value.getBounds();
    }
  };
  return { options: r, methods: l };
}, Rt = O({
  props: Ue,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { methods: l, options: s } = Tt(t, e, o);
    return w(async () => {
      const { geoJSON: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(i(t.geojson, s));
      const { listeners: u } = A(o.attrs);
      e.value.on(u), B(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return z(this.ready, this.$slots);
  }
}), ye = {
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
}, $e = (t, o, e) => {
  const { options: n, methods: a } = Y(
    t,
    o,
    e
  ), r = j(
    t,
    ye,
    n
  ), l = {
    ...a,
    setTileComponent() {
      var s;
      (s = o.value) == null || s.redraw();
    }
  };
  return ue(() => {
    o.value.off();
  }), { options: r, methods: l };
}, Nt = (t, o, e, n) => t.extend({
  initialize(a) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), e.setOptions(this, a);
  },
  createTile(a) {
    const r = this._tileCoordsToKey(a);
    this.tileComponents[r] = o.create("div");
    const l = U({ setup: n, props: ["coords"] }, { coords: a });
    return ct(l, this.tileComponents[r]), this.tileComponents[r];
  },
  _unloadTile(a) {
    const r = this._tileCoordsToKey(a.coords);
    this.tileComponents[r] && (this.tileComponents[r].innerHTML = "", this.tileComponents[r] = void 0);
  }
});
O({
  props: {
    ...ye,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(t, o) {
    const e = p(), n = p(null), a = p(!1), r = C(P), l = m(_), { options: s, methods: i } = $e(t, e, o);
    return w(async () => {
      const { GridLayer: u, DomUtil: c, Util: v } = r ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js"), N = Nt(
        u,
        c,
        v,
        t.childRender
      );
      e.value = R(new N(s));
      const { listeners: f } = A(o.attrs);
      e.value.on(f), B(i, e.value, t), l({
        ...t,
        ...i,
        leafletObject: e.value
      }), a.value = !0, S(() => o.emit("ready", e.value));
    }), { root: n, ready: a, leafletObject: e };
  },
  render() {
    return this.ready ? U("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const Se = {
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
}, At = O({
  name: "LIcon",
  props: {
    ...Se,
    ...Q
  },
  setup(t, o) {
    const e = p(), n = C(P), a = m(Be), r = m(Pe), l = m(Te);
    let s, i, u, c, v;
    const N = (g, d, h) => {
      const k = g && g.innerHTML;
      if (!d) {
        h && v && a() && r(k);
        return;
      }
      const { listeners: $ } = A(o.attrs);
      v && i(v, $);
      const { options: le } = X(t), G = j(
        t,
        Se,
        le
      );
      k && (G.html = k), v = G.html ? u(G) : c(G), s(v, $), l(v);
    }, f = () => {
      S(() => N(e.value, !0, !1));
    }, I = () => {
      S(() => N(e.value, !1, !0));
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
      s = g.on, i = g.off, u = d, c = h, B(b, {}, t), new MutationObserver(I).observe(e.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), f();
    }), { root: e };
  },
  render() {
    const t = this.$slots.default ? this.$slots.default() : void 0;
    return U("div", { ref: "root" }, t);
  }
}), Je = {
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
}, _t = (t, o, e) => {
  const { options: n, methods: a } = Y(
    t,
    o,
    e
  ), r = j(
    t,
    Je,
    n
  ), l = {
    ...a,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(s) {
      return o.value.setOpacity(s);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(s) {
      return o.value.setUrl(s);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(s) {
      return o.value.setBounds(s);
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
    setZIndex(s) {
      return o.value.setZIndex(s);
    }
  };
  return { options: r, methods: l };
};
O({
  name: "LImageOverlay",
  props: Je,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: l, methods: s } = _t(
      t,
      e,
      o
    );
    return w(async () => {
      const { imageOverlay: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        i(t.url, t.bounds, l)
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
    return z(this.ready, this.$slots);
  }
});
O({
  props: ae,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { methods: l } = ce(t, e, o);
    return w(async () => {
      const { layerGroup: s } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        s(void 0, t.options)
      );
      const { listeners: i } = A(o.attrs);
      e.value.on(i), B(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return z(this.ready, this.$slots);
  }
});
function Ee(t, o, e) {
  var n, a, r;
  o === void 0 && (o = 50), e === void 0 && (e = {});
  var l = (n = e.isImmediate) != null && n, s = (a = e.callback) != null && a, i = e.maxWait, u = Date.now(), c = [];
  function v() {
    if (i !== void 0) {
      var f = Date.now() - u;
      if (f + o >= i)
        return i - f;
    }
    return o;
  }
  var N = function() {
    var f = [].slice.call(arguments), I = this;
    return new Promise(function(b, g) {
      var d = l && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !l) {
          var k = t.apply(I, f);
          s && s(k), c.forEach(function($) {
            return (0, $.resolve)(k);
          }), c = [];
        }
      }, v()), d) {
        var h = t.apply(I, f);
        return s && s(h), b(h);
      }
      c.push({ resolve: b, reject: g });
    });
  };
  return N.cancel = function(f) {
    r !== void 0 && clearTimeout(r), c.forEach(function(I) {
      return (0, I.reject)(f);
    }), c = [];
  }, N;
}
const je = {
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
  props: je,
  setup(t, o) {
    const e = p(), n = pt({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: a } = X(t), r = j(
      t,
      je,
      a
    ), { listeners: l, attrs: s } = A(o.attrs), i = te(_), u = te(re), c = te(K), v = te(
      we
    );
    x(P, t.useGlobalLeaflet);
    const N = D(() => {
      const d = {};
      return t.noBlockingAnimations && (d.animate = !1), d;
    }), f = D(() => {
      const d = N.value;
      return t.padding && (d.padding = t.padding), t.paddingTopLeft && (d.paddingTopLeft = t.paddingTopLeft), t.paddingBottomRight && (d.paddingBottomRight = t.paddingBottomRight), d;
    }), I = {
      moveend: Ee((d) => {
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
      const { map: d, CRS: h, Icon: k, latLngBounds: $, latLng: le, stamp: G } = t.useGlobalLeaflet ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (y) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${y.message}`
        );
      }
      await ht(k);
      const nt = typeof r.crs == "string" ? h[r.crs] : r.crs;
      r.crs = nt || h.EPSG3857;
      const W = {
        addLayer(y) {
          y.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(y) : n.layersInControl.find(
            (T) => G(T.leafletObject) === G(y.leafletObject)
          ) || (n.layerControl.addLayer(y), n.layersInControl.push(y))), y.visible !== !1 && n.leafletRef.addLayer(y.leafletObject);
        },
        removeLayer(y) {
          y.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (T) => T.name !== y.name
          ) : (n.layerControl.removeLayer(y.leafletObject), n.layersInControl = n.layersInControl.filter(
            (T) => G(T.leafletObject) !== G(y.leafletObject)
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
          y !== T && n.leafletRef.setZoom(y, N.value);
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
          const T = $(y);
          T.isValid() && !(n.lastSetBounds || n.leafletRef.getBounds()).equals(T, 0) && (n.lastSetBounds = T, n.leafletRef.fitBounds(T));
        },
        setCenter(y) {
          if (y == null)
            return;
          const T = le(y), fe = n.lastSetCenter || n.leafletRef.getCenter();
          (fe.lat !== T.lat || fe.lng !== T.lng) && (n.lastSetCenter = T, n.leafletRef.panTo(T, N.value));
        }
      };
      oe(i, W.addLayer), oe(u, W.removeLayer), oe(c, W.registerControl), oe(v, W.registerLayerControl), n.leafletRef = R(d(e.value, r)), B(W, n.leafletRef, t), Oe(n.leafletRef, I), Oe(n.leafletRef, l), n.ready = !0, S(() => o.emit("ready", n.leafletRef));
    }), H(() => {
      Ce(I), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const b = D(() => n.leafletRef), g = D(() => n.ready);
    return { root: e, ready: g, leafletObject: b, attrs: s };
  },
  render({ attrs: t }) {
    return t.style || (t.style = {}), t.style.width || (t.style.width = "100%"), t.style.height || (t.style.height = "100%"), U(
      "div",
      {
        ...t,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
});
const kt = ["Symbol(Comment)", "Symbol(Text)"], It = ["LTooltip", "LPopup"], qe = {
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
}, xt = (t, o, e) => {
  const { options: n, methods: a } = Y(
    t,
    o,
    e
  ), r = j(
    t,
    qe,
    n
  ), l = {
    ...a,
    setDraggable(s) {
      o.value.dragging && (s ? o.value.dragging.enable() : o.value.dragging.disable());
    },
    latLngSync(s) {
      e.emit("update:latLng", s.latlng), e.emit("update:lat-lng", s.latlng);
    },
    setLatLng(s) {
      if (s != null && o.value) {
        const i = o.value.getLatLng();
        (!i || !i.equals(s)) && o.value.setLatLng(s);
      }
    }
  };
  return { options: r, methods: l };
}, Dt = (t, o) => {
  const e = o.slots.default && o.slots.default();
  return e && e.length && e.some(zt);
};
function zt(t) {
  return !(kt.includes(t.type.toString()) || It.includes(t.type.name));
}
const Gt = O({
  name: "LMarker",
  props: qe,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_);
    x(
      Be,
      () => {
        var u;
        return !!((u = e.value) != null && u.getElement());
      }
    ), x(Pe, (u) => {
      var c, v;
      const N = M((c = e.value) == null ? void 0 : c.getElement) && ((v = e.value) == null ? void 0 : v.getElement());
      N && (N.innerHTML = u);
    }), x(
      Te,
      (u) => {
        var c;
        return ((c = e.value) == null ? void 0 : c.setIcon) && e.value.setIcon(u);
      }
    );
    const { options: l, methods: s } = xt(t, e, o), i = {
      moveHandler: Ee(s.latLngSync)
    };
    return w(async () => {
      const { marker: u, divIcon: c } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      Dt(l, o) && (l.icon = c({ className: "" })), e.value = R(u(t.latLng, l));
      const { listeners: v } = A(o.attrs);
      e.value.on(v), e.value.on("move", i.moveHandler), B(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), H(() => Ce(i)), { ready: n, leafletObject: e };
  },
  render() {
    return z(this.ready, this.$slots);
  }
}), ve = {
  ...de,
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
}, Ze = (t, o, e) => {
  const { options: n, methods: a } = Ie(
    t,
    o,
    e
  ), r = j(
    t,
    ve,
    n
  ), l = {
    ...a,
    setSmoothFactor(s) {
      o.value.setStyle({ smoothFactor: s });
    },
    setNoClip(s) {
      o.value.setStyle({ noClip: s });
    },
    addLatLng(s) {
      o.value.addLatLng(s);
    }
  };
  return { options: r, methods: l };
}, ne = {
  ...ve
}, We = (t, o, e) => {
  const { options: n, methods: a } = Ze(
    t,
    o,
    e
  ), r = j(
    t,
    ne,
    n
  ), l = {
    ...a,
    toGeoJSON(s) {
      return o.value.toGeoJSON(s);
    }
  };
  return { options: r, methods: l };
};
O({
  name: "LPolygon",
  props: ne,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: l, methods: s } = We(t, e, o);
    return w(async () => {
      const { polygon: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(i(t.latLngs, l));
      const { listeners: u } = A(o.attrs);
      e.value.on(u), B(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return z(this.ready, this.$slots);
  }
});
O({
  name: "LPolyline",
  props: ve,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: l, methods: s } = Ze(t, e, o);
    return w(async () => {
      const { polyline: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        i(t.latLngs, l)
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
    return z(this.ready, this.$slots);
  }
});
const He = {
  ...Q,
  content: {
    type: String,
    default: null
  }
}, Ke = (t, o) => {
  const { options: e, methods: n } = X(t), a = {
    ...n,
    setContent(r) {
      o.value && r !== null && r !== void 0 && o.value.setContent(r);
    }
  };
  return { options: e, methods: a };
}, Qe = (t) => t.default ? U("div", { ref: "root" }, t.default()) : null, Mt = {
  ...He,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, Vt = (t, o) => {
  const { options: e, methods: n } = Ke(t, o);
  return { options: e, methods: n };
};
O({
  name: "LPopup",
  props: Mt,
  setup(t, o) {
    const e = p(), n = p(null), a = C(P), r = m(Re), l = m(Ae), { options: s, methods: i } = Vt(t, e);
    return w(async () => {
      const { popup: u } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(u(s)), t.latLng !== void 0 && e.value.setLatLng(t.latLng), B(i, e.value, t);
      const { listeners: c } = A(o.attrs);
      e.value.on(c), e.value.setContent(t.content || n.value || ""), r(e.value), S(() => o.emit("ready", e.value));
    }), H(() => {
      l();
    }), { root: n, leafletObject: e };
  },
  render() {
    return Qe(this.$slots);
  }
});
const Xe = {
  ...ne,
  latLngs: {
    ...ne.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, Ft = (t, o, e) => {
  const { options: n, methods: a } = We(
    t,
    o,
    e
  ), r = j(
    t,
    Xe,
    n
  ), l = {
    ...a,
    setBounds(s) {
      o.value.setBounds(s);
    },
    setLatLngs(s) {
      o.value.setBounds(s);
    }
  };
  return { options: r, methods: l };
};
O({
  name: "LRectangle",
  props: Xe,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(P), r = m(_), { options: l, methods: s } = Ft(t, e, o);
    return w(async () => {
      const { rectangle: i, latLngBounds: u } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js"), c = t.bounds ? u(t.bounds) : u(t.latLngs || []);
      e.value = R(i(c, l));
      const { listeners: v } = A(o.attrs);
      e.value.on(v), B(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return z(this.ready, this.$slots);
  }
});
const me = {
  ...ye,
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
}, Ye = (t, o, e) => {
  const { options: n, methods: a } = $e(t, o, e), r = j(
    t,
    me,
    n
  ), l = {
    ...a
  };
  return { options: r, methods: l };
};
O({
  props: me,
  setup(t, o) {
    const e = p(), n = C(P), a = m(_), { options: r, methods: l } = Ye(t, e, o);
    return w(async () => {
      const { tileLayer: s } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(s(t.url, r));
      const { listeners: i } = A(o.attrs);
      e.value.on(i), B(l, e.value, t), a({
        ...t,
        ...l,
        leafletObject: e.value
      }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Ut = {
  ...He
}, $t = (t, o) => {
  const { options: e, methods: n } = Ke(t, o), a = m(_e);
  return H(() => {
    a();
  }), { options: e, methods: n };
};
O({
  name: "LTooltip",
  props: Ut,
  setup(t, o) {
    const e = p(), n = p(null), a = C(P), r = m(Ne), { options: l, methods: s } = $t(t, e);
    return w(async () => {
      const { tooltip: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(i(l)), B(s, e.value, t);
      const { listeners: u } = A(o.attrs);
      e.value.on(u), e.value.setContent(t.content || n.value || ""), r(e.value), S(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return Qe(this.$slots);
  }
});
const et = {
  ...me,
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
}, Jt = (t, o, e) => {
  const { options: n, methods: a } = Ye(t, o, e);
  return {
    options: j(
      t,
      et,
      n
    ),
    methods: {
      ...a
    }
  };
};
O({
  props: et,
  setup(t, o) {
    const e = p(), n = C(P), a = m(_), { options: r, methods: l } = Jt(
      t,
      e,
      o
    );
    return w(async () => {
      const { tileLayer: s } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        s.wms(t.url, r)
      );
      const { listeners: i } = A(o.attrs);
      e.value.on(i), B(l, e.value, t), a({
        ...t,
        ...l,
        leafletObject: e.value
      }), S(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Et = /* @__PURE__ */ O({
  __name: "GeoJsonDataRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 0 }
  },
  setup(t) {
    const o = t, { config: e, data: n } = yt(o), a = D(() => e.value?.conditions || []), r = D(() => e.value?.renderer?.area || {}), l = D(() => e.value?.renderer || {}), s = (b) => b?.type === "Point" || b?.type === "MultiPoint", i = (b) => b && b.type === "Point" ? [b.coordinates[1], b.coordinates[0]] : null, u = (b) => {
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
    }, N = D(() => n.value ? n.value.type === "FeatureCollection" ? u(n.value) : [n.value] : null), f = D(() => {
      if (!n.value) return !1;
      const b = ["Feature", "FeatureCollection", "Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon", "GeometryCollection"];
      return n.value.type && b.includes(n.value.type);
    }), I = D(() => ({
      fillColor: r.value?.fillColor || "#3388ff",
      fillOpacity: r.value?.fillOpacity !== void 0 ? r.value.fillOpacity : 0.2,
      color: r.value?.color || "#3388ff",
      weight: r.value?.weight !== void 0 ? r.value?.weight : 3,
      stroke: r.value?.stroke !== void 0 ? r.value?.stroke : !0,
      opacity: r.value?.opacity !== void 0 ? r.value?.opacity : 1,
      fill: r.value?.fill !== void 0 ? r.value?.fill : !0,
      className: r.value?.className || ""
    }));
    return (b, g) => f.value && N.value ? (V(!0), J(ge, { key: 0 }, vt(N.value, (d, h) => (V(), J(ge, {
      key: d.id || h
    }, [
      s(d.geometry) ? se("", !0) : (V(), he(F(Rt), {
        key: 0,
        geojson: d,
        options: { pane: "overlayPane" },
        "options-style": () => I.value
      }, null, 8, ["geojson", "options-style"])),
      i(d.geometry) ? (V(), he(F(Gt), {
        key: 1,
        "lat-lng": i(d.geometry),
        options: { pane: "markerPane" }
      }, {
        default: Le(() => [
          E(F(At), { "class-name": "someExtraClass" }, {
            default: Le(() => [
              E(F(lt), {
                "render-as": l.value.point_render_as || "icon",
                "background-color": l.value.pointPin?.color,
                "icon-config": l.value.point,
                "property-value": d.properties?.[l.value.point_prop ?? ""],
                "image-url": l.value.point_image_url,
                "image-size": l.value.point_image_size || 32
              }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1032, ["lat-lng"])) : se("", !0)
    ], 64))), 128)) : se("", !0);
  }
}), tt = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, a] of o)
    e[n] = a;
  return e;
}, qt = /* @__PURE__ */ tt(Et, [["__scopeId", "data-v-5ad1856d"]]), Zt = { class: "geojson-settings" }, Wt = { class: "tab-content" }, Ht = {
  key: 0,
  class: "full"
}, Kt = {
  key: 1,
  class: "full"
}, Qt = {
  key: 2,
  class: "full"
}, Xt = /* @__PURE__ */ O({
  __name: "GeoJsonDataRendererSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const o = mt(t, "modelValue"), e = [
      { id: "conditions", label: "Bedingungen" },
      { id: "points", label: "Punkte" },
      { id: "areas", label: "Flächen" }
    ], n = p("conditions");
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
    }), (a, r) => (V(), J("div", Zt, [
      E(F(bt), {
        modelValue: n.value,
        "onUpdate:modelValue": r[0] || (r[0] = (l) => n.value = l),
        tabs: e,
        label: "Was gezeichnet wird"
      }, null, 8, ["modelValue"]),
      ft("div", Wt, [
        n.value === "conditions" ? (V(), J("div", Ht, [
          E(F(st), {
            modelValue: o.value.conditions,
            "onUpdate:modelValue": r[1] || (r[1] = (l) => o.value.conditions = l)
          }, null, 8, ["modelValue"])
        ])) : n.value === "points" ? (V(), J("div", Kt, [
          E(F(it), {
            modelValue: o.value.renderer,
            "onUpdate:modelValue": r[2] || (r[2] = (l) => o.value.renderer = l)
          }, null, 8, ["modelValue"])
        ])) : (V(), J("div", Qt, [
          E(F(ut), {
            modelValue: o.value.renderer.area,
            "onUpdate:modelValue": r[3] || (r[3] = (l) => o.value.renderer.area = l)
          }, null, 8, ["modelValue"])
        ]))
      ])
    ]));
  }
}), Yt = /* @__PURE__ */ tt(Xt, [["__scopeId", "data-v-2e4d0049"]]);
class eo {
  component = qt;
  setupComponent = Yt;
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
var to = Object.defineProperty, oo = Object.getOwnPropertyDescriptor, ot = (t, o, e, n) => {
  for (var a = n > 1 ? void 0 : n ? oo(o, e) : o, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (n ? l(o, e, a) : l(a)) || a);
  return n && a && to(o, e, a), a;
};
let ie = class {
  register() {
    dt().registerDataPointRenderer(new eo());
  }
};
ot([
  rt()
], ie.prototype, "register", 1);
ie = ot([
  at({})
], ie);
export {
  eo as GeoJsonDataRendererDescription,
  ie as GeoJsonRendererComponent
};
