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
import {PubSubConnection} from ''
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://example.com/twowayconnection#//TwoWayConnection'})
export abstract class TwoWayConnection extends PubSubConnection {

  @Attribute() ready?: boolean;
  
  onMessage(data?: any,topic?: string): void {
        throw new Error("onMessage not implemented");
  }
  
  onConnect(): void {
        throw new Error("onConnect not implemented");
  }
  
  onClose(): void {
        throw new Error("onClose not implemented");
  }
  
  onError(error?: any): void {
        throw new Error("onError not implemented");
  }
  
  hasTopics(): boolean {
        throw new Error("hasTopics not implemented");
  }
}
