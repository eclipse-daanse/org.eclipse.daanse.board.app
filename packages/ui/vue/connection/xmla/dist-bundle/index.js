import { CONNECTION_REPOSITORY as f } from "org.eclipse.daanse.board.app.lib.api.connection";
import { XmlaConnection as d, factorySymbol as y } from "org.eclipse.daanse.board.app.lib.connection.xmla";
import { defineComponent as V, ref as C, onMounted as w, watch as l, createElementBlock as N, openBlock as i, Fragment as S, createVNode as u, createBlock as m, createCommentVNode as s, unref as a } from "vue";
import { DInput as c, DSelect as r } from "org.eclipse.daanse.board.app.ui.vue.controls";
const b = /* @__PURE__ */ V({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(e) {
    const g = C([]);
    w(async () => {
      e.config.url && await o();
    });
    const o = async () => {
      g.value = await d.getCatalogs(e.config.url, {
        type: e.config.security,
        user: e.config.user,
        password: e.config.password
      });
    };
    return l(async () => e.config.url, async () => {
      await o();
    }), l(async () => e.config.security, async () => {
      await o();
    }), l(async () => e.config.user, async () => {
      await o();
    }), l(async () => e.config.password, async () => {
      await o();
    }), (A, n) => (i(), N(S, null, [
      u(a(c), {
        modelValue: e.config.url,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.config.url = t),
        label: "URL"
      }, null, 8, ["modelValue"]),
      u(a(r), {
        modelValue: e.config.catalogName,
        "onUpdate:modelValue": n[1] || (n[1] = (t) => e.config.catalogName = t),
        label: "Katalog",
        options: g.value,
        "label-key": "CATALOG_NAME",
        "value-key": "CATALOG_NAME"
      }, null, 8, ["modelValue", "options"]),
      u(a(r), {
        modelValue: e.config.security,
        "onUpdate:modelValue": n[2] || (n[2] = (t) => e.config.security = t),
        label: "Anmeldung",
        options: ["None", "Basic"]
      }, null, 8, ["modelValue"]),
      e.config.security === "Basic" ? (i(), m(a(c), {
        key: 0,
        modelValue: e.config.user,
        "onUpdate:modelValue": n[3] || (n[3] = (t) => e.config.user = t),
        label: "Benutzer"
      }, null, 8, ["modelValue"])) : s("", !0),
      e.config.security === "Basic" ? (i(), m(a(c), {
        key: 1,
        modelValue: e.config.password,
        "onUpdate:modelValue": n[4] || (n[4] = (t) => e.config.password = t),
        label: "Passwort",
        type: "password"
      }, null, 8, ["modelValue"])) : s("", !0)
    ], 64));
  }
}), k = Symbol.for("XmlaConnectionSettings");
function E({ services: e }) {
  e.register("XmlaConnectionSettings", b), e.getRequired(f).registerConnectionType("xmla", {
    Connection: y,
    Settings: k
  });
}
function R({ services: e }) {
  e.getRequired(f).unregisterConnectionType("xmla"), e.unregister("XmlaConnectionSettings");
}
export {
  E as activate,
  R as deactivate
};
