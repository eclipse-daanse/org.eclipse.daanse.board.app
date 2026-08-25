(function(){var i="ui.vue.widget.image",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".slideshow-container[data-v-88857e63]{width:100%;height:100%;overflow:hidden;position:relative}.slideshow-track[data-v-88857e63]{width:100%;height:100%;overflow:visible;position:relative;transition:transform .3s ease-in-out}.slideshow-slide[data-v-88857e63]{width:100%;height:100%;position:absolute;top:0;left:0}.slideshow-nav[data-v-88857e63]{position:absolute;top:50%;width:32px;height:32px;transform:translateY(-50%);z-index:10;background:#0009;border-radius:50%;display:flex;align-items:center;justify-content:center}.slideshow-nav--prev[data-v-88857e63]{left:40px}.slideshow-nav--next[data-v-88857e63]{right:40px}.image-settings-container[data-v-e2074a09]{display:flex;flex-direction:row;align-items:flex-end;gap:1rem;padding:.5rem;border-radius:.25rem}.image-settings-remove-button[data-v-e2074a09]{margin-bottom:.25rem}.image-settings-remove-input[data-v-e2074a09]{flex-grow:1}.settings-container[data-v-e2074a09]{display:flex;flex-direction:column;gap:1rem}.image-list-container[data-v-e2074a09]{display:flex;flex-direction:column;gap:.5rem;height:500px;overflow:auto;padding:.5rem;border-radius:.5rem}.loading[data-v-e2074a09]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}\n";})();
import { EVENT_REGISTRY_ID as ne } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as oe, deactivate as se, component as re, inject as ce } from "@eclipse-daanse/tsm";
import { defineComponent as q, mergeModels as ge, toRefs as de, useModel as F, inject as Y, onMounted as G, computed as H, ref as z, watch as j, resolveComponent as h, createElementBlock as p, openBlock as m, withModifiers as L, normalizeClass as N, createElementVNode as f, createVNode as v, normalizeStyle as B, Fragment as A, renderList as X, createBlock as ue, withCtx as Z, createTextVNode as ve, toDisplayString as me, unref as P } from "vue";
import { Attribute as $, ModelClass as O, Reference as J, Documentation as K } from "org.eclipse.daanse.board.app.lib.annotations";
import { Payload as Q } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID as fe } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: pe } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), _e = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2061.5C22.5%2060.6716%2023.1716%2060%2024%2060H29.5458C29.842%2060%2030.1315%2059.9123%2030.3779%2059.7481L40.4179%2053.0547C40.9218%2052.7188%2041.5782%2052.7188%2042.0821%2053.0547L51.5874%2059.3916C52.1309%2059.7539%2052.8464%2059.7229%2053.3565%2059.3148L70.28%2045.776C70.8427%2045.3258%2071.646%2045.3395%2072.1932%2045.8085L96.9762%2067.051C97.3087%2067.336%2097.5%2067.752%2097.5%2068.1899V90.75C97.5%2094.0637%2094.8137%2096.75%2091.5%2096.75H28.5C25.1863%2096.75%2022.5%2094.0637%2022.5%2090.75V61.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2030C37.5%2034.1421%2034.1421%2037.5%2030%2037.5C25.8579%2037.5%2022.5%2034.1421%2022.5%2030C22.5%2025.8579%2025.8579%2022.5%2030%2022.5C34.1421%2022.5%2037.5%2025.8579%2037.5%2030Z'%20fill='%23606060'/%3e%3c/svg%3e";
var we = Object.defineProperty, he = Object.getOwnPropertyDescriptor, W = (t, i, a, e) => {
  for (var l = e > 1 ? void 0 : e ? he(i, a) : i, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (l = (e ? n(i, a, l) : n(l)) || l);
  return e && l && we(i, a, l), l;
};
let I = class {
  fit;
  diashowInterval;
};
W([
  $()
], I.prototype, "fit", 2);
W([
  $()
], I.prototype, "diashowInterval", 2);
I = W([
  O({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.image#//GallerySettings" })
], I);
var Ie = Object.defineProperty, Ce = Object.getOwnPropertyDescriptor, T = (t, i, a, e) => {
  for (var l = e > 1 ? void 0 : e ? Ce(i, a) : i, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (l = (e ? n(i, a, l) : n(l)) || l);
  return e && l && Ie(i, a, l), l;
};
let C = class {
  imagesSettings = new I();
  images = [];
};
T([
  J("GallerySettings")
], C.prototype, "imagesSettings", 2);
T([
  J("ImageGalleryItem")
], C.prototype, "images", 2);
C = T([
  O({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageSettings" })
], C);
const ye = ["src"], be = {
  key: 1,
  class: "slideshow-container"
}, Pe = { class: "slideshow-nav slideshow-nav--prev" }, Se = ["src", "onClick", "onContextmenu"], Ve = { class: "slideshow-nav slideshow-nav--next" }, xe = /* @__PURE__ */ q({
  __name: "ImageWidget",
  props: /* @__PURE__ */ ge({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(t) {
    const i = t, { id: a } = de(i), e = F(t, "configv"), l = Y(pe.TINY_EMITTER), o = (g) => {
      a?.value && l.emit("widget:ImageWidget:click", {
        type: "widget:ImageWidget:click",
        widgetId: a.value,
        payload: { imageUrl: g, widgetId: a.value, timestamp: Date.now() }
      });
    }, n = (g) => {
      a?.value && l.emit("widget:ImageWidget:right_click", {
        type: "widget:ImageWidget:right_click",
        widgetId: a.value,
        payload: { imageUrl: g, widgetId: a.value, timestamp: Date.now() }
      });
    }, y = new C();
    G(() => {
      e.value && Object.assign(e.value, { ...y, ...e.value });
    });
    const _ = H(() => ({
      none: "",
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      "scale-down": "object-scale-down"
    })[e.value.imagesSettings?.fit?.toLowerCase() || "none"] || "");
    let w = null;
    const r = z(0), c = () => {
      r.value < e.value.images.length - 1 && r.value++;
    }, U = () => {
      r.value > 0 && r.value--;
    }, b = () => {
      w && clearInterval(w), (e.value.imagesSettings?.diashowInterval ?? 0) > 0 && (w = setInterval(() => {
        if (r.value === e.value.images.length - 1) {
          r.value = 0;
          return;
        }
        c();
      }, (e.value.imagesSettings?.diashowInterval ?? 1) * 1e3));
    };
    G(() => {
      b();
    }), j(() => e.value.imagesSettings?.diashowInterval, b);
    const M = (g) => g;
    j(
      () => e.value.images?.length,
      (g, d) => {
        d > g && r.value >= g && (r.value = g - 1);
      }
    );
    const R = H(() => e.value.images?.length > 0 ? e.value.images.length - 1 : 0);
    return j(R, () => {
      r.value = R.value;
    }), (g, d) => {
      const k = h("va-button");
      return e.value.images?.length <= 1 ? (m(), p("img", {
        key: 0,
        class: N(["w-full h-full cursor-pointer", _.value]),
        src: M(e.value.images[0]?.url ?? ""),
        onClick: d[0] || (d[0] = (u) => o(e.value.images[0]?.url ?? "")),
        onContextmenu: d[1] || (d[1] = L((u) => n(e.value.images[0]?.url ?? ""), ["prevent"]))
      }, null, 42, ye)) : (m(), p("div", be, [
        f("div", Pe, [
          v(k, {
            onClick: d[2] || (d[2] = (u) => U()),
            icon: "chevron_left",
            preset: "plain",
            "text-color": "#ffffff",
            disabled: r.value === 0
          }, null, 8, ["disabled"])
        ]),
        f("div", {
          class: "slideshow-track",
          style: B({ transform: `translateX(-${100 * r.value}%)` })
        }, [
          (m(!0), p(A, null, X(e.value.images, (u, le) => (m(), p("div", {
            key: u.id,
            class: "slideshow-slide",
            style: B({ transform: `translateX(${100 * le}%)` })
          }, [
            f("img", {
              class: N(["w-full h-full cursor-pointer", _.value]),
              src: M(u.url ?? ""),
              onClick: (ae) => o(u.url ?? ""),
              onContextmenu: L((ae) => n(u.url ?? ""), ["prevent"])
            }, null, 42, Se)
          ], 4))), 128))
        ], 4),
        f("div", Ve, [
          v(k, {
            onClick: d[3] || (d[3] = (u) => c()),
            icon: "chevron_right",
            "text-color": "#ffffff",
            disabled: r.value === e.value.images?.length - 1,
            preset: "plain"
          }, null, 8, ["disabled"])
        ])
      ]));
    };
  }
}), ee = (t, i) => {
  const a = t.__vccOpts || t;
  for (const [e, l] of i)
    a[e] = l;
  return a;
}, De = /* @__PURE__ */ ee(xe, [["__scopeId", "data-v-88857e63"]]), s = [];
for (let t = 0; t < 256; ++t)
  s.push((t + 256).toString(16).slice(1));
function $e(t, i = 0) {
  return (s[t[i + 0]] + s[t[i + 1]] + s[t[i + 2]] + s[t[i + 3]] + "-" + s[t[i + 4]] + s[t[i + 5]] + "-" + s[t[i + 6]] + s[t[i + 7]] + "-" + s[t[i + 8]] + s[t[i + 9]] + "-" + s[t[i + 10]] + s[t[i + 11]] + s[t[i + 12]] + s[t[i + 13]] + s[t[i + 14]] + s[t[i + 15]]).toLowerCase();
}
const Oe = new Uint8Array(16);
function Ue() {
  return crypto.getRandomValues(Oe);
}
function je(t, i, a) {
  return crypto.randomUUID ? crypto.randomUUID() : We(t);
}
function We(t, i, a) {
  t = t || {};
  const e = t.random ?? t.rng?.() ?? Ue();
  if (e.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, $e(e);
}
const Te = { class: "settings-container" }, Ee = { class: "image-list-container" }, Me = /* @__PURE__ */ q({
  __name: "ImageWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const i = Y("i18n"), a = z({
      widgetSection: !1,
      storeSection: !1
    }), e = F(t, "modelValue"), l = () => {
      e.value.images || (e.value.images = []);
      const o = {
        id: je(),
        url: "Test"
      };
      e.value.images?.splice(
        e.value.images.length,
        0,
        o
      );
    };
    return (o, n) => {
      const y = h("va-button"), _ = h("va-input"), w = h("va-select"), r = h("va-collapse");
      return m(), ue(r, {
        modelValue: a.value.widgetSection,
        "onUpdate:modelValue": n[2] || (n[2] = (c) => a.value.widgetSection = c),
        icon: "settings",
        header: "Image widget settings"
      }, {
        default: Z(() => [
          f("div", Te, [
            v(y, { onClick: l }, {
              default: Z(() => [
                ve(me(P(i)?.t("image:ImageWidget.addButton")), 1)
              ]),
              _: 1
            }),
            f("div", Ee, [
              (m(!0), p(A, null, X(e.value.images, (c, U) => (m(), p("div", {
                key: c.id,
                class: "image-settings-container"
              }, [
                v(_, {
                  modelValue: c.url,
                  "onUpdate:modelValue": (b) => c.url = b,
                  label: P(i)?.t("image:ImageWidget.imageUrl"),
                  class: "image-settings-remove-input"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                v(y, {
                  onClick: () => e.value.images.splice(U, 1),
                  icon: "clear",
                  class: "image-settings-remove-button"
                }, null, 8, ["onClick"])
              ]))), 128))
            ]),
            v(w, {
              modelValue: e.value.imagesSettings.fit,
              "onUpdate:modelValue": n[0] || (n[0] = (c) => e.value.imagesSettings.fit = c),
              label: P(i)?.t("image:ImageWidget.imageFit"),
              options: ["none", "contain", "cover", "fill", "scale-down"],
              teleport: ".settings-container"
            }, null, 8, ["modelValue", "label"]),
            v(_, {
              modelValue: e.value.imagesSettings.diashowInterval,
              "onUpdate:modelValue": n[1] || (n[1] = (c) => e.value.imagesSettings.diashowInterval = c),
              label: P(i)?.t("image:ImageWidget.imageDiashowInterval")
            }, null, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), Re = /* @__PURE__ */ ee(Me, [["__scopeId", "data-v-e2074a09"]]);
var ke = Object.defineProperty, Ge = Object.getOwnPropertyDescriptor, te = (t, i, a, e) => {
  for (var l = e > 1 ? void 0 : e ? Ge(i, a) : i, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (l = (e ? n(i, a, l) : n(l)) || l);
  return e && l && ke(i, a, l), l;
};
let V = class extends Q {
  imageUrl;
};
te([
  K("URL or ID of the clicked image."),
  $()
], V.prototype, "imageUrl", 2);
V = te([
  O({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageClickPayload" })
], V);
var He = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, ie = (t, i, a, e) => {
  for (var l = e > 1 ? void 0 : e ? Le(i, a) : i, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (l = (e ? n(i, a, l) : n(l)) || l);
  return e && l && He(i, a, l), l;
};
let x = class extends Q {
  imageUrl;
};
ie([
  K("URL or ID of the right-clicked image."),
  $()
], x.prototype, "imageUrl", 2);
x = ie([
  O({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageRightClickPayload" })
], x);
const Ne = [
  {
    name: "Image Clicked",
    type: "click",
    description: "Triggered when the image is clicked",
    payloadType: V
  },
  {
    name: "Image Right Clicked",
    type: "right_click",
    description: "Triggered when the image is right-clicked",
    payloadType: x
  }
];
var Be = Object.defineProperty, Ze = Object.getOwnPropertyDescriptor, E = (t, i, a, e) => {
  for (var l = e > 1 ? void 0 : e ? Ze(i, a) : i, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (l = (e ? n(i, a, l) : n(l)) || l);
  return e && l && Be(i, a, l), l;
}, qe = (t, i) => (a, e) => i(a, e, t);
const S = "ImageWidget";
let D = class {
  constructor(t) {
    this.events = t;
  }
  type = S;
  component = De;
  settingsComponent = Re;
  supportedDSTypes = [];
  icon = _e;
  name = "Image";
  register() {
    this.events.registerWidget(S, Ne);
  }
  unregister() {
    this.events.unregisterWidget(S);
  }
};
E([
  oe()
], D.prototype, "register", 1);
E([
  se()
], D.prototype, "unregister", 1);
D = E([
  re({
    service: [fe],
    properties: { "widget.type": S }
  }),
  qe(0, ce(ne))
], D);
export {
  De as ImageWidget,
  D as ImageWidgetProvider,
  Re as ImageWidgetSettings
};
