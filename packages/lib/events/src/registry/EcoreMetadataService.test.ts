/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/*
 * Verhaltensbeschreibung des EcoreMetadataService.
 *
 * Die erwarteten Werte bilden das Verhalten der ursprünglichen
 * Implementierung auf Basis von org.eclipse.daanse.board.app.lib.ecore ab
 * und dienen als Referenz für die Portierung auf @emfts/core: derselbe
 * Test muss vor und nach der Portierung unverändert gelten.
 *
 * Die Zusicherungen sind bewusst runtime-neutral formuliert — sie prüfen
 * ausschließlich die öffentliche Schnittstelle des Service, nicht die
 * darunterliegende Ecore-API. Nur so bleibt der Test über den Wechsel der
 * Runtime hinweg aussagekräftig.
 *
 * Abgedeckt wird der anspruchsvollste Pfad: SystemActions.ecore
 * referenziert seinen Supertyp paketübergreifend
 * (`http://…lib.events#//SystemActionInterface`). Diese Referenz kann nur
 * aufgelöst werden, wenn EventModel.ecore zuvor in der PackageRegistry des
 * ResourceSet registriert wurde. Zusätzlich muss die Vererbung rekursiv
 * verfolgt werden: SystemActions -> SystemActionInterface ->
 * WidgetActionInterface.
 */

import { describe, it, expect, beforeAll } from 'vitest'
import { EcoreMetadataService } from './EcoreMetadataService'
import systemActionsContent from '../../model/SystemActions.ecore?raw'

describe('EcoreMetadataService', () => {
  let service: EcoreMetadataService

  beforeAll(async () => {
    service = new EcoreMetadataService()
    await service.loadModelFromString(
      'system',
      systemActionsContent,
      'http://org.eclipse.daanse.board.app.lib.events.systemactions/SystemActions.ecore',
    )
  })

  it('löst die paketübergreifende Supertyp-Referenz auf', () => {
    // Nur wenn EventModel.ecore registriert ist und die Vererbungskette
    // SystemActions -> SystemActionInterface -> WidgetActionInterface
    // rekursiv verfolgt wird, wird ueberhaupt eine Aktion gefunden.
    expect(service.extractActions('system').length).toBeGreaterThan(0)
  })

  it('findet die annotierten Operationen erbender Klassen', () => {
    const actions = service.extractActions('system')

    expect(actions.map((a) => a.methodName)).toEqual([
      'changePage',
      'setGlobalVariable',
    ])
  })

  it('ignoriert annotierte Operationen ohne WidgetActionInterface-Vererbung', () => {
    // PageActions traegt in SystemActions.ecore kein eSuperTypes, obwohl
    // setPageVariable eine WidgetAction-Annotation hat. Die Klasse wird
    // deshalb korrekt uebersprungen.
    const actions = service.extractActions('system')

    expect(actions.map((a) => a.methodName)).not.toContain('setPageVariable')
  })

  it('liest den eventType aus der WidgetAction-Annotation', () => {
    const actions = service.extractActions('system')

    expect(actions.map((a) => a.eventType)).toEqual([
      'system.changePage',
      'system.setGlobalVariable',
    ])
  })

  it('bildet Parametertypen auf TypeScript-Typen ab', () => {
    const actions = service.extractActions('system')
    const setGlobal = actions.find((a) => a.methodName === 'setGlobalVariable')

    expect(setGlobal?.parameters).toEqual([
      { name: 'variableName', type: 'string', optional: true, index: 0 },
      { name: 'value', type: 'any', optional: true, index: 1 },
    ])
  })

  it('erhält die Parameterreihenfolge inklusive Index', () => {
    const actions = service.extractActions('system')
    const changePage = actions.find((a) => a.methodName === 'changePage')

    expect(changePage?.parameters.map((p) => [p.index, p.name])).toEqual([
      [0, 'pageId'],
    ])
  })

  it('liefert für einen unbekannten Widget-Typ eine leere Aktionsliste', () => {
    expect(service.extractActions('gibtesnicht')).toEqual([])
  })

  it('gibt für eine unbekannte Payload-Klasse null zurück', () => {
    expect(service.extractPayloadMetadata('system', 'GibtEsNicht')).toBeNull()
  })

  it('extrahiert Payload-Eigenschaften einer vorhandenen Klasse', () => {
    const payload = service.extractPayloadMetadata('system', 'PageActions')

    expect(payload).not.toBeNull()
    expect(payload?.className).toBe('PageActions')
  })
})
