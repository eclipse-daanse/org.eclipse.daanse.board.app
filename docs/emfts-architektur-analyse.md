# Architekturanalyse Board App × EMFTs

Stand: 2026-08-11 · Analysierte Quellen:
- Board App: dieses Repo (`packages/**`, `tools/**`) — 136 Pakete
- EMFTs: `/mnt/.../EMFTs` — ~45 Teilprojekte rund um `@emfts/core`

Ziel des Dokuments: (1) architektonische Schwachstellen der Board App benennen,
(2) zeigen, welche davon die EMFTs-Projekte bereits gelöst haben, (3) einen
gestuften Umbauvorschlag machen.

---

## 1. Ausgangslage in Zahlen

| | Board App | EMFTs |
|---|---|---|
| Pakete | 136 (`packages/lib`, `packages/ui/vue`, `packages/app`) | ~45 Repos |
| Ecore-Modelle | 41 `.ecore` | Metamodell + Codecs |
| Generierte Dateien | 193 unter `src/gen/**` | `@emfts/codegen` |
| Eigene Ecore-Runtime | `packages/lib/ecore` — 294 Dateien, ~26.000 LOC | `@emfts/core` — 72 Dateien, ~16.400 LOC |
| Codegenerator | `tools/generator/main.js` — **14.572 Zeilen, eine Datei** | `@emfts/codegen` — 5.728 LOC, 38 Dateien |
| Settings-UIs | 61 `*Settings.vue`, 10.742 LOC handgeschrieben | `@emfts/vue-registry` (modellgetrieben) |
| Modulsystem | keines zur Laufzeit | `@eclipse-daanse/tsm` — 5.994 LOC |

Der zentrale Befund: **Die Board App ist modellgetrieben gedacht, aber nur zur
Buildzeit modellgetrieben.** Zur Laufzeit gibt es kein Modell — nur POJOs,
Pinia-Stores und `flatted`-Dumps. Genau die Laufzeitschicht ist das, was EMFTs
liefert.

---

## 2. Architektonische Schwachstellen

### S1 — Zwei parallele Ecore-Runtimes, eine davon faktisch tot

`packages/lib/ecore` ist eine vollständige EMF-Runtime (BasicEObject, EList/EMap,
Notification, XMLCodec, BinaryCodec, ECodecRegistry, ETreeIterator) — ~26.000
LOC, offensichtlich aus einer Go-Portierung (`masagroup/ecore`) übernommen,
inklusive mitgelieferter `.d.ts`-Dateien neben den `.ts`-Quellen.

Genutzt wird davon: **ein einziger Konsument.**

```
packages/lib/events/src/registry/EcoreMetadataService.ts
packages/lib/events/src/examples/loadEcoreModel.example.ts
```

Alles andere ist unbenutzter Ballast, der mitgebaut, mitgetestet (355 Dateien inkl.
Tests) und mitgewartet werden muss. Parallel existiert mit `@emfts/core` eine
zweite, aus Java-EMF portierte TypeScript-Runtime derselben Organisation
(Eclipse Fennec), veröffentlicht auf npm, mit 27 namensgleichen Kerndateien.

**Konsequenz:** Doppelte Wartung, zwei divergierende Semantiken für dasselbe
Metamodell, kein gemeinsames Ökosystem.

### S2 — Ecore endet beim Codegenerator; zur Laufzeit gibt es kein Modell

Die 41 `.ecore`-Modelle werden über `tools/generator/scan-and-generate.js` in
plain TypeScript-Klassen mit Decorators übersetzt:

```typescript
// packages/lib/connection/base/src/gen/BaseConnection.ts
@ModelClass({type:'http://example.com/baseconnection#//BaseConnection'})
export abstract class BaseConnection {
  @Attribute() name?: string;
  @Attribute() type?: string;
  @Attribute() uid?: string;
}
```

Das Ergebnis ist **kein `EObject`**. Es gibt kein `eGet`/`eSet`, keine
`EClass`-Reflexion, keine Notifications, keine Containment-Semantik, keine
`Resource`. Die `@Attribute()`-Decorators speichern nur ein `Reflect`-Flag
(`packages/lib/annotations/src/ModelAnnotations.ts` — 40 Zeilen, drei Metadaten-Keys).

