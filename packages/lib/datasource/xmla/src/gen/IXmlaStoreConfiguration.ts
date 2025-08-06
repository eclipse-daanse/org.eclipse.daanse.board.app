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
import {XMLARequestParams} from "./XMLARequestParams"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://example.com/xmlastore#//IXmlaStoreConfiguration'})
export class IXmlaStoreConfiguration{
              
  @Documentation("A reference or ID to an XMLA connection configuration.")
  @Attribute() connection?: string;
          @Reference('XMLARequestParams') requestParams: XMLARequestParams;
          
  @Documentation("Indicates whether a visual editor should be used for MDX queries.")
  @Attribute() useVisualEditor?: boolean;
          
  @Documentation("The MultiDimensional Expressions (MDX) query string.")
  @Attribute() mdx?: string;
          
  @Documentation("Optional state information for drill-down operations, represented as a generic object.")
  @Attribute() drilldownState?: any;
          
  @Documentation("The optional interval in milliseconds to poll the XMLA source for updates.")
  @Attribute() pollingInterval?: number;
}
