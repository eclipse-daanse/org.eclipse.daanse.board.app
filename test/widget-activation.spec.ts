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
 * Integrationstest des Aktivierungsmusters (B3).
 *
 * Anders als die Unit-Tests von ModuleBootstrapper und BoardServiceRegistry
 * fährt dieser Test ein echtes Widget-Paket gegen echte Registries: das
 * Sample-Widget wird aktiviert, taucht in der WidgetRepository auf, wird
 * deaktiviert und verschwindet wieder.
 *
 * Damit ist das Muster als Ganzes abgesichert - inklusive der Frage, ob ein
 * Modul seine Registrierung wirklich zurücknehmen kann. Ohne das wäre
 * deactivate eine Attrappe.
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { Container } from 'inversify'
import { BoardServiceRegistry, ModuleBootstrapper } from 'org.eclipse.daanse.board.app.lib.core'
import { WidgetRepository, WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import { EVENT_REGISTRY_ID, EVENT_ACTIONS_REGISTRY_ID } from 'org.eclipse.daanse.board.app.lib.events'

const stilleAusgabe = () => ({
  debug: () => {},
  info: () => {},
  warn: () => {},
  error: () => {},
})

/** Nimmt die Aufrufe des Sample-Widgets entgegen, ohne das Event-System hochzufahren. */
class EventRegistryDouble {
  readonly registriert = new Set<string>()
  registerWidget(typ: string) { this.registriert.add(typ) }
  unregisterWidget(typ: string) { this.registriert.delete(typ) }
}

describe('Widget-Aktivierung', () => {
  let services: BoardServiceRegistry
  let bootstrapper: ModuleBootstrapper
  let widgets: WidgetRepository
  let events: EventRegistryDouble

  beforeEach(() => {
    services = new BoardServiceRegistry(new Container())
    bootstrapper = new ModuleBootstrapper(services, stilleAusgabe())

    widgets = new WidgetRepository()
    events = new EventRegistryDouble()
    services.register(WIDGET_REPOSITORY, widgets)
    services.register(EVENT_REGISTRY_ID, events)
  })

  const sampleModul = {
    id: 'ui.vue.widget.sample',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.sample'),
  }

  it('registriert das Widget beim Aktivieren', async () => {
    expect(widgets.getWidget('SampleWidget')).toBeUndefined()

    await bootstrapper.activateAll([sampleModul])

    const konfiguration = widgets.getWidget('SampleWidget')
    expect(konfiguration).toBeDefined()
    expect(konfiguration.name).toBe('Sample')
    expect(konfiguration.supportedDSTypes).toEqual(['csv'])
    expect(konfiguration.component).toBeDefined()
    expect(konfiguration.settingsComponent).toBeDefined()
  })

  it('meldet das Widget auch beim Event-System an', async () => {
    await bootstrapper.activateAll([sampleModul])

    expect(events.registriert.has('SampleWidget')).toBe(true)
  })

  it('nimmt beide Registrierungen beim Deaktivieren zurueck', async () => {
    await bootstrapper.activateAll([sampleModul])
    await bootstrapper.deactivateAll()

    expect(widgets.getWidget('SampleWidget')).toBeUndefined()
    expect(events.registriert.has('SampleWidget')).toBe(false)
  })

  it('hinterlaesst nach Aktivieren und Deaktivieren keinen Rest', async () => {
    const vorher = Object.keys(widgets.getAllWidgets())

    await bootstrapper.activateAll([sampleModul])
    await bootstrapper.deactivateAll()

    expect(Object.keys(widgets.getAllWidgets())).toEqual(vorher)
  })

  it('laesst sich mehrfach aktivieren und deaktivieren', async () => {
    for (let durchlauf = 0; durchlauf < 3; durchlauf++) {
      await bootstrapper.activateAll([sampleModul])
      expect(widgets.getWidget('SampleWidget')).toBeDefined()

      await bootstrapper.deactivateAll()
      expect(widgets.getWidget('SampleWidget')).toBeUndefined()
    }
  })

  it('bricht ab, wenn eine benoetigte Registry fehlt', async () => {
    const ohneDienste = new ModuleBootstrapper(
      new BoardServiceRegistry(new Container()),
      stilleAusgabe(),
    )

    await expect(ohneDienste.activateAll([sampleModul])).rejects.toThrow(/sample/)
  })

  it('hat beim Import keine Wirkung', async () => {
    // Regel 1 des Modulvertrags: der Import allein darf nichts registrieren
    await import('org.eclipse.daanse.board.app.ui.vue.widget.sample')

    expect(Object.keys(widgets.getAllWidgets())).toEqual([])
  })
})

/*
 * Der Vertrag gilt für die ganze Familie, nicht nur für den Piloten. Geprüft
 * werden die Pakete, die ohne Browser-Umgebung ladbar sind - die übrigen
 * bringen Abhängigkeiten mit (Leaflet, Vanta, Monaco), die in jsdom nicht
 * initialisierbar sind, und werden im Vollbuild sowie im Dev-Server erfasst.
 */
describe('Widget-Familie', () => {
  const pakete: Array<[string, string, () => Promise<unknown>]> = [
    ['sample', 'SampleWidget', () => import('org.eclipse.daanse.board.app.ui.vue.widget.sample')],
    ['image', 'ImageWidget', () => import('org.eclipse.daanse.board.app.ui.vue.widget.image')],
    ['text.plain', 'TextWidget', () => import('org.eclipse.daanse.board.app.ui.vue.widget.text.plain')],
    ['table.data', 'DataTableWidget', () => import('org.eclipse.daanse.board.app.ui.vue.widget.table.data')],
    ['page', 'PageWidget', () => import('org.eclipse.daanse.board.app.ui.vue.widget.page')],
  ]

  it.each(pakete)('%s registriert und entfernt %s', async (id, typ, load) => {
    const services = new BoardServiceRegistry(new Container())
    const bootstrapper = new ModuleBootstrapper(services, stilleAusgabe())
    const widgets = new WidgetRepository()

    services.register(WIDGET_REPOSITORY, widgets)
    services.register(EVENT_REGISTRY_ID, new EventRegistryDouble())
    services.register(EVENT_ACTIONS_REGISTRY_ID, {
      registerWidgetType: () => {},
      unregisterWidgetType: () => {},
    })

    await bootstrapper.activateAll([{ id, load: load as never }])
    expect(widgets.getWidget(typ), `${id} hat ${typ} nicht registriert`).toBeDefined()

    await bootstrapper.deactivateAll()
    expect(widgets.getWidget(typ), `${id} hat ${typ} nicht entfernt`).toBeUndefined()
  })
})

/*
 * Die Registries werden seit B4 selbst als Module aktiviert. Dieser Test
 * prüft, dass die Reihenfolge in der Modulliste trägt: erst das Repository,
 * dann die Pakete, die sich dort eintragen. Nichts wird vorab von Hand
 * registriert.
 */
describe('Aktivierungsreihenfolge', () => {
  const registryModule = {
    id: 'lib.repository.widget',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.widget'),
  }
  const widgetModule = {
    id: 'ui.vue.widget.sample',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.sample'),
  }

  const kontext = () => {
    const services = new BoardServiceRegistry(new Container())
    services.register(EVENT_REGISTRY_ID, new EventRegistryDouble())
    return { services, bootstrapper: new ModuleBootstrapper(services, stilleAusgabe()) }
  }

  it('das Repository stellt sich selbst bereit', async () => {
    const { services, bootstrapper } = kontext()
    expect(services.has(WIDGET_REPOSITORY)).toBe(false)

    await bootstrapper.activateAll([registryModule])

    expect(services.has(WIDGET_REPOSITORY)).toBe(true)
  })

  it('ein Widget findet das zuvor aktivierte Repository', async () => {
    const { services, bootstrapper } = kontext()

    await bootstrapper.activateAll([registryModule, widgetModule])

    const repo = services.getRequired<WidgetRepository>(WIDGET_REPOSITORY)
    expect(repo.getWidget('SampleWidget')).toBeDefined()
  })

  it('bricht ab, wenn das Repository nach dem Widget stünde', async () => {
    const { bootstrapper } = kontext()

    // Falsche Reihenfolge: das Widget kommt zuerst und findet nichts vor
    await expect(
      bootstrapper.activateAll([widgetModule, registryModule]),
    ).rejects.toThrow(/sample/)
  })

  it('macht das Repository auch ueber den Container auffindbar', async () => {
    // Noch nicht umgestellte Konsumenten - AddWidgetWindow.vue,
    // WidgetSettingsWindow.vue - lesen weiterhin so.
    const container = new Container()
    const services = new BoardServiceRegistry(container)
    const bootstrapper = new ModuleBootstrapper(services, stilleAusgabe())

    await bootstrapper.activateAll([registryModule])

    expect(container.isBound(Symbol.for(WIDGET_REPOSITORY))).toBe(true)
  })
})
