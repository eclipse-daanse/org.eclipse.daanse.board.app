/**
 * Pure, framework-agnostic parser that inspects the text of the current
 * line up to the cursor column and classifies what kind of MDX completion
 * applies at that position. No monaco/Vue imports — takes/returns plain
 * data so `useMdxCompletion.ts` can be a thin adapter and this stays
 * independently reasoned-about (and testable, once a test suite exists).
 *
 * Scope, deliberately capped per product decision: bracket chains resolve
 * at most 3 segments deep (dimension -> hierarchy -> level), or the
 * 2-segment `[Measures].[measure name]` case. No member-level completion —
 * levels are the leaf of what this parser or its caller ever fetches.
 *
 * This is lexical pattern-matching, not a real MDX grammar/parser — same
 * "intentionally lightweight" philosophy as the Monarch tokenizer in
 * `mdx.ts`.
 */

export interface WordRange {
  /** 1-based column, inclusive — matches Monaco's own column convention. */
  start: number
  end: number
}

export type MdxCompletionContext =
  | { kind: 'fresh-word'; wordRange: WordRange }
  | { kind: 'after-from'; wordRange: WordRange }
  | { kind: 'after-on'; wordRange: WordRange }
  | {
      kind: 'bracket-chain'
      /**
       * Raw, still-bracket-quoted XMLA unique names of already-closed
       * segments before the one being typed, in order (e.g. `[Employees]`)
       * — the FULL count, not capped, and deliberately NOT unescaped/
       * unquoted, since these feed straight into `discoverHierarchies`/
       * `discoverLevels`/the shared cache's Map keys, all of which expect
       * the exact bracket-qualified form the server itself uses (matching
       * `DIMENSION_UNIQUE_NAME`/`HIERARCHY_UNIQUE_NAME`, and matching
       * `MetadataTreeNode.uniqueName` in the sidebar tree). The consumer
       * decides what to do with `chain.length`: 0 -> offer dimensions,
       * 1 -> hierarchies of `chain[0]`, 2 -> levels of `chain[1]`, anything
       * else -> past the decided depth cap, offer only generic navigation
       * functions.
       */
      chain: string[]
      /** True when the chain starts with `Measures` — the next/only segment is a measure name, not a hierarchy. */
      isMeasuresChain: boolean
      wordRange: WordRange
      /**
       * The whole chain — every closed segment plus the one being typed.
       *
       * `wordRange` covers only the segment under the caret, which is what a
       * suggestion that *continues* the chain wants: `.CurrentMember` appends
       * to what is already there. But the metadata suggestions are XMLA unique
       * names, and those are fully qualified — `[Product].[Brand Name]`, or
       * Mondrian's `[Product.Brand Name]` — so inserting one over `wordRange`
       * leaves the segments to its left stranded in front of it, giving
       * `[Product].[Product].[Brand Name]`. Those suggestions replace this
       * range instead.
       *
       * Equal to `wordRange` when nothing precedes the segment being typed.
       */
      chainRange: WordRange
    }
  | { kind: 'none' } // inside a string/line-comment — caller suppresses suggestions

const CLOSED_SEGMENT = /\[(?:[^\]]|\]\])*\]/.source

/** Strips the enclosing `[` `]` and un-escapes `]]` -> `]`. */
function unquote(bracketed: string): string {
  return bracketed.slice(1, -1).replace(/\]\]/g, ']')
}

/** True if the cursor sits inside an unterminated `'...'` string literal. */
function isInsideOpenString(text: string): boolean {
  // Count quote characters, treating a doubled `''` as one escaped quote
  // rather than two boundary markers.
  let count = 0
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== "'") continue
    if (text[i + 1] === "'") {
      i++ // skip the escaped pair
      continue
    }
    count++
  }
  return count % 2 === 1
}

/**
 * Blanks out the contents of already-closed `'...'` string literals
 * (keeping the quotes, so column positions are preserved) — used so a `//`
 * that merely happens to appear *inside* a completed string isn't mistaken
 * for the start of a line comment.
 */
function stripClosedStrings(text: string): string {
  return text.replace(/'(?:[^']|'')*'/g, (m) => `'${' '.repeat(m.length - 2)}'`)
}

/** True if an unterminated `//` line comment starts before the cursor. */
function hasUnterminatedLineComment(text: string): boolean {
  return stripClosedStrings(text).includes('//')
}

