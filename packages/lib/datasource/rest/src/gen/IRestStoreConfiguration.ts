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
import {IBaseConnectionConfiguration} from 'example.com/baseconnection'
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://example.com/reststore#//IRestStoreConfiguration'})
export class IRestStoreConfiguration extends IBaseConnectionConfiguration {

  @Documentation("The specific path or resource URL to fetch data from (e.g., '/api/data').")
  @Attribute() resourceUrl?: string;

  @Documentation("A reference or ID to a REST connection configuration used to access the resource.")
  @Attribute() connection?: string;

  @Documentation("An optional JSONPath or similar expression to select a specific value from the REST response.")
  @Attribute() selectedJSONValue?: string;

  @Documentation("The optional interval in milliseconds to poll the REST resource for updates. If not specified, polling might be disabled or use a default value.")
  @Attribute() pollingInterval?: number;
}
