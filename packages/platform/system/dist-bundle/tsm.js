var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
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
  const numeric2 = /^[0-9]+$/;
  const compareIdentifiers = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a === b ? 0 : a < b ? -1 : 1;
    }
    const anum = numeric2.test(a);
    const bnum = numeric2.test(b);
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
var semver$2;
var hasRequiredSemver$1;
function requireSemver$1() {
  if (hasRequiredSemver$1) return semver$2;
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
  semver$2 = SemVer;
  return semver$2;
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
  const compare2 = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
  compare_1 = compare2;
  return compare_1;
}
var rcompare_1;
var hasRequiredRcompare;
function requireRcompare() {
  if (hasRequiredRcompare) return rcompare_1;
  hasRequiredRcompare = 1;
  const compare2 = requireCompare();
  const rcompare = (a, b, loose) => compare2(b, a, loose);
  rcompare_1 = rcompare;
  return rcompare_1;
}
var compareLoose_1;
var hasRequiredCompareLoose;
function requireCompareLoose() {
  if (hasRequiredCompareLoose) return compareLoose_1;
  hasRequiredCompareLoose = 1;
  const compare2 = requireCompare();
  const compareLoose = (a, b) => compare2(a, b, true);
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
  const compare2 = requireCompare();
  const gt = (a, b, loose) => compare2(a, b, loose) > 0;
  gt_1 = gt;
  return gt_1;
}
var lt_1;
var hasRequiredLt;
function requireLt() {
  if (hasRequiredLt) return lt_1;
  hasRequiredLt = 1;
  const compare2 = requireCompare();
  const lt = (a, b, loose) => compare2(a, b, loose) < 0;
  lt_1 = lt;
  return lt_1;
}
var eq_1;
var hasRequiredEq;
function requireEq() {
  if (hasRequiredEq) return eq_1;
  hasRequiredEq = 1;
  const compare2 = requireCompare();
  const eq = (a, b, loose) => compare2(a, b, loose) === 0;
  eq_1 = eq;
  return eq_1;
}
var neq_1;
var hasRequiredNeq;
function requireNeq() {
  if (hasRequiredNeq) return neq_1;
  hasRequiredNeq = 1;
  const compare2 = requireCompare();
  const neq = (a, b, loose) => compare2(a, b, loose) !== 0;
  neq_1 = neq;
  return neq_1;
}
var gte_1;
var hasRequiredGte;
function requireGte() {
  if (hasRequiredGte) return gte_1;
  hasRequiredGte = 1;
  const compare2 = requireCompare();
  const gte = (a, b, loose) => compare2(a, b, loose) >= 0;
  gte_1 = gte;
  return gte_1;
}
var lte_1;
var hasRequiredLte;
function requireLte() {
  if (hasRequiredLte) return lte_1;
  hasRequiredLte = 1;
  const compare2 = requireCompare();
  const lte = (a, b, loose) => compare2(a, b, loose) <= 0;
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
  const satisfies2 = (version, range2, options) => {
    try {
      range2 = new Range(range2, options);
    } catch (er) {
      return false;
    }
    return range2.test(version);
  };
  satisfies_1 = satisfies2;
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
  const satisfies2 = requireSatisfies();
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
    if (satisfies2(version, range2, options)) {
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
  const satisfies2 = requireSatisfies();
  const compare2 = requireCompare();
  simplify = (versions, range2, options) => {
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b) => compare2(a, b, options));
    for (const version of v) {
      const included = satisfies2(version, range2, options);
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
  const satisfies2 = requireSatisfies();
  const compare2 = requireCompare();
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
      gtltComp = compare2(gt.semver, lt.semver, options);
      if (gtltComp > 0) {
        return null;
      } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
        return null;
      }
    }
    for (const eq of eqSet) {
      if (gt && !satisfies2(eq, String(gt), options)) {
        return null;
      }
      if (lt && !satisfies2(eq, String(lt), options)) {
        return null;
      }
      for (const c of dom) {
        if (!satisfies2(eq, String(c), options)) {
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
        } else if (gt.operator === ">=" && !satisfies2(gt.semver, String(c), options)) {
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
        } else if (lt.operator === "<=" && !satisfies2(lt.semver, String(c), options)) {
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
    const comp = compare2(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
  };
  const lowerLT = (a, b, options) => {
    if (!a) {
      return b;
    }
    const comp = compare2(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
  };
  subset_1 = subset;
  return subset_1;
}
var semver$1;
var hasRequiredSemver;
function requireSemver() {
  if (hasRequiredSemver) return semver$1;
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
  const compare2 = requireCompare();
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
  const satisfies2 = requireSatisfies();
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
  semver$1 = {
    parse,
    valid: valid2,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare: compare2,
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
    satisfies: satisfies2,
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
  return semver$1;
}
var semverExports = requireSemver();
const semver = /* @__PURE__ */ getDefaultExportFromCjs(semverExports);
function requiresAtLeastOne(requirement) {
  if (requirement.cardinality) {
    return requirement.cardinality.startsWith("1..");
  }
  return requirement.optional !== true;
}
function collectsMany(requirement) {
  return requirement.cardinality?.endsWith("..n") === true;
}
function normalizeDependency(dep) {
  if (typeof dep === "string") {
    return { id: dep };
  }
  return dep;
}
function getDependencyId(dep) {
  return typeof dep === "string" ? dep : dep.id;
}
class DependencyResolver {
  /**
   * Resolve dependencies and return load order
   * Uses Kahn's algorithm for topological sorting
   * Validates version compatibility using semver
   */
  resolve(modules) {
    const result = {
      loadOrder: [],
      circular: [],
      missing: [],
      versionConflicts: [],
      resolvedVersions: /* @__PURE__ */ new Map()
    };
    const moduleVersionsMap = /* @__PURE__ */ new Map();
    for (const mod of modules) {
      const existing = moduleVersionsMap.get(mod.id) ?? [];
      existing.push(mod);
      moduleVersionsMap.set(mod.id, existing);
    }
    const moduleMap = /* @__PURE__ */ new Map();
    for (const [id, versions] of moduleVersionsMap) {
      const sorted = [...versions].sort((a, b) => semverExports.rcompare(a.version, b.version));
      moduleMap.set(id, sorted[0]);
      result.resolvedVersions.set(id, sorted[0].version);
    }
    for (const mod of modules) {
      for (const dep of mod.dependencies ?? []) {
        const depSpec = normalizeDependency(dep);
        const availableModule = moduleMap.get(depSpec.id);
        if (!availableModule) {
          result.missing.push({ moduleId: mod.id, missingDep: depSpec.id });
        } else if (depSpec.versionRange) {
          if (!semverExports.satisfies(availableModule.version, depSpec.versionRange)) {
            let conflict = result.versionConflicts.find((c) => c.moduleId === depSpec.id);
            if (!conflict) {
              conflict = {
                moduleId: depSpec.id,
                availableVersion: availableModule.version,
                requirements: []
              };
              result.versionConflicts.push(conflict);
            }
            conflict.requirements.push({
              requiredBy: mod.id,
              versionRange: depSpec.versionRange
            });
          }
        }
      }
    }
    result.circular = this.detectCycles(modules);
    if (result.circular.length > 0) {
      result.loadOrder = this.fallbackSort(modules);
      return result;
    }
    result.loadOrder = this.topologicalSort(modules, moduleMap);
    return result;
  }
  /**
   * Find the best matching version for a dependency spec
   * Returns undefined if no matching version exists
   */
  findMatchingVersion(depSpec, modules) {
    const candidates = modules.filter((m) => m.id === depSpec.id);
    if (candidates.length === 0) {
      return void 0;
    }
    if (!depSpec.versionRange) {
      return candidates.sort((a, b) => semverExports.rcompare(a.version, b.version))[0];
    }
    const matching = candidates.filter((m) => semverExports.satisfies(m.version, depSpec.versionRange)).sort((a, b) => semverExports.rcompare(a.version, b.version));
    return matching[0];
  }
  /**
   * Check if a specific version satisfies a dependency spec
   */
  satisfies(version, depSpec) {
    if (!depSpec.versionRange) {
      return true;
    }
    return semverExports.satisfies(version, depSpec.versionRange);
  }
  /**
   * Find the maximum version that satisfies all given constraints
   */
  findCompatibleVersion(moduleId, constraints, modules) {
    const candidates = modules.filter((m) => m.id === moduleId).map((m) => m.version).sort((a, b) => semverExports.rcompare(a, b));
    for (const version of candidates) {
      const satisfiesAll = constraints.every((range2) => semverExports.satisfies(version, range2));
      if (satisfiesAll) {
        return version;
      }
    }
    return void 0;
  }
  /**
   * Which module provides which service, by service ID.
   *
   * The highest declared ranking wins, matching how the registry picks the
   * visible service; ties go to the first declaration. Only that one provider
   * becomes a load-order edge: with several providers the set is filled at
   * runtime, and an edge per provider would turn ordinary fan-in into
   * artificial cycles.
   */
  serviceProviders(modules) {
    const providers = /* @__PURE__ */ new Map();
    for (const mod of modules) {
      for (const service of mod.provides ?? []) {
        const ranking = service.ranking ?? 0;
        const incumbent = providers.get(service.id);
        if (!incumbent || ranking > incumbent.ranking) {
          providers.set(service.id, { moduleId: mod.id, ranking });
        }
      }
    }
    return new Map([...providers].map(([serviceId2, best2]) => [serviceId2, best2.moduleId]));
  }
  /**
   * Module IDs a module has to be ordered after: its declared dependencies plus
   * the providers of the services it requires.
   *
   * Without the service edges, load order has to be maintained by hand even
   * though the manifests already say what a module needs.
   */
  effectiveDependencyIds(mod, providers) {
    const ids = /* @__PURE__ */ new Set();
    for (const dep of mod.dependencies ?? []) {
      ids.add(getDependencyId(dep));
    }
    for (const requirement of mod.requiresService ?? []) {
      if (!requiresAtLeastOne(requirement))
        continue;
      if (collectsMany(requirement))
        continue;
      const providerId = providers.get(requirement.id);
      if (providerId && providerId !== mod.id) {
        ids.add(providerId);
      }
    }
    return [...ids];
  }
  /**
   * Detect circular dependencies using DFS
   */
  detectCycles(modules) {
    const cycles = [];
    const visited = /* @__PURE__ */ new Set();
    const recursionStack = /* @__PURE__ */ new Set();
    const path = [];
    const moduleMap = /* @__PURE__ */ new Map();
    for (const mod of modules) {
      if (!moduleMap.has(mod.id)) {
        moduleMap.set(mod.id, mod);
      }
    }
    const providers = this.serviceProviders(moduleMap.values());
    const dfs = (moduleId) => {
      visited.add(moduleId);
      recursionStack.add(moduleId);
      path.push(moduleId);
      const mod = moduleMap.get(moduleId);
      if (mod) {
        for (const depId of this.effectiveDependencyIds(mod, providers)) {
          if (!visited.has(depId)) {
            if (dfs(depId))
              return true;
          } else if (recursionStack.has(depId)) {
            const cycleStart = path.indexOf(depId);
            const cycle = path.slice(cycleStart);
            cycle.push(depId);
            cycles.push(cycle);
            return true;
          }
        }
      }
      path.pop();
      recursionStack.delete(moduleId);
      return false;
    };
    for (const mod of modules) {
      if (!visited.has(mod.id)) {
        dfs(mod.id);
      }
    }
    return cycles;
  }
  /**
   * Topological sort using Kahn's algorithm
   */
  topologicalSort(_modules, moduleMap) {
    const uniqueModules = Array.from(moduleMap.values());
    const providers = this.serviceProviders(uniqueModules);
    const edges = /* @__PURE__ */ new Map();
    for (const mod of uniqueModules) {
      edges.set(mod.id, this.effectiveDependencyIds(mod, providers));
    }
    const inDegree = /* @__PURE__ */ new Map();
    for (const mod of uniqueModules) {
      inDegree.set(mod.id, 0);
    }
    for (const mod of uniqueModules) {
      for (const depId of edges.get(mod.id) ?? []) {
        if (moduleMap.has(depId)) {
          inDegree.set(mod.id, (inDegree.get(mod.id) ?? 0) + 1);
        }
      }
    }
    const queue = [];
    for (const mod of uniqueModules) {
      if (inDegree.get(mod.id) === 0) {
        queue.push(mod);
      }
    }
    queue.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
    const result = [];
    while (queue.length > 0) {
      queue.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
      const mod = queue.shift();
      result.push(mod);
      for (const otherMod of uniqueModules) {
        const dependsOnMod = edges.get(otherMod.id)?.includes(mod.id);
        if (dependsOnMod) {
          const newDegree = (inDegree.get(otherMod.id) ?? 1) - 1;
          inDegree.set(otherMod.id, newDegree);
          if (newDegree === 0) {
            queue.push(otherMod);
          }
        }
      }
    }
    return result;
  }
  /**
   * Fallback sorting when cycles exist
   */
  fallbackSort(modules) {
    const moduleMap = /* @__PURE__ */ new Map();
    for (const mod of modules) {
      const existing = moduleMap.get(mod.id);
      if (!existing || semverExports.gt(mod.version, existing.version)) {
        moduleMap.set(mod.id, mod);
      }
    }
    return [...moduleMap.values()].sort((a, b) => {
      const priorityDiff = (b.priority ?? 0) - (a.priority ?? 0);
      if (priorityDiff !== 0)
        return priorityDiff;
      const aDeps = a.dependencies?.length ?? 0;
      const bDeps = b.dependencies?.length ?? 0;
      return aDeps - bDeps;
    });
  }
  /**
   * Get all transitive dependencies of a module
   */
  getTransitiveDependencies(moduleId, modules) {
    const moduleMap = /* @__PURE__ */ new Map();
    for (const mod of modules) {
      if (!moduleMap.has(mod.id)) {
        moduleMap.set(mod.id, mod);
      }
    }
    const result = /* @__PURE__ */ new Set();
    const visited = /* @__PURE__ */ new Set();
    const collect = (id) => {
      if (visited.has(id))
        return;
      visited.add(id);
      const mod = moduleMap.get(id);
      if (mod) {
        for (const dep of mod.dependencies ?? []) {
          const depId = getDependencyId(dep);
          result.add(depId);
          collect(depId);
        }
      }
    };
    collect(moduleId);
    return Array.from(result);
  }
  /**
   * Get modules that depend on the given module
   */
  getDependents(moduleId, modules) {
    return modules.filter((mod) => mod.dependencies?.some((dep) => getDependencyId(dep) === moduleId)).map((mod) => mod.id);
  }
  /**
   * Every module that depends on the given one, directly or through others,
   * nearest first.
   *
   * `getDependents()` stops at the first level; reloading a module has to reach
   * the whole chain, or a module two steps away keeps running against code that
   * was replaced.
   */
  getTransitiveDependents(moduleId, modules) {
    const found = [];
    const seen = /* @__PURE__ */ new Set([moduleId]);
    let frontier = [moduleId];
    while (frontier.length > 0) {
      const next = [];
      for (const current of frontier) {
        for (const dependent of this.getDependents(current, modules)) {
          if (seen.has(dependent))
            continue;
          seen.add(dependent);
          found.push(dependent);
          next.push(dependent);
        }
      }
      frontier = next;
    }
    return found;
  }
  /**
   * Check if all version constraints can be satisfied
   * Returns list of modules with unsatisfiable constraints
   */
  validateVersionConstraints(modules) {
    const conflicts = [];
    const requirements = /* @__PURE__ */ new Map();
    for (const mod of modules) {
      for (const dep of mod.dependencies ?? []) {
        const depSpec = normalizeDependency(dep);
        if (depSpec.versionRange) {
          const existing = requirements.get(depSpec.id) ?? [];
          existing.push({ requiredBy: mod.id, versionRange: depSpec.versionRange });
          requirements.set(depSpec.id, existing);
        }
      }
    }
    for (const [moduleId, reqs] of requirements) {
      const available = modules.filter((m) => m.id === moduleId);
      if (available.length === 0)
        continue;
      const satisfyingVersion = available.find((m) => reqs.every((r) => semverExports.satisfies(m.version, r.versionRange)));
      if (!satisfyingVersion) {
        const highest = available.sort((a, b) => semverExports.rcompare(a.version, b.version))[0];
        conflicts.push({
          moduleId,
          availableVersion: highest.version,
          requirements: reqs
        });
      }
    }
    return conflicts;
  }
  /**
   * Suggest version ranges that could resolve conflicts
   */
  suggestResolution(conflict) {
    const ranges = conflict.requirements.map((r) => r.versionRange);
    try {
      const intersection = semverExports.intersects(ranges[0], ranges[1]);
      if (intersection) {
        return `Consider using version range that satisfies: ${ranges.join(" AND ")}`;
      }
    } catch {
    }
    return `No compatible version found. Required: ${ranges.join(", ")}`;
  }
}
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
const SCOPE_KEY = Symbol.for("tsm:scope");
const COMPONENT_KEY = Symbol.for("tsm:component");
const ACTIVATE_KEY = Symbol.for("tsm:component:activate");
const DEACTIVATE_KEY = Symbol.for("tsm:component:deactivate");
const MODIFIED_KEY = Symbol.for("tsm:component:modified");
const INJECT_ALL_KEY = Symbol.for("tsm:inject:all");
const BIND_KEY = Symbol.for("tsm:component:bind");
const UNBIND_KEY = Symbol.for("tsm:component:unbind");
function injectAll(serviceId2, options = {}) {
  return (target, propertyKey) => {
    const ctor = target.constructor;
    const existing = Reflect.getOwnMetadata(INJECT_ALL_KEY, ctor) ?? [];
    Reflect.defineMetadata(INJECT_ALL_KEY, [...existing, {
      propertyKey,
      serviceId: serviceId2,
      target: options.target,
      fieldOption: options.fieldOption ?? "replace"
    }], ctor);
  };
}
function getInjectAllMetadata(target) {
  return Reflect.getOwnMetadata(INJECT_ALL_KEY, target) ?? [];
}
function injectable() {
  return (target) => {
    Reflect.defineMetadata(INJECTABLE_KEY, true, target);
  };
}
function inject(serviceId2, options) {
  return (target, propertyKey, parameterIndex) => {
    if (parameterIndex !== void 0) {
      const existing = Reflect.getOwnMetadata(INJECT_KEY, target) ?? [];
      existing.push({
        index: parameterIndex,
        serviceId: serviceId2,
        optional: options?.optional ?? false
      });
      Reflect.defineMetadata(INJECT_KEY, existing, target);
    } else {
      const ctor = target.constructor;
      const existing = Reflect.getOwnMetadata(INJECT_PROPERTY_KEY, ctor) ?? [];
      existing.push({
        propertyKey,
        serviceId: serviceId2,
        optional: options?.optional ?? false
      });
      Reflect.defineMetadata(INJECT_PROPERTY_KEY, existing, ctor);
    }
  };
}
function singleton() {
  return (target) => {
    Reflect.defineMetadata(SCOPE_KEY, "singleton", target);
  };
}
function perModule() {
  return (target) => {
    Reflect.defineMetadata(SCOPE_KEY, "module", target);
  };
}
function transient() {
  return (target) => {
    Reflect.defineMetadata(SCOPE_KEY, "transient", target);
  };
}
function getInjectMetadata(target) {
  const metadata = Reflect.getOwnMetadata(INJECT_KEY, target) ?? [];
  return metadata.sort((a, b) => a.index - b.index);
}
function getPropertyInjectMetadata(target) {
  return Reflect.getOwnMetadata(INJECT_PROPERTY_KEY, target) ?? [];
}
function component(options = {}) {
  return (target) => {
    Reflect.defineMetadata(COMPONENT_KEY, options, target);
    Reflect.defineMetadata(INJECTABLE_KEY, true, target);
  };
}
function activate() {
  return (target, propertyKey) => {
    Reflect.defineMetadata(ACTIVATE_KEY, propertyKey, target.constructor);
  };
}
function deactivate() {
  return (target, propertyKey) => {
    Reflect.defineMetadata(DEACTIVATE_KEY, propertyKey, target.constructor);
  };
}
function modified() {
  return (target, propertyKey) => {
    Reflect.defineMetadata(MODIFIED_KEY, propertyKey, target.constructor);
  };
}
function getComponentMetadata(target) {
  return Reflect.getOwnMetadata(COMPONENT_KEY, target);
}
function getActivateMethod(target) {
  return Reflect.getOwnMetadata(ACTIVATE_KEY, target);
}
function getDeactivateMethod(target) {
  return Reflect.getOwnMetadata(DEACTIVATE_KEY, target);
}
function bind(serviceId2, options) {
  return (target, propertyKey) => {
    const existing = Reflect.getOwnMetadata(BIND_KEY, target.constructor) ?? [];
    Reflect.defineMetadata(BIND_KEY, [...existing, { serviceId: serviceId2, method: propertyKey, optional: options?.optional === true }], target.constructor);
  };
}
function unbind(serviceId2) {
  return (target, propertyKey) => {
    const existing = Reflect.getOwnMetadata(UNBIND_KEY, target.constructor) ?? [];
    Reflect.defineMetadata(UNBIND_KEY, [...existing, { serviceId: serviceId2, method: propertyKey, optional: false }], target.constructor);
  };
}
function getBindMethods(target) {
  return Reflect.getOwnMetadata(BIND_KEY, target) ?? [];
}
function getUnbindMethods(target) {
  return Reflect.getOwnMetadata(UNBIND_KEY, target) ?? [];
}
function getModifiedMethod(target) {
  return Reflect.getOwnMetadata(MODIFIED_KEY, target);
}
function isInjectable(target) {
  return Reflect.getOwnMetadata(INJECTABLE_KEY, target) === true;
}
function getScopeMetadata(target) {
  return Reflect.getOwnMetadata(SCOPE_KEY, target);
}
class FilterParser {
  source;
  read;
  position = 0;
  constructor(source, read) {
    this.source = source;
    this.read = read;
  }
  parse() {
    const filter = this.parseFilter();
    this.skipWhitespace();
    if (this.position < this.source.length) {
      throw this.error(`unexpected trailing input`);
    }
    return filter;
  }
  parseFilter() {
    this.skipWhitespace();
    this.expect("(");
    this.skipWhitespace();
    const operator = this.source[this.position];
    let filter;
    if ((operator === "&" || operator === "|") && this.filterFollows(1)) {
      this.position++;
      const operands = this.parseOperands();
      filter = operator === "&" ? (properties) => operands.every((operand) => operand(properties)) : (properties) => operands.some((operand) => operand(properties));
    } else if (operator === "!" && this.filterFollows(1)) {
      this.position++;
      const operand = this.parseFilter();
      filter = (properties) => !operand(properties);
    } else {
      filter = this.parseItem();
    }
    this.skipWhitespace();
    this.expect(")");
    return filter;
  }
  /** Whether the next non-whitespace character after an offset opens a filter */
  filterFollows(offset) {
    let lookahead = this.position + offset;
    while (lookahead < this.source.length && /\s/.test(this.source[lookahead])) {
      lookahead++;
    }
    return this.source[lookahead] === "(";
  }
  parseOperands() {
    const operands = [];
    this.skipWhitespace();
    while (this.source[this.position] === "(") {
      operands.push(this.parseFilter());
      this.skipWhitespace();
    }
    if (operands.length === 0) {
      throw this.error("operator without operands");
    }
    return operands;
  }
  parseItem() {
    const attribute = this.readAttribute();
    const operator = this.readOperator();
    const { parts, wildcards } = this.readValue();
    if (operator === "~=") {
      const approximate = approximately(parts.join(""));
      return (properties) => matches(this.read(properties, attribute), (actual) => typeof actual === "string" || typeof actual === "number" ? approximately(String(actual)) === approximate : false);
    }
    if (operator === "=" && wildcards) {
      if (parts.every((part) => part.length === 0)) {
        return (properties) => this.read(properties, attribute) !== void 0;
      }
      const pattern = substringPattern(parts);
      return (properties) => matches(
        this.read(properties, attribute),
        // A wildcard is a string operation: OSGi does not apply it to numbers
        // or booleans, so (intvalue=100*) does not match 1000
        (actual) => typeof actual === "string" && pattern.test(actual)
      );
    }
    const value = parts.join("");
    if (operator === "=") {
      return (properties) => matches(this.read(properties, attribute), (actual) => equals(actual, value));
    }
    return (properties) => matches(this.read(properties, attribute), (actual) => compare(actual, value, operator));
  }
  readAttribute() {
    const start = this.position;
    while (this.position < this.source.length && !"=<>()~".includes(this.source[this.position])) {
      this.position++;
    }
    const attribute = this.source.slice(start, this.position).trim();
    if (attribute.length === 0) {
      throw this.error("missing attribute name");
    }
    return attribute;
  }
  readOperator() {
    if (this.source.startsWith(">=", this.position)) {
      this.position += 2;
      return ">=";
    }
    if (this.source.startsWith("<=", this.position)) {
      this.position += 2;
      return "<=";
    }
    if (this.source[this.position] === "=") {
      this.position++;
      return "=";
    }
    if (this.source.startsWith("~=", this.position)) {
      this.position += 2;
      return "~=";
    }
    throw this.error("expected =, >=, <= or ~=");
  }
  /**
   * Read a value as literal segments split at unescaped wildcards.
   *
   * Splitting while reading is what keeps `\*` apart from `*`: once the escape
   * is dropped, a literal asterisk is indistinguishable from a wildcard.
   */
  readValue() {
    const parts = [""];
    let wildcards = false;
    while (this.position < this.source.length) {
      const character = this.source[this.position];
      if (character === ")")
        break;
      if (character === "\\") {
        const escaped = this.source[this.position + 1];
        if (escaped === void 0) {
          throw this.error("trailing escape character");
        }
        parts[parts.length - 1] += escaped;
        this.position += 2;
        continue;
      }
      if (character === "*") {
        wildcards = true;
        parts.push("");
        this.position++;
        continue;
      }
      parts[parts.length - 1] += character;
      this.position++;
    }
    return { parts, wildcards };
  }
  skipWhitespace() {
    while (this.position < this.source.length && /\s/.test(this.source[this.position])) {
      this.position++;
    }
  }
  expect(character) {
    if (this.source[this.position] !== character) {
      throw this.error(`expected '${character}'`);
    }
    this.position++;
  }
  error(message) {
    return new Error(`Invalid service filter at position ${this.position}: ${message} — '${this.source}'`);
  }
}
function substringPattern(parts) {
  const escaped = parts.map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*");
  return new RegExp(`^${escaped}$`);
}
const ignoringCase = (properties, attribute) => {
  const direct = properties[attribute];
  if (direct !== void 0)
    return direct;
  const wanted = attribute.toLowerCase();
  for (const [key, value] of Object.entries(properties)) {
    if (key.toLowerCase() === wanted)
      return value;
  }
  return void 0;
};
const exactly = (properties, attribute) => properties[attribute];
function matches(actual, test) {
  if (actual === void 0)
    return false;
  if (Array.isArray(actual))
    return actual.some((element) => test(element));
  return test(actual);
}
function equals(actual, expected) {
  if (typeof actual === "boolean")
    return String(actual) === expected.trim();
  if (typeof actual === "number")
    return numeric(expected) === actual;
  return actual === expected;
}
function numeric(value) {
  const trimmed = value.trim();
  return trimmed.length === 0 ? Number.NaN : Number(trimmed);
}
function compare(actual, expected, operator) {
  if (typeof actual === "boolean") {
    return false;
  }
  if (typeof actual === "number") {
    const expectedNumber = numeric(expected);
    if (Number.isNaN(expectedNumber))
      return false;
    return operator === ">=" ? actual >= expectedNumber : actual <= expectedNumber;
  }
  return operator === ">=" ? actual >= expected : actual <= expected;
}
function approximately(value) {
  return value.replace(/\s+/g, "").toLowerCase();
}
function createServiceFilter(expression, options = {}) {
  return new FilterParser(expression, options.caseSensitive === true ? exactly : ignoringCase).parse();
}
function propertiesOf(binding) {
  const properties = { ...binding.properties };
  properties["service.ranking"] = binding.ranking;
  if (binding.providedBy !== void 0) {
    properties["service.providedBy"] = binding.providedBy;
  }
  return properties;
}
function referenceKey(id, binding) {
  return `${id}#${binding.seq}`;
}
class DefaultServiceRegistry {
  services = /* @__PURE__ */ new Map();
  bindings = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  /**
   * The filter a listener was added with, when it was added with one.
   *
   * Kept beside the set rather than wrapping the listener, so `removeListener`
   * still works with the object the caller passed.
   */
  listenerFilters = /* @__PURE__ */ new Map();
  /** Reverse index: primary service ID -> alias IDs created for it */
  aliasesOf = /* @__PURE__ */ new Map();
  /** Reverse index: service ID -> binding IDs that inject it (from bindClass) */
  injectedInto = /* @__PURE__ */ new Map();
  /**
   * Registrations for an ID that are currently outranked by the visible one.
   *
   * Readers still see a single service per ID, but a second provider is kept
   * instead of dropped: when the visible one goes, the best of these takes
   * over rather than the ID falling silent.
   */
  shadowed = /* @__PURE__ */ new Map();
  nextSeq = 1;
  /** Parsed target filters, so a repeated lookup does not re-parse */
  filterCache = /* @__PURE__ */ new Map();
  /**
   * Install a registration and decide whether it becomes the visible one.
   *
   * A registration from the same provider replaces its own earlier one, so
   * registering twice under one ID does not accumulate.
   */
  addRegistration(id, binding) {
    const previouslyKnown = this.bindings.has(id);
    const visible = this.bindings.get(id);
    const sameSource = (candidate) => candidate.providedBy === binding.providedBy && candidate.origin === binding.origin && candidate.instanceKey === binding.instanceKey;
    this.removeShadowed(id, sameSource);
    const replacesVisible = visible !== void 0 && sameSource(visible);
    if (!visible || replacesVisible || this.outranks(binding, visible)) {
      if (visible && !replacesVisible) {
        this.pushShadowed(id, visible);
      }
      if (replacesVisible) {
        this.dropAliasesOf(id, visible.seq);
        this.dropInjectionEdges(id);
      }
      this.setVisible(id, binding);
      this.notify({
        type: previouslyKnown ? "updated" : "registered",
        serviceId: id,
        service: binding.instance,
        properties: propertiesOf(binding)
      });
    } else {
      this.pushShadowed(id, binding);
      this.notify({
        type: "registered",
        serviceId: id,
        service: binding.instance,
        properties: propertiesOf(binding)
      });
    }
    return this.createHandle(id, binding);
  }
  outranks(candidate, incumbent) {
    if (candidate.ranking !== incumbent.ranking) {
      return candidate.ranking > incumbent.ranking;
    }
    return candidate.seq > incumbent.seq;
  }
  setVisible(id, binding) {
    this.invalidateInjectors(id, /* @__PURE__ */ new Set());
    this.bindings.set(id, binding);
    if (binding.instance !== void 0) {
      this.services.set(id, binding.instance);
    } else {
      this.services.delete(id);
    }
  }
  pushShadowed(id, binding) {
    const bench = this.shadowed.get(id);
    if (bench) {
      bench.push(binding);
    } else {
      this.shadowed.set(id, [binding]);
    }
  }
  removeShadowed(id, matches2) {
    const bench = this.shadowed.get(id);
    if (!bench)
      return false;
    const kept = bench.filter((binding) => !matches2(binding));
    if (kept.length === bench.length)
      return false;
    if (kept.length === 0) {
      this.shadowed.delete(id);
    } else {
      this.shadowed.set(id, kept);
    }
    return true;
  }
  /** All registrations for an ID, best first */
  registrationsOf(id) {
    const visible = this.bindings.get(id);
    const bench = [...this.shadowed.get(id) ?? []].sort((a, b) => a.ranking !== b.ranking ? b.ranking - a.ranking : b.seq - a.seq);
    return visible ? [visible, ...bench] : bench;
  }
  createHandle(id, binding) {
    return {
      serviceId: id,
      providedBy: binding.providedBy,
      ranking: binding.ranking,
      key: referenceKey(id, binding),
      unregister: () => this.unregisterRegistration(id, binding.seq),
      setProperties: (properties, options = {}) => this.updateProperties(id, binding, properties, options),
      resolve: () => {
        if (!this.registrationsOf(id).some((candidate) => candidate.seq === binding.seq)) {
          return void 0;
        }
        return this.instantiate(id, binding, /* @__PURE__ */ new Set());
      }
    };
  }
  /**
   * Replace the properties of one registration, and of the alias registrations
   * that belong to it.
   *
   * The properties declared for an individual ID are kept underneath: the
   * manifest describes where a service belongs, the new properties — in practice
   * a component's configuration — win over that per key.
   */
  updateProperties(id, binding, properties, options) {
    const live = this.registrationsOf(id).find((candidate) => candidate.seq === binding.seq);
    if (!live)
      return false;
    const before = propertiesOf(live);
    const { ranking, propertiesById } = options;
    const apply = (target, serviceId2) => {
      target.properties = { ...propertiesById?.[serviceId2] ?? properties };
      if (ranking !== void 0) {
        target.ranking = ranking;
      }
    };
    apply(live, id);
    for (const aliasId of this.aliasesOf.get(id) ?? []) {
      const alias = this.registrationsOf(aliasId).find((candidate) => candidate.aliasSeq === binding.seq);
      if (alias) {
        apply(alias, aliasId);
        if (ranking !== void 0)
          this.reevaluateVisibility(aliasId);
      }
    }
    if (ranking !== void 0) {
      this.reevaluateVisibility(id);
    }
    const after = propertiesOf(live);
    this.notify({ type: "updated", serviceId: id, service: live.instance, properties: after });
    this.notifyEndMatch(id, live.instance, before, after);
    return true;
  }
  /**
   * Decide again which registration for an ID is the visible one.
   *
   * Only needed after a ranking changed underneath: registration order alone
   * cannot have moved anything, so nothing else disturbs the bench.
   */
  reevaluateVisibility(id) {
    const all = this.registrationsOf(id);
    if (all.length < 2)
      return;
    const best2 = all.reduce((winner, candidate) => this.outranks(candidate, winner) ? candidate : winner);
    const visible = this.bindings.get(id);
    if (visible === best2)
      return;
    this.removeShadowed(id, (candidate) => candidate.seq === best2.seq);
    if (visible)
      this.pushShadowed(id, visible);
    this.setVisible(id, best2);
  }
  /**
   * Withdraw one specific registration. When it was the visible one, the best
   * remaining registration takes over instead of the ID falling silent.
   */
  unregisterRegistration(id, seq) {
    const visible = this.bindings.get(id);
    if (visible?.seq !== seq) {
      const going = this.registrationsOf(id).find((binding) => binding.seq === seq);
      const removed = this.removeShadowed(id, (binding) => binding.seq === seq);
      if (removed) {
        this.dropAliasesOf(id, seq);
        this.notify({
          type: "unregistered",
          serviceId: id,
          service: going?.instance,
          properties: going ? propertiesOf(going) : void 0
        });
      }
      return removed;
    }
    const successor = this.registrationsOf(id).find((binding) => binding.seq !== seq);
    if (!successor) {
      return this.unregister(id);
    }
    this.removeShadowed(id, (binding) => binding.seq === successor.seq);
    this.dropAliasesOf(id, seq);
    this.dropInjectionEdges(id);
    this.setVisible(id, successor);
    this.notify({
      type: "updated",
      serviceId: id,
      service: successor.instance,
      properties: propertiesOf(successor)
    });
    return true;
  }
  /**
   * Register a service instance directly
   */
  register(id, service, options = {}) {
    return this.addRegistration(id, {
      instance: service,
      scope: "singleton",
      providedBy: options.providedBy,
      ranking: options.ranking ?? 0,
      seq: this.nextSeq++,
      properties: options.properties,
      instanceKey: options.instanceKey
    });
  }
  /**
   * Bind a factory function for lazy instantiation
   */
  bind(id, factory, options = {}) {
    return this.addRegistration(id, {
      factory,
      scope: options.scope ?? "singleton",
      providedBy: options.providedBy,
      ranking: options.ranking ?? 0,
      seq: this.nextSeq++,
      properties: options.properties,
      instanceKey: options.instanceKey
    });
  }
  /**
   * Bind a class with automatic constructor injection.
   * The class must be decorated with @injectable() and declare dependencies via @inject().
   *
   * Scope resolution order: options.scope > @singleton()/@transient() decorator > 'singleton' default
   *
   * If options.implements is provided, additional alias bindings are created that
   * delegate to the primary ID, so the same singleton is shared.
   */
  bindClass(id, ctor, options = {}) {
    if (!isInjectable(ctor)) {
      throw new Error(`Class '${ctor.name}' is not decorated with @injectable(). Add @injectable() to use bindClass().`);
    }
    const metadata = getInjectMetadata(ctor);
    const propertyMetadata = getPropertyInjectMetadata(ctor);
    const decoratorScope = getScopeMetadata(ctor);
    const scope = options.scope ?? decoratorScope ?? "singleton";
    for (const dependency of [...metadata, ...propertyMetadata]) {
      let injectors = this.injectedInto.get(dependency.serviceId);
      if (!injectors) {
        injectors = /* @__PURE__ */ new Set();
        this.injectedInto.set(dependency.serviceId, injectors);
      }
      injectors.add(id);
    }
    const primarySeq = this.nextSeq++;
    const registration = this.addRegistration(id, {
      factory: (...resolvedDeps) => new ctor(...resolvedDeps),
      scope,
      // The class identifies the registration, so a second class from the same
      // module does not replace this one
      origin: ctor,
      providedBy: options.providedBy,
      ranking: options.ranking ?? 0,
      seq: primarySeq,
      properties: options.propertiesById?.[id] ?? options.properties,
      instanceKey: options.instanceKey,
      deps: metadata.map((m) => ({ serviceId: m.serviceId, optional: m.optional })),
      propertyDeps: propertyMetadata.length > 0 ? propertyMetadata : void 0
    });
    if (options.implements) {
      let aliases = this.aliasesOf.get(id);
      if (!aliases) {
        aliases = /* @__PURE__ */ new Set();
        this.aliasesOf.set(id, aliases);
      }
      for (const interfaceId of options.implements) {
        const previous = this.bindings.get(interfaceId);
        if (previous?.aliasOf && previous.aliasOf !== id) {
          this.aliasesOf.get(previous.aliasOf)?.delete(interfaceId);
        }
        this.addRegistration(interfaceId, {
          scope,
          aliasOf: id,
          aliasSeq: primarySeq,
          origin: ctor,
          providedBy: options.providedBy,
          ranking: options.ranking ?? 0,
          seq: this.nextSeq++,
          instanceKey: options.instanceKey,
          // The interface is what consumers filter on, so it may carry its own
          properties: options.propertiesById?.[interfaceId] ?? options.properties
        });
        aliases.add(interfaceId);
      }
    }
    return registration;
  }
  /**
   * Get a service by ID
   * For singletons: creates instance on first access, returns same instance thereafter
   * For transients: creates new instance on each call
   * Automatically resolves dependencies declared via @inject()
   */
  /**
   * Construct an injectable class with its dependencies injected, without
   * registering it: the same resolution as `bindClass()`, minus the registration.
   */
  construct(ctor) {
    return this.constructFor(void 0, ctor);
  }
  /**
   * Construct a class on behalf of a module, so a `module`-scoped dependency is
   * that module's own.
   *
   * The counterpart of `getFor`. Without it a component with no service of its
   * own — built through `construct` rather than through a registration — would
   * silently share one instance with every other module, which is the one case
   * where the scope would be wrong rather than merely absent.
   */
  constructFor(consumer, ctor) {
    if (!isInjectable(ctor)) {
      throw new Error(`Class '${ctor.name}' is not decorated with @injectable() or @component(), so its dependencies are unknown`);
    }
    const resolving = /* @__PURE__ */ new Set();
    const args = getInjectMetadata(ctor).map((dependency) => {
      const resolved = this.resolveFor(consumer, dependency.serviceId, resolving);
      if (resolved === void 0 && !dependency.optional) {
        throw new Error(`Dependency '${dependency.serviceId}' not found (required by '${ctor.name}')`);
      }
      return resolved;
    });
    const instance = new ctor(...args);
    for (const property of getPropertyInjectMetadata(ctor)) {
      const resolved = this.resolveFor(consumer, property.serviceId, resolving);
      if (resolved === void 0 && !property.optional) {
        throw new Error(`Property dependency '${property.serviceId}' not found (required by '${ctor.name}' on property '${String(property.propertyKey)}')`);
      }
      instance[property.propertyKey] = resolved;
    }
    return instance;
  }
  get(id, _resolving) {
    return this.resolveFor(void 0, id, _resolving);
  }
  /**
   * Resolve a service on behalf of a module, so a `module`-scoped registration
   * can hand that module its own instance.
   */
  getFor(consumer, id) {
    return this.resolveFor(consumer, id);
  }
  resolveFor(consumer, id, resolving) {
    if (this.services.has(id)) {
      return this.services.get(id);
    }
    const binding = this.bindings.get(id);
    if (!binding) {
      return void 0;
    }
    return this.instantiate(id, binding, resolving ?? /* @__PURE__ */ new Set(), consumer);
  }
  /** Resolve one reference on behalf of a module — see {@link getFor} */
  resolveReferenceFor(consumer, reference) {
    const binding = this.registrationsOf(reference.serviceId).find((candidate) => referenceKey(reference.serviceId, candidate) === reference.key);
    if (!binding)
      return void 0;
    return this.instantiate(reference.serviceId, binding, /* @__PURE__ */ new Set(), consumer);
  }
  /**
   * Drop what a module holds under `module` scope.
   *
   * A per-module instance whose module is gone is exactly the leak this scope
   * would otherwise introduce, so the teardown has to reach it. An instance with
   * a `dispose()` method is told, which is the counterpart of `ungetService`.
   */
  releaseConsumer(consumer) {
    const released = [];
    for (const [id, binding] of this.bindings) {
      for (const candidate of [binding, ...this.shadowed.get(id) ?? []]) {
        const held = candidate.perConsumer?.get(consumer);
        if (held === void 0)
          continue;
        candidate.perConsumer.delete(consumer);
        released.push(id);
        const disposable = held;
        if (typeof disposable.dispose === "function") {
          try {
            disposable.dispose();
          } catch (error) {
            console.error(`Disposing ${id} for ${consumer} failed:`, error);
          }
        }
      }
    }
    return [...new Set(released)];
  }
  /**
   * Resolve one binding: follow an alias, reuse a singleton, or build via the
   * factory with its dependencies injected.
   *
   * Split out of `get()` because an outranked registration has to be
   * resolvable too, even though the ID answers with a different one.
   */
  instantiate(id, binding, resolving, consumer) {
    if (binding.aliasOf) {
      const target = this.aliasTarget(binding);
      if (!target)
        return void 0;
      return this.instantiate(binding.aliasOf, target, resolving, consumer);
    }
    const perConsumer = binding.scope === "module" ? consumer : void 0;
    const shared = binding.scope === "singleton" || binding.scope === "module" && !consumer;
    if (shared && binding.instance !== void 0) {
      return binding.instance;
    }
    if (perConsumer !== void 0) {
      const held = binding.perConsumer?.get(perConsumer);
      if (held !== void 0)
        return held;
    }
    if (!binding.factory) {
      return void 0;
    }
    if (resolving.has(id)) {
      const chain = [...resolving, id].join(" → ");
      throw new Error(`Circular dependency detected: ${chain}`);
    }
    resolving.add(id);
    const on = binding.providedBy ?? consumer;
    const args = (binding.deps ?? []).map((dep) => {
      const resolved = this.resolveFor(on, dep.serviceId, resolving);
      if (resolved === void 0 && !dep.optional) {
        throw new Error(`Dependency '${dep.serviceId}' not found (required by '${id}')`);
      }
      return resolved;
    });
    const instance = binding.factory(...args);
    if (binding.propertyDeps) {
      for (const prop of binding.propertyDeps) {
        const resolved = this.resolveFor(on, prop.serviceId, resolving);
        if (resolved === void 0 && !prop.optional) {
          throw new Error(`Property dependency '${prop.serviceId}' not found (required by '${id}' on property '${String(prop.propertyKey)}')`);
        }
        instance[prop.propertyKey] = resolved;
      }
    }
    if (shared) {
      binding.instance = instance;
      if (binding.scope === "singleton" && this.bindings.get(id) === binding) {
        this.services.set(id, instance);
      }
    } else if (perConsumer !== void 0) {
      binding.perConsumer ??= /* @__PURE__ */ new Map();
      binding.perConsumer.set(perConsumer, instance);
    }
    return instance;
  }
  /**
   * Get all instantiated services whose ID matches a wildcard pattern.
   *
   * @deprecated Matches ID names rather than registrations, and only sees what
   * has already been instantiated. Use `getServiceReferences(id, target?)`.
   */
  getAll(idPattern) {
    const regex = new RegExp("^" + idPattern.replace(/\*/g, ".*") + "$");
    const result = [];
    for (const [id, service] of this.services) {
      if (regex.test(id)) {
        result.push(service);
      }
    }
    return result;
  }
  /**
   * Check if a service exists (registered or bound)
   */
  has(id) {
    return this.resolveExisting(id, /* @__PURE__ */ new Set()) !== void 0;
  }
  /**
   * Resolve an ID to the binding that would actually serve it.
   * Follows aliases, so an alias whose target is gone resolves to undefined.
   */
  resolveExisting(id, seen) {
    if (seen.has(id))
      return void 0;
    seen.add(id);
    if (this.services.has(id)) {
      return this.bindings.get(id);
    }
    const binding = this.bindings.get(id);
    if (!binding)
      return void 0;
    if (binding.aliasOf) {
      const target = this.aliasTarget(binding);
      return target ? this.resolveExisting(binding.aliasOf, seen) && target : void 0;
    }
    return binding;
  }
  /**
   * The registration an alias stands for: the one it was created with, not
   * whatever is visible under that ID now.
   */
  aliasTarget(alias) {
    if (alias.aliasOf === void 0)
      return void 0;
    const candidates = this.registrationsOf(alias.aliasOf);
    if (alias.aliasSeq === void 0)
      return candidates[0];
    return candidates.find((candidate) => candidate.seq === alias.aliasSeq);
  }
  /**
   * Get a required service - throws if not available
   */
  getRequired(id) {
    const service = this.get(id);
    if (service === void 0) {
      throw new Error(`Required service not found: ${id}`);
    }
    return service;
  }
  /**
   * Check if all required services are available
   */
  checkRequirements(requirements) {
    const missing = [];
    for (const req of requirements) {
      if (!requiresAtLeastOne(req))
        continue;
      const available = req.target !== void 0 ? this.countProviders(req.id, req.target) > 0 : this.has(req.id);
      if (!available) {
        missing.push(req.id);
      }
    }
    return {
      satisfied: missing.length === 0,
      missing
    };
  }
  /**
   * Every registration for an ID, best first, without instantiating any of them.
   *
   * Collecting must not build objects nobody asked for, which is why this
   * returns references rather than services.
   */
  getServiceReferences(id, target) {
    const filter = target !== void 0 ? this.filterFor(target) : void 0;
    return this.registrationsOf(id).filter((binding) => !filter || filter(propertiesOf(binding))).map((binding) => ({
      serviceId: id,
      providedBy: binding.providedBy,
      ranking: binding.ranking,
      scope: binding.scope,
      instantiated: binding.instance !== void 0,
      properties: propertiesOf(binding),
      key: referenceKey(id, binding)
    }));
  }
  /**
   * The best service for an ID whose properties match the filter.
   *
   * `get(id)` answers with the highest-ranked registration regardless of
   * properties; a consumer that declared a target needs this one.
   */
  getMatching(id, target) {
    const [reference] = this.getServiceReferences(id, target);
    return reference ? this.resolveReference(reference) : void 0;
  }
  /**
   * Parse a filter once and remember it. An invalid filter throws here rather
   * than quietly matching nothing.
   */
  filterFor(target) {
    const cached = this.filterCache.get(target);
    if (cached)
      return cached;
    const filter = createServiceFilter(target);
    this.filterCache.set(target, filter);
    return filter;
  }
  /**
   * Every service registered under an id, best first.
   *
   * The typed way to consume 0..n: `getServiceReferences` plus a resolve per
   * reference, without naming the contract again at each one. A provider that
   * fails to instantiate is left out rather than appearing as `undefined` — a
   * collection of services should not need a null check per element.
   */
  getServices(id, target) {
    return this.getServiceReferences(id, target).map((reference) => this.resolveReference(reference)).filter((service) => service !== void 0);
  }
  /**
   * Resolve one reference from getServiceReferences().
   *
   * The visible registration resolves like `get()`; an outranked one is built
   * from its own binding, so a collection can use every provider even though
   * only one of them answers to the ID.
   */
  resolveReference(reference) {
    const seq = Number(reference.key.slice(reference.key.lastIndexOf("#") + 1));
    const binding = this.registrationsOf(reference.serviceId).find((candidate) => candidate.seq === seq);
    if (!binding)
      return void 0;
    if (this.bindings.get(reference.serviceId)?.seq === seq) {
      return this.get(reference.serviceId);
    }
    return this.instantiate(reference.serviceId, binding, /* @__PURE__ */ new Set());
  }
  /** How many registrations an ID carries, optionally matching a target filter */
  countProviders(id, target) {
    return this.getServiceReferences(id, target).length;
  }
  /**
   * Unregister a service
   */
  unregister(id) {
    const service = this.services.get(id);
    const binding = this.bindings.get(id);
    const hadBinding = binding !== void 0;
    if (service === void 0 && !hadBinding) {
      return false;
    }
    for (const registration of this.registrationsOf(id)) {
      if (registration.aliasOf) {
        this.aliasesOf.get(registration.aliasOf)?.delete(id);
      }
    }
    this.shadowed.delete(id);
    this.services.delete(id);
    this.bindings.delete(id);
    this.notify({
      type: "unregistered",
      serviceId: id,
      service,
      properties: binding ? propertiesOf(binding) : void 0
    });
    this.dropAliasesOf(id);
    this.dropInjectionEdges(id);
    this.invalidateInjectors(id, /* @__PURE__ */ new Set());
    return true;
  }
  /**
   * Forget which services a binding injects
   */
  dropInjectionEdges(id) {
    for (const [serviceId2, injectors] of this.injectedInto) {
      if (!injectors.delete(id))
        continue;
      if (injectors.size === 0) {
        this.injectedInto.delete(serviceId2);
      }
    }
  }
  /**
   * Discard singleton instances built with a service that changed, transitively.
   *
   * A singleton receives its dependencies once, at construction, so after the
   * service is gone it would keep serving the old one. The next `get()` builds
   * the instance again with whatever is available then.
   *
   * Only reaches classes bound through `bindClass()`, whose dependencies the
   * registry knows. What a hand-written `bind()` factory pulls from the registry
   * is invisible here and cannot be invalidated — see the notes on dynamic
   * requirements in the README.
   */
  invalidateInjectors(serviceId2, seen) {
    if (seen.has(serviceId2))
      return;
    seen.add(serviceId2);
    for (const injectorId of this.injectedInto.get(serviceId2) ?? []) {
      const binding = this.bindings.get(injectorId);
      if (!binding?.factory || binding.instance === void 0)
        continue;
      binding.instance = void 0;
      this.services.delete(injectorId);
      this.invalidateInjectors(injectorId, seen);
    }
  }
  /**
   * Remove every alias binding that delegates to the given primary ID
   */
  /**
   * Remove the alias registrations a primary registration created.
   *
   * @param primarySeq Restricts it to the aliases of that one registration.
   *   Needed once a class can be registered more than once under an ID — one
   *   instance per factory configuration — where dropping the first alias found
   *   would take another instance's interface with it. Without it, every alias
   *   of the ID goes, which is what withdrawing the ID itself means.
   */
  dropAliasesOf(primaryId, primarySeq) {
    const aliases = this.aliasesOf.get(primaryId);
    if (!aliases)
      return;
    const remaining = /* @__PURE__ */ new Set();
    for (const aliasId of aliases) {
      const own = this.registrationsOf(aliasId).filter((registration) => registration.aliasOf === primaryId && (primarySeq === void 0 || registration.aliasSeq === primarySeq));
      if (own.length === 0) {
        if (primarySeq !== void 0)
          remaining.add(aliasId);
        continue;
      }
      for (const alias of own) {
        this.unregisterRegistration(aliasId, alias.seq);
      }
      if (primarySeq !== void 0 && this.registrationsOf(aliasId).some((registration) => registration.aliasOf === primaryId)) {
        remaining.add(aliasId);
      }
    }
    if (remaining.size > 0) {
      this.aliasesOf.set(primaryId, remaining);
    } else {
      this.aliasesOf.delete(primaryId);
    }
  }
  /**
   * Get information about a binding
   */
  getBindingInfo(id) {
    const binding = this.bindings.get(id);
    if (!binding)
      return void 0;
    return {
      scope: binding.scope,
      providedBy: binding.providedBy
    };
  }
  /**
   * Get all registered service IDs
   */
  getServiceIds() {
    return Array.from(this.services.keys());
  }
  /**
   * Clear all services
   */
  clear() {
    this.injectedInto.clear();
    const ids = /* @__PURE__ */ new Set([...this.services.keys(), ...this.bindings.keys()]);
    for (const id of ids) {
      this.unregister(id);
    }
  }
  /**
   * Resolve once a service is available.
   *
   * Resolves immediately when it is already there, otherwise on the
   * registration that provides it. Replaces polling the registry in a loop.
   *
   * @param options.timeoutMs Reject after this long instead of waiting forever
   */
  whenAvailable(id, options = {}) {
    const existing = this.get(id);
    if (existing !== void 0) {
      return Promise.resolve(existing);
    }
    return new Promise((resolve, reject) => {
      let timer;
      const listener = {
        onServiceEvent: (event) => {
          if (event.serviceId !== id || event.type === "unregistered")
            return;
          const service = this.get(id);
          if (service === void 0)
            return;
          if (timer !== void 0)
            clearTimeout(timer);
          this.removeListener(listener);
          resolve(service);
        }
      };
      this.addListener(listener);
      if (options.timeoutMs !== void 0) {
        timer = setTimeout(() => {
          this.removeListener(listener);
          reject(new Error(`Service ${id} did not become available within ${options.timeoutMs}ms`));
        }, options.timeoutMs);
      }
    });
  }
  /**
   * Add a listener for service events, optionally narrowed by a filter over the
   * services' properties.
   *
   * An invalid filter is rejected here rather than quietly matching nothing —
   * the same choice `getServiceReferences` makes.
   */
  addListener(listener, options = {}) {
    this.listeners.add(listener);
    if (options.filter !== void 0) {
      this.listenerFilters.set(listener, this.filterFor(options.filter));
    }
  }
  /**
   * Remove a listener
   */
  removeListener(listener) {
    this.listeners.delete(listener);
    this.listenerFilters.delete(listener);
  }
  notify(event) {
    for (const listener of this.listeners) {
      const filter = this.listenerFilters.get(listener);
      if (filter && event.type !== "modified-endmatch") {
        if (!event.properties || !filter(event.properties))
          continue;
      }
      this.deliver(listener, event);
    }
  }
  deliver(listener, event) {
    try {
      listener.onServiceEvent(event);
    } catch (error) {
      console.error("Service registry listener error:", error);
    }
  }
  /**
   * Tell filtering listeners that a property change ended their match.
   *
   * Only those whose filter matched the old properties and no longer matches the
   * new ones: a listener that never accepted the service has nothing to
   * withdraw, and one that still accepts it got `updated` already.
   */
  notifyEndMatch(id, service, before, after) {
    for (const [listener, filter] of this.listenerFilters) {
      if (!this.listeners.has(listener))
        continue;
      if (!filter(before) || filter(after))
        continue;
      this.deliver(listener, {
        type: "modified-endmatch",
        serviceId: id,
        service,
        properties: after
      });
    }
  }
}
class ScopedServiceRegistry {
  moduleId;
  target;
  declaredRankings;
  declaredProperties;
  /** Registrations made through this facade, in registration order */
  ownRegistrations = [];
  /** Listeners this module added, so they do not outlive it */
  ownListeners = /* @__PURE__ */ new Set();
  /**
   * @param declaredRankings Rankings from the manifest's `provides`, applied when
   *   a registration passes none of its own
   */
  constructor(moduleId, target, declaredRankings = /* @__PURE__ */ new Map(), declaredProperties = /* @__PURE__ */ new Map()) {
    this.moduleId = moduleId;
    this.target = target;
    this.declaredRankings = declaredRankings;
    this.declaredProperties = declaredProperties;
  }
  rankingFor(id, given) {
    return given ?? this.declaredRankings.get(id);
  }
  /**
   * Merge the manifest's declared properties with the ones passed at
   * registration, per key.
   *
   * Not "one or the other": the manifest describes where a service belongs —
   * deployment information a module should not have to repeat — while the code
   * adds what only it knows. Replacing wholesale would silently drop a declared
   * property as soon as the code passes any property at all.
   */
  propertiesFor(id, given) {
    const declared = this.declaredProperties.get(id);
    if (!declared)
      return given;
    if (!given)
      return declared;
    return { ...declared, ...given };
  }
  register(id, service, options = {}) {
    return this.track(this.target.register(id, service, {
      ...options,
      providedBy: options.providedBy ?? this.moduleId,
      ranking: this.rankingFor(id, options.ranking),
      properties: this.propertiesFor(id, options.properties)
    }));
  }
  bind(id, factory, options = {}) {
    return this.track(this.target.bind(id, factory, {
      ...options,
      providedBy: options.providedBy ?? this.moduleId,
      ranking: this.rankingFor(id, options.ranking),
      properties: this.propertiesFor(id, options.properties)
    }));
  }
  bindClass(id, ctor, options = {}) {
    const propertiesById = {};
    for (const serviceId2 of [id, ...options.implements ?? []]) {
      const properties = this.propertiesFor(serviceId2, options.propertiesById?.[serviceId2]);
      if (properties)
        propertiesById[serviceId2] = properties;
    }
    return this.track(this.target.bindClass(id, ctor, {
      ...options,
      providedBy: options.providedBy ?? this.moduleId,
      ranking: this.rankingFor(id, options.ranking),
      properties: this.propertiesFor(id, options.properties),
      propertiesById
    }));
  }
  /**
   * Remember a registration for the teardown, and keep the manifest's declared
   * properties in play for later property changes.
   *
   * A component updating its properties from configuration passes what it and
   * its configuration know; where the service belongs is still the manifest's
   * business, exactly as at registration time.
   */
  track(registration) {
    const scoped = {
      ...registration,
      unregister: () => registration.unregister(),
      resolve: () => registration.resolve(),
      setProperties: (properties, options = {}) => {
        const byId = {};
        for (const [serviceId2, own] of Object.entries(options.propertiesById ?? {})) {
          const merged = this.propertiesFor(serviceId2, own);
          if (merged)
            byId[serviceId2] = merged;
        }
        return registration.setProperties(this.propertiesFor(registration.serviceId, properties) ?? properties, { ...options, propertiesById: byId });
      }
    };
    this.ownRegistrations.push(scoped);
    return scoped;
  }
  /**
   * Construct a class for this module, so a `module`-scoped dependency is this
   * module's own instance.
   *
   * The path a component without a service of its own takes, which makes it the
   * one that must not lose the consumer.
   */
  construct(ctor) {
    const target = this.target;
    return typeof target.constructFor === "function" ? target.constructFor(this.moduleId, ctor) : this.target.construct(ctor);
  }
  /**
   * Reads pass through, but no longer anonymously: the facade knows which module
   * is asking, and that is the whole of what `module` scope needs.
   *
   * A target registry without `getFor` falls back to the plain read, where a
   * `module`-scoped registration behaves as a singleton.
   */
  get(id) {
    const target = this.target;
    return typeof target.getFor === "function" ? target.getFor(this.moduleId, id) : this.target.get(id);
  }
  getRequired(id) {
    const service = this.get(id);
    if (service === void 0) {
      return this.target.getRequired(id);
    }
    return service;
  }
  getAll(idPattern) {
    return this.target.getAll(idPattern);
  }
  has(id) {
    return this.target.has(id);
  }
  checkRequirements(requirements) {
    return this.target.checkRequirements(requirements);
  }
  getServiceReferences(id, target) {
    return this.target.getServiceReferences(id, target);
  }
  /**
   * Every service under an id, best first — resolved as this module, so a
   * `module`-scoped provider hands over this module's own instance.
   */
  getServices(id, target) {
    return this.getServiceReferences(id, target).map((reference) => this.resolveReference(reference)).filter((service) => service !== void 0);
  }
  resolveReference(reference) {
    const target = this.target;
    return typeof target.resolveReferenceFor === "function" ? target.resolveReferenceFor(this.moduleId, reference) : this.target.resolveReference(reference);
  }
  countProviders(id, target) {
    return this.target.countProviders(id, target);
  }
  getMatching(id, target) {
    return this.target.getMatching(id, target);
  }
  /**
   * Withdraw this module's registrations for an ID.
   *
   * Only its own: with several providers per ID, delegating to the shared
   * `unregister(id)` would take other modules' registrations along. An ID this
   * module never registered still falls through to the shared registry.
   */
  unregister(id) {
    const mine = this.ownRegistrations.filter((registration) => registration.serviceId === id);
    if (mine.length === 0) {
      return this.target.unregister(id);
    }
    this.ownRegistrations = this.ownRegistrations.filter((registration) => registration.serviceId !== id);
    return mine.map((registration) => registration.unregister()).some((removed) => removed);
  }
  getBindingInfo(id) {
    return this.target.getBindingInfo(id);
  }
  getServiceIds() {
    return this.target.getServiceIds();
  }
  /**
   * Listen for service registrations and withdrawals.
   *
   * The listener is removed when the module is deactivated, so a collection
   * held by the module cannot keep reacting after the module stopped.
   *
   * Requires an observable target registry; a custom `ServiceRegistry` without
   * listener support cannot provide this.
   */
  addListener(listener, options = {}) {
    const target = this.target;
    if (typeof target.addListener !== "function") {
      throw new Error(`Service registry does not support listeners, so module ${this.moduleId} cannot observe it`);
    }
    this.ownListeners.add(listener);
    target.addListener(listener, options);
  }
  /**
   * Resolve once a service is available.
   *
   * A pending wait is not cancelled when the module is deactivated; keep the
   * `timeoutMs` in mind if the service may never arrive.
   */
  whenAvailable(id, options = {}) {
    const target = this.target;
    if (typeof target.whenAvailable !== "function") {
      return Promise.reject(new Error(`Service registry does not support waiting, so module ${this.moduleId} cannot await ${id}`));
    }
    return target.whenAvailable(id, options);
  }
  removeListener(listener) {
    const target = this.target;
    this.ownListeners.delete(listener);
    if (typeof target.removeListener === "function") {
      target.removeListener(listener);
    }
  }
  /** IDs this module registered and has not withdrawn itself */
  getOwnServiceIds() {
    return [...new Set(this.ownRegistrations.map((registration) => registration.serviceId))];
  }
  /**
   * Withdraw everything this module registered.
   * Returns the IDs that were actually removed.
   */
  releaseAll() {
    const target = this.target;
    for (const listener of this.ownListeners) {
      target.removeListener?.(listener);
    }
    this.ownListeners.clear();
    const released = [];
    for (const registration of [...this.ownRegistrations].reverse()) {
      if (registration.unregister()) {
        released.push(registration.serviceId);
      }
    }
    this.ownRegistrations = [];
    target.releaseConsumer?.(this.moduleId);
    return released;
  }
}
const COMPONENT_RUNTIME_SERVICE_ID = "tsm.component.runtime";
const EXTENDER_NAMESPACE = "osgi.extender";
const COMPONENT_EXTENDER = "osgi.component";
const METATYPE_EXTENDER = "osgi.metatype";
const IMPLEMENTATION_NAMESPACE = "osgi.implementation";
const CONFIGURATION_IMPLEMENTATION = "osgi.cm";
const FEATURE_SERVICE_ID = "tsm.feature.service";
const FEATURE_IMPLEMENTATION = "osgi.feature";
const FEATURE_VERSION = "1.0.0";
const FEATURE_RESOURCE_VERSION = "1.0";
function stripComments(text) {
  let out = "";
  let at = 0;
  while (at < text.length) {
    const char = text[at];
    if (char === '"') {
      out += char;
      at++;
      while (at < text.length) {
        out += text[at];
        if (text[at] === "\\") {
          out += text[at + 1] ?? "";
          at += 2;
          continue;
        }
        if (text[at] === '"') {
          at++;
          break;
        }
        at++;
      }
      continue;
    }
    if (char === "/" && text[at + 1] === "/") {
      while (at < text.length && text[at] !== "\n")
        at++;
      continue;
    }
    if (char === "/" && text[at + 1] === "*") {
      at += 2;
      while (at < text.length && !(text[at] === "*" && text[at + 1] === "/"))
        at++;
      at += 2;
      continue;
    }
    out += char;
    at++;
  }
  return out;
}
function parseFeatureId(id) {
  const at = id.lastIndexOf("@");
  if (at <= 0) {
    throw new Error(`Feature id '${id}' has no version — expected 'name@version'`);
  }
  const name = id.slice(0, at);
  const version = id.slice(at + 1);
  if (name.length === 0 || version.length === 0) {
    throw new Error(`Feature id '${id}' has an empty name or version`);
  }
  return { name, version };
}
function formatFeatureId(id) {
  return `${id.name}@${id.version}`;
}
const CONVERSIONS = {
  String: (raw) => raw,
  Integer: (raw) => Number.parseInt(raw, 10),
  Long: (raw) => Number.parseInt(raw, 10),
  Float: (raw) => Number.parseFloat(raw),
  Double: (raw) => Number.parseFloat(raw),
  Boolean: (raw) => raw === "true"
};
function substitute(value, variables) {
  return value.replace(/\$\{([^}]*)\}/g, (whole, name) => {
    const replacement = variables[name];
    return replacement === void 0 || replacement === null ? whole : String(replacement);
  });
}
function resolveConfigurations(feature, supplied = {}) {
  const variables = { ...feature.variables, ...supplied };
  const resolved = {};
  for (const [pid, properties] of Object.entries(feature.configurations)) {
    const values = {};
    for (const [key, value] of Object.entries(properties)) {
      const colon = key.lastIndexOf(":");
      const declaredType = colon > 0 ? key.slice(colon + 1) : void 0;
      const convert = declaredType === void 0 ? void 0 : CONVERSIONS[declaredType];
      const name = convert === void 0 ? key : key.slice(0, colon);
      const substituted = typeof value === "string" ? substitute(value, variables) : value;
      values[name] = convert !== void 0 && typeof substituted === "string" ? convert(substituted) : substituted;
    }
    resolved[pid] = values;
  }
  return resolved;
}
function missingVariables(feature, supplied = {}) {
  return Object.entries(feature.variables).filter(([name, value]) => value === null && supplied[name] === void 0).map(([name]) => name);
}
function readFeature(document2) {
  const raw = typeof document2 === "string" ? JSON.parse(stripComments(document2)) : document2;
  if (typeof raw !== "object" || raw === null) {
    throw new Error("A feature document has to be a JSON object");
  }
  if (typeof raw.id !== "string") {
    throw new Error('A feature needs an "id" of the form "name@version"');
  }
  const version = raw["feature-resource-version"];
  if (version !== void 0 && version !== FEATURE_RESOURCE_VERSION) {
    throw new Error(`Unsupported feature-resource-version '${String(version)}' — this reads ${FEATURE_RESOURCE_VERSION}`);
  }
  return Object.freeze({
    id: parseFeatureId(raw.id),
    name: optionalString(raw.name, "name"),
    description: optionalString(raw.description, "description"),
    categories: Object.freeze(readCategories(raw.categories)),
    complete: raw.complete === true,
    docURL: optionalString(raw.docURL, "docURL"),
    license: optionalString(raw.license, "license"),
    scm: optionalString(raw.scm, "scm"),
    vendor: optionalString(raw.vendor, "vendor"),
    bundles: Object.freeze(readBundles(raw.bundles)),
    configurations: Object.freeze(readConfigurations(raw.configurations)),
    variables: Object.freeze(readVariables(raw.variables)),
    extensions: Object.freeze(readExtensions(raw.extensions))
  });
}
function optionalString(value, key) {
  if (value === void 0)
    return void 0;
  if (typeof value !== "string")
    throw new Error(`Feature "${key}" has to be a string`);
  return value;
}
function readCategories(value) {
  if (value === void 0)
    return [];
  if (!Array.isArray(value) || value.some((entry) => typeof entry !== "string")) {
    throw new Error('Feature "categories" has to be an array of strings');
  }
  return [...value];
}
function readBundles(value) {
  if (value === void 0)
    return [];
  if (!Array.isArray(value))
    throw new Error('Feature "bundles" has to be an array');
  return value.map((entry) => {
    if (typeof entry !== "object" || entry === null) {
      throw new Error('Every entry in "bundles" has to be an object with an "id"');
    }
    const { id, ...rest } = entry;
    if (typeof id !== "string") {
      throw new Error('Every entry in "bundles" needs a string "id"');
    }
    const metadata = {};
    for (const [key, own] of Object.entries(rest)) {
      if (typeof own !== "string" && typeof own !== "number" && typeof own !== "boolean") {
        throw new Error(`Bundle metadata '${key}' of '${id}' is a ${typeof own}; only strings, numbers and booleans are allowed`);
      }
      metadata[key] = own;
    }
    return Object.freeze({
      id: parseFeatureId(id),
      ...Object.keys(metadata).length > 0 ? { metadata: Object.freeze(metadata) } : {}
    });
  });
}
function readConfigurations(value) {
  if (value === void 0)
    return {};
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error('Feature "configurations" has to be an object keyed by PID');
  }
  const configurations = {};
  for (const [pid, properties] of Object.entries(value)) {
    if (typeof properties !== "object" || properties === null || Array.isArray(properties)) {
      throw new Error(`Configuration '${pid}' has to be an object of properties`);
    }
    configurations[pid] = Object.freeze({ ...properties });
  }
  return configurations;
}
function readVariables(value) {
  if (value === void 0)
    return {};
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error('Feature "variables" has to be an object');
  }
  const variables = {};
  for (const [name, own] of Object.entries(value)) {
    if (own !== null && typeof own !== "string" && typeof own !== "number" && typeof own !== "boolean") {
      throw new Error(`Variable '${name}' is a ${typeof own}; a default has to be a string, a number, a boolean, or null for "the launcher must supply this"`);
    }
    variables[name] = own;
  }
  return variables;
}
function readExtensions(value) {
  if (value === void 0)
    return {};
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error('Feature "extensions" has to be an object');
  }
  const extensions = {};
  for (const [name, own] of Object.entries(value)) {
    if (typeof own !== "object" || own === null) {
      throw new Error(`Extension '${name}' has to be an object`);
    }
    const entry = own;
    const kind = readKind(entry.kind, name);
    switch (entry.type) {
      case "text":
        if (!Array.isArray(entry.text) || entry.text.some((line) => typeof line !== "string")) {
          throw new Error(`Text extension '${name}' needs a "text" array of strings`);
        }
        extensions[name] = Object.freeze({
          type: "text",
          kind,
          text: Object.freeze([...entry.text])
        });
        break;
      case "json":
        if (!("json" in entry)) {
          throw new Error(`JSON extension '${name}' needs a "json" value`);
        }
        extensions[name] = Object.freeze({ type: "json", kind, json: entry.json });
        break;
      case "artifacts":
        extensions[name] = Object.freeze({
          type: "artifacts",
          kind,
          artifacts: Object.freeze(readBundles(entry.artifacts))
        });
        break;
      default:
        throw new Error(`Extension '${name}' has type '${String(entry.type)}'; expected 'text', 'json' or 'artifacts'`);
    }
  }
  return extensions;
}
function readKind(value, name) {
  if (value === void 0)
    return "optional";
  if (value !== "mandatory" && value !== "optional" && value !== "transient") {
    throw new Error(`Extension '${name}' has kind '${String(value)}'; expected 'mandatory', 'optional' or 'transient'`);
  }
  return value;
}
function writeFeature(feature, options = {}) {
  const document2 = {
    "feature-resource-version": FEATURE_RESOURCE_VERSION,
    id: formatFeatureId(feature.id)
  };
  if (feature.name !== void 0)
    document2.name = feature.name;
  if (feature.description !== void 0)
    document2.description = feature.description;
  if (feature.categories.length > 0)
    document2.categories = [...feature.categories];
  if (feature.complete)
    document2.complete = true;
  if (feature.docURL !== void 0)
    document2.docURL = feature.docURL;
  if (feature.license !== void 0)
    document2.license = feature.license;
  if (feature.scm !== void 0)
    document2.scm = feature.scm;
  if (feature.vendor !== void 0)
    document2.vendor = feature.vendor;
  if (feature.bundles.length > 0) {
    document2.bundles = feature.bundles.map((bundle) => ({
      id: formatFeatureId(bundle.id),
      ...bundle.metadata
    }));
  }
  if (Object.keys(feature.configurations).length > 0) {
    document2.configurations = feature.configurations;
  }
  if (Object.keys(feature.variables).length > 0) {
    document2.variables = feature.variables;
  }
  if (Object.keys(feature.extensions).length > 0) {
    document2.extensions = feature.extensions;
  }
  return JSON.stringify(document2, void 0, options.indent ?? 2);
}
function validateFeature(feature, options = {}) {
  const problems = [];
  const seen = /* @__PURE__ */ new Map();
  feature.bundles.forEach((bundle, at) => {
    const key = formatFeatureId(bundle.id);
    const first = seen.get(key);
    if (first !== void 0) {
      problems.push({ at: `bundles[${at}]`, problem: `'${key}' is already listed at ${first}` });
    } else {
      seen.set(key, at);
    }
  });
  for (const name of missingVariables(feature, options.supplied)) {
    problems.push({
      at: `variables.${name}`,
      problem: "declared without a default, so a value has to be supplied"
    });
  }
  const handles = new Set(options.handles ?? []);
  for (const [name, extension] of Object.entries(feature.extensions)) {
    if (extension.kind === "mandatory" && !handles.has(name)) {
      problems.push({
        at: `extensions.${name}`,
        problem: "is mandatory, and this consumer does not handle it"
      });
    }
  }
  return problems;
}
const featureService = Object.freeze({
  readFeature,
  writeFeature,
  validateFeature,
  resolveConfigurations,
  missingVariables,
  getId: (name, version) => ({ name, version }),
  parseId: parseFeatureId,
  formatId: formatFeatureId
});
const IDENTITY_NAMESPACE = "osgi.identity";
const SERVICE_NAMESPACE = "osgi.service";
const LIBRARY_NAMESPACE = "tsm.library";
const DS_VERSION = "1.5.0";
const METATYPE_VERSION = "1.4.0";
const CM_VERSION = "1.6.0";
const MODULE_TYPE = "tsm.module";
const RESOLVE = "resolve";
const SYSTEM_BUNDLE_ID = "system.bundle";
const ENVIRONMENT = "environment";
function isEffectiveAtResolve(effective) {
  return effective === void 0 || effective === RESOLVE;
}
function capabilitiesOf(manifest) {
  const derived = [
    {
      namespace: IDENTITY_NAMESPACE,
      attributes: {
        [IDENTITY_NAMESPACE]: manifest.id,
        type: MODULE_TYPE,
        version: manifest.version
      }
    }
  ];
  for (const service of manifest.provides ?? []) {
    derived.push({
      namespace: SERVICE_NAMESPACE,
      attributes: {
        // A list, as in the specification: one capability may cover several IDs
        objectClass: [service.id],
        ...service.properties
      }
    });
  }
  return [...derived, ...manifest.capabilities ?? []];
}
function requirementsOf(manifest) {
  const derived = [];
  for (const dependency of manifest.dependencies ?? []) {
    const spec = typeof dependency === "string" ? { id: dependency } : dependency;
    derived.push({
      namespace: IDENTITY_NAMESPACE,
      filter: `(${IDENTITY_NAMESPACE}=${escapeValue(spec.id)})`,
      versionRange: spec.versionRange,
      resolution: spec.optional === true ? "optional" : "mandatory"
    });
  }
  for (const dependency of manifest.optionalDependencies ?? []) {
    const spec = typeof dependency === "string" ? { id: dependency } : dependency;
    derived.push({
      namespace: IDENTITY_NAMESPACE,
      filter: `(${IDENTITY_NAMESPACE}=${escapeValue(spec.id)})`,
      versionRange: spec.versionRange,
      resolution: "optional"
    });
  }
  for (const requirement of manifest.requiresService ?? []) {
    derived.push({
      namespace: SERVICE_NAMESPACE,
      filter: `(objectClass=${escapeValue(requirement.id)})`,
      // The runtime requirement may be mandatory while the resolution is not:
      // cardinality 0..n means the module runs with no provider at all
      resolution: requirement.optional === true || requirement.cardinality?.startsWith("0") ? "optional" : "mandatory"
    });
  }
  for (const library of manifest.sharedDependencies ?? []) {
    derived.push({
      namespace: LIBRARY_NAMESPACE,
      filter: `(library=${escapeValue(library.id)})`,
      versionRange: library.versionRange
    });
  }
  return [...derived, ...manifest.requirements ?? []];
}
function escapeValue(value) {
  return value.replace(/[\\()*]/g, (character) => `\\${character}`);
}
function satisfies(requirement, capability) {
  if (capability.namespace !== requirement.namespace)
    return false;
  if (!isEffectiveAtResolve(capability.directives?.effective))
    return false;
  const attributes = capability.attributes ?? {};
  if (requirement.versionRange !== void 0) {
    const version = attributes.version;
    if (typeof version !== "string" || !semver.validRange(requirement.versionRange)) {
      return false;
    }
    if (!semver.satisfies(version, requirement.versionRange, { includePrerelease: true })) {
      return false;
    }
  }
  if (requirement.filter === void 0)
    return true;
  return createServiceFilter(requirement.filter, { caseSensitive: true })(attributes);
}
function libraryCapabilities(libraries) {
  const entries = libraries instanceof Map ? [...libraries].map(([library, entry]) => [library, entry.version]) : Object.entries(libraries);
  return entries.map(([library, version]) => ({
    namespace: LIBRARY_NAMESPACE,
    attributes: { library, version }
  }));
}
function systemBundle(options = {}) {
  return {
    id: SYSTEM_BUNDLE_ID,
    name: "System Bundle",
    version: options.version ?? "0.0.0",
    entry: "System Bundle",
    exports: {},
    capabilities: [
      // What the runtime offers of its own accord. In OSGi this one comes from
      // the SCR bundle rather than from the framework; here the loader is both,
      // so the system bundle is where it belongs — and a module can require it
      // exactly as it would require Felix SCR
      {
        namespace: EXTENDER_NAMESPACE,
        attributes: { [EXTENDER_NAMESPACE]: COMPONENT_EXTENDER, version: DS_VERSION }
      },
      // These two only when they are really there: a capability nobody can rely
      // on is worse than none, because a module would resolve and then find
      // nothing behind it
      ...options.metatype === true ? [{
        namespace: EXTENDER_NAMESPACE,
        attributes: { [EXTENDER_NAMESPACE]: METATYPE_EXTENDER, version: METATYPE_VERSION }
      }] : [],
      // Always there, as the feature service needs nothing from the application
      {
        namespace: IMPLEMENTATION_NAMESPACE,
        attributes: {
          [IMPLEMENTATION_NAMESPACE]: FEATURE_IMPLEMENTATION,
          version: FEATURE_VERSION
        }
      },
      ...options.configurationAdmin === true ? [{
        namespace: IMPLEMENTATION_NAMESPACE,
        attributes: {
          [IMPLEMENTATION_NAMESPACE]: CONFIGURATION_IMPLEMENTATION,
          version: CM_VERSION
        }
      }] : [],
      ...options.libraries ? libraryCapabilities(options.libraries) : [],
      ...options.capabilities ?? []
    ]
  };
}
function resolveWiring(manifests, options = {}) {
  const offered = [
    ...manifests.flatMap((manifest) => capabilitiesOf(manifest).map((capability) => ({ provider: manifest.id, capability }))),
    ...(options.offered ?? []).map((capability) => ({ provider: ENVIRONMENT, capability }))
  ];
  const wires = [];
  const unresolved = [];
  const requirements = [];
  const failed = /* @__PURE__ */ new Set();
  for (const manifest of manifests) {
    for (const requirement of requirementsOf(manifest)) {
      if (!isEffectiveAtResolve(requirement.effective))
        continue;
      const matches2 = offered.filter((entry) => satisfies(requirement, entry.capability));
      const report = { moduleId: manifest.id, requirement, wires: [] };
      requirements.push(report);
      if (matches2.length === 0) {
        if ((requirement.resolution ?? "mandatory") === "optional")
          continue;
        const anyInNamespace = offered.some((entry) => entry.capability.namespace === requirement.namespace);
        const failure = {
          moduleId: manifest.id,
          requirement,
          reason: anyInNamespace ? "no-match" : "no-capability"
        };
        unresolved.push(failure);
        report.failure = failure;
        failed.add(manifest.id);
        continue;
      }
      const chosen = (requirement.cardinality ?? "single") === "multiple" ? matches2 : [best(matches2)];
      for (const entry of chosen) {
        const wire = {
          requirer: manifest.id,
          requirement,
          provider: entry.provider,
          capability: entry.capability
        };
        wires.push(wire);
        report.wires.push(wire);
      }
    }
  }
  return {
    wires,
    unresolved,
    requirements,
    resolved: manifests.map((manifest) => manifest.id).filter((id) => !failed.has(id))
  };
}
function best(matches2) {
  return matches2.reduce((winner, candidate) => {
    const left = versionOf(candidate.capability);
    const right = versionOf(winner.capability);
    if (left === void 0 || right === void 0)
      return winner;
    return semver.gt(left, right) ? candidate : winner;
  });
}
function versionOf(capability) {
  const version = capability.attributes?.version;
  return typeof version === "string" && semver.valid(version) ? version : void 0;
}
function wiringOf(resolution, moduleId) {
  return {
    requires: resolution.wires.filter((wire) => wire.requirer === moduleId),
    provides: resolution.wires.filter((wire) => wire.provider === moduleId)
  };
}
const CONFIGURATION_ADMIN_SERVICE_ID = "tsm.configuration.admin";
const FACTORY_PID_SEPARATOR = "~";
const TARGETED_PID_SEPARATOR = "|";
function targetedPids(pid, target) {
  if (!target)
    return [pid];
  const candidates = [pid + TARGETED_PID_SEPARATOR + target.id];
  if (target.version !== void 0) {
    candidates.unshift(pid + TARGETED_PID_SEPARATOR + target.id + TARGETED_PID_SEPARATOR + target.version);
  }
  candidates.push(pid);
  return candidates;
}
const SERVICE_PID = "service.pid";
const SERVICE_FACTORY_PID = "service.factoryPid";
class MemoryConfigurationStore {
  records = /* @__PURE__ */ new Map();
  constructor(initial = []) {
    for (const record of initial) {
      this.records.set(record.pid, record);
    }
  }
  load() {
    return [...this.records.values()];
  }
  save(record) {
    this.records.set(record.pid, record);
  }
  remove(pid) {
    this.records.delete(pid);
  }
}
class LocalStorageConfigurationStore {
  prefix;
  constructor(prefix = "tsm.config.") {
    this.prefix = prefix;
    if (typeof localStorage === "undefined") {
      throw new Error("LocalStorageConfigurationStore needs localStorage; use MemoryConfigurationStore or a store of your own outside the browser");
    }
  }
  load() {
    const records = [];
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      if (key === null || !key.startsWith(this.prefix))
        continue;
      const raw = localStorage.getItem(key);
      if (raw === null)
        continue;
      try {
        records.push(JSON.parse(raw));
      } catch {
      }
    }
    return records;
  }
  save(record) {
    localStorage.setItem(this.prefix + record.pid, JSON.stringify(record));
  }
  remove(pid) {
    localStorage.removeItem(this.prefix + pid);
  }
}
function assertValidProperties(pid, properties) {
  const seen = /* @__PURE__ */ new Map();
  for (const [key, value] of Object.entries(properties)) {
    const lower = key.toLowerCase();
    const clash = seen.get(lower);
    if (clash !== void 0) {
      throw new Error(`Configuration '${pid}' has the keys '${clash}' and '${key}', which differ only in case`);
    }
    seen.set(lower, key);
    const values = Array.isArray(value) ? value : [value];
    for (const entry of values) {
      const type = typeof entry;
      if (type !== "string" && type !== "number" && type !== "boolean") {
        throw new Error(`Configuration '${pid}' property '${key}' is ${entry === null ? "null" : type}; only strings, numbers, booleans and arrays of those can be stored and filtered on`);
      }
    }
  }
}
function sameProperties$1(left, right) {
  if (left === void 0)
    return false;
  const leftKeys = Object.keys(left);
  if (leftKeys.length !== Object.keys(right).length)
    return false;
  return leftKeys.every((key) => {
    const a = left[key];
    const b = right[key];
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.length === b.length && a.every((entry, index) => entry === b[index]);
    }
    return a === b;
  });
}
class ConfigurationAdmin {
  entries = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  store;
  loaded;
  generated = 0;
  /**
   * The schemas values are checked against, when the host supplied a registry.
   *
   * A deliberate departure: in OSGi, Config Admin does not validate and Metatype
   * only describes, leaving the checking to whichever user interface writes the
   * values. Here a wrong value can be refused at the source instead, which is
   * worth more than the symmetry — and without a registry nothing changes.
   */
  metatype;
  constructor(options = {}) {
    this.store = options.store ?? new MemoryConfigurationStore();
    this.metatype = options.metatype;
    this.loaded = this.load();
  }
  /**
   * Refuse values a schema says are wrong.
   *
   * A PID without a schema passes: a configuration nobody described is not
   * thereby invalid.
   */
  assertValidAgainstSchema(pid, properties) {
    const errors = this.metatype?.validate(pid, properties) ?? [];
    if (errors.length === 0)
      return;
    const detail = errors.map((error) => `${error.attribute} ${error.message}`).join("; ");
    throw new Error(`Configuration '${pid}' does not match its schema: ${detail}`);
  }
  async load() {
    const records = await this.store.load();
    for (const record of records) {
      if (this.entries.has(record.pid))
        continue;
      this.entries.set(record.pid, {
        pid: record.pid,
        factoryPid: record.factoryPid,
        properties: record.properties,
        changeCount: record.changeCount
      });
    }
    for (const entry of this.entries.values()) {
      if (entry.properties !== void 0) {
        this.notify({ type: "updated", pid: entry.pid, factoryPid: entry.factoryPid });
      }
    }
  }
  /**
   * Resolves once the store's contents are available.
   *
   * `ModuleLoader.loadAll()` awaits this, so a component requiring
   * configuration is not parked for values that are already on disk.
   */
  async ready() {
    await this.loaded;
  }
  addListener(listener) {
    this.listeners.add(listener);
  }
  removeListener(listener) {
    this.listeners.delete(listener);
  }
  notify(event) {
    for (const listener of this.listeners) {
      try {
        listener.onConfigurationEvent(event);
      } catch {
      }
    }
  }
  /**
   * The configuration for a PID, created empty if it does not exist yet — the
   * same conflation of get and create that OSGi's `getConfiguration()` has.
   *
   * A configuration without values is not delivered anywhere; only `update()`
   * makes it count. That is what lets a management UI list a PID it has never
   * configured.
   */
  getConfiguration(pid) {
    return this.handleFor(this.entryFor(pid));
  }
  /** The configuration for a PID, or undefined when there is none */
  findConfiguration(pid) {
    const entry = this.entries.get(pid);
    return entry ? this.handleFor(entry) : void 0;
  }
  /**
   * The configuration for a PID as seen by one module, following the targeted
   * PID chain: most specific first, and the first one that has values wins.
   *
   * Without a target this is `findConfiguration`. With one it is what lets a
   * single PID mean different things to two versions of a module — the reason
   * targeted PIDs exist (CM 104.3.2).
   */
  findTargetedConfiguration(pid, target) {
    for (const candidate of targetedPids(pid, target)) {
      const entry = this.entries.get(candidate);
      if (entry?.properties !== void 0)
        return this.handleFor(entry);
    }
    return void 0;
  }
  /**
   * The factory configurations of a PID as seen by one module.
   *
   * The chain works as for a single configuration, but stops at the first
   * targeted factory PID that has *any* configuration: a more specific factory
   * PID replaces the less specific set rather than adding to it, since a merge
   * would give the module instances it was targeted away from.
   */
  listTargetedFactoryConfigurations(pid, target) {
    for (const candidate of targetedPids(pid, target)) {
      const configurations = this.listFactoryConfigurations(candidate);
      if (configurations.length > 0)
        return configurations;
    }
    return [];
  }
  /**
   * A named configuration of a factory PID (OSGi CM 1.6).
   *
   * The resulting PID is `factoryPid~name`, so it stays stable across restarts —
   * unlike {@link createFactoryConfiguration}, which generates one.
   */
  getFactoryConfiguration(factoryPid, name) {
    if (name.length === 0) {
      throw new Error(`Factory configuration of '${factoryPid}' needs a name`);
    }
    return this.handleFor(this.entryFor(factoryPid + FACTORY_PID_SEPARATOR + name, factoryPid));
  }
  /**
   * A configuration of a factory PID under a generated name.
   *
   * Convenient for a configuration nobody has to find again; prefer
   * {@link getFactoryConfiguration} when it should survive a restart as itself.
   */
  createFactoryConfiguration(factoryPid) {
    let name;
    do {
      name = String(++this.generated);
    } while (this.entries.has(factoryPid + FACTORY_PID_SEPARATOR + name));
    return this.getFactoryConfiguration(factoryPid, name);
  }
  /**
   * Every configuration that has values, optionally narrowed by an LDAP-style
   * filter over its properties — the same syntax a target filter uses.
   *
   * Returns an empty array when nothing matches. OSGi returns `null` here; that
   * is a documented wart of the API, not something worth copying.
   */
  listConfigurations(filter) {
    const matches2 = filter === void 0 ? void 0 : createServiceFilter(filter);
    return [...this.entries.values()].filter((entry) => entry.properties !== void 0).filter((entry) => matches2 === void 0 || matches2(this.effectiveProperties(entry))).map((entry) => this.handleFor(entry));
  }
  /** The configurations belonging to a factory PID, in creation order */
  listFactoryConfigurations(factoryPid) {
    return [...this.entries.values()].filter((entry) => entry.factoryPid === factoryPid && entry.properties !== void 0).map((entry) => this.handleFor(entry));
  }
  entryFor(pid, factoryPid) {
    let entry = this.entries.get(pid);
    if (!entry) {
      entry = { pid, factoryPid, changeCount: 0 };
      this.entries.set(pid, entry);
    }
    return entry;
  }
  /**
   * What a consumer sees: the stored values plus the PID properties the admin
   * knows itself, as Config Admin adds `service.pid`.
   */
  effectiveProperties(entry) {
    const properties = { ...entry.properties };
    properties[SERVICE_PID] = entry.pid;
    if (entry.factoryPid !== void 0) {
      properties[SERVICE_FACTORY_PID] = entry.factoryPid;
    }
    return properties;
  }
  handleFor(entry) {
    const assertAlive = () => {
      if (entry.deleted) {
        throw new Error(`Configuration '${entry.pid}' has been deleted`);
      }
    };
    return {
      pid: entry.pid,
      factoryPid: entry.factoryPid,
      get changeCount() {
        return entry.changeCount;
      },
      getProperties: () => entry.properties === void 0 || entry.deleted ? void 0 : this.effectiveProperties(entry),
      update: async (properties) => {
        assertAlive();
        if (properties !== void 0) {
          assertValidProperties(entry.pid, properties);
          this.assertValidAgainstSchema(entry.pid, properties);
          entry.properties = { ...properties };
        } else if (entry.properties === void 0) {
          throw new Error(`Configuration '${entry.pid}' has no properties to re-deliver; call update(properties) first`);
        }
        entry.changeCount++;
        await this.store.save({
          pid: entry.pid,
          factoryPid: entry.factoryPid,
          properties: entry.properties,
          changeCount: entry.changeCount
        });
        this.notify({ type: "updated", pid: entry.pid, factoryPid: entry.factoryPid });
      },
      updateIfDifferent: async (properties) => {
        assertAlive();
        if (sameProperties$1(entry.properties, properties))
          return false;
        await this.handleFor(entry).update(properties);
        return true;
      },
      delete: async () => {
        assertAlive();
        entry.deleted = true;
        this.entries.delete(entry.pid);
        await this.store.remove(entry.pid);
        this.notify({ type: "deleted", pid: entry.pid, factoryPid: entry.factoryPid });
      }
    };
  }
}
function objectClass(definition) {
  return definition;
}
const FACTORY_SEPARATOR = "~";
function isMultiValued(attribute) {
  const cardinality = attribute.cardinality ?? "single";
  return cardinality !== "single";
}
function maxLength(attribute) {
  return typeof attribute.cardinality === "number" ? attribute.cardinality : void 0;
}
class MetatypeRegistry {
  singletons = /* @__PURE__ */ new Map();
  factories = /* @__PURE__ */ new Map();
  /** Which module registered a PID, so a teardown can take its schemas with it */
  owners = /* @__PURE__ */ new Map();
  /**
   * Connect a description to a PID — OSGi's `@Designate`.
   *
   * @param options.factory The PID is a factory PID, so the description applies
   *   to every instance created from it. A user interface reads this as a licence
   *   to offer "add another one".
   * @param options.providedBy Module the declaration came from
   */
  designate(pid, definition, options = {}) {
    const target = options.factory === true ? this.factories : this.singletons;
    target.set(pid, definition);
    if (options.providedBy !== void 0) {
      this.owners.set(pid, options.providedBy);
    }
  }
  /** Withdraw the descriptions a module registered */
  removeAllOf(moduleId) {
    for (const [pid, owner] of [...this.owners]) {
      if (owner !== moduleId)
        continue;
      this.singletons.delete(pid);
      this.factories.delete(pid);
      this.owners.delete(pid);
    }
  }
  /** PIDs with a description of their own */
  getPids() {
    return [...this.singletons.keys()];
  }
  /** Factory PIDs, whose description applies to every configuration of them */
  getFactoryPids() {
    return [...this.factories.keys()];
  }
  /**
   * The description for a PID, with `%key` references resolved for a locale.
   *
   * A factory instance's PID (`factoryPid~name`) is answered with its factory's
   * description: that is what a user interface editing the instance needs, and
   * the instance has no description of its own.
   */
  getObjectClassDefinition(pid, locale) {
    const found = this.definitionFor(pid);
    if (!found)
      return void 0;
    return locale === void 0 ? found : localizeDefinition(found, locale);
  }
  definitionFor(pid) {
    const direct = this.singletons.get(pid) ?? this.factories.get(pid);
    if (direct)
      return direct;
    const separator = pid.indexOf(FACTORY_SEPARATOR);
    if (separator < 0)
      return void 0;
    return this.factories.get(pid.slice(0, separator));
  }
  /** The locales a description has translations for */
  getLocales(pid) {
    return Object.keys(this.definitionFor(pid)?.localization ?? {});
  }
  /**
   * The declared default values of a PID.
   *
   * The loader merges these underneath a component's properties, so a component
   * reads a configured value or the declared default and never has to invent one.
   */
  defaults(pid) {
    const definition = this.definitionFor(pid);
    if (!definition)
      return {};
    const values = {};
    for (const [id, attribute] of Object.entries(definition.attributes)) {
      if (attribute.default !== void 0) {
        values[id] = attribute.default;
      }
    }
    return values;
  }
  /**
   * What is wrong with these values, according to the description.
   *
   * An empty array means they are acceptable. Every problem is reported, not just
   * the first, because a form wants to mark all its fields at once.
   *
   * Attributes the description does not mention are left alone: a configuration
   * may carry more than a schema knows, and `service.pid` always does.
   */
  validate(pid, values) {
    const definition = this.definitionFor(pid);
    if (!definition)
      return [];
    const errors = [];
    for (const [id, attribute] of Object.entries(definition.attributes)) {
      const value = values[id];
      if (value === void 0) {
        if (attribute.required !== false && attribute.default === void 0) {
          errors.push({ attribute: id, message: "is required" });
        }
        continue;
      }
      errors.push(...checkAttribute(id, attribute, value));
    }
    return errors;
  }
  /**
   * The values, with defaults filled in, or an error listing everything wrong.
   *
   * One call for the usual sequence a form goes through before writing.
   */
  coerce(pid, values) {
    const complete = { ...this.defaults(pid), ...values };
    return { values: complete, errors: this.validate(pid, complete) };
  }
}
function checkAttribute(id, attribute, value) {
  const errors = [];
  const many = isMultiValued(attribute);
  if (many !== Array.isArray(value)) {
    errors.push({
      attribute: id,
      message: many ? "expects a list of values" : "expects a single value"
    });
    return errors;
  }
  const entries = Array.isArray(value) ? [...value] : [value];
  const limit = maxLength(attribute);
  if (limit !== void 0 && entries.length > limit) {
    errors.push({ attribute: id, message: `takes at most ${limit} value(s)` });
  }
  for (const entry of entries) {
    errors.push(...checkValue(id, attribute, entry));
  }
  if (attribute.validate) {
    const message = attribute.validate(value);
    if (message !== void 0) {
      errors.push({ attribute: id, message });
    }
  }
  return errors;
}
function checkValue(id, attribute, value) {
  const errors = [];
  switch (attribute.type) {
    case "boolean":
      if (typeof value !== "boolean") {
        errors.push({ attribute: id, message: "expects true or false" });
      }
      break;
    case "number":
    case "integer":
      if (typeof value !== "number" || Number.isNaN(value)) {
        errors.push({ attribute: id, message: "expects a number" });
        break;
      }
      if (attribute.type === "integer" && !Number.isInteger(value)) {
        errors.push({ attribute: id, message: "expects a whole number" });
      }
      if (attribute.min !== void 0 && value < attribute.min) {
        errors.push({ attribute: id, message: `must be at least ${attribute.min}` });
      }
      if (attribute.max !== void 0 && value > attribute.max) {
        errors.push({ attribute: id, message: `must be at most ${attribute.max}` });
      }
      break;
    case "string":
    case "password":
      if (typeof value !== "string") {
        errors.push({ attribute: id, message: "expects text" });
        break;
      }
      if (attribute.minLength !== void 0 && value.length < attribute.minLength) {
        errors.push({
          attribute: id,
          message: `must be at least ${attribute.minLength} character(s)`
        });
      }
      if (attribute.maxLength !== void 0 && value.length > attribute.maxLength) {
        errors.push({
          attribute: id,
          message: `must be at most ${attribute.maxLength} character(s)`
        });
      }
      break;
  }
  if (attribute.options && !attribute.options.some((option) => option.value === value)) {
    const allowed = attribute.options.map((option) => String(option.value)).join(", ");
    errors.push({ attribute: id, message: `must be one of: ${allowed}` });
  }
  return errors;
}
function localizeDefinition(definition, locale) {
  const table = definition.localization?.[locale];
  if (!table)
    return definition;
  const translate = (text) => text !== void 0 && text.startsWith("%") ? table[text.slice(1)] ?? text : text;
  const attributes = {};
  for (const [id, attribute] of Object.entries(definition.attributes)) {
    attributes[id] = {
      ...attribute,
      name: translate(attribute.name),
      description: translate(attribute.description),
      options: attribute.options?.map((option) => ({
        ...option,
        label: translate(option.label)
      }))
    };
  }
  return {
    ...definition,
    name: translate(definition.name),
    description: translate(definition.description),
    attributes
  };
}
const METATYPE_SERVICE_ID = "tsm.metatype";
const COMPONENT_FACTORY_SERVICE_ID = "tsm.component.factory";
const COMPONENT_FACTORY = "component.factory";
const COMPONENT_NAME = "component.name";
function componentFactoryFilter(name) {
  return `(${COMPONENT_FACTORY}=${name})`;
}
const CONDITION_SERVICE_ID = "tsm.condition";
const CONDITION_ID = "condition.id";
const TRUE_CONDITION_ID = "true";
const TRUE_CONDITION = Object.freeze({});
const TRUE_CONDITION_FILTER = `(${CONDITION_ID}=${TRUE_CONDITION_ID})`;
function conditionProperties(id, extra) {
  return { ...extra, [CONDITION_ID]: id };
}
function conditionFilter(id) {
  return `(${CONDITION_ID}=${id})`;
}
const sharedLibraries = /* @__PURE__ */ new Map();
const tsmRuntime = {
  require(moduleId) {
    const lib = sharedLibraries.get(moduleId);
    if (!lib) {
      const available = Array.from(sharedLibraries.keys());
      throw new Error(`[TSM] Shared library not found: '${moduleId}'
Available libraries: ${available.length > 0 ? available.join(", ") : "none"}
Make sure the host application has registered this library.`);
    }
    return lib.exports;
  },
  register(moduleId, exports$1, version, providedBy) {
    if (!semverExports.valid(version)) {
      throw new Error(`[TSM] Invalid version '${version}' for library '${moduleId}'. Must be valid semver (e.g., '3.4.0').`);
    }
    const existing = sharedLibraries.get(moduleId);
    if (existing) {
      console.warn(`[TSM] Overwriting shared library '${moduleId}' (${existing.version} → ${version})`);
    }
    sharedLibraries.set(moduleId, {
      exports: exports$1,
      version,
      providedBy
    });
    console.debug(`[TSM] Registered: ${moduleId}@${version}${providedBy ? ` (by ${providedBy})` : ""}`);
  },
  has(moduleId) {
    return sharedLibraries.has(moduleId);
  },
  getVersion(moduleId) {
    return sharedLibraries.get(moduleId)?.version;
  },
  satisfies(moduleId, versionRange) {
    const lib = sharedLibraries.get(moduleId);
    if (!lib)
      return false;
    return semverExports.satisfies(lib.version, versionRange);
  },
  getRegistered() {
    const result = /* @__PURE__ */ new Map();
    for (const [id, lib] of sharedLibraries) {
      result.set(id, { version: lib.version, providedBy: lib.providedBy });
    }
    return result;
  },
  validate(requirements) {
    const result = {
      valid: true,
      missing: [],
      incompatible: []
    };
    for (const req of requirements) {
      const lib = sharedLibraries.get(req.id);
      if (!lib) {
        result.valid = false;
        result.missing.push(req.id);
      } else if (!semverExports.satisfies(lib.version, req.versionRange)) {
        result.valid = false;
        result.incompatible.push({
          id: req.id,
          required: req.versionRange,
          available: lib.version
        });
      }
    }
    return result;
  }
};
function initTsmRuntime() {
  if (typeof window !== "undefined") {
    if (window.__tsm__) {
      console.warn("[TSM] Runtime already initialized, returning existing instance");
      return window.__tsm__;
    }
    window.__tsm__ = tsmRuntime;
  }
  return tsmRuntime;
}
function isTsmRuntimeAvailable() {
  return typeof window !== "undefined" && !!window.__tsm__;
}
function assertContainer(value, moduleId) {
  if (value === null || typeof value !== "object" && typeof value !== "function") {
    throw new Error(`Container for module '${moduleId}' is ${value === null ? "null" : typeof value}; expected a module namespace, as an import() resolves to`);
  }
}
const MAX_ACTIVATIONS_PER_CASCADE = 10;
const IN_FLIGHT_STATES = /* @__PURE__ */ new Set([
  "resolving",
  "loading",
  "activating",
  "active",
  "unsatisfied"
]);
const DEFAULT_OPTIONS$1 = {
  loadTimeout: 1e4,
  continueOnError: true,
  hotReload: false,
  serviceRegistry: void 0,
  strictRequirements: false,
  logger: void 0,
  configurationAdmin: void 0,
  metatype: void 0,
  systemCapabilities: [],
  sharedLibraries: "runtime",
  entryResolver: void 0
};
let ConsoleLogger$1 = class ConsoleLogger {
  prefix;
  constructor(prefix = "[TSM]") {
    this.prefix = prefix;
  }
  debug(message, ...args) {
    console.debug(`${this.prefix} ${message}`, ...args);
  }
  info(message, ...args) {
    console.info(`${this.prefix} ${message}`, ...args);
  }
  warn(message, ...args) {
    console.warn(`${this.prefix} ${message}`, ...args);
  }
  error(message, ...args) {
    console.error(`${this.prefix} ${message}`, ...args);
  }
};
function referencesOf(ctor) {
  return [
    ...getInjectMetadata(ctor).map((entry) => ({
      serviceId: entry.serviceId,
      optional: entry.optional
    })),
    ...getPropertyInjectMetadata(ctor).map((entry) => ({
      serviceId: entry.serviceId,
      optional: entry.optional
    })),
    // A bound service is a reference too — the difference is only what a change
    // does: a method call instead of a rebuild
    ...getBindMethods(ctor).map((entry) => ({
      serviceId: entry.serviceId,
      optional: entry.optional
    }))
  ];
}
function sameServices(held, fresh) {
  return held.length === fresh.length && held.every((service, at) => service === fresh[at]);
}
const SINGLETON = "\0singleton";
const FACTORY_INSTANCE = "\0factory:";
function instanceKeyOf(wanted) {
  return wanted.factory && wanted.pid !== void 0 ? wanted.pid : SINGLETON;
}
function sameProperties(left, right) {
  const keys = Object.keys(left);
  if (keys.length !== Object.keys(right).length)
    return false;
  return keys.every((key) => {
    const a = left[key];
    const b = right[key];
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.length === b.length && a.every((entry, index) => entry === b[index]);
    }
    return a === b;
  });
}
const importOutsideBundler = new Function("specifier", "return import(specifier)");
async function nativeImport(specifier) {
  try {
    return await importOutsideBundler(specifier);
  } catch (error) {
    if (error?.code === "ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING") {
      return await import(
        /* @vite-ignore */
        specifier
      );
    }
    throw error;
  }
}
class ModuleLoader {
  modules = /* @__PURE__ */ new Map();
  manifests = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  resolver = new DependencyResolver();
  options;
  services;
  logger;
  serviceListener;
  /** Activations per cascade, to catch a module that flips between states forever */
  cascadeActivations = /* @__PURE__ */ new Map();
  disposed = false;
  /**
   * Per module: how many providers each of its dynamic requirements had at the
   * last check. A count, not a flag, so a module consuming cardinality 0..n
   * hears about a provider joining or leaving an already non-empty set.
   */
  dynamicBindings = /* @__PURE__ */ new Map();
  /**
   * Per module: which registration served each of its requirements when it was
   * activated. Identity of the registration, not of the service object, so a
   * lazily bound provider is not instantiated just to be compared.
   */
  boundRegistrations = /* @__PURE__ */ new Map();
  /** Per module: services it declared in `provides` but never registered */
  declarationMismatches = /* @__PURE__ */ new Map();
  /**
   * Modules that must not run until enabled again.
   *
   * A separate dimension from the state, as in DS: a disabled module is not
   * broken and not waiting, it is switched off. Without this a manual stop is
   * pointless — the next reconcile would activate it right back.
   */
  disabled = /* @__PURE__ */ new Set();
  /**
   * Components switched off individually, keyed `moduleId/ClassName`.
   *
   * A dimension of its own, as with modules: a disabled component is not waiting
   * for anything, it is off. DS has the same pair (112.5.1), one level down.
   */
  disabledComponents = /* @__PURE__ */ new Set();
  /**
   * Per module: its `@component()` classes and what became of them.
   *
   * Two things at once, and deliberately so. A service reference names the
   * module that registered it, never the class inside it, so without this the
   * components of a bundle are invisible from outside — the view DS offers as
   * `scr:list`. And a component's lifecycle is no longer its module's:
   * configuration can hold one component back or instantiate it several times
   * while the module around it just runs.
   */
  componentRuntimes = /* @__PURE__ */ new Map();
  /** Where component configuration comes from, when the host supplied one */
  configurations;
  /** Where configuration schemas are collected, when the host supplied a registry */
  metatype;
  configurationListener;
  /**
   * Containers handed over instead of fetched, kept so a reload can restart a
   * module that has no URL to fetch.
   */
  preloaded = /* @__PURE__ */ new Map();
  /** Module-scoped registry facades, so a teardown can withdraw what a module registered */
  scopes = /* @__PURE__ */ new Map();
  /** Serializes reactions to registry events; they are async, the events are not */
  queue = Promise.resolve();
  pendingTasks = 0;
  constructor(options = {}) {
    this.options = { ...DEFAULT_OPTIONS$1, ...options };
    this.services = options.serviceRegistry ?? new DefaultServiceRegistry();
    this.logger = options.logger ?? new ConsoleLogger$1();
    this.publishTrueCondition();
    this.publishComponentRuntime();
    this.publishFeatureService();
    this.observeServiceRegistry();
    this.observeConfigurations(options.configurationAdmin);
    this.publishMetatype(options.metatype);
  }
  /**
   * Register the condition that always holds.
   *
   * DS treats `(osgi.condition.id=true)` as the default satisfying condition, so
   * there is always a baseline a filter can be written against — and so the
   * mechanism needs no special case for "no condition given". Registered once
   * here rather than lazily: a component asking for it must not depend on
   * whether some other component asked first.
   */
  publishTrueCondition() {
    this.services.register(CONDITION_SERVICE_ID, TRUE_CONDITION, {
      providedBy: "tsm",
      properties: { [CONDITION_ID]: TRUE_CONDITION_ID }
    });
  }
  /**
   * Publish the component layer as a service, as SCR does.
   *
   * In OSGi, introspecting components goes through `ServiceComponentRuntime`
   * rather than through the framework, because SCR is a bundle like any other.
   * Keeping that here is what lets a component view or a diagnostics panel ship
   * as a module: without it the loader is the only way in, and every such tool
   * would have to live in the host.
   *
   * A facade over methods this object already has — deliberately, so there is one
   * implementation and not two that can disagree.
   */
  publishComponentRuntime() {
    const runtime = {
      getComponentDescriptions: (moduleId) => this.getComponents(moduleId),
      getComponentDescription: (moduleId, className) => this.getComponents(moduleId).find((entry) => entry.className === className),
      isComponentEnabled: (moduleId, className) => !this.isComponentDisabled(moduleId, className),
      disableComponent: (moduleId, className) => this.disableComponent(moduleId, className),
      enableComponent: (moduleId, className) => this.enableComponent(moduleId, className),
      getDisabledComponents: () => this.getDisabledComponents()
    };
    this.services.register(COMPONENT_RUNTIME_SERVICE_ID, runtime, { providedBy: "tsm" });
  }
  /**
   * Publish the feature service, as OSGi has it in the registry (159.11).
   *
   * Always: reading and writing features needs nothing from the application, and
   * a tool that builds them should not have to import the host's package. What
   * *installing* one needs — a resolver, a Configuration Admin — belongs to the
   * launcher and not here, which is the line the specification draws too.
   */
  publishFeatureService() {
    this.services.register(FEATURE_SERVICE_ID, featureService, { providedBy: "tsm" });
  }
  /**
   * Take the schema registry and publish it, as the Metatype Service is a service
   * in OSGi too — so a configuration user interface can be a module.
   */
  publishMetatype(metatype) {
    if (!metatype)
      return;
    this.metatype = metatype;
    this.services.register(METATYPE_SERVICE_ID, metatype, { providedBy: "tsm" });
  }
  /**
   * Watch configuration, and publish the admin as a service.
   *
   * Config Admin is a service in OSGi too, and SCR is one of its clients rather
   * than part of it: everything the loader does with configuration goes through
   * PIDs and these events.
   */
  observeConfigurations(admin) {
    if (!admin)
      return;
    this.configurations = admin;
    this.configurationListener = {
      onConfigurationEvent: (event) => {
        this.enqueue(() => this.applyConfiguration(event));
      }
    };
    admin.addListener(this.configurationListener);
    this.services.register(CONFIGURATION_ADMIN_SERVICE_ID, admin, { providedBy: "tsm" });
  }
  /**
   * Watch the registry for services that active modules depend on.
   *
   * Observation only: a withdrawal is reported, not acted upon. Tearing the
   * consumer down (or rebinding it) is a lifecycle change and belongs with the
   * `unsatisfied` state, not here.
   */
  observeServiceRegistry() {
    const registry = this.services;
    if (typeof registry.addListener !== "function") {
      return;
    }
    this.serviceListener = {
      onServiceEvent: () => {
        this.enqueue(() => this.reconcile());
      }
    };
    registry.addListener(this.serviceListener);
  }
  /**
   * Queue a reaction to a registry event.
   *
   * Registry listeners are synchronous while activation is not, so reactions
   * cannot run inside the event. Serializing them also keeps a cascade in
   * order when a teardown withdraws further services.
   */
  enqueue(task) {
    if (this.disposed)
      return;
    if (this.pendingTasks === 0) {
      this.cascadeActivations.clear();
    }
    this.pendingTasks++;
    this.queue = this.queue.then(task).catch((error) => {
      this.logger.error("Service event reaction failed:", error);
    }).finally(() => {
      this.pendingTasks--;
    });
  }
  /**
   * Wait until every queued reaction has run, including those a reaction caused.
   *
   * `loadAll()`, `unloadModule()` and `reloadModule()` await this themselves.
   * After a single `loadModule()` it has to be called by the caller — or
   * `loadModule(manifest, { awaitCascade: true })` does it in one step:
   * activating one module can satisfy others, and that cascade runs in the queue.
   *
   * Do not call it from a lifecycle hook — a hook runs inside the cascade it
   * would be waiting for, which deadlocks. Whether a call sits inside a queued
   * reaction cannot be detected from here without async context tracking, so
   * this is a rule rather than a guard.
   */
  async settle() {
    while (this.pendingTasks > 0) {
      await this.queue;
    }
  }
  /**
   * Why a module cannot run right now: missing services, and dependencies
   * that are not active themselves.
   *
   * A module whose dependency is parked must wait too, otherwise it activates
   * against code that is not running.
   */
  unsatisfiedReasons(manifest, mode = "activation") {
    const requirements = (manifest.requiresService ?? []).filter((requirement) => mode === "activation" || requirement.policy !== "dynamic");
    const services = requirements.length > 0 ? this.services.checkRequirements(requirements).missing : [];
    const modules = [];
    for (const dep of manifest.dependencies ?? []) {
      const depSpec = typeof dep === "string" ? { id: dep } : dep;
      if (depSpec.optional)
        continue;
      if (!this.isLoaded(depSpec.id)) {
        modules.push(depSpec.id);
      }
    }
    return { services, modules };
  }
  isSatisfied(manifest) {
    const reasons = this.unsatisfiedReasons(manifest);
    return reasons.services.length === 0 && reasons.modules.length === 0;
  }
  /**
   * Park a loaded module until what it needs is available.
   *
   * Kept apart from 'error': nothing failed, the module is simply not due yet.
   */
  park(loadedModule, reasons) {
    const { manifest } = loadedModule;
    const waitingFor = [
      ...reasons.services,
      ...reasons.modules.map((id) => `module ${id}`)
    ];
    loadedModule.state = "unsatisfied";
    loadedModule.error = void 0;
    this.logger.info(`Module ${manifest.id} waits for: ${waitingFor.join(", ")}`);
    this.emit({
      type: "unsatisfied",
      moduleId: manifest.id,
      manifest,
      serviceIds: reasons.services,
      timestamp: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Bring loaded modules in line with what is currently available.
   *
   * Two directions, in this order: active modules whose requirements are gone
   * are torn down, then parked modules that became satisfied are activated.
   * Tearing a module down withdraws its own services, which produces further
   * registry events — that is what carries a cascade to indirect consumers.
   */
  async reconcile() {
    if (this.disposed)
      return;
    await this.parkUnsatisfiedActive();
    await this.rebindGreedyRequirements();
    await this.notifyDynamicChanges();
    await this.activateSatisfiedPending();
    await this.reconcileComponentReferences();
  }
  /**
   * Move active modules to a better-ranked provider where they asked for it.
   *
   * Without `policyOption: 'greedy'` a running module stays with the provider it
   * has, even after a higher-ranked one appears — the ranking then only decides
   * what a later lookup gets. This is DS' reluctant/greedy distinction.
   */
  async rebindGreedyRequirements() {
    for (const loadedModule of [...this.modules.values()]) {
      if (loadedModule.state !== "active")
        continue;
      const greedy = (loadedModule.manifest.requiresService ?? []).filter((requirement) => requirement.policyOption === "greedy");
      if (greedy.length === 0)
        continue;
      const moduleId = loadedModule.manifest.id;
      const bound = this.boundRegistrations.get(moduleId);
      if (!bound)
        continue;
      for (const requirement of greedy) {
        const current = this.visibleRegistrationKey(requirement.id, requirement.target);
        const inUse = bound.get(requirement.id);
        if (current === void 0 || inUse === void 0 || current === inUse)
          continue;
        if (requirement.policy === "dynamic") {
          await this.callDynamicHook(loadedModule, "onServiceUnbound", requirement.id);
          await this.callDynamicHook(loadedModule, "onServiceBound", requirement.id);
          bound.set(requirement.id, current);
          continue;
        }
        this.logger.info(`Rebuilding ${moduleId}: a better provider for ${requirement.id} appeared`);
        await this.deactivate(loadedModule);
        await this.activateLoaded(loadedModule);
        break;
      }
    }
  }
  /**
   * Identity of the registration currently serving an ID, without resolving it.
   * Undefined when the registry predates references or nothing serves the ID.
   */
  visibleRegistrationKey(serviceId2, target) {
    const registry = this.services;
    if (typeof registry.getServiceReferences !== "function")
      return void 0;
    return registry.getServiceReferences(serviceId2, target)[0]?.key;
  }
  captureBoundRegistrations(manifest) {
    const requirements = manifest.requiresService ?? [];
    if (requirements.length === 0)
      return;
    const bound = /* @__PURE__ */ new Map();
    for (const requirement of requirements) {
      const key = this.visibleRegistrationKey(requirement.id, requirement.target);
      if (key !== void 0) {
        bound.set(requirement.id, key);
      }
    }
    this.boundRegistrations.set(manifest.id, bound);
  }
  /**
   * Tell active modules about dynamic requirements that came or went.
   *
   * The module keeps running; dropping the reference is its job, which is the
   * contract `policy: 'dynamic'` expresses.
   */
  async notifyDynamicChanges() {
    for (const loadedModule of [...this.modules.values()]) {
      if (loadedModule.state !== "active")
        continue;
      const dynamic = (loadedModule.manifest.requiresService ?? []).filter((requirement) => requirement.policy === "dynamic");
      if (dynamic.length === 0)
        continue;
      const moduleId = loadedModule.manifest.id;
      const previous = this.dynamicBindings.get(moduleId) ?? /* @__PURE__ */ new Map();
      const current = this.countDynamicProviders(dynamic);
      this.dynamicBindings.set(moduleId, current);
      for (const requirement of dynamic) {
        const before = previous.get(requirement.id) ?? 0;
        const now = current.get(requirement.id) ?? 0;
        if (now < before) {
          await this.callDynamicHook(loadedModule, "onServiceUnbound", requirement.id);
        } else if (now > before) {
          await this.callDynamicHook(loadedModule, "onServiceBound", requirement.id);
        }
      }
    }
  }
  async callDynamicHook(loadedModule, hook, serviceId2) {
    const handler = loadedModule.lifecycle?.[hook];
    if (!handler)
      return;
    try {
      await handler.call(loadedModule.lifecycle, this.createContext(loadedModule), serviceId2);
    } catch (error) {
      this.logger.error(`${hook} of ${loadedModule.manifest.id} failed for service ${serviceId2}:`, error);
    }
  }
  /**
   * Record which dynamic requirements are available, so the first reconcile
   * after activation does not report them as newly bound
   */
  captureDynamicBindings(manifest) {
    const dynamic = (manifest.requiresService ?? []).filter((requirement) => requirement.policy === "dynamic");
    if (dynamic.length === 0)
      return;
    this.dynamicBindings.set(manifest.id, this.countDynamicProviders(dynamic));
  }
  /**
   * What each dynamic requirement currently sees.
   *
   * A collection counts providers, so it hears about one joining or leaving.
   * A single-valued requirement only counts presence — that a second provider
   * waits on the bench is none of its business, and reporting it would double
   * up with the greedy swap.
   */
  countDynamicProviders(requirements) {
    const counts = /* @__PURE__ */ new Map();
    for (const requirement of requirements) {
      const providers = this.countProviders(requirement.id, requirement.target);
      counts.set(requirement.id, collectsMany(requirement) ? providers : Math.min(providers, 1));
    }
    return counts;
  }
  countProviders(serviceId2, target) {
    const registry = this.services;
    if (typeof registry.countProviders === "function") {
      return registry.countProviders(serviceId2, target);
    }
    return this.services.has(serviceId2) ? 1 : 0;
  }
  async parkUnsatisfiedActive() {
    let changed = true;
    while (changed) {
      changed = await this.parkUnsatisfiedActiveOnce();
    }
  }
  async parkUnsatisfiedActiveOnce() {
    let changed = false;
    for (const loadedModule of [...this.modules.values()]) {
      if (loadedModule.state !== "active")
        continue;
      const reasons = this.unsatisfiedReasons(loadedModule.manifest, "runtime");
      if (reasons.services.length === 0 && reasons.modules.length === 0)
        continue;
      if (reasons.services.length > 0) {
        this.logger.warn(`Service(s) ${reasons.services.join(", ")} withdrawn while ${loadedModule.manifest.id} is active and requires them`);
        this.emit({
          type: "service-withdrawn",
          moduleId: loadedModule.manifest.id,
          manifest: loadedModule.manifest,
          serviceIds: reasons.services,
          timestamp: /* @__PURE__ */ new Date()
        });
      }
      await this.deactivate(loadedModule);
      this.park(loadedModule, reasons);
      changed = true;
    }
    return changed;
  }
  async activateSatisfiedPending() {
    let changed = true;
    while (changed) {
      changed = await this.activateSatisfiedPendingOnce();
    }
  }
  async activateSatisfiedPendingOnce() {
    let changed = false;
    for (const loadedModule of [...this.modules.values()]) {
      if (loadedModule.state !== "unsatisfied")
        continue;
      if (this.disabled.has(loadedModule.manifest.id))
        continue;
      if (!this.isSatisfied(loadedModule.manifest))
        continue;
      if (this.exceedsCascadeBudget(loadedModule))
        continue;
      await this.activateLoaded(loadedModule);
      changed = true;
    }
    return changed;
  }
  /**
   * Guard against a module that keeps activating and parking within one cascade
   * (for instance one that registers a service on activate and withdraws the
   * same service on deactivate while requiring it).
   */
  exceedsCascadeBudget(loadedModule) {
    const moduleId = loadedModule.manifest.id;
    const attempts = (this.cascadeActivations.get(moduleId) ?? 0) + 1;
    this.cascadeActivations.set(moduleId, attempts);
    if (attempts <= MAX_ACTIVATIONS_PER_CASCADE) {
      return false;
    }
    const error = new Error(`Module ${moduleId} activated and parked ${MAX_ACTIVATIONS_PER_CASCADE} times in one cascade; giving up to avoid an endless loop`);
    loadedModule.state = "error";
    loadedModule.error = error;
    this.logger.error(error.message);
    this.emit({
      type: "error",
      moduleId,
      manifest: loadedModule.manifest,
      error,
      timestamp: /* @__PURE__ */ new Date()
    });
    return true;
  }
  /**
   * Run activation for an already loaded module and record the outcome
   */
  async activateLoaded(loadedModule) {
    const { manifest } = loadedModule;
    loadedModule.state = "activating";
    try {
      await this.activate(loadedModule);
      this.captureDynamicBindings(manifest);
      this.captureBoundRegistrations(manifest);
      loadedModule.state = "active";
      this.emit({
        type: "activated",
        moduleId: manifest.id,
        manifest,
        timestamp: /* @__PURE__ */ new Date()
      });
      this.logger.info(`Module ${manifest.id} activated`);
    } catch (error) {
      loadedModule.state = "error";
      loadedModule.error = error;
      this.emit({
        type: "error",
        moduleId: manifest.id,
        manifest,
        error,
        timestamp: /* @__PURE__ */ new Date()
      });
    }
  }
  /**
   * Detach from the service registry. Call when the loader is discarded,
   * otherwise its listener outlives it.
   */
  dispose() {
    this.disposed = true;
    const registry = this.services;
    if (this.serviceListener && typeof registry.removeListener === "function") {
      registry.removeListener(this.serviceListener);
    }
    this.serviceListener = void 0;
    this.scopes.clear();
    this.cascadeActivations.clear();
    this.dynamicBindings.clear();
    this.boundRegistrations.clear();
    this.declarationMismatches.clear();
    this.disabled.clear();
    this.disabledComponents.clear();
    this.preloaded.clear();
    this.componentRuntimes.clear();
    if (this.configurationListener) {
      this.configurations?.removeListener(this.configurationListener);
      this.configurationListener = void 0;
    }
    this.configurations = void 0;
    this.metatype = void 0;
  }
  /**
   * Register module manifests
   */
  register(manifests) {
    for (const manifest of manifests) {
      this.manifests.set(manifest.id, manifest);
      this.emit({
        type: "registering",
        moduleId: manifest.id,
        manifest,
        timestamp: /* @__PURE__ */ new Date()
      });
    }
  }
  /**
   * Load all registered modules in dependency order
   */
  async loadAll() {
    await this.configurations?.ready();
    const manifests = Array.from(this.manifests.values());
    const resolution = this.resolver.resolve(manifests);
    if (resolution.circular.length > 0) {
      this.logger.warn("Circular dependencies detected:", resolution.circular);
    }
    if (resolution.missing.length > 0) {
      this.logger.warn("Missing dependencies:", resolution.missing);
    }
    this.logger.info(`Loading ${resolution.loadOrder.length} module(s)...`);
    for (const manifest of resolution.loadOrder) {
      if (this.disabled.has(manifest.id)) {
        this.logger.debug(`Skipping disabled module: ${manifest.id}`);
        continue;
      }
      try {
        await this.loadModule(manifest);
      } catch (error) {
        this.logger.error(`Failed to load module ${manifest.id}:`, error);
        if (!this.options.continueOnError) {
          throw error;
        }
      }
    }
    await this.settle();
    const mismatches = this.getDeclarationMismatches();
    if (mismatches.length > 0) {
      this.logger.warn(`${mismatches.length} module(s) declared services they did not register:`, mismatches.map((entry) => `${entry.moduleId} -> ${entry.serviceIds.join(", ")}`));
    }
    const pending = this.getUnsatisfiedModules();
    if (pending.length > 0) {
      this.logger.warn(`${pending.length} module(s) waiting for dependencies:`, pending.map((entry) => `${entry.moduleId} <- ${entry.waitingFor.join(", ")}`));
    }
  }
  /**
   * What the loaded modules declared as `@component()` classes, and what became
   * of each declaration.
   *
   * The view a service reference cannot give: it names the module that registered
   * a service, never the class inside it. DS offers the same listing as
   * `scr:list`, including the distinction between a declaration and its
   * configurations — a component may currently be running once, several times, or
   * not at all.
   *
   * @param moduleId Restricts the listing to one module
   */
  getComponents(moduleId) {
    const entries = moduleId !== void 0 ? [[moduleId, this.componentRuntimes.get(moduleId) ?? []]] : [...this.componentRuntimes.entries()];
    return entries.flatMap(([id, runtimes]) => runtimes.map((runtime) => this.describeComponent(id, runtime)));
  }
  describeComponent(moduleId, runtime) {
    const activateMethod = getActivateMethod(runtime.ctor);
    const configurations = [...runtime.instances.values()].map((instance) => ({
      pid: instance.pid,
      state: instance.instance !== void 0 || this.isInstantiated(instance) ? "active" : "satisfied",
      properties: instance.properties
    }));
    if (configurations.length === 0) {
      const missing = this.missingReferences(runtime);
      configurations.push(missing.length > 0 ? { state: "unsatisfied-reference", waitingFor: missing, properties: {} } : runtime.factory !== void 0 ? { state: "satisfied", properties: {} } : { state: "unsatisfied-configuration", properties: {} });
    }
    return {
      moduleId,
      className: runtime.className,
      disabled: this.isComponentDisabled(moduleId, runtime.className),
      services: [...runtime.options.service ?? []],
      immediate: runtime.options.immediate ?? activateMethod !== void 0,
      hasActivate: activateMethod !== void 0,
      hasDeactivate: getDeactivateMethod(runtime.ctor) !== void 0,
      hasModified: getModifiedMethod(runtime.ctor) !== void 0,
      references: runtime.references,
      collections: getInjectAllMetadata(runtime.ctor).map((entry) => ({
        serviceId: entry.serviceId,
        target: entry.target,
        fieldOption: entry.fieldOption
      })),
      satisfyingCondition: runtime.options.satisfyingCondition,
      factory: runtime.options.factory === void 0 ? void 0 : {
        name: runtime.options.factory,
        registered: runtime.factory !== void 0,
        instances: runtime.instances.size
      },
      configurationPid: runtime.pids,
      configurationPolicy: runtime.policy,
      configurations
    };
  }
  /**
   * Services declared in a manifest's `provides` that the module did not
   * register on activation.
   *
   * The resolver builds load-order edges from `provides`, so a declaration
   * nothing backs orders modules after a provider that never delivers. Query
   * this in CI to catch the drift where it is cheap to fix.
   */
  getDeclarationMismatches() {
    return [...this.declarationMismatches].map(([moduleId, serviceIds]) => ({
      moduleId,
      serviceIds
    }));
  }
  /**
   * Modules that are loaded but waiting, with what each of them waits for.
   * The answer to "why is this module not running?".
   */
  getUnsatisfiedModules() {
    const result = [];
    for (const loadedModule of this.modules.values()) {
      if (loadedModule.state !== "unsatisfied")
        continue;
      const reasons = this.unsatisfiedReasons(loadedModule.manifest);
      result.push({
        moduleId: loadedModule.manifest.id,
        waitingFor: [
          ...reasons.services,
          ...reasons.modules.map((id) => `module ${id}`)
        ]
      });
    }
    return result;
  }
  /**
   * Load a single module.
   *
   * Returns once this module is loaded, activated or parked. Modules that become
   * satisfied *because* of it are activated in the queued cascade afterwards.
   *
   * @param options.awaitCascade Also wait for that cascade, so the whole picture
   *   is stable on return — the behaviour OSGi gets for free, where a service
   *   registration is delivered synchronously and `registerService()` returns
   *   with the consequences already applied. Off by default, and it must not be
   *   set from a lifecycle hook: a hook runs inside the cascade it would then
   *   wait for. There is no timeout — the loader knows how many reactions are
   *   outstanding, so waiting is exact rather than a guess.
   * @param options.container A module that is already imported, handed over
   *   instead of fetched from `manifest.entry`. For an application still bundling
   *   its modules with the host, and for tests, which then need no URL at all.
   *   `ModuleLoaderOptions.entryResolver` does the same for many modules at once.
   */
  async loadModule(manifest, options = {}) {
    if (manifest.id === SYSTEM_BUNDLE_ID) {
      throw new Error(`'${SYSTEM_BUNDLE_ID}' stands for the runtime itself and cannot be loaded`);
    }
    if (!this.manifests.has(manifest.id)) {
      this.register([manifest]);
    }
    if (this.disabled.has(manifest.id)) {
      const existing2 = this.modules.get(manifest.id);
      if (existing2) {
        this.logger.warn(`Module ${manifest.id} is disabled — enableModule() first`);
        return existing2;
      }
      throw new Error(`Module ${manifest.id} is disabled — enableModule() first`);
    }
    const existing = this.modules.get(manifest.id);
    if (existing && IN_FLIGHT_STATES.has(existing.state)) {
      return existing;
    }
    const loadedModule = {
      manifest,
      state: "resolving",
      exports: /* @__PURE__ */ new Map(),
      loadedAt: /* @__PURE__ */ new Date()
    };
    this.modules.set(manifest.id, loadedModule);
    try {
      await this.ensureDependencies(manifest);
      this.validateSharedDependencies(manifest);
      loadedModule.state = "loading";
      this.emit({
        type: "loading",
        moduleId: manifest.id,
        manifest,
        timestamp: /* @__PURE__ */ new Date()
      });
      await this.doLoad(loadedModule, options.container);
      loadedModule.state = "activating";
      this.emit({
        type: "loaded",
        moduleId: manifest.id,
        manifest,
        timestamp: /* @__PURE__ */ new Date()
      });
      const reasons = this.unsatisfiedReasons(manifest);
      if (reasons.services.length > 0 || reasons.modules.length > 0) {
        if (this.options.strictRequirements && reasons.services.length > 0) {
          throw new Error(`Module ${manifest.id} requires services that are not available: ${reasons.services.join(", ")}`);
        }
        this.park(loadedModule, reasons);
        if (options.awaitCascade)
          await this.settle();
        return loadedModule;
      }
      await this.activate(loadedModule);
      this.captureDynamicBindings(manifest);
      this.captureBoundRegistrations(manifest);
      loadedModule.state = "active";
      this.emit({
        type: "activated",
        moduleId: manifest.id,
        manifest,
        timestamp: /* @__PURE__ */ new Date()
      });
      this.logger.info(`Module ${manifest.id} activated`);
      this.enqueue(() => this.reconcile());
      if (options.awaitCascade)
        await this.settle();
      return loadedModule;
    } catch (error) {
      loadedModule.state = "error";
      loadedModule.error = error;
      this.emit({
        type: "error",
        moduleId: manifest.id,
        manifest,
        error,
        timestamp: /* @__PURE__ */ new Date()
      });
      throw error;
    }
  }
  /**
   * Ensure all dependencies are loaded
   */
  async ensureDependencies(manifest) {
    for (const dep of manifest.dependencies ?? []) {
      const depId = typeof dep === "string" ? dep : dep.id;
      if (!this.isLoaded(depId)) {
        const depManifest = this.manifests.get(depId);
        if (!depManifest) {
          throw new Error(`Missing dependency: ${depId}`);
        }
        await this.loadModule(depManifest);
      }
    }
  }
  /**
   * Validate that all shared library dependencies are available
   * Shared libraries are provided by the host via __tsm__.register()
   */
  validateSharedDependencies(manifest) {
    const sharedDeps = manifest.sharedDependencies;
    if (!sharedDeps || sharedDeps.length === 0) {
      return;
    }
    if (this.options.sharedLibraries === "import-map") {
      return;
    }
    if (!isTsmRuntimeAvailable()) {
      throw new Error(`Module '${manifest.id}' requires shared libraries (${sharedDeps.map((d) => d.id).join(", ")}), but TSM runtime is not initialized. Call initTsmRuntime() and register shared libraries before loading modules.`);
    }
    const validation = tsmRuntime.validate(sharedDeps);
    if (!validation.valid) {
      const errors = [];
      if (validation.missing.length > 0) {
        errors.push(`Missing shared libraries: ${validation.missing.join(", ")}`);
      }
      if (validation.incompatible.length > 0) {
        for (const inc of validation.incompatible) {
          errors.push(`Incompatible version for '${inc.id}': requires ${inc.required}, but ${inc.available} is available`);
        }
      }
      throw new Error(`Module '${manifest.id}' has unmet shared library dependencies:
` + errors.map((e) => `  - ${e}`).join("\n") + `

Available shared libraries:
` + Array.from(tsmRuntime.getRegistered().entries()).map(([id, info]) => `  - ${id}@${info.version}`).join("\n"));
    }
    this.logger.debug(`Module ${manifest.id}: shared dependencies validated`, sharedDeps.map((d) => `${d.id}@${d.versionRange}`));
  }
  /**
   * Actually load the module entry point
   */
  async doLoad(loadedModule, container) {
    const { manifest } = loadedModule;
    const entryModule = await this.loadEntry(manifest, container);
    loadedModule.container = entryModule;
    if (entryModule && typeof entryModule === "object") {
      const moduleObj = entryModule;
      if (typeof moduleObj.activate === "function" || typeof moduleObj.deactivate === "function") {
        loadedModule.lifecycle = moduleObj;
      }
      if (moduleObj.default && typeof moduleObj.default === "object") {
        const defaultExport = moduleObj.default;
        if (typeof defaultExport.activate === "function" || typeof defaultExport.deactivate === "function") {
          loadedModule.lifecycle = defaultExport;
        }
      }
    }
    for (const [exportPath] of Object.entries(manifest.exports ?? {})) {
      try {
        const exported = await this.loadExport(manifest.id, exportPath);
        loadedModule.exports.set(exportPath, exported);
      } catch (error) {
        this.logger.warn(`Failed to load export ${exportPath} from ${manifest.id}:`, error);
      }
    }
  }
  /**
   * Load module entry point via dynamic import
   */
  /**
   * Get hold of the module: from a container that was handed over, or by
   * importing its entry.
   *
   * Order: the container passed to `loadModule`, then what `entryResolver`
   * answers, then the URL. Nothing consults a global — a module used to be handed
   * over through `window[moduleId]`, which cost collisions with DOM ids and made
   * the loader unusable in Node, where `window` does not exist.
   */
  async loadEntry(manifest, container) {
    const handed = container !== void 0 ? container : this.preloaded.get(manifest.id) ?? this.options.entryResolver?.(manifest);
    if (handed !== void 0) {
      assertContainer(handed, manifest.id);
      this.preloaded.set(manifest.id, handed);
      return handed;
    }
    try {
      const module = await nativeImport(manifest.entry);
      const namespace = module;
      if (typeof namespace.activate === "function" || typeof namespace.deactivate === "function") {
        return namespace;
      }
      return namespace.default ?? namespace;
    } catch (error) {
      throw new Error(`Failed to load module entry: ${manifest.entry} - ${error}`);
    }
  }
  /**
   * Load a specific export from a module
   */
  async loadExport(moduleId, exportPath) {
    const loadedModule = this.modules.get(moduleId);
    if (loadedModule?.exports.has(exportPath)) {
      return loadedModule.exports.get(exportPath);
    }
    throw new Error(`Export ${exportPath} not found in module ${moduleId}`);
  }
  /**
   * Activate a module (call lifecycle hook)
   */
  async activate(loadedModule) {
    const manifest = loadedModule.manifest;
    this.emit({
      type: "activating",
      moduleId: manifest.id,
      manifest,
      timestamp: /* @__PURE__ */ new Date()
    });
    if (loadedModule.lifecycle?.activate) {
      const context = this.createContext(loadedModule);
      await loadedModule.lifecycle.activate(context);
    }
    await this.startComponents(loadedModule);
    if (manifest.provides && manifest.provides.length > 0) {
      const undelivered = [];
      const awaitingConfiguration = this.servicesAwaitingConfiguration(manifest.id);
      for (const service of manifest.provides) {
        if (awaitingConfiguration.has(service.id)) {
          this.logger.info(`Module ${manifest.id} does not provide ${service.id} yet: its component waits for configuration`);
        } else if (this.services.has(service.id)) {
          this.logger.info(`Module ${manifest.id} provides service: ${service.id} (${service.scope ?? "singleton"})`);
        } else {
          undelivered.push(service.id);
        }
      }
      if (undelivered.length > 0) {
        this.declarationMismatches.set(manifest.id, undelivered);
        this.logger.warn(`Module ${manifest.id} declared service(s) it did not register: ${undelivered.join(", ")}`);
        this.emit({
          type: "declaration-mismatch",
          moduleId: manifest.id,
          manifest,
          serviceIds: undelivered,
          timestamp: /* @__PURE__ */ new Date()
        });
      } else {
        this.declarationMismatches.delete(manifest.id);
      }
    }
  }
  /**
   * Register and start the `@component()` classes a module exports.
   *
   * The declarative counterpart to registering services by hand in a module's
   * `activate` export: what a component offers stands on the class, so manifest
   * and code cannot drift apart.
   *
   * Both ways work side by side, and the imperative `activate` runs first: it may
   * set up what a component needs injected, whereas the reverse — a component
   * preparing something for `activate` — is what a declared service is for.
   */
  async startComponents(loadedModule) {
    const components = this.findComponents(loadedModule);
    if (components.length === 0)
      return;
    const target = {
      id: loadedModule.manifest.id,
      version: loadedModule.manifest.version
    };
    const runtimes = components.map(({ ctor, options }) => ({
      ctor,
      options,
      className: ctor.name,
      target,
      references: referencesOf(ctor),
      pids: this.pidsOf(ctor, options),
      policy: options.configurationPolicy ?? "optional",
      instances: /* @__PURE__ */ new Map()
    }));
    this.componentRuntimes.set(loadedModule.manifest.id, runtimes);
    this.designateSchemas(loadedModule.manifest.id, runtimes);
    const registered = [];
    let registeredSomething = true;
    while (registeredSomething) {
      registeredSomething = false;
      for (const runtime of runtimes) {
        if (this.isComponentDisabled(loadedModule.manifest.id, runtime.className))
          continue;
        if (this.missingReferences(runtime).length > 0)
          continue;
        if (runtime.options.factory !== void 0) {
          if (runtime.factory)
            continue;
          this.registerComponentFactory(loadedModule, runtime);
          registeredSomething = true;
          continue;
        }
        if (runtime.instances.size > 0)
          continue;
        for (const wanted of this.configurationsFor(runtime)) {
          this.registerInstance(loadedModule, runtime, wanted);
          registeredSomething = true;
        }
        if (runtime.instances.size > 0)
          registered.push(runtime);
      }
    }
    for (const runtime of runtimes) {
      if (runtime.instances.size > 0 || runtime.factory)
        continue;
      const missing = this.missingReferences(runtime);
      this.logger.info(missing.length > 0 ? `Component ${runtime.className} of ${loadedModule.manifest.id} waits for service(s): ${missing.join(", ")}` : `Component ${runtime.className} of ${loadedModule.manifest.id} waits for configuration: ${runtime.pids.join(", ")}`);
    }
    for (const runtime of registered) {
      for (const instance of [...runtime.instances.values()]) {
        await this.activateInstance(loadedModule, runtime, instance);
      }
    }
  }
  /**
   * The configuration PIDs a component reads.
   *
   * Defaults to the class name, as DS defaults to the component name — so a
   * component is configurable without declaring anything, and the PID is
   * something a person can guess.
   */
  pidsOf(ctor, options) {
    const declared = options.configurationPid;
    if (declared === void 0)
      return [ctor.name];
    return Array.isArray(declared) ? declared : [declared];
  }
  /**
   * Publish what each component declared about the shape of its configuration.
   *
   * The equivalent of bnd writing a Designate element next to the component
   * descriptor: nothing in the running system needs it, and a user interface
   * cannot be written without it.
   */
  designateSchemas(moduleId, runtimes) {
    const metatype = this.metatype;
    if (!metatype)
      return;
    for (const runtime of runtimes) {
      const schema = runtime.options.configurationSchema;
      if (!schema || runtime.policy === "ignore")
        continue;
      for (const pid of runtime.pids) {
        const existing = metatype.getObjectClassDefinition(pid);
        if (existing !== void 0 && existing !== schema) {
          this.logger.warn(`Component ${runtime.className} describes ${pid} as '${schema.id}', which is already described as '${existing.id}' — the later one wins`);
        }
        metatype.designate(pid, schema, {
          factory: runtime.options.configurationFactory,
          providedBy: moduleId
        });
      }
    }
  }
  /**
   * The declared defaults for a component's PIDs, in the same order the PIDs
   * merge, so a specific PID's default beats a shared one's.
   */
  declaredDefaults(runtime) {
    if (!this.metatype)
      return {};
    let defaults = {};
    for (const pid of runtime.pids) {
      defaults = { ...defaults, ...this.metatype.defaults(pid) };
    }
    return defaults;
  }
  /**
   * Which instances of a component its configuration calls for.
   *
   * Three outcomes, and they are what `configurationPolicy` means:
   * none when required configuration is missing, one for the ordinary case, and
   * one per configuration when a PID turns out to be a factory PID. In DS the
   * last one is not a separate feature either — it follows from the PID.
   */
  configurationsFor(runtime) {
    const defaults = runtime.policy === "ignore" ? {} : this.declaredDefaults(runtime);
    const unconfigured = () => runtime.policy === "require" ? [] : [{ factory: false, values: { ...defaults } }];
    if (runtime.policy === "ignore" || !this.configurations) {
      return unconfigured();
    }
    let values = { ...defaults };
    let pid;
    for (const candidate of runtime.pids) {
      const configuration = this.configurations.findTargetedConfiguration(candidate, runtime.target);
      const properties = configuration?.getProperties();
      if (!properties)
        continue;
      values = { ...values, ...properties };
      pid ??= configuration.pid;
    }
    const declaredFactory = runtime.options.configurationFactory;
    if (declaredFactory !== false) {
      for (const candidate of runtime.pids) {
        const factoryConfigurations = this.configurations.listTargetedFactoryConfigurations(candidate, runtime.target);
        if (factoryConfigurations.length === 0)
          continue;
        return factoryConfigurations.map((configuration) => ({
          pid: configuration.pid,
          factory: true,
          values: { ...values, ...configuration.getProperties() }
        }));
      }
    }
    if (declaredFactory !== true && pid !== void 0) {
      return [{ pid, factory: false, values }];
    }
    return unconfigured();
  }
  /**
   * What the services of one instance publish: what the component declared, with
   * its configuration merged over it.
   *
   * Configuration wins, as in DS — it is the later, deployment-time word on the
   * same question. Keys starting with a dot stay private to the component and
   * out of the service properties, also as in DS.
   */
  propertiesFor(declared, configuration) {
    const properties = { ...declared };
    for (const [key, value] of Object.entries(configuration)) {
      if (key.startsWith("."))
        continue;
      properties[key] = value;
    }
    return properties;
  }
  /**
   * The ranking one instance registers with.
   *
   * `service.ranking` from configuration overrides what the class declared,
   * which is how DS lets deployment re-order providers without touching code.
   */
  rankingFor(options, configuration) {
    const configured = configuration["service.ranking"];
    return typeof configured === "number" ? configured : options.ranking;
  }
  /**
   * The mandatory references of a component that nothing provides.
   *
   * Empty means it may run. This is where the component level lives: a missing
   * service used to throw and take the module's start with it — now the component
   * waits and the module keeps running, as DS has it (112.5.2).
   */
  missingReferences(runtime) {
    const absorbed = new Set(getUnbindMethods(runtime.ctor).filter((entry) => {
      const reference = runtime.references.find((candidate) => candidate.serviceId === entry.serviceId);
      return reference?.optional === true;
    }).map((entry) => entry.serviceId));
    const missing = runtime.references.filter((reference) => !reference.optional && !absorbed.has(reference.serviceId) && !this.services.has(reference.serviceId)).map((reference) => reference.serviceId);
    const condition = runtime.options.satisfyingCondition;
    if (condition !== void 0 && this.matchingConditions(condition) === 0) {
      missing.push(`condition ${condition}`);
    }
    return missing;
  }
  /**
   * How many registered conditions match a filter.
   *
   * An invalid filter is reported once and treated as unsatisfied: a component
   * whose condition cannot be parsed must not start as though it had none, and
   * throwing here would take the whole module's start with it.
   */
  matchingConditions(filter) {
    try {
      return this.services.countProviders(CONDITION_SERVICE_ID, filter);
    } catch (error) {
      this.logger.error(`Invalid satisfying condition '${filter}':`, error);
      return 0;
    }
  }
  /**
   * Start components whose references arrived, stop those whose references left.
   *
   * Runs on every registry event, next to the module-level reconciliation. A
   * component going down withdraws its own services, which is what carries the
   * cascade on — and the queue keeps that in order.
   */
  async reconcileComponentReferences() {
    for (const [moduleId, runtimes] of [...this.componentRuntimes]) {
      const loadedModule = this.modules.get(moduleId);
      if (!loadedModule || loadedModule.state !== "active")
        continue;
      for (const runtime of runtimes) {
        if (this.isComponentDisabled(moduleId, runtime.className))
          continue;
        for (const instance of [...runtime.instances.values()]) {
          this.applyCollections(loadedModule, runtime, instance);
          await this.applyBindings(loadedModule, runtime, instance);
        }
        const missing = this.missingReferences(runtime);
        if (missing.length > 0) {
          if (runtime.factory) {
            this.logger.info(`Component factory ${runtime.options.factory} of ${moduleId} goes: service(s) gone: ${missing.join(", ")}`);
            await this.withdrawComponentFactory(loadedModule, runtime);
          }
          for (const [key, instance] of [...runtime.instances]) {
            this.logger.info(`Component ${runtime.className} of ${moduleId} stops: service(s) gone: ${missing.join(", ")}`);
            await this.stopInstance(loadedModule, runtime, key, instance);
          }
          continue;
        }
        if (runtime.options.factory !== void 0) {
          this.registerComponentFactory(loadedModule, runtime);
          continue;
        }
        if (runtime.instances.size > 0)
          continue;
        for (const wanted of this.configurationsFor(runtime)) {
          const created = this.registerInstance(loadedModule, runtime, wanted);
          await this.activateInstance(loadedModule, runtime, created);
        }
      }
    }
  }
  /**
   * Bring an instance's `@injectAll()` collections up to date.
   *
   * Runs on every registry event, so a collection reflects the registry rather
   * than the moment the component was built. Which is the point: cardinality
   * 0..n is not a snapshot.
   */
  applyCollections(loadedModule, runtime, instance) {
    const object = instance.instance;
    if (!object)
      return;
    const scope = this.scopeFor(loadedModule.manifest.id);
    for (const collection of getInjectAllMetadata(runtime.ctor)) {
      let services;
      try {
        services = scope.getServiceReferences(collection.serviceId, collection.target).map((reference) => scope.resolveReference(reference)).filter((service) => service !== void 0);
      } catch (error) {
        this.logger.error(`Invalid target on ${runtime.className}.${String(collection.propertyKey)}:`, error);
        continue;
      }
      const held = object[collection.propertyKey];
      if (Array.isArray(held) && sameServices(held, services))
        continue;
      if (collection.fieldOption === "update") {
        if (Array.isArray(held)) {
          held.length = 0;
          held.push(...services);
          continue;
        }
        this.logger.warn(`${runtime.className}.${String(collection.propertyKey)} declares fieldOption 'update' but is not an array, so it is replaced instead — initialise it with '= []'`);
      }
      object[collection.propertyKey] = services;
    }
  }
  /**
   * Tell a running instance about its `@bind()` services coming and going.
   *
   * This is what a dynamic reference buys: the component stays and is handed the
   * change, where a plain `@inject()` reference would mean a rebuild.
   *
   * Without an `@unbind()` method the loss is only reported: the component keeps
   * whatever it stored, which is stale. Stopping it instead would turn an optional
   * reference into a mandatory one, so the choice is the component's — a mandatory
   * reference does go down, since nothing could keep it consistent.
   */
  async applyBindings(loadedModule, runtime, instance) {
    if (instance.instance === void 0)
      return;
    const unbinds = new Map(getUnbindMethods(runtime.ctor).map((entry) => [entry.serviceId, entry.method]));
    for (const binding of getBindMethods(runtime.ctor)) {
      const present = this.services.has(binding.serviceId);
      const held = instance.bound.has(binding.serviceId);
      if (present && !held) {
        instance.bound.add(binding.serviceId);
        await this.callBinding(loadedModule, runtime, instance, binding.method, binding.serviceId);
        continue;
      }
      if (!present && held) {
        instance.bound.delete(binding.serviceId);
        const method = unbinds.get(binding.serviceId);
        if (method !== void 0) {
          await this.callBinding(loadedModule, runtime, instance, method, binding.serviceId);
        } else {
          this.logger.warn(`Component ${runtime.className} has no @unbind for ${binding.serviceId}, so it still holds a service that is gone`);
        }
      }
    }
  }
  /**
   * Register the factory of a factory component.
   *
   * Instead of the component's own services: nobody is meant to reach the
   * template, only the instances built from it. The factory is registered once
   * the component is satisfied and withdrawn when it stops being — with no
   * factory in the registry, nobody can ask for an instance of something that
   * cannot run, which is what DS means by the factory tracking satisfaction.
   */
  registerComponentFactory(loadedModule, runtime) {
    if (runtime.factory)
      return;
    const name = runtime.options.factory;
    if (name === void 0)
      return;
    if (runtime.policy === "require") {
      this.logger.warn(`Component ${runtime.className} is a factory component, so configurationPolicy 'require' does not apply — its instances are configured by whoever calls newInstance()`);
    }
    const scope = this.scopeFor(loadedModule.manifest.id);
    const built = /* @__PURE__ */ new Map();
    let nextInstance = 0;
    const factory = {
      name,
      get instances() {
        return [...built.values()];
      },
      newInstance: async (properties = {}) => {
        const key = FACTORY_INSTANCE + String(++nextInstance);
        const values = { ...this.declaredDefaults(runtime), ...properties };
        const instance = this.registerInstance(loadedModule, runtime, { factory: true, values }, key);
        await this.activateInstance(loadedModule, runtime, instance, { force: true });
        const handle = {
          get instance() {
            return instance.instance;
          },
          properties: { ...values },
          dispose: async () => {
            if (!built.delete(key))
              return;
            await this.stopInstance(loadedModule, runtime, key, instance);
          }
        };
        built.set(key, handle);
        return handle;
      }
    };
    const registration = scope.register(COMPONENT_FACTORY_SERVICE_ID, factory, {
      ranking: runtime.options.ranking,
      properties: {
        ...runtime.options.properties,
        [COMPONENT_FACTORY]: name,
        [COMPONENT_NAME]: runtime.className
      }
    });
    runtime.factory = {
      registration,
      disposeAll: async () => {
        for (const handle of [...built.values()].reverse()) {
          await handle.dispose();
        }
      }
    };
    this.logger.info(`Component factory ${name} of ${loadedModule.manifest.id} registered (${runtime.className})`);
  }
  /**
   * Withdraw a factory and everything it built.
   *
   * The instances go too: they are instances of a component that can no longer
   * run, and nothing would ever reclaim them — their lifetime was the caller's
   * business only while the component was satisfied.
   */
  async withdrawComponentFactory(loadedModule, runtime) {
    const factory = runtime.factory;
    if (!factory)
      return;
    runtime.factory = void 0;
    await factory.disposeAll();
    factory.registration.unregister();
    this.logger.info(`Component factory ${runtime.options.factory} of ${loadedModule.manifest.id} withdrawn`);
  }
  /** Register the services of one component instance, without creating it yet */
  registerInstance(loadedModule, runtime, wanted, key = instanceKeyOf(wanted)) {
    const scope = this.scopeFor(loadedModule.manifest.id);
    const { options } = runtime;
    const [primary, ...aliases] = options.service ?? [];
    const properties = this.propertiesFor(options.properties, wanted.values);
    const propertiesById = {};
    for (const serviceId2 of options.service ?? []) {
      propertiesById[serviceId2] = this.propertiesFor(options.propertiesById?.[serviceId2] ?? options.properties, wanted.values);
    }
    const registration = primary === void 0 ? void 0 : scope.bindClass(primary, runtime.ctor, {
      implements: aliases,
      properties,
      propertiesById,
      ranking: this.rankingFor(options, wanted.values),
      scope: options.scope,
      // Only a factory configuration or a factory component makes this one of
      // several registrations of the class; for an ordinary PID it is the
      // class's one registration, and a repeated one should replace it
      instanceKey: wanted.factory ? wanted.pid ?? key : void 0
    });
    const instance = {
      pid: wanted.pid,
      configuration: wanted.values,
      properties,
      registration,
      bound: /* @__PURE__ */ new Set()
    };
    runtime.instances.set(key, instance);
    return instance;
  }
  /**
   * Create a component instance and run its `@activate` method.
   *
   * Only for immediate components: one that merely offers a service waits until
   * somebody resolves it, and then the registry creates it.
   */
  async activateInstance(loadedModule, runtime, instance, options = {}) {
    if (instance.instance !== void 0)
      return;
    const activateMethod = getActivateMethod(runtime.ctor);
    const binds = getBindMethods(runtime.ctor);
    const immediate = options.force === true || (runtime.options.immediate ?? (activateMethod !== void 0 || binds.length > 0));
    if (!immediate)
      return;
    const object = instance.registration ? instance.registration.resolve() : this.scopeFor(loadedModule.manifest.id).construct(runtime.ctor);
    if (!object)
      return;
    instance.instance = object;
    this.applyCollections(loadedModule, runtime, instance);
    await this.bindAvailable(loadedModule, runtime, instance);
    if (activateMethod !== void 0) {
      await this.callComponentMethod(loadedModule, runtime, instance, activateMethod);
    }
  }
  /**
   * Hand the instance every `@bind()` service that is there, in declaration order.
   */
  async bindAvailable(loadedModule, runtime, instance) {
    for (const binding of getBindMethods(runtime.ctor)) {
      if (instance.bound.has(binding.serviceId))
        continue;
      if (!this.services.has(binding.serviceId))
        continue;
      instance.bound.add(binding.serviceId);
      await this.callBinding(loadedModule, runtime, instance, binding.method, binding.serviceId);
    }
  }
  /**
   * Call one bind or unbind method with the service and the component's context.
   *
   * A failure is logged and does not stop the rest: the component stays as it is,
   * which is what a dynamic reference promises.
   */
  async callBinding(loadedModule, runtime, instance, methodName, serviceId2) {
    const object = instance.instance;
    if (!object)
      return;
    const method = object[methodName];
    if (typeof method !== "function")
      return;
    try {
      await method.call(object, this.services.get(serviceId2), this.componentContext(loadedModule, runtime, instance));
    } catch (error) {
      this.logger.error(`${String(methodName)} of ${runtime.className} failed for ${serviceId2}:`, error);
    }
  }
  /** Run one of a component's lifecycle methods with its context */
  async callComponentMethod(loadedModule, runtime, instance, methodName) {
    const object = instance.instance;
    if (!object)
      return;
    const method = object[methodName];
    if (typeof method !== "function")
      return;
    await method.call(object, this.componentContext(loadedModule, runtime, instance));
  }
  componentContext(loadedModule, runtime, instance) {
    return {
      ...this.createContext(loadedModule),
      // A logger named after the component, not just its module: with several
      // components in one module, a line saying only which module it came from
      // makes the reader grep for the message. DS 112.3.12 gives a component a
      // logger under the component's own name for the same reason.
      // For a factory instance the PID is part of the name — one line per
      // instance is otherwise indistinguishable from the same line four times
      log: new ConsoleLogger$1(instance.pid !== void 0 && instance.pid !== runtime.className ? `[${loadedModule.manifest.id}/${runtime.className}(${instance.pid})]` : `[${loadedModule.manifest.id}/${runtime.className}]`),
      configuration: instance.configuration,
      properties: instance.properties,
      configurationPid: instance.pid
    };
  }
  /**
   * Bring a component's instances in line with its configuration.
   *
   * The component lifecycle runs on its own here, which is the whole point: the
   * module around it stays active while one of its components waits for a PID,
   * is rebuilt, or gains a second instance. In OSGi that separation is the line
   * between the framework and SCR.
   */
  async applyConfiguration(event) {
    if (this.disposed || !this.configurations)
      return;
    for (const [moduleId, runtimes] of [...this.componentRuntimes]) {
      const loadedModule = this.modules.get(moduleId);
      if (!loadedModule || loadedModule.state !== "active")
        continue;
      for (const runtime of runtimes) {
        if (!this.affects(runtime, event))
          continue;
        await this.reconcileComponent(loadedModule, runtime);
      }
    }
  }
  /** Whether an event concerns a component: its own PID, or its factory PID */
  affects(runtime, event) {
    if (runtime.policy === "ignore")
      return false;
    const candidates = new Set(runtime.pids.flatMap((pid) => targetedPids(pid, runtime.target)));
    return candidates.has(event.pid) || event.factoryPid !== void 0 && candidates.has(event.factoryPid);
  }
  async reconcileComponent(loadedModule, runtime) {
    const wanted = new Map(this.configurationsFor(runtime).map((entry) => [instanceKeyOf(entry), entry]));
    for (const [key, instance] of [...runtime.instances]) {
      if (!wanted.has(key)) {
        await this.stopInstance(loadedModule, runtime, key, instance);
      }
    }
    for (const [key, entry] of wanted) {
      const existing = runtime.instances.get(key);
      if (!existing) {
        const created = this.registerInstance(loadedModule, runtime, entry);
        await this.activateInstance(loadedModule, runtime, created);
        continue;
      }
      await this.updateInstance(loadedModule, runtime, existing, entry);
    }
  }
  /**
   * Apply changed configuration to an instance that already exists.
   *
   * Three ways, in DS' order of preference: an instance that was never created
   * only needs its properties updated, one with a `@modified()` method is handed
   * the new values, and one without is torn down and built again.
   */
  async updateInstance(loadedModule, runtime, instance, wanted) {
    const properties = this.propertiesFor(runtime.options.properties, wanted.values);
    if (sameProperties(instance.properties, properties))
      return;
    const modifiedMethod = getModifiedMethod(runtime.ctor);
    const created = instance.instance !== void 0 || this.isInstantiated(instance);
    if (created && modifiedMethod === void 0) {
      await this.stopInstance(loadedModule, runtime, instanceKeyOf(wanted), instance);
      const rebuilt = this.registerInstance(loadedModule, runtime, wanted);
      await this.activateInstance(loadedModule, runtime, rebuilt);
      return;
    }
    instance.pid = wanted.pid;
    instance.configuration = wanted.values;
    instance.properties = properties;
    const propertiesById = {};
    for (const serviceId2 of runtime.options.service ?? []) {
      propertiesById[serviceId2] = this.propertiesFor(runtime.options.propertiesById?.[serviceId2] ?? runtime.options.properties, wanted.values);
    }
    instance.registration?.setProperties(properties, {
      ranking: this.rankingFor(runtime.options, wanted.values),
      propertiesById
    });
    if (created && modifiedMethod !== void 0) {
      await this.callComponentMethod(loadedModule, runtime, instance, modifiedMethod);
    }
  }
  /**
   * Whether the registry has built this instance, which it does for a delayed
   * component the moment a consumer resolves it — without telling the loader.
   */
  isInstantiated(instance) {
    const registration = instance.registration;
    if (!registration)
      return false;
    const registry = this.services;
    if (typeof registry.getServiceReferences !== "function")
      return false;
    return registry.getServiceReferences(registration.serviceId).some((reference) => reference.key === registration.key && reference.instantiated);
  }
  /** Run one instance's `@deactivate` method and withdraw its services */
  async stopInstance(loadedModule, runtime, key, instance) {
    runtime.instances.delete(key);
    const deactivateMethod = getDeactivateMethod(runtime.ctor);
    if (deactivateMethod !== void 0 && instance.instance) {
      try {
        await this.callComponentMethod(loadedModule, runtime, instance, deactivateMethod);
      } catch (error) {
        this.logger.error(`@deactivate of ${runtime.className} in ${loadedModule.manifest.id} failed:`, error);
      }
    }
    instance.registration?.unregister();
  }
  /** The key a component is switched off under */
  componentKey(moduleId, className) {
    return `${moduleId}/${className}`;
  }
  isComponentDisabled(moduleId, className) {
    return this.disabledComponents.has(this.componentKey(moduleId, className));
  }
  /**
   * Switch off one component, leaving its module and its siblings running.
   *
   * DS' enabled state, one level below a module's (112.5.1): the component's
   * services are withdrawn and its `@deactivate` runs, but nothing about it is
   * waiting — it is off, and only `enableComponent()` brings it back. Whatever
   * consumed its services reacts as it would to any withdrawal.
   */
  async disableComponent(moduleId, className) {
    this.disabledComponents.add(this.componentKey(moduleId, className));
    const loadedModule = this.modules.get(moduleId);
    const runtime = this.componentRuntimes.get(moduleId)?.find((candidate) => candidate.className === className);
    if (!loadedModule || !runtime)
      return false;
    for (const [key, instance] of [...runtime.instances]) {
      await this.stopInstance(loadedModule, runtime, key, instance);
    }
    this.logger.info(`Component ${className} of ${moduleId} disabled`);
    await this.settle();
    return true;
  }
  /** Let a component run again, if what it needs is there */
  async enableComponent(moduleId, className) {
    if (!this.disabledComponents.delete(this.componentKey(moduleId, className))) {
      return false;
    }
    this.logger.info(`Component ${className} of ${moduleId} enabled`);
    this.enqueue(() => this.reconcile());
    await this.settle();
    return true;
  }
  /** Components switched off individually, as `moduleId/ClassName` */
  getDisabledComponents() {
    return [...this.disabledComponents];
  }
  /**
   * Services a module declares but cannot register yet, because the components
   * offering them require configuration that does not exist.
   */
  servicesAwaitingConfiguration(moduleId) {
    const pending = /* @__PURE__ */ new Set();
    for (const runtime of this.componentRuntimes.get(moduleId) ?? []) {
      if (runtime.instances.size > 0)
        continue;
      for (const serviceId2 of runtime.options.service ?? []) {
        pending.add(serviceId2);
      }
    }
    return pending;
  }
  /** The exported classes of a module that declare `@component()` */
  findComponents(loadedModule) {
    const container = loadedModule.container;
    if (container === null || typeof container !== "object")
      return [];
    const found = [];
    for (const exported of Object.values(container)) {
      if (typeof exported !== "function")
        continue;
      const options = getComponentMetadata(exported);
      if (options === void 0)
        continue;
      found.push({ ctor: exported, options });
    }
    return found;
  }
  /** Run the `@deactivate` methods of a module's components, newest first */
  async stopComponents(loadedModule) {
    const moduleId = loadedModule.manifest.id;
    const runtimes = this.componentRuntimes.get(moduleId);
    if (!runtimes)
      return;
    this.componentRuntimes.delete(moduleId);
    this.metatype?.removeAllOf(moduleId);
    for (const runtime of [...runtimes].reverse()) {
      await this.withdrawComponentFactory(loadedModule, runtime);
      for (const [key, instance] of [...runtime.instances].reverse()) {
        await this.stopInstance(loadedModule, runtime, key, instance);
      }
    }
  }
  /**
   * Deactivate a module
   */
  async deactivate(loadedModule) {
    this.emit({
      type: "deactivating",
      moduleId: loadedModule.manifest.id,
      manifest: loadedModule.manifest,
      timestamp: /* @__PURE__ */ new Date()
    });
    loadedModule.state = "deactivating";
    if (loadedModule.lifecycle?.deactivate) {
      const context = this.createContext(loadedModule);
      await loadedModule.lifecycle.deactivate(context);
    }
    await this.stopComponents(loadedModule);
    const released = this.scopes.get(loadedModule.manifest.id)?.releaseAll() ?? [];
    if (released.length > 0) {
      this.logger.debug(`Withdrew service(s) of ${loadedModule.manifest.id}: ${released.join(", ")}`);
    }
    this.dynamicBindings.delete(loadedModule.manifest.id);
    this.boundRegistrations.delete(loadedModule.manifest.id);
    this.declarationMismatches.delete(loadedModule.manifest.id);
    loadedModule.state = "stopped";
    this.emit({
      type: "deactivated",
      moduleId: loadedModule.manifest.id,
      manifest: loadedModule.manifest,
      timestamp: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Create module context for lifecycle hooks
   */
  createContext(loadedModule) {
    return {
      manifest: loadedModule.manifest,
      getModule: (moduleId) => this.getModuleExports(moduleId),
      isModuleLoaded: (moduleId) => this.isLoaded(moduleId),
      services: this.scopeFor(loadedModule.manifest.id),
      log: new ConsoleLogger$1(`[${loadedModule.manifest.id}]`)
    };
  }
  /**
   * The registry facade a module registers through
   */
  scopeFor(moduleId) {
    let scope = this.scopes.get(moduleId);
    if (!scope) {
      const declaredRankings = /* @__PURE__ */ new Map();
      const declaredProperties = /* @__PURE__ */ new Map();
      for (const service of this.manifests.get(moduleId)?.provides ?? []) {
        if (service.ranking !== void 0) {
          declaredRankings.set(service.id, service.ranking);
        }
        if (service.properties !== void 0) {
          declaredProperties.set(service.id, service.properties);
        }
      }
      scope = new ScopedServiceRegistry(moduleId, this.services, declaredRankings, declaredProperties);
      this.scopes.set(moduleId, scope);
    }
    return scope;
  }
  /**
   * Unload a module
   */
  async unloadModule(moduleId) {
    const loadedModule = this.modules.get(moduleId);
    if (!loadedModule)
      return false;
    const dependents = this.resolver.getDependents(moduleId, Array.from(this.manifests.values()));
    const loadedDependents = dependents.filter((d) => this.isLoaded(d));
    if (loadedDependents.length > 0) {
      this.logger.warn(`Cannot unload ${moduleId}: modules depend on it:`, loadedDependents);
      return false;
    }
    if (loadedModule.state === "active") {
      await this.deactivate(loadedModule);
    }
    this.modules.delete(moduleId);
    this.scopes.delete(moduleId);
    this.disabled.delete(moduleId);
    this.preloaded.delete(moduleId);
    this.emit({
      type: "unloaded",
      moduleId,
      manifest: loadedModule.manifest,
      timestamp: /* @__PURE__ */ new Date()
    });
    this.enqueue(() => this.reconcile());
    await this.settle();
    this.logger.info(`Module ${moduleId} unloaded`);
    return true;
  }
  /**
   * Reload a module (hot reload)
   */
  async reloadModule(moduleId) {
    if (!this.options.hotReload) {
      throw new Error("Hot reload is not enabled");
    }
    const loadedModule = this.modules.get(moduleId);
    if (!loadedModule) {
      throw new Error(`Module not loaded: ${moduleId}`);
    }
    this.logger.info(`Reloading module ${moduleId}...`);
    const handedOver = new Map([moduleId, ...this.resolver.getTransitiveDependents(moduleId, Array.from(this.manifests.values()))].filter((id) => this.preloaded.has(id)).map((id) => [id, this.preloaded.get(id)]));
    const affected = this.resolver.getTransitiveDependents(moduleId, Array.from(this.manifests.values())).filter((dependentId) => this.modules.has(dependentId));
    for (const dependentId of [...affected].reverse()) {
      if (!await this.unloadModule(dependentId)) {
        throw new Error(`Cannot reload ${moduleId}: dependent ${dependentId} could not be unloaded`);
      }
    }
    if (!await this.unloadModule(moduleId)) {
      throw new Error(`Cannot reload ${moduleId}: it could not be unloaded`);
    }
    const manifest = this.manifests.get(moduleId);
    if (!handedOver.has(moduleId)) {
      manifest.entry = `${manifest.entry.split("?")[0]}?t=${Date.now()}`;
    }
    await this.loadModule(manifest, { container: handedOver.get(moduleId) });
    for (const dependentId of affected) {
      const dependentManifest = this.manifests.get(dependentId);
      if (dependentManifest) {
        await this.loadModule(dependentManifest, { container: handedOver.get(dependentId) });
      }
    }
    await this.settle();
    this.logger.info(`Module ${moduleId} reloaded`);
  }
  /**
   * Check if a module is loaded
   */
  isLoaded(moduleId) {
    const mod = this.modules.get(moduleId);
    return mod?.state === "active";
  }
  /**
   * Get a loaded module
   */
  getModule(moduleId) {
    return this.modules.get(moduleId);
  }
  /**
   * Get exports from a loaded module
   */
  getModuleExports(moduleId) {
    const mod = this.modules.get(moduleId);
    if (!mod)
      return void 0;
    const exports$1 = {};
    for (const [path, value] of mod.exports) {
      exports$1[path] = value;
    }
    return exports$1;
  }
  /**
   * Stop a module and keep it stopped.
   *
   * Deactivating alone would not last: the module is satisfied, so the next
   * reconcile activates it again. A disabled module stays stopped until
   * `enableModule()`, which is what makes a manual stop meaningful — the
   * `enabled` flag of DS components.
   *
   * Its services are withdrawn, so consumers are parked in the usual cascade.
   */
  async disableModule(moduleId) {
    if (!this.manifests.has(moduleId))
      return false;
    this.disabled.add(moduleId);
    const loadedModule = this.modules.get(moduleId);
    if (loadedModule && loadedModule.state === "active") {
      await this.deactivate(loadedModule);
    }
    this.enqueue(() => this.reconcile());
    await this.settle();
    this.logger.info(`Module ${moduleId} disabled`);
    return true;
  }
  /**
   * Allow a disabled module to run again. It activates as soon as what it needs
   * is available — immediately, if that is already the case.
   */
  async enableModule(moduleId) {
    if (!this.disabled.delete(moduleId))
      return false;
    const manifest = this.manifests.get(moduleId);
    if (manifest && !this.modules.has(moduleId)) {
      await this.loadModule(manifest, { awaitCascade: true });
      this.logger.info(`Module ${moduleId} enabled`);
      return true;
    }
    const loadedModule = this.modules.get(moduleId);
    if (loadedModule && loadedModule.state === "stopped") {
      this.park(loadedModule, this.unsatisfiedReasons(loadedModule.manifest));
    }
    this.enqueue(() => this.reconcile());
    await this.settle();
    this.logger.info(`Module ${moduleId} enabled`);
    return true;
  }
  /** Whether a module is switched off */
  isDisabled(moduleId) {
    return this.disabled.has(moduleId);
  }
  /** Every module that is currently switched off */
  getDisabledModules() {
    return [...this.disabled];
  }
  /**
   * Which modules declared a requirement on a service, and how.
   *
   * The counterpart to `getBindingInfo().providedBy`: that answers who offers a
   * service, this answers who asked for it — `inspect service` in OSGi terms.
   * Derived from the manifests, so it also covers modules that are not running.
   */
  getServiceConsumers(serviceId2) {
    const consumers = [];
    for (const manifest of this.manifests.values()) {
      const requirement = manifest.requiresService?.find((entry) => entry.id === serviceId2);
      if (!requirement)
        continue;
      consumers.push({
        moduleId: manifest.id,
        state: this.modules.get(manifest.id)?.state ?? "not loaded",
        requirement
      });
    }
    return consumers;
  }
  /**
   * Every registered manifest, whether the module is loaded or not.
   *
   * `getLoadedModuleIds()` answers what is running; this answers what is known,
   * which is what a listing needs in order to show a module as not loaded.
   */
  /**
   * Wire the registered manifests against each other (Core 3.3).
   *
   * Static: it reads manifests, not the running system, and answers whether a
   * module *could* run. A service capability is a promise at this point — that it
   * is kept is what `requiresService` checks at runtime.
   */
  getWiring() {
    return resolveWiring([...this.getManifests(), this.getSystemBundle()]);
  }
  /**
   * The module standing for the runtime itself, as OSGi's system bundle does.
   *
   * It carries what the environment brings: the shared libraries the host
   * registered, plus whatever `systemCapabilities` declares. Without it a module
   * with `sharedDependencies` could never resolve — its requirement comes from its
   * manifest while the library lives outside the model.
   *
   * Not part of `getManifests()`: that answers what was registered, and this was
   * not. It is not loadable either.
   *
   * With `sharedLibraries: 'import-map'` the libraries are missing from it, since
   * the browser resolves those specifiers and the loader is never told which ones
   * exist; `generateImportMap()` checks them instead.
   */
  getSystemBundle() {
    const libraries = this.options.sharedLibraries !== "import-map" && isTsmRuntimeAvailable() ? tsmRuntime.getRegistered() : void 0;
    return systemBundle({
      libraries,
      capabilities: this.options.systemCapabilities,
      // What this loader was actually given, so a module requiring it resolves
      // against the truth rather than against the package's feature list
      metatype: this.metatype !== void 0,
      configurationAdmin: this.configurations !== void 0
    });
  }
  /**
   * What a module is wired to, and what is wired to it — Gogo's `inspect`.
   */
  getModuleWiring(moduleId) {
    return wiringOf(this.getWiring(), moduleId);
  }
  /**
   * Requirements that no registered manifest can ever satisfy.
   *
   * The difference to `getUnsatisfiedModules()` is the one that matters in
   * practice: that reports a module *waiting*, this one reports a module waiting
   * **in vain**, because nothing among the manifests even promises what it needs.
   */
  getUnresolvedModules() {
    return this.getWiring().unresolved;
  }
  getManifests() {
    return Array.from(this.manifests.values());
  }
  /**
   * Get all loaded module IDs
   */
  getLoadedModuleIds() {
    return Array.from(this.modules.keys()).filter((id) => this.isLoaded(id));
  }
  /**
   * Get service registry
   */
  getServiceRegistry() {
    return this.services;
  }
  /**
   * Add event listener
   */
  addEventListener(listener) {
    this.listeners.add(listener);
  }
  /**
   * Remove event listener
   */
  removeEventListener(listener) {
    this.listeners.delete(listener);
  }
  /**
   * Emit an event
   */
  emit(event) {
    for (const listener of this.listeners) {
      try {
        listener.onModuleEvent(event);
      } catch (error) {
        this.logger.error("Event listener error:", error);
      }
    }
  }
}
const DEFAULT_OPTIONS = {
  fetchTimeout: 1e4,
  fetchFn: (input, init) => fetch(input, init),
  logger: void 0,
  cacheTtl: 5 * 60 * 1e3
  // 5 minutes
};
class ConsoleLogger2 {
  prefix;
  constructor(prefix = "[TSM Registry]") {
    this.prefix = prefix;
  }
  debug(message, ...args) {
    console.debug(`${this.prefix} ${message}`, ...args);
  }
  info(message, ...args) {
    console.info(`${this.prefix} ${message}`, ...args);
  }
  warn(message, ...args) {
    console.warn(`${this.prefix} ${message}`, ...args);
  }
  error(message, ...args) {
    console.error(`${this.prefix} ${message}`, ...args);
  }
}
class PluginRegistry {
  repositories = /* @__PURE__ */ new Map();
  discovered = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  options;
  logger;
  // Caches
  indexCache = /* @__PURE__ */ new Map();
  manifestCache = /* @__PURE__ */ new Map();
  constructor(options = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.logger = options.logger ?? new ConsoleLogger2();
  }
  /**
   * Add a plugin repository
   */
  addRepository(repo) {
    const normalizedRepo = {
      ...repo,
      url: repo.url.replace(/\/$/, ""),
      enabled: repo.enabled ?? true,
      priority: repo.priority ?? 0
    };
    this.repositories.set(repo.id, normalizedRepo);
    this.logger.info(`Added repository: ${repo.name} (${repo.url})`);
    this.emit({
      type: "repository-added",
      repository: normalizedRepo,
      timestamp: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Remove a plugin repository
   */
  removeRepository(repoId) {
    const repo = this.repositories.get(repoId);
    if (!repo)
      return false;
    this.repositories.delete(repoId);
    this.discovered.delete(repoId);
    this.emit({
      type: "repository-removed",
      repository: repo,
      timestamp: /* @__PURE__ */ new Date()
    });
    this.logger.info(`Removed repository: ${repo.name}`);
    return true;
  }
  /**
   * Get all configured repositories
   */
  getRepositories() {
    return Array.from(this.repositories.values());
  }
  /**
   * Get a specific repository
   */
  getRepository(repoId) {
    return this.repositories.get(repoId);
  }
  /**
   * Discover all modules from all enabled repositories
   */
  async discoverAll() {
    const allDiscovered = [];
    const enabledRepos = Array.from(this.repositories.values()).filter((r) => r.enabled).sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
    for (const repo of enabledRepos) {
      try {
        const modules = await this.discoverFromRepository(repo);
        allDiscovered.push(...modules);
      } catch (error) {
        this.logger.error(`Failed to discover from ${repo.name}:`, error);
        this.emit({
          type: "discovery-error",
          repository: repo,
          error,
          timestamp: /* @__PURE__ */ new Date()
        });
      }
    }
    return allDiscovered;
  }
  /**
   * Discover modules from a specific repository
   */
  async discoverFromRepository(repo) {
    this.logger.debug(`Discovering modules from ${repo.name}...`);
    const index = await this.fetchIndex(repo);
    this.logger.debug(`Found ${index.modules.length} modules in ${repo.name}`);
    const discovered = [];
    for (const moduleId of index.modules) {
      try {
        const manifest = await this.fetchManifest(repo, moduleId);
        if (!manifest.entry.startsWith("http")) {
          manifest.entry = `${repo.url}/${moduleId}/${manifest.entry}`;
        }
        const discoveredModule = {
          manifest,
          repository: repo,
          manifestUrl: `${repo.url}/${moduleId}/manifest.json`
        };
        discovered.push(discoveredModule);
      } catch (error) {
        this.logger.warn(`Failed to fetch manifest for ${moduleId}:`, error);
      }
    }
    this.discovered.set(repo.id, discovered);
    this.emit({
      type: "modules-discovered",
      repository: repo,
      modules: discovered,
      timestamp: /* @__PURE__ */ new Date()
    });
    this.logger.info(`Discovered ${discovered.length} modules from ${repo.name}`);
    return discovered;
  }
  /**
   * Get all discovered modules (from cache)
   */
  getDiscoveredModules() {
    const all = [];
    for (const modules of this.discovered.values()) {
      all.push(...modules);
    }
    return all;
  }
  /**
   * Get manifests for all discovered modules
   * Deduplicates by ID, keeping highest version from highest priority repo
   */
  getManifests() {
    const moduleMap = /* @__PURE__ */ new Map();
    const sortedRepos = Array.from(this.repositories.values()).sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
    for (const repo of sortedRepos) {
      const modules = this.discovered.get(repo.id) ?? [];
      for (const { manifest } of modules) {
        const existing = moduleMap.get(manifest.id);
        if (!existing) {
          moduleMap.set(manifest.id, { manifest, priority: repo.priority ?? 0 });
        } else if (repo.priority === existing.priority) {
          if (semverExports.gt(manifest.version, existing.manifest.version)) {
            moduleMap.set(manifest.id, { manifest, priority: repo.priority ?? 0 });
          }
        }
      }
    }
    return Array.from(moduleMap.values()).map((e) => e.manifest);
  }
  /**
   * Find a specific module by ID
   */
  findModule(moduleId, versionRange) {
    const candidates = [];
    for (const modules of this.discovered.values()) {
      for (const discovered of modules) {
        if (discovered.manifest.id === moduleId) {
          if (!versionRange || semverExports.satisfies(discovered.manifest.version, versionRange)) {
            candidates.push(discovered);
          }
        }
      }
    }
    if (candidates.length === 0)
      return void 0;
    return candidates.sort((a, b) => semverExports.rcompare(a.manifest.version, b.manifest.version))[0];
  }
  /**
   * Find all versions of a module
   */
  findModuleVersions(moduleId) {
    const versions = [];
    for (const modules of this.discovered.values()) {
      for (const discovered of modules) {
        if (discovered.manifest.id === moduleId) {
          versions.push(discovered);
        }
      }
    }
    return versions.sort((a, b) => semverExports.rcompare(a.manifest.version, b.manifest.version));
  }
  /**
   * Check for updates to currently loaded modules
   */
  async checkUpdates(loadedManifests) {
    await this.discoverAll();
    const updates = [];
    for (const loaded of loadedManifests) {
      const available = this.findModule(loaded.id);
      if (available && semverExports.gt(available.manifest.version, loaded.version)) {
        updates.push({
          moduleId: loaded.id,
          currentVersion: loaded.version,
          availableVersion: available.manifest.version,
          repository: available.repository
        });
      }
    }
    if (updates.length > 0) {
      this.emit({
        type: "update-available",
        updates,
        timestamp: /* @__PURE__ */ new Date()
      });
    }
    return updates;
  }
  /**
   * Fetch repository index
   */
  async fetchIndex(repo) {
    const url = `${repo.url}/index.json`;
    const cached = this.indexCache.get(url);
    if (cached && this.isCacheValid(cached)) {
      return cached.data;
    }
    const response = await this.fetchWithTimeout(url, repo.token);
    if (!response.ok) {
      throw new Error(`Failed to fetch index: ${response.status} ${response.statusText}`);
    }
    const index = await response.json();
    if (!index.modules || !Array.isArray(index.modules)) {
      throw new Error("Invalid repository index: missing modules array");
    }
    this.indexCache.set(url, { data: index, timestamp: Date.now() });
    return index;
  }
  /**
   * Fetch module manifest
   */
  async fetchManifest(repo, moduleId) {
    const url = `${repo.url}/${moduleId}/manifest.json`;
    const cached = this.manifestCache.get(url);
    if (cached && this.isCacheValid(cached)) {
      return cached.data;
    }
    const response = await this.fetchWithTimeout(url, repo.token);
    if (!response.ok) {
      throw new Error(`Failed to fetch manifest: ${response.status} ${response.statusText}`);
    }
    const manifest = await response.json();
    if (!manifest.id || !manifest.name || !manifest.version || !manifest.entry) {
      throw new Error(`Invalid manifest for ${moduleId}: missing required fields`);
    }
    this.manifestCache.set(url, { data: manifest, timestamp: Date.now() });
    return manifest;
  }
  /**
   * Fetch with timeout and optional auth
   */
  async fetchWithTimeout(url, token) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.options.fetchTimeout);
    try {
      const headers = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      return await this.options.fetchFn(url, {
        headers,
        signal: controller.signal
      });
    } finally {
      clearTimeout(timeout);
    }
  }
  /**
   * Check if cache entry is still valid
   */
  isCacheValid(entry) {
    if (this.options.cacheTtl === 0)
      return false;
    return Date.now() - entry.timestamp < this.options.cacheTtl;
  }
  /**
   * Clear all caches
   */
  clearCache() {
    this.indexCache.clear();
    this.manifestCache.clear();
    this.logger.debug("Cache cleared");
  }
  /**
   * Add event listener
   */
  addEventListener(listener) {
    this.listeners.add(listener);
  }
  /**
   * Remove event listener
   */
  removeEventListener(listener) {
    this.listeners.delete(listener);
  }
  /**
   * Emit event to listeners
   */
  emit(event) {
    for (const listener of this.listeners) {
      try {
        listener.onRegistryEvent(event);
      } catch (error) {
        this.logger.error("Registry event listener error:", error);
      }
    }
  }
}
function serviceId(id) {
  return id;
}
function offeredByModules(manifests) {
  const offered = {};
  for (const manifest of manifests) {
    for (const capability of manifest.capabilities ?? []) {
      if (capability.namespace !== LIBRARY_NAMESPACE)
        continue;
      const library = capability.attributes?.library;
      if (typeof library !== "string")
        continue;
      const version = capability.attributes?.version;
      offered[library] = {
        // The module's own entry is where the package lives: a library bundle is
        // the package, so there is nothing else it could point at
        url: manifest.entry,
        version: typeof version === "string" ? version : void 0,
        moduleId: manifest.id
      };
    }
  }
  return offered;
}
function generateImportMap(manifests, offered = {}) {
  const imports = {};
  const missing = [];
  const incompatible = [];
  const shadowed = [];
  const fromModules = offeredByModules(manifests);
  for (const [library, entry] of Object.entries(fromModules)) {
    if (offered[library] === void 0)
      continue;
    const host = offered[library];
    shadowed.push({
      library,
      moduleId: entry.moduleId,
      moduleVersion: entry.version,
      hostVersion: typeof host === "string" ? void 0 : host.version
    });
  }
  for (const manifest of manifests) {
    for (const dependency of manifest.sharedDependencies ?? []) {
      const entry = offered[dependency.id] ?? fromModules[dependency.id];
      if (entry === void 0) {
        missing.push({
          moduleId: manifest.id,
          library: dependency.id,
          versionRange: dependency.versionRange
        });
        continue;
      }
      const library = typeof entry === "string" ? { url: entry } : entry;
      if (library.version !== void 0 && semver.validRange(dependency.versionRange) && !semver.satisfies(library.version, dependency.versionRange, { includePrerelease: true })) {
        incompatible.push({
          moduleId: manifest.id,
          library: dependency.id,
          versionRange: dependency.versionRange,
          offered: library.version
        });
        continue;
      }
      imports[dependency.id] = library.url;
    }
  }
  return { importMap: { imports }, missing, incompatible, shadowed };
}
function importMapScript(map) {
  const json = JSON.stringify(map, null, 2).replace(/<\/script/gi, "<\\/script");
  return `<script type="importmap">
${json}
<\/script>`;
}
function installImportMap(map, target = document) {
  if (target.querySelector('script[type="importmap"]') !== null)
    return false;
  const script = target.createElement("script");
  script.type = "importmap";
  script.textContent = JSON.stringify(map);
  target.head.appendChild(script);
  return true;
}
async function installFeature(feature, options) {
  const { loader, configurationAdmin, resolve } = options;
  const label = formatFeatureId(feature.id);
  const problems = validateFeature(feature, {
    supplied: options.variables,
    handles: options.handles
  });
  if (problems.length > 0) {
    throw new Error(`Feature ${label} cannot be installed:
` + problems.map((entry) => `  ${entry.at}: ${entry.problem}`).join("\n"));
  }
  const configurations = resolveConfigurations(feature, options.variables);
  const pids = Object.keys(configurations);
  if (pids.length > 0 && !configurationAdmin) {
    throw new Error(`Feature ${label} carries configuration for ${pids.length} PID(s) but no Configuration Admin was given — its components would start on defaults`);
  }
  const manifests = [];
  const unavailable = [];
  for (const bundle of feature.bundles) {
    const manifest = await resolve(bundle.id);
    if (manifest)
      manifests.push(manifest);
    else
      unavailable.push(formatFeatureId(bundle.id));
  }
  if (unavailable.length > 0) {
    throw new Error(`Feature ${label} lists module(s) nothing provides: ${unavailable.join(", ")}`);
  }
  for (const [pid, properties] of Object.entries(configurations)) {
    await configurationAdmin.getConfiguration(pid).update(properties);
  }
  loader.register(manifests);
  if (options.load !== false) {
    await loader.loadAll();
  }
  await loader.settle();
  const loaded = options.load === false ? [] : manifests.map((manifest) => manifest.id).filter((id) => loader.getModule(id)?.state === "active");
  return { feature, manifests, loaded, configured: pids };
}
function unsatisfiedRequirements(feature, options) {
  const inFeature = new Set(feature.bundles.map((bundle) => bundle.id.name));
  const wiring = options.loader.getWiring();
  return wiring.unresolved.filter((entry) => inFeature.has(entry.moduleId)).map((entry) => `${entry.moduleId}: ${entry.requirement.namespace}` + (entry.requirement.filter ? ` ${entry.requirement.filter}` : "") + ` (${entry.reason})`);
}
function isComplete(feature, options) {
  return unsatisfiedRequirements(feature, options).length === 0;
}
const DRAFT = "https://json-schema.org/draft/2020-12/schema";
function toJsonSchema(definition, options = {}) {
  const source = options.locale === void 0 ? definition : localizeDefinition(definition, options.locale);
  const properties = {};
  const required = [];
  const validated = [];
  for (const [id, attribute] of Object.entries(source.attributes)) {
    properties[id] = propertyFor(attribute);
    if (attribute.required !== false && attribute.default === void 0) {
      required.push(id);
    }
    if (attribute.validate !== void 0) {
      validated.push(id);
    }
  }
  const schema = {
    $schema: DRAFT,
    type: "object",
    "x-tsm-object-class": source.id,
    properties
  };
  if (options.id !== void 0)
    schema.$id = options.id;
  if (source.name !== void 0)
    schema.title = source.name;
  if (source.description !== void 0)
    schema.description = source.description;
  if (required.length > 0)
    schema.required = required;
  if (validated.length > 0)
    schema["x-tsm-validated"] = validated;
  if (options.locale === void 0 && definition.localization !== void 0) {
    schema["x-tsm-localization"] = definition.localization;
  }
  return schema;
}
function toMetamodelSchema(source, options = {}) {
  const definitions = Array.isArray(source) ? [...source] : collectDefinitions(source, options.locale);
  const defs = {};
  const taken = /* @__PURE__ */ new Set();
  for (const definition of definitions) {
    const schema = toJsonSchema(definition, options);
    delete schema.$schema;
    delete schema.$id;
    const className = uniqueClassName(definition.id, taken);
    extractEnumerations(className, schema, defs, taken);
    defs[className] = schema;
  }
  const bundle = { $schema: DRAFT, $defs: defs };
  if (options.id !== void 0)
    bundle.$id = options.id;
  if (options.name !== void 0)
    bundle.title = options.name;
  return bundle;
}
function extractEnumerations(className, schema, defs, taken) {
  for (const [id, property] of Object.entries(schema.properties ?? {})) {
    const holder = property.type === "array" && property.items ? property.items : property;
    if (holder.enum === void 0)
      continue;
    const name = uniqueClassName(`${className} ${id}`, taken);
    defs[name] = { enum: holder.enum };
    if (holder["x-tsm-option-labels"] !== void 0) {
      defs[name]["x-tsm-option-labels"] = holder["x-tsm-option-labels"];
    }
    delete holder.enum;
    delete holder["x-tsm-option-labels"];
    delete holder.type;
    holder.$ref = `#/$defs/${name}`;
  }
}
function collectDefinitions(registry, locale) {
  return [...registry.getPids(), ...registry.getFactoryPids()].map((pid) => registry.getObjectClassDefinition(pid, locale)).filter((definition) => definition !== void 0);
}
function uniqueClassName(id, taken) {
  const base = id.split(/[^A-Za-z0-9]+/).filter((part) => part.length > 0).map((part) => part[0].toUpperCase() + part.slice(1)).join("") || "Configuration";
  let name = base;
  let counter = 1;
  while (taken.has(name)) {
    name = `${base}${++counter}`;
  }
  taken.add(name);
  return name;
}
function propertyFor(attribute) {
  const value = valueSchema(attribute);
  const cardinality = attribute.cardinality ?? "single";
  const property = cardinality === "single" ? value : { type: "array", items: value };
  if (typeof cardinality === "number") {
    property.maxItems = cardinality;
  }
  if (attribute.name !== void 0)
    property.title = attribute.name;
  if (attribute.description !== void 0)
    property.description = attribute.description;
  if (attribute.default !== void 0)
    property.default = attribute.default;
  return property;
}
function valueSchema(attribute) {
  const schema = {
    type: attribute.type === "password" ? "string" : attribute.type
  };
  if (attribute.type === "password") {
    schema.format = "password";
  }
  if (attribute.min !== void 0)
    schema.minimum = attribute.min;
  if (attribute.max !== void 0)
    schema.maximum = attribute.max;
  if (attribute.minLength !== void 0)
    schema.minLength = attribute.minLength;
  if (attribute.maxLength !== void 0)
    schema.maxLength = attribute.maxLength;
  if (attribute.options) {
    schema.enum = attribute.options.map((option) => option.value);
    const labels = {};
    for (const option of attribute.options) {
      if (option.label !== void 0) {
        labels[String(option.value)] = option.label;
      }
    }
    if (Object.keys(labels).length > 0) {
      schema["x-tsm-option-labels"] = labels;
    }
  }
  return schema;
}
const tsm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CM_VERSION,
  COMPONENT_EXTENDER,
  COMPONENT_FACTORY,
  COMPONENT_FACTORY_SERVICE_ID,
  COMPONENT_NAME,
  COMPONENT_RUNTIME_SERVICE_ID,
  CONDITION_ID,
  CONDITION_SERVICE_ID,
  CONFIGURATION_ADMIN_SERVICE_ID,
  CONFIGURATION_IMPLEMENTATION,
  ConfigurationAdmin,
  DS_VERSION,
  DefaultServiceRegistry,
  DependencyResolver,
  ENVIRONMENT,
  EXTENDER_NAMESPACE,
  FACTORY_PID_SEPARATOR,
  FEATURE_IMPLEMENTATION,
  FEATURE_RESOURCE_VERSION,
  FEATURE_SERVICE_ID,
  FEATURE_VERSION,
  IDENTITY_NAMESPACE,
  IMPLEMENTATION_NAMESPACE,
  LIBRARY_NAMESPACE,
  LocalStorageConfigurationStore,
  METATYPE_EXTENDER,
  METATYPE_SERVICE_ID,
  METATYPE_VERSION,
  MODULE_TYPE,
  MemoryConfigurationStore,
  MetatypeRegistry,
  ModuleLoader,
  PluginRegistry,
  SERVICE_FACTORY_PID,
  SERVICE_NAMESPACE,
  SERVICE_PID,
  SYSTEM_BUNDLE_ID,
  ScopedServiceRegistry,
  TARGETED_PID_SEPARATOR,
  TRUE_CONDITION,
  TRUE_CONDITION_FILTER,
  TRUE_CONDITION_ID,
  activate,
  bind,
  capabilitiesOf,
  component,
  componentFactoryFilter,
  conditionFilter,
  conditionProperties,
  createServiceFilter,
  deactivate,
  featureService,
  formatFeatureId,
  generateImportMap,
  importMapScript,
  initTsmRuntime,
  inject,
  injectAll,
  injectable,
  installFeature,
  installImportMap,
  isComplete,
  isTsmRuntimeAvailable,
  libraryCapabilities,
  missingVariables,
  modified,
  objectClass,
  offeredByModules,
  parseFeatureId,
  perModule,
  readFeature,
  requirementsOf,
  resolveConfigurations,
  resolveWiring,
  satisfies,
  serviceId,
  singleton,
  stripComments,
  systemBundle,
  targetedPids,
  toJsonSchema,
  toMetamodelSchema,
  transient,
  tsmRuntime,
  unbind,
  unsatisfiedRequirements,
  validateFeature,
  wiringOf,
  writeFeature
}, Symbol.toStringTag, { value: "Module" }));
export {
  CM_VERSION,
  COMPONENT_EXTENDER,
  COMPONENT_FACTORY,
  COMPONENT_FACTORY_SERVICE_ID,
  COMPONENT_NAME,
  COMPONENT_RUNTIME_SERVICE_ID,
  CONDITION_ID,
  CONDITION_SERVICE_ID,
  CONFIGURATION_ADMIN_SERVICE_ID,
  CONFIGURATION_IMPLEMENTATION,
  ConfigurationAdmin,
  DS_VERSION,
  DefaultServiceRegistry,
  DependencyResolver,
  ENVIRONMENT,
  EXTENDER_NAMESPACE,
  FACTORY_PID_SEPARATOR,
  FEATURE_IMPLEMENTATION,
  FEATURE_RESOURCE_VERSION,
  FEATURE_SERVICE_ID,
  FEATURE_VERSION,
  IDENTITY_NAMESPACE,
  IMPLEMENTATION_NAMESPACE,
  LIBRARY_NAMESPACE,
  LocalStorageConfigurationStore,
  METATYPE_EXTENDER,
  METATYPE_SERVICE_ID,
  METATYPE_VERSION,
  MODULE_TYPE,
  MemoryConfigurationStore,
  MetatypeRegistry,
  ModuleLoader,
  PluginRegistry,
  SERVICE_FACTORY_PID,
  SERVICE_NAMESPACE,
  SERVICE_PID,
  SYSTEM_BUNDLE_ID,
  ScopedServiceRegistry,
  TARGETED_PID_SEPARATOR,
  TRUE_CONDITION,
  TRUE_CONDITION_FILTER,
  TRUE_CONDITION_ID,
  activate,
  bind,
  capabilitiesOf,
  component,
  componentFactoryFilter,
  conditionFilter,
  conditionProperties,
  createServiceFilter,
  deactivate,
  tsm as default,
  featureService,
  formatFeatureId,
  generateImportMap,
  importMapScript,
  initTsmRuntime,
  inject,
  injectAll,
  injectable,
  installFeature,
  installImportMap,
  isComplete,
  isTsmRuntimeAvailable,
  libraryCapabilities,
  missingVariables,
  modified,
  objectClass,
  offeredByModules,
  parseFeatureId,
  perModule,
  readFeature,
  requirementsOf,
  resolveConfigurations,
  resolveWiring,
  satisfies,
  serviceId,
  singleton,
  stripComments,
  systemBundle,
  targetedPids,
  toJsonSchema,
  toMetamodelSchema,
  transient,
  tsmRuntime,
  unbind,
  unsatisfiedRequirements,
  validateFeature,
  wiringOf,
  writeFeature
};
