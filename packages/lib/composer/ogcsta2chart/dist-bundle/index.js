import { WidgetAction, ActionParameter, EVENT_ACTIONS_REGISTRY_ID } from "org.eclipse.daanse.board.app.lib.events";
import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.repository.datasource";
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { BaseDatasource } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { ModelClass } from "org.eclipse.daanse.board.app.lib.annotations";
class OGCSTAToChartComposer extends BaseDatasource {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(datasourceRepository, actionsRegistry) {
    super();
    this.datasourceRepository = datasourceRepository;
    this.actionsRegistry = actionsRegistry;
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
  set datastreams(value) {
    if (this.configuration) {
      this.configuration.datastreams = value;
    }
  }
  destroy() {
    console.log(`Destroying OGCSTAToChartComposer: ${this.instanceId}`);
    if (this.instanceId) {
      try {
        if (this.actionsRegistry) {
          const actionsRegistry = this.actionsRegistry;
          actionsRegistry.unregisterInstance(this.instanceId);
          console.log(`📝 Unregistered OGCSTAToChartComposer instance: ${this.instanceId}`);
        }
      } catch (error) {
        console.warn("Could not unregister composer instance:", error);
      }
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
  setInstanceId(id) {
    this.instanceId = id;
  }
  isUpdating = false;
  pendingUpdate = false;
  cachedData = null;
  cachedThingsStructure = [];
  // Cache Things structure for operation mode
  loadingPromises = /* @__PURE__ */ new Map();
  // Track ongoing loads to prevent duplicates
  requestSessionId = 0;
  // Incremented on each thing switch to invalidate old requests
  static availableTypes = ["ogcsta"];
  init(configuration) {
    super.init(configuration);
    this.configuration = configuration;
    if (!Array.isArray(configuration.datastreams)) {
      configuration.datastreams = [];
    }
    if (!Array.isArray(configuration.thingIds)) {
      configuration.thingIds = [];
    }
    this.connectedDatasources = configuration.connectedDatasources;
    this.thingIds = configuration.thingIds;
    const updateFn = async () => {
      if (this.isUpdating) {
        console.log("🔄 Update already in progress, marking pending update");
        this.pendingUpdate = true;
        return;
      }
      this.isUpdating = true;
      this.pendingUpdate = false;
      try {
        console.log("📊 OGCSTAToChartComposer: Datasource updated, notifying widgets...");
        this.loadingPromises.clear();
        await new Promise((resolve) => setTimeout(resolve, 50));
        this.notify();
        if (this.pendingUpdate) {
          console.log("🔄 Processing pending update");
          this.pendingUpdate = false;
          setTimeout(() => updateFn(), 100);
        }
      } finally {
        this.isUpdating = false;
      }
    };
    const datasourceRepository = this.datasourceRepository;
    this.connectedDatasources.filter((datasourceId) => datasourceId).forEach((ds) => {
      const datasource = datasourceRepository.getDatasource(ds);
      datasource.subscribe(updateFn);
    });
    setTimeout(() => {
      console.log("📊 OGCSTAToChartComposer: Initial notify to load data");
      this.notify();
    }, 100);
  }
  async getData(type, options) {
    const datasourceRepository = this.datasourceRepository;
    const data = await Promise.all(
      this.connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
        if (!datasourceRepository) {
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        }
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        if (this.datastreams.length === 0) {
          console.log("⚠️ No datastreams configured yet");
          return { things: [], datastreams: [], observations: [] };
        }
        let resultMap = datasourceInstance.resultMap;
        if (!resultMap?.datastreams || resultMap.datastreams.length === 0) {
          console.log("📊 OGCSTAToChartComposer: Initializing datasource...");
          try {
            await datasourceInstance.getData("OGCSTAData", { reload: true });
            resultMap = datasourceInstance.resultMap;
            console.log("📊 OGCSTAToChartComposer: Datasource initialized");
          } catch (error) {
            console.error("Failed to initialize datasource:", error);
          }
        }
        console.log(`📊 Reading observations from datastreams in cache`);
        const dsConfig = datasourceInstance.configuration;
        const allObservations = [];
        const missingDatastreams = [];
        if (resultMap?.datastreams) {
          console.log(`✅ Found ${resultMap.datastreams.length} datastreams in cache`);
          for (const ds of this.datastreams) {
            const datastream = resultMap.datastreams.find((d) => d.iotId == ds.datastreamId);
            if (datastream?.observations && datastream.observations.length > 0) {
              console.log(`📊 Found ${datastream.observations.length} observations in datastream ${ds.datastreamId}`);
              datastream.observations.forEach((obs) => {
                obs.ds_source = ds.datastreamId;
                allObservations.push(obs);
              });
            } else {
              console.log(`⚠️ No observations in cache for datastream ${ds.datastreamId}, will load directly`);
              missingDatastreams.push(ds);
            }
          }
        } else {
          console.log(`⚠️ No datastreams in cache, will load all directly`);
          missingDatastreams.push(...this.datastreams);
        }
        if (missingDatastreams.length > 0) {
          console.log(`📊 Loading ${missingDatastreams.length} missing datastreams directly`);
          const historyConfig = dsConfig?.history || {
            enabled: true,
            phenomenonTime: {
              startVariable: dsConfig?.history?.phenomenonTime?.startVariable,
              endVariable: dsConfig?.history?.phenomenonTime?.endVariable
            }
          };
          for (const ds of missingDatastreams) {
            try {
              const loadKey = `${datasourceId}:${ds.datastreamId}`;
              if (this.loadingPromises.has(loadKey)) {
                console.log(`⏳ Already loading datastream ${ds.datastreamId}, reusing promise`);
                const observations = await this.loadingPromises.get(loadKey);
                observations.forEach((obs) => {
                  allObservations.push(obs);
                });
              } else {
                console.log(`📊 Loading observations for missing datastream ${ds.datastreamId}`);
                const loadPromise = datasourceInstance.getHistoricalObservations(
                  ds.datastreamId,
                  historyConfig
                ).then((observations2) => {
                  observations2.forEach((obs) => {
                    obs.ds_source = ds.datastreamId;
                  });
                  console.log(`✅ Loaded ${observations2.length} observations for ${ds.datastreamId}`);
                  setTimeout(() => this.loadingPromises.delete(loadKey), 100);
                  return observations2;
                }).catch((error) => {
                  this.loadingPromises.delete(loadKey);
                  console.error(`❌ Failed to load observations for ${ds.datastreamId}:`, error);
                  throw error;
                });
                this.loadingPromises.set(loadKey, loadPromise);
                const observations = await loadPromise;
                observations.forEach((obs) => {
                  allObservations.push(obs);
                });
              }
            } catch (error) {
              console.error(`Error loading observations for ${ds.datastreamId}:`, error);
            }
          }
        }
        console.log(`✅ Total observations collected: ${allObservations.length}`);
        return {
          things: resultMap?.things || [],
          datastreams: resultMap?.datastreams || [],
          observations: allObservations
        };
      })
    );
    if (type === "ChartData") {
      const chartData = this.composeChartData(data);
      this.cachedData = chartData;
      return chartData;
    } else if (type === "DataTable") {
      const tableData = this.composeDataTable(data);
      this.cachedData = tableData;
      return tableData;
    } else {
      console.warn("Invalid data type for OGCSTAToChartComposer");
      return null;
    }
  }
  async getOriginalData() {
    return [];
  }
  callEvent(event, params) {
    if (event === "switchThingByName" && params?.name) {
      this.switchThingByName(params.name);
      return;
    }
    if (event === "switchThingById" && params?.id) {
      this.switchThingById(params.id);
      return;
    }
    console.warn(`Event "${event}" is not available for OGCSTAToChartComposer`, params);
  }
  /**
   * Switch to a different Thing by its name
   * @param name - The name of the Thing to switch to
   */
  async switchThingByName(name) {
    console.log(`🔄 OGCSTAToChartComposer: Switching thing by name: "${name}"`);
    const thing = await this.findThingByName(name);
    if (thing) {
      const thingId = thing["@iot.id"] || thing.iotId;
      await this.switchToThing(thingId, thing);
    } else {
      console.warn(`⚠️ Thing with name "${name}" not found`);
    }
  }
  /**
    * Switch to a different Thing by its ID
    * @param id - The ID of the Thing to switch to
    */
  async switchThingById(id) {
    console.log(`🔄 OGCSTAToChartComposer: Switching thing by id: "${id}"`);
    const thing = await this.findThingById(id);
    if (thing) {
      await this.switchToThing(id, thing);
    } else {
      console.warn(`⚠️ Thing with id "${id}" not found`);
    }
  }
  /**
   * Find a Thing by its name from connected datasources
   */
  async findThingByName(name) {
    await this.refreshThingsCache();
    const thing = this.allThingsCache.find((t) => {
      const thingName = t.name || t.Name;
      return thingName === name || thingName?.toLowerCase() === name.toLowerCase();
    });
    return thing || null;
  }
  /**
   * Find a Thing by its ID from connected datasources
   */
  async findThingById(id) {
    await this.refreshThingsCache();
    const thing = this.allThingsCache.find((t) => {
      const thingId = t["@iot.id"] || t.iotId;
      return thingId == id;
    });
    return thing || null;
  }
  /**
   * Refresh the cache of all things from connected datasources
   */
  async refreshThingsCache() {
    if (this.allThingsCache.length > 0) {
      return;
    }
    const datasourceRepository = this.datasourceRepository;
    for (const datasourceId of this.connectedDatasources) {
      if (!datasourceId) continue;
      try {
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        const resultMap = datasourceInstance.resultMap;
        if (resultMap?.things && resultMap.things.length > 0) {
          this.allThingsCache.push(...resultMap.things);
        } else {
          const data = await datasourceInstance.getData("OGCSTAData", {
            isolatedRequest: true,
            filter: {
              things: {
                includeDatastreams: true,
                includeLocations: false
              }
            }
          });
          if (data?.things) {
            this.allThingsCache.push(...data.things);
          }
        }
      } catch (error) {
        console.error(`Error loading things from datasource ${datasourceId}:`, error);
      }
    }
    console.log(`📦 Cached ${this.allThingsCache.length} things for lookup`);
  }
  /**
   * Load datastreams for a specific thing if not already loaded
   */
  async loadDatastreamsForThing(thingId) {
    const thing = this.allThingsCache.find((t) => {
      const tId = t["@iot.id"] || t.iotId;
      return tId == thingId;
    });
    if (thing?.datastreams && thing.datastreams.length > 0) {
      console.log(`📦 Thing ${thingId} already has ${thing.datastreams.length} datastreams cached`);
      return thing;
    }
    console.log(`📡 Loading datastreams for thing ${thingId}...`);
    const datasourceRepository = this.datasourceRepository;
    for (const datasourceId of this.connectedDatasources) {
      if (!datasourceId) continue;
      try {
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        const data = await datasourceInstance.getData("OGCSTAData", {
          isolatedRequest: true,
          filter: {
            things: {
              ids: [thingId],
              includeDatastreams: true,
              includeLocations: false
            }
          }
        });
        if (data?.things && data.things.length > 0) {
          const loadedThing = data.things[0];
          console.log(`✅ Loaded ${loadedThing.datastreams?.length || 0} datastreams for thing ${thingId}`);
          if (thing) {
            thing.datastreams = loadedThing.datastreams;
          } else {
            this.allThingsCache.push(loadedThing);
          }
          return thing || loadedThing;
        }
      } catch (error) {
        console.error(`Error loading datastreams for thing ${thingId}:`, error);
      }
    }
    return thing;
  }
  /**
   * Switch to a specific thing (without changing datastreams)
   * Use addDatastreamsByName or similar actions to configure datastreams separately
   */
  async switchToThing(thingId, thing) {
    console.log(`🔄 Switching to thing: ${thingId} (${thing.name || "unnamed"})`);
    this.requestSessionId++;
    console.log(`🔄 New request session: ${this.requestSessionId}`);
    this.loadingPromises.clear();
    this.thingIds = [thingId];
    if (this.configuration) {
      this.configuration.thingIds.splice(0, this.configuration.thingIds.length, thingId);
    }
    this.cachedData = null;
  }
  /**
   * Add datastreams by name pattern
   * @param name - The name (or part of name) of datastreams to add
   */
  async addDatastreamsByName(name) {
    console.log(`➕ OGCSTAToChartComposer: Adding datastreams by name: "${name}"`);
    await this.refreshThingsCache();
    const matchingDatastreams = [];
    for (const thingId of this.thingIds) {
      const thing = await this.loadDatastreamsForThing(thingId);
      if (!thing) {
        console.warn(`⚠️ Thing ${thingId} not found`);
        continue;
      }
      if (thing.datastreams) {
        for (const ds of thing.datastreams) {
          const dsName = ds.name || "";
          const dsId = String(ds["@iot.id"] || ds.iotId);
          if (dsName === name || dsName.toLowerCase().includes(name.toLowerCase())) {
            const alreadyExists = this.datastreams.some((d) => d.datastreamId === dsId);
            if (!alreadyExists) {
              matchingDatastreams.push({
                datastreamId: dsId,
                label: dsName,
                color: this.generateColor()
              });
            }
          }
        }
      }
    }
    if (matchingDatastreams.length > 0) {
      console.log(`✅ Found ${matchingDatastreams.length} matching datastream(s)`, matchingDatastreams);
      this.datastreams.push(...matchingDatastreams);
      console.log(`📊 Total datastreams now: ${this.datastreams.length}`, this.datastreams);
      this.cachedData = null;
      console.log(`🔔 Calling notify() on instance ${this.instanceId}`);
      this.notify();
    } else {
      console.warn(`⚠️ No datastreams matching "${name}" found in instance ${this.instanceId}`);
    }
  }
  /**
   * Remove all datastreams from the composer
   */
  removeAllDatastreams() {
    console.log(`🗑️ OGCSTAToChartComposer: Removing all datastreams`);
    this.datastreams.splice(0, this.datastreams.length);
    this.cachedData = null;
    this.notify();
  }
  /**
   * Remove a specific datastream by name
   * @param name - The name of the datastream to remove
   */
  removeDatastreamByName(name) {
    console.log(`🗑️ OGCSTAToChartComposer: Removing datastream by name: "${name}"`);
    const initialLength = this.datastreams.length;
    const indicesToRemove = [];
    this.datastreams.forEach((ds, index) => {
      const dsLabel = ds.label || "";
      if (dsLabel === name || dsLabel.toLowerCase().includes(name.toLowerCase())) {
        indicesToRemove.push(index);
      }
    });
    for (let i = indicesToRemove.length - 1; i >= 0; i--) {
      this.datastreams.splice(indicesToRemove[i], 1);
    }
    const removedCount = initialLength - this.datastreams.length;
    if (removedCount > 0) {
      console.log(`✅ Removed ${removedCount} datastream(s)`);
      this.cachedData = null;
      this.notify();
    } else {
      console.warn(`⚠️ No datastreams matching "${name}" found to remove`);
    }
  }
  composeChartData(ogcStaDataArray) {
    const chartData = {
      labels: [],
      datasets: []
    };
    console.log("📊 OGCSTAToChartComposer: Starting chart data composition");
    const allTimestamps = /* @__PURE__ */ new Set();
    const datastreamObservations = /* @__PURE__ */ new Map();
    this.datastreams.forEach((datastreamSelection) => {
      const observationsByTimestamp = /* @__PURE__ */ new Map();
      for (const ogcStaData of ogcStaDataArray) {
        if (ogcStaData?.observations && ogcStaData.observations.length > 0) {
          const relevantObservations = ogcStaData.observations.filter((obs) => {
            const obsDatastreamId = obs.ds_source || obs["Datastream@iot.navigationLink"]?.match(/Datastreams\((.+?)\)/)?.[1] || obs.datastreamId;
            return obsDatastreamId == datastreamSelection.datastreamId;
          });
          console.log(`📊 Found ${relevantObservations.length} observations for datastream ${datastreamSelection.datastreamId}`);
          relevantObservations.forEach((obs) => {
            const timestamp = obs.phenomenonTime || obs.resultTime || (/* @__PURE__ */ new Date()).toISOString();
            allTimestamps.add(timestamp);
            observationsByTimestamp.set(timestamp, obs.result);
          });
        }
        if (ogcStaData?.things) {
          for (const thing of ogcStaData.things) {
            if (!thing.datastreams) continue;
            const datastream = thing.datastreams.find((ds) => {
              const dsId = ds["@iot.id"] || ds.iotId;
              return dsId === datastreamSelection.datastreamId;
            });
            if (datastream && datastream.observations && datastream.observations.length > 0) {
              datastream.observations.forEach((obs) => {
                const timestamp = obs.phenomenonTime || obs.resultTime || (/* @__PURE__ */ new Date()).toISOString();
                allTimestamps.add(timestamp);
                observationsByTimestamp.set(timestamp, obs.result);
              });
            }
          }
        }
      }
      datastreamObservations.set(datastreamSelection.datastreamId, observationsByTimestamp);
    });
    const sortedTimestamps = Array.from(allTimestamps).sort();
    chartData.labels = sortedTimestamps;
    this.datastreams.forEach((datastreamSelection) => {
      const observations = datastreamObservations.get(datastreamSelection.datastreamId) || /* @__PURE__ */ new Map();
      const dataset = {
        label: datastreamSelection.label || datastreamSelection.datastreamId,
        data: sortedTimestamps.map((ts) => observations.get(ts) ?? null),
        backgroundColor: datastreamSelection.color || this.generateColor(),
        borderColor: datastreamSelection.color || this.generateColor()
      };
      chartData.datasets.push(dataset);
    });
    console.log("📊 Chart data composed:", chartData);
    return chartData;
  }
  composeDataTable(ogcStaDataArray) {
    const dataTable = {
      headers: ["Datastream", "Value", "Unit", "Timestamp"],
      rows: [],
      items: []
    };
    console.log("📊 OGCSTAToChartComposer: Starting data table composition");
    this.datastreams.forEach((datastreamSelection) => {
      for (const ogcStaData of ogcStaDataArray) {
        if (ogcStaData?.observations && ogcStaData.observations.length > 0) {
          const relevantObservations = ogcStaData.observations.filter((obs) => {
            const obsDatastreamId = obs.ds_source || obs["Datastream@iot.navigationLink"]?.match(/Datastreams\((.+?)\)/)?.[1] || obs.datastreamId;
            return obsDatastreamId == datastreamSelection.datastreamId;
          });
          relevantObservations.forEach((observation) => {
            const item = {
              datastream: datastreamSelection.label || datastreamSelection.datastreamId,
              value: observation.result,
              unit: "",
              // Unit not available in observation-only mode
              timestamp: observation.phenomenonTime || observation.resultTime || ""
            };
            dataTable.items.push(item);
            dataTable.rows.push([
              item.datastream,
              item.value,
              item.unit,
              item.timestamp
            ]);
          });
        }
        if (ogcStaData?.things) {
          for (const thing of ogcStaData.things) {
            if (!thing.datastreams) continue;
            const datastream = thing.datastreams.find((ds) => {
              const dsId = ds["@iot.id"] || ds.iotId;
              return dsId === datastreamSelection.datastreamId;
            });
            if (datastream && datastream.observations && datastream.observations.length > 0) {
              datastream.observations.forEach((observation) => {
                const item = {
                  datastream: datastreamSelection.label || datastream.name,
                  value: observation.result,
                  unit: datastream.unitOfMeasurement?.symbol || "",
                  timestamp: observation.phenomenonTime || observation.resultTime || ""
                };
                dataTable.items.push(item);
                dataTable.rows.push([
                  item.datastream,
                  item.value,
                  item.unit,
                  item.timestamp
                ]);
              });
            }
          }
        }
      }
    });
    console.log("📊 Data table composed:", dataTable);
    return dataTable;
  }
  generateColor() {
    const colors = [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#4BC0C0",
      "#9966FF",
      "#FF9F40",
      "#FF6384",
      "#C9CBCF"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  static validateConfiguration(config) {
    if (!config.connectedDatasources || !Array.isArray(config.connectedDatasources)) {
      return false;
    }
    if (config.connectedDatasources.length === 0) {
      return false;
    }
    if (!config.datastreams || !Array.isArray(config.datastreams)) {
      return false;
    }
    return true;
  }
  // Helper to get available datastreams from connected datasources
  static async getAvailableDatastreams(connectedDatasources, thingIds, datasourceRepository) {
    if (!datasourceRepository) {
      throw new Error("DatasourceRepository is required");
    }
    if (!thingIds || thingIds.length === 0) {
      return [];
    }
    const allDatastreams = [];
    for (const datasourceId of connectedDatasources) {
      const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
      const options = {
        isolatedRequest: true,
        // Don't affect cache, only load for UI
        filter: {
          things: {
            ids: thingIds,
            includeDatastreams: true,
            includeLocations: false
          }
        }
      };
      const data = await datasourceInstance.getData("OGCSTAData", options);
      if (data?.things) {
        for (const thing of data.things) {
          if (thing.datastreams) {
            thing.datastreams.forEach((ds) => {
              allDatastreams.push({
                id: ds["@iot.id"] || ds.iotId,
                name: ds.name,
                description: ds.description,
                unit: ds.unitOfMeasurement?.symbol || "",
                thingId: thing["@iot.id"] || thing.iotId,
                thingName: thing.name
              });
            });
          }
        }
      }
    }
    return allDatastreams;
  }
}
const ecoreModelContent = '<?xml version="1.0" encoding="UTF-8"?>\n<!--\n  Copyright (c) 2025 Contributors to the Eclipse Foundation.\n\n  This program and the accompanying materials are made\n  available under the terms of the Eclipse Public License 2.0\n  which is available at https://www.eclipse.org/legal/epl-2.0/\n\n  SPDX-License-Identifier: EPL-2.0\n\n  Contributors:\n    Smart City Jena\n-->\n<ecore:EPackage xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="ogcsta2chartactions"\n    nsURI="http://org.eclipse.daanse.board.app.lib.composer.ogcsta2chart.actions"\n    nsPrefix="ogcsta2chartactions">\n\n  <eClassifiers xsi:type="ecore:EClass" name="OGCSTAToChartComposerActions" interface="true" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//SystemActionInterface">\n    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n      <details key="documentation" value="Actions for the OGC STA to Chart Composer"/>\n    </eAnnotations>\n\n    <eOperations name="switchThingByName">\n      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n        <details key="documentation" value="Switch the active Thing in the composer by its name"/>\n      </eAnnotations>\n      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">\n        <details key="eventType" value="ogcsta2chart.switchThingByName"/>\n      </eAnnotations>\n      <eParameters name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Name of the Thing to switch to"/>\n        </eAnnotations>\n      </eParameters>\n    </eOperations>\n\n    <eOperations name="switchThingById">\n      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n        <details key="documentation" value="Switch the active Thing in the composer by its ID"/>\n      </eAnnotations>\n      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">\n        <details key="eventType" value="ogcsta2chart.switchThingById"/>\n      </eAnnotations>\n      <eParameters name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="ID of the Thing to switch to"/>\n        </eAnnotations>\n      </eParameters>\n    </eOperations>\n\n    <eOperations name="addDatastreamsByName">\n      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n        <details key="documentation" value="Add datastreams matching the given name pattern"/>\n      </eAnnotations>\n      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">\n        <details key="eventType" value="ogcsta2chart.addDatastreamsByName"/>\n      </eAnnotations>\n      <eParameters name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Name or pattern of datastreams to add"/>\n        </eAnnotations>\n      </eParameters>\n    </eOperations>\n\n    <eOperations name="removeAllDatastreams">\n      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n        <details key="documentation" value="Remove all datastreams from the composer"/>\n      </eAnnotations>\n      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">\n        <details key="eventType" value="ogcsta2chart.removeAllDatastreams"/>\n      </eAnnotations>\n    </eOperations>\n\n    <eOperations name="removeDatastreamByName">\n      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n        <details key="documentation" value="Remove a datastream by its name"/>\n      </eAnnotations>\n      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">\n        <details key="eventType" value="ogcsta2chart.removeDatastreamByName"/>\n      </eAnnotations>\n      <eParameters name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">\n        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">\n          <details key="documentation" value="Name of the datastream to remove"/>\n        </eAnnotations>\n      </eParameters>\n    </eOperations>\n  </eClassifiers>\n</ecore:EPackage>\n';
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
let OGCSTAToChartComposerInterface = class {
  switchThingByName(name) {
    throw new Error("switchThingByName not implemented");
  }
  switchThingById(id) {
    throw new Error("switchThingById not implemented");
  }
};
__decorateClass([
  WidgetAction({ eventType: "ogcsta2chart.switchThingByName" }),
  __decorateParam(0, ActionParameter())
], OGCSTAToChartComposerInterface.prototype, "switchThingByName", 1);
__decorateClass([
  WidgetAction({ eventType: "ogcsta2chart.switchThingById" }),
  __decorateParam(0, ActionParameter())
], OGCSTAToChartComposerInterface.prototype, "switchThingById", 1);
OGCSTAToChartComposerInterface = __decorateClass([
  ModelClass({
    type: "http://org.eclipse.daanse.board.app.lib.composer.ogcsta2chart#//OGCSTAToChartComposerInterface"
  })
], OGCSTAToChartComposerInterface);
const symbol = Symbol.for("OGCSTAToChartComposer");
const WIDGET_TYPE = "OGCSTAToChartComposer";
const OGCSTA_TO_CHART_COMPOSER = serviceId("OGCSTAToChartComposer");
function activate$1({ services, log }) {
  const actionsRegistry = services.getRequired(EVENT_ACTIONS_REGISTRY_ID);
  services.register(OGCSTA_TO_CHART_COMPOSER, (config) => {
    if (!OGCSTAToChartComposer.validateConfiguration(config)) {
      throw new Error(
        "Invalid OGCSTAToChartComposer configuration. Please provide a valid configuration."
      );
    }
    const composer = new OGCSTAToChartComposer(
      services.getRequired(DATASOURCE_REPOSITORY),
      actionsRegistry
    );
    composer.init(config);
    if (config._isTemporaryPreview) {
      composer.setInstanceId(`preview-${config.uid || config.name}-${Date.now()}`);
      return composer;
    }
    const instanceId = config.uid || config.name || `composer-${Date.now()}`;
    composer.setInstanceId(instanceId);
    actionsRegistry.registerInstance(instanceId, composer, WIDGET_TYPE);
    return composer;
  });
  actionsRegistry.registerActionsFromEcoreString(
    WIDGET_TYPE,
    ecoreModelContent,
    "system",
    "OGCSTAToChartActions.ecore"
  );
  log.info(`Aktionen fuer ${WIDGET_TYPE} aus dem Ecore-Modell eingetragen`);
}
function deactivate$1({ services }) {
  services.unregister(OGCSTA_TO_CHART_COMPOSER);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OGCSTAToChartComposer,
  get OGCSTAToChartComposerInterface() {
    return OGCSTAToChartComposerInterface;
  },
  OGCSTA_TO_CHART_COMPOSER,
  WIDGET_TYPE,
  activate: activate$1,
  deactivate: deactivate$1,
  symbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.composer.ogcsta2chart";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.composer.ogcsta2chart");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  OGCSTAToChartComposer,
  OGCSTAToChartComposerInterface,
  OGCSTA_TO_CHART_COMPOSER,
  WIDGET_TYPE,
  activate,
  deactivate,
  symbol
};