Damit fällt praktisch der gesamte Nutzen von MDA weg: Alles, was ein
Metamodell zur Laufzeit ermöglichen würde — generische Editoren, Validierung,
Undo/Redo, Diff/Merge, stabile Serialisierung, Migration — muss von Hand
nachgebaut werden. Und wird es auch (siehe S3, S5, S6).

Die Namespace-URIs zeigen zusätzlich, dass die Modelle nie als
Registry-Identitäten gedacht waren: `http://example.com/baseconnection`.

### S3 — Board-Persistenz ist ein `flatted`-Dump des Laufzeitzustands

`packages/app/default/src/pages/SaveLoad.vue` serialisiert den Zustand, indem es
Pinia-Stores einsammelt und durch `flatted.stringify` schiebt:

```typescript
const data = {
  layout: layoutStore.layout,
  datasources: stores.dataSources,
  conections: conections.connections,   // sic
  widgets: widgets.widgets,
  variables, pages, eventMappings,
}
return stringify(data)
```

Das hat mehrere Folgeprobleme, die im Code bereits sichtbar sind:

- **Kein stabiles Format.** Der Ladepfad enthält vier Fallbacks für verschiedene
  Kodierungsvarianten desselben Boards, mit Kommentaren wie
  `//false format serialized be flatted ?` und
  `// Downloaded boards are double-encoded: a flatted string that JSON.stringify wrapped again.`
- **Keine Versionierung / Migration.** Ein Board aus einer älteren App-Version
  hat keine definierte Semantik.
- **Keine Referenzintegrität.** Zusammenhänge zwischen Widget → Datasource →
  Connection sind implizite String-IDs, nicht auflösbare Referenzen. Ein
  Löschvorgang kann verwaiste IDs hinterlassen, ohne dass es jemand merkt.
- **Der Serialisierer kennt das Modell nicht.** Was der Store zufällig hält,
  landet in der Datei — inklusive UI-Zustand und abgeleiteter Daten.
- Der Tippfehler `conections` ist damit ein **Bestandteil des Dateiformats**.

### S4 — Registrierung per Import-Seiteneffekt auf einen globalen Singleton-Container

`packages/lib/core/src/index.ts` exportiert einen global geteilten
Inversify-`Container`. Jedes Paket registriert sich beim Import selbst:

```typescript
// packages/lib/repository/widget/src/index.ts
const identifier = Symbol.for('WidgetRepository')
console.log('Refistering WidgetRepository', container)   // sic
if (!container.isBound(identifier)) {
  container.bind<WidgetRepository>(identifier).to(WidgetRepository).inSingletonScope()
}
```

`packages/app/default/src/main.ts` besteht in der Folge zu großen Teilen aus
~110 Zeilen nebenwirkungsgetriebener `import '…'`-Anweisungen. Die Probleme:

- **Reihenfolgeabhängig und unausgesprochen.** Der Code dokumentiert das selbst:
  `// Import router AFTER all packages are loaded so routes can be registered`.
- **Race Condition.** `loadPackages()` wird ohne `await` aufgerufen (Zeile 68),
  während darunter synchron Registries abgefragt werden. Dass das funktioniert,
  ist Timing-Glück, keine Architektur.
- **Kein Lifecycle.** Es gibt kein `deactivate`, kein Entladen, kein
  kontrolliertes Neuladen. `RootService.activate()` existiert, ist aber in
  `bootstrap.ts` auskommentiert.
- **Nicht testbar / nicht mehrfach instanziierbar.** Ein Prozess = ein Board.
- **Fehler werden verschluckt:** `boot()` fängt jeden Init-Fehler mit
  `console.warn` ab und läuft weiter — mit halb initialisiertem Container.
- Hartkodierte Demo-Daten liegen in `main.ts` (`'Seite 1'`, `'Seite 2'`).

### S5 — Kein Plugin-System: 136 Pakete, alles Compile-Time

`packages/app/default/package.json` listet ~120 Workspace-Abhängigkeiten auf —
jedes Widget, jede Datasource, jede Connection einzeln. Ein Board ohne
Map-Widget baut trotzdem Leaflet mit ein; ein Drittanbieter-Widget erfordert
einen Fork der App.

