import { ViewPlugin as ae, EditorView as gt, showDialog as oe, hoverTooltip as mt, keymap as ce, getDialog as kt, showPanel as xt, showTooltip as bt } from "@codemirror/view";
import { ChangeSet as ee, MapMode as $e, StateField as Fe, StateEffect as W, EditorState as wt, Facet as vt, Prec as yt } from "@codemirror/state";
import { language as ue, indentUnit as Tt, getIndentUnit as St, highlightingFor as Be } from "@codemirror/language";
import { highlightCode as Ne } from "@lezer/highlight";
import { autocompletion as _e, snippet as Rt, insertCompletionText as Ct } from "@codemirror/autocomplete";
import { setDiagnostics as Pt } from "@codemirror/lint";
function pe() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
var L = pe();
function Oe(t) {
  L = t;
}
var B = { exec: () => null };
function g(t, e = "") {
  let n = typeof t == "string" ? t : t.source;
  const i = {
    replace: (r, s) => {
      let l = typeof s == "string" ? s : s.source;
      return l = l.replace(T.caret, "$1"), n = n.replace(r, l), i;
    },
    getRegex: () => new RegExp(n, e)
  };
  return i;
}
var T = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (t) => new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}#`),
  htmlBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}<(?:[a-z].*>|!--)`, "i")
}, $t = /^(?:[ \t]*(?:\n|$))+/, _t = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Dt = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, O = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, At = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, he = /(?:[*+-]|\d{1,9}[.)])/, je = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, He = g(je).replace(/bull/g, he).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), qt = g(je).replace(/bull/g, he).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), fe = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, zt = /^[^\n]+/, de = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Et = g(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", de).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Lt = g(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, he).getRegex(), J = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ge = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, It = g(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", ge).replace("tag", J).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ze = g(fe).replace("hr", O).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", J).getRegex(), Mt = g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ze).getRegex(), me = {
  blockquote: Mt,
  code: _t,
  def: Et,
  fences: Dt,
  heading: At,
  hr: O,
  html: It,
  lheading: He,
  list: Lt,
  newline: $t,
  paragraph: Ze,
  table: B,
  text: zt
}, De = g(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", O).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", J).getRegex(), Ft = {
  ...me,
  lheading: qt,
  table: De,
  paragraph: g(fe).replace("hr", O).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", De).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", J).getRegex()
}, Bt = {
  ...me,
  html: g(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", ge).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: B,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: g(fe).replace("hr", O).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", He).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Nt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ot = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ge = /^( {2,}|\\)\n(?!\s*$)/, jt = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, X = /[\p{P}\p{S}]/u, ke = /[\s\p{P}\p{S}]/u, Ve = /[^\s\p{P}\p{S}]/u, Ht = g(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ke).getRegex(), Ke = /(?!~)[\p{P}\p{S}]/u, Zt = /(?!~)[\s\p{P}\p{S}]/u, Gt = /(?:[^\s\p{P}\p{S}]|~)/u, Vt = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Qe = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Kt = g(Qe, "u").replace(/punct/g, X).getRegex(), Qt = g(Qe, "u").replace(/punct/g, Ke).getRegex(), Ue = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ut = g(Ue, "gu").replace(/notPunctSpace/g, Ve).replace(/punctSpace/g, ke).replace(/punct/g, X).getRegex(), Wt = g(Ue, "gu").replace(/notPunctSpace/g, Gt).replace(/punctSpace/g, Zt).replace(/punct/g, Ke).getRegex(), Jt = g(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, Ve).replace(/punctSpace/g, ke).replace(/punct/g, X).getRegex(), Xt = g(/\\(punct)/, "gu").replace(/punct/g, X).getRegex(), Yt = g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), en = g(ge).replace("(?:-->|$)", "-->").getRegex(), tn = g(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", en).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), G = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, nn = g(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", G).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), We = g(/^!?\[(label)\]\[(ref)\]/).replace("label", G).replace("ref", de).getRegex(), Je = g(/^!?\[(ref)\](?:\[\])?/).replace("ref", de).getRegex(), rn = g("reflink|nolink(?!\\()", "g").replace("reflink", We).replace("nolink", Je).getRegex(), xe = {
  _backpedal: B,
  // only used for GFM url
  anyPunctuation: Xt,
  autolink: Yt,
  blockSkip: Vt,
  br: Ge,
  code: Ot,
  del: B,
  emStrongLDelim: Kt,
  emStrongRDelimAst: Ut,
  emStrongRDelimUnd: Jt,
  escape: Nt,
  link: nn,
  nolink: Je,
  punctuation: Ht,
  reflink: We,
  reflinkSearch: rn,
  tag: tn,
  text: jt,
  url: B
}, sn = {
  ...xe,
  link: g(/^!?\[(label)\]\((.*?)\)/).replace("label", G).getRegex(),
  reflink: g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", G).getRegex()
}, te = {
  ...xe,
  emStrongRDelimAst: Wt,
  emStrongLDelim: Qt,
  url: g(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, ln = {
  ...te,
  br: g(Ge).replace("{2,}", "*").getRegex(),
  text: g(te.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, j = {
  normal: me,
  gfm: Ft,
  pedantic: Bt
}, M = {
  normal: xe,
  gfm: te,
  breaks: ln,
  pedantic: sn
}, an = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ae = (t) => an[t];
function $(t, e) {
  if (e) {
    if (T.escapeTest.test(t))
      return t.replace(T.escapeReplace, Ae);
  } else if (T.escapeTestNoEncode.test(t))
    return t.replace(T.escapeReplaceNoEncode, Ae);
  return t;
}
function qe(t) {
  try {
    t = encodeURI(t).replace(T.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function ze(t, e) {
  const n = t.replace(T.findPipe, (s, l, a) => {
    let c = !1, o = l;
    for (; --o >= 0 && a[o] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), i = n.split(T.splitPipe);
  let r = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i.at(-1)?.trim() && i.pop(), e)
    if (i.length > e)
      i.splice(e);
    else
      for (; i.length < e; ) i.push("");
  for (; r < i.length; r++)
    i[r] = i[r].trim().replace(T.slashPipe, "|");
  return i;
}
function F(t, e, n) {
  const i = t.length;
  if (i === 0)
    return "";
  let r = 0;
  for (; r < i && t.charAt(i - r - 1) === e; )
    r++;
  return t.slice(0, i - r);
}
function on(t, e) {
  if (t.indexOf(e[1]) === -1)
    return -1;
  let n = 0;
  for (let i = 0; i < t.length; i++)
    if (t[i] === "\\")
      i++;
    else if (t[i] === e[0])
      n++;
    else if (t[i] === e[1] && (n--, n < 0))
      return i;
  return n > 0 ? -2 : -1;
}
function Ee(t, e, n, i, r) {
  const s = e.href, l = e.title || null, a = t[1].replace(r.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  const c = {
    type: t[0].charAt(0) === "!" ? "image" : "link",
    raw: n,
    href: s,
    title: l,
    text: a,
    tokens: i.inlineTokens(a)
  };
  return i.state.inLink = !1, c;
}
function cn(t, e, n) {
  const i = t.match(n.other.indentCodeCompensation);
  if (i === null)
    return e;
  const r = i[1];
  return e.split(`
`).map((s) => {
    const l = s.match(n.other.beginningSpace);
    if (l === null)
      return s;
    const [a] = l;
    return a.length >= r.length ? s.slice(r.length) : s;
  }).join(`
`);
}
var V = class {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(t) {
    this.options = t || L;
  }
  space(t) {
    const e = this.rules.block.newline.exec(t);
    if (e && e[0].length > 0)
      return {
        type: "space",
        raw: e[0]
      };
  }
  code(t) {
    const e = this.rules.block.code.exec(t);
    if (e) {
      const n = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: e[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? n : F(n, `
`)
      };
    }
  }
  fences(t) {
    const e = this.rules.block.fences.exec(t);
    if (e) {
      const n = e[0], i = cn(n, e[3] || "", this.rules);
      return {
        type: "code",
        raw: n,
        lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
        text: i
      };
    }
  }
  heading(t) {
    const e = this.rules.block.heading.exec(t);
    if (e) {
      let n = e[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        const i = F(n, "#");
        (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) && (n = i.trim());
      }
      return {
        type: "heading",
        raw: e[0],
        depth: e[1].length,
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  hr(t) {
    const e = this.rules.block.hr.exec(t);
    if (e)
      return {
        type: "hr",
        raw: F(e[0], `
`)
      };
  }
  blockquote(t) {
    const e = this.rules.block.blockquote.exec(t);
    if (e) {
      let n = F(e[0], `
`).split(`
`), i = "", r = "";
      const s = [];
      for (; n.length > 0; ) {
        let l = !1;
        const a = [];
        let c;
        for (c = 0; c < n.length; c++)
          if (this.rules.other.blockquoteStart.test(n[c]))
            a.push(n[c]), l = !0;
          else if (!l)
            a.push(n[c]);
          else
            break;
        n = n.slice(c);
        const o = a.join(`
`), p = o.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        i = i ? `${i}
${o}` : o, r = r ? `${r}
${p}` : p;
        const f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(p, s, !0), this.lexer.state.top = f, n.length === 0)
          break;
        const h = s.at(-1);
        if (h?.type === "code")
          break;
        if (h?.type === "blockquote") {
          const u = h, d = u.raw + `
` + n.join(`
`), k = this.blockquote(d);
          s[s.length - 1] = k, i = i.substring(0, i.length - u.raw.length) + k.raw, r = r.substring(0, r.length - u.text.length) + k.text;
          break;
        } else if (h?.type === "list") {
          const u = h, d = u.raw + `
` + n.join(`
`), k = this.list(d);
          s[s.length - 1] = k, i = i.substring(0, i.length - h.raw.length) + k.raw, r = r.substring(0, r.length - u.raw.length) + k.raw, n = d.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: i,
        tokens: s,
        text: r
      };
    }
  }
  list(t) {
    let e = this.rules.block.list.exec(t);
    if (e) {
      let n = e[1].trim();
      const i = n.length > 1, r = {
        type: "list",
        raw: "",
        ordered: i,
        start: i ? +n.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = i ? n : "[*+-]");
      const s = this.rules.other.listItemRegex(n);
      let l = !1;
      for (; t; ) {
        let c = !1, o = "", p = "";
        if (!(e = s.exec(t)) || this.rules.block.hr.test(t))
          break;
        o = e[0], t = t.substring(o.length);
        let f = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (w) => " ".repeat(3 * w.length)), h = t.split(`
