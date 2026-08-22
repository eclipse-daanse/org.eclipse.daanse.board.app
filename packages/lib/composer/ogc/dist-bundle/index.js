const { DATASOURCE_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.datasource");
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { BaseDatasource } = __tsm__.require("org.eclipse.daanse.board.app.lib.datasource.base");
class OgcFeatureComposer extends BaseDatasource {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(datasourceRepository) {
    super();
    this.datasourceRepository = datasourceRepository;
  }
  connectedDatasources = [];
  xField = "";
  yField = "";
  geometryType = "Point";
  composeBy = "";
  useGeometryFromData = false;
  useGeometryFromProps = false;
  geometryField = "";
  geometryPropsField = "";
  init(configuration) {
    super.init(configuration);
    this.connectedDatasources = configuration.connectedDatasources;
    this.composeBy = configuration.composeBy;
    this.useGeometryFromProps = configuration.useGeometryFromProps ?? false;
    this.useGeometryFromData = configuration.useGeometryFromData ?? false;
    console.log(configuration);
    if (configuration.geometryPropsField) {
      this.geometryPropsField = configuration.geometryPropsField?.trim() || "";
    } else if (configuration.geometryField) {
      this.geometryField = configuration.geometryField.trim();
    } else {
      this.xField = configuration.xField.trim();
      this.yField = configuration.yField.trim();
      this.geometryType = configuration.geometryType.trim();
    }
  }
  static validateConfiguration(config) {
    return Array.isArray(config.connectedDatasources);
  }
  async createFeatureCollection() {
    const repo = this.datasourceRepository;
    const datasourcesData = await Promise.all(
      this.connectedDatasources.filter((id) => id).map(async (id) => {
        const datasource = repo.getDatasource(id);
        if (!datasource) return null;
        return await datasource.getData("DataTable");
      })
    );
    const features = [];
    console.log("Datasources data:", datasourcesData);
    if (this.useGeometryFromProps && this.geometryPropsField) {
      for (const data of datasourcesData) {
        if (!data || !Array.isArray(data.items)) continue;
        for (const row of data.items) {
          let geometry = null;
          const caption = row.Caption;
          let property = data.rowProperties?.[caption]?.[this.geometryPropsField];
          if (Array.isArray(property)) property = property[0];
          if (property) {
            try {
              geometry = JSON.parse(property);
            } catch (e) {
              console.warn(`Failed to parse geometry from properties field ${this.geometryPropsField}:`, e);
            }
          }
          features.push({
            type: "Feature",
            geometry,
            properties: { ...row }
          });
        }
      }
      return {
        type: "FeatureCollection",
        features
      };
    }
    if (this.useGeometryFromData && this.geometryField) {
      for (const data of datasourcesData) {
        if (!data || !Array.isArray(data.items)) continue;
        for (const row of data.items) {
          let geometry = null;
          if (row[this.geometryField]) {
            geometry = JSON.parse(row[this.geometryField]);
          }
          features.push({
            type: "Feature",
            geometry,
            properties: { ...row }
          });
        }
      }
      return {
        type: "FeatureCollection",
        features
      };
    }
    for (const data of datasourcesData) {
      if (!data || !Array.isArray(data.items)) continue;
      for (const row of data.items) {
        let geometry = null;
        console.log("Processing row:", row);
        console.log("xField:", this.xField, "yField:", this.yField);
        console.log("row[xField]:", row[this.xField], "row[yField]:", row[this.yField]);
        if (this.xField && this.yField && row[this.xField] != null && row[this.yField] != null) {
          geometry = {
            type: "Point",
            coordinates: [Number(row[this.xField]), Number(row[this.yField])]
          };
        } else if (row.geometry) {
          geometry = row.geometry;
        }
        features.push({
          type: "Feature",
          geometry,
          properties: { ...row }
        });
      }
    }
    return {
      type: "FeatureCollection",
      features
    };
  }
  static async getHeaders(connectedDatasources, datasourceRepository) {
    console.log("Composing headers from", connectedDatasources);
    const data = await Promise.all(
      connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
        if (!datasourceRepository) {
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        }
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        return await datasourceInstance.getData("DataTable");
      })
    );
    return data.reduce((acc, table) => {
      table.headers.forEach((header) => {
        if (!acc.includes(header)) {
          acc.push(header);
        }
      });
      return acc;
    }, []);
  }
  static async getProperties(connectedDatasources, datasourceRepository) {
    console.log("Composing properties from", connectedDatasources);
    const data = await Promise.all(
      connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
        if (!datasourceRepository) {
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        }
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        return await datasourceInstance.getData("DataTable");
      })
    );
    return data.reduce((acc, table) => {
      if (!table || !table.rowProperties) return acc;
      const rows = Object.keys(table.rowProperties);
      if (rows.length === 0) return acc;
      console.log(rows);
      const keys = Object.keys(table.rowProperties[rows[1]] || table.rowProperties[rows[0]] || {});
      keys.forEach((key) => {
        if (!acc.includes(key)) {
          acc.push(key);
        }
      });
      return acc;
    }, []);
  }
  async getData(type) {
    return this.createFeatureCollection();
  }
  getOriginalData() {
    return null;
  }
  callEvent(event, params) {
    console.warn(`Event '${event}' not supported in OgcFeatureComposer`, params);
  }
  destroy() {
    console.log("Destroying OgcFeatureComposer");
  }
}
const OGC_FEATURE_COMPOSER = serviceId("OgcFeatureComposer");
const symbol = Symbol.for(OGC_FEATURE_COMPOSER);
function createOgcFeatureComposer(repository) {
  return (config) => {
    if (!OgcFeatureComposer.validateConfiguration(config)) {
      throw new Error(
        "Invalid OgcFeatureComposer configuration. Please provide a valid configuration."
      );
    }
    const composer = new OgcFeatureComposer(repository);
    composer.init(config);
    return composer;
  };
}
function activate$1({ services }) {
  services.register(OGC_FEATURE_COMPOSER, createOgcFeatureComposer(services.getRequired(DATASOURCE_REPOSITORY)));
}
function deactivate$1({ services }) {
  services.unregister(OGC_FEATURE_COMPOSER);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OGC_FEATURE_COMPOSER,
  OgcFeatureComposer,
  activate: activate$1,
  deactivate: deactivate$1,
  symbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.composer.ogc";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.composer.ogc");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  OGC_FEATURE_COMPOSER,
  OgcFeatureComposer,
  activate,
  deactivate,
  symbol
};
