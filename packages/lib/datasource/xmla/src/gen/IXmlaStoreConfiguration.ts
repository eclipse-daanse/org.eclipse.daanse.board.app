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
import {XMLARequestParams} from "./XMLARequestParams"
import {IBaseConnectionConfiguration} from 'example.com/baseconnection'
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://example.com/xmlastore#//IXmlaStoreConfiguration'})
export class IXmlaStoreConfiguration extends IBaseConnectionConfiguration {

  @Documentation("A reference or ID to an XMLA connection configuration.")
  @Attribute() connection?: string;
  @Reference('XMLARequestParams') requestParams: XMLARequestParams = new XMLARequestParams();

  @Documentation("Indicates whether a visual editor should be used for MDX queries.")
  @Attribute() useVisualEditor?: boolean;

  @Documentation("The MultiDimensional Expressions (MDX) query string.")
  @Attribute() mdx?: string;

  @Documentation("Optional state information for drill-down operations, represented as a generic object.")
  @Attribute() drilldownState?: any;

  @Documentation("The optional interval in milliseconds to poll the XMLA source for updates.")
  @Attribute() pollingInterval?: number;
}
