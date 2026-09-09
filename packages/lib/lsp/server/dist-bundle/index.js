import { AST_REQUEST as Ze } from "org.eclipse.daanse.board.app.lib.api.lsp";
import { AST_REQUEST as At } from "org.eclipse.daanse.board.app.lib.api.lsp";
function Qe(r) {
  return typeof r == "object" && r !== null && typeof r.$type == "string";
}
function at(r) {
  return typeof r == "object" && r !== null && typeof r.$refText == "string" && "ref" in r;
}
class it {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  getAllTypes() {
    return Object.keys(this.types);
  }
  getReferenceType(n) {
    const a = this.types[n.container.$type];
    if (!a)
      throw new Error(`Type ${n.container.$type || "undefined"} not found.`);
    const p = a.properties[n.property]?.referenceType;
    if (!p)
      throw new Error(`Property ${n.property || "undefined"} of type ${n.container.$type} is not a reference.`);
    return p;
  }
  getTypeMetaData(n) {
    const a = this.types[n];
    return a || {
      name: n,
      properties: {},
      superTypes: []
    };
  }
  isInstance(n, a) {
    return Qe(n) && this.isSubtype(n.$type, a);
  }
  isSubtype(n, a) {
    if (n === a)
      return !0;
    let p = this.subtypes[n];
    p || (p = this.subtypes[n] = {});
    const l = p[a];
    if (l !== void 0)
      return l;
    {
      const g = this.types[n], T = g ? g.superTypes.some(($) => this.isSubtype($, a)) : !1;
      return p[a] = T, T;
    }
  }
  getAllSubTypes(n) {
    const a = this.allSubtypes[n];
    if (a)
      return a;
    {
      const p = this.getAllTypes(), l = [];
      for (const g of p)
        this.isSubtype(g, n) && l.push(g);
      return this.allSubtypes[n] = l, l;
    }
  }
  /**
   * Check whether a given AST node is missing any non-optional properties.
   * Used to guard against incomplete nodes that deviate from their declared type,
   * particularly when error recovery is in effect.
   */
  isComplete(n) {
    const a = this.getTypeMetaData(n.$type);
    for (const p of Object.keys(a.properties)) {
      const l = a.properties[p];
      if (l.optional)
        continue;
      const g = n[l.name];
      if (g == null)
        return !1;
    }
    return !0;
  }
}
function st(r) {
  return typeof r == "object" && r !== null && Array.isArray(r.content);
}
function ot(r, n) {
  let a = r;
  for (; a; ) {
    if (n(a))
      return a;
    a = a.$container;
  }
}
const x = {
  $type: "AbstractElement",
  cardinality: "cardinality"
}, me = {
  $type: "AbstractParserRule"
}, se = {
  $type: "AbstractRule"
}, L = {
  $type: "AbstractType"
}, M = {
  $type: "Action",
  cardinality: "cardinality",
  feature: "feature",
  inferredType: "inferredType",
  operator: "operator",
  type: "type"
}, ge = {
  $type: "Alternatives",
  cardinality: "cardinality",
  elements: "elements"
}, ze = {
  $type: "ArrayLiteral",
  elements: "elements"
}, Ve = {
  $type: "ArrayType",
  elementType: "elementType"
}, j = {
  $type: "Assignment",
  cardinality: "cardinality",
  feature: "feature",
  operator: "operator",
  predicate: "predicate",
  terminal: "terminal"
};
function lt(r) {
  return ut.isInstance(r, j.$type);
}
const Ie = {
  $type: "BooleanLiteral",
  true: "true"
}, q = {
  $type: "CharacterRange",
  cardinality: "cardinality",
  left: "left",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  right: "right"
}, B = {
  $type: "Condition"
}, Te = {
  $type: "Conjunction",
  left: "left",
  right: "right"
}, G = {
  $type: "CrossReference",
  cardinality: "cardinality",
  deprecatedSyntax: "deprecatedSyntax",
  isMulti: "isMulti",
  terminal: "terminal",
  type: "type"
}, $e = {
  $type: "Disjunction",
  left: "left",
  right: "right"
}, Se = {
  $type: "EndOfFile",
  cardinality: "cardinality"
}, E = {
  $type: "Grammar",
  imports: "imports",
  interfaces: "interfaces",
  isDeclared: "isDeclared",
  name: "name",
  rules: "rules",
  types: "types"
}, Ee = {
  $type: "GrammarImport",
  path: "path"
}, F = {
  $type: "Group",
  cardinality: "cardinality",
  elements: "elements",
  guardCondition: "guardCondition",
  predicate: "predicate"
}, Ne = {
  $type: "InferredType",
  name: "name"
}, S = {
  $type: "InfixRule",
  call: "call",
  dataType: "dataType",
  inferredType: "inferredType",
  name: "name",
  operators: "operators",
  parameters: "parameters",
  returnType: "returnType"
}, be = {
  $type: "InfixRuleOperatorList",
  associativity: "associativity",
  operators: "operators"
}, je = {
  $type: "InfixRuleOperators",
  precedences: "precedences"
}, oe = {
  $type: "Interface",
  attributes: "attributes",
  name: "name",
  superTypes: "superTypes"
}, le = {
  $type: "Keyword",
  cardinality: "cardinality",
  predicate: "predicate",
  value: "value"
}, pe = {
  $type: "NamedArgument",
  calledByName: "calledByName",
  parameter: "parameter",
  value: "value"
}, W = {
  $type: "NegatedToken",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  terminal: "terminal"
}, Me = {
  $type: "Negation",
  value: "value"
}, qe = {
  $type: "NumberLiteral",
  value: "value"
}, ue = {
  $type: "Parameter",
  name: "name"
}, Be = {
  $type: "ParameterReference",
  parameter: "parameter"
}, V = {
  $type: "ParserRule",
  dataType: "dataType",
  definition: "definition",
  entry: "entry",
  fragment: "fragment",
  inferredType: "inferredType",
  name: "name",
  parameters: "parameters",
  returnType: "returnType"
}, ve = {
  $type: "ReferenceType",
  isMulti: "isMulti",
  referenceType: "referenceType"
}, J = {
  $type: "RegexToken",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  regex: "regex"
}, Ge = {
  $type: "ReturnType",
  name: "name"
}, K = {
  $type: "RuleCall",
  arguments: "arguments",
  cardinality: "cardinality",
  predicate: "predicate",
  rule: "rule"
}, ce = {
  $type: "SimpleType",
  primitiveType: "primitiveType",
  stringType: "stringType",
  typeRef: "typeRef"
}, Ue = {
  $type: "StringLiteral",
  value: "value"
}, Z = {
  $type: "TerminalAlternatives",
  cardinality: "cardinality",
  elements: "elements",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
}, k = {
  $type: "TerminalElement",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
}, Q = {
  $type: "TerminalGroup",
  cardinality: "cardinality",
  elements: "elements",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
}, N = {
  $type: "TerminalRule",
  definition: "definition",
  fragment: "fragment",
  hidden: "hidden",
  name: "name",
  type: "type"
}, Y = {
  $type: "TerminalRuleCall",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  rule: "rule"
}, Ae = {
  $type: "Type",
  name: "name",
  type: "type"
}, H = {
  $type: "TypeAttribute",
  defaultValue: "defaultValue",
  isOptional: "isOptional",
  name: "name",
  type: "type"
}, X = {
  $type: "TypeDefinition"
}, De = {
  $type: "UnionType",
  types: "types"
}, Ce = {
  $type: "UnorderedGroup",
  cardinality: "cardinality",
  elements: "elements"
}, ee = {
  $type: "UntilToken",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  terminal: "terminal"
}, te = {
  $type: "ValueLiteral"
}, fe = {
  $type: "Wildcard",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
};
class pt extends it {
  constructor() {
    super(...arguments), this.types = {
      AbstractElement: {
        name: x.$type,
        properties: {
          cardinality: {
            name: x.cardinality,
            optional: !0
          }
        },
        superTypes: []
      },
      AbstractParserRule: {
        name: me.$type,
        properties: {},
        superTypes: [se.$type, L.$type]
      },
      AbstractRule: {
        name: se.$type,
        properties: {},
        superTypes: []
      },
      AbstractType: {
        name: L.$type,
        properties: {},
        superTypes: []
      },
      Action: {
        name: M.$type,
        properties: {
          cardinality: {
            name: M.cardinality,
            optional: !0
          },
          feature: {
            name: M.feature,
            optional: !0
          },
          inferredType: {
            name: M.inferredType,
            optional: !0
          },
          operator: {
            name: M.operator,
            optional: !0
          },
          type: {
            name: M.type,
            referenceType: L.$type,
            optional: !0
          }
        },
        superTypes: [x.$type]
      },
      Alternatives: {
        name: ge.$type,
        properties: {
          cardinality: {
            name: ge.cardinality,
            optional: !0
          },
          elements: {
            name: ge.elements,
            defaultValue: []
          }
        },
        superTypes: [x.$type]
      },
      ArrayLiteral: {
        name: ze.$type,
        properties: {
          elements: {
            name: ze.elements,
            defaultValue: []
          }
        },
        superTypes: [te.$type]
      },
      ArrayType: {
        name: Ve.$type,
        properties: {
          elementType: {
            name: Ve.elementType
          }
        },
        superTypes: [X.$type]
      },
      Assignment: {
        name: j.$type,
        properties: {
          cardinality: {
            name: j.cardinality,
            optional: !0
          },
          feature: {
            name: j.feature
          },
          operator: {
            name: j.operator
          },
          predicate: {
            name: j.predicate,
            optional: !0
          },
          terminal: {
            name: j.terminal
          }
        },
        superTypes: [x.$type]
      },
      BooleanLiteral: {
        name: Ie.$type,
        properties: {
          true: {
            name: Ie.true,
            defaultValue: !1
          }
        },
        superTypes: [B.$type, te.$type]
      },
      CharacterRange: {
        name: q.$type,
        properties: {
          cardinality: {
            name: q.cardinality,
            optional: !0
          },
          left: {
            name: q.left
          },
          lookahead: {
            name: q.lookahead,
            optional: !0
          },
          parenthesized: {
            name: q.parenthesized,
            defaultValue: !1,
            optional: !0
          },
          right: {
            name: q.right,
            optional: !0
          }
        },
        superTypes: [k.$type]
      },
      Condition: {
        name: B.$type,
        properties: {},
        superTypes: []
      },
      Conjunction: {
        name: Te.$type,
        properties: {
          left: {
            name: Te.left
          },
          right: {
            name: Te.right
          }
        },
        superTypes: [B.$type]
      },
      CrossReference: {
        name: G.$type,
        properties: {
          cardinality: {
            name: G.cardinality,
            optional: !0
          },
          deprecatedSyntax: {
            name: G.deprecatedSyntax,
            defaultValue: !1
          },
          isMulti: {
            name: G.isMulti,
            defaultValue: !1
          },
          terminal: {
            name: G.terminal,
            optional: !0
          },
          type: {
            name: G.type,
            referenceType: L.$type
          }
        },
        superTypes: [x.$type]
      },
      Disjunction: {
        name: $e.$type,
        properties: {
          left: {
            name: $e.left
          },
          right: {
            name: $e.right
          }
        },
        superTypes: [B.$type]
      },
      EndOfFile: {
        name: Se.$type,
        properties: {
          cardinality: {
            name: Se.cardinality,
            optional: !0
          }
        },
        superTypes: [x.$type]
      },
      Grammar: {
        name: E.$type,
        properties: {
          imports: {
            name: E.imports,
            defaultValue: []
          },
          interfaces: {
            name: E.interfaces,
            defaultValue: []
          },
          isDeclared: {
            name: E.isDeclared,
            defaultValue: !1
          },
          name: {
            name: E.name,
            optional: !0
          },
          rules: {
            name: E.rules,
            defaultValue: []
          },
          types: {
            name: E.types,
            defaultValue: []
          }
        },
        superTypes: []
      },
      GrammarImport: {
        name: Ee.$type,
        properties: {
          path: {
            name: Ee.path
          }
        },
        superTypes: []
      },
      Group: {
        name: F.$type,
        properties: {
          cardinality: {
            name: F.cardinality,
            optional: !0
          },
          elements: {
            name: F.elements,
            defaultValue: []
          },
          guardCondition: {
            name: F.guardCondition,
            optional: !0
          },
          predicate: {
            name: F.predicate,
            optional: !0
          }
        },
        superTypes: [x.$type]
      },
      InferredType: {
        name: Ne.$type,
        properties: {
          name: {
            name: Ne.name
          }
        },
        superTypes: [L.$type]
      },
      InfixRule: {
        name: S.$type,
        properties: {
          call: {
            name: S.call
          },
          dataType: {
            name: S.dataType,
            optional: !0
          },
          inferredType: {
            name: S.inferredType,
            optional: !0
          },
          name: {
            name: S.name
          },
          operators: {
            name: S.operators
          },
          parameters: {
            name: S.parameters,
            defaultValue: []
          },
          returnType: {
            name: S.returnType,
            referenceType: L.$type,
            optional: !0
          }
        },
        superTypes: [me.$type]
      },
      InfixRuleOperatorList: {
        name: be.$type,
        properties: {
          associativity: {
            name: be.associativity,
            optional: !0
          },
          operators: {
            name: be.operators,
            defaultValue: []
          }
        },
        superTypes: []
      },
      InfixRuleOperators: {
        name: je.$type,
        properties: {
          precedences: {
            name: je.precedences,
            defaultValue: []
          }
        },
        superTypes: []
      },
      Interface: {
        name: oe.$type,
        properties: {
          attributes: {
            name: oe.attributes,
            defaultValue: []
          },
          name: {
            name: oe.name
          },
          superTypes: {
            name: oe.superTypes,
            defaultValue: [],
            referenceType: L.$type
          }
        },
        superTypes: [L.$type]
      },
      Keyword: {
        name: le.$type,
        properties: {
          cardinality: {
            name: le.cardinality,
            optional: !0
          },
          predicate: {
            name: le.predicate,
            optional: !0
          },
          value: {
            name: le.value
          }
        },
        superTypes: [x.$type]
      },
      NamedArgument: {
        name: pe.$type,
        properties: {
          calledByName: {
            name: pe.calledByName,
            defaultValue: !1
          },
          parameter: {
            name: pe.parameter,
            referenceType: ue.$type,
            optional: !0
          },
          value: {
            name: pe.value
          }
        },
        superTypes: []
      },
      NegatedToken: {
        name: W.$type,
        properties: {
          cardinality: {
            name: W.cardinality,
            optional: !0
          },
          lookahead: {
            name: W.lookahead,
            optional: !0
          },
          parenthesized: {
            name: W.parenthesized,
            defaultValue: !1,
            optional: !0
          },
          terminal: {
            name: W.terminal
          }
        },
        superTypes: [k.$type]
      },
      Negation: {
        name: Me.$type,
        properties: {
          value: {
            name: Me.value
          }
        },
        superTypes: [B.$type]
      },
      NumberLiteral: {
        name: qe.$type,
        properties: {
          value: {
            name: qe.value
          }
        },
        superTypes: [te.$type]
      },
      Parameter: {
        name: ue.$type,
        properties: {
          name: {
            name: ue.name
          }
        },
        superTypes: []
      },
      ParameterReference: {
        name: Be.$type,
        properties: {
          parameter: {
            name: Be.parameter,
            referenceType: ue.$type
          }
        },
        superTypes: [B.$type]
      },
      ParserRule: {
        name: V.$type,
        properties: {
          dataType: {
            name: V.dataType,
            optional: !0
          },
          definition: {
            name: V.definition
          },
          entry: {
            name: V.entry,
            defaultValue: !1
          },
          fragment: {
            name: V.fragment,
            defaultValue: !1
          },
          inferredType: {
            name: V.inferredType,
            optional: !0
          },
          name: {
            name: V.name
          },
          parameters: {
            name: V.parameters,
            defaultValue: []
          },
          returnType: {
            name: V.returnType,
            referenceType: L.$type,
            optional: !0
          }
        },
        superTypes: [me.$type]
      },
      ReferenceType: {
        name: ve.$type,
        properties: {
          isMulti: {
            name: ve.isMulti,
            defaultValue: !1
          },
          referenceType: {
            name: ve.referenceType
          }
        },
        superTypes: [X.$type]
      },
      RegexToken: {
        name: J.$type,
        properties: {
          cardinality: {
            name: J.cardinality,
            optional: !0
          },
          lookahead: {
            name: J.lookahead,
            optional: !0
          },
          parenthesized: {
            name: J.parenthesized,
            defaultValue: !1,
            optional: !0
          },
          regex: {
            name: J.regex
          }
        },
        superTypes: [k.$type]
      },
      ReturnType: {
        name: Ge.$type,
        properties: {
          name: {
            name: Ge.name
          }
        },
        superTypes: []
      },
      RuleCall: {
        name: K.$type,
        properties: {
          arguments: {
            name: K.arguments,
            defaultValue: []
          },
          cardinality: {
            name: K.cardinality,
            optional: !0
          },
          predicate: {
            name: K.predicate,
            optional: !0
          },
          rule: {
            name: K.rule,
            referenceType: se.$type
          }
        },
        superTypes: [x.$type]
      },
      SimpleType: {
        name: ce.$type,
        properties: {
          primitiveType: {
            name: ce.primitiveType,
            optional: !0
          },
          stringType: {
            name: ce.stringType,
            optional: !0
          },
          typeRef: {
            name: ce.typeRef,
            referenceType: L.$type,
            optional: !0
          }
        },
        superTypes: [X.$type]
      },
      StringLiteral: {
        name: Ue.$type,
        properties: {
          value: {
            name: Ue.value
          }
        },
        superTypes: [te.$type]
      },
      TerminalAlternatives: {
        name: Z.$type,
        properties: {
          cardinality: {
            name: Z.cardinality,
            optional: !0
          },
          elements: {
            name: Z.elements,
            defaultValue: []
          },
          lookahead: {
            name: Z.lookahead,
            optional: !0
          },
          parenthesized: {
            name: Z.parenthesized,
            defaultValue: !1,
            optional: !0
          }
        },
        superTypes: [k.$type]
      },
      TerminalElement: {
        name: k.$type,
        properties: {
          cardinality: {
            name: k.cardinality,
            optional: !0
          },
          lookahead: {
            name: k.lookahead,
            optional: !0
          },
          parenthesized: {
            name: k.parenthesized,
            defaultValue: !1,
            optional: !0
          }
        },
        superTypes: [x.$type]
      },
      TerminalGroup: {
        name: Q.$type,
        properties: {
          cardinality: {
            name: Q.cardinality,
            optional: !0
          },
          elements: {
            name: Q.elements,
            defaultValue: []
          },
          lookahead: {
            name: Q.lookahead,
            optional: !0
          },
          parenthesized: {
            name: Q.parenthesized,
            defaultValue: !1,
            optional: !0
          }
        },
        superTypes: [k.$type]
      },
      TerminalRule: {
        name: N.$type,
        properties: {
          definition: {
            name: N.definition
          },
          fragment: {
            name: N.fragment,
            defaultValue: !1
          },
          hidden: {
            name: N.hidden,
            defaultValue: !1
          },
          name: {
            name: N.name
          },
          type: {
            name: N.type,
            optional: !0
          }
        },
        superTypes: [se.$type]
      },
      TerminalRuleCall: {
        name: Y.$type,
        properties: {
          cardinality: {
            name: Y.cardinality,
            optional: !0
          },
          lookahead: {
            name: Y.lookahead,
            optional: !0
          },
          parenthesized: {
            name: Y.parenthesized,
            defaultValue: !1,
            optional: !0
          },
          rule: {
            name: Y.rule,
            referenceType: N.$type
          }
        },
        superTypes: [k.$type]
      },
      Type: {
        name: Ae.$type,
        properties: {
          name: {
            name: Ae.name
          },
          type: {
            name: Ae.type
          }
        },
        superTypes: [L.$type]
      },
      TypeAttribute: {
        name: H.$type,
        properties: {
          defaultValue: {
            name: H.defaultValue,
            optional: !0
          },
          isOptional: {
            name: H.isOptional,
            defaultValue: !1
          },
          name: {
            name: H.name
          },
          type: {
            name: H.type
          }
        },
        superTypes: []
      },
      TypeDefinition: {
        name: X.$type,
        properties: {},
        superTypes: []
      },
      UnionType: {
        name: De.$type,
        properties: {
          types: {
            name: De.types,
            defaultValue: []
          }
        },
        superTypes: [X.$type]
      },
      UnorderedGroup: {
        name: Ce.$type,
        properties: {
          cardinality: {
            name: Ce.cardinality,
            optional: !0
          },
          elements: {
            name: Ce.elements,
            defaultValue: []
          }
        },
        superTypes: [x.$type]
      },
      UntilToken: {
        name: ee.$type,
        properties: {
          cardinality: {
            name: ee.cardinality,
            optional: !0
          },
          lookahead: {
            name: ee.lookahead,
            optional: !0
          },
          parenthesized: {
            name: ee.parenthesized,
            defaultValue: !1,
            optional: !0
          },
          terminal: {
            name: ee.terminal
          }
        },
        superTypes: [k.$type]
      },
      ValueLiteral: {
        name: te.$type,
        properties: {},
        superTypes: []
      },
      Wildcard: {
        name: fe.$type,
        properties: {
          cardinality: {
            name: fe.cardinality,
            optional: !0
          },
          lookahead: {
            name: fe.lookahead,
            optional: !0
          },
          parenthesized: {
            name: fe.parenthesized,
            defaultValue: !1,
            optional: !0
          }
        },
        superTypes: [k.$type]
      }
    };
  }
}
const ut = new pt();
function ct(r, n, a) {
  if (!r || !n)
    return;
  const p = Ye(r, n, r.astNode, !0);
  if (p.length !== 0)
    return a !== void 0 ? a = Math.max(0, Math.min(a, p.length - 1)) : a = 0, p[a];
}
function Ye(r, n, a, p) {
  if (!p) {
    const l = ot(r.grammarSource, lt);
    if (l && l.feature === n)
      return [r];
  }
  return st(r) && r.astNode === a ? r.content.flatMap((l) => Ye(l, n, a, !1)) : [];
}
class ne {
  constructor(n, a, p, l) {
    this._uri = n, this._languageId = a, this._version = p, this._content = l, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(n) {
    if (n) {
      const a = this.offsetAt(n.start), p = this.offsetAt(n.end);
      return this._content.substring(a, p);
    }
    return this._content;
  }
  update(n, a) {
    for (const p of n)
      if (ne.isIncremental(p)) {
        const l = Xe(p.range), g = this.offsetAt(l.start), T = this.offsetAt(l.end);
        this._content = this._content.substring(0, g) + p.text + this._content.substring(T, this._content.length);
        const $ = Math.max(l.start.line, 0), v = Math.max(l.end.line, 0);
        let h = this._lineOffsets;
        const m = We(p.text, !1, g);
        if (v - $ === m.length)
          for (let w = 0, P = m.length; w < P; w++)
            h[w + $ + 1] = m[w];
        else
          m.length < 1e4 ? h.splice($ + 1, v - $, ...m) : this._lineOffsets = h = h.slice(0, $ + 1).concat(m, h.slice(v + 1));
        const C = p.text.length - (T - g);
        if (C !== 0)
          for (let w = $ + 1 + m.length, P = h.length; w < P; w++)
            h[w] = h[w] + C;
      } else if (ne.isFull(p))
        this._content = p.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = a;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = We(this._content, !0)), this._lineOffsets;
  }
  positionAt(n) {
    n = Math.max(Math.min(n, this._content.length), 0);
    const a = this.getLineOffsets();
    let p = 0, l = a.length;
    if (l === 0)
      return { line: 0, character: n };
    for (; p < l; ) {
      const T = Math.floor((p + l) / 2);
      a[T] > n ? l = T : p = T + 1;
    }
    const g = p - 1;
    return n = this.ensureBeforeEOL(n, a[g]), { line: g, character: n - a[g] };
  }
  offsetAt(n) {
    const a = this.getLineOffsets();
    if (n.line >= a.length)
      return this._content.length;
    if (n.line < 0)
      return 0;
    const p = a[n.line];
    if (n.character <= 0)
      return p;
    const l = n.line + 1 < a.length ? a[n.line + 1] : this._content.length, g = Math.min(p + n.character, l);
    return this.ensureBeforeEOL(g, p);
  }
  getLineRange(n) {
    const a = this.getLineOffsets();
    if (n >= a.length) {
      const T = a.length - 1;
      return { start: { line: T, character: 0 }, end: { line: T, character: this._content.length - a[T] } };
    } else if (n < 0)
      return { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } };
    const p = a[n], l = n + 1 < a.length ? a[n + 1] : this._content.length, g = this.ensureBeforeEOL(l, p);
    return { start: { line: n, character: 0 }, end: { line: n, character: g - p } };
  }
  getEOLCharacters(n) {
    const a = this.getLineOffsets();
    if (n >= a.length)
      return "";
    if (n < 0)
      return "";
    const p = n + 1 < a.length ? a[n + 1] : this._content.length, l = this.ensureBeforeEOL(p, a[n]);
    return this._content.substring(l, p);
  }
  ensureBeforeEOL(n, a) {
    for (; n > a && He(this._content.charCodeAt(n - 1)); )
      n--;
    return n;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(n) {
    const a = n;
    return a != null && typeof a.text == "string" && a.range !== void 0 && (a.rangeLength === void 0 || typeof a.rangeLength == "number");
  }
  static isFull(n) {
    const a = n;
    return a != null && typeof a.text == "string" && a.range === void 0 && a.rangeLength === void 0;
  }
}
var Fe;
(function(r) {
  function n(l, g, T, $) {
    return new ne(l, g, T, $);
  }
  r.create = n;
  function a(l, g, T) {
    if (l instanceof ne)
      return l.update(g, T), l;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  r.update = a;
  function p(l, g) {
    const T = l.getText(), $ = Oe(g.map(ft), (m, C) => {
      const w = m.range.start.line - C.range.start.line;
      return w === 0 ? m.range.start.character - C.range.start.character : w;
    });
    let v = 0;
    const h = [];
    for (const m of $) {
      const C = l.offsetAt(m.range.start);
      if (C < v)
        throw new Error("Overlapping edit");
      C > v && h.push(T.substring(v, C)), m.newText.length && h.push(m.newText), v = l.offsetAt(m.range.end);
    }
    return h.push(T.substr(v)), h.join("");
  }
  r.applyEdits = p;
})(Fe || (Fe = {}));
function Oe(r, n) {
  if (r.length <= 1)
    return r;
  const a = r.length / 2 | 0, p = r.slice(0, a), l = r.slice(a);
  Oe(p, n), Oe(l, n);
  let g = 0, T = 0, $ = 0;
  for (; g < p.length && T < l.length; )
    n(p[g], l[T]) <= 0 ? r[$++] = p[g++] : r[$++] = l[T++];
  for (; g < p.length; )
    r[$++] = p[g++];
  for (; T < l.length; )
    r[$++] = l[T++];
  return r;
}
function We(r, n, a = 0) {
  const p = n ? [a] : [];
  for (let l = 0; l < r.length; l++) {
    const g = r.charCodeAt(l);
    He(g) && (g === 13 && l + 1 < r.length && r.charCodeAt(l + 1) === 10 && l++, p.push(a + l + 1));
  }
  return p;
}
function He(r) {
  return r === 13 || r === 10;
}
function Xe(r) {
  const n = r.start, a = r.end;
  return n.line > a.line || n.line === a.line && n.character > a.character ? { start: a, end: n } : r;
}
function ft(r) {
  const n = Xe(r.range);
  return n !== r.range ? { newText: r.newText, range: n } : r;
}
var et;
(() => {
  var r = { 975: (o) => {
    function e(t) {
      if (typeof t != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(t));
    }
    function f(t, i) {
      for (var s, u = "", d = 0, c = -1, b = 0, A = 0; A <= t.length; ++A) {
        if (A < t.length) s = t.charCodeAt(A);
        else {
          if (s === 47) break;
          s = 47;
        }
        if (s === 47) {
          if (!(c === A - 1 || b === 1)) if (c !== A - 1 && b === 2) {
            if (u.length < 2 || d !== 2 || u.charCodeAt(u.length - 1) !== 46 || u.charCodeAt(u.length - 2) !== 46) {
              if (u.length > 2) {
                var R = u.lastIndexOf("/");
                if (R !== u.length - 1) {
                  R === -1 ? (u = "", d = 0) : d = (u = u.slice(0, R)).length - 1 - u.lastIndexOf("/"), c = A, b = 0;
                  continue;
                }
              } else if (u.length === 2 || u.length === 1) {
                u = "", d = 0, c = A, b = 0;
                continue;
              }
            }
            i && (u.length > 0 ? u += "/.." : u = "..", d = 2);
          } else u.length > 0 ? u += "/" + t.slice(c + 1, A) : u = t.slice(c + 1, A), d = A - c - 1;
          c = A, b = 0;
        } else s === 46 && b !== -1 ? ++b : b = -1;
      }
      return u;
    }
    var y = { resolve: function() {
      for (var t, i = "", s = !1, u = arguments.length - 1; u >= -1 && !s; u--) {
        var d;
        u >= 0 ? d = arguments[u] : (t === void 0 && (t = process.cwd()), d = t), e(d), d.length !== 0 && (i = d + "/" + i, s = d.charCodeAt(0) === 47);
      }
      return i = f(i, !s), s ? i.length > 0 ? "/" + i : "/" : i.length > 0 ? i : ".";
    }, normalize: function(t) {
      if (e(t), t.length === 0) return ".";
      var i = t.charCodeAt(0) === 47, s = t.charCodeAt(t.length - 1) === 47;
      return (t = f(t, !i)).length !== 0 || i || (t = "."), t.length > 0 && s && (t += "/"), i ? "/" + t : t;
    }, isAbsolute: function(t) {
      return e(t), t.length > 0 && t.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return ".";
      for (var t, i = 0; i < arguments.length; ++i) {
        var s = arguments[i];
        e(s), s.length > 0 && (t === void 0 ? t = s : t += "/" + s);
      }
      return t === void 0 ? "." : y.normalize(t);
    }, relative: function(t, i) {
      if (e(t), e(i), t === i || (t = y.resolve(t)) === (i = y.resolve(i))) return "";
      for (var s = 1; s < t.length && t.charCodeAt(s) === 47; ++s) ;
      for (var u = t.length, d = u - s, c = 1; c < i.length && i.charCodeAt(c) === 47; ++c) ;
      for (var b = i.length - c, A = d < b ? d : b, R = -1, O = 0; O <= A; ++O) {
        if (O === A) {
          if (b > A) {
            if (i.charCodeAt(c + O) === 47) return i.slice(c + O + 1);
            if (O === 0) return i.slice(c + O);
          } else d > A && (t.charCodeAt(s + O) === 47 ? R = O : O === 0 && (R = 0));
          break;
        }
        var I = t.charCodeAt(s + O);
        if (I !== i.charCodeAt(c + O)) break;
        I === 47 && (R = O);
      }
      var D = "";
      for (O = s + R + 1; O <= u; ++O) O !== u && t.charCodeAt(O) !== 47 || (D.length === 0 ? D += ".." : D += "/..");
      return D.length > 0 ? D + i.slice(c + R) : (c += R, i.charCodeAt(c) === 47 && ++c, i.slice(c));
    }, _makeLong: function(t) {
      return t;
    }, dirname: function(t) {
      if (e(t), t.length === 0) return ".";
      for (var i = t.charCodeAt(0), s = i === 47, u = -1, d = !0, c = t.length - 1; c >= 1; --c) if ((i = t.charCodeAt(c)) === 47) {
        if (!d) {
          u = c;
          break;
        }
      } else d = !1;
      return u === -1 ? s ? "/" : "." : s && u === 1 ? "//" : t.slice(0, u);
    }, basename: function(t, i) {
      if (i !== void 0 && typeof i != "string") throw new TypeError('"ext" argument must be a string');
      e(t);
      var s, u = 0, d = -1, c = !0;
      if (i !== void 0 && i.length > 0 && i.length <= t.length) {
        if (i.length === t.length && i === t) return "";
        var b = i.length - 1, A = -1;
        for (s = t.length - 1; s >= 0; --s) {
          var R = t.charCodeAt(s);
          if (R === 47) {
            if (!c) {
              u = s + 1;
              break;
            }
          } else A === -1 && (c = !1, A = s + 1), b >= 0 && (R === i.charCodeAt(b) ? --b == -1 && (d = s) : (b = -1, d = A));
        }
        return u === d ? d = A : d === -1 && (d = t.length), t.slice(u, d);
      }
      for (s = t.length - 1; s >= 0; --s) if (t.charCodeAt(s) === 47) {
        if (!c) {
          u = s + 1;
          break;
        }
      } else d === -1 && (c = !1, d = s + 1);
      return d === -1 ? "" : t.slice(u, d);
    }, extname: function(t) {
      e(t);
      for (var i = -1, s = 0, u = -1, d = !0, c = 0, b = t.length - 1; b >= 0; --b) {
        var A = t.charCodeAt(b);
        if (A !== 47) u === -1 && (d = !1, u = b + 1), A === 46 ? i === -1 ? i = b : c !== 1 && (c = 1) : i !== -1 && (c = -1);
        else if (!d) {
          s = b + 1;
          break;
        }
      }
      return i === -1 || u === -1 || c === 0 || c === 1 && i === u - 1 && i === s + 1 ? "" : t.slice(i, u);
    }, format: function(t) {
      if (t === null || typeof t != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof t);
      return (function(i, s) {
        var u = s.dir || s.root, d = s.base || (s.name || "") + (s.ext || "");
        return u ? u === s.root ? u + d : u + "/" + d : d;
      })(0, t);
    }, parse: function(t) {
      e(t);
      var i = { root: "", dir: "", base: "", ext: "", name: "" };
      if (t.length === 0) return i;
      var s, u = t.charCodeAt(0), d = u === 47;
      d ? (i.root = "/", s = 1) : s = 0;
      for (var c = -1, b = 0, A = -1, R = !0, O = t.length - 1, I = 0; O >= s; --O) if ((u = t.charCodeAt(O)) !== 47) A === -1 && (R = !1, A = O + 1), u === 46 ? c === -1 ? c = O : I !== 1 && (I = 1) : c !== -1 && (I = -1);
      else if (!R) {
        b = O + 1;
        break;
      }
      return c === -1 || A === -1 || I === 0 || I === 1 && c === A - 1 && c === b + 1 ? A !== -1 && (i.base = i.name = b === 0 && d ? t.slice(1, A) : t.slice(b, A)) : (b === 0 && d ? (i.name = t.slice(1, c), i.base = t.slice(1, A)) : (i.name = t.slice(b, c), i.base = t.slice(b, A)), i.ext = t.slice(c, A)), b > 0 ? i.dir = t.slice(0, b - 1) : d && (i.dir = "/"), i;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    y.posix = y, o.exports = y;
  } }, n = {};
  function a(o) {
    var e = n[o];
    if (e !== void 0) return e.exports;
    var f = n[o] = { exports: {} };
    return r[o](f, f.exports, a), f.exports;
  }
  a.d = (o, e) => {
    for (var f in e) a.o(e, f) && !a.o(o, f) && Object.defineProperty(o, f, { enumerable: !0, get: e[f] });
  }, a.o = (o, e) => Object.prototype.hasOwnProperty.call(o, e), a.r = (o) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
  };
  var p = {};
  let l;
  a.r(p), a.d(p, { URI: () => w, Utils: () => de }), typeof process == "object" ? l = process.platform === "win32" : typeof navigator == "object" && (l = navigator.userAgent.indexOf("Windows") >= 0);
  const g = /^\w[\w\d+.-]*$/, T = /^\//, $ = /^\/\//;
  function v(o, e) {
    if (!o.scheme && e) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${o.authority}", path: "${o.path}", query: "${o.query}", fragment: "${o.fragment}"}`);
    if (o.scheme && !g.test(o.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
    if (o.path) {
      if (o.authority) {
        if (!T.test(o.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
      } else if ($.test(o.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
    }
  }
  const h = "", m = "/", C = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  class w {
    static isUri(e) {
      return e instanceof w || !!e && typeof e.authority == "string" && typeof e.fragment == "string" && typeof e.path == "string" && typeof e.query == "string" && typeof e.scheme == "string" && typeof e.fsPath == "string" && typeof e.with == "function" && typeof e.toString == "function";
    }
    scheme;
    authority;
    path;
    query;
    fragment;
    constructor(e, f, y, t, i, s = !1) {
      typeof e == "object" ? (this.scheme = e.scheme || h, this.authority = e.authority || h, this.path = e.path || h, this.query = e.query || h, this.fragment = e.fragment || h) : (this.scheme = /* @__PURE__ */ (function(u, d) {
        return u || d ? u : "file";
      })(e, s), this.authority = f || h, this.path = (function(u, d) {
        switch (u) {
          case "https":
          case "http":
          case "file":
            d ? d[0] !== m && (d = m + d) : d = m;
        }
        return d;
      })(this.scheme, y || h), this.query = t || h, this.fragment = i || h, v(this, s));
    }
    get fsPath() {
      return ke(this);
    }
    with(e) {
      if (!e) return this;
      let { scheme: f, authority: y, path: t, query: i, fragment: s } = e;
      return f === void 0 ? f = this.scheme : f === null && (f = h), y === void 0 ? y = this.authority : y === null && (y = h), t === void 0 ? t = this.path : t === null && (t = h), i === void 0 ? i = this.query : i === null && (i = h), s === void 0 ? s = this.fragment : s === null && (s = h), f === this.scheme && y === this.authority && t === this.path && i === this.query && s === this.fragment ? this : new _(f, y, t, i, s);
    }
    static parse(e, f = !1) {
      const y = C.exec(e);
      return y ? new _(y[2] || h, ae(y[4] || h), ae(y[5] || h), ae(y[7] || h), ae(y[9] || h), f) : new _(h, h, h, h, h);
    }
    static file(e) {
      let f = h;
      if (l && (e = e.replace(/\\/g, m)), e[0] === m && e[1] === m) {
        const y = e.indexOf(m, 2);
        y === -1 ? (f = e.substring(2), e = m) : (f = e.substring(2, y), e = e.substring(y) || m);
      }
      return new _("file", f, e, h, h);
    }
    static from(e) {
      const f = new _(e.scheme, e.authority, e.path, e.query, e.fragment);
      return v(f, !0), f;
    }
    toString(e = !1) {
      return he(this, e);
    }
    toJSON() {
      return this;
    }
    static revive(e) {
      if (e) {
        if (e instanceof w) return e;
        {
          const f = new _(e);
          return f._formatted = e.external, f._fsPath = e._sep === P ? e.fsPath : null, f;
        }
      }
      return e;
    }
  }
  const P = l ? 1 : void 0;
  class _ extends w {
    _formatted = null;
    _fsPath = null;
    get fsPath() {
      return this._fsPath || (this._fsPath = ke(this)), this._fsPath;
    }
    toString(e = !1) {
      return e ? he(this, !0) : (this._formatted || (this._formatted = he(this, !1)), this._formatted);
    }
    toJSON() {
      const e = { $mid: 1 };
      return this._fsPath && (e.fsPath = this._fsPath, e._sep = P), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
    }
  }
  const z = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
  function xe(o, e, f) {
    let y, t = -1;
    for (let i = 0; i < o.length; i++) {
      const s = o.charCodeAt(i);
      if (s >= 97 && s <= 122 || s >= 65 && s <= 90 || s >= 48 && s <= 57 || s === 45 || s === 46 || s === 95 || s === 126 || e && s === 47 || f && s === 91 || f && s === 93 || f && s === 58) t !== -1 && (y += encodeURIComponent(o.substring(t, i)), t = -1), y !== void 0 && (y += o.charAt(i));
      else {
        y === void 0 && (y = o.substr(0, i));
        const u = z[s];
        u !== void 0 ? (t !== -1 && (y += encodeURIComponent(o.substring(t, i)), t = -1), y += u) : t === -1 && (t = i);
      }
    }
    return t !== -1 && (y += encodeURIComponent(o.substring(t))), y !== void 0 ? y : o;
  }
  function nt(o) {
    let e;
    for (let f = 0; f < o.length; f++) {
      const y = o.charCodeAt(f);
      y === 35 || y === 63 ? (e === void 0 && (e = o.substr(0, f)), e += z[y]) : e !== void 0 && (e += o[f]);
    }
    return e !== void 0 ? e : o;
  }
  function ke(o, e) {
    let f;
    return f = o.authority && o.path.length > 1 && o.scheme === "file" ? `//${o.authority}${o.path}` : o.path.charCodeAt(0) === 47 && (o.path.charCodeAt(1) >= 65 && o.path.charCodeAt(1) <= 90 || o.path.charCodeAt(1) >= 97 && o.path.charCodeAt(1) <= 122) && o.path.charCodeAt(2) === 58 ? o.path[1].toLowerCase() + o.path.substr(2) : o.path, l && (f = f.replace(/\//g, "\\")), f;
  }
  function he(o, e) {
    const f = e ? nt : xe;
    let y = "", { scheme: t, authority: i, path: s, query: u, fragment: d } = o;
    if (t && (y += t, y += ":"), (i || t === "file") && (y += m, y += m), i) {
      let c = i.indexOf("@");
      if (c !== -1) {
        const b = i.substr(0, c);
        i = i.substr(c + 1), c = b.lastIndexOf(":"), c === -1 ? y += f(b, !1, !1) : (y += f(b.substr(0, c), !1, !1), y += ":", y += f(b.substr(c + 1), !1, !0)), y += "@";
      }
      i = i.toLowerCase(), c = i.lastIndexOf(":"), c === -1 ? y += f(i, !1, !0) : (y += f(i.substr(0, c), !1, !0), y += i.substr(c));
    }
    if (s) {
      if (s.length >= 3 && s.charCodeAt(0) === 47 && s.charCodeAt(2) === 58) {
        const c = s.charCodeAt(1);
        c >= 65 && c <= 90 && (s = `/${String.fromCharCode(c + 32)}:${s.substr(3)}`);
      } else if (s.length >= 2 && s.charCodeAt(1) === 58) {
        const c = s.charCodeAt(0);
        c >= 65 && c <= 90 && (s = `${String.fromCharCode(c + 32)}:${s.substr(2)}`);
      }
      y += f(s, !0, !1);
    }
    return u && (y += "?", y += f(u, !1, !1)), d && (y += "#", y += e ? d : xe(d, !1, !1)), y;
  }
  function _e(o) {
    try {
      return decodeURIComponent(o);
    } catch {
      return o.length > 3 ? o.substr(0, 3) + _e(o.substr(3)) : o;
    }
  }
  const Le = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  function ae(o) {
    return o.match(Le) ? o.replace(Le, ((e) => _e(e))) : o;
  }
  var Pe = a(975);
  const U = Pe.posix || Pe, ie = "/";
  var de;
  (function(o) {
    o.joinPath = function(e, ...f) {
      return e.with({ path: U.join(e.path, ...f) });
    }, o.resolvePath = function(e, ...f) {
      let y = e.path, t = !1;
      y[0] !== ie && (y = ie + y, t = !0);
      let i = U.resolve(y, ...f);
      return t && i[0] === ie && !e.authority && (i = i.substring(1)), e.with({ path: i });
    }, o.dirname = function(e) {
      if (e.path.length === 0 || e.path === ie) return e;
      let f = U.dirname(e.path);
      return f.length === 1 && f.charCodeAt(0) === 46 && (f = ""), e.with({ path: f });
    }, o.basename = function(e) {
      return U.basename(e.path);
    }, o.extname = function(e) {
      return U.extname(e.path);
    };
  })(de || (de = {})), et = p;
})();
const { URI: ye, Utils: re } = et;
var Je;
(function(r) {
  r.basename = re.basename, r.dirname = re.dirname, r.extname = re.extname, r.joinPath = re.joinPath, r.resolvePath = re.resolvePath;
  const n = typeof process == "object" && process?.platform === "win32";
  function a(T, $) {
    return T?.toString() === $?.toString();
  }
  r.equals = a;
  function p(T, $) {
    const v = typeof T == "string" ? ye.parse(T).path : T.path, h = typeof $ == "string" ? ye.parse($).path : $.path, m = v.split("/").filter((z) => z.length > 0), C = h.split("/").filter((z) => z.length > 0);
    if (n) {
      const z = /^[A-Z]:$/;
      if (m[0] && z.test(m[0]) && (m[0] = m[0].toLowerCase()), C[0] && z.test(C[0]) && (C[0] = C[0].toLowerCase()), m[0] !== C[0])
        return h.substring(1);
    }
    let w = 0;
    for (; w < m.length && m[w] === C[w]; w++)
      ;
    const P = "../".repeat(m.length - w), _ = C.slice(w).join("/");
    return P + _;
  }
  r.relative = p;
  function l(T) {
    return ye.parse(T.toString()).toString();
  }
  r.normalize = l;
  function g(T, $) {
    let v = typeof T == "string" ? T : T.path, h = typeof $ == "string" ? $ : $.path;
    return h.charAt(h.length - 1) === "/" && (h = h.slice(0, -1)), v.charAt(v.length - 1) === "/" && (v = v.slice(0, -1)), h === v ? !0 : h.length < v.length || h.charAt(v.length) !== "/" ? !1 : h.startsWith(v);
  }
  r.contains = g;
})(Je || (Je = {}));
var Re;
(function(r) {
  r[r.Changed = 0] = "Changed", r[r.Parsed = 1] = "Parsed", r[r.IndexedContent = 2] = "IndexedContent", r[r.ComputedScopes = 3] = "ComputedScopes", r[r.Linked = 4] = "Linked", r[r.IndexedReferences = 5] = "IndexedReferences", r[r.Validated = 6] = "Validated";
})(Re || (Re = {}));
function we(r) {
  return r ? { range: r.range, offset: r.offset, length: r.length } : {};
}
function tt(r) {
  return typeof r == "string" ? JSON.stringify(r) : String(r);
}
function yt(r) {
  const n = r.renderScalar ?? tt, a = r.labelNode ?? (($) => $.$type);
  function p($, v) {
    const h = [];
    for (const [m, C] of Object.entries($)) {
      if (m.startsWith("$"))
        continue;
      const w = r.customProperty?.(
        $,
        m,
        C,
        v,
        T
      );
      if (w) {
        h.push(...w);
        continue;
      }
      if (Array.isArray(C)) {
        C.forEach((P, _) => {
          h.push(
            l(
              $,
              P,
              `${v}.${m}.${_}`,
              m,
              _
            )
          );
        });
        continue;
      }
      C != null && h.push(
        l($, C, `${v}.${m}`, m, void 0)
      );
    }
    return h;
  }
  function l($, v, h, m, C) {
    return at(v) ? {
      id: h,
      kind: "reference",
      label: m,
      property: m,
      index: C,
      value: v.$refText,
      ...we(v.$refNode),
      children: []
    } : Qe(v) ? g(v, h, m, C) : {
      id: h,
      kind: "scalar",
      label: m,
      property: m,
      index: C,
      value: n(v),
      // Datatype rules are plain strings with no AST node of their own,
      // but they do have a CST node, so a name row can still be clicked
      // through to its source.
      ...we(
        ct($.$cstNode, m, C)
      ),
      children: []
    };
  }
  function g($, v, h, m) {
    return {
      id: v,
      kind: "node",
      label: a($),
      property: h,
      index: m,
      ...we($.$cstNode),
      children: p($, v)
    };
  }
  const T = { serializeNode: g };
  return T;
}
function rt(r, n = {}) {
  const a = r.parseResult.value, { serializeNode: p } = yt(n);
  return {
    uri: r.uri.toString(),
    root: a ? p(a, "root") : void 0,
    parserErrors: r.parseResult.parserErrors.length
  };
}
function ht(r, n, a = {}) {
  r.onRequest(
    Ze,
    async (p, l) => {
      const g = ye.parse(p.textDocument.uri), T = await n.workspace.LangiumDocuments.getOrCreateDocument(g);
      return await n.workspace.DocumentBuilder.waitUntil(
        Re.Parsed,
        g,
        l
      ), rt(T, a);
    }
  );
}
const dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AST_REQUEST: Ze,
  buildAstTree: rt,
  registerAstRequest: ht,
  renderScalar: tt
}, Symbol.toStringTag, { value: "Module" })), Ke = "org.eclipse.daanse.board.app.lib.lsp.server", mt = "0.0.1-next.1";
async function Tt(r) {
  const n = globalThis.__tsm__;
  if (!n)
    throw new Error(`${Ke}: tsm runtime is not initialized`);
  n.register(Ke, dt, mt, "lib.lsp.server"), await void 0;
}
async function $t(r) {
  await void 0;
}
export {
  At as AST_REQUEST,
  Tt as activate,
  rt as buildAstTree,
  $t as deactivate,
  ht as registerAstRequest,
  tt as renderScalar
};
