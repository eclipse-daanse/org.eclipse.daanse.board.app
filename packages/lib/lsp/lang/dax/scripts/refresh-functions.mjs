#!/usr/bin/env node
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
 * Writes `src/language/generated-functions/functions.ts`: every DAX function
 * Microsoft documents, with its syntax, its arity and the sentence the
 * reference opens with.
 *
 * The catalogue is a fact about an external system, so it is derived rather
 * than typed:
 *
 *   - Which functions exist, and their category, comes from the table of
 *     contents of the DAX reference (learn.microsoft.com/en-us/dax/toc.json).
 *     The docs repository behind it is private, so the published pages are
 *     the source.
 *   - The syntax is the page's first code block under "Syntax". A page with
 *     several (overloads) contributes all of them.
 *   - Arity is read off the syntax: an argument outside `[...]` is required,
 *     a `…` makes the count unbounded. The parameter table then gets the
 *     last word on required arguments - several pages write an argument as
 *     required in the syntax and mark it "(Optional)" below (TOPN's
 *     OrderBy_Expression is one) - because an arity error on a call the
 *     engine accepts is worse than a missed one.
 *   - Which of them the Eclipse Daanse engine can execute is read off its
 *     binder, at the commit the grammar was written against.
 *
 * Needs the network and nothing else. Run it when Microsoft adds functions or
 * the Daanse pin moves:
 *
 *     yarn refresh-functions   (the script, then Prettier over its output)
 */

import {
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DAANSE_COMMIT } from './daanse-pin.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const OUT = join(
  HERE,
  '..',
  'src',
  'language',
  'generated-functions',
  'functions.ts',
)

const DOCS = 'https://learn.microsoft.com/en-us/dax/'
const BINDER = `https://raw.githubusercontent.com/eclipse-daanse/org.eclipse.daanse.dax/${DAANSE_COMMIT}/engine.impl/src/main/java/org/eclipse/daanse/dax/engine/impl/plan/Binder.java`

const CATEGORY = {
  'Aggregation functions': 'aggregation',
  'Date and time functions': 'datetime',
  'Filter functions': 'filter',
  'Financial functions': 'financial',
  'INFO functions': 'info',
  'Information functions': 'information',
  'Logical functions': 'logical',
  'Math and trig functions': 'math',
  'Other functions': 'other',
  'Parent and child functions': 'parentchild',
  'Relationship functions': 'relationship',
  'Statistical functions': 'statistical',
  'Table manipulation functions': 'table',
  'Text functions': 'text',
  'Time intelligence functions': 'timeintelligence',
}

/*
 * Pages are cached for a day, so a second run - after a fix to the parsing
 * below, say - does not ask Learn for 460 pages again. Learn answers a burst
 * with 429; the wait it asks for in Retry-After is honoured.
 */
const CACHE = join(tmpdir(), 'daanse-dax-docs')
const DAY = 24 * 60 * 60 * 1000

async function get(url) {
  mkdirSync(CACHE, { recursive: true })
  const cached = join(CACHE, encodeURIComponent(url))
  if (existsSync(cached) && Date.now() - statMtime(cached) < DAY)
    return readFileSync(cached, 'utf8')
  for (let attempt = 1; ; attempt++) {
    const response = await fetch(url).catch(error => ({
      ok: false,
      status: String(error),
      headers: new Headers(),
    }))
    if (response.ok) {
      const text = await response.text()
      writeFileSync(cached, text)
      return text
    }
    if (attempt >= 8) throw new Error(`${response.status} ${url}`)
    const after = Number(response.headers.get('retry-after'))
    await new Promise(resolve =>
      setTimeout(resolve, (after > 0 ? after * 1000 : 0) + 1000 * attempt),
    )
  }
}

function statMtime(file) {
  return statSync(file).mtimeMs
}

const decode = text =>
  text
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()

/** Every `-function-dax` page in the reference, with the section it is under. */
function functionPages(toc) {
  const pages = []
  const walk = (items, section) => {
    for (const item of items) {
      if (item.href?.endsWith('-function-dax') && CATEGORY[section]) {
        pages.push({
          title: item.toc_title,
          href: item.href,
          category: CATEGORY[section],
        })
      }
      walk(item.children ?? [], item.href ? section : item.toc_title)
    }
  }
  walk(toc.items, '')
  return pages
}

