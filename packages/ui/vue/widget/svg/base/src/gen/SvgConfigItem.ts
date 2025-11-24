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

@ModelClass({type:'http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgConfigItem'})
export class SvgConfigItem {

  @Documentation("The fill color of the SVG element (e.g., as a hex code or named color).")
  @Attribute() fill?: string;

  @Documentation("The stroke color of the SVG element.")
  @Attribute() stroke?: string;

  @Documentation("The width of the stroke of the SVG element (e.g., as a string with unit like '2px' or '1').")
  @Attribute() strokeWidth?: string;

  @Documentation("The CSS class name associated with this SVG styling configuration.")
  @Attribute() className?: string;
}
