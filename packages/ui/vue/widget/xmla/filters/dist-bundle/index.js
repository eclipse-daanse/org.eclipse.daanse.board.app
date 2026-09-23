(function(){var i="ui.vue.widget.xmla.filters",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".filter-icon[data-v-890c5bb7]{margin-left:8px;cursor:pointer}.widget[data-v-890c5bb7]{padding:12px;display:flex;flex-direction:column;gap:8px}.hierarchies-section[data-v-890c5bb7]{display:flex;flex-direction:column;gap:4px}.hierarchies-section h4[data-v-890c5bb7]{font-weight:600}.hierarchy-item[data-v-890c5bb7]{width:100%;padding:4px 6px;font-size:14px;border:1px solid var(--color-divider);margin-bottom:4px;border-radius:4px;display:flex;gap:8px;justify-content:start;align-items:center}.hierarchy-item .filter-caption[data-v-890c5bb7]{font-style:italic;color:var(--color-dim)}.hierarchy-item .hierarchy-caption[data-v-890c5bb7]{flex-grow:1}.settings-container[data-v-1ab0ca9e]{display:flex;flex-direction:column;gap:2px}\n";})();
import { PayloadImpl as b, EVENT_REGISTRY_ID as G } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as x, activate as K, deactivate as J, inject as e2 } from "@eclipse-daanse/tsm";
import { defineComponent as P, toRefs as t2, inject as s2, ref as f, watch as i2, onMounted as l2, createElementBlock as g, openBlock as u, Fragment as E, createElementVNode as p, createBlock as n2, createCommentVNode as M, withModifiers as o2, toDisplayString as C, unref as d, renderList as S, createVNode as w, useModel as r2 } from "vue";
import { useTranslation as Z, useDatasourceRepository as a2 } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { FiltersModal as c2 } from "org.eclipse.daanse.board.app.ui.vue.common.xmla";
import { DIcon as L, DCheckbox as $ } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { WIDGET_SERVICE_ID as C2 } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: d2 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), u2 = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M28.3826%2066.198C27.9026%2066.198%2027.3986%2066.162%2026.8706%2066.09C26.3546%2066.03%2025.8626%2065.934%2025.3946%2065.802C24.9266%2065.67%2024.5066%2065.514%2024.1346%2065.334C23.8106%2065.178%2023.5826%2064.974%2023.4506%2064.722C23.3186%2064.458%2023.2706%2064.182%2023.3066%2063.894C23.3426%2063.606%2023.4446%2063.354%2023.6126%2063.138C23.7806%2062.91%2024.0026%2062.76%2024.2786%2062.688C24.5546%2062.604%2024.8666%2062.64%2025.2146%2062.796C25.6706%2063.012%2026.1866%2063.18%2026.7626%2063.3C27.3386%2063.42%2027.8786%2063.48%2028.3826%2063.48C29.1746%2063.48%2029.7266%2063.378%2030.0386%2063.174C30.3626%2062.958%2030.5246%2062.694%2030.5246%2062.382C30.5246%2062.106%2030.4106%2061.884%2030.1826%2061.716C29.9666%2061.548%2029.5766%2061.404%2029.0126%2061.284L26.9066%2060.834C25.7546%2060.594%2024.8966%2060.174%2024.3326%2059.574C23.7686%2058.974%2023.4866%2058.2%2023.4866%2057.252C23.4866%2056.628%2023.6126%2056.064%2023.8646%2055.56C24.1286%2055.044%2024.4946%2054.606%2024.9626%2054.246C25.4426%2053.886%2026.0066%2053.61%2026.6546%2053.418C27.3146%2053.214%2028.0466%2053.112%2028.8506%2053.112C29.4746%2053.112%2030.1047%2053.184%2030.7407%2053.328C31.3887%2053.46%2031.9466%2053.664%2032.4146%2053.94C32.6906%2054.084%2032.8886%2054.282%2033.0086%2054.534C33.1286%2054.786%2033.1767%2055.05%2033.1526%2055.326C33.1287%2055.59%2033.0327%2055.824%2032.8647%2056.028C32.7087%2056.232%2032.4926%2056.37%2032.2166%2056.442C31.9526%2056.502%2031.6346%2056.454%2031.2626%2056.298C30.9146%2056.142%2030.5186%2056.028%2030.0746%2055.956C29.6426%2055.872%2029.2226%2055.83%2028.8146%2055.83C28.3706%2055.83%2027.9926%2055.884%2027.6806%2055.992C27.3686%2056.088%2027.1286%2056.232%2026.9606%2056.424C26.8046%2056.616%2026.7266%2056.838%2026.7266%2057.09C26.7266%2057.342%2026.8286%2057.558%2027.0326%2057.738C27.2487%2057.906%2027.6386%2058.05%2028.2026%2058.17L30.2906%2058.62C31.4546%2058.872%2032.3246%2059.286%2032.9006%2059.862C33.4766%2060.438%2033.7646%2061.188%2033.7646%2062.112C33.7646%2062.736%2033.6386%2063.3%2033.3867%2063.804C33.1346%2064.308%2032.7746%2064.74%2032.3066%2065.1C31.8386%2065.448%2031.2746%2065.718%2030.6146%2065.91C29.9546%2066.102%2029.2106%2066.198%2028.3826%2066.198Z'%20fill='%23606060'/%3e%3cpath%20d='M35.8446%2066.162C35.4726%2066.162%2035.1606%2066.078%2034.9086%2065.91C34.6566%2065.73%2034.5006%2065.49%2034.4406%2065.19C34.3806%2064.878%2034.4346%2064.53%2034.6026%2064.146L39.0846%2054.498C39.3006%2054.03%2039.5646%2053.688%2039.8766%2053.472C40.2006%2053.256%2040.5666%2053.148%2040.9746%2053.148C41.3826%2053.148%2041.7366%2053.256%2042.0366%2053.472C42.3486%2053.688%2042.6186%2054.03%2042.8466%2054.498L47.3286%2064.146C47.5206%2064.53%2047.5866%2064.878%2047.5266%2065.19C47.4786%2065.502%2047.3286%2065.742%2047.0766%2065.91C46.8366%2066.078%2046.5366%2066.162%2046.1766%2066.162C45.6966%2066.162%2045.3246%2066.054%2045.0606%2065.838C44.8086%2065.622%2044.5806%2065.274%2044.3766%2064.794L43.4046%2062.508L44.6646%2063.426H37.2486L38.5266%2062.508L37.5546%2064.794C37.3386%2065.274%2037.1166%2065.622%2036.8886%2065.838C36.6606%2066.054%2036.3126%2066.162%2035.8446%2066.162ZM40.9386%2056.766L38.8506%2061.752L38.3466%2060.888H43.5846L43.0806%2061.752L40.9746%2056.766H40.9386Z'%20fill='%23606060'/%3e%3cpath%20d='M50.5091%2066.162C50.0291%2066.162%2049.6571%2066.03%2049.3931%2065.766C49.1411%2065.502%2049.0151%2065.13%2049.0151%2064.65V54.66C49.0151%2054.168%2049.1531%2053.796%2049.4291%2053.544C49.7051%2053.28%2050.0951%2053.148%2050.5991%2053.148C51.0191%2053.148%2051.3491%2053.232%2051.5891%2053.4C51.8411%2053.556%2052.0691%2053.82%2052.2731%2054.192L56.1431%2061.14H55.5131L59.3652%2054.192C59.5812%2053.82%2059.8091%2053.556%2060.0491%2053.4C60.3011%2053.232%2060.6371%2053.148%2061.0571%2053.148C61.5371%2053.148%2061.9032%2053.28%2062.1552%2053.544C62.4192%2053.796%2062.5512%2054.168%2062.5512%2054.66V64.65C62.5512%2065.13%2062.4251%2065.502%2062.1731%2065.766C61.9211%2066.03%2061.5491%2066.162%2061.0571%2066.162C60.5771%2066.162%2060.2051%2066.03%2059.9411%2065.766C59.6891%2065.502%2059.5632%2065.13%2059.5632%2064.65V58.458H59.9411L57.0431%2063.498C56.8751%2063.762%2056.6951%2063.96%2056.5031%2064.092C56.3231%2064.224%2056.0771%2064.29%2055.7651%2064.29C55.4651%2064.29%2055.2191%2064.224%2055.0271%2064.092C54.8351%2063.96%2054.6611%2063.762%2054.5051%2063.498L51.5891%2058.44H52.0031V64.65C52.0031%2065.13%2051.8772%2065.502%2051.6252%2065.766C51.3732%2066.03%2051.0011%2066.162%2050.5091%2066.162Z'%20fill='%23606060'/%3e%3cpath%20d='M66.5434%2066.162C66.0154%2066.162%2065.6074%2066.018%2065.3194%2065.73C65.0314%2065.43%2064.8874%2065.016%2064.8874%2064.488V54.984C64.8874%2054.444%2065.0314%2054.03%2065.3194%2053.742C65.6194%2053.454%2066.0333%2053.31%2066.5613%2053.31H70.9893C72.4293%2053.31%2073.5394%2053.682%2074.3194%2054.426C75.1114%2055.158%2075.5074%2056.172%2075.5074%2057.468C75.5074%2058.764%2075.1114%2059.784%2074.3194%2060.528C73.5394%2061.26%2072.4293%2061.626%2070.9893%2061.626H68.1994V64.488C68.1994%2065.016%2068.0614%2065.43%2067.7854%2065.73C67.5094%2066.018%2067.0954%2066.162%2066.5434%2066.162ZM68.1994%2059.088H70.4134C71.0374%2059.088%2071.5173%2058.956%2071.8533%2058.692C72.1893%2058.416%2072.3574%2058.008%2072.3574%2057.468C72.3574%2056.916%2072.1893%2056.508%2071.8533%2056.244C71.5173%2055.98%2071.0374%2055.848%2070.4134%2055.848H68.1994V59.088Z'%20fill='%23606060'/%3e%3cpath%20d='M78.7254%2066C78.1974%2066%2077.7834%2065.856%2077.4834%2065.568C77.1954%2065.268%2077.0514%2064.854%2077.0514%2064.326V54.966C77.0514%2054.426%2077.1954%2054.012%2077.4834%2053.724C77.7714%2053.436%2078.1794%2053.292%2078.7074%2053.292C79.2474%2053.292%2079.6554%2053.436%2079.9314%2053.724C80.2194%2054.012%2080.3634%2054.426%2080.3634%2054.966V63.246H84.7554C85.2114%2063.246%2085.5594%2063.366%2085.7994%2063.606C86.0514%2063.834%2086.1774%2064.17%2086.1774%2064.614C86.1774%2065.058%2086.0514%2065.4%2085.7994%2065.64C85.5594%2065.88%2085.2114%2066%2084.7554%2066H78.7254Z'%20fill='%23606060'/%3e%3cpath%20d='M89.3087%2066C88.7447%2066%2088.3127%2065.856%2088.0127%2065.568C87.7247%2065.268%2087.5807%2064.842%2087.5807%2064.29V55.02C87.5807%2054.468%2087.7247%2054.048%2088.0127%2053.76C88.3127%2053.46%2088.7447%2053.31%2089.3087%2053.31H95.4107C95.8427%2053.31%2096.1667%2053.418%2096.3827%2053.634C96.5987%2053.85%2096.7067%2054.162%2096.7067%2054.57C96.7067%2054.99%2096.5987%2055.314%2096.3827%2055.542C96.1667%2055.758%2095.8427%2055.866%2095.4107%2055.866H90.7487V58.278H95.0147C95.4347%2058.278%2095.7527%2058.386%2095.9687%2058.602C96.1967%2058.818%2096.3107%2059.136%2096.3107%2059.556C96.3107%2059.976%2096.1967%2060.294%2095.9687%2060.51C95.7527%2060.726%2095.4347%2060.834%2095.0147%2060.834H90.7487V63.444H95.4107C95.8427%2063.444%2096.1667%2063.558%2096.3827%2063.786C96.5987%2064.002%2096.7067%2064.314%2096.7067%2064.722C96.7067%2065.142%2096.5987%2065.46%2096.3827%2065.676C96.1667%2065.892%2095.8427%2066%2095.4107%2066H89.3087Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2043.5C22.5%2042.6716%2023.1716%2042%2024%2042H96C96.8284%2042%2097.5%2042.6716%2097.5%2043.5C97.5%2044.3284%2096.8284%2045%2096%2045H24C23.1716%2045%2022.5%2044.3284%2022.5%2043.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2076.5C22.5%2075.6716%2023.1716%2075%2024%2075H96C96.8284%2075%2097.5%2075.6716%2097.5%2076.5C97.5%2077.3284%2096.8284%2078%2096%2078H24C23.1716%2078%2022.5%2077.3284%2022.5%2076.5Z'%20fill='%23606060'/%3e%3c/svg%3e", g2 = {
  key: 0,
  class: "hierarchies-section"
}, p2 = { class: "hierarchy-caption" }, m2 = { class: "filter-caption" }, f2 = {
  key: 1,
  class: "hierarchies-section"
}, h2 = { class: "hierarchy-caption" }, w2 = { class: "filter-caption" }, v2 = {
  key: 2,
  class: "hierarchies-section"
}, _2 = { class: "hierarchy-caption" }, I2 = { class: "filter-caption" }, H2 = /* @__PURE__ */ P({
  __name: "FiltersWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(r) {
    const i = r, { t: s } = Z("xmlaFilters"), { datasourceId: c, id: t } = t2(i), o = s2(d2.TINY_EMITTER), m = () => {
      t?.value && o.emit("widget:FiltersWidget:click", {
        type: "widget:FiltersWidget:click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, j = () => {
      t?.value && o.emit("widget:FiltersWidget:right_click", {
        type: "widget:FiltersWidget:right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, z = (n, a, e) => {
      t?.value && o.emit("widget:FiltersWidget:change", {
        type: "widget:FiltersWidget:change",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), id: n, area: a, filterData: e }
      });
    }, v = f([]), _ = f([]), I = f([]), Q = f(null), h = f(null), y = f(null), k = f(null), B = async () => {
      const n = N();
      h.value = await A(), v.value = n.rows, _.value = n.columns, I.value = n.filters;
    };
    i2(c, async (n, a) => {
      q(n, a);
      const e = N();
      h.value = await A(), v.value = e.rows, _.value = e.columns, I.value = e.filters;
    });
    const A = async () => {
      const n = D();
      if (!n)
        return console.warn("No datasource instance available"), null;
      const a = n.getConnection(), e = await a.getApi();
      return y.value = a.catalogName, e;
    }, N = () => {
      const n = D();
      if (!n)
        return console.warn("No datasource instance available"), {
          rows: [],
          columns: [],
          filters: []
        };
      try {
        const a = n.requestParams.rows.map((l) => {
          const H = l.filters.enabled ? l.filters.multipleChoise ? l.filters.selectAll ? "Multiple choice filter, all selected" : `Multiple choice filter (${l.filters.selectedItems.length} selected, ${l.filters.deselectedItems.length} deselected)` : `Single choice filter (${l.filters.selectedItem ? l.filters.selectedItem.Caption : "none selected"})` : "No filter applied";
          return {
            ...l,
            filtersCaption: H
          };
        }), e = n.requestParams.columns.map((l) => {
          const H = l.filters.enabled ? l.filters.multipleChoise ? l.filters.selectAll ? "Multiple choice filter, all selected" : `Multiple choice filter (${l.filters.selectedItems.length} selected, ${l.filters.deselectedItems.length} deselected)` : `Single choice filter (${l.filters.selectedItem ? l.filters.selectedItem.Caption : "none selected"})` : "No filter applied";
          return {
            ...l,
            filtersCaption: H
          };
        }), F = n.requestParams.filters.map((l) => {
          const H = l.filters.enabled ? l.filters.multipleChoise ? l.filters.selectAll ? "Multiple choice filter, all selected" : `Multiple choice filter (${l.filters.selectedItems.length} selected, ${l.filters.deselectedItems.length} deselected)` : `Single choice filter (${l.filters.selectedItem ? l.filters.selectedItem.Caption : "none selected"})` : "No filter applied";
          return {
            ...l,
            filtersCaption: H
          };
        });
        return {
          rows: a,
          columns: e,
          filters: F
        };
      } catch (a) {
        return console.error("Error retrieving hierarchies:", a), {
          rows: [],
          columns: [],
          filters: []
        };
      }
    };
    l2(async () => {
      const n = N();
      h.value = await A(), v.value = n.rows, _.value = n.columns, I.value = n.filters, i.config.settings.showFilters = i.config.settings.showFilters ?? !0, i.config.settings.showRows = i.config.settings.showRows ?? !0, i.config.settings.showColumns = i.config.settings.showColumns ?? !0;
    });
    const { update: q, getDatasourceInstance: D, callEvent: X } = a2(c, "string", Q, [B]), W = async (n, a) => {
      if (!k.value) {
        console.warn("Filter modal is not available");
        return;
      }
      const { filters: e } = await k.value.run({
        element: a,
        filters: a.filters,
        api: h
      });
      e && (z(a.id, n, e), X("filterChange", {
        area: n,
        id: a.id,
        filters: e
      }));
    };
    return (n, a) => (u(), g(E, null, [
      p("div", {
        class: "widget",
        onClick: m,
        onContextmenu: o2(j, ["prevent"])
      }, [
        i.config.settings.showRows && v.value.length > 0 ? (u(), g("div", g2, [
          p("h4", null, C(d(s)("Widget.rows")), 1),
          (u(!0), g(E, null, S(v.value, (e) => (u(), g("div", {
            key: e.originalItem.HIERARCHY_UNIQUE_NAME,
            class: "hierarchy-item"
          }, [
            p("p", p2, C(e.originalItem.HIERARCHY_NAME) + " (" + C(e.originalItem.HIERARCHY_UNIQUE_NAME) + ")", 1),
            p("p", m2, C(e.filtersCaption), 1),
            w(d(L), {
              name: "filter_list",
              size: "sm",
              class: "filter-icon",
              tone: e.filters.enabled ? "color-ok" : void 0,
              onClick: (F) => W("rows", e)
            }, null, 8, ["tone", "onClick"])
          ]))), 128))
        ])) : M("", !0),
        i.config.settings.showColumns && _.value.length > 0 ? (u(), g("div", f2, [
          p("h4", null, C(d(s)("Widget.columns")), 1),
          (u(!0), g(E, null, S(_.value, (e) => (u(), g("div", {
            key: e.originalItem.HIERARCHY_UNIQUE_NAME,
            class: "hierarchy-item"
          }, [
            p("p", h2, C(e.originalItem.HIERARCHY_NAME) + " (" + C(e.originalItem.HIERARCHY_UNIQUE_NAME) + ")", 1),
            p("p", w2, C(e.filtersCaption), 1),
            w(d(L), {
              name: "filter_list",
              size: "sm",
              class: "filter-icon",
              tone: e.filters.enabled ? "color-ok" : void 0,
              onClick: (F) => W("columns", e)
            }, null, 8, ["tone", "onClick"])
          ]))), 128))
        ])) : M("", !0),
        i.config.settings.showFilters && I.value.length > 0 ? (u(), g("div", v2, [
          p("h4", null, C(d(s)("Widget.filters")), 1),
          (u(!0), g(E, null, S(I.value, (e) => (u(), g("div", {
            key: e.originalItem.HIERARCHY_UNIQUE_NAME,
            class: "hierarchy-item"
          }, [
            p("p", _2, C(e.originalItem.HIERARCHY_NAME) + " (" + C(e.originalItem.HIERARCHY_UNIQUE_NAME) + ")", 1),
            p("p", I2, C(e.filtersCaption), 1),
            w(d(L), {
              name: "filter_list",
              size: "sm",
              class: "filter-icon",
              tone: e.filters.enabled ? "color-ok" : void 0,
              onClick: (F) => W("filters", e)
            }, null, 8, ["tone", "onClick"])
          ]))), 128))
        ])) : M("", !0)
      ], 32),
      h.value && y.value ? (u(), n2(d(c2), {
        key: 0,
        ref_key: "filterModal",
        ref: k,
        api: h.value,
        catalog: y.value
      }, null, 8, ["api", "catalog"])) : M("", !0)
    ], 64));
  }
}), Y = (r, i) => {
  const s = r.__vccOpts || r;
  for (const [c, t] of i)
    s[c] = t;
  return s;
}, F2 = /* @__PURE__ */ Y(H2, [["__scopeId", "data-v-890c5bb7"]]), E2 = ["data-section"], M2 = { class: "settings-container" }, R2 = /* @__PURE__ */ P({
  __name: "FiltersWidgetSettings",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(r) {
    const { t: i } = Z("xmlaFilters"), s = r2(r, "modelValue");
    return s.settings = s.settings ?? {}, s.settings.showRows = s.settings?.showRows ?? !0, s.settings.showColumns = s.settings?.showRows ?? !0, s.settings.showFilters = s.settings?.showRows ?? !0, (c, t) => (u(), g("section", {
      class: "settings-section",
      "data-section-id": "filters",
      "data-section": d(i)("Settings.section")
    }, [
      p("div", M2, [
        w(d($), {
          modelValue: s.value.settings.showRows,
          "onUpdate:modelValue": t[0] || (t[0] = (o) => s.value.settings.showRows = o),
          label: d(i)("Settings.showRows")
        }, null, 8, ["modelValue", "label"]),
        w(d($), {
          modelValue: s.value.settings.showColumns,
          "onUpdate:modelValue": t[1] || (t[1] = (o) => s.value.settings.showColumns = o),
          label: d(i)("Settings.showColumns")
        }, null, 8, ["modelValue", "label"]),
        w(d($), {
          modelValue: s.value.settings.showFilters,
          "onUpdate:modelValue": t[2] || (t[2] = (o) => s.value.settings.showFilters = o),
          label: d(i)("Settings.showFilters")
        }, null, 8, ["modelValue", "label"])
      ])
    ], 8, E2));
  }
}), V2 = /* @__PURE__ */ Y(R2, [["__scopeId", "data-v-1ab0ca9e"]]), y2 = [
  { name: "Filters Clicked", type: "click", description: "Triggered when the filters widget is clicked", payloadType: b },
  { name: "Filters Right Clicked", type: "right_click", description: "Triggered when the filters widget is right-clicked", payloadType: b },
  { name: "Filters Changed", type: "change", description: "Triggered when a filter selection changes", payloadType: b }
], k2 = { name: "XMLA-Filter", rows: "Zeilen:", columns: "Spalten:", filters: "Filter:" }, A2 = { section: "Filter-Widget", showRows: "Zeilen zeigen", showColumns: "Spalten zeigen", showFilters: "Filter zeigen" }, N2 = {
  Widget: k2,
  Settings: A2
}, W2 = { name: "XMLA filters", rows: "Rows:", columns: "Columns:", filters: "Filters:" }, b2 = { section: "Filters widget", showRows: "Show rows", showColumns: "Show columns", showFilters: "Show filters" }, S2 = {
  Widget: W2,
  Settings: b2
};
var L2 = Object.getOwnPropertyDescriptor, $2 = (r, i, s, c) => {
  for (var t = c > 1 ? void 0 : c ? L2(i, s) : i, o = r.length - 1, m; o >= 0; o--)
    (m = r[o]) && (t = m(t) || t);
  return t;
};
const O = "xmlaFilters";
let U = class {
  namespace = O;
  resources = {
    de: N2,
    en: S2
  };
};
U = $2([
  x({
    service: ["Translations"],
    properties: { "i18n.namespace": O }
  })
], U);
var T2 = Object.defineProperty, D2 = Object.getOwnPropertyDescriptor, T = (r, i, s, c) => {
  for (var t = c > 1 ? void 0 : c ? D2(i, s) : i, o = r.length - 1, m; o >= 0; o--)
    (m = r[o]) && (t = (c ? m(i, s, t) : m(t)) || t);
  return c && t && T2(i, s, t), t;
}, U2 = (r, i) => (s, c) => i(s, c, r);
const R = "FiltersWidget";
let V = class {
  constructor(r) {
    this.events = r;
  }
  type = R;
  component = F2;
  settingsComponent = V2;
  supportedDSTypes = ["xmla"];
  icon = u2;
  name = "XMLA Filters";
  nameKey = "xmlaFilters:Widget.name";
  register() {
    this.events.registerWidget(R, y2);
  }
  unregister() {
    this.events.unregisterWidget(R);
  }
};
T([
  K()
], V.prototype, "register", 1);
T([
  J()
], V.prototype, "unregister", 1);
V = T([
  x({
    service: [C2],
    properties: { "widget.type": R }
  }),
  U2(0, e2(G))
], V);
export {
  F2 as FiltersWidget,
  V as FiltersWidgetProvider,
  V2 as FiltersWidgetSettings,
  U as XmlaFiltersTranslations
};
