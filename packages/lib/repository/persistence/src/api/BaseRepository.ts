/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

export class BaseRepository{
    /*
     * Public, because the Repository contract the subclasses declare says
     * readonly name and readonly uri. They were protected, which contradicts
     * it - no subclass ever satisfied the interface. It went unnoticed
     * because these packages build with vite alone and nothing type-checks
     * them.
     */
    name?:string;
    uri?:URL;
    static readonly type:string;
    init(url:URL,name:string){
        this.uri = url;
        this.name = name;
    }
    getUri(){
      return this.uri;
    }
    getName(){
      return this.name;
    }

}