Gleichzeitig existiert `@eclipse-daanse/tsm` (**bereits unter dem
`@eclipse-daanse`-Scope!**) mit exakt der fehlenden Funktionalität: Manifest,
`activate`/`deactivate`, `ServiceRegistry`, `DependencyResolver` mit SemVer und
Zyklenerkennung, Shared Libraries, Hot Reload, Vite-Plugin. Der bestehende
`docs/mdx-workbench-integration-plan.md` erkennt das bereits an und stellt fest,
dass die Schnittlinien in beiden Welten identisch sind
(`SetupI.init(container)` ↔ `activate(context)`, `Symbol.for(…)` ↔ Service-ID).

### S6 — 61 handgeschriebene Settings-Dialoge trotz vorhandener Modelle

10.742 Zeilen `*Settings.vue`, davon allein `ChartWidgetSettings.vue` mit 1.099
Zeilen und `MapsWidgetSettings.vue` mit 826. Für dieselben Widgets liegt das
Konfigurationsmodell bereits als `.ecore` vor
(`packages/ui/vue/widget/chart/model/model.ecore`).

Jedes neue Widget kostet damit einen kompletten Handdialog — Formularlayout,
Zweiwegbindung, Defaults, Validierung, i18n. Jede Modelländerung muss an zwei
Stellen nachgezogen werden, ohne dass ein Compiler das erzwingt.

### S7 — Der Codegenerator ist ein 14.572-Zeilen-Monolith

`tools/generator/main.js` ist eine einzelne JavaScript-Datei ohne Typisierung,
ohne Tests, mit EJS-Templates. Sie ist der Single Point of Failure für 193
generierte Dateien in 41 Modellen. Die Aufrufkonvention ist bereits
projektspezifisch verdrahtet:

```
node main.js -m <model> -g <gen> --no_factories -a org.eclipse.daanse.board.app.lib.annotations -i
```

`@emfts/codegen` löst dasselbe Problem in 5.728 typisierten LOC über 38 Dateien,
mit CLI, mehreren Generierungsmodi (plain / decorator / EMF-style),
`.genconfig.xmi`-Konfiguration und Tests.

### S8 — Der Build ist an der Belastungsgrenze

```json
"build": "NODE_OPTIONS=\"--max-old-space-size=65536\" SKIP_TYPE_CHECK=true turbo run build --concurrency=20"
```

**64 GB Heap und abgeschaltete Typprüfung** im Standard-Build. 135 einzelne
Vite-Lib-Builds für 136 Pakete, jeder mit eigener nahezu identischer
`vite.config.ts` (deswegen existieren `fix-vite-configs.sh` und
`optimize-vite-configs.sh` im Repo-Root). Typfehler werden also erst im
separaten `type-check` sichtbar — oder gar nicht.

### S9 — Kein Undo/Redo, keine Modellvalidierung

Eine Suche nach Undo/Redo findet nur editor-internes Undo im Rich-Text-Widget.
Für ein Dashboard-Authoring-Tool ist das eine harte funktionale Lücke, die ohne
Modellschicht auch nicht nachrüstbar ist.

Validierung existiert nur ad-hoc und pro Datasource verstreut. Es gibt keinen
Ort, an dem die Frage „ist dieses Board konsistent?" beantwortet wird.

### S10 — Layering-Verletzung

`packages/lib/factory/variableWrapper/package.json` hängt von
`org.eclipse.daanse.board.app.ui.vue.composables` ab — die einzige `lib → ui`-Kante.
Ansonsten ist die Schichtung sauber (kein `vue` in `lib/**`), diese eine Kante
verhindert aber, dass `lib` headless (Node, Tests, Server-Rendering) läuft.

---

## 3. Was EMFTs dagegen bereits anbietet

