(function(){var i="ui.vue.variable.timepicker",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".settings[data-v-03d9e794]{display:flex;flex-direction:column;gap:4px}\n";})();
import { VARIABLE_REPOSITORY as m } from "org.eclipse.daanse.board.app.lib.api.variable";
import { DATETIME_PICKER_VARIABLE as d, DateTimePickerVariableSymbol as v } from "org.eclipse.daanse.board.app.lib.variables";
import { defineComponent as _, useModel as f, computed as b, createElementBlock as V, openBlock as S, createVNode as n, unref as l } from "vue";
import { DInput as u } from "org.eclipse.daanse.board.app.ui.vue.controls";
const I = { class: "settings" }, T = /* @__PURE__ */ _({
  __name: "Settings",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const a = f(t, "modelValue"), r = b({
      get() {
        const i = a.value?.datetime;
        if (!i) return "";
        const e = new Date(i);
        if (Number.isNaN(e.getTime())) return "";
        const o = (g) => String(g).padStart(2, "0");
        return `${e.getFullYear()}-${o(e.getMonth() + 1)}-${o(e.getDate())}T${o(e.getHours())}:${o(e.getMinutes())}`;
      },
      set(i) {
        if (!i) {
          a.value.datetime = "";
          return;
        }
        const e = new Date(i);
        a.value.datetime = Number.isNaN(e.getTime()) ? "" : e.toISOString();
      }
    });
    return (i, e) => (S(), V("div", I, [
      n(l(u), {
        modelValue: a.value.name,
        "onUpdate:modelValue": e[0] || (e[0] = (o) => a.value.name = o),
        label: "Name",
        placeholder: "Wie es gelesen wird"
      }, null, 8, ["modelValue"]),
      n(l(u), {
        modelValue: r.value,
        "onUpdate:modelValue": e[1] || (e[1] = (o) => r.value = o),
        label: "Zeitpunkt",
        type: "datetime-local"
      }, null, 8, ["modelValue"])
    ]));
  }
}), y = (t, a) => {
  const r = t.__vccOpts || t;
  for (const [i, e] of a)
    r[i] = e;
  return r;
}, R = /* @__PURE__ */ y(T, [["__scopeId", "data-v-03d9e794"]]);
function c({ services: t }) {
  t.getRequired(m).registerVariableType(d, {
    Variable: v,
    Settings: R
  });
}
function p({ services: t }) {
  t.getRequired(m).unregisterVariableType(d);
}
const E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: c,
  deactivate: p
}, Symbol.toStringTag, { value: "Module" })), s = "org.eclipse.daanse.board.app.ui.vue.variable.timepicker", N = "0.0.1-next.1";
async function O(t) {
  const a = globalThis.__tsm__;
  if (!a)
    throw new Error(`${s}: tsm runtime is not initialized`);
  a.register(s, E, N, "ui.vue.variable.timepicker"), await c?.(t);
}
async function A(t) {
  await p?.(t);
}
export {
  O as activate,
  A as deactivate
};
