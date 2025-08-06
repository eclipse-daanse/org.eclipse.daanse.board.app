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

@ModelClass({type:'http://example.com/mqttconnection#//IMQTTConnectionConfiguration'})
export class IMQTTConnectionConfiguration{
              
  @Documentation("The URL for the MQTT broker, e.g., 'mqtt://localhost:1883'.
                                            This attribute overrides the 'url' from BaseConnectionConfig
                                            to emphasize its specific role in MQTT connections.")
  @Attribute() url?: string;
          
  @Documentation("An optional MQTT topic to subscribe or publish to by default.
                                            If not specified, a connection might use a default topic or require one per operation.")
  @Attribute() topic?: string;
}
