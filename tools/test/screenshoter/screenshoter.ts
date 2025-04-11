/**
 * Copyright (c) 2023 Contributors to the  Eclipse Foundation.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors: Smart City Jena
 */
import {Page, TestInfo} from "@playwright/test";
import {writeFileSync} from "node:fs";
import path from 'node:path';
import * as fs from "fs";

interface CuePoint{
  name:string,
  test:string,
  time:number
}
interface Screenshot{
  path:string,
  upload:boolean
}
export class ScreenShotter {

  private screenshots:Screenshot[] = [];
  private cuePoints:CuePoint[] = [];

  private name:string;
  private prefix:string;
  private suffix:string;
  private path:string;
  private startTime:number = 0;

  constructor(testInfo:TestInfo,_path:string='/test_output') {
    console.log(testInfo.titlePath[0].split('.')[0])
    this.prefix =testInfo.titlePath[0].split('.')[0]+'-';
    this.name = testInfo.title.trim().replaceAll(' ','-');
    this.suffix = '-'+testInfo.project.name;
    this.path =  path.join(__dirname,'../../..', _path);
  }

  async takeScreenshot(page:Page,name:string='',upload:boolean = true){
    const shortPath = `${this.prefix}${this.name}${this.suffix}/${name}.png`
    const fullPath = `${this.path}/${shortPath}`;
    this.screenshots.push({path:shortPath,upload:upload});

    await page.screenshot({
      fullPage:true,
      path:fullPath
    })
  }

  async startStopWatch(page:Page){
    //this.startTime = await page.evaluate(() =>  new Date().getTime())
    this.startTime = new Date().getTime();
    await this.makeCuePoint(page,'start');
  }
  async makeCuePoint(page:Page ,name=''){
    //const now = await page.evaluate(() =>  new Date().getTime())
    const now = new Date().getTime();
    this.cuePoints.push({name:`${name}`,test:`${this.prefix}${this.name}${this.suffix}`,time:now-this.startTime})
  }

  async generateJsonSummery(page:Page,_path='/test_output/screenshots.json'){

    await this.makeCuePoint(page,'end');
    let readFile:any;

    if (fs.existsSync(path.join(__dirname,'../../..', _path))) {
      readFile = JSON.parse(fs.readFileSync(path.join(__dirname,'../../..', _path)).toString());
      if(!readFile.screenshots){
        readFile.screenshots = [];
      }
      if(!readFile.cuePoints){
        readFile.cuePoints = [];
      }
    }
    else {
      readFile = {
        screenshots:[],
        cuePoints:[]
      }
    }
    readFile.cuePoints = readFile.cuePoints.concat(this.cuePoints);
    readFile.screenshots = readFile.screenshots.concat(this.screenshots);

    writeFileSync(path.join(__dirname,'../../..', _path), JSON.stringify(readFile), {
      flag: "w"
    })
  }
}
