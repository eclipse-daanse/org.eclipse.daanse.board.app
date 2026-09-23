# Umsetzungsplan: EMFTs-Core und tsm

Stand: 2026-08-11 · Branch: `feat/architecture-emfts-tsm` (von `main`)
Grundlage: [`emfts-architektur-analyse.md`](./emfts-architektur-analyse.md)

Einstieg laut Absprache: **wir beginnen mit tsm und emfts.** Das entspricht Stufe 0
(EMFTs-Core) und Stufe 5 (tsm) der Analyse. Beide werden hier zu zwei parallelen
Strängen ausgearbeitet.

---

## 1. Warum die beiden Stränge parallel laufen können

| | Strang A — EMFTs-Core | Strang B — tsm |
|---|---|---|
| Ebene | Modell / Daten | Module / Lifecycle |
| Berührt | `lib/ecore`, `lib/events` | `lib/core`, `app/default/main.ts`, Paket-`index.ts` |
| Löst | S1, S2 (Voraussetzung), S10 | S4, S5, teilweise S8 |
| Kritischer Pfad für | Stufen 1–4 (Generator, Boardmodell, UI) | Drittanbieter-Widgets, Buildgröße |

Die Stränge überschneiden sich an genau einer Stelle: der Frage, **wer zur Laufzeit
Dienste hält** — heute der globale Inversify-Container aus `lib/core`. Diese Frage
gehört zu Strang B und wird in E1 entschieden. Solange sie offen ist, kann Strang A
ungestört laufen, weil er den Container gar nicht anfasst.

**Empfohlene Startreihenfolge:** A1 und B1 gleichzeitig beginnen. A1 ist eine
Machbarkeitsprüfung mit klarem Ja/Nein-Ergebnis, B1 ist eine Bestandsaufnahme —
beides liefert innerhalb weniger Tage die Grundlage, um den Rest verbindlich zu planen.

---

## 2. Entscheidungen, die vor der Breitenarbeit fallen müssen

Diese drei Punkte kann ich nicht aus dem Code ableiten; sie sind Projektentscheidungen.
Ich gebe jeweils eine Empfehlung.

### E1 — Ersetzt die tsm-`ServiceRegistry` Inversify, oder liegt sie darüber?

71 Pakete greifen heute direkt auf den globalen Inversify-`Container` zu. Ein Austausch
würde alle 71 gleichzeitig treffen.

**Empfehlung: Adapter, kein Ersatz.** Der Inversify-Container bleibt die
Auflösungsmaschine; eine dünne `ServiceRegistry`-Implementierung delegiert
`register`/`bind`/`get` an ihn. Damit funktionieren alte und neue Pakete zur gleichen
Zeit, und die Migration kann paketweise laufen. tsm gibt die Registry als Interface
vor (`src/types.ts`), nicht als Implementierung — der Adapter ist also vorgesehen.

### E2 — Wie weit soll tsm gehen: Lifecycle oder echtes Laufzeitladen?

Zwei getrennte Ausbaustufen, die oft in einen Topf geworfen werden:

- **B-Ziel 1 — expliziter Lifecycle.** Nebenwirkungsimporte werden zu
  `activate(ctx)`/`deactivate(ctx)`. Pakete bleiben Build-Abhängigkeiten. Beseitigt
  S4 vollständig, ist rückwärtskompatibel und braucht tsm noch gar nicht.
- **B-Ziel 2 — Laufzeitladen.** Manifeste, `entry`-URLs, Shared Libraries über
  `window.__tsm__`, Vite-Plugin. Beseitigt S5 und entlastet den Build.

**Empfehlung: Ziel 1 vollständig, bevor Ziel 2 beginnt.** Ziel 1 ist die eigentliche
Arbeit; Ziel 2 ist danach überwiegend Konfiguration. Wer beides mischt, debuggt
Ladefehler und Reihenfolgefehler gleichzeitig.

### E3 — `nsURI`-Schema

Die 41 Modelle tragen heute Platzhalter wie `http://example.com/baseconnection`.
Vorschlag als verbindliche Konvention:

```
https://eclipse.dev/daanse/board/<bereich>/<paket>/<major.minor>
```

Beispiel: `https://eclipse.dev/daanse/board/connection/rest/1.0`

Die Entscheidung muss **vor A3** fallen, weil ab dann Modelle über die Registry
aufgelöst werden und der `nsURI` zur Identität wird. Eine spätere Änderung
invalidiert gespeicherte Boards.

