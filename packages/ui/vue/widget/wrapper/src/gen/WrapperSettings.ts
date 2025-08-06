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
export class WrapperSettings{
              
  @Documentation("The optional title text to be displayed within the wrapper.")
  @Attribute() title?: string;
          
  @Documentation("The background color of the wrapper, typically represented as a hexadecimal string (e.g., '#RRGGBB').")
  @Attribute() backgroundColor?: string;
          
  @Documentation("The transparency level of the background color, ranging from 0.0 (fully transparent) to 1.0 (fully opaque).")
  @Attribute() backgroundColorTransparency?: number;
          
  @Documentation("The color of the title text, typically as a hexadecimal string.")
  @Attribute() titleColor?: string;
          
  @Documentation("The inner spacing (padding) within the wrapper, usually in pixels.")
  @Attribute() padding?: number;
          
  @Documentation("The font size of the title text, typically in pixels.")
  @Attribute() titleFontSize?: number;
          
  @Documentation("The thickness of the wrapper's border, usually in pixels.")
  @Attribute() borderSize?: number;
          
  @Documentation("The color of the wrapper's border, typically as a hexadecimal string.")
  @Attribute() borderColor?: string;
          
  @Documentation("The radius for rounding the corners of the wrapper, usually in pixels.")
  @Attribute() borderRadius?: number;
          
  @Documentation("The amount of blur applied to the wrapper's background or content, usually in pixels.")
  @Attribute() blur?: number;
          
  @Documentation("A boolean flag indicating if the wrapper should occupy the full screen.")
  @Attribute() fullscreen?: boolean;
          
  @Documentation("The color of the shadow applied to the wrapper, typically as a hexadecimal string.")
  @Attribute() shadowColor?: string;
          
  @Documentation("The blur radius of the shadow, usually in pixels.")
  @Attribute() shadowBlur?: number;
          
  @Documentation("The horizontal offset of the shadow from the wrapper, usually in pixels.")
  @Attribute() shadowX?: number;
          
  @Documentation("The vertical offset of the shadow from the wrapper, usually in pixels.")
  @Attribute() shadowY?: number;
          
  @Documentation("The transparency level of the shadow, ranging from 0.0 to 1.0.")
  @Attribute() shadowTransparency?: number;
          
  @Documentation("The overall transparency of the entire wrapper component, ranging from 0.0 to 1.0.")
  @Attribute() transparency?: number;
}
