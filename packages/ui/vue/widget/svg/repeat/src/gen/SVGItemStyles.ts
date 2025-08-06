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

@ModelClass({type:'http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//SVGItemStyles'})
export class SVGItemStyles{
              
  @Documentation("The fill color of the SVG item (e.g., a hex code or named color).")
  @Attribute() fill?: string;
          
  @Documentation("The stroke color of the SVG item.")
  @Attribute() stroke?: string;
}
