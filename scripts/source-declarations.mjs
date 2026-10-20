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

/**
 * What a TypeScript source declares, read without a parser.
 *
 * check-model-conformance.mjs asks this of every file in the workspace to
 * find hand-written twins of generated classes, so the answer decides
 * whether a pull request is blocked - which is reason enough for it to live
 * where it can be tested on its own.
 */

/*
 * The heritage clause is taken in the same match as the declaration, up to
 * the opening brace, rather than looked up afterwards with a pattern built
 * from the name just read. Building a regex out of file contents is how a
 * checked-in identifier gets to decide what the checker matches.
 *
 * `[^{]*` spans newlines, so a heritage clause broken across lines is still
 * seen, and a declaration without a body is deliberately not.
 */
const DECLARATION =
  /^\s*(?:export\s+)?(?:abstract\s+)?(class|interface)\s+(\w+)([^{]*)\{/gm

/**
 * Every class and interface the source declares.
 *
 * @param {string} source
 * @returns {{kind: 'class' | 'interface', name: string, extends: string | undefined}[]}
 */
export function declarationsIn(source) {
  const found = []
  for (const [, kind, name, heritage] of source.matchAll(DECLARATION)) {
    /* What it extends decides whether it is a replacement or a subclass. */
    found.push({
      kind,
      name,
      extends: heritage.match(/\bextends\s+(\w+)/)?.[1],
    })
  }
  return found
}
