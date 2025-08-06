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
import {IconSettings} from "./IconSettings"
import {PointPin} from "./PointPin"
import {MapProps} from "./MapProps"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://rg.eclipse.daanse.board.app.ui.vue.widget.map#//PointAndAreaSettings'})
export class PointAndAreaSettings{
              
  @Documentation("Optional flag to show or hide sub-elements.")
  @Attribute() show_SubElements?: boolean;
          
  @Documentation("Specifies how points should be rendered (e.g., 'icon', 'pin').")
  @Attribute() point_render_as?: string;
          
  @Documentation("Optional property to use for point rendering.")
  @Attribute() point_prop?: string;
          @Reference('IconSettings') point: IconSettings;
          @Reference('PointPin') pointPin: PointPin;
          @Reference('MapProps') area: MapProps;
          
  @Documentation("Optional settings for labels. (Mapped from TypeScript 'any' type).")
  @Attribute() label?: any;
}
