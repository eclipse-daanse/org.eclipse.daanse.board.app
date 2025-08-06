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
import {EDouble} from "./EDouble"
import {Layer} from "./Layer"
import {DSRenderer} from "./DSRenderer"
import {Renderer} from "./Renderer"
import {Service} from "./Service"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://rg.eclipse.daanse.board.app.ui.vue.widget.map#//MapSettings'})
export class MapSettings{
              
  @Documentation("Optional identifier for the data source.")
  @Attribute() datasourceId?: string;
          
  @Documentation("The URL of the base map service.")
  @Attribute() baseMapUrl?: string;
          
  @Documentation("The initial zoom level of the map.")
  @Attribute() zoom?: number;
          @Reference('EDouble') center: EDouble;
          
  @Documentation("Attribution text for the map data.")
  @Attribute() attribution?: string;
          @Reference('Layer') layers: Layer;
          @Reference('DSRenderer') styles: DSRenderer;
          @Reference('Renderer') OGCSstyles: Renderer;
          @Reference('Service') services: Service;
}
