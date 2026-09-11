import { inject as q, injectable as et } from "@eclipse-daanse/tsm";
import { CONNECTION_REPOSITORY as it } from "org.eclipse.daanse.board.app.lib.api.connection";
import { VARIABLE_REPOSITORY as nt } from "org.eclipse.daanse.board.app.lib.api.variable";
import { BaseDatasource as st, IBaseConnectionConfigurationImpl as ot } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { LOGGER_FACTORY as at } from "org.eclipse.daanse.board.app.lib.api.logger";
import { BasicEFactory as lt, BasicEPackage as ct, EPackageRegistry as B, BasicEClass as dt, BasicEAttribute as ut, getEcorePackage as ht } from "@emfts/core";
const { serviceId: rt } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), pt = "https://sensors.bgs.ac.uk/FROST-Server".replace(/\/+$/, "");
class Q {
  constructor(t = {}) {
    this.configuration = t;
  }
  set config(t) {
    this.configuration = t;
  }
  get basePath() {
    return this.configuration.basePath != null ? this.configuration.basePath : pt;
  }
  get fetchApi() {
    return this.configuration.fetchApi;
  }
  get middleware() {
    return this.configuration.middleware || [];
  }
  get queryParamsStringify() {
    return this.configuration.queryParamsStringify || W;
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const t = this.configuration.apiKey;
    if (t)
      return typeof t == "function" ? t : () => t;
  }
  get accessToken() {
    const t = this.configuration.accessToken;
    if (t)
      return typeof t == "function" ? t : async () => t;
  }
  get headers() {
    return this.configuration.headers;
  }
  get credentials() {
    return this.configuration.credentials;
  }
}
const ft = new Q();
class _ {
  constructor(t = ft) {
    this.configuration = t, this.middleware = t.middleware;
  }
  static jsonRegex = new RegExp("^(:?application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(:?;.*)?$", "i");
  middleware;
  withMiddleware(...t) {
    const n = this.clone();
    return n.middleware = n.middleware.concat(...t), n;
  }
  withPreMiddleware(...t) {
    const n = t.map((i) => ({ pre: i }));
    return this.withMiddleware(...n);
  }
  withPostMiddleware(...t) {
    const n = t.map((i) => ({ post: i }));
    return this.withMiddleware(...n);
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
  isJsonMime(t) {
    return t ? _.jsonRegex.test(t) : !1;
  }
  async request(t, n) {
    const { url: i, init: s } = await this.createFetchParams(t, n), o = await this.fetchApi(i, s);
    if (o && o.status >= 200 && o.status < 300)
      return o;
    throw new vt(o, "Response returned an error code");
  }
  async createFetchParams(t, n) {
    let i = this.configuration.basePath + t.path;
    t.query !== void 0 && Object.keys(t.query).length !== 0 && (i += "?" + this.configuration.queryParamsStringify(t.query));
    const s = Object.assign({}, this.configuration.headers, t.headers);
    Object.keys(s).forEach((l) => s[l] === void 0 ? delete s[l] : {});
    const o = typeof n == "function" ? n : async () => n, a = {
      method: t.method,
      headers: s,
      body: t.body,
      credentials: this.configuration.credentials
    }, r = {
      ...a,
      ...await o({
        init: a,
        context: t
      })
    };
    let c;
    yt(r.body) || r.body instanceof URLSearchParams || gt(r.body) ? c = r.body : this.isJsonMime(s["Content-Type"]) ? c = JSON.stringify(r.body) : c = r.body;
    const h = {
      ...r,
      body: c
    };
    return { url: i, init: h };
  }
  fetchApi = async (t, n) => {
    let i = { url: t, init: n };
    for (const o of this.middleware)
      o.pre && (i = await o.pre({
        fetch: this.fetchApi,
        ...i
      }) || i);
    let s;
    try {
      s = await (this.configuration.fetchApi || fetch)(i.url, i.init);
    } catch (o) {
      for (const a of this.middleware)
        a.onError && (s = await a.onError({
          fetch: this.fetchApi,
          url: i.url,
          init: i.init,
          error: o,
          response: s ? s.clone() : void 0
        }) || s);
      if (s === void 0)
        throw o instanceof Error ? new mt(o, "The request failed and the interceptors did not return an alternative response") : o;
    }
    for (const o of this.middleware)
      o.post && (s = await o.post({
        fetch: this.fetchApi,
        url: i.url,
        init: i.init,
        response: s.clone()
      }) || s);
    return s;
  };
  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  clone() {
    const t = this.constructor, n = new t(this.configuration);
    return n.middleware = this.middleware.slice(), n;
  }
}
function gt(e) {
  return typeof Blob < "u" && e instanceof Blob;
}
function yt(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
class vt extends Error {
  constructor(t, n) {
    super(n), this.response = t;
  }
  name = "ResponseError";
}
class mt extends Error {
  constructor(t, n) {
    super(n), this.cause = t;
  }
  name = "FetchError";
}
class v extends Error {
  constructor(t, n) {
    super(n), this.field = t;
  }
  name = "RequiredError";
}
function W(e, t = "") {
  return Object.keys(e).map((n) => Y(n, e[n], t)).filter((n) => n.length > 0).join("&");
}
function Y(e, t, n = "") {
  const i = n + (n.length ? `[${e}]` : e);
  if (t instanceof Array) {
    const s = t.map((o) => encodeURIComponent(String(o))).join(`&${encodeURIComponent(i)}=`);
    return `${encodeURIComponent(i)}=${s}`;
  }
  if (t instanceof Set) {
    const s = Array.from(t);
    return Y(e, s, n);
  }
  return t instanceof Date ? `${encodeURIComponent(i)}=${encodeURIComponent(t.toISOString())}` : t instanceof Object ? W(t, i) : `${encodeURIComponent(i)}=${encodeURIComponent(String(t))}`;
}
class g {
  constructor(t, n = (i) => i) {
    this.raw = t, this.transformer = n;
  }
  async value() {
    return this.transformer(await this.raw.json());
  }
}
function bt(e) {
  return $t(e);
}
function $t(e, t) {
  return e == null ? e : {
    name: e.name == null ? void 0 : e.name,
    symbol: e.symbol == null ? void 0 : e.symbol,
    defintion: e.defintion == null ? void 0 : e.defintion
  };
}
function It(e) {
  return wt(e);
}
function wt(e, t) {
  return e == null ? e : {
    senId: e.sen_id == null ? void 0 : e.sen_id,
    dataType: e.data_type == null ? void 0 : e.data_type,
    formula: e.formula == null ? void 0 : e.formula,
    publishYn: e["publish_yn&quot;"] == null ? void 0 : e["publish_yn&quot;"]
  };
}
function V(e) {
  return Tt(e);
}
function Tt(e, t) {
  return e == null ? e : {
    iotId: e["@iot.id"] == null ? void 0 : e["@iot.id"],
    iotSelfLink: e["@iot.selfLink"] == null ? void 0 : e["@iot.selfLink"],
    definition: e.definition == null ? void 0 : e.definition,
    description: e.description == null ? void 0 : e.description,
    name: e.name == null ? void 0 : e.name,
    properties: e.properties == null ? void 0 : It(e.properties)
  };
}
function Ot(e) {
  return Dt(e);
}
function Dt(e, t) {
  return e == null ? e : {
    senId: e.sen_id == null ? void 0 : e.sen_id,
    dataType: e.data_type == null ? void 0 : e.data_type,
    accessRestriction: e.access_restriction == null ? void 0 : e.access_restriction,
    dataUsage: e.data_usage == null ? void 0 : e.data_usage,
    publishYn: e["publish_yn&quot;"] == null ? void 0 : e["publish_yn&quot;"]
  };
}
function Et(e) {
  return Rt(e);
}
function Rt(e, t) {
  return e == null ? e : {
    senId: e.sen_id == null ? void 0 : e.sen_id,
    publishYn: e["publish_yn&quot;"] == null ? void 0 : e["publish_yn&quot;"]
  };
}
function k(e) {
  return St(e);
}
function St(e, t) {
  return e == null ? e : {
    iotId: e["@iot.id"] == null ? void 0 : e["@iot.id"],
    iotSelfLink: e["@iot.selfLink"] == null ? void 0 : e["@iot.selfLink"],
    parameters: e.parameters == null ? void 0 : Et(e.parameters),
    phenomenonTime: e.phenomenonTime == null ? void 0 : e.phenomenonTime,
    result: e.result == null ? void 0 : e.result,
    resultQuality: e.resultQuality == null ? void 0 : e.resultQuality,
    resultTime: e.resultTime == null ? void 0 : e.resultTime,
    validTime: e.validTime == null ? void 0 : e.validTime
  };
}
function Ct(e) {
  return _t(e);
}
function _t(e, t) {
  return e == null ? e : {
    senId: e.sen_id == null ? void 0 : e.sen_id,
    site: e.site == null ? void 0 : e.site,
    observatory: e.observatory == null ? void 0 : e.observatory,
    z: e.z == null ? void 0 : e.z,
    zCrs: e.z_crs == null ? void 0 : e.z_crs,
    fromDate: e.from_date == null ? void 0 : e.from_date,
    toDate: e.to_date == null ? void 0 : e.to_date,
    comments: e.comments == null ? void 0 : e.comments,
    activeYn: e["active_yn&quot;"] == null ? void 0 : e["active_yn&quot;"],
    publishYn: e["publish_yn&quot;"] == null ? void 0 : e["publish_yn&quot;"]
  };
}
function K(e) {
  return Lt(e);
}
function Lt(e, t) {
  return e == null ? e : {
    iotId: e["@iot.id"] == null ? void 0 : e["@iot.id"],
    iotSelfLink: e["@iot.selfLink"] == null ? void 0 : e["@iot.selfLink"],
    things: e.Things == null ? void 0 : e.Things.map(R),
    thingsiotCount: e["Things@iot.count"] == null ? void 0 : e["Things@iot.count"],
    thingsiotNavigationLink: e["Things@iot.navigationLink"] == null ? void 0 : e["Things@iot.navigationLink"],
    thingsiotNextLink: e["Things@iot.nextLink"] == null ? void 0 : e["Things@iot.nextLink"],
    description: e.description == null ? void 0 : e.description,
    encodingType: e.encodingType == null ? void 0 : e.encodingType,
    location: e.location == null ? void 0 : e.location,
    name: e.name == null ? void 0 : e.name,
    properties: e.properties == null ? void 0 : Ct(e.properties)
  };
}
function Gt(e) {
  return kt(e);
}
function kt(e, t) {
  return e == null ? e : {
    senId: e.sen_id == null ? void 0 : e.sen_id,
    type: e.type == null ? void 0 : e.type,
    serialNo: e.serial_no == null ? void 0 : e.serial_no,
    dataCapture: e.data_capture == null ? void 0 : e.data_capture,
    observationStartDate: e.observation_start_date == null ? void 0 : e.observation_start_date,
    datumZ: e.datum_z == null ? void 0 : e.datum_z,
    datumZCrs: e.datum_z_crs == null ? void 0 : e.datum_z_crs,
    datumName: e.datum_name == null ? void 0 : e.datum_name,
    boreholeReference: e.borehole_reference == null ? void 0 : e.borehole_reference,
    accessRestriction: e.access_restriction == null ? void 0 : e.access_restriction,
    dataUsage: e.data_usage == null ? void 0 : e.data_usage,
    publishYn: e["publish_yn&quot;"] == null ? void 0 : e["publish_yn&quot;"]
  };
}
function R(e) {
  return Ft(e);
}
function Ft(e, t) {
  return e == null ? e : {
    iotId: e["@iot.id"] == null ? void 0 : e["@iot.id"],
    iotSelfLink: e["@iot.selfLink"] == null ? void 0 : e["@iot.selfLink"],
    datastreams: e.Datastreams == null ? void 0 : e.Datastreams.map(F),
    datastreamsiotCount: e["Datastreams@iot.count"] == null ? void 0 : e["Datastreams@iot.count"],
    datastreamsiotNavigationLink: e["Datastreams@iot.navigationLink"] == null ? void 0 : e["Datastreams@iot.navigationLink"],
    datastreamsiotNextLink: e["Datastreams@iot.nextLink"] == null ? void 0 : e["Datastreams@iot.nextLink"],
    locations: e.Locations == null ? void 0 : e.Locations.map(K),
    locationsiotCount: e["Locations@iot.count"] == null ? void 0 : e["Locations@iot.count"],
    locationsiotNavigationLink: e["Locations@iot.navigationLink"] == null ? void 0 : e["Locations@iot.navigationLink"],
    locationsiotNextLink: e["Locations@iot.nextLink"] == null ? void 0 : e["Locations@iot.nextLink"],
    description: e.description == null ? void 0 : e.description,
    name: e.name == null ? void 0 : e.name,
    properties: e.properties == null ? void 0 : Gt(e.properties)
  };
}
function Nt(e) {
  return xt(e);
}
function xt(e, t) {
  return e == null ? e : {
    senId: e.sen_id == null ? void 0 : e.sen_id,
    complexDataYn: e["complex_data_yn&quot;"] == null ? void 0 : e["complex_data_yn&quot;"],
    publishYn: e["publish_yn&quot;"] == null ? void 0 : e["publish_yn&quot;"]
  };
}
function J(e) {
  return Mt(e);
}
function Mt(e, t) {
  return e == null ? e : {
    iotId: e["@iot.id"] == null ? void 0 : e["@iot.id"],
    iotSelfLink: e["@iot.selfLink"] == null ? void 0 : e["@iot.selfLink"],
    description: e.description == null ? void 0 : e.description,
    encodingType: e.encodingType == null ? void 0 : e.encodingType,
    metadata: e.metadata == null ? void 0 : e.metadata,
    name: e.name == null ? void 0 : e.name,
    properties: e.properties == null ? void 0 : Nt(e.properties)
  };
}
function F(e) {
  return Ut(e);
}
function Ut(e, t) {
  return e == null ? e : {
    iotId: e["@iot.id"] == null ? void 0 : e["@iot.id"],
    iotSelfLink: e["@iot.selfLink"] == null ? void 0 : e["@iot.selfLink"],
    observations: e.Observations == null ? void 0 : e.Observations.map(k),
    observationsiotCount: e["Observations@iot.count"] == null ? void 0 : e["Observations@iot.count"],
    observationsiotNavigationLink: e["Observations@iot.navigationLink"] == null ? void 0 : e["Observations@iot.navigationLink"],
    observationsiotNextLink: e["Observations@iot.nextLink"] == null ? void 0 : e["Observations@iot.nextLink"],
    observedProperty: e.ObservedProperty == null ? void 0 : V(e.ObservedProperty),
    observedPropertyiotNavigationLink: e["ObservedProperty@iot.navigationLink"] == null ? void 0 : e["ObservedProperty@iot.navigationLink"],
    sensor: e.Sensor == null ? void 0 : J(e.Sensor),
    sensoriotNavigationLink: e["Sensor@iot.navigationLink"] == null ? void 0 : e["Sensor@iot.navigationLink"],
    thing: e.Thing == null ? void 0 : R(e.Thing),
    thingiotNavigationLink: e["Thing@iot.navigationLink"] == null ? void 0 : e["Thing@iot.navigationLink"],
    description: e.description == null ? void 0 : e.description,
    name: e.name == null ? void 0 : e.name,
    observationType: e.observationType == null ? void 0 : e.observationType,
    observedArea: e.observedArea == null ? void 0 : e.observedArea,
    phenomenonTime: e.phenomenonTime == null ? void 0 : e.phenomenonTime,
    properties: e.properties == null ? void 0 : Ot(e.properties),
    resultTime: e.resultTime == null ? void 0 : e.resultTime,
    unitOfMeasurement: e.unitOfMeasurement == null ? void 0 : bt(e.unitOfMeasurement)
  };
}
function T(e) {
  return At(e);
}
function At(e, t) {
  return e == null ? e : {
    iotCount: e["@iot.count"] == null ? void 0 : e["@iot.count"],
    iotNextLink: e["@iot.nextLink"] == null ? void 0 : e["@iot.nextLink"],
    value: e.value == null ? void 0 : e.value.map(F)
  };
}
function qt(e) {
  return Vt(e);
}
function Vt(e, t) {
  return e == null ? e : {
    senId: e.sen_id == null ? void 0 : e.sen_id,
    type: e.type == null ? void 0 : e.type,
    z: e.z == null ? void 0 : e.z,
    zCrs: e.z_crs == null ? void 0 : e.z_crs,
    fromDate: e.from_date == null ? void 0 : e.from_date,
    toDate: e.to_date == null ? void 0 : e.to_date,
    activeYn: e["active_yn&quot;"] == null ? void 0 : e["active_yn&quot;"],
    sobiBgsId: e.sobi_bgs_id == null ? void 0 : e.sobi_bgs_id,
    boreholeId: e.borehole_id == null ? void 0 : e.borehole_id,
    drilledLength: e.drilled_length == null ? void 0 : e.drilled_length,
    reference: e.reference == null ? void 0 : e.reference,
    referenceType: e.reference_type == null ? void 0 : e.reference_type,
    publishYn: e.publish_yn == null ? void 0 : e.publish_yn
  };
}
function Jt(e) {
  return Ht(e);
}
function Ht(e, t) {
  return e == null ? e : {
    iotId: e["@iot.id"] == null ? void 0 : e["@iot.id"],
    iotSelfLink: e["@iot.selfLink"] == null ? void 0 : e["@iot.selfLink"],
    observations: e.Observations == null ? void 0 : e.Observations.map(k),
    observationsiotCount: e["Observations@iot.count"] == null ? void 0 : e["Observations@iot.count"],
    observationsiotNavigationLink: e["Observations@iot.navigationLink"] == null ? void 0 : e["Observations@iot.navigationLink"],
    observationsiotNextLink: e["Observations@iot.nextLink"] == null ? void 0 : e["Observations@iot.nextLink"],
    description: e.description == null ? void 0 : e.description,
    encodingType: e.encodingType == null ? void 0 : e.encodingType,
    feature: e.feature == null ? void 0 : e.feature,
    name: e.name == null ? void 0 : e.name,
    properties: e.properties == null ? void 0 : qt(e.properties)
  };
}
function H(e) {
  return zt(e);
}
function zt(e, t) {
  return e == null ? e : {
    iotCount: e["@iot.count"] == null ? void 0 : e["@iot.count"],
    iotNextLink: e["@iot.nextLink"] == null ? void 0 : e["@iot.nextLink"],
    value: e.value == null ? void 0 : e.value.map(K)
  };
}
function G(e) {
  return Bt(e);
}
function Bt(e, t) {
  return e == null ? e : {
    iotCount: e["@iot.count"] == null ? void 0 : e["@iot.count"],
    iotNextLink: e["@iot.nextLink"] == null ? void 0 : e["@iot.nextLink"],
    value: e.value == null ? void 0 : e.value.map(k)
  };
}
function Qt(e) {
  return Wt(e);
}
function Wt(e, t) {
  return e == null ? e : {
    iotCount: e["@iot.count"] == null ? void 0 : e["@iot.count"],
    iotNextLink: e["@iot.nextLink"] == null ? void 0 : e["@iot.nextLink"],
    value: e.value == null ? void 0 : e.value.map(R)
  };
}
class S extends _ {
  /**
   * Returns information about the datastream identified by **entityId**
   * Get information about an individual datastream
   */
  async v11DatastreamsEntityIdGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdGet().'
      );
    const i = {};
    t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand);
    const s = {}, o = await this.request({
      path: "/v1.1/Datastreams({entityId})".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => F(a));
  }
  /**
   * Returns information about the datastream identified by **entityId**
   * Get information about an individual datastream
   */
  async v11DatastreamsEntityIdGet(t, n) {
    return await (await this.v11DatastreamsEntityIdGetRaw(t, n)).value();
  }
  /**
   * Returns all observations for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all observations for a datastream
   */
  async v11DatastreamsEntityIdObservationsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdObservationsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter), t.$orderby != null && (i.$orderby = t.$orderby);
    const s = {}, o = await this.request({
      path: "/v1.1/Datastreams({entityId})/Observations".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => G(a));
  }
  /**
   * Returns all observations for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all observations for a datastream
   */
  async v11DatastreamsEntityIdObservationsGet(t, n) {
    return await (await this.v11DatastreamsEntityIdObservationsGetRaw(t, n)).value();
  }
  /**
   * Returns all datastreams that provide the observed property for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams that provide a datastream\'s observed property
   */
  async v11DatastreamsEntityIdObservedPropertyDatastreamsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdObservedPropertyDatastreamsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Datastreams({entityId})/ObservedProperty/Datastreams".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => T(a));
  }
  /**
   * Returns all datastreams that provide the observed property for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams that provide a datastream\'s observed property
   */
  async v11DatastreamsEntityIdObservedPropertyDatastreamsGet(t, n) {
    return await (await this.v11DatastreamsEntityIdObservedPropertyDatastreamsGetRaw(t, n)).value();
  }
  /**
   * Returns information about the observed property for the datastream identified by **entityId**
   * Get information about a datastream\'s observed property
   */
  async v11DatastreamsEntityIdObservedPropertyGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdObservedPropertyGet().'
      );
    const i = {};
    t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand);
    const s = {}, o = await this.request({
      path: "/v1.1/Datastreams({entityId})/ObservedProperty".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => V(a));
  }
  /**
   * Returns information about the observed property for the datastream identified by **entityId**
   * Get information about a datastream\'s observed property
   */
  async v11DatastreamsEntityIdObservedPropertyGet(t, n) {
    return await (await this.v11DatastreamsEntityIdObservedPropertyGetRaw(t, n)).value();
  }
  /**
   * Returns all datastreams which share the sensor type for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams which share a datastream\'s sensor type
   */
  async v11DatastreamsEntityIdSensorDatastreamsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdSensorDatastreamsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Datastreams({entityId})/Sensor/Datastreams".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => T(a));
  }
  /**
   * Returns all datastreams which share the sensor type for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams which share a datastream\'s sensor type
   */
  async v11DatastreamsEntityIdSensorDatastreamsGet(t, n) {
    return await (await this.v11DatastreamsEntityIdSensorDatastreamsGetRaw(t, n)).value();
  }
  /**
   * Returns information about the sensor type for the datastream identified by **entityId**
   * Get information about a datastream\'s sensor type
   */
  async v11DatastreamsEntityIdSensorGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdSensorGet().'
      );
    const i = {};
    t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand);
    const s = {}, o = await this.request({
      path: "/v1.1/Datastreams({entityId})/Sensor".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => J(a));
  }
  /**
   * Returns information about the sensor type for the datastream identified by **entityId**
   * Get information about a datastream\'s sensor type
   */
  async v11DatastreamsEntityIdSensorGet(t, n) {
    return await (await this.v11DatastreamsEntityIdSensorGetRaw(t, n)).value();
  }
  /**
   * Returns all datastreams provided by the thing for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams provided by a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingDatastreamsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdThingDatastreamsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Datastreams({entityId})/Thing/Datastreams".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => T(a));
  }
  /**
   * Returns all datastreams provided by the thing for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all datastreams provided by a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingDatastreamsGet(t, n) {
    return await (await this.v11DatastreamsEntityIdThingDatastreamsGetRaw(t, n)).value();
  }
  /**
   * Returns information about the thing for the datastream identified by **entityId**
   * Get information about a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdThingGet().'
      );
    const i = {};
    t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand);
    const s = {}, o = await this.request({
      path: "/v1.1/Datastreams({entityId})/Thing".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => R(a));
  }
  /**
   * Returns information about the thing for the datastream identified by **entityId**
   * Get information about a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingGet(t, n) {
    return await (await this.v11DatastreamsEntityIdThingGetRaw(t, n)).value();
  }
  /**
   * Returns all locations of the thing for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all locations for a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingLocationsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11DatastreamsEntityIdThingLocationsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Datastreams({entityId})/Thing/Locations".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => H(a));
  }
  /**
   * Returns all locations of the thing for the datastream identified by **entityId** (subject to any other parameters set)
   * Get all locations for a datastream\'s thing
   */
  async v11DatastreamsEntityIdThingLocationsGet(t, n) {
    return await (await this.v11DatastreamsEntityIdThingLocationsGetRaw(t, n)).value();
  }
  /**
   * Returns all the datastreams provided by this api (subject to any parameters set)
   * Get all datastreams
   */
  async v11DatastreamsGetRaw(t, n) {
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Datastreams",
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => T(a));
  }
  /**
   * Returns all the datastreams provided by this api (subject to any parameters set)
   * Get all datastreams
   */
  async v11DatastreamsGet(t = {}, n) {
    return await (await this.v11DatastreamsGetRaw(t, n)).value();
  }
}
class Yt extends _ {
  /**
   * Returns information about the datastream for the observation identified by **entityId**
   * Get information about an observation\'s datastream
   */
  async v11ObservationsEntityIdDatastreamGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamGet().'
      );
    const i = {};
    t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})/Datastream".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => F(a));
  }
  /**
   * Returns information about the datastream for the observation identified by **entityId**
   * Get information about an observation\'s datastream
   */
  async v11ObservationsEntityIdDatastreamGet(t, n) {
    return await (await this.v11ObservationsEntityIdDatastreamGetRaw(t, n)).value();
  }
  /**
   * Returns all observations for the datastream of the observation identified by **entityId** (subject to any other parameters set)
   * Get all observations for an observations\'s datastream
   */
  async v11ObservationsEntityIdDatastreamObservationsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamObservationsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})/Datastream/Observations".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => G(a));
  }
  /**
   * Returns all observations for the datastream of the observation identified by **entityId** (subject to any other parameters set)
   * Get all observations for an observations\'s datastream
   */
  async v11ObservationsEntityIdDatastreamObservationsGet(t, n) {
    return await (await this.v11ObservationsEntityIdDatastreamObservationsGetRaw(t, n)).value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamObservedPropertyDatastreamsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamObservedPropertyDatastreamsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})/Datastream/ObservedProperty/Datastreams".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => T(a));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamObservedPropertyDatastreamsGet(t, n) {
    return await (await this.v11ObservationsEntityIdDatastreamObservedPropertyDatastreamsGetRaw(t, n)).value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamObservedPropertyGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamObservedPropertyGet().'
      );
    const i = {};
    t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})/Datastream/ObservedProperty".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => V(a));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamObservedPropertyGet(t, n) {
    return await (await this.v11ObservationsEntityIdDatastreamObservedPropertyGetRaw(t, n)).value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamSensorDatastreamsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamSensorDatastreamsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})/Datastream/Sensor/Datastreams".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => T(a));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamSensorDatastreamsGet(t, n) {
    return await (await this.v11ObservationsEntityIdDatastreamSensorDatastreamsGetRaw(t, n)).value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamSensorGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamSensorGet().'
      );
    const i = {};
    t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})/Datastream/Sensor".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => J(a));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamSensorGet(t, n) {
    return await (await this.v11ObservationsEntityIdDatastreamSensorGetRaw(t, n)).value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingDatastreamsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamThingDatastreamsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})/Datastream/Thing/Datastreams".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => T(a));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingDatastreamsGet(t, n) {
    return await (await this.v11ObservationsEntityIdDatastreamThingDatastreamsGetRaw(t, n)).value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamThingGet().'
      );
    const i = {};
    t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})/Datastream/Thing".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => R(a));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingGet(t, n) {
    return await (await this.v11ObservationsEntityIdDatastreamThingGetRaw(t, n)).value();
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingLocationsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdDatastreamThingLocationsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})/Datastream/Thing/Locations".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => H(a));
  }
  /**
   */
  async v11ObservationsEntityIdDatastreamThingLocationsGet(t, n) {
    return await (await this.v11ObservationsEntityIdDatastreamThingLocationsGetRaw(t, n)).value();
  }
  /**
   * Returns information about the feature of interest for the observation identified by **entityId**
   * Get information about an observation\'s feature of interest
   */
  async v11ObservationsEntityIdFeatureOfInterestGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdFeatureOfInterestGet().'
      );
    const i = {};
    t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})/FeatureOfInterest".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => Jt(a));
  }
  /**
   * Returns information about the feature of interest for the observation identified by **entityId**
   * Get information about an observation\'s feature of interest
   */
  async v11ObservationsEntityIdFeatureOfInterestGet(t, n) {
    return await (await this.v11ObservationsEntityIdFeatureOfInterestGetRaw(t, n)).value();
  }
  /**
   */
  async v11ObservationsEntityIdFeatureOfInterestObservationsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdFeatureOfInterestObservationsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})/FeatureOfInterest/Observations".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => G(a));
  }
  /**
   */
  async v11ObservationsEntityIdFeatureOfInterestObservationsGet(t, n) {
    return await (await this.v11ObservationsEntityIdFeatureOfInterestObservationsGetRaw(t, n)).value();
  }
  /**
   * Returns information about the observation identified by **entityId**
   * Get information about an individual observation
   */
  async v11ObservationsEntityIdGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ObservationsEntityIdGet().'
      );
    const i = {};
    t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations({entityId})".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => k(a));
  }
  /**
   * Returns information about the observation identified by **entityId**
   * Get information about an individual observation
   */
  async v11ObservationsEntityIdGet(t, n) {
    return await (await this.v11ObservationsEntityIdGetRaw(t, n)).value();
  }
  /**
   * Returns all the observations provided by this api (subject to any parameters set)
   * Get all observations
   */
  async v11ObservationsGetRaw(t, n) {
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Observations",
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => G(a));
  }
  /**
   * Returns all the observations provided by this api (subject to any parameters set)
   * Get all observations
   */
  async v11ObservationsGet(t = {}, n) {
    return await (await this.v11ObservationsGetRaw(t, n)).value();
  }
}
class D extends _ {
  /**
   * Returns all datastreams for the thing identified by **entityId** (subject to any other parameters set)
   * Get all datastreams for a thing
   */
  async v11ThingsEntityIdDatastreamsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ThingsEntityIdDatastreamsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Things({entityId})/Datastreams".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => T(a));
  }
  /**
   * Returns all datastreams for the thing identified by **entityId** (subject to any other parameters set)
   * Get all datastreams for a thing
   */
  async v11ThingsEntityIdDatastreamsGet(t, n) {
    return await (await this.v11ThingsEntityIdDatastreamsGetRaw(t, n)).value();
  }
  /**
   * Returns information about the thing identified by **entityId**
   * Get information about an individual thing
   */
  async v11ThingsEntityIdGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ThingsEntityIdGet().'
      );
    const i = {};
    t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand);
    const s = {}, o = await this.request({
      path: "/v1.1/Things({entityId})".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => R(a));
  }
  /**
   * Returns information about the thing identified by **entityId**
   * Get information about an individual thing
   */
  async v11ThingsEntityIdGet(t, n) {
    return await (await this.v11ThingsEntityIdGetRaw(t, n)).value();
  }
  /**
   * Returns information about the location for the thing identified by **entityId**
   * Get information about a things\'s location
   */
  async v11ThingsEntityIdLocationsGetRaw(t, n) {
    if (t.entityId == null)
      throw new v(
        "entityId",
        'Required parameter "entityId" was null or undefined when calling v11ThingsEntityIdLocationsGet().'
      );
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Things({entityId})/Locations".replace("{entityId}", encodeURIComponent(String(t.entityId))),
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => H(a));
  }
  /**
   * Returns information about the location for the thing identified by **entityId**
   * Get information about a things\'s location
   */
  async v11ThingsEntityIdLocationsGet(t, n) {
    return await (await this.v11ThingsEntityIdLocationsGetRaw(t, n)).value();
  }
  /**
   * Returns all the things provided by this api (subject to any parameters set)
   * Get all things
   */
  async v11ThingsGetRaw(t, n) {
    const i = {};
    t.$skip != null && (i.$skip = t.$skip), t.$top != null && (i.$top = t.$top), t.$count != null && (i.$count = t.$count), t.$select != null && (i.$select = t.$select), t.$expand != null && (i.$expand = t.$expand), t.$filter != null && (i.$filter = t.$filter);
    const s = {}, o = await this.request({
      path: "/v1.1/Things",
      method: "GET",
      headers: s,
      query: i
    }, n);
    return new g(o, (a) => Qt(a));
  }
  /**
   * Returns all the things provided by this api (subject to any parameters set)
   * Get all things
   */
  async v11ThingsGet(t = {}, n) {
    return await (await this.v11ThingsGetRaw(t, n)).value();
  }
}
class Kt {
  cache = /* @__PURE__ */ new Map();
  pendingRequests = /* @__PURE__ */ new Map();
  ttl;
  maxEntries;
  constructor(t = {}) {
    this.ttl = t.ttl ?? 3e4, this.maxEntries = t.maxEntries ?? 200;
  }
  getCacheKey(t, n) {
    const i = n?.method || "GET", s = n?.body ? String(n.body) : "";
    return `${i}:${t}:${s}`;
  }
  isValidCacheEntry(t) {
    return Date.now() - t.timestamp < this.ttl;
  }
  cleanExpiredCache() {
    const t = Date.now();
    for (const [n, i] of this.cache.entries())
      t - i.timestamp >= this.ttl && this.cache.delete(n);
  }
  createCachedResponse(t) {
    return new Response(JSON.stringify(t.body), {
      status: t.status,
      statusText: t.statusText,
      headers: t.headers
    });
  }
  clearCache() {
    this.cache.clear(), this.pendingRequests.clear();
  }
  createCachingFetch(t) {
    return async (n, i) => {
      const s = typeof n == "string" ? n : n.toString();
      if ((i?.method || "GET") !== "GET")
        return t(n, i);
      const a = this.getCacheKey(s, i), r = this.cache.get(a);
      if (r && this.isValidCacheEntry(r))
        return console.log("[OGC STA Cache] Cache HIT:", s.substring(0, 80)), this.createCachedResponse(r);
      const c = this.pendingRequests.get(a);
      if (c)
        return console.log("[OGC STA Cache] Dedup - waiting for pending request:", s.substring(0, 80)), (await c).clone();
      console.log("[OGC STA Cache] Cache MISS - fetching:", s.substring(0, 80));
      let h, l;
      const p = new Promise((y, d) => {
        h = y, l = d;
      });
      this.pendingRequests.set(a, p);
      try {
        const y = await t(n, i);
        if (y.ok) {
          const d = y.clone();
          try {
            const f = await d.json();
            this.cache.set(a, {
              body: f,
              status: y.status,
              statusText: y.statusText,
              headers: y.headers,
              timestamp: Date.now()
            }), this.cache.size > this.maxEntries && this.cleanExpiredCache();
          } catch {
          }
        }
        return h(y.clone()), y;
      } catch (y) {
        throw l(y), y;
      } finally {
        this.pendingRequests.delete(a);
      }
    };
  }
}
let U = null;
function Xt(e, t) {
  return U || (U = new Kt(t)), U.createCachingFetch(e);
}
const L = (e) => {
  const t = { locations: [], things: e, datastreams: [] }, n = [];
  let i = [];
  for (const s of e ?? []) {
    if (s.datastreams) {
      i = [...i, ...s.datastreams];
      for (const o of s.datastreams ?? [])
        o.thing = s;
    }
    for (const o of s.locations ?? []) {
      o.things || (o.things = []);
      const a = n.find((r) => r.iotId === o.iotId);
      a ? (a.Things ?? [].find((c) => c.iotId == s.iotId)) || (a.Things || (a.Things = []), a.Things.push(s)) : (o.things.push(s), n.push(o));
    }
  }
  return t.datastreams = i, t.locations = n, t;
}, w = "EFilter", C = "EFilterReset", Zt = "ENoAction", X = "EMqttUnsubscribeAll", Z = "EUpdateMqttSubscriptions";
class Pt {
  worker = null;
  pendingRequests = /* @__PURE__ */ new Map();
  requestCounter = 0;
  isSupported = typeof Worker < "u";
  constructor() {
    this.isSupported && this.initWorker();
  }
  initWorker() {
    try {
      const t = `
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
      `, n = new Blob([t], { type: "application/javascript" }), i = URL.createObjectURL(n);
      this.worker = new Worker(i), this.worker.onmessage = (s) => {
        const { requestId: o, results: a } = s.data, r = this.pendingRequests.get(o);
        r && (this.pendingRequests.delete(o), r.resolve(a));
      }, this.worker.onerror = (s) => {
        console.error("ObservationsWorker error:", s);
        for (const [o, a] of this.pendingRequests)
          a.reject(new Error("Worker error")), this.pendingRequests.delete(o);
      };
    } catch (t) {
      console.warn("Could not create ObservationsWorker:", t), this.isSupported = !1;
    }
  }
  async fetchObservations(t, n, i) {
    if (!this.isSupported || !this.worker)
      return this.fetchOnMainThread(t, n, i);
    const s = `req_${++this.requestCounter}`, o = n.map((a) => ({
      baseUrl: t,
      datastreamId: a.iotId || a["@iot.id"],
      historyParams: i
    }));
    return new Promise((a, r) => {
      this.pendingRequests.set(s, { resolve: a, reject: r }), this.worker.postMessage({
        type: "fetchObservations",
        requestId: s,
        requests: o
      }), setTimeout(() => {
        this.pendingRequests.has(s) && (this.pendingRequests.delete(s), r(new Error("Worker request timeout")));
      }, 3e4);
    });
  }
  async fetchOnMainThread(t, n, i) {
    const s = [], o = n.map(async (r) => {
      const c = r.iotId || r["@iot.id"];
      try {
        const h = new URLSearchParams();
        i?.$filter && h.set("$filter", i.$filter), i?.$orderby ? h.set("$orderby", i.$orderby) : h.set("$orderby", "phenomenonTime desc"), i?.$top && h.set("$top", i.$top.toString());
        const l = `${t}/v1.1/Datastreams(${c})/Observations?${h.toString()}`, d = (await (await fetch(l)).json()).value || [];
        return d.forEach((f) => {
          f.ds_source = c;
        }), { datastreamId: c, observations: d };
      } catch {
        return { datastreamId: c, observations: [] };
      }
    }), a = await Promise.all(o);
    return s.push(...a), s;
  }
  terminate() {
    this.worker && (this.worker.terminate(), this.worker = null), this.pendingRequests.clear();
  }
}
let A = null;
function jt() {
  return A || (A = new Pt()), A;
}
var te = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, N = (e, t, n, i) => {
  for (var s = i > 1 ? void 0 : i ? ee(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (s = (i ? a(t, n, s) : a(s)) || s);
  return i && s && te(t, n, s), s;
};
let E = class extends st {
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
  initialLoadDone = !1;
  mqttUpdateTimer = null;
  hasPendingMqttUpdates = !1;
  requestFlag = {
    key: C,
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
  init(e) {
    super.init(e), this.logMqtt = this.loggerFactory.createLogger("daanse:ogcsta:mqtt"), this.logData = this.loggerFactory.createLogger("daanse:ogcsta:data"), this.logHistory = this.loggerFactory.createLogger("daanse:ogcsta:history"), this.logCore = this.loggerFactory.createLogger("daanse:ogcsta:core");
    const t = this.configuration !== void 0;
    if (t && this.mqttConnection && (this.logMqtt("Configuration changed, cleaning up old MQTT subscriptions"), this.unsubscribeAll(), this.initialLoadDone = !1), this.configuration = e, !e.connection) throw new Error("Connetion must be set");
    if (this.connection = e.connection, this.requestFlag = { key: C, params: void 0 }, e.history && e.history.enabled === void 0 && (e.history.timeRange?.start || e.history.timeRange?.startVariable || e.history.timeRange?.end || e.history.timeRange?.endVariable || e.history.phenomenonTime?.start || e.history.phenomenonTime?.startVariable || e.history.phenomenonTime?.end || e.history.phenomenonTime?.endVariable || e.history.resultTime?.start || e.history.resultTime?.startVariable || e.history.resultTime?.end || e.history.resultTime?.endVariable) && (this.logHistory("Auto-enabling history due to configured time filters"), e.history.enabled = !0), e.mqttConnection && this.connectionRepository)
      try {
        this.mqttConnection = this.connectionRepository.getConnection(e.mqttConnection), this.setupMQTTMessageHandler(), this.logMqtt("MQTT Connection established:", e.mqttConnection);
      } catch (n) {
        console.error("OGCSTA: Could not establish MQTT connection:", n), this.mqttConnection = null;
      }
    else t && this.mqttConnection && (this.logMqtt("MQTT Connection removed from configuration"), this.mqttConnection = null);
    this.setupVariableWatchers(), this.workerManager = jt();
    try {
      const n = this.connectionRepository.getConnection(this.connection);
      n?.url && (this.connectionBaseUrl = n.url);
    } catch (n) {
      this.logCore("Could not get connection base URL:", n);
    }
  }
  callEvent(e, t, n = !0) {
    if (e == w) {
      const i = Object.keys(t)[0];
      if (i === "observations" && t.observations && (this.lastObservationsParams = t.observations), !n)
        return this.filterDebounceTimer && (clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = null), this.requestFlag = { key: w, params: t }, this.getData("OGCSTAData").then(() => {
        }).catch((s) => {
          this.logCore("Silent getData error:", s);
        });
      this.filterDebounceTimer && i === this.lastFilterType ? clearTimeout(this.filterDebounceTimer) : this.filterDebounceTimer && (clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = null, this.pendingRequestFlag = { ...this.requestFlag }, this.notify()), this.requestFlag = { key: w, params: t }, this.lastFilterType = i, this.filterDebounceTimer = setTimeout(() => {
        this.notify(), this.filterDebounceTimer = null;
      }, 300);
    } else e == Z ? this.mqttConnection && (this.logCore("Updating MQTT subscriptions:", t?.observations?.length || 0, "observations"), this.subscribeToDatastreams(t?.observations || []), this.subscribeToLocations()) : e == X ? this.mqttConnection && (this.logCore("Unsubscribing from all MQTT topics"), this.unsubscribeAll()) : (this.requestFlag = { key: C, params: t }, this.notify());
  }
  destroy() {
    if (this.logCore("Store destroy() called"), this.debounceTimer && (clearTimeout(this.debounceTimer), this.debounceTimer = null), this.filterDebounceTimer && (clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = null), this.mqttUpdateTimer && (clearTimeout(this.mqttUpdateTimer), this.mqttUpdateTimer = null), this.mqttConnection) {
      this.logCore(`Cleaning up MQTT subscriptions on destroy (${this.subscribedDatastreams.size} datastreams, ${this.subscribedLocations.size} locations)`);
      const e = this.mqttConnection.client;
      e && e.connected ? this.unsubscribeAll() : (this.logCore("Client not connected, just clearing maps"), this.subscribedDatastreams.clear(), this.subscribedLocations.clear()), this.mqttConnection = null;
    }
    this.logCore("Store destroyed");
  }
  async getData(e, t) {
    const n = this.pendingRequestFlag || this.requestFlag;
    if (this.pendingRequestFlag = null, !this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    const i = this.connectionRepository.getConnection(
      this.connection
    ), o = Xt((h, l) => i.fetch({ url: h }, l), { ttl: 3e4, maxEntries: 200 });
    this.baseConfigration = new Q({
      basePath: "",
      fetchApi: o
    });
    const a = t?.isolatedRequest === !0, r = t?.reload || n.key == C || !this.resultMap.things || this.resultMap.things.length === 0;
    r && !a && (this.resultMap = {
      things: [],
      datastreams: [],
      observations: [],
      locations: []
    });
    const c = [];
    if (t?.filter) {
      const h = this.requestFlag;
      this.requestFlag = { key: w, params: t.filter }, this.getPartitionalData(c), this.requestFlag = h;
    } else if (n.key == w) {
      const h = this.requestFlag;
      this.requestFlag = n, this.getPartitionalData(c), this.requestFlag = h;
    } else r && this.getAllData(c);
    if (c.length > 0) {
      const h = await Promise.all(c);
      if (a) {
        const l = {
          things: [],
          datastreams: [],
          observations: [],
          locations: []
        };
        for (const p of h)
          p.datastreams && (l.datastreams = l.datastreams?.concat(p.datastreams)), p.things && (l.things = l.things?.concat(p.things)), p.observations && (l.observations = l.observations?.concat(p.observations)), p.locations && (l.locations = l.locations?.concat(p.locations));
        return e == "OGCSTAData" ? {
          things: l.things ? l.things.map((p) => ({ ...p })) : [],
          datastreams: l.datastreams ? [...l.datastreams] : [],
          observations: l.observations ? [...l.observations] : [],
          locations: l.locations ? l.locations.map((p) => ({ ...p })) : []
        } : l;
      }
      for (const l of h)
        l.datastreams && (this.resultMap.datastreams = this.resultMap.datastreams?.concat(l.datastreams)), l.things && (this.resultMap.things = this.resultMap.things?.concat(l.things)), l.observations && (this.resultMap.observations = this.resultMap.observations?.concat(l.observations)), l.locations && (this.resultMap.locations = this.resultMap.locations?.concat(l.locations));
      if (t?.filter || n.key == w) {
        const l = t?.filter?.observations || n.params?.observations;
        for (const p of l ?? []) {
          const y = this.resultMap.datastreams?.find((d) => d.iotId == p.iotId);
          if (y) {
            const d = this.resultMap.observations?.filter(
              (f) => f.ds_source == p.iotId
            ) || [];
            y.observations = d;
            for (const f of this.resultMap.things || []) {
              const u = f.datastreams?.find((m) => m.iotId == p.iotId);
              u && (u.observations = d);
            }
            for (const f of this.resultMap.locations || [])
              for (const u of f.things || []) {
                const m = u.datastreams?.find(($) => $.iotId == p.iotId);
                m && (m.observations = d);
              }
          }
        }
      }
      for (const l of n.params?.observations ?? [])
        this.resultMap.observations = this.resultMap.observations?.filter(
          (p) => p.ds_source !== l.iotId
        ) || [];
    }
    return e == "OGCSTAData" ? {
      things: this.resultMap.things ? this.resultMap.things.map((h) => ({ ...h })) : [],
      datastreams: this.resultMap.datastreams ? [...this.resultMap.datastreams] : [],
      observations: this.resultMap.observations ? [...this.resultMap.observations] : [],
      locations: this.resultMap.locations ? this.resultMap.locations.map((h) => ({ ...h })) : []
    } : this.resultMap;
  }
  getOriginalData() {
  }
  static validateConfiguration(e) {
    return !!e?.connection;
  }
  getAllData(e) {
    e.push(
      (async () => {
        try {
          const t = (await new D(this.baseConfigration).v11ThingsGet({
            $expand: "Datastreams,Locations"
          })).value;
          return L(
            t
          );
        } catch (t) {
          if (t.response.status == 501)
            return await this.fallBackSingleRequests();
          throw t;
        }
      })()
    );
  }
  async fallBackSingleRequests() {
    const e = (await new D(this.baseConfigration).v11ThingsGet()).value;
    for (const n of e) {
      n.locations || (n.locations = []), n.datastreams || (n.datastreams = []);
      try {
        if (n.iotId) {
          const i = (await new D(
            this.baseConfigration
          ).v11ThingsEntityIdLocationsGet({ entityId: n.iotId })).value;
          n.locations = i;
        }
      } catch (i) {
        this.logCore("Error:", i);
      }
      try {
        const i = (await new D(
          this.baseConfigration
        ).v11ThingsEntityIdDatastreamsGet({ entityId: n.iotId })).value;
        n.datastreams = i;
      } catch (i) {
        this.logCore("Error:", i);
      }
    }
    return L(e);
  }
  getPartitionalData(e) {
    this.getThings(e), this.getDataStreams(e), this.getObservations(e), this.getHistoricalLocations(e);
  }
  resolveTimeValue(e, t) {
    if (t && this.variableRepository) {
      const n = this.variableRepository.getVariable(t);
      if (n && n.value)
        return n.value;
    }
    return e;
  }
  buildHistoryFilter(e) {
    if (!e?.enabled) return "";
    const t = [], n = this.resolveTimeValue(
      e.phenomenonTime?.start,
      e.phenomenonTime?.startVariable
    ), i = this.resolveTimeValue(
      e.phenomenonTime?.end,
      e.phenomenonTime?.endVariable
    );
    n && t.push(`phenomenonTime gt ${n}`), i && t.push(`phenomenonTime lt ${i}`);
    const s = this.resolveTimeValue(
      e.resultTime?.start,
      e.resultTime?.startVariable
    ), o = this.resolveTimeValue(
      e.resultTime?.end,
      e.resultTime?.endVariable
    );
    s && t.push(`resultTime gt ${s}`), o && t.push(`resultTime lt ${o}`);
    const a = this.resolveTimeValue(
      e.timeRange?.start,
      e.timeRange?.startVariable
    ), r = this.resolveTimeValue(
      e.timeRange?.end,
      e.timeRange?.endVariable
    );
    return a && t.push(`phenomenonTime gt ${a}`), r && t.push(`phenomenonTime lt ${r}`), t.join(" and ");
  }
  getHistoryQueryParams(e) {
    const t = {};
    if (e?.enabled) {
      const n = this.buildHistoryFilter(e);
      n && (t.$filter = n), e.orderBy && (t.$orderby = e.orderBy), e.limit && (t.$top = e.limit);
    }
    return t;
  }
  async getHistoricalObservations(e, t) {
    if (!this.baseConfigration)
      throw new Error("Base configuration not initialized");
    const n = this.getHistoryQueryParams(t);
    return (await new S(this.baseConfigration).v11DatastreamsEntityIdObservationsGet({
      entityId: e,
      ...n
    })).value || [];
  }
  getObservations(e) {
    const t = this.configuration?.history;
    if (this.requestFlag.params && "observations" in this.requestFlag.params)
      if ("all" in this.requestFlag.params.observations)
        e.push(
          (async () => {
            const n = this.getHistoryQueryParams(t);
            return { observations: (await new Yt(
              this.baseConfigration
            ).v11ObservationsGet(n)).value };
          })()
        );
      else if (this.mqttConnection && !t?.enabled)
        if (this.initialLoadDone)
          this.subscribeToDatastreams(this.requestFlag.params.observations), this.subscribeToLocations();
        else {
          this.logMqtt("Initial load via HTTP, then switching to MQTT");
          for (const i of this.requestFlag.params.observations)
            e.push(
              (async () => {
                const s = {
                  entityId: i.iotId + "",
                  $orderby: "phenomenonTime desc",
                  $top: 1
                }, o = (await new S(
                  this.baseConfigration
                ).v11DatastreamsEntityIdObservationsGet(s)).value;
                return o && o.length > 0 && o.forEach((a) => {
                  a.ds_source = i.iotId + "";
                }), { observations: o };
              })()
            );
          this.initialLoadDone = !0, setTimeout(() => {
            this.subscribeToDatastreams(this.requestFlag.params.observations), this.subscribeToLocations();
          }, 100);
        }
      else if (this.workerManager && this.connectionBaseUrl) {
        const i = this.getHistoryQueryParams(t), s = {
          $orderby: i.$orderby || "phenomenonTime desc"
        };
        i.$filter && (s.$filter = i.$filter), t?.enabled ? i.$top && (s.$top = i.$top) : s.$top = 1, e.push(
          (async () => {
            const o = await this.workerManager.fetchObservations(
              this.connectionBaseUrl,
              this.requestFlag.params.observations,
              s
            ), a = [];
            for (const r of o)
              a.push(...r.observations);
            return { observations: a };
          })()
        );
      } else
        for (const i of this.requestFlag.params.observations)
          e.push(
            (async () => {
              const s = this.getHistoryQueryParams(t), o = {
                entityId: i.iotId + "",
                $orderby: "phenomenonTime desc"
              };
              t?.enabled || (o.$top = 1);
              const a = (await new S(
                this.baseConfigration
              ).v11DatastreamsEntityIdObservationsGet({
                ...o,
                ...s
              })).value;
              return a && a.length > 0 && a.forEach((r) => {
                r.ds_source = i.iotId + "";
              }), { observations: a };
            })()
          );
    else this.mqttConnection && !t?.enabled && (this.logMqtt("No observations requested, cleaning up subscriptions"), this.subscribeToDatastreams([]), this.subscribeToLocations());
  }
  getDataStreams(e) {
    if (this.requestFlag.params && "datastreams" in this.requestFlag.params) {
      if ("all" in this.requestFlag.params.datastreams)
        e.push(
          (async () => ({ datastreams: (await new S(
            this.baseConfigration
          ).v11DatastreamsGet()).value }))()
        );
      else if ("ids" in this.requestFlag.params.datastreams)
        for (const t of this.requestFlag.params.datastreams.ids)
          e.push(
            (async () => ({ observations: (await new S(
              this.baseConfigration
            ).v11DatastreamsEntityIdObservationsGet({
              entityId: t,
              $top: 1
            })).value }))()
          );
    }
  }
  getThings(e) {
    if (this.requestFlag.params && "things" in this.requestFlag.params) {
      if ("all" in this.requestFlag.params.things) {
        const t = this.requestFlag.params.things.all?.includeDatastreams, n = this.requestFlag.params.things.all?.includeLocations;
        let i = [];
        t && i.push("Datastreams"), n && i.push("Locations"), e.push(
          (async () => {
            try {
              const s = i.length > 0 ? i.join(",") : void 0, o = (await new D(this.baseConfigration).v11ThingsGet({
                $expand: s
              })).value;
              return i.length > 0 ? L(o) : { things: o };
            } catch (s) {
              if (s.response.status == 501)
                return i.includes("Datastreams") || i.includes("Locations") ? await this.fallBackSingleRequests() : { things: (await new D(this.baseConfigration).v11ThingsGet()).value };
              throw s;
            }
          })()
        );
      } else if ("ids" in this.requestFlag.params.things) {
        this.logData("🔍 OgcSta: Loading things by IDs:", this.requestFlag.params.things.ids);
        const t = this.requestFlag.params.things.includeDatastreams, n = this.requestFlag.params.things.includeLocations;
        let i = [];
        t && i.push("Datastreams"), n && i.push("Locations"), this.logData("🔍 OgcSta: Expand params:", i);
        for (const s of this.requestFlag.params.things.ids)
          e.push(
            (async () => {
              const o = i.length > 0 ? i.join(",") : void 0;
              this.logData(`🔍 OgcSta: Fetching thing ${s} with expand: ${o}`);
              const a = await new D(
                this.baseConfigration
              ).v11ThingsEntityIdGet({ entityId: s, $expand: o });
              return i.length > 0 ? L([a]) : { things: [a] };
            })()
          );
      }
    }
  }
  collectVariableNames() {
    const e = [], t = this.configuration?.history;
    return t?.enabled && (t.timeRange?.startVariable && e.push(t.timeRange.startVariable), t.timeRange?.endVariable && e.push(t.timeRange.endVariable), t.phenomenonTime?.startVariable && e.push(t.phenomenonTime.startVariable), t.phenomenonTime?.endVariable && e.push(t.phenomenonTime.endVariable), t.resultTime?.startVariable && e.push(t.resultTime.startVariable), t.resultTime?.endVariable && e.push(t.resultTime.endVariable)), e;
  }
  setupVariableWatchers() {
    if (!this.variableRepository) return;
    const e = this.collectVariableNames();
    for (const t of e)
      if (!this.watchedVariables.has(t)) {
        const n = this.variableRepository.getVariable(t);
        n && (n.subscribe(() => {
          this.onVariableChanged();
        }), this.watchedVariables.add(t));
      }
  }
  async fetchHistoricalLocations() {
    const e = this.configuration?.history;
    if (!e?.enabled) return;
    if (this.configuration?.useCurrentLocationInsteadOfHistorical) {
      this.logHistory("📍 Using current locations instead of historical locations (useCurrentLocationInsteadOfHistorical=true)");
      return;
    }
    const t = this.resolveTimeValue(
      e.timeRange?.start,
      e.timeRange?.startVariable
    ) || this.resolveTimeValue(
      e.phenomenonTime?.start,
      e.phenomenonTime?.startVariable
    ), n = this.resolveTimeValue(
      e.timeRange?.end,
      e.timeRange?.endVariable
    ) || this.resolveTimeValue(
      e.phenomenonTime?.end,
      e.phenomenonTime?.endVariable
    );
    if (!n) return;
    const i = this.requestFlag.params?.observations || [], s = /* @__PURE__ */ new Set();
    for (const a of i) {
      const r = this.resultMap.datastreams?.find((c) => c.iotId === a.iotId);
      r?.thing?.iotId && s.add(r.thing.iotId);
    }
    if (s.size === 0) return;
    this.logHistory(`📍 Fetching historical locations for ${s.size} things at time range: ${t || "none"} to ${n}`);
    const o = this.connectionRepository.getConnection(
      this.connection
    );
    for (const a of s)
      try {
        let r = `time le ${n}`;
        t && (r = `time ge ${t} and ${r}`);
        const c = `/v1.1/Things(${a})/HistoricalLocations?$filter=${r}&$orderby=time desc&$top=1&$expand=Locations`, p = (await (await o.fetch({ url: c }, {
          method: "GET"
        })).json()).value;
        if (p && p.length > 0) {
          const d = p[0].Locations;
          if (d && d.length > 0) {
            this.logHistory(`📍 Found historical location for thing ${a}:`, d[0]);
            const f = this.resultMap.things?.find((u) => u.iotId === a);
            f && this.logHistory(`🔵 BEFORE UPDATE - Thing ${a} current location:`, JSON.stringify(f.locations));
            for (const u of this.resultMap.datastreams || [])
              u.thing?.iotId === a && u.thing.locations && (u.thing.locations = d, this.logHistory(`📍 Updated datastream ${u.iotId} with historical location`));
            f && f.locations && (f.locations = d, this.logHistory(`🟢 AFTER UPDATE - Thing ${a} new location:`, JSON.stringify(f.locations)));
            for (const u of d) {
              const m = this.resultMap.locations?.find(($) => $.iotId === u.iotId);
              if (m)
                m.location = u.location, m.encodingType = u.encodingType, u.name && (m.name = u.name), u.description && (m.description = u.description), m.things || (m.things = []), f && !m.things.find(($) => $.iotId === a) && (m.things.push(f), this.logHistory(`📍 Added thing ${a} back to location ${u.iotId}`));
              else if (f) {
                const $ = { ...u, things: [f] };
                this.resultMap.locations?.push($), this.logHistory(`📍 Created new location ${u.iotId} with thing ${a}`);
              }
            }
          }
        } else {
          this.logHistory(`📍 No historical location found for thing ${a} at time ${n}`);
          const y = this.resultMap.things?.find((d) => d.iotId === a);
          for (const d of this.resultMap.datastreams || [])
            d.thing && d.thing.iotId === a && (d.thing.locations = [], this.logHistory(`📍 Cleared location for datastream ${d.iotId}`));
          y && y.locations && (y.locations = [], this.logHistory(`🟢 Cleared location for Thing ${a}`));
          for (const d of this.resultMap.locations || [])
            if (d.things) {
              const f = d.things.findIndex((u) => u.iotId === a);
              f !== -1 && (d.things.splice(f, 1), this.logHistory(`📍 Removed thing ${a} from location ${d.iotId}`));
            }
          this.resultMap.locations = this.resultMap.locations?.filter(
            (d) => d.things && d.things.length > 0
          ) || [];
        }
      } catch (r) {
        this.logHistory(`❌ Error fetching historical location for thing ${a}:`, r);
      }
  }
  getHistoricalLocations(e) {
    if (this.configuration?.useCurrentLocationInsteadOfHistorical) {
      this.logHistory("📍 Using current locations instead of historical locations (useCurrentLocationInsteadOfHistorical=true)");
      return;
    }
    const t = this.configuration?.history;
    if (this.requestFlag.params && "historicalLocations" in this.requestFlag.params) {
      const n = this.requestFlag.params.historicalLocations;
      for (const i of n)
        e.push(
          (async () => {
            const s = i.iotId || i["@iot.id"], o = this.resolveTimeValue(
              t?.timeRange?.start,
              t?.timeRange?.startVariable
            ) || this.resolveTimeValue(
              t?.phenomenonTime?.start,
              t?.phenomenonTime?.startVariable
            ), a = this.resolveTimeValue(
              t?.timeRange?.end,
              t?.timeRange?.endVariable
            ) || this.resolveTimeValue(
              t?.phenomenonTime?.end,
              t?.phenomenonTime?.endVariable
            );
            if (!a || !s)
              return {};
            try {
              const r = this.connectionRepository.getConnection(
                this.connection
              );
              let c = `time le ${a}`;
              o && (c = `time ge ${o} and ${c}`);
              const h = `/v1.1/Things(${s})/HistoricalLocations?$filter=${c}&$orderby=time desc&$top=1&$expand=Locations`, y = (await (await r.fetch({ url: h }, {
                method: "GET"
              })).json()).value;
              if (y && y.length > 0) {
                const f = y[0].Locations;
                if (f && f.length > 0) {
                  const u = f[0];
                  this.logHistory(`📍 Found historical location for thing ${s}:`, u);
                  const m = this.resultMap.things?.find((O) => O.iotId === s);
                  m && (m.locations = [u]);
                  for (const O of this.resultMap.datastreams || [])
                    O.thing?.iotId === s && O.thing && (O.thing.locations = [u]);
                  const $ = this.resultMap.locations?.find(
                    (O) => O.things?.some((tt) => tt.iotId === s)
                  );
                  $ && ($.location = u.location, $.encodingType = u.encodingType, u.name && ($.name = u.name), u.description && ($.description = u.description));
                }
              } else
                this.logHistory(`📍 No historical location found for thing ${s} at time ${a}`);
            } catch (r) {
              this.logHistory(`❌ Error fetching historical location for thing ${s}:`, r);
            }
            return {};
          })()
        );
    }
  }
  onVariableChanged() {
    this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(async () => {
      try {
        this.lastObservationsParams && (this.requestFlag = { key: w, params: { observations: this.lastObservationsParams } }, await this.getData("OGCSTAData"), await this.fetchHistoricalLocations(), this.requestFlag = { key: Zt, params: void 0 }), this.notify();
      } catch (e) {
        this.logCore("Error refetching observations after variable change:", e);
      }
    }, 100);
  }
  // ==================== MQTT Methods ====================
  setupMQTTMessageHandler() {
    this.mqttConnection && (typeof this.mqttConnection.subscribe == "function" ? (this.logMqtt("Setting up message handler"), this.mqttConnection.subscribe((e, t, n) => {
      e === "message" && n && (this.logMqtt("Raw message received - topic:", n, "data:", t), this.onMQTTMessage(t, n));
    })) : this.logMqtt(" Connection does not have subscribe method"));
  }
  onMQTTMessage(e, t) {
    try {
      if (typeof e == "string" && !e.startsWith("{"))
        return;
      const n = typeof e == "string" ? JSON.parse(e) : e;
      if (!n || typeof n != "object")
        return;
      if (!n["@iot.id"]) {
        this.logMqtt(" Invalid message (missing @iot.id)", e);
        return;
      }
      const i = t.match(/Observations\(([^)]+)\)/);
      if (i) {
        this.handleObservationUpdate(i[1], n);
        return;
      }
      const s = t.match(/Locations\(([^)]+)\)/);
      if (s) {
        this.handleLocationUpdate(s[1], n);
        return;
      }
      this.logMqtt(" Unknown topic format:", t);
    } catch (n) {
      this.logMqtt(" Error parsing message:", n, e);
    }
  }
  handleObservationUpdate(e, t) {
    this.logMqtt(`Received observation for datastream ${e}:`, t);
    const n = this.resultMap.datastreams?.find((i) => i.iotId === e);
    n ? (n.observations = [t], this.logMqtt(`Updated datastream ${e} observations`), this.triggerDebouncedUpdate()) : this.logMqtt(
      `Datastream ${e} not found in resultMap. Available datastreams:`,
      this.resultMap.datastreams?.map((i) => i.iotId).slice(0, 10)
    );
  }
  handleLocationUpdate(e, t) {
    this.logMqtt(`Received location update for ${e}:`, t);
    const n = this.resultMap.locations?.find((i) => i.iotId === e);
    if (n) {
      n.location = t.location, n.encodingType = t.encodingType, t.name && (n.name = t.name), t.description && (n.description = t.description), this.logMqtt(`Updated location ${e}`);
      for (const i of this.resultMap.things || []) {
        const s = i.locations?.find((o) => o.iotId === e);
        s && (s.location = t.location, s.encodingType = t.encodingType, t.name && (s.name = t.name), t.description && (s.description = t.description));
      }
      for (const i of this.resultMap.datastreams || []) {
        const s = i.thing?.locations?.find((o) => o.iotId === e);
        s && (s.location = t.location, s.encodingType = t.encodingType, t.name && (s.name = t.name), t.description && (s.description = t.description));
      }
      this.triggerDebouncedUpdate();
    } else
      console.warn(`OGCSTA MQTT: Location ${e} not found in resultMap`);
  }
  triggerDebouncedUpdate() {
    this.hasPendingMqttUpdates = !0, this.mqttUpdateTimer && clearTimeout(this.mqttUpdateTimer), this.mqttUpdateTimer = setTimeout(() => {
      this.hasPendingMqttUpdates && (this.notify(), this.hasPendingMqttUpdates = !1), this.mqttUpdateTimer = null;
    }, 100);
  }
  subscribeToDatastreams(e) {
    if (!this.mqttConnection) return;
    const t = this.mqttConnection.client;
    if (!t || !t.connected) {
      this.logMqtt("Client not connected, skipping subscription update");
      return;
    }
    const n = /* @__PURE__ */ new Set();
    if (e && e.length > 0)
      for (const r of e) {
        const c = r.iotId || r["@iot.id"];
        c && n.add(c);
      }
    const i = new Set(this.subscribedDatastreams.keys());
    if (!(n.size !== i.size || Array.from(n).some((r) => !i.has(r))))
      return;
    this.logMqtt(`Updating subscriptions - current: ${i.size}, requested: ${n.size}`);
    const o = Array.from(i).filter((r) => !n.has(r)), a = Array.from(n).filter((r) => !i.has(r));
    if (o.length > 0) {
      this.logMqtt(`Unsubscribing from ${o.length} topics:`, o.slice(0, 5));
      for (const r of o) {
        const c = `${this.connection}_${r}`;
        typeof this.mqttConnection.disconnectStore == "function" && this.mqttConnection.disconnectStore(c), this.subscribedDatastreams.delete(r);
      }
    }
    if (a.length > 0) {
      this.logMqtt(`Subscribing to ${a.length} new topics`);
      for (const r of e) {
        const c = r.iotId || r["@iot.id"];
        if (!c || !a.includes(c)) continue;
        const h = `v1.1/Observations(${c})`, l = `${this.connection}_${c}`;
        typeof this.mqttConnection.connectStore == "function" && (this.mqttConnection.connectStore(l, h), this.subscribedDatastreams.set(c, h), this.logMqtt(`Subscribed to ${h}`));
      }
    }
  }
  subscribeToLocations() {
    if (!this.mqttConnection) return;
    const e = this.mqttConnection.client;
    if (!e || !e.connected) {
      this.logMqtt("Client not connected, skipping location subscription update");
      return;
    }
    const t = /* @__PURE__ */ new Set();
    for (const s of this.resultMap.locations || [])
      s.iotId && t.add(s.iotId);
    const n = new Set(this.subscribedLocations.keys());
    if (t.size !== n.size || Array.from(t).some((s) => !n.has(s))) {
      this.logMqtt(`Updating location subscriptions - current: ${n.size}, requested: ${t.size}`);
      for (const s of n)
        if (!t.has(s)) {
          const o = `${this.connection}_loc_${s}`;
          typeof this.mqttConnection.disconnectStore == "function" && (this.mqttConnection.disconnectStore(o), this.logMqtt(`Unsubscribed from v1.1/Locations(${s})`));
        }
      if (this.subscribedLocations.clear(), t.size > 0) {
        this.logMqtt(`Subscribing to ${t.size} location topics`);
        for (const s of t) {
          const o = `v1.1/Locations(${s})`, a = `${this.connection}_loc_${s}`;
          typeof this.mqttConnection.connectStore == "function" && (this.mqttConnection.connectStore(a, o), this.subscribedLocations.set(s, o), this.logMqtt(`Subscribed to ${o}`));
        }
      }
    }
  }
  unsubscribeAll() {
    if (this.mqttConnection) {
      if (this.logMqtt(`Unsubscribing from ${this.subscribedDatastreams.size} datastreams and ${this.subscribedLocations.size} locations`), typeof this.mqttConnection.disconnectStore == "function") {
        for (const e of this.subscribedDatastreams.keys()) {
          const t = `${this.connection}_${e}`;
          this.mqttConnection.disconnectStore(t);
        }
        for (const e of this.subscribedLocations.keys()) {
          const t = `${this.connection}_loc_${e}`;
          this.mqttConnection.disconnectStore(t);
        }
      }
      this.subscribedDatastreams.clear(), this.subscribedLocations.clear();
    }
  }
};
N([
  q(it)
], E.prototype, "connectionRepository", 2);
N([
  q(nt)
], E.prototype, "variableRepository", 2);
N([
  q(at)
], E.prototype, "loggerFactory", 2);
E = N([
  et()
], E);
class I extends ot {
  // Feature ID Constants (eLiterals)
  static CONNECTION = 3;
  // Private fields
  _connection;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return b.Literals.I_O_G_C_S_T_A_CONFIGURATION;
  }
  // Getters and Setters
  get connection() {
    return this._connection;
  }
  set connection(t) {
    const n = this._connection;
    this._connection = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(I.CONNECTION),
      getOldValue: () => n,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.CONNECTION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case I.CONNECTION:
        return this.connection;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(t, n) {
    switch (this.eClass().getFeatureID(t)) {
      case I.CONNECTION:
        this.connection = n, super.eSet(t, n);
        break;
      default:
        super.eSet(t, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case I.CONNECTION:
        return this._connection !== void 0;
      default:
        return super.eIsSet(t);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    switch (this.eClass().getFeatureID(t)) {
      case I.CONNECTION:
        this._connection = void 0;
        return;
      default:
        super.eUnset(t);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      connection: this.connection
    };
  }
}
class x extends lt {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new x()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(b.eINSTANCE);
  }
  /**
   * Create a new IOGCSTAConfiguration instance
   */
  createIOGCSTAConfiguration() {
    return new I();
  }
  /**
   * Create an instance of the given class
   */
  create(t) {
    switch (t.getName()) {
      case "IOGCSTAConfiguration":
        return this.createIOGCSTAConfiguration();
      default:
        throw new Error(`Unknown class: ${t.getName()}`);
    }
  }
}
function ie(e) {
  const t = B.INSTANCE.getEPackage(e);
  if (!t)
    throw new Error(`EPackage '${e}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing OgcstaPackage.`);
  return t;
}
class b extends ct {
  static eNAME = "ogcsta";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.datasource.ogcsta";
  static eNS_PREFIX = "ogcsta";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new b(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    I_O_G_C_S_T_A_CONFIGURATION: null,
    I_O_G_C_S_T_A_CONFIGURATION__CONNECTION: null
  };
  constructor() {
    super(), this.setName(b.eNAME), this.setNsURI(b.eNS_URI), this.setNsPrefix(b.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    B.INSTANCE.set(b.eNS_URI, this), this.setEFactoryInstance(x.eINSTANCE);
    const t = new dt();
    t.setName("IOGCSTAConfiguration"), t.setAbstract(!1), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), b.Literals.I_O_G_C_S_T_A_CONFIGURATION = t;
    const n = new ut();
    n.setName("connection"), n.setLowerBound(0), n.setUpperBound(1), t.getEStructuralFeatures().push(n), b.Literals.I_O_G_C_S_T_A_CONFIGURATION__CONNECTION = n, b.Literals.I_O_G_C_S_T_A_CONFIGURATION.getESuperTypes().push(ie("http://org.eclipse.daanse.board.app.lib.datasource.base").getEClassifier("IBaseConnectionConfiguration")), b.Literals.I_O_G_C_S_T_A_CONFIGURATION__CONNECTION.setEType(ht().getEClassifier("EString"));
  }
}
b.eINSTANCE;
const M = rt("OgcStaStoreFactory"), ne = Symbol.for(M);
function P({ services: e }) {
  e.register(M, (t) => {
    if (!E.validateConfiguration(t))
      throw new Error(
        "Invalid OgcStaStore configuration. Please provide a valid configuration."
      );
    const n = e.construct(E);
    return n.init(t), n;
  });
}
function j({ services: e }) {
  e.unregister(M);
}
const se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILTER: w,
  FILTERRESET: C,
  IOGCSTAConfigurationImpl: I,
  MQTT_UNSUBSCRIBE_ALL: X,
  OGC_STA_STORE_FACTORY: M,
  OgcstaFactory: x,
  OgcstaPackage: b,
  UPDATE_MQTT_SUBSCRIPTIONS: Z,
  activate: P,
  deactivate: j,
  factorySymbol: ne
}, Symbol.toStringTag, { value: "Module" })), z = "org.eclipse.daanse.board.app.lib.datasource.ogcsta", oe = "0.0.1-next.1";
async function he(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${z}: tsm runtime is not initialized`);
  t.register(z, se, oe, "lib.datasource.ogcsta"), await P?.(e);
}
async function pe(e) {
  await j?.(e);
}
export {
  w as FILTER,
  C as FILTERRESET,
  I as IOGCSTAConfigurationImpl,
  X as MQTT_UNSUBSCRIBE_ALL,
  M as OGC_STA_STORE_FACTORY,
  x as OgcstaFactory,
  b as OgcstaPackage,
  Z as UPDATE_MQTT_SUBSCRIPTIONS,
  he as activate,
  pe as deactivate,
  ne as factorySymbol
};
