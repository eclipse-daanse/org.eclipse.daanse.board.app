/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import get from "lodash/get";
import { injectable } from 'inversify'
import { SettingsManagerI } from '../interfaces/SettingsManagerI'

@injectable()
export class SettingsManager implements SettingsManagerI{

  private ext_loaded = false;

  constructor() {

  }
  async loadData(){
    try{
      const data = await fetch('config.json');
      const jsonData = await data.json();
      if(!(globalThis as any).__env) {
        (globalThis as any).__env = { settings: null }
      }
      (globalThis as any).__env.settings=jsonData;
    }catch (e){
      console.log('no external conf found')
    }finally {
      this.ext_loaded = true;
    }


  }
  async getSettings(path: string[]): Promise<any> {
    if(!this.ext_loaded)await this.loadData();
    const settings = (globalThis as any).__env?.settings;
    if (!settings) return null;

    return get(settings, path);
  }

}
