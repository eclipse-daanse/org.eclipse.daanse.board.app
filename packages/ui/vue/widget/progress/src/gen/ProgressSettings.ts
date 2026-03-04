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
import {HorizontalAlign} from "./HorizontalAlign"
import {VerticalAlign} from "./VerticalAlign"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://www.example.org/progresswidgets#//ProgressSettings'})
export class ProgressSettings {
  @Reference('VariableWrapper') progress: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') fillColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') gradientColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') backgroundColor: VariableWrapper<string> = new VariableWrapper<string>();

  @Documentation("A flag indicating whether the progress bar should use a gradient color.")
  @Attribute() isGradient: boolean = false;

  @Documentation("A flag indicating whether the progress bar is oriented vertically.")
  @Attribute() isVertical: boolean = false;
  @Reference('VariableWrapper') rotation: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') min: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') max: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') textColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') barThickness: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') borderRadius: VariableWrapper<string> = new VariableWrapper<string>();

  @Documentation("The horizontal alignment of the value text.")
  @Enum('HorizontalAlign') valueAlign: HorizontalAlign = HorizontalAlign.LEFT;

  @Documentation("The vertical alignment of the value text.")
  @Enum('VerticalAlign') valueJustify: VerticalAlign = VerticalAlign.TOP;
}
