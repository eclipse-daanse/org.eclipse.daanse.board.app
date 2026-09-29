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
 * Records what the Eclipse Daanse DAX parser says about every entry in
 * `test/corpus/`, and writes the answer into the file's own `// Reference:`
 * header. `test/corpus.test.ts` reads those headers and never runs Java, so
 * the suite runs anywhere; this script is the only thing that needs Docker,
 * and it runs when an entry is added or the pin (daanse-pin.mjs) moves.
 *
 * The reference is cloned at the pinned commit, its parser.ccc module is
 * built in a container, and scripts/reference/Verdict.java runs the
 * generated parser over the corpus: `.daxe` through ExpressionRoot, the rest
 * through DaxStatement. Nothing is installed on the host but the clone.
 *
 *     node scripts/record-corpus.mjs
 *
 * The defaults need an image with Maven 3.9+ and JDK 25 (the reference's
 * parent pom compiles for release 25, and its CongoCC plugin needs Maven
 * 3.9). Where that image cannot be pulled, point the script at what can:
 *
 *   DAX_REFERENCE_DIR          an existing checkout; not cloned or updated
 *   DAX_REFERENCE_IMAGE        the image (default maven:3.9-eclipse-temurin-25)
 *   DAX_REFERENCE_JAVA         java inside it (default java)
 *   DAX_REFERENCE_MVN          mvn inside it (default mvn)
 *   DAX_REFERENCE_DOCKER_ARGS  extra `docker run` arguments, space-separated
 */

import { execFileSync } from 'node:child_process'
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DAANSE_COMMIT, DAANSE_REPOSITORY } from './daanse-pin.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const CORPUS = join(HERE, '..', 'test', 'corpus')
const HARNESS = join(HERE, 'reference')

const IMAGE = process.env.DAX_REFERENCE_IMAGE ?? 'maven:3.9-eclipse-temurin-25'
const JAVA = process.env.DAX_REFERENCE_JAVA ?? 'java'
const MVN = process.env.DAX_REFERENCE_MVN ?? 'mvn'
const EXTRA = (process.env.DAX_REFERENCE_DOCKER_ARGS ?? '')
  .split(/\s+/)
  .filter(Boolean)
/** Maven's repository, kept between runs so a rebuild does not download again. */
const M2_VOLUME = 'daanse-dax-reference-m2'

const JARS = ['parser.ccc', 'parser.api', 'model.api'].map(
  module =>
    `/src/${module}/target/org.eclipse.daanse.dax.${module}-0.0.1-SNAPSHOT.jar`,
)

function run(command, args, options = {}) {
  return execFileSync(command, args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit'],
    ...options,
  })
}

/** A checkout of the reference at the pinned commit. */
function checkout() {
  if (process.env.DAX_REFERENCE_DIR) return process.env.DAX_REFERENCE_DIR
  const dir = join(tmpdir(), 'daanse-dax-reference')
  if (!existsSync(join(dir, '.git'))) {
    mkdirSync(dir, { recursive: true })
    run('git', ['clone', '--quiet', DAANSE_REPOSITORY, dir])
  }
  const head = run('git', ['-C', dir, 'rev-parse', 'HEAD']).trim()
  if (head !== DAANSE_COMMIT) {
    run('git', ['-C', dir, 'fetch', '--quiet', 'origin'])
    run('git', ['-C', dir, 'checkout', '--quiet', DAANSE_COMMIT])
  }
  return dir
}

function docker(source, workdir, mounts, command) {
  return run('docker', [
    'run',
    '--rm',
    ...EXTRA,
    '-v',
    `${source}:/src`,
    ...mounts.flatMap(mount => ['-v', mount]),
    '-w',
    workdir,
    IMAGE,
    'sh',
    '-c',
    command,
  ])
}

/** Builds parser.ccc and what it depends on, unless the jars are there. */
function build(source) {
  if (JARS.every(jar => existsSync(join(source, jar.slice('/src/'.length)))))
    return
  process.stderr.write(
    `Building the reference parser at ${DAANSE_COMMIT.slice(0, 7)}...\n`,
  )
  docker(
    source,
    '/src',
    [`${M2_VOLUME}:/root/.m2`],
    `${MVN} -q -B -pl parser.ccc -am install -DskipTests -Dgpg.skip -Dmaven.javadoc.skip=true`,
  )
}

/** file name -> `accepts` or `rejects - first line of the error`. */
function verdicts(source, files) {
  const output = docker(
    source,
    '/corpus',
    [`${CORPUS}:/corpus:ro`, `${HARNESS}:/harness:ro`],
    `${JAVA} -cp ${JARS.join(':')} /harness/Verdict.java ${files.map(file => `'${file}'`).join(' ')}`,
  )
  const result = new Map()
  for (const line of output.split('\n')) {
    const [file, verdict, message] = line.split('\t')
    if (!file || !verdict) continue
    result.set(
      file,
      verdict === 'accepts' ? 'accepts' : `rejects - ${message ?? ''}`.trim(),
    )
  }
  return result
}

/** Puts the verdict in a `// Reference:` line after `// Expect:`, replacing an old one. */
function record(text, verdict) {
  const line = `// Reference: ${verdict}`
  if (/^\/\/ Reference: .*$/m.test(text))
    return text.replace(/^\/\/ Reference: .*$/m, line)
  return text.replace(/^(\/\/ Expect: .*)$/m, `$1\n${line}`)
}

function main() {
  const files = readdirSync(CORPUS)
    .filter(file => /\.daxe?$/.test(file))
    .sort()
  const source = checkout()
  build(source)
  const found = verdicts(source, files)
  let changed = 0
  for (const file of files) {
    const verdict = found.get(file)
    if (!verdict) throw new Error(`no verdict for ${file}`)
    const path = join(CORPUS, file)
    const before = readFileSync(path, 'utf8')
    const after = record(before, verdict)
    if (after !== before) {
      writeFileSync(path, after)
      changed++
    }
  }
  const rejected = [...found.values()].filter(
    verdict => verdict !== 'accepts',
  ).length
  process.stderr.write(
    `${files.length} entries: the reference accepts ${files.length - rejected}, rejects ${rejected}; ${changed} headers changed.\n`,
  )
}

main()
