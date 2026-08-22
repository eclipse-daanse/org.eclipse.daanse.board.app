const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { BaseConnection } = __tsm__.require("org.eclipse.daanse.board.app.lib.connection.base");
var __defProp = Object.defineProperty, __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __await = function(promise, isYieldStar) {
  this[0] = promise, this[1] = isYieldStar;
}, __asyncGenerator = (__this, __arguments, generator) => {
  var resume = (k, v, yes, no) => {
    try {
      var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
      Promise.resolve(isAwait ? v[0] : v).then((y) => isAwait ? resume(k === "return" ? k : "next", v[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e2) => resume("throw", e2, yes, no));
    } catch (e2) {
      no(e2);
    }
  }, method = (k) => it[k] = (x) => new Promise((yes, no) => resume(k, x, yes, no)), it = {};
  return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
};
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}
const QueryDocumentKeys = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "description",
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: [
    "description",
    "variable",
    "type",
    "defaultValue",
    "directives"
  ],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "description",
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"],
  TypeCoordinate: ["name"],
  MemberCoordinate: ["name", "memberName"],
  ArgumentCoordinate: ["name", "fieldName", "argumentName"],
  DirectiveCoordinate: ["name"],
  DirectiveArgumentCoordinate: ["name", "argumentName"]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
  const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
