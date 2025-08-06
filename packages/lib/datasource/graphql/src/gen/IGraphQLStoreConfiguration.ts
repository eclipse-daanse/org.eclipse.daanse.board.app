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

@ModelClass({type:'http://example.com/graphqlstore#//IGraphQLStoreConfiguration'})
export class IGraphQLStoreConfiguration{
              
  @Documentation("A reference or ID to a GraphQL connection configuration used to execute the query.")
  @Attribute() connection?: string;
          
  @Documentation("The GraphQL query string to be executed.")
  @Attribute() query?: string;
          
  @Documentation("Optional variables to be passed with the GraphQL query.")
  @Attribute() variables?: any;
}
