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

@ModelClass({type:'http://example.com/rssconnection#//IRssConnectionConfiguration'})
export class IRssConnectionConfiguration{
              
  @Documentation("The URL of the RSS feed to connect to.
                                            This attribute overrides the 'url' from BaseConnectionConfig
                                            to specify its role in RSS feed connections.")
  @Attribute() url?: string;
}
