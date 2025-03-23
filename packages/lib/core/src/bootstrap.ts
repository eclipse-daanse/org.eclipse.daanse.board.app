/*********************************************************************
 * Copyright (c) YYYY Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Name (Company) - description
 **********************************************************************/


import {container} from "./index";

const boot = async (listOfPackages:string[])=> {


    for (const pack of listOfPackages){
        try{

          let {init} = await import( /* @vite-ignore */ pack);
          await init(container);

        }catch (e){
            console.warn(`error on init Package ${pack}`);
            console.warn(e);
        }
    }
    //container.bind<RootService>(RootService).toSelf().inSingletonScope();
    //const rs = container.get<RootService>(RootService);
    //rs.activate();


}
export {boot}