`, 1)[0], u = !f.trim(), d = 0;
        if (this.options.pedantic ? (d = 2, p = f.trimStart()) : u ? d = e[1].length + 1 : (d = e[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, p = f.slice(d), d += e[1].length), u && this.rules.other.blankLine.test(h) && (o += h + `
`, t = t.substring(h.length + 1), c = !0), !c) {
          const w = this.rules.other.nextBulletRegex(d), S = this.rules.other.hrRegex(d), v = this.rules.other.fencesBeginRegex(d), y = this.rules.other.headingBeginRegex(d), P = this.rules.other.htmlBeginRegex(d);
          for (; t; ) {
            const R = t.split(`
`, 1)[0];
            let C;
            if (h = R, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), C = h) : C = h.replace(this.rules.other.tabCharGlobal, "    "), v.test(h) || y.test(h) || P.test(h) || w.test(h) || S.test(h))
              break;
            if (C.search(this.rules.other.nonSpaceChar) >= d || !h.trim())
              p += `
` + C.slice(d);
            else {
              if (u || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || v.test(f) || y.test(f) || S.test(f))
                break;
              p += `
` + h;
            }
            !u && !h.trim() && (u = !0), o += R + `
`, t = t.substring(R.length + 1), f = C.slice(d);
          }
        }
        r.loose || (l ? r.loose = !0 : this.rules.other.doubleBlankLine.test(o) && (l = !0));
        let k = null, x;
        this.options.gfm && (k = this.rules.other.listIsTask.exec(p), k && (x = k[0] !== "[ ] ", p = p.replace(this.rules.other.listReplaceTask, ""))), r.items.push({
          type: "list_item",
          raw: o,
          task: !!k,
          checked: x,
          loose: !1,
          text: p,
          tokens: []
        }), r.raw += o;
      }
      const a = r.items.at(-1);
      if (a)
        a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else
        return;
      r.raw = r.raw.trimEnd();
      for (let c = 0; c < r.items.length; c++)
        if (this.lexer.state.top = !1, r.items[c].tokens = this.lexer.blockTokens(r.items[c].text, []), !r.loose) {
          const o = r.items[c].tokens.filter((f) => f.type === "space"), p = o.length > 0 && o.some((f) => this.rules.other.anyLine.test(f.raw));
          r.loose = p;
        }
      if (r.loose)
        for (let c = 0; c < r.items.length; c++)
          r.items[c].loose = !0;
      return r;
    }
  }
  html(t) {
    const e = this.rules.block.html.exec(t);
    if (e)
      return {
        type: "html",
        block: !0,
        raw: e[0],
        pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
        text: e[0]
      };
  }
  def(t) {
    const e = this.rules.block.def.exec(t);
    if (e) {
      const n = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), i = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return {
        type: "def",
        tag: n,
        raw: e[0],
        href: i,
        title: r
      };
    }
  }
  table(t) {
    const e = this.rules.block.table.exec(t);
    if (!e || !this.rules.other.tableDelimiter.test(e[2]))
      return;
    const n = ze(e[1]), i = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
      type: "table",
      raw: e[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === i.length) {
      for (const l of i)
        this.rules.other.tableAlignRight.test(l) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? s.align.push("left") : s.align.push(null);
      for (let l = 0; l < n.length; l++)
        s.header.push({
          text: n[l],
          tokens: this.lexer.inline(n[l]),
          header: !0,
          align: s.align[l]
        });
      for (const l of r)
        s.rows.push(ze(l, s.header.length).map((a, c) => ({
          text: a,
          tokens: this.lexer.inline(a),
          header: !1,
          align: s.align[c]
        })));
      return s;
    }
  }
  lheading(t) {
    const e = this.rules.block.lheading.exec(t);
    if (e)
      return {
        type: "heading",
        raw: e[0],
        depth: e[2].charAt(0) === "=" ? 1 : 2,
        text: e[1],
        tokens: this.lexer.inline(e[1])
      };
  }
  paragraph(t) {
    const e = this.rules.block.paragraph.exec(t);
    if (e) {
      const n = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return {
        type: "paragraph",
        raw: e[0],
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  text(t) {
    const e = this.rules.block.text.exec(t);
    if (e)
      return {
        type: "text",
        raw: e[0],
        text: e[0],
        tokens: this.lexer.inline(e[0])
      };
  }
  escape(t) {
    const e = this.rules.inline.escape.exec(t);
    if (e)
      return {
        type: "escape",
        raw: e[0],
        text: e[1]
      };
  }
  tag(t) {
    const e = this.rules.inline.tag.exec(t);
    if (e)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: e[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: e[0]
      };
  }
  link(t) {
    const e = this.rules.inline.link.exec(t);
    if (e) {
      const n = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n))
          return;
        const s = F(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0)
          return;
      } else {
        const s = on(e[2], "()");
        if (s === -2)
          return;
        if (s > -1) {
          const a = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + s;
          e[2] = e[2].substring(0, s), e[0] = e[0].substring(0, a).trim(), e[3] = "";
        }
      }
      let i = e[2], r = "";
      if (this.options.pedantic) {
        const s = this.rules.other.pedanticHrefTitle.exec(i);
        s && (i = s[1], r = s[3]);
      } else
        r = e[3] ? e[3].slice(1, -1) : "";
      return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? i = i.slice(1) : i = i.slice(1, -1)), Ee(e, {
        href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
        title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
      }, e[0], this.lexer, this.rules);
    }
  }
  reflink(t, e) {
    let n;
    if ((n = this.rules.inline.reflink.exec(t)) || (n = this.rules.inline.nolink.exec(t))) {
      const i = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = e[i.toLowerCase()];
      if (!r) {
        const s = n[0].charAt(0);
        return {
          type: "text",
          raw: s,
          text: s
        };
      }
      return Ee(n, r, n[0], this.lexer, this.rules);
    }
  }
  emStrong(t, e, n = "") {
    let i = this.rules.inline.emStrongLDelim.exec(t);
    if (!i || i[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(i[1] || i[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const s = [...i[0]].length - 1;
      let l, a, c = s, o = 0;
      const p = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (p.lastIndex = 0, e = e.slice(-1 * t.length + s); (i = p.exec(e)) != null; ) {
        if (l = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !l) continue;
        if (a = [...l].length, i[3] || i[4]) {
          c += a;
          continue;
        } else if ((i[5] || i[6]) && s % 3 && !((s + a) % 3)) {
          o += a;
          continue;
        }
        if (c -= a, c > 0) continue;
        a = Math.min(a, a + c + o);
        const f = [...i[0]][0].length, h = t.slice(0, s + i.index + f + a);
        if (Math.min(s, a) % 2) {
          const d = h.slice(1, -1);
          return {
            type: "em",
            raw: h,
            text: d,
            tokens: this.lexer.inlineTokens(d)
          };
        }
        const u = h.slice(2, -2);
        return {
          type: "strong",
          raw: h,
          text: u,
          tokens: this.lexer.inlineTokens(u)
        };
      }
    }
  }
  codespan(t) {
    const e = this.rules.inline.code.exec(t);
    if (e) {
      let n = e[2].replace(this.rules.other.newLineCharGlobal, " ");
      const i = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return i && r && (n = n.substring(1, n.length - 1)), {
        type: "codespan",
        raw: e[0],
        text: n
      };
    }
  }
  br(t) {
    const e = this.rules.inline.br.exec(t);
    if (e)
      return {
        type: "br",
        raw: e[0]
      };
  }
  del(t) {
    const e = this.rules.inline.del.exec(t);
    if (e)
      return {
        type: "del",
        raw: e[0],
        text: e[2],
        tokens: this.lexer.inlineTokens(e[2])
      };
  }
  autolink(t) {
    const e = this.rules.inline.autolink.exec(t);
    if (e) {
      let n, i;
      return e[2] === "@" ? (n = e[1], i = "mailto:" + n) : (n = e[1], i = n), {
        type: "link",
        raw: e[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(t) {
    let e;
    if (e = this.rules.inline.url.exec(t)) {
      let n, i;
      if (e[2] === "@")
        n = e[0], i = "mailto:" + n;
      else {
        let r;
        do
          r = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (r !== e[0]);
        n = e[0], e[1] === "www." ? i = "http://" + e[0] : i = e[0];
      }
      return {
        type: "link",
        raw: e[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  inlineText(t) {
    const e = this.rules.inline.text.exec(t);
    if (e) {
      const n = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: e[0],
        text: e[0],
        escaped: n
      };
    }
  }
}, _ = class ne {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || L, this.options.tokenizer = this.options.tokenizer || new V(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: T,
      block: j.normal,
      inline: M.normal
    };
    this.options.pedantic ? (n.block = j.pedantic, n.inline = M.pedantic) : this.options.gfm && (n.block = j.gfm, this.options.breaks ? n.inline = M.breaks : n.inline = M.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: j,
      inline: M
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, n) {
    return new ne(n).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, n) {
    return new ne(n).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(T.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const i = this.inlineQueue[n];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, n = [], i = !1) {
    for (this.options.pedantic && (e = e.replace(T.tabCharGlobal, "    ").replace(T.spaceLine, "")); e; ) {
      let r;
      if (this.options.extensions?.block?.some((l) => (r = l.call({ lexer: this }, e, n)) ? (e = e.substring(r.raw.length), n.push(r), !0) : !1))
        continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        const l = n.at(-1);
        r.raw.length === 1 && l !== void 0 ? l.raw += `
` : n.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        const l = n.at(-1);
        l?.type === "paragraph" || l?.type === "text" ? (l.raw += `
` + r.raw, l.text += `
` + r.text, this.inlineQueue.at(-1).src = l.text) : n.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        const l = n.at(-1);
        l?.type === "paragraph" || l?.type === "text" ? (l.raw += `
` + r.raw, l.text += `
` + r.raw, this.inlineQueue.at(-1).src = l.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
          href: r.href,
          title: r.title
        });
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), n.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), n.push(r);
        continue;
      }
      let s = e;
      if (this.options.extensions?.startBlock) {
        let l = 1 / 0;
        const a = e.slice(1);
        let c;
        this.options.extensions.startBlock.forEach((o) => {
          c = o.call({ lexer: this }, a), typeof c == "number" && c >= 0 && (l = Math.min(l, c));
        }), l < 1 / 0 && l >= 0 && (s = e.substring(0, l + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(s))) {
        const l = n.at(-1);
        i && l?.type === "paragraph" ? (l.raw += `
` + r.raw, l.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : n.push(r), i = s.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        const l = n.at(-1);
        l?.type === "text" ? (l.raw += `
