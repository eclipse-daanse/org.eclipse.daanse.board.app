# Feature Requests an tsm

Ziel-Repository: <https://github.com/eclipse-daanse/org.eclipse.daanse.tsm>
Getestet gegen: `@eclipse-daanse/tsm@0.0.1-next.2`
Kontext: Einführung von tsm als Service-Registry der Daanse Board App
([Umsetzungsplan](./emfts-tsm-umsetzungsplan.md), Strang B)

Grundsatz für dieses Projekt: Fehlendes wird nach tsm gemeldet, nicht lokal
umgangen. Was hier steht, sind die Punkte, an denen wir beim Einbau tatsächlich
angestoßen sind — keine Wunschliste.

---

## FR-1 — Rückfall-Resolver für die schrittweise Migration

**Problem.** Eine bestehende Anwendung stellt ihre Pakete nicht an einem Tag auf
tsm um. Während der Übergangszeit müssen bereits umgestellte Pakete Dienste
finden, die noch in der alten DI-Lösung registriert sind — sonst ist nur ein
Big-Bang möglich.

**Heutiger Umweg.** Wir leiten von `DefaultServiceRegistry` ab und überschreiben
`get` und `has`:

```typescript
export class BoardServiceRegistry extends DefaultServiceRegistry {
  constructor(private readonly legacyContainer: Container) { super() }

  override get<T>(id: string, _resolving?: Set<string>): T | undefined {
    return super.get<T>(id, _resolving) ?? this.getFromLegacyContainer<T>(id)
  }

  override has(id: string): boolean {
    return super.has(id) || this.isBoundInLegacyContainer(id)
  }
}
```

Das funktioniert, koppelt uns aber an interne Details (siehe FR-2).

**Vorschlag.** Ein optionaler Resolver im Konstruktor:

```typescript
interface FallbackResolver {
  has(id: string): boolean
  get<T>(id: string): T | undefined
}

new DefaultServiceRegistry({ fallback?: FallbackResolver })
```

Die Registry fragt ihn genau dann, wenn eine ID intern unbekannt ist — auch bei
der Abhängigkeitsauflösung in `bindClass`. Damit wird die schrittweise Migration
zu einer unterstützten Betriebsart statt zu einem Vererbungstrick, und der
Rückfallweg lässt sich am Ende ersatzlos entfernen.

**Nutzen über unseren Fall hinaus.** Jede Anwendung, die von Inversify, tsyringe
oder InversifyJS-ähnlichen Containern auf tsm wechselt, braucht genau das.

---

## FR-2 — `get()` hat einen internen Parameter, der nicht im Interface steht

**Beobachtung.** Das Interface `ServiceRegistry` deklariert:

```typescript
get<T>(id: string): T | undefined
```

`DefaultServiceRegistry` implementiert aber:

```typescript
get<T>(id: string, _resolving?: Set<string>): T | undefined
```

Der zweite Parameter dient der Zyklenerkennung bei der Abhängigkeitsauflösung.
Wer die Klasse ableitet und `get` überschreibt, muss ihn kennen und
durchreichen — sonst bricht die Auflösung verschachtelter `@inject`-Ketten still
ab. Aus dem Interface geht das nicht hervor, aus der Signatur nur durch den
Unterstrich-Präfix, der üblicherweise „ungenutzt" bedeutet.

**Vorschlag.** Entweder den Zustand in eine private Methode verlagern, sodass die
öffentliche `get`-Signatur dem Interface entspricht, oder den Parameter
dokumentieren und im Interface führen. Erste Variante wäre uns lieber — dann ist
`get` sauber überschreibbar. Mit FR-1 verliert der Punkt allerdings an Gewicht,
weil wir dann gar nicht mehr ableiten müssten.

---

## FR-3 — `exports` deckt nur den ESM-Pfad ab

**Problem.** `package.json` deklariert:

```json
"exports": {
  ".":      { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
  "./vite": { "types": "./dist/vite/index.d.ts", "import": "./dist/vite/index.js" }
}
```

Es gibt weder einen `require`- noch einen `default`-Eintrag. Wird das Paket auf
einem CommonJS-Pfad angefordert — was in Testläufern und Node-Werkzeugen
regelmäßig passiert, etwa wenn ein abhängiges Paket selbst als CJS geladen
wird — bricht die Auflösung ab:

```
Error: No "exports" main defined in .../node_modules/@eclipse-daanse/tsm/package.json
```

