(function(){var i="ui.vue.variable.timepicker",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.datetime-group[data-v-7a419d93] {\n  display: flex;\n  gap: 1rem;\n}\n.datetime-group[data-v-7a419d93] > * {\n  flex: 1;\n}\n";})();
const { VARIABLE_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.variable");
const { DATETIME_PICKER_VARIABLE, DateTimePickerVariableSymbol } = __tsm__.require("org.eclipse.daanse.board.app.lib.variables");
import { defineComponent, useModel, computed, resolveComponent, createElementBlock, openBlock, createVNode, createElementVNode } from "vue";
const _hoisted_1 = { class: "flex flex-col gap-4" };
const _hoisted_2 = { class: "datetime-group" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const variableSettings = useModel(__props, "modelValue");
    const dateValue = computed({
      get: () => {
        if (!variableSettings.value?.datetime) return null;
        return new Date(variableSettings.value.datetime);
      },
      set: (value) => {
        if (!value) {
          variableSettings.value.datetime = "";
          return;
        }
        updateDatetime(value, timeValue.value);
      }
    });
    const timeValue = computed({
      get: () => {
        if (!variableSettings.value?.datetime) return null;
        return new Date(variableSettings.value.datetime);
      },
      set: (value) => {
        if (!value) return;
        updateDatetime(dateValue.value, value);
      }
    });
    const updateDatetime = (date, time) => {
      if (!date) {
        variableSettings.value.datetime = "";
        return;
      }
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = (time?.getHours() || 0).toString().padStart(2, "0");
      const minutes = (time?.getMinutes() || 0).toString().padStart(2, "0");
      const seconds = (time?.getSeconds() || 0).toString().padStart(2, "0");
      variableSettings.value.datetime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
    };
    return (_ctx, _cache) => {
      const _component_VaInput = resolveComponent("VaInput");
      const _component_VaDateInput = resolveComponent("VaDateInput");
      const _component_VaTimeInput = resolveComponent("VaTimeInput");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VaInput, {
          modelValue: variableSettings.value.name,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => variableSettings.value.name = $event),
          label: "Variable Name",
          placeholder: "Enter variable name"
        }, null, 8, ["modelValue"]),
        createElementVNode("div", _hoisted_2, [
          createVNode(_component_VaDateInput, {
            modelValue: dateValue.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dateValue.value = $event),
            label: "Date",
            placeholder: "Select date"
          }, null, 8, ["modelValue"]),
          createVNode(_component_VaTimeInput, {
            modelValue: timeValue.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => timeValue.value = $event),
            label: "Time",
            placeholder: "Select time"
          }, null, 8, ["modelValue"])
        ]),
        createVNode(_component_VaInput, {
          modelValue: variableSettings.value.datetime,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => variableSettings.value.datetime = $event),
          label: "ISO 8601 DateTime (UTC)",
          placeholder: "YYYY-MM-DDTHH:mm:ssZ",
          readonly: ""
        }, null, 8, ["modelValue"])
      ]);
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
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a419d93"]]);
function activate$1({ services }) {
  services.getRequired(VARIABLE_REPOSITORY).registerVariableType(DATETIME_PICKER_VARIABLE, {
    Variable: DateTimePickerVariableSymbol,
    Settings
  });
}
function deactivate$1({ services }) {
  services.getRequired(VARIABLE_REPOSITORY).unregisterVariableType(DATETIME_PICKER_VARIABLE);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1,
  deactivate: deactivate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.variable.timepicker";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.variable.timepicker");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  activate,
  deactivate
};
