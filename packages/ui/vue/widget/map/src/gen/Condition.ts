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
import {Comperator} from "./Comperator"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://rg.eclipse.daanse.board.app.ui.vue.widget.map#//Condition'})
export class Condition{
              
  @Documentation("The property name to apply the condition to.")
  @Attribute() prop?: string;
          
  @Documentation("The comparison operator to use (e.g., 'eq', 'lt').")
@Enum('Comperator') comperator: Comperator = Comperator.eq;
          
  @Documentation("The value to compare the property against.")
  @Attribute() value?: string;
}
