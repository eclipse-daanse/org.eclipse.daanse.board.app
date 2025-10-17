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

@ModelClass({type:'http://rg.eclipse.daanse.board.app.ui.vue.widget.map#//PointAndAreaSettings'})
export class PointAndAreaSettings{

  @Documentation("Optional flag to show or hide sub-elements.")
  @Attribute() show_SubElements?: boolean;

  @Documentation("Specifies how points should be rendered (e.g., 'icon', 'pin', 'image').")
  @Attribute() point_render_as?: string;

  @Documentation("Optional property to use for point rendering.")
  @Attribute() point_prop?: string;

  @Documentation("Optional URL for point image rendering.")
  @Attribute() point_image_url?: string;

  @Documentation("Optional size for point image rendering (in pixels).")
  @Attribute() point_image_size?: number;
  @Reference('IconSettings') point: IconSettings = new IconSettings();
  @Reference('PointPin') pointPin: PointPin = new PointPin();
  @Reference('MapProps') area: MapProps = new MapProps();

  @Documentation("Optional settings for labels. (Mapped from TypeScript 'any' type).")
  @Attribute() label?: any;
}
