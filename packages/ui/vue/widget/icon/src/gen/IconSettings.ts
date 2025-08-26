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

@ModelClass({type:'http://org.eclipse.daanse.board.app.ui.vue.widget.icon#//IconSettings'})
export class IconSettings{

  @Documentation("Color value (hex or CSS) used to render the icon.")
  @Attribute() iconColor?: string;

  @Documentation("The size of the icon in pixels.")
  @Attribute() iconSize?: number;

  @Documentation("Determines whether the icon is filled (true) or outlined (false).")
  @Attribute() isIconFilled?: boolean;

  @Documentation("Line thickness used to draw the icon.")
  @Attribute() strokeWeight?: number;

  @Documentation("Optical size used for rendering adjustments or visual balance.")
  @Attribute() opticSize?: number;

  @Documentation("Style variation (e.g., weight or contrast) within an icon family.")
  @Attribute() grade?: number;

  @Documentation("Name or identifier of the currently selected icon.")
  @Attribute() currentIcon?: string;
}
