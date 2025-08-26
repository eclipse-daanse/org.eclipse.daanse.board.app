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

@ModelClass({type:'http://rg.eclipse.daanse.board.app.ui.vue.widget.map#//MapProps'})
export class MapProps{

  @Documentation("Optional flag indicating if a stroke should be applied.")
  @Attribute() stroke?: boolean;

  @Documentation("Optional color for the stroke.")
  @Attribute() color?: string;

  @Documentation("Optional stroke weight.")
  @Attribute() weight?: number;

  @Documentation("Optional opacity for the stroke (0.0 to 1.0).")
  @Attribute() opacity?: number;

  @Documentation("Optional setting for the line cap style (e.g., 'butt', 'round', 'square').")
  @Attribute() lineCap?: string;

  @Documentation("Optional dash offset for dashed lines.")
  @Attribute() dashOffset?: string;

  @Documentation("Optional flag indicating if the shape should be filled.")
  @Attribute() fill?: boolean;

  @Documentation("Optional opacity for the fill color (0.0 to 1.0).")
  @Attribute() fillOpacity?: number;

  @Documentation("Optional fill color for the shape.")
  @Attribute() fillColor?: string;

  @Documentation("Optional CSS class name for styling.")
  @Attribute() className?: string;
}
