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
import {SVGItemStyles} from "./SVGItemStyles"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//RepeatableSVGSettings'})
export class RepeatableSVGSettings{
              
  @Documentation("The path or URL to the base SVG source file that will be repeated.")
  @Attribute() src?: string;
          @Reference('SVGItemStyles') activeItemStyles: SVGItemStyles;
          @Reference('SVGItemStyles') defaultItemStyles: SVGItemStyles;
          
  @Documentation("The total number of times the SVG should be repeated. This is a string as it might represent a dynamic value or a fixed count that could be parsed.")
  @Attribute() repetitions?: string;
          
  @Documentation("The current progress value, determining how many of the repeated SVGs should be styled as 'active'. This is a string as it might represent a percentage or a numeric value.")
  @Attribute() progress?: string;
}
