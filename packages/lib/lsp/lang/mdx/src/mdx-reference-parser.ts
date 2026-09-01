/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

export interface WordRange {
  start: number
  end: number
}

export type MdxCompletionContext =
  | { kind: 'fresh-word'; wordRange: WordRange }
  | { kind: 'after-from'; wordRange: WordRange }
  | { kind: 'after-on'; wordRange: WordRange }
  | {
      kind: 'bracket-chain'
      chain: string[]
      isMeasuresChain: boolean
      wordRange: WordRange
      chainRange: WordRange
    }
  | { kind: 'none' } // inside a string/line-comment — caller suppresses suggestions

const CLOSED_SEGMENT = /\[(?:[^\]]|\]\])*\]/.source

function unquote(bracketed: string): string {
  return bracketed.slice(1, -1).replace(/\]\]/g, ']')
}

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

function stripClosedStrings(text: string): string {
  return text.replace(/'(?:[^']|'')*'/g, m => `'${' '.repeat(m.length - 2)}'`)
}

function hasUnterminatedLineComment(text: string): boolean {
  return stripClosedStrings(text).includes('//')
}

export function parseMdxCompletionContext(
  lineTextBeforeCursor: string,
  column: number,
): MdxCompletionContext {
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
    return {
      kind: 'after-from',
      wordRange: { start: column - partial.length, end: column },
    }
  }
  const onMatch = /\bON\s+(\S*)$/i.exec(lineTextBeforeCursor)
  if (onMatch) {
    const partial = onMatch[1] ?? ''
    return {
      kind: 'after-on',
      wordRange: { start: column - partial.length, end: column },
    }
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
      const isMeasuresChain =
        chain.length >= 1 && unquote(chain[0]!).toLowerCase() === 'measures'

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
  return {
    kind: 'fresh-word',
    wordRange: { start: column - partial.length, end: column },
  }
}
