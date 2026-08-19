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
- **Der `window[moduleId]`-Pfad in `loadEntry` verschwindet:** Module
  Federation war nie Teil von tsm und wird entfernt, mit ihr der
  `window`-Zugriff (Auskunft tsm-Team). Für die Migrationsrichtung dieses
  Plans ist das ohne Belang — der Loader lädt hier ausschließlich echte
  Bundles per URL. **FR-7 /
  [#19](https://github.com/eclipse-daanse/org.eclipse.daanse.tsm/issues/19)**
  (explizite Container-Übergabe) bleibt als Testbarkeits-Wunsch offen, ist
  aber keine Abhängigkeit mehr.
- **Der Loader nimmt eine fremde Registry** (`options.serviceRegistry`).
  Bootstrapper und Loader können deshalb parallel laufen und in dieselbe
  `BoardServiceRegistry` schreiben — dasselbe Brückenmuster wie beim
  Inversify-Übergang.
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

## 4. Schritte — vertikal statt horizontal

Die erste Fassung dieses Plans wollte horizontal vorgehen: alle 112 Module in
den Loader heben (vorgeladen, ohne URLs), dann DS, dann Sichtbarkeit, zuletzt
echte Bundles. Das hätte alle Module in einen Zwischenzustand gebracht, den
der letzte Schritt ein zweites Mal anfasst — und das eigentliche Risiko
(geteilte Abhängigkeiten, Import-Grenze) erst am Ende aufgedeckt.

**Beschlossen ist die Gegenrichtung:** Pakete werden einzeln zu echten,
URL-geladenen Bundles. Der Loader lädt von Anfang an nur Echtes; der alte
Bootstrapper behält den Rest und stirbt durch Leere — wie zuvor der
Inversify-Rückfallweg.

### B5.1 — Loader neben dem Bootstrapper aufsetzen

`ModuleLoader` mit unserer `BoardServiceRegistry` instanziieren
(`options.serviceRegistry`), Start in `main.ts`: erst
`bootstrapper.activateAll(modules)` für den statischen Bestand, dann
`loader.loadAll()` für die (anfangs leere) Bundle-Liste. Kein Modul wird
angefasst.

### B5.2 — Pilot: ein Widget als echtes Bundle  ✔ durchgeführt

Ergebnis: **Das Zielbild trägt.** `ui.vue.widget.progress` läuft als
URL-geladenes Bundle (75 KB, nichts Geteiltes enthalten), als
`@component` mit Konstruktor-Injektion und `@activate`/`@deactivate` für die
Event-Registrierungen. Die `WidgetRepository` ist Tracker statt Sammelbecken.
Nachgewiesen im Browser: Palette folgt dem Bundle (unload → weg, load →
zurück), die Reload-Brücke tauscht nach einem Quelltext-Speichern in ~1 s
live aus, und die Komponente rendert in der Host-Vue-Instanz (Scoped Styles,
Reaktivität).

Zwei Befunde für die Familien-Ausrollung: (1) Der Tracker muss über
Referenz-Properties synchronisieren, nicht über das Ereignisobjekt — eine
Komponenten-Registrierung ist lazy, ihre Instanz existiert beim
`registered`-Ereignis noch nicht. (2) `platform.compat` teilt übergangsweise
die acht Workspace-Pakete, die Bundles noch brauchen — jede Zeile dort ist
Schuld mit Fälligkeit: wird eines davon selbst ein Bundle, wandert seine
Zeile dorthin.

Ursprünglicher Text:



Ein Widget (Vorschlag: `ui.vue.widget.progress` — homogen, überschaubar,
ersetzbar) bekommt:

- eigenen Vite-Build (`vite build --lib`), der **vue/pinia externalisiert**
  und aus dem Dienstzugriff kommend keine Wert-Importe in den Host hat.
  Die String-Konstanten (`WIDGET_REPOSITORY`, `EVENT_REGISTRY_ID`) werden zu
  Literalen bzw. wandern in ein API-Paket mit reinen Typen — der einzige
  nötige Schnitt, und er ist klein
- ein `tsm.manifest.json` mit `entry`-URL, `provides`, `requiresService`,
  `sharedDependencies`
- DS-Form: `@component`-Provider statt `activate`-Prozedur; die
  `WidgetRepository` bekommt fürs Pilotpaket den Tracker-Pfad
  (`addListener` auf `widget.type`-Property)
- Import-Map im Host (`generateImportMap` aus tsm), damit das Bundle Vue vom
  Host bezieht — **eine** Vue-Instanz, nicht zwei

Erfolgskriterium: Das Widget erscheint in der Palette, funktioniert im Board,
übersteht `unloadModule`/`loadModule` zur Laufzeit (Verschwinden aus der
Palette inklusive), und der Eintrag ist aus `modules.ts` gelöscht. **Der
Pilot beweist oder widerlegt das Zielbild, bevor 111 weitere folgen.**

### B5.3 — Familienweise nachziehen  · Widgets ✔

**Die Widget-Familie ist vollständig umgezogen: 24 von 24.** 21 per
Generator (derselbe stolperte über dieselben Fallen wie die B4-Skripte plus
zwei neue — kommabehaftete Arrays, verschachtelte Interface-Klammern; jede
vom Einzel-Build gefangen), `sample`/`page` von Hand, `map`+`geojson_renderer`
als Paar zum Schluss.

Das Paar erbrachte den Nachweis für **Bundle-zu-Bundle-API-Sharing**: `map`
veröffentlicht seine öffentliche API in `@activate` als geteilte Bibliothek
(Capability im Manifest), `geojson_renderer` — jetzt eine reine
Lebenszyklus-Komponente — registriert seinen Renderer in `map`s
DataPointRegistry. Erkenntnis dabei: **der src-Baum eines Bundles ist keine
Schnittstelle** — die vier tief importierten .vue-Teile wurden in `map`s
öffentliche API gehoben. Zweite Erkenntnis: nackte Seiteneffekt-Importe
geteilter Module überleben die Plugin-Umschreibung (FR-8/#20, Workaround in
den Bundle-Configs markiert).

Stand: 87 statische Module, 25 Bundles + 2 Plattform-Module.

**Es folgen:**

Reihenfolge nach Homogenität und Kopplungsarmut: übrige 23 Widgets, dann
Typ-Registrierungen (Datasource/Connection/Composer-UI, 23), i18n (11),
Factories (14), Singletons (14), Sonstige (26). Je Familie: Wert-Importe
kappen (API-Pakete für Typen), eigener Build, Manifest, DS-Form, Eintrag aus
`modules.ts` raus. Die Registries werden dabei nacheinander auf das
Tracker-Muster umgebaut.

### B5.4 — Bootstrapper löschen

Wenn `modules.ts` leer ist: `ModuleBootstrapper`, Sortierung und die
`provides`/`requires`-Felder an `ModuleEntry` entfernen. Hot Reload und die
`gene`-Konsole kommen mit dem Loader von selbst; danach Inversify-Brücke
prüfen — zu dem Zeitpunkt dürfte auch der Vue-Service-Locator-Rest (30
Dateien) klein genug sein, um den Container ganz zu entfernen.

## 5. Reihenfolge-Begründung

Der Pilot zuerst, weil er die einzige offene Existenzfrage beantwortet: trägt
ein extern gebautes Bundle mit geteiltem Vue im Zusammenspiel mit dem
statischen Rest? Alles Weitere ist Wiederholung des Pilotmusters. Der
Loader-Beistellbetrieb (B5.1) ist bewusst trivial — er ändert nichts am
Bestand und schafft nur den Ort, an dem Bundles ankommen.

**Damit hängt kein Schritt mehr an #19.** FR-6/#18 (`unsatisfied` statt
`error`) bleibt relevant: ein Bundle, dessen Pflichtdienst im statischen
Bestand liegt, muss auf ihn warten können, falls die Startreihenfolge je
kippt — bis dahin startet der Bootstrapper schlicht vor dem Loader.

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
