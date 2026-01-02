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
import {Condition} from "./Condition"
import {PayloadMapping} from "./PayloadMapping"
import {EventActionContext} from "./EventActionContext"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://org.eclipse.daanse.board.app.lib.events.mapping#//EventActionMapping'})
export class EventActionMapping {

  @Documentation("Unique identifier for this mapping.")
  @Attribute() id?: string;

  @Documentation("Context where the event originates (system, page, widget).")
  @Enum('EventActionContext') context: EventActionContext = EventActionContext.system;

  @Documentation("Optional specific context ID (e.g., pageId or widgetId).")
  @Attribute() contextId?: string;

  @Documentation("Type of event to listen for.")
  @Attribute() eventType?: string;
  @Reference('Condition') conditions: Array<Condition> = [];

  @Documentation("Context where the action should execute (system, page, widget).")
  @Enum('EventActionContext') targetContext: EventActionContext = EventActionContext.system;

  @Documentation("Optional specific target context ID.")
  @Attribute() targetContextId?: string;

  @Documentation("Name of the action method to execute.")
  @Attribute() actionName?: string;

  @Documentation("Optional static arguments to pass to the action.")
  @Attribute() actionArgs: Array<any> = [];
  @Reference('PayloadMapping') payloadMapping: Array<PayloadMapping> = [];
}
