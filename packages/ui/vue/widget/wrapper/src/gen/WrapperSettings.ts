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

@ModelClass({type:'http://www.example.org/wrapperSettings#//WrapperSettings'})
export class WrapperSettings {

  @Documentation("The optional title text to be displayed within the wrapper.")
  @Attribute() title?: string;

  @Documentation("The background color of the wrapper, typically represented as a hexadecimal string (e.g., '#RRGGBB').")
  @Attribute() backgroundColor: string = "#fff";

  @Documentation("The transparency level of the background color, ranging from 0.0 (fully transparent) to 1.0 (fully opaque).")
  @Attribute() backgroundColorTransparence: number = 255;

  @Documentation("The color of the title text, typically as a hexadecimal string.")
  @Attribute() titleColor: string = "#7c7c7c";

  @Documentation("The inner spacing (padding) within the wrapper, usually in pixels.")
  @Attribute() padding: number = 0;

  @Documentation("The font size of the title text, typically in pixels.")
  @Attribute() titleFontSize: number = 15;

  @Documentation("The thickness of the wrapper's border, usually in pixels.")
  @Attribute() borderSize: number = 0;

  @Documentation("The color of the wrapper's border, typically as a hexadecimal string.")
  @Attribute() borderColor: string = "#ccc";

  @Documentation("The radius for rounding the corners of the wrapper, usually in pixels.")
  @Attribute() borderRadius: number = 15;

  @Documentation("The amount of blur applied to the wrapper's background or content, usually in pixels.")
  @Attribute() blur: number = 0;

  @Documentation("A boolean flag indicating if the wrapper should occupy the full screen.")
  @Attribute() fullscreen: boolean = false;

  @Documentation("The color of the shadow applied to the wrapper, typically as a hexadecimal string.")
  @Attribute() shadowColor: string = "#333";

  @Documentation("The blur radius of the shadow, usually in pixels.")
  @Attribute() shadowBlur: number = 12;

  @Documentation("The horizontal offset of the shadow from the wrapper, usually in pixels.")
  @Attribute() shadowX: number = 5;

  @Documentation("The vertical offset of the shadow from the wrapper, usually in pixels.")
  @Attribute() shadowY: number = 5;

  @Documentation("The transparency level of the shadow, ranging from 0.0 to 1.0.")
  @Attribute() shadowTransparence: number = 25;

  @Documentation("The overall transparency of the entire wrapper component, ranging from 0.0 to 1.0.")
  @Attribute() transparency: number = 255;
}
