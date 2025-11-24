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
import {HorizontalAlign} from "./HorizontalAlign"
import {VerticalAlign} from "./VerticalAlign"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://www.example.org/progresswidgets#//ProgressSettings'})
export class ProgressSettings {

  @Documentation("The current progress value, potentially as a percentage or numeric string.")
  @Attribute() progress?: string;

  @Documentation("The color representing the filled portion of the progress bar.")
  @Attribute() fillColor: string = "#00FF00";

  @Documentation("An optional secondary color used if a gradient fill is enabled for the progress bar.")
  @Attribute() gradientColor?: string;

  @Documentation("The background color of the progress bar, representing the unfilled portion.")
  @Attribute() backgroundColor: string = "#D3D3D3";

  @Documentation("A flag indicating whether the progress bar should use a gradient color.")
  @Attribute() isGradient: boolean = false;

  @Documentation("A flag indicating whether the progress bar is oriented vertically.")
  @Attribute() isVertical: boolean = false;

  @Documentation("The rotation angle of the progress bar in degrees.")
  @Attribute() rotation: number = 90;

  @Documentation("The minimum value for the progress bar.")
  @Attribute() min: number = 0;

  @Documentation("The maximum value for the progress bar.")
  @Attribute() max: number = 100;

  @Documentation("The color of the text displayed on the progress bar.")
  @Attribute() textColor: string = "#000000";

  @Documentation("The thickness of the progress bar (e.g., '20px').")
  @Attribute() barThickness: string = "20px";

  @Documentation("The border radius of the progress bar (e.g., '10px').")
  @Attribute() borderRadius: string = "0px";

  @Documentation("The horizontal alignment of the value text.")
  @Enum('HorizontalAlign') valueAlign: HorizontalAlign = HorizontalAlign.left;

  @Documentation("The vertical alignment of the value text.")
  @Enum('VerticalAlign') valueJustify: VerticalAlign = VerticalAlign.top;
}