` + r.raw, l.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : n.push(r);
        continue;
      }
      if (e) {
        const l = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(l);
          break;
        } else
          throw new Error(l);
      }
    }
    return this.state.top = !0, n;
  }
  inline(e, n = []) {
    return this.inlineQueue.push({ src: e, tokens: n }), n;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, n = []) {
    let i = e, r = null;
    if (this.tokens.links) {
      const a = Object.keys(this.tokens.links);
      if (a.length > 0)
        for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; )
          a.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; )
      i = i.slice(0, r.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; )
      i = i.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let s = !1, l = "";
    for (; e; ) {
      s || (l = ""), s = !1;
      let a;
      if (this.options.extensions?.inline?.some((o) => (a = o.call({ lexer: this }, e, n)) ? (e = e.substring(a.raw.length), n.push(a), !0) : !1))
        continue;
      if (a = this.tokenizer.escape(e)) {
        e = e.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.tag(e)) {
        e = e.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.link(e)) {
        e = e.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(a.raw.length);
        const o = n.at(-1);
        a.type === "text" && o?.type === "text" ? (o.raw += a.raw, o.text += a.text) : n.push(a);
        continue;
      }
      if (a = this.tokenizer.emStrong(e, i, l)) {
        e = e.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.codespan(e)) {
        e = e.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.br(e)) {
        e = e.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.del(e)) {
        e = e.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.autolink(e)) {
        e = e.substring(a.raw.length), n.push(a);
        continue;
      }
      if (!this.state.inLink && (a = this.tokenizer.url(e))) {
        e = e.substring(a.raw.length), n.push(a);
        continue;
      }
      let c = e;
      if (this.options.extensions?.startInline) {
        let o = 1 / 0;
        const p = e.slice(1);
        let f;
        this.options.extensions.startInline.forEach((h) => {
          f = h.call({ lexer: this }, p), typeof f == "number" && f >= 0 && (o = Math.min(o, f));
        }), o < 1 / 0 && o >= 0 && (c = e.substring(0, o + 1));
      }
      if (a = this.tokenizer.inlineText(c)) {
        e = e.substring(a.raw.length), a.raw.slice(-1) !== "_" && (l = a.raw.slice(-1)), s = !0;
        const o = n.at(-1);
        o?.type === "text" ? (o.raw += a.raw, o.text += a.text) : n.push(a);
        continue;
      }
      if (e) {
        const o = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(o);
          break;
        } else
          throw new Error(o);
      }
    }
    return n;
  }
}, K = class {
  options;
  parser;
  // set by the parser
  constructor(t) {
    this.options = t || L;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: e, escaped: n }) {
    const i = (e || "").match(T.notSpaceStart)?.[0], r = t.replace(T.endingNewline, "") + `
`;
    return i ? '<pre><code class="language-' + $(i) + '">' + (n ? r : $(r, !0)) + `</code></pre>
