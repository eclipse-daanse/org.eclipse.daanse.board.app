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
import {SvgClassConfigMapEntry} from "./SvgClassConfigMapEntry"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgSettings'})
export class SvgSettings{
              
  @Documentation("The path or URL to the SVG source file.")
  @Attribute() src?: string;
          @Reference('SvgClassConfigMapEntry') classesConfig: SvgClassConfigMapEntry;
}