---

## 3. Strang A — EMFTs-Core

### Gute Nachricht vorweg

`@emfts/core` enthält bereits eine **Kompatibilitätsschicht für `@masagroup/ecore`** —
also genau für die Runtime, aus der `packages/lib/ecore` portiert wurde
(`EMFTs/emfts/src/ecore/index.ts`). Vorhanden sind unter anderem:

- `EResourceSetImpl` — mit bereits registrierter XMI-Factory für `.ecore` und `.xmi`
- `getEcorePackage()`, `ECORE_NS_URI`, `URI`
- `loadFromString()` auf `XMIResource`

Das ist die Voraussetzung dafür, dass A1 realistisch in Tagen und nicht in Wochen geht.

### A1 — Machbarkeitsprüfung: `EcoreMetadataService` portieren

**Umfang:** eine Datei, 379 Zeilen —
`packages/lib/events/src/registry/EcoreMetadataService.ts`. Sie ist der einzige echte
Konsument von `lib/ecore` und benutzt dessen API breit genug, um als Prüfstein zu taugen.

**Status: erledigt** (Commits `d1be7c77`, `1c3ea123`). Vorgehen war: erst ein
runtime-neutraler Referenztest gegen die alte Implementierung (9 Zusicherungen,
grün), dann der Runtime-Tausch, dann derselbe Test unverändert gegen
`@emfts/core` — ebenfalls grün. Zusätzlich verifiziert: `tsc --noEmit`,
`vite build`, und `vue-tsc` auf `ui.vue.widget.map` als abhängigem Konsumenten.

**Ergebnis: `@emfts/core` trägt.** Verwendet wurde `0.1.1-next.16` von npm
(`dist-tag: next`; `latest` ist mit `0.1.0` deutlich älter und ohne die
Kompatibilitätsschicht).

**Die tatsächlichen API-Abweichungen** — es waren 18, nicht 5. Die wichtigste
Erkenntnis: `@emfts/core` verwendet durchgängig **Java-Style-Getter**, wo
`lib/ecore` Properties anbot.

| Board App (lib/ecore) | `@emfts/core` |
|---|---|
| `EResourceSet` (Typ) | `ResourceSet` |
| `new URI(s)` | `URI.createURI(s)` — Konstruktor ist privat |
| `resource.eContents()` | `resource.getContents()` (bleibt `EList`) |
| `registry.registerPackage(pkg)` | `registry.set(nsURI, pkg)` |
| `registry.getPackage(uri)` | `registry.getEPackage(uri)` |
| `pkg.eClassifiers` | `pkg.getEClassifiers()` → `EList` |
| `pkg.nsURI` | `pkg.getNsURI()` |
| `eClass.name` | `eClass.getName()` |
| `eClass.eOperations` | `getEOperations()` → **Array** |
| `eClass.eSuperTypes` | `getESuperTypes()` → **Array** |
| `eClass.eAllStructuralFeatures` | `getEAllStructuralFeatures()` → **Array** |
| `classifier.ePackage` | `classifier.getEPackage()` |
| `op.eParameters` | `getEParameters()` → **Array** |
| `param.eType` / `.lowerBound` / `.name` | `getEType()` / `getLowerBound()` / `getName()` |
| `feature.upperBound` | `getUpperBound()` |
| `ann.source` | `ann.getSource()` |
| `ann.details.getValue(k)` | `ann.getDetails().getByKey(k)` |
| `resource.loadFromString(…)` | dort als **optional** deklariert (`loadFromString?`) |

Beachtenswert: Die Rückgabetypen sind **uneinheitlich** — `getEClassifiers()`
liefert eine `EList` mit `size()`/`get()`, `getEOperations()` dagegen ein
natives Array. Das ist beim Portieren die häufigste Fehlerquelle.

**Der eigentliche Befund — teilweise typisierte Materialisierung**

Beim Laden einer `.ecore`-Datei materialisiert `@emfts/core` `EPackage`,
`EClass` und `EAnnotation` als typisierte Objekte (`BasicEClass`,
`BasicEAnnotation`), die darin verschachtelten `EOperation`, `EParameter` und
die Einträge der Detail-Map dagegen als `DynamicEObject` — mit ausschließlich
`eClass()` und `eGet()`. Ein `operation.getEAnnotation(source)`, das die
`EModelElement`-Schnittstelle zusagt, schlägt deshalb zur Laufzeit fehl.

