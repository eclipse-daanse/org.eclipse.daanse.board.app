#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PACKAGES_DIR = '../../packages';
const GENERATOR_SCRIPT = './main.js';

function findEcoreFiles(dir) {
  const ecoreFiles = [];

  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(currentDir, item.name);

      if (item.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.isFile() && item.name.endsWith('.ecore')) {
        ecoreFiles.push(fullPath);
      }
    }
  }

  scanDirectory(dir);
  return ecoreFiles;
}

function runGenerator(modelPath) {
  return new Promise((resolve, reject) => {
    const ecoreDir = path.dirname(modelPath);
    const genPath =  path.join(ecoreDir, '..', 'src', 'gen');

    console.log(`Generating for: ${modelPath}`);
    console.log(`Output to: ${path.join(ecoreDir, '..', 'src', 'gen')}`);

    const child = spawn('node', [GENERATOR_SCRIPT, '-m', modelPath, '-g', genPath,'--no_factories' , '-a' ,'org.eclipse.daanse.board.app.lib.annotations'], {
      stdio: 'inherit',

    });

    child.on('close', (code) => {
      if (code === 0) {
        console.log(`✓ Generated successfully for ${path.basename(modelPath)}`);
        resolve();
      } else {
        console.error(`✗ Generation failed for ${path.basename(modelPath)} (exit code: ${code})`);
        if (code !== 1) { // Don't treat normal failures as fatal
          reject(new Error(`Generator exited with code ${code}`));
        } else {
          reject(); // Continue with other files even if one fails
        }
      }
    });

    child.on('error', (error) => {
      console.error(`✗ Failed to start generator for ${path.basename(modelPath)}:`, error.message);
      resolve(); // Continue with other files even if one fails to start
    });
  });
}

async function main() {
  const packagesPath = path.resolve(__dirname, PACKAGES_DIR);

  if (!fs.existsSync(packagesPath)) {
    console.error('Packages directory not found:', packagesPath);
    process.exit(1);
  }

  console.log('Scanning for .ecore files in:', packagesPath);
  const ecoreFiles = findEcoreFiles(packagesPath);

  if (ecoreFiles.length === 0) {
    console.log('No .ecore files found.');
    return;
  }

  console.log(`Found ${ecoreFiles.length} .ecore files:`);
  ecoreFiles.forEach(file => console.log(`  - ${file}`));
  console.log('');

  let successCount = 0;
  let failureCount = 0;

  for (const ecoreFile of ecoreFiles) {
    try {
      await runGenerator(ecoreFile);
      successCount++;
    } catch (error) {
      failureCount++;
    }
    console.log(''); // Empty line between generations
  }

  console.log('='.repeat(50));
  console.log(`Generation Summary:`);
  console.log(`  ✓ Successful: ${successCount}`);
  console.log(`  ✗ Failed: ${failureCount}`);
  console.log(`  📁 Total: ${ecoreFiles.length}`);

  if (failureCount > 0) {
    process.exit(1);
  }
}

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error.message);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

main().catch(error => {
  console.error('Main execution failed:', error.message);
  process.exit(1);
});
