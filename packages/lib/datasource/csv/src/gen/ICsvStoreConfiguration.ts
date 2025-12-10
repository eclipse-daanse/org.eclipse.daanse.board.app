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
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://example.com/csvstore#//ICsvStoreConfiguration'})
export class ICsvStoreConfiguration{

  @Documentation("The URL of the CSV resource (e.g., a file path or web URL).")
  @Attribute() resourceUrl?: string;

  @Documentation("A reference or ID to a connection configuration used to access the resource.")
  @Attribute() connection?: string;

  @Documentation("The optional interval in milliseconds to poll the CSV resource for updates. If not specified, polling might be disabled or use a default value.")
  @Attribute() pollingInterval?: number;

  @Documentation("A list of possible separator characters used in the CSV file (e.g., ',', ';', '\t').")
  @Attribute() separators: Array<string> = [];

  @Documentation("Number of rows to skip from the start of the CSV file (e.g., to remove headers or metadata).")
  @Attribute() skipRowsFromStart?: number;

  @Documentation("Number of rows to skip from the end of the CSV file (e.g., to remove footers or summary rows).")
  @Attribute() skipRowsFromEnd?: number;
}