Gelöst über zwei kleine Helfer (`readFeature`, `toArray`), die den typisierten
Zugriff bevorzugen und sonst auf `eGet` zurückfallen. Reflektives Lesen eines
Metamodells ist idiomatisches EMF, und der Code bleibt unverändert gültig,
sobald die Runtime auch diese Elemente typisiert liefert.

**Offene Punkte für einen Beitrag an `@emfts/core`:**

1. `EOperation`, `EParameter` und Detail-Einträge beim XMI-Laden typisiert
   materialisieren — die `Basic*`-Klassen existieren bereits, der Loader nutzt
   sie an dieser Stelle nur nicht.
2. `registerPackage()` auch auf der Instanz-Registry anbieten; heute existiert
   sie nur auf der über `createPackageRegistry()` erzeugten Variante.

**Nebenbefund (Lizenz, unabhängig von der Portierung):** `packages/lib/ecore`
trägt in den Dateiköpfen **MPL-2.0 (MASA Group)**, nicht EPL-2.0 wie der Rest
des Projekts. Das ist vor A2 kurz zu prüfen — es spricht zusätzlich für das
Entfernen des Pakets.

**Nebenbefund (Modellfehler):** In `SystemActions.ecore` trägt die Klasse
`PageActions` kein `eSuperTypes`, obwohl ihre Operation `setPageVariable` eine
`WidgetAction`-Annotation hat. Sie wird deshalb vom Service übersprungen — es
werden 2 statt 3 Aktionen gefunden. Das Verhalten ist im Referenztest
festgehalten; ob das Modell oder die Erwartung falsch ist, gehört separat
geklärt.

### A2 — `lib/ecore` entfernen

**Freigegeben** — A1 ist grün, `lib/events` hat keinen Bezug mehr auf `lib/ecore`.

- `packages/lib/ecore` löschen — 355 Dateien, ~26.000 LOC, ein Build weniger
- Abhängigkeitseintrag in `packages/lib/events/package.json` austauschen
- `packages/lib/ecore/vite.config.ts` und die Referenz in der Workspace-Liste bereinigen

**Akzeptanzkriterium:** Vollbuild grün, `grep -r "lib.ecore" packages` liefert keine
Treffer mehr.

### A3 — `nsURI`-Migration der 41 Modelle

Nach Entscheidung E3.

- `.ecore`-Dateien auf das neue Schema umstellen
- Neu generieren, damit die `@ModelClass({type: …})`-Annotationen mitziehen
- Prüfen, welche der 193 generierten Dateien sich ändern — die Diffs sollten
  ausschließlich URIs betreffen

**Akzeptanzkriterium:** kein `example.com` mehr unter `packages/**/model/*.ecore`,
Vollbuild grün, App startet.

### A4 — Layering-Verletzung auflösen (S10)

`packages/lib/factory/variableWrapper` hängt an
`org.eclipse.daanse.board.app.ui.vue.composables`. Die benötigte Funktionalität
identifizieren und entweder nach `lib` ziehen oder das Paket nach `ui` verschieben.

**Akzeptanzkriterium:** keine `lib → ui`-Kante mehr; `packages/lib/**` enthält kein
`vue` als Abhängigkeit.

### A5 — Entscheidungsvorlage für Stufe 1 (Generator)

Kein Umbau, sondern ein Bewertungsschritt: Ein Modell — Vorschlag
`lib/connection/rest` — mit `@emfts/codegen` generieren und die Ausgabe gegen das
Ergebnis von `tools/generator/main.js` diffen. Daraus entsteht die Liste der
Funktionslücken, die `@emfts/codegen` noch fehlen (bekannt: `--no_factories`, das
Annotations-Paket `lib.annotations`).

Ergebnis ist die Grundlage, um Stufe 1 verbindlich zu planen — nicht deren Beginn.

---

## 4. Strang B — tsm

### B1 — Bestandsaufnahme und Vertrag festlegen

Der Vertrag existiert bereits ungenutzt in `packages/lib/core/src/api/`:

```typescript
export interface SetupI  { init(container: Container): void }
export interface ServiceI{ activate(): void; deactivate(): void }
```

Ist-Stand:

| | Anzahl |
|---|---|
| Pakete mit Toplevel-`container.bind`/`isBound` in `index.ts` | 71 |
| davon `registerWidget` / `registerDatasourceType` / `registerConnection` | 50 |
| Pakete, die `init` exportieren | **1** |

