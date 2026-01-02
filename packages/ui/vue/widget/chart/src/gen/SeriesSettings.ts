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

@ModelClass({type:'http://www.example.org/chartsettings#//SeriesSettings'})
export class SeriesSettings {
  @Reference('VariableWrapper') seriesIndex: VariableWrapper<number> = new VariableWrapper<number>();
  @Reference('VariableWrapper') label: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') chartType: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') xAxisId: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') yAxisId: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') borderColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') backgroundColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') borderWidth: VariableWrapper<number> = new VariableWrapper<number>();
  @Reference('VariableWrapper') borderDash: VariableWrapper<any> = new VariableWrapper<any>();
  @Reference('VariableWrapper') fill: VariableWrapper<boolean> = new VariableWrapper<boolean>();
  @Reference('VariableWrapper') showPoints: VariableWrapper<boolean> = new VariableWrapper<boolean>();
  @Reference('VariableWrapper') pointColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') pointSize: VariableWrapper<number> = new VariableWrapper<number>();
}
