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
import {IconSettings} from "./IconSettings"
import {PointPin} from "./PointPin"
import {MapProps} from "./MapProps"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://org.eclipse.daanse.board.app.ui.vue.widget.map#//PointAndAreaSettings'})
export class PointAndAreaSettings {

  @Documentation("Optional flag to show or hide sub-elements.")
  @Attribute() show_SubElements?: boolean;

  @Documentation("Specifies how points should be rendered (e.g., 'icon', 'pin').")
  @Attribute() point_render_as?: string;

  @Documentation("Optional property to use for point rendering.")
  @Attribute() point_prop?: string;
  @Reference('IconSettings') point?: IconSettings;
  @Reference('PointPin') pointPin?: PointPin;
  @Reference('MapProps') area?: MapProps;

  @Documentation("Optional settings for labels. (Mapped from TypeScript 'any' type).")
  @Attribute() label?: any;

  @Documentation("Minimum zoom level at which icons are visible. Below this zoom level, icons are hidden.")
  @Attribute() iconMinZoom?: number;

  @Documentation("Enable scaling of icons based on zoom level. Icons shrink when zooming out.")
  @Attribute() iconScaleWithZoom?: boolean;

  @Documentation("The zoom level at which icons are rendered at full size (scale=1). Below this, icons shrink proportionally.")
  @Attribute() iconFullSizeZoom?: number;

  @Documentation("Minimum zoom level at which labels/tooltips are visible. Below this zoom level, labels are hidden.")
  @Attribute() labelMinZoom?: number;

  @Documentation("Enable scaling of labels based on zoom level. Labels shrink when zooming out.")
  @Attribute() labelScaleWithZoom?: boolean;

  @Documentation("The zoom level at which labels are rendered at full size (scale=1). Below this, labels shrink proportionally.")
  @Attribute() labelFullSizeZoom?: number;

  @Documentation("Enable clustering of markers when zoomed out. Below clusterBelowZoom, nearby markers are grouped into a single marker showing the count.")
  @Attribute() clusterEnabled?: boolean;

  @Documentation("Zoom level below which markers are clustered. At and above this zoom level, individual markers are shown.")
  @Attribute() clusterBelowZoom?: number;

  @Documentation("Pixel radius used to group nearby markers into a cluster.")
  @Attribute() clusterRadius?: number;
}