Zu tun:

- Die 71 Pakete in Familien gruppieren: Widget, Datasource, Connection, Composer,
  Repository, Persistence, Layout, Variable, Sonstige. Registrierungsmuster je Familie
  dokumentieren — sie sind innerhalb einer Familie fast identisch, das macht die
  Migration schematisch.
- Den Zielvertrag festlegen. Vorschlag, damit derselbe Code beide Welten bedient:

```typescript
export function activate(ctx: ModuleContext): void | Promise<void>
export function deactivate(ctx: ModuleContext): void | Promise<void>
```

  mit einem `ModuleContext`, der in Phase 1 vom Board selbst gestellt wird und in
  Phase 2 der von tsm gestellte ist. `ServiceI` deckt die Semantik bereits ab und
  sollte darauf abgebildet, nicht ersetzt werden.

**Akzeptanzkriterium:** eine Tabelle aller 71 Pakete mit Familie, Registrierungsmuster
und geschätztem Migrationsaufwand; ein schriftlich fixierter `activate`-Vertrag.

### B2 — ServiceRegistry-Adapter über Inversify (Entscheidung E1)

Ein neues Paket, Vorschlag `org.eclipse.daanse.board.app.lib.modules`:

- implementiert das `ServiceRegistry`-Interface aus `tsm/src/types.ts`
  (`register`, `bind`, `bindClass`, `get`, `has`, `checkRequirements`, `unregister`,
  `getServiceIds`, Listener)
- delegiert auf den bestehenden `container` aus `lib/core`
- bildet String-Service-IDs auf `Symbol.for(id)` ab — das ist genau die Konvention,
  die die Board App ohnehin schon benutzt

**Akzeptanzkriterium:** ein Paket, das über den Adapter registriert wurde, ist per
`container.get(Symbol.for(id))` auflösbar und umgekehrt. Unit-Tests für beide Richtungen.

### B3 — Pilotfamilie auf `activate` umstellen

Vorschlag: **die Widget-Familie** — homogenes Muster, gut isoliert, und mit ~25
Paketen groß genug, um die Tragfähigkeit zu zeigen.

Pro Paket:

1. Toplevel-Nebenwirkung in `export function activate(ctx)` verschieben
2. `deactivate(ctx)` ergänzen, das die Registrierung zurücknimmt
3. Den Import in `main.ts` von `import 'paket'` auf einen Eintrag in einer Modulliste umstellen

Parallel entsteht in `app/default` ein schlanker Bootstrapper, der die Liste in
definierter Reihenfolge aktiviert und **auf `await` besteht** — das beseitigt die
Race Condition aus `main.ts:68`.

**Akzeptanzkriterium:** kein `import '…widget…'` mehr in `main.ts`; die App startet
mit identischem Widget-Angebot; ein Widget lässt sich zur Laufzeit deaktivieren und
verschwindet aus der Palette.

### B4 — Restliche Familien nachziehen

Datasource, Connection, Composer, Repository, Persistence, Layout, Variable. Schematisch
nach dem Muster aus B3. Am Ende:

- `main.ts` enthält keine nebenwirkungsgetriebenen Importe mehr
- die Demo-Seiten (`'Seite 1'`, `'Seite 2'`) und die Testaktionen sind aus `main.ts`
  entfernt oder hinter einen Entwicklungsschalter gelegt
- `RootService.activate()` wird entweder benutzt oder gelöscht — der auskommentierte
  Block in `bootstrap.ts` verschwindet

**Akzeptanzkriterium:** `main.ts` unter 100 Zeilen; Startreihenfolge explizit und
`await`-korrekt; kein `console.warn`-Schlucken von Init-Fehlern mehr — fehlgeschlagene
Pflichtmodule brechen den Start ab, optionale werden protokolliert.

### B5 — Echtes Laufzeitladen (Ziel 2 aus E2)

Erst wenn B4 vollständig ist.

- API-Pakete abtrennen: tsm transportiert keine Typen, also brauchen Provider und
  Konsument ein gemeinsames, abhängigkeitsfreies Interface-Paket je Service. Das ist
  dieselbe Regel, die `docs/mdx-workbench-integration-plan.md` bereits für die
  Workbench festhält.
- `tsm.manifest.json` je Modul: `id`, `name`, `version`, `entry`, `exports`, dazu
  `provides` / `requiresService` (alles nicht strikt Nötige als `optional: true`,
  weil `requiresService` sonst fatal ist), `dependencies` mit SemVer-Bereich,
  `priority` für Provider wie Connection und Language.
