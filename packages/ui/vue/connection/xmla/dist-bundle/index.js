import { CONNECTION_REPOSITORY as f } from "org.eclipse.daanse.board.app.lib.api.connection";
import { XmlaConnection as d, factorySymbol as y } from "org.eclipse.daanse.board.app.lib.connection.xmla";
import { defineComponent as V, ref as C, onMounted as w, watch as a, resolveComponent as s, createElementBlock as S, openBlock as i, Fragment as b, createVNode as c, createBlock as m, createCommentVNode as r } from "vue";
const N = /* @__PURE__ */ V({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(e) {
    const u = C([]);
    w(async () => {
      e.config.url && await o();
    });
    const o = async () => {
      console.log("Fetching catalogs for URL", e.config.url, "with security", e.config.security), u.value = await d.getCatalogs(e.config.url, {
        type: e.config.security,
        user: e.config.user,
        password: e.config.password
      });
    };
    return a(async () => e.config.url, async () => {
      await o();
    }), a(async () => e.config.security, async () => {
      await o();
    }), a(async () => e.config.user, async () => {
      await o();
    }), a(async () => e.config.password, async () => {
      await o();
    }), (A, n) => {
      const l = s("VaInput"), g = s("VaSelect");
      return i(), S(b, null, [
        c(l, {
          modelValue: e.config.url,
          "onUpdate:modelValue": n[0] || (n[0] = (t) => e.config.url = t),
          label: "URL"
        }, null, 8, ["modelValue"]),
        c(g, {
          modelValue: e.config.catalogName,
          "onUpdate:modelValue": n[1] || (n[1] = (t) => e.config.catalogName = t),
          label: "Catalog",
          options: u.value,
          "text-by": "CATALOG_NAME",
          "value-by": "CATALOG_NAME"
        }, null, 8, ["modelValue", "options"]),
        c(g, {
          modelValue: e.config.security,
          "onUpdate:modelValue": n[2] || (n[2] = (t) => e.config.security = t),
          label: "Security",
          options: ["None", "Basic"]
        }, null, 8, ["modelValue"]),
        e.config.security === "Basic" ? (i(), m(l, {
          key: 0,
          modelValue: e.config.user,
          "onUpdate:modelValue": n[3] || (n[3] = (t) => e.config.user = t),
          label: "User"
        }, null, 8, ["modelValue"])) : r("", !0),
        e.config.security === "Basic" ? (i(), m(l, {
          key: 1,
          type: "password",
          modelValue: e.config.password,
          "onUpdate:modelValue": n[4] || (n[4] = (t) => e.config.password = t),
          label: "Password"
        }, null, 8, ["modelValue"])) : r("", !0)
      ], 64);
    };
  }
}), U = Symbol.for("XmlaConnectionSettings");
function T({ services: e }) {
  e.register("XmlaConnectionSettings", N), e.getRequired(f).registerConnectionType("xmla", {
    Connection: y,
    Settings: U
  });
}
function k({ services: e }) {
  e.getRequired(f).unregisterConnectionType("xmla"), e.unregister("XmlaConnectionSettings");
}
export {
  T as activate,
  k as deactivate
};
