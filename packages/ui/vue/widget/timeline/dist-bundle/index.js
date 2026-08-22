(function(){var i="ui.vue.widget.timeline",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n/* Timeline Widget Hauptcontainer */\n.timeline-widget[data-v-a39ea455] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n/* Timeline Container mit Slider und Zeitachse */\n.timeline-container[data-v-a39ea455] {\n  overflow: hidden;\n  position: relative;\n  background: var(--va-background-primary);\n  border: 1px solid var(--va-background-border);\n  border-radius: 8px;\n  padding: 1rem;\n  min-height: 80px;\n}\n\n/* Timeline Track (Slider-Bereich) */\n.timeline-track[data-v-a39ea455] {\n  position: relative;\n  height: 40px;\n  /* background wird via computed style gesetzt */\n  border-radius: 20px;\n  margin-bottom: 1rem;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n/* Transparenter Range-Streifen zwischen den Knobs */\n.range-strip[data-v-a39ea455] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  /* background und border werden via computed style gesetzt */\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 20px;\n  cursor: grab;\n  transition: background-color 0.2s ease, border-color 0.2s ease;\n  z-index: 1;\n}\n.range-strip[data-v-a39ea455]:hover {\n  filter: brightness(1.1);\n}\n.range-strip[data-v-a39ea455]:active {\n  cursor: grabbing;\n}\n\n/* Timeline Knobs (Start und Ende) - relativ zum Range-Strip positioniert */\n.timeline-knob[data-v-a39ea455] {\n  position: absolute;\n  top: 50%;\n  width: 24px;\n  height: 24px;\n  background: var(--va-primary);\n  border: 3px solid white;\n  border-radius: 50%;\n  cursor: grab;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease;\n  z-index: 3;\n}\n.timeline-knob[data-v-a39ea455]:hover {\n  background: var(--va-primary-dark);\n  transform: translate(-50%, -50%) scale(1.1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.timeline-knob[data-v-a39ea455]:active {\n  cursor: grabbing;\n  transform: translate(-50%, -50%) scale(1.2);\n}\n.start-knob[data-v-a39ea455] {\n  left: 0;\n  z-index: 4;\n}\n.fixed-knob[data-v-a39ea455] {\n  cursor: not-allowed !important;\n  opacity: 0.7;\n}\n.fixed-knob[data-v-a39ea455]:hover {\n  transform: translate(-50%, -50%) !important;\n  background: var(--va-background-border) !important;\n}\n.end-knob[data-v-a39ea455] {\n  right: -24px;\n  z-index: 4;\n}\n\n/* Zeitachse unterhalb des Sliders */\n.time-axis[data-v-a39ea455] {\n  position: relative;\n  height: 30px;\n  background: var(--va-background-secondary);\n  border-top: 1px solid var(--va-background-border);\n  border-radius: 0 0 8px 8px;\n  margin: 0 -1rem -1rem -1rem;\n  padding: 0 1rem;\n}\n\n/* Zeit-Ticks auf der Zeitachse */\n.time-tick[data-v-a39ea455] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transform: translateX(-50%);\n  pointer-events: none;\n  z-index: 2;\n}\n.tick-mark[data-v-a39ea455] {\n  width: 1px;\n  height: 8px;\n  background: var(--va-text-secondary);\n  margin-top: 2px;\n}\n.tick-label[data-v-a39ea455] {\n  font-size: 0.7rem;\n  color: var(--va-text-secondary);\n  margin-top: 4px;\n  white-space: nowrap;\n  user-select: none;\n}\n\n/* Zeitbereich-Info */\n.time-info[data-v-a39ea455] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  font-size: 0.9rem;\n  background: var(--va-background-primary);\n  border: 1px solid var(--va-background-border);\n  border-radius: 6px;\n  padding: 0.75rem;\n}\n.time-display[data-v-a39ea455] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  flex: 1;\n  text-align: center;\n}\n.time-label[data-v-a39ea455] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--va-text-secondary);\n}\n.time-value[data-v-a39ea455] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--va-text-primary);\n  word-wrap: break-word;\n}\n\n/* Kontrollen (Play-Button und Geschwindigkeit) */\n.controls[data-v-a39ea455] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.play-button[data-v-a39ea455] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border: none;\n  border-radius: 50%;\n  background: var(--play-button-bg, var(--va-primary));\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.play-button[data-v-a39ea455]:hover:not(:disabled) {\n  background: var(--va-primary-dark);\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.play-button[data-v-a39ea455]:disabled {\n  background: var(--va-background-border);\n  color: var(--va-text-secondary);\n  cursor: not-allowed;\n  transform: none;\n}\n.play-button.playing[data-v-a39ea455] {\n  background: var(--play-button-playing, #ff6b35);\n  animation: pulse-a39ea455 2s infinite;\n}\n.play-button.playing[data-v-a39ea455]:hover {\n  filter: brightness(0.9);\n}\n@keyframes pulse-a39ea455 {\n0% { box-shadow: 0 2px 8px var(--play-button-bg, rgba(255, 107, 53, 0.4));\n}\n50% { box-shadow: 0 4px 16px var(--play-button-bg, rgba(255, 107, 53, 0.8));\n}\n100% { box-shadow: 0 2px 8px var(--play-button-bg, rgba(255, 107, 53, 0.4));\n}\n}\n.speed-control[data-v-a39ea455] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n.speed-control label[data-v-a39ea455] {\n  font-weight: 500;\n  color: var(--va-text-primary);\n  min-width: fit-content;\n}\n.speed-control select[data-v-a39ea455] {\n  padding: 0.5rem;\n  border: 1px solid var(--va-background-border);\n  border-radius: 4px;\n  background: var(--va-background-primary);\n  color: var(--va-text-primary);\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n.time-info[data-v-a39ea455] {\n    flex-direction: column;\n    gap: 0.75rem;\n}\n.time-display[data-v-a39ea455] {\n    text-align: left;\n}\n.controls[data-v-a39ea455] {\n    flex-direction: column;\n    gap: 0.75rem;\n}\n.timeline-knob[data-v-a39ea455] {\n    width: 28px;\n    height: 28px;\n}\n.tick-label[data-v-a39ea455] {\n    font-size: 0.6rem;\n}\n.timeline-container[data-v-a39ea455] {\n    min-height: 70px;\n}\n.timeline-track[data-v-a39ea455] {\n    height: 35px;\n}\n}\n\n.settings-container[data-v-d65dd0e0] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  overflow-x: hidden;\n}\n.setting-group[data-v-d65dd0e0] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 0;\n}\n.setting-group > label[data-v-d65dd0e0] {\n  font-weight: 600;\n  color: var(--va-text-primary);\n  font-size: 0.9rem;\n}\n.datetime-group[data-v-d65dd0e0] {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n.datetime-group[data-v-d65dd0e0] > * {\n  flex: 1;\n  min-width: 0;\n}\n.relative-time-config[data-v-d65dd0e0] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  background: var(--va-background-element);\n  border-radius: 4px;\n  min-width: 0;\n  overflow: hidden;\n}\n.relative-time-row[data-v-d65dd0e0] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: flex-end;\n  min-width: 0;\n}\n.offset-input[data-v-d65dd0e0] {\n  flex: 1;\n  min-width: 60px;\n  max-width: 100px;\n}\n.unit-select[data-v-d65dd0e0] {\n  flex: 2;\n  min-width: 80px;\n}\n.relative-time-preview[data-v-d65dd0e0] {\n  font-size: 0.85rem;\n  color: var(--va-primary);\n  padding: 0.5rem;\n  background: var(--va-background-secondary);\n  border-radius: 4px;\n  text-align: center;\n  word-break: break-word;\n}\n.variable-config[data-v-d65dd0e0] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n";})();
const { WidgetAction, WidgetActionInterface, EVENT_ACTIONS_REGISTRY, Payload, EVENT_REGISTRY_ID, EVENT_ACTIONS_REGISTRY_ID } = __tsm__.require("org.eclipse.daanse.board.app.lib.events");
import { activate, deactivate, component, inject as inject$1 } from "@eclipse-daanse/tsm";
import { defineComponent, mergeModels, inject, toRefs, useModel, ref, computed, watch, onMounted, onUnmounted, createElementBlock, openBlock, withModifiers, createElementVNode, createCommentVNode, normalizeStyle, Fragment, renderList, toDisplayString, normalizeClass, withDirectives, createStaticVNode, vModelSelect, resolveComponent, createVNode, withCtx, createBlock } from "vue";
import { useRoute } from "vue-router";
const { VariableWrapper } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
const { identifier } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.variable");
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$1(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$1(target, key, result);
  return result;
};
class TimelineWidgetInterface extends WidgetActionInterface {
  zoomIn() {
    throw new Error("zoomIn not implemented");
  }
  zoomOut() {
    throw new Error("zoomOut not implemented");
  }
  setDateRange(start, end) {
    throw new Error("setDateRange not implemented");
  }
  jumpToNow() {
    throw new Error("jumpToNow not implemented");
  }
}
__decorateClass$1([
  WidgetAction({ eventType: "timeline.zoomIn" })
], TimelineWidgetInterface.prototype, "zoomIn");
__decorateClass$1([
  WidgetAction({ eventType: "timeline.zoomOut" })
], TimelineWidgetInterface.prototype, "zoomOut");
__decorateClass$1([
  WidgetAction({ eventType: "timeline.setDateRange" })
], TimelineWidgetInterface.prototype, "setDateRange");
__decorateClass$1([
  WidgetAction({ eventType: "timeline.jumpToNow" })
], TimelineWidgetInterface.prototype, "jumpToNow");
const _hoisted_1$1 = { class: "timeline-container" };
const _hoisted_2$1 = ["title"];
const _hoisted_3$1 = {
  key: 1,
  class: "timeline-knob start-knob fixed-knob",
  title: "Startzeit (fixiert)"
};
const _hoisted_4$1 = { class: "time-axis" };
const _hoisted_5$1 = { class: "tick-label" };
const _hoisted_6$1 = {
  key: 0,
  class: "time-info"
};
const _hoisted_7$1 = { class: "time-display" };
const _hoisted_8$1 = { class: "time-value" };
const _hoisted_9$1 = { class: "time-display" };
const _hoisted_10$1 = { class: "time-value" };
const _hoisted_11$1 = { class: "time-display" };
const _hoisted_12$1 = { class: "time-value" };
const _hoisted_13$1 = {
  key: 1,
  class: "controls"
};
const _hoisted_14$1 = ["disabled"];
const _hoisted_15$1 = {
  key: 0,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_16$1 = {
  key: 1,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_17$1 = { class: "speed-control" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TimelineWidget",
  props: /* @__PURE__ */ mergeModels({
    datasourceId: {},
    id: {}
  }, {
    "configv": { required: true },
    "configvModifiers": {}
  }),
  emits: ["update:configv"],
  setup(__props, { expose: __expose }) {
    inject("i18n");
    const props = __props;
    const { id: widgetId } = toRefs(props);
    const config = useModel(__props, "configv");
    const eventBus = inject(identifiers.TINY_EMITTER);
    const actionsRegistry = inject(EVENT_ACTIONS_REGISTRY);
    const route = useRoute();
    const pageId = route.params.pageid || "";
    class TimelineWidgetApi extends TimelineWidgetInterface {
      zoomIn() {
        const start = new Date(config.value.rangeStart || Date.now() - 864e5);
        const end = new Date(config.value.rangeEnd || Date.now());
        const duration = end.getTime() - start.getTime();
        const shrink = duration * 0.25;
        const newStart = new Date(start.getTime() + shrink);
        const newEnd = new Date(end.getTime() - shrink);
        if (newEnd.getTime() - newStart.getTime() > 6e4) {
          config.value = { ...config.value, rangeStart: newStart.toISOString(), rangeEnd: newEnd.toISOString() };
        }
      }
      zoomOut() {
        const start = new Date(config.value.rangeStart || Date.now() - 864e5);
        const end = new Date(config.value.rangeEnd || Date.now());
        const duration = end.getTime() - start.getTime();
        const expand = duration * 0.5;
        const newStart = new Date(Math.max(
          start.getTime() - expand,
          new Date(config.value.timelineMin || 0).getTime()
        ));
        const newEnd = new Date(Math.min(
          end.getTime() + expand,
          new Date(config.value.timelineMax || Date.now() + 864e5 * 7).getTime()
        ));
        config.value = { ...config.value, rangeStart: newStart.toISOString(), rangeEnd: newEnd.toISOString() };
      }
      setDateRange(start, end) {
        config.value = { ...config.value, rangeStart: start, rangeEnd: end };
      }
      jumpToNow() {
        const now = /* @__PURE__ */ new Date();
        const duration = new Date(config.value.rangeEnd || now).getTime() - new Date(config.value.rangeStart || now).getTime();
        const newEnd = now;
        const newStart = new Date(now.getTime() - duration);
        config.value = { ...config.value, rangeStart: newStart.toISOString(), rangeEnd: newEnd.toISOString() };
      }
    }
    const api = new TimelineWidgetApi();
    __expose(api);
    const emitClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:TimelineWidget:click", {
        type: "widget:TimelineWidget:click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRightClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:TimelineWidget:right_click", {
        type: "widget:TimelineWidget:right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const variableRepository = ref(null);
    const rangeStartWrapper = ref(new VariableWrapper(""));
    const rangeEndWrapper = ref(new VariableWrapper(""));
    const isPlaying = ref(false);
    const playbackSpeed = ref(config.value.playbackSpeed || 1);
    const isDragging = ref(false);
    const trackRef = ref();
    const tempStartPosition = ref(null);
    const tempEndPosition = ref(null);
    const tempRangeStripStyle = ref(null);
    let animationFrame = null;
    let lastStepTime = 0;
    const defaultTimelineMin = new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3);
    const defaultTimelineMax = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3);
    const defaultRangeStart = new Date(Date.now() - 24 * 60 * 60 * 1e3);
    const defaultRangeEnd = /* @__PURE__ */ new Date();
    const calculateRelativeTime = (offset, unit) => {
      const now = /* @__PURE__ */ new Date();
      const start = new Date(now);
      const safeOffset = Number(offset) || 24;
      const unitValue = typeof unit === "object" && unit !== null ? unit.value : unit;
      switch (unitValue) {
        case "hours":
          start.setHours(start.getHours() - safeOffset);
          break;
        case "days":
          start.setDate(start.getDate() - safeOffset);
          break;
        case "weeks":
          start.setDate(start.getDate() - safeOffset * 7);
          break;
        case "months":
          start.setMonth(start.getMonth() - safeOffset);
          break;
        case "years":
          start.setFullYear(start.getFullYear() - safeOffset);
          break;
        default:
          start.setHours(start.getHours() - safeOffset);
      }
      return { start, end: now };
    };
    const applyRelativeTime = () => {
      if (!config.value.relativeTime?.enabled) return;
      const { start, end } = calculateRelativeTime(
        config.value.relativeTime.offset,
        config.value.relativeTime.unit
      );
      config.value.timelineMin = start.toISOString();
      config.value.timelineMax = end.toISOString();
      const frameDuration = end.getTime() - start.getTime();
      const rangeDuration = frameDuration * 0.2;
      const newRangeEnd = end;
      const newRangeStart = new Date(end.getTime() - rangeDuration);
      config.value.rangeStart = newRangeStart.toISOString();
      config.value.rangeEnd = newRangeEnd.toISOString();
      if (config.value.rangeStartVariable && variableRepository.value) {
        const startVariable = variableRepository.value.getVariable(config.value.rangeStartVariable);
        if (startVariable) {
          startVariable.value = newRangeStart.toISOString();
        }
      }
      if (config.value.rangeEndVariable && variableRepository.value) {
        const endVariable = variableRepository.value.getVariable(config.value.rangeEndVariable);
        if (endVariable) {
          endVariable.value = newRangeEnd.toISOString();
        }
      }
    };
    const timelineMin = computed(() => {
      return config.value.timelineMin ? new Date(config.value.timelineMin) : defaultTimelineMin;
    });
    const timelineMax = computed(() => {
      return config.value.timelineMax ? new Date(config.value.timelineMax) : defaultTimelineMax;
    });
    const rangeStart = computed(() => {
      if (config.value.rangeStartVariable && variableRepository.value) {
        const variable = variableRepository.value.getVariable(config.value.rangeStartVariable);
        if (variable && variable.value) {
          return new Date(variable.value);
        }
      }
      return config.value.rangeStart ? new Date(config.value.rangeStart) : defaultRangeStart;
    });
    const rangeEnd = computed(() => {
      if (config.value.rangeEndVariable && variableRepository.value) {
        const variable = variableRepository.value.getVariable(config.value.rangeEndVariable);
        if (variable && variable.value) {
          return new Date(variable.value);
        }
      }
      return config.value.rangeEnd ? new Date(config.value.rangeEnd) : defaultRangeEnd;
    });
    const startKnobPosition = computed(() => {
      if (config.value.fixStartKnob) {
        return 0;
      }
      if (tempStartPosition.value !== null) {
        return tempStartPosition.value;
      }
      const minMs = timelineMin.value.getTime();
      const maxMs = timelineMax.value.getTime();
      const startMs = rangeStart.value.getTime();
      return Math.max(0, Math.min(100, (startMs - minMs) / (maxMs - minMs) * 100));
    });
    const endKnobPosition = computed(() => {
      if (tempEndPosition.value !== null) {
        return tempEndPosition.value;
      }
      const minMs = timelineMin.value.getTime();
      const maxMs = timelineMax.value.getTime();
      const endMs = rangeEnd.value.getTime();
      return Math.max(0, Math.min(100, (endMs - minMs) / (maxMs - minMs) * 100));
    });
    const rangeStripStyle = computed(() => {
      if (tempRangeStripStyle.value) {
        return {
          ...tempRangeStripStyle.value,
          background: getRangeStripColor(0.5),
          borderColor: config.value.rangeStripColor || "#d17600"
        };
      }
      return {
        left: startKnobPosition.value + "%",
        width: endKnobPosition.value - startKnobPosition.value + "%",
        background: getRangeStripColor(0.5),
        borderColor: config.value.rangeStripColor || "#d17600"
      };
    });
    const getRangeStripColor = (opacity) => {
      const color = config.value.rangeStripColor || "#d17600";
      const hex = color.replace("#", "");
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };
    const timelineTrackStyle = computed(() => {
      const baseColor = config.value.rangeStripColor || "#d17600";
      const trackColor = calculateTrackColor(baseColor);
      return {
        backgroundColor: trackColor
      };
    });
    const calculateTrackColor = (hexColor) => {
      const hex = hexColor.replace("#", "");
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      const deltaFactor = 0.6;
      const lightR = Math.min(255, Math.round(r + (255 - r) * deltaFactor));
      const lightG = Math.min(255, Math.round(g + (255 - g) * deltaFactor));
      const lightB = Math.min(255, Math.round(b + (255 - b) * deltaFactor));
      return `rgb(${lightR}, ${lightG}, ${lightB})`;
    };
    const getStepSizeInMs = () => {
      const stepSize = config.value.stepSize || "hour";
      switch (stepSize) {
        case "minute":
          return 60 * 1e3;
        // 1 Minute = 60 Sekunden
        case "hour":
          return 60 * 60 * 1e3;
        // 1 Stunde = 3600 Sekunden
        case "day":
          return 24 * 60 * 60 * 1e3;
        // 1 Tag = 86400 Sekunden
        case "week":
          return 7 * 24 * 60 * 60 * 1e3;
        // 1 Woche
        case "month":
          return 30 * 24 * 60 * 60 * 1e3;
        // 1 Monat (ca. 30 Tage)
        default:
          return 60 * 60 * 1e3;
      }
    };
    const playButtonStyle = computed(() => {
      const baseColor = config.value.rangeStripColor || "#d17600";
      const playingColor = calculatePlayingColor(baseColor);
      return {
        "--play-button-bg": baseColor,
        "--play-button-playing": playingColor
      };
    });
    const calculatePlayingColor = (hexColor) => {
      const hex = hexColor.replace("#", "");
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      const darkenFactor = 0.8;
      const warmFactor = 1.1;
      const darkR = Math.min(255, Math.round(r * darkenFactor * warmFactor));
      const darkG = Math.round(g * darkenFactor);
      const darkB = Math.round(b * darkenFactor);
      return `rgb(${darkR}, ${darkG}, ${darkB})`;
    };
    const isAtEnd = computed(() => {
      return rangeEnd.value.getTime() >= timelineMax.value.getTime();
    });
    const startKnobOnTop = computed(() => {
      const distance = endKnobPosition.value - startKnobPosition.value;
      if (distance >= 10) return false;
      return startKnobPosition.value > 50;
    });
    const timeAxisTicks = computed(() => {
      const ticks = [];
      const minMs = timelineMin.value.getTime();
      const maxMs = timelineMax.value.getTime();
      const totalRange = maxMs - minMs;
      const tickCount = 8;
      for (let i = 0; i <= tickCount; i++) {
        const tickMs = minMs + totalRange / tickCount * i;
        const tickDate = new Date(tickMs);
        const position = i / tickCount * 100;
        const label = tickDate.toLocaleString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        });
        ticks.push({
          timestamp: tickDate.toISOString(),
          position,
          label
        });
      }
      return ticks;
    });
    const formatDateTime = (date) => {
      return date.toLocaleString("de-DE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const formatDuration = () => {
      const diffMs = rangeEnd.value.getTime() - rangeStart.value.getTime();
      const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
      const diffDays = Math.floor(diffHours / 24);
      if (diffDays > 0) return `${diffDays}d ${diffHours % 24}h`;
      if (diffHours > 0) return `${diffHours}h`;
      const diffMinutes = Math.floor(diffMs / (1e3 * 60));
      return `${diffMinutes}min`;
    };
    const getTrackRect = () => {
      return trackRef.value?.getBoundingClientRect();
    };
    let updateConfigTimeout = null;
    const updateConfig = (newStart, newEnd, immediate = false) => {
      const actualStart = config.value.fixStartKnob ? timelineMin.value : newStart || rangeStart.value;
      const actualEnd = newEnd || rangeEnd.value;
      if (!actualStart || isNaN(actualStart.getTime()) || !actualEnd || isNaN(actualEnd.getTime())) {
        console.warn("Invalid date values in updateConfig:", { actualStart, actualEnd });
        return;
      }
      const updateFn = () => {
        config.value = {
          ...config.value,
          rangeStart: actualStart.toISOString(),
          rangeEnd: actualEnd.toISOString(),
          playbackSpeed: playbackSpeed.value
        };
        if (config.value.rangeStartVariable && variableRepository.value) {
          const startVariable = variableRepository.value.getVariable(config.value.rangeStartVariable);
          if (startVariable) {
            startVariable.value = actualStart.toISOString();
          }
        }
        if (config.value.rangeEndVariable && variableRepository.value) {
          const endVariable = variableRepository.value.getVariable(config.value.rangeEndVariable);
          if (endVariable) {
            endVariable.value = actualEnd.toISOString();
          }
        }
      };
      if (immediate) {
        if (updateConfigTimeout) {
          clearTimeout(updateConfigTimeout);
          updateConfigTimeout = null;
        }
        updateFn();
      } else {
        if (updateConfigTimeout) {
          clearTimeout(updateConfigTimeout);
        }
        updateConfigTimeout = setTimeout(updateFn, 300);
      }
    };
    const onStartKnobMouseDown = (event) => {
      if (config.value.fixStartKnob) {
        return;
      }
      event.preventDefault();
      isDragging.value = true;
      const trackRect = getTrackRect();
      if (!trackRect) return;
      const startMouseX = event.clientX;
      const minMs = timelineMin.value.getTime();
      const maxMs = timelineMax.value.getTime();
      const timePerPixel = (maxMs - minMs) / trackRect.width;
      const initialStartMs = rangeStart.value.getTime();
      const endMs = rangeEnd.value.getTime();
      const totalRange = maxMs - minMs;
      let lastNewStartMs = initialStartMs;
      const handleMouseMove = (e) => {
        if (!isDragging.value) return;
        const deltaPx = e.clientX - startMouseX;
        let newStartMs = initialStartMs + deltaPx * timePerPixel;
        newStartMs = Math.max(minMs, Math.min(newStartMs, endMs - 6e4));
        lastNewStartMs = newStartMs;
        const newStartPosition = Math.max(0, Math.min(100, (newStartMs - minMs) / totalRange * 100));
        const endPosition = Math.max(0, Math.min(100, (endMs - minMs) / totalRange * 100));
        tempStartPosition.value = newStartPosition;
        tempRangeStripStyle.value = {
          left: newStartPosition + "%",
          width: endPosition - newStartPosition + "%"
        };
      };
      const handleMouseUp = () => {
        isDragging.value = false;
        tempStartPosition.value = null;
        tempRangeStripStyle.value = null;
        updateConfig(new Date(lastNewStartMs), new Date(endMs), true);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };
    const onEndKnobMouseDown = (event) => {
      event.preventDefault();
      isDragging.value = true;
      const trackRect = getTrackRect();
      if (!trackRect) return;
      const startMouseX = event.clientX;
      const minMs = timelineMin.value.getTime();
      const maxMs = timelineMax.value.getTime();
      const timePerPixel = (maxMs - minMs) / trackRect.width;
      const initialEndMs = rangeEnd.value.getTime();
      const startMs = rangeStart.value.getTime();
      const totalRange = maxMs - minMs;
      let lastNewEndMs = initialEndMs;
      const handleMouseMove = (e) => {
        if (!isDragging.value) return;
        const deltaPx = e.clientX - startMouseX;
        let newEndMs = initialEndMs + deltaPx * timePerPixel;
        newEndMs = Math.min(maxMs, Math.max(newEndMs, startMs + 6e4));
        lastNewEndMs = newEndMs;
        const startPosition = Math.max(0, Math.min(100, (startMs - minMs) / totalRange * 100));
        const newEndPosition = Math.max(0, Math.min(100, (newEndMs - minMs) / totalRange * 100));
        tempEndPosition.value = newEndPosition;
        tempRangeStripStyle.value = {
          left: startPosition + "%",
          width: newEndPosition - startPosition + "%"
        };
      };
      const handleMouseUp = () => {
        isDragging.value = false;
        tempEndPosition.value = null;
        tempRangeStripStyle.value = null;
        updateConfig(new Date(startMs), new Date(lastNewEndMs), true);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };
    const onRangeStripMouseDown = (event) => {
      if (config.value.fixStartKnob) {
        onEndKnobMouseDown(event);
        return;
      }
      event.preventDefault();
      isDragging.value = true;
      const trackRect = getTrackRect();
      if (!trackRect) return;
      const startMouseX = event.clientX;
      const minMs = timelineMin.value.getTime();
      const maxMs = timelineMax.value.getTime();
      const timePerPixel = (maxMs - minMs) / trackRect.width;
      const initialStartMs = rangeStart.value.getTime();
      const initialEndMs = rangeEnd.value.getTime();
      const rangeDuration = initialEndMs - initialStartMs;
      const totalRange = maxMs - minMs;
      let lastNewStartMs = initialStartMs;
      let lastNewEndMs = initialEndMs;
      const handleMouseMove = (e) => {
        if (!isDragging.value) return;
        const deltaPx = e.clientX - startMouseX;
        const deltaTime = deltaPx * timePerPixel;
        let newStartMs = initialStartMs + deltaTime;
        let newEndMs = newStartMs + rangeDuration;
        if (newStartMs < minMs) {
          newStartMs = minMs;
          newEndMs = newStartMs + rangeDuration;
        }
        if (newEndMs > maxMs) {
          newEndMs = maxMs;
          newStartMs = newEndMs - rangeDuration;
        }
        lastNewStartMs = newStartMs;
        lastNewEndMs = newEndMs;
        const newStartPosition = Math.max(0, Math.min(100, (newStartMs - minMs) / totalRange * 100));
        const newEndPosition = Math.max(0, Math.min(100, (newEndMs - minMs) / totalRange * 100));
        tempStartPosition.value = newStartPosition;
        tempEndPosition.value = newEndPosition;
        tempRangeStripStyle.value = {
          left: newStartPosition + "%",
          width: newEndPosition - newStartPosition + "%"
        };
      };
      const handleMouseUp = () => {
        isDragging.value = false;
        tempStartPosition.value = null;
        tempEndPosition.value = null;
        tempRangeStripStyle.value = null;
        updateConfig(new Date(lastNewStartMs), new Date(lastNewEndMs), true);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };
    const togglePlay = () => {
      isPlaying.value = !isPlaying.value;
      if (isPlaying.value) {
        startPlayback();
      } else {
        stopPlayback();
      }
    };
    const startPlayback = () => {
      const now = performance.now();
      lastStepTime = now;
      animatePlayback();
    };
    const stopPlayback = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };
    const animatePlayback = () => {
      if (!isPlaying.value) return;
      const now = performance.now();
      const timeSinceLastStep = now - lastStepTime;
      const stepInterval = 1e3 / playbackSpeed.value;
      if (timeSinceLastStep >= stepInterval) {
        const currentStartMs = rangeStart.value.getTime();
        const currentEndMs = rangeEnd.value.getTime();
        const rangeDuration = currentEndMs - currentStartMs;
        const stepSizeMs = getStepSizeInMs();
        console.log("Playback step:", {
          stepSize: config.value.stepSize,
          stepSizeMs,
          currentStart: new Date(currentStartMs).toISOString(),
          currentEnd: new Date(currentEndMs).toISOString(),
          rangeDuration
        });
        const newStartMs = currentStartMs + stepSizeMs;
        const newEndMs = newStartMs + rangeDuration;
        console.log("New times:", {
          newStart: new Date(newStartMs).toISOString(),
          newEnd: new Date(newEndMs).toISOString(),
          timelineMax: timelineMax.value.toISOString()
        });
        if (newEndMs >= timelineMax.value.getTime()) {
          stopPlayback();
          isPlaying.value = false;
          return;
        }
        updateConfig(new Date(newStartMs), new Date(newEndMs));
        lastStepTime = now;
      }
      animationFrame = requestAnimationFrame(animatePlayback);
    };
    watch(() => config.value.rangeStartVariable, (newVariable) => {
      if (newVariable && variableRepository.value) {
        const variable = variableRepository.value.getVariable(newVariable);
        if (variable) {
          rangeStartWrapper.value.setTo(variable);
        }
      }
    });
    watch(() => config.value.rangeEndVariable, (newVariable) => {
      if (newVariable && variableRepository.value) {
        const variable = variableRepository.value.getVariable(newVariable);
        if (variable) {
          rangeEndWrapper.value.setTo(variable);
        }
      }
    });
    watch(() => rangeStartWrapper.value.value, (newValue) => {
      if (newValue && config.value.rangeStartVariable) {
        const newDate = new Date(newValue);
        if (newDate.getTime() !== rangeStart.value.getTime()) {
          config.value.rangeStart = newValue;
        }
      }
    });
    watch(() => rangeEndWrapper.value.value, (newValue) => {
      if (newValue && config.value.rangeEndVariable) {
        const newDate = new Date(newValue);
        if (newDate.getTime() !== rangeEnd.value.getTime()) {
          config.value.rangeEnd = newValue;
        }
      }
    });
    const injectedVariableRepository = inject(identifier);
    onMounted(() => {
      if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, "TimelineWidget", pageId);
      try {
        variableRepository.value = injectedVariableRepository ?? null;
        if (!variableRepository.value) throw new Error("VariableRepository not provided");
      } catch (error) {
        console.warn("VariableRepository not found in container:", error);
      }
      if (!config.value.timelineMin) {
        config.value.timelineMin = defaultTimelineMin.toISOString();
      }
      if (!config.value.timelineMax) {
        config.value.timelineMax = defaultTimelineMax.toISOString();
      }
      if (!config.value.rangeStart) {
        config.value.rangeStart = defaultRangeStart.toISOString();
      }
      if (!config.value.rangeEnd) {
        config.value.rangeEnd = defaultRangeEnd.toISOString();
      }
      if (!config.value.playbackSpeed) {
        config.value.playbackSpeed = 1;
        playbackSpeed.value = 1;
      } else {
        playbackSpeed.value = config.value.playbackSpeed;
      }
      if (!config.value.rangeStripColor) {
        config.value.rangeStripColor = "#d17600";
      }
      if (config.value.fixStartKnob === void 0) {
        config.value.fixStartKnob = false;
      }
      if (config.value.showTimeInfo === void 0) {
        config.value.showTimeInfo = true;
      }
      if (config.value.showControls === void 0) {
        config.value.showControls = true;
      }
      if (config.value.stepSize === void 0) {
        config.value.stepSize = "hour";
      }
      if (config.value.rangeStartVariable && variableRepository.value) {
        const startVariable = variableRepository.value.getVariable(config.value.rangeStartVariable);
        if (startVariable) {
          rangeStartWrapper.value.setTo(startVariable);
        }
      }
      if (config.value.rangeEndVariable && variableRepository.value) {
        const endVariable = variableRepository.value.getVariable(config.value.rangeEndVariable);
        if (endVariable) {
          rangeEndWrapper.value.setTo(endVariable);
        }
      }
      if (config.value.relativeTime?.enabled) {
        applyRelativeTime();
      }
    });
    onUnmounted(() => {
      if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value);
      stopPlayback();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "timeline-widget",
        onClick: emitClick,
        onContextmenu: withModifiers(emitRightClick, ["prevent"])
      }, [
        createElementVNode("div", _hoisted_1$1, [
          createElementVNode("div", {
            class: "timeline-track",
            ref_key: "trackRef",
            ref: trackRef,
            style: normalizeStyle(timelineTrackStyle.value)
          }, [
            createElementVNode("div", {
              class: "range-strip",
              style: normalizeStyle(rangeStripStyle.value),
              onMousedown: onRangeStripMouseDown,
              title: config.value.fixStartKnob ? "Timeline-Bereich (Start fixiert)" : "Timeline-Bereich - ziehen zum Verschieben"
            }, [
              !config.value.fixStartKnob ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "timeline-knob start-knob",
                style: normalizeStyle({ zIndex: startKnobOnTop.value ? 5 : 4 }),
                onMousedown: withModifiers(onStartKnobMouseDown, ["stop"]),
                title: "Startzeit"
              }, null, 36)) : (openBlock(), createElementBlock("div", _hoisted_3$1)),
              createElementVNode("div", {
                class: "timeline-knob end-knob",
                style: normalizeStyle({ zIndex: startKnobOnTop.value ? 3 : 4 }),
                onMousedown: withModifiers(onEndKnobMouseDown, ["stop"]),
                title: "Endzeit"
              }, null, 36)
            ], 44, _hoisted_2$1)
          ], 4),
          createElementVNode("div", _hoisted_4$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(timeAxisTicks.value, (tick) => {
              return openBlock(), createElementBlock("div", {
                key: tick.timestamp,
                class: "time-tick",
                style: normalizeStyle({ left: tick.position + "%" })
              }, [
                _cache[1] || (_cache[1] = createElementVNode("div", { class: "tick-mark" }, null, -1)),
                createElementVNode("div", _hoisted_5$1, toDisplayString(tick.label), 1)
              ], 4);
            }), 128))
          ])
        ]),
        config.value.showTimeInfo !== false ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
          createElementVNode("div", _hoisted_7$1, [
            _cache[2] || (_cache[2] = createElementVNode("span", { class: "time-label" }, "Start:", -1)),
            createElementVNode("span", _hoisted_8$1, toDisplayString(formatDateTime(rangeStart.value)), 1)
          ]),
          createElementVNode("div", _hoisted_9$1, [
            _cache[3] || (_cache[3] = createElementVNode("span", { class: "time-label" }, "Ende:", -1)),
            createElementVNode("span", _hoisted_10$1, toDisplayString(formatDateTime(rangeEnd.value)), 1)
          ]),
          createElementVNode("div", _hoisted_11$1, [
            _cache[4] || (_cache[4] = createElementVNode("span", { class: "time-label" }, "Dauer:", -1)),
            createElementVNode("span", _hoisted_12$1, toDisplayString(formatDuration()), 1)
          ])
        ])) : createCommentVNode("", true),
        config.value.showControls !== false ? (openBlock(), createElementBlock("div", _hoisted_13$1, [
          createElementVNode("button", {
            class: normalizeClass(["play-button", { "playing": isPlaying.value }]),
            style: normalizeStyle(playButtonStyle.value),
            onClick: togglePlay,
            disabled: isAtEnd.value
          }, [
            !isPlaying.value ? (openBlock(), createElementBlock("svg", _hoisted_15$1, [..._cache[5] || (_cache[5] = [
              createElementVNode("path", { d: "M8 5v14l11-7z" }, null, -1)
            ])])) : (openBlock(), createElementBlock("svg", _hoisted_16$1, [..._cache[6] || (_cache[6] = [
              createElementVNode("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }, null, -1)
            ])]))
          ], 14, _hoisted_14$1),
          createElementVNode("div", _hoisted_17$1, [
            _cache[8] || (_cache[8] = createElementVNode("label", null, "Geschwindigkeit:", -1)),
            withDirectives(createElementVNode("select", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => playbackSpeed.value = $event)
            }, [..._cache[7] || (_cache[7] = [
              createStaticVNode('<option value="0.25" data-v-a39ea455>0.25x</option><option value="0.5" data-v-a39ea455>0.5x</option><option value="1" data-v-a39ea455>1x</option><option value="2" data-v-a39ea455>2x</option><option value="4" data-v-a39ea455>4x</option>', 5)
            ])], 512), [
              [vModelSelect, playbackSpeed.value]
            ])
          ])
        ])) : createCommentVNode("", true)
      ], 32);
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
const TimelineWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a39ea455"]]);
const _hoisted_1 = { class: "settings-container" };
const _hoisted_2 = { class: "setting-group" };
const _hoisted_3 = {
  key: 0,
  class: "setting-group"
};
const _hoisted_4 = { class: "relative-time-config" };
const _hoisted_5 = { class: "relative-time-row" };
const _hoisted_6 = { class: "relative-time-preview" };
const _hoisted_7 = { class: "setting-group" };
const _hoisted_8 = { class: "datetime-group" };
const _hoisted_9 = { class: "setting-group" };
const _hoisted_10 = {
  key: 0,
  class: "datetime-group"
};
const _hoisted_11 = { class: "setting-group" };
const _hoisted_12 = { class: "variable-config" };
const _hoisted_13 = { class: "variable-config" };
const _hoisted_14 = { class: "settings-container" };
const _hoisted_15 = { class: "setting-group" };
const _hoisted_16 = { class: "setting-group" };
const _hoisted_17 = { class: "setting-group" };
const _hoisted_18 = { class: "setting-group" };
const _hoisted_19 = { class: "setting-group" };
const _hoisted_20 = { class: "settings-container" };
const _hoisted_21 = { class: "setting-group" };
const _hoisted_22 = { class: "setting-group" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TimelineWidgetSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const i18n = inject("i18n");
    const t = (key) => i18n ? i18n.t(key) : key;
    const widgetSettings = useModel(__props, "modelValue");
    const opened = ref({
      timelineSection: false,
      playbackSection: false,
      stylingSection: false
    });
    const timeRangeMode = ref("absolute");
    const timeRangeModeOptions = [
      { label: "Relative", value: "relative" },
      { label: "Absolute", value: "absolute" }
    ];
    const now = /* @__PURE__ */ new Date();
    const defaultTimelineStart = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1e3);
    const defaultTimelineEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1e3);
    const defaultRangeStart = new Date(now.getTime() - 24 * 60 * 60 * 1e3);
    const defaultRangeEnd = /* @__PURE__ */ new Date();
    const settings = ref({
      timelineMin: defaultTimelineStart.toISOString(),
      timelineMax: defaultTimelineEnd.toISOString(),
      rangeStart: defaultRangeStart.toISOString(),
      rangeEnd: defaultRangeEnd.toISOString(),
      relativeTime: {
        enabled: false,
        offset: 24,
        unit: "hours"
      },
      stepSize: "hour",
      playbackSpeed: 1,
      autoPlay: false,
      rangeStripColor: "#d17600",
      fixStartKnob: false,
      showTimeInfo: true,
      showControls: true
    });
    const useCurrentTimeAsMax = ref(false);
    const timelineMinDate = ref();
    const timelineMinTime = ref();
    const timelineMaxDate = ref();
    const timelineMaxTime = ref();
    const variableRepository = ref(null);
    const useStartVariable = ref(false);
    const useEndVariable = ref(false);
    const rangeStartWrapper = ref(new VariableWrapper(""));
    const rangeEndWrapper = ref(new VariableWrapper(""));
    const availableVariables = computed(() => {
      if (!variableRepository.value) return [];
      return variableRepository.value.getAllVariables().map(([name, variable]) => variable).filter((v) => v.value && typeof v.value === "string").map((v) => ({ name: v.name, value: v.value }));
    });
    const stepSizeOptions = computed(() => [
      { text: "1 Minute", value: "minute" },
      { text: "1 Hour", value: "hour" },
      { text: "1 Day", value: "day" },
      { text: "1 Week", value: "week" },
      { text: "1 Month", value: "month" }
    ]);
    const speedOptions = computed(() => [
      { text: "0.25x", value: 0.25 },
      { text: "0.5x", value: 0.5 },
      { text: "1x", value: 1 },
      { text: "2x", value: 2 },
      { text: "4x", value: 4 }
    ]);
    const timeUnitOptions = [
      { text: "Hours", value: "hours" },
      { text: "Days", value: "days" },
      { text: "Weeks", value: "weeks" },
      { text: "Months", value: "months" },
      { text: "Years", value: "years" }
    ];
    const onTimeRangeModeChange = () => {
      if (timeRangeMode.value === "relative") {
        settings.value.relativeTime.enabled = true;
        applyRelativeTime();
      } else {
        settings.value.relativeTime.enabled = false;
      }
      onSettingsChange();
    };
    const onRelativeTimeChange = () => {
      if (settings.value.relativeTime?.enabled) {
        applyRelativeTime();
      }
      onSettingsChange();
    };
    const calculateRelativeTime = (offset, unit) => {
      const now2 = /* @__PURE__ */ new Date();
      const start = new Date(now2);
      const safeOffset = Number(offset) || 24;
      const unitValue = typeof unit === "object" && unit !== null ? unit.value : unit;
      switch (unitValue) {
        case "hours":
          start.setHours(start.getHours() - safeOffset);
          break;
        case "days":
          start.setDate(start.getDate() - safeOffset);
          break;
        case "weeks":
          start.setDate(start.getDate() - safeOffset * 7);
          break;
        case "months":
          start.setMonth(start.getMonth() - safeOffset);
          break;
        case "years":
          start.setFullYear(start.getFullYear() - safeOffset);
          break;
        default:
          start.setHours(start.getHours() - safeOffset);
      }
      return { start, end: now2 };
    };
    const applyRelativeTime = () => {
      if (!settings.value.relativeTime?.enabled) return;
      const { start, end } = calculateRelativeTime(
        settings.value.relativeTime.offset,
        settings.value.relativeTime.unit
      );
      const frameDuration = end.getTime() - start.getTime();
      const rangeDuration = frameDuration * 0.2;
      const newRangeEnd = end;
      const newRangeStart = new Date(end.getTime() - rangeDuration);
      settings.value.timelineMin = start.toISOString();
      settings.value.timelineMax = end.toISOString();
      settings.value.rangeStart = newRangeStart.toISOString();
      settings.value.rangeEnd = newRangeEnd.toISOString();
      widgetSettings.value.timelineMin = settings.value.timelineMin;
      widgetSettings.value.timelineMax = settings.value.timelineMax;
      widgetSettings.value.rangeStart = settings.value.rangeStart;
      widgetSettings.value.rangeEnd = settings.value.rangeEnd;
      if (settings.value.rangeStartVariable && variableRepository.value) {
        const startVariable = variableRepository.value.getVariable(settings.value.rangeStartVariable);
        if (startVariable) {
          startVariable.value = settings.value.rangeStart;
        }
      }
      if (settings.value.rangeEndVariable && variableRepository.value) {
        const endVariable = variableRepository.value.getVariable(settings.value.rangeEndVariable);
        if (endVariable) {
          endVariable.value = settings.value.rangeEnd;
        }
      }
    };
    const onStartVariableToggle = () => {
      if (!useStartVariable.value) {
        settings.value.rangeStartVariable = void 0;
      }
      onSettingsChange();
    };
    const onEndVariableToggle = () => {
      if (!useEndVariable.value) {
        settings.value.rangeEndVariable = void 0;
      }
      onSettingsChange();
    };
    const onVariableChange = () => {
      if (settings.value.rangeStartVariable && variableRepository.value) {
        const startVar = variableRepository.value.getVariable(settings.value.rangeStartVariable);
        if (startVar) {
          rangeStartWrapper.value.setTo(startVar);
          settings.value.rangeStart = rangeStartWrapper.value.value;
        }
      }
      if (settings.value.rangeEndVariable && variableRepository.value) {
        const endVar = variableRepository.value.getVariable(settings.value.rangeEndVariable);
        if (endVar) {
          rangeEndWrapper.value.setTo(endVar);
          settings.value.rangeEnd = rangeEndWrapper.value.value;
        }
      }
      onSettingsChange();
    };
    const combineDateTime = (date, time) => {
      if (!date) return void 0;
      const combined = new Date(date);
      if (time) {
        combined.setHours(time.getHours());
        combined.setMinutes(time.getMinutes());
        combined.setSeconds(time.getSeconds());
      }
      return combined.toISOString();
    };
    const onTimelineMinDateChange = () => {
      settings.value.timelineMin = combineDateTime(timelineMinDate.value, timelineMinTime.value);
      onSettingsChange();
    };
    const onTimelineMinTimeChange = () => {
      settings.value.timelineMin = combineDateTime(timelineMinDate.value, timelineMinTime.value);
      onSettingsChange();
    };
    const onTimelineMaxDateChange = () => {
      settings.value.timelineMax = combineDateTime(timelineMaxDate.value, timelineMaxTime.value);
      onSettingsChange();
    };
    const onTimelineMaxTimeChange = () => {
      settings.value.timelineMax = combineDateTime(timelineMaxDate.value, timelineMaxTime.value);
      onSettingsChange();
    };
    const onSettingsChange = () => {
      let actualRangeStart = settings.value.rangeStart;
      let actualRangeEnd = settings.value.rangeEnd;
      if (useStartVariable.value && rangeStartWrapper.value.value) {
        actualRangeStart = rangeStartWrapper.value.value;
      }
      if (useEndVariable.value && rangeEndWrapper.value.value) {
        actualRangeEnd = rangeEndWrapper.value.value;
      }
      const updatedSettings = {
        ...settings.value,
        timelineMin: settings.value.timelineMin,
        timelineMax: useCurrentTimeAsMax.value ? (/* @__PURE__ */ new Date()).toISOString() : settings.value.timelineMax,
        rangeStart: actualRangeStart,
        rangeEnd: actualRangeEnd,
        relativeTime: settings.value.relativeTime,
        rangeStartVariable: settings.value.rangeStartVariable,
        rangeEndVariable: settings.value.rangeEndVariable,
        stepSize: settings.value.stepSize,
        playbackSpeed: settings.value.playbackSpeed,
        autoPlay: settings.value.autoPlay,
        rangeStripColor: settings.value.rangeStripColor,
        fixStartKnob: settings.value.fixStartKnob,
        showTimeInfo: settings.value.showTimeInfo,
        showControls: settings.value.showControls
      };
      Object.assign(widgetSettings.value, updatedSettings);
    };
    const onTimelineEndTypeChange = () => {
      if (useCurrentTimeAsMax.value) ;
      else {
        if (!settings.value.timelineMax) {
          settings.value.timelineMax = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3).toISOString();
        }
      }
      onSettingsChange();
    };
    const resetToDefaults = () => {
      const now2 = /* @__PURE__ */ new Date();
      const defaultTimelineStart2 = new Date(now2.getTime() - 30 * 24 * 60 * 60 * 1e3);
      const defaultTimelineEnd2 = new Date(now2.getTime() + 7 * 24 * 60 * 60 * 1e3);
      const defaultRangeStart2 = new Date(now2.getTime() - 24 * 60 * 60 * 1e3);
      const defaultRangeEnd2 = /* @__PURE__ */ new Date();
      settings.value = {
        timelineMin: defaultTimelineStart2.toISOString(),
        timelineMax: defaultTimelineEnd2.toISOString(),
        rangeStart: defaultRangeStart2.toISOString(),
        rangeEnd: defaultRangeEnd2.toISOString(),
        relativeTime: {
          enabled: false,
          offset: 24,
          unit: "hours"
        },
        stepSize: "hour",
        playbackSpeed: 1,
        autoPlay: false,
        rangeStripColor: "#d17600",
        fixStartKnob: false,
        showTimeInfo: true,
        showControls: true
      };
      timeRangeMode.value = "absolute";
      useCurrentTimeAsMax.value = false;
      onSettingsChange();
    };
    const injectedVariableRepository = inject(identifier);
    onMounted(() => {
      try {
        variableRepository.value = injectedVariableRepository ?? null;
        if (!variableRepository.value) throw new Error("VariableRepository not provided");
      } catch (error) {
        console.warn("VariableRepository not found in container:", error);
      }
      if (widgetSettings.value && widgetSettings.value.timelineMin) {
        Object.assign(settings.value, widgetSettings.value);
        useCurrentTimeAsMax.value = !widgetSettings.value.timelineMax;
        useStartVariable.value = !!widgetSettings.value.rangeStartVariable;
        useEndVariable.value = !!widgetSettings.value.rangeEndVariable;
        if (!settings.value.relativeTime) {
          settings.value.relativeTime = {
            enabled: false,
            offset: 24,
            unit: "hours"
          };
        }
        timeRangeMode.value = settings.value.relativeTime.enabled ? "relative" : "absolute";
        if (settings.value.timelineMin) {
          const minDate = new Date(settings.value.timelineMin);
          timelineMinDate.value = minDate;
          timelineMinTime.value = minDate;
        }
        if (settings.value.timelineMax) {
          const maxDate = new Date(settings.value.timelineMax);
          timelineMaxDate.value = maxDate;
          timelineMaxTime.value = maxDate;
        }
      } else {
        resetToDefaults();
      }
      onSettingsChange();
    });
    watch(() => widgetSettings.value, (newSettings) => {
      if (newSettings) {
        Object.assign(settings.value, newSettings);
        useCurrentTimeAsMax.value = !newSettings.timelineMax;
        if (newSettings.relativeTime) {
          timeRangeMode.value = newSettings.relativeTime.enabled ? "relative" : "absolute";
        }
      }
    }, { deep: true });
    return (_ctx, _cache) => {
      const _component_va_select = resolveComponent("va-select");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_date_input = resolveComponent("va-date-input");
      const _component_va_time_input = resolveComponent("va-time-input");
      const _component_va_checkbox = resolveComponent("va-checkbox");
      const _component_va_collapse = resolveComponent("va-collapse");
      const _component_va_color_input = resolveComponent("va-color-input");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_va_collapse, {
          modelValue: opened.value.timelineSection,
          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => opened.value.timelineSection = $event),
          icon: "timeline",
          header: t("Timeline Settings")
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1, [
              createElementVNode("div", _hoisted_2, [
                createVNode(_component_va_select, {
                  modelValue: timeRangeMode.value,
                  "onUpdate:modelValue": [
                    _cache[0] || (_cache[0] = ($event) => timeRangeMode.value = $event),
                    onTimeRangeModeChange
                  ],
                  label: t("Time Range Mode"),
                  options: timeRangeModeOptions,
                  "text-by": "label",
                  "value-by": "value"
                }, null, 8, ["modelValue", "label"])
              ]),
              timeRangeMode.value === "relative" && settings.value.relativeTime ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createElementVNode("label", null, toDisplayString(t("Relative Time Range")), 1),
                createElementVNode("div", _hoisted_4, [
                  createElementVNode("div", _hoisted_5, [
                    createVNode(_component_va_input, {
                      modelValue: settings.value.relativeTime.offset,
                      "onUpdate:modelValue": [
                        _cache[1] || (_cache[1] = ($event) => settings.value.relativeTime.offset = $event),
                        onRelativeTimeChange
                      ],
                      modelModifiers: { number: true },
                      label: t("Offset"),
                      type: "number",
                      min: 1,
                      max: 1e4,
                      class: "offset-input"
                    }, null, 8, ["modelValue", "label"]),
                    createVNode(_component_va_select, {
                      modelValue: settings.value.relativeTime.unit,
                      "onUpdate:modelValue": [
                        _cache[2] || (_cache[2] = ($event) => settings.value.relativeTime.unit = $event),
                        onRelativeTimeChange
                      ],
                      options: timeUnitOptions,
                      label: t("Unit"),
                      "text-by": "text",
                      "value-by": "value",
                      class: "unit-select"
                    }, null, 8, ["modelValue", "label"])
                  ]),
                  createElementVNode("div", _hoisted_6, toDisplayString(t("Now")) + " - " + toDisplayString(settings.value.relativeTime.offset) + " " + toDisplayString(t(settings.value.relativeTime.unit)) + " → " + toDisplayString(t("Now")), 1)
                ])
              ])) : createCommentVNode("", true),
              timeRangeMode.value === "absolute" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createElementVNode("div", _hoisted_7, [
                  createElementVNode("label", null, toDisplayString(t("Timeline Start")), 1),
                  createElementVNode("div", _hoisted_8, [
                    createVNode(_component_va_date_input, {
                      modelValue: timelineMinDate.value,
                      "onUpdate:modelValue": [
                        _cache[3] || (_cache[3] = ($event) => timelineMinDate.value = $event),
                        onTimelineMinDateChange
                      ],
                      label: t("Date")
                    }, null, 8, ["modelValue", "label"]),
                    createVNode(_component_va_time_input, {
                      modelValue: timelineMinTime.value,
                      "onUpdate:modelValue": [
                        _cache[4] || (_cache[4] = ($event) => timelineMinTime.value = $event),
                        onTimelineMinTimeChange
                      ],
                      label: t("Time")
                    }, null, 8, ["modelValue", "label"])
                  ])
                ]),
                createElementVNode("div", _hoisted_9, [
                  createElementVNode("label", null, toDisplayString(t("Timeline End")), 1),
                  createVNode(_component_va_checkbox, {
                    modelValue: useCurrentTimeAsMax.value,
                    "onUpdate:modelValue": [
                      _cache[5] || (_cache[5] = ($event) => useCurrentTimeAsMax.value = $event),
                      onTimelineEndTypeChange
                    ],
                    label: t("Use current time")
                  }, null, 8, ["modelValue", "label"]),
                  !useCurrentTimeAsMax.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
                    createVNode(_component_va_date_input, {
                      modelValue: timelineMaxDate.value,
                      "onUpdate:modelValue": [
                        _cache[6] || (_cache[6] = ($event) => timelineMaxDate.value = $event),
                        onTimelineMaxDateChange
                      ],
                      label: t("Date")
                    }, null, 8, ["modelValue", "label"]),
                    createVNode(_component_va_time_input, {
                      modelValue: timelineMaxTime.value,
                      "onUpdate:modelValue": [
                        _cache[7] || (_cache[7] = ($event) => timelineMaxTime.value = $event),
                        onTimelineMaxTimeChange
                      ],
                      label: t("Time")
                    }, null, 8, ["modelValue", "label"])
                  ])) : createCommentVNode("", true)
                ])
              ], 64)) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_11, [
                createElementVNode("label", null, toDisplayString(t("Variable Binding")), 1),
                createElementVNode("div", _hoisted_12, [
                  createVNode(_component_va_checkbox, {
                    modelValue: useStartVariable.value,
                    "onUpdate:modelValue": [
                      _cache[8] || (_cache[8] = ($event) => useStartVariable.value = $event),
                      onStartVariableToggle
                    ],
                    label: t("Start time from variable")
                  }, null, 8, ["modelValue", "label"]),
                  useStartVariable.value ? (openBlock(), createBlock(_component_va_select, {
                    key: 0,
                    modelValue: settings.value.rangeStartVariable,
                    "onUpdate:modelValue": [
                      _cache[9] || (_cache[9] = ($event) => settings.value.rangeStartVariable = $event),
                      onVariableChange
                    ],
                    options: availableVariables.value,
                    label: t("Start variable"),
                    "text-by": "name",
                    "value-by": "name"
                  }, null, 8, ["modelValue", "options", "label"])) : createCommentVNode("", true)
                ]),
                createElementVNode("div", _hoisted_13, [
                  createVNode(_component_va_checkbox, {
                    modelValue: useEndVariable.value,
                    "onUpdate:modelValue": [
                      _cache[10] || (_cache[10] = ($event) => useEndVariable.value = $event),
                      onEndVariableToggle
                    ],
                    label: t("End time from variable")
                  }, null, 8, ["modelValue", "label"]),
                  useEndVariable.value ? (openBlock(), createBlock(_component_va_select, {
                    key: 0,
                    modelValue: settings.value.rangeEndVariable,
                    "onUpdate:modelValue": [
                      _cache[11] || (_cache[11] = ($event) => settings.value.rangeEndVariable = $event),
                      onVariableChange
                    ],
                    options: availableVariables.value,
                    label: t("End variable"),
                    "text-by": "name",
                    "value-by": "name"
                  }, null, 8, ["modelValue", "options", "label"])) : createCommentVNode("", true)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "header"]),
        createVNode(_component_va_collapse, {
          modelValue: opened.value.playbackSection,
          "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => opened.value.playbackSection = $event),
          icon: "play_circle",
          header: t("Playback")
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_14, [
              createElementVNode("div", _hoisted_15, [
                createVNode(_component_va_select, {
                  modelValue: settings.value.stepSize,
                  "onUpdate:modelValue": [
                    _cache[13] || (_cache[13] = ($event) => settings.value.stepSize = $event),
                    onSettingsChange
                  ],
                  label: t("Step Size"),
                  options: stepSizeOptions.value,
                  "value-by": "value"
                }, null, 8, ["modelValue", "label", "options"])
              ]),
              createElementVNode("div", _hoisted_16, [
                createVNode(_component_va_select, {
                  modelValue: settings.value.playbackSpeed,
                  "onUpdate:modelValue": [
                    _cache[14] || (_cache[14] = ($event) => settings.value.playbackSpeed = $event),
                    onSettingsChange
                  ],
                  label: t("Playback Speed"),
                  options: speedOptions.value
                }, null, 8, ["modelValue", "label", "options"])
              ]),
              createElementVNode("div", _hoisted_17, [
                createVNode(_component_va_checkbox, {
                  modelValue: settings.value.autoPlay,
                  "onUpdate:modelValue": [
                    _cache[15] || (_cache[15] = ($event) => settings.value.autoPlay = $event),
                    onSettingsChange
                  ],
                  label: t("Auto-play on load")
                }, null, 8, ["modelValue", "label"])
              ]),
              createElementVNode("div", _hoisted_18, [
                createVNode(_component_va_checkbox, {
                  modelValue: settings.value.fixStartKnob,
                  "onUpdate:modelValue": [
                    _cache[16] || (_cache[16] = ($event) => settings.value.fixStartKnob = $event),
                    onSettingsChange
                  ],
                  label: t("Fix start knob at beginning")
                }, null, 8, ["modelValue", "label"])
              ]),
              createElementVNode("div", _hoisted_19, [
                createVNode(_component_va_checkbox, {
                  modelValue: settings.value.showControls,
                  "onUpdate:modelValue": [
                    _cache[17] || (_cache[17] = ($event) => settings.value.showControls = $event),
                    onSettingsChange
                  ],
                  label: t("Show playback controls")
                }, null, 8, ["modelValue", "label"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "header"]),
        createVNode(_component_va_collapse, {
          modelValue: opened.value.stylingSection,
          "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => opened.value.stylingSection = $event),
          icon: "palette",
          header: t("Styling")
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_20, [
              createElementVNode("div", _hoisted_21, [
                createVNode(_component_va_color_input, {
                  modelValue: settings.value.rangeStripColor,
                  "onUpdate:modelValue": [
                    _cache[19] || (_cache[19] = ($event) => settings.value.rangeStripColor = $event),
                    onSettingsChange
                  ],
                  label: t("Range Strip Color")
                }, null, 8, ["modelValue", "label"])
              ]),
              createElementVNode("div", _hoisted_22, [
                createVNode(_component_va_checkbox, {
                  modelValue: settings.value.showTimeInfo,
                  "onUpdate:modelValue": [
                    _cache[20] || (_cache[20] = ($event) => settings.value.showTimeInfo = $event),
                    onSettingsChange
                  ],
                  label: t("Show time information panel")
                }, null, 8, ["modelValue", "label"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "header"])
      ], 64);
    };
  }
});
const TimelineWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d65dd0e0"]]);
const icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3crect%20x='18'%20y='56'%20width='84'%20height='8'%20rx='4'%20fill='%23606060'/%3e%3ccircle%20cx='30'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='60'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3ccircle%20cx='90'%20cy='60'%20r='10'%20fill='%23606060'/%3e%3crect%20x='25'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='55'%20y='32'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3crect%20x='85'%20y='72'%20width='10'%20height='16'%20rx='2'%20fill='%23606060'/%3e%3c/svg%3e";
const TimelineWidgetEvents = [
  { name: "Timeline Clicked", type: "click", description: "Triggered when the timeline widget is clicked", payloadType: Payload },
  { name: "Timeline Right Clicked", type: "right_click", description: "Triggered when the timeline widget is right-clicked", payloadType: Payload }
];
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
const WIDGET_SERVICE = "daanse.widget";
const WIDGET_TYPE = "TimelineWidget";
let TimelineWidgetProvider = class {
  constructor(events, actions) {
    this.events = events;
    this.actions = actions;
  }
  type = WIDGET_TYPE;
  component = TimelineWidget;
  settingsComponent = TimelineWidgetSettings;
  supportedDSTypes = [];
  icon = icon;
  name = "Timeline";
  register() {
    this.events.registerWidget(WIDGET_TYPE, TimelineWidgetEvents);
    this.actions.registerWidgetType(WIDGET_TYPE, TimelineWidgetInterface, "widget");
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
    this.actions.unregisterWidgetType(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], TimelineWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], TimelineWidgetProvider.prototype, "unregister", 1);
TimelineWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject$1(EVENT_REGISTRY_ID)),
  __decorateParam(1, inject$1(EVENT_ACTIONS_REGISTRY_ID))
], TimelineWidgetProvider);
export {
  TimelineWidget,
  TimelineWidgetProvider,
  TimelineWidgetSettings
};