| Schwachstelle | EMFTs-Projekt | Was es liefert |
|---|---|---|
| S1, S2 | **`@emfts/core`** | EMF-Runtime: `EObject` mit `eGet`/`eSet`, `EClass`-Reflexion, `EFactory`, `EPackage.Registry`, Notification, `Resource`/`ResourceSet`, XMI- und JSON-Codec, `EcoreUtil`, `EValidator`/`Diagnostic` |
| S3 | **`@emfts/core`** (`Resource`, JSON/XMI) | Definiertes Serialisierungsformat mit `nsURI`-Identität, auflösbaren Referenzen, Proxy-Resolution, Containment-Semantik |
| S3 | **`@emfts/codec.jsonschema`** | JSON Schema ⇄ EPackage — validierbares, dokumentiertes Boardformat für externe Tools |
| S5 | **`@eclipse-daanse/tsm`** | Laufzeit-Modulsystem: Manifest, `activate`/`deactivate`, ServiceRegistry, SemVer-Auflösung, Shared Libs, Hot Reload, Vite-Plugin |
| S6 | **`@emfts/vue-registry`** | Prioritätsbasierte Vue-3-Komponentenregistry für Modellelemente: `@ForEClass`, `@ForEAttribute`, `@ForEEnum`, `@ForFeature`, Default-Editoren für EString/EInt/EBoolean/EDate/EEnum/EReference, Composables `useEObject`, `useFeatureValue` |
| S6 | **`model-ui`** | Referenz-Anwendung eines generischen modellgetriebenen Editors |
| S7 | **`@emfts/codegen`** | Ecore→TS-Generator mit CLI, Modi, `.genconfig.xmi`, Tests |
| S9 | **`@emfts/command`** | Portierung von `org.eclipse.emf.common.command` + `edit.command`: `CommandStack`, `BasicEditingDomain`, `Add/Remove/Set/Move/Replace/Delete/Copy/CreateChildCommand`, `Copier` — Undo/Redo praktisch geschenkt, sobald das Modell ein EMF-Modell ist |
| S9 | **`ocl-engine` + `ocl-model`** | OCL-Constraints gegen EObject-Modelle mit Diagnostics — deklarative Board-Validierung |
| — | **`emfts-compare`** | Diff/Merge auf Modellebene: sinnvolle Board-Versionierung in Git statt Textdiffs auf `flatted`-Zeilen |
| — | **`emfts-flow` / `-runtime` / `-editor`** | Modellierter Datenfluss-Graph mit Runtime und Editor — deckt sich stark mit dem, was das Event-System (`lib/events`) heute selbst baut |
| — | **`emfts-esb-*`** | Message-/Transport-/Routing-Schicht (WS, AMQP, NATS) inkl. Transform-Pipeline — relevant für Live-Datenquellen |
| — | **`@emfts/odata`** | OData-CSDL ⇄ Ecore: eine ganze Datasource-Familie modellgetrieben statt handgeschrieben |
| — | **`emfts-qvt*` / `emfts-xbase` / `feel-langium`** | Modelltransformation und Ausdruckssprachen — Ersatz für `ComputedVariable`-Ad-hoc-Logik |
| — | **`@emfts/mcp`** | MCP-Server über `ResourceSet` — Board-Modelle werden für LLM-Tooling zugänglich |

Bemerkenswert: Das Event-System der Board App (`packages/lib/events`) ist der
einzige Teil, der bereits mit einer Ecore-Runtime zur Laufzeit arbeitet
(`EcoreMetadataService` lädt `EventModel.ecore` per `?raw`, baut ein
`EResourceSet`, liest `EClass`/`EOperation`/`EAnnotation` reflektiv aus). **Der
Weg ist also intern schon einmal gegangen worden und funktioniert** — nur eben
gegen die eigene Runtime statt gegen `@emfts/core`.

---

## 4. Zielarchitektur

