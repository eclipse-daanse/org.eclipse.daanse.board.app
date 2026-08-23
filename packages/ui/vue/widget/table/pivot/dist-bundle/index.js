(function(){var i="ui.vue.widget.table.pivot",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".text-container[data-v-e26395f1]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.component[data-v-e26395f1]{overflow:hidden;padding:16px}.settings-container[data-v-fa6a53a1]{padding:16px}.settings-block[data-v-fa6a53a1]{display:flex;flex-direction:column;gap:12px;margin-bottom:16px}.settings-block[data-v-fa6a53a1]:last-child{margin-bottom:0}.settings-block h3[data-v-fa6a53a1]{margin:0 0 8px;font-size:14px;font-weight:600;color:var(--va-primary)}.hint-text[data-v-fa6a53a1]{margin:0 0 16px;color:var(--va-text-secondary);font-size:13px}.level-header[data-v-fa6a53a1]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-weight:600}.level-card[data-v-fa6a53a1]{border:1px solid #ddd;padding:16px;border-radius:4px;margin-bottom:12px;background:#fafafa;display:flex;flex-direction:column;gap:12px}.level-card-header[data-v-fa6a53a1]{display:flex;justify-content:space-between;align-items:center}.empty-state[data-v-fa6a53a1]{padding:20px;text-align:center;color:var(--va-text-secondary);background:#f5f5f5;border-radius:4px}.color-scale-row[data-v-fa6a53a1]{display:flex;gap:12px}.color-scale-row[data-v-fa6a53a1]>*{flex:1}\n";})();
import { EVENT_REGISTRY_ID as ye, EVENT_ACTIONS_REGISTRY_ID as he } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Ve, deactivate as _e, component as xe, inject as se } from "@eclipse-daanse/tsm";
import { defineComponent as ve, mergeModels as Te, toRefs as Se, inject as We, useModel as ce, onMounted as ke, computed as P, ref as ge, watch as pe, createElementBlock as U, openBlock as x, withModifiers as Pe, createElementVNode as v, createBlock as K, createCommentVNode as F, unref as k, resolveComponent as D, Fragment as A, createVNode as n, withCtx as b, createTextVNode as O, renderList as re, toDisplayString as ie } from "vue";
import { VariableWrapper as S, useVariableRepository as Le, useDatasourceRepository as Ue } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { PivotTable as Ie } from "org.eclipse.daanse.board.app.ui.vue.common.xmla";
import { Reference as y, Documentation as de, Attribute as W, ModelClass as z } from "org.eclipse.daanse.board.app.lib.annotations";
import { VariableInput as L } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { Payload as G, WidgetAction as He, WidgetActionInterface as Fe } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID as Me } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Re } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ne = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2025.5C37.5%2023.8431%2036.1569%2022.5%2034.5%2022.5H25.5C23.8431%2022.5%2022.5%2023.8431%2022.5%2025.5V34.5C22.5%2036.1569%2023.8431%2037.5%2025.5%2037.5H34.5C36.1569%2037.5%2037.5%2036.1569%2037.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M57.4399%2077.5607C58.3849%2076.6157%2060.0006%2077.285%2060.0006%2078.6213V84C60.0006%2084.8284%2060.6722%2085.5%2061.5006%2085.5H84C84.8284%2085.5%2085.5%2084.8284%2085.5%2084V61.5C85.5%2060.6716%2084.8284%2060%2084%2060H78.6214C77.285%2060%2076.6158%2058.3843%2077.5608%2057.4393L88.9399%2046.0606C89.5257%2045.4749%2090.4755%2045.4749%2091.0612%2046.0607L102.439%2057.4394C103.384%2058.3843%20102.715%2060%20101.379%2060H96C95.1716%2060%2094.5%2060.6716%2094.5%2061.5V93C94.5%2093.8284%2093.8284%2094.5%2093%2094.5H61.5006C60.6722%2094.5%2060.0006%2095.1716%2060.0006%2096V101.379C60.0006%20102.715%2058.3849%20103.384%2057.44%20102.44L46.0607%2091.0613C45.4749%2090.4755%2045.4749%2089.5257%2046.0607%2088.9399L57.4399%2077.5607Z'%20fill='%23606060'/%3e%3c/svg%3e";
var Ee = Object.defineProperty, De = Object.getOwnPropertyDescriptor, h = (s, l, r, t) => {
  for (var a = t > 1 ? void 0 : t ? De(l, r) : l, p = s.length - 1, m; p >= 0; p--)
    (m = s[p]) && (a = (t ? m(l, r, a) : m(a)) || a);
  return t && a && Ee(l, r, a), a;
};
let f = class {
  rows = [];
  columns = [];
  cells = [];
  tableState;
  headerBackgroundColor = new S();
  headerTextColor = new S();
  cellBackgroundColor = new S();
  cellTextColor = new S();
  borderColor = new S();
  defaultColumnWidth = new S();
  defaultRowHeight = new S();
  fontSize = new S();
  headerFontWeight = new S();
  cellTextAlign = "left";
  showRowsProperties = !1;
  showColumnsProperties = !1;
  showSingleMeasureHeader = !1;
  rowLevelStyles = [];
  columnLevelStyles = [];
  conditionalFormats = [];
};
h([
  y("JavaObject")
], f.prototype, "rows", 2);
h([
  y("JavaObject")
], f.prototype, "columns", 2);
h([
  y("JavaObject")
], f.prototype, "cells", 2);
h([
  de(""),
  W()
], f.prototype, "tableState", 2);
h([
  y("VariableWrapper")
], f.prototype, "headerBackgroundColor", 2);
h([
  y("VariableWrapper")
], f.prototype, "headerTextColor", 2);
h([
  y("VariableWrapper")
], f.prototype, "cellBackgroundColor", 2);
h([
  y("VariableWrapper")
], f.prototype, "cellTextColor", 2);
h([
  y("VariableWrapper")
], f.prototype, "borderColor", 2);
h([
  y("VariableWrapper")
], f.prototype, "defaultColumnWidth", 2);
h([
  y("VariableWrapper")
], f.prototype, "defaultRowHeight", 2);
h([
  y("VariableWrapper")
], f.prototype, "fontSize", 2);
h([
  y("VariableWrapper")
], f.prototype, "headerFontWeight", 2);
h([
  W()
], f.prototype, "cellTextAlign", 2);
h([
  W()
], f.prototype, "showRowsProperties", 2);
h([
  W()
], f.prototype, "showColumnsProperties", 2);
h([
  W()
], f.prototype, "showSingleMeasureHeader", 2);
h([
  y("LevelStyle")
], f.prototype, "rowLevelStyles", 2);
h([
  y("LevelStyle")
], f.prototype, "columnLevelStyles", 2);
h([
  y("ConditionalFormat")
], f.prototype, "conditionalFormats", 2);
f = h([
  z({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//PivotTable" })
], f);
const Oe = { class: "component" }, Be = /* @__PURE__ */ ve({
  __name: "PivotTableWidget",
  props: /* @__PURE__ */ Te({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(s) {
    const l = s, { datasourceId: r, id: t } = Se(l), a = We(Re.TINY_EMITTER), p = () => {
      t?.value && a.emit("widget:PivotTableWidget:click", {
        type: "widget:PivotTableWidget:click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, m = () => {
      t?.value && a.emit("widget:PivotTableWidget:right_click", {
        type: "widget:PivotTableWidget:right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, Q = (d) => {
      t?.value && a.emit("widget:PivotTableWidget:row_clicked", {
        type: "widget:PivotTableWidget:row_clicked",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), uniqueName: d }
      });
    }, X = (d) => {
      t?.value && a.emit("widget:PivotTableWidget:row_right_clicked", {
        type: "widget:PivotTableWidget:row_right_clicked",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), uniqueName: d }
      });
    }, ee = (d) => {
      t?.value && a.emit("widget:PivotTableWidget:column_clicked", {
        type: "widget:PivotTableWidget:column_clicked",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), uniqueName: d }
      });
    }, le = (d) => {
      t?.value && a.emit("widget:PivotTableWidget:column_right_clicked", {
        type: "widget:PivotTableWidget:column_right_clicked",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), uniqueName: d }
      });
    }, oe = (d) => {
      t?.value && a.emit("widget:PivotTableWidget:cell_clicked", {
        type: "widget:PivotTableWidget:cell_clicked",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: d.rowId, colId: d.colId }
      });
    }, te = (d) => {
      t?.value && a.emit("widget:PivotTableWidget:cell_right_clicked", {
        type: "widget:PivotTableWidget:cell_right_clicked",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: d.rowId, colId: d.colId }
      });
    }, q = (d) => {
      t?.value && a.emit("widget:PivotTableWidget:row_expanded", {
        type: "widget:PivotTableWidget:row_expanded",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), uniqueName: d }
      });
    }, Z = (d) => {
      t?.value && a.emit("widget:PivotTableWidget:row_collapsed", {
        type: "widget:PivotTableWidget:row_collapsed",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), uniqueName: d }
      });
    }, ae = (d) => {
      t?.value && a.emit("widget:PivotTableWidget:column_expanded", {
        type: "widget:PivotTableWidget:column_expanded",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), uniqueName: d }
      });
    }, ne = (d) => {
      t?.value && a.emit("widget:PivotTableWidget:column_collapsed", {
        type: "widget:PivotTableWidget:column_collapsed",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), uniqueName: d }
      });
    }, u = ce(s, "configv"), { wrapParameters: o } = Le(), C = new f();
    ke(() => {
      u.value && Object.assign(u.value, { ...C, ...u.value });
    });
    const V = o({
      headerBackgroundColor: P(() => u.value?.headerBackgroundColor?.value ?? C.headerBackgroundColor),
      headerTextColor: P(() => u.value?.headerTextColor?.value ?? C.headerTextColor),
      cellBackgroundColor: P(() => u.value?.cellBackgroundColor?.value ?? C.cellBackgroundColor),
      cellTextColor: P(() => u.value?.cellTextColor?.value ?? C.cellTextColor),
      borderColor: P(() => u.value?.borderColor?.value ?? C.borderColor),
      defaultColumnWidth: P(() => u.value?.defaultColumnWidth?.value ?? C.defaultColumnWidth),
      defaultRowHeight: P(() => u.value?.defaultRowHeight?.value ?? C.defaultRowHeight),
      fontSize: P(() => u.value?.fontSize?.value ?? C.fontSize),
      headerFontWeight: P(() => u.value?.headerFontWeight?.value ?? C.headerFontWeight),
      jsonArrays: P(() => {
        const d = {
          rowLevelStyles: u.value?.rowLevelStyles?.map((c) => ({
            ...c,
            backgroundColor: c.backgroundColor?.value ?? c.backgroundColor,
            textColor: c.textColor?.value ?? c.textColor
          })),
          columnLevelStyles: u.value?.columnLevelStyles?.map((c) => ({
            ...c,
            backgroundColor: c.backgroundColor?.value ?? c.backgroundColor,
            textColor: c.textColor?.value ?? c.textColor
          })),
          conditionalFormats: u.value?.conditionalFormats?.map((c) => ({
            ...c,
            id: c.id ?? "",
            priority: c.priority ?? 0,
            backgroundColor: c.backgroundColor?.value ?? c.backgroundColor,
            textColor: c.textColor?.value ?? c.textColor,
            minColor: c.minColor?.value ?? c.minColor,
            maxColor: c.maxColor?.value ?? c.maxColor
          }))
        };
        return JSON.stringify(d);
      })
    }), _ = P(() => {
      try {
        const d = V.jsonArrays.value, c = JSON.parse(d || "{}");
        return {
          rowLevelStyles: c.rowLevelStyles || C.rowLevelStyles,
          columnLevelStyles: c.columnLevelStyles || C.columnLevelStyles,
          conditionalFormats: c.conditionalFormats || C.conditionalFormats
        };
      } catch {
        return {
          rowLevelStyles: C.rowLevelStyles,
          columnLevelStyles: C.columnLevelStyles,
          conditionalFormats: C.conditionalFormats
        };
      }
    }), w = P(() => ({
      headerBackgroundColor: V.headerBackgroundColor.value,
      headerTextColor: V.headerTextColor.value,
      cellBackgroundColor: V.cellBackgroundColor.value,
      cellTextColor: V.cellTextColor.value,
      borderColor: V.borderColor.value,
      defaultColumnWidth: V.defaultColumnWidth.value,
      defaultRowHeight: V.defaultRowHeight.value,
      fontSize: V.fontSize.value,
      headerFontWeight: V.headerFontWeight.value,
      cellTextAlign: u.value?.cellTextAlign || C.cellTextAlign,
      rowLevelStyles: _.value.rowLevelStyles,
      columnLevelStyles: _.value.columnLevelStyles,
      conditionalFormats: _.value.conditionalFormats
    })), $ = P(() => ({
      showRowsProperties: u.value?.showRowsProperties || C.showRowsProperties,
      showColumnsProperties: u.value?.showColumnsProperties || C.showColumnsProperties,
      showSingleMeasureHeader: u.value?.showSingleMeasureHeader ?? C.showSingleMeasureHeader
    })), T = ge(null), { callEvent: e, update: g } = Ue(r, "PivotTable", T, [], $);
    pe(r, (d, c) => {
      g(d, c);
    }), pe(() => $.value, () => {
      g();
    });
    const i = (d) => {
      e("expand", d, !0), d.area === "rows" ? q(d.value?.UName || d.value?.UNAME) : d.area === "columns" && ae(d.value?.UName || d.value?.UNAME);
    }, H = (d) => {
      e("collapse", d, !0), d.area === "rows" ? Z(d.value?.UName || d.value?.UNAME) : d.area === "columns" && ne(d.value?.UName || d.value?.UNAME);
    };
    return (d, c) => (x(), U("div", {
      class: "text-container",
      onClick: p,
      onContextmenu: Pe(m, ["prevent"])
    }, [
      v("div", Oe, [
        T.value ? (x(), K(k(Ie), {
          "model-value": T.value,
          onOnExpand: i,
          onOnCollapse: H,
          onRow_clicked: Q,
          onRow_right_clicked: X,
          onColumn_clicked: ee,
          onColumn_right_clicked: le,
          onCell_clicked: oe,
          onCell_right_clicked: te,
          key: JSON.stringify(T.value).length,
          rowsExpandedMembers: T.value.tableState.rowsExpandedMembers,
          columnsExpandedMembers: T.value.tableState.columnsExpandedMembers,
          propertiesRows: T.value.propertiesRows,
          propertiesCols: T.value.propertiesCols,
          headerBackgroundColor: w.value.headerBackgroundColor,
          headerTextColor: w.value.headerTextColor,
          cellBackgroundColor: w.value.cellBackgroundColor,
          cellTextColor: w.value.cellTextColor,
          borderColor: w.value.borderColor,
          defaultColumnWidth: w.value.defaultColumnWidth,
          defaultRowHeight: w.value.defaultRowHeight,
          fontSize: w.value.fontSize,
          headerFontWeight: w.value.headerFontWeight,
          cellTextAlign: w.value.cellTextAlign,
          rowLevelStyles: w.value.rowLevelStyles,
          columnLevelStyles: w.value.columnLevelStyles,
          conditionalFormats: w.value.conditionalFormats
        }, null, 8, ["model-value", "rowsExpandedMembers", "columnsExpandedMembers", "propertiesRows", "propertiesCols", "headerBackgroundColor", "headerTextColor", "cellBackgroundColor", "cellTextColor", "borderColor", "defaultColumnWidth", "defaultRowHeight", "fontSize", "headerFontWeight", "cellTextAlign", "rowLevelStyles", "columnLevelStyles", "conditionalFormats"])) : F("", !0)
      ])
    ], 32));
  }
}), we = (s, l) => {
  const r = s.__vccOpts || s;
  for (const [t, a] of l)
    r[t] = a;
  return r;
}, ze = /* @__PURE__ */ we(Be, [["__scopeId", "data-v-e26395f1"]]);
var $e = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, j = (s, l, r, t) => {
  for (var a = t > 1 ? void 0 : t ? Ae(l, r) : l, p = s.length - 1, m; p >= 0; p--)
    (m = s[p]) && (a = (t ? m(l, r, a) : m(a)) || a);
  return t && a && $e(l, r, a), a;
};
let M = class {
  level;
  backgroundColor = new S();
  textColor = new S();
  fontWeight = 600;
};
j([
  W()
], M.prototype, "level", 2);
j([
  y("VariableWrapper")
], M.prototype, "backgroundColor", 2);
j([
  y("VariableWrapper")
], M.prototype, "textColor", 2);
j([
  W()
], M.prototype, "fontWeight", 2);
M = j([
  z({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//LevelStyle" })
], M);
var je = Object.defineProperty, qe = Object.getOwnPropertyDescriptor, R = (s, l, r, t) => {
  for (var a = t > 1 ? void 0 : t ? qe(l, r) : l, p = s.length - 1, m; p >= 0; p--)
    (m = s[p]) && (a = (t ? m(l, r, a) : m(a)) || a);
  return t && a && je(l, r, a), a;
};
let I = class {
  id;
  conditionType = "greaterThan";
  priority;
  value1 = "0";
  value2 = "100";
  backgroundColor = new S();
  textColor = new S();
  minColor = new S();
  maxColor = new S();
  fontWeight = 400;
};
R([
  W()
], I.prototype, "id", 2);
R([
  W()
], I.prototype, "conditionType", 2);
R([
  W()
], I.prototype, "priority", 2);
R([
  W()
], I.prototype, "value1", 2);
R([
  W()
], I.prototype, "value2", 2);
R([
  y("VariableWrapper")
], I.prototype, "backgroundColor", 2);
R([
  y("VariableWrapper")
], I.prototype, "textColor", 2);
R([
  y("VariableWrapper")
], I.prototype, "minColor", 2);
R([
  y("VariableWrapper")
], I.prototype, "maxColor", 2);
R([
  W()
], I.prototype, "fontWeight", 2);
I = R([
  z({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//ConditionalFormat" })
], I);
const Ze = { class: "settings-container" }, Ke = { class: "settings-container" }, Ge = { class: "settings-block" }, Je = { class: "settings-block" }, Ye = { class: "settings-block" }, Qe = { class: "settings-container" }, Xe = { class: "settings-block" }, el = { class: "settings-container" }, ll = { class: "settings-block" }, ol = { class: "settings-container" }, tl = { class: "level-header" }, al = { class: "level-card-header" }, nl = {
  key: 0,
  class: "empty-state"
}, rl = { class: "settings-container" }, il = { class: "level-header" }, dl = { class: "level-card-header" }, ul = {
  key: 0,
  class: "empty-state"
}, sl = { class: "settings-container" }, pl = { class: "level-header" }, ml = { class: "level-card-header" }, vl = {
  key: 3,
  class: "color-scale-row"
}, cl = {
  key: 0,
  class: "empty-state"
}, gl = /* @__PURE__ */ ve({
  __name: "PivotTableWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(s) {
    const l = ce(s, "modelValue"), r = ge({
      colorsSection: !0,
      dimensionsSection: !1,
      textSection: !1,
      rowLevelsSection: !1,
      columnLevelsSection: !1,
      conditionalFormatSection: !1,
      dataSettings: !1
    }), t = [
      { value: "left", text: "Links" },
      { value: "center", text: "Zentriert" },
      { value: "right", text: "Rechts" }
    ], a = () => {
      l.value.rowLevelStyles || (l.value.rowLevelStyles = []);
      const u = l.value.rowLevelStyles.length, o = new M();
      o.level = u, l.value.rowLevelStyles.push(o);
    }, p = (u) => {
      l.value.rowLevelStyles?.splice(u, 1);
    }, m = () => {
      l.value.columnLevelStyles || (l.value.columnLevelStyles = []);
      const u = l.value.columnLevelStyles.length, o = new M();
      o.level = u, l.value.columnLevelStyles.push(o);
    }, Q = (u) => {
      l.value.columnLevelStyles?.splice(u, 1);
    }, X = [
      { value: "greaterThan", text: "Größer als" },
      { value: "lessThan", text: "Kleiner als" },
      { value: "equals", text: "Gleich" },
      { value: "notEquals", text: "Ungleich" },
      { value: "between", text: "Zwischen" },
      { value: "contains", text: "Enthält (Text)" },
      { value: "colorScale", text: "Farbskala (Min→Max)" },
      { value: "topN", text: "Top N Werte" },
      { value: "bottomN", text: "Bottom N Werte" }
    ], ee = () => Math.random().toString(36).substring(2, 9), le = () => {
      l.value.conditionalFormats || (l.value.conditionalFormats = []);
      const u = l.value.conditionalFormats.length, o = new I();
      o.id = ee(), o.priority = u, l.value.conditionalFormats.push(o);
    }, oe = (u) => {
      l.value.conditionalFormats?.splice(u, 1);
    }, te = (u) => u === "between", q = (u) => u === "colorScale", Z = (u) => u === "contains", ae = (u) => u === "topN" || u === "bottomN", ne = (u) => u !== "colorScale";
    return (u, o) => {
      const C = D("VaCheckbox"), V = D("va-collapse"), _ = D("va-color-input"), w = D("va-input"), $ = D("va-select"), T = D("va-button");
      return x(), U(A, null, [
        n(V, {
          modelValue: r.value.dataSettings,
          "onUpdate:modelValue": o[3] || (o[3] = (e) => r.value.dataSettings = e),
          header: "Data settings",
          icon: "palette"
        }, {
          default: b(() => [
            v("div", Ze, [
              n(C, {
                modelValue: l.value.showRowsProperties,
                "onUpdate:modelValue": o[0] || (o[0] = (e) => l.value.showRowsProperties = e),
                label: "Show rows properties",
                style: { margin: "0.5rem 0" }
              }, null, 8, ["modelValue"]),
              n(C, {
                modelValue: l.value.showColumnsProperties,
                "onUpdate:modelValue": o[1] || (o[1] = (e) => l.value.showColumnsProperties = e),
                label: "Show columns properties",
                style: { margin: "0.5rem 0" }
              }, null, 8, ["modelValue"]),
              n(C, {
                modelValue: l.value.showSingleMeasureHeader,
                "onUpdate:modelValue": o[2] || (o[2] = (e) => l.value.showSingleMeasureHeader = e),
                label: "Show single measure header",
                style: { margin: "0.5rem 0" }
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        n(V, {
          modelValue: r.value.colorsSection,
          "onUpdate:modelValue": o[9] || (o[9] = (e) => r.value.colorsSection = e),
          header: "Farben",
          icon: "palette"
        }, {
          default: b(() => [
            v("div", Ke, [
              v("div", Ge, [
                o[20] || (o[20] = v("h3", null, "Header", -1)),
                n(k(L), {
                  modelValue: l.value.headerBackgroundColor,
                  "onUpdate:modelValue": o[4] || (o[4] = (e) => l.value.headerBackgroundColor = e),
                  label: "Header Hintergrund"
                }, {
                  default: b(({ value: e, change: g }) => [
                    n(_, {
                      label: "Header Hintergrund",
                      "model-value": e,
                      onInput: g
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                n(k(L), {
                  modelValue: l.value.headerTextColor,
                  "onUpdate:modelValue": o[5] || (o[5] = (e) => l.value.headerTextColor = e),
                  label: "Header Textfarbe"
                }, {
                  default: b(({ value: e, change: g }) => [
                    n(_, {
                      label: "Header Textfarbe",
                      "model-value": e,
                      onInput: g
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              v("div", Je, [
                o[21] || (o[21] = v("h3", null, "Zellen", -1)),
                n(k(L), {
                  modelValue: l.value.cellBackgroundColor,
                  "onUpdate:modelValue": o[6] || (o[6] = (e) => l.value.cellBackgroundColor = e),
                  label: "Zellen Hintergrund"
                }, {
                  default: b(({ value: e, change: g }) => [
                    n(_, {
                      label: "Zellen Hintergrund",
                      "model-value": e,
                      onInput: g
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                n(k(L), {
                  modelValue: l.value.cellTextColor,
                  "onUpdate:modelValue": o[7] || (o[7] = (e) => l.value.cellTextColor = e),
                  label: "Zellen Textfarbe"
                }, {
                  default: b(({ value: e, change: g }) => [
                    n(_, {
                      label: "Zellen Textfarbe",
                      "model-value": e,
                      onInput: g
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              v("div", Ye, [
                o[22] || (o[22] = v("h3", null, "Rahmen", -1)),
                n(k(L), {
                  modelValue: l.value.borderColor,
                  "onUpdate:modelValue": o[8] || (o[8] = (e) => l.value.borderColor = e),
                  label: "Rahmenfarbe"
                }, {
                  default: b(({ value: e, change: g }) => [
                    n(_, {
                      label: "Rahmenfarbe",
                      "model-value": e,
                      onInput: g
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        n(V, {
          modelValue: r.value.dimensionsSection,
          "onUpdate:modelValue": o[12] || (o[12] = (e) => r.value.dimensionsSection = e),
          header: "Dimensionen",
          icon: "straighten"
        }, {
          default: b(() => [
            v("div", Qe, [
              v("div", Xe, [
                n(k(L), {
                  modelValue: l.value.defaultColumnWidth,
                  "onUpdate:modelValue": o[10] || (o[10] = (e) => l.value.defaultColumnWidth = e),
                  label: "Standard Spaltenbreite (px)"
                }, {
                  default: b(({ value: e, change: g }) => [
                    n(w, {
                      label: "Standard Spaltenbreite (px)",
                      "model-value": e,
                      "onUpdate:modelValue": g,
                      type: "number",
                      min: 50,
                      max: 500
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                n(k(L), {
                  modelValue: l.value.defaultRowHeight,
                  "onUpdate:modelValue": o[11] || (o[11] = (e) => l.value.defaultRowHeight = e),
                  label: "Standard Zeilenhöhe (px)"
                }, {
                  default: b(({ value: e, change: g }) => [
                    n(w, {
                      label: "Standard Zeilenhöhe (px)",
                      "model-value": e,
                      "onUpdate:modelValue": g,
                      type: "number",
                      min: 20,
                      max: 100
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        n(V, {
          modelValue: r.value.textSection,
          "onUpdate:modelValue": o[16] || (o[16] = (e) => r.value.textSection = e),
          header: "Text",
          icon: "text_fields"
        }, {
          default: b(() => [
            v("div", el, [
              v("div", ll, [
                n(k(L), {
                  modelValue: l.value.fontSize,
                  "onUpdate:modelValue": o[13] || (o[13] = (e) => l.value.fontSize = e),
                  label: "Schriftgröße (px)"
                }, {
                  default: b(({ value: e, change: g }) => [
                    n(w, {
                      label: "Schriftgröße (px)",
                      "model-value": e,
                      "onUpdate:modelValue": g,
                      type: "number",
                      min: 8,
                      max: 32
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                n(k(L), {
                  modelValue: l.value.headerFontWeight,
                  "onUpdate:modelValue": o[14] || (o[14] = (e) => l.value.headerFontWeight = e),
                  label: "Header Font-Weight"
                }, {
                  default: b(({ value: e, change: g }) => [
                    n(w, {
                      label: "Header Font-Weight",
                      "model-value": e,
                      "onUpdate:modelValue": g,
                      type: "number",
                      min: 100,
                      max: 900,
                      step: 100
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                n($, {
                  label: "Text-Ausrichtung (Zellen)",
                  modelValue: l.value.cellTextAlign,
                  "onUpdate:modelValue": o[15] || (o[15] = (e) => l.value.cellTextAlign = e),
                  options: t,
                  "value-by": "value"
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        n(V, {
          modelValue: r.value.rowLevelsSection,
          "onUpdate:modelValue": o[17] || (o[17] = (e) => r.value.rowLevelsSection = e),
          header: "Zeilen-Level Styles",
          icon: "table_rows"
        }, {
          default: b(() => [
            v("div", ol, [
              o[26] || (o[26] = v("p", { class: "hint-text" }, " Definiere individuelle Styles für verschiedene Hierarchie-Level in den Zeilen-Headern. ", -1)),
              v("div", tl, [
                o[24] || (o[24] = v("span", null, "Level-Konfiguration", -1)),
                n(T, {
                  size: "small",
                  onClick: a
                }, {
                  default: b(() => [...o[23] || (o[23] = [
                    O("Level hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (x(!0), U(A, null, re(l.value.rowLevelStyles, (e, g) => (x(), U("div", {
                key: `row_level_${g}`,
                class: "level-card"
              }, [
                v("div", al, [
                  v("strong", null, "Level " + ie(e.level), 1),
                  n(T, {
                    size: "small",
                    color: "danger",
                    onClick: (i) => p(g)
                  }, {
                    default: b(() => [...o[25] || (o[25] = [
                      O("Entfernen", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                n(w, {
                  label: "Level-Nummer",
                  modelValue: e.level,
                  "onUpdate:modelValue": (i) => e.level = i,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 0
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                n(k(L), {
                  modelValue: e.backgroundColor,
                  "onUpdate:modelValue": (i) => e.backgroundColor = i,
                  label: "Hintergrundfarbe"
                }, {
                  default: b(({ value: i, change: H }) => [
                    n(_, {
                      label: "Hintergrundfarbe",
                      "model-value": i,
                      onInput: H
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                n(k(L), {
                  modelValue: e.textColor,
                  "onUpdate:modelValue": (i) => e.textColor = i,
                  label: "Textfarbe"
                }, {
                  default: b(({ value: i, change: H }) => [
                    n(_, {
                      label: "Textfarbe",
                      "model-value": i,
                      onInput: H
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                n(w, {
                  label: "Font-Weight",
                  modelValue: e.fontWeight,
                  "onUpdate:modelValue": (i) => e.fontWeight = i,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 100,
                  max: 900,
                  step: 100
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]))), 128)),
              l.value.rowLevelStyles?.length ? F("", !0) : (x(), U("div", nl, ' Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen. '))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        n(V, {
          modelValue: r.value.columnLevelsSection,
          "onUpdate:modelValue": o[18] || (o[18] = (e) => r.value.columnLevelsSection = e),
          header: "Spalten-Level Styles",
          icon: "view_column"
        }, {
          default: b(() => [
            v("div", rl, [
              o[30] || (o[30] = v("p", { class: "hint-text" }, " Definiere individuelle Styles für verschiedene Hierarchie-Level in den Spalten-Headern. ", -1)),
              v("div", il, [
                o[28] || (o[28] = v("span", null, "Level-Konfiguration", -1)),
                n(T, {
                  size: "small",
                  onClick: m
                }, {
                  default: b(() => [...o[27] || (o[27] = [
                    O("Level hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (x(!0), U(A, null, re(l.value.columnLevelStyles, (e, g) => (x(), U("div", {
                key: `col_level_${g}`,
                class: "level-card"
              }, [
                v("div", dl, [
                  v("strong", null, "Level " + ie(e.level), 1),
                  n(T, {
                    size: "small",
                    color: "danger",
                    onClick: (i) => Q(g)
                  }, {
                    default: b(() => [...o[29] || (o[29] = [
                      O("Entfernen", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                n(w, {
                  label: "Level-Nummer",
                  modelValue: e.level,
                  "onUpdate:modelValue": (i) => e.level = i,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 0
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                n(k(L), {
                  modelValue: e.backgroundColor,
                  "onUpdate:modelValue": (i) => e.backgroundColor = i,
                  label: "Hintergrundfarbe"
                }, {
                  default: b(({ value: i, change: H }) => [
                    n(_, {
                      label: "Hintergrundfarbe",
                      "model-value": i,
                      onInput: H
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                n(k(L), {
                  modelValue: e.textColor,
                  "onUpdate:modelValue": (i) => e.textColor = i,
                  label: "Textfarbe"
                }, {
                  default: b(({ value: i, change: H }) => [
                    n(_, {
                      label: "Textfarbe",
                      "model-value": i,
                      onInput: H
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                n(w, {
                  label: "Font-Weight",
                  modelValue: e.fontWeight,
                  "onUpdate:modelValue": (i) => e.fontWeight = i,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 100,
                  max: 900,
                  step: 100
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]))), 128)),
              l.value.columnLevelStyles?.length ? F("", !0) : (x(), U("div", ul, ' Keine Level-Styles definiert. Klicke "Level hinzufügen" um anzufangen. '))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        n(V, {
          modelValue: r.value.conditionalFormatSection,
          "onUpdate:modelValue": o[19] || (o[19] = (e) => r.value.conditionalFormatSection = e),
          header: "Bedingte Formatierung",
          icon: "format_color_fill"
        }, {
          default: b(() => [
            v("div", sl, [
              o[34] || (o[34] = v("p", { class: "hint-text" }, " Definiere Regeln zur automatischen Formatierung von Zellen basierend auf ihren Werten. ", -1)),
              v("div", pl, [
                o[32] || (o[32] = v("span", null, "Formatierungsregeln", -1)),
                n(T, {
                  size: "small",
                  onClick: le
                }, {
                  default: b(() => [...o[31] || (o[31] = [
                    O("Regel hinzufügen", -1)
                  ])]),
                  _: 1
                })
              ]),
              (x(!0), U(A, null, re(l.value.conditionalFormats, (e, g) => (x(), U("div", {
                key: e.id,
                class: "level-card"
              }, [
                v("div", ml, [
                  v("strong", null, "Regel " + ie(g + 1), 1),
                  n(T, {
                    size: "small",
                    color: "danger",
                    onClick: (i) => oe(g)
                  }, {
                    default: b(() => [...o[33] || (o[33] = [
                      O("Entfernen", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                n($, {
                  label: "Bedingungstyp",
                  modelValue: e.conditionType,
                  "onUpdate:modelValue": (i) => e.conditionType = i,
                  options: X,
                  "value-by": "value"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                !Z(e.conditionType) && !q(e.conditionType) ? (x(), K(w, {
                  key: 0,
                  label: ae(e.conditionType) ? "Anzahl (N)" : "Wert",
                  modelValue: e.value1,
                  "onUpdate:modelValue": (i) => e.value1 = i,
                  modelModifiers: { number: !0 },
                  type: "number"
                }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])) : F("", !0),
                te(e.conditionType) ? (x(), K(w, {
                  key: 1,
                  label: "Bis Wert",
                  modelValue: e.value2,
                  "onUpdate:modelValue": (i) => e.value2 = i,
                  modelModifiers: { number: !0 },
                  type: "number"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                Z(e.conditionType) ? (x(), K(w, {
                  key: 2,
                  label: "Text",
                  modelValue: e.value1,
                  "onUpdate:modelValue": (i) => e.value1 = i
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                q(e.conditionType) ? (x(), U("div", vl, [
                  n(_, {
                    label: "Min-Farbe",
                    modelValue: e.minColor,
                    "onUpdate:modelValue": (i) => e.minColor = i
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  n(_, {
                    label: "Max-Farbe",
                    modelValue: e.maxColor,
                    "onUpdate:modelValue": (i) => e.maxColor = i
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])) : F("", !0),
                ne(e.conditionType) ? (x(), U(A, { key: 4 }, [
                  n(_, {
                    label: "Hintergrundfarbe",
                    modelValue: e.backgroundColor,
                    "onUpdate:modelValue": (i) => e.backgroundColor = i
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  n(_, {
                    label: "Textfarbe",
                    modelValue: e.textColor,
                    "onUpdate:modelValue": (i) => e.textColor = i
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  n(w, {
                    label: "Font-Weight",
                    modelValue: e.fontWeight,
                    "onUpdate:modelValue": (i) => e.fontWeight = i,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 100,
                    max: 900,
                    step: 100
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ], 64)) : F("", !0),
                n(w, {
                  label: "Priorität (niedriger = höher)",
                  modelValue: e.priority,
                  "onUpdate:modelValue": (i) => e.priority = i,
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: 0
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]))), 128)),
              l.value.conditionalFormats?.length ? F("", !0) : (x(), U("div", cl, ' Keine Formatierungsregeln definiert. Klicke "Regel hinzufügen" um anzufangen. '))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), wl = /* @__PURE__ */ we(gl, [["__scopeId", "data-v-fa6a53a1"]]);
var bl = Object.defineProperty, Cl = Object.getOwnPropertyDescriptor, be = (s, l, r, t) => {
  for (var a = t > 1 ? void 0 : t ? Cl(l, r) : l, p = s.length - 1, m; p >= 0; p--)
    (m = s[p]) && (a = (t ? m(l, r, a) : m(a)) || a);
  return t && a && bl(l, r, a), a;
};
let N = class extends G {
  uniqueName;
};
be([
  de("Header Unique Name."),
  W()
], N.prototype, "uniqueName", 2);
N = be([
  z({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//HeaderExpandedPayload" })
], N);
var fl = Object.defineProperty, yl = Object.getOwnPropertyDescriptor, Ce = (s, l, r, t) => {
  for (var a = t > 1 ? void 0 : t ? yl(l, r) : l, p = s.length - 1, m; p >= 0; p--)
    (m = s[p]) && (a = (t ? m(l, r, a) : m(a)) || a);
  return t && a && fl(l, r, a), a;
};
let E = class extends G {
  uniqueName;
};
Ce([
  de("Header Unique Name."),
  W()
], E.prototype, "uniqueName", 2);
E = Ce([
  z({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//HeaderClickedPayload" })
], E);
const hl = [
  {
    name: "Row Expanded",
    type: "row_expanded",
    description: "Triggered when a row is expanded in the pivot table",
    payloadType: N
  },
  {
    name: "Row Collapsed",
    type: "row_collapsed",
    description: "Triggered when a row is collapsed in the pivot table",
    payloadType: N
  },
  {
    name: "Column Expanded",
    type: "column_expanded",
    description: "Triggered when a column is expanded in the pivot table",
    payloadType: N
  },
  {
    name: "Column Collapsed",
    type: "column_collapsed",
    description: "Triggered when a column is collapsed in the pivot table",
    payloadType: N
  },
  {
    name: "Row Clicked",
    type: "row_clicked",
    description: "Triggered when a row is clicked in the pivot table",
    payloadType: E
  },
  {
    name: "Column Clicked",
    type: "column_clicked",
    description: "Triggered when a column is clicked in the pivot table",
    payloadType: E
  },
  {
    name: "Row Right Clicked",
    type: "row_right_clicked",
    description: "Triggered when a row is right-clicked in the pivot table",
    payloadType: E
  },
  {
    name: "Column Right Clicked",
    type: "column_right_clicked",
    description: "Triggered when a column is right-clicked in the pivot table",
    payloadType: E
  },
  {
    name: "Cell Clicked",
    type: "cell_clicked",
    description: "Triggered when a cell is clicked in the pivot table",
    payloadType: G
  },
  {
    name: "Cell Right Clicked",
    type: "cell_right_clicked",
    description: "Triggered when a cell is right-clicked in the pivot table",
    payloadType: G
  }
];
var Vl = Object.defineProperty, _l = Object.getOwnPropertyDescriptor, fe = (s, l, r, t) => {
  for (var a = t > 1 ? void 0 : t ? _l(l, r) : l, p = s.length - 1, m; p >= 0; p--)
    (m = s[p]) && (a = (t ? m(l, r, a) : m(a)) || a);
  return t && a && Vl(l, r, a), a;
};
let J = class extends Fe {
  expandRow(s) {
    throw new Error("expandRow not implemented");
  }
};
fe([
  He({ eventType: "pivotTable.expandRow" })
], J.prototype, "expandRow", 1);
J = fe([
  z({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.table.pivot#//PivotTableInterface" })
], J);
var xl = Object.defineProperty, Tl = Object.getOwnPropertyDescriptor, ue = (s, l, r, t) => {
  for (var a = t > 1 ? void 0 : t ? Tl(l, r) : l, p = s.length - 1, m; p >= 0; p--)
    (m = s[p]) && (a = (t ? m(l, r, a) : m(a)) || a);
  return t && a && xl(l, r, a), a;
}, me = (s, l) => (r, t) => l(r, t, s);
const B = "PivotTableWidget";
let Y = class {
  constructor(s, l) {
    this.events = s, this.actions = l;
  }
  type = B;
  component = ze;
  settingsComponent = wl;
  supportedDSTypes = [];
  icon = Ne;
  name = "PivotTable";
  register() {
    this.events.registerWidget(B, hl), this.actions.registerWidgetType(B, J, "widget");
  }
  unregister() {
    this.events.unregisterWidget(B), this.actions.unregisterWidgetType(B);
  }
};
ue([
  Ve()
], Y.prototype, "register", 1);
ue([
  _e()
], Y.prototype, "unregister", 1);
Y = ue([
  xe({
    service: [Me],
    properties: { "widget.type": B }
  }),
  me(0, se(ye)),
  me(1, se(he))
], Y);
export {
  ze as PivotTableWidget,
  Y as PivotTableWidgetProvider,
  wl as PivotTableWidgetSettings
};
