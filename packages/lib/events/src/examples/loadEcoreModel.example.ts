/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

/**
 * Example: Loading Widget Actions from Ecore Model
 *
 * This example demonstrates how to use the Ecore-based Event Action system
 * to dynamically load widget actions from an .ecore file.
 */

import { container } from 'org.eclipse.daanse.board.app.lib.core';
import {
  EventActionsRegistry,
  EVENT_ACTIONS_REGISTRY,
  EcoreMetadataService,
  ECORE_METADATA_SERVICE
} from '../index';
import { getEcorePackage } from 'org.eclipse.daanse.board.app.lib.ecore';

export async function loadWidgetActionsFromEcore() {
  // Get the services from the container
  const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);
  const ecoreService = container.get<EcoreMetadataService>(ECORE_METADATA_SERVICE);

  // Example 1: Load from URI (fetch)
  try {
    await actionsRegistry.registerWidgetTypeFromEcore('MapWidget', 'model/model.ecore');
    console.log('✅ MapWidget actions loaded from Ecore model');
  } catch (error) {
    console.error('Failed to load MapWidget actions:', error);
  }

  // Example 2: Load from string (like your example)
  try {
    const data = await fetch('Conference.ecore');
    const dataAsText = await data.text();
    console.log(dataAsText);

    // Get the ResourceSet and register Ecore package
    const ecorePackage = getEcorePackage();
    const resourceSet = ecoreService.getResourceSet();
    resourceSet.getPackageRegistry().registerPackage(ecorePackage);

    // Load the model from string
    await actionsRegistry.registerWidgetTypeFromEcoreString(
      'ConferenceWidget',
      dataAsText,
      'conference.ecore'
    );

    console.log('✅ ConferenceWidget actions loaded from Ecore model');

    // Get the registered actions
    const widgetType = actionsRegistry.getWidgetType('ConferenceWidget');
    console.log('Registered actions:', widgetType?.actions);
  } catch (error) {
    console.error('Failed to load ConferenceWidget actions:', error);
  }

  // Example 3: Extract actions manually using EcoreMetadataService
  try {
    const data = await fetch('MyWidget.ecore');
    const dataAsText = await data.text();

    // Load the model
    await ecoreService.loadModelFromString('MyWidget', dataAsText, 'mywidget.ecore');

    // Extract actions
    const actions = ecoreService.extractActions('MyWidget');
    console.log('Extracted actions from MyWidget:', actions);

    // actions will have this structure:
    // [
    //   {
    //     methodName: 'zoomToThing',
    //     eventType: 'map.zoomToThing',
    //     parameters: [
    //       { name: 'thingId', type: 'string', optional: false, index: 0 },
    //       { name: 'zoom', type: 'number', optional: true, index: 1 },
    //       { name: 'duration', type: 'number', optional: true, index: 2 }
    //     ]
    //   }
    // ]
  } catch (error) {
    console.error('Failed to extract MyWidget actions:', error);
  }
}

// Example of the Ecore model structure that the system expects:
/*
<?xml version="1.0" encoding="UTF-8"?>
<ecore:EPackage xmi:version="2.0"
                xmlns:xmi="http://www.omg.org/XMI"
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore"
                name="MapSettings"
                nsURI="http://org.eclipse.daanse.board.app.ui.vue.widget.map"
                nsPrefix="MapSettings">

    <eClassifiers xsi:type="ecore:EClass" name="MapWidgetInterface" abstract="true">
        <eOperations name="zoomToThing">
            <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
                <details key="eventType" value="map.zoomToThing"/>
            </eAnnotations>
            <eParameters name="thingId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="1"/>
            <eParameters name="zoom" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="16"/>
            <eParameters name="duration" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="1000"/>
        </eOperations>
    </eClassifiers>

</ecore:EPackage>
*/
