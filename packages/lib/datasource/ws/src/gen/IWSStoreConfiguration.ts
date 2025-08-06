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

@ModelClass({type:'http://example.com/wsstore#//IWSStoreConfiguration'})
export class IWSStoreConfiguration{
              
  @Documentation("A reference or ID to a WebSocket connection configuration.")
  @Attribute() connection?: string;
          
  @Documentation("An optional topic to subscribe to or publish on the WebSocket connection.")
  @Attribute() topic?: string;
}
