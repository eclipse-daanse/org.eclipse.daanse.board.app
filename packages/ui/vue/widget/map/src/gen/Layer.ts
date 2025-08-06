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

@ModelClass({type:'http://rg.eclipse.daanse.board.app.ui.vue.widget.map#//Layer'})
export class Layer{
              
  @Documentation("The service associated with this layer. (Mapped from TypeScript 'any' type).")
  @Attribute() service?: any;
          
  @Documentation("The type of the layer (e.g., 'WMS', 'GeoJSON').")
  @Attribute() type?: string;
          @Reference('Layer') childs: Layer;
          
  @Documentation("The hierarchical level of the layer.")
  @Attribute() level?: number;
          
  @Documentation("Optional list of style IDs applicable to this layer.")
  @Attribute() styleIds?: string;
          
  @Documentation("Optional internal name of the layer.")
  @Attribute() name?: string;
          
  @Documentation("Optional display title of the layer.")
  @Attribute() title?: string;
          
  @Documentation("Optional attribution for this specific layer.")
  @Attribute() attribution?: string;
          
  @Documentation("Optional GeoJSON data for the layer. (Mapped from TypeScript 'any' type).")
  @Attribute() geoJson?: any;
          
  @Documentation("Optional WFS service configuration for the layer. (Mapped from TypeScript 'any' type).")
  @Attribute() wfs_service?: any;
          
  @Documentation("Optional opacity level for the layer (0.0 to 1.0).")
  @Attribute() opacity?: number;
}
