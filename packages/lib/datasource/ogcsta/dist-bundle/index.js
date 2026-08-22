const { BaseDatasource } = __tsm__.require("org.eclipse.daanse.board.app.lib.datasource.base");
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
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var re = { exports: {} };
var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  const SEMVER_SPEC_VERSION = "2.0.0";
  const MAX_LENGTH = 256;
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991;
  const MAX_SAFE_COMPONENT_LENGTH = 16;
  const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
  const RELEASE_TYPES = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease"
  ];
  constants = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
  return constants;
}
var debug_1;
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug) return debug_1;
  hasRequiredDebug = 1;
  var define_process_env_default = {};
  const debug = typeof process === "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
  };
  debug_1 = debug;
  return debug_1;
}
var hasRequiredRe;
function requireRe() {
  if (hasRequiredRe) return re.exports;
  hasRequiredRe = 1;
  (function(module, exports$1) {
    const {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = requireConstants();
    const debug = requireDebug();
    exports$1 = module.exports = {};
    const re2 = exports$1.re = [];
    const safeRe = exports$1.safeRe = [];
    const src = exports$1.src = [];
    const safeSrc = exports$1.safeSrc = [];
    const t = exports$1.t = {};
    let R = 0;
    const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    const safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    const makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    const createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports$1.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports$1.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports$1.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(re, re.exports);
  return re.exports;
}
var parseOptions_1;
var hasRequiredParseOptions;
function requireParseOptions() {
  if (hasRequiredParseOptions) return parseOptions_1;
  hasRequiredParseOptions = 1;
  const looseOption = Object.freeze({ loose: true });
  const emptyOpts = Object.freeze({});
  const parseOptions = (options) => {
    if (!options) {
      return emptyOpts;
    }
    if (typeof options !== "object") {
      return looseOption;
    }
    return options;
  };
  parseOptions_1 = parseOptions;
  return parseOptions_1;
}
var identifiers;
var hasRequiredIdentifiers;
function requireIdentifiers() {
  if (hasRequiredIdentifiers) return identifiers;
  hasRequiredIdentifiers = 1;
  const numeric = /^[0-9]+$/;
  const compareIdentifiers = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a === b ? 0 : a < b ? -1 : 1;
    }
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
      a = +a;
      b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  };
  const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
  identifiers = {
    compareIdentifiers,
    rcompareIdentifiers
  };
  return identifiers;
}
var semver$1;
var hasRequiredSemver$1;
function requireSemver$1() {
  if (hasRequiredSemver$1) return semver$1;
  hasRequiredSemver$1 = 1;
  const debug = requireDebug();
  const { MAX_LENGTH, MAX_SAFE_INTEGER } = requireConstants();
  const { safeRe: re2, t } = requireRe();
  const parseOptions = requireParseOptions();
  const { compareIdentifiers } = requireIdentifiers();
  class SemVer {
    constructor(version, options) {
      options = parseOptions(options);
      if (version instanceof SemVer) {
        if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== "string") {
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
      }
      if (version.length > MAX_LENGTH) {
        throw new TypeError(
          `version is longer than ${MAX_LENGTH} characters`
        );
      }
      debug("SemVer", version, options);
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      const m = version.trim().match(options.loose ? re2[t.LOOSE] : re2[t.FULL]);
      if (!m) {
        throw new TypeError(`Invalid Version: ${version}`);
      }
      this.raw = version;
      this.major = +m[1];
      this.minor = +m[2];
      this.patch = +m[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (!m[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m[4].split(".").map((id) => {
          if (/^[0-9]+$/.test(id)) {
            const num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m[5] ? m[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`;
      if (this.prerelease.length) {
        this.version += `-${this.prerelease.join(".")}`;
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(other) {
      debug("SemVer.compare", this.version, this.options, other);
      if (!(other instanceof SemVer)) {
        if (typeof other === "string" && other === this.version) {
          return 0;
        }
        other = new SemVer(other, this.options);
      }
      if (other.version === this.version) {
        return 0;
      }
      return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.major < other.major) {
        return -1;
      }
      if (this.major > other.major) {
        return 1;
      }
      if (this.minor < other.minor) {
        return -1;
      }
      if (this.minor > other.minor) {
        return 1;
      }
      if (this.patch < other.patch) {
        return -1;
      }
      if (this.patch > other.patch) {
        return 1;
      }
      return 0;
    }
    comparePre(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }
      let i = 0;
      do {
        const a = this.prerelease[i];
        const b = other.prerelease[i];
        debug("prerelease compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    compareBuild(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      let i = 0;
      do {
        const a = this.build[i];
        const b = other.build[i];
        debug("build compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
      if (release.startsWith("pre")) {
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (identifier) {
          const match = `-${identifier}`.match(this.options.loose ? re2[t.PRERELEASELOOSE] : re2[t.PRERELEASE]);
          if (!match || match[1] !== identifier) {
            throw new Error(`invalid identifier: ${identifier}`);
          }
        }
      }
      switch (release) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", identifier, identifierBase);
          this.inc("pre", identifier, identifierBase);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", identifier, identifierBase);
          }
          this.inc("pre", identifier, identifierBase);
          break;
        case "release":
          if (this.prerelease.length === 0) {
            throw new Error(`version ${this.raw} is not a prerelease`);
          }
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const base = Number(identifierBase) ? 1 : 0;
          if (this.prerelease.length === 0) {
            this.prerelease = [base];
          } else {
            let i = this.prerelease.length;
            while (--i >= 0) {
              if (typeof this.prerelease[i] === "number") {
                this.prerelease[i]++;
                i = -2;
              }
            }
            if (i === -1) {
              if (identifier === this.prerelease.join(".") && identifierBase === false) {
                throw new Error("invalid increment argument: identifier already exists");
              }
              this.prerelease.push(base);
            }
          }
          if (identifier) {
            let prerelease = [identifier, base];
            if (identifierBase === false) {
              prerelease = [identifier];
            }
            if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = prerelease;
              }
            } else {
              this.prerelease = prerelease;
            }
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${release}`);
      }
      this.raw = this.format();
      if (this.build.length) {
        this.raw += `+${this.build.join(".")}`;
      }
      return this;
    }
  }
  semver$1 = SemVer;
  return semver$1;
}
var parse_1;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse_1;
  hasRequiredParse = 1;
  const SemVer = requireSemver$1();
  const parse = (version, options, throwErrors = false) => {
    if (version instanceof SemVer) {
      return version;
    }
    try {
      return new SemVer(version, options);
    } catch (er) {
      if (!throwErrors) {
        return null;
      }
      throw er;
    }
  };
  parse_1 = parse;
  return parse_1;
}
var valid_1;
var hasRequiredValid$1;
function requireValid$1() {
  if (hasRequiredValid$1) return valid_1;
  hasRequiredValid$1 = 1;
  const parse = requireParse();
  const valid2 = (version, options) => {
    const v = parse(version, options);
    return v ? v.version : null;
  };
  valid_1 = valid2;
  return valid_1;
}
var clean_1;
var hasRequiredClean;
function requireClean() {
  if (hasRequiredClean) return clean_1;
  hasRequiredClean = 1;
  const parse = requireParse();
  const clean = (version, options) => {
    const s = parse(version.trim().replace(/^[=v]+/, ""), options);
    return s ? s.version : null;
  };
  clean_1 = clean;
  return clean_1;
}
var inc_1;
var hasRequiredInc;
function requireInc() {
  if (hasRequiredInc) return inc_1;
  hasRequiredInc = 1;
  const SemVer = requireSemver$1();
  const inc = (version, release, options, identifier, identifierBase) => {
    if (typeof options === "string") {
      identifierBase = identifier;
      identifier = options;
      options = void 0;
    }
    try {
      return new SemVer(
        version instanceof SemVer ? version.version : version,
        options
      ).inc(release, identifier, identifierBase).version;
    } catch (er) {
      return null;
    }
  };
  inc_1 = inc;
  return inc_1;
}
var diff_1;
var hasRequiredDiff;
function requireDiff() {
  if (hasRequiredDiff) return diff_1;
  hasRequiredDiff = 1;
  const parse = requireParse();
  const diff = (version1, version2) => {
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
      return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
      if (!lowVersion.patch && !lowVersion.minor) {
        return "major";
      }
      if (lowVersion.compareMain(highVersion) === 0) {
        if (lowVersion.minor && !lowVersion.patch) {
          return "minor";
        }
        return "patch";
      }
    }
    const prefix = highHasPre ? "pre" : "";
    if (v1.major !== v2.major) {
      return prefix + "major";
    }
    if (v1.minor !== v2.minor) {
      return prefix + "minor";
    }
    if (v1.patch !== v2.patch) {
      return prefix + "patch";
    }
    return "prerelease";
  };
  diff_1 = diff;
  return diff_1;
}
var major_1;
var hasRequiredMajor;
function requireMajor() {
  if (hasRequiredMajor) return major_1;
  hasRequiredMajor = 1;
  const SemVer = requireSemver$1();
  const major = (a, loose) => new SemVer(a, loose).major;
  major_1 = major;
  return major_1;
}
var minor_1;
var hasRequiredMinor;
function requireMinor() {
  if (hasRequiredMinor) return minor_1;
  hasRequiredMinor = 1;
  const SemVer = requireSemver$1();
  const minor = (a, loose) => new SemVer(a, loose).minor;
  minor_1 = minor;
  return minor_1;
}
var patch_1;
var hasRequiredPatch;
function requirePatch() {
  if (hasRequiredPatch) return patch_1;
  hasRequiredPatch = 1;
  const SemVer = requireSemver$1();
  const patch = (a, loose) => new SemVer(a, loose).patch;
  patch_1 = patch;
  return patch_1;
}
var prerelease_1;
var hasRequiredPrerelease;
function requirePrerelease() {
  if (hasRequiredPrerelease) return prerelease_1;
  hasRequiredPrerelease = 1;
  const parse = requireParse();
  const prerelease = (version, options) => {
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  };
  prerelease_1 = prerelease;
  return prerelease_1;
}
var compare_1;
var hasRequiredCompare;
function requireCompare() {
  if (hasRequiredCompare) return compare_1;
  hasRequiredCompare = 1;
  const SemVer = requireSemver$1();
  const compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
  compare_1 = compare;
  return compare_1;
}
var rcompare_1;
var hasRequiredRcompare;
function requireRcompare() {
  if (hasRequiredRcompare) return rcompare_1;
  hasRequiredRcompare = 1;
  const compare = requireCompare();
  const rcompare = (a, b, loose) => compare(b, a, loose);
  rcompare_1 = rcompare;
  return rcompare_1;
}
var compareLoose_1;
var hasRequiredCompareLoose;
function requireCompareLoose() {
  if (hasRequiredCompareLoose) return compareLoose_1;
  hasRequiredCompareLoose = 1;
  const compare = requireCompare();
  const compareLoose = (a, b) => compare(a, b, true);
  compareLoose_1 = compareLoose;
  return compareLoose_1;
}
var compareBuild_1;
var hasRequiredCompareBuild;
function requireCompareBuild() {
  if (hasRequiredCompareBuild) return compareBuild_1;
  hasRequiredCompareBuild = 1;
  const SemVer = requireSemver$1();
  const compareBuild = (a, b, loose) => {
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
  };
  compareBuild_1 = compareBuild;
  return compareBuild_1;
}
var sort_1;
var hasRequiredSort;
function requireSort() {
  if (hasRequiredSort) return sort_1;
  hasRequiredSort = 1;
  const compareBuild = requireCompareBuild();
  const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
  sort_1 = sort;
  return sort_1;
}
var rsort_1;
var hasRequiredRsort;
function requireRsort() {
  if (hasRequiredRsort) return rsort_1;
  hasRequiredRsort = 1;
  const compareBuild = requireCompareBuild();
  const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
  rsort_1 = rsort;
  return rsort_1;
}
var gt_1;
var hasRequiredGt;
function requireGt() {
  if (hasRequiredGt) return gt_1;
  hasRequiredGt = 1;
  const compare = requireCompare();
  const gt = (a, b, loose) => compare(a, b, loose) > 0;
  gt_1 = gt;
  return gt_1;
}
var lt_1;
var hasRequiredLt;
function requireLt() {
  if (hasRequiredLt) return lt_1;
  hasRequiredLt = 1;
  const compare = requireCompare();
  const lt = (a, b, loose) => compare(a, b, loose) < 0;
  lt_1 = lt;
  return lt_1;
}
var eq_1;
var hasRequiredEq;
function requireEq() {
  if (hasRequiredEq) return eq_1;
  hasRequiredEq = 1;
  const compare = requireCompare();
  const eq = (a, b, loose) => compare(a, b, loose) === 0;
  eq_1 = eq;
  return eq_1;
}
var neq_1;
var hasRequiredNeq;
function requireNeq() {
  if (hasRequiredNeq) return neq_1;
  hasRequiredNeq = 1;
  const compare = requireCompare();
  const neq = (a, b, loose) => compare(a, b, loose) !== 0;
  neq_1 = neq;
  return neq_1;
}
var gte_1;
var hasRequiredGte;
function requireGte() {
  if (hasRequiredGte) return gte_1;
  hasRequiredGte = 1;
  const compare = requireCompare();
  const gte = (a, b, loose) => compare(a, b, loose) >= 0;
  gte_1 = gte;
  return gte_1;
}
var lte_1;
var hasRequiredLte;
function requireLte() {
  if (hasRequiredLte) return lte_1;
  hasRequiredLte = 1;
  const compare = requireCompare();
  const lte = (a, b, loose) => compare(a, b, loose) <= 0;
  lte_1 = lte;
  return lte_1;
}
var cmp_1;
var hasRequiredCmp;
function requireCmp() {
  if (hasRequiredCmp) return cmp_1;
  hasRequiredCmp = 1;
  const eq = requireEq();
  const neq = requireNeq();
  const gt = requireGt();
  const gte = requireGte();
  const lt = requireLt();
  const lte = requireLte();
  const cmp = (a, op, b, loose) => {
    switch (op) {
      case "===":
        if (typeof a === "object") {
          a = a.version;
        }
        if (typeof b === "object") {
          b = b.version;
        }
        return a === b;
      case "!==":
        if (typeof a === "object") {
          a = a.version;
        }
        if (typeof b === "object") {
          b = b.version;
        }
        return a !== b;
      case "":
      case "=":
      case "==":
        return eq(a, b, loose);
      case "!=":
        return neq(a, b, loose);
      case ">":
        return gt(a, b, loose);
      case ">=":
        return gte(a, b, loose);
      case "<":
        return lt(a, b, loose);
      case "<=":
        return lte(a, b, loose);
      default:
        throw new TypeError(`Invalid operator: ${op}`);
    }
  };
  cmp_1 = cmp;
  return cmp_1;
}
var coerce_1;
var hasRequiredCoerce;
function requireCoerce() {
  if (hasRequiredCoerce) return coerce_1;
  hasRequiredCoerce = 1;
  const SemVer = requireSemver$1();
  const parse = requireParse();
  const { safeRe: re2, t } = requireRe();
  const coerce = (version, options) => {
    if (version instanceof SemVer) {
      return version;
    }
    if (typeof version === "number") {
      version = String(version);
    }
    if (typeof version !== "string") {
      return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
      match = version.match(options.includePrerelease ? re2[t.COERCEFULL] : re2[t.COERCE]);
    } else {
      const coerceRtlRegex = options.includePrerelease ? re2[t.COERCERTLFULL] : re2[t.COERCERTL];
      let next;
      while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
        if (!match || next.index + next[0].length !== match.index + match[0].length) {
          match = next;
        }
        coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
      }
      coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
      return null;
    }
    const major = match[2];
    const minor = match[3] || "0";
    const patch = match[4] || "0";
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
  };
  coerce_1 = coerce;
  return coerce_1;
}
var lrucache;
var hasRequiredLrucache;
function requireLrucache() {
  if (hasRequiredLrucache) return lrucache;
  hasRequiredLrucache = 1;
  class LRUCache {
    constructor() {
      this.max = 1e3;
      this.map = /* @__PURE__ */ new Map();
    }
    get(key) {
      const value = this.map.get(key);
      if (value === void 0) {
        return void 0;
      } else {
        this.map.delete(key);
        this.map.set(key, value);
        return value;
      }
    }
    delete(key) {
      return this.map.delete(key);
    }
    set(key, value) {
      const deleted = this.delete(key);
      if (!deleted && value !== void 0) {
        if (this.map.size >= this.max) {
          const firstKey = this.map.keys().next().value;
          this.delete(firstKey);
        }
        this.map.set(key, value);
      }
      return this;
    }
  }
  lrucache = LRUCache;
  return lrucache;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  const SPACE_CHARACTERS = /\s+/g;
  class Range {
    constructor(range2, options) {
      options = parseOptions(options);
      if (range2 instanceof Range) {
        if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
          return range2;
        } else {
          return new Range(range2.raw, options);
        }
      }
      if (range2 instanceof Comparator) {
        this.raw = range2.value;
        this.set = [[range2]];
        this.formatted = void 0;
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range2.trim().replace(SPACE_CHARACTERS, " ");
      this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter((c) => !isNullSet(c[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c of this.set) {
            if (c.length === 1 && isAny(c[0])) {
              this.set = [c];
              break;
            }
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let i = 0; i < this.set.length; i++) {
          if (i > 0) {
            this.formatted += "||";
          }
          const comps = this.set[i];
          for (let k = 0; k < comps.length; k++) {
            if (k > 0) {
              this.formatted += " ";
            }
            this.formatted += comps[k].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range2) {
      const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
      const memoKey = memoOpts + ":" + range2;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re2[t.HYPHENRANGELOOSE] : re2[t.HYPHENRANGE];
      range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug("hyphen replace", range2);
      range2 = range2.replace(re2[t.COMPARATORTRIM], comparatorTrimReplace);
      debug("comparator trim", range2);
      range2 = range2.replace(re2[t.TILDETRIM], tildeTrimReplace);
      debug("tilde trim", range2);
      range2 = range2.replace(re2[t.CARETTRIM], caretTrimReplace);
      debug("caret trim", range2);
      let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter((comp) => {
          debug("loose invalid filter", comp, this.options);
          return !!comp.match(re2[t.COMPARATORLOOSE]);
        });
      }
      debug("range list", rangeList);
      const rangeMap = /* @__PURE__ */ new Map();
      const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has("")) {
        rangeMap.delete("");
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range2, options) {
      if (!(range2 instanceof Range)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((thisComparators) => {
        return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
            return rangeComparators.every((rangeComparator) => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
      if (!version) {
        return false;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range;
  const LRU = requireLrucache();
  const cache = new LRU();
  const parseOptions = requireParseOptions();
  const Comparator = requireComparator();
  const debug = requireDebug();
  const SemVer = requireSemver$1();
  const {
    safeRe: re2,
    t,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = requireRe();
  const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = requireConstants();
  const isNullSet = (c) => c.value === "<0.0.0-0";
  const isAny = (c) => c.value === "";
  const isSatisfiable = (comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every((otherComparator) => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  };
  const parseComparator = (comp, options) => {
    comp = comp.replace(re2[t.BUILD], "");
    debug("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug("caret", comp);
    comp = replaceTildes(comp, options);
    debug("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug("xrange", comp);
    comp = replaceStars(comp, options);
    debug("stars", comp);
    return comp;
  };
  const isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
  const replaceTildes = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
  };
  const replaceTilde = (comp, options) => {
    const r = options.loose ? re2[t.TILDELOOSE] : re2[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr) => {
      debug("tilde", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
      } else if (pr) {
        debug("replaceTilde pr", pr);
        ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
      }
      debug("tilde return", ret);
      return ret;
    });
  };
  const replaceCarets = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
  };
  const replaceCaret = (comp, options) => {
    debug("caret", comp, options);
    const r = options.loose ? re2[t.CARETLOOSE] : re2[t.CARET];
    const z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_, M, m, p, pr) => {
      debug("caret", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        if (M === "0") {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
        }
      } else if (pr) {
        debug("replaceCaret pr", pr);
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
        }
      } else {
        debug("no pr");
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
        }
      }
      debug("caret return", ret);
      return ret;
    });
  };
  const replaceXRanges = (comp, options) => {
    debug("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
  };
  const replaceXRange = (comp, options) => {
    comp = comp.trim();
    const r = options.loose ? re2[t.XRANGELOOSE] : re2[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
      debug("xRange", comp, ret, gtlt, M, m, p, pr);
      const xM = isX(M);
      const xm = xM || isX(m);
      const xp = xm || isX(p);
      const anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      pr = options.includePrerelease ? "-0" : "";
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0-0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        if (gtlt === "<") {
          pr = "-0";
        }
        ret = `${gtlt + M}.${m}.${p}${pr}`;
      } else if (xm) {
        ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
      }
      debug("xRange return", ret);
      return ret;
    });
  };
  const replaceStars = (comp, options) => {
    debug("replaceStars", comp, options);
    return comp.trim().replace(re2[t.STAR], "");
  };
  const replaceGTE0 = (comp, options) => {
    debug("replaceGTE0", comp, options);
    return comp.trim().replace(re2[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
  };
  const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? "-0" : ""}`;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  };
  const testSet = (set, version, options) => {
    for (let i = 0; i < set.length; i++) {
      if (!set[i].test(version)) {
        return false;
      }
    }
    if (version.prerelease.length && !options.includePrerelease) {
      for (let i = 0; i < set.length; i++) {
        debug(set[i].semver);
        if (set[i].semver === Comparator.ANY) {
          continue;
        }
        if (set[i].semver.prerelease.length > 0) {
          const allowed = set[i].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  return range;
}
var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator) return comparator;
  hasRequiredComparator = 1;
  const ANY = Symbol("SemVer ANY");
  class Comparator {
    static get ANY() {
      return ANY;
    }
    constructor(comp, options) {
      options = parseOptions(options);
      if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      comp = comp.trim().split(/\s+/).join(" ");
      debug("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug("comp", this);
    }
    parse(comp) {
      const r = this.options.loose ? re2[t.COMPARATORLOOSE] : re2[t.COMPARATOR];
      const m = comp.match(r);
      if (!m) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m[1] !== void 0 ? m[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer(m[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version) {
      debug("Comparator.test", version, this.options.loose);
      if (this.semver === ANY || version === ANY) {
        return true;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Range(comp.value, options).test(this.value);
      } else if (comp.operator === "") {
        if (comp.value === "") {
          return true;
        }
        return new Range(this.value, options).test(comp.semver);
      }
      options = parseOptions(options);
      if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
        return false;
      }
      if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
        return true;
      }
      if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
        return true;
      }
      if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  }
  comparator = Comparator;
  const parseOptions = requireParseOptions();
  const { safeRe: re2, t } = requireRe();
  const cmp = requireCmp();
  const debug = requireDebug();
  const SemVer = requireSemver$1();
  const Range = requireRange();
  return comparator;
}
var satisfies_1;
var hasRequiredSatisfies;
function requireSatisfies() {
  if (hasRequiredSatisfies) return satisfies_1;
  hasRequiredSatisfies = 1;
  const Range = requireRange();
  const satisfies = (version, range2, options) => {
    try {
      range2 = new Range(range2, options);
    } catch (er) {
      return false;
    }
    return range2.test(version);
  };
  satisfies_1 = satisfies;
  return satisfies_1;
}
var toComparators_1;
var hasRequiredToComparators;
function requireToComparators() {
  if (hasRequiredToComparators) return toComparators_1;
  hasRequiredToComparators = 1;
  const Range = requireRange();
  const toComparators = (range2, options) => new Range(range2, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
  toComparators_1 = toComparators;
  return toComparators_1;
}
var maxSatisfying_1;
var hasRequiredMaxSatisfying;
function requireMaxSatisfying() {
  if (hasRequiredMaxSatisfying) return maxSatisfying_1;
  hasRequiredMaxSatisfying = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const maxSatisfying = (versions, range2, options) => {
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range2, options);
    } catch (er) {
      return null;
    }
    versions.forEach((v) => {
      if (rangeObj.test(v)) {
        if (!max || maxSV.compare(v) === -1) {
          max = v;
          maxSV = new SemVer(max, options);
        }
      }
    });
    return max;
  };
  maxSatisfying_1 = maxSatisfying;
  return maxSatisfying_1;
}
var minSatisfying_1;
var hasRequiredMinSatisfying;
function requireMinSatisfying() {
  if (hasRequiredMinSatisfying) return minSatisfying_1;
  hasRequiredMinSatisfying = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const minSatisfying = (versions, range2, options) => {
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range2, options);
    } catch (er) {
      return null;
    }
    versions.forEach((v) => {
      if (rangeObj.test(v)) {
        if (!min || minSV.compare(v) === 1) {
          min = v;
          minSV = new SemVer(min, options);
        }
      }
    });
    return min;
  };
  minSatisfying_1 = minSatisfying;
  return minSatisfying_1;
}
var minVersion_1;
var hasRequiredMinVersion;
function requireMinVersion() {
  if (hasRequiredMinVersion) return minVersion_1;
  hasRequiredMinVersion = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const gt = requireGt();
  const minVersion = (range2, loose) => {
    range2 = new Range(range2, loose);
    let minver = new SemVer("0.0.0");
    if (range2.test(minver)) {
      return minver;
    }
    minver = new SemVer("0.0.0-0");
    if (range2.test(minver)) {
      return minver;
    }
    minver = null;
    for (let i = 0; i < range2.set.length; ++i) {
      const comparators = range2.set[i];
      let setMin = null;
      comparators.forEach((comparator2) => {
        const compver = new SemVer(comparator2.semver.version);
        switch (comparator2.operator) {
          case ">":
            if (compver.prerelease.length === 0) {
              compver.patch++;
            } else {
              compver.prerelease.push(0);
            }
            compver.raw = compver.format();
          /* fallthrough */
          case "":
          case ">=":
            if (!setMin || gt(compver, setMin)) {
              setMin = compver;
            }
            break;
          case "<":
          case "<=":
            break;
          /* istanbul ignore next */
          default:
            throw new Error(`Unexpected operation: ${comparator2.operator}`);
        }
      });
      if (setMin && (!minver || gt(minver, setMin))) {
        minver = setMin;
      }
    }
    if (minver && range2.test(minver)) {
      return minver;
    }
    return null;
  };
  minVersion_1 = minVersion;
  return minVersion_1;
}
var valid;
var hasRequiredValid;
function requireValid() {
  if (hasRequiredValid) return valid;
  hasRequiredValid = 1;
  const Range = requireRange();
  const validRange = (range2, options) => {
    try {
      return new Range(range2, options).range || "*";
    } catch (er) {
      return null;
    }
  };
  valid = validRange;
  return valid;
}
var outside_1;
var hasRequiredOutside;
function requireOutside() {
  if (hasRequiredOutside) return outside_1;
  hasRequiredOutside = 1;
  const SemVer = requireSemver$1();
  const Comparator = requireComparator();
  const { ANY } = Comparator;
  const Range = requireRange();
  const satisfies = requireSatisfies();
  const gt = requireGt();
  const lt = requireLt();
  const lte = requireLte();
  const gte = requireGte();
  const outside = (version, range2, hilo, options) => {
    version = new SemVer(version, options);
    range2 = new Range(range2, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case ">":
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = ">";
        ecomp = ">=";
        break;
      case "<":
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = "<";
        ecomp = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (satisfies(version, range2, options)) {
      return false;
    }
    for (let i = 0; i < range2.set.length; ++i) {
      const comparators = range2.set[i];
      let high = null;
      let low = null;
      comparators.forEach((comparator2) => {
        if (comparator2.semver === ANY) {
          comparator2 = new Comparator(">=0.0.0");
        }
        high = high || comparator2;
        low = low || comparator2;
        if (gtfn(comparator2.semver, high.semver, options)) {
          high = comparator2;
        } else if (ltfn(comparator2.semver, low.semver, options)) {
          low = comparator2;
        }
      });
      if (high.operator === comp || high.operator === ecomp) {
        return false;
      }
      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false;
      }
    }
    return true;
  };
  outside_1 = outside;
  return outside_1;
}
var gtr_1;
var hasRequiredGtr;
function requireGtr() {
  if (hasRequiredGtr) return gtr_1;
  hasRequiredGtr = 1;
  const outside = requireOutside();
  const gtr = (version, range2, options) => outside(version, range2, ">", options);
  gtr_1 = gtr;
  return gtr_1;
}
var ltr_1;
var hasRequiredLtr;
function requireLtr() {
  if (hasRequiredLtr) return ltr_1;
  hasRequiredLtr = 1;
  const outside = requireOutside();
  const ltr = (version, range2, options) => outside(version, range2, "<", options);
  ltr_1 = ltr;
  return ltr_1;
}
var intersects_1;
var hasRequiredIntersects;
function requireIntersects() {
  if (hasRequiredIntersects) return intersects_1;
  hasRequiredIntersects = 1;
  const Range = requireRange();
  const intersects = (r1, r2, options) => {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
  };
  intersects_1 = intersects;
  return intersects_1;
}
var simplify;
var hasRequiredSimplify;
function requireSimplify() {
  if (hasRequiredSimplify) return simplify;
  hasRequiredSimplify = 1;
  const satisfies = requireSatisfies();
  const compare = requireCompare();
  simplify = (versions, range2, options) => {
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b) => compare(a, b, options));
    for (const version of v) {
      const included = satisfies(version, range2, options);
      if (included) {
        prev = version;
        if (!first) {
          first = version;
        }
      } else {
        if (prev) {
          set.push([first, prev]);
        }
        prev = null;
        first = null;
      }
    }
    if (first) {
      set.push([first, null]);
    }
    const ranges = [];
    for (const [min, max] of set) {
      if (min === max) {
        ranges.push(min);
      } else if (!max && min === v[0]) {
        ranges.push("*");
      } else if (!max) {
        ranges.push(`>=${min}`);
      } else if (min === v[0]) {
        ranges.push(`<=${max}`);
      } else {
        ranges.push(`${min} - ${max}`);
      }
    }
    const simplified = ranges.join(" || ");
    const original = typeof range2.raw === "string" ? range2.raw : String(range2);
    return simplified.length < original.length ? simplified : range2;
  };
  return simplify;
}
var subset_1;
var hasRequiredSubset;
function requireSubset() {
  if (hasRequiredSubset) return subset_1;
  hasRequiredSubset = 1;
  const Range = requireRange();
  const Comparator = requireComparator();
  const { ANY } = Comparator;
  const satisfies = requireSatisfies();
  const compare = requireCompare();
  const subset = (sub, dom, options = {}) => {
    if (sub === dom) {
      return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set) {
      for (const simpleDom of dom.set) {
        const isSub = simpleSubset(simpleSub, simpleDom, options);
        sawNonNull = sawNonNull || isSub !== null;
        if (isSub) {
          continue OUTER;
        }
      }
      if (sawNonNull) {
        return false;
      }
    }
    return true;
  };
  const minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
  const minimumVersion = [new Comparator(">=0.0.0")];
  const simpleSubset = (sub, dom, options) => {
    if (sub === dom) {
      return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
      if (dom.length === 1 && dom[0].semver === ANY) {
        return true;
      } else if (options.includePrerelease) {
        sub = minimumVersionWithPreRelease;
      } else {
        sub = minimumVersion;
      }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
      if (options.includePrerelease) {
        return true;
      } else {
        dom = minimumVersion;
      }
    }
    const eqSet = /* @__PURE__ */ new Set();
    let gt, lt;
    for (const c of sub) {
      if (c.operator === ">" || c.operator === ">=") {
        gt = higherGT(gt, c, options);
      } else if (c.operator === "<" || c.operator === "<=") {
        lt = lowerLT(lt, c, options);
      } else {
        eqSet.add(c.semver);
      }
    }
    if (eqSet.size > 1) {
      return null;
    }
    let gtltComp;
    if (gt && lt) {
      gtltComp = compare(gt.semver, lt.semver, options);
      if (gtltComp > 0) {
        return null;
      } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
        return null;
      }
    }
    for (const eq of eqSet) {
      if (gt && !satisfies(eq, String(gt), options)) {
        return null;
      }
      if (lt && !satisfies(eq, String(lt), options)) {
        return null;
      }
      for (const c of dom) {
        if (!satisfies(eq, String(c), options)) {
          return false;
        }
      }
      return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
      needDomLTPre = false;
    }
    for (const c of dom) {
      hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
      hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
      if (gt) {
        if (needDomGTPre) {
          if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
            needDomGTPre = false;
          }
        }
        if (c.operator === ">" || c.operator === ">=") {
          higher = higherGT(gt, c, options);
          if (higher === c && higher !== gt) {
            return false;
          }
        } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
          return false;
        }
      }
      if (lt) {
        if (needDomLTPre) {
          if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
            needDomLTPre = false;
          }
        }
        if (c.operator === "<" || c.operator === "<=") {
          lower = lowerLT(lt, c, options);
          if (lower === c && lower !== lt) {
            return false;
          }
        } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
          return false;
        }
      }
      if (!c.operator && (lt || gt) && gtltComp !== 0) {
        return false;
      }
    }
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
      return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
      return false;
    }
    if (needDomGTPre || needDomLTPre) {
      return false;
    }
    return true;
  };
  const higherGT = (a, b, options) => {
    if (!a) {
      return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
  };
  const lowerLT = (a, b, options) => {
    if (!a) {
      return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
  };
  subset_1 = subset;
  return subset_1;
}
var semver;
var hasRequiredSemver;
function requireSemver() {
  if (hasRequiredSemver) return semver;
  hasRequiredSemver = 1;
  const internalRe = requireRe();
  const constants2 = requireConstants();
  const SemVer = requireSemver$1();
  const identifiers2 = requireIdentifiers();
  const parse = requireParse();
  const valid2 = requireValid$1();
  const clean = requireClean();
  const inc = requireInc();
  const diff = requireDiff();
  const major = requireMajor();
  const minor = requireMinor();
  const patch = requirePatch();
  const prerelease = requirePrerelease();
  const compare = requireCompare();
  const rcompare = requireRcompare();
  const compareLoose = requireCompareLoose();
  const compareBuild = requireCompareBuild();
  const sort = requireSort();
  const rsort = requireRsort();
  const gt = requireGt();
  const lt = requireLt();
  const eq = requireEq();
  const neq = requireNeq();
  const gte = requireGte();
  const lte = requireLte();
  const cmp = requireCmp();
  const coerce = requireCoerce();
  const Comparator = requireComparator();
  const Range = requireRange();
  const satisfies = requireSatisfies();
  const toComparators = requireToComparators();
  const maxSatisfying = requireMaxSatisfying();
  const minSatisfying = requireMinSatisfying();
  const minVersion = requireMinVersion();
  const validRange = requireValid();
  const outside = requireOutside();
  const gtr = requireGtr();
  const ltr = requireLtr();
  const intersects = requireIntersects();
  const simplifyRange = requireSimplify();
  const subset = requireSubset();
  semver = {
    parse,
    valid: valid2,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants2.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants2.RELEASE_TYPES,
    compareIdentifiers: identifiers2.compareIdentifiers,
    rcompareIdentifiers: identifiers2.rcompareIdentifiers
  };
  return semver;
}
requireSemver();
var _Reflect = {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var hasRequired_Reflect;
function require_Reflect() {
  if (hasRequired_Reflect) return _Reflect;
  hasRequired_Reflect = 1;
  var Reflect2;
  (function(Reflect3) {
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
      var exporter = makeExporter(Reflect3);
      if (typeof root.Reflect !== "undefined") {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter, root);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect3;
      }
      function makeExporter(target, previous) {
        return function(key, value) {
          Object.defineProperty(target, key, { configurable: true, writable: true, value });
          if (previous)
            previous(key, value);
        };
      }
      function functionThis() {
        try {
          return Function("return this;")();
        } catch (_) {
        }
      }
      function indirectEvalThis() {
        try {
          return (void 0, eval)("(function() { return this; })()");
        } catch (_) {
        }
      }
      function sloppyModeThis() {
        return functionThis() || indirectEvalThis();
      }
    })(function(exporter, root) {
      var hasOwn = Object.prototype.hasOwnProperty;
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
      var supportsCreate = typeof Object.create === "function";
      var supportsProto = { __proto__: [] } instanceof Array;
      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: supportsCreate ? function() {
          return MakeDictionary(/* @__PURE__ */ Object.create(null));
        } : supportsProto ? function() {
          return MakeDictionary({ __proto__: null });
        } : function() {
          return MakeDictionary({});
        },
        has: downLevel ? function(map, key) {
          return hasOwn.call(map, key);
        } : function(map, key) {
          return key in map;
        },
        get: downLevel ? function(map, key) {
          return hasOwn.call(map, key) ? map[key] : void 0;
        } : function(map, key) {
          return map[key];
        }
      };
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
      var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
      var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
      var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
      var metadataRegistry = GetOrCreateMetadataRegistry();
      var metadataProvider = CreateMetadataProvider(metadataRegistry);
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsObject(target))
            throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
            throw new TypeError();
          if (IsNull(attributes))
            attributes = void 0;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsConstructor(target))
            throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }
      exporter("decorate", decorate);
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
            throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
      }
      exporter("metadata", metadata);
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      exporter("defineMetadata", defineMetadata);
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasMetadata", hasMetadata);
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasOwnMetadata", hasOwnMetadata);
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter("getMetadata", getMetadata);
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("getOwnMetadata", getOwnMetadata);
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter("getMetadataKeys", getMetadataKeys);
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        var provider = GetMetadataProvider(
          target,
          propertyKey,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
      }
      exporter("deleteMetadata", deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated))
              throw new TypeError();
            target = decorated;
          }
        }
        return target;
      }
      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated))
              throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2)
          return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
      }
      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2)
          return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryGetMetadata(MetadataKey, parent, P);
        return void 0;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return;
        return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          true
        );
        provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
      }
      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
          return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
          return ownKeys;
        if (ownKeys.length <= 0)
          return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
          var key = parentKeys_1[_a];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*create*/
          false
        );
        if (!provider) {
          return [];
        }
        return provider.OrdinaryOwnMetadataKeys(O, P);
      }
      function Type(x) {
        if (x === null)
          return 1;
        switch (typeof x) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return x === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x) {
        return x === void 0;
      }
      function IsNull(x) {
        return x === null;
      }
      function IsSymbol(x) {
        return typeof x === "symbol";
      }
      function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
      }
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0:
            return input;
          case 1:
            return input;
          case 2:
            return input;
          case 3:
            return input;
          case 4:
            return input;
          case 5:
            return input;
        }
        var hint = "string";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== void 0) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result))
            throw new TypeError();
          return result;
        }
        return OrdinaryToPrimitive(input);
      }
      function OrdinaryToPrimitive(O, hint) {
        var valueOf, result, toString_2;
        {
          var toString_1 = O.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result))
              return result;
          }
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result))
              return result;
          }
        }
        throw new TypeError();
      }
      function ToBoolean(argument) {
        return !!argument;
      }
      function ToString(argument) {
        return "" + argument;
      }
      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument);
        if (IsSymbol(key))
          return key;
        return ToString(key);
      }
      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      }
      function IsCallable(argument) {
        return typeof argument === "function";
      }
      function IsConstructor(argument) {
        return typeof argument === "function";
      }
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3:
            return true;
          case 4:
            return true;
          default:
            return false;
        }
      }
      function SameValueZero(x, y) {
        return x === y || x !== x && y !== y;
      }
      function GetMethod(V, P) {
        var func = V[P];
        if (func === void 0 || func === null)
          return void 0;
        if (!IsCallable(func))
          throw new TypeError();
        return func;
      }
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
          throw new TypeError();
        var iterator = method.call(obj);
        if (!IsObject(iterator))
          throw new TypeError();
        return iterator;
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
          f.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
          return proto;
        if (proto !== functionPrototype)
          return proto;
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
          return proto;
        if (constructor === O)
          return proto;
        return constructor;
      }
      function CreateMetadataRegistry() {
        var fallback;
        if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
          fallback = CreateFallbackProvider(root.Reflect);
        }
        var first;
        var second;
        var rest;
        var targetProviderMap = new _WeakMap();
        var registry = {
          registerProvider,
          getProvider,
          setProvider
        };
        return registry;
        function registerProvider(provider) {
          if (!Object.isExtensible(registry)) {
            throw new Error("Cannot add provider to a frozen registry.");
          }
          switch (true) {
            case fallback === provider:
              break;
            case IsUndefined(first):
              first = provider;
              break;
            case first === provider:
              break;
            case IsUndefined(second):
              second = provider;
              break;
            case second === provider:
              break;
            default:
              if (rest === void 0)
                rest = new _Set();
              rest.add(provider);
              break;
          }
        }
        function getProviderNoCache(O, P) {
          if (!IsUndefined(first)) {
            if (first.isProviderFor(O, P))
              return first;
            if (!IsUndefined(second)) {
              if (second.isProviderFor(O, P))
                return first;
              if (!IsUndefined(rest)) {
                var iterator = GetIterator(rest);
                while (true) {
                  var next = IteratorStep(iterator);
                  if (!next) {
                    return void 0;
                  }
                  var provider = IteratorValue(next);
                  if (provider.isProviderFor(O, P)) {
                    IteratorClose(iterator);
                    return provider;
                  }
                }
              }
            }
          }
          if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
            return fallback;
          }
          return void 0;
        }
        function getProvider(O, P) {
          var providerMap = targetProviderMap.get(O);
          var provider;
          if (!IsUndefined(providerMap)) {
            provider = providerMap.get(P);
          }
          if (!IsUndefined(provider)) {
            return provider;
          }
          provider = getProviderNoCache(O, P);
          if (!IsUndefined(provider)) {
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return provider;
        }
        function hasProvider(provider) {
          if (IsUndefined(provider))
            throw new TypeError();
          return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
        }
        function setProvider(O, P, provider) {
          if (!hasProvider(provider)) {
            throw new Error("Metadata provider not registered.");
          }
          var existingProvider = getProvider(O, P);
          if (existingProvider !== provider) {
            if (!IsUndefined(existingProvider)) {
              return false;
            }
            var providerMap = targetProviderMap.get(O);
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return true;
        }
      }
      function GetOrCreateMetadataRegistry() {
        var metadataRegistry2;
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          metadataRegistry2 = root.Reflect[registrySymbol];
        }
        if (IsUndefined(metadataRegistry2)) {
          metadataRegistry2 = CreateMetadataRegistry();
        }
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          Object.defineProperty(root.Reflect, registrySymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: metadataRegistry2
          });
        }
        return metadataRegistry2;
      }
      function CreateMetadataProvider(registry) {
        var metadata2 = new _WeakMap();
        var provider = {
          isProviderFor: function(O, P) {
            var targetMetadata = metadata2.get(O);
            if (IsUndefined(targetMetadata))
              return false;
            return targetMetadata.has(P);
          },
          OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
          OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
          OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
          OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
          OrdinaryDeleteMetadata
        };
        metadataRegistry.registerProvider(provider);
        return provider;
        function GetOrCreateMetadataMap(O, P, Create) {
          var targetMetadata = metadata2.get(O);
          var createdTargetMetadata = false;
          if (IsUndefined(targetMetadata)) {
            if (!Create)
              return void 0;
            targetMetadata = new _Map();
            metadata2.set(O, targetMetadata);
            createdTargetMetadata = true;
          }
          var metadataMap = targetMetadata.get(P);
          if (IsUndefined(metadataMap)) {
            if (!Create)
              return void 0;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
            if (!registry.setProvider(O, P, provider)) {
              targetMetadata.delete(P);
              if (createdTargetMetadata) {
                metadata2.delete(O);
              }
              throw new Error("Wrong provider for target.");
            }
          }
          return metadataMap;
        }
        function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          return ToBoolean(metadataMap.has(MetadataKey));
        }
        function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return void 0;
          return metadataMap.get(MetadataKey);
        }
        function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            true
          );
          metadataMap.set(MetadataKey, MetadataValue);
        }
        function OrdinaryOwnMetadataKeys2(O, P) {
          var keys = [];
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return keys;
          var keysObj = metadataMap.keys();
          var iterator = GetIterator(keysObj);
          var k = 0;
          while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
              keys.length = k;
              return keys;
            }
            var nextValue = IteratorValue(next);
            try {
              keys[k] = nextValue;
            } catch (e) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e;
              }
            }
            k++;
          }
        }
        function OrdinaryDeleteMetadata(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          if (!metadataMap.delete(MetadataKey))
            return false;
          if (metadataMap.size === 0) {
            var targetMetadata = metadata2.get(O);
            if (!IsUndefined(targetMetadata)) {
              targetMetadata.delete(P);
              if (targetMetadata.size === 0) {
                metadata2.delete(targetMetadata);
              }
            }
          }
          return true;
        }
      }
      function CreateFallbackProvider(reflect) {
        var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
        var metadataOwner = new _WeakMap();
        var provider = {
          isProviderFor: function(O, P) {
            var metadataPropertySet = metadataOwner.get(O);
            if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
              return true;
            }
            if (getOwnMetadataKeys2(O, P).length) {
              if (IsUndefined(metadataPropertySet)) {
                metadataPropertySet = new _Set();
                metadataOwner.set(O, metadataPropertySet);
              }
              metadataPropertySet.add(P);
              return true;
            }
            return false;
          },
          OrdinaryDefineOwnMetadata: defineMetadata2,
          OrdinaryHasOwnMetadata: hasOwnMetadata2,
          OrdinaryGetOwnMetadata: getOwnMetadata2,
          OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
          OrdinaryDeleteMetadata: deleteMetadata2
        };
        return provider;
      }
      function GetMetadataProvider(O, P, Create) {
        var registeredProvider = metadataRegistry.getProvider(O, P);
        if (!IsUndefined(registeredProvider)) {
          return registeredProvider;
        }
        if (Create) {
          if (metadataRegistry.setProvider(O, P, metadataProvider)) {
            return metadataProvider;
          }
          throw new Error("Illegal state.");
        }
        return void 0;
      }
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (
          /** @class */
          (function() {
            function MapIterator2(keys, values, selector) {
              this._index = 0;
              this._keys = keys;
              this._values = values;
              this._selector = selector;
            }
            MapIterator2.prototype["@@iterator"] = function() {
              return this;
            };
            MapIterator2.prototype[iteratorSymbol] = function() {
              return this;
            };
            MapIterator2.prototype.next = function() {
              var index = this._index;
              if (index >= 0 && index < this._keys.length) {
                var result = this._selector(this._keys[index], this._values[index]);
                if (index + 1 >= this._keys.length) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                } else {
                  this._index++;
                }
                return { value: result, done: false };
              }
              return { value: void 0, done: true };
            };
            MapIterator2.prototype.throw = function(error) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              throw error;
            };
            MapIterator2.prototype.return = function(value) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              return { value, done: true };
            };
            return MapIterator2;
          })()
        );
        var Map2 = (
          /** @class */
          (function() {
            function Map3() {
              this._keys = [];
              this._values = [];
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }
            Object.defineProperty(Map3.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: true,
              configurable: true
            });
            Map3.prototype.has = function(key) {
              return this._find(
                key,
                /*insert*/
                false
              ) >= 0;
            };
            Map3.prototype.get = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              return index >= 0 ? this._values[index] : void 0;
            };
            Map3.prototype.set = function(key, value) {
              var index = this._find(
                key,
                /*insert*/
                true
              );
              this._values[index] = value;
              return this;
            };
            Map3.prototype.delete = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              if (index >= 0) {
                var size = this._keys.length;
                for (var i = index + 1; i < size; i++) {
                  this._keys[i - 1] = this._keys[i];
                  this._values[i - 1] = this._values[i];
                }
                this._keys.length--;
                this._values.length--;
                if (SameValueZero(key, this._cacheKey)) {
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                return true;
              }
              return false;
            };
            Map3.prototype.clear = function() {
              this._keys.length = 0;
              this._values.length = 0;
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            };
            Map3.prototype.keys = function() {
              return new MapIterator(this._keys, this._values, getKey);
            };
            Map3.prototype.values = function() {
              return new MapIterator(this._keys, this._values, getValue);
            };
            Map3.prototype.entries = function() {
              return new MapIterator(this._keys, this._values, getEntry);
            };
            Map3.prototype["@@iterator"] = function() {
              return this.entries();
            };
            Map3.prototype[iteratorSymbol] = function() {
              return this.entries();
            };
            Map3.prototype._find = function(key, insert) {
              if (!SameValueZero(this._cacheKey, key)) {
                this._cacheIndex = -1;
                for (var i = 0; i < this._keys.length; i++) {
                  if (SameValueZero(this._keys[i], key)) {
                    this._cacheIndex = i;
                    break;
                  }
                }
              }
              if (this._cacheIndex < 0 && insert) {
                this._cacheIndex = this._keys.length;
                this._keys.push(key);
                this._values.push(void 0);
              }
              return this._cacheIndex;
            };
            return Map3;
          })()
        );
        return Map2;
        function getKey(key, _) {
          return key;
        }
        function getValue(_, value) {
          return value;
        }
        function getEntry(key, value) {
          return [key, value];
        }
      }
      function CreateSetPolyfill() {
        var Set2 = (
          /** @class */
          (function() {
            function Set3() {
              this._map = new _Map();
            }
            Object.defineProperty(Set3.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: true,
              configurable: true
            });
            Set3.prototype.has = function(value) {
              return this._map.has(value);
            };
            Set3.prototype.add = function(value) {
              return this._map.set(value, value), this;
            };
            Set3.prototype.delete = function(value) {
              return this._map.delete(value);
            };
            Set3.prototype.clear = function() {
              this._map.clear();
            };
            Set3.prototype.keys = function() {
              return this._map.keys();
            };
            Set3.prototype.values = function() {
              return this._map.keys();
            };
            Set3.prototype.entries = function() {
              return this._map.entries();
            };
            Set3.prototype["@@iterator"] = function() {
              return this.keys();
            };
            Set3.prototype[iteratorSymbol] = function() {
              return this.keys();
            };
            return Set3;
          })()
        );
        return Set2;
      }
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (
          /** @class */
          (function() {
            function WeakMap2() {
              this._key = CreateUniqueKey();
            }
            WeakMap2.prototype.has = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.has(table, this._key) : false;
            };
            WeakMap2.prototype.get = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.get(table, this._key) : void 0;
            };
            WeakMap2.prototype.set = function(target, value) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                true
              );
              table[this._key] = value;
              return this;
            };
            WeakMap2.prototype.delete = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? delete table[this._key] : false;
            };
            WeakMap2.prototype.clear = function() {
              this._key = CreateUniqueKey();
            };
            return WeakMap2;
          })()
        );
        function CreateUniqueKey() {
          var key;
          do
            key = "@@WeakMap@@" + CreateUUID();
          while (HashMap.has(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create)
              return void 0;
            Object.defineProperty(target, rootKey, { value: HashMap.create() });
          }
          return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
          for (var i = 0; i < size; ++i)
            buffer[i] = Math.random() * 255 | 0;
          return buffer;
        }
        function GenRandomBytes(size) {
          if (typeof Uint8Array === "function") {
            var array = new Uint8Array(size);
            if (typeof crypto !== "undefined") {
              crypto.getRandomValues(array);
            } else if (typeof msCrypto !== "undefined") {
              msCrypto.getRandomValues(array);
            } else {
              FillRandomBytes(array, size);
            }
            return array;
          }
          return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          data[6] = data[6] & 79 | 64;
          data[8] = data[8] & 191 | 128;
          var result = "";
          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8)
              result += "-";
            if (byte < 16)
              result += "0";
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
      }
      function MakeDictionary(obj) {
        obj.__ = void 0;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect2 || (Reflect2 = {}));
  return _Reflect;
}
require_Reflect();
const INJECTABLE_KEY = Symbol.for("tsm:injectable");
const INJECT_KEY = Symbol.for("tsm:inject");
const INJECT_PROPERTY_KEY = Symbol.for("tsm:inject:property");
function injectable() {
  return (target) => {
    Reflect.defineMetadata(INJECTABLE_KEY, true, target);
  };
}
function inject(serviceId, options) {
  return (target, propertyKey, parameterIndex) => {
    if (parameterIndex !== void 0) {
      const existing = Reflect.getOwnMetadata(INJECT_KEY, target) ?? [];
      existing.push({
        index: parameterIndex,
        serviceId,
        optional: false
      });
      Reflect.defineMetadata(INJECT_KEY, existing, target);
    } else {
      const ctor = target.constructor;
      const existing = Reflect.getOwnMetadata(INJECT_PROPERTY_KEY, ctor) ?? [];
      existing.push({
        propertyKey,
        serviceId,
        optional: false
      });
      Reflect.defineMetadata(INJECT_PROPERTY_KEY, existing, ctor);
    }
  };
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
  inject("ConnectionRepository")
], OgcStaStore.prototype, "connectionRepository", 2);
__decorateClass([
  inject("VariableRepository")
], OgcStaStore.prototype, "variableRepository", 2);
__decorateClass([
  inject("LoggerFactory")
], OgcStaStore.prototype, "loggerFactory", 2);
OgcStaStore = __decorateClass([
  injectable()
], OgcStaStore);
const OGC_STA_STORE_FACTORY = "OgcStaStoreFactory";
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
