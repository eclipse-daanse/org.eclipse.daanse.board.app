(function(){var i="ui.vue.variable.timepicker",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".datetime-group[data-v-7a419d93]{display:flex;gap:1rem}.datetime-group[data-v-7a419d93]>*{flex:1}\n";})();
import { VARIABLE_REPOSITORY as V } from "org.eclipse.daanse.board.app.lib.api.variable";
import { DATETIME_PICKER_VARIABLE as g, DateTimePickerVariableSymbol as I } from "org.eclipse.daanse.board.app.lib.variables";
import { defineComponent as T, useModel as D, computed as p, resolveComponent as c, createElementBlock as y, openBlock as E, createVNode as d, createElementVNode as R } from "vue";
const $ = { class: "flex flex-col gap-4" }, M = { class: "datetime-group" }, O = /* @__PURE__ */ T({
  __name: "Settings",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = D(t, "modelValue"), n = p({
      get: () => e.value?.datetime ? new Date(e.value.datetime) : null,
      set: (l) => {
        if (!l) {
          e.value.datetime = "";
          return;
        }
        i(l, r.value);
      }
    }), r = p({
      get: () => e.value?.datetime ? new Date(e.value.datetime) : null,
      set: (l) => {
        l && i(n.value, l);
      }
    }), i = (l, a) => {
      if (!l) {
        e.value.datetime = "";
        return;
      }
      const u = l.getFullYear(), m = (l.getMonth() + 1).toString().padStart(2, "0"), s = l.getDate().toString().padStart(2, "0"), o = (a?.getHours() || 0).toString().padStart(2, "0"), S = (a?.getMinutes() || 0).toString().padStart(2, "0"), b = (a?.getSeconds() || 0).toString().padStart(2, "0");
      e.value.datetime = `${u}-${m}-${s}T${o}:${S}:${b}Z`;
    };
    return (l, a) => {
      const u = c("VaInput"), m = c("VaDateInput"), s = c("VaTimeInput");
      return E(), y("div", $, [
        d(u, {
          modelValue: e.value.name,
          "onUpdate:modelValue": a[0] || (a[0] = (o) => e.value.name = o),
          label: "Variable Name",
          placeholder: "Enter variable name"
        }, null, 8, ["modelValue"]),
        R("div", M, [
          d(m, {
            modelValue: n.value,
            "onUpdate:modelValue": a[1] || (a[1] = (o) => n.value = o),
            label: "Date",
            placeholder: "Select date"
          }, null, 8, ["modelValue"]),
          d(s, {
            modelValue: r.value,
            "onUpdate:modelValue": a[2] || (a[2] = (o) => r.value = o),
            label: "Time",
            placeholder: "Select time"
          }, null, 8, ["modelValue"])
        ]),
        d(u, {
          modelValue: e.value.datetime,
          "onUpdate:modelValue": a[3] || (a[3] = (o) => e.value.datetime = o),
          label: "ISO 8601 DateTime (UTC)",
          placeholder: "YYYY-MM-DDTHH:mm:ssZ",
          readonly: ""
        }, null, 8, ["modelValue"])
      ]);
    };
  }
}), Y = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, k = /* @__PURE__ */ Y(O, [["__scopeId", "data-v-7a419d93"]]);
function _({ services: t }) {
  t.getRequired(V).registerVariableType(g, {
    Variable: I,
    Settings: k
  });
}
function f({ services: t }) {
  t.getRequired(V).unregisterVariableType(g);
}
const w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: _,
  deactivate: f
}, Symbol.toStringTag, { value: "Module" })), v = "org.eclipse.daanse.board.app.ui.vue.variable.timepicker", x = "0.0.1-next.1";
async function h(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${v}: tsm runtime is not initialized`);
  e.register(v, w, x, "ui.vue.variable.timepicker"), await _?.(t);
}
async function C(t) {
  await f?.(t);
}
export {
  h as activate,
  C as deactivate
};
