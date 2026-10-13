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
 * `emfts-codegen generate`, with the model registered where the genconfig
 * can find it.
 *
 * WORKAROUND (@emfts/codegen 0.0.2-next.6): the CLI hands the loaded model to
 * GenConfigLoader.registerPackage() before load(), and the loader only
 * creates its ResourceSet inside load(). The package lands in a side map but
 * not in the registry the genconfig is read against, so
 * `ecorePackage="<nsURI>#/"` resolves to a proxy. A proxy is not null, the
 * loader's fallback to the registered package never runs, and the generator
 * writes a package without a single class - every src/gen emptied but the
 * factory and the package. Initialising the loader first is all it takes.
 * The library's own generate() has the same order; drop this once it is fixed.
 *
 * Same options as the CLI's generate: -m, -c, -o, -d <paths...>,
 * --import-mapping <nsURI=path...>.
 */
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..')
const CODEGEN = join(ROOT, 'node_modules', '@emfts', 'codegen', 'dist')
const { EcoreLoader, GenConfigLoader, GenConfigConverter, CodeGenerator } = await import(join(CODEGEN, 'index.js'))
const { parseImportMappings } = await import(join(CODEGEN, 'cli', 'import-mappings.js'))

function parseArgs(argv) {
  const options = { dependency: [], importMapping: [] }
  let list = null
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '-m') options.model = argv[++i]
    else if (arg === '-c') options.config = argv[++i]
    else if (arg === '-o') options.output = argv[++i]
    else if (arg === '-d') list = options.dependency
    else if (arg === '--import-mapping') list = options.importMapping
    else if (list && !arg.startsWith('-')) list.push(arg)
    else throw new Error(`unknown argument ${arg}`)
    if (arg === '-m' || arg === '-c' || arg === '-o') list = null
  }
  if (!options.model || !options.config) throw new Error('-m <model.ecore> and -c <genconfig.xmi> are required')
  return options
}

const options = parseArgs(process.argv.slice(2))

const ecoreLoader = new EcoreLoader()
for (const dependency of options.dependency) await ecoreLoader.load(dependency)
const ePackage = await ecoreLoader.load(options.model)

const configLoader = new GenConfigLoader()
await configLoader.init()
configLoader.registerPackage(ePackage)
const genConfig = await configLoader.load(options.config)
// The bug above, should it come back some other way: a proxy where the model belongs.
if (genConfig.ecorePackage !== ePackage) {
  console.error(`the genconfig does not resolve to ${ePackage.getNsURI()} - nothing would be generated`)
  process.exit(1)
}

const genModel = new GenConfigConverter().convert(genConfig)
const referencedPackages = new Map()
for (const ref of genConfig.referencedPackages ?? []) referencedPackages.set(ref.nsURI, ref.importPath)
for (const [nsURI, importPath] of parseImportMappings(options.importMapping)) referencedPackages.set(nsURI, importPath)

const generator = new CodeGenerator(genModel, {
  outputDirectory: options.output || genConfig.generation.outputDir,
  referencedPackages: referencedPackages.size ? referencedPackages : undefined,
})
const result = await generator.run()

const errors = result.diagnostics.filter((d) => d.level === 'error')
for (const d of result.diagnostics.filter((d) => d.level !== 'info')) {
  console.error(`[${d.level.toUpperCase()}] ${d.message}`)
}
if (!result.success || errors.length) process.exit(1)
console.log(`generated ${result.files.length} files`)