```
┌──────────────────────────────────────────────────────────────┐
│  App-Shell (packages/app/default)                            │
│  Vue + Router + Theme. Kennt keine Widgets.                  │
└──────────────────────────┬───────────────────────────────────┘
                           │ tsm: activate/deactivate
┌──────────────────────────┴───────────────────────────────────┐
│  Modul-/Plugin-Schicht  (@eclipse-daanse/tsm)                │
│  Widgets, Datasources, Connections, Composer als Module      │
│  mit Manifest + Service-IDs, zur Laufzeit ladbar             │
└──────────────────────────┬───────────────────────────────────┘
                           │
┌──────────────────────────┴───────────────────────────────────┐
│  Modellschicht (@emfts/core)                                 │
│  Board = Resource. Widget/Datasource/Connection/Variable     │
│  = EObjects. Ein ResourceSet pro Board.                      │
│  ├─ @emfts/command  → Undo/Redo, EditingDomain               │
│  ├─ ocl.engine      → Constraints/Validierung                │
│  ├─ emfts-compare   → Diff/Merge, Board-Versionierung        │
│  └─ Resource JSON   → das Boardformat (versioniert)          │
└──────────────────────────┬───────────────────────────────────┘
                           │ EClass-Reflexion
┌──────────────────────────┴───────────────────────────────────┐
│  Generische UI (@emfts/vue-registry)                         │
│  Settings-Dialoge werden aus dem Modell abgeleitet.          │
│  Handdialoge nur noch als bewusste Überschreibung.           │
└──────────────────────────────────────────────────────────────┘
```

Leitprinzip: **Ein Board ist ein Modell, kein Objektgraph.** Alles andere folgt
daraus — Speichern, Laden, Undo, Validieren, Vergleichen, Editieren.

---

## 5. Vorschlag in fünf Stufen

Die Stufen sind so geschnitten, dass jede für sich Wert liefert und
zurückgerollt werden kann. Keine Stufe erfordert einen Big-Bang.

### Stufe 0 — Entscheiden und Ballast abwerfen (klein, sofort)

1. **Festlegen: `@emfts/core` ist die eine Ecore-Runtime.** `packages/lib/ecore`
   wird nicht weiterentwickelt.
2. `packages/lib/events` (der einzige Konsument) auf `@emfts/core` umstellen.
   `EcoreMetadataService` nutzt `EResourceSet`, `EPackage`, `EClass`,
   `EOperation`, `EAnnotation` — alles hat in `@emfts/core` direkte Entsprechungen.
3. `packages/lib/ecore` löschen (~26.000 LOC, 355 Dateien, ein Build weniger).
4. `nsURI`-Konvention festlegen und die 41 Modelle von `http://example.com/...`
   auf `https://eclipse.dev/daanse/board/<bereich>/<name>/1.0` migrieren.
   Das ist die Voraussetzung für jede Registry- und Persistenzarbeit danach.
5. Layering-Verletzung `lib.factory.variableWrapper → ui.vue.composables` auflösen.

*Ergebnis: eine Runtime statt zwei, ~26 kLOC weniger, stabile Modellidentitäten.*

### Stufe 1 — Generator ablösen (mittel)

`tools/generator/main.js` durch `@emfts/codegen` ersetzen. Der EMF-Style-Modus
erzeugt echte `EObject`-Implementierungen — das ist die Brücke zu Stufe 2.

Vorgehen: `.genconfig.xmi` pro Paket, ein Modell als Pilot (Vorschlag:
`lib/connection/rest` — klein, gut isoliert), Diff der Ausgabe prüfen, dann die
restlichen 40 nachziehen. Der alte Generator bleibt bis zum Abschluss lauffähig.

Sollte `@emfts/codegen` Lücken haben, die `main.js` abdeckt (z.B. das
`--no_factories`-Verhalten oder das Annotations-Paket), gehören diese als Beitrag
nach `@emfts/codegen` — nicht zurück in den Monolithen.

*Ergebnis: getesteter, typisierter, geteilter Generator statt 14,5 kLOC Einzeldatei.*

### Stufe 2 — Das Board wird ein Modell (der eigentliche Umbau)

1. Ein `Board.ecore` als Wurzelmodell: `Board` enthält `pages`, `widgets`,
   `datasources`, `connections`, `variables`, `eventMappings` als
   **Containment-Referenzen**; Widget→Datasource→Connection werden zu echten
   `EReference`s statt String-IDs.
2. Die bestehenden Paketmodelle werden per `EPackage.Registry` eingehängt —
   das ist genau der Punkt, an dem die `nsURI`-Sanierung aus Stufe 0 sich auszahlt.
3. Laden/Speichern läuft über `Resource` (JSON-Codec) statt `flatted`.
   Ein Format-Migrator liest die Altformate einmalig ein und schreibt Resource-JSON.
4. Pinia-Stores werden zu **Sichten** auf das Modell (via Notification-Adapter),
   nicht mehr zur Quelle der Wahrheit. Die vier Stores sind zusammen nur ~320
   LOC — der Umbau ist überschaubar.

