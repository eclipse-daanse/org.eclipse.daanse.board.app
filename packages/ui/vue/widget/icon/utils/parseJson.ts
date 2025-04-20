/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import fs from 'fs'
import { version } from 'os'
import path from 'path'

interface MaterialIcon {
  name: string
  [key: string]: any // Allow for other properties
}

/**
 * Filters an array of icons to include only those with unique names
 * @param icons Array of material icons
 * @returns Array of icons with unique names
 */
function filterUniqueIcons(icons: MaterialIcon[]): MaterialIcon[] {
  const uniqueNames: Set<string> = new Set()
  return icons.filter((icon: MaterialIcon) => {
    if (!uniqueNames.has(icon.name)) {
      uniqueNames.add(icon.name)
      return true
    }
    return false
  })
}

/**
 * Process JSON file containing icons
 * @param inputPath Path to input JSON file
 * @param outputPath Path to output JSON file (optional)
 */
function processJsonFile(inputPath: string, outputPath?: string): void {
  try {
    // Resolve paths
    const resolvedInputPath = path.resolve(inputPath)
    const resolvedOutputPath = outputPath
      ? path.resolve(outputPath)
      : path.join(
          path.dirname(resolvedInputPath),
          `unique-${path.basename(resolvedInputPath)}`,
        )

    console.log(`Reading from: ${resolvedInputPath}`)

    // Read and parse input JSON
    const jsonData = fs.readFileSync(resolvedInputPath, 'utf8')
    const icons: MaterialIcon[] = JSON.parse(jsonData)

    console.log(`Found ${icons.length} icons in input file`)

    // Process the icons
    const uniqueIcons = filterUniqueIcons(icons).map((icon: MaterialIcon) => {
      return icon.name
      // return {
      //   name: icon.name,
      //   version: icon.version,
      // }
    })

    console.log(`Filtered to ${uniqueIcons.length} unique icons`)

    // Write the result to output file
    fs.writeFileSync(
      resolvedOutputPath,
      JSON.stringify(uniqueIcons, null, 2),
      'utf8',
    )

    console.log(`Successfully wrote unique icons to: ${resolvedOutputPath}`)
  } catch (error) {
    console.error('Error processing JSON file:', error)
    process.exit(1)
  }
}

function main(): void {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.error('Error: Input file path is required')
    console.log('Usage: node parseJson.js <inputFilePath> [outputFilePath]')
    process.exit(1)
  }

  const inputPath = args[0]
  const outputPath = args[1] // Optional

  processJsonFile(inputPath, outputPath)
}

// Execute the script
main()

// Usage: node parseJson.ts ../src/assets/MaterialIcons.json ../src/assets/output.json
