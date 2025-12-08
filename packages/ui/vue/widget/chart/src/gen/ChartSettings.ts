/*
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
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
export class SeriesSettings{
  // Series Identifier
  @Documentation("Index of the dataset/series (0-based)")
  @Reference('VariableWrapper') seriesIndex: VariableWrapper<number> = new VariableWrapper<number>(0);

  // Series Label/Title
  @Documentation("Custom label/title for this series (overrides default dataset label)")
  @Reference('VariableWrapper') label?: VariableWrapper<string>;

  // Chart Type per Series
  @Documentation("Chart type for this series: 'bar', 'line', 'radar', 'pie', 'doughnut', 'polarArea'")
  @Reference('VariableWrapper') chartType: VariableWrapper<string> = new VariableWrapper<string>('bar');

  // Axis Assignment
  @Documentation("ID of the X-axis this series should use (e.g., 'x', 'x1', 'x2')")
  @Reference('VariableWrapper') xAxisId: VariableWrapper<string> = new VariableWrapper<string>('x');

  @Documentation("ID of the Y-axis this series should use (e.g., 'y', 'y1', 'y2')")
  @Reference('VariableWrapper') yAxisId: VariableWrapper<string> = new VariableWrapper<string>('y');

  // Styling
  @Documentation("Border color for this series (e.g., '#FF6384', 'rgba(255,99,132,1)')")
  @Reference('VariableWrapper') borderColor?: VariableWrapper<string>;

  @Documentation("Background color for this series (e.g., 'rgba(75, 192, 192, 0.2)')")
  @Reference('VariableWrapper') backgroundColor?: VariableWrapper<string>;

  @Documentation("Border width in pixels")
  @Reference('VariableWrapper') borderWidth?: VariableWrapper<number>;

  @Documentation("Border dash pattern (e.g., [5, 5] for dashed, [] for solid)")
  @Reference('VariableWrapper') borderDash?: VariableWrapper<number[]>;

  @Documentation("Enable fill under line/area")
  @Reference('VariableWrapper') fill?: VariableWrapper<boolean>;

  // Point Styling (for line charts)
  @Documentation("Show points on line chart")
  @Reference('VariableWrapper') showPoints?: VariableWrapper<boolean>;

  @Documentation("Point color")
  @Reference('VariableWrapper') pointColor?: VariableWrapper<string>;

  @Documentation("Point size (radius in pixels)")
  @Reference('VariableWrapper') pointSize?: VariableWrapper<number>;
}

@ModelClass({type:'http://www.example.org/chartsettings#//ChartSettings'})
export class ChartSettings{
  // Series-specific settings
  @Documentation("Per-series configuration (chart type, x-axis assignment, styling)")
  @Attribute() seriesSettings: Array<SeriesSettings> = [];
  // Chart Type
  @Documentation("Chart type: 'bar', 'line', 'radar', 'pie', 'doughnut', 'polarArea'")
  @Reference('VariableWrapper') chartType: VariableWrapper<string> = new VariableWrapper<string>('bar');

  // Dataset Styling
  @Documentation("Border color for lines/bars (e.g., '#FF6384', 'rgba(255,99,132,1)')")
  @Reference('VariableWrapper') borderColor: VariableWrapper<string> = new VariableWrapper<string>('rgba(75, 192, 192, 1)');

  @Documentation("Border width in pixels")
  @Reference('VariableWrapper') borderWidth: VariableWrapper<number> = new VariableWrapper<number>(2);

  @Documentation("Border dash pattern (e.g., [5, 5] for dashed, [] for solid)")
  @Reference('VariableWrapper') borderDash: VariableWrapper<number[]> = new VariableWrapper<number[]>([]);

  @Documentation("Background fill color (e.g., 'rgba(75, 192, 192, 0.2)')")
  @Reference('VariableWrapper') backgroundColor: VariableWrapper<string> = new VariableWrapper<string>('rgba(75, 192, 192, 0.2)');

  @Documentation("Enable fill under line/area")
  @Reference('VariableWrapper') fill: VariableWrapper<boolean> = new VariableWrapper<boolean>(false);

  // Point Styling (for line charts)
  @Documentation("Show points on line chart")
  @Reference('VariableWrapper') showPoints: VariableWrapper<boolean> = new VariableWrapper<boolean>(true);

  @Documentation("Point color")
  @Reference('VariableWrapper') pointColor: VariableWrapper<string> = new VariableWrapper<string>('rgba(75, 192, 192, 1)');

  @Documentation("Point size (radius in pixels)")
  @Reference('VariableWrapper') pointSize: VariableWrapper<number> = new VariableWrapper<number>(3);

  // Grid Lines
  @Documentation("Show horizontal grid lines")
  @Reference('VariableWrapper') showHorizontalGrid: VariableWrapper<boolean> = new VariableWrapper<boolean>(true);

  @Documentation("Horizontal grid line color")
  @Reference('VariableWrapper') horizontalGridColor: VariableWrapper<string> = new VariableWrapper<string>('rgba(0, 0, 0, 0.1)');

  @Documentation("Horizontal grid line width")
  @Reference('VariableWrapper') horizontalGridWidth: VariableWrapper<number> = new VariableWrapper<number>(1);

  @Documentation("Show vertical grid lines")
  @Reference('VariableWrapper') showVerticalGrid: VariableWrapper<boolean> = new VariableWrapper<boolean>(true);

  @Documentation("Vertical grid line color")
  @Reference('VariableWrapper') verticalGridColor: VariableWrapper<string> = new VariableWrapper<string>('rgba(0, 0, 0, 0.1)');

  @Documentation("Vertical grid line width")
  @Reference('VariableWrapper') verticalGridWidth: VariableWrapper<number> = new VariableWrapper<number>(1);

  // Annotations (Lines and Boxes)
  @Documentation("Enable draggable annotations in edit mode")
  @Reference('VariableWrapper') annotationsEditMode: VariableWrapper<boolean> = new VariableWrapper<boolean>(false);

  @Documentation("Horizontal reference lines (Y-axis values)")
  @Attribute() horizontalLines: Array<{value: number, color: string, width: number, label?: string}> = [];

  @Documentation("Vertical reference lines (X-axis values)")
  @Attribute() verticalLines: Array<{value: number | string, color: string, width: number, label?: string}> = [];

  @Documentation("Horizontal boxes/areas (Y-axis ranges)")
  @Attribute() horizontalBoxes: Array<{yMin: number, yMax: number, color: string, label?: string}> = [];

  @Documentation("Vertical boxes/areas (X-axis ranges)")
  @Attribute() verticalBoxes: Array<{xMin: number | string, xMax: number | string, color: string, label?: string}> = [];

  // Date/Time Formatting
  @Documentation("Date/time display format for X-axis labels (e.g., 'dd.MM.yyyy', 'yyyy-MM-dd HH:mm', 'HH:mm:ss')")
  @Reference('VariableWrapper') dateDisplayFormat: VariableWrapper<string> = new VariableWrapper<string>('dd.MM.yyyy HH:mm');
}
