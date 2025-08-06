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
import {Observation} from "./Observation"
import {PointAndAreaSettings} from "./PointAndAreaSettings"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://rg.eclipse.daanse.board.app.ui.vue.widget.map#//DSRenderer'})
export class DSRenderer{
              
  @Documentation("The name of the data stream renderer.")
  @Attribute() name?: string;
          @Reference('Condition') datastream: Condition;
          @Reference('Observation') observation: Observation;
          @Reference('PointAndAreaSettings') renderer: PointAndAreaSettings;
          
  @Documentation("A unique identifier for the data stream renderer.")
  @Attribute() id?: string;
}
