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

@ModelClass({type:'http://example.com/xmlastore#//XMLARequestParams'})
export class XMLARequestParams{
              
  @Documentation("The XMLA command (e.g., 'Execute', 'Discover').")
  @Attribute() command?: string;
          
  @Documentation("Optional properties for the XMLA command (e.g., format, axis info). Represented as a generic object.")
  @Attribute() properties?: any;
}
