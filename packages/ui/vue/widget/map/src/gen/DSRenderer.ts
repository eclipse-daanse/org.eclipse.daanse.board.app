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
import {Observation} from "./Observation"
import {PointAndAreaSettings} from "./PointAndAreaSettings"
import {ERefType} from "./ERefType"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://org.eclipse.daanse.board.app.ui.vue.widget.map#//DSRenderer'})
export class DSRenderer {

  @Documentation("The name of the data stream renderer.")
  @Attribute() name?: string;
  @Reference('Condition') datastream: Array<Condition> = [];
  @Reference('Observation') observations: Array<Observation> = [];
  @Reference('PointAndAreaSettings') renderer: PointAndAreaSettings = new PointAndAreaSettings();

  @Documentation("A unique identifier for the data stream renderer.")
  @Attribute() id?: string;

  @Documentation("The type of reference or placement (e.g., 'Thing', 'ObservedArea').")
  @Enum('ERefType') placement: ERefType = ERefType.Thing;
}
