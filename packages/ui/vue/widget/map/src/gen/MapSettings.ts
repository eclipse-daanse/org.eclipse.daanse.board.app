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
import {Layer} from "./Layer"
import {DSRenderer} from "./DSRenderer"
import {Renderer} from "./Renderer"
import {Service} from "./Service"
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://rg.eclipse.daanse.board.app.ui.vue.widget.map#//MapSettings'})
export class MapSettings{

  @Documentation("Optional identifier for the data source.")
  @Attribute() datasourceId?: string;

  @Documentation("Optional array of additional datasource identifiers for multi-datasource support.")
  @Attribute() datasourceIds: Array<string> = [];

  @Documentation("The URL of the base map service.")
  @Attribute() baseMapUrl: string = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";

  @Documentation("The initial zoom level of the map.")
  @Attribute() zoom: number = 14;

  @Documentation("The geographical coordinates for the center of the map (e.g., [longitude, latitude]).")
  @Attribute() center: Array<number> = [50.93115286, 11.60392726];

  @Documentation("Attribution text for the map data.")
  @Attribute() attribution?: string;
  @Reference('Layer') layers: Array<Layer> = [];
  @Reference('DSRenderer') styles: Array<DSRenderer> = [];
  @Reference('Renderer') OGCSstyles: Array<Renderer> = [];
  @Reference('Service') services: Array<Service> = [];

  @Documentation("if true maps can not be moved in viewmode")
  @Attribute() fixed?: boolean;

  // No custom toJSON needed - the standard serializer handles it with the Factory fix
}
