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

@ModelClass({type:'http://org.eclipse.daanse.board.app.ui.vue.widget.map#//IconSettings'})
export class IconSettings {

  @Documentation("The identifier or path of the currently selected icon.")
  @Attribute() currentIcon?: string;

  @Documentation("The color of the icon.")
  @Attribute() iconColor?: string;

  @Documentation("The size of the icon in pixels.")
  @Attribute() iconSize?: number;

  @Documentation("Indicates if the icon should be filled.")
  @Attribute() isIconFilled?: boolean;

  @Documentation("The weight of the icon's stroke.")
  @Attribute() strokeWeight?: number;

  @Documentation("The optical size of the icon.")
  @Attribute() opticSize?: number;

  @Documentation("The grade or visual weight of the icon.")
  @Attribute() grade?: number;
}
