const { DATASOURCE_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.datasource");
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { BaseDatasource } = __tsm__.require("org.eclipse.daanse.board.app.lib.datasource.base");
class WeatherComposer extends BaseDatasource {
  /**
   * Dependencies arrive through the constructor - the factory in this
   * package's activate passes them from the registry. No global lookups.
   */
  constructor(datasourceRepository) {
    super();
    this.datasourceRepository = datasourceRepository;
  }
  destroy() {
    console.log("Destroying WeatherComposer");
  }
  connectedDatasources = [];
  thingId;
  customMapping;
  isUpdating = false;
  pendingUpdate = false;
  cachedData = null;
  lastRelevantThings = /* @__PURE__ */ new Set();
  // Default mapping for weather data streams
  defaultMapping = {
    temperature: [
      "currentweather~tempabovesurface5",
      "temperature",
      "temp",
      "temperatur",
      "lufttemperatur",
      "air_temperature",
      "airtemperature",
      "tempabovesurface"
    ],
    humidity: [
      "humidity",
      "feuchte",
      "luftfeuchte",
      "relative_humidity",
      "relativehumidity",
      "rh"
    ],
    pressure: [
      "currentWeather~surfacePressure",
      "luftdruck",
      "air_pressure",
      "airpressure",
      "surfacepressure",
      "atmospheric_pressure"
    ],
    windSpeed: [
      "~currentWeather~windSpeed",
      "windgeschwindigkeit",
      "wind_speed",
      "wind",
      "windvelocity"
    ],
    windDirection: [
      "~currentWeather~windDirection",
      "windrichtung",
      "wind_direction",
      "winddirection",
      "winddir"
    ],
    precipitation: [
      "~currentWeather~precipitationSignificantWeatherTotal",
      "niederschlag",
      "rain",
      "regen",
      "rainfall",
      "precipitationamount",
      "precipitationlarger"
    ],
    visibility: [
      "~currentWeather~visibility",
      "sicht",
      "sichtweite",
      "visual_range"
    ],
    cloudCover: [
      "~currentWeather~cloudCoverEffective",
      "wolken",
      "bedeckung",
      "cloud_cover",
      "cloudcoverbelow",
      "cloudcovertotal",
      "cloudcovereffective"
    ],
    // Forecast mappings for different time periods
    temperatureForecast: {
      forecast3h: ["~forecast3H~tempAboveSurface5", "temp3h", "temperature3h", "temp_3h"],
      forecast6h: ["~forecast6H~tempAboveSurface5", "temp6h", "temperature6h", "temp_6h"],
      forecast9h: ["~forecast9H~tempAboveSurface5", "temp9h", "temperature9h", "temp_9h"],
      forecast12h: ["~forecast12H~tempAboveSurface5", "forecast12h~tempabovesurface5", "temp12h", "temperature12h", "temp_12h"],
      forecast24h: ["~forecast24H~tempAboveSurface5", "temp24h", "temperature24h", "temp_24h"],
      forecast36h: ["~forecast36H~tempAboveSurface5", "temp36h", "temperature36h", "temp_36h"],
      forecast48h: ["~forecast48H~tempAboveSurface5", "temp48h", "temperature48h", "temp_48h"],
      forecast60h: ["~forecast60H~tempAboveSurface5", "temp60h", "temperature60h", "temp_60h"],
      forecast72h: ["~forecast72H~tempAboveSurface5", "temp72h", "temperature72h", "temp_72h"]
    },
    humidityForecast: {
      forecast12h: ["forecast12h~humidity", "humidity12h", "feuchte12h", "rh12h"],
      forecast24h: ["forecast24h~humidity", "humidity24h", "feuchte24h", "rh24h"],
      forecast36h: ["forecast36h~humidity", "humidity36h", "feuchte36h", "rh36h"],
      forecast48h: ["forecast48h~humidity", "humidity48h", "feuchte48h", "rh48h"],
      forecast60h: ["forecast60h~humidity", "humidity60h", "feuchte60h", "rh60h"],
      forecast72h: ["forecast72h~humidity", "humidity72h", "feuchte72h", "rh72h"]
    },
    pressureForecast: {
      forecast12h: ["~forecast12H~surfacePressure", "forecast12h~pressure", "pressure12h", "luftdruck12h"],
      forecast24h: ["~forecast24H~surfacePressure", "pressure24h", "luftdruck24h"],
      forecast36h: ["~forecast36H~surfacePressure", "pressure36h", "luftdruck36h"],
      forecast48h: ["~forecast48H~surfacePressure", "pressure48h", "luftdruck48h"],
      forecast60h: ["~forecast60H~surfacePressure", "pressure60h", "luftdruck60h"],
      forecast72h: ["~forecast72H~surfacePressure", "pressure72h", "luftdruck72h"]
    },
    windSpeedForecast: {
      forecast12h: ["~forecast12H~windSpeed", "windspeed12h", "wind12h"],
      forecast24h: ["~forecast24H~windSpeed", "windspeed24h", "wind24h"],
      forecast36h: ["~forecast36H~windSpeed", "windspeed36h", "wind36h"],
      forecast48h: ["~forecast48H~windSpeed", "windspeed48h", "wind48h"],
      forecast60h: ["~forecast60H~windSpeed", "windspeed60h", "wind60h"],
      forecast72h: ["~forecast72H~windSpeed", "windspeed72h", "wind72h"]
    },
    windDirectionForecast: {
      forecast12h: ["~forecast12H~windDirection", "winddirection12h", "windrichtung12h"],
      forecast24h: ["~forecast24H~windDirection", "winddirection24h", "windrichtung24h"],
      forecast36h: ["~forecast36H~windDirection", "winddirection36h", "windrichtung36h"],
      forecast48h: ["~forecast48H~windDirection", "winddirection48h", "windrichtung48h"],
      forecast60h: ["~forecast60H~windDirection", "winddirection60h", "windrichtung60h"],
      forecast72h: ["~forecast72H~windDirection", "winddirection72h", "windrichtung72h"]
    },
    precipitationForecast: {
      forecast12h: ["~forecast12H~precipitationSignificantWeatherTotal", "~forecast12H~precipitationSignificantWeatherTotal", "forecast12h~precipitation", "precipitation12h", "niederschlag12h"],
      forecast24h: ["~forecast24H~precipitationSignificantWeatherTotal", "precipitation24h", "niederschlag24h"],
      forecast36h: ["~forecast36H~precipitationSignificantWeatherTotal", "precipitation36h", "niederschlag36h"],
      forecast48h: ["~forecast48H~precipitationSignificantWeatherTotal", "precipitation48h", "niederschlag48h"],
      forecast60h: ["~forecast60H~precipitationSignificantWeatherTotal", "precipitation60h", "niederschlag60h"],
      forecast72h: ["~forecast72H~precipitationSignificantWeatherTotal", "precipitation72h", "niederschlag72h"]
    },
    visibilityForecast: {
      forecast12h: ["~forecast12H~visibility", "visibility12h", "sicht12h"],
      forecast24h: ["~forecast24H~visibility", "visibility24h", "sicht24h"],
      forecast36h: ["~forecast36H~visibility", "visibility36h", "sicht36h"],
      forecast48h: ["~forecast48H~visibility", "visibility48h", "sicht48h"],
      forecast60h: ["~forecast60H~visibility", "visibility60h", "sicht60h"],
      forecast72h: ["~forecast72H~visibility", "visibility72h", "sicht72h"]
    },
    cloudCoverForecast: {
      forecast12h: ["~forecast12H~cloudCoverTotal", "~forecast12H~cloudCoverEffective", "forecast12h~cloudcover", "cloudcover12h", "bedeckung12h"],
      forecast24h: ["~forecast24H~cloudCoverTotal", "cloudcover24h", "bedeckung24h"],
      forecast36h: ["~forecast36H~cloudCoverTotal", "cloudcover36h", "bedeckung36h"],
      forecast48h: ["~forecast48H~cloudCoverTotal", "cloudcover48h", "bedeckung48h"],
      forecast60h: ["~forecast60H~cloudCoverTotal", "cloudcover60h", "bedeckung60h"],
      forecast72h: ["~forecast72H~cloudCoverTotal", "cloudcover72h", "bedeckung72h"]
    }
  };
  static availableTypes = ["ogcsta"];
  init(configuration) {
    super.init(configuration);
    this.connectedDatasources = configuration.connectedDatasources;
    this.thingId = configuration.thingId;
    this.customMapping = configuration.customMapping;
  }
  async getData(type, options) {
    const datasourceRepository = this.datasourceRepository;
    const data = await Promise.all(
      this.connectedDatasources.filter((datasourceId) => datasourceId).map(async (datasourceId) => {
        if (!datasourceRepository) {
          throw new Error("DatasourceRepository is not provided to DataSource Classes");
        }
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        const datasourceOptions = this.thingId ? {
          ...options,
          filter: {
            things: {
              ids: [this.thingId],
              includeDatastreams: true,
              includeLocations: true
            }
          }
        } : {
          ...options,
          filter: {
            things: {
              all: {
                includeDatastreams: true,
                includeLocations: true
              }
            }
          }
        };
        let dat = await datasourceInstance.getData("OGCSTAData", datasourceOptions);
        console.log("Weather Composer: Things and Datastreams loaded (no observations):", dat);
        if (dat?.things) {
          const relevantDatastreams = [];
          const mapping = { ...this.defaultMapping, ...this.customMapping };
          const foundParameters = /* @__PURE__ */ new Set();
          for (const thing of dat.things) {
            if (thing.datastreams && thing.datastreams.length > 0) {
              console.log(`🔍 Checking ${thing.datastreams.length} datastreams for thing ${thing.name}`);
              for (const datastream of thing.datastreams) {
                if (foundParameters.size >= Object.keys(mapping).length) {
                  console.log("🎯 All weather parameters found, stopping search");
                  break;
                }
                const name = datastream.name?.toLowerCase() || "";
                const description = datastream.description?.toLowerCase() || "";
                const searchText = `${name} ${description}`;
                const id = datastream.iotId;
                console.log(`🔍 Available datastream: "${datastream.name}" (ID: ${id}) - searchText: "${searchText}"`);
                for (const [weatherParam, keywords] of Object.entries(mapping)) {
                  if (foundParameters.has(weatherParam) && !weatherParam.endsWith("Forecast")) {
                    continue;
                  }
                  if (weatherParam.endsWith("Forecast") && typeof keywords === "object" && !Array.isArray(keywords)) {
                    for (const [forecastPeriod, forecastKeywords] of Object.entries(keywords)) {
                      if (Array.isArray(forecastKeywords)) {
                        if (forecastKeywords.some((keyword) => id.includes(keyword) || searchText.includes(keyword))) {
                          console.log(`🎯 Found relevant datastream: ${datastream.name} (${id}) for ${weatherParam}.${forecastPeriod}`);
                          relevantDatastreams.push({
                            ...datastream,
                            thingId: thing["@iot.id"] || thing.iotId,
                            // Add thing reference
                            weatherParam,
                            // Track which parameter this is for
                            forecastPeriod
                            // Track which forecast period
                          });
                        }
                      }
                    }
                  } else if (Array.isArray(keywords)) {
                    if (keywords.includes(id) || keywords.some((keyword) => searchText.includes(keyword))) {
                      console.log(`🎯 Found relevant datastream: ${datastream.name} (${id}) for ${weatherParam}`);
                      relevantDatastreams.push({
                        ...datastream,
                        thingId: thing["@iot.id"] || thing.iotId,
                        // Add thing reference
                        weatherParam
                        // Track which parameter this is for
                      });
                      foundParameters.add(weatherParam);
                      break;
                    }
                  }
                }
              }
              if (foundParameters.size >= Object.keys(mapping).length) {
                console.log("🎯 All weather parameters found in current thing, stopping thing search");
                break;
              }
            }
          }
          console.log(`🎯 Found weather parameters: ${Array.from(foundParameters).join(", ")}`);
          if (relevantDatastreams.length > 0) {
            console.log(`📊 Loading observations for ${relevantDatastreams.length} relevant datastreams (out of total available)`);
            const datastreamWithoutObs = relevantDatastreams.filter((ds) => {
              const matchingInThing = dat.things.find(
                (thing) => thing.datastreams?.find(
                  (thingDs) => (thingDs["@iot.id"] || thingDs.iotId) == ds["@iot.id"] || ds.iotId
                )
              )?.datastreams?.find(
                (thingDs) => (thingDs["@iot.id"] || thingDs.iotId) == (ds["@iot.id"] || ds.iotId)
              );
              const hasObservations = matchingInThing?.observations && matchingInThing.observations.length > 0;
              console.log(`🔍 Datastream ${ds.name} has observations: ${hasObservations}`);
              return !hasObservations;
            });
            if (datastreamWithoutObs.length > 0) {
              console.log(`📊 Loading observations for ${datastreamWithoutObs.length} datastreams without observations`);
              const observationsOptions = {
                ...options,
                filter: {
                  observations: datastreamWithoutObs.map((ds) => {
                    const datastreamId = ds["@iot.id"] || ds.iotId || ds.id;
                    console.log(`🔍 Mapping datastream for observations: ${ds.name} -> ID: ${datastreamId}`);
                    if (!datastreamId) {
                      console.error("❌ No datastream ID found for datastream:", ds);
                    }
                    return {
                      iotId: datastreamId,
                      // OGC STA expects iotId, not datastreamId
                      $top: 1,
                      $orderby: "phenomenonTime desc"
                    };
                  }).filter((obs) => obs.iotId !== void 0 && obs.iotId !== null)
                }
              };
              const observationsData = await datasourceInstance.getData("OGCSTAData", observationsOptions);
              if (observationsData?.observations) {
                console.log(`✅ Received ${observationsData.observations.length} observations`);
                dat.things.forEach((thing) => {
                  if (thing.datastreams) {
                    thing.datastreams.forEach((ds) => {
                      const observation = observationsData.observations?.find(
                        (obs) => obs.ds_source == ds["@iot.id"] || obs.ds_source == ds.iotId
                      );
                      if (observation) {
                        ds.observations = [observation];
                        console.log(`✅ Added observation to ${ds.name}: ${observation.result}`);
                      }
                    });
                  }
                });
              }
            } else {
              console.log("ℹ️ All relevant datastreams already have observations, skipping observation fetch");
            }
          } else {
            console.log("⚠️ No relevant datastreams found for weather mapping");
          }
        }
        console.log(dat);
        return dat;
      })
    );
    if (type === "WeatherData") {
      const weatherData = this.composeWeatherData(data);
      this.cachedData = weatherData;
      return weatherData;
    } else {
      console.warn("Invalid data type for WeatherComposer");
      return null;
    }
  }
  async getOriginalData() {
    return [];
  }
  callEvent(event, params) {
    console.warn(`Event "${event}" is not available for WeatherComposer`, params);
  }
  composeWeatherData(ogcStaDataArray) {
    const weatherDataArray = [];
    console.log("🌤️ WeatherComposer: Starting data composition", ogcStaDataArray);
    ogcStaDataArray.forEach((ogcStaData, index) => {
      console.log(`🌤️ Processing datasource ${index}:`, ogcStaData);
      if (!ogcStaData?.things) {
        console.log("❌ No things found in datasource");
        return;
      }
      console.log(`✅ Found ${ogcStaData.things.length} things`);
      ogcStaData.things.forEach((thing) => {
        const thingId = thing["@iot.id"] || thing.iotId || thing.id;
        console.log(`🏠 Processing thing ${thingId}:`, thing.name);
        console.log(`    Thing object keys:`, Object.keys(thing));
        console.log(`    Thing:`, thing);
        if (this.thingId && thingId != this.thingId && String(thingId) != String(this.thingId)) {
          console.log(`⏭️ Skipping thing ${thingId} - doesn't match filter ${this.thingId}`);
          return;
        }
        const weatherData = {
          thingId,
          location: this.extractLocationInfo(thing)
        };
        let datastreamCount = 0;
        if (thing.datastreams && thing.datastreams.length > 0) {
          datastreamCount = thing.datastreams.length;
          thing.datastreams.forEach((datastream) => {
            this.processDatastream(datastream, weatherData);
          });
        } else if (ogcStaData.datastreams) {
          const matchingDatastreams = ogcStaData.datastreams.filter(
            (ds) => ds.thing && ds.thing["@iot.id"] == thing["@iot.id"]
          );
          datastreamCount = matchingDatastreams.length;
          matchingDatastreams.forEach((datastream) => {
            this.processDatastream(datastream, weatherData);
          });
        }
        console.log(`🌤️ Weather data after processing:`, weatherData);
        if (this.hasWeatherMeasurements(weatherData)) {
          console.log(`✅ Adding weather data for thing ${thingId}`);
          weatherDataArray.push(weatherData);
        } else {
          console.log(`❌ No weather measurements found for thing ${thingId}`);
          console.log(`   - Processed ${datastreamCount} datastreams`);
        }
      });
    });
    return weatherDataArray;
  }
  extractLocationInfo(thing) {
    const location = {
      name: thing.name || "Unknown Location",
      description: thing.description
    };
    if (thing.locations && thing.locations.length > 0) {
      const firstLocation = thing.locations[0];
      if (firstLocation.location?.coordinates) {
        location.coordinates = {
          latitude: firstLocation.location.coordinates[1],
          longitude: firstLocation.location.coordinates[0]
        };
      }
    }
    return location;
  }
  processDatastream(datastream, weatherData) {
    if (!datastream.observations || datastream.observations.length === 0) {
      return;
    }
    const observation = datastream.observations[0];
    const name = datastream.name?.toLowerCase() || "";
    const description = datastream.description?.toLowerCase() || "";
    const searchText = `${name} ${description}`;
    const id = datastream.iotId;
    const weatherValue = {
      value: observation.result,
      unit: datastream.unitOfMeasurement?.symbol || "",
      timestamp: observation.phenomenonTime || observation.resultTime || "",
      quality: observation.resultQuality || void 0
    };
    const mapping = { ...this.defaultMapping, ...this.customMapping };
    const isCurrentWeather = id.includes("~currentWeather~");
    const forecastMatch = id.match(/~forecast(\d+)H~/);
    const isForecast = !!forecastMatch;
    console.log(`      🔍 Processing datastream: ${id}, isCurrentWeather: ${isCurrentWeather}, isForecast: ${isForecast}`);
    let matched = false;
    for (const [weatherParam, keywords] of Object.entries(mapping)) {
      if (weatherParam.endsWith("Forecast") && typeof keywords === "object" && !Array.isArray(keywords) && isForecast) {
        const forecastHours = forecastMatch[1];
        const forecastPeriodKey = `forecast${forecastHours}h`;
        console.log(`      🔍 Looking for forecast period: ${forecastPeriodKey} in ${weatherParam}`);
        const forecastKeywords = keywords[forecastPeriodKey];
        const parameterName = id.split("~").pop()?.toLowerCase();
        let matchesParameter = false;
        if (Array.isArray(forecastKeywords)) {
          matchesParameter = forecastKeywords.some(
            (keyword) => id.includes(keyword) || searchText.includes(keyword) || parameterName && keyword.toLowerCase().includes(parameterName)
          );
        } else {
          const baseWeatherParam = weatherParam.replace("Forecast", "").toLowerCase();
          matchesParameter = parameterName?.includes(baseWeatherParam) || searchText.includes(baseWeatherParam);
        }
        if (matchesParameter) {
          console.log(`      ✅ Matched "${weatherParam}.${forecastPeriodKey}" with ID "${id}"`);
          if (!weatherData[weatherParam]) {
            weatherData[weatherParam] = {};
          }
          weatherData[weatherParam][forecastPeriodKey] = weatherValue;
          matched = true;
          break;
        }
      } else if (Array.isArray(keywords) && isCurrentWeather) {
        const parameterName = id.split("~").pop()?.toLowerCase();
        const matchesParameter = keywords.some(
          (keyword) => id.includes(keyword) || searchText.includes(keyword) || parameterName && keyword.toLowerCase().includes(parameterName)
        );
        if (matchesParameter) {
          console.log(`      ✅ Matched current "${weatherParam}" with ID "${id}"`);
          weatherData[weatherParam] = weatherValue;
          matched = true;
          break;
        }
      }
    }
    if (!matched) {
      console.log(`      ❌ No match found for "${id}" (searchText: "${searchText}")`);
    }
  }
  hasWeatherMeasurements(weatherData) {
    return !!// Current weather measurements
    (weatherData.temperature || weatherData.humidity || weatherData.pressure || weatherData.windSpeed || weatherData.windDirection || weatherData.precipitation || weatherData.visibility || weatherData.cloudCover || // Forecast measurements
    weatherData.temperatureForecast || weatherData.humidityForecast || weatherData.pressureForecast || weatherData.windSpeedForecast || weatherData.windDirectionForecast || weatherData.precipitationForecast || weatherData.visibilityForecast || weatherData.cloudCoverForecast);
  }
  static validateConfiguration(config) {
    if (!config.connectedDatasources || !Array.isArray(config.connectedDatasources)) {
      return false;
    }
    if (config.connectedDatasources.length === 0) {
      return false;
    }
    return true;
  }
  // Helper method to get weather data for a specific thing
  async getWeatherForThing(thingId) {
    const originalThingId = this.thingId;
    this.thingId = thingId;
    try {
      const weatherDataArray = await this.getData("WeatherData");
      return weatherDataArray.length > 0 ? weatherDataArray[0] : null;
    } finally {
      this.thingId = originalThingId;
    }
  }
  // Helper method to get all available weather data
  async getAllWeatherData() {
    const originalThingId = this.thingId;
    this.thingId = void 0;
    try {
      return await this.getData("WeatherData");
    } finally {
      this.thingId = originalThingId;
    }
  }
  // Helper method to get current weather summary for widget
  getCurrentWeather(weatherData) {
    if (!weatherData || !Array.isArray(weatherData) || weatherData.length === 0) {
      return null;
    }
    let currentStation = weatherData[0];
    if (this.thingId) {
      const specificStation = weatherData.find(
        (station) => station.thingId == this.thingId || String(station.thingId) == String(this.thingId)
      );
      if (specificStation) {
        currentStation = specificStation;
      }
    }
    return {
      location: currentStation.location,
      thingId: currentStation.thingId,
      measurements: {
        temperature: currentStation.temperature,
        humidity: currentStation.humidity,
        pressure: currentStation.pressure,
        windSpeed: currentStation.windSpeed,
        windDirection: currentStation.windDirection,
        precipitation: currentStation.precipitation,
        visibility: currentStation.visibility,
        cloudCover: currentStation.cloudCover
      },
      lastUpdated: this.getLatestTimestamp(currentStation)
    };
  }
  // Helper to get the most recent timestamp from all measurements
  getLatestTimestamp(weatherData) {
    const timestamps = [
      weatherData.temperature?.timestamp,
      weatherData.humidity?.timestamp,
      weatherData.pressure?.timestamp,
      weatherData.windSpeed?.timestamp,
      weatherData.windDirection?.timestamp,
      weatherData.precipitation?.timestamp,
      weatherData.visibility?.timestamp,
      weatherData.cloudCover?.timestamp
    ].filter(Boolean);
    if (timestamps.length === 0) return void 0;
    return timestamps.reduce((latest, current) => {
      return new Date(current) > new Date(latest) ? current : latest;
    });
  }
  // Check if relevant things have changed before doing expensive processing
  async checkForRelevantChanges() {
    try {
      const datasourceRepository = this.datasourceRepository;
      const currentRelevantThings = /* @__PURE__ */ new Set();
      for (const datasourceId of this.connectedDatasources.filter((id) => id)) {
        const datasourceInstance = datasourceRepository.getDatasource(datasourceId);
        const datasourceOptions = this.thingId ? {
          filter: {
            things: {
              ids: [this.thingId]
            }
          }
        } : {
          filter: {
            things: {
              all: {
                includeDatastreams: false,
                // Only get thing metadata
                includeLocations: false
              }
            }
          }
        };
        const lightweightData = await datasourceInstance.getData("OGCSTAData", datasourceOptions);
        if (lightweightData?.things) {
          lightweightData.things.forEach((thing) => {
            const thingId = thing["@iot.id"] || thing.iotId || thing.id;
            if (!this.thingId || thingId == this.thingId || String(thingId) == String(this.thingId)) {
              currentRelevantThings.add(String(thingId));
            }
          });
        }
      }
      const hasChanges = !this.setsEqual(currentRelevantThings, this.lastRelevantThings);
      if (hasChanges) {
        console.log(`🔄 Relevant things changed:`);
        console.log(`   Previous: [${Array.from(this.lastRelevantThings).join(", ")}]`);
        console.log(`   Current: [${Array.from(currentRelevantThings).join(", ")}]`);
        this.lastRelevantThings = currentRelevantThings;
      }
      return hasChanges;
    } catch (error) {
      console.warn("⚠️ Error checking for relevant changes, proceeding with full update:", error);
      return true;
    }
  }
  // Helper to compare two sets
  setsEqual(set1, set2) {
    return set1.size === set2.size && [...set1].every((x) => set2.has(x));
  }
}
const WEATHER_COMPOSER = serviceId("WeatherComposer");
const symbol = Symbol.for(WEATHER_COMPOSER);
function createWeatherComposer(repository) {
  return (config) => {
    if (!WeatherComposer.validateConfiguration(config)) {
      throw new Error(
        "Invalid WeatherComposer configuration. Please provide a valid configuration."
      );
    }
    const composer = new WeatherComposer(repository);
    composer.init(config);
    return composer;
  };
}
function activate$1({ services }) {
  services.register(WEATHER_COMPOSER, createWeatherComposer(services.getRequired(DATASOURCE_REPOSITORY)));
}
function deactivate$1({ services }) {
  services.unregister(WEATHER_COMPOSER);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WEATHER_COMPOSER,
  WeatherComposer,
  activate: activate$1,
  deactivate: deactivate$1,
  symbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.composer.weather";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.composer.weather");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  WEATHER_COMPOSER,
  WeatherComposer,
  activate,
  deactivate,
  symbol
};
