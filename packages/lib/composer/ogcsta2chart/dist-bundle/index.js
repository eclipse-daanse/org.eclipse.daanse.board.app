import { EVENT_ACTIONS_REGISTRY_ID as $ } from "org.eclipse.daanse.board.app.lib.api.events";
import { DATASOURCE_REPOSITORY as G } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { BaseDatasource as P } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { WidgetAction as b, ActionParameter as A } from "org.eclipse.daanse.board.app.lib.events";
import { ModelClass as B } from "org.eclipse.daanse.board.app.lib.annotations";
const { serviceId: R } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class y extends P {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(t, e) {
    super(), this.datasourceRepository = t, this.actionsRegistry = e;
  }
  instanceId = "";
  configuration;
  // Store config reference
  connectedDatasources = [];
  thingIds = [];
  allThingsCache = [];
  // Cache all things for name/id lookup
  // Use getter to always access configuration.datastreams directly
  // This ensures we stay in sync even when Settings UI modifies the array
  get datastreams() {
    return this.configuration?.datastreams || [];
  }
  set datastreams(t) {
    this.configuration && (this.configuration.datastreams = t);
  }
  destroy() {
    if (console.log(`Destroying OGCSTAToChartComposer: ${this.instanceId}`), this.instanceId)
      try {
        this.actionsRegistry && (this.actionsRegistry.unregisterInstance(this.instanceId), console.log(`📝 Unregistered OGCSTAToChartComposer instance: ${this.instanceId}`));
      } catch (t) {
        console.warn("Could not unregister composer instance:", t);
      }
  }
  /**
   * Get the instance ID for this composer
   */
  getInstanceId() {
    return this.instanceId;
  }
  /**
   * Set the instance ID (called by factory)
   */
  setInstanceId(t) {
    this.instanceId = t;
  }
  isUpdating = !1;
  pendingUpdate = !1;
  cachedData = null;
  cachedThingsStructure = [];
  // Cache Things structure for operation mode
  loadingPromises = /* @__PURE__ */ new Map();
  // Track ongoing loads to prevent duplicates
  requestSessionId = 0;
  // Incremented on each thing switch to invalidate old requests
  static availableTypes = ["ogcsta"];
  init(t) {
    super.init(t), this.configuration = t, Array.isArray(t.datastreams) || (t.datastreams = []), Array.isArray(t.thingIds) || (t.thingIds = []), this.connectedDatasources = t.connectedDatasources, this.thingIds = t.thingIds;
    const e = async () => {
      if (this.isUpdating) {
        console.log("🔄 Update already in progress, marking pending update"), this.pendingUpdate = !0;
        return;
      }
      this.isUpdating = !0, this.pendingUpdate = !1;
      try {
        console.log("📊 OGCSTAToChartComposer: Datasource updated, notifying widgets..."), this.loadingPromises.clear(), await new Promise((a) => setTimeout(a, 50)), this.notify(), this.pendingUpdate && (console.log("🔄 Processing pending update"), this.pendingUpdate = !1, setTimeout(() => e(), 100));
      } finally {
        this.isUpdating = !1;
      }
    }, s = this.datasourceRepository;
    this.connectedDatasources.filter((a) => a).forEach((a) => {
      s.getDatasource(a).subscribe(e);
    }), setTimeout(() => {
      console.log("📊 OGCSTAToChartComposer: Initial notify to load data"), this.notify();
    }, 100);
  }
  async getData(t, e) {
    const s = this.datasourceRepository, a = await Promise.all(
      this.connectedDatasources.filter((n) => n).map(async (n) => {
        if (!s)
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        const o = s.getDatasource(n);
        if (this.datastreams.length === 0)
          return console.log("⚠️ No datastreams configured yet"), { things: [], datastreams: [], observations: [] };
        let i = o.resultMap;
        if (!i?.datastreams || i.datastreams.length === 0) {
          console.log("📊 OGCSTAToChartComposer: Initializing datasource...");
          try {
            await o.getData("OGCSTAData", { reload: !0 }), i = o.resultMap, console.log("📊 OGCSTAToChartComposer: Datasource initialized");
          } catch (l) {
            console.error("Failed to initialize datasource:", l);
          }
        }
        console.log("📊 Reading observations from datastreams in cache");
        const c = o.configuration, d = [], r = [];
        if (i?.datastreams) {
          console.log(`✅ Found ${i.datastreams.length} datastreams in cache`);
          for (const l of this.datastreams) {
            const m = i.datastreams.find((g) => g.iotId == l.datastreamId);
            m?.observations && m.observations.length > 0 ? (console.log(`📊 Found ${m.observations.length} observations in datastream ${l.datastreamId}`), m.observations.forEach((g) => {
              g.ds_source = l.datastreamId, d.push(g);
            })) : (console.log(`⚠️ No observations in cache for datastream ${l.datastreamId}, will load directly`), r.push(l));
          }
        } else
          console.log("⚠️ No datastreams in cache, will load all directly"), r.push(...this.datastreams);
        if (r.length > 0) {
          console.log(`📊 Loading ${r.length} missing datastreams directly`);
          const l = c?.history || {
            enabled: !0,
            phenomenonTime: {
              startVariable: c?.history?.phenomenonTime?.startVariable,
              endVariable: c?.history?.phenomenonTime?.endVariable
            }
          };
          for (const m of r)
            try {
              const g = `${n}:${m.datastreamId}`;
              if (this.loadingPromises.has(g))
                console.log(`⏳ Already loading datastream ${m.datastreamId}, reusing promise`), (await this.loadingPromises.get(g)).forEach((v) => {
                  d.push(v);
                });
              else {
                console.log(`📊 Loading observations for missing datastream ${m.datastreamId}`);
                const T = o.getHistoricalObservations(
                  m.datastreamId,
                  l
                ).then((u) => (u.forEach((S) => {
                  S.ds_source = m.datastreamId;
                }), console.log(`✅ Loaded ${u.length} observations for ${m.datastreamId}`), setTimeout(() => this.loadingPromises.delete(g), 100), u)).catch((u) => {
                  throw this.loadingPromises.delete(g), console.error(`❌ Failed to load observations for ${m.datastreamId}:`, u), u;
                });
                this.loadingPromises.set(g, T), (await T).forEach((u) => {
                  d.push(u);
                });
              }
            } catch (g) {
              console.error(`Error loading observations for ${m.datastreamId}:`, g);
            }
        }
        return console.log(`✅ Total observations collected: ${d.length}`), {
          things: i?.things || [],
          datastreams: i?.datastreams || [],
          observations: d
        };
      })
    );
    if (t === "ChartData") {
      const n = this.composeChartData(a);
      return this.cachedData = n, n;
    } else if (t === "DataTable") {
      const n = this.composeDataTable(a);
      return this.cachedData = n, n;
    } else
      return console.warn("Invalid data type for OGCSTAToChartComposer"), null;
  }
  async getOriginalData() {
    return [];
  }
  callEvent(t, e) {
    if (t === "switchThingByName" && e?.name) {
      this.switchThingByName(e.name);
      return;
    }
    if (t === "switchThingById" && e?.id) {
      this.switchThingById(e.id);
      return;
    }
    console.warn(`Event "${t}" is not available for OGCSTAToChartComposer`, e);
  }
  /**
   * Switch to a different Thing by its name
   * @param name - The name of the Thing to switch to
   */
  async switchThingByName(t) {
    console.log(`🔄 OGCSTAToChartComposer: Switching thing by name: "${t}"`);
    const e = await this.findThingByName(t);
    if (e) {
      const s = e["@iot.id"] || e.iotId;
      await this.switchToThing(s, e);
    } else
      console.warn(`⚠️ Thing with name "${t}" not found`);
  }
  /**
    * Switch to a different Thing by its ID
    * @param id - The ID of the Thing to switch to
    */
  async switchThingById(t) {
    console.log(`🔄 OGCSTAToChartComposer: Switching thing by id: "${t}"`);
    const e = await this.findThingById(t);
    e ? await this.switchToThing(t, e) : console.warn(`⚠️ Thing with id "${t}" not found`);
  }
  /**
   * Find a Thing by its name from connected datasources
   */
  async findThingByName(t) {
    return await this.refreshThingsCache(), this.allThingsCache.find((s) => {
      const a = s.name || s.Name;
      return a === t || a?.toLowerCase() === t.toLowerCase();
    }) || null;
  }
  /**
   * Find a Thing by its ID from connected datasources
   */
  async findThingById(t) {
    return await this.refreshThingsCache(), this.allThingsCache.find((s) => (s["@iot.id"] || s.iotId) == t) || null;
  }
  /**
   * Refresh the cache of all things from connected datasources
   */
  async refreshThingsCache() {
    if (this.allThingsCache.length > 0)
      return;
    const t = this.datasourceRepository;
    for (const e of this.connectedDatasources)
      if (e)
        try {
          const s = t.getDatasource(e), a = s.resultMap;
          if (a?.things && a.things.length > 0)
            this.allThingsCache.push(...a.things);
          else {
            const n = await s.getData("OGCSTAData", {
              isolatedRequest: !0,
              filter: {
                things: {
                  includeDatastreams: !0,
                  includeLocations: !1
                }
              }
            });
            n?.things && this.allThingsCache.push(...n.things);
          }
        } catch (s) {
          console.error(`Error loading things from datasource ${e}:`, s);
        }
    console.log(`📦 Cached ${this.allThingsCache.length} things for lookup`);
  }
  /**
   * Load datastreams for a specific thing if not already loaded
   */
  async loadDatastreamsForThing(t) {
    const e = this.allThingsCache.find((a) => (a["@iot.id"] || a.iotId) == t);
    if (e?.datastreams && e.datastreams.length > 0)
      return console.log(`📦 Thing ${t} already has ${e.datastreams.length} datastreams cached`), e;
    console.log(`📡 Loading datastreams for thing ${t}...`);
    const s = this.datasourceRepository;
    for (const a of this.connectedDatasources)
      if (a)
        try {
          const o = await s.getDatasource(a).getData("OGCSTAData", {
            isolatedRequest: !0,
            filter: {
              things: {
                ids: [t],
                includeDatastreams: !0,
                includeLocations: !1
              }
            }
          });
          if (o?.things && o.things.length > 0) {
            const i = o.things[0];
            return console.log(`✅ Loaded ${i.datastreams?.length || 0} datastreams for thing ${t}`), e ? e.datastreams = i.datastreams : this.allThingsCache.push(i), e || i;
          }
        } catch (n) {
          console.error(`Error loading datastreams for thing ${t}:`, n);
        }
    return e;
  }
  /**
   * Switch to a specific thing (without changing datastreams)
   * Use addDatastreamsByName or similar actions to configure datastreams separately
   */
  async switchToThing(t, e) {
    console.log(`🔄 Switching to thing: ${t} (${e.name || "unnamed"})`), this.requestSessionId++, console.log(`🔄 New request session: ${this.requestSessionId}`), this.loadingPromises.clear(), this.thingIds = [t], this.configuration && this.configuration.thingIds.splice(0, this.configuration.thingIds.length, t), this.cachedData = null;
  }
  /**
   * Add datastreams by name pattern
   * @param name - The name (or part of name) of datastreams to add
   */
  async addDatastreamsByName(t) {
    console.log(`➕ OGCSTAToChartComposer: Adding datastreams by name: "${t}"`), await this.refreshThingsCache();
    const e = [];
    for (const s of this.thingIds) {
      const a = await this.loadDatastreamsForThing(s);
      if (!a) {
        console.warn(`⚠️ Thing ${s} not found`);
        continue;
      }
      if (a.datastreams)
        for (const n of a.datastreams) {
          const o = n.name || "", i = String(n["@iot.id"] || n.iotId);
          (o === t || o.toLowerCase().includes(t.toLowerCase())) && (this.datastreams.some((d) => d.datastreamId === i) || e.push({
            datastreamId: i,
            label: o,
            color: this.generateColor()
          }));
        }
    }
    e.length > 0 ? (console.log(`✅ Found ${e.length} matching datastream(s)`, e), this.datastreams.push(...e), console.log(`📊 Total datastreams now: ${this.datastreams.length}`, this.datastreams), this.cachedData = null, console.log(`🔔 Calling notify() on instance ${this.instanceId}`), this.notify()) : console.warn(`⚠️ No datastreams matching "${t}" found in instance ${this.instanceId}`);
  }
  /**
   * Remove all datastreams from the composer
   */
  removeAllDatastreams() {
    console.log("🗑️ OGCSTAToChartComposer: Removing all datastreams"), this.datastreams.splice(0, this.datastreams.length), this.cachedData = null, this.notify();
  }
  /**
   * Remove a specific datastream by name
   * @param name - The name of the datastream to remove
   */
  removeDatastreamByName(t) {
    console.log(`🗑️ OGCSTAToChartComposer: Removing datastream by name: "${t}"`);
    const e = this.datastreams.length, s = [];
    this.datastreams.forEach((n, o) => {
      const i = n.label || "";
      (i === t || i.toLowerCase().includes(t.toLowerCase())) && s.push(o);
    });
    for (let n = s.length - 1; n >= 0; n--)
      this.datastreams.splice(s[n], 1);
    const a = e - this.datastreams.length;
    a > 0 ? (console.log(`✅ Removed ${a} datastream(s)`), this.cachedData = null, this.notify()) : console.warn(`⚠️ No datastreams matching "${t}" found to remove`);
  }
  composeChartData(t) {
    const e = {
      labels: [],
      datasets: []
    };
    console.log("📊 OGCSTAToChartComposer: Starting chart data composition");
    const s = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
    this.datastreams.forEach((o) => {
      const i = /* @__PURE__ */ new Map();
      for (const c of t) {
        if (c?.observations && c.observations.length > 0) {
          const d = c.observations.filter((r) => (r.ds_source || r["Datastream@iot.navigationLink"]?.match(/Datastreams\((.+?)\)/)?.[1] || r.datastreamId) == o.datastreamId);
          console.log(`📊 Found ${d.length} observations for datastream ${o.datastreamId}`), d.forEach((r) => {
            const l = r.phenomenonTime || r.resultTime || (/* @__PURE__ */ new Date()).toISOString();
            s.add(l), i.set(l, r.result);
          });
        }
        if (c?.things)
          for (const d of c.things) {
            if (!d.datastreams) continue;
            const r = d.datastreams.find((l) => (l["@iot.id"] || l.iotId) === o.datastreamId);
            r && r.observations && r.observations.length > 0 && r.observations.forEach((l) => {
              const m = l.phenomenonTime || l.resultTime || (/* @__PURE__ */ new Date()).toISOString();
              s.add(m), i.set(m, l.result);
            });
          }
      }
      a.set(o.datastreamId, i);
    });
    const n = Array.from(s).sort();
    return e.labels = n, this.datastreams.forEach((o) => {
      const i = a.get(o.datastreamId) || /* @__PURE__ */ new Map(), c = {
        label: o.label || o.datastreamId,
        data: n.map((d) => i.get(d) ?? null),
        backgroundColor: o.color || this.generateColor(),
        borderColor: o.color || this.generateColor()
      };
      e.datasets.push(c);
    }), console.log("📊 Chart data composed:", e), e;
  }
  composeDataTable(t) {
    const e = {
      headers: ["Datastream", "Value", "Unit", "Timestamp"],
      rows: [],
      items: []
    };
    return console.log("📊 OGCSTAToChartComposer: Starting data table composition"), this.datastreams.forEach((s) => {
      for (const a of t)
        if (a?.observations && a.observations.length > 0 && a.observations.filter((o) => (o.ds_source || o["Datastream@iot.navigationLink"]?.match(/Datastreams\((.+?)\)/)?.[1] || o.datastreamId) == s.datastreamId).forEach((o) => {
          const i = {
            datastream: s.label || s.datastreamId,
            value: o.result,
            unit: "",
            // Unit not available in observation-only mode
            timestamp: o.phenomenonTime || o.resultTime || ""
          };
          e.items.push(i), e.rows.push([
            i.datastream,
            i.value,
            i.unit,
            i.timestamp
          ]);
        }), a?.things)
          for (const n of a.things) {
            if (!n.datastreams) continue;
            const o = n.datastreams.find((i) => (i["@iot.id"] || i.iotId) === s.datastreamId);
            o && o.observations && o.observations.length > 0 && o.observations.forEach((i) => {
              const c = {
                datastream: s.label || o.name,
                value: i.result,
                unit: o.unitOfMeasurement?.symbol || "",
                timestamp: i.phenomenonTime || i.resultTime || ""
              };
              e.items.push(c), e.rows.push([
                c.datastream,
                c.value,
                c.unit,
                c.timestamp
              ]);
            });
          }
    }), console.log("📊 Data table composed:", e), e;
  }
  generateColor() {
    const t = [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#4BC0C0",
      "#9966FF",
      "#FF9F40",
      "#FF6384",
      "#C9CBCF"
    ];
    return t[Math.floor(Math.random() * t.length)];
  }
  static validateConfiguration(t) {
    return !(!t.connectedDatasources || !Array.isArray(t.connectedDatasources) || t.connectedDatasources.length === 0 || !t.datastreams || !Array.isArray(t.datastreams));
  }
  // Helper to get available datastreams from connected datasources
  static async getAvailableDatastreams(t, e, s) {
    if (!s)
      throw new Error("DatasourceRepository is required");
    if (!e || e.length === 0)
      return [];
    const a = [];
    for (const n of t) {
      const o = s.getDatasource(n), i = {
        isolatedRequest: !0,
        // Don't affect cache, only load for UI
        filter: {
          things: {
            ids: e,
            includeDatastreams: !0,
            includeLocations: !1
          }
        }
      }, c = await o.getData("OGCSTAData", i);
      if (c?.things)
        for (const d of c.things)
          d.datastreams && d.datastreams.forEach((r) => {
            a.push({
              id: r["@iot.id"] || r.iotId,
              name: r.name,
              description: r.description,
              unit: r.unitOfMeasurement?.symbol || "",
              thingId: d["@iot.id"] || d.iotId,
              thingName: d.name
            });
          });
    }
    return a;
  }
}
const _ = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  Copyright (c) 2025 Contributors to the Eclipse Foundation.

  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/

  SPDX-License-Identifier: EPL-2.0

  Contributors:
    Smart City Jena
