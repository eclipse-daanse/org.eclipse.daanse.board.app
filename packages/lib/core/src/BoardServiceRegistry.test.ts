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
 * Die Registry muss waehrend der Umstellung beide Welten bedienen: Dienste
 * aus umgestellten Paketen (tsm-Registry) und aus noch nicht umgestellten
 * (Inversify). Diese Tests beschreiben die Bruecke in beide Richtungen.
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { Container } from 'inversify'
import { BoardServiceRegistry } from './BoardServiceRegistry'

describe('BoardServiceRegistry', () => {
  let container: Container
  let services: BoardServiceRegistry

  beforeEach(() => {
    container = new Container()
    services = new BoardServiceRegistry(container)
  })

  describe('eigene Dienste', () => {
    it('gibt einen registrierten Dienst zurueck', () => {
      const dienst = { name: 'widget-repository' }
      services.register('WidgetRepository', dienst)

      expect(services.get('WidgetRepository')).toBe(dienst)
      expect(services.has('WidgetRepository')).toBe(true)
    })

    it('erzeugt gebundene Singletons genau einmal', () => {
      let aufrufe = 0
      services.bind('Zaehler', () => ({ n: ++aufrufe }), { scope: 'singleton' })

      expect(services.get('Zaehler')).toBe(services.get('Zaehler'))
      expect(aufrufe).toBe(1)
    })

    it('erzeugt transiente Bindungen bei jedem Zugriff neu', () => {
      let aufrufe = 0
      services.bind('Frisch', () => ({ n: ++aufrufe }), { scope: 'transient' })

      expect(services.get('Frisch')).not.toBe(services.get('Frisch'))
      expect(aufrufe).toBe(2)
    })

    it('meldet unbekannte IDs als nicht vorhanden', () => {
      expect(services.get('GibtEsNicht')).toBeUndefined()
      expect(services.has('GibtEsNicht')).toBe(false)
    })

    it('wirft bei getRequired fuer einen unbekannten Dienst', () => {
      expect(() => services.getRequired('GibtEsNicht')).toThrow()
    })
  })

  describe('Rueckfallweg auf Inversify', () => {
    it('findet einen nur in Inversify gebundenen Dienst', () => {
      const alt = { name: 'aus-inversify' }
      container.bind(Symbol.for('AltDienst')).toConstantValue(alt)

      expect(services.get('AltDienst')).toBe(alt)
      expect(services.has('AltDienst')).toBe(true)
    })

    it('loest ueber getRequired auch aus Inversify auf', () => {
      const alt = { name: 'aus-inversify' }
      container.bind(Symbol.for('AltDienst')).toConstantValue(alt)

      expect(services.getRequired('AltDienst')).toBe(alt)
    })

    it('bevorzugt den eigenen Dienst vor dem aus Inversify', () => {
      const alt = { quelle: 'inversify' }
      const neu = { quelle: 'tsm' }
      container.bind(Symbol.for('Doppelt')).toConstantValue(alt)
      services.register('Doppelt', neu)

      expect(services.get('Doppelt')).toBe(neu)
    })

    it('nutzt Symbol.for als gemeinsamen Namensraum', () => {
      // Genau die Konvention, die die Anwendung bisher verwendet
      const repository = { widgets: [] }
      container.bind(Symbol.for('WidgetRepository')).toConstantValue(repository)

      expect(services.get('WidgetRepository')).toBe(repository)
    })

    it('meldet nicht vorhanden, wenn die Aufloesung in Inversify scheitert', () => {
      // Gebunden, aber nicht aufloesbar - die Abhaengigkeit fehlt
      const kaputt = Symbol.for('Kaputt')
      container.bind(kaputt).toDynamicValue(() => {
        throw new Error('Abhaengigkeit fehlt')
      })

      expect(services.get('Kaputt')).toBeUndefined()
    })

    it('findet klassenbasierte Inversify-Bindungen nicht', () => {
      // Dokumentiert die bekannte Grenze: fuer container.bind(Klasse) gibt es
      // kein Symbol, ueber das die Bruecke greifen koennte. Solche Bindungen
      // sind paketintern.
      class CsvStore {}
      container.bind(CsvStore).toSelf()

      expect(services.get('CsvStore')).toBeUndefined()
    })
  })

  describe('Abschaltbarkeit des Rueckfallwegs', () => {
    it('verhaelt sich ohne Inversify-Bindungen wie die reine tsm-Registry', () => {
      // Wenn das letzte Paket umgestellt ist, findet der Rueckfallweg nichts
      // mehr - die Registry ist dann ersatzlos durch DefaultServiceRegistry
      // zu ersetzen.
      services.register('Nur', { a: 1 })

      expect(services.get('Nur')).toEqual({ a: 1 })
      expect(services.get('Sonst')).toBeUndefined()
      expect(services.getServiceIds()).toContain('Nur')
    })
  })

  describe('Aufraeumen', () => {
    it('entfernt einen eigenen Dienst wieder', () => {
      services.register('Weg', { a: 1 })
      expect(services.has('Weg')).toBe(true)

      services.unregister('Weg')

      expect(services.get('Weg')).toBeUndefined()
    })
  })
})
