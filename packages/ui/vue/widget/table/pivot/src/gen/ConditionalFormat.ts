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
import {VariableWrapper} from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://www.example.org/PivotTable#//ConditionalFormat'})
export class ConditionalFormat {

  @Attribute() id?: string;

  @Attribute() conditionType: string = "greaterThan";

  @Attribute() priority?: number;

  @Attribute() value1: string = "0";

  @Attribute() value2: string = "100";
  @Reference('VariableWrapper') backgroundColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') textColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') minColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') maxColor: VariableWrapper<string> = new VariableWrapper<string>();

  @Attribute() fontWeight: number = 400;
}