var OperationTypeNode;
(function(OperationTypeNode2) {
  OperationTypeNode2["QUERY"] = "query";
  OperationTypeNode2["MUTATION"] = "mutation";
  OperationTypeNode2["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (OperationTypeNode = {}));
var Kind;
(function(Kind2) {
  Kind2["NAME"] = "Name";
  Kind2["DOCUMENT"] = "Document";
  Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
  Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
  Kind2["SELECTION_SET"] = "SelectionSet";
  Kind2["FIELD"] = "Field";
  Kind2["ARGUMENT"] = "Argument";
  Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
  Kind2["INLINE_FRAGMENT"] = "InlineFragment";
  Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
  Kind2["VARIABLE"] = "Variable";
  Kind2["INT"] = "IntValue";
  Kind2["FLOAT"] = "FloatValue";
  Kind2["STRING"] = "StringValue";
  Kind2["BOOLEAN"] = "BooleanValue";
  Kind2["NULL"] = "NullValue";
  Kind2["ENUM"] = "EnumValue";
  Kind2["LIST"] = "ListValue";
  Kind2["OBJECT"] = "ObjectValue";
  Kind2["OBJECT_FIELD"] = "ObjectField";
  Kind2["DIRECTIVE"] = "Directive";
  Kind2["NAMED_TYPE"] = "NamedType";
  Kind2["LIST_TYPE"] = "ListType";
  Kind2["NON_NULL_TYPE"] = "NonNullType";
  Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
  Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
  Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
  Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
  Kind2["FIELD_DEFINITION"] = "FieldDefinition";
  Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
  Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
  Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
  Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
  Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
  Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
  Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
  Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
  Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
  Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
  Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
  Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
  Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
  Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
  Kind2["TYPE_COORDINATE"] = "TypeCoordinate";
  Kind2["MEMBER_COORDINATE"] = "MemberCoordinate";
  Kind2["ARGUMENT_COORDINATE"] = "ArgumentCoordinate";
  Kind2["DIRECTIVE_COORDINATE"] = "DirectiveCoordinate";
  Kind2["DIRECTIVE_ARGUMENT_COORDINATE"] = "DirectiveArgumentCoordinate";
})(Kind || (Kind = {}));
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  const properties = entries.map(
    ([key, value]) => key + ": " + formatValue(value, seenValues)
  );
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];
  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
  const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    const name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
const BREAK = Object.freeze({});
function visit(root, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = /* @__PURE__ */ new Map();
  for (const kind of Object.values(Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  let stack = void 0;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let edits = [];
  let node = root;
  let key = void 0;
  let parent = void 0;
  const path = [];
  const ancestors = [];
  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = { ...node };
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === null || node === void 0) {
        continue;
      }
      path.push(key);
    }
    let result;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
      const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
      if (result === BREAK) {
        break;
      }
      if (result === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result !== void 0) {
        edits.push([key, result]);
        if (!isLeaving) {
          if (isNode(result)) {
            node = result;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }
    if (result === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1];
  }
  return root;
}
function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];
  if (typeof kindVisitor === "object") {
    return kindVisitor;
  } else if (typeof kindVisitor === "function") {
    return {
      enter: kindVisitor,
      leave: void 0
    };
  }
  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}
async function e(e2, t) {
  if (!e2.ok || !e2.body || e2.bodyUsed) return e2;
  let n = e2.headers.get("content-type");
  if (!n || !~n.indexOf("multipart/")) return e2;
  let i = n.indexOf("boundary="), l = "-";
  if (~i) {
    let e3 = i + 9, t2 = n.indexOf(";", e3);
    l = n.slice(e3, t2 > -1 ? t2 : void 0).trim().replace(/"/g, "");
  }
  return (async function* (e3, t2, n2) {
    let i2, l2, r, d = new TextDecoder("utf8"), o = e3.getReader(), a = !n2 || false, f = t2.length, s = "", c = [];
    try {
      let e4;
      e: for (; !(e4 = await o.read()).done; ) {
        let n3 = d.decode(e4.value, { stream: true });
        i2 = s.length, s += n3;
        let o2 = n3.indexOf(t2);
        for (~o2 ? i2 += o2 : i2 = s.indexOf(t2), c = []; ~i2; ) {
          let e5 = s.slice(0, i2), n4 = s.slice(i2 + f);
          if (l2) {
            let t3 = e5.indexOf("\r\n\r\n") + 4, i3 = e5.lastIndexOf("\r\n", t3), l3 = false, d2 = e5.slice(t3, i3 > -1 ? void 0 : i3), o3 = String(e5.slice(0, t3)).trim().split("\r\n"), f2 = {}, s2 = o3.length;
            for (; r = o3[--s2]; r = r.split(": "), f2[r.shift().toLowerCase()] = r.join(": ")) ;
            if (r = f2["content-type"], r && ~r.indexOf("application/json")) try {
              d2 = JSON.parse(d2), l3 = true;
            } catch (e6) {
            }
            if (r = { headers: f2, body: d2, json: l3 }, a ? yield r : c.push(r), "--" === n4.slice(0, 2)) break e;
          } else t2 = "\r\n" + t2, l2 = f += 2;
          s = n4, i2 = s.indexOf(t2);
        }
        c.length && (yield c);
      }
    } finally {
      c.length && (yield c), await o.cancel();
    }
  })(e2.body, `--${l}`, t);
}
function withHandlers(source, onReturn, onThrow) {
  const stream = (async function* withReturnSource() {
    yield* source;
  })();
  const originalReturn = stream.return.bind(stream);
  if (onReturn) {
    stream.return = (...args) => {
      onReturn();
      return originalReturn(...args);
    };
  }
  if (onThrow) {
    const originalThrow = stream.throw.bind(stream);
    stream.throw = (err) => {
      onThrow(err);
      return originalThrow(err);
    };
  }
  return stream;
}
function createDeferred() {
  const d = {};
  d.promise = new Promise((resolve, reject) => {
    d.resolve = resolve;
    d.reject = reject;
  });
  return d;
}
function makePushPullAsyncIterableIterator() {
  let state = {
    type: "running"
    /* running */
  };
  let next = createDeferred();
  const values = [];
  function pushValue(value) {
    if (state.type !== "running") {
      return;
    }
    values.push(value);
    next.resolve();
    next = createDeferred();
  }
  const source = (async function* PushPullAsyncIterableIterator() {
    while (true) {
      if (values.length > 0) {
        yield values.shift();
      } else {
        if (state.type === "error") {
          throw state.error;
        }
        if (state.type === "finished") {
          return;
        }
        await next.promise;
      }
    }
  })();
  const stream = withHandlers(source, () => {
    if (state.type !== "running") {
      return;
    }
    state = {
      type: "finished"
      /* finished */
    };
    next.resolve();
  }, (error) => {
    if (state.type !== "running") {
      return;
    }
    state = {
      type: "error",
      error
    };
    next.resolve();
  });
  return {
    pushValue,
    asyncIterableIterator: stream
  };
}
const makeAsyncIterableIteratorFromSink = (make) => {
  const { pushValue, asyncIterableIterator } = makePushPullAsyncIterableIterator();
  const dispose = make({
    next: (value) => {
      pushValue(value);
    },
    complete: () => {
      asyncIterableIterator.return();
    },
    error: (err) => {
      asyncIterableIterator.throw(err);
    }
  });
  const originalReturn = asyncIterableIterator.return;
  let returnValue = void 0;
  asyncIterableIterator.return = () => {
    if (returnValue === void 0) {
      dispose();
      returnValue = originalReturn();
    }
    return returnValue;
  };
  return asyncIterableIterator;
};
function isAsyncIterable(input) {
  return typeof input === "object" && input !== null && // The AsyncGenerator check is for Safari on iOS which currently does not have
  // Symbol.asyncIterator implemented
  // That means every custom AsyncIterable must be built using a AsyncGeneratorFunction (async function * () {})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (input[Symbol.toStringTag] === "AsyncGenerator" || Symbol.asyncIterator && Symbol.asyncIterator in input);
}
const errorHasCode = (err) => typeof err == "object" && err !== null && "code" in err, isSubscriptionWithName = (document, name) => {
  let isSubscription = false;
  return visit(document, {
    OperationDefinition(node) {
      var _a;
      name === ((_a = node.name) == null ? void 0 : _a.value) && node.operation === "subscription" && (isSubscription = true);
    }
  }), isSubscription;
}, createSimpleFetcher = (options, httpFetch) => async (graphQLParams, fetcherOpts) => (await httpFetch(options.url, {
  method: "POST",
  body: JSON.stringify(graphQLParams),
  headers: __spreadValues(__spreadValues({
    "content-type": "application/json"
  }, options.headers), fetcherOpts == null ? void 0 : fetcherOpts.headers)
})).json();
async function createWebsocketsFetcherFromUrl(url, connectionParams) {
  let wsClient;
  try {
    const { createClient } = await import("./toolkit-l0sNRNKZ.js");
    return wsClient = createClient({ url, connectionParams }), createWebsocketsFetcherFromClient(wsClient);
  } catch (err) {
    if (errorHasCode(err) && err.code === "MODULE_NOT_FOUND")
      throw new Error(
        "You need to install the 'graphql-ws' package to use websockets when passing a 'subscriptionUrl'"
      );
    console.error(`Error creating websocket client for ${url}`, err);
  }
}
const createWebsocketsFetcherFromClient = (wsClient) => (graphQLParams) => makeAsyncIterableIteratorFromSink(
  (sink) => wsClient.subscribe(graphQLParams, __spreadProps(__spreadValues({}, sink), {
    error(err) {
      err instanceof CloseEvent ? sink.error(
        new Error(
          `Socket closed with event ${err.code} ${err.reason || ""}`.trim()
        )
      ) : sink.error(err);
    }
  }))
), createLegacyWebsocketsFetcher = (legacyWsClient) => (graphQLParams) => {
  const observable = legacyWsClient.request(graphQLParams);
  return makeAsyncIterableIteratorFromSink(
    // @ts-ignore
    (sink) => observable.subscribe(sink).unsubscribe
  );
}, createMultipartFetcher = (options, httpFetch) => function(graphQLParams, fetcherOpts) {
  return __asyncGenerator(this, null, function* () {
    const response = yield new __await(httpFetch(options.url, {
      method: "POST",
      body: JSON.stringify(graphQLParams),
      headers: __spreadValues(__spreadValues({
        "content-type": "application/json",
        accept: "application/json, multipart/mixed"
      }, options.headers), fetcherOpts == null ? void 0 : fetcherOpts.headers)
    }).then(
      (r) => e(r, {})
    ));
    if (!isAsyncIterable(response))
      return yield response.json();
    try {
      for (var iter = __forAwait(response), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
        const chunk = temp.value;
        if (chunk.some((part) => !part.json)) {
          const message = chunk.map(
            (part) => `Headers::
${part.headers}

Body::
${part.body}`
          );
          throw new Error(
            `Expected multipart chunks to be of json type. got:
${message}`
          );
        }
        yield chunk.map((part) => part.body);
      }
    } catch (temp2) {
      error = [temp2];
    } finally {
      try {
        more && (temp = iter.return) && (yield new __await(temp.call(iter)));
      } finally {
        if (error)
          throw error[0];
      }
    }
  });
};
async function getWsFetcher(options, fetcherOpts) {
  if (options.wsClient)
    return createWebsocketsFetcherFromClient(options.wsClient);
  if (options.subscriptionUrl)
    return createWebsocketsFetcherFromUrl(options.subscriptionUrl, __spreadValues(__spreadValues({}, options.wsConnectionParams), fetcherOpts == null ? void 0 : fetcherOpts.headers));
  const legacyWebsocketsClient = options.legacyClient || options.legacyWsClient;
  if (legacyWebsocketsClient)
    return createLegacyWebsocketsFetcher(legacyWebsocketsClient);
}
function createGraphiQLFetcher(options) {
  const httpFetch = options.fetch || typeof window != "undefined" && window.fetch;
  if (!httpFetch)
    throw new Error("No valid fetcher implementation available");
  options.enableIncrementalDelivery = options.enableIncrementalDelivery !== false;
  const simpleFetcher = createSimpleFetcher(options, httpFetch), httpFetcher = options.enableIncrementalDelivery ? createMultipartFetcher(options, httpFetch) : simpleFetcher;
  return async (graphQLParams, fetcherOpts) => {
    if (graphQLParams.operationName === "IntrospectionQuery")
      return (options.schemaFetcher || simpleFetcher)(
        graphQLParams,
        fetcherOpts
      );
    if (fetcherOpts != null && fetcherOpts.documentAST ? isSubscriptionWithName(
      fetcherOpts.documentAST,
      graphQLParams.operationName || void 0
    ) : false) {
      const wsFetcher = await getWsFetcher(options, fetcherOpts);
      if (!wsFetcher)
        throw new Error(
          `Your GraphiQL createFetcher is not properly configured for websocket subscriptions yet. ${options.subscriptionUrl ? `Provided URL ${options.subscriptionUrl} failed` : "Please provide subscriptionUrl, wsClient or legacyClient option first."}`
        );
      return wsFetcher(graphQLParams);
    }
    return httpFetcher(graphQLParams, fetcherOpts);
  };
}
class GraphQLConnection extends BaseConnection {
  url;
  fetcher = null;
  constructor() {
    super();
  }
  init(configuration) {
    super.init(configuration);
    this.url = configuration.url;
    if (typeof window === "undefined") {
      this.fetcher = null;
    } else {
      this.fetcher = createGraphiQLFetcher({
        // url: this.url.value
        url: this.url
      });
    }
  }
  fetch(config) {
    throw new Error("Method not implemented.");
  }
  setConfig() {
    throw new Error("Method not implemented.");
  }
  static validateConfiguration(configuration) {
    if (!configuration.url) {
      return false;
    }
    return true;
  }
}
const GRAPHQL_CONNECTION_FACTORY = serviceId("GraphQLConnectionFactory");
const factorySymbol = Symbol.for(GRAPHQL_CONNECTION_FACTORY);
function activate$1({ services }) {
  services.register(GRAPHQL_CONNECTION_FACTORY, (config) => {
    if (!GraphQLConnection.validateConfiguration(config)) {
      throw new Error(
        "Invalid GraphQLConnection configuration. Please provide a valid configuration."
      );
    }
    const connection = new GraphQLConnection();
    connection.init(config);
    return connection;
  });
}
function deactivate$1({ services }) {
  services.unregister(GRAPHQL_CONNECTION_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.connection.graphql";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.connection.graphql");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  activate,
  deactivate,
  factorySymbol
};
