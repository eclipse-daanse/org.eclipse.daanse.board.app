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

@ModelClass({type:'http://example.com/sqlxmlastore#//ISqlXmlaStoreConfiguration'})
export class ISqlXmlaStoreConfiguration{
              
  @Documentation("A reference or ID to a SQL XMLA connection configuration used to access the data source.")
  @Attribute() connection?: string;
          
  @Documentation("The SQL query to be executed to retrieve data from the XMLA source.")
  @Attribute() sql?: string;
          
  @Documentation("The optional interval in milliseconds to poll the SQL XMLA resource for updates. If not specified, polling might be disabled or use a default value.")
  @Attribute() pollingInterval?: number;
}
