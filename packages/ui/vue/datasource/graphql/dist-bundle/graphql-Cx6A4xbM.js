var pt = Object.defineProperty;
var de = (e2, t) => {
  for (var n in t) pt(e2, n, { get: t[n], enumerable: true });
};
var ut = {};
de(ut, { languages: () => Ye, options: () => $e, parsers: () => he, printers: () => nn });
var me = (e2, t) => (n, i, ...r) => n | 1 && i == null ? void 0 : (t.call(i) ?? i[e2]).apply(i, r);
var lt = String.prototype.replaceAll ?? function(e2, t) {
  return e2.global ? this.replace(e2, t) : this.split(e2).join(t);
}, ft = me("replaceAll", function() {
  if (typeof this == "string") return lt;
}), U = ft;
var ht = () => {
}, ie = ht;
var Ee = "indent";
var Te = "group";
var Ne = "if-break";
var G = "line";
var xe = "break-parent";
var Y = ie;
function x(e2) {
  return { type: Ee, contents: e2 };
}
var _e = { type: xe };
function y(e2, t = {}) {
  return Y(t.expandedStates), { type: Te, id: t.id, contents: e2, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function I(e2, t = "", n = {}) {
  return { type: Ne, breakContents: e2, flatContents: t, groupId: n.groupId };
}
function E(e2, t) {
  let n = [];
  for (let i = 0; i < t.length; i++) i !== 0 && n.push(e2), n.push(t[i]);
  return n;
}
var k = { type: G }, l = { type: G, soft: true }, dt = { type: G, hard: true }, f = [dt, _e];
function j(e2) {
  return (t, n, i) => {
    let r = !!i?.backwards;
    if (n === false) return false;
    let { length: s } = t, a = n;
    for (; a >= 0 && a < s; ) {
      let u = t.charAt(a);
      if (e2 instanceof RegExp) {
        if (!e2.test(u)) return a;
      } else if (!e2.includes(u)) return a;
      r ? a-- : a++;
    }
    return a === -1 || a === s ? a : false;
  };
}
var $ = j(" 	"), ye = j(",; 	"), Ae = j(/[^\n\r]/u);
var Oe = (e2) => e2 === `
` || e2 === "\r" || e2 === "\u2028" || e2 === "\u2029";
function mt(e2, t, n) {
  let i = !!n?.backwards;
  if (t === false) return false;
  let r = e2.charAt(t);
  if (i) {
    if (e2.charAt(t - 1) === "\r" && r === `
`) return t - 2;
    if (Oe(r)) return t - 1;
  } else {
    if (r === "\r" && e2.charAt(t + 1) === `
`) return t + 2;
    if (Oe(r)) return t + 1;
  }
  return t;
}
var X = mt;
function Et(e2, t, n = {}) {
  let i = $(e2, n.backwards ? t - 1 : t, n), r = X(e2, i, n);
  return i !== r;
}
var Ie = Et;
function Tt(e2, t) {
  if (t === false) return false;
  if (e2.charAt(t) === "/" && e2.charAt(t + 1) === "*") {
    for (let n = t + 2; n < e2.length; ++n) if (e2.charAt(n) === "*" && e2.charAt(n + 1) === "/") return n + 2;
  }
  return t;
}
var De = Tt;
function Nt(e2, t) {
  return t === false ? false : e2.charAt(t) === "/" && e2.charAt(t + 1) === "/" ? Ae(e2, t) : t;
}
var ge = Nt;
function xt(e2, t) {
  let n = null, i = t;
  for (; i !== n; ) n = i, i = ye(e2, i), i = De(e2, i), i = $(e2, i);
  return i = ge(e2, i), i = X(e2, i), i !== false && Ie(e2, i);
}
var Se = xt;
function _t(e2) {
  return Array.isArray(e2) && e2.length > 0;
}
var se = _t;
var oe = class extends Error {
  name = "UnexpectedNodeError";
  constructor(t, n, i = "type") {
    super(`Unexpected ${n} node ${i}: ${JSON.stringify(t[i])}.`), this.node = t;
  }
}, ke = oe;
var P = null;
function w(e2) {
  if (P !== null && typeof P.property) {
    let t = P;
    return P = w.prototype = null, t;
  }
  return P = w.prototype = e2 ?? /* @__PURE__ */ Object.create(null), new w();
}
var yt = 10;
for (let e2 = 0; e2 <= yt; e2++) w();
function ae(e2) {
  return w(e2);
}
function At(e2, t = "type") {
  ae(e2);
  function n(i) {
    let r = i[t], s = e2[r];
    if (!Array.isArray(s)) throw Object.assign(new Error(`Missing visitor keys for '${r}'.`), { node: i });
    return s;
  }
  return n;
}
var Ce = At;
var H = class {
  constructor(t, n, i) {
    this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = i;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return { start: this.start, end: this.end };
  }
}, F = class {
  constructor(t, n, i, r, s, a) {
    this.kind = t, this.start = n, this.end = i, this.line = r, this.column = s, this.value = a, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return { kind: this.kind, value: this.value, line: this.line, column: this.column };
  }
}, ce = { Name: [], Document: ["definitions"], OperationDefinition: ["description", "name", "variableDefinitions", "directives", "selectionSet"], VariableDefinition: ["description", "variable", "type", "defaultValue", "directives"], Variable: ["name"], SelectionSet: ["selections"], Field: ["alias", "name", "arguments", "directives", "selectionSet"], Argument: ["name", "value"], FragmentSpread: ["name", "directives"], InlineFragment: ["typeCondition", "directives", "selectionSet"], FragmentDefinition: ["description", "name", "variableDefinitions", "typeCondition", "directives", "selectionSet"], IntValue: [], FloatValue: [], StringValue: [], BooleanValue: [], NullValue: [], EnumValue: [], ListValue: ["values"], ObjectValue: ["fields"], ObjectField: ["name", "value"], Directive: ["name", "arguments"], NamedType: ["name"], ListType: ["type"], NonNullType: ["type"], SchemaDefinition: ["description", "directives", "operationTypes"], OperationTypeDefinition: ["type"], ScalarTypeDefinition: ["description", "name", "directives"], ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], FieldDefinition: ["description", "name", "arguments", "type", "directives"], InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"], InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], UnionTypeDefinition: ["description", "name", "directives", "types"], EnumTypeDefinition: ["description", "name", "directives", "values"], EnumValueDefinition: ["description", "name", "directives"], InputObjectTypeDefinition: ["description", "name", "directives", "fields"], DirectiveDefinition: ["description", "name", "arguments", "locations"], SchemaExtension: ["directives", "operationTypes"], ScalarTypeExtension: ["name", "directives"], ObjectTypeExtension: ["name", "interfaces", "directives", "fields"], InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"], UnionTypeExtension: ["name", "directives", "types"], EnumTypeExtension: ["name", "directives", "values"], InputObjectTypeExtension: ["name", "directives", "fields"], TypeCoordinate: ["name"], MemberCoordinate: ["name", "memberName"], ArgumentCoordinate: ["name", "fieldName", "argumentName"], DirectiveCoordinate: ["name"], DirectiveArgumentCoordinate: ["name", "argumentName"] };
new Set(Object.keys(ce));
var C;
(function(e2) {
  e2.QUERY = "query", e2.MUTATION = "mutation", e2.SUBSCRIPTION = "subscription";
})(C || (C = {}));
var Re = { ...ce };
for (let e2 of ["ArgumentCoordinate", "DirectiveArgumentCoordinate", "DirectiveCoordinate", "MemberCoordinate", "TypeCoordinate"]) delete Re[e2];
var ve = Re;
var Ot = Ce(ve, "kind"), be = Ot;
var J = (e2) => e2.loc.start, q = (e2) => e2.loc.end;
var Le = "format", Pe = /^\s*#[^\S\n]*@(?:noformat|noprettier)\s*(?:\n|$)/u, we = /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/u;
var Fe = (e2) => we.test(e2), Me = (e2) => Pe.test(e2), Ve = (e2) => `# @${Le}

${e2}`;
function It(e2, t, n) {
  let { node: i } = e2;
  if (!i.description) return "";
  let r = [n("description")];
  return i.kind === "InputValueDefinition" && !i.description.block ? r.push(k) : r.push(f), r;
}
var A = It;
function Dt(e2, t, n) {
  let { node: i } = e2;
  switch (i.kind) {
    case "Document":
      return [...E(f, g(e2, t, n, "definitions")), f];
    case "OperationDefinition": {
      let r = t.originalText[J(i)] !== "{", s = !!i.name;
      return [A(e2, t, n), r ? i.operation : "", r && s ? [" ", n("name")] : "", r && !s && se(i.variableDefinitions) ? " " : "", Be(e2, n), _(e2, n, i), !r && !s ? "" : " ", n("selectionSet")];
    }
    case "FragmentDefinition":
      return [A(e2, t, n), "fragment ", n("name"), Be(e2, n), " on ", n("typeCondition"), _(e2, n, i), " ", n("selectionSet")];
    case "SelectionSet":
      return ["{", x([f, E(f, g(e2, t, n, "selections"))]), f, "}"];
    case "Field":
      return y([i.alias ? [n("alias"), ": "] : "", n("name"), i.arguments.length > 0 ? y(["(", x([l, E([I("", ", "), l], g(e2, t, n, "arguments"))]), l, ")"]) : "", _(e2, n, i), i.selectionSet ? " " : "", n("selectionSet")]);
    case "Name":
      return i.value;
    case "StringValue":
      if (i.block) {
        let r = U(0, i.value, '"""', '\\"""').split(`
`);
        return r.length === 1 && (r[0] = r[0].trim()), r.every((s) => s === "") && (r.length = 0), E(f, ['"""', ...r, '"""']);
      }
      return ['"', U(0, U(0, i.value, /["\\]/gu, "\\$&"), `
`, "\\n"), '"'];
    case "IntValue":
    case "FloatValue":
    case "EnumValue":
      return i.value;
    case "BooleanValue":
      return i.value ? "true" : "false";
    case "NullValue":
      return "null";
    case "Variable":
      return ["$", n("name")];
    case "ListValue":
      return y(["[", x([l, E([I("", ", "), l], e2.map(n, "values"))]), l, "]"]);
    case "ObjectValue": {
      let r = t.bracketSpacing && i.fields.length > 0 ? " " : "";
      return y(["{", r, x([l, E([I("", ", "), l], e2.map(n, "fields"))]), l, I("", r), "}"]);
    }
    case "ObjectField":
    case "Argument":
      return [n("name"), ": ", n("value")];
    case "Directive":
      return ["@", n("name"), i.arguments.length > 0 ? y(["(", x([l, E([I("", ", "), l], g(e2, t, n, "arguments"))]), l, ")"]) : ""];
    case "NamedType":
      return n("name");
    case "VariableDefinition":
      return [A(e2, t, n), n("variable"), ": ", n("type"), i.defaultValue ? [" = ", n("defaultValue")] : "", _(e2, n, i)];
    case "ObjectTypeExtension":
    case "ObjectTypeDefinition":
    case "InputObjectTypeExtension":
    case "InputObjectTypeDefinition":
    case "InterfaceTypeExtension":
    case "InterfaceTypeDefinition": {
      let { kind: r } = i, s = [];
      return r.endsWith("TypeDefinition") ? s.push(A(e2, t, n)) : s.push("extend "), r.startsWith("ObjectType") ? s.push("type") : r.startsWith("InputObjectType") ? s.push("input") : s.push("interface"), s.push(" ", n("name")), !r.startsWith("InputObjectType") && i.interfaces.length > 0 && s.push(" implements ", ...kt(e2, t, n)), s.push(_(e2, n, i)), i.fields.length > 0 && s.push([" {", x([f, E(f, g(e2, t, n, "fields"))]), f, "}"]), s;
    }
    case "FieldDefinition":
      return [A(e2, t, n), n("name"), i.arguments.length > 0 ? y(["(", x([l, E([I("", ", "), l], g(e2, t, n, "arguments"))]), l, ")"]) : "", ": ", n("type"), _(e2, n, i)];
    case "DirectiveDefinition":
      return [A(e2, t, n), "directive ", "@", n("name"), i.arguments.length > 0 ? y(["(", x([l, E([I("", ", "), l], g(e2, t, n, "arguments"))]), l, ")"]) : "", i.repeatable ? " repeatable" : "", " on ", ...E(" | ", e2.map(n, "locations"))];
    case "EnumTypeExtension":
    case "EnumTypeDefinition":
      return [A(e2, t, n), i.kind === "EnumTypeExtension" ? "extend " : "", "enum ", n("name"), _(e2, n, i), i.values.length > 0 ? [" {", x([f, E(f, g(e2, t, n, "values"))]), f, "}"] : ""];
    case "EnumValueDefinition":
      return [A(e2, t, n), n("name"), _(e2, n, i)];
    case "InputValueDefinition":
      return [A(e2, t, n), n("name"), ": ", n("type"), i.defaultValue ? [" = ", n("defaultValue")] : "", _(e2, n, i)];
    case "SchemaExtension":
      return ["extend schema", _(e2, n, i), ...i.operationTypes.length > 0 ? [" {", x([f, E(f, g(e2, t, n, "operationTypes"))]), f, "}"] : []];
    case "SchemaDefinition":
      return [A(e2, t, n), "schema", _(e2, n, i), " {", i.operationTypes.length > 0 ? x([f, E(f, g(e2, t, n, "operationTypes"))]) : "", f, "}"];
    case "OperationTypeDefinition":
      return [i.operation, ": ", n("type")];
    case "FragmentSpread":
      return ["...", n("name"), _(e2, n, i)];
    case "InlineFragment":
      return ["...", i.typeCondition ? [" on ", n("typeCondition")] : "", _(e2, n, i), " ", n("selectionSet")];
    case "UnionTypeExtension":
    case "UnionTypeDefinition":
      return y([A(e2, t, n), y([i.kind === "UnionTypeExtension" ? "extend " : "", "union ", n("name"), _(e2, n, i), i.types.length > 0 ? [" =", I("", " "), x([I([k, "| "]), E([k, "| "], e2.map(n, "types"))])] : ""])]);
    case "ScalarTypeExtension":
    case "ScalarTypeDefinition":
      return [A(e2, t, n), i.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", n("name"), _(e2, n, i)];
    case "NonNullType":
      return [n("type"), "!"];
    case "ListType":
      return ["[", n("type"), "]"];
    default:
      throw new ke(i, "Graphql", "kind");
  }
}
function _(e2, t, n) {
  if (n.directives.length === 0) return "";
  let i = E(k, e2.map(t, "directives"));
  return n.kind === "FragmentDefinition" || n.kind === "OperationDefinition" ? y([k, i]) : [" ", y(x([l, i]))];
}
function g(e2, t, n, i) {
  return e2.map(({ isLast: r, node: s }) => {
    let a = n();
    return !r && Se(t.originalText, q(s)) ? [a, f] : a;
  }, i);
}
function gt(e2) {
  return e2.kind !== "Comment";
}
function St({ node: e2 }) {
  if (e2.kind === "Comment") return "#" + e2.value.trimEnd();
  throw new Error("Not a comment: " + JSON.stringify(e2));
}
function kt(e2, t, n) {
  let { node: i } = e2, r = [], { interfaces: s } = i, a = e2.map(n, "interfaces");
  for (let u = 0; u < s.length; u++) {
    let p = s[u];
    r.push(a[u]);
    let T = s[u + 1];
    if (T) {
      let D = t.originalText.slice(p.loc.end, T.loc.start).includes("#");
      r.push(" &", D ? k : " ");
    }
  }
  return r;
}
function Be(e2, t) {
  let { node: n } = e2;
  return se(n.variableDefinitions) ? y(["(", x([l, E([I("", ", "), l], e2.map(t, "variableDefinitions"))]), l, ")"]) : "";
}
function Ue(e2, t) {
  e2.kind === "StringValue" && e2.block && !e2.value.includes(`
`) && (t.value = e2.value.trim());
}
Ue.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
function Ct(e2) {
  let { node: t } = e2;
  return t?.comments?.some((n) => n.value.trim() === "prettier-ignore");
}
var Rt = { print: Dt, massageAstNode: Ue, hasPrettierIgnore: Ct, insertPragma: Ve, printComment: St, canAttachComment: gt, getVisitorKeys: be }, Ge = Rt;
var Ye = [{ name: "GraphQL", type: "data", aceMode: "graphqlschema", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", parsers: ["graphql"], vscodeLanguageIds: ["graphql"], linguistLanguageId: 139 }];
var je = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." } };
var vt = { bracketSpacing: je.bracketSpacing }, $e = vt;
var he = {};
de(he, { graphql: () => tn });
function Xe(e2) {
  return typeof e2 == "object" && e2 !== null;
}
function He(e2, t) {
  throw new Error("Unexpected invariant triggered.");
}
var bt = /\r\n|[\n\r]/g;
function M(e2, t) {
  let n = 0, i = 1;
  for (let r of e2.body.matchAll(bt)) {
    if (typeof r.index == "number" || He(), r.index >= t) break;
    n = r.index + r[0].length, i += 1;
  }
  return { line: i, column: t + 1 - n };
}
function qe(e2) {
  return ue(e2.source, M(e2.source, e2.start));
}
function ue(e2, t) {
  let n = e2.locationOffset.column - 1, i = "".padStart(n) + e2.body, r = t.line - 1, s = e2.locationOffset.line - 1, a = t.line + s, u = t.line === 1 ? n : 0, p = t.column + u, T = `${e2.name}:${a}:${p}
`, d = i.split(/\r\n|[\n\r]/g), D = d[r];
  if (D.length > 120) {
    let O = Math.floor(p / 80), re = p % 80, N = [];
    for (let v = 0; v < D.length; v += 80) N.push(D.slice(v, v + 80));
    return T + Je([[`${a} |`, N[0]], ...N.slice(1, O + 1).map((v) => ["|", v]), ["|", "^".padStart(re)], ["|", N[O + 1]]]);
  }
  return T + Je([[`${a - 1} |`, d[r - 1]], [`${a} |`, D], ["|", "^".padStart(p)], [`${a + 1} |`, d[r + 1]]]);
}
function Je(e2) {
  let t = e2.filter(([i, r]) => r !== void 0), n = Math.max(...t.map(([i]) => i.length));
  return t.map(([i, r]) => i.padStart(n) + (r ? " " + r : "")).join(`
`);
}
function Lt(e2) {
  let t = e2[0];
  return t == null || "kind" in t || "length" in t ? { nodes: t, source: e2[1], positions: e2[2], path: e2[3], originalError: e2[4], extensions: e2[5] } : t;
}
var Q = class e extends Error {
  constructor(t, ...n) {
    var i, r, s;
    let { nodes: a, source: u, positions: p, path: T, originalError: d, extensions: D } = Lt(n);
    super(t), this.name = "GraphQLError", this.path = T ?? void 0, this.originalError = d ?? void 0, this.nodes = Qe(Array.isArray(a) ? a : a ? [a] : void 0);
    let O = Qe((i = this.nodes) === null || i === void 0 ? void 0 : i.map((N) => N.loc).filter((N) => N != null));
    this.source = u ?? (O == null || (r = O[0]) === null || r === void 0 ? void 0 : r.source), this.positions = p ?? O?.map((N) => N.start), this.locations = p && u ? p.map((N) => M(u, N)) : O?.map((N) => M(N.source, N.start));
    let re = Xe(d?.extensions) ? d?.extensions : void 0;
    this.extensions = (s = D ?? re) !== null && s !== void 0 ? s : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, { message: { writable: true, enumerable: true }, name: { enumerable: false }, nodes: { enumerable: false }, source: { enumerable: false }, positions: { enumerable: false }, originalError: { enumerable: false } }), d != null && d.stack ? Object.defineProperty(this, "stack", { value: d.stack, writable: true, configurable: true }) : Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", { value: Error().stack, writable: true, configurable: true });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes) for (let n of this.nodes) n.loc && (t += `

` + qe(n.loc));
    else if (this.source && this.locations) for (let n of this.locations) t += `

` + ue(this.source, n);
    return t;
  }
  toJSON() {
    let t = { message: this.message };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
};
function Qe(e2) {
  return e2 === void 0 || e2.length === 0 ? void 0 : e2;
}
function h(e2, t, n) {
  return new Q(`Syntax Error: ${n}`, { source: e2, positions: [t] });
}
var W;
(function(e2) {
  e2.QUERY = "QUERY", e2.MUTATION = "MUTATION", e2.SUBSCRIPTION = "SUBSCRIPTION", e2.FIELD = "FIELD", e2.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e2.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e2.INLINE_FRAGMENT = "INLINE_FRAGMENT", e2.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e2.SCHEMA = "SCHEMA", e2.SCALAR = "SCALAR", e2.OBJECT = "OBJECT", e2.FIELD_DEFINITION = "FIELD_DEFINITION", e2.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e2.INTERFACE = "INTERFACE", e2.UNION = "UNION", e2.ENUM = "ENUM", e2.ENUM_VALUE = "ENUM_VALUE", e2.INPUT_OBJECT = "INPUT_OBJECT", e2.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(W || (W = {}));
var c;
(function(e2) {
  e2.NAME = "Name", e2.DOCUMENT = "Document", e2.OPERATION_DEFINITION = "OperationDefinition", e2.VARIABLE_DEFINITION = "VariableDefinition", e2.SELECTION_SET = "SelectionSet", e2.FIELD = "Field", e2.ARGUMENT = "Argument", e2.FRAGMENT_SPREAD = "FragmentSpread", e2.INLINE_FRAGMENT = "InlineFragment", e2.FRAGMENT_DEFINITION = "FragmentDefinition", e2.VARIABLE = "Variable", e2.INT = "IntValue", e2.FLOAT = "FloatValue", e2.STRING = "StringValue", e2.BOOLEAN = "BooleanValue", e2.NULL = "NullValue", e2.ENUM = "EnumValue", e2.LIST = "ListValue", e2.OBJECT = "ObjectValue", e2.OBJECT_FIELD = "ObjectField", e2.DIRECTIVE = "Directive", e2.NAMED_TYPE = "NamedType", e2.LIST_TYPE = "ListType", e2.NON_NULL_TYPE = "NonNullType", e2.SCHEMA_DEFINITION = "SchemaDefinition", e2.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e2.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e2.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e2.FIELD_DEFINITION = "FieldDefinition", e2.INPUT_VALUE_DEFINITION = "InputValueDefinition", e2.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e2.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e2.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e2.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e2.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e2.DIRECTIVE_DEFINITION = "DirectiveDefinition", e2.SCHEMA_EXTENSION = "SchemaExtension", e2.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e2.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e2.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e2.UNION_TYPE_EXTENSION = "UnionTypeExtension", e2.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e2.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", e2.TYPE_COORDINATE = "TypeCoordinate", e2.MEMBER_COORDINATE = "MemberCoordinate", e2.ARGUMENT_COORDINATE = "ArgumentCoordinate", e2.DIRECTIVE_COORDINATE = "DirectiveCoordinate", e2.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
})(c || (c = {}));
function We(e2) {
  return e2 === 9 || e2 === 32;
}
function b(e2) {
  return e2 >= 48 && e2 <= 57;
}
function ze(e2) {
  return e2 >= 97 && e2 <= 122 || e2 >= 65 && e2 <= 90;
}
function pe(e2) {
  return ze(e2) || e2 === 95;
}
function Ke(e2) {
  return ze(e2) || b(e2) || e2 === 95;
}
function Ze(e2) {
  var t;
  let n = Number.MAX_SAFE_INTEGER, i = null, r = -1;
  for (let a = 0; a < e2.length; ++a) {
    var s;
    let u = e2[a], p = Pt(u);
    p !== u.length && (i = (s = i) !== null && s !== void 0 ? s : a, r = a, a !== 0 && p < n && (n = p));
  }
  return e2.map((a, u) => u === 0 ? a : a.slice(n)).slice((t = i) !== null && t !== void 0 ? t : 0, r + 1);
}
function Pt(e2) {
  let t = 0;
  for (; t < e2.length && We(e2.charCodeAt(t)); ) ++t;
  return t;
}
var o;
(function(e2) {
  e2.SOF = "<SOF>", e2.EOF = "<EOF>", e2.BANG = "!", e2.DOLLAR = "$", e2.AMP = "&", e2.PAREN_L = "(", e2.PAREN_R = ")", e2.DOT = ".", e2.SPREAD = "...", e2.COLON = ":", e2.EQUALS = "=", e2.AT = "@", e2.BRACKET_L = "[", e2.BRACKET_R = "]", e2.BRACE_L = "{", e2.PIPE = "|", e2.BRACE_R = "}", e2.NAME = "Name", e2.INT = "Int", e2.FLOAT = "Float", e2.STRING = "String", e2.BLOCK_STRING = "BlockString", e2.COMMENT = "Comment";
})(o || (o = {}));
var z = class {
  constructor(t) {
    let n = new F(o.SOF, 0, 0, 0, 0);
    this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  lookahead() {
    let t = this.token;
    if (t.kind !== o.EOF) do
      if (t.next) t = t.next;
      else {
        let n = wt(this, t.end);
        t.next = n, n.prev = t, t = n;
      }
    while (t.kind === o.COMMENT);
    return t;
  }
};
function tt(e2) {
  return e2 === o.BANG || e2 === o.DOLLAR || e2 === o.AMP || e2 === o.PAREN_L || e2 === o.PAREN_R || e2 === o.DOT || e2 === o.SPREAD || e2 === o.COLON || e2 === o.EQUALS || e2 === o.AT || e2 === o.BRACKET_L || e2 === o.BRACKET_R || e2 === o.BRACE_L || e2 === o.PIPE || e2 === o.BRACE_R;
}
function L(e2) {
  return e2 >= 0 && e2 <= 55295 || e2 >= 57344 && e2 <= 1114111;
}
function K(e2, t) {
  return nt(e2.charCodeAt(t)) && rt(e2.charCodeAt(t + 1));
}
function nt(e2) {
  return e2 >= 55296 && e2 <= 56319;
}
function rt(e2) {
  return e2 >= 56320 && e2 <= 57343;
}
function R(e2, t) {
  let n = e2.source.body.codePointAt(t);
  if (n === void 0) return o.EOF;
  if (n >= 32 && n <= 126) {
    let i = String.fromCodePoint(n);
    return i === '"' ? `'"'` : `"${i}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function m(e2, t, n, i, r) {
  let s = e2.line, a = 1 + n - e2.lineStart;
  return new F(t, n, i, s, a, r);
}
function wt(e2, t) {
  let n = e2.source.body, i = n.length, r = t;
  for (; r < i; ) {
    let s = n.charCodeAt(r);
    switch (s) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++r;
        continue;
      case 10:
        ++r, ++e2.line, e2.lineStart = r;
        continue;
      case 13:
        n.charCodeAt(r + 1) === 10 ? r += 2 : ++r, ++e2.line, e2.lineStart = r;
        continue;
      case 35:
        return Ft(e2, r);
      case 33:
        return m(e2, o.BANG, r, r + 1);
      case 36:
        return m(e2, o.DOLLAR, r, r + 1);
      case 38:
        return m(e2, o.AMP, r, r + 1);
      case 40:
        return m(e2, o.PAREN_L, r, r + 1);
      case 41:
        return m(e2, o.PAREN_R, r, r + 1);
      case 46:
        if (n.charCodeAt(r + 1) === 46 && n.charCodeAt(r + 2) === 46) return m(e2, o.SPREAD, r, r + 3);
        break;
      case 58:
        return m(e2, o.COLON, r, r + 1);
      case 61:
        return m(e2, o.EQUALS, r, r + 1);
      case 64:
        return m(e2, o.AT, r, r + 1);
      case 91:
        return m(e2, o.BRACKET_L, r, r + 1);
      case 93:
        return m(e2, o.BRACKET_R, r, r + 1);
      case 123:
        return m(e2, o.BRACE_L, r, r + 1);
      case 124:
        return m(e2, o.PIPE, r, r + 1);
      case 125:
        return m(e2, o.BRACE_R, r, r + 1);
      case 34:
        return n.charCodeAt(r + 1) === 34 && n.charCodeAt(r + 2) === 34 ? Yt(e2, r) : Vt(e2, r);
    }
    if (b(s) || s === 45) return Mt(e2, r, s);
    if (pe(s)) return jt(e2, r);
    throw h(e2.source, r, s === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : L(s) || K(n, r) ? `Unexpected character: ${R(e2, r)}.` : `Invalid character: ${R(e2, r)}.`);
  }
  return m(e2, o.EOF, i, i);
}
function Ft(e2, t) {
  let n = e2.source.body, i = n.length, r = t + 1;
  for (; r < i; ) {
    let s = n.charCodeAt(r);
    if (s === 10 || s === 13) break;
    if (L(s)) ++r;
    else if (K(n, r)) r += 2;
    else break;
  }
  return m(e2, o.COMMENT, t, r, n.slice(t + 1, r));
}
function Mt(e2, t, n) {
  let i = e2.source.body, r = t, s = n, a = false;
  if (s === 45 && (s = i.charCodeAt(++r)), s === 48) {
    if (s = i.charCodeAt(++r), b(s)) throw h(e2.source, r, `Invalid number, unexpected digit after 0: ${R(e2, r)}.`);
  } else r = le(e2, r, s), s = i.charCodeAt(r);
  if (s === 46 && (a = true, s = i.charCodeAt(++r), r = le(e2, r, s), s = i.charCodeAt(r)), (s === 69 || s === 101) && (a = true, s = i.charCodeAt(++r), (s === 43 || s === 45) && (s = i.charCodeAt(++r)), r = le(e2, r, s), s = i.charCodeAt(r)), s === 46 || pe(s)) throw h(e2.source, r, `Invalid number, expected digit but got: ${R(e2, r)}.`);
  return m(e2, a ? o.FLOAT : o.INT, t, r, i.slice(t, r));
}
function le(e2, t, n) {
  if (!b(n)) throw h(e2.source, t, `Invalid number, expected digit but got: ${R(e2, t)}.`);
  let i = e2.source.body, r = t + 1;
  for (; b(i.charCodeAt(r)); ) ++r;
  return r;
}
function Vt(e2, t) {
  let n = e2.source.body, i = n.length, r = t + 1, s = r, a = "";
  for (; r < i; ) {
    let u = n.charCodeAt(r);
    if (u === 34) return a += n.slice(s, r), m(e2, o.STRING, t, r + 1, a);
    if (u === 92) {
      a += n.slice(s, r);
      let p = n.charCodeAt(r + 1) === 117 ? n.charCodeAt(r + 2) === 123 ? Bt(e2, r) : Ut(e2, r) : Gt(e2, r);
      a += p.value, r += p.size, s = r;
      continue;
    }
    if (u === 10 || u === 13) break;
    if (L(u)) ++r;
    else if (K(n, r)) r += 2;
    else throw h(e2.source, r, `Invalid character within String: ${R(e2, r)}.`);
  }
  throw h(e2.source, r, "Unterminated string.");
}
function Bt(e2, t) {
  let n = e2.source.body, i = 0, r = 3;
  for (; r < 12; ) {
    let s = n.charCodeAt(t + r++);
    if (s === 125) {
      if (r < 5 || !L(i)) break;
      return { value: String.fromCodePoint(i), size: r };
    }
    if (i = i << 4 | V(s), i < 0) break;
  }
  throw h(e2.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + r)}".`);
}
function Ut(e2, t) {
  let n = e2.source.body, i = et(n, t + 2);
  if (L(i)) return { value: String.fromCodePoint(i), size: 6 };
  if (nt(i) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    let r = et(n, t + 8);
    if (rt(r)) return { value: String.fromCodePoint(i, r), size: 12 };
  }
  throw h(e2.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function et(e2, t) {
  return V(e2.charCodeAt(t)) << 12 | V(e2.charCodeAt(t + 1)) << 8 | V(e2.charCodeAt(t + 2)) << 4 | V(e2.charCodeAt(t + 3));
}
function V(e2) {
  return e2 >= 48 && e2 <= 57 ? e2 - 48 : e2 >= 65 && e2 <= 70 ? e2 - 55 : e2 >= 97 && e2 <= 102 ? e2 - 87 : -1;
}
function Gt(e2, t) {
  let n = e2.source.body;
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return { value: '"', size: 2 };
    case 92:
      return { value: "\\", size: 2 };
    case 47:
      return { value: "/", size: 2 };
    case 98:
      return { value: "\b", size: 2 };
    case 102:
      return { value: "\f", size: 2 };
    case 110:
      return { value: `
`, size: 2 };
    case 114:
      return { value: "\r", size: 2 };
    case 116:
      return { value: "	", size: 2 };
  }
  throw h(e2.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function Yt(e2, t) {
  let n = e2.source.body, i = n.length, r = e2.lineStart, s = t + 3, a = s, u = "", p = [];
  for (; s < i; ) {
    let T = n.charCodeAt(s);
    if (T === 34 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34) {
      u += n.slice(a, s), p.push(u);
      let d = m(e2, o.BLOCK_STRING, t, s + 3, Ze(p).join(`
`));
      return e2.line += p.length - 1, e2.lineStart = r, d;
    }
    if (T === 92 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34 && n.charCodeAt(s + 3) === 34) {
      u += n.slice(a, s), a = s + 1, s += 4;
      continue;
    }
    if (T === 10 || T === 13) {
      u += n.slice(a, s), p.push(u), T === 13 && n.charCodeAt(s + 1) === 10 ? s += 2 : ++s, u = "", a = s, r = s;
      continue;
    }
    if (L(T)) ++s;
    else if (K(n, s)) s += 2;
    else throw h(e2.source, s, `Invalid character within String: ${R(e2, s)}.`);
  }
  throw h(e2.source, s, "Unterminated string.");
}
function jt(e2, t) {
  let n = e2.source.body, i = n.length, r = t + 1;
  for (; r < i; ) {
    let s = n.charCodeAt(r);
    if (Ke(s)) ++r;
    else break;
  }
  return m(e2, o.NAME, t, r, n.slice(t, r));
}
function Z(e2, t) {
  throw new Error(t);
}
function ee(e2) {
  return te(e2, []);
}
function te(e2, t) {
  switch (typeof e2) {
    case "string":
      return JSON.stringify(e2);
    case "function":
      return e2.name ? `[function ${e2.name}]` : "[function]";
    case "object":
      return $t(e2, t);
    default:
      return String(e2);
  }
}
function $t(e2, t) {
  if (e2 === null) return "null";
  if (t.includes(e2)) return "[Circular]";
  let n = [...t, e2];
  if (Xt(e2)) {
    let i = e2.toJSON();
    if (i !== e2) return typeof i == "string" ? i : te(i, n);
  } else if (Array.isArray(e2)) return Jt(e2, n);
  return Ht(e2, n);
}
function Xt(e2) {
  return typeof e2.toJSON == "function";
}
function Ht(e2, t) {
  let n = Object.entries(e2);
  return n.length === 0 ? "{}" : t.length > 2 ? "[" + qt(e2) + "]" : "{ " + n.map(([r, s]) => r + ": " + te(s, t)).join(", ") + " }";
}
function Jt(e2, t) {
  if (e2.length === 0) return "[]";
  if (t.length > 2) return "[Array]";
  let n = Math.min(10, e2.length), i = e2.length - n, r = [];
  for (let s = 0; s < n; ++s) r.push(te(e2[s], t));
  return i === 1 ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`), "[" + r.join(", ") + "]";
}
function qt(e2) {
  let t = Object.prototype.toString.call(e2).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e2.constructor == "function") {
    let n = e2.constructor.name;
    if (typeof n == "string" && n !== "") return n;
  }
  return t;
}
var Qt = globalThis.process && true, it = Qt ? function(t, n) {
  return t instanceof n;
} : function(t, n) {
  if (t instanceof n) return true;
  if (typeof t == "object" && t !== null) {
    var i;
    let r = n.prototype[Symbol.toStringTag], s = Symbol.toStringTag in t ? t[Symbol.toStringTag] : (i = t.constructor) === null || i === void 0 ? void 0 : i.name;
    if (r === s) {
      let a = ee(t);
      throw new Error(`Cannot use ${r} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
    }
  }
  return false;
};
var B = class {
  constructor(t, n = "GraphQL request", i = { line: 1, column: 1 }) {
    typeof t == "string" || Z(false, `Body must be a string. Received: ${ee(t)}.`), this.body = t, this.name = n, this.locationOffset = i, this.locationOffset.line > 0 || Z(false, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Z(false, "column in locationOffset is 1-indexed and must be positive.");
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
};
function st(e2) {
  return it(e2, B);
}
function ot(e2, t) {
  let n = new fe(e2, t), i = n.parseDocument();
  return Object.defineProperty(i, "tokenCount", { enumerable: false, value: n.tokenCount }), i;
}
var fe = class {
  constructor(t, n = {}) {
    let { lexer: i, ...r } = n;
    if (i) this._lexer = i;
    else {
      let s = st(t) ? t : new B(t);
      this._lexer = new z(s);
    }
    this._options = r, this._tokenCounter = 0;
  }
  get tokenCount() {
    return this._tokenCounter;
  }
  parseName() {
    let t = this.expectToken(o.NAME);
    return this.node(t, { kind: c.NAME, value: t.value });
  }
  parseDocument() {
    return this.node(this._lexer.token, { kind: c.DOCUMENT, definitions: this.many(o.SOF, this.parseDefinition, o.EOF) });
  }
  parseDefinition() {
    if (this.peek(o.BRACE_L)) return this.parseOperationDefinition();
    let t = this.peekDescription(), n = t ? this._lexer.lookahead() : this._lexer.token;
    if (t && n.kind === o.BRACE_L) throw h(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are not supported on shorthand queries.");
    if (n.kind === o.NAME) {
      switch (n.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      switch (n.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
      }
      if (t) throw h(this._lexer.source, this._lexer.token.start, "Unexpected description, only GraphQL definitions support descriptions.");
      switch (n.value) {
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(n);
  }
  parseOperationDefinition() {
    let t = this._lexer.token;
    if (this.peek(o.BRACE_L)) return this.node(t, { kind: c.OPERATION_DEFINITION, operation: C.QUERY, description: void 0, name: void 0, variableDefinitions: [], directives: [], selectionSet: this.parseSelectionSet() });
    let n = this.parseDescription(), i = this.parseOperationType(), r;
    return this.peek(o.NAME) && (r = this.parseName()), this.node(t, { kind: c.OPERATION_DEFINITION, operation: i, description: n, name: r, variableDefinitions: this.parseVariableDefinitions(), directives: this.parseDirectives(false), selectionSet: this.parseSelectionSet() });
  }
  parseOperationType() {
    let t = this.expectToken(o.NAME);
    switch (t.value) {
      case "query":
        return C.QUERY;
      case "mutation":
        return C.MUTATION;
      case "subscription":
        return C.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  parseVariableDefinitions() {
    return this.optionalMany(o.PAREN_L, this.parseVariableDefinition, o.PAREN_R);
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, { kind: c.VARIABLE_DEFINITION, description: this.parseDescription(), variable: this.parseVariable(), type: (this.expectToken(o.COLON), this.parseTypeReference()), defaultValue: this.expectOptionalToken(o.EQUALS) ? this.parseConstValueLiteral() : void 0, directives: this.parseConstDirectives() });
  }
  parseVariable() {
    let t = this._lexer.token;
    return this.expectToken(o.DOLLAR), this.node(t, { kind: c.VARIABLE, name: this.parseName() });
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, { kind: c.SELECTION_SET, selections: this.many(o.BRACE_L, this.parseSelection, o.BRACE_R) });
  }
  parseSelection() {
    return this.peek(o.SPREAD) ? this.parseFragment() : this.parseField();
  }
  parseField() {
    let t = this._lexer.token, n = this.parseName(), i, r;
    return this.expectOptionalToken(o.COLON) ? (i = n, r = this.parseName()) : r = n, this.node(t, { kind: c.FIELD, alias: i, name: r, arguments: this.parseArguments(false), directives: this.parseDirectives(false), selectionSet: this.peek(o.BRACE_L) ? this.parseSelectionSet() : void 0 });
  }
  parseArguments(t) {
    let n = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(o.PAREN_L, n, o.PAREN_R);
  }
  parseArgument(t = false) {
    let n = this._lexer.token, i = this.parseName();
    return this.expectToken(o.COLON), this.node(n, { kind: c.ARGUMENT, name: i, value: this.parseValueLiteral(t) });
  }
  parseConstArgument() {
    return this.parseArgument(true);
  }
  parseFragment() {
    let t = this._lexer.token;
    this.expectToken(o.SPREAD);
    let n = this.expectOptionalKeyword("on");
    return !n && this.peek(o.NAME) ? this.node(t, { kind: c.FRAGMENT_SPREAD, name: this.parseFragmentName(), directives: this.parseDirectives(false) }) : this.node(t, { kind: c.INLINE_FRAGMENT, typeCondition: n ? this.parseNamedType() : void 0, directives: this.parseDirectives(false), selectionSet: this.parseSelectionSet() });
  }
  parseFragmentDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === true ? this.node(t, { kind: c.FRAGMENT_DEFINITION, description: n, name: this.parseFragmentName(), variableDefinitions: this.parseVariableDefinitions(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(false), selectionSet: this.parseSelectionSet() }) : this.node(t, { kind: c.FRAGMENT_DEFINITION, description: n, name: this.parseFragmentName(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(false), selectionSet: this.parseSelectionSet() });
  }
  parseFragmentName() {
    if (this._lexer.token.value === "on") throw this.unexpected();
    return this.parseName();
  }
  parseValueLiteral(t) {
    let n = this._lexer.token;
    switch (n.kind) {
      case o.BRACKET_L:
        return this.parseList(t);
      case o.BRACE_L:
        return this.parseObject(t);
      case o.INT:
        return this.advanceLexer(), this.node(n, { kind: c.INT, value: n.value });
      case o.FLOAT:
        return this.advanceLexer(), this.node(n, { kind: c.FLOAT, value: n.value });
      case o.STRING:
      case o.BLOCK_STRING:
        return this.parseStringLiteral();
      case o.NAME:
        switch (this.advanceLexer(), n.value) {
          case "true":
            return this.node(n, { kind: c.BOOLEAN, value: true });
          case "false":
            return this.node(n, { kind: c.BOOLEAN, value: false });
          case "null":
            return this.node(n, { kind: c.NULL });
          default:
            return this.node(n, { kind: c.ENUM, value: n.value });
        }
      case o.DOLLAR:
        if (t) if (this.expectToken(o.DOLLAR), this._lexer.token.kind === o.NAME) {
          let i = this._lexer.token.value;
          throw h(this._lexer.source, n.start, `Unexpected variable "$${i}" in constant value.`);
        } else throw this.unexpected(n);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }
  parseStringLiteral() {
    let t = this._lexer.token;
    return this.advanceLexer(), this.node(t, { kind: c.STRING, value: t.value, block: t.kind === o.BLOCK_STRING });
  }
  parseList(t) {
    let n = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, { kind: c.LIST, values: this.any(o.BRACKET_L, n, o.BRACKET_R) });
  }
  parseObject(t) {
    let n = () => this.parseObjectField(t);
    return this.node(this._lexer.token, { kind: c.OBJECT, fields: this.any(o.BRACE_L, n, o.BRACE_R) });
  }
  parseObjectField(t) {
    let n = this._lexer.token, i = this.parseName();
    return this.expectToken(o.COLON), this.node(n, { kind: c.OBJECT_FIELD, name: i, value: this.parseValueLiteral(t) });
  }
  parseDirectives(t) {
    let n = [];
    for (; this.peek(o.AT); ) n.push(this.parseDirective(t));
    return n;
  }
  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  parseDirective(t) {
    let n = this._lexer.token;
    return this.expectToken(o.AT), this.node(n, { kind: c.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(t) });
  }
  parseTypeReference() {
    let t = this._lexer.token, n;
    if (this.expectOptionalToken(o.BRACKET_L)) {
      let i = this.parseTypeReference();
      this.expectToken(o.BRACKET_R), n = this.node(t, { kind: c.LIST_TYPE, type: i });
    } else n = this.parseNamedType();
    return this.expectOptionalToken(o.BANG) ? this.node(t, { kind: c.NON_NULL_TYPE, type: n }) : n;
  }
  parseNamedType() {
    return this.node(this._lexer.token, { kind: c.NAMED_TYPE, name: this.parseName() });
  }
  peekDescription() {
    return this.peek(o.STRING) || this.peek(o.BLOCK_STRING);
  }
  parseDescription() {
    if (this.peekDescription()) return this.parseStringLiteral();
  }
  parseSchemaDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("schema");
    let i = this.parseConstDirectives(), r = this.many(o.BRACE_L, this.parseOperationTypeDefinition, o.BRACE_R);
    return this.node(t, { kind: c.SCHEMA_DEFINITION, description: n, directives: i, operationTypes: r });
  }
  parseOperationTypeDefinition() {
    let t = this._lexer.token, n = this.parseOperationType();
    this.expectToken(o.COLON);
    let i = this.parseNamedType();
    return this.node(t, { kind: c.OPERATION_TYPE_DEFINITION, operation: n, type: i });
  }
  parseScalarTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("scalar");
    let i = this.parseName(), r = this.parseConstDirectives();
    return this.node(t, { kind: c.SCALAR_TYPE_DEFINITION, description: n, name: i, directives: r });
  }
  parseObjectTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("type");
    let i = this.parseName(), r = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    return this.node(t, { kind: c.OBJECT_TYPE_DEFINITION, description: n, name: i, interfaces: r, directives: s, fields: a });
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(o.AMP, this.parseNamedType) : [];
  }
  parseFieldsDefinition() {
    return this.optionalMany(o.BRACE_L, this.parseFieldDefinition, o.BRACE_R);
  }
  parseFieldDefinition() {
    let t = this._lexer.token, n = this.parseDescription(), i = this.parseName(), r = this.parseArgumentDefs();
    this.expectToken(o.COLON);
    let s = this.parseTypeReference(), a = this.parseConstDirectives();
    return this.node(t, { kind: c.FIELD_DEFINITION, description: n, name: i, arguments: r, type: s, directives: a });
  }
  parseArgumentDefs() {
    return this.optionalMany(o.PAREN_L, this.parseInputValueDef, o.PAREN_R);
  }
  parseInputValueDef() {
    let t = this._lexer.token, n = this.parseDescription(), i = this.parseName();
    this.expectToken(o.COLON);
    let r = this.parseTypeReference(), s;
    this.expectOptionalToken(o.EQUALS) && (s = this.parseConstValueLiteral());
    let a = this.parseConstDirectives();
    return this.node(t, { kind: c.INPUT_VALUE_DEFINITION, description: n, name: i, type: r, defaultValue: s, directives: a });
  }
  parseInterfaceTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("interface");
    let i = this.parseName(), r = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    return this.node(t, { kind: c.INTERFACE_TYPE_DEFINITION, description: n, name: i, interfaces: r, directives: s, fields: a });
  }
  parseUnionTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("union");
    let i = this.parseName(), r = this.parseConstDirectives(), s = this.parseUnionMemberTypes();
    return this.node(t, { kind: c.UNION_TYPE_DEFINITION, description: n, name: i, directives: r, types: s });
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken(o.EQUALS) ? this.delimitedMany(o.PIPE, this.parseNamedType) : [];
  }
  parseEnumTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("enum");
    let i = this.parseName(), r = this.parseConstDirectives(), s = this.parseEnumValuesDefinition();
    return this.node(t, { kind: c.ENUM_TYPE_DEFINITION, description: n, name: i, directives: r, values: s });
  }
  parseEnumValuesDefinition() {
    return this.optionalMany(o.BRACE_L, this.parseEnumValueDefinition, o.BRACE_R);
  }
  parseEnumValueDefinition() {
    let t = this._lexer.token, n = this.parseDescription(), i = this.parseEnumValueName(), r = this.parseConstDirectives();
    return this.node(t, { kind: c.ENUM_VALUE_DEFINITION, description: n, name: i, directives: r });
  }
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw h(this._lexer.source, this._lexer.token.start, `${ne(this._lexer.token)} is reserved and cannot be used for an enum value.`);
    return this.parseName();
  }
  parseInputObjectTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("input");
    let i = this.parseName(), r = this.parseConstDirectives(), s = this.parseInputFieldsDefinition();
    return this.node(t, { kind: c.INPUT_OBJECT_TYPE_DEFINITION, description: n, name: i, directives: r, fields: s });
  }
  parseInputFieldsDefinition() {
    return this.optionalMany(o.BRACE_L, this.parseInputValueDef, o.BRACE_R);
  }
  parseTypeSystemExtension() {
    let t = this._lexer.lookahead();
    if (t.kind === o.NAME) switch (t.value) {
      case "schema":
        return this.parseSchemaExtension();
      case "scalar":
        return this.parseScalarTypeExtension();
      case "type":
        return this.parseObjectTypeExtension();
      case "interface":
        return this.parseInterfaceTypeExtension();
      case "union":
        return this.parseUnionTypeExtension();
      case "enum":
        return this.parseEnumTypeExtension();
      case "input":
        return this.parseInputObjectTypeExtension();
    }
    throw this.unexpected(t);
  }
  parseSchemaExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    let n = this.parseConstDirectives(), i = this.optionalMany(o.BRACE_L, this.parseOperationTypeDefinition, o.BRACE_R);
    if (n.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.SCHEMA_EXTENSION, directives: n, operationTypes: i });
  }
  parseScalarTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    let n = this.parseName(), i = this.parseConstDirectives();
    if (i.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.SCALAR_TYPE_EXTENSION, name: n, directives: i });
  }
  parseObjectTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    let n = this.parseName(), i = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    if (i.length === 0 && r.length === 0 && s.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.OBJECT_TYPE_EXTENSION, name: n, interfaces: i, directives: r, fields: s });
  }
  parseInterfaceTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    let n = this.parseName(), i = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    if (i.length === 0 && r.length === 0 && s.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.INTERFACE_TYPE_EXTENSION, name: n, interfaces: i, directives: r, fields: s });
  }
  parseUnionTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    let n = this.parseName(), i = this.parseConstDirectives(), r = this.parseUnionMemberTypes();
    if (i.length === 0 && r.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.UNION_TYPE_EXTENSION, name: n, directives: i, types: r });
  }
  parseEnumTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    let n = this.parseName(), i = this.parseConstDirectives(), r = this.parseEnumValuesDefinition();
    if (i.length === 0 && r.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.ENUM_TYPE_EXTENSION, name: n, directives: i, values: r });
  }
  parseInputObjectTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    let n = this.parseName(), i = this.parseConstDirectives(), r = this.parseInputFieldsDefinition();
    if (i.length === 0 && r.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.INPUT_OBJECT_TYPE_EXTENSION, name: n, directives: i, fields: r });
  }
  parseDirectiveDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(o.AT);
    let i = this.parseName(), r = this.parseArgumentDefs(), s = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    let a = this.parseDirectiveLocations();
    return this.node(t, { kind: c.DIRECTIVE_DEFINITION, description: n, name: i, arguments: r, repeatable: s, locations: a });
  }
  parseDirectiveLocations() {
    return this.delimitedMany(o.PIPE, this.parseDirectiveLocation);
  }
  parseDirectiveLocation() {
    let t = this._lexer.token, n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(W, n.value)) return n;
    throw this.unexpected(t);
  }
  parseSchemaCoordinate() {
    let t = this._lexer.token, n = this.expectOptionalToken(o.AT), i = this.parseName(), r;
    !n && this.expectOptionalToken(o.DOT) && (r = this.parseName());
    let s;
    return (n || r) && this.expectOptionalToken(o.PAREN_L) && (s = this.parseName(), this.expectToken(o.COLON), this.expectToken(o.PAREN_R)), n ? s ? this.node(t, { kind: c.DIRECTIVE_ARGUMENT_COORDINATE, name: i, argumentName: s }) : this.node(t, { kind: c.DIRECTIVE_COORDINATE, name: i }) : r ? s ? this.node(t, { kind: c.ARGUMENT_COORDINATE, name: i, fieldName: r, argumentName: s }) : this.node(t, { kind: c.MEMBER_COORDINATE, name: i, memberName: r }) : this.node(t, { kind: c.TYPE_COORDINATE, name: i });
  }
  node(t, n) {
    return this._options.noLocation !== true && (n.loc = new H(t, this._lexer.lastToken, this._lexer.source)), n;
  }
  peek(t) {
    return this._lexer.token.kind === t;
  }
  expectToken(t) {
    let n = this._lexer.token;
    if (n.kind === t) return this.advanceLexer(), n;
    throw h(this._lexer.source, n.start, `Expected ${at(t)}, found ${ne(n)}.`);
  }
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this.advanceLexer(), true) : false;
  }
  expectKeyword(t) {
    let n = this._lexer.token;
    if (n.kind === o.NAME && n.value === t) this.advanceLexer();
    else throw h(this._lexer.source, n.start, `Expected "${t}", found ${ne(n)}.`);
  }
  expectOptionalKeyword(t) {
    let n = this._lexer.token;
    return n.kind === o.NAME && n.value === t ? (this.advanceLexer(), true) : false;
  }
  unexpected(t) {
    let n = t ?? this._lexer.token;
    return h(this._lexer.source, n.start, `Unexpected ${ne(n)}.`);
  }
  any(t, n, i) {
    this.expectToken(t);
    let r = [];
    for (; !this.expectOptionalToken(i); ) r.push(n.call(this));
    return r;
  }
  optionalMany(t, n, i) {
    if (this.expectOptionalToken(t)) {
      let r = [];
      do
        r.push(n.call(this));
      while (!this.expectOptionalToken(i));
      return r;
    }
    return [];
  }
  many(t, n, i) {
    this.expectToken(t);
    let r = [];
    do
      r.push(n.call(this));
    while (!this.expectOptionalToken(i));
    return r;
  }
  delimitedMany(t, n) {
    this.expectOptionalToken(t);
    let i = [];
    do
      i.push(n.call(this));
    while (this.expectOptionalToken(t));
    return i;
  }
  advanceLexer() {
    let { maxTokens: t } = this._options, n = this._lexer.advance();
    if (n.kind !== o.EOF && (++this._tokenCounter, t !== void 0 && this._tokenCounter > t)) throw h(this._lexer.source, n.start, `Document contains more that ${t} tokens. Parsing aborted.`);
  }
};
function ne(e2) {
  let t = e2.value;
  return at(e2.kind) + (t != null ? ` "${t}"` : "");
}
function at(e2) {
  return tt(e2) ? `"${e2}"` : e2;
}
function Wt(e2, t) {
  let n = new SyntaxError(e2 + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
  return Object.assign(n, t);
}
var ct = Wt;
function zt(e2) {
  let t = [], { startToken: n, endToken: i } = e2.loc;
  for (let r = n; r !== i; r = r.next) r.kind === "Comment" && t.push({ ...r, loc: { start: r.start, end: r.end } });
  return t;
}
var Kt = { allowLegacyFragmentVariables: true };
function Zt(e2) {
  if (e2?.name === "GraphQLError") {
    let { message: t, locations: [n] } = e2;
    return ct(t, { loc: { start: n }, cause: e2 });
  }
  return e2;
}
function en(e2) {
  let t;
  try {
    t = ot(e2, Kt);
  } catch (n) {
    throw Zt(n);
  }
  return t.comments = zt(t), t;
}
var tn = { parse: en, astFormat: "graphql", hasPragma: Fe, hasIgnorePragma: Me, locStart: J, locEnd: q };
var nn = { graphql: Ge };
export {
  ut as default,
  Ye as languages,
  $e as options,
  he as parsers,
  nn as printers
};
