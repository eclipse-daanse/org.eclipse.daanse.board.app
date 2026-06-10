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
import {WidgetActionInterface} from 'org.eclipse.daanse.board.app.lib.events'
import {WidgetAction} from 'org.eclipse.daanse.board.app.lib.events'
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://org.eclipse.daanse.board.app.ui.vue.widget.routing#//RoutingWidgetInterface'})
export abstract class RoutingWidgetInterface extends WidgetActionInterface {

  @WidgetAction({eventType: 'routing.addWaypoint'})
  addWaypoint(lat: number,lon: number,name?: string): void {
        throw new Error("addWaypoint not implemented");
  }

  @WidgetAction({eventType: 'routing.removeWaypoint'})
  removeWaypoint(index: number): void {
        throw new Error("removeWaypoint not implemented");
  }

  @WidgetAction({eventType: 'routing.clearWaypoints'})
  clearWaypoints(): void {
        throw new Error("clearWaypoints not implemented");
  }

  @WidgetAction({eventType: 'routing.setCosting'})
  setCosting(costing: string): void {
        throw new Error("setCosting not implemented");
  }

  @WidgetAction({eventType: 'routing.calculateRoute'})
  calculateRoute(): void {
        throw new Error("calculateRoute not implemented");
  }
}
