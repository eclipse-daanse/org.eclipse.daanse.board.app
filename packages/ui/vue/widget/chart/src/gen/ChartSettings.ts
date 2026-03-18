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

@ModelClass({type:'http://www.example.org/chartsettings#//ChartSettings'})
export class ChartSettings {

  @Documentation("Per-series configuration (chart type, x-axis assignment, styling)")
  @Attribute() seriesSettings: Array<any> = [];
  @Reference('VariableWrapper') chartType: VariableWrapper<string> = new VariableWrapper<string>();

  @Documentation("Orientation for bar charts: 'vertical' or 'horizontal'")
  @Attribute() barOrientation: string = "vertical";

  @Documentation("Enable stacked bars")
  @Attribute() stacked: boolean = false;
  @Reference('VariableWrapper') borderColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') borderWidth: VariableWrapper<number> = new VariableWrapper<number>();
  @Reference('VariableWrapper') borderDash: VariableWrapper<any> = new VariableWrapper<any>();
  @Reference('VariableWrapper') backgroundColor: VariableWrapper<string> = new VariableWrapper<string>();

  @Documentation("Enable fill under line/area")
  @Attribute() fill: boolean = false;

  @Documentation("Show points on line chart")
  @Attribute() showPoints: boolean = true;
  @Reference('VariableWrapper') pointColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') pointSize: VariableWrapper<number> = new VariableWrapper<number>();

  @Documentation("Show horizontal grid lines")
  @Attribute() showHorizontalGrid: boolean = true;
  @Reference('VariableWrapper') horizontalGridColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') horizontalGridWidth: VariableWrapper<number> = new VariableWrapper<number>();

  @Documentation("Show vertical grid lines")
  @Attribute() showVerticalGrid: boolean = true;
  @Reference('VariableWrapper') verticalGridColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') verticalGridWidth: VariableWrapper<number> = new VariableWrapper<number>();

  @Documentation("Enable draggable annotations in edit mode")
  @Attribute() annotationsEditMode: boolean = false;

  @Documentation("Horizontal reference lines (Y-axis values)")
  @Attribute() horizontalLines: Array<any> = [];

  @Documentation("Vertical reference lines (X-axis values)")
  @Attribute() verticalLines: Array<any> = [];

  @Documentation("Horizontal boxes/areas (Y-axis ranges)")
  @Attribute() horizontalBoxes: Array<any> = [];

  @Documentation("Vertical boxes/areas (X-axis ranges)")
  @Attribute() verticalBoxes: Array<any> = [];
  @Reference('VariableWrapper') dateDisplayFormat: VariableWrapper<string> = new VariableWrapper<string>();
}