export function parseMdxCompletionContext(lineTextBeforeCursor: string, column: number): MdxCompletionContext {
  // 1. Inside a string or line comment: suppress suggestions. (Block
  // comments spanning multiple lines can't be detected from one line's
  // text alone — see the caller-side note in useMdxCompletion.ts.)
  if (isInsideOpenString(lineTextBeforeCursor)) return { kind: 'none' }
  if (hasUnterminatedLineComment(lineTextBeforeCursor)) return { kind: 'none' }

  // 2. FROM / ON keyword, immediately before a fresh word — checked before
  // the bracket-chain rule below so `FROM [Sa` (a cube reference, zero
  // preceding closed segments) resolves to the cube suggestion rather than
  // being swallowed by the generic "fresh open bracket" branch of the
  // bracket-chain rule. `\S*` already includes a leading `[` if the user
  // typed one, so the replacement range stays correct either way.
  const fromMatch = /\bFROM\s+(\S*)$/i.exec(lineTextBeforeCursor)
  if (fromMatch) {
    const partial = fromMatch[1] ?? ''
    return { kind: 'after-from', wordRange: { start: column - partial.length, end: column } }
  }
  const onMatch = /\bON\s+(\S*)$/i.exec(lineTextBeforeCursor)
  if (onMatch) {
    const partial = onMatch[1] ?? ''
    return { kind: 'after-on', wordRange: { start: column - partial.length, end: column } }
  }

  // 3. Bracket-chain: zero or more complete `[...]` segments each followed
  // by `.`, then whatever's currently being typed — either an open bracket
  // (no closing `]` yet) or a bareword (e.g. typing `CurrentMember` after a
  // dot). The closed-segment run is intentionally zero-or-more, not "at
  // least one": typing a bracket completely fresh (no chain before it at
  // all, e.g. the very first `[` in a SELECT clause) must still be
  // recognized as a bracket-chain — otherwise it falls through to the
  // fresh-word case below, which doesn't include the already-typed leading
  // `[` in its replacement range, producing a duplicated bracket like
  // `[[Department]` when a suggestion is accepted.
  // Group 1 is zero-or-more dot-terminated closed segments PLUS an optional
  // final closed segment with no trailing dot required — that last part
  // matters for the "just closed a segment, cursor sits right after `]`,
  // no dot typed yet" moment (e.g. `[Employees]` with the cursor right
  // after it), which needs its own allowance separate from the dot-repeat
  // group or it's invisible to this regex entirely.
  const chainRegex = new RegExp(
    `((?:${CLOSED_SEGMENT}\\.)*(?:${CLOSED_SEGMENT})?)\\.?(\\[(?:[^\\]]|\\]\\])*|[A-Za-z_]\\w*)?$`,
  )
  const chainMatch = chainRegex.exec(lineTextBeforeCursor)
  if (chainMatch) {
    const closedRun = chainMatch[1] ?? ''
    const partial = chainMatch[2] ?? ''
    const isOpenBracketPartial = partial.startsWith('[')

    // closedRun is `[Seg1].[Seg2].` (possibly empty) — extract each closed
    // segment via its own regex rather than a naive `.`-split, since
    // segment contents may themselves be arbitrary (though never contain a
    // bare `.`, per the bracket grammar). Deliberately NOT capped/truncated
    // here — the full closed-segment count must reach the consumer so it
    // can tell "typing the 3rd segment (a level)" apart from "typing a 4th
    // segment (a member, out of scope)"; truncating here would make those
    // indistinguishable and cause the consumer to wrongly re-offer level
    // suggestions past the depth cap.
    const segments = closedRun.match(new RegExp(CLOSED_SEGMENT, 'g')) ?? []

    // Only treat this as a bracket-chain if there's actual chain context:
    // either a closed segment precedes it, or the user is demonstrably
    // mid-typing an open bracket right now. A bare word with nothing before
    // it (e.g. plain "SEL") isn't a chain — fall through to fresh-word.
    if (segments.length > 0 || isOpenBracketPartial) {
      // Kept bracket-quoted (not unescaped) — see the `chain` field's doc
      // comment above for why. `unquote` is only used below, transiently,
      // to case-insensitively check for "Measures".
      const chain = segments
      const wordStart = column - partial.length
      const isMeasuresChain = chain.length >= 1 && unquote(chain[0]!).toLowerCase() === 'measures'

      // The regex is anchored at the end of the text, and the whole match is
      // exactly the chain: closed segments, the dot before the partial when
      // there is one, and the partial itself. Backing up by the match length
      // therefore lands on the chain's first `[` without having to reason
      // about which separators the capture groups did and did not include.
      const chainStart = column - chainMatch[0].length

      return {
        kind: 'bracket-chain',
        chain: isMeasuresChain ? [] : chain,
        isMeasuresChain,
        wordRange: { start: wordStart, end: column },
        chainRange: { start: chainStart, end: column },
      }
    }
  }

  // 4. Fresh word fallback.
  const wordMatch = /[\w]*$/.exec(lineTextBeforeCursor)
  const partial = wordMatch?.[0] ?? ''
  return { kind: 'fresh-word', wordRange: { start: column - partial.length, end: column } }
}