Bei uns trat das auf, sobald ein Vitest-Lauf ein Workspace-Paket über seinen
CJS-Einstieg lud, das seinerseits `@eclipse-daanse/tsm` importiert.

**Vorschlag.** Entweder einen CJS-Build ergänzen und als `require` eintragen,
oder — wenn das Paket bewusst ESM-only bleiben soll — zumindest einen
`default`-Eintrag setzen, damit die Fehlermeldung aussagekräftig wird
(„ESM-only" statt „no exports main defined"). Ersteres wäre für Konsumenten in
gemischten Monorepos deutlich angenehmer.

**Umgehung bei uns.** Kein lokaler Patch am Paket — wir lassen Tests über
Alias auf die Quellen der Workspace-Pakete zeigen, wodurch der CJS-Pfad gar
nicht erst betreten wird. Das war ohnehin fällig, weil derselbe CJS/ESM-Bruch
den DI-Container doppelt entstehen ließ.

---

## FR-4 — Aufzählbarkeit fremder Bindungen (klein, optional)

`getServiceIds()` liefert die IDs der eigenen Registry. Für Diagnosezwecke
(„welche Dienste kennt die Anwendung gerade?") wäre es hilfreich, wenn ein
Fallback-Resolver aus FR-1 optional auch eine Aufzählung beisteuern könnte:

```typescript
interface FallbackResolver {
  has(id: string): boolean
  get<T>(id: string): T | undefined
  ids?(): string[]        // optional
}
```

Geringe Priorität — nur für Diagnose relevant.

---

## Ausdrücklich *kein* Feature Request

Beim Abgleich mit dem, was unsere Anwendung an Inversify tatsächlich nutzt, haben
sich diese anfänglichen Bedenken erledigt:

| Erwartet als Lücke | Ergebnis |
|---|---|
| `toFactory` (29 Verwendungen) — Factories mit Argumenten | Kein Problem. `register(id, fn)` nimmt beliebige Werte, also auch eine parametrierte Factory. Der Umweg über eine eigene Factory-Bindung entfällt sogar. |
| `multiInject` (2 Verwendungen) | `getAll(idPattern)` mit Wildcard deckt den Fall ab. |
| `tagged` / `named` (2 / 3 Verwendungen) | Kein Äquivalent — betrifft aber ausschließlich `RootService`, der im Projekt auskommentiert und ungenutzt ist. Kein Bedarf. |
| Scopes `singleton` / `transient` | Vollständig vorhanden, inklusive Auflösungsreihenfolge `options.scope` > Decorator > Default. |
| Konstruktor-Injektion | Vorhanden und getestet (`decorators.test.ts`, `integration.test.ts`). |

`DefaultServiceRegistry` deckt den Funktionsumfang ab, den diese Anwendung
braucht. Die offenen Punkte betreffen ausschließlich die **Migration** dorthin,
nicht den Zielzustand.

---

## FR-5 — Vite-Plugin prüft `tsm:`-Importe nicht gegen das Manifest

**Eingereicht als [#17](https://github.com/eclipse-daanse/org.eclipse.daanse.tsm/issues/17).**

Das Plugin transformiert jeden `tsm:`-Import, hält ihn aber nicht gegen die
`dependencies` des Moduls. Code und Manifest sind damit zwei unabhängige
Wahrheiten; eine Abweichung fällt erst zur Laufzeit auf.

```typescript
import { GEO_SERVICE } from 'tsm:plugin-a'   // Build läuft durch
```
```json
{ "dependencies": [] }                        // plugin-a fehlt — niemand merkt es
```

Zur Laufzeit findet `__tsm__.require('plugin-a')` nichts, und das Modul
aktiviert nicht.

**Warum das Plugin die richtige Stelle ist:** `transformTsmImports()` entnimmt
die Modul-ID bereits jedem `tsm:`-Spezifizierer — genau die Information, die
eine Prüfung braucht. Das Manifest kennt das Plugin dagegen gar nicht; das Wort
kommt in `src/vite/plugin.ts` kein einziges Mal vor.

Vorgeschlagen: optionales Manifest als Plugin-Option, Fehler bei nicht
deklarierten Importen, Warnung bei toten Deklarationen. Typ-Importe bleiben
ausgenommen — sie hinterlassen keine Laufzeitspur, und genau das macht
paketübergreifende Typisierung ohne Bundling möglich.

**Warum uns das betrifft:** Bei rund 130 Paketen wird die Paarung „was der Code
importiert" und „was das Manifest deklariert" von Hand über jedes Modul hinweg
gepflegt. Das driftet — und zwar still, weil Tests korrekt aufsetzen. Die
Prüfung in den Build zu ziehen ist der Unterschied zwischen einer Fehlerklasse,
die nicht auftreten kann, und einer, die im Betrieb auffällt.

---

## FR-6 — `requiresService` wartet nicht, sondern scheitert

**Eingereicht als [#18](https://github.com/eclipse-daanse/org.eclipse.daanse.tsm/issues/18).**

`requiresService` ist heute eine Vorbedingung, die wirft — keine Bedingung, die
wartet. Ein Modul, dessen Pflichtdienst noch nicht da ist, landet dauerhaft in
`error`, auch wenn der Dienst Sekunden später erscheint. `ModuleState` kennt
keinen Wartezustand:

```
'registered' | 'resolving' | 'loading' | 'activating' | 'active' | 'deactivating' | 'stopped' | 'error'
```

**Die Folge:** Die Ladereihenfolge bleibt Aufgabe des Aufrufers. Genau das war
bei uns der Fall — `modules.ts` war eine handsortierte Liste (Registries
zuerst, dann Layouts, dann was Layouts nachschlägt), und der Bootstrap zerfällt
in drei Phasen, weil ein Paket beim Laden eine Verbindung anlegt. Das ist
Abhängigkeitsauflösung von Hand, obwohl die Manifeste die Information tragen.

**Nachtrag: wir haben Schritt 1 lokal gebaut — und er trägt.** `ModuleEntry`
hat jetzt `provides` und `requires` (bewusst so benannt wie im Manifest), und
der Bootstrapper leitet daraus die Reihenfolge ab. Zwei Beobachtungen, die für
den Entwurf interessant sein dürften:

1. **Der Aufwand ist gering.** Eine topologische Sortierung über
   `provides`/`requires`, stabil gegenüber der Eingabereihenfolge, sind rund
   40 Zeilen. Die Zyklenerkennung fällt dabei ab.
2. **Unbekannte Dienste dürfen nicht blockieren.** Von den acht Diensten, die
   unsere 75 Module auflösen, stammen sechs aus noch nicht umgestellten
   Paketen. Ein Auflöser, der jeden unbekannten Dienst als Fehler wertet, wäre
   während einer Migration unbenutzbar. Wir behandeln sie als extern und
   lassen sie die Reihenfolge nicht beeinflussen — für tsm entspräche das dem
   Unterschied zwischen `unsatisfied` (wartet) und `error` (scheitert).

Belegt ist das über einen Umkehrtest: mit der umgekehrten Modulliste bricht
der Start ohne die Sortierung an `WidgetRepository` ab und läuft mit ihr
vollständig durch. Damit ist unsere handsortierte Startliste weg — die
Phasentrennung in `main.ts` bleibt allerdings, weil sie an Paketen hängt, die
beim Import Nebenwirkungen haben. Der zweite Teil dieses FR (Benachrichtigung
beim Wegfall) bleibt davon unberührt.

Die Gegenrichtung fehlt ebenso: Verschwindet ein Dienst — und `deactivate`
entfernt seit B3 wirklich etwas —, behalten Konsumenten ihre Referenz.

**Was OSGi hier macht:** Declarative Services erzeugt eine Komponente mit
unerfüllter Pflicht-`@Reference` gar nicht erst und aktiviert sie automatisch,
sobald der Dienst erscheint. Beim Wegfall wird sie benachrichtigt
(`policy=dynamic`) oder abgebaut und neu erzeugt (`policy=static`). Niemand
sortiert eine Startliste von Hand.

**Vorgeschlagen:** ein Zustand `unsatisfied` statt sofortigem `error`, plus
Benachrichtigung beim Wegfall. Beide Bausteine existieren bereits —
`checkRequirements()` berechnet `{ satisfied, missing }`, und
`ServiceRegistry.addListener()` meldet `registered`/`unregistered`. Es fehlt
die Verbindung zwischen beiden.

Uns ist bewusst, dass das tsm vom Modullader Richtung Komponentenlaufzeit
verschiebt — das ist eine Designentscheidung und keine Kleinigkeit. Eingereicht,
weil bereits Schritt 1 die handsortierten Startlisten überflüssig macht — was
der Nachtrag oben inzwischen praktisch zeigt.
