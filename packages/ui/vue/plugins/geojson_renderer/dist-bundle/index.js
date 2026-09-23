(function(){var i="ui.vue.plugins.geojson_renderer",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".pin[data-v-5ad1856d]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #0000005c}.pin.round[data-v-5ad1856d]{border-radius:50%}.pin.contain[data-v-5ad1856d]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.pin.contain .inner[data-v-5ad1856d]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}.pin .datapoint[data-v-5ad1856d]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}.pin.marker[data-v-5ad1856d]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}.pin .inner[data-v-5ad1856d]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}.image-marker[data-v-5ad1856d]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.geojson-settings[data-v-78e3257e]{display:flex;flex-direction:column;height:100%}.tab-content[data-v-78e3257e]{flex:1;overflow:auto;padding:1rem}\n";})();
import { component as we, activate as st } from "@eclipse-daanse/tsm";
import { MapMarker as it, ConditionSettings as ut, PointStyler as dt, AreaStyler as pt, useDataPointRegistry as ct } from "org.eclipse.daanse.board.app.ui.vue.widget.map";
import { defineComponent as O, ref as p, inject as C, onMounted as w, markRaw as R, nextTick as S, h as F, reactive as yt, provide as J, computed as I, onBeforeUnmount as H, watch as be, onUnmounted as ue, render as vt, toRefs as mt, createElementBlock as U, createCommentVNode as se, openBlock as $, Fragment as ge, renderList as ft, createBlock as he, unref as z, withCtx as Le, createVNode as E, useModel as bt, createElementVNode as gt } from "vue";
import { DTabs as ht } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useTranslation as Lt } from "org.eclipse.daanse.board.app.ui.vue.composables";
const Oe = (t, o) => {
  for (const e of Object.keys(o))
    t.on(e, o[e]);
}, Pe = (t) => {
  for (const o of Object.keys(t)) {
    const e = t[o];
    e && M(e.cancel) && e.cancel();
  }
}, Ot = (t) => !t || typeof t.charAt != "function" ? t : t.charAt(0).toUpperCase() + t.slice(1), M = (t) => typeof t == "function", P = (t, o, e) => {
  for (const n in e) {
    const a = "set" + Ot(n);
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
}, St = async (t) => {
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
  return e.wrapped = o, J(t, e), e;
}, oe = (t, o) => t.wrapped.value = o, L = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, m = (t) => {
  const o = C(t);
  if (o === void 0)
    throw new Error(
      `Attempt to inject ${t.description} before it was provided.`
    );
  return o;
}, B = Symbol(
  "useGlobalLeaflet"
), _ = Symbol("addLayer"), re = Symbol("removeLayer"), K = Symbol(
  "registerControl"
), Be = Symbol(
  "registerLayerControl"
), Te = Symbol(
  "canSetParentHtml"
), Re = Symbol("setParentHtml"), Ne = Symbol("setIcon"), Ae = Symbol("bindPopup"), _e = Symbol("bindTooltip"), Ge = Symbol("unbindPopup"), ke = Symbol("unbindTooltip"), Q = {
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
  return J(Ae, c.bindPopup), J(_e, c.bindTooltip), J(Ge, c.unbindPopup), J(ke, c.unbindTooltip), ue(() => {
    c.unbindPopup(), c.unbindTooltip(), u();
  }), { options: s, methods: c };
}, D = (t, o) => {
  if (t && o.default)
    return F("div", { style: { display: "none" } }, o.default());
}, Ie = {
  ...q,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, jt = (t, o, e) => {
  const { options: n, methods: a } = Y(
    t,
    o,
    e
  );
  return { options: j(
    t,
    Ie,
    n
  ), methods: a };
}, de = {
  ...Ie,
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
}, Je = (t, o, e) => {
  const { options: n, methods: a } = jt(t, o, e), r = j(
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
}, De = (t, o, e) => {
  const { options: n, methods: a } = Je(
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
}, xe = {
  ...pe,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, Ct = (t, o, e) => {
  const { options: n, methods: a } = De(t, o, e), r = j(
    t,
    xe,
    n
  ), l = {
    ...a
  };
  return { options: r, methods: l };
};
O({
  name: "LCircle",
  props: xe,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(B), r = m(_), { options: l, methods: s } = Ct(t, e, o);
    return w(async () => {
      const { circle: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(i(t.latLng, l));
      const { listeners: u } = A(o.attrs);
      e.value.on(u), P(s, e.value, t), r({
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
O({
  name: "LCircleMarker",
  props: pe,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(B), r = m(_), { options: l, methods: s } = De(
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
      e.value.on(u), P(s, e.value, t), r({
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
}, wt = (t) => t.default ? F("div", { ref: "root" }, t.default()) : null;
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
    const e = p(), n = p(), a = C(B), r = m(K), { options: l, methods: s } = ee(t, e);
    return w(async () => {
      const { Control: i, DomEvent: u } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js"), c = i.extend({
        onAdd() {
          return n.value;
        }
      });
      e.value = R(new c(l)), P(s, e.value, t), r({ leafletObject: e.value }), t.disableClickPropagation && n.value && u.disableClickPropagation(n.value), t.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), S(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return wt(this.$slots);
  }
});
const ze = {
  ...Z,
  prefix: {
    type: String
  }
}, Pt = (t, o) => {
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
    const e = p(), n = C(B), a = m(K), { options: r, methods: l } = Pt(t, e);
    return w(async () => {
      const { control: s } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        s.attribution(r)
      ), P(l, e.value, t), a({ leafletObject: e.value }), S(() => o.emit("ready", e.value));
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
    const e = p(), n = C(B), a = m(Be), { options: r, methods: l } = Bt(t, e);
    return w(async () => {
      const { control: s } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        s.layers(void 0, void 0, r)
      ), P(l, e.value, t), a({
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
const $e = {
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
}, Tt = (t, o) => {
  const { options: e, methods: n } = ee(
    t,
    o
  );
  return { options: j(
    t,
    $e,
    e
  ), methods: n };
};
O({
  name: "LControlScale",
  props: $e,
  setup(t, o) {
    const e = p(), n = C(B), a = m(K), { options: r, methods: l } = Tt(t, e);
    return w(async () => {
      const { control: s } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(s.scale(r)), P(l, e.value, t), a({ leafletObject: e.value }), S(() => o.emit("ready", e.value));
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
}, Rt = (t, o) => {
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
    const e = p(), n = C(B), a = m(K), { options: r, methods: l } = Rt(t, e);
    return w(async () => {
      const { control: s } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(s.zoom(r)), P(l, e.value, t), a({ leafletObject: e.value }), S(() => o.emit("ready", e.value));
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
  return J(_, l.addLayer), J(re, l.removeLayer), { options: r, methods: l };
}, Ve = {
  ...ae
}, Nt = (t, o, e) => {
  const { options: n, methods: a } = ce(
    t,
    o,
    e
  ), r = j(
    t,
    Ve,
    n
  ), l = {
    ...a
  };
  return { options: r, methods: l };
};
O({
  props: Ve,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(B), r = m(_), { methods: l, options: s } = Nt(
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
      e.value.on(u), P(l, e.value, t), r({
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
}, At = (t, o, e) => {
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
}, _t = O({
  props: Ue,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(B), r = m(_), { methods: l, options: s } = At(t, e, o);
    return w(async () => {
      const { geoJSON: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(i(t.geojson, s));
      const { listeners: u } = A(o.attrs);
      e.value.on(u), P(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
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
}, Ee = (t, o, e) => {
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
}, Gt = (t, o, e, n) => t.extend({
  initialize(a) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), e.setOptions(this, a);
  },
  createTile(a) {
    const r = this._tileCoordsToKey(a);
    this.tileComponents[r] = o.create("div");
    const l = F({ setup: n, props: ["coords"] }, { coords: a });
    return vt(l, this.tileComponents[r]), this.tileComponents[r];
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
    const e = p(), n = p(null), a = p(!1), r = C(B), l = m(_), { options: s, methods: i } = Ee(t, e, o);
    return w(async () => {
      const { GridLayer: u, DomUtil: c, Util: v } = r ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js"), N = Gt(
        u,
        c,
        v,
        t.childRender
      );
      e.value = R(new N(s));
      const { listeners: f } = A(o.attrs);
      e.value.on(f), P(i, e.value, t), l({
        ...t,
        ...i,
        leafletObject: e.value
      }), a.value = !0, S(() => o.emit("ready", e.value));
    }), { root: n, ready: a, leafletObject: e };
  },
  render() {
    return this.ready ? F("div", { style: { display: "none" }, ref: "root" }) : null;
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
}, kt = O({
  name: "LIcon",
  props: {
    ...Se,
    ...Q
  },
  setup(t, o) {
    const e = p(), n = C(B), a = m(Te), r = m(Re), l = m(Ne);
    let s, i, u, c, v;
    const N = (g, d, h) => {
      const G = g && g.innerHTML;
      if (!d) {
        h && v && a() && r(G);
        return;
      }
      const { listeners: V } = A(o.attrs);
      v && i(v, V);
      const { options: le } = X(t), x = j(
        t,
        Se,
        le
      );
      G && (x.html = G), v = x.html ? u(x) : c(x), s(v, V), l(v);
    }, f = () => {
      S(() => N(e.value, !0, !1));
    }, k = () => {
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
      s = g.on, i = g.off, u = d, c = h, P(b, {}, t), new MutationObserver(k).observe(e.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), f();
    }), { root: e };
  },
  render() {
    const t = this.$slots.default ? this.$slots.default() : void 0;
    return F("div", { ref: "root" }, t);
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
  props: qe,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(B), r = m(_), { options: l, methods: s } = It(
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
      e.value.on(u), P(s, e.value, t), r({
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
O({
  props: ae,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(B), r = m(_), { methods: l } = ce(t, e, o);
    return w(async () => {
      const { layerGroup: s } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        s(void 0, t.options)
      );
      const { listeners: i } = A(o.attrs);
      e.value.on(i), P(l, e.value, t), r({
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
function Ze(t, o, e) {
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
    var f = [].slice.call(arguments), k = this;
    return new Promise(function(b, g) {
      var d = l && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !l) {
          var G = t.apply(k, f);
          s && s(G), c.forEach(function(V) {
            return (0, V.resolve)(G);
          }), c = [];
        }
      }, v()), d) {
        var h = t.apply(k, f);
        return s && s(h), b(h);
      }
      c.push({ resolve: b, reject: g });
    });
  };
  return N.cancel = function(f) {
    r !== void 0 && clearTimeout(r), c.forEach(function(k) {
      return (0, k.reject)(f);
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
    const e = p(), n = yt({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: a } = X(t), r = j(
      t,
      je,
      a
    ), { listeners: l, attrs: s } = A(o.attrs), i = te(_), u = te(re), c = te(K), v = te(
      Be
    );
    J(B, t.useGlobalLeaflet);
    const N = I(() => {
      const d = {};
      return t.noBlockingAnimations && (d.animate = !1), d;
    }), f = I(() => {
      const d = N.value;
      return t.padding && (d.padding = t.padding), t.paddingTopLeft && (d.paddingTopLeft = t.paddingTopLeft), t.paddingBottomRight && (d.paddingBottomRight = t.paddingBottomRight), d;
    }), k = {
      moveend: Ze((d) => {
        n.leafletRef && (o.emit("update:zoom", n.leafletRef.getZoom()), o.emit("update:center", n.leafletRef.getCenter()), o.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(d) {
        const h = n.layersInControl.find((G) => G.name === d.name);
        h && h.updateVisibleProp(!0);
      },
      overlayremove(d) {
        const h = n.layersInControl.find((G) => G.name === d.name);
        h && h.updateVisibleProp(!1);
      }
    };
    w(async () => {
      t.useGlobalLeaflet && (L.L = L.L || await import("./leaflet-src-BDi_6Owi.js").then((y) => y.l));
      const { map: d, CRS: h, Icon: G, latLngBounds: V, latLng: le, stamp: x } = t.useGlobalLeaflet ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (y) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${y.message}`
        );
      }
      await St(G);
      const lt = typeof r.crs == "string" ? h[r.crs] : r.crs;
      r.crs = lt || h.EPSG3857;
      const W = {
        addLayer(y) {
          y.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(y) : n.layersInControl.find(
            (T) => x(T.leafletObject) === x(y.leafletObject)
          ) || (n.layerControl.addLayer(y), n.layersInControl.push(y))), y.visible !== !1 && n.leafletRef.addLayer(y.leafletObject);
        },
        removeLayer(y) {
          y.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (T) => T.name !== y.name
          ) : (n.layerControl.removeLayer(y.leafletObject), n.layersInControl = n.layersInControl.filter(
            (T) => x(T.leafletObject) !== x(y.leafletObject)
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
          const T = V(y);
          T.isValid() && !(n.lastSetBounds || n.leafletRef.getBounds()).equals(T, 0) && (n.lastSetBounds = T, n.leafletRef.fitBounds(T));
        },
        setCenter(y) {
          if (y == null)
            return;
          const T = le(y), fe = n.lastSetCenter || n.leafletRef.getCenter();
          (fe.lat !== T.lat || fe.lng !== T.lng) && (n.lastSetCenter = T, n.leafletRef.panTo(T, N.value));
        }
      };
      oe(i, W.addLayer), oe(u, W.removeLayer), oe(c, W.registerControl), oe(v, W.registerLayerControl), n.leafletRef = R(d(e.value, r)), P(W, n.leafletRef, t), Oe(n.leafletRef, k), Oe(n.leafletRef, l), n.ready = !0, S(() => o.emit("ready", n.leafletRef));
    }), H(() => {
      Pe(k), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const b = I(() => n.leafletRef), g = I(() => n.ready);
    return { root: e, ready: g, leafletObject: b, attrs: s };
  },
  render({ attrs: t }) {
    return t.style || (t.style = {}), t.style.width || (t.style.width = "100%"), t.style.height || (t.style.height = "100%"), F(
      "div",
      {
        ...t,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
});
const Jt = ["Symbol(Comment)", "Symbol(Text)"], Dt = ["LTooltip", "LPopup"], We = {
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
    We,
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
}, zt = (t, o) => {
  const e = o.slots.default && o.slots.default();
  return e && e.length && e.some(Mt);
};
function Mt(t) {
  return !(Jt.includes(t.type.toString()) || Dt.includes(t.type.name));
}
const $t = O({
  name: "LMarker",
  props: We,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(B), r = m(_);
    J(
      Te,
      () => {
        var u;
        return !!((u = e.value) != null && u.getElement());
      }
    ), J(Re, (u) => {
      var c, v;
      const N = M((c = e.value) == null ? void 0 : c.getElement) && ((v = e.value) == null ? void 0 : v.getElement());
      N && (N.innerHTML = u);
    }), J(
      Ne,
      (u) => {
        var c;
        return ((c = e.value) == null ? void 0 : c.setIcon) && e.value.setIcon(u);
      }
    );
    const { options: l, methods: s } = xt(t, e, o), i = {
      moveHandler: Ze(s.latLngSync)
    };
    return w(async () => {
      const { marker: u, divIcon: c } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      zt(l, o) && (l.icon = c({ className: "" })), e.value = R(u(t.latLng, l));
      const { listeners: v } = A(o.attrs);
      e.value.on(v), e.value.on("move", i.moveHandler), P(s, e.value, t), r({
        ...t,
        ...s,
        leafletObject: e.value
      }), n.value = !0, S(() => o.emit("ready", e.value));
    }), H(() => Pe(i)), { ready: n, leafletObject: e };
  },
  render() {
    return D(this.ready, this.$slots);
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
}, He = (t, o, e) => {
  const { options: n, methods: a } = Je(
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
}, Ke = (t, o, e) => {
  const { options: n, methods: a } = He(
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
    const e = p(), n = p(!1), a = C(B), r = m(_), { options: l, methods: s } = Ke(t, e, o);
    return w(async () => {
      const { polygon: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(i(t.latLngs, l));
      const { listeners: u } = A(o.attrs);
      e.value.on(u), P(s, e.value, t), r({
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
O({
  name: "LPolyline",
  props: ve,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(B), r = m(_), { options: l, methods: s } = He(t, e, o);
    return w(async () => {
      const { polyline: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(
        i(t.latLngs, l)
      );
      const { listeners: u } = A(o.attrs);
      e.value.on(u), P(s, e.value, t), r({
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
}, Ye = (t) => t.default ? F("div", { ref: "root" }, t.default()) : null, Ft = {
  ...Qe,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, Vt = (t, o) => {
  const { options: e, methods: n } = Xe(t, o);
  return { options: e, methods: n };
};
O({
  name: "LPopup",
  props: Ft,
  setup(t, o) {
    const e = p(), n = p(null), a = C(B), r = m(Ae), l = m(Ge), { options: s, methods: i } = Vt(t, e);
    return w(async () => {
      const { popup: u } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(u(s)), t.latLng !== void 0 && e.value.setLatLng(t.latLng), P(i, e.value, t);
      const { listeners: c } = A(o.attrs);
      e.value.on(c), e.value.setContent(t.content || n.value || ""), r(e.value), S(() => o.emit("ready", e.value));
    }), H(() => {
      l();
    }), { root: n, leafletObject: e };
  },
  render() {
    return Ye(this.$slots);
  }
});
const et = {
  ...ne,
  latLngs: {
    ...ne.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, Ut = (t, o, e) => {
  const { options: n, methods: a } = Ke(
    t,
    o,
    e
  ), r = j(
    t,
    et,
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
  props: et,
  setup(t, o) {
    const e = p(), n = p(!1), a = C(B), r = m(_), { options: l, methods: s } = Ut(t, e, o);
    return w(async () => {
      const { rectangle: i, latLngBounds: u } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js"), c = t.bounds ? u(t.bounds) : u(t.latLngs || []);
      e.value = R(i(c, l));
      const { listeners: v } = A(o.attrs);
      e.value.on(v), P(s, e.value, t), r({
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
}, tt = (t, o, e) => {
  const { options: n, methods: a } = Ee(t, o, e), r = j(
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
    const e = p(), n = C(B), a = m(_), { options: r, methods: l } = tt(t, e, o);
    return w(async () => {
      const { tileLayer: s } = n ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(s(t.url, r));
      const { listeners: i } = A(o.attrs);
      e.value.on(i), P(l, e.value, t), a({
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
const Et = {
  ...Qe
}, qt = (t, o) => {
  const { options: e, methods: n } = Xe(t, o), a = m(ke);
  return H(() => {
    a();
  }), { options: e, methods: n };
};
O({
  name: "LTooltip",
  props: Et,
  setup(t, o) {
    const e = p(), n = p(null), a = C(B), r = m(_e), { options: l, methods: s } = qt(t, e);
    return w(async () => {
      const { tooltip: i } = a ? L.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = R(i(l)), P(s, e.value, t);
      const { listeners: u } = A(o.attrs);
      e.value.on(u), e.value.setContent(t.content || n.value || ""), r(e.value), S(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return Ye(this.$slots);
  }
});
const ot = {
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
}, Zt = (t, o, e) => {
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
    const e = p(), n = C(B), a = m(_), { options: r, methods: l } = Zt(
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
      e.value.on(i), P(l, e.value, t), a({
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
const Wt = /* @__PURE__ */ O({
  __name: "GeoJsonDataRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 0 }
  },
  setup(t) {
    const o = t, { config: e, data: n } = mt(o), a = I(() => e.value?.conditions || []), r = I(() => e.value?.renderer?.area || {}), l = I(() => e.value?.renderer || {}), s = (b) => b?.type === "Point" || b?.type === "MultiPoint", i = (b) => b && b.type === "Point" ? [b.coordinates[1], b.coordinates[0]] : null, u = (b) => {
      if (!a.value || a.value.length === 0)
        return b.features;
      const g = [];
      for (const d of b.features)
        for (const h of a.value)
          if (h.value === "*") {
            g.push(d);
            break;
          } else {
            const G = c(d.properties, h.prop);
            if (!G)
              continue;
            if (v(h.comperator, G, h.value)) {
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
    }, N = I(() => n.value ? n.value.type === "FeatureCollection" ? u(n.value) : [n.value] : null), f = I(() => {
      if (!n.value) return !1;
      const b = ["Feature", "FeatureCollection", "Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon", "GeometryCollection"];
      return n.value.type && b.includes(n.value.type);
    }), k = I(() => ({
      fillColor: r.value?.fillColor || "#3388ff",
      fillOpacity: r.value?.fillOpacity !== void 0 ? r.value.fillOpacity : 0.2,
      color: r.value?.color || "#3388ff",
      weight: r.value?.weight !== void 0 ? r.value?.weight : 3,
      stroke: r.value?.stroke !== void 0 ? r.value?.stroke : !0,
      opacity: r.value?.opacity !== void 0 ? r.value?.opacity : 1,
      fill: r.value?.fill !== void 0 ? r.value?.fill : !0,
      className: r.value?.className || ""
    }));
    return (b, g) => f.value && N.value ? ($(!0), U(ge, { key: 0 }, ft(N.value, (d, h) => ($(), U(ge, {
      key: d.id || h
    }, [
      s(d.geometry) ? se("", !0) : ($(), he(z(_t), {
        key: 0,
        geojson: d,
        options: { pane: "overlayPane" },
        "options-style": () => k.value
      }, null, 8, ["geojson", "options-style"])),
      i(d.geometry) ? ($(), he(z($t), {
        key: 1,
        "lat-lng": i(d.geometry),
        options: { pane: "markerPane" }
      }, {
        default: Le(() => [
          E(z(kt), { "class-name": "someExtraClass" }, {
            default: Le(() => [
              E(z(it), {
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
}), nt = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, a] of o)
    e[n] = a;
  return e;
}, Ht = /* @__PURE__ */ nt(Wt, [["__scopeId", "data-v-5ad1856d"]]), Kt = { class: "geojson-settings" }, Qt = { class: "tab-content" }, Xt = {
  key: 0,
  class: "full"
}, Yt = {
  key: 1,
  class: "full"
}, eo = {
  key: 2,
  class: "full"
}, to = /* @__PURE__ */ O({
  __name: "GeoJsonDataRendererSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const o = bt(t, "modelValue"), { t: e } = Lt("pluginsGeojsonRenderer"), n = I(() => [
      { id: "conditions", label: e("GeoJson.conditions") },
      { id: "points", label: e("GeoJson.points") },
      { id: "areas", label: e("GeoJson.areas") }
    ]), a = p("conditions");
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
    }), (r, l) => ($(), U("div", Kt, [
      E(z(ht), {
        modelValue: a.value,
        "onUpdate:modelValue": l[0] || (l[0] = (s) => a.value = s),
        tabs: n.value,
        label: z(e)("GeoJson.tabs")
      }, null, 8, ["modelValue", "tabs", "label"]),
      gt("div", Qt, [
        a.value === "conditions" ? ($(), U("div", Xt, [
          E(z(ut), {
            modelValue: o.value.conditions,
            "onUpdate:modelValue": l[1] || (l[1] = (s) => o.value.conditions = s)
          }, null, 8, ["modelValue"])
        ])) : a.value === "points" ? ($(), U("div", Yt, [
          E(z(dt), {
            modelValue: o.value.renderer,
            "onUpdate:modelValue": l[2] || (l[2] = (s) => o.value.renderer = s)
          }, null, 8, ["modelValue"])
        ])) : ($(), U("div", eo, [
          E(z(pt), {
            modelValue: o.value.renderer.area,
            "onUpdate:modelValue": l[3] || (l[3] = (s) => o.value.renderer.area = s)
          }, null, 8, ["modelValue"])
        ]))
      ])
    ]));
  }
}), oo = /* @__PURE__ */ nt(to, [["__scopeId", "data-v-78e3257e"]]);
class no {
  component = Ht;
  setupComponent = oo;
  description = "pluginsGeojsonRenderer:GeoJson.description";
  name = "pluginsGeojsonRenderer:GeoJson.name";
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
const ro = { conditions: "Bedingungen", points: "Punkte", areas: "Flächen", tabs: "Was gezeichnet wird", name: "GeoJSON-Darstellung", description: "Zeigt Beobachtungen als GeoJSON-Features auf der Karte" }, ao = {
  GeoJson: ro
}, lo = { conditions: "Conditions", points: "Points", areas: "Areas", tabs: "What is drawn", name: "GeoJSON data renderer", description: "Renders observations as GeoJSON features on the map" }, so = {
  GeoJson: lo
};
var io = Object.getOwnPropertyDescriptor, uo = (t, o, e, n) => {
  for (var a = n > 1 ? void 0 : n ? io(o, e) : o, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = l(a) || a);
  return a;
};
const rt = "pluginsGeojsonRenderer";
let Ce = class {
  namespace = rt;
  resources = {
    de: ao,
    en: so
  };
};
Ce = uo([
  we({
    service: ["Translations"],
    properties: { "i18n.namespace": rt }
  })
], Ce);
var po = Object.defineProperty, co = Object.getOwnPropertyDescriptor, at = (t, o, e, n) => {
  for (var a = n > 1 ? void 0 : n ? co(o, e) : o, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (a = (n ? l(o, e, a) : l(a)) || a);
  return n && a && po(o, e, a), a;
};
let ie = class {
  register() {
    ct().registerDataPointRenderer(new no());
  }
};
at([
  st()
], ie.prototype, "register", 1);
ie = at([
  we({})
], ie);
export {
  no as GeoJsonDataRendererDescription,
  ie as GeoJsonRendererComponent,
  Ce as PluginsGeojsonRendererTranslations
};
