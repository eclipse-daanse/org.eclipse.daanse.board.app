(function(){var i="ui.vue.composer.weather",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.weather-composer-preview[data-v-2a15dca0] {\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  max-width: 400px;\n}\n.preview-header h3[data-v-2a15dca0] {\n  margin: 0 0 16px 0;\n  color: #495057;\n  font-size: 1.2em;\n}\n.preview-content[data-v-2a15dca0] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-item[data-v-2a15dca0] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid #dee2e6;\n}\n.info-item .label[data-v-2a15dca0] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.info-item .value[data-v-2a15dca0] {\n  color: #495057;\n  font-weight: 600;\n}\n.capabilities[data-v-2a15dca0] {\n  margin-top: 16px;\n}\n.capabilities h4[data-v-2a15dca0] {\n  margin: 0 0 8px 0;\n  color: #495057;\n  font-size: 1em;\n}\n.capabilities ul[data-v-2a15dca0] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.capabilities li[data-v-2a15dca0] {\n  padding: 4px 0;\n  color: #6c757d;\n  font-size: 0.9em;\n}\n.preview-empty[data-v-2a15dca0] {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 20px;\n}\n.weather-stations[data-v-2a15dca0] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.weather-station[data-v-2a15dca0] {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  border: 1px solid #e9ecef;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.station-header[data-v-2a15dca0] {\n  margin-bottom: 16px;\n  border-bottom: 1px solid #f1f3f4;\n  padding-bottom: 12px;\n}\n.station-header h4[data-v-2a15dca0] {\n  margin: 0 0 4px 0;\n  color: #343a40;\n  font-size: 1.1em;\n}\n.station-header small[data-v-2a15dca0] {\n  display: block;\n  color: #6c757d;\n  margin-bottom: 2px;\n}\n.coordinates[data-v-2a15dca0] {\n  font-family: monospace;\n  font-size: 0.85em !important;\n}\n.weather-measurements[data-v-2a15dca0] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.measurement[data-v-2a15dca0] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n}\n.measurement-icon[data-v-2a15dca0] {\n  font-size: 1.2em;\n  width: 24px;\n  text-align: center;\n}\n.measurement-info[data-v-2a15dca0] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.measurement-info .label[data-v-2a15dca0] {\n  font-size: 0.85em;\n  color: #6c757d;\n  font-weight: 500;\n}\n.measurement-info .value[data-v-2a15dca0] {\n  font-size: 1em;\n  color: #495057;\n  font-weight: 600;\n}\n.timestamp[data-v-2a15dca0] {\n  text-align: center;\n  padding-top: 8px;\n  border-top: 1px solid #f1f3f4;\n}\n.timestamp small[data-v-2a15dca0] {\n  color: #6c757d;\n  font-size: 0.8em;\n}\n\n.weather-composer-settings[data-v-e6893179] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  max-height: 600px;\n  overflow-y: auto;\n}\n.section-description[data-v-e6893179] {\n  margin: 0 0 16px 0;\n  color: #6c757d;\n  font-size: 0.9em;\n}\n\n/* Collapsible section styles */\n.collapsible-section[data-v-e6893179] {\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.collapsible-header[data-v-e6893179] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  user-select: none;\n  padding: 12px 16px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.collapsible-header[data-v-e6893179]:hover {\n  background: #e9ecef;\n}\n.collapsible-header h3[data-v-e6893179] {\n  margin: 0;\n  color: #495057;\n  font-size: 1.1em;\n}\n.collapse-icon[data-v-e6893179] {\n  font-size: 12px;\n  transition: transform 0.2s ease;\n  color: #6c757d;\n}\n.collapse-icon.expanded[data-v-e6893179] {\n  transform: rotate(-180deg);\n}\n.collapsible-content[data-v-e6893179] {\n  padding: 16px;\n  animation: slideDown-e6893179 0.2s ease-out;\n}\n@keyframes slideDown-e6893179 {\nfrom {\n    opacity: 0;\n    max-height: 0;\n}\nto {\n    opacity: 1;\n    max-height: 800px;\n}\n}\n.mapping-item[data-v-e6893179] {\n  margin-bottom: 12px;\n}\n";})();
const { identifier, DATASOURCE_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.datasource");
const { defineComponent, shallowRef, ref, watch, createElementBlock, openBlock, createElementVNode, Fragment, renderList, createCommentVNode, toDisplayString, computed, inject, resolveComponent, createVNode, normalizeClass } = __tsm__.require("vue");
const { useTemporaryStore } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
const _hoisted_1$1 = { class: "weather-composer-preview" };
const _hoisted_2$1 = {
  key: 0,
  class: "preview-empty"
};
const _hoisted_3$1 = {
  key: 1,
  class: "weather-stations"
};
const _hoisted_4 = { class: "station-header" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = {
  key: 1,
  class: "coordinates"
};
const _hoisted_7 = { class: "weather-measurements" };
const _hoisted_8 = {
  key: 0,
  class: "measurement"
};
const _hoisted_9 = { class: "measurement-info" };
const _hoisted_10 = { class: "value" };
const _hoisted_11 = {
  key: 1,
  class: "measurement"
};
const _hoisted_12 = { class: "measurement-info" };
const _hoisted_13 = { class: "value" };
const _hoisted_14 = {
  key: 2,
  class: "measurement"
};
const _hoisted_15 = { class: "measurement-info" };
const _hoisted_16 = { class: "value" };
const _hoisted_17 = {
  key: 3,
  class: "measurement"
};
const _hoisted_18 = { class: "measurement-info" };
const _hoisted_19 = { class: "value" };
const _hoisted_20 = {
  key: 4,
  class: "measurement"
};
const _hoisted_21 = { class: "measurement-info" };
const _hoisted_22 = { class: "value" };
const _hoisted_23 = {
  key: 5,
  class: "measurement"
};
const _hoisted_24 = { class: "measurement-info" };
const _hoisted_25 = { class: "value" };
const _hoisted_26 = {
  key: 6,
  class: "measurement"
};
const _hoisted_27 = { class: "measurement-info" };
const _hoisted_28 = { class: "value" };
const _hoisted_29 = {
  key: 7,
  class: "measurement"
};
const _hoisted_30 = { class: "measurement-info" };
const _hoisted_31 = { class: "value" };
const _hoisted_32 = {
  key: 0,
  class: "timestamp"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(__props) {
    const props = __props;
    const tempStore = shallowRef(null);
    const settingsRef = ref(props.dataSource);
    const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
    const waetherData = ref(null);
    watch(tempStore, async () => {
      waetherData.value = await tempStore.value.getData("WeatherData");
    });
    watch(props.dataSource, () => {
      update();
    }, { deep: true });
    function hasTimestamp(station) {
      const measurements = ["temperature", "humidity", "pressure", "windSpeed", "windDirection", "precipitation", "visibility", "cloudCover"];
      return measurements.some((key) => station[key]?.timestamp);
    }
    function getLatestTimestamp(station) {
      const measurements = ["temperature", "humidity", "pressure", "windSpeed", "windDirection", "precipitation", "visibility", "cloudCover"];
      let latest = "";
      measurements.forEach((key) => {
        if (station[key]?.timestamp && station[key].timestamp > latest) {
          latest = station[key].timestamp;
        }
      });
      return latest;
    }
    function formatTimestamp(timestamp) {
      if (!timestamp) return "";
      try {
        const date = new Date(timestamp);
        return date.toLocaleString();
      } catch {
        return timestamp;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[17] || (_cache[17] = createElementVNode("div", { class: "preview-header" }, [
          createElementVNode("h3", null, "🌤️ Weather Data Composer")
        ], -1)),
        !waetherData.value || waetherData.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_2$1, [..._cache[0] || (_cache[0] = [
          createElementVNode("p", null, "No weather data available", -1),
          createElementVNode("small", null, "Configure connected datasources to see weather data", -1)
        ])])) : (openBlock(), createElementBlock("div", _hoisted_3$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(waetherData.value, (station) => {
            return openBlock(), createElementBlock("div", {
              key: station.thingId,
              class: "weather-station"
            }, [
              createElementVNode("div", _hoisted_4, [
                createElementVNode("h4", null, "📍 " + toDisplayString(station.location.name), 1),
                station.location.description ? (openBlock(), createElementBlock("small", _hoisted_5, toDisplayString(station.location.description), 1)) : createCommentVNode("", true),
                station.location.coordinates?.latitude != null && station.location.coordinates?.longitude != null ? (openBlock(), createElementBlock("small", _hoisted_6, toDisplayString(station.location.coordinates.latitude.toFixed(4)) + "°N, " + toDisplayString(station.location.coordinates.longitude.toFixed(4)) + "°E ", 1)) : createCommentVNode("", true)
              ]),
              createElementVNode("div", _hoisted_7, [
                station.temperature ? (openBlock(), createElementBlock("div", _hoisted_8, [
                  _cache[2] || (_cache[2] = createElementVNode("div", { class: "measurement-icon" }, "🌡️", -1)),
                  createElementVNode("div", _hoisted_9, [
                    _cache[1] || (_cache[1] = createElementVNode("span", { class: "label" }, "Temperature", -1)),
                    createElementVNode("span", _hoisted_10, toDisplayString(station.temperature.value) + toDisplayString(station.temperature.unit), 1)
                  ])
                ])) : createCommentVNode("", true),
                station.humidity ? (openBlock(), createElementBlock("div", _hoisted_11, [
                  _cache[4] || (_cache[4] = createElementVNode("div", { class: "measurement-icon" }, "💧", -1)),
                  createElementVNode("div", _hoisted_12, [
                    _cache[3] || (_cache[3] = createElementVNode("span", { class: "label" }, "Humidity", -1)),
                    createElementVNode("span", _hoisted_13, toDisplayString(station.humidity.value) + toDisplayString(station.humidity.unit), 1)
                  ])
                ])) : createCommentVNode("", true),
                station.pressure ? (openBlock(), createElementBlock("div", _hoisted_14, [
                  _cache[6] || (_cache[6] = createElementVNode("div", { class: "measurement-icon" }, "📊", -1)),
                  createElementVNode("div", _hoisted_15, [
                    _cache[5] || (_cache[5] = createElementVNode("span", { class: "label" }, "Pressure", -1)),
                    createElementVNode("span", _hoisted_16, toDisplayString(station.pressure.value) + toDisplayString(station.pressure.unit), 1)
                  ])
                ])) : createCommentVNode("", true),
                station.windSpeed ? (openBlock(), createElementBlock("div", _hoisted_17, [
                  _cache[8] || (_cache[8] = createElementVNode("div", { class: "measurement-icon" }, "💨", -1)),
                  createElementVNode("div", _hoisted_18, [
                    _cache[7] || (_cache[7] = createElementVNode("span", { class: "label" }, "Wind Speed", -1)),
                    createElementVNode("span", _hoisted_19, toDisplayString(station.windSpeed.value) + toDisplayString(station.windSpeed.unit), 1)
                  ])
                ])) : createCommentVNode("", true),
                station.windDirection ? (openBlock(), createElementBlock("div", _hoisted_20, [
                  _cache[10] || (_cache[10] = createElementVNode("div", { class: "measurement-icon" }, "🧭", -1)),
                  createElementVNode("div", _hoisted_21, [
                    _cache[9] || (_cache[9] = createElementVNode("span", { class: "label" }, "Wind Direction", -1)),
                    createElementVNode("span", _hoisted_22, toDisplayString(station.windDirection.value) + toDisplayString(station.windDirection.unit), 1)
                  ])
                ])) : createCommentVNode("", true),
                station.precipitation ? (openBlock(), createElementBlock("div", _hoisted_23, [
                  _cache[12] || (_cache[12] = createElementVNode("div", { class: "measurement-icon" }, "🌧️", -1)),
                  createElementVNode("div", _hoisted_24, [
                    _cache[11] || (_cache[11] = createElementVNode("span", { class: "label" }, "Precipitation", -1)),
                    createElementVNode("span", _hoisted_25, toDisplayString(station.precipitation.value) + toDisplayString(station.precipitation.unit), 1)
                  ])
                ])) : createCommentVNode("", true),
                station.visibility ? (openBlock(), createElementBlock("div", _hoisted_26, [
                  _cache[14] || (_cache[14] = createElementVNode("div", { class: "measurement-icon" }, "👁️", -1)),
                  createElementVNode("div", _hoisted_27, [
                    _cache[13] || (_cache[13] = createElementVNode("span", { class: "label" }, "Visibility", -1)),
                    createElementVNode("span", _hoisted_28, toDisplayString(station.visibility.value) + toDisplayString(station.visibility.unit), 1)
                  ])
                ])) : createCommentVNode("", true),
                station.cloudCover ? (openBlock(), createElementBlock("div", _hoisted_29, [
                  _cache[16] || (_cache[16] = createElementVNode("div", { class: "measurement-icon" }, "☁️", -1)),
                  createElementVNode("div", _hoisted_30, [
                    _cache[15] || (_cache[15] = createElementVNode("span", { class: "label" }, "Cloud Cover", -1)),
                    createElementVNode("span", _hoisted_31, toDisplayString(station.cloudCover.value) + toDisplayString(station.cloudCover.unit), 1)
                  ])
                ])) : createCommentVNode("", true)
              ]),
              hasTimestamp(station) ? (openBlock(), createElementBlock("div", _hoisted_32, [
                createElementVNode("small", null, "Last updated: " + toDisplayString(formatTimestamp(getLatestTimestamp(station))), 1)
              ])) : createCommentVNode("", true)
            ]);
          }), 128))
        ]))
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
const Preview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2a15dca0"]]);
const _hoisted_1 = { class: "weather-composer-settings" };
const _hoisted_2 = { class: "collapsible-section" };
const _hoisted_3 = {
  key: 0,
  class: "collapsible-content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {}
  },
  setup(__props) {
    const datasourcesFiltered = computed(() => {
      return __props.dataSources.filter((ds) => ds.type === "ogcsta");
    });
    const availableThings = ref([]);
    const isLoadingThings = ref(false);
    watch(() => __props.config.connectedDatasources, async () => {
      await loadAvailableThings();
    }, { immediate: true });
    async function loadAvailableThings() {
      if (!__props.config.connectedDatasources || __props.config.connectedDatasources.length === 0) {
        availableThings.value = [];
        return;
      }
      isLoadingThings.value = true;
      try {
        const datasourceRepository = inject(identifier);
        const allThings = [];
        for (const datasourceId of __props.config.connectedDatasources) {
          try {
            const datasource = datasourceRepository.getDatasource(datasourceId);
            const data = await datasource.getData("OGCSTAData", {
              filter: {
                things: {
                  all: {
                    includeDatastreams: false,
                    includeLocations: false
                  }
                }
              }
            });
            if (data?.things) {
              data.things.forEach((thing) => {
                const thingId = thing["@iot.id"] || thing.iotId || thing.id;
                if (thingId) {
                  allThings.push({
                    iotId: String(thingId),
                    name: thing.name || `Thing ${thingId}`
                  });
                }
              });
            }
          } catch (error) {
            console.error("Error loading things from datasource:", datasourceId, error);
          }
        }
        availableThings.value = allThings;
      } finally {
        isLoadingThings.value = false;
      }
    }
    const isMappingSectionExpanded = ref(false);
    const weatherParameters = [
      { key: "temperature", label: "Temperature", placeholder: "temp, temperatur, lufttemperatur" },
      { key: "humidity", label: "Humidity", placeholder: "humidity, feuchte, luftfeuchte" },
      { key: "pressure", label: "Pressure", placeholder: "pressure, luftdruck" },
      { key: "windSpeed", label: "Wind Speed", placeholder: "windspeed, windgeschwindigkeit" },
      { key: "windDirection", label: "Wind Direction", placeholder: "winddirection, windrichtung" },
      { key: "precipitation", label: "Precipitation", placeholder: "precipitation, niederschlag, rain" },
      { key: "visibility", label: "Visibility", placeholder: "visibility, sicht" },
      { key: "cloudCover", label: "Cloud Cover", placeholder: "cloudcover, wolken, bedeckung" }
    ];
    const updateCustomMapping = (parameter, keywords) => {
      if (!__props.config.customMapping) {
        __props.config.customMapping = {};
      }
      if (keywords.trim()) {
        __props.config.customMapping[parameter] = keywords.split(",").map((k) => k.trim());
      } else {
        delete __props.config.customMapping[parameter];
      }
    };
    const getCustomMappingValue = (parameter) => {
      return __props.config.customMapping?.[parameter]?.join(", ") || "";
    };
    return (_ctx, _cache) => {
      const _component_VaSelect = resolveComponent("VaSelect");
      const _component_VaInput = resolveComponent("VaInput");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VaSelect, {
          modelValue: __props.config.connectedDatasources,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.connectedDatasources = $event),
          label: "OGC STA Sources",
          options: datasourcesFiltered.value,
          multiple: "",
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        createVNode(_component_VaSelect, {
          modelValue: __props.config.thingId,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.config.thingId = $event),
          label: "Thing (Optional)",
          placeholder: "All Things",
          options: availableThings.value,
          "text-by": "name",
          "value-by": "iotId",
          loading: isLoadingThings.value,
          disabled: isLoadingThings.value || availableThings.value.length === 0,
          clearable: ""
        }, null, 8, ["modelValue", "options", "loading", "disabled"]),
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", {
            class: "collapsible-header",
            onClick: _cache[2] || (_cache[2] = ($event) => isMappingSectionExpanded.value = !isMappingSectionExpanded.value)
          }, [
            _cache[3] || (_cache[3] = createElementVNode("h3", null, "Custom Keyword Mapping (Optional)", -1)),
            createElementVNode("span", {
              class: normalizeClass(["collapse-icon", { "expanded": isMappingSectionExpanded.value }])
            }, "▼", 2)
          ]),
          isMappingSectionExpanded.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
            _cache[4] || (_cache[4] = createElementVNode("p", { class: "section-description" }, "Override default keywords for weather parameter detection", -1)),
            (openBlock(), createElementBlock(Fragment, null, renderList(weatherParameters, (param) => {
              return createElementVNode("div", {
                key: param.key,
                class: "mapping-item"
              }, [
                createVNode(_component_VaInput, {
                  "model-value": getCustomMappingValue(param.key),
                  "onUpdate:modelValue": ($event) => updateCustomMapping(param.key, $event),
                  label: param.label,
                  placeholder: param.placeholder
                }, null, 8, ["model-value", "onUpdate:modelValue", "label", "placeholder"])
              ]);
            }), 64))
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6893179"]]);
const WeatherComposerIdentifier = Symbol.for("WeatherComposer");
const previewSymbol = Symbol.for("WeatherComposerPreview");
const settingsSymbol = Symbol.for("WeatherComposerSettings");
function activate({ services }) {
  services.register("WeatherComposerPreview", Preview);
  services.register("WeatherComposerSettings", Settings);
  services.getRequired(DATASOURCE_REPOSITORY).registerDatasourceType("weather", {
    Store: WeatherComposerIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(DATASOURCE_REPOSITORY).unregisterDatasourceType("weather");
  services.unregister("WeatherComposerPreview");
  services.unregister("WeatherComposerSettings");
}
export {
  activate,
  deactivate
};