-->
<ecore:EPackage xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="ogcsta2chartactions"
    nsURI="http://org.eclipse.daanse.board.app.lib.composer.ogcsta2chart.actions"
    nsPrefix="ogcsta2chartactions">

  <eClassifiers xsi:type="ecore:EClass" name="OGCSTAToChartComposerActions" interface="true" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//SystemActionInterface">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Actions for the OGC STA to Chart Composer"/>
    </eAnnotations>

    <eOperations name="switchThingByName">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Switch the active Thing in the composer by its name"/>
      </eAnnotations>
      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
        <details key="eventType" value="ogcsta2chart.switchThingByName"/>
      </eAnnotations>
      <eParameters name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Name of the Thing to switch to"/>
        </eAnnotations>
      </eParameters>
    </eOperations>

    <eOperations name="switchThingById">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Switch the active Thing in the composer by its ID"/>
      </eAnnotations>
      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
        <details key="eventType" value="ogcsta2chart.switchThingById"/>
      </eAnnotations>
      <eParameters name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="ID of the Thing to switch to"/>
        </eAnnotations>
      </eParameters>
    </eOperations>

    <eOperations name="addDatastreamsByName">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Add datastreams matching the given name pattern"/>
      </eAnnotations>
      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
        <details key="eventType" value="ogcsta2chart.addDatastreamsByName"/>
      </eAnnotations>
      <eParameters name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Name or pattern of datastreams to add"/>
        </eAnnotations>
      </eParameters>
    </eOperations>

    <eOperations name="removeAllDatastreams">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Remove all datastreams from the composer"/>
      </eAnnotations>
      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
        <details key="eventType" value="ogcsta2chart.removeAllDatastreams"/>
      </eAnnotations>
    </eOperations>

    <eOperations name="removeDatastreamByName">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Remove a datastream by its name"/>
      </eAnnotations>
      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
        <details key="eventType" value="ogcsta2chart.removeDatastreamByName"/>
      </eAnnotations>
      <eParameters name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Name of the datastream to remove"/>
        </eAnnotations>
      </eParameters>
    </eOperations>
  </eClassifiers>
