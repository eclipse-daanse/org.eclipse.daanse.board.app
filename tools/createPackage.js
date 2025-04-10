/**
 * Copyright (c) 2023 Contributors to the  Eclipse Foundation.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors: Smart City Jena
 */
import {question, confirm, select, multiselect} from "@topcli/prompts";
import semver from 'semver';
import clc from "cli-color";
import fs from "fs";
import {pkg} from "./package.json.js";

import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';
import {exec} from "node:child_process";
import {vite} from "./vite.config.js";
import {readme} from "./README.md.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const notice = clc.blue;
const error = clc.red;

const config ={};
const name = await question("Package name: org.eclipse.daanse.board.app.?");

const result = name.replaceAll(' ', '')
if(result.length === 0 || !result) {
  console.error('ERR:valid Package Name needed')
  process.exit(1);
}
config.name  =result;
const version = await question("initial version",{defaultValue:'0.0.1-next.1'});
if(!semver.valid(version)){
  console.error('ERR:version has to be in semantic Versioning')
  process.exit(1);
}
config.version = version;
config.description = await question("description:");
config.keywords = await question("keywords:");
config.homepage = await question("homepage:");
config.license = await question("license:",{defaultValue:'EPL-2.0'});
config.entrypoint  = await question("entrypoint:",{defaultValue:`./dist/${config.name}.js`});
config.withBoilerplate = await confirm("Generate BoilerPlate Code ?", { initial: true });


console.log(config);
const ready = await confirm("Is this correct", { initial: true });
if(!ready)process.exit(1);

console.log(notice('change to packages...'))
try {
  process.chdir('../packages');
  console.log(notice('[✓]'))
}
catch (err) {
  console.log(error('couldnt change to "packages/" make sure you are in the base dir'));
}

console.log(notice('create package dir...'))
const targetPath = './'+config.name.replaceAll('.','/');

if (fs.existsSync(targetPath)) {
  console.log(error('dir:'+ targetPath + ' already exists.'));
  process.exit(1);
}

try {
  await fs.promises.mkdir(targetPath, { recursive: true });
  console.log(notice('[✓]'))
} catch (err) {
  console.error(err)
  console.log(error('couldn t create subdirs'));
  process.exit(1);
}
try {
  process.chdir(targetPath);
}
catch (err) {
  console.log(error(`couldnt change to ${targetPath} make sure you are in the base dir`));
  process.exit(1);
}
console.log(notice('create package.json...'))
try {
  fs.writeFileSync('package.json', pkg(config))
  console.log(notice('[✓]'))
} catch (err) {
  console.error(err)
  console.log(error('couldn t create package.json'));
  process.exit(1);
}
console.log(notice('create vite.config.ts...'))
try {
  fs.writeFileSync('vite.config.ts', vite(config))
  console.log(notice('[✓]'))
} catch (err) {
  console.error(err)
  console.log(error('couldn t vite.config.ts'));
  process.exit(1);
}
console.log(notice('create README.md...'))
try {
  fs.writeFileSync('README.md', readme(config))
  console.log(notice('[✓]'))
} catch (err) {
  console.error(err)
  console.log(error('couldn t create README.md'));
  process.exit(1);
}

if(config.withBoilerplate){
  console.log(notice('copy base Code...'))
  try {
    fs.cpSync(path.resolve(__dirname,'tmpl'),path.resolve(__dirname,'../packages',targetPath),{recursive:true});
    console.log(notice('[✓]'))
  } catch (err) {
    console.error(err)
    console.log(error('couldn t copy base code'));
    process.exit(1);
  }

}
console.log(notice('install package...'))
await exec('yarn install')
console.log(notice('[✓]'))
