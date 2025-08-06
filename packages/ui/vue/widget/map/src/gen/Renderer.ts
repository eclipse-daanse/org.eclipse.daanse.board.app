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
import {Condition} from "./Condition"
import {PointAndAreaSettings} from "./PointAndAreaSettings"
import {DSRenderer} from "./DSRenderer"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://rg.eclipse.daanse.board.app.ui.vue.widget.map#//Renderer'})
export class Renderer{
              
  @Documentation("The name of the renderer.")
  @Attribute() name?: string;
          @Reference('Condition') thing: Condition;
          @Reference('PointAndAreaSettings') renderer: PointAndAreaSettings;
          @Reference('DSRenderer') ds_renderer: DSRenderer;
          
  @Documentation("Optional refresh interval for observation data in milliseconds.")
  @Attribute() ObservationrefreshTime?: number;
          
  @Documentation("Optional timestamp of the last update.")
  @Attribute() lastUpdate?: number;
          
  @Documentation("A unique identifier for the renderer.")
  @Attribute() id?: string;
}
