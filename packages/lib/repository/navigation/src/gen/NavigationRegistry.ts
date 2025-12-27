/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

/*
* This is generated code! Please note, that on code generation, these line are erased and generated again.
* If you modify this file, it is possible that you changes will be lost!!!
*
* This method uses JSON playload, to load an EPackage.
*
* @generated
*/

/*
* Generate classes and enums for TypeScript
* Default values are set. The '_type' parameter is generated for the
* Serialization to a backend.
*/
import {NavigationItem} from "./NavigationItem"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://org.eclipse.daanse.board.app.lib.repository.navigation#//NavigationRegistry'})
export class NavigationRegistry {
  @Reference('NavigationItem') items: Array<NavigationItem> = [];

  registerNavigationItem(item?: NavigationItem): boolean {
        throw new Error("registerNavigationItem not implemented");
  }

  unregisterNavigationItem(id?: string): boolean {
        throw new Error("unregisterNavigationItem not implemented");
  }

  getNavigationItem(id?: string): NavigationItem {
        throw new Error("getNavigationItem not implemented");
  }

  getAllNavigationItems(): NavigationItem {
        throw new Error("getAllNavigationItems not implemented");
  }
}