` : "<pre><code>" + (n ? r : $(r, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  heading({ tokens: t, depth: e }) {
    return `<h${e}>${this.parser.parseInline(t)}</h${e}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    const e = t.ordered, n = t.start;
    let i = "";
    for (let l = 0; l < t.items.length; l++) {
      const a = t.items[l];
      i += this.listitem(a);
    }
    const r = e ? "ol" : "ul", s = e && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + s + `>
` + i + "</" + r + `>
`;
  }
  listitem(t) {
    let e = "";
    if (t.task) {
      const n = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = n + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = n + " " + $(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
        type: "text",
        raw: n + " ",
        text: n + " ",
        escaped: !0
      }) : e += n + " ";
    }
    return e += this.parser.parse(t.tokens, !!t.loose), `<li>${e}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let e = "", n = "";
    for (let r = 0; r < t.header.length; r++)
      n += this.tablecell(t.header[r]);
    e += this.tablerow({ text: n });
    let i = "";
    for (let r = 0; r < t.rows.length; r++) {
      const s = t.rows[r];
      n = "";
      for (let l = 0; l < s.length; l++)
        n += this.tablecell(s[l]);
      i += this.tablerow({ text: n });
    }
    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + i + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    const e = this.parser.parseInline(t.tokens), n = t.header ? "th" : "td";
    return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${$(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: e, tokens: n }) {
    const i = this.parser.parseInline(n), r = qe(t);
    if (r === null)
      return i;
    t = r;
    let s = '<a href="' + t + '"';
    return e && (s += ' title="' + $(e) + '"'), s += ">" + i + "</a>", s;
  }
  image({ href: t, title: e, text: n, tokens: i }) {
    i && (n = this.parser.parseInline(i, this.parser.textRenderer));
    const r = qe(t);
    if (r === null)
      return $(n);
    t = r;
    let s = `<img src="${t}" alt="${n}"`;
    return e && (s += ` title="${$(e)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : $(t.text);
  }
}, be = class {
  // no need for block level renderers
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}, D = class ie {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || L, this.options.renderer = this.options.renderer || new K(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new be();
  }
  /**
   * Static Parse Method
   */
  static parse(e, n) {
    return new ie(n).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, n) {
    return new ie(n).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, n = !0) {
    let i = "";
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      if (this.options.extensions?.renderers?.[s.type]) {
        const a = s, c = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          i += c || "";
          continue;
        }
      }
      const l = s;
      switch (l.type) {
        case "space": {
          i += this.renderer.space(l);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(l);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(l);
          continue;
        }
        case "code": {
          i += this.renderer.code(l);
          continue;
        }
        case "table": {
          i += this.renderer.table(l);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          i += this.renderer.list(l);
          continue;
        }
        case "html": {
          i += this.renderer.html(l);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(l);
          continue;
        }
        case "text": {
          let a = l, c = this.renderer.text(a);
          for (; r + 1 < e.length && e[r + 1].type === "text"; )
            a = e[++r], c += `
` + this.renderer.text(a);
          n ? i += this.renderer.paragraph({
            type: "paragraph",
            raw: c,
            text: c,
            tokens: [{ type: "text", raw: c, text: c, escaped: !0 }]
          }) : i += c;
          continue;
        }
        default: {
          const a = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, n = this.renderer) {
    let i = "";
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      if (this.options.extensions?.renderers?.[s.type]) {
        const a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          i += a || "";
          continue;
        }
      }
      const l = s;
      switch (l.type) {
        case "escape": {
          i += n.text(l);
          break;
        }
        case "html": {
          i += n.html(l);
          break;
        }
        case "link": {
          i += n.link(l);
          break;
        }
        case "image": {
          i += n.image(l);
          break;
        }
        case "strong": {
          i += n.strong(l);
          break;
        }
        case "em": {
          i += n.em(l);
          break;
        }
        case "codespan": {
          i += n.codespan(l);
          break;
        }
        case "br": {
          i += n.br(l);
          break;
        }
        case "del": {
          i += n.del(l);
          break;
        }
        case "text": {
          i += n.text(l);
          break;
        }
        default: {
          const a = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
}, H = class {
  options;
  block;
  constructor(t) {
    this.options = t || L;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? _.lex : _.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? D.parse : D.parseInline;
  }
}, Xe = class {
  defaults = pe();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = D;
  Renderer = K;
  TextRenderer = be;
  Lexer = _;
  Tokenizer = V;
  Hooks = H;
  constructor(...t) {
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, e) {
    let n = [];
    for (const i of t)
      switch (n = n.concat(e.call(this, i)), i.type) {
        case "table": {
          const r = i;
          for (const s of r.header)
            n = n.concat(this.walkTokens(s.tokens, e));
          for (const s of r.rows)
            for (const l of s)
              n = n.concat(this.walkTokens(l.tokens, e));
          break;
        }
        case "list": {
          const r = i;
          n = n.concat(this.walkTokens(r.items, e));
          break;
        }
        default: {
          const r = i;
          this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((s) => {
            const l = r[s].flat(1 / 0);
            n = n.concat(this.walkTokens(l, e));
          }) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, e)));
        }
      }
    return n;
  }
  use(...t) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((n) => {
      const i = { ...n };
      if (i.async = this.defaults.async || i.async || !1, n.extensions && (n.extensions.forEach((r) => {
        if (!r.name)
          throw new Error("extension name required");
        if ("renderer" in r) {
          const s = e.renderers[r.name];
          s ? e.renderers[r.name] = function(...l) {
            let a = r.renderer.apply(this, l);
            return a === !1 && (a = s.apply(this, l)), a;
          } : e.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const s = e[r.level];
          s ? s.unshift(r.tokenizer) : e[r.level] = [r.tokenizer], r.start && (r.level === "block" ? e.startBlock ? e.startBlock.push(r.start) : e.startBlock = [r.start] : r.level === "inline" && (e.startInline ? e.startInline.push(r.start) : e.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (e.childTokens[r.name] = r.childTokens);
      }), i.extensions = e), n.renderer) {
        const r = this.defaults.renderer || new K(this.defaults);
        for (const s in n.renderer) {
          if (!(s in r))
            throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s))
            continue;
          const l = s, a = n.renderer[l], c = r[l];
          r[l] = (...o) => {
            let p = a.apply(r, o);
            return p === !1 && (p = c.apply(r, o)), p || "";
          };
        }
        i.renderer = r;
      }
      if (n.tokenizer) {
        const r = this.defaults.tokenizer || new V(this.defaults);
        for (const s in n.tokenizer) {
          if (!(s in r))
            throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s))
            continue;
          const l = s, a = n.tokenizer[l], c = r[l];
          r[l] = (...o) => {
            let p = a.apply(r, o);
            return p === !1 && (p = c.apply(r, o)), p;
          };
        }
        i.tokenizer = r;
      }
      if (n.hooks) {
        const r = this.defaults.hooks || new H();
        for (const s in n.hooks) {
          if (!(s in r))
            throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s))
            continue;
          const l = s, a = n.hooks[l], c = r[l];
          H.passThroughHooks.has(s) ? r[l] = (o) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(r, o)).then((f) => c.call(r, f));
            const p = a.call(r, o);
            return c.call(r, p);
          } : r[l] = (...o) => {
            let p = a.apply(r, o);
            return p === !1 && (p = c.apply(r, o)), p;
          };
        }
        i.hooks = r;
      }
      if (n.walkTokens) {
        const r = this.defaults.walkTokens, s = n.walkTokens;
        i.walkTokens = function(l) {
          let a = [];
          return a.push(s.call(this, l)), r && (a = a.concat(r.call(this, l))), a;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, e) {
    return _.lex(t, e ?? this.defaults);
  }
  parser(t, e) {
    return D.parse(t, e ?? this.defaults);
  }
  parseMarkdown(t) {
    return (n, i) => {
      const r = { ...i }, s = { ...this.defaults, ...r }, l = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === !0 && r.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      s.hooks && (s.hooks.options = s, s.hooks.block = t);
      const a = s.hooks ? s.hooks.provideLexer() : t ? _.lex : _.lexInline, c = s.hooks ? s.hooks.provideParser() : t ? D.parse : D.parseInline;
      if (s.async)
        return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n).then((o) => a(o, s)).then((o) => s.hooks ? s.hooks.processAllTokens(o) : o).then((o) => s.walkTokens ? Promise.all(this.walkTokens(o, s.walkTokens)).then(() => o) : o).then((o) => c(o, s)).then((o) => s.hooks ? s.hooks.postprocess(o) : o).catch(l);
      try {
        s.hooks && (n = s.hooks.preprocess(n));
        let o = a(n, s);
        s.hooks && (o = s.hooks.processAllTokens(o)), s.walkTokens && this.walkTokens(o, s.walkTokens);
        let p = c(o, s);
        return s.hooks && (p = s.hooks.postprocess(p)), p;
      } catch (o) {
        return l(o);
      }
    };
  }
  onError(t, e) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const i = "<p>An error occurred:</p><pre>" + $(n.message + "", !0) + "</pre>";
        return e ? Promise.resolve(i) : i;
      }
      if (e)
        return Promise.reject(n);
      throw n;
    };
  }
}, E = new Xe();
function m(t, e) {
  return E.parse(t, e);
}
m.options = m.setOptions = function(t) {
  return E.setOptions(t), m.defaults = E.defaults, Oe(m.defaults), m;
};
m.getDefaults = pe;
m.defaults = L;
m.use = function(...t) {
  return E.use(...t), m.defaults = E.defaults, Oe(m.defaults), m;
};
m.walkTokens = function(t, e) {
  return E.walkTokens(t, e);
};
m.parseInline = E.parseInline;
m.Parser = D;
m.parser = D.parse;
m.Renderer = K;
m.TextRenderer = be;
m.Lexer = _;
m.lexer = _.lex;
m.Tokenizer = V;
m.Hooks = H;
m.parse = m;
m.options;
m.setOptions;
m.use;
m.walkTokens;
m.parseInline;
D.parse;
_.lex;
let A = null;
function un(t, e, n) {
  let i = A;
  try {
    return A = { view: t, language: e }, n();
  } finally {
    A = i;
  }
}
const pn = /* @__PURE__ */ new Xe({
  walkTokens(t) {
    if (!A || t.type != "code")
      return;
    let e = A.language && A.language(t.lang);
    if (!e) {
      let r = A.view.state.facet(ue);
      r && r.name == t.lang && (e = r);
    }
    if (!e)
      return;
    let n = { style: (r) => Be(A.view.state, r) }, i = "";
    Ne(t.text, e.parser.parse(t.text), n, (r, s) => {
      i += s ? `<span class="${s}">${I(r)}</span>` : I(r);
    }, () => {
      i += "<br>";
    }), t.escaped = !0, t.text = i;
  }
});
function I(t) {
  return t.replace(/[\n<&]/g, (e) => e == `
` ? "<br>" : e == "<" ? "&lt;" : "&amp;");
}
function hn(t, e) {
  let n = e, i = t;
  return typeof i != "string" && (n = i.kind, i = i.value), n == "plaintext" ? I(i) : pn.parse(i, { async: !1 });
}
function re(t, e) {
  let n = t.lineAt(e);
  return { line: n.number - 1, character: e - n.from };
}
function Q(t, e) {
  return t.line(e.line + 1).from + e.character;
}
function Le(t, e) {
  if (e.line < 0 || e.line >= t.lines)
    return null;
  let n = t.line(e.line + 1);
  return e.character < 0 || e.character > n.length ? null : n.from + e.character;
}
class b {
  /**
  @internal
  */
  constructor(e, { client: n, uri: i, languageID: r }) {
    if (this.view = e, this.client = n, this.uri = i, !r) {
      let s = e.state.facet(ue);
      r = s ? s.name : "";
    }
    n.workspace.openFile(i, r, e), this.syncedDoc = e.state.doc, this.unsyncedChanges = ee.empty(e.state.doc.length);
  }
  /**
  Render a doc string from the server to HTML.
  */
  docToHTML(e, n = "plaintext") {
    let i = un(this.view, this.client.config.highlightLanguage, () => hn(e, n));
    return this.client.config.sanitizeHTML ? this.client.config.sanitizeHTML(i) : i;
  }
  /**
  Convert a CodeMirror document offset into an LSP `{line,
  character}` object. Defaults to using the view's current
  document, but can be given another one.
  */
  toPosition(e, n = this.view.state.doc) {
    return re(n, e);
  }
  /**
  Convert an LSP `{line, character}` object to a CodeMirror
  document offset.
  */
  fromPosition(e, n = this.view.state.doc) {
    return Q(n, e);
  }
  /**
  Display an error in this plugin's editor.
  */
  reportError(e, n) {
    oe(this.view, {
      label: this.view.state.phrase(e) + ": " + (n.message || n),
      class: "cm-lsp-message cm-lsp-message-error",
      top: !0
    });
  }
  /**
  Reset the [unsynced
  changes](https://codemirror.net/6/docs/ref/#lsp-client.LSPPlugin.unsyncedChanges). Should probably
  only be called by a [workspace](https://codemirror.net/6/docs/ref/#lsp-client.Workspace).
  */
  clear() {
    this.syncedDoc = this.view.state.doc, this.unsyncedChanges = ee.empty(this.view.state.doc.length);
  }
  /**
  @internal
  */
  update(e) {
    e.docChanged && (this.unsyncedChanges = this.unsyncedChanges.compose(e.changes));
  }
  /**
  @internal
  */
  destroy() {
    this.client.workspace.closeFile(this.uri, this.view);
  }
  /**
  Get the LSP plugin associated with an editor, if any.
  */
  static get(e) {
    return e.plugin(Ye);
  }
  /**
  Deprecated. Use
  [`LSPClient.plugin`](https://codemirror.net/6/docs/ref/#lsp-client.LSPClient.plugin) instead.
  */
  static create(e, n, i) {
    return e.plugin(n, i);
  }
}
const Ye = /* @__PURE__ */ ae.fromClass(b);
class et {
  /**
  The constructor, as called by the client when creating a
  workspace.
  */
  constructor(e) {
    this.client = e;
  }
  /**
  Find the open file with the given URI, if it exists. The default
  implementation just looks it up in `this.files`.
  */
  getFile(e) {
    return this.files.find((n) => n.uri == e) || null;
  }
  /**
  Called to request that the workspace open a file. The default
  implementation simply returns the file if it is open, null
  otherwise.
  */
  requestFile(e) {
    return Promise.resolve(this.getFile(e));
  }
  /**
  Called when the client for this workspace is connected. The
  default implementation calls
  [`LSPClient.didOpen`](https://codemirror.net/6/docs/ref/#lsp-client.LSPClient.didOpen) on all open
  files.
  */
  connected() {
    for (let e of this.files)
      this.client.didOpen(e);
  }
  /**
  Called when the client for this workspace is disconnected. The
  default implementation does nothing.
  */
  disconnected() {
  }
  /**
  Called when a server-initiated change to a file is applied. The
  default implementation simply dispatches the update to the
  file's view, if the file is open and has a view.
  */
  updateFile(e, n) {
    var i;
    let r = this.getFile(e);
    r && ((i = r.getView()) === null || i === void 0 || i.dispatch(n));
  }
  /**
  When the client needs to put a file other than the one loaded in
  the current editor in front of the user, for example in
  [`jumpToDefinition`](https://codemirror.net/6/docs/ref/#lsp-client.jumpToDefinition), it will call
  this function. It should make sure to create or find an editor
  with the file and make it visible to the user, or return null if
  this isn't possible.
  */
  displayFile(e) {
    let n = this.getFile(e);
    return Promise.resolve(n ? n.getView() : null);
  }
}
class fn {
  constructor(e, n, i, r, s) {
    this.uri = e, this.languageId = n, this.version = i, this.doc = r, this.view = s;
  }
  getView() {
    return this.view;
  }
}
class dn extends et {
  constructor() {
    super(...arguments), this.files = [], this.fileVersions = /* @__PURE__ */ Object.create(null);
  }
  nextFileVersion(e) {
    var n;
    return this.fileVersions[e] = ((n = this.fileVersions[e]) !== null && n !== void 0 ? n : -1) + 1;
  }
  syncFiles() {
    let e = [];
    for (let n of this.files) {
      let i = b.get(n.view);
      if (!i)
        continue;
      let r = i.unsyncedChanges;
      r.empty || (e.push({ changes: r, file: n, prevDoc: n.doc }), n.doc = n.view.state.doc, n.version = this.nextFileVersion(n.uri), i.clear());
    }
    return e;
  }
  openFile(e, n, i) {
    if (this.getFile(e))
      throw new Error("Default workspace implementation doesn't support multiple views on the same file");
    let r = new fn(e, n, this.nextFileVersion(e), i.state.doc, i);
    this.files.push(r), this.client.didOpen(r);
  }
  closeFile(e) {
    let n = this.getFile(e);
    n && (this.files = this.files.filter((i) => i != n), this.client.didClose(e));
  }
}
const gn = /* @__PURE__ */ gt.baseTheme({
  ".cm-lsp-documentation": {
    padding: "0 7px",
    "& p, & pre": {
      margin: "2px 0"
    }
  },
  ".cm-lsp-signature-tooltip": {
    padding: "2px 6px",
    borderRadius: "2.5px",
    position: "relative",
    maxWidth: "30em",
    maxHeight: "10em",
    overflowY: "scroll",
    "& .cm-lsp-documentation": {
      padding: "0",
      fontSize: "80%"
    },
    "& .cm-lsp-signature-num": {
      fontFamily: "monospace",
      position: "absolute",
      left: "2px",
      top: "4px",
      fontSize: "70%",
      lineHeight: "1.3"
    },
    "& .cm-lsp-signature": {
      fontFamily: "monospace",
      textIndent: "1em hanging"
    },
    "& .cm-lsp-active-parameter": {
      fontWeight: "bold"
    }
  },
  ".cm-lsp-signature-multiple": {
    paddingLeft: "1.5em"
  },
  ".cm-panel.cm-lsp-rename-panel": {
    padding: "2px 6px 4px",
    position: "relative",
    "& label": { fontSize: "80%" },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: "0"
    }
  },
  ".cm-lsp-message button[type=submit]": {
    display: "block"
  },
  ".cm-lsp-reference-panel": {
    fontFamily: "monospace",
    whiteSpace: "pre",
    padding: "3px 6px",
    maxHeight: "120px",
    overflow: "auto",
    "& .cm-lsp-reference-file": {
      fontWeight: "bold"
    },
    "& .cm-lsp-reference": {
      cursor: "pointer",
      "&[aria-selected]": {
        backgroundColor: "#0077ee44"
      }
    },
    "& .cm-lsp-reference-line": {
      opacity: "0.7"
    }
  }
});
class mn {
  constructor(e, n, i) {
    this.id = e, this.params = n, this.timeout = i, this.promise = new Promise((r, s) => {
      this.resolve = r, this.reject = s;
    });
  }
}
const kn = {
  general: {
    markdown: {
      parser: "marked"
    }
  },
  textDocument: {
    completion: {
      completionItem: {
        snippetSupport: !0,
        documentationFormat: ["markdown", "plaintext"],
        insertReplaceSupport: !1
      },
      completionList: {
        itemDefaults: ["commitCharacters", "editRange", "insertTextFormat"]
      },
      completionItemKind: { valueSet: [] },
      contextSupport: !0
    },
    hover: {
      contentFormat: ["markdown", "plaintext"]
    },
    formatting: {},
    rename: {},
    signatureHelp: {
      contextSupport: !0,
      signatureInformation: {
        documentationFormat: ["markdown", "plaintext"],
        parameterInformation: { labelOffsetSupport: !0 },
        activeParameterSupport: !0
      }
    },
    definition: {},
    declaration: {},
    implementation: {},
    typeDefinition: {},
    references: {},
    diagnostic: {}
  },
  window: {
    showMessage: {}
  }
};
class tt {
  /**
  @internal
  */
  constructor(e) {
    this.client = e, this.mappings = /* @__PURE__ */ new Map(), this.startDocs = /* @__PURE__ */ new Map();
    for (let n of e.workspace.files)
      this.mappings.set(n.uri, ee.empty(n.doc.length)), this.startDocs.set(n.uri, n.doc);
  }
  /**
  @internal
  */
  addChanges(e, n) {
    let i = this.mappings.get(e);
    i && this.mappings.set(e, i.composeDesc(n));
  }
  /**
  Get the changes made to the document with the given URI since
  the mapping was created. Returns null for documents that aren't
  open.
  */
  getMapping(e) {
    let n = this.mappings.get(e);
    if (!n)
      return null;
    let i = this.client.workspace.getFile(e), r = i?.getView(), s = r && b.get(r);
    return s ? n.composeDesc(s.unsyncedChanges) : n;
  }
  mapPos(e, n, i = -1, r = $e.Simple) {
    let s = this.getMapping(e);
    return s ? s.mapPos(n, i, r) : n;
  }
  mapPosition(e, n, i = -1, r = $e.Simple) {
    let s = this.startDocs.get(e);
    if (!s)
      throw new Error("Cannot map from a file that's not in the workspace");
    let l = Q(s, n), a = this.getMapping(e);
    return a ? a.mapPos(l, i, r) : l;
  }
  /**
  Disconnect this mapping from the client so that it will no
  longer be notified of new changes. You must make sure to call
  this on every mapping you create, except when you use
  [`withMapping`](https://codemirror.net/6/docs/ref/#lsp-client.LSPClient.withMapping), which will
  automatically schedule a disconnect when the given promise
  resolves or aborts.
  */
  destroy() {
    this.client.activeMappings = this.client.activeMappings.filter((e) => e != this);
  }
}
const xn = {
  "window/logMessage": (t, e) => {
    e.type == 1 ? console.error("[lsp] " + e.message) : e.type == 2 && console.warn("[lsp] " + e.message);
  },
  "window/showMessage": (t, e) => {
    if (e.type > 3)
      return;
    let n;
    for (let i of t.workspace.files)
      if (n = i.getView())
        break;
    n && oe(n, {
      label: e.message,
      class: "cm-lsp-message cm-lsp-message-" + (e.type == 1 ? "error" : e.type == 2 ? "warning" : "info"),
      top: !0
    });
  }
};
class bn {
  /**
  Create a client object.
  */
  constructor(e = {}) {
    var n;
    if (this.config = e, this.transport = null, this.nextReqID = 0, this.requests = [], this.activeMappings = [], this.serverCapabilities = null, this.supportSync = -1, this.extensions = [], this.receiveMessage = this.receiveMessage.bind(this), this.initializing = new Promise((i, r) => this.init = { resolve: i, reject: r }), this.timeout = (n = e.timeout) !== null && n !== void 0 ? n : 3e3, this.workspace = e.workspace ? e.workspace(this) : new dn(this), e.extensions)
      for (let i of e.extensions)
        Array.isArray(i) || i.extension ? this.extensions.push(i) : i.editorExtension && this.extensions.push(i.editorExtension);
  }
  /**
  Whether this client is connected (has a transport).
  */
  get connected() {
    return !!this.transport;
  }
  /**
  Connect this client to a server over the given transport. Will
  immediately start the initialization exchange with the server,
  and resolve `this.initializing` (which it also returns) when
  successful.
  */
  connect(e) {
    this.transport && this.transport.unsubscribe(this.receiveMessage), this.transport = e, e.subscribe(this.receiveMessage);
    let n = kn;
    if (this.config.extensions)
      for (let i of this.config.extensions) {
        let { clientCapabilities: r } = i;
        r && (n = nt(n, r));
      }
    return this.requestInner("initialize", {
      processId: null,
      clientInfo: { name: "@codemirror/lsp-client" },
      rootUri: this.config.rootUri || null,
      capabilities: n
    }).promise.then((i) => {
      var r;
      this.serverCapabilities = i.capabilities;
      let s = i.capabilities.textDocumentSync;
      this.supportSync = s == null ? 0 : typeof s == "number" ? s : (r = s.change) !== null && r !== void 0 ? r : 0, e.send(JSON.stringify({ jsonrpc: "2.0", method: "initialized", params: {} })), this.init.resolve(null);
    }, this.init.reject), this.workspace.connected(), this;
  }
  /**
  Disconnect the client from the server.
  */
  disconnect() {
    this.transport && this.transport.unsubscribe(this.receiveMessage), this.serverCapabilities = null, this.initializing = new Promise((e, n) => this.init = { resolve: e, reject: n }), this.workspace.disconnected();
  }
  /**
  Create a plugin for this client, to add to an editor
  configuration. This extension is necessary to use LSP-related
  functionality exported by this package. The returned extension
  will include the editor
  extensions included in this client's
  [configuration](https://codemirror.net/6/docs/ref/#lsp-client.LSPClientConfig.extensions).
  
  Creating an editor with this plugin will cause
  [`openFile`](https://codemirror.net/6/docs/ref/#lsp-client.Workspace.openFile) to be called on the
  workspace.
  
  By default, the language ID given to the server for this file is
  derived from the editor's language configuration via
  [`Language.name`](https://codemirror.net/6/docs/ref/#language.Language.name). You can pass in
  a specific ID as a third parameter.
  */
  plugin(e, n) {
    return [
      Ye.of({ client: this, uri: e, languageID: n }),
      gn,
      this.extensions
    ];
  }
  /**
  Send a `textDocument/didOpen` notification to the server.
  */
  didOpen(e) {
    this.notification("textDocument/didOpen", {
      textDocument: {
        uri: e.uri,
        languageId: e.languageId,
        text: e.doc.toString(),
        version: e.version
      }
    });
  }
  /**
  Send a `textDocument/didClose` notification to the server.
  */
  didClose(e) {
    this.notification("textDocument/didClose", { textDocument: { uri: e } });
  }
  receiveMessage(e) {
    var n;
    const i = JSON.parse(e);
    if ("id" in i && !("method" in i)) {
      let r = this.requests.findIndex((s) => s.id == i.id);
      if (r < 0)
        console.warn(`[lsp] Received a response for non-existent request ${i.id}`);
      else {
        let s = this.requests[r];
        clearTimeout(s.timeout), this.requests.splice(r, 1), i.error ? s.reject(i.error) : s.resolve(i.result);
      }
    } else if ("id" in i) {
      let r = {
        jsonrpc: "2.0",
        id: i.id,
        error: { code: -32601, message: "Method not implemented" }
      };
      this.transport.send(JSON.stringify(r));
    } else {
      let r = (n = this.config.notificationHandlers) === null || n === void 0 ? void 0 : n[i.method];
      if (r && r(this, i.params))
        return;
      if (this.config.extensions)
        for (let l of this.config.extensions) {
          let { notificationHandlers: a } = l, c = a?.[i.method];
          if (c && c(this, i.params))
            return;
        }
      let s = xn[i.method];
      s ? s(this, i.params) : this.config.unhandledNotification && this.config.unhandledNotification(this, i.method, i.params);
    }
  }
  /**
  Make a request to the server. Returns a promise that resolves to
  the response or rejects with a failure message. You'll probably
  want to use types from the `vscode-languageserver-protocol`
  package for the type parameters.
  
  The caller is responsible for
  [synchronizing](https://codemirror.net/6/docs/ref/#lsp-client.LSPClient.sync) state before the
  request and correctly handling state drift caused by local
  changes that happend during the request.
  */
  request(e, n) {
    return this.transport ? this.initializing.then(() => this.requestInner(e, n).promise) : Promise.reject(new Error("Client not connected"));
  }
  requestInner(e, n, i = !1) {
    let r = ++this.nextReqID, s = {
      jsonrpc: "2.0",
      id: r,
      method: e,
      params: n
    }, l = new mn(r, n, setTimeout(() => this.timeoutRequest(l), this.timeout));
    this.requests.push(l);
    try {
      this.transport.send(JSON.stringify(s));
    } catch (a) {
      l.reject(a);
    }
    return l;
  }
  /**
  Send a notification to the server.
  */
  notification(e, n) {
    this.transport && this.initializing.then(() => {
      let i = {
        jsonrpc: "2.0",
        method: e,
        params: n
      };
      this.transport.send(JSON.stringify(i));
    });
  }
  /**
  Cancel the in-progress request with the given parameter value
  (which is compared by identity).
  */
  cancelRequest(e) {
    let n = this.requests.find((i) => i.params === e);
    n && this.notification("$/cancelRequest", { id: n.id });
  }
  /**
  @internal
  */
  hasCapability(e) {
    return this.serverCapabilities ? !!this.serverCapabilities[e] : null;
  }
  /**
  Create a [workspace mapping](https://codemirror.net/6/docs/ref/#lsp-client.WorkspaceMapping) that
  tracks changes to files in this client's workspace, relative to
  the moment where it was created. Make sure you call
  [`destroy`](https://codemirror.net/6/docs/ref/#lsp-client.WorkspaceMapping.destroy) on the mapping
  when you're done with it.
  */
  workspaceMapping() {
    let e = new tt(this);
    return this.activeMappings.push(e), e;
  }
  /**
  Run the given promise with a [workspace
  mapping](https://codemirror.net/6/docs/ref/#lsp-client.WorkspaceMapping) active. Automatically
  release the mapping when the promise resolves or rejects.
  */
  withMapping(e) {
    let n = this.workspaceMapping();
    return e(n).finally(() => n.destroy());
  }
  /**
  Push any [pending changes](https://codemirror.net/6/docs/ref/#lsp-client.Workspace.syncFiles) in
  the open files to the server. You'll want to call this before
  most types of requests, to make sure the server isn't working
  with outdated information.
  */
  sync() {
    for (let { file: e, changes: n, prevDoc: i } of this.workspace.syncFiles()) {
      for (let r of this.activeMappings)
        r.addChanges(e.uri, n);
      this.supportSync && this.notification("textDocument/didChange", {
        textDocument: { uri: e.uri, version: e.version },
        contentChanges: wn(
          e,
          i,
          n,
          this.supportSync == 2
          /* Incremental */
        )
      });
    }
  }
  timeoutRequest(e) {
    let n = this.requests.indexOf(e);
    n > -1 && (e.reject(new Error("Request timed out")), this.requests.splice(n, 1));
  }
}
function wn(t, e, n, i) {
  if (!i || t.doc.length < 1024)
    return [{ text: t.doc.toString() }];
  let r = [];
  return n.iterChanges((s, l, a, c, o) => {
    r.push({
      range: { start: re(e, s), end: re(e, l) },
      text: o.toString()
    });
  }), r.reverse();
}
function nt(t, e) {
  if (e == null)
    return t;
  if (typeof t != "object" || typeof e != "object")
    return e;
  let n = {}, i = Object.keys(t), r = Object.keys(e);
  for (let s of i)
    n[s] = r.indexOf(s) > -1 ? nt(t[s], e[s]) : t[s];
  for (let s of r)
    i.indexOf(s) < 0 && (n[s] = e[s]);
  return n;
}
function vn(t) {
  return t.replace(/\\([$}\\])|\$(\d+)/g, (e, n, i) => n || `\${${i}}`);
}
function we(t = {}) {
  let e;
  if (t.override)
    e = [_e({ override: [se] })];
  else {
    let n = [{ autocomplete: se }];
    e = [_e(), wt.languageData.of(() => n)];
  }
  return t.validFor && e.push(it.of({ validFor: t.validFor })), e;
}
const it = /* @__PURE__ */ vt.define({
  combine: (t) => t.length ? t[0] : { validFor: null }
});
function yn(t, e, n, i) {
  if (t.client.hasCapability("completionProvider") === !1)
    return Promise.resolve(null);
  t.client.sync();
  let r = {
    position: t.toPosition(e),
    textDocument: { uri: t.uri },
    context: n
  };
  return i && i.addEventListener("abort", () => t.client.cancelRequest(r)), t.client.request("textDocument/completion", r);
}
function Tn(t) {
  var e;
  let n = Math.ceil(t.length / 50), i = [];
  for (let r = 0; r < t.length; r += n) {
    let s = t[r], l = ((e = s.textEdit) === null || e === void 0 ? void 0 : e.newText) || s.textEditText || s.insertText || s.label;
    if (!/^\w/.test(l)) {
      let a = /^[^\w]*/.exec(l)[0];
      i.indexOf(a) < 0 && i.push(a);
    }
  }
  return i.length ? new RegExp("^(?:" + i.map(RegExp.escape || ((r) => r.replace(/[^\w\s]/g, "\\$&"))).join("|") + ")?\\w*$") : /^\w*$/;
}
function Sn(t, e) {
  var n, i;
  let r = (i = (n = t.client.serverCapabilities) === null || n === void 0 ? void 0 : n.completionProvider) === null || i === void 0 ? void 0 : i.triggerCharacters;
  return r && r.indexOf(e) > -1 ? "triggerCharacter" : /[a-zA-Z_]/.test(e) ? "identifier" : null;
}
function rt(t, e) {
  return (n, i) => {
    t = t ? t.composeDesc(i) : i;
    let r = n.options.slice();
    for (let { index: s, edits: l, text: a } of e)
      r[s] = { ...r[s], apply: st(l, a, t) };
    return {
      ...n,
      options: r,
      map: rt(t, e)
    };
  };
}
function st(t, e, n) {
  return (i, r, s, l) => {
    let a = Ct(i.state, e, s, l), c = [];
    for (let { from: o, to: p, text: f } of t) {
      if (n) {
        if (n.touchesRange(o, p))
          continue;
        let h = p - o;
        o = n.mapPos(o, 1), p = o + h;
      }
      c.push({ from: o, to: p, insert: f });
    }
    i.dispatch(a, { changes: c });
  };
}
const se = (t) => {
  const e = t.view && b.get(t.view);
  if (!e)
    return null;
  let n = t.state.sliceDoc(t.pos - 1, t.pos), i = t.explicit ? "invoked" : Sn(e, n);
  if (!i)
    return null;
  let r = i == "triggerCharacter" ? { triggerKind: 2, triggerCharacter: n } : {
    triggerKind: 1
    /* Invoked */
  };
  return yn(e, t.pos, r, t).then((s) => {
    var l, a;
    if (!s)
      return null;
    Array.isArray(s) && (s = { items: s });
    let { from: c, to: o } = Rn(t, s), p = (l = s.itemDefaults) === null || l === void 0 ? void 0 : l.commitCharacters, f = t.state.facet(it), h = [];
    return {
      from: c,
      to: o,
      options: s.items.map((u, d) => {
        var k, x, w;
        let S = ((k = u.textEdit) === null || k === void 0 ? void 0 : k.newText) || u.textEditText || u.insertText || u.label, v = {
          label: u.filterText || u.label,
          displayLabel: u.label,
          type: u.kind && Pn[u.kind]
        }, y = (x = u.insertTextFormat) !== null && x !== void 0 ? x : (w = s.itemDefaults) === null || w === void 0 ? void 0 : w.insertTextFormat;
        if (u.commitCharacters && u.commitCharacters != p && (v.commitCharacters = u.commitCharacters), u.detail && (v.detail = u.detail), u.sortText && (v.sortText = u.sortText), y == 2)
          v.apply = (P, R, C, z) => Rt(vn(S))(P, R, C, z);
        else if (u.additionalTextEdits) {
          let P = [];
          for (let R of u.additionalTextEdits) {
            let C = Le(t.state.doc, R.range.start), z = Le(t.state.doc, R.range.end);
            C != null && z != null && P.push({ from: C, to: z, text: R.newText });
          }
          h.push({ index: d, text: S, edits: P }), v.apply = st(P, S, null);
        } else v.label != S && (v.apply = S);
        return u.documentation && (v.info = () => Cn(e, u.documentation)), v;
      }),
      commitCharacters: p,
      validFor: s.isIncomplete ? void 0 : (a = f.validFor) !== null && a !== void 0 ? a : Tn(s.items),
      map: h.length ? rt(null, h) : void 0
    };
  }, (s) => {
    if ("code" in s && s.code == -32800)
      return null;
    throw s;
  });
};
function Rn(t, e) {
  var n;
  if (!e.items.length)
    return { from: t.pos, to: t.pos };
  let i = (n = e.itemDefaults) === null || n === void 0 ? void 0 : n.editRange, r = e.items[0], s = i ? "insert" in i ? i.insert : i : r.textEdit ? "range" in r.textEdit ? r.textEdit.range : r.textEdit.insert : null;
  if (!s)
    return t.state.wordAt(t.pos) || { from: t.pos, to: t.pos };
  let l = t.state.doc.lineAt(t.pos);
  return { from: l.from + s.start.character, to: l.from + s.end.character };
}
function Cn(t, e) {
  let n = document.createElement("div");
  return n.className = "cm-lsp-documentation cm-lsp-completion-documentation", n.innerHTML = t.docToHTML(e), n;
}
const Pn = {
  1: "text",
  // Text
  2: "method",
  // Method
  3: "function",
  // Function
  4: "class",
  // Constructor
  5: "property",
  // Field
  6: "variable",
  // Variable
  7: "class",
  // Class
  8: "interface",
  // Interface
  9: "namespace",
  // Module
  10: "property",
  // Property
  11: "keyword",
  // Unit
  12: "constant",
  // Value
  13: "constant",
  // Enum
  14: "keyword",
  // Keyword
  16: "constant",
  // Color
  20: "constant",
  // EnumMember
  21: "constant",
  // Constant
  22: "class",
  // Struct
  25: "type"
  // TypeParameter
};
function ve(t = {}) {
  return mt(_n, {
    hideOn: (e) => e.docChanged,
    hoverTime: t.hoverTime
  });
}
function $n(t, e) {
  return t.client.hasCapability("hoverProvider") === !1 ? Promise.resolve(null) : (t.client.sync(), t.client.request("textDocument/hover", {
    position: t.toPosition(e),
    textDocument: { uri: t.uri }
  }));
}
function _n(t, e) {
  const n = b.get(t);
  return n ? $n(n, e).then((i) => i ? {
    pos: i.range ? Q(t.state.doc, i.range.start) : e,
    end: i.range ? Q(t.state.doc, i.range.end) : e,
    create() {
      let r = document.createElement("div");
      return r.className = "cm-lsp-hover-tooltip cm-lsp-documentation", r.innerHTML = Dn(n, i.contents), { dom: r };
    },
    above: !0
  } : null) : Promise.resolve(null);
}
function Dn(t, e) {
  return Array.isArray(e) ? e.map((n) => Ie(t, n)).join("<br>") : typeof e == "string" || typeof e == "object" && "language" in e ? Ie(t, e) : t.docToHTML(e);
}
function Ie(t, e) {
  if (typeof e == "string")
    return t.docToHTML(e, "markdown");
  let { language: n, value: i } = e, r = t.client.config.highlightLanguage && t.client.config.highlightLanguage(n || "");
  if (!r) {
    let l = t.view.state.facet(ue);
    l && (!n || l.name == n) && (r = l);
  }
  if (!r)
    return I(i);
  let s = "";
  return Ne(i, r.parser.parse(i), { style: (l) => Be(t.view.state, l) }, (l, a) => {
    s += a ? `<span class="${a}">${I(l)}</span>` : I(l);
  }, () => {
    s += "<br>";
  }), s;
}
function An(t, e) {
  return t.client.request("textDocument/formatting", {
    options: e,
    textDocument: { uri: t.uri }
  });
}
const lt = (t) => {
  const e = b.get(t);
  return e ? (e.client.sync(), e.client.withMapping((n) => An(e, {
    tabSize: St(t.state),
    insertSpaces: t.state.facet(Tt).indexOf("	") < 0
  }).then((i) => {
    if (!i)
      return;
    let r = n.getMapping(e.uri), s = [];
    for (let l of i) {
      let a = n.mapPosition(e.uri, l.range.start), c = n.mapPosition(e.uri, l.range.end);
      if (r) {
        if (r.touchesRange(a, c))
          return;
        a = r.mapPos(a, 1), c = r.mapPos(c, -1);
      }
      s.push({ from: a, to: c, insert: l.newText });
    }
    t.dispatch({
      changes: s,
      userEvent: "format"
    });
  }, (i) => {
    e.reportError("Formatting request failed", i);
  })), !0) : !1;
}, ye = [
  { key: "Shift-Alt-f", run: lt, preventDefault: !0 }
];
function qn(t, e, n) {
  return t.client.request("textDocument/rename", {
    newName: n,
    position: t.toPosition(e),
    textDocument: { uri: t.uri }
  });
}
const at = (t) => {
  let e = t.state.wordAt(t.state.selection.main.head), n = b.get(t);
  if (!e || !n || n.client.hasCapability("renameProvider") === !1)
    return !1;
  const i = t.state.sliceDoc(e.from, e.to);
  let r = kt(t, "cm-lsp-rename-panel");
  if (r) {
    let s = r.dom.querySelector("[name=name]");
    s.value = i, s.select();
  } else {
    let { close: s, result: l } = oe(t, {
      label: t.state.phrase("New name"),
      input: { name: "name", value: i },
      focus: !0,
      submitLabel: t.state.phrase("rename"),
      class: "cm-lsp-rename-panel"
    });
    l.then((a) => {
      t.dispatch({ effects: s }), a && zn(t, a.elements.namedItem("name").value);
    });
  }
  return !0;
};
function zn(t, e) {
  const n = b.get(t), i = t.state.wordAt(t.state.selection.main.head);
  if (!n || !i)
    return !1;
  n.client.sync(), n.client.withMapping((r) => qn(n, i.from, e).then((s) => {
    if (s)
      for (let l in s.changes) {
        let a = s.changes[l], c = n.client.workspace.getFile(l);
        !a.length || !c || n.client.workspace.updateFile(l, {
          changes: a.map((o) => ({
            from: r.mapPosition(l, o.range.start),
            to: r.mapPosition(l, o.range.end),
            insert: o.newText
          })),
          userEvent: "rename"
        });
      }
  }, (s) => {
    n.reportError("Rename request failed", s);
  }));
}
const Te = [
  { key: "F2", run: at, preventDefault: !0 }
];
function En(t, e, n) {
  return t.client.hasCapability("signatureHelpProvider") === !1 ? Promise.resolve(null) : (t.client.sync(), t.client.request("textDocument/signatureHelp", {
    context: n,
    position: t.toPosition(e),
    textDocument: { uri: t.uri }
  }));
}
const Z = /* @__PURE__ */ ae.fromClass(class {
  constructor() {
    this.activeRequest = null, this.delayedRequest = 0;
  }
  update(t) {
    var e;
    this.activeRequest && (t.selectionSet ? (this.activeRequest.drop = !0, this.activeRequest = null) : t.docChanged && (this.activeRequest.pos = t.changes.mapPos(this.activeRequest.pos)));
    const n = b.get(t.view);
    if (!n)
      return;
    const i = t.view.state.field(q);
    let r = "";
    if (t.docChanged && t.transactions.some((s) => s.isUserEvent("input.type"))) {
      const s = (e = n.client.serverCapabilities) === null || e === void 0 ? void 0 : e.signatureHelpProvider, l = (s?.triggerCharacters || []).concat(i && s?.retriggerCharacters || []);
      l && t.changes.iterChanges((a, c, o, p, f) => {
        let h = f.toString();
        if (h)
          for (let u of l)
            h.indexOf(u) > -1 && (r = u);
      });
    }
    r ? this.startRequest(n, {
      triggerKind: 2,
      isRetrigger: !!i,
      triggerCharacter: r,
      activeSignatureHelp: i ? i.data : void 0
    }) : i && t.selectionSet && (this.delayedRequest && clearTimeout(this.delayedRequest), this.delayedRequest = setTimeout(() => {
      this.startRequest(n, {
        triggerKind: 3,
        isRetrigger: !0,
        activeSignatureHelp: i.data
      });
    }, 250));
  }
  startRequest(t, e) {
    this.delayedRequest && clearTimeout(this.delayedRequest);
    let { view: n } = t, i = n.state.selection.main.head;
    this.activeRequest && (this.activeRequest.drop = !0);
    let r = this.activeRequest = { pos: i, drop: !1 };
    En(t, i, e).then((s) => {
      var l;
      if (!r.drop)
        if (s && s.signatures.length) {
          let a = n.state.field(q), c = a && Ln(a.data, s), o = c && e.triggerKind == 3 ? a.active : (l = s.activeSignature) !== null && l !== void 0 ? l : 0;
          if (c && In(a.data, s, o))
            return;
          n.dispatch({ effects: N.of({
            data: s,
            active: o,
            pos: c ? a.tooltip.pos : r.pos
          }) });
        } else n.state.field(q) && n.dispatch({ effects: N.of(null) });
    }, e.triggerKind == 1 ? (s) => t.reportError("Signature request failed", s) : void 0);
  }
  destroy() {
    this.delayedRequest && clearTimeout(this.delayedRequest), this.activeRequest && (this.activeRequest.drop = !0);
  }
});
function Ln(t, e) {
  return t.signatures.length != e.signatures.length ? !1 : t.signatures.every((n, i) => n.label == e.signatures[i].label);
}
function In(t, e, n) {
  var i, r;
  return ((i = t.signatures[n].activeParameter) !== null && i !== void 0 ? i : t.activeParameter) == ((r = e.signatures[n].activeParameter) !== null && r !== void 0 ? r : e.activeParameter);
}
class Me {
  constructor(e, n, i) {
    this.data = e, this.active = n, this.tooltip = i;
  }
}
const q = /* @__PURE__ */ Fe.define({
  create() {
    return null;
  },
  update(t, e) {
    for (let n of e.effects)
      if (n.is(N))
        return n.value ? new Me(n.value.data, n.value.active, Mn(n.value.data, n.value.active, n.value.pos)) : null;
    return t && e.docChanged ? new Me(t.data, t.active, { ...t.tooltip, pos: e.changes.mapPos(t.tooltip.pos) }) : t;
  },
  provide: (t) => bt.from(t, (e) => e && e.tooltip)
}), N = /* @__PURE__ */ W.define();
function Mn(t, e, n) {
  return {
    pos: n,
    above: !0,
    create: (i) => Fn(i, t, e)
  };
}
function Fn(t, e, n) {
  var i;
  let r = document.createElement("div");
  if (r.className = "cm-lsp-signature-tooltip", e.signatures.length > 1) {
    r.classList.add("cm-lsp-signature-multiple");
    let f = r.appendChild(document.createElement("div"));
    f.className = "cm-lsp-signature-num", f.textContent = `${n + 1}/${e.signatures.length}`;
  }
  let s = e.signatures[n], l = r.appendChild(document.createElement("div"));
  l.className = "cm-lsp-signature";
  let a = 0, c = 0, o = (i = s.activeParameter) !== null && i !== void 0 ? i : e.activeParameter, p = o != null && s.parameters ? s.parameters[o] : null;
  if (p && Array.isArray(p.label))
    [a, c] = p.label;
  else if (p) {
    let f = s.label.indexOf(p.label);
    f > -1 && (a = f, c = f + p.label.length);
  }
  if (c) {
    l.appendChild(document.createTextNode(s.label.slice(0, a)));
    let f = l.appendChild(document.createElement("span"));
    f.className = "cm-lsp-active-parameter", f.textContent = s.label.slice(a, c), l.appendChild(document.createTextNode(s.label.slice(c)));
  } else
    l.textContent = s.label;
  if (s.documentation) {
    let f = b.get(t);
    if (f) {
      let h = r.appendChild(document.createElement("div"));
      h.className = "cm-lsp-signature-documentation cm-lsp-documentation", h.innerHTML = f.docToHTML(s.documentation);
    }
  }
  return { dom: r };
}
const ot = (t) => {
  let e = t.plugin(Z);
  e || (t.dispatch({ effects: W.appendConfig.of([q, Z]) }), e = t.plugin(Z));
  let n = t.state.field(q);
  if (!e || n === void 0)
    return !1;
  let i = b.get(t);
  return i ? (e.startRequest(i, {
    triggerKind: 1,
    activeSignatureHelp: n ? n.data : void 0,
    isRetrigger: !!n
  }), !0) : !1;
}, ct = (t) => {
  let e = t.state.field(q);
  return e ? (e.active < e.data.signatures.length - 1 && t.dispatch({ effects: N.of({ data: e.data, active: e.active + 1, pos: e.tooltip.pos }) }), !0) : !1;
}, ut = (t) => {
  let e = t.state.field(q);
  return e ? (e.active > 0 && t.dispatch({ effects: N.of({ data: e.data, active: e.active - 1, pos: e.tooltip.pos }) }), !0) : !1;
}, pt = [
  { key: "Mod-Shift-Space", run: ot },
  { key: "Mod-Shift-ArrowUp", run: ut },
  { key: "Mod-Shift-ArrowDown", run: ct }
];
function Se(t = {}) {
  return [
    q,
    Z,
    t.keymap === !1 ? [] : yt.high(ce.of(pt))
  ];
}
function Bn(t, e) {
  return t.client.request("textDocument/definition", {
    textDocument: { uri: t.uri },
    position: t.toPosition(e)
  });
}
function Nn(t, e) {
  return t.client.request("textDocument/declaration", {
    textDocument: { uri: t.uri },
    position: t.toPosition(e)
  });
}
function On(t, e) {
  return t.client.request("textDocument/typeDefinition", {
    textDocument: { uri: t.uri },
    position: t.toPosition(e)
  });
}
function jn(t, e) {
  return t.client.request("textDocument/implementation", {
    textDocument: { uri: t.uri },
    position: t.toPosition(e)
  });
}
function Y(t, e) {
  const n = b.get(t);
  return !n || n.client.hasCapability(e.capability) === !1 ? !1 : (n.client.sync(), n.client.withMapping((i) => e.get(n, t.state.selection.main.head).then((r) => {
    let s = Array.isArray(r) ? r[0] : r;
    if (s)
      return (s.uri == n.uri ? Promise.resolve(t) : n.client.workspace.displayFile(s.uri)).then((l) => {
        if (!l)
          return;
        let a = i.getMapping(s.uri) ? i.mapPosition(s.uri, s.range.start) : n.fromPosition(s.range.start, l.state.doc);
        l.dispatch({ selection: { anchor: a }, scrollIntoView: !0, userEvent: "select.definition" });
      });
  }, (r) => n.reportError("Find definition failed", r))), !0);
}
const ht = (t) => Y(t, {
  get: Bn,
  capability: "definitionProvider"
}), Hn = (t) => Y(t, {
  get: Nn,
  capability: "declarationProvider"
}), Zn = (t) => Y(t, {
  get: On,
  capability: "typeDefinitionProvider"
}), Gn = (t) => Y(t, {
  get: jn,
  capability: "implementationProvider"
}), Re = [
  { key: "F12", run: ht, preventDefault: !0 }
];
function Vn(t, e) {
  return t.client.request("textDocument/references", {
    textDocument: { uri: t.uri },
    position: t.toPosition(e),
    context: { includeDeclaration: !0 }
  });
}
const ft = (t) => {
  const e = b.get(t);
  if (!e || e.client.hasCapability("referencesProvider") === !1)
    return !1;
  e.client.sync();
  let n = e.client.workspaceMapping(), i = !1;
  return Vn(e, t.state.selection.main.head).then((r) => {
    if (r)
      return Promise.all(r.map((s) => e.client.workspace.requestFile(s.uri).then((l) => l ? { file: l, range: s.range } : null))).then((s) => {
        let l = s.filter((a) => a);
        l.length && (Kn(e.view, l, n), i = !0);
      });
  }, (r) => e.reportError("Finding references failed", r)).finally(() => {
    i || n.destroy();
  }), !0;
}, U = (t) => t.state.field(le, !1) ? (t.dispatch({ effects: Ce.of(null) }), !0) : !1, le = /* @__PURE__ */ Fe.define({
  create() {
    return null;
  },
  update(t, e) {
    for (let n of e.effects)
      if (n.is(Ce))
        return n.value;
    return t;
  },
  provide: (t) => xt.from(t)
}), Ce = /* @__PURE__ */ W.define();
function Kn(t, e, n) {
  let i = Qn(e, n), r = t.state.field(le, !1) === void 0 ? W.appendConfig.of(le.init(() => i)) : Ce.of(i);
  t.dispatch({ effects: r });
}
function Qn(t, e) {
  let n = !1;
  return setTimeout(() => {
    n || e.destroy();
  }, 500), (i) => {
    n = !0;
    let r = Un(t.map((u) => u.file.uri)), s = document.createElement("div"), l = null;
    s.className = "cm-lsp-reference-panel", s.tabIndex = 0, s.role = "listbox", s.setAttribute("aria-label", i.state.phrase("Reference list"));
    let a = [];
    for (let { file: u, range: d } of t) {
      let k = u.uri.slice(r);
      if (k != l) {
        l = k;
        let z = s.appendChild(document.createElement("div"));
        z.className = "cm-lsp-reference-file", z.textContent = k;
      }
      let x = s.appendChild(document.createElement("div"));
      x.className = "cm-lsp-reference", x.role = "option";
      let w = e.mapPosition(u.uri, d.start, 1), S = e.mapPosition(u.uri, d.end, -1), v = u.getView(), y = (v ? v.state.doc : u.doc).lineAt(w), P = x.appendChild(document.createElement("span"));
      P.className = "cm-lsp-reference-line", P.textContent = (y.number + ": ").padStart(5, " ");
      let R = y.text.slice(Math.max(0, w - y.from - 50), w - y.from);
      R && x.appendChild(document.createTextNode(R)), x.appendChild(document.createElement("strong")).textContent = y.text.slice(w - y.from, S - y.from);
      let C = y.text.slice(S - y.from, Math.min(y.length, 100 - R.length));
      C && x.appendChild(document.createTextNode(C)), a.length || x.setAttribute("aria-selected", "true"), a.push(x);
    }
    function c() {
      for (let u = 0; u < a.length; u++)
        if (a[u].hasAttribute("aria-selected"))
          return u;
      return 0;
    }
    function o(u) {
      for (let d = 0; d < a.length; d++)
        d == u ? a[d].setAttribute("aria-selected", "true") : a[d].removeAttribute("aria-selected");
    }
    function p(u) {
      let { file: d, range: k } = t[u], x = b.get(i);
      x && Promise.resolve(d.uri == x.uri ? i : x.client.workspace.displayFile(d.uri)).then((w) => {
        if (!w)
          return;
        let S = e.mapPosition(d.uri, k.start, 1);
        w.focus(), w.dispatch({
          selection: { anchor: S },
          scrollIntoView: !0
        });
      });
    }
    s.addEventListener("keydown", (u) => {
      if (u.keyCode == 27)
        U(i), i.focus();
      else if (u.keyCode == 38 || u.keyCode == 33)
        o((c() - 1 + t.length) % t.length);
      else if (u.keyCode == 40 || u.keyCode == 34)
        o((c() + 1) % t.length);
      else if (u.keyCode == 36)
        o(0);
      else if (u.keyCode == 35)
        o(a.length - 1);
      else if (u.keyCode == 13 || u.keyCode == 10)
        p(c());
      else
        return;
      u.preventDefault();
    }), s.addEventListener("click", (u) => {
      for (let d = 0; d < a.length; d++)
        a[d].contains(u.target) && (o(d), p(d), u.preventDefault());
    });
    let f = document.createElement("div");
    f.appendChild(s);
    let h = f.appendChild(document.createElement("button"));
    return h.className = "cm-dialog-close", h.textContent = "×", h.addEventListener("click", () => U(i)), h.setAttribute("aria-label", i.state.phrase("close")), {
      dom: f,
      destroy: () => e.destroy(),
      mount: () => s.focus()
    };
  };
}
function Un(t) {
  let e = t[0], n = e.length;
  for (let i = 1; i < t.length; i++) {
    let r = t[i], s = 0;
    for (let l = Math.min(n, r.length); s < l && e[s] == r[s]; s++)
      ;
    n = s;
  }
  for (; n && e[n - 1] != "/"; )
    n--;
  return n;
}
const Pe = [
  { key: "Shift-F12", run: ft, preventDefault: !0 },
  { key: "Escape", run: U }
];
function Wn(t) {
  return t == 1 ? "error" : t == 2 ? "warning" : t == 3 ? "info" : "hint";
}
const Jn = /* @__PURE__ */ ae.fromClass(class {
  constructor() {
    this.pending = -1;
  }
  update(t) {
    t.docChanged && (this.pending > -1 && clearTimeout(this.pending), this.pending = setTimeout(() => {
      this.pending = -1;
      let e = b.get(t.view);
      e && e.client.sync();
    }, 500));
  }
  destroy() {
    this.pending > -1 && clearTimeout(this.pending);
  }
});
function dt() {
  return {
    clientCapabilities: { textDocument: { publishDiagnostics: { versionSupport: !0 } } },
    notificationHandlers: {
      "textDocument/publishDiagnostics": (t, e) => {
        let n = t.workspace.getFile(e.uri);
        if (!n || e.version != null && e.version != n.version)
          return !1;
        const i = n.getView(), r = i && b.get(i);
        return !i || !r ? !1 : (i.dispatch(Pt(i.state, e.diagnostics.map((s) => {
          var l;
          return {
            from: r.unsyncedChanges.mapPos(r.fromPosition(s.range.start, r.syncedDoc)),
            to: r.unsyncedChanges.mapPos(r.fromPosition(s.range.end, r.syncedDoc)),
            severity: Wn((l = s.severity) !== null && l !== void 0 ? l : 1),
            message: s.message
          };
        }))), !0);
      }
    },
    editorExtension: Jn
  };
}
function Xn(t, e, n) {
  return [
    b.create(t, e, n),
    we(),
    ve(),
    ce.of([...ye, ...Te, ...Re, ...Pe]),
    Se()
  ];
}
function Yn() {
  return [
    we(),
    ve(),
    ce.of([...ye, ...Te, ...Re, ...Pe]),
    Se(),
    dt()
  ];
}
const li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LSPClient: bn,
  LSPPlugin: b,
  Workspace: et,
  WorkspaceMapping: tt,
  closeReferencePanel: U,
  findReferences: ft,
  findReferencesKeymap: Pe,
  formatDocument: lt,
  formatKeymap: ye,
  hoverTooltips: ve,
  jumpToDeclaration: Hn,
  jumpToDefinition: ht,
  jumpToDefinitionKeymap: Re,
  jumpToImplementation: Gn,
  jumpToTypeDefinition: Zn,
  languageServerExtensions: Yn,
  languageServerSupport: Xn,
  nextSignature: ct,
  prevSignature: ut,
  renameKeymap: Te,
  renameSymbol: at,
  serverCompletion: we,
  serverCompletionSource: se,
  serverDiagnostics: dt,
  showSignatureHelp: ot,
  signatureHelp: Se,
  signatureKeymap: pt
}, Symbol.toStringTag, { value: "Module" }));
export {
  bn as LSPClient,
  b as LSPPlugin,
  et as Workspace,
  tt as WorkspaceMapping,
  U as closeReferencePanel,
  li as default,
  ft as findReferences,
  Pe as findReferencesKeymap,
  lt as formatDocument,
  ye as formatKeymap,
  ve as hoverTooltips,
  Hn as jumpToDeclaration,
  ht as jumpToDefinition,
  Re as jumpToDefinitionKeymap,
  Gn as jumpToImplementation,
  Zn as jumpToTypeDefinition,
  Yn as languageServerExtensions,
  Xn as languageServerSupport,
  ct as nextSignature,
  ut as prevSignature,
  Te as renameKeymap,
  at as renameSymbol,
  we as serverCompletion,
  se as serverCompletionSource,
  dt as serverDiagnostics,
  ot as showSignatureHelp,
  Se as signatureHelp,
  pt as signatureKeymap
};