Das ist die teuerste Stufe. Sie ist aber die Voraussetzung für alles, was danach
kommt, und sie beseitigt S3 vollständig.

*Ergebnis: definiertes, versionierbares, referenzintegres Boardformat.*

### Stufe 3 — Die Gratis-Gewinne einsammeln (klein, sobald Stufe 2 steht)

Sobald das Board ein EMF-Modell ist, sind die folgenden Punkte im Wesentlichen
Integrationsarbeit statt Entwicklung:

- **Undo/Redo** über `@emfts/command`: `BasicEditingDomain` + `CommandStack`,
  alle Modelländerungen laufen über Commands. Löst S9.
- **Validierung** über `ocl-engine`: Constraints als OCL an den `EClass`en
  (`Widget muss eine auflösbare Datasource haben`, `Variable-Namen eindeutig`),
  Ergebnis als `Diagnostic` in der UI.
- **Board-Diff** über `emfts-compare`: sinnvolle Vergleiche zweier
  Board-Versionen aus dem Git-Repository, statt Textdiff auf einer flatted-Zeile.

### Stufe 4 — Generische Settings-UI (großer Hebel)

`@emfts/vue-registry` einführen. Neue Widgets bekommen **gar keinen**
Settings-Dialog mehr — der wird aus dem Modell abgeleitet. Bestehende Dialoge
werden nur dort migriert, wo sie im Wesentlichen Feld-für-Feld-Formulare sind
(die Mehrzahl der 61); komplexe Spezialdialoge (Chart-Serien, Map-Renderer)
bleiben als bewusste `registerForEClass`-Überschreibung erhalten.

Realistisches Ziel: von 10.742 LOC auf deutlich unter die Hälfte, bei
gleichzeitig konsistenterem Erscheinungsbild und automatischer i18n über die
GenModel-Documentation-Annotationen.

### Stufe 5 — Echtes Plugin-System (tsm)

Die Schnittlinien sind bereits richtig (`SetupI.init(container)` entspricht
`activate(context)`). Zu tun:

1. Nebenwirkungsimporte durch explizite `activate(context)`-Funktionen ersetzen —
   das beseitigt S4 unabhängig davon, ob tsm danach kommt.
2. `main.ts` von ~110 Importzeilen auf eine Modulliste reduzieren.
   Demo-Seiten (`'Seite 1'`) raus.
3. tsm-Manifeste ergänzen; Widgets/Datasources/Connections werden zur Laufzeit
   ladbar. Damit werden Drittanbieter-Widgets möglich, ohne die App zu forken.
4. Nebeneffekt auf S8: Die App-Shell hängt nicht mehr an 120 Paketen, der
   Build wird pro Modul unabhängig — `SKIP_TYPE_CHECK` und die 64 GB Heap
   sollten damit entfallen können.

---

## 6. Was ich *nicht* vorschlage

- **Keine Migration aller 61 Settings-Dialoge auf einmal.** Die generische UI
  muss sich an neuen Widgets beweisen, bevor Bestehendes angefasst wird.
- **Kein Umstieg auf `emfts-esb-*` oder `emfts-flow` als Pflicht.** Beides ist
  interessant für Event-System und Live-Daten, aber es sind eigene Projekte mit
  eigenem Reifegrad; sie gehören nach Stufe 3 evaluiert, nicht vorher eingeplant.
- **Kein Löschen von `packages/lib/ecore` vor der Umstellung von `lib/events`.**
  Reihenfolge in Stufe 0 einhalten.
- **`@emfts/odata` und `@emfts/mcp` sind Chancen, keine Voraussetzungen.**

## 7. Empfohlener nächster Schritt

Stufe 0 ist billig, risikoarm und schafft die Grundlage für alles Weitere.
Konkret als erstes: `EcoreMetadataService` auf `@emfts/core` portieren und
prüfen, ob `@emfts/core` alle dort genutzten APIs abdeckt. Das ist eine
überschaubare Datei und beantwortet gleichzeitig die entscheidende Frage, ob
`@emfts/core` als alleinige Runtime tragfähig ist — bevor irgendetwas Großes
darauf aufsetzt.
