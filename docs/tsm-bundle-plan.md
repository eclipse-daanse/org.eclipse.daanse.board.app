# B5 — Von Modulen zu Bundles: Declarative Services und Komponenten als Dienste

Stand: 2026-08-19 · Entschieden: **Declarative Services werden genutzt, Vue-Komponenten
werden als Dienste bereitgestellt.** Dieser Plan setzt auf dem B4-Stand auf
(112 Module mit `activate`, ein Startvorgang, Reihenfolge aus Deklarationen).

## 1. Wo wir stehen — ehrlich vermessen

Was heute „Modul" heißt, ist ein Paket mit Lebenszyklus, aber kein Bundle:

| Bundle-Eigenschaft | Stand |
|---|---|
| Manifest beim Paket | ❌ `provides`/`requires` stehen in `modules.ts`, also in der Anwendung |
| Sichtbarkeitsgrenze | ❌ 653 Wert-Importe zwischen Paketen, 52 davon Vue-Komponenten |
| Komponenten als Dienste | ❌ Komponenten werden importiert und als Objekt durchgereicht |
| Laufzeitladen | ❌ `() => import(…)` ist Code-Splitting; der Bundler kennt alle Module zur Bauzeit |
| DS-Komponentenmodell | ❌ tsms `@component`/`@activate`/`@reference` sind unbenutzt |

Was B4 geleistet hat, ist die Vorbedingung: keine Import-Nebenwirkungen mehr,
Abhängigkeiten deklariert, `deactivate` wirksam. Ohne das wäre nichts von dem
Folgenden möglich.

## 2. Was tsm mitbringt (geprüft am lokalen Stand)

- **`@component({ service, scope, immediate, configurationPid, … })`** —
  volles DS-Modell inklusive immediate/delayed, Konfigurations-Policy,
  Factory-PIDs und `@modified`. Impliziert `@injectable`.
- **Ausgeführt werden Komponenten vom `ModuleLoader`** (`ModuleLoader.ts:1821`),
  nicht von der Registry. DS nutzen heißt: unser `ModuleBootstrapper` weicht dem
  Loader. Das ist keine Zusatzoption, sondern die Konsequenz.
