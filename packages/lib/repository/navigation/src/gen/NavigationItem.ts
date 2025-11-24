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
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://org.eclipse.daanse.board.app.lib.repository.navigation#//NavigationItem'})
export class NavigationItem {

  @Documentation("Unique identifier for the navigation item")
  @Attribute() id?: string;

  @Documentation("Display label for the menu item")
  @Attribute() label?: string;

  @Documentation("Icon name (e.g., 'event', 'settings', 'preview')")
  @Attribute() icon?: string;

  @Documentation("Vue router path (e.g., '/events', '/configuration')")
  @Attribute() route?: string;

  @Documentation("Vue router name for matching active state")
  @Attribute() routeName?: string;

  @Documentation("Sort order in the menu (lower numbers appear first)")
  @Attribute() order: number = 0;

  @Documentation("Whether the menu item should be displayed")
  @Attribute() visible: boolean = true;
}
