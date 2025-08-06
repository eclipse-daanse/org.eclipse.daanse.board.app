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

@ModelClass({type:'http://www.example.org/textSettings#//TextSettings'})
export class TextSettings{
              
  @Documentation("The actual text content to be displayed.")
  @Attribute() text?: string;
          
  @Documentation("The size of the font in pixels or other units, typically a numeric value.")
  @Attribute() fontSize?: number;
          
  @Documentation("The color of the text, typically in hexadecimal format (e.g., '#RRGGBB') or as a named color.")
  @Attribute() fontColor?: string;
          
  @Documentation("The weight (thickness) of the font, such as 'normal', 'bold', 'bolder', or a numeric value (e.g., '400', '700').")
  @Attribute() fontWeight?: string;
          
  @Documentation("The style of the font, such as 'normal', 'italic', or 'oblique'.")
  @Attribute() fontStyle?: string;
          
  @Documentation("The decoration applied to the text, such as 'none', 'underline', 'overline', or 'line-through'.")
  @Attribute() textDecoration?: string;
          
  @Documentation("The horizontal alignment of the text within its container, such as 'left', 'center', or 'right'.")
  @Attribute() horizontalAlign?: string;
          
  @Documentation("The vertical alignment of the text within its container, such as 'top', 'middle', or 'bottom'.")
  @Attribute() verticalAlign?: string;
}
