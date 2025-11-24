/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

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
import {DatastreamSummary} from "./DatastreamSummary"
import {Payload} from 'org.eclipse.daanse.board.app.lib.events'
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://org.eclipse.daanse.board.app.ui.vue.widget.map#//ThingClickPayload'})
export class ThingClickPayload extends Payload {

  @Documentation("Unique identifier of the Thing.")
  @Attribute() id?: string = undefined;

  @Documentation("Name of the Thing.")
  @Attribute() name?: string = undefined;

  @Documentation("Description of the Thing.")
  @Attribute() description?: string = undefined;

  @Documentation("Custom properties of the Thing (mapped from Record<string, any>).")
  @Attribute() properties?: any = undefined;

  @Documentation("Location geometry (GeoJSON) of the Thing.")
  @Attribute() location?: any = undefined;

  @Documentation("ID of the renderer that triggered this event.")
  @Attribute() rendererId?: string = undefined;
  @Reference('DatastreamSummary') datastreams: Array<DatastreamSummary> = [];
}
