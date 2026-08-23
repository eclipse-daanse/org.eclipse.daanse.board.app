import { inject, injectable } from "@eclipse-daanse/tsm";
import { CONNECTION_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.connection";
import { VARIABLE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.variable";
import { BaseDatasource } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { LOGGER_FACTORY } from "org.eclipse.daanse.board.app.lib.api.logger";
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const BASE_PATH = "https://sensors.bgs.ac.uk/FROST-Server".replace(/\/+$/, "");
class Configuration {
  constructor(configuration = {}) {
    this.configuration = configuration;
  }
  set config(configuration) {
    this.configuration = configuration;
  }
  get basePath() {
    return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
  }
  get fetchApi() {
    return this.configuration.fetchApi;
  }
  get middleware() {
    return this.configuration.middleware || [];
  }
  get queryParamsStringify() {
    return this.configuration.queryParamsStringify || querystring;
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const apiKey = this.configuration.apiKey;
    if (apiKey) {
      return typeof apiKey === "function" ? apiKey : () => apiKey;
    }
    return void 0;
  }
  get accessToken() {
    const accessToken = this.configuration.accessToken;
    if (accessToken) {
      return typeof accessToken === "function" ? accessToken : async () => accessToken;
    }
    return void 0;
  }
  get headers() {
    return this.configuration.headers;
  }
  get credentials() {
    return this.configuration.credentials;
  }
}
const DefaultConfig = new Configuration();
class BaseAPI {
  constructor(configuration = DefaultConfig) {
    this.configuration = configuration;
    this.middleware = configuration.middleware;
  }
  static jsonRegex = new RegExp("^(:?application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(:?;.*)?$", "i");
  middleware;
  withMiddleware(...middlewares) {
    const next = this.clone();
    next.middleware = next.middleware.concat(...middlewares);
    return next;
  }
  withPreMiddleware(...preMiddlewares) {
    const middlewares = preMiddlewares.map((pre) => ({ pre }));
    return this.withMiddleware(...middlewares);
  }
  withPostMiddleware(...postMiddlewares) {
    const middlewares = postMiddlewares.map((post) => ({ post }));
    return this.withMiddleware(...middlewares);
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    if (!mime) {
      return false;
    }
    return BaseAPI.jsonRegex.test(mime);
  }
  async request(context, initOverrides) {
    const { url, init } = await this.createFetchParams(context, initOverrides);
    const response = await this.fetchApi(url, init);
    if (response && (response.status >= 200 && response.status < 300)) {
      return response;
    }
    throw new ResponseError(response, "Response returned an error code");
  }
  async createFetchParams(context, initOverrides) {
    let url = this.configuration.basePath + context.path;
    if (context.query !== void 0 && Object.keys(context.query).length !== 0) {
      url += "?" + this.configuration.queryParamsStringify(context.query);
    }
    const headers = Object.assign({}, this.configuration.headers, context.headers);
    Object.keys(headers).forEach((key) => headers[key] === void 0 ? delete headers[key] : {});
    const initOverrideFn = typeof initOverrides === "function" ? initOverrides : async () => initOverrides;
    const initParams = {
      method: context.method,
      headers,
      body: context.body,
      credentials: this.configuration.credentials
    };
    const overriddenInit = {
      ...initParams,
      ...await initOverrideFn({
        init: initParams,
        context
      })
    };
    let body;
    if (isFormData(overriddenInit.body) || overriddenInit.body instanceof URLSearchParams || isBlob(overriddenInit.body)) {
      body = overriddenInit.body;
    } else if (this.isJsonMime(headers["Content-Type"])) {
      body = JSON.stringify(overriddenInit.body);
    } else {
      body = overriddenInit.body;
    }
    const init = {
      ...overriddenInit,
      body
    };
    return { url, init };
  }
  fetchApi = async (url, init) => {
    let fetchParams = { url, init };
    for (const middleware of this.middleware) {
      if (middleware.pre) {
        fetchParams = await middleware.pre({
          fetch: this.fetchApi,
          ...fetchParams
        }) || fetchParams;
      }
    }
    let response = void 0;
    try {
      response = await (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
    } catch (e) {
      for (const middleware of this.middleware) {
        if (middleware.onError) {
          response = await middleware.onError({
            fetch: this.fetchApi,
            url: fetchParams.url,
            init: fetchParams.init,
            error: e,
            response: response ? response.clone() : void 0
          }) || response;
        }
      }
      if (response === void 0) {
        if (e instanceof Error) {
          throw new FetchError(e, "The request failed and the interceptors did not return an alternative response");
        } else {
          throw e;
        }
      }
    }
    for (const middleware of this.middleware) {
      if (middleware.post) {
        response = await middleware.post({
          fetch: this.fetchApi,
          url: fetchParams.url,
          init: fetchParams.init,
          response: response.clone()
        }) || response;
      }
    }
    return response;
  };
  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  clone() {
    const constructor = this.constructor;
    const next = new constructor(this.configuration);
    next.middleware = this.middleware.slice();
    return next;
  }
}
function isBlob(value) {
  return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFormData(value) {
  return typeof FormData !== "undefined" && value instanceof FormData;
}
class ResponseError extends Error {
  constructor(response, msg) {
    super(msg);
    this.response = response;
  }
  name = "ResponseError";
}
class FetchError extends Error {
  constructor(cause, msg) {
    super(msg);
    this.cause = cause;
  }
  name = "FetchError";
}
class RequiredError extends Error {
  constructor(field, msg) {
    super(msg);
    this.field = field;
  }
  name = "RequiredError";
}
function querystring(params, prefix = "") {
  return Object.keys(params).map((key) => querystringSingleKey(key, params[key], prefix)).filter((part) => part.length > 0).join("&");
}
function querystringSingleKey(key, value, keyPrefix = "") {
  const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
  if (value instanceof Array) {
    const multiValue = value.map((singleValue) => encodeURIComponent(String(singleValue))).join(`&${encodeURIComponent(fullKey)}=`);
    return `${encodeURIComponent(fullKey)}=${multiValue}`;
  }
  if (value instanceof Set) {
    const valueAsArray = Array.from(value);
    return querystringSingleKey(key, valueAsArray, keyPrefix);
  }
  if (value instanceof Date) {
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
  }
  if (value instanceof Object) {
    return querystring(value, fullKey);
  }
  return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}
class JSONApiResponse {
  constructor(raw, transformer = (jsonValue) => jsonValue) {
    this.raw = raw;
    this.transformer = transformer;
  }
  async value() {
    return this.transformer(await this.raw.json());
  }
}
function DatastreamUnitOfMeasurementFromJSON(json) {
  return DatastreamUnitOfMeasurementFromJSONTyped(json);
}
function DatastreamUnitOfMeasurementFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "name": json["name"] == null ? void 0 : json["name"],
    "symbol": json["symbol"] == null ? void 0 : json["symbol"],
    "defintion": json["defintion"] == null ? void 0 : json["defintion"]
  };
}
function ObservedPropertyPropertiesFromJSON(json) {
  return ObservedPropertyPropertiesFromJSONTyped(json);
}
function ObservedPropertyPropertiesFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "senId": json["sen_id"] == null ? void 0 : json["sen_id"],
    "dataType": json["data_type"] == null ? void 0 : json["data_type"],
    "formula": json["formula"] == null ? void 0 : json["formula"],
    "publishYn": json["publish_yn&quot;"] == null ? void 0 : json["publish_yn&quot;"]
  };
}
function ObservedPropertyFromJSON(json) {
  return ObservedPropertyFromJSONTyped(json);
}
function ObservedPropertyFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "iotId": json["@iot.id"] == null ? void 0 : json["@iot.id"],
    "iotSelfLink": json["@iot.selfLink"] == null ? void 0 : json["@iot.selfLink"],
    "definition": json["definition"] == null ? void 0 : json["definition"],
    "description": json["description"] == null ? void 0 : json["description"],
    "name": json["name"] == null ? void 0 : json["name"],
    "properties": json["properties"] == null ? void 0 : ObservedPropertyPropertiesFromJSON(json["properties"])
  };
}
function DatastreamPropertiesFromJSON(json) {
  return DatastreamPropertiesFromJSONTyped(json);
}
function DatastreamPropertiesFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "senId": json["sen_id"] == null ? void 0 : json["sen_id"],
    "dataType": json["data_type"] == null ? void 0 : json["data_type"],
    "accessRestriction": json["access_restriction"] == null ? void 0 : json["access_restriction"],
    "dataUsage": json["data_usage"] == null ? void 0 : json["data_usage"],
    "publishYn": json["publish_yn&quot;"] == null ? void 0 : json["publish_yn&quot;"]
  };
}
function ObservationParametersFromJSON(json) {
  return ObservationParametersFromJSONTyped(json);
}
function ObservationParametersFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "senId": json["sen_id"] == null ? void 0 : json["sen_id"],
    "publishYn": json["publish_yn&quot;"] == null ? void 0 : json["publish_yn&quot;"]
  };
}
function ObservationFromJSON(json) {
  return ObservationFromJSONTyped(json);
}
function ObservationFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "iotId": json["@iot.id"] == null ? void 0 : json["@iot.id"],
    "iotSelfLink": json["@iot.selfLink"] == null ? void 0 : json["@iot.selfLink"],
    "parameters": json["parameters"] == null ? void 0 : ObservationParametersFromJSON(json["parameters"]),
    "phenomenonTime": json["phenomenonTime"] == null ? void 0 : json["phenomenonTime"],
    "result": json["result"] == null ? void 0 : json["result"],
    "resultQuality": json["resultQuality"] == null ? void 0 : json["resultQuality"],
    "resultTime": json["resultTime"] == null ? void 0 : json["resultTime"],
    "validTime": json["validTime"] == null ? void 0 : json["validTime"]
  };
}
function LocationPropertiesFromJSON(json) {
  return LocationPropertiesFromJSONTyped(json);
}
function LocationPropertiesFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "senId": json["sen_id"] == null ? void 0 : json["sen_id"],
    "site": json["site"] == null ? void 0 : json["site"],
    "observatory": json["observatory"] == null ? void 0 : json["observatory"],
    "z": json["z"] == null ? void 0 : json["z"],
    "zCrs": json["z_crs"] == null ? void 0 : json["z_crs"],
    "fromDate": json["from_date"] == null ? void 0 : json["from_date"],
    "toDate": json["to_date"] == null ? void 0 : json["to_date"],
    "comments": json["comments"] == null ? void 0 : json["comments"],
    "activeYn": json["active_yn&quot;"] == null ? void 0 : json["active_yn&quot;"],
    "publishYn": json["publish_yn&quot;"] == null ? void 0 : json["publish_yn&quot;"]
  };
}
function LocationFromJSON(json) {
  return LocationFromJSONTyped(json);
}
function LocationFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "iotId": json["@iot.id"] == null ? void 0 : json["@iot.id"],
    "iotSelfLink": json["@iot.selfLink"] == null ? void 0 : json["@iot.selfLink"],
    "things": json["Things"] == null ? void 0 : json["Things"].map(ThingFromJSON),
    "thingsiotCount": json["Things@iot.count"] == null ? void 0 : json["Things@iot.count"],
    "thingsiotNavigationLink": json["Things@iot.navigationLink"] == null ? void 0 : json["Things@iot.navigationLink"],
    "thingsiotNextLink": json["Things@iot.nextLink"] == null ? void 0 : json["Things@iot.nextLink"],
    "description": json["description"] == null ? void 0 : json["description"],
    "encodingType": json["encodingType"] == null ? void 0 : json["encodingType"],
    "location": json["location"] == null ? void 0 : json["location"],
    "name": json["name"] == null ? void 0 : json["name"],
    "properties": json["properties"] == null ? void 0 : LocationPropertiesFromJSON(json["properties"])
  };
}
function ThingPropertiesFromJSON(json) {
  return ThingPropertiesFromJSONTyped(json);
}
function ThingPropertiesFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "senId": json["sen_id"] == null ? void 0 : json["sen_id"],
    "type": json["type"] == null ? void 0 : json["type"],
    "serialNo": json["serial_no"] == null ? void 0 : json["serial_no"],
    "dataCapture": json["data_capture"] == null ? void 0 : json["data_capture"],
    "observationStartDate": json["observation_start_date"] == null ? void 0 : json["observation_start_date"],
    "datumZ": json["datum_z"] == null ? void 0 : json["datum_z"],
    "datumZCrs": json["datum_z_crs"] == null ? void 0 : json["datum_z_crs"],
    "datumName": json["datum_name"] == null ? void 0 : json["datum_name"],
    "boreholeReference": json["borehole_reference"] == null ? void 0 : json["borehole_reference"],
    "accessRestriction": json["access_restriction"] == null ? void 0 : json["access_restriction"],
    "dataUsage": json["data_usage"] == null ? void 0 : json["data_usage"],
    "publishYn": json["publish_yn&quot;"] == null ? void 0 : json["publish_yn&quot;"]
  };
}
function ThingFromJSON(json) {
  return ThingFromJSONTyped(json);
}
function ThingFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "iotId": json["@iot.id"] == null ? void 0 : json["@iot.id"],
    "iotSelfLink": json["@iot.selfLink"] == null ? void 0 : json["@iot.selfLink"],
    "datastreams": json["Datastreams"] == null ? void 0 : json["Datastreams"].map(DatastreamFromJSON),
    "datastreamsiotCount": json["Datastreams@iot.count"] == null ? void 0 : json["Datastreams@iot.count"],
    "datastreamsiotNavigationLink": json["Datastreams@iot.navigationLink"] == null ? void 0 : json["Datastreams@iot.navigationLink"],
    "datastreamsiotNextLink": json["Datastreams@iot.nextLink"] == null ? void 0 : json["Datastreams@iot.nextLink"],
    "locations": json["Locations"] == null ? void 0 : json["Locations"].map(LocationFromJSON),
    "locationsiotCount": json["Locations@iot.count"] == null ? void 0 : json["Locations@iot.count"],
    "locationsiotNavigationLink": json["Locations@iot.navigationLink"] == null ? void 0 : json["Locations@iot.navigationLink"],
    "locationsiotNextLink": json["Locations@iot.nextLink"] == null ? void 0 : json["Locations@iot.nextLink"],
    "description": json["description"] == null ? void 0 : json["description"],
    "name": json["name"] == null ? void 0 : json["name"],
    "properties": json["properties"] == null ? void 0 : ThingPropertiesFromJSON(json["properties"])
  };
}
function SensorPropertiesFromJSON(json) {
  return SensorPropertiesFromJSONTyped(json);
}
function SensorPropertiesFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "senId": json["sen_id"] == null ? void 0 : json["sen_id"],
    "complexDataYn": json["complex_data_yn&quot;"] == null ? void 0 : json["complex_data_yn&quot;"],
    "publishYn": json["publish_yn&quot;"] == null ? void 0 : json["publish_yn&quot;"]
  };
}
function SensorFromJSON(json) {
  return SensorFromJSONTyped(json);
}
function SensorFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "iotId": json["@iot.id"] == null ? void 0 : json["@iot.id"],
    "iotSelfLink": json["@iot.selfLink"] == null ? void 0 : json["@iot.selfLink"],
    "description": json["description"] == null ? void 0 : json["description"],
    "encodingType": json["encodingType"] == null ? void 0 : json["encodingType"],
    "metadata": json["metadata"] == null ? void 0 : json["metadata"],
    "name": json["name"] == null ? void 0 : json["name"],
    "properties": json["properties"] == null ? void 0 : SensorPropertiesFromJSON(json["properties"])
  };
}
function DatastreamFromJSON(json) {
  return DatastreamFromJSONTyped(json);
}
function DatastreamFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "iotId": json["@iot.id"] == null ? void 0 : json["@iot.id"],
    "iotSelfLink": json["@iot.selfLink"] == null ? void 0 : json["@iot.selfLink"],
    "observations": json["Observations"] == null ? void 0 : json["Observations"].map(ObservationFromJSON),
    "observationsiotCount": json["Observations@iot.count"] == null ? void 0 : json["Observations@iot.count"],
    "observationsiotNavigationLink": json["Observations@iot.navigationLink"] == null ? void 0 : json["Observations@iot.navigationLink"],
    "observationsiotNextLink": json["Observations@iot.nextLink"] == null ? void 0 : json["Observations@iot.nextLink"],
    "observedProperty": json["ObservedProperty"] == null ? void 0 : ObservedPropertyFromJSON(json["ObservedProperty"]),
    "observedPropertyiotNavigationLink": json["ObservedProperty@iot.navigationLink"] == null ? void 0 : json["ObservedProperty@iot.navigationLink"],
    "sensor": json["Sensor"] == null ? void 0 : SensorFromJSON(json["Sensor"]),
    "sensoriotNavigationLink": json["Sensor@iot.navigationLink"] == null ? void 0 : json["Sensor@iot.navigationLink"],
    "thing": json["Thing"] == null ? void 0 : ThingFromJSON(json["Thing"]),
    "thingiotNavigationLink": json["Thing@iot.navigationLink"] == null ? void 0 : json["Thing@iot.navigationLink"],
    "description": json["description"] == null ? void 0 : json["description"],
    "name": json["name"] == null ? void 0 : json["name"],
    "observationType": json["observationType"] == null ? void 0 : json["observationType"],
    "observedArea": json["observedArea"] == null ? void 0 : json["observedArea"],
    "phenomenonTime": json["phenomenonTime"] == null ? void 0 : json["phenomenonTime"],
    "properties": json["properties"] == null ? void 0 : DatastreamPropertiesFromJSON(json["properties"]),
    "resultTime": json["resultTime"] == null ? void 0 : json["resultTime"],
    "unitOfMeasurement": json["unitOfMeasurement"] == null ? void 0 : DatastreamUnitOfMeasurementFromJSON(json["unitOfMeasurement"])
  };
}
function DatastreamsFromJSON(json) {
  return DatastreamsFromJSONTyped(json);
}
function DatastreamsFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "iotCount": json["@iot.count"] == null ? void 0 : json["@iot.count"],
    "iotNextLink": json["@iot.nextLink"] == null ? void 0 : json["@iot.nextLink"],
    "value": json["value"] == null ? void 0 : json["value"].map(DatastreamFromJSON)
  };
}
function FeatureOfInterestPropertiesFromJSON(json) {
  return FeatureOfInterestPropertiesFromJSONTyped(json);
}
function FeatureOfInterestPropertiesFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "senId": json["sen_id"] == null ? void 0 : json["sen_id"],
    "type": json["type"] == null ? void 0 : json["type"],
    "z": json["z"] == null ? void 0 : json["z"],
    "zCrs": json["z_crs"] == null ? void 0 : json["z_crs"],
    "fromDate": json["from_date"] == null ? void 0 : json["from_date"],
    "toDate": json["to_date"] == null ? void 0 : json["to_date"],
    "activeYn": json["active_yn&quot;"] == null ? void 0 : json["active_yn&quot;"],
    "sobiBgsId": json["sobi_bgs_id"] == null ? void 0 : json["sobi_bgs_id"],
    "boreholeId": json["borehole_id"] == null ? void 0 : json["borehole_id"],
    "drilledLength": json["drilled_length"] == null ? void 0 : json["drilled_length"],
    "reference": json["reference"] == null ? void 0 : json["reference"],
    "referenceType": json["reference_type"] == null ? void 0 : json["reference_type"],
    "publishYn": json["publish_yn"] == null ? void 0 : json["publish_yn"]
  };
}
function FeatureOfInterestFromJSON(json) {
  return FeatureOfInterestFromJSONTyped(json);
}
function FeatureOfInterestFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "iotId": json["@iot.id"] == null ? void 0 : json["@iot.id"],
    "iotSelfLink": json["@iot.selfLink"] == null ? void 0 : json["@iot.selfLink"],
    "observations": json["Observations"] == null ? void 0 : json["Observations"].map(ObservationFromJSON),
    "observationsiotCount": json["Observations@iot.count"] == null ? void 0 : json["Observations@iot.count"],
    "observationsiotNavigationLink": json["Observations@iot.navigationLink"] == null ? void 0 : json["Observations@iot.navigationLink"],
    "observationsiotNextLink": json["Observations@iot.nextLink"] == null ? void 0 : json["Observations@iot.nextLink"],
    "description": json["description"] == null ? void 0 : json["description"],
    "encodingType": json["encodingType"] == null ? void 0 : json["encodingType"],
    "feature": json["feature"] == null ? void 0 : json["feature"],
    "name": json["name"] == null ? void 0 : json["name"],
    "properties": json["properties"] == null ? void 0 : FeatureOfInterestPropertiesFromJSON(json["properties"])
  };
}
function LocationsFromJSON(json) {
  return LocationsFromJSONTyped(json);
}
function LocationsFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "iotCount": json["@iot.count"] == null ? void 0 : json["@iot.count"],
    "iotNextLink": json["@iot.nextLink"] == null ? void 0 : json["@iot.nextLink"],
    "value": json["value"] == null ? void 0 : json["value"].map(LocationFromJSON)
  };
}
function ObservationsFromJSON(json) {
  return ObservationsFromJSONTyped(json);
}
function ObservationsFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "iotCount": json["@iot.count"] == null ? void 0 : json["@iot.count"],
    "iotNextLink": json["@iot.nextLink"] == null ? void 0 : json["@iot.nextLink"],
    "value": json["value"] == null ? void 0 : json["value"].map(ObservationFromJSON)
  };
}
function ThingsFromJSON(json) {
  return ThingsFromJSONTyped(json);
}
function ThingsFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "iotCount": json["@iot.count"] == null ? void 0 : json["@iot.count"],
    "iotNextLink": json["@iot.nextLink"] == null ? void 0 : json["@iot.nextLink"],
    "value": json["value"] == null ? void 0 : json["value"].map(ThingFromJSON)
  };
}
class DatastreamsApi extends BaseAPI {
  /**
   * Returns information about the datastream identified by **entityId**
   * Get information about an individual datastream
   */
  async v11DatastreamsEntityIdGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Datastreams({entityId})`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => DatastreamFromJSON(jsonValue));
  }
  /**
   * Returns information about the datastream identified by **entityId**
   * Get information about an individual datastream
   */
  async v11DatastreamsEntityIdGet(requestParameters, initOverrides) {
    const response = await this.v11DatastreamsEntityIdGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns all observations for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all observations for a datastream
   */
  async v11DatastreamsEntityIdObservationsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdObservationsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    if (requestParameters["$orderby"] != null) {
      queryParameters["$orderby"] = requestParameters["$orderby"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Datastreams({entityId})/Observations`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => ObservationsFromJSON(jsonValue));
  }
  /**
   * Returns all observations for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all observations for a datastream
   */
  async v11DatastreamsEntityIdObservationsGet(requestParameters, initOverrides) {
    const response = await this.v11DatastreamsEntityIdObservationsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns all datastreams that provide the observed property for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams that provide a datastream\'s observed property
   */
  async v11DatastreamsEntityIdObservedPropertyDatastreamsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdObservedPropertyDatastreamsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Datastreams({entityId})/ObservedProperty/Datastreams`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => DatastreamsFromJSON(jsonValue));
  }
  /**
   * Returns all datastreams that provide the observed property for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams that provide a datastream\'s observed property
   */
  async v11DatastreamsEntityIdObservedPropertyDatastreamsGet(requestParameters, initOverrides) {
    const response = await this.v11DatastreamsEntityIdObservedPropertyDatastreamsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns information about the observed property for the datastream identified by **entityId**
   * Get information about a datastream\'s observed property
   */
  async v11DatastreamsEntityIdObservedPropertyGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdObservedPropertyGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Datastreams({entityId})/ObservedProperty`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => ObservedPropertyFromJSON(jsonValue));
  }
  /**
   * Returns information about the observed property for the datastream identified by **entityId**
   * Get information about a datastream\'s observed property
   */
  async v11DatastreamsEntityIdObservedPropertyGet(requestParameters, initOverrides) {
    const response = await this.v11DatastreamsEntityIdObservedPropertyGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns all datastreams which share the sensor type for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams which share a datastream\'s sensor type
   */
  async v11DatastreamsEntityIdSensorDatastreamsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdSensorDatastreamsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Datastreams({entityId})/Sensor/Datastreams`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => DatastreamsFromJSON(jsonValue));
  }
  /**
   * Returns all datastreams which share the sensor type for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams which share a datastream\'s sensor type
   */
  async v11DatastreamsEntityIdSensorDatastreamsGet(requestParameters, initOverrides) {
    const response = await this.v11DatastreamsEntityIdSensorDatastreamsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns information about the sensor type for the datastream identified by **entityId**
   * Get information about a datastream\'s sensor type
   */
  async v11DatastreamsEntityIdSensorGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdSensorGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Datastreams({entityId})/Sensor`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => SensorFromJSON(jsonValue));
  }
  /**
   * Returns information about the sensor type for the datastream identified by **entityId**
   * Get information about a datastream\'s sensor type
   */
  async v11DatastreamsEntityIdSensorGet(requestParameters, initOverrides) {
    const response = await this.v11DatastreamsEntityIdSensorGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns all datastreams provided by the thing for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams provided by a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingDatastreamsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdThingDatastreamsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Datastreams({entityId})/Thing/Datastreams`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => DatastreamsFromJSON(jsonValue));
  }
  /**
   * Returns all datastreams provided by the thing for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams provided by a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingDatastreamsGet(requestParameters, initOverrides) {
    const response = await this.v11DatastreamsEntityIdThingDatastreamsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns information about the thing for the datastream identified by **entityId**
   * Get information about a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdThingGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Datastreams({entityId})/Thing`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => ThingFromJSON(jsonValue));
  }
  /**
   * Returns information about the thing for the datastream identified by **entityId**
   * Get information about a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingGet(requestParameters, initOverrides) {
    const response = await this.v11DatastreamsEntityIdThingGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns all locations of the thing for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all locations for a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingLocationsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdThingLocationsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Datastreams({entityId})/Thing/Locations`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => LocationsFromJSON(jsonValue));
  }
  /**
   * Returns all locations of the thing for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all locations for a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingLocationsGet(requestParameters, initOverrides) {
    const response = await this.v11DatastreamsEntityIdThingLocationsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns all the datastreams provided by this api (subject to any parameters set)
   * Get all datastreams
   */
  async v11DatastreamsGetRaw(requestParameters, initOverrides) {
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Datastreams`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => DatastreamsFromJSON(jsonValue));
  }
  /**
   * Returns all the datastreams provided by this api (subject to any parameters set)
   * Get all datastreams
   */
  async v11DatastreamsGet(requestParameters = {}, initOverrides) {
    const response = await this.v11DatastreamsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
class ObservationsApi extends BaseAPI {
  /**
   * Returns information about the datastream for the observation identified by **entityId**
   * Get information about an observation\'s datastream
   */
  async v11ObservationsEntityIdDatastreamGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})/Datastream`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => DatastreamFromJSON(jsonValue));
  }
  /**
   * Returns information about the datastream for the observation identified by **entityId**
   * Get information about an observation\'s datastream
   */
  async v11ObservationsEntityIdDatastreamGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdDatastreamGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns all observations for the datastream of the observation identified by **entityId** (subject to any other parameters set)
   * Get all observations for an observations\'s datastream
   */
  async v11ObservationsEntityIdDatastreamObservationsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamObservationsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})/Datastream/Observations`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => ObservationsFromJSON(jsonValue));
  }
  /**
   * Returns all observations for the datastream of the observation identified by **entityId** (subject to any other parameters set)
   * Get all observations for an observations\'s datastream
   */
  async v11ObservationsEntityIdDatastreamObservationsGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdDatastreamObservationsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamObservedPropertyDatastreamsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamObservedPropertyDatastreamsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})/Datastream/ObservedProperty/Datastreams`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => DatastreamsFromJSON(jsonValue));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamObservedPropertyDatastreamsGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdDatastreamObservedPropertyDatastreamsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamObservedPropertyGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamObservedPropertyGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})/Datastream/ObservedProperty`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => ObservedPropertyFromJSON(jsonValue));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamObservedPropertyGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdDatastreamObservedPropertyGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamSensorDatastreamsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamSensorDatastreamsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})/Datastream/Sensor/Datastreams`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => DatastreamsFromJSON(jsonValue));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamSensorDatastreamsGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdDatastreamSensorDatastreamsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamSensorGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamSensorGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})/Datastream/Sensor`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => SensorFromJSON(jsonValue));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamSensorGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdDatastreamSensorGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingDatastreamsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamThingDatastreamsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})/Datastream/Thing/Datastreams`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => DatastreamsFromJSON(jsonValue));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingDatastreamsGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdDatastreamThingDatastreamsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamThingGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})/Datastream/Thing`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => ThingFromJSON(jsonValue));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdDatastreamThingGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingLocationsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamThingLocationsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})/Datastream/Thing/Locations`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => LocationsFromJSON(jsonValue));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingLocationsGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdDatastreamThingLocationsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns information about the feature of interest for the observation identified by **entityId**
   * Get information about an observation\'s feature of interest
   */
  async v11ObservationsEntityIdFeatureOfInterestGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdFeatureOfInterestGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})/FeatureOfInterest`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => FeatureOfInterestFromJSON(jsonValue));
  }
  /**
   * Returns information about the feature of interest for the observation identified by **entityId**
   * Get information about an observation\'s feature of interest
   */
  async v11ObservationsEntityIdFeatureOfInterestGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdFeatureOfInterestGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   */
  async v11ObservationsEntityIdFeatureOfInterestObservationsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdFeatureOfInterestObservationsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})/FeatureOfInterest/Observations`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => ObservationsFromJSON(jsonValue));
  }
  /**
   */
  async v11ObservationsEntityIdFeatureOfInterestObservationsGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdFeatureOfInterestObservationsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns information about the observation identified by **entityId**
   * Get information about an individual observation
   */
  async v11ObservationsEntityIdGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations({entityId})`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => ObservationFromJSON(jsonValue));
  }
  /**
   * Returns information about the observation identified by **entityId**
   * Get information about an individual observation
   */
  async v11ObservationsEntityIdGet(requestParameters, initOverrides) {
    const response = await this.v11ObservationsEntityIdGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns all the observations provided by this api (subject to any parameters set)
   * Get all observations
   */
  async v11ObservationsGetRaw(requestParameters, initOverrides) {
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Observations`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => ObservationsFromJSON(jsonValue));
  }
  /**
   * Returns all the observations provided by this api (subject to any parameters set)
   * Get all observations
   */
  async v11ObservationsGet(requestParameters = {}, initOverrides) {
    const response = await this.v11ObservationsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
class ThingsApi extends BaseAPI {
  /**
   * Returns all datastreams for the thing identified by **entityId** (subject to any other parameters set)
   * Get all datastreams for a thing
   */
  async v11ThingsEntityIdDatastreamsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ThingsEntityIdDatastreamsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Things({entityId})/Datastreams`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => DatastreamsFromJSON(jsonValue));
  }
  /**
   * Returns all datastreams for the thing identified by **entityId** (subject to any other parameters set)
   * Get all datastreams for a thing
   */
  async v11ThingsEntityIdDatastreamsGet(requestParameters, initOverrides) {
    const response = await this.v11ThingsEntityIdDatastreamsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns information about the thing identified by **entityId**
   * Get information about an individual thing
   */
  async v11ThingsEntityIdGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ThingsEntityIdGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Things({entityId})`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => ThingFromJSON(jsonValue));
  }
  /**
   * Returns information about the thing identified by **entityId**
   * Get information about an individual thing
   */
  async v11ThingsEntityIdGet(requestParameters, initOverrides) {
    const response = await this.v11ThingsEntityIdGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns information about the location for the thing identified by **entityId**
   * Get information about a things\'s location
   */
  async v11ThingsEntityIdLocationsGetRaw(requestParameters, initOverrides) {
    if (requestParameters["entityId"] == null) {
      throw new RequiredError(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ThingsEntityIdLocationsGet().'
      );
    }
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Things({entityId})/Locations`.replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters["entityId"]))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => LocationsFromJSON(jsonValue));
  }
  /**
   * Returns information about the location for the thing identified by **entityId**
   * Get information about a things\'s location
   */
  async v11ThingsEntityIdLocationsGet(requestParameters, initOverrides) {
    const response = await this.v11ThingsEntityIdLocationsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
  /**
   * Returns all the things provided by this api (subject to any parameters set)
   * Get all things
   */
  async v11ThingsGetRaw(requestParameters, initOverrides) {
    const queryParameters = {};
    if (requestParameters["$skip"] != null) {
      queryParameters["$skip"] = requestParameters["$skip"];
    }
    if (requestParameters["$top"] != null) {
      queryParameters["$top"] = requestParameters["$top"];
    }
    if (requestParameters["$count"] != null) {
      queryParameters["$count"] = requestParameters["$count"];
    }
    if (requestParameters["$select"] != null) {
      queryParameters["$select"] = requestParameters["$select"];
    }
    if (requestParameters["$expand"] != null) {
      queryParameters["$expand"] = requestParameters["$expand"];
    }
    if (requestParameters["$filter"] != null) {
      queryParameters["$filter"] = requestParameters["$filter"];
    }
    const headerParameters = {};
    const response = await this.request({
      path: `/v1.1/Things`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => ThingsFromJSON(jsonValue));
  }
  /**
   * Returns all the things provided by this api (subject to any parameters set)
   * Get all things
   */
  async v11ThingsGet(requestParameters = {}, initOverrides) {
    const response = await this.v11ThingsGetRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
class CachingFetchWrapper {
  cache = /* @__PURE__ */ new Map();
  pendingRequests = /* @__PURE__ */ new Map();
  ttl;
  maxEntries;
  constructor(options = {}) {
    this.ttl = options.ttl ?? 3e4;
    this.maxEntries = options.maxEntries ?? 200;
  }
  getCacheKey(url, init) {
    const method = init?.method || "GET";
    const body = init?.body ? String(init.body) : "";
    return `${method}:${url}:${body}`;
  }
  isValidCacheEntry(entry) {
    return Date.now() - entry.timestamp < this.ttl;
  }
  cleanExpiredCache() {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp >= this.ttl) {
        this.cache.delete(key);
      }
    }
  }
  createCachedResponse(entry) {
    return new Response(JSON.stringify(entry.body), {
      status: entry.status,
      statusText: entry.statusText,
      headers: entry.headers
    });
  }
  clearCache() {
    this.cache.clear();
    this.pendingRequests.clear();
  }
  createCachingFetch(baseFetch) {
    return async (input, init) => {
      const url = typeof input === "string" ? input : input.toString();
      const method = init?.method || "GET";
      if (method !== "GET") {
        return baseFetch(input, init);
      }
      const cacheKey = this.getCacheKey(url, init);
      const cachedEntry = this.cache.get(cacheKey);
      if (cachedEntry && this.isValidCacheEntry(cachedEntry)) {
        console.log("[OGC STA Cache] Cache HIT:", url.substring(0, 80));
        return this.createCachedResponse(cachedEntry);
      }
      const pendingRequest = this.pendingRequests.get(cacheKey);
      if (pendingRequest) {
        console.log("[OGC STA Cache] Dedup - waiting for pending request:", url.substring(0, 80));
        const response = await pendingRequest;
        return response.clone();
      }
      console.log("[OGC STA Cache] Cache MISS - fetching:", url.substring(0, 80));
      let resolvePromise;
      let rejectPromise;
      const requestPromise = new Promise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
      });
      this.pendingRequests.set(cacheKey, requestPromise);
      try {
        const response = await baseFetch(input, init);
        if (response.ok) {
          const clonedResponse = response.clone();
          try {
            const body = await clonedResponse.json();
            this.cache.set(cacheKey, {
              body,
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
              timestamp: Date.now()
            });
            if (this.cache.size > this.maxEntries) {
              this.cleanExpiredCache();
            }
          } catch {
          }
        }
        resolvePromise(response.clone());
        return response;
      } catch (error) {
        rejectPromise(error);
        throw error;
      } finally {
        this.pendingRequests.delete(cacheKey);
      }
    };
  }
}
let sharedCachingWrapper = null;
function getSharedCachingFetch(baseFetch, options) {
  if (!sharedCachingWrapper) {
    sharedCachingWrapper = new CachingFetchWrapper(options);
  }
  return sharedCachingWrapper.createCachingFetch(baseFetch);
}
const transformFromThingLocationDastreamToLocationThingDatastream = (things) => {
  const ret = { locations: [], things, datastreams: [] };
  const locations = [];
  let datastreams = [];
  for (const thing of things ?? []) {
    if (thing.datastreams) {
      datastreams = [...datastreams, ...thing.datastreams];
      for (const datastream of thing.datastreams ?? []) {
        datastream.thing = thing;
      }
    }
    for (const location of thing.locations ?? []) {
      if (!location.things) {
        location.things = [];
      }
      const isAlreadyinLocation = locations.find((l) => l.iotId === location.iotId);
      if (isAlreadyinLocation) {
        const allredyexistingThing = isAlreadyinLocation.Things ?? [].find((t) => t.iotId == thing.iotId);
        if (!allredyexistingThing) {
          if (!isAlreadyinLocation.Things) {
            isAlreadyinLocation.Things = [];
          }
          isAlreadyinLocation.Things.push(thing);
        }
      } else {
        location.things.push(thing);
        locations.push(location);
      }
    }
  }
  ret.datastreams = datastreams;
  ret.locations = locations;
  return ret;
};
const FILTER = "EFilter";
const FILTERRESET = "EFilterReset";
const NOACTION = "ENoAction";
const MQTT_UNSUBSCRIBE_ALL = "EMqttUnsubscribeAll";
const UPDATE_MQTT_SUBSCRIPTIONS = "EUpdateMqttSubscriptions";
class ObservationsWorkerManager {
  worker = null;
  pendingRequests = /* @__PURE__ */ new Map();
  requestCounter = 0;
  isSupported = typeof Worker !== "undefined";
  constructor() {
    if (this.isSupported) {
      this.initWorker();
    }
  }
  initWorker() {
    try {
      const workerCode = `
        self.onmessage = async (event) => {
          const { type, requestId, requests } = event.data;

          if (type === 'fetchObservations') {
            const results = [];

            const promises = requests.map(async (req) => {
              try {
                const params = new URLSearchParams();

                if (req.historyParams && req.historyParams.$filter) {
                  params.set('$filter', req.historyParams.$filter);
                }
                if (req.historyParams && req.historyParams.$orderby) {
                  params.set('$orderby', req.historyParams.$orderby);
                } else {
                  params.set('$orderby', 'phenomenonTime desc');
                }
                // Only set $top if explicitly provided (don't default to 1 for history queries)
                if (req.historyParams && req.historyParams.$top) {
                  params.set('$top', req.historyParams.$top.toString());
                }

                const url = req.baseUrl + '/v1.1/Datastreams(' + req.datastreamId + ')/Observations?' + params.toString();

                const response = await fetch(url);
                if (!response.ok) {
                  throw new Error('HTTP ' + response.status);
                }

                const data = await response.json();
                const observations = data.value || [];

                observations.forEach((obs) => {
                  obs['ds_source'] = req.datastreamId;
                });

                return {
                  datastreamId: req.datastreamId,
                  observations: observations
                };
              } catch (error) {
                return {
                  datastreamId: req.datastreamId,
                  observations: [],
                  error: error instanceof Error ? error.message : 'Unknown error'
                };
              }
            });

            const fetchResults = await Promise.all(promises);
            results.push(...fetchResults);

            self.postMessage({
              type: 'observationsResult',
              requestId: requestId,
              results: results
            });
          }
        };
      `;
      const blob = new Blob([workerCode], { type: "application/javascript" });
      const workerUrl = URL.createObjectURL(blob);
      this.worker = new Worker(workerUrl);
      this.worker.onmessage = (event) => {
        const { requestId, results } = event.data;
        const pending = this.pendingRequests.get(requestId);
        if (pending) {
          this.pendingRequests.delete(requestId);
          pending.resolve(results);
        }
      };
      this.worker.onerror = (error) => {
        console.error("ObservationsWorker error:", error);
        for (const [requestId, pending] of this.pendingRequests) {
          pending.reject(new Error("Worker error"));
          this.pendingRequests.delete(requestId);
        }
      };
    } catch (e) {
      console.warn("Could not create ObservationsWorker:", e);
      this.isSupported = false;
    }
  }
  async fetchObservations(baseUrl, datastreams, historyParams) {
    if (!this.isSupported || !this.worker) {
      return this.fetchOnMainThread(baseUrl, datastreams, historyParams);
    }
    const requestId = `req_${++this.requestCounter}`;
    const requests = datastreams.map((ds) => ({
      baseUrl,
      datastreamId: ds.iotId || ds["@iot.id"],
      historyParams
    }));
    return new Promise((resolve, reject) => {
      this.pendingRequests.set(requestId, { resolve, reject });
      this.worker.postMessage({
        type: "fetchObservations",
        requestId,
        requests
      });
      setTimeout(() => {
        if (this.pendingRequests.has(requestId)) {
          this.pendingRequests.delete(requestId);
          reject(new Error("Worker request timeout"));
        }
      }, 3e4);
    });
  }
  async fetchOnMainThread(baseUrl, datastreams, historyParams) {
    const results = [];
    const promises = datastreams.map(async (ds) => {
      const datastreamId = ds.iotId || ds["@iot.id"];
      try {
        const params = new URLSearchParams();
        if (historyParams?.$filter) params.set("$filter", historyParams.$filter);
        if (historyParams?.$orderby) params.set("$orderby", historyParams.$orderby);
        else params.set("$orderby", "phenomenonTime desc");
        if (historyParams?.$top) params.set("$top", historyParams.$top.toString());
        const url = `${baseUrl}/v1.1/Datastreams(${datastreamId})/Observations?${params.toString()}`;
        const response = await fetch(url);
        const data = await response.json();
        const observations = data.value || [];
        observations.forEach((obs) => {
          obs["ds_source"] = datastreamId;
        });
        return { datastreamId, observations };
      } catch (error) {
        return { datastreamId, observations: [] };
      }
    });
    const fetchResults = await Promise.all(promises);
    results.push(...fetchResults);
    return results;
  }
  terminate() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
    this.pendingRequests.clear();
  }
}
let workerManagerInstance = null;
function getObservationsWorkerManager() {
  if (!workerManagerInstance) {
    workerManagerInstance = new ObservationsWorkerManager();
  }
  return workerManagerInstance;
}
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
let OgcStaStore = class extends BaseDatasource {
  connectionRepository;
  variableRepository;
  loggerFactory;
  // Create loggers
  logMqtt;
  logData;
  logHistory;
  logCore;
  configuration;
  connection = "";
  mqttConnection = null;
  subscribedDatastreams = /* @__PURE__ */ new Map();
  // datastreamId -> topic
  subscribedLocations = /* @__PURE__ */ new Map();
  // locationId -> topic
  initialLoadDone = false;
  mqttUpdateTimer = null;
  hasPendingMqttUpdates = false;
  requestFlag = {
    key: FILTERRESET,
    params: void 0
  };
  baseConfigration;
  resultMap = {
    things: [],
    datastreams: [],
    observations: [],
    locations: []
  };
  debounceTimer = null;
  filterDebounceTimer = null;
  lastFilterType = null;
  lastObservationsParams = null;
  watchedVariables = /* @__PURE__ */ new Set();
  pendingRequestFlag = null;
  workerManager = null;
  connectionBaseUrl = "";
  init(configuration) {
    super.init(configuration);
    this.logMqtt = this.loggerFactory.createLogger("daanse:ogcsta:mqtt");
    this.logData = this.loggerFactory.createLogger("daanse:ogcsta:data");
    this.logHistory = this.loggerFactory.createLogger("daanse:ogcsta:history");
    this.logCore = this.loggerFactory.createLogger("daanse:ogcsta:core");
    const isReInit = this.configuration !== void 0;
    if (isReInit && this.mqttConnection) {
      this.logMqtt("Configuration changed, cleaning up old MQTT subscriptions");
      this.unsubscribeAll();
      this.initialLoadDone = false;
    }
    this.configuration = configuration;
    if (!configuration.connection) throw new Error("Connetion must be set");
    this.connection = configuration.connection;
    this.requestFlag = { key: FILTERRESET, params: void 0 };
    if (configuration.history && configuration.history.enabled === void 0) {
      const hasTimeFilters = configuration.history.timeRange?.start || configuration.history.timeRange?.startVariable || configuration.history.timeRange?.end || configuration.history.timeRange?.endVariable || configuration.history.phenomenonTime?.start || configuration.history.phenomenonTime?.startVariable || configuration.history.phenomenonTime?.end || configuration.history.phenomenonTime?.endVariable || configuration.history.resultTime?.start || configuration.history.resultTime?.startVariable || configuration.history.resultTime?.end || configuration.history.resultTime?.endVariable;
      if (hasTimeFilters) {
        this.logHistory("Auto-enabling history due to configured time filters");
        configuration.history.enabled = true;
      }
    }
    if (configuration.mqttConnection && this.connectionRepository) {
      try {
        this.mqttConnection = this.connectionRepository.getConnection(configuration.mqttConnection);
        this.setupMQTTMessageHandler();
        this.logMqtt("MQTT Connection established:", configuration.mqttConnection);
      } catch (e) {
        console.error("OGCSTA: Could not establish MQTT connection:", e);
        this.mqttConnection = null;
      }
    } else if (isReInit && this.mqttConnection) {
      this.logMqtt("MQTT Connection removed from configuration");
      this.mqttConnection = null;
    }
    this.setupVariableWatchers();
    this.workerManager = getObservationsWorkerManager();
    try {
      const connection = this.connectionRepository.getConnection(this.connection);
      if (connection?.url) {
        this.connectionBaseUrl = connection.url;
      }
    } catch (e) {
      this.logCore("Could not get connection base URL:", e);
    }
  }
  callEvent(event, params, shouldUpdate = true) {
    if (event == FILTER) {
      const filterType = Object.keys(params)[0];
      if (filterType === "observations" && params.observations) {
        this.lastObservationsParams = params.observations;
      }
      if (!shouldUpdate) {
        if (this.filterDebounceTimer) {
          clearTimeout(this.filterDebounceTimer);
          this.filterDebounceTimer = null;
        }
        this.requestFlag = { key: FILTER, params };
        return this.getData("OGCSTAData").then(() => {
        }).catch((e) => {
          this.logCore("Silent getData error:", e);
        });
      }
      if (this.filterDebounceTimer && filterType === this.lastFilterType) {
        clearTimeout(this.filterDebounceTimer);
      } else if (this.filterDebounceTimer) {
        clearTimeout(this.filterDebounceTimer);
        this.filterDebounceTimer = null;
        this.pendingRequestFlag = { ...this.requestFlag };
        this.notify();
      }
      this.requestFlag = { key: FILTER, params };
      this.lastFilterType = filterType;
      this.filterDebounceTimer = setTimeout(() => {
        this.notify();
        this.filterDebounceTimer = null;
      }, 300);
    } else if (event == UPDATE_MQTT_SUBSCRIPTIONS) {
      if (this.mqttConnection) {
        this.logCore("Updating MQTT subscriptions:", params?.observations?.length || 0, "observations");
        this.subscribeToDatastreams(params?.observations || []);
        this.subscribeToLocations();
      }
    } else if (event == MQTT_UNSUBSCRIBE_ALL) {
      if (this.mqttConnection) {
        this.logCore("Unsubscribing from all MQTT topics");
        this.unsubscribeAll();
      }
    } else {
      this.requestFlag = { key: FILTERRESET, params };
      this.notify();
    }
  }
  destroy() {
    this.logCore("Store destroy() called");
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    if (this.filterDebounceTimer) {
      clearTimeout(this.filterDebounceTimer);
      this.filterDebounceTimer = null;
    }
    if (this.mqttUpdateTimer) {
      clearTimeout(this.mqttUpdateTimer);
      this.mqttUpdateTimer = null;
    }
    if (this.mqttConnection) {
      this.logCore(`Cleaning up MQTT subscriptions on destroy (${this.subscribedDatastreams.size} datastreams, ${this.subscribedLocations.size} locations)`);
      const client = this.mqttConnection.client;
      if (client && client.connected) {
        this.unsubscribeAll();
      } else {
        this.logCore("Client not connected, just clearing maps");
        this.subscribedDatastreams.clear();
        this.subscribedLocations.clear();
      }
      this.mqttConnection = null;
    }
    this.logCore("Store destroyed");
  }
  async getData(type, options) {
    const effectiveRequestFlag = this.pendingRequestFlag || this.requestFlag;
    this.pendingRequestFlag = null;
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    const baseFetch = (a, b) => {
      return connection.fetch({ url: a }, b);
    };
    const cachingFetch = getSharedCachingFetch(baseFetch, { ttl: 3e4, maxEntries: 200 });
    this.baseConfigration = new Configuration({
      basePath: "",
      fetchApi: cachingFetch
    });
    const isIsolatedRequest = options?.isolatedRequest === true;
    const shouldReload = options?.reload || effectiveRequestFlag.key == FILTERRESET || (!this.resultMap.things || this.resultMap.things.length === 0);
    if (shouldReload && !isIsolatedRequest) {
      this.resultMap = {
        things: [],
        datastreams: [],
        observations: [],
        locations: []
      };
    }
    const listOfPromesis = [];
    if (options?.filter) {
      const originalRequestFlag = this.requestFlag;
      this.requestFlag = { key: FILTER, params: options.filter };
      this.getPartitionalData(listOfPromesis);
      this.requestFlag = originalRequestFlag;
    } else if (effectiveRequestFlag.key == FILTER) {
      const originalRequestFlag = this.requestFlag;
      this.requestFlag = effectiveRequestFlag;
      this.getPartitionalData(listOfPromesis);
      this.requestFlag = originalRequestFlag;
    } else if (shouldReload) {
      this.getAllData(listOfPromesis);
    }
    if (listOfPromesis.length > 0) {
      const results = await Promise.all(listOfPromesis);
      if (isIsolatedRequest) {
        const isolatedData = {
          things: [],
          datastreams: [],
          observations: [],
          locations: []
        };
        for (const result of results) {
          if (result.datastreams) {
            isolatedData.datastreams = isolatedData.datastreams?.concat(result.datastreams);
          }
          if (result.things) {
            isolatedData.things = isolatedData.things?.concat(result.things);
          }
          if (result.observations) {
            isolatedData.observations = isolatedData.observations?.concat(result.observations);
          }
          if (result.locations) {
            isolatedData.locations = isolatedData.locations?.concat(result.locations);
          }
        }
        if (type == "OGCSTAData") {
          return {
            things: isolatedData.things ? isolatedData.things.map((t) => ({ ...t })) : [],
            datastreams: isolatedData.datastreams ? [...isolatedData.datastreams] : [],
            observations: isolatedData.observations ? [...isolatedData.observations] : [],
            locations: isolatedData.locations ? isolatedData.locations.map((loc) => ({ ...loc })) : []
          };
        }
        return isolatedData;
      }
      for (const result of results) {
        if (result.datastreams) {
          this.resultMap.datastreams = this.resultMap.datastreams?.concat(result.datastreams);
        }
        if (result.things) {
          this.resultMap.things = this.resultMap.things?.concat(result.things);
        }
        if (result.observations) {
          this.resultMap.observations = this.resultMap.observations?.concat(result.observations);
        }
        if (result.locations) {
          this.resultMap.locations = this.resultMap.locations?.concat(result.locations);
        }
      }
      if (options?.filter || effectiveRequestFlag.key == FILTER) {
        const observationsParam = options?.filter?.observations || effectiveRequestFlag.params?.observations;
        for (const d of observationsParam ?? []) {
          const ds = this.resultMap.datastreams?.find((s) => s.iotId == d.iotId);
          if (ds) {
            const datastreamObservations = this.resultMap.observations?.filter(
              (o) => o.ds_source == d.iotId
            ) || [];
            ds.observations = datastreamObservations;
            for (const thing of this.resultMap.things || []) {
              const nestedDs = thing.datastreams?.find((tds) => tds.iotId == d.iotId);
              if (nestedDs) {
                nestedDs.observations = datastreamObservations;
              }
            }
            for (const location of this.resultMap.locations || []) {
              for (const thing of location.things || []) {
                const locationDs = thing.datastreams?.find((lds) => lds.iotId == d.iotId);
                if (locationDs) {
                  locationDs.observations = datastreamObservations;
                }
              }
            }
          }
        }
      }
      for (const d of effectiveRequestFlag.params?.observations ?? []) {
        this.resultMap.observations = this.resultMap.observations?.filter(
          (o) => o.ds_source !== d.iotId
        ) || [];
      }
    }
    if (type == "OGCSTAData") {
      return {
        things: this.resultMap.things ? this.resultMap.things.map((t) => ({ ...t })) : [],
        datastreams: this.resultMap.datastreams ? [...this.resultMap.datastreams] : [],
        observations: this.resultMap.observations ? [...this.resultMap.observations] : [],
        locations: this.resultMap.locations ? this.resultMap.locations.map((loc) => ({ ...loc })) : []
      };
    }
    return this.resultMap;
  }
  getOriginalData() {
  }
  static validateConfiguration(configuration) {
    return !!configuration?.connection;
  }
  getAllData(listOfPromesis) {
    listOfPromesis.push(
      (async () => {
        try {
          const things = (await new ThingsApi(this.baseConfigration).v11ThingsGet({
            $expand: "Datastreams,Locations"
          })).value;
          return transformFromThingLocationDastreamToLocationThingDatastream(
            things
          );
        } catch (e) {
          if (e.response.status == 501) {
            return await this.fallBackSingleRequests();
          } else {
            throw e;
          }
        }
      })()
    );
  }
  async fallBackSingleRequests() {
    const things = (await new ThingsApi(this.baseConfigration).v11ThingsGet()).value;
    for (const thing of things) {
      if (!thing.locations) {
        thing.locations = [];
      }
      if (!thing.datastreams) {
        thing.datastreams = [];
      }
      try {
        if (thing.iotId) {
          const locs = (await new ThingsApi(
            this.baseConfigration
          ).v11ThingsEntityIdLocationsGet({ entityId: thing.iotId })).value;
          thing.locations = locs;
        }
      } catch (e) {
        this.logCore("Error:", e);
      }
      try {
        const dss = (await new ThingsApi(
          this.baseConfigration
        ).v11ThingsEntityIdDatastreamsGet({ entityId: thing.iotId })).value;
        thing.datastreams = dss;
      } catch (e) {
        this.logCore("Error:", e);
      }
    }
    const locations = transformFromThingLocationDastreamToLocationThingDatastream(things);
    return locations;
  }
  getPartitionalData(listOfPromesis) {
    this.getThings(listOfPromesis);
    this.getDataStreams(listOfPromesis);
    this.getObservations(listOfPromesis);
    this.getHistoricalLocations(listOfPromesis);
  }
  resolveTimeValue(timeValue, variableName) {
    if (variableName && this.variableRepository) {
      const variable = this.variableRepository.getVariable(variableName);
      if (variable && variable.value) {
        return variable.value;
      }
    }
    return timeValue;
  }
  buildHistoryFilter(historyConfig) {
    if (!historyConfig?.enabled) return "";
    const filterParts = [];
    const phenomenonStart = this.resolveTimeValue(
      historyConfig.phenomenonTime?.start,
      historyConfig.phenomenonTime?.startVariable
    );
    const phenomenonEnd = this.resolveTimeValue(
      historyConfig.phenomenonTime?.end,
      historyConfig.phenomenonTime?.endVariable
    );
    if (phenomenonStart) {
      filterParts.push(`phenomenonTime gt ${phenomenonStart}`);
    }
    if (phenomenonEnd) {
      filterParts.push(`phenomenonTime lt ${phenomenonEnd}`);
    }
    const resultStart = this.resolveTimeValue(
      historyConfig.resultTime?.start,
      historyConfig.resultTime?.startVariable
    );
    const resultEnd = this.resolveTimeValue(
      historyConfig.resultTime?.end,
      historyConfig.resultTime?.endVariable
    );
    if (resultStart) {
      filterParts.push(`resultTime gt ${resultStart}`);
    }
    if (resultEnd) {
      filterParts.push(`resultTime lt ${resultEnd}`);
    }
    const rangeStart = this.resolveTimeValue(
      historyConfig.timeRange?.start,
      historyConfig.timeRange?.startVariable
    );
    const rangeEnd = this.resolveTimeValue(
      historyConfig.timeRange?.end,
      historyConfig.timeRange?.endVariable
    );
    if (rangeStart) {
      filterParts.push(`phenomenonTime gt ${rangeStart}`);
    }
    if (rangeEnd) {
      filterParts.push(`phenomenonTime lt ${rangeEnd}`);
    }
    return filterParts.join(" and ");
  }
  getHistoryQueryParams(historyConfig) {
    const params = {};
    if (historyConfig?.enabled) {
      const filter = this.buildHistoryFilter(historyConfig);
      if (filter) {
        params.$filter = filter;
      }
      if (historyConfig.orderBy) {
        params.$orderby = historyConfig.orderBy;
      }
      if (historyConfig.limit) {
        params.$top = historyConfig.limit;
      }
    }
    return params;
  }
  async getHistoricalObservations(datastreamId, historyConfig) {
    if (!this.baseConfigration) {
      throw new Error("Base configuration not initialized");
    }
    const queryParams = this.getHistoryQueryParams(historyConfig);
    const data = await new DatastreamsApi(this.baseConfigration).v11DatastreamsEntityIdObservationsGet({
      entityId: datastreamId,
      ...queryParams
    });
    return data.value || [];
  }
  getObservations(listOfPromesis) {
    const historyConfig = this.configuration?.history;
    if (this.requestFlag.params && "observations" in this.requestFlag.params) {
      if ("all" in this.requestFlag.params.observations) {
        listOfPromesis.push(
          (async () => {
            const queryParams = this.getHistoryQueryParams(historyConfig);
            const data = (await new ObservationsApi(
              this.baseConfigration
            ).v11ObservationsGet(queryParams)).value;
            return { observations: data };
          })()
        );
      } else {
        const useMQTT = this.mqttConnection && !historyConfig?.enabled;
        if (useMQTT) {
          if (!this.initialLoadDone) {
            this.logMqtt("Initial load via HTTP, then switching to MQTT");
            for (const ds of this.requestFlag.params.observations) {
              listOfPromesis.push(
                (async () => {
                  const baseParams = {
                    entityId: ds.iotId + "",
                    $orderby: "phenomenonTime desc",
                    $top: 1
                  };
                  const data = (await new DatastreamsApi(
                    this.baseConfigration
                  ).v11DatastreamsEntityIdObservationsGet(baseParams)).value;
                  if (data && data.length > 0) {
                    data.forEach((obs) => {
                      obs["ds_source"] = ds.iotId + "";
                    });
                  }
                  return { observations: data };
                })()
              );
            }
            this.initialLoadDone = true;
            setTimeout(() => {
              this.subscribeToDatastreams(this.requestFlag.params.observations);
              this.subscribeToLocations();
            }, 100);
          } else {
            this.subscribeToDatastreams(this.requestFlag.params.observations);
            this.subscribeToLocations();
          }
        } else {
          if (this.workerManager && this.connectionBaseUrl) {
            const queryParams = this.getHistoryQueryParams(historyConfig);
            const historyParams = {
              $orderby: queryParams.$orderby || "phenomenonTime desc"
            };
            if (queryParams.$filter) historyParams.$filter = queryParams.$filter;
            if (!historyConfig?.enabled) {
              historyParams.$top = 1;
            } else if (queryParams.$top) {
              historyParams.$top = queryParams.$top;
            }
            listOfPromesis.push(
              (async () => {
                const results = await this.workerManager.fetchObservations(
                  this.connectionBaseUrl,
                  this.requestFlag.params.observations,
                  historyParams
                );
                const allObservations = [];
                for (const result of results) {
                  allObservations.push(...result.observations);
                }
                return { observations: allObservations };
              })()
            );
          } else {
            for (const ds of this.requestFlag.params.observations) {
              listOfPromesis.push(
                (async () => {
                  const queryParams = this.getHistoryQueryParams(historyConfig);
                  const baseParams = {
                    entityId: ds.iotId + "",
                    $orderby: "phenomenonTime desc"
                  };
                  if (!historyConfig?.enabled) {
                    baseParams.$top = 1;
                  }
                  const data = (await new DatastreamsApi(
                    this.baseConfigration
                  ).v11DatastreamsEntityIdObservationsGet({
                    ...baseParams,
                    ...queryParams
                  })).value;
                  if (data && data.length > 0) {
                    data.forEach((obs) => {
                      obs["ds_source"] = ds.iotId + "";
                    });
                  }
                  return { observations: data };
                })()
              );
            }
          }
        }
      }
    } else if (this.mqttConnection && !historyConfig?.enabled) {
      this.logMqtt("No observations requested, cleaning up subscriptions");
      this.subscribeToDatastreams([]);
      this.subscribeToLocations();
    }
  }
  getDataStreams(listOfPromesis) {
    if (this.requestFlag.params && "datastreams" in this.requestFlag.params) {
      if ("all" in this.requestFlag.params.datastreams) {
        listOfPromesis.push(
          (async () => {
            const data = (await new DatastreamsApi(
              this.baseConfigration
            ).v11DatastreamsGet()).value;
            return { datastreams: data };
          })()
        );
      } else if ("ids" in this.requestFlag.params.datastreams) {
        for (const id of this.requestFlag.params.datastreams.ids) {
          listOfPromesis.push(
            (async () => {
              const data = (await new DatastreamsApi(
                this.baseConfigration
              ).v11DatastreamsEntityIdObservationsGet({
                entityId: id,
                $top: 1
              })).value;
              return { observations: data };
            })()
          );
        }
      }
    }
  }
  getThings(listOfPromesis) {
    if (this.requestFlag.params && "things" in this.requestFlag.params) {
      if ("all" in this.requestFlag.params.things) {
        const includeDatastreams = this.requestFlag.params.things.all?.includeDatastreams;
        const includeLocations = this.requestFlag.params.things.all?.includeLocations;
        let expand = [];
        if (includeDatastreams) expand.push("Datastreams");
        if (includeLocations) expand.push("Locations");
        listOfPromesis.push(
          (async () => {
            try {
              const expandParam = expand.length > 0 ? expand.join(",") : void 0;
              const data = (await new ThingsApi(this.baseConfigration).v11ThingsGet({
                $expand: expandParam
              })).value;
              if (expand.length > 0) {
                return transformFromThingLocationDastreamToLocationThingDatastream(data);
              } else {
                return { things: data };
              }
            } catch (e) {
              if (e.response.status == 501) {
                if (expand.includes("Datastreams") || expand.includes("Locations")) {
                  return await this.fallBackSingleRequests();
                } else {
                  const data = (await new ThingsApi(this.baseConfigration).v11ThingsGet()).value;
                  return { things: data };
                }
              } else {
                throw e;
              }
            }
          })()
        );
      } else if ("ids" in this.requestFlag.params.things) {
        this.logData("🔍 OgcSta: Loading things by IDs:", this.requestFlag.params.things.ids);
        const includeDatastreams = this.requestFlag.params.things.includeDatastreams;
        const includeLocations = this.requestFlag.params.things.includeLocations;
        let expand = [];
        if (includeDatastreams) expand.push("Datastreams");
        if (includeLocations) expand.push("Locations");
        this.logData("🔍 OgcSta: Expand params:", expand);
        for (const id of this.requestFlag.params.things.ids) {
          listOfPromesis.push(
            (async () => {
              const expandParam = expand.length > 0 ? expand.join(",") : void 0;
              this.logData(`🔍 OgcSta: Fetching thing ${id} with expand: ${expandParam}`);
              const thing = await new ThingsApi(
                this.baseConfigration
              ).v11ThingsEntityIdGet({ entityId: id, $expand: expandParam });
              if (expand.length > 0) {
                return transformFromThingLocationDastreamToLocationThingDatastream([thing]);
              } else {
                return { things: [thing] };
              }
            })()
          );
        }
      }
    }
  }
  collectVariableNames() {
    const variables = [];
    const historyConfig = this.configuration?.history;
    if (historyConfig?.enabled) {
      if (historyConfig.timeRange?.startVariable) variables.push(historyConfig.timeRange.startVariable);
      if (historyConfig.timeRange?.endVariable) variables.push(historyConfig.timeRange.endVariable);
      if (historyConfig.phenomenonTime?.startVariable) variables.push(historyConfig.phenomenonTime.startVariable);
      if (historyConfig.phenomenonTime?.endVariable) variables.push(historyConfig.phenomenonTime.endVariable);
      if (historyConfig.resultTime?.startVariable) variables.push(historyConfig.resultTime.startVariable);
      if (historyConfig.resultTime?.endVariable) variables.push(historyConfig.resultTime.endVariable);
    }
    return variables;
  }
  setupVariableWatchers() {
    if (!this.variableRepository) return;
    const variableNames = this.collectVariableNames();
    for (const variableName of variableNames) {
      if (!this.watchedVariables.has(variableName)) {
        const variable = this.variableRepository.getVariable(variableName);
        if (variable) {
          variable.subscribe(() => {
            this.onVariableChanged();
          });
          this.watchedVariables.add(variableName);
        }
      }
    }
  }
  async fetchHistoricalLocations() {
    const historyConfig = this.configuration?.history;
    if (!historyConfig?.enabled) return;
    if (this.configuration?.useCurrentLocationInsteadOfHistorical) {
      this.logHistory("📍 Using current locations instead of historical locations (useCurrentLocationInsteadOfHistorical=true)");
      return;
    }
    const timeStart = this.resolveTimeValue(
      historyConfig.timeRange?.start,
      historyConfig.timeRange?.startVariable
    ) || this.resolveTimeValue(
      historyConfig.phenomenonTime?.start,
      historyConfig.phenomenonTime?.startVariable
    );
    const timeEnd = this.resolveTimeValue(
      historyConfig.timeRange?.end,
      historyConfig.timeRange?.endVariable
    ) || this.resolveTimeValue(
      historyConfig.phenomenonTime?.end,
      historyConfig.phenomenonTime?.endVariable
    );
    if (!timeEnd) return;
    const datastreams = this.requestFlag.params?.observations || [];
    const thingIds = /* @__PURE__ */ new Set();
    for (const ds of datastreams) {
      const datastream = this.resultMap.datastreams?.find((d) => d.iotId === ds.iotId);
      if (datastream?.thing?.iotId) {
        thingIds.add(datastream.thing.iotId);
      }
    }
    if (thingIds.size === 0) return;
    this.logHistory(`📍 Fetching historical locations for ${thingIds.size} things at time range: ${timeStart || "none"} to ${timeEnd}`);
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    for (const thingId of thingIds) {
      try {
        let timeFilter = `time le ${timeEnd}`;
        if (timeStart) {
          timeFilter = `time ge ${timeStart} and ${timeFilter}`;
        }
        const url = `/v1.1/Things(${thingId})/HistoricalLocations?$filter=${timeFilter}&$orderby=time desc&$top=1&$expand=Locations`;
        const response = await connection.fetch({ url }, {
          method: "GET"
        });
        const data = await response.json();
        const historicalLocations = data.value;
        if (historicalLocations && historicalLocations.length > 0) {
          const historicalLocation = historicalLocations[0];
          const locations = historicalLocation.Locations;
          if (locations && locations.length > 0) {
            this.logHistory(`📍 Found historical location for thing ${thingId}:`, locations[0]);
            const thing = this.resultMap.things?.find((t) => t.iotId === thingId);
            if (thing) {
              this.logHistory(`🔵 BEFORE UPDATE - Thing ${thingId} current location:`, JSON.stringify(thing.locations));
            }
            for (const datastream of this.resultMap.datastreams || []) {
              if (datastream.thing?.iotId === thingId) {
                if (datastream.thing.locations) {
                  datastream.thing.locations = locations;
                  this.logHistory(`📍 Updated datastream ${datastream.iotId} with historical location`);
                }
              }
            }
            if (thing && thing.locations) {
              thing.locations = locations;
              this.logHistory(`🟢 AFTER UPDATE - Thing ${thingId} new location:`, JSON.stringify(thing.locations));
            }
            for (const location of locations) {
              const existingLocation = this.resultMap.locations?.find((loc) => loc.iotId === location.iotId);
              if (existingLocation) {
                existingLocation.location = location.location;
                existingLocation.encodingType = location.encodingType;
                if (location.name) existingLocation.name = location.name;
                if (location.description) existingLocation.description = location.description;
                if (!existingLocation.things) {
                  existingLocation.things = [];
                }
                if (thing && !existingLocation.things.find((t) => t.iotId === thingId)) {
                  existingLocation.things.push(thing);
                  this.logHistory(`📍 Added thing ${thingId} back to location ${location.iotId}`);
                }
              } else if (thing) {
                const newLocation = { ...location, things: [thing] };
                this.resultMap.locations?.push(newLocation);
                this.logHistory(`📍 Created new location ${location.iotId} with thing ${thingId}`);
              }
            }
          }
        } else {
          this.logHistory(`📍 No historical location found for thing ${thingId} at time ${timeEnd}`);
          const thing = this.resultMap.things?.find((t) => t.iotId === thingId);
          for (const datastream of this.resultMap.datastreams || []) {
            if (datastream.thing && datastream.thing.iotId === thingId) {
              datastream.thing.locations = [];
              this.logHistory(`📍 Cleared location for datastream ${datastream.iotId}`);
            }
          }
          if (thing && thing.locations) {
            thing.locations = [];
            this.logHistory(`🟢 Cleared location for Thing ${thingId}`);
          }
          for (const location of this.resultMap.locations || []) {
            if (location.things) {
              const thingIndex = location.things.findIndex((t) => t.iotId === thingId);
              if (thingIndex !== -1) {
                location.things.splice(thingIndex, 1);
                this.logHistory(`📍 Removed thing ${thingId} from location ${location.iotId}`);
              }
            }
          }
          this.resultMap.locations = this.resultMap.locations?.filter(
            (loc) => loc.things && loc.things.length > 0
          ) || [];
        }
      } catch (error) {
        this.logHistory(`❌ Error fetching historical location for thing ${thingId}:`, error);
      }
    }
  }
  getHistoricalLocations(listOfPromesis) {
    if (this.configuration?.useCurrentLocationInsteadOfHistorical) {
      this.logHistory("📍 Using current locations instead of historical locations (useCurrentLocationInsteadOfHistorical=true)");
      return;
    }
    const historyConfig = this.configuration?.history;
    if (this.requestFlag.params && "historicalLocations" in this.requestFlag.params) {
      const things = this.requestFlag.params.historicalLocations;
      for (const thing of things) {
        listOfPromesis.push(
          (async () => {
            const thingId = thing.iotId || thing["@iot.id"];
            const timeStart = this.resolveTimeValue(
              historyConfig?.timeRange?.start,
              historyConfig?.timeRange?.startVariable
            ) || this.resolveTimeValue(
              historyConfig?.phenomenonTime?.start,
              historyConfig?.phenomenonTime?.startVariable
            );
            const timeEnd = this.resolveTimeValue(
              historyConfig?.timeRange?.end,
              historyConfig?.timeRange?.endVariable
            ) || this.resolveTimeValue(
              historyConfig?.phenomenonTime?.end,
              historyConfig?.phenomenonTime?.endVariable
            );
            if (!timeEnd || !thingId) {
              return {};
            }
            try {
              const connection = this.connectionRepository.getConnection(
                this.connection
              );
              let timeFilter = `time le ${timeEnd}`;
              if (timeStart) {
                timeFilter = `time ge ${timeStart} and ${timeFilter}`;
              }
              const url = `/v1.1/Things(${thingId})/HistoricalLocations?$filter=${timeFilter}&$orderby=time desc&$top=1&$expand=Locations`;
              const response = await connection.fetch({ url }, {
                method: "GET"
              });
              const data = await response.json();
              const historicalLocations = data.value;
              if (historicalLocations && historicalLocations.length > 0) {
                const historicalLocation = historicalLocations[0];
                const locations = historicalLocation.Locations;
                if (locations && locations.length > 0) {
                  const location = locations[0];
                  this.logHistory(`📍 Found historical location for thing ${thingId}:`, location);
                  const thingInMap = this.resultMap.things?.find((t) => t.iotId === thingId);
                  if (thingInMap) {
                    thingInMap.locations = [location];
                  }
                  for (const datastream of this.resultMap.datastreams || []) {
                    if (datastream.thing?.iotId === thingId) {
                      if (datastream.thing) {
                        datastream.thing.locations = [location];
                      }
                    }
                  }
                  const existingLocation = this.resultMap.locations?.find(
                    (loc) => loc.things?.some((t) => t.iotId === thingId)
                  );
                  if (existingLocation) {
                    existingLocation.location = location.location;
                    existingLocation.encodingType = location.encodingType;
                    if (location.name) existingLocation.name = location.name;
                    if (location.description) existingLocation.description = location.description;
                  }
                }
              } else {
                this.logHistory(`📍 No historical location found for thing ${thingId} at time ${timeEnd}`);
              }
            } catch (error) {
              this.logHistory(`❌ Error fetching historical location for thing ${thingId}:`, error);
            }
            return {};
          })()
        );
      }
    }
  }
  onVariableChanged() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(async () => {
      try {
        if (this.lastObservationsParams) {
          this.requestFlag = { key: FILTER, params: { observations: this.lastObservationsParams } };
          await this.getData("OGCSTAData");
          await this.fetchHistoricalLocations();
          this.requestFlag = { key: NOACTION, params: void 0 };
        }
        this.notify();
      } catch (error) {
        this.logCore("Error refetching observations after variable change:", error);
      }
    }, 100);
  }
  // ==================== MQTT Methods ====================
  setupMQTTMessageHandler() {
    if (!this.mqttConnection) return;
    if (typeof this.mqttConnection.subscribe === "function") {
      this.logMqtt("Setting up message handler");
      this.mqttConnection.subscribe((event, data, topic) => {
        if (event === "message" && topic) {
          this.logMqtt("Raw message received - topic:", topic, "data:", data);
          this.onMQTTMessage(data, topic);
        }
      });
    } else {
      this.logMqtt(" Connection does not have subscribe method");
    }
  }
  onMQTTMessage(message, topic) {
    try {
      if (typeof message === "string" && !message.startsWith("{")) {
        return;
      }
      const data = typeof message === "string" ? JSON.parse(message) : message;
      if (!data || typeof data !== "object") {
        return;
      }
      if (!data["@iot.id"]) {
        this.logMqtt(" Invalid message (missing @iot.id)", message);
        return;
      }
      const observationMatch = topic.match(/Observations\(([^)]+)\)/);
      if (observationMatch) {
        this.handleObservationUpdate(observationMatch[1], data);
        return;
      }
      const locationMatch = topic.match(/Locations\(([^)]+)\)/);
      if (locationMatch) {
        this.handleLocationUpdate(locationMatch[1], data);
        return;
      }
      this.logMqtt(" Unknown topic format:", topic);
    } catch (e) {
      this.logMqtt(" Error parsing message:", e, message);
    }
  }
  handleObservationUpdate(datastreamId, observation) {
    this.logMqtt(`Received observation for datastream ${datastreamId}:`, observation);
    const datastream = this.resultMap.datastreams?.find((ds) => ds.iotId === datastreamId);
    if (datastream) {
      datastream.observations = [observation];
      this.logMqtt(`Updated datastream ${datastreamId} observations`);
      this.triggerDebouncedUpdate();
    } else {
      this.logMqtt(
        `Datastream ${datastreamId} not found in resultMap. Available datastreams:`,
        this.resultMap.datastreams?.map((ds) => ds.iotId).slice(0, 10)
      );
    }
  }
  handleLocationUpdate(locationId, location) {
    this.logMqtt(`Received location update for ${locationId}:`, location);
    const existingLocation = this.resultMap.locations?.find((loc) => loc.iotId === locationId);
    if (existingLocation) {
      existingLocation.location = location.location;
      existingLocation.encodingType = location.encodingType;
      if (location.name) existingLocation.name = location.name;
      if (location.description) existingLocation.description = location.description;
      this.logMqtt(`Updated location ${locationId}`);
      for (const thing of this.resultMap.things || []) {
        const thingLocation = thing.locations?.find((loc) => loc.iotId === locationId);
        if (thingLocation) {
          thingLocation.location = location.location;
          thingLocation.encodingType = location.encodingType;
          if (location.name) thingLocation.name = location.name;
          if (location.description) thingLocation.description = location.description;
        }
      }
      for (const datastream of this.resultMap.datastreams || []) {
        const datastreamLocation = datastream.thing?.locations?.find((loc) => loc.iotId === locationId);
        if (datastreamLocation) {
          datastreamLocation.location = location.location;
          datastreamLocation.encodingType = location.encodingType;
          if (location.name) datastreamLocation.name = location.name;
          if (location.description) datastreamLocation.description = location.description;
        }
      }
      this.triggerDebouncedUpdate();
    } else {
      console.warn(`OGCSTA MQTT: Location ${locationId} not found in resultMap`);
    }
  }
  triggerDebouncedUpdate() {
    this.hasPendingMqttUpdates = true;
    if (this.mqttUpdateTimer) {
      clearTimeout(this.mqttUpdateTimer);
    }
    this.mqttUpdateTimer = setTimeout(() => {
      if (this.hasPendingMqttUpdates) {
        this.notify();
        this.hasPendingMqttUpdates = false;
      }
      this.mqttUpdateTimer = null;
    }, 100);
  }
  subscribeToDatastreams(datastreams) {
    if (!this.mqttConnection) return;
    const client = this.mqttConnection.client;
    if (!client || !client.connected) {
      this.logMqtt("Client not connected, skipping subscription update");
      return;
    }
    const requestedIds = /* @__PURE__ */ new Set();
    if (datastreams && datastreams.length > 0) {
      for (const ds of datastreams) {
        const datastreamId = ds.iotId || ds["@iot.id"];
        if (datastreamId) {
          requestedIds.add(datastreamId);
        }
      }
    }
    const currentIds = new Set(this.subscribedDatastreams.keys());
    const hasChanges = requestedIds.size !== currentIds.size || Array.from(requestedIds).some((id) => !currentIds.has(id));
    if (!hasChanges) {
      return;
    }
    this.logMqtt(`Updating subscriptions - current: ${currentIds.size}, requested: ${requestedIds.size}`);
    const toRemove = Array.from(currentIds).filter((id) => !requestedIds.has(id));
    const toAdd = Array.from(requestedIds).filter((id) => !currentIds.has(id));
    if (toRemove.length > 0) {
      this.logMqtt(`Unsubscribing from ${toRemove.length} topics:`, toRemove.slice(0, 5));
      for (const datastreamId of toRemove) {
        const storeKey = `${this.connection}_${datastreamId}`;
        if (typeof this.mqttConnection.disconnectStore === "function") {
          this.mqttConnection.disconnectStore(storeKey);
        }
        this.subscribedDatastreams.delete(datastreamId);
      }
    }
    if (toAdd.length > 0) {
      this.logMqtt(`Subscribing to ${toAdd.length} new topics`);
      for (const ds of datastreams) {
        const datastreamId = ds.iotId || ds["@iot.id"];
        if (!datastreamId || !toAdd.includes(datastreamId)) continue;
        const topic = `v1.1/Observations(${datastreamId})`;
        const storeKey = `${this.connection}_${datastreamId}`;
        if (typeof this.mqttConnection.connectStore === "function") {
          this.mqttConnection.connectStore(storeKey, topic);
          this.subscribedDatastreams.set(datastreamId, topic);
          this.logMqtt(`Subscribed to ${topic}`);
        }
      }
    }
  }
  subscribeToLocations() {
    if (!this.mqttConnection) return;
    const client = this.mqttConnection.client;
    if (!client || !client.connected) {
      this.logMqtt("Client not connected, skipping location subscription update");
      return;
    }
    const locationIds = /* @__PURE__ */ new Set();
    for (const location of this.resultMap.locations || []) {
      if (location.iotId) {
        locationIds.add(location.iotId);
      }
    }
    const currentLocationIds = new Set(this.subscribedLocations.keys());
    const hasChanges = locationIds.size !== currentLocationIds.size || Array.from(locationIds).some((id) => !currentLocationIds.has(id));
    if (!hasChanges) {
      return;
    }
    this.logMqtt(`Updating location subscriptions - current: ${currentLocationIds.size}, requested: ${locationIds.size}`);
    for (const locationId of currentLocationIds) {
      if (!locationIds.has(locationId)) {
        const storeKey = `${this.connection}_loc_${locationId}`;
        if (typeof this.mqttConnection.disconnectStore === "function") {
          this.mqttConnection.disconnectStore(storeKey);
          this.logMqtt(`Unsubscribed from v1.1/Locations(${locationId})`);
        }
      }
    }
    this.subscribedLocations.clear();
    if (locationIds.size > 0) {
      this.logMqtt(`Subscribing to ${locationIds.size} location topics`);
      for (const locationId of locationIds) {
        const topic = `v1.1/Locations(${locationId})`;
        const storeKey = `${this.connection}_loc_${locationId}`;
        if (typeof this.mqttConnection.connectStore === "function") {
          this.mqttConnection.connectStore(storeKey, topic);
          this.subscribedLocations.set(locationId, topic);
          this.logMqtt(`Subscribed to ${topic}`);
        }
      }
    }
  }
  unsubscribeAll() {
    if (!this.mqttConnection) return;
    this.logMqtt(`Unsubscribing from ${this.subscribedDatastreams.size} datastreams and ${this.subscribedLocations.size} locations`);
    if (typeof this.mqttConnection.disconnectStore === "function") {
      for (const datastreamId of this.subscribedDatastreams.keys()) {
        const storeKey = `${this.connection}_${datastreamId}`;
        this.mqttConnection.disconnectStore(storeKey);
      }
      for (const locationId of this.subscribedLocations.keys()) {
        const storeKey = `${this.connection}_loc_${locationId}`;
        this.mqttConnection.disconnectStore(storeKey);
      }
    }
    this.subscribedDatastreams.clear();
    this.subscribedLocations.clear();
  }
};
__decorateClass([
  inject(CONNECTION_REPOSITORY)
], OgcStaStore.prototype, "connectionRepository", 2);
__decorateClass([
  inject(VARIABLE_REPOSITORY)
], OgcStaStore.prototype, "variableRepository", 2);
__decorateClass([
  inject(LOGGER_FACTORY)
], OgcStaStore.prototype, "loggerFactory", 2);
OgcStaStore = __decorateClass([
  injectable()
], OgcStaStore);
const OGC_STA_STORE_FACTORY = serviceId("OgcStaStoreFactory");
const factorySymbol = Symbol.for(OGC_STA_STORE_FACTORY);
function activate$1({ services }) {
  services.register(OGC_STA_STORE_FACTORY, (config) => {
    if (!OgcStaStore.validateConfiguration(config)) {
      throw new Error(
        "Invalid OgcStaStore configuration. Please provide a valid configuration."
      );
    }
    const store = services.construct(OgcStaStore);
    store.init(config);
    return store;
  });
}
function deactivate$1({ services }) {
  services.unregister(OGC_STA_STORE_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILTER,
  FILTERRESET,
  MQTT_UNSUBSCRIBE_ALL,
  OGC_STA_STORE_FACTORY,
  UPDATE_MQTT_SUBSCRIPTIONS,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.ogcsta";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.ogcsta");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  FILTER,
  FILTERRESET,
  MQTT_UNSUBSCRIBE_ALL,
  OGC_STA_STORE_FACTORY,
  UPDATE_MQTT_SUBSCRIPTIONS,
  activate,
  deactivate,
  factorySymbol
};