- Shared Libraries deklarieren: `vue`, `vue-router`, `pinia`, `vuestic-ui` über
  `sharedDependencies`, damit Module sie nicht mitbündeln.
- Vite-Plugin aus `tsm/src/vite` für den Modulbau einsetzen.
- `app/default/package.json` von den rund 120 Workspace-Abhängigkeiten befreien.

**Akzeptanzkriterium:** ein Widget, das nicht in `package.json` steht, lässt sich zur
Laufzeit aus einem Verzeichnis laden und benutzen.

**Erwarteter Nebeneffekt auf S8:** Sobald die App-Shell nicht mehr an 120 Paketen hängt,
sollten `SKIP_TYPE_CHECK=true` und `--max-old-space-size=65536` entfallen können. Das
ist am Ende von B5 zu überprüfen, nicht vorher anzunehmen.

---

## 5. Meilensteine

| M | Inhalt | Fertig, wenn |
|---|---|---|
| **M1** | A1 + B1 | `lib/events` läuft auf `@emfts/core`; Paketinventar und `activate`-Vertrag stehen |
| **M2** | A2 + A4 + B2 | `lib/ecore` ist weg; keine `lib → ui`-Kante; ServiceRegistry-Adapter getestet |
| **M3** | A3 + B3 | `nsURI`s migriert; Widget-Familie auf `activate`; `main.ts` frei von Widget-Importen |
| **M4** | B4 | Alle Familien migriert; `main.ts` unter 100 Zeilen; Start ist deterministisch |
| **M5** | A5 + B5 | Generator-Entscheidungsvorlage liegt vor; Widgets zur Laufzeit ladbar |

M1 ist der einzige Meilenstein mit echtem Erkenntnisrisiko. Ab M2 ist die Arbeit
überwiegend schematisch.

---

## 6. Definition of Done je migriertem Paket

Gilt für B3 und B4, damit die Migration nicht in halbfertigen Zuständen versandet:

- [ ] `activate(ctx)` exportiert, keine Registrierung mehr auf Modul-Toplevel
- [ ] `deactivate(ctx)` nimmt jede Registrierung aus `activate` zurück
- [ ] Kein direkter Import des globalen `container` mehr — Zugriff nur über `ctx.services`
- [ ] Service-IDs als benannte Konstanten exportiert, nicht inline `Symbol.for('…')`
- [ ] Paket ist in der Modulliste von `app/default` eingetragen
- [ ] Build grün, vorhandene Tests grün
- [ ] `console.log`-Reste aus der Registrierung entfernt (z. B. `'Refistering WidgetRepository'`)

---

## 7. Risiken

| Risiko | Auswirkung | Umgang |
|---|---|---|
| `@emfts/core` deckt eine in `lib/events` benötigte API nicht ab | A2 blockiert | A1 zuerst; Lücken als Beitrag nach `@emfts/core`, nicht als lokaler Patch |
| `@emfts/core` ist als `0.1.1-next.3` versioniert und noch in Bewegung | Brüche bei Updates | Version pinnen; die Board App als ersten großen Konsumenten bewusst einplanen |
| Deaktivierung ist bei 71 Paketen nicht überall sauber möglich | `deactivate` bleibt Attrappe | In B1 pro Familie prüfen; wo echtes Entladen nicht geht, ehrlich als „nicht deaktivierbar“ markieren statt leeres `deactivate` zu schreiben |
| `nsURI`-Migration invalidiert gespeicherte Boards | Datenverlust bei Nutzern | A3 vor der Boardmodell-Umstellung (Stufe 2) durchführen, solange die `nsURI`s noch nirgends persistiert sind |
| Zwei parallele Stränge auf einem Branch | Merge-Konflikte in `main.ts` | Strang A fasst `main.ts` nicht an; Strang B fasst `lib/ecore` und Modelle nicht an — die Trennung ist sauber |

---

## 8. Unmittelbar nächster Schritt

**A1 beginnen:** `EcoreMetadataService` auf `@emfts/core` portieren, gegen die fünf in
Abschnitt 3 gelisteten API-Abweichungen. Parallel **B1**: die 71 Pakete inventarisieren.

Beides zusammen beantwortet die zwei Fragen, an denen der ganze Rest hängt — trägt
`@emfts/core`, und wie schematisch ist die `activate`-Migration wirklich.