/** The code blocks under the Syntax heading, up to the next heading. */
function syntaxBlocks(html) {
  const start = html.search(/<h2[^>]*id="syntax"/)
  if (start < 0) return []
  const rest = html.slice(start + 10)
  const end = rest.search(/<h2[^>]*id="/)
  const section = end < 0 ? rest : rest.slice(0, end)
  return [
    ...section.matchAll(/<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>/g),
  ].map(m => decode(m[1]))
}

/**
 * The first paragraph after the page title that says what the function does.
 * Pages open with an "Applies to" line and sometimes a note; neither is it,
 * and neither is the warning about visual calculations some pages lead with.
 */
function summary(html) {
  const title = html.search(/<h1[^>]*>/)
  for (const paragraph of html.slice(title).matchAll(/<p>([\s\S]*?)<\/p>/g)) {
    const text = decode(paragraph[1])
    if (
      text &&
      !/^(applies to|note\b|important\b|tip\b|this function is discouraged)/i.test(
        text,
      )
    )
      return text
  }
  return ''
}

/** Parameter names the table marks "(Optional)", lower-cased. */
function optionalParameters(html) {
  const optional = new Set()
  for (const row of html.matchAll(
    /<tr>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>/g,
  )) {
    if (!/^\s*\(optional\)/i.test(decode(row[2]))) continue
    for (const name of decode(row[1]).split(/[,\s]+/))
      if (name) optional.add(name.toLowerCase())
  }
  return optional
}

/**
 * Arity from one syntax line: `NAME(<a>, [<b>] [, <c>]…)`.
 *
 * Nesting depth of `[` decides required or optional; a `…` or `...` anywhere
 * in the argument list lifts the maximum.
 */
function arity(syntax, optional) {
  const open = syntax.indexOf('(')
  const close = syntax.lastIndexOf(')')
  if (open < 0 || close < open) return undefined
  /* `<dates> or <calendar>` is one argument written two ways. */
  const args = syntax.slice(open + 1, close).replace(/>\s*or\s*</gi, ' | ')
  let depth = 0
  let min = 0
  let total = 0
  for (const token of args.matchAll(/\[|\]|<\s*([^>]+?)\s*>/g)) {
    if (token[0] === '[') depth++
    else if (token[0] === ']') depth = Math.max(0, depth - 1)
    else {
      total++
      if (depth === 0 && !optional.has(token[1].toLowerCase())) min++
    }
  }
  const unbounded = /…|\.\.\./.test(args)
  return { min, max: unbounded ? undefined : total }
}

/** The functions the Daanse binder dispatches on, upper-cased. */
async function daanseFunctions() {
  const source = await get(BINDER)
  return new Set(
    [...source.matchAll(/case\s+"([A-Z][A-Z0-9.]*)"\s*->/g)].map(m => m[1]),
  )
}

async function main() {
  const toc = JSON.parse(await get(DOCS + 'toc.json'))
  const pages = functionPages(toc)
  const daanse = await daanseFunctions()

  const byName = new Map()
  const queue = [...pages]
  const failed = []
  await Promise.all(
    Array.from({ length: 3 }, async () => {
      while (queue.length) {
        const page = queue.shift()
        let html
        try {
          html = await get(DOCS + page.href)
        } catch (error) {
          failed.push(`${page.href}: ${error.message}`)
          continue
        }
        const optional = optionalParameters(html)
        for (const syntax of syntaxBlocks(html)) {
          const name = /^\s*([A-Za-z][\w.]*)\s*\(/
            .exec(syntax)?.[1]
            ?.toUpperCase()
          const counted = arity(syntax, optional)
          if (!name || !counted) continue
          const entry = byName.get(name) ?? {
            name,
            category: page.category,
            syntax: [],
            minArgs: Infinity,
            maxArgs: 0,
            summary: summary(html),
            href: page.href,
            daanse: daanse.has(name),
          }
          entry.syntax.push(syntax)
          entry.minArgs = Math.min(entry.minArgs, counted.min)
          entry.maxArgs =
            entry.maxArgs === undefined || counted.max === undefined
              ? undefined
              : Math.max(entry.maxArgs, counted.max)
          byName.set(name, entry)
        }
      }
    }),
  )
  if (failed.length)
    throw new Error(`pages that would not load:\n${failed.join('\n')}`)

  const functions = [...byName.values()].sort((a, b) =>
    a.name.localeCompare(b.name),
  )
  const lines = functions.map(f => {
    const fields = [
      `name: ${JSON.stringify(f.name)}`,
      `category: ${JSON.stringify(f.category)}`,
      `minArgs: ${f.minArgs}`,
      ...(f.maxArgs === undefined ? [] : [`maxArgs: ${f.maxArgs}`]),
      `syntax: ${JSON.stringify(f.syntax)}`,
      `summary: ${JSON.stringify(f.summary)}`,
      `href: ${JSON.stringify(f.href)}`,
      ...(f.daanse ? ['daanse: true'] : []),
    ]
    return `  { ${fields.join(', ')} },`
  })

  const header = `/*********************************************************************
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

// Generated by scripts/refresh-functions.mjs from the DAX reference at
// ${DOCS} and the Eclipse Daanse DAX binder at ${DAANSE_COMMIT.slice(0, 7)}.
// Do not edit; run the script instead.

import type { DaxFunction } from '../dax-functions.js'

export const DAX_FUNCTION_LIST: readonly DaxFunction[] = [
`
  writeFileSync(OUT, header + lines.join('\n') + '\n]\n')
  console.log(
    `${functions.length} functions, ${functions.filter(f => f.daanse).length} executable by Daanse -> ${OUT}`,
  )
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