- **Der Loader kann statisch geladene Module übernehmen — aber heute nur über
  `window[moduleId]`** (Module-Federation-Konvention; `loadEntry` prüft diese
  Stelle vor dem URL-Import). Für 112 Module ist der globale Scope der falsche
  Ort: Namensraumverschmutzung, mögliche Kollisionen mit DOM-`id`s (der Loader
  warnt selbst davor), kein `window` in Node-Tests. Deshalb **FR-7 an tsm** ([#19](https://github.com/eclipse-daanse/org.eclipse.daanse.tsm/issues/19)):
  explizite Übergabe per `loadModule(manifest, { container })` oder
  `entryResolver`-Option. B5.1 beginnt, sobald die Antwort da ist — der
  `window`-Pfad bleibt Rückfalloption, falls tsm den Vorschlag ablehnt.
- **`requiresService` wirft heute statt zu warten** (FR-6 / #18). Für den
  Umstieg auf den Loader ist die Antwort des tsm-Teams relevant; bis dahin
  sortiert der Loader über `dependencies`, und unsere `requires`-Angaben wandern
  als `requiresService` ins Manifest — die Information ist dieselbe.

## 3. Zielbild

Ein Bundle ist ein Paket mit:

1. **Manifest im Paket** (`tsm.manifest.json` oder Feld in `package.json`):
   `id`, `provides`, `requiresService`, `exports`, `sharedDependencies`
   (vue, pinia, …).
2. **DS-Komponenten statt `activate`-Prozedur** — der Regelfall:

```typescript
@component({ service: ['ProgressWidgetProvider'], properties: { 'widget.type': 'ProgressWidget' } })
export class ProgressWidgetProvider implements WidgetProvider {
  readonly type = 'ProgressWidget'
  readonly name = 'Progress'
  readonly icon = Icon
  component() { return ProgressWidget }          // Vue-Komponente als Dienstleistung
  settingsComponent() { return ProgressWidgetSettings }
}
```

3. **Konsumenten sammeln Dienste statt Registry zu füllen:** Die
   `WidgetRepository` wird vom Sammelbecken, in das jedes Widget imperativ
   `registerWidget(...)` ruft, zum **Verfolger**: sie beobachtet
   Registrierungen mit `widget.type`-Property über `addListener` (das
   OSGi-ServiceTracker-Muster). Ein Widget-Bundle, das geht, verschwindet aus
   der Palette, ohne dass irgendwer `unregister` schreiben muss.

4. **Vue bleibt Rendering, wird aber versorgt statt verdrahtet:** Die 30
   `container.get(...)`-Stellen werden zu `inject` aus einem Provide, das der
   Host einmal aus der ServiceRegistry speist. Für modellgetriebene Formulare
   (Settings aus Ecore) ist `@emfts/vue-registry` der Kandidat — Komponenten je
   EClass/EAttribute statt handgebauter Settings-Dialoge. Das ist ein eigener
   Schritt nach dem Bundle-Umbau, kein Teil davon.

## 4. Schritte

### B5.1 — Loader statt eigenem Bootstrapper (der Pfadwechsel)

Manifeste für alle 112 Module generieren (aus `modules.ts` — die Felder sind
absichtlich gleich benannt), Container-Übergabe an den Loader (FR-7; bis zur
Antwort ist `window[id]` nur Rückfalloption), `ModuleBootstrapper` durch
`ModuleLoader` ersetzen. `modules.ts` schrumpft auf
eine Manifestliste. Erfolgskriterium: identischer Start (112 aktiv, Palette
unverändert) — nachweisbar mit dem vorhandenen Browser-Prüfskript.
**Unser Bootstrapper und die Sortierung werden gelöscht** — sie waren
Übergangswerkzeug, und tsm übernimmt.

### B5.2 — DS-Pilot: die Widget-Familie (24 Pakete, homogen)

`WidgetProvider`-Schnittstelle in einem neuen API-Paket, `WidgetRepository`
auf Tracker umbauen (mit Rückwärts-API für die Übergangszeit), die 24 Widgets
auf `@component` umstellen. Die `EventRegistry`-Anmeldungen wandern in
dieselbe Komponente (`@activate`/`@deactivate`-Methoden). Danach dasselbe für
die 23 Typ-Registrierungen (Datasource/Connection/Composer-UI) und die 14
Factories (`scope: 'transient'`-Komponenten oder registrierte Funktionen —
Pilot entscheidet).

### B5.3 — Sichtbarkeitsgrenze

API-Pakete abtrennen (Typen dürfen importiert werden — 201 Typ-Importe sind
unkritisch), Wert-Importe zwischen Bundles durch Dienste ersetzen,
`tsm:`-Importe für Bundle-zu-Bundle-Bezüge, `sharedDependencies` für vue/pinia
über die Import-Map. Das ist der teuerste Schritt (653 Wert-Importe), aber er
ist **pro Familie** machbar, nicht nur als Ganzes.

### B5.4 — Echtes Nachladen

`entry`-URLs statt `window`-Übergabe, Bundles als eigene Vite-Builds,
Hot Reload und die `gene`-DevTools-Konsole. Erst hier wird aus dem
Monorepo-Build ein Installationsmodell.

## 5. Reihenfolge-Begründung

Loader zuerst (B5.1), weil DS-Komponenten nur er ausführt — jede
`@component`-Umstellung vor dem Loader-Wechsel wäre toter Code. Widgets als
Pilot (B5.2), weil die Familie homogen ist und der Tracker-Umbau der
`WidgetRepository` das Muster für alle übrigen Registries liefert.
Sichtbarkeit (B5.3) danach, weil sie ohne laufende DS-Dienste nichts zu
ersetzen hätte.

## 6. Aufwandsbild (Module nach Registrierungsart, B4-Auszählung)

| Art | n | DS-Form |
|---|---:|---|
| Widgets | 24 | `@component` + Provider-Schnittstelle (Pilot) |
| Typ-Registrierung mit Vue-Teilen | 23 | `@component` + Provider je Typ |
| Factories | 14 | transiente Komponente oder registrierte Funktion |
| i18n-Ressourcen | 11 | `@component` mit `@activate` (immediate) |
| Singletons | 14 | `@component({ service: [...] })` — der einfachste Fall |
| Sonstige (events, persistence, plugins, …) | 26 | einzeln, meist `@component` mit Lebenszyklus |

## 7. Offene Punkte an tsm

- FR-6/#18 (`unsatisfied` statt `error`) wird mit dem Loader-Umstieg akut.
- Verhalten von `getAll`/Listenern für das Tracker-Muster ist vorhanden
  (`addListener` mit `registered`/`unregistered`) — kein FR nötig.
- Für `sharedDependencies`/Import-Map existiert `generateImportMap` mit
  semver-Prüfung — B5.4-Material.