</ecore:EPackage>
`;
var N = Object.defineProperty, M = Object.getOwnPropertyDescriptor, w = (h, t, e, s) => {
  for (var a = s > 1 ? void 0 : s ? M(t, e) : t, n = h.length - 1, o; n >= 0; n--)
    (o = h[n]) && (a = (s ? o(t, e, a) : o(a)) || a);
  return s && a && N(t, e, a), a;
}, D = (h, t) => (e, s) => t(e, s, h);
let p = class {
  switchThingByName(h) {
    throw new Error("switchThingByName not implemented");
  }
  switchThingById(h) {
    throw new Error("switchThingById not implemented");
  }
};
w([
  b({ eventType: "ogcsta2chart.switchThingByName" }),
  D(0, A())
], p.prototype, "switchThingByName", 1);
w([
  b({ eventType: "ogcsta2chart.switchThingById" }),
  D(0, A())
], p.prototype, "switchThingById", 1);
p = w([
  B({
    type: "http://org.eclipse.daanse.board.app.lib.composer.ogcsta2chart#//OGCSTAToChartComposerInterface"
  })
], p);
const F = Symbol.for("OGCSTAToChartComposer"), f = "OGCSTAToChartComposer", C = R("OGCSTAToChartComposer");
function O({ services: h, log: t }) {
  const e = h.getRequired($);
  h.register(C, (s) => {
    if (!y.validateConfiguration(s))
      throw new Error(
        "Invalid OGCSTAToChartComposer configuration. Please provide a valid configuration."
      );
    const a = new y(
      h.getRequired(G),
      e
    );
    if (a.init(s), s._isTemporaryPreview)
      return a.setInstanceId(`preview-${s.uid || s.name}-${Date.now()}`), a;
    const n = s.uid || s.name || `composer-${Date.now()}`;
    return a.setInstanceId(n), e.registerInstance(n, a, f), a;
  }), e.registerActionsFromEcoreString(
    f,
    _,
    "system",
    "OGCSTAToChartActions.ecore"
  ), t.info(`Aktionen fuer ${f} aus dem Ecore-Modell eingetragen`);
}
function E({ services: h }) {
  h.unregister(C);
}
const L = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OGCSTAToChartComposer: y,
  get OGCSTAToChartComposerInterface() {
    return p;
  },
  OGCSTA_TO_CHART_COMPOSER: C,
  WIDGET_TYPE: f,
  activate: O,
  deactivate: E,
  symbol: F
}, Symbol.toStringTag, { value: "Module" })), I = "org.eclipse.daanse.board.app.lib.composer.ogcsta2chart", k = "0.0.1-next.1";
async function z(h) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${I}: tsm runtime is not initialized`);
  t.register(I, L, k, "lib.composer.ogcsta2chart"), await O?.(h);
}
async function j(h) {
  await E?.(h);
}
export {
  y as OGCSTAToChartComposer,
  p as OGCSTAToChartComposerInterface,
  C as OGCSTA_TO_CHART_COMPOSER,
  f as WIDGET_TYPE,
  z as activate,
  j as deactivate,
  F as symbol
};
